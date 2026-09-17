"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionHeader } from "@/components/Cards";
import { glossary, searchGlossary, glossaryCategoryLabels } from "@/data/glossary";

const categoryOrder: (keyof typeof glossaryCategoryLabels)[] = [
  "computer",
  "web",
  "python",
  "electronics",
  "android",
  "networking",
  "ai",
];

export default function GlossaryContent() {
  const [query, setQuery] = useState("");
  const filtered = searchGlossary(query);

  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      label: glossaryCategoryLabels[cat],
      terms: filtered.filter((t) => t.category === cat),
    }))
    .filter((g) => g.terms.length > 0);

  const availableLetters = Array.from(
    new Set(filtered.map((t) => (t.term[0] || "?").toUpperCase()).filter((c) => /[A-Z]/.test(c)))
  ).sort();

  const jumpToLetter = (letter: string) => {
    const el = document.getElementById(`term-${letter.toLowerCase()}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <SectionHeader
          title="📖 Tech Glossary — तंत्रज्ञान शब्दावली"
          subtitle={`${glossary.length} terms — English शब्दांचे सोपे मराठी अर्थ`}
        />

        <form onSubmit={(e) => e.preventDefault()} className="mb-8" role="search">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="🔎 उदा. variable म्हणजे काय? / api, loop, circuit..."
            aria-label="Glossary search"
            className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
            autoFocus
          />
        </form>

        {availableLetters.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-1.5">
            {availableLetters.map((letter) => (
              <a
                key={letter}
                href={`#term-${letter.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  jumpToLetter(letter);
                }}
                className="w-8 h-8 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/40 text-gray-700 dark:text-gray-300 flex items-center justify-center text-sm font-semibold transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        )}

        <p className="text-sm text-gray-500 mb-6">
          {query
            ? `"${query}" साठी ${filtered.length} शब्द`
            : "शब्दावर क्लिक करा किंवा वर search करा"}
        </p>

        {grouped.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold marathi">हा शब्द सापडला नाही</h3>
            <p className="text-gray-500 mt-2 marathi">दुसऱ्या शब्दात शोधण्याचा प्रयत्न करा</p>
          </div>
        )}

        <div className="space-y-10">
          {grouped.map((group) => (
            <section key={group.category}>
              <h2 className="text-2xl font-bold mb-1 marathi">
                {group.label.marathi}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{group.label.english}</p>
              <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                {group.terms.map((t) => (
                  <div
                    key={t.term}
                    id={`term-${t.term[0].toLowerCase()}`}
                    className="p-4 scroll-mt-24"
                  >
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <h3 className="font-semibold text-primary-700 dark:text-primary-300">
                        {t.term}
                      </h3>
                      <span className="text-sm px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-medium marathi">
                        {t.marathiMeaning}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 marathi text-sm leading-relaxed">
                      {t.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}