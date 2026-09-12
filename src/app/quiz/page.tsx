"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { useState } from "react";
import QuizPlayer from "@/components/QuizPlayer";
import Link from "next/link";

export default function QuizPage() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const selectedTutorial = selectedSlug ? tutorials.find((t) => t.slug === selectedSlug) : null;

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold marathi mb-2">🧩 Quiz Hub</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 marathi">
          तुमची समज तपासा. प्रत्येक topic च्या शेवटी quiz आहे. Certificate नाही - फक्त progress आणि आत्मविश्वास.
        </p>

        {!selectedTutorial ? (
          <div className="space-y-6">
            {categories.map((cat) => {
              const catTuts = tutorials.filter((t) => t.categoryId === cat.id);
              if (catTuts.length === 0) return null;
              return (
                <div key={cat.id}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`w-6 h-6 rounded ${cat.color} flex items-center justify-center text-sm`}>{cat.icon}</span>
                    <h2 className="font-semibold">{cat.name}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {catTuts.map((t) => (
                      <button
                        key={t.slug}
                        onClick={() => setSelectedSlug(t.slug)}
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-800 text-left transition-colors"
                      >
                        <span className="font-medium marathi">{t.marathiTitle}</span>
                        <span className="block text-xs text-gray-500 mt-1">🧩 {t.quiz.length} प्रश्न</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : selectedTutorial ? (
          <div>
            <button
              onClick={() => setSelectedSlug(null)}
              className="mb-4 px-4 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              ⬅️ परत Quiz list
            </button>
            <h2 className="text-2xl font-bold marathi mb-6">{selectedTutorial.marathiTitle}</h2>
            <QuizPlayer
              slug={selectedTutorial.slug}
              quiz={selectedTutorial.quiz}
              onComplete={() => {}}
            />
            <div className="mt-6 text-center">
              <Link
                href={`/tutorial/${selectedTutorial.slug}`}
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                📖 हा topic पुन्हा वाचा
              </Link>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
