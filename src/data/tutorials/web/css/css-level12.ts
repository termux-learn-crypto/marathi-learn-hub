import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 12 — Blend & Detail ===
export const CSS12_LABEL = "CSS · Level 12 — Blend & Detail";

export const cssLevel12: Tutorial[] = [
  {
    slug: "css-overscroll",
    categoryId: "web",
    title: "Overscroll",
    marathiTitle: "overscroll — स्क्रोल नियंत्रण",
    level: "advanced",
    minutes: 40,
    summary: "overscroll-behavior सह scroll chaining थांबवणे.",
    sections: [
      { title: "1. overscroll कल्पना", content: "overscroll-behavior नियम.\nस्क्रोल चेन.\nदृश्य शांत.", code: `.modal {
  overscroll-behavior: contain;
}`, codeLanguage: "css" },
      { title: "2. chain रोख", content: "chain नियम.\nमागे स्क्रोल.\nbreak योग्य.\nरचना स्पष्ट.", code: `html {
  overscroll-behavior-y: contain;
}`, codeLanguage: "css" },
      { title: "3. पेज थर", content: "मूळ पेज.\nmodal मध्ये.\ncontain नियम.\nगती स्थिर.", code: `.dialog {
  overscroll-behavior: contain;
  overflow-y: auto;
}`, codeLanguage: "css" },
      { title: "4. bounce नको", content: "bounce कमी.\noverscroll none.\nभाग स्थिर.\nवापरकर्ता सोपे.\nसवय नेमकी.", code: `.screen {
  overscroll-behavior: none;
}`, codeLanguage: "css" },
      { title: "5. अक्ष नियम", content: "contain vs none.\nजागा स्वतंत्र.\nक्रम नेमका.", code: `body {
  overscroll-behavior-x: contain;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\nवापर नाही.\nस्वाभाविक स्क्रोल.\nआधार तपासा.", code: `@supports (overscroll-behavior: contain) {
  .modal {
    overscroll-behavior: contain;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "modal स्क्रोल.\nअलग बंद.", code: `.modal {
  overscroll-behavior: contain;
  overflow-y: auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["overscroll काय?", "contain कुठे?", "chain म्हणजे?", "none कधी?"],
    quiz: [
      { question: "overscroll-behavior?", options: ["चेन रोख", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: "contain कुठे?", options: ["modal", "html", "image"], correct: 0 },
      { question: "chain म्हणजे?", options: ["मागे स्क्रोल", "आत रंग", "नवीन थर"], correct: 0 },
      { question: "none कधी?", options: ["बाऊंस नको", "मोठा रंग", "झटका"], correct: 0 },
    ],
    challenge: {
      prompt: "modal स्क्रोल करा.",
      starterCode: `.modal {
  overscroll-behavior: contain;
  overflow-y: auto;
}`,
      expectedOutput: "Modal scroll stays contained on Marathi page",
    },
    interviewQuestions: ["contain फायदा?", "chain त्रास?"],
    related: ["css-scroll-margin", "css-content-visibility", "css-modal-backdrop"],
    prev: "css-marathi-capstone11",
    next: "css-scroll-margin",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-scroll-margin",
    categoryId: "web",
    title: "Scroll Margin",
    marathiTitle: "scroll-margin — अँकर जागा",
    level: "advanced",
    minutes: 40,
    summary: "scroll-margin scroll-padding अँकर व्यवस्था.",
    sections: [
      { title: "1. margin कल्पना", content: "scroll-margin नियम.\nअँकर जागा.\nवर स्थान.", code: `section {
  scroll-margin-top: 80px;
}`, codeLanguage: "css" },
      { title: "2. padding थर", content: "scroll-padding सोय.\ncontainer जागा.\ntop नेमका.\nरचना स्पष्ट.", code: `.container {
  scroll-padding-top: 80px;
}`, codeLanguage: "css" },
      { title: "3. अँकर दुवा", content: "hash दुवा.\nsection वर.\nmargin मिळतो.\nवाचन नीट.", code: `#heading {
  scroll-margin-top: 6rem;
}`, codeLanguage: "css" },
      { title: "4. snap जोड", content: "scroll snap.\nsnap-stop योग्य.\nजागा समान.\nरचना स्पष्ट.", code: `.carousel {
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 20px;
}`, codeLanguage: "css" },
      { title: "5. header साथ", content: "sticky header.\nscroll-margin जोड.\nमथळा नीट.\nदृश्य सुबक.", code: `.section {
  scroll-margin-top: 64px;
}`, codeLanguage: "css" },
      { title: "6. दोन्ही नियम", content: "दोन्ही गुणधर्म.\nक्रम नेमका.\nवापरकर्ता सोपे.\nसवय नेमकी.", code: `.section {
  scroll-margin: 16px;
}
.container {
  scroll-padding-top: 8rem;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मथळे दुवे.\nनेटके जागा.", code: `h2[id] {
  scroll-margin-top: 96px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scroll-margin काय?", "scroll-padding कुठे?", "anchor कसा?", "snap जोड?"],
    quiz: [
      { question: "scroll-margin?", options: ["अँकर जागा", "ध्वनी", "रंग"], correct: 0 },
      { question: "scroll-padding कुठे?", options: ["container", "image", "table"], correct: 0 },
      { question: "hash दुवा?", options: ["#id", ".class", "@media"], correct: 0 },
      { question: "snap-stop?", options: ["थांबा नियम", "रंग जोड", "रेखा"], correct: 0 },
    ],
    challenge: {
      prompt: "अँकर जागा द्या.",
      starterCode: `h2[id] {
  scroll-margin-top: 96px;
}`,
      expectedOutput: "Marathi headings anchor below topbar",
    },
    interviewQuestions: ["margin vs padding?", "snap कसा जुळतो?"],
    related: ["css-overscroll", "css-scroll-snap", "css-gap-mastery"],
    prev: "css-overscroll",
    next: "css-content-visibility",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-content-visibility",
    categoryId: "web",
    title: "Content Visibility",
    marathiTitle: "content-visibility — रेंडरिंग गती",
    level: "advanced",
    minutes: 40,
    summary: "content-visibility सह ऑफस्क्रीन गती.",
    sections: [
      { title: "1. visibility कल्पना", content: "content-visibility नियम.\nरेंडरिंग थांबे.\nगती वाढते.", code: `.story {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "2. आकार जागा", content: "contain-intrinsic-size.\nआकार नेमका.\nजागा स्थिर.\nरचना स्पष्ट.", code: `.story {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}`, codeLanguage: "css" },
      { title: "3. दूर भाग", content: "दूर दिसत नाही.\nrendering मऊ.\nस्क्रीन जागा.\nperformance नीट.", code: `article {
  content-visibility: auto;
  contain-intrinsic-size: auto 400px;
}`, codeLanguage: "css" },
      { title: "4. मर्यादा नियम", content: "auto vs hidden.\nदृश्य हलके.\nनियम नेमका.\nरचना स्पष्ट.", code: `section {
  content-visibility: hidden;
}`, codeLanguage: "css" },
      { title: "5. गती मोजमाप", content: "long page.\nतपासा गती.\nजागा मिळते.\nवाचन आराम.", code: `.wrapper {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\nrendering साधा.\nवापर नाही.\nआधार तपासा.", code: `@supports (content-visibility: auto) {
  .list {
    content-visibility: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "लांब सूची.\nगती जोड.", code: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["content-visibility काय?", "intrinsic कुठे?", "auto vs hidden?", "fallback कसा?"],
    quiz: [
      { question: "content-visibility?", options: ["गती सुधार", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: "intrinsic-size?", options: ["आकार जागा", "रेखा", "थर"], correct: 0 },
      { question: "auto म्हणजे?", options: ["नजीक रेंडर", "कधी नाही", "नेहमी"], correct: 0 },
      { question: "hidden कधी?", options: ["लपवणे", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "लांब सूची गती करा.",
      starterCode: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`,
      expectedOutput: "Long list renders faster on Marathi page",
    },
    interviewQuestions: ["auto फायदा?", "intrinsic चूक?"],
    related: ["css-contain-property", "css-will-change", "css-perf-hints"],
    prev: "css-scroll-margin",
    next: "css-mix-blend-mode",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-mix-blend-mode",
    categoryId: "web",
    title: "Mix Blend",
    marathiTitle: "mix-blend-mode — रंग मिश्रण",
    level: "advanced",
    minutes: 40,
    summary: "mix-blend-mode सह थर रंग जोडणी.",
    sections: [
      { title: "1. blend कल्पना", content: "mix-blend-mode नियम.\nरंग मिसळतो.\nरचना आकर्षक.", code: `.hero h1 {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "2. color-dodge", content: "color-dodge थर.\nरंग तेज.\nपार्श्वभूमी जुळते.\nदृश्य सुबक.", code: `.stamp {
  mix-blend-mode: color-dodge;
}`, codeLanguage: "css" },
      { title: "3. screen थर", content: "screen नियम.\nगडद मागे.\nब्राइट थर.", code: `.glow {
  mix-blend-mode: screen;
}`, codeLanguage: "css" },
      { title: "4. isolation थर", content: "isolation isolate.\nमिश्रण बंद.\nगट वेगळा.\nनियम स्पष्ट.", code: `.group {
  isolation: isolate;
}
.child {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "5. रंग नियम", content: "रंग निवड.\nblend तपास.\ncontrast राखा.\nवाचन नीट.", code: `.deep {
  mix-blend-mode: difference;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "जुन्या ब्राउझर.\nसाधा रंग.\nblend नाही.\nआधार सुरक्षित.", code: `@supports (mix-blend-mode: multiply) {
  .h {
    mix-blend-mode: multiply;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मथळा मिश्रण.\nblend एक.", code: `.title {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["mix-blend काय?", "screen कुठे?", "isolation का?", "color-dodge कधी?"],
    quiz: [
      { question: "mix-blend-mode?", options: ["रंग मिश्रण", "ध्वनी", "क्रम"], correct: 0 },
      { question: "screen कुठे?", options: ["गडद मागे", "पांढरे", "नवीन"], correct: 0 },
      { question: "isolation?", options: ["गट वेगळा", "रंग जोड", "थर"], correct: 0 },
      { question: "color-dodge?", options: ["तेज रंग", "मऊ", "काळा"], correct: 0 },
    ],
    challenge: {
      prompt: "मथळा blend करा.",
      starterCode: `.title {
  mix-blend-mode: multiply;
}`,
      expectedOutput: "Marathi heading blends into background",
    },
    interviewQuestions: ["blend फायदा?", "isolation केव्हा?"],
    related: ["css-background-blend", "css-isolation-z", "css-stacking-context"],
    prev: "css-content-visibility",
    next: "css-background-blend",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-background-blend",
    categoryId: "web",
    title: "Background Blend",
    marathiTitle: "background-blend — पार्श्वभूमी मिश्रण",
    level: "advanced",
    minutes: 40,
    summary: "background-blend-mode सह थर रंग.",
    sections: [
      { title: "1. blend थर", content: "background-blend-mode.\nअनेक layer.\nरंग तयार.", code: `.card {
  background-color: #7c3aed;
  background-image: linear-gradient(#0d9488, #2563eb);
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "2. gradient जोड", content: "gradient थर.\nmultiply नियम.\nरचना तयार.\nदृश्य नेमके.", code: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-color: #7c3aed;
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "3. screen थर", content: "screen रंग.\nहलका gradient.\nचमक मिळे.\nरचना स्पष्ट.", code: `.hero {
  background-image: linear-gradient(#0d9488, #0f172a);
  background-blend-mode: screen;
}`, codeLanguage: "css" },
      { title: "4. pattern नियम", content: "pattern थर.\nmultiply जोड.\nडिझाइन नीट.", code: `.tile {
  background-image: repeating-linear-gradient(45deg, #0d9488 0 8px, transparent 8px 16px);
  background-color: #ccfbf1;
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "5. color वेगळा", content: "background-color.\nblend नियम.\nरंग तोल.\nवाचन आराम.", code: `.feed {
  background-image: linear-gradient(90deg, #0d9488, #2563eb);
  background-blend-mode: overlay;
}`, codeLanguage: "css" },
      { title: "6. prose थर", content: "मजकूर वर.\nblend साधा.\ncontrast जपा.\nसवय नेमकी.", code: `.text {
  background-image: linear-gradient(transparent, #0f172a);
  background-blend-mode: darken;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "बॅनर मिश्रण.\nएक गुणधर्म.", code: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["background-blend काय?", "layer किती?", "multiply कुठे?", "screen कधी?"],
    quiz: [
      { question: "background-blend?", options: ["थर रंग", "ध्वनी", "रेखा"], correct: 0 },
      { question: "layer कुठे?", options: ["image gradient", "table", "flex"], correct: 0 },
      { question: "multiply?", options: ["गडद मिश्रण", "उजळ", "नवीन"], correct: 0 },
      { question: "screen?", options: ["चमक", "अंधार", "रेखा"], correct: 0 },
    ],
    challenge: {
      prompt: "बॅनर blend करा.",
      starterCode: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-blend-mode: multiply;
}`,
      expectedOutput: "Marathi banner gradients blended",
    },
    interviewQuestions: ["layer क्रम?", "contrast नियम?"],
    related: ["css-mix-blend-mode", "css-gradient-deep", "css-conic-radial"],
    prev: "css-mix-blend-mode",
    next: "css-font-variation",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-font-variation",
    categoryId: "web",
    title: "Font Variation",
    marathiTitle: "font-variation — व्हेरिएबल फॉन्ट",
    level: "advanced",
    minutes: 40,
    summary: "font-variation-settings अक्ष नियंत्रण.",
    sections: [
      { title: "1. variation कल्पना", content: "font-variation-settings.\nअक्ष नियम.\nवजन थर.", code: `.title {
  font-variation-settings: "wght" 700;
}`, codeLanguage: "css" },
      { title: "2. weight थर", content: "हलके जड.\nअक्ष नेमके.\nरचना सुबक.", code: `.light {
  font-variation-settings: "wght" 300;
}`, codeLanguage: "css" },
      { title: "3. width नियम", content: "width अक्ष.\nसंकुचित विस्तार.\nजागा नीट.\nनियम स्पष्ट.", code: `.condensed {
  font-variation-settings: "wdth" 75;
}`, codeLanguage: "css" },
      { title: "4. optical थर", content: "font-optical-sizing.\nवाचन आराम.\nआकार बदल.", code: `body {
  font-optical-sizing: auto;
}`, codeLanguage: "css" },
      { title: "5. संयोजन नियम", content: "दोन अक्ष.\nwght wdth.\nhover वजन.\nसजीव दृश्य.", code: `.btn {
  font-variation-settings: "wght" 600, "wdth" 100;
}
.btn:hover {
  font-variation-settings: "wght" 700, "wdth" 100;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "फॉन्ट variable नाही.\nstatic fallback.\nनियम नेमका.\nआधार तपासा.", code: `@supports (font-variation-settings: "wght" 500) {
  .title {
    font-variation-settings: "wght" 700;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "मथळा वजन.\nएक नियम.", code: `.display {
  font-variation-settings: "wght" 800;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["variation काय?", "wght कुठे?", "wdth कधी?", "optical का?"],
    quiz: [
      { question: "font-variation?", options: ["अक्ष नियम", "रेखा", "ध्वनी"], correct: 0 },
      { question: "wght म्हणजे?", options: ["वजन", "रुंदी", "थर"], correct: 0 },
      { question: "wdth म्हणजे?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "optical?", options: ["वाचन आराम", "रंग", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "मथळा वजन द्या.",
      starterCode: `.display {
  font-variation-settings: "wght" 800;
}`,
      expectedOutput: "Marathi display heading uses variable weight",
    },
    interviewQuestions: ["variable font फायदा?", "fallback कसा?"],
    related: ["css-font-fallback", "css-typography", "css-custom-props"],
    prev: "css-background-blend",
    next: "css-text-spacing",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-text-spacing",
    categoryId: "web",
    title: "Text Spacing",
    marathiTitle: "text-spacing — अंतर नियम",
    level: "advanced",
    minutes: 40,
    summary: "letter word spacing अंतर व्यवस्था.",
    sections: [
      { title: "1. letter थर", content: "letter-spacing नियम.\nअंतर नेमके.\nवाचन नीट.\nदृश्य सुबक.", code: `.label {
  letter-spacing: 0.08em;
}`, codeLanguage: "css" },
      { title: "2. word थर", content: "word-spacing सोय.\nशब्द अंतर.\nवाचन मऊ.\nरचना स्पष्ट.", code: `.para {
  word-spacing: 0.1em;
}`, codeLanguage: "css" },
      { title: "3. indent नियम", content: "text-indent जागा.\nपरिच्छेद सुरुवात.\nओळ नीट.\nदृश्य सुबक.", code: `p {
  text-indent: 2em;
}`, codeLanguage: "css" },
      { title: "4. hyphens थर", content: "hyphens auto.\nlong शब्द.\nरेषा जुळते.\nवाचन आराम.", code: `.text {
  hyphens: auto;
}`, codeLanguage: "css" },
      { title: "5. justify नियम", content: "text-align justify.\nरेषा समान.\nकड सरळ.\nरचना नेमकी.", code: `.body {
  text-align: justify;
  text-justify: inter-word;
}`, codeLanguage: "css" },
      { title: "6. संयोजन तोल", content: "तीन नियम.\nवाचन सुधार.\nअंतर तोल.\nरचना स्पष्ट.", code: `.article {
  line-height: 1.7;
  letter-spacing: 0.01em;
  word-spacing: 0.05em;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "परिच्छेद नीट.\nअंतर जोड.", code: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["letter-spacing काय?", "word-spacing कुठे?", "indent का?", "hyphens कधी?"],
    quiz: [
      { question: "letter-spacing?", options: ["अक्षर अंतर", "रंग", "थर"], correct: 0 },
      { question: "word-spacing?", options: ["शब्द अंतर", "ओळ", "क्रम"], correct: 0 },
      { question: "text-indent?", options: ["सुरुवात जागा", "शेवट", "मध्य"], correct: 0 },
      { question: "hyphens?", options: ["रेषा जुळणे", "रंग", "ध्वनी"], correct: 0 },
    ],
    challenge: {
      prompt: "मजकूर आराम करा.",
      starterCode: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`,
      expectedOutput: "Marathi prose spaced for reading",
    },
    interviewQuestions: ["जागा सुबक कशी?", "hyphens कधी?"],
    related: ["css-typography", "css-text-wrap", "css-writing-modes"],
    prev: "css-font-variation",
    next: "css-decoration-style",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-decoration-style",
    categoryId: "web",
    title: "Decoration Style",
    marathiTitle: "decoration-style — रेषा शैली",
    level: "advanced",
    minutes: 40,
    summary: "text-decoration-style wavy double नियम.",
    sections: [
      { title: "1. style कल्पना", content: "text-decoration-style.\nरेषा शैली.\nwavy double.", code: `.note {
  text-decoration-style: wavy;
}`, codeLanguage: "css" },
      { title: "2. दुहेरी रेषा", content: "double नियम.\nजाडी दोन.\nठसा स्पष्ट.", code: `.alert {
  text-decoration-style: double;
  text-decoration-thickness: 3px;
}`, codeLanguage: "css" },
      { title: "3. wavy थर", content: "wavy रेषा.\nwarning साठी.\nरंग नेमका.", code: `.warn {
  text-decoration: underline wavy #dc2626 2px;
}`, codeLanguage: "css" },
      { title: "4. skip-ink", content: "skip-ink auto.\nअक्षरे स्पष्ट.\nरेषा नियम.\nवाचन आराम.", code: `.link {
  text-decoration-skip-ink: auto;
}`, codeLanguage: "css" },
      { title: "5. dotted नियम", content: "dotted रेषा.\nhover दाखवा.\nक्रिया स्पष्ट.\nरचना नेमकी.", code: `.link {
  text-decoration: underline dotted;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\nरेषा साधी.\nthickness नाही.\nआधार तपासा.", code: `@supports (text-decoration-thickness: 2px) {
  .link {
    text-decoration-thickness: 2px;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "warning रेषा.\nwavy खूण.", code: `.required {
  text-decoration: underline wavy #dc2626 2px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["decoration-style काय?", "wavy कुठे?", "double कधी?", "skip-ink का?"],
    quiz: [
      { question: "text-decoration-style?", options: ["रेषा शैली", "रंग थर", "ध्वनी"], correct: 0 },
      { question: "wavy कुठे?", options: ["warning", "मथळा", "टीपा"], correct: 0 },
      { question: "double?", options: ["दुहेरी रेषा", "एक रेषा", "थर"], correct: 0 },
      { question: "skip-ink?", options: ["अक्षरे स्पष्ट", "रंग", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "warning रेषा द्या.",
      starterCode: `.required {
  text-decoration: underline wavy #dc2626 2px;
}`,
      expectedOutput: "Marathi required fields marked wavy",
    },
    interviewQuestions: ["wavy केव्हा?", "skip-ink फायदा?"],
    related: ["css-text-decoration-deep", "css-focus-visible", "css-typography"],
    prev: "css-text-spacing",
    next: "css-user-validity",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-user-validity",
    categoryId: "web",
    title: "User Validity",
    marathiTitle: "user-validity — फॉर्म सत्यता",
    level: "advanced",
    minutes: 40,
    summary: ":user-valid :user-invalid फॉर्म feedback.",
    sections: [
      { title: "1. invalid थर", content: ":user-invalid नियम.\nखराब input.\nerror ठसा.\n:user-invalid नियम सरावाने पक्के होते.\n:user-invalid नियम पाया मजबूत आहे.\n:user-invalid नियम आज विषय आत्मसात करा.\n:user-invalid नियम संपूर्ण अर्थ उमजतो.\n:user-invalid नियम हे तत्व आहे.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
      { title: "2. valid नियम", content: ":user-valid नियम.\nबरोबर input.\nहिरवा रंग.\nरचना स्पष्ट.\n:user-valid नियम वापर सोपा आहे.\n:user-valid नियम अचूक गुण देतो.\n:user-valid नियम प्रत्येक वेळी शिकवतो.\n:user-valid नियम सरावाने नक्की.", code: `input:user-valid {
  border-color: #16a34a;
}`, codeLanguage: "css" },
      { title: "3. error संदेश", content: "ओळ खाली.\nरंग नेमका.\nमजकूर स्पष्ट.\nवाचन नीट.", code: `input[aria-invalid="true"] {
  outline: 2px solid #dc2626;
}`, codeLanguage: "css" },
      { title: "4. फोकस साथ", content: "focus-visible जोड.\nkeyboard नियम.\nring स्पष्ट.\nदृश्य सुबक.", code: `input:user-invalid:focus-visible {
  outline: 2px solid #dc2626;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. अनिवार्य थर", content: "required नियम.\nतारका खूण.\nlabel स्पष्ट.\nवापरकर्ता दिशा.", code: `label {
  font-weight: 500;
}
input:required {
  border: 1px solid #334155;
}`, codeLanguage: "css" },
      { title: "6. बदल क्रम", content: "टायपिंग नियंत्रण.\nबदल तपास.\nनियम नेमका.", code: `input:user-invalid,
input:user-valid {
  transition: border-color 0.2s;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "फॉर्म feedback.\nएक रंग.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["user-invalid काय?", "user-valid कुठे?", "aria कधी?", "focus कसा?"],
    quiz: [
      { question: ":user-invalid?", options: ["खराब input", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: ":user-valid?", options: ["बरोबर input", "रेखा", "थर"], correct: 0 },
      { question: "aria-invalid?", options: ["सूचना", "रंग", "क्रम"], correct: 0 },
      { question: "focus-visible?", options: ["keyboard", "mouse", "touch"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म feedback जोडा.",
      starterCode: `input:user-invalid {
  border-color: #dc2626;
}`,
      expectedOutput: "Marathi form flags invalid input",
    },
    interviewQuestions: ["user vs browser?", "transition कसा?"],
    related: ["css-forms-styling", "css-pseudo-state", "css-focus-visible"],
    prev: "css-decoration-style",
    next: "css-pseudo-state",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-pseudo-state",
    categoryId: "web",
    title: "Pseudo State",
    marathiTitle: "pseudo-state — स्थिती नियम",
    level: "advanced",
    minutes: 40,
    summary: ":placeholder-shown :read-write :autofill.",
    sections: [
      { title: "1. placeholder थर", content: ":placeholder-shown नियम.\nरिकामे input.\nlabel अंतर.\n:placeholder-shown सरावाने पक्के होते.\n:placeholder-shown पाया मजबूत आहे.\n:placeholder-shown आज विषय आत्मसात करा.\n:placeholder-shown संपूर्ण अर्थ उमजतो.\n:placeholder-shown हे तत्व आहे.", code: `input:placeholder-shown {
  border-color: #94a3b8;
}`, codeLanguage: "css" },
      { title: "2. भरले input", content: ":not placeholder.\nरंग नेमका.\nस्थिती तपास.\nरचना स्पष्ट.\n:not placeholder नियम वापर सोपा आहे.\n:not placeholder नियम अचूक गुण देतो.\n:not placeholder नियम प्रत्येक वेळी शिकवतो.\n:not placeholder नियम सरावाने नक्की.", code: `input:not(:placeholder-shown) {
  border-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. read थर", content: ":read-only मजकूर.\nवाचनीय थर.\nरंग हलका.", code: `input:read-only {
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "4. editable नियम", content: ":read-write थर.\nसंपादन स्पष्ट.\nकिनार ठोस.\nनियम नेमका.", code: `[contenteditable]:read-write {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. autofill थर", content: ":autofill नियम.\nरंग बदल.\nbox-shadow मऊ.", code: `input:autofill {
  box-shadow: 0 0 0 1000px #ccfbf1 inset;
}`, codeLanguage: "css" },
      { title: "6. संयोजन नियम", content: "अनेक states.\nनिवड योग्य.\nसवय नेमकी.", code: `input:not(:placeholder-shown):read-write {
  border-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "placeholder खूण.\nएक नियम.", code: `input:placeholder-shown {
  background: #f8fafc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["placeholder-shown काय?", "read-only कुठे?", "autofill कधी?", "not नियम?"],
    quiz: [
      { question: ":placeholder-shown?", options: ["रिकामे input", "भरले", "ध्वनी"], correct: 0 },
      { question: ":read-only?", options: ["वाचनीय", "संपादन", "रंग"], correct: 0 },
      { question: ":autofill?", options: ["आपोआप भरणे", "नवीन रंग", "थर"], correct: 0 },
      { question: ":read-write?", options: ["संपादन", "लॉक", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "placeholder खुणा करा.",
      starterCode: `input:placeholder-shown {
  background: #f8fafc;
}`,
      expectedOutput: "Marathi empty inputs highlighted",
    },
    interviewQuestions: ["placeholder अर्थ?", "read-write कुठे?"],
    related: ["css-user-validity", "css-field-sizing", "css-forms-styling"],
    prev: "css-user-validity",
    next: "css-field-sizing",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-field-sizing",
    categoryId: "web",
    title: "Field Sizing",
    marathiTitle: "field-sizing — फील्ड आकार",
    level: "advanced",
    minutes: 40,
    summary: "field-sizing सह input आकार स्वयम्.",
    sections: [
      { title: "1. field-sizing", content: "field-sizing content.\ninput आकार.\nमजकूर जागा.", code: `input {
  field-sizing: content;
}`, codeLanguage: "css" },
      { title: "2. textarea थर", content: "textarea resize.\nआकार वाढ.\nमजकूर सोय.\nरचना स्पष्ट.", code: `textarea {
  resize: vertical;
  min-height: 120px;
}`, codeLanguage: "css" },
      { title: "3. select नियम", content: "select आकार.\nwidth नेमकी.\noption जागा.", code: `select {
  width: fit-content;
}`, codeLanguage: "css" },
      { title: "4. chip थर", content: "chip badge.\ncontent आकार.\npadding जोड.\nसुबक रचना.", code: `.chip {
  width: fit-content;
  padding: 4px 12px;
}`, codeLanguage: "css" },
      { title: "5. आधार जुना", content: "जुन्या ब्राउझर.\nfield-sizing नाही.\nwidth सरळ.\nआधार तपासा.", code: `@supports (field-sizing: content) {
  input {
    field-sizing: content;
  }
}`, codeLanguage: "css" },
      { title: "6. min-width थर", content: "min-width नेमकी.\nआकार तोल.\nसवय नेमकी.", code: `input[name="q"] {
  field-sizing: content;
  min-width: 200px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "input नीट.\ncontent आकार.", code: `input[type="text"] {
  field-sizing: content;
  min-width: 160px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["field-sizing काय?", "textarea कसा?", "chip कुठे?", "min-width का?"],
    quiz: [
      { question: "field-sizing?", options: ["आकार स्वयम्", "रंग", "ध्वनी"], correct: 0 },
      { question: "textarea?", options: ["resize", "रेषा", "थर"], correct: 0 },
      { question: "fit-content?", options: ["content आकार", "क्रम", "रेखा"], correct: 0 },
      { question: "min-width?", options: ["किमान", "जास्त", "शून्य"], correct: 0 },
    ],
    challenge: {
      prompt: "input आकार घ्या.",
      starterCode: `input[type="text"] {
  field-sizing: content;
  min-width: 160px;
}`,
      expectedOutput: "Marathi inputs size to content",
    },
    interviewQuestions: ["content sizing फायदा?", "fallback कसा?"],
    related: ["css-form-appearance", "css-intrinsic-sizing", "css-forms-styling"],
    prev: "css-pseudo-state",
    next: "css-marathi-capstone12",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-marathi-capstone12",
    categoryId: "web",
    title: "Detail Capstone",
    marathiTitle: "Blend Bag — भाग संग्रह",
    level: "advanced",
    minutes: 40,
    summary: "Level 12 साधने एकत्र शैली.",
    sections: [
      { title: "1. स्क्रोल संगठन", content: "overscroll contain.\nscroll margin.\nअँकर नीट.", code: `.modal {
  overscroll-behavior: contain;
}
h2[id] {
  scroll-margin-top: 96px;
}`, codeLanguage: "css" },
      { title: "2. रेंडरिंग गती", content: "content-visibility.\nintrinsic size.\nलांब पान.\nगती वाढ.", code: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`, codeLanguage: "css" },
      { title: "3. blend थर", content: "blend एक.\nमथळा मिश्रण.\nरचना आकर्षक.", code: `.title {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "4. वजन आकार", content: "font variation.\nwght सातशे.\nमथळा सुबक.", code: `.display {
  font-variation-settings: "wght" 700;
}`, codeLanguage: "css" },
      { title: "5. वाचन नियम", content: "letter spacing.\nline-height सोय.\nवाचन आराम.\nरचना नेमकी.", code: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`, codeLanguage: "css" },
      { title: "6. फॉर्म feedback", content: "user-invalid.\nरंग नेमका.\nसंदेश स्पष्ट.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
      { title: "Final Project", content: "सर्व जोड.\nएक शैली.", code: `input:placeholder-shown {
  background: #f8fafc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 12 नवे?", "blend कुठे?", "content visibility?", "feedback कसा?"],
    quiz: [
      { question: "Level 12 थीम?", options: ["Blend & Detail", "रंग रेषा", "जुना थर"], correct: 0 },
      { question: "overscroll?", options: ["चेन रोख", "रंग", "ध्वनी"], correct: 0 },
      { question: "content-visibility?", options: ["गती सुधार", "रेखा", "क्रम"], correct: 0 },
      { question: "user-invalid?", options: ["फॉर्म feedback", "मथळा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "पोर्टल सुरू करा.",
      starterCode: `.modal {
  overscroll-behavior: contain;
}`,
      expectedOutput: "Final detail patterns assembled via Marathi portal",
    },
    interviewQuestions: ["तीन आवडते?", "blend मर्यादा?"],
    related: ["css-marathi-capstone11", "css-scroll-snap", "css-field-sizing"],
    prev: "css-field-sizing",
    next: "css-overscroll",
    levelLabel: CSS12_LABEL,
  },];
