"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { tutorials, getTutorialsByCategory } from "@/data/tutorials";
import { projects as allProjects } from "@/data/projects";
import { categories } from "@/data/categories";
import { TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<string[]>([]);
  const [projectResults, setProjectResults] = useState<any[]>([]);

  useEffect(() => {
    const q = query.toLowerCase().trim();
    if (!q) {
      setResults(tutorials.map((t) => t.slug));
      setProjectResults([]);
      return;
    }

    const matchedTuts = tutorials.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.marathiTitle.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.categoryId.toLowerCase().includes(q) ||
        t.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
    ).map((t) => t.slug);

    const matchedProjects = allProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.marathiTitle.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.categoryId.toLowerCase().includes(q)
    );

    setResults(matchedTuts);
    setProjectResults(matchedProjects);
  }, [query]);

  const matchedTutorials = tutorials.filter((t) => results.includes(t.slug));

  return (
    <>
      <SectionHeader
        title="🔎 Search"
        subtitle="Marathi + English दोन्ही भाषांतून शोधा"
      />

      <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔎 उदा. python, html, loop, variable..."
          className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
          autoFocus
        />
      </form>

      <p className="text-sm text-gray-500 mb-4">
        {query
          ? `"${query}" साठी ${matchedTutorials.length + projectResults.length} निकाल`
          : `सर्व ${matchedTutorials.length} lessons`}
      </p>

      {matchedTutorials.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">📖 Lessons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedTutorials.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        </div>
      )}

      {projectResults.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">🛠️ Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectResults.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      )}

      {query && matchedTutorials.length === 0 && projectResults.length === 0 && (
        <div className="text-center py-12">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold">काहीही सापडले नाही</h3>
          <p className="text-gray-500 mt-2">दुसऱ्या शब्दात शोधण्याचा प्रयत्न करा</p>
        </div>
      )}
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
