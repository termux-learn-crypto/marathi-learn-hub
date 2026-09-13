import type { Tutorial } from "@/data/tutorials";

// === COMPUTER · LEVEL 1 — संगणक मूलभूत शिक्षण पूर्ण करणे ===
// computer-basics → computer-hardware → computer-software च्या नंतरची पायरी:
// io-devices → ports → memory → os-basics → file-system → shortcuts →
// networking → security → troubleshooting → cloud → buying-guide → history

export const COMPUTER1_LABEL = "Computer · Level 1 — संगणक मूलभूत";

export const computerLevel1: Tutorial[] = [
  {
    slug: "computer-io-devices",
    categoryId: "computer",
    title: "Computer I/O Devices",
    marathiTitle: "इनपुट आणि आउटपुट उपकरणे",
    level: "beginner",
    minutes: 15,
    summary: "Keyboard, mouse, monitor, printer — इनपुट आणि आउटपुट उपकरणांची ओळख.",
    sections: [
      {
        title: "1. इनपुट उपकरणे (Input Devices)",
        content:
          "इनपुट उपकरणे — संगणकाला माहिती देणारी यंत्रे.\n• कीबोर्ड (Keyboard) — अक्षरे, संख्या टायप करण्यासाठी\n• माउस (Mouse) — क्लिक, drag, निवड करण्यासाठी\n• स्कॅनर (Scanner) — कागदावरची माहिती डिजिटल करण्यासाठी\n• माइक्रोफोन (Microphone) — आवाजातून माहिती\nहे सर्व संगणकाला 'हात-तोंड' देतात — त्याशिवाय संगणक काय करायचं ते ऐकत नाही.",
      },
      {
        title: "2. आउटपुट उपकरणे (Output Devices)",
        content:
          "आउटपुट उपकरणे — निकाल आपल्याला दाखवणारी यंत्रे.\n• मॉनिटर (Monitor) — दृश्य माहिती (screen)\n• प्रिंटर (Printer) — कागदावर छापणे\n• स्पीकर/हेडफोन (Speaker/Headphone) — आवाज\n• प्रोजेक्टर (Projector) — मोठ्या पडद्यावर दाखवणे\nसोपे नियम: आत जातं (input) बाहेर येतं (output).",
      },
      {
        title: "3. इनपुट + आउटपुट (I/O) दोन्ही करणारी",
        content:
          "काही उपकरणे दोन्ही काम करतात:\n• टचस्क्रीन — तुम्ही स्पर्श करता (input), तेवढ्यावर उत्तर दिसतं (output)\n• युएसबी ड्राइव्ह — data घेतं व देतं (दोन्ही)\n• प्रिंटर — छापतो (output) पण शाई/कागद स्थितीही सांगतो (input)\nमोबाईल मध्ये display + touch = दोन्ही एकत्र असतात.",
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
    ],
    related: ["computer-hardware", "computer-ports", "computer-basics"],
    next: "computer-ports",
    prev: "computer-software",
  },
  {
    slug: "computer-ports",
    categoryId: "computer",
    title: "Computer Ports & Cables",
    marathiTitle: "पोर्ट्स आणि केबल्स — जोडण्यांची ओळख",
    level: "beginner",
    minutes: 14,
    summary: "USB, HDMI, VGA, Ethernet, audio — संगणकाची सर्व जोडणी कशी काम करते.",
    sections: [
      {
        title: "1. USB — सर्वात सामान्य पोर्ट",
        content:
          "USB (Universal Serial Bus) — आजकाल सर्व काही याच्यावर.\n• USB-A — मोठा, जुना आकार (पेनड्राइव्ह, mouse)\n• USB-C — नवीन, अगदी लहान, कोणत्याही बाजूने जातो\n• USB 3.0 — निळ्या रंगाचा आतला भाग = जलद (जुना 2.0 पांढरा/काळा)\nचार्जिंग, data, कळ फळकट — हेच सर्वसामान्य काम.",
      },
      {
        title: "2. व्हिडिओ पोर्ट्स (Video)",
        content:
          "मॉनिटर/टीव्हीला जोडणे:\n• HDMI — चित्र + आवाज दोन्ही, सर्वात सामान्य\n• VGA — जुना, फक्त चित्र (केबलमध्ये पिन मधल्या)\n• DisplayPort / Thunderbolt — नवीन, उच्च दर्जा\nछोटी टीप: HDMI केबल लांब असेल तर दर्जा कमी पडतो — लहान ठेवा.",
      },
      {
        title: "3. नेटवर्क आणि ऑडिओ पोर्ट्स",
        content:
          "• Ethernet (RJ45) — लॅन केबल, सर्वात स्थिर इंटरनेट (WiFi नसेल तर)\n• Audio jack — हिऱ्या-गोल (हेडफोन, मायक)\n• Power socket — वीज पुरवठा\nWiFi कमकुवत असेल तर Ethernet तेच समाधान — घरात तार द्या.",
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
          "RAM (Random Access Memory) — तात्पुरती, अतिशय जलद.\nवीज गेली की RAM रिकामी — संगणक 'विसरतो'.\nROM (Read Only Memory) — कायम, फक्त वाचता येते.\nBIOS/UEFI ROM मध्ये असतो — संगणक सुरू होण्याची सूचना.\nसोपे: RAM = कामाचा डेस्क, ROM = पुस्तकं कायमची.",
      },
      {
        title: "2. कॅशे आणि व्हर्च्युअल मेमरी",
        content:
          "Cache — CPU च्या डोक्यावरची अत्यंत लहान पण सर्वात जलद मेमरी.\nवारंवार वापरलेला data इथे राहतो म्हणून काम वेगवान.\nVirtual memory — RAM कमी पडली तर हार्ड डिस्कचा भाग RAM म्हणून वापरला जातो.\nउदा. एकाच वेळी १० apps — RAM भरली → मंदावणं (virtual memory वर जातो).",
      },
      {
        title: "3. स्टोरेज युनिट्स (KB, MB, GB, TB)",
        content:
          "1 bit = 0 किंवा 1 (सर्वात लहान)\n8 bits = 1 byte (एक अक्षर)\n1024 bytes = 1 KB · 1024 KB = 1 MB · 1024 MB = 1 GB · 1024 GB = 1 TB\nपेनड्राइव्ह 16 GB ≈ ३-४ हजार photos.\nमोबाईल photo ≈ 2-5 MB, एक movie ≈ 1-2 GB.",
        code: `1 bit   = 0 किंवा 1
8 bits  = 1 byte  (एक अक्षर)
1024 B  = 1 KB     (एक छोटा मजकूर)
1024 KB = 1 MB     (एक photo)
1024 MB = 1 GB     (एक movie)
1024 GB = 1 TB     (लाखो photos)`,
        codeLanguage: "text",
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
          "OS (Operating System) = hardware आणि तुमच्यातला सेतू.\nफाईल व्यवस्थित ठेवणे, apps चालवणे, सुरक्षा — हे सर्व OS करतो.\nत्याशिवाय संगणक ही फक्त भौतिक वस्तू — काहीही करता येत नाही.\nसामान्य OS: Windows, Linux, macOS, Android, iOS.\nम्हणून 'संगणक चालणे' = OS चालले असणे.",
      },
      {
        title: "2. लोकप्रिय OS ची तुलना",
        content:
          "• Windows — सर्वात सामान्य, भरपूर apps/games\n• Linux — मोफत, विनामूल्य, सर्व्हर/प्रोग्रामर आवडतात (Termux ही Linux खेळी)\n• macOS — Apple चा, सुरळीत अनुभव\n• Android — फोनवरचा सर्वात सामान्य\nकोणताही OS शिकलात तर दुसरा सोपा — मूलभूत संकल्पना सारख्याच.",
      },
      {
        title: "3. बूटिंग म्हणजे काय",
        content:
          "Boot = संगणकाची 'उठसूठ' — पॉवर बटण दाबल्यावर:\npower → BIOS/UEFI hardware तपासतो → OS लोड होतो → desktop दिसतो.\nजर desktop आला नाही तर restore/safe mode प्रयत्न करा.",
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
          "फाईल (File) = data चा एक तुकडा — photo, document, video.\nफोल्डर (Folder) = फाईल्सची 'घर' — व्यवस्थित ठेवणे.\nफोल्डर आत फोल्डर (nested) असू शकतात — झाडासारखे (tree).\nचांगला क्रम: नाव + वर्ष + प्रकल्प — research.pdf पेक्षा '2026_report.pdf' सोपे.",
      },
      {
        title: "2. फाईल एक्सटेंशन",
        content:
          "Extension = फाईलच्या नावाचा शेवटचा भाग (.jpg, .pdf, .txt, .mp4).\nकोणत्या app ने उघडायचे ते ठरवते.\nसामान्य: .docx (.doc), .xlsx, .pptx, .png, .zip\nWindows मध्ये नाव देताना extension अजाणता बदलू नका — फाईल न उघडेल.",
      },
      {
        title: "3. फाईल पाथ (Path)",
        content:
          "Path = फाईलपर्यंत पोहोचण्याचा मार्ग.\nwindows: C:\\Users\\सायली\\Documents\\resume.pdf\nmac/linux: /home/सायली/Documents/resume.pdf\nफोल्डर उघडून-बंद करण्यापेक्षा path वाचणे कामाची गुरुकिल्ली.",
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
    summary: "Ctrl+C, Ctrl+V, Alt+Tab — संगणकाचा वेग वाढवणाऱ्या सवयी.",
    sections: [
      {
        title: "1. टॉप ५ शॉर्टकट्स",
        content:
          "Ctrl+C = copy · Ctrl+V = paste · Ctrl+X = cut\nCtrl+Z = undo (परत मागे) · Ctrl+A = सगळे निवडा\nही पाच सवयी शिकल्यावर दैनंदिन काम दुप्पट जलद.\nउजव्या माऊस क्लिकच्या मेनूतून हटका — अंगवळणी पाडा.",
        code: `Ctrl + C → copy
Ctrl + V → paste
Ctrl + X → cut
Ctrl + Z → undo
Ctrl + A → सगळे निवडा`,
        codeLanguage: "text",
      },
      {
        title: "2. फाईल आणि विंडो",
        content:
          "Alt+Tab = उघडलेल्या windows मधे बदल\nCtrl+Shift+Esc = Task Manager लगेच\nF2 = फाईल rename · Ctrl+S = save\nAlt+F4 = window बंद · Ctrl+W = tab बंद\nदोनच -तीन आधी शिका, नंतर वाढवा.",
      },
      {
        title: "3. ब्राउझर शॉर्टकट्स",
        content:
          "Ctrl+T = नवीन tab · Ctrl+W = tab बंद · Ctrl+Shift+T = बंद केलेला tab परत\nCtrl+F = पेजमध्ये शब्द शोधा\nCtrl+L = address bar वर जा\nहोमपेज खूप सगळ्या tabs उघडू नका — bookmarks वापरा.",
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
    summary: "LAN, WAN, IP, router, WiFi — इंटरनेट कसे काम करते.",
    sections: [
      {
        title: "1. नेटवर्क म्हणजे काय",
        content:
          "नेटवर्क = दोन किंवा जास्त संगणक एकत्र जोडलेले.\n• LAN (Local Area Network) — घर/शाळा/ऑफिस एका जागी\n• WAN (Wide Area Network) — मोठ्या भागात (शहर/देश)\nइंटरनेट = सर्वात मोठा WAN — संपूर्ण जग.\nफाईल share, प्रिंटर share — LAN चे उदाहरण.",
      },
      {
        title: "2. IP, राउटर आणि WiFi",
        content:
          "IP address = घराचा पत्त्यासारखा — कोणत्या यंत्राला काय पाठवायचे ठरते.\nRouter = एक इंटरनेट जोडणी अनेकांना वाटून देणे.\nWiFi = तारा न करता वायरलेस जोडणी (wavelength प्रमाणे).\nModem → Router → तुमचे devices (फोन, लॅपटॉप, टीव्ही).",
      },
      {
        title: "3. इंटरनेट कसे पोहोचते",
        content:
          "तुम्ही address टाइप करता → DNS नावाचा 'फोन बुक' पत्ता देते → सर्व्हर विचारतो.\nडेटा लहान तुकड्यांत (packets) जातो — कोणताही एक निकामी झाला तरी पुन्हा.\nRouter/WiFi ग्रीन दिवं ठीक, गंड असेल → DNS किंवा सर्व्हर समस्या.",
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
    summary: "मजबूत passwords, antivirus, updates, phishing — संगणक सुरक्षित ठेवा.",
    sections: [
      {
        title: "1. पासवर्ड आणि दुहेरी पडताळणी",
        content:
          "प्रत्येक अकाउंटला वेगळा पासवर्ड ठेवा (पुन्हा वापरू नका).\nकिमान 8-12 अक्षरे + संख्या + special characters (#$@).\nस्पष्ट गोष्टी टाळा: 123456, password, जन्मतारीख.\nमहत्त्वाच्या अकाउंटवर 2FA (दुसरी पायरी) चालू करा.",
      },
      {
        title: "2. Antivirus आणि अपडेट्स",
        content:
          "Antivirus = व्हायरस शोधून हटवणारा गडी.\nWindows मध्येच Windows Security मोफत आहे (चालू ठेवा).\nOS, browser, apps नियमित update करा — सुरक्षा खिळे भरले जातात.\n'update आता नंतर' करत राहू नका.",
      },
      {
        title: "3. Phishing आणि बॅकअप",
        content:
          "Phishing = बनावट ईमेल/लिंक ने पासवर्ड चोरणे.\nअनोळखी links / attachments उघडू नका; दाबण्यापूर्वी पत्ता तपासा.\nपावलाचे नियम: 'तातडीचं' 'खातं बंद' — यांवर भीती-घाबराट निर्माण करणारे संदेश संशयास्पद.\nमहत्त्वाच्या फाईल्सचा बॅकअप ठेवा (cloud/स्वतंत्र disk).",
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
    summary: "मंद संगणक, freeze, sound/नेटवर्क बंद — घरबसल्या उपाय.",
    sections: [
      {
        title: "1. संगणक मंद झाला तर",
        content:
          "पहिले: Ctrl+Shift+Esc (Task Manager) → CPU/RAM सर्वात जास्त घेणारं बघा → End task.\nRestart करा — अनेक समस्या सुटतात.\nbackground apps कमी करा (startup apps बंद).\nजर सतत मंद — RAM वाढवण्याचा विचार (8GB → 16GB).",
      },
      {
        title: "2. Freeze किंवा 'Not responding'",
        content:
          "Ctrl+Alt+Del → Task Manager → app निवडा → End task.\nसंपूर्ण system थांबलं तर पॉवर बटण १० सेकंद दाबून रीसेट (शेवटचा उपाय).\nसतत freeze — ड्राइव्ह भरलेलं/हवेत धूळ/ओव्हरहीट तपासा.\nमहत्त्वाचं: काम वारंवार Ctrl+S करा — freeze मध्ये data वाचावा.",
      },
      {
        title: "3. आवाज / इंटरनेट बंद",
        content:
          "आवाज नाही → volume/mute तपासा → speaker jack योग्य पोर्टला? → driver update.\nनेट बंद → router/power तपासा → काही मिनिटांनी router बंद-चालू करा → cable तपासा.\nतरीही नाही → दुसरा device ला WiFi बरोबर? तर router/SIM समस्या.",
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
          "क्लाउड = तुमचा data दुसऱ्याच्या सर्व्हरवर (इंटरनेटवर) साठवणे.\nउदा. Google Drive, OneDrive, iCloud, Dropbox.\nकुठूनही login → data हजर (फोन, लॅपटॉप, शाळा).\nफोन गमावला तरी data सुरक्षित — हा मोठा फायदा.",
      },
      {
        title: "2. बॅकअपची सवय",
        content:
          "महत्त्वाच्या फाईल्स २ ठिकाणी: एक स्थानिक (pen drive) + एक क्लाउड.\nफोन photos auto-backup चालू ठेवा (settings मध्ये).\nमहिन्यातून एकदा 'सगळं ठीक चाललंय' तपासा.\nबॅकअप योग्य नसताना आलेली file-loss हीच सर्वात वाईट.",
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
        title: "3. क्लाउड सेवांचे प्रकार",
        content:
          "SaaS — वेब apps जसे Gmail, Office 365 (install नाही).\nPaaS/IaaS — developers साठी सर्व्हर देणे.\nमोफत space मर्यादित (अंदाजे 5-15 GB) — नंतर शुल्क.\nक्लाउड म्हणजे 'कुठेतरी distant server' — व्यवस्थेचा ठिकाण नाही.",
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
          "CPU — i3 (साधं), i5 (मध्यम), i7/i9 (गेमिंग/व्हिडिओ).\nRAM — 4GB कमी; 8GB सुरुवात; 16GB आरामात (coding/editing).\nStorage — SSD जलद (OS इथेच), HDD मोठा+स्वस्त (फाईल्स).\nDisplay/बॅटरी/वजन — चालता वापरासाठी महत्त्वाचं.",
      },
      {
        title: "2. Laptop वि Desktop",
        content:
          "Laptop — चलता, बॅटरी, स्वयंपूर्ण (keyboard/monitor सोबत).\nDesktop — जास्त शक्तिशाली, कमी किंमत, अपग्रेड सोपे.\nकल्पना: ४०-५० हजारात desktop जास्त 'काम' देईल.\nविद्यार्थी/प्रवास → laptop; घर/ऑफिस/गेमिंग → desktop.",
      },
      {
        title: "3. खरेदीच्या टिप्स",
        content:
          "तुमच्या कामानुसार निवडा (study, coding, gaming, office) — 'सर्वात महाग' नाही.\nमनी ठेवा: SSD किमान 256GB + RAM 8GB नंतर अपग्रेड.\nwarranty आणि सर्व्हिस सेंटर जवळचं असेल तर आधारयुक्त.\nपाहून-आजवरच्या review मध्ये battery/storage तपासा — विक्रेत्याच्या म्हणण्याने नाही.",
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
          "अबॅकस — गणिताचे मण्यांचे चौकट-यंत्र.\nपास्कल आणि बॅबेज — यांत्रिक गणक (तरल चक्रे).\nENIAC — पहिला giant electronic संगणक (संपूर्ण खोली व्यापणारा).\nत्यानंतर transistors → चिप्स — आकार लहान, वेग भरभराट.",
      },
      {
        title: "2. पिढ्या (Generations)",
        content:
          "१ली — vacuum tubes (मोठा, उष्ण)\n२री — transistors (लहान, विश्वसनीय)\n३री — Integrated Circuits (आणखी लहान)\n४थी — microprocessor (एकच चिप — PC युग)\n५वी — AI, स्मार्ट, इंटरनेट ऑफ थिंग्ज",
        code: `पिढी   आधार            उदाहरण
1st    vacuum tube      ENIAC
2nd    transistor       आरंभीचे mainframe
3rd    IC chip          minicomputer
4th    microprocessor   PC, laptop
5th    AI/smart         smartphone, cloud`,
        codeLanguage: "text",
      },
      {
        title: "3. आधुनिक युग",
        content:
          "Desktop → laptop → smartphone → cloud + AI.\nसंगणकाची मुळाची ४ कामे तशीच: input, processing, storage, output.\nआजचा मोबाईल — खिशातला mini संगणक.\nतंत्र बदलतं, मूलभूत संकल्पना शिकल्यावर कधीही जुनी वाटत नाही.",
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
    ],
    related: ["computer-basics", "computer-hardware", "computer-memory"],
    prev: "computer-buying-guide",
  },
];