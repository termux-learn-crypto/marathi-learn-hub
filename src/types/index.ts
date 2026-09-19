// Shared platform types (implintion.md Phase 1 / trd.md schema)

// ── Languages & Technologies registry ──────────────────────────────

export interface LanguageCategory {
  id: string;
  name: string;
  marathiName: string;
  icon: string;
  color: string;
  gradient: string;
  chip: string;
  description: string;
  tags: string[];
}

// ── Official Resources (links.md) ───────────────────────────────────

export type ResourceType =
  | "official-website"
  | "documentation"
  | "reference"
  | "github"
  | "download"
  | "installation"
  | "playground"
  | "package-registry"
  | "api-reference"
  | "specification"
  | "tutorial"
  | "community"
  | "source-code";

export interface OfficialResource {
  id: string;
  type: ResourceType;
  title: string;
  url: string;
  description?: string;
  enabled: boolean;
  order: number;
}

export interface LanguageEntity {
  id: string;
  slug: string;
  name: string;
  marathiName: string;
  icon: string;
  categoryId: string;
  kind: "language" | "technology" | "platform" | "topic";
  description: string;
  resources: OfficialResource[];
}

// ── Course system (Phase 6) ─────────────────────────────────────────

export interface Course {
  id: string;
  languageId: string;
  title: string;
  slug: string;
  marathiTitle: string;
  description: string;
  level: string;
  orderIndex: number;
  moduleIds: string[];
}

export interface CourseModule {
  id: string;
  courseId: string;
  title: string;
  slug: string;
  description: string;
  orderIndex: number;
  lessonIds: string[];
}

// ── Lesson (content reuse wrapper) ──────────────────────────────────

export interface LessonSummary {
  slug: string;
  categoryId: string;
  title: string;
  marathiTitle: string;
  level: "beginner" | "intermediate" | "advanced";
  minutes: number;
  summary: string;
  levelLabel?: string;
  hasQuiz: boolean;
  hasProject: boolean;
}

// ── Glossary (trd.md) ───────────────────────────────────────────────

export interface GlossaryTerm {
  term: string;
  slug: string;
  marathiExplanation: string;
  definition: string;
  relatedTerms: string[];
  category: string;
}

// ── Roadmap (trd.md) ────────────────────────────────────────────────

export interface Roadmap {
  id: string;
  title: string;
  slug: string;
  marathiTitle: string;
  description: string;
  goal: string;
  prerequisites: string[];
  steps: RoadmapStep[];
  advancedSkills: string[];
}

export interface RoadmapStep {
  title: string;
  marathiTitle: string;
  description: string;
  topics: string[];
  projects: string[];
  resources: OfficialResource[];
}