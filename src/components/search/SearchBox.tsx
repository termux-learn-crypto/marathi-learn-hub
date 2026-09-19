"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SearchBox({ initialQuery }: { initialQuery: string }) {
  const [value, setValue] = useState(initialQuery);
  const router = useRouter();
  const pathname = usePathname();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setValue(initialQuery);
  }, [initialQuery]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const next = e.target.value;
    setValue(next);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      const q = next.trim();
      router.replace(q ? `${pathname}?q=${encodeURIComponent(q)}` : pathname);
    }, 300);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="🔎 उदा. python, html, loop, variable..."
        className="w-full px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
        autoFocus
      />
    </form>
  );
}