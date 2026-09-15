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
        title: "सर्किट म्हणजे काय — बंद चक्र",
        content: "सर्किट म्हणजे विद्युत प्रवाहाला वाहण्यासाठी मिळणारा बंद मार्ग. प्रवाह नेहमी स्त्रोताच्या (+) पासून (-) पर्यंत संपूर्ण चक्र कापतो.\n\nमूलभूत तीन गोष्टी:\n\t• Source — बॅटरी/पॉवर (ऊर्जा).\n\t• Path — तार/कंडक्टर (मार्ग).\n\t• Load — LED/मोटर (जे काम करते).\n\nमहत्त्वाचा नियम:\n\t• मार्ग तुटला (open circuit) तर प्रवाह थांबतो.\n\t• मार्ग थेट (+)-(−) जोडला (short circuit) तर प्रवाह वाढतो आणि तार गरम होते.\n\nउदाहरण: LED दिवा — बॅटरी (+), तार, LED, तार, बॅटरी (−). हा संपूर्ण गोल मार्ग म्हणजे close circuit.\n\nसराव: खिशातील आरसा पहा — टॉर्च चालण्याचा मार्ग तोंडाने कसा सांगता येतो ते लिहा.",
      },
      {
        title: "शृंखला जोडणी — सखोल",
        content: "शृंखला (series) मध्ये घटक एकापाठोपाठ एका रेषेत जोडतात — एकच मार्ग.\n\nनियम:\n\t• सर्वांतून समान current वाहतो (I समान).\n\t• voltage प्रत्येक घटकात विभागतो (V1 + V2 + ... = एकूण).\n\t• resistance बेरीज होते: R_total = R1 + R2 + ...\n\t• एक घटक निकामी झाला तर संपूर्ण सर्किट तुटते.\n\nउदाहरण: दोन LED शृंखलेत — प्रत्येकाला समान current, पण एक जळाला तर दोन्ही बंद.\n\nगणित:\n\t• R1 = 100Ω, R2 = 200Ω → R_total = 300Ω.\n\t• बॅटरी 9V — प्रवाह I = 9 / 300 = 0.03A = 30mA.\n\nसराव: घरातील जुन्या माळेत एक दिवा बंद झाला की सर्व बंद होतात का? — ती शृंखला गेलेली असते.\n\nशृंखला उपयोग: current मर्यादित करणे, voltage विभागणे.",
      },
      {
        title: "समांतर जोडणी — सखोल",
        content: "समांतर (parallel) मध्ये घटक वेगवेगळ्या शाखांमध्ये जोडतात — प्रत्येकाला स्वतंत्र मार्ग.\n\nनियम:\n\t• सर्व शाखांना समान voltage (V समान).\n\t• current शाखांमध्ये विभागतो (I_total = I1 + I2 + ...).\n\t• resistance कमी होते: 1/R_total = 1/R1 + 1/R2 + ...\n\t• एक शाखा तुटली तरी इतर चालतात.\n\nउदाहरण: घरातील पंखे/दिवे समांतर — एक बंद झाला तरी इतर चालतात.\n\nगणित:\n\t• R1 = 100Ω, R2 = 100Ω समांतर → 1/R = 1/100 + 1/100 = 2/100 → R_total = 50Ω.\n\t• दोन समान resistor समांतर → निम्मे value.\n\nहेच कारण घरातील वीज समांतर जोडलेली असते — कोणतेही ठिकाण स्वतंत्र चालते.\n\nसराव: फोनचा charge करणाऱ्या कस्टमरची विद्युत वायरिंग समांतर आहे का निरीक्षण करा.",
      },
      {
        title: "भाषा — node, branch, loop",
        content: "सर्किटची चर्चा करताना काही शब्द महत्त्वाचे आहेत:\n\n• Node — जिथे दोन किंवा अधिक घटक मिळतात (जोडणी बिंदू).\n• Branch — दोन nodes दरम्यानचा मार्ग.\n• Loop — सर्किटमधील बंद चक्र (बंद मार्ग).\n\nउदाहरण:\n\t• समांतर सर्किटमध्ये प्रत्येक शाखा ही एक branch.\n\t• बॅटरीच्या (+) पासून (-) पर्यंतचा मार्ग loop.\n\nनियम (KVL सोपा)\n\t• बंद loop मध्ये सर्व voltages ची बेरीज शून्य होते: V_source = V1 + V2 + ...\n\nनियम (KCL सोपा)\n\t• एका node वर येणारा current = तेथून जाणारा current.\n\nही भाषा नियमित वाचनात येते — nouns समजले की manual/ट्युटोरियल समजणे सोपे होते.\n\nसराव: एक साधा सर्किट बनवून node, branch, loop ओळखून लिहा.",
      },
      {
        title: "Schematic वाचणे — चिन्हांची भाषा",
        content: "सर्किट कागदावर schematic (आकृती) ने दाखवतात — तारांऐवजी चिन्हे वापरतात.\n\nप्रमुख चिन्हे:\n\t• बॅटरी — दोन समांतर रेषा (+/−).\n\t• Resistor — झिगझाग (zigzag) रेषा.\n\t• LED — त्रिकोण + दोन बाण बाहेर.\n\t• Capacitor — दोन समांतर रेषा.\n\t• GND — तीन/एक घटणाऱ्या रेषा; सामायिक मुळा.\n\nवाचण्याचे नियम:\n\t• तारा एकमेकींना छेदत असतील पण बिंदू नसेल तर जोडलेल्या नाहीत.\n\t• बिंदू (dot) असल्यास जोडलेल्या आहेत.\n\t• पॉवर बहुतेक वरच्या बाजूस, GND खाली.\n\nउदा. LED सर्किट schematic: बॅटरी → resistor → LED → बॅटरी, GND तळाशी.\n\nसराव: मागील पाठातील LED सर्किट schematic स्वतः काढा — बॅटरी, resistor, LED चिन्हे वापरून.",
      },
      {
        title: "V-I-R नियम लागू — उदाहरण",
        content: "सर्किट डिझाइन म्हणजे V, I, R चा नियम व्यवहारात वापरणे.\n\nउदाहरण १ — LED चा resistor:\n\t• LED ला 2V, current 20mA=0.02A हवे.\n\t• बॅटरी 5V.\n\t• R = (V_source − V_led) / I = (5 − 2) / 0.02 = 150Ω.\n\nउदाहरण २ — व्होल्टेज डिव्हायडर:\n\t• 9V वर दोन resistor 3kΩ व 6kΩ शृंखलेत.\n\t• I = 9 / 9000 = 1mA.\n\t• मधल्या बिंदूवर voltage = I × 6k = 6V.\n\nउदाहरण ३ — power (watt):\n\t• P = V × I = 5 × 0.02 = 0.1W → 1/8W resistor पुरेसा.\n\nव्यवहारी पायरी: एकदा I मिळाला की R ठरता येतो; पुढे पॉवर तपासून योग्य resistor निवडा.\n\nसराव: 12V वर 3V, 30mA LED साठी resistor मोजा.",
      },
      {
        title: "आजचा सारांश",
        content: "सर्किटचे पाच मुद्दे:\n\n• सर्किट = बंद चक्र (source → path → load).\n• शृंखला — समान current, voltage विभाग, R बेरीज.\n• समांतर — समान voltage, current विभाग, R कमी.\n• भाषा — node, branch, loop; KVL/KCL ची ओळख.\n• Schematic — चिन्हे + बिंदू नियम; कोणते घटक जोडलेले.\n\nआजचे प्रॅक्टिस:\n\t०१. बॅटरी + एक LED चे सर्किट ब्रेडबोर्डवर बनवा.\n\t०२. दोन resistors शृंखलेत जोडून total R मोजा व multimeter ने तपासा.\n\t०३. व्होल्टेज डिव्हायडर बनवून दोन्ही voltage मोजा.\n\t०४. एक schematic काढून बिंदू/तार ओळखा.\n\nपुढील पाठात resistor — रंग-कोड, एकत्र जोडणीचे गणित आणि LED साठी निवड.",
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
        title: "Resistor चा उद्देश",
        content: "Resistor हा घटक आहे जो विद्युत प्रवाहाला जाणूनबुजून मर्यादा घालतो.\n\nमुख्य काम:\n\t• LED/घटकांचे संरक्षण — जास्त current ला अडवणे.\n\t• व्होल्टेज डिव्हायडर — voltage कमी करणे.\n\t• Timing — capacitor सोबत वेळ ठरवणे.\n\t• Pull-up/down — बटणाची स्थिर स्थिती.\n\nValue चे एकक ohm (Ω) — शंभर ते लाखो.\n\t• 220Ω — LED साठी.\n\t• 10kΩ (10000Ω) — pull-up.\n\t• 1MΩ (1000000Ω) — संवेदनशील सर्किट.\n\nमहत्त्वाचे: resistor दोन्ही दिशा समान — त्याला polarity (ध्रुवता) नसते.\n\nसराव: तुमच्या घरातील टाकाऊ device मधून resistor शोधा — value वाचण्याचा प्रयत्न करा.",
      },
      {
        title: "रंग-कोड — चार पट्ट्या",
        content: "बहुतेक resistors वर 4 पट्ट्या असतात — त्यातून value व tolerance वाचतात.\n\nरंग → संख्या:\n\tकाळा 0, तपकिरी 1, लाल 2, नारिंगी 3, पिवळा 4,\n\tहिरवा 5, निळा 6, जांभळा 7, राखाडी 8, पांढरा 9.\n\nपहिली 2 पट्टी — अंक.\nतिसरी पट्टी — किती शून्य (multiplier).\nचौथी पट्टी — tolerance (सोने ±5%, चांदी ±10%).\n\nउदाहरण:\n\t• लाल-लाल-नारिंगी-सोने = 22 × 1000 = 22kΩ ±5%.\n\t• तपकिरी-काळा-लाल-सोने = 10 × 100 = 1kΩ ±5%.\n\n5-पट्टी resistor — पहिली 3 अंक, चौथी शून्य, पाचवी tolerance.\n\nचांगली सवय: नेहमी multimeter ने value तपासा — रंग कधी अंधुक असतात.\n\nसराव: घरातील resistor ची value रंगांनी वाचा व multimeter ने पडताळा.",
      },
      {
        title: "शृंखला resistance — बेरीज",
        content: "Resistors एकापाठोपाठ एक जोडले तर total resistance म्हणजे बेरीज.\n\nनियम:\n\tR_total = R1 + R2 + R3 + ...\n\nउदाहरण:\n\t• 100Ω + 200Ω = 300Ω.\n\t• 1kΩ + 470Ω = 1.47kΩ.\n\nहे कधी वापरायचे:\n\t• 220Ω हवे पण हातात 100Ω + 120Ω असल्यास शृंखलेत जोडा.\n\t• voltage विभागण्यासाठी.\n\nसावधान:\n\t• मूल्य वाढते — वेगाने विचारात ठेवा.\n\nसराव: 4 resistors (100, 220, 330, 470) घेऊन सर्व शृंखलेत जोडा व total मोजा — multimeter ने तपासा.",
      },
      {
        title: "समांतर resistance — गणित",
        content: "Resistors समांतर जोडले तर total कमी होतो — अनेक मार्गांमुळे प्रवाहाला शक्य वाढते.\n\nनियम:\n\t1/R_total = 1/R1 + 1/R2 + ...\n\nदोन समान R:\n\t• दोन 100Ω समांतर = 50Ω.\n\t• दोन 10kΩ समांतर = 5kΩ.\n\nतीन किंवा अधिक:\n\t• 100Ω ∥ 100Ω ∥ 100Ω → R_total = 100/3 ≈ 33.3Ω.\n\nसोपी युक्ती (फक्त दोन):\n\tR_total = (R1 × R2) / (R1 + R2).\n\nउदा. 100 × 100 / 200 = 50Ω.\n\nवापर: हातात असलेल्या resistors वरून इच्छित कमी value बनवणे.\n\nसराव: 220Ω व 220Ω समांतर जोडून 110Ω मिळेल का — multimeter ने बघा.",
      },
      {
        title: "LED साठी resistor — निवड",
        content: "LED ला थेट battery वर जोडल्यास करंट वाढतो आणि LED जळतो. म्हणून resistor हवाच.\n\nसूत्र:\n\tR = (V_source − V_led) / I_desired\n\nउदाहरण:\n\t• बॅटरी 5V, LED ला 2V आणि current 20mA = 0.02A हवे.\n\t• R = (5 − 2) / 0.02 = 3 / 0.02 = 150Ω.\n\t• सुरक्षित जवळचे मूल्य 150Ω किंवा 220Ω घ्या (कमी चमक, जास्त आयुष्य).\n\nस्पष्टीकरण:\n\t• resistor वर पडणारे voltage = V_source − V_led.\n\t• सूत्र voltage current ने भागते तेव्हा ohm मिळतो.\n\nसामान्य चुका:\n\t• resistor काढला — LED त्वरित जळतो.\n\t• खूप लहान R — तीव्रकाळ तापतो.\n\t• LED ची polarity उलट — अजिबात प्रकाश नाही.\n\nसराव: 9V बॅटरीवर LED साठी resistor मोजा (R = (9−2)/0.02 = 350Ω → 390Ω घ्या).",
      },
      {
        title: "Power (watt) — गरम होणे",
        content: "प्रत्येक resistor वर जास्त power गेली तर तो गरम होतो व जळतो. म्हणून watt तपासणे आवश्यक.\n\nसूत्र:\n\tP = V × I = I² × R = V² / R\n\nउदाहरण:\n\t• LED circuit: V_over_resistor = 3V, I = 0.02A.\n\t• P = 3 × 0.02 = 0.06W.\n\t• 1/8W (0.125W) resistor पुरेसा.\n\nजेव्हा मोठी power:\n\t• 12V वर 1A load → P = 12W — मोठा wire-wound resistor.\n\t• अशावेळी resistor तापतो — योग्य cooling/मोठा आकार.\n\nसामान्य आकार:\n\t• 1/8W (लहान), 1/4W (साधारण), 1/2W (मोठा), 1W+ (तपकिरी चौरस).\n\nनियम: नेहमी आवश्यक power च्या दुप्पट रेटिंगचा resistor निवडा.\n\nसराव: 100Ω वर 100mA — power मोजा व योग्य resistor आकार ठरवा (P = 0.1² × 100 = 1W → 2W घ्या).",
      },
      {
        title: "आजचा सारांश",
        content: "Resistor चे सहा मुद्दे:\n\n• उद्देश — current मर्यादा, voltage विभागणी, pull-up/down.\n• रंग-कोड — पहिले अंक, मध्य शून्य, शेवट tolerance.\n• शृंखला — R_total = बेरीज.\n• समांतर — total कमी होते.\n• LED साठी — R = (V_source − V_led) / I.\n• Power — P = V × I; योग्य watt निवडा.\n\nआजचे प्रॅक्टिस:\n\t०१. 5 resistors वरच्या रंगांनी value लिहा आणि multimeter ने तपासा.\n\t०२. दोन resistors शृंखलेत व समांतर जोडून दोन्ही totals मोजा.\n\t०३. तुमच्या LED सर्किटसाठी resistor value गणनेने ठरवा.\n\t०४. एका resistor वर power गणित करा व योग्य आकार सांगा.\n\nपुढील पाठात capacitor — ऊर्जा साठवणे, units आणि RC timing.",
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
        title: "Capacitor म्हणजे काय",
        content: "Capacitor हा घटक विद्युत ऊर्जा (charge) लहान बॅटरीसारखी साठवतो आणि स्वयंचलित way ने परत देतो.\n\nरचना:\n\t• दोन धातूच्या पट्ट्या (plates).\n\t• मध्ये विद्युतरोधक (dielectric).\n\nकाम:\n\t• voltage लावल्यावर charge जमा होते.\n\t• voltage काढल्यावर capacitor हळूहळू ते सोडतो.\n\t• त्वरित रिकामा होण्याऐवजी क्रमाने.\n\nउदाहरण: पाण्याचा लहान तलाव — नळ भरतो, तलाव हळूहळू ओसरतो.\n\nमुख्य फरक (बॅटरी vs capacitor):\n\t• बॅटरी मोठी ऊर्जा दीर्घकाळ;\n\t• capacitor कमी ऊर्जा खूप लवकर — स्पाइक, filter, timing.\n\nसराव: फोनचे charging capacitor चे उदाहरण — पटकन भरणे, हळूहळू वापर.",
      },
      {
        title: "चार्ज होणे व उतरवणे",
        content: "Capacitor वर voltage लावल्यावर काय होते ते टाइमलाइनने:\n\nचार्ज होणे:\n\t• सुरुवातीला current मोठा — capacitor रिकामा.\n\t• जसजसे charge भरते तसा current कमी.\n\t• पूर्ण झाल्यावर current शून्य — capacitor 'full'.\n\nउतरवणे (discharge):\n\t• source काढला तर capacitor resistor द्वारे हळूहळू सोडतो.\n\t• पुन्हा voltage शून्य होईपर्यंत.\n\nटाइम कॉन्स्टंट (tau):\n\t• tau = R × C (सेकंद).\n\t• ~5 tau मध्ये पूर्णपणे charge/discharge होते.\n\nउदा. 10kΩ + 100µF → tau = 10000 × 0.0001 = 1s, पूर्ण ~5s.\n\nसावधान: मोठा capacitor वर charge बराच काळ राहतो — तो स्पर्श करण्यापूर्वी discharge करा (resistor ने).\n\nसराव: RC circuit बांधून LED ची फिकी होण्याची शैली निरीक्षण करा.",
      },
      {
        title: "Units — farad आणि अंक वाचणे",
        content: "Capacitor ची value farad (F) मध्ये — पण एक farad खूप मोठा आहे.\n\nसामान्य units:\n\t• microfarad (µF) = 0.000001 F — मोठे capacitors.\n\t• nanofarad (nF) = 0.000000001 F.\n\t• picofarad (pF) = 0.000000000001 F.\n\nरूपांतरण:\n\t• 1µF = 1000nF = 1,000,000pF.\n\t• 0.1µF = 100nF.\n\nअंक वाचणे:\n\t• मोठ्या capacitor वर '100µF 25V' असा लिहिलेला.\n\t• लहान (ceramic) वर '104' — 10 × 10⁴ pF = 100nF.\n\t• '223' — 22 × 10³ pF = 22nF.\n\nVoltage rating महत्त्वाचे:\n\t• त्या पेक्षा जास्त voltage लावल्यास capacitor फुटू शकतो.\n\t• नेहमी 2 गुणा सुरक्षित rating निवडा.\n\nसराव: घरातील device मधून capacitor वाचा — value व voltage label समजून घ्या.",
      },
      {
        title: "Ceramic vs Electrolytic",
        content: "Capacitors दोन मुख्य प्रकार — रचना, वापर व polarity भिन्न.\n\nCeramic (लहान, हलका):\n\t• value लहान — pF/nF.\n\t• polarity नसते (दोन्ही दिशा).\n\t• उच्च वारंवारता filter — signal circuits.\n\t• उदा. 104 (100nF), 100pF.\n\nElectrolytic (बेलनाकार, मोठा):\n\t• value मोठे — µF.\n\t• polarity असते (+/−) — उलट जोडल्यास स्फोट.\n\t• power supply filter, audio.\n\t• उदा. 100µF, 470µF.\n\nTantalum — खूप मोठा electrolytic, महाग, नाजूक.\n\nनिवडाचा नियम:\n\t• timing/audio → electrolytic/मोठा µF.\n\t• high-frequency filter → ceramic (लहान nF/pF).\n\t• polarity असल्यास नेहमी सरळ (+/−) ठरवा.\n\nसराव: बोर्डवरील electrolytic capacitor च्या (+)/− marks ओळखा.",
      },
      {
        title: "RC timing — वेळ ठरवणे",
        content: "Resistor-capacitor (RC) मिळून वेळ ठरवणारा सर्किट.\n\nआधार:\n\t• tau = R × C.\n\t• चार्ज/डिस्चार्ज वेळ त्यानेच ठरतो.\n\nउदाहरण — मंद LED:\n\t• R = 100kΩ, C = 100µF → tau = 10s.\n\t• LED त्यातून हळूहळू उजळेल/विझेल.\n\n555 timer IC:\n\t• RC ने वेळ ठरवून blink/buzzer timing.\n\t• (R1 + 2R2) × C ने output period.\n\nवापर:\n\t• Debounce — बटणाची स्थिरता.\n\t• Delay — सुरुवातीला उशीर.\n\t• PWM generator.\n\nसराव: 10kΩ + 100µF ने LED blink — वेळ मोजा व R/C बदलून फरक पहा.\n\nआठवा: R वाढवला तर वेळ वाढतो; C वाढवला तरही वेळ वाढतो.",
      },
      {
        title: "Power supply filtering",
        content: "Electricity सहज 'गुळगुळीत' नसते — वाइब्रेशन (ripple) असते. Capacitor ते सोडतो.\n\nसमस्या:\n\t• बॅटरी/चार्जरच्या बाहेर येणारा voltage थोडा लहरी असतो.\n\t• सिग्नल सर्किटमध्ये ती लाट व्यत्यय आणते.\n\nउपाय:\n\t• मोठा electrolytic (जसे 470µF) + पॉवर टर्मिनल्सवर.\n\t• लहान ceramic (100nF) + प्रत्येक IC च्या पायाजवळ.\n\nहे का:\n\t• capacitor चार्ज/डिस्चार्ज होऊन लहरी 'गिलटी' करतो.\n\t• मोठा — low-frequency ripple; लहान — high-frequency noise.\n\nव्यवहारी नियम:\n\t• प्रत्येक power connector जवळ 100nF एक.\n\t• मोठे current loads जवळ 100µF+\n\nसराव: Arduino च्या 5V/GND जवळ 100nF जोडा — sensor values स्थिर होतात का बघा.",
      },
      {
        title: "आजचा सारांश",
        content: "Capacitor चे सहा मुद्दे:\n\n• काम — ऊर्जा/charge साठवणे, लवकर सोडणे.\n• Charge/discharge — tau = R × C; ~5 tau पूर्ण.\n• Units — µF/nF/pF; '104' = 100nF वाचणे.\n• प्रकार — ceramic (nF, no polarity), electrolytic (µF, ±).\n• RC timing — वेळ ठरवण्यासाठी वापर.\n• Filtering — ripple/noise कमी करणे.\n\nआजचे प्रॅक्टिस:\n\t०१. घरातील device मधून capacitors वाचा (value+voltage).\n\t०२. 10kΩ + 100µF चे tau गणित करा व timing circuit बनवा.\n\t०३. एक electrolytic (+/−) व एक ceramic ओळखा.\n\t०४. 100nF ने sensor power गुळगुळीत केल्यावर फरक बघा.\n\nपुढील पाठात transistor — लहान signal ने मोठा भार switch/amplify करणे.",
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
        title: "Transistor ची ओळख",
        content: "Transistor हा तीन-पायांचा घटक — लहान signal ने मोठा current/voltage नियंत्रित करतो.\n\nसाधर्म्य: नळाचा नळकोश — हलके फिरवल्यावर मोठा पाणी-प्रवाह सुरू.\n\nतीन पायः\n\t• Base (B) — नियंत्रण (हलका बोट).\n\t• Collector (C) — मुख्य current येतो.\n\t• Emitter (E) — मुख्य current बाहेर.\n\nदोन प्रकार:\n\t• NPN — सर्वांत सामान्य; base ला + दिल्यावर ON.\n\t• PNP — उलट; base ला −/GND दिल्यावर ON.\n\nउदा. BC547, 2N2222 (NPN); BC557 (PNP).\n\nकोणताही circuit मध्ये 'शक्ती वाढवणारा मध्यस्थ' — मायक्रोकंट्रोलर किंवा बटण हाताळता येणार नाही असे मोठे भार चालवण्यास मदत.\n\nसराव: datasheet मध्ये pin-out व max current (Ic) वाचा.",
      },
      {
        title: "NPN switch — कसे काम करतो",
        content: "NPN transistor हा सर्वात सोपा switch म्हणून वापरतात.\n\nकाम करण्याचा नियम:\n\t• Base-Emitter दरम्यान ~0.7V आला तर current वाहू लागतो.\n\t• त्या small base current ने Collector-Emitter मध्ये मोठा current चालतो.\n\nON/OFF:\n\t• Base + → transistor ON (मोठा current).\n\t• Base GND/0 → transistor OFF (current नाही).\n\nमार्गदर्शन:\n\t• load (LED/motor) Collector वर, Emitter GND ला.\n\t• Base resistor लावायलाच हवा — अन्यथा base current वाढतो.\n\nउदा. LED switch:\n\tArduino pin → 1kΩ → Base; LED+resistor Collector ते V+, Emitter GND.\n\tpin HIGH → LED ON.\n\nमहत्त्वाचे: Base ला तेवढा small current की input ठेवता येऊ शकते — मोठ्या भाराची ऊर्जा transistor बाहेरून घेतो.",
      },
      {
        title: "Base resistor — योग्य मूल्य",
        content: "Base current मर्यादित करण्यासाठी base ला resistor लागतो.\n\nसूत्र:\n\tR_base = (V_high − 0.7) / I_base\n\nजिथे:\n\t• 0.7V — base-emitter drop (NPN).\n\t• I_base — load current / gain.\n\nउदाहरण:\n\t• Arduino HIGH = 5V, load = 100mA, gain hFE = 100.\n\t• I_base = 100mA / 100 = 1mA.\n\t• R_base = (5 − 0.7) / 0.001 = 4300Ω → 4.7kΩ.\n\nसुरक्षित नियम:\n\t• नेहमी I_base load च्या 1/10 पेक्षा जास्त न होण्यासाठी.\n\t• बहुतेक LED/मोटर साठी 1kΩ ते 10kΩ योग्य.\n\nचुका:\n\t• Base resistor नाही — transistor उष्ण/जळतो.\n\t• खूप मोठा R_base — transistor पूर्ण ON होत नाही (dimness).\n\nसराव: 200mA motor, gain 100 — R_base मोजा.",
      },
      {
        title: "Amplifier — कल्पना",
        content: "Transistor switch ऐवजी amplifier म्हणूनही काम करतो — small signal मध्ये अर्धे व मोठा नक्कल.\n\nकल्पना:\n\t• Microphone चा कमकुवत signal.\n\t• Transistor त्याला वाढवून स्पीकर चालवतो.\n\t• 'Base चे small चढ-उतार' → 'Collector चे मोठे चढ-उतार'.\n\nव्यवहारात:\n\t• Amplifier mode साठी मध्यम bias (base ला स्थिर voltage).\n\t• switch मध्ये पूर्ण ON/OFF; amplifier मध्ये 'अर्धा' region.\n\t• Gain = output अंदाज / input अंदाज.\n\nव्यापक वापर:\n\t• Audio preamp, radio, छोटा signal amplifier.\n\t• Sensor signal मजबूत करणे.\n\nसगळ्यात सोपे उदाहरण:\n\t• मोठा फोटो sensor चे small change — transistor ने वाढवून LED चमकेल.\n\nआता switch व amplifier दोन्ही समजले — प्रत्येक project मधील transistor च्या कामाचा आधार.",
      },
      {
        title: "मोठा भार — motor/relay",
        content: "Arduino/बटण थेट मोटर किंवा solenoid चालवू शकत नाही — सुरक्षित रूपांतर transistor सोबत घेता येते.\n\nसमस्या:\n\t• Motor घेते मोठा current (100mA-1A).\n\t• Arduino pin फक्त ~20-40mA देऊ शकतो.\n\nउपाय — transistor driver:\n\t• Arduino pin → base resistor → transistor base.\n\t• Motor Collector ला, Emitter GND.\n\t• Diode (flyback) motor च्या सोबत उलट — peak वाचवता.\n\nRelay:\n\t• 5V relay coil मोठी ऊर्जा घेते — transistor ने चालवतात.\n\t• relay ने AC उपकरण (पंखा, दिवा) switch होते.\n\nदिशा (NPN low-side):\n\t• लोड V+ आणि collector दरम्यान.\n\t• transistor GND ते emitter — 'low-side switch'.\n\nसराव: छोटा 5V motor + transistor driver बनवा; diode विसरू नका.",
      },
      {
        title: "MOSFET — आधुनिक निवड",
        content: "मोठा भार चालवण्यासाठी आता MOSFET हा जास्त कार्यक्षम.\n\nफरक:\n\t• Base ऐवजी Gate.\n\t• Gate वर voltage दिल्यावर current (base) न लागता दार उघडते.\n\t• खूप कमी gate current — लहान voltage ने मोठा current.\n\nप्रकार:\n\t• Logic-level MOSFET (IRLZ44N) — 5V ने पूर्ण ON.\n\t• IRF520/IRF540 — उच्च voltage.\n\nउदा. 5V + IRF520 + motor+diode — Arduino ने थेट चालवणे.\n\nटीप:\n\t• Gate ला pull-down resistor (10kΩ) — अन्यथा उघड झाल्यास ON राहतो.\n\t• Flyback diode मोटर जोडणीत आवश्यक.\n\nफायदे (vs BJT):\n\t• कमी power loss, जास्त वेग.\n\t• 3.3V सर्किटमध्ये योग्य logic-level निवडा.\n\nइलेक्ट्रॉनिक्सच्या आधुनिक जगात हेच standard — पण NPN समजले तर MOSFET सहज समजतो.",
      },
      {
        title: "आजचा सारांश",
        content: "Transistor चे सहा मुद्दे:\n\n• काम — लहान signal ने मोठा भार नियंत्रित.\n• NPN — base + → ON; PNP उलट.\n• Base resistor — (V_high − 0.7) / I_base.\n• Switch vs amplifier — पूर्ण ON/OFF vs अर्धा प्रवर्धन.\n• मोठा भार — transistor driver + flyback diode.\n• MOSFET — gate-चालित, आधुनिक निवड.\n\nआजचे प्रॅक्टिस:\n\t०१. NPN + 1kΩ + LED सर्किट बनवा (Arduino ने).\n\t०२. बटणाने transistor switch करून LED चालवा.\n\t०३. आपले 5V motor transistor driver मध्ये जोडा.\n\t०४. datasheet मधील hFE व max Ic वाचून एक नोट बनवा.\n\nपुढे Arduino पाठ्यक्रम सुरू — electronics-basics नंतर arduino-basics (tutorials.ts).",
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
    next: "arduino-basics",
  },
];