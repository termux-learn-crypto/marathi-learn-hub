import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTutorial, tutorials } from "@/data/tutorials";
import { getCategory } from "@/data/categories";
import CodeEditor from "@/components/CodeEditor";
import QuizPlayer from "@/components/QuizPlayer";
import { TutorialCard } from "@/components/Cards";
import TutorialActions from "./TutorialActions";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tutorial = getTutorial(params.slug);
  const cat = tutorial ? getCategory(tutorial.categoryId) : undefined;
  const title = tutorial ? `${tutorial.marathiTitle} | Marathi Learn Hub` : "Tutorial | Marathi Learn Hub";
  return {
    title,
    description: tutorial?.summary ?? "मोफत मराठी शिक्षा. Mराठी लर्निंग प्लॅटफॉर्म.",
    keywords: [
      tutorial?.title ?? "",
      tutorial?.marathiTitle ?? "",
      cat?.name ?? "",
      "marathi",
      "learn",
      "मराठी",
      "ट्यूटोरियल",
    ].filter(Boolean).join(", "),
    openGraph: {
      title,
      description: tutorial?.summary,
      type: "article",
      url: `tutorial/${params.slug}`,
    },
    alternates: {
      canonical: `/tutorial/${params.slug}`,
    },
  };
}

export default function TutorialDetailPage({ params }: Props) {
  const slug = params.slug;
  const tutorial = getTutorial(slug);

  if (!tutorial) {
    return (
      <>
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold">Tutorial सापडला नाही</h1>
          <Link href="/tutorials" className="text-primary-600 mt-4 inline-block">सर्व tutorials पहा</Link>
        </main>
        <Footer />
      </>
    );
  }

  const cat = getCategory(tutorial.categoryId);
  const relatedTuts = tutorial.related
    .map((r) => getTutorial(r))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const diffLabel = tutorial.level === "beginner" ? "सोपे" : tutorial.level === "intermediate" ? "मध्यम" : "अवघड";

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>›</span>
          {cat && (
            <Link href={`/category/${cat.id}`} className="hover:text-primary-600">
              {cat.name}
            </Link>
          )}
          <span>›</span>
          <span className="text-gray-700 dark:text-gray-300">{tutorial.marathiTitle}</span>
        </div>

        {/* Title + bookmark */}
        <TutorialActions slug={tutorial.slug} marathiTitle={tutorial.marathiTitle} />

<div className="mt-2 mb-2">
            <p className="text-gray-500 dark:text-gray-400">{tutorial.title}</p>
            <div className="flex items-center gap-3 mt-3 text-sm flex-wrap">
              {cat && (
                <Link href={`/category/${cat.id}`} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs">
                  {cat.icon} {cat.name}
                </Link>
              )}
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${tutorial.level === "beginner" ? "bg-green-100 text-green-700" : tutorial.level === "intermediate" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
                {diffLabel}
              </span>
              {tutorial.levelLabel && (
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-medium">
                  📚 {tutorial.levelLabel}
                </span>
              )}
              <span className="text-xs text-gray-500">⏱ {tutorial.minutes} min</span>
            </div>
          </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 marathi leading-relaxed">{tutorial.summary}</p>

        {/* Sections */}
        <div className="space-y-8">
          {tutorial.sections.map((section, idx) => (
            <section key={idx} className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </span>
                <h2 className="text-xl font-semibold marathi">{section.title}</h2>
              </div>

              <div className="prose prose-lg dark:prose-invert max-w-none marathi whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                {section.content}
              </div>

              {section.code && (
                <div className="mt-5">
                  <CodeEditor
                    code={section.code}
                    language={section.codeLanguage || "html"}
                    initialOutput={section.output}
                  />
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Practice Questions */}
        {tutorial.practiceQuestions && tutorial.practiceQuestions.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold marathi mb-4">📝 Practice Questions</h2>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <ol className="list-decimal pl-5 space-y-2 marathi text-gray-700 dark:text-gray-300">
                {tutorial.practiceQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Quiz */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold marathi mb-4">🧩 Quiz - तुम्ही किती शिकलात?</h2>
          <QuizPlayer slug={tutorial.slug} quiz={tutorial.quiz} />
        </section>

        {/* Coding Challenge */}
        {tutorial.challenge && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold marathi mb-4">🏆 Coding Challenge</h2>
            <div className="rounded-2xl border-2 border-primary-200 dark:border-primary-900/50 p-6 bg-primary-50/50 dark:bg-gray-800">
              <p className="marathi text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">{tutorial.challenge.prompt}</p>
              <div className="mt-4">
                <CodeEditor
                  code={tutorial.challenge.starterCode ?? ""}
                  language="python"
                  initialOutput={tutorial.challenge.expectedOutput}
                />
              </div>
              {tutorial.challenge.expectedOutput && (
                <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                  अपेक्षित output वरच्या output बॉक्समध्ये दिसतो.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Interview Questions */}
        {tutorial.interviewQuestions && tutorial.interviewQuestions.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold marathi mb-4">💬 Interview Questions</h2>
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
              <ol className="list-decimal pl-5 space-y-2 marathi text-gray-700 dark:text-gray-300">
                {tutorial.interviewQuestions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Practice/Complete button */}
        <TutorialActions slug={tutorial.slug} marathiTitle={tutorial.marathiTitle} showComplete />

        {/* Related topics */}
        {relatedTuts.length > 0 && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold marathi mb-4">🔗 Related Topics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedTuts.map((t) => (
                <TutorialCard key={t.slug} tutorial={t} />
              ))}
            </div>
          </section>
        )}

        {/* Prev / Next navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          {tutorial.prev && (() => {
            const prev = getTutorial(tutorial.prev);
            return prev ? (
              <Link
                href={`/tutorial/${prev.slug}`}
                className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
              >
                <span className="text-sm text-gray-500">⬅️ Previous</span>
                <p className="font-medium mt-1">{prev.marathiTitle}</p>
              </Link>
            ) : null;
          })()}

          {tutorial.next && (() => {
            const next = getTutorial(tutorial.next);
            return next ? (
              <Link
                href={`/tutorial/${next.slug}`}
                className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors text-right"
              >
                <span className="text-sm text-gray-500">Next ➡️</span>
                <p className="font-medium mt-1">{next.marathiTitle}</p>
              </Link>
            ) : null;
          })()}
        </div>
      </main>
      <Footer />
    </>
  );
}
