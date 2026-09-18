import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 1 — circuits आणि घटक सखोल ===
// electronics-circuits → electronics-resistor → electronics-capacitor → electronics-transistor
// (arduino-basics — tutorials.ts मधील inline पाठ)

export const electronicsLevel1: Tutorial[] = [
  {
    slug: "electronics-circuits",
    categoryId: "electronics",
    title: "Circuits - जोडणीचे नियम",
    marathiTitle: "सर्किट समजून घ्या — closed loop, series/parallel, schematic",
    level: "beginner",
    minutes: 25,
    summary: "सर्किट म्हणजे काय, बंद चक्र (closed loop), शृंखला व समांतर जोडणी, node/branch/loop ची भाषा आणि schematic वाचण्याची सुरुवात — उदाहरणांसह.",
    sections: [
      {
        title: "का शिकावे? सर्किट समजून घ्या — closed loop, series/parallel, schematic चे फायदे आणि महत्त्व",
        content: "✓ महत्त्वाचे नियम: मार्ग तुटला (open circuit) तर प्रवाह थांबतो; मार्ग थेट (+)-(−) जोडला (short circuit) तर प्रवाह वाढतो आणि तार गरम होते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "सर्किट म्हणजे काय — बंद चक्र",
        content: "सर्किट म्हणजे विद्युत प्रवाहाला वाहण्यासाठी मिळणारा बंद मार्ग. प्रवाह नेहमी स्त्रोताच्या (+) पासून (-) पर्यंत संपूर्ण चक्र कापतो. मूलभूत तीन गोष्टी: Source (बॅटरी/पॉवर), Path (तार/कंडक्टर), Load (LED/मोटर).\n\nमहत्त्वाचे नियम: मार्ग तुटला (open circuit) तर प्रवाह थांबतो; मार्ग थेट (+)-(−) जोडला (short circuit) तर प्रवाह वाढतो आणि तार गरम होते.\n\nउदाहरण: LED दिवा — बॅटरी (+), तार, LED, तार, बॅटरी (−). हा संपूर्ण गोल मार्ग म्हणजे closed circuit.",
      },
      {
        title: "शृंखला जोडणी (Series)",
        content: "शृंखला (series) मध्ये घटक एकापाठोपाठ एका रेषेत जोडतात — एकच मार्ग. नियम: सर्वांतून समान current वाहतो (I समान); voltage प्रत्येक घटकात विभागतो (V1 + V2 = एकूण); resistance बेरीज होते: R_total = R1 + R2 + ...; एक घटक निकामी झाला तर संपूर्ण सर्किट तुटते.\n\nगणित: R1 = 100Ω, R2 = 200Ω → R_total = 300Ω. बॅटरी 9V — प्रवाह I = 9 / 300 = 0.03A = 30mA.",
        code: `R_total = R1 + R2
R_total = 100 + 200  # 300 ohms
I = V / R_total
I = 9 / 300       # 0.03A = 30mA`,
        codeLanguage: "python",
        output: `R_total = 300 ohms
I = 0.03A = 30mA`,
      },
      {
        title: "समांतर जोडणी (Parallel)",
        content: "समांतर (parallel) मध्ये घटक वेगवेगळ्या शाखांमध्ये जोडतात — प्रत्येकाला स्वतंत्र मार्ग. नियम: सर्व शाखांना समान voltage (V समान); current शाखांमध्ये विभागतो (I_total = I1 + I2 + ...); resistance कमी होते: 1/R_total = 1/R1 + 1/R2 + ...; एक शाखा तुटली तरी इतर चालतात.\n\nदोन समान R समांतर → निम्मे value: दोन 100Ω समांतर = 50Ω. हेच कारण घरातील वीज समांतर जोडलेली असते — कोणतेही ठिकाण स्वतंत्र चालते.",
        code: `# Two equal R in parallel
1/R = 1/R1 + 1/R2
1/R = 1/100 + 1/100  # 2/100
R = 50 ohms`,
        codeLanguage: "python",
        output: `R_total = 50 ohms`,
      },
      {
        title: "Node, Branch, Loop",
        content: "सर्किटच्या भाषेत: Node — जिथे दोन किंवा अधिक घटक मिळतात; Branch — दोन nodes दरम्यानचा मार्ग; Loop — सर्किटमधील बंद चक्र. KVL (Kirchhoff's Voltage Law): बंद loop मध्ये सर्व voltages ची बेरीज शून्य होते — V_source = V1 + V2 + .... KCL (Kirchhoff's Current Law): एका node वर येणारा current = तेथून जाणारा current.\n\nउदा. समांतर सर्किटमध्ये प्रत्येक शाखा ही एक branch; बॅटरीच्या (+) पासून (-) पर्यंतचा मार्ग loop.",
      },
      {
        title: "Schematic चिन्हे वाचणे",
        content: "सर्किट कागदावर schematic (आकृती) ने दाखवतात — तारांऐवजी चिन्हे वापरतात. प्रमुख चिन्हे: बॅटरी (दोन समांतर रेषा +/−), Resistor (झिगझाग रेषा), LED (त्रिकोण + दोन बाण), Capacitor (दोन समांतर रेषा), GND (तीन घटणाऱ्या रेषा).\n\nवाचण्याचे नियम: तारा छेदत असतील पण बिंदू नसेल तर जोडलेल्या नाहीत; बिंदू (dot) असल्यास जोडलेल्या आहेत; पॉवर बहुतेक वर, GND खाली.",
      },
      {
        title: "V-I-R नियमाचे उदाहरणे",
        content: "V-I-R नियम व्यवहारात वापरणे हेच सर्किट डिझाइन.\n\nउदा. १ — LED resistor: LED ला 2V, current 20mA (0.02A) हवे; बॅटरी 5V. R = (5 − 2) / 0.02 = 150Ω.\n\nउदा. २ — व्होल्टेज डिव्हायडर: 9V वर दोन resistor 3kΩ व 6kΩ शृंखलेत. I = 9 / 9000 = 1mA. मधल्या बिंदूवर V = I × 6k = 6V.\n\nउदा. ३ — Power: P = V × I = 5 × 0.02 = 0.1W → 1/8W resistor पुरेसा.",
        code: `# LED resistor
def led_resistor(v_source, v_led, i_ma):
    R = (v_source - v_led) / (i_ma / 1000)
    return round(R)

print(led_resistor(5, 2, 20))
print(led_resistor(9, 2, 20))`,
        codeLanguage: "python",
        output: `150
350`,
      },
      {
        title: "सारांश आणि सराव",
        content: "सर्किटचे पाच मुद्दे: सर्किट = बंद चक्र (source → path → load); शृंखला — समान current, voltage विभाग, R बेरीज; समांतर — समान voltage, current विभाग, R कमी; Node/Branch/Loop + KVL/KCL; Schematic चिन्हे + बिंदू नियम.\n\nप्रॅक्टिस: बॅटरी + LED चे सर्किट ब्रेडबोर्डवर बनवा; दोन resistors शृंखलेत total R मोजा; व्होल्टेज डिव्हायडर बनवून voltage मोजा; एक schematic काढून बिंदू/तार ओळखा.",
      },
    ],
    practiceQuestions: [
      "शृंखला आणि समांतर जोडणीतील current/voltage चा फरक सांगा.",
      "दोन 100Ω resistors समांतर — एकूण resistance किती?",
      "सर्किटमधील node म्हणजे काय? एक उदाहरण.",
      "50mA च्या current साठी 220Ω resistor वर किती voltage पडेल?",
    ],
    quiz: [
      { question: "शृंखला जोडणीत काय समान असते?", options: ["Current", "Voltage", "Power", "Capacitance"], correct: 0 },
      { question: "समांतर जोडणीत काय समान असते?", options: ["Current", "Voltage", "Resistance", "Charge"], correct: 1 },
      { question: "दोन 10Ω resistors समांतर — total resistance?", options: ["20Ω", "110Ω", "5Ω", "1Ω"], correct: 2 },
      { question: "सर्किट तुटला (open) तर current काय होतो?", options: ["वाढतो", "शून्य होतो", "स्थिर", "दुप्पट"], correct: 1 },
      { question: "बंद loop मध्ये voltages ची बेरीज काय?", options: ["शून्य", "वीज पुरवठ्याइतकी", "अनंत", "नक्की नाही"], correct: 0 },
    ],
    related: ["electronics-basics", "electronics-resistor", "electrical-basics"],
    prev: "electronics-basics",
    next: "electronics-resistor",
  },
  {
    slug: "electronics-resistor",
    categoryId: "electronics",
    title: "Resistor - रंग कोड आणि गणित",
    marathiTitle: "Resistor सखोल — color code, series/parallel गणित, LED निवड",
    level: "beginner",
    minutes: 25,
    summary: "Resistor चा नेमका उपयोग, रंग-कोड वाचण्याचे नियम, शृंखला व समांतर resistance चे गणित, LED साठी योग्य resistor निवडणे आणि watt (power) तपासणी.",
    sections: [
      {
        title: "Resistor सखोल — color code, series/parallel गणित, LED निवड म्हणजे काय?",
        content: "Resistor चा नेमका उपयोग, रंग-कोड वाचण्याचे नियम, शृंखला व समांतर resistance चे गणित, LED साठी योग्य resistor निवडणे आणि watt (power) तपासणी.\nResistor हा घटक आहे जो विद्युत प्रवाहाला जाणूनबुजून मर्यादा घालतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Resistor सखोल — color code, series/parallel गणित, LED निवड चे फायदे आणि महत्त्व",
        content: "✓ महत्त्वाचे: resistor दोन्ही दिशा समान — त्याला polarity (ध्रुवता) नसते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सावधान: मूल्य वाढते.\n✗ सामान्य चुका: resistor काढला तर LED त्वरित जळतो; खूप लहान R → तीव्रकाळ तापतो; LED ची polarity उलट → अजिबात प्रकाश नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Resistor चा उद्देश",
        content: "Resistor हा घटक आहे जो विद्युत प्रवाहाला जाणूनबुजून मर्यादा घालतो. मुख्य काम: LED/घटकांचे संरक्षण (जास्त current अडवणे), व्होल्टेज डिव्हायडर (voltage कमी करणे), Timing (capacitor सोबत वेळ ठरवणे), Pull-up/down (बटणाची स्थिर स्थिती).\n\nValue चे एकक ohm (Ω). उदा. 220Ω (LED साठी), 10kΩ (pull-up), 1MΩ (संवेदनशील सर्किट). महत्त्वाचे: resistor दोन्ही दिशा समान — त्याला polarity (ध्रुवता) नसते.",
      },
      {
        title: "रंग-कोड वाचणे",
        content: "बहुतेक resistors वर 4 पट्ट्या असतात — त्यातून value व tolerance वाचतात. रंग→संख्या: काळा 0, तपकिरी 1, लाल 2, नारिंगी 3, पिवळा 4, हिरवा 5, निळा 6, जांभळा 7, राखाडी 8, पांढरा 9.\n\nपहिली 2 पट्टी — अंक; तिसरी — किती शून्य (multiplier); चौथी — tolerance (सोने ±5%, चांदी ±10%). उदा. लाल-लाल-नारिंगी-सोने = 22 × 1000 = 22kΩ ±5%; तपकिरी-काळा-लाल-सोने = 10 × 100 = 1kΩ ±5%. 5-पट्टी resistor — पहिली 3 अंक, चौथी शून्य, पाचवी tolerance.",
        code: `# Color code lookup
colors = {
  "kala":0,"tapkiri":1,"lal":2,"narangi":3,
  "pivla":4,"hirva":5,"nila":6,"jambhala":7,
  "rakhadi":8,"pandhra":9
}
R = (colors["lal"]*10 + colors["lal"]) * 10**colors["narangi"]
print(f"{R} ohms")`,
        codeLanguage: "python",
        output: `22000 ohms`,
      },
      {
        title: "शृंखला Resistance",
        content: "Resistors एकापाठोपाठ एक जोडले तर total resistance म्हणजे बेरीज. नियम: R_total = R1 + R2 + R3 + .... उदा. 100Ω + 200Ω = 300Ω; 1kΩ + 470Ω = 1.47kΩ.\n\nहे कधी वापरायचे: 220Ω हवे पण हातात 100Ω + 120Ω असल्यास शृंखलेत जोडा; voltage विभागण्यासाठी. सावधान: मूल्य वाढते.",
        code: `R_total = R1 + R2
R_total = 100 + 200
print(R_total)`,
        codeLanguage: "python",
        output: `300`,
      },
      {
        title: "समांतर Resistance",
        content: "Resistors समांतर जोडले तर total कमी होतो — अनेक मार्गांमुळे प्रवाहाला शक्य वाढते. नियम: 1/R_total = 1/R1 + 1/R2 + .... दोन समान R: दोन 100Ω समांतर = 50Ω; दोन 10kΩ समांतर = 5kΩ. तीन 100Ω → R_total = 100/3 ≈ 33.3Ω.\n\nसोपी युक्ती (फक्त दोन): R_total = (R1 × R2) / (R1 + R2). उदा. 100 × 100 / 200 = 50Ω.",
        code: `# Two parallel R
def parallel(r1, r2):
    return (r1 * r2) / (r1 + r2)

print(parallel(100, 100))
print(parallel(220, 220))`,
        codeLanguage: "python",
        output: `50.0
110.0`,
      },
      {
        title: "LED साठी Resistor निवड",
        content: "LED ला थेट battery वर जोडल्यास करंट वाढतो आणि LED जळतो. म्हणून resistor हवाच. सूत्र: R = (V_source − V_led) / I_desired.\n\nउदा. बॅटरी 5V, LED ला 2V, current 20mA (0.02A). R = (5 − 2) / 0.02 = 150Ω. सुरक्षित जवळचे मूल्य 220Ω घ्या (कमी चमक, जास्त आयुष्य). Resistor वर पडणारे voltage = V_source − V_led; सूत्र voltage / current ने ohm मिळतो.\n\nसामान्य चुका: resistor काढला तर LED त्वरित जळतो; खूप लहान R → तीव्रकाळ तापतो; LED ची polarity उलट → अजिबात प्रकाश नाही.",
        code: `# LED resistor calculator
def led_r(vs, vl, ima):
    r = (vs - vl) / (ima / 1000)
    return round(r)

print(led_r(5, 2, 20))
print(led_r(9, 2, 30))`,
        codeLanguage: "python",
        output: `150
233`,
      },
      {
        title: "Power (Watt)",
        content: "प्रत्येक resistor वर जास्त power गेली तर तो गरम होतो व जळतो. सूत्र: P = V × I = I² × R = V² / R.\n\nउदा. LED circuit: V_over_resistor = 3V, I = 0.02A → P = 3 × 0.02 = 0.06W → 1/8W (0.125W) resistor पुरेसा. 12V वर 1A load → P = 12W — मोठा wire-wound resistor.\n\nसामान्य आकार: 1/8W (लहान), 1/4W (साधारण), 1/2W (मोठा), 1W+ (तपकिरी चौरस). नियम: नेहमी आवश्यक power च्या दुप्पट रेटिंगचा resistor निवडा.",
        code: `# Power calculation
def power(v, i):
    return v * i

P = power(3, 0.02)
print(f"{P}W -> need 1/8W resistor")`,
        codeLanguage: "python",
        output: `0.06W -> need 1/8W resistor`,
      },
      {
        title: "सारांश आणि सराव",
        content: "Resistor चे सहा मुद्दे: उद्देश — current मर्यादा, voltage विभागणी; रंग-कोड — पहिले अंक, मध्य शून्य, शेवट tolerance; शृंखला — R_total = बेरीज; समांतर — total कमी; LED साठी — R = (V_source − V_led) / I; Power — P = V × I.\n\nप्रॅक्टिस: 5 resistors वरच्या रंगांनी value लिहा; दोन resistors शृंखलेत व समांतर जोडून totals मोजा; LED सर्किटसाठी resistor value गणनेने ठरवा; resistor वर power गणित करा.",
      },
    ],
    practiceQuestions: [
      "लाल-लाल-नारिंगी-सोने या रंगांचे value किती?",
      "दोन 330Ω resistors शृंखलेत किती? समांतर किती?",
      "LED (2V, 20mA) 6V वर — resistor किती?",
      "1/8W रेटिंग असलेला resistor वर किती मोठी power घालू शकतो?",
    ],
    quiz: [
      { question: "विद्युत प्रवाहाला मर्यादा घालणारा घटक कोणता?", options: ["LED", "Resistor", "Battery", "Wire"], correct: 1 },
      { question: "लाल-लाल-नारिंगी-सोने = काय?", options: ["2.2kΩ", "22kΩ", "220kΩ", "220Ω"], correct: 1 },
      { question: "दोन 330Ω resistors शृंखलेत total?", options: ["165Ω", "330Ω", "660Ω", "99Ω"], correct: 2 },
      { question: "दोन 330Ω resistors समांतर total?", options: ["660Ω", "165Ω", "330Ω", "110Ω"], correct: 1 },
      { question: "LED (2V, 20mA) वर battery 5V — resistor?", options: ["50Ω", "150Ω", "1000Ω", "5Ω"], correct: 1 },
    ],
    related: ["electronics-circuits", "arduino-led", "electronics-basics"],
    prev: "electronics-circuits",
    next: "electronics-capacitor",
  },
  {
    slug: "electronics-capacitor",
    categoryId: "electronics",
    title: "Capacitor - ऊर्जा साठवणे",
    marathiTitle: "Capacitor सखोल — charge/discharge, units, RC timing, filtering",
    level: "intermediate",
    minutes: 25,
    summary: "Capacitor हा लहान बॅटरीसारखा ऊर्जा साठवतो. चार्ज होणे-उतरवणे, µF/nF units, ceramic vs electrolytic, RC timing आणि power supply filtering — उदाहरणांसह.",
    sections: [
      {
        title: "का शिकावे? Capacitor सखोल — charge/discharge, units, RC timing, filtering चे फायदे आणि महत्त्व",
        content: "✓ Voltage rating महत्त्वाचे: त्या पेक्षा जास्त voltage लावल्यास capacitor फुटू शकतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सावधान: मोठा capacitor वर charge बराच काळ राहतो — स्पर्श करण्यापूर्वी discharge करा (resistor ने).\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Capacitor म्हणजे काय",
        content: "Capacitor हा घटक विद्युत ऊर्जा (charge) लहान बॅटरीसारखी साठवतो आणि स्वयंचलित way ने परत देतो. रचना: दोन धातूच्या पट्ट्या (plates); मध्ये विद्युतरोधक (dielectric). काम: voltage लावल्यावर charge जमा होते; voltage काढल्यावर capacitor हळूहळू ते सोडतो.\n\nमुख्य फरक (बॅटरी vs capacitor): बॅटरी मोठी ऊर्जा दीर्घकाळ; capacitor कमी ऊर्जा खूप लवकर — स्पाइक, filter, timing.",
      },
      {
        title: "Charge/Discharge",
        content: "Capacitor वर voltage लावल्यावर: चार्ज — सुरुवातीला current मोठा (capacitor रिकामा), जसजसे charge भरते तसा current कमी, पूर्ण झाल्यावर current शून्य. Discharge — source काढला तर capacitor resistor द्वारे हळूहळू सोडतो, voltage शून्य होईपर्यंत.\n\nटाइम कॉन्स्टंट (tau): tau = R × C (सेकंद). ~5 tau मध्ये पूर्णपणे charge/discharge होते. उदा. 10kΩ + 100µF → tau = 10000 × 0.0001 = 1s, पूर्ण ~5s.\n\nसावधान: मोठा capacitor वर charge बराच काळ राहतो — स्पर्श करण्यापूर्वी discharge करा (resistor ने).",
        code: `# RC time constant
def tau(r_ohm, c_farad):
    return r_ohm * c_farad

t = tau(10000, 0.0001)
print(f"tau = {t}s, full charge ~{5*t}s")`,
        codeLanguage: "python",
        output: `tau = 1s, full charge ~5s`,
      },
      {
        title: "Units व अंक वाचणे",
        content: "Capacitor ची value farad (F) मध्ये — पण एक farad खूप मोठा आहे. सामान्य units: microfarad (µF = 0.000001 F), nanofarad (nF = 0.000000001 F), picofarad (pF = 0.000000000001 F). रूपांतरण: 1µF = 1000nF = 1,000,000pF; 0.1µF = 100nF.\n\nअंक वाचणे: मोठ्या capacitor वर '100µF 25V' असा लिहिलेला; लहान (ceramic) वर '104' = 10 × 10⁴ pF = 100nF; '223' = 22 × 10³ pF = 22nF.\n\nVoltage rating महत्त्वाचे: त्या पेक्षा जास्त voltage लावल्यास capacitor फुटू शकतो. नेहमी 2 गुणा सुरक्षित rating निवडा.",
        code: `# Decode "104" marking
val = 10 * 10**4  # picofarads
print(f"104 = {val}pF = {val/1e6}uF = {val/1e3}nF")`,
        codeLanguage: "python",
        output: `104 = 100000pF = 0.1uF = 100nF`,
      },
      {
        title: "Ceramic vs Electrolytic",
        content: "Ceramic (लहान, हलका): value लहान — pF/nF; polarity नसते (दोन्ही दिशा); उच्च वारंवारता filter — signal circuits. उदा. 104 (100nF), 100pF.\n\nElectrolytic (बेलनाकार, मोठा): value मोठे — µF; polarity असते (+/−) — उलट जोडल्यास स्फोट; power supply filter, audio. उदा. 100µF, 470µF.\n\nनिवडाचा नियम: timing/audio → electrolytic/मोठा µF; high-frequency filter → ceramic (nF/pF); polarity असल्यास नेहमी सरळ (+/−) ठरवा.",
      },
      {
        title: "RC Timing",
        content: "Resistor-capacitor (RC) मिळून वेळ ठरवणारा सर्किट. आधार: tau = R × C; चार्ज/डिस्चार्ज वेळ त्यानेच ठरतो.\n\nउदा. मंद LED: R = 100kΩ, C = 100µF → tau = 10s. LED त्यातून हळूहळू उजळेल/विझेल. 555 timer IC: RC ने वेळ ठरवून blink/buzzer timing — (R1 + 2R2) × C ने output period.\n\nवापर: Debounce (बटणाची स्थिरता), Delay (सुरुवातीला उशीर), PWM generator. R वाढवला तर वेळ वाढतो; C वाढवला तरही वेळ वाढतो.",
        code: `# 555 timer period
def period(r1, r2, c):
    return 0.693 * (r1 + 2*r2) * c

# R1=1k, R2=10k, C=100uF
T = period(1000, 10000, 0.0001)
print(f"Period = {T:.2f}s")`,
        codeLanguage: "python",
        output: `Period = 1.53s`,
      },
      {
        title: "Power Supply Filtering",
        content: "Electricity सहज 'गुळगुळीत' नसते — वाइब्रेशन (ripple) असते. Capacitor ते कमी करतो. बॅटरी/चार्जरच्या बाहेर येणारा voltage थोडा लहरी असतो; सिग्नल सर्किटमध्ये ती लाट व्यत्यय आणते.\n\nउपाय: मोठा electrolytic (470µF) + पॉवर टर्मिनल्सवर; लहान ceramic (100nF) + प्रत्येक IC च्या पायाजवळ. Capacitor चार्ज/डिस्चार्ज होऊन लहरी 'गिलटी' करतो — मोठा low-frequency ripple; लहान high-frequency noise.\n\nव्यवहारी नियम: प्रत्येक power connector जवळ 100nF; मोठे current loads जवळ 100µF+.",
      },
      {
        title: "सारांश आणि सराव",
        content: "Capacitor चे सहा मुद्दे: काम — ऊर्जा/charge साठवणे, लवकर सोडणे; Charge/discharge — tau = R × C, ~5 tau पूर्ण; Units — µF/nF/pF ('104' = 100nF); प्रकार — ceramic (nF, no polarity), electrolytic (µF, ±); RC timing — वेळ ठरवण्यासाठी; Filtering — ripple/noise कमी.\n\nप्रॅक्टिस: device मधून capacitors वाचा (value+voltage); 10kΩ + 100µF चे tau गणित; electrolytic (+/−) व ceramic ओळखा; 100nF ने power गुळगुळीत केल्यावर फरक बघा.",
      },
    ],
    practiceQuestions: [
      "Capacitor चार्ज/डिस्चार्ज होण्याची वेळ कशी ठरते?",
      "0.1µF किती nF? '104' अंक म्हणजे काय?",
      "Electrolytic व ceramic capacitor मध्ये काय फरक?",
      "540µF 25V — त्यावर 30V लावल्यास काय होईल?",
    ],
    quiz: [
      { question: "Capacitor चे काम काय?", options: ["ऊर्जा साठवणे", "प्रकाश देणे", "आवाज करणे", "गणना"], correct: 0 },
      { question: "tau (time constant) = काय?", options: ["R × C", "V × I", "R + C", "R / C"], correct: 0 },
      { question: "0.1µF = किती nF?", options: ["1nF", "100nF", "10nF", "1000nF"], correct: 1 },
      { question: "कोणत्या capacitor ला polarity असते?", options: ["Ceramic", "Electrolytic", "Both", "None"], correct: 1 },
      { question: "R = 100kΩ, C = 100µF — tau किती सेकंद?", options: ["0.1s", "1s", "10s", "100s"], correct: 2 },
    ],
    related: ["electronics-circuits", "electronics-resistor", "arduino-sensor"],
    prev: "electronics-resistor",
    next: "electronics-transistor",
  },
  {
    slug: "electronics-transistor",
    categoryId: "electronics",
    title: "Transistor - switch आणि amplifier",
    marathiTitle: "Transistor सखोल — NPN/PNP, switch, base resistor, मोठा भार चालवणे",
    level: "intermediate",
    minutes: 25,
    summary: "Transistor म्हणजे काय, NPN vs PNP, लहान base current ने मोठा current नियंत्रित करणे (switch), योग्य base resistor, amplifier कल्पना आणि motor/relay सारखे मोठे भार चालवणे.",
    sections: [
      {
        title: "Transistor सखोल — NPN/PNP, switch, base resistor, मोठा भार चालवणे म्हणजे काय?",
        content: "Transistor म्हणजे काय, NPN vs PNP, लहान base current ने मोठा current नियंत्रित करणे (switch), योग्य base resistor, amplifier कल्पना आणि motor/relay सारखे मोठे भार चालवणे.\nTransistor हा तीन-पायांचा घटक — लहान signal ने मोठा current/voltage नियंत्रित करतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Transistor सखोल — NPN/PNP, switch, base resistor, मोठा भार चालवणे चे फायदे आणि महत्त्व",
        content: "✓ फायदे (vs BJT): कमी power loss, जास्त वेग.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ चुका: Base resistor नाही → transistor उष्ण/जळतो; खूप मोठा R_base → transistor पूर्ण ON होत नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Transistor ची ओळख",
        content: "Transistor हा तीन-पायांचा घटक — लहान signal ने मोठा current/voltage नियंत्रित करतो. साधर्म्य: नळाचा नळकोश — हलके फिरवल्यावर मोठा पाणी-प्रवाह सुरू.\n\nतीन पाय: Base (B) — नियंत्रण; Collector (C) — मुख्य current येतो; Emitter (E) — मुख्य current बाहेर. दोन प्रकार: NPN — सर्वांत सामान्य, base ला + दिल्यावर ON; PNP — उलट, base ला −/GND दिल्यावर ON. उदा. BC547, 2N2222 (NPN); BC557 (PNP).",
      },
      {
        title: "NPN Switch",
        content: "NPN transistor हा सर्वात सोपा switch. काम: Base-Emitter दरम्यान ~0.7V आला तर current वाहू लागतो; त्या small base current ने Collector-Emitter मध्ये मोठा current चालतो. ON: Base + → transistor ON (मोठा current); OFF: Base GND/0 → transistor OFF.\n\nमार्गदर्शन: load (LED/motor) Collector वर, Emitter GND ला. Base resistor लावायलाच हवा — अन्यथा base current वाढतो. उदा. Arduino pin → 1kΩ → Base; LED+resistor Collector ते V+, Emitter GND. pin HIGH → LED ON.",
        code: `// Arduino + NPN switch
const int BASE = 9;
void setup() { pinMode(BASE, OUTPUT); }
void loop() {
  digitalWrite(BASE, HIGH); // LED ON
  delay(1000);
  digitalWrite(BASE, LOW);  // LED OFF
  delay(1000);
}`,
        codeLanguage: "cpp",
        output: `LED toggles every 1 second`,
      },
      {
        title: "Base Resistor",
        content: "Base current मर्यादित करण्यासाठी base ला resistor लागतो. सूत्र: R_base = (V_high − 0.7) / I_base. जिथे 0.7V = base-emitter drop (NPN); I_base = load current / gain.\n\nउदा. Arduino HIGH = 5V, load = 100mA, gain hFE = 100. I_base = 100mA / 100 = 1mA. R_base = (5 − 0.7) / 0.001 = 4300Ω → 4.7kΩ. सुरक्षित नियम: बहुतेक LED/मोटर साठी 1kΩ ते 10kΩ योग्य.\n\nचुका: Base resistor नाही → transistor उष्ण/जळतो; खूप मोठा R_base → transistor पूर्ण ON होत नाही.",
        code: `# Base resistor calculator
def base_r(v_high, i_load_ma, hfe):
    i_base = i_load_ma / hfe / 1000
    return round((v_high - 0.7) / i_base)

print(base_r(5, 100, 100))
print(base_r(3.3, 200, 80))`,
        codeLanguage: "python",
        output: `4300
10250`,
      },
      {
        title: "Amplifier कल्पना",
        content: "Transistor switch ऐवजी amplifier म्हणूनही काम करतो — small signal मध्ये अर्धे व मोठा नक्कल. कल्पना: Microphone चा कमकुवत signal → transistor त्याला वाढवून स्पीकर चालवतो. 'Base चे small चढ-उतार' → 'Collector चे मोठे चढ-उतार'.\n\nव्यवहारात: Amplifier mode साठी मध्यम bias (base ला स्थिर voltage); switch मध्ये पूर्ण ON/OFF, amplifier मध्ये 'अर्धा' region. Gain = output / input. वापर: Audio preamp, radio, sensor signal मजबूत करणे.",
      },
      {
        title: "Motor/Relay Driver",
        content: "Arduino/बटण थेट मोटर किंवा solenoid चालवू शकत नाही — Arduino pin फक्त ~20-40mA देऊ शकतो, motor घेते 100mA-1A. उपाय — transistor driver: Arduino pin → base resistor → transistor base; motor Collector ला, Emitter GND; diode (flyback) motor च्या सोबत उलट peak वाचवते.\n\nRelay: 5V relay coil मोठी ऊर्जा घेते → transistor ने चालवतात; relay ने AC उपकरण (पंखा, दिवा) switch होते. दिशा (NPN low-side): लोड V+ आणि collector दरम्यान, transistor GND ते emitter.",
        code: `// NPN + flyback diode
digitalWrite(BASE, HIGH);  // motor ON
// pin -> 1k -> base
// motor: V+ -> collector, emitter -> GND
// diode: anode=collector, cathode=V+`,
        codeLanguage: "cpp",
        output: `Motor spins; diode protects from back-EMF`,
      },
      {
        title: "MOSFET निवड",
        content: "मोठा भार चालवण्यासाठी MOSFET जास्त कार्यक्षम. फरक: Base ऐवजी Gate; Gate वर voltage दिल्यावर current (base) न लागता दार उघडते; खूप कमी gate current — लहान voltage ने मोठा current.\n\nप्रकार: Logic-level MOSFET (IRLZ44N) — 5V ने पूर्ण ON; IRF520/IRF540 — उच्च voltage. टीप: Gate ला pull-down resistor (10kΩ) — अन्यथा उघड झाल्यास ON राहतो; flyback diode मोटर जोडणीत आवश्यक.\n\nफायदे (vs BJT): कमी power loss, जास्त वेग. 3.3V सर्किटमध्ये योग्य logic-level निवडा.",
      },
      {
        title: "सारांश आणि सराव",
        content: "Transistor चे सहा मुद्दे: काम — लहान signal ने मोठा भार नियंत्रित; NPN — base + → ON, PNP उलट; Base resistor — (V_high − 0.7) / I_base; Switch vs amplifier — पूर्ण ON/OFF vs अर्धा; मोठा भार — transistor driver + flyback diode; MOSFET — gate-चालित, आधुनिक निवड.\n\nप्रॅक्टिस: NPN + 1kΩ + LED सर्किट बनवा (Arduino ने); बटणाने transistor switch करून LED चालवा; 5V motor transistor driver मध्ये जोडा; datasheet मधील hFE व max Ic वाचून एक नोट बनवा.",
      },
    ],
    practiceQuestions: [
      "NPN switch मध्ये LED ला पूर्ण ऊर्जा मिळवण्यासाठी काय हवे?",
      "Base resistor कशासाठी लागतो?",
      "Motor चालवताना diode का लागतो?",
      "MOSFET व BJT मध्ये काय फरक?",
    ],
    quiz: [
      { question: "Arduino/बटण मोठे motor थेट चालवू शकत नाही कारण?", options: ["आवाज", "कमी current क्षमता", "ते खूप मोठे आहे", "ते फोडते"], correct: 1 },
      { question: "NPN transistor मध्ये ON करण्यासाठी base ला?", options: ["HIGH/Positive", "GND", "काही नाही", "resistor नाही"], correct: 0 },
      { question: "Base resistor सूत्र काय?", options: ["(V−0.7)/I", "(V×0.7)/I", "(I×0.7)/V", "V/I×0.7"], correct: 0 },
      { question: "Mosfet चा नियंत्रण पाय कोणता?", options: ["Base", "Gate", "Source", "Drain"], correct: 1 },
      { question: "मोटरला होणाऱ्या peak पासून वाचण्यासाठी काय?", options: ["Capacitor", "Flyback diode", "LED", "Resistor"], correct: 1 },
    ],
    related: ["electronics-capacitor", "arduino-led", "arduino-project"],
    prev: "electronics-capacitor",
    next: "electronics-diode",
  },
];