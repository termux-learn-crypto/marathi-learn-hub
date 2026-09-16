import Link from "next/link";
import { learningPaths, type LearningPathStep } from "@/data/learningPaths";
import { tutorials } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { SectionHeader } from "@/components/Cards";

function resolveStep(step: LearningPathStep) {
  if (typeof step === "string") {
    const tutorial = tutorials.find((t) => t.slug === step);
    return tutorial
      ? {
          href: `/tutorial/${tutorial.slug}`,
          title: tutorial.marathiTitle,
          isProject: false,
        }
      : null;
  }
  const project = projects.find((p) => p.id === step.project);
  return project
    ? { href: `/project/${project.id}`, title: project.title, isProject: true }
    : null;
}

export default function LearningPaths() {
  return (
    <section className="py-8">
      <SectionHeader
        title="🧭 Learning Paths"
        subtitle="कुठून सुरुवात करू? तुमचा track निवडा"
        link="/tutorials"
        linkText="सर्व tutorials"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {learningPaths.map((path) => (
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

            <ol className="space-y-1.5 relative mt-auto">
              {path.steps.map((step, i) => {
                const resolved = resolveStep(step);
                if (!resolved) return null;
                return (
                  <li key={i} className="flex items-center gap-2.5">
                    <span
                      className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 bg-gradient-to-br ${path.gradient} text-white`}
                    >
                      {i + 1}
                    </span>
                    <Link
                      href={resolved.href}
                      className="flex-1 min-w-0 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors truncate"
                      title={resolved.title}
                    >
                      {resolved.title}
                    </Link>
                    {resolved.isProject && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 whitespace-nowrap">
                        🛠️ Project
                      </span>
                    )}
                    <span className="text-gray-300 dark:text-gray-600 shrink-0">↗</span>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}