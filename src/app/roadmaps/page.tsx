import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { buildMetadata } from "@/lib/seo/seo";
import { learningPaths, pathStepCount, flattenPathSteps, resolveStep } from "@/data/learningPaths";
import { Badge } from "@/components/ui";

export const metadata: Metadata = buildMetadata({
  title: "शिकण्याचे मार्ग (Roadmaps) — Marathi Learn Hub",
  description: "Python, वेब, AI, Android, Electronics — चरण-दर-चरण शिकण्याचे मार्ग मराठीत.",
  path: "/roadmaps",
});

export default function RoadmapsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold marathi mb-3 bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
            🗺️ शिकण्याचे मार्ग
          </h1>
          <p className="text-gray-600 dark:text-gray-300 marathi max-w-2xl mx-auto">
            कुठून सुरू करायचे कळत नाही? तयार roadmaps पाळा — सुरुवातीपासून प्रोजेक्टपर्यंत.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {learningPaths.map((path) => {
            const resolved = flattenPathSteps(path)
              .map(resolveStep)
              .filter((s): s is NonNullable<typeof s> => Boolean(s));
            const checkpoints =
              resolved.filter((s) => s.isProject).length > 0
                ? path.phases.filter((p) => p.steps.some((s) => typeof s === "object")).length
                : 0;
            return (
              <Link
                key={path.id}
                href={`/paths/${path.id}`}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${path.gradient} flex items-center justify-center text-2xl`}
                    >
                      {path.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold marathi">{path.marathiTitle}</h2>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{path.title}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {path.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    tone={path.difficulty === "सोपे" ? "success" : path.difficulty === "मध्यम" ? "info" : "danger"}
                  >
                    {path.difficulty}
                  </Badge>
                  <Badge>{pathStepCount(path)} पायऱ्या</Badge>
                  <Badge>{path.phases.length} टप्पे</Badge>
                  {checkpoints > 0 && <Badge tone="warning">{checkpoints} प्रोजेक्ट</Badge>}
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}