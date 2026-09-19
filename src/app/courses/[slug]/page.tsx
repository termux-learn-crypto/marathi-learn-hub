import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { OfficialResources } from "@/components/course/OfficialResources";
import { Breadcrumb, Badge } from "@/components/ui";
import { getLanguage } from "@/data/languages";
import { buildModules, getLessonsForLanguage } from "@/lib/content/courses";
import { buildMetadata } from "@/lib/seo/seo";

export function generateStaticParams() {
  return ["python", "web", "android", "ai", "electronics", "linux", "termux", "cyber", "computer", "electrical", "diy", "digital", "freelancing", "general"].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) return {};
  return buildMetadata({
    title: `${lang.name} — Marathi Learn Hub`,
    description: lang.description,
    path: `/courses/${lang.slug}`,
  });
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lang = getLanguage(slug);
  if (!lang) notFound();

  const modules = buildModules(lang.categoryId);
  const lessons = getLessonsForLanguage(lang.categoryId);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "अभ्यासक्रम", href: "/courses" },
            { label: lang.name },
          ]}
        />

        <header className="py-6">
          <div className="flex items-center gap-4 mb-3">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-marathi-500 flex items-center justify-center text-4xl`}>
              {lang.icon}
            </div>
            <div>
              <h1 className="text-3xl font-extrabold marathi">{lang.name}</h1>
              <p className="text-gray-500 dark:text-gray-400 marathi">{lang.marathiName}</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">{lang.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge tone="primary">{lessons.length} पाठ</Badge>
            <Badge tone="info">{modules.length} विभाग</Badge>
            <Badge tone="success">{lang.resources.filter((r) => r.enabled).length} अधिकृत साधने</Badge>
          </div>
        </header>

        {modules.length > 0 && (
          <section className="py-6">
            <h2 className="text-2xl font-bold marathi mb-4">📖 पाठधडे</h2>
            <div className="space-y-4">
              {modules.map((mod) => (
                <div key={mod.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
                  <p className="px-5 py-3 font-semibold bg-gray-50 dark:bg-gray-700/50 text-gray-800 dark:text-gray-100 marathi">
                    {mod.title}
                  </p>
                  <ul className="divide-y divide-gray-100 dark:divide-gray-700">
                    {mod.lessonIds.map((lessonSlug) => {
                      const lesson = lessons.find((l) => l.slug === lessonSlug);
                      if (!lesson) return null;
                      return (
                        <li key={lessonSlug}>
                          <Link
                            href={`/tutorial/${lessonSlug}`}
                            className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <span className="text-lg">📄</span>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-gray-800 dark:text-gray-100">{lesson.marathiTitle}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{lesson.title}</p>
                            </div>
                            <span className="text-xs text-gray-400">{lesson.minutes} मि</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <OfficialResources language={lang} />
      </main>
      <Footer />
    </>
  );
}