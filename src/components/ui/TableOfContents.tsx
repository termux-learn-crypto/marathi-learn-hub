"use client";

import { useEffect, useState } from "react";

export function TableOfContents({ headings }: { headings: { id: string; title: string }[] }) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px" }
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <p className="text-sm font-semibold mb-3 text-gray-500 dark:text-gray-400">📑 विषयसूची</p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block text-sm leading-snug transition-colors ${
                active === h.id
                  ? "text-primary-600 dark:text-primary-300 font-medium"
                  : "text-gray-600 dark:text-gray-400 hover:text-primary-600"
              }`}
            >
              {h.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}