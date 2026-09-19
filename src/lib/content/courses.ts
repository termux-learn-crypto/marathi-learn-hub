import { tutorials, getTutorial, type Tutorial } from "@/data/tutorials";
import { categories } from "@/data/categories";
import { languages, getLanguage } from "@/data/languages";
import type { Course, CourseModule, LessonSummary } from "@/types";

export function toLessonSummary(t: Tutorial): LessonSummary {
  return {
    slug: t.slug,
    categoryId: t.categoryId,
    title: t.title,
    marathiTitle: t.marathiTitle,
    level: t.level,
    minutes: t.minutes,
    summary: t.summary,
    levelLabel: t.levelLabel,
    hasQuiz: Boolean(t.quiz && t.quiz.length > 0),
    hasProject: t.project !== undefined,
  };
}

// A course == a language/technology entity. Modules are derived from levelLabel when available.
export function buildCourse(languageId: string): Course | undefined {
  const lang = getLanguage(languageId);
  const cat = categories.find((c) => c.id === languageId);
  if (!lang && !cat) return { id: languageId, languageId, title: languageId, slug: languageId, marathiTitle: languageId, description: "", level: "beginner", orderIndex: 0, moduleIds: [] };

  const name = lang?.name ?? cat?.name ?? languageId;
  const slug = lang?.slug ?? cat?.id ?? languageId;
  return {
    id: slug,
    languageId: slug,
    title: name,
    slug,
    marathiTitle: lang?.marathiName ?? cat?.marathiName ?? name,
    description: lang?.description ?? cat?.description ?? "",
    level: "beginner",
    orderIndex: 0,
    moduleIds: [],
  };
}

// Group a language's tutorials into modules (grouped by levelLabel or level).
export function buildModules(languageId: string): CourseModule[] {
  const tuts = tutorials.filter((t) => t.categoryId === languageId);
  const grouped = new Map<string, Tutorial[]>();
  for (const t of tuts) {
    const key = t.levelLabel ?? levelToMarathi(t.level);
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)!.push(t);
  }
  const order: Record<string, number> = {
    "अगदी सुरुवात": 1,
    "सुरुवात": 2,
    "मध्यम": 3,
    "प्रगत": 4,
    "प्रोजेक्ट": 5,
    "advanced": 6,
  };
  const modules: CourseModule[] = [];
  let idx = 0;
  for (const [title, list] of grouped) {
    modules.push({
      id: `${languageId}-module-${idx}`,
      courseId: languageId,
      title,
      slug: `${languageId}-${idx}`,
      description: `${list.length} lessons`,
      orderIndex: order[title] ?? idx + 1,
      lessonIds: list.map((t) => t.slug),
    });
    idx++;
  }
  return modules.sort((a, b) => a.orderIndex - b.orderIndex);
}

function levelToMarathi(level: Tutorial["level"]): string {
  return level === "beginner" ? "सुरुवात" : level === "intermediate" ? "मध्यम" : "प्रगत";
}

export function getLessonsForLanguage(languageId: string): LessonSummary[] {
  return tutorials.filter((t) => t.categoryId === languageId).map(toLessonSummary);
}

export function getLesson(slug: string): Tutorial | undefined {
  return getTutorial(slug);
}

export function getCourseList(): Course[] {
  return languages.map((l) => buildCourse(l.id)).filter((c): c is Course => Boolean(c));
}

export function getCoursesWithCount(): (Course & { lessonCount: number; icon: string })[] {
  return getCourseList().map((c) => ({
    ...c,
    lessonCount: tutorials.filter((t) => t.categoryId === c.languageId).length,
    icon: getLanguage(c.languageId)?.icon ?? "📘",
  }));
}