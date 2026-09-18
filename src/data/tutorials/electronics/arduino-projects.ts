import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · ARDUINO PROJECTS (practical builds) ===
// arduino-motor → arduino-thermometer → arduino-plant-waterer → arduino-obstacle-robot
// → arduino-smart-light → iot-intro (electronics-level5.ts)

export const arduinoProjects: Tutorial[] = [
  {
    slug: "arduino-thermometer",
    categoryId: "electronics",
    title: "Digital Thermometer Project",
    marathiTitle: "DHT11 + LCD — digital thermometer, auto display",
    level: "intermediate",
    minutes: 35,
    summary: "DHT11 आणि LCD 16x2 एकत्र करून real-time digital thermometer बनवा — wiring, library, code आणि कॅलिब्रेशन टिप्स.",
    sections: [
      {
        title: "DHT11 + LCD — digital thermometer, auto display म्हणजे काय?",
        content: "हा पहिला एकत्रित प्रोजेक्ट आहे — DHT11 ने तापमान/आर्द्रता वाचा आणि LCD 16x2 वर दर 2 सेकंदांनी दाखवा.\nआधीच्या lessons चे (DHT11, LCD) संयोजन करून पूर्ण working device बनते.\nघरातील तापमान दाखवणारा छोटा weather box — आता तो बनवूया.",
      },
      {
        title: "का शिकावे? DHT11 + LCD — digital thermometer, auto display चे फायदे आणि महत्त्व",
        content: "दोन sensors+display एकत्र जोडण्याची सवय म्हणजे IoT/automation चा पाया — आता तुम्ही sensor + display + code एकत्र करून device बनवत आहात.\nअशीच पद्धती वापरून greenhouse monitor, fish-tank thermometer, CPU heat monitor सगळे बनवता येतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Wiring दोन module मध्ये गोंदणे — LCD 6 pins + DHT 1 pin वेगवेगळ्या digital pins वर घ्या.\n✗ DHT delay <2s — readings धडधडतील; delay(2000) ठेवा.\n✗ LCD contrast न ठीक — दिसणार नाही; pot समजून घ्या.\n✗ Sensor हाताने धरणे — तापमान बदलते; स्थिर ठिकाणी लावा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "System wiring",
        content: "DHT11: DATA→pin 2, VCC→5V, GND→GND. LCD: RS→12, E→11, D4→5, D5→4, D6→3, D7→2 (सावधान — 2 हा DHT चा पण; वेगळे pin निवडा: DHT→2, LCD D7→जसे 6). उदाहरण: DHT→2, LCD RS→12,E→11,D4→5,D5→4,D6→3,D7→6.",
        code: `// DHT11   → DATA pin 2
// LCD RS →12, E →11
// LCD D4 →5, D5 →4, D6 →3, D7 →6`,
        codeLanguage: "cpp",
        output: `// दोन्ही संवेदक एकाच Arduino वर
// 6 + 1 digital pins + power`,
      },
      {
        title: "Thermometer code",
        content: "दोन libraries: DHT.h आणि LiquidCrystal.h. loop मध्ये readings वाचा, lcd.setCursor ने सुबकता ठेवा. T/H दोन्ही rows मध्ये दाखवा. load months पुढे एकच digit ठीक — print(int)/print(float,1).",
        code: `#include <DHT.h>
#include <LiquidCrystal.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal lcd(12, 11, 5, 4, 3, 6);
void setup() {
  dht.begin();
  lcd.begin(16, 2);
}
void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  lcd.setCursor(0, 0);
  lcd.print("Temp: "); lcd.print(t, 1); lcd.print(" C");
  lcd.setCursor(0, 1);
  lcd.print("Hum:  "); lcd.print(h, 0); lcd.print(" %");
  delay(2000);
}`,
        codeLanguage: "cpp",
        output: `Temp: 27.0 C
Hum:  65 %

// दर 2 सेकंदांनी refresh`,
      },
      {
        title: "सारांश — thermometer",
        content: "DHT11 + LCD = digital thermometer. Libraries दोन्ही install करा. Wiring सावध. 2s interval. घरगुती वापरासाठी box मध्ये बंद करा (sensor बाहेर). विस्तार: max/min store, buzzer alarm जेव्हा तापमान खूप जास्त, LDR ते night dim.",
      },
    ],
    practiceQuestions: [
      "दोन libraries एका sketch मध्ये कसे वापरता?",
      "LCD वर readings कशा दाखवाव्यात (row-wise)?",
      "DHT readings चा interval किती ठेवावा?",
      "याला व्यावहारिक बनवण्यासाठी कोणते विस्तार करता?",
    ],
    quiz: [
      { question: "DHT11 data कोणत्या pin वर एंटर करतो?", options: ["digital 2", "A0", "5V", "PWM 9"], correct: 0 },
      { question: "LCD महत्वाची library?", options: ["LiquidCrystal", "DHT", "Servo", "EEPROM"], correct: 0 },
      { question: "DHT readings वाचण्याचा interval?", options: ["2000ms", "1ms", "10µs", "तात्काळ"], correct: 0 },
      { question: "काही decimal दाखवण्यासाठी print मध्ये काय?", options: ["print(t,1)", "print(t*10)", "Serial", "map()"], correct: 0 },
      { question: "Thermometer मध्ये sensor कुठे लावायचे?", options: ["स्थिर ठिकाणी", "हातात", "प्रत्येक ठिकाणी हलवून", "नियमानुसार बंद"], correct: 0 },
    ],
    related: ["arduino-dht11", "arduino-lcd", "arduino-display"],
    project: "arduino-thermometer",
    prev: "arduino-motor",
    next: "arduino-plant-waterer",
  },
  {
    slug: "arduino-plant-waterer",
    categoryId: "electronics",
    title: "Auto Plant Waterer",
    marathiTitle: "Soil moisture sensor + pump — auto plant watering",
    level: "intermediate",
    minutes: 40,
    summary: "Soil moisture sensor (FC-28), water pump (SFU-12/relay) control — आणि जमिनीची ओलसरपणा नुसार स्वयंचलित पाणी देणारे प्रोजेक्ट.",
    sections: [
      {
        title: "Soil moisture sensor + pump — auto plant watering म्हणजे काय?",
        content: "हा प्रोजेक्ट soil moisture sensor ने जमिनीची ओलसरपण मोजतो आणि कोरडी झाल्यावर small pump ला चालवतो.\nपुरेसे पाणी — वेळेवर — मॅन्युअल हस्तक्षेपाशिवाय, हे घरगुती automation चे उत्तम उदाहरण आहे.\nsensor + pump + relay, आणि safety (pump जास्त न चालणे) — हे सगळे या धड्यात आहे.",
      },
      {
        title: "का शिकावे? Soil moisture sensor + pump — auto plant watering चे फायदे आणि महत्त्व",
        content: "सुट्टीत/कामात असताना झाडे वाचवण्यासाठी हा सर्वात उपयुक्त real-world project आहे.\nsensor → control → actuator हीच पद्धती अगदी स्मार्ट हाऊस automation पर्यंत नेते; ती येथेच रुजते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Digital vs analog output — FC-28 चा DO digital + AO analog बाहेर येतो; AO वापरा (analogRead) जेणेकरून threshold adjust होईल.\n✗ Pump ला थेट Arduino वर — motor चालत नाही; transistor/MOSFET/relay द्वारे drive करा.\n✗ Sensor चा corrosion — पाण्यात सतत राहिल्याने sensor खराब; readings मध्ये विचार नाही; sensors अधूनमधून बाहेर काढा.\n✗ रात्रंदिवस pump — `interval safety` ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring",
        content: "FC-28: VCC→5V, GND→GND, AO→A0. water pump (जर 3-6V mini pump) → transistor/MOSFET gate (pin 9 PWM) किंवा relay module pin 8. diode पंपच्या मागे कप्ल (flyback protection). Water supplied निस्ताने battery/5V+",
        code: `// FC-28   → VCC 5V, GND, AO → A0
// Relay  → IN pin 8 (pump control)
// Pump supply = battery (5-12V) TRANZIO`,
        codeLanguage: "cpp",
        output: `// analogRead(A0): कोरडी माती ~600+
// ओलसर माती:      ~250-350
// पाण्यातच:        ~150 पेक्षा कमी`,
      },
      {
        title: "Auto water code",
        content: "DryThreshold = 550 घ्या. value > threshold तर pump ON. Off करणे — continuous pump नको; `dryCount` pattern: 10s ON max, मग 1 तास थांब. हीच safety आणि corrosion सकारक वेळ.",
        code: `int sensor = A0;
int relay = 8;
void setup() { pinMode(relay, OUTPUT); }
void loop() {
  int v = analogRead(sensor);
  if (v > 550) {
    digitalWrite(relay, HIGH);
    delay(10000);
    digitalWrite(relay, LOW);
    delay(3600000);
  } else {
    digitalWrite(relay, LOW);
  }
  delay(2000);
}`,
        codeLanguage: "cpp",
        output: `// जमीन कोरडी झाल्यावर:
// 10s pump → 1 तास थांब → पुन्हा तपास
// ओलसर असल्यास काहीही नाही`,
      },
      {
        title: "सारांश — plant waterer",
        content: "FC-28 AO → analogRead. Threshold ने कोरडे/ओलसर ओळखा. Relay/MOSFET ने pump drive. वेळ safety (10s ON / 1h break). विस्तार: LCD वर soil status, buzzer जेणेकरून ओरड टाक, RTC ने वेळेसाठी. पुढे obstacle robot — wheels control.",
      },
    ],
    practiceQuestions: [
      "FC-28 चा AO/D1 फरक कसा वापरता?",
      "Pump थेट Arduino पिनवर का नाही?",
      "Corrosion टाळण्यासाठी काय करता?",
      "Pump सुरक्षित चालवण्यासाठी code मध्ये काय?",
    ],
    quiz: [
      { question: "FC-28 मधून analog reading कुठून?", options: ["AO → A0", "DO → digital", "VCC", "GND"], correct: 0 },
      { question: "Pump control साठी कोणते भाग वापरता?", options: ["relay/transistor", "LED", "resistor only", "buzzer"], correct: 0 },
      { question: "कोरडी माती वाचन कसे असते?", options: ["जास्त (600+)", "कमी (100)", "शून्य", "अचानक बदल"], correct: 0 },
      { question: "Safety म्हणून काय ठेवता?", options: ["10s ON / 1h ठाम", "pump कायमा ON", "थेट 5V", "नियंत्रित शून्य"], correct: 0 },
      { question: "Flyback diode कशासाठी?", options: ["inductive spike सुरक्षा", "temperature", "display", "brightness"], correct: 0 },
    ],
    related: ["arduino-dht11", "arduino-lcd", "arduino-ir"],
    project: "arduino-plant-waterer",
    prev: "arduino-thermometer",
    next: "arduino-obstacle-robot",
  },
  {
    slug: "arduino-obstacle-robot",
    categoryId: "electronics",
    title: "Obstacle-Avoidance Robot",
    marathiTitle: "HC-SR04 + servo + motors — auto obstacle robot",
    level: "advanced",
    minutes: 45,
    summary: "Ultrasonic sensor फिरवणारा servo, दोन DC मोटर्स (H-bridge/L298N) आणि obstacle टाळण्याचा simple algorithm — पूर्ण mini robot.",
    sections: [
      {
        title: "HC-SR04 + servo + motors — auto obstacle robot म्हणजे काय?",
        content: "हा खरे hardware movement असलेला प्रोजेक्ट आहे — robot चालतो, अडथळा दिसल्यावर ultrasonic ने अंतर मोजतो आणि स्वतः वळून दुसऱ्या मार्गाने जातो.\nsensor पुढे-पुढे फिरवण्यासाठी servo, चालण्यासाठी दोन DC मोटर्स (L298N driver) एकत्र काम करतात.\nहा धडा mechanical + wiring + algorithm तिन्ही स्तरांवर घेऊन जातो.",
      },
      {
        title: "का शिकावे? HC-SR04 + servo + motors — auto obstacle robot चे फायदे आणि महत्त्व",
        content: "हा scope मोठा आहे — sensor स्कॅन, motor control, decisions. नेमक्या त्या skill sets च रोबोटिक्स मध्ये असतात.\nमजेदार प्रोजेक्ट शिकण्यासाठी सर्वात प्रभावी ठरतो आणि प्रत्येक घटक पुन्हा कामाला येतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Motors चा power Arduino वरून — मोटर्स ला separate battery; Arduino चा power वेगळे ठेवा (common GND).\n✗ L298N wiring गोंदणे — IN1-IN4, ENA/ENB ला PWM द्या; direction तपासा.\n✗ Servo ultrasonic सह voltage — servo load जास्त; power स्थिर हवे.\n✗ Algorithm: फक्त तोंडाला धडक — robot अडखळतो; scan 3 दिशा (left/center/right) आणि निवड करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — motors + sensor",
        content: "L298N: motor A → left wheels (IN1,IN2, enA→9), motor B → right wheels (IN3,IN4, enB→10). HC-SR04: trig→7, echo→6. servo signal→5. Battery: 2×18650 किंवा 9V power bank → L298N 12V साठी? L298N मध्ये 5V regulator असते — तिथूनही Arduino ला power देता येते.",
        code: `// L298N   → IN1-IN4 = 4,3,2,11
//            enA→9, enB→10
// HC-SR04 → trig 7, echo 6
// Servo   → signal 5`,
        codeLanguage: "cpp",
        output: `// power: battery → L298N → motors
// Arduino power: USB/याही L298N 5V`,
      },
      {
        title: "Movement + avoid algorithm",
        content: "Move functions: forward/back/turn via digitalWrite(IN). Servo angles 0,90,180 मध्ये scan. Distances: center < 20cm → stop, scan डावे/उजवे clear. जो clear तिकडे turn. हा simple `stuck-free` नियम आधीची पद्धत.",
        code: `int trig = 7, echo = 6;
float dist() {
  digitalWrite(trig, LOW); delayMicroseconds(2);
  digitalWrite(trig, HIGH); delayMicroseconds(10);
  digitalWrite(trig, LOW);
  long d = pulseIn(echo, HIGH);
  return d * 0.01715;
}
// main loop:
// d = dist(); if d < 20 -> stop, scan turn`,
        codeLanguage: "cpp",
        output: `// अडथळा < 20cm असल्यास:
// रोबोट थांबतो, डावे/उजवे स्कॅन करतो
// जो मोकळी दिशा तिकडे वळतो`,
      },
      {
        title: "सारांश — obstacle robot",
        content: "Hardware: L298N + motors, HC-SR04 servo-scan, गुण अंतर algorithm. मोटर power separate. तीन दिशा scan (left/center/right) ने चिकटणे थांबते. विस्तार: line-following sensor (IR), Bluetooth remote, speed = PWM via enA/enB. पुढे smart light — auto lighting logic.",
      },
    ],
    practiceQuestions: [
      "मोटर्स चा power वेगळा का ठेवतात?",
      "L298N चे inputs कसे वापरता (direction)?",
      "Obstacle टाळण्यासाठी scan का करता?",
      "स्पीड नियंत्रण ENA/ENB ने कसे?",
    ],
    quiz: [
      { question: "Motor driver कोणता वापरता?", options: ["L298N", "DHT11", "LCD", "resistor chain"], correct: 0 },
      { question: "Direction नियंत्रण कोणत्या pins ने?", options: ["IN1-IN4", "analog A0", "VCC", "GND"], correct: 0 },
      { question: "Speed नियंत्रण कसे?", options: ["PWM on enA/enB", "digitalWrite", "Serial", "interrupt"], correct: 0 },
      { question: "Obstacle टाळण्यासाठी काय? ", options: ["scan 3 दिशा", "थेट speed", "उलट", "कोणीही नाही"], correct: 0 },
      { question: "HC-SR04 अंतर कसे मोजते?", options: ["echo time × 0.01715", "analog voltage", "GPS", "capacitor"], correct: 0 },
    ],
    related: ["arduino-ultrasonic", "arduino-servo", "arduino-motor"],
    project: "arduino-obstacle-robot",
    prev: "arduino-plant-waterer",
    next: "arduino-smart-light",
  },
  {
    slug: "arduino-smart-light",
    categoryId: "electronics",
    title: "Smart Auto Light",
    marathiTitle: "LDR + PIR — automatic room light with motion",
    level: "intermediate",
    minutes: 35,
    summary: "PIR motion sensor आणि LDR एकत्र — अंधार + हालचाल तर दिवा ON, नाहीतर OFF — स्मार्ट लाइटिंग तर्क.",
    sections: [
      {
        title: "LDR + PIR — automatic room light with motion म्हणजे काय?",
        content: "दोन senses एकत्र — LDR ने अंधार ओळखा आणि PIR ने हालचाल. अंधार असल्यास आणि हालचाल दिसल्यासच दिवा ON.\nस्मार्ट लाइटिंग असेच काम करते — बेकार वीज खर्च थांबतो.\nहा पद्धती तर्कशुद्ध logic (AND) चे उत्तम उदाहरण ठरतो.",
      },
      {
        title: "का शिकावे? LDR + PIR — automatic room light with motion चे फायदे आणि महत्त्व",
        content: "हा कोणत्याही smart-home चा सगळ्यात वापरला जाणारा case आहे — बाथरूम, कॉरिडॉर, गोडाउन light.\nAND तर्क (दोन conditions) शिकल्यावर तुम्ही alert systems, security lights base बनवू शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ PIR trigger HIGH/LOW — हालचाल असल्यावर HIGH येतो; मध्यभागी गोंदले नको.\n✗ LDR threshold ठिकाण नाही — रात्रीच्या प्रकाशावर ठेवा; दिवसा light जाळणे ट्रिपस लावेल.\n✗ PIR ला delay द्यायला विसरणे — probe re-trigger 3s; तारेबंद सूट.\n✗ LED थेट पिनवर — दिवा मोठा असल्यास relay वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring",
        content: "PIR: VCC→5V, OUT→pin 2, GND→GND. LDR+10k divider→A0. LED→pin 9 (220Ω) किंवा AC load असल्यास relay module pin 8. PIR sensitivity/delay knobs वर — कमी delay सेट करा.",
        code: `// PIR  → VCC 5V, OUT → 2, GND
// LDR  → A0 (10k divider)
// LED  → pin 9 (PWM) किंवा Relay 8`,
        codeLanguage: "cpp",
        output: `// अंधार + हालचाल → दिवा ON
// दिवस / हालचाल नसेल → OFF`,
      },
      {
        title: "Code — AND logic",
        content: "दोन conditions: dark (LDR <500) आणि motion (PIR HIGH). दोन्ही true असल्यासच LED ON. delay ने retro lock — हालचाल संपल्यावर 30s ठेवा.",
        code: `int pirPin = 2, ldrPin = A0, led = 9;
void setup() {
  pinMode(pirPin, INPUT);
  pinMode(led, OUTPUT);
}
void loop() {
  bool motion = digitalRead(pirPin) == HIGH;
  bool dark = analogRead(ldrPin) < 500;
  if (motion && dark) {
    digitalWrite(led, HIGH);
    delay(30000);      // 30s amortizable
  } else {
    digitalWrite(led, LOW);
  }
  delay(100);
}`,
        codeLanguage: "cpp",
        output: `// हालचाल दिसल्यावर अंधारात 30s दिवा
// मग आपोआप बंद; मोशन नसेल तर OFF`,
      },
      {
        title: "सारांश — smart light",
        content: "LDR (अंधार) + PIR (हालचाल) + AND logic = smart light. PIR knobs जुळवा. AC load साठी relay. 30s auto-off = energy saving. विस्तार: brightness ramp (PWM), buzzer night alert, ESP सह सुद्धा control (esp-iot). पुढे iot-intro — internet जोडणी.",
      },
    ],
    practiceQuestions: [
      "PIR LEVEL कसा output देतो (motion)?",
      "लाईट systematic कसा ठेवता (AND)?",
      "PIR knobs का समायोजित करतात?",
      "AC load बरोबर काय वापरता?",
    ],
    quiz: [
      { question: "PIR कोणत्या state मध्ये हालचाल सांगतो?", options: ["HIGH", "LOW", "analog", "PWM"], correct: 0 },
      { question: "लाईट ON करण्याची condition?", options: ["motion && dark", "motion || dark", "always", "कधीही नाही"], correct: 0 },
      { question: "AC load नियंत्रणासाठी काय?", options: ["relay", "LED", "resistor", "buzzer"], correct: 0 },
      { question: "PIR sensitivity कसे जुळवता?", options: ["knob", "code only", "voltage", "library"], correct: 0 },
      { question: "Energy saving साठी काय ठेवता?", options: ["auto-off delay", "कायम ON", "दिवसातही", "accelerated"], correct: 0 },
    ],
    related: ["arduino-ldr", "arduino-button", "arduino-ir"],
    project: "arduino-smart-light",
    prev: "arduino-obstacle-robot",
    next: "iot-intro",
  },
];