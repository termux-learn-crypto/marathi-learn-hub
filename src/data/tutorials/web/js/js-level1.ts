import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 1 — वेबपेजला जीव देणारी भाषा ===
export const JS1_LABEL = "JS · Level 1 — वेबपेजला जीव देणारी भाषा";

export const jsLevel1: Tutorial[] = [
  {
    slug: "js-basics",
    categoryId: "web",
    title: "JavaScript Basics - मूलभूत JavaScript",
    marathiTitle: "JavaScript म्हणजे काय? HTML-CSS नंतर ही वेळ",
    level: "beginner",
    minutes: 20,
    summary: "JavaScript ही browser मधले स्लाइडर, फॉर्म आणि button चालवणारी भाषा. HTML रचना, CSS शैली — आता कृति!",
    sections: [
      {
        title: "JavaScript म्हणजे काय HTML-CSS नंतर ही वेळ म्हणजे काय?",
        content: "JavaScript ही browser मधले स्लाइडर, फॉर्म आणि button चालवणारी भाषा. HTML रचना, CSS शैली — आता कृति!.\nआतापर्यंत तुम्ही HTML आणि CSS शिकलेत.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? JavaScript म्हणजे काय HTML-CSS नंतर ही वेळ चे फायदे आणि महत्त्व",
        content: "✓ टाईप शिकणं महत्त्वाचं कारण ती ठरवतं की त्या value बरोबर काय करता येतं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ developer तिथे messages पाहतो आणि चुका समजतो.\n✗ तीन रीती: let (ती बदलता येते), const (ती बदलत नाही — स्थिर), आणि var (जुनी, आता टाळा).\n✗ var फक्त जुना कोड वाचताना लक्षात ठेवा.\n✗ लक्षात ठेवा: नाव अर्थपूर्ण व मराठीतही चालते.\n✗ हाच एक सामान्य नवशिक्याचा घोटाळा आहे.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. तुमच्या आधीच्या दोन भाषा",
        content: "आतापर्यंत तुम्ही HTML आणि CSS शिकलेत. HTML ने रचना दिली — headings, paragraphs, buttons, links. CSS ने शैली दिली — रंग, आकार, अंतर, fonts.\nदोन्ही एकत्र मिळून एक सुंदर — पण स्थिर — पेज तयार होतं. त्यातली प्रत्येक गोष्ट तिथेच पडलेली असते.\nआता जर तुम्हाला ते पेज \"जिवंत\" करायचं असेल — button दाबल्यावर काही घडावं, नाव टाकल्यावर response यावा, प्रतिमा स्वतःहून बदलावी — तर ती कुणाची कामं आहेत?\nउत्तर: JavaScript ची. JavaScript ही वेबची तिसरी आणि सर्वात सक्रिय भाषा आहे. ती पेजला वर्तन देते.",
        code: `// HTML → रचना
// CSS  → शैली
// JS   → वर्तन (कृति)`,
        codeLanguage: "js",
      },
      {
        title: "2. JavaScript म्हणजे नेमकं काय",
        content: "JavaScript (थोडक्यात JS) ही programming भाषा आहे — म्हणजे ती computation करते: गणित, निर्णय, पुनरावृत्ती.\nती browser मध्ये बसलेली असते आणि तुमच्या पेजच्या HTML/CSS ला स्पर्श करू शकते. म्हणूनच तिचं पराक्रम असं: ती रचना आणि शैलीना \"कृति\" जोडते.\nउदा. button क्लिक केल्यावर message दिसावं हे हीच भाषा करते. ही सगळी कामं सहज आणि बिना HTTP request चालतात — अगदी त्या पेजवरच.\n\"प्रोग्रामिंग भाषा\" इतका शब्द ऐकून घाबरू नका. तुम्ही Python ला टिपलेलातच — ती माणसाच्या भाषेत दिशा देते. JavaScript पण तेवढंच; फरक इतकाच की ती वेबपेजच्या जवळ काम करते.",
        code: `// माझा पहिला JavaScript
console.log("नमस्कार, मराठी!");`,
        codeLanguage: "js",
      },
      {
        title: "3. JavaScript कुठे राहतो",
        content: "तीन ठिकाणी: (१) HTML मधील <script> tag च्या आत, (२) वेगळ्या .js फाईलमध्ये जी head किंवा body च्या शेवटी जोडली जाते, (३) browser च्या Console मध्ये थेट.\nसर्वात आधुनिक रीत दुसरी आहे — एक वेगळी script.js फाईल. म्हणजे HTML स्वच्छ राहतो आणि JS चा नीट re-use होतो.\nbody च्या शेवटी (</body> च्या आधी) script घालण्याची प्रथा आहे — कारण तेव्हा पूर्ण HTML आधी वाचलेलं असतं. त्यापूर्वी script वाटले तर elements सापडत नाहीत.\nआता एक quick experiment: ब्राउझर उघडा, F12 दाबा (किंवा right-click → Inspect) आणि Console टॅब उघडा. तिथे खालील ओळ लिहा व Enter दाबा.",
        code: `<script src="script.js"></script>`,
        codeLanguage: "html",
      },
      {
        title: "4. Console सोबत ओळख",
        content: "Console ही browser ची \"चिटचौरगाथा पट्टी\" आहे. developer तिथे messages पाहतो आणि चुका समजतो.\nconsole.log(\"...\") म्हणजे \"त्या message ला Console मध्ये दाखव\". Python मधील print() सारखं.\nConsole मध्ये तुम्ही कोणतीही expression लिहिल्यास तिचं उत्तर लगेच दिसतं — उदा. 2 + 2 दाबल्यास 4.\nहे त्वरित प्रतिसाद (immediate feedback) यामुळे JavaScript शिकणे आनंददायी होते. तुम्ही प्रत्येक गोष्टीवर त्वरित प्रयोग करू शकता.\nखाली output वर dȏ reference आहे; बघा console.log कसे काम करते.",
        code: `console.log("नमस्कार!");
console.log(2 + 3);`,
        codeLanguage: "js",
        output: "नमस्कार!\n5",
      },
      {
        title: "5. शब्द: statements आणि expressions",
        content: "कोड मध्ये दोन मूलभूत एकके असतात: statements आणि expressions.\nExpression म्हणजे ज्या गोष्टीला value मिळते — उदा. 2 + 3, \"नमस्कार\", x.\nStatement म्हणजे जी सूचना कृति करते — उदा. console.log(...), let x = 5.\nएक expression ही statement ची inner part असते. प्रत्येक statement शेवटी ; (semicolon) ने संपतं.\n; नेमकं आवश्यक नसलं तरी ते सवयीने लिहा — म्हणजे कुठे statement संपतं हे स्पष्ट राहतं.",
        code: `// expression
2 + 3;
"नमस्कार";

// statement
let x = 5;
console.log(x);`,
        codeLanguage: "js",
      },
      {
        title: "6. Variables — values चे नामकरण",
        content: "Variable म्हणजे \"नाव असलेली बादली\". तुम्ही value घेतो आणि तिला नाव देतो.\nतीन रीती: let (ती बदलता येते), const (ती बदलत नाही — स्थिर), आणि var (जुनी, आता टाळा).\nlet ही नेहमीची निवड असते; const ला स्थिर values साठी. var फक्त जुना कोड वाचताना लक्षात ठेवा.\nलक्षात ठेवा: नाव अर्थपूर्ण व मराठीतही चालते. खाली example:",
        code: `let चहाचेCup = 2;
const cupPrice = 15;

console.log(चहाचेCup);
console.log(cupPrice);`,
        codeLanguage: "js",
      },
      {
        title: "7. Data types — भिन्न value स्वभाव",
        content: "प्रत्येक value एका type मध्ये येते: number (संख्या), string (मजकूर अवतरणांमध्ये), boolean (true/false), undefined (value नाही).\nटाईप शिकणं महत्त्वाचं कारण ती ठरवतं की त्या value बरोबर काय करता येतं.\nउदा. \"5\" + \"5\" म्हणजे मजकूर जोडणी = \"55\", पण 5 + 5 म्हणजे गणित = 10. हाच एक सामान्य नवशिक्याचा घोटाळा आहे.\nआता typeof ऑपरेटर वापरून type तपासतो:",
        code: `console.log(typeof 42);        // "number"
console.log(typeof "नमस्कार"); // "string"
console.log(typeof true);      // "boolean"
console.log(typeof zzz);       // "undefined"`,
        codeLanguage: "js",
        output: 'number\nstring\nboolean\nundefined',
      },
      {
        title: "8. String जोडणी किंवा Template",
        content: "मजकूर एकत्र जोडण्याच्या दोन रीती.\nजुनी: + वापरून मजकूर व values एकत्र करणे — \"मी \" + x + \" वर्षांचा\".\nआधुनिक: template literals — backtick (`) मधे `${...}` मध्ये expression घातली जाते.\nTemplate literal मध्ये मराठी शुद्ध राहते आणि नवीन ओळीही सहज येतात. हीच आता वापरा.",
        code: `let city = "पुणे";

// जुनी रीत
console.log("मी " + city + " मध्ये राहतो.");

// आधुनिक रीत
console.log(\`मी \${city} मध्ये राहतो.\`);`,
        codeLanguage: "js",
        output: "मी पुणे मध्ये राहतो.\nमी पुणे मध्ये राहतो.",
      },
      {
        title: "9. Mini Project",
        content: "आता दोन्ही मिळवून एक लहान पेज: HTML रचना, CSS रंग, आणि JS मधील Click बटण.\nतुम्ही पाहा — बटण क्लिक केल्यावर alert दिसतो. ही कृति JavaScript ने आली.\nहाच प्रवास पुढील level मध्ये विस्तारेल: functions, conditions आणि functions. पुढे धडा.",
        code: `<button onclick="alert('नमस्कार!')">मला दाबा</button>`,
        codeLanguage: "html",
        output: "बटण दाबल्यावर alert बॉक्स दिसतो",
      },
    ],
    quiz: [
      { question: "HTML-CSS पेजमध्ये \"वर्तन\" कोण देते?", options: ["HTML", "CSS", "JavaScript", "नक्की नाही"], correct: 2 },
      { question: "console.log कशासारखं?" , options: ["print()", "input()", "len()", "range()"], correct: 0 },
      { question: "const कोणती value मध्ये holds?", options: ["बदलणारी", "बदलू नये अशी", "केवळ मजकूर", "केवळ संख्या"], correct: 1 },
      { question: "typeof वापरून काय कळतं?", options: ["value", "type", "लांबी", "नाव"], correct: 1 },
    ],
    related: ["html-basics", "css-structure-cascade", "js-variables", "js-console", "python-basics"],
    next: "js-variables",
    prev: "css-cascade-layers",
    levelLabel: JS1_LABEL,
    practiceQuestions: [
      "console.log मधे आपलं नाव दाखवा.",
      "let आणि const मधे एक चांगली variable बनवा.",
      "Template literal ने तुमचं शहर व आवडता रंग एकत्र छापा.",
    ],
    interviewQuestions: [
      "JavaScript कुठे, कोणत्या ठिकाणी चालते?",
      "let, const आणि var यात काय फरक?",
      "typeof काय सांगतो आणि एक उदाहरण द्या?",
    ],
    challenge: {
      prompt: "मराठी message व तुमचं वय संख्या म्हणून console मधे दाखवा. नंतर typeof वापरून दोघांचे type दाखवा.",
      starterCode: `let वय = 20;
console.log(\`मी \${वय} वर्षांचा\`);
console.log(typeof वय);`,
      expectedOutput: "मी 20 वर्षांचा\nnumber",
    },
  },
];