import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 2 — Arduino sensors आणि capstone project ===
// arduino-sensor → arduino-project
// (arduino-basics, arduino-led — tutorials.ts मधील inline पाठ)

export const electronicsLevel2: Tutorial[] = [
  {
    slug: "arduino-sensor",
    categoryId: "electronics",
    title: "Arduino Sensors - जग वाचणे",
    marathiTitle: "Arduino sensors सखोल — LDR, thermistor, DHT11, serial वाचन, calibration",
    level: "intermediate",
    minutes: 30,
    summary: "Arduino सोबत sensors कसे जोडायचे: analog vs digital, LDR प्रकाश-संवेदक voltage divider सह, thermistor ने तापमान, DHT11 humidity आणि serial monitor मध्ये data वाचणे व map() ने scale करणे.",
    sections: [
      {
        title: "Arduino sensors सखोल — LDR, thermistor, DHT11, serial वाचन, calibration म्हणजे काय?",
        content: "Arduino सोबत sensors कसे जोडायचे: analog vs digital, LDR प्रकाश-संवेदक voltage divider सह, thermistor ने तापमान, DHT11 humidity आणि serial monitor मध्ये data वाचणे व map() ने scale करणे.\nArduino ला बाहेरचे जग sensors द्वारे कळते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Arduino sensors सखोल — LDR, thermistor, DHT11, serial वाचन, calibration चे फायदे आणि महत्त्व",
        content: "\"Arduino sensors सखोल — LDR, thermistor, DHT11, serial वाचन, calibration\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Sensors — analog vs digital",
        content: "Arduino ला बाहेरचे जग sensors द्वारे कळते. दोन प्रकार आहेत: digital (फक्त ON/OFF) आणि analog (सतत मूल्य 0–1023).\n\nDigital sensors — बटण, motion sensor, IR obstacle sensor.\nAnalog sensors — LDR (प्रकाश), potentiometer, thermistor.\n\nPin mapping: analog inputs A0–A5 (analogRead), digital inputs pin 2–13 (digitalRead).\nanalogRead वाचन: 0V → 0; 5V → 1023.\n\nसाधा नियम: जिथे yes/no हवा तेथे digital, जिथे मोठेपणा हवा तेथे analog.",
      },
      {
        title: "LDR + analogRead — पहिला sensor",
        content: "LDR (Light Dependent Resistor) प्रकाशानुसार resistance बदलते. प्रकाश कमी → resistance मोठे; प्रकाश जास्त → resistance लहान.\n\nVoltage divider: LDR व 10kΩ resistor शृंखलेत, मधला बिंदू A0 pin.\n\nकोड:\nvoid setup() { Serial.begin(9600); }\nvoid loop() {\nint v = analogRead(A0);\nSerial.println(v);\ndelay(500);\n}\n\nअंधारात resistance मोठे → A0 voltage कमी → वाचन कमी. प्रकाशात resistance लहान → voltage जास्त → वाचन जास्त.",
        code: `void setup() { Serial.begin(9600); }
void loop() {
  int v = analogRead(A0);
  Serial.println(v);
  delay(500);
}`,
        codeLanguage: "cpp",
        output: `512
487
320`,
      },
      {
        title: "Voltage divider — गणित",
        content: "LDR resistance थेट Arduino वाचत नाही — voltage divider voltage मध्ये रूपांतरित करतो.\n\nसूत्र: V_out = V_in × R2 / (R1 + R2)\nजिथे V_in = 5V, R1 = LDR, R2 = 10kΩ.\n\nउदाहरण:\n• R1 = 10kΩ (प्रकाश) → V_out = 5 × 10k / 20k = 2.5V → ~512.\n• R1 = 100kΩ (अंधार) → V_out = 5 × 10k / 110k ≈ 0.45V → ~92.\n\nहेच अनेक sensors चा आधार — कुठलाही resistive sensor voltage divider सह वाचता येतो.\n\nमुख्य गोष्ट: एक resistor स्थिर ठेवा, दुसरा sensor चा बदलणारा resistance. मधला बिंदू A0 ला.",
      },
      {
        title: "Thermistor — तापमान वाचणे",
        content: "Thermistor हा temperature-dependent resistor. NTC: ताप वाढता resistance कमी होतो. PTC: ताप वाढता resistance वाढतो.\n\nजोडणी: thermistor + 10kΩ voltage divider, मधला बिंदू A1.\n\nकोड:\nint raw = analogRead(A1);\nfloat v = raw * 5.0 / 1023;\nfloat r = (5.0 - v) / v * 10000;\nfloat t = 1.0 / (1.0/298.15 + log(r/10000.0)/3950);\nt -= 273.15;\n\nSteinhart-Hart सरलीकरण (B=3950) ने resistance → Kelvin → Celsius.\nव्यावहारिक अचूकता ±1-2°C — सामान्य प्रयोगासाठी पुरेसी.",
        code: `int raw = analogRead(A1);
float v = raw * 5.0 / 1023;
float r = (5.0 - v) / v * 10000;
float t = 1.0 / (1.0/298.15 + log(r/10000.0)/3950);
t -= 273.15;
Serial.println(t);`,
        codeLanguage: "cpp",
        output: `28.45
29.12
27.89`,
      },
      {
        title: "DHT11 — डिजिटल तापमान/आर्द्रता",
        content: "DHT11 एक digital sensor — तापमान 0-50°C (±2°C) आणि आर्द्रता 20-80% (±5%) दोन्ही देते.\n\nजोडणी: VCC → 5V; DATA → pin 2 (10kΩ pull-up); GND → GND.\n\nLibrary: Library Manager मधून \"DHT sensor library\" स्थापित करा.\nreadTemperature/readHumidity फ्लोट परत करतात.\ndelay आवश्यक — नाहीतर NaN (रिकामे) येते.",
        code: `#include <DHT.h>
DHT dht(2, DHT11);
void setup() { Serial.begin(9600); dht.begin(); }
void loop() {
  Serial.print(dht.readTemperature());
  Serial.println(dht.readHumidity());
  delay(2000);
}`,
        codeLanguage: "cpp",
        output: `30
26`,
      },
      {
        title: "Serial monitor — वाचन व scale",
        content: "Sensor data समजण्यासाठी serial monitor खिडकी आहे.\n\nउपयुक्त आदेश:\n• Serial.begin(9600) — setup मध्ये एकदा.\n• Serial.println(value) — नव्या ओळीत प्रिंट.\n• Serial.print(label) — same line वर.\n\nmap() ने data scale करा: map(raw, 400, 900, 0, 100) — वाचन 400-900 → 0-100 टक्के.\nconstrain() — value ला सुरक्षित सीमेत ठेवते.\n\nSerial Plotter: Tools → Serial Plotter — value चा ग्राफ.\nचांगली सवय: एका वेळी एक दोन value छापा; bounds मोजण्यासाठी minimum/maximum वाचा.",
      },
      {
        title: "सारांश",
        content: "Arduino sensors चे सहा मुद्दे:\n\n• analog vs digital — सतत मूल्य vs ON/OFF.\n• LDR — voltage divider सह A0 वर 0-1023.\n• Voltage divider — V_out = V_in × R2 / (R1 + R2).\n• Thermistor — NTC resistance तापासोबत कमी.\n• DHT11 — digital तापमान + आर्द्रता (delay आवश्यक).\n• Serial + map() — data वाचणे व scale करणे.\n\nपुढील पायरी: LDR + 10kΩ divider बनवा, serial monitor मध्ये वाचन पहा, map() ने टक्केवारीत बदला, DHT11 जोडून तापमान+आर्द्रता छापा.",
      },
    ],
    practiceQuestions: [
      "Analog व digital sensor मध्ये काय फरक?",
      "LDR वाचण्यासाठी voltage divider का लागतो?",
      "map(raw, 400, 900, 0, 100) काय करतो?",
      "DHT11 सोबत delay का आवश्यक आहे?",
    ],
    quiz: [
      { question: "LDR म्हणजे काय?", options: ["Light Dependent Resistor", "Light Digital Reader", "Little Digital Resistor", "Low Drain Resistor"], correct: 0 },
      { question: "analogRead(A0) चे वाचन किती पर्यंत?", options: ["0 ते 1023", "0 ते 255", "0 ते 5", "0 ते 100"], correct: 0 },
      { question: "A0 वर 1023 म्हणजे voltage किती?", options: ["5V", "0V", "3.3V", "GND"], correct: 0 },
      { question: "NTC thermistor — ताप वाढता resistance?", options: ["कमी होतो", "वाढतो", "स्थिर", "शून्य"], correct: 0 },
      { question: "DHT11 वाचनासाठी कोणता आदेश आवश्यक?", options: ["delay", "map", "constrain", "analogRead"], correct: 0 },
    ],
    related: ["arduino-led", "electronics-capacitor", "diy-projects"],
    prev: "arduino-led",
    next: "arduino-project",
  },
  {
    slug: "arduino-project",
    categoryId: "electronics",
    title: "Arduino Project - Automatic Night Light",
    marathiTitle: "पहिला project — LDR automatic night light: wiring, कोड, hysteresis, troubleshooting",
    level: "intermediate",
    minutes: 35,
    summary: "शेवटचा capstone: LDR automatic night light. पार्ट्स, ब्रेडबोर्ड wiring, थ्रेशोल्ड व hysteresis कोड, flicker कसे टाळायचे, troubleshooting आणि पुढील upgrades.",
    sections: [
      {
        title: "पहिला project — LDR automatic night light wiring, कोड, hysteresis, troubleshooting म्हणजे काय?",
        content: "शेवटचा capstone: LDR automatic night light. पार्ट्स, ब्रेडबोर्ड wiring, थ्रेशोल्ड व hysteresis कोड, flicker कसे टाळायचे, troubleshooting आणि पुढील upgrades.\nउद्देश: अंधारात LED आपोआप उजळते — automatic night light.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? पहिला project — LDR automatic night light wiring, कोड, hysteresis, troubleshooting चे फायदे आणि महत्त्व",
        content: "\"पहिला project — LDR automatic night light wiring, कोड, hysteresis, troubleshooting\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ चुकल्यास: +/− उलट नाही ना, 10kΩ कुठे आहे — ही दोन गोष्टी प्रथम तपासा.\n✗ सामान्य समस्या:\n• LED कधीही झळकत नाही → threshold चुकीचा; +/− उलट नाही ना.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "प्रोजेक्ट — automatic night light",
        content: "उद्देश: अंधारात LED आपोआप उजळते — automatic night light.\n\nआवश्यक पार्ट्स: Arduino Uno, LDR + 10kΩ, LED + 220Ω, ब्रेडबोर्ड, जोड तारा.\n\nकाम: LDR वाचन कमी → threshold पेक्षा कमी → LED ON. प्रकाश परत → LED OFF.\n\nपद्धत: १. hardware wiring, २. कोड, ३. threshold समायोजन, ४. चाचणी.",
      },
      {
        title: "Wiring — ब्रेडबोर्ड",
        content: "सर्वात आधी सर्किट ब्रेडबोर्डवर जोडा.\n\nLDR divider: 5V → LDR → node A → 10kΩ → GND; node A → A0.\nLED: pin 9 → 220Ω → LED anode (+); cathode (−) → GND.\n\nव्यवस्था: ground नेहमी एकाच रेलवर (काळी तार). वीज आणि signal तारा वेगळ्या मांडा. जोड बिंदू घट्ट.\n\nतपासणी: ब्रेडबोर्डच्या rows मधील 5 अड्डे सामायिक. + रेल आणि − रेल वेगवेगळ्या.\n\nचुकल्यास: +/− उलट नाही ना, 10kΩ कुठे आहे — ही दोन गोष्टी प्रथम तपासा.",
      },
      {
        title: "कोड — थ्रेशोल्ड ने ON/OFF",
        content: "कोड दोन झोनमध्ये: setup आणि loop.\nA0 वाचन threshold पेक्षा कमी → LED ON. अधिक → LED OFF. delay(200) — लहान विश्रांती.",
        code: `int ldr = A0;
int led = 9;
int threshold = 500;
void setup() {
  pinMode(led, OUTPUT);
  Serial.begin(9600);
}
void loop() {
  int v = analogRead(ldr);
  if (v < threshold) digitalWrite(led, HIGH);
  else digitalWrite(led, LOW);
  delay(200);
}`,
        codeLanguage: "cpp",
        output: `480
492
467`,
      },
      {
        title: "Flicker टाळणे — hysteresis",
        content: "थ्रेशोल्डच्या आसपास quick फेरफार झाल्यास LED कंपित होतो. ते टाळण्यासाठी hysteresis वापरतात.\n\nकल्पना: ON करण्यासाठी lower threshold (400). OFF करण्यासाठी higher threshold (600). मध्ये (400-600) — मागील स्थिती कायम.\n\nदिवसाचे वाचन 800+, रात्रीचे 200-. दोन thresholds संरक्षण तयार करतात.\nहा pattern thermostat, sensor faders यांसारख्या auto-systems मध्ये वापरतात.",
        code: `bool on = false;
void loop() {
  int v = analogRead(ldr);
  if (v < 400) on = true;
  else if (v > 600) on = false;
  digitalWrite(led, on ? HIGH : LOW);
  delay(100);
}`,
        codeLanguage: "cpp",
        output: `ON
ON
OFF`,
      },
      {
        title: "Troubleshooting",
        content: "प्रोजेक्ट चालत नसेल तर चरण-दर-चरण तपासा.\n\nसामान्य समस्या:\n• LED कधीही झळकत नाही → threshold चुकीचा; +/− उलट नाही ना.\n• LED सतत ON → LDR जमिनीवर/प्रकाशात; wiring लहान झाले.\n• वाचन धडधडतं → 100nF capacitor A0 वर लावा; तारा पुरेशा लांब होऊ नका.\n• Serial रिकामे → baud rate 9600 जुळते का; pin बरोबर.\n\nटूल्स: multimeter — A0 वर voltage मोजा. Serial.println(v) — नेहमी वाचन दिसू द्या.\nमंत्र: एकावेळी एक बदल. power पुन्हा reset करा.",
      },
      {
        title: "पुढील upgrades",
        content: "मूळ night light काम करतो — तो वाढवता येतो.\n\nकल्पना १ — potentiometer वर तिसरा analog input (A2). map() ने 0-255 brightness. analogWrite(led, brightness) — PWM.\n\nकल्पना २ — LED चे तेज 3 चरणांत वाढवा (fade). delay ने नियंत्रित संक्रमण.\n\nकल्पना ३ — motion sensor + buzzer अलार्म.\n\nकल्पना ४ — LDR + transistor ने मोठा दिवा चालवा. PIR motion सह.\n\nप्रत्येक upgrade = एक नवा mini-project. नेहमी एकावेळी एक फीचर वाढवा व तपासा.",
      },
      {
        title: "सारांश",
        content: "Automatic night light चे मुद्दे:\n\n• उद्देश — अंधारात LED आपोआप ON.\n• Wiring — divider (A0) + LED (pin 9).\n• कोड — analogRead + threshold ने ON/OFF.\n• Flicker — दोन thresholds (hysteresis) ने टाळता.\n• Troubleshooting — serial + multimeter + sequential.\n• पुढे upgrade — pot, fade, buzzer, transistor.\n\nसंपूर्ण सर्किट wiring करा, कोड अपलोड करून threshold जुळवा, 100nF जोडून फरक बघा, एक upgrade (PWM brightness) जोडा.",
      },
    ],
    practiceQuestions: [
      "night light मध्ये LED कधी ON होतो?",
      "Hysteresis म्हणजे काय आणि का वापरतात?",
      "LED कधीही झळकत नाही — कुठून तपासणी सुरू कराल?",
      "AnalogWrite मध्ये 0-255 म्हणजे काय?",
    ],
    quiz: [
      { question: "night light साठी कोणता sensor?", options: ["LDR", "बटण", "मोटर", "buzzer"], correct: 0 },
      { question: "LED ON करण्यासाठी वाचन threshold पेक्षा?", options: ["कमी", "अधिक", "समान", "काहीही"], correct: 0 },
      { question: "Flicker टाळण्यासाठी काय वापरतात?", options: ["दोन thresholds (hysteresis)", "एकthreshold", "delay लांब", "wire लांब"], correct: 0 },
      { question: "LED तेज बदलण्यासाठी कोणता आदेश?", options: ["analogWrite", "digitalWrite", "delay", "map"], correct: 0 },
      { question: "A0 वर वाचन स्थिर करण्यासाठी?", options: ["100nF capacitor", "मोठा LED", "जास्त delay", "पोटेंशियोमीटर"], correct: 0 },
    ],
    related: ["arduino-sensor", "arduino-basics", "diy-projects"],
    prev: "arduino-sensor",
    next: "arduino-ultrasonic",
  },
];