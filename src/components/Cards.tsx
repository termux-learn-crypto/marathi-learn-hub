"use client";

import Link from "next/link";
import { tutorials, Tutorial } from "@/data/tutorials";
import { projects, Project } from "@/data/projects";
import { categories } from "@/data/categories";

export function CategoryCard({ id }: { id: string }) {
  const cat = categories.find((c) => c.id === id);
  if (!cat) return null;
  const count = tutorials.filter((t) => t.categoryId === id).length;
  return (
    <Link
      href={`/category/${cat.id}`}
      className="card-hover block p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-transparent hover:ring-2 hover:ring-primary-400/50 dark:hover:ring-primary-500/40"
    >
      <div
        className={`category-box w-12 h-12 rounded-lg bg-gradient-to-br ${cat.gradient} flex items-center justify-center text-2xl mb-3`}
      >
        {cat.icon}
      </div>
      <h3 className="font-semibold marathi">{cat.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{cat.description}</p>
      <span className={`inline-block mt-3 text-xs font-medium px-2 py-1 rounded ${cat.chip}`}>
        {count} lessons
      </span>
    </Link>
  );
}

export function TutorialCard({ tutorial }: { tutorial: Tutorial }) {
  const cat = categories.find((c) => c.id === tutorial.categoryId);
  const diffColor =
    tutorial.level === "beginner"
      ? "bg-green-100 text-green-700"
      : tutorial.level === "intermediate"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  const diffLabel = tutorial.level === "beginner" ? "सोपे" : tutorial.level === "intermediate" ? "मध्यम" : "अवघड";

  return (
    <Link
      href={`/tutorial/${tutorial.slug}`}
      className="card-hover block p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat?.chip || ""}`}>{cat?.icon} {cat?.name}</span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${diffColor}`}>{diffLabel}</span>
      </div>
      <h3 className="font-semibold marathi mb-2">{tutorial.marathiTitle}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{tutorial.summary}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>⏱ {tutorial.minutes} min</span>
        <span className="text-primary-600 font-medium">वाचा ➡️</span>
      </div>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const cat = categories.find((c) => c.id === project.categoryId);
  const diffColor =
    project.difficulty === "सोपे"
      ? "bg-green-100 text-green-700"
      : project.difficulty === "मध्यम"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-red-100 text-red-700";

  return (
    <Link
      href={`/project/${project.id}`}
      className="card-hover block p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${cat?.chip || ""}`}>{cat?.icon} {cat?.name}</span>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${diffColor}`}>{project.difficulty}</span>
      </div>
      <h3 className="font-semibold marathi mb-2">{project.marathiTitle}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">{project.summary}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>⏱ {project.minutes} min</span>
        <span className="text-primary-600 font-medium">पहा ➡️</span>
      </div>
    </Link>
  );
}

export function SectionHeader({ title, subtitle, link, linkText }: { title: string; subtitle?: string; link?: string; linkText?: string }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold marathi">{title}</h2>
        {subtitle && <p className="text-gray-500 dark:text-gray-400 mt-1">{subtitle}</p>}
      </div>
      {link && linkText && (
        <Link href={link} className="text-primary-600 hover:text-primary-700 text-sm font-medium whitespace-nowrap">
          {linkText} →
        </Link>
      )}
    </div>
  );
}

export function ProgressTracker({ current, total }: { current: number; total: number }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div className="bg-primary-500 h-2 rounded-full transition-all" style={{ width: `${pct}%` }}></div>
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
        {current}/{total} पूर्ण
      </span>
    </div>
  );
}
