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
        title: "Sensors — analog vs digital",
        content: "Arduino ह्या मायक्रोकंट्रोलरला बाहेरचे जग sensors द्वारे कळते.\n\nदोन प्रकार:\n\t• Digital — फक्त ON/OFF (0 किंवा 1).\n\t• Analog — सतत मूल्य (0 ते 1023).\n\nDigital sensor ची उदाहरणे:\n\t• बटण, motion sensor, IR obstacle sensor.\nAnalog sensor ची उदाहरणे:\n\t• LDR (प्रकाश), potentiometer, thermistor.\n\nपाय:\n\t• Analog inputs: A0 ते A5 — analogRead() साठी.\n\t• Digital inputs: pin 2 ते 13 — digitalRead() साठी.\n\nAnalogRead वाचन:\n\t• 0V → 0; 5V → 1023.\n\t• मधले voltage प्रमाणानुसार 0-1023 मध्ये मिळते.\n\nसराव: बटण एका digital pin (जसे 7) वर जोडा आणि ते ON/OFF वाचा.\n\nसाधा नियम: जिथे फक्त yes/no हवे तेथे digital, जिथे मोठेपणा हवा तेथे analog.",
      },
      {
        title: "LDR + analogRead — पहिला sensor",
        content: "LDR (Light Dependent Resistor) प्रकाशानुसार resistance बदलते.\n\t• प्रकाश कमी → resistance मोठे.\n\t• प्रकाश जास्त → resistance लहान.\n\nजोडणी (voltage divider):\n\t• LDR व 10kΩ resistor शृंखलेत.\n\t• मधला बिंदू → A0 pin.\n\nकोड:\n\tvoid setup() { Serial.begin(9600); }\n\tvoid loop() {\n\t  int v = analogRead(A0);\n\t  Serial.println(v);\n\t  delay(500);\n\t}\n\nकसे चालते:\n\t• अंधारात LDR resistance मोठे → A0 वर voltage कमी → वाचन कमी.\n\t• प्रकाशात resistance लहान → voltage जास्त → वाचन जास्त.\n\t• हे वाचन 0-1023 मध्ये येते.\n\nSerial monitor (Tools → Serial Monitor) मध्ये value दिसते.\n\nसराव: टॉर्चचा प्रकाश LDR कडे दाखवा — serial मधील संख्या बदलते का?\n\nआता आपल्या Arduino ने जग वाचायला सुरुवात केली.",
      },
      {
        title: "Voltage divider — गणित",
        content: "LDR चे resistance थेट Arduino वाचत नाही — voltage divider ने voltage मध्ये रूपांतरित करतो.\n\nसूत्र:\n\tV_out = V_in × R2 / (R1 + R2)\n\nजिथे V_in = 5V, R1 = LDR, R2 = 10kΩ.\n\nउदाहरण:\n\t• R1 = 10kΩ (प्रकाश) → V_out = 5 × 10k / (10k + 10k) = 2.5V → ~512.\n\t• R1 = 100kΩ (अंधार) → V_out = 5 × 10k / (100k + 10k) ≈ 0.45V → ~92.\n\nहेच अनेक sensors साठी आधार आहे — कुठलाही resistive sensor (thermistor, LDR, flex) voltage divider सह वाचता येतो.\n\nमुख्य गोष्ट:\n\t• एक resistor स्थिर ठेवा, दुसरा sensor चा बदलणारा resistance.\n\t• मधला बिंदू A0 ला.\n\nसराव: R2 ची value बदलून (1kΩ, 100kΩ) वाचनात फरक बघा.\n\nहे गणित पुढील सर्व sensor project मध्ये वापरले जाते.",
      },
      {
        title: "Thermistor — तापमान वाचणे",
        content: "Thermistor हा temperature-dependent resistor.\n\t• NTC — ताप वाढता resistance कमी होतो (सामान्य).\n\t• PTC — ताप वाढता resistance वाढतो (कमी वापर).\n\nजोडणी: thermistor + 10kΩ voltage divider, मधला बिंदू A1.\n\nकोड:\n\tint raw = analogRead(A1);\n\tfloat v = raw * 5.0 / 1023;\n\tfloat r = (5.0 - v) / v * 10000;\n\tfloat t = 1.0 / (1.0/298.15 + log(r/10000.0)/3950);\n\tt -= 273.15;\n\nस्पष्टीकरण:\n\t• तिसरी ओळ — voltage मधून thermistor चे resistance.\n\t• चौथी ओळ — Steinhart-Hart सरलीकरण (B = 3950 सामान्य).\n\t• पाचवी ओळ — Kelvin → Celsius.\n\nव्यावहारिक:\n\t• साधा घरगुती तापमान मापन उपयुक्त.\n\t• अचूकता ±1-2°C — सामान्य प्रयोगासाठी पुरेसा.\n\nसराव: तापमान serial मध्ये छापा; finger ने पकडून फरक बघा.\n\nसोपी पर्याय: DHT11 पुढील पाठात — थेट तापमान + आर्द्रता.",
      },
      {
        title: "DHT11 — डिजिटल तापमान/आर्द्रता",
        content: "DHT11 एक digital sensor — तापमान तसेच humidity दोन्ही देते.\n\nवैशिष्ट्ये:\n\t• तापमान 0-50°C (±2°C).\n\t• आर्द्रता 20-80% (±5%).\n\t• एक-तार (1-wire) digital protocol.\n\t• हळू — प्रत्येक 1-2 सेकंदाला एक वाचन.\n\nजोडणी:\n\t• VCC → 5V; DATA → pin 2 (10kΩ pull-up सह); GND → GND.\n\nकोड (DHT library):\n\t#include <DHT.h>\n\tDHT dht(2, DHT11);\n\tvoid setup() { Serial.begin(9600); dht.begin(); }\n\tvoid loop() {\n\t  Serial.print(dht.readTemperature());\n\t  Serial.println(dht.readHumidity());\n\t  delay(2000);\n\t}\n\nटीप:\n\t• Library गरजेची — Library Manager मधून DHT sensor library स्थापित करा.\n\t• readTemperature / readHumidity फ्लोट परत करतात.\n\t• delay आवश्यक — नाहीतर वाचन रिकामे (NaN).\n\nहवामान project साठी DHT11 पुरेसा; अधिक अचूकतेला DHT22.\n\nआता दोन्ही — analog (LDR) व digital (DHT) sensor हाताळले.",
      },
      {
        title: "Serial monitor — वाचन व scale",
        content: "Sensor data समजण्यासाठी serial monitor ही खिडकी आहे.\n\nउपयुक्त आदेश:\n\t• Serial.begin(9600) — setup मध्ये एकदा.\n\t• Serial.println(value) — नव्या ओळीत प्रिंट.\n\t• Serial.print(label) — same line वर.\n\nData सोपा करण्यासाठी map():\n\t• int pct = map(raw, 400, 900, 0, 100);\n\t• वाचन 400-900 → 0-100 टक्के.\n\t• LOW/HIGH bounds हाताने (calibration) देतात.\n\nconstrain():\n\t• value ला सुरक्षित सीमेत ठेवते (0-100).\n\nSerial plotter:\n\t• Tools → Serial Plotter — value चा ग्राफ.\n\t• LDR बंद करताना कव्हर — वक्र खाली येते.\n\nचांगली सवय:\n\t• एका वेळी एक दोन value छापा; अनेक वेळा स्वल्पविरामाने.\n\t• bounds मोजण्यासाठी minimum/maximum वाचा.\n\nसराव: map() ने LDR वाचन टक्केवारीत बदला; plotter मध्ये पहा.",
      },
      {
        title: "आजचा सारांश",
        content: "Arduino sensors चे सहा मुद्दे:\n\n• analog vs digital — सतत मूल्य vs ON/OFF.\n• LDR — voltage divider सह A0 वर 0-1023.\n• Voltage divider — V_out = V_in × R2 / (R1 + R2).\n• Thermistor — NTC resistance तापासोबत कमी.\n• DHT11 — digital तापमान + आर्द्रता (delay आवश्यक).\n• Serial + map() — data वाचणे व scale करणे.\n\nआजचे प्रॅक्टिस:\n\t०१. LDR + 10kΩ voltage divider बनवा.\n\t०२. serial monitor मध्ये वाचन पहा — प्रकाश फरकाने बदल.\n\t०३. map() ने वाचन टक्केवारीत बदला.\n\t०४. DHT11 जोडून तापमान+आर्द्रता छापा.\n\nपुढील पाठ — complete project: automatic night light.",
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
        title: "प्रोजेक्ट — automatic night light",
        content: "आजचा उद्देश: जेव्हा अंधार होतो तेव्हा LED आपोआप उजळते — automatic night light.\n\nकाम:\n\t• अंधारलेल्यावर LDR वाचन कमी.\n\t• threshold पेक्षा कमी → LED ON.\n\t• प्रकाश परत आल्यावर → LED OFF.\n\nआवश्यक पार्ट्स:\n\t• Arduino Uno.\n\t• LDR + 10kΩ (voltage divider).\n\t• LED + 220Ω resistor.\n\t• ब्रेडबोर्ड, जोड तारा.\n\nहेच सर्किट रात्रीच्या दिवे, security light, garden light मध्ये दिसते.\n\nपद्धत:\n\t१. hardware wiring.\n\t२. कोड लिहा.\n\t३. threshold समायोजन.\n\t४. चाचणी व debugging.\n\nआधीचे सर्व पाठ एकत्र — resistor, capacitor, LDR, analogRead.\n\nसराव: घरातील कुठलेही auto light यंत्र पाहा — तेच तत्त्व.",
      },
      {
        title: "Wiring — ब्रेडबोर्ड",
        content: "सर्वात आधी सर्किट ब्रेडबोर्डवर जोडा.\n\nभाग १ — LDR divider:\n\t• 5V → LDR → node A → 10kΩ → GND.\n\t• node A → A0 pin.\n\nभाग २ — LED:\n\t• pin 9 → 220Ω → LED anode (+).\n\t• LED cathode (−) → GND.\n\nव्यवस्था:\n\t• ground नेहमी एकाच रेलवर (काळी तार).\n\t• वीज आणि signal तारा वेगळ्या मांडा.\n\t• जोड बिंदू घट्ट — कापलेल्या तारा वापरू नका.\n\nतपासणी:\n\t• ब्रेडबोर्डच्या rows मधील 5 अड्डे सामायिक असतात.\n\t• + रेल आणि − रेल वेगवेगळ्या.\n\nसराव: wiring केल्यावर serial monitor मध्ये A0 वाचन करा — अंधार/प्रकाश दोन्ही state मध्ये नोंद करा.\n\nचुकल्यास: +/− उलट नाही ना, 10kΩ कुठे आहे — या दोन गोष्टी प्रथम तपासा.",
      },
      {
        title: "कोड — थ्रेशोल्ड आणि हायस्टेरेसिस",
        content: "कोड दोन झोनमध्ये: setup आणि loop.\n\nपाया:\n\tint ldr = A0;\n\tint led = 9;\n\tint threshold = 500;\n\tvoid setup() {\n\t  pinMode(led, OUTPUT);\n\t  Serial.begin(9600);\n\t}\n\tvoid loop() {\n\t  int v = analogRead(ldr);\n\t  if (v < threshold) digitalWrite(led, HIGH);\n\t  else digitalWrite(led, LOW);\n\t  delay(200);\n\t}\n\nकाम:\n\t• A0 वाचन threshold पेक्षा कमी → LED ON.\n\t• अधिक → LED OFF.\n\t• delay(200) — लहान विश्रांती (serial साठी).\n\nसमस्या: थ्रेशोल्डच्या आसपास flicker होतो.\n\t• थोडा प्रकाश फिरताच LED धडपडतो.\n\nउपाय पुढील पाठात — hysteresis.\n\nसराव: threshold 300/400/500 करून बघा — कोणता दिसतो योग्य?",
      },
      {
        title: "Flicker टाळणे — hysteresis",
        content: "एका boundary वर quick फेरफार झाल्यास LED कंपित होतो — ते टाळण्यासाठी hysteresis वापरतात.\n\nकल्पना:\n\t• ON करण्यासाठी lower threshold (ud. 400).\n\t• OFF करण्यासाठी higher threshold (ud. 600).\n\t• मध्ये (400-600) — मागील स्थिती कायम राहते.\n\nकोड:\n\tbool on = false;\n\tvoid loop() {\n\t  int v = analogRead(ldr);\n\t  if (v < 400) on = true;\n\t  else if (v > 600) on = false;\n\t  digitalWrite(led, on ? HIGH : LOW);\n\t  delay(100);\n\t}\n\nफायदा:\n\t• सूर्यास्ताच्या वेळी हलके फरक असला तरी स्थिर.\n\t• झटपट transition मध्ये घट्ट.\n\nकशी निवडायची:\n\t• दिवसाचे वाचन खूप उच्च (800+).\n\t• रात्रीचे वाचन खूप कमी (200-).\n\t• two thresholds संरक्षण तयार करतात.\n\nहा pattern अनेक auto-systems मध्ये वापरतात — thermostat, sensor faders.\n\nसराव: thresholds 400/600 वर रात्री लागू करा — स्थिर दिसते का?",
      },
      {
        title: "समस्या व troubleshooting",
        content: "प्रोजेक्ट चालत नसेल तर चरण-दर-चरण तपासा.\n\nसामान्य समस्या:\n\t• LED कधीही झळकत नाही.\n\t\t→ threshold चुकीचा; +/− उलट नाही ना.\n\t• LED सतत ON.\n\t\t→ LDR जमिनीवर/प्रकाशात; wiring लहान झाले.\n\t• वाचन धडधडतं.\n\t\t→ 100nF capacitor A0 वर लावा; तारा पुरेशा लांब होऊ नका.\n\t• Serial रिकामे.\n\t\t→ baud rate जुळते ना (9600); pin बरोबर.\n\nटूल्स:\n\t• multimeter — A0 वर voltage मोजा.\n\t• Serial.println(v) — नेहमी वाचन दिसू द्या.\n\t• LED कुठला तपासण्यासाठी स्वतंत्र blink test.\n\nमंत्र:\n\t• एकावेळी एक बदल — एकाच वेळी काहीच नाही.\n\t• power पुन्हा reset करा.\n\nसराव: मुद्दाम एक चूक करा (तार काढा) — निरीक्षण करून शोधा.",
      },
      {
        title: "पुढील upgrades",
        content: "मूळ night light काम करतो आता — तो वाढवता येतो.\n\nकल्पना १ — तेज समायोजन:\n\t• potentiometer वर तिसरा analog input (A2).\n\t• map() ने 0-255 brightness द्या.\n\t• analogWrite(led, brightness) — PWM.\n\nकल्पना २ — मंद उजळणे:\n\t• LED चे तेज 3 चरणांत वाढवा (fade).\n\t• delay ने नियंत्रित संक्रमण.\n\nकल्पना ३ — buzzer अलार्म:\n\t• दार उघडल्यावर (motion sensor) buzzer.\n\nकल्पना ४ — घरगुती battery power:\n\t• LDR + transistor द्वारे मोठा दिवा चालवा.\n\t• PIR motion सह रात्रीचा दिवे.\n\nहीच संधी: आपल्या पहिल्या project चा आधार घेऊन काहीही बनवा.\n\nशेवटी:\n\t• प्रत्येक upgrade = एक नवा mini-project.\n\t• नेहमी एकावेळी एक फीचर वाढवा व तपासा.",
      },
      {
        title: "आजचा सारांश",
        content: "Automatic night light चे सहा मुद्दे:\n\n• उद्देश — अंधारात LED आपोआप ON.\n• Wiring — divider (A0) + LED (pin 9).\n• कोड — analogRead + threshold ने ON/OFF.\n• Flicker — दोन thresholds (hysteresis) ने टाळता.\n• Troubleshooting — serial + multimeter + sequential.\n• पुढे upgrade — pot, fade, buzzer, transistor.\n\nआजचे प्रॅक्टिस:\n\t०१. संपूर्ण सर्किट wiring करा.\n\t०२. कोड अपलोड करून threshold जुळवा.\n\t०३. 100nF जोडून फरक बघा.\n\t०४. एक upgrade (PWM brightness) जोडा.\n\nइलेक्ट्रॉनिक्स शिकण्याचा मार्ग आता सुरू — next: DIY sensors प्रकल्प.",
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