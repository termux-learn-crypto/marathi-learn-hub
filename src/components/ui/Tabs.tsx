"use client";

import { useState } from "react";

export function Tabs({
  tabs,
  defaultIndex = 0,
}: {
  tabs: { label: string; content: React.ReactNode }[];
  defaultIndex?: number;
}) {
  const [active, setActive] = useState(defaultIndex);
  return (
    <div>
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-700 mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-4 py-2 -mb-px border-b-2 text-sm font-medium transition-colors ${
              active === i
                ? "border-primary-600 text-primary-600"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[active]?.content}</div>
    </div>
  );
}