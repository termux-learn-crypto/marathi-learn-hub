import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 4 — रंग, Movement आणि Control ===
export const CSS4_LABEL = "CSS · Level 4 — रंग, Movement आणि Control";

export const cssLevel4: Tutorial[] = [
  {
    slug: "css-color-mix-2",
    categoryId: "web",
    title: "Color Mix",
    marathiTitle: "color-mix — रंग मिश्रण",
    level: "advanced",
    minutes: 28,
    summary: "दोन रंगांचे प्रमाण टक्के, spaces आणि थीम रचना.",
    sections: [
      { title: "1. मिश्रण कल्पना", content: "color-mix दोन रंग जोडतो.\n\nटक्के नुसार प्रमाण नियंत्रित होते.\n\nरंग हा browser मध्येच मिसळतो.\n\nकोणत्याही preprocess शिवाय सुंदर.\n\nपॅलेट सहज बनते.\n\nगणना न करता नवे टोक मिळते.", code: `.hero-bg {
  background: color-mix(in srgb, #ff0000 60%, #0000ff);
}`, codeLanguage: "css" },
      { title: "2. टक्के संतुलन", content: "एकाचा टक्का वाढला की दुसरा कमी.\n\nदोघांची बेरीज नेहमी 100 असते.\n\nटोकदार रंग मिळवणे सोपे.\n\nहलका आणि गडद दोन्ही.\n\nप्रमाण हे नियम सांगते.\n\nप्रत्येक रंग दृष्टीने निवडा.", code: `.accent {
  background: color-mix(in srgb, teal 70%, gold 30%);
}`, codeLanguage: "css" },
      { title: "3. रंग space", content: "in srgb हा साधा आधार.\n\nlab आणि oklab सुधारणा देतात.\n\nlch मध्ये दिशा विशेष.\n\nप्रत्येक space चे अर्थ असतात.\n\nब्राउझर स्थिर वापरतो.", code: `.mix-lab {
  background: color-mix(in oklab, #10b981 55%, #f59e0b);
}`, codeLanguage: "css" },
      { title: "4. light-dark()", content: "light-dark() थीम सोबत नियम.\n\ncolor-scheme प्राथम्य असते.\n\nस्वयं समायोजन आधार मिळतो.\n\ndark कोड फिकट रंग घेते.\n\nभाषा सोपी राहते.\n\nथीम दोन रंग फक्त.", code: `:root {
  color-scheme: light dark;
}
.card {
  color: light-dark(#222, #f3f4f6);
}`, codeLanguage: "css" },
      { title: "5. रंग थीम", content: "थीम टोकांना mix ठेवा.\n\nमुख्य रंग आणि गौण तयार होतो.\n\nhover ने आधार वाढवा.\n\nकोणतीही दोन मूल्ये द्या.\n\nरचना सातत्याने जुळते.\n\nउत्पादन स्वरूप नवे दिसते.", code: `.theme-button {
  --base: #6366f1;
  background: color-mix(in srgb, var(--base), white 20%);
}`, codeLanguage: "css" },
      { title: "6. आधार आणि नियम", content: "आधार सर्वत्र नसतो.\n\nजुना रंग साधा ठेवा.\n\nआधुनिक ठिकाणी mix वापरा.\n\n@supports तपासणी सुरक्षा देते.\n\nपडद्यावर फरक पहा.\n\nसमतोल नियम पुढे चालतो.", code: `.legacy {
  background: #dbeafe;
}
@supports (color: color-mix(in srgb, red, blue)) {
  .new-card {
    background: color-mix(in srgb, #2563eb 80%, white);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "dark आणि light दोन्ही.\nमुख्य टोक निवडा.", code: `:root {
  color-scheme: light dark;
}
.swatch {
  background: color-mix(in oklab, #6366f1 60%, white);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["color-mix काय?", "light-dark() कसे?", "oklab मध्ये काय?"],
    quiz: [
      { question: "color-mix काय?", options: ["मिसळते", "बदलते", "लपवते"], correct: 0 },
      { question: "in srgb म्हणजे?", options: ["space", "नाव", "रूप"], correct: 0 },
      { question: "light-dark लागत?", options: ["color-scheme", "script", "class"], correct: 0 },
      { question: "टक्के बेरीज?", options: ["100", "50", "200"], correct: 0 },
    ],
    challenge: {
      prompt: "तीन colorspace वापरून नवीन पॅलेट. 5 card ने तपासा.",
      starterCode: `:root { color-scheme: light dark; }`,
      expectedOutput: "Renders five tinted swatch cards",
    },
    interviewQuestions: ["c", "o", "l", "o", "r", "-", "m", "i", "x", " ", "आ", "ध", "ा", "र", " ", "क", "ा", "य", "?"],
    related: ["css-relative-colors", "css-filter-effects", "css-aspect-ratio"],
    prev: "css-marathi-capstone3",
    next: "css-relative-colors",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-relative-colors",
    categoryId: "web",
    title: "Relative Colors",
    marathiTitle: "Relative colors — सापेक्ष रंग",
    level: "advanced",
    minutes: 28,
    summary: "channel calculations, from syntax आणि color() function.",
    sections: [
      { title: "1. सापेक्ष रंग", content: "सध्याच्या channel पासून नवा रंग.\nfrom रंग निवडत असतो.\nchannel बदलांना स्वतंत्रता.\nनवीन मूल्ये तरतूद होते.\nथीममध्ये रंग रूपांतर.\nअर्थ आणि सामर्थ्य बरे.", code: `.from-mix {
  background: rgb(from #4f46e5 r g b / 80%);
}`, codeLanguage: "css" },
      { title: "2. channel गणना", content: "calc मध्ये channel जोडता.\nप्रत्येक channel चे मूल्य हलते.\nहलकी सावली सोपी येते.\nटोक संतुलित राहते.", code: `.channel-dark {
  background: rgb(from #38bdf8 calc(r * 0.6) g b);
}`, codeLanguage: "css" },
      { title: "3. color() function", content: "color() ला नवीन spaces मिळतात.\ndisplay-p3 मध्ये रुंद रंग.\nchannel नावे function मध्ये.\nabsolute मूल्य शक्य.\nfuture paint तयार होते.", code: `.wide-color {
  color: color(display-p3 0.2 0.7 0.6);
}`, codeLanguage: "css" },
      { title: "4. हलका टोक", content: "from टोक आणि सुरुवात.\nविशिष्ट lightness राखतो.\nकार्डला तोल मिळतो.\nरंगाचा family साचतो.\nनिर्णय एके ठिकाणी.", code: `.tinted {
  background: hsl(from #facc15 h s calc(l + 20%));
}`, codeLanguage: "css" },
      { title: "5. अॅक्सेस नियम", content: "सापेक्ष रंग contrast ची काळजी घ्या.\nWCAG मध्ये minimum असतो.\nजुने नियम सुरक्षित का.\nपडद्यावर वाचता पहा.\nप्रत्येक स्थितीत मजकूर स्पष्ट.\nसमतोल आणि प्रवेश्यता दोन्ही.", code: `.safe-text {
  color: rgb(from #0f172a r g b);
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि fallback", content: "@supports सोबत वापर.\nजुन्या ब्राउझरला साधा रंग.\nmodifier तपासणी नियम.\ncolor() function वेगळे.\nजुने सर्वत्र चालते.", code: `.mod-ok {
  background: #0ea5e9;
}
@supports (color: rgb(from red r g b)) {
  .mod-ok {
    background: rgb(from #0ea5e9 calc(r + 10) g b);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एकाच accent टोकातून गट साधा.\nचार tints नियम.", code: `.base {
  --root: #0f766e;
}
.t1 {
  color: rgb(from var(--root) r g b / 30%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["from काय करतो?", "color() कसे?", "channel बदल काय?"],
    quiz: [
      { question: "rgb(from...) काय?", options: ["नवीन रंग", "जुना रंग", "नाव"], correct: 0 },
      { question: "channel कुठे?", options: ["calc मध्ये", "पुढे", "खाली"], correct: 0 },
      { question: "display-p3?", options: ["रुंद", "अरुंद", "साधा"], correct: 0 },
      { question: "आधार काय?", options: ["@supports", "@media", "@key"], correct: 0 },
    ],
    challenge: {
      prompt: "सात tints एक टोकातून बनवा.",
      starterCode: `:root { --brand: #7c3aed; }`,
      expectedOutput: "Renders a seven row tint ramp",
    },
    interviewQuestions: ["r", "e", "l", "a", "t", "i", "v", "e", " ", "c", "o", "l", "o", "r", " ", "अ", "र", "्", "थ", " ", "क", "ा", "य", "?"],
    related: ["css-color-mix", "css-filter-effects", "css-text-wrap"],
    prev: "css-color-mix",
    next: "css-text-wrap",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-text-wrap-2",
    categoryId: "web",
    title: "Text Wrap",
    marathiTitle: "text-wrap — मजकूर आकार",
    level: "advanced",
    minutes: 28,
    summary: "balance, pretty, overflow शब्द प्रवाह.",
    sections: [
      { title: "1. शीर्षक संतुलन", content: "text-wrap: balance नक्की करते.\nशीर्षक रेषा समान होतात.\nदोन ओळी सौंदर्याने.\nउपयोग चांगला शीर्षकांत.\nहे गुणधर्म साधा ठेवा.", code: `.h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
      { title: "2. शब्द प्रवाह", content: "overflow-wrap शब्द फोडते.\nसामान्य शब्द breakup करते.\nमर्यादित जागा सोपी.\nurl साठी हे आवश्यक.\nword-break वेगळा नियम.\nकोड मधून दिशा दिसते.", code: `.long-word {
  overflow-wrap: anywhere;
  inline-size: 220px;
}`, codeLanguage: "css" },
      { title: "3. discretionary बदल", content: "hyphens मराठीत कमी.\nशब्दकोश assets लागतो.\nजागा पडल्यावर फक्त.\nइतर भाषेत कार्य.\nआधार मर्यादित असतो.", code: `.just {
  hyphens: auto;
  overflow-wrap: break-word;
}`, codeLanguage: "css" },
      { title: "4. pretty संरेखन", content: "text-wrap: pretty शेवटची ओळ.\nलहान एकटा शब्द दूर होतो.\nमोठा परिच्छेद वापरा.\nवाचकाला आराम मिळतो.\nsummary संपते नीट.\nकिंचित वेग कमी पडे.", code: `article p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
      { title: "5. overflow खात्री", content: "टेबल मधले मजकूर पळतात.\nnowrap धारून ठेवते.\ntext-overflow ellipsis.\nhidden प्रमाणे सीमा.\nbutton ला एक ओळ.\nतारीख अभ्यास सोपा.", code: `.chip {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "balance सर्व नवीन.\nदीर्घ सहन नको.\n@supports ने तपासा.\nवाचनीयता नेहमी प्राथमिक.\nपडद्यावर तपासणी ठेवा.", code: `h2 {
  text-wrap: balance;
}
@supports not (text-wrap: balance) {
  h2 {
    margin-inline-end: 1em;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "बातमी ओळी संतुलित करा.\nसुंदर कार्ड तयार.", code: `.card h2 {
  text-wrap: balance;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["balance काय?", "ellipsis कसे?", "anywhere म्हणजे?"],
    quiz: [
      { question: "balance काय?", options: ["ओळी समान", "रेषा जाड", "रंग"], correct: 0 },
      { question: "text-overflow?", options: ["ellipsis", "color", "shadow"], correct: 0 },
      { question: "overflow-wrap?", options: ["शब्द फोड", "रंग", "अंतर"], correct: 0 },
      { question: "pretty कुठे?", options: ["परिच्छेद", "शीर्ष", "बटण"], correct: 0 },
    ],
    challenge: {
      prompt: "पाच शीर्षक balance तपासा.",
      starterCode: `h1 { text-wrap: balance; }`,
      expectedOutput: "Renders five balanced headings",
    },
    interviewQuestions: ["t", "e", "x", "t", "-", "w", "r", "a", "p", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-relative-colors", "css-aspect-ratio", "css-highlight-pseudo"],
    prev: "css-relative-colors",
    next: "css-scroll-snap",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-scroll-snap-3",
    categoryId: "web",
    title: "Scroll Snap",
    marathiTitle: "scroll-snap — स्क्रोल नियंत्रण",
    level: "advanced",
    minutes: 28,
    summary: "snap container, alignment आणि galleries.",
    sections: [
      { title: "1. snap कल्पना", content: "स्क्रोल उजव्या ठिकाणी थांबते.\nsnap close नियम जुळते.\nगॅलरी सुधारते.\nकोणत्याही दिशेत चालले.\nगुणधर्म एकत्र लागतात.", code: `.gallery {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "2. प्रकार निवड", content: "mandatory नियंत्रण जास्त घट्ट.\nproximity लवचिक राहते.\nलांब विभागात proximity.\nप्रत्येक पटल काळजी.\nआकार मोठा तर mandatory.\nअनुभव योग्य करा.", code: `.cards {
  scroll-snap-type: y proximity;
}`, codeLanguage: "css" },
      { title: "3. संरेखन", content: "snap-align मुलांना दिले जाते.\nstart मध्ये आरंभ.\ncenter मध्ये मध्य.\nend शेवटी सुसंगत.\nप्रत्येक card नवा नियम.\nपुढे दिशा ठरते.", code: `.card {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}`, codeLanguage: "css" },
      { title: "4. scroll padding", content: "scroll-padding अंतर देते.\nसर्व भागांना नव्हे.\nकार्ड मध्ये वेगळी.\nहेडर उंची मोजता.\nएकूण स्वरूप सुधारते.\nआधाराचा नियम असतो.", code: `.carousel {
  scroll-padding-inline: 16px;
}`, codeLanguage: "css" },
      { title: "5. दिशा आणि वेग", content: "दोन्ही दिशांमध्ये होते.\nनियंत्रण sensitive राहते.\nलहान मोठी गॅलरी तोल.\nsnap आणि आकार जपा.", code: `.grid {
  scroll-snap-type: both mandatory;
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "6. keyboard अनुभव", content: "कीबोर्ड ने स्क्रोल carousel चालते.\nsnap जागा स्पष्ट.\ntab सर्व चालते.\nfocus वेगळा दिसतो.\nreduce आदर राहतो.\nप्रवेश्यता सर्वत्र सुरुवात.", code: `a:focus-visible {
  outline: 2px dashed #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "image गॅलरी snap तयार.\nतीन images ठेवा.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
.gallery img {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["mandatory काय?", "align कुठे?", "padding काय?"],
    quiz: [
      { question: "snap-type कुठे?", options: ["container", "item", "root"], correct: 0 },
      { question: "align कुठे?", options: ["item", "container", "body"], correct: 0 },
      { question: "mandatory म्हणजे?", options: ["घट्ट", "मोकळा", "रंग"], correct: 0 },
      { question: "scroll-padding?", options: ["अंतर", "रंग", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "vertical timeline snap साधा.",
      starterCode: `.tl { scroll-snap-type: y mandatory; }`,
      expectedOutput: "Renders a snapping vertical timeline",
    },
    interviewQuestions: ["s", "n", "a", "p", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-text-wrap", "css-object-fit", "css-relative-colors"],
    prev: "css-text-wrap",
    next: "css-aspect-ratio",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-aspect-ratio",
    categoryId: "web",
    title: "Aspect Ratio",
    marathiTitle: "aspect-ratio — प्रमाण जपणे",
    level: "advanced",
    minutes: 28,
    summary: "ratio control, intrinsic sizing आणि media holders.",
    sections: [
      { title: "1. प्रमाण भावना", content: "aspect-ratio उंची रुंदी दर ठरवते.\nvideo 16/9 सारखा.\nimage साठी पूर्व जागा.\nlayout हलत नाही.\nसाधा गुणधर्म वापरा.", code: `.video {
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. नैसर्गिक आकार", content: "image ला दोन्ही dimensions असतात.\nमग ratio ऐतिहासिक.\nकसलेही element ने घ्या.\nbackground पेक्षा साधा.", code: `.box {
  aspect-ratio: 1 / 1;
  width: 120px;
}`, codeLanguage: "css" },
      { title: "3. आरक्षित जागा", content: "प्रतिमा लोड होण्याआधी ratio राखतो.\nजागा पडत नाही.\nवाचकाला आराम.\nsource बदलले तरी थर.", code: `.hero-img {
  aspect-ratio: 4 / 3;
  background: #e2e8f0;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "4. mobile संरेखन", content: "पोर्ट्रेट झाल्यावर ratio बदलता.\nmedia queries ने नवे.\nलहान पडदा जास्त उभा.\nकॉन्टेंट तुटत नाही.\nवेगवेगळे स्वरूप शक्य.\nउदाहरण प्रयोग पहा.", code: `@media (max-width: 480px) {
  .media {
    aspect-ratio: 4 / 5;
  }
}`, codeLanguage: "css" },
      { title: "5. ग्रिड जुळणी", content: "ग्रिड मधले card समान.\nसर्व ratio एकच आधी.\nobject-fit पाठवा.\nआकार जागा भरतो.\nक्रोमवर दिसते.", code: `.tile img {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "6. अचूक व्यवस्था", content: "height लिहायची गरज नाही.\nborder आणि padding मोजा.\nbox-sizing ने आकडा.\nflex मधले नियम.\nसुटू नये म्हणून ठेवा.", code: `.wrap {
  display: flex;
  gap: 12px;
}
.wrap img {
  aspect-ratio: 3 / 2;
  flex: 1;
  min-width: 0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "video card ग्रिड तयार.", code: `.video-card {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["ratio काय?", "mini कुठे?", "object-fit?"],
    quiz: [
      { question: "aspect-ratio?", options: ["width/height", "color", "gap"], correct: 0 },
      { question: "16 / 9 कुठे?", options: ["video", "font", "margin"], correct: 0 },
      { question: "object-fit?", options: ["cover", "bold", "none"], correct: 0 },
      { question: "scroll जंप?", options: ["टळते", "वाढते", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "हेडर बॅनर 21/9 तयार.",
      starterCode: `.banner { aspect-ratio: 21 / 9; width: 100%; }`,
      expectedOutput: "Renders a wide 21:9 banner",
    },
    interviewQuestions: ["r", "a", "t", "i", "o", " ", "उ", "प", "य", "ो", "ग", " ", "क", "ा", "य", "?"],
    related: ["css-scroll-snap", "css-object-fit", "css-color-mix"],
    prev: "css-scroll-snap",
    next: "css-motion-path",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-motion-path-2",
    categoryId: "web",
    title: "Motion Path",
    marathiTitle: "motion-path — हालचाल मार्ग",
    level: "advanced",
    minutes: 28,
    summary: "offset path, distance आणि लांब गती.",
    sections: [
      { title: "1. मार्ग कल्पना", content: "offset-path घटकाला मार्ग देतो.\nहालचाल दिशा जपते.\nनवीन तंत्र हे.\nप्रयोगाने स्पष्ट.", code: `.plane {
  offset-path: path("M10 80 C 40 10, 65 10, 95 80");
  offset-distance: 0%;
}`, codeLanguage: "css" },
      { title: "2. अंतर नियंत्रण", content: "offset-distance टक्के मध्ये.\n0 पर्यंत आरंभ.\n100 शेवट.\nanimation मध्ये लांब प्रवास.\nगुळगुळीत बदल.\nमार्ग वेळ फिक्स.", code: `.dot {
  offset-path: circle(50px at 50% 50%);
  animation: spin 3s linear infinite;
}`, codeLanguage: "css" },
      { title: "3. फिरणे दिशा", content: "offset-rotate दिशा ठरवते.\nauto वक्र कडे वाकते.\nreverse opposite.\nnumber निश्चित pose.\nमार्ग ठीक दिसणे.", code: `.car {
  offset-path: path("M20 20 L 200 80");
  offset-rotate: auto;
}`, codeLanguage: "css" },
      { title: "4. विलंब आणि वेगमान", content: "काही टक्के चालू.\nanimation-delay वाढवा.\nप्रत्येक घटक मागे.\nkeyframes सोबत नियोजन.", code: `.layer {
  offset-path: path("M0 100 C 40 20, 60 20, 100 100");
  animation: travel 4s ease-in-out infinite;
}`, codeLanguage: "css" },
      { title: "5. कामगिरी", content: "path लांब. लवकर तपासा.\nहलकी निरपेक्ष.\nजुने पडत नाही.\nreduced motion आदर.\nबऱ्याच ठिकाणी नको.", code: `@media (prefers-reduced-motion: reduce) {
  .plane {
    animation: none;
    offset-distance: 100%;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "offset-path आधार मध्यम.\n@supports तपासा.\nजुने साधे ठिकाण.\nprogressive अपग्रेड.\nनवीन स्थान खुलवते.", code: `.fallback {
  transform: translateX(40px);
}
@supports (offset-path: none) {
  .fallback {
    transform: none;
    offset-path: path("M0 0 L 80 40");
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "लूप सोबत गोल चक्र.", code: `.orbit {
  offset-path: circle(90px at 50% 50%);
  animation: go 6s linear infinite;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["offset-path काय?", "rotate कसे?", "आधार?"],
    quiz: [
      { question: "offset-path?", options: ["मार्ग", "रंग", "फॉन्ट"], correct: 0 },
      { question: "offset-distance?", options: ["टक्के", "किलो", "ग्रॅम"], correct: 0 },
      { question: "auto म्हणजे?", options: ["दिशा", "नाव", "क्रम"], correct: 0 },
      { question: "reduced काय?", options: ["कमी", "वाढ", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "बटण burst path तयार.",
      starterCode: `.btn { offset-path: path("M0 0 H 80"); }`,
      expectedOutput: "Renders a button travelling a short path",
    },
    interviewQuestions: ["m", "o", "t", "i", "o", "n", " ", "p", "a", "t", "h", " ", "क", "स", "े", " ", "क", "ा", "र", "्", "य", "?"],
    related: ["css-aspect-ratio", "css-filter-effects", "css-scroll-snap"],
    prev: "css-aspect-ratio",
    next: "css-object-fit",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-object-fit",
    categoryId: "web",
    title: "Object Fit",
    marathiTitle: "object-fit — माध्यम गठन",
    level: "advanced",
    minutes: 28,
    summary: "cover, contain आणि image जागा नियंत्रण.",
    sections: [
      { title: "1. माध्यम आकार", content: "object-fit image कसे बसते ठरवते.\nदिलेल्या आकारापेक्षा image भिन्न.\nvideo पेक्षा image अधिक.\nगॅलरीत हे सुंदर.\ndefault fill पूर्ण खिचते.\ndefault सर्व ठिकाणी जुळते.", code: `.thumb {
  width: 160px;
  height: 160px;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "2. cover नियम", content: "cover भाग कापतो.\nअधिक तपशील राहतो.\nआकारांतून जातो.\nप्रत्येक image नवा विचार.\nछेद अचूक पहा.", code: `.cover {
  object-fit: cover;
  object-position: center;
}`, codeLanguage: "css" },
      { title: "3. contain पर्याय", content: "designer नियंत्रण.\nलोगो साठी अचूक.", code: `.logo {
  object-fit: contain;
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "4. object-position", content: "object-position फोकस हलवते.\ntop left center सर्व.\nफोटोची बाजू लक्षात.\nकॅप्शन उजवीकडे.", code: `.portrait {
  object-fit: cover;
  object-position: 20% 80%;
}`, codeLanguage: "css" },
      { title: "5. गॅलरी जुळणी", content: "ग्रिड सर्व square.\nप्रत्येक image cover.\nआकार एकसमान.\nimage क्रॉप सुंदर.\nमोठा थर छान.\nजुळणीने pages सरळ.", code: `.tile {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "6. आधार बदल", content: "object-fit आधार रुंद.\nजुने काही विशेष नाही.\nव्हिडिओ मध्ये ratio.\nकोणताही script नको.\nप्रत्येक तपासणी नेमकी.", code: `.media {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोफाइल ग्रिड circle.\nimages cover तपासा.", code: `.avatar {
  width: 96px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["cover काय?", "contain केव्हा?", "position कसे?"],
    quiz: [
      { question: "object-fit?", options: ["क्रॉप", "रंग", "नाव"], correct: 0 },
      { question: "cover म्हणजे?", options: ["कापतो", "संपतो", "वाढ"], correct: 0 },
      { question: "contain?", options: ["संपूर्ण", "अर्धा", "नाही"], correct: 0 },
      { question: "object-position?", options: ["फोकस", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "चार image टाइल ग्रिड.",
      starterCode: `.tile { aspect-ratio: 1; object-fit: cover; }`,
      expectedOutput: "Renders a 2x2 square image grid",
    },
    interviewQuestions: ["o", "b", "j", "e", "c", "t", "-", "f", "i", "t", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-aspect-ratio", "css-filter-effects", "css-scroll-snap"],
    prev: "css-motion-path",
    next: "css-filter-effects",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-filter-effects",
    categoryId: "web",
    title: "Filter Effects",
    marathiTitle: "filter — दृश्य प्रभाव",
    level: "advanced",
    minutes: 28,
    summary: "blur, contrast, drop-shadow आणि backdrop फिल्टर.",
    sections: [
      { title: "1. फिल्टर कल्पना", content: "filter घटकाला दृश्य बदलतो.\nblur हलके पडदे.\ncontrast स्पष्टता देतो.\nपूर्ण element वर प्रभाव.\nएकत्र जोडता येतो.\nप्रत्येक ठिकाणी नको.", code: `.soft {
  filter: blur(2px);
}`, codeLanguage: "css" },
      { title: "2. blur आणि contrast", content: "blur प्रमाण वाढू नये.\nsepia उबदार.\nsaturate रंग लाभ.\nसंपूर्ण संयोजन शक्य.", code: `.photo {
  filter: grayscale(40%) contrast(1.05) blur(0.5px);
}`, codeLanguage: "css" },
      { title: "3. drop-shadow", content: "drop-shadow आकारानुसार सावली.\nbox-shadow आतून बाहेर.\nअल्फा पारदर्शकता जपते.\npath सोबत जुळते.\nसावली आकार प्रमाणे.", code: `.icon {
  filter: drop-shadow(0 4px 6px rgb(0 0 0 / 25%));
}`, codeLanguage: "css" },
      { title: "4. grayscale देखावा", content: "grayscale 100 निःसंदिग्ध.\nhover ने रंग परत.\nआकर्षक effect.\nआधार सर्वत्र.", code: `img.gr {
  filter: grayscale(100%);
  transition: filter 0.4s;
}
img.gr:hover {
  filter: grayscale(0%);
}`, codeLanguage: "css" },
      { title: "5. backdrop-filter", content: "मागील भाग blur.\nहेडर glass प्रभाव.\nआधार नवीन.\ntext वाचता राहतो.", code: `.glass {
  backdrop-filter: blur(10px);
  background: rgb(255 255 255 / 40%);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी सावधानता", content: "फिल्टर paint जड असतात.\nentire page नको.", code: `.tiny {
  filter: blur(1.5px);
  will-change: filter;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "hero image filter थर.\ndark overlay तपासा.", code: `.hero {
  filter: brightness(0.8) saturate(1.2);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["filter काय?", "drop-shadow कसे?", "backdrop कुठे?"],
    quiz: [
      { question: "filter?", options: ["दृश्य", "आवाज", "कोड"], correct: 0 },
      { question: "blur?", options: ["धूसर", "तिखट", "मोठा"], correct: 0 },
      { question: "drop-shadow?", options: ["आकार", "कोपरा", "रेष"], correct: 0 },
      { question: "backdrop-filter?", options: ["मागील", "पुढील", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "ग्लास हेडर तयार.",
      starterCode: `.header { backdrop-filter: blur(8px); background: rgb(255 255 255 / 40%); }`,
      expectedOutput: "Renders a frosted glass header",
    },
    interviewQuestions: ["f", "i", "l", "t", "e", "r", " ", "क", "ा", "म", "ग", "ि", "र", "ी", "?"],
    related: ["css-color-mix", "css-relative-colors", "css-object-fit"],
    prev: "css-object-fit",
    next: "css-style-queries",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-style-queries",
    categoryId: "web",
    title: "Style Queries",
    marathiTitle: "style() — शैली प्रश्न",
    level: "advanced",
    minutes: 28,
    summary: "@container style() नियम आणि variants.",
    sections: [
      { title: "1. शैली प्रश्न", content: "@container style() शैली तपासते.\nआकार नाही, style विचारते.\ncustom property वजन.\nकंटेनर गरज असेल.\nहे नवे घटक.\nstyle() नियम सरावाने पक्के होते.\nstyle() नियम पाया मजबूत आहे.\nstyle() नियम आज विषय आत्मसात करा.", code: `@container style(--theme: neon) {
  .card {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. custom property", content: "style queries variable वर.\nमूल्य असलेच तर नियम.\nfunction वगळता साधा.\nकंडिशन boolean.\nनवीन value नवा रूप.\nलहान रचना जागे.", code: `.theme[data-mode="night"] {
  container-name: card;
}
@container style(--mode: night) {
  .card {
    color: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "3. संयोजन नियम", content: "दोन अटी सोबत.\nप्रत्येक query वेगळा.\nनियम गोंधळ नको.\norder मध्ये बरोबर.\nसंतुलन राखतो.", code: `@container card style(--tone: warm) and (min-width: 300px) {
  .card {
    border-left: 6px solid #f59e0b;
  }
}`, codeLanguage: "css" },
      { title: "4. variant नियंत्रण", content: "तिसरा variant सोपा.\npropagate ला लेबल.\nकन्स्टंट style राहते.\nकोड गोंधळ नाही.\nreadability वाढते.\nphase पक्की होते.", code: `@container style(--layout: grid) {
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}`, codeLanguage: "css" },
      { title: "5. आधार", content: "style queries नवीन.\nआधार वाढतो.\n@container तपासणी.\nजुने सर्वत्र चालते.\nगरज पडल्यास class.", code: `.fallback-grid {
  display: block;
}
@container style(--layout: grid) {
  .fallback-grid {
    display: grid;
  }
}`, codeLanguage: "css" },
      { title: "6. नियम संतुलन", content: "style queries कमी वापरा.\nसाधे class जास्त.\ncomplex टाळा.\nतपासणी नेहमी कठोर.\nकोड वाचनीय ठेवा.", code: `/* keep it simple */
.card {
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन variant card ग्रिड.\nstyle तपासणी जोडा.", code: `@container style(--theme: neon) {
  .card {
    font-family: monospace;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["style() काय?", "कंटेनर कुठे?", "आधार?"],
    quiz: [
      { question: "style()?", options: ["शैली", "आकार", "रंग"], correct: 0 },
      { question: "कंटेनर काय?", options: ["नाव", "रंग", "फॉन्ट"], correct: 0 },
      { question: "custom property कुठे?", options: ["style()", "@media", "@key"], correct: 0 },
      { question: "आधार?", options: ["नवीन", "जुना", "सर्व"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन theme ग्रिड बनवा.",
      starterCode: `@container style(--theme: dark) { .grid { background: #111; } }`,
      expectedOutput: "Renders two styled grids from a theme variable",
    },
    interviewQuestions: ["s", "t", "y", "l", "e", " ", "q", "u", "e", "r", "i", "e", "s", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-relative-colors", "css-filter-effects", "css-text-wrap"],
    prev: "css-filter-effects",
    next: "css-highlight-pseudo",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-highlight-pseudo",
    categoryId: "web",
    title: "Highlight Pseudo",
    marathiTitle: "highlight — निवड प्रकाश",
    level: "advanced",
    minutes: 28,
    summary: "::selection, ::highlight आणि शब्द अधोरेखित.",
    sections: [
      { title: "1. निवड रंग", content: "::selection निवडलेला मजकूर.\nरंग आणि background.\nनिवड पूर्ण भरतो.\nप्रत्येक सवय ठीक.\ntext shadow नको.", code: `::selection {
  background: #fbbf24;
  color: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. ::highlight", content: "::highlight JS ने नावे.\ndocument highlight जोडतो.\ncombined नियम सोपे.\nकाहीना आधार नाही.", code: `::highlight(search-term) {
  background: #c7d2fe;
  color: #172554;
}`, codeLanguage: "css" },
      { title: "3. शब्द अधोरेखित", content: "::spelling-error त्रुटी दर्शवतो.\nलाल तरंग.\n::grammar-error व्याकरण.\nकाही browsers नाहीत.\nगरज असेल तेव्हा.\nसद्य गरजेसाठी.", code: `::spelling-error {
  text-decoration: underline wavy red;
}`, codeLanguage: "css" },
      { title: "4. caret रंग", content: "caret-color cursor रंग.\ninput मध्ये स्पष्ट.\ndefault black पेक्षा.\nbrand सह जुळवा.\nfocus अधिक ओळखी.\nलहान तपशील छान.", code: `textarea {
  caret-color: #7c3aed;
}`, codeLanguage: "css" },
      { title: "5. संयोग प्रभाव", content: "सगळे एकत्र जोडता.\nselection + caret.", code: `::selection {
  background: #a5f3fc;
  color: #083344;
}
input {
  caret-color: #0891b2;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "::selection आधार घट्ट.\n::highlight नवीन.\nजुना dark नियम ठीक.\nप्रवेश्यता दृष्टीने.\nरंग काळजी घ्या.\ncontrast नेहमी जपा.", code: `@media (prefers-color-scheme: dark) {
  ::selection {
    background: #fde047;
    color: #1e293b;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "निवड रंग theme तयार.\ncaret जोडा.", code: `::selection {
  background: #6366f1;
  color: #fff;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["::selection काय?", "highlight कसे?", "caret?"],
    quiz: [
      { question: "::selection?", options: ["निवड", "लिंक", "इमेज"], correct: 0 },
      { question: "::highlight?", options: ["नाव", "रंग", "आकार"], correct: 0 },
      { question: "caret-color?", options: ["cursor", "border", "margin"], correct: 0 },
      { question: "spelling-error?", options: ["त्रुटी", "फॉन्ट", "काठा"], correct: 0 },
    ],
    challenge: {
      prompt: "search highlight demo.",
      starterCode: `::highlight(match) { background: #fde68a; }`,
      expectedOutput: "Renders highlighted search matches",
    },
    interviewQuestions: ["h", "i", "g", "h", "l", "i", "g", "h", "t", " ", "प", "्", "र", "व", "े", "श", "्", "य", "त", "ा", "?"],
    related: ["css-text-wrap", "css-focus-visible", "css-relative-colors"],
    prev: "css-style-queries",
    next: "css-focus-visible",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-focus-visible-3",
    categoryId: "web",
    title: "Focus Visible",
    marathiTitle: "focus-visible — कीबोर्ड भेद",
    level: "advanced",
    minutes: 28,
    summary: ":focus-visible, outline नियम आणि keyboard UX.",
    sections: [
      { title: "1. focus स्थिती", content: "element focus संपादित होते.\nटॅब ने keyboard येते.\nमाउस क्लिक वेगळी.\nदृश्य सूचना गरज.\nप्रत्येक क्रियेला उत्तर.\nस्पष्टता सर्वांसाठी.", code: `a:focus {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "2. :focus-visible भेद", content: ":focus-visible keyboard दिसते.\nमाउस साठी नाही.\nनियम अचूक असतो.\nनवीन नाव लक्षात.", code: `a:focus-visible {
  outline: 3px solid #16a34a;
}`, codeLanguage: "css" },
      { title: "3. outline सानुकूल", content: "outline कडक दिसतो.\ncolor आणि offset नियंत्रण.\nborder-radius सोबत.\ndashed किंवा solid.\nअचूक नियम तयार.", code: `.card:focus-visible {
  outline: 3px dashed #f59e0b;
  outline-offset: 4px;
}`, codeLanguage: "css" },
      { title: "4. :has() सोबत", content: ":has() मध्ये focus-visible.\nparent दर्शवतो.\ncard आतला भाग.\nरचना सुरक्षित.\nअनेक आकार एकत्र.\nहे आधुनिक नियम.\n:has() सह screen reader ते वाचते.\n:has() सह शुद्ध वेब बनतो.", code: `.card:has(a:focus-visible) {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "5. keyboard UX", content: "focus सूचना दृश्य.\nमोठी keyboard भाग.\nप्रत्येक घटक नियम.", code: `button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि सवय", content: ":focus-visible आधार उत्तम.\nजुने :focus सोबत.\n:focus पूर्ण replace.\nदोन्ही लिहिता.\nप्रत्येक ब्राउझर चांगले.\nवाचनीय राहते.\nजुने :focus धडा आत्मसात झाला.\nजुने :focus काम उपयुक्त आहे.", code: `a:focus {
  outline: 2px solid;
}
a:focus-visible {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "फॉर्म focus ring तयार.\nसर्व input तपासा.", code: `input:focus-visible {
  outline: 2px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["focus काय?", "focus-visible कसे?", "outline?"],
    quiz: [
      { question: "focus-visible?", options: ["keyboard", "mouse", "touch"], correct: 0 },
      { question: "outline कुठे?", options: ["नियम", "रंग", "margin"], correct: 0 },
      { question: ":has() काय?", options: ["parent", "child", "ते"], correct: 0 },
      { question: "outline-offset?", options: ["अंतर", "रंग", "जाड"], correct: 0 },
    ],
    challenge: {
      prompt: "सर्व card keyboard नेव्हिगेट तपासा.",
      starterCode: `.card:has(a:focus-visible) { outline: 2px solid #2563eb; }`,
      expectedOutput: "Renders a focus ring on keyboard-only focus",
    },
    interviewQuestions: ["f", "o", "c", "u", "s", "-", "v", "i", "s", "i", "b", "l", "e", " ", "प", "्", "र", "व", "े", "श", "्", "य", "त", "ा", "?"],
    related: ["css-scroll-snap", "css-highlight-pseudo", "css-color-mix"],
    prev: "css-highlight-pseudo",
    next: "css-marathi-capstone4",
    levelLabel: CSS4_LABEL,
  },
  {
    slug: "css-marathi-capstone4",
    categoryId: "web",
    title: "Marathi Capstone 4",
    marathiTitle: "Editorial portal — अंतिम प्रकल्प",
    level: "advanced",
    minutes: 28,
    summary: "सर्व Level 4 तंत्रांचा एकत्र संग्रह.",
    sections: [
      { title: "1. ध्येय", content: "editorial portal एक पेज.\nस्नॅप गॅलरी.\nप्रत्येक भाग Level 4.\nअंतिम देखावा खुला.\nहे पूर्ण प्रकल्प.", code: `:root {
  --brand: #7c3aed;
  color-scheme: light dark;
}`, codeLanguage: "css" },
      { title: "2. पॅलेट रचना", content: "color-mix ने टोक वाढवा.\nlight-dark थीम.\nकंट्रास्ट नेहमी.\nटोकांचा गट सारखा.\nवाचन स्पष्ट राहील.", code: `.theme-accent {
  background: color-mix(in oklab, var(--brand) 70%, white);
}`, codeLanguage: "css" },
      { title: "3. स्नॅप गॅलरी", content: "image row scroll-snap.\nप्रत्येक frame cover.\ncaption center.\nकीबोर्ड साठी focus.\nगॅलरी प्रभावी.", code: `.showcase {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.showcase figure {
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "4. प्रमाण आणि मार्ग", content: "hero video 16/9.\norbit मध्ये dot हलते.\nmotion-path साजरे.\nप्रमाण जागा राखतो.\nreduced motion आदर.\nहलके animation.", code: `.hero-frame {
  aspect-ratio: 16 / 9;
}
.orbit-dot {
  offset-path: circle(40px at 50% 50%);
  animation: drift 8s infinite;
}`, codeLanguage: "css" },
      { title: "5. highlight आणि focus", content: "::selection brand रंग.\ncaret स्पष्ट.\n:focus-visible ring.\nसर्व keyboard चालते.\nप्रवेश्यता मुख्य.\nनिवड पडण्यास उजळ.", code: `::selection {
  background: #fde047;
  color: #1e293b;
}
:focus-visible {
  outline: 3px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "6. कामगिरी अंतिम", content: "content-visibility वापर.\nसर्व तपासणी नक्की.", code: `@media (prefers-reduced-motion: reduce) {
  .orbit-dot {
    animation: none;
    offset-distance: 0%;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सर्व Level 4 parts जोडा.", code: `.portal {
  container-name: portal;
}
@container style(--theme: dark) {
  .portal {
    color: #e2e8f0;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["पॅलेट कसे?", "snap कुठे?", "आधार काय?"],
    quiz: [
      { question: "portal काय?", options: ["एक पेज", "तीन", "पाच"], correct: 0 },
      { question: "color-mix?", options: ["पॅलेट", "font", "margin"], correct: 0 },
      { question: "showcase?", options: ["snap", "blur", "grid"], correct: 0 },
      { question: "focus-visible?", options: ["ring", "रंग", "छाया"], correct: 0 },
    ],
    challenge: {
      prompt: "editorial portal पूर्ण.",
      starterCode: `:root { --brand: #7c3aed; color-scheme: light dark; }`,
      expectedOutput: "Renders polished Marathi editorial portal using Level 4 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "4", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-focus-visible", "css-color-mix"],
    prev: "css-focus-visible",
    next: "css-color-mix",
    levelLabel: CSS4_LABEL,
  },];
