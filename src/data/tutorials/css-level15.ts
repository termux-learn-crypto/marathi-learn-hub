import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 15 — Systems & Interaction ===
export const CSS15_LABEL = "CSS · Level 15 — Systems & Interaction";

export const cssLevel15: Tutorial[] = [
  {
    slug: "css-cascade-layers",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "@layer — थर क्रम",
    level: "advanced",
    minutes: 40,
    summary: "@layer क्रम नियंत्रण.",
    sections: [
      { title: "1. @layer कल्पना", content: "@layer नियम.\nथर क्रम.\nspecificity साधा.", code: `@layer base, components, utilities;`, codeLanguage: "css" },
      { title: "2. थर क्रम", content: "@layer base {...}.\nक्रम नेमका.\nनियम मागे.\nरचना स्पष्ट.", code: `@layer base, components;
@layer base {
  h1 {
    font-size: 2rem;
  }
}`, codeLanguage: "css" },
      { title: "3. विजय नियम", content: "थराचा क्रम.\nउत्तर विजय.\nजिंकणारा थर.", code: `@layer components {
  .btn {
    color: white;
  }
}
@layer base {
  button {
    color: black;
  }
}`, codeLanguage: "css" },
      { title: "4. आधार थर", content: "जुना आधार.\n@layer बाहेर.\nविजय नेहमी.", code: `.btn {
  color: #0d9488;
}
@layer utilities {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "5. तुलना थर", content: "specificity थर.\n@layer सोपा.\nक्रम नेमका.", code: `@layer design, theme;
@layer design {
  .card {
    background: white;
  }
}
@layer theme {
  body {
    background: #f8fafc;
  }
}`, codeLanguage: "css" },
      { title: "6. प्रकल्प थर", content: "क्रम घोषित.\nथर नावे.\nपुनर्लेखन सोपे.\nसवय नेमकी.", code: `@layer reset, base, components, utilities;
@layer components {
  .btn {
    padding: 0.5rem 1rem;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "थर क्रम.\n@layer एक.", code: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@layer काय?", "क्रम कुठे?", "आधार कसा?", "@layer कधी?"],
    quiz: [
      { question: "@layer?", options: ["थर क्रम", "रंग", "ध्वनी"], correct: 0 },
      { question: "क्रम?", options: ["नियम नेमका", "थर", "क्रम"], correct: 0 },
      { question: "बाहेर थर?", options: ["विजय नेहमी", "नवीन", "रंग"], correct: 0 },
      { question: "थर नावे?", options: ["व्यवस्थापन सोपे", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "थर क्रम करा.",
      starterCode: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`,
      expectedOutput: "Marathi layer order wins predictably",
    },
    interviewQuestions: ["@layer फायदा?", "specificity पेक्षा?"],
    related: ["css-cascade-keywords", "css-scope-rule", "css-specificity-tips"],
    prev: "css-marathi-capstone14",
    next: "css-native-nesting",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-native-nesting",
    categoryId: "web",
    title: "Native Nesting",
    marathiTitle: "nesting — घरटे नियम",
    level: "advanced",
    minutes: 40,
    summary: "& चिन्ह घरटे.",
    sections: [
      { title: "1. nesting कल्पना", content: "CSS nesting.\n& चिन्ह.\nमुल शैली.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "2. & चिन्ह", content: "& पालक.\nसोपे वाचन.\nरचना स्पष्ट.\nरचना स्पष्ट.", code: `.btn {
  &:hover {
    background: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "3. खोल घरटे", content: "खोल घरटे.\nएकाच ठिकाणी.\nनियम एकत्र.", code: `.nav {
  ul {
    li {
      a {
        color: #334155;
      }
    }
  }
}`, codeLanguage: "css" },
      { title: "4. प्लेसहोल्ड", content: "प्लेसहोल्ड.\nतारा नियम.\nसोपे जोड.", code: `.icon {
  &:is(svg) {
    width: 1rem;
  }
}`, codeLanguage: "css" },
      { title: "5. माध्यम घरटे", content: "media घरटे.\nscope स्पष्ट.\nमर्यादा पाळा.", code: `.card {
  @media (min-width: 600px) {
    display: flex;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार थर", content: "आधार जुना.\n@media तपासा.\nसाधा नियम.\nसवय नेमकी.", code: `h2 {
  color: #0d9488;
}
@supports (selector(&)) {
  .card h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "कार्ड nesting.\n& एक.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nesting काय?", "& कुठे?", "media कसा?", "आधार कधी?"],
    quiz: [
      { question: "nesting?", options: ["मुल शैली", "रंग", "ध्वनी"], correct: 0 },
      { question: "& चिन्ह?", options: ["पालक निर्देश", "थर", "क्रम"], correct: 0 },
      { question: "माध्यम?", options: ["घरटे scope", "नवीन", "रंग"], correct: 0 },
      { question: "जुना आधार?", options: ["@supports साधा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड nesting करा.",
      starterCode: `.card {
  & h2 {
    color: #0d9488;
  }
}`,
      expectedOutput: "Marathi nested card stops repeat",
    },
    interviewQuestions: ["nesting फायदा?", "preprocessor पेक्षा?"],
    related: ["css-scope-rule", "css-cascade-layers", "css-specificity-tips"],
    prev: "css-cascade-layers",
    next: "css-logical-properties",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-logical-properties",
    categoryId: "web",
    title: "Logical Properties",
    marathiTitle: "logical — दिशा नियम",
    level: "advanced",
    minutes: 40,
    summary: "inline block दिशा.",
    sections: [
      { title: "1. logical कल्पना", content: "logical नियम.\ninline दिशा.\nblock दिशा.", code: `.box {
  margin-inline: auto;
}`, codeLanguage: "css" },
      { title: "2. किनार थर", content: "margin-inline.\nदोन्ही बाजू.\nसोपा क्रम.\nरचना स्पष्ट.", code: `.media {
  padding-inline: 1rem;
  padding-block: 0.5rem;
}`, codeLanguage: "css" },
      { title: "3. text दिशा", content: "text-start.\nउजवी बाजू.\nदिशा नेमकी.", code: `.entry {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "4. खूण थर", content: "border-inline.\nडावी रेखा.\nलहान कोड.", code: `.quote {
  border-inline-start: 4px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. स्थिती थर", content: "inset-inline.\nस्थान नेमके.\nदिशा पाळा.", code: `.badge {
  position: absolute;
  inset-inline-end: 0.5rem;
}`, codeLanguage: "css" },
      { title: "6. तुलना थर", content: "जुने left.\nlogical नवा.\nदिशा भेद.\nसवय नेमकी.", code: `.box {
  margin-left: auto;
}
.box-new {
  margin-inline-start: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "दिशा नियम.\ninline एक.", code: `.card {
  padding-inline: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["logical काय?", "inline कुठे?", "block काय?", "जुना कसा?"],
    quiz: [
      { question: "logical?", options: ["दिशा नियम", "रंग", "ध्वनी"], correct: 0 },
      { question: "inline?", options: ["क्षैतिज दिशा", "थर", "क्रम"], correct: 0 },
      { question: "block?", options: ["उभी दिशा", "नवीन", "रंग"], correct: 0 },
      { question: "जुना मार्ग?", options: ["left साधा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "दिशा नियम करा.",
      starterCode: `.card {
  padding-inline: 1rem;
}`,
      expectedOutput: "Marathi card flips direction with logical props",
    },
    interviewQuestions: ["logical फायदा?", "कधी वापर?"],
    related: ["css-box-model", "css-media-queries-basics", "css-typography"],
    prev: "css-native-nesting",
    next: "css-scroll-snap",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-scroll-snap",
    categoryId: "web",
    title: "Scroll Snap",
    marathiTitle: "scroll snap — स्थान थर",
    level: "advanced",
    minutes: 40,
    summary: "scroll-snap-type नियम.",
    sections: [
      { title: "1. snap कल्पना", content: "scroll-snap-type.\nस्थान नेमके.\nगती स्थिर.", code: `.gallery {
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "2. मुल स्थान", content: "scroll-snap-align.\nमुल थर.\nकेंद्र स्पष्ट.\nरचना स्पष्ट.", code: `.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "3. आवश्यक थर", content: "mandatory नियम.\nथांबा नेमका.\nगती कडक.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "4. मर्यादा थर", content: "proximity मऊ.\nस्वाभाविक गती.\nआराम नीट.", code: `.cards {
  scroll-snap-type: y proximity;
}
.card {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "5. margin थर", content: "scroll-margin.\nहेडर साठी.\nस्थान तोल.", code: `.card {
  scroll-snap-align: start;
  scroll-margin-top: 4rem;
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "आधार नेहमी.\nस्क्रोल काम.\nसोपे मूळ.\nसवय नेमकी.", code: `.gallery {
  overflow-x: auto;
}
@supports (scroll-snap-type: x mandatory) {
  .gallery {
    scroll-snap-type: x mandatory;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "गॅलरी snap.\nsnap एक.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["snap काय?", "align कुठे?", "mandatory काय?", "margin कधी?"],
    quiz: [
      { question: "scroll-snap-type?", options: ["स्थान नियम", "रंग", "ध्वनी"], correct: 0 },
      { question: "align?", options: ["मुल स्थान", "थर", "क्रम"], correct: 0 },
      { question: "proximity?", options: ["मऊ थर", "नवीन", "रंग"], correct: 0 },
      { question: "scroll-margin?", options: ["स्थान तोल", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "गॅलरी snap करा.",
      starterCode: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: center;
}`,
      expectedOutput: "Marathi gallery snaps to center slide",
    },
    interviewQuestions: ["snap फायदा?", "proximity कधी?"],
    related: ["css-responsive-table", "css-media-queries-basics", "css-grid-template"],
    prev: "css-logical-properties",
    next: "css-focus-visible",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-focus-visible",
    categoryId: "web",
    title: "Focus Visible",
    marathiTitle: ":focus-visible — लक्ष थर",
    level: "advanced",
    minutes: 40,
    summary: ":focus-visible दृश्य लक्ष.",
    sections: [
      { title: "1. focus कल्पना", content: ":focus-visible नियम.\nकीबोर्ड लक्ष.\nदृश्य वलय.", code: `:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "2. भेद थर", content: ":focus प्रकार.\nसर्व input.\nवेगळा अर्थ.\nरचना स्पष्ट.", code: `input:focus {
  border-color: #0d9488;
}
:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "3. कार्ड नियम", content: "लिंक थर.\nकीबोर्ड योग्य.\nवलय स्पष्ट.", code: `a:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "4. बटण थर", content: "बटण लक्ष.\nस्पष्ट दृश्य.\nसहाय्य नीट.", code: `.btn:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. सुरक्षित नियम", content: "जुने नको.\nस्पष्ट वलय.", code: `button:focus {
  outline: 2px solid #0d9488;
}
button:focus:not(:focus-visible) {
  outline: none;
}`, codeLanguage: "css" },
      { title: "6. अभ्यास थर", content: "सर्व घटक.\nनियम एक.\nसुसंगत दृश्य.\nसवय नेमकी.", code: `:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "लक्ष वलय.\nfocus-visible एक.", code: `:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: [":focus-visible काय?", ":focus पेक्षा?", "outline कुठे?", "जुना नियम?"],
    quiz: [
      { question: ":focus-visible?", options: ["कीबोर्ड लक्ष", "रंग", "ध्वनी"], correct: 0 },
      { question: ":focus?", options: ["सर्व लक्ष", "थर", "क्रम"], correct: 0 },
      { question: "outline?", options: ["वलय दृश्य", "नवीन", "रंग"], correct: 0 },
      { question: "जुना सवय?", options: ["टाका नका", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "लक्ष वलय करा.",
      starterCode: `:focus-visible {
  outline: 2px solid #0d9488;
}`,
      expectedOutput: "Marathi keyboard focus gets visible ring",
    },
    interviewQuestions: [":focus-visible फायदा?", ":focus पेक्षा भेद?"],
    related: ["css-pseudo-state", "css-focus-within", "css-accessibility"],
    prev: "css-scroll-snap",
    next: "css-accent-color",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-accent-color",
    categoryId: "web",
    title: "Accent Color",
    marathiTitle: "accent — फॉर्म रंग",
    level: "advanced",
    minutes: 40,
    summary: "accent-color फॉर्म नियंत्रण.",
    sections: [
      { title: "1. accent कल्पना", content: "accent-color नियम.\ncheckbox रंग.\nनियंत्रण खूण.", code: `input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. range थर", content: "range स्लाइड.\naccent जोड.\nथीमने समजू.\nरचना स्पष्ट.", code: `input[type="range"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. प्रगती थर", content: "प्रगती मीटर.\naccent रंग.\nस्थिती स्पष्ट.", code: `progress {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "4. थीम नियम", content: "color-scheme जोड.\ndark फॉर्म.\nरंग तोल.", code: `:root {
  color-scheme: light dark;
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. एकत्र थर", content: "फॉर्म सर्व.\naccent एक.\nरंग सुसंगत.", code: `input, progress, range {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "6. आधार थर", content: "आधार जुना.\nसोपा रंग.\nपडताळा नीट.\nसवय नेमकी.", code: `input[type="checkbox"] {
  accent-color: #0d9488;
}
@supports (accent-color: #000) {
  input {
    accent-color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "फॉर्म खूण.\naccent एक.", code: `input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["accent-color काय?", "range कुठे?", "progress कसा?", "आधार कधी?"],
    quiz: [
      { question: "accent-color?", options: ["फॉर्म रंग", "रंग रेखा", "ध्वनी"], correct: 0 },
      { question: "range?", options: ["स्लाइड खूण", "थर", "क्रम"], correct: 0 },
      { question: "progress?", options: ["मीटर रंग", "नवीन", "रंग"], correct: 0 },
      { question: "color-scheme?", options: ["थीम जोड", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म खूण करा.",
      starterCode: `input {
  accent-color: #0d9488;
}`,
      expectedOutput: "Marathi form controls tint teal",
    },
    interviewQuestions: ["accent-color फायदा?", "कुठे वापर?"],
    related: ["css-light-dark", "css-pseudo-state", "css-forms-styling"],
    prev: "css-focus-visible",
    next: "css-caret-selection",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-caret-selection-2",
    categoryId: "web",
    title: "Caret Selection",
    marathiTitle: "caret — निवड थर",
    level: "advanced",
    minutes: 40,
    summary: "caret-color हायलाइट.",
    sections: [
      { title: "1. caret कल्पना", content: "caret-color नियम.\nटंकित रेषा.\nरंग नेमका.", code: `input {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. निवड थर", content: "::selection नियम.\nमजकूर रंग.\nहायलाइट स्पष्ट.\nरचना स्पष्ट.", code: `::selection {
  background: #99f6e4;
  color: #0f172a;
}`, codeLanguage: "css" },
      { title: "3. भाग थर", content: "निवड क्षेत्र.\nहेडर स्तर.\nरंग वेगळा.", code: `h1::selection {
  background: #0d9488;
  color: white;
}`, codeLanguage: "css" },
      { title: "4. टंकित नियम", content: "caret स्पष्ट.\nइनपुट खूण.\nसतत दिसे.", code: `input, textarea {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. मर्यादा थर", content: "निवड रंग.\nब्राउझर मान्य.\nसाधे पाळा.", code: `p::selection {
  background: #ccfbf1;
}`, codeLanguage: "css" },
      { title: "6. एकत्र थर", content: "दोन्ही नियम.\nफॉर्म सुधार.\nरंग सुसंगत.\nसवय नेमकी.", code: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "फॉर्म खूण.\ncaret एक.", code: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["caret-color काय?", "::selection कुठे?", "h1 निवड?", "मर्यादा कधी?"],
    quiz: [
      { question: "caret-color?", options: ["टंकित रंग", "रंग", "ध्वनी"], correct: 0 },
      { question: "::selection?", options: ["मजकूर हायलाइट", "थर", "क्रम"], correct: 0 },
      { question: "हायलाइट?", options: ["निवड क्षेत्र", "नवीन", "रंग"], correct: 0 },
      { question: "मर्यादा?", options: ["ब्राउझर पाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म खूण करा.",
      starterCode: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`,
      expectedOutput: "Marathi caret pops with matching selection",
    },
    interviewQuestions: ["caret फायदा?", "selection मर्यादा?"],
    related: ["css-pseudo-state", "css-text-spacing", "css-forms-styling"],
    prev: "css-accent-color",
    next: "css-columns-layout",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-columns-layout",
    categoryId: "web",
    title: "Columns Layout",
    marathiTitle: "columns — खोल स्तंभ",
    level: "advanced",
    minutes: 40,
    summary: "columns मजकूर वितरण.",
    sections: [
      { title: "1. columns कल्पना", content: "columns नियम.\nस्तंभ दोन.\nमजकूर वितरित.", code: `.text {
  columns: 2;
}`, codeLanguage: "css" },
      { title: "2. अंतर थर", content: "column-gap नियम.\nअंतर नेमके.\nवाचन सोपे.\nरचना स्पष्ट.", code: `.text {
  columns: 2;
  column-gap: 2rem;
}`, codeLanguage: "css" },
      { title: "3. रेषा थर", content: "column-rule नियम.\nरेषा नीट.\nभाग दिसे.", code: `.text {
  columns: 3;
  column-rule: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
      { title: "4. फुटणे थर", content: "break-inside नियम.\nकार्ड एकत्र.\nफुटणे नको.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "5. मोठे थर", content: "माध्यम जोड.\nस्तंभ वाढ.\nरेषा नेमकी.", code: `@media (min-width: 900px) {
  .text {
    columns: 3;
  }
}`, codeLanguage: "css" },
      { title: "6. तुलना थर", content: "grid तोल.\ncolumns हलका.\nमजकूर योग्य.\nसवय नेमकी.", code: `.news {
  columns: 2;
}
.news .item {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "वृत्तपत्र स्तंभ.\ncolumns एक.", code: `.articles {
  columns: 2;
  column-gap: 2rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["columns काय?", "column-gap कुठे?", "rule कसा?", "break-inside कधी?"],
    quiz: [
      { question: "columns?", options: ["मजकूर वितरण", "रंग", "ध्वनी"], correct: 0 },
      { question: "column-gap?", options: ["अंतर नेमके", "थर", "क्रम"], correct: 0 },
      { question: "column-rule?", options: ["रेषा भाग", "नवीन", "रंग"], correct: 0 },
      { question: "break-inside?", options: ["फुटणे टाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "वृत्तपत्र स्तंभ करा.",
      starterCode: `.articles {
  columns: 2;
  column-gap: 2rem;
}`,
      expectedOutput: "Marathi news columns balance with inside-avoid",
    },
    interviewQuestions: ["columns फायदा?", "grid पेक्षा कधी?"],
    related: ["css-grid-template", "css-subgrid", "css-responsive-table"],
    prev: "css-caret-selection",
    next: "css-dialog-backdrop",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-dialog-backdrop",
    categoryId: "web",
    title: "Dialog Backdrop",
    marathiTitle: "dialog — पॉपअप थर",
    level: "advanced",
    minutes: 40,
    summary: "dialog ::backdrop नियम.",
    sections: [
      { title: "1. dialog कल्पना", content: "dialog नियम.\nshowModal मदती.\nपॉपअप सोपा.", code: `dialog {
  border: none;
  border-radius: 12px;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "::backdrop नियम.\nमागे रंग.\nलक्ष स्पष्ट.\nरचना स्पष्ट.", code: `dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`, codeLanguage: "css" },
      { title: "3. खाली थर", content: "मोठे dialog.\nपॅडिंग नीट.\nक्रम स्पष्ट.", code: `dialog {
  padding: 1.5rem;
  max-width: min(90vw, 30rem);
}`, codeLanguage: "css" },
      { title: "4. निकट थर", content: "निवड वलय.\nफोकस स्पष्ट.\nकीबोर्ड सोपे.", code: `dialog:focus {
  outline: none;
}
dialog :focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. थीम थर", content: "backdrop मऊ.\nरंग नेमका.\nथीम जुळे.", code: `dialog::backdrop {
  background: oklch(0.2 0.05 240 / 0.6);
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "आधार सर्व.\nपॉपअप पाळा.\nसोपे बाहेर.\nसवय नेमकी.", code: `@supports (backdrop-filter: blur(2px)) {
  dialog::backdrop {
    backdrop-filter: blur(2px);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "कार्ड dialog.\ndialog एक.", code: `dialog {
  border: none;
  border-radius: 12px;
}
dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["dialog काय?", "::backdrop कुठे?", "फोकस कसा?", "आधार कधी?"],
    quiz: [
      { question: "dialog?", options: ["पॉपअप थर", "रंग", "ध्वनी"], correct: 0 },
      { question: "::backdrop?", options: ["मागे रंग", "थर", "क्रम"], correct: 0 },
      { question: "showModal?", options: ["मोडल खुले", "नवीन", "रंग"], correct: 0 },
      { question: "बाहेर नियम?", options: ["सोपे पाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड dialog करा.",
      starterCode: `dialog {
  border: none;
  border-radius: 12px;
}
dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`,
      expectedOutput: "Marathi modal opens with dim backdrop",
    },
    interviewQuestions: ["dialog फायदा?", "backdrop कधी?"],
    related: ["css-focus-visible", "css-anchor-positioning", "css-forms-styling"],
    prev: "css-columns-layout",
    next: "css-anchor-positioning",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-anchor-positioning",
    categoryId: "web",
    title: "Anchor Positioning",
    marathiTitle: "anchor — स्थान थर",
    level: "advanced",
    minutes: 40,
    summary: "anchor() निर्देश नेमका.",
    sections: [
      { title: "1. anchor कल्पना", content: "anchor-name नियम.\nस्थान नेमके.\nनिर्देश स्पष्ट.", code: `.tip {
  position: relative;
  anchor-name: --tip;
}`, codeLanguage: "css" },
      { title: "2. जोड थर", content: "position-area.\nशेजारी स्थिती.\nगणना सोपी.\nरचना स्पष्ट.", code: `.bubble {
  position: absolute;
  position-area: top center;
}`, codeLanguage: "css" },
      { title: "3. वेळोवेळी नियम", content: "@position-try.\nपात्र नमुने.\nबदल नेमका.", code: `.bubble {
  position-area: bottom center;
  @position-try --above {
    position-area: top center;
  }
}`, codeLanguage: "css" },
      { title: "4. स्थान थर", content: "anchor() मूल्य.\nकोन नेमका.\nनिकट स्पष्ट.", code: `.tooltip {
  left: anchor(--tip right);
  top: anchor(--tip top);
}`, codeLanguage: "css" },
      { title: "5. क्षमता थर", content: "आधार तपासा.\nबाहेर निर्देश.\nसाधे मूळ.", code: `.bubble {
  position: fixed;
}
@supports (anchor-name: --tip) {
  .bubble {
    position: absolute;
    position-area: bottom center;
  }
}`, codeLanguage: "css" },
      { title: "6. पडताळा थर", content: "नवा नियम.\nजुने तपासा.\nस्थान बल.\nसवय नेमकी.", code: `.bubble {
  position-area: top center;
  @position-try --below {
    position-area: bottom center;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "टूलटिप स्थान.\nanchor एक.", code: `.tip {
  anchor-name: --tip;
}
.bubble {
  position: absolute;
  position-area: top center;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor-name काय?", "position-area कुठे?", "@position-try काय?", "anchor() कधी?"],
    quiz: [
      { question: "anchor-name?", options: ["स्थान नाव", "रंग", "ध्वनी"], correct: 0 },
      { question: "position-area?", options: ["शेजारी स्थिती", "थर", "क्रम"], correct: 0 },
      { question: "@position-try?", options: ["पर्याय नमुने", "नवीन", "रंग"], correct: 0 },
      { question: "anchor()?", options: ["कोन नेमका", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "टूलटिप स्थान करा.",
      starterCode: `.tip {
  anchor-name: --tip;
}
.bubble {
  position: absolute;
  position-area: top center;
}`,
      expectedOutput: "Marathi tooltip pins to its anchor",
    },
    interviewQuestions: ["anchor फायदा?", "आधार स्थिती?"],
    related: ["css-overflow-deep", "css-focus-visible", "css-dialog-backdrop"],
    prev: "css-dialog-backdrop",
    next: "css-property-registry",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-property-registry",
    categoryId: "web",
    title: "Property Registry",
    marathiTitle: "@property — नवा चल",
    level: "advanced",
    minutes: 40,
    summary: "@property सजीव चल.",
    sections: [
      { title: "1. @property कल्पना", content: "@property नियम.\nसजीव चल.\nमूल्य प्रकार.", code: `@property --spacing {
  syntax: "<length>";
  inherits: false;
  initial-value: 1rem;
}`, codeLanguage: "css" },
      { title: "2. रंग थर", content: "रंग चल.\nsyntax रंग.\ntransition सोपे.\nरचना स्पष्ट.", code: `@property --tone {
  syntax: "<color>";
  inherits: true;
  initial-value: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. कोन थर", content: "कोन चल.\nग्रेडियंट.\nगती नेमकी.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}`, codeLanguage: "css" },
      { title: "4. जोड थर", content: "चल नवा.\nकुठे वापर.\nमर्यादा स्पष्ट.", code: `.card {
  --spacing: 1.5rem;
  padding: var(--spacing);
}`, codeLanguage: "css" },
      { title: "5. आधार थर", content: "आधार जुना.\n@supports तपास.\nसोपे धडे.", code: `:root {
  --tone: #0d9488;
}
@supports (--tone: red) {
  .card {
    --tone: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "6. सजीव नियम", content: "गती जोड.\nव्हेरिएबल सजीव.\nसवय नेमकी.", code: `.card {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  to {
    --angle: 360deg;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सजीव चल.\n@property एक.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@property काय?", "syntax कुठे?", "inherits काय?", "सजीव चल कसा?"],
    quiz: [
      { question: "@property?", options: ["चल नोंदणी", "रंग", "ध्वनी"], correct: 0 },
      { question: "syntax?", options: ["मूल्य प्रकार", "थर", "क्रम"], correct: 0 },
      { question: "inherits?", options: ["वारसा नियम", "नवीन", "रंग"], correct: 0 },
      { question: "सजीव चल?", options: ["कोन गती", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "सजीव चल करा.",
      starterCode: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`,
      expectedOutput: "Marathi badge spins via registered property",
    },
    interviewQuestions: ["@property फायदा?", "कुठे गरज?"],
    related: ["css-root-custom", "css-animation-easing", "css-oklch-color"],
    prev: "css-anchor-positioning",
    next: "css-marathi-capstone15",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-marathi-capstone15",
    categoryId: "web",
    title: "Interaction Capstone",
    marathiTitle: "Systems Bag — स्थिती थर",
    level: "advanced",
    minutes: 40,
    summary: "Level 15 साधने एकत्र.",
    sections: [
      { title: "1. थर क्रम", content: "@layer नियम.\nक्रम नेमका.", code: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "2. घरटे थर", content: "nesting घरटे.\n& चिन्ह.\nसोपे वाचन.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "3. दिशा थर", content: "logical दिशा.\ninline block.\nरचना नीट.", code: `.media {
  padding-inline: 1rem;
}`, codeLanguage: "css" },
      { title: "4. स्थान थर", content: "snap स्थान.\nfocus वलय.\nलक्ष स्पष्ट.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. फॉर्म थर", content: "accent रंग.\ncaret नीट.\nनिवड स्पष्ट.", code: `input {
  accent-color: #0d9488;
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "6. सजीव थर", content: "dialog पॉपअप.\nanchor स्थान.\n@property सजीव.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`, codeLanguage: "css" },
      { title: "Final Project", content: "सर्व जोड.", code: `@layer base, components;
.card {
  & h2 {
    color: #0d9488;
  }
}
input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 15 थीम?", "@layer काय?", "nesting कुठे?", "accent कधी?"],
    quiz: [
      { question: "Level 15 थीम?", options: ["Systems & Interaction", "जुना थर", "रंग रेषा"], correct: 0 },
      { question: "@layer?", options: ["क्रम थर", "ध्वनी", "क्रम"], correct: 0 },
      { question: "nesting?", options: ["घरटे शैली", "रंग", "शोर"], correct: 0 },
      { question: "accent-color?", options: ["फॉर्म रंग", "रेखा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "वेब स्थिती बनवा.",
      starterCode: `@layer base, components;
.card {
  & h2 {
    color: #0d9488;
  }
}`,
      expectedOutput: "Final interaction patterns via Marathi portal",
    },
    interviewQuestions: ["तीन आवडते?", "@layer मर्यादा?"],
    related: ["css-marathi-capstone14", "css-cascade-layers", "css-accent-color"],
    prev: "css-property-registry",
    next: "css-cascade-layers",
    levelLabel: CSS15_LABEL,
  },];
