"use client";

import Navbar from "@/components/Navbar";
import ContinueLearning from "@/components/ContinueLearning";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { TutorialCard, SectionHeader } from "@/components/Cards";
import TutorialFilters, {
  defaultTutorialFilters,
  applyTutorialFilters,
  hasActiveFilters,
  TutorialFiltersState,
} from "@/components/TutorialFilters";
import { useMemo, useState } from "react";

export default function LearnPage() {
  const [filters, setFilters] = useState<TutorialFiltersState>(defaultTutorialFilters);

  const filtered = useMemo(() => applyTutorialFilters(tutorials, filters), [filters]);
  const visibleCategories = categories.filter((cat) =>
    filtered.some((t) => t.categoryId === cat.id)
  );

  return (
    <>
      <Navbar />
      <ContinueLearning />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📚 Learn - शिका"
          subtitle={`सर्व categories मधील lessons (एकूण ${filtered.length})`}
        />
        <TutorialFilters
          filters={filters}
          onChange={setFilters}
          resultCount={filtered.length}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold marathi mb-2">कोणतेही lessons सापडले नाहीत</h3>
            <p className="text-gray-500 mb-6">वेगळे filters निवडून पहा.</p>
            {hasActiveFilters(filters) && (
              <button
                onClick={() => setFilters(defaultTutorialFilters)}
                className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium"
              >
                फिल्टर साफ करा
              </button>
            )}
          </div>
        ) : (
          visibleCategories.map((cat) => {
            const catTuts = filtered.filter((t) => t.categoryId === cat.id);
            if (catTuts.length === 0) return null;
            return (
              <section key={cat.id} className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`category-box w-8 h-8 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-lg`}
                  >
                    {cat.icon}
                  </span>
                  <h2 className="text-xl font-semibold marathi">
                    {cat.name} - {cat.marathiName}
                  </h2>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat.chip}`}>
                    {catTuts.length}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catTuts.map((t) => (
                    <TutorialCard key={t.slug} tutorial={t} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>
      <Footer />
    </>
  );
}