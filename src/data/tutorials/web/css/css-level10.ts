import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 10 — Refined Power ===
export const CSS10_LABEL = "CSS · Level 10 — Refined Power";

export const cssLevel10: Tutorial[] = [
  {
    slug: "css-is-anywhere",
    categoryId: "web",
    title: "Is Where Not",
    marathiTitle: "is-anywhere — गट निवड",
    level: "advanced",
    minutes: 40,
    summary: ":is :where :not निवड सरलीकरण.",
    sections: [
      { title: "1. गट कल्पना", content: "गट मिळून निवड.\nहा selector.\nअनेक शीर्षक.\nशैली एकच.", code: `:is(h1, h2, h3) {
  letter-spacing: 0.02em;
}`, codeLanguage: "css" },
      { title: "2. where थर", content: "where शून्य.\nspecialty नाही.\nनियम हलका.", code: `:where(article, section) p {
  color: #334155;
}`, codeLanguage: "css" },
      { title: "3. not नियम", content: "not वगळतो.\nएक गट.\nतयार मजकूर.\nरंग नेमका.\nसंदर्भ स्पष्ट.", code: `li:not(.done) {
  color: #dc2626;
}`, codeLanguage: "css" },
      { title: "4. सर्वोत्तम", content: "specificity जपा.\nis प्रभाव.\nविरोध योग्य.\nरचना नेमकी.\nवापर नेमका.", code: `.card :is(h2, p) {
  margin-inline: 0;
}`, codeLanguage: "css" },
      { title: "5. सर्व गट", content: "अनेक tags.\nकर्सर चिन्ह.\nक्रिया स्पष्ट.\nदृश्य सजीव.\nनियम नेमका.\nसवय योग्य.", code: `:is(button, a[href]) {
  cursor: pointer;
}`, codeLanguage: "css" },
      { title: "6. वाचन सुधार", content: "साडे ओळीं.\nline-height नीट.\nवाचन आराम.\nजागा तोल.\nशैली साधी.", code: `:where(p, li) {
  line-height: 1.6;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "दुवा गट.\nएक नियम.", code: `:is(nav, footer) a {
  text-decoration: none;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["is कधी वापराल?", "where फरक काय?", "not कसे?", "cursor कुठे?"],
    quiz: [
      { question: ":is() काय?", options: ["गट निवड", "रंग नियम", "ध्वनी गट"], correct: 0 },
      { question: ":where फरक?", options: ["विशेषता शून्य", "विशेषता वाढ", "काहीच नाही"], correct: 0 },
      { question: ":not काय?", options: ["वगळणे", "जोडणे", "रंगवणे"], correct: 0 },
      { question: "cursor कुठे?", options: ["button", "body", "html"], correct: 0 },
    ],
    challenge: {
      prompt: "मथळे गट करा.",
      starterCode: `:is(h1, h2) {
  letter-spacing: 0.02em;
}`,
      expectedOutput: "Headings grouped uniformly on Marathi page",
    },
    interviewQuestions: ["is vs where फरक?", "specificity कशी साधायची?"],
    related: ["css-has-selector", "css-nesting-rules", "css-counters-lab"],
    prev: "css-marathi-capstone9",
    next: "css-nesting-rules",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-nesting-rules",
    categoryId: "web",
    title: "Nesting Rules",
    marathiTitle: "nesting — आत शैली",
    level: "advanced",
    minutes: 40,
    summary: "CSS nesting साहाय्याने सुबक रचना.",
    sections: [
      { title: "1. nesting कल्पना", content: "आतमध्ये शैली.\nसुबक रचना.\nमूळ पाहतो.\nकोड लहान.\nवाचणे सोपे.", code: `nav {
  ul {
    list-style: none;
  }
}`, codeLanguage: "css" },
      { title: "2. parent थर", content: "अँपरसँड.\nनियम हा.\nआत्माशी जोड.\nशैली स्पष्ट.\nरचना नेमकी.", code: `.card {
  & > .title {
    color: #111827;
  }
}`, codeLanguage: "css" },
      { title: "3. संवाद शैली", content: "hover आत.\nरंग बदल.\nक्रिया दिसे.\nनियम सुबक.\nदृश्य सजीव.", code: `.btn {
  &:hover {
    background: #4f46e5;
  }
}`, codeLanguage: "css" },
      { title: "4. media आत", content: "media घराच्या आत.\ncleanc cut.\nब्रेकपॉइंट जवळ.\nस्क्रीन तोल.\nरचना व्यवस्थित.", code: `.wrapper {
  @media (width < 640px) {
    grid-template-columns: 1fr;
  }
}`, codeLanguage: "css" },
      { title: "5. सगळे जुळते", content: "दुवा आणि आतील.\nरंग शोध.\nनियम एक.\nवाचन सुबक.\nसवय योग्य.", code: `.nav {
  & a {
    text-decoration: none;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\nnesting नाही.\nतरीही शैली.\nसरळ लेखन.\nआधार दुहेरी.", code: `.grid {
  & > .item {
    padding: 8px;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सूची व्यवस्था.\nथोडी जागा.", code: `.list {
  & li + li {
    margin-top: 4px;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nesting फायदा?", "& कसा वापराल?", "media आत चालते?", "जुन्या आधार?"],
    quiz: [
      { question: "nesting काय?", options: ["आतमध्ये", "बाहेर", "नवीन"], correct: 0 },
      { question: "& काय दाखवतो?", options: ["parent", "child", "सीमा"], correct: 0 },
      { question: ":hover कुठे?", options: ["& सोबत", "नंतर", "धागा"], correct: 0 },
      { question: "media आत?", options: ["होय", "नाही", "कधीच"], correct: 0 },
    ],
    challenge: {
      prompt: "nav list नेस्ट करा.",
      starterCode: `nav {
  ul {
    list-style: none;
  }
}`,
      expectedOutput: "Nested nav styles render on Marathi page",
    },
    interviewQuestions: ["nesting सपोर्ट?", "& का गरजेचे?"],
    related: ["css-is-anywhere", "css-has-selector", "css-isolation-z"],
    prev: "css-is-anywhere",
    next: "css-has-selector",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-has-selector",
    categoryId: "web",
    title: "Has Selector",
    marathiTitle: "has-selector — परिस्थिती निवड",
    level: "advanced",
    minutes: 40,
    summary: ":has() साहाय्याने state वरून रचना.",
    sections: [
      { title: "1. has कल्पना", content: "parent नियम.\n:has() प्रश्न.\nमुलगा असेल.\nशैली जुळते.\nरचना बदल.", code: `.card:has(img) {
  padding: 0;
}`, codeLanguage: "css" },
      { title: "2. forms साथ", content: "error जवळ.\nborder रंग.\nवापरकर्ता दिशा.\nचूक स्पष्ट.\nनियम नेमका.", code: `input:has(~ .error) {
  border-color: #dc2626;
}`, codeLanguage: "css" },
      { title: "3. nav सूचना", content: "active मुलगा.\nपार्श्वभूमी जुळते.\naria-current.\nमार्ग स्पष्ट.", code: `nav:has(a[aria-current="page"]) {
  background: #eef2ff;
}`, codeLanguage: "css" },
      { title: "4. गट रंग", content: "checked row.\noutline जोड.\nसज्ज स्थिती.\nस्पष्ट ठसा.\nसवय योग्य.", code: `.row:has(.checked) {
  outline: 2px solid #16a34a;
}`, codeLanguage: "css" },
      { title: "5. लेबल नियम", content: "required मुलगा.\nतारका खास.\ncontent छोटा.\nवाचक सुख.\nनियम नेमका.", code: `.field:has(> input:required) label::after {
  content: " *";
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@supports selector.\nनसेल साधा.\nआधार सुरक्षित.\nकोड सुबक.", code: `@supports selector(:has(*)) {
  .row:has(.on) {
    background: #f0fdf5;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "sidebar खुली.\nएक शिफ्ट.", code: `.app:has(.sidebar.open) main {
  margin-left: 16px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["has काय करतो?", "forms मध्ये कसा?", "supports कधी?", "aria-current कुठे?"],
    quiz: [
      { question: ":has() काय?", options: ["parent नियम", "रंग थर", "ध्वनी गट"], correct: 0 },
      { question: "aria-current कुठे?", options: ["nav", "body", "html"], correct: 0 },
      { question: "required label?", options: ["::after", "::before", "::first"], correct: 0 },
      { question: "@supports काय?", options: ["selector", "display", "margin"], correct: 0 },
    ],
    challenge: {
      prompt: "nav active करा.",
      starterCode: `nav:has(a[aria-current="page"]) {
  background: #eef2ff;
}`,
      expectedOutput: "Active nav highlighted on Marathi page",
    },
    interviewQuestions: ["has लाभ?", "fallback कसा?"],
    related: ["css-is-anywhere", "css-nesting-rules", "css-modal-backdrop"],
    prev: "css-nesting-rules",
    next: "css-range-media",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-range-media",
    categoryId: "web",
    title: "Range Media",
    marathiTitle: "range-media — दरम्यान नियम",
    level: "advanced",
    minutes: 40,
    summary: "range syntax असलेले मीडिया क्वेरी.",
    sections: [
      { title: "1. range कल्पना", content: "दरम्यान तपास.\nदोन बिंदू.\nस्क्रीन आकार.\nनियम नेमका.", code: `@media (width >= 640px) and (width <= 1200px) {
  body {
    font-size: 16px;
  }
}`, codeLanguage: "css" },
      { title: "2. छोटा नियम", content: "छोटी screen.\nएक column.\nसाधी रचना.\nमोबाईल सोय.", code: `@media (width <= 480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}`, codeLanguage: "css" },
      { title: "3. मोठा थर", content: "मोठी screen.\nflex दिशा.\nजागा मिळे.\nबाजू रचना.\nसवय योग्य.", code: `@media (width >= 1024px) {
  .shell {
    display: flex;
  }
}`, codeLanguage: "css" },
      { title: "4. नवी लेखनी", content: "एकदा बिंदू.\n> चिन्ह.\nवर्णन हलके.\nक्रम वाचतो.\nनियम स्पष्ट.", code: `@media (width > 40rem) {
  h1 {
    font-size: 2rem;
  }
}`, codeLanguage: "css" },
      { title: "5. दिशा साथ", content: "portrait उभे.\nsidebar नको.\nजागा कमी.\nरचना नीट.\nदृश्य सुबक.", code: `@media (orientation: portrait) {
  .side {
    display: none;
  }
}`, codeLanguage: "css" },
      { title: "6. संयोग नियम", content: "दोन्ही तपास.\nhover नाही.\ntap सोय.\nमोठे बटण.", code: `@media (width <= 960px) and (hover: none) {
  .tap {
    min-height: 48px;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मध्यम थर.\nदोन स्तंभ.", code: `@media (960px <= width <= 1280px) {
  .banner {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["range कधी वापराल?", "portrait काय?", "hover none कुठे?", "to syntax कसा?"],
    quiz: [
      { question: "range काय?", options: ["दरम्यान", "नंतर", "कोठेही"], correct: 0 },
      { question: "portrait काय?", options: ["उभा", "आडवा", "तिरपा"], correct: 0 },
      { question: "hover नाही कुठे?", options: ["tap", "mouse", "scroll"], correct: 0 },
      { question: "> लेखनी?", options: ["नवी पद्धत", "जुनी ओळ", "रंग रेखा"], correct: 0 },
    ],
    challenge: {
      prompt: "ब्रेकपॉइंट घाला.",
      starterCode: `@media (width >= 640px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`,
      expectedOutput: "Grid adapts at breakpoint on Marathi page",
    },
    interviewQuestions: ["range vs जुनी लेखनी?", "hover media उपयोग?"],
    related: ["css-viewport-units", "css-multicolumn", "css-modal-backdrop"],
    prev: "css-has-selector",
    next: "css-viewport-units",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-viewport-units",
    categoryId: "web",
    title: "Viewport Units",
    marathiTitle: "viewport-units — दृश्य एकके",
    level: "advanced",
    minutes: 40,
    summary: "svh dvh lvh एकके mobile-friendly.",
    sections: [
      { title: "1. viewport थर", content: "100vh जुना.\nmobile बार.\nउंची मिळते.\nरचना लवचिक.", code: `.hero {
  min-height: 100vh;
}`, codeLanguage: "css" },
      { title: "2. लहान दृश्य", content: "svh लहान.\nबार वगळतो.\nअचूक उंची.\nhero नीट.\nनियम स्पष्ट.", code: `.hero {
  min-height: 100svh;
}`, codeLanguage: "css" },
      { title: "3. गतिशील थर", content: "dvh लवचिक.\nबार हलतो.\nउंची बदल.\nदृश्य संपूर्ण.", code: `.hero {
  min-height: 100dvh;
}`, codeLanguage: "css" },
      { title: "4. मोठा थर", content: "lvh मोठा.\nkeyboard बाहेर.\nजागा भरते.\nविचार योग्य.\nनियम नेमका.", code: `.hero {
  min-height: 100lvh;
}`, codeLanguage: "css" },
      { title: "5. तोल नियम", content: "सर्वात सुरक्षा.\n@supports जोड.\nनसेल svh.\nआधार मजबूत.\nकोड सुबक.", code: `.hero {
  min-height: 100svh;
}
@supports (height: 100dvh) {
  .hero {
    min-height: 100dvh;
  }
}`, codeLanguage: "css" },
      { title: "6. मिळके वापर", content: "पान उंची.\ngrid खाली.\nस्क्रोल नको.\nफुटर ठीक.\nरचना नेमकी.", code: `.page {
  min-height: 100dvh;
  display: grid;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "hero एक.\nsvh सोय.", code: `.hero {
  min-height: 100svh;
  padding: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["100vh दोष?", "svh कधी?", "dvh कधी?", "@supports का?"],
    quiz: [
      { question: "100vh समस्या?", options: ["बार", "रंग", "ध्वनी"], correct: 0 },
      { question: "svh म्हणजे?", options: ["लहान दृश्य", "मोठे दृश्य", "समान"], correct: 0 },
      { question: "dvh काय?", options: ["गतिशील", "स्थिर", "जुने"], correct: 0 },
      { question: "lvh?", options: ["मोठा", "लहान", "खाली"], correct: 0 },
    ],
    challenge: {
      prompt: "hero dvh करा.",
      starterCode: `.hero {
  min-height: 100dvh;
}`,
      expectedOutput: "Hero fills viewport dynamically on Marathi page",
    },
    interviewQuestions: ["svh vs dvh फरक?", "@supports का लिहावे?"],
    related: ["css-range-media", "css-filters-fx", "css-isolation-z"],
    prev: "css-range-media",
    next: "css-multicolumn",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-multicolumn",
    categoryId: "web",
    title: "Multi-Column",
    marathiTitle: "multicolumn — स्तंभ मजकूर",
    level: "advanced",
    minutes: 40,
    summary: "columns प्रॉपर्टीने वर्तमानपत्र रचना.",
    sections: [
      { title: "1. columns कल्पना", content: "स्तंभ मजकूर.\nमासिक रचना.\nआपोआप भाग.\nवाचन आराम.", code: `.mag {
  columns: 3 220px;
}`, codeLanguage: "css" },
      { title: "2. अंतर नियम", content: "column-gap.\nमधली जागा.\nकड स्पष्ट.\nवाचन नीट.\nरचना सुबक.", code: `.mag {
  column-gap: 24px;
}`, codeLanguage: "css" },
      { title: "3. विभाजक थर", content: "column-rule.\nरेषा मध्ये.\nरंग हलका.\nमजकूर वेगळा.", code: `.mag {
  column-rule: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
      { title: "4. span थर", content: "column-span.\nमथळा सर्व.\ncolumn टाकतो.\nरचना खुली.\nनियम नेमका.", code: `.mag h2 {
  column-span: all;
}`, codeLanguage: "css" },
      { title: "5. संतुलन", content: "column-fill.\nbalance मध्यम.\nउंची समान.\nओळ स्थिर.\nवाचन सुख.", code: `.mag {
  column-fill: balance;
}`, codeLanguage: "css" },
      { title: "6. जुळणी", content: "justify मजकूर.\nhyphens auto.\nकड सरळ.\nवाचन सुरळीत.\nरचना नेमकी.", code: `.mag {
  text-align: justify;
  hyphens: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "वृत्तपत्र मजकूर.\nदोन स्तंभ.", code: `.news {
  columns: 2;
  column-gap: 20px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["columns कधी वापराल?", "span काय करतो?", "balance म्हणजे?", "rule काय?"],
    quiz: [
      { question: "columns काय?", options: ["स्तंभ", "रंग", "स्क्रोल"], correct: 0 },
      { question: "column-gap?", options: ["अंतर", "उंची", "धार"], correct: 0 },
      { question: "span सगळे?", options: ["पंक्ती", "कोपरा", "थर"], correct: 0 },
      { question: "विभाजक?", options: ["column-rule", "column-gap", "column-fill"], correct: 0 },
    ],
    challenge: {
      prompt: "अनुच्छेद columns करा.",
      starterCode: `.mag {
  columns: 2;
  column-gap: 20px;
}`,
      expectedOutput: "Two-column Marathi article text",
    },
    interviewQuestions: ["columns मर्यादा?", "span वापर कुठे?"],
    related: ["css-viewport-units", "css-counters-lab", "css-text-wrap"],
    prev: "css-viewport-units",
    next: "css-motion-path",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-motion-path",
    categoryId: "web",
    title: "Motion Path",
    marathiTitle: "motion-path — मार्ग गती",
    level: "advanced",
    minutes: 40,
    summary: "offset-path वरून मार्गावर हालचाल.",
    sections: [
      { title: "1. path कल्पना", content: "मार्ग घाला.\nघटक फिरतो.\npath चिन्ह.\nदृश्य सजीव.", code: `.bird {
  offset-path: path("M 0 0 L 100 0");
}`, codeLanguage: "css" },
      { title: "2. गोल मार्ग", content: "circle आभास.\nकेंद्र सोय.\nत्रिज्या नेमकी.\nगती गोल.", code: `.dot {
  offset-path: circle(60px at center);
}`, codeLanguage: "css" },
      { title: "3. अंतर नियम", content: "offset-distance.\nटक्केवारी.\nप्रवास किती.\nस्थान स्पष्ट.\nनियम नेमका.", code: `.dot {
  offset-distance: 30%;
}`, codeLanguage: "css" },
      { title: "4. कोन थर", content: "offset-rotate.\nकोन जपा.\nअक्षर सरळ.\nगती नीट.\nदृश्य सुबक.\nसवय योग्य.", code: `.dot {
  offset-rotate: 0deg;
}`, codeLanguage: "css" },
      { title: "5. सजीव चाल", content: "keyframes जोड.\ndistance शेवट.\nहालचाल गुळगुळीत.\nसजीव दृश्य.", code: `@keyframes fly {
  to {
    offset-distance: 100%;
  }
}
.bird {
  animation: fly 3s linear infinite;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@supports path.\nनसेल स्थिर.\nआधार सुरक्षित.\nकोड सुबक.", code: `@supports (offset-path: none) {
  .bird {
    offset-path: path("M 0 0 L 240 0");
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "उपग्रह कक्षा.\nगोल फिरता.", code: `.sat {
  offset-path: circle(90px at center);
  animation: fly 8s linear infinite;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["offset-path काय?", "offset-distance?", "rotate कधी?", "supports कसा?"],
    quiz: [
      { question: "motion-path काय?", options: ["मार्ग", "रंग", "फॉन्ट"], correct: 0 },
      { question: "offset-distance?", options: ["प्रवास", "आकार", "नाव"], correct: 0 },
      { question: "circle कुठे?", options: ["आधार", "शेवट", "रुंदी"], correct: 0 },
      { question: "offset-rotate?", options: ["कोन", "गती", "धार"], correct: 0 },
    ],
    challenge: {
      prompt: "पक्षी उडवा.",
      starterCode: `@keyframes fly {
  to {
    offset-distance: 100%;
  }
}`,
      expectedOutput: "Bird animated along path on Marathi page",
    },
    interviewQuestions: ["path syntax काय?", "supports आधार कसा?"],
    related: ["css-filters-fx", "css-isolation-z", "css-marathi-capstone10"],
    prev: "css-multicolumn",
    next: "css-filters-fx",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-filters-fx",
    categoryId: "web",
    title: "Filter Effects",
    marathiTitle: "filters-fx — प्रभाव थर",
    level: "advanced",
    minutes: 40,
    summary: "filter प्रॉपर्टीने रूप देणे.",
    sections: [
      { title: "1. filter कल्पना", content: "प्रभाव एक.\nfilter नियम.\nराखाडी रंग.\nरूप नेमके.", code: `.img {
  filter: grayscale(0.5);
}`, codeLanguage: "css" },
      { title: "2. परत रंग", content: "hover उलट.\nsaturate वाढ.\nरंग जुळतो.\nक्रिया स्पष्ट.\nदृश्य सजीव.", code: `.thumb:hover {
  filter: saturate(1.2);
}`, codeLanguage: "css" },
      { title: "3. धुके थर", content: "blur धुके.\nमागे सजीव.\nलक्ष मध्य.\nरचना स्पष्ट.\nनियम नेमका.", code: `.blur {
  filter: blur(8px);
}`, codeLanguage: "css" },
      { title: "4. प्रकाश", content: "brightness कमी.\nअंधार थर.\nरूप बदल.\nसवय योग्य.", code: `.dark {
  filter: brightness(0.8);
}`, codeLanguage: "css" },
      { title: "5. अनेक प्रभाव", content: "दोन्ही एकत्र.\ncontrast थोडा.\nsepia हलका.\nरूप सुबक.", code: `.fx {
  filter: contrast(1.1) sepia(0.2);
}`, codeLanguage: "css" },
      { title: "6. सावली थर", content: "drop-shadow.\nआकार सावली.\nआधार दिसे.\nखोली वाढ.", code: `.card {
  filter: drop-shadow(0 8px 12px rgb(0 0 0 / 0.2));
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "लोगो फिका.\nएक प्रभाव.", code: `.logo-muted {
  filter: grayscale(1);
  opacity: 0.6;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["filter कधी वापराल?", "grayscale कुठे?", "hover कसे?", "drop-shadow लाभ?"],
    quiz: [
      { question: "filter काय?", options: ["प्रभाव", "रंग", "मजकूर"], correct: 0 },
      { question: "grayscale?", options: ["राखाडी", "हिरवा", "निळा"], correct: 0 },
      { question: "blur?", options: ["धुके", "तेल", "धागा"], correct: 0 },
      { question: "drop-shadow?", options: ["सावली", "रुंदी", "ओळ"], correct: 0 },
    ],
    challenge: {
      prompt: "होवर रंग द्या.",
      starterCode: `.thumb:hover {
  filter: saturate(1.2);
}`,
      expectedOutput: "Thumbnail saturates on hover in Marathi page",
    },
    interviewQuestions: ["filter गती लागते का?", "drop-shadow फायदा?"],
    related: ["css-motion-path", "css-accent-color", "css-color-mix"],
    prev: "css-motion-path",
    next: "css-counters-lab",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-counters-lab",
    categoryId: "web",
    title: "Counters Lab",
    marathiTitle: "counters-lab — आपोआप क्रम",
    level: "advanced",
    minutes: 40,
    summary: "CSS counters ने स्वयं क्रमांक.",
    sections: [
      { title: "1. counter कल्पना", content: "मोजणी नवी.\nreset आधी.\nincrement वाढ.", code: `ol {
  counter-reset: item;
}
ol li {
  counter-increment: item;
}`, codeLanguage: "css" },
      { title: "2. दाखवणे", content: "::before जोड.\ncontent वाचा.\nक्रमांक दिसे.\nस्वरूप नीट.", code: `ol li::before {
  content: counter(item) ". ";
}`, codeLanguage: "css" },
      { title: "3. गोल शैली", content: "कंस व्यवस्था.\nस्वरूप वेगळे.\nवाचन स्पष्ट.\nरचना नेमकी.", code: `ol li::before {
  content: "(" counter(item) ")";
}`, codeLanguage: "css" },
      { title: "4. शीर्षक क्रम", content: "sec counter.\nमथळा आधी.\nleading-zero.\nसंरेखन नीट.", code: `.sec h2::before {
  counter-increment: sec;
  content: counter(sec, decimal-leading-zero) " ";
}`, codeLanguage: "css" },
      { title: "5. reset नियम", content: "पटलाला reset.\nप्रत्येक पटल.\nक्रम पुन्हा.\nविभाग स्पष्ट.\nनियम नेमका.", code: `.panel {
  counter-reset: sec;
}`, codeLanguage: "css" },
      { title: "6. सूची रचना", content: "पायरी रंग.\nक्रम जुळतो.\nमोजणी वाढ.\nरचना सुबक.\nसवय योग्य.", code: `.steps li {
  counter-increment: step;
}
.steps li::before {
  content: counter(step) ".";
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रक्रिया क्रम.\nआपोआप अंक.", code: `.steps li {
  counter-increment: step;
}
.steps li::before {
  content: counter(step) ". ";
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["counter कधी वापराल?", "reset कुठे?", "format काय?", "::before का?"],
    quiz: [
      { question: "counter काय?", options: ["मोजणी", "रंग", "धार"], correct: 0 },
      { question: "counter-reset?", options: ["शून्य", "वाढ", "नाव"], correct: 0 },
      { question: "increment?", options: ["वाढ", "थांबे", "फिरते"], correct: 0 },
      { question: ":before कुठे?", options: ["दाखवणे", "फिरवणे", "हलवणे"], correct: 0 },
    ],
    challenge: {
      prompt: "पायरी क्रमांक करा.",
      starterCode: `.steps li {
  counter-increment: step;
}
.steps li::before {
  content: counter(step) ".";
}`,
      expectedOutput: "Steps auto-numbered on Marathi page",
    },
    interviewQuestions: ["counter vs list-style?", "nested counter कसे?"],
    related: ["css-multicolumn", "css-print-styles", "css-is-anywhere"],
    prev: "css-filters-fx",
    next: "css-isolation-z",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-isolation-z",
    categoryId: "web",
    title: "Isolation & Z",
    marathiTitle: "isolation-z — थर क्रम",
    level: "advanced",
    minutes: 40,
    summary: "stacking contexto आणि z-index नियंत्रण.",
    sections: [
      { title: "1. stack कल्पना", content: "थर क्रम.\nz-index अंक.\nसमोर मागे.\nरचना समजते.", code: `.front {
  z-index: 2;
}`, codeLanguage: "css" },
      { title: "2. खोली थर", content: "isolation नवे.\nथर वेगळा.\nथर समूह.\nभाग स्पष्ट.", code: `.layer {
  isolation: isolate;
}`, codeLanguage: "css" },
      { title: "3. दरवाजा", content: "header सापेक्ष.\nz-index 10.\nओव्हरलॅप नीट.\nसूची वर.\nनियम नेमका.", code: `.header {
  position: relative;
  z-index: 10;
}`, codeLanguage: "css" },
      { title: "4. अलगाव", content: "isolation कापून.\nआतमधील थर.\nबाहेर जुळतो.\nगोंधळ टाळा.", code: `.modal-content {
  isolation: isolate;
}`, codeLanguage: "css" },
      { title: "5. चिकट थर", content: "sticky स्थिर.\nz-index एक.\nवर राहो.\nस्क्रोल नीट.\nदृश्य स्पष्ट.", code: `.gallery {
  position: sticky;
  z-index: 1;
}`, codeLanguage: "css" },
      { title: "6. कार्ड तुलना", content: "प्रत्येक card.\nस्वतः थर.\nक्रम समजतो.\nरचना नेमकी.\nनियम स्पष्ट.", code: `.card {
  position: relative;
  z-index: 0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "वरचा बार.\nsticky वर.", code: `.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["z-index कधी वापराल?", "isolation काय?", "topbar कसा?", "sticky कुठे?"],
    quiz: [
      { question: "z-index काय?", options: ["थर", "रंग", "अक्षर"], correct: 0 },
      { question: "isolation?", options: ["वेगळा गट", "नवीन रंग", "मोठा आकार"], correct: 0 },
      { question: "sticky कुठे?", options: ["topbar", "बॉडी", "image"], correct: 0 },
      { question: "z-index उच्च?", options: ["समोर", "मागे", "आत"], correct: 0 },
    ],
    challenge: {
      prompt: "topbar थर करा.",
      starterCode: `.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
}`,
      expectedOutput: "Sticky Marathi topbar above content",
    },
    interviewQuestions: ["stacking context काय?", "isolation उपयोग?"],
    related: ["css-svg-styles", "css-viewport-units", "css-marathi-capstone10"],
    prev: "css-counters-lab",
    next: "css-svg-styles",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-svg-styles",
    categoryId: "web",
    title: "SVG Styles",
    marathiTitle: "svg-styles — चिन्ह रंग",
    level: "advanced",
    minutes: 40,
    summary: "inline SVG fill stroke सह उभे करणे.",
    sections: [
      { title: "1. svg कल्पना", content: "svg inline.\nCSS जोडता.\nचिन्ह आकार.", code: `.icon {
  width: 24px;
  height: 24px;
}`, codeLanguage: "css" },
      { title: "2. fill थर", content: "आतील रंग.\nfill नियम.\nचिन्ह स्पष्ट.\nरंग निवड.", code: `.icon {
  fill: #4f46e5;
}`, codeLanguage: "css" },
      { title: "3. stroke नियम", content: "किनारी रेषा.\nstroke रंग.\nजाडी नेमकी.\nआकार ठळक.\nरचना सुबक.", code: `.icon {
  stroke: #0f172a;
  stroke-width: 1.5;
}`, codeLanguage: "css" },
      { title: "4. संवाद शैली", content: "hover रंग.\nचिन्ह बदल.\nक्रिया दिसे.\nपरस्पर स्पष्ट.", code: `.icon:hover {
  fill: #7c3aed;
}`, codeLanguage: "css" },
      { title: "5. प्रमाण थर", content: "avatar मोठा.\nsvg भरा.\nआकार जुळतो.\nरचना नेमकी.", code: `.avatar svg {
  width: 100%;
  height: 100%;
}`, codeLanguage: "css" },
      { title: "6. दृश्य नियम", content: "svg image.\ndisplay block.\nगॅप नको.\nरचना शुद्ध.\nनियम नेमका.", code: `img[src$=".svg"] {
  display: block;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "लोगो नीट.\nएक आधार.", code: `.logo {
  display: inline-block;
  vertical-align: middle;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["svg inline का?", "fill कुठे?", "stroke काय?", "hover कसे?"],
    quiz: [
      { question: "fill काय?", options: ["आतील रंग", "धार", "ध्वनी"], correct: 0 },
      { question: "stroke कुठे?", options: ["किनारी", "मध्य", "खाली"], correct: 0 },
      { question: "hover कसा?", options: ["संवाद", "नवीन", "धागा"], correct: 0 },
      { question: "width सेट?", options: ["आकार", "नाव", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "लोगो रंग द्या.",
      starterCode: `.logo {
  fill: #4f46e5;
}`,
      expectedOutput: "Marathi logo icon colored via CSS",
    },
    interviewQuestions: ["inline svg लाभ?", "stroke-width क्रम?"],
    related: ["css-isolation-z", "css-filters-fx", "css-accent-color"],
    prev: "css-isolation-z",
    next: "css-marathi-capstone10",
    levelLabel: CSS10_LABEL,
  },
  {
    slug: "css-marathi-capstone10",
    categoryId: "web",
    title: "Refined Capstone",
    marathiTitle: "Power Bag — भाग संग्रह",
    level: "advanced",
    minutes: 40,
    summary: "Level 10 नवीन साधने एकत्र.",
    sections: [
      { title: "1. संग्रह थर", content: "brand टोकन.\nमूळ ऐक्य.\nरंग एक.", code: `:root {
  --brand: #7c3aed;
}`, codeLanguage: "css" },
      { title: "2. मथळा गट", content: "मथळा तोल.\nएक नियम.\nवाचन आराम.\nरचना नेमकी.", code: `:is(h1, h2, h3) {
  text-wrap: balance;
}`, codeLanguage: "css" },
      { title: "3. has कार्ड", content: "image कार्ड.\npadding शून्य.\nदृश्य सुबक.", code: `.card:has(img) {
  padding: 0;
}`, codeLanguage: "css" },
      { title: "4. नवी मीडिया", content: "दोन स्तंभ.\nब्रेकपॉइंट.\nस्क्रीन मोठी.\nरचना बदल.", code: `@media (width >= 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
      { title: "5. hero उंची", content: "dvh उंची.\nपरफेक्ट भरणे.\nबार राहो.\nदृश्य पूर्ण.", code: `.hero {
  min-height: 100dvh;
}`, codeLanguage: "css" },
      { title: "6. सूचना थर", content: "स्तंभ दोन.\nअंतर नेमके.\nवाचन सुख.\nरचना सुबक.", code: `.note {
  columns: 2;
  column-gap: 16px;
}`, codeLanguage: "css" },
      { title: "Final Project", content: "सर्व अंतिम.\nथर जोडा.", code: `.topbar {
  position: sticky;
  top: 0;
  z-index: 100;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 10 नवे?", "is कुठे?", "hero उंची?", "topbar कसा?"],
    quiz: [
      { question: "Level 10 थीम?", options: ["रिफाइन पॉवर", "साधा रंग", "जुना थर"], correct: 0 },
      { question: "selectors कुठे?", options: ["is has not", "snap accent", "clamp mix"], correct: 0 },
      { question: "hero उंची?", options: ["dvh", "vh50", "px100"], correct: 0 },
      { question: "columns कुठे?", options: ["अनुच्छेद", "व्हिडिओ", "फॉर्म"], correct: 0 },
    ],
    challenge: {
      prompt: "पोर्टल सुरू करा.",
      starterCode: `:root {
  --brand: #7c3aed;
}`,
      expectedOutput: "Final patterns assembled through Marathi portal",
    },
    interviewQuestions: ["तीन आवडते साधने?", "z-index नियम?"],
    related: ["css-svg-styles", "css-motion-path", "css-counters-lab"],
    prev: "css-svg-styles",
    next: "css-is-anywhere",
    levelLabel: CSS10_LABEL,
  },];
