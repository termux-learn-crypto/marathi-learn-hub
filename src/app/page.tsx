"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { tutorials } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { CategoryCard, TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";
import LearningPaths from "@/components/LearningPaths";
import { telegramUrl } from "@/lib/site";

const quickFilters = [
  { id: "all", icon: "🌐", label: "सर्व", chip: "bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300" },
  { id: "computer", icon: "💻", label: "Computer Basics" },
  { id: "web", icon: "🌐", label: "Web Dev" },
  { id: "python", icon: "🐍", label: "Python" },
  { id: "ai", icon: "🤖", label: "AI & Tech" },
  { id: "electronics", icon: "🔌", label: "Electronics" },
];

const trustBadges = [
  { icon: "✅", text: "100% मोफत" },
  { icon: "🔓", text: "Open Access" },
  { icon: "🇮🇳", text: "Native Marathi" },
];

const valuePillars = [
  {
    icon: "🗣️",
    title: "मातृभाषेत ज्ञान",
    desc: "Complex तांत्रिक संकल्पना आता सोप्या मराठीत. समजच बदलते जेव्हा स्वतःच्या भाषेत शिकतो.",
  },
  {
    icon: "💸",
    title: "शून्य खर्च",
    desc: "कोणतेही hidden fees नाही, paid courses नाही. संपूर्ण content 100% free आणि login मुक्त.",
  },
  {
    icon: "🛠️",
    title: "प्रात्यक्षिक शिकवणी",
    desc: "Real-world examples, code editors आणि projects सोबत step-by-step मार्गदर्शन.",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const latestProjects = [...projects].slice(0, 3);

  const featuredTutorials =
    activeFilter === "all"
      ? [...tutorials].slice(0, 6)
      : tutorials.filter((t) => t.categoryId === activeFilter).slice(0, 6);

  const filterChip = (id: string) => {
    if (id === "all") return quickFilters[0].chip;
    const cat = categories.find((c) => c.id === id);
    return cat?.chip || quickFilters[0].chip;
  };

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 marathi bg-gradient-to-r from-marathi-500 via-marathi-600 to-primary-600 bg-clip-text text-transparent leading-tight">
            मोफत शिका • प्रयोग करा • वाढा
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 marathi leading-relaxed">
            Certificate नाही, payment नाही — फक्त खऱ्या अर्थाचे ज्ञान. मराठी भाषेतून
            प्रोग्रामिंग, इलेक्ट्रॉनिक्स, AI, Linux आणि बरंच काही.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="#featured"
              className="px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg shadow-primary-600/20 marathi transition-colors"
            >
              🚀 शिकायला सुरुवात करा
            </a>
            <Link
              href="/about"
              className="px-8 py-3.5 font-semibold rounded-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 marathi transition-colors"
            >
              आमच्याबद्दल जाणून घ्या
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {trustBadges.map((b) => (
              <span
                key={b.text}
                className="px-4 py-1.5 rounded-full text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                {b.icon} {b.text}
              </span>
            ))}
          </div>
        </section>

        {/* Quick Search + Filter Bar */}
        <section className="pb-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }}
            className="max-w-xl mx-auto flex gap-2 mb-5"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Python, Web Dev, Linux या इतर विषय शोधा..."
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full whitespace-nowrap"
            >
              शोधा
            </button>
          </form>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {quickFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`filter-pill px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeFilter === f.id
                    ? `${filterChip(f.id)} border-transparent filter-pill-active`
                    : "border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {f.icon} {f.label}
              </button>
            ))}
          </div>
        </section>

        <LearningPaths />

        {/* Featured & Trending Tutorials */}
        <section id="featured" className="py-8">
          <SectionHeader
            title={activeFilter === "all" ? "🔥 Featured & Trending Lessons" : `🔥 ${categories.find((c) => c.id === activeFilter)?.name || ""} Lessons`}
            subtitle={
              activeFilter === "all"
                ? "सर्वात जास्त शिकले जाणारे topics"
                : "तुमच्या पसंतीच्या category मधील topics"
            }
            link="/tutorials"
            linkText="सर्व tutorials"
          />
          {featuredTutorials.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredTutorials.map((t) => (
                <TutorialCard key={t.slug} tutorial={t} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-500 mb-4">या category मध्ये अजून lessons नाहीत.</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="filter-pill px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium"
              >
                🌐 सर्व lessons बघा
              </button>
            </div>
          )}
        </section>

        {/* Categories Grid */}
        <section className="py-8">
          <SectionHeader
            title="📚 Categories"
            subtitle="तुमच्या आवडीचा विषय निवडा"
            link="/categories"
            linkText="सर्व पहा"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} id={cat.id} />
            ))}
          </div>
        </section>

        {/* Latest Projects */}
        <section className="py-8">
          <SectionHeader
            title="🛠️ Latest Projects"
            subtitle="काहीतरी बनवून बघा"
            link="/projects"
            linkText="सर्व projects"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        {/* Why Marathi Learn Hub — Value Pillars */}
        <section className="py-12">
          <div className="bg-gradient-to-br from-primary-50 to-marathi-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
            <SectionHeader
              title="🌟 Marathi Learn Hub का?"
              subtitle="शिकण्यासोबत आनंद"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {valuePillars.map((p) => (
                <div key={p.title} className="text-center p-4">
                  <div className="category-box w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-marathi-500 flex items-center justify-center text-3xl mx-auto mb-4">
                    {p.icon}
                  </div>
                  <h3 className="font-semibold mb-2 marathi">{p.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Social Proof */}
        <section className="py-12">
          <div className="rounded-3xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/30 p-8 md:p-10 text-center">
            <div className="text-6xl mb-4">👥</div>
            <h2 className="text-2xl md:text-3xl font-bold marathi mb-3">
              आमच्या कम्युनिटीमध्ये सामील व्हा
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 marathi mb-6 leading-relaxed">
              प्रश्न विचारा, doubts सोडवा आणि progress share करा. एकटे शिकण्यापेक्षा
              सोबत शिकणे जास्त सोपे आणि मजेदार आहे!
            </p>
            <a
              href={telegramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold marathi transition-colors shadow-lg shadow-blue-600/20"
            >
              📱 Join Now — Telegram Group
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}