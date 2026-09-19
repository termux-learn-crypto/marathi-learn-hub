import type { MetadataRoute } from "next";
import { tutorials } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { learningPaths } from "@/data/learningPaths";
import { languages } from "@/data/languages";
import { siteUrl } from "@/lib/site";
import { getLessonDates } from "@/lib/lesson-dates";

const lessonDates = getLessonDates();

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();

  const staticPages: MetadataRoute.Sitemap = [
    "/",
    "/courses",
    "/lessons",
    "/practice",
    "/challenges",
    "/projects",
    "/roadmaps",
    "/playground",
    "/search",
    "/glossary",
    "/learn",
    "/tutorials",
    "/categories",
    "/quiz",
    "/tools",
    "/community",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/notes",
    "/paths",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const tutorialPages: MetadataRoute.Sitemap = tutorials.map((t) => {
    const lastModified = lessonDates[t.slug];
    return {
      url: `${base}/tutorial/${t.slug}`,
      lastModified: lastModified ? new Date(lastModified) : undefined,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });

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

  const coursePages: MetadataRoute.Sitemap = languages.map((l) => ({
    url: `${base}/courses/${l.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const pathPages: MetadataRoute.Sitemap = learningPaths.map((p) => ({
    url: `${base}/path/${p.id}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...tutorialPages, ...categoryPages, ...projectPages, ...coursePages, ...pathPages];
}