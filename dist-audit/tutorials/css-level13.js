"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cssLevel13 = exports.CSS13_LABEL = void 0;
// === CSS · LEVEL 13 — Precision & Control ===
exports.CSS13_LABEL = "CSS · Level 13 — Precision & Control";
exports.cssLevel13 = [
    {
        slug: "css-grid-template",
        categoryId: "web",
        title: "Grid Template",
        marathiTitle: "grid-template — रचना नकाशा",
        level: "advanced",
        minutes: 40,
        summary: "grid-template-areas सह जागा नकाशा.",
        sections: [
            { title: "1. areas कल्पना", content: "grid-template-areas नियम.\nnamed सेल.\nरचना वाचता.", code: `.layout {
  grid-template-areas:
    "header header"
    "main side"
    "footer footer";
}`, codeLanguage: "css" },
            { title: "2. area नाव", content: "नाव नेमके.\ngrid-area नियम.\nमुल जुळतात.\nरचना स्पष्ट.", code: `.header { grid-area: header; }
.main { grid-area: main; }`, codeLanguage: "css" },
            { title: "3. मध्य जागा", content: "काळजी ओळ.\nempty सेल.\nवाचता रचना.\nदृश्य सुबक.", code: `.layout {
  grid-template-areas:
    "header header"
    ". main"
    "footer footer";
}`, codeLanguage: "css" },
            { title: "4. दोन मध्य", content: "जागा तोल.\nतिघे विभाग.\nनियंत्रण स्पष्ट.", code: `.layout {
  grid-template-areas:
    "h h h"
    "m s a"
    "f f f";
}`, codeLanguage: "css" },
            { title: "5. responsive नियम", content: "एक स्तंभ.\nareas बदल.\nमोबाईल नीट.", code: `@media (max-width: 600px) {
  .layout {
    grid-template-areas:
      "h"
      "m"
      "s"
      "f";
  }
}`, codeLanguage: "css" },
            { title: "6. एकत्र नियम", content: "ओळ उंची.\nस्तंभ रुंदी.\nएकत्र योजना.\nरचना पूर्ण.", code: `.layout {
  grid-template-areas: "h h" "m s" "f f";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "layout नकाशा.\nareas एक.", code: `.page {
  grid-template-areas: "header header" "main sidebar" "footer footer";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["areas काय?", "grid-area कुठे?", "empty सेल कसा?", "responsive कसा?"],
        quiz: [
            { question: "grid-template-areas?", options: ["नकाशा", "रंग", "ध्वनी"], correct: 0 },
            { question: "grid-area?", options: ["नाव द्या", "जोडा रंग", "रेखा"], correct: 0 },
            { question: ". सेल?", options: ["रिकामा", "मुख्य", "थर"], correct: 0 },
            { question: "responsive?", options: ["areas बदल", "ध्वनी", "क्रम"], correct: 0 },
        ],
        challenge: {
            prompt: "पृष्ठ नकाशा तयार करा.",
            starterCode: `.page {
  grid-template-areas: "header header" "main sidebar" "footer footer";
  grid-template-rows: auto 1fr auto;
}`,
            expectedOutput: "Marathi page layout by named areas",
        },
        interviewQuestions: ["areas फायदा?", "सेल रिकामा कधी?"],
        related: ["css-auto-fit-fill", "css-grid-system", "css-grid-auto-flow"],
        prev: "css-marathi-capstone12",
        next: "css-auto-fit-fill",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-auto-fit-fill",
        categoryId: "web",
        title: "Auto Fit Fill",
        marathiTitle: "auto-fit — कार्ड नियम",
        level: "advanced",
        minutes: 40,
        summary: "repeat auto-fit auto-fill responsive कार्ड.",
        sections: [
            { title: "1. auto-fit कल्पना", content: "repeat auto-fit.\nminmax नियम.\nकार्ड जुळतात.", code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`, codeLanguage: "css" },
            { title: "2. auto-fill नियम", content: "auto-fill जागा.\nरिकामा राहो.\nगणना स्पष्ट.", code: `.grid {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}`, codeLanguage: "css" },
            { title: "3. एकfr तोल", content: "minmax मध्ये.\nफ्रेक्शन जुळतो.\nरुंदी वाढे.", code: `.cards {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}`, codeLanguage: "css" },
            { title: "4. अंतर नियम", content: "gap थर.\nकार्ड जागा.\nवळण नेमके.\nरचना स्पष्ट.", code: `.grid {
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}`, codeLanguage: "css" },
            { title: "5. fit vs fill", content: "fit रुंदी.\nfill रिकामा.\nनिवड नेमकी.", code: `.fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
            { title: "6. आधार नियम", content: "repeat आधार.\nminmax आधार.\nजुने साधे.\nतपासा थर.", code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "product कार्ड.\nauto-fit एक.", code: `.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["auto-fit काय?", "auto-fill कुठे?", "minmax का?", "gap कशी?"],
        quiz: [
            { question: "auto-fit?", options: ["रिकामा नको", "थांबे", "रंग"], correct: 0 },
            { question: "auto-fill?", options: ["रिकामा ठेवते", "नवीन", "ध्वनी"], correct: 0 },
            { question: "minmax?", options: ["किमान जास्त", "रेखा", "क्रम"], correct: 0 },
            { question: "1fr?", options: ["समान भाग", "मोठा", "थर"], correct: 0 },
        ],
        challenge: {
            prompt: "कार्ड ग्रिड बनवा.",
            starterCode: `.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`,
            expectedOutput: "Marathi products grid adapts to columns",
        },
        interviewQuestions: ["fit vs fill?", "minmax वापर?"],
        related: ["css-grid-template", "css-gap-mastery", "css-masonry-grid"],
        prev: "css-grid-template",
        next: "css-current-color",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-current-color",
        categoryId: "web",
        title: "Current Color",
        marathiTitle: "currentColor — रंग एक",
        level: "advanced",
        minutes: 40,
        summary: "currentColor सह रंग जुळणी.",
        sections: [
            { title: "1. currentColor कल्पना", content: "currentColor नियम.\nमजकूर रंग.\nकड जुळतो.", code: `.btn {
  border: 2px solid currentColor;
}`, codeLanguage: "css" },
            { title: "2. shadow थर", content: "box-shadow मध्ये.\nरंग सारखा.\nhover वजन.", code: `.card {
  box-shadow: 0 4px 12px currentColor;
}`, codeLanguage: "css" },
            { title: "3. svg नियम", content: "fill currentColor.\nstroke सारखा.\nicon रंगे.\nरचना स्पष्ट.", code: `.icon {
  fill: currentColor;
}`, codeLanguage: "css" },
            { title: "4. किनार थर", content: "border color.\nbackground नाही.\nरंग एक मिळे.", code: `.chip {
  background: transparent;
  color: #0d9488;
  border: 1px solid currentColor;
}`, codeLanguage: "css" },
            { title: "5. hover नियम", content: "रंग बदल.\nएक निकष.\nसर्व थर जुळतात.\nदृश्य सुबक.", code: `.btn:hover {
  color: #155e75;
}`, codeLanguage: "css" },
            { title: "6. मर्यादा", content: "currentColor साधा.\ngradient नाही.\nनियम नेमका.\nसवय नेमकी.", code: `.only-color {
  outline: 2px solid currentColor;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "icon रंग.\ncurrent एक.", code: `.brand-icon {
  fill: currentColor;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["currentColor काय?", "shadow कुठे?", "svg का?", "hover कसा?"],
        quiz: [
            { question: "currentColor?", options: ["मजकूर रंग", "ध्वनी", "रेखा"], correct: 0 },
            { question: "border मध्ये?", options: ["कड रंगे", "थर", "क्रम"], correct: 0 },
            { question: "svg fill?", options: ["आकृती रंगे", "रेषा", "ओळ"], correct: 0 },
            { question: "hover?", options: ["रंग बदल", "नवीन", "थांबे"], correct: 0 },
        ],
        challenge: {
            prompt: "icon रंग द्या.",
            starterCode: `.brand-icon {
  fill: currentColor;
}`,
            expectedOutput: "Marathi brand icon follows text color",
        },
        interviewQuestions: ["currentColor फायदा?", "gradient का नाही?"],
        related: ["css-cascade-keywords", "css-colors-background", "css-svg-styles"],
        prev: "css-auto-fit-fill",
        next: "css-cascade-keywords",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-cascade-keywords",
        categoryId: "web",
        title: "Cascade Keywords",
        marathiTitle: "cascade keywords — मूल्य नियम",
        level: "advanced",
        minutes: 40,
        summary: "unset inherit revert initial नियम.",
        sections: [
            { title: "1. unset कल्पना", content: "unset value.\nस्वयं निकष.\nपूर्व नियम.", code: `button {
  all: unset;
}`, codeLanguage: "css" },
            { title: "2. inherit थर", content: "inherit स्पष्ट.\nमुल नियम.\nरंग खाली.\nरचना स्पष्ट.", code: `.child {
  color: inherit;
}`, codeLanguage: "css" },
            { title: "3. revert नियम", content: "revert value.\nbrowser आधार.\nआपले नियम रोख.\nउपयोग स्पष्ट.", code: `.reset {
  all: revert;
}`, codeLanguage: "css" },
            { title: "4. initial थर", content: "initial मूल्य.\nअर्थ नेमका.\nलेख घट्ट.", code: `.zero {
  margin: initial;
}`, codeLanguage: "css" },
            { title: "5. layer बंद", content: "layer revert.\nपूर्व थर.\nक्रम स्थिर.\nरचना नीट.", code: `@layer {
  button {
    background: unset;
  }
}`, codeLanguage: "css" },
            { title: "6. all शॉर्टकट", content: "all नियम.\nप्रत्येक गुणधर्म.\nमोठा रीसेट.\nरचना स्पष्ट.\nसवय नेमकी.", code: `.bare {
  all: unset;
  font: inherit;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "बटण reset.\nall unset.", code: `button.reset {
  all: unset;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["unset काय?", "inherit कुठे?", "revert कधी?", "all कसा?"],
        quiz: [
            { question: "unset?", options: ["आपोआप", "जड", "रंग"], correct: 0 },
            { question: "inherit?", options: ["वारसा", "नवीन", "ध्वनी"], correct: 0 },
            { question: "revert?", options: ["browser आधार", "थर", "रेखा"], correct: 0 },
            { question: "initial?", options: ["मूळ मूल्य", "क्रम", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "बटण रीसेट करा.",
            starterCode: `button.reset {
  all: unset;
}`,
            expectedOutput: "Marathi button resets to defaults",
        },
        interviewQuestions: ["unset vs inherit?", "revert-layer कधी?"],
        related: ["css-typography", "css-cascade-layers", "css-forms-styling"],
        prev: "css-current-color",
        next: "css-typographic-units",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-typographic-units",
        categoryId: "web",
        title: "Typographic Units",
        marathiTitle: "typographic units — अक्षर एकक",
        level: "advanced",
        minutes: 40,
        summary: "ch ex cap lh एकक वापर.",
        sections: [
            { title: "1. ch कल्पना", content: "ch unit.\nअक्षर रुंदी.\nशून्य आकार.", code: `.code {
  max-width: 60ch;
}`, codeLanguage: "css" },
            { title: "2. ex नियम", content: "ex unit.\nओळ नीट.\nरचना स्पष्ट.", code: `.small {
  line-height: 3ex;
}`, codeLanguage: "css" },
            { title: "3. rem ठोस", content: "rem नियम.\nroot आधार.\nजागा मिळे.", code: `.section {
  padding: 1.5rem;
}`, codeLanguage: "css" },
            { title: "4. lh नियम", content: "lh unit.\nline-height प्रमाण.\nबटण उंची.\nरचना स्पष्ट.", code: `.btn {
  min-height: calc(1lh + 1rem);
}`, codeLanguage: "css" },
            { title: "5. cap थर", content: "cap unit.\nमोठी अक्षर उंची.\nमथळा नीट.\nदृश्य सुबक.", code: `.title {
  margin-block: 1cap;
}`, codeLanguage: "css" },
            { title: "6. एकत्र नियम", content: "एकत्र units.\nअंतर तोल.\nरचना पूर्ण.\nसवय नेमकी.", code: `.article {
  max-width: 70ch;
  line-height: 1.6;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "ओळ रुंदी.\nch नियम.", code: `.prose {
  max-width: 66ch;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["ch काय?", "ex कुठे?", "cap कधी?", "lh का?"],
        quiz: [
            { question: "ch unit?", options: ["अक्षर रुंदी", "रंग", "ध्वनी"], correct: 0 },
            { question: "ex?", options: ["छोटा उंची", "थर", "रेखा"], correct: 0 },
            { question: "cap?", options: ["मोठी अक्षर", "क्रम", "शोर"], correct: 0 },
            { question: "lh?", options: ["ओळ उंची", "रुंदी", "जाडी"], correct: 0 },
        ],
        challenge: {
            prompt: "ओळ रुंदी द्या.",
            starterCode: `.prose {
  max-width: 66ch;
}`,
            expectedOutput: "Marathi prose capped at 66ch",
        },
        interviewQuestions: ["ch फायदा?", "lh कुठे उपयोगी?"],
        related: ["css-typography", "css-text-spacing", "css-typography"],
        prev: "css-cascade-keywords",
        next: "css-animation-easing",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-animation-easing",
        categoryId: "web",
        title: "Animation Easing",
        marathiTitle: "animation easing — गती वक्र",
        level: "advanced",
        minutes: 40,
        summary: "timing function easing गती नियम.",
        sections: [
            { title: "1. easing कल्पना", content: "timing function.\nवेग बदल.\nगती मऊ.", code: `.box {
  transition: transform 0.3s ease;
}`, codeLanguage: "css" },
            { title: "2. cubic-bezier", content: "cubic-bezier वक्र.\nआकार नेमका.\nhover सजीव.\nरचना स्पष्ट.", code: `.btn {
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}`, codeLanguage: "css" },
            { title: "3. steps थर", content: "steps function.\nचरण नेमके.\nगती कडक.", code: `.icon {
  animation: spin 1s steps(8) infinite;
}`, codeLanguage: "css" },
            { title: "4. ease-in-out", content: "ease-in-out थर.\nप्रारंभ मऊ.\nशेवट मऊ.\nदृश्य सुबक.", code: `.card {
  transition: all 0.4s ease-in-out;
}`, codeLanguage: "css" },
            { title: "5. वक्र तपास", content: "वक्र नेमके.\nअतिरेक नको.\nनियम घट्ट.", code: `.pop {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
            { title: "6. दिशा नियम", content: "दिशा नेमकी.\nउलट गती.\nसजीव क्रम.\nरचना स्पष्ट.\nसवय नेमकी.", code: `.card {
  animation: slide 0.5s ease-out;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "बटण वक्र.\ncubic एक.", code: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["easing काय?", "cubic कुठे?", "steps कधी?", "cubic points कसे?"],
        quiz: [
            { question: "timing function?", options: ["गती वक्र", "रंग", "ध्वनी"], correct: 0 },
            { question: "cubic-bezier?", options: ["वक्र नियम", "थर", "रेखा"], correct: 0 },
            { question: "steps?", options: ["चरण गती", "मऊ", "जड"], correct: 0 },
            { question: "ease-in-out?", options: ["मऊ सुरुवात", "तेज", "क्रम"], correct: 0 },
        ],
        challenge: {
            prompt: "बटण वक्र द्या.",
            starterCode: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
            expectedOutput: "Marathi button bounces with cubic curve",
        },
        interviewQuestions: ["cubic समज कसे?", "steps केव्हा?"],
        related: ["css-transitions-animations", "css-animation-advanced", "css-keyframes-tip"],
        prev: "css-typographic-units",
        next: "css-focus-within",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-focus-within",
        categoryId: "web",
        title: "Focus Within",
        marathiTitle: "focus-within — गट focus",
        level: "advanced",
        minutes: 40,
        summary: ":focus-within keyboard मदत.",
        sections: [
            { title: "1. focus-within कल्पना", content: ":focus-within नियम.\nआत focus.\nगट उजळ.\n:focus-within नियम सरावाने पक्के होते.\n:focus-within नियम पाया मजबूत आहे.\n:focus-within नियम आज विषय आत्मसात करा.\n:focus-within नियम संपूर्ण अर्थ उमजतो.\n:focus-within नियम हे तत्व आहे.\n:focus-within नियम सुरुवात येथे होते.\n:focus-within नियम अर्थ लक्षात ठेवा.\n:focus-within नियम संपूर्ण अर्थ उमजतो.\n:focus-within नियम हे तत्व आहे.\n:focus-within नियम सुरुवात येथे होते.\n:focus-within नियम अर्थ लक्षात ठेवा.\n:focus-within नियम मराठीतून समजतो.\n:focus-within नियम रचना स्पष्ट होते.\n:focus-within नियम ब्राउझर ते करतो.", code: `.card:focus-within {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
            { title: "2. कार्ड थर", content: "कार्ड focus.\nकिनार रंग.\nkeyboard सुख.\nरचना स्पष्ट.", code: `.field:focus-within {
  border-color: #0d9488;
}`, codeLanguage: "css" },
            { title: "3. सर्च नियम", content: "search गट.\nआत icon.\nरंग नेमका.", code: `.search:focus-within {
  box-shadow: 0 0 0 3px #99f6e4;
}`, codeLanguage: "css" },
            { title: "4. details थर", content: "details focus.\nsummary स्पष्ट.\nkeyboard नियम.", code: `details:focus-within summary {
  color: #0d9488;
}`, codeLanguage: "css" },
            { title: "5. ओळ नियम", content: "ओळ focus.\nपार्श्वभूमी हलकी.\nक्रम स्पष्ट.", code: `.row:focus-within {
  background: #f8fafc;
}`, codeLanguage: "css" },
            { title: "6. प्रवेश थर", content: "keyboard मदत.\nदृश्य स्पष्ट.\ncontrast राखा.", code: `.group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "फॉर्म गट.\nfocus एक.", code: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["focus-within काय?", "कार्ड कुठे?", "details कसा?", "प्रवेश का?"],
        quiz: [
            { question: ":focus-within?", options: ["आत focus", "बाहेर", "ध्वनी"], correct: 0 },
            { question: "कार्ड?", options: ["किनार रंग", "थर", "रेखा"], correct: 0 },
            { question: "details?", options: ["summary रंग", "नवीन", "क्रम"], correct: 0 },
            { question: "प्रवेश?", options: ["keyboard मदत", "रंग", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "फॉर्म गट उजळ करा.",
            starterCode: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`,
            expectedOutput: "Marathi form group highlights on focus",
        },
        interviewQuestions: ["focus-within vs focus?", "दृश्य contrast?"],
        related: ["css-focus-visible", "css-tabs-aria", "css-forms-styling"],
        prev: "css-animation-easing",
        next: "css-env-function",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-env-function",
        categoryId: "web",
        title: "Env Function",
        marathiTitle: "env() — सुरक्षित जागा",
        level: "advanced",
        minutes: 40,
        summary: "env() safe-area-inset वापर.",
        sections: [
            { title: "1. env कल्पना", content: "env() नियम.\nsafe-area घ्या.\nnotch जागा.", code: `.bottom {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
            { title: "2. safe-area थर", content: "सुरक्षित क्षेत्र.\nवरची जागा.\nviewport योग्य.\nरचना स्पष्ट.", code: `.topbar {
  padding-top: env(safe-area-inset-top);
}`, codeLanguage: "css" },
            { title: "3. कस्टम नियम", content: "कस्टम variable.\nenv read.\nमूल्य नेमके.", code: `:root {
  --inset: env(safe-area-inset-left, 0px);
}`, codeLanguage: "css" },
            { title: "4. जुना आधार", content: "env नाही.\nfallback शून्य.\nतपासा साधा.", code: `.safe {
  padding-left: 16px;
  padding-left: env(safe-area-inset-left);
}`, codeLanguage: "css" },
            { title: "5. calc नियम", content: "calc env.\nमूल्य तोल.\nजागा योग्य.", code: `.btn {
  margin-bottom: calc(env(safe-area-inset-bottom) + 8px);
}`, codeLanguage: "css" },
            { title: "6. दिशा थर", content: "दिशा नेमकी.\nदोन्ही बाजू.\nजागा समान.\nरचना स्पष्ट.\nसवय नेमकी.", code: `.app {
  padding-inline: env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px);
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "तळ पट्टी.\nsafe जागा.", code: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["env काय?", "safe-area कुठे?", "fallback कसा?", "calc कधी?"],
        quiz: [
            { question: "env()?", options: ["सुरक्षित मूल्य", "रंग", "ध्वनी"], correct: 0 },
            { question: "safe-area?", options: ["notch जागा", "थर", "रेखा"], correct: 0 },
            { question: "fallback?", options: ["जुने साधे", "नवीन", "क्रम"], correct: 0 },
            { question: "calc env?", options: ["जागा तोल", "रंग", "शोर"], correct: 0 },
        ],
        challenge: {
            prompt: "तळ जागा द्या.",
            starterCode: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`,
            expectedOutput: "Marathi tab bar respects safe area",
        },
        interviewQuestions: ["env आधार?", "safe-area केव्हा?"],
        related: ["css-viewport-units", "css-forms-styling", "css-perf-hints"],
        prev: "css-focus-within",
        next: "css-overflow-deep",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-overflow-deep",
        categoryId: "web",
        title: "Overflow Deep",
        marathiTitle: "overflow — ओघ नियम",
        level: "advanced",
        minutes: 40,
        summary: "overflow clip scroll scrollbar-gutter.",
        sections: [
            { title: "1. overflow कल्पना", content: "overflow नियम.\nबाहेर ओघ.\nhidden अर्थ.", code: `.box {
  overflow: hidden;
}`, codeLanguage: "css" },
            { title: "2. scroll थर", content: "overflow auto.\nस्क्रोल बार.\nउंची नेमकी.\nरचना स्पष्ट.", code: `.list {
  overflow-y: auto;
  max-height: 300px;
}`, codeLanguage: "css" },
            { title: "3. clip नियम", content: "overflow clip.\nचेन नाही.\nपार्श्वभूमी घट्ट.", code: `.pane {
  overflow: clip;
}`, codeLanguage: "css" },
            { title: "4. gutter थर", content: "scrollbar-gutter.\nजागा राखा.\nshift टाळा.", code: `.page {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}`, codeLanguage: "css" },
            { title: "5. अक्ष नियम", content: "x y वेगळे.\nछोटा शेवट.\nक्रम नेमका.", code: `.table-wrap {
  overflow-x: auto;
  overscroll-behavior-x: contain;
}`, codeLanguage: "css" },
            { title: "6. जुना तुलना", content: "hidden साधा.\nclip नेमका.\nदोन्ही योग्य.\nसवय नेमकी.", code: `.hidden {
  overflow: hidden;
}
.clipped {
  overflow: clip;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "सूची scroll.\nauto नियम.", code: `.feed {
  overflow-y: auto;
  max-height: 60vh;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["overflow काय?", "clip कुठे?", "gutter कधी?", "x y कसे?"],
        quiz: [
            { question: "overflow hidden?", options: ["लपवणे", "रंग", "ध्वनी"], correct: 0 },
            { question: "clip?", options: ["चेन नाही", "नवीन", "रेखा"], correct: 0 },
            { question: "scrollbar-gutter?", options: ["जागा राखा", "थर", "क्रम"], correct: 0 },
            { question: "overflow-x?", options: ["क्षैतिज", "उभा", "रंग"], correct: 0 },
        ],
        challenge: {
            prompt: "सूची scroll करा.",
            starterCode: `.feed {
  overflow-y: auto;
  max-height: 60vh;
}`,
            expectedOutput: "Marathi feed scrolls within bounds",
        },
        interviewQuestions: ["clip vs hidden?", "gutter फायदा?"],
        related: ["css-overscroll", "css-scrollbar-style", "css-responsive-table"],
        prev: "css-env-function",
        next: "css-table-layout",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-table-layout",
        categoryId: "web",
        title: "Table Layout",
        marathiTitle: "table-layout — टेबल रुंदी",
        level: "advanced",
        minutes: 40,
        summary: "table-layout fixed टेबल नियंत्रण.",
        sections: [
            { title: "1. table-layout", content: "table-layout fixed.\nस्तंभ समान.\nरुंदी नेमकी.", code: `table {
  table-layout: fixed;
  width: 100%;
}`, codeLanguage: "css" },
            { title: "2. collapse थर", content: "border-collapse collapse.\nरेषा दुहेरी.\nथर नीट.\nरचना स्पष्ट.", code: `table {
  border-collapse: collapse;
}`, codeLanguage: "css" },
            { title: "3. स्तंभ रुंदी", content: "colgroup नियम.\nप्रत्येक रुंदी.\nheader स्पष्ट.", code: `col.a { width: 40%; }
col.b { width: 30%; }`, codeLanguage: "css" },
            { title: "4. sticky header", content: "sticky header.\nthead वर.\nscroll टेबल.", code: `thead th {
  position: sticky;
  top: 0;
  background: white;
}`, codeLanguage: "css" },
            { title: "5. cells नियम", content: "padding योग्य.\nसंरेखण नीट.\nटेबल वाचता.", code: `td, th {
  padding: 0.75rem 1rem;
  text-align: left;
}`, codeLanguage: "css" },
            { title: "6. responsive थर", content: "small screen.\nscroll wrap.\nआराम नीट.\nसवय नेमकी.", code: `.wrap {
  overflow-x: auto;
}
table {
  min-width: 600px;
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "टेबल व्यवस्थित.\nfixed एक.", code: `table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["table-layout काय?", "collapse कुठे?", "colgroup कधी?", "sticky कसा?"],
        quiz: [
            { question: "table-layout fixed?", options: ["रुंदी नेमकी", "लांब", "रंग"], correct: 0 },
            { question: "border-collapse?", options: ["रेषा जोड", "नवीन", "थर"], correct: 0 },
            { question: "colgroup?", options: ["स्तंभ रुंदी", "रेखा", "क्रम"], correct: 0 },
            { question: "sticky header?", options: ["वर टिके", "खाली", "रंग"], correct: 0 },
        ],
        challenge: {
            prompt: "टेबल nit करा.",
            starterCode: `table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}`,
            expectedOutput: "Marathi table layout fixed and clean",
        },
        interviewQuestions: ["fixed फायदा?", "sticky कधी?"],
        related: ["css-responsive-table", "css-overflow-deep", "css-grid-system"],
        prev: "css-overflow-deep",
        next: "css-page-break",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-page-break",
        categoryId: "web",
        title: "Page Break",
        marathiTitle: "page-break — प्रिंट नियम",
        level: "advanced",
        minutes: 40,
        summary: "@page break print व्यवस्था.",
        sections: [
            { title: "1. @page कल्पना", content: "@page नियम.\nप्रिंट आकार.\nमार्जिन सेट.", code: `@page {
  size: A4;
  margin: 2cm;
}`, codeLanguage: "css" },
            { title: "2. break नियम", content: "break-inside avoid.\nखंड वाचता.\nसूची नीट.\nरचना स्पष्ट.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
            { title: "3. पान थर", content: "break-before नियम.\nविभाग नवीन.\nक्रम ठोस.", code: `section.new {
  break-before: page;
}`, codeLanguage: "css" },
            { title: "4. named नियम", content: "named pages.\nविशेष विभाग.\n@page name.", code: `@page wide {
  size: A3 landscape;
}
.overview {
  page: wide;
}`, codeLanguage: "css" },
            { title: "5. orphan widow", content: "orphan widows.\nओळे मतला.\nमजकूर सुरक्षित.\nवाचन नीट.", code: `p {
  orphans: 3;
  widows: 3;
}`, codeLanguage: "css" },
            { title: "6. आधार जुना", content: "break जुने.\nprint साधा.\nfallback नीट.\nआधार घट्ट.\nसवय नेमकी.", code: `@supports (break-inside: avoid) {
  .card {
    break-inside: avoid;
  }
}`, codeLanguage: "css" },
            { title: "Mini Project", content: "प्रिंट नीट.\nbreak एक.", code: `@media print {
  .card {
    break-inside: avoid;
  }
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["@page काय?", "break कुठे?", "named कधी?", "orphan का?"],
        quiz: [
            { question: "@page?", options: ["प्रिंट आकार", "रंग", "ध्वनी"], correct: 0 },
            { question: "break-inside?", options: ["खंड रोख", "नवीन", "रेखा"], correct: 0 },
            { question: "break-before?", options: ["नवीन पान", "थर", "क्रम"], correct: 0 },
            { question: "widows?", options: ["शेवट ओळ", "सुरु", "रंग"], correct: 0 },
        ],
        challenge: {
            prompt: "प्रिंट व्यवस्था करा.",
            starterCode: `@media print {
  .card {
    break-inside: avoid;
  }
}`,
            expectedOutput: "Marathi cards print without splits",
        },
        interviewQuestions: ["@page मार्जिन?", "named pages फायदा?"],
        related: ["css-print-styles", "css-responsive-table", "css-overflow-deep"],
        prev: "css-table-layout",
        next: "css-marathi-capstone13",
        levelLabel: exports.CSS13_LABEL,
    },
    {
        slug: "css-marathi-capstone13",
        categoryId: "web",
        title: "Precision Capstone",
        marathiTitle: "Precision Bag — भाग संग्रह",
        level: "advanced",
        minutes: 40,
        summary: "Level 13 साधने एकत्र शैली.",
        sections: [
            { title: "1. लेआउट नकाशा", content: "areas स्पष्ट.\ngrid वर.\nमुख्य सुबक.", code: `.page {
  grid-template-areas: "header header" "main side" "footer footer";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
            { title: "2. कार्ड ग्रिड", content: "auto-fit नियम.\nminmax जोड.\nproduct नीट.", code: `.cards {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
            { title: "3. रंग एक", content: "currentColor साधा.\nicon रंगे.\nथर जुळतो.", code: `.icon {
  fill: currentColor;
}`, codeLanguage: "css" },
            { title: "4. लेख रुंदी", content: "ch नियम.\n66ch प्रमाण.\nवाचन आराम.", code: `.prose {
  max-width: 66ch;
}`, codeLanguage: "css" },
            { title: "5. गती वक्र", content: "cubic नियम.\nhover मऊ.\nबटण सजीव.", code: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
            { title: "6. keyboard मदत", content: "focus-within.\nगट उजळ.\nप्रवेश नीट.", code: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
            { title: "Final Project", content: "सर्व जोड.", code: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
        ],
        practiceQuestions: ["Level 13 नवे?", "areas कुठे?", "currentColor?", "easing नियम?"],
        quiz: [
            { question: "Level 13 थीम?", options: ["Precision & Control", "जुना थर", "रंग रेषा"], correct: 0 },
            { question: "auto-fit?", options: ["कार्ड जुळणी", "ध्वनी", "क्रम"], correct: 0 },
            { question: "focus-within?", options: ["गट उजळ", "रंग", "शोर"], correct: 0 },
            { question: "env()?", options: ["safe जागा", "रेखा", "थर"], correct: 0 },
        ],
        challenge: {
            prompt: "पोर्टल नीट करा.",
            starterCode: `.page {
  grid-template-areas: "header header" "main side" "footer footer";
}`,
            expectedOutput: "Final precision patterns assembled via Marathi portal",
        },
        interviewQuestions: ["तीन आवडते?", "areas मर्यादा?"],
        related: ["css-marathi-capstone12", "css-grid-template", "css-env-function"],
        prev: "css-page-break",
        next: "css-grid-template",
        levelLabel: exports.CSS13_LABEL,
    },
];
