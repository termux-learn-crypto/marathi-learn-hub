import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 4 — Arduino Advanced ===
// arduino-ultrasonic → arduino-servo → arduino-display → arduino-ir
// → arduino-motor (पुढे iot-intro — electronics-level5.ts)

export const electronicsLevel4: Tutorial[] = [
  {
    slug: "arduino-ultrasonic",
    categoryId: "electronics",
    title: "Ultrasonic Sensor",
    marathiTitle: "HC-SR04 ultrasonic — अंतर मापन, wired measuring, distance alarm",
    level: "intermediate",
    minutes: 30,
    summary: "HC-SR04 ultrasonic sensor कसे काम करते, trig/echo wiring, पल्सिन गणित, सेंटिमीटरमध्ये अंतर आणि distance alarm प्रोजेक्ट.",
    sections: [
      {
        title: "Ultrasonic sensor — कसे काम करते",
        content: "HC-SR04 आवाज (ultrasonic) पाठवून परत येण्याची वेळ मोजून अंतर सांगते.\n\nतत्त्व — echolocation:\n\t• Trigger — लहान sound pulse सोडतो (40kHz).\n\t• अडथळा आदळून परत येतो.\n\t• Echo pin वर परतलेला pulse वेळ सांगतो.\n\nसाऊंड वेग:\n\t• हवेत ~343 m/s.\n\t• म्हणून दोन्ही दिशांचा प्रवास — अर्धा करायला हवा.\n\nवैशिष्ट्य:\n\t• अंतर — 2cm ते 400cm.\n\t• कोनीय क्षेत्र — ~15°.\n\nवापर:\n\t• Parking sensor, robot obstacle detection, level measuring.\n\nसराव: धडपडू नका — trigger/echo connection आधी ठीक करा.",
      },
      {
        title: "HC-SR04 — wiring",
        content: "चार pins: VCC (5V), Trig, Echo, GND.\n\nVCC → Arduino 5V.\nGND → Arduino GND.\nTrig → एक digital pin, उदा. 9.\nEcho → दुसरा digital pin, उदा. 10.\n\nटीप — Echo output 5V:\n\t• HC-SR04 5V ला चालतो — Arduino 5V सह चालेल.\n\t• ESP8266/ESP32 (3.3V) सह voltage divider हवा.\n\nसर्किट:\n\t• आवश्यकता — sensor समोर अडथळा मोकळा.\n\t• Wiring double-check — चुका प्रचलित.\n\nसराव: बोर्डवर wiring करून serial monitor मध्ये वाचन होते का बघा.",
      },
      {
        title: "पल्सिन — trig/echo वाचन",
        content: "Arduino ने trigger pulse पाठवून echo pulse मोजायचा.\n\nकोड:\n\tconst int trig = 9;\n\tconst int echo = 10;\n\tvoid setup() {\n\t  Serial.begin(9600);\n\t  pinMode(trig, OUTPUT);\n\t  pinMode(echo, INPUT);\n\t}\n\tvoid loop() {\n\t  digitalWrite(trig, LOW);\n\t  delayMicroseconds(2);\n\t  digitalWrite(trig, HIGH);\n\t  delayMicroseconds(10);\n\t  digitalWrite(trig, LOW);\n\t  long dur = pulseIn(echo, HIGH);\n\t  Serial.println(dur);\n\t  delay(100);\n\t}\n\nपहिले:\n\t• Trig ने 10µs HIGH.\n\t• Echo HIGH — आवाज गेल्यापासून ते परत येईपर्यंत.\n\t• pulseIn — तो काळ microseconds मध्ये.\n\nसराव: Serial Monitor मध्ये dur value हलताना दिसते का?",
      },
      {
        title: "अंतर मोजण्याचे गणित",
content: "ध्वनीची गती व pulse वेळ वापरून अंतर.\n\nसूत्र:\n\t• distance = (dur × speed) / 2.\n\t• speed = 0.0343 cm/µs.\n\t• म्हणून distance_cm = dur × 0.0343 / 2 = dur × 0.01715.\n\nकोडमध्ये:\n\tfloat dist = dur * 0.01715;\n\nचिंता:\n\t• ध्वनी दोनदा प्रवास करतो — /2 अनिवार्य.\n\t• उदा. 100µs → ~1.7cm.\n\nSerial मध्ये:\n\tSerial.print(dist);\n\tSerial.println(\" cm\");\n\nसतत नवे वाचन:\n\t• delay 50-100ms पुरेसा.\n\t• fast rotation — 20Hz पर्यंत.\n\nसराव: शासकाने मोजलेल्या अंतराशी तुलना करून सुधारणा करा.",
      },
      {
        title: "प्रोजेक्ट — distance alarm",
        content: "अंतर कमी झाल्यावर buzzer वाजला पाहिजे.\n\nभाग:\n\t• HC-SR04, passive/active buzzer, LED.\n\nतर्क:\n\t• dist < 20cm → alarm + LED.\n\t• नाहीतर शांत.\n\nकोड — बदल:\n\tint buzz = 6;\n\tif (dist < 20) {\n\t  digitalWrite(buzz, HIGH);\n\t  digitalWrite(LED, HIGH);\n\t} else {\n\t  digitalWrite(buzz, LOW);\n\t  digitalWrite(LED, LOW);\n\t}\n\nटीप:\n\t• Active buzzer — dc control.\n\t• Passive — tone() सह beep patterns.\n\nविस्तार:\n\t• LED gradient — dist नुसार PWM.\n\t• Serial तापमान log.\n\nसराव: threshold 20cm वरून 40cm करून संवेदनशीलता बघा.",
      },
      {
        title: "आजचा सारांश",
        content: "HC-SR04 चे सहा मुद्दे:\n\n• काम — sound pulse + echo time.\n• Wiring — VCC/Trig/Echo/GND.\n• पल्सिन — pulseIn dur code.\n• गणित — dur × 0.01715 cm.\n• ध्वनी दोनदा — /2 सक्तीचे.\n• प्रोजेक्ट — distance alarm.\n\nआजचे प्रॅक्टिस:\n\t०१. Serial मध्ये dur व distance दोन्ही दाखवा.\n\t०२. शासकासोबत अचूकता तपासा.\n\t०३. Buzzer alarm + LED प्रोजेक्ट.\n\t०४. Threshold dynamic करा.\n\nपुढील पाठ — servo: कोन नियंत्रण.",
      },
    ],
    practiceQuestions: [
      "HC-SR04 अंतर कसे काढते?",
      "distance सूत्रात /2 का आहे?",
      "Echo pin 5V प्रकरणात ESP8266 सह काय हवे?",
      "Distance alarm मध्ये buzzer कसे वाजवायचे?",
    ],
    quiz: [
      { question: "HC-SR04 अंतर कसे ठरवते?", options: ["ध्वनी परत येण्याची वेळ", "प्रकाश", "उष्णता", "गंध"], correct: 0 },
      { question: "duration चे cm मध्ये रूपांतर?", options: ["dur × 0.01715", "dur × 2", "dur ÷ 4", "dur × 100"], correct: 0 },
      { question: "Echo pulse वाचण्याचा function?", options: ["pulseIn", "digitalRead", "analogRead", "delay"], correct: 0 },
      { question: "Trig pulse किती मुदतीचा?", options: ["10µs", "1s", "10ms", "0.1µs"], correct: 0 },
      { question: "अंतर alarm देताना कोणता sensing?", options: ["dist < threshold", "dist = 0", "dur मोजून नाही", "always"], correct: 0 },
    ],
    related: ["arduino-project", "arduino-sensor", "arduino-basics"],
    prev: "arduino-project",
    next: "arduino-servo",
  },
  {
    slug: "arduino-servo",
    categoryId: "electronics",
    title: "Servo Motor Pro",
    marathiTitle: "Arduino सह servo — library, sweep, potentiometer control, auto-gate",
    level: "intermediate",
    minutes: 25,
    summary: "Servo library वापर, 0-180° कोन नियंत्रण, sweep, potentiometer द्वारे manual control आणि automatic gate चे प्रोजेक्ट.",
    sections: [
      {
        title: "Servo म्हणजे काय",
        content: "Servo 0° ते 180° पर्यंत नेमका कोन नियंत्रित करतो.\n\nआतून:\n\t• Small motor + gearbox.\n\t• Potentiometer — सध्याचा कोन वाचतो.\n\t• Control circuit — desired vs actual तुलना.\n\nकारण:\n\t• position control अचूक.\n\t• continuous rotation नाही — angle देतो.\n\nवापर:\n\t• Robotic arm, camera gimbal, auto-gate.\n\nतारा:\n\t• Brown — GND.\n\t• Red — 5V.\t// मोठ्या servo ला बाह्य वीज\n\t• Signal — PWM pin (9/10).\n\nसराव: datasheet प्रमाणे angle range तपासा — सगळे 180° नसतात.",
      },
      {
        title: "Servo library — जोडणी",
        content: "Arduino IDE मध्ये Servo library आधीच आहे.\n\nसमाविष्ट करा:\n\t#include <Servo.h>\n\tServo myServo;\n\nsetup:\n\tvoid setup() {\n\t  myServo.attach(9);   // signal pin\n\t}\n\nमहत्त्वाचे:\n\t• attach(pin) — pin नाही तर PWM सक्षम.\n\t• एका program मध्ये अनेक servo — attach दोन pins.\n\t• 9/10 चा वापर timer सोबत compatible.\n\nचुका:\n\t• attach न करता write — काही होत नाही.\n\t• जास्त भार — servo खेचेल, पॉवर खर्च.\n\nसराव: library उदाहरण Knob — servo move करा.",
      },
      {
        title: "Sweep — कोड",
        content: "Servo एका टोकापासून दुसऱ्या टोकापर्यंत फिरवा.\n\nकोड:\n\t#include <Servo.h>\n\tServo s;\n\tvoid setup() { s.attach(9); }\n\tvoid loop() {\n\t  for (int a = 0; a <= 180; a++) {\n\t    s.write(a);\n\t    delay(15);\n\t  }\n\t  for (int a = 180; a >= 0; a--) {\n\t    s.write(a);\n\t    delay(15);\n\t  }\n\t}\n\nतपशील:\n\t• write(0) — डावीकडे.\n\t• write(90) — मध्य.\n\t• write(180) — उजवीकडे.\n\nनोंद:\n\t• delay — प्रत्येक पाऊल गतीला स्थिरता.\n\t• जास्त speed → जॅमिंग होऊ शकते.\n\nसराव: delay बदलून गती चांगली समजण्यासाठी वापरा.",
      },
      {
        title: "प्रोजेक्ट — automatic gate",
        content: "अडथळा दिसल्यावर gate उघडतो — PIR किंवा ultrasonic.\n\nभाग:\n\t• Servo, ultrasonic, मोठा बार.\n\nतर्क:\n\t• dist < 30cm → servo 90° (उघडा).\n\t• अन्यथा → servo 0° (बंद).\n\nकोड — भाग:\n\tif (dist < 30) {\n\t  s.write(90);\n\t} else {\n\t  s.write(0);\n\t}\n\nटीप:\n\t• gate हलका ठेवा — नाहीतर servo त्रास.\n\t• मोठा gate — metal gear servo/ servo + limit switch.\n\t• Opening delay — smooth फिरवणी.\n\nविस्तार:\n\t• Manual override — button.\n\t• Status LED — open/close.\n\nसराव: gate प्रोजेक्ट — ultrasonic + servo एकत्र करून चालवा.",
      },
      {
        title: "PWM व servo — तपशील",
        content: "Servo signal 50Hz PWM pulse असतो.\n\nPulse width:\n\t• 1ms ~ 0°.\n\t• 1.5ms ~ 90°.\n\t• 2ms ~ 180°.\n\nLibrary आत हेच करते:\n\t• write() — angle → pulse width.\n\t• म्हणून थेट PWM हाताळण्याऐवजी library सोपी.\n\nजर manual:\n\t• timer micros/second मोजावे.\n\t• Future precise — library वापरा.\n\nचेतना:\n\t• Serial servo — SG90 चा सामान्य torque.\n\t• जास्त १०+ ग्रॅम load — servo ओढेल नाही.\n\nसराव: different servo brands वर write() वर वाचन तपासा.",
      },
      {
        title: "आजचा सारांश",
        content: "Servo चे सहा मुद्दे:\n\n• position control — 0-180°.\n• library — attach/write.\n• Sweep — loop + delay.\n• potentiometer — manual angle.\n• Auto-gate — ultrasonic trigger.\n• PWM — pulse width द्वारे कोन.\n\nआजचे प्रॅक्टिस:\n\t०१. Sweep program चालवा.\n\t०२. Potentiometer ने servo control.\n\t०३. Auto-gate प्रोजेक्ट.\n\t०४. विविध angles वर servo accuracy तपासा.\n\nपुढील पाठ — display: LCD 16x2.",
      },
    ],
    practiceQuestions: [
      "Servo चे कोन कसे नियंत्रित होते?",
      "attach() कसे महत्त्वाचे आहे?",
      "Auto-gate PROJECT मध्ये servo कसा ट्रिगर झाला?",
      "Servo जॅम झाल्यावर काय होते?",
    ],
    quiz: [
      { question: "Servo attach कोणत्या pin वर सामान्य?", options: ["9/10", "13", "A0", "GND"], correct: 0 },
      { question: "Servo positional range?", options: ["0-180°", "0-360°", "0-90°", "सतत घूर्णन"], correct: 0 },
      { question: "Servo library चे मुख्य function?", options: ["write(angle)", "step()", "pulse()", "readSerial (बिना)"], correct: 0 },
      { question: "90° चा pulse width?", options: ["1.5ms", "1ms", "2ms", "5ms"], correct: 0 },
      { question: "Auto-gate मध्ये servo कोणत्या trigger ने उघडतो?", options: ["ultrasonic/PIR", "वेळ", "temperature", "Light"], correct: 0 },
    ],
    related: ["arduino-ultrasonic", "arduino-project", "arduino-motor"],
    prev: "arduino-ultrasonic",
    next: "arduino-display",
  },
  {
    slug: "arduino-display",
    categoryId: "electronics",
    title: "LCD Display",
    marathiTitle: "LCD 16x2 + I2C — LiquidCrystal library, sensor data display, scroll",
    level: "intermediate",
    minutes: 30,
    summary: "LCD 16x2 ची ओळख, I2C adapter wiring, LiquidCrystal_I2C library, सेन्सर डेटा दाखवणे, scroll/text format आणि decoration.",
    sections: [
      {
        title: "LCD 16x2 — ओळख",
        content: "LCD 16x2 — 16 columns, 2 rows character display.\n\nआकार:\n\t• 16 characters × 2 lines.\n\t• पिन मोठे — 16 pins (parallel).\n\t• I2C module सह फक्त 4 तारा.\n\nवापर:\n\t• Status, sensor readings, clocks.\n\t• Backlight — वाचनीयता.\n\nLCD मूलभूत:\n\t• RS, E, D4-D7.\n\t• VO — contrast (potentiometer ने).\n\t• LED+/LED− — backlight.\n\nम्हणून:\n\t• I2C module — connections कमी करतो.\n\t• म्हणून सर्वात सोपा मार्ग प्रोजेक्टसाठी.\n\nसराव: LCD बोर्डवर रोखून व पिन ओळखा.",
      },
      {
        title: "I2C adapter — wiring",
        content: "I2C LCD module फक्त 4 तारा वापरतो:\n\nVCC → 5V\nGND → GND\nSDA → A4\nSCL → A5\n\n(Arduino Uno — A4/A5; Mega — 20/21; ESP8266 — D1/D2.)\n\nतयारी:\n\t• I2C address शोधा — I2C Scanner केवळ.\n\t• Common 0x27 / 0x3F.\n\nटीप:\n\t• 5V logic — 3.3V boards सह level shifter.\n\t• पुल-अप resitors बोर्डवर.\n\nसराव: I2C scanner compile + scan करून address मिळवा.",
      },
      {
        title: "LiquidCrystal library",
content: "LiquidCrystal_I2C library (by Frank de Brabander) वापरा.\n\nकोड:\n\t#include <LiquidCrystal_I2C.h>\n\tLiquidCrystal_I2C lcd(0x27, 16, 2);\n\tvoid setup() {\n\t  lcd.init();\n\t  lcd.backlight();\n\t  lcd.setCursor(0, 0);\n\t  lcd.print(\"Hello Marathi!\");\n\t}\n\tvoid loop() {}\n\nफंक्शन्स:\n\t• lcd.init() — सुरुवात.\n\t• setCursor(col, row) — स्थान.\n\t• print(text) — दाखवा.\n\t• clear() — पुसा.\n\nहळू:\n\t• print numeric — lcd.print(value).\n\t• print(value) — संख्या दाखवणे.\n\nसराव: Hello + दुसरे text दोनही rows वर दाखवा.",
      },
      {
        title: "सेन्सर data दाखवणे",
content: "Sensor वाचन LCD वर दाखवा — उदा. temperature/light.\n\nकोड — light sensor:\n\tint val = analogRead(A0);\n\tlcd.setCursor(0, 0);\n\tlcd.print(\"Light: \");\n\tlcd.print(val);\n\tlcd.print(\"   \");\n\nटीप:\n\t• नवीन update आधी clear — stale text.\n\t• setCursor + print मध्ये spaces (टेक्स्ट ओव्हरराइटसाठी).\n\t• numeric width — print(value) आधी append spaces.\n\nअनेक data:\n\t• row 0 — एक; row 1 — दुसरा.\n\t• Sensor read → show — लहान loop.\n\nसराव: LDR/thermistor २ value दोन rows वर दाखवा.",
      },
      {
        title: "Scroll/format",
        content: "Text scroll तसेच format नियंत्रण.\n\nscroll — उदा. long message:\n\tlcd.setCursor(col, row);\n\tlcd.print(message);\n\tखूप मजकूर — fps पेक्षा जास्त तर scroll.\n\nautoscroll():\n\t• आपोआप नवीन डावीकडे जाते.\n\t• घ्या दूर — clear प्रत्येक वेळी.\n\nformat:\n\t• मध्यवर्ती — setCursor ने spaces.\n\t• right-align — argument सोबत.\n\t• fixed-width — spaces संरेखन.\n\nस्थिर update:\n\t• same area overwrite — spaces.\n\t• LCD आत एकच स्थान — 16×2 = 32 characters.\n\nसराव: timer — सेकंद scroll करत चाललेला.",
      },
      {
        title: "आजचा सारांश",
        content: "LCD चे सहा मुद्दे:\n\n• 16x2 — 16 columns × 2 rows.\n• I2C — फक्त 4 तारा (A4/A5).\n• Scanner — address 0x27/0x3F.\n• Library — LiquidCrystal_I2C.\n• setCursor/print/clear — मुख्य फंक्शन्स.\n• स्पेस/ओव्हरराइट — stale text पुसण्यासाठी.\n\nआजचे प्रॅक्टिस:\n\t०१. I2C Scanner चालवा.\n\t०२. Hello दोन rows वर.\n\t०३. Sensor value display.\n\t०४. Scroll clock.\n\nपुढील पाठ — IR remote: टीव्ही रिमोट नियंत्रण.",
      },
    ],
    practiceQuestions: [
      "I2C LCD मध्ये फक्त किती तारा वापरतात?",
      "I2C address कसे शोधायचे?",
      "print() नंतर stale text कसे टाळायचे?",
      "LCD मध्ये scroll कसे करायचे?",
    ],
    quiz: [
      { question: "I2C LCD च्या तारा?", options: ["4 (VCC/GND/SDA/SCL)", "8", "16", "2"], correct: 0 },
      { question: "Arduino Uno चे SDA/SCL पिन?", options: ["A4/A5", "0/1", "9/10", "13"], correct: 0 },
      { question: "LCD library चे init फंक्शन?", options: ["lcd.init()", "lcd.begin(pin)", "lcd.start()", "lcd.setup()"], correct: 0 },
      { question: "Text स्थान नियंत्रणासाठी कोणते?", options: ["setCursor()", "delay()", "tone()", "digitalWrite()"], correct: 0 },
      { question: "I2C common address?", options: ["0x27", "0xFF", "12", "A4"], correct: 0 },
    ],
    related: ["arduino-sensor", "arduino-basics", "iot-temp-monitor"],
    prev: "arduino-servo",
    next: "arduino-ir",
  },
  {
    slug: "arduino-ir",
    categoryId: "electronics",
    title: "IR Remote Control",
    marathiTitle: "IR remote — receiver, IRremote library, codes वाचणे, LED प्रोजेक्ट",
    level: "intermediate",
    minutes: 30,
    summary: "IR remote कसे काम करते, IR receiver wiring, IRremote library ने codes वाचणे, remote ने LED control आणि multiple codes व्यवस्था.",
    sections: [
      {
        title: "IR remote — कसे काम करते",
        content: "IR remote प्रकाशाच्या pulse ने codes पाठवते.\n\nतंत्र:\n\t• LED — invisible IR प्रकाश.\n\t• 38kHz carrier — receiver ला स्पष्ट.\n\t• Data — pulse widths च्या गणनेतून.\n\nप्रोटोकॉल:\n\t• NEC, Sony, RC-5 असेच.\n\t• प्रत्येक बटण — unique 32-bit code.\n\nReceiver:\n\t• TSOP38238/VS1838B — IR प्रकाश सेन्स.\n\t• Digital output — decoded bits.\n\nवापर:\n\t• टीव्ही/AC remote प्रोजेक्टमध्ये.\n\t• TV-B-Gone नाही — नीट वापरा.\n\nसराव: remote च्या बटणांवर एकच प्रोटोकॉल आहे का बघा.",
      },
      {
        title: "IR receiver wiring",
        content: "IR receiver — 3 pins.\n\nजोडणी:\n\t• GND → GND.\n\t• VCC / VS → 5V.\n\t• OUT → digital pin (उदा. 11).\n\nचेतावणी:\n\t• मॉड्यूल — VCC/Signal/GND.\n\t• काही receiver + 3.3V सही — 5V निवडा.\n\nटीप:\n\t• शरीरा आपल्यापासून signal हवे.\n\t• Diffuse light — interference कमी.\n\nसराव: टीव्ही remote बॉक्सवर धरून वाचन होते का बघा.",
      },
      {
        title: "IRremote library — codes वाचणे",
        content: "IRremote library — वाचून codes दाखवते.\n\nकोड (IRremote):\n\t#include <IRremote.h>\n\tconst int RECV_PIN = 11;\n\tIRrecv irrecv(RECV_PIN);\n\tdecode_results results;\n\tvoid setup() {\n\t  Serial.begin(9600);\n\t  irrecv.enableIRIn();\n\t}\n\tvoid loop() {\n\t  if (irrecv.decode(&results)) {\n\t    Serial.println(results.value, HEX);\n\t    irrecv.resume();\n\t  }\n\t}\n\nचरण:\n\t• enableIRIn() — receiver चालू.\n\t• decode(&results) — code आला?\n\t• resume() — पुन्हा तयार.\n\nSerial monitor मध्ये:\n\t• प्रत्येक बटण — वेगळा HEX code.\n\t• ते नोंदवा — पुढे तुलना.\n\nसराव: 5 बटणांचे codes नोंद करून ठेवा.",
      },
      {
        title: "प्रोजेक्ट — remote ने LED",
        content: "रिमोट बटण दाबल्यावर LED कंट्रोल करा.\n\nकोड:\n\tunsigned long ON_O=0xFFA25D;  // उदा. NEC\n\tvoid loop() {\n\t  if (irrecv.decode(&results)) {\n\t    unsigned long v = results.value;\n\t    if (v == ON_O) {\n\t      digitalWrite(LED, !digitalRead(LED));\n\t    }\n\t    irrecv.resume();\n\t  }\n\t}\n\nmodels:\n\t• SWITCH — toggle.\n\t• 1/2/3 — विविध LED.\n\t• Brightness — +/− इरादा.\n\nनोंद:\n\t• repeat codes — long press वर सारखे value.\n\t• switch case — अनेक buttons गोंधळ नाही.\n\nसराव: 3 LEDs + 3 बटण नियंत्रण करा.",
      },
      {
        title: "दोन remote — code संघर्ष",
        content: "विविध remote एकत्र वापरताना codes संघर्ष.\n\nसमस्या:\n\t• दोन remote सारखा protocol — संघर्ष शक्य.\n\t• TV remote — TV चा control मध्ये नका घेऊ.\n\nउपाय:\n\t• वेगळे protocol/sender निवडा.\n\t• Codes वर unique check.\n\nविस्तार संकल्पना:\n\t• appliance control — one remote अनेक devices.\n\t• Home automation बिट.\n\nटीप:\n\t• IR range — कमी ठेवून deliberate.\n\t• Blast — multiple LEDs distance.\n\nसराव: दुसरा remote वर code conflict नीट बघा.",
      },
      {
        title: "आजचा सारांश",
        content: "IR चे सहा मुद्दे:\n\n• काम — IR pulse codes.\n• Receiver wiring — OUT/5V/GND.\n• Library — IRremote.\n• Codes — HEX मध्ये नोंद.\n• LED control — button map.\n• संघर्ष — protocol/गोंधळ नीट सांभाळा.\n\nआजचे प्रॅक्टिस:\n\t०१. Codes दाखवणारा program.\n\t०२. एक LED toggle.\n\t०३. तीन LEDs + तीन buttons.\n\t०४. Protocol निरीक्षण.\n\nपुढील पाठ — motor driver: गती नियंत्रण.",
      },
    ],
    practiceQuestions: [
      "IR remote codes कसे निर्माण होतात?",
      "IRremote library मध्ये decode() कशाला?",
      "दोन remote संघर्ष कसे टाळायचे?",
      "Long press repeat value — कसे हाताळायचे?",
    ],
    quiz: [
      { question: "IR carrier frequency सामान्य?", options: ["38kHz", "100Hz", "1MHz", "5GHz"], correct: 0 },
      { question: "IRremote मध्ये code वाचण्याचे function?", options: ["decode()", "read()", "listen()", "fetch()"], correct: 0 },
      { question: "Codes कोणत्या format मध्ये वाचतात?", options: ["HEX", "Binary only", "Float", "String"], correct: 0 },
      { question: "Receiver चा OUT pin ने काय केले?", options: ["digital pin", "analog", "PWM", "GND"], correct: 0 },
      { question: "एक बटण toggle करताना काय?", options: ["value compare + toggle", "delay फक्त", "print", "loop बंद"], correct: 0 },
    ],
    related: ["arduino-display", "arduino-basics", "arduino-sensor"],
    prev: "arduino-display",
    next: "arduino-motor",
  },
  {
    slug: "arduino-motor",
    categoryId: "electronics",
    title: "Motor Driver",
    marathiTitle: "L298N motor driver — wiring, PWM speed, direction, घरगुती fan",
    level: "intermediate",
    minutes: 30,
    summary: "Motor driver गरज, L298N wiring, PWM ने speed control, H-bridge direction, घरगुती fan प्रोजेक्ट आणि debugging टिप्स.",
    sections: [
      {
        title: "Motor चालवण्याच्या गरजा",
        content: "Arduino थेट motor चालवू शकत नाही.\n\nकारण:\n\t• Motor ला 100mA+ current लागते.\n\t• Arduino pin — 20-40mA.\n\t• Back-EMF — spikes Arduino खराब करतात.\n\nम्हणून driver/MOSFET:\n\t• Signal → power पूल.\n\t• Speed — PWM.\n\t• Direction — H-bridge.\n\nथ्री मोठ्या गोष्टी:\n\t• Current rating driver चा.\n\t• Flyback diodes.\n\t• जास्त भार — heatsink.\n\nसराव: आपल्या motor चा max current data sheet मध्ये शोधा.",
      },
      {
        title: "L298N driver — wiring",
        content: "L298N — classic dual H-bridge (sold module).\n\nजोडणी:\n\t• 5V → Arduino 5V (?)\t// लॉजिक 5V\n\t• Motor power → VS (उदा. 12V बाह्य).\n\t• GND → common GND Arduino सोबत.\n\t• Enable A/B + IN1-IN4 → Arduino pins.\n\nएका motor साठी:\n\t• IN1, IN2 — direction.\n\t• ENA (PWM) — speed.\n\nमहत्त्वाचे:\n\t• NOT थेट 5V pin वर — वेगळा power.\n\t• Common GND अनिवार्य.\n\nसराव: L298N module wiring आकृतीवरून नीट करा.",
      },
      {
        title: "PWM speed control",
        content: "Speed — PWM duty cycle ने.\n\nकोड:\n\tint enA = 9;   // PWM\n\tint in1 = 8, in2 = 7;\n\tvoid setup() {\n\t  pinMode(enA, OUTPUT);\n\t  pinMode(in1, OUTPUT);\n\t  pinMode(in2, OUTPUT);\n\t}\n\tvoid loop() {\n\t  digitalWrite(in1, HIGH);\n\t  digitalWrite(in2, LOW);\n\t  analogWrite(enA, 150);   // 0-255\n\t}\n\nतपशील:\n\t• analogWrite 0-255 — 255 = full.\n\t• Enable pin PWM सक्षम.\n\t• duty कमी — गती कमी.\n\nटीप:\n\t• Slow PWM — motor गाणे/झटके.\n\t• Smooth acceleration — ramp loop.\n\nसराव: 60/120/240 वर वेगातील फरक मोजा.",
      },
      {
        title: "Direction — H-bridge",
        content: "दिशा — IN1/IN2 कोण HIGH.\n\nForward:\n\t• IN1 HIGH, IN2 LOW.\n\nBackward:\n\t• IN1 LOW, IN2 HIGH.\n\nStop:\n\t• दोन्ही LOW — motor आला (free).\n\t• दोन्ही HIGH — brake.\n\nकोड — toggle:\n\tif (digitalRead(button)) {\n\t  digitalWrite(in1, LOW);\n\t  digitalWrite(in2, HIGH);\n\t} else {\n\t  digitalWrite(in1, HIGH);\n\t  digitalWrite(in2, LOW);\n\t}\n\nदोन्हीमध्ये नको:\n\t• IN1 HIGH + IN2 HIGH न ठेवा — short.\n\nसराव: button ने direction toggle प्रोजेक्ट करा.",
      },
      {
        title: "प्रोजेक्ट — घरगुती fan",
        content: "Arduino नियंत्रित fan — speed + direction.\n\nभाग:\n\t• L298N, मोठा DC motor + fan blade.\n\t• Potentiometer — speed.\n\t• Button — direction.\n\nकोड — speed by pot:\n\tint sp = analogRead(A0) / 4;   // 0-255\n\tanalogWrite(enA, sp);\n\n+ direction toggle:\n\tif (digitalRead(btn)) {…}\n\nटीप:\n\t• 12V motor — VS 12V बाह्य वीज.\n\t• fan आघात नको — enclosure.\n\t• slow start — ramp up सहज.\n\nसराव: potentiometer + button सह dashboard करा.",
      },
      {
        title: "आजचा सारांश",
        content: "Motor driver चे सहा मुद्दे:\n\n• गरज — Arduino पासून motor चालणार नाही.\n• L298N — dual H-bridge module.\n• Wiring — IN/Enable + बाह्य power.\n• Speed — analogWrite(en, 0-255).\n• Direction — IN1/IN2 logic.\n• प्रोजेक्ट — pot + button fan.\n\nआजचे प्रॅक्टिस:\n\t०१. लहान motor पूल वर चालवा.\n\t०२. Speed levels तपासा.\n\t०३. Direction toggle.\n\t०४. Fan प्रोजेक्ट एकत्र करा.\n\nपुढील पाठ — IoT: ESP8266/ESP32 ओळख.",
      },
    ],
    practiceQuestions: [
      "Arduino थेट motor का चालवत नाही?",
      "L298N मध्ये ENA कशाला?",
      "Direction बदलताना IN1/IN2 कसे बदलतात?",
      "घरगुती fan मध्ये speed कशी करता?",
    ],
    quiz: [
      { question: "Arduino pin चा max current?", options: ["~20-40mA", "1A", "500mA", "10A"], correct: 0 },
      { question: "Speed नियंत्रणासाठी कोणती पद्धत?", options: ["PWM analogWrite", "digitalWrite", "delay", "loop"], correct: 0 },
      { question: "Forward direction मध्ये?", options: ["IN1 HIGH, IN2 LOW", "दोन्ही HIGH", "IN1 LOW, IN2 LOW", "कोणतेही"], correct: 0 },
      { question: "L298N common GND कशासाठी?", options: ["Arduino + power एकत्र", "नाही", "फक्त module", "बोर्ड"], correct: 0 },
      { question: "पाठाच्या नंतर कोणता प्रोजेक्ट सांगितला?", options: ["घरगुती fan", "टीव्ही", "आठवड्याचा ग्राफ", "sensor वाचन"], correct: 0 },
    ],
    related: ["electronics-motor", "arduino-project", "electronics-switch-relay"],
    prev: "arduino-ir",
    next: "iot-intro",
  },
];