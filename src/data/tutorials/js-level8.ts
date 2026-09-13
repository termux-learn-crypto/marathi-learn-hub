import type { Tutorial } from "@/data/tutorials";

// === JAVASCRIPT · LEVEL 8 — शेवटची पायरी: Promise ग्रंथालय आणि debugging ===
// २ धडे: js-promises (level7 चा शिल्लक राहिलेला broken target)
//         js-debugging (browser DevTools + console सह चूक शोधणे)

export const JS8_LABEL = "JS · Level 8 — Promise कडे पूर्ण नजर आणि debugging";

export const jsLevel8: Tutorial[] = [
  {
    slug: "js-promises",
    categoryId: "web",
    title: "JS Promises — वचनाची साखळी",
    marathiTitle: "Promises — साखळीतले वचन आणि निकाल",
    level: "intermediate",
    minutes: 16,
    summary:
      "Promise, .then/.catch chain, Promise.all/race — वेळखाऊ काम न थांबवता.",
    sections: [
      {
        title: "1. Promise म्हणजे 'वचन'",
        content:
          "Promise = अजून निकाल नसलेले पण भविष्यात मिळणार असे वचन.\nतीन अवस्था: pending (वाट), fulfilled (मिळालं), rejected (अपयश).\nनव्याने promise: new Promise(function (धन, व्यंग) { ... });\nयश → धन(निकाल); अपयश → व्यंग(चूक).\nतिच्याशी जोडणी: .then(निकालप्राप्ति), .catch(चूक).\nहे event callback च्या जागी — आता 'निकाल open असतो'.",
        code: `let वचन = new Promise(function (धन, व्यंग) {
  setTimeout(function () {
    धन("स्वीकारले!");
  }, 1500);
});

वचन
  .then(निकाल => console.log(निकाल))
  .catch(चूक => console.log(चूक));`,
        codeLanguage: "js",
        output: "(१.५ सेकंदांनी) स्वीकारले!",
      },
      {
        title: "2. .then ची साखळी",
        content:
          "प्रत्येक .then एक नवीन promise परत करतो → मग पुढील .then लागतो.\nहेच 'chain' — एका निकालावर पुढील काम, मग पुढील.\nउदा. data आले → text बदला → शैली बदला, असा sequence.\nचुका कोठेही आल्या तरी शेवटचा .catch हाताळतो.\nहे अवघड काम सोप्या ओळींत: वाचायला खूप सोपे.",
        code: `Promise.resolve(10)
  .then(n => n * 2)
  .then(n => n + 5)
  .then(n => console.log("निकाल: " + n))
  .catch(चूक => console.log("चूक: " + चूक));`,
        codeLanguage: "js",
        output: "निकाल: 25",
      },
      {
        title: "3. Promise.all — अनेक एकदा",
        content:
          "अनेक कामं एकत्र: Promise.all([वचन1, वचन2]) — सगळे शेवटी मिळून.\nएकही अपयशी गेलं तर सगळं अपयशी (all-or-nothing).\nउलट Promise.race — पहिला जो पूर्ण होईल तो निकाल.\nव्यावहारिक: २ API calls एकाच वेळी → प्रतीक्षा एकत्र.",
        code: `let पहिला = Promise.resolve(3);
let दुसरा = Promise.resolve(6);
Promise.all([पहिला, दुसरा]).then(सगळे => {
  console.log(सगळे);
  console.log("बेरीज: " + सगळे[0] + सगळे[1]);
});`,
        codeLanguage: "js",
        output: "[ 3, 6 ]\nबेरीज: 9",
      },
    ],
    quiz: [
      {
        question: "promise ची 'वाट पाहणारी' अवस्था?",
        options: ["pending", "done", "wait", "loading"],
        correct: 0,
      },
      {
        question: "अनेक promises एकाच वेळी कोणते?",
        options: ["Promise.single", "Promise.all", "Promise.each", "Promise.one"],
        correct: 1,
      },
    ],
    related: ["js-async", "js-fetch", "js-events", "js-functions"],
    next: "js-debugging",
    prev: "js-async",
  },
  {
    slug: "js-debugging",
    categoryId: "web",
    title: "JS Debugging — चूक शोधण्याची कला",
    marathiTitle: "Debugging — DevTools ने चूक ठोकणे",
    level: "beginner",
    minutes: 14,
    summary:
      "console.log, console.table, console.error, breakpoints, step-over — DevTools ने.",
    sections: [
      {
        title: "1. console चे रूपांतर",
        content:
          "console.log — सर्वसामान्य मजकूर.\nconsole.error — लाल, चुकीच्या ठिकाणी.\nconsole.warn — पिवळा, धोक्याचा.\nconsole.table — array/object सुंदर table मधे.\nहे तिन्ही function सोबत वेळ — हे DevTools मधे नेहमी दिसतं.\nपहिले steps: ERROR दिसला → त्यावर क्लिक → 'at' ने function व ओळ.",
        code: `let विद्यार्थी = [
  {नाव: "रिया", गुण: 92},
  {नाव: "ओम", गुण: 78},
];
console.table(विद्यार्थी);`,
        codeLanguage: "js",
      },
      {
        title: "2. breakpoint — संगणक थांबवा",
        content:
          "डावीकडील ओळ क्रमांकावर (line number) क्लिक → निळा dot = breakpoint.\nतिथे code थांबतो; मग तुम्ही वर-खाली फिरता (step over/into).\nउजवीकडे Scope पटल: प्रत्येक variable चे तत्क्षण current मूल्य.\nम्हणून 'कुठे वेगळे झालं' तेच पटकन दिसतं.\nहाताळण्यास सोपे: पहिले २-३ breakpoints, नंतर दृष्टीकोन.",
        code: `function बेरीज(a, b) {
  debugger; // येथे थांबा
  return a + b;
}
console.log(बेरीज(4, 5));`,
        codeLanguage: "js",
        output: "9",
      },
      {
        title: "3. चुकांच्या प्रकारांशी ओळख",
        content:
          "SyntaxError — चिन्ह/शब्द चुकले; code चालतच नाही.\nTypeError — value कुणाला जोडली चुकीची (undefined.method).\nReferenceError — variable अस्तित्वात नाही.\nमराठी भाषेत error संदेश वाचणे सोपे:\n'x is not a function' → x ला function म्हणून हाकलं, पण ती value function नाही.\nआता शेवटची दोन प्रोजेक्ट्स करा — संपूर्ण journey ची उजळणी.",
        code: `console.log(अस्तित्वातनाही); // ReferenceError
// console.log(undefined.नाव); // TypeError
let x = 5;
// x(); // TypeError: x is not a function`,
        codeLanguage: "js",
        output: "Uncaught ReferenceError: अस्तित्वातनाही is not defined",
      },
    ],
    quiz: [
      {
        question: "निळ्या dot ने काय होतं?",
        options: ["code वेगवान होतो", "code तिथे थांबतो", "page बंद होते", "net चालू होते"],
        correct: 1,
      },
      {
        question: "कोणता console function लाल error दाखवतो?",
        options: ["console.log", "console.error", "console.action", "console.win"],
        correct: 1,
      },
    ],
    related: ["js-promises", "js-console", "js-conditionals", "js-scope"],
    next: "js-objects",
    prev: "js-promises",
  },
];
