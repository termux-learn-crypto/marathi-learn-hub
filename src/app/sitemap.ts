import type { MetadataRoute } from "next";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
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
    "/tools",
    "/glossary",
    "/community",
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

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/project/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...tutorialPages, ...categoryPages, ...projectPages];
}