import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBox from "@/components/SearchBox";
import { searchTutorials, toTutorialSummary } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();

  const matchedTutorials = searchTutorials(query);
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
            ? `"${query}" साठी ${matchedTutorials.length + matchedProjects.length} निकाल`
            : `सर्व ${matchedTutorials.length} lessons`}
        </p>

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

        {query && matchedTutorials.length === 0 && matchedProjects.length === 0 && (
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