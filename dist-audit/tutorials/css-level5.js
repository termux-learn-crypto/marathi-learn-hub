"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssLevel5 = exports.CSS5_LABEL = void 0;
// === CSS · LEVEL 5 — Shape, Cut आणि Precision ===
exports.CSS5_LABEL = "CSS · Level 5 — Shape, Cut आणि Precision";
exports.cssLevel5 = [
    {
        slug: "css-clip-path",
        categoryId: "web",
        title: "Clip Path",
        marathiTitle: "clip-path — कापलेले आकार",
        level: "advanced",
        minutes: 30,
        summary: "polygon, circle आणि दृश्य कट.",
        sections: [
            { title: "1. कट कल्पना", content: "clip-path घटक कापतो.\n\nआकाराबाहेर लपते.\n\nimage सुंदर बनते.\n\ndekor साठी सोपा.\n\nborder सोबत वेगळा.\n\nनवीन नियम जोडा.", code: `.cut {
  clip-path: circle(50%);
}`, codeLanguage: "css" },
            { title: "2. polygon बिंदू", content: "polygon मध्ये निर्देशांक.\n\nतीन बिंदू त्रिकोण.\n\nटक्के आणि pixels शक्य.\n\nप्रत्येक बिंदू क्रम.\nchip.sh कोपरे सुंदर.\n\nआकार स्वतंत्र.", code: `.chip {
  clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);
}`, codeLanguage: "css" },
            { title: "3. circle आणि inset", content: "circle मध्यवर्ती आकार.\n\ninset आतून कोपरा कापतो.\n\nकाठ अचूक मोजा.\n\ninset मध्ये चार मूल्ये.\n\nrounded सह व्यवस्था.\n\nदोन्ही उपयोगी.", code: `.badge {
  clip-path: inset(0 0 0 20%);
}`, codeLanguage: "css" },
            { title: "4. निर्देशांक गणित", content: "कॅल्क्युलेशन मूल्ये.\n\nटक्के हवे तसे मोडतात.\n\nकाही function संगत.\n\nसाधेपणा राखा.\n\nप्रत्येक आकार काळजी.", code: `.edge {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);
}`, codeLanguage: "css" },
            { title: "5. hover बदल", content: "clip-path hover मध्ये बदलता.\n\ntransition गुळगुळीत.\n\nसर्व बिंदू योग्य क्रम.", code: `.box {
  clip-path: circle(30%);
  transition: clip-path 0.4s;
}
.box:hover {
  clip-path: circle(60%);
}`, codeLanguage: "css" },
            { title: "6. आधार", content: "clip-path आधार मजबूत.\n\nनवीन सर्वत्र चालते.\n\nप्रवेश्यता दृष्टीने.\n\nकार्यात्मकता ठेवा.", code: `.deco {
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "टॅग chip shape तयार.", code: `.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["clip-path काय?", "polygon कसे?", "inset कुठे?"],
        quiz: [
            { question: "clip-path?", options: ["कापतो", "रंगतो", "वाढतो"], correct: 0 },
            { question: "polygon?", options: ["बिंदू", "रेषा", "रंग"], correct: 0 },
            { question: "circle मध्ये?", options: ["50%", "दोन", "नाव"], correct: 0 },
            { question: "transition लागतो?", options: ["हवे", "नको", "कडे"], correct: 0 },
        ],
        challenge: {
            prompt: "हेडर निमित्त tag तयार.",
            starterCode: `.tag { clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); }`,
            expectedOutput: "Renders a clipped tag shape",
        },
        interviewQuestions: ["c", "l", "i", "p", "-", "p", "a", "t", "h", " ", "आ", "ध", "ा", "र", "?"],
        related: ["css-gradient-deep", "css-pseudo-classes", "css-shape-outside"],
        prev: "css-marathi-capstone4",
        next: "css-gradient-deep",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-gradient-deep",
        categoryId: "web",
        title: "Gradient Deep",
        marathiTitle: "ग्रेडियंट गणित",
        level: "advanced",
        minutes: 30,
        summary: "conic, radial आणि color stops नियंत्रण.",
        sections: [
            { title: "1. linear नियम", content: "linear-gradient दिशा गणित.\n\nटक्के मूल्य order.\n\nangle ने दिशा व्यवस्था.\n\nस्टॉपचे स्थान महत्त्वाचे.\n\nरंग संक्रमण सुरळीत.\n\nअचूक नियंत्रण हवे.", code: `.stripes {
  background: linear-gradient(45deg, #6366f1 25%, #a5b4fc 25%);
}`, codeLanguage: "css" },
            { title: "2. color stops", content: "स्टॉपवर रंग बदलतो.\n\nटक्के शून्य ते शंभर.\n\nhard stop ने टोक कापले.\n\nगुळगुळीत शेडिंग.\n\nlocation नियंत्रण नेमके.", code: `.band {
  background: linear-gradient(90deg, red 0%, orange 50%, yellow 100%);
}`, codeLanguage: "css" },
            { title: "3. radial केंद्र", content: "radial मध्यवर्ती विस्तार.\n\ncircle दश एकसमान.\n\nclosest-side नियम.\n\nप्रकाश सोबत सुंदर.\n\nआकार तपासता.", code: `.glow {
  background: radial-gradient(circle at 30% 30%, #38bdf8, #0f172a);
}`, codeLanguage: "css" },
            { title: "4. conic पट्टी", content: "conic मध्यवर्तीभोवती फिरते.\n\nटक्के बेरीज 100.\n\nआकडेवारी दृश्य.", code: `.pie {
  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);
}`, codeLanguage: "css" },
            { title: "5. repeating थर", content: "repeating-linear खाच.\nrepeating-radial वलय.\nएकसारखे नमुने.\nउपयोगी लहान भाग.", code: `.zebra {
  background: repeating-linear-gradient(0deg, #f8fafc 0 10px, #e2e8f0 10px 20px);
}`, codeLanguage: "css" },
            { title: "6. आधार आणि परिस्थिती", content: "ग्रेडियंट आधार उत्तम.\nपॅटर्नस सर्वत्र.\nबचत graphics.\nप्रवेश्यता रंग जपा.\nउतरवण्यापूर्वी तपासा.\nआधुनिक नियम सोबत.", code: `.hero {
  background: linear-gradient(160deg, #7c3aed 0%, #db2777 100%);
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "पाई chart card बनवा.\nचार भाग.", code: `.pie-badge {
  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["stops काय?", "conic कुठे?", "repeating कसे?"],
        quiz: [
            { question: "linear-gradient?", options: ["दिशा", "फिरणे", "राग"], correct: 0 },
            { question: "hard stop?", options: ["टोक", "गुळगुळीत", "रंग"], correct: 0 },
            { question: "conic काय?", options: ["पाई", "ग्रिड", "सावली"], correct: 0 },
            { question: "radial at?", options: ["केंद्र", "कडा", "शीर्ष"], correct: 0 },
        ],
        challenge: {
            prompt: "तिरकस पट्टे band बनवा.",
            starterCode: `.band { background: repeating-linear-gradient(45deg, #6366f1 0 12px, #a5b4fc 12px 24px); }`,
            expectedOutput: "Renders a striped diagonal band",
        },
        interviewQuestions: ["ग", "्", "र", "े", "ड", "ि", "य", "ं", "ट", " ", "उ", "प", "य", "ो", "ग", "?"],
        related: ["css-clip-path", "css-grid-auto-flow", "css-pseudo-classes"],
        prev: "css-clip-path",
        next: "css-grid-auto-flow",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-grid-auto-flow",
        categoryId: "web",
        title: "Grid Auto Flow",
        marathiTitle: "grid-auto — ऑटो विधान",
        level: "advanced",
        minutes: 30,
        summary: "auto-flow, auto-rows आणि dense नियम.",
        sections: [
            { title: "1. ऑटो भरणा", content: "ग्रिड मुलांना स्वयं भरते.\nrow ने पुढे पंक्ती.\ncolumn ने उभी रचना.\norder नुसार क्रम.\nप्रत्येक घटक जोडला.", code: `.grid {
  display: grid;
  grid-auto-flow: row;
}`, codeLanguage: "css" },
            { title: "2. auto-rows", content: "auto-rows नव्या ओळी उंची.\nउघड्या मूल्यांवर उपाय.\nminmax लवचिकता.\nसर्व अज्ञात पंक्ती.\nसोपी समानता.", code: `.grid {
  grid-auto-rows: minmax(80px, auto);
}`, codeLanguage: "css" },
            { title: "3. dense नियम", content: "dense मागील जागा भरते.\nsource order बदलत नाही.\nगॅलरीसाठी उत्तम.", code: `.grid {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
            { title: "4. column दिशा", content: "column auto ने उभी वाढ.\nछोटे column सेट.\nauto-columns रुंदी.\nvertical मजकूर सोय.\nअक्षर नियम नसल्यास.", code: `.cols {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}`, codeLanguage: "css" },
            { title: "5. explicit मिश्रण", content: "template-row आणि auto.\nexplicit प्रथम नियम.\nबाकी भाग auto.\nएकत्र शक्ती.\nसहज वाढ व्यवस्था.", code: `.mix {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 60px;
}`, codeLanguage: "css" },
            { title: "6. आधार ग्रिड", content: "grid आधार भक्कम.\nतार्किक गणना.\nप्रत्येक ब्राउझर समान.\nglobal ला सुरक्षा.", code: `.flow {
  display: grid;
  grid-auto-flow: row dense;
  gap: 8px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "chip ग्रिड dense तयार.\nलहान मोठे भाग.", code: `.chips {
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 36px;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["auto-flow काय?", "dense कसे?", "rows कुठे?"],
        quiz: [
            { question: "auto-flow?", options: ["क्रम", "रंग", "कडा"], correct: 0 },
            { question: "dense?", options: ["भरते", "लपते", "वाढते"], correct: 0 },
            { question: "auto-rows?", options: ["उंची", "रुंदी", "रंग"], correct: 0 },
            { question: "column flow?", options: ["उभी", "सपाट", "चौरस"], correct: 0 },
        ],
        challenge: {
            prompt: "dense chip grid तयार.",
            starterCode: `grid-auto-flow: dense with auto-rows`,
            expectedOutput: "Renders a dense packed chip grid",
        },
        interviewQuestions: ["g", "r", "i", "d", " ", "a", "u", "t", "o", " ", "उ", "प", "य", "ो", "ग", "?"],
        related: ["css-clip-path", "css-counters-lists", "css-gradient-deep"],
        prev: "css-gradient-deep",
        next: "css-counters-lists",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-counters-lists",
        categoryId: "web",
        title: "Counters Lists",
        marathiTitle: "काउंटर आणि यादी",
        level: "advanced",
        minutes: 30,
        summary: "counter-reset, increment आणि display यादी.",
        sections: [
            { title: "1. काउंटर कल्पना", content: "काउंटर संख्या गिनती.\nकोणताही html नाही.\nCSS मध्ये व्यवस्था.\nअनुक्रम स्थिर.", code: `body {
  counter-reset: section;
}`, codeLanguage: "css" },
            { title: "2. increment नियम", content: "counter-increment पुढे टाकतो.\nदुसरे मूल्य सुरुवात.\nक्रम वाढतो.\nनवीन शाखा.", code: `h2 {
  counter-increment: section;
}
h2::before {
  content: counter(section) ". ";
}`, codeLanguage: "css" },
            { title: "3. list style", content: "list-style नियम साधा.\nक्रम मजबूत.\nedit साठी स्पष्ट.", code: `ul {
  list-style: square inside;
}`, codeLanguage: "css" },
            { title: "4. nested काउंटर", content: "nested heading दोन स्तर.\ntop वर reset.\nसबविभाग increment.\nअनुक्रम खोल.\nस्वयंसिद्ध समजतो.", code: `h3::before {
  content: counter(section) "." counter(subsection) " ";
  counter-increment: subsection;
}`, codeLanguage: "css" },
            { title: "5. @counter-style", content: "symbols प्रकार.\nsystem नियम.\nनाव line वापरा.\nआधार मर्यादित.\ncustom बरोबर.", code: `@counter-style marathi {
  system: cyclic;
  symbols: "१" "२" "३";
}
ol {
  list-style: marathi;
}`, codeLanguage: "css" },
            { title: "6. आधार आणि उपयोग", content: "काउंटर आधार रुंद.\n@counter-style नवीन.\naccessibility scrollbar नियम.\nmarker पासून अर्थ.\nसाधेपणा ठेवा.", code: `ol {
  list-style: devanagari;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "दस्तऐवज numbering तयार.\nदोन स्तर.", code: `h2::before {
  content: counter(sec) ". ";
  counter-increment: sec;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["reset काय?", "increment कसे?", "marker कुठे?"],
        quiz: [
            { question: "counter-reset?", options: ["शून्य", "दोन", "रंग"], correct: 0 },
            { question: "increment?", options: ["वाढ", "घट", "नाव"], correct: 0 },
            { question: "list-style?", options: ["marker", "color", "gap"], correct: 0 },
            { question: "nested?", options: ["दोन स्तर", "एक", "तीन"], correct: 0 },
        ],
        challenge: {
            prompt: "दस्ताऐवज 1.1 numbering साधा.",
            starterCode: `body { counter-reset: sec subs; }`,
            expectedOutput: "Renders auto-numbered section headings",
        },
        interviewQuestions: ["क", "ा", "उ", "ं", "ट", "र", " ", "उ", "प", "य", "ो", "ग", "?"],
        related: ["css-shape-outside", "css-pseudo-classes", "css-gradient-deep"],
        prev: "css-grid-auto-flow",
        next: "css-shape-outside",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-shape-outside",
        categoryId: "web",
        title: "Shape Outside",
        marathiTitle: "shape-outside — मजकूर आकार",
        level: "advanced",
        minutes: 30,
        summary: "मजकूर float आकाराभोवती वाहतो.",
        sections: [
            { title: "1. आकार भोवती", content: "shape-outside float चा आकार बदलतो.\nमजकूर त्या मार्गाने.\ncircle सह मानेदार.\neditorial खूब उत्तम.\nनसल्यास साधी.", code: `.pic {
  float: left;
  shape-outside: circle(50%);
}`, codeLanguage: "css" },
            { title: "2. polygon वाहणे", content: "polygon मध्ये वाकडे.\nटक्के चांगले.\nआधार मोजा.\nप्रत्येक बिंदू अचूक.\nimage सोबत जुळते.", code: `.blob {
  float: left;
  width: 220px;
  shape-outside: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}`, codeLanguage: "css" },
            { title: "3. float अंतर", content: "float तरंग annotation.\nshape-margin अंतर जोडतो.\nजागा गुळगुळीत.\nपट मोकळी लागते.\nवाचन स्पष्ट.", code: `.quote-float {
  float: right;
  shape-outside: margin-box;
  shape-margin: 14px;
}`, codeLanguage: "css" },
            { title: "4. image alpha", content: "shape-from-image फिरते.\nआधार नवीन.\nसुंदर प्रभाव.\nप्रयोग सोपा.", code: `.leaf {
  float: left;
  shape-outside: url(leaf.png);
  shape-image-threshold: 0.5;
}`, codeLanguage: "css" },
            { title: "5. break नियम", content: "आकाराभोवती break गरज.\nshape-margin ने खुला.\nखालील ओळ वाहते.\nगणना ठीक.\nवाचन व्यवस्थित.", code: `.wrap {
  float: none;
}
.shape-block {
  overflow: hidden;
}`, codeLanguage: "css" },
            { title: "6. आधार", content: "shape-outside आधार मध्यम.\nमजकूर नेहमी स्पष्ट.\nलहान स्क्रीन सांभाळ.\nजागा तपासा.", code: `@media (max-width: 480px) {
  .pic {
    float: none;
    shape-outside: none;
    width: 100%;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "बातमी image वाकडा.\ncircle मध्यभागी.", code: `.news-img {
  float: left;
  shape-outside: circle(40%);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["shape काय?", "margin कसे?", "break कुठे?"],
        quiz: [
            { question: "shape-outside?", options: ["आकार", "रंग", "फॉन्ट"], correct: 0 },
            { question: "float लागतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
            { question: "shape-margin?", options: ["अंतर", "जाडी", "नाव"], correct: 0 },
            { question: "image alpha?", options: ["पारदर्शक", "कडक", "मोठा"], correct: 0 },
        ],
        challenge: {
            prompt: "circle avatar उजवीकडे तरंग.",
            starterCode: `.avatar { float: right; shape-outside: circle(50%); }`,
            expectedOutput: "Renders text flowing around a circular avatar",
        },
        interviewQuestions: ["s", "h", "a", "p", "e", " ", "उ", "प", "य", "ो", "ग", "?"],
        related: ["css-counters-lists", "css-clip-path", "css-scrollbar-style"],
        prev: "css-counters-lists",
        next: "css-scrollbar-style",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-scrollbar-style",
        categoryId: "web",
        title: "Scrollbar Style",
        marathiTitle: "scrollbar — देखावा नियम",
        level: "advanced",
        minutes: 30,
        summary: "scrollbar-color, width आणि custom नियम.",
        sections: [
            { title: "1. scrollbar प्रकार", content: "स्क्रोलबार बदलता.\nदिशा दोन्ही.\ncolor आणि width.\nखास ठिकाणी व्यवस्था.\nस्थिर राहते.\nस्वच्छ देखावा.", code: `.outer {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 #e2e8f0;
}`, codeLanguage: "css" },
            { title: "2. scrollbar-width", content: "मोठा नको.\nप्रत्येक browser.\nसोपी लाइनर.\nमोकळे दृश्य.", code: `.panel {
  scrollbar-width: thin;
}`, codeLanguage: "css" },
            { title: "3. scrollbar-color", content: "color दोन मूल्ये.\nthumb आणि track.\nसुसंगत रंग निवडा.\ndark themed.\nकंट्रास्ट जपा.\nस्पष्ट नियंत्रण.", code: `.dark {
  background: #0f172a;
  scrollbar-color: #64748b #1e293b;
}`, codeLanguage: "css" },
            { title: "4. webkit नियम", content: "::-webkit-scrollbar खास.\nthumb gradient.\ntrack रंग.\nइतर browser ने वेगळा.\ncss prefix विचार.\nजुने न प्रणाळी.", code: `.list::-webkit-scrollbar {
  width: 10px;
}
.list::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 8px;
}`, codeLanguage: "css" },
            { title: "5. प्रवेश्यता", content: "scrollbar दिसणारा ठेवा.\nथंड पेक्षा स्वच्छ.\nकीबोर्ड tab.\nप्रत्येक स्थिती.\nनिश्चित टोक.", code: `.scroll {
  overflow: auto;
  scroll-behavior: smooth;
}`, codeLanguage: "css" },
            { title: "6. आधार", content: "color आधार मजबूत.\nwebkit फक्त क्रोम.\nएकत्र नियम.\nप्रत्येक browser चालते.\nप्रवाह तपासा.\nकोड सुबक.", code: `.box {
  scrollbar-width: thin;
  scrollbar-color: #dc2626 #fecaca;
}
.box::-webkit-scrollbar {
  width: 8px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "chat panel scrollbar रंगा.\ndark theme.", code: `.chat {
  scrollbar-color: #38bdf8 #0f172a;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["width काय?", "color कसे?", "webkit कुठे?"],
        quiz: [
            { question: "scrollbar-width?", options: ["thin", "bold", "large"], correct: 0 },
            { question: "color मूल्ये?", options: ["दोन", "तीन", "चार"], correct: 0 },
            { question: "webkit?", options: ["क्रोम", "फायर", "सफारी"], correct: 0 },
            { question: "जुने ब्राउझर?", options: ["साधा", "रंगीत", "गहि"], correct: 0 },
        ],
        challenge: {
            prompt: "dark chat scrollbar साधा.",
            starterCode: `.chat { scrollbar-width: thin; scrollbar-color: #38bdf8 #0f172a; }`,
            expectedOutput: "Renders a thin themed scrollbar",
        },
        interviewQuestions: ["s", "c", "r", "o", "l", "l", "b", "a", "r", " ", "आ", "ध", "ा", "र", "?"],
        related: ["css-shape-outside", "css-stacking-context", "css-viewport-units"],
        prev: "css-shape-outside",
        next: "css-stacking-context",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-stacking-context",
        categoryId: "web",
        title: "Stacking Context",
        marathiTitle: "stacking — दृश्य थर",
        level: "advanced",
        minutes: 30,
        summary: "z-index, position आणि थर नियम.",
        sections: [
            { title: "1. थर कल्पना", content: "घटक थरांमध्ये निवडतात.\nposition सोबत चालतो.\nvisual ची व्यवस्था.", code: `.over {
  position: relative;
  z-index: 10;
}`, codeLanguage: "css" },
            { title: "2. position भूमिका", content: "position निवड स्पष्ट.\nrelative नवीन संदर्भ.\nप्रत्येक क्रम स्पष्ट.\nकोड वाचता.", code: `.all {
  position: fixed;
  z-index: 100;
}`, codeLanguage: "css" },
            { title: "3. z-index नियम", content: "auto अनिश्चित.\nसंख्या जितकी मोठी.\ntransform नवीन संदर्भ.\nप्रत्येक संदर्भ आतला.\nप्रमाण ठेवा.", code: `.a {
  position: relative;
  z-index: 5;
}
.b {
  position: relative;
  z-index: 9;
}`, codeLanguage: "css" },
            { title: "4. संदर्भ निर्मिती", content: "काही गुणधर्म नवीन संदर्भ.\ntransform आतला.\nपॅरेंट संबंधित.", code: `.glass {
  opacity: 0.8;
}
.card {
  filter: drop-shadow(0 0 4px #000);
}`, codeLanguage: "css" },
            { title: "5. modal नियम", content: "overlay मागील.\nz-index स्पष्ट.\nbody सोबत गांठी.\nकीबोर्ड management.\nreserve साठी मोठा.", code: `.overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 40%);
  z-index: 50;
}
.modal {
  position: fixed;
  z-index: 60;
}`, codeLanguage: "css" },
            { title: "6. आधार आणि सवय", content: "z-index सर्वत्र चालते.\nबहुतेक थर टाळा.\nस्पष्ट numbering.\nप्रत्येक संदर्भ test.\nसध्या सोपे राहो.", code: `.top {
  z-index: 999;
}
.bottom {
  z-index: 1;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "tooltip त्याच वर.\nmodal joint.", code: `.tooltip {
  position: absolute;
  z-index: 30;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["थर काय?", "z-index कसे?", "modal कुठे?"],
        quiz: [
            { question: "z-index?", options: ["क्रम", "रंग", "नाव"], correct: 0 },
            { question: "position लागतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
            { question: "transform?", options: ["संदर्भ", "रंग", "गीत"], correct: 0 },
            { question: "overlay?", options: ["थर", "टीप", "काळफ"], correct: 0 },
        ],
        challenge: {
            prompt: "tooltip above button साधा.",
            starterCode: `.btn { position: relative; } .tip { position: absolute; z-index: 20; }`,
            expectedOutput: "Renders a tooltip above its button",
        },
        interviewQuestions: ["s", "t", "a", "c", "k", "i", "n", "g", " ", "स", "ं", "द", "र", "्", "भ", "?"],
        related: ["css-scrollbar-style", "css-pseudo-classes", "css-viewport-units"],
        prev: "css-scrollbar-style",
        next: "css-pseudo-classes",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-pseudo-classes",
        categoryId: "web",
        title: "Pseudo Classes",
        marathiTitle: "पseudo-classes — अद्वितीय निवड",
        level: "advanced",
        minutes: 30,
        summary: ":is :where :not आणि nth नियम.",
        sections: [
            { title: "1. :is() नियम", content: ":is() एकत्र निवडी.\nकमी वाक्य.\nसगळे match.\nसोपे सोयीचे.\nselectors एकत्र.\n:is() निवड सरावाने पक्के होते.\n:is() निवड पाया मजबूत आहे.\n:is() निवड आज विषय आत्मसात करा.\n:is() निवड संपूर्ण अर्थ उमजतो.\n:is() निवड हे तत्व आहे.\n:is() निवड सुरुवात येथे होते.\n:is() निवड अर्थ लक्षात ठेवा.\n:is() निवड संपूर्ण अर्थ उमजतो.\n:is() निवड हे तत्व आहे.\n:is() निवड सुरुवात येथे होते.\n:is() निवड अर्थ लक्षात ठेवा.\n:is() निवड मराठीतून समजतो.\n:is() निवड रचना स्पष्ट होते.\n:is() निवड ब्राउझर ते करतो.", code: `:is(h1, h2, h3) {
  margin-top: 1.5em;
}`, codeLanguage: "css" },
            { title: "2. :where() वजन", content: ":where() शून्य specificity.\nहलके नियम.\nसाध्यांपेक्षा कमी.\nसानुकूल जुळते.\nउपयोग सुरक्षित.\nनवीन लिहिणे.\n:where() वजन वापर सोपा आहे.\n:where() वजन अचूक गुण देतो.\n:where() वजन प्रत्येक वेळी शिकवतो.\n:where() वजन सरावाने नक्की.\n:where() वजन शैली प्रत्यक्ष पहा.\n:where() वजन कोड तपासा.\n:where() वजन उदाहरण चालवा.\n:where() वजन सरावाने नक्की.\n:where() वजन शैली प्रत्यक्ष पहा.\n:where() वजन कोड तपासा.\n:where() वजन उदाहरण चालवा.\n:where() वजन पेजवर दिसते.\n:where() वजन नियमाचा अर्थ कळतो.\n:where() वजन नेहमी वापरा.", code: `:where(nav, footer) a {
  color: #475569;
}`, codeLanguage: "css" },
            { title: "3. :not() उलट", content: ":not() नकार देतो.\nएक किंवा अनेक.\nकालबाह्य वगळा.\nspecificity जोडते.\nगरज अचूक निवडा.\nस्वरूप स्पष्ट.\n:not() उलट parent child समजते.\n:not() उलट नियम कडक आहे.\n:not() उलट पाळला तर सोपे.\n:not() उलट गोंधळ टाळतो.\n:not() उलट रचना स्थिर राहते.\n:not() उलट क्रम नेहमी सारखा.\n:not() उलट भाग जुळतात.\n:not() उलट गोंधळ टाळतो.\n:not() उलट रचना स्थिर राहते.\n:not() उलट क्रम नेहमी सारखा.\n:not() उलट भाग जुळतात.\n:not() उलट स्वरूप नीट होते.\n:not() उलट खोली संतुलित आहे.\n:not() उलट नियम बरोबर.", code: `li:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
            { title: "4. nth गणित", content: "nth-child An+B गणित.\n3n मधील तिसरा.\nपहिला आणि शेवट.\nक्रम तपासा.\nप्रगती नमुन्यांत.", code: `tr:nth-child(odd) {
  background: #f8fafc;
}`, codeLanguage: "css" },
            { title: "5. :target भेद", content: ":target निवड लिंक.\nइतर link नवा.\nid चे भिंत.\nhighlight विभाग.\nफक्त ते दिसते.\nउपयोग सोपा.\n:target भेद आत्मविश्वास वाढतो.\n:target भेद दररोज थोडे सरावा.\n:target भेद प्रयोग करायला घ्या.\n:target भेद शिकणे प्रगत होते.\n:target भेद सराव करून पहा.\n:target भेद प्रत्येक ठिकाणी लिहा.\n:target भेद चुका सुधारा.\n:target भेद शिकणे प्रगत होते.\n:target भेद सराव करून पहा.\n:target भेद प्रत्येक ठिकाणी लिहा.\n:target भेद चुका सुधारा.\n:target भेद पुन्हा तपासा.\n:target भेद हाताने करून दिसेल.\n:target भेद उदाहरण स्वतंत्र वापरा.", code: `section:target {
  background: #fef9c3;
}`, codeLanguage: "css" },
            { title: "6. संयोग सवय", content: "एकत्र :is :where.\nspecificity नियम जपा.\nवाक्य वाचता.\nअर्थ स्पष्ट.\nआधार मजबूत.", code: `:where(article) :is(h2, h3):not(:first-child) {
  margin-top: 1em;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "कार्ड list निवडी सुधारा.\nodd even.", code: `.list li:nth-child(odd) {
  background: #eef2ff;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: [":is काय?", ":where जड?", ":not कसे?"],
        quiz: [
            { question: ":is()?", options: ["जोड", "तोड", "रंग"], correct: 0 },
            { question: ":where() वजन?", options: ["शून्य", "उच्च", "मध्य"], correct: 0 },
            { question: ":not()?", options: ["नकार", "जोड", "वाढ"], correct: 0 },
            { question: "nth-child?", options: ["गणित", "रंग", "नाव"], correct: 0 },
        ],
        challenge: {
            prompt: "odd rows accent साधा.",
            starterCode: `.list li:nth-child(odd) { background: #eef2ff; }`,
            expectedOutput: "Renders a zebra-striped list",
        },
        interviewQuestions: ["p", "s", "e", "u", "d", "o", " ", "आ", "ध", "ा", "र", "?"],
        related: ["css-stacking-context", "css-counters-lists", "css-viewport-units"],
        prev: "css-stacking-context",
        next: "css-viewport-units",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-viewport-units-2",
        categoryId: "web",
        title: "Viewport Units",
        marathiTitle: "viewport units — आकार एकक",
        level: "advanced",
        minutes: 30,
        summary: "dv, sv, lv आणि container units.",
        sections: [
            { title: "1. vw vh नियम", content: "vw रुंदीप्रमाणे.\nvh उंचीप्रमाणे.\n100vh पूर्ण पडदा.\nव्यवस्था हलते.\nआधार मजबूत.", code: `.full {
  height: 100vh;
}`, codeLanguage: "css" },
            { title: "2. dvh बदल", content: "प्रत्येक परिस्थिती.\nनवीन निवड हवी.", code: `.hero-phone {
  height: 100dvh;
}`, codeLanguage: "css" },
            { title: "3. svh आणि lvh", content: "svh लहान दृश्य.\nlvh मोठा दृश्य.\nसुरक्षित sizing.\nकीबोर्ड खुला ध्यान.\nप्रत्येक ब्राउझर नवा.\nमोबाईल प्रयोग.", code: `.safe {
  height: 100svh;
}
.wide {
  height: 100lvh;
}`, codeLanguage: "css" },
            { title: "4. container units", content: "cqw कंटेनर रुंदी.\nस्वतंत्र वाचन.\ncontainer-type लागतो.\nनवीन स्तर.", code: `.card {
  container-type: inline-size;
}
.card .btn {
  font-size: 2cqi;
}`, codeLanguage: "css" },
            { title: "5. एकत्र नियम", content: "min clamp वापरा.\nएकक क्रम.\nएककांचे रहस्य.\nप्रत्येक गरज.\nसध्याचे प्रयोग.\nप्रमाण स्थिर.", code: `.type {
  font-size: clamp(1rem, 3cqi, 2.2rem);
}`, codeLanguage: "css" },
            { title: "6. आधार तपास", content: "dvh आधार नवीन.\n@supports तपासा.\nमोबाईल तपासणी.\nसुरक्षित मोड.", code: `.page {
  min-height: 100vh;
}
@supports (height: 100dvh) {
  .page {
    min-height: 100dvh;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "मोबाईल तपास.", code: `.cta {
  min-height: 100dvh;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["vw काय?", "dvh कुठे?", "cqi कसे?"],
        quiz: [
            { question: "100vh?", options: ["पूर्ण", "अर्धा", "रंग"], correct: 0 },
            { question: "dvh?", options: ["डायनॅमिक", "साधा", "जाड"], correct: 0 },
            { question: "svh?", options: ["लहान", "मोठा", "मध्य"], correct: 0 },
            { question: "cqi?", options: ["कंटेनर", "पेज", "फॉन्ट"], correct: 0 },
        ],
        challenge: {
            prompt: "मोबाईल full cta साधा.",
            starterCode: `.cta { min-height: 100dvh; }`,
            expectedOutput: "Renders a full-height call-to-action block",
        },
        interviewQuestions: ["u", "n", "i", "t", "s", " ", "आ", "ध", "ा", "र", "?"],
        related: ["css-pseudo-classes", "css-media-ranges", "css-scrollbar-style"],
        prev: "css-pseudo-classes",
        next: "css-media-ranges",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-media-ranges",
        categoryId: "web",
        title: "Media Ranges",
        marathiTitle: "media ranges — आकार सीमा",
        level: "advanced",
        minutes: 30,
        summary: "range syntax आणि container ranges.",
        sections: [
            { title: "1. range वाक्य", content: "आधुनिक media range.\nwidth आणि height.\noperator सोबत गणित.\nजुने क्लासिक.\nवाचन सोपे.", code: `@media (width >= 700px) {
  .main {
    display: grid;
  }
}`, codeLanguage: "css" },
            { title: "2. and range", content: "width antara.\nand जोडते.\nश्रेणी अचूक.\nपर्यंत ठीक.\nप्रत्येक device.", code: `@media (400px <= width <= 800px) {
  .panel {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
            { title: "3. orientation", content: "orientation सरळ.\nportrait उभा.\nlandscape सपाट.\nranges नाही लागत.\nमोबाईल नियम.\nदृश्य बदलते.", code: `@media (orientation: landscape) {
  .hero {
    flex-direction: row;
  }
}`, codeLanguage: "css" },
            { title: "4. container ranges", content: "container श्रेणी समान.\ncqi मोजमाप.\n@container नियम.\nफक्त घटक पेक्षा.\nसंदर्भ सॉफ्ट.\nनवीन आधार.", code: `@container (width >= 320px) {
  .item {
    font-size: 1.2rem;
  }
}`, codeLanguage: "css" },
            { title: "5. आधार संवाद", content: "range आधार घट्ट.\nएकत्र @supports.\nप्रत्येक environment.\nअचूक determination.\nतपासणी सवय.", code: `@media (width < 480px) and (prefers-color-scheme: dark) {
  body {
    font-size: 18px;
  }
}`, codeLanguage: "css" },
            { title: "6. उपयोग सवय", content: "तेजस्वी गणित.\nवाचकाला अर्थ.\nश्रेणी तपासा.\nप्रत्येक change पहा.", code: `@media (700px <= width <= 1000px) {
  .article {
    max-width: 40ch;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "range ने आणखी grid.\nदोन breakpoints.", code: `@media (600px <= width <= 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["range काय?", "antara कसे?", "container कुठे?"],
        quiz: [
            { question: "width >= ?", options: ["सीमा", "रंग", "नाव"], correct: 0 },
            { question: "<= मध्ये?", options: ["श्रेणी", "साधा", "फॉन्ट"], correct: 0 },
            { question: "(400 <= w <= 800)?", options: ["दोन्ही", "एक", "नाही"], correct: 0 },
            { question: "container range?", options: ["cqi", "vw", "px"], correct: 0 },
        ],
        challenge: {
            prompt: "लहान त्प मोठा grid साधा.",
            starterCode: `@media (width >= 900px) { .grid { grid-template-columns: repeat(3, 1fr); } }`,
            expectedOutput: "Renders a responsive grid via range queries",
        },
        interviewQuestions: ["m", "e", "d", "i", "a", " ", "r", "a", "n", "g", "e", " ", "आ", "ध", "ा", "र", "?"],
        related: ["css-viewport-units", "css-border-effects", "css-pseudo-classes"],
        prev: "css-viewport-units",
        next: "css-border-effects",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-border-effects",
        categoryId: "web",
        title: "Border Effects",
        marathiTitle: "border effects — काठ नियम",
        level: "advanced",
        minutes: 30,
        summary: "border-image, dotted आणि तोल.",
        sections: [
            { title: "1. border मूलभूत", content: "border काठ सजवतो.\nsolid dashed.\nकोड सोबत असा.\nradius गुळगुळीत.\nसाधा प्रारंभ.", code: `.box {
  border: 2px solid #0891b2;
  border-radius: 10px;
}`, codeLanguage: "css" },
            { title: "2. border-image", content: "slice भाग व्यवस्था.\nrepeat stretch.\nएकसारखी कापणी.\nआधार मर्यादित.\nप्रयोग परीक्षा.", code: `.frame {
  border: 14px solid transparent;
  border-image: url(rope.png) 14 round;
}`, codeLanguage: "css" },
            { title: "3. double आणि groove", content: "double दुहेरी काठ.\ngroove खड्डा.\noutset उंच.\nप्रत्येक स्वरूप.\nरंग नेमका.\noriginal दिसतो.", code: `.groove {
  border: 6px groove #64748b;
}`, codeLanguage: "css" },
            { title: "4. radius रहस्य", content: "टक्के प्रमाण.\n50% वर्तुळ.\nएक रचना विषम.\nवेगवेगळे ठेका.", code: `.circle-avatar {
  border-radius: 50%;
  aspect-ratio: 1;
}`, codeLanguage: "css" },
            { title: "5. clip रेषा", content: "border सोबत clip.\ngradient काठ.\nbackground clip.\nलेख साठी सजावट.\nरंग सीमा.\nउपयुक्त प्रभाव.", code: `.grad {
  border: 3px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(90deg, #6366f1, #ec4899) border-box;
}`, codeLanguage: "css" },
            { title: "6. आधार", content: "border आधार सर्वत्र.\nborder-image नवीन.\nप्रत्येक घटक नियम.\nकोड साधा.\nआकृती तपासा.", code: `.outline {
  outline: 2px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "टॅप gradient काठ.\nसाधा card.", code: `.card {
  border: 2px solid;
  border-image: linear-gradient(90deg, #6366f1, #ec4899) 1;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["border काय?", "image कसे?", "gradient कुठे?"],
        quiz: [
            { question: "border-style?", options: ["solid", "रंग", "सावली"], correct: 0 },
            { question: "border-image?", options: ["प्रतिमा", "फॉन्ट", "एकक"], correct: 0 },
            { question: "border-radius?", options: ["कोपरा", "रंग", "नाव"], correct: 0 },
            { question: "gradient काठ?", options: ["पॅडिंग", "मार्जिन", "उंची"], correct: 0 },
        ],
        challenge: {
            prompt: "gradient outline card साधा.",
            starterCode: `.card { border: 2px solid transparent; border-image: linear-gradient(90deg, #6366f1, #ec4899) 1; }`,
            expectedOutput: "Renders a card with gradient border",
        },
        interviewQuestions: ["b", "o", "r", "d", "e", "r", " ", "उ", "प", "य", "ो", "ग", "?"],
        related: ["css-media-ranges", "css-clip-path", "css-gradient-deep"],
        prev: "css-media-ranges",
        next: "css-marathi-capstone5",
        levelLabel: exports.CSS5_LABEL,
    },
    {
        slug: "css-marathi-capstone5",
        categoryId: "web",
        title: "Marathi Capstone 5",
        marathiTitle: "Visual portal — अंतिम देखावा",
        level: "advanced",
        minutes: 30,
        summary: "सर्व Level 5 तंत्रांचा संग्रह.",
        sections: [
            { title: "1. ध्येय", content: "visual portal एक पेज.\nग्रेडियंट ध्वज.\nकाउंटर विभाग.\nसर्व Level 5 भाग.\nअंतिम portal तयार.", code: `.tag {
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
}`, codeLanguage: "css" },
            { title: "2. पट्टे ध्वज", content: "हेडर पट्टे ग्रेडियंट.\nrepeating केळी.\nवेग नवा.\nसंग्रह रंगीत.\nसंतुलन जपा.", code: `.flag {
  background: repeating-linear-gradient(45deg, #6366f1 0 14px, #a5b4fc 14px 28px);
}`, codeLanguage: "css" },
            { title: "3. काउंटर विभाग", content: "विभाग numbering counter.\n1.1 दोन स्तर.\nlist-style devanagari.\nमजकूर क्रम.\nअनुक्रम स्वयं.\nवाचन स्पष्ट.", code: `section {
  counter-increment: chap;
}
section h2::before {
  content: counter(chap) ". "; 
}`, codeLanguage: "css" },
            { title: "4. मजकूर आकार", content: "avatar circle outside.\nshape-margin अंतर.\nमजकूर वाहतो.\nसुंदर भिंत.\nresponsive तपासा.", code: `.avatar-w {
  float: left;
  shape-outside: circle(45%);
  shape-margin: 12px;
}`, codeLanguage: "css" },
            { title: "5. थर आणि निवड", content: "scrollbar thin.\nstacking tooltip वर.\nnth odd रंग.\npseudo जोडे.\nथर व्यवस्थित.\nकेवळ keyboard.", code: `:where(.portal) li:nth-child(odd) {
  background: #eef2ff;
}
.tooltip {
  z-index: 20;
}`, codeLanguage: "css" },
            { title: "6. आकार आणि media", content: "range श्रेणी.\nकंटेनर cqi.\n1000px grid.\nमोबाईल प्रयोग.\nअंतिम तपासणी.", code: `@media (width >= 900px) {
  .portal-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "सर्व parts जोडा.", code: `.portal {
  min-height: 100dvh;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["ध्वज कसे?", "काउंटर कुठे?", "आकार काय?"],
        quiz: [
            { question: "portal?", options: ["एक पेज", "दोन", "तीन"], correct: 0 },
            { question: "gradient पट्टा?", options: ["repeating", "color", "image"], correct: 0 },
            { question: "counter?", options: ["increment", "reset", "जाड"], correct: 0 },
            { question: "range media?", options: [">=", "नाव", "आवाज"], correct: 0 },
        ],
        challenge: {
            prompt: "visual portal पूर्ण.",
            starterCode: `.portal { min-height: 100dvh; }`,
            expectedOutput: "Renders polished Marathi visual portal using Level 5 techniques",
        },
        interviewQuestions: ["L", "e", "v", "e", "l", " ", "5", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
        related: ["css-border-effects", "css-clip-path"],
        prev: "css-border-effects",
        next: "css-clip-path",
        levelLabel: exports.CSS5_LABEL,
    },
];
