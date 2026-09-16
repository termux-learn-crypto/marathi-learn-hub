import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 2 — Value ठेवणे आणि तपासणे ===

export const JS2_LABEL = "JS · Level 2 — Value ठेवणे आणि तपासणे";

export const jsLevel2: Tutorial[] = [
  {
    slug: "js-variables",
    categoryId: "web",
    title: "JS Variables - let, const, var",
    marathiTitle: "Value ला नाव देणे — let आणि const",
    level: "beginner",
    minutes: 22,
    summary: "let/const/var चा फरक, naming नियम, assignment आणि constant value.",
    sections: [
      {
        title: "1. Value ला नाव का द्यायचं?",
        content: "मागील Level मध्ये आपण console.log मधे value थेट छापली. पण एखादी value पुन्हा-पुन्हा वापरायची असेल तर तिला नाव द्यावं लागतं.\nजसा शाळेत प्रत्येक विद्यार्थ्याला roll number असतो, तसं संगणकातल्या value ला variable देतो नाव. नाव म्हणजे \"संगणकाला बोलावण्याची ओळख\".\nचांगलं नाव कोड स्वतःच स्पष्ट करतं — \"x\" नाही, तर \"चहाचाRate\" असं अर्थपूर्ण नाव. नाव जितकं खोल, तितकी code वाचण्याची सोय.",
        code: `let चहाचाRate = 15;
console.log(चहाचाRate);`,
        codeLanguage: "js",
        output: "15",
      },
      {
        title: "2. let — बदलता येणारी value",
        content: "let ने बनवलेला variable नंतर बदलता येतो — ही सर्वात सामान्य निवड.\nlet वय = 20; असं लिहिल्यावर \"वय\" या नावात 20 धरलं जातं. नंतर वय = 21; लिहिल्यास value नवीन होते.\nएका scope मधे एक नाव फक्त एकदाच let ने घेता येतं; दुसऱ्यांदा let वय पुन्हा लिहिल्यास error येतो.",
        code: `let वय = 20;
console.log(वय CFG वय = 21;
console.log(वय);`,
        codeLanguage: "js",
        output: "20\n21",
      },
      {
        title: "3. const — स्थिर value",
        content: "const ने बनवलेला variable कायम स्थिर राहतो — value बदलू देत नाही. म्हणून स्थिर गोष्टींसाठी const.\nजसे cupsPrice, स्कूलName, कंपनीName — या value बदलायच्या नसतात.\nconst नंतर पुन्हा नवी value देण्याचा प्रयत्न केल्यास error येतो: TypeError. ही मुद्दामच असलेली त्रुटी आहे — म्हणजे बदल करू नये हे भाषा स्वतः सांगते.",
        code: `const cupPrice = 15;
console.log(cupPrice);
cupPrice = 20; // error`,
        codeLanguage: "js",
        output: "15",
      },
      {
        title: "4. var — जुनी रीत",
        content: "var ही JavaScript ची जुनी variable रीत. आजच्या कोड मधे ती टाळली जाते, कारण तिचा scope गोंधळ घालतो.\nvar फक्त जुना कोड वाचताना ओळखायची गरज आहे — स्वतः लिहिताना let/const वापरा.\nमहत्त्वाचा फरक: var function scope वापरतो, let/const block scope. म्हणजे {}, if, loop यांच्या आतला var बाहेरही दिसतो.",
        code: `var नाव = "सायली";
console.log(नाव);`,
        codeLanguage: "js",
        output: "सायली",
      },
      {
        title: "5. Naming नियम",
        content: "Variable नाव ठरवताना नियम:\n• अक्षराने, _ ने किंवा $ ने सुरू होऊ शकतं; अंकाने नाही.\n• मधे spaces नाहीत; मराठी अक्षरं वापरता येतात.\n• let, const, if सारखे जपलेले शब्द नाव म्हणून नकोत.\n• case-sensitive: \"वय\" आणि \"वय\" (मोठे अक्षर) वेगळे.\nसवय: जो बदलतो त्याला let, स्थिराला const.",
        code: `let नाव = "मराठी Learn Hub";
const स्थिर = 100;
// let 2नाव = 5;  // चुकीचं — अंकाने सुरूवात नाही`,
        codeLanguage: "js",
        output: "",
      },
    ],
    related: ["js-basics", "js-console", "html-basics", "python-variables", "css-structure-cascade"],
    next: "js-console",
    prev: "js-basics",
    quiz: [
      { question: "बदलता येणाऱ्या variable साठी कोणता शब्द?", options: ["const", "let", "var", "input"], correct: 1 },
      { question: "स्थिर value साठी?", options: ["let", "var", "const", "print"], correct: 2 },
      { question: "खालीलपैकी कोणते नाव चुकीचे?", options: ["नाव", "_id", "2गुण", "$x"], correct: 2 },
      { question: "const बदलल्यास काय होतं?", options: ["छापतं", "बदलतं", "Error", "काही नाही"], correct: 2 },
    ],
    practiceQuestions: [
      "let आणि const प्रत्येकी एक variable बनवा.",
      "अर्थपूर्ण मराठी नाव द्या.",
      "const वर बदल करून error दाखवा.",
    ],
    interviewQuestions: [
      "let, const, var यातील फरक सांगा.",
      "block scope म्हणजे काय?",
      "case-sensitive म्हणजे काय, मराठीत सांगा.",
    ],
    challenge: {
      prompt: "तुमच्या चहाविक्रीचं variable बनवा: const ने cup ची किंमत, let ने खरेदीची संख्या. मग एकूण उत्पन्न काढा आणि छापा.",
      expectedOutput: "एकूण किंमत",
    },
  },
  {
    slug: "js-console",
    categoryId: "web",
    title: "JS Console - console आणि Output",
    marathiTitle: "Console मध्ये परिणाम कसा दिसतो",
    level: "beginner",
    minutes: 16,
    summary: "console.log, console.table, console.error आणि output मधील फरक.",
    sections: [
      {
        title: "1. console आणि त्याची दैनंदिनी",
        content: "console ही JavaScript ची \"दैनंदिनी\" आहे — कोड काय करतो ते तिथे नोंदवलं जातं.\nconsole.log(value) — value मजकूर म्हणून छापतो.\nconsole.error(message) — लाल रंगात error दिसतो, debugging साठी.\nconsole.table(array) — table रूपात data दाखवतो, पटकन नजर टाकण्यासाठी सोपं.",
        code: `console.log("हे मजकूर");
console.error("हे चुकीचं");
console.table(["पुणे", "नागपूर", "कोल्हापूर"]);`,
        codeLanguage: "js",
        output: "हे मजकूर\nहे चुकीचं",
      },
      {
        title: "2. ब्राउझर मधे console उघडणं",
        content: "कुठलाही वेबपेज उघडा; right-click करून Inspect निवडा; Console टॅब उघडा.\nवरच्या पट्टीत console.log लिहून Enter दाबा — तेवढ्याच क्षणी value दिसते.\nही सर्वांत जलद \"प्रयोगशाळा\" आहे — HTML/CSS पेज उघडल्याशिवाय तुम्ही कोड तिथे चालवू शकता.",
        code: `console.log("नमस्कार, console!");
console.log(2 + 6);`,
        codeLanguage: "js",
        output: "नमस्कार, console!\n8",
      },
      {
        title: "3. टाईप तपासणी",
        content: "console.log typeof value सह लिहिल्यास type दिसतो — number, string, boolean.\nही तपासणी नवशिक्यासाठी महत्त्वाची: values कशा वाटतात — त्या आधी.\nउदा. \"5\" आणि 5 मध्ये फरक — पहिली string, दुसरी number. हेच गोंधळाचं मूळ असतं.",
        code: `console.log(typeof "5");
console.log(typeof 5);
console.log(typeof true);`,
        codeLanguage: "js",
        output: 'string\nnumber\nboolean',
      },
      {
        title: "4. Operator ची ताकद",
        content: "सर्व गणितांचे चिन्ह: + जोड, − वजा, * गुणाकार, / भाग, % बाकी.\n+ दोन संख्यांवर काम करतो तेव्हा बेरीज; पण मजकुरांवर असेल तर जुळणी (सांधले) होते.\nउदा. \"5\" + 5 चे उत्तर \"55\" (string), पण 5 + 5 म्हणजे 10 (number). हा एक common नवशिक्यांचा घोळ आहे.",
        code: `console.log(5 + 5);
console.log("5" + 5);
console.log(5 - 2);
console.log(5 % 2);`,
        codeLanguage: "js",
        output: '10\n55\n3\n1',
      },
      {
        title: "5. Output व्यवस्थित ठेवणं",
        content: "output चे नियोजन आधीच करा — कुठे काय छापायचं ते ठरवा.\nमराठी मजकूर आणि values एकत्र आणण्यासाठी template string वापरा:\nconsole.log(`untitled अशी एकामागे एक line बदलण्याची सोय उपलब्ध आहे`)",
        code: `let city = "पुणे";
console.log(\`मी \${city} मधे राहतो.\`);
console.log(\`माझा आवडता: \${city}\`);`,
        codeLanguage: "js",
        output: "मी पुणे मधे राहतो.\nमाझा आवडता: पुणे",
      },
    ],
    related: ["js-variables", "js-basics", "python-print", "html-basics", "css-structure-cascade"],
    next: "js-methods",
    prev: "js-variables",
    quiz: [
      { question: "error कोणती रीत लाल दाखवते?", options: ["console.log", "console.error", "console.table", "print"], correct: 1 },
      { question: "\"5\" + 5 काय?", options: ["10", "55", "50", "5"], correct: 1 },
      { question: "typeof 5 काय?", options: ["string", "number", "boolean", "js"], correct: 1 },
      { question: "जोडीदार output मधे string आणि number एकत्र?", options: ["+", "=", "*", "concat"], correct: 3 },
    ],
    practiceQuestions: [
      "पिंक आवडतो म्हणावं — असा console message द्या.",
      "type तीन values चे दाखवा.",
      "Template literal वापरून शहर आणि रंग एकत्र छापा.",
    ],
    interviewQuestions: [
      "console.table कधी उपयोगी?",
      "string आणि number + मधील फरक काय?",
      "template literal म्हणजे काय?",
    ],
    challenge: {
      prompt: "console मध्ये मराठी आणि संख्यांचं mix करत एक address दाखवा; नंतर typeof वापरून तो string आहे हे सिद्ध करा.",
      expectedOutput: "दाखवलेलं address",
    },
  },
];
