import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 3 — घटक सखोल ===
// electronics-diode → electronics-switch-relay → electronics-motor
// → electronics-battery-power → electronics-power-supply
// (पुढे arduino-basics — tutorials.ts मधील inline पाठ)

export const electronicsLevel3: Tutorial[] = [
  {
    slug: "electronics-diode",
    categoryId: "electronics",
    title: "Diode - एकदिश प्रवाह",
    marathiTitle: "Diode सखोल — forward/reverse bias, rectifier, zener, LED",
    level: "beginner",
    minutes: 25,
    summary: "Diode हा one-way valve — forward/reverse bias, rectifier म्हणून उपयोग, zener voltage regulation, LED व photodiode ची ओळख.",
    sections: [
      {
        title: "Diode म्हणजे काय — one-way valve",
        content: "Diode हा दोन-पायांचा घटक — वीज फक्त एका दिशेने जाऊ देतो.\n\nसाधर्म्य: पाण्याचा नलकोश (check valve).\n\t• Forward — पाणी वाहते.\n\t• Reverse — पाणी थांबते.\n\nदोन पाय:\n\t• Anode (A) — प्रवाह या बाजूने आत.\n\t• Cathode (K) — प्रवाह बाहेर.\n\t• Cathode वर रेषेची खूण (band) असते.\n\nवापर कशासाठी?\n\t• AC ला DC मध्ये बदलणे (rectifier).\n\t• सर्किटला उलट प्रवाहापासून वाचवणे.\n\t• Signal demodulation.\n\nनियम:\n\t• Forward बायस — प्रवाह येतो.\n\t• Reverse बायस — प्रवाह नाही (पण small leakage).\n\nसराव: datasheet मध्ये 1N4007 चे max reverse voltage वाचा.",
      },
      {
        title: "Forward / Reverse bias",
        content: "Bias म्हणजे diode वर किती voltage कोणत्या दिशेने लावले आहे.\n\nForward bias:\n\t• Anode ला +, Cathode ला −.\n\t• ~0.6-0.7V च्या पुढे प्रवाह वाहतो (silicon).\n\t• Germanium ~0.3V.\n\t• प्रवाह वाढला तर diode गरम होतो.\n\nReverse bias:\n\t• Anode ला −, Cathode ला +.\n\t• प्रवाह ~शून्य.\n\t• जास्त reverse voltage → breakdown (नुकसान होऊ शकते).\n\nकर्व्ह (IV curve):\n\t• Forward — वक्र वर गेल्यावर प्रवाह वेगाने वाढतो.\n\t• Reverse — सपाट, त्यानंतर abrupt breakdown.\n\nसामान्य value:\n\t• 1N4007 — 1A, 1000V reverse.\n\t• 1N4148 — लहान signal.\n\nसराव: एक diode forward/reverse जोडून प्रवाहातील फरक multimeter ने तपासा.",
      },
      {
        title: "Rectifier — AC → DC",
        content: "घरातील वीज AC असते (प्रत्यावर्ती) — मात्र बहुतेक devices ला DC लागते.\n\nHalf-wave rectifier:\n\t• एक diode — फक्त अर्धे चक्र जाते.\n\t• उरलेले अर्धे तुटले.\n\nFull-wave rectifier:\n\t• 4 diodes (bridge) — दोन्ही अर्ध्या चक्रांतून प्रवाह.\n\t• उदा. 1N4007 × 4.\n\nBridge rectifier क्रिया:\n\t• AC दोन्ही टोकांवर झालेल्या चक्रांत DC मिळते.\n\t• Output मध्ये लाट (ripple) राहते.\n\nनंतर:\n\t• Capacitor फिल्टर — ripple कमी.\n\t• Regulator — स्थिर voltage.\n\nचला उदाहरणात:\n\t• 12V AC → bridge → ~16V DC (peak) → capacitor → 7805 → 5V.\n\nसराव: bridge rectifier + capacitor चे आकृती स्वतः काढा.",
      },
      {
        title: "Zener diode — voltage स्थिर",
        content: "Zener diode reverse-breakdown प्रदेशात चालवतात — voltage स्थिर ठेवणे.\n\nसामान्य diode breakdown होऊन नष्ट होतो; पण zener control-मध्ये.\n\nकाम:\n\t• जास्त reverse voltage → zener ती voltage कायम ठेवतो.\n\t• Series resistor current मर्यादित करतो.\n\nउदा. 5.1V zener:\n\t• Input 9V → series 470Ω → output 5.1V.\n\t• बदलत्या load वर output जवळजवळ स्थिर.\n\nसीमा:\n\t• फक्त small load साठी (लहान current).\n\t• मोठ्या load साठी regulator चांगला.\n\nनिवड:\n\t• Zener voltage — हव्या value नुसार (3.3V, 5.1V, 12V).\n\t• Power rating — W प्रमाणे निवडा.\n\nसराव: 5.1V zener circuit बनवून output मोजा — input 9V ते 6V बदलल्यास फरक दिसेल का?",
      },
      {
        title: "LED व photodiode",
        content: "LED ही खास diode — forward bias मध्ये प्रकाश देते.\n\nLED:\n\t• Forward bias — प्रकाश.\n\t• Reverse bias — प्रकाश नाही.\n\t• Voltage drop ~1.8-3.3V (रंगानुसार).\n\t• resistor आवश्यक — अन्यथा जास्त current.\n\nPhotodiode:\n\t• प्रकाश पडल्यास प्रवाह बदलतो.\n\t• Reverse bias मध्ये अधिक संवेदनशीलता.\n\t• ऑप्टिकल sensors, टीव्ही remote receiver.\n\nफरक:\n\t• LED उत्सर्जक (emits); photodiode संवेदक (receives).\n\t• दोघे एकत्र → optocoupler.\n\nउदा. optocoupler:\n\t• एका circuit चा signal दुसऱ्या circuit ला वेगळेपणा देतो.\n\nसराव: विविध रंगांतील LEDs चे voltage drop मोजा.",
      },
      {
        title: "आजचा सारांश",
        content: "Diode चे सहा मुद्दे:\n\n• काम — वीज फक्त एका दिशेने.\n• Forward bias — प्रवाह येतो; reverse — नाही.\n• Rectifier — AC → DC अर्धे/संपूर्ण चक्र.\n• Zener — reverse-breakdown मध्ये voltage स्थिर.\n• LED — forward bias मध्ये प्रकाश.\n• Photodiode — प्रकाशाचे वाचन.\n\nआजचे प्रॅक्टिस:\n\t०१. diode forward/reverse जोडून प्रवाह तपासा.\n\t०२. bridge rectifier चे आकृती काढा.\n\t०३. LED drop मोजा.\n\t०४. Zener circuit मध्ये input/output मोजा.\n\nपुढील पाठ — switch/relay: नियंत्रण आणि isolation.",
      },
    ],
    practiceQuestions: [
      "Diode मध्ये प्रवाह नेमकी कधी वाहतो?",
      "Half-wave व full-wave rectifier मध्ये काय फरक?",
      "Zener breakdown म्हणजे काय — उपयोग कुठे?",
      "LED सोबत resistor का आवश्यक आहे?",
    ],
    quiz: [
      { question: "Forward bias मध्ये diode वर आवश्यक voltage (silicon)?", options: ["~0.6-0.7V", "~5V", "~12V", "~0V"], correct: 0 },
      { question: "Reverse bias मध्ये प्रवाह किती?", options: ["जवळजवळ शून्य", "खूप मोठा", "समान", "दुप्पट"], correct: 0 },
      { question: "Bridge rectifier मध्ये किती diodes?", options: ["1", "2", "4", "6"], correct: 2 },
      { question: "Voltage स्थिर करण्यासाठी कोणता diode?", options: ["Zener", "LED", "Photodiode", "1N4148"], correct: 0 },
      { question: "LED च्या उलट बायसमध्ये काय?", options: ["प्रकाश नाही", "प्रकाश जास्त", "प्रकाश दुप्पट", "रंग बदलतो"], correct: 0 },
    ],
    related: ["electronics-transistor", "electronics-circuits", "electronics-resistor"],
    prev: "electronics-transistor",
    next: "electronics-switch-relay",
  },
  {
    slug: "electronics-switch-relay",
    categoryId: "electronics",
    title: "Switch & Relay - नियंत्रण",
    marathiTitle: "Switch, बटण debounce, relay केमिस्ट्री आणि flyback protection",
    level: "intermediate",
    minutes: 25,
    summary: "स्विचचे प्रकार, बटण व debounce, relay म्हणजे काय, electromagnetic coil, flyback diode आणि transistor+relay driver सह मोठे भार चालवणे.",
    sections: [
      {
        title: "Switch प्रकार",
        content: "Switch सर्किटची जाणीवपूर्वक जोडणी/तोड करतो.\n\nप्रकार:\n\t• SPST — on/off (एक स्विच).\n\t• SPDT — दोन स्थाने (A किंवा B).\n\t• Push button (momentary) — दाबल्यावरच.\n\t• Toggle — स्थान राखतो.\n\t• Slide, rocker, rotary.\n\nनिवड नियम:\n\t• current/voltage rating विचारात घ्या (उदा. 2A 125V).\n\t• वापरानुसार प्रकार — momentary vs latching.\n\nवायरिंग:\n\t• Power side वर switch ठेवा.\n\t• Load नंतर GND सामायिक.\n\nसराव: घरातील कोणत्याही स्विचचा प्रकार ओळखा (SPST/SPDT).\n\nलक्षात ठेवा: switch मध्ये कोणतेही polarity नसते.",
      },
      {
        title: "बटण आणि debounce",
        content: "Physical बटण दाबताना contact हलका 'चटचट' होतो — त्या नोइसला bounce म्हणतात.\n\nसमस्या:\n\t• डिजिटल वाचनात ०/१/०/१ झटपट बदल.\n\t• counter एकाऐवजी अनेक गणती करतो.\n\nउपाय:\n\t• Software debounce — थोडा delay पडताळा.\n\t\tif (digitalRead(btn) == LOW) { delay(20); ... }\n\t\t• बटण स्थिर होण्यासाठी 5-20ms पुरेसा.\n\t• Hardware — capacitor बटणाला समांतर (100nF) गंड्या काढतो.\n\npull-up/pull-down:\n\t• बटण दाबल्यावरच संपर्क — स्थिर value नको.\n\t• INPUT_PULLUP वापरा — बटण दुसऱ्या टोकाला GND.\n\nसराव: बटण counter — debounce न करता बग पहा; नंतर दुरुस्त करा.",
      },
      {
        title: "Relay म्हणजे काय",
        content: "Relay हा solenoid घटक — लहान विद्युतदाबाने मोठी स्विच बंद उघडतो.\n\nभाग:\n\t• Coil — लहान current ने magnetic field.\n\t• Switch (contacts) — मोठी circuit.\n\nकाम:\n\t• Coil ला 5V दिल्यावर contact बंद होतो.\n\t• Coil काढल्यावर contact उघडतो.\n\nवापर:\n\t• Arduino सह AC उपकरण चालवणे (दिवा, पंखा).\n\t• Big current load.\n\t• Isolation —नियंत्रण आणि power वेगळे.\n\nप्रकार:\n\t• SPDT relay — common + दोन contacts (NO/NC).\n\t• Module (optocoupled) — Arduino साठी सोयीचे.\n\nरेटिंग:\n\t• Coil voltage — 5V, 12V.\n\t• Contact rating — 10A 250V AC असे.\n\nसराव: home रिले switch पाहून coil व contacts ओळखा.",
      },
      {
        title: "Relay सर्किट — flyback diode",
        content: "Coil inductive असते — तो बंद करताना उलट spike निर्माण होतो.\n\nसमस्या:\n\t• Coil वर झपाट्याने voltage स्पाइक (उलट).\n\t• तो transistor/बोर्ड खराब करतो.\n\nउपाय — flyback diode:\n\t• Coil ला reversed जोडलेला diode.\n\t• स्पाइक diode मधून गळतो.\n\t• Coil current आता एका मार्गाने नष्ट होते.\n\nजोडणी:\n\t• Coil (+) → transistor collector.\n\t• Diode cathode → coil (+), anode → GND (उलट).\n\nनियम:\n\t• flyback diode नेहमी coil/मोटरच्या उलट.\n\t• फक्त relay नाही — कोणताही inductive load.\n\nसराव: relay module वर बोर्डातील diode ओळखा.",
      },
      {
        title: "Transistor + relay driver",
        content: "Relay coil ला मोठा current लागतो (~50-100mA) — Arduino थेट देऊ शकत नाही.\n\nउपाय — transistor driver:\n\t• Arduino pin → base resistor (1kΩ) → NPN transistor.\n\t• Relay coil Collector वर, Emitter GND.\n\t• Flyback diode coil ला उलट.\n\nकोड:\n\tint relay = 9;\n\tvoid setup() { pinMode(relay, OUTPUT); }\n\tvoid loop() {\n\t  digitalWrite(relay, HIGH);  // relay ON\n\t  delay(2000);\n\t  digitalWrite(relay, LOW);\n\t  delay(2000);\n\t}\n\nbase resistor:\n\t• R = (5 − 0.7) / I_base.\n\t• I_base ~1-5mA → 1kΩ योग्य.\n\nचुका:\n\t• flyback diode नाही → transistor जळतो.\n\t• base resistor नाही → base current खूप.\n\nसराव: 5V relay + 2N2222 + flyback diode बनवा; LED दिवा चालवा.",
      },
      {
        title: "आजचा सारांश",
        content: "Switch/relay चे सहा मुद्दे:\n\n• Switch — जाणीवपूर्वक circuit जोडणी/तोड.\n• Bounce — contact चटचट; software/hardware debounce.\n• Relay — coil ने मोठी switch नियंत्रित.\n• Flyback diode — inductive coil चा spike.\n• Driver — transistor + base resistor मोठा load.\n• Isolation — control आणि power वेगळे.\n\nआजचे प्रॅक्टिस:\n\t०१. घरातील switch प्रकार ओळखा.\n\t०२. Arduino + button debounce counter.\n\t०३. 5V relay + transistor driver.\n\t०४. flyback diode काढून फरक बघा.\n\nपुढील पाठ — motor: DC, servo, stepper.",
      },
    ],
    practiceQuestions: [
      "SPST आणि SPDT switch मध्ये काय फरक?",
      "Button bounce म्हणजे काय — कसे टाळायचे?",
      "Relay मध्ये flyback diode का उलट जोडतात?",
      "Arduino थेट relay coil चालवू शकतो का?",
    ],
    quiz: [
      { question: "Relay चा controller कोणता?", options: ["Coil", "Switch", "Motor", "Capacitor"], correct: 0 },
      { question: "Relay बंद करताना कोणता spike येतो?", options: ["उलट voltage spike", "प्रकाश", "ध्वनी", "काही नाही"], correct: 0 },
      { question: "Flyback diode कुठे जोडतात?", options: ["Coil ला उलट", "पॉवरला", "LED ला", "GND कडेच"], correct: 0 },
      { question: "Arduino पासून relay चालवण्यासाठी काय?", options: ["Transistor driver", "थेट", "capacitor", "मोठा relay"], correct: 0 },
      { question: "Button bounce टाळण्याचा एक उपाय?", options: ["debounce delay", "मोठा switch", "दुसरा pin", "LED"], correct: 0 },
    ],
    related: ["electronics-resistor", "electronics-transistor", "arduino-basics"],
    prev: "electronics-diode",
    next: "electronics-motor",
  },
  {
    slug: "electronics-motor",
    categoryId: "electronics",
    title: "Motor - हालचाल नियंत्रण",
    marathiTitle: "Motor सखोल — DC, servo, stepper, H-bridge, PWM speed",
    level: "intermediate",
    minutes: 30,
    summary: "मोटरचे प्रकार, DC motor direction/speed, H-bridge (L298N) driver, servo control, stepper accuracy आणि घरगुती वापर.",
    sections: [
      {
        title: "मोटरचे प्रकार",
        content: "मोटर विद्युत ऊर्जा mechanical हालचालीत बदलते.\n\nसामान्य प्रकार:\n\t• DC motor — सतत फिरणारा; कमी खर्च; direction+speed नियंत्रण.\n\t• Servo — 0-180° नेमक्या कोनात; library सह सोपा.\n\t• Stepper — अचूक पावले; position control.\n\t• Brushless — रोबोट व drone मध्ये.\n\nनिवड नियम:\n\t• फिरत राहायचे? → DC.\n\t• कोन हवा? → servo.\n\t• अचूक position/applications? → stepper.\n\nरेटिंग:\n\t• Voltage (3V, 5V, 12V).\n\t• Current (stall current).\n\t• Torque (किती भार ओढेल).\n\nसराव: घरातील उपकरणांतील मोटर प्रकार ओळखा (पंखा=AC; toy=DC; printer=stepper).",
      },
      {
        title: "DC motor — direction आणि speed",
        content: "DC motor दोन तारा — ध्रुव उलट केले तर दिशा उलटते.\n\nDirection:\n\t• तारा उलट्या → उलट घूर्णन.\n\t• H-bridge द्वारे नियंत्रित.\n\nSpeed:\n\t• PWM (analogWrite) ने speed.\n\t• duty cycle जास्त → वेग जास्त.\n\nसमस्या:\n\t• थेट Arduino pin मधून 20mA पेक्षा अधिक.\n\t• मोटरला 100mA+ — resistor नाही काम.\n\t• Transistor/driver आवश्यक.\n\nएकदिश control:\n\t• NPN transistor + flyback diode.\n\t• PWM pin → base → motor ON/OFF स्पीड.\n\nदोन्ही दिशा:\n\t• इथे H-bridge येतो.\n\nसराव: 3V toy motor + transistor सह गती articulation करा.",
      },
      {
        title: "H-bridge (L298N)",
        content: "दोन्ही दिशा आणि speed एकाच circuit ने — H-bridge.\n\nरचना:\n\t• 4 transistors — दोन वर, दोन खाली.\n\t• एक बाजू HIGH, दुसरी LOW → दिशा.\n\t• Enable/PWM → speed.\n\nL298N module:\n\t• Inputs: IN1/IN2 (direction), ENA (PWM speed).\n\t• VS motor power; VCC logic 5V.\n\nकाम:\n\t• IN1 HIGH, IN2 LOW → forward.\n\t• IN1 LOW, IN2 HIGH → reverse.\n\t• PWM ENA → गती.\n\nDIY:\n\t• आपले 4 transistors ब्रेडबोर्डवर.\n\t• flyback diodes आवश्यक.\n\nसराव: L298N सह toy motor चालवा — direction toggle व speed बदला.",
      },
      {
        title: "Servo motor",
        content: "Servo 0-180° कोन तंतोतंत ठरवतो — gearbox + feedback.\n\nभाग:\n\t• motor, gear, potentiometer (फिरत्या कोनाचा वाचन).\n\t• control circuit — PWM signal नुसार कोन.\n\nतारा:\n\t• Brown/black — GND.\n\t• Red — 5V.\t// सावधान: मोठ्या servo ला बाह्य वीज\n\t• Yellow/orange — signal pin.\n\nकोड (Servo library):\n\t#include <Servo.h>\n\tServo s;\n\tvoid setup() { s.attach(9); }\n\tvoid loop() {\n\t  s.write(0); delay(500);\n\t  s.write(90); delay(500);\n\t  s.write(180); delay(500);\n\t}\n\nमहत्त्वाचे:\n\t• attach(pin) — सर्वसामान्य pin 9/10.\n\t• write(angle) — 0 ते 180.\n\t• जास्त भार दिल्यास जाम — current वाढतो.\n\nसराव: servo sweep + potentiometer ने कोन नियंत्रण.",
      },
      {
        title: "Stepper motor",
        content: "Stepper अचूक पावलांत फिरतो — position कधीही लक्षात ठेवतो.\n\nकाम:\n\t• चार coils क्रमशः ON/OFF.\n\t• प्रत्येक pulse एक पाऊल.\n\t• Steps per revolution — उदा. 200 steps/rev (1.8°).\n\nDriver:\n\t• 28BYJ-48 ULN2003 module — साधा विकल्प.\n\t• A4988 — भारी stepper.\n\nकोड (Stepper library):\n\t#include <Stepper.h>\n\tconst int steps = 200;\n\tStepper m(steps, 8, 9, 10, 11);\n\tvoid setup() { m.setSpeed(60); }\n\tvoid loop() { m.step(100); delay(200); }\n\nवापर:\n\t• printer/नोंदणी head position.\n\t• 3D printer, CNC.\n\nटीप:\n\t• motor voltage/current योग्य driver निवडा.\n\t• हीट कमी — max current तपासा.\n\nसराव: 28BYJ-48 — एक full rotation करा व steps मोजा.",
      },
      {
        title: "आजचा सारांश",
        content: "Motor चे सहा मुद्दे:\n\n• प्रकार — DC, servo, stepper, brushless.\n• Direction — तारा उलट्या / H-bridge.\n• Speed — PWM duty cycle.\n• H-bridge — दोन दिशा + speed (L298N).\n• Servo — PWM write(angle); library सोपी.\n• Stepper — pulse/जोर steps पेक्षा अचूक.\n\nआजचे प्रॅक्टिस:\n\t०१. toy DC motor transistor ने चालवा.\n\t०२. L298N सह direction toggle.\n\t०३. Servo potentiometer ने control करा.\n\t०४. Stepper एक पूर्ण फिरवणी करा.\n\nपुढील पाठ — battery/power: ऊर्जा स्रोत.",
      },
    ],
    practiceQuestions: [
      "DC, servo, stepper मधील निवड कशी करता?",
      "H-bridge कशासाठी लागतो?",
      "Servo motor चे कोन कसे नियंत्रित होते?",
      "PWM ने speed कसा बदलतो?",
    ],
    quiz: [
      { question: "मोटरची दिशा कशी उलटवायची?", options: ["तारा उलट्या", "voltage वाढवा", "resistor जोडा", "LED जोडा"], correct: 0 },
      { question: "दोन दिशा + speed साठी कोणते circuit?", options: ["H-bridge", "Half-bridge", "Series", "Switch"], correct: 0 },
      { question: "Servo motor चे कोन कसे ठरतात?", options: ["PWM signal", "voltage", "capacitor", "relay"], correct: 0 },
      { question: "Stepper एक पाऊल कसे फिरतो?", options: ["pulse ने", "वेगाने", "ध्वनीने", "उष्णतेने"], correct: 0 },
      { question: "DC motor चा speed नियंत्रण तरी कसा?", options: ["PWM duty cycle", "ध्रुव बदल", "resistor फिल्टर", "capacitor"], correct: 0 },
    ],
    related: ["electronics-transistor", "electronics-switch-relay", "arduino-motor"],
    prev: "electronics-switch-relay",
    next: "electronics-battery-power",
  },
  {
    slug: "electronics-battery-power",
    categoryId: "electronics",
    title: "Battery - ऊर्जा स्रोत",
    marathiTitle: "बॅटरी सखोल — cells, mAh, series/parallel, प्रकार, charging सुरक्षा",
    level: "beginner",
    minutes: 25,
    summary: "बॅटरी म्हणजे काय, voltage vs capacity (mAh), series/parallel एकत्र जोडणी, AA/Li-ion/LiPo/9V प्रकार आणि charging व discharge सुरक्षा.",
    sections: [
      {
        title: "बॅटरी म्हणजे काय — cells",
        content: "बॅटरी रासायनिक ऊर्जा विद्युत उर्जेत बदलते.\n\nCell vs battery:\n\t• Cell — एक घटक.\n\t• Battery — एक किंवा अधिक cells एकत्र.\n\nकाम:\n\t• दोन टर्मिनल — + आणि −.\n\t• आत chemical reaction — प्रवाह बाहेर.\n\nमूल्य:\n\t• Voltage — प्रति cell नुसार (उदा. 1.5V AA).\n\t• Capacity — mAh.\n\nउपयोग:\n\t• Portable devices.\n\t• Projects — Arduino, LED, motors.\n\t• Backup — UPS, power banks.\n\nसराव: घरातील बॅटरीचे आकार व label वाचा (AA, AAA, 9V).",
      },
      {
        title: "Voltage vs Capacity (mAh)",
        content: "दोन महत्त्वाची माहिती क्षमतेची:\n\nVoltage (V):\n\t• प्रति cell nominal voltage.\n\t• AA alkaline — 1.5V; Li-ion — 3.7V; lead-acid — 2V.\n\nCapacity (mAh):\n\t• किती current किती तास देऊ शकते.\n\t• 2000mAh — 2000mA तासभर, किंवा 500mA चार तास.\n\nवास्तविक:\n\t• खर्च जास्त → capacity कमी (Peukert साधारण).\n\t• तापमान महत्त्वाचे.\n\nउदाहरण:\n\t• 5V, 2000mAh power bank → 5 × 2 = 10Wh ऊर्जा.\n\nसराव: power bank label वर Wh/mAh मोजा.",
      },
      {
        title: "Series / Parallel बॅटरी",
        content: "अनेक cells एकत्र जोडल्यावर मूल्ये बदलतात.\n\nSeries:\n\t• + पुढच्या − ला.\n\t• Voltage बेरीज; capacity समान.\n\t• उदा. 1.5V + 1.5V = 3V.\n\nParallel:\n\t• सर्व + एकत्र, सर्व − एकत्र.\n\t• Voltage समान; capacity बेरीज.\n\t• उदा. 1000mAh + 1000mAh = 2000mAh.\n\nनियम:\n\t• Series — समान प्रकार/रासायनिकता.\n\t• Parallel — समान voltage,\tनाहीतर त्रास.\n\t• नवीन पाठ अवश्य — cooled जुन्या cell नाही.\n\nसराव: 2 AA series → 3V divider बनवा; multimeter ने मोजा.",
      },
      {
        title: "प्रकार — AA, Li-ion, LiPo, 9V",
        content: "बॅटरी प्रकारांनुसार voltage व सुरक्षा भिन्न.\n\nAlkaline (AA/AAA):\n\t• 1.5V, पुन्हा चार्ज नाही (एकदा वापर).\n\t• सोपे — प्रयोगासाठी उत्तम.\n\nNiMH (rechargeable AA):\n\t• 1.2V, अनेकदा charge.\n\t• charger आवश्यक.\n\nLi-ion, 3.7V;\tLiPo:\n\t• उच्च ऊर्जा, हलकी.\n\t• सर्वspecial charger + तपमान तपासणी आवश्यक.\n\t• खेळणी/drone मध्ये — धोकादायक चुका टाळा.\n\n9V:\n\t• सहा cells series — multimeter साठी.\n\nसराव: प्रत्येक प्रकाराच्या label वर rated voltage व capacity वाचा.",
      },
      {
        title: "सुरक्षा — charging, discharge",
        content: "बॅटरी सुरक्षित वापरण्याचे नियम:\n\nCharging:\n\t• फक्त योग्य charger वापरा.\n\t• Li-ion/LiPo — रेट केलेला voltage/current.\n\t• ओव्हर व्होल्टेज — battery फुटू शकते.\n\nDischarge:\n\t• जास्त current → ताप + damage.\n\t• Li-ion ने जास्त discharge होऊ देऊ नका.\n\t• Lead-acid खाली discharge — lifespan कमी.\n\nशारीरिक:\n\t• थर्मल runaway टाळा — जास्त ताप alar.\n\t• ध्रुव उलट जोडू नका.\n\t• Swollen battery ताबडतोब काढून सुरक्षित dispose करा.\n\nप्रोजेक्ट नियम:\n\t• Arduino सह AA/नवी पॉवर — सुरक्षित.\n\t• LiPo — protection circuit व charger.\n\nसराव: आपल्या charging habits चा एक नियम बनवा.",
      },
      {
        title: "आजचा सारांश",
        content: "Battery चे सहा मुद्दे:\n\n• Cell vs battery — एक किंवा अनेक cells.\n• Voltage — प्रति cell नुसार.\n• Capacity — mAh; खर्च सोबत कमी.\n• Series — voltage बेरीज; parallel — capacity बेरीज.\n• प्रकार — alkaline, NiMH, Li-ion, LiPo, 9V.\n• सुरक्षा — योग्य charger, ध्रुव, overdischarge टाळा.\n\nआजचे प्रॅक्टिस:\n\t०१. घरातील batteries visualize करा.\n\t०२. Power bank capacity गणित.\n\t०३. दोन AA series मोजा.\n\t०४. rechargeable व single-use वेगळे करा.\n\nपुढील पाठ — power supply: स्थिर voltage.",
      },
    ],
    practiceQuestions: [
      "mAh म्हणजे काय — कसे मोजायचे?",
      "Series आणि parallel बॅटरीत काय फरक?",
      "LiPo बॅटरी सह काय काळजी घ्यावी?",
      "Rechargeable आणि single-use मध्ये काय फरक?",
    ],
    quiz: [
      { question: "AA alkaline नominal voltage?", options: ["1.5V", "9V", "3.7V", "12V"], correct: 0 },
      { question: "2000mAh म्हणजे 500mA ने किती तास?", options: ["4 तास", "1 तास", "2 तास", "10 तास"], correct: 0 },
      { question: "Series जोडणीत कोणती बेरीज होते?", options: ["Voltage", "Capacity", "Current", "ताप"], correct: 0 },
      { question: "दोन AA series = किती V?", options: ["3V", "1.5V", "4.5V", "2V"], correct: 0 },
      { question: "LiPo charging साठी काय?", options: ["योग्य charger + protection", "थेट USB", "साधा charger", "resistor"], correct: 0 },
    ],
    related: ["electronics-circuits", "electronics-power-supply", "electronics-motor"],
    prev: "electronics-motor",
    next: "electronics-power-supply",
  },
  {
    slug: "electronics-power-supply",
    categoryId: "electronics",
    title: "Power Supply - स्थिर वीज",
    marathiTitle: "पॉवर सप्लाय सखोल — linear regulator, 7805, buck converter, rails, protection",
    level: "intermediate",
    minutes: 30,
    summary: "विविध voltage ची गरज, linear regulator (7805) आणि तोटे, buck converter कार्यक्षम, 5V/3.3V rails Arduino साठी आणि reverse polarity protection.",
    sections: [
      {
        title: "पॉवर सप्लायची गरज",
        content: "प्रत्येक घटकाला योग्य voltage हवे — चुकल्यास नुकसान.\n\nउदाहरणे:\n\t• Arduino — 5V.\n\t• ESP8266 — 3.3V.\n\t• Servo — 5-6V.\n\t• Relay coil — 5V/12V.\n\nप्रवाह धरवा:\n\t• सर्व load च्या current बेरीज हवी.\n\t• Margin ठेवा (उदा. 2×).\n\nनको ती समस्या:\n\t• जास्त voltage → घटक जळतो.\n\t• कमी current → voltage बुडते.\n\nउपाय शृंगार:\n\t• Battery + regulator → स्थिर voltage.\n\t• Buck/boost — कार्यक्षम रूपांतर.\n\nसराव: आपल्या current project चा एकूण current अंदाज घ्या.",
      },
      {
        title: "Linear regulator (7805)",
        content: "7805 — 5V linear regulator, सर्वाधिक वापरलेला.\n\nकाम:\n\t• Input = 7-35V.\n\t• Output स्थिर 5V, 1A (max).\n\t• फरक (excess voltage) उष्णतेत नष्ट होतो.\n\nजोडणी:\n\t• Vin, GND, Vout.\n\t• Input/output capacitors (100nF) आवश्यक.\n\t• Heatsink — मोठ्या current साठी.\n\nसमस्या — efficiency:\n\t• 12V in, 5V out, 0.5A → 3.5W उष्णता.\n\t• कमी output व मोठा input → कार्यक्षम नाही.\n\nत्यामुळे:\n\t• लहान current साठी उत्तम.\n\t• मोठ्या efficiency साठी buck.\n\nसराव: 7805 circuit बनवा — 9V input → 5V output मोजा.",
      },
      {
        title: "Buck converter",
        content: "Buck converter voltage खाली आणतो — कार्यक्षमता उच्च.\n\nकाम:\n\t• Switch (MOSFET) वेगाने ON/OFF.\n\t• Inductor + capacitor ऊर्जा ठेवतात.\n\t• duty cycle voltage ठरवतो.\n\nफायदे:\n\t• Efficiency 80-95% — उष्णता कमी.\n\t• Narrow input ते output.\n\nवापर:\n\t• Power banks, laptop, LED drivers.\n\t• LM2596 module — समायोज्य 5V/12V.\n\nLM2596 सेटिंग:\n\t• Potentiometer फिरवून output तयार.\n\t• Output multimeter ने मोजा — आधी.\n\nटीप:\n\t• Input voltage rating पेक्षा जास्त नको.\n\t• Output capacitor ने स्थिरता.\n\nसराव: LM2596 module — output 5V सेट करा.",
      },
      {
        title: "5V / 3.3V rails — Arduino साठी",
        content: "Arduino board वर दोन voltage rails:\n\n5V:\n\t• 5V pin — बाह्य sensors/motors.\n\t• Arduino Uno 5V pin MAX ~500mA.\n\t• आधी USB/एकत्र power न घेता.\n\n3.3V:\n\t• ESP8266/काही sensor — 3.3V.\n\t• 3.3V pin फक्त ~50-150mA.\n\t• जास्त लोड — बाह्य regulator.\n\nपॉवर स्रोत:\n\t• USB 5V.\n\t• Vin 7-12V → board ने 5V reg.\n\nनियम:\n\t• आधी एकच power source वापरा.\n\t• मोठ्या motor ने USB पासून नको — बाह्य.\n\t• Common GND अनिवार्य.\n\nसराव: integrating multiple sensors — एकूण current तपासा.",
      },
      {
        title: "Reverse polarity व protection",
        content: "Power चुकीच्या दिशेने जोडल्यास घटक अनेकदा जळतात.\n\nसमस्या:\n\t• + आणि − उलट — regulator/MCU नुकसान.\n\nउपाय १ — series diode:\n\t• Power (+) मध्ये diode.\n\t• उलट polarity → diode block.\n\t• तोटा — ~0.7V drop.\n\nउपाय २ — Schottky diode:\n\t• Forward drop कमी (~0.3V).\n\nउपाय ३ — reverse-polarity MOSFET:\n\t• कमी loss, पण complex.\n\nइतर सुरक्षा:\n\t• Fuse — over-current.\n\t• TVS diode — spikes.\n\t• Capacitor पॉवर जवळ.\n\nसराव: अपने power input मध्ये series protection diode जोडा.",
      },
      {
        title: "आजचा सारांश",
        content: "Power supply चे सहा मुद्दे:\n\n• गरज — प्रत्येकाला योग्य voltage/current.\n• 7805 — साधा 5V linear; उष्णता.\n• Buck — कार्यक्षम रूपांतर (LM2596).\n• Rails — 5V व 3.3V; अधिक current बाह्य.\n• Protection — diode/fuse/TVS.\n• Common GND — सर्व सर्किटची मुळा.\n\nआजचे प्रॅक्टिस:\n\t०१. 7805 output मोजा.\n\t०२. LM2596 5V सेट करा.\n\t०३. Reverse polarity diode जोडा.\n\t०४. पॉवर budget एक शीट बनवा.\n\nपुढे Arduino — electronics-basics नंतर arduino-basics.",
      },
    ],
    practiceQuestions: [
      "Linear regulator चा मुख्य तोटा काय?",
      "Buck converter कार्यक्षम का आहे?",
      "Arduino 3.3V pin मधून जास्त current ने काय होते?",
      "Reverse polarity वाचण्याचे एक तंत्र?",
    ],
    quiz: [
      { question: "7805 चा output voltage?", options: ["5V", "3.3V", "12V", "9V"], correct: 0 },
      { question: "Linear regulator ची मुख्य समस्या?", options: ["उष्णता/नुकसान", "आवाज", "Size", "खर्च नाही"], correct: 0 },
      { question: "कार्यक्षम voltage कमी करणारा?", options: ["Buck converter", "resistor", "diode", "LED"], correct: 0 },
      { question: "Reverse polarity वाचण्याचा सोपा उपाय?", options: ["Series diode", "capacitor", "resistor", "switch"], correct: 0 },
      { question: "ESP8266 चा हवा voltage?", options: ["3.3V", "5V", "12V", "1.5V"], correct: 0 },
    ],
    related: ["electronics-battery-power", "arduino-basics", "electronics-capacitor"],
    prev: "electronics-battery-power",
    next: "arduino-basics",
  },
];