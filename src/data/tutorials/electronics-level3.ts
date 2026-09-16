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
        title: "Diode — one-way valve",
        content: "Diode हा दोन-पायांचा घटक — वीज फक्त एका दिशेने जाऊ देतो. साधर्म्य: पाण्याचा नलकोश (check valve). Forward मध्ये पाणी वाहते; Reverse मध्ये थांबते.\nदोन पाय: Anode (A) — प्रवाह या बाजूने आत. Cathode (K) — प्रवाह बाहेर; Cathode वर रेषेची खूण (band) असते.\nForward bias: Anode ला +, Cathode ला −. ~0.6-0.7V च्या पुढे प्रवाह वाहतो (silicon); Germanium ~0.3V. प्रवाह वाढला तर diode गरम होतो.\nReverse bias: Anode ला −, Cathode ला +. प्रवाह ~शून्य; जास्त reverse voltage → breakdown (नुकसान).\nIV curve: Forward मध्ये वक्र वर गेल्यावर प्रवाह वेगाने वाढतो; Reverse मध्ये सपाट, त्यानंतर abrupt breakdown.\nवापर: AC ला DC मध्ये बदलणे (rectifier), उलट प्रवाहापासून वाचवणे, signal demodulation.\nसराव: datasheet मध्ये 1N4007 चे max reverse voltage वाचा; 1N4148 — लहान signal साठी.",
      },
      {
        title: "Rectifier — AC → DC",
        content: "घरातील वीज AC असते (प्रत्यावर्ती) — मात्र बहुतेक devices ला DC लागते.\nHalf-wave rectifier: एक diode — फक्त अर्धे चक्र जाते; उरलेले अर्धे तुटले.\nFull-wave rectifier: 4 diodes (bridge) — दोन्ही अर्ध्या चक्रांतून प्रवाह. उदा. 1N4007 × 4.\nBridge rectifier क्रिया: AC दोन्ही टोकांवर झालेल्या चक्रांत DC मिळते. Output मध्ये लाट (ripple) राहते.\nनंतर: Capacitor फिल्टर — ripple कमी; Regulator — स्थिर voltage.\nचला उदाहरणात: 12V AC → bridge → ~16V DC (peak) → capacitor → 7805 → 5V.\nसराव: bridge rectifier + capacitor चे आकृती स्वतः काढा.",
      },
      {
        title: "Zener diode — voltage स्थिर",
        content: "Zener diode reverse-breakdown प्रदेशात चालवतात — voltage स्थिर ठेवणे. सामान्य diode breakdown होऊन नष्ट होतो; पण zener control-मध्ये.\nकाम: जास्त reverse voltage → zener ती voltage कायम ठेवतो. Series resistor current मर्यादित करतो.\nउदा. 5.1V zener: Input 9V → series 470Ω → output 5.1V. बदलत्या load वर output जवळजवळ स्थिर.\nसीमा: फक्त small load साठी (लहान current). मोठ्या load साठी regulator चांगला.\nनिवड: Zener voltage — हव्या value नुसार (3.3V, 5.1V, 12V); Power rating — W प्रमाणे.\nसराव: 5.1V zener circuit बनवून output मोजा — input 9V ते 6V बदलल्यास फरक दिसेल का?",
      },
      {
        title: "LED व photodiode",
        content: "LED ही खास diode — forward bias मध्ये प्रकाश देते. Forward bias मध्ये प्रकाश; Reverse मध्ये नाही. Voltage drop ~1.8-3.3V (रंगानुसार). Resistor आवश्यक — अन्यथा जास्त current.\nPhotodiode: प्रकाश पडल्यास प्रवाह बदलतो. Reverse bias मध्ये अधिक संवेदनशीलता. ऑप्टिकल sensors, टीव्ही remote receiver.\nफरक: LED उत्सर्जक (emits); photodiode संवेदक (receives). दोघे एकत्र → optocoupler.\nOptocoupler: एका circuit चा signal दुसऱ्या circuit ला वेगळेपणा देतो.\nसराव: विविध रंगांतील LEDs चे voltage drop मोजा.",
      },
      {
        title: "आजचा सारांश",
        content: "Diode चे सहा मुद्दे: काम — वीज फक्त एका दिशेने. Forward bias — प्रवाह येतो; reverse — नाही. Rectifier — AC → DC अर्धे/संपूर्ण चक्र. Zener — reverse-breakdown मध्ये voltage स्थिर. LED — forward bias मध्ये प्रकाश. Photodiode — प्रकाशाचे वाचन.\nआजचे प्रॅक्टिस: ०१. diode forward/reverse जोडून प्रवाह तपासा. ०२. bridge rectifier चे आकृती काढा. ०३. LED drop मोजा. ०४. Zener circuit मध्ये input/output मोजा.\nपुढील पाठ — switch/relay: नियंत्रण आणि isolation.",
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
        title: "Switch प्रकार आणि debounce",
        content: "Switch सर्किटची जाणीवपूर्वक जोडणी/तोड करतो. प्रकार: SPST — on/off (एक स्विच); SPDT — दोन स्थाने (A किंवा B); Push button (momentary) — दाबल्यावरच; Toggle — स्थान राखतो; Slide, rocker, rotary.\nनिवड: current/voltage rating विचारात घ्या (उदा. 2A 125V); momentary vs latching वापरानुसार.\nPhysical बटण दाबताना contact हलका 'चटचट' होतो — bounce म्हणतात. समस्या: डिजिटल वाचनात ०/१/०/१ झटपट बदल; counter एकाऐवजी अनेक गणती करतो.\nउपाय — Software debounce: थोडा delay पडताळा. बटण स्थिर होण्यासाठी 5-20ms पुरेसा. Hardware debounce: capacitor बटणाला समांतर (100nF).\nPull-up/pull-down: INPUT_PULLUP वापरा — बटण दुसऱ्या टोकाला GND.\nसराव: घरातील switch प्रकार ओळखा (SPST/SPDT); बटण counter — debounce न करता बग पहा.",
      },
      {
        title: "Relay — coil आणि contacts",
        content: "Relay हा solenoid घटक — लहान विद्युतदाबाने मोठी स्विच बंद उघडतो.\nभाग: Coil — लहान current ने magnetic field; Switch (contacts) — मोठी circuit.\nकाम: Coil ला 5V दिल्यावर contact बंद होतो; Coil काढल्यावर contact उघडतो.\nवापर: Arduino सह AC उपकरण चालवणे (दिवा, पंखा), Big current load, Isolation.\nप्रकार: SPDT relay — common + दोन contacts (NO/NC). Module (optocoupled) — Arduino साठी सोयीचे.\nरेटिंग: Coil voltage — 5V, 12V; Contact rating — 10A 250V AC.\nसराव: home रिले switch पाहून coil व contacts ओळखा.",
      },
      {
        title: "Relay सर्किट — flyback diode",
        content: "Coil inductive असते — तो बंद करताना उलट spike निर्माण होतो. समस्या: Coil वर झपाट्याने voltage स्पाइक (उलट); तो transistor/बोर्ड खराब करतो.\nउपाय — flyback diode: Coil ला reversed जोडलेला diode. स्पाइक diode मधून गळतो; coil current नष्ट होते.\nजोडणी: Coil (+) → transistor collector. Diode cathode → coil (+), anode → GND (उलट).\nनियम: flyback diode नेहमी coil/मोटरच्या उलट. फक्त relay नाही — कोणताही inductive load.\nसराव: relay module वर बोर्डातील diode ओळखा.",
      },
      {
        title: "Transistor + relay driver",
        content: "Relay coil ला मोठा current लागतो (~50-100mA) — Arduino थेट देऊ शकत नाही.\nउपाय — transistor driver: Arduino pin → base resistor (1kΩ) → NPN transistor. Relay coil Collector वर, Emitter GND. Flyback diode coil ला उलट.\nBase resistor: R = (5 − 0.7) / I_base. I_base ~1-5mA → 1kΩ योग्य.\nचुका: flyback diode नाही → transistor जळतो; base resistor नाही → base current खूप.",
        code: `int relay = 9;
void setup() { pinMode(relay, OUTPUT); }
void loop() {
  digitalWrite(relay, HIGH);
  delay(2000);
  digitalWrite(relay, LOW);
  delay(2000);
}`,
        codeLanguage: "cpp",
        output: `// relay toggles every 2 seconds`,
      },
      {
        title: "आजचा सारांश",
        content: "Switch/relay चे सहा मुद्दे: Switch — जाणीवपूर्वक circuit जोडणी/तोड. Bounce — contact चटचट; software/hardware debounce. Relay — coil ने मोठी switch नियंत्रित. Flyback diode — inductive coil चा spike. Driver — transistor + base resistor मोठा load. Isolation — control आणि power वेगळे.\nआजचे प्रॅक्टिस: ०१. घरातील switch प्रकार ओळखा. ०२. Arduino + button debounce counter. ०३. 5V relay + transistor driver. ०४. flyback diode काढून फरक बघा.\nपुढील पाठ — motor: DC, servo, stepper.",
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
        content: "मोटर विद्युत ऊर्जा mechanical हालचालीत बदलते. सामान्य प्रकार: DC motor — सतत फिरणारा; कमी खर्च; direction+speed नियंत्रण. Servo — 0-180° नेमक्या कोनात; library सह सोपा. Stepper — अचूक पावले; position control. Brushless — रोबोट व drone मध्ये.\nनिवड: फिरत राहायचे? → DC. कोन हवा? → servo. अचूक position? → stepper.\nरेटिंग: Voltage (3V, 5V, 12V); Current (stall current); Torque (किती भार ओढेल).\nसराव: घरातील उपकरणांतील मोटर प्रकार ओळखा (पंखा=AC; toy=DC; printer=stepper).",
      },
      {
        title: "DC motor — direction आणि speed",
        content: "DC motor दोन तारा — ध्रुव उलट केले तर दिशा उलटते. Direction: तारा उलट्या → उलट घूर्णन; H-bridge द्वारे नियंत्रित.\nSpeed: PWM (analogWrite) ने speed. Duty cycle जास्त → वेग जास्त.\nसमस्या: थेट Arduino pin मधून 20mA पेक्षा अधिक. मोटरला 100mA+ — transistor/driver आवश्यक.\nएकदिश control: NPN transistor + flyback diode. PWM pin → base → motor ON/OFF स्पीड.\nसराव: 3V toy motor + transistor सह गती articulation करा.",
      },
      {
        title: "H-bridge (L298N)",
        content: "दोन्ही दिशा आणि speed एकाच circuit ने — H-bridge.\nरचना: 4 transistors — दोन वर, दोन खाली. एक बाजू HIGH, दुसरी LOW → दिशा. Enable/PWM → speed.\nL298N module: Inputs IN1/IN2 (direction), ENA (PWM speed). VS motor power; VCC logic 5V.\nकाम: IN1 HIGH, IN2 LOW → forward. IN1 LOW, IN2 HIGH → reverse. PWM ENA → गती.\nDIY: आपले 4 transistors ब्रेडबोर्डवर; flyback diodes आवश्यक.\nसराव: L298N सह toy motor चालवा — direction toggle व speed बदला.",
      },
      {
        title: "Servo motor",
        content: "Servo 0-180° कोन तंतोतंत ठरवतो — gearbox + feedback. भाग: motor, gear, potentiometer (फिरत्या कोनाचा वाचन); control circuit — PWM signal नुसार कोन.\nतारा: Brown/black — GND; Red — 5V (मोठ्या servo ला बाह्य वीज); Yellow/orange — signal pin.\nमहत्त्वाचे: attach(pin) — सर्वसामान्य pin 9/10. write(angle) — 0 ते 180. जास्त भार दिल्यास जाम.\nसराव: servo sweep + potentiometer ने कोन नियंत्रण.",
        code: `#include <Servo.h>
Servo s;
void setup() { s.attach(9); }
void loop() {
  s.write(0); delay(500);
  s.write(90); delay(500);
  s.write(180); delay(500);
}`,
        codeLanguage: "cpp",
        output: `// servo sweeps 0 → 90 → 180°`,
      },
      {
        title: "Stepper motor",
        content: "Stepper अचूक पावलांत फिरतो — position कधीही लक्षात ठेवतो. काम: चार coils क्रमशः ON/OFF. प्रत्येक pulse एक पाऊल. Steps per revolution — उदा. 200 steps/rev (1.8°).\nDriver: 28BYJ-48 ULN2003 module — साधा विकल्प. A4988 — भारी stepper.\nवापर: printer/नोंदणी head position, 3D printer, CNC.\nटीप: motor voltage/current योग्य driver निवडा; हीट कमी — max current तपासा.\nसराव: 28BYJ-48 — एक full rotation करा व steps मोजा.",
        code: `#include <Stepper.h>
const int steps = 200;
Stepper m(steps, 8, 9, 10, 11);
void setup() { m.setSpeed(60); }
void loop() { m.step(100); delay(200); }`,
        codeLanguage: "cpp",
        output: `// stepper rotates 100 steps`,
      },
      {
        title: "आजचा सारांश",
        content: "Motor चे सहा मुद्दे: प्रकार — DC, servo, stepper, brushless. Direction — तारा उलट्या / H-bridge. Speed — PWM duty cycle. H-bridge — दोन दिशा + speed (L298N). Servo — PWM write(angle); library सोपी. Stepper — pulse/जोर steps पेक्षा अचूक.\nआजचे प्रॅक्टिस: ०१. toy DC motor transistor ने चालवा. ०२. L298N सह direction toggle. ०३. Servo potentiometer ने control करा. ०४. Stepper एक पूर्ण फिरवणी करा.\nपुढील पाठ — battery/power: ऊर्जा स्रोत.",
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
        title: "बॅटरी — cells, voltage, capacity",
        content: "बॅटरी रासायनिक ऊर्जा विद्युत उर्जेत बदलते. Cell vs battery: Cell — एक घटक; Battery — एक किंवा अधिक cells एकत्र.\nकाम: दोन टर्मिनल (+ आणि −). आत chemical reaction — प्रवाह बाहेर.\nमूल्य: Voltage — प्रति cell नुसार (AA alkaline — 1.5V; Li-ion — 3.7V; lead-acid — 2V). Capacity — mAh; 2000mAh — 2000mA तासभर, किंवा 500mA चार तास.\nवास्तविक: खर्च जास्त → capacity कमी (Peukert). तापमान महत्त्वाचे. उदा. 5V, 2000mAh power bank → 5 × 2 = 10Wh ऊर्जा.\nउपयोग: Portable devices, Projects (Arduino, LED, motors), Backup (UPS, power banks).\nसराव: घरातील बॅटरीचे label वाचा; power bank label वर Wh/mAh मोजा.",
      },
      {
        title: "Series / Parallel बॅटरी",
        content: "अनेक cells एकत्र जोडल्यावर मूल्ये बदलतात.\nSeries: + पुढच्या − ला. Voltage बेरीज; capacity समान. उदा. 1.5V + 1.5V = 3V.\nParallel: सर्व + एकत्र, सर्व − एकत्र. Voltage समान; capacity बेरीज. उदा. 1000mAh + 1000mAh = 2000mAh.\nनियम: Series — समान प्रकार/रासायनिकता. Parallel — समान voltage; नाहीतर त्रास.\nसराव: 2 AA series → 3V divider बनवा; multimeter ने मोजा.",
      },
      {
        title: "प्रकार — AA, Li-ion, LiPo, 9V",
        content: "बॅटरी प्रकारांनुसार voltage व सुरक्षा भिन्न.\nAlkaline (AA/AAA): 1.5V, पुन्हा चार्ज नाही (एकदा वापर). सोपे — प्रयोगासाठी उत्तम.\nNiMH (rechargeable AA): 1.2V, अनेकदा charge. Charger आवश्यक.\nLi-ion (3.7V), LiPo: उच्च ऊर्जा, हलकी. सर्व special charger + तपमान तपासणी आवश्यक. खेळणी/drone मध्ये — धोकादायक चुका टाळा.\n9V: सहा cells series — multimeter साठी.\nसराव: प्रत्येक प्रकाराच्या label वर rated voltage व capacity वाचा.",
      },
      {
        title: "सुरक्षा — charging, discharge",
        content: "बॅटरी सुरक्षित वापरण्याचे नियम:\nCharging: फक्त योग्य charger वापरा. Li-ion/LiPo — रेट केलेला voltage/current. ओव्हर व्होल्टेज — battery फुटू शकते.\nDischarge: जास्त current → ताप + damage. Li-ion ने जास्त discharge होऊ देऊ नका. Lead-acid खाली discharge — lifespan कमी.\nशारीरिक: थर्मल runaway टाळा; ध्रुव उलट जोडू नका; Swollen battery ताबडतोब काढून dispose करा.\nप्रोजेक्ट नियम: Arduino सह AA/नवी पॉवर — सुरक्षित. LiPo — protection circuit व charger.\nसराव: आपल्या charging habits चा एक नियम बनवा.",
      },
      {
        title: "आजचा सारांश",
        content: "Battery चे सहा मुद्दे: Cell vs battery — एक किंवा अनेक cells. Voltage — प्रति cell नुसार. Capacity — mAh; खर्च सोबत कमी. Series — voltage बेरीज; parallel — capacity बेरीज. प्रकार — alkaline, NiMH, Li-ion, LiPo, 9V. सुरक्षा — योग्य charger, ध्रुव, overdischarge टाळा.\nआजचे प्रॅक्टिस: ०१. घरातील batteries visualize करा. ०२. Power bank capacity गणित. ०३. दोन AA series मोजा. ०४. rechargeable व single-use वेगळे करा.\nपुढील पाठ — power supply: स्थिर voltage.",
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
        content: "प्रत्येक घटकाला योग्य voltage हवे — चुकल्यास नुकसान. उदाहरणे: Arduino — 5V; ESP8266 — 3.3V; Servo — 5-6V; Relay coil — 5V/12V.\nप्रवाह धरवा: सर्व load च्या current बेरीज हवी. Margin ठेवा (उदा. 2×).\nसमस्या: जास्त voltage → घटक जळतो; कमी current → voltage बुडते.\nउपाय: Battery + regulator → स्थिर voltage. Buck/boost — कार्यक्षम रूपांतर.\nसराव: आपल्या current project चा एकूण current अंदाज घ्या.",
      },
      {
        title: "Linear regulator (7805)",
        content: "7805 — 5V linear regulator, सर्वाधिक वापरलेला. काम: Input = 7-35V; Output स्थिर 5V, 1A (max). फरक (excess voltage) उष्णतेत नष्ट होतो.\nजोडणी: Vin, GND, Vout. Input/output capacitors (100nF) आवश्यक. Heatsink — मोठ्या current साठी.\nसमस्या — efficiency: 12V in, 5V out, 0.5A → 3.5W उष्णता. कमी output व मोठा input → कार्यक्षम नाही.\nत्यामुळे: लहान current साठी उत्तम; मोठ्या efficiency साठी buck.\nसराव: 7805 circuit बनवा — 9V input → 5V output मोजा.",
      },
      {
        title: "Buck converter",
        content: "Buck converter voltage खाली आणतो — कार्यक्षमता उच्च.\nकाम: Switch (MOSFET) वेगाने ON/OFF. Inductor + capacitor ऊर्जा ठेवतात. Duty cycle voltage ठरवतो.\nफायदे: Efficiency 80-95% — उष्णता कमी. Narrow input ते output.\nवापर: Power banks, laptop, LED drivers. LM2596 module — समायोज्य 5V/12V.\nLM2596 सेटिंग: Potentiometer फिरवून output तयार. Output multimeter ने मोजा — आधी.\nटीप: Input voltage rating पेक्षा जास्त नको. Output capacitor ने स्थिरता.\nसराव: LM2596 module — output 5V सेट करा.",
      },
      {
        title: "5V / 3.3V rails — Arduino साठी",
        content: "Arduino board वर दोन voltage rails:\n5V: 5V pin — बाह्य sensors/motors. Arduino Uno 5V pin MAX ~500mA.\n3.3V: ESP8266/काही sensor — 3.3V. 3.3V pin फक्त ~50-150mA. जास्त लोड — बाह्य regulator.\nपॉवर स्रोत: USB 5V; Vin 7-12V → board ने 5V reg.\nनियम: आधी एकच power source वापरा. मोठ्या motor ने USB पासून नको — बाह्य. Common GND अनिवार्य.\nसराव: integrating multiple sensors — एकूण current तपासा.",
      },
      {
        title: "Reverse polarity व protection",
        content: "Power चुकीच्या दिशेने जोडल्यास घटक अनेकदा जळतात. समस्या: + आणि − उलट — regulator/MCU नुकसान.\nउपाय १ — series diode: Power (+) मध्ये diode. उलट polarity → diode block. तोटा — ~0.7V drop.\nउपाय २ — Schottky diode: Forward drop कमी (~0.3V).\nउपाय ३ — reverse-polarity MOSFET: कमी loss, पण complex.\nइतर सुरक्षा: Fuse — over-current; TVS diode — spikes; Capacitor पॉवर जवळ.\nसराव: अपने power input मध्ये series protection diode जोडा.",
      },
      {
        title: "आजचा सारांश",
        content: "Power supply चे सहा मुद्दे: गरज — प्रत्येकाला योग्य voltage/current. 7805 — साधा 5V linear; उष्णता. Buck — कार्यक्षम रूपांतर (LM2596). Rails — 5V व 3.3V; अधिक current बाह्य. Protection — diode/fuse/TVS. Common GND — सर्व सर्किटची मुळा.\nआजचे प्रॅक्टिस: ०१. 7805 output मोजा. ०२. LM2596 5V सेट करा. ०३. Reverse polarity diode जोडा. ०४. पॉवर budget एक शीट बनवा.\nपुढे Arduino — electronics-basics नंतर arduino-basics.",
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