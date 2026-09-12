"use client";

import { useState, useCallback, useRef, useEffect } from "react";

interface CodeEditorProps {
  code: string;
  language?: string;
  initialOutput?: string;
}

// Build a sandboxed document for HTML/CSS rendering.
function buildHtmlDoc(code: string) {
  return code;
}

// Build a sandboxed document for CSS that auto-wraps in HTML.
function buildCssDoc(code: string) {
  return `<!doctype html><html><head><style>${code}</style></head><body><div class="demo">Hi</div></body></html>`;
}

// Build a sandboxed worker doc for JavaScript that reports console output via postMessage.
function buildJsDoc(code: string) {
  const runner = `
(function(){
  var out = [];
  function fmt(o){
    if(typeof o === 'string') return o;
    try { return JSON.stringify(o); } catch(e){ return String(o); }
  }
  ['log','info','warn','error','debug'].forEach(function(m){
    var orig = console[m];
    console[m] = function(){ 
      out.push(Array.prototype.slice.call(arguments).map(fmt).join(' '));
      orig && orig.apply(console, arguments);
    };
  });
  try {
    (function(){ ${code} })();
  } catch(e) {
    out.push('Error: ' + (e && e.message ? e.message : String(e)));
  }
  parent.postMessage({ __mlhOut: out }, '*');
})();
`;
  return `<!doctype html><html><head></head><body><script>${runner}<\/script></body></html>`;
}

interface PyodideGlobal {
  loadPyodide: (opts?: Record<string, unknown>) => Promise<unknown>;
  runPython?: (code: string) => unknown;
}

export default function CodeEditor({ code, language = "html", initialOutput }: CodeEditorProps) {
  const [output, setOutput] = useState<string>(initialOutput || "");
  const [activeTab, setActiveTab] = useState<"code" | "output">("code");
  const [codeValue, setCodeValue] = useState(code);
  const [doc, setDoc] = useState<string>("");
  const [pyState, setPyState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const jsFrame = useRef<HTMLIFrameElement | null>(null);
  const pyodideRef = useRef<any>(null);

  // Listen for messages coming back from the sandboxed JS iframe.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.data && typeof e.data === "object" && Array.isArray(e.data.__mlhOut)) {
        const lines = e.data.__mlhOut as string[];
        setOutput(lines.length ? lines.join("\n") : "(कोणतेही output नाही)");
      }
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  // Re-trigger sandboxed JS execution when the frame updates (srcdoc change reloads it).
  useEffect(() => {
    if (doc && language === "javascript") {
      setActiveTab("output");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doc]);

  const runCode = useCallback(() => {
    const lang = language.toLowerCase();
    if (lang === "html" || lang === "htm" || lang === "xml") {
      setDoc(buildHtmlDoc(codeValue));
      setOutput("");
      setActiveTab("output");
    } else if (lang === "css") {
      setDoc(buildCssDoc(codeValue));
      setOutput("");
      setActiveTab("output");
    } else if (lang === "javascript" || lang === "js" || lang === "ts") {
      // Generate fresh sandboxed doc; iframe srcdoc triggers execution + postMessage.
      setDoc("");
      setOutput("चालवत आहे...");
      setActiveTab("output");
      // Force new document after a tick so srcdoc change is detected.
      requestAnimationFrame(() => setDoc(buildJsDoc(codeValue)));
    } else if (lang === "python" || lang === "py") {
      runPython(codeValue);
    } else {
      // Other languages (bash/c/etc.): simulated output.
      setOutput(
        typeof initialOutput === "string" && initialOutput
          ? initialOutput
          : "इथे output दिसेल.\n(" + lang + " execution लवकरच!)"
      );
      setActiveTab("output");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [codeValue, language, initialOutput]);

  async function runPython(src: string) {
    setActiveTab("output");
    setOutput("Python चालवत आहे...");
    try {
      if (!pyodideRef.current && typeof window !== "undefined" && !(window as any).loadPyodide) {
        setPyState("loading");
        await new Promise<void>((resolve, reject) => {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js";
          s.onload = () => resolve();
          s.onerror = () => reject(new Error("Pyodide load failed"));
          document.head.appendChild(s);
        });
      }
      if (!pyodideRef.current) {
        const py: PyodideGlobal = (window as any).loadPyodide
          ? await (window as any).loadPyodide()
          : null;
        if (!py) throw new Error("Pyodide unavailable");
        pyodideRef.current = py;
        (py as any).setStdout?.({ batched: (t: string) => {} });
      }
      setPyState("ready");
      const py = pyodideRef.current;
      // Capture print() output.
      let captured = "";
      py.setStdout({ batched: (t: string) => { captured += t + "\n"; } });
      (py as any).setStderr?.({ batched: (t: string) => { captured += t + "\n"; } });
      try {
        const result = await py.runPythonAsync(src);
        if (typeof result !== "undefined" && !(result && result.length === 0)) {
          captured += String(result) + "\n";
        }
      } catch (e: any) {
        captured += "Error: " + (e?.message || String(e));
      }
      setOutput(captured.trim() || "(कोणतेही output नाही)");
    } catch (err: any) {
      setPyState("error");
      setOutput("Python execution error: " + (err?.message || String(err)));
    }
  }

  return (
    <div className="rounded-lg border border-gray-700 overflow-hidden bg-gray-900">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-gray-400">{language}</span>
          {pyState === "loading" && <span className="text-yellow-400">📦 Python loading...</span>}
          <button
            onClick={() => setActiveTab("code")}
            className={`px-2 py-1 rounded ${activeTab === "code" ? "bg-gray-700 text-white" : "text-gray-400"}`}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab("output")}
            className={`px-2 py-1 rounded ${activeTab === "output" ? "bg-gray-700 text-white" : "text-gray-400"}`}
          >
            Output
          </button>
          <button
            onClick={runCode}
            className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white font-medium"
          >
            ▶ Run
          </button>
        </div>
      </div>

      {activeTab === "code" && (
        <textarea
          value={codeValue}
          onChange={(e) => setCodeValue(e.target.value)}
          spellCheck={false}
          className="w-full bg-gray-900 text-green-400 font-mono text-sm p-4 min-h-[200px] outline-none resize-y"
        />
      )}

      {activeTab === "output" && (
        <div className="p-4 min-h-[100px] text-sm">
          {(language === "html" || language === "css") && doc ? (
            <iframe
              title="code output"
              sandbox="allow-scripts"
              className="w-full min-h-[200px] bg-white dark:bg-gray-950 rounded"
              srcDoc={doc}
            />
          ) : language === "javascript" || language === "js" || language === "ts" ? (
            <>
              <iframe
                ref={jsFrame}
                title="js runner"
                sandbox="allow-scripts"
                className="hidden"
                srcDoc={doc}
              />
              <pre className="whitespace-pre-wrap font-mono text-green-400">{output}</pre>
            </>
          ) : (
            <pre className="whitespace-pre-wrap font-mono text-green-400">{output}</pre>
          )}
          {output === "" && (
            <span className="text-gray-500 text-sm">[ RUN ] बटण दाबा output पाहण्यासाठी</span>
          )}
        </div>
      )}
    </div>
  );
}
