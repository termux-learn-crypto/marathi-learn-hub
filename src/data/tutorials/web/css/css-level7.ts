import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 7 — Design Systems ===
export const CSS7_LABEL = "CSS · Level 7 — Design Systems";

export const cssLevel7: Tutorial[] = [
  {
    slug: "css-custom-props",
    categoryId: "web",
    title: "Custom Properties",
    marathiTitle: "custom — नवीन मूल्य",
    level: "advanced",
    minutes: 34,
    summary: "custom properties आणि var प्रवाह.",
    sections: [
      { title: "1. custom property", content: "--brand custom property.\n\n:root वर घोषणा.\n\ndouble dash नाव.\n\nमूल्य संग्रह.\n\nप्रत्येक विचार.\n\ndynamic व्यवस्था.\n\nनाव अर्थपूर्ण.", code: `:root {
  --brand: #6366f1;
}`, codeLanguage: "css" },
      { title: "2. var एकत्र", content: "var(--brand) वापरा.\n\nजागी मूल्य बसते.\n\nदोन वेळा लिहू नको.\n\nएकच स्रोत.\n\nसुधारणा सोपी.\n\nटीम साठी छान.", code: `.btn {
  background: var(--brand);
  border-color: var(--brand);
}`, codeLanguage: "css" },
      { title: "3. वारसा नियम", content: "घटकाकडून वारसा.\n\nआत बदल तर बदल.\n\nबाहेर स्थिर.\n\nरचना प्रमाण.\n\nथीम स्विच.\n\nलवचिक मूल्य.", code: `.card {
  --radius: 12px;
}
.card.large {
  --radius: 16px;
}`, codeLanguage: "css" },
      { title: "4. scope स्थान", content: "स्कोप ने मर्यादित.\n\nकंटेनर आत.\n\nउदाहरण भाग.\n\nप्रत्येक स्वतंत्र.\n\nनियम स्पष्ट.\n\nव्यवस्था साधी.", code: `.card {
  --pad: 16px;
  padding: var(--pad);
}`, codeLanguage: "css" },
      { title: "5. token गट", content: "tokens गट व्यवस्था.\n\nनाव नियम.\n\nरंग अंतर.\n\nएकत्र संग्रह.\n\nबदल एका जागी.\n\nदेखभाल सोपी.", code: `:root {
  --color-ink: #0f172a;
  --color-paper: #ffffff;
  --space-4: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "custom आधार मजबूत.\nजुने सर्व ब्राउझर.\nvar अनिवार्य.\nनियम सर्वत्र.\nसुरक्षित वापर.", code: `a {
  color: var(--brand, #6366f1);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "रूट टोकन सेट करा.\nएकच रंग.", code: `:root {
  --brand: #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["--brand काय?", "पुढे var कसे?", "स्कोप कुठे?"],
    quiz: [
      { question: "custom property?", options: ["-- नाव", "रंग", "फॉन्ट"], correct: 0 },
      { question: "var()?", options: ["मूल्य", "गती", "आकार"], correct: 0 },
      { question: ":root?", options: ["सर्वात वर", "आत", "शेवट"], correct: 0 },
      { question: "वारसा?", options: ["होय", "नाही", "काही"], correct: 0 },
    ],
    challenge: {
      prompt: "टोकन आधार सेट करा.",
      starterCode: `:root { --brand: #0d9488; }`,
      expectedOutput: "Renders theme from one custom property source",
    },
    interviewQuestions: ["c", "u", "s", "t", "o", "m", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-design-tokens", "css-var-functions", "css-conic-radial"],
    prev: "css-marathi-capstone6",
    next: "css-var-functions",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-var-functions",
    categoryId: "web",
    title: "Var Fallbacks",
    marathiTitle: "var — पडझड नियम",
    level: "advanced",
    minutes: 34,
    summary: "var() fallback आणि थीम स्विच.",
    sections: [
      { title: "1. var गॅच", content: "var() दुसरा fallback.\nप्रथम value शून्य.\nतर fallback बसते.\nरंग strict.\nकोड नरम.\nवापर अचूक.", code: `.btn {
  color: var(--ink, #0f172a);
}`, codeLanguage: "css" },
      { title: "2. रिक्त समस्या", content: "रिक्त value गंभीर.\nvar(,) चुकीचे.\nfallback रिक्त नको.\nकोड तपासा.\nसमस्या आधी.\nप्रॅक्टिस नियम.", code: `.btn {
  color: var(--ink);
}`, codeLanguage: "css" },
      { title: "3. गुणधर्म अलग", content: "प्रत्येक गुणधर्म.\nvar एका जागी.\nवेगळे नियम.\nरंग स्वतंत्र.\nआकार स्वतंत्र.\nसंयोग सोपा.", code: `.chip {
  background: var(--chip-bg, #f1f5f9);
  color: var(--chip-ink, #0f172a);
}`, codeLanguage: "css" },
      { title: "4. nested जोडणी", content: "var आत var.\nएक दुसऱ्यातून.\nमूल्य प्रवाह.\nअंतिम गणना.\nजटिल शक्य.\nसाधे राखा.", code: `:root {
  --accent: var(--brand, #6366f1);
}`, codeLanguage: "css" },
      { title: "5. थीम स्विच", content: "data-theme ते बदल.\ndark प्रकाश.\nvar अदलाबदल.\nएकच कोड.\nसंग्रह स्थिर.\nवापरकर्ता नियंत्रण.", code: `:root[data-theme="dark"] {
  --ink: #e2e8f0;
  --paper: #0f172a;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "var आधार सर्वत्र.\n@property नवीन.\nanimation सोबत.\nअभ्यास सखोल.\nआधुनिक भाग.\nआधार स्थिर.", code: `@property --brand {
  syntax: "<color>";
  initial-value: #6366f1;
  inherits: true;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "डार्क थीम टोकन.\nदोन्ही रंग.", code: `:root[data-mode="dark"] {
  --paper: #0f172a;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["fallback काय?", "रिक्त कसे?", "@property कुठे?"],
    quiz: [
      { question: "var()?", options: ["वापर", "नवीन", "रंग"], correct: 0 },
      { question: "fallback?", options: ["दुसरा", "पहिला", "मोठा"], correct: 0 },
      { question: "रिक्त value?", options: ["चुकीचे", "छान", "सोपे"], correct: 0 },
      { question: "@property?", options: ["नवीन", "जुने", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "थीम var स्विच करा.",
      starterCode: `:root[data-theme="dark"] { --ink: #e2e8f0; }`,
      expectedOutput: "Renders theme switched via var tokens",
    },
    interviewQuestions: ["v", "a", "r", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-custom-props", "css-design-tokens", "css-calc-groove"],
    prev: "css-custom-props",
    next: "css-calc-groove",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-calc-groove",
    categoryId: "web",
    title: "Calc Functions",
    marathiTitle: "calc — गणना नियम",
    level: "advanced",
    minutes: 34,
    summary: "calc min max clamp fluid गणना.",
    sections: [
      { title: "1. calc गणना", content: "calc() मोजते.\nमिश्र एकक.\nरुंदी उंची.\nब्राउझर स्वतः.\nस्पष्ट नियम.\nआधार मजबूत.", code: `.side {
  width: calc(100% - 260px);
}`, codeLanguage: "css" },
      { title: "2. space नियम", content: "चिन्हा भोवती space.\nकमी अधिक.\nगुणाकार space नको.\nकोड वाचता.\nनियम नेमका.\nचुका टाळा.", code: `.box {
  height: calc(100vh - 80px);
}`, codeLanguage: "css" },
      { title: "3. मिश्र एकक", content: "px rem em.\nजोड वजा.\nतार्किक मर्यादा.\nउत्तर स्पष्ट.\nरिझर्व मोजणे.", code: `.gap {
  margin-inline: calc(var(--space) + 4px);
}`, codeLanguage: "css" },
      { title: "4. min max", content: "min() सर्वात लहान.\nmax() सर्वात मोठा.\nclamp() दोन्ही.\nfluid typography.\nअनुकूल आकार.\nआधार नवीन.", code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`, codeLanguage: "css" },
      { title: "5. calc आत var", content: "var आत calc.\nटोकन नियम.\nगणना प्रत्येक.\nएकत्र साधे.\nमूल्य स्पष्ट.\nअचूक वापर.", code: `.card {
  padding: calc(var(--pad) * 2);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "calc आधार व्यापक.\nजुने prefix.\nसामान्य वापर.\nmin max नवे.\nclamp उत्कृष्ट.\nसुरक्षित नियम.", code: `.fluid {
  block-size: clamp(60px, 12vh, 120px);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "hero fluid खोली.\nclamp मूल्य.", code: `.hero {
  padding: clamp(24px, 6vw, 64px);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["calc काय?", "space महत्त्व?", "clamp कुठे?"],
    quiz: [
      { question: "calc()?", options: ["गणना", "रंग", "फॉन्ट"], correct: 0 },
      { question: "space?", options: ["आवश्यक", "नको", "रंग"], correct: 0 },
      { question: "min()?", options: ["लहान", "मोठा", "रंग"], correct: 0 },
      { question: "clamp()?", options: ["दोन माप", "एक", "तीन इ"], correct: 0 },
    ],
    challenge: {
      prompt: "fluid आकार clamp द्या.",
      starterCode: `h1 { font-size: clamp(1.5rem, 4vw, 3rem); }`,
      expectedOutput: "Renders fluid responsive sizing",
    },
    interviewQuestions: ["c", "a", "l", "c", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-custom-props", "css-var-functions", "css-container-queries"],
    prev: "css-var-functions",
    next: "css-keyframes-tip",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-keyframes-tip",
    categoryId: "web",
    title: "Keyframe Tips",
    marathiTitle: "keyframes — गती कल्पना",
    level: "advanced",
    minutes: 34,
    summary: "@keyframes रचना आणि गती नियम.",
    sections: [
      { title: "1. keyframes रचना", content: "@keyframes नाम नियम.\nचरण प्रवास.\nप्रतिशत अधिक.\nanimation नाम.\nनियम स्पष्ट.", code: `@keyframes slide {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "2. transform गृहीत", content: "transform स्वस्त.\nopacity सुरळीत.\nmargin टाळा.\nlayer अचल.\nगती फायदा.\nपरफॉर्मेंस सोपा.", code: `.pop {
  animation: slide 0.4s ease;
}`, codeLanguage: "css" },
      { title: "3. easing वेळ", content: "easing प्रत्येक.\nease-in-out.\ncubic-bezier नेमका.\nस्प्रिंग भास.\nगती नैसर्गिक.\nभाव व्यक्त.", code: `.bouncy {
  animation: pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
      { title: "4. iteration दिशा", content: "iteration गुणाकार.\ndirection उलट.\nalternate दोलन.\nfill-mode कडा.\ndelay लांबन.\ncontrol सोपा.", code: `.blink {
  animation: pulse 1s ease-in-out infinite alternate;
}`, codeLanguage: "css" },
      { title: "5. steps चरण", content: "steps() चरण.\nटिकटॉक प्रभाव.\nचेक ठोक.\nवेग शहर.\nदृश्य छान.", code: `.tick {
  animation: stepy 0.6s steps(3) infinite;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "keyframes आधार मजबूत.\nreduced थांबा.\nanimation none.\nसंवाद स्थिर.\nप्रवेश्यता जपा.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "heart pulse गती.\nएक नियम.", code: `.heart {
  animation: pulse 0.8s ease-in-out infinite;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["keyframes काय?", "steps कुठे?", "easing कसे?"],
    quiz: [
      { question: "@keyframes?", options: ["गती", "रंग", "फॉन्ट"], correct: 0 },
      { question: "from?", options: ["सुरुवात", "शेवट", "रंग"], correct: 0 },
      { question: "alternate?", options: ["दोलन", "सरळ", "थांबे"], correct: 0 },
      { question: "steps()?", options: ["चरण", "अचूक नाही", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "smooth pulse तयार.",
      starterCode: `.heart { animation: pulse 0.8s ease-in-out infinite; }`,
      expectedOutput: "Renders a smooth keyframe pulse",
    },
    interviewQuestions: ["a", "n", "i", "m", "a", "t", "i", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-prefers-reduced", "css-perf-hints", "css-view-transition"],
    prev: "css-calc-groove",
    next: "css-prefers-reduced",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-prefers-reduced",
    categoryId: "web",
    title: "Prefers Reduced",
    marathiTitle: "prefers — प्रवेश्यता",
    level: "advanced",
    minutes: 34,
    summary: "reduced movement आणि colour mood.",
    sections: [
      { title: "1. media प्रश्न", content: "prefers-reduced-motion.\nवापरकर्ता सेटिंग.\nकमी गती.\nनियम ऐकतो.\nप्रवेश्यता आधार.\nआधुनिक सवय.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}`, codeLanguage: "css" },
      { title: "2. no-preference", content: "no-preference पर्याय.\nसामान्य गती.\nreduce ब्लॉक.\nगरज असल्यास.\nकोड दोन्ही.\nसुरक्षित sandbox.", code: `.tile {
  transition: none;
}
@media (prefers-reduced-motion: no-preference) {
  .tile {
    transition: transform 0.4s;
  }
}`, codeLanguage: "css" },
      { title: "3. color-scheme", content: "prefers-color-scheme.\nlight dark वाचतो.\nथीम स्वतः.\nटोकन बदल.\nवापरकर्ता आराम.\nरंग अचूक.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --paper: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "4. contrast तपास", content: "prefers-contrast.\nअधिक फरक.\nकमी फरक.\nदृष्टी आराम.\nवाचनीयता वाढ.\nसाधा नियम.", code: `@media (prefers-contrast: more) {
  .chip {
    border: 2px solid currentColor;
  }
}`, codeLanguage: "css" },
      { title: "5. scroll सवय", content: "scroll-behavior जोडणी.\nsmooth गुळगुळीत.\nauto थांबे.\nफक्त नियम.\nसरळ दिशा.\nवापर नेमका.", code: `html {
  scroll-behavior: auto;
}
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "media आधार जुना.\nप्रत्येक ब्राउझर.\nवाक्य मान्य.\nनियम कडक.\nप्रवेश्यता जपा.\nLevel नियम.", code: `@media (prefers-reduced-motion: no-preference) {
  .fade {
    animation: fade-in 0.4s;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "स्क्रोल सवय लिहा.\nreduced मान्य.", code: `@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["media काय?", "no-preference कुठे?", "contrast कसे?"],
    quiz: [
      { question: "prefers-reduced?", options: ["गती", "रंग", "फॉन्ट"], correct: 0 },
      { question: "no-preference?", options: ["घेते गती", "थांबवे", "रंग"], correct: 0 },
      { question: "color-scheme?", options: ["dark light", "आकार", "कोन"], correct: 0 },
      { question: "smooth?", options: ["गुळगुळीत", "कठोर", "मंद"], correct: 0 },
    ],
    challenge: {
      prompt: "कोणास गती अधिकार.",
      starterCode: `@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }`,
      expectedOutput: "Renders reduced-motion respecting page",
    },
    interviewQuestions: ["p", "r", "e", "f", "e", "r", "s", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-keyframes-tip", "css-container-queries", "css-perf-hints"],
    prev: "css-keyframes-tip",
    next: "css-masonry-grid",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-masonry-grid-2",
    categoryId: "web",
    title: "Masonry Grid",
    marathiTitle: "masonry — रचना प्रवाह",
    level: "advanced",
    minutes: 34,
    summary: "grid masonry आधार आणि उपयोग.",
    sections: [
      { title: "1. masonry कल्पना", content: "grid-template-rows masonry.\nपिन्टेरेस्ट आकार.\nउंची स्वतः.\nrow align नको.\nरचना ओझे.\nआधार नवीन.", code: `.masonry {
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "2. आधार fallback", content: "आधार नवीन.\nजुने column.\nसमान दृश्य.\nसाधा पर्याय.\nकोड दोन्ही.\nसुरक्षा वाढ.", code: `.masonry {
  columns: 3;
}
@supports (grid-template-rows: masonry) {
  .masonry {
    columns: unset;
  }
}`, codeLanguage: "css" },
      { title: "3. आयटम क्रम", content: "आयटम नैसर्गिक.\norder स्थिर.\nरचना प्रवाह.\nप्रत्येक कार्ड.\nतोल सुंदर.\nनियम सोपा.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "4. रुंदी नियम", content: "grid-template-columns.\nरुंदी समान.\nauto-fill flexible.\nमोबाइल आधी.\nस्क्रीन प्रत्येक.\nरचना लवचिक.", code: `.masonry {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "5. अंतर तोल", content: "gap समान.\nrow अंतर.\ncolumn अंतर.\nकार्ड सुबक.\nदृश्य शांत.\nकोड छोटा.", code: `.masonry {
  gap: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार निरीक्षण", content: "masonry नवीन नियम.\nक्षमता तपासा.\nनेट प्रदर्शन.\nजुने column साधा.\nरचना टिकाव.\nआधार गहिरो.", code: `@supports not (grid-template-rows: masonry) {
  .masonry {
    columns: 3 1;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "simple gallery दोन.\ncolumn fallback.", code: `@supports (grid-template-rows: masonry) {
  .gallery {
    columns: unset;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: masonry;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["masonry काय?", "fallback कसे?", "columns कुठे?"],
    quiz: [
      { question: "masonry?", options: ["उंची स्वतः", "रंग", "फॉन्ट"], correct: 0 },
      { question: "@supports?", options: ["तपास", "रंग", "आकार"], correct: 0 },
      { question: "columns?", options: ["जुना साधा", "नवीन", "रंग"], correct: 0 },
      { question: "gap?", options: ["अंतर", "जाड", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "masonry gallery fallback द्या.",
      starterCode: `.gallery { columns: 2; }`,
      expectedOutput: "Renders masonry grid with fallback",
    },
    interviewQuestions: ["m", "a", "s", "o", "n", "r", "y", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-container-queries", "css-gap-mastery", "css-conic-radial"],
    prev: "css-prefers-reduced",
    next: "css-container-queries",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-container-queries-2",
    categoryId: "web",
    title: "Container Queries",
    marathiTitle: "container — क्वेरी युग",
    level: "advanced",
    minutes: 34,
    summary: "container-type आणि @container नियम.",
    sections: [
      { title: "1. container नियम", content: "container-type inline-size.\nकंटेनर नाव.\n@container प्रश्न.\nघटक बदल.\nव्यवस्था स्पष्ट.\nआधार नवीन.", code: `.card {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "2. नामांकित", content: "container-name नाव.\nविशिष्ट कंटेनर.\nस्थान नेमके.\nएकत्र कंटेनर.\nकार्ड शैली.\nनियम सुबक.", code: `.feed { container-name: feed; }
@container feed (min-width: 400px) {
  .card {
    display: grid;
  }
}`, codeLanguage: "css" },
      { title: "3. सांगाडा शैली", content: "व्यापक शैली.\nक्वेरी काट.\nलहान मोठा.\nपुनर्वापर.\nफ्लेक्स ग्रिड.\nरचना बदल.", code: `.card {
  container-type: inline-size;
}
@container (min-width: 420px) {
  .card {
    flex-direction: row;
  }
}`, codeLanguage: "css" },
      { title: "4. मर्यादा सादर", content: "मीडिया क्वेरी.\nviewport घेते.\nकंटेनर निर्णय.\nscroll सोबत.\nव्यवस्था जुळते.\nमीडिया साधा.", code: `.note {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "5. style queries", content: "style() क्वेरी.\nगुणधर्म मूल्य.\n--theme dark.\nशैली निर्णय.\nवर्ग कमी.\nआधुनिक सवय.", code: `@container style(--theme: dark) {
  .card {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "container आधार नवीन.\nmedia जुना.\nदुहेरी साधा.\nप्रत्येक कंटेनर.\nतारा समान.", code: `@supports (container-type: inline-size) {
  .card {
    container-type: inline-size;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "note क्वेरी लिहा.\nएक नियम.", code: `.note {
  container-type: inline-size;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["container काय?", "name कुठे?", "style कसे?"],
    quiz: [
      { question: "container-type?", options: ["कंटेनर", "रंग", "फॉन्ट"], correct: 0 },
      { question: "@container?", options: ["क्वेरी", "गती", "रंग"], correct: 0 },
      { question: "inline-size?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "style()?", options: ["गुणधर्म", "आकार", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "card क्वेरी द्या.",
      starterCode: `.card { container-type: inline-size; }`,
      expectedOutput: "Renders container-query responsive card",
    },
    interviewQuestions: ["c", "o", "n", "t", "a", "i", "n", "e", "r", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-masonry-grid", "css-custom-props", "css-calc-groove"],
    prev: "css-masonry-grid",
    next: "css-design-tokens",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-design-tokens",
    categoryId: "web",
    title: "Design Tokens",
    marathiTitle: "tokens — भाषा रचना",
    level: "advanced",
    minutes: 34,
    summary: "token scale आणि semantic वापर.",
    sections: [
      { title: "1. tokens रचना", content: "design tokens संग्रह.\ncolor space.\ntype आकार.\nनाव अर्थपूर्ण.\nएक स्रोत.\nकोड स्थिर.", code: `:root {
  --color-primary: #0d9488;
  --space-s: 8px;
}`, codeLanguage: "css" },
      { title: "2. नाव system", content: "टोकन नाव.\nscale मालिका.\nbase 4px.\ngap दुपट्टा.\nनियम एकत्र.\nस्मरण सोपे.", code: `:root {
  --space-base: 4px;
  --space-2: 8px;
  --space-4: 16px;
}`, codeLanguage: "css" },
      { title: "3. semantic tokens", content: "semantic नाव.\nउपयोग स्पष्ट.\nटोकन रोल.\nअर्थ वाहक.\nव्यवस्था शुद्ध.", code: `:root {
  --color-ink-primary: #0f172a;
}`, codeLanguage: "css" },
      { title: "4. थीम मॅप", content: "theme मॅपिंग.\nlight dark.\nएकच टोकन.\nवापर ठिकाणी.\nप्रमाण एकत्र.\nस्विच स्वच्छ.", code: `:root[data-theme="dark"] {
  --surface: #0f172a;
  --text: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "5. component props", content: "component रंग.\nlocal override.\nवारसा किंवा.\nभाग स्वतंत्र.\nनियम कमी.\nदेखभाल छान.", code: `.badge {
  background: var(--badge-bg, var(--color-primary));
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "टोकन सर्व चांगले.\nvar सर्वत्र.\natomic एकत्र.\nबदल स्थिर.\nटीम सहमत.\nLevel उत्तम.", code: `:root {
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "listing token सेट.\nएक रंग.", code: `:root {
  --color-listing: #0284c7;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["token काय?", "scale कसे?", "semantic कुठे?"],
    quiz: [
      { question: "design tokens?", options: ["संग्रह", "रंग", "गती"], correct: 0 },
      { question: "scale?", options: ["4px", "रंग", "नाव"], correct: 0 },
      { question: "semantic?", options: ["अर्थ", "आकार", "गती"], correct: 0 },
      { question: "component?", options: ["var जागा", "केंद्र", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "semantic token थीम द्या.",
      starterCode: `:root { --color-ink-primary: #0f172a; }`,
      expectedOutput: "Renders consistent semantic tokens",
    },
    interviewQuestions: ["t", "o", "k", "e", "n", "s", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-custom-props", "css-var-functions", "css-container-queries"],
    prev: "css-container-queries",
    next: "css-conic-radial",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-conic-radial",
    categoryId: "web",
    title: "Conic Radials",
    marathiTitle: "gradient — वर्तुळ रंग",
    level: "advanced",
    minutes: 34,
    summary: "conic radial आणि repeating थर.",
    sections: [
      { title: "1. conic मूलभूत", content: "conic-gradient फेरा.\nकेंद्र ते बाजूला.\nकोन नियम.\npie भाग.\nअचूक रंग.\nसरळ वापर.", code: `.loader {
  background: conic-gradient(#22d3ee, #0d9488);
}`, codeLanguage: "css" },
      { title: "2. टक्के थांबे", content: "from angle.\nटक्के स्थान.\nरंग थांबणे.\npie विभाग.\nडायल सुंदर.\nनियम नेमका.", code: `.donut {
  background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);
}`, codeLanguage: "css" },
      { title: "3. radial थर", content: "radial-gradient.\nकेंद्र ते बाहेर.\ncircle अंडाकार.\nfade सॉफ्ट.\nग्लो प्रभाव.\nसंयोग छान.", code: `.glow {
  background: radial-gradient(circle, #f97316 0%, transparent 70%);
}`, codeLanguage: "css" },
      { title: "4. कंसात थर", content: "multiple layers.\nrepeating जुने.\nmask सोबत.\nचेकर्ड पट्टे.\nआधार मध्यम.", code: `.stripes {
  background: repeating-conic-gradient(#0ea5e9 0 15deg, transparent 15deg 30deg);
}`, codeLanguage: "css" },
      { title: "5. gradient प्रोजेक्ट", content: "संयुक्त gradient.\nरंग गुळगुळीत.\nबटण उठवा.\nलाइन शांत.\nप्रत्येक थर.\nध्येय स्पष्ट.", code: `.fund {
  background: linear-gradient(135deg, #f59e0b, #ef4444 45%, #8b5cf6);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "conic आधार चांगला.\nprefix जुना webkit.\n@supports नाही.\nfallback रंग.\nआधार स्थिर.\nकोड सुरक्षित.", code: `.donut {
  background: #e2e8f0;
}
@supports (background: conic-gradient(#fff 0 50%, #000 50% 100%)) {
  .donut {
    background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "pie gradient भाग.\nचार टक्के.", code: `.pie {
  background: conic-gradient(#6366f1 0 40%, #e2e8f0 40% 100%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["conic काय?", "radial कुठे?", "repeating कसे?"],
    quiz: [
      { question: "conic-gradient?", options: ["फेरा", "सरळ", "उंच"], correct: 0 },
      { question: "pie?", options: ["टक्के", "रंग नाही", "गती"], correct: 0 },
      { question: "radial?", options: ["केंद्रातून", "बाजूने", "रंग"], correct: 0 },
      { question: "fallback?", options: ["साधा रंग", "सर्व", "काही"], correct: 0 },
    ],
    challenge: {
      prompt: "donut conic द्या.",
      starterCode: `.donut { background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%); }`,
      expectedOutput: "Renders a conic donut chart",
    },
    interviewQuestions: ["c", "o", "n", "i", "c", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-design-tokens", "css-masking-clip", "css-chaining"],
    prev: "css-design-tokens",
    next: "css-chaining",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-chaining",
    categoryId: "web",
    title: "Nesting Chaining",
    marathiTitle: "nesting — घरटी रचना",
    level: "advanced",
    minutes: 34,
    summary: "nesting :has आणि @supports संयोग.",
    sections: [
      { title: "1. nesting नियम", content: "CSS nesting आधुनिक.\n& parent स्रोत.\nआत शैली.\nकोड छोटा.\nवाचन सोपे.\nआधार नवीन.", code: `.card {
  & h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. & वापर", content: "& मार्ग सोपा.\n:hover & सह.\nमागे बदल.\nअचूक निवड.\nनियम घट्ट.\nवाचन स्पष्ट.", code: `.btn:hover {
  background: #0891b2;
}
.btn:focus-visible {
  outline: 2px solid #0891b2;
}`, codeLanguage: "css" },
      { title: "3. @supports एकत्रीकरण", content: "@supports ब्लॉक.\nक्षमता तपास.\nनवीन शैली.\nजुनी शैली.\nसंरक्षण स्थिर.\nकोड सुबक.", code: `@supports (selector(:has(*))) {
  .card:has(h2) {
    border-top: 3px solid #0ea5e9;
  }
}`, codeLanguage: "css" },
      { title: "4. :has निवड", content: ":has() खास.\nसंबंध तपास.\nदुसरा घटक.\nस्तर सक्रिय.\nआधार नवीन.\nवापर नेमका.", code: `.nav:has(a:hover) {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "5. कुल विचार", content: "nesting depth लहान.\nटोकन वापर.\nसमंजस करा.\nगर्द गोंधळ टाळा.\nशैली नेटकी.\nरचना स्वच्छ.", code: `.form .field:has(input:focus) {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "nesting आधार नवीन.\nजुना write flat.\n:has नवीन.\nmedia सोबत.\nगणना स्थिर.\nकोड वाजवी.", code: `@media (width >= 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "has image कार्ड.\nएक निवड.", code: `.card:has(img) {
  border-radius: 14px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nesting काय?", ":has कुठे?", "@supports कसे?"],
    quiz: [
      { question: "nesting?", options: ["आत शैली", "बाहेर", "रंग"], correct: 0 },
      { question: "&?", options: ["parent", "मुल", "रंग"], correct: 0 },
      { question: ":has()?", options: ["संबंध", "आकार", "गती"], correct: 0 },
      { question: "@supports?", options: ["तपास", "नाव", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "card has img द्या.",
      starterCode: `.card:has(img) { border-radius: 14px; }`,
      expectedOutput: "Renders chained stateful card styles",
    },
    interviewQuestions: ["n", "e", "s", "t", "i", "n", "g", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-conic-radial", "css-scope-rule", "css-prefers-reduced"],
    prev: "css-conic-radial",
    next: "css-perf-hints",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-perf-hints",
    categoryId: "web",
    title: "Perf Hints",
    marathiTitle: "perf — तेज नियम",
    level: "advanced",
    minutes: 34,
    summary: "paint composite आणि गती बचत.",
    sections: [
      { title: "1. paint खर्च", content: "box-shadow जड.\nfilter महाग.\ntransform स्वस्त गती.\npaint थर कमी.\nगणना सोपी.\nवेळ बदल.", code: `.motion {
  transform: translateX(0);
}
.button:active {
  transform: translateY(2px);
}`, codeLanguage: "css" },
      { title: "2. layer हाताळणी", content: "will-change सोय.\ntransform layer.\nopacity स्तर.\nमर्यादित वापर.\nअनावश्यक नको.\nकाळजी ठेवा.", code: `.sticky-nav {
  position: sticky;
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "3. animation गती", content: "animation steps.\ncontent-visibility.\nलांब यादी.\nपेंट नियंत्रण.\nतेज वाढ.\nपरफॉर्मेंस चांगली.", code: `.long-list li {
  content-visibility: auto;
  contain-intrinsic-size: 0 64px;
}`, codeLanguage: "css" },
      { title: "4. layout कमी", content: "layout उंच खर्च.\ntop-left बदल.\ntransform बेटर.\nनवी गती.\nमोजणी कमी.\nस्पष्ट वाट.", code: `.slide {
  transform: translateX(0);
}
.slide.active {
  transform: translateX(40px);
}`, codeLanguage: "css" },
      { title: "5. contain पृथक", content: "contain layout.\nपृथक गणना.\nभाग स्थिर.\nइतर अलग.\nगणना जलद.\nमोठा स्क्रीन.", code: `.widget {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "6. DevTools सवय", content: "performance tab.\nrecord frame.\nचाचणी सर्वत्र.\nमोजा पहा.\nलक्ष्य नेमके.", code: `.precise {
  transform: translateZ(0);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "row contain द्या.\nतेज राखा.", code: `.row {
  contain: layout paint;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["paint काय?", "layer कुठे?", "transform कसे?"],
    quiz: [
      { question: "box-shadow?", options: ["जड", "हलका", "रंग"], correct: 0 },
      { question: "will-change?", options: ["घट्ट", "नको फार", "नाव"], correct: 0 },
      { question: "transform?", options: ["स्वस्त", "महाग", "रंग"], correct: 0 },
      { question: "content-visibility?", options: ["तेज", "मंद", "जड"], correct: 0 },
    ],
    challenge: {
      prompt: "row perf द्या.",
      starterCode: `.row { contain: layout paint; }`,
      expectedOutput: "Renders fast isolated row performance",
    },
    interviewQuestions: ["p", "e", "r", "f", " ", "र", "ह", "स", "्", "य", "?"],
    related: ["css-keyframes-tip", "css-contain-property", "css-will-change"],
    prev: "css-chaining",
    next: "css-marathi-capstone7",
    levelLabel: CSS7_LABEL,
  },
  {
    slug: "css-marathi-capstone7",
    categoryId: "web",
    title: "Marathi Capstone 7",
    marathiTitle: "Design Dhara — थीम संग्रह",
    level: "advanced",
    minutes: 34,
    summary: "सर्व Level 7 तंत्रांचा संग्रह.",
    sections: [
      { title: "1. ध्येय", content: "design system portal.\ntokens रचना.\nथीम दोन्ही.\ncontainer वापर.\nmasonry गॅलरी.\nरचना पूर्ण.", code: `:root {
  --brand: #0d9488;
  --surface: #ffffff;
}`, codeLanguage: "css" },
      { title: "2. tokens कार्य", content: "token नियम.\nspace scale.\ncolor semantic.\nप्रत्येक वापर.\nबदल एका जागी.\nव्यवस्था शुद्ध.", code: `:root {
  --space-2: 8px;
  --space-4: 16px;
  --radius: 12px;
}`, codeLanguage: "css" },
      { title: "3. container लवचिक", content: "container क्वेरी.\nकार्ड बदल.\nरुंदी नियम.\nमोबाइल आधी.\nरचना टिकाव.\nदृश्य स्पष्ट.", code: `.panel {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "4. font थर", content: "फॉन्ट stack.\nMukta सर्वत्र.\nNoto पर्याय.\nvar आकार.\nअक्षर शांत.\nवाचन व्यवस्था.", code: `.panel {
  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;
}`, codeLanguage: "css" },
      { title: "5. masonry गॅलरी", content: "gallery भाग.\nलहान मोठे.\nगैप समान.\nआधार तपास.\nरचना सुंदर.", code: `.gallery {
  columns: 2;
  gap: 12px;
}
@supports (grid-template-rows: masonry) {
  .gallery {
    columns: unset;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-template-rows: masonry;
  }
}`, codeLanguage: "css" },
      { title: "6. reduced मान्य", content: "reduced honors.\nहलकी शैली.\ntransition सुरळीत.\nतेज स्थिर.\nवारसा सोपा.", code: `@media (prefers-reduced-motion: no-preference) {
  .panel:hover {
    transform: translateY(-2px);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "portal जोडा.\nसर्व भाग.", code: `.portal {
  display: grid;
  gap: var(--space-4);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["token कसे?", "container कुठे?", "masonry काय?"],
    quiz: [
      { question: "dhara?", options: ["संग्रह", "रंग", "एक"], correct: 0 },
      { question: "tokens?", options: ["संग्रह", "गती", "नाव"], correct: 0 },
      { question: "container?", options: ["क्वेरी", "रंग", "आकार"], correct: 0 },
      { question: "masonry?", options: ["उंची स्वतः", "सरळ", "जड"], correct: 0 },
    ],
    challenge: {
      prompt: "design portal पूर्ण.",
      starterCode: `.portal { display: grid; gap: var(--space-4); }`,
      expectedOutput: "Renders polished Marathi design-system portal using Level 7 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "7", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-perf-hints", "css-prefers-reduced"],
    prev: "css-perf-hints",
    next: "css-custom-props",
    levelLabel: CSS7_LABEL,
  },];
