import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · SENSOR LAB — Arduino inputs & outputs ===
// arduino-led → arduino-button → arduino-potentiometer → arduino-ldr → arduino-dht11
// → arduino-lcd → arduino-rgb → arduino-buzzer → arduino-sensor (electronics-level2.ts)

export const arduinoSensors: Tutorial[] = [
  {
    slug: "arduino-button",
    categoryId: "electronics",
    title: "Push Button & LED Switch",
    marathiTitle: "Push button — डिजिटल input, pull-up, toggle switch",
    level: "beginner",
    minutes: 25,
    summary: "Push button कसे जोडायचे, digitalReadने input वाचणे, INPUT_PULLUP, debounce आणि button दाबून LED switch करणे.",
    sections: [
      {
        title: "Push button — डिजिटल input, pull-up, toggle switch म्हणजे काय?",
        content: "Push button हे Arduino चे सगळ्यात सोपे input — दाबल्यावर circuit बंद करते.\nButton मधून Arduino digital pin वर HIGH/LOW कसा वाचतो, आणि त्यावरून LED/लोड switch कसा करायचा हे हा धडा शिकवतो.\nयाशिवाय button ची चार pins, pull-up/pull-down आणि button bounce (debounce) या व्यावहारिक गोष्टीही पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Push button — डिजिटल input, pull-up, toggle switch चे फायदे आणि महत्त्व",
        content: "Button हा पहिला डिजिटल input आहे — त्याच्याशिवाय तुमचा प्रोजेक्ट खऱ्या अर्थाने interactive होत नाही.\nहा धडा शिकल्यावर तुम्ही doorbell, light switch, password-style locks, alarm reset अशी अक्खी कुटुंबे बनवू शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Button च्या चार pins ची जोडणी गोंदणे — दोन internally जोडलेले असतात; wiring तपासून घ्या.\n✗ Pull-up न करणे — pin हवेत सोडल्यास random values येतात; INPUT_PULLUP सोबत GND कडे button जोडा.\n✗ Bounce कडे दुर्लक्ष — एक दाब अनेकदा एकापेक्षा जास्त वेळा वाचला जातो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Digital input — button वाचणे",
        content: "Button वापरताना pinMode(pin, INPUT_PULLUP) करा — Arduino आतल्या resistor ने pin ला 5V लावून ठेवतो. Button दुसऱ्या टोकाला GND ला जोडा. दाबल्यावर pin LOW (0) वाचतो, सोडल्यावर HIGH (1). कारण: आतला pull-up बाकीचे काम करतो. Analog नाही — फक्त 0/1.",
        code: `const int btn = 2;
const int led = 13;
void setup() {
  pinMode(btn, INPUT_PULLUP);
  pinMode(led, OUTPUT);
}
void loop() {
  if (digitalRead(btn) == LOW) {
    digitalWrite(led, HIGH);
  } else {
    digitalWrite(led, LOW);
  }
}`,
        codeLanguage: "cpp",
        output: `// दाबल्यावर: LED ON
// सोडल्यावर: LED OFF
// मीठ सांग: button+LED = instantaneous control`,
      },
      {
        title: "Toggle — एक दाब, एक switch",
        content: "State variable ठेवा: button दाबल्यावर एकदाच state बदला (अन्यथा loop दरम्यान अनेकदा toggle होईल). Debounce साठी 50ms चा विलंब पुरेसा — कारण button कडा लवकर bounce होतात. hasToSend pattern: जोपर्यंत button दाबलेला आहे तोपर्यंत बदल करू नका.",
        code: `const int btn = 2;
const int led = 13;
bool state = false;
void loop() {
  if (digitalRead(btn) == LOW) {
    delay(100);            // debounce
    if (digitalRead(btn) == LOW) {
      state = !state;      // toggle
      digitalWrite(led, state);
      while (digitalRead(btn) == LOW) {} // wait release
    }
  }
}`,
        codeLanguage: "cpp",
        output: `// दाबा → LED state बदलते (ON→OFF किंवा OFF→ON)
// दाब धरून ठेवल्यास तो state फक्त एकदाच बदलते`,
      },
      {
        title: "सारांश — push button",
        content: "Button = digital input (0/1). INPUT_PULLUP ने GND कडे जोडा; दाबल्यावर LOW. Bounce → 50ms debounce. Toggle साठी state variable + wait-release pattern. विस्तार: doorbell (button + buzzer), mini lock (दोन buttons), LED sequence (mode cycle).",
      },
    ],
    practiceQuestions: [
      "INPUT_PULLUP म्हणजे काय आणि button ला GND का जोडतात?",
      "Button दाबल्यावर LOW कशामुळे वाचला जातो?",
      "Debounce का आवश्यक आहे, 50ms का?",
      "Toggle कसा करायचा — code मध्ये state कशी बदलते?",
    ],
    quiz: [
      { question: "Button pin पहिल्यांदा कसा सेट करतो?", options: ["pinMode(btn, INPUT_PULLUP)", "pinMode(btn, OUTPUT)", "pinMode(btn, ANALOG)", "pinMode(btn, PWM)"], correct: 0 },
      { question: "INPUT_PULLUP ने button दाबल्यावर pin काय वाचतो?", options: ["LOW", "HIGH", "5 volt", "analog 512"], correct: 0 },
      { question: "Button bounce कशामुळे होतो?", options: ["यांत्रिक कडा लवकर उघड/बंद होतात", "जास्त voltage", "पुरेसा resistor नाही", "programming error"], correct: 0 },
      { question: "Toggle code मध्ये एकादश्या दाबावर बदल कसा ठेवतो?", options: ["wait-release while loop", "delay(1000)", "analogRead", "Serial.print"], correct: 0 },
      { question: "Call button म्हणून कोणता part वापरतात?", options: ["push button", "potentiometer", "LDR", "buzzer"], correct: 0 },
    ],
    related: ["arduino-basics", "arduino-led", "arduino-sensor"],
    prev: "arduino-led",
    next: "arduino-potentiometer",
  },
  {
    slug: "arduino-potentiometer",
    categoryId: "electronics",
    title: "Potentiometer & Analog Input",
    marathiTitle: "Potentiometer — analogRead, PWM dimming, voltage divider",
    level: "beginner",
    minutes: 25,
    summary: "Potentiometer कसे जोडायचे, analogReadने 0-1023 वाचणे, analogWriteने LED brightness control आणि voltage divider ची मूलभूत कल्पना.",
    sections: [
      {
        title: "Potentiometer — analogRead, PWM dimming, voltage divider म्हणजे काय?",
        content: "Potentiometer (pot) हे knob असलेले variable resistor — फिरवल्यावर त्याची middle pin ची voltage बदलते.\nArduino analog pin वरील voltage 0-5V ला 0-1023 च्या number मध्ये रूपांतरित करतो (analogRead).\nहा धडा pot जोडणी, analogRead, आणि PWM (analogWrite) ने LED dimming — हे सगळे सोप्या मराठीत उलगडतो.",
      },
      {
        title: "का शिकावे? Potentiometer — analogRead, PWM dimming, voltage divider चे फायदे आणि महत्त्व",
        content: "Pot हे analog input चा उत्तम प्रवेशद्वार आहे — त्याच्याशिवाय volume control, speed control, brightness adjust असे प्रोजेक्ट अर्धवट राहतात.\nanalogRead + map() + analogWrite हे combination अनेक real-world नियंत्रणांमध्ये वापरले जाते, त्यामुळे हे शिकणे अत्यंत उपयुक्त ठरते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Left/right pins ला 5V आणि GND उलटे जोडणे — knob ची दिशा उलटेल; तो दोष नाही.\n✗ analogRead 0-1023, पण analogWrite फक्त 0-255 — map() न करता लिहिल्यास स्किप होईल.\n✗ board अनुसार PWM pin च ठीक — सर्व pins analogWrite साठी समर्थ नाहीत (~ दुकडा).\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Analog input — pot वाचणे",
        content: "Pot च्या तीन pins: बाहेरचे दोन → 5V आणि GND, middle → analog pin (A0). analogRead(A0) 0-1023 परत करतो — 0 म्हणजे 0V, 1023 म्हणजे ~5V. middle pin ची voltage knob च्या स्थितीनुसार 0-5V मध्ये कुठेही असते — यालाच voltage divider म्हणतात.",
        code: `const int pot = A0;
void setup() { Serial.begin(9600); }
void loop() {
  int v = analogRead(pot);
  Serial.println(v);
  delay(200);
}`,
        codeLanguage: "cpp",
        output: `0
512
1023
// knob उजवीकडे फिरवल्यावर value वाढते`,
      },
      {
        title: "PWM — LED brightness",
        content: "analogRead 0-1023, पण analogWrite 0-255 — म्हणून प्रथम map(v, 0, 1023, 0, 255) करा. analogWrite पिन त्वरित switched करून ब्राइटनेस देते — याला PWM म्हणतात. ~ (PWM) दुकडा असलेल्या pin वरच वापरा (उदा. 9).",
        code: `const int pot = A0;
const int led = 9;
void setup() { pinMode(led, OUTPUT); }
void loop() {
  int v = analogRead(pot);
  int b = map(v, 0, 1023, 0, 255);
  analogWrite(led, b);
  delay(10);
}`,
        codeLanguage: "cpp",
        output: `// knob फिरवल्यावर LED dim→bright मध्ये बदलते
// map() मुळे 0-1023 → 0-255 होते`,
      },
      {
        title: "सारांश — potentiometer",
        content: "Pot = variable resistor (3 pins). analogRead → 0-1023. map() → 0-255 PWM. analogWrite PWM pin वर (उदा. 9,10,11). विस्तार: servo angle control, volume control, LCD वर value दाखवा. LDR दुसरा common analog sensor — पुढचा धडा.",
      },
    ],
    practiceQuestions: [
      "analogRead 0-1023 का देतो, 0-5 volt का नाही?",
      "analogWrite साठी map() कशामुळे आवश्यक आहे?",
      "Pot च्या middle pin ला जोडप्रक्रिया काय?",
      "कोणते Arduino pins PWM ला योग्य आहेत?",
    ],
    quiz: [
      { question: "analogRead पूर्ण range किती?", options: ["0-1023", "0-255", "0-5", "0-100"], correct: 0 },
      { question: "Pot ची middle pin कुठे जोडतो?", options: ["Analog pin (A0)", "5V", "GND", "Digital pin 13"], correct: 0 },
      { question: "PWM brightness साठी value 0-255 मध्ये कसे करतो?", options: ["map(v,0,1023,0,255)", "analogRead*2", "digitalWrite", "Serial.print"], correct: 0 },
      { question: "PWM साठी कोणती pins चांगली?", options: ["~ दुकडा असलेल्या", "कोणत्याही digital", "फक्त A0", "फक्त 5V"], correct: 0 },
      { question: "Voltage divider म्हणजे?", options: ["resistor जोडीने voltage विभाजन", "जास्त voltage", "current जास्त करणे", "पॉवर बंद करणे"], correct: 0 },
    ],
    related: ["arduino-ldr", "arduino-led", "arduino-servo"],
    prev: "arduino-button",
    next: "arduino-ldr",
  },
  {
    slug: "arduino-ldr",
    categoryId: "electronics",
    title: "LDR Light Sensor",
    marathiTitle: "LDR photoresistor — analogRead, night lamp auto switch",
    level: "beginner",
    minutes: 25,
    summary: "LDR (photoresistor) कसे काम करते, voltage divider circuit, प्रकाशानुसार मूल्य वाचणे आणि night lamp auto ON/OFF प्रोजेक्ट.",
    sections: [
      {
        title: "LDR photoresistor — analogRead, night lamp auto switch म्हणजे काय?",
        content: "LDR (Light Dependent Resistor) हा resistor असतो ज्याची किंमत प्रकाशावर अवलंबून बदलते — जास्त प्रकाशात कमी resistance, अंधारात उच्च.\nLDR ला एक स्थिर resistor सोबत series मध्ये ठेवून (voltage divider) analog pin वर प्रकाशाशी बदलणारा number वाचता येतो.\nहा धडा LDR circuit, वाचन आणि auto night lamp — तीनही स्तरांवर घेऊन जातो.",
      },
      {
        title: "का शिकावे? LDR photoresistor — analogRead, night lamp auto switch चे फायदे आणि महत्त्व",
        content: "LDR सह सिस्टम स्वतः निर्णय घेऊ लागते — अंधार झाला की दिवा, म्हणजेच automation ची सुरुवात.\nस्ट्रीट लाइट, परिसरातील बिलबोर्ड, security light सर्व LDR नेच काम करतात, त्यामुळे हे शिकून तोलामोलाचे तंत्र हाती येते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ LDR ला थेट analog pin वर जोडणे — value न बदलता random येते; 10k resistor सोबत voltage divider करा.\n✗ 5V आणि GND उलटे — प्रकाशऐवजी अंधारात HIGH मिळेल.\n✗ Threshold ठरवताना Serial मध्ये pabyte — आधी value पाहून मग threshold निवडा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Voltage divider — LDR circuit",
        content: "LDR चा एक टोक 5V ला, दुसरा टोक 10k resistor मधून GND ला जोडा. LDR आणि 10k resistor सांधलेला बिंदू A0 ला घ्या. प्रकाश जास्त असल्यास LDR resistance कमी → A0 जास्त. अंधारात LDR resistance उच्च → A0 कमी. या बिंदूलाच voltage divider म्हणतात.",
        code: `// LDR circuit:
// 5V ── [LDR] ──┬── A0
//                 │
//(10k) resistor  GND
// जास्त प्रकाश → जास्त value
// अंधार       → कमी value`,
        codeLanguage: "cpp",
        output: `// दिवसा (प्रकाश): ~850-1023
// संध्याकाळ:     ~300-500
// पूर्ण अंधार:   ~20-80`,
      },
      {
        title: "Night lamp — auto switch",
        content: "Threshold = 500 घ्या (Serial वरून निवडा). value < 500 असल्यास LED ON. थोडी hysteresis (उदा. ON <450, OFF >550) ठेवल्यास संध्याकाळी toggle खेळ थांबतो; पण सोपी सुरुवात एका threshold ने चालेल.",
        code: `const int ldrPin = A0;
const int led = 9;
void setup() { pinMode(led, OUTPUT); Serial.begin(9600); }
void loop() {
  int v = analogRead(ldrPin);
  if (v < 500) digitalWrite(led, HIGH);
  else digitalWrite(led, LOW);
  Serial.println(v);
  delay(100);
}`,
        codeLanguage: "cpp",
        output: `// अंधार पडल्यावर LED आपोआप ON
// पहाटे प्रकाश आल्यावर OFF
// Serial वर value पाहून threshold निवडा`,
      },
      {
        title: "सारांश — LDR",
        content: "LDR = light-dependent resistor. 10k resistor मधून voltage divider. analogRead → value. Threshold ने LED auto switch. विस्तार: street-light mimic, LDR + relay ने AC लाईट, light log (mini dataset). पुढे DHT11 — temperature/humidity sensor.",
      },
    ],
    practiceQuestions: [
      "LDR चे resistance प्रकाशानुसार कसे बदलते?",
      "Voltage divider मध्ये 10k resistor कशासाठी?",
      "Analog value वरून प्रकाश कसा ओळखता?",
      "Auto night lamp threshold कसा ठरवतो?",
    ],
    quiz: [
      { question: "LDR ची resistance प्रकाशात असते?", options: ["कमी", "उच्च", "शून्य", "बदलत नाही"], correct: 0 },
      { question: "A0 वर योग्य वाचनासाठी LDR सोबत काय हवे?", options: ["10k+resistor", "LED", "buzzer", "जास्त wiring"], correct: 0 },
      { question: "अंधारात LDR वाचन (value) कसे असते?", options: ["कमी", "जास्त", "1023", "बदलत नाही"], correct: 0 },
      { question: "Auto lamp साठी काय वापरतो?", options: ["threshold", "debounce", "pull-up", "interrupt"], correct: 0 },
      { question: "AnalogRead साठी मूल्य range किती?", options: ["0-1023", "0-255", "0-5", "1-10"], correct: 0 },
    ],
    related: ["arduino-potentiometer", "arduino-dht11", "arduino-led"],
    prev: "arduino-potentiometer",
    next: "arduino-dht11",
  },
  {
    slug: "arduino-dht11",
    categoryId: "electronics",
    title: "DHT11 Temperature & Humidity",
    marathiTitle: "DHT11 — तापमान + आर्द्रता, library, serial monitor",
    level: "beginner",
    minutes: 30,
    summary: "DHT11 sensor wiring, DHT library install, temperature/humidity वाचणे, serial monitor वर दाखवणे आणि LCD सह जोडणीची दिशा.",
    sections: [
      {
        title: "DHT11 — तापमान + आर्द्रता, library, serial monitor म्हणजे काय?",
        content: "DHT11 हा compact संवेदक आहे जो एकच digital pin वरून तापमान (°C) आणि आर्द्रता (%) दोन्ही देतो.\nहा धडा DHT11 च्या 4 legs ची wiring, DHT library install, आणि Serial monitor वर readings दाखवण्यापर्यंत घेऊन जातो.\nसोपे library call आणि प्रत्यक्ष readings — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? DHT11 — तापमान + आर्द्रता, library, serial monitor चे फायदे आणि महत्त्व",
        content: "तापमान आणि आर्द्रता, environment monitoring चा आधार आहे — greenhouse, weather box, रॉम monitoring सगळ्यांत वापरतात.\nDHT11 चा library आधार शिकल्यावर तुम्ही कोणतीही sensor library (DHT22, DS18B20) सहज वापरू शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ 3rd pin (NC) पंधरा — काही modules वर not connected असते; काहीवर data. Module चे label पहा.\n✗ 8 bits protocol library शिवाय — स्वतः bit-bang कठीण; DHT library install करा.\n✗ readings धडधडणे — DHT11 मध्ये 1 reading/sec पेक्षा जास्त नको; delay >2s ठेवा.\n✗ Serial monitor 9600 — दुसरा baud सेट केल्यास garbage दिसते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — DHT11",
        content: "चार legs: VCC (3-5V), DATA, NC, GND. VCC → 5V, GND → GND, DATA → digital pin 2. काही boards वर built-in pull-up असते, नसेल तर 10k resistor (DATA→VCC) लावा. Library: Sketch → Include Library → Manage Libraries → \"DHT sensor library by Adafruit\" install करा.",
        code: `// DHT11 → Arduino
// VCC  → 5V
// DATA → pin 2  (10k pull-up VCC कडे)
// GND  → GND
// (NC   → काहीही जोडू नका)`,
        codeLanguage: "cpp",
        output: `// 1-wire protocol — DATA एकाच line वर
// output म्हणून तापमान + आर्द्रता`,
      },
      {
        title: "Readings — Serial monitor",
        content: "DHT library objects: DHT dht(2, DHT11). Setup मध्ये dht.begin(). loop मध्ये dht.readTemperature() आणि dht.readHumidity() म्हणा. readings तोडक्या असल्यास (NaN), wiring तपासा किंवा delay वाढवा.",
        code: `#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
void setup() {
  Serial.begin(9600);
  dht.begin();
}
void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  Serial.print("Temp: "); Serial.print(t);
  Serial.print(" C | Hum: "); Serial.println(h);
  delay(2000);
}`,
        codeLanguage: "cpp",
        output: `Temp: 27.00 C | Hum: 65.00
Temp: 27.00 C | Hum: 64.00
// दर 2 सेकंदांनी fresh reading`,
      },
      {
        title: "सारांश — DHT11",
        content: "DHT11: एक digital pin, तापमान+आर्द्रता. Wiring: VCC/DATA/NC/GND. Library: Adafruit DHT. readings: readTemperature(), readHumidity(). delay ≥2s. पुढे: LCD वर दाखवा (arduino-lcd), तापमानथंड indicator, आणि IoT मध्ये DHT11 (esp-iot).",
      },
    ],
    practiceQuestions: [
      "DHT11 एकाच pin मधून किती measurements देते?",
      "DHT library ने तापमान कसे वाचतो?",
      "readings NaN येत असतील तर काय तपासावे?",
      "DHT11 च्या readings ची गती मर्यादा काय?",
    ],
    quiz: [
      { question: "DHT11 data pin कसा असते?", options: ["डिजिटल digital", "analog", "PWM", "serial"], correct: 0 },
      { question: "तापमान वाचण्याचा method?", options: ["readTemperature()", "analogRead", "digitalRead", "map()"], correct: 0 },
      { question: "DHT11 ला किती delay चांगला?", options: ["2000ms", "1ms", "10µs", "शून्य"], correct: 0 },
      { question: "DHT library कुठून install करतो?", options: ["Library Manager", "Serial", "config file", "BIOS"], correct: 0 },
      { question: "DHT11 एकाच pin वर देते?", options: ["तापमान+आर्द्रता", "फक्त तापमान", "फक्त प्रकाश", "फक्त sound"], correct: 0 },
    ],
    related: ["arduino-ldr", "arduino-lcd", "arduino-sensor"],
    prev: "arduino-ldr",
    next: "arduino-lcd",
  },
  {
    slug: "arduino-lcd",
    categoryId: "electronics",
    title: "LCD 16x2 Display",
    marathiTitle: "LCD 16x2 — wiring, LiquidCrystal library, custom text",
    level: "intermediate",
    minutes: 30,
    summary: "LCD 16x2 परिचय, 16-pin wiring, LiquidCrystal library, text printing, blinking cursor आणि DHT11 readings LCD वर दाखवणे.",
    sections: [
      {
        title: "LCD 16x2 — wiring, LiquidCrystal library, custom text म्हणजे काय?",
        content: "LCD 16x2 ही display आहे — 16 characters च्या 2 ओळी — ज्यावर Arduino text, संख्येचे readings दाखवू शकते.\nI2C शिवाय 6+ pins लागतात, पण LiquidCrystal library ने ती सगळी व्यवस्थापित होतात.\nहा धडा LCD wiring, library call आणि प्रत्यक्ष text/readings दाखवण्यापर्यंत घेऊन जातो.",
      },
      {
        title: "का शिकावे? LCD 16x2 — wiring, LiquidCrystal library, custom text चे फायदे आणि महत्त्व",
        content: "LCD मुळे प्रोजेक्ट Serial monitor शिवाय स्वतःच सांगू लागतो — तापमान, अंतर, पाण्याची पातळी सगळं तिथेच दिसतं.\nबहुतेक सर्व Arduino projects मध्ये display असते, त्यामुळे library वापर ही मूलभूत कौशल्ये आहेत.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Contrast कडे दुर्लक्ष — LCD BUSY दिसू नये म्हणून potentiometer मधून Vo सहज 5k ते 0 वर न्या.\n✗ Backlight (pin 15/16) न जोडणे — पहिल्यांदा डिस्प्ले अंधुक वाटू शकतो; 15→5V resistor सह, 16→GND.\n✗ Pin नंबर उलटे — LiquidCrystal(rs,en,d4,d5,d6,d7) क्रम ठीक ठेवा.\n✗ 5V आणि I2C module चा गरज विषय — सोपा मार्ग I2C module; पण हा धडा parallel मोड.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — parallel LCD",
        content: "LCD 16 pin असतो. VSS→GND, VDD→5V, Vo→potentiometer middle (contrast), RS→12, RW→GND, E→11, D4→5, D5→4, D6→3, D7→2, A(15)→5V resistor सह, K(16)→GND. backlight potentiometer पेक्षा contrast pot वेगळे असते.",
        code: `// LCD → Arduino
// VSS → GND, VDD → 5V
// Vo  → pot (contrast), RW → GND
// RS → 12, E → 11
// D4 → 5, D5 → 4, D6 → 3, D7 → 2
// A → 5V (220Ω), K → GND`,
        codeLanguage: "cpp",
        output: `// 4-bit mode — फक्त 6 pins हवेत
// (RS, E, D4-D7)`,
      },
      {
        title: "Text — LiquidCrystal library",
        content: "LiquidCrystal lcd(12, 11, 5, 4, 3, 2) — क्रम rs, en, d4, d5, d6, d7. setup मध्ये lcd.begin(16,2) आणि printe. lcd.setCursor(0,0) ने column,row निवडा. DHT11 readings आता LCD वर दाखवता येतात.",
        code: `#include <LiquidCrystal.h>
LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
void setup() {
  lcd.begin(16, 2);
  lcd.print("Marathi Learn!");
  lcd.setCursor(0, 1);
  lcd.print("Electro OK");
}
void loop() { lcd.setCursor(9, 1); lcd.print(millis() / 1000); }`,
        codeLanguage: "cpp",
        output: `Marathi Learn!
Electro OK     0
// सेकंद मोजणारं काउंटर 16x2 वर`,
      },
      {
        title: "सारांश — LCD",
        content: "LCD 16x2: 16 chars × 2 rows. Parallel wiring (6 pins). lcd.begin(16,2), lcd.print(), lcd.setCursor(). Contrast pot आवश्यक. विस्तार: DHT11 readings LCD वर, rolling text, आणि आता I2C module ने फक्त 2 wires (SDA/SCL) — तेच L4 लायब्ररी पॅटर्न.",
      },
    ],
    practiceQuestions: [
      "LCD 16x2 म्हणजे काय आणि कुठे वापरतो?",
      "Parallel wiring मध्ये कोणते pins आवश्यक?",
      "lcd.setCursor() कशासाठी वापरतो?",
      "Contrast न बिघडल्यास display कसा दिसतो?",
    ],
    quiz: [
      { question: "LCD 16x2 म्हणजे?", options: ["16 chars × 2 lines", "16 pins × 2", "16 bit × 2", "16V × 2"], correct: 0 },
      { question: "Parallel mode मध्ये library निर्मिती?", options: ["LiquidCrystal(rs,en,d4,..,d7)", "Serial.begin", "pinMode(rst)", "delay(16)"], correct: 0 },
      { question: "Text छापण्याचा command?", options: ["lcd.print()", "Serial.write", "cout", "digitalWrite"], correct: 0 },
      { question: "Cursor नेमके ठिकाणी कसा?", options: ["setCursor(col,row)", "clearscreen", "lcd.clear()", "delay(10)"], correct: 0 },
      { question: "Contrast समायोजन कसे होते?", options: ["pot वरून Vo", "library code", "software reset", "5V शिवणे"], correct: 0 },
    ],
    related: ["arduino-dht11", "arduino-display", "arduino-ultrasonic"],
    prev: "arduino-dht11",
    next: "arduino-rgb",
  },
  {
    slug: "arduino-rgb",
    categoryId: "electronics",
    title: "RGB LED & Colors",
    marathiTitle: "RGB LED — common cathode/anode, PWM color mixing",
    level: "intermediate",
    minutes: 25,
    summary: "RGB LED म्हणजे काय, common cathode vs anode, तीन PWM pins ने रंग मिसळणे आणि auto color cycle प्रोजेक्ट.",
    sections: [
      {
        title: "RGB LED — common cathode/anode, PWM color mixing म्हणजे काय?",
        content: "RGB LED ही एकच LED आहे ज्यात red, green, blue असे तीन LED होते — तीनही एका पॅकेजमध्ये.\nप्रत्येक रंगाच्या तीव्रतेवर नियंत्रण (PWM) करून सगळे मिळून लाखो रंग तयार होतात.\nहा धडा RGB wiring (cathode vs anode), resistor एकत्रीकरण आणि color mixing प्रोग्राम दाखवतो.",
      },
      {
        title: "का शिकावे? RGB LED — common cathode/anode, PWM color mixing चे फायदे आणि महत्त्व",
        content: "RGB हे आधुनिक UI/status दाखवण्याचे (status indicator) मूलभूत साधन आहे — play/pause, error, loading हे रंगांनीच.\nPWM ने रंग मिसळणे शिकल्यावर तुम्ही ambient lamp, notification ring अशा प्रोजेक्टकडे जाऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Common anode vs cathode गोंदणे — anode मध्ये common 5V, cathode मध्ये common GND; wiring उलटी केल्यास LED आंधळ्या वाटतात.\n✗ Resistor न करता थेट पिन — तीन रंगांना तीन्वेगळ्या resistors द्या (each ~220Ω).\n✗ PWM pin ठरवणे — digitalWrite/analogWrite येथे; सर्व pins RGB वर नको.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — common cathode",
        content: "पाच/चार legs: longest leg = common. Common cathode ⇒ common → GND, R→9, G→10, B→11 (PWM pins). प्रत्येक रंगाच्या leg ला 220Ω resistor द्या. Common anode असल्यास common → 5V आणि code ने रंग उलटे (255−value) लिहा.",
        code: `// RGB (common cathode)
// R → pin 9  (220Ω)
// G → pin 10 (220Ω)
// B → pin 11 (220Ω)
// Long leg → GND`,
        codeLanguage: "cpp",
        output: `// 3 PWM pins = रंगांचे 16M combos
// (0-255)^3`,
      },
      {
        title: "Color mixing — code",
        content: "तीन analogWrite ने रंग तयार. rainbow cycle साठी millis() ने hue बदलवा — प्रत्येक रंग ctie पद्धतीने fade. yellowish (R+G) पासून सुरुवात करा; मग RGB cycle.",
        code: `int rLed = 9, gLed = 10, bLed = 11;
void setColor(int r, int g, int b) {
  analogWrite(rLed, r);
  analogWrite(gLed, g);
  analogWrite(bLed, b);
}
void setup() { pinMode(rLed,OUTPUT); pinMode(gLed,OUTPUT); pinMode(bLed,OUTPUT); }
void loop() {
  setColor(255,0,0); delay(500);
  setColor(0,255,0); delay(500);
  setColor(0,0,255); delay(500);
  setColor(255,255,0); delay(500);
}`,
        codeLanguage: "cpp",
        output: `// लाल → हिरवा → निळा → पिवळा → ...
// प्रत्येक 0.5s आवर्तन`,
      },
      {
        title: "सारांश — RGB LED",
        content: "RGB = 3 LEDs एकत्र. Common cathode ⇒ common→GND; anode ⇒ common→5V. तीन PWM pins ने रंग. प्रत्येक रंगाला resistor. विस्तार: temperature वरून रंग (DHT11 सह), LDR प्रकाशावरून glow, PWM में नैसर्गिक fade. पुढे buzzer — sound निर्मिती.",
      },
    ],
    practiceQuestions: [
      "Common cathode आणि anode मध्ये फरक काय?",
      "तीन PWM pins ने किती रंग शक्य?",
      "RGB LED ला resistor का आवश्यक आहे?",
      "Anode wiring मध्ये code कसा बदलतो?",
    ],
    quiz: [
      { question: "RGB LED मध्ये किती LEDs असतात?", options: ["तीन", "एक", "दोन", "चार"], correct: 0 },
      { question: "Common cathode मध्ये common leg कुठे जाते?", options: ["GND", "5V", "analog", "reset"], correct: 0 },
      { question: "रंग मिसळण्यासाठी काय वापरतो?", options: ["तीन analogWrite", "digitalWrite", "Serial", "interrupt"], correct: 0 },
      { question: "PWM pins कोणते आहेत?", options: ["9,10,11", "1,2,3", "A0,A1,A2", "13,12,11"], correct: 0 },
      { question: "प्रत्येक रंगाच्या leg वर काय लागते?", options: ["resistor", "led", "capacitor", "switch"], correct: 0 },
    ],
    related: ["arduino-led", "arduino-buzzer", "arduino-potentiometer"],
    prev: "arduino-lcd",
    next: "arduino-buzzer",
  },
  {
    slug: "arduino-buzzer",
    categoryId: "electronics",
    title: "Buzzer & Tones",
    marathiTitle: "Buzzer — active/passive, tone(), melodies, doorbell",
    level: "beginner",
    minutes: 25,
    summary: "Buzzer चे दोन प्रकार — active (digitalWrite ने वाजतो) vs passive (tone() ने), नोट/frequency समज आणि मेलोडी/doorbell बनवणे.",
    sections: [
      {
        title: "Buzzer — active/passive, tone(), melodies, doorbell म्हणजे काय?",
        content: "Buzzer हे sound output device आहे — active buzzer ला फक्त HIGH दिल्यावर वाजतो, passive buzzer ला frequency (tone) द्यावी लागते.\nहा धडा दोन्ही प्रकारांचे वेगळे circuit, tone() आणि noTone() वापर, आणि नोट फ्रिक्वेंसीनेमध्ये melody बनवणे शिकवतो.\nशेवटचा प्रोजेक्ट: doorbell + alarm tones.",
      },
      {
        title: "का शिकावे? Buzzer — active/passive, tone(), melodies, doorbell चे फायदे आणि महत्त्व",
        content: "बझर प्रोजेक्टला आवाज देतो — alarm, notification, feedback यासाठी वेगवेगळे sounds महत्त्वाचे आहेत.\nActivity ने नियंत्रित असलेला आवाज = सिस्टमचा चौथा वाचक (आकडा/दिसणारा/स्पर्शासाठी दिसला आवाज).\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Active/passive गोंदणे — active ला tone() दिल्यास बस्स/बंद होतो; passive ला HIGH दिल्यास नीट वाजत नाही.\n✗ Resistor न करणे — buzzer मध्ये inbuilt resistor असतो; 5V वर थेटच चालतो.\n✗ tone() कडे दुर्लक्ष — tone() एका पिनवर; noTone() न करता loop अडकेल.\n✗ Speaker vs buzzer — speaker ला amplifier हवा, buzzer सर्वसामान्य project साठी.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Active buzzer — simple beep",
        content: "Active buzzer two-leg येते, त्याला + (पिवळे/रेड ठिपके) आणि − असते. + → pin 12, − → GND. digitalWrite(HIGH) दिल्यावर वाजतो. याला generated frequency आवश्यक नसते — आतल्या oscillator मुळे निश्चित आवाज.",
        code: `int buzz = 12;
void setup() { pinMode(buzz, OUTPUT); }
void loop() {
  digitalWrite(buzz, HIGH);
  delay(1000);
  digitalWrite(buzz, LOW);
  delay(1000);
}`,
        codeLanguage: "cpp",
        output: `// 1s beep, 1s silent
// residueconsole मध्ये आवाजच कालावधी नियंत्रित होतो`,
      },
      {
        title: "Passive buzzer — tone() melody",
        content: "Passive buzzer ला tone() द्या — tone(pin, freq, dur). noTone() ने थांबवा. नोट frequencies: C4=262, D4=294, E4=330, G4=392, A4=440. पुढे doorbell (button दाबल्यावर \"ding-dong\") बनवता येते.",
        code: `int buzz = 12;
void setup() {}
void loop() {
  tone(buzz, 262, 300);
  delay(350);
  noTone(buzz);
  tone(buzz, 392, 300);
  delay(350);
  noTone(buzz);
  delay(1000);
}`,
        codeLanguage: "cpp",
        output: `// "डिंग-डॉंग" — दोन नोट्सचा आवाज
// प्रत्येक दर 1.2s`,
      },
      {
        title: "सारांश — buzzer",
        content: "Active: HIGH दिले की वाजतो; wiring सोपी. Passive: tone(pin,freq) ने आवाज; frequencies ने melody. doorbell = button + passive buzzer (ding-dong). विस्तार: ultrasonic ने alarm, DHT तापमान सुचना, LDR अंधार alarm. पुढे arduino-sensor — सगळे sensors एकत्र.",
      },
    ],
    practiceQuestions: [
      "Active आणि passive buzzer मध्ये काय फरक?",
      "tone() वर divs कसे नियंत्रित?",
      "melody मध्ये noTone() कशासाठी?",
      "Button + buzzer = doorbell कसा बनवता?",
    ],
    quiz: [
      { question: "Active buzzer कसे वाजवतो?", options: ["digitalWrite(HIGH)", "tone()", "analogWrite", "Serial.print"], correct: 0 },
      { question: "Passive buzzer साठी काय देतो?", options: ["frequency via tone()", "do nothing", "voltage only", "map()"], correct: 0 },
      { question: "आवाज थांबवण्याचा function?", options: ["noTone()", "stopTone()", "digitalRead", "delay(0)"], correct: 0 },
      { question: "C4 नोटची frequency?", options: ["262Hz", "440Hz", "1000Hz", "50Hz"], correct: 0 },
      { question: "Buzzer पिन कुठे जोडतो?", options: ["digital pin", "analog pin", "5V only", "GND only"], correct: 0 },
    ],
    related: ["arduino-button", "arduino-ultrasonic", "arduino-sensor"],
    prev: "arduino-rgb",
    next: "arduino-sensor",
  },
];