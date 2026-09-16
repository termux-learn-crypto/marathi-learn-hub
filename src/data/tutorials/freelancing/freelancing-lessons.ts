import type { Tutorial } from "@/data/tutorials";

export const freelancingLessons: Tutorial[] = [
{
    slug: "freelancing-basics",
    categoryId: "freelancing",
    title: "Freelancing Basics",
    marathiTitle: "फ्रीलान्सिंग म्हणजे काय?",
    level: "beginner",
    minutes: 20,
    summary: "फ्रीलान्सिंगमध्ये कसे सुरुवात करायची आणि पैसे कसे मिळवायचे.",
    sections: [
      {
        title: "फ्रीलान्सिंग म्हणजे काय?",
        content: "फ्रीलान्सिंग म्हणजे नोकरीत न राहता स्वतंत्रपणे काम करून पैसे मिळवणे. तुम्ही तुमच्या स्किल्स विकता.\n\nलोकप्रिय क्षेत्रे:\n• Web development\n• ग्राफिक डिझाइन\n• लेखन / translation\n• डिजिटल मार्केटिंग\n• व्हिडिओ एडिटिंग\n\nप्लॅटफॉर्म्स:\n• Fiverr\n• Upwork\n• Freelancer.com\n• इंडियन: WorkIndia, Truelancer",
        code: `# फ्रीलान्सिंग सुरुवात चेकलिस्ट:
1. एक कौशल्य शिका (उदा. web dev)
2. Portfolio (कामाचे उदाहरण) तयार करा
3. Platforms वर account बनवा
4. लहान कामांपासून सुरु करा
5. ग्राहकांशी चांगले संबंध ठेवा
6. हळूहळू rates वाढवा

# सुरुवातीच्या टिप्स:
- कमी price वर सुरु करा (reviews साठी)
- वेळेवर काम पूर्ण करा
- communication चांगली ठेवा`,
        codeLanguage: "text",
      },
    ],
    quiz: [
      {
        question: "फ्रीलान्सिंग म्हणजे काय?",
        options: [
          "नोकरी करणे",
          "स्वतंत्रपणे काम करून पैसे मिळवणे",
          "व्यापार करणे",
          "शेती करणे",
        ],
        correct: 1,
      },
      {
        question: "खालीलपैकी कोणते फ्रीलान्सिंग प्लॅटफॉर्म आहे?",
        options: ["Fiverr", "Instagram", "Google", "YouTube"],
        correct: 0,
      },
    ],
    related: ["digital-skills", "python-web-flask", "computer-basics"],
    next: "freelancing-skills",
  },
{
    slug: "freelancing-skills",
    categoryId: "freelancing",
    title: "Freelancing Skills",
    marathiTitle: "फ्रीलान्सिंगमध्ये कोणती कौशल्ये शिकावीत?",
    level: "intermediate",
    minutes: 15,
    summary: "फ्रीलान्सिंगमध्ये मागणी असलेली कौशल्ये आणि शिकण्याचा मार्ग.",
    sections: [
      {
        title: "मागणी असलेली कौशल्ये",
        content: "फ्रीलान्सिंग मार्केटमध्ये जास्त मागणी असलेली कौशल्ये:\n\n1. Web Development (HTML/CSS/JS/React)\n2. Python Programming\n3. ग्राफिक डिझाइन (Photoshop/Figma)\n4. डिजिटल मार्केटिंग (SEO, Ads)\n5. Content Writing\n6. Video Editing\n7. Social Media Management\n\nआपण Marathi Learn Hub वर सुरुवातीचे knowledge मोफत मिळवू शकता.\n\nकौशल्य शिकण्यासाठी खूप संयम आणि practice लागते.",
      },
    ],
    quiz: [
      {
        question: "खालीलपैकी कोणते मागणी असलेले फ्रीलान्सिंग कौशल्य आहे?",
        options: [
          "वेब डेव्हलपमेंट",
          "फक्त टाइपिंग",
          "फेसबुक सर्फिंग",
          "कोणतेही नाही",
        ],
        correct: 0,
      },
    ],
    related: ["freelancing-basics", "python-web-flask", "digital-skills"],
    prev: "freelancing-basics",
  }
];
