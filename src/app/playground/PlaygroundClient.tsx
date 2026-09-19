"use client";

import { useState } from "react";
import CodeEditor from "@/components/code/CodeEditor";

const presetCode = {
  html: `<h1>नमस्कार मराठी! 🎉</h1>\n<p>हे तुमचं first HTML पेज आहे.</p>\n<button onclick="alert('झालं!')">मला दाबा</button>`,
  python: `# Python playground\nname = "मराठी"\nprint(f"नमस्कार {name}!")\n\nfor i in range(1, 6):\n    print("कोडिंग मजा:", i)`,
  css: `body {\n  font-family: sans-serif;\n  background: #f0f9ff;\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n}\nh1 {\n  color: #ea580c;\n}`,
  javascript: `// JS playground\nconst words = ["कोडिंग", "शिकणे", "मजा"];\nwords.forEach(w => console.log("मराठीत " + w + " ❤️"));`,
};

export default function PlaygroundClient() {
  const [lang, setLang] = useState<keyof typeof presetCode>("python");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
          🧪 कोड Playground
        </h1>
        <p className="text-gray-600 dark:text-gray-300 marathi">
          Browser मध्येच कोड लिहा आणि चालवा — कोणतीही स्थापना नाही.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {Object.keys(presetCode).map((key) => (
          <button
            key={key}
            onClick={() => setLang(key as keyof typeof presetCode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              lang === key
                ? "bg-primary-600 text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      <CodeEditor code={presetCode[lang]} language={lang} />
    </main>
  );
}