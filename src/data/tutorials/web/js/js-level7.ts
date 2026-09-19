import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 7 — DOM, Events, Async, fetch ===
// js-scope नंतरची पायरी: वेबपेजशी संवाद (DOM), events, आणि API data (fetch).
// हेच js-level6.ts (js-scope) चे next — wiring चेन बंद करते.

export const JS7_LABEL = "JS · Level 7 — DOM, Events, async/fetch";

export const jsLevel7: Tutorial[] = [
  {
    slug: "js-dom",
    categoryId: "web",
    title: "JS DOM - पेजचे घटक शोधणे",
    marathiTitle: "DOM — document वर टॅग शोधणे आणि बदलणे",
    level: "beginner",
    minutes: 15,
    summary:
      "document.getElementById / querySelector — HTML घटक शोधणे; innerHTML/textContent बदलणे.",
    sections: [
      {
        title: "का शिकावे? DOM — document वर टॅग शोधणे आणि बदलणे चे फायदे आणि महत्त्व",
        content: "\"DOM — document वर टॅग शोधणे आणि बदलणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. DOM म्हणजे काय",
        content:
          "DOM (Document Object Model) = HTML चे झाड(tree) रूप जे JavaScript ला दिसते.\nप्रत्येक टॅग एक node/घटक — आपण तो शोधून बदलू शकतो.\nहेच 'webpage जिवंत' करण्याची गुरुकिल्ली: static HTML मध्ये JS ne हालचाल.\nसुरुवात एका function ने — घटक शोधा, मजकूर बदला.",
        code: `<p id="शुभेच्छा">नमस्कार!</p>
<script>
  let p = document.getElementById("शुभेच्छा");
  p.textContent = "चांगला दिवस असो!";
</script>`,
        codeLanguage: "js",
        output: "चांगला दिवस असो!",
      },
      {
        title: "2. querySelector — निवडकर्ता",
        content:
          "querySelector('CSS-सारखा selector') — एकाच ओळीत घटक.\n. वर्ग(id?) → #id, class → .वर्ग, टॅग → पहिला.\ngetElementById फक्त id; पण querySelector सर्वकाही:\n#मुख्य, .बटण, p, div > p ...\nपरत पहिला जुळणारा घटक — एकच.",
        code: `let शीर्षक = document.querySelector("h1");
let बटण = document.querySelector(".सुरु");
let मजकूर = document.querySelector("#कथा");

शीर्षक.style.color = "green";
बटण.style.margin = "10px";`,
        codeLanguage: "js",
      },
    ],

practiceQuestions: [
      "DOM — document वर टॅग शोधणे आणि बदलणे चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "DOM — document वर टॅग शोधणे आणि बदलणे वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    related: ["js-events", "js-scope", "js-variables"],
    next: "js-events",
    prev: "js-scope",
    quiz: [
      {
        question: "घटक शोधण्यासाठी कोणती method?",
        options: ["querySelector", "findTag", "locate", "selectTag"],
        correct: 0,
      },
      {
        question: "id साठी selector मध्ये काय prefix?",
        options: ["#", ".", "&", "@"],
        correct: 0,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["DOM — document वर टॅग शोधणे आणि बदलणे", "रंग आणि पार्श्वभूमी", "print — छपाई नियम", "संगणकाचा इतिहास"],
        correct: 0,
      },
],
  },
  {
    slug: "js-events",
    categoryId: "web",
    title: "JS Events - क्लिक आणि घटना",
    marathiTitle: "Events — button दाबल्यावर कृती",
    level: "beginner",
    minutes: 16,
    summary: "addEventListener — click/input/form; मजकूर बदलण्याची प्रतिक्रिया.",
    sections: [
      {
        title: "का शिकावे? Events — button दाबल्यावर कृती चे फायदे आणि महत्त्व",
        content: "\"Events — button दाबल्यावर कृती\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. Event म्हणजे काय",
        content:
          "Event = पेजवर घडणारी प्रत्येक गोष्ट: click, keystroke, mouse move, submit.\nJavaScript ने आपण event ऐकतो आणि कृती करतो.\nहे 'लक्ष देणे' = addEventListener(\"घटना\", कृती).\nकृती ही function असते — प्रत्येक वेळी घटना घडल्यावर चालते.\nहेच interactive webpage च्या मुळाशी असते.",
        code: `let बटण = document.querySelector("#बटण");

बटण.addEventListener("click", function () {
  console.log("येथे क्लिक झाले!");
});`,
        codeLanguage: "js",
        output: "(प्रत्येक क्लिकवर) येथे क्लिक झाले!",
      },
      {
        title: "2. input — टाईप करताना",
        content:
          "input = मजकूर टाईप करताच प्रतिक्रिया.\nचांगले: live search, पासवर्ड बल, शब्द मोजणी.\ntextbox चे मूल्य .value तून.\nहे स्पष्ट: event आला → value घ्या → बदला.",
        code: `let बॉक्स = document.querySelector("#नाव");
let जोर = document.querySelector("#जोर");

बॉक्स.addEventListener("input", function () {
  जोर.textContent = "नमस्कार, " + बॉक्स.value;
});`,
        codeLanguage: "js",
      },
    ],

practiceQuestions: [
      "Events — button दाबल्यावर कृती चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Events — button दाबल्यावर कृती वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    related: ["js-dom", "js-functions", "js-conditionals"],
    next: "js-async",
    prev: "js-dom",
    quiz: [
      {
        question: "क्लिक ऐकण्यासाठी कोणता?",
        options: ["on()", "listen()", "addEventListener()", "watch()"],
        correct: 2,
      },
      {
        question: "पहिला argument कोणता?",
        options: ["function", "घटनेचे नाव", "element", "value"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Events — button दाबल्यावर कृती", "Power Bag — भाग संग्रह", "Form Security — संरक्षणाचे नियम", "सामान्य समस्या आणि उपाय"],
        correct: 0,
      },
],
  },
  {
    slug: "js-async",
    categoryId: "web",
    title: "JS Async - प्रतीक्षा",
    marathiTitle: "Async — वाट न पाहता काम",
    level: "intermediate",
    minutes: 17,
    summary: "async/await + Promise — वेळखाऊ काम (API, timer) न थांबवता.",
    sections: [
      {
        title: "का शिकावे? Async — वाट न पाहता काम चे फायदे आणि महत्त्व",
        content: "\"Async — वाट न पाहता काम\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. async म्हणजे काय",
        content:
          "JavaScript एका वेळी एक काम (single-threaded).\nपण timer/network सारखी कामे थांबून घेऊ नयेत म्हणून — async.\nasync function नेहमी Promise परत करते.\nawait — पुढच्या ओळीपूर्वी निकालाची वाट पाहते.\nहेच सोपे: 'हे झाल्यावर मग पुढे'.",
        code: `async function उभारणी() {
  let उत्तर = await fetch("https://api.example.com/data");
  let data = await उत्तर.json();
  console.log(data);
}
उभारणी();`,
        codeLanguage: "js",
        output: `{ response data }
// fetch पूर्ण झाल्यावर API ने परतलेले JSON data console मध्ये छापले जाते.
// async/await ने कोड line-by-line (सीरियल) दिसतो, पण page थांबत नाही.`,
      },
      {
        title: "2. Promise — वचन",
        content:
          "Promise = भविष्यातील निकालाचे वचन.\nतीन अवस्था: pending, fulfilled, rejected.\n.then(निकाल) / .catch(चूक) — पेजला रोखठोक नाही.\nfetch() एक Promise परत करतो — हेच API चे स्वरूप.\nTry/catch मध्ये चूक सांभाळा.",
        code: `fetch("https://api.example.com/users")
  .then(उत्तर => उत्तर.json())
  .then(डेटा => console.log(डेटा.नाव))
  .catch(चूक => console.error("अपयश: " + चूक));`,
        codeLanguage: "js",
        output: `नाव (म्हणजे users API च्या परतलेल्या data मधील .नाव फील्ड)
// यशस्वी असल्यास .then मधील निकाल छापले जातो; चूक झाल्यास "अपयश: <चूक>" मिळते.`,
      },
    ],

practiceQuestions: [
      "Async — वाट न पाहता काम चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Async — वाट न पाहता काम वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    related: ["js-fetch", "js-promises", "js-events", "js-scope"],
    next: "js-fetch",
    prev: "js-events",
    quiz: [
      {
        question: "async function काय परत करतो?",
        options: ["string", "Promise", "array", "number"],
        correct: 1,
      },
      {
        question: "निकालाची वाट कोणता operator?",
        options: ["wait", "async", "await", "then"],
        correct: 2,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Async — वाट न पाहता काम", "इनपुट आणि आउटपुट उपकरणे", "Enterprise App — सर्व Level 4 एकत्र", "Practical Project - सर्व एकत्र"],
        correct: 0,
      },
],
  },
  {
    slug: "js-fetch",
    categoryId: "web",
    title: "JS fetch - API डेटा",
    marathiTitle: "fetch — बाहेरचा data आणणे",
    level: "intermediate",
    minutes: 18,
    summary: "fetch(url)+.json() — API कडून data; error handling सह.",
    sections: [
      {
        title: "का शिकावे? fetch — बाहेरचा data आणणे चे फायदे आणि महत्त्व",
        content: "\"fetch — बाहेरचा data आणणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ लक्षात ठेवा: try/catch — नेहमी.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "1. fetch म्हणजे काय",
        content:
          "fetch(url) — त्या पत्त्यावरून data आणतो (GET).\nतो एक Promise देतो; निकाल .json() ने वाचतो.\nउदा. हवामान, बातम्या, याद्या — असेच अनेक apps हे करतात.\nएक function: 'शोधा आणि दाखवा'.",
        code: `fetch("https://api.example.com/weather")
  .then(उत्तर => उत्तर.json())
  .then(हवामान => {
    console.log("तापमान: " + हवामान.तापमान + "°C");
  })
  .catch(चूक => console.log("मिळाले नाही"));`,
        codeLanguage: "js",
        output: "तापमान: 28°C",
      },
      {
        title: "2. POST — पाठवणे",
        content:
          "फक्त GET नाही — POST ने data पाठवतो.\nसमजा form भरलात → सर्व्हरला पाठवा.\nmethod: \"POST\" + body: JSON.stringify(data).\nउत्तर.ok ची खात्री (200–299).\nलक्षात ठेवा: try/catch — नेहमी.",
        code: `async function नोंदणी() {
  let उत्तर = await fetch("/api/सूची", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ नाव: "सायली", वय: 22 }),
  });
  let निकाल = await उत्तर.json();
  console.log(निकाल.message);
}
नोंदणी();`,
        codeLanguage: "js",
      },
    ],

practiceQuestions: [
      "fetch — बाहेरचा data आणणे चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "fetch — बाहेरचा data आणणे वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    related: ["js-async", "js-promises", "js-objects", "js-strings"],
    next: "js-promises",
    prev: "js-async",
    quiz: [
      {
        question: "fetch कोणता operator?",
        options: ["GET", "POST", "दोन्ही", "DELETE"],
        correct: 2,
      },
      {
        question: "JSON म्हणून वाचण्यासाठी कोणती method?",
        options: [".text()", ".json()", ".data()", ".body()"],
        correct: 1,
      },
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["fetch — बाहेरचा data आणणे", "while loop — अट खरी असेपर्यंत", "मासिक प्रकल्प — सर्व कौशल्य एकत्र", "सर्किट समजून घ्या — closed loop, series/parallel, schematic"],
        correct: 0,
      },
],
  },
];
