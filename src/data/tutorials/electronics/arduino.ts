import type { Tutorial } from "@/data/tutorials";

export const arduinoExtra: Tutorial[] = [
{
    slug: "electronics-basics",
    categoryId: "electronics",
    title: "Electronics Basics",
    marathiTitle: "इलेक्ट्रॉनिक्सची मूलभूत संकल्पना",
    level: "beginner",
    minutes: 15,
    summary: "Voltage, current, resistance - इलेक्ट्रॉनिक्सच्या मूलभूत संकल्पना.",
    sections: [
      {
        title: "मूलभूत संकल्पना",
        content: "Voltage (V) — विद्युत दाब, पाण्याच्या दाबासारखा.\nCurrent (I) — विद्युत प्रवाह, पाण्याच्या प्रवाहासारखा.\nResistance (R) — प्रवाहाला विरोध, अरुंद पाईपसारखा.\n\nOhm's Law: V = I × R\n\nघटक: Resistor (प्रवाह मर्यादित), Capacitor (ऊर्जा store), Diode (एका दिशेने), LED (प्रकाश), Transistor (switch/amplifier).",
        code: `# Ohm's Law
V = I × R

# जर V = 5V, R = 1000Ω:
I = 5 / 1000 = 0.005A = 5mA

# LED circuit:
V_source = 5V
V_led = 2V
R = (5 - 2) / 0.02 = 150Ω`,
        codeLanguage: "text",
      },
      {
        title: "सर्किट आणि प्रवाह",
        content: "प्रवाह नेहमी बंद मार्गाने (closed loop) वाहतो.\n\nOpen circuit — मार्ग तुटलेला. Closed circuit — प्रवाह चालतो. Short circuit — थेट (+)−(−) जोडणी, धोकादायक.\n\nपाण्याचे साधर्म्य: Voltage = दाब, Current = वाहणारे पाणी, Resistance = अरुंदाई.\n\nघरातील सर्किट बहुतेक समांतर असतात. प्रयोगांमध्ये फक्त लो-व्होल्टेज (3-9V) वापरा.",
      },
      {
        title: "Ohm's Law — व्यवहार",
        content: "तीन स्वरूप: V = I × R, I = V / R, R = V / I.\n\n१. बॅटरी 5V, resistor 1000Ω → I = 5mA.\n२. LED ला 2V व 20mA, स्रोत 5V → R = 150Ω.\n\nनियम: मोठा R → कमी प्रवाह. दोन resistor शृंखलेत → R बेरीज.\nLED सोबत नेहमी 220Ω resistor.",
      },
      {
        title: "घटकांची ओळख",
        content: "Resistor — रंगीत पट्ट्या.\nCapacitor — गोल/सपाट, अंक लिहिलेले.\nLED — लांब पाय anode (+).\nTransistor — तीन पाय, अक्षर कोड.\n\nसर्वात सोपा प्रयोग: LED + resistor + बॅटरी.",
      },
      {
        title: "साधने — ब्रेडबोर्ड व multimeter",
        content: "ब्रेडबोर्ड: rows मध्ये 5 जोडलेली छिद्रे; बाहेरच्या रेल — +V व GND.\nMultimeter: voltage mode, resistance mode, continuity, current mode.\n\nसुरक्षा: फक्त लो-व्होल्टेज. बॅटरीचे ध्रुव उलट न लावा. तारा (+)/(−) थेट जोडू नका.",
      },
      {
        title: "DIY — बॅटरी + LED दिवा",
        content: "पार्ट्स: 1 LED + 1 resistor 100-220Ω + 2 AA बॅटरी + holder + 2 तारा.\nजोडणी: बॅटरी (+) → resistor → LED anode (+); LED cathode (−) → बॅटरी (−).\n\nचाचणी: LED जळत नसल्यास anode/cathode उलट बघा.\nविस्तार: दोन LEDs समांतर, switch जोडा, कागदाच्या कपाने लँपशेड.",
      },
      {
        title: "आजचा सारांश",
        content: "प्रवाह बंद मार्गाने वाहतो; short circuit धोकादायक.\nV = I × R — तीन स्वरूप.\nघटक — resistor, capacitor, diode, LED, transistor.\nसाधने — ब्रेडबोर्ड व multimeter.\nसुरक्षा — लो-व्होल्टेज, ध्रुव व्यवस्थित.\nDIY — LED दिवा.\n\nपुढील पाठ — Circuits: series/parallel चे नियम.",
      },
    ],
    quiz: [
      {
        question: "ओहमचा नियम काय आहे?",
        options: [
          "V = I × R",
          "I = V × R",
          "R = V × I",
          "V = I / R",
        ],
        correct: 0,
      },
      {
        question: "प्रवाह मर्यादित करणारा घटक कोणता?",
        options: ["Capacitor", "Diode", "Resistor", "LED"],
        correct: 2,
      },
    ],
    related: ["electronics-circuits", "electrical-basics", "arduino-basics"],
    next: "electronics-circuits",
  },
{
    slug: "arduino-basics",
    categoryId: "electronics",
    title: "Arduino Basics",
    marathiTitle: "Arduino - इलेक्ट्रॉनिक्सची सुरुवात",
    level: "beginner",
    minutes: 20,
    summary: "Arduino म्हणजे काय, त्याचे भाग आणि पहिला program.",
    sections: [
      {
        title: "Arduino म्हणजे काय?",
        content: "Arduino हे microcontroller board आहे जे इलेक्ट्रॉनिक्स प्रोजेक्ट्स बनवण्यासाठी वापरले जाते. input/output pins वर LED, sensor, motor जोडता येतात. Arduino IDE वापरून USB ने upload करतो. भाषा C/C++ सारखी.",
        code: `// LED blink — pin 13 built-in LED
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`,
        codeLanguage: "c",
      },
      {
        title: "बोर्डचे भाग",
        content: "USB port — program upload व power. Power jack — 7-12V adapter.\nDigital pins 0-13 — IN/OUT; 13 वर built-in LED.\nAnalog pins A0-A5 — sensor वाचन. GND — सामायिक मुळा.\n5V / 3.3V pins — बाह्य घटकांना वीज.\nReset button — program पुन्हा सुरू.\n\nGND शिवाय परिपूर्ण सर्किट नाही.",
      },
      {
        title: "IDE आणि पहिला sketch",
        content: "Arduino IDE मध्ये: Code editor (setup() + loop()), Upload button, Serial monitor, Board/port selector.\n\nvoid setup() { } — सुरुवातीला एकदाच. void loop() { } — पुन्हा पुन्हा.\n\nFile → Examples → 01.Basics → Blink. Tools → Board → Arduino Uno. Upload दाबा. Built-in LED blink होईल.",
      },
      {
        title: "digitalWrite — LED control",
        content: "pinMode(pin, OUTPUT); — pin ची दिशा.\ndigitalWrite(pin, HIGH); — 5V (ON). digitalWrite(pin, LOW); — 0V (OFF).\ndelay(1000) = 1 सेकंद.\n\nप्रयोग: delay 200 करा — वेगवान flicker. दोन LEDs दोन pins वर.",
      },
      {
        title: "digitalRead — बटण वाचणे",
        content: "pull-down: pin 2 ← बटण; दुसऱ्या टोकाला 5V; 10kΩ पिन 2 ते GND.\n\nकोड: pinMode(btn, INPUT); int v = digitalRead(btn); Serial.println(v).\nदाबल्यावर HIGH → LED ON. Serial monitor मध्ये 0/1.\n\nINPUT_PULLUP: pin आतून 5V; बटण GND → दाबल्यावर LOW.",
      },
      {
        title: "सुरक्षा व चुका",
        content: "प्रत्येक pin फक्त ~20-40mA — LED सोबत resistor. 5V आणि GND थेट जोडू नका.\n\nचुका: LED उलट (लांब पाय +), resistor नाही → LED जळतो, GND नाही → सर्किट बंद.\n\nडीबग: Serial.println() ने मूल्य छापा. एकावेळी एक बदल.",
      },
    ],
    quiz: [
      {
        question: "Arduino program (sketch) कोणत्या भाषेसारखा असतो?",
        options: ["Python", "C/C++", "JavaScript", "Java"],
        correct: 1,
      },
      {
        question: "Arduino मध्ये LED ऑन करण्यासाठी कोणती function?",
        options: ["ledOn()", "digitalWrite(pin, HIGH)", "light()", "on(pin)"],
        correct: 1,
      },
    ],
    related: ["arduino-led", "electronics-transistor", "electronics-basics"],
    next: "arduino-led",
    prev: "electronics-power-supply",
  },
{
    slug: "arduino-led",
    categoryId: "electronics",
    project: "led-project",
    title: "Arduino LED Projects",
    marathiTitle: "LED control करा Arduino ने",
    level: "intermediate",
    minutes: 18,
    summary: "LED on/off, blink आणि sequence - Arduino LED प्रोजेक्ट्स.",
    sections: [
      {
        title: "LED Control",
        content: "LED हा विद्युत ऊर्जा प्रकाशात बदलतो.\nAnode (+) → resistor (220Ω) → Arduino pin; Cathode (-) → GND.\nResistor नाहीतर LED जळू शकते.",
        code: `// अनेक LEDs sequence
int leds[] = {2, 3, 4, 5};

void setup() {
  for (int i = 0; i < 4; i++)
    pinMode(leds[i], OUTPUT);
}

void loop() {
  for (int i = 0; i < 4; i++) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
  for (int i = 3; i >= 0; i--) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
}`,
        codeLanguage: "c",
      },
      {
        title: "Built-in LED — पहिले blink",
        content: "pin 13 वर built-in LED. HIGH → ON, LOW → OFF. delay(500) = अर्धा सेकंद.\n\nबदल: delay 1000 → मंद, delay 100 → वेगवान.\nसराव: SOS पॅटर्न (3 लहान, 3 मोठे, 3 लहान).",
      },
      {
        title: "PWM — तेज नियंत्रण",
        content: "analogWrite(pin, value) — value 0 ते 255. 51 ≈ 20%, 128 ≈ 50%, 255 = 100%.\nफक्त PWM pins (3,5,6,9,10,11) वर चालते.\n\nहळूहळू उजळणे: for loop 0→255, delay(10).",
      },
      {
        title: "बटण + LED — इनपुट combo",
        content: "INPUT_PULLUP: pinMode(btn, INPUT_PULLUP). बटण GND ला → LOW → LED ON.\nकोड उलटा: LOW म्हणजे दाबलेले.\n\nबटण bounce झाल्यास delay(20) debounce जोडा.",
      },
      {
        title: "Fade — सुरुवात-शेवट",
        content: "analogWrite ने fade: value 0→255→0, step=5, delay(20).\nstep मोठा → जलद; लहान → मंद.\n\nहेच sunset lamp, candle LED चा आधार.",
      },
      {
        title: "सामान्य चुका व तपासण्या",
        content: "Wiring: Anode → resistor → pin; Cathode → GND.\nPWM pins वापरा; pin number आणि code जुळवा.\nSerial.println(v) ठेवा — मूल्य दिसतील.\n\nबहुतेक चुका wiring/ध्रुवांत असतात.",
      },
    ],
    quiz: [
      {
        question: "LED सोबत resistor का वापरतात?",
        options: ["चमक वाढविण्यासाठी", "LED जळू नये म्हणून", "रंग बदलण्यासाठी", "गरज नाही"],
        correct: 1,
      },
      {
        question: "LED च्या anode ला कोणती बाजू जोडतात?",
        options: ["GND", "वीज/pin", "दोन्ही", "resistor नाही"],
        correct: 1,
      },
    ],
    related: ["arduino-basics", "arduino-sensor", "diy-projects"],
    prev: "arduino-basics",
    next: "arduino-sensor",
  }
];
