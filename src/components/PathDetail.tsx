"use client";

import Link from "next/link";
import { useProgress } from "@/lib/storage";
import { ProgressTracker } from "@/components/Cards";
import { flattenPathSteps, type LearningPath } from "@/data/learningPaths";
import { tutorials } from "@/data/tutorials";
import { projects } from "@/data/projects";

interface Stepped {
  kind: "lesson" | "project";
  href: string;
  title: string;
  minutes: number;
  done: boolean;
}

export default function PathDetail({
  path,
  totalSteps,
}: {
  path: LearningPath;
  totalSteps: number;
}) {
  const { completed } = useProgress();

  const stepList: Stepped[] = [];
  for (const step of flattenPathSteps(path)) {
    if (typeof step === "string") {
      const t = tutorials.find((x) => x.slug === step);
      if (t) {
        stepList.push({
          kind: "lesson",
          href: `/tutorial/${t.slug}`,
          title: t.marathiTitle,
          minutes: t.minutes,
          done: completed.includes(t.slug),
        });
      }
    } else {
      const p = projects.find((x) => x.id === step.project);
      if (p) {
        stepList.push({
          kind: "project",
          href: `/project/${p.id}`,
          title: p.marathiTitle,
          minutes: p.minutes,
          done: false,
        });
      }
    }
  }

  const doneCount = stepList.filter((s) => s.done).length;
  const nextStep = stepList.find((s) => !s.done) ?? stepList[0];

  let running = 0;

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-3">
          <div
            className={`category-box w-16 h-16 rounded-2xl bg-gradient-to-br ${path.gradient} flex items-center justify-center text-3xl shrink-0`}
          >
            {path.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold marathi">{path.marathiTitle}</h1>
            <p className="text-sm text-primary-600 dark:text-primary-300">{path.title}</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 marathi leading-relaxed">
          {path.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 mt-3 text-xs">
          <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 font-medium">
            {path.difficulty}
          </span>
          <span className="px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 font-medium">
            {totalSteps} steps · {path.phases.length} टप्पे
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-8 bg-white dark:bg-gray-800">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold marathi">📈 तुमची प्रगती</h2>
          <span className="text-sm font-semibold text-primary-600">{doneCount}/{totalSteps} पूर्ण</span>
        </div>
        <ProgressTracker current={doneCount} total={totalSteps} />
        {nextStep && (
          <Link
            href={nextStep.href}
            className="mt-4 w-full py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold text-center marathi transition-colors block"
          >
            {doneCount > 0 ? `▶️ पुढे चालू ठेवा — ${nextStep.title}` : "🚀 सुरुवात करा"}
          </Link>
        )}
      </div>

      <div className="space-y-8">
        {path.phases.map((phase) => (
          <section key={phase.title}>
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`category-box w-8 h-8 rounded-lg bg-gradient-to-br ${path.gradient} text-white flex items-center justify-center text-sm font-bold`}
              >
                {phase.steps.length}
              </span>
              <h2 className="text-xl font-bold marathi">{phase.title}</h2>
              <span className="text-xs text-gray-500">{phase.english}</span>
            </div>
            <ol className="space-y-2">
              {phase.steps.map((step) => {
                const display = (() => {
                  if (typeof step === "string") {
                    const t = tutorials.find((x) => x.slug === step);
                    return t
                      ? {
                          kind: "lesson" as const,
                          href: `/tutorial/${t.slug}`,
                          title: t.marathiTitle,
                          minutes: t.minutes,
                          done: completed.includes(t.slug),
                        }
                      : null;
                  }
                  const p = projects.find((x) => x.id === step.project);
                  return p
                    ? {
                        kind: "project" as const,
                        href: `/project/${p.id}`,
                        title: p.marathiTitle,
                        minutes: p.minutes,
                        done: false,
                      }
                    : null;
                })();
                if (!display) return null;
                running++;
                const num = running;
                return (
                  <li key={typeof step === "string" ? step : step.project} className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center shrink-0 ${
                        display.done
                          ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
                          : `bg-gradient-to-br ${path.gradient} text-white`
                      }`}
                    >
                      {display.done ? "✓" : num}
                    </span>
                    <Link
                      href={display.href}
                      className="flex-1 min-w-0 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-colors font-medium marathi"
                    >
                      {display.title}
                    </Link>
                    {display.kind === "project" && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 whitespace-nowrap">
                        🛠️ Project
                      </span>
                    )}
                    <span className="text-xs text-gray-400 shrink-0">⏱ {display.minutes} min</span>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/paths"
          className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg marathi"
        >
          ⬅️ सर्व Learning Paths
        </Link>
      </div>
    </>
  );
}