import { tutorials } from "@/data/tutorials";

export interface Category {
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

export const categories: Category[] = [
  {
    id: "computer",
    name: "Computer",
    marathiName: "संगणक",
    icon: "💻",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-cyan-400",
    chip: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description: "संगणकाची मूलभूत माहिती मराठीतून",
    tags: ["computer", "संगणक", "basics", "हार्डवेअर"],
  },
  {
    id: "web",
    name: "Web Development",
    marathiName: "वेब डेव्हलपमेंट",
    icon: "🌐",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-400",
    chip: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    description: "HTML, CSS, JavaScript शिका मराठीतून",
    tags: ["web", "html", "css", "javascript", "वेब"],
  },
  {
    id: "python",
    name: "Python",
    marathiName: "पायथॉन",
    icon: "🐍",
    color: "bg-yellow-500",
    gradient: "from-yellow-500 to-amber-400",
    chip: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    description: "पायथॉन प्रोग्रामिंग सोप्या मराठीत",
    tags: ["python", "पायथॉन", "programming", "code"],
  },
  {
    id: "android",
    name: "Android",
    marathiName: "अँड्रॉइड",
    icon: "📱",
    color: "bg-green-500",
    gradient: "from-green-500 to-lime-400",
    chip: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    description: "अँड्रॉइड अॅप्स आणि टिप्स",
    tags: ["android", "अँड्रॉइड", "mobile", "app"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    marathiName: "आर्टिफिशियल इंटेलिजन्स",
    icon: "🤖",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-fuchsia-400",
    chip: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    description: "AI च्या मूलभूत संकल्पना आणि उपयोग",
    tags: ["ai", "आर्टिफिशियल", "intelligence", "machine learning"],
  },
  {
    id: "electronics",
    name: "Electronics",
    marathiName: "इलेक्ट्रॉनिक्स",
    icon: "🔌",
    color: "bg-orange-500",
    gradient: "from-orange-500 to-amber-400",
    chip: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    description: "इलेक्ट्रॉनिक्स मूलभूत आणि Arduino",
    tags: ["electronics", "arduino", "इलेक्ट्रॉनिक्स", "circuit"],
  },
  {
    id: "electrical",
    name: "Electrical",
    marathiName: "इलेक्ट्रिकल",
    icon: "⚡",
    color: "bg-amber-500",
    gradient: "from-amber-500 to-yellow-400",
    chip: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    description: "इलेक्ट्रिकल मूलभूत आणि सुरक्षा",
    tags: ["electrical", "इलेक्ट्रिकल", "wiring", "सर्किट"],
  },
  {
    id: "linux",
    name: "Linux",
    marathiName: "लिनक्स",
    icon: "🐧",
    color: "bg-slate-500",
    gradient: "from-slate-500 to-slate-400",
    chip: "bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-300",
    description: "लिनक्स कमांड्स आणि सिस्टम",
    tags: ["linux", "लिनक्स", "terminal", "command"],
  },
  {
    id: "termux",
    name: "Termux",
    marathiName: "टर्मक्स",
    icon: "📟",
    color: "bg-cyan-500",
    gradient: "from-cyan-500 to-sky-400",
    chip: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
    description: "Android वर Termux वापरून प्रोग्रामिंग",
    tags: ["termux", "टर्मक्स", "android", "tools"],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    marathiName: "सायबर सुरक्षा",
    icon: "🔐",
    color: "bg-red-500",
    gradient: "from-red-500 to-rose-400",
    chip: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
    description: "सायबर सुरक्षेची मूलभूत माहिती",
    tags: ["cyber", "security", "सायबर", "hacking"],
  },
  {
    id: "diy",
    name: "DIY Projects",
    marathiName: "DIY प्रोजेक्ट्स",
    icon: "🛠️",
    color: "bg-stone-500",
    gradient: "from-stone-500 to-stone-400",
    chip: "bg-stone-100 text-stone-700 dark:bg-stone-800/60 dark:text-stone-300",
    description: "घरगुती छोटे प्रोजेक्ट्स",
    tags: ["diy", "projects", "प्रोजेक्ट", "making"],
  },
  {
    id: "digital",
    name: "Digital Skills",
    marathiName: "डिजिटल स्किल्स",
    icon: "📊",
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-violet-400",
    chip: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    description: "डिजिटल जगात आवश्यक कौशल्ये",
    tags: ["digital", "skills", "tips", "कौशल्य"],
  },
  {
    id: "freelancing",
    name: "Freelancing",
    marathiName: "फ्रीलान्सिंग",
    icon: "💼",
    color: "bg-teal-500",
    gradient: "from-teal-500 to-emerald-400",
    chip: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    description: "फ्रीलान्सिंगमध्ये पैसे कमवायचे?",
    tags: ["freelance", "work", "पैसे", "income"],
  },
  {
    id: "general",
    name: "General Knowledge",
    marathiName: "सामान्य ज्ञान",
    icon: "🧠",
    color: "bg-pink-500",
    gradient: "from-pink-500 to-rose-400",
    chip: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
    description: "उपयुक्त सामान्य ज्ञान",
    tags: ["general", "knowledge", "ज्ञान", "facts"],
  },
];

export function getCategory(id: string): Category | undefined {
  const cat = categories.find((c) => c.id === id);
  return cat;
}

export function getTopicCount(categoryId: string): number {
  return countFor(categoryId);
}

function countFor(categoryId: string): number {
  return tutorials.filter((t) => t.categoryId === categoryId).length;
}
