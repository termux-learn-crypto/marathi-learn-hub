import type { Tutorial } from "@/data/tutorials";

export const diyLessons: Tutorial[] = [
{
    slug: "diy-projects",
    categoryId: "diy",
    title: "DIY Projects",
    marathiTitle: "घरगुती DIY प्रोजेक्ट्स",
    level: "beginner",
    minutes: 20,
    summary: "घरी बनवता येणारे मजेदार आणि शिकवणारे DIY प्रोजेक्ट्स.",
    sections: [
      {
        title: "का शिकावे? घरगुती DIY प्रोजेक्ट्स चे फायदे आणि महत्त्व",
        content: "\"घरगुती DIY प्रोजेक्ट्स\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "DIY म्हणजे काय?",
        content: "DIY (Do It Yourself) म्हणजे स्वतः काहीतरी बनवणे. हे खूप शिकवणारे असते आणि मजा येते.\n\nघरगुती DIY प्रोजेक्ट्स:\n\n1. LED Blinking Circuit\n2. बॅटरी tester\n3. टॉर्च\n4. इलेक्ट्रॉनिक हॅन्ड-धुण्याचा टाईमर\n5. संगीत सर्किट",
        code: `// प्रोजेक्ट: Portable LED Torch (टॉर्च)
// सोपा सर्किट:

components:
- LED
- Resistor 100Ω
- स्विच (switch)
- 9V battery
- wires

connections:
battery (+) → switch → resistor → LED (+) 
LED (-) → battery (-)

// हे सर्किट connection करून बघा!
// सुरक्षा: शॉर्ट सर्किट टाळा`,
        codeLanguage: "text",
      },
    ],

practiceQuestions: [
      "घरगुती DIY प्रोजेक्ट्स चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "घरगुती DIY प्रोजेक्ट्स वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "DIY म्हणजे काय?",
        options: [
          "Do It Yourself",
          "Do It Yours",
          "Digital Interactive Y",
          "Direct Internet Year",
        ],
        correct: 0,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["घरगुती DIY प्रोजेक्ट्स", "SEO, heading hierarchy, anchor text, alt, semantic structure, performance", "Debugging - चुका शोधणे", "scroll timeline — स्क्रोल गती"],
        correct: 0,
      },
      {
        question: "धड्याच्या सारांशावरून सर्वात योग्य विधान कोणते?",
        options: ["घरी बनवता येणारे मजेदार आणि शिकवणारे DIY प्रोजेक्ट्स.", "@dataclass — __init__, __repr__, == आपोआप — कमी कोड, स्वच्छ वस्तू.", "toast स्टॅक आणि animation.", "fluid टायपोग्राफी आणि मर्यादित आकार."],
        correct: 0,
      },
],
    related: ["arduino-basics", "electronics-basics", "diy-arduino"],
    next: "diy-arduino",
  },
{
    slug: "diy-arduino",
    categoryId: "diy",
    title: "DIY प्रोजेक्ट्स - Arduino",
    marathiTitle: "Arduino ने DIY प्रोजेक्ट्स",
    level: "intermediate",
    minutes: 14,
    summary: "Arduino वापरून 3 छान DIY प्रोजेक्ट्स.",
    sections: [
      {
        title: "Arduino ने DIY प्रोजेक्ट्स म्हणजे काय?",
        content: "Arduino वापरून 3 छान DIY प्रोजेक्ट्स.\nयेथे 3 छान DIY प्रोजेक्ट्स:\n\n1.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Arduino ने DIY प्रोजेक्ट्स चे फायदे आणि महत्त्व",
        content: "\"Arduino ने DIY प्रोजेक्ट्स\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Arduino DIY Projects",
        content: "येथे 3 छान DIY प्रोजेक्ट्स:\n\n1. Automatic Night Light - अंधारात आपोआप LED शिकणारा\n2. Distance Sensor - जवळ काही आल्यास buzzer वाजणारा\n3. Temperature Monitor - तापमान दाखवणारा",
        code: `// प्रोजेक्ट: Automatic Night Light
// LDR (light sensor) वापरून

int ldrPin = A0;
int ledPin = 13;
int threshold = 500;  // समायोजित करा

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int light = analogRead(ldrPin);
  if (light < threshold) {
    digitalWrite(ledPin, HIGH);  // अंधारात ON
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
        codeLanguage: "c",
      },
    ],

practiceQuestions: [
      "Arduino ने DIY प्रोजेक्ट्स चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Arduino ने DIY प्रोजेक्ट्स वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "LDR sensor काय मोजतो?",
        options: ["तापमान", "प्रकाश", "आवाज", "हालचाल"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Arduino ने DIY प्रोजेक्ट्स", "if-elif-else — अनेक पर्याय", "Capacitor सखोल — charge/discharge, units, RC timing, filtering", "Virtualenv - प्रकल्प वातावरण"],
        correct: 0,
      },
      {
        question: "धड्याच्या सारांशावरून सर्वात योग्य विधान कोणते?",
        options: ["Arduino वापरून 3 छान DIY प्रोजेक्ट्स.", "मोठ्या स्तंभात नसलेली masonry रचना आणि dense पूर्णकरण.", "fluid टायपोग्राफी आणि मर्यादित आकार.", "print() function वापरून screen वर मजकूर आणि numbers दाखवायला शिका."],
        correct: 0,
      },
],
    related: ["diy-projects", "arduino-basics", "arduino-led"],
    prev: "diy-projects",
  }
];
