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
    summary: "Keyboard, mouse, monitor, printer — इनपुट आणि आउटपुट उपकरणांची सखोल ओळख.",
    sections: [
      {
        title: "1. इनपुट उपकरणे (Input Devices)",
        content:
          "इनपुट उपकरणे ही संगणकाची 'डोळे-कान-हात' आहेत — त्यांच्यातूनच आपल्याला संगणकाला सांगता येते 'काय करायचं'.\n• कीबोर्ड (Keyboard) — अक्षरे, संख्या, symbols टायप करणे. यात QWERTY layout इंग्रजीसाठी असतो; जर्मन/डेव्हनागरी (मराठी) टायपिंगसाठी भिन्न layout वापरता येतात.\n• माउस (Mouse) — वस्तू निवडणे (click), ड्रॅग करणे, स्क्रोल करणे. आजकाल optical mouse असतो (आत लेसर प्रकाशाने हालचाल ओळखतो) — जुना तर व्हील असलेला mechanical होता.\n• स्कॅनर (Scanner) — कागदावरची मजकूर/फोटो डिजिटल करणे. आतलं software ओळखलेल्या अक्षरांचं मजकूरात रूपांतर करतं (OCR) — म्हणून PDF/Word मध्ये search करता येतं.\n• माइक्रोफोन (Microphone) — बोलून कमांड देणे (voice typing, video calls).\nमहत्त्वाची गोष्ट: इनपुट उपकरणांशिवाय संगणक एकटा आळशी बसलेला असतो — कारण त्याला समजतच नाही की आपल्याला काय हवंय.",
      },
      {
        title: "2. आउटपुट उपकरणे (Output Devices)",
        content:
          "आउटपुट उपकरणे ही संगणकाची 'तोंड-डोळे' आहेत — त्यांच्यातूनच मशीन आपल्याला निकाल सांगते.\n• मॉनिटर (Monitor) — डेस्कटॉपचा स्क्रीन. चांगल्या मॉनिटरमध्ये resolution (1920×1080 = Full HD) आणि refresh rate (हर्ट्झ) महत्त्वाचे — गेमिंग/व्हिडिओ-एडिटिंगसाठी जास्त हर्ट्झ चांगले.\n• प्रिंटर (Printer) — दोन मुख्य प्रकार: Inkjet (शाईचे थेंब उडवतो — फोटोंसाठी चांगला) आणि Laser (पावडर टोनर वापरतो — मजकूर दस्तऐवजांसाठी जलद व स्वस्त).\n• स्पीकर/हेडफोन (Speaker/Headphone) — आवाज. स्पीकरला वेगळा power लागतो; हेडफोनला यूएसबी किंवा जॅकचा आवाज पुरा होतो.\n• प्रोजेक्टर (Projector) — लहान स्क्रीनचे चित्र मोठ्या भिंतीवर. वर्गखोली व बैठकांसाठी.\nसोपी आठवण: 'आत जातं = इनपुट, बाहेर येतं = आउटपुट' — जसं शाळेची माहिती (इनपुट) तुमच्या निकालात (आउटपुट) बदलते.",
      },
      {
        title: "3. इनपुट + आउटपुट (I/O) दोन्ही करणारी",
        content:
          "काही उपकरणे दोन्ही दिशांनी बोलतात (bi-directional):\n• टचस्क्रीन — तुम्ही स्पर्श करता (इनपुट) आणि त्याच जागेवर उत्तर दिसतं (आउटपुट). म्हणूनच मोबाईल ९०% टचस्क्रीनवर चालतो.\n• यूएसबी ड्राइव्ह — संगणकातून डेटा घेतो (आउटपुटकडून) आणि परत दुसऱ्या संगणकाला देतो (इनपुटकडे). याला 'स्टोरेज उपकरण' म्हणतात — डिव्हाइसची एक स्वतंत्र तिसरी जात.\n• प्रिंटर — छापतो (आउटपुट) पण शाई/कागद कोरडा दाखवतो आणि 'cartridge रिकामा' हा संदेश देतो (इनपुट) — म्हणजेच दोन्ही कामे करतो.\n• नेटवर्क कार्ड (Wi-Fi/Ethernet) — इंटरनेटवरून डेटा घेतं आणि पाठवतं — प्रत्येक मोबाईल हे असंच I/O उपकरण आहे.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "सभोवतालची १० उपकरणे पहा आणि त्यांना गटांत लिहा: इनपुट / आउटपुट / दोन्ही.\nउदाहरणार्थ: शाळेचा स्मार्टबोर्ड = दोन्ही, स्वयंचलित फोटोमशीन = इनपुट (फोटो) + आउटपुट (प्रिंट).\nका महत्त्वाचं: आजवर निवडलेले hardware चे शिक्षण येथून पुढे उपकरणांच्या जोडण्यांकडे (पोर्ट्स) सरकतं.",
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
    summary: "USB, HDMI, VGA, Ethernet, audio — संगणकाच्या सर्व जोडण्या कशा काम करतात.",
    sections: [
      {
        title: "1. USB — सर्वात महत्त्वाचा पोर्ट",
        content:
          "USB (Universal Serial Bus) — 'एक पोर्ट सर्व कामासाठी'.\n• यूएसबी-ए (USB-A) — मोठा आयताकृती, जुना पण अजूनही सामान्य (पेनड्राइव्ह, कीबोर्ड, माउस, चार्जर).\n• यूएसबी-सी (USB-C) — लहान, अंडाकृती, कोणत्याही बाजूने जातो — लॅपटॉप/फोन/नवीन मॉनिटर्सवर आता हाच मानक.\n• वेग (स्पीड): USB 2.0 ≈ 480 Mbps, USB 3.0/3.1 ≈ 5-10 Gbps, USB 3.2/Thunderbolt ≈ 20-40 Gbps. निळा आतील भाग = USB 3.x (जलद), पांढरा/काळा = 2.0 (हळू).\n• USB-C द्वारे केवळ डेटाच नाही, तर चार्जिंगही होतं — लॅपटॉप पासून फोनपर्यंत एकाच केबलने.\nहे सगळे एकाच छोट्या पोर्टला जोडलेलं पाहिलं तर समजतं की USB किती बहुपयोगी आहे.",
      },
      {
        title: "2. व्हिडिओ पोर्ट्स (Video)",
        content:
          "मॉनिटर/टीव्हीला संगणक जोडण्याचे मार्ग:\n• HDMI — चित्र + आवाज एकत्र, सर्वात सामान्य. जुन्या HDMI 1.4 वि नव्या HDMI 2.0/2.1 मध्ये वेग आणि 4K/8K आधार बदलतो — नवीन केबल घ्यायची असेल तर व्हर्जन तपासा.\n• VGA — प्राचीन, फक्त पिक्चर (पिन प्रमाणे ओळखतात). आजही जुन्या office प्रोजेक्टरमध्ये दिसतो.\n• DisplayPort / Mini-DP / Thunderbolt — उच्च दर्जा, मोठे मॉनिटर्स व multi-monitor साठी थंडीकडे. मॅकवर Mini-DP/Thunderbolt सामान्य.\n• Adapter/Dongle — 'माझ्याकडे फक्त HDMI आहे, पण मॉनिटर DisplayPort आहे' → HDMI→DisplayPort adapter विक्रीसाठी असतो. हा चीज थोडा महाग, पण काम करतो.\nटीप: लांब HDMI केबलमुळे चित्र अस्पष्ट होतं — ३ metarपेक्षा लांब केबल टाळावी.",
      },
      {
        title: "3. नेटवर्क आणि ऑडिओ पोर्ट्स",
        content:
          "• Ethernet (RJ45) — LAN केबल. आजकाल 100 Mbps (Cat5) व 1 Gbps (Cat5e/Cat6) सामान्य — WiFi नेहमी इतका स्थिर नसतो, म्हणून गेमिंग/व्हिडिओ-कॉलसाठी Ethernet उत्तम.\n• ऑडिओ जॅक (3.5mm) — सहसा हिरवा = मुख्य आवाज, गुलाबी = मायक, निळा = लाईन-इन. एकाच पोर्टवर गमावले जाणारे combo jacks हेडफोनच्या मायकसाठी.\n• Power पोर्ट — प्रत्येक उपकरणाला वेगळ्या power सप्लायची गरज असते — यूएसबी-सी एकाच पोर्टमुळे अनेक लॅपटॉप आता १ केबलने चार्ज होतात.\nWi-Fi कमकुवत असेल तर Ethernet हाच उपाय — नेट वेग सुरक्षित होतो.",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "आपल्या लॅपटॉप/फोनच्या काठावर किती पोर्ट आहेत ते नावासह खाली लिहा (USB-A किती, USB-C किती, HDMI आहे का, Ethernet?).\nएखाद्या पोर्टला काड्यासारखा दिसणारा छिद्र आहे का ते पहा — तो कदाचित Android चा चार्जिंग जॅक.\nही यादी बनवल्यावर next tutorial (मेमरी) नक्की समजेल, कारण storage उपकरणे याच पोर्टवर नेतात.",
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
    summary: "RAM, ROM, cache, virtual memory आणि storage units — माहिती कुठे साठते.",
    sections: [
      {
        title: "1. RAM वि ROM",
        content:
          "RAM (Random Access Memory) — तात्पुरती काम-मेज.\nजेव्हा तुम्ही ५ apps उघडता त्यांचा डेटा RAM मध्ये राहतो — जलद, पण वीज बंद झाली की खाली मेजवरील कागद उडून जातो.\nROM (Read Only Memory) — कायम, फक्त वाचता येते.\nBIOS/UEFI (संगणकाची सुरुवातीची सूचना) ROM मध्ये असते — यामुळे संगणक 'कुठून सुरू करायचं' हे पहिल्याच क्षणी ओळखतो.\nमहत्त्वाचे: RAM च्या आधारे 32-bit वि 64-bit OS ची मर्यादाही ठरते — 32-bit Windows साधारण 4 GB पेक्षा जास्त RAM वापरू शकत नाही, म्हणून नवीन संगणक 64-bit असतात.",
      },
      {
        title: "2. कॅशे आणि व्हर्च्युअल मेमरी",
        content:
          "Cache — CPU च्या जवळची अत्यंत लहान पण सर्वात जलद मेमरी.\nसामान्यतः लेयर केलेली असते: L1 (सर्वात जवळ), L2, L3. वारंवार वापरलेला डेटा येथे राहतो, त्यामुळे काम वेगवान होतं.\nVirtual memory — जेव्हा RAM भरते तेव्हा हार्ड डिस्कचा काही भाग RAM म्हणून वापरला जातो.\nलिनक्स/मॅक मध्ये याला swap space/splitfile म्हणतात — टर्मक्स मध्ये `free -h` कमांड चालवून एकूण RAM + swap बघता येतो.\nजर मेमरी नेहमी भरलेली असेल (usage >90%) तर नवीन apps चालवण्यासाठी सिस्टम हळू होते — हेच 'slow computer' चे मुख्य कारण.",
      },
      {
        title: "3. स्टोरेज युनिट्स (KB, MB, GB, TB)",
        content:
          "कठीण नव्हे — फक्त २-३ आकडे लक्षात ठेवा:\n1 bit = 0 किंवा 1 (सर्वात लहान माहिती)\n8 bits = 1 byte (एक अक्षर)\n1024 bytes = 1 KB\n1024 KB = 1 MB\n1024 MB = 1 GB\n1024 GB = 1 TB\nवास्तविक उदाहरण: एक photo ≈ 2-5 MB, एक song ≈ 3-8 MB, एक movie (HD) ≈ 1-2 GB, एक modern game ≈ 50-100 GB.\n16 GB पेनड्राइव्ह म्हणजे साधारण ३-४ हजार photos किंवा १०-१५ movies. जेव्हा pen drive भरल्याचे दिसते तेव्हा या आकड्यांचा अंदाज येतो.",
        code: `1 bit   = 0 किंवा 1
8 bits  = 1 byte  (एक अक्षर)
1024 B  = 1 KB     (एक छोटा मजकूर)
1024 KB = 1 MB     (एक photo)
1024 MB = 1 GB     (एक movie)
1024 GB = 1 TB     (लाखो photos)`,
        codeLanguage: "text",
      },
      {
        title: "4. छोटा सराव (Quick Practice)",
        content:
          "Windows: Task Manager → Performance → Memory वरून तुमची RAM usage बघा (उदा. 8 GB ची 6 GB वापर) — टक्के नोंदवा.\nटर्मक्स/लिनक्स मध्ये `free -h` आणि `cat /proc/meminfo` चालवा — रोख RAM किती आहे ते पहा.\nया सवयीने मेमरी हे केवळ कागदी शब्द न राहता तुमचा अंदाज होईल.",
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