"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tutorials } from "@/data/tutorials";
import { TutorialCard, SectionHeader } from "@/components/Cards";

export default function TutorialsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📝 सर्व Tutorials"
          subtitle={`एकूण ${tutorials.length} lessons`}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tutorials.map((t) => (
            <TutorialCard key={t.slug} tutorial={t} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
