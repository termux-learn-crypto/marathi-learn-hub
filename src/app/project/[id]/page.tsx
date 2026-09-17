import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/data/projects";
import { tutorials } from "@/data/tutorials";
import { getCategory } from "@/data/categories";
import CodeEditor from "@/components/CodeEditor";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);
  const cat = project?.categoryId ? getCategory(project.categoryId) : undefined;
  const title = project ? `${project.marathiTitle} | Marathi Learn Hub` : "Project | Marathi Learn Hub";
  return {
    title,
    description: project?.summary ?? "मोफत मराठी शिक्षा. DIY प्रोजेक्ट्स.",
    keywords: [
      project?.title ?? "",
      project?.marathiTitle ?? "",
      cat?.name ?? "",
      "project",
      "DIY",
      "मराठी",
    ].filter(Boolean).join(", "),
    openGraph: {
      title,
      description: project?.summary,
      type: "article",
      url: `/project/${id}`,
    },
    alternates: {
      canonical: `/project/${id}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  const cat = project.categoryId ? getCategory(project.categoryId) : undefined;

  const prereqTutorials = tutorials
    .filter((t) => t.project === project.id)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>›</span>
          <Link href="/projects" className="hover:text-primary-600">Projects</Link>
          <span>›</span>
          <span className="text-gray-700 dark:text-gray-300">{project.marathiTitle}</span>
        </div>

        <h1 className="text-3xl font-extrabold marathi mb-4">{project.marathiTitle}</h1>

        <div className="flex items-center gap-3 mb-6">
          {cat && (
            <Link href={`/category/${cat.id}`} className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs">
              {cat.icon} {cat.name}
            </Link>
          )}
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            project.difficulty === "सोपे" ? "bg-green-100 text-green-700" :
            project.difficulty === "मध्यम" ? "bg-yellow-100 text-yellow-700" :
            "bg-red-100 text-red-700"
          }`}>
            {project.difficulty}
          </span>
          <span className="text-xs text-gray-500">⏱ {project.minutes} min</span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 marathi">{project.summary}</p>

        {project.components && project.components.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-bold marathi mb-3">🔧 आवश्यक साधने</h2>
            <div className="flex flex-wrap gap-2">
              {project.components.map((comp, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm">
                  {comp}
                </span>
              ))}
            </div>
          </section>
        )}

        {prereqTutorials.length > 0 && (
          <section className="mb-8 rounded-2xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 p-6">
            <h2 className="text-xl font-bold marathi mb-2">📚 आधी हे lessons पूर्ण करा</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              हा project करायच्या आधी या lessons मधून जरूर जा — मग प्रोजेक्ट सोपा वाटेल.
            </p>
            <ul className="space-y-2">
              {prereqTutorials.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tutorial/${t.slug}`}
                    className="flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 transition-colors"
                  >
                    <span className="font-medium marathi">{t.marathiTitle}</span>
                    <span className="text-xs text-gray-500 shrink-0">⏱ {t.minutes} min</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-xl font-bold marathi mb-4">📋 पायऱ्या</h2>
          <ol className="space-y-4">
            {project.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </span>
                <div className="pt-1 marathi text-gray-700 dark:text-gray-300">{step}</div>
              </li>
            ))}
          </ol>
        </section>

        {project.code && (
          <section>
            <h2 className="text-xl font-bold marathi mb-4">💻 कोड</h2>
            <CodeEditor code={project.code} language={project.codeLanguage || "html"} />
          </section>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg marathi"
          >
            ⬅️ इतर Projects पहा
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
