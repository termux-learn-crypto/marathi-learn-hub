"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { getCategory } from "@/data/categories";
import { getTutorialsByCategory } from "@/data/tutorials";
import { getProjectsByCategory } from "@/data/projects";
import { TutorialCard, SectionHeader } from "@/components/Cards";
import { ProjectCard } from "@/components/Cards";
import { projects } from "@/data/projects";

export default function CategoryPage() {
  const params = useParams();
  const catId = params.id as string;
  const cat = getCategory(catId);

  if (!cat) {
    return (
      <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Category सापडली नाही</h1>
          <p className="text-gray-500 mt-2">कृपया योग्य category निवडा.</p>
        </main>
        <Footer />
      </>
    );
  }

  const catTutorials = getTutorialsByCategory(catId);
  const catProjects = getProjectsByCategory(catId);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <span className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center text-3xl`}>
            {cat.icon}
          </span>
          <div>
            <h1 className="text-3xl font-bold marathi">{cat.name} - {cat.marathiName}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{cat.description}</p>
          </div>
        </div>

        <SectionHeader title="📖 Lessons" subtitle={`${catTutorials.length} lessons`} />
        {catTutorials.length > 0 ? (
          <div className="mb-10 space-y-8">
            {(() => {
              const groups = new Map<string, typeof catTutorials>();
              const ungrouped: typeof catTutorials = [];
              for (const t of catTutorials) {
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
          <p className="text-gray-500 mb-10">याप्रकारच्या category मध्ये अजून lessons नाहीत. लवकरच.</p>
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
