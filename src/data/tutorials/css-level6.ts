import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 6 — Modern Control ===
export const CSS6_LABEL = "CSS · Level 6 — Modern Control";

export const cssLevel6: Tutorial[] = [
  {
    slug: "css-contain-property",
    categoryId: "web",
    title: "Contain Property",
    marathiTitle: "contain — खोली नियंत्रण",
    level: "advanced",
    minutes: 32,
    summary: "containment आणि content-visibility गती.",
    sections: [
      { title: "1. containment कल्पना", content: "contain घटक खोल व्यवस्था.\n\nब्राउझरला आराम मिळतो.\n\nlayout पृथक.\n\nstyle स्वतंत्र.\n\nपेंट भाग मर्यादित.", code: `.embed {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "2. size नियम", content: "रुंदी आणि उंची.\n\nauto पासून तोल.\n\nप्रत्येक घटक खोल.\n\nलहान भाग जलद.\n\nमर्यादा ठरवा.", code: `.fixed-box {
  contain: size;
  width: 300px;
  height: 180px;
}`, codeLanguage: "css" },
      { title: "3. content-visibility", content: "content-visibility जवळ चालवते.\n\nदूरचा भाग लपतो.\n\nजागा ठेवली.\n\nपुन्हा प्रत्यक्ष.\n\nप्रत्येक बदल स्पष्ट.", code: `.section {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "4. intrinsic आकार", content: "contain-intrinsic-size राखतो.\nआधीचा अंदाज असतो.\nलोड वेळ सुरळीत.\nअंदाज नेमका.", code: `.card-long {
  content-visibility: auto;
  contain-intrinsic-size: 0 320px;
}`, codeLanguage: "css" },
      { title: "5. उपयोग सवय", content: "टॅब तपासणी.\ncode layers बचत.\nमोजमाप पुन्हा.\nसराव सातत्य.", code: `.tabs .panel {
  content-visibility: auto;
  contain: layout;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "contain आधार मजबूत.\ncontent-visibility आधी नवीन.\nजुने नियम समान.\nसाधेपणा राखा.\nप्रत्येक browser पहा.", code: `@supports (contain-intrinsic-size: auto) {
  .list {
    content-visibility: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मोठी यादी जलद करा.\nतीन नियम.", code: `.feed-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 140px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["contain काय?", "content-visibility कुठे?", "intrinsic कसे?"],
    quiz: [
      { question: "contain layout?", options: ["पृथक", "रंग", "फॉन्ट"], correct: 0 },
      { question: "paint थर?", options: ["मर्यादित", "उघडा", "जड"], correct: 0 },
      { question: "content-visibility?", options: ["जलद", "मंद", "रंग"], correct: 0 },
      { question: "intrinsic-size?", options: ["अंदाज", "नाव", "एकक"], correct: 0 },
    ],
    challenge: {
      prompt: "मोठा feed जलद करा.",
      starterCode: `.feed-item { content-visibility: auto; contain: layout paint; }`,
      expectedOutput: "Renders a fast virtualized-style feed",
    },
    interviewQuestions: ["c", "o", "n", "t", "a", "i", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-will-change", "css-gap-mastery", "css-view-transition"],
    prev: "css-marathi-capstone5",
    next: "css-view-transition",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-view-transition",
    categoryId: "web",
    title: "View Transition",
    marathiTitle: "view transition — दृश्य बदल",
    level: "advanced",
    minutes: 32,
    summary: "page बदल हार्मोनी गुळगुळीत.",
    sections: [
      { title: "1. संक्रमण कल्पना", content: "view transition पृष्ठ बदलते.\nएकच call संपूर्ण.\nब्राउझर स्वतः बनवतो.\nगुळगुळीत गती.\nउपयोग अचूक.", code: `document.startViewTransition(cb);`, codeLanguage: "css" },
      { title: "2. पूर्वेकडील state", content: "नव्या लेआउटने.\nपाठवणे स्पष्ट.\nस्वाभाविक वाटते.", code: `::view-transition-old(root) {
  animation: fade-out 0.3s;
}`, codeLanguage: "css" },
      { title: "3. नवा थर", content: "नवीन थर वर येतो.\nक्रम स्थिर.\nname ने नियंत्रण.\nप्रत्येक भाग अलग.\nसुंदर थर.\nनियम नेमका.", code: `::view-transition-new(root) {
  animation: fade-in 0.5s;
}`, codeLanguage: "css" },
      { title: "4. element नियुक्ती", content: "view-transition-name खास.\nघटकाला नाव मिळते.\nस्वतः चलते.\nहेडर स्माईल.\nसुंदर परिणाम.", code: `.logo {
  view-transition-name: logo;
}`, codeLanguage: "css" },
      { title: "5. animation बदल", content: "पूर्ण animation नवी.\nreduced गोष्टी.\nप्रवेश्यता जपा.\nसवय योग्य.", code: `@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*) {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार आणि use", content: "गरज टाकणे.\nसाधा बदल सुंदर.\nआधुनिक ब्राउझर पाहा.", code: `::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 0.4s;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "दोन फ्रेम.", code: `html {
  view-transition-name: page;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["transition काय?", "old कुठे?", "name कसे?"],
    quiz: [
      { question: "startViewTransition?", options: ["एक call", "दोन", "तीन"], correct: 0 },
      { question: "old(root)?", options: ["आधी", "नंतर", "रंग"], correct: 0 },
      { question: "new(root)?", options: ["नवा", "जुना", "मोठा"], correct: 0 },
      { question: "name?", options: ["घटक", "रंग", "फॉन्ट"], correct: 0 },
    ],
    challenge: {
      prompt: "page swap transition साधा.",
      starterCode: `html { view-transition-name: page; }`,
      expectedOutput: "Renders a smooth cross-page view transition",
    },
    interviewQuestions: ["v", "i", "e", "w", " ", "t", "r", "a", "n", "s", "i", "t", "i", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-contain-property", "css-cascade-layers", "css-masking-clip"],
    prev: "css-contain-property",
    next: "css-cascade-layers",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-cascade-layers-2",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "@layer — क्रम आणि जोडणी",
    level: "advanced",
    minutes: 32,
    summary: "layer क्रम निवड अधिकार jपते.",
    sections: [
      { title: "1. layer कल्पना", content: "@layer गट व्यवस्थित.\nनंतरचा जिंकतो.\nक्रम स्पष्ट.\nकोड सुबक.\nनियोजन सोपे.", code: `@layer base, components, utilities;`, codeLanguage: "css" },
      { title: "2. वारसा क्रम", content: "layer नंतरचा विजय.\nbase प्रथम.\nutilities शेवटी.\nहातचा विरोध.\nनवीन नियम वर.\nप्रत्येक सुटे.", code: `@layer base {
  button {
    padding: 6px 10px;
  }
}
@layer utilities {
  .p-2 {
    padding: 8px;
  }
}`, codeLanguage: "css" },
      { title: "3. हा !important", content: "important क्रम उलटा.\nपहिल्यांदा जिंकतो.\nकाळजी नको फार.\nविरुद्ध गिळणे.\nआधार समज.", code: `@layer base {
  .btn {
    color: #0f172a !important;
  }
}`, codeLanguage: "css" },
      { title: "4. नामनिर्देशन", content: "एकत्र जोडणी.\nपुनरावृत्ती नको.\nस्थान नेमके.\nस्वतःचा क्रम.", code: `@layer theme {}
@layer components;
@layer utilities {}`, codeLanguage: "css" },
      { title: "5. unlayered नियम", content: "बाहेरचे नियम वरचे.\nसर्वात उंच अधिकार.\nपहिले हळूच.\nमिश्रण टाळा.\nक्रम समजा.\nआधार घट्ट.", code: `body {
  margin: 0;
}
@layer base {
  body {
    margin: 8px;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@layer आधार नवीन.\nजुने ब्राउझर शैली.\nfallback साधा.\n@supports काही.\nक्रम रुजवा.\nकोड वाचता.", code: `@supports (layer: base) {
  @layer components {}
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "रंग स्थिर.", code: `@layer base, utilities;`, codeLanguage: "css" },
    ],
    practiceQuestions: ["layer काय?", "क्रम कसे?", "important कुठे?"],
    quiz: [
      { question: "@layer?", options: ["गट", "रंग", "फॉन्ट"], correct: 0 },
      { question: "नंतरचा जिंकतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "important?", options: ["उलट", "सरळ", "रंग"], correct: 0 },
      { question: "unlayered?", options: ["वरचे", "खाली", "मागे"], correct: 0 },
    ],
    challenge: {
      prompt: "तीन layer ordered तयार.",
      starterCode: `@layer base, components, utilities;`,
      expectedOutput: "Renders cascaded layered styles",
    },
    interviewQuestions: ["l", "a", "y", "e", "r", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-view-transition", "css-scope-rule", "css-cascade", "css-masking-clip"],
    prev: "css-view-transition",
    next: "css-masking-clip",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-masking-clip",
    categoryId: "web",
    title: "Masking Clip",
    marathiTitle: "mask — दृश्य कव्हर",
    level: "advanced",
    minutes: 32,
    summary: "mask-image आणि clip संयोग.",
    sections: [
      { title: "1. mask कल्पना", content: "mask-image भाग लपवतो.\nकाळा दृश्य.\nपांढरा मिटून.\nग्रेडियंट सॉफ्ट.\nआकार स्वतंत्र.\nनियम सोपा.", code: `.fade-bottom {
  mask-image: linear-gradient(black, transparent);
}`, codeLanguage: "css" },
      { title: "2. mask-size", content: "mask-size repeat नियम.\nआकार मोजा.\nप्रत्येक उदाहरण.\nपोत सुंदर.\nसाखळी एकत्र.\nव्यवस्था स्पष्ट.", code: `.pattern {
  mask-image: url(spark.svg);
  mask-size: 40px 40px;
  mask-repeat: repeat;
}`, codeLanguage: "css" },
      { title: "3. mask-position", content: "position केंद्र बदल.\nशीर्ष तळ.\nटक्के मूल्ये.\nरचना अचूक.\nहेडर झुकाव.\nनियम नेमका.", code: `.highlight {
  mask-image: radial-gradient(circle, black 30%, transparent 70%);
  mask-position: center;
}`, codeLanguage: "css" },
      { title: "4. clip संयोग", content: "clip-path आकार काट.\nmask रंग गुळगुळीत.\nदोन्ही एकत्र.\nthumb बनते.\nप्रत्येक थर वेगळा.\nफलित सुंदर.", code: `.thumb {
  clip-path: circle(60%);
  mask-image: radial-gradient(black 60%, transparent);
}`, codeLanguage: "css" },
      { title: "5. mask-composite", content: "composite दोन mask.\nadd union.\nsubtract अंतर.\nनवीन आधार.\nसखोल प्रभाव.\nवापर कमी.", code: `.logo-mask {
  mask-image: url(a.svg), url(b.svg);
  mask-composite: intersect;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "mask आधार मध्यम.\n@supports तपास.\nclip सरळ.\nकोड साधा.\nप्रत्येक मोड.", code: `@supports (mask-image: linear-gradient(black, transparent)) {
  .deco {
    mask-image: linear-gradient(white, transparent);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "soft कडा.", code: `.thumb { mask-image: radial-gradient(black 60%, transparent); }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["mask काय?", "composite कसे?", "position कुठे?"],
    quiz: [
      { question: "mask-image?", options: ["लपवतो", "रंगतो", "फिरतो"], correct: 0 },
      { question: "black भाग?", options: ["दृश्य", "लपलेले", "अर्धे"], correct: 0 },
      { question: "white भाग?", options: ["मिटून", "उघडा", "जड"], correct: 0 },
      { question: "composite?", options: ["अंतर", "आवाज", "गती"], correct: 0 },
    ],
    challenge: {
      prompt: "soft circle avatar mask.",
      starterCode: `.avatar { mask-image: radial-gradient(black 60%, transparent); }`,
      expectedOutput: "Renders a soft-edged masked circle avatar",
    },
    interviewQuestions: ["m", "a", "s", "k", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-view-transition", "css-box-decoration", "css-font-fallback"],
    prev: "css-cascade-layers",
    next: "css-font-fallback",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-font-fallback",
    categoryId: "web",
    title: "Font Fallback",
    marathiTitle: "font — परतप्रमाण नियम",
    level: "advanced",
    minutes: 32,
    summary: "font-face, stacks आणि features उपाय.",
    sections: [
      { title: "1. font-face नियम", content: "@font-face खास प्रकार.\nwoff2 सर्वोत्तम.\nनाव नेमके.\nआधार घट्ट.", code: `@font-face {
  font-family: "Mukta";
  src: url(mukta.woff2) format("woff2");
}`, codeLanguage: "css" },
      { title: "2. stack रचना", content: "font-family stack मालिका.\nनाही तर पुढे.\nsystem शेवटी.\nमराठी आधार.\nअचूक उतरते.", code: `body {
  font-family: "Mukta", "Noto Sans Devanagari", system-ui, sans-serif;
}`, codeLanguage: "css" },
      { title: "3. font-size-adjust", content: "x-height adjust समान होते.\nआकार एक सारखा.\nswap दर्शवते.\nआधार नवीन.\nस्पष्ट reading.", code: `.heading {
  font-size-adjust: 0.5;
}`, codeLanguage: "css" },
      { title: "4. variable font", content: "variable जाडी अक्षर.\nfont-variation नियम.\nwidth रुंदी.\nछान सूक्ष्म.\nआधार चांगला.", code: `.semibold {
  font-variation-settings: "wght" 600;
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "पडणारा font वाचनीय.\ncontrast जपा.\nमराठी देवनागरी.\nप्रत्येक वाचक.\nसवय योग्य.", code: `html {
  font-size: 18px;
  line-height: 1.6;
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "woff2 सर्व ठिकाणी.\nerror स्थिर.\nकोड सुबक.\nप्रत्येक browser आदर.", code: `h1 {
  font-family: "Mukta", ui-rounded, serif;
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "दोन पर्याय.", code: `h1 { font-family: "Mukta", "Noto Sans Devanagari", serif; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["font-face काय?", "stack कसे?", "adjust कुठे?"],
    quiz: [
      { question: "woff2?", options: ["आधुनिक", "जुने", "फॉन्ट"], correct: 0 },
      { question: "stack?", options: ["मालिका", "रंग", "नाव"], correct: 0 },
      { question: "variation?", options: ["axis", "कडा", "आकार"], correct: 0 },
      { question: "system-ui?", options: ["शेवट", "सुरुवात", "मध्य"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी font stack लावा.",
      starterCode: `body { font-family: "Mukta", "Noto Sans Devanagari", sans-serif; }`,
      expectedOutput: "Renders Marathi text with a robust font stack",
    },
    interviewQuestions: ["f", "o", "n", "t", " ", "उ", "प", "ा", "य", "?"],
    related: ["css-masking-clip", "css-gap-mastery", "css-logical-props"],
    prev: "css-masking-clip",
    next: "css-sticky-nav",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-sticky-nav",
    categoryId: "web",
    title: "Sticky Nav",
    marathiTitle: "sticky — चिकट नेव्हिगेशन",
    level: "advanced",
    minutes: 32,
    summary: "position sticky खोल नियम.",
    sections: [
      { title: "1. sticky कल्पना", content: "position sticky चिकटवते.\nscroll सोबत थांबते.\nजागा राहते.\nparent मध्ये फिरते.\nशीर्षावर अडके.\nसहज नियम.", code: `.nav {
  position: sticky;
  top: 0;
}`, codeLanguage: "css" },
      { title: "2. container मर्यादा", content: "sticky फक्त parent आत.\nपण तेवढ्यात थांबते.\nशेवटी जागा सुटते.\nheight व्यवस्थित.\nआधार स्पष्ट.\nनियम मानवी.", code: `.page {
  min-height: 100vh;
}
.side {
  position: sticky;
  top: 16px;
}`, codeLanguage: "css" },
      { title: "3. थर स्टॅक", content: "sticky z-index सह.\nपुढे दिसावा.\noverlay नको.\nक्रम नेमका.\nप्रत्येक nav.\nदृश्य व्यवस्थित.", code: `.nav {
  position: sticky;
  top: 0;
  z-index: 40;
}`, codeLanguage: "css" },
      { title: "4. subnav नियम", content: "two-level सुंदर.\nआधार समान.\nscroll तोल.\nगरज असल्यास.\nडिझाइन स्वच्छ.", code: `.subnav {
  position: sticky;
  top: 56px;
  z-index: 30;
}`, codeLanguage: "css" },
      { title: "5. भाग वर्ग", content: "back-to-top उपयोग.\nscroll नंतर दिसे.\ninteraction सोपे.\nkeyboard मार्ग.\nप्रवेश्यता जपा.", code: `.back-top {
  position: sticky;
  bottom: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "sticky आधार मजबूत.\noverflow मर्यादा.\nइच्छा असल्यास.\nकोड सोपा.\nप्रत्येक device.", code: `.table-wrap {
  overflow: auto;
}
th {
  position: sticky;
  top: 0;
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "हेडर स्थिर.", code: `.header { position: sticky; top: 0; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["sticky काय?", "top कसे?", "z-index कुठे?"],
    quiz: [
      { question: "sticky?", options: ["चिकट", "रंग", "फॉन्ट"], correct: 0 },
      { question: "parent मर्यादा?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "z-index?", options: ["थर", "रंग", "ताप"], correct: 0 },
      { question: "back-to-top?", options: ["bottom", "top", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "चिकट nav तयार.",
      starterCode: `.nav { position: sticky; top: 0; z-index: 40; }`,
      expectedOutput: "Renders a sticky header nav",
    },
    interviewQuestions: ["s", "t", "i", "c", "k", "y", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-font-fallback", "css-gap-mastery", "css-masking-clip"],
    prev: "css-font-fallback",
    next: "css-gap-mastery",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-gap-mastery",
    categoryId: "web",
    title: "Gap Mastery",
    marathiTitle: "gap — अंतर विजय",
    level: "advanced",
    minutes: 32,
    summary: "gap सर्वत्र flex grid आणि column.",
    sections: [
      { title: "1. flex gap", content: "flex दिशा अंतर.\nसामुहिक नियम.\nदोन्ही अनुलंब.\nघटक स्वतंत्र.\nस्पष्ट आराम.", code: `.row {
  display: flex;
  gap: 12px;
}`, codeLanguage: "css" },
      { title: "2. grid gap", content: "grid रिक्त अंतर.\nrow-gap आणि column.\nदोन मूल्ये.\nसुंदर नेटवर्क.\nकार्ड सरळ.\nविशाल नियम.", code: `.grid {
  display: grid;
  gap: 24px 12px;
}`, codeLanguage: "css" },
      { title: "3. column gap", content: "column रचना अंतर.\ncolumn-gap प्रमाण.\none दोन काळ.\nवाचन गुळगुळीत.\nविभाग स्पष्ट.\nआधार घट्ट.", code: `.story {
  columns: 2;
  column-gap: 2em;
}`, codeLanguage: "css" },
      { title: "4. row अंतर", content: "row-gap अनुलंब.\ncompact यादी.\nगरज नेमकी.\nकोड छोटा.\nव्यवस्था स्पष्ट.", code: `.list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
}`, codeLanguage: "css" },
      { title: "5. नियम संयोजन", content: "margin सोबत gap मिश्रण.\nसोबत मिश्रण वाढे.\nसंतुलन जपा.\nअंतर मोजा.\nप्रत्येक रचना.\nसवय चांगली.", code: `.card {
  display: grid;
  gap: 10px;
  padding: 16px 0;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "gap उपक्रमांत व्यापक.\nदोन्ही लिहा.\nसुरक्षित पर्याय.\nसध्याचे सर्व चांगले.", code: `.row > * + * {
  margin-left: 12px;
}
.row {
  gap: 12px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "दोन्ही दिशा.", code: `.chips { display: flex; gap: 8px; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["gap काय?", "grid कसे?", "column कुठे?"],
    quiz: [
      { question: "gap flex?", options: ["अंतर", "रंग", "फॉन्ट"], correct: 0 },
      { question: "row-gap?", options: ["उभी", "सपाट", "जड"], correct: 0 },
      { question: "column-gap?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "fallback?", options: ["margin", "padding", "border"], correct: 0 },
    ],
    challenge: {
      prompt: "chip row gap साधा.",
      starterCode: `.chips { display: flex; gap: 8px; }`,
      expectedOutput: "Renders a chip row with even gaps",
    },
    interviewQuestions: ["g", "a", "p", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-sticky-nav", "css-box-decoration", "css-contain-property"],
    prev: "css-sticky-nav",
    next: "css-box-decoration",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-box-decoration",
    categoryId: "web",
    title: "Box Decoration",
    marathiTitle: "box decoration — विभाग सजावट",
    level: "advanced",
    minutes: 32,
    summary: "decoration-break आणि सावली नियम.",
    sections: [
      { title: "1. decoration नियम", content: "box-decoration-break भाग सजवतो.\nओळींनी शैली.\nslice पहिला.\nclone नवा.\nखंड स्पष्ट.\nनियम नेमका.", code: `span {
  box-decoration-break: clone;
}`, codeLanguage: "css" },
      { title: "2. सावली थर", content: "त्रि आकारमान.\nगहन प्रकाश.\nबटण उठते.\nextra अंधार.\nव्यवस्था तोल.", code: `.btn {
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%), 0 4px 12px rgb(0 0 0 / 15%);
}`, codeLanguage: "css" },
      { title: "3. inset सावली", content: "inset आतमध्ये.\nखोल दाबले.\npressed बटण.\nएकटा नियम.\nhappy टोक.\nउदाहरण स्पष्ट.", code: `.pressed {
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 10%);
}`, codeLanguage: "css" },
      { title: "4. text-shadow", content: "text-shadow अक्षर उजळ.\nneon प्रभाव.\nवाचनीय ठेवा.\nरंग जपा.\nकोड सुबक.", code: `.neon {
  text-shadow: 0 0 8px #22d3ee, 0 0 24px #06b6d4;
}`, codeLanguage: "css" },
      { title: "5. outline अंतर", content: "outline-offset जागा.\nborder पेक्षा अलग.\nप्रवेश्यता नेमकी.\nदृश्य स्पष्ट.\nनियम सोपा.", code: `.focus-ring:focus {
  outline: 2px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "slice जुने.\nसर्वभाग नियम.\nmask न वापरा.\nप्रत्येक ब्राउझर.\nस्वच्छ कोड.", code: `.quote {
  box-decoration-break: clone;
  border-inline-start: 4px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "quote clone सजवा.\nबॉर्डर खोली.", code: `.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["clone काय?", "shadow कसे?", "inset कुठे?"],
    quiz: [
      { question: "slice?", options: ["पहिला", "नवा", "रंग"], correct: 0 },
      { question: "clone?", options: ["नवा", "जुना", "मोठा"], correct: 0 },
      { question: "inset?", options: ["आत", "बाहेर", "वर"], correct: 0 },
      { question: "offset?", options: ["अंतर", "रंग", "जाड"], correct: 0 },
    ],
    challenge: {
      prompt: "quote आधिकार clone द्या.",
      starterCode: `.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }`,
      expectedOutput: "Renders a decorated quote with cloned borders",
    },
    interviewQuestions: ["b", "o", "x", " ", "d", "e", "c", "o", "r", "a", "t", "i", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-gap-mastery", "css-logical-props", "css-masking-clip"],
    prev: "css-gap-mastery",
    next: "css-logical-props",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-logical-props",
    categoryId: "web",
    title: "Logical Props",
    marathiTitle: "logical — दिशा साधन",
    level: "advanced",
    minutes: 32,
    summary: "block inline आणि logical इनसेट.",
    sections: [
      { title: "1. logical कल्पना", content: "logical props दिशा स्वतः.\nblock उभी.\ninline सपाट.\nRTL लवचिक.\ntext-सोबत चालते.\nनियम आधुनिक.", code: `.box {
  margin-block: 16px;
  padding-inline: 12px;
}`, codeLanguage: "css" },
      { title: "2. block inline", content: "inline-start डावी.\nblock-start वर.\nmismatch उलट.\nप्रत्येक बाजू.\nसामंजस्य रोख.\nव्यवस्था साधी.", code: `.note {
  border-inline-start: 3px solid #0ea5e9;
  padding-block: 8px;
}`, codeLanguage: "css" },
      { title: "3. logical inset", content: "inset-block उभी.\ninset-inline क्षैतिज.\nशॉर्टकट सोय.\nposition अचूक.\nस्क्रीन स्वतः.\nकोड लहान.", code: `.overlay {
  position: fixed;
  inset: 0;
}`, codeLanguage: "css" },
      { title: "4. text-align logical", content: "text-align start नियम.\nend शेवट.\nदिशा नशिब.\nप्रत्येक भाषा.\nआधार घट्ट.", code: `.article {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. grid logical", content: "रचना स्वतः.\nflex सोबत समान.\nआधार नवीन.\nभाग स्पष्ट.", code: `.layout {
  display: grid;
  place-items: start center;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "logical आधार मजबूत.\nदोन्ही लिहा.\nसुरक्षा वाढ.\nसध्याचे चांगले.\nकोड वाचता.", code: `.meta {
  padding-inline: var(--sp, 8px);
  padding-left: 8px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "note logical border.\nदिशा स्वतः.", code: `.note { border-block-start: 3px solid #0ea5e9; padding-inline: 12px; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["block काय?", "inline कसे?", "inset कुठे?"],
    quiz: [
      { question: "block?", options: ["उभी", "सपाट", "रंग"], correct: 0 },
      { question: "inline-start?", options: ["डावी", "वर", "खाली"], correct: 0 },
      { question: "inset?", options: ["सर्व", "एक", "दोन"], correct: 0 },
      { question: "RTL?", options: ["उलट", "सरळ", "जड"], correct: 0 },
    ],
    challenge: {
      prompt: "logical border note साधा.",
      starterCode: `.note { border-inline-start: 3px solid #0ea5e9; }`,
      expectedOutput: "Renders a note with logical start border",
    },
    interviewQuestions: ["l", "o", "g", "i", "c", "a", "l", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-box-decoration", "css-font-fallback", "css-scope-rule"],
    prev: "css-box-decoration",
    next: "css-scope-rule",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-scope-rule-2",
    categoryId: "web",
    title: "Scope Rule",
    marathiTitle: "@scope — मर्यादा नियम",
    level: "advanced",
    minutes: 32,
    summary: "scope proximity आणि स्थान नियंत्रण.",
    sections: [
      { title: "1. scope कल्पना", content: "@scope विभाग मर्यादित.\nघटक आतला.\nसीमा नियम.\nएकटा रंग.\nस्थान स्पष्ट.\nनियम नेमका.", code: `@scope (.card) {
  h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. सीमा (to)", content: "to सीमा थांबते.\nआतील निवडणे.\nबाहेरचे रक्षण.\nप्रत्येक विभाग.\nसखोल संग्रह.\nआधार नवीन.", code: `@scope (.article) to (.footnote) {
  p {
    line-height: 1.7;
  }
}`, codeLanguage: "css" },
      { title: "3. proximity नियम", content: "जवळचा विजय.\nspecificity समान.\nजवळ कोण.\nहलके नियम.\nनिर्णय सोपा.\nक्रम दुय्यम.", code: `@scope (.a) { p { color: red; } }
@scope (.b) { p { color: blue; } }`, codeLanguage: "css" },
      { title: "4. nesting", content: "ते स्वतः.\n@scope शक्यतो.\nघट्ट रचना.\nउपयोग साधा.\nनियम संयोजन.\nभाग स्पष्ट.", code: `.article {
  @scope {
    h2 + p {
      margin-top: 0.6em;
    }
  }
}`, codeLanguage: "css" },
      { title: "5. मर्यादा", content: "scope आधार नवीन.\nजुने नियम चालू.\nमिश्रण टाळा.\nगरज न्याय्य.", code: `@scope (.section) {
  .card {
    border-radius: 12px;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@scope आधार नवीन.\nfallback साधा.\nsame विचार.\ntest सर्वत्र.\nनवीन kronolog.", code: `.card h3 {
  color: #0f172a;
}
@scope (.card) {
  h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "color स्थिर.", code: `@scope (.card) { h3 { color: #0f172a; } }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scope काय?", "to सीमा?", "proximity कुठे?"],
    quiz: [
      { question: "@scope?", options: ["मर्यादा", "रंग", "फॉन्ट"], correct: 0 },
      { question: "to?", options: ["सीमा", "केंद्र", "शेवट"], correct: 0 },
      { question: "proximity?", options: ["जवळचा", "दुरचा", "मोठा"], correct: 0 },
      { question: "nesting?", options: ["शक्य", "नको", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "card scope color द्या.",
      starterCode: `@scope (.card) { h3 { color: #0f172a; } }`,
      expectedOutput: "Renders scoped card heading color",
    },
    interviewQuestions: ["s", "c", "o", "p", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-logical-props", "css-cascade-layers", "css-will-change"],
    prev: "css-logical-props",
    next: "css-will-change",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-will-change",
    categoryId: "web",
    title: "Will Change",
    marathiTitle: "will-change — गती इशारा",
    level: "advanced",
    minutes: 32,
    summary: "performance, layers आणि बचत नियम.",
    sections: [
      { title: "1. will-change कल्पना", content: "ब्राउझर तयार होते.\nanimation सुरळीत.\nजास्त नको.\nकाळजी घ्या.\nप्रत्येक घटक नियम.", code: `.hoverable {
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "2. layer बचत", content: "composite layer दूर.\ngpu सोय.\nscroll स्थिर.\nanimate सोपे.\nपेन थर मर्यादित.\nतेज वाढ.", code: `.stick {
  position: fixed;
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "3. कमी वापर", content: "अनावश्यक नको.\nकोड नियम कमी.\nhover आधी.\nस्मृती वाचा.\nचांगला equilibria.", code: `.card:hover {
  will-change: transform;
}
.card {
  transition: transform 0.3s;
}`, codeLanguage: "css" },
      { title: "4. contain सह", content: "contain-intrinsic सह.\nदोन्ही सराईत.\nभाग मर्यादित.\nमोठी यादी.\nगती फायदा.\nनियम एकत्र.", code: `.virtual {
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}`, codeLanguage: "css" },
      { title: "5. animation विना will", content: "काही गुणधर्म नियम.\ntransform opacity.\nपेंट नवीन.\nगुळगुळीत वाटे.\nपरफॉर्मेंस जपा.", code: `.move {
  animation: slide 0.4s ease;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "will-change आधार घट्ट.\nजुने नियम समान.\nकडक मोजमाप.\nतपासणी नेमकी.\nसर्वोत्तम सवय.\nशेवटचा नियम.", code: `@media (prefers-reduced-motion: reduce) {
  .move {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "transform layer.", code: `.card { will-change: transform; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["will-change काय?", "layer कुठे?", "रंग कमी?"],
    quiz: [
      { question: "will-change?", options: ["इशारा", "रंग", "नाव"], correct: 0 },
      { question: "gpu?", options: ["तेज", "मंद", "रंग"], correct: 0 },
      { question: "कमी वापर?", options: ["होय", "नाही", "काही"], correct: 0 },
      { question: "reduced?", options: ["नियम", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "card hover tejas द्या.",
      starterCode: `.card { will-change: transform; }`,
      expectedOutput: "Renders a performant hover-transform card",
    },
    interviewQuestions: ["w", "i", "l", "l", "-", "c", "h", "a", "n", "g", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-scope-rule", "css-contain-property", "css-sticky-nav"],
    prev: "css-scope-rule",
    next: "css-marathi-capstone6",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-marathi-capstone6",
    categoryId: "web",
    title: "Marathi Capstone 6",
    marathiTitle: "Portal Nexus — दृश्य संग्रह",
    level: "advanced",
    minutes: 32,
    summary: "सर्व Level 6 तंत्रांचा संग्रह.",
    sections: [
      { title: "1. ध्येय", content: "portal nexus संग्रह.\ncontain speed.\ntransition सुरळीत गती.\ndark प्रकाश.\nअंतिम portal.", code: `.portal {
  content-visibility: auto;
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "2. थ्रेशहोल्ड थर", content: "base theme.\nutilities शेवट.\norder स्थिर.\ncolor एकत्र.\nनियम शुद्ध.", code: `@layer base, theme, utilities;`, codeLanguage: "css" },
      { title: "3. mask हेडर", content: "हेडर mask धूसर.\ngradient सॉफ्ट कडे.\nशीर्षक मोठा.\ndeco कोपरे.\nरचना उजळ.", code: `.masthead {
  mask-image: radial-gradient(black 55%, transparent);
}`, codeLanguage: "css" },
      { title: "4. font आधार", content: "मराठी stack मजबूत.\nMukta आधार.\nNoto पर्याय.\nअक्षर शांत.\nवाचन व्यवस्था.\nएकसारखे आकार.", code: `.portal {
  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;
}`, codeLanguage: "css" },
      { title: "5. sticky स्ट्रक्चर", content: "हेडर sticky वर.\nsubnav खाली.\nsidebar उजवी.\nगॅप समान.\nअंतर तोल.\nस्क्रोल स्थिर.", code: `.portal {
  position: sticky;
  top: 0;
  z-index: 40;
}`, codeLanguage: "css" },
      { title: "6. आधार मोठा", content: "@scope नियम आत.\nlogical border.\nneed कमी.\nwill-change हलका.\nतपासणी अंतिम.", code: `@scope (.card) {
  h3 { color: #0f172a; }
}
.main {
  margin-block: 24px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "portal जोडा.\nसर्व भाग.", code: `.portal { min-height: 100vh; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["layer कसे?", "mask कुठे?", "sticky काय?"],
    quiz: [
      { question: "nexus?", options: ["संग्रह", "रंग", "एक"], correct: 0 },
      { question: "contain?", options: ["तेज", "मंद", "रंग"], correct: 0 },
      { question: "sticky?", options: ["चिकट", "साधा", "जड"], correct: 0 },
      { question: "@scope?", options: ["मर्यादा", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "portal nexus पूर्ण.",
      starterCode: `.portal { min-height: 100vh; }`,
      expectedOutput: "Renders polished Marathi portal nexus using Level 6 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "6", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-will-change", "css-view-transition"],
    prev: "css-will-change",
    next: "css-contain-property",
    levelLabel: CSS6_LABEL,
  },];
