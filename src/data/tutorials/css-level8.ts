import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 8 — Component Systems ===
export const CSS8_LABEL = "CSS · Level 8 — Component Systems";

export const cssLevel8: Tutorial[] = [
  {
    slug: "css-nav-systems",
    categoryId: "web",
    title: "Nav Systems",
    marathiTitle: "nav — मार्ग रचना",
    level: "advanced",
    minutes: 36,
    summary: "navigation patterns आणि states.",
    sections: [
      { title: "1. nav कल्पना", content: "nav हे पहिलं.\nएकाच जागी मार्ग.\nशेवट स्पष्ट.\nक्रम स्थिर.\nस्क्रीन प्रत्येक.", code: `nav ul {
  display: flex;
  gap: 8px;
}`, codeLanguage: "css" },
      { title: "2. sidebar रचना", content: "sidebar अनुलंब.\nउंची पूर्ण.\nजागा स्थिर.\nस्क्रोल आत.\nआधार मजबूत.\nकोड सुबक.", code: `.sidebar {
  display: grid;
  gap: 4px;
}
.sidebar a {
  padding: 10px 14px;
}`, codeLanguage: "css" },
      { title: "3. active स्थिती", content: "active भाग स्पष्ट.\nरंग नेमका.\naria-current जोड.\nया आधार.\nवाचक मार्ग.\nनियम स्वच्छ.", code: `.nav a[aria-current="page"] {
  background: #eef2ff;
  color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "4. indicator थर", content: "indicator खाली.\nborder अंतर.\nरंग स्थिर.\ntransition गुळगुळीत.\nhover दृश्य.\nकोड सोपा.", code: `.nav a {
  border-bottom: 2px solid transparent;
}
.nav a:hover {
  border-color: #6366f1;
}`, codeLanguage: "css" },
      { title: "5. mobile मेनू", content: "mobile बटण.\nmenu लपवा.\nडाव हलवा.\nfocus सुरक्षित.\nscroll आत.\nसवय नेमकी.", code: `@media (width < 640px) {
  .nav {
    display: none;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "flex आधार मजबूत.\ngrid उत्तम.\nwidget स्थिर.\ndisplay बदल.\nकोड वाचता.\nआधार घट्ट.", code: `.nav {
  display: flex;
  flex-wrap: wrap;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "nav गॅप द्या.\nएक नियम.", code: `.nav {
  display: flex;
  gap: 6px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nav काय?", "active कुठे?", "indicator कसे?"],
    quiz: [
      { question: "nav?", options: ["मार्ग", "रंग", "फॉन्ट"], correct: 0 },
      { question: "sidebar?", options: ["अनुलंब", "सपाट", "रंग"], correct: 0 },
      { question: "aria-current?", options: ["सक्रिय", "नवीन", "रंग"], correct: 0 },
      { question: "indicator?", options: ["खाली", "वर", "शेवट"], correct: 0 },
    ],
    challenge: {
      prompt: "app nav मार्ग द्या.",
      starterCode: `.nav { display: flex; gap: 8px; }`,
      expectedOutput: "Renders a clean app navigation bar",
    },
    interviewQuestions: ["n", "a", "v", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-breadcrumbs", "css-tabs-aria", "css-sticky-nav"],
    prev: "css-marathi-capstone7",
    next: "css-breadcrumbs",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-breadcrumbs",
    categoryId: "web",
    title: "Breadcrumb Nav",
    marathiTitle: "breadcrumb — मार्ग दाखला",
    level: "advanced",
    minutes: 36,
    summary: "breadcrumb separation आणि semantics.",
    sections: [
      { title: "1. breadcrumb", content: "breadcrumb मार्ग.\nघर सुरुवात.\nभाग क्रम.\nशेवट सध्या.\nआधार मजबूत.", code: `.crumbs {
  display: flex;
  flex-wrap: wrap;
}`, codeLanguage: "css" },
      { title: "2. विभाजक", content: "separator स्थिर.\n::before शैली.\nस्लॅश स्वतः.\nरंग कमी.\nवाचक मार्ग.", code: `.crumbs li + li::before {
  content: "/";
  margin-inline: 8px;
  color: #94a3b8;
}`, codeLanguage: "css" },
      { title: "3. aria-label", content: "aria-label खास.\nnav semantic.\nप्रवेश्यता वाढ.\nवाचक नियम.\nसवय योग्य.", code: `nav[aria-label="Breadcrumb"] ol {
  list-style: none;
  display: flex;
}`, codeLanguage: "css" },
      { title: "4. एलिप्सिस", content: "लांब मार्ग कापा.\ntext-overflow.\nआधीचा भाग लपा.\nअंतिम स्पष्ट.\nरचना नीट.\nकोड छोटा.", code: `.crumbs li:first-child ~ li {
  display: none;
}`, codeLanguage: "css" },
      { title: "5. घर शॉर्ट", content: "घर शॉर्ट.\nआयकॉन छोटा.\nकर्ण्य जपा.\nस्लॅश उजवी.\nमराठी मार्ग.\nदृश्य स्वच्छ.", code: `.crumb-home {
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "flex आधार सर्वत्र.\nseparator जुने.\nlist-style reset.\nसवय चांगली.\nआधार घट्ट.", code: `.crumbs ol {
  list-style: none;
  margin: 0;
  padding: 0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "breadcrumb विभाजक.\nएक नियम.", code: `.crumbs {
  display: flex;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["breadcrumb काय?", "separator कसे?", "aria कुठे?"],
    quiz: [
      { question: "breadcrumb?", options: ["मार्ग", "रंग", "फॉन्ट"], correct: 0 },
      { question: "::before?", options: ["विभाजक", "गती", "नाव"], correct: 0 },
      { question: "aria-label?", options: ["वर्णन", "रंग", "आकार"], correct: 0 },
      { question: "ol?", options: ["क्रम", "गोंधळ", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "breadcrumb मार्ग द्या.",
      starterCode: `.crumbs { display: flex; }`,
      expectedOutput: "Renders a breadcrumb trail with separators",
    },
    interviewQuestions: ["b", "r", "e", "a", "d", "c", "r", "u", "m", "b", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-nav-systems", "css-tabs-aria", "css-forms-pro"],
    prev: "css-nav-systems",
    next: "css-tabs-aria",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-tabs-aria",
    categoryId: "web",
    title: "Tabs ARIA",
    marathiTitle: "tabs — भाग निवड",
    level: "advanced",
    minutes: 36,
    summary: "tabs roles आणि state नियम.",
    sections: [
      { title: "1. tabs कल्पना", content: "tabs भाग.\ntablist role.\nea च निवड.\npanel दिसे.\nकीबोर्ड मार्ग.\nनियम स्पष्ट.", code: `[role="tablist"] {
  display: flex;
  gap: 4px;
}`, codeLanguage: "css" },
      { title: "2. state नियम", content: "aria-selected true.\nसक्रिय रंग.\nचालू panel.\nhidden लपवा.", code: `[role="tab"][aria-selected="true"] {
  background: #eef2ff;
  color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "3. focus रिंग", content: "focus दाखवा.\noutline जोड.\nकीबोर्ड सुरक्षित.\nrole सुरक्षित.\nआधार भक्कम.\nवापर नेमका.", code: `[role="tab"]:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "4. panel शैली", content: "panel सुबक.\nधार मजबूत.\ntabindex नेमका.\nवाचक भाषा.\nविभाग स्पष्ट.", code: `[role="tabpanel"] {
  padding: 16px;
  border: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
      { title: "5. संकेत नियम", content: "उजवी डावी बाण.\nHome End.\nकीबोर्ड वळण.\njavaScript लागू.\nनियम CSS.\nसवय योग्य.", code: `[role="tablist"] {
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "tabs आधार मजबूत.\nrole स्थिर.\nfallback भाग.\nअनभिप्रेत खुला.\nकोड सुरक्षित.\nआधार घट्ट.", code: `[role="tabpanel"] {
  display: block;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "tabs सक्रिय दाखवा.\nborder नियम.", code: `[role="tab"][aria-selected="true"] {
  border-bottom: 3px solid #6366f1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["tabs काय?", "selected कुठे?", "panel कसे?"],
    quiz: [
      { question: "tablist?", options: ["गट", "रंग", "फॉन्ट"], correct: 0 },
      { question: "aria-selected?", options: ["सक्रिय", "नवीन", "जड"], correct: 0 },
      { question: "focus-visible?", options: ["रिंग", "रंग", "गती"], correct: 0 },
      { question: "tabpanel?", options: ["भाग", "शीर्षक", "लिंक"], correct: 0 },
    ],
    challenge: {
      prompt: "tabs panel शैली द्या.",
      starterCode: `[role="tab"][aria-selected="true"] { border-bottom: 3px solid #6366f1; }`,
      expectedOutput: "Renders accessible active tab state",
    },
    interviewQuestions: ["t", "a", "b", "s", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-nav-systems", "css-forms-pro", "css-breadcrumbs"],
    prev: "css-breadcrumbs",
    next: "css-forms-pro",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-forms-pro",
    categoryId: "web",
    title: "Form Pro States",
    marathiTitle: "form — प्रश्न व्यवस्था",
    level: "advanced",
    minutes: 36,
    summary: "form states, focus आणि helper.",
    sections: [
      { title: "1. form रचना", content: "form नियम स्पष्ट.\nlabel जोडले.\nerror जागा.\nमराठी मजकूर.\nसखोल प्रश्न.\nरचना सुबक.", code: `.field {
  display: grid;
  gap: 6px;
}`, codeLanguage: "css" },
      { title: "2. required star", content: "required तारका.\n::after जोड.\nरंग स्थिर.\nवाचक नाव.\nस्वतःचा संकेत.\n::after जोड वापर सोपा आहे.\n::after जोड अचूक गुण देतो.\n::after जोड प्रत्येक वेळी शिकवतो.\n::after जोड सरावाने नक्की.\n::after जोड शैली प्रत्यक्ष पहा.\n::after जोड कोड तपासा.\n::after जोड उदाहरण चालवा.\n::after जोड सरावाने नक्की.\n::after जोड शैली प्रत्यक्ष पहा.\n::after जोड कोड तपासा.\n::after जोड उदाहरण चालवा.\n::after जोड पेजवर दिसते.\n::after जोड नियमाचा अर्थ कळतो.\n::after जोड नेहमी वापरा.", code: `.required label::after {
  content: " *";
  color: #ef4444;
}`, codeLanguage: "css" },
      { title: "3. state शैली", content: "valid invalid.\nबॉर्डर रंग.\nआधार वाढ.\nमर्यादा स्पष्ट.\nवाचनीय जपा.\nसवय आराम.", code: `input:invalid {
  border-color: #f87171;
}
input:valid {
  border-color: #22c55e;
}`, codeLanguage: "css" },
      { title: "4. focus शैली", content: "focus ring छान.\noutline offset.\nकीबोर्ड स्पष्ट.\nआधार मजबूत.\nसंवाद सुखद.", code: `input:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. सहायता मजकूर", content: "helper छोटा.\nरंग नेमका.\nगहिरा आधार.\nplaceholder नको.\nमजकूर स्पष्ट.\nवाचक सुख.", code: `.hint {
  font-size: 0.875rem;
  color: #64748b;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "form आधार सर्वत्र.\n:user-invalid नवे.\nstate पारखणे.\nप्रवेश्यता जपा.\nकोड सुरक्षित.\nआधार घट्ट.", code: `input:user-invalid {
  border-color: #ef4444;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "field ग्याप द्या.\nएक नियम.", code: `.field {
  display: grid;
  gap: 6px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["label काय?", "valid कुठे?", "helper कसे?"],
    quiz: [
      { question: "label?", options: ["नाव", "रंग", "गती"], correct: 0 },
      { question: "::after?", options: ["तारका", "आभा", "नाव"], correct: 0 },
      { question: "focus-visible?", options: ["कीबोर्ड", "उंच", "जड"], correct: 0 },
      { question: "user-invalid?", options: ["नवे", "जुने", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "field प्रश्न रचना द्या.",
      starterCode: `.field { display: grid; gap: 6px; }`,
      expectedOutput: "Renders a clear labeled form field",
    },
    interviewQuestions: ["f", "o", "r", "m", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-tabs-aria", "css-switch-toggle"],
    prev: "css-tabs-aria",
    next: "css-switch-toggle",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-switch-toggle",
    categoryId: "web",
    title: "Switch Toggle",
    marathiTitle: "switch — पर्याय नियंत्रण",
    level: "advanced",
    minutes: 36,
    summary: "custom switch आणि states.",
    sections: [
      { title: "1. switch कल्पना", content: "switch पर्याय.\ncheckbox लपवा.\nनवा दृश्य.\nडाव उजवी.\nनियम CSS.\nआधार मजबूत.", code: `.switch {
  position: relative;
  width: 52px;
  height: 28px;
}`, codeLanguage: "css" },
      { title: "2. thumb रचना", content: "thumb वर्तुळ.\ntransition गती.\nchecked सरकते.\ntransform हलवा.\nरंग बदल.\nकोड सुबक.", code: `.switch::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 22px;
  height: 22px;
  border-radius: 9999px;
  background: white;
  transition: transform 0.2s;
}`, codeLanguage: "css" },
      { title: "3. checked नियम", content: "checked सक्रिय.\nरंग नवा.\nthumb हलकी.\nसरकता गती.\nनियम स्पष्ट.\nवापर नेमका.", code: `.switch input:checked + .track {
  background: #22c55e;
}
.switch input:checked + .track::after {
  transform: translateX(24px);
}`, codeLanguage: "css" },
      { title: "4. focus सुरक्षा", content: "focus ring.\nkeyboard सुख.\noutline जोड.\nskip नको.\nआधार भक्कम.", code: `.switch input:focus-visible + .track {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. disabled स्थिती", content: "disabled फिके.\nरंग नियम.\nवाचक आदर.\nसंकेत स्पष्ट.\nसवय योग्य.", code: `.switch input:disabled + .track {
  opacity: 0.5;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "switch आधार नवा.\ncheckbox जुना.\nappearance नियम.\nकाटेकोर वापर.\nआधार घट्ट.", code: `.track {
  appearance: none;
  border-radius: 9999px;
  background: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "track रंग द्या.\nएक नियम.", code: `.track {
  background: #e2e8f0;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["switch काय?", "thumb कुठे?", "checked कसे?"],
    quiz: [
      { question: "thumb?", options: ["वर्तुळ", "आयत", "रंग"], correct: 0 },
      { question: "checked?", options: ["सक्रिय", "नवीन", "रिक्त"], correct: 0 },
      { question: ":checked?", options: ["निवड", "रंग", "आकार"], correct: 0 },
      { question: "disabled?", options: ["फिके", "हलका", "मोठा"], correct: 0 },
    ],
    challenge: {
      prompt: "switch toggle द्या.",
      starterCode: `.track { background: #e2e8f0; border-radius: 9999px; }`,
      expectedOutput: "Renders a custom accessible switch toggle",
    },
    interviewQuestions: ["s", "w", "i", "t", "c", "h", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-forms-pro", "css-tabs-aria", "css-prefers-reduced"],
    prev: "css-forms-pro",
    next: "css-skeleton-load",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-skeleton-load",
    categoryId: "web",
    title: "Skeleton Loader",
    marathiTitle: "skeleton — भार दृश्य",
    level: "advanced",
    minutes: 36,
    summary: "skeleton आणि shimmer नियम.",
    sections: [
      { title: "1. skeleton", content: "skeleton रिकामा.\nलोड आधी.\nआकार थर.\nरंग हलका.\nवाचक धीर.\nनियम स्पष्ट.", code: `.skeleton {
  background: #e2e8f0;
  border-radius: 8px;
}`, codeLanguage: "css" },
      { title: "2. shimmer नियम", content: "shimmer ढंग.\n::after सुरळीत.\ngradient हलणे.\nanimation चालू.\nस्पार्क दृश्य.", code: `.skeleton::after {
  content: "";
  display: block;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: shimmer 1.5s infinite;
}`, codeLanguage: "css" },
      { title: "3. width तोल", content: "आकार वेगळा.\nरुंदी प्रमाण.\navatar वर्तुळ.\nपंक्ती सुबक.", code: `.s-avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
}`, codeLanguage: "css" },
      { title: "4. reduced सह", content: "reduced थांबा.\nanimation नको.\nस्थिर आधार.\nसवलत द्या.\nप्रवेश्यता जपा.", code: `@media (prefers-reduced-motion: reduce) {
  .skeleton::after {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "5. state बदल", content: "लोड संपला.\nskeleton लुप्त.\nसामग्री दिसे.\nरचना जुळता.\nआधार स्थिर.\nनियम कडक.", code: `.loaded .skeleton {
  display: none;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "skeleton आधार सर्व.\nkeyframes इच्छा.\nसर्वांसाठी खुला.\nकोड सुरक्षित.\nआधार घट्ट.\nसराव वाढ.", code: `@keyframes shimmer {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "skeleton आधार द्या.\nएक नियम.", code: `.skeleton {
  background: #e2e8f0;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["skeleton काय?", "shimmer कुठे?", "reduced कसे?"],
    quiz: [
      { question: "skeleton?", options: ["रिकामा", "रंग", "नाव"], correct: 0 },
      { question: ":after?", options: ["ස්පார்க್", "भाग", "रंग"], correct: 0 },
      { question: "reduced?", options: ["थांबा", "चालू", "जड"], correct: 0 },
      { question: "loaded?", options: ["लुप्त", "वाढे", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "skeleton थर द्या.",
      starterCode: `.skeleton { background: #e2e8f0; border-radius: 8px; }`,
      expectedOutput: "Renders a calm skeleton loader",
    },
    interviewQuestions: ["s", "k", "e", "l", "e", "t", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-switch-toggle", "css-responsive-table", "css-perf-hints"],
    prev: "css-switch-toggle",
    next: "css-responsive-table",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-responsive-table",
    categoryId: "web",
    title: "Responsive Table",
    marathiTitle: "table — डेटा व्यवस्था",
    level: "advanced",
    minutes: 36,
    summary: "data table स्क्रोल आणि cards.",
    sections: [
      { title: "1. table रचना", content: "table data.\nव्यवस्था स्पष्ट.\nसीमा स्पष्ट.\nस्क्रोल सुरक्षा.\nखोली स्वतः.\nनियम स्पष्ट.", code: `.table-wrap {
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "2. header स्थिर", content: "th sticky.\nscroll आत.\nपार्श्वभूमी स्थिर.\nरंग जपा.\nरचना ठेवा.", code: `th {
  position: sticky;
  top: 0;
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "3. zebra नियम", content: "zebra वाचन.\nपर्याय रंग.\nआधार मध्यम.\nवर हायलाइट.\nदृश्य शांत.", code: `tbody tr:nth-child(even) {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "4. card मोड", content: "लहान screen.\ntable लुप्त.\ncard रचना.\ndata लेबल.\nदृश्य बदल.\nकोड वाचता.", code: `@media (width < 640px) {
  td::before {
    content: attr(data-label);
  }
}`, codeLanguage: "css" },
      { title: "5. अंतिम स्तंभ", content: "अंतिम क्रम.\ndefault स्थिर.\nभाग गुळगुळीत.\nmargin आधार.\nव्यवस्था नीट.\nवापर नेमका.", code: `.total {
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "table आधार मजबूत.\nsticky जुने.\noverflow सर्वत्र.\ncard नवा.\nकोड सुरक्षित.\nआधार घट्ट.", code: `table {
  width: 100%;
  border-collapse: collapse;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "table wrap द्या.\nएक नियम.", code: `.table-wrap {
  overflow-x: auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["table काय?", "sticky कुठे?", "card मोड कसे?"],
    quiz: [
      { question: "table?", options: ["डेटा", "रंग", "गती"], correct: 0 },
      { question: "sticky th?", options: ["स्थिर", "उडते", "जड"], correct: 0 },
      { question: "zebra?", options: ["रंग पर्याय", "गती", "नाव"], correct: 0 },
      { question: ":before?", options: ["लेबल", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "table data व्यवस्था द्या.",
      starterCode: `.table-wrap { overflow-x: auto; }`,
      expectedOutput: "Renders a scrollable responsive data table",
    },
    interviewQuestions: ["t", "a", "b", "l", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-skeleton-load", "css-grid-patterns", "css-notifications"],
    prev: "css-skeleton-load",
    next: "css-notifications",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-notifications",
    categoryId: "web",
    title: "Toast Stacks",
    marathiTitle: "toast — सूचना ढिग",
    level: "advanced",
    minutes: 36,
    summary: "toast स्टॅक आणि animation.",
    sections: [
      { title: "1. toast", content: "toast वर्ल्ड.\nकोपरा उजवी.\nगती सुरळीत.\nदृश्य स्पष्ट.\nआधार मजबूत.", code: `.toast {
  position: fixed;
  bottom: 16px;
  right: 16px;
}`, codeLanguage: "css" },
      { title: "2. स्टॅक रचना", content: "अनेक toast.\nक्रम खाली.\nभाग सुबक.\nजागा तोल.\nकोड सहज.\nव्यवस्था नीट.", code: `.toast-stack {
  display: grid;
  gap: 8px;
}`, codeLanguage: "css" },
      { title: "3. रंग स्तर", content: "error warning.\nsuccess info.\nरंग नेमका.\nवाचक फरक.\nआयकॉन जोड.", code: `.toast-error {
  border-inline-start: 4px solid #ef4444;
}`, codeLanguage: "css" },
      { title: "4. auto दृश्य", content: "auto गायब.\nसजीव गती.\nslide बाहेर.\nसमय नियंत्रण.\njavaScript गरज.\nCSS गती.", code: `.toast {
  animation: slide-in 0.3s ease;
}`, codeLanguage: "css" },
      { title: "5. animation", content: "slide इन.\nfade हळू.\nwithdrawn नको.\nसवय योग्य.", code: `@keyframes slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "fixed आधार मजबूत.\ninset नवा.\nसर्व screen.\nz-index उच्च.\nकोड सुरक्षित.\nआधार घट्ट.", code: `.toast-stack {
  position: fixed;
  inset-inline-end: 16px;
  inset-block-end: 16px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "toast गती द्या.\nएक नियम.", code: `.toast {
  animation: slide-in 0.3s ease;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["toast काय?", "स्टॅक कुठे?", "slide कसे?"],
    quiz: [
      { question: "toast?", options: ["सूचना", "रंग", "फॉन्ट"], correct: 0 },
      { question: "fixed?", options: ["स्थिर", "उडते", "जड"], correct: 0 },
      { question: "error?", options: ["लेबल रंग", "गती", "नाव"], correct: 0 },
      { question: "slide-in?", options: ["बाहेरून", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "toast stack द्या.",
      starterCode: `.toast-stack { position: fixed; inset-inline-end: 16px; inset-block-end: 16px; }`,
      expectedOutput: "Renders a stacked toast notification area",
    },
    interviewQuestions: ["t", "o", "a", "s", "t", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-responsive-table", "css-print-styles", "css-grid-patterns"],
    prev: "css-responsive-table",
    next: "css-print-styles",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-print-styles",
    categoryId: "web",
    title: "Print Styles",
    marathiTitle: "print — छपाई नियम",
    level: "advanced",
    minutes: 36,
    summary: "print media आणि page नियम.",
    sections: [
      { title: "1. print कल्पना", content: "print @media.\nकागद थर.\nरचना साधी.\nरंग कमी.\nमजकूर ठोस.\nनियम स्पष्ट.", code: `@media print {
  body {
    background: white;
  }
}`, codeLanguage: "css" },
      { title: "2. hidden भाग", content: "nav भाग लपा.\ntoast नको.\nस्क्रीनचे कड.\nमुद्रण स्वच्छ.\nसवय योग्य.", code: `@media print {
  nav,
  .toast {
    display: none !important;
  }
}`, codeLanguage: "css" },
      { title: "3. page नियम", content: "@page मार्जिन.\nsize नेमका.\nआधार जुना.\nकागद तोल.\nमुद्रण सुबक.\nवापर नेमका.", code: `@page {
  margin: 2cm;
}`, codeLanguage: "css" },
      { title: "4. break नियम", content: "break-inside avoid.\nभाग संपूर्ण.\nविभाग नवा.\nवाचन संयोजन.\nरचना शांत.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "5. links वाचता", content: "link url दाखवा.\n::after जोड.\nprint केवळ.\nवाचक मार्ग.\n::after जोड आत्मविश्वास वाढतो.\n::after जोड दररोज थोडे सरावा.\n::after जोड प्रयोग करायला घ्या.\n::after जोड शिकणे प्रगत होते.\n::after जोड सराव करून पहा.\n::after जोड प्रत्येक ठिकाणी लिहा.\n::after जोड चुका सुधारा.\n::after जोड शिकणे प्रगत होते.\n::after जोड सराव करून पहा.\n::after जोड प्रत्येक ठिकाणी लिहा.\n::after जोड चुका सुधारा.\n::after जोड पुन्हा तपासा.\n::after जोड हाताने करून दिसेल.\n::after जोड उदाहरण स्वतंत्र वापरा.", code: `a[href]::after {
  content: " (" attr(href) ")";
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "print आधार जुना.\n@page खुला.\nA4 सामान्य.\ncolor-adjust नवा.\nकोड सुरक्षित.\nआधार घट्ट.", code: `@media print {
  a[href] {
    color: inherit;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "page margin द्या.\nएक नियम.", code: `@page {
  margin: 2cm;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["print काय?", "@page कुठे?", "break कसे?"],
    quiz: [
      { question: "print?", options: ["कागद", "रंग", "गती"], correct: 0 },
      { question: "@page?", options: ["मार्जिन", "नाव", "आकार"], correct: 0 },
      { question: "break-inside?", options: ["avoid", "रंग", "गती"], correct: 0 },
      { question: ":after?", options: ["url", "नाव", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "print page द्या.",
      starterCode: `@page { margin: 2cm; }`,
      expectedOutput: "Renders clean print page layout",
    },
    interviewQuestions: ["p", "r", "i", "n", "t", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-notifications", "css-grid-patterns", "css-dark-mode"],
    prev: "css-notifications",
    next: "css-grid-patterns",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-grid-patterns",
    categoryId: "web",
    title: "Grid Patterns",
    marathiTitle: "grid — नमुने रचना",
    level: "advanced",
    minutes: 36,
    summary: "holy grail subgrid आणि flows.",
    sections: [
      { title: "1. holy grail", content: "holy grail रचना.\nheader sidebar.\nmain भाग.\nfooter तळ.\nनवीन grid.\nनियम स्पष्ट.", code: `.layout {
  display: grid;
  grid-template-areas: "header header" "side main" "footer footer";
}`, codeLanguage: "css" },
      { title: "2. 12-column", content: "12 column व्यवस्था.\nspan नियम.\nभाग मोजा.\nरचना लवचिक.", code: `.col-4 {
  grid-column: span 4;
}`, codeLanguage: "css" },
      { title: "3. auto-flow", content: "auto-flow दिशा.\ndense भरणे.\nभाग जुळता.\nरचना सुबक.\nस्क्रीन प्रत्येक.\nनियम स्पष्ट.", code: `.mosaic {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
      { title: "4. subgrid", content: "subgrid खोल.\nभाग एकरेषा.\nकार्ड थर.\ncolumn समान.\nआधार नवीन.", code: `.card {
  display: grid;
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
      { title: "5. stagger नियम", content: "stagger सजावट.\nदिशा पाळा.\noffset थर.\nजागा वाचा.\nरचना सजीव.", code: `.item:nth-child(even) {
  margin-top: 24px;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "grid आधार मजबूत.\nsubgrid नवीन.\nflex साधा.\nदोन्ही जोडा.\nकोड सुरक्षित.\nआधार घट्ट.", code: `@supports (grid-template-rows: subgrid) {
  .card {
    grid-template-rows: subgrid;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "layout grid द्या.\nएक नियम.", code: `.layout {
  display: grid;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["grid काय?", "span कुठे?", "subgrid कसे?"],
    quiz: [
      { question: "holy grail?", options: ["रचना", "रंग", "फॉन्ट"], correct: 0 },
      { question: "span?", options: ["विस्तार", "गती", "नाव"], correct: 0 },
      { question: "dense?", options: ["भरणे", "रंग", "गती"], correct: 0 },
      { question: "subgrid?", options: ["एकरेषा", "जड", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "12 column grid द्या.",
      starterCode: `.col-4 { grid-column: span 4; }`,
      expectedOutput: "Renders a flexible column grid system",
    },
    interviewQuestions: ["g", "r", "i", "d", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-print-styles", "css-masonry-grid", "css-container-queries"],
    prev: "css-print-styles",
    next: "css-dark-mode",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-dark-mode",
    categoryId: "web",
    title: "Dark Mode",
    marathiTitle: "dark — रात्री थीम",
    level: "advanced",
    minutes: 36,
    summary: "color-scheme आणि टोकन योजना.",
    sections: [
      { title: "1. dark कल्पना", content: "dark थीम.\ncolor-scheme हलका.\nटोकन फिरवा.\nरात्री शांत.\nआधार नवीन.\nउपयोग साधा.", code: `html {
  color-scheme: dark;
}`, codeLanguage: "css" },
      { title: "2. रंग टोकन", content: "surface रात्री.\nink उजळा.\nएकच स्रोत.\nबदल स्थिर.\nव्यवस्था शुद्ध.", code: `:root[data-theme="dark"] {
  --surface: #0f172a;
  --ink: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "3. auto नियम", content: "prefers स्वतः.\nवापरकर्ता सेटिंग.\nआज्ञा माना.\nटोकन बदल.\nदृश्य स्पष्ट.\nनियम योग्य.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --surface: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "4. हायलाइट", content: "योग्य रंग.\ncontrast जपा.\nहाय भाग.\nभाग वेगळा.\nवाचक सुख.", code: `.highlight {
  background: #1e293b;
  color: #f8fafc;
}`, codeLanguage: "css" },
      { title: "5. transition", content: "थीम बदल.\ntransition रंग.\nरीळ गुळगुळीत.\nसजीव दृश्य.\nकोड लहान.\nसवय नेमकी.", code: `body {
  transition: background-color 0.3s, color 0.3s;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "dark आधार नवीन.\nजुने media.\nदुहेरी टोकन.\nसर्व ब्राउझर.\nकोड सुरक्षित.\nआधार घट्ट.", code: `@media (prefers-color-scheme: dark) {
  * {
    color-scheme: dark;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "dark color द्या.\nएक नियम.", code: `html {
  color-scheme: dark;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["dark काय?", "color-scheme कुठे?", "टोकन कसे?"],
    quiz: [
      { question: "dark?", options: ["रात्री", "दिवस", "रंग"], correct: 0 },
      { question: "color-scheme?", options: ["मार्गदर्शक", "गती", "नाव"], correct: 0 },
      { question: "prefers-color?", options: ["auto", "जड", "रंग"], correct: 0 },
      { question: "transition?", options: ["गुळगुळीत", "कठोर", "मंद"], correct: 0 },
    ],
    challenge: {
      prompt: "dark स्वतः थीम द्या.",
      starterCode: `html { color-scheme: dark; }`,
      expectedOutput: "Renders respect for system dark mode",
    },
    interviewQuestions: ["d", "a", "r", "k", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-grid-patterns", "css-design-tokens", "css-prefers-reduced"],
    prev: "css-grid-patterns",
    next: "css-marathi-capstone8",
    levelLabel: CSS8_LABEL,
  },
  {
    slug: "css-marathi-capstone8",
    categoryId: "web",
    title: "Marathi Capstone 8",
    marathiTitle: "Component Bahar — भाग संग्रह",
    level: "advanced",
    minutes: 36,
    summary: "सर्व Level 8 तंत्रांचा संग्रह.",
    sections: [
      { title: "1. ध्येय", content: "component portal.\nnav मार्ग.\nटॅब व्यवस्था.\nform रचना.\ntable स्क्रोल.\nथीम दोन्ही.", code: `:root {
  --surface: #ffffff;
  --ink: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. nav भाग", content: "nav एकत्र.\nsidebar स्थिर.\nbreadcrumb खाली.\nमार्ग स्पष्ट.\nरचना सुबक.", code: `.app-nav {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
      { title: "3. tabs भाग", content: "tabs निवड.\npanel जोड.\naria नियम.\nशैली स्थिर.\nवाचक मार्ग.", code: `[role="tab"][aria-selected="true"] {
  border-bottom: 3px solid #6366f1;
}`, codeLanguage: "css" },
      { title: "4. form भाग", content: "form प्रश्न.\nlabel जोड.\nerror कमी.\nरचना स्पष्ट.\nआधार घट्ट.\nवाचनीय वाढ.", code: `.field {
  display: grid;
  gap: 6px;
}`, codeLanguage: "css" },
      { title: "5. table गती", content: "table लपवा.\ncard मोड.\ndata लेबल.\nरचना बदल.\nदृश्य स्पष्ट.", code: `@media (width < 640px) {
  td::before {
    content: attr(data-label);
  }
}`, codeLanguage: "css" },
      { title: "6. थीम स्थिर", content: "dark टोकन.\nprint भाग.\nरात्री शांत.\nवारसा मजबूत.\nसंग्रह सजीव.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --surface: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "brand टोकन.\nसर्व भाग.", code: `:root {
  --brand: #4f46e5;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nav कसे?", "tabs कुठे?", "form काय?"],
    quiz: [
      { question: "bahar?", options: ["संग्रह", "रंग", "गती"], correct: 0 },
      { question: "nav?", options: ["मार्ग", "रंग", "नाव"], correct: 0 },
      { question: "tab panel?", options: ["भाग", "शीर्षक", "रंग"], correct: 0 },
      { question: "dark?", options: ["टोकन", "जड", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "component portal पूर्ण.",
      starterCode: `:root { --brand: #4f46e5; }`,
      expectedOutput: "Renders polished Marathi component portal using Level 8 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "8", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-dark-mode", "css-grid-patterns"],
    prev: "css-dark-mode",
    next: "css-nav-systems",
    levelLabel: CSS8_LABEL,
  },];
