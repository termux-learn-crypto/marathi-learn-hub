"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsLevel3 = exports.JS3_LABEL = void 0;
// === JAVASCRIPT · LEVEL 3 — data वर काम करणारे तंत्र ===
exports.JS3_LABEL = "JS · Level 3 — String, Array आणि Function";
exports.jsLevel3 = [
    {
        slug: "js-methods",
        categoryId: "web",
        title: "JS Methods - String व Array functions",
        marathiTitle: "String व Array वरची सर्वांत वापरली जाणारी methods",
        level: "intermediate",
        minutes: 28,
        summary: "चांगले string/array पाडणे, जोडणे, शोधणे; methods chain; function ने पुनरावृत्ती थांबवणे.",
        sections: [
            {
                title: "1. मुझी method म्हणजे काय",
                content: "Method म्हणजे value शी जोडलेले function. म्हणजेच \"value वर क्रिया\" करणारा तंत्र.\nजसे जर value string असेल तर val.length ने त्यातल्या अक्षरांची संख्या मिळते — length ही property आहे, म्हणून () ची गरज नाही.\nपण val.toUpperCase() ही method आहे — म्हणून शेवटी () लागतात.\nनियम लक्षात ठेवा: () असल्यास ती method/function (क्रिया), नसल्यास property (गुणधर्म, value).\nstring immutable असते — प्रत्येक method नवीन string परत करते; मूळ बदलत नाही. म्हणून result नेहमी v/const मधे घ्या.",
                code: `let वाक्य = "मराठी शिका प्रेमाने";
console.log(वाक्य.length);
console.log(वाक्य.toUpperCase());`,
                codeLanguage: "js",
                output: "17\nमराठी शिका प्रेमाने".toUpperCase(),
            },
            {
                title: "2. Part काढणे — slice",
                content: "slice(start, end) string मधून एक भाग काढतो. end ज्या index वर असेल ती जागा समाविष्ट होत नाही — म्हणजे end ही \"थांबायची जागा\" आहे.\nindexes 0 वरून सुरू होतात: \"मराठी\" मधे म=0, र=1, ा=2.\nनकारात्मक indexे मागून मोजतात: -1 म्हणजे शेवटचा अक्षर.\nहे कार्य browser मधे string वर नेहमी वापरले जाते — उदा. email मधून username बाहेर काढणे.",
                code: `let नाव = "मराठीहब";
console.log(नाव.slice(0, 3));  // पहिली तीन अक्षरे
console.log(नाव.slice(-3));     // शेवटची तीन अक्षरे`,
                codeLanguage: "js",
                output: "मराठ\nहब",
            },
            {
                title: "3. शोधणे — includes व indexOf",
                content: "जर आपल्याला एखादा शब्द value मधे आहे का ते पाहायचं असेल तर includes वापरा — ती true/false देते.\nतो शब्द कोणत्या जागेवर आहे हे हवं असेल तर indexOf — तो index देते; नाही आढळल्यास -1.\nincludes ही boolean साठी best; indexOf नेमका स्थानासाठी.\nदोन्ही मराठी मजकूर व english दोन्हीवर नीट काम करतात.",
                code: `let वाक्य = "मराठी learning मध्ये स्वागत";
console.log(वाक्य.includes("मराठी"));
console.log(वाक्य.indexOf("learning"));`,
                codeLanguage: "js",
                output: "true\n8",
            },
            {
                title: "4. Array जोडणे व वेगळे करणे",
                content: "Array म्हणजे क्रमाने मांडलेल्या values ची यादी: [2, 4, 6].\n.join(\" - \") ने तिला एका string मधे आणता येते; .split(\",\") string ला array मधे वेगळी करतो.\nहे दोन अनेकदा उलट उलट क्रिया — ecosystem मधे standard वापर.\nउदा. CSV रो ``1,2,3`` सारखा string → .split(\",\") मधे [1,2,3]. मग computation, मग .join पुन्हा CSV.",
                code: `let संख्या = [1, 2, 3];
console.log(संख्या.join(" + "));
console.log("पुणे, नागपूर, कोल्हापूर".split(", "));`,
                codeLanguage: "js",
                output: "1 + 2 + 3\n[ 'पुणे', 'नागपूर', 'कोल्हापूर' ]",
            },
            {
                title: "5. Function — पुन्हा वापरता येणारे ब्लॉक",
                content: "Function हा एक नाव असलेला कोडचा ब्लॉक आहे जो देवाणघेवाण करून पुन्हा-पुन्हा वापरता येतो.\nfunction double(x) { return x * 2; } या function ला input x मिळतो आणि output (return) x*2.\nएकदा नाव दिलं की तो कोड कुठेही बोलवण्यासाठी पुरतं — double(4) → 8.\nम्हणूनच functions मध्ये कोड शॉर्ट, स्पष्ट व reusable होतो.",
                code: `function double(x) {
  return x * 2;
}

console.log(double(4));
console.log(double(10));`,
                codeLanguage: "js",
                output: "8\n20",
            },
            {
                title: "6. Arrow function — छोटी रीत",
                content: "जेव्हा function फक्त एक value परत करायचा असेल तेव्हा arrow notation सोपी:\nconst double = (x) => x * 2;\nपहिल्या — गोल कंसात input, नंतर =>, आणि मग जे परत करायचे ते.\nहे function लहान functions मध्ये आवडते: .map() मधे सरळ वापरता येते.\nउदा. संख्या ही उभ्या दुहेरी असलेल्या list मधे आतमध्ये फेरअसेल.",
                code: `const double = (x) => x * 2;

const संख्या = [1, 2, 3];
const दुप्पट = संख्या.map((x) => x * 2apse);

console.log(दुप्पट);`,
                codeLanguage: "js",
                output: "[ 2, 4, 6 ]",
            },
            {
                title: "7. Method chain — सरळ वाचता येणारी",
                content: "method जी string परत करते ती पुढच्या method सोबत एकत्र जोडता येते.\nउदा. \"  हाय  \".trim().toLowerCase() — आधी ट्रिम (काठावरचे रिकामे), मग lowercase.\nडावीकडून उजवीकडे वाचा: आधी trim लागतं, मग toLowerCase. क्रम महत्त्वाचा — जसं \"क्रम नेहमी सारखा\" नियम नाही, तर बदल स्पष्ट राहतो.\nChain तोडल्यास प्रत्येक पायरी variable मधे ठेवता येते — उदा. मध्यम value तपासायला सोयीचे.",
                code: `let मजकूर = "   मराठी   ";
console.log(मजकूर.trim().toUpperCase());

let चरण१ = मजकूर.trim();
let चरण२ = चरण१.toUpperCase();
console.log(चरण२);`,
                codeLanguage: "js",
                output: "मराठी\nमराठी",
            },
        ],
        quiz: [
            { question: "slice(0,3) कोणता भाग देतो?", options: ["पहिले 3", "पहिले 4", "शेवटचे 3", "सगळे"], correct: 0 },
            { question: "indexOf न आढळल्यास काय?", options: ["null", "0", "-1", "undefined"], correct: 2 },
            { question: "string ही ___ असते?", options: ["mutable", "immutable", "changeable", "loop"], correct: 1 },
            { question: "arrow function म्हणजे ___", options: ["long", "short", "slow", "junk"], correct: 1 },
        ],
        related: ["js-variables", "js-console", "js-basics", "js-methods"],
        next: "python-functions",
        prev: "js-console",
        levelLabel: exports.JS3_LABEL,
        practiceQuestions: [
            "एका string मधून पहिले ४ अक्षर slice करा.",
            "email मधून @ चा index शोधा.",
            "array वर map वापरून प्रत्येक number दुपट करा.",
        ],
        interviewQuestions: [
            "slice vs splice फरक?",
            "string immutable कशी?",
            "arrow function कधी निवडतात?",
        ],
        challenge: {
            prompt: "message list घ्या; प्रत्येक message वर trim + length दाखवा; नंतर बाकीचे empty टाका.",
            starterCode: `let संदेश = ["  हाय  ", "", "मराठी", "  "];
for (let m of संदेश) {
  let t = m.trim();
  if (t) console.log(m.length, t);
}`,
            expectedOutput: "7 हाय\n5 मराठी\n0".split("\n")[0] ?? "7 हाय",
        },
    },
];
