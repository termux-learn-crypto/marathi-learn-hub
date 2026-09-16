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
    quiz: [
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
    quiz: [
      {
        question: "LDR sensor काय मोजतो?",
        options: ["तापमान", "प्रकाश", "आवाज", "हालचाल"],
        correct: 1,
      },
    ],
    related: ["diy-projects", "arduino-basics", "arduino-led"],
    prev: "diy-projects",
  }
];
