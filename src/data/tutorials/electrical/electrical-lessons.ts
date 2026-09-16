import type { Tutorial } from "@/data/tutorials";

export const electricalLessons: Tutorial[] = [
{
    slug: "electrical-basics",
    categoryId: "electrical",
    title: "Electrical Basics",
    marathiTitle: "इलेक्ट्रिकल मूलभूत माहिती",
    level: "beginner",
    minutes: 15,
    summary: "इलेक्ट्रिकल म्हणजे काय, सुरक्षा आणि मूलभूत संकल्पना.",
    sections: [
      {
        title: "इलेक्ट्रिकल म्हणजे काय?",
        content: "इलेक्ट्रिकल अभियांत्रिकी म्हणजे विजेचा (electricity) उत्पादन, संप्रेषण आणि वापर.\n\nAC (Alternating Current) - घरातील वीज\nDC (Direct Current) - बॅटरीतून\n\nमहत्त्वाचे:\n• घरातील वीज 220V AC आहे (भारतातील)\n• 12V किंवा 5V DC बॅटरी/चार्जरमध्ये\n\nसुरक्षा नियम:\n• ओल्या हातांनी स्विच स्पर्श करू नका\n• damaged wire ताबडतोब बदला\n• विद्युत उपकरणावर काम करताना वीज बंद करा",
      },
    ],
    quiz: [
      {
        question: "घरातील वीज कोणत्या प्रकारची असते?",
        options: ["DC", "AC", "खूप कमी voltage", "बॅटरी"],
        correct: 1,
      },
      {
        question: "भारतातील घरातील वीज किती voltage ची असते?",
        options: ["12V", "220V", "5V", "110V"],
        correct: 1,
      },
    ],
    related: ["electronics-basics", "electrical-safety", "diy-projects"],
    next: "electrical-safety",
  },
{
    slug: "electrical-safety",
    categoryId: "electrical",
    title: "Electrical Safety",
    marathiTitle: "विद्युत सुरक्षा - महत्त्वाचे नियम",
    level: "beginner",
    minutes: 10,
    summary: "वीजेसोबत काम करताना सुरक्षा नियमांचे महत्त्व.",
    sections: [
      {
        title: "सुरक्षा टिप्स",
        content: "वीज अतिशय उपयुक्त पण धोकादायक असू शकते. सुरक्षा नियम:\n\n• ओल्या हातांनी कधीही switch/wire ला स्पर्श करू नका\n• वीज बंद असो, तरच उपकरणावर काम करा (MCB off)\n• damaged/फाटलेल्या wires ताबडतोब बदला\n• पाणी आणि वीज दूर ठेवा\n• भारावलेल्या (overloaded) socket वापरू नका\n• EMI (earth leakage) less वापरा\n\nआपत्कालीन:\nजर कोणाला करंट लागला तर:\n1. वीज ताबडतोब बंद करा (MCB)\n2. त्या व्यक्तीला लाकडी काठी/चप्पलने दूर करा\n3. तात्काळ डॉक्टर/हॉस्पिटल",
      },
    ],
    quiz: [
      {
        question: "वीजेसोबत काम करताना सर्वात महत्त्वाचे नियम?",
        options: [
          "वीज बंद करा",
          "जास्त वेगाने काम करा",
          "रबर हातमोजे नको",
          "पाणी वापरा",
        ],
        correct: 0,
      },
      {
        question: "ओल्या हातांनी switch ला स्पर्श करू नये कारण?",
        options: [
          "स्विच खराब होईल",
          "करंट लागू शकतो",
          "प्रकाश कमी होईल",
          "काहीही होणार नाही",
        ],
        correct: 1,
      },
    ],
    related: ["electrical-basics", "electronics-basics"],
    prev: "electrical-basics",
  }
];
