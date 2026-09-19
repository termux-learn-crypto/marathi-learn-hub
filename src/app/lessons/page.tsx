import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";
import { getLessonsForLanguage } from "@/lib/content/courses";
import { getLanguage } from "@/data/languages";
import { Badge } from "@/components/ui";

export const metadata: Metadata = buildMetadata({
  title: "सर्व पाठ — Marathi Learn Hub",
  description: "मराठीतले सर्व तांत्रिक पाठधडे — Python ते Electronics, वेब ते AI.",
  path: "/lessons",
});

export default function LessonsPage() {
  const languageIds = ["python", "web", "android", "ai", "electronics", "linux", "termux", "cyber"];

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
            📖 सर्व पाठ
          </h1>
          <p className="text-gray-600 dark:text-gray-300 marathi">विषयानुसार सर्व पाठधडे एकत्रित.</p>
        </div>

        {languageIds.map((id) => {
          const lang = getLanguage(id);
          const lessons = getLessonsForLanguage(id);
          if (!lang || lessons.length === 0) return null;
          return (
            <section key={id} className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>{lang.icon}</span> {lang.name}
                <Badge tone="primary" className="ml-1">{lessons.length}</Badge>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {lessons.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/tutorial/${l.slug}`}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <p className="font-medium marathi mb-1">{l.marathiTitle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{l.title}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}