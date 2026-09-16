import type { Tutorial } from "@/data/tutorials";

export const generalLessons: Tutorial[] = [
{
    slug: "general-knowledge",
    categoryId: "general",
    title: "General Knowledge",
    marathiTitle: "उपयुक्त सामान्य ज्ञान",
    level: "beginner",
    minutes: 12,
    summary: "रोजच्या जीवनात उपयुक्त सामान्य ज्ञान.",
    sections: [
      {
        title: "सामान्य ज्ञान",
        content: "विज्ञान: पाण्याचा उत्कलनांक 100°C, प्रकाशाचा वेग 3 × 10^8 m/s, सूर्य.\n\nभूगोल: माउंट एव्हरेस्ट (8,848m), भारताची राजधानी नवी दिल्ली.\n\nसंगणक: ENIAC (1946), binary system 0 आणि 1, इंटरनेट 1969.",
      },
    ],
    quiz: [
      {
        question: "प्रकाशाचा वेग किती?",
        options: [
          "3 × 10^8 m/s",
          "3 × 10^6 m/s",
          "3 × 10^10 m/s",
          "300 m/s",
        ],
        correct: 0,
      },
      {
        question: "पहिला electronic computer कोणता?",
        options: ["IBM", "ENIAC", "Apple", "Dell"],
        correct: 1,
      },
    ],
    related: ["computer-basics", "general-science", "computer-hardware"],
    next: "general-science",
  },
{
    slug: "general-science",
    categoryId: "general",
    title: "Science Facts",
    marathiTitle: "विज्ञानातील मजेशीर तथ्य",
    level: "beginner",
    minutes: 10,
    summary: "विज्ञानातील काही मजेशीर आणि खरे तथ्य.",
    sections: [
      {
        title: "विज्ञान तथ्ये",
        content: "काही मजेशीर विज्ञान तथ्य:\n\n• मध म्हणजे कधीही खराब होत नाही\n• ऑक्टोपसला तीन हृदये असतात\n• मानवी शरीरात 37 ट्रिलियन cells\n• सूर्याला पृथ्वीवर पोहोचण्यासाठी प्रकाश 8 मिनिटे 20 सेकंद लागतात\n• पृथ्वीवरील सर्वात मोठा जीव - विशाल वृक्ष\n• डॉल्फिनला झोपताना एक डोळा उघडा असतो",
      },
    ],
    quiz: [
      {
        question: "सूर्याचा प्रकाश पृथ्वीवर येण्यास किती वेळ लागतो?",
        options: [
          "8 मिनिटे 20 सेकंद",
          "5 मिनिटे",
          "1 तास",
          "ताबडतोब",
        ],
        correct: 0,
      },
    ],
    related: ["general-knowledge", "computer-basics", "digital-skills"],
    prev: "general-knowledge",
  }
];
