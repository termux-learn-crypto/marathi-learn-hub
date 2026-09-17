"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { SectionHeader } from "@/components/Cards";

function BinaryConverter() {
  const [mode, setMode] = useState<"dec" | "bin">("dec");
  const [result, setResult] = useState("");

  const convert = (value: string) => {
    if (mode === "dec") {
      const num = parseInt(value, 10);
      if (!isNaN(num)) setResult(num.toString(2));
    } else {
      const bits = value.replace(/[^01]/g, "");
      setResult(parseInt(bits || "0", 2).toString(10));
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold marathi mb-4">🔢 Binary Converter</h3>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode("dec")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "dec" ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-700"}`}
        >
          Decimal → Binary
        </button>
        <button
          onClick={() => setMode("bin")}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${mode === "bin" ? "bg-primary-600 text-white" : "bg-gray-100 dark:bg-gray-700"}`}
        >
          Binary → Decimal
        </button>
      </div>
      <input
        type="text"
        onChange={(e) => convert(e.target.value)}
        placeholder={mode === "dec" ? "संख्या लिहा (उदा. 25)" : "Binary लिहा (उदा. 11001)"}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none mb-3 focus:ring-2 focus:ring-primary-500"
      />
      {result && (
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30 font-mono text-lg">
          {mode === "dec" ? `Binary: ${result}` : `Decimal: ${result}`}
        </div>
      )}
    </div>
  );
}

function TextCounter() {
  const [text, setText] = useState("");
  const chars = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const lines = text ? text.split("\n").length : 0;

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold marathi mb-4">📝 Text Analyzer</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="इथे मजकूर लिहा..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none min-h-[120px] focus:ring-2 focus:ring-primary-500 marathi"
      />
      <div className="grid grid-cols-3 gap-3 mt-4 text-center">
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="text-2xl font-bold">{chars}</div>
          <div className="text-xs text-gray-500">Characters</div>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="text-2xl font-bold">{words}</div>
          <div className="text-xs text-gray-500">Words</div>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
          <div className="text-2xl font-bold">{lines}</div>
          <div className="text-xs text-gray-500">Lines</div>
        </div>
      </div>
    </div>
  );
}

function AgeCalculator() {
  const [date, setDate] = useState("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calc = () => {
    if (!date) return;
    const birth = new Date(date);
    const now = new Date();
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    if (days < 0) {
      months--;
      days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge({ years, months, days });
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold marathi mb-4">🎂 Age Calculator</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none mb-3"
      />
      <button
        onClick={calc}
        className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg"
      >
        गणना करा
      </button>
      {age && (
        <div className="mt-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/30 text-center">
          <div className="text-2xl font-bold marathi">{age.years} वर्षे</div>
          <div className="text-sm text-gray-500 mt-1">
            {age.months} महिने, {age.days} दिवस
          </div>
        </div>
      )}
    </div>
  );
}

function HexConverter() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<{ mode: "dec" | "hex"; value: string } | null>(null);

  const convert = (input: string) => {
    setValue(input);
    if (!input.trim()) {
      setResult(null);
      return;
    }
    const trimmed = input.trim();
    if (/^#?[0-9a-fA-F]{1,8}$/.test(trimmed.replace(/^#/, ""))) {
      const clean = trimmed.replace(/^#/, "");
      setResult({ mode: "hex", value: parseInt(clean, 16).toString(10) });
    } else {
      const num = parseInt(trimmed, 10);
      if (!isNaN(num)) setResult({ mode: "dec", value: num.toString(16).toUpperCase() });
      else setResult(null);
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold marathi mb-4">🅰️ Hex <span className="text-sm font-normal text-gray-500">/ Decimal</span></h3>
      <p className="text-xs text-gray-500 mb-3 marathi">#FF आणि 255 दोन्ही स्वीकारतो — कोणतीही संख्या लिहा.</p>
      <input
        type="text"
        value={value}
        onChange={(e) => convert(e.target.value)}
        placeholder="उदा. 255 किंवा FF"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none mb-3 focus:ring-2 focus:ring-primary-500 font-mono"
      />
      {result && (
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/30 font-mono text-lg break-all">
          {result.mode === "hex" ? `Decimal: ${result.value}` : `Hex: ${result.value}`}
        </div>
      )}
    </div>
  );
}

function ColorPicker() {
  const [color, setColor] = useState("#6366f1");

  const hex = color;
  const rgb = `${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}`;

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
      <h3 className="text-xl font-bold marathi mb-4">🎨 Color Picker</h3>
      <div
        className="w-full h-24 rounded-xl mb-4 border border-gray-200 dark:border-gray-600"
        style={{ backgroundColor: color }}
      ></div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-full h-12 rounded-lg border border-gray-300 dark:border-gray-600 cursor-pointer"
        aria-label="Color picker"
      />
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-center p-2 rounded bg-gray-50 dark:bg-gray-700 text-sm font-mono">
          <span>HEX</span>
          <button
            onClick={() => navigator.clipboard?.writeText(hex)}
            className="text-primary-600 dark:text-primary-300 font-semibold"
          >
            {hex} 📋
          </button>
        </div>
        <div className="flex justify-between items-center p-2 rounded bg-gray-50 dark:bg-gray-700 text-sm font-mono">
          <span>RGB</span>
          <button
            onClick={() => navigator.clipboard?.writeText(`rgb(${rgb})`)}
            className="text-primary-600 dark:text-primary-300 font-semibold"
          >
            rgb({rgb}) 📋
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="🧰 Tools"
          subtitle="शिकायला आणि वापरायला उपयुक्त साधने"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BinaryConverter />
          <TextCounter />
          <AgeCalculator />
          <HexConverter />
          <ColorPicker />
        </div>

        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 dark:border-gray-600 p-8 text-center">
          <div className="text-4xl mb-3">🔧</div>
          <h3 className="text-lg font-semibold mb-2">आणखी Tools लवकरच</h3>
          <p className="text-gray-500 marathi">
            unit converter, cipher tools आणि इतर साधने नवीन version मध्ये जोडली जातील.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
