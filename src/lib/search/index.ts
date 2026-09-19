import { tutorials, toTutorialSummary } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { glossary } from "@/data/glossary";

export interface SearchResult {
  type: "tutorial" | "category" | "project" | "glossary" | "language";
  slug: string;
  title: string;
  marathiTitle?: string;
  description: string;
  url: string;
}

export function searchContent(query: string, limit = 30): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];

  const results: SearchResult[] = [];

  for (const t of tutorials) {
    if (
      t.title.toLowerCase().includes(q) ||
      t.marathiTitle.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q)
    ) {
      results.push({
        type: "tutorial",
        slug: t.slug,
        title: t.title,
        marathiTitle: t.marathiTitle,
        description: t.summary,
        url: `/tutorial/${t.slug}`,
      });
    }
  }

  for (const c of categories) {
    if (c.name.toLowerCase().includes(q) || c.marathiName.toLowerCase().includes(q)) {
      results.push({
        type: "category",
        slug: c.id,
        title: c.name,
        marathiTitle: c.marathiName,
        description: c.description,
        url: `/category/${c.id}`,
      });
    }
  }

  for (const p of projects) {
    if (p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q)) {
      results.push({
        type: "project",
        slug: p.id,
        title: p.title,
        description: p.summary,
        url: `/project/${p.id}`,
      });
    }
  }

  for (const g of glossary) {
    if (g.term.toLowerCase().includes(q) || g.marathiMeaning.toLowerCase().includes(q)) {
      results.push({
        type: "glossary",
        slug: g.term.toLowerCase().replace(/\s+/g, "-"),
        title: g.term,
        marathiTitle: g.marathiMeaning,
        description: g.description,
        url: `/glossary#${g.term.toLowerCase().replace(/\s+/g, "-")}`,
      });
    }
  }

  return results.slice(0, limit);
}

export { toTutorialSummary };