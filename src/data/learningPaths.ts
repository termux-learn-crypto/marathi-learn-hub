import { tutorials } from "./tutorials";
import { projects } from "./projects";

export type LearningPathStep = string | { project: string };

export interface LearningPathPhase {
  title: string;
  english: string;
  steps: LearningPathStep[];
}

export interface LearningPath {
  id: string;
  categoryId: string;
  icon: string;
  gradient: string;
  title: string;
  marathiTitle: string;
  description: string;
  difficulty: "सोपे" | "मध्यम" | "अवघड";
  phases: LearningPathPhase[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "python",
    categoryId: "python",
    icon: "🐍",
    gradient: "from-emerald-500 to-teal-400",
    title: "Python Programming",
    marathiTitle: "Python शिका — शून्यापासून",
    description:
      "Variables, conditions, loops, functions आणि classes — सोप्या मराठीत. शेवटी एक मोठा project.",
    difficulty: "सोपे",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["python-basics", "python-if"],
      },
      {
        title: "मध्यम",
        english: "Intermediate",
        steps: ["python-loops-project", "python-functions"],
      },
      {
        title: "प्रोजेक्ट",
        english: "Capstone Project",
        steps: ["python-mega-project"],
      },
      {
        title: "पुढे",
        english: "Advanced",
        steps: ["python-classes"],
      },
    ],
  },
  {
    id: "web",
    categoryId: "web",
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-400",
    title: "Web Development",
    marathiTitle: "वेबसाइट बनवा — HTML → CSS → JS",
    description:
      "HTML ने सुरुवात, CSS ने रूप, JavaScript ने जीव — आणि शेवटी तुमची स्वतःची website.",
    difficulty: "सोपे",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["html-structure"],
      },
      {
        title: "मध्यम",
        english: "Intermediate",
        steps: ["css-structure-cascade", "js-basics", "js-conditionals", "js-dom"],
      },
      {
        title: "प्रोजेक्ट",
        english: "Capstone Project",
        steps: [{ project: "personal-website" }],
      },
      {
        title: "पुढे",
        english: "Advanced",
        steps: [{ project: "login-page" }],
      },
    ],
  },
  {
    id: "computer",
    categoryId: "computer",
    icon: "💻",
    gradient: "from-slate-500 to-gray-400",
    title: "Computer Basics",
    marathiTitle: "संगणक मूलभूत — कुठून सुरू करू?",
    description:
      "संगणक कसा काम करतो हे सगळ्यात सोप्या पद्धतीने — hardware, software आणि इतिहास.",
    difficulty: "सोपे",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["computer-basics", "computer-io-devices"],
      },
      {
        title: "पुढे",
        english: "Advanced",
        steps: ["computer-software", "computer-history"],
      },
    ],
  },
  {
    id: "electronics",
    categoryId: "electronics",
    icon: "🔌",
    gradient: "from-amber-500 to-orange-400",
    title: "Electronics & Arduino",
    marathiTitle: "सर्किट → Arduino → IoT",
    description:
      "circuits, घटक, sensors आणि Arduino — घरबसल्या प्रयोग करा आणि खरं hardware वापरा.",
    difficulty: "मध्यम",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["electronics-circuits", "electronics-diode", "arduino-button"],
      },
      {
        title: "मध्यम",
        english: "Intermediate",
        steps: ["arduino-sensor", "arduino-dht11", "arduino-lcd"],
      },
      {
        title: "प्रोजेक्ट",
        english: "Capstone Project",
        steps: [
          { project: "led-project" },
          { project: "arduino-thermometer" },
          { project: "arduino-plant-waterer" },
        ],
      },
      {
        title: "पुढे",
        english: "Advanced",
        steps: ["iot-intro", "esp-telegram", "raspberrypi-intro"],
      },
    ],
  },
  {
    id: "ai",
    categoryId: "ai",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-400",
    title: "AI & Machine Learning",
    marathiTitle: "AI समजा — data पासून chatbot पर्यंत",
    description:
      "AI म्हणजे काय, data कसा चालतो, NLP, image recognition आणि शेवटी स्वतःचा chatbot.",
    difficulty: "मध्यम",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["ai-data"],
      },
      {
        title: "मध्यम",
        english: "Intermediate",
        steps: ["ai-nlp", "ai-image-recognition"],
      },
      {
        title: "प्रोजेक्ट",
        english: "Capstone Project",
        steps: ["ai-project-chatbot"],
      },
    ],
  },
  {
    id: "android",
    categoryId: "android",
    icon: "📱",
    gradient: "from-green-500 to-emerald-400",
    title: "Android App Development",
    marathiTitle: "मोफत अॅप बनवा — App Inventor ने",
    description:
      "Phone वरच अॅप बनवा — setup, calculator, share आणि सुरक्षित permissions. एकही पैसा नाही.",
    difficulty: "सोपे",
    phases: [
      {
        title: "सुरुवात",
        english: "Beginner",
        steps: ["android-basics"],
      },
      {
        title: "मध्यम",
        english: "Intermediate",
        steps: ["app-inventor-setup", "app-inventor-calculator"],
      },
      {
        title: "प्रोजेक्ट",
        english: "Capstone Project",
        steps: ["app-inventor-share"],
      },
      {
        title: "पुढे",
        english: "Advanced",
        steps: ["android-permissions"],
      },
    ],
  },
];

export function getPath(id: string): LearningPath | undefined {
  return learningPaths.find((p) => p.id === id);
}

export function getPathsByCategory(categoryId: string): LearningPath[] {
  return learningPaths.filter((p) => p.categoryId === categoryId);
}

export function flattenPathSteps(path: LearningPath): LearningPathStep[] {
  return path.phases.flatMap((phase) => phase.steps);
}

export function pathStepCount(path: LearningPath): number {
  return flattenPathSteps(path).length;
}

export type ResolvedPathStep =
  | { isProject: false; slug: string; href: string; title: string }
  | { isProject: true; id: string; href: string; title: string };

export function resolveStep(step: LearningPathStep): ResolvedPathStep | null {
  if (typeof step === "string") {
    const tutorial = tutorials.find((t) => t.slug === step);
    return tutorial
      ? {
          isProject: false,
          slug: tutorial.slug,
          href: `/tutorial/${tutorial.slug}`,
          title: tutorial.marathiTitle,
        }
      : null;
  }
  const project = projects.find((p) => p.id === step.project);
  return project
    ? {
        isProject: true,
        id: project.id,
        href: `/project/${project.id}`,
        title: project.title,
      }
    : null;
}