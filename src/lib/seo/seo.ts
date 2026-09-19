import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/icons/icon-512.png",
  type = "website",
}: PageSeo): Metadata {
  const url = new URL(path, siteUrl()).toString();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Marathi Learn Hub",
      type,
      locale: "mr_IN",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function generatePageJsonLd(config: {
  title: string;
  description: string;
  path: string;
  type: "WebPage" | "BreadcrumbList" | "Course" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": config.type,
    name: config.title,
    description: config.description,
    url: new URL(config.path, siteUrl()).toString(),
    inLanguage: "mr",
  };
}