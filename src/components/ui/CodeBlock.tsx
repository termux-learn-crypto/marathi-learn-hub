"use client";

import { useState } from "react";

// Minimal client-side keyword highlighting for common languages.
// Avoids heavy syntax-highlighting deps; copy + output shift are the core value.
const keywordMap: Record<string, string[]> = {
  python: ["def", "return", "if", "else", "elif", "for", "while", "in", "import", "from", "class", "True", "False", "None", "print", "self", "range", "try", "except", "with", "as", "and", "or", "not", "lambda"],
  javascript: ["function", "return", "const", "let", "var", "if", "else", "for", "while", "class", "new", "import", "export", "try", "catch", "await", "async", "this", "typeof", "true", "false", "null"],
  html: ["<!DOCTYPE", "html", "head", "body", "div", "p", "h1", "h2", "h3", "span", "a", "img", "button", "ul", "li", "script", "style", "meta", "link"],
  bash: ["echo", "cd", "ls", "mkdir", "sudo", "apt", "npm", "git", "chmod", "export", "if", "then", "fi", "for", "done"],
};

function highlight(code: string, language?: string) {
  const kw = keywordMap[language ?? ""] ?? [];
  if (kw.length === 0) return code;
  const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const re = new RegExp(`\\b(${kw.join("|")})\\b`, "g");
  const decorated = escaped.replace(re, (m) => `<span class="text-marathi-500 dark:text-marathi-400 font-medium">${m}</span>`);
  // strings
  return decorated.replace(
    /("[^"\n]*"|'[^'\n]*')/g,
    (m) => `<span class="text-emerald-600 dark:text-emerald-400">${m}</span>`
  );
}

interface CodeBlockProps {
  code: string;
  language?: string;
  variant?: "block" | "inline";
}

export function CodeBlock({ code, language, variant = "block" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  };

  if (variant === "inline") {
    return (
      <code className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-primary-600 dark:text-primary-300 text-sm font-mono">
        {code}
      </code>
    );
  }

  return (
    <div className="group relative rounded-xl overflow-hidden border border-gray-700 dark:border-gray-600 bg-gray-900 my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <span className="text-xs font-mono text-gray-400">{language ?? "code"}</span>
        <button
          onClick={copy}
          className="text-xs px-2 py-0.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-200 transition-colors"
        >
          {copied ? "✓ कॉपी झाले" : "कॉपी करा"}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed">
        <code
          className="text-gray-100 font-mono whitespace-pre"
          dangerouslySetInnerHTML={{ __html: highlight(code, language) }}
        />
      </pre>
      <span className="sr-only">{code}</span>
    </div>
  );
}