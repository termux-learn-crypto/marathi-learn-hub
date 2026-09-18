import type { Tutorial } from "@/data/tutorials";

export const linuxLessons: Tutorial[] = [
{
    slug: "linux-basics",
    categoryId: "linux",
    title: "Linux Basics",
    marathiTitle: "Linux - मुक्त संगणक ऑपरेटिंग सिस्टम",
    level: "beginner",
    minutes: 15,
    summary: "Linux ही मुक्त (open-source) ऑपरेटिंग सिस्टम आहे. मूलभूत commands शिका.",
    sections: [
      {
        title: "का शिकावे? Linux - मुक्त संगणक ऑपरेटिंग सिस्टम चे फायदे आणि महत्त्व",
        content: "\"Linux - मुक्त संगणक ऑपरेटिंग सिस्टम\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Linux म्हणजे काय?",
        content: "Linux ही एक free आणि open-source ऑपरेटिंग सिस्टम आहे. ती अनेक servers, smartphones आणि संगणकांवर चालते.\n\nLinux मध्ये सर्व काही file आहे - फाइल्स, directories, devices.\n\nTerminal (कमांड लाइन) वापरून आपण संगणकाशी संवाद साधतो. हे GUI पेक्षा जास्त शक्तिशाली आणि fast असते.",
        code: `# फाइल्स पाहणे
ls

# सध्याची directory
pwd

# directory बदलणे
cd /home/user

# नवीन फाइल बनवणे
touch test.txt

# फाइल वाचणे
cat test.txt

# directory बनवणे
mkdir new_folder

# फाइल कॉपी करणे
cp test.txt test_copy.txt

# फाइल हलवणे/रिनेम करणे
mv test_copy.txt renamed.txt

# फाइल डिलीट करणे
rm renamed.txt`,
        codeLanguage: "bash",
        output: "Desktop  Documents  Downloads\n/home/user\nहॅलो Linux!\n",
      },
    ],

practiceQuestions: [
      "Linux - मुक्त संगणक ऑपरेटिंग सिस्टम चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Linux - मुक्त संगणक ऑपरेटिंग सिस्टम वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "सध्याची directory बघण्यासाठी कोणती command?",
        options: ["ls", "pwd", "cd", "dir"],
        correct: 1,
      },
      {
        question: "नवीन directory बनवण्यासाठी कोणती command?",
        options: ["makedir", "mkdir", "newdir", "touch"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Linux - मुक्त संगणक ऑपरेटिंग सिस्टम", "AI Tools — ChatGPT, Gemini, Copilot (उपयोगाची ओळख)", "counters-lab — आपोआप क्रम", "f-strings - सुबक मजकूर कोड"],
        correct: 0,
      },
],
    related: ["termux-basics", "linux-permissions", "linux-navigation"],
    next: "linux-navigation",
  },
{
    slug: "linux-navigation",
    categoryId: "linux",
    title: "Linux Navigation",
    marathiTitle: "Filesystem Navigation - नेव्हिगेशन",
    level: "beginner",
    minutes: 12,
    summary: "Linux filesystem मध्ये cd, ls, pwd वापरून नेव्हिगेशन कसे करायचे.",
    sections: [
      {
        title: "Filesystem Navigation - नेव्हिगेशन म्हणजे काय?",
        content: "Linux filesystem मध्ये cd, ls, pwd वापरून नेव्हिगेशन कसे करायचे.\nLinux filesystem एक tree सारखी असते - वरून root (/) पासून सुरु होते आणि खाली directories.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Filesystem Navigation - नेव्हिगेशन चे फायदे आणि महत्त्व",
        content: "\"Filesystem Navigation - नेव्हिगेशन\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Filesystem समजून घेणे",
        content: "Linux filesystem एक tree सारखी असते - वरून root (/) पासून सुरु होते आणि खाली directories.\n\nमुख्य directories:\n• / - root directory\n• /home - user च्या फाइल्स\n• /etc - configuration files\n• /bin - program binaries\n• /tmp - temporary files\n\nRelative path (.) सध्याच्या directory पासून.\nAbsolute path (/) root पासून सुरु होतो.",
        code: `# absolute path
cd /home/user

# parent directory वर जाणे
cd ..

# home directory वर परत
cd ~

# directory content ls
ls -l    # detail list
ls -a    # hidden files

# tree मधील फाइल शोधणे
find /home -name "*.txt"

# पाथ मध्ये file आहे का तपासणे
file /etc/hostname`,
        codeLanguage: "bash",
      },
    ],

practiceQuestions: [
      "Filesystem Navigation - नेव्हिगेशन चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Filesystem Navigation - नेव्हिगेशन वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "parent directory मध्ये जाण्यासाठी काय वापरतात?",
        options: ["cd ..", "cd .", "cd ~", "cd /"],
        correct: 0,
      },
      {
        question: "hidden files बघण्यासाठी कोणती command?",
        options: ["ls", "ls -a", "list hidden", "ls -hidden"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Filesystem Navigation - नेव्हिगेशन", "तुलना — मोठे, लहान, समान", "breadcrumb — मार्ग दाखला", "उपयुक्त Linux Commands"],
        correct: 0,
      },
],
    related: ["linux-basics", "linux-permissions", "linux-commands"],
    prev: "linux-basics",
    next: "linux-permissions",
  },
{
    slug: "linux-permissions",
    categoryId: "linux",
    title: "Linux Permissions",
    marathiTitle: "Filesystem Permissions समजून घ्या",
    level: "intermediate",
    minutes: 15,
    summary: "read, write, execute permissions म्हणजे काय आणि chmod कसे वापरायचे.",
    sections: [
      {
        title: "का शिकावे? Filesystem Permissions समजून घ्या चे फायदे आणि महत्त्व",
        content: "\"Filesystem Permissions समजून घ्या\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Permissions म्हणजे काय?",
        content: "Linux मध्ये प्रत्येक फाइल आणि directory ला permissions असतात जे ठरवतात कोण ती file वाचू, बदलू किंवा run करू शकतो.\n\nतीन प्रकार:\n• read (r) - वाचणे\n• write (w) - बदलणे\n• execute (x) - run करणे\n\nतीन groups:\n• owner (u) - फाइलचा मालक\n• group (g) - ग्रुप\n• others (o) - इतर",
        code: `# permissions बघणे
ls -l

# chmod वापरून permissions बदलणे
# owner ला read+write+execute
chmod u+rwx file.sh

# सर्वांना read+execute
chmod a+rx file.sh

# numeric method
# 7=rwx 6=rw- 5=r-x 4=r--
chmod 755 script.sh
chmod 644 file.txt

# file कोणाची आहे ते बघणे
ls -l

# owner बदलणे
chown user:group file.txt`,
        codeLanguage: "bash",
        output: "-rw-r--r--  1 user group 123 Sep 04 12:00 file.txt\n",
      },
    ],

practiceQuestions: [
      "Filesystem Permissions समजून घ्या चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Filesystem Permissions समजून घ्या वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "numeric method मध्ये 7 म्हणजे काय?",
        options: ["read", "write", "read+write+execute", "execute+read"],
        correct: 2,
      },
      {
        question: "execute permission कोणत्या अक्षराने दर्शवतात?",
        options: ["r", "w", "e", "x"],
        correct: 3,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Filesystem Permissions समजून घ्या", "Enterprise App — सर्व Level 4 एकत्र", "clamp — लवचिक आकार", "Numbers आणि Math object"],
        correct: 0,
      },
],
    related: ["linux-navigation", "linux-basics", "linux-commands"],
    prev: "linux-navigation",
    next: "linux-commands",
  },
{
    slug: "linux-commands",
    categoryId: "linux",
    title: "Essential Linux Commands",
    marathiTitle: "उपयुक्त Linux Commands",
    level: "intermediate",
    minutes: 18,
    summary: "रोजच्या कामात लागणारे essential Linux commands शिका.",
    sections: [
      {
        title: "उपयुक्त Linux Commands म्हणजे काय?",
        content: "रोजच्या कामात लागणारे essential Linux commands शिका.\nFile management: cp — कॉपी; mv — हलवणे/रिनेम; rm — डिलीट; ln — link बनवणे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? उपयुक्त Linux Commands चे फायदे आणि महत्त्व",
        content: "\"उपयुक्त Linux Commands\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "रोजच्या कामातील commands",
        content: "File management: cp — कॉपी; mv — हलवणे/रिनेम; rm — डिलीट; ln — link बनवणे.\nText processing: grep — pattern शोधणे; cat — वाचणे; less — मोठा file आरामात वाचणे; wc — word count.\nSystem: ps — processes; kill — process थांबवणे; df — disk usage; free — memory.",
        code: `# फाइलमध्ये keyword शोधणे
grep "error" log.txt

# file मधील lines मोजणे
wc -l file.txt

# running processes
ps aux

# process थांबवणे
kill 1234

# disk usage
df -h

# memory
free -h

# इतिहास
history

# पॅकेज इन्स्टॉल (Ubuntu/Debian)
sudo apt install <package>`,
        codeLanguage: "bash",
      },
    ],

practiceQuestions: [
      "उपयुक्त Linux Commands चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "उपयुक्त Linux Commands वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "फाइलमध्ये keyword शोधण्यासाठी कोणती command?",
        options: ["search", "find", "grep", "scan"],
        correct: 2,
      },
      {
        question: "disk usage बघण्यासाठी कोणती command?",
        options: ["disk", "df", "dusage", "fdisk"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["उपयुक्त Linux Commands", "Links - एका पेजवरून दुसऱ्याकडे", "Filesystem Navigation - नेव्हिगेशन", "filter — दृश्य प्रभाव"],
        correct: 0,
      },
],
    related: ["linux-permissions", "linux-basics", "linux-navigation"],
    prev: "linux-permissions",
  }
];
