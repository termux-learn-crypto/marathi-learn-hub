"use client";

import { Tutorial } from "@/data/tutorials";
import { categories } from "@/data/categories";

export interface TutorialFiltersState {
  level: "all" | "beginner" | "intermediate" | "advanced";
  maxTime: "all" | "10" | "15" | "25" | "25+";
  categoryId: string;
}

export const defaultTutorialFilters: TutorialFiltersState = {
  level: "all",
  maxTime: "all",
  categoryId: "all",
};

export function applyTutorialFilters(tutorials: Tutorial[], f: TutorialFiltersState): Tutorial[] {
  return tutorials.filter((t) => {
    if (f.level !== "all" && t.level !== f.level) return false;
    if (f.maxTime === "10" && t.minutes > 10) return false;
    if (f.maxTime === "15" && t.minutes > 15) return false;
    if (f.maxTime === "25" && t.minutes > 25) return false;
    if (f.maxTime === "25+" && t.minutes <= 25) return false;
    if (f.categoryId !== "all" && t.categoryId !== f.categoryId) return false;
    return true;
  });
}

export function hasActiveFilters(f: TutorialFiltersState): boolean {
  return f.level !== "all" || f.maxTime !== "all" || f.categoryId !== "all";
}

const levelOptions: { value: TutorialFiltersState["level"]; label: string; active: string }[] = [
  { value: "all", label: "सर्व Levels", active: "bg-primary-600 text-white" },
  { value: "beginner", label: "सोपे", active: "bg-green-600 text-white" },
  { value: "intermediate", label: "मध्यम", active: "bg-yellow-600 text-white" },
  { value: "advanced", label: "अवघड", active: "bg-red-600 text-white" },
];

const timeOptions: { value: TutorialFiltersState["maxTime"]; label: string }[] = [
  { value: "all", label: "सर्व वेळ" },
  { value: "10", label: "≤10 मि" },
  { value: "15", label: "≤15 मि" },
  { value: "25", label: "≤25 मि" },
  { value: "25+", label: "25+ मि" },
];

interface TutorialFiltersProps {
  filters: TutorialFiltersState;
  onChange: (f: TutorialFiltersState) => void;
  showCategory?: boolean;
  resultCount?: number;
}

export default function TutorialFilters({ filters, onChange, showCategory = true, resultCount }: TutorialFiltersProps) {
  const active = hasActiveFilters(filters);
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 mb-6 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 min-w-[70px]">Level</span>
        {levelOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange({ ...filters, level: opt.value })}
            className={`filter-pill px-3 py-1.5 text-sm font-medium border transition-colors ${
              filters.level === opt.value
                ? `${opt.active} border-transparent filter-pill-active`
                : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 min-w-[70px]">वेळ</span>
        {timeOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange({ ...filters, maxTime: opt.value })}
            className={`filter-pill px-3 py-1.5 text-sm font-medium border transition-colors ${
              filters.maxTime === opt.value
                ? "bg-primary-600 text-white border-transparent filter-pill-active"
                : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {showCategory && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 min-w-[70px]">Category</span>
          <select
            value={filters.categoryId}
            onChange={(e) => onChange({ ...filters, categoryId: e.target.value })}
            className="px-3 py-1.5 text-sm font-medium rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">सर्व Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.icon} {c.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {typeof resultCount === "number" ? `${resultCount} lessons मिळाले` : ""}
        </span>
        {active && (
          <button
            onClick={() => onChange(defaultTutorialFilters)}
            className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            ✕ फिल्टर साफ करा
          </button>
        )}
      </div>
    </div>
  );
}