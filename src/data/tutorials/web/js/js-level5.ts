import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 5 — बुलियन, टेम्पलेट, Math आणि Classes ===
// js-level5 — Level 4 च्या related/next/prev refs ने मागणी केलेले
// ४ tutorials: js-booleans, js-template-literals, js-math, js-classes

export const JS5_LABEL = "JS · Level 5 — तर्क, मजकूर templates, गणित आणि Classes";

export const jsLevel5: Tutorial[] = [
  {
    slug: "js-booleans",
    categoryId: "web",
    title: "JS Booleans - true / false",
    marathiTitle: "जर/तर चा आधार — true आणि false",
    level: "beginner",
    minutes: 18,
    summary: "boolean हा निर्णयाचा दगड; तुलना operator बरोबर; falsy values.",
    sections: [
      {
        title: "1. boolean म्हणजे दोनच शक्यता",
        content: "boolean value फक्त दोन प्रकारची: true किंवा false.\nहेच if च्या कंसात चालवले जाते.\nउदा. 'पाऊस पडतोय' — हे true असू शकतं किंवा false; मधले काही नाही.\nसंगणकातील प्रत्येक निर्णय शेवटी boolean वर येऊन थांबतो.\nतुलना operators (<, >, ===, etc.) boolean देतात — म्हणूनच ते if सोबत घट्ट बसतात.",
        code: `console.log(10 > 5);
console.log(10 < 5);
console.log(10 === 10);`,
        codeLanguage: "js",
        output: "true\nfalse\ntrue",
      },
      {
        title: "2. falsy values — \"खोट्या\" वाटणाऱ्या",
        content: "काही values boolean हवे झाल्यावर false सारख्या वागतात — यांना falsy म्हणतात:\n• false\n• 0\n• \"\" (रिकामा string)\n• null\n• undefined\n• NaN\nउरलेल्या सर्व values truthy असतात (उदा. \"0\", \"false\", []).\nह्यामुळे if (नाव) लिहून 'नाव भरलं आहे का' हे तपासता येते — रिकामं असेल तर false.",
        code: `if ("") {
  console.log("दिसणार नाही");
} else {
  console.log("रिकामा string false");
}
if ("मराठी") {
  console.log("मराठी true");
}`,
        codeLanguage: "js",
        output: "रिकामा string false\nमराठी true",
      },
      {
        title: "3. ! (NOT) — उलट करणे",
        content: "! boolean उलट करतो: true → false, false → true.\nदुहेरी !! ने value चे boolean रूप मिळते (truthy/falsy तपासता येते).\nउदा. !!\"मराठी\" → true; !!\"\" → false.\nहे short, पण वाचायला जड — फक्त pattern समजा, code साठी Boolean(x) अधिक स्पष्ट.",
        code: `let रिकामे = "";
console.log(!true);
console.log(Boolean(रिकामे));`,
        codeLanguage: "js",
        output: "false\nfalse",
      },
      {
        title: "4. && आणि || — थोडक्यात",
        content: "&& (AND): दोन्ही true असल्यासच true.\n|| (OR): किमान एक true असल्यास true.\nमनातल्या गोष्टी:\n• if (वय >= 18 && परवाना) — 'आणि' दोन्ही हवे\n• if (नकद || UPI) — 'किंवा' पैकी एक\nshort-circuit: && मधे पहिली false दिसली की उरलेले तपासतच नाहीत.",
        code: `let वय = 20;
let परवाना = true;
console.log(वय >= 18 && परवाना);
console.log(वय >= 18 || परवाना);`,
        codeLanguage: "js",
        output: "true\ntrue",
      },
    ],
    quiz: [
      {
        question: "खालीलपैकी कोणती falsy value?",
        options: ["\"0\"", "0", "[]", "\"false\""],
        correct: 1,
      },
      {
        question: "Boolean(1) काय?",
        options: ["true", "false", "1", "error"],
        correct: 0,
      },
    ],
    related: ["js-conditionals", "js-comparisons", "js-functions"],
    next: "js-template-literals",
    prev: "js-functions",
  },
  {
    slug: "js-template-literals",
    categoryId: "web",
    title: "JS Template Literals - backtick मजकूर",
    marathiTitle: "Template Literals — ` सह मजकूर",
    level: "beginner",
    minutes: 16,
    summary: "backtick (``) मधे ${} ने variable/expression घातले जाते; multi-line सोपं.",
    sections: [
      {
        title: "1. सामान्य string विरुद्ध template",
        content: "आतापर्यंत '+' ने string जोडत होतो. पण ते वाचायला अवघड होऊ शकतं:\n\"नमस्कार \" + नाव + \", तुमचे \" + वय + \" वर्षे\"\ntemplate literal backtick ` मधे लिहितात आणि ${} मधे variable:\n`नमस्कार ${नाव}, तुमचे ${वय} वर्षे`\nहे सरळ आणि चुकीच्या jागा कमी. हेच आधुनिक शैली.",
        code: `let नाव = "सायली";
let वय = 16;
console.log(\`नमस्कार \${नाव}, वय \${वय}\`);`,
        codeLanguage: "js",
        output: "नमस्कार सायली, वय 16",
      },
      {
        title: "2. Multi-line — ओळी सहज",
        content: "सामान्य string मधे नवीन ओळ \\n ने द्यावी लागते. template literal मधे आपण थेट Enter दाबतो.\nम्हणजे पत्ता, बिल, संदेश — वास्तव आकारात लिहिता येतात.\nहीच सर्वात मोठी सोय: code ची रचना मजकुरासारखी दिसते.\nतपासा: खाली तीन ओळी output मिळतील.",
        code: `console.log(\`पहिली ओळ
दुसरी ओळ
तिसरी ओळ\`);`,
        codeLanguage: "js",
        output: "पहिली ओळ\ndुसरी ओळ\ntिसरी ओळ",
      },
      {
        title: "3. ${} — expression जोडणे",
        content: "${} मधे फक्त variable नाही — कोणतीही expression जाते:\n• ${2 + 3} → 5\n• ${नाव.toUpperCase()} → method call\n• ${पैसे > 100 ? \"जास्त\" : \"कमी\"} → अगदी if/else\nहे '' आणि \"\" प्रमाणे safe: आतले विरामचिन्हे वेगळे करण्याची गरज नाही.",
        code: `let पैसे = 250;
console.log(\`खिशात \${पैसे}₹ — \${पैसे > 100 ? \"जास्त\" : \"कमी\"}\`);`,
        codeLanguage: "js",
        output: "खिशात 250₹ — जास्त",
      },
    ],
    quiz: [
      {
        question: "template literal कोणत्या चिन्हांत लिहितात?",
        options: ["\"\"", "''", "``", "()"],
        correct: 2,
      },
      {
        question: "मधे variable कसे घालायचे?",
        options: ["+नाव+", "${नाव}", "(नाव)", "[नाव]"],
        correct: 1,
      },
    ],
    related: ["js-strings", "js-console", "js-functions"],
    next: "js-math",
    prev: "js-booleans",
  },
  {
    slug: "js-math",
    categoryId: "web",
    title: "JS Math - गणिताची हत्यारे",
    marathiTitle: "Math object — गणित",
    level: "intermediate",
    minutes: 20,
    summary: "round/floor/ceil, random, pow, max/min — अनेक Mathツール.",
    sections: [
      {
        title: "1. round / floor / ceil",
        content: "तीन गोल करण्याच्या पद्धती:\n• round(4.6) → 5 (जवळचा)\n• floor(4.8) → 4 (नेहमी खाली)\n• ceil(4.2) → 5 (नेहमी वर)\nnegative संख्यांत फरक पडतो:\nfloor(-4.2) → -5 पण round(-4.2) → -4.\nकिंमती, बिल, सरासरी — या तिन्ही नित्य वापरतात.",
        code: `console.log(Math.round(4.6));
console.log(Math.floor(4.8));
console.log(Math.ceil(4.2));`,
        codeLanguage: "js",
        output: "5\n4\n5",
      },
      {
        title: "2. random — यादृच्छिक संख्या",
        content: "Math.random() 0 ते 1 (1 वगळता) random decimal देते.\nपूर्णांक हवा असल्यास गुणा करून floor:\nMath.floor(Math.random() * 6) + 1 → 1 ते 6 (फासा!).\nहे खेळ, quizzes, सराव उदाहरणांसाठी.\nलक्षात ठेवा: हे संपूर्ण random नाही (pseudo), पण सरावासाठी पुरेसे.",
        code: `let फासा = Math.floor(Math.random() * 6) + 1;
console.log(फासा);
console.log(Math.max(3, 9, 5));
console.log(Math.pow(2, 10));`,
        codeLanguage: "js",
        output: "1-6 (कोणतीही)\n9\n1024",
      },
    ],
    quiz: [
      {
        question: "Math.floor(Math.random()*6)+1 ने काय मिळते?",
        options: ["0-5", "1-6", "0-6", "1-5"],
        correct: 1,
      },
      {
        question: "Math.ceil(9.1) काय?",
        options: ["9", "10", "9.1", "0"],
        correct: 1,
      },
    ],
    related: ["js-numbers", "js-methods", "js-loops"],
    next: "js-classes",
    prev: "js-template-literals",
  },
  {
    slug: "js-classes",
    categoryId: "web",
    title: "JS Classes - ब्ल्यूप्रिंट",
    marathiTitle: "Classes — object चे ब्ल्यूप्रिंट",
    level: "intermediate",
    minutes: 24,
    summary: "class template ne अनेक object तयार; constructor, method, this, new.",
    sections: [
      {
        title: "1. class म्हणजे ब्ल्यूप्रिंट",
        content: "आत्तापर्यंत प्रत्येक object स्वतंत्र लिहिला. पण असेच अनेक object हवे असतील (उदा. १०० विद्यार्थी) तर प्रत्येक वेळी हाताने लिहिणे कंटाळवाणे.\nclass हा ब्ल्यूप्रिंट असतो — त्यातून नवीन objects तयार होतात (नावाने 'instances').\nनाव uppercase ने: class विद्यार्थी { ... }\nconstructor — नवीन instance बनवताना (new) चालणारे function; त्यात properties ला initial value देतो.",
        code: `class विद्यार्थी {
  constructor(नाव, वय) {
    this.नाव = नाव;
    this.वय = वय;
  }
  ओळख() {
    console.log(\`\${this.नाव}, \${this.वय} वर्षे\`);
  }
}

let सायली = new विद्यार्थी("सायली", 16);
सायली.ओळख();`,
        codeLanguage: "js",
        output: "सायली, 16 वर्षे",
      },
      {
        title: "2. this म्हणजे स्वतः",
        content: "method मधे this म्हणजे 'ज्या object साठी method चाललं तो object'.\nसायली.ओळख() मधे this = सायली; so this.नाव → \"सायली\".\nनवीन instance (new विद्यार्थी(...)) बनवल्यावर this नवीन object ला बांधला जातो.\nconstructor ला वेगळे नाव देण्याची गरज नाही — class बनवताना तोच मानला जातो.",
        code: `class विद्यार्थी {
  constructor(नाव) {
    this.नाव = नाव;
  }
}
let एक = new विद्यार्थी("रमेश");
let दोन = new विद्यार्थी("अनिता");
console.log(एक.नाव);
console.log(दोन.नाव);`,
        codeLanguage: "js",
        output: "रमेश\nअनिता",
      },
      {
        title: "3. प्रत्येक उदाहरणासाठी method",
        content: "class मधील सर्व methods प्रत्येक instance ला मिळतात; ती स्वतंत्र copy नाही — shared.\nयामुळे memory वाचते आणि बदल एकत्र राहतो.\nजर अनेक objects एकसारखे template असतील तर class हेच योग्य साधन — हे पुढे React मधे खूप दिसेल.",
        code: `class गाडी {
  constructor(मेक) {
    this.मेक = मेक;
  }
  सुरु() {
    console.log(\`\${this.मेक} सुरु — ब्र्र्रॉम!\`);
  }
}
let tata = new गाडी("Tata");
tata.सुरु();`,
        codeLanguage: "js",
        output: "Tata सुरु — ब्र्र्रॉम!",
      },
    ],
    quiz: [
      {
        question: "new काय करतो?",
        options: ["class संपवतो", "instance बनवतो", "method बोलवतो", "error देतो"],
        correct: 1,
      },
      {
        question: "constructor मधे काय असते?",
        options: ["methods", "properties ची सुरुवात", "फक्त console", "loop"],
        correct: 1,
      },
    ],
    related: ["js-objects", "js-functions", "js-scope"],
    next: "js-objects",
    prev: "js-math",
  },
];
