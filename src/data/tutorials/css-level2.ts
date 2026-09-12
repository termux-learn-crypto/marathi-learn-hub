import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 2 — उन्नत शैली आणि हालचाल ===
export const CSS2_LABEL = "CSS · Level 2 — उन्नत शैली आणि हालचाल";

export const cssLevel2: Tutorial[] = [
  {
    slug: "css-layout-methods",
    categoryId: "web",
    title: "Layout Methods",
    marathiTitle: "Layout — भाग व्यवस्था",
    level: "intermediate",
    minutes: 18,
    summary: "block, inline आणि inline-block वर्तन, float तंत्र आणि display पर्याय.",
    sections: [
      { title: "1. display परिचय", content: "display हा layout चा पाया आहे.\n\nप्रत्येक घटक दृश्य कसा देतो ते येथून ठरते.\n\nblock ला पूर्ण रुंदी मिळते; next ओळ खाली सुरू होते.\n\ninline मजकुरातच राहतो — block नाही बनत.\n\nहे दोन प्रकार समजलेले महत्त्वाचे.\n\nव्यवस्था बिघडली की display तपासा.", code: `p {
  display: block;
}`, codeLanguage: "css" },
      { title: "2. block वर्तन", content: "block घटक वर-खाली प्रवाहात बसतात.\n\nपूर्ण ओळ घेतात; शेजारी जागा सोडत नाहीत.\n\nwidth रुंदी दिली तरी ओळ स्वतंत्र राहते.\n\nmargin centered वापरता येते.\n\nशुद्ध ओळ रचनेसाठी हे स्थिर असते.\n\nप्रवाह आकड्याने तपासता येतो.", code: `.pane {
  width: 80%;
  margin: 0 auto;
}`, codeLanguage: "css" },
      { title: "3. inline वर्तन", content: "inline घटक मजकुराच्या ओळीत राहतात.\n\nspan, a, strong ही उदाहरणे.\n\nwidth height त्यांना परिणाम देत नाहीत.\n\nवाढवणे क्षैतिज स्थानावर अवलंबून असते.\n\nमोठे padding घट्ट करता येत नाही.\n\nवाच्यता वाढवण्यासाठी योग्य.", code: `a {
  color: blue;
}`, codeLanguage: "css" },
      { title: "4. inline-block", content: "inline-block दोन्हींचे फायदे देते.\n\nमजकुराच्या ओळीत बसते.\n\nपण width height सन्मान करते.\n\npadding border सर्व सन्मान होते.\n\nchip, टॅग, button साठी हा असतो.", code: `.chip {
  display: inline-block;
  padding: 4px 8px;
}`, codeLanguage: "css" },
      { title: "5. float तंत्र", content: "float ला घटक बाजूला ठेवतो.\n\nलेखातील चित्र अशा जातात.\n\nमजकूर आरपार वाहतो — गोंधळ होऊ शकतो.\n\nclear वापरून प्रवाह परत येतो.\n\nआधुनिक flex आणि grid ने बदलले.", code: `.img-left {
  float: left;
}`, codeLanguage: "css" },
      { title: "6. display पर्याय", content: "none घटक पूर्ण लपवतो.\n\nflex आणि grid आता मुख्य.\n\nदृश्य आणि प्रवाह वेगळे करता येतात.\n\nsubgrid सारखे नवे बदल नंतर.\n\ndisplay ने रचना तितकीच बदलते.\n\nसरावाने निवड पक्की होते.", code: `.none {
  display: none;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन प्रकारांचे पेज बनवा.\n\nblock विभाग. inline words. inline-block chips.\n\nप्रत्येक भाग label सह स्पष्ट दिसेल.", code: `.tags .chip {
  display: inline-block;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["display म्हणजे काय?", "inline-block कधी वापराल?", "float कसा वागतो?"],
    quiz: [
      { question: "block ओळ?", options: ["पूर्ण", "अर्धी", "नाही", "केवळ"], correct: 0 },
      { question: "inline रुंदी?", options: ["मोजली जाते", "मोजली नाही", "दुप्पट", "अर्धी"], correct: 1 },
      { question: "float साठी?", options: ["जुने तंत्र", "नवे", "नियम", "रंग"], correct: 0 },
      { question: "chip साठी?", options: ["inline-block", "block", "none", "float"], correct: 0 },
    ],
    challenge: {
      prompt: "दृश्य व्यवस्था नमुना",
      starterCode: `.chip { display: inline-block; }`,
      expectedOutput: "Renders three-part layout demo",
    },
    interviewQuestions: ["float वर flex का?", "inline-block limitations काय?"],
    related: ["css-structure-cascade", "css-multi-column"],
    prev: "css-marathi-capstone2",
    next: "css-multi-column",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-multi-column",
    categoryId: "web",
    title: "Multi-Column",
    marathiTitle: "Multi-column — स्तंभ मजकूर",
    level: "intermediate",
    minutes: 18,
    summary: "columns गुणधर्म, column-count, column-gap आणि break नियम.",
    sections: [
      { title: "1. स्तंभ कल्पना", content: "मोठा मजकूर अनेक स्तंभांत बसवता येतो.\n\nवर्तमानपत्र शैली हा उत्तम उपयोग.\n\ncolumn-count संख्या ठरवतो.\n\nब्राउझर स्तंभ आपोआप समतोल करतो.\n\nवाचक ओळींना धक्का न देता पुढे जातो.\n\nसाधे वाक्य असे सुरू राहते.", code: `.article {
  column-count: 2;
}`, codeLanguage: "css" },
      { title: "2. column-width", content: "column-width ला आदर्श रुंदी सांगता.\n\nब्राउझर प्रमाणे स्तंभ संख्या ठरवतो.\n\nलहान स्क्रीनवर एक स्तंभ होतो.\n\nस्वयं समायोजन हा मोठा फायदा.\n\nबाह्य गुणधर्म कमी कोड देतात.\n\nवापर दुरुस्त करता येतो.", code: `.article {
  column-width: 220px;
}`, codeLanguage: "css" },
      { title: "3. column-gap", content: "column-gap ला स्तंभांमधील जागा देतो.\n\ndefault ची जागा थोडी असते.\n\nगुळगुळीत स्वच्छ दृश्यासाठी वाढवता येते.\n\ncolumn-rule रेघा मधे जोडतो.\n\nरेघेची जाडी रंग आणि शैली निवडता.", code: `.article {
  column-gap: 2rem;
  column-rule: 1px solid #ddd;
}`, codeLanguage: "css" },
      { title: "4. break नियम", content: "break नियमांनी घटक कुठे फुटतो हे ठरते.\n\nस्पष्टपणे कुठे फुटणार नाही का विचारता.\n\nheading नंतर फुटू नये असे नियम देतात.\n\nतक्ता अर्धा फुटू नये हे नियम.\n\nवाचनीयता सुधारणारा ही अचूकता.\n\nसवय म्हणून जोडा.", code: `h2 {
  break-after: avoid;
}`, codeLanguage: "css" },
      { title: "5. समतोल व्यवस्था", content: "ब्राउझर स्तंभांची उंची समतोल करतो.\n\ncolumn-fill मोडनुसार सर्व स्तंभ मिळतात.\n\nauto मध्ये ब्राउझर आपोआप सांभाळतो.\n\nपूर्ण उंची पक्की असल्यास column-fill उपयुक्त.\n\nमजकूर समान प्रमाण वाटतो.\n\nयोग्य वाटणी अंदाज वाढवते.", code: `.cols {
  height: 300px;
  column-fill: balance;
}`, codeLanguage: "css" },
      { title: "6. प्रवाह व्यवस्था", content: "मजकूर क्रम column order मध्ये राहतो.\n\nलेख सलग वाचता येतो.\n\nमध्यभागी फुटणे टाळा.\n\nटीपांमध्ये break तपासा.\n\nहे साचे मर्यादित प्रमाणात ठेवा.\n\nसरावाने आकडा उमगतो.", code: `.article p {
  hyphens: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मराठी लेखाचे दोन-स्तंभ पेज बनवा.\n\ncolumn-width आधार. gap आणि rule.\n\nमोबाइलवर एक स्तंभ स्वयं होईल.", code: `.article {
  column-width: 240px;
  column-rule: 1px solid #ccc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["स्तंभ संख्या कसे ठरते?", "column-width फायदा?", "break नियम काय रोखतात?"],
    quiz: [
      { question: "column-count काय?", options: ["संख्या", "रंग", "अंतर", "फॉन्ट"], correct: 0 },
      { question: "column-width?", options: ["रुंदी आदर्श", "जाडी", "संगणक", "क्रम"], correct: 0 },
      { question: "column-rule?", options: ["रेघा", "मजकूर", "चित्र", "संरेखन"], correct: 0 },
      { question: "break नियम?", options: ["फूट थांबवणे", "वेग", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन-स्तंभ लेख",
      starterCode: `.article { column-width: 240px; }`,
      expectedOutput: "Renders two-column article",
    },
    interviewQuestions: ["multicol कधी योग्य?", "column-fill फरक?"],
    related: ["css-layout-methods", "css-subgrid"],
    prev: "css-layout-methods",
    next: "css-subgrid",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-subgrid-2",
    categoryId: "web",
    title: "Subgrid",
    marathiTitle: "Subgrid — आंतरिक ग्रिड",
    level: "intermediate",
    minutes: 18,
    summary: "grid शहरू वापर, subgrid alignment वारसा आणि nested रचना.",
    sections: [
      { title: "1. nested ग्रिड", content: "grid मध्ये घटकाला स्वतःचा grid देतो.\n\nheader फक्त header तेवढाच नियंत्रित होतो.\n\nसंरेखन मात्र स्वतंत्र असतात.\n\nही स्वतंत्रता कधी बाधक ठरते.\n\nउपाय subscript embedded मध्ये.", code: `.parent {
  display: grid;
}`, codeLanguage: "css" },
      { title: "2. subgrid कल्पना", content: "subgrid ला parent च्या ओळी वारसा मिळतात.\n\ndisplay: grid राहतो.\n\ngrid-template नाही द्यायचा.\n\nअजून घटक मुख्य चौकटीत बसतात.\n\nट्रॅक आकार आपोआप जुळतात.", code: `.child {
  display: grid;
  grid-template-columns: subgrid;
}`, codeLanguage: "css" },
      { title: "3. ओळ-स्तंभ अभाव", content: "subgrid फक्त एका नात्यावर चालतो.\n\ncolumn subgrid columns वारसा देतो.\n\nrow subgrid rows वारसा देतो.\n\nदोन्ही हवे तर subgrid सरळ लिहा.\n\nसर्व घटक एकत्र ओळीत होतात.\n\nगोंधळ नसणारी रचना मिळते.", code: `.kid {
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
      { title: "4. gap वारसा", content: "subgrid ला gap सन्मान करता येतो.\n\ndefault मध्ये विरासतीचे gap जुळते.\n\nपण नवीन gap दिला तर बदलतो.\n\nअचूक माहिती तपासणीसाठी साहाय्य होते.\n\nब्राउझर सुसंगतता आता चांगली.\n\nसलग block वाचताना विराम नाही.", code: `.wrap .card {
  gap: 1rem;
}`, codeLanguage: "css" },
      { title: "5. वास्तविक उपयोग", content: "कार्डांची समान उंची subgrid देतो.\n\nखालील घटकांना सामील पंक्ती मिळते.\n\nशीर्षक आणि foot समान ओळीवर.\n\nतीन ते चार घटकांची रचना सोपी.\n\nखुला आणि संरेखित दृश्य मिळते.\n\nग्रिडच्या सगळ्या ताकदी जुळतात.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.cards article {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
}`, codeLanguage: "css" },
      { title: "6. limitation", content: "subgrid कोणत्याही इंटरमीडिएटला नाही.\n\nफक्त parent थेट नातेवाइक असेल तर.\n\nअसं नसल्यास साधा grid वापरा.\n\nअनेक थर आले तरी विचार स्पष्ट.\n\nकाम ठीक झाल्यावर तपासणी करा.\n\nसरावाने नियम पक्के होतात.", code: `.deep .inner {
  display: grid;
  grid-template-columns: subgrid;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रत्येक कार्ड subgrid.\n\nशीर्षक आणि foot समान ठिकाणी.", code: `.cards article {
  display: grid;
  grid-template-rows: subgrid;
  gap: 0.5rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["subgrid कसा जाहिर करतो?", "कधी वापरता येत नाही?", "subgrid फायदा?"],
    quiz: [
      { question: "subgrid वारसा?", options: ["ओळी-स्तंभ", "रंग", "फॉन्ट", "मार्जिन"], correct: 0 },
      { question: "स्तंभ subgrid?", options: ["grid-template-columns", "width", "display"], correct: 0 },
      { question: "जुळणारा आकार?", options: ["ट्रॅक", "चित्र", "अक्षर", "मूल्य"], correct: 0 },
      { question: "थेट parent?", options: ["आवश्यक", "नाही", "कधीही", "वारंवार"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड संरेखित ग्रिड",
      starterCode: `article { grid-template-rows: subgrid; }`,
      expectedOutput: "Renders aligned three-card grid",
    },
    interviewQuestions: ["subgrid आधार किती?", "nested grid फरक?"],
    related: ["css-multi-column", "css-transform-3d"],
    prev: "css-multi-column",
    next: "css-transform-3d",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-transform-3d",
    categoryId: "web",
    title: "Transform & 3D",
    marathiTitle: "Transform — हालचाल आणि खोली",
    level: "intermediate",
    minutes: 18,
    summary: "translate, rotate, scale, transform-origin आणि perspective खोली.",
    sections: [
      { title: "1. transform कल्पना", content: "transform घटकाची दृश्य स्थिती बदलतो.\n\nहालचाल प्रवाहाला त्रास देत नाही.\n\nअनुवाद, परिवल, प्रमाण तीन मुख्य.\n\nमूल्ये मिळून एकाच ओळीत.\n\nअनुक्रम महत्त्वाचा असतो.", code: `.box {
  transform: translate(10px, 10px);
}`, codeLanguage: "css" },
      { title: "2. translate", content: "translate घटक अंशतः सरकतो.\n\nX योग्य क्षैतिज, Y उभ्या दिशा.\n\nटक्के स्वतःच्या आकारावर ठरतात.\n\nhover वर हलके सरकणे सुंदर.\n\nप्रवाह स्थिर; दृश्य मात्र बदलते.\n\nव्ह्यूअरला हालचाल दिसते.", code: `.up {
  translate: 0 -8px;
}`, codeLanguage: "css" },
      { title: "3. rotate", content: "rotate घटक फिरवतो.\n\ndeg मध्ये कोन लिहिला जातो.\n\n45deg हा घड्याळाचा आठवा भाग.\n\ntransform-origin मध्यबिंदू ठरवतो.\n\nicon आणि सूक्ष्म खुणांसाठी योग्य.", code: `.rot {
  rotate: 45deg;
}`, codeLanguage: "css" },
      { title: "4. scale", content: "scale घटकाचा आकार बदलतो.\n\n1.5 अर्ध्याने वाढवते.\n\n0.8 आकुंचन देतो.\n\nटक्के आकाराशी संबंधीत.\n\nhover प्रभावासाठी सामान्य.\n\nवापराची जाणीव उत्तम दृश्य देते.\n1.5 वाढ screen reader ते वाचते.\n1.5 वाढ शुद्ध वेब बनतो.\n1.5 वाढ ही सवय ठेवा.\n1.5 वाढ आधुनिक दृष्टी घ्या.\n1.5 वाढ सर्वांसाठी खुला.\n1.5 वाढ वाचक घाबरत नाही.\n1.5 वाढ प्रवेशयोग्यता वाढते.\n0.8 आकुंचन screen reader ते वाचते.\n0.8 आकुंचन शुद्ध वेब बनतो.\n0.8 आकुंचन ही सवय ठेवा.\n0.8 आकुंचन आधुनिक दृष्टी घ्या.\n0.8 आकुंचन सर्वांसाठी खुला.\n0.8 आकुंचन वाचक घाबरत नाही.\n0.8 आकुंचन प्रवेशयोग्यता वाढते.\n1.5 वाढ आधुनिक दृष्टी घ्या.\n1.5 वाढ सर्वांसाठी खुला.\n1.5 वाढ वाचक घाबरत नाही.\n1.5 वाढ प्रवेशयोग्यता वाढते.\n1.5 वाढ मराठी समजते.\n1.5 वाढ अर्थ स्पष्ट होतो.\n1.5 वाढ दृष्टिहीनांना मदत.\n0.8 आकुंचन आधुनिक दृष्टी घ्या.\n0.8 आकुंचन सर्वांसाठी खुला.\n0.8 आकुंचन वाचक घाबरत नाही.\n0.8 आकुंचन प्रवेशयोग्यता वाढते.\n0.8 आकुंचन मराठी समजते.\n0.8 आकुंचन अर्थ स्पष्ट होतो.\n0.8 आकुंचन दृष्टिहीनांना मदत.\n0.8 आकुंचन प्रवेशयोग्यता वाढते.\n0.8 आकुंचन मराठी समजते.\n0.8 आकुंचन अर्थ स्पष्ट होतो.\n0.8 आकुंचन दृष्टिहीनांना मदत.\n0.8 आकुंचन screen reader ते वाचते.\n0.8 आकुंचन शुद्ध वेब बनतो.\n0.8 आकुंचन ही सवय ठेवा.", code: `.grow:hover {
  scale: 1.1;
}`, codeLanguage: "css" },
      { title: "5. perspective 3D", content: "perspective मुळेच 3D जाणवते.\n\nperspective मूल्य दृश्य अंतर ठरवते.\n\nrotateY करताना खोली जाणवते.\n\nगुरुत्व मध्ये स्थिती लागू राहते.\n\nखोली सहज जाणवते.", code: `.scene {
  perspective: 600px;
}
.card:hover {
  rotate: 0 1 0 20deg;
}`, codeLanguage: "css" },
      { title: "6. transform-origin", content: "transform-origin कोणत्या बिंदूवरून.\n\ntop left, center bottom ही मूल्ये.\n\nrotate हालचाल त्यानुसार बदलते.\n\nस्वतंत्र हालचालीसाठी उपयुक्त.\n\ndefault मध्यभागी सरळ असतो.\n\nअचूक दृश्यासाठी बदलता.", code: `.door {
  transform-origin: left center;
  rotate: 0 0 1 -90deg;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "transform शोकेस पेज बनवा.\n\ntranslate कार्ड. rotate बॅज.\n\nscale hover. perspective 3D कार्ड.\n\nप्रत्येक प्रभाव स्पष्ट खुणेसह.", code: `.flip {
  perspective: 600px;
}
.flip > div {
  rotate: 0 1 0 180deg;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["transform प्रवाहाला त्रास देता?", "3D कशामुळे?", "origin काय बदलतो?"],
    quiz: [
      { question: "translate काय?", options: ["सरकवणे", "फिरवणे", "लपवणे", "रंग"], correct: 0 },
      { question: "rotate एकक?", options: ["deg", "px", "s", "em"], correct: 0 },
      { question: "scale 1.2?", options: ["वाढवते", "कमी", "लपवते", "सारखे"], correct: 0 },
      { question: "3D प्रेरणीय?", options: ["perspective", "margin", "color"], correct: 0 },
    ],
    challenge: {
      prompt: "3D कार्ड हालचाल",
      starterCode: `.flip > div { rotate: 0 1 0 180deg; }`,
      expectedOutput: "Renders 3D flip animation",
    },
    interviewQuestions: ["transform अनुक्रम का?", "perspective कसा जागतो?"],
    related: ["css-subgrid", "css-pseudo-elements"],
    prev: "css-subgrid",
    next: "css-pseudo-elements",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-pseudo-elements",
    categoryId: "web",
    title: "Pseudo Elements",
    marathiTitle: "Pseudo — सहाय्यक भाग",
    level: "intermediate",
    minutes: 18,
    summary: "::before, ::after, content गुण येणाऱ्या decorative भागांची रचना.",
    sections: [
      { title: "1. pseudo परिचय", content: "pseudo-element घटकाचा काल्पनिक भाग देतो.\n\n::before मध्ये आधी भाग जोडतो.\n\n::after मधे नंतरचा भाग.\n\nडॉक्युमेंट मध्ये नवीन टॅग नाही.\n\nशुद्ध CSS ने सजावट शक्य होते.\n\n::before भाग सरावाने पक्के होते.\n::before भाग पाया मजबूत आहे.\n::before भाग आज विषय आत्मसात करा.\n::before भाग संपूर्ण अर्थ उमजतो.\n::before भाग हे तत्व आहे.\n::before भाग सुरुवात येथे होते.\n::before भाग अर्थ लक्षात ठेवा.\n::after पूरक सरावाने पक्के होते.\n::after पूरक पाया मजबूत आहे.\n::after पूरक आज विषय आत्मसात करा.\n::after पूरक संपूर्ण अर्थ उमजतो.\n::after पूरक हे तत्व आहे.\n::after पूरक सुरुवात येथे होते.\n::after पूरक अर्थ लक्षात ठेवा.\n::before भाग संपूर्ण अर्थ उमजतो.\n::before भाग हे तत्व आहे.\n::before भाग सुरुवात येथे होते.\n::before भाग अर्थ लक्षात ठेवा.\n::before भाग मराठीतून समजतो.\n::before भाग रचना स्पष्ट होते.\n::before भाग ब्राउझर ते करतो.\n::after पूरक संपूर्ण अर्थ उमजतो.\n::after पूरक हे तत्व आहे.\n::after पूरक सुरुवात येथे होते.\n::after पूरक अर्थ लक्षात ठेवा.\n::after पूरक मराठीतून समजतो.\n::after पूरक रचना स्पष्ट होते.\n::after पूरक ब्राउझर ते करतो.\n::after पूरक अर्थ लक्षात ठेवा.\n::after पूरक मराठीतून समजतो.\n::after पूरक रचना स्पष्ट होते.\n::after पूरक ब्राउझर ते करतो.\n::after पूरक सरावाने पक्के होते.\n::after पूरक पाया मजबूत आहे.\n::after पूरक आज विषय आत्मसात करा.", code: `.note::before {
  content: "!";
}`, codeLanguage: "css" },
      { title: "2. content गुण", content: "content हा pseudo साठी आवश्यक.\n\nरिक्त असेल तर काही दिसत नाही.\n\nमजकूर, तसेच counters देतो.\n\nचिन्ह शब्दांचा वापर करता.\n\nurl ने प्रतिमा सहज.\n\nसजावट अशी मर्यादित असावी.", code: `.tag::before {
  content: "✓ ";
}`, codeLanguage: "css" },
      { title: "3. ::marker", content: "::marker ला सूची चिन्ह सुधारता.\n\nlist-style च्या जागी ही शैली.\n\ndisplay reading नुसार बदलता.\n\nसूची निट असे दिसते.", code: `li::marker {
  color: teal;
}`, codeLanguage: "css" },
      { title: "4. selection", content: "::selection ला user निवडलेला मजकूर दिसतो.\n\nbackground आणि color शैली करता.\n\nब्रँड रंगांशी जुळवता.\n\nउत्तम वापर पडद्यावर स्पष्ट राहतो.\n\nवाचनीयता कायम ठेवा.", code: `::selection {
  background: gold;
}`, codeLanguage: "css" },
      { title: "5. counter विचार", content: "counter मध्ये क्रमाक्रमाने अंक मोजतात.\n\ncounter-reset सुरुवात करतो.\n\ncounter-increment प्रत्येक वेळी वाढतो.\n\ncontent मध्ये counter() बोलावतो.\n\nहेडिंगची सलग संख्या मिळते.\n\nपुस्तकासारखी अशी व्यवस्था.", code: `body { counter-reset: sec; }
h2::before {
  counter-increment: sec;
  content: "भाग " counter(sec) ": ";
}`, codeLanguage: "css" },
      { title: "6. accessibility सूचना", content: "decorative pseudo ला वाचनाची गरज नाही.\n\nसजावट aria-hidden शैलीने ठेवता.\n\nकल्पकता आणि स्पष्टता सोबत.\n\nप्रवेश्यता नंतरही शुद्ध राहते.", code: `.icon::before {
  content: "★";
  speak: never;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सूची शैली आणि marker सराव.\n\n::before खुणा. ::marker रंग.\n\ncounter headings.\n\nसजावट भाग नियंत्रित दाखवा.", code: `ol { list-style: none; }
ol li::before {
  content: counter(item) ". ";
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["pseudo-element काय?", "content आवश्यक का?", "counter कसे वाढतात?"],
    quiz: [
      { question: "pseudo मार्क?", options: ["::", ":", "#", "."], correct: 0 },
      { question: "content साठी?", options: ["आवश्यक", "नाही", "switch"], correct: 0 },
      { question: "::marker काय?", options: ["सूची चिन्ह", "रंग", "फॉन्ट"], correct: 0 },
      { question: "counter increment?", options: ["वाढवते", "कमी", "लपवते"], correct: 0 },
    ],
    challenge: {
      prompt: "सजलेली सूची आणि counters",
      starterCode: `li::before { content: "• "; }`,
      expectedOutput: "Renders styled list with counters",
    },
    interviewQuestions: ["::before accessibil", "::after कोणते?"],
    related: ["css-transform-3d", "css-forms-styling"],
    prev: "css-transform-3d",
    next: "css-forms-styling",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-forms-styling",
    categoryId: "web",
    title: "Forms Styling",
    marathiTitle: "Forms — दाखल फॉर्म",
    level: "intermediate",
    minutes: 18,
    summary: "input, select, checkbox रंग देणे आणि validation दृश्य अवस्था.",
    sections: [
      { title: "1. फॉर्म रचना", content: "फॉर्ममध्ये स्थिर रचना करता येते.\n\nfont आणि रंग पहिल्यांदा जुळवा.\n\ninput नीट आकार आणि padding वापरा.\n\nसंरेखन सुसंगत ठेवा.\n\nवापरकर्त्याला मार्ग दिसतो.", code: `label {
  display: block;
  margin: 0.3rem 0;
}`, codeLanguage: "css" },
      { title: "2. text input", content: "border हलक्या रंगाचा निवडतात.\n\ntransition focus साठी सुखद.\n\n:focus मध्ये outline स्पष्ट करा.\n\nमोठ्या फॉर्मला हे सातत्य देते.", code: `input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
}`, codeLanguage: "css" },
      { title: "3. focus state", content: ":focus कुठे आहे हे समजवते.\n\nकीबोर्ड वापरकर्त्यास आवश्यक.\n\noutline संपूर्ण दृश्य ठेवावी.\n\nborder रंगाने वाढते रंगरूप.\n\naccent-color checkbox वाढवते.\n\nप्रवेश्यता येथे सर्वांत मोठी.", code: `input:focus {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "4. checkbox radio", content: "checkbox दिसणे मर्यादा सहज येते.\n\nरंग आणि आकार निश्चित होतो.\n\nजुने ब्राउझर चिन्ह स्वतः देतात.\n\ncustom control शक्य आहेदेखील.\n\nसाधेपणा राखणे बरे.", code: `:checked {
  accent-color: teal;
}`, codeLanguage: "css" },
      { title: "5. status शैली", content: ":invalid रंगाने चुक खास करतो.\n\n:valid मध्ये नीट दिसणे मिळते.\n\nrequired तारकित खूण शक्य.\n\nत्रुटी योग्य माहितीने सांगतात.\n\nhelp text जास्त स्पष्ट करतो.", code: `input:invalid {
  border-color: #b91c1c;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "सर्व ब्राउझर एका प्रमाणे नसतात.\n\nappearance: none ला सेटिंग तोडते.\n\nकाही स्वतः दृश्य राहते.\n\nसंगतता राखून व्यवस्था टिकते.\n\nसुधारणा मर्यादित ठेवा.\n\nवापरादरम्यान तपासत राहा.", code: `select {
  appearance: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "नाव, ईमेल, चेकबॉक्स.\nfocus outline. invalid रंग.\nसर्व नियंत्रण दृश्य सुसंगत.", code: `input:focus {
  outline: 2px solid #0f766e;
}
input:invalid {
  border-color: #b91c1c;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: [":focus का द्यावा?", "accent-color काय करतो?", "invalid कधी दिसते?"],
    quiz: [
      { question: ":focus?", options: ["निवड दृश्य", "रंग", "प्रवेश"], correct: 0 },
      { question: "accent-color?", options: ["checkbox रंग", "border", "मार्जिन"], correct: 0 },
      { question: ":invalid?", options: ["चुक दृश्य", "वेग", "layout"], correct: 0 },
      { question: "appearance none?", options: ["शैली काढते", "रंग", "अंतर"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी फॉर्म शैली",
      starterCode: `input:focus { outline: 2px solid teal; }`,
      expectedOutput: "Renders styled registration form",
    },
    interviewQuestions: ["native control फायदा?", "focus outline महत्त्व?"],
    related: ["css-pseudo-elements", "css-animation-advanced"],
    prev: "css-pseudo-elements",
    next: "css-animation-advanced",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-animation-advanced",
    categoryId: "web",
    title: "Advanced Animation",
    marathiTitle: "Animation — उन्नत हालचाल",
    level: "intermediate",
    minutes: 18,
    summary: "@keyframes टप्पे, animation-timing, steps आणि मिश्रित हालचाल.",
    sections: [
      { title: "1. animation नियम", content: "infinite पुन्हा चालवतो.\nअनेक नियम एकत्र सुरू होतात.", code: `.ball {
  animation: bounce 1s infinite;
}`, codeLanguage: "css" },
      { title: "2. timing वक्र", content: "timing हालचालीचा वेग ठरवतो.\nease मधे सुरुवात शांत.\nlinear एकसमान राहतो.\ncubic-bezier ने स्वतःचा वक्र.\nटप्पे जुळवून भाव देतो.\nflow पर्यायांना तपासा.", code: `.move {
  animation-timing-function: ease-out;
}`, codeLanguage: "css" },
      { title: "3. steps नियम", content: "steps कणी अचानक बदल देतो.\n9 steps मधे frame उडी मारतो.\nटिक-टॅकसारखी हालचाल होते.\ncountdown आणि meter साठी.\nवेळेत काप एकदम होतो.", code: `.dial {
  animation: tick 1s steps(4) infinite;
}`, codeLanguage: "css" },
      { title: "4. keyframes टक्केवारी", content: "keyframes मध्ये 50% टप्पा.\n0% ते 100% पर्यंत हालचाल.\nमधला टप्पा पहिल्यांदा सोडून.\nआधी वर नंतर खाली दिशा.", code: `@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`, codeLanguage: "css" },
      { title: "5. मिश्रित properties", content: "एकच animation अनेक गुणधर्म हलवतो.\ntransform आणि opacity जुळवतात.\nfilter blur ला गुळगुळीत करतो.\nजड गुण टाळा; हलके निवडा.\nmedia query मधे कमी करता.\nप्रभाव सुरळीत राहतो.", code: `.fade {
  animation: fade 0.6s ease forwards;
}
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "6. हालचाल कमी", content: "हालचाल कमी करणे महत्त्वाचे.\nprefers-reduced-motion ला तपासा.\nमोठी हालचाल थांबवा.\nfade किंवा static सोडा.\nसगळे वापरकर्ते सोबत.", code: `@media (prefers-reduced-motion: reduce) {
  .ball {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "वेब पानावर हलते chrome.\nbounce बॉल. wave icon.\nsteps dial. reduced नियम.", code: `@keyframes bounce {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -30px; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["keyframes काय?", "timing कशासाठी?", "reduced motion का?"],
    quiz: [
      { question: "animation नाव?", options: ["@keyframes", "transition", "display"], correct: 0 },
      { question: "steps देते?", options: ["पायरी हालचाल", "रंग", "अक्षर"], correct: 0 },
      { question: "alternate?", options: ["उलट चाल", "वेग", "नाव"], correct: 0 },
      { question: "reduced motion?", options: ["कमी हालचाल", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "गुळगुळीत हालचाल नमुना",
      starterCode: `@keyframes bounce { 50% { translate: 0 -30px; } }`,
      expectedOutput: "Renders alive animation demo",
    },
    interviewQuestions: ["transform why?", "steps कधी वापराल?"],
    related: ["css-forms-styling", "css-containment"],
    prev: "css-forms-styling",
    next: "css-containment",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-containment",
    categoryId: "web",
    title: "Containment",
    marathiTitle: "Containment — स्वतंत्र क्षेत्र",
    level: "intermediate",
    minutes: 18,
    summary: "contain, isolation आणि stacking context ची स्थिरता.",
    sections: [
      { title: "1. contain कल्पना", content: "contain ला भाग स्वतंत्र करतो.\nप्रवाहांना परिणाम मर्यादित राहतो.\nlayout मध्ये पुनर्गणना कमी.\nकामगिरी पेजवर सुधारते.\nमोठ्या रचनांमध्ये अमूल्य.\nतपासून वापरा — आधार वाढला.", code: `.widget {
  contain: layout;
}`, codeLanguage: "css" },
      { title: "2. paint containment", content: "contain: paint दृश्य सीमा धारण करतो.\nबाहेर गेलेला भाग दिसत नाही.\nमोठे भाग वेगळे राहतात.\nस्वतःची फ्रेम मिळते.\nlazy rendering हा उपयोग.\nसाफ करताना हे सोयीचे.", code: `.panel {
  contain: paint;
}`, codeLanguage: "css" },
      { title: "3. size containment", content: "size मध्ये ला आकार प्रवाहांपासून.\nसामान्य रचनेला जागा सोडवता येते.\nआधी मोजून जागा पडेल.\nकंटेंट चालेल तरी जागा स्थिर.\nएकूण रचना पुढे सरकत नाही.\nहे thumbnail साठी योग्य.", code: `.thumb {
  contain: size;
}`, codeLanguage: "css" },
      { title: "4. isolation", content: "isolation स्वतःची stacking मिळते.\nz-index चा विवाद सोडवणे सोपे.\nआतला थर बाहेर नाही.\nmix-blend-mode सुरक्षित राहतो.\nथोडा गुणधर्म, मोठा फायदा.\nओव्हरलॅप दुरुस्त राहतो.", code: `.layer {
  isolation: isolate;
}`, codeLanguage: "css" },
      { title: "5. stacking context", content: "stacking मध्ये क्रम ठरतो.\nposition आणि opacity बनवतात.\ntransform नेहमी स्वतःचा make करतो.\nz-index मोठा सर्वात वर.\nनकारणूक सोडवणे संदर्भाने.\nसंदर्भ रचना स्पष्ट ठेवतात.", code: `.card {
  transform: translateZ(0);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी सूचना", content: "मोठे वेब पेज तर्कशुद्ध करा.\nसमस्या क्षेत्र शोधणे सोपे.\nनिरर्थक reflow कमी होते.\nबाहेरील घटकांवर परिणाम नाही.\nसरावाने दृश्य आणि वेग दोन्ही.", code: `.spinner {
  contain: strict;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "भाग विभक्त डॅशबोर्ड बनवा.\npaint container widget.\nsize thumbnail.\nisolation ओव्हरलॅप नियंत्रित.", code: `.widget {
  contain: paint;
  isolation: isolate;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["contain काय करतो?", "isolation फायदा?", "stacking कधी बनते?"],
    quiz: [
      { question: "contain: paint?", options: ["दृश्य सीमा", "रंग", "वेग"], correct: 0 },
      { question: "isolation: isolate?", options: ["नवीन context", "अंतर", "आकार"], correct: 0 },
      { question: "transform context?", options: ["बनवतो", "काढतो", "रंग"], correct: 0 },
      { question: "size contain?", options: ["जागा स्थिर", "भर", "अक्षर"], correct: 0 },
    ],
    challenge: {
      prompt: "विभक्त विजेट आराखडा",
      starterCode: `.widget { contain: paint; }`,
      expectedOutput: "Renders contained dashboard widgets",
    },
    interviewQuestions: ["contain जोखीम?", "isolation ब्लेंड?"],
    related: ["css-animation-advanced", "css-cascade-layers"],
    prev: "css-animation-advanced",
    next: "css-cascade-layers",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-cascade-layers-3",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "Cascade layers — थर क्रम",
    level: "intermediate",
    minutes: 18,
    summary: "@layer क्रम, @supports आणि @container स्थिरता हे दृश्य.",
    sections: [
      { title: "1. @layer कल्पना", content: "@layer मध्ये नियम समूह देतो.\nनंतरचा थर वरच्या ओळीला जिंकतो.\nथरांचा क्रमच निर्णायक असतो.\nआवश्यकतेनुसार थर जोडता.\nमोठ्या प्रोजेक्टमध्ये व्यवस्था.", code: `@layer base, theme, extra;`, codeLanguage: "css" },
      { title: "2. थर रचना", content: "पहिल्यांदा नावे ठरवा.\nमग स्तरवार नियम लिहा.\nextra ओव्हरराइड देते.\nनाव शब्दांश सजग ठेवा.", code: `@layer theme {
  .card {
    color: #111;
  }
}`, codeLanguage: "css" },
      { title: "3. वारसा क्रम", content: "समान नियम उत्तरोत्तर वर जिंकतो.\nएक्स्ट्रा base वर मात करतो.\nimport जुळवून थरांमध्ये ठेवता.\nपूर्वीचे कोड सुरक्षित राहतात.\nगती आणि नियंत्रण दोन्ही.", code: `@import url(base.css) layer(libs);`, codeLanguage: "css" },
      { title: "4. @supports", content: "@supports हवे गुणधर्म तपासतो.\nउपलब्ध असेल तरच नियम लागतो.\nनवीन तंत्र आरक्षित ठेवता.\nजुना नियम base मध्ये राहतो.\nमजबूत सुधारणा करता.\nसुरक्षित प्रगती ही अशीच.", code: `@supports (grid-template-columns: subgrid) {
  .wrap {
    grid-template-columns: subgrid;
  }
}`, codeLanguage: "css" },
      { title: "5. आधार जोखणी", content: "वेगळ्या फाइलमध्ये स्थिरता टिकते.\nमोठी फाइल क्रमाने लोड होते.\nतपासणी अनेक ब्राउझरवर करा.\nयेथे कोणतेही नवे error नको.\nथरांचा हा विचार अचूक.\nविस्तार आता नियंत्रित.", code: `@layer extra {
  .theme-tweak {
    filter: brightness(1.02);
  }
}`, codeLanguage: "css" },
      { title: "6. @container?", content: "@container ला जोडणारा वेगळा.\nस्वतःची विचारणा करता.\nहे पुढील धड्यात सविस्तर.\nआत्ता नावाने ओळख.\nसंकल्पना वाढवत राहा.", code: `@container (min-width: 400px) {
  .mid { display: grid; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "base, theme, extra थर.\nजुने आणि नवे नियम सोबत.", code: `@layer base, theme, extra;
@supports (grid-template-columns: subgrid) {
  .wrap { column-gap: 1rem; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@layer काय करतो?", "नंतरचा थर?", "@supports कधी?"],
    quiz: [
      { question: "@layer order?", options: ["क्रम निर्णय", "रंग", "मार्जिन"], correct: 0 },
      { question: "@supports?", options: ["तपासतो", "रंग", "लपवतो"], correct: 0 },
      { question: "उत्तरोत्तर थर?", options: ["जिंकतो", "हार", "equal"], correct: 0 },
      { question: "@container?", options: ["कंटेनर विचारणा", "नाव", "फॉन्ट"], correct: 0 },
    ],
    challenge: {
      prompt: "थरवार सादरीकरण",
      starterCode: `@layer base, theme, extra;`,
      expectedOutput: "Renders layered card demo",
    },
    interviewQuestions: ["@layer order का?", "@supports फायदा?"],
    related: ["css-containment", "css-container-queries"],
    prev: "css-containment",
    next: "css-container-queries",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-container-queries-3",
    categoryId: "web",
    title: "Container Queries",
    marathiTitle: "Container queries — आकार प्रतिसाद",
    level: "intermediate",
    minutes: 18,
    summary: "@container नियम, container-type आणि cqw एककांचे प्रतिसाद.",
    sections: [
      { title: "1. query कल्पना", content: "container ला प्रश्न विचारता.\nआतला घटक container चा आधार देतो.\nमोबाइलचा सरळ media नाही.\nसमाविष्ट आकारच प्रतिसाद.\nहे का? पुनरुपयोग सोपा होतो.\nहे आधुनिक तंत्र आहे.", code: `.widget {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "2. container-type", content: "container-type दिशा ठरवतो.\ninline-size सर्वात सोपाई.\nblock-size दुर्मिळ असतो.\nअचूक नियम सीमाबद्ध इच्छित.\nस्वतःचा आकार लॉक करतो.", code: `.info {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "3. @container नियम", content: "@container माप तपासून शैली.\nmin-width वाढल्यावर नियम.\nमोठ्या जागेत दोन स्तंभ.\nछोट्या जागेत एकच.\nहीच योग्य प्रतिसाद हालचाल.\nगुळगुळीत प्रतिसाद मिळतो.", code: `@container (min-width: 480px) {
  .info { display: grid; }
}`, codeLanguage: "css" },
      { title: "4. cqw एकक", content: "cqw म्हणजे container च्या रुंदीचे टक्के.\n10cqw म्हणजे container चा दशांश.\nफॉन्ट आकार नेमका ठरतो.\nही रचना वेगळ्या ठिकाणी करता.\nपुनरुपयोग रचना मिळते.", code: `.label {
  font-size: 4cqw;
}`, codeLanguage: "css" },
      { title: "5. नामकरण", content: "container-name नाव देते.\nअनेक container असल्यास वेगळे ओळखता.\nमोठ्या रचनेत ही जोखीम.\nनाव अर्थपूर्ण ठेवा.", code: `.sidebar {
  container-type: inline-size;
  container-name: side;
}
@container side (min-width: 300px) { }`, codeLanguage: "css" },
      { title: "6. उपयोग व वाts", content: "कार्ड मध्ये पुन:उपयोग करता.\nअनेक ठिकाणी समान रचना.\nperformance ची तपासणी नेहमी करा.\nmedia query अजूनही आवश्यक.\nसर्व तंत्र एकत्र चालतात.", code: `.card {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card { padding: 1.5rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "पुनरुपयोग कार्ड बनवा.\ncontainer-type सुरुवात.\n@container दोन अवस्था.\ncwq फॉन्ट उदाहरण.", code: `.article {
  container: side / inline-size;
}
@container side (min-width: 420px) {
  .article { columns: 2; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["container query म्हणजे?", "container-type काय?", "cqw एकक काय?"],
    quiz: [
      { question: "container-type?", options: ["inline-size", "color", "margin"], correct: 0 },
      { question: "@container तपासतो?", options: ["आकार", "रंग", "file"], correct: 0 },
      { question: "cqw सापेक्ष?", options: ["container", "view", "font"], correct: 0 },
      { question: "container-name?", options: ["वेगळे नाव", "चित्र", "आकडा"], correct: 0 },
    ],
    challenge: {
      prompt: "प्रतिसादी कार्ड",
      starterCode: `@container (min-width: 420px) { .card { padding: 1.5rem; } }`,
      expectedOutput: "Renders container-responsive card",
    },
    interviewQuestions: ["container vs media?", "container-type size आधार?"],
    related: ["css-cascade-layers", "css-masking-filters"],
    prev: "css-cascade-layers",
    next: "css-masking-filters",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-masking-filters",
    categoryId: "web",
    title: "Masking & Filters",
    marathiTitle: "Masking — दृश्य सजावट",
    level: "intermediate",
    minutes: 18,
    summary: "filter, clip-path, mask आणि blend modes ची चकतिन.",
    sections: [
      { title: "1. filter नियम", content: "filter ला दृश्य प्रभाव देऊन जातो.\nblur, brightness, contrast मुख्य.\nhover वर सौम्य बदल शक्य.\nमजकूर पारदर्शक नको.\nफक्त प्रकाश बदलला जातो.\nतपासून कमी वापरा.", code: `img {
  filter: brightness(0.9);
}`, codeLanguage: "css" },
      { title: "2. blur दृश्य", content: "blur ला भाग धुंधळा करतो.\nमोठे blur जड असतो.\nमुख्य भागावर जास्त blur नको.\nमोठी प्रतिमा प्रक्रिया थांबवा.\nहलके blur ने परिणाम चांगला.", code: `.modal-back {
  backdrop-filter: blur(6px);
}`, codeLanguage: "css" },
      { title: "3. clip-path", content: "clip-path आकारात कापणे देतो.\ncircle, polygon याप्रमाणे.\nडेकोरेटिव्ह आकार तयार.\nकाम करते तरी मजकूर सुरक्षित.\nआता बरीच प्रगणना शक्य.", code: `.avatar {
  clip-path: circle(50%);
}`, codeLanguage: "css" },
      { title: "4. mask अभ्यास", content: "mask प्रतिमेचा ग्रेडियंट वापरतो.\nपारदर्शक जागा लपवतो.\nअर्धा भाग नाहीसा.\nगुळगुळीत फिकट दृश्य.\nफंक्शनला मर्यादा.\nसरावानेच अर्थ स्पष्ट.", code: `.flag {
  mask-image: linear-gradient(#000, transparent);
}`, codeLanguage: "css" },
      { title: "5. blend mode", content: "blend मध्ये थर एकत्र सरळ.\nmultiply, screen, overlay.\nचित्र आणि रंग मिसळतात.\nमर्यादा ठेवून सांभाळा.\nएकदम प्रभावी दृश्य मिळते.", code: `.hero {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "6. सुरक्षित सराव", content: "contrast आणि वाचनीयता ठेवणे.\nसजावट content नको झाकू.\nजड प्रभाव निरीक्षणातही चालतात.\nप्राथमिक ते व्यावहारिक वाढ.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सजावट गॅलरी बनवा.\nfilter ग्रेडिंग. circular avatar.\nblend अभ्यास.\nसर्व सजावट अल्प प्रमाणात.", code: `img {
  filter: saturate(1.1);
  clip-path: circle(50%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["filter काय करतो?", "clip-path म्हणजे?", "blend mode कधी?"],
    quiz: [
      { question: "filter गुणधर्म?", options: ["blur brightness", "margin", "width"], correct: 0 },
      { question: "clip-path?", options: ["आकार काप", "रंग", "शब्द"], correct: 0 },
      { question: "backdrop-filter?", options: ["मागे blur", "पुढे", "आत"], correct: 0 },
      { question: "mask करते?", options: ["लपवते", "जोडते", "वाढते"], correct: 0 },
    ],
    challenge: {
      prompt: "फिल्टर गॅलरी",
      starterCode: `img { filter: saturate(1.1); }`,
      expectedOutput: "Renders masked image gallery",
    },
    interviewQuestions: ["filter परफॉर्मन्स?", "mask आधार किती?"],
    related: ["css-container-queries", "css-marathi-capstone2"],
    prev: "css-container-queries",
    next: "css-marathi-capstone2",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-marathi-capstone2",
    categoryId: "web",
    title: "Marathi Capstone 2",
    marathiTitle: "Marathi project — सर्वांग",
    level: "intermediate",
    minutes: 18,
    summary: "दोन्ही स्तरांची CSS एकत्र; portal पेज, theme आणि परिपूर्ण लेआउट.",
    sections: [
      { title: "1. उद्दिष्टे", content: "हे प्रोजेक्ट दोन्ही स्तर जोडते.\nथीम variables गोळा करा.\nॲनिमेशन सौम्य ठेवा.\nप्रवेश्यता सर्वत्र तपासा.\nदृष्य अंतिम निकाल जवळ.", code: `:root {
  --brand: #0f766e;
  --ink: #1c1c1c;
}`, codeLanguage: "css" },
      { title: "2. theme variables", content: "रंग आणि अंतर variables मध्ये.\nएका ठिकाणी बदल; सर्वत्र लागू.", code: `:root {
  --pad: 1rem;
  --radius: 8px;
}
.card {
  padding: var(--pad);
  border-radius: var(--radius);
}`, codeLanguage: "css" },
      { title: "3. container layout", content: "मुख्य पेज container-based करा.\n@container दोन अवस्था लिहा.\nsubgrid किंवा nested ग्रिड.\nरुंद आणि अरुंद जागा प्रतिसाद.\nकॉम्पोनेंट पुनरुपयोग साध्य.\nमोबाइल आणि डेस्कटॉप दोन्ही.", code: `.dash {
  container-type: inline-size;
}
@container (min-width: 640px) {
  .dash { grid-template-columns: 2fr 1fr; }
}`, codeLanguage: "css" },
      { title: "4. धीमे animation", content: "animation सौम्य आणि short ठेवा.\nreduced motion नियम पक्का.\nहालचाल अर्थासाठीच नको.\nसर्व browser चाचणी.", code: `@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; }
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "focus दृश्यमान ठेवा.\nlabel फॉर्मच्या ओळखीसाठी.\nभाषा मराठी स्पष्ट ठेवा.\nसराव पूर्ण करून घ्या.\nसर्वांसाठी दृश्य समान.", code: `a:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "6. अंतिम पॅकेजिंग", content: "सर्व नियम अंतिम क्रमवार पहा.\n@layer groups गोळा करा.\nजुने कोड वेगळा नाही.\nहे पूर्ण ताकदीने तपासा.\nदस्तऐवज रचना नोंदवा.\nसर्व संकल्पना समजला याची तपासणी करा.", code: `/* final check: cascade, support, a11y */
.card:has(.btn:hover) {
  outline: 2px solid var(--brand);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "variables थीम. container layout.\nरुचकर animation. a11y नियम.\nदोन्ही स्तरांतील ज्ञान एकत्र.", code: `:root { --brand: #0f766e; }
@container (min-width: 640px) {
  .cols { grid-template-columns: 2fr 1fr; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["प्रोजेक्ट काय जोडतो?", "reduced motion?", "container फायदा?"],
    quiz: [
      { question: "variables साठी?", options: ["एक ठिकाण", "अनेक", "नाही"], correct: 0 },
      { question: "@container करता?", options: ["रचना प्रतिसाद", "रंग", "नाव"], correct: 0 },
      { question: "a11y नियम?", options: ["focus contrast", "space", "verbose"], correct: 0 },
      { question: "reduced motion?", options: ["कमी हालचाल", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी पोर्टल अंतिम",
      starterCode: `:root { --brand: #0f766e; }`,
      expectedOutput: "Renders polished Marathi portal",
    },
    interviewQuestions: ["Level 2 काय वाढले?", "पुढे कुठे?"],
    related: ["css-masking-filters", "css-layout-methods"],
    prev: "css-masking-filters",
    next: "css-layout-methods",
    levelLabel: CSS2_LABEL,
  },];
