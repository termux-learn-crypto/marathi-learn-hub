"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Category } from "@/data/categories";
import type { TutorialSummary } from "@/data/tutorials";
import type { Project } from "@/data/projects";
import { TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";
import TutorialFilters, {
  defaultTutorialFilters,
  applyTutorialFilters,
  hasActiveFilters,
  TutorialFiltersState,
} from "@/components/TutorialFilters";
import { useMemo, useState } from "react";
import Link from "next/link";
import { getPathsByCategory } from "@/data/learningPaths";

export default function CategoryContent({
  cat,
  catTutorials,
  catProjects,
}: {
  cat: Category;
  catTutorials: TutorialSummary[];
  catProjects: Project[];
}) {
  const [filters, setFilters] = useState<TutorialFiltersState>(defaultTutorialFilters);

  const starter = catTutorials.find((t) => t.level === "beginner") ?? catTutorials[0];
  const path = getPathsByCategory(cat.id)[0];

  const filtered = useMemo(() => applyTutorialFilters(catTutorials, filters), [catTutorials, filters]);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <span
            className={`category-box w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-3xl`}
          >
            {cat.icon}
          </span>
          <div>
            <h1 className="text-3xl font-bold marathi">
              {cat.name} - {cat.marathiName}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{cat.description}</p>
          </div>
        </div>

        {starter && catTutorials.length > 0 && (
          <div className="mb-6 rounded-2xl border border-primary-200 dark:border-primary-800 bg-primary-50/50 dark:bg-primary-900/20 p-5">
            <h2 className="font-bold marathi mb-2">🚩 कुठून सुरुवात करू?</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              {path ? (
                <>
                  या श्रेणीसाठी एक <span className="font-semibold">Learning Path</span> उपलब्ध आहे —{" "}
                  <Link href={`/path/${path.id}`} className="text-primary-600 dark:text-primary-300 font-semibold underline">
                    इथून सुरुवात करा
                  </Link>
                  {" "}आणि step-by-step पुढे जा.
                </>
              ) : (
                <>
                  {"Level 1"} किंवा सगळ्यांत सोपं lesson निवडून सुरुवात करा.
                </>
              )}
            </p>
            {starter && (
              <Link
                href={`/tutorial/${starter.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium marathi"
              >
                ▶️ पहिलं lesson सुरू करा: {starter.marathiTitle}
              </Link>
            )}
          </div>
        )}

        <SectionHeader
          title="📖 Lessons"
          subtitle={`${filtered.length} lessons`}
        />
        {catTutorials.length > 0 && (
          <TutorialFilters
            filters={filters}
            onChange={setFilters}
            showCategory={false}
            resultCount={filtered.length}
          />
        )}
        {filtered.length > 0 ? (
          <div className="mb-10 space-y-8">
            {(() => {
              const groups = new Map<string, typeof filtered>();
              const ungrouped: typeof filtered = [];
              for (const t of filtered) {
                if (t.levelLabel) {
                  const arr = groups.get(t.levelLabel) || [];
                  arr.push(t);
                  groups.set(t.levelLabel, arr);
                } else {
                  ungrouped.push(t);
                }
              }
              const groupEntries = Array.from(groups.entries());
              return (
                <>
                  {groupEntries.map(([label, items]) => (
                    <div key={label}>
                      <h3 className="text-lg font-semibold marathi mb-3 text-primary-700 dark:text-primary-300">
                        📚 {label}
                        <span className="ml-2 text-sm font-normal text-gray-500">({items.length})</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {items.map((t) => (
                          <TutorialCard key={t.slug} tutorial={t} />
                        ))}
                      </div>
                    </div>
                  ))}
                  {ungrouped.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {ungrouped.map((t) => (
                        <TutorialCard key={t.slug} tutorial={t} />
                      ))}
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        ) : (
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
        )}

        {catProjects.length > 0 && (
          <>
            <SectionHeader title="🛠️ Projects" subtitle={`${catProjects.length} projects`} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}