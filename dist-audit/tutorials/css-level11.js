"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssLevel11 = exports.CSS11_LABEL = void 0;
// === CSS · LEVEL 11 — Interaction Modes ===
exports.CSS11_LABEL = "CSS · Level 11 — Interaction Modes";
exports.cssLevel11 = [
    {
        slug: "css-light-dark",
        categoryId: "web",
        title: "Light Dark",
        marathiTitle: "light-dark — थीम रंग",
        level: "advanced",
        minutes: 40,
        summary: "color-scheme आणि light-dark() रंग निवड.",
        sections: [
            { title: "1. थीम कल्पना", content: "color-scheme दोन.\nlight-dark() नियम.\nरंग जुळतात.", code: `:root {
  color-scheme: light dark;
}`, codeLanguage: "css" },
            { title: "2. रंग जोडी", content: "रंग दोन द्या.\nब्राउझर निवड.\ntheme बदल.\nरचना स्पष्ट.", code: `body {
  color: light-dark(#1f2937, #f4f4f5);
  background: light-dark(#ffffff, #111827);
}`, codeLanguage: "css" },
            { title: "3. कार्ड रूप", content: "कार्ड स्वतः.\nअंधार रूप.\nborder राहो.\nवाचन आराम.", code: `.card {
  background: light-dark(#ffffff, #0f172a);
  border: 1px solid light-dark(#e2e8f0, #334155);
}`, codeLanguage: "css" },
            { title: "4. toggle खुणा", content: "html attribute.\ndark class.\ncolor-scheme मिळे.\nथीम जुळते.\nकोड सुबक.", code: `html[data-theme="dark"] {
  color-scheme: dark;
}`, codeLanguage: "css" },
            { title: "5. संवाद रंग", content: "दुवा बदल.\nhover रंग.\nनियम नेमका.\nदृश्य स्पष्ट.", code: `.link {
  color: light-dark(#1d4ed8, #93c5fd);
}`, codeLanguage: "css" },
            { title: "6. आधार जुना", content: "@supports color.\nlight-dark() नाही.\nfallback नियम.\nआधार सुरक्षित.", code: `@supports (color: light-dark(#000, #fff)) {
  body {
    background: light-dark(#ffffff, #0f172a);
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "थीम दोन.\nएक नियम.", code: `:root {
  color-scheme: light dark;
}
body {
  background: light-dark(#ffffff, #0b1220);
  color: light-dark(#111827, #e5e7eb);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["light-dark काय?", "color-scheme कुठे?", "toggle कसे?", "जुना आधार?"],
        quiz: [
            { question: "light-dark काय?", options: ["रंग दोन", "ध्वनी", "थर एक"], correct: 0 },
            { question: "color-scheme कुठे?", options: [":root", "body", "span"], correct: 0 },
            { question: "dark रूप?", options: ["आपोआप", "ओळ", "क्रम"], correct: 0 },
            { question: "fallback कसा?", options: ["@supports", "@media", "@keyframes"], correct: 0 },
        ],
        challenge: {
            prompt: "थीम खुणा करा.",
            starterCode: `:root {
  color-scheme: light dark;
}`,
            expectedOutput: "Theme tokens follow Marathi page scheme",
        },
        interviewQuestions: ["light-dark लाभ?", "color-scheme विस्तार?"],
        related: ["css-dark-mode", "css-accent-color", "css-marathi-capstone11"],
        prev: "css-marathi-capstone10",
        next: "css-backdrop-filter",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-backdrop-filter",
        categoryId: "web",
        title: "Backdrop Filter",
        marathiTitle: "backdrop-filter — काच थर",
        level: "advanced",
        minutes: 40,
        summary: "backdrop-filter blur सह glass effect.",
        sections: [
            { title: "1. काच कल्पना", content: "backdrop-filter blur.\nमागे धुके.\nरचना नीट.\nदृश्य मऊ.", code: `.glass {
  backdrop-filter: blur(8px);
}`, codeLanguage: "css" },
            { title: "2. पारभासी", content: "background सरळ.\nblur value.\nआधार ब्राउझर.", code: `.glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
}`, codeLanguage: "css" },
            { title: "3. header थर", content: "bar वर.\nbackdrop blur.\ncontent वाचतो.\nनियम नेमका.", code: `.topbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
}`, codeLanguage: "css" },
            { title: "4. पटल रूप", content: "cards वर.\nglass panel.\nblur हलका.\nरचना दिसते.", code: `.panel {
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`, codeLanguage: "css" },
            { title: "5. वाचन थर", content: "translucent fine.\ntext ठळक.\ncontrast राखा.\nवाचन आराम.", code: `.overlay {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}`, codeLanguage: "css" },
            { title: "6. आधार तपास", content: "@supports नियम.\nनसेल साधा.\nमागे रंग.\nआधार सुरक्षित.\nसवय नेमकी.", code: `@supports (backdrop-filter: blur(1px)) {
  .glass {
    backdrop-filter: blur(8px);
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "header काच.\nblur मऊ.", code: `.site-header {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["backdrop-filter काय?", "blur कुठे?", "header कसा?", "@supports कधी?"],
        quiz: [
            { question: "backdrop-filter काय?", options: ["मागे धुके", "पुढे रंग", "खाली रेषा"], correct: 0 },
            { question: "blur जास्त?", options: ["धुके जास्त", "धुके कमी", "रंग उजळ"], correct: 0 },
            { question: "topbar काय?", options: ["काच", "मजकूर", "रेखा"], correct: 0 },
            { question: "@supports कुठे?", options: ["आधार", "रंग", "क्रम"], correct: 0 },
        ],
        challenge: {
            prompt: "काच header करा.",
            starterCode: `.topbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
}`,
            expectedOutput: "Frosted Marathi topbar",
        },
        interviewQuestions: ["blur रक्कम?", "performance साठी?"],
        related: ["css-filters-fx", "css-modal-backdrop", "css-isolation-z"],
        prev: "css-light-dark",
        next: "css-starting-style",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-starting-style",
        categoryId: "web",
        title: "Starting Style",
        marathiTitle: "@starting-style — सुरुवात शैली",
        level: "advanced",
        minutes: 40,
        summary: "entry state animation display toggle सह.",
        sections: [
            { title: "1. सुरुवात नियम", content: "@starting-style खुणा.\nentry state.\nopacity मऊ.\nदृश्य सजीव.", code: `@starting-style {
  .box {
    opacity: 0;
  }
}`, codeLanguage: "css" },
            { title: "2. display विस्तार", content: "allow-discrete नियम.\ndisplay बदल.\ntransition चाले.", code: `.box {
  transition: opacity 0.3s, display 0.3s allow-discrete;
}`, codeLanguage: "css" },
            { title: "3. menu थर", content: "menu उघडते.\nscale entry.\nopacity पण.\nनियम नेमका.", code: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.9);
  }
}
.menu {
  transition: opacity 0.2s, transform 0.2s;
}`, codeLanguage: "css" },
            { title: "4. टॅब शैली", content: "panel बदल.\ncontent दिशा.\ntranslate हलका.\nरचना स्पष्ट.", code: `@starting-style {
  .tab {
    opacity: 0;
    translate: 0 -6px;
  }
}
.tab {
  transition: opacity 0.25s, translate 0.25s;
}`, codeLanguage: "css" },
            { title: "5. कार्ड क्रम", content: "card उदय.\nstaggered delay.\ntransition-delay.\nदृश्य सुबक.", code: `.card {
  transition: opacity 0.3s;
}
@starting-style {
  .card {
    opacity: 0;
  }
}`, codeLanguage: "css" },
            { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\nanimation साधा.\nfallback opacity.", code: `@supports (transition-behavior: allow-discrete) {
  .box {
    transition: opacity 0.3s, display 0.3s allow-discrete;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "menu उघड.\nसुरुवात entry.", code: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.95);
  }
}
.menu {
  transition: opacity 0.2s, transform 0.2s;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["@starting-style काय?", "allow-discrete कुठे?", "menu कसे?", "fallback कोणता?"],
        quiz: [
            { question: "@starting-style काय?", options: ["entry state", "exit state", "रंग रेखा"], correct: 0 },
            { question: "allow-discrete?", options: ["transition नियम", "नवीन रंग", "ध्वनी क्रिया"], correct: 0 },
            { question: "display बदल?", options: ["होय", "नाही", "कधीच"], correct: 0 },
            { question: "scale कुठे?", options: ["transform", "margin", "padding"], correct: 0 },
        ],
        challenge: {
            prompt: "menu entry करा.",
            starterCode: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.95);
  }
}`,
            expectedOutput: "Menu animates into Marathi page",
        },
        interviewQuestions: ["discrete transition काय?", "delay कसा?"],
        related: ["css-transitions-animations", "css-keyframes-tip", "css-popover-tips"],
        prev: "css-backdrop-filter",
        next: "css-initial-letter",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-initial-letter",
        categoryId: "web",
        title: "Initial Letter",
        marathiTitle: "initial-letter — मोठे अक्षर",
        level: "advanced",
        minutes: 40,
        summary: "drop cap initial-letter सह सजावट.",
        sections: [
            { title: "1. अक्षर कल्पना", content: "initial-letter नियम.\ndrop cap.\nपरिच्छेद सजवतो.\nवाचन छान.", code: `p::first-letter {
  initial-letter: 3;
}`, codeLanguage: "css" },
            { title: "2. आकार थर", content: "आकार दोन.\nbaseline जुळते.\nमजकूर बाजू.", code: `p::first-letter {
  initial-letter: 2 1;
  font-weight: bold;
}`, codeLanguage: "css" },
            { title: "3. रंग जोड", content: "drop cap रंग.\nbackground पान.\nborder खास.\nदृश्य आकर्षक.", code: `p::first-letter {
  initial-letter: 2.5;
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "4. संयोग नियम", content: "quote ओळ.\nविशेष थर.\nsmall cap.\nरचना नेमकी.", code: `.quote p::first-letter {
  initial-letter: 2;
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "5. आधार जुना", content: "जुन्या ब्राउझर.\ninitial-letter नाही.\nfloat साधा.\nsize मोठा.", code: `.drop {
  float: left;
  font-size: 3rem;
  line-height: 1;
  margin-right: 8px;
}`, codeLanguage: "css" },
            { title: "6. सुस्पष्ट माने", content: "first-letter वाचतो.\ncontrast राखा.\npadding थोडी.\nवाचन सुधार.\nसवय नेमकी.", code: `p::first-letter {
  initial-letter: 2;
  color: #115e59;
  background: #ccfbf1;
  padding: 4px 8px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "परिच्छेद cap.\nआकार दोन.", code: `article > p:first-child::first-letter {
  initial-letter: 2;
  color: #0d9488;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["initial-letter काय?", "drop cap कुठे?", "float कधी?", "baseline कसा?"],
        quiz: [
            { question: "initial-letter काय?", options: ["मोठे अक्षर", "रेखा", "ध्वनी"], correct: 0 },
            { question: "::first-letter कुठे?", options: ["पहिले अक्षर", "शेवट", "मध्य"], correct: 0 },
            { question: "आधार जुना?", options: ["float", "grid", "flex"], correct: 0 },
            { question: "cap रंग?", options: ["color", "display", "index"], correct: 0 },
        ],
        challenge: {
            prompt: "परिच्छेद cap करा.",
            starterCode: `p::first-letter {
  initial-letter: 2;
}`,
            expectedOutput: "Drop cap decorates Marathi paragraph",
        },
        interviewQuestions: ["initial-letter लाभ?", "fallback कसा?"],
        related: ["css-pseudo-elements", "css-highlight-pseudo", "css-typography"],
        prev: "css-starting-style",
        next: "css-marker-style",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-marker-style",
        categoryId: "web",
        title: "Marker Style",
        marathiTitle: "::marker — सूची चिन्ह",
        level: "advanced",
        minutes: 40,
        summary: "::marker साहाय्याने list markers शैली.",
        sections: [
            { title: "1. marker कल्पना", content: "::marker नियम.\nlist चिन्ह.\nशैली स्पष्ट.", code: `li::marker {
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "2. चिन्ह निवड", content: "content बदल.\nखूण स्पष्ट.\ncolor नेमका.\nदृश्य सुबक.", code: `li::marker {
  content: "\\u2713";
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "3. गट क्रम", content: "nested list.\nmarker व्यवस्था.\nआत मोठा.\nरचना स्पष्ट.", code: `ul ul li::marker {
  content: "\\u2022";
  color: #334155;
}`, codeLanguage: "css" },
            { title: "4. काम सूची", content: "task रूप.\nचौखट खूण.\nmarker जागा.\nनियम नेमका.", code: `.tasks li::marker {
  content: "\\u25a1 ";  /* checkbox */
  color: #334155;
}`, codeLanguage: "css" },
            { title: "5. brand थर", content: "brand रंग.\nmarker रेषा.\nhover बदल.\nदृश्य सुबक.", code: `li::marker {
  content: "\\u2014 ";
  color: #0d9488;
}
li:hover::marker {
  color: #115e59;
}`, codeLanguage: "css" },
            { title: "6. आधार जुना", content: "जुन्या ब्राउझर.\n::marker नाही.\npadding थोडी.\nआकार ठोस.\nसवय नेमकी.", code: `li {
  padding-left: 4px;
}
li::marker {
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "सूचना सूची.\nचिन्ह नेटके.", code: `.note li::marker {
  content: "\\u2605 ";
  color: #0d9488;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["::marker कुठे?", "content चिन्ह?", "hover marker?", "list-style काय?"],
        quiz: [
            { question: "::marker काय?", options: ["सूची चिन्ह", "मथळा", "रेखा"], correct: 0 },
            { question: "content कुठे?", options: ["::marker", "::before", "::selection"], correct: 0 },
            { question: "hover marker?", options: ["होय", "नाही", "कधीच"], correct: 0 },
            { question: "steps क्रम?", options: ["counter", "flex", "float"], correct: 0 },
        ],
        challenge: {
            prompt: "सूची खुणा करा.",
            starterCode: `li::marker {
  content: "\\u2713 ";
  color: #0d9488;
}`,
            expectedOutput: "Custom Marathi list markers render",
        },
        interviewQuestions: ["::marker सीमा?", "content मर्यादा?"],
        related: ["css-counters-lab", "css-pseudo-elements", "css-typography"],
        prev: "css-initial-letter",
        next: "css-intrinsic-sizing",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-intrinsic-sizing",
        categoryId: "web",
        title: "Intrinsic Sizing",
        marathiTitle: "intrinsic-sizing — आंतरिक आकार",
        level: "advanced",
        minutes: 40,
        summary: "fit-content min-content max-content width नियम.",
        sections: [
            { title: "1. आंतरिक थर", content: "fit-content नियम.\ncontent प्रमाण.\nwidth नेमकी.", code: `.badge {
  width: fit-content;
}`, codeLanguage: "css" },
            { title: "2. min-content", content: "छोटा शब्द.\nwidth किमान.\nअक्षरे जुळतात.", code: `.wide {
  width: min-content;
}`, codeLanguage: "css" },
            { title: "3. max-content", content: "ओळ संपूर्ण.\nwidth घेते.\ncontent जागा.\nनियम नेमका.", code: `.row {
  width: max-content;
}`, codeLanguage: "css" },
            { title: "4. बटण आकार", content: "inline बटण.\nfit-content छान.\npadding सोय.\nदृश्य सुबक.", code: `button {
  width: fit-content;
  padding: 8px 16px;
}`, codeLanguage: "css" },
            { title: "5. tooltip थर", content: "tooltip नेमकी.\ncontent बाहेर.", code: `.tip {
  width: max-content;
  max-width: 240px;
}`, codeLanguage: "css" },
            { title: "6. संदेश थर", content: "chat bubble.\nwidth fit.\nओळ मिळते.\nसवय नेमकी.", code: `.bubble {
  width: fit-content;
  min-width: min-content;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "चिन्ह नीट.\nfit-content.", code: `.btn {
  width: fit-content;
  border-radius: 8px;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["fit-content काय?", "min-content कुठे?", "max-content कधी?", "bubble कसा?"],
        quiz: [
            { question: "fit-content?", options: ["content आकार", "रंग", "थर"], correct: 0 },
            { question: "min-content?", options: ["किमान", "जास्त", "शून्य"], correct: 0 },
            { question: "max-content?", options: ["संपूर्ण ओळ", "लहान", "मध्यम"], correct: 0 },
            { question: "button आकार?", options: ["fit", "cover", "auto"], correct: 0 },
        ],
        challenge: {
            prompt: "बटण आकार घ्या.",
            starterCode: `.btn {
  width: fit-content;
}`,
            expectedOutput: "Marathi button hugs its label",
        },
        interviewQuestions: ["fit-content वापर?", "min vs max फरक?"],
        related: ["css-grid-system", "css-layout-flex", "css-box-model"],
        prev: "css-marker-style",
        next: "css-text-overflow",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-text-overflow",
        categoryId: "web",
        title: "Text Overflow",
        marathiTitle: "text-overflow — दांडी थर",
        level: "advanced",
        minutes: 40,
        summary: "ellipsis text-overflow line-clamp व्यवस्था.",
        sections: [
            { title: "1. दांडी कल्पना", content: "ellipsis नियम.\ntext-overflow set.\nwidth नेमकी.", code: `.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
            { title: "2. ओळी मर्यादा", content: "दोन ओळी.\nline-clamp 2.\noverflow मर्यादा.\nवाचन नीट.", code: `.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`, codeLanguage: "css" },
            { title: "3. मथळा थर", content: "title ellipsis.\nnowrap ओळ.\nभाग जागा.\nनियम नेमका.", code: `.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
            { title: "4. कार्ड ओळी", content: "card lines.\nline-clamp 3.\ncontent थर.\nरचना सुबक.", code: `@supports (line-clamp: 2) {
  .desc {
    line-clamp: 3;
  }
}`, codeLanguage: "css" },
            { title: "5. आधार जुना", content: "line-clamp नाही.\noverflow clip.\nheight नेमकी.", code: `.desc {
  overflow: hidden;
  height: 4.5em;
}`, codeLanguage: "css" },
            { title: "6. clip नियम", content: "overflow clip.\nबाहेर नको.\nscroll नको.\nरचना शुद्ध.\nसवय नेमकी.", code: `.box {
  overflow: clip;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "मथळा एक.\nदांडी शेवट.", code: `.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["text-overflow काय?", "line-clamp कुठे?", "clip कधी?", "nowrap म्हणजे?"],
        quiz: [
            { question: "text-overflow?", options: ["दांडी", "ध्वनी", "रंग"], correct: 0 },
            { question: "line-clamp?", options: ["ओळी मर्यादा", "उंची", "रुंदी"], correct: 0 },
            { question: "nowrap?", options: ["एक ओळ", "पान", "थर"], correct: 0 },
            { question: "overflow clip?", options: ["बाहेर नको", "स्क्रोल", "मिड"], correct: 0 },
        ],
        challenge: {
            prompt: "मथळा एक ओळ करा.",
            starterCode: `.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
            expectedOutput: "Marathi heading truncates with ellipsis",
        },
        interviewQuestions: ["ellipsis कधी?", "clamp कसा?"],
        related: ["css-typography", "css-text-wrap", "css-box-model"],
        prev: "css-intrinsic-sizing",
        next: "css-text-decoration-deep",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-text-decoration-deep",
        categoryId: "web",
        title: "Decoration Deep",
        marathiTitle: "text-decoration — अधोरेखा गहन",
        level: "advanced",
        minutes: 40,
        summary: "underline thickness offset position नियम.",
        sections: [
            { title: "1. रेषा थर", content: "text-decoration नियम.\nunderline ठसा.\nthickness नेमकी.", code: `.link {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
            { title: "2. अंतर थर", content: "underline-offset नियम.\nअक्षर अंतर.\nरेखा जागा.\nवाचन आराम.", code: `.link {
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
            { title: "3. रंग नियम", content: "line color.\ncolor वेगळा.\nhighlight मऊ.\nदृश्य सुबक.", code: `.link {
  text-decoration-color: #0d9488;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
            { title: "4. खाली रेषा", content: "underline position.\nbelow रेषा.\nbaseline वगळा.", code: `.link {
  text-underline-position: under;
}`, codeLanguage: "css" },
            { title: "5. वाचन शैली", content: "links नीट.\nthickness वाढ.\noffset जागा.\nनियम नेमका.", code: `a {
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}`, codeLanguage: "css" },
            { title: "6. संवाद थर", content: "hover रंग.\ndecoration दाखवा.\nkeyboard साठी.\nदृश्य स्पष्ट.\nसवय नेमकी.", code: `.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "दुवे स्पष्ट.\nshort offset.", code: `.nav a {
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["thickness काय?", "offset कुठे?", "under कधी?", "hover कसा?"],
        quiz: [
            { question: "thickness?", options: ["जाडी", "रंग", "क्रम"], correct: 0 },
            { question: "underline-offset?", options: ["अंतर", "रुंदी", "ध्वनी"], correct: 0 },
            { question: "text-underline-position?", options: ["खाली", "वर", "आत"], correct: 0 },
            { question: "links कुठे?", options: ["nav", "body", "table"], correct: 0 },
        ],
        challenge: {
            prompt: "दुवे स्पष्ट करा.",
            starterCode: `.nav a {
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}`,
            expectedOutput: "Marathi nav links clearly underlined",
        },
        interviewQuestions: ["offset काट?", "thickness फायदा?"],
        related: ["css-typography", "css-focus-visible", "css-nav-systems"],
        prev: "css-text-overflow",
        next: "css-form-appearance",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-form-appearance",
        categoryId: "web",
        title: "Form Appearance",
        marathiTitle: "appearance — नियंत्रण रूप",
        level: "advanced",
        minutes: 40,
        summary: "appearance accent-color custom forms.",
        sections: [
            { title: "1. appearance कल्पना", content: "appearance none.\nब्राउझर रूप.\nनियंत्रण साधे.", code: `select {
  appearance: none;
}`, codeLanguage: "css" },
            { title: "2. checkbox थर", content: "checkbox रंग.\naccent नेमका.\nआकार स्थिर.\nरचना सुबक.", code: `input[type="checkbox"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
            { title: "3. range नियम", content: "range खूण.\naccent-color योग.\nघटक स्पष्ट.", code: `input[type="range"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
            { title: "4. custom select", content: "arrow खुणा.\ncustom नियम.\nappearance none.", code: `.custom {
  appearance: none;
  border: 1px solid #0d9488;
  border-radius: 8px;
  padding: 8px 12px;
}`, codeLanguage: "css" },
            { title: "5. फोकस थर", content: "focus-visible नियम.\noutline जोड.\nkeyboard साठी.\nनियम नेमका.", code: `.custom:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
            { title: "6. font संदेश", content: "font inherit.\nनियंत्रणासाठी.\nसाइट मॅच.\nरचना शुद्ध.\nसवय नेमकी.", code: `input,
select,
textarea,
button {
  font: inherit;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "फॉर्म नीट.\nएक शैली.", code: `select,
input,
button {
  appearance: none;
  font: inherit;
  border-radius: 8px;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["appearance none काय?", "accent-color कुठे?", "focus ring कसा?", "font inherit का?"],
        quiz: [
            { question: "appearance काय?", options: ["ब्राउझर रूप", "रंग", "ध्वनी"], correct: 0 },
            { question: "accent-color कुठे?", options: ["checkbox", "image", "audio"], correct: 0 },
            { question: "focus-visible?", options: ["keyboard", "mouse", "touch"], correct: 0 },
            { question: "font inherit?", options: ["नियंत्रण", "मजकूर", "थर"], correct: 0 },
        ],
        challenge: {
            prompt: "select स्वच्छ करा.",
            starterCode: `.custom {
  appearance: none;
  border-radius: 8px;
  padding: 8px 12px;
}`,
            expectedOutput: "Marathi form control styled custom",
        },
        interviewQuestions: ["appearance मर्यादा?", "accent कुठे?"],
        related: ["css-forms-styling", "css-focus-visible", "css-accent-color"],
        prev: "css-text-decoration-deep",
        next: "css-media-scripting",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-media-scripting",
        categoryId: "web",
        title: "Media Scripting",
        marathiTitle: "media-scripting — साधन तपास",
        level: "advanced",
        minutes: 40,
        summary: "scripting pointer hover media queries.",
        sections: [
            { title: "1. scripting नियम", content: "media scripting.\nenabled तपास.\nJS असेल.\nरचना बदल.", code: `@media (scripting: enabled) {
  .js {
    display: block;
  }
}`, codeLanguage: "css" },
            { title: "2. pointer थर", content: "pointer fine.\nमाउस सरळ.\nhover उपलब्ध.\nनियम नेमका.", code: `@media (pointer: fine) {
  .tiny {
    cursor: pointer;
  }
}`, codeLanguage: "css" },
            { title: "3. touch साठी", content: "any-pointer coarse.\nबटण मोठे.\nजागा सोय.", code: `@media (any-pointer: coarse) {
  button {
    min-height: 48px;
  }
}`, codeLanguage: "css" },
            { title: "4. hover नियम", content: "hover hover.\nहोवर पर्याय.\ntouch करा.", code: `@media (hover: hover) {
  .item:hover {
    background: #ccfbf1;
  }
}`, codeLanguage: "css" },
            { title: "5. अंधार नियम", content: "prefers dark.\ndark रूप.\nmedia सोपे.\nरंग जुळतो.", code: `@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
            { title: "6. contrast थर", content: "prefers-contrast more.\ncontrast वाढ.\ntext ठळक.\nवाचन आराम.\nसवय नेमकी.", code: `@media (prefers-contrast: more) {
  body {
    color: #000;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "scripting थर.\nबटण मोठे.", code: `@media (any-pointer: coarse) {
  .action {
    min-height: 48px;
  }
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["scripting कुठे?", "pointer fine काय?", "coarse कुठे?", "dark media?"],
        quiz: [
            { question: "scripting enabled?", options: ["JS चालू", "JS बंद", "ध्वनी"], correct: 0 },
            { question: "pointer coarse?", options: ["टच", "माउस", "की"], correct: 0 },
            { question: "hover hover?", options: ["उपलब्ध", "नाही", "शून्य"], correct: 0 },
            { question: "prefers-contrast?", options: ["वाचन", "रंग नाही", "गति"], correct: 0 },
        ],
        challenge: {
            prompt: "टच बटण करा.",
            starterCode: `@media (any-pointer: coarse) {
  button {
    min-height: 48px;
  }
}`,
            expectedOutput: "Marathi touch buttons enlarged",
        },
        interviewQuestions: ["scripting उपयोग?", "pointer vs any-pointer?"],
        related: ["css-media-ranges", "css-dark-mode", "css-responsive-table"],
        prev: "css-form-appearance",
        next: "css-caret-selection",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-caret-selection",
        categoryId: "web",
        title: "Caret Selection",
        marathiTitle: "caret-selection — कर्सर निवड",
        level: "advanced",
        minutes: 40,
        summary: "caret-color ::selection user-select नियम.",
        sections: [
            { title: "1. caret रंग", content: "caret-color नियम.\nकर्सर रंग.\ninput स्पष्ट.", code: `input,
textarea {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
            { title: "2. caret थर", content: "caret-shape नियम.\nblock रूप.\nजागा स्पष्ट.\nनियम नेमका.", code: `input {
  caret-shape: underline;
}`, codeLanguage: "css" },
            { title: "3. selection थर", content: "::selection नियम.\nनिवड रंग.\ntext ठळक.\nदृश्य सुबक.\n:selection थर जोड parent child समजते.\n:selection थर जोड नियम कडक आहे.\n:selection थर जोड पाळला तर सोपे.\n:selection थर जोड गोंधळ टाळतो.\n:selection थर जोड रचना स्थिर राहते.\n:selection थर जोड क्रम नेहमी सारखा.\n:selection थर जोड भाग जुळतात.\n:selection थर जोड गोंधळ टाळतो.\n:selection थर जोड रचना स्थिर राहते.\n:selection थर जोड क्रम नेहमी सारखा.\n:selection थर जोड भाग जुळतात.\n:selection थर जोड स्वरूप नीट होते.\n:selection थर जोड खोली संतुलित आहे.\n:selection थर जोड नियम बरोबर.", code: `::selection {
  background: #99f6e4;
  color: #134e4a;
}`, codeLanguage: "css" },
            { title: "4. मथळा निवड", content: "heading वेगळा.\nmark स्पष्ट.\ncontrast राखा.\nवाचन नीट.", code: `h1::selection {
  background: #0d9488;
  color: #ffffff;
}`, codeLanguage: "css" },
            { title: "5. user-select", content: "दुहेरी क्लिक.\nनिवड थांबे.\nउघडा भाग.", code: `.decoration {
  user-select: none;
}`, codeLanguage: "css" },
            { title: "6. कॉपी थर", content: "copy नियम.\nनिवड clear.\nशब्द सर्व.\nनियम नेमका.\nसवय नेमकी.", code: `.copy {
  user-select: all;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "input caret.\nनिवड रंग.", code: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
  color: #134e4a;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["caret-color कुठे?", "::selection काय?", "user-select नको?", "caret-shape?"],
        quiz: [
            { question: "caret-color?", options: ["कर्सर", "ध्वनी", "रेखा"], correct: 0 },
            { question: "::selection?", options: ["निवड रंग", "मथळा", "रीती"], correct: 0 },
            { question: "user-select none?", options: ["निवड थांबे", "निवड वाढ", "रंग"], correct: 0 },
            { question: "caret-shape?", options: ["ब्लॉक", "टीप", "रेखा"], correct: 0 },
        ],
        challenge: {
            prompt: "input caret रंग द्या.",
            starterCode: `input {
  caret-color: #0d9488;
}`,
            expectedOutput: "Marathi input caret teal",
        },
        interviewQuestions: ["caret-color लाभ?", "selection मर्यादा?"],
        related: ["css-focus-visible", "css-highlight-pseudo", "css-forms-styling"],
        prev: "css-media-scripting",
        next: "css-marathi-capstone11",
        levelLabel: exports.CSS11_LABEL,
    },
    {
        slug: "css-marathi-capstone11",
        categoryId: "web",
        title: "Interaction Capstone",
        marathiTitle: "Interaction Bag — भाग संग्रह",
        level: "advanced",
        minutes: 40,
        summary: "Level 11 साधने एकत्र शैली.",
        sections: [
            { title: "1. थीम खुणा", content: "थीम टोकन.\ncolor-scheme दोन.\nरंग जुळतो.", code: `:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#1f2937, #f4f4f5);
}`, codeLanguage: "css" },
            { title: "2. काच थर", content: "topbar ग्लास.\nbackdrop blur.\ncontent स्पष्ट.\nनियम नेमका.", code: `.topbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
}`, codeLanguage: "css" },
            { title: "3. entry शैली", content: "menu सुरुवात.\nopacity मऊ.\ntransition चाले.\nदृश्य सजीव.", code: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.95);
  }
}`, codeLanguage: "css" },
            { title: "4. मथळा सजावट", content: "drop cap.\ninitial-letter 2.\nरंग नेमका.\nवाचन आकर्षक.", code: `.article p:first-of-type::first-letter {
  initial-letter: 2;
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "5. सूची नीट", content: "marker खूण.\nsteps क्रम.\nरंग ब्रँड.\nरचना सुबक.", code: `.steps li::marker {
  content: "\\u2713 ";
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "6. दांडी शैली", content: "मथळा ellipsis.\noverflow hidden.\nnowrap ओळ.\nसवय नेमकी.", code: `.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
            { title: "Final Project", content: "interaction सर्व.\nएक जोड.", code: `::selection {
  background: #99f6e4;
  color: #134e4a;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["Level 11 नवे?", "glass कुठे?", "drop cap कसा?", "marker कोणते?"],
        quiz: [
            { question: "Level 11 थीम?", options: ["Interaction", "रंग रेषा", "जुना थर"], correct: 0 },
            { question: "light-dark कुठे?", options: ["color-scheme", "flex", "grid"], correct: 0 },
            { question: "backdrop blur?", options: ["काच", "रेखा", "रेडी"], correct: 0 },
            { question: "::selection कुठे?", options: ["निवड", "मथळा", "स्रोत"], correct: 0 },
        ],
        challenge: {
            prompt: "पोर्टल सुरू करा.",
            starterCode: `:root {
  color-scheme: light dark;
}`,
            expectedOutput: "Final interaction patterns assembled via Marathi portal",
        },
        interviewQuestions: ["तीन आवडते?", "caret मर्यादा?"],
        related: ["css-marathi-capstone10", "css-filters-fx", "css-dark-mode"],
        prev: "css-caret-selection",
        next: "css-light-dark",
        levelLabel: exports.CSS11_LABEL,
    },
];
