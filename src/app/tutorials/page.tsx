"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { TutorialCard, SectionHeader } from "@/components/Cards";
import TutorialFilters, {
  defaultTutorialFilters,
  applyTutorialFilters,
  hasActiveFilters,
  TutorialFiltersState,
} from "@/components/TutorialFilters";
import { useCallback, useMemo, useState } from "react";

const validLevels = ["all", "beginner", "intermediate", "advanced"];
const validTimes = ["all", "10", "15", "25", "25+"];

function filtersFromUrl(): TutorialFiltersState {
  if (typeof window === "undefined") return defaultTutorialFilters;
  const sp = new URLSearchParams(window.location.search);
  const level = sp.get("level");
  const max = sp.get("max");
  const cat = sp.get("cat");
  return {
    level: validLevels.includes(level || "") ? (level as TutorialFiltersState["level"]) : "all",
    maxTime: validTimes.includes(max || "") ? (max as TutorialFiltersState["maxTime"]) : "all",
    categoryId: cat || "all",
  };
}

export default function TutorialsPage() {
  const [filters, setFilters] = useState<TutorialFiltersState>(filtersFromUrl);

  const handleChange = useCallback((f: TutorialFiltersState) => {
    setFilters(f);
    const params = new URLSearchParams();
    if (f.level !== "all") params.set("level", f.level);
    if (f.maxTime !== "all") params.set("max", f.maxTime);
    if (f.categoryId !== "all") params.set("cat", f.categoryId);
    const qs = params.toString();
    history.replaceState(null, "", qs ? `/tutorials?${qs}` : "/tutorials");
  }, []);

  const filtered = useMemo(() => applyTutorialFilters(tutorials, filters), [filters]);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📝 सर्व Tutorials"
          subtitle={`एकूण ${tutorials.length} lessons — level व time नुसार filter करा`}
        />
        <TutorialFilters filters={filters} onChange={handleChange} resultCount={filtered.length} />
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold marathi mb-2">कोणतेही lessons सापडले नाहीत</h3>
            <p className="text-gray-500 mb-6">वेगळे filters निवडून पहा.</p>
            {hasActiveFilters(filters) && (
              <button
                onClick={() => handleChange(defaultTutorialFilters)}
                className="px-6 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium"
              >
                फिल्टर साफ करा
              </button>
            )}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}