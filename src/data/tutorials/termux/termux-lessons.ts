import type { Tutorial } from "@/data/tutorials";

export const termuxLessons: Tutorial[] = [
  {
    slug: "termux-basics",
    categoryId: "termux",
    title: "Termux Basics",
    marathiTitle: "Termux म्हणजे काय — Android वरील Linux टर्मिनल",
    level: "beginner",
    minutes: 12,
    summary: "Termux म्हणजे Android वर चालणारा terminal — त्याद्वारे संगणकाप्रमाणे कमांड्स चालवता येतात.",
    sections: [
      {
        title: "Termux म्हणजे काय?",
        content: "Termux हा Android वर चालणारा एक terminal emulator आहे. त्यामुळे आपण फोनवरच Linux commands, Python, Node.js आणि इतर अनेक tools चालवू शकता.\n\nTermux install करण्यासाठी:\n1. F-Droid किंवा GitHub वरून APK download करा\n2. Install करा\n\nहे Play Store वरून येत नाही कारण Google च्या धोरणांमुळे काही features blocked आहेत.",
        code: `# पॅकेज अपडेट
pkg update
pkg upgrade

# python install
pkg install python

# python चालवणे
python

# node.js install
pkg install nodejs

# git install
pkg install git

# camera/permission साठी
termux-setup-storage

# help
pkg help`,
        codeLanguage: "bash",
        output: `Hit:1 https://packages.termux.dev ... Done
100 packages can be upgraded.
$ python
Python 3.12.4 (termux) ...
>>> `,
      },
      {
        title: "का शिकावे? Termux चे फायदे आणि महत्त्व",
        content: "Termux शिकणे महत्त्वाचे आहे कारण तुमचा फोन एक पूर्ण Linux संगणक बनतो — कोणताही अतिरिक्त खर्च नाही.\nतुम्ही coding, server hosting, scripting आणि automation सर्व काही खिशातल्या device वरून करू शकता.\nप्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Play Store वरून install करणे — तिथली app जुनी आणि बिनसपोर्ट असते; F-Droid चीच आवृत्ती वापरा.\n✗ pkg upgrade शिवाय काम करणे — packages जुने राहिले तर errors येतात; आधी update करा.\n✗ storage permission न घेता फाइल्स शोधणे — termux-setup-storage चालवणे विसरू नका.\n✗ अनोळखी websites वरून copy-paste करून commands चालवणे — काय चालवत आहात हे नीट समजून घ्या.",
      },
      {
        title: "मुख्य मुद्दे आणि सारांश",
        content: "Termux = Android वर terminal. Packages install करायला pkg वापरतात, storage साठी termux-setup-storage. Play Store च्या जागी F-Droid वापरा.\nपुढील धड्यात Python programs फोनवर कसे चालवायचे ते पाहू.",
      },
    ],
    practiceQuestions: [
      "Termux हे Play Store वरून उपलब्ध नसण्याचे कारण काय?",
      "Termux मध्ये प्रथम कोणत्या दोन commands चालवतात?",
      "storage permission साठी कोणती command वापरतात?",
    ],
    quiz: [
      {
        question: "Termux हा काय आहे?",
        options: ["Android टर्मिनल emulator", "पूर्ण Linux distro", "PDF viewer", "गेम"],
        correct: 0,
      },
      {
        question: "Termux install कोठून करावे?",
        options: ["Play Store", "F-Droid", "App Store", "WhatsApp"],
        correct: 1,
      },
      {
        question: "पॅकेज install करण्यासाठी कोणती command?",
        options: ["apt install", "pkg install", "install", "pip install"],
        correct: 1,
      },
    ],
    related: ["termux-python", "linux-basics", "linux-commands"],
    next: "termux-python",
  },
  {
    slug: "termux-python",
    categoryId: "termux",
    title: "Termux वर Python",
    marathiTitle: "फोनवर Python programs चालवणे — install, run आणि packages",
    level: "intermediate",
    minutes: 15,
    summary: "Termux मध्ये Python install करून programs कसे चालवायचे आणि packages कसे install करायचे.",
    sections: [
      {
        title: "फोनवर Python programs म्हणजे काय?",
        content: "pkg install python ने Python install करा. आता file बनवा — nano editor वापरून .py file लिहा. मग python filename.py ने ती run करा.\nModules आणि packages साठी pip install वापरतात.\nहे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडते.",
      },
      {
        title: "का शिकावे? फोनवर Python चे फायदे आणि महत्त्व",
        content: "तुमच्याकडे desktop नसेल तर फोनवरच Python शिकू शकता — अभ्यास, छोटे automation आणि projects साठी pytest पर्यंत सर्व चालते.\nवाचून न थांबता प्रत्येक उदाहरण स्वतः try करा.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ pip ने system packages नुकसान करणे — pip install जोरात चालवताना काय install होते ते पहा.\n✗ numpy/compile केलेले packages — termux-packages चे prebuilt binary वापरा, कारण काही packages compile मध्ये वेळ लागतो.\n✗ कळत नसलेली code अनोळखी जागेवरून कॉपी करणे — न समजता चालवू नका.",
      },
      {
        title: "Python install आणि चालवणे — उदाहरण",
        content: "आधी python install करा, मग file तयार करा आणि run करा. Modules साठी pip चा वापर करा.",
        code: `# install
pkg install python

# file बनवणे
nano hello.py

# file content
print("नमस्कार Termux!")

# run
python hello.py

# modules
pip install requests

# interactive mode
python

# >>> print("हाय")`,
        codeLanguage: "bash",
        output: "नमस्कार Termux!",
      },
      {
        title: "सारांश",
        content: "pkg install python → file लिहा → python file.py. Modules साठी pip. Python फोनवरही पूर्ण विकासासाठी तयार आहे.\nपुढील धड्यात फाइल्स आणि Android storage कसे व्यवस्थापित करायचे ते पाहू.",
      },
    ],
    practiceQuestions: [
      "Python install करण्यासाठी कोणती command?",
      "Python file run करण्याची command सांगा.",
      "pip install requests ने काय होते?",
    ],
    quiz: [
      {
        question: "Termux मध्ये Python install करण्यासाठी?",
        options: ["install python", "pkg install python", "python setup", "pip python"],
        correct: 1,
      },
      {
        question: "Python फाइल run करण्यासाठी?",
        options: ["run hello.py", "python hello.py", "execute hello.py", "py hello.py"],
        correct: 1,
      },
      {
        question: "Python module install करण्यासाठी?",
        options: ["pkg install", "pip install", "module install", "npm install"],
        correct: 1,
      },
    ],
    related: ["termux-basics", "python-basics", "termux-files"],
    prev: "termux-basics",
    next: "termux-files",
  },
  {
    slug: "termux-files",
    categoryId: "termux",
    title: "Files आणि Storage",
    marathiTitle: "फाइल्स आणि Android storage — termux-setup-storage, cd, ls",
    level: "intermediate",
    minutes: 18,
    summary: "Termux चा filesystem, ~/ home directory आणि Android storage मध्ये access कसा घ्यायचा.",
    sections: [
      {
        title: "फाइल्स आणि storage म्हणजे काय?",
        content: "Termux मध्ये प्रत्येक app सारखी स्वतःची private home फोल्डर असते — तिला ~ (tilde) म्हणतात.\nAndroid च्या shared storage मध्ये जाण्यासाठी termux-setup-storage चालवावे लागते, जे सभोवतालचे files access देते (storage/downloads, storage/dcim वगैरे).\nसंगणकाप्रमाणेच cd, ls, mkdir, cp, mv, rm ह्या commands फोल्डर्स आणि फाइल्स सांभाळतात.",
      },
      {
        title: "का शिकावे? files व्यवस्थापन फायदे आणि महत्त्व",
        content: "छोटा code सुद्धा योग्य folder मध्ये ठेवण्याची सवय तुमचे आयुष्य सोपे करते — project शोधणे, backup घेणे, git commit करणे सर्व काही सहज होते.\nफाइल्स कुठे आहेत हे कळले नाही तर पुढील सर्व काही गोंधळून जाते.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ rm ही command कायमची delete करते — recycle bin नसतो; सजग रहा.\n✗ mv/cp मध्ये path चुकणे — हेतूपेक्षा वेगळ्या ठिकाणी फाइल्स जातात.\n✗ storage permission न घेतले तर download folder दिसत नाही — termux-setup-storage आधी चालवा.\n✗ root access बिनगरजे मागणे — safety permissions कमीच ठेवा.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "storage access, folder तयार करणे आणि फाइल्स हलवणे हे सर्व प्रयत्न करा.",
        code: `# storage access (एकदा)
termux-setup-storage

# home मध्ये जाऊन पाहा
cd ~
ls -la

# project folder
mkdir projects
cd projects
echo "नमस्कार" > notes.txt

# copy आणि move
cp notes.txt note-backup.txt
mv note-backup.txt ~/note-old.txt
rm ~/note-old.txt

# Android download folder
ls ~/storage/downloads`,
        codeLanguage: "bash",
        output: `drwx------  .termux
-rw-------  notes.txt
drwx------  projects
storage -> /storage/emulated/0`,
      },
      {
        title: "सारांश",
        content: "~ हा home आहे, storage मध्ये जाण्यासाठी termux-setup-storage. फाइल्स चालवण्यासाठी cp/mv/rm पुरेसा — पण rm कायमचा delete करतो.\nपुढील धड्यात packages installment आणि management.",
      },
    ],
    practiceQuestions: [
      "home directory ला कोणत्या चिन्हाने दर्शवतात?",
      "Android download folder कुठे दिसतो?",
      "rm command विषयी एक महत्त्वाची सावधानता सांगा.",
    ],
    quiz: [
      {
        question: "storage access देण्यासाठी कोणती command?",
        options: ["termux-setup-storage", "pkg install storage", "storage init", "cd android"],
        correct: 0,
      },
      {
        question: "फोल्डर तयार करण्यासाठी?",
        options: ["make folder", "mkdir", "newdir", "touchdir"],
        correct: 1,
      },
      {
        question: "कायमची delete करण्यासाठी?",
        options: ["rm", "del", "trash", "unlink"],
        correct: 0,
      },
    ],
    related: ["termux-basics", "linux-commands", "termux-backup"],
    prev: "termux-python",
    next: "termux-packages",
  },
  {
    slug: "termux-packages",
    categoryId: "termux",
    title: "Packages व्यवस्थापन",
    marathiTitle: "pkg आणि apt — packages update, search, install, uninstall",
    level: "intermediate",
    minutes: 15,
    summary: "Termux चे पॅकेज मॅनेजर pkg/apt वापरून software install-अनinstall करणे.",
    sections: [
      {
        title: "Packages व्यवस्थापन म्हणजे काय?",
        content: "Termux packages एका central repo मधून येतात. pkg हा apt चा सोपा wrapper आहे.\npkg update म्हणजे package list refresh, pkg upgrade म्हणजे सगळे packages नवीन करणे.\npkg search नाव शोधते, pkg install खरे install करते.\nकधीकधी package name थोडी वेगळी असते — जसे python, clang, nodejs — म्हणून search आधी करा.",
      },
      {
        title: "का शिकावे? package management चे फायदे आणि महत्त्व",
        content: "प्रत्येक tool एक package आहे — git, python, node, ssh, sqlite. package management माहीत असेल तर कोणतीही गोष्ट install/remove करणे एका command मध्ये होते.\nSystem स्वच्छ आणि updated ठेवणे हेच सुरक्षिततेचे मूल आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ update न करता install — package न सापडल्याच्या errors येतात.\n✗ uninstall करताना name चुकणे — pkg list-installed वापरून खात्री करा.\n✗ pkg upgrade मध्ये जबरदस्ती kill करणे — path/settings बिघडू शकतात.\n✗ Play Store वरचा जुना Termux वापरून repo errors — हे पूर्णपणे अनसपोर्टेड आहे.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "search → install → list → uninstall असे पूर्ण चक्र करून पहा.",
        code: `pkg update
pkg upgrade

# पॅकेज शोधणे
pkg search python

# install
pkg install python clang git

# स्थापित packages
pkg list-installed

# माहिती
pkg show python

# remove करणे
pkg uninstall clang`,
        codeLanguage: "bash",
        output: `Searching... python
python           Python interpreter
python-numpy    Numerical Python
... 15 matches

python/stable 3.12.4 installed`,
      },
      {
        title: "सारांश",
        content: "pkg update+upgrade करून सुरुवात, search/install/uninstall सोप्या. आधी search म्हणजे नेमके name मिळते.\nपुढील धड्यात terminal editor मध्ये फाइल लिहिणे — nano आणि vi.",
      },
    ],
    practiceQuestions: [
      "pkg update आणि pkg upgrade मध्ये काय फरक?",
      "package चे नेमके नाव कसे शोधाल?",
      "installed packages बघण्याची command?",
    ],
    quiz: [
      {
        question: "package शोधण्यासाठी?",
        options: ["pkg find", "pkg search", "pkg look", "apt get"],
        correct: 1,
      },
      {
        question: "सर्व package upgrade करण्यासाठी?",
        options: ["pkg upgrade", "pkg new", "pkg refresh", "pkg install all"],
        correct: 0,
      },
      {
        question: "package remove करण्यासाठी?",
        options: ["pkg uninstall", "pkg kill", "pkg delete", "pkg drop"],
        correct: 0,
      },
    ],
    related: ["termux-basics", "termux-editors", "linux-commands"],
    prev: "termux-files",
    next: "termux-editors",
  },
  {
    slug: "termux-editors",
    categoryId: "termux",
    title: "Terminal text editors",
    marathiTitle: "nano आणि vi — terminal मध्ये फाइल लिहिणे",
    level: "intermediate",
    minutes: 18,
    summary: "nano (सोपा) आणि vi/vim (सामर्थ्यवान) editor चा वापर — फाइल निर्माण, edit, save.",
    sections: [
      {
        title: "Terminal editors म्हणजे काय?",
        content: "संगणकावर Notepad वापरतो तसे — terminal मध्ये कोड आणि फाइल्स लिहिण्यासाठी editors असतात.\nnano सोपा आणि सुरुवातीसाठी योग्य — screen खाली shortcuts दिसतात.\nvi/vim शक्तिशाली आणि सर्वत्र उपलब्ध — पण modes (normal/insert) मुळे सुरुवातीला गोंधळ होतो.\nदोन्ही शिका — कुठल्याही server वर काम करताना vi ही खात्रीने मिळते.",
      },
      {
        title: "का शिकावे? editors चे फायदे आणि महत्त्व",
        content: "SSH वरून remote server मध्ये, डेस्कटॉप GUI शिवाय फाइल संपादन करणे ही सर्वात महत्त्वाची skill आहे.\nnano त्वरित काम करायचे, vi तेव्हा जेव्हा nano नसेल किंवा जास्त control हवा असेल.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ vi मध्ये typing न झाल्यास confusion — तुम्ही normal mode मध्ये आहात; i दाबून insert mode मध्ये जा.\n✗ nano मध्ये Ctrl+X शिवाय बाहेर पडल्यास बदल जतन होत नाहीत.\n✗ editor ऐवजी GUI file manager चा वापर करणे — terminal जगात ही सवय नाही.\n✗ फाइल संपताना विस्मृतीने Ctrl+S चा विचार — terminal मध्ये Ctrl+S म्हणजे output pause होणे.",
      },
      {
        title: "nano उदाहरण",
        content: "nano मध्ये file तयार करा, लिहा, Ctrl+O स्वी, Ctrl+X बाहेर. वाचण्यासाठी cat वापरा.",
        code: `# install
pkg install nano vim

# फाइल लिहा
nano hello.py
# लिहा: print("हाय")
# Ctrl+O -> Enter (save)
# Ctrl+X (exit)

# पाहा
cat hello.py

# vim मध्ये
vim hello.py
# i -> insert mode
# :wq -> save & exit`,
        codeLanguage: "bash",
        output: `# Ctrl+O/Enter -> save
# Ctrl+X -> बाहेर
# vim मध्ये :wq म्हणजे save+exit`,
      },
      {
        title: "सारांश",
        content: "nano सोपा (Ctrl+O save, Ctrl+X exit), vi सर्वत्र (i write, :wq save+exit). दोन्ही ही सवय लागवली की terminal मध्ये घरगुती पणा जाणवतो.\nपुढील धड्यात स्वतःचा command तयार करणे — scripts आणि shebang.",
      },
    ],
    practiceQuestions: [
      "nano मध्ये file save आणि exit च्या shortcuts कोणत्या?",
      "vi मध्ये typing सुरू करण्यासाठी कोणती key?",
      "vim मध्ये save और exit मध्ये कोणत्या keys?",
    ],
    quiz: [
      {
        question: "nano मध्ये save करण्यासाठी?",
        options: ["Ctrl+S", "Ctrl+O", "Ctrl+Q", "Ctrl+D"],
        correct: 1,
      },
      {
        question: "vi मध्ये insert mode कशी आणायची?",
        options: ["i दाबून", "Enter दाबून", "Esc दाबून", "x दाबून"],
        correct: 0,
      },
      {
        question: "vim मध्ये save + exit?",
        options: [":q", ":wq", ":x!", "q!"],
        correct: 1,
      },
    ],
    related: ["termux-packages", "termux-scripts", "linux-navigation"],
    prev: "termux-packages",
    next: "termux-scripts",
  },
  {
    slug: "termux-scripts",
    categoryId: "termux",
    title: "Scripts आणि shebang",
    marathiTitle: "custom commands — ~/bin, shebang आणि chmod +x",
    level: "advanced",
    minutes: 20,
    summary: "बॅश scripts फाइलमध्ये लिहिले जातात, executable बनवतात आणि स्वतःचे नवीन commands देतात.",
    sections: [
      {
        title: "Scripts आणि shebang म्हणजे काय?",
        content: "एक script म्हणजे अनेक commands असलेली फाइल जी एकत्र चालते. पहिल्या ओळीवरचा shebang (#!/bin/bash) सांगतो कोणता interpreter वापरायचा.\nchmod +x ने फाइल executable बनते, आणि ~/bin folder मध्ये ठेवली तर तो folder PATH मध्ये असल्याने तिला कुठूनही कॉल करता येते.\nअशा प्रकारे तुमचे स्वतःचे नवीन commands तयार होतात.",
      },
      {
        title: "का शिकावे? scripts चे फायदे आणि महत्त्व",
        content: "रोज करायचे काम — backup, server सुरू करणे, status तपासणे — एकदा script मध्ये लिहिले की एकच शब्द पुरेसा.\nहीच गोष्ट tasker, widget, boot automation साठीही आधारभूत आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ shebang न ठेवणे — script आपोआप bash मध्ये पडतो तरी, नेमकी स्पष्टता महत्त्वाची.\n✗ chmod +x विसरल्यास permission denied — executable flag आवश्यक.\n✗ script मध्ये absolute path न वापरणे — script दुसर्या folder मधून चालवल्यावर paths तुटतात.\n✗ ~/bin ऐवजी सिस्टम commands ओव्हरराइट करणे — नाव योग्य निवडा.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "script तयार करून executable बनवून कुठूनही चालवा.",
        code: `mkdir -p ~/bin
nano ~/bin/saludo.sh

#!/bin/bash
echo "नमस्कार $USER"
echo "आजची तारीख: $(date)"

chmod +x ~/bin/saludo.sh

# कुठूनही चालवा
saludo`,
        codeLanguage: "bash",
        output: `नमस्कार u0_a123
आजची तारीख: Fri Sep 18 10:30:00 IST 2026`,
      },
      {
        title: "सारांश",
        content: "script = commands ची फाइल; shebang interpreter निवडतो; chmod +x executable बनवते; ~/bin मध्ये ठेवल्याने कुठूनही command मिळते.\nपुढील धड्यात git आणि GitHub — code ची version history.",
      },
    ],
    practiceQuestions: [
      "shebang म्हणजे काय आणि कुठे लिहितात?",
      "script executable बनवण्याची command?",
      "~/bin मध्ये script ठेवल्यास काय होते?",
    ],
    quiz: [
      {
        question: "executable बनवण्यासाठी?",
        options: ["chmod +x", "chmox run", "exec on", "x mode"],
        correct: 0,
      },
      {
        question: "बॅश script चा shebang कोणता?",
        options: ["#!/bin/bash", "#!script", "@!/bash", "!#sh"],
        correct: 0,
      },
      {
        question: "script कुठे ठेवल्यास कुठूनही चालते?",
        options: ["~/bin", "~/storage", "/sdcard", "~/.termux"],
        correct: 0,
      },
    ],
    related: ["termux-editors", "termux-widget", "linux-commands"],
    prev: "termux-editors",
    next: "termux-git",
  },
  {
    slug: "termux-git",
    categoryId: "termux",
    title: "Git आणि GitHub",
    marathiTitle: "Git म्हणजे काय — version control, commit आणि GitHub वर push",
    level: "intermediate",
    minutes: 20,
    summary: "Git install, repo तयार करणे, commits आणि GitHub वर code push करणे.",
    sections: [
      {
        title: "Git म्हणजे काय?",
        content: "Git हा version control system आहे — code च्या प्रत्येक बदलाची history ठेवतो.\ngit add ने बदल stage होतात, git commit ने ते history मध्ये नोंदवतात, git push ने ते GitHub वर जातात.\nचुकीचा बदल असेल तर commit परत करता येतो (git revert). GitHub हे code साठी online home आहे.",
      },
      {
        title: "का शिकावे? Git चे फायदे आणि महत्त्व",
        content: "कोणताही serious project, freelancing, किंवा team काम GitHub शिवाय चालत नाही.\nप्रत्येक बदलाचा record असल्याने निर्धास्त प्रयोग करता येतात. फोनवरूनही स्वतःचा repo ठेवणे ही टेक सवय आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ commit message अस्पष्ट लिहिणे — history वाचणे कठीण होते.\n✗ token/keys repo मध्ये push करणे — त्याआधी .gitignore मध्ये add करा.\n✗ git add . ने अनावश्यक फाइल्स टाकणे — node_modules, backup वगैरे वगळा.\n✗ remote वर address चुकवणे — push fail होतो; काळजीपूर्वक copy करा.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "repo तयार करून पहिला commit आणि GitHub push करा.",
        code: `pkg install git

git config --global user.name "tumeni"
git config --global user.email "tumeni@example.com"

mkdir myrepo
cd myrepo
echo "माझा पहिला project" > README.md

git init
git add README.md
git commit -m "पहिला commit"

git remote add origin https://github.com/termux-learn-crypto/myrepo.git
git push -u origin main`,
        codeLanguage: "bash",
        output: `[main (root-commit) 3f2a9c1] पहिला commit
 1 file changed, 1 insertion(+)
...
To https://github.com/termux-learn-crypto/myrepo.git
 * [new branch] main -> main`,
      },
      {
        title: "सारांश",
        content: "git init → add → commit → remote add → push. config एकदाच करा. token आणि secrets कधीही commit करू नका.\nपुढील धड्यात SSH — दुसर्या machine वर secure connection.",
      },
    ],
    practiceQuestions: [
      "git commit आणि git push मध्ये फरक काय?",
      ".gitignore मध्ये काय ठेवतात?",
      "पहिल्यांदा कोणती config commands आवश्यक?",
    ],
    quiz: [
      {
        question: "बदल history मध्ये नोंदण्यासाठी?",
        options: ["git commit", "git push", "git pull", "git save"],
        correct: 0,
      },
      {
        question: "GitHub वर code जाण्यासाठी?",
        options: ["git push", "git sync", "git upload", "git send"],
        correct: 0,
      },
      {
        question: "repo नव्याने सुरू करण्यासाठी?",
        options: ["git init", "git start", "git new", "git create"],
        correct: 0,
      },
    ],
    related: ["termux-scripts", "digital-skills", "termux-ssh"],
    prev: "termux-scripts",
    next: "termux-ssh",
  },
  {
    slug: "termux-ssh",
    categoryId: "termux",
    title: "SSH वापर",
    marathiTitle: "SSH म्हणजे काय — remote server सोबत secure connection",
    level: "intermediate",
    minutes: 15,
    summary: "openssh install, SSH keys तयार करणे आणि remote server मध्ये log in करणे.",
    sections: [
      {
        title: "SSH म्हणजे काय?",
        content: "SSH (Secure Shell) ने एका machine वरून दुसर्या machine वर encrypted connection जाते.\nssh user@server ने login होते. Keys (id_ed25519) पासवर्डपेक्षा सुरक्षित — जरी कोणी username ठाऊक असेल तरी key शिवाय आत येऊ शकत नाही.\nसर्वाधिक सामान्य वापर: server hosting, VPS, GitHub (git@github.com).",
      },
      {
        title: "का शिकावे? SSH चे फायदे आणि महत्त्व",
        content: "Server deploy, VPS management आणि सुरक्षित डेटा ट्रान्सफर सर्व काही SSH वर चालते.\nफोनवरून server control करणे हेच termux च्या powerhouse उपयोगांपैकी एक आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ पासवर्ड login वर ठेवणे — प्रयत्नांचे आक्रमण होऊ शकते; keys वापरा.\n✗ private key (id_ed25519) कोणालाही देणे — ती कधीही share करू नका; public key सुरक्षित.\n✗ ssh-keygen मध्ये passphrase रिकामा ठेवणे — key चोरीला गेल्यास विपत्ती.\n✗ अनोळखी host fingerprint हा host key वर राहणे — पहिल्या वेळेला खात्री करा.",
      },
      {
        title: "SSH keys आणि login — उदाहरण",
        content: "key pair तयार करून server वर upload करा आणि लॉगिन करा.",
        code: `pkg install openssh

# key तयार करणे
ssh-keygen -t ed25519 -C "tumeni@phone"

# public key दाखवा
cat ~/.ssh/id_ed25519.pub

# server मध्ये login
ssh user@server.com`,
        codeLanguage: "bash",
        output: `user@server.com: ~ $
# अशी prompt आली की तुम्ही remote server मध्ये आहात`,
      },
      {
        title: "सारांश",
        content: "ssh-keygen -t ed25519 → public key server वर → ssh user@server. पासवर्डऐवजी keys — सुरक्षित आणि सोयीचे.\nपुढील धड्यात स्वतःचा local web server आणि remote shell.",
      },
    ],
    practiceQuestions: [
      "SSH म्हणजे काय आणि कशासाठी वापरतात?",
      "private key ची काळजी कशी घ्यावी?",
      "SSH keys तयार करण्याची command?",
    ],
    quiz: [
      {
        question: "SSH keys तयार करण्यासाठी?",
        options: ["ssh-keygen", "ssh-gen", "ssh-new", "keygen ssh"],
        correct: 0,
      },
      {
        question: "कोणती key share करता येते?",
        options: ["public", "private", "दोन्ही", "काही नाही"],
        correct: 0,
      },
      {
        question: "SSH सुरक्षा कशी असते?",
        options: ["encrypted", "open text", "base64", "password only"],
        correct: 0,
      },
    ],
    related: ["termux-git", "termux-server", "linux-commands"],
    prev: "termux-git",
    next: "termux-server",
  },
  {
    slug: "termux-server",
    categoryId: "termux",
    title: "Local web server",
    marathiTitle: "Server म्हणजे काय — phone वर websites और remote shell",
    level: "advanced",
    minutes: 20,
    summary: "python -m http.server, node server आणि sshd ने remote access — phone हा server.",
    sections: [
      {
        title: "Web server म्हणजे काय?",
        content: "Web server हा HTTP requests ला उत्तर देतो. python -m http.server 8080 एक सोपा local server तयार करतो — त्याच wifi वरचा दुसरा device तुमचे फाइल्स बघू शकतो.\ntermux-sshd (openssh च्या sshd) ने तुम्ही phone मध्ये remote login घेऊ शकता.\nIP शोधण्यासाठी ifconfig किंवा termux-wifi-connectioninfo.",
      },
      {
        title: "का शिकावे? server चे फायदे आणि महत्त्व",
        content: "स्वतःचे app/website दुसर्या device वर live बघणे, फाइल्स share करणे, आणि remote control — सर्व काही फोनवरच.\nAPI testing, mock server आणि local hosting चे मूलभूत कौशल्य मिळते.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ दुसर्या device वर IP चुकीचा वापर करणे — ifconfig/किंवा ip addr ने नेमका wifi IP पहा.\n✗ firewall/port ब्लॉक असल्यास access होत नाही — 8000-8080 चा वापर करा.\n✗ सार्वजनिक wifi वर सर्व फाइल्स open करणे — जोखीम समजा; फक्त आवश्यक folder serve करा.\n✗ sshd आधी set-password न करणे — पहिल्या वेळी passwd व समजीकरण करा.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "static site ला serve करून remote shell setup करा.",
        code: `mkdir www
cd www
echo "हाय Termux!" > index.html

# HTTP server
python -m http.server 8080

# दुसर्या terminal
ifconfig

# remote shell
pkg install openssh
whoami
passwd
sshd
# मग computer वरून:
# ssh 192.168.x.x -l u0_a123 -p 8022`,
        codeLanguage: "bash",
        output: `Serving HTTP on 0.0.0.0 port 8080 ...
192.168.1.7
sshd started on port 8022`,
      },
      {
        title: "सारांश",
        content: "python -m http.server 8080 लोकल server; ifconfig ने IP; passwd + sshd ने remote login. फोन लहान server बनू शकतो.\nपुढील धड्यात Node.js आणि npm — JavaScript आधारित tools.",
      },
    ],
    practiceQuestions: [
      "http.server ची command आणि default port कोणता?",
      "device चा wifi IP कसा कळेल?",
      "remote login सुरू करण्यासाठी कोणती दोन steps?",
    ],
    quiz: [
      {
        question: "HTTP server सुरू करण्यासाठी?",
        options: ["python -m http.server", "run server", "serve start", "http on"],
        correct: 0,
      },
      {
        question: "remote login करण्यासाठी termux मध्ये कोणता daemon?",
        options: ["sshd", "httpd", "nginx", "apache"],
        correct: 0,
      },
      {
        question: "IP पाहण्यासाठी कोणती command?",
        options: ["ifconfig", "ipconfig", "netip", "wifi ip"],
        correct: 0,
      },
    ],
    related: ["termux-ssh", "termux-nodejs", "html-basics"],
    prev: "termux-ssh",
    next: "termux-nodejs",
  },
  {
    slug: "termux-nodejs",
    categoryId: "termux",
    title: "Node.js आणि npm",
    marathiTitle: "Node.js म्हणजे काय — फोनवर JavaScript runtime आणि npm packages",
    level: "intermediate",
    minutes: 20,
    summary: "Node.js install, प्रथम program आणि npm packages सह छोटा server.",
    sections: [
      {
        title: "Node.js म्हणजे काय?",
        content: "Node.js हा browser बाहेर JavaScript चालवणारा runtime आहे — म्हणजे फोनवर command line programs आणि servers लिहिता येतात.\nnpm हा त्याचा package manager आहे — कोणत्याही लोकप्रिय library एका command मध्ये install होते.\nSyntax मिळते जी frontend (web) बरोबर सारखी — संकल्पना सोपी होते.",
      },
      {
        title: "का शिकावे? Node.js चे फायदे आणि महत्त्व",
        content: "Web APIs, discord bots, API servers, tools — सर्व काही JavaScript मध्ये लिहिता येते.\nnpm ecosystem विपुल आहे — जवळपास प्रत्येक गरजेचे package सापडते. फोनवर practice करणे सोपे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ node_modules repo मध्ये push करणे — .gitignore मध्ये टाका.\n✗ npm install -g प्रत्येक वेळी — कदाचित अनेक upgrade व IPL; प्राधान्य local install.\n✗ port व्यस्त असल्यास listen fail — port बदला किंवा प्रथम kill करा.\n✗ async code रटून करणे — promises/await नीट समजून घ्या.",
      },
      {
        title: "प्रथम Node.js program — उदाहरण",
        content: "install, version पहा, छोटा server चालवा.",
        code: `pkg install nodejs

node -v
npm -v

cat > server.js <<'EOF'
const http = require("http");
http.createServer((req, res) => {
  res.end("हाय from Node!");
}).listen(3000, () => console.log("listening on 3000"));
EOF

node server.js`,
        codeLanguage: "bash",
        output: `v22.9.0
10.9.2
listening on 3000`,
      },
      {
        title: "सारांश",
        content: "node -v/npm -v वापरून पडताळा, server.js ने http server, npm आज्ञा packages साठी. ब्राऊझर मध्ये localhost:3000 खोलल्यावर output दिसते.\nपुढील धड्यात SQLite — phone वर database.",
      },
    ],
    practiceQuestions: [
      "node आणि npm मध्ये फरक काय?",
      "Node.js server default port कोणता दिला?",
      "npm install package कुठे ठेवतो?",
    ],
    quiz: [
      {
        question: "Node.js मध्ये http server port कोणता वापरला?",
        options: ["3000", "8080", "80", "9000"],
        correct: 0,
      },
      {
        question: "package install करण्यासाठी?",
        options: ["npm install", "npm add", "npm get", "node install"],
        correct: 0,
      },
      {
        question: "npm install ठेवते कोठे?",
        options: ["node_modules", "src", "packages", "lib"],
        correct: 0,
      },
    ],
    related: ["termux-server", "termux-sqlite", "termux-scripts"],
    prev: "termux-server",
    next: "termux-sqlite",
  },
  {
    slug: "termux-sqlite",
    categoryId: "termux",
    title: "SQLite database",
    marathiTitle: "SQLite म्हणजे काय — phone वर database table तयार करणे",
    level: "intermediate",
    minutes: 20,
    summary: "SQLite install, table तयार करणे, data घालणे आणि query करणे.",
    sections: [
      {
        title: "SQLite म्हणजे काय?",
        content: "SQLite हा एक फाइल आधारित database आहे — server ची गरज नसते. एक छोटी .db फाइल मध्ये संपूर्ण डेटा.\nsqlite3 notes.db ने database उघडते. CREATE TABLE ने रचना बनते, INSERT ने data जातो, SELECT ने data परत येतो.\nफोनवर छोटे apps ला single file database पुरेशी असते.",
      },
      {
        title: "का शिकावे? SQLite चे फायदे आणि महत्त्व",
        content: "कोणत्याही app मध्ये डेटा जतन करणे आवश्यक — notes, todo, expense, सर्वात सोपे आहे SQLite.\nSQL भाषेची मूलभूत शिकवण मिळते जी सर्व databases मध्ये सारखीच वापरली जाते.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ ; विसरणे — SQL command end होत नाही.\n✗ बॅकअप शिवाय db फाइल डिलीट करणे — data कायमचा गेल्याचे.\n✗ primary key वर विश्वास नसणे — duplicate data निर्माण होतो.\n✗ गोपनीय data plain db मध्ये — आवश्यक असल्यास encryption विचार करा.",
      },
      {
        title: "SQLite उदाहरण",
        content: "database तयार करून table मध्ये data ठेवा आणि वाचा.",
        code: `pkg install sqlite

sqlite3 notes.db

CREATE TABLE notes (
  id INTEGER PRIMARY KEY,
  text TEXT,
  created TEXT DEFAULT (datetime('now'))
);

INSERT INTO notes (text) VALUES ('पहिली नोंद');
INSERT INTO notes (text) VALUES ('दुसरी नोंद');

SELECT * FROM notes;
.headers on
SELECT * FROM notes;
.quit`,
        codeLanguage: "bash",
        output: `1|पहिली नोंद
2|दुसरी नोंद

id|text|created
1|पहिली नोंद|2026-09-18 ...
2|दुसरी नोंद|2026-09-18 ...`,
      },
      {
        title: "सारांश",
        content: "sqlite3 file.db → CREATE TABLE → INSERT → SELECT. SQL ही सर्वत्र एकच भाषा आहे.\nपुढील धड्यात Termux:API — phone sensors आणि features मध्ये access.",
      },
    ],
    practiceQuestions: [
      "SQLite मध्ये database कशी साठते?",
      "नवीन table तयार करण्याचे statement कोणते?",
      "data वाचण्यासाठी कोणती command?",
    ],
    quiz: [
      {
        question: "SQLite database एक ची फाइल का म्हणतात?",
        options: ["server नाही", "ते पूर्ण मोठे आहे", "मेमरी मध्ये", "फाइल नाही"],
        correct: 0,
      },
      {
        question: "table तयार करण्यासाठी?",
        options: ["CREATE TABLE", "NEW TABLE", "MAKE TABLE", "ADD TABLE"],
        correct: 0,
      },
      {
        question: "data वाचण्यासाठी कोणते statement?",
        options: ["SELECT", "GET", "READ", "SHOW"],
        correct: 0,
      },
    ],
    related: ["termux-nodejs", "python-sqlite-databases", "termux-api"],
    prev: "termux-nodejs",
    next: "termux-api",
  },
  {
    slug: "termux-api",
    categoryId: "termux",
    title: "Termux:API",
    marathiTitle: "Termux:API म्हणजे काय — battery, sensors, clipboard, notifications",
    level: "advanced",
    minutes: 18,
    summary: "Termux:API add-on आणि termux-api package ने फोनच्या हार्डवेअर मध्ये scripts पासून access.",
    sections: [
      {
        title: "Termux:API म्हणजे काय?",
        content: "Termux:API हा एक अलग add-on app आहे (F-Droid वर) जो termux-api package सह फोनच्या सुविधा scripts मध्ये उघडतो.\nbattery status, clipboard, toast, notifications, sensors, camera, vibrate, TTS — सर्व command प्रमाणे उपलब्ध.\nएकदा install केले की bash scripts मध्ये हे सर्व वापरता येते.",
      },
      {
        title: "का शिकावे? Termux:API चे फायदे आणि महत्त्व",
        content: "Automation आणि personal tools साठी ही गुप्त भुजा आहे — म्हणजे स्वतःचे notifications, battery watchdog, clipboard manager स्वतः बनवता येते.\nTasker च्या बरोबरीने हा set अधिक शक्तिशाली बनतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ API app install न करता command चालवणे — access denied.\n✗ termux-api package install न करणे — commands सापडत नाहीत.\n✗ sensors/battery open करणे directory प्रमाणे — app grant करणे आवश्यक.\n✗ सर्व permissions एकत्र मिळणे — कमीत कमी permissions देणे उत्तम.",
      },
      {
        title: "प्रत्यक्ष उदाहरण",
        content: "सामान्य API commands वापरून पहा.",
        code: `# add-on app: F-Droid -> Termux:API (install)
pkg install termux-api

# battery
termux-battery-status

# clipboard
termux-clipboard-set "नमस्कार"
termux-clipboard-get

# notification
termux-notification --title "टेस्ट" --content "ही एक सूचना आहे"

# toast
termux-toast "हाय!"

# text to speech
termux-tts-speak "मराठी भाषा बोलते"`,
        codeLanguage: "bash",
        output: `{
  "status": "charging",
  "percentage": 82,
  "temperature": 33.2
}
नमस्कार`,
      },
      {
        title: "सारांश",
        content: "Termux:API app + termux-api package. battery/clipboard/notification/TTS directorly commands मध्ये. हार्डवेअर scripts मध्ये वापरणे — कल्पना करा आपले tool.\nपुढील धड्यात shortcuts — Termux:Widget.",
      },
    ],
    practiceQuestions: [
      "Termux:API वापरायला कोणते दोन गोष्टी आवश्यक?",
      "battery स्थिती कशी पाहाल?",
      "notification पाठवण्याची command?",
    ],
    quiz: [
      {
        question: "battery status पाहण्यासाठी?",
        options: ["termux-battery-status", "battery status", "power on", "termux power"],
        correct: 0,
      },
      {
        question: "screen वर थोडा message दाखवण्यासाठी?",
        options: ["termux-toast", "echo", "termux-print", "notify"],
        correct: 0,
      },
      {
        question: "Termux:API काय आहे?",
        options: ["अलग add-on app", "package", "theme", "game"],
        correct: 0,
      },
    ],
    related: ["termux-packages", "termux-widget", "android-basics"],
    prev: "termux-sqlite",
    next: "termux-widget",
  },
  {
    slug: "termux-widget",
    categoryId: "termux",
    title: "Termux:Widget",
    marathiTitle: "Termux:Widget म्हणजे काय — home screen वर shortcuts",
    level: "advanced",
    minutes: 15,
    summary: "Termux:Widget add-on ने home screen वर script shortcuts तयार करणे.",
    sections: [
      {
        title: "Termux:Widget म्हणजे काय?",
        content: "Termux:Widget हा add-on आहे जो ~/.shortcuts आणि ~/.shortcuts/icons मधील scripts home screen widget मध्ये दाखवतो.\n~/.shortcuts/tasks मधली scripts देखील command-runner मध्ये येतात.\nम्हणजे एकट्या tap ने script चालते — server start करा, status पाहा, काहीही.",
      },
      {
        title: "का शिकावे? Widget चे फायदे आणि महत्त्व",
        content: "सर्वाधिक वापरायच्या action साठी home screen त्वरित tap — फॅन्सी app ची गरज नाही.\nतुमची scripts एका बटनासारखी बनतात.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ scripts ला executable न बनवणे — widget tap केल्यावर चालत नाही.\n✗ ~/.shortcuts निर्माण न केल्यास widget रिक्त — ठिकाण बरोबर तयार करा.\n✗ shortcut मध्ये दीर्घ output आणणे — widget मध्ये दिसू शकत नाही; file output निवडा.\n✗ background खर्च वाढणे — जास्त widget टाळा.",
      },
      {
        title: "Widget shortcut — उदाहरण",
        content: "script तयार करून widget मध्ये जोडा.",
        code: `mkdir -p ~/.shortcuts

cat > ~/.shortcuts/server.sh <<'EOF'
#!/bin/bash
cd ~/www
python -m http.server 8080
EOF

chmod +x ~/.shortcuts/server.sh

# home screen वर long-press -> Widgets ->
# Termux:Widget -> 1x1 shortcut निवडा`,
        codeLanguage: "bash",
        output: "# tap केल्यावर script चालते आणि http.server सुरू होते",
      },
      {
        title: "सारांश",
        content: "scripts ~/.shortcuts मध्ये ठेवा, executable करा, widget जोडा. आता एकच tap मध्ये तुमचे tool.\nपुढील धड्यात Tasker सह automation.",
      },
    ],
    practiceQuestions: [
      "widget scripts कुठे ठेवतात?",
      "shortcut चालण्यासाठी कोणती शर्त?",
      "widget मध्ये scripts जोडण्याचे स्टेप्स सांगा.",
    ],
    quiz: [
      {
        question: "widget scripts कुठे असतात?",
        options: ["~/.shortcuts", "~/bin", "~/.termux", "~/scripts"],
        correct: 0,
      },
      {
        question: "widget script executable करण्यासाठी?",
        options: ["chmod +x", "chmod 644", "run mode", "exec flag"],
        correct: 0,
      },
      {
        question: "widget जोडण्यासाठी कोणती पहिली step?",
        options: ["long-press home", "Open termux", "restart", "app update"],
        correct: 0,
      },
    ],
    related: ["termux-scripts", "termux-api", "termux-tasker"],
    prev: "termux-api",
    next: "termux-tasker",
  },
  {
    slug: "termux-tasker",
    categoryId: "termux",
    title: "Termux:Tasker",
    marathiTitle: "Tasker म्हणजे काय — Termux सह automation आणि job scheduler",
    level: "advanced",
    minutes: 20,
    summary: "Termux:Tasker integration आणि termux-job-scheduler ने background jobs.",
    sections: [
      {
        title: "Termux:Tasker म्हणजे काय?",
        content: "Tasker हे एक automation app आहे (कार्य: वेळ/ठिकाण/इव्हेंट वर actions). Termux:Tasker हा add-on Tasker ला Termux scripts चालवू देणाऱ्या interface चा पूल आहे.\nTasker task मध्ये Termux:Tasker action जोडून bash command/script चालवता येते, आणि output ला variable मध्ये घेता येते.\ntermux-job-scheduler हा packages-impl ज्याच्यासाठी time-based background jobs देतो.",
      },
      {
        title: "का शिकावे? Tasker चे फायदे आणि महत्त्व",
        content: "जेव्हा काही होऊ तेव्हा काही करायचं — उदाहरणार्थ office मध्ये पोहोचल्यावर घरचा सर्व्हर बंद करणे, battery कमी असेल तर power report.\nहे real power-use automation आहे — फोन हा स्मार्ट control panel बनतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ scripts मध्ये error असल्यास Tasker काहीच दिसत नाही — टेस्ट करूनच automation बांधा.\n✗ job-interval खूप कमी — battery drain होतो.\n✗ Tasker app grants न देणे — Termux:Tasker काम करत नाही.\n✗ असंख्य permission granting — फक्त आवश्यक ते देणे आवश्यक.",
      },
      {
        title: "background job — उदाहरण",
        content: "scheduler install करून दरतास नवीन script चालवा.",
        code: `pkg install termux-job-scheduler

# दर 60 min ने backup script
termux-job-scheduler \
  --interval 3600 \
  --script ~/bin/backup.sh

# expired jobs पाहणे
termux-job-scheduler --list`,
        codeLanguage: "bash",
        output: `Job scheduled: id 4, interval 3600s
Scheduled jobs:
id 4  interval 3600s  script ~/bin/backup.sh`,
      },
      {
        title: "सारांश",
        content: "Tasker + Termux:Tasker ही event-driven automation, termux-job-scheduler हे periodic background jobs. दोघेही तुमचा फोन आपोआप काम करू देतात.\nपुढील धड्यात boot नंतर automation — Termux:Boot.",
      },
    ],
    practiceQuestions: [
      "Tasker मध्ये Termux script कसे चालवतात?",
      "periodic job साठी कोणते package?",
      "job interval 3600 म्हणजे काय?",
    ],
    quiz: [
      {
        question: "periodic job ला कोणता package वापरतात?",
        options: ["termux-job-scheduler", "termux-api", "cron", "alarm"],
        correct: 0,
      },
      {
        question: "3600 seconds म्हणजे?",
        options: ["1 तास", "1 मिनिट", "1 दिवस", "10 मिनिटे"],
        correct: 0,
      },
      {
        question: "Tasker संगत Termux add-on कोणता?",
        options: ["Termux:Tasker", "Termux:API", "Termux:Boot", "Termux:Widget"],
        correct: 0,
      },
    ],
    related: ["termux-api", "termux-widget", "termux-boot"],
    prev: "termux-widget",
    next: "termux-boot",
  },
  {
    slug: "termux-boot",
    categoryId: "termux",
    title: "Termux:Boot",
    marathiTitle: "Termux:Boot म्हणजे काय — फोन सुरू झाल्यावर सर्व्हरस स्वयंचलित",
    level: "advanced",
    minutes: 15,
    summary: "Termux:Boot add-on आणि ~/.termux/boot scripts ने स्वतःचे services आपोआप सुरू होतात.",
    sections: [
      {
        title: "Termux:Boot म्हणजे काय?",
        content: "Termux:Boot हा add-on आहे जो फोन boot झाल्यावर ~/.termux/boot फोल्डरतील सर्व scripts चालवतो.\nmkdir -p ~/.termux/boot आणि scripts मध्ये sshd सुरू करणे, services begin, sync वगैरे लिहिता येते.\nअशाप्रकारे फोन boot होताच घरगुती server तयार होतो.",
      },
      {
        title: "का शिकावे? Termux:Boot चे फायदे आणि महत्त्व",
        content: "Reboot नंतर स्वतः हाताने सर्व आहे का पुन्हा सुरू करावे? boot scripts हे सांभाळतात — server हा नेहमीच उपलब्ध राहतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ scripts current priority असे नाही — boot velocity वर चालतात; वेळ लागू शकतो.\n✗ एक script fail झाल्यास नंतरचे अडकणे — प्रत्येक script निरोगी असावा.\n✗ कुठलाही output दिसत नाही — लॉग फाइल वापरून debug करा.\n✗ बिन-based packages (sshd) run-status service मध्ये असल्यास kill होतात — termux-services वापरा.",
      },
      {
        title: "boot script — उदाहरण",
        content: "boot folder ला permissions द्या आणि sshd साठी script ठेवा.",
        code: `pkg install termux-services

mkdir -p ~/.termux/boot
chmod 700 ~/.termux/boot

cat > ~/.termux/boot/start-sshd.sh <<'EOF'
#!/bin/bash
termux-wake-lock
sshd
EOF
chmod +x ~/.termux/boot/start-sshd.sh

# नवीन session मध्ये:
sv-enable sshd`,
        codeLanguage: "bash",
        output: `[1] started: sshd
boot script will run on next reboot`,
      },
      {
        title: "सारांश",
        content: "Termux:Boot add-on + ~/.termux/boot scripts. Boot झाल्यावर sshd/servers आपोआप. फोन तयार नेहमीच server.\nपुढील धड्यात backup आणि restore — data सुरक्षित.",
      },
    ],
    practiceQuestions: [
      "boot scripts कोणत्या folder मध्ये असतात?",
      "boot script ला कोणती permission देतात?",
      "sv-enable sshd चा शोधा.",
    ],
    quiz: [
      {
        question: "boot scripts कुठे ठेवतात?",
        options: ["~/.termux/boot", "~/boot", "~/startup", "~/.init"],
        correct: 0,
      },
      {
        question: "boot scripts ला कोणती permission?",
        options: ["700", "644", "666", "000"],
        correct: 0,
      },
      {
        question: "services चालवण्यासाठी add-on कोणता?",
        options: ["Termux:Boot", "Termux:API", "Termux:Widget", "Tasker"],
        correct: 0,
      },
    ],
    related: ["termux-tasker", "termux-server", "termux-backup"],
    prev: "termux-tasker",
    next: "termux-backup",
  },
  {
    slug: "termux-backup",
    categoryId: "termux",
    title: "Backup आणि restore",
    marathiTitle: "Termux backup म्हणजे काय — packages, data आणि setup संपूर्ण सुरक्षा",
    level: "advanced",
    minutes: 18,
    summary: "tar ने home directory आणि packages list ला backup/restore करणे.",
    sections: [
      {
        title: "Backup म्हणजे काय?",
        content: "फोन गमावणे किंवा app remove करणे — सर्व environment पुन्हा बांधणे त्रासदायक.\ntar -czf ने home directory (आणि usr मधील packages) ची एक फाइल तयार होते.\nत्याही packages list पाठी ठेऊन restore नंतर एकाच वेळी install करता येते.",
      },
      {
        title: "का शिकावे? backup चे फायदे आणि महत्त्व",
        content: "महिन्याचे काम एका रात्रीत जाऊ शकते. नियमित backup म्हणजे mental peace — नवीन फोन घ्यावा, reinstall करा minites मध्ये.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ backup करण्याआधी terminal मध्ये काम चालू नसणे — open files जतन होऊ शकत नाहीत.\n✗ backup फाइल जगातल्या ठिकाणी ठेवणे — सुरक्षित offline जागा निवडा.\n✗ usr bin/complete backup न करता phpipam packages पक्षेतील बग — packages list तरी जतन करा.\n✗ restore करताना overwrite करणे — नवीन setup ला parallel ठेवा.",
      },
      {
        title: "backup आणि restore — उदाहरण",
        content: "संपूर्ण environment ची घट्ट फाइल तयार करा आणि परत आणा.",
        code: `# backup
pkg list-installed > ~/installed-packages.txt
cd ~
tar -czf ~/storage/downloads/termux-backup.tar.gz \
  home usr var

# restore
cd ~
tar -xzf ~/storage/downloads/termux-backup.tar.gz
pkg install $(cat ~/installed-packages.txt | cut -f1 -d' ')`,
        codeLanguage: "bash",
        output: `termux-backup.tar.gz 124 MB
Restored ok / packages re-installed`,
      },
      {
        title: "सारांश",
        content: "devices मध्ये tar backup, packages list सह. New phone वर restore काही मिनिटांत. नियमित backup — प्रत्येक आठवड्याला.\nपुढील आणि शेवटचा धड्यात security सवयी.",
      },
    ],
    practiceQuestions: [
      "home directory ला backup करण्याची command?",
      "packages list कुठे जतन करतात?",
      "restore करताना कोणती पहिली step?",
    ],
    quiz: [
      {
        question: "backup फाइल तयार करण्यासाठी कोणता tool?",
        options: ["tar", "zip", "cp -r", "mv"],
        correct: 0,
      },
      {
        question: "backup इथे लिहिला?",
        options: ["~/storage/downloads", "~/bin", "~/www", "/sdcard/tmp"],
        correct: 0,
      },
      {
        question: "packages list साठी command?",
        options: ["pkg list-installed", "pkg list", "pkg show", "pkg info"],
        correct: 0,
      },
    ],
    related: ["termux-files", "termux-packages", "termux-security"],
    prev: "termux-boot",
    next: "termux-security",
  },
  {
    slug: "termux-security",
    categoryId: "termux",
    title: "सुरक्षित वापर",
    marathiTitle: "Termux security म्हणजे काय — permissions, trusted sources, सुरक्षित सवयी",
    level: "advanced",
    minutes: 18,
    summary: "Termux चा सुरक्षित वापर — कोणते apps है विश्वसनीय, permissions कसे नियंत्रित करायचे.",
    sections: [
      {
        title: "Termux security म्हणजे काय?",
        content: "Termux हे एक शक्तिशाली environment आहे — ते शक्तिशाली असल्याने जबाबदारी देखील आवश्यक.\nकोणत्याही sources वरून सर्व commands चालवणे, लाखो permissions देणे — धोकादायक.\nमूलभूत सवयी: F-Droid चीच official आवृत्ती, आवश्यकपेक्षा कमी permissions, आणि काय चालवत आहात हे समजून चालवणे.",
      },
      {
        title: "का शिकावे? security चे फायदे आणि महत्त्व",
        content: "तुमचा फोन आता तुमचे अंतरंग ठिकाण आहे — बँक, मेसेजेस, SSH keys. एक चुकीची command किंवा अनोळखी script सारं उघडे करू शकते.\nसुरक्षा शिकणे म्हणजे फक्त या धड्याला शेवट नाही — हे सुरक्षेविषयी जाणीव म्हणजे cybersecurity शिक्षणाचा सुरुवातीचा दरवाजा आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ curl | bash style एक-लाइन installs — त्यात काय आहे ते पहा; अनोळखी वरून नाही.\n✗ storage मध्ये संपूर्ण / हे permissions — फक्त आवश्यक folder मध्ये द्या.\n✗ SSH keys आणि tokens खुल्या फाईलमध्ये ठेवणे — permissions वर नियंत्रण.\n✗ pkg अन्य repositories मध्ये add करणे — repo source verify करा.\n✗ जास्त battery/network खर्च — जास्त background services टाळा.",
      },
      {
        title: "आधारभूत सवयी",
        content: "सुरुवात करण्यापूर्वी ह्या पायऱ्या प्रत्येक use मध्ये ठेवा.",
        code: `# अपडेट आणि upgrade नियमित
pkg update && pkg upgrade

# स्थापित package ची माहिती पहा
pkg show package-name

# आवश्यक storage फक्त
termux-setup-storage

# आपली keys/private फाइल्स
chmod 700 ~/.ssh
chmod 600 ~/.ssh/*
chmod 600 ~/.git-credentials

# संशयास्पद घटक
pkg list-installed`,
        codeLanguage: "bash",
        output: "installed packages (ह्या चेकने जुने/संशयास्पद घटक सापडतात)"
      },
      {
        title: "सारांश आणि पुढे काय?",
        content: "आता तुमचा फोन एक संपूर्ण Linux toolbox आहे — files, packages, editors, scripts, git, servers, databases, API, automation, backup आणि हे सगळे सुरक्षित पद्धतीने.\nपुढे जाण्यासाठी: Linux शिका खोलवर (linux category), cybersecurity (cyber), आणि Scripting/Node projects.\nहाच path तुम्हाला त्यांच्या learning path मध्ये पूर्णपणाच नेईल.",
      },
    ],
    practiceQuestions: [
      "Termux मध्ये सुरक्षित install साठी कोणती source निवडतात?",
      "files permissions कसे fixed करता येतील?",
      "अनोळखी एक-लाइन install कशी टाळाल?",
    ],
    quiz: [
      {
        question: "Termux ची official आवृत्ती कुठून?",
        options: ["F-Droid", "Play Store", "Website", "Telegram"],
        correct: 0,
      },
      {
        question: "curl | bash style install करताना?",
        options: ["आधी code पहा", "direct चालवा", "कधी नाही", "username द्या"],
        correct: 0,
      },
      {
        question: "SSH private key ला कोणती permission?",
        options: ["600", "777", "644", "755"],
        correct: 0,
      },
    ],
    related: ["termux-backup", "cyber-basics", "computer-security"],
    prev: "termux-backup",
  },
];