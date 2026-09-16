import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { getTutorialsByCategory, toTutorialSummary } from "@/data/tutorials";
import { getProjectsByCategory } from "@/data/projects";
import CategoryContent from "./CategoryContent";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const cat = getCategory(id);
  if (!cat) {
    return {
      title: "Category | Marathi Learn Hub",
      description: "मराठीत कोडिंग आणि तंत्रज्ञान शिका. Learn programming and tech in Marathi.",
    };
  }
  const title = `${cat.name} — ${cat.marathiName} | Marathi Learn Hub`;
  const desc = `${cat.description}. Learn ${cat.name} in Marathi — मराठीत ${cat.marathiName} शिका.`;
  return {
    title: { absolute: title },
    description: desc,
    keywords: [
      cat.name,
      cat.marathiName,
      `${cat.name} marathi`,
      `learn ${cat.name} in marathi`,
      `${cat.name} मराठीत`,
      `${cat.marathiName} tutorial`,
      ...cat.tags,
      "marathi", "learn", "मराठी", "ट्यूटोरियल",
    ].filter(Boolean).join(", "),
    openGraph: {
      title,
      description: desc,
      type: "website",
      url: `/category/${cat.id}`,
      locale: "mr_IN",
      siteName: "Marathi Learn Hub",
      images: ["/icons/icon-512.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: ["/icons/icon-512.png"],
    },
    alternates: {
      canonical: `/category/${cat.id}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { id } = await params;
  const cat = getCategory(id);
  if (!cat) {
    notFound();
  }
  const catTutorials = getTutorialsByCategory(id).map(toTutorialSummary);
  const catProjects = getProjectsByCategory(id);
  return <CategoryContent cat={cat} catTutorials={catTutorials} catProjects={catProjects} />;
}
