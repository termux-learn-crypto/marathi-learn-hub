import type { Tutorial } from "@/data/tutorials";

// === COMPUTER · LEVEL 1 — संगणक मूलभूत शिक्षण पूर्ण करणे ===
// computer-basics → computer-hardware → computer-software च्या नंतरची पायरी:
// io-devices → ports → memory → os-basics → file-system → shortcuts →
// networking → security → troubleshooting → cloud → buying-guide → history
// प्रत्येक tutorial मध्ये: सखोल स्पष्टीकरण, उदाहरणे, सामान्य चुका आणि छोटा सराव.

export const COMPUTER1_LABEL = "Computer · Level 1 — संगणक मूलभूत";

export const computerLevel1: Tutorial[] = [
  {
    slug: "computer-io-devices",
    categoryId: "computer",
    title: "Computer I/O Devices",
    marathiTitle: "इनपुट आणि आउटपुट उपकरणे",
    level: "beginner",
    minutes: 15,
    summary: "Keyboard, mouse, monitor, printer, scanner — इनपुट आणि आउटपुट उपकरणांची सखोल उलगडणी.",
    sections: [
      {
        title: "1. इनपुट उपकरणे म्हणजे काय?",
        content:
          "इनपुट उपकरणे (Input Devices) ही संगणकाची 'डोळे-कान-हात' आहेत — त्यांच्यातूनच संगणकाला कळतं 'काय करायचं'.\nअजून सखोल विचार करू:\n• कोणत्याही कृतीची सुरुवात = इनपुट. (टाइप करणे, क्लिक करणे, छायाचित्र घेणे, बोलणे — सर्व.)\n• संगणकाला फक्त विजेचीच माहिती समजते (0/1) — इनपुट device चे काम तुमच्या कृतीचे (pressure, light, sound, motion) या विजेच्या संकेतांत रूपांतर करणे.\n\nम्हणूनच प्रत्येक इनपुट उपकरणात संवेदक (sensor) असतो:\nकीबोर्डमध्ये key press → charge बदल → 0/1\nमाउसमध्ये light/स्लॅक → movement → 0/1\nहे रूपांतर समजलं की 'इनपुट कसे काम करतं' याचा पाया तयार होतो.",
      },
      {
        title: "2. कीबोर्ड — संगणकाचे लेखनयंत्र (सखोल)",
        content:
          "कीबोर्ड (Keyboard) हे सर्वात महत्त्वाचे इनपुट device — मजकूर लिहिण्यासाठी.\n\nमुख्य भाग व ओळख:\n• Alphanumeric keys — अक्षरे व संख्या आणि # $ @ सारखी special characters.\n• Function keys (F1-F12) — shortcuts (F2 rename, F5 refresh).\n• Modifier keys — Ctrl, Alt, Shift — इतर keys ला विशेष अर्थ देतात (Ctrl+C = copy).\n• Nav keys — Home, End, PageUp/Down, arrows — फाईल/पेजमध्ये झटपट हालचाल.\n• Numpad — उजवीकडील मोजणीcurrent — फक्त संख्या मोजण्यात वेगवान.\n\nLayouts:\n• QWERTY — इंग्रजीसाठी सर्वत्र.\n• अभ्यासानुसार मराठी/देवनागरी layout (Inscript) — OS मध्ये языка add करून.\n• नवीन layout शिकण्यासाठी — typing trainer अवश्य वापरा; बोटांची ठिकाणे नकाशानुसार ठेवा.\n\nकाळजी:\nकीबोर्डवर occurrence पेय सांडलं तर keys अडकतात — उलटा ठेवून वाळवा, इलेक्ट्रॉनिक्स भिजवू नका.",
      },
      {
        title: "3. माउस आणि टचपॅड — हालचालीची साधने (सखोल)",
        content:
          "माउस (Mouse) / टचपॅड (Touchpad) — संगणकाच्या screen वरील वस्तू निवडणे, हलवणे, उघडणे.\n\nकामातील मुख्य gestures:\n• Left click — निवड / उघडणे.\n• Double click — फोल्डर/अॅप उघडणे.\n• Right click — संदर्भ मेनू (context menu).\n• Drag & drop — फाईल पुढे खेचणे.\n• Scroll wheel — वर/खाली जाणे.\n• Ctrl + scroll — zoom in/out.\n\nतंत्रज्ञान:\n• Optical/Laser mouse — खालचा प्रकाश डिव्हाइस हालचालीचा अंदाज घेतो; डेस्क/मॅट सपाट असणे गरजेचे.\n• Wireless/BT mouse — USB receiver किंवा ब्लूटूथने जोडला जातो; batteries लक्षात ठेवा.\n\nएर्गोनॉमिक्स:\n• माउस अगदी सहज हातात बसला पाहिजे; २-३ तास सलग वापर असल्यास wrist जोर न करणारे उपकरण.\n• टचपॅडवरील gestures (दोन बोटांनी स्क्रोल, तीन बोटांनी अॅप switch) शिकल्यास लॅपटॉप वापर सोपा होतो.",
      },
      {
        title: "4. मॉनिटर — निकाल दाखवणारा पडदा (सखोल)",
        content:
          "मॉनिटर (Monitor) हे मुख्य आउटपुट device — सर्व निकाल इथे दिसतात.\n\nमहत्त्वाची वैशिष्ट्ये:\n• Resolution — पिक्सेलची संख्या; 1920×1080 (Full HD) सध्याचा मानक; 4K = 3840×2160 (अधिक तीक्ष्ण, जास्त किंमत).\n• Refresh rate (Hz) — पडदा किती वेळा/सेकंद ताजा (सामान्य 60Hz; गेमिंग 144Hz+ गुळगुळीत).\n• Panel type — IPS (रंग अचूक, दृष्टी कोन चांगला), TN (स्वस्त पण रंग कमी).\n• साइज — 24-27 inch सामान्य; खूप मोठा पडदा जवळ बसल्यास डोळे थकतात (distance वेगळे).\n\nडोळ्यांची काळजी (20-20-20 नियम):\nप्रत्येक २० मिनिटांनी २० सेकंद २० फूट दूर पहा — डोळ्यांचा ताण घटतो.",
      },
      {
        title: "5. प्रिंटर — कागदावरील निकाल (सखोल)",
        content:
          "प्रिंटर (Printer) आउटपुट device — digital मजकूर/चित्र कागदावर स्थिर ठेवतो.\n\nमुख्य प्रकार:\n• Inkjet — शाईचे सूक्ष्म थेंब कागदावर फेकतो; फोटोंचे रंग उत्तम; शाई पुढे महाग.\n• Laser — पावडर (toner) + उष्णता; मजकूर/CS. उल्कित दस्तऐवज जलद व पृष्ठामागे स्वस्त; रंगीत लेझर महाग.\n• Thermal — रसीद प्रिंटर (मॉल/दुकानात) — शाईशिवाय, उष्णतेने.\n• 3D printer — वास्तविक ठोस वस्तू थर-थर करून बनवणारा (औद्योगिक/डिझाइन).\n\nखरेदीचा विचार:\n• प्रिंट व्हॉल्यूम — महिन्याला किती पानं? (कमी → Inkjet; जास्त → Laser)\n• Cost per page — printer स्वस्त पण शाई नंतर नारा नको.\n• Wireless printing — मोबाईल/लॅपटॉपहून Wi-Fi प्रिंट सुलभ.",
      },
      {
        title: "6. स्कॅनर आणि वेबकॅम — जगाची नक्कल (सखोल)",
        content:
          "स्कॅनर (Scanner) — कागदावरील मजकूर/फोटो संगणकात डिजिटल करतो.\n• Flatbed — काचेवर कागद ठेवून वरची काच शांत राहते — दस्तऐवज/पुस्तक.\n• Sheetfed — पानं क्रमवार फेडून घेतो — जास्त पानं त्वरीत.\n• OCR (Optical Character Recognition) — स्कॅन केलेला प्रतिमेतला मजकूर (अक्षरे) searchable text बनवतो — PDF मधून मजकूर काढण्यासाठी उत्तम.\n\nवेबकॅम (Webcam) — इनपुट camera:\n• व्हिडिओ कॉल, photo, video recording.\n• Privacy: वापरात नसताना कॅमेरा झाकण्यासाठी shutter/स्टिकर वापरा — hacking किंवा spyware पासून काम मिळेलसं.\n\nमाइक्रोफोन (Mic) — आवाजाचे electrical संकेतांत रूपांतर; voice typing व voice assistants चा पाया.",
      },
      {
        title: "7. दोन्ही (I/O) उपकरणे — दुहेरी भूमिका",
        content:
          "काही उपकरणे इनपुट + आउटपुट दोन्ही काम करतात:\n\n• टचस्क्रीन — तुमचा स्पर्श (इनपुट) + चित्र (आउटपुट) एकाच पडद्यावर; मोबाईल/ATM/कियोस्क.\n• USB ड्राइव्ह — संगणकातून डेटा घेतो (लिहितो) आणि परत देतो (वाचतो) — storage device.\n• नेटवर्क कार्ड — Wi-Fi/Ethernet केबलवरून डेटा पाठवतो व घेतो — मोबाईल तर प्रत्येक क्षणी दोन्ही करतो.\n• प्रिंटर — छापतो (आउटपुट) आणि cartidge/कागद स्थिती सांगतो (इनपुट).\n\nही दुहेरी भूमिका ओळखणे म्हणजे device classification समजणे — पुढील सर्व tutorial चा आधार.",
      },
      {
        title: "8. उपकरणांची निवड व देखभाल (सखोल)",
        content:
          "चांगली खरेदी व देखभाल यामुळे उपकरणे बरेच दिवस काम करतात:\n\nनिवडीचे मुद्दे:\n• कामाच्या आधारे — बरीच मजकूर टाइप करतो? → चांगला कीबोर्ड; फोटो काढतो? → अचूक रंग mAntor.\n• बजेट — वाढत्या किंमतीचे: सोपे ब्रँड → मध्यम → प्रिमियम.\n\nदेखभाल:\n• कीबोर्ड — पटकन पुसा, पेय दूर.\n• माउस — light खिडकी स्वच्छ.\n• मॉनिटर — मऊ कापडाने पुसा (chemical नको).\n• प्रिंटर — धूल झाकून ठेवा, नियमित test print.\n\nया छोट्या सवयी तुमच्या उपकरणांचे आयुष्य वाढवतात आणि खर्च कमी करतात.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "I/O उपकरणांबाबत नवशिक्यांचे सामान्य गैरसमज:\n\n• गैरसमज १: 'मॉनिटर म्हणजे संपूर्ण संगणक.' — नाही; फक्त आउटपुट.\n\n• गैरसमज २: 'टचस्क्रीन फक्त आउटपुट.' — दोन्ही.\n\n• गैरसमज ३: 'स्कॅनर छापतो.' — उलट: स्कॅनर वाचतो (wave → digital), प्रिंटर छापतो.\n\n• गैरसमज ४: 'प्रिंटर सर्वत्र शाई वापरतो.' — thermal प्रिंटर शाईशिवाय.\n\n• गैरसमज ५: 'वेबकॅम फक्त व्हिडिओ कॉलसाठी.' — face unlock, barcode scan, photo editing — अनेक उपयोग.\n\nहे गैरसमज ओळखल्यावर Next tutorials मध्ये सहज प्रवेश मिळेल.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा:\n\n१) सभोवतालची १० उपकरणे इनपुट/आउटपुट/दोन्ही या गटांत लिहा — ATM, स्मार्टबोर्ड, फोटोशॉप अशी.\n२) तुमच्या लॅपटॉप/फोनचा कीबोर्ड व माउस पोर्ट (USB/ब्लूटूथ) कसा आहे पहा.\n३) मॉनिटर resolution (Settings → Display) पहा — 1920×1080 असल्यास Full HD.\n\nसारांश:\n• इनपुट = माहिती देणे; आउटपुट = निकाल दाखवणे; दोन्ही = दुहेरी.\n• प्रत्येक उपकरणात sensor रूपांतर होते.\n• योग्य निवड व देखभाल — दीर्घ आयुष्य.\n\nपुढील tutorial (computer-ports) — या सर्व उपकरणांचे संगणकाशी जोडणी (USB, HDMI, Ethernet) सविस्तर.",
      },
    ],
    quiz: [
      {
        question: "कीबोर्ड कोणत्या प्रकारचे उपकरण?",
        options: ["इनपुट", "आउटपुट", "दोन्ही", "storage"],
        correct: 0,
      },
      {
        question: "टचस्क्रीन म्हणजे काय?",
        options: ["फक्त इनपुट", "फक्त आउटपुट", "दोन्ही", "नेटवर्क"],
        correct: 2,
      },
      {
        question: "संगणकाला निकाल आपल्याला दाखवणारे उपकरण कोणते?",
        options: ["कीबोर्ड", "माउस", "मॉनिटर", "स्कॅनर"],
        correct: 2,
      },
    ],
    related: ["computer-hardware", "computer-ports", "computer-basics"],
    next: "computer-ports",
    prev: "computer-software",
  },
  {
    slug: "computer-ports",
    categoryId: "computer",
    title: "Computer Ports & Cables",
    marathiTitle: "पोर्ट्स आणि केबल्स — जोडण्यांची सखोल ओळख",
    level: "beginner",
    minutes: 14,
    summary: "USB, HDMI, VGA, Ethernet, audio, adapters — संगणकांच्या सर्व जोडण्या कशा काम करतात.",
    sections: [
      {
        title: "1. पोर्ट म्हणजे काय?",
        content:
          "पोर्ट (Port) म्हणजे संगणकाच्या कडेवरील जोडनीचे 'दरवाजे' — जिथून बाह्य उपकरणे (USB ड्राइव्ह, मॉनिटर, नेट केबल, प्रिंटर) संगणकाशी जोडली जातात.\n\nपोर्ट म्हणजे केबल नाही —\n• पोर्ट = संगणकातील ठाव (socket).\n• केबल = जोडनी वाहक (wire + connector).\n• ऍडाप्टर = एक पोर्ट दुसऱ्यात रूपांतर करण्याचे साधन.\n\nकाही पोर्ट मागील बाजूस (I/O back panel) असतात, काही समोरच्या (front) भागावर — डिझाइननुसार.\nप्रत्येक पोर्टला विशिष्ट आकार असतो — चुकीच्या पोर्टला जबरदस्तीने जोडता येत नाही.\n\nया topic मध्ये तुम्हाला प्रत्येक पोर्ट कसा ओळखावा आणि कधी कसा वापरावा — ते ठोस शिकायला मिळेल.",
      },
      {
        title: "2. USB — सर्वात बहुपयोगी पोर्ट (सखोल)",
        content:
          "USB (Universal Serial Bus) — 'एक पोर्ट, हजार कामे'.\n\nआकार व प्रकार:\n• USB-A — मोठा आयताकृती; जुने मानक; पेनड्राइव्ह, कीबोर्ड, माउस, चार्जर.\n• USB-B — चौकोनी, जुने प्रिंटर/स्कॅनर.\n• USB-C — नवीन, लहान अंडाकृती, उलटसुलटही जातो; फोन/लॅपटॉप/मॉनिटर मानक; डेटा + वीज दोन्ही.\n• Micro-USB — जुने अॅन्ड्रॉइड फोन/इअरबड्स.\n\nव्हर्जन व वेग:\n• USB 2.0 — ~480 Mbps (हेळू, कीबोर्ड/माउससाठी पुरे).\n• USB 3.0/3.1 — 5-10 Gbps (निळा आतील भाग) — पेनड्राइव्ह/HDD.\n• USB 3.2 / Thunderbolt — 20-40 Gbps — मॉनिटर, eGPU.\nछोटी टीप: जुना port + नवीन cable हेळू असते; निटची दोन्ही पुरी आवश्यक.\n\nवीज (Power):\nUSB-C द्वारे लॅपटॉप चार्जिंग (60-100W) — होय, एकच केबल सगळं काही करते.",
      },
      {
        title: "3. व्हिडिओ पोर्ट्स — मॉनिटर जोडणी (सखोल)",
        content:
          "मॉनिटर/टीव्हीला संगणक जोडणाऱ्या ports:\n\n• HDMI — सर्वात सामान्य; चित्र + आवाज एकत्र; व्हर्जननुसार 4K/8K (HDMI 2.0/2.1).\n• DisplayPort — संगणक-तंत्रज्ञानासाठी उत्तम; मोठे multi-monitor; त्यात Mini-DP (मॅक) व Thunderbolt (वेगवान).\n• VGA — जुना 15-pin, फक्त चित्र (अनालॉग); आज जुन्या प्रोजेक्टरशिवाय क्वचित.\n• DVI — जुना digital (मध्यम).\n\nसुसंगतता अडचण — समाधान:\n'HDMI फक्त आहे परंतु मॉनिटर DisplayPort हवा' → ऍडाप्टर: HDMI→DisplayPort. (डिजिटल→डिजिटल ठीक; अनालॉग रूपांतरण वेगळे.)\n\nखरेदी/वापर टिप्स:\n• एकच monitor — HDMI पुरे; दोन+ — DisplayPort/Daisy chain.\n• लांब केबल (3m+) — चित्र अस्पष्ट; जवळ ठेवा किंवा quality high.\n• केबल व्हर्जन जुळवा — मॉनिटर 4K असेल तर cable 2.0 compact हवा.",
      },
      {
        title: "4. नेटवर्क पोर्ट्स — इंटरनेट जोडणी (सखोल)",
        content:
          "नेटवर्क पोर्ट — संगणकाला इंटरनेट/लॅनशी जोडणारी:\n\n• Ethernet (RJ45) — मोठ्या रुंद सॉकेटमध्ये LAN केबल; वेग: 100 Mbps (Cat5), 1 Gbps (Cat5e/Cat6), 10 Gbps+ (Cat6a/7).\n• WiFi / Bluetooth — पोर्ट नाही पण याच कामाचे wireless.\n\nEthernet का वापरतात?\n• स्थिरता — गेमिंग/व्हिडिओ कॉलमध्ये колебаний नाही.\n• WiFi सिग्नल कमी असेल घरामध्ये — Ethernet हा पर्याय.\n• सुरक्षा — स्थानिक नेटवर्क एकट्यापर्यंत मर्यादित (WiFi पेक्षा कमी व्यत्यय).\n\nसामान्य नेटवर्क सेटअप:\nमोडेम (इंटरनेट) → राउटर (WiFi/Ethernet) → तुमची उपकरणे.\nRouter ला Ethernet केबल ने संगणक जोडल्यास सर्वात जलद व स्थिर.",
      },
      {
        title: "5. ऑडिओ आणि इतर पोर्ट्स (सखोल)",
        content:
          "संगणकावरील इतर महत्त्वाचे ports:\n\nऑडिओ:\n• 3.5mm jack — हिरवा (आवाज बाहेर), गुलाबी (माईक आत), निळा (लाईन-इन).\n• USB headphone — USB वरच आवाज + माईक (PWM कोडस्क) — जुने साउंड कार्ड मुद्दा नाही.\n• S/PDIF (ऑप्टिकल) — डिजिटल ऑडिओ (जुने अॅम्प/साउंडबार).\n\nमेमरी कार्ड:\n• SD/microSD slot — फोटोग्राफर/फोन डेटा.\n\nपॉवर:\n• Barrel jack — जुने लॅपटॉप चार्जिंग.\n• USB-C Power Delivery — नवीन केबल एकच.\n\nजर संगणकावर HDMI + USB + headphone असतील तर बहुतेक दैनंदिन कामे अन्य कोणत्याही ऍडॉप्टरशिवाय होऊ शकतात.",
      },
      {
        title: "6. डॉकिंग स्टेशन आणि ऍडाप्टर (सखोल)",
        content:
          "लॅपटॉपमध्ये कमी ports असतात — कामासाठी डॉकिंग स्टेशन हा पर्याय:\n\n• USB-C Hub/Docking station — एक USB-C port वर अनेक slots: HDMI, Ethernet, USB-A, SD, चार्जिंग.\n• कॉम्पॅक्ट hub (लहान) vs पूर्ण docking (डेस्कवर स्थिर) — प्रवासात hub, डेस्कवर docking.\n\nऍडाप्टर:\n• HDMI↔DisplayPort, USB-C↔HDMI, USB-C↔Ethernet.\n• Digital↔Digital — साधे; analog (VGA) असेल तर वेगळे kin aktive.)\n\nयोग्य खरेदी:\n• Thumb rule — तुम्हाला काय जोडायचे (मॉनिटर? प्रिंटर? नेट?) ते ठरवून hub निवडा.\n• व्हिडिओ वापर असल्यास 4K/60Hz सपोर्ट असलेला hub घ्या.",
      },
      {
        title: "7. 'नो सिग्नल' — व्हिडिओ समस्येचा उपाय (सखोल)",
        content:
          "मॉनिटरवर 'No Signal' दिसले तर घाबरू नका — क्रमशः तपासा:\n१) केबल मॉनिटर व संगणक दोन्हीकडे घट्ट?\n२) केबल योग्य port मध्ये (HDMI/DP)? — तुम्ही कधीही २ output निवडले आहेत का?\n३) दूसरा monitor/output सॉकेट वापरून पहा.\n४) संगणक रीस्टार्ट करा.\n५) दूसरा cable/port वापरून तपासा — machine किंवा cable?\n\nनियम: बदल एकटा-एकटा करा — मग समजेल नेमकी समस्या कुठे.\nबहुतेक 'नो सिग्नल' खरं तर ढिली केबल किंवा चुकीचा input निवड असते — सॉफ्टवेअर समस्या नाही.",
      },
      {
        title: "8. पोर्ट, केबल आणि ऍडाप्टर — फरक (सखोल)",
        content:
          "तीन गोष्टी नेहमी गोटावतात — परिभाषा नीट करू:\n\n• पोर्ट — संगणकाच्या कडेवरील सॉकेट (उदा. USB-A port, HDMI port).\n• केबल — connector + वायर (उदा. USB-C-to-C cable, HDMI cable).\n• ऍडाप्टर — एक पोर्टवर दुसरा पोर्ट (उदा. USB-C → HDMI adapter).\n\nउदाहरण प्रवाह:\nलॅपटॉप (USB-C) → ऍडाप्टर → HDMI केबल → मॉनिटर (HDMI).\nयाच्या बाबतीत समजलं की hardware connection ची कल्पना स्पष्ट होते आणि खरेदी/समस्यादेखील सोपी.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "पोर्ट/केबल्स संदर्भातील सामान्य गैरसमज:\n\n• 'USB-C म्हणजे Thunderboltच नाही.' — USB-C फक्त आकार; दोन्ही असू शकतं, पण तुमचा device याला सपोर्ट करतो का ते तपासा.\n\n• 'ॲडॉप्टर माझा वेग वाढवतो.' — वेळ खर्च नाही; वेग म्हणजे सर्वात कमी वेगाची साखळी.\n\n• 'लांब केबल = जास्त चांगली.' — लांब केबलमुळे सिग्नल क्षीण होतो.\n\n• 'एकच USB-C सर्व काही.' — तुमच्या device ला एनर्जी/डेटा/व्हिडिओ सपोर्ट आहे का हे ठरवतो.\n\n• 'पोर्ट खराब — नवीन संगणक.' — ब्रेकिंगचे नियम: port अधिक वेळा वापरा आणि हब/डॉकिंगने ताण कमी करा.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा:\n\n१) लॅपटॉप/फोनचे प्रत्येक port — नाव व रंगासह यादी करा, Photos काढा.\n२) Ethernet केबल लॅपटॉप/राउटर यांना जोडून WiFi बंद करा — वेगात फरक समजू.\n३) एक USB-C hub ऍडॉप्टर असल्यास प्रिंटर/मॉनिटर/नेट — ३ उपकरणे यात जोडून पहा.\n\nसारांश:\n• पोर्ट = सॉकेट; केबल = वाहक; ऍडाप्टर = रूपांतरक.\n• USB (डेटा + वीज), HDMI/DP (व्हिडिओ), Ethernet (नेट), ऑडिओ.\n• योग्य व्हर्जन/ऍडाप्टर निवडणे व केबल सांभाळणे — कामाचा स्थायी.\n\nपुढील tutorial (computer-memory) — याच पोर्टवर येणाऱ्या storage व RAM संकल्पना.",
      },
    ],
    quiz: [
      {
        question: "HDMI पोर्ट कशासाठी असतो?",
        options: ["फक्त चित्र", "फक्त आवाज", "चित्र + आवाज", "चार्जिंग"],
        correct: 2,
      },
      {
        question: "निळ्या रंगाचा USB पोर्ट काय दर्शवतो?",
        options: ["जलद USB 3.0", "जुना USB 1.0", "फक्त power", "काहीच नाही"],
        correct: 0,
      },
      {
        question: "संगणकाच्या सभोवताली नेट केबल जोडतो कोणता पोर्ट?",
        options: ["HDMI", "Ethernet (RJ45)", "VGA", "USB-C"],
        correct: 1,
      },
    ],
    related: ["computer-hardware", "computer-io-devices", "computer-networking"],
    next: "computer-memory",
    prev: "computer-io-devices",
  },
  {
    slug: "computer-memory",
    categoryId: "computer",
    title: "Computer Memory",
    marathiTitle: "मेमरीचे प्रकार — RAM, ROM, storage",
    level: "beginner",
    minutes: 16,
    summary: "RAM, ROM, cache, virtual memory, storage devices आणि units — माहिती कुठे व कशी साठते.",
    sections: [
      {
        title: "1. मेमरी म्हणजे काय — श्रेणीबद्ध विचार",
        content:
          "मेमरी (Memory) म्हणजे संगणकातील माहिती ठेवण्याची जागा — पण एकच जागा नाही, तर श्रेणी (hierarchy):\n\n• सर्वात जवळ/जलद — CPU कॅशे (KB-MB)\n• नंतर — RAM (GB)\n• मग — SSD/HDD (स्टोरेज, GB-TB)\n\nनियम: जितकी जलद मेमरी, तितकी महाग व कमी जागा.\nम्हणूनच संगणक सर्वत्र RAM ठेवतो तरीही स्टोरेज अधिक — वेग व खर्च यांची तोल.\n\nआणखी एक महत्त्वाचा फरक:\n• Prime (main) मेमरी — CPU थेट वाचतो (रेजिस्टर, कॅश, RAM)\n• Secondary स्टोरेज — फाइल्स कायम (SSD/HDD, pen drive)\n\nहे आकलन पुढील प्रत्येक 'वेगवान/मंद' समस्येत लागेल.",
      },
      {
        title: "2. RAM — तात्पुरती काम-मेज (सखोल)",
        content:
          "RAM (Random Access Memory) — चालू कामाची तात्पुरती जागा; संगणक काम करत असताना apps व त्यांचा डेटा इथेच लोड होतो.\n\nकार्यरत तत्त्व:\n• तुम्ही अॅप उघडता → ते HDD पासून RAM मध्ये कॉपी होते → CPU RAM मधून वाचून काम करतो.\n• RAM ही SSD/HDD पेक्षा लक्षावधीपट जलद असते — म्हणून तिथून काम.\n• वीज बंद झाली की RAM रिकामी — 'विसरली'.\n\nप्रकार:\n• DDR4 / DDR5 — सध्या RAM च्या पिढ्या; system एकच प्रकार सपोर्ट करतो.\n• Dual channel — दोन समान RAM स्टिक्स जोडल्यास दुहेरी बँडविद्थ — लहान पण लक्षणीय फायदा.\n\nकिती RAM योग्य?\n• 8 GB — बेसिक सुरुवात\n• 16 GB — coding, tabs, editing आरामात\n• 32 GB+ — heavy video/गेमिंग\n\nजर RAM संपली (usage >90%) — संगणक हळू; कारण पुढचा उपाय virtual memory.",
      },
      {
        title: "3. ROM आणि फर्मवेअर — कायम सूचना (सखोल)",
        content:
          "ROM (Read Only Memory) — लिहिता येत नाही/कठीण; फक्त वाचता येते; वीज बंद झाली तरी रिकामी होत नाही.\n\nउपयोग:\n• BIOS / UEFI — संगणक सुरू करण्याचे पहिले software.\n  Power चालू झाल्यावर CPU ला BIOS ठरवतो — सर्व हार्डवेअर तपासून, SSD/HDD वरील OS शोधून लोड करतो.\n• Firmware — उपकरणांमध्ये (router, प्रिंटर, smartwatch) साठलेले छोटे software — निर्मात्याने दिलेले 'इंबेडेड' सूचनांचे संच.\n\nआजकाल BIOS ऐवजी UEFI विरहित 'आधुनिक' केले जाते — फास्ट boot व सुरक्षा (Secure Boot) सोबत.\n\nटीप: Firmware व ROM सारखे दिसतात पण firmware बऱ्याचदा updatable असते (फ्लॅश) — त्यामुळेच router/printer ला update करतात.",
      },
      {
        title: "4. कॅशे — CPUची जेब मेमरी (सखोल)",
        content:
          "कॅशे (Cache) — CPU च्या अगदी जवळ बसलेली अत्यंत लहान व सर्वात जलद मेमरी.\n\nलेयर:\n• L1 — सर्वात जवळ व जलद; काही KB\n• L2 — मध्यम; काही MB\n• L3 — सर्वात मोठी (मध्य शेअर); MB-मार्जा\n\nतत्त्व:\nCPU वारंवार वापरलेला डेटा कॅश मध्ये ठेवतो — नंतरच्या गणनेत RAM/डिस्कला जाण्याची गरजच उरत नाही.\nम्हणूनच 'वारंवार वापरलेला डेटा जवळ' — ही संकल्पना प्रोग्रामिंग (loop caching) ते डेटाबेस (buffer pool) सर्वत्र लागू होते.\n\nकॅशे व RAM मध्ये फरक:\nकॅशे CPU ने बनवून वापरला; RAM OS वापरतो व तुम्ही upgrade करता.",
      },
      {
        title: "5. व्हर्च्युअल मेमरी / Swap — RAM ला मदत (सखोल)",
        content:
          "जेव्हा RAM भरते — अनेक apps एकदम उघडली — तेव्हा OS 'व्हर्च्युअल मेमरी' वापरतो:\n\nकसे काम करते:\n• कमी वापराचा डेटा हार्ड डिस्कच्या एका भागात (page file/swap) हलवला जातो.\n• जेव्हा लागतो तेव्हा परत RAM मध्ये आणला जातो.\n\nWindows — pagefile.sys; Linux/macOS — swap partition / swapfile.\nटर्मक्सवर प्रत्यक्ष बघा: `free -h` — तळात swap रक्कम.\n\nतोटा:\nSwap हि डिस्कवर असते — म्हणजे हळू. जेव्हा OS सतत swap करतो (thrashing) — संगणक गोठतो.\nउपाय: अतिरिक्त RAM जोडा किंवा कमी apps उघडा.\n\nम्हणूनच 'RAM वाढवली की वेग सुटतो' — खरं तर swap थांबतो.",
      },
      {
        title: "6. स्टोरेज डिव्हाइसेस — HDD, SSD, NVMe (सखोल)",
        content:
          "सेकंडरी स्टोरेज — तुमच्या फाईल्स कायम ठेवणारी (बंद केल्यावरही).\n\n• HDD — फिरणाऱ्या प्लेटवर magnetic; मोठा (1-8 TB), स्वस्त; पण हळू व ऐकू येणारा आवाज.\n• SSD (SATA) — चिप-आधारित; ~500 MB/s; बूट/अॅप्स जलद.\n• NVMe SSD — PCIe वर; 2000-6000+ MB/s; आज लॅपटॉप मानक.\n\nफरक (साखळी):\nHDD: read ~100-200 MB/s\nSATA SSD: ~500 MB/s\nNVMe SSD: ~2000-6000+ MB/s\n\nप्रॅक्टिकल:\n• OS + अॅप्स = SSD (जलद प्रतिसाद)\n• फोटो/संग्रह = HDD (स्वस्त मोठा)\nयोग्य स्टोरेज निवड हा 'संगणक जलद' चा सर्वात मोठा एक upgrade आहे.",
      },
      {
        title: "7. युनिट्स — bit, byte, KB... TB (सखोल)",
        content:
          "माहितीचे मोजमाप:\n\n• bit — सर्वात लहान (0/1)\n• byte — 8 bits (एक अक्षर)\n• KB/MB/GB/TB — प्रत्येक पुढील 1024 पट\n\nआकडे:\n1 KB = 1024 B\n1 MB = 1024 KB\n1 GB = 1024 MB\n1 TB = 1024 GB\n\nवास्तविक आकार:\n• photo ≈ 2-5 MB\n• song ≈ 3-8 MB\n• movie (HD) ≈ 1-2 GB\n• game ≈ 50-100 GB\n\nनिर्माते '1 GB = 1000 MB' (decimal) दाखवतात; आपण '1024' (binary) गणतो — म्हणून 16 GB pen drive वर ~14.6 GB साठेल असे दिसते. हा फरक सामान्य पाठीमागे आहे.\n\nहे अंदाज pen drive/HDD निवडताना अत्यंत उपयोगी.",
        code: `1 bit   = 0 किंवा 1
8 bits  = 1 byte  (एक अक्षर)
1024 B  = 1 KB     (एक छोटा मजकूर)
1024 KB = 1 MB     (एक photo)
1024 MB = 1 GB     (एक movie)
1024 GB = 1 TB     (लाखो photos)
निर्मात्यांचा 1 GB = 1000 MB (decimal)`,
        codeLanguage: "text",
      },
      {
        title: "8. 32-bit वि 64-bit — RAM मर्यादा (सखोल)",
        content:
          "32-bit vs 64-bit — OS/प्रोसेसरची 'विचारण्याची' क्षमता.\n\n32-bit — एका वेळी 2^32 = ~4 अब्ज address; म्हणून थेट ~4 GB RAM वर मर्यादा.\n64-bit — 2^64 — इतकी प्रचंड जागा — व्यावहारिकरित्या मर्यादा संबंधित नाही.\n\nप्रॅक्टिकल:\n• नवीन संगणक/OS — 64-bit (Windows मध्ये Settings→System→About)\n• 32-bit OS वर 8 GB RAM बसवली तरी वापरता येत नाही (~3.5 GB)\n• 64-bit OS वर जुन्या 32-bit अॅप्ससाठी compatibility layer\n\nहा मुद्दा memory unit च्या topic सोबत जोडून बघितल्यास RAM upgrades च्या गणिताची बरोबरी होईल.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "मेमरीबाबत सर्वात जास्त गोंधळ — या चुका दूर करा:\n\n• गैरसमज १: 'RAM = storage.' — नाही; RAM temporary, storage permanent.\n\n• गैरसमज २: 'अजून RAM === जास्त जलद.' — जोपर्यंत current RAM संपलेली नाही, तोपर्यंत फायदा नाही; SSD/sheṇic upgrade अधिक प्रभावी.\n\n• गैरसमज ३: '4K/8K चित्राला जास्त RAM लागतो.' — चित्र GPU करतो; RAM गरज अॅपच्या ठिकाणी.\n\n• गैरसमज ४: 'ROM हटवता येतं.' — ROM enterprise; update फक्त firmware च्या रूपात.\n\n• गैरसमज ५: 'MB आणि Mb सारखे.' — MB = megabyte (डेटा), Mb = megabit (वेग); 8 खर्च भिन्न.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा:\n\n१) Windows: Task Manager → Performance → Memory — RAM usage % नोंदवा.\n२) Linux/Termux: `free -h`, `cat /proc/meminfo`, `df -h` — RAM+swap व स्टोरेज दोन्ही बघा.\n३) तुमच्या pen drive वर 'capacity' जागी actual free जागा पहा — 16GB/14.6GB फरक बघा.\n\nसारांश:\n• मेमरी श्रेणी — कॅश → RAM → स्टोरेज (जलद→हळू).\n• RAM = तात्पुरती; ROM = कायम सूचना; cache = जेब.\n• Units — bit→byte→KB→MB→GB→TB (1024 पट).\n• 'RAM वाढवल्यावर वेग सुटतो' — खरे कारण swap थांबतं.\n\nपुढील tutorial (computer-os-basics) — या RAM/ROM/स्टोरेजला कसे व्यवस्थापित करतो ते OS च्या डोळ्यातून.",
      },
    ],
    quiz: [
      {
        question: "वीज बंद झाल्यावर कोणती मेमरी रिकामी होते?",
        options: ["ROM", "RAM", "HDD", "SSD"],
        correct: 1,
      },
      {
        question: "BIOS कोणत्या मेमरीत असतो?",
        options: ["RAM", "ROM", "cache", "virtual"],
        correct: 1,
      },
      {
        question: "साधारण एका HD movie चा आकार किती?",
        options: ["काही KB", "काही MB", "साधारण 1-2 GB", "1 TB"],
        correct: 2,
      },
    ],
    related: ["computer-hardware", "computer-os-basics", "computer-ports"],
    next: "computer-os-basics",
    prev: "computer-ports",
  },
  {
    slug: "computer-os-basics",
    categoryId: "computer",
    title: "Operating System Basics",
    marathiTitle: "ऑपरेटिंग सिस्टीम — संगणकाचा मेंदू-सॉफ्टवेअर",
    level: "beginner",
    minutes: 17,
    summary: "Windows, Linux, macOS — संगणक चालवणारा मुख्य सॉफ्टवेअर.",
    sections: [
      {
        title: "1. ऑपरेटिंग सिस्टीम म्हणजे काय",
        content:
          "OS (Operating System) = hardware आणि तुमच्यातला सेतू.\nमस्ती तर सखोल झालो तर — OS प्रत्यक्षात ही कामे करतो:\n• फाईल सिस्टम व्यवस्थापन (files कुठे आणि कसे साठवायचे)\n• प्रक्रिया/मेमरी व्यवस्थापन (जे apps चालतात त्यांचा RAM/CPU वाटप)\n• ड्रायव्हर्स (वेगळ्या केबल्स/मॉनिटर्सशी बोलणे)\n• सुरक्षा (password, permissions)\nतुम्ही कधी बघत नाही ते आत गेलेले काम हेच OS करतो — त्यामुळे OS ही व्यक्तिने 'हरामी' नाही;\nसंगणकाच्या सर्व यंत्रणांच्या 'मुख्य मेंदू'सारखा आहे.",
      },
      {
        title: "2. GUI वि CLI — दोन भाषा",
        content:
          "GUI (Graphical User Interface) — माउस/टचने आयकॉनांवर क्लिक (Windows, macOS, Android). सोपा, नव्यांसाठी उत्तम.\nCLI (Command Line Interface) — टर्मिनलमध्ये `ls`, `cd`, `mkdir` आकड्यांनी काम — लिनक्स/टर्मक्सचा हा नक्कल केलेला मार्ग.\nसंगणकी ऑफिसमध्ये प्रोग्रामर/सर्व्हर-प्रशासक CLI वापरतात कारण ती जलद आणि पुनःप्रयोज्य असते (स्क्रिप्टमधे).\nहा tutorial शिकताना टर्मक्स चालवा: `pwd`, `ls`, `cd` — लिनक्सची पहिली पायरी इथेच सुरू होते.",
      },
      {
        title: "3. लोकप्रिय OS ची तुलना",
        content:
          "• Windows — घर-ऑफिस-गेमिंग सर्वात सामान्य; apps/support भरपूर.\n• Linux — मोफत, open-source; सर्व्हर व डेव्हलपर्स पसंत करतात. Ubuntu/Mint/Fedora ला वाढवलेले प्रकार.\n• macOS — Apple चा, सुरळीत अनुभव, फक्त Mac आवरणांवर चालतो.\n• Android — Linux चाच वंशज; फोनवर सर्वात सामान्य.\nआजचा मोबाईल हा देखील एक full OS चालवणारा खिशातला संगणकच आहे — म्हणून concept जुना नाही.",
      },
      {
        title: "4. बूटिंग आणि छोटा सराव",
        content:
          "बूट = संगणकाची 'उठसूठ': power → BIOS/UEFI (hardware तपासणी) → OS लोड (startup) → desktop.\nआजचा सराव:\n1) Windows मध्ये 'shutdown /f /r' (नाही, तर) Control Panel → अद्ययावत — नाही; टर्मक्सवर `uname -a` आणि `whoami` चालवा — OS व user नाव दिसेल.\n2) टास्क मॅनेजर उघडून जेवढे वेळा काम करतो तितके OS च्या 'Startup apps' ला बघा.\nही एक तोड नाही — ही संगणक समजण्याची गुरुकिल्ली आहे.",
        code: `Power ON
  ↓
BIOS/UEFI — hardware तपासणी
  ↓
OS लोड होतो (startup files)
  ↓
Desktop/Login screen
  ↓
तुम्ही काम सुरू!`,
        codeLanguage: "text",
      },
    ],
    quiz: [
      {
        question: "OS म्हणजे काय?",
        options: ["hardware भाग", "सर्व चालवणारा सॉफ्टवेअर", "game", "network"],
        correct: 1,
      },
      {
        question: "बहुतेक स्मार्टफोनवर कोणता OS?",
        options: ["Windows", "macOS", "Android", "Kali"],
        correct: 2,
      },
      {
        question: "टर्मिनलमध्ये `ls` म्हणजे काय करतो?",
        options: ["फाईल्सची यादी", "फाईल delete", "internet", "OS बंद"],
        correct: 0,
      },
    ],
    related: ["computer-software", "computer-file-system", "linux-basics"],
    next: "computer-file-system",
    prev: "computer-memory",
  },
  {
    slug: "computer-file-system",
    categoryId: "computer",
    title: "Files & Folders",
    marathiTitle: "फाईल, फोल्डर, extensions, paths",
    level: "beginner",
    minutes: 15,
    summary: "डेटा व्यवस्थित ठेवण्याची कला — फाईल्स, फोल्डर्स, paths.",
    sections: [
      {
        title: "1. फाईल आणि फोल्डर",
        content:
          "फाईल (File) = डेटाचा एक तुकडा — photo, document, video, software.\nफोल्डर (Folder / निर्देशिका) = फाईल्सचा समूह — 'आलमारी'चे डबे.\nफोल्डर आत फोल्डर असू शकतो (nested) — याला 'tree' म्हणतात, कारण आकृती झाडासारखी दिसते.\nव्यवस्थेचे सुवर्णनियम:\n• नाव साफ व अर्थपूर्ण ठेवा — `report.docx` ऐवजी `गणित_अहवाल_2026.docx`\n• कामानुसार फोल्डर बनवा: एक मुख्य फोल्डर (projects) आत शालेय/कॉलेज/आवडी\n• दोन ठिकाणी समान नाव असलेल्या फाईल्स गोंधळ घालतात — भिन्न नावे द्या",
      },
      {
        title: "2. फाईल एक्सटेंशन",
        content:
          "Extension = नावाचा शेवटचा भाग (.jpg, .pdf, .txt) — OS ठरवतो 'कोणत्या app ने उघडायचं'.\nमहत्त्वाचे उदाहरण:\n• .docx / .xlsx / .pptx — Word / Excel / PowerPoint\n• .png / .jpg / .gif — चित्रे (png = पारदर्शकता, jpg = लहान आकार)\n• .mp4 / .mp3 — व्हिडिओ / ऑडिओ\n• .zip / .rar — कंप्रेस केलेले फोल्डर (फाईल साइज लहान)\n• .exe / .apk — प्रोग्राम / अँड्रॉइड ऍप\nWindows मध्ये extension तपासण्यासाठी विंडोज फाईल एक्सप्लोरर → View → File name extensions चालू करा — संशयास्पद दुहेरी extensions (जसे `photo.jpg.exe`) पकडण्यासाठी ही सवय महत्त्वाची.",
      },
      {
        title: "3. फाईल पाथ (Path)",
        content:
          "Path = फाईलपर्यंत पोहोचण्याचा संपूर्ण रस्ता.\nWindows: `C:\\Users\\सायली\\Documents\\resume.pdf`\nLinux/macOS: `/home/सायली/Documents/resume.pdf`\nAbsolute path — मूळापासून सुरू होतं (वरून खाली). Relative path — सध्याच्या ठिकाणाहून.\nटर्मक्समध्ये `pwd` तुम्हाला सध्याचा path दाखवेल, `cd Documents` नंतर `pwd` बदलतील — हे प्रत्यक्षात पाठलाग (path = मार्ग) कसे काम करतं ते दिसेल.",
        code: `C:\\
├── Users\\
│   └── सायली\\
│       ├── Documents\\
│       │   ├── resume.pdf
│       │   └── notes.txt
│       └── Pictures\\
│           └── photo.jpg`,
        codeLanguage: "text",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "1) टर्मक्सवर `mkdir -p ~/practice/Documents` बनवा, नंतर `cd ~/practice/Documents` → `touch notes.txt` → `ls`.\n2) Windows मध्ये एक फोल्डर tree बनवा: Documents > शाळा > (गणित, विज्ञान) आणि त्यात एक फाईल ठेवा.\n3) एक फाईल copy करून extension बदला आणि पहा ती न उघडण्याचा मज़ा — मग काय झालं ते अभ्यासाच्या नोटमध्ये लिहा.",
      },
    ],
    quiz: [
      {
        question: "खालीलपैकी कोणती फाईल फोटो असू शकते?",
        options: ["notes.txt", "photo.jpg", "movie.mp4", "report.pdf"],
        correct: 1,
      },
      {
        question: "फोल्डरचे मुख्य काम काय?",
        options: ["फाईल्स व्यवस्थित ठेवणे", "डेटा हटवणे", "इंटरनेट देणे", "गेम खेळणे"],
        correct: 0,
      },
      {
        question: "Windows मधील absolute path चे मुळ काय असतं?",
        options: ["C:\\", "Documents", "सायली", ".txt"],
        correct: 0,
      },
    ],
    related: ["computer-os-basics", "computer-shortcuts", "computer-security"],
    next: "computer-shortcuts",
    prev: "computer-os-basics",
  },
  {
    slug: "computer-shortcuts",
    categoryId: "computer",
    title: "Keyboard Shortcuts",
    marathiTitle: "कीबोर्ड शॉर्टकट्स — वेगाच्या सवयी",
    level: "beginner",
    minutes: 12,
    summary: "Ctrl+C, Ctrl+V, Alt+Tab — संगणकाचा वेग वाढवणाऱ्या सवयींचा सखोल अभ्यास.",
    sections: [
      {
        title: "1. टॉप ५ शॉर्टकट्स",
        content:
          "Ctrl+C (copy) · Ctrl+V (paste) · Ctrl+X (cut) · Ctrl+Z (undo) · Ctrl+A (सगळे निवडा).\nही ५ सवयी शिकल्यावर दैनंदिन काम दुप्पट जलद होते — ही केवळ मजा नाही, वास्तविक परिणाम.\nलक्षात घ्या:\n• Ctrl+Z सलग अनेकवेळा दाबल्यास तब्बल changes मागे येतात (जागतिक undo) — चुकीच्या गळतीत मदत.\n• Ctrl+Y (redo) — undo परत 'पुढे' करणे.\n• '<Ctrl' दाबताना 'C' आणि 'V' मध्ये गडबड होते तर काय होतं ते कधीच पहा — practice करून सवय बनवा, समजून नाही.",
        code: `Ctrl + C → copy
Ctrl + V → paste
Ctrl + X → cut
Ctrl + Z → undo (परत मागे)
Ctrl + Y → redo
Ctrl + A → सगळे निवडा`,
        codeLanguage: "text",
      },
      {
        title: "2. फाईल आणि विंडो",
        content:
          "Alt+Tab = उघडलेल्या windows मधे बदल (Alt टेकून ठेऊन वारंवार Tab) — दोन apps मध्ये फिरण्यासाठी.\nCtrl+Shift+Esc = टास्क मॅनेजर लगेच (मंद संगणकाची समस्येसाठी उपयोगी).\nF2 = फाईल rename — माउसच्या double-click ची गरज नाही.\nCtrl+S = save — ही सवय नसल्याने अनेकांची कामे गेली आहेत!\nAlt+F4 = सध्याची app/window बंद (जागरूक रहा — Ctrl+S नंतरच).\nCtrl+W = ब्राउझर tab बंद.",
      },
      {
        title: "3. ब्राउझर आणि जागतिक टिप्स",
        content:
          "Ctrl+T = नवीन tab · Ctrl+W = हा tab बंद · Ctrl+Shift+T = चुकून बंद केलेला tab परत आणा.\nCtrl+F = पेजमध्ये शब्द शोधा (लांब दस्तऐवजांसाठी सर्वात उपयुक्त).\nCtrl+L = address bar वर जा — माउस न लावता URL टाइप करा.\nWindows key + D = डेस्कटॉप लगेच · Windows key + E = फाईल एक्सप्लोरर.\nचेतावणी: एकाच वेळी २० tabs सुरू ठेवण्याऐवजी bookmarks वापरा — प्रत्येक tab ही (रॅम) मेमरी खातं.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "आजपासून ३ दिवस: प्रत्येक दिवसाला ३ नवे शॉर्टकट आणीबाणीनुसार वापरा.\nदिवस १: Ctrl+C/V/X/Z · दिवस २: Ctrl+F व Ctrl+L · दिवस ३: Alt+Tab व Ctrl+Shift+T.\nआणि (विशेष): तुमच्या ब्राउझरचे Ctrl+PageUp/PageDown = tabs मध्ये फिरणे — हे अनायासे अंगवळणी पडलं पाहिजे.",
      },
    ],
    quiz: [
      {
        question: "कॉपी करण्यासाठी कोणता?",
        options: ["Ctrl+V", "Ctrl+C", "Ctrl+Z", "F2"],
        correct: 1,
      },
      {
        question: "उघडलेल्या windows बदलण्यासाठी कोणता?",
        options: ["Alt+Tab", "Ctrl+W", "Alt+F4", "F1"],
        correct: 0,
      },
      {
        question: "चुकून बंद केलेला ब्राउझर tab परत कसा आणायचा?",
        options: ["Ctrl+Shift+T", "Ctrl+X", "Alt+F2", "F5"],
        correct: 0,
      },
    ],
    related: ["computer-file-system", "computer-os-basics", "linux-basics"],
    next: "computer-networking",
    prev: "computer-file-system",
  },
  {
    slug: "computer-networking",
    categoryId: "computer",
    title: "Networking Basics",
    marathiTitle: "नेटवर्किंग मूलभूत — संगणक कसे जोडले जातात",
    level: "beginner",
    minutes: 18,
    summary: "LAN, WAN, IP, router, WiFi, DNS — इंटरनेट कसे काम करते.",
    sections: [
      {
        title: "1. नेटवर्क म्हणजे काय",
        content:
          "नेटवर्क = दोन किंवा जास्त संगणक एकत्र जोडलेले, माहितीची देवाण-घेवाण करणारे.\n• LAN (Local Area Network) — एका ठिकाणी (घर/शाळा/ऑफिस): फाईल शेअर, प्रिंटर शेअर.\n• WAN (Wide Area Network) — मोठ्या भौगोलिक क्षेत्रात (शहर/देश) — अनेक LAN जोडून बनते.\nइंटरनेट = जगातील सर्वात मोठा WAN — लाखो LAN एकत्रित.\nज्या घरात एकच WiFi राउटर — तो एक लहान LAN. सगळे जग एकत्र — तो WAN.",
      },
      {
        title: "2. IP, MAC, राउटर आणि DNS",
        content:
          "IP address = तुमच्या उपकरणाचा 'पत्ता' — इंटरनेटवर प्रत्येकाला वेगळा IP असतो (IPv4: 192.168.1.1 सारखा).\nMAC address = उपकरणातील कायमचा ओळखपत्र (क्रिएटर देतो) — लहान नेटवर्कमध्ये हाच वापरतात.\nRouter = एक इंटरनेट कनेक्शन अनेक उपकरणांमध्ये वाटते (सामान्यतः IP 192.168.1.1 असतो) + NAT द्वारे सुरक्षित.\nDNS = इंटरनेटचा 'फोनबुक' — `google.com` नावाला योग्य IP ते सांगते; DNS खराब झाला तर website नाही उघडत, पण इंटरनेट चालू असतं.\nWiFi = तारा नसलेली जोडणी. Modem → Router → तुमचे devices.",
      },
      {
        title: "3. वायरलेस सुरक्षा आणि पॅकेट्स",
        content:
          "WiFi मध्ये नेटवर्क नाव (SSID) आणि password असतो — शेजारचे लोक शेअर करत नाहीत तर सुरक्षा घटते.\nआजकाल WPA2/WPA3 सुरक्षा मानक आहे — खूप जुने WEP टाळा.\nडेटा लहान तुकड्यांत (packets) जातो — कोणत्याही टप्प्यावर पॅकेट हरवला तर पुन्हा पाठविला जातो.\n'nslookup google.com' किंवा टर्मक्सवर `ping -c 4 google.com` चालवा — इंटरनेट चालू आहे का ते त्वरित कळतं.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "1) टर्मक्स: `ping -c 4 google.com` — पहिले ४ उत्तरे मिळतील तर इंटरनेट ठीक; `timeout हा post` मध्ये जाऊ नये म्हणून Ctrl+C.\n2) Windows: `ipconfig` (किंवा टर्मक्स `ifconfig`) — तुमचा IP, MAC पहा.\n3) राउटरच्या मागे उघडलेला नंबर/कागद पाहून SSID + password लिहा — हा विषय पुढे security मध्ये महत्त्वाचा.",
      },
    ],
    quiz: [
      {
        question: "तारेखाली जोडणी (वायरलेस) कोणती?",
        options: ["Ethernet", "WiFi", "HDMI", "USB"],
        correct: 1,
      },
      {
        question: "घरातल्या लहान नेटवर्कला काय म्हणतात?",
        options: ["WAN", "LAN", "PAN", "MAN"],
        correct: 1,
      },
      {
        question: "`google.com` नावाला IP सांगणारा कोणता?",
        options: ["Router", "DNS", "Firewall", "Antivirus"],
        correct: 1,
      },
    ],
    related: ["computer-security", "computer-basics", "linux-basics"],
    next: "computer-security",
    prev: "computer-shortcuts",
  },
  {
    slug: "computer-security",
    categoryId: "computer",
    title: "Computer Security",
    marathiTitle: "संगणक सुरक्षा — सुरक्षित राहण्याच्या सवयी",
    level: "beginner",
    minutes: 16,
    summary: "मजबूत passwords, 2FA, antivirus, updates, phishing — संगणक सुरक्षित ठेवा.",
    sections: [
      {
        title: "1. पासवर्ड आणि दुहेरी पडताळणी (2FA)",
        content:
          "प्रत्येक अकाउंटला वेगळा पासवर्ड ठेवा — एक ठिकाणी leak झाला तरी इतर सुरक्षित राहतात.\nमजबूत पासवर्ड: 12+ अक्षरे, मोठे-लहान अक्षर, संख्या, special chars (#$@). शब्दकोषातला शब्द वापरू नका.\nवाक्प्रचार तत्व: 'MazaDog@2026Aamchi' सारखा आठवण्यायोग्य वाक्य = उत्तम सुरक्षा.\nअगदी worry कराल तर password manager (उदा. Bitwarden) वापरा — त्यात सर्व पासवर्ड एकाच ठिकाणी एन्क्रिप्ट केलेले.\nमहत्त्वाच्या अकाउंटवर 2FA चालू करा (OOP/SMS ऐवजी ॲप-आधारित TOTP किंवा सिक्युरिटी की) — password चोरीलाही दुसरी खात्री.",
      },
      {
        title: "2. Antivirus आणि अपडेट्स",
        content:
          "Antivirus = ओळखलेल्या धोक्यांना शोधून हटवतो — परंतु तो स्वतःहून सर्व काही सांगू शकत नाही.\nWindows मध्ये Windows Security मोफत व चांगली — तिसरे उत्पादन laptop पर्यायी नावं घेऊ नका (काही बनावट 'antivirus' स्वतःच virus असतात).\nOS, browser, apps नियमित update करा — update सोबत security patches मिळतात.\n'update चा alert आल्यावर लगेच करा' — ही प्रत्येक दिवसाला एक मिनिट खर्च करणारी सवय, संगणकला ठीक न ठेवण्याचा समस्या सोडवते.",
      },
      {
        title: "3. Phishing, ransomware आणि सवयी",
        content:
          "Phishing = बनावट ईमेल/साइट ने password किंवा OTP चोरणे.\nलक्षणे: 'तातडीचं', 'खातं बंद होईल', अनोळखी link, खराब व्याकरण.\nकोणतेही link/attachment उघडण्यापूर्वी असल्या पत्त्यावर माऊस फिरवा (कुठे नेतो ते दिसेल).\nRansomware = मालसेल; फाईल्स लॉक करून पैसे मागतो — बॅकअप असला तर हानी कमी.\nएकूण सवयी: सार्वजनिक WiFi वर login करू नका (अत्यंत सावधान), बँक/ईमेल वेबसाइट 'https://' व padlock चिन्ह तपासा.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "1) आपल्या तीन महत्त्वाच्या अकाउंट्समध्ये 2FA चालू आहे का ते तपासा (Gmail/Facebook/Bank).\n2) वेबसाइटचा पत्ता चुकीचा होऊ देऊ नका — `faceb00k.com` सारखी चुकीची ठिकाणे ओळखा.\n3) पुढच्या अकाउंटवर नवीन मजबूत पासवर्ड ठेवा आणि त्याच्या notes मध्ये लिहा (पेपरवर ठेवणे हीही चांगली सवय).",
      },
    ],
    quiz: [
      {
        question: "खालीलपैकी कोणता मजबूत पासवर्ड?",
        options: ["123456", "password", "P@ssw0rd!2025", "user123"],
        correct: 2,
      },
      {
        question: "व्हायरस शोधण्यासाठी कोणता?",
        options: ["antivirus", "browser", "printer", "calculator"],
        correct: 0,
      },
      {
        question: "अनोळखी ईमेलमधील link वर क्लिक करण्यापूर्वी काय कराल?",
        options: ["लगेच क्लिक", "पत्त्यावर माऊस फिरवून पहा", "पुढे सगळ्यांना पाठवा", "काहीच नाही"],
        correct: 1,
      },
    ],
    related: ["cyber-password", "cyber-basics", "computer-networking"],
    next: "computer-troubleshooting",
    prev: "computer-networking",
  },
  {
    slug: "computer-troubleshooting",
    categoryId: "computer",
    title: "Computer Troubleshooting",
    marathiTitle: "सामान्य समस्या आणि उपाय",
    level: "intermediate",
    minutes: 20,
    summary: "मंद संगणक, freeze, sound/नेटवर्क बंद — घरबसल्या सखोल उपाय.",
    sections: [
      {
        title: "1. विचारांची पद्धत (Diagnostic Thinking)",
        content:
          "समस्येबद्दल पहिले प्रश्न विचारा:\n• ही समस्या कधी सुरू झाली? नेमकं काय बदललं (नवीन app, update, हार्डवेअर)?\n• एकटं दोनच ठिकाणी परिणाम होतो का (फक्त एखाद्या app मध्ये)?\n• 'हार्ड रीबूट' आधी ट्राय करा — संगणकात ८०% लहान समस्या रिबूटने सुटतात (RAM च्या मध्यम स्थितीतून बाहेर).\nहे 'What changed first?' या प्रश्नानेडीज करत रहा — वेळ वाचते व घाबराट कमी होते.",
      },
      {
        title: "2. मंद संगणक आणि Freeze",
        content:
          "मंद: Ctrl+Shift+Esc → Task Manager → Process टॅब → CPU/RAM नुसार सॉर्ट करा → जो सर्वात जास्त घेतो त्याला 'End task'.\n• Startup apps कमी करा (Task Manager → Startup) — जेवढी कमी, तेवढी बूट जलद.\n• डिस्क भरली असेल तर मोकळी जागा काढा (temp files हटवा, recycle bin रिकामी).\n• अजूनही मंद → RAM upgrade (८→१६GB) किंवा SSD ही सर्वात प्रभावी.\nफ्रीझ: Ctrl+Alt+Del → Task Manager → app 'End task'. पूर्ण लॉक तर पॉवर बटण १० सेकंद दाबून रीसेट (शेवटचा उपाय).\nसाध्यासोप्या गोष्टी: साठवत रहा (`Ctrl+S`), धुळीने पंखा बंद होणं = overheating → मंद/freeze.",
      },
      {
        title: "3. आवाज / इंटरनेट / नेट समस्या",
        content:
          "आवाज नाही:\n१) volume/mute (कीबोर्डची Mute की) तपासा २) हेडफोन/स्पीकर correct जॅकमध्ये? ३) Device Manager → Sound driver update ४) दुसरी app चा आवाज:\nइंटरनेट बंद/मंद:\n१) राउटर बंद-चालू (पॉवर ३० सेकंद) २) Ethernet vs WiFi फरक ३) `ping` चाचणी:\nटर्मक्स `ping -c 4 1.1.1.1` (आंतरराष्ट्रीय) vs `ping -c 4 google.com` (DNS).\nपहिले चालतं नाही = नेटवर्क समस्या; दुसरं चालत नाही पण पहिलं चालतं = DNS समस्या.\nसगळ्यात महत्त्वाचं: समस्या सोडवताना धीर — एक-एक पायरी तपासा.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "आता आजच्या तुमच्या संगणकासाठी 2 चाचण्या:\n१) `free -h` वरून RAM किती % वापरलीय ते बघा — 90%+ असल्यास कोणते app सुरू आहेत ते Task Manager मध्ये पहा.\n२) उत्पादन vendor चा दस्तऐवजी troubleshooting check करून safe mode कसा चालवायचा ते लिहा.\nज्या गोष्टी तुम्ही स्वतः करू शकत नाही (hardware) तेवढ्यासाठीच सेवा केंद्राला जा.",
      },
    ],
    quiz: [
      {
        question: "App 'Not responding' झालं तर पहिले काय?",
        options: ["End task", "फॉर्मेट", "नवीन संगणक", "pc बंद कायम"],
        correct: 0,
      },
      {
        question: "घरचा इंटरनेट मंद असेल तर पहिला उपाय?",
        options: ["router restart", "नवीन router", "केबल ऑपरेटरकडे", "मोबाईल द्या"],
        correct: 0,
      },
      {
        question: "`ping google.com` चालत नाही पण `ping 1.1.1.1` चालतं — म्हणजे काय?",
        options: ["DNS समस्या", "नेटवर्क समस्या", "RAM समस्या", "काहीच नाही"],
        correct: 0,
      },
    ],
    related: ["computer-hardware", "computer-os-basics", "computer-security"],
    next: "computer-cloud",
    prev: "computer-security",
  },
  {
    slug: "computer-cloud",
    categoryId: "computer",
    title: "Cloud Computing Basics",
    marathiTitle: "क्लाउड कॉम्प्युटिंग — data इंटरनेटवर",
    level: "beginner",
    minutes: 15,
    summary: "Google Drive, backup, SaaS — डेटा दुसऱ्याच्या सर्व्हरवर साठवणे.",
    sections: [
      {
        title: "1. क्लाउड म्हणजे काय",
        content:
          "क्लाउड = तुमचा डेटा/सेवा दुसऱ्याच्या डेटा-सेंटरमध्ये (इंटरनेटवर) — तुमच्या device वर नाही.\nउदा. Google Drive, OneDrive, iCloud, Dropbox, Gmail, Spotify.\nफायदे:\n• कुठूनही login → डेटा हजर (फोन, लॅपटॉप, शाळा).\n• उपकरण गमावले/खराब झाले तरी डेटा सुरक्षित.\n• शेअरिंग अगदी सोपं — लिंक पाठवा.\nम्हणूनच 'माझे फोटो फोनमध्ये' हा विचार सोडा — 'माझे फोटो क्लाउडमध्ये' त्या अधिक सुरक्षित आहेत.",
      },
      {
        title: "2. सिंक वि बॅकअप — विचार",
        content:
          "सिंक (Sync) इलेक्ट्रॉनिक फाइल डिव्हाइसवर बदलली की क्लाउडवरही बदलते (आणि उलट) — म्हणजे दोन्ही सारखेच.\nबॅकअप (Backup) = एका क्षणाची प्रत — नंतर गोंधळ झाल्यावर त्या क्षणापर्यंतचे पुनर्स्थापन.\nचांगला नियम: महत्त्वाच्या फाइल्स ३ ठिकाणी — मूळ + local backup (pen drive) + cloud (rule of 3-2-1 बॅकअप).\nड्राइव्हसारख्या cloud वर फाइल स्वतः अपडेट करा — बॅकअप ती असेल तर हीच फरक असतो.",
      },
      {
        title: "3. Cloud सेवांचे प्रकार",
        content:
          "• SaaS — वेब apps: Gmail, Google Docs, Office 365 — install नाही.\n• PaaS — developers साठी (अॅप्स बनवण्यासाठी hosting/DB).\n• IaaS — संपूर्ण व्हर्च्युअल सर्व्हर (create virtual PC इंटरनेटवर).\nमोफत स्थान: Drive 15GB, OneDrive 5GB, iCloud 5GB — भरल्यावर शुल्क.\nसुरक्षा: डेटा एन्क्रिप्टेड राहतो (वाहतूक + सेवेत) — तरीही सोबत स्रोत उपलब्ध असल्यास 2FA चालू ठेवणे महत्त्वाचं.\nऑफलाइन उपलब्धता: Drive ऍपमधून विशिष्ट फाइल्स 'Available offline' करा.",
        code: `तुमचा device
    ↓
Google Drive / OneDrive / iCloud
    ↓
कोणत्याही device वर login
    ↓
तुमचे documents, photos, videos — हजर!`,
        codeLanguage: "text",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "१) एक महत्त्वाची फाईल (resume/अभ्यास) Google Drive वर upload करा आणि `Share` द्वारे लिंक कॉपी करा.\n२) Drive ऍपवर ती फाइल 'Available offline' करा.\n३) तुमच्या phone मधील auto-backup settings तपासा — फोटो backup ON आहे का? पुढचा विचार: cloud म्हणजे नवीन नाही, आजची प्रत्येक सेवा वापरतोय.",
      },
    ],
    quiz: [
      {
        question: "क्लाउडमध्ये data कुठे असतो?",
        options: ["तुमच्या संगणकात", "दुसऱ्याच्या सर्व्हरवर", "printer मध्ये", "फक्त फोनमध्ये"],
        correct: 1,
      },
      {
        question: "खालीलपैकी कोणती क्लाउड सेवा?",
        options: ["Google Drive", "Paint", "Calculator", "Notepad"],
        correct: 0,
      },
      {
        question: "डेटा गमावला तरी क्लाउडवर परत मिळवणे म्हणजे काय?",
        options: ["बॅकअप", "सिंक", "फॉर्मेट", "IMAP"],
        correct: 0,
      },
    ],
    related: ["computer-networking", "computer-file-system", "computer-security"],
    next: "computer-buying-guide",
    prev: "computer-troubleshooting",
  },
  {
    slug: "computer-buying-guide",
    categoryId: "computer",
    title: "Computer Buying Guide",
    marathiTitle: "संगणक खरेदी मार्गदर्शन",
    level: "beginner",
    minutes: 15,
    summary: "RAM, CPU, storage, laptop vs desktop — योग्य संगणक कसा निवडावा.",
    sections: [
      {
        title: "1. स्पेक्स कशी वाचावीत",
        content:
          "CPU — इंटेल: i3 (सोपं office/study), i5 (चांगला मध्यम — coding/editing), i7/i9 (गेमिंग/व्हिडिओ). AMD: Ryzen 3/5/7 असाच क्रम.\nकोर/थ्रेड — जितके जास्त, तितके एकाच वेळी जास्त काम; पर्यंत फ्रिक्वेन्सी (GHz) सोबत पाहा.\nRAM — 4GB टाळा; 8GB सुरुवात; 16GB आरामात (नवीन OS + tabs + apps).\nस्टोरेज — SSD अत्यंत जलद (जेव्हा OS SSD वर असतो तेव्हा संगणक उघडतो म्हणजे भान येतं); HDD मोठा व स्वस्त (अॅचिव्ह फाइल्ससाठी).\nस्क्रीन — IPS पॅनल (रंग दर्जा) वि TN (स्वस्त, भाडा); Full HD (1080p) लखमधला minimum.\nबॅटरी/वजन — चालता वापरासाठी 6-8 तास + हलकं वजन (1.5-1.8 kg).",
      },
      {
        title: "2. Laptop वि Desktop",
        content:
          "Laptop — सर्व काही एकत्र (screen+keyboard+battery), चलता; पण upgrade मर्यादित.\nDesktop — वेगळे monitor/keyboard, जास्त शक्तिशाली व समान किमतीत जास्त value; upgrade (RAM, SSD, ग्राफिक्स) अगदी सोपे; रिपेअर स्वस्त.\nनिर्णय:\n• विद्यार्थी/प्रवास/मीटिंग — laptop\n• घर/ऑफिस/गेमिंग/दीर्घकालीन — desktop (किंवा desktop + साधा laptop).\nएक वरचा नियम: ज्या कामासाठी खरेदी करत आहात ते काम भविष्यात ३-४ वर्षे टिकेल अशी specs निवडा.",
      },
      {
        title: "3. खरेदीच्या टिप्स",
        content:
          "• कामानुसार निवडा — 'सर्वात महाग' योग्य नाही; सर्वात योग्य ते.\n• Priority: SSD ≥ 256GB + RAM ≥ 8GB — या दोन्हीवर हरगिज कंजूसी करू नका.\n• रिफर्बिश/सेकंडहँड — चांगले असू शकते पण verification (बिल, सेवा-केंद्र, battery health) करा.\n• Warranty व सर्व्हिस सेंटर जवळचे असावे — विदेशी brand सोबत सावधान.\n• EMI/कर्ज घेताना व्याजाचे एकूण खर्च विचारात घ्या — विपणी किंमत फक्त.\n• प्रथम सोबत जागच्या दुकानात स्पर्श करून बघा, मग online चांगल्या किमतीवर विकत घ्या.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "१) आपल्या आदर्श वापरासाठी (study/coding/gaming) एक पहिली यादी लिहा:\n   CPU ____ · RAM ____ · SSD ____ · display ____ · budget ____\n२) वेगवेगळ्या २-३ लॅपटॉपची किंमत व स्पेक्स शेजारी-शेजारी लिहा व तुलना करा.\n३) निर्णयाची एक कारण यादीही लिहा — खरेदी करताना धीर ठेवा; आवेशात नव्हे.",
      },
    ],
    quiz: [
      {
        question: "कोणते storage जलद?",
        options: ["HDD", "SSD", "CD", "फ्लॉपी"],
        correct: 1,
      },
      {
        question: "आरामदायी general कामासाठी किती RAM पुरेशी?",
        options: ["2GB", "4GB", "8-16GB", "0GB"],
        correct: 2,
      },
      {
        question: "Laptop वि Desktop — Desktop चा मुख्य फायदा?",
        options: ["उत्तम battery", "जलद पुनर्निर्मिती", "चलता", "स्क्रीन स्वतःची"],
        correct: 1,
      },
    ],
    related: ["computer-hardware", "computer-memory", "computer-ports"],
    next: "computer-history",
    prev: "computer-cloud",
  },
  {
    slug: "computer-history",
    categoryId: "computer",
    title: "History of Computers",
    marathiTitle: "संगणकाचा इतिहास",
    level: "beginner",
    minutes: 14,
    summary: "अबॅकस ते स्मार्टफोन — संगणकाची वाटचाल पिढ्यांमधून.",
    sections: [
      {
        title: "1. सुरुवातीची यंत्रे",
        content:
          "अबॅकस (~3000 वर्षांपूर्वी) — मण्यांची चौकट; पहिली गणना साधने.\nब्लेझ पास्कलचे Pascalene (1642) व चार्ल्स बॅबेजचे Analytical Engine (1837) — यांत्रिक गणक; बॅबेजला 'संगणकाचे जनक' म्हणतात.\nENIAC (1945) — पहिला giant electronic संगणक — संपूर्ण खोली व्यापणारा, ~19,000 vacuum tubes, आवेश खूप.\nत्यानंतर transistor (1947) → Integrated Circuit (1958) → microprocessor (1971) — प्रत्येक टप्प्यावरsize लहान, वेग/शक्ती जास्त.",
      },
      {
        title: "2. पिढ्या (Generations)",
        content:
          "१ली — Vacuum Tubes: ENIAC (मोठे, गरम, खूप वीज).\n२री — Transistor: आरंभीचे mainframe, लहान व विश्वसनीय.\n३री — IC चिप: minicomputer — अनेक कामे एकत्र.\n४थी — Microprocessor: PC युग सुरू — आजचे संगणक.\n५वी — AI/स्मार्ट: smartphone, cloud, machine learning.\nटीप: या पिढ्या (generations) ही एका research/निर्मिती टप्प्यांची पारंपरिक वर्गवारी — सीमारेषा काहीश्या सैल असतात पण मोठा ट्रेंड हा आकृतीत बरोबर.",
        code: `पिढी   आधार            उदाहरण
1st    vacuum tube      ENIAC
2nd    transistor       आरंभीचे mainframe
3rd    IC chip          minicomputer
4th    microprocessor   PC, laptop
5th    AI/smart         smartphone, cloud`,
        codeLanguage: "text",
      },
      {
        title: "3. महत्त्वाचे वळण (Timeline)",
        content:
          "1945 ENIAC · 1947 transistor · 1958 IC · 1971 Intel 4004 (पहिला microprocessor)\n1976 Apple I · 1981 IBM PC (संगणक घराघरात) · 1985 Windows 1.0\n1991 World Wide Web (सर्वांना इंटरनेट) · 2007 iPhone (स्मार्टफोन युग सुरू)\nआज: cloud + AI — प्रत्येकाला खिशातला संगणक.\nमुळाचे ४ काम आजही तेच: input, processing, storage, output — बदलली फक्त साधने.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "१) एका कागदावर वरील timeline ५ संकल्पनांनी स्वतः लिहा (साल + घटना) — ही सवय इतिहास लक्षात राहण्यासाठी उत्तम.\n२) तुमच्या घरातले जुने उपकरण (जुना फोन/सीडी/फ्लॉपी) पाहून त्याच्या काळाचा अंदाज लावा — कोणत्या पिढीचा असेल?\n३) आता computer curriculum पूर्ण! पुढचा आरामशीर विषय: linux-basics किंवा ai-basics — हे इथून सुरू करा.",
      },
    ],
    quiz: [
      {
        question: "पहिला giant electronic संगणक कोणता?",
        options: ["ENIAC", "अबॅकस", "iPhone", "Arduino"],
        correct: 0,
      },
      {
        question: "चौथी पिढी कशावर आधारित?",
        options: ["vacuum tube", "transistor", "microprocessor", "cloud"],
        correct: 2,
      },
      {
        question: "कोणत्या घटनेने संगणक प्रत्येक घरात पोहोचवला?",
        options: ["Intel 4004", "IBM PC (1981)", "iPhone", "Windows 1.0"],
        correct: 1,
      },
    ],
    related: ["computer-basics", "computer-hardware", "computer-memory"],
    prev: "computer-buying-guide",
  },
];