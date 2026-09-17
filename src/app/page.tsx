import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";
import { categories } from "@/data/categories";
import { tutorials, toTutorialSummary, type TutorialSummary } from "@/data/tutorials";
import { projects } from "@/data/projects";
import { CategoryCard, ProjectCard, SectionHeader } from "@/components/Cards";
import LearningPaths from "@/components/LearningPaths";
import { telegramUrl } from "@/lib/site";

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

const filterIds = ["all", "computer", "web", "python", "ai", "electronics"];

export default function Home() {
  const latestProjects = [...projects].slice(0, 3);

  const categoryCounts = new Map<string, number>();
  for (const t of tutorials) {
    categoryCounts.set(t.categoryId, (categoryCounts.get(t.categoryId) ?? 0) + 1);
  }

  const featured: Record<string, TutorialSummary[]> = {};
  for (const id of filterIds) {
    featured[id] =
      id === "all"
        ? tutorials.slice(0, 6).map(toTutorialSummary)
        : tutorials.filter((t) => t.categoryId === id).slice(0, 6).map(toTutorialSummary);
  }

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

        {/* Quick Search + Filter Bar, Learning Paths, Featured Tutorials */}
        <HomeClient categories={categories} featured={featured}>
          <LearningPaths />
        </HomeClient>

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
              <CategoryCard key={cat.id} cat={cat} count={categoryCounts.get(cat.id) ?? 0} />
            ))}
          </div>
        </section>

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