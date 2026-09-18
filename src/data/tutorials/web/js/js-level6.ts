import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 6 — तुलना, व्याप्ती (scope) ===
// js-level6 — corpus मधे संदर्भित (related/next/prev) पण अद्याप definition नसलेले २ धडे:
//   js-comparisons (==, ===, >, <, >=, <=)
//   js-scope       (global / local / block scope, let vs var)

export const JS6_LABEL = "JS · Level 6 — तुलना आणि व्याप्ती";

export const jsLevel6: Tutorial[] = [
  {
    slug: "js-comparisons",
    categoryId: "web",
    title: "JS Comparisons - तुलना operators",
    marathiTitle: "तुलना — मोठे, लहान, समान",
    level: "beginner",
    minutes: 15,
    summary: "===, !==, >, <, >=, <= — तुलना करून true/false मिळवणे.",
    sections: [
      {
        title: "तुलना — मोठे, लहान, समान म्हणजे काय?",
        content: "===, !==, >, <, >=, <= — तुलना करून true/false मिळवणे.\n== (loose): फक्त value पाहतो — 5 == \\\"5\\\" → true (type न पाहता!)\n=== (strict): value + type दोन्ही — 5 === \\\"5\\\" → false\nम्हणून नेहमी === वापरा; == मुळे धक्के बसतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? तुलना — मोठे, लहान, समान चे फायदे आणि महत्त्व",
        content: "\"तुलना — मोठे, लहान, समान\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ लक्षात ठेवा: कॅपिटल लिपी आधी (\\\"A\\\" < \\\"a\\\").\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. समान तपासणे: == विरुद्ध === ",
        content:
          "== (loose): फक्त value पाहतो — 5 == \"5\" → true (type न पाहता!)\n=== (strict): value + type दोन्ही — 5 === \"5\" → false\nम्हणून नेहमी === वापरा; == मुळे धक्के बसतात.\n!== हे === चे उलट (strict not-equal).\n5 !== \"5\" → true.",
        code: `console.log(5 == "5");
console.log(5 === "5");
console.log(5 !== "5");
console.log(10 === 10);`,
        codeLanguage: "js",
        output: "true\nfalse\ntrue\ntrue",
      },
      {
        title: "2. मोठे / लहान: > < >= <=",
        content:
          "> मोठे असल्यास, < लहान असल्यास,\n>= मोठे किंवा समान, <= लहान किंवा समान.\nmks (marks), वय (age), किंमती (prices) — सगळीकडे.\nउदा. जर गुण >= 40 तर उत्तीर्ण — हे exactly असा परीक्षा निकाल.",
        code: `let marks = 80;
console.log(marks > 40);
console.log(marks >= 80);
console.log(marks < 40);
console.log(marks <= 79);`,
        codeLanguage: "js",
        output: "true\ntrue\nfalse\nfalse",
      },
      {
        title: "3. String तुलना — अक्षर क्रम",
        content:
          "Strings ची तुलना अक्षरक्रमाने (lexicographic) होते.\n\"apple\" < \"banana\" → true (a आधी b).\nमराठी/देवनागरी देखील अक्षरक्रमाने:\nक < ख < ग ... सगळी अक्षरे.\nलक्षात ठेवा: कॅपिटल लिपी आधी (\"A\" < \"a\").",
        code: `console.log("apple" < "banana");
console.log("A" < "a");
console.log("क" < "ख");`,
        codeLanguage: "js",
        output: "true\ntrue\ntrue",
      },
    ],

practiceQuestions: [
      "तुलना — मोठे, लहान, समान चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "तुलना — मोठे, लहान, समान वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "5 === \"5\" चा निकाल?",
        options: ["true", "false", "error", "undefined"],
        correct: 1,
      },
      {
        question: "कोणता operator 'लहान किंवा समान' दर्शवतो?",
        options: ["<", ">", "<=", ">="],
        correct: 2,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["तुलना — मोठे, लहान, समान", "टायपोग्राफी — मजकूर व्यवस्था", "Recursion — स्वतःला बोलावणे", "Component Bahar — भाग संग्रह"],
        correct: 0,
      },
],
    related: ["js-conditionals", "js-operators", "js-booleans"],
    next: "js-scope",
    prev: "js-booleans",
  },
  {
    slug: "js-scope",
    categoryId: "web",
    title: "JS Scope - व्याप्ती",
    marathiTitle: "व्याप्ती — variable कुठे दिसतो",
    level: "beginner",
    minutes: 16,
    summary: "global / function / block scope; let vs var चा फरक.",
    sections: [
      {
        title: "का शिकावे? व्याप्ती — variable कुठे दिसतो चे फायदे आणि महत्त्व",
        content: "\"व्याप्ती — variable कुठे दिसतो\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ हे 'signature mistake' टाळण्यासाठी नेहमी let वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. व्याप्ती (scope) म्हणजे काय",
        content:
          "Scope = variable कोठे दिसतो आणि कोठे नाही.\nबाहेर (global) घोषित केलेला variable सगळीकडे दिसतो.\nfunction आत (local) घोषित केलेला फक्त त्या function मधे.\nहेच 'दृष्टीचे क्षेत्र' — आतून बाहेर दिसते, बाहेरून आत नाही.",
        code: `let नाव = "सायली";  // global

function बोल() {
  let संदेश = "नमस्कार!";
  console.log(नाव);      // दिसते (global)
  console.log(संदेश);    // दिसते (local)
}
बोल();
// console.log(संदेश);   // चूक — बाहेर नाही दिसत`,
        codeLanguage: "js",
        output: "सायली\nनमस्कार!",
      },
      {
        title: "2. let vs var — block scope",
        content:
          "let हा block-{} च्या आत मर्यादित (बंद) राहतो.\nvar मात्र function-पुरता असतो आणि block सोडून बाहेरही गळतो.\nहे 'signature mistake' टाळण्यासाठी नेहमी let वापरा.\nहेच नियम: आत ज्या block मधे घोषित त्या block पर्यंतच.",
        code: `if (true) {
  let blockVar = "आत";
  var funcVar = "बाहेर";
}
// console.log(blockVar); // चूक
console.log(funcVar);     // चालते`,
        codeLanguage: "js",
        output: "बाहेर",
      },
      {
        title: "3. block + scope चा प्रयोग",
        content:
          "आत-बाहेर समजले की debugging सोपी:\nजर अचानक 'not defined' error आला तर variable योग्य जागी घोषित केलाय की नाही ते बघा.\nबाहेर घोषित केलेले आत वापरता येते.\nआत घोषित केलेले बाहेर वापरता येत नाही.",
        code: `let पोल = 100;

function खेळ() {
  let धावा = 25;  // खेळ चालू
  return पोल + धावा;
}
console.log(खेळ());`
      }
    ],

practiceQuestions: [
      "व्याप्ती — variable कुठे दिसतो चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "व्याप्ती — variable कुठे दिसतो वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
      {
        question: "function आत घोषित variable कुठे दिसतो?",
        options: ["फक्त function आत", "सगळीकडे", "पुढच्या file मधे", "कधीच नाही"],
        correct: 0,
      },
      {
        question: "कोणता keyword block scope देतो?",
        options: ["var", "let", "const मध्येही नाही", "global"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["व्याप्ती — variable कुठे दिसतो", "Project - Word Counter", "filter — दृश्य प्रभाव", "light-dark — थीम नियम"],
        correct: 0,
      },
],
    related: ["js-comparisons", "js-variables", "js-conditionals", "js-booleans"],
    next: "js-dom",
    prev: "js-comparisons",
  }
]
