import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 7 — Advanced bench skills & components ===
// esp-weather-station → electronics-multimeter → electronics-soldering → electronics-pcb
// → seven-segment → t555-timer → raspberrypi-intro (end of chain)

export const electronicsAdvanced: Tutorial[] = [
  {
    slug: "electronics-multimeter",
    categoryId: "electronics",
    title: "How to Use a Multimeter",
    marathiTitle: "Multimeter — voltage/current/resistance, continuity, safety",
    level: "intermediate",
    minutes: 30,
    summary: "Multimeter चे मोड — AC/DC voltage, current, resistance, continuity — safe usage, probes आणि troubleshooting टिप्स.",
    sections: [
      {
        title: "Multimeter — voltage/current/resistance, continuity, safety म्हणजे काय?",
        content: "Multimeter हा measurement tool आहे जो voltage, current, resistance आणि continuity मोजतो — electronics troubleshooting चा सर्वात आधार.\nयोग्य mode निवडणे, probes ची स्थिती आणि LIVE circuit वर काय करू/करू नये हे या धड्यात आहे.\nशिकल्यावर तुमचे sensor/frame तपासण्या आपल्या हाती येतील.",
      },
      {
        title: "का शिकावे? Multimeter — voltage/current/resistance, continuity, safety चे फायदे आणि महत्त्व",
        content: "बहुतेक भार काम न करणाऱ्या circuits मधील त्रुटी बरोबरीच्या असतात — supply नाही, short ground, सैल जोडणी; multimeter एकदा वापरल्यास ती लगेच दिसते.\nन विचारता कोणताही repair/prototyping या साधनाशिवाय अर्धवट राहते, म्हणून हे necessary tool आहे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Voltage मोडवर Resistance मोजणे — meter नुकसान; नेहमी mode ठीक असल्याची खात्री करा.\n✗ Probes उलटे — DC voltage -value दाखवेल, पण मोजण्यात त्रुटी नाही; current मध्ये उलट धोकादायक.\n✗ Current मोजणे series मध्ये केले पाहिजे; parallel केल्यास short!\n✗ जास्त voltage tests — CAT rating ठीक असलेला meter वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Measurements बेसिक",
        content: "Voltage (V) — parallel जोडा. Current (A) — series जोडा (मीटरच्या मधून धारा वाहते). Resistance (Ω) — power बंद असताना; probe टोक दोन टोकांना. Continuity (buzzer) — wire जोडलेली आहे का; लागल्यास beep.",
        code: `// Voltage  → parallel
// Current  → series
// Ω        → power OFF
// Continuity → 2 probes + beep = जोडणी सुदृढ`,
        codeLanguage: "cpp",
        output: `// उदा.: 9V battery → 9.2V दिसते
// short fuse circuit → continuity beep`,
      },
      {
        title: "Troubleshooting pattern",
        content: "क्रियाक्रम: 1) power on का? 2) DC voltage supply मोजा. 3) GND continuity तपासा. 4) प्रत्येक जोड बिंदूवर voltage मोजा (प्रगती voltage सोडते). 5) suspect sensor resistance तपासा. हा क्रम सर्वात जलद उत्तर देणाऱ्या दोष (supply/ground) प्रथम टाकतो.",
        code: `// 1. supply voltage (VCC→GND)
// 2. continuity GND सर्व nodes
// 3. प्रगती व बिंदूवर voltage
// 4. sensor/led/pin resistance तपासा`,
        codeLanguage: "cpp",
        output: `// असा क्रम दोष त्वरित ठिकाणावर पोहोचवतो`,
      },
      {
        title: "सारांश — multimeter",
        content: "Multimeter: V/A/Ω/continuity. Series vs parallel तर्क. power OFF वर resistance. Safety: mode दुहेरी तपासा, CAT rating. troubleshooting क्रम. पुढे: soldering — घटक जोडण्याचे हातचे कौशल्य.",
      },
    ],
    practiceQuestions: [
      "Voltage vs current मोजण्याची पद्धत काय वेगळी?",
      "Resistance मोजताना power कशामुळे बंद?",
      "Continuity मधून कोणती त्रुटी सापडते?",
      "Troubleshooting क्रम कोणता ठेवता?",
    ],
    quiz: [
      { question: "Voltage मोजताना probes कसे जोडता?", options: ["parallel", "series", "फक्त एक", "अन्य"], correct: 0 },
      { question: "Current कोणत्या मोडमध्ये series?", options: ["A (amp)", "V", "Ω", "continuity"], correct: 0 },
      { question: "Resistance मोजताना?", options: ["power बंद करून", "power on", "मोठे voltage", "काही नाही"], correct: 0 },
      { question: "Wire जोडलेली आहे ते कोणते mode सांगते?", options: ["continuity (beep)", "Ω", "VAC", "Hz"], correct: 0 },
      { question: "Dua levels नसलेल्या meter मध्ये धोका कोणता?", options: ["CAT rating कमी", "LCD नाही", "कोणी नाही", "फक्त नाव"], correct: 0 },
    ],
    related: ["electronics-battery-power", "electronics-circuits", "electronics-power-supply"],
    prev: "esp-weather-station",
    next: "electronics-soldering",
  },
  {
    slug: "electronics-soldering",
    categoryId: "electronics",
    title: "Soldering Basics",
    marathiTitle: "Soldering — iron, flux, joints, through-hole practice",
    level: "intermediate",
    minutes: 30,
    summary: "Soldering म्हणजे काय, iron/tin temperatures, good vs cold joint, through-hole practice आणि सुरक्षा टिप्स.",
    sections: [
      {
        title: "Soldering — iron, flux, joints, through-hole practice म्हणजे काय?",
        content: "Soldering ही धातू जोडण्याची पद्धत आहे — गरम iron ने low-melting tin (solder) वितळवून घटक आणि PCB pad जोडले जातात.\nयोग्य temperature, flux आणि joint तयार करण्याचे तंत्र हे विद्यार्थ्यांचे हातचे कौशल्य आहे.\nहा धडा equipment, good vs cold joint आणि सुरक्षित वापर दाखवतो.",
      },
      {
        title: "का शिकावे? Soldering — iron, flux, joints, through-hole practice चे फायदे आणि महत्त्व",
        content: "स्वतःचे प्रोजेक्ट घागर किंवा breakage दुरुस्त करण्यासाठी soldering हे hand-skills मधील सर्वात उपयुक्त आहे.\nPCB design, repair service, prototype robustness — प्रत्येक जागी या तंत्रावर अवलंबून असते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ जास्त tin घालणे — bridge लागतो; थोडासा वापरा.\n✗ Cold joint — iron लवकर काढल्यास dull/puffy असंबद्ध जोड बनते; iron थोडा ठिकाणी ठेवा.\n✗ सर्वात झडपने tin गिळकाथी सह धरू नका — resin flux विषारी; stand वर आणि वेंटिलेशन.\n✗ Iron टीप घासणे — wet sponge/brass wool — टीप लांब टिकते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Equipment आणि technique",
        content: "Iron ~350°C (tin/lead) किंवा 320°C (lead-free). Tin 0.8mm rosin-core. Flux जोडल्यास जोड चमकदार व शुद्ध. Through-hole: lead पाडात अडकवा, iron दोन्ही (pin + pad) touch करा, tin घाला, 1-2s.",
        code: `// 1. iron गरम (~350°C)
// 2. pad + pin एकत्र गरम करा
// 3. tin थोडा घाला → wicking]
// 4. iron काढा → 1-2s स्थिर`,
        codeLanguage: "cpp",
        output: `// चांगली जोड: कोनम पिरामिड, चमकदार
// खराब: dull, गोल, फुगा (cold joint)`,
      },
      {
        title: "Practice & inspection",
        content: "जुने PCB वर practice करा. निरीक्षण: glass/magnifier मधून — joints चमकदार, प्रत्येक pad सह तीन कडा. ब्रिज tolerated नाही. needlenose व सोच टिप्स दुरुस्त करण्यासाठी (የ copper pad जळणार नाही).",
        code: `// Check: brightness, no bridge,
// lead स्थिर सो and pad कडा
// दुरुस्ती: इतक्या काही वा नाही`,
        codeLanguage: "cpp",
        output: `// पुढील प्रोजेक्ट (PCB) साठी हे तंत्र आधार`,
      },
      {
        title: "सारांश — soldering",
        content: "350°C iron + rosin-core tin. pad+pin ambos गरम, थोडे tin, दुरुस्त. cold joint ओळखा. सुरक्षा: stand, ventilation. पुढे: PCB basics — soldering साठी design सो पाठ्यपुस्तक.",
      },
    ],
    practiceQuestions: [
      "Good joint vs cold joint मध्ये काय फरक?",
      "Soldering iron temperature किती?",
      "जास्त tin घातल्यास काय होते?",
      "सुरक्षा टिप्स कोणत्या महत्त्वाच्या?",
    ],
    quiz: [
      { question: "Iron temperature (tin/lead)?", options: ["~350°C", "100°C", "500°C", "50°C"], correct: 0 },
      { question: "Cold joint कसा ओळखता?", options: ["dull + फुगा", "चमकदार शंकु", "सपाट", "निळा"], correct: 0 },
      { question: "जास्त tin घातल्यास?", options: ["bridge", "LED जळते", "बरंच", "मोकळे"], correct: 0 },
      { question: "Through-hole मध्ये काय?", options: ["pin + pad एकत्र गरम", "फक्त pad", "फक्त tin", "iron नाही"], correct: 0 },
      { question: "सुरक्षा आणि fumes साठी?", options: ["stand + ventilation", "पाण्यात", "चकचक", "फक्त अंधारात"], correct: 0 },
    ],
    related: ["electronics-pcb", "electronics-multimeter", "arduino-project"],
    prev: "electronics-multimeter",
    next: "electronics-pcb",
  },
  {
    slug: "electronics-pcb",
    categoryId: "electronics",
    title: "PCB Design Basics",
    marathiTitle: "PCB — ब्रेडबोर्ड → PCB, traces, design rules",
    level: "advanced",
    minutes: 35,
    summary: "PCB म्हणजे काय, ब्रेडबोर्ड vs PCB, traces/copper layers, EasyEDA Fritzing सह design workflow आणि मूलभूत design rules.",
    sections: [
      {
        title: "PCB — ब्रेडबोर्ड → PCB, traces, design rules म्हणजे काय?",
        content: "PCB (Printed Circuit Board) हा फ्लॅट board आहे ज्यावर copper traces मधून सगळे connections प्रिंट असतात — ब्रेडबोर्डचे लोणचे soldering पेक्षा स्थिर.\nहे धडे तुमच्या project ला ब्रेडबोर्ड प्रोटोटाइपमधून स्थायी उत्पादनात नेतात.\nयेथे design software (EasyEDA/Fritzing), single/double layer आणि design rules ची मूलभूत माहिती आहे.",
      },
      {
        title: "का शिकावे? PCB — ब्रेडबोर्ड → PCB, traces, design rules चे फायदे आणि महत्त्व",
        content: "ब्रेडबोर्ड विश्वसनीय नाही (सैल संपर्क) — PCB प्रोजेक्ट स्थिर, compact आणि distributable बनवते.\nकौशल्य म्हणून PCB design मुळे तुमचे निर्माण उत्पादन, maker kit किंवा घरगुती device मध्ये जाऊ शकते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Trace width खूप thin — high current साठी width आवश्यक (1A → ~0.5mm).\n✗ Ground grid सोडणे — GND pour/simple unbroken plane फायदेशीर.\n✗ Parts placement अविचार — signal path आधी विचार; bypass capacitors IC जवळ.\n✗ Design rule check सोडणे — DRC validate केल्याशिवाय जाऊ नका.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Workflow — स्केच → EDA → fab",
        content: "पहिले circuit स्केच कागदावर. नंतर EasyEDA/Fritzing मध्ये schematic बनवा (घटक निवडा, wires जोडा). PCB layout नंतर autoroute/मॅन्युअल trace. DRC चालवा → Gerber export → JLCPCB सारख्या fab वर upload. आधीच्या कामाची (multimeter/soldering) ही नैसर्गिक पुढील पायरी.",
        code: `माझे PCB was gut...
// schematic → layout → DRC → Gerber → fab`,
        codeLanguage: "cpp",
        output: `// 2-layer boards मराठी maker साठी सर्वात सोपे`,
      },
      {
        title: "Design rules (starters)",
        content: "Google ठराविक: minimum trace 6mil दुकानापासून. 0.5mm clearance. via 0.5/0.3mm. decoupling 100nF प्रत्येक IC जवळ. GND pour खालील स्तरावर. 1A साठी 0.5mm. या rules ने बहुतांश beginner boards चालेल.",
        code: `// trace min: 10mil (safe)
// clearance: 0.3mm
// via: 0.6/0.3mm
// decoupling: 100nF/IC`,
        codeLanguage: "cpp",
        output: `// पहिले pick: 1x layer, 5x5cm स्मॉल board`,
      },
      {
        title: "सारांश — PCB",
        content: "PCB = स्थिर circuit platform. Schematic→layout→DRC→fab workflow. Trace width/clearance rules. decoupling + GND pour. आधीचे ब्रेडबोर्ड project PCB वर हलवा. पुढे: seven-segment display — numeric/digital display.",
      },
    ],
    practiceQuestions: [
      "ब्रेडबोर्ड vs PCB difference?",
      "स्केच ते PCB workflow कोणता?",
      "Trace width का महत्त्वाची?",
      "Beginner design rules कोणत्या?",
    ],
    quiz: [
      { question: "PCB वर connections कशाने होतात?", options: ["copper traces", "wires", "glue", "duct tape"], correct: 0 },
      { question: "Schematic से layout कोणत्या software मध्ये?", options: ["EasyEDA/Fritzing", "Word", "Excel", "Photoshop"], correct: 0 },
      { question: "High current साठी trace कशी हवी?", options: ["जाड width", "thin", "नाही तर", "short"], correct: 0 },
      { question: "Out तपासणी output?", options: ["Gerber", "PDF", "PNG", "WAV"], correct: 0 },
      { question: "Decoupling capacitor साठी?", options: ["प्रत्येक IC जवळ", "फक्त power बंद", "जवळ नको", "GND नाही"], correct: 0 },
    ],
    related: ["electronics-soldering", "electronics-multimeter", "arduino-project"],
    prev: "electronics-soldering",
    next: "seven-segment",
  },
  {
    slug: "seven-segment",
    categoryId: "electronics",
    title: "7-Segment Display",
    marathiTitle: "7-segment — common cathode/anode, multiplexing, counter",
    level: "intermediate",
    minutes: 30,
    summary: "7-segment display म्हणजे काय, a-g segments, common cathode/anode, digit coding आणि 4-digit multiplexing कल्पना.",
    sections: [
      {
        title: "7-segment — common cathode/anode, multiplexing, counter म्हणजे काय?",
        content: "7-segment display हे 7 LED segments (a-g) चा box आहे जो अंक (0-9) आणि काही letters दाखवतो.\nप्रत्येक segment स्वतंत्र pin वरून नियंत्रित होतो — एक number = एक विशिष्ट segment pattern.\nहा धडा wiring, digit encoding आणि multiple digits मध्ये multiplexing — ही संकल्पना उलगडतो.",
      },
      {
        title: "का शिकावे? 7-segment — common cathode/anode, multiplexing, counter चे फायदे आणि महत्त्व",
        content: "7-segment सर्वात स्वस्त numeric display आहे — counters, clocks, timers, scoreboards मध्ये सर्वत्र.\nmultiplexing ही कल्पना काही pages वर display matrix सारखीच असते — तिचे मूल्य हे lesson ने शिकवले जाते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Common cathode vs anode — cathode मध्ये common→GND, anode मध्ये common→5V; code उलटा (anode वर 0=ON).\n✗ Segment letter मॅप गडगडणे — a-g order ठीक निवडा; datasheet पहा.\n✗ current ब्रेस — प्रति segment resistor (220Ω) किंवा आठ-अंकीच मॉड्युल.\n✗ Multiplexing मध्ये delay — वेळेत refresh न केल्यास blink.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring + digit encode",
        content: "8 pins: a,b,c,d,e,f,g,dot + common. a→pin 2, b→3, c→4, d→5, e→6, f→7, g→8 (resistor प्रत्येक). Digit 0 = a,b,c,d,e,f ON, g OFF. सर्व segments चा बिट-मॅप array मध्ये ठेवा.",
        code: `// a b c d e f g  → digit
// 1 1 1 1 1 1 0  → 0
// 0 1 1 0 0 0 0  → 1
// 1 1 0 1 1 0 1  → 2
// array 0x3F, 0x06, 0x5B ...`,
        codeLanguage: "cpp",
        output: `// common cathode वर सोपा HIGH=ON
// common anode मध्ये LOW=ON (उलटा)`,
      },
      {
        title: "Counter code",
        content: "digit display function: loops segments, digitalWrite(seg[i], bit). loop मध्ये 0-9 counter चालवा, धीमे (500ms). सर्वात सोपा one-digit counter हा pattern सगळ्या अंक मॉड्यूलसाठी पाया.",
        code: `int segPins[8] = {2,3,4,5,6,7,8};
byte digits[10] = {
  0x3F, 0x06, 0x5B, 0x4F, 0x66,
  0x6D, 0x7D, 0x07, 0x7F, 0x6F
};
void show(byte v) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segPins[i], (digits[v] >> i) & 1);
  }
}
void setup() { for (int i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT); }
void loop() {
  for (byte n = 0; n < 10; n++) { show(n); delay(500); }
}`,
        codeLanguage: "cpp",
        output: `// 0 1 2 3 ... 9 → पुन्हा
// प्रत्येक अंक 0.5s दिव्य`,
      },
      {
        title: "सारांश — 7-segment",
        content: "7 segments + dot. Encoding array (0x3F...). common anode मध्ये उलटा logic. multiplexing: एकेक digit वेगळा चालवा, वेगवान refresh (500Hz), त्यामुळे सारे जळताना दिसतात. विस्तार: 4-digit clock, scoreboard. पुढे: 555 timer — timing/circuit फंडामेन्टल.",
      },
    ],
    practiceQuestions: [
      "7-segment मध्ये कोणते segments अंक बनवतात?",
      "Common anode vs cathode logic फरक?",
      "Multiplexing कसे काम करते?",
      "Digit encoding array कसे बनवता?",
    ],
    quiz: [
      { question: "7-segment मध्ये किती segments?", options: ["7", "10", "5", "8"], correct: 0 },
      { question: "common cathode मध्ये समान कुठे?", options: ["GND", "5V", "analog", "reset"], correct: 0 },
      { question: "0 दाखवण्यासाठी कोणता segment OFF?", options: ["g", "a", "b", "f"], correct: 0 },
      { question: "अनेक digits मध्ये त्रुटी नाही यासाठी?", options: ["multiplexing", "जास्त resistors", "delay नाही", "power double"], correct: 0 },
      { question: "Digit encoding काय वापरता?", options: ["बिट-array", "String", "Serial", "analog"], correct: 0 },
    ],
    related: ["arduino-display", "t555-timer", "arduino-lcd"],
    prev: "electronics-pcb",
    next: "t555-timer",
  },
  {
    slug: "t555-timer",
    categoryId: "electronics",
    title: "555 Timer IC Basics",
    marathiTitle: "555 timer — astable/monostable, blink, PWM basics",
    level: "advanced",
    minutes: 35,
    summary: "555 timer IC म्हणजे काय, pinout, astable (blinker) आणि monostable (one-shot) circuits, frequency गणित.",
    sections: [
      {
        title: "555 timer — astable/monostable, blink, PWM basics म्हणजे काय?",
        content: "555 timer हा जादुई IC आहे जो timing pulses तयार करतो — LEDs blink, beep/oscillation, delay circuits सगळे यावर चालतात.\nदोन मुख्य मोड: astable (सतत pulse) आणि monostable (एक shot delay).\nresistor/capacitor च्या मूल्यांवरून frequency वेळ मिळते — ते गणित या धड्यात आहे.",
      },
      {
        title: "का शिकावे? 555 timer — astable/monostable, blink, PWM basics चे फायदे आणि महत्त्व",
        content: "555 ही discrete electronics मधील सर्वाधिक वापरली जाणारी IC आहे — microcontroller ची गरज नसतानाही timing आणि PWM मिळते.\nHeavily experimented IC मुळे कौशल्य तयार होते — oscillator/trigger कल्पना सर्व digital circuits ला लागते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Pinout गडगडणे — 8-pin DIP; top notch डावीकडे (राऊंड नॉचसह) गणना clockwise.\n✗ Capacitor चा polarity — electrolytic तर +/- ठीक; ceramic directionless.\n✗ Frequency भ्रम — astable formula: f = 1.44 / ((R1+2R2) C).\n✗ Reset pin (4) हवेत — noise मुळे अनियंत्रित; VCC ला pull-up करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Pinout आणि astable",
        content: "555 pins: 1=GND, 2=trigger, 3=output, 4=reset, 5=control, 6=threshold, 7=discharge, 8=VCC. Astable: R1 को RR2 + C. Output square wave. f = 1.44/((R1+2R2)C). उदा. R1=1k, R2=10k, C=100nF → ~1.37Hz blink (LED 3 चा output, resistor सह).",
        code: `// Astable circuit:
// VCC(8) ── R1 ──┬── R2 ── C ── GND(1)
//                 └── 6 (threshold)
// pin 7 ── R1/R2 सांध्याला
// pin 3 → LED + 220Ω → GND
// pin 4 → VCC`, 
        codeLanguage: "cpp",
        output: `// f = 1.44 / ((R1 + 2*R2) * C)
// बदल R/C → वेग/धीमा blink`,
      },
      {
        title: "Monostable + PWM कल्पना",
        content: "Monostable: trigger पायावर short low pulse दिल्यास output high → R*C time. pulse width T = 1.1 R C. PWM: astable च्या charge/discharge times उपर control देऊन duty cycle आणि voltage averaging केली जाते — मुळात 555 हा microcontroller शिवाय PWM generator होतो.",
        code: `// Monostable T = 1.1 * R * C
// उदा. R=100k, C=10µF → 1.1s pulse
// PWM: दोन रेझिस्टर charge path control`,
        codeLanguage: "cpp",
        output: `// बटण दाबा → 1.1s bright pulse
// किंवा duty-cycle ने LED dim/bright`,
      },
      {
        title: "सारांश — 555",
        content: "555: astable (continuous) + monostable (one-shot). f=1.44/((R1+2R2)C), T=1.1RC. Reset pin pull-up. Output pin 3. PWM शक्य. विस्तार: tone generation, IR beacon, latching detam. पुढे: Raspberry Pi — पूर्ण computer नियंत्रण.",
      },
    ],
    practiceQuestions: [
      "Astable आणि monostable मध्ये काय फरक?",
      "Frequency formula कशी?",
      "Monostable pulse width कशी ठरते?",
      "Reset pin ला VCC pull-up का?",
    ],
    quiz: [
      { question: "555 मध्ये किती pins?", options: ["8", "14", "6", "4"], correct: 0 },
      { question: "Astable mode मध्ये काय येते?", options: ["सतत pulses", "एक shot", "शून्य", "analog"], correct: 0 },
      { question: "Astable frequency formula?", options: ["1.44/((R1+2R2)C)", "1/(R C)", "R*C", "C/R"], correct: 0 },
      { question: "Output कोणता pin?", options: ["3", "2", "7", "8"], correct: 0 },
      { question: "Monostable pulse width?", options: ["1.1 R C", "1.44 RC", "R/2", "C/2"], correct: 0 },
    ],
    related: ["seven-segment", "arduino-buzzer", "arduino-rgb"],
    prev: "seven-segment",
    next: "raspberrypi-intro",
  },
  {
    slug: "raspberrypi-intro",
    categoryId: "electronics",
    title: "Raspberry Pi Intro",
    marathiTitle: "Raspberry Pi — small computer, GPIO, headless setup",
    level: "advanced",
    minutes: 35,
    summary: "Raspberry Pi म्हणजे काय, Raspberry Pi OS install, headless SSH setup आणि GPIO Python कल्पना — IoT/electronics पेक्षा computer.",
    sections: [
      {
        title: "Raspberry Pi — small computer, GPIO, headless setup म्हणजे काय?",
        content: "Raspberry Pi हा credit-card आकाराचा computer आहे — त्यात Linux OS, USB, HDMI, WiFi असते; Arduino पेक्षा खूप वेगळा आहे (पूर्ण computer).\nRaspberry Pi OS card वर install करून monitor शिवाय SSH ने (headless) चालवता येतो.\nGPIO pins Python मधून control — electronics + programming चे संगमान. हा धडा सुरुवातीचा entrance देतो.",
      },
      {
        title: "का शिकावे? Raspberry Pi — small computer, GPIO, headless setup चे फायदे आणि महत्त्व",
        content: "Arduino एक processor cycle धावते, Pi पूर्ण भाषा/hosted apps चालवते — camera AI, home server, media center, Python services.\nIoT कडून computer-grade projects कडे जाण्यासाठी हा नैसर्गिक पाया आहे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Power कमी/dramatic cable — Pi ला 5V/2.5A+ हवे; weak PSU मुळे corrupt SD.\n✗ SD flash इमेज गडगडणे — Raspberry Pi Imager वापरा; direct image write? नाही आता Imager.\n✗ Headless SSH enable — imager तयार करताना SSH बॉक्स set करा.\n✗ GPIO voltage — Pi GPIO 3.3V; 5V sensors साठी inverter/level shifter आवश्यक.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Setup — Imager + headless",
        content: "Raspberry Pi Imager download → OS (Raspberry Pi OS Lite) select → SD card → settings मध्ये hostname, WiFi, SSH enable, user/pass set करा. मग SD Pi मध्ये, boot → दुसऱ्या device वरून ssh pi@raspberrypi.local जोडा.",
        code: `// Imager → OS Lite
// settings: WiFi + SSH ON
// ssh pi@raspberrypi.local
// pa: sudo apt update && upgrade`,
        codeLanguage: "cpp",
        output: `// headless — monitor नसेल;
// जगातून SSH ने नियंत्रण`,
      },
      {
        title: "GPIO + Python",
        content: "gpiod आणि RPi.GPIO. python: LED चालवा. GPIO.setmode(BCM), setwarnings(False). LED→GPIO17. GPIO.output(pin, GPIO.HIGH). electronics + python एकत्र.",
        code: `import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(17, GPIO.OUT)
while True:
    GPIO.output(17, GPIO.HIGH)
    time.sleep(0.5)
    GPIO.output(17, GPIO.LOW)
    time.sleep(0.5)`,
        codeLanguage: "python",
        output: `// board वर GPIO17 सह LED
// 0.5s ON/OFF — Python blink`,
      },
      {
        title: "सारांश — Raspberry Pi",
        content: "Pi = पूर्ण Linux computer. Imager + WiFi/SSH → headless. GPIO 3.3V, RPi.GPIO Python. पुढे: camera project, home server, Docker, automation. Electronics मराठी पथ हा एक समृद्ध टप्पा पात्र ठरतो — शुभेच्छा!",
      },
    ],
    practiceQuestions: [
      "Raspberry Pi आणि Arduino मध्ये काय फरक?",
      "Headless setup मध्ये काय नियोजन करता?",
      "Pi ला power quality का महत्त्वाची?",
      "Python मध्ये GPIO कसे control करता?",
    ],
    quiz: [
      { question: "Pi वर चालणारा OS?", options: ["Raspberry Pi OS", "Android", "Windows XP", "iOS"], correct: 0 },
      { question: "Monitor शिवाय access कसा?", options: ["SSH", "काळजी", "HDMI", "Serial only"], correct: 0 },
      { question: "Pi GPIO voltage?", options: ["3.3V", "5V", "12V", "1.5V"], correct: 0 },
      { question: "Python GPIO library?", options: ["RPi.GPIO", "DHT", "LiquidCrystal", "PubSub"], correct: 0 },
      { question: "2019 Pi मध्ये काय?", options: ["WiFi in 3/4", "फक्त LAN", "usb only", "sensor only"], correct: 0 },
    ],
    related: ["arduino-basics", "esp8266-intro", "electronics-circuits"],
    prev: "t555-timer",
    next: "",
  },
];