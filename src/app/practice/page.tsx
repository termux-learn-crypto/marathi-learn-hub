import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import QuizPlayer from "@/components/QuizPlayer";
import { buildMetadata } from "@/lib/seo/seo";
import { tutorials } from "@/data/tutorials";

function toRelatedLessons(slugs: string[]) {
  return slugs
    .map((s) => tutorials.find((t) => t.slug === s))
    .filter((t): t is (typeof tutorials)[number] => Boolean(t))
    .map((t) => ({
      slug: t.slug,
      marathiTitle: t.marathiTitle,
      title: t.title,
      level: t.level,
    }));
}

export const metadata: Metadata = buildMetadata({
  title: "सराव — Marathi Learn Hub",
  description: "मराठीतला interactive सराव — प्रत्येक पाठानंतर quiz ने तुमचे ज्ञान तपासा.",
  path: "/practice",
});

export default function PracticePage() {
  const withQuiz = tutorials.filter((t) => t.quiz.length > 0).slice(0, 20);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
            🏋️ सराव
          </h1>
          <p className="text-gray-600 dark:text-gray-300 marathi">
            पाठधड्यांचे quiz — उत्तर देऊन तुमची प्रगती पहा.
          </p>
        </div>

        <div className="grid gap-6">
          {withQuiz.map((t) => (
            <div
              key={t.slug}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold marathi">{t.marathiTitle}</h2>
                <span className="text-xs text-gray-500 dark:text-gray-400">{t.quiz.length} प्रश्न</span>
              </div>
              <QuizPlayer slug={t.slug} quiz={t.quiz} relatedLessons={toRelatedLessons(t.related)} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}