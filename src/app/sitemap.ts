import type { MetadataRoute } from "next";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    "/",
    "/learn",
    "/tutorials",
    "/categories",
    "/quiz",
    "/projects",
    "/search",
    "/tools",
    "/glossary",
    "/notes",
    "/about",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const tutorialPages: MetadataRoute.Sitemap = tutorials.map((t) => ({
    url: `${base}/tutorial/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryPages: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${base}/category/${c.id}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...tutorialPages, ...categoryPages];
}