"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/categories";
import { CategoryCard, SectionHeader } from "@/components/Cards";

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📂 Categories"
          subtitle="तुम्हाला काय शिकायचे आहे ते निवडा"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} id={cat.id} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
