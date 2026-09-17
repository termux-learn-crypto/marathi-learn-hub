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
      { title: "1. custom property", content: "custom property म्हणजे CSS मध्ये आपले स्वतःचे चल (variable) — --brand सारखं नाव.\nदुप्पट dash (--) ने ते वेगळी ओळख निर्माण करते.\n:root वर घोषणा केली तर संपूर्ण पेजला ती मिळते.\nमूल्य #6366f1 सारखं एकदाच संग्रहित होतं.\nनंतर कुठेही वापरता येते; नाव अर्थपूर्ण ठेवा — रंग, अंतर, आकार.", code: `:root {
  --brand: #6366f1;
}`, codeLanguage: "css" },
      { title: "2. var एकत्र", content: "मूल्य वापरण्यासाठी var() function हवी.\nvar(--brand) म्हणजे तिथे #6366f1 बसेल.\nदोन वेळा हेक्स लिहिण्याऐवजी एक स्रोत — एकच नाव सर्वत्र.\nरंग बदलायचा तर फक्त :root मध्ये बदला; सर्वत्र आपोआप होतो.\nएक स्रोत — सुधारणा सोपी; टीममध्ये एकच भाषा.", code: `.btn {
  background: var(--brand);
  border-color: var(--brand);
}`, codeLanguage: "css" },
      { title: "3. वारसा नियम", content: "custom property वारसा तत्त्वावर चालते — मूल मुलांना मिळते.\n.card वर --radius: 12px.\n.card.large मध्ये --radius: 16px — फक्त मोठ्या card मध्ये बदल.\nआतील मुलांनी var(--radius) वापरलं तर त्यांचा आकारही बदलतो.\nएका पातळीवर बदल केला की खाली सर्वांवर परिणाम — थीमचा मूळ गांव.", code: `.card {
  --radius: 12px;
}
.card.large {
  --radius: 16px;
}`, codeLanguage: "css" },
      { title: "4. scope स्थान", content: "custom property फक्त एका घटकाच्या आतही परिभाषित करता येते — स्कोप.\n.card मध्ये --pad: 16px.\nआतच padding: var(--pad) वापरला.\nबाहेरचे घटक त्या मूल्यावर अवलंबून नाहीत; प्रत्येक स्वतंत्र.\nएकाच घटकाच्या आंतरिक जागा त्याच्यापुरती मर्यादित — रचना शुद्ध.", code: `.card {
  --pad: 16px;
  padding: var(--pad);
}`, codeLanguage: "css" },
      { title: "5. token गट", content: "एकाच ठिकाणी सर्व token गोळा करा — :root मधील व्यवस्था.\n--color-ink मजकूराचा रंग; --color-paper पार्श्वभूमी.\n--space-4: 16px हे अंतराच्या मालिकेतील एक पायर.\nनाव नियम: color- आणि space- असे उपसर्ग सातत्याने ठेवा.\nबदल एका ठिकाणी — देखभाल सोपी; पेजची सर्व शैली त्या मालिकेवर.", code: `:root {
  --color-ink: #0f172a;
  --color-paper: #ffffff;
  --space-4: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "custom property चा ब्राउझर आधार मजबूत — सर्व आधुनिक ब्राउझर.\nvar() चा दुसरा argument fallback: #6366f1.\n--brand उपलब्ध नसेल तर fallback वापरला जातो.\nजुन्या browser साठीही रंग सुरक्षित — वापर निर्धोक.\nfallback न दिल्यास अ-परिभाषित मूल्य अर्थहीन होते; म्हणून तो द्या.", code: `a {
  color: var(--brand, #6366f1);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता token चा पाया घालू — एकच रंग स्रोत.\n:root वर --brand: #0d9488 घोषित करा.\nतो रंग एका बटण आणि एका दुव्यावर वापरा.\nमग मूल्य बदलून पहा — दोन्ही ठिकाणी रंग बदलतो.\nएक स्रोत, अनेक वापर — हाच custom property चा सार.", code: `:root {
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
      { title: "1. var गॅच", content: "var() ची दुसरी जागा fallback म्हणून वापरली जाते.\nयेथे color: var(--ink, #0f172a).\n--ink ठरलं असेल तर ते; नाही तर #0f172a.\nमूल्य अजिबात उपलब्ध नसतानाच fallback काम करतो.\nfallback ने रंग नेहमी अचूक राहतो आणि कोड नरम राहतो.", code: `.btn {
  color: var(--ink, #0f172a);
}`, codeLanguage: "css" },
      { title: "2. रिक्त समस्या", content: "custom property ची value रिकामी असेल तर गंभीर अडचण उद्भवते.\nvar(--ink) ठीक; पण --ink असं रिकामं असल्यास नियम निकामी.\nvar(,) असा प्रकार चुकीचा; fallback रिकामा नको.\nfallback द्या म्हणजे रिकाम्या स्थितीतही शैली टिकते.\nकोड लिहिल्यावर एकदा तपासा — समस्या आधीच पकडा.", code: `.btn {
  color: var(--ink);
}`, codeLanguage: "css" },
      { title: "3. गुणधर्म अलग", content: "प्रत्येक गुणधर्माला स्वतंत्र नाव द्या — मिश्रण टाळा.\n.chip च्या background साठी --chip-bg; color साठी --chip-ink.\nदोन्ही var() त्यांच्या fallback सह.\nरंग वेगळे, अपवाद वेगळे — नियम स्वतंत्र.\nनावे स्पष्ट असल्याने संयोग सोपा; बदल एकाच ठिकाणी.", code: `.chip {
  background: var(--chip-bg, #f1f5f9);
  color: var(--chip-ink, #0f172a);
}`, codeLanguage: "css" },
      { title: "4. nested जोडणी", content: "var मध्ये var — एका token च्या आत दुसरा token.\n:root मध्ये --accent: var(--brand, #6366f1).\n--brand असेल तर त्याचा रंग; नाही तर #6366f1.\nअशा nested जोडणीने मूल्यांचा प्रवाह नियोजित राहतो.\nखोल जटिलता शक्य; पण शक्यतो साधी ठेवा — वाचता येईल.", code: `:root {
  --accent: var(--brand, #6366f1);
}`, codeLanguage: "css" },
      { title: "5. थीम स्विच", content: "थीम बदलणे म्हणजे token ची value बदलणे.\n:root[data-theme=dark] मध्ये --ink फिकट, --paper गडद निळा.\nनंतर टॉगलने data-theme बदलल्यावर दोन्ही रंग फिरतात.\nकोड एकच; केवळ token वेगळे — नियंत्रण वापरकर्त्याच्या हाती.\nlight आणि dark एकाच पेजमध्ये एकाच कोडवर चालतात.", code: `:root[data-theme="dark"] {
  --ink: #e2e8f0;
  --paper: #0f172a;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@property ने custom property ची व्याख्या मजबूत करता येते.\nsyntax लिहिला की मूल्याचं स्वरूप ठरतं — उदा. रंग.\nसुरुवात मूल्य आणि inherits घोषणा दिली जाते.\nअशी व्याख्या animation मध्येही नियंत्रित बदल देते.\nजुन्या browser आधार कमी; आज ते आधुनिक भाग — पुढे विस्तार.", code: `@property --brand {
  syntax: "<color>";
  initial-value: #6366f1;
  inherits: true;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता डार्क थीमचा छोटा token लावा.\n:root[data-mode=dark] मध्ये --paper: #0f172a द्या.\nमग एक बटण किंवा switch ने data-mode बदलवा.\nपार्श्वभूमी आणि मजकूर दोन्ही त्या token वर फिरतात.\nदोन रंग — प्रकाश आणि अंधार — एकाच स्विचने.", code: `:root[data-mode="dark"] {
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
      { title: "1. calc गणना", content: "calc() ब्राउझरला गणना करायला सांगते — एकके मिसळूनही.\nwidth: calc(100% - 260px) म्हणजे संपूर्ण रुंदी वजा 260px.\nएकाच गोष्टीची टक्केवारी आणि दुसऱ्याचे पिक्सेल — दोन्ही जोडता येतात.\nटक्केवारीसारख्या लवचिक मूल्याला स्थिर आकार सोबत जोडतो.\nब्राउझर गणना स्वतः करतो — UI सुरळीत आणि मोजमाप अचूक.", code: `.side {
  width: calc(100% - 260px);
}`, codeLanguage: "css" },
      { title: "2. space नियम", content: "calc मध्ये गणित चिन्हांच्या सभोवती space अत्यावश्यक.\ncalc(100vh - 80px) मध्ये वजाबाकी दोन्ही बाजूंनी मोकळी.\nजोड-वजा नेहमी space सह; गुणाकार शक्यतो space नको — जुना नियम.\nspace नसेल तर expression अमान्य होऊ शकते.\nकोड वाचताना चिन्ह स्पष्ट दिसतात — नियम नेमका.", code: `.box {
  height: calc(100vh - 80px);
}`, codeLanguage: "css" },
      { title: "3. मिश्र एकक", content: "calc मध्ये var() आणि थेट एकक मिळवता येतात.\nmargin-inline: calc(var(--space) + 4px).\n--space ने ठरवलेल्या अंतराला सदैव 4px जास्त.\ntoken बदलला तरी +4px कायम — तार्किक वाढ.\npx, rem, em अशी वेगवेगळी एकके मिसळतात; उत्तर ब्राउझर मोजतो.", code: `.gap {
  margin-inline: calc(var(--space) + 4px);
}`, codeLanguage: "css" },
      { title: "4. min max", content: "min() मूल्यांतला सर्वात लहान; max() सर्वात मोठा; clamp() दोन्हीचा तोल.\nh1 मध्ये font-size: clamp(1.5rem, 4vw, 3rem).\n4vw लवचिक — रुंदीनुसार फिरते; 1.5rem तळ आणि 3rem वर.\nअशी fluid typography — लहान पडद्यावर तळ, मोठ्यावर वर.\nmin/max ला अनेक मूल्ये; clamp ला नेमके तीन.", code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`, codeLanguage: "css" },
      { title: "5. calc आत var", content: "गणनामध्ये var() चा वापर गुणाकारासाठीही होतो.\npadding: calc(var(--pad) * 2) — --pad च्या दुप्पट.\n--pad 16px असेल तर 32px — अचूक.\nटोकन नीट राहतो; आवश्यक ठिकाणी गुणाकार जोडतो.\nगणना साधी ठेवा; जटिल expression वाचायला कठीण जातात.", code: `.card {
  padding: calc(var(--pad) * 2);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "calc चा आधार जुना — व्यापक आणि मजबूत.\nmin, max आणि clamp नवीन; पण आता सर्वत्र चांगला आधार.\nblock-size: clamp(60px, 12vh, 120px) — उंची लवचिक.\nprefix फार पूर्वी लागत असे; आज गरज नाही.\nसुरक्षित नियम — fallback आधी, नवे नियम नंतर.", code: `.fluid {
  block-size: clamp(60px, 12vh, 120px);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "hero च्या padding ला fluid मूल्ये लावून पहा.\npadding: clamp(24px, 6vw, 64px).\nलहान पडद्यावर 24px; मध्ये 6vw; मोठ्यावर 64px — क्रमाने.\nhero प्रत्येक रुंदीवर मोकळा आणि सुबक दिसतो.\nclamp म्हणजे एकच नियम अनेक पडद्यांसाठी — fluid design चा आरसा.", code: `.hero {
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
      { title: "1. keyframes रचना", content: "@keyframes मध्ये animation च्या पायऱ्या लिहितात — प्रवास कसा होईल.\nनाव (slide) आणि चरण: from म्हणजे सुरुवात, to म्हणजे शेवट.\nयेथे opacity 0 ते 1 — अदृश्य ते पूर्ण दिसणारं.\nमग animation गुणधर्माला ते नाव दिलं जातं.\nप्रतिशतांनी मधले चरणही लिहिता येतात — 50%, 75% असे.", code: `@keyframes slide {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "2. transform गृहीत", content: "animation लावताना वेळ आणि easing यांचे नियोजन महत्त्वाचं.\n.pop ला animation: slide 0.4s ease.\ntransform सारखे गुणधर्म स्वस्त — ब्राउझर जलद रंगवतो.\nपण margin सह animation जड होते — प्रत्येक frame लेआउट मोजतो.\nopacity सुद्धा सुरळीत — थरावर मऊ बदल.", code: `.pop {
  animation: slide 0.4s ease;
}`, codeLanguage: "css" },
      { title: "3. easing वेळ", content: "easing म्हणजे गतीचा स्वभाव — सुरुवात मंद? शेवट जोरदार?\nease-in-out मऊ; cubic-bezier ने नेमकं नियंत्रण मिळते.\n0.34, 1.56, 0.64, 1 सारख्या मूल्यांनी spring सारखी उसळी.\nease साधा; bezier ने नैसर्गिक गती — जीवंतपणा जाणवतो.\nगतीची भाषा डिझाइनचा भाग; जपून निवडा.", code: `.bouncy {
  animation: pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
      { title: "4. iteration दिशा", content: "animation किती वेळा आणि कशा दिशेने चालेल ते iteration आणि direction ठरवतात.\n.blink ला animation: pulse 1s infinite alternate.\ninfinite म्हणजे सतत; alternate म्हणजे आडापटीत वर-खाली.\nfill-mode ने कडा संभाळल्या जातात; delay लांबणीवर टाकतो.\nदिशा आणि गणना यांचे नियंत्रण — प्रभावांची विविधता.", code: `.blink {
  animation: pulse 1s ease-in-out infinite alternate;
}`, codeLanguage: "css" },
      { title: "5. steps चरण", content: "steps() गुळगुळीत नाही तर उड्या मारून प्रवास करतो.\nsteps(3) म्हणजे तीन धक्क्यांत बदल — टिक-टॉक सारखा.\nटकाटका, बार आणि रेकॉर्डरमध्ये हा effect छान बसतो.\nगुळगुळीतपेक्षा सांधे पाडणारी गती कधीच योग्य.\nएका steps मूल्याने दृश्यच वेगळं होतं.", code: `.tick {
  animation: stepy 0.6s steps(3) infinite;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "keyframes चा आधार सर्वत्र मजबूत — जुने browser सुद्धा चालवतात.\nपण प्रवेश्यता आधार: reduced motion चा वापरकर्ता.\n@media (prefers-reduced-motion: reduce) मध्ये animation नाही !important.\nसर्व animation थांबते; पेज स्थिर पण कार्यरत.\nगती द्या पण पर्यायही द्या — हीच संपूर्ण सवय.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता heart pulse तयार करा — एक नियम.\n.heart ला animation: pulse 0.8s ease-in-out infinite.\nपूर्वी @keyframes pulse परिभाषित करा — scale वर-खाली.\nहृदयाच्या स्पंदनासारखा ताल — जीव, गती.\nएकच नियम आणि keyframes चा पाया पक्का.", code: `.heart {
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
      { title: "1. media प्रश्न", content: "prefers-reduced-motion हा मीडिया प्रश्न वापरकर्त्याची गती सेटिंग वाचतो.\nवापरकर्त्याने हालचाल कमी निवडल्यास reduce मिळतो.\nशेवटची हमी म्हणून animation-duration: 0.01ms !important.\nअसंख्य animation लगेच संपतात — प्रभाव सूझूनही गती शांत.\nप्रवेश्यता CSS मध्येच बसवली — कोणतेही framework नको.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}`, codeLanguage: "css" },
      { title: "2. no-preference", content: "सामान्य गती no-preference ने ओळखली जाते.\nसुरुवातीला .tile ला transition: none दिला — सुरक्षित आधार.\nमग no-preference असल्यास transform transition 0.4s जोडला.\nगरज नसलेल्या वेळी गती संपूर्ण थांबते.\nदोन्ही कोड — मान्य आणि अ-मान्य — एकत्र राहतात.", code: `.tile {
  transition: none;
}
@media (prefers-reduced-motion: no-preference) {
  .tile {
    transition: transform 0.4s;
  }
}`, codeLanguage: "css" },
      { title: "3. color-scheme", content: "prefers-color-scheme वापरकर्त्याची थीम वाचतो — light किंवा dark.\ndark निवडल्यावर token ची मूल्ये फिरतात.\n--paper गडद; --ink फिकट — मजकूर वाचनीय.\nथीम स्वतःच निवडली जाते; पेज तदनुसार — वापरकर्त्याला आराम.\nरंग आणि पार्श्वभूमी दोन्ही CSS मध्येच ठरतात.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --paper: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "4. contrast तपास", content: "prefers-contrast अधिक फरकाची गरज ओळखते.\nसामग्रीत फरक कमी असल्यास more मध्ये border आणि ठळक नियम.\n.chip ला border: 2px solid currentColor — कडा स्पष्ट.\nदृष्टी आरामासाठी हा साधा नियम पुरेसा.\nवाचनीयता वाढवणं हेच ध्येय — दृष्टीची काळजी.", code: `@media (prefers-contrast: more) {
  .chip {
    border: 2px solid currentColor;
  }
}`, codeLanguage: "css" },
      { title: "5. scroll सवय", content: "scroll-behavior ने पेजवरील स्क्रोलचं वागणं नियंत्रित होते.\nआधार म्हणून html ला scroll-behavior: auto दिला.\nno-preference असल्यास smooth — मंद, गुळगुळीत सरकणे.\nअचानक उडी नाही — वर-खाली सुरळीत प्रवास.\nreduced ला auto कायम — झटका येत नाही.", code: `html {
  scroll-behavior: auto;
}
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "या media प्रश्नांचा आधार जुना — सर्वत्र चालतो.\nno-preference असल्यास फक्त fade-in ची animation.\nreduce वापरकर्त्यासाठी animation दिसत नाही — स्पष्ट स्थिरता.\nनियम कडक आणि सर्व browser वर एकसमान.\nप्रवेश्यता सोबत वाचनीयता — हीच Level ची सूचना.", code: `@media (prefers-reduced-motion: no-preference) {
  .fade {
    animation: fade-in 0.4s;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता scroll सवय योग्य करा — reduced ला आदर.\nhtml वर आधार म्हणून scroll-behavior: auto ठेवा.\nno-preference असल्यास smooth द्या.\nलांब पेज उघडा, वर-खाली करताना गती निरखा.\nएकच नियम आणि गती वापरकर्त्याच्या हाती — प्रवेश्यता.", code: `@media (prefers-reduced-motion: no-preference) {
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
      { title: "1. masonry कल्पना", content: "masonry म्हणजे Pinterest सारखी रचना — प्रत्येक card त्याच्या उंचीनुसार बसतो.\ngrid-template-rows: masonry ने ग्रिडला ही बुद्धी दिली.\nउंच आणि लहान card मोकळे वाया जात नाहीत.\nपिक्चर गॅलरी, नोट्स, feed — हे masonry चे क्षेत्र.\nआधार नवीन; वापरताना आधार तपासा.", code: `.masonry {
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "2. आधार fallback", content: "masonry नवा आधार — जुन्या ब्राउझरसाठी fallback जरूर.\nआधार साधा columns: 3 — मजकूर तीन स्तंभांत.\n@supports (grid-template-rows: masonry) मध्ये columns: unset.\nmasonry असल्यास columns काढून ग्रिड लागू होतो.\nदोन्ही कोड एकत्र — कोणत्याही browser साठी सुबक रचना.", code: `.masonry {
  columns: 3;
}
@supports (grid-template-rows: masonry) {
  .masonry {
    columns: unset;
  }
}`, codeLanguage: "css" },
      { title: "3. आयटम क्रम", content: "masonry किंवा columns मध्ये card चे तुकडे होऊ नयेत — break-inside: avoid.\n.card चा मजकूर स्तंभांत अर्धवट विभागला जात नाही.\nप्रत्येक card एका स्तंभात संपूर्ण राहतो.\nअशा नियमाने रचना प्रवाहात सुबक उभी राहते.\nवेगवेगळ्या उंचीचे card तोलाने दिसतात.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "4. रुंदी नियम", content: "ग्रिडने columns स्वतः ठरवले — repeat(auto-fill, minmax(220px, 1fr)).\nकिमान 220px हवे; जेवढे बसतात तेवढे स्तंभ.\nमोबाइलवर एक-दोन, टॅबलेटवर तीन-चार — रुंदी लवचिक.\nमुले पसरतात; रचना उसळत नाही.\nएकच नियम विविध स्क्रीन आकारांवर चालतो.", code: `.masonry {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "5. अंतर तोल", content: "masonry मध्येही अंतर gap नेच — साधं राहते.\ngap: 16px म्हणजे row आणि column अंतर दोन्ही.\nकार्डांमध्ये सर्वत्र समान जागा — दृष्य शांत.\nघट्ट अंतर रचना गोंधळते; मोकळे अंतर सुबक.\nकोड एक ओळ — संपूर्ण रचनेची मोजणी.", code: `.masonry {
  gap: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार निरीक्षण", content: "आधाराची उलट तपासणी @supports not ने होते.\nmasonry नसेल तर .masonry ला columns: 3 1 — जुनी साधी पद्धत.\nग्रिडही नाही; columns च्या प्रवाहाने रचना साकारते.\nआधार निरीक्षण म्हणजे सर्व browser सुरक्षित.\nmasonry यापुढे उपलब्ध तेव्हाच; बाकी जुना रस्ताच.", code: `@supports not (grid-template-rows: masonry) {
  .masonry {
    columns: 3 1;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "अशी gallery ची दुहेरी रचना करा — masonry आणि fallback columns.\n@supports च्या आत masonry ग्रिड द्या; बाहेर columns.\nrepeat(auto-fill, minmax(180px, 1fr)) — प्रत्येक रुंदीवर.\ncolumns: unset — masonry असल्यास साफ.\nएकच gallery दोन थरांत — आधार तपासणीचा सराव.", code: `@supports (grid-template-rows: masonry) {
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
      { title: "1. container नियम", content: "container-type म्हणजे कंटेनरची जागा ओळखण्याची सोय.\n.card मध्ये inline-size — कंटेनरची रुंदी मोजता येईल.\n@container ने त्या जागेनुसार मुलांना शैली मिळते.\nपडदा नव्हे तर घटक — मुलांचं स्वतःचं वातावरण.\nरुंदी बदलली की रचना बदलते; आधार नवीन.", code: `.card {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "2. नामांकित", content: "कंटेनरला नाव दिलं तर तपशीलवार क्वेरी लिहिता येते.\n.feed ला container-name: feed.\nमग @container feed (min-width: 400px) मध्ये मुलाची शैली.\nfeed रुंद होताच मुलांची शैली बदलते; बाहेरच्या कंटेनरला परिणाम नाही.\nएकाच भागाला नाव देऊन वेगळी व्यवस्था — नियंत्रण नेमकं.", code: `.feed { container-name: feed; }
@container feed (min-width: 400px) {
  .card {
    display: grid;
  }
}`, codeLanguage: "css" },
      { title: "3. सांगाडा शैली", content: "क्वेरीत मुलांची दिशा बदलता येते — flex-direction row/column.\nआधार शैली मुलांना सर्वत्र; क्वेरीत फक्त कंटेनर रुंद असेल तर.\n420px वर card आडवा दिसतो; त्याच्या खाली उभा.\nपुनर्वापर शक्य — एकच card अनेक जागांवर.\nरुंदीनुसार रचना स्वतः बदलते — container query चा खेळ.", code: `.card {
  container-type: inline-size;
}
@container (min-width: 420px) {
  .card {
    flex-direction: row;
  }
}`, codeLanguage: "css" },
      { title: "4. मर्यादा सादर", content: "media query पडद्याची रुंदी पाहते; container query स्वतःच्या कंटेनरची.\n.note ला container-type: inline-size दिल्याने.\nतो अरुंद sidebar मध्ये असेल आणि मोठ्या भागात — रचना वेगळी.\nmedia ने एकच जागा दिसते; container स्थान बदलताच बदलते.\nया कारणास्तव container query अधिक बारीक साधन ठरते.", code: `.note {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "5. style queries", content: "केवळ आकारच नाही तर token च्या value वरही क्वेरी करता येते.\n@container style(--theme: dark).\n--theme dark असल्यास .card ची पार्श्वभूमी गडद होते.\nवर्ग जोडण्याची गरज नाही — token स्वतःच नियंत्रण.\nआधुनिक सवय; वापर नेमक्या ठिकाणीच करा.", code: `@container style(--theme: dark) {
  .card {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "container query चा आधार नवीन — तपासणी आवश्यक.\n@supports (container-type: inline-size) च्या आत नियम.\nआधार असल्यासच ते लागू; नाही तर साधारण रचना.\nmedia query जुनी हमी आहे — तिचा आधार विसरू नका.\nप्रत्येक कंटेनरवर नियम एकसमान — दोन्ही साधने सोबत.", code: `@supports (container-type: inline-size) {
  .card {
    container-type: inline-size;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता note साठी एक क्वेरी लिहा.\n.note ला container-type: inline-size द्या.\nमग @container min-width सह मुलांची रचना बदलवा.\nती टीप छोट्या box मध्ये अरुंद, मोठ्यात रुंद होते.\nएकच component अनेक जागांवर — container query चा नमुना.", code: `.note {
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
      { title: "1. tokens रचना", content: "design token म्हणजे रंग, अंतर आणि आकार यांची standard मूल्ये — एकाच ठिकाणी.\n:root मध्ये --color-primary आणि --space-s अशी.\nनाव अर्थपूर्ण — प्राथमिक रंग, लहान जागा.\nसंपूर्ण पेज त्या मूल्यांवर अवलंबून — एकच स्रोत.\nकोड टिकाऊ आणि स्थिर राहतो.", code: `:root {
  --color-primary: #0d9488;
  --space-s: 8px;
}`, codeLanguage: "css" },
      { title: "2. नाव system", content: "अंतराची मालिका base पासून गुणाकाराने वाढत जाते.\n--space-base: 4px; --space-2: 8px; --space-4: 16px.\nप्रत्येक पायरी base चा गुणाकार — स्मरण सोपे.\nचार-चार च्या गणनेने प्रत्येक जागा ओळखता येते.\nहे नाव अभिमानी मालिका तयार केली की नवीन जागा मोजण्याची गरज नाही.", code: `:root {
  --space-base: 4px;
  --space-2: 8px;
  --space-4: 16px;
}`, codeLanguage: "css" },
      { title: "3. semantic tokens", content: "semantic token हे रंग काय आहे हे नाही; तो काय करतो हे सांगते.\n--color-ink-primary म्हणजे प्राथमिक मजकुराचा रंग.\nरंग मूल्य बदललं तरी नाव तसेच राहते.\nवापर करताना अर्थ स्पष्ट — कोणता token कोठे.\nरंग आणि अंतर यांची नावे — अर्थवाहक जबाबदारी.", code: `:root {
  --color-ink-primary: #0f172a;
}`, codeLanguage: "css" },
      { title: "4. थीम मॅप", content: "theme map म्हणजे token वरून थीमची रचना.\n:root[data-theme=dark] मध्ये fallback ने.\n--surface गडद; --text फिकट — मजकूर वाचण्यास.\nएकच token --text दोन्ही थीममध्ये योग्य रंग घेतो.\nथीम बदलली तर map फिरतो; कोड बदलत नाही.", code: `:root[data-theme="dark"] {
  --surface: #0f172a;
  --text: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "5. component props", content: "component स्वतःचे token मिळवायला परवाना देतो.\n.badge मध्ये background: var(--badge-bg, var(--color-primary)).\nबदल न केल्यास default प्राथमिक रंग.\nबदलायचे तर तेवढ्या घटकाला --badge-bg द्या.\nवारसा सोबत local override — देखभाल भागातच.", code: `.badge {
  background: var(--badge-bg, var(--color-primary));
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "token चा संग्रह सर्वत्र चांगलं काम करतो.\nvar() वापरामुळे प्रत्येक ओळ सुसंगत.\natomic — लहान टोकनचे थर एकत्र.\nबदल एकाच ठिकाणी — संपूर्ण पेज मानते.\nटीम समाधानी; Level चा पाया मजबूत.", code: `:root {
  --sp-1: 4px;
  --sp-2: 8px;
  --sp-3: 12px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता listing साठी एक token सेट करू.\n:root मध्ये --color-listing: #0284c7 द्या.\nसर्व listing शीर्षके त्या token ने सजवा.\nरंग बदलायचा तर एका ठिकाणी — listing चे सर्व भाग बदलतात.\nएक token आणि संपूर्ण listing एकसारखं दिसते.", code: `:root {
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
      { title: "1. conic मूलभूत", content: "linear-gradient सरळ फिरतो; conic-gradient कोनात फिरतो.\nकेंद्रापासून सभोवती रंग पसरतात.\n.loader मध्ये #22d3ee ते #0d9488 — संपूर्ण फेरा.\nकेंद्राभोवती रंग घुमतात — चक्रासारखा प्रवास.\nडायल, load आणि वर्तुळांच्या रचनेसाठी ideal.", code: `.loader {
  background: conic-gradient(#22d3ee, #0d9488);
}`, codeLanguage: "css" },
      { title: "2. टक्के थांबे", content: "conic gradient मध्ये टक्के रंग थांबण्याचे ठिकाण सांगतात.\n#6366f1 0 25% — पहिल्या 25% टक्यांचा भाग.\nमग #e2e8f0 25% 100% — उर्वरित जागा.\ndonut चे दोन्ही भाग — अशा प्रकारे ring तयार होतो.\nटक्के बदलून प्रत्येक भागाचे प्रमाण नियंत्रित होते.", code: `.donut {
  background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);
}`, codeLanguage: "css" },
      { title: "3. radial थर", content: "radial-gradient केंद्रातून बाहेर पसरतो — वर्तुळाने.\ncircle #f97316 ते transparent 70%.\nकेंद्र ठळक; कडा हळूवार लुप्त.\nglow सारखा नर्म चमक प्रभाव मिळतो.\nबटणाची झगमग आणि हेतू दाखवणारी पार्श्वभूमी — असे उपयोग.", code: `.glow {
  background: radial-gradient(circle, #f97316 0%, transparent 70%);
}`, codeLanguage: "css" },
      { title: "4. कंसात थर", content: "repeating-conic-gradient ने रंगाचे पट्टे नियमित फिरतात.\n0 15deg पहिला भाग; 15deg 30deg दुसरा.\nपट्ट्यांची चक्रदार नमुना — प्रत्येक 15 अंशाने बदल.\nmask आणि पार्श्वभूमी नमुन्यांसाठी अशी रचना उत्तम.\nआधार मध्यम; वापर काळजीने करा.", code: `.stripes {
  background: repeating-conic-gradient(#0ea5e9 0 15deg, transparent 15deg 30deg);
}`, codeLanguage: "css" },
      { title: "5. gradient प्रोजेक्ट", content: "एका gradient मध्ये अनेक रंग — 135deg चा फेरा.\n#f59e0b ते #ef4444 45% ते #8b5cf6.\nबटणांच्या जिवंत रंगांसाठी उत्तम — उठून दिसणारा प्रकाश.\nरंग गुळगुळीत मिसळतात; कडक सीमा नसतात.\nप्रत्येक थराची भूमिका आधी ठरवा — रचना शुद्ध राहते.", code: `.fund {
  background: linear-gradient(135deg, #f59e0b, #ef4444 45%, #8b5cf6);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "conic चा आधार चांगला; पण जुन्या browser साठी fallback.\nआधी .donut ला #e2e8f0 — साधा रंग.\n@supports (background: conic-gradient(...)) च्या आत खरे conic.\nआधार असल्यासच conic; नाही तर रंग.\nजुने webkit prefix आता कमी गरजेचे — रचना सुरक्षित.", code: `.donut {
  background: #e2e8f0;
}
@supports (background: conic-gradient(#fff 0 50%, #000 50% 100%)) {
  .donut {
    background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "donut ची निर्मिती करा — 40% आणि 60% चे भाग.\n.pie मध्ये conic: #6366f1 0 40%, #e2e8f0 40% 100%.\n40% निळा; 60% राखाडी.\nटक्के बदलून भागांचे प्रमाण सहज दाखवता येते.\nएकच नियम आणि तोलाचा माप — pie चार्ट तयार.", code: `.pie {
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
      { title: "1. nesting नियम", content: "CSS nesting मध्ये आतल्या घटकांच्या शैली पालकाच्याच खाली लिहितात.\n.card च्या आत & h3.\n& म्हणजे पालक — म्हणजे .card h3 चा अर्थ.\nकोड लहान; वाचन समीप — पालकाची शैली एकाच ठिकाणी.\nआधार नवीन — आधी तपासा.", code: `.card {
  & h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. & वापर", content: "pseudo-प्रकार :hover आणि :focus-visible मध्येही.\n.btn:hover — गती; .btn:focus-visible — फोकस कडा.\nएकत्र लिहिल्याने भिन्न निवडी स्पष्ट.\nCSS nesting च्या आत &:hover — अधिक संक्षेप.\nअचूक निवड आणि घट्ट नियम — रचना स्वच्छ.", code: `.btn:hover {
  background: #0891b2;
}
.btn:focus-visible {
  outline: 2px solid #0891b2;
}`, codeLanguage: "css" },
      { title: "3. @supports एकत्रीकरण", content: "अत्याधुनिक selector वापरताना आधार तपासणी सोबत.\n@supports (selector(:has(*))).\n:has उपलब्ध असल्यासच .card:has(h2) ची शैली.\nबाहेर जुनी शैली — कोणताही browser सुरक्षित.\nजुना कोड खराब होत नाही — संरक्षण स्थिर.", code: `@supports (selector(:has(*))) {
  .card:has(h2) {
    border-top: 3px solid #0ea5e9;
  }
}`, codeLanguage: "css" },
      { title: "4. :has निवड", content: ":has() संबंध तपासते — आत काही असेल का.\n.nav:has(a:hover) — nav मध्ये hover होत असलेला दुवा.\nमग nav ची पार्श्वभूमी बदलते — संपूर्ण भाग प्रतिक्रिया.\nअसे थर परस्पर — पालकाला मुलाची स्थिती कळते.\nआधार नवीन; वापर नेमका — छोटे प्रभाव.", code: `.nav:has(a:hover) {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "5. कुल विचार", content: "nesting खोल जाताना आधार आणि जटिलता तोल.\n.form .field:has(input:focus) — field फोकसवर बाह्य कडा.\nnesting depth लहान ठेवा — वाचता येईल.\ntoken वापरा; नावे स्पष्ट ठेवा.\nशैली नेटकी आणि रचना स्वच्छ — वाचनीयता.", code: `.form .field:has(input:focus) {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "आधार तपासल्यानंतर आधुनिक नियम ठीक.\n@media (width >= 768px) — नवीन संधी.\nजुने browser flat नियमांवर चालतात.\n:has आणि nesting असल्यास ही रचना वापरता येते.\nगणना स्थिर; कोड सभ्य आणि वाचता येण्याजोगा.", code: `@media (width >= 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता चित्र असलेल्या card ला खास शैली द्या.\n.card:has(img) — ज्या card मध्ये img असेल.\nत्याला border-radius: 14px.\nचित्र नसलेल्या card ला बदल नाही — निवड अचूक.\nएकच निवड आणि संबंध आधार — :has चा पाया.", code: `.card:has(img) {
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
      { title: "1. paint खर्च", content: "प्रत्येक गुणधर्म बदलताना ब्राउझरचा खर्च वेगळा असतो.\nbox-shadow आणि filter — जड प्रक्रिया.\ntransform साठी translateX/translateY — हलकी.\n.button:active मध्ये translateY(2px) — बटण दाबता येते.\nपेंट कमी — ब्राउझर गतीने रंगवतो; याची सवय गती वाढवते.", code: `.motion {
  transform: translateX(0);
}
.button:active {
  transform: translateY(2px);
}`, codeLanguage: "css" },
      { title: "2. layer हाताळणी", content: "will-change ब्राउझरला सांगतो — कोणता layer हवा.\n.sticky-nav ला position: sticky आणि will-change: transform.\nस्क्रोल करताना nav layer वर GPU स्थिर राहते.\nमर्यादित वापर — फक्त गरजेच्या भागाला.\nअनावश्यक will-change मेमरी वाढवतो — काळजी ठेवा.", code: `.sticky-nav {
  position: sticky;
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "3. animation गती", content: "लांब यादीत प्रत्येक item नियंत्रित — content-visibility auto.\nदूरचे item लादले जात नाहीत — लोड कमी.\ncontain-intrinsic-size: 0 64px — प्रत्येक item चा अंदाज.\nजो भाग दिसत नाही तो रंगवला जात नाही — paint नियंत्रण.\nतेज आणि प्रतिसाद — मोठ्या यादीसाठी परफॉर्मेंस.", code: `.long-list li {
  content-visibility: auto;
  contain-intrinsic-size: 0 64px;
}`, codeLanguage: "css" },
      { title: "4. layout कमी", content: "layout चा खर्च उघड — top-left बदलताना सर्व गणना.\ntransform वर हलवल्यास झटकन बदल — फक्त थर फिरतो.\n.slide ला translateX(0) आधार; .active मध्ये 40px.\nanimation गुळगुळीत — गणना कमी.\nसवय: layout वर हलवणे टाळा; transform वापरा.", code: `.slide {
  transform: translateX(0);
}
.slide.active {
  transform: translateX(40px);
}`, codeLanguage: "css" },
      { title: "5. contain पृथक", content: "contain पृथकता देते — widget ची गणना तिथेच संपते.\ncontain: layout paint — मांडणी आणि रंग दोन्ही.\nबाहेर कोणताही बदल widget ला परिणाम करत नाही.\nमोठ्या पेजवर या अलगीमुळे गणना जलद होते.\nप्रत्येक स्वतंत्र भाग वेगळा — सर्व काम सुरळीत राहते.", code: `.widget {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "6. DevTools सवय", content: "गती मोजायची असेल तर DevTools चा performance tab.\nrecord frame केले की सर्व paint आणि layout दिसते.\ntransform: translateZ(0) — जुनी युक्ती: layer तयार राहतो.\nमोजा, पहा, विश्लेषण करा — बदलाची दिशा नेमकी.\nशेवटचा नियम: प्रत्येक तपासणीनेच सुधारणा; लक्ष्य नेमके.", code: `.precise {
  transform: translateZ(0);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता प्रत्येक row ला पृथक गती द्या.\n.row ला contain: layout paint.\nमोठ्या पेजचे प्रत्येक row स्वतःमध्ये गणला जातो.\nscroll आणि अद्यतन — गणना जवळपासच.\nकोड एक ओळ आणि पेज तेज — perf चा पाया.", code: `.row {
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
      { title: "1. ध्येय", content: "आता Level 7 ची सर्व साधने एका portal मध्ये.\n:root वर --brand: #0d9488 आणि --surface: #ffffff.\nपुढील प्रत्येक शैली त्या token सह.\nथीम दोन्ही, container आणि masonry — सर्व संग्रह.\nएक पाया आणि संपूर्ण design system.", code: `:root {
  --brand: #0d9488;
  --surface: #ffffff;
}`, codeLanguage: "css" },
      { title: "2. tokens कार्य", content: "अंतराची मालिका आणि radius tokens — एकाच ठिकाणी.\n--space-2: 8px; --space-4: 16px.\n--radius: 12px — कोपऱ्यांची गोलपणा.\nप्रत्येक वापर त्या token ने; बदल एका जागी.\nव्यवस्था शुद्ध आणि मूल्ये अचूक.", code: `:root {
  --space-2: 8px;
  --space-4: 16px;
  --radius: 12px;
}`, codeLanguage: "css" },
      { title: "3. container लवचिक", content: ".panel ला container-type: inline-size दिला.\nआतला भाग रुंदीनुसार रचना बदलतो.\nमोबाइलवर अरुंद, मध्ये रुंद — प्रत्येक जागा.\nmedia नाही, container — स्थानानुसार.\nरचना टिकाऊ आणि दृश्य स्पष्ट.", code: `.panel {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "4. font थर", content: "मराठी अक्षरांचा stack चा थर येथेही.\n.panel ला font-family मालिका: Mukta, Noto Sans Devanagari, sans-serif.\nएकच stack संपूर्ण portal ला — एकसारखेपणा.\nfont आकार variable राहतो; आधार मजबूत.\nअक्षर शांत आणि वाचन सुरळीत.", code: `.panel {
  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;
}`, codeLanguage: "css" },
      { title: "5. masonry गॅलरी", content: "गॅलरीत masonry आणि fallback दोन्ही.\ncolumns: 2 जुना रस्ता.\n@supports (grid-template-rows: masonry) मध्ये grid आणि auto-fill.\nrepeat(auto-fill, minmax(180px, 1fr)) — लवचिक स्तंभ.\nउंच-लहान चित्रे सुबक तोल — design system चा भाग.", code: `.gallery {
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
      { title: "6. reduced मान्य", content: "शेवट: reduced motion ला मान.\nno-preference असल्यासच .panel:hover translateY(-2px).\nहलके उठाव — फक्त गती निवडलेल्यांसाठी.\nसंवाद स्थिर; वापरकर्ता नियंत्रण.\nटोकन, container, masonry — सगळे मिळून एक design system.", code: `@media (prefers-reduced-motion: no-preference) {
  .panel:hover {
    transform: translateY(-2px);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "portal चा गाभा तयार करा — grid आणि gap.\n.portal मध्ये display: grid आणि gap: var(--space-4).\nअंतर token वरून — बदल तेथेच.\nहेडर, मुख्य, gallery — प्रत्येक भाग व्यवस्थित.\nLevel 7 संपले — design system चा पाया मजबूत.", code: `.portal {
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
