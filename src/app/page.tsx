"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { tutorials } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { CategoryCard, TutorialCard, ProjectCard, SectionHeader } from "@/components/Cards";
import { useDarkMode, useProgress } from "@/lib/storage";

export default function Home() {
  const [query, setQuery] = useState("");
  const [dark, setDark] = useDarkMode();
  const { completed } = useProgress();

  const popularCategories = ["python", "web", "electronics"];
  const latestTutorials = [...tutorials].slice(0, 6);
  const latestProjects = [...projects].slice(0, 3);
  const popularTutorials = [...tutorials].filter((t) => ["python-basics", "html-basics", "linux-basics", "ai-basics"].includes(t.slug));

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="py-12 md:py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 marathi bg-gradient-to-r from-marathi-500 via-marathi-600 to-primary-600 bg-clip-text text-transparent">
            मोफत शिका • प्रयोग करा • वाढा
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 marathi">
            मराठी भाषेतून प्रोग्रामिंग, इलेक्ट्रॉनिक्स, AI, Linux आणि आणखी बरंच काही मोफत शिका. Certificate नाही, payment नाही - फक्त खऱ्या अर्थाचे ज्ञान.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `/search?q=${encodeURIComponent(query)}`;
            }}
            className="max-w-xl mx-auto flex gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="🔎 काय शिकायचे आहे? (उदा. python, html...)"
              className="flex-1 px-5 py-3 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-primary-500 marathi"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full"
            >
              शोधा
            </button>
          </form>

          {/* Popular quick links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {popularCategories.map((id) => {
              const cat = categories.find((c) => c.id === id);
              if (!cat) return null;
              return (
                <Link
                  key={id}
                  href={`/category/${id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
                >
                  {cat.icon} {cat.name}
                </Link>
              );
            })}
          </div>
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

        {/* Popular Tutorials */}
        <section className="py-8">
          <SectionHeader
            title="🔥 Popular Lessons"
            subtitle="सर्वात जास्त शिकले जाणारे topics"
            link="/tutorials"
            linkText="सर्व tutorials"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularTutorials.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
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

        {/* Latest Tutorials */}
        <section className="py-8">
          <SectionHeader
            title="📝 Latest Tutorials"
            subtitle="नवीन lessons"
            link="/tutorials"
            linkText="सर्व पहा"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestTutorials.map((t) => (
              <TutorialCard key={t.slug} tutorial={t} />
            ))}
          </div>
        </section>

        {/* Why us section */}
        <section className="py-12">
          <div className="bg-gradient-to-br from-primary-50 to-marathi-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12">
            <SectionHeader
              title="🌟 Marathi Learn Hub का?"
              subtitle="शिकण्यासोबत आनंद"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2 marathi">शिका → वाचा → करा</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  प्रत्येक topic मध्ये मराठी explanation, code, practice आणि quiz.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🔓</div>
                <h3 className="font-semibold mb-2 marathi">100% मोफत</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  कोणतीही payment नाही, login नाही, certificate भी नाही. फक्त ज्ञान.
                </p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-semibold mb-2 marathi">मोबाईल फर्स्ट</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  फोनवरही अगदी सहज शिका आणि progress save ठेवा.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
