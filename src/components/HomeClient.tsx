"use client";

import { useState, type ReactNode } from "react";
import { TutorialCard, SectionHeader, type TutorialSummary } from "@/components/Cards";
import type { Category } from "@/data/categories";

const quickFilters = [
  { id: "all", icon: "🌐", label: "सर्व", chip: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" },
  { id: "computer", icon: "💻", label: "Computer Basics" },
  { id: "web", icon: "🌐", label: "Web Dev" },
  { id: "python", icon: "🐍", label: "Python" },
  { id: "ai", icon: "🤖", label: "AI & Tech" },
  { id: "electronics", icon: "🔌", label: "Electronics" },
];

export default function HomeClient({
  categories,
  featured,
  children,
}: {
  categories: Category[];
  featured: Record<string, TutorialSummary[]>;
  children: ReactNode;
}) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterChip = (id: string) => {
    if (id === "all") return quickFilters[0].chip;
    const cat = categories.find((c) => c.id === id);
    return cat?.chip || quickFilters[0].chip;
  };

  const featuredTutorials = featured[activeFilter] ?? [];

  return (
    <>
      {/* Quick Search + Filter Bar */}
      <section className="pb-8">
        <form action="/search" method="get" className="max-w-xl mx-auto flex gap-2 mb-5">
          <input
            type="text"
            name="q"
            placeholder="Python, Web Dev, Linux या इतर विषय शोधा..."
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full whitespace-nowrap"
          >
            शोधा
          </button>
        </form>

        {/* Quick Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2">
          {quickFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`filter-pill px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeFilter === f.id
                  ? `${filterChip(f.id)} border-transparent filter-pill-active`
                  : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              {f.icon} {f.label}
            </button>
          ))}
        </div>
      </section>

      {children}

      {/* Featured & Trending Tutorials */}
      <section id="featured" className="py-8">
        <SectionHeader
          title={
            activeFilter === "all"
              ? "🔥 Featured & Trending Lessons"
              : `🔥 ${categories.find((c) => c.id === activeFilter)?.name || ""} Lessons`
          }
          subtitle={
            activeFilter === "all"
              ? "सर्वात जास्त शिकले जाणारे topics"
              : "तुमच्या पसंतीच्या category मधील topics"
          }
          link="/tutorials"
          linkText="सर्व tutorials"
        />
        {featuredTutorials.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTutorials.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">📭</div>
            <p className="text-gray-500 mb-4">या category मध्ये अजून lessons नाहीत.</p>
            <button
              onClick={() => setActiveFilter("all")}
              className="filter-pill px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium"
            >
              🌐 सर्व lessons बघा
            </button>
          </div>
        )}
      </section>
    </>
  );
}