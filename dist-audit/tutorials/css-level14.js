"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssLevel14 = exports.CSS14_LABEL = void 0;
// === CSS · LEVEL 14 — Motion & Color ===
exports.CSS14_LABEL = "CSS · Level 14 — Motion & Color";
exports.cssLevel14 = [
    {
        slug: "css-container-queries",
        categoryId: "web",
        title: "Container Queries",
        marathiTitle: "container queries — आत अनुकूलन",
        level: "advanced",
        minutes: 40,
        summary: "@container ठोस नियम.",
        sections: [
            { title: "1. container कल्पना", content: "container-type नियम.\nआत अनुकूलन.\n@media पेक्षा सशक्त.", code: `.card {
  container-type: inline-size;
}`, codeLanguage: "css" },
            { title: "2. @container नियम", content: "@container मध्ये.\nरुंदी पाहा.\niframe छान.\nरचना स्पष्ट.", code: `@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}`, codeLanguage: "css" },
            { title: "3. container-name", content: "नाव नेमके.\ncontainer-name नियम.\nलक्ष्य स्पष्ट.", code: `.news {
  container: aside / inline-size;
}`, codeLanguage: "css" },
            { title: "4. style query", content: "style query.\n@container style.\nvariable तपास.", code: `@container style(--theme: dark) {
  .card {
    background: #111;
  }
}`, codeLanguage: "css" },
            { title: "5. कंडिशन नियम", content: "कंडिशन नेमकी.\nmin max.\nउंची नियम.", code: `@container (min-width: 300px) and (max-width: 500px) {
  .media {
    flex-direction: column;
  }
}`, codeLanguage: "css" },
            { title: "6. तुलना media", content: "media असते.\ncontainer असते.\nभेद स्पष्ट.\nसवय नेमकी.", code: `.card {
  container-type: inline-size;
}
@container (min-width: 450px) {
  .body {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "कार्ड container.\ntype एक.", code: `.products {
  container-type: inline-size;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["container-type काय?", "@container कुठे?", "style query कधी?", "name कसा?"],
        quiz: [
            { question: "container-type?", options: ["आत मोजणी", "रंग", "ध्वनी"], correct: 0 },
            { question: "@container?", options: ["रुंदी तपास", "थर", "रेखा"], correct: 0 },
            { question: "container-name?", options: ["नाव देणे", "नवीन", "क्रम"], correct: 0 },
            { question: "style query?", options: ["variable तपास", "रंग", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "कार्ड container करा.",
            starterCode: `.products {
  container-type: inline-size;
}`,
            expectedOutput: "Marathi card adapts inside its container",
        },
        interviewQuestions: ["container vs media?", "style query कधी?"],
        related: ["css-responsive-table", "css-typography", "css-basics"],
        prev: "css-marathi-capstone13",
        next: "css-has-selector",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-has-selector-2",
        categoryId: "web",
        title: "Has Selector",
        marathiTitle: ":has() — नवा निवडक",
        level: "advanced",
        minutes: 40,
        summary: ":has() पालक निवड.",
        sections: [
            { title: "1. has कल्पना", content: ":has() नियम.\nमुल तपास.\nपालक निवड.", code: `.card:has(img) {
  display: block;
}`, codeLanguage: "css" },
            { title: "2. :checked थर", content: ":has(:checked).\nनिवड स्पष्ट.\nrow खूण.\nरचना स्पष्ट.", code: `tr:has(input:checked) {
  background: #f0fdf4;
}`, codeLanguage: "css" },
            { title: "3. मेनू नियम", content: ":has(> a).\nथेट मुल.\nमेनू रंग.", code: `nav li:has(> ul)::after {
  content: "\\25BE";
}`, codeLanguage: "css" },
            { title: "4. गट थर", content: ":has(:focus-within).\nगट उजळ.\nफॉर्म क्षेत्र.", code: `.field:has(:focus-within) {
  border-color: #0d9488;
}`, codeLanguage: "css" },
            { title: "5. कार्ड नियम", content: ":has(img).\nचित्र कार्ड.\nस्लाइड मोठा.", code: `.slide:has(img) {
  grid-template-columns: 1fr 1fr;
}`, codeLanguage: "css" },
            { title: "6. तुलना नियम", content: ":has(:not()).\nजटिल टाळा.\ncycle नको.\nसवय नेमकी.", code: `.box:has(:not(.empty)) {
  border: 2px solid #334155;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "सूची निवड.\nhas एक.", code: `li:has(strong) {
  font-weight: 700;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: [":has काय?", ":checked कुठे?", "थेट मुल कसा?", "cycle टाळा कधी?"],
        quiz: [
            { question: ":has()?", options: ["पालक निवड", "रंग", "ध्वनी"], correct: 0 },
            { question: ":checked?", options: ["निवड स्थिती", "थर", "रेखा"], correct: 0 },
            { question: "थेट मुल?", options: ["> खूण", "नवीन", "क्रम"], correct: 0 },
            { question: "cycle?", options: ["टाळा जटिल", "रंग", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "सूची निवड दाखवा.",
            starterCode: `li:has(strong) {
  font-weight: 700;
}`,
            expectedOutput: "Marathi parent list item emphasized via :has()",
        },
        interviewQuestions: [":has फायदा?", "performance धोका?"],
        related: ["css-focus-within", "css-pseudo-state", "css-forms-styling"],
        prev: "css-container-queries",
        next: "css-color-mix",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-color-mix",
        categoryId: "web",
        title: "Color Mix",
        marathiTitle: "color-mix — रंग मिसळ",
        level: "advanced",
        minutes: 40,
        summary: "color-mix() दोन रंग.",
        sections: [
            { title: "1. color-mix कल्पना", content: "color-mix() नियम.\nदोन रंग.\nप्रमाण सेट.", code: `.chip {
  background: color-mix(in srgb, red 70%, white);
}`, codeLanguage: "css" },
            { title: "2. शेड थर", content: "hover थर.\nमूळ रंग.\nरंग मऊ.\nरचना स्पष्ट.", code: `.btn:hover {
  background: color-mix(in srgb, #0d9488 85%, black);
}`, codeLanguage: "css" },
            { title: "3. किनार नियम", content: "border रंग.\ncolor-mix जोड.\nध्वनी वाढ.", code: `.card {
  border: 1px solid color-mix(in oklab, #0d9488 40%, white);
}`, codeLanguage: "css" },
            { title: "4. मृदू थर", content: "क्रिया स्थिती.\nअर्धे प्रमाण.\nसजीव दिसे.", code: `.btn:disabled {
  background: color-mix(in srgb, #0d9488 40%, white);
}`, codeLanguage: "css" },
            { title: "5. प्रमाण नियम", content: "प्रमाण नेमके.\nटक्केवारी.\nएक तर अंत.", code: `.tint {
  background: color-mix(in oklab, #155e75 60%, white);
}`, codeLanguage: "css" },
            { title: "6. आधार थर", content: "आधार नवा.\nजुने साधे.\nपडताळा नीट.\nसवय नेमकी.", code: `.safe-tint {
  background: #d9f2ee;
}
@supports (background: color-mix(in srgb, red, white)) {
  .safe-tint {
    background: color-mix(in oklab, #0d9488 20%, white);
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "बटण शेड.\ncolor-mix एक.", code: `.btn-primary {
  background: color-mix(in srgb, #0d9488 90%, black);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["color-mix काय?", "in srgb कुठे?", "hover कसा?", "प्रमाण कसे?"],
        quiz: [
            { question: "color-mix()?", options: ["दोन रंग मिसळ", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "in oklab?", options: ["जागा रंग", "थर", "क्रम"], correct: 0 },
            { question: "hover?", options: ["शेड जोड", "नवीन", "रंग"], correct: 0 },
            { question: "प्रमाण?", options: ["टक्केवारी", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "बटण शेड करा.",
            starterCode: `.btn-primary {
  background: color-mix(in srgb, #0d9488 90%, black);
}`,
            expectedOutput: "Marathi button mixed shade via color-mix()",
        },
        interviewQuestions: ["color-mix आधार?", "in srgb vs oklab?"],
        related: ["css-oklch-color", "css-colors-background", "css-grid-system"],
        prev: "css-has-selector",
        next: "css-oklch-color",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-oklch-color",
        categoryId: "web",
        title: "Oklch Color",
        marathiTitle: "oklch — रंग जागा",
        level: "advanced",
        minutes: 40,
        summary: "oklch() हलका रंग नियंत्रण.",
        sections: [
            { title: "1. oklch कल्पना", content: "oklch() नियम.\nहलका जागा.\nदृश्य साम्य.", code: `.brand {
  color: oklch(0.7 0.15 160);
}`, codeLanguage: "css" },
            { title: "2. L थर", content: "L मूल्य नेमकी.\nहलका पातळी.\nतुलना स्पष्ट.\nरचना स्पष्ट.", code: `.muted {
  color: oklch(0.9 0.05 160);
}`, codeLanguage: "css" },
            { title: "3. chroma नियम", content: "C मूल्य.\nरंग वेगळा.\nखूप टाळा.", code: `.loud {
  color: oklch(0.6 0.25 25);
}`, codeLanguage: "css" },
            { title: "4. hue थर", content: "H प्रकार.\nनिळा हिरवा.\nक्रम नेमका.", code: `.cool {
  color: oklch(0.55 0.1 250);
}`, codeLanguage: "css" },
            { title: "5. मालिका नियम", content: "डार्क थर.\nएकच hue.\nटोन योग्य.", code: `:root {
  --brand: oklch(0.65 0.18 180);
  --brand-dark: oklch(0.45 0.16 180);
}`, codeLanguage: "css" },
            { title: "6. तुलना थर", content: "hex थर.\noklch अगोदर.\nआधार साधा.\nसवय नेमकी.", code: `:root {
  --accent: #0d9488;
}
@supports (color: oklch(0.7 0.15 160)) {
  :root {
    --accent: oklch(0.65 0.18 180);
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "टोन नियम.\noklch एक.", code: `.button {
  background: oklch(0.65 0.18 180);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["oklch काय?", "L कुठे?", "C काय?", "H नियम?"],
        quiz: [
            { question: "oklch()?", options: ["हलका नियंत्रण", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "L?", options: ["हलकीपणा", "थर", "क्रम"], correct: 0 },
            { question: "C?", options: ["रंग वेगळा", "नवीन", "रंग"], correct: 0 },
            { question: "H?", options: ["रंग प्रकार", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "टोन मालिका करा.",
            starterCode: `.button {
  background: oklch(0.65 0.18 180);
}`,
            expectedOutput: "Marathi tonal scale via oklch()",
        },
        interviewQuestions: ["oklch फायदा?", "hex पासून बदल कधी?"],
        related: ["css-color-mix", "css-grid-system", "css-custom-props"],
        prev: "css-color-mix",
        next: "css-light-dark",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-light-dark-2",
        categoryId: "web",
        title: "Light Dark",
        marathiTitle: "light-dark — थीम नियम",
        level: "advanced",
        minutes: 40,
        summary: "light-dark() रंग वातावरण.",
        sections: [
            { title: "1. light-dark कल्पना", content: "color-scheme नियम.\nlight dark.\nएक मूल्य.", code: `:root {
  color-scheme: light dark;
}
body {
  background: light-dark(white, #0f172a);
  color: light-dark(#0f172a, white);
}`, codeLanguage: "css" },
            { title: "2. फॉर्म थर", content: "फॉर्म रंग.\nसिस्टम थीम.\nकोड सोपा.\nरचना स्पष्ट.", code: `input {
  background: light-dark(white, #1e293b);
  color: light-dark(#0f172a, white);
}`, codeLanguage: "css" },
            { title: "3. कार्ड नियम", content: "कार्ड रंग.\nदोन पालट.\nसममूल्य.", code: `.card {
  background: light-dark(#ffffff, #111c2e);
}`, codeLanguage: "css" },
            { title: "4. किनार थर", content: "किनार हलका.\nदृश्य वेगळा.\nरंग तोल.", code: `.btn {
  border: 1px solid light-dark(#cbd5e1, #334155);
}`, codeLanguage: "css" },
            { title: "5. स्वतः नियम", content: "color-scheme ठरवा.\nस्वतः प्रमाण.", code: `:root {
  color-scheme: dark;
}
body {
  background: light-dark(white, #0f172a);
}`, codeLanguage: "css" },
            { title: "6. आधार थर", content: "जुने साधे.\nmedia तपास.\nपडताळा नीट.\nसवय नेमकी.", code: `body {
  background: white;
}
@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "थीम स्विच.\nlight-dark एक.", code: `:root {
  color-scheme: light dark;
}
body {
  background: light-dark(white, #0f172a);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["color-scheme काय?", "light-dark कुठे?", "किनार कसा?", "आधार कधी?"],
        quiz: [
            { question: "color-scheme?", options: ["थीम मर्यादा", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "light-dark()?", options: ["दोन रंग", "थर", "क्रम"], correct: 0 },
            { question: "किनार?", options: ["दोन्ही थीम", "नवीन", "रंग"], correct: 0 },
            { question: "जुना आधार?", options: ["media साधा", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "थीम प्रणाली करा.",
            starterCode: `:root {
  color-scheme: light dark;
}
body {
  background: light-dark(white, #0f172a);
}`,
            expectedOutput: "Marathi body flips with system theme",
        },
        interviewQuestions: ["light-dark आधार?", "prefers पेक्षा फायदा?"],
        related: ["css-prefers-media", "css-colors-background", "css-grid-system"],
        prev: "css-oklch-color",
        next: "css-scope-rule",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-scope-rule",
        categoryId: "web",
        title: "Scope Rule",
        marathiTitle: "@scope — क्षेत्र नियम",
        level: "advanced",
        minutes: 40,
        summary: "@scope नियम तोल.",
        sections: [
            { title: "1. scope कल्पना", content: "@scope नियम.\nक्षेत्र स्पष्ट.\nबाहेर काही नाही.", code: `@scope (.card) {
  h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
            { title: "2. खोल थर", content: "ओळख कमी.\nनियम सुरक्षित.\nमर्यादा स्पष्ट.\nरचना स्पष्ट.", code: `@scope (.list) to (.item) {
  p {
    margin: 0;
  }
}`, codeLanguage: "css" },
            { title: "3. एकत्र नियम", content: "@scope एकत्र.\nनाव मिळते.\nअव्यवस्था नाही.", code: `@scope (.teaser) {
  .title {
    font-size: 1.2rem;
  }
}`, codeLanguage: "css" },
            { title: "4. आधार नियम", content: "आधार तपासा.\nसोपा नियम.\nबाहेर मर्यादा.", code: `.teaser .title {
  font-size: 1.1rem;
}
@scope (.teaser) {
  .title {
    font-size: 1.25rem;
  }
}`, codeLanguage: "css" },
            { title: "5. खोल थर", content: "scope nested.\nखोल घरटे.\nनियम व्यवस्थित.", code: `@scope (.app) {
  @scope (.panel) {
    button {
      width: 100%;
    }
  }
}`, codeLanguage: "css" },
            { title: "6. तुलना थर", content: "BEM थर.\nscope आधुनिक.\nनिवड सोपी.\nसवय नेमकी.", code: `.card__title {
  color: #0d9488;
}
@scope (.card) {
  .title {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "कार्ड scope.\n@scope एक.", code: `@scope (.card) {
  h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["@scope काय?", "to मर्यादा?", "nested कसा?", "BEM तुलना?"],
        quiz: [
            { question: "@scope?", options: ["क्षेत्र नियम", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "to?", options: ["शेवट मर्यादा", "थर", "क्रम"], correct: 0 },
            { question: "nested?", options: ["खोल scope", "नवीन", "रंग"], correct: 0 },
            { question: "नाव?", options: ["कमी गाळा", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "कार्ड scope करा.",
            starterCode: `@scope (.card) {
  h2 {
    color: #0d9488;
  }
}`,
            expectedOutput: "Marathi card styles scoped without leakage",
        },
        interviewQuestions: ["@scope फायदा?", "आधार समस्या?"],
        related: ["css-cascade-keywords", "css-cascade-layers", "css-popover-tips"],
        prev: "css-light-dark",
        next: "css-text-wrap",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-text-wrap",
        categoryId: "web",
        title: "Text Wrap",
        marathiTitle: "text-wrap — ओळ तोल",
        level: "advanced",
        minutes: 40,
        summary: "text-wrap balance pretty.",
        sections: [
            { title: "1. balance कल्पना", content: "text-wrap balance.\nओळ समान.\nशीर्ष नीट.", code: `h2 {
  text-wrap: balance;
}`, codeLanguage: "css" },
            { title: "2. pretty थर", content: "text-wrap pretty.\nशेवट सुबक.\nपरिच्छेद नीट.\nरचना स्पष्ट.", code: `p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
            { title: "3. मर्यादा नियम", content: "balance खर्च.\nकमी मजकूर.\nमोठे शीर्ष.", code: `.hero h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
            { title: "4. एकत्र थर", content: "typography सोपा.\nप्रमाण योग्य.\ntext-wrap जोड.", code: `.hero {
  max-width: 60ch;
}
.hero h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
            { title: "5. आधार नियम", content: "आधार जुने.\nसोपा जोड.\nपडताळा नीट.", code: `h2 {
  text-wrap: balance;
  overflow-wrap: normal;
}`, codeLanguage: "css" },
            { title: "6. तुलना थर", content: "normal थर.\nbalance नवा.\nकधी वापर.\nसवय नेमकी.", code: `h1 {
  text-wrap: balance;
}
p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "शीर्ष सम.\nbalance एक.", code: `.headline {
  text-wrap: balance;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["balance काय?", "pretty कुठे?", "खर्च कधी?", "आधार कसा?"],
        quiz: [
            { question: "text-wrap balance?", options: ["ओळ समान", "रंग", "ध्वनी"], correct: 0 },
            { question: "pretty?", options: ["शेवट सुबक", "थर", "क्रम"], correct: 0 },
            { question: "मर्यादा?", options: ["कमी मजकूर", "नवीन", "रंग"], correct: 0 },
            { question: "जुना आधार?", options: ["normal साधा", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "मथळा सम करा.",
            starterCode: `.headline {
  text-wrap: balance;
}`,
            expectedOutput: "Marathi headline breaks evenly",
        },
        interviewQuestions: ["balance मर्यादा?", "कधी खर्च जास्त?"],
        related: ["css-typography", "css-text-spacing", "css-typography"],
        prev: "css-scope-rule",
        next: "css-scroll-driven",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-scroll-driven",
        categoryId: "web",
        title: "Scroll Driven",
        marathiTitle: "scroll timeline — स्क्रोल गती",
        level: "advanced",
        minutes: 40,
        summary: "animation-timeline scroll नियम.",
        sections: [
            { title: "1. scroll नियम", content: "animation-timeline.\nscroll source.\nगती जोड.", code: `.progress {
  animation: grow linear both;
  animation-timeline: scroll();
}`, codeLanguage: "css" },
            { title: "2. view थर", content: "view() timeline.\nदृश्य स्थिती.\nप्रगती नेमकी.\nरचना स्पष्ट.", code: `.card {
  animation: fade linear both;
  animation-timeline: view();
  animation-range: entry 10% exit 90%;
}`, codeLanguage: "css" },
            { title: "3. keyframes नियम", content: "keyframes जोड.\nauto मूल्ये.\nटोके नवे.", code: `@keyframes grow {
  from { scale: 0; }
  to { scale: 1; }
}`, codeLanguage: "css" },
            { title: "4. बार नियम", content: "एक बार.\nशीर्ष नियम.\nगती स्पष्ट.", code: `header .bar {
  transform-origin: left;
  animation: grow linear both;
  animation-timeline: scroll();
}`, codeLanguage: "css" },
            { title: "5. range थर", content: "एंट्री मध्ये.\nrange नेमकी.\nस्लाइड मऊ.", code: `.slide {
  animation: rise linear both;
  animation-timeline: view();
  animation-range: cover 0 cover 40%;
}`, codeLanguage: "css" },
            { title: "6. आधार नियम", content: "एक टेकनिक.\nसोपा toggle.\nआधार मर्यादा.\nसवय नेमकी.", code: `.fixed {
  transform: scale(1);
}
@supports (animation-timeline: view()) {
  .card {
    animation: rise linear both;
    animation-timeline: view();
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "बार प्रगती.\nscroll एक.", code: `.progress {
  animation: grow linear both;
  animation-timeline: scroll();
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["animation-timeline?", "view() कुठे?", "range काय?", "आधार कसा?"],
        quiz: [
            { question: "animation-timeline?", options: ["स्क्रोल नियम", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "view()?", options: ["दृश्य स्थिती", "थर", "क्रम"], correct: 0 },
            { question: "scroll()?", options: ["स्क्रोल स्रोत", "नवीन", "रंग"], correct: 0 },
            { question: "range?", options: ["स्थान नेमके", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "प्रगती बार करा.",
            starterCode: `.progress {
  animation: grow linear both;
  animation-timeline: scroll();
}`,
            expectedOutput: "Marathi progress bar tied to scroll",
        },
        interviewQuestions: ["view vs scroll timeline?", "easing कसा?"],
        related: ["css-animation-easing", "css-keyframes-tip", "css-responsive-table"],
        prev: "css-text-wrap",
        next: "css-view-transitions",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-view-transitions",
        categoryId: "web",
        title: "View Transitions",
        marathiTitle: "view transitions — थर बदल",
        level: "advanced",
        minutes: 40,
        summary: "view-transition-name स्थिती.",
        sections: [
            { title: "1. view कल्पना", content: "view transitions.\nपान बदल.\nसजीव थर.", code: `::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.4s;
}`, codeLanguage: "css" },
            { title: "2. name नियम", content: "view-transition-name.\nमुल थर.\nस्वतंत्र गती.\nरचना स्पष्ट.", code: `.avatar {
  view-transition-name: avatar;
}`, codeLanguage: "css" },
            { title: "3. सूची थर", content: "सूची नवीन.\nनिवड स्पष्ट.\nखूणपट्टी.", code: `.selected {
  view-transition-name: selection;
}`, codeLanguage: "css" },
            { title: "4. आधार नियम", content: "आधार साधा.\nविस्तार नाही.\nपडताळा नीट.", code: `@supports (view-transition-name: none) {
  .avatar {
    view-transition-name: avatar;
  }
}`, codeLanguage: "css" },
            { title: "5. गती थर", content: "क्रिया नेमकी.\nथवा मऊ.\nवेग योग्य.", code: `::view-transition-group(selection) {
  animation-duration: 0.5s;
}`, codeLanguage: "css" },
            { title: "6. तुलना थर", content: "जुने थर.\nview हलका.\nनिवड नेमकी.\nसवय नेमकी.", code: `.page {
  background: white;
}
::view-transition-group(selection) {
  position: absolute;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "कार्ड निवड.\nview एक.", code: `.card {
  view-transition-name: card;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["view transition?", "name काय?", "@supports कधी?", "निवड कशी?"],
        quiz: [
            { question: "view-transition-name?", options: ["थर नाव", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "::view-transition?", options: ["गती थर", "थर", "क्रम"], correct: 0 },
            { question: "@supports?", options: ["आधार तपास", "नवीन", "रंग"], correct: 0 },
            { question: "नाव बदल?", options: ["स्वतंत्र गती", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "कार्ड बदल करा.",
            starterCode: `.card {
  view-transition-name: card;
}`,
            expectedOutput: "Marathi card morphs across pages",
        },
        interviewQuestions: ["view transitions मर्यादा?", "नाव नेमके कधी?"],
        related: ["css-scroll-driven", "css-animation-easing", "css-keyframes-tip"],
        prev: "css-scroll-driven",
        next: "css-subgrid",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-subgrid",
        categoryId: "web",
        title: "Subgrid",
        marathiTitle: "subgrid — खोल ग्रिड",
        level: "advanced",
        minutes: 40,
        summary: "grid-template-rows subgrid.",
        sections: [
            { title: "1. subgrid कल्पना", content: "subgrid नियम.\nमुल ग्रिड.\nपालक आधार.", code: `.panel {
  display: grid;
  grid-template-columns: subgrid;
}`, codeLanguage: "css" },
            { title: "2. संरेखण थर", content: "स्तंभ जुळतात.\nसमान रुंदी.\nकार्ड व्यवस्थित.\nरचना स्पष्ट.", code: `.row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
.row > * {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
}`, codeLanguage: "css" },
            { title: "3. पंक्ती थर", content: "पंक्ती subgrid.\nउंची तोल.\nसारणी नीट.", code: `.shelf {
  display: grid;
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
            { title: "4. कस्टम थर", content: "रचना साधा.\nभाग लक्ष्य.\nनियंत्रण स्पष्ट.", code: `.dashboard {
  display: grid;
  grid-template-columns: subgrid;
  gap: 1rem;
}`, codeLanguage: "css" },
            { title: "5. आधार नियम", content: "आधार जुना.\nसाधा फॉलबॅक.\nपडताळा नीट.", code: `.panel {
  display: grid;
}
@supports (grid-template-rows: subgrid) {
  .panel {
    grid-template-rows: subgrid;
  }
}`, codeLanguage: "css" },
            { title: "6. तुलना थर", content: "नवीन नियम.\nflex तोल.\nकधी वापर.\nसवय नेमकी.", code: `.card {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "सूची नीट.\nsubgrid एक.", code: `.card-list {
  display: grid;
  gap: 1rem;
}
.card-list .card {
  display: grid;
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["subgrid काय?", "grid-row कुठे?", "आधार कसा?", "subgrid कधी?"],
        quiz: [
            { question: "subgrid?", options: ["पालक रचना", "रंग रेखा", "ध्वनी"], correct: 0 },
            { question: "grid-row span?", options: ["उंची थर", "थर", "क्रम"], correct: 0 },
            { question: "@supports?", options: ["आधार तपास", "नवीन", "रंग"], correct: 0 },
            { question: "subgrid rows?", options: ["उंची तोल", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "कार्ड subgrid करा.",
            starterCode: `.card-list {
  display: grid;
  gap: 1rem;
}`,
            expectedOutput: "Marathi cards align rows via subgrid",
        },
        interviewQuestions: ["subgrid फायदा?", "आधार मर्यादा?"],
        related: ["css-grid-template", "css-grid-auto-flow", "css-auto-fit-fill"],
        prev: "css-view-transitions",
        next: "css-prefers-media",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-prefers-media",
        categoryId: "web",
        title: "Prefer Media",
        marathiTitle: "prefers — वापरकर्ता नियम",
        level: "advanced",
        minutes: 40,
        summary: "prefers-reduced-motion नियम.",
        sections: [
            { title: "1. reduced कल्पना", content: "prefers-reduced-motion.\nगती हलकी.\nसन्मान नीट.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
  }
}`, codeLanguage: "css" },
            { title: "2. contrast थर", content: "prefers-contrast.\nउजळ थर.\nवाचन सोपे.\nरचना स्पष्ट.", code: `@media (prefers-contrast: more) {
  body {
    filter: contrast(1.1);
  }
}`, codeLanguage: "css" },
            { title: "3. theme नियम", content: "prefers-color-scheme.\nsystem थीम.\nस्वयं जोड.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0f172a;
    --fg: white;
  }
}`, codeLanguage: "css" },
            { title: "4. कमी गती", content: "animation थांबवा.\nक्रिया स्थिर.\nसरकता बंद.", code: `@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}`, codeLanguage: "css" },
            { title: "5. दोन्ही नियम", content: "दोन्ही स्थिती.\nनियम स्पष्ट.\nसन्मान सर्व.", code: `@media (prefers-reduced-motion: no-preference) {
  .hero {
    animation: rise 0.6s ease-out;
  }
}`, codeLanguage: "css" },
            { title: "6. नियम थर", content: "पुढे वापर.\nसर्व ठिकाणी.\nसाइट उजळ.\nसवय नेमकी.", code: `@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition: none !important;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "गती सन्मान.\nreduced एक.", code: `@media (prefers-reduced-motion: reduce) {
  .banner {
    animation: none;
  }
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["prefers काय?", "reduced कुठे?", "contrast कधी?", "theme कसा?"],
        quiz: [
            { question: "prefers-reduced?", options: ["गती कमी", "रंग", "ध्वनी"], correct: 0 },
            { question: "no-preference?", options: ["गती ठीक", "थर", "क्रम"], correct: 0 },
            { question: "prefers-contrast?", options: ["उजळ थर", "नवीन", "रंग"], correct: 0 },
            { question: "color-scheme?", options: ["थीम जोड", "रेखा", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "गती नियम करा.",
            starterCode: `@media (prefers-reduced-motion: reduce) {
  .banner {
    animation: none;
  }
}`,
            expectedOutput: "Marathi banner respects reduced motion",
        },
        interviewQuestions: ["reduced-motion का?", "contrast आधार?"],
        related: ["css-light-dark", "css-animation-easing", "css-grid"],
        prev: "css-subgrid",
        next: "css-marathi-capstone14",
        levelLabel: exports.CSS14_LABEL,
    },
    {
        slug: "css-marathi-capstone14",
        categoryId: "web",
        title: "Motion Color Capstone",
        marathiTitle: "Motion Bag — गती रंग",
        level: "advanced",
        minutes: 40,
        summary: "Level 14 साधने एकत्र.",
        sections: [
            { title: "1. कार्ड container", content: "container-type.\nआत अनुकूलन.\nकार्ड टिकते.", code: `.card {
  container-type: inline-size;
}`, codeLanguage: "css" },
            { title: "2. रंग थर", content: "oklch रंग.\ncolor-mix थर.\nमऊ नियम.", code: `.card {
  background: color-mix(in srgb, oklch(0.65 0.18 180) 85%, white);
}`, codeLanguage: "css" },
            { title: "3. डार्क थर", content: "light-dark जोड.\nथीम जुळे.", code: `:root {
  color-scheme: light dark;
}
.card {
  background: light-dark(white, #111c2e);
}`, codeLanguage: "css" },
            { title: "4. स्क्रोल थर", content: "scroll timeline.\nप्रगती बार.\nसजीव नीट.", code: `.bar {
  animation: grow linear both;
  animation-timeline: scroll();
}`, codeLanguage: "css" },
            { title: "5. संरेखित थर", content: "subgrid तोल.\nओळ एक.\nसंरेखण स्पष्ट.", code: `.row > * {
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
            { title: "6. गती सन्मान", content: "prefers थर.\nगती हलकी.\nसर्व आराम.", code: `@media (prefers-reduced-motion: reduce) {
  .bar {
    animation: none;
  }
}`, codeLanguage: "css" },
            { title: "Final Project", content: "सर्व जोड.", code: `.card {
  container-type: inline-size;
}
.row > * {
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["container काय?", "oklch कुठे?", "subgrid कधी?", "reduced नियम?"],
        quiz: [
            { question: "Level 14 थीम?", options: ["Motion & Color", "जुना थर", "रंग रेषा"], correct: 0 },
            { question: "container-type?", options: ["आत मोजणी", "ध्वनी", "क्रम"], correct: 0 },
            { question: "color-mix?", options: ["रंग मिसळ", "रंग", "शोर"], correct: 0 },
            { question: "prefers-reduced?", options: ["गती कमी", "रेखा", "थर"], correct: 0 },
        ],
        challenge: {
            prompt: "पोर्टल उजळ करा.",
            starterCode: `.card {
  container-type: inline-size;
}`,
            expectedOutput: "Final motion & color patterns assembled via Marathi portal",
        },
        interviewQuestions: ["तीन आवडते?", "container मर्यादा?"],
        related: ["css-marathi-capstone13", "css-container-queries", "css-oklch-color"],
        prev: "css-prefers-media",
        next: "css-container-queries",
        levelLabel: exports.CSS14_LABEL,
    },
];
