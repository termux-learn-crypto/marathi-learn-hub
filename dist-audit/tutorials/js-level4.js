"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsLevel4 = exports.JS4_LABEL = void 0;
// === JAVASCRIPT · LEVEL 4 — निर्णय, लूप आणि याद्या ===
// मराठीतून JS: conditionals, operators, numbers, booleans, loops, arrays, objects
exports.JS4_LABEL = "JS · Level 4 — निर्णय, लूप आणि याद्या";
exports.jsLevel4 = [
    {
        slug: "js-conditionals",
        categoryId: "web",
        title: "JS Conditionals - if, if/else, else if",
        marathiTitle: "निर्णय घेणे — if, else",
        level: "beginner",
        minutes: 24,
        summary: "if/else ने code ला निर्णय घेता येतो. तुलना operators आणि condition कशी तपासली जाते.",
        sections: [
            {
                title: "1. संगणक निर्णय कसा घेतो?",
                content: "आतापर्यंत code वरून-खाली सरळ चालला. पण खऱ्या programs मधे परिस्थितीनुसार वेगवेगळं वागावं लागतं — 'जर पाऊस असेल तर छत्री घे, नाहीतर नको'.\nJavaScript मधे हे if ने करतात. if नंतर कंसात एक condition — ती true किंवा false. true असल्यास आतला block चालतो; false असल्यास नाही.\ntrue/false या दोनच शक्यता असल्यामुळे याला boolean म्हणतात. संगणक निर्णय नेहमी boolean वरच घेतो.",
                code: `if (पाऊस === true) {
  console.log("छत्री घ्या");
}`,
                codeLanguage: "js",
                output: "छत्री घ्या",
            },
            {
                title: "2. if/else — दोन पर्याय",
                content: "if false असल्यास else block चालतो. दोन्ही एकत्र पूर्ण निर्णय देतात — 'जर हे तर असं, नाहीतर तसं'.\nelse नंतर condition नसते — तो उरलेल्या सगळ्या प्रसंगांसाठी.\nएकच नियम लक्षात ठेवा: condition फक्त if च्या कंसात लिहितात; else कंस नसतो.",
                code: `let वय = 17;
if (वय >= 18) {
  console.log("मतदान करू शकतो");
} else {
  console.log("आणखी थोडी वाट पहा");
}`,
                codeLanguage: "js",
                output: "आणखी थोडी वाट पहा",
            },
            {
                title: "3. else if — एकापेक्षा जास्त अटी",
                content: "एखाद्या प्रश्नाला तीन-चार उत्तरं मिळतात तेव्हा else if वापरा. वरपासून खाली क्रमाने तपासलं जातं; पहिली true सापडताच उरलेल्या अटी दुर्लक्षित राहतात.\nक्रम महत्त्वाचा: सर्वात विशिष्ट/मोठी अट आधी लिहा, नाहीतर छोटी अट पुढे निघून अडथळा आणेल.\ngrade उदा.: 90+ ने A, 70+ ने B, 50+ ने C, बाकी D.",
                code: `let गुण = 85;
if (गुण >= 90) {
  console.log("A - उत्कृष्ट");
} else if (गुण >= 70) {
  console.log("B - चांगले");
} else if (गुण >= 50) {
  console.log("C - पास");
} else {
  console.log("D - प्रयत्न वाढवा");
}`,
                codeLanguage: "js",
                output: "B - चांगले",
            },
            {
                title: "4. switch — एकच value, अनेक निकाल",
                content: "जेव्हा एकच variable/expression कितीही वेगवेगळ्या values सोबत तपासायचं असतो, तेव्हा if/else if च्या साठी switch अधिक स्पष्ट असतो.\nप्रत्येक case ती value तपासतो, मिळालेल्या case च्या नंतर break आवश्यक — नाहीतर पुढचे case सुद्धा चालतात.\nswitch मधे तुलना ही strict (===) असते, म्हणून '2' आणि 2 ओळखले जात नाही — जाणीवपूर्वक ती चांगलीच गोष्ट.",
                code: `let दिवस = 4;
switch (दिवस) {
  case 1:
    console.log("सोमवार");
    break;
  case 4:
    console.log("गुरुवार");
    break;
  default:
    console.log("सामान्य दिवस");
}`,
                codeLanguage: "js",
                output: "गुरुवार",
            },
            {
                title: "5. तुलना operators — > < >= <= == ===",
                content: "तुलना operators नेहमी boolean (true/false) देतात:\n• > मोठे, < लहान, >= मोठे किंवा समान, <= लहान किंवा समान\n• == समान (value काळजी घेते, प्रकार नाही)\n• === समान (value + प्रकार दोन्ही) — हेच नेहमी वापरा.\nकारण: 5 == \"5\" हे true देते (प्रकार ignore), पण 5 === \"5\" हे false. \n'==' च्या आकस्मिक सैलपणामुळे programming मधे अनपेक्षित बग येतात — म्हणून सवयच === ची करा.",
                code: `console.log(5 === "5");
console.log(5 >= 5);
console.log(3 < 10);`,
                codeLanguage: "js",
                output: "false\ntrue\ntrue",
            },
        ],
        quiz: [
            {
                question: "if च्या कंसात काय असतं?",
                options: ["variable", "condition", "print", "loop"],
                correct: 1,
            },
            {
                question: "=== आणि == मधला फरक काय?",
                options: [
                    "दोन्ही सारखे",
                    "=== value+type तपासतो",
                    "== value+type तपासतो",
                    "फरक नाही",
                ],
                correct: 1,
            },
        ],
        related: ["js-variables", "js-operators", "js-booleans"],
        next: "js-operators",
        prev: "js-variables",
    },
    {
        slug: "js-operators",
        categoryId: "web",
        title: "JS Operators - गणित आणि तुलना",
        marathiTitle: "काम करणारी चिन्हे — Operators",
        level: "beginner",
        minutes: 25,
        summary: "+, -, *, /, %, ++, --, assignment आणि तुलना — operators चा पूर्ण परिचय.",
        sections: [
            {
                title: "1. अंकगणित Operators",
                content: "अंकगणित operators आपल्या गणितासारखेच:\n• + बेरीज\n• - वजाबाकी\n• * गुणाकार\n• / भागाकार\n• % भागाकारावर उरलेली रक्कम (remainder)\n• ** घात (power)\nलक्ष द्या: / नेहमी दशांश देते — 7/2 = 3.5. पूर्णांक हवा असेल तर Math.floor वापरा.\n% धड गंमतीचा: सम/विषम शोधायला n % 2 वापरतात.",
                code: `console.log(7 + 5);
console.log(7 % 3);
console.log(2 ** 3);`,
                codeLanguage: "js",
                output: "12\n1\n8",
            },
            {
                title: "2. Assignment Operators",
                content: "assignment operators value variable मधे ठेवतात आणि अनेकदा गणितही सोबत:\n• = ठेवा\n• += मधे जोडा (x += 5 म्हणजे x = x + 5)\n• -=, *=, /= असेच\n• ++ एकातून वाढवा (x++ म्हणजे x = x + 1)\n• -- एकाने कमी करा\nछोटा उलगडा: x++ हे value आधी वापरते का नंतर? ते postfix; अगदी सुरुवातीला फक्त x += 1 लिहा — स्पष्ट आणि चांगले.",
                code: `let संख्या = 10;
संख्या += 5;
संख्या++;
console.log(संख्या);`,
                codeLanguage: "js",
                output: "16",
            },
            {
                title: "3. String जोडणं — +",
                content: "+ जेव्हा दोन्ही बाजू string असतील तेव्हा जोडणं (concat) होतं — 'नमस्कार ' + 'मराठी'.\nपण एक बाजू number असेल तर काय? JS number ला string मधे रुपांतरित करून जोडतो: 'किंमत: ' + 5 → 'किंमत: 5'.\nहे सोयीचे, पण अनपेक्षितही: 1 + 2 + '3' → '33', कारण डावीकडून उजवीकडे — आधी 1+2=3, मग 3+'3'='33'.\nम्हणून number सोबत string मिसळताना सावध रहा.",
                code: `console.log("नमस्कार " + "मराठी");
console.log(1 + 2 + "3");
console.log("5" - 2);`,
                codeLanguage: "js",
                output: "नमस्कार मराठी\n33\n3",
            },
            {
                title: "4. तुलना आणि Logical Operators",
                content: "तुलना operators boolean देतात:\n• == समान (value), === समान (value+type) — हे वापरा\n• != समान नाही, !== कठोर समान नाही\n• > < >= <=\nLogical operators दोन boolean जोडतात:\n• && 'आणि' — दोन्ही true असावे\n• || 'किंवा' — किमान एक true\n• ! उलट — true चे false\nक्रम: ! सर्वात आधी, मग &&, मग ||. गोंधळ टाळण्यासाठी कंस वापरा.",
                code: `let वय = 20;
let पैसा = 150;
console.log(वय >= 18 && पैसा >= 100);
console.log(वय >= 18 || पैसा >= 500);`,
                codeLanguage: "js",
                output: "true\ntrue",
            },
        ],
        quiz: [
            {
                question: "7 % 3 काय देते?",
                options: ["2", "1", "3", "0"],
                correct: 1,
            },
            {
                question: "x += 5 म्हणजे काय?",
                options: [
                    "x = 5",
                    "x = x + 5",
                    "x + 5",
                    "x = x * 5",
                ],
                correct: 1,
            },
        ],
        related: ["js-numbers", "js-conditionals", "js-strings"],
        next: "js-numbers",
        prev: "js-conditionals",
    },
    {
        slug: "js-numbers",
        categoryId: "web",
        title: "JS Numbers - संख्या आणि Math",
        marathiTitle: "Numbers आणि Math object",
        level: "beginner",
        minutes: 23,
        summary: "Number प्रकार, विशेष value (NaN, Infinity), Math.round/floor/random.",
        sections: [
            {
                title: "1. Number म्हणजे काय",
                content: "JavaScript मधे संख्या सगळ्या एकच ठिकाणी number या प्रकारात मोजल्या जातात — पूर्ण (5), दशांश (5.5) सर्व.\nसंगणक दशांश संख्या binary मधे ठेवतो, त्यामुळे 0.1 + 0.2 = 0.30000000000000004 सारखी विचित्र output येऊ शकते. ही चूक नाही; हा संगणकाचा स्वभाव.\nव्यवहारासाठी रक्कम गोल करण्यासाठी Math.round वापरा.",
                code: `console.log(0.1 + 0.2);
console.log(Math.round(0.1 + 0.2));`,
                codeLanguage: "js",
                output: "0.30000000000000004\n0",
            },
            {
                title: "2. NaN आणि Infinity",
                content: "NaN म्हणजे Not-a-Number — जेव्हा संख्या नसलेली value गणितात घुसते (\"नमस्कार\" - 5).\nNaN ही एकमेव value जी स्वतःशी === नाही: NaN === NaN हे false! म्हणून तपासण्यासाठी isNaN() function वापरा.\nInfinity म्हणजे कोणतीही मर्यादा नसलेले मोठे मूल्य — उदा. 1/0.\nही special values प्रोग्राम लिहिताना मिळतातच; घाबरू नका, ओळखायला शिका.",
                code: `console.log("नमस्कार" - 5);
console.log(isNaN("नमस्कार" - 5));
console.log(1 / 0);`,
                codeLanguage: "js",
                output: "NaN\ntrue\nInfinity",
            },
            {
                title: "3. Math object",
                content: "Math मधे उपयुक्त गणित साधने:\n• Math.round(x) — जवळचा पूर्णांक\n• Math.floor(x) — खाली (सगळ्यात जवळचा मोठा) पूर्णांक\n• Math.ceil(x) — वरचा पूर्णांक\n• Math.random() — 0 ते 1 मधे random संख्या\n• Math.max(...), Math.min(...) — सर्वात मोठी/लहान\n• Math.pow(a, b) — घात\nघरगुती गणितात round हे वारंवार लागते — बिल अचूक करायला.",
                code: `console.log(Math.round(4.7));
console.log(Math.floor(4.7));
console.log(Math.random());`,
                codeLanguage: "js",
                output: "5\n4\n0.xxxx (कोणतीही)",
            },
        ],
        quiz: [
            {
                question: "0.1 + 0.2 ला precise कसे कराल?",
                options: [
                    "Math.round ने",
                    "== ने",
                    "स्ट्रिंगने",
                    "काही करता येत नाही",
                ],
                correct: 0,
            },
            {
                question: "NaN कसा तपासतात?",
                options: ["NaN === x", "isNaN(x)", "x == NaN", "Math.isNaN(x)"],
                correct: 1,
            },
        ],
        related: ["js-operators", "js-math-methods", "js-methods"],
        next: "js-math-methods",
        prev: "js-operators",
    },
    {
        slug: "js-math-methods",
        categoryId: "web",
        title: "JS Math Methods - गणिती कार्ये",
        marathiTitle: "Math ची special कार्ये",
        level: "intermediate",
        minutes: 22,
        summary: "Math.round, floor, ceil, trunc, random, max/min, pow, sqrt — प्रत्येकाचा उपयोग.",
        sections: [
            {
                title: "1. गोलाकृती कार्ये - round/foor/ceil/trunc",
                content: "चार उदाहरणं एकाच number वर:\n• Math.round(4.5) → 5 (जवळचा)\n• Math.floor(4.9) → 4 (खाली, नेहमी कमी करतो)\n• Math.ceil(4.1) → 5 (वर, नेहमी वाढवतो)\n• Math.trunc(4.9) → 4 (दशांश फक्त कापतो; negative साठी floor # वेगळे)\nनकारात्मक: floor(-4.2) → -5, पण trunc(-4.2) → -4. हा फरक व्यवहारात महत्त्वाचा.",
                code: `console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.1));
console.log(Math.trunc(4.9));`,
                codeLanguage: "js",
                output: "5\n4\n5\n4",
            },
            {
                title: "2. random — contingency साठी",
                content: "Math.random() 0 (समावेश) ते 1 (वगळून) मधे random दशांश देते.\nपूर्णांक मिळवण्यासाठी गुणा + तळामध्ये Math.floor:\nMath.floor(Math.random() * 6) + 1 हे 1 ते 6 मधे (फासा!) देते.\n+1 म्हणजे सुरुवात 1 वर; * 6 म्हणजे 0-5.999.\nछोट्या games, प्रश्नपत्रिका अपरिवर्तकपणे हलवण्यासाठी खूप उपयुक्त.",
                code: `let नंबर = Math.floor(Math.random() * 6) + 1;
console.log("फासा: " + नंबर);`,
                codeLanguage: "js",
                output: "फासा: 1-6 (कोणतीही)",
            },
            {
                title: "3. min/max आणि power",
                content: "Math.max(2, 5, 9) → 9; Math.min(2, 5, 9) → 2.\nलक्ष द्या: या list घेत नाहीत — स्वतंत्र arguments.\nसंपूर्ण array वर हवा असेल तर spread वापरा: Math.max(...संख्यायादी).\nMath.pow(2, 3) → 8 (घात); Math.sqrt(16) → 4 (वर्गमूळ).\nचौरसoc का विशालता काढायची असेल तर हेच.",
                code: `let संख्या = [3, 8, 2];
console.log(Math.max(...संख्या));
console.log(Math.pow(2, 10));
console.log(Math.sqrt(81));`,
                codeLanguage: "js",
                output: "8\n1024\n9",
            },
        ],
        quiz: [
            {
                question: "Math.floor(Math.random()*6)+1 ची श्रेणी?",
                options: ["0-5", "1-6", "0-6", "1-5"],
                correct: 1,
            },
            {
                question: "Math.floor(-4.2) काय?",
                options: ["-4", "-5", "4", "5"],
                correct: 1,
            },
        ],
        related: ["js-numbers", "js-math", "js-conditionals"],
        next: "js-strings",
        prev: "js-numbers",
    },
    {
        slug: "js-strings",
        categoryId: "web",
        title: "JS Strings - मजकूर अधिक खोल",
        marathiTitle: "मजकूर हाताळणे — Strings",
        level: "beginner",
        minutes: 24,
        summary: "String जोडणे, length, methods (toUpperCase, includes, slice), template literals.",
        sections: [
            {
                title: "1. String म्हणजे मजकूर",
                content: "String म्हणजे अवतरणांमधला मजकूर — \"नमस्कार\". JavaScript मधे string चे तीन प्रकार:\n• दुहेरी \"\"\n• एकेरी ''\n• backtick ``\nएकाच string मधे एकेरी आणि दुहेरी दोन्ही आहेत तर गोंधळ होतो — म्हणून सवय: बाहेर दुहेरी, आत एकेरी.\nString immutable आहे — एकदा बनवली की बदलता येत नाही; methods नवीन string देतात.",
                code: `let नाव = "मराठी";
let वाक्य = 'ते "मराठी" शिकतात';
console.log(नाव + " भाषा");
console.log(वाक्य);`,
                codeLanguage: "js",
                output: "मराठी भाषा\nते \"मराठी\" शिकतात",
            },
            {
                title: "2. length आणि प्रत्येक अक्षर",
                content: ".length string मधे अक्षरांची (characters) संख्या देते.\nकंप्युटर प्रत्येक अक्षराला index देतो, पहिल्या अक्षराचा index 0.\nउदा. \"मराठी\" मधे 'म'=0, 'र'=1...\nहे अक्षर वाचायला string[0] लिहा — सध्याच्या पिढीत square bracket ही पद्धत आवडते.\nसंपूर्ण मजकूर loop ने फिरवून प्रत्येक अक्षर तपासता येते.",
                code: `let शब्द = "मराठी";
console.log(शब्द.length);
console.log(शब्द[0]);
console.log(शब्द[शब्द.length - 1]);`,
                codeLanguage: "js",
                output: "6\nम\nी",
            },
            {
                title: "3. महत्त्वाचे String Methods",
                content: "स्वतःला चांगले ओळखा:\n• str.toUpperCase() — मोठी अक्षरे\n• str.toLowerCase() — लहान अक्षरे\n• str.trim() — कडेच्या रिकाम्या जागा काढा\n• str.includes(\"खोल\") — आत मजकूर आहे का? true/false\n• str.slice(0, 4) — भाग काढा\n• str.replace(\"जुने\", \"नवे\") — बदला\n• str.split(\",\") — यादीत/मजकूरात विभागा\nहे methods native JS आहेत — कोणतीही library नको.",
                code: `let संदेश = "  मराठी शिका  ";
console.log(संदेश.trim().toUpperCase());
console.log("नमस्कार".includes("मस्क"));
console.log("a,b,c".split(","));`,
                codeLanguage: "js",
                output: "मराठी शिका\ntrue\n[ 'a', 'b', 'c' ]",
            },
            {
                title: "4. Template Literals — backtick",
                content: "backtick (``) मधे variable थेट घालता येतात — ${} ने.\nसमजा: `नाव: ${नाव}, वय: ${वय}` — हे string जोडण्यापेक्षा खूप स्पष्ट.\nफायदे: \n• multi-line नक्की लिहिता येते\n• '+' मधे चुकीच्या जागी full-string विसरण्याची वेळ नाही\n• expression ही घालता येते: ${2 + 3} → 5\nमराठीत language instruction बनवताना हीच पद्धत आधुनिक.",
                code: `let नाव = "राम";
let वय = 20;
console.log(\`नाव: \${नाव}, वय: \${वय}\`);
console.log(\`सरासरी: \${(2 + 3) / 2}\`);`,
                codeLanguage: "js",
                output: "नाव: राम, वय: 20\nसरासरी: 2.5",
            },
        ],
        quiz: [
            {
                question: "\"मराठी\".length काय?",
                options: ["5", "6", "4", "7"],
                correct: 1,
            },
            {
                question: "template literal कोणत्या कंसांनी?",
                options: ["\"\"", "''", "``", "{}"],
                correct: 2,
            },
        ],
        related: ["js-methods", "js-numbers", "js-template-literals"],
        next: "js-loops",
        prev: "js-math-methods",
    },
    {
        slug: "js-loops",
        categoryId: "web",
        title: "JS Loops - for, while, do-while",
        marathiTitle: "पुनरावृत्ती — Loops",
        level: "beginner",
        minutes: 26,
        summary: "for, while, do-while ने वारंवार केलेले काम; break व continue.",
        sections: [
            {
                title: "1. Loop म्हणजे पुनरावृत्ती",
                content: "जे काम पुन्हा-पुन्हा करायचे असते ते loop ने करतात. print('नमस्कार') हजार वेळा नाही — एक for लिहा.\nfor (सुरुवात; अट; वाढ) च्या तीन भाग:\n• सुरुवात: let i = 1\n• अट: i <= 5 — ही सत्य असताना loop चालतो\n• वाढ: i++ प्रत्येक फेरीनंतर\n'प्रथम अट तपासा, मग block चालवा' हा क्रम महत्त्वाचा.",
                code: `for (let i = 1; i <= 3; i++) {
  console.log("फेरी " + i);
}`,
                codeLanguage: "js",
                output: "फेरी 1\nफेरी 2\nफेरी 3",
            },
            {
                title: "2. while — अट आधी तपासा",
                content: "जेव्हा किती वेळा काम व्हायचे ते आरंभी ठरत नाही, अटवर अवलंबून असते तेव्हा while वापरतात.\nउदा. 'ग्राहक येईपर्यंत थांबा'.\nwhile (अट) { block } — आधी अट, मग block; अट खोटी झाली की संपला.\nwarning: while मधे अट बदलणारे statement विसरू नका — var वाढ करा नाहीतर infinite loop होईल.\nम्हणून counter प्रत्येक फेरीत वाढणे आवश्यक.",
                code: `let पावले = 0;
let थकलो = false;
while (!थकलो) {
  पावले += 2;
  if (पावले >= 8) थकलो = true;
}
console.log("पावले: " + पावले);`,
                codeLanguage: "js",
                output: "पावले: 8",
            },
            {
                title: "3. do-while — किमान एकदा",
                content: "do-while मधे block किमान एकदा चालतोच, मग अट तपासली जाते.\nकारण अट शेवटी असते.\ndo { block } while (अट);\nउपयोग: जेव्हा प्रथम input घेऊनच पुढे ठरवायचे असते — उदा. menu दाखवा, मग पुन्हा विचारा.\nउदा. आता करू या: एकदा तरी 'नमस्कार' छापा, आणि मग अट तपासा.",
                code: `let प्रयत्न = 0;
do {
  console.log("एकदा तरी चालतो");
  प्रयत्न++;
} while (प्रयत्न < ∗3);
console.log("प्रयत्न: " + प्रयत्न);`,
                codeLanguage: "js",
                output: "एकदा तरी चालतो\nप्रयत्न: 3",
            },
            {
                title: "4. break व continue",
                content: "loop मधे दोन विशेष statements:\n• break — loop लगेच संपवतो (उदा. 5 वर पोहोचून थांबा)\n• continue — फक्त सध्याची फेरी सोडून पुढची सुरु करतो (उदा. सम संख्या वगळा)\nहे दोन निर्णय loop च्या गतीवर नियंत्रण देतात.\nएक लक्षात घ्या: कोड स्पष्ट राहावा; continue बर्याचदा if ने सुंदर दिसते.",
                code: `for (let i = 1; i <= 6; i++) {
  if (i === 4) break;
  if (i % 2 === 0) continue;
  console.log(i);
}`,
                codeLanguage: "js",
                output: "1\n3",
            },
        ],
        quiz: [
            {
                question: "for loop मधे पहिला भाग काय?",
                options: ["अट", "सुरुवात", "वाढ", "block"],
                correct: 1,
            },
            {
                question: "do-while मधे block किमान किती वेळा चालतो?",
                options: ["0", "1", "2", "अनंत"],
                correct: 1,
            },
        ],
        related: ["js-conditionals", "js-arrays", "js-functions"],
        next: "js-arrays",
        prev: "js-strings",
    },
    {
        slug: "js-arrays",
        categoryId: "web",
        title: "JS Arrays - यादी",
        marathiTitle: "यादी — Array",
        level: "beginner",
        minutes: 25,
        summary: "Array निर्माण, index, length, push/pop, loops सह फिरणे, methods.",
        sections: [
            {
                title: "1. Array म्हणजे यादी",
                content: "Array म्हणजे एकाच नावात अनेक values — क्रमवार यादी.\n[] कंसात, values स्वल्पविरामाने वेगळ्या.\nउदा. [\"दूध\", \"चहा\"] किंवा [1, 2, 3].\nप्रत्येक item ला index असतो — पहिल्याचा 0, दुसऱ्याचा 1...\n.length ने यादीत किती item आहेत ते कळते.\narray मधे कोणताही type मिसळू शकतो, पण एकाच type ची यादी बरेचदा अधिक स्पष्ट असते.",
                code: `let खरेदी = ["दूध", "चहा", "पेट्रोल"];
console.log(खरेदी[0]);
console.log(खरेदी.length);
console.log(खरेदी[खरेदी.length - 1]);`,
                codeLanguage: "js",
                output: "दूध\n3\nपेट्रोल",
            },
            {
                title: "2. जोडणे व काढणे - push/pop",
                content: "array ला आवश्यक वेळी बदलता येते:\n• push(x) — शेवटी जोडणे\n• pop() — शेवटचे काढणे (आणि ते value परत देते)\n• unshift(x) — सुरुवातीला जोडणे\n• shift() — पहिले काढणे\npush/pop जलद असतात आणि stack साठी योग्य.\n'S्वतःला होणारा बदल' समजून घ्या — array मधील बदल उरलेल्या कोडवर दिसतो.",
                code: `let स्टॅक = [];
स्टॅक.push("पहिला");
स्टॅक.push("दुसरा");
स्टॅक.pop();
console.log(स्टॅक);`,
                codeLanguage: "js",
                output: "[ 'पहिला' ]",
            },
            {
                title: "3. loops सह फिरणे",
                content: "array वर loop ने फिरण्यासाठी for...of सर्वात सोपा — प्रत्येक item थेट मिळतो:\nfor (let item of यादी) — index गरज नाही.\nजुनी रीत: for (let i = 0; i < यादी.length; i++).\nआधुनिक functional पद्धत: यादी.forEach((item) => ...).\nतिन्ही समजून घ्या; for...of routine साठी, forEach chain मध्ये.",
                code: `let शहरे = ["पुणे", "नागपूर", "कोल्हापूर"];
for (let शहर of शहरे) {
  console.log(शहर + " महाराष्ट्र");
}`,
                codeLanguage: "js",
                output: "पुणे महाराष्ट्र\nनागपूर महाराष्ट्र\nकोल्हापूर महाराष्ट्र",
            },
            {
                title: "4. महत्त्वाचे Array Methods",
                content: "array साठी कामाची साधने:\n• join(\", \") — array ला string मधे जोडणे\n• split(\",\") — string ला array मधे विभागणे\n• includes(x) — आत आहे का? boolean\n• indexOf(x) — index सापडला तर, नाही तर -1\n• sort() — क्रमवारी लावणे; reverse() — उलट करणे\n• slice(a, b) — भाग काढणे\nपरिपूर्ण: यादी तयार → साधनाने बदल → सादरीकरण.",
                code: `let list = "पुणे,पिंपरी,कोल्हापूर";
let शहरे = list.split(",");
console.log(शहरे.length);
console.log(शहरे.includes("पुणे"));`,
                codeLanguage: "js",
                output: "3\ntrue",
            },
        ],
        quiz: [
            {
                question: "array चा पहिला index कोणता?",
                options: ["1", "0", "-1", "length"],
                correct: 1,
            },
            {
                question: "शेवटचे item काढणारी method?",
                options: ["shift()", "pop()", "push()", "slice()"],
                correct: 1,
            },
        ],
        related: ["js-loops", "js-methods", "js-objects"],
        next: "js-objects",
        prev: "js-loops",
    },
    {
        slug: "js-objects",
        categoryId: "web",
        title: "JS Objects - गुणधर्म संग्रह",
        marathiTitle: "Object — गुणधर्म व value",
        level: "intermediate",
        minutes: 25,
        summary: "Object म्हणजे नाव-value जोड्या; तयार करणे, property बदलणे, methods.",
        sections: [
            {
                title: "1. Object म्हणजे नाव-value जोड्या",
                content: "Object अनेक values एकत्र — पण प्रत्येकाला नाव (key) असते.\n{} कंसात: key: value.\nउदा. विद्यार्थी: नाव 'सायली', वय 16.\narray (केवळ यादी) आणि object (नाव-सह) मधला फरक समजून घ्या.\nनावाने मिळवणे: विद्यार्थी.नाव किंवा विद्यार्थी[\"नाव\"].",
                code: `let विद्यार्थी = {
  नाव: "सायली",
  वय: 16,
  शहर: "नागपूर",
};
console.log(विद्यार्थी.नाव);
console.log(विद्यार्थी[\"वय\"]);`,
                codeLanguage: "js",
                output: "सायली\n16",
            },
            {
                title: "2. Property बदलणे व जोडणे",
                content: "object मधील value बदलता येते: विद्यार्थी.वय = 17.\nनवीन property जोडता येते: विद्यार्थी.उंची = 152.\nलक्ष द्या: object const असेल तरी त्याच्या properties बदलतात — const फक्त variable चा संदर्भ स्थिर ठेवतो.\nम्हणून const person = {}; person.नाव = \"राम\"; हे कायदेशीर — संपूर्ण person नव्हे.\nobject ला delete विद्यार्थी.शहर ने property काढता येते.",
                code: `let गाडी = { manufacturer: "Tata" };
गाडी.manufacturer = "Tata Motors";
गाडी.इंधन = "EV";
console.log(गाडी);`,
                codeLanguage: "js",
                output: "{ manufacturer: 'Tata Motors', इंधन: 'EV' }",
            },
            {
                title: "3. Object मधील function",
                content: "object मधे function ठेवता येतो — अशा property ला method म्हणतात.\nउदा. व्यक्ती.greet() — जे 'नमस्कार, सायली!' सांगते.\nmethod आत this ने स्वतः object वर मारतो — this.नाव.\nअसे मॉडेल कागदावरील माणसासारखे वाटते — गुणधर्म + कृती एकत्र.\nस्वतःशी काम करणारी method समजून घ्या.",
                code: `let व्यक्ती = {
  नाव: "सायली",
  greet() {
    console.log("नमस्कार, " + this.नाव);
  },
};
व्यक्ती.greet();`,
                codeLanguage: "js",
                output: "नमस्कार, सायली",
            },
            {
                title: "4. Object.keys/values/entries",
                content: "object सोबत `खाली फिरताना` ही तीन:\n• Object.keys(obj) — सर्व keys चा array\n• Object.values(obj) — सर्व values चा array\n• Object.entries(obj) — [key, value] जोड्यांचा array\nहे तंत्र data बनवण्यासाठी रोज लागते.\nगणनाबंध: for (let key in obj) — प्रत्येक key ने फिरतो.\nजेव्हा only values हवे असतील तेव्हा Object.values किंवा for...of entries वापरा.",
                code: `let गुण = { मराठी: 85, गणित: 92 };
console.log(Object.keys(गुण));
console.log(Object.values(गुण));
for (let [विषय, मार्क] of Object.entries(गुण)) {
  console.log(विषय + ": " + मार्क);
}`,
                codeLanguage: "js",
                output: "[ 'मराठी', 'गणित' ]\n[ 85, 92 ]\nमराठी: 85\nगणित: 92",
            },
        ],
        quiz: [
            {
                question: "object मधे access कसा करतात?",
                options: ["obj[0]", "obj.key", "obj[]", "obj()"],
                correct: 1,
            },
            {
                question: "const असलेल्या object ची property बदलता येते का?",
                options: ["नाही, error", "होय", "फक्त const मधे", "कधीच नाही"],
                correct: 1,
            },
        ],
        related: ["js-arrays", "js-methods", "js-classes"],
        next: "js-classes",
        prev: "js-arrays",
    },
];
