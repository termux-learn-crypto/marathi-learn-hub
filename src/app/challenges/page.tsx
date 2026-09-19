import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";
import { tutorials } from "@/data/tutorials";
import { Badge } from "@/components/ui";

export const metadata: Metadata = buildMetadata({
  title: "प्रोग्रामिंग आव्हाने — Marathi Learn Hub",
  description: "कोड प्रॅक्टिस करा — मराठीतल्या interactive coding challenges ने.",
  path: "/challenges",
});

export default function ChallengesPage() {
  const challenges = tutorials.filter((t) => t.challenge);

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
            🏆 Coding आव्हाने
          </h1>
          <p className="text-gray-600 dark:text-gray-300 marathi">
            प्रत्येक पाठातले coding आव्हान — कोड लिहा, समस्या सोडवा, शिका.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {challenges.map((t) => (
            <Link
              key={t.slug}
              href={`/tutorial/${t.slug}#challenge`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-lg font-semibold marathi">{t.marathiTitle}</h2>
                <Badge
                  tone={t.level === "beginner" ? "success" : t.level === "intermediate" ? "info" : "danger"}
                >
                  {t.level}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{t.challenge?.prompt}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}