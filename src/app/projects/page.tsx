"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import { ProjectCard, SectionHeader } from "@/components/Cards";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="🛠️ Projects"
          subtitle="शिकलेलं ज्ञान वापरून काहीतरी बनवा"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
