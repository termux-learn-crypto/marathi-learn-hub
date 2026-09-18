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
        title: "Android उपयुक्त टिप्स म्हणजे काय?",
        content: "Android फोनवरून जास्तीत जास्त फायदा घेण्यासाठी टिप्स.\nAndroid फोन व्यवस्थित ठेवण्यासाठी टिप्स:\n\n• Battery optimize: अंगभूत battery saver\n• Developer options उघडणे: Settings > About > Build number 7 वेळा टॅप\n• Storage clear करणे\n• Apps अद्ययावत ठेवणे\n• Security: Screen lock, Find My Device\n• Termux install करून Linux commands वापरणे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Android उपयुक्त टिप्स चे फायदे आणि महत्त्व",
        content: "\"Android उपयुक्त टिप्स\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "उपयुक्त टिप्स",
        content: "Android फोन व्यवस्थित ठेवण्यासाठी टिप्स:\n\n• Battery optimize: अंगभूत battery saver\n• Developer options उघडणे: Settings > About > Build number 7 वेळा टॅप\n• Storage clear करणे\n• Apps अद्ययावत ठेवणे\n• Security: Screen lock, Find My Device\n• Termux install करून Linux commands वापरणे",
      },
    ],

practiceQuestions: [
      "Android उपयुक्त टिप्स चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Android उपयुक्त टिप्स वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Android उपयुक्त टिप्स", "Strings मधून Loop", "form — प्रश्न व्यवस्था", "tabs — भाग निवड"],
        correct: 0,
      },
      {
        question: "धड्याच्या सारांशावरून सर्वात योग्य विधान कोणते?",
        options: ["Android फोनवरून जास्तीत जास्त फायदा घेण्यासाठी टिप्स.", "match statement ने switch सारखे नियंत्रण; patterns, guards, OR.", "unset inherit revert initial नियम.", "Array निर्माण, index, length, push/pop, loops सह फिरणे, methods."],
        correct: 0,
      },
],
    related: ["android-basics", "termux-basics", "computer-basics"],
    prev: "android-permissions",
  }
];
