import type { Tutorial } from "@/data/tutorials";

export const digitalLessons: Tutorial[] = [
{
    slug: "digital-security",
    categoryId: "digital",
    title: "Digital Security Tips",
    marathiTitle: "डिजिटल जगात सुरक्षित रहा",
    level: "beginner",
    minutes: 15,
    summary: "इंटरनेट, social media आणि online transactions वर सुरक्षित राहण्याच्या टिप्स.",
    sections: [
      {
        title: "ऑनलाइन सुरक्षित राहणे",
        content: "आजच्या डिजिटल जगात ऑनलाइन सुरक्षा अतिशय महत्त्वाची असते.\n\nटिप्स:\n• सोशल मीडिया वर कमी माहिती शेअर करा\n• सार्वजनिक Wi-Fi वर sensitive काम करू नका\n• Payments फक्त विश्वासू sites वर करा\n• ओळखीच्या व्यक्तींकडूनही आलेली संशयास्पद लिंक क्लिक नका\n• Software अपडेट करा\n• Antivirus वापरा",
        code: `# ऑनलाइन सुरक्षा चेकलिस्ट:
[ ] Strong password
[ ] 2FA सुरू
[ ] Software अपडेट
[ ] Antivirus
[ ] Suspicious links पासून दूर
[ ] Social media privacy settings`,
        codeLanguage: "text",
      },
    ],
    quiz: [
      {
        question: "सार्वजनिक Wi-Fi वर काय करू नये?",
        options: [
          "वेब ब्राउझ",
          "बँकिंग/payment",
          "गाणे ऐकणे",
          "फोटो पाहणे",
        ],
        correct: 1,
      },
    ],
    related: ["cyber-basics", "digital-skills", "computer-basics"],
    next: "digital-skills",
  },
{
    slug: "digital-skills",
    categoryId: "digital",
    title: "Essential Digital Skills",
    marathiTitle: "आवश्यक डिजिटल कौशल्ये",
    level: "beginner",
    minutes: 12,
    summary: "आधुनिक जगात प्रत्येकाला लागणारी डिजिटल कौशल्ये.",
    sections: [
      {
        title: "डिजिटल कौशल्ये",
        content: "आधुनिक जगात डिजिटल कौशल्ये खूप महत्त्वाची आहेत.\n\nमूलभूत कौशल्ये:\n\n1. संगणक ऑपरेशन\n2. इंटरनेट research\n3. ईमेल वापरणे\n4. दस्तऐवज तयार करणे (Word/Google Docs)\n5. स्प्रेडशीट (Excel/Google Sheets)\n6. सुरक्षित ऑनलाइन व्यवहार\n7. व्हिडिओ कॉल\n8. IoT - घरातील स्मार्ट उपकरणे",
        code: `// डिजिटल कौशल्य उदाहरण: Excel/Google Sheets
// साधी गणना

  A        B         C
1  माल      किंमत     मात्रा
2  चहा     50        2
3  कॉफी    80        1

// एकूण किंमत:
= B2*C2 + B3*C3
// = 50*2 + 80*1
// = 180`,
        codeLanguage: "text",
      },
    ],
    quiz: [
      {
        question: "खालीलपैकी कोणते आवश्यक डिजिटल कौशल्य आहे?",
        options: [
          "दस्तऐवज तयार करणे",
          "फक्त गेम खेळणे",
          "फक्त WhatsApp",
          "काहीही नाही",
        ],
        correct: 0,
      },
    ],
    related: ["digital-security", "computer-basics", "freelancing-basics"],
    prev: "digital-security",
  }
];
