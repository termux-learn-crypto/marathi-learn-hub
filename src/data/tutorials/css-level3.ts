import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 3 — आधुनिक CSS तंत्र ===
export const CSS3_LABEL = "CSS · Level 3 — आधुनिक CSS: Nesting, Scroll आणि Positioning";

export const cssLevel3: Tutorial[] = [
  {
    slug: "css-custom-properties-deep",
    categoryId: "web",
    title: "Custom Properties Deep",
    marathiTitle: "Custom properties — वारसा खोल",
    level: "advanced",
    minutes: 25,
    summary: "वारसा, fallback, जावास्क्रिप्ट संवाद आणि typed properties.",
    sections: [
      { title: "1. variable वारसा", content: "custom property ही वारशाने पुढे जाते.\n\nपालक असेल तोपर्यंत सर्व मुलांना लागते.\n\nघटकाला नवीन मूल्य दिले तर तेच वापरते.\n\nवेगवेगळ्या भागांना वेगवेगळा रंग देता.\n\nथीम ही अशीच खाली वाहते.\n\nवारसा समजणे महत्त्वाचे.", code: `:root {
  --accent: #0f766e;
}
.card {
  --accent: #b91c1c;
  color: var(--accent);
}`, codeLanguage: "css" },
      { title: "2. fallback मूल्य", content: "var() ला दुसरे मूल्य सोबत देतो.\n\nमूळ नसल्यास fallback वापरते.\n\nfallback हा शेवटचा पर्याय होय.\n\nसुरक्षित वापर जपता येतो.", code: `.btn {
  color: var(--accent, #2563eb);
}`, codeLanguage: "css" },
      { title: "3. जावास्क्रिप्ट वाचन", content: "जावास्क्रिप्ट मधून variable वाचता.\n\ngetPropertyValue ने मूल्य रीड.\n\nकोणत्याही घटकावर ठरते.\n\nदुसरीकडे बदल सरळ होतो.\n\nरंग गतिशील करता येतो.\n\nसंगणित मूल्य तंतोतंत मिळते.", code: `const cs = getComputedStyle(el);
const v = cs.getPropertyValue("--accent").trim();`, codeLanguage: "css" },
      { title: "4. सेटिंग जावास्क्रिप्ट", content: "setProperty ने variable बदलता.\n\nएका ठिकाणी बदल; सर्वत्र नवे.\n\nआणि revert मागे जातो.\n\nअनुभव नियंत्रित राहतो.", code: `el.style.setProperty("--accent", "#0ea5e9");`, codeLanguage: "css" },
      { title: "5. transition युक्त", content: "variable वर transition चालू होतो.\n\ntransition गुणधर्म नेहमी यादी देतो.\n\nरंग बदल गुळगुळीत होतो.\n\nगणित मूल्येच हलतात.\n\nरंग आणि संख्या सुंदर बदलतात.\n\nहालचाल उत्तम दिसते.", code: `.theme {
  transition: color 0.3s, background 0.3s;
}`, codeLanguage: "css" },
      { title: "6. typed properties", content: "@property चे नियम असतात.\n\nsyntax मूल्य प्रकार ठरवतो.\n\nअशी typed शैली जास्त स्थिर.", code: `@property --ratio {
  syntax: "<ratio>";
  inherits: false;
  initial-value: 1 / 1;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन switch रंग.\ndark mode बटण.\ntransition गुळगुळीत पहा.", code: `html[data-theme="dark"] {
  --bg: #111;
  --fg: #eee;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["variable वारसा कसा?", "fallback काय?", "जावास्क्रिप्ट से कसे?"],
    quiz: [
      { question: "var() fallback?", options: ["दुसरे मूल्य", "रंग", "वेग"], correct: 0 },
      { question: "getPropertyValue?", options: ["वाचते", "लिहते", "लपवते"], correct: 0 },
      { question: "setProperty?", options: ["बदलते", "वाढते", "गणती"], correct: 0 },
      { question: "@property syntax?", options: ["प्रकार", "नाव", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "dark mode थीम",
      starterCode: `html[data-theme="dark"] { --bg: #111; }`,
      expectedOutput: "Renders theme toggler demo",
    },
    interviewQuestions: ["variable वर transition?", "@property फायदा?"],
    related: ["css-marathi-capstone2", "css-scroll-driven"],
    prev: "css-marathi-capstone2",
    next: "css-scroll-driven",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-scroll-driven-2",
    categoryId: "web",
    title: "Scroll-Driven",
    marathiTitle: "Scroll-driven — हालचाल जोडणी",
    level: "advanced",
    minutes: 25,
    summary: "scroll-timeline, animation-timeline आणि view-timeline प्रभाव.",
    sections: [
      { title: "1. स्क्रोल संकल्पना", content: "स्क्रोल ही हालचालच नव्हे.\nपुढे सरकल्यावर animation जागते.\nवर गेल्यावर मागे सरकते.\nscroll चा वेग नियंत्रित करता.\nस्वतंत्र स्क्रिप्ट लागत नाही.\nहे नवीन तंत्र आता वाढले आहे.", code: `.bar {
  animation-timeline: scroll();
}`, codeLanguage: "css" },
      { title: "2. scroll-timeline", content: "scroll-timeline ला एक नाव दिले जाते.\nकोणता रोलर हलता हे ठरते.\nscroll(root) हा मुख्यच.\nतुमच्या घटकाचा थर निवडता.\nहालचाल ठिकाणी अवलंबून असते.\nनाव असले पाहिजे.", code: `section {
  scroll-timeline: sec;
}`, codeLanguage: "css" },
      { title: "3. animation-timeline", content: "animation-timeline चा संबंध जोडतो.\n@keyframes चालवतो सोबत.\nस्क्रोल पावला टप्पे.\ntimeline रेंज सीमा निवडता.\nmisplaced नियंत्रण नाही.\nप्रवाह गुळगुळीत असतो.", code: `.progress {
  animation: fill linear;
  animation-timeline: scroll(block);
}`, codeLanguage: "css" },
      { title: "4. view-timeline", content: "view-timeline ला दृश्य संदर्भ देतो.\nजेव्हा विभाग क्षेत्रात येतो.\nनिर्गम सीमा हा शेवट.\nघटक दिसताच हालचाल सुरू.\nअसणे सोयीचे आहे.", code: `.reveal {
  view-timeline: v;
  animation: fade linear both;
  animation-timeline: v;
}`, codeLanguage: "css" },
      { title: "5. रेंज नियम", content: "range स्क्रोलचा टप्पा ठरवतो.\ncontain घटकांचा आतला भाग.\nexit नंतर बाहेर सरकतो.\nentry आरंभीच मात्रा.\nनिवड अचूक करता येते.", code: `@keyframes fade {
  to { opacity: 1; translate: 0 0; }
}`, codeLanguage: "css" },
      { title: "6. आधार सूचना", content: "स्क्रोल-ड्रिव्हन सर्वत्र नाही.\n@supports ने तपासा आतल्या.\nजुन्या ब्राउझरसाठी static.\ntransitions वर स्थिर परत.", code: `@supports (animation-timeline: scroll()) {
  .bar { animation-timeline: scroll(); }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "स्क्रोल प्रोग्रेस बार बनवा.\nscroll() timeline.\nreduced पर्याय सोबत.\nscroll() नियम मानक पाळा.\nscroll() नियम आधार तपासा.\nscroll() नियम साधेपणा ठेवा.\nscroll() नियम कोड सुबक ठेवा.\nscroll() नियम वेबवर वापरा.\nscroll() नियम शैली योग्य निवडा.\nscroll() नियम मर्यादा पाळा.\nscroll() नियम कोड सुबक ठेवा.\nscroll() नियम वेबवर वापरा.\nscroll() नियम शैली योग्य निवडा.\nscroll() नियम मर्यादा पाळा.\nscroll() नियम नाव योग्य द्या.\nscroll() नियम गुणधर्म जोडा.\nscroll() नियम ब्राउझर बदल पडेल.", code: `body {
  animation: fill linear;
  animation-timeline: scroll();
}
@keyframes fill {
  from { outline-color: #ddd; }
  to { outline-color: teal; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scroll-timeline काय?", "animation-timeline काढते?", "view रेंज काय?"],
    quiz: [
      { question: "scroll() आधार?", options: ["मुख्य स्क्रोल", "रंग", "फॉन्ट"], correct: 0 },
      { question: "view-timeline?", options: ["दृश्य क्षेत्र", "नाव", "अक्षर"], correct: 0 },
      { question: "cover रेंज?", options: ["पूर्ण क्षेत्र", "अर्धा", "रंग"], correct: 0 },
      { question: "@supports का?", options: ["आधार तपास", "वेग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "स्क्रोल प्रोग्रेस",
      starterCode: `body { animation-timeline: scroll(); }`,
      expectedOutput: "Renders scroll progress demo",
    },
    interviewQuestions: ["स्क्रोल animation फायदा?", "प्रवेश्यता कशी?"],
    related: ["css-custom-properties-deep", "css-drag-media"],
    prev: "css-custom-properties-deep",
    next: "css-drag-media",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-drag-media",
    categoryId: "web",
    title: "Drag & Media",
    marathiTitle: "Drag and media — परिसर ओळख",
    level: "advanced",
    minutes: 25,
    summary: "pointer, hover, color-gamut आणि scripting queries.",
    sections: [
      { title: "1. परिसर queries", content: "media ने परिसर विचारता.\nhover उपलब्ध आहे का?\npointer दृश्य कोणते?\ncolor-gamut रंग क्षमता.\nप्रत्येक उत्तरावर शैली बदलते.", code: `@media (hover: hover) {
  .card:hover { translate: 0 -4px; }
}`, codeLanguage: "css" },
      { title: "2. hover असणे", content: "hover मध्ये उंदीर असतो.\nखऱ्या hover साठी हा query.\nटच स्क्रीनवर hover नसतो.\nखोट्या स्पर्शाने क्लिकच जाते.\nठिकाण वाटणे स्पष्ट करा.\nनियम अशा दिशांनी लावा.", code: `a.tap {
  display: block;
  min-height: 44px;
}`, codeLanguage: "css" },
      { title: "3. pointer ओळख", content: "pointer ने अचूक यंत्र ओळखता.\nfine म्हणजे नेमके input.\ncoarse म्हणजे बोट.\nhover accuracy बदलते.", code: `@media (pointer: coarse) {
  button { min-height: 44px; }
}`, codeLanguage: "css" },
      { title: "4. color-gamut", content: "color-gamut रंग क्षमता देतो.\np3 उंच रंग घेतो.\nsrgb हे सर्वत्र.\nब्रॉड रंग enhance करता.\nनवीन पडद्यावर उत्तम.\nजुन्यावर शांत राहतो.", code: `@media (color-gamut: p3) {
  .hero {
    color: color(display-p3 0 0.5 0.45);
  }
}`, codeLanguage: "css" },
      { title: "5. scripting query", content: "scripting उपलब्धता तपासता.\nenabled स्क्रिप्ट चालते.\nnone मध्ये काही नाही.\ninitial-only आरंभीचे होते.", code: `@media (scripting: none) {
  .tab { display: block; }
}`, codeLanguage: "css" },
      { title: "6. लघु उपकरणांमध्ये", content: "हे queries आताही मदत.\nएकत्र vite केलेले.\nवापरकर्त्याला भाव जोडतो.\nप्रवेश्यता सध्याचा मुख्य.\nसर्व नियम सातत्याने.", code: `@media (hover: none), (pointer: coarse) {
  .menu { padding: 0.75rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मल्टीमीडिया कार्ड पेज.\nhover fine वर lift.\ntouch coarse वर target.\np3 रंग सुधारणा.", code: `@media (hover: hover) {
  .card:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
}
@media (pointer: coarse) {
  .card { min-height: 48px; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["hover none म्हणजे?", "pointer coarse?", "color-gamut काय?"],
    quiz: [
      { question: "hover: hover?", options: ["उंदीर", "बोट", "केमेरा"], correct: 0 },
      { question: "pointer coarse?", options: ["स्पर्श", "पेन", "माउस"], correct: 0 },
      { question: "p3 म्हणजे?", options: ["रंग रुंद", "छोटा", "आवाज"], correct: 0 },
      { question: "scripting none?", options: ["स्क्रिप्ट नाही", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "परिसर प्रतिसाद कार्ड",
      starterCode: `@media (hover: hover) { .card:hover { translate: 0 -4px; } }`,
      expectedOutput: "Renders environment-aware card",
    },
    interviewQuestions: ["coarse target का?", "gamut प्रवेश?"],
    related: ["css-scroll-driven", "css-view-transitions"],
    prev: "css-scroll-driven",
    next: "css-view-transitions",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-view-transitions-2",
    categoryId: "web",
    title: "View Transitions",
    marathiTitle: "View transitions — दृश्य संक्रमण",
    level: "advanced",
    minutes: 25,
    summary: "view-transition API, shared element आणि सुलभ नियंत्रण.",
    sections: [
      { title: "1. संक्रमण API", content: "पेज बदलताना दृश्य गुळगुळीत.\nजावास्क्रिप्ट फक्त ट्रिगर देतो.\nCSS ने रचना आणि प्रभाव ठरतो.", code: `::view-transition-group(root) {
  animation-duration: 0.4s;
}`, codeLanguage: "css" },
      { title: "2. shared element", content: "दोन्ही दृश्यांतील घटक जोडता.\nview-transition-name हे नाव.\nएकच घटक सलग दिसेल.\nशीर्षक नाव अद्वितीय हवे.\nदृश्य संक्रमण सहज भरते.\nरंग आणि आकार वाकतात.", code: `.title {
  view-transition-name: heading;
}`, codeLanguage: "css" },
      { title: "3. pair निर्मिती", content: "::view-transition-image-pair क्षेत्र.\nold आणि new थर असतात.\nblend mode सुधारता.\nsequence काढून हलवता.\nजटिलता वाढवू नये.", code: `::view-transition-image-pair(*) {
  mix-blend-mode: normal;
}`, codeLanguage: "css" },
      { title: "4. कालावधी नियम", content: "कालावधी मर्यादित ठेवा.\noverlay थर प्रथम बाहेर.\ntransition मधला विलंब.\nसंयोजन रुचकर असू द्या.\nखिचडी टाळा साधेपणा.\nसतत विचारात घ्या.", code: `::view-transition-old(root) {
  animation-duration: 0.2s;
}
::view-transition-new(root) {
  animation-duration: 0.3s;
}`, codeLanguage: "css" },
      { title: "5. देखावा नियंत्रण", content: "केवळ भाग बदलताना दाखवा.\nclass क्षेत्र मर्यादित ठेवा.", code: `::view-transition-group(info) {
  animation: none;
}`, codeLanguage: "css" },
      { title: "6. आधार तपासणी", content: "ट्रांझिशन API प्रत्येकजण नाही.\nजावास्क्रिप्ट मध्ये तपासा.\nfail नसल्यास सरळ बदल.\nप्रगतीशील वाढच योग्य.\ncompanion अजूनही चालू.\nसर्व ब्राउझरसाठी सुरक्षा.", code: `if (document.startViewTransition) {
  document.startViewTransition(() => swap());
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्ट स्विचर पेज बनवा.\nसंक्रमण नावे दोन.\nसौम्य कालावधी.\nआधार तपासणीसह.", code: `.page {
  view-transition-name: article;
  animation-duration: 0.3s;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["view transition काय?", "नाव कसे द्यावे?", "जुने नवे काय?"],
    quiz: [
      { question: "ट्रिगर काय?", options: ["startViewTransition", "reload", "scroll"], correct: 0 },
      { question: "नामकरण?", options: ["view-transition-name", "color", "width"], correct: 0 },
      { question: "old/new?", options: ["दोन्ही थर", "एकच", "फॉन्ट"], correct: 0 },
      { question: "आधार तपास?", options: ["if presence", "गणती", "nave"], correct: 0 },
    ],
    challenge: {
      prompt: "पेज स्विच पेज",
      starterCode: `.page { view-transition-name: article; }`,
      expectedOutput: "Renders smooth page transition",
    },
    interviewQuestions: ["जावास्क्रिप्ट लागेल?", "shared element नियम?"],
    related: ["css-drag-media", "css-at-property"],
    prev: "css-drag-media",
    next: "css-at-property",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-at-property",
    categoryId: "web",
    title: "@property",
    marathiTitle: "@property — घोषित मूल्य",
    level: "advanced",
    minutes: 25,
    summary: "syntax, inherits, initial-value आणि animation interpolation.",
    sections: [
      { title: "1. @property कल्पना", content: "@property ने custom type घोषित करते.\nsyntax मध्ये प्रकार लिहितो.\ninitial-value आरंभीचे मूल्य.\nब्राउझरला प्रकार माहीत.", code: `@property --x {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}`, codeLanguage: "css" },
      { title: "2. syntax प्रकार", content: "syntax मध्ये type देतो.\n<length>, <color>, <number>.\n<percentage> वाढीव.\nकस्टम bool शक्य.\nप्रकार नियंत्रित होते.\nअचूक डेटा बंधनकारक.", code: `@property --hue {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}`, codeLanguage: "css" },
      { title: "3. रंग animation", content: "रंग variable पूर्वी गुळगुळीत नव्हता.\ntransition मधे हळूहळू होता.\n@property दिल्यावर सहज बदलतो.\nब्राउझरला रंग समजतो.\npurple ते blue संक्रमण.\nहा नवा अनुभव मिळतो.", code: `@property --brand {
  syntax: "<color>";
  inherits: true;
  initial-value: #0f766e;
}`, codeLanguage: "css" },
      { title: "4. चक्र हालचाल", content: "0% ते 100% गुळगुळीत.\nआकार आणि अंतर बदलते.\nनक्कीच दृश्य दिसते.", code: `@property --p {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
.prog { width: var(--p); }`, codeLanguage: "css" },
      { title: "5. registerProperty", content: "जावास्क्रिप्ट मधून register.\nnew syntax वापरता सुरूआत.\nsame type आणि inherits.\nडॉक्युमेंटच्या आधी करा.\nआधाराबाहेर राहू नये.\nनाव नेहमी -- सह.", code: `CSS.registerProperty({
  name: "--m",
  syntax: "<number>",
  inherits: false,
  initialValue: "0"
});`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@property आधार काहीतरी.\n@supports ने तपासता.\nfail नसल्यास साधा fallback.\nप्रगतीशील अपग्रेड.\nहे सोबत वेब नियम.", code: `@supports (syntax: "<color>") {
  @property --brand {
    syntax: "<color>";
    inherits: true;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "animated progress पेज बनवा.\n@property typed.\ntransition गुळगुळीत.\nआधार fallback सोबत.", code: `@property --fill {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 20%;
}
.bar { width: var(--fill); transition: --fill 1s; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@property काय घोषित?", "syntax का?", "registerProperty कधी?"],
    quiz: [
      { question: "@property syntax?", options: ["प्रकार", "नाव", "आकार"], correct: 0 },
      { question: "रंग transition?", options: ["गुळगुळीत", "थबक", "रिटर्न"], correct: 0 },
      { question: "inherits?", options: ["वारसा", "रंग", "वेग"], correct: 0 },
      { question: "registerProperty?", options: ["जावास्क्रिप्ट", "रंग", "लुप्त"], correct: 0 },
    ],
    challenge: {
      prompt: "गुळगुळीत प्रोग्रेस",
      starterCode: `@property --fill { syntax: "<percentage>"; }`,
      expectedOutput: "Renders interpolating progress bar",
    },
    interviewQuestions: ["typed variable फायदा?", "आधार कसा तपासता?"],
    related: ["css-view-transitions", "css-masonry-grid"],
    prev: "css-view-transitions",
    next: "css-masonry-grid",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-masonry-grid",
    categoryId: "web",
    title: "Masonry Grid",
    marathiTitle: "Masonry — जोडणी जाळी",
    level: "advanced",
    minutes: 25,
    summary: "मोठ्या स्तंभात नसलेली masonry रचना आणि dense पूर्णकरण.",
    sections: [
      { title: "1. masonry कल्पना", content: "masonry मध्ये आकार भिन्न असतात.\nप्रत्येक घटक नैसर्गिक उंची.\nपुढील स्तंभात अंतर भरतो.\nPinterest सारखा देखावा.\nओळ नसलेली जाळी नीट.\nहे तंत्र अजून नवीन आहे.", code: `.gallery {
  display: grid;
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "2. स्तंभ रुंदी", content: "auto-fill भर घालतो.\nminmax लहान खिडकीसाठी.\nघटक आपली उंची जपतात.\nजागा व्यवस्थित वाटते.", code: `.gallery {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}`, codeLanguage: "css" },
      { title: "3. ब्लॉक भराव", content: "masonry मध्ये जागा खाली भरली जाते.\nस्वच्छ अंतर दिसतो.\nफंक्शन नेहमी चांगले.\nसाधेपणा फायद्याचा.", code: `.item {
  margin-bottom: 1rem;
}`, codeLanguage: "css" },
      { title: "4. dense पर्याय", content: "dense मध्ये लहान तुकडे भरतात.\nपुढे मोठे येऊ शकतात.\nलेआउट घट होण्यास येते.\nआधारानुसार निवड शक्य.\nअर्ज मोठा असेल तर वापरा.", code: `.gallery {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
      { title: "5. आधार स्थिती", content: "grid-template-rows: masonry आधार कमी.\n@supports ने वेगळे नियम.\nfail नसल्यास साधा grid.\nदोन्ही दृश्ये स्वीकार्य.\nहे तंतोतंत प्रगतीशील.\nप्रत्येक पेज निर्माण होईल.", code: `@supports (grid-template-rows: masonry) {
  .wrap { grid-template-rows: masonry; }
}`, codeLanguage: "css" },
      { title: "6. प्रयोग सूचना", content: "आकार वेगवेगळे निवडा.\nloading सुलभ ठेवा.\nनिरनिराळे पर्याय तपासा.\nयोग्य उद्देशासाठीच वापरा.\nसरावाने रचना पक्की.", code: `.card img {
  width: 100%;
  height: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मराठी गॅलरी पेज बनवा.\n@supports guard.\nप्रत्येक कार्ड स्वयं आकार.", code: `.gallery {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
@supports (grid-template-rows: masonry) {
  .gallery { grid-template-rows: masonry; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["masonry म्हणजे?", "dense काय करतो?", "आधार कसा तपासतात?"],
    quiz: [
      { question: "masonry rows?", options: ["वेगळे आकार", "सरळ", "रंग"], correct: 0 },
      { question: "dense?", options: ["जागा भरते", "रंग देतो", "इलात"], correct: 0 },
      { question: "auto-fill?", options: ["स्तंभ समायोजन", "नाव", "फॉन्ट"], correct: 0 },
      { question: "@supports?", options: ["आधार तपास", "वेग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "मेसॉनरी गॅलरी",
      starterCode: `@supports (grid-template-rows: masonry) { .gallery { grid-template-rows: masonry; } }`,
      expectedOutput: "Renders masonry photo grid",
    },
    interviewQuestions: ["masonry vs grid?", "dense कधी योग्य?"],
    related: ["css-at-property", "css-isolation-mix"],
    prev: "css-at-property",
    next: "css-isolation-mix",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-isolation-mix",
    categoryId: "web",
    title: "Isolation & Mix",
    marathiTitle: "Isolation — थर संदर्भ",
    level: "advanced",
    minutes: 25,
    summary: "contain combined, isolation, blend patterns आणि stacking अभ्यास.",
    sections: [
      { title: "1. isolation एकत्र", content: "isolate सोबत contain जोडता.\nब्लेंड बाहेर नाही.\nstacking विश्वासार्ह.\nस्वतंत्र विजेट स्थिर.\nरचना विश्वसनीय होते.", code: `.widget {
  isolation: isolate;
  contain: paint;
}`, codeLanguage: "css" },
      { title: "2. blend मिश्रण", content: "blend शैली थरांना एकत्र आणते.\nmultiply दाट सावली.\nnormal हा साधा.", code: `.hero {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "3. stacking अभ्यास", content: "प्रत्येक isolation नवीन संदर्भ.\nबाहेरील क्रम तोलतात.\nmodal नेहमी सुरक्षित.\nअनेक थरांचा गोंधळ नाही.\nअनुक्रम स्पष्ट ठेवा.", code: `.menu {
  isolation: isolate;
  z-index: 5;
}`, codeLanguage: "css" },
      { title: "4. contain combo", content: "contain ला अनेक मूल्ये.\ncontent मध्ये कंटेनर.\nकामगिरी सुधारते.\nनियमांबद्दल जागरूक असा.", code: `.panel {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "5. layer pattern", content: "थर व्यवस्था layer द्वारे.\nstacking सुद्धा यादी.\nजुना नियम सापडेल.\nव्यवस्थापन सोपे.", code: `@layer base, theme, widgets;`, codeLanguage: "css" },
      { title: "6. आधार आणि सुसंगत", content: "contain देखील सुरक्षित.\nblend थोडा वेगळा असतो.\nसर्व तपासा पडद्यावर.\nस्थिर धोरण मग ठेवा.\nकाम लाभदायक बनेल.", code: `@supports (contain: layout) {
  .panel { contain: layout; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "डॅशबोर्ड थर पेज.\nisolation per widget.\nblend शीर्षकावर.\ncontain तपासणीसह.", code: `.widget {
  isolation: isolate;
  contain: layout paint;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["isolation म्हणजे?", "blend कधी?", "contain strict?"],
    quiz: [
      { question: "isolate?", options: ["नवीन context", "रंग", "आकार"], correct: 0 },
      { question: "multiply?", options: ["गडद", "हलका", "लुप्त"], correct: 0 },
      { question: "strict contain?", options: ["पृथक", "सरळ", "गणना"], correct: 0 },
      { question: "stacking काय?", options: ["क्रम", "रंग", "वेग"], correct: 0 },
    ],
    challenge: {
      prompt: "थर डॅशबोर्ड",
      starterCode: `.widget { isolation: isolate; contain: layout paint; }`,
      expectedOutput: "Renders layered dashboard",
    },
    interviewQuestions: ["blend प्रवेश?", "contain ताकद?"],
    related: ["css-masonry-grid", "css-direction-context"],
    prev: "css-masonry-grid",
    next: "css-direction-context",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-direction-context",
    categoryId: "web",
    title: "Direction & Logical",
    marathiTitle: "Direction — दिशा वारसा",
    level: "advanced",
    minutes: 25,
    summary: "writing-mode, direction आणि logical properties सुसंगतता.",
    sections: [
      { title: "1. भाषा दिशा", content: "भाषेनुसार दिशा बदलते.\nलॉजिकल properties अनुकूल.", code: `html[dir="rtl"] .nav {
  justify-content: flex-end;
}`, codeLanguage: "css" },
      { title: "2. writing-mode", content: "writing-mode ला रेषा ठरवतो.\nhorizontal-tb हे मुख्य.\nvertical-rl दिशा बदलते.\nलॉगो व्यवस्थेसाठी उपयुक्त.\nब्राउझर सर्वत्र करतो.", code: `.sign {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
      { title: "3. logical properties", content: "margin-block वर-खाली शैली.\nmargin-inline डावे-उजवे.\npadding-block समान.\nborder-inline कडा ओळखणे.\nstart/end दिशा भाषेनुसार.", code: `.box {
  margin-inline: auto;
  padding-block: 1rem;
}`, codeLanguage: "css" },
      { title: "4. text-align दिशा", content: "सुरुवात भाषेच्या आरंभी.\nend ही शेवटची दिशा.\nमराठीप्रमाणे हिंदी वापरते.\nकेंद्रण सहज राहते.", code: `.quote {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. css logical एकक", content: "inline size रुंदी ला.\nblock size उंची ला.\nmin-inline लहान मर्यादा.\nswitch भाषा बदलल्यावर.", code: `.field {
  inline-size: 20rem;
}`, codeLanguage: "css" },
      { title: "6. भाषा तपासणी", content: "भाषा बदलताना तपासा.\nजुने physical नियम सोडा.\nlogical हे नवीन आधार.\nउपसर्ग मर्यादित.\nमोठा वाचक कौतुक करतो.\nसरावाने व्यवस्था पक्की.", code: `html[lang="mr"] {
  writing-mode: horizontal-tb;
  direction: ltr;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "द्विभाषिक कार्ड पेज.\nlogical padding.\nstart text-align.\nvertical बॅज.", code: `.badge {
  writing-mode: vertical-rl;
  inline-size: auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["logical काय देतात?", "writing-mode?", "text-align start?"],
    quiz: [
      { question: "margin-inline?", options: ["बाजू", "वर खाली", "रंग"], correct: 0 },
      { question: "vertical-rl?", options: ["उभी ओळ", "आडवी", "संगीत"], correct: 0 },
      { question: "inline-size?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "start दिशा?", options: ["भाषेची सुरूआत", "शेवट", "वेग"], correct: 0 },
    ],
    challenge: {
      prompt: "द्विभाषिक व्यवस्था",
      starterCode: `.box { margin-inline: auto; }`,
      expectedOutput: "Renders logical RTL-safe card",
    },
    interviewQuestions: ["physical vs logical?", "writing-mode कोणते?"],
    related: ["css-isolation-mix", "css-anchor-positioning"],
    prev: "css-isolation-mix",
    next: "css-anchor-positioning",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-anchor-positioning-2",
    categoryId: "web",
    title: "Anchor Positioning",
    marathiTitle: "Anchor — जोड स्थान",
    level: "advanced",
    minutes: 25,
    summary: "anchor-name, position-area आणि position-try प्रतिसाद.",
    sections: [
      { title: "1. anchor कल्पना", content: "anchor मध्ये एक घटक ठिकाण असतो.\nदुसरा त्यावर स्थिर होतो.\nhover मध्ये popup दिसते.\nस्वतंत्र position गणना.\nरचना तरुण तंत्र.\nसुविधा मिळत आहे.", code: `.tip-anchor {
  anchor-name: --tip;
}`, codeLanguage: "css" },
      { title: "2. position-area", content: "position-area क्षेत्र निवडतो.\ntop-left अशी नामे देतो.\nघटक त्या भागात येईल.\nshift नेहमी स्पष्ट.\nअचूक ठिकाण हवे.", code: `.tip {
  position: absolute;
  position-area: bottom;
}`, codeLanguage: "css" },
      { title: "3. inset-area नियम", content: "inset-area मध्ये थोडी जागा.\nहे positioning उपयोगी.\nब्राउझर नवीन मोजे.\nसोपा मार्ग दिसतो.\nव्यावहारिक असेल.", code: `.pop {
  inset-area: top;
}`, codeLanguage: "css" },
      { title: "4. position-try", content: "position-try उलट पर्याय.\nस्वॅप direction आपोआप.\nस्क्रीनच्या बाहेरही.\nreflow न करता बदलतो.", code: `.tip {
  position-try-fallbacks: flip-block;
}`, codeLanguage: "css" },
      { title: "5. जोड स्थानता", content: "anchor दोन्ही नियंत्रित.\nanchor-size समायोजन.\nटूलटिप सरळ जुळते.", code: `.tooltip {
  position: fixed;
  position-anchor: --btn;
  inset-area: top center;
}`, codeLanguage: "css" },
      { title: "6. आधार मर्यादा", content: "@supports मध्ये position-area.\nfail नसल्यास absolute साधा.\nजावास्क्रिप्ट प्रगती.\nसर्जनशीलता नियंत्रित.\nसुरक्षित वापर करा.", code: `@supports (position-area: center) {
  .tip { position-area: bottom center; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "टूलटिप सिस्टीम बनवा.\nanchor नावे.\ninset-area ठिकाण.\nposition-try swaps.", code: `.btn {
  anchor-name: --btn;
}
.tip {
  position: fixed;
  position-anchor: --btn;
  inset-area: top;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor काय?", "position-area?", "position-try कधी?"],
    quiz: [
      { question: "anchor-name?", options: ["जोड खूण", "रंग", "परिमाण"], correct: 0 },
      { question: "inset-area?", options: ["स्थान क्षेत्र", "मार्क", "फॉन्ट"], correct: 0 },
      { question: "flip-block?", options: ["उलट बदल", "रंग", "वेग"], correct: 0 },
      { question: "@supports?", options: ["आधार तपास", "गणती", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "अॅंकर टूलटिप",
      starterCode: `.tip { position: fixed; position-anchor: --btn; }`,
      expectedOutput: "Renders anchored tooltip",
    },
    interviewQuestions: ["position-area vs try?", "आधार कसा?"],
    related: ["css-direction-context", "css-nesting-selectors"],
    prev: "css-direction-context",
    next: "css-nesting-selectors",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-nesting-selectors",
    categoryId: "web",
    title: "Nesting & Scope",
    marathiTitle: "Nesting — घरटी रचना",
    level: "advanced",
    minutes: 25,
    summary: "& selector, @scope नियम आणि :scope संदर्भ स्पष्टता.",
    sections: [
      { title: "1. nesting कल्पना", content: "nesting मध्ये नियम शक्यतो.\nparent च्या आत child.\nकोड वाचायला सोपे.\nकोड कमी सुंदर.\nselector पुनरुक्ति नाही.", code: `.card {
  & h2 {
    color: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "2. & चिन्ह", content: "& हा parent धरतो.\n&:hover सहज दर्शवतो.\ncombine आणखी सरळ.\nउदाहरण class मध्ये वापर.\nस्वयं सापेक्ष राहते.\nचूक होऊ नये.", code: `.btn {
  &:hover {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "3. @scope नियम", content: "@scope मध्ये सीमारेषा निर्दिष्ट करते.\nlimit मध्येच नियम.\nchild तिथेच लागतात.\nजागतिक कोड सुरक्षित.\nनामांचा संघर्ष कमी.", code: `@scope (.widget) to (.foot) {
  .title { color: teal; }
}`, codeLanguage: "css" },
      { title: "4. :scope संदर्भ", content: ":scope हा root स्वतः.\nआतला निवडला तर.\nमुलांचा संदर्भ स्पष्ट.\nselector वाक्य वाचता.\nजटिलता उतरवते.\n:scope संदर्भ screen reader ते वाचते.\n:scope संदर्भ शुद्ध वेब बनतो.\n:scope संदर्भ ही सवय ठेवा.\n:scope संदर्भ आधुनिक दृष्टी घ्या.\n:scope संदर्भ सर्वांसाठी खुला.\n:scope संदर्भ वाचक घाबरत नाही.\n:scope संदर्भ प्रवेशयोग्यता वाढते.\n:scope संदर्भ आधुनिक दृष्टी घ्या.\n:scope संदर्भ सर्वांसाठी खुला.\n:scope संदर्भ वाचक घाबरत नाही.\n:scope संदर्भ प्रवेशयोग्यता वाढते.\n:scope संदर्भ मराठी समजते.\n:scope संदर्भ अर्थ स्पष्ट होतो.\n:scope संदर्भ दृष्टिहीनांना मदत.", code: `@scope {
  :scope {
    border: 1px solid #ccc;
  }
}`, codeLanguage: "css" },
      { title: "5. nesting खोली", content: "खोली मर्यादित ठेवा.\nतीन थर नको.\nअजून खोल चुका.\nवाचनीयता वाढते.", code: `.menu {
  .item {
    &.active {
      font-weight: bold;
    }
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "nesting आधार बऱ्याच जागी.\n@supports चाचणी.\nप्रगतीशील वाढ.\nसुरक्षा पहिली असावी.", code: `@supports selector(:has(&)) {
  .card:has(> a) { padding: 1rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "नॅव्ह बार nesting करा.\n& hover नियम.", code: `.nav {
  & a {
    color: #333;
    &:hover { color: teal; }
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["& काय करतो?", "@scope सीमा?", ":scope म्हणजे?"],
    quiz: [
      { question: "& म्हणजे?", options: ["parent", "child", "रंग"], correct: 0 },
      { question: "@scope?", options: ["सीमा नियम", "गणना", "फॉन्ट"], correct: 0 },
      { question: ":scope?", options: ["स्वतः root", "शेवट", "वेग"], correct: 0 },
      { question: "nesting फायदा?", options: ["वाचनीय", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "नेस्टेड नेव",
      starterCode: `.nav { & a:hover { color: teal; } }`,
      expectedOutput: "Renders nested nav demo",
    },
    interviewQuestions: ["@scope vs legacy?", "nesting खोली किती?"],
    related: ["css-anchor-positioning", "css-performance-advanced"],
    prev: "css-anchor-positioning",
    next: "css-performance-advanced",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-performance-advanced",
    categoryId: "web",
    title: "Performance Advanced",
    marathiTitle: "Performance — वेग वाढ",
    level: "advanced",
    minutes: 25,
    summary: "content-visibility, will-change आणि render संबंध सुधारणा.",
    sections: [
      { title: "1. render मार्ग", content: "पेज render करताना खर्च होतो.\nlayout paint काम जास्त.\nकमाल फ्रेम स्थिर.\nवेग सुधारतो.", code: `.card {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "2. content-visibility", content: "content-visibility दृष्य ठिकाण.\nबाहेरील कंटेंट पेंट नाही.\nस्क्रोलमुळे लोड होतो.\nवेग चांगला वाढतो.\nकाळजी घ्या मर्यादा.", code: `.feed {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "3. contain-intrinsic", content: "contain-intrinsic आरंभी आकार.\nस्क्रोल स्थान अचूक राहतो.\nकुठेही आकस्मिक हाल होते.\nपेंट नसलेल्यांचा आधार.\nनिर्णयामुळे तोल राहतो.", code: `.long {
  contain-intrinsic-size: 400px;
}`, codeLanguage: "css" },
      { title: "4. will-change", content: "will-change आगाऊ घोषणा करते.\nब्राउझर थर तयार करतो.\nanimation गुळगुळीत.\nकेवळ एक दोन ठिकाणी.\nनंतर काढून टाका.", code: `.slide {
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "5. layer ऑर्डर", content: "हजारों नियम वाचताना.\nसमूह एकत्र शोधणे.\nदेखभाल वाढते.\nशैली वाचनीय.", code: `@layer reset, base, components, utils;`, codeLanguage: "css" },
      { title: "6. मोजमाप सवय", content: "मोजमाप tool आधी.\nperformance मोजमाप दाखवा.\nआणि ६० फ्रेम लक्ष्य.\nसुधारणा नंतर पुन्हा.\nविश्लेषण विश्वासार्ह.\nवेग सहज ठरेल.", code: `body {
  user-select: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "content-visibility विभाग.\ncontain-intrinsic आकार.", code: `.section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["content-visibility काय?", "will-change कधी?", "intrinsic का?"],
    quiz: [
      { question: "content-visibility?", options: ["पेंट बचत", "रंग", "वेग"], correct: 0 },
      { question: "intrinsic-size?", options: ["आरंभी आकार", "रंग", "फॉन्ट"], correct: 0 },
      { question: "will-change?", options: ["थर", "नाव", "क्रम"], correct: 0 },
      { question: "@layer?", options: ["व्यवस्था", "गडद", "अक्षर"], correct: 0 },
    ],
    challenge: {
      prompt: "वेगवान फीड",
      starterCode: `.section { content-visibility: auto; }`,
      expectedOutput: "Renders fast scrolling feed",
    },
    interviewQuestions: ["will-change अतिवापर?", "intrinsic आवश्यक?"],
    related: ["css-nesting-selectors", "css-marathi-capstone3"],
    prev: "css-nesting-selectors",
    next: "css-marathi-capstone3",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-marathi-capstone3",
    categoryId: "web",
    title: "Marathi Capstone 3",
    marathiTitle: "Marathi capstone — अंतिम",
    level: "advanced",
    minutes: 25,
    summary: "तीन स्तर एकत्र; वृत्तपत्र editorial आणि आधुनिक dashboard.",
    sections: [
      { title: "1. उद्दिष्ट तिन्ही", content: "हे प्रकल्प तिन्ही पातळी एकत्र.\nanimation थोडासा.\nकामगिरी आणि वेग.", code: `:root {
  --paper: #fdf9f3;
  --ink: #1b1b1b;
  --accent: #9c1c2e;
}`, codeLanguage: "css" },
      { title: "2. editorial व्यवस्था", content: "वृत्तपत्र सदरवार रचना.\nकॉलम अशा grid रचनेत.\nछायाचित्र संरेखित.\narticle सुसंगत.\nवाचकांना मार्ग.", code: `.headline-grid {
  grid-template-columns: repeat(3, 1fr);
}
.editorial {
  colum-gap: 2rem;
  column-count: 2;
}`, codeLanguage: "css" },
      { title: "3. थीम वारसा", content: "भाषा आणि दिशा तपासा.\nlogical properties वापरा.\nभिन्न विभाग रंग.\nरंग switch सोबत.\nसर्व paragraph एकसारखा.", code: `html[lang="mr"] {
  direction: ltr;
}
.quote {
  border-inline-start: 4px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "4. नेव्हिगेशन", content: "nesting मेनू.\nपडद्यावर तपासा.", code: `.nav {
  & a:hover { color: var(--accent); }
}
.tip {
  position-anchor: --menu;
  inset-area: bottom;
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "reduced motion ला आदर.\nfocus दृश्यमान.\ncontrast मोठा.\nमजकूर सुवाच्य.\nप्रत्येक नियम तपासा.", code: `@media (prefers-reduced-motion: reduce) {
  .news { animation: none; }
}
a:focus-visible {
  outline: 2px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी अंतिम", content: "content-visibility लांब विभाग.\nवेग आणि स्थैर्य दोन्ही.", code: `@layer reset, base, layout, utils;
.news {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मराठी editorial portal पूर्ण.\nथीम + व्यवस्था + स्पीड.", code: `:root { --paper: #fdf9f3; --accent: #9c1c2e; }
.news {
  content-visibility: auto;
  grid-template-columns: repeat(3, 1fr);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["तीन स्तर काय?", "reduced motion?", "कामगिरी कशी?"],
    quiz: [
      { question: "logical का?", options: ["दिशा सुसंगत", "रंग", "वेग"], correct: 0 },
      { question: "anchor कुठे?", options: ["टूलटिप", "फॉन्ट", "margin"], correct: 0 },
      { question: "intrinsic?", options: ["स्क्रोल स्थिर", "रंग", "फॉन्ट"], correct: 0 },
      { question: "@layer?", options: ["व्यवस्था", "अंक", "आवाज"], correct: 0 },
    ],
    challenge: {
      prompt: "editorial पोर्टल",
      starterCode: `:root { --accent: #9c1c2e; }`,
      expectedOutput: "Renders polished Marathi editorial portal",
    },
    interviewQuestions: ["Level 3 नवीन काय?", "पुढे कुठे जायचे?"],
    related: ["css-performance-advanced", "css-custom-properties-deep"],
    prev: "css-performance-advanced",
    next: "css-custom-properties-deep",
    levelLabel: CSS3_LABEL,
  },];
