import type { Tutorial } from "@/data/tutorials";

export const termuxLessons: Tutorial[] = [
{
    slug: "termux-basics",
    categoryId: "termux",
    title: "Termux Basics",
    marathiTitle: "Termux - Android वरील Linux टर्मिनल",
    level: "beginner",
    minutes: 12,
    summary: "Termux म्हणजे Android वर चालणारा terminal - त्याद्वारे संगणकाप्रमाणे कमांड्स चालवता येतात.",
    sections: [
      {
        title: "का शिकावे? Termux - Android वरील Linux टर्मिनल चे फायदे आणि महत्त्व",
        content: "\"Termux - Android वरील Linux टर्मिनल\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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
      },
    ],

practiceQuestions: [
      "Termux - Android वरील Linux टर्मिनल चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Termux - Android वरील Linux टर्मिनल वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "Termux मध्ये पॅकेज install करण्यासाठी कोणती command?",
        options: ["apt install", "pkg install", "install", "pip install"],
        correct: 1,
      },
      {
        question: "Termux मध्ये Python install कशी करतात?",
        options: ["pkg install python", "install python", "python setup", "pip python"],
        correct: 0,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Termux - Android वरील Linux टर्मिनल", "view transitions — थर बदल", "विज्ञानातील मजेशीर तथ्य", "HTML Forms"],
        correct: 0,
      },
],
    related: ["linux-basics", "termux-python", "linux-commands"],
    next: "termux-python",
  },
{
    slug: "termux-python",
    categoryId: "termux",
    title: "Termux वर Python",
    marathiTitle: "फोनवर Python Programs",
    level: "intermediate",
    minutes: 15,
    summary: "Termux मध्ये Python install करून programs कसे चालवायचे.",
    sections: [
      {
        title: "फोनवर Python Programs म्हणजे काय?",
        content: "Termux मध्ये Python install करून programs कसे चालवायचे.\npkg install python\n\nआता फाइल बनवा:\nnano or vi or nano code editor वापरून .py file बनवा\n\nमग python filename.py ने run करा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? फोनवर Python Programs चे फायदे आणि महत्त्व",
        content: "\"फोनवर Python Programs\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "Python install आणि चालवणे",
        content: "pkg install python\n\nआता फाइल बनवा:\nnano or vi or nano code editor वापरून .py file बनवा\n\nमग python filename.py ने run करा.\n\nModules install करण्यासाठी:\npip install <package>",
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
    ],

practiceQuestions: [
      "फोनवर Python Programs चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "फोनवर Python Programs वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "Termux मध्ये Python फाइल run करण्यासाठी?",
        options: ["run file.py", "python file.py", "execute file.py", "py file.py"],
        correct: 1,
      },
      {
        question: "Python module install करण्यासाठी?",
        options: ["pkg install", "pip install", "module install", "npm install"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["फोनवर Python Programs", "view transitions — थर बदल", "Isolation — थर संदर्भ", "grid-auto — ऑटो विधान"],
        correct: 0,
      },
],
    related: ["termux-basics", "python-basics", "linux-basics"],
    prev: "termux-basics",
  }
];
