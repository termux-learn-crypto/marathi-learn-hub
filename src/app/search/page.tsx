import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import { searchTutorials, toTutorialSummary, tutorials } from "@/data/tutorials";
import { searchGlossary } from "@/data/glossary";
import { projects } from "@/data/projects";
import { languages } from "@/data/languages";
import { TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";
import Link from "next/link";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  const matchedTutorials = searchTutorials(query);
  const matchedGlossary = searchGlossary(query);
  const matchedLanguages = query
    ? languages.filter(
        (l) =>
          l.name.toLowerCase().includes(query.toLowerCase()) ||
          l.marathiName.toLowerCase().includes(query.toLowerCase()) ||
          l.description.toLowerCase().includes(query.toLowerCase())
      )
    : languages.slice(0, 6);
  const matchedQuiz = query
    ? tutorials
        .map((t) => ({
          tutorial: t,
          questions: t.quiz?.filter((qq) =>
            qq.question.toLowerCase().includes(query.toLowerCase())
          ) ?? [],
        }))
        .filter((r) => r.questions.length > 0)
    : [];
  const matchedProjects = query
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.marathiTitle.toLowerCase().includes(query.toLowerCase()) ||
          p.summary.toLowerCase().includes(query.toLowerCase()) ||
          p.categoryId.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="🔎 Search"
          subtitle="Marathi + English दोन्ही भाषांतून शोधा"
        />

        <SearchBox initialQuery={query} />

        <p className="text-sm text-gray-500 mb-4">
          {query
            ? `"${query}" साठी ${matchedTutorials.length + matchedProjects.length + matchedGlossary.length + matchedLanguages.length + matchedQuiz.reduce((n, r) => n + r.questions.length, 0)} निकाल`
            : `सर्व ${matchedTutorials.length} lessons`}
        </p>

        {matchedLanguages.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">📚 अभ्यासक्रम</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedLanguages.map((l) => (
                <Link
                  key={l.id}
                  href={`/courses/${l.slug}`}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="text-3xl mb-2">{l.icon}</div>
                  <p className="font-semibold marathi">{l.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">{l.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {matchedTutorials.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">📖 Lessons</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedTutorials.map((t) => (
                <TutorialCard key={t.slug} tutorial={toTutorialSummary(t)} />
              ))}
            </div>
          </div>
        )}

        {matchedGlossary.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">📖 Glossary</h2>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
              {matchedGlossary.map((g) => (
                <div key={g.term} className="p-4">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="font-semibold text-primary-700 dark:text-primary-300">{g.term}</h3>
                    <span className="text-sm px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 font-medium marathi">
                      {g.marathiMeaning}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{g.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {matchedQuiz.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">🧩 Quiz Questions</h2>
            <div className="space-y-3">
              {matchedQuiz.map((r) => (
                <div
                  key={r.tutorial.slug}
                  className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4"
                >
                  <a href={`/tutorial/${r.tutorial.slug}#quiz`} className="font-semibold text-primary-700 dark:text-primary-300 marathi hover:underline">
                    {r.tutorial.marathiTitle}
                  </a>
                  <ul className="mt-2 space-y-1 marathi text-sm text-gray-600 dark:text-gray-300">
                    {r.questions.map((qq, i) => (
                      <li key={i}>• {qq.question}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {matchedProjects.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🛠️ Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {matchedProjects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}

        {query && matchedTutorials.length === 0 && matchedProjects.length === 0 && matchedGlossary.length === 0 && matchedQuiz.length === 0 && matchedLanguages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold">काहीही सापडले नाही</h3>
            <p className="text-gray-500 mt-2">दुसऱ्या शब्दात शोधण्याचा प्रयत्न करा</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}