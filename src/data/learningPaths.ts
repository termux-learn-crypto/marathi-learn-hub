export type LearningPathStep = string | { project: string };

export interface LearningPath {
  id: string;
  icon: string;
  gradient: string;
  title: string;
  marathiTitle: string;
  description: string;
  steps: LearningPathStep[];
}

export const learningPaths: LearningPath[] = [
  {
    id: "python",
    icon: "🐍",
    gradient: "from-emerald-500 to-teal-400",
    title: "Python Programming",
    marathiTitle: "Python शिका — शून्यापासून",
    description:
      "Variables, conditions, loops, functions आणि classes — सोप्या मराठीत. शेवटी एक मोठा project.",
    steps: [
      "python-basics",
      "python-if",
      "python-loops-project",
      "python-functions",
      "python-classes",
      "python-mega-project",
    ],
  },
  {
    id: "web",
    icon: "🌐",
    gradient: "from-blue-500 to-cyan-400",
    title: "Web Development",
    marathiTitle: "वेबसाइट बनवा — HTML → CSS → JS",
    description:
      "HTML ने सुरुवात, CSS ने रूप, JavaScript ने जीव — आणि शेवटी तुमची स्वतःची website.",
    steps: [
      "html-structure",
      "css-structure-cascade",
      "js-basics",
      "js-conditionals",
      "js-dom",
      { project: "personal-website" },
    ],
  },
  {
    id: "computer",
    icon: "💻",
    gradient: "from-slate-500 to-gray-400",
    title: "Computer Basics",
    marathiTitle: "संगणक मूलभूत — कुठून सुरू करू?",
    description:
      "संगणक कसा काम करतो हे सगळ्यात सोप्या पद्धतीने — hardware, software आणि इतिहास.",
    steps: [
      "computer-basics",
      "computer-io-devices",
      "computer-software",
      "computer-history",
    ],
  },
  {
    id: "electronics",
    icon: "🔌",
    gradient: "from-amber-500 to-orange-400",
    title: "Electronics & Arduino",
    marathiTitle: "सर्किट → Arduino → IoT",
    description:
      "circuits, घटक, sensors आणि Arduino — घरबसल्या प्रयोग करा आणि खरं hardware वापरा.",
    steps: [
      "electronics-circuits",
      "electronics-diode",
      "arduino-sensor",
      "arduino-project",
      "iot-intro",
    ],
  },
  {
    id: "ai",
    icon: "🤖",
    gradient: "from-violet-500 to-purple-400",
    title: "AI & Machine Learning",
    marathiTitle: "AI समजा — data पासून chatbot पर्यंत",
    description:
      "AI म्हणजे काय, data कसा चालतो, NLP, image recognition आणि शेवटी स्वतःचा chatbot.",
    steps: [
      "ai-data",
      "ai-nlp",
      "ai-image-recognition",
      "ai-project-chatbot",
    ],
  },
  {
    id: "android",
    icon: "📱",
    gradient: "from-green-500 to-emerald-400",
    title: "Android App Development",
    marathiTitle: "मोफत अॅप बनवा — App Inventor ने",
    description:
      "Phone वरच अॅप बनवा — setup, calculator, share आणि सुरक्षित permissions. एकही पैसा नाही.",
    steps: [
      "android-basics",
      "app-inventor-setup",
      "app-inventor-calculator",
      "app-inventor-share",
      "android-permissions",
    ],
  },
];