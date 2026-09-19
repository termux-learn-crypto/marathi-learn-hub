"use client";

import { useState } from "react";

interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<Set<number>>(
    new Set(defaultOpen === null ? [] : [defaultOpen])
  );

  const toggle = (index: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} className="bg-white dark:bg-gray-800">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <span>{item.title}</span>
              <span
                className={`text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}