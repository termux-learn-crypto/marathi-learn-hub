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
        title: "HC-SR04 ultrasonic sensor — अंतर मोजणे",
        content: "HC-SR04 आवाज (ultrasonic) पाठवून परत येण्याची वेळ मोजून अंतर सांगते. Trigger pin 40kHz sound pulse सोडतो; अडथळा आदळून echo pin वर परत येतो; pulseIn() ही वेळ microseconds मध्ये देते. हवेत ध्वनी वेग ~343 m/s (0.0343 cm/µs). दोन्ही दिशांचा प्रवास मोजला जातो म्हणून /2 अनिवार्य — सूत्र: distance_cm = duration × 0.01715. अंतर 2cm–400cm, कोनीय क्षेत्र ~15°. वापर: parking sensor, robot obstacle detection, level measuring.",
        code: `const int trig = 9;
const int echo = 10;
void setup() {
  Serial.begin(9600);
  pinMode(trig, OUTPUT);
  pinMode(echo, INPUT);
}
void loop() {
  digitalWrite(trig, LOW);
  delayMicroseconds(2);
  digitalWrite(trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(trig, LOW);
  long dur = pulseIn(echo, HIGH);
  float dist = dur * 0.01715;
  Serial.print(dist);
  Serial.println(" cm");
  delay(100);
}`,
        codeLanguage: "cpp",
        output: `15.23 cm
14.87 cm
15.01 cm`,
      },
      {
        title: "Wiring — HC-SR04 + Arduino",
        content: "चार pins: VCC (5V), Trig, Echo, GND. VCC → Arduino 5V, GND → GND, Trig → digital pin 9, Echo → digital pin 10. HC-SR04 5V ला चालतो — Arduino Uno सह थेट जोडता येते. ESP8266/ESP32 (3.3V) सह voltage divider आवश्यक. Sensor समोर अडथळा मोकळा ठेवा; wiring double-check करा — चुका प्रचलित आहेत.",
        code: `// HC-SR04 → Arduino Uno
// VCC  → 5V
// GND  → GND
// Trig → pin 9
// Echo → pin 10`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "Distance alarm — प्रोजेक्ट",
        content: "अंतर कमी झाल्यावर buzzer वाजवा आणि LED लावा. भाग: HC-SR04, passive/active buzzer, LED. तर्क: dist < 20cm → alarm + LED, नाहीतर शांत. Active buzzer — dc control ने वाजतो; Passive — tone() सह beep patterns. विस्तार: LED gradient (PWM) नुसार dist बदला, Serial तापमान log जोडा. Threshold 20cm वरून 40cm करून संवेदनशीलता बघा.",
        code: `int buzz = 6;
int LED = 13;
void loop() {
  // ... (ultrasonic code above)
  float dist = dur * 0.01715;
  if (dist < 20) {
    digitalWrite(buzz, HIGH);
    digitalWrite(LED, HIGH);
  } else {
    digitalWrite(buzz, LOW);
    digitalWrite(LED, LOW);
  }
  delay(100);
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "सारांश — ultrasonic",
        content: "HC-SR04: sound pulse + echo time ने अंतर. Wiring — VCC/Trig/Echo/GND (4 pins). पल्सिन: pulseIn(echo, HIGH) duration microseconds. सूत्र: dur × 0.01715 = cm; ध्वनी दोनदा जातो म्हणून /2. प्रोजेक्ट: distance alarm (buzzer + LED). सराव: Serial मध्ये dur व distance दोन्ही दाखवा; शासकासोबत अचूकता तपासा; Buzzer alarm + LED एकत्र करा; Threshold dynamic करा.",
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
        title: "Servo motor — ओळख आणि कार्यपद्धती",
        content: "Servo 0° ते 180° पर्यंत नेमका कोन नियंत्रित करतो. आतून: small motor + gearbox, potentiometer (सध्याचा कोन वाचतो), control circuit (desired vs actual तुलना). position control अचूक; continuous rotation नाही — angle देतो. वापर: robotic arm, camera gimbal, auto-gate. तारा: Brown—GND, Red—5V (मोठ्या servo ला बाह्य वीज), Signal—PWM pin (9/10). Servo signal 50Hz PWM pulse: 1ms ~ 0°, 1.5ms ~ 90°, 2ms ~ 180°. Library write() angle → pulse width करते.",
        code: `#include <Servo.h>
Servo myServo;
void setup() {
  myServo.attach(9);
}
void loop() {
  myServo.write(90);
  delay(15);
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "Sweep — कोड आणि गती",
        content: "Servo एका टोकापासून दुसऱ्या टोकापर्यंत फिरवा. write(0)—डावीकडे, write(90)—मध्य, write(180)—उजवीकडे. delay(15) ने प्रत्येक पाऊल गतीला स्थिरता; जास्त speed → जॅमिंग. SG90 चा सामान्य torque; जास्त १०+ ग्रॅम load — servo ओढेल नाही.",
        code: `#include <Servo.h>
Servo s;
void setup() { s.attach(9); }
void loop() {
  for (int a = 0; a <= 180; a++) {
    s.write(a);
    delay(15);
  }
  for (int a = 180; a >= 0; a--) {
    s.write(a);
    delay(15);
  }
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "Automatic gate — प्रोजेक्ट",
        content: "अडथळा दिसल्यावर gate उघडतो — ultrasonic/PIR sensor वापरा. भाग: servo, ultrasonic, मोठा बार. तर्क: dist < 30cm → servo 90° (उघडा), नाहीतर → 0° (बंद). Gate हलका ठेवा — नाहीतर servo त्रास; मोठा gate — metal gear servo + limit switch. विस्तार: manual override (button), status LED (open/close).",
        code: `if (dist < 30) {
  s.write(90);
} else {
  s.write(0);
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "सारांश — servo motor",
        content: "Servo: position control 0-180°; library attach/write; sweep = loop + delay; PWM pulse width द्वारे कोन. Auto-gate: ultrasonic trigger → servo. सराव: sweep program चालवा; potentiometer ने servo control; auto-gate प्रोजेक्ट; विविध angles वर accuracy तपासा.",
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
        title: "LCD 16x2 — I2C ने जोडणी",
        content: "LCD 16x2 — 16 columns × 2 rows character display. Direct parallel मध्ये 16 pins लागतात; I2C module सह फक्त 4 तारा. I2C LCD wiring: VCC→5V, GND→GND, SDA→A4, SCL→A5 (Uno; Mega 20/21; ESP8266 D1/D2). Common I2C address 0x27 किंवा 0x3F — I2C Scanner केवळ शोधून देतो. 5V logic — 3.3V boards सह level shifter आवश्यक.",
        code: `#include <Wire.h>
// I2C Scanner — address शोधा
void setup() {
  Wire.begin();
  Serial.begin(9600);
  for (byte addr = 1; addr < 127; addr++) {
    Wire.beginTransmission(addr);
    if (Wire.endTransmission() == 0)
      Serial.println(addr, HEX);
  }
}`,
        codeLanguage: "cpp",
        output: `0x27`,
      },
      {
        title: "LiquidCrystal_I2C library",
        content: "LiquidCrystal_I2C library (Frank de Brabander) वापरा. lcd.init() — सुरुवात; lcd.backlight() — backlight चालू; setCursor(col, row) — स्थान नियंत्रण; print(text) — दाखवा; clear() — पुसा. Numeric: lcd.print(value) ने संख्या दाखवतो. नवीन update आधी clear करा — stale text टाळा; setCursor + print मध्ये spaces द्या (ओव्हरराइट).",
        code: `#include <LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x27, 16, 2);
void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("Hello Marathi!");
}
void loop() {}`,
        codeLanguage: "cpp",
        output: `Hello Marathi!`,
      },
      {
        title: "Sensor data display — scroll",
        content: "Sensor वाचन LCD वर दाखवा: int val = analogRead(A0); lcd.setCursor(0,0); lcd.print(\"Light: \"); lcd.print(val); lcd.print(\"   \"); — spaces ने stale text overwrite. अनेक data: row 0 — एक sensor, row 1 — दुसरा. Scroll: lcd.autoscroll() ने आपोआप नवीन डावीकडे जाते; clear प्रत्येक वेळी. Format: setCursor ने spaces → center/right-align; fixed-width alignment.",
        code: `int val = analogRead(A0);
lcd.setCursor(0, 0);
lcd.print("Light: ");
lcd.print(val);
lcd.print("   ");`,
        codeLanguage: "cpp",
        output: `Light: 512`,
      },
      {
        title: "सारांश — LCD display",
        content: "LCD 16x2: 16 cols × 2 rows; I2C = 4 wires (A4/A5); Scanner → address 0x27/0x3F. Library: LiquidCrystal_I2C — init/setCursor/print/clear. सराव: I2C Scanner चालवा; Hello दोन rows वर; Sensor value display; Scroll clock.",
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
        title: "IR remote — ओळख आणि कार्यपद्धती",
        content: "IR remote प्रकाशाच्या pulse ने codes पाठवते. IR LED — invisible प्रकाश; 38kHz carrier — receiver ला स्पष्ट; data — pulse widths च्या गणनेतून. Protocols: NEC, Sony, RC-5; प्रत्येक बटण — unique 32-bit code. Receiver: TSOP38238/VS1838B — IR प्रकाश सेन्स करून digital output देतो. वापर: TV/AC remote projects. IR range कमी ठेवून deliberate वापरा.",
      },
      {
        title: "IR receiver wiring + codes वाचणे",
        content: "IR receiver 3 pins: GND→GND, VCC→5V, OUT→digital pin (11). 5V निवडा — 3.3V boards सही चालतो. IRremote library: enableIRIn() receiver चालू करतो; decode(&results) code आला का तपासतो; resume() पुन्हा तयार करतो. Serial Monitor मध्ये HEX code दिसतो — प्रत्येक बटण unique. Codes नोंदवा — पुढे comparison साठी.",
        code: `#include <IRremote.h>
const int RECV_PIN = 11;
IRrecv irrecv(RECV_PIN);
decode_results results;
void setup() {
  Serial.begin(9600);
  irrecv.enableIRIn();
}
void loop() {
  if (irrecv.decode(&results)) {
    Serial.println(results.value, HEX);
    irrecv.resume();
  }
}`,
        codeLanguage: "cpp",
        output: `FFA25D
FF629D
FFE21D`,
      },
      {
        title: "Remote ने LED control — प्रोजेक्ट",
        content: "रिमोट बटण दाबल्यावर LED toggle: value compare + toggle. Switch case वापरून अनेक buttons गोंधळ नाही. Repeat codes — long press वर सारखे value; handle करावे. विस्तार: 3 LEDs + 3 buttons; brightness ±. दोन remote एकत्र वापरताना codes संघर्ष शक्य — वेगळे protocol/sender निवडा.",
        code: `unsigned long ON_O = 0xFFA25D;
void loop() {
  if (irrecv.decode(&results)) {
    unsigned long v = results.value;
    if (v == ON_O) {
      digitalWrite(LED, !digitalRead(LED));
    }
    irrecv.resume();
  }
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "सारांश — IR remote",
        content: "IR: pulse codes ने data पाठवते; Receiver wiring — OUT/5V/GND; Library IRremote — decode()/resume(); Codes HEX मध्ये नोंद; LED control = button map. सराव: codes दाखवणारा program; एक LED toggle; तीन LEDs + तीन buttons; Protocol निरीक्षण.",
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
        title: "Motor driver — गरज आणि L298N wiring",
        content: "Arduino थेट motor चालवू शकत नाही — motor ला 100mA+ current; Arduino pin 20-40mA; back-EMF spikes खराब करतात. म्हणून driver/MOSFET: signal → power पूल; speed → PWM; direction → H-bridge. L298N — dual H-bridge module. Wiring: 5V→Arduino 5V, Motor power→VS (बाह्य 12V), GND→common GND, Enable A/B + IN1-IN4→Arduino pins. Common GND अनिवार्य.",
        code: `// L298N → Arduino Uno
// 5V   → 5V (logic)
// GND  → GND (common)
// ENA  → pin 9 (PWM)
// IN1  → pin 8
// IN2  → pin 7
// Motor → OUT1/OUT2`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "PWM speed + H-bridge direction",
        content: "Speed: analogWrite(enA, 0-255) duty cycle ने — 255 = full. Enable pin PWM सक्षम; duty कमी → गती कमी. Slow PWM → motor झटके; smooth acceleration — ramp loop. Direction: IN1 HIGH + IN2 LOW = forward; IN1 LOW + IN2 HIGH = backward; दोन्ही LOW = free stop; दोन्ही HIGH = brake. IN1+IN2 एकत्र HIGH न ठेवा — short.",
        code: `int enA = 9;
int in1 = 8, in2 = 7;
void setup() {
  pinMode(enA, OUTPUT);
  pinMode(in1, OUTPUT);
  pinMode(in2, OUTPUT);
}
void loop() {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
  analogWrite(enA, 150);
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "घरगुती fan — प्रोजेक्ट",
        content: "Arduino नियंत्रित fan: speed + direction. भाग: L298N, DC motor + fan blade, potentiometer (speed), button (direction). Speed: int sp = analogRead(A0) / 4; analogWrite(enA, sp). Direction toggle: button ने IN1/IN2 बदला. 12V motor — VS 12V बाह्य वीज; fan enclosure ठेवा; slow start — ramp up.",
        code: `int sp = analogRead(A0) / 4;
analogWrite(enA, sp);
if (digitalRead(btn)) {
  digitalWrite(in1, LOW);
  digitalWrite(in2, HIGH);
} else {
  digitalWrite(in1, HIGH);
  digitalWrite(in2, LOW);
}`,
        codeLanguage: "cpp",
        output: ``,
      },
      {
        title: "सारांश — motor driver",
        content: "Motor driver: Arduino motor चालवू शकत नाही (current/back-EMF). L298N = dual H-bridge; wiring: IN/Enable + बाह्य power. Speed: analogWrite(en, 0-255). Direction: IN1/IN2 logic. सराव: लहान motor पूल वर चालवा; Speed levels तपासा; Direction toggle; Fan प्रोजेक्ट एकत्र करा.",
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