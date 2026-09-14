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
          "कीबोर्ड (Keyboard) हे सर्वात महत्त्वाचे इनपुट device — मजकूर लिहिण्यासाठी.\n\nमुख्य भाग व ओळख:\n• Alphanumeric keys — अक्षरे व संख्या आणि # $ @ सारखी special characters.\n• Function keys (F1-F12) — shortcuts (F2 rename, F5 refresh).\n• Modifier keys — Ctrl, Alt, Shift — इतर keys ला विशेष अर्थ देतात (Ctrl+C = copy).\n• Nav keys — Home, End, PageUp/Down, arrows — फाईल/पेजमध्ये झटपट हालचाल.\n• Numpad — उजवीकडील मोजणीची की — फक्त संख्या टाकण्यात वेगवान.\n\nLayouts:\n• QWERTY — इंग्रजीसाठी सर्वत्र.\n• अभ्यासानुसार मराठी/देवनागरी layout (Inscript) — OS मध्ये भाषा add करून.\n• नवीन layout शिकण्यासाठी — typing trainer अवश्य वापरा; बोटांची ठिकाणे नकाशानुसार ठेवा.\n\nकाळजी:\nकीबोर्डवर खाणे-पिणे सांडलं तर keys अडकतात — उलटा ठेवून वाळवा, इलेक्ट्रॉनिक्स भिजवू नका.",
      },
      {
        title: "3. माउस आणि टचपॅड — हालचालीची साधने (सखोल)",
        content:
          "माउस (Mouse) / टचपॅड (Touchpad) — संगणकाच्या screen वरील वस्तू निवडणे, हलवणे, उघडणे.\n\nकामातील मुख्य gestures:\n• Left click — निवड / उघडणे.\n• Double click — फोल्डर/अॅप उघडणे.\n• Right click — संदर्भ मेनू (context menu).\n• Drag & drop — फाईल पुढे खेचणे.\n• Scroll wheel — वर/खाली जाणे.\n• Ctrl + scroll — zoom in/out.\n\nतंत्रज्ञान:\n• Optical/Laser mouse — खालचा प्रकाश डिव्हाइस हालचालीचा अंदाज घेतो; डेस्क/मॅट सपाट असणे गरजेचे.\n• Wireless/BT mouse — USB receiver किंवा ब्लूटूथने जोडला जातो; batteries लक्षात ठेवा.\n\nएर्गोनॉमिक्स:\n• माउस अगदी सहज हातात बसला पाहिजे; २-३ तास सलग वापर असल्यास wrist जोर न करणारे उपकरण.\n• टचपॅडवरील gestures (दोन बोटांनी स्क्रोल, तीन बोटांनी अॅप switch) शिकल्यास लॅपटॉप वापर सोपा होतो.",
      },
      {
        title: "4. मॉनिटर — निकाल दाखवणारा पडदा (सखोल)",
        content:
          "मॉनिटर (Monitor) हे मुख्य आउटपुट device — सर्व निकाल इथे दिसतात.\n\nमहत्त्वाची वैशिष्ट्ये:\n• Resolution — पिक्सेलची संख्या; 1920×1080 (Full HD) सध्याचा मानक; 4K = 3840×2160 (अधिक तीक्ष्ण, जास्त किंमत).\n• Refresh rate (Hz) — पडदा किती वेळा/सेकंद ताजा (सामान्य 60Hz; गेमिंग 144Hz+ गुळगुळीत).\n• Panel type — IPS (रंग अचूक, दृष्टी कोन चांगला), TN (स्वस्त पण रंग कमी).\n• साइज — 24-27 inch सामान्य; खूप मोठा पडदा जवळ बसल्यास डोळे थकतात (अंतर तोकडे ठेवा).\n\nडोळ्यांची काळजी (20-20-20 नियम):\nप्रत्येक २० मिनिटांनी २० सेकंद २० फूट दूर पहा — डोळ्यांचा ताण घटतो.",
      },
      {
        title: "5. प्रिंटर — कागदावरील निकाल (सखोल)",
        content:
          "प्रिंटर (Printer) आउटपुट device — digital मजकूर/चित्र कागदावर स्थिर ठेवतो.\n\nमुख्य प्रकार:\n• Inkjet — शाईचे सूक्ष्म थेंब कागदावर फेकतो; फोटोंचे रंग उत्तम; शाई पुढे महाग.\n• Laser — पावडर (toner) + उष्णता; मजकूर/छपाई दस्तऐवज जलद व पृष्ठामागे स्वस्त; रंगीत लेझर महाग.\n• Thermal — रसीद प्रिंटर (मॉल/दुकानात) — शाईशिवाय, उष्णतेने.\n• 3D printer — वास्तविक ठोस वस्तू थर-थर करून बनवणारा (औद्योगिक/डिझाइन).\n\nखरेदीचा विचार:\n• प्रिंट व्हॉल्यूम — महिन्याला किती पानं? (कमी → Inkjet; जास्त → Laser)\n• Cost per page — printer स्वस्त पण शाई नंतर रडायची वेळ येऊ नये ते पहा.\n• Wireless printing — मोबाईल/लॅपटॉपहून Wi-Fi प्रिंट सुलभ.",
      },
      {
        title: "6. स्कॅनर आणि वेबकॅम — जगाची नक्कल (सखोल)",
        content:
          "स्कॅनर (Scanner) — कागदावरील मजकूर/फोटो संगणकात डिजिटल करतो.\n• Flatbed — काचेवर कागद ठेवून वरची काच शांत राहते — दस्तऐवज/पुस्तक.\n• Sheetfed — पानं क्रमवार फेडून घेतो — जास्त पानं त्वरीत.\n• OCR (Optical Character Recognition) — स्कॅन केलेला प्रतिमेतला मजकूर (अक्षरे) searchable text बनवतो — PDF मधून मजकूर काढण्यासाठी उत्तम.\n\nवेबकॅम (Webcam) — इनपुट camera:\n• व्हिडिओ कॉल, photo, video recording.\n• Privacy: वापरात नसताना कॅमेरा झाकण्यासाठी shutter/स्टिकर वापरा — hacking किंवा spyware पासून सुरक्षेसाठी ही सर्वात सोपी सवय.\n\nमाइक्रोफोन (Mic) — आवाजाचे electrical संकेतांत रूपांतर; voice typing व voice assistants चा पाया.",
      },
      {
        title: "7. दोन्ही (I/O) उपकरणे — दुहेरी भूमिका",
        content:
          "काही उपकरणे इनपुट + आउटपुट दोन्ही काम करतात:\n\n• टचस्क्रीन — तुमचा स्पर्श (इनपुट) + चित्र (आउटपुट) एकाच पडद्यावर; मोबाईल/ATM/कियोस्क.\n• USB ड्राइव्ह — संगणकातून डेटा घेतो (लिहितो) आणि परत देतो (वाचतो) — storage device.\n• नेटवर्क कार्ड — Wi-Fi/Ethernet केबलवरून डेटा पाठवतो व घेतो — मोबाईल तर प्रत्येक क्षणी दोन्ही करतो.\n• प्रिंटर — छापतो (आउटपुट) आणि cartridge/कागद स्थिती सांगतो (इनपुट).\n\nही दुहेरी भूमिका ओळखणे म्हणजे device classification समजणे — पुढील सर्व tutorial चा आधार.",
      },
      {
        title: "8. उपकरणांची निवड व देखभाल (सखोल)",
        content:
          "चांगली खरेदी व देखभाल यामुळे उपकरणे बरेच दिवस काम करतात:\n\nनिवडीचे मुद्दे:\n• कामाच्या आधारे — बरीच मजकूर टाइप करतो? → चांगला कीबोर्ड; फोटो काढतो? → अचूक रंग मॉनिटर.\n• बजेट — वाढत्या किंमतीचे: सोपे ब्रँड → मध्यम → प्रिमियम.\n\nदेखभाल:\n• कीबोर्ड — पटकन पुसा, पेय दूर.\n• माउस — light खिडकी स्वच्छ.\n• मॉनिटर — मऊ कापडाने पुसा (chemical नको).\n• प्रिंटर — धूल झाकून ठेवा, नियमित test print.\n\nया छोट्या सवयी तुमच्या उपकरणांचे आयुष्य वाढवतात आणि खर्च कमी करतात.",
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
          "संगणकावरील इतर महत्त्वाचे ports:\n\nऑडिओ:\n• 3.5mm jack — हिरवा (आवाज बाहेर), गुलाबी (माईक आत), निळा (लाईन-इन).\n• USB headphone — USB वरच आवाज + माईक — वेगळ्या ऑडिओ कार्डची गरज नाही.\n• S/PDIF (ऑप्टिकल) — डिजिटल ऑडिओ (जुने अॅम्प/साउंडबार).\n\nमेमरी कार्ड:\n• SD/microSD slot — फोटोग्राफर/फोन डेटा.\n\nपॉवर:\n• Barrel jack — जुने लॅपटॉप चार्जिंग.\n• USB-C Power Delivery — नवीन केबल एकच.\n\nजर संगणकावर HDMI + USB + headphone असतील तर बहुतेक दैनंदिन कामे अन्य कोणत्याही ऍडॉप्टरशिवाय होऊ शकतात.",
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
          "मेमरी (Memory) म्हणजे संगणकातील माहिती ठेवण्याची जागा — पण एकच जागा नाही, तर श्रेणी (hierarchy):\n\n• सर्वात जवळ/जलद — CPU कॅशे (KB-MB)\n• नंतर — RAM (GB)\n• मग — SSD/HDD (स्टोरेज, GB-TB)\n\nनियम: जितकी जलद मेमरी, तितकी महाग व कमी जागा.\nम्हणूनच संगणक सर्वत्र RAM ठेवतो तरीही स्टोरेज अधिक — वेग व खर्च यांची तोल.\n\nआणखी एक महत्त्वाचा फरक:\n• Primary (main) मेमरी — CPU थेट वाचतो (रेजिस्टर, कॅश, RAM)\n• Secondary स्टोरेज — फाइल्स कायम (SSD/HDD, pen drive)\n\nहे आकलन पुढील प्रत्येक 'वेगवान/मंद' समस्येत लागेल.",
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
          "कॅशे (Cache) — CPU च्या अगदी जवळ बसलेली अत्यंत लहान व सर्वात जलद मेमरी.\n\nलेयर:\n• L1 — सर्वात जवळ व जलद; काही KB\n• L2 — मध्यम; काही MB\n• L3 — सर्वात मोठी (मध्य शेअर); MB मध्ये\n\nतत्त्व:\nCPU वारंवार वापरलेला डेटा कॅश मध्ये ठेवतो — नंतरच्या गणनेत RAM/डिस्कला जाण्याची गरजच उरत नाही.\nम्हणूनच 'वारंवार वापरलेला डेटा जवळ' — ही संकल्पना प्रोग्रामिंग (loop caching) ते डेटाबेस (buffer pool) सर्वत्र लागू होते.\n\nकॅशे व RAM मध्ये फरक:\nकॅशे CPU ने बनवून वापरला; RAM OS वापरतो व तुम्ही upgrade करता.",
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
          "मेमरीबाबत सर्वात जास्त गोंधळ — या चुका दूर करा:\n\n• गैरसमज १: 'RAM = storage.' — नाही; RAM temporary, storage permanent.\n\n• गैरसमज २: 'अजून RAM === जास्त जलद.' — जोपर्यंत current RAM संपलेली नाही, तोपर्यंत फायदा नाही; SSD upgrade अधिक प्रभावी.\n\n• गैरसमज ३: '4K/8K चित्राला जास्त RAM लागतो.' — चित्र GPU करतो; RAM गरज अॅपच्या ठिकाणी.\n\n• गैरसमज ४: 'ROM हटवता येतं.' — ROM enterprise; update फक्त firmware च्या रूपात.\n\n• गैरसमज ५: 'MB आणि Mb सारखे.' — MB = megabyte (डेटा), Mb = megabit (वेग); 8 खर्च भिन्न.",
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
    summary: "Windows, Linux, macOS — संगणक चालवणारा मुख्य सॉफ्टवेअर, त्याचे काम आणि प्रकार.",
    sections: [
      {
        title: "1. ऑपरेटिंग सिस्टीम म्हणजे काय (सखोल)",
        content:
          "OS (Operating System) = hardware आणि आपल्यामधील सेतू — तो तुमचे काम आणि मशीनचे काम यात भाषांतर करतो.\n\nतो करत असलेली मुख्य कामे:\n• फाईल व्यवस्थापन — files कुठे व कसे साठवायचे (organize).\n• प्रक्रिया व्यवस्थापन — कोणती app चालते, किती CPU वेळ मिळते.\n• मेमरी व्यवस्थापन — RAM चे apps मध्ये विभागणी, swap.\n• उपकरण व्यवस्थापन (ड्रायव्हर्स) — कीबोर्ड/प्रिंटर/Wi-Fi शी बोलणे.\n• सुरक्षा — users, passwords, permissions.\n• इंटरफेस — desktop, windows, file explorer.\n\nमहत्त्व: तुम्ही OS दिसत नाही पण तो असतो; सगळे apps ऑपरेट करण्यासाठी OS वरच अवलंबून असतात. त्यामुळे 'संगणक चालतोय' हे OS चालतोय असेच आहे.",
      },
      {
        title: "2. कर्नेल आणि ड्रायव्हर्स — आतले यंत्र (सखोल)",
        content:
          "कर्नेल (Kernel) — OS चा गाभा; सुरुवातीपासून सर्व low-level काम:\n• RAM व CPU चा नियोजन\n• फाईल सिस्टमवर वाचन/लेखन\n• उपकरणांशी संवाद\n\nतुम्ही desktop सोबत बोलता, desktop कर्नेलशी, कर्नेल hardware शी.\n\nड्रायव्हर (Driver) — विशिष्ट hardware साठीचा छोटा प्रोग्राम:\n`प्रिंटर driver` — प्रिंटरच्या भाषेत आदेश भाषांतर.\nनवीन hardware जोडल्यावर OS ला driver हवा — नाहीतर तो उपकरण ओळखत नाही.\nआधुनिक OS (Windows/Linux/macOS) अनेक सामान्य drivers आपोआप install करतात — पण अपवाद (विशेष उपकरणे) राहतात, तेव्हा निर्मात्याची driver फाईल आवश्यक.",
      },
      {
        title: "3. GUI वि CLI — दोन भाषा (सखोल)",
        content:
          "GUI (Graphical User Interface) — चित्रांतून:\n• माउस/टच, आयकॉन, विंडो, меню — Windows, macOS, Android.\n• नवशिक्यांसाठी सर्वात सोपा मार्ग.\n\nCLI (Command Line Interface) — मजकुरातून:\n• टर्मिनलमध्ये कमांड: `ls`, `cd`, `mkdir`, `pwd`.\n• का वापरतात? — जलद, automate होतो (स्क्रिप्ट्स), सर्व्हरवर GUI नसतोच, प्रत्येका computer सारखी कामे.\n\nTermux/लिनक्स प्रॅक्टिस:\n$ pwd — आपण कुठे आहोत\n$ ls — काय आहे\n$ cd Documents — आत जा\n$ mkdir test — फोल्डर बनवा\nही ४ कमांड तुमच्या टर्मिनलची पहिली ओळख.\n\nदोन्ही शक्य असतील तर दोन्ही शिकले पाहिजे — GUI day-to-day, CLI power.",
      },
      {
        title: "4. लोकप्रिय OS ची तुलना (सखोल)",
        content:
          "Windows:\n• घर-ऑफिस-गेमिंग सर्वात सामान्य; apps/सहाय्य आणि hardware समर्थन मोठ्या प्रमाणात.\n• मोफत नाही (license), व्यावसायिक वापर प्रचलित.\n\nLinux:\n• मोफत, open-source; सर्व्हर आणि डेव्हलपमेंटची पहिली निवड.\n• Distributions (डिस्ट्रो): Ubuntu/Mint (सोपे), Fedora, Arch (तज्ञ), Kali (सुरक्षा/टेस्टिंग).\n• Termux हा देखील Linux — फोनवर सच्चा टर्मिनल.\n\nmacOS:\n• Apple; फक्त Mac hardware वर; डिझाइन/अॅप सुलभता; मल्टीमीडिया कामांसाठी लोकप्रिय.\n\nAndroid/iOS:\n• फोन/टॅबलेट OS — Android हा Linux वर बांधलेला (कर्नेल).\nमोबाईल म्हणजे खिशातला संगणक — त्यामुळे OS संकल्पना केवळ डेस्कटॉप नाही.",
      },
      {
        title: "5. बूटिंग प्रक्रिया — संगणक कसा उठतो (सखोल)",
        content:
          "बूट (Boot) — power चालू ते desktop दिसेपर्यंत:\n\n१. Power ON → २. BIOS/UEFI — hardware तपासणी (POST)\n३. Boot device निवड (SSD/HDD) → ४. Bootloader (GRUB etc.)\n५. OS कर्नेल लोड → ६. System services सुरू → ७. Login screen/Desktop.\n\nप्रत्येक पायरीला 'ताटातूट' मिळाली असेल तर क्रमशः तपासा:\n• काळी/निळी screens — hardware किंवा storage समस्या.\n• Boot hang — खराब update/OS.\n\nवेग वाढवण्यासाठी टिप्स:\n• SSD वर OS — बूट दुप्पट जलद (HDD वर हळू).\n• 'Fast Startup' (Windows) चालू ठेवा.\n• Startup apps कमी ठेवा — बरीच apps बूटवरच लोड होतात आणि वेग कमी करतात.",
        code: `Power ON
  ↓
BIOS/UEFI — hardware तपासणी
  ↓
Bootloader (GRUB इ.)
  ↓
कर्नेल लोड
  ↓
System services सुरू
  ↓
Desktop/Login स्क्रीन
  ↓
तुम्ही काम सुरू!`,
        codeLanguage: "text",
      },
      {
        title: "6. फाईल व मेमरी व्यवस्थापन — आतला घरकाम (सखोल)",
        content:
          "फाईल सिस्टम — OS चे फाईल्सचे 'पोलिस रेकॉर्ड':\n• कोणती फाईल, कुठे, किती जागा — सारणी (inodes/table).\n• Windows — NTFS; Linux — ext4; flash आणि USB — FAT/exFAT.\n\nमेमरी:\n• प्रत्येक app ला RAM चा तुकडा मिळतो — पण मर्यादा ठेवून (प्रक्रिया).\n• OS गरज पडल्यावर swap वापरतो (RAM संपल्यावर).\n\nटास्क मॅनेजर / `top` मध्ये हे सर्व दिसते:\nWindows — Task Manager (Ctrl+Shift+Esc); Linux/Termux — `top` किंवा `htop`.\nRAM/CPU टक्के व apps ची यादी — हेच 'OS चे आतलं बोलणं' बाहेर दिसते.",
      },
      {
        title: "7. अॅप्स, वापरकर्ते आणि परवानग्या (सखोल)",
        content:
          "अॅप्स (Applications):\n• लहान उदाहरण — ब्राउझर, फोटो एडिटर हे देखील प्रोग्राम; ते OS च्या मध्येच चालतात.\n\nवापरकर्ते (Users):\n• बहु-वापरकर्ते — प्रत्येकाला आपले फोल्डर व सेटिंग्ज.\n• Administrator/Root — सर्व परवानग्या; normal user — मर्यादित.\n\nपरवानग्या (Permissions):\n• वाचणे, लिहिणे, चालवणे — फाईल स्तरावर.\n• लिनक्समध्ये प्रत्येक फाईलसाठी परवानग्या असतात:\n  r (read) w (write) x (execute) — `ls -l` असे दाखवते.\n\nटीप: 'sudo' म्हणजे उच्च परवानगीने कार्यान्वित — काळजीपूर्वकच वापरा.",
      },
      {
        title: "8. OS अद्ययावत व देखभाल (सखोल)",
        content:
          "Update का? — सुरक्षा छिद्रे (patches) + वैशिष्ट्ये + bugs:\n\n• Windows Update, Linux package manager (`pkg upgrade` Termux), macOS Software Update.\n• नियमितता: सुरक्षा update कधीही टाळू नका; feature update आधी बघून.\n\nदेखभाल:\n• Startup apps तपासा — वेग.\n• जागा व्यवस्थापन — कचरा फोल्डर (temp) स्वच्छ.\n• Backup — महत्त्वाच्या files ची प्रत (external/cloud).\n• Antivirus (Windows) / updates मार्फत सुरक्षा.\n\nसंगणक जास्त काळ ताजा ठेवण्यासाठी ही खरोखरची पायरी — update न करणे ही मोठी चूक.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "OS बाबतचे सामान्य गैरसमज:\n\n• गैरसमज १: 'अॅप्स म्हणजे OSच.' — नाही; ब्राउझर/गेम हे apps, OS त्यांना चालायला वातावरण देतो.\n\n• गैरसमज २: 'Linux फक्त प्रोग्रामर्ससाठी.' — Ubuntu/Mint नवशिक्यांसाठीही तयार आहेत.\n\n• गैरसमज ३: 'जास्त RAM=संगणक जलद.' — RAM संपत नसल्यास upgrade चा अर्थ नाही; SSD upgrade अधिक परिणामकारक.\n\n• गैरसमज ४: 'एकदा update की अपुरे.' — सुरक्षा update आयुष्यभर सुरूच राहतात.\n\n• गैरसमज ५: 'Android = Java फक्त.' — Android कर्नेल Linux; apps वेगवेगळ्या भाषांमध्ये.\nहे गैरसमज दूर केले तर OS दिसणे स्पष्ट होते.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा:\n\n१) टर्मक्सवर `uname -a`, `whoami`, `pwd`, `ls -l` चालवा — वापरकर्ता, kernel, फाईल परवानग्या दिसतील.\n२) Windows/Linux मध्ये Task Manager/`htop` उघडा — ३ सर्वात जास्त CPU वापरणारे apps नावे लिहा.\n३) Startup apps यादी बघा — स्वतःची काय काय चालते ते पहा.\n\nसारांश:\n• OS = सेतू व व्यवस्थापक (kernel + drivers + GUI/CLI).\n• GUI सोपे, CLI शक्तिशाली — दोन्ही शिका.\n• Windows/Linux/macOS/Android — प्रत्येकाची जागा वेगळी.\n• Boot, files, users, updates — ही OS ची रोजची कामे.\n\nपुढील tutorial (computer-file-system) — आपली स्वतःची फाईल्स व फोल्डर्स व्यवस्थित ठेवण्याची कला.",
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
    summary: "डेटा व्यवस्थित ठेवण्याची कला — फाईल्स, फोल्डर्स, एक्सटेंशन्स, paths.",
    sections: [
      {
        title: "1. फाईल आणि फोल्डर (सखोल)",
        content:
          "फाईल (File) — डेटाचा एक तुकडा: photo, document, video, program — प्रत्येक एक फाईल.\nफोल्डर (Folder/Directory) — फाईल्सचा गट ठेवण्याचा डबा; आत फोल्डरही ठेवता येतो.\n\nमहत्त्वाच्या संकल्पना:\n• Tree रचना — एक मुळापासून शाखांप्रमाणे: फोल्डर आत फोल्डर (nested).\n• Root — सर्वात वरचा फोल्डर (Windows = C:\\, Linux = /).\n• नावे युनिक ठेवा — एका फोल्डरमध्ये दोन समान नावे असू शकत नाहीत.\n\nव्यवस्थेचे सुवर्णनियम:\n• अर्थपूर्ण नावे: `report.docx` ऐवजी `गणित_अहवाल_2026.docx`\n• विभागणी: एक मुख्य फोल्डर → आत शाळा/कॉलेज/आवडी\n• तारीख समाविष्ट करा: backup_2026-09-01\n\nजेव्हा 'फाईल सापडत नाही' — तेव्हा व्यवस्थेची किंमत समजते. संगणक seek research आणि tree तुमची सवय बनवते.",
      },
      {
        title: "2. फाईल एक्सटेंशन — शेवटचा कोड (सखोल)",
        content:
          "Extension = फाईल नावाचा शेवटचा भाग (.jpg, .pdf, .txt) — OS ठरवतो कोणत्या app ने उघडायचं.\n\nमहत्त्वाचे प्रकार:\n• कागदपत्र — .docx, .pdf, .txt, .odt\n• स्प्रेडशीट — .xlsx, .csv, .ods\n• प्रेझेंटेशन — .pptx\n• चित्रे — .jpg (लहान आकार), .png (पारदर्शकता), .svg (वेक्टर),\n• व्हिडिओ/ऑडिओ — .mp4, .mkv, .mp3, .wav\n• संग्रह — .zip, .rar\n• प्रत्यारोप — .exe (Windows), .apk (Android), .deb\n\nWindows मध्ये extensions लपलेली असतात:\nFile Explorer → View → File name extensions चालू करा.\nका महत्त्वाचं: फसवणुकीची फाईल `photo.jpg.exe` — दिसायला फोटो, खरं प्रोग्राम. Extension visible केल्यावर ही युक्ती पकडता येते.",
      },
      {
        title: "3. फाईल पाथ (Path) — घरपर्यंतचा नकाशा (सखोल)",
        content:
          "Path = फाईल शोधण्यासाठी संपूर्ण मार्ग — घराचा पत्त्यासारखा.\n\nWindows: `C:\\Users\\सायली\\Documents\\resume.pdf`\nLinux/macOS: `/home/सायली/Documents/resume.pdf`\n\nAbsolute path — root पासून संपूर्ण मार्ग.\nRelative path — सध्याच्या स्थानावरून:\n• `.` — सध्याचे फोल्डर\n• `..` — एक स्तर वर\n• `~` — home फोल्डर (Linux/टर्मक्स)\n\nटर्मक्स प्रॅक्टिस:\n$ pwd  →  `/data/data/com.termux/files/home`\n$ cd Documents && pwd\n$ ls .. — मागचा फोल्डर\n\nPath समजलं की फाईल सापडणे, copy URL, script करणे — सर्व सोपे होते.",
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
        title: "4. फाईल प्रकार आणि त्यांच्यासाठी apps (सखोल)",
        content:
          "प्रत्येक फाईल प्रकार सहसा विशिष्ट app ने उघडतो:\n\n• .docx → Word / LibreOffice Writer\n• .xlsx → Excel / LibreOffice Calc\n• .pdf → PDF viewer (जवळपास सर्वत्र)\n• .jpg/.png → photo viewer / editor\n• .mp4 → media player\n\nउघडण्याचे नियंत्रण:\n• Default app बदलणे — OS च्या Settings मधील 'Open with' (Windows: Default apps).\n\nतीन गोष्टी करू नका:\n• कोणतीही फाईल अनोळखी app ने उघडू नका.\n• extension खोडू नका (ओळख नष्ट).\n• रिसीव्हही जंक फाईल सॉफ्टवेअर — नको ते टाळा.",
      },
      {
        title: "5. संपीडन — zipआणि rar (सखोल)",
        content:
          "कंप्रेस (Compress) — एकावेळी अनेक फाईल्स एकत्र मोठ्या प्रमाणावर लहान जागेत:\n\n• .zip — ठीक-ठाक सहज; Windows स्वतः उघडतो.\n• .rar — जास्त संपीडन; WinRAR/7-Zip हवा.\n• .7z — अत्यंत संपीडन (7-Zip).\n\nउपयोग:\n• मेल/व्हॉट्सॲपद्वारे पाठवणे — एकच फाईल, लहान.\n• backup — अनेक फाईल्स एकत्र.\n• गुप्त ठेवणे — पासवर्ड असलेले encrypted archiving.\n\nटीप: संपीडन सर्वात जास्त नक्की होतं मजकूर/PDF मधे; आधीच compressed (jpg/mp4) ने फार फरक पडत नाही.",
      },
      {
        title: "6. व्यवस्थापन सवयी व backup (सखोल)",
        content:
          "फाईल्स तर बनवतातच — नियमित देखभाल काय?\n\nदर आठवड्याला:\n• Download फोल्डर रिकामे करा — कचरा/अनावश्यक हटवा.\n• कामाच्या फाईल्स शीर्ष स्थानी व्यवस्थित ठेवा.\n\nBackup (तिसऱ्या ठिकाणी प्रत):\n• Rule of 3-2-1 — 3 copies, 2 media, 1 offsite.\n  उदा. मूळ (लॅपटॉप) + pen drive + cloud.\n• Scheduled — आठवड्यातून एकदा; आधी महत्त्वाच्या फाईल्सची.\n\nपरिणाम: 'storage भरली/HDD खराब/फाईल डिलीट' — या आपत्तीत तुमचे आकडे सुरक्षित.",
      },
      {
        title: "7. लिनक्स फाईल सिस्टमची झलक (सखोल)",
        content:
          "लिनक्समधील काही महत्त्वाचे फोल्डर:\n\n• / — root, सर्व काही याखाली\n• /home — वापरकर्त्यांची फाईल्स\n• /etc — configuration फाईल्स\n• /var — logs, डेटाबेस डेटा\n• /tmp — तात्पुरत्या फाईल्स (reboot नंतर हटते)\n• /bin, /usr/bin — प्रोग्राम्स\n\nविशेष: Windows मध्ये ड्राइव्ह अक्षरे (C:, D:); Linux मध्ये सर्व `फाईल सिस्टम` एकच / याखाली — उपकरणे /media किंवा /mnt वर.\n\nसमजून घेऊ: permission ही येथे महत्त्वाची संकल्पना. `ls -l` मध्ये rwx — read/write/execute.\nही चौकट नंतर server administration समजायला थेट कामात येते.",
      },
      {
        title: "8. प्रचलित गैरसमज",
        content:
          "फाईल्स/फोल्डर्स बाबतचे गैरसमज:\n\n• गैरसमज १: 'फाईल डिलीट म्हणजे हटत नाही.' — Recycle Bin मधून जाते; Shift+Delete थेट विना रीसायकल हटवते; SSD वर recover कठीण.\n\n• गैरसमज २: 'extension बदलल्यावर फाईल बदलते.' — फक्त नाव बदलते; content तसाच. `notes.txt` → `notes.jpg` याचा अर्थ फोटो नाही.\n\n• गैरसमज ३: 'Java फाइल web वर उघडता येतो.' — extension वर app ठरते, web नाही.\n\n• गैरसमज ४: 'फोल्डरवर वेगळा extension.' — फोल्डर्सला extension नसतो (काही खास compressed वगळता).\n\n• गैरसमज ५: '.exe फोटो उघडतो.' — होय असा वापरशक्य, पण अनेकदा malware.\nहे गैरसमज समजल्यावर तुमच्या फाईल्सशी व्यवहार सावध होतो.",
      },
      {
        title: "9. छोटा सराव (Quick Practice)",
        content:
          "आचरणात आणा:\n\n१) टर्मक्स: `mkdir -p ~/practice/Documents`, `cd ~/practice/Documents`, `touch notes.txt`, `ls`, `pwd` — प्रत्येक output नीट पहा.\n२) Windows: एक फोल्डर tree बनवा — Documents > शाळा > (गणित, विज्ञान) आणि त्यात फाईल ठेवा.\n३) एक फाईल copy करून extension बदला — काय होतं ते लिहा (काहीही नाही!).\n४) File Explorer मध्ये extensions चालू करा — आता extension दिसतात.",
      },
      {
        title: "10. सारांश",
        content:
          "आपण शिकलो:\n\n• फाईल = डेटाचा तुकडा; फोल्डर = डबा; tree = रचना.\n• Extension ठरवते app; नावे स्पष्ट ठेवा.\n• Path = नकाशा; `.`/`..`/`~` — relative navigation.\n• प्रकारानुसार apps; compression (zip) साठवण; backup 3-2-1.\n• Linux झलक — /, /home, permissions.\n\nपुढील tutorial (computer-shortcuts) — याच फाईल्स/अॅप्स मध्ये माऊसशिवाय वेगवान होणे.",
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
        title: "1. शॉर्टकट म्हणजे काय आणि का काम करतात",
        content:
          "शॉर्टकट (Shortcut) = की-कॉम्बिनेशन — माउसचा प्रवास टाळून तात्काळ आज्ञा.\n\nमूलभूत तत्त्व — 'modifier key':\n• Ctrl — क्रिया: Ctrl+C copy, Ctrl+F find. (macOS मध्ये Command/Cmd)\n• Alt — मेनू/windows बदल.\n• Shift — निवड विस्तार/विरुद्ध क्रिया.\n• Windows key — OS पातळीवर.\n\nका शिकावे?\n• दोन हातांनी काम, डोळे screen वर.\n• एकाच क्रियेची वारंवार पुनरावृत्ती — महिन्यांनी कित्येक तास वाचतात.\n\nमुख्य नियम: हळूहळू २-३ शॉर्टकट्स सवय करा; एका रात्रीत ५० नको.",
        code: `Ctrl + C → copy
Ctrl + V → paste
Ctrl + X → cut
Ctrl + Z → undo (मागे)
Ctrl + Y → redo
Ctrl + A → सगळे निवडा`,
        codeLanguage: "text",
      },
      {
        title: "2. टॉप ५ — copy/paste/cut/undo/select (सखोल)",
        content:
          "ही ५ जवळजवळ प्रत्येक app मध्ये काम करतात (Word, browser, editor, फोटो):\n\n• Ctrl+C — copy (निवडलेली वस्तू/मजकूर स्मृतीत).\n• Ctrl+X — cut (copy करून मूळ हटवा) — फाईल घेऊन जाताना.\n• Ctrl+V — paste (आधी C/X ने साठवलेले येथे ठेवा).\n• Ctrl+Z — undo (एक टप्पा मागे); सलग अनेकवेळा दाबल्यास अनेक टप्पे मागे.\n• Ctrl+Y — redo (undo उलट — पुढे).\n• Ctrl+A — सगळे निवडा (संपूर्ण text/फोल्डर).\n\nप्रॅक्टिस समज:\nमजकूर निवडा → Ctrl+C → दुसरी जागी Ctrl+V.\nचुकून हटवलं → Ctrl+Z ताबडतोब.\n\nटीप: Copy+paste म्हणजे फाईल दोन्हीकडे राहते; cut+paste म्हणजे हलवणे.",
      },
      {
        title: "3. फाईल आणि विंडो शॉर्टकट्स (सखोल)",
        content:
          "Windows मध्ये windows/फाईल्स हाताळण्याचे:\n\n• Alt+Tab — उघडलेल्या apps मधे बदल (Alt दाबून ठेवा, Tab दाबत जा).\n• Win+D — डेस्कटॉप लगेच दाखवा (सर्व windows कमी करा).\n• Win+E — File Explorer उघडा.\n• Win+L — संगणक lock.\n• Alt+F4 — सध्याची window/app बंद (पहिले Ctrl+S तर नक्की!).\n• F2 — फाईल rename.\n• Ctrl+S — save (अत्यावश्यक सवय).\n• Ctrl+Shift+Esc — Task Manager लगेच.\n\nया ८ शॉर्टकट्स दररोज कामात असतात — हाताची सवय करा.",
      },
      {
        title: "4. मजकूर निवड आणि हलवणे (सखोल)",
        content:
          "मजकुरात काम करताना — पटकन निवड व इतरत्र फिरणे:\n\n• Shift+Arrow — अक्षराला निवड.\n• Ctrl+Shift+Arrow — शब्दाबरोबर निवड.\n• Home/End — ओळीची सुरुवात/शेवट.\n• Ctrl+Home / Ctrl+End — document ची सुरुवात/शेवट.\n• PageUp/PageDown — स्क्रीन वर/खाली.\n• Backspace / Delete — मागचे/पुढचे अक्षर.\n\nउदाहरण:\nपरिच्छेदातले ३ शब्द निवडून वेगळ्या ठिकाणी नेणे: Shift+Ctrl+Arrow निवड → Ctrl+X → जागी जा → Ctrl+V.\nहे ४-५ शॉर्टकट्स लेखनातील सर्वात उपयुक्त आहेत.",
      },
      {
        title: "5. ब्राउझर शॉर्टकट्स (सखोल)",
        content:
          "ब्राउझरमधील मुख्य:\n\n• Ctrl+T — नवीन tab.\n• Ctrl+W — सध्याचा tab बंद.\n• Ctrl+Shift+T — चुकून बंद केलेला tab परत.\n• Ctrl+Tab / Ctrl+Shift+Tab — पुढचा/मागचा tab.\n• Ctrl+L — address bar (URL लिहा).\n• Ctrl+F — पेजमध्ये शब्द शोधा.\n• Ctrl+R / F5 — refresh.\n• Ctrl+Plus / Ctrl+Minus — zoom.\n• Ctrl+D — bookmark.\n\nमहत्त्व: Ctrl+Shift+T हा जीवरक्षक — चुकून बंद केलेला important tab परत आणतो.\nटीप: २० tabs उघडण्याऐवजी bookmark + Ctrl+T वापरा — प्रत्येक tab (RAM) मेमरी खातो.",
      },
      {
        title: "6. टेक्स्ट एडिटर / टर्मिनल शॉर्टकट्स (सखोल)",
        content:
          "संपादन (editing) व टर्मिनलमध्ये विशेष:\n\n• Ctrl+C / Ctrl+X / Ctrl+V — टेक्स्ट ऍडिटरमध्येही.\n• Ctrl+Z / Ctrl+Y — मजकुराची किमया.\n• Home/End, PageUp/PageDown — लांब फाईल्ससाठी.\n• Ctrl+Shift+Esc/Task Manager — सर्व apps.\n\nटर्मिनल (लिनक्स/टर्मक्स):\n• Tab — auto-complete (दुप्पट सोय).\n• Up/Down arrows — आधीच्या कमांड्स.\n• Ctrl+L — स्क्रीन साफ.\n• Ctrl+C — चालू क्रिया थांबवा (टीप: टर्मिनलमध्ये copy साठी Ctrl+C नाही हे!).\n• Ctrl+A / Ctrl+E — लाईनची सुरुवात/शेवट.\n\nहे शिकलं की टर्मिनलवर प्रत्येक क्षणाची बचत होते.",
      },
      {
        title: "7. वेगवान कामाची सवय — विसरू नका (सखोल)",
        content:
          "शॉर्टकट्स शिकण्याव्यतिरिक्त काही प्रक्रिया:\n\n• प्रत्येक नवा app उघडल्यावर — त्या app चे shortcuts एकदा बघा (मेन्यूमध्ये पाठीमागे लिहिलेले दिसतात).\n• तुमच्या ३-४ सर्वाधिक वापरल्या जाणाऱ्या apps चे top-5 shortcuts पहा.\n• सानुकूल shortcuts — बऱ्याच apps मध्ये (settings/keybindings) बदलता येतात.\n\nचेतावणी:\n• एका रात्रीत ५० शॉर्टकट लक्षात ठेवण्याचा प्रयत्न — व्यर्थ. रोज २-३.\n• Alt+F4 ने आकस्मिक app बंद — आधी वाचवा, मग बंद करा.",
      },
      {
        title: "8. प्रचलित गैरसमज",
        content:
          "शॉर्टकट्स बाबतचे गैरसमज:\n\n• गैरसमज १: 'माउस वापरणे जलद.' — खरे प्रत्यक्षात नाही; keyboard एक-हाताने आज्ञा अधिक जलद.\n\n• गैरसमज २: 'macOS मध्ये Ctrl+C copy.' — नाही; macOS मध्ये Cmd+C असतं.\n\n• गैरसमज ३: 'टर्मिनलमध्ये Ctrl+C = copy.' — टर्मिनलमध्ये Ctrl+C = cancel command; copy वेगळे (Ctrl+Shift+C).\n\n• गैरसमज ४: 'सर्व apps सारखे shortcuts.' — मुख्य (C/V/X/Z/F) साम्य; परंतु विशिष्ट app च्या नियमांत फरक असतो.\n\n• गैरसमज ५: 'shortcut forget होते, माउस वापरतो.' — २-३ शॉर्टकट्सची सवय महत्त्वाची; नेहमीच्या कामात आपोआप लागतील.",
      },
      {
        title: "9. छोटा सराव (Quick Practice)",
        content:
          "आजपासून ३ दिवसांचा कार्यक्रम:\n\nदिवस १ — Ctrl+C / Ctrl+V / Ctrl+X / Ctrl+Z\nदिवस २ — Ctrl+F / Ctrl+L / Home+End / Ctrl+A\nदिवस ३ — Alt+Tab / Win+D / Ctrl+Shift+T / Ctrl+Tab\n\nप्रत्येक वेळी माउस न वापरता हे करून पहा — एका दिवसात ५ वेळा तरी.\nतुमच्या ब्राउझरचे Ctrl+PageUp/PageDown (tab फिरवणे) हे देखील तपासा.",
      },
      {
        title: "10. सारांश",
        content:
          "शिकलो:\n\n• Modifier तत्त्व — Ctrl/Alt/Shift/Win एकत्र दाबल्याने क्रिया घडते.\n• Top-5 — copy, paste, cut, undo, select — सर्वत्र काम करतात.\n• फाईल/विंडो — Alt+Tab, Win+D/E, F2, Ctrl+S, Alt+F4.\n• मजकूर/ब्राउझर/टर्मिनल — निवड, tabs, auto-complete.\n• सवय — रोज २-३.\n\nमाउसशिवाय ही कामे करू शकलात की तुम्ही आधीच जलद झालात — पुढील networking tutorial मध्ये इंटरनेटची तत्त्वे शिकू.",
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
    summary: "LAN, WAN, IP, MAC, router, WiFi, DNS — इंटरनेट कसे काम करते ते सखोल.",
    sections: [
      {
        title: "1. नेटवर्क म्हणजे काय (सखोल)",
        content:
          "नेटवर्क = दोन किंवा अधिक संगणक/उपकरणे एकत्र जोडलेली, जेणेकरून ते माहितीची देवाण-घेवाण ('share') करता येतील.\n\nआकारानुसार प्रकार:\n• LAN (Local Area Network) — एका जागी: घर, शाळा, ऑफिस. फाईल व प्रिंटर शेअर.\n• WAN (Wide Area Network) — मोठ्या क्षेत्रात (शहर/देश); अनेक LAN जोडून बनते.\n• PAN (Personal Area Network) — फोन-ब्लूटूथ-इअरफोन सारखा अत्यंत छोटा.\n\nइंटरनेट = जगातील सर्वात मोठा WAN.\nज्या घरात एक WiFi राउटर — तो एक लहान LAN; तो राउटर ISP च्या मोठ्या नेटवर्कशी, आणि शेवटी इंटरनेटशी जोडलेला.\nम्हणून 'तुमचा phone internet वर गेला' म्हणजे तो शेकडो नेटवर्कांच्या साखळीतून आलेल्या दुसऱ्या संगणकाशी जोडला गेला.",
      },
      {
        title: "2. IP address — उपकरणाचा पत्ता (सखोल)",
        content:
          "IP (Internet Protocol) address — इंटरनेटवर प्रत्येक उपकरणाला मिळणारा नाविन्य पत्ता.\n\nIPv4 — जुना पण रनमय: 4 भाग, प्रत्येक 0-255: `192.168.1.25`.\nपत्ते संपले, म्हणून IPv6 (हेक्साडेसिमल, मोठा: `2001:db8::1`) — आज प्रमुख.\n\nदोन प्रकार:\n• Public IP — इंटरनेटवर तुमची ओळख (सामान्यतः router ला).\n• Private IP — घरच्या नेटवर्कमध्ये प्रत्येकाला router देतो (192.168.x.x, 10.x.x.x).\n\nकसे पहाल?:\n• Windows: `ipconfig`, Termux: `ifconfig` / `ip a`\n• तुमचा public IP: ब्राउझरवर 'what is my ip' शोधा.\n\nटीप: IP बदलतो (dynamic) — youtube/telegram वर 'कोणतं शहर' अशा डेटासाठी हेच काम करतं.",
      },
      {
        title: "3. MAC address आणि Router (सखोल)",
        content:
          "MAC address — प्रत्येक नेटवर्क उपकरणाला निर्मात्याने दिलेला कायमचा ओळखपत्र (उदा. `A4:5E:60:xx:xx:xx`).\n• IP बदलतो, MAC बदलत नाही.\n• LAN मध्ये उपकरणे MAC ने एकमेकांशी बोलतात.\n\nRouter — घरच्या नेटवर्कचा 'नायक':\n• एक public IP घेऊन अनेक private IP वाटतो (NAT).\n• Internet आणि devices च्या दरम्यान डेटाची वाहतूक करतो.\n• सामान्यतः त्याचा login IP `192.168.1.1` किंवा `192.168.0.1` असतो.\n\nWiFi बंद-चालू (restart) हे router ने पुन्हा जोडणी देतो — हीच 'router restart' समस्या सोडवण्याची पहिली पायरी.\nमोबाईल hotspot हादेखील routerच आहे — तो तुमच्या फोनच्या मोबाईल डेटाला Wi-Fi शेअर करतो.",
      },
      {
        title: "4. DNS — इंटरनेटचा फोनबुक (सखोल)",
        content:
          "DNS (Domain Name System) — नावाला पत्ता देणारी व्यवस्था.\n\nतुम्ही `google.com` विचारता; त्यावेळी:\n१) तुमचा computer/provided DNS server ला विचारतो — 'google.com चा IP काय?'\n२) DNS server ती माहिती (cache/मागे) सांगतो.\n३) नंतर तुमचा browser त्या IP वर विनंती पाठवतो.\n\nप्रत्येक domain चा mapping details मध्ये असतो — DNS च्या सद्य पद्धतीनेच websites ला नावे वापरणे शक्य.\n\nडायग्नोस्टिक्स:\n• `nslookup google.com` — नावाचे IP दिसेल.\n• `ping -c 4 google.com` VS `ping -c 4 1.1.1.1`:\n  दुसरा चालतो, पहिला नाही → DNS समस्या.\n  दोन्हीही नाही → नेटवर्क समस्या.\nDNS बदलणे (1.1.1.1/8.8.8.8) — काहीवेळा browsing वेगवान व सुरक्षित होते.",
      },
      {
        title: "5. WiFi — तारांविना जोडणी (सखोल)",
        content:
          "WiFi — तारा न लावता devices ला LAN मध्ये जोडण्याची पद्धत.\n\nफ्रिक्वेंसी:\n• 2.4 GHz — जास्त रेंज, भिंती भेदतो, पण गर्दीत मंद.\n• 5 GHz — जलद, पण रेंज कमी.\nआधुनिक router दोन्ही एकाच नावाने (band steering) चालवतो.\n\nमानक (standards):\nWi-Fi 4 (802.11n), Wi-Fi 5 (ac), Wi-Fi 6/6E (ax) — नवीनतम, जलद व कमी विलंब.\n\nघटक:\n• SSID — नेटवर्क नाव (तुम्ही बघता).\n• Password/Key — प्रवेशासाठी.\n• Guest network — पाहुण्यांसाठी वेगळे/मर्यादित.\n\n'WiFi नाव बदलणे' किंवा 'पासवर्ड सेट' — router admin page (browser) मध्ये: 192.168.1.1 → login → Wi-Fi settings.",
      },
      {
        title: "6. पॅकेट्स आणि TCP/IP (सखोल)",
        content:
          "मोठा डेटा एकाच ओळीत पाठवला जात नाही — छोट्या तुकड्यांमध्ये (packets) बांधून.\n\nपॅकेटमध्ये असतात:\n• Headers — कोठून (source IP), कुठे (dest IP), क्रम (sequence).\n• Payload — खरा डेटा.\n\nTCP — विश्वसनीय वाहतूक:\n• पॅकेट पोहोचले/नाही तपासतो, हरवलेला पुन्हा पाठवतो.\n• वेब पेज, इमेल, फाईल — यासाठी.\n\nUDP — जलद पण तपासणी नाही (live streaming/गेमिंग).\n\nम्हणूनच व्हिडिओ कॉलवर काही क्षण 'लटपट' — काही पॅकेट TDP नोंदीशिवाय गेले.\n'tcp/ip' हे इंटरनेटचे मूलभूत प्रोटोकॉल जोडी — हेच सर्व प्लॅटफॉर्मवर चालते.",
      },
      {
        title: "7. वायरलेस सुरक्षा (सखोल)",
        content:
          "WiFi ची सुरक्षा का महत्त्वाची?\n• मोकळा/विनापासवर्ड WiFi — कोणीही वापरेल, तुमचा डेटा पाहू शकेल.\n• तुमचा bandwidth खर्च होईल (नेट मंद).\n\nकोणत्याही नेटवर्कवर २ गोष्टींची काळजी:\n• Encryption — WPA2/WPA3 (आधुनिक). जुने WEP कधीही नको.\n• Strong password — नेटवर्क नाव/घरचा पत्ता सारखी सोपी नको.\n\nSSID छपवणे (hide) — काहीसा फायदा; पण आधी वरील २ महत्त्वाचे.\nअतिथी Wi-Fi (Guest) — घरच्या साठ्यात जोडल्याशिवाय पाहुण्यांना वेगळे.\n\nटीप: 'free WiFi' वर बँक login अजिबात नको — traffic इतरांना पाहता येतो. VPN असेल तरच वापरा.",
      },
      {
        title: "8. सर्व्हर आणि क्लायंट (सखोल)",
        content:
          "इंटरनेटचा मूलभूत नाता — क्लायंट आणि सर्व्हर:\n\n• Server — हार्डवेअर+सॉफ्टवेअर; माहिती/सेवा देतो (web, mail, file, game server).\n• Client — वापरकर्त्याचे उपकरण/ब्राउझर/अॅप — सेवा मागतो.\nजेव्हा तुम्ही youtube उघडता — तुमचा browser client आहे, youtube चा server उत्तर देतो.\n\nHosting:\nwebsite जगाला दिसण्यासाठी server वर hosted असते — तुमचा laptop शिवाय.\n\nएक गोष्ट समजून:\n'इंटरनेट मंद' — हे कधी कधी सर्व्हरच्या बाजूलाही असतं (server overload).\nBrowser चा address bar सर्व्हरशी बोलल्यावरच page उघडतं — ती सुरुवात नेटवर्क समजण्याची.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "नेटवर्किंगबाबत सामान्य गैरसमज:\n\n• गैरसमज १: 'WiFi चा Light बंद म्हणजे इंटरनेट चालू नाही.' — router restart करा; WiFi-चालू पण internet-बंद हे वेगळे.\n\n• गैरसमज २: 'IP म्हणजे नेहमी तोच.' — IP dynamic; प्रत्येक वेळी बदलू शकतो.\n\n• गैरसमज ३: 'अनोळखी WiFi पासवर्ड हवा.' — password नसलेल्या open नेटवर्कवर सुरक्षा नसतेच; ती सोय नव्हे.\n\n• गैरसमज ४: 'मोठा पासवर्ड = जास्त सुरक्षित कमकुवत.' — encryption व password दोन्ही.\n\n• गैरसमज ५: 'router जितका जवळ तितके वेग अधिक' — अडथळे 2.4/5 GHz वर वेगळे वागतात; सर्व काही जागेवर अवलंबून.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा:\n\n१) टर्मक्स: `ping -c 4 1.1.1.1` आणि `ping -c 4 google.com` — दोन्ही outputs तुलना करा.\n२) Windows: `ipconfig` / Termux: `ifconfig` वरून तुमचा IP, MAC, gateway पहा.\n३) राउटर login page (192.168.1.1) उघडून WiFi name व band (2.4/5 GHz) नोंदवा.\n४) `nslookup google.com` — IP चे नाव कसे वाचते ते पहा.\n\nसारांश:\n• LAN/WAN/PAN — आकारानुसार नेटवर्क.\n• IP = पत्ता (बदलणारा); MAC = ओळखपत्र (कायम); Router = वाटपकर्ता.\n• DNS नावाला IP देते; packets ने डेटा जातो.\n• WiFi सुरक्षा — WPA2/WPA3 + strong password.\n\nपुढील tutorial (computer-security) — याच जोडण्यांवर आधारित सुरक्षित राहण्याच्या पायऱ्या.",
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
        title: "1. सुरक्षा म्हणजे काय — संभाव्य धोके (सखोल)",
        content:
          "सुरक्षा म्हणजे आपला डेटा, अकाउंट आणि संगणक इतरांच्या ताब्यात जाऊ नये यासाठीचे सर्व उपाय.\n\nमुख्य धोके (threats):\n• Malware — व्हायरस, trojan, spyware, ransomware.\n• Phishing — स्वतःला विश्वासू दाखवून माहिती चोरणे.\n• Brute force — पासवर्ड अजमावणे (असली सोपी पासवर्ड नसतील तर).\n• Social engineering — फोन/संदेश द्वारे माणसाला फसवणे.\n• Unsecured network — public WiFi वरील ऐकणे.\n\nमूलभूत नियम: 'मोफत / घाईत / अनोळखी' असे काहीही — सावध.\nसुरक्षा ही एकच सॉफ्टवेअर नाही; ती सवयींचा संच आहे.",
      },
      {
        title: "2. मजबूत पासवर्ड (सखोल)",
        content:
          "पासवर्डचे नियम:\n• प्रत्येक अकाउंटला वेगळा पासवर्ड — एक leak झाला तर बाकी सुरक्षित.\n• लांबी महत्त्वाची: 12+ अक्षरे (सोपा पण लांब > लहान पण किचकट).\n• दोन्ही केस, संख्या, special characters.\n• शब्दकोषातला शब्द/जन्मतारीख/नाव नको.\n\nवाक्प्रचार (passphrase) तंत्र:\n'माझाDog2026Aamchi' — लहान दोन शब्द + संख्या + दोन्ही केस — आठवणे सोपे, अंदाज लावणे कठीण.\nप्रत्येक साइटसाठी थोडासा वेगळा भाग जोडा: '...Gmail', '...Bank'.\n\nपासवर्ड मॅनेजर (Bitwarden, KeepassXC):\nसर्व पासवर्ड एकाच encrypted vault मध्ये; मुख्य passphrase लक्षात ठेवा.\nBrowser developer 'save password' वापरू शकता, पण मॅनेजर अधिक नियंत्रण देतो.",
      },
      {
        title: "3. दुहेरी पडताळणी — 2FA/MFA (सखोल)",
        content:
          "2FA (2 Factor Authentication) — पासवर्ड + दुसरी खात्री.\n\nदुसरी खात्री कुठून?\n• Authenticator app (Google Authenticator, Aegis) — TOTP code दर 30 सेकंद.\n• SMS code — सोपा, पण SIM jail/swapping चा धोका.\n• Security key (YubiKey) — सर्वात मजबूत.\n\nका उपयोगी?\nपासवर्ड चोरला गेला तरी दुसऱ्या पायरीशिवाय login होऊ शकत नाही.\n\nसूचना:\n• Backup codes नोंदवा/मुद्रित करा — app गमावल्यास.\n• Recovery options अपडेट ठेवा (दुसरा email, phone).\n\nकिमान बँक, email, WhatsApp वर 2FA चालू करा — ही एक सवय डेटा वाचवू शकते.",
      },
      {
        title: "4. Antivirus आणि Windows Security (सखोल)",
        content:
          "Antivirus — ओळखलेल्या malware ला शोधून ब्लॉक करतो:\n• Signature आधारित — ज्ञात नमुन्यांशी तुलना.\n• Behavioural — संशयास्पद वर्तनाची देखरेख.\n\nWindows मध्ये Windows Security मोफत आणि चांगले.\n'Free antivirus' नावांच्या बनावट साइट्स पासून दूर — काही स्वतःच malware असतात.\n\nरोजच्या सवयी:\n• Downloads फक्त अधिकृत साइट/स्टोअरमधून.\n• अॅप्स Install करताना permission चे प्रॉम्प्ट वाचा.\n• Pop-up 'संगणक व्हायरस!' — ब्राउझर असे दाखवत नाही; हे scam.\n\nडोळे उघडे ठेवा — antivirus help आहे, तुमची सवय ही मुख्य सुरक्षा.",
      },
      {
        title: "5. अपडेट्स — सुरक्षेची दुरुस्ती (सखोल)",
        content:
          "प्रत्येक update मध्ये सुरक्षा patches असतात:\n• OS update — Windows/Linux/iOS — कमी कमी ज्ञात छिद्रे बंद करतात.\n• Browser/app updates — अनेक मोठ्या attacks browser च्या जुन्या आवृत्तीवर होतात.\n\nउपयोगी:\n• Automatic updates चालू ठेवा.\n• झटपट critical update दिसला की तो द्या.\n• जुने unsupported software (उदा. जुने Windows) — सुरक्षित नसते; upgrade करा.\n\nकित्येकदा 'system slow' चे कारण जुने/buggy updates ही असू शकते — नियमित update सवयीचा भाग ठेवा.",
      },
      {
        title: "6. Phishing — फिशिंग ओळखा (सखोल)",
        content:
          "Phishing = बनावट ईमेल/मेसेज/साइटने तुमचं password, OTP, card मिळवणे.\n\nलक्षणे:\n• तातडीचा/घाबरवणारा मजकूर — 'खातं बंद होईल!'.\n• URL बारकाईने पहा: `google.com.secure-login.xyz` — नावाऐवजी suspicious domain.\n• अनोळखी पाठवणारा + लिंक/attachment.\n• व्याकरण चुका.\n\nसत्यापन:\n• लिंक वर माऊस फिरवा — दिसणाऱ्या पत्त्यावर उचकटा.\n• थेट ब्राउझरमध्ये साइट URL टाइप करा.\n• बँक/कंपनी OTP कधीही 'व्हेरीफाय' करण्यासाठी मागत नाही.\n\n'कोणीही तुमचा OTP मागत असेल तर — तो कधीही सांगू नका.' हा नियम कधीही मोडू नका.",
      },
      {
        title: "7. Ransomware आणि Backup (सखोल)",
        content:
          "Ransomware — malware; फाईल्स encrypt करतो व पैसे (ransom) मागतो.\n• येण्याचे मार्ग: email attachment, cracked software, संक्रमित pendrive/USB.\n\nसंरक्षण:\n• नियमित backup — external drive/cloud: 3-2-1 नियम (3 copies, 2 media, 1 offsite).\n• Backup drive सतत कनेक्टेड न ठेवता — आवश्यकतेनुसार लावा (ransomware त्यातील फाईल्स ही खराब करू नये म्हणून).\n• Cracked/pirated software टाळा — अनेक ransomware त्यातूनच.\n\nआपत्तीवर उपाय:\nपैसे दिल्यासमध्ये सुद्धा फाईल परत येतील याची खात्री नसते — म्हणून active backup हा खरा उपाय.\nbackup विसरू नका — ही सवय ransomware विरुद्ध सर्वोत्तम ढाल.",
      },
      {
        title: "8. सुरक्षित वापराच्या सवयी (सखोल)",
        content:
          "दैनंदिन सुरक्षेच्या सवयी:\n\n• https + padlock — बँक/ईमेल साइटवर तपासा.\n• public WiFi वर login/ऑनलाइन बँकिंग नको (traffic ऐकू शकतात).\n• अनोळखी pendrive/चार्जर — ताबडतोब लावू नका.\n• Screen lock — Windows+L / फोन lock — जेवणाच्या वेळी.\n• संगणकाजवळून उठताना लॉक करा (Windows+L).\n• Permissions — नवीन app ने जास्त permission मागितली तर विचार करा.\n• Social media वर खूप वैयक्तिक माहिती शेयर करू नका (अंदाज देण्यास साहाय्य).\n\nया लहान सवयी malware पेक्षा मोठ्या धोक्यांपासून (धोका हा स्वतःची विसरणे) वाचवतात.",
      },
      {
        title: "9. प्रचलित गैरसमज",
        content:
          "सुरक्षेबाबतचे गैरसमज:\n\n• गैरसमज १: 'माझ्याकडे खास काहीच नाही' — तुमचे अकाउंट्स व फाईल्स मौल्यवान आहेत; ransomware कोणालाही लक्ष्य करतो.\n\n• गैरसमज २: 'Antivirus सगळं सांभाळतो' — सवयी प्रमुख; antivirus ची मर्यादा आहे.\n\n• गैरसमज ३: 'SMS द्वारे 2FA पुरे' — SIM swap चा धोका; app/की अधिक.\n\n• गैरसमज ४: 'Mac किंवा Linux मध्ये virus नाही' — कमी पण शक्य.\n\n• गैरसमज ५: 'पासवर्ड सतत बदललाच पाहिजे' — पासवर्ड मजबूत व unique असल्यास अनावश्यक बदलाची गरज नाही.\nहे गैरसमज ओळखल्यावर योग्य काळजी करणे सोपे.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आचरणात आणा (आजपासून):\n\n१) तुमच्या ३ महत्त्वाच्या अकाउंट्सवर 2FA चालू करा (email, bank, messaging).\n२) प्रत्येक महत्त्वाच्या अकाउंटचा पासवर्ड १२+ अक्षरांचा व वेगळा आहे का ते तपासा.\n३) एक backup करा: महत्त्वाच्या फाईल्स external/cloud वर.\n४) एक phishing ईमेल दिसला तर — link वर क्लिक न करता त्या बाबतीत नोंद करा (technical reporting).\n\nसारांश:\n• धोके — malware, phishing, brute force, social engineering.\n• मजबूत व unique पासवर्ड + 2FA.\n• Antivirus, updates, backup — तिन्ही आवश्यक.\n• सवयी — https, lock, public WiFi सावधान.\n\nपुढील tutorial (computer-troubleshooting) — जेव्हा संगणक बरोबर टेकावा लागतो तेव्हा अपरिहार्य समस्या सोडवणे.",
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
        title: "1. डायग्नोस्टिक मानसिकता (सखोल)",
        content:
          "प्रत्येक समस्येच्या आधी शांतपणे ३ प्रश्न विचारा:\n\n१) समस्या कधी सुरू झाली?\n२) त्यावेळी काय बदलले? (नवीन app, update, हार्डवेअर, नेटवर्क)\n३) समस्या एकाच जागी आहे का सगळीकडे? (फक्त एक app / संपूर्ण system / फक्त एक device)\n\nनियम १: RESTART आधी — संगणकातील बरीचशी (अंदाजे ८०%) लहान समस्या मॅमरी/सर्व्हिसअने रीसेट होऊन सुटतात.\nनियम २: EVIDENCE — error message नेमका लिहा (फोटो/टंकन).\nनियम ३: एकावेळी एकच बदल करा — एकत्र बदल केले तर काय काम झालं ते ओळखणं कठीण.\nपैकी कोणीही computer technician नाहीए — पण या पद्धतीनेच एखादा technician करतो.",
      },
      {
        title: "2. मंद संगणक — ठरावीक उपाय (सखोल)",
        content:
          "मंद संगणकाचे मुख्य कारण: CPU/RAM/डिस्क व्यस्त.\n\nपहिली पायरी:\nCtrl+Shift+Esc → Task Manager → Processes टॅब → CPU/RAM नुसार sort करा → जो सर्वात जास्त घेतो त्यावर 'End task'.\n\nपुढील उपाय:\n• Startup apps कमी करा (Task Manager → Startup) — बूट वेगवान.\n• डिस्क मोकळी ठेवा: temp files हटवा, recycle bin रिकामी, मोठ्या downloads इतरत्र.\n• browser extensions कमी — अनेक extension मंदी देतात.\n• नियमित रीबूट — दिवसेंदिवस open apps/pending updates जमा होतात.\n\nकायमचा उपाय (hardware):\n• RAM वाढवा (8→16 GB) — multitasking साठी.\n• पारंपरिक hard disk → SSD — झपाट्याने फरक (सर्वात प्रभावी upgrade).\nमंदीचे खरे कारण: सरासरी वापर vs उपलब्ध RAM — RAM कमी असल्यास system pagefile वापरतो, त्यामुळे मंदी.",
      },
      {
        title: "3. App ने जवाब न देणे (Freeze) (सखोल)",
        content:
          "लक्षण: app वर click होत नाही, cursor घड्याळ, title मध्ये '(Not Responding)'.\n\nउपाय:\n१) थोडा वेळ थांबा (कधीकधी १०-२० सेकंद after लोडिंग).\n२) Ctrl+Shift+Esc → Task Manager → app निवडा → 'End task'.\n३) पुन्हा app सुरू करा — saved data हरवले तर अपेक्षित (म्हणूनच सतत Ctrl+S).\n\nपूर्ण system freeze:\n• CapsLock Key चा लाइट तपासा — तो सगळा चालू असेल तर system 'alive' असेल.\n• १०-२० सेकंद थांबा → Ctrl+Alt+Del → Sign out/Shutdown.\n• शेवटचा उपाय: पॉवर बटण १० सेकंद धरून ठेवा (hard reset).\n\nरोखणे:\nमोठी फाईल/animation ऑफिस ऍपमध्ये — autosave चालू ठेवा; एकावेळी भरपूर टॅब/अॅप्स नकोत.",
      },
      {
        title: "4. Boot न होणे / काळा पडदा (सखोल)",
        content:
          "संगणक सुरूच होत नाही तर:\n\n• पॉवर/केबल तपासा; डिस्प्ले चा input (HDMI/DP) बरोबर निवडला का.\n• Beep आवाज म्हणजे हार्डवेअर इशारा — मॉडेलनुसार ठरावीक pattern;\n• हार्ड रीस्टार्ट नंतर Safe Mode:\n  Windows: Boot → रीबूट दरम्यान ४-५ वेळा पॉवर बटण → 'Startup Repair' / Safe Mode.\n• Safe Mode मध्ये सुरू होतो = सॉफ्टवेअर दोष (नवीन driver/app हटवा).\n• Safe Mode मध्येही नाही = हार्डवेअर (RAM/disk) — पुढील पायरी technician.\n\nलक्ष: सुरू होताना दिसणाऱ्या error screen फोटो काढा — नंतर help घेणे सोपे.\nPower कट-गाज सहन — surge protector/UPS ही सवय डेटा वाचवते.",
      },
      {
        title: "5. आवाज नाही (सखोल)",
        content:
          "स्टेप-बाय-स्टेप:\n\n१) Keyboard वरील Mute की + volume slider (सिस्टम ट्रे) तपासा.\n२) हेडफोन/स्पीकर correct जॅकमध्ये घातला आहे का (पाठी / बाजूला).\n३) ब्लूटूथ-स्पीकर जोडला असेल तर तोच output असेल — बदला.\n४) Windows: Settings → Sound → Output device बरोबर निवडा.\n५) Device Manager → Sound driver right-click → Update driver.\n६) audio services रीस्टार्ट करा: services.msc → 'Windows Audio' → Restart.\n\nफक्त एका app मधील आवाज नाही:\n• त्या app च्या settings मध्ये output/mute तपासा (उदा. video call app).\n\nअजूनही नाही → दुसऱ्या हेडफोनने चाचणी — output device सगळे ठीक का ते ओळखा.",
      },
      {
        title: "6. इंटरनेट / नेट समस्या (सखोल)",
        content:
          "बंद/मंद इंटरनेटचे टप्पे:\n\n१) राउटर बंद-चालू: पॉवर प्लग काढून ३० सेकंद → पुन्हा.\n२) तारी इथरनेट vs WiFi — Ethernet ला समस्या नसेल तर WiFi/राउटर सिग्नल.\n३) पिंग चाचणी (टर्मक्स):\n   `ping -c 4 1.1.1.1` — इंटरनेट जागतिक स्तर\n   `ping -c 4 google.com` — DNS चे नाव\n   परिणाम:\n   • 1.1.1.1 चालतो, google.com नाही → DNS समस्या (दुसरा DNS 1.1.1.1/8.8.8.8 वापरा).\n   • दोन्ही नाही → नेटवर्क/ISP समस्या (router, किंवा provider).\n४) फक्त एक device मंद → त्या device ची कनेक्शन स्थिती व band तपासा.\n\nइतर: VPN/service बदल नंतरच परिणाम दिसतो; फक्त एखाद्या page ची 404 ही नेटवर्क समस्या नव्हे — `nslookup` व `traceroute` ही निदान साधने उपयोगी.",
      },
      {
        title: "7. प्रिंटर समस्या (सखोल)",
        content:
          "सामान्य प्रिंट समस्या व उपाय:\n\n• कागद अडकला → printer ची tray उघडून कागद काढा, paper jam दूर करा.\n• शाई/टोनर नाही → printer चा level तपासा; Cartridge replace.\n• प्रिंटर 'offline' → printer powered + USB/नेटवर्क जोडणी तपासा; print queue clearing.\n• Print spooler अडकले → services.msc → 'Print Spooler' → Restart.\n• चुकीचे sizes/margins → printer च्या preferences मध्ये कागद तपासा.\n\nचाचणी पायरी:\nWindows → Settings → Devices → Printers → 'Print test page' — printer ची प्रक्रिया आधी तपासा.\n\nड्रायव्हर: manufacturer च्या site वरून योग्य driver — Windows बहुतेकदा तो स्वतः install करतो."
        ,
      },
      {
        title: "8. फाईल / डेटा समस्या (सखोल)",
        content:
          "फाईलचे सामान्य प्रकार:\n\n• 'फाईल खराब झाली' — चालवता आली नाही; बॅकअपवरून पुनर्संचयित करा.\n• 'परमिशन नाही / Access denied' — फाईल मालकाची परवानगी नसेल; फाईल गेली तर Administrator मध्ये try करा.\n• Trash मधून हटवलेली फाईल — recycle bin मध्ये शोधा; permanent delete झाल्यास recovery software शेवटचा प्रयत्न.\n\nचांगल्या सवयी:\n• महत्त्वाच्या फाईल्स बॅकअप (external/cloud).\n• एक फाईल अनेक ठिकाणी नको — एकच जागा (source) निवडा.\n• File name मध्ये तारीख ठेवा: `budget-2026.md` — शोध सोपे.\n\nerror message वर ऑनलाइन शोध घेण्यास योग्य: नेमका exact text copy करा.",
      },
      {
        title: "9. कधी घरी आणि कधी सेवा केंद्र (सखोल)",
        content:
          "स्वतः करणे सुरक्षित:\n• सॉफ्टवेअर समस्या — app crash, मंद, driver, virus, नेटवर्क.\n• सुरक्षित हार्डवेअर चाचणी — RAM reseat, SSD connection, पंखा धूळ.\n\nसेवा केंद्र/technician ला जाणे योग्य:\n• मदरबोर्ड/पॉवर supply दोष, सोल्डर/चिप समस्या.\n• warranty पूर्ण वापरा — घरात तोडफोड करण्याची गरज नाही.\n• hard disk मधून data recovery (स्वतः नाही) — professional.\n\nयादी ठेवा: वॉरंटी तारीख, purchase bill, service contact — troubleshooting मध्ये मदत.\nहार्डवेअरमुळे येणाऱ्या समस्या सातत्याने वाढत असतील → upgrade/replace करण्याची वेळ आली.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आजच्या संगणकावर २ व्यावहारिक चाचण्या:\n\n१) Task Manager उघडून CPU/RAM/डिस्क % नोंदवा — जास्त % आणणारे app ओळखा.\n२) टर्मक्स मध्ये `ping -c 4 1.1.1.1` व `ping -c 4 google.com` — परिणाम लिहा.\n३) आपल्या printer ची 'test page' एकदा प्रिंट करा.\n४) Safe Mode कसे चालवायचे ते तुमच्या निर्मात्याच्या सहाय्य पानावरून नोंद करा.\n\nसारांश:\n• प्रश्न विचारा: कधी/काय बदलले/कुठे.\n• Restart आधी; error message लिहा; एक बदल एका वेळी.\n• मंद → Task Manager; freeze → End task; boot नाही → Safe Mode.\n• नेटवर्क → router restart + ping/DNS; आवाज → output/driver.\nज्या गोष्टी स्वतः करणे धोकादायक — तेवढ्या सेवा केंद्राला.",
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
        title: "1. क्लाउड म्हणजे काय (सखोल)",
        content:
          "क्लाउड = तुमचा डेटा/सेवा तुमच्या device वर नाही, तर इंटरनेटवरील डेटा-सेंटरमध्ये.\n\nरोजची उदाहरणे:\n• Google Drive, OneDrive, iCloud, Dropbox — फाईल स्टोरेज.\n• Gmail, Google Docs, Office 365 — ईमेल व दस्तऐवज.\n• Spotify, Hotstar — मीडिया (तुमच्याकडे फाईल नाही; ती तिथेच असते).\n\nमूलभूत विचार:\nतुमचे फोटो 'फोनमध्ये' नाहीत, तर 'क्लाउडमध्ये' आहेत — तो फोन गमावला तरी डेटा सुरक्षित.\nम्हणून आजच्या काळात क्लाउड ही सोय नव्हे, तर मूलभूत अपेक्षा बनली आहे.",
      },
      {
        title: "2. क्लाउड कसे काम करते (सखोल)",
        content:
          "क्लाउडच्या मागे प्रचंड डेटा सेंटर — हजारो server machines एकत्र.\n\nमुख्य यंत्रणा:\n• Virtualization — एका physical server वर अनेक व्हर्च्युअल संगणक; संसाधने न्याय्य वाटतात.\n• Redundancy — एक हार्डवेअर फेल झाला तर दुसऱ्यावर लगेच सुरू; म्हणून अपटाइम जवळजवळ १००%.\n• Load balancing — जास्त वापर असलेल्या सर्व्हरवर स्वयंचलित वाटप.\n\nतीन घटक वापरकर्त्याच्या दृष्टीने:\n१) तुमचे device — फक्त दर्शक.\n२) इंटरनेट — जोडणी.\n३) डेटा सेंटर — मालक म्हणून provider.\nजेव्हा तुम्ही Drive फाईल उघडता — ती खरंच दुसऱ्या शहरात/देशातल्या सर्व्हरवरून येते.",
      },
      {
        title: "3. Sync वि Backup (सखोल)",
        content:
          "दोघांमध्ये मोठा फरक आहे:\n\nSync — फाईल कुठेही बदलली की तीच सर्व ठिकाणी बदलते (दोन्ही बाजूंना).\nउदा. मोबाईलवर फोटो काढला → तोच फोटो लॅपटॉपच्या Drive ऍपमध्येही.\nधोका: एखादी फाईल चुकून delete केली → ती सर्व ठिकाणी delete! (हीच sync ची समस्या).\n\nBackup — एका क्षणाची घेतलेली प्रत; मूळ खराब झाले तर त्या क्षणापर्यंतचे परत मिळते.\n\nयोग्य नियम:\n• महत्त्वाच्या फाईल्स — ३ प्रती: मूळ + local pen drive/external + cloud (3-2-1 नियम).\n• क्लाउड हा बॅकअपचा एक भाग असू शकतो; मात्र 'sync' चा गोंधळ करू नका.\nमहत्त्वाची फाईल वेळोवेळी स्वतः वर कॉपी ठेवा — सिंकवर कधीही संपूर्ण विश्वास नको.",
      },
      {
        title: "4. Cloud सेवांचे प्रकार (सखोल)",
        content:
          "क्लाउड सेवांचे तीन व्यापक स्तर:\n\n• SaaS (Software as a Service) — तयार वेब apps: Gmail, Google Docs, Office 365, Zoom. Install नाही; ब्राउझरवरून चालतात.\n• PaaS (Platform as a Service) — developers साठी: अॅप बनवण्यासाठी hosting, database, build tools.\n• IaaS (Infrastructure as a Service) — व्हर्च्युअल सर्व्हर/स्टोरेज भाड्याने: तुमचे स्वतःचे 'क्लाउडवर संगणक'.\n\nसामान्य वापरकर्त्याला बहुतांशी SaaS पुरे — बाकी दोन developer/बिझनेससाठी.\nखालील चित्र सामान्य क्लाउड वापर दाखवते:",
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
        title: "5. स्टोरेज मर्यादा आणि खर्च (सखोल)",
        content:
          "प्रत्येक provider मोफत जागा देतो:\n• Google Drive ~15GB, OneDrive ~5GB, iCloud ~5GB.\n\nजागा भरल्यावर:\n• नवीन फाईल upload थांबते; ईमेल/फोटो बॅकअप अपूर्ण राहतात.\n• तेव्हा paid प्लॅन किंवा वेगळी जागा (external drive) निवडा.\n\nशहाणपणाचे नियम:\n• जुन्या/अनावश्यक फाईल्स साफ करणे — १०-मिनिटांची सवय.\n• मोठ्या видео/बॅकअप फाईल्स external drive वर ठेवा.\n• कधीकधी provider च्या मोफत जागेचे गणित कालांतराने बदलते — अधिकृत माहिती तपासा.",
      },
      {
        title: "6. Cloud सुरक्षा आणि गोपनीयता (सखोल)",
        content:
          "तुमचा डेटा तिथे आहे — म्हणून सुरक्षा कमी नव्हे; पण स्वतःच्या खात्याची काळजी घ्यावी:\n\n• एन्क्रिप्शन — वाहतुकीत (https) आणि सर्व्हरवर ठेवलेला डेटा दोन्ही ठिकाणी एन्क्रिप्टेड.\n• 2FA — क्लाउड अकाउंटवर नक्की चालू करा; आज सर्वात महत्त्वाचे.\n• बळकट पासवर्ड — previous tutorial मधील नियम येथेही.\n• गोपनीयता — provider च्या तपशीलांची माहिती वाचा; खाजगी फाइल्स शेअर लिंकने सार्वजनिक करू नका.\n\nशेअर केलेली फाईल लिंक असलेल्या कोणालाही दिसते — शेअर करताना 'Anyone with link' नव्हे, 'specific contacts' निवडा.",
      },
      {
        title: "7. क्लाउडचे फायदे (सखोल)",
        content:
          "क्लाउडचे प्रमुख फायदे:\n\n• Access anywhere — फोन, लॅपटॉप, शाळेचा PC — वर login, तेच डेटा.\n• Device loss ने सुरक्षित — फोन गमावला/खराब झाला तरी डेटा तिथेच.\n• Collaboration — एकच दस्तऐवज अनेक जण एकाच वेळी संपादतात (Google Docs comment/chat).\n• Auto backup — फोटो/फाईल स्वयंचलित वर जातो; मनात नसताना डेटा गमावणे टाळते.\n• Version history — जुनी आवृत्ती परत मिळते; चुकलेलं बदल रद्द करता येतो.\nमोठ्या संस्थांसाठी — खर्च कमी (स्वतःचे server नको), वेगवान वाढ.",
      },
      {
        title: "8. क्लाउडच्या मर्यादा आणि गैरसमज (सखोल)",
        content:
          "मर्यादा:\n• इंटरनेट लागते — ऑफलाइन (ब्रॉडबँड नसेल तर) workable नाही. (काही apps offline mode देतात.)\n• प्रदायकावर विश्वास — तो बंद/नियम बदलला तर डेटावर परिणाम.\n• गोपनीयता — तिसऱ्या पक्षावर डेटा (संपूर्ण खाजगी नसतो).\n\nगैरसमज:\n• 'क्लाउड म्हणजे फोनची जागा वाचवणे' — खरं तर डेटा device वर नाही; तो cloud सर्व्हरवर आहे.\n• 'क्लाउड = बॅकअप' — फक्त sync केल्यास बॅकअप नव्हे (वरील फरक लक्षात ठेवा).\nयोग्य समजून घेतल्यावर क्लाउडचा काळजीपूर्वक वापर फायदेशीर.",
      },
      {
        title: "9. रोजच्या वापरातील उदाहरणे (सखोल)",
        content:
          "सरावाने सवय व्हावी यासाठी ४ ठोस वापर:\n\n१) महत्त्वाची फाईल (resume/अभ्यास) Drive वर upload करा → कोणत्याही ठिकाणी हाताशी.\n२) फोटो auto-backup ON करा (पहिल्यांदा verify) — फोटो गमावण्याची भीती संपते.\n३) शाळा/ऑफिसचे documents एका folder मध्ये cloud वर — शेअर लिंक द्या.\n४) वर्षभरात एकदा जागा तपासा — जो बॅकअप साफ/अद्ययावत करा.\nही सवय 3-2-1 बॅकअप नियमाशी जुळते — क्लाउड + local प्रति एकत्र.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आजचा सराव (१०-१५ मिनिटे):\n\n१) एका महत्त्वाच्या फाईलचे sync आणि backup यातील फरक वापरून तपासा — ती फाईल delete करून पहा की sync ने सर्व गेले का.\n२) तुमच्या cloud अकाउंटवर 2FA चालू करा (आधी नसेल तर).\n३) Drive/OneDrive ची मोफत जागा आणि भरत आलेली आहे का ते पहा.\n४) एक दस्तऐवज 'Anyone with link' ऐवजी 'specific contacts' ला शेअर करून वापरा.\n\nसारांश:\n• क्लाउड = दुसऱ्याच्या सर्व्हरवर डेटा/सेवा.\n• Sync ≠ Backup — दोघांचा वेगळा उपयोग.\n• SaaS / PaaS / IaaS — सेवांचे स्तर.\n• सुरक्षित खाते — 2FA + मजबूत पासवर्ड.\nपुढील tutorial (computer-buying-guide) — स्वतःला योग्य संगणक निवडणे.",
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
        title: "1. पहिले काम ओळखा (सखोल)",
        content:
          "कोणताही specification चर्चेपूर्वी, प्रश्न स्वतःला विचारा:\n\n• हे संगणक प्रमुख कशासाठी? (study / office / coding / editing / gaming)\n• दिवसात किती तास? कोणती software नक्की?\n• पुढील ३-४ वर्ष ते profitability वाढणार का?\n\nउदा. \n• study+internet → मध्यम CPU, 8GB RAM, SSD — सर्व काही पुरे.\n• video editing/gaming → जास्त cores, 16GB RAM, dedicated GPU, मोठा SSD.\n\nखरे तत्त्व: 'फक्त महाग घ्या' ही चूक — योग्य कामासाठी योग्य specs.\nसंगणक खरेदी ही ३-४ वर्षाची investment आहे — धडपड नव्हे.",
      },
      {
        title: "2. CPU समजा (सखोल)",
        content:
          "CPU = संगणकाचा मेंदू. दोन प्रमुख कुटुंबे:\n\nIntel: i3 / i5 / i7 / i9.\nAMD: Ryzen 3 / 5 / 7 / 9.\nसर्वसाधारण क्रम: 3 = सुरुवात, 5 = मध्यम, 7/9 = जास्त power.\n\nकोणते पहावे:\n• Core/Thread — एकावेळी किती काम; जास्त cores editing/rendering साठी.\n• Clock (GHz) — प्रत्येक core चा वेग; 중요 तरीही कोरांच्याबरोबर तो दिसतो.\n• Generation — i5 ची नवीन पिढी जुनी i7 पेक्षा वेगवान असू शकते:\n  उदा. i5-13xxx (13th gen) > i7-7xxx (7th gen).\n\nसूत्र: कामाच्या तुलनेत कोर + generation — नंतरच GHz.",
      },
      {
        title: "3. RAM — किती आणि का (सखोल)",
        content:
          "RAM = एकावेळी चालणाऱ्या कामांची 'टेबल' जागा.\n\nअंदाजे गरज:\n• 4GB — फक्त basic internet/typing; आजच्या वेळी कमीपणा वाटेल.\n• 8GB — सुरुवातीचा आराम; काही tabs + docs + light apps.\n• 16GB — आरामदायी; editing, coding, अनेक apps एकत्र.\n• 32GB+ — गंभीर editing/virtual machines.\n\nटीप:\n• OS + browser खरोखरच खूप खातात — 8GB किमान धरा.\n• खरेदीनंतर RAM वाढवणे desktop वर सोपे, laptop वर कठीण — निवडताना ध्यानात ठेवा.\n• लक्षात ठेवा: RAM = 'टेबल'; ती भरली की संगणक मंद होतो.",
      },
      {
        title: "4. स्टोरेज — SSD वि HDD (सखोल)",
        content:
          "स्टोरेजमध्ये दोन प्रकार:\n\nSSD — जलद (फ्लॅश मेमरी):\n• बूट सेकंदात, apps लगेच उघडतात.\n• शॉक-प्रतिरोधक, शांत.\n• मोठा (1TB+) महाग.\n\nHDD — पारंपरिक मेकॅनिकल:\n• स्वस्त, मोठा.\n• मंद, गरम, पर्यंत आवाज.\n\nयोग्य संयोजन:\n• किमान 256GB SSD (OS + मुख्य apps) हेच आजचा minimum.\n• मोठी माहिती (फोटो, video archive) → वेगळा external/HDD.\nखरा फरक: SSD असला तर सुरू होणे व apps उघडणे झपाट्याने सुधारते — हा आजकाल सर्वात जाणवणारा फरक.",
      },
      {
        title: "5. स्क्रीन (सखोल)",
        content:
          "डिस्प्ले निवडताना ३ गोष्टी:\n\n१) पॅनेल:\n• IPS — रंग चोख, कोणत्याही कोनातून स्पष्ट; recommended.\n• TN — स्वस्त पण रंग/कोन कमजोर; टाळणे उत्तम.\n\n२) Resolution:\n• Full HD (1920x1080) — आजचा minimum.\n• 2K/4K — मोठ्या स्क्रीन/editing साठी.\n\n३) Size:\n• laptop — 14-15.6 इंच सामान्य.\n• desktop monitor — 22-27 इंच.\n\nरेफ्रेश दर (Hz) गेमरसाठी महत्त्वाचा (120Hz+ फायदा); सामान्य वापरात कमी महत्त्व.\nस्क्रीन जितकी विश्वासू तितका डोळ्यांचा ताण कमी — IPS निवडा.",
      },
      {
        title: "6. बॅटरी, वजन आणि कीबोर्ड (सखोल)",
        content:
          "लॅपटॉप निवडताना हे तीन कमी न समजू दे:\n\n• बॅटरी — आदर्श 5-8 तास (light use). 'up to 8 तास' ही marketing; reviews पहा.\n• वजन — १.५-१.८kg आरामदायी; सतत सोबत नेअसल्यास हलके १.२kg.\n• कीबोर्ड — key spacing व की प्रवास हाताळून पहा; रात्रीच्या वापरासाठी backlight सोयीचा.\n\nचार्जिंग पोर्ट — USB-C वर चालवता येईल का ते सोयीचे.\nही गोष्ट दुकानात हाताळून तपासा — specs बघून ठरवता येत नाही.",
      },
      {
        title: "7. Laptop वि Desktop (सखोल)",
        content:
          "दोन्हींची सिस्टम:\n\nLaptop:\n+ सर्व एकत्र, चलता, कुठेही.\n- Upgrade/repair मर्यादित; किंमत जास्त (per performance).\n\nDesktop:\n+ वेगवान component, upgrade सोपे (RAM/SSD/GPU), दीर्घ आयुष्य.\n+ समान किमतीत जास्त performance; repair स्वस्त.\n- स्थिर; monitor/keyboard वेगवेगळे जागा घेतात.\n\nनिर्णय सूत्र:\n• प्रवास/शाळा/मीटिंग — laptop.\n• घर/ऑफिस/गेमिंग — desktop (किंवा desktop + हलका laptop).\nप्रश्न: 'काम कुठे होणार?' — उत्तर मिळाले की निवड स्पष्ट होते.",
      },
      {
        title: "8. इतर महत्त्वाच्या गोष्टी (सखोल)",
        content:
          "specs सोबत हे देखील तपासा:\n\n• Ports — USB-A/USB-C, HDMI, headphone jack — तुमच्या वापराशी जुळतात का?\n• WiFi/Bluetooth — नवीन standard (Wi-Fi 6) असल्याची खात्री.\n• Warranty — किमान २ वर्ष; parts + on-site?\n• Service center — तुमच्या शहरात जवळचे का?\n• Keyboard layout — मराठी/English दोन्ही बरोबर?\n• Preloaded software — bloatware कमी असल्यास चांगले.\n\nधोका: अगदी कमी किमतीसाठी आवश्यक specs कमी करू नका — खरेदी ही पाच वर्षांची गुंतवणूक.",
      },
      {
        title: "9. बजेट आणि रिफर्बिश (सखोल)",
        content:
          "बजेट नियोजन:\n• निश्चित upper limit ठरवा; विक्रेता जास्त महाग दाखाण्याचा प्रयत्न करेल.\n• EMI — व्याज + processing खर्च एकूण मिळून पाहा; 'मासिक EMI' फक्त निर्देशक.\n• पुढील ३ वर्षांची गरज आधी तपासा — then खरेदी.\n\nरिफर्बिश/सेकंडहँड:\n+ कमी किंमतीत चांगला brand.\n- धोके: warranty नसणे, battery wear, hidden defect.\nतपासण्या: बिल, serial verify, battery health %, physical damage, stress test.\nनियम: नवीन संगणक > रिफर्बिश > जोखीम पेले तरच सेकंडहँड.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "खरेदी करण्यापूर्वीचा सराव:\n\n१) आपल्या कामासाठी एक preferred specs ची यादी तयार करा:\n   CPU: ______ RAM: ______ SSD: ______ display: ______ budget: ______.\n२) वेगवेगळ्या २-३ लॅपटॉपची किंमत + specs शेजारी-शेजारी लिहा; तुलना करा.\n३) खरेदीचे नेमके कारण लिहा — आवेगात नव्हे.\n\nसारांश:\n• काम → then specs.\n• CPU: core + generation; RAM ≥ 8GB (16GB आराम).\n• SSD ≥ 256GB अत्यावश्यक; display IPS/Full HD.\n• लॅपटॉप चलता, डेस्कटॉप performant.\n• खरेदीत धीर ठेवा — योग्य निवड होईल.\nपुढील tutorial (computer-history) — संगणक या जगात कसा आला ते समजून घ्या.",
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
        title: "1. गणना करण्याची सुरुवात (सखोल)",
        content:
          "संगणकाची सुरुवात गणिती साधनांपासून:\n\n• अबॅकस (~3000 वर्षांपूर्वी) — मण्यांची चौकट; जगातील सर्वात जुनी गणना साधन. व्यापारी ते वापरत.\n• नेपियरची हाडे (1617) — गुणाकार/भागाकार सोपे करणारी साधने.\n• Pascalene (1642) — ब्लेझ पास्कलचे यांत्रिक गणक — बेरीज/वजाबाकी.\n• Leibniz च्या मशीन (1673) — गुणाकार/भागाकारही.\n\nमहत्त्वाचा विचार:\nयांत्रिक साधने माणसाच्या हातांची कामे करत; 'programmable' संगणकाची कल्पना अजून नव्हती.\nअबॅकस ते आजचा smartphone — हेच अखेरचे प्रवास.",
      },
      {
        title: "2. बॅबेज — संगणकाचे जनक (सखोल)",
        content:
          "चार्ल्स बॅबेज (1791-1871) — 'संगणकाचे जनक'.\n\nदोन प्रमुख रचना:\n• Difference Engine — polynomials ची टेबल्स मोजणारे यांत्रिक यंत्र (वापरात, पूर्ण न बांधलेले).\n• Analytical Engine (1837) — पहिली 'programmable' यंत्रणा:\n  मेमरी ('Store'), प्रोसेसिंग ('Mill'), input (cards) — आजच्या संगणकाची रचना याच्यासारखीच.\n\nअडा लव्हलेस — तिने Analytical Engine साठी पहिला program/algorithm लिहिला; म्हणून तिला पहिली programmer मानतात;\nयांत्रिक मर्यादांमुळे Analytical Engine पूर्ण झाला नाही, पण त्याची रचना कल्पनेनेच क्रांतिकारक होती.",
      },
      {
        title: "3. ENIAC आणि पहिले electronic संगणक (सखोल)",
        content:
          "20व्या शतकातील मोठे टप्पे:\n\n• 1945 ENIAC — पहिला giant electronic (digital) संगणक:\n  संपूर्ण खोली व्यापणारा, ~19,000 vacuum tubes, खूप वीज, तेजस्वी गरम.\n• आधीची यांत्रिक-विद्युत यंत्रे (relays) — पण vacuum tube मुळे आधुनिक electronic युग सुरू.\n• 1947 transistor — बेल लॅबमधील शोध; tube चा लहान, स्वस्त, कमी वीज खाणारा पर्याय.\n\nपरिणाम:\nट्रान्झिस्टरने संगणक आकाराने लहान व अधिक विश्वसनीय बनले — mainframe युग सुरू झाले.",
      },
      {
        title: "4. पिढ्या — पहिली ते पाचवी (सखोल)",
        content:
          "संगणकाच्या पिढ्या प्रमुख घटकानुसार:\n\n१ली — Vacuum Tubes: ENIAC (मोठे, गरम, खूप वीज, अविश्वसनीय).\n२री — Transistor: आरंभीचे mainframe; लहान, स्वस्त, विश्वसनीय.\n३री — IC (Integrated Circuit) chip: minicomputer; एकावर अनेक घटक.\n४थी — Microprocessor: संपूर्ण CPU एका चिपवर — PC युग; आजही हेच तत्त्व.\n५वी — AI/स्मार्ट: smartphone, cloud, parallel processing, machine learning.\n\nटीप: या पिढ्या ही निर्मिती टप्प्यांची शैक्षणिक वर्गवारी — सीमारेषा सैल; पण मोठा ट्रेंड बरोबर:\nखालील तक्ता पहा:",
        code: `पिढी   आधार            उदाहरण
1st    vacuum tube      ENIAC
2nd    transistor       आरंभीचे mainframe
3rd    IC chip          minicomputer
4th    microprocessor   PC, laptop
5th    AI/smart         smartphone, cloud`,
        codeLanguage: "text",
      },
      {
        title: "5. Microprocessor युग — PC सर्वांसाठी (सखोल)",
        content:
          "1971 — Intel 4004: पहिला single-chip microprocessor.\n1976 — Apple I (स्टीव्ह वोझनियाक/जॉब्स) — स्वतः बनवलेला होम किट.\n1977-1981 — Apple II, Commodore, Tandy — 'home computer' संस्कृती.\n1981 — IBM PC — खुल्या रचनेमुळे manufacturer/hardware ecosystem वाढली.\n1985 — Windows 1.0 (GUI ची सुरुवात).\n\nपरिणाम:\nसंगणक प्रयोगशाळेतून घराघरात आला.\nGUI (माउस + चित्रे) मुळे सामान्य माणसाला वापरणे सोपे झाले — कीबोर्डच्या आज्ञा सोडून.",
      },
      {
        title: "6. इंटरनेट आणि वेब (सखोल)",
        content:
          "इंटरनेटचा प्रवास:\n\n• 1969 — ARPANET — यूएस संशोधन नेटवर्क (पहिली जोडणी).\n• 1983 — TCP/IP मानक — विविध नेटवर्क 'इंटरनेट' मध्ये जोडायला.\n• 1991 — Tim Berners-Lee ने World Wide Web सुरू केले (HTML, URL, browser).\n• 1990s — नंतर ISP, search engines (Google 1998), ईमेल.\n\nवेब वि इंटरनेट मध्ये फरक:\nइंटरनेट = तारा/नेटवर्क पायाभूत; Web = त्यावरील माहिती पृष्ठे.\nवेबने माहिती सर्वांना सहज उपलब्ध झाली — ही क्रांती.",
      },
      {
        title: "7. स्मार्टफोन युग (सखोल)",
        content:
          "2007 — iPhone ने टचस्क्रीन स्मार्टफोन युग दाखवले; त्यानंतर Android सोबत सर्व बाजार.\n\nफरक:\n• जुन्या फोनमध्ये — नंबर/इनकोमिंग; नव्या मध्ये — पूर्ण संगणक हातात.\n• App ecosystem — weather ते banking सर्व अॅप.\n• Cloud आणि मोबाईल डेटा — इंटरनेट प्रत्येक खिशात.\n\nपरिणाम:\nआजच्या खिशातला फोन म्हणजे 1960 च्या मेनफ्रेम पेक्षा लाखो पटीने शक्तिशाली.\nमुळाची कामे तीच: input, processing, storage, output — फक्त साधने लहान व जादुई.",
      },
      {
        title: "8. आजची दिशा — Cloud, AI (सखोल)",
        content:
          "सध्याचा काळ:\n\n• Cloud computing — computation/storage इंटरनेटवर; device फक्त दर्शक.\n• AI/ML — भाषा, चित्रे, वेब — 'शिकणारे' software; (लेखन, कोड, तयार साहाय्य).\n• IoT — घरातील उपकरणे (smart TV, lights) इंटरनेटशी.\n• Quantum — सुरुवातीचे प्रयोग (मोठ्या संशोधन क्षेत्रात).\n\nयोग्य नजर:\nप्रत्येक आधुनिक गोष्टीचा पाया — transistor, microprocessor, TCP/IP.\nपुढील गोष्टी शिकत असताना 'हे कसे अपग्रेड आहे' ते विचारणे — इतिहासाचा उपयोग.",
      },
      {
        title: "9. महत्त्वाचे वळण — Timeline (सखोल)",
        content:
          "एका नजरेने:\n\n3000 वर्षांपूर्वी — अबॅकस\n  1837 — बॅबेजचे Analytical Engine\n  1945 — ENIAC\n  1947 — Transistor\n  1958 — Integrated Circuit\n  1971 — Intel 4004 (microprocessor)\n  1976 — Apple I\n  1981 — IBM PC\n  1985 — Windows 1.0\n  1991 — World Wide Web\n  2007 — iPhone (स्मार्टफोन)\nआज — Cloud + AI\n\nयादी लक्षात ठेवणे सोपे नाही, पण क्रम — 'घटक लहान → संगणक मोठा' — हाच मुख्य आराखडा.",
      },
      {
        title: "10. छोटा सराव व सारांश",
        content:
          "आजचा सराव:\n\n१) कागदावर timeline चे ५ प्रमुख वळण स्वतः लिहा (साल + घटना).\n२) तुमच्या घरातल्या जुन्या उपकरणाचा (जुना फोन/सीडी/फ्लॉपी) काळ ओळखा — कोणत्या पिढीचा असेल?\n३) 'संगणक = input + process + storage + output' हे तुमच्या सध्याच्या फोनवर ओळखा.\n\nसारांश:\n• यांत्रिक साधने → programmable Analytical Engine → electronic ENIAC.\n• पिढ्या: vacuum tube → transistor → IC → microprocessor → AI.\n• PC, वेब, स्मार्टफोन, cloud — प्रत्येक टप्प्याने संगणक सर्वांपर्यंत.\nसंगणकाचा हा प्रवास समजल्यावर आता computer category पूर्ण — पुढील विषय: linux-basics किंवा ai-basics.",
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