import { tutorials } from "@/data/tutorials";

export interface Category {
  id: string;
  name: string;
  marathiName: string;
  icon: string;
  color: string;
  description: string;
  topics: number;
  tags: string[];
}

export const categories: Category[] = [
  {
    id: "computer",
    name: "Computer",
    marathiName: "संगणक",
    icon: "💻",
    color: "bg-blue-500",
    description: "संगणकाची मूलभूत माहिती मराठीतून",
    topics: 12,
    tags: ["computer", "संगणक", "basics", "हार्डवेअर"],
  },
  {
    id: "web",
    name: "Web Development",
    marathiName: "वेब डेव्हलपमेंट",
    icon: "🌐",
    color: "bg-emerald-500",
    description: "HTML, CSS, JavaScript शिका मराठीतून",
    topics: 18,
    tags: ["web", "html", "css", "javascript", "वेब"],
  },
  {
    id: "python",
    name: "Python",
    marathiName: "पायथॉन",
    icon: "🐍",
    color: "bg-yellow-500",
    description: "पायथॉन प्रोग्रामिंग सोप्या मराठीत",
    topics: 15,
    tags: ["python", "पायथॉन", "programming", "code"],
  },
  {
    id: "android",
    name: "Android",
    marathiName: "अँड्रॉइड",
    icon: "📱",
    color: "bg-green-500",
    description: "अँड्रॉइड अॅप्स आणि टिप्स",
    topics: 8,
    tags: ["android", "अँड्रॉइड", "mobile", "app"],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    marathiName: "आर्टिफिशियल इंटेलिजन्स",
    icon: "🤖",
    color: "bg-purple-500",
    description: "AI च्या मूलभूत संकल्पना आणि उपयोग",
    topics: 10,
    tags: ["ai", "आर्टिफिशियल", "intelligence", "machine learning"],
  },
  {
    id: "electronics",
    name: "Electronics",
    marathiName: "इलेक्ट्रॉनिक्स",
    icon: "🔌",
    color: "bg-orange-500",
    description: "इलेक्ट्रॉनिक्स मूलभूत आणि Arduino",
    topics: 14,
    tags: ["electronics", "arduino", "इलेक्ट्रॉनिक्स", "circuit"],
  },
  {
    id: "electrical",
    name: "Electrical",
    marathiName: "इलेक्ट्रिकल",
    icon: "⚡",
    color: "bg-amber-500",
    description: "इलेक्ट्रिकल मूलभूत आणि सुरक्षा",
    topics: 6,
    tags: ["electrical", "इलेक्ट्रिकल", "wiring", "सर्किट"],
  },
  {
    id: "linux",
    name: "Linux",
    marathiName: "लिनक्स",
    icon: "🐧",
    color: "bg-slate-500",
    description: "लिनक्स कमांड्स आणि सिस्टम",
    topics: 12,
    tags: ["linux", "लिनक्स", "terminal", "command"],
  },
  {
    id: "termux",
    name: "Termux",
    marathiName: "टर्मक्स",
    icon: "📟",
    color: "bg-cyan-500",
    description: "Android वर Termux वापरून प्रोग्रामिंग",
    topics: 10,
    tags: ["termux", "टर्मक्स", "android", "tools"],
  },
  {
    id: "cyber",
    name: "Cyber Security",
    marathiName: "सायबर सुरक्षा",
    icon: "🔐",
    color: "bg-red-500",
    description: "सायबर सुरक्षेची मूलभूत माहिती",
    topics: 9,
    tags: ["cyber", "security", "सायबर", "hacking"],
  },
  {
    id: "diy",
    name: "DIY Projects",
    marathiName: "DIY प्रोजेक्ट्स",
    icon: "🛠️",
    color: "bg-stone-500",
    description: "घरगुती छोटे प्रोजेक्ट्स",
    topics: 11,
    tags: ["diy", "projects", "प्रोजेक्ट", "making"],
  },
  {
    id: "digital",
    name: "Digital Skills",
    marathiName: "डिजिटल स्किल्स",
    icon: "📊",
    color: "bg-indigo-500",
    description: "डिजिटल जगात आवश्यक कौशल्ये",
    topics: 10,
    tags: ["digital", "skills", "tips", "कौशल्य"],
  },
  {
    id: "freelancing",
    name: "Freelancing",
    marathiName: "फ्रीलान्सिंग",
    icon: "💼",
    color: "bg-teal-500",
    description: "फ्रीलान्सिंगमध्ये पैसे कमवायचे?",
    topics: 7,
    tags: ["freelance", "work", "पैसे", "income"],
  },
  {
    id: "general",
    name: "General Knowledge",
    marathiName: "सामान्य ज्ञान",
    icon: "🧠",
    color: "bg-pink-500",
    description: "उपयुक्त सामान्य ज्ञान",
    topics: 9,
    tags: ["general", "knowledge", "ज्ञान", "facts"],
  },
];

export function getCategory(id: string): Category | undefined {
  const cat = categories.find((c) => c.id === id);
  return cat ? { ...cat, topics: countFor(id) } : undefined;
}

export function getTopicCount(categoryId: string): number {
  return countFor(categoryId);
}

function countFor(categoryId: string): number {
  return tutorials.filter((t) => t.categoryId === categoryId).length;
}
