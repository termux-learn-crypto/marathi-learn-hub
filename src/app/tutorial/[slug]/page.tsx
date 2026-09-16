import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTutorial, tutorials } from "@/data/tutorials";
import { getCategory } from "@/data/categories";
import CodeEditor from "@/components/CodeEditor";
import QuizPlayer from "@/components/QuizPlayer";
import { TutorialCard } from "@/components/Cards";
import { Fragment } from "react";
import TutorialActions from "./TutorialActions";
import AdUnit from "@/components/AdUnit";
import { siteUrl, telegramUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorial(slug);
  const cat = tutorial ? getCategory(tutorial.categoryId) : undefined;
  if (!tutorial) {
    return {
      title: "Tutorial सापडला नाही | Marathi Learn Hub",
      description: "मराठीत कोडिंग आणि तंत्रज्ञान शिका. Learn programming and tech in Marathi.",
    };
  }
  const title = `${tutorial.marathiTitle} — ${tutorial.title} | Marathi Learn Hub`;
  const desc = `${tutorial.summary} Learn ${tutorial.title} in Marathi — मराठीत ${tutorial.marathiTitle} शिका.`;
  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      tutorial.title,
      tutorial.marathiTitle,
      `${tutorial.title} marathi tutorial`,
      `learn ${tutorial.title} in marathi`,
      `${tutorial.title} मराठीत`,
      `${tutorial.marathiTitle} tutorial`,
      cat?.name ?? "",
      cat?.marathiName ?? "",
      ...(cat ? cat.tags : []),
      "marathi", "learn", "मराठी", "ट्यूटोरियल",
    ].filter(Boolean).join(", "),
    openGraph: {
      title,
      description: desc,
      type: "article",
      url: `/tutorial/${slug}`,
      locale: "mr_IN",
      siteName: "Marathi Learn Hub",
      images: ["/icons/icon-512.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/icons/icon-512.png"],
    },
    alternates: {
      canonical: `/tutorial/${slug}`,
    },
  };
}

export default async function TutorialDetailPage({ params }: Props) {
  const { slug } = await params;
  const tutorial = getTutorial(slug);

  if (!tutorial) {
    notFound();
  }

  const cat = getCategory(tutorial.categoryId);
  const relatedTuts = tutorial.related
    .map((r) => getTutorial(r))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const diffLabel = tutorial.level === "beginner" ? "सोपे" : tutorial.level === "intermediate" ? "मध्यम" : "अवघड";

  const base = siteUrl();
  const tutorialUrl = `${base}/tutorial/${tutorial.slug}`;
  const categoryUrl = cat ? `${base}/category/${cat.id}` : undefined;
  const breadcrumbItems = [
    { position: 1, name: "Home", item: `${base}/` },
    ...(cat ? [{ position: 2, name: cat.name, item: categoryUrl }] : []),
    { position: cat ? 3 : 2, name: tutorial.marathiTitle, item: tutorialUrl },
  ] as const;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": tutorialUrl,
        url: tutorialUrl,
        name: `${tutorial.marathiTitle} — ${tutorial.title}`,
        isPartOf: { "@type": "WebSite", "@id": `${base}/` },
        breadcrumb: { "@id": `${tutorialUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${tutorialUrl}#breadcrumb`,
        itemListElement: breadcrumbItems.map((b) => ({
          "@type": "ListItem",
          position: b.position,
          name: b.name,
          item: b.item,
        })),
      },
      {
        "@type": "LearningResource",
        "@id": `${tutorialUrl}#lesson`,
        name: tutorial.marathiTitle,
        description: tutorial.summary,
        url: tutorialUrl,
        inLanguage: "mr",
        learningResourceType: "Lesson",
        educationalLevel: tutorial.level,
        timeRequired: `PT${tutorial.minutes}M`,
        isAccessibleForFree: true,
        isFamilyFriendly: true,
        author: {
          "@type": "Organization",
          name: "Marathi Learn Hub",
          url: `${base}/`,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

        <AdUnit />

        {/* Sections */}
        <div className="space-y-8">
          {tutorial.sections.map((section, idx) => (
            <Fragment key={idx}>
              <section className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
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
              {(idx + 1) % 4 === 0 && <AdUnit />}
            </Fragment>
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

        <AdUnit />

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

        {/* Community CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 text-center">
          <h3 className="text-lg font-semibold marathi">🤔 तुम्हाला अजून प्रश्न आहेत?</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 marathi">
            आमच्या Telegram group मध्ये सामील व्हा आणि तुमचे doubts आमच्या समुदायात सोडवा!
          </p>
          <a
            href={telegramUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            📱 Telegram Group मध्ये सामील व्हा
          </a>
        </div>

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
