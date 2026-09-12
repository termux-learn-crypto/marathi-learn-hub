import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 9 — Modern Patterns ===
export const CSS9_LABEL = "CSS · Level 9 — Modern Patterns";

export const cssLevel9: Tutorial[] = [
  {
    slug: "css-aspect-ratio-2",
    categoryId: "web",
    title: "Aspect Ratio",
    marathiTitle: "aspect-ratio — प्रमाण नियम",
    level: "advanced",
    minutes: 38,
    summary: "width आणि height प्रमाण संतुलन.",
    sections: [
      { title: "1. प्रमाण कल्पना", content: "aspect-ratio नवे.\nएकाच जागी ठरवा.\nwidth height जुळतात.\nभाग भरतो.", code: `.media {
  aspect-ratio: 16 / 9;
}`, codeLanguage: "css" },
      { title: "2. चौकोन थर", content: "चौकोन समान.\nwidth ठरवा.\nheight आपोआप.\nimage भरते.\nप्रमाण कायम.", code: `.thumb {
  aspect-ratio: 1 / 1;
  width: 200px;
}`, codeLanguage: "css" },
      { title: "3. व्हिडिओ व्यवस्था", content: "video frame.\niframe भरा.\nobject-fit नियम.\nकड कापा.\nगती स्थिर.\nस्क्रीन प्रत्येक.", code: `.video {
  aspect-ratio: 16 / 9;
}
.video iframe {
  width: 100%;
  height: 100%;
}`, codeLanguage: "css" },
      { title: "4. auto वापर", content: "auto जुना.\nप्रमाण बंद.\ncontent नुसार.\nflex मध्ये.\nआकार नेमका.\nनियम स्वच्छ.", code: `.auto {
  aspect-ratio: auto;
}`, codeLanguage: "css" },
      { title: "5. लवचिक थर", content: "छोटी screen.\nप्रमाण बदल.\nmargin जपा.\ncolumn एक.\nसवय योग्य.", code: `@media (width < 640px) {
  .thumb {
    aspect-ratio: 1 / 1;
    width: 100%;
  }
}`, codeLanguage: "css" },
      { title: "6. पोस्टर रचना", content: "poster उभा.\n3 बाय 4.\nobject-fit cover.\nभाग क्रम.\nदृश्य आकर्षक.\nकोड सुबक.", code: `.poster {
  aspect-ratio: 3 / 4;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "flag बॉक्स.\n16 बाय 9.", code: `.flag-box {
  aspect-ratio: 16 / 9;
  border: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["aspect प्रमाण काय?", "iframe कसे भरावे?", "auto कधी वापराल?", "poster प्रमाण?"],
    quiz: [
      { question: "aspect-ratio?", options: ["प्रमाण", "रंग", "मार्ग"], correct: 0 },
      { question: "16/9 म्हणजे?", options: ["रुंद प्रमाण", "उंच प्रमाण", "कोणतीही"], correct: 0 },
      { question: "object-fit?", options: ["झाकणे", "फिरवणे", "निखाली"], correct: 0 },
      { question: "1/1 थर?", options: ["चौकोन", "अळवा", "धागा"], correct: 0 },
    ],
    challenge: {
      prompt: "video box 16/9 ठेवा.",
      starterCode: `.video {
  aspect-ratio: 16 / 9;
}`,
      expectedOutput: "Renders a 16:9 framed box in Marathi page",
    },
    interviewQuestions: ["aspect प्रमाण कशासाठी?", "auto vs निश्चित फरक?"],
    related: ["css-clamp-fluid", "css-scroll-snap", "css-accent-color"],
    prev: "css-marathi-capstone8",
    next: "css-clamp-fluid",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-clamp-fluid",
    categoryId: "web",
    title: "Clamp & Fluid",
    marathiTitle: "clamp — लवचिक आकार",
    level: "advanced",
    minutes: 38,
    summary: "fluid टायपोग्राफी आणि मर्यादित आकार.",
    sections: [
      { title: "1. clamp कल्पना", content: "clamp तीन अंक.\nminimum पहिला.\nइच्छित मधला.\nmaximum शेवट.\nआकार गुळगुळीत.\nस्क्रीन प्रत्येक.", code: `html {
  font-size: clamp(16px, 2vw, 20px);
}`, codeLanguage: "css" },
      { title: "2. मथळा थर", content: "h1 मोठा.\nvw प्रमाण.\nरुंद screen वाढ.\nछोटी घट.\nरचना टिकते.", code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`, codeLanguage: "css" },
      { title: "3. min max", content: "min लहान.\nmax मोठा.\nमिळून नियम.\nरुंदी तोल.\nस्क्रोल नको.", code: `.title {
  width: min(100%, 720px);
}`, codeLanguage: "css" },
      { title: "4. fluid गणना", content: "vw सोबत rem.\nमिश्रण गुळगुळीत.\nओळ मिळे.\nवाचन आराम.\nआकार हळू.\nनियम नेमका.", code: `.copy {
  font-size: clamp(15px, 1vw + 1rem, 18px);
}`, codeLanguage: "css" },
      { title: "5. जागा नियम", content: "card padding.\nclamp जागा.\nलहान कमी.\nमोठे जास्त.\nसंतुलन स्थिर.", code: `.card {
  padding: clamp(12px, 3vw, 24px);
}`, codeLanguage: "css" },
      { title: "6. ग्रिड हाताळणी", content: "auto-fit छान.\nminmax लवचिक.\ncolumn फिरतो.\nहा थर.\nरचना सजीव.\nसवय चांगली.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "footer दुवा.\nएक मर्यादा.", code: `.fluid {
  font-size: clamp(14px, 2vw, 18px);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["clamp कोणते तीन?", "min काय करतो?", "auto-fit कधी?", "fluid का वापरतो?"],
    quiz: [
      { question: "clamp काय?", options: ["मर्यादा यंत्र", "रंग यंत्र", "दिनांक"], correct: 0 },
      { question: "min म्हणजे?", options: ["लहान मर्यादा", "मोठी मर्यादा", "चौथी संख्या"], correct: 0 },
      { question: "vw एकक?", options: ["दृश्य रुंदी", "उंची धड", "मजकूर"], correct: 0 },
      { question: "max साठी?", options: ["उच्च आकार", "निम्न आकार", "सगळे समान"], correct: 0 },
    ],
    challenge: {
      prompt: "h1 fluid करा.",
      starterCode: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
      expectedOutput: "Heading scales fluidly across viewport in Marathi page",
    },
    interviewQuestions: ["fluid टायपोग्राफी कशी?", "minmax ग्रिड कसे?"],
    related: ["css-aspect-ratio", "css-scroll-snap", "css-color-mix"],
    prev: "css-aspect-ratio",
    next: "css-scroll-snap",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-scroll-snap-2",
    categoryId: "web",
    title: "Scroll Snap",
    marathiTitle: "scroll-snap — थांबण्याची सोय",
    level: "advanced",
    minutes: 38,
    summary: "स्क्रोल वेळी नीट थांबणे.",
    sections: [
      { title: "1. snap कल्पना", content: "snap स्क्रोल.\ncontainer अक्ष.\nअर्थ केंद्र.\nथांबणे सोपे.\nदृश्य सुबक.\nवापर छान.", code: `.snap {
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "2. item नियम", content: "प्रत्येक item.\nsnap-align.\ncenter मध्यभागी.\nकड बरोबर.\nस्थान स्थिर.", code: `.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "3. proximity थर", content: "mandatory कडक.\nproximity मऊ.\nजवळ थांबे.\nवापरकर्ता आराम.\nनियम नेमका.\nसवय योग्य.", code: `.snap {
  scroll-snap-type: x proximity;
}`, codeLanguage: "css" },
      { title: "4. margin द्या", content: "scroll-margin.\nकड जागा.\nsticky साथ.\nभाग छान.\nजागा संतुलित.", code: `.slide {
  scroll-margin: 12px;
}`, codeLanguage: "css" },
      { title: "5. उभा स्क्रोल", content: "y अक्ष.\nअनुलंब थर.\nस्तंभ समान.\nदिशा व्यवस्थित.\nसवय चांगली.", code: `.columns {
  scroll-snap-type: y mandatory;
}`, codeLanguage: "css" },
      { title: "6. सुरक्षा नियम", content: "reduced-motion.\nगती कमी.\nस्थिर स्क्रोल.\nआदर दाखवा.\nप्रवेश्यता जपा.\nकोड सुबक.", code: `@media (prefers-reduced-motion: reduce) {
  .snap {
    scroll-behavior: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "gallery वाहने.\nएकच मार्ग.", code: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["snap-type अक्ष?", "align कुठे लिहाल?", "proximity काय?", "reduced कधी?"],
    quiz: [
      { question: "scroll-snap काय?", options: ["थांबणे", "उड्डाण", "रंग"], correct: 0 },
      { question: "snap-align?", options: ["स्थान", "नाम", "ध्वनी"], correct: 0 },
      { question: "proximity?", options: ["सैल थांबणे", "कठोर रंग", "गोल भाग"], correct: 0 },
      { question: "x अक्ष?", options: ["क्षैतिज", "उभा", "ओळ"], correct: 0 },
    ],
    challenge: {
      prompt: "gallery snap करा.",
      starterCode: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`,
      expectedOutput: "Gallery scrolls and snap-stops neatly on Marathi page",
    },
    interviewQuestions: ["snap कसे लिहावे?", "reduced-motion का?"],
    related: ["css-clamp-fluid", "css-accent-color", "css-aspect-ratio"],
    prev: "css-clamp-fluid",
    next: "css-accent-color",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-accent-color-2",
    categoryId: "web",
    title: "Accent Color",
    marathiTitle: "accent-color — चेकबॉक्स रंग",
    level: "advanced",
    minutes: 38,
    summary: "मूळ input कंट्रोल्सना रंग देणे.",
    sections: [
      { title: "1. आधार रंग", content: "checkbox नवा.\naccent-color.\nपहिला रंग.\nमूळ कंट्रोल.\nदृश्य टवटवीत.", code: `input {
  accent-color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "2. toggle साथ", content: "radio जुळते.\ncheckbox समान.\nरंग नेमका.\nstate स्पष्ट.", code: `input[type="checkbox"] {
  accent-color: #16a34a;
}`, codeLanguage: "css" },
      { title: "3. range थर", content: "range भरा.\nslider रंग.\nप्रगती दिसे.\nनियम थोडा.\nदृश्य स्पष्ट.", code: `input[type="range"] {
  accent-color: #ea580c;
}`, codeLanguage: "css" },
      { title: "4. फॉर्म शैली", content: "अनेक कंट्रोल.\nएकच रंग.\nbodice जुळते.\nरचना सुबक.\nसंवेदना नीट.\nसवय योग्य.", code: `.form {
  accent-color: #7c3aed;
}`, codeLanguage: "css" },
      { title: "5. मानक क्रम", content: ":root थर.\nसर्वत्र रंग.\nवारसा मिळे.\nआधार एक.\nनियम शुद्ध.", code: `:root {
  accent-color: #2563eb;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "@supports तपास.\nनसेल सोड.\nब्राउझर आदर.\nआधार घट्ट.\nसवय चांगली.", code: `@supports (accent-color: black) {
  input {
    accent-color: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "राज्य बॉक्स.\nरंग दाखवा.", code: `.check {
  accent-color: #b91c1c;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["accent-color कुठे?", "range कसा?", ":root का?", "@supports कधी?"],
    quiz: [
      { question: "accent-color काय?", options: ["कंट्रोल रंग", "मजकूर रंग", "सीमा साइज"], correct: 0 },
      { question: "कोणते input?", options: ["checkbox", "image", "link"], correct: 0 },
      { question: ":root मध्ये?", options: ["सर्वत्र", "एका जागी", "कोठेही नाही"], correct: 0 },
      { question: "slider रंग?", options: ["range", "video", "audio"], correct: 0 },
    ],
    challenge: {
      prompt: "checkbox हिरवा करा.",
      starterCode: `input[type="checkbox"] {
  accent-color: #16a34a;
}`,
      expectedOutput: "Native checkbox renders green accent on Marathi page",
    },
    interviewQuestions: ["accent-color बद्दल?", "@supports का वापराल?"],
    related: ["css-scroll-snap", "css-color-mix", "css-focus-visible"],
    prev: "css-scroll-snap",
    next: "css-color-mix",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-color-mix-3",
    categoryId: "web",
    title: "Color Mix",
    marathiTitle: "color-mix — रंग संमिश्रण",
    level: "advanced",
    minutes: 38,
    summary: "दोन रंगांना मिसळून नवा रंग.",
    sections: [
      { title: "1. मिश्रण थर", content: "दोन रंग.\ncolor-mix.\nsrgb पद्धत.\nसमान प्रमाण.\nनवा रंग.", code: `.mix {
  background: color-mix(in srgb, #f97316 40%, #3b82f6);
}`, codeLanguage: "css" },
      { title: "2. प्रमाण नियम", content: "टक्केवारी.\n70 बाय 30.\nपहिला ठळक.\nसंतुलन जुळते.\nरचना शांत.", code: `.mix {
  border-color: color-mix(in srgb, red 70%, blue);
}`, codeLanguage: "css" },
      { title: "3. हलका थर", content: "white मिसळा.\nhsl जागा.\ntint साधा.\nरंग मऊ.\nपार्श्वभूमी नीट.", code: `.tint {
  background: color-mix(in hsl, white 80%, #dc2626);
}`, codeLanguage: "css" },
      { title: "4. गडद थर", content: "black मिसळा.\noklab उत्तम.\nshade गडद.\nआधार खोल.\nवाचनीय वाढ.", code: `.shade {
  background: color-mix(in oklab, black 25%, #2563eb);
}`, codeLanguage: "css" },
      { title: "5. hover गती", content: "hover नवा.\nरंग फिका.\nआकर्षण राहो.\nसंक्रमण स्थिर.\nनियम नेमका.\nकोड सुबक.", code: `.btn:hover {
  background: color-mix(in srgb, #4f46e5, white 15%);
}`, codeLanguage: "css" },
      { title: "6. मजकूर रंग", content: "tag हलका.\nविरोध कमी.\nवाचक आराम.\nरचना सजीव.\nसवय योग्य.", code: `.tag {
  color: color-mix(in srgb, #111827, white 10%);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "chip मिश्रण.\nएक रंग.", code: `.chip {
  background: color-mix(in srgb, #059669 70%, white);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["color-mix काय?", "टक्के कसे?", "tint कसा?", "hsl कधी?"],
    quiz: [
      { question: "color-mix काय?", options: ["रंग मिसळते", "रंग काढते", "नाव देते"], correct: 0 },
      { question: "in srgb?", options: ["मोजणी जागा", "रंग धागा", "ओळ क्रम"], correct: 0 },
      { question: "tint म्हणजे?", options: ["हलका रंग", "गडद रंग", "मोठा रंग"], correct: 0 },
      { question: "oklab काय?", options: ["नवी मोजणी", "जुनी धार", "साधा थर"], correct: 0 },
    ],
    challenge: {
      prompt: "chip टिंट करा.",
      starterCode: `.chip {
  background: color-mix(in srgb, #059669 70%, white);
}`,
      expectedOutput: "Renders a mint-tinted chip on Marathi page",
    },
    interviewQuestions: ["color-mix फायदे?", "टक्केवारी नियम?"],
    related: ["css-accent-color", "css-clamp-fluid", "css-dark-mode"],
    prev: "css-accent-color",
    next: "css-text-wrap",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-text-wrap-3",
    categoryId: "web",
    title: "Text Wrap",
    marathiTitle: "text-wrap — ओळ व्यवस्था",
    level: "advanced",
    minutes: 38,
    summary: "शीर्षक आणि परिच्छेद ओळ सुंदर करणे.",
    sections: [
      { title: "1. wrap कल्पना", content: "ओळ ठरते.\ntext-wrap नवे.\nbalance समान.\nदृश्य सुबक.\nवाचन आराम.", code: `h2 {
  text-wrap: balance;
}`, codeLanguage: "css" },
      { title: "2. शीर्षक थर", content: "h1 सुबक.\nरुंदी कमी.\nमथळा स्थिर.\nनियम नेमका.", code: `.title {
  text-wrap: balance;
  max-width: 40ch;
}`, codeLanguage: "css" },
      { title: "3. परिच्छेद नियम", content: "pretty खास.\nओळ तोल.\nअनाथ ओळ नको.\nवाचन नीट.\nलांब मजकूर.", code: `p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
      { title: "4. लांब ओळ", content: "nowrap बंद.\noverflow स्थिर.\ntext-overflow.\nधागा जपा.\nनियम कडक.", code: `.long {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, codeLanguage: "css" },
      { title: "5. मर्यादा", content: "ch एकक.\nरुंदी मिळे.\nओळ व्यवस्था.\nवाचक सुख.\nरचना स्पष्ट.", code: `p {
  text-wrap: pretty;
  max-width: 60ch;
}`, codeLanguage: "css" },
      { title: "6. एकत्र धागा", content: "महत्त्वाचा भाग.\nतुटू नको.\nएक ओळ.\nसांयोजन दिसे.\nनियम स्पष्ट.\nकोड सुबक.", code: `span {
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मुख्य मथळा.\nbalance द्या.", code: `h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["balance कुठे?", "pretty काय?", "nowrap कधी?", "ch एकक काय?"],
    quiz: [
      { question: "balance कशासाठी?", options: ["शीर्षक", "रंग", "image"], correct: 0 },
      { question: "pretty काय?", options: ["मजकूर तोल", "सीमा वाढ", "धार काळ"], correct: 0 },
      { question: "ellipsis?", options: ["थांबवणे", "फिरवणे", "रंगवणे"], correct: 0 },
      { question: "40ch म्हणजे?", options: ["रुंदी", "उंची", "धार"], correct: 0 },
    ],
    challenge: {
      prompt: "शीर्षक balance करा.",
      starterCode: `h1 {
  text-wrap: balance;
}`,
      expectedOutput: "Marathi heading lines balance evenly",
    },
    interviewQuestions: ["balance मर्यादा?", "pretty लाभ?"],
    related: ["css-color-mix", "css-writing-modes", "css-print-styles"],
    prev: "css-color-mix",
    next: "css-popover-tips",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-popover-tips",
    categoryId: "web",
    title: "Popover Tips",
    marathiTitle: "popover — तात्काळ टीप",
    level: "advanced",
    minutes: 38,
    summary: "मूळ popover आणि ::backdrop शैली.",
    sections: [
      { title: "1. popover कल्पना", content: "popover मूळ.\nटीप उघडे.\nथर हलका.\nशैली CSS.", code: `[popover] {
  inset: 50% auto auto 50%;
  translate: -50% -50%;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "::backdrop खास.\nमागे रंग.\nअर्धपारदर्शक.\nलक्ष टीप.\nनियम स्पष्ट.", code: `[popover]::backdrop {
  background: rgb(0 0 0 / 40%);
}`, codeLanguage: "css" },
      { title: "3. कार्ड रचना", content: "टीप card.\nरुंदी मर्यादा.\nकोपरे गोल.\npadding नीट.\nदृश्य सुबक.", code: `[popover] {
  width: 18rem;
  border-radius: 12px;
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "4. मऊ सावली", content: "box-shadow.\nखोली दाखवा.\nथर वेगळा.\nगती स्थिर.\nरचना शोधा.", code: `[popover] {
  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);
}`, codeLanguage: "css" },
      { title: "5. आगमन गती", content: "keyframes आत.\nopacity हळू.\nscale कमी.\nanimation मऊ.\nसजीव दृश्य.\nसवय योग्य.", code: `@keyframes pop {
  from {
    opacity: 0;
    scale: 0.95;
  }
}
[popover] {
  animation: pop 0.2s;
}`, codeLanguage: "css" },
      { title: "6. फोकस रिंग", content: "टीप उघडी.\nफोकस जुळे.\nहरवता नको.\nरिंग स्पष्ट.\nkeyboard सुरक्षा.\nकोड सुबक.", code: `[popover]:focus-visible {
  outline: 3px solid #6366f1;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "साधी टीप.\nएक धार.", code: `[popover] {
  margin: 0;
  border: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["popover काय?", "backdrop कुठे?", "keyframes कसे?", "एक थर काय?"],
    quiz: [
      { question: "popover काय?", options: ["तात्काळ थर", "मुद्रण थर", "रंग थर"], correct: 0 },
      { question: "::backdrop कुठे?", options: ["मागे", "समोर", "घर"], correct: 0 },
      { question: "animate कसे?", options: ["keyframes", "order", "width"], correct: 0 },
      { question: "inset खास?", options: ["केंद्र", "धार", "सूत"], correct: 0 },
    ],
    challenge: {
      prompt: "टीप कार्ड करा.",
      starterCode: `[popover] {
  width: 18rem;
  border-radius: 12px;
  padding: 1rem;
}`,
      expectedOutput: "Native popover styled as a rounded Marathi tip card",
    },
    interviewQuestions: ["popover लाभ?", "backdrop मर्यादा?"],
    related: ["css-text-wrap", "css-modal-backdrop", "css-anchor-position"],
    prev: "css-text-wrap",
    next: "css-anchor-position",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-anchor-position",
    categoryId: "web",
    title: "Anchor Position",
    marathiTitle: "anchor — नांगर रचना",
    level: "advanced",
    minutes: 38,
    summary: "घटकाशी जोडून भाग ठेवणे.",
    sections: [
      { title: "1. anchor कल्पना", content: "anchor नवीन.\nएक घटक.\nभाग जोडणी.\nस्थान घेते.\nकोड कमी.", code: `.tip {
  position: fixed;
  position-anchor: --btn;
}`, codeLanguage: "css" },
      { title: "2. नाव नियम", content: "anchor-name स्पष्ट.\nbutton ला नाव.\nमार्ग जुळतो.\nभाग ठिकठीक.", code: `.btn {
  anchor-name: --btn;
}`, codeLanguage: "css" },
      { title: "3. मोजणी थर", content: "anchor अंक.\ntop मागून.\nleft आधार.\nजागा नेमकी.\nदृश्य सुबक.", code: `.menu {
  top: anchor(--btn bottom);
  left: anchor(--btn left);
}`, codeLanguage: "css" },
      { title: "4. fallback नियम", content: "जागा नाही.\nflip-block.\nउलट स्थान.\nहा प्रयत्न.\nसुरक्षा जपा.", code: `.menu {
  position: absolute;
  position-try: flip-block;
}`, codeLanguage: "css" },
      { title: "5. सुसंगतता", content: "@supports तपास.\nanchor असेल.\nनवीन ब्राउझर.\nनसेल साधा.\nआधार दुहेरी.", code: `@supports (anchor-name: --btn) {
  .menu {
    position-anchor: --btn;
  }
}`, codeLanguage: "css" },
      { title: "6. सवय रचना", content: "inset-area नवा.\ntop मध्ये.\nनियम छोटा.\nजागा जुळते.\nवापर नीट.\nकोड सुबक.", code: `.tooltip {
  inset-area: top;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "नमुना खूण.\nanchor name.", code: `.fancy {
  anchor-name: --fancy;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor काय?", "name कुठे?", "flip-block कधी?", "@supports का?"],
    quiz: [
      { question: "anchor काय?", options: ["घटक जोडणी", "रंग बदल", "ध्वनी वाढ"], correct: 0 },
      { question: "anchor-name?", options: ["नाव द्या", "धार घ्या", "रंग द्या"], correct: 0 },
      { question: "fallback म्हणजे?", options: ["उलट प्रयत्न", "नवीन रंग", "जुनी ओळ"], correct: 0 },
      { question: "new CSS?", options: ["anchor", "rgb", "margin"], correct: 0 },
    ],
    challenge: {
      prompt: "menu anchor करा.",
      starterCode: `.menu {
  position-anchor: --btn;
  top: anchor(--btn bottom);
}`,
      expectedOutput: "Menu positioned relative to button on Marathi page",
    },
    interviewQuestions: ["anchor कधी वापराल?", "fallback नेम काय?"],
    related: ["css-popover-tips", "css-writing-modes", "css-modal-backdrop"],
    prev: "css-popover-tips",
    next: "css-writing-modes",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-writing-modes",
    categoryId: "web",
    title: "Writing Modes",
    marathiTitle: "writing-mode — लिखाण दिशा",
    level: "advanced",
    minutes: 38,
    summary: "उभे लिखाण आणि दिशा नियंत्रण.",
    sections: [
      { title: "1. दिशा कल्पना", content: "writing-mode हे.\nhorizontal साधा.\nvertical नवा.\nअक्षर फिरते.\nरचना बदल.", code: `.vertical {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
      { title: "2. अक्षर थर", content: "mixed अक्षरे.\nलॅटिन उभे.\nदेवनागरी सरळ.\nवाचन नीट.\nनियम नेमका.", code: `.vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}`, codeLanguage: "css" },
      { title: "3. rtl व्यवस्था", content: "उजवी दिशा.\nहिंदी मजकूर.\ndirection नियम.\nसभोवताल जुळे.", code: `[dir="rtl"] {
  direction: rtl;
}`, codeLanguage: "css" },
      { title: "4. उभी रचना", content: "vertical-lr खास.\nडावी वाढ.\nस्तंभ ठीक.\nदृश्य वेगळे.\nसंतुलन जपा.", code: `.vertical {
  writing-mode: vertical-lr;
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. आदर नियम", content: "logical props.\nmargin-inline-start.\nदिशा आदर.\nrtl मध्ये उलट.\nरचना नम्र.", code: `.box {
  margin-inline-start: 8px;
}`, codeLanguage: "css" },
      { title: "6. सील रचना", content: "upright अक्षरे.\nदेवनागरी शुद्ध.\nउभे पूर्ण.\nसील दिसे.\nनियम स्पष्ट.\nकोड सुबक.", code: `.seal {
  text-orientation: upright;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "ध्वज लिखाण.\nएक दिशा.", code: `.seal {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["vertical कधी?", "mixed काय?", "rtl कसे?", "upright कुठे?"],
    quiz: [
      { question: "writing-mode काय?", options: ["लिखाण दिशा", "रंग वाढ", "ध्वनी थर"], correct: 0 },
      { question: "vertical-rl?", options: ["उभे", "आडवे", "कर्ण"], correct: 0 },
      { question: "direction rtl?", options: ["उजवी सुरुवात", "डावी सुरुवात", "मध्य थांबा"], correct: 0 },
      { question: "logical prop?", options: ["आदर नियम", "रंग नियम", "धार नियम"], correct: 0 },
    ],
    challenge: {
      prompt: "सील उभा करा.",
      starterCode: `.seal {
  writing-mode: vertical-rl;
  text-orientation: upright;
}`,
      expectedOutput: "Marathi text upright on vertical seal",
    },
    interviewQuestions: ["writing-mode उद्देश?", "upright फरक?"],
    related: ["css-anchor-position", "css-text-wrap", "css-print-styles"],
    prev: "css-anchor-position",
    next: "css-modal-backdrop",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-modal-backdrop",
    categoryId: "web",
    title: "Modal Backdrop",
    marathiTitle: "modal — संवाद थर",
    level: "advanced",
    minutes: 38,
    summary: "dialog modal आणि ::backdrop नियंत्रण.",
    sections: [
      { title: "1. dialog कल्पना", content: "dialog मूळ.\nmodal खुला.\nfocus आत.\nखाली हटून.", code: `dialog[open] {
  margin: auto;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "मागे रंग.\nrgba नियंत्रण.\nलक्ष भाग.\nसंदर्भ खोल.\nदृश्य स्पष्ट.", code: `dialog::backdrop {
  background: rgba(15, 23, 42, 0.6);
}`, codeLanguage: "css" },
      { title: "3. आगमन थर", content: "keyframes fade.\nopacity हळू.\ntranslate वर.\nanimation मऊ.\nसजीव प्रवेश.", code: `@keyframes fade-in {
  from {
    opacity: 0;
  }
}
dialog[open] {
  animation: fade-in 0.25s;
}`, codeLanguage: "css" },
      { title: "4. स्क्रोल नियम", content: ":has नवा.\nमागे स्क्रोल.\noverflow hidden.\nbody स्थिर.\nइथे दृश्य.", code: `body:has(dialog[open]) {
  overflow: hidden;
}`, codeLanguage: "css" },
      { title: "5. रुंदी तोल", content: "min मर्यादा.\n90vw थर.\n480px खोल.\nरुंदी जुळते.\nरचना नीट.", code: `dialog {
  width: min(90vw, 480px);
}`, codeLanguage: "css" },
      { title: "6. मऊ थर", content: "backdrop-filter.\nblur हलका.\nसभोवताल मऊ.\nलक्ष भाग.\nनियम स्पष्ट.\nकोड सुबक.", code: `dialog::backdrop {
  backdrop-filter: blur(4px);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "पहिला modal.\nएकांत थर.", code: `dialog {
  border: 0;
  border-radius: 14px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["dialog काय?", "backdrop कुठे?", ":has कधी?", "blur का?"],
    quiz: [
      { question: "dialog काय?", options: ["संवाद थर", "मुद्रण थर", "रंग थर"], correct: 0 },
      { question: "::backdrop?", options: ["मागे रंग", "समोर ओळ", "घर दरवाजा"], correct: 0 },
      { question: ":has नियम?", options: ["स्क्रोल बंद", "ध्वनी वाढ", "धार काळ"], correct: 0 },
      { question: "min काय?", options: ["रुंदी मर्यादा", "उंची खोल", "नाव धार"], correct: 0 },
    ],
    challenge: {
      prompt: "modal कोपरे करा.",
      starterCode: `dialog {
  border: 0;
  border-radius: 14px;
}`,
      expectedOutput: "Rounded Marathi dialog with dimmed backdrop",
    },
    interviewQuestions: ["dialog vs popover?", ":has उपयोग?"],
    related: ["css-writing-modes", "css-popover-tips", "css-focus-visible"],
    prev: "css-writing-modes",
    next: "css-focus-visible",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-focus-visible-2",
    categoryId: "web",
    title: "Focus Visible",
    marathiTitle: "focus-visible — फोकस रिंग",
    level: "advanced",
    minutes: 38,
    summary: "कीबोर्ड फोकस स्पष्ट दाखवणे.",
    sections: [
      { title: "1. फोकस कल्पना", content: "फोकस खास.\nkeyboard मार्ग.\nनियम वेगळे.\nरिंग दिसे.\nप्रवेश्यता वाढ.", code: `:focus-visible {
  outline: 3px solid;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "2. दुवा थर", content: "दुवा फोकस.\nरिंग नीट.\nओळ स्पष्ट.\nवाचक शोध.\nनियम नेमका.", code: `a:focus-visible {
  outline: 2px solid #4f46e5;
}`, codeLanguage: "css" },
      { title: "3. बटण वलय", content: "button रिंग.\noffset बाहेर.\nसावली मऊ.\nदृश्य ठळक.\nप्रवेश सुख.", code: `.btn:focus-visible {
  outline: 3px solid #7c3aed;
  box-shadow: 0 0 0 4px #ede9fe;
}`, codeLanguage: "css" },
      { title: "4. दुहेरी नियम", content: "focus हा.\nfocus-visible उपयोग.\nmouse नको.\noutline none.\nगोंधळ टाळा.\nसवय योग्य.", code: `:focus:not(:focus-visible) {
  outline: none;
}`, codeLanguage: "css" },
      { title: "5. विरोध तोल", content: "रंग दिसे.\ncontrast जपा.\nहिरवा स्पष्ट.\nवाचक सुख.\nआधार मजबूत.", code: `:focus-visible {
  outline-color: #d97706;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "@supports selector.\nअसेल तर दे.\nनसेल जुना.\nसर्व ब्राउझर.\nनियम कडक.\nकोड सुबक.", code: `@supports selector(:focus-visible) {
  a:focus-visible {
    outline: 2px solid;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "रिंग वलय.\nएक नियम.", code: `.menu:focus-visible {
  outline: 3px solid #dc2626;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["focus-visible कधी?", "mouse वर?", "@supports का?", "contrast कशी?"],
    quiz: [
      { question: "focus-visible काय?", options: ["कीबोर्ड रिंग", "माऊस रिंग", "रंग वाढ"], correct: 0 },
      { question: "outline कुठे?", options: ["सीमेत बाहेर", "मध्ये", "आत"], correct: 0 },
      { question: "selector support?", options: ["@supports", "@media", "@import"], correct: 0 },
      { question: "not rule काय?", options: ["माऊस ठिकठीक", "सगळे अंधार", "नवीन रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "दुवा रिंग करा.",
      starterCode: `a:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}`,
      expectedOutput: "Keyboard focus clearly ringed on Marathi page",
    },
    interviewQuestions: ["focus-visible महत्त्व?", "outline-offset का?"],
    related: ["css-modal-backdrop", "css-accent-color", "css-dark-mode"],
    prev: "css-modal-backdrop",
    next: "css-marathi-capstone9",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-marathi-capstone9",
    categoryId: "web",
    title: "Modern Patterns Capstone",
    marathiTitle: "Pattern Bag — भाग संग्रह",
    level: "advanced",
    minutes: 38,
    summary: "Level 9 नवीन पॅटर्न एकत्र आणणे.",
    sections: [
      { title: "1. संग्रह थर", content: ":root मध्ये brand.\naccent-color जोडा.\nटोकन एक.\nसर्वत्र रंग.", code: `:root {
  --brand: #4f46e5;
  accent-color: var(--brand);
}`, codeLanguage: "css" },
      { title: "2. मथळा थर", content: "h1 fluid.\nclamp नियम.\ncop joint.\nवाचन स्थिर.\nस्क्रीन सगळी.\nनियम स्पष्ट.", code: `h1 {
  font-size: clamp(1.8rem, 4vw, 3.2rem);
}`, codeLanguage: "css" },
      { title: "3. gallery थर", content: "snap gallery.\nflex सरळ.\noverflow auto.\nथांबणे नीट.\nदृश्य सजीव.", code: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "4. chip थर", content: "tint chip.\ncolor-mix मऊ.\nbrand हलका.\nआधार नेमका.\nसंतुलन छान.", code: `.chip {
  background: color-mix(in srgb, var(--brand) 15%, white);
}`, codeLanguage: "css" },
      { title: "5. शीर्षक तोल", content: "h2 balance.\nओळ समान.\nरुंदी मर्यादा.\nमथळा सुबक.\nवाचन आराम.", code: `h2,
h3 {
  text-wrap: balance;
  max-width: 45ch;
}`, codeLanguage: "css" },
      { title: "6. टीप थर", content: "popover टीप.\nरुंदी 18rem.\nbackdrop मऊ.\nरंग शांत.", code: `[popover] {
  width: 18rem;
}
[popover]::backdrop {
  background: rgba(0, 0, 0, 0.35);
}`, codeLanguage: "css" },
      { title: "Final Project", content: "सर्व अंतिम.\nरिंग जोडा.", code: `a:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 9 काय शिकलं?", "accent कुठे?", "balance कुठे?", "final रिंग?"],
    quiz: [
      { question: "Level 9 सारांश?", options: ["पॅटर्न संग्रह", "एकट कोड", "फक्त रंग"], correct: 0 },
      { question: "fluid कुठे?", options: ["clamp", "snap", "mix"], correct: 0 },
      { question: "टीप कुठे?", options: ["popover", "print", "link"], correct: 0 },
      { question: "keyboard फोकस?", options: ["focus-visible", "hover only", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "पॅटर्न एकत्र करा.",
      starterCode: `:root {
  --brand: #4f46e5;
  accent-color: var(--brand);
}`,
      expectedOutput: "Modern patterns combined through Marathi component page",
    },
    interviewQuestions: ["तीन आवडते पॅटर्न?", "एकत्र वापर नियम?"],
    related: ["css-focus-visible", "css-popover-tips", "css-clamp-fluid"],
    prev: "css-focus-visible",
    next: "css-aspect-ratio",
    levelLabel: CSS9_LABEL,
  },];
