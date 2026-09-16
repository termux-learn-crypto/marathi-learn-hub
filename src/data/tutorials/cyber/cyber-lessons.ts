import type { Tutorial } from "@/data/tutorials";

export const cyberLessons: Tutorial[] = [
{
    slug: "cyber-basics",
    categoryId: "cyber",
    title: "Cyber Security Basics",
    marathiTitle: "सायबर सुरक्षा - मूलभूत माहिती",
    level: "beginner",
    minutes: 20,
    summary: "सायबर जगात सुरक्षित राहण्यासाठी मूलभूत गोष्टी.",
    sections: [
      {
        title: "सायबर सुरक्षा म्हणजे काय?",
        content: "सायबर सुरक्षा म्हणजे डिजिटल माहिती सुरक्षित ठेवणे.\n\nधोके: Phishing — बनावट message/link; Malware — वाईट software; Password चोरी; Fake websites.\n\nसुरक्षित राहण्यासाठी: Strong password (लांब + unusual); 2FA; संशयास्पद link क्लिक करू नका; software अपडेट; अज्ञात attachments उघडू नका.",
        code: `# Strong Password टिप्स:
- किमान 12 characters
- uppercase + lowercase
- numbers + symbols
- शब्द/नावे नको
- प्रत्येक account ला वेगळा

# उदा.
कमकुवत: vilas123
मजबूत: V1las@2024!xZ9

# 2FA वापरा:
- SMS/App-based OTP
- Google Authenticator`,
        codeLanguage: "text",
      },
    ],
    quiz: [
      {
        question: "Phishing म्हणजे काय?",
        options: [
          "मासे पकडणे",
          "बनावट message द्वारे माहिती चोरणे",
          "मझेदार खेळ",
          "नवीन website",
        ],
        correct: 1,
      },
      {
        question: "Strong password मध्ये काय असावे?",
        options: [
          "फक्त नाव",
          "लहान आणि सोपा",
          "लांब + symbols + numbers",
          "फक्त numbers",
        ],
        correct: 2,
      },
    ],
    related: ["cyber-password", "computer-basics", "digital-security"],
    next: "cyber-password",
  },
{
    slug: "cyber-password",
    categoryId: "cyber",
    title: "Password Security",
    marathiTitle: "पासवर्ड सुरक्षा",
    level: "intermediate",
    minutes: 15,
    summary: "मजबूत पासवर्ड कसा बनवायचा आणि तो सुरक्षित कसा ठेवायचा.",
    sections: [
      {
        title: "पासवर्ड सुरक्षा टिप्स",
        content: "पासवर्ड हा तुमच्या डिजिटल जीवनाचा दरवाजा आहे.\n\nसुरक्षित पासवर्ड बनवण्यासाठी:\n• लांब असा (14+ characters)\n• शब्दांच्या जागी passphrase वापरा (उदा. 'सोलरभवनपोहे'\n• numbers आणि symbols मिसळा\n\nPassword manager वापरा:\n• आपोआप strong passwords तयार करतो\n• सर्व passwords एका ठिकाणी security सह\n• autofill करतो\n\n2FA (2-फॅक्टर ऑथेंटिकेशन) चालू करा",
      },
    ],
    quiz: [
      {
        question: "Password मध्ये काय असणे आवश्यक?",
        options: [
          "किमान 12 characters",
          "फक्त 4 characters",
          "केवळ नाव",
          "केवळ numbers",
        ],
        correct: 0,
      },
      {
        question: "Password कुठे सुरक्षित ठेवता येतो?",
        options: [
          "क्षुत-paper वर",
          "Password manager मध्ये",
          "मेल मध्ये",
          "चिठीवर",
        ],
        correct: 1,
      },
    ],
    related: ["cyber-basics", "digital-security", "computer-basics"],
    prev: "cyber-basics",
  }
];
