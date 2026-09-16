import Link from "next/link";
import { learningPaths, flattenPathSteps } from "@/data/learningPaths";
import { tutorials } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/Cards";

function pathStats(pathId: string) {
  const path = learningPaths.find((p) => p.id === pathId);
  if (!path) return { steps: 0, minutes: 0, projectCount: 0 };
  let totalMinutes = 0;
  let projectCount = 0;
  for (const step of flattenPathSteps(path)) {
    if (typeof step === "string") {
      const tut = tutorials.find((x) => x.slug === step);
      if (tut) totalMinutes += tut.minutes;
    } else {
      const proj = projects.find((x) => x.id === step.project);
      if (proj) {
        totalMinutes += proj.minutes;
        projectCount++;
      }
    }
  }
  return { steps: flattenPathSteps(path).length, minutes: totalMinutes, projectCount };
}

export default function LearningPaths() {
  return (
    <section className="py-8">
      <SectionHeader
        title="🧭 Learning Paths"
        subtitle="शून्यापासून प्रोजेक्टपर्यंत — संपूर्ण journey मध्ये शिका"
        link="/paths"
        linkText="सर्व paths"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningPaths.map((path) => {
          const stats = pathStats(path.id);
          return (
            <div
              key={path.id}
              className="card-hover rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-5 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`category-box w-12 h-12 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center text-2xl shrink-0`}
                >
                  {path.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{path.title}</h3>
                  <p className="text-sm text-primary-600 dark:text-primary-300 marathi">
                    {path.marathiTitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {path.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 mb-4 text-xs">
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 font-medium">
                  {path.difficulty}
                </span>
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 font-medium">
                  {stats.steps} steps
                </span>
                <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 font-medium">
                  ⏱ ~{stats.minutes} min
                </span>
                {stats.projectCount > 0 && (
                  <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 font-medium">
                    🛠️ {stats.projectCount} project
                  </span>
                )}
              </div>

              <ol className="space-y-1.5 relative mt-auto">
                {path.phases.map((phase) => (
                  <li key={phase.title} className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center shrink-0 bg-gradient-to-br ${path.gradient} text-white`}
                    >
                      {phase.steps.length}
                    </span>
                    <span className="flex-1 min-w-0 text-sm text-gray-700 dark:text-gray-300 truncate">
                      {phase.title}
                      <span className="text-gray-400 text-xs"> · {phase.english}</span>
                    </span>
                  </li>
                ))}
              </ol>

              <Link
                href={`/path/${path.id}`}
                className="mt-4 w-full py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold text-center marathi transition-colors"
              >
                🚀 Journey सुरू करा
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}