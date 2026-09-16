import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PathDetail from "@/components/PathDetail";
import { learningPaths, getPath, pathStepCount } from "@/data/learningPaths";
import { getCategory } from "@/data/categories";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return learningPaths.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const path = getPath(id);
  const cat = path ? getCategory(path.categoryId) : undefined;
  if (!path) {
    return {
      title: "Learning Path सापडला नाही | Marathi Learn Hub",
    };
  }
  const title = `${path.marathiTitle} | Learning Path | Marathi Learn Hub`;
  return {
    title: { absolute: title },
    description: path.description,
    keywords: [
      path.title,
      path.marathiTitle,
      `${path.title} learning path`,
      "learning path marathi",
      "शिकण्याचा मार्ग",
      cat?.name ?? "",
      ...(cat ? cat.tags : []),
      "मराठी", "tutorial", "journey",
    ].filter(Boolean).join(", "),
    openGraph: {
      title,
      description: path.description,
      url: `/path/${id}`,
      type: "website",
      siteName: "Marathi Learn Hub",
      locale: "mr_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: path.description,
      images: ["/icons/icon-512.png"],
    },
    alternates: {
      canonical: `/path/${id}`,
    },
  };
}

export default async function PathDetailPage({ params }: Props) {
  const { id } = await params;
  const path = getPath(id);

  if (!path) {
    notFound();
  }

  const cat = path.categoryId ? getCategory(path.categoryId) : undefined;

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm text-gray-500 mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-primary-600">Home</Link>
          <span>›</span>
          <Link href="/paths" className="hover:text-primary-600">Paths</Link>
          <span>›</span>
          <span className="text-gray-700 dark:text-gray-300">{path.title}</span>
        </div>

        {cat && (
          <Link
            href={`/category/${cat.id}`}
            className="inline-block mb-4 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-xs"
          >
            {cat.icon} {cat.name}
          </Link>
        )}

        <PathDetail path={path} totalSteps={pathStepCount(path)} />
      </main>
      <Footer />
    </>
  );
}