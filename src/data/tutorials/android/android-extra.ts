import type { Tutorial } from "@/data/tutorials";

export const androidExtra: Tutorial[] = [
{
    slug: "android-tips",
    categoryId: "android",
    title: "Android Tips & Tricks",
    marathiTitle: "Android उपयुक्त टिप्स",
    level: "beginner",
    minutes: 10,
    summary: "Android फोनवरून जास्तीत जास्त फायदा घेण्यासाठी टिप्स.",
    sections: [
      {
        title: "उपयुक्त टिप्स",
        content: "Android फोन व्यवस्थित ठेवण्यासाठी टिप्स:\n\n• Battery optimize: अंगभूत battery saver\n• Developer options उघडणे: Settings > About > Build number 7 वेळा टॅप\n• Storage clear करणे\n• Apps अद्ययावत ठेवणे\n• Security: Screen lock, Find My Device\n• Termux install करून Linux commands वापरणे",
      },
    ],
    quiz: [
      {
        question: "Android मध्ये developer options कसे उघडतात?",
        options: [
          "Build number 7 वेळा टॅप करून",
          "App install करून",
          "फोन रिस्टार्ट करून",
          "नाही उघडता येत",
        ],
        correct: 0,
      },
    ],
    related: ["android-basics", "termux-basics", "computer-basics"],
    prev: "android-permissions",
  }
];
