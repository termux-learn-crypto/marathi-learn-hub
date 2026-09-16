export interface TopicSection {
  title: string;
  content: string;
  code?: string;
  codeLanguage?: string;
  output?: string;
  input?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface CodingChallenge {
  prompt: string;
  starterCode?: string;
  expectedOutput?: string;
}

export interface Tutorial {
  slug: string;
  categoryId: string;
  title: string;
  marathiTitle: string;
  level: "beginner" | "intermediate" | "advanced";
  minutes: number;
  summary: string;
  sections: TopicSection[];
  quiz: QuizQuestion[];
  related: string[];
  next?: string;
  prev?: string;
  levelLabel?: string;
  practiceQuestions?: string[];
  interviewQuestions?: string[];
  challenge?: CodingChallenge;
}

import { pythonLevel1 } from "./tutorials/python/python-level1";
import { pythonLevel2 } from "./tutorials/python/python-level2";
import { pythonLevel3 } from "./tutorials/python/python-level3";
import { pythonLevel4 } from "./tutorials/python/python-level4";
import { pythonLevel5 } from "./tutorials/python/python-level5";
import { pythonLevel6 } from "./tutorials/python/python-level6";
import { pythonLevel7 } from "./tutorials/python/python-level7";
import { pythonLevel8 } from "./tutorials/python/python-level8";
import { htmlLevel1 } from "./tutorials/web/html/html-level1";
import { htmlLevel2 } from "./tutorials/web/html/html-level2";
import { htmlLevel3 } from "./tutorials/web/html/html-level3";
import { htmlLevel4 } from "./tutorials/web/html/html-level4";
import { htmlLevel5 } from "./tutorials/web/html/html-level5";
import { cssLevel1 } from "./tutorials/web/css/css-level1";
import { cssLevel2 } from "./tutorials/web/css/css-level2";
import { cssLevel3 } from "./tutorials/web/css/css-level3";
import { cssLevel4 } from "./tutorials/web/css/css-level4";
import { cssLevel5 } from "./tutorials/web/css/css-level5";
import { cssLevel6 } from "./tutorials/web/css/css-level6";
import { cssLevel7 } from "./tutorials/web/css/css-level7";
import { cssLevel8 } from "./tutorials/web/css/css-level8";
import { cssLevel9 } from "./tutorials/web/css/css-level9";
import { cssLevel10 } from "./tutorials/web/css/css-level10";
import { cssLevel11 } from "./tutorials/web/css/css-level11";
import { cssLevel12 } from "./tutorials/web/css/css-level12";
import { cssLevel13 } from "./tutorials/web/css/css-level13";
import { cssLevel14 } from "./tutorials/web/css/css-level14";
import { cssLevel15 } from "./tutorials/web/css/css-level15";
import { jsLevel1 } from "./tutorials/web/js/js-level1";
import { jsLevel2 } from "./tutorials/web/js/js-level2";
import { jsLevel3 } from "./tutorials/web/js/js-level3";
import { jsLevel4 } from "./tutorials/web/js/js-level4";
import { jsLevel5 } from "./tutorials/web/js/js-level5";
import { jsLevel6 } from "./tutorials/web/js/js-level6";
import { jsLevel7 } from "./tutorials/web/js/js-level7";
import { jsLevel8 } from "./tutorials/web/js/js-level8";
import { webExtra } from "./tutorials/web/web-extra";
import { computerFoundation } from "./tutorials/computer/computer-foundation";
import { computerLevel1 } from "./tutorials/computer/computer-level1";
import { androidLevel1 } from "./tutorials/android/android-level1";
import { androidExtra } from "./tutorials/android/android-extra";
import { aiLevel1 } from "./tutorials/ai/ai-level1";
import { aiLevel2 } from "./tutorials/ai/ai-level2";
import { aiExtra } from "./tutorials/ai/ai-extra";
import { electronicsLevel1 } from "./tutorials/electronics/electronics-level1";
import { electronicsLevel2 } from "./tutorials/electronics/electronics-level2";
import { electronicsLevel3 } from "./tutorials/electronics/electronics-level3";
import { electronicsLevel4 } from "./tutorials/electronics/electronics-level4";
import { electronicsLevel5 } from "./tutorials/electronics/electronics-level5";
import { arduinoExtra } from "./tutorials/electronics/arduino";
import { linuxLessons } from "./tutorials/linux/linux-lessons";
import { termuxLessons } from "./tutorials/termux/termux-lessons";
import { electricalLessons } from "./tutorials/electrical/electrical-lessons";
import { cyberLessons } from "./tutorials/cyber/cyber-lessons";
import { digitalLessons } from "./tutorials/digital/digital-lessons";
import { freelancingLessons } from "./tutorials/freelancing/freelancing-lessons";
import { diyLessons } from "./tutorials/diy/diy-lessons";
import { generalLessons } from "./tutorials/general/general-lessons";

export const tutorials: Tutorial[] = [
  ...pythonLevel1,
  ...pythonLevel2,
  ...pythonLevel3,
  ...pythonLevel4,
  ...pythonLevel5,
  ...pythonLevel6,
  ...pythonLevel7,
  ...pythonLevel8,
  ...htmlLevel1,
  ...htmlLevel2,
  ...htmlLevel3,
  ...htmlLevel4,
  ...htmlLevel5,
  ...cssLevel1,
  ...cssLevel2,
  ...cssLevel3,
  ...cssLevel4,
  ...cssLevel5,
  ...cssLevel6,
  ...cssLevel7,
  ...cssLevel8,
  ...cssLevel9,
  ...cssLevel10,
  ...cssLevel11,
  ...cssLevel12,
  ...cssLevel13,
  ...cssLevel14,
  ...cssLevel15,
  ...jsLevel1,
  ...jsLevel2,
  ...jsLevel3,
  ...jsLevel4,
  ...jsLevel5,
  ...jsLevel6,
  ...jsLevel7,
  ...jsLevel8,
  ...webExtra,
  ...computerFoundation,
  ...computerLevel1,
  ...androidLevel1,
  ...androidExtra,
  ...aiLevel1,
  ...aiLevel2,
  ...aiExtra,
  ...electronicsLevel1,
  ...electronicsLevel2,
  ...electronicsLevel3,
  ...electronicsLevel4,
  ...electronicsLevel5,
  ...arduinoExtra,
  ...linuxLessons,
  ...termuxLessons,
  ...electricalLessons,
  ...cyberLessons,
  ...digitalLessons,
  ...freelancingLessons,
  ...diyLessons,
  ...generalLessons,
];

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getTutorialsByCategory(categoryId: string): Tutorial[] {
  return tutorials.filter((t) => t.categoryId === categoryId);
}

export function searchTutorials(query: string): Tutorial[] {
  const q = query.toLowerCase().trim();
  if (!q) return tutorials;
  return tutorials.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.marathiTitle.toLowerCase().includes(q) ||
      t.categoryId.toLowerCase().includes(q) ||
      t.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
  );
}

export type TutorialSummary = Pick<
  Tutorial,
  "slug" | "marathiTitle" | "summary" | "minutes" | "level" | "categoryId" | "levelLabel"
>;

export function toTutorialSummary(t: Tutorial): TutorialSummary {
  return {
    slug: t.slug,
    marathiTitle: t.marathiTitle,
    summary: t.summary,
    minutes: t.minutes,
    level: t.level,
    categoryId: t.categoryId,
    levelLabel: t.levelLabel,
  };
}