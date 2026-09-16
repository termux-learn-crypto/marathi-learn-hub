"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLastVisited } from "@/lib/storage";
import { tutorials } from "@/data/tutorials";
import { learningPaths, flattenPathSteps } from "@/data/learningPaths";
import { categories } from "@/data/categories";

function nextTutorialSlug(slug: string): string | undefined {
  const t = tutorials.find((x) => x.slug === slug);
  if (!t?.next) return undefined;
  if (tutorials.find((x) => x.slug === t.next)) return t.next;

  for (const path of learningPaths) {
    const steps = flattenPathSteps(path);
    const idx = steps.findIndex((s) => s === slug);
    if (idx !== -1) {
      for (let i = idx + 1; i < steps.length; i++) {
        if (typeof steps[i] === "string") return steps[i] as string;
      }
    }
  }
  return undefined;
}

export default function ContinueLearning() {
  const [last, setLast] = useState<{ slug: string; date: string } | null>(null);

  useEffect(() => {
    setLast(getLastVisited());
  }, []);

  if (!last?.slug) return null;
  const tut = tutorials.find((x) => x.slug === last.slug);
  if (!tut) return null;

  const nextSlug = nextTutorialSlug(tut.slug);
  const nextTut = nextSlug ? tutorials.find((x) => x.slug === nextSlug) : undefined;

  const category = categories.find((c) => c.id === tut.categoryId);

  const dateStr = (() => {
    try {
      return new Date(last.date).toLocaleDateString("mr-IN", {
        day: "numeric", month: "short", year: "numeric",
      });
    } catch {
      return last.date;
    }
  })();

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="rounded-2xl border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold marathi text-primary-700 dark:text-primary-300">
            ▶️ तुम्ही कुठे थांबलात?
          </span>
          <span className="text-xs text-gray-400">{dateStr}</span>
        </div>

        <Link
          href={`/tutorial/${tut.slug}`}
          className="block rounded-xl border border-primary-100 dark:border-primary-800 bg-white dark:bg-gray-800 p-4 hover:border-primary-500 transition-colors"
        >
          <h3 className="font-semibold marathi mb-1">{tut.marathiTitle}</h3>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {category && <span>{category.icon} {category.name}</span>}
            <span>⏱ {tut.minutes} min</span>
          </div>
          <span className="mt-3 inline-block text-sm font-medium text-primary-600">
            तिथून पुन्हा सुरू करा →
          </span>
        </Link>

        {nextTut && (
          <Link
            href={`/tutorial/${nextTut.slug}`}
            className="mt-3 block px-4 py-2 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors text-sm marathi"
          >
            पुढचा: <span className="font-medium">{nextTut.marathiTitle}</span> →
          </Link>
        )}
      </div>
    </div>
  );
}