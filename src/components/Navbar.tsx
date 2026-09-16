"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useDarkMode } from "@/lib/storage";

const navItems = [
  { href: "/", label: "🏠 Home" },
  { href: "/learn", label: "📚 Learn" },
  { href: "/categories", label: "📂 Categories" },
  { href: "/tutorials", label: "📝 Tutorials" },
  { href: "/projects", label: "🛠️ Projects" },
  { href: "/quiz", label: "🧩 Quiz" },
  { href: "/tools", label: "🧰 Tools" },
  { href: "/glossary", label: "📖 Glossary" },
  { href: "/community", label: "👥 Community" },
  { href: "/notes", label: "📒 My Progress" },
  { href: "/search", label: "🔎 Search" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useDarkMode();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-xl font-bold marathi bg-gradient-to-r from-marathi-500 to-primary-600 bg-clip-text text-transparent">
              Marathi Learn Hub
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-primary-50 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href="/learn"
              className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium marathi"
            >
              मोफत शिका
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-4">
            <div className="grid grid-cols-2 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm ${pathname === item.href ? "bg-primary-50 dark:bg-primary-900/50 text-primary-700" : "hover:bg-gray-100 dark:hover:bg-gray-800"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
