"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { TutorialCard, SectionHeader } from "@/components/Cards";

export default function LearnPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📚 Learn - शिका"
          subtitle="सर्व categories मधील lessons"
        />

        {categories.map((cat) => {
          const catTuts = tutorials.filter((t) => t.categoryId === cat.id);
          if (catTuts.length === 0) return null;
          return (
            <section key={cat.id} className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-8 h-8 rounded-lg ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </span>
                <h2 className="text-xl font-semibold marathi">{cat.name} - {cat.marathiName}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catTuts.map((t) => (
                  <TutorialCard key={t.slug} tutorial={t} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
