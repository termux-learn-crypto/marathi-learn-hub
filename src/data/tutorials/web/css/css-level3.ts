import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 3 — आधुनिक CSS तंत्र ===
export const CSS3_LABEL = "CSS · Level 3 — आधुनिक CSS: Nesting, Scroll आणि Positioning";

export const cssLevel3: Tutorial[] = [
  {
    slug: "css-custom-properties-deep",
    categoryId: "web",
    title: "Custom Properties Deep",
    marathiTitle: "Custom properties — वारसा खोल",
    level: "advanced",
    minutes: 25,
    summary: "वारसा, fallback, जावास्क्रिप्ट संवाद आणि typed properties.",
    sections: [
      {
        title: "Custom properties — वारसा खोल म्हणजे काय?",
        content: "वारसा, fallback, जावास्क्रिप्ट संवाद आणि typed properties.\ncustom property हा एक variable आहे जो पालक घटकाकडून मुलांच्या घटकांकडे आपोआप वारशाने जातो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Custom properties — वारसा खोल चे फायदे आणि महत्त्व",
        content: "✓ हा fallback शेवटचा पर्याय असतो — मूळ value असेल तर fallback चा उपयोगच होत नाही.\n✓ CSS variable फक्त शैलीतच नको; JavaScript मधूनही वाचता येतो — हे theme toggler, रंग picker सारख्या गतिशील गोष्टींसाठी महत्त्वाचे.\n✓ हे मूल्य संगणित असतं — म्हणजे fallback नंतर जे खरे लागू होतं ते; मऊ रंग किंवा नेमकी width ठाऊक करून घेण्यासाठी उपयोगी.\n✓ variable वाचण्यासोबत बदलणेही गरजेचं असतं — setProperty हा तो मार्ग सोपा करतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. variable वारसा", content: "custom property हा एक variable आहे जो पालक घटकाकडून मुलांच्या घटकांकडे आपोआप वारशाने जातो. :root वर घोषित केला तर संपूर्ण पेजला तो उपलब्ध होतो.\nउदा. :root { --accent: #0f766e; } लिहिलं की पेजवरचे सर्व घटक var(--accent) ने तो रंग वापरू शकतात. एखाद्या .card मध्ये स्वतःचा --accent: #b91c1c; दिला तर तो card आणि त्याची सगळी मुले मात्र लाल निःपक्ष वापरतात.\nहा वारसा त्याची शक्ती आहे — एका ठिकाणी बदल केला की खाली सर्वत्र दिसतो. वेगवेगळ्या विभागांना वेगवेगळा रंग देणे अशा रीतीने सोपे होते.\nवारसा कसा वाहतो हे समजलं की थीम नियंत्रणाचं मूळ हाती येतं; डार्क मोड, brand रंग असे सगळे variable च्या याच वारशावर उभे असतात.", code: `:root {
  --accent: #0f766e;
}
.card {
  --accent: #b91c1c;
  color: var(--accent);
}`, codeLanguage: "css" },
      { title: "2. fallback मूल्य", content: "जेव्हा मूल्य variable मध्ये असतं पण कुठल्यातरी घटकाला तो मिळत नाही, तेव्हा site कोसळू नये म्हणून var() फंक्शनला दुसरं मूल्य सोबत देता येतं.\nउदा. var(--accent, #2563eb) म्हणजे --accent सापडला तर तो; नाही तर निळा. हा fallback शेवटचा पर्याय असतो — मूळ value असेल तर fallback चा उपयोगच होत नाही.\nfallback मुळे जुने ब्राउझर, दुसऱ्या CSS फाइलमधून न आलेले variable अशा परिस्थितीतही पेज नीट रंगतं.\nसुरक्षित शैली हवी असेल तर fallback सवय म्हणून लिहा; तो आयुष्य खूप वेळ वाचवतो आणि रंग/अंतर कधीही निरर्थक होत नाही.", code: `.btn {
  color: var(--accent, #2563eb);
}`, codeLanguage: "css" },
      { title: "3. जावास्क्रिप्ट वाचन", content: "CSS variable फक्त शैलीतच नको; JavaScript मधूनही वाचता येतो — हे theme toggler, रंग picker सारख्या गतिशील गोष्टींसाठी महत्त्वाचे.\ngetComputedStyle(el) ने घटकच्या सर्व संगणित शैली मिळतात; त्यावर getPropertyValue(\"--accent\") लिहिलं की तो variable चं अचूक मूल्य परत मिळतं.\nहे मूल्य संगणित असतं — म्हणजे fallback नंतर जे खरे लागू होतं ते; मऊ रंग किंवा नेमकी width ठाऊक करून घेण्यासाठी उपयोगी.\nजावास्क्रिप्टवरून वाचल्याशिवाय theme ची सध्याची अवस्था संगणकाला समजत नाही; ही वाचणी ते संवाद उघडते — दुसरीकडे बदल करायलाही याचं बळ साधतं.", code: `const cs = getComputedStyle(el);
const v = cs.getPropertyValue("--accent").trim();`, codeLanguage: "css" },
      { title: "4. सेटिंग जावास्क्रिप्ट", content: "variable वाचण्यासोबत बदलणेही गरजेचं असतं — setProperty हा तो मार्ग सोपा करतो.\nउदा. el.style.setProperty(\"--accent\", \"#0ea5e9\") लिहिलं की त्या घटकावर accent रंग लगेच बदलतो आणि सर्वत्र var(--accent) वापरणाऱ्या घटकांवरही तोच बदल दिसतो.\nएका ठिकाणी बदल केला की फैलाव सर्वत्र आपोआप होतो — हेच डार्क मोड बटणाचं इंजिन आहे; बटण दाबलं आणि संपूर्ण थीम पलटते.\nपुन्हा मूळ अवस्था आणण्यासाठी तेच variable पूर्वीच्या मूल्यावर set करता येते — अशी बदल-परत यंत्रणा प्रयोग सुरक्षित ठेवते आणि वापरकर्त्याला नियंत्रण देते.", code: `el.style.setProperty("--accent", "#0ea5e9");`, codeLanguage: "css" },
      { title: "5. transition युक्त", content: "variable वर transition लावला तर theme बदल चकचकाट न करता गुळगुळीत होतो — रंग, background अशा गोष्टी हळूहळू मिश्रित होतात.\nउदा. .theme ला transition: color 0.3s, background 0.3s दिलं की मजकूर आणि पार्श्वभूमीचे रंग अचानक उड्डाण करत नाहीत; 0.3 सेकंदात नव्या रंगात सरकतात.\ntransition फक्त संख्यात्मक किंवा रंग मूल्यांवर चालते — त्यामुळे variable मध्ये रंग आणि संख्या असल्यासच हे गुळगुळीत होतं.\nडार्क मोड स्विच अशीच अंमलबजावणी करतात: variable बदलला आणि संपूर्ण पेज सौम्यपणे नव्या अवस्थेत उतरते — हा अनुभव सुखद आणि व्यावसायिक दिसतो.", code: `.theme {
  transition: color 0.3s, background 0.3s;
}`, codeLanguage: "css" },
      { title: "6. typed properties", content: "@property ने variable ला पूर्वघोषित type देता येतो — म्हणजे ब्राउझरला माहीत असतं त्या variable मध्ये काय मूल्य येईल.\nउदा. @property --ratio { syntax: \"<ratio>\"; inherits: false; initial-value: 1 / 1; } लिहिलं की तो variable गुणोत्तर म्हणून वागतो; त्यावर transition आणि animation सहज चालते.\nsyntax मध्ये प्रकार सांगतो, inherits वारसा नियंत्रित करतो आणि initial-value आधीचं मूल्य ठरवते — तिन्ही नियम एकत्र म्हणजे typed property.\nही typed शैली अधिक स्थिर आणि अंदाजे असते; ब्राउझरला प्रकार ठाऊक असल्याने animation मधील बदल अचूक, गुळगुळीत होतात.", code: `@property --ratio {
  syntax: "<ratio>";
  inherits: false;
  initial-value: 1 / 1;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता सगळे गुण एकत्र करून एक dark mode थीम making बनवूया — variable वारसा, fallback आणि transition तिन्ही तंत्राचा वापर.\nhtml[data-theme=\"dark\"] ने पेजला स्विच केलं की --bg व --fg हे variables बदलतात; हेच setProperty ने JavaScript मधून बदलता येते.\nएका ठिकाणी बदल पुरेसा असतो — मुल घटक var(--bg), var(--fg) ने आपोआप नवे रंग घेतात आणि transition ने गुळगुळीत संक्रमण होतं.\nfallback ने जुने ब्राउझरही नीट रंगतात. बटण दाबून स्विच करा आणि theme बदलाचा संपूर्ण अनुभव एकत्र पहा — हा सराव Level 3 चा पाया मजबूत करतो.", code: `html[data-theme="dark"] {
  --bg: #111;
  --fg: #eee;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["variable वारसा कसा?", "fallback काय?", "जावास्क्रिप्ट से कसे?"],
    quiz: [
      { question: "var() fallback?", options: ["दुसरे मूल्य", "रंग", "वेग"], correct: 0 },
      { question: "getPropertyValue?", options: ["वाचते", "लिहते", "लपवते"], correct: 0 },
      { question: "setProperty?", options: ["बदलते", "वाढते", "गणती"], correct: 0 },
      { question: "@property syntax?", options: ["प्रकार", "नाव", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "dark mode थीम",
      starterCode: `html[data-theme="dark"] { --bg: #111; }`,
      expectedOutput: "Renders theme toggler demo",
    },
    interviewQuestions: ["variable वर transition?", "@property फायदा?"],
    related: ["css-marathi-capstone2", "css-scroll-driven"],
    prev: "css-marathi-capstone2",
    next: "css-scroll-driven",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-scroll-driven-2",
    categoryId: "web",
    title: "Scroll-Driven",
    marathiTitle: "Scroll-driven — हालचाल जोडणी",
    level: "advanced",
    minutes: 25,
    summary: "scroll-timeline, animation-timeline आणि view-timeline प्रभाव.",
    sections: [
      {
        title: "Scroll-driven — हालचाल जोडणी म्हणजे काय?",
        content: "scroll-timeline, animation-timeline आणि view-timeline प्रभाव.\nस्क्रोल फक्त हालचाल नव्हे — तिच्याशी animation जोडल्यास पेज वाचतानाच 'जिवंत' बनतं.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Scroll-driven — हालचाल जोडणी चे फायदे आणि महत्त्व",
        content: "✓ हे animation अगदी साधे असतं — pageload वर वेळ पळवण्याची गरज नसते; स्क्रोल स्वतःच timeline बनतो.\n✓ script लिहिण्याची गरज नाही; CSS ला कळतं की animation किती पुढे सरकवायची ते scroll टप्प्यानुसार ठरवा.\n✓ view-timeline स्क्रोलची गरज नाही अशा ठिकाणी काम आवडते — जेव्हा घटक दृश्य क्षेत्रात (viewport) येतो तेव्हा animation सुरू होते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ प्रत्येक घटकात हेच नको — केवळ पेजच्या वरची एक रेषा पुरेसे असते; वाचकाला घुसळणार नाही हे लक्षात ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. स्क्रोल संकल्पना", content: "स्क्रोल फक्त हालचाल नव्हे — तिच्याशी animation जोडल्यास पेज वाचतानाच 'जिवंत' बनतं. स्क्रोल खाली सरकलं की प्रगती मीटर भरतो, वर गेलं की मागे सरकतो.\nहे animation अगदी साधे असतं — pageload वर वेळ पळवण्याची गरज नसते; स्क्रोल स्वतःच timeline बनतो.\njQuery किंवा स्क्रिप्ट न लिहिता फक्त CSS ला स्क्रोल जाणवून दिलं की हालचाल पेजच्या लयीत चालते.\nहे तंत्र आधुनिक मानले जातं कारण ते मजकूर वाचण्याला प्रगतीची जाणीव जोडते — वाचक कुठे आला, किती बाकी, हे नजरेसमोर असते.", code: `.bar {
  animation-timeline: scroll();
}`, codeLanguage: "css" },
      { title: "2. scroll-timeline", content: "scroll-timeline नावाने एक कालरेखा (timeline) तयार होते — त्यावर ठरतं कोणत्या घटकाच्या स्क्रोलमुळे animation चालेल.\nउदा. section { scroll-timeline: sec; } म्हणजे हा section चा स्क्रोल 'sec' नावाची कालरेखा बनवतो; तो आत scrolled की नियंत्रण गाठता येते.\nscroll() शिवाय ही timeline नेहमी आवश्यक असते; animation चालवताना scroll-timeline चं नाव लिहिलं की दुवा जोडला जातो.\nनाव ठरवताना अर्थपूर्ण ठेवा; संपूर्ण पेजसाठी scroll(root) ही मुख्य timeline असते — घटकांची स्वतःची नावे माझ्या घटकावर अवलंबून असतात.", code: `section {
  scroll-timeline: sec;
}`, codeLanguage: "css" },
      { title: "3. animation-timeline", content: "animation-timeline हा दुवा असतो — एखादं @keyframes animation कोणत्या timeline वर चालवायचं ते तो सांगतो.\nउदा. .progress ला animation: fill linear; animation-timeline: scroll(block) दिलं की तो बार scroll च्या बरोबर भरतो; scroll टप्प्यांची रेंज प्रमाणे fill होतो.\nscript लिहिण्याची गरज नाही; CSS ला कळतं की animation किती पुढे सरकवायची ते scroll टप्प्यानुसार ठरवा.\nस्क्रोल त्या जागी थिजला तर animation थांबतं, बरोबर पुढे-मागे होतं — ही जोडणी वाचकाच्या वेगानुसार सुसंगत राहते.", code: `.progress {
  animation: fill linear;
  animation-timeline: scroll(block);
}`, codeLanguage: "css" },
      { title: "4. view-timeline", content: "view-timeline स्क्रोलची गरज नाही अशा ठिकाणी काम आवडते — जेव्हा घटक दृश्य क्षेत्रात (viewport) येतो तेव्हा animation सुरू होते.\nउदा. .reveal ला animation: fade linear both आणि animation-timeline: v दिलं की हा भाग स्क्रीनवर दिसताच हळूहळू प्रकट होतो.\nघटक क्षेत्रात शिरला ते बाहेर पडेपर्यंत रेंज चालते; त्यामुळे वाचनासोबत सजग दिसावं अशा reveal, परिच्छेद उघडणी सारखे प्रभाव सहज बनतात.\nscripts ही स्वतःचे आकारमान पाहून वागते — मोठ्या पडद्यावर लवकर, छोट्यावर स्वयं जुळवून सुकर रचना देतं.", code: `.reveal {
  view-timeline: v;
  animation: fade linear both;
  animation-timeline: v;
}`, codeLanguage: "css" },
      { title: "5. रेंज नियम", content: "रेंज म्हणजे timeline मधील ठराविक टप्पा — animation कधी सुरू, केव्हा संपायचं ते ती ठरवते; entry, exit, contain अशी ठिकाणे आपल्या हाती देतात.\nउदा. entry म्हणजे घटक क्षेत्रात शिरण्याचा टप्पा, contain म्हणजे आतला पूर्ण भाग, आणि exit शेवटचा निर्गम.\n@keyframes मधील टप्प्यांशी हे जुळलं की animation चं स्वरूप अचूक ठरतं — प्रगती मीटर, reveal, खाली वाहणारा प्रभाव यांचे नियंत्रण येथून मिळते.\nरेंज निवडण्याची सवय लागली की scroll-driven प्रभाव 'सगळीकडे भरभक्कम' ऐवजी डिझाइन-योग्य, सुबक बनतो.", code: `@keyframes fade {
  to { opacity: 1; translate: 0 0; }
}`, codeLanguage: "css" },
      { title: "6. आधार सूचना", content: "scroll-driven animation अजूनही सर्व ब्राउझरमध्ये नसते — म्हणून आधी त्या गुणधर्माची उपलब्धता तपासली तरच तो वापरावा.\n@supports (animation-timeline: scroll()) च्या आत प्रगत नियम लिहा; आधार नसलेल्या ब्राउझरमध्ये नेहमीचा static नियम लागू राहतो.\nअशा जोडणीने जुने ब्राउझरही मुख्य गोष्ट — मजकूर — नीट दाखवतात; फक्त नवीन वैशिष्ट्य वगळले जाते.\nसुरक्षित पद्धत म्हणजे progressive enhancement: आधी मूलभूत, नंतर @supports ने सुधारणा. ही सवय प्रत्येक आधुनिक तंत्राला लावा.", code: `@supports (animation-timeline: scroll()) {
  .bar { animation-timeline: scroll(); }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "हा प्रकल्प scroll-driven चं सर्वांत लोकप्रिय रूप देतो — पेजच्या वर एक प्रगती बार जो वाचक कुठे आलाय ते दाखवतो.\nbody ला animation-timeline: scroll() आणि @keyframes fill द्या; fill ने outline अथवा पार्श्वभूमी स्क्रोलच्या टप्प्यानुसार रंगते.\nप्रत्येक घटकात हेच नको — केवळ पेजच्या वरची एक रेषा पुरेसे असते; वाचकाला घुसळणार नाही हे लक्षात ठेवा.\n@supports ने आधार नसलेल्या ब्राउझरला static ठेवा आणि reduced-motion पसंत असणाऱ्या वापरकर्त्यांकडे हालचाल कमी करा — मग ही मिळकत सर्वांसाठी योग्य ठरते.", code: `body {
  animation: fill linear;
  animation-timeline: scroll();
}
@keyframes fill {
  from { outline-color: #ddd; }
  to { outline-color: teal; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scroll-timeline काय?", "animation-timeline काढते?", "view रेंज काय?"],
    quiz: [
      { question: "scroll() आधार?", options: ["मुख्य स्क्रोल", "रंग", "फॉन्ट"], correct: 0 },
      { question: "view-timeline?", options: ["दृश्य क्षेत्र", "नाव", "अक्षर"], correct: 0 },
      { question: "cover रेंज?", options: ["पूर्ण क्षेत्र", "अर्धा", "रंग"], correct: 0 },
      { question: "@supports का?", options: ["आधार तपास", "वेग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "स्क्रोल प्रोग्रेस",
      starterCode: `body { animation-timeline: scroll(); }`,
      expectedOutput: "Renders scroll progress demo",
    },
    interviewQuestions: ["स्क्रोल animation फायदा?", "प्रवेश्यता कशी?"],
    related: ["css-custom-properties-deep", "css-drag-media"],
    prev: "css-custom-properties-deep",
    next: "css-drag-media",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-drag-media",
    categoryId: "web",
    title: "Drag & Media",
    marathiTitle: "Drag and media — परिसर ओळख",
    level: "advanced",
    minutes: 25,
    summary: "pointer, hover, color-gamut आणि scripting queries.",
    sections: [
      {
        title: "Drag and media — परिसर ओळख म्हणजे काय?",
        content: "pointer, hover, color-gamut आणि scripting queries.\nमीडिया queries फक्त पडद्याच्या रुंदीसाठीच नव्हेत — वापरकर्त्याचे उपकरण कसं आहे हे तपासून त्या माहितीनुसार शैली बदलतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Drag and media — परिसर ओळख चे फायदे आणि महत्त्व",
        content: "✓ वेगवेगळ्या उपकरणांना एकच आकार देण्याऐवजी असे परिसरनुसार समायोजन वापरकर्त्याला महत्त्व देते — यालाच responsive design चा पुढला टप्पा म्हणता येते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ यामुळे शक्तिशाली पडद्यांवर रंग जास्त जिवंत, सामान्य पडद्यावर मात्र शांत — दोन्ही ठिकाणी कधीही चुकत नाही.\n✗ स्वारस्यपूर्ण गोष्ट अशी की ही तपासणी प्रवेश्यता वाढवते — स्क्रिप्ट अवरोधक अडचणी असल्यासही वाचकाला मजकूर कधीच नाकारला जात नाही.\n✗ @media (hover: none), (pointer: coarse) मध्ये मेनूचा padding वाढवला की बोटाने दाबणे सोपे आणि चुकीचे टॅप कमी.\n✗ @media (pointer: coarse) मध्ये .card ची min-height 48px ठेवा म्हणजे बोटाने निवडणे निरापद होते आणि चुकीचे टॅप टाळता येते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. परिसर queries", content: "मीडिया queries फक्त पडद्याच्या रुंदीसाठीच नव्हेत — वापरकर्त्याचे उपकरण कसं आहे हे तपासून त्या माहितीनुसार शैली बदलतात.\nhover, pointer, color-gamut, scripting असे परिसर गुण; प्रत्येकाचं उत्तर वेगळं असेल तर नियम निवडला जातो.\nउदा. @media (hover: hover) च्या आत mouse वापरताना card ला hover lift दिली; टच उपकरणावर तो भाग लागूच होत नाही.\nअशा प्रश्नोत्तराची शैली नाही असे डिझाइन अधिक सुसंगत बनतं — प्रत्येक वापरकर्त्याला त्याच्या साधनाला शोभणारा अनुभव मिळतो.", code: `@media (hover: hover) {
  .card:hover { translate: 0 -4px; }
}`, codeLanguage: "css" },
      { title: "2. hover असणे", content: "hover: hover म्हणजे उपकरणात खरा mouse किंवा trackpad आहे — त्यावर लक्ष्य टाकल्यावर संगणकाला स्थान कळतं आणि hover शैली जीवित केल्या जातात.\nउलट टच स्क्रीनवर संगणकाला hover नसतो — बोटाने फक्त टॅपच कळतो; म्हणून तिथे hover नियम टाकले तरी वगळले जातात.\nमोबाइलसाठी hover ची सजावट सोडून ऐवजी टॅपू शकणाऱ्या क्रिया द्या — उदा. बटणाला min-height: 44px म्हणजे बोटाला पुरेशी जागा.\nहा फरक समजला की 'hover काम का करत नाही' हा गोंधळ संपतो आणि उपकरणानुसार शैली वेगळी अचूक राहते.", code: `a.tap {
  display: block;
  min-height: 44px;
}`, codeLanguage: "css" },
      { title: "3. pointer ओळख", content: "pointer गुणधर्म उपकरणाची अचूकता सांगतो — fine म्हणजे mouse/pencil सारखं नेमकं साधन, coarse म्हणजे बोट किंवा सामान्य स्पर्श साधन.\nउदा. @media (pointer: coarse) मध्ये बटणांची min-height 44px केली की बोटाने दाबायला सोपं; नेमकं mouse असलेल्यावर छोटे बटणही चालते.\nसंगणकाला hover नसेल तरी pointer coarse असतो; तिथे चूक होऊ नये म्हणून दोन्ही गुण एकत्र पाहणे उपयुक्त ठरतं.\ntarget चा आकार आणि अंतर यांचा निर्णय pointer ने देतो — मोबाइल अनुभव अशा रीतीने उघडतो आणि वापरकर्त्याला चिडवणारी बारीक बटणे टळतात.", code: `@media (pointer: coarse) {
  button { min-height: 44px; }
}`, codeLanguage: "css" },
      { title: "4. color-gamut", content: "सगळ्या पडद्यांवर सगळे रंग दिसत नाहीत — color-gamut त्या रंग क्षमतेची माहिती देतो; srgb ही सर्वत्र बसणारी मूलभूत श्रेणी, p3 नवीन, अधिक रुंद श्रेणी.\nउदा. @media (color-gamut: p3) च्या आत color(display-p3 ...) ने खरा व्यापक रंग देता येतो; ती क्षमता नसेल तर srgb रंगच लागतो.\nयामुळे शक्तिशाली पडद्यांवर रंग जास्त जिवंत, सामान्य पडद्यावर मात्र शांत — दोन्ही ठिकाणी कधीही चुकत नाही.\nचित्रे, hero, brand रंग अशा जागांशी gamut वापरलं तर रंग नेहमी उपकरणाच्या ताकदीला शोभतात; हे प्रगतीशील सुधारणेचे उत्तम उदाहरण आहे.", code: `@media (color-gamut: p3) {
  .hero {
    color: color(display-p3 0 0.5 0.45);
  }
}`, codeLanguage: "css" },
      { title: "5. scripting query", content: "scripting गुणधर्माने उपकरणावर JavaScript चालते का ते तपासता येते — enabled म्हणजे स्क्रिप्ट सुरू आहे, none म्हणजे बंद, initial-only आरंभी थोडे.\nउदा. @media (scripting: none) मध्ये टॅब सर्व एकत्र block दाखवले की JS काम न करताही संपूर्ण मजकूर वाचता येतो.\nजेव्हा स्क्रिप्ट उपलब्ध नसेल, तेव्हा सगळी आकर्षक कार्ये बंद न करता शैलीने मूलभूत अनुभव उभा राहतो.\nस्वारस्यपूर्ण गोष्ट अशी की ही तपासणी प्रवेश्यता वाढवते — स्क्रिप्ट अवरोधक अडचणी असल्यासही वाचकाला मजकूर कधीच नाकारला जात नाही.", code: `@media (scripting: none) {
  .tab { display: block; }
}`, codeLanguage: "css" },
      { title: "6. लघु उपकरणांमध्ये", content: "हा शिकवलेला मीडिया परिसर छोट्या उपकरणांवर (मोबाइल, टॅब) सर्वांत जास्त कामाचा आहे कारण तिथे उंदीर गहाळ, स्पर्शच मुख्य.\nउदा. @media (hover: none), (pointer: coarse) मध्ये मेनूचा padding वाढवला की बोटाने दाबणे सोपे आणि चुकीचे टॅप कमी.\nवेगवेगळ्या उपकरणांना एकच आकार देण्याऐवजी असे परिसरनुसार समायोजन वापरकर्त्याला महत्त्व देते — यालाच responsive design चा पुढला टप्पा म्हणता येते.\nप्रत्येक query एकटी न ठेवता योग्य ठिकाणी एकत्र जोडा आणि सातत्य राखा; मग सर्वच्या सर्व उपकरणांवर अनुभव एकसमान छान राहतो.", code: `@media (hover: none), (pointer: coarse) {
  .menu { padding: 0.75rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात एक कार्ड पेज बनवा जे परिसरानुसार रूप बदलते — mouse वापरकर्त्याला hover lift, बोट वापरकर्त्याला मोठे target.\n@media (hover: hover) मध्ये .card:hover वर box-shadow आणि नेमका नरम feedback द्या; तोच नियम टच उपकरणावर अस्तित्वात नसल्याने कार्ड तिथे स्थिर राहते.\n@media (pointer: coarse) मध्ये .card ची min-height 48px ठेवा म्हणजे बोटाने निवडणे निरापद होते आणि चुकीचे टॅप टाळता येते.\nतिन्ही queries एकाच फाइलमध्ये व्यवस्थित ठेवून desktop मोबाइल दोन्हीवर तपासा — परिसरनिहाय डिझाइनची संपूर्ण यंत्रणा मग हाती येते.", code: `@media (hover: hover) {
  .card:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
}
@media (pointer: coarse) {
  .card { min-height: 48px; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["hover none म्हणजे?", "pointer coarse?", "color-gamut काय?"],
    quiz: [
      { question: "hover: hover?", options: ["उंदीर", "बोट", "केमेरा"], correct: 0 },
      { question: "pointer coarse?", options: ["स्पर्श", "पेन", "माउस"], correct: 0 },
      { question: "p3 म्हणजे?", options: ["रंग रुंद", "छोटा", "आवाज"], correct: 0 },
      { question: "scripting none?", options: ["स्क्रिप्ट नाही", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "परिसर प्रतिसाद कार्ड",
      starterCode: `@media (hover: hover) { .card:hover { translate: 0 -4px; } }`,
      expectedOutput: "Renders environment-aware card",
    },
    interviewQuestions: ["coarse target का?", "gamut प्रवेश?"],
    related: ["css-scroll-driven", "css-view-transitions"],
    prev: "css-scroll-driven",
    next: "css-view-transitions",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-view-transitions-2",
    categoryId: "web",
    title: "View Transitions",
    marathiTitle: "View transitions — दृश्य संक्रमण",
    level: "advanced",
    minutes: 25,
    summary: "view-transition API, shared element आणि सुलभ नियंत्रण.",
    sections: [
      {
        title: "View transitions — दृश्य संक्रमण म्हणजे काय?",
        content: "view-transition API, shared element आणि सुलभ नियंत्रण.\nपेज एका अवस्थेतून दुसऱ्या अवस्थेत बदलताना झटकन उडी न घेता गुळगुळीत संक्रमण दिसणे म्हणजे view transitions — हे SPA सारख्या अॅप्सचा उत्तम अनुभव आणते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? View transitions — दृश्य संक्रमण चे फायदे आणि महत्त्व",
        content: "✓ संक्रमणासाठी नाव अद्वितीय असणे गरजेचे — दोन घटक एकसारखे नाव घेतात तर ब्राउझरला गोंधळ होतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ जटिल संक्रमणे टाळा आणि साधेपणा पाळा; सतत हालचाल किंवा जास्त थर पेजला खुमासदार नाही तर खडखडाट आणतात.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. संक्रमण API", content: "पेज एका अवस्थेतून दुसऱ्या अवस्थेत बदलताना झटकन उडी न घेता गुळगुळीत संक्रमण दिसणे म्हणजे view transitions — हे SPA सारख्या अॅप्सचा उत्तम अनुभव आणते.\nजावास्क्रिप्ट फक्त संक्रमण सुरू करतं (startViewTransition); दृश्य कसे बदलते ते CSS मध्ये ठरवता येते.\nउदा. ::view-transition-group(root) ला animation-duration 0.4s दिली की संपूर्ण पेज बदल सौम्य होऊन अधूनमधून नवीन रूप धारण करतो.\nपेजचे रूप बदलणे, सूचीत आयटम उघडणे, फिल्टर बदल अशी कामे सर्व अपूर्वतेने जवळ येतात — यालाच 'रचनादृष्ट्या गुळगुळीत' म्हणतात.", code: `::view-transition-group(root) {
  animation-duration: 0.4s;
}`, codeLanguage: "css" },
      { title: "2. shared element", content: "संक्रमणात दोन्ही अवस्थांमधील एकच घटक 'सलग' दिसू शकतो — उदा. यादीतून खुललेला article हा same भाग म्हणून ओळखला जातो.\nयासाठी घटकाला view-transition-name हे अद्वितीय नाव द्यावं लागतं — दोन्ही रूपांमध्ये नाव सारखे असलं की तो घटक सलग दिसतो.\nउदा. .title ला view-transition-name: heading; दिलं की शीर्षक बदलताना जुने आणि नवे स्वतःमध्ये गुळगुळीत मिसळतात — रंग, आकार, स्थान सर्व एका ठिकाणी उतरतात.\nसंक्रमणासाठी नाव अद्वितीय असणे गरजेचे — दोन घटक एकसारखे नाव घेतात तर ब्राउझरला गोंधळ होतो. नाव देताना अर्थपूर्ण आणि एकमेव ठेवा.", code: `.title {
  view-transition-name: heading;
}`, codeLanguage: "css" },
      { title: "3. pair निर्मिती", content: "संक्रमणात प्रत्येक घटकाचे दोन थर असतात — जुनी अवस्था (old) आणि नवीन (new); दोघांची जोडी image-pair म्हणून ओळखली जाते.\n::view-transition-image-pair(*) ने या दोन्ही थरांवर संयुक्त नियंत्रण मिळतं; mix-blend-mode बदलला की जुने-नवे कसे मिसळतात ते ठरते.\nउदा. मिश्रण normal ठेवलं की दोन्ही थर वरचेवर येतात; blend-विशिष्ट मूल्ये दिली तर रंग परस्परांत भिडतात.\nimage-pair ची गुंतागुंत वाढवू नये; साधे नियम देताना काळजी घ्या की संपूर्ण संक्रमण स्पष्ट आणि वाचण्याजोगे राहील.", code: `::view-transition-image-pair(*) {
  mix-blend-mode: normal;
}`, codeLanguage: "css" },
      { title: "4. कालावधी नियम", content: "संक्रमणाचा कालावधी (duration) फार खूप असेल तर वापर हळू होतो; फार छोटा असेल तर संक्रमण कळतच नाही — योग्य तोल आणणे हा नियम.\nउदा. जुन्या थराला जाण्यास 0.2s आणि नवीन येण्यास 0.3s दिलं की डोळ्याला चांगला लयबद्ध क्रम मिळतो; उलट अचानक बदल मात्र झटकन वाटतो.\nप्रत्येक घटकाची duration वेगळी देता येते — शीर्षक लवकर, चित्र हळू अशी आवडीनुसार रचना शक्य.\nजटिल संक्रमणे टाळा आणि साधेपणा पाळा; सतत हालचाल किंवा जास्त थर पेजला खुमासदार नाही तर खडखडाट आणतात.", code: `::view-transition-old(root) {
  animation-duration: 0.2s;
}
::view-transition-new(root) {
  animation-duration: 0.3s;
}`, codeLanguage: "css" },
      { title: "5. देखावा नियंत्रण", content: "संपूर्ण पेज संक्रमण घेत असेल तर डोळे भरते; केवळ काही भाग बदलताना दिसला तर संक्रमण प्रभावी आणि नियंत्रित राहते.\nउदा. ::view-transition-group(info) ला animation: none दिलं की त्या भागासाठी संक्रमण थांबते — फक्त राजकीय भाग हालतो.\nसंक्रमण सक्रिय राहावं अशा भागांना view-transition-name द्या; ज्यांना स्थिर ठेवायचं त्यांना name न द्यावं किंवा animation-off करावं.\nहा निवडक दृष्टीकोन स्पष्टता आणतो — वाचक लक्ष कुठे द्यावं हे समजतं, विनाकारण हालचालींचा गोंधळ उरत नाही.", code: `::view-transition-group(info) {
  animation: none;
}`, codeLanguage: "css" },
      { title: "6. आधार तपासणी", content: "view transition API प्रत्येक ब्राउझरमध्ये नसतो — त्यामुळे code चालवण्यापूर्वी उपलब्धता तपासल्याशिवाय बदल उड्डाण करत नाही.\nजावास्क्रिप्टमध्ये document.startViewTransition हा फंक्शन अस्तित्वात आहे का ते if ने तपासा; नसेल तर सरळ swap() चालू होतो.\nहा आधार तपासणी-दरम्यान नाही तर झटकन बदल होतो — संक्रमण नसले तरी पेज कार्यशील राहतं; हीच progressive enhancement ची ताकद.\nसंक्रमण हे 'अतिरिक्त सुधारणा' आहे, कार्यक्षमतेचा आधार नाही; हे ध्यानात ठेवलं तर प्रत्येक ब्राउझरवर अनुभव नेहमी सुरळीत राहतो.", code: `if (document.startViewTransition) {
  document.startViewTransition(() => swap());
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक प्रोजेक्ट स्विचर पेज बनवा — दोन भागांमध्ये जाताना केवळ article नव्हे तर संपूर्ण विभाग गुळगुळीत बदलतो.\n.component ला view-transition-name: article द्या आणि दोन्ही अवस्थांमध्ये तेच नाव सलग ठेवा; बदलताना मजकूर एका ठिकाणी उकलल्यासारखा दिसतो.\nanimation-duration 0.3s ने संयम राखा — खूप जास्त वेळ लागल्यास वापरकर्ता चिडतो, खूप कमी असल्यास संक्रमण दिसतच नाही.\ndocument.startViewTransition तपासून आधार नसल्यास सरळ swap करा; संपूर्ण यंत्रणा एकत्र आल्यावर संक्रमणाची जादू सर्वांच्या हाती सोपी होते.", code: `.page {
  view-transition-name: article;
  animation-duration: 0.3s;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["view transition काय?", "नाव कसे द्यावे?", "जुने नवे काय?"],
    quiz: [
      { question: "ट्रिगर काय?", options: ["startViewTransition", "reload", "scroll"], correct: 0 },
      { question: "नामकरण?", options: ["view-transition-name", "color", "width"], correct: 0 },
      { question: "old/new?", options: ["दोन्ही थर", "एकच", "फॉन्ट"], correct: 0 },
      { question: "आधार तपास?", options: ["if presence", "गणती", "nave"], correct: 0 },
    ],
    challenge: {
      prompt: "पेज स्विच पेज",
      starterCode: `.page { view-transition-name: article; }`,
      expectedOutput: "Renders smooth page transition",
    },
    interviewQuestions: ["जावास्क्रिप्ट लागेल?", "shared element नियम?"],
    related: ["css-drag-media", "css-at-property"],
    prev: "css-drag-media",
    next: "css-at-property",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-at-property",
    categoryId: "web",
    title: "@property",
    marathiTitle: "@property — घोषित मूल्य",
    level: "advanced",
    minutes: 25,
    summary: "syntax, inherits, initial-value आणि animation interpolation.",
    sections: [
      {
        title: "@property — घोषित मूल्य म्हणजे काय?",
        content: "syntax, inherits, initial-value आणि animation interpolation.\nसामान्य custom property ची मूल्ये ब्राउझर ओळखत नाही — ती फक्त मजकूर म्हणून लक्षात राहतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? @property — घोषित मूल्य चे फायदे आणि महत्त्व",
        content: "\"@property — घोषित मूल्य\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ प्रकार नियंत्रित असल्याने चुकीचं मूल्य (उदा.\n✗ ही नोंदणी शैली लागू होण्यापूर्वी व्हावी; म्हणून link किंवा script जोडताना क्रमाची काळजी घ्या — चुकीच्या क्रमाने जोडलं तर variable कामात येत राहणार नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. @property कल्पना", content: "सामान्य custom property ची मूल्ये ब्राउझर ओळखत नाही — ती फक्त मजकूर म्हणून लक्षात राहतात. @property ने त्या variable ला निश्चित प्रकार घोषित करता येतो.\nउदा. @property --x { syntax: \"<length>\"; inherits: false; initial-value: 0px; } लिहिलं की --x रुंदी/अंतराचं मूल्य म्हणून वागतं.\nsyntax प्रकार सांगतो, inherits ने वारसा ठरवता, initial-value आरंभीचं मूल्य; तिन्ही स्पष्ट लिहिले तर ब्राउझरला संपूर्ण माहिती उपलब्ध होते.\nही घोषणा म्हणजे CSS ला typed data देणं; त्यामुळे संगणकाला कळतं की variable मध्ये काय येईल आणि त्यावर गणित, transition, animation अचूक चालतात.", code: `@property --x {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}`, codeLanguage: "css" },
      { title: "2. syntax प्रकार", content: "syntax मध्ये variable चा प्रकार ठरवतो — <length> रुंदी, <color> रंग, <number> संख्या, <percentage> टक्के असे अनेक पर्याय.\nउदा. @property --hue { syntax: \"<number>\"; inherits: true; initial-value: 0; } याने --hue ही संख्या असल्याचं सूचित होतं आणि मुलांच्या घटकांना वारशाने जातं.\nप्रकार नियंत्रित असल्याने चुकीचं मूल्य (उदा. रंग जिथे संख्या हवी) घातलं तर ब्राउझर नियम नाकारतो — डेटा बंधनकारक आणि दोष कमी.\nसंख्यात्मक प्रकारांवर transition खऱ्या अर्थाने चालते; color आणि percentage मूल्यांमध्ये ब्राउझर आपोआप मध्यम टप्पे जोडतो म्हणून animation सुंदर होते.", code: `@property --hue {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}`, codeLanguage: "css" },
      { title: "3. रंग animation", content: "रंग variable चे animation पूर्वी गोंधळ होत असे — ब्राउझर रंगाची मध्यवर्ती मूल्ये नीट जोडू शकत नसे, म्हणून रंग अचानक बदलत असे.\n@property ने syntax: \"<color>\" घोषित केल्यावर ब्राउझरला रंग हा रंग म्हणून समजतो आणि transition गुळगुळीत होते.\nउदा. --brand ला #0f766e पासून निळ्याकडे नेलं तर प्रत्येक फ्रेममध्ये मध्यम रंग आपोआप तयार होतात — संक्रमण डोळ्यांना आनंददायी.\nहा फरक छोटा वाटतो पण theme बदल, hover रंग, प्रगती बार अशा ठिकाणी तो संपूर्ण अनुभव बदलतो — रंग अचानक उडत नाही म्हणून पेज मऊ व प्रोफेशनल दिसते.", code: `@property --brand {
  syntax: "<color>";
  inherits: true;
  initial-value: #0f766e;
}`, codeLanguage: "css" },
      { title: "4. चक्र हालचाल", content: "प्रगती दाखवणारा बार हा @property चा सर्वांत उपयुक्त वापर आहे — --p ही टक्के म्हणून घोषित केल्यावर त्याची हालचाल सहज transition होते.\nउदा. @property --p { syntax: \"<percentage>\"; } दिल्यावर .prog ची width: var(--p) बदलताना गुळगुळीत वाढते, अचानक उडी नसते.\n0% ते 100% दरम्यान ब्राउझर संख्यात्मक टप्पे जोडतो; म्हणून रुंदी, अंतर, आकार अशा गोष्टींमध्ये हालचाल देखील सुंदर दिसते.\nकेवळ width च नव्हे — rotate, opacity, scale सारख्या गुणधर्मांवरही --p वापरून हालचाल एकाच ठिकाणाहून नियंत्रित करता येते.", code: `@property --p {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}
.prog { width: var(--p); }`, codeLanguage: "css" },
      { title: "5. registerProperty", content: "@property CSS मध्ये लिहितो; पण जावास्क्रिप्टमधून CSS.registerProperty() नेही तेच typed variable तयार करता येते — dynamic theme साठी उपयुक्त.\nउदा. CSS.registerProperty({ name: \"--m\", syntax: \"<number>\", inherits: false, initialValue: \"0\" }) लिहिलं की --m तात्काळ typed बनतो.\nनाव नेहमी -- ने सुरू करा आणि same syntax व inherits द्या; initialValue हे string असणे अपेक्षित असते म्हणून अवतरणात लिहा.\nही नोंदणी शैली लागू होण्यापूर्वी व्हावी; म्हणून link किंवा script जोडताना क्रमाची काळजी घ्या — चुकीच्या क्रमाने जोडलं तर variable कामात येत राहणार नाही.", code: `CSS.registerProperty({
  name: "--m",
  syntax: "<number>",
  inherits: false,
  initialValue: "0"
});`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@property ची मदत सर्व ब्राउझरमध्ये नसते; त्यामुळे वापर करताना आधार तपासणी हा सुरक्षित मार्ग आहे.\n@supports (syntax: \"<color>\") च्या आत @property नियम ठेवल्यास आधार असल्यासच तो सक्रिय होतो.\nआधार नसलेल्या ब्राउझरमधला fallback साधा रंग/आकार वापरतो — मूलभूत अनुभव अपूर्ण राहत नाही.\nयाला progressive enhancement म्हणतात: प्रत्येक ब्राउझरला मूलभूत शैली आधी, सक्षम असलेल्यांना सुधारित शैली नंतर. ही सवय अंगी राखल्यास कोणतेही नवीन तंत्र वापरताना पेज कधीच मोडत नाही.", code: `@supports (syntax: "<color>") {
  @property --brand {
    syntax: "<color>";
    inherits: true;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक 'animated progress पेज' बनवा जिथे प्रगती बार एका typed variable वरून गुळगुळीत भरतो.\n@property --fill स syntax: \"<percentage>\" आणि initial-value: 20% द्या; .bar ची width var(--fill) आणि transition: --fill 1s लिहा.\nबटण किंवा timer ने --fill बदला — रुंदी झटकन न बदलता एक सेकंदात नवीन टक्के गाठते हेच typed variable चं बळ प्रत्यक्ष दिसेल.\nआधार नसलेल्या ब्राउझरसाठी @supports च्या बाहेर साधा width fallback ठेवा; मग प्रत्येक ब्राउझरवर बार उपयुक्त राहतो आणि नविन तंत्राचा आनंद सक्षम उपकरणांना मिळतो.", code: `@property --fill {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 20%;
}
.bar { width: var(--fill); transition: --fill 1s; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@property काय घोषित?", "syntax का?", "registerProperty कधी?"],
    quiz: [
      { question: "@property syntax?", options: ["प्रकार", "नाव", "आकार"], correct: 0 },
      { question: "रंग transition?", options: ["गुळगुळीत", "थबक", "रिटर्न"], correct: 0 },
      { question: "inherits?", options: ["वारसा", "रंग", "वेग"], correct: 0 },
      { question: "registerProperty?", options: ["जावास्क्रिप्ट", "रंग", "लुप्त"], correct: 0 },
    ],
    challenge: {
      prompt: "गुळगुळीत प्रोग्रेस",
      starterCode: `@property --fill { syntax: "<percentage>"; }`,
      expectedOutput: "Renders interpolating progress bar",
    },
    interviewQuestions: ["typed variable फायदा?", "आधार कसा तपासता?"],
    related: ["css-view-transitions", "css-masonry-grid"],
    prev: "css-view-transitions",
    next: "css-masonry-grid",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-masonry-grid",
    categoryId: "web",
    title: "Masonry Grid",
    marathiTitle: "Masonry — जोडणी जाळी",
    level: "advanced",
    minutes: 25,
    summary: "मोठ्या स्तंभात नसलेली masonry रचना आणि dense पूर्णकरण.",
    sections: [
      {
        title: "Masonry — जोडणी जाळी म्हणजे काय?",
        content: "मोठ्या स्तंभात नसलेली masonry रचना आणि dense पूर्णकरण.\nसामान्य grid मध्ये सर्व घटक एकसारख्या उंचीच्या ओळींत बसतात; masonry मध्ये मात्र प्रत्येक घटक त्याच्या नैसर्गिक उंचीवर ठेवला जातो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Masonry — जोडणी जाळी चे फायदे आणि महत्त्व",
        content: "✓ अशी रचना उपकरणाच्या रुंदीने सहज जुळवते — जुने मीडिया queries पुन्हा लिहिण्याची गरज नसते.\n✓ masonry मधील खालची जागा दिसायला स्वच्छ राहणे महत्त्वाचे — प्रत्येक घटकाच्या खाली आवश्यक अंतर दिले की वेगळेपणा स्पष्ट राहतो.\n✓ साधेपणा फायद्याचा: जास्त जातं gap म्हणजे जास्त व्यवस्था हे खरे नाही; एकच अंतर मूल्य घेतलं की रचना लयबद्ध आणि शांत दिसते.\n✓ घटकांच्या क्रमाला (timeline, कथा) महत्त्व असल्यास dense योग्य नव्हे; केवळ संग्रह/गॅलरीत निरुपद्रवी.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. masonry कल्पना", content: "सामान्य grid मध्ये सर्व घटक एकसारख्या उंचीच्या ओळींत बसतात; masonry मध्ये मात्र प्रत्येक घटक त्याच्या नैसर्गिक उंचीवर ठेवला जातो.\nत्यामुळे लहान-मोठी कार्डे एकत्र असताना ओळींमध्ये मोकळी जागा शिल्लक राहत नाही; पुढील घटक खाली आधी उपलब्ध असलेल्या जागेत भरला जातो.\nPinterest सारख्या फोटो गॅलरींमध्ये हा देखावा सर्वांत जास्त दिसतो; तिथे सर्व चित्रे वेगवेगळ्या उंचीची असतात.\ngrid-template-rows: masonry या घोषणेने ही ओळ नसलेली जाळी मिळते; हे तंत्र अजूनही नवीन आहे, म्हणून आधार तपासणीसह वापरावं.", code: `.gallery {
  display: grid;
  grid-template-rows: masonry;
}`, codeLanguage: "css" },
      { title: "2. स्तंभ रुंदी", content: "masonry मध्ये स्तंभांच्या रुंदीची व्यवस्था grid सारखीच असते — repeat(auto-fill, minmax(180px, 1fr)) ने लहान खिडकीवर आपोआप कमी स्तंभ, मोठ्यावर जास्त स्तंभ मिळतात.\nauto-fill शक्य तितके स्तंभ तयार करतो आणि minmax 180px खाली जाऊ देत नाही; 1fr ने उरलेली जागा समान वाटण्यास मदत होते.\nअशी रचना उपकरणाच्या रुंदीने सहज जुळवते — जुने मीडिया queries पुन्हा लिहिण्याची गरज नसते.\nकेवळ स्तंभ रुंदी ठरवणे पुरेसे; प्रत्येक घटकाची उंची तो स्वतः ठरवतो, म्हणून masonry चा वेगळेपणा जपला जातो.\nमीडिया queries शिवायच अशा रचना मिळू लागल्या म्हणूनच masonry नवीन दिशा देतो.", code: `.gallery {
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}`, codeLanguage: "css" },
      { title: "3. ब्लॉक भराव", content: "masonry मधील खालची जागा दिसायला स्वच्छ राहणे महत्त्वाचे — प्रत्येक घटकाच्या खाली आवश्यक अंतर दिले की वेगळेपणा स्पष्ट राहतो.\n.item ला margin-bottom: 1rem दिलं की कार्डांमध्ये उभे अंतर नियमित राहतं; भरलेली जागा कधीही घट्ट वाटत नाही.\nकेवळ उभे अंतर देताना काळजी घ्या — column गॅप हा masonry मध्ये आधीच वेगळेपणा देतो.\nसाधेपणा फायद्याचा: जास्त जातं gap म्हणजे जास्त व्यवस्था हे खरे नाही; एकच अंतर मूल्य घेतलं की रचना लयबद्ध आणि शांत दिसते.", code: `.item {
  margin-bottom: 1rem;
}`, codeLanguage: "css" },
      { title: "4. dense पर्याय", content: "grid-auto-flow: dense ने लहान घटक खाली उरलेल्या जागेत (उदा. संध्याकाळची छोटी कार्डे) आपोआप भरले जातात.\nयामुळे एकूण जागेचा कमी वाया जातो आणि गॅलरी सघन दिसते; पण क्रम काहीसा घटतो — मोठा घटक नंतर दिसू शकतो.\nघटकांच्या क्रमाला (timeline, कथा) महत्त्व असल्यास dense योग्य नव्हे; केवळ संग्रह/गॅलरीत निरुपद्रवी.\nआधार असलेल्या ब्राउझरमध्येच हे फायदे; नसलेल्यावर सामान्य grid चालतो — म्हणून निवड आधारावरच करावी.\nघट्ट जागेपेक्षा क्रम जपायचा असेल तर dense टाळणे योग्य.", code: `.gallery {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
      { title: "5. आधार स्थिती", content: "grid-template-rows: masonry हा अजूनही कमी ब्राउझरमध्ये उपलब्ध आहे — म्हणून थेट वापरण्याऐवजी आधार तपासणीच प्रथम होईल.\n@supports (grid-template-rows: masonry) च्या आत मेसनरी नियम ठेवा; आधार नसेल तर सामान्य grid चालतो आणि साइट खंडित होत नाही.\nही दुहेरी रचना म्हणजे progressive enhancement: सक्षम ब्राउझरला घट्ट गॅलरी, बाकी सर्वांना नीटनेटका grid.\n@supports च्या बाहेर मूळ grid नियम लिहायला विसरू नका — आधार तपासणी तो failure ब्राउझर देत नाही.\nकोणत्याही नवीन रचनेत पहिला प्रश्न 'आधाररहित ब्राउझरला काय दिसेल?' हा असावा.", code: `@supports (grid-template-rows: masonry) {
  .wrap { grid-template-rows: masonry; }
}`, codeLanguage: "css" },
      { title: "6. प्रयोग सूचना", content: "masonry ची जादू तेव्हाच दिसते जेव्हा घटकांच्या उंची खरोखर वेगवेगळ्या असतात — म्हणून चित्रे निवडताना विविधता ठेवा.\nचित्रे नीट बसण्यासाठी .card img ला width: 100% आणि height: auto आवश्यक — हे नियम नसतील तर भरलेला देखावा नीट येत नाही.\nसगळी चित्रे एकसारखी असतील तर masonry चं वेगळेपण दिसतच नाही; योग्य सामग्री निवडणेही रचनेच्या कामापैकीच आहे.\nचाचणीत मोबाइल आणि desktop दोन्ही पावित्र्य तपासा — स्तंभांची संख्या आपोआप बदलते, काही कार्डे ओव्हरलॅप होत नाहीत याची खात्री करा.", code: `.card img {
  width: 100%;
  height: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक मराठी लेखांची गॅलरी पेज बनवा — प्रत्येक कार्डची उंची मजकुरानुसार वेगळी, त्या रचनेत masonry चं वेगळेपण दिसतं.\n@supports (grid-template-rows: masonry) च्या आत masonry नियम ठेवा; बाहेर, प्रत्येकी किमान 160px रुंदीचे स्वयंजुळणारे स्तंभ असलेला साधा grid.\nप्रत्येक कार्डला img width: 100%; height: auto द्या; नंतर कार्डांची उंचीही नैसर्गिक राहील व गॅलरी घट्ट दिसेल.\n@supports असलेल्या ब्राउझरमध्ये कार्डे खालच्या जागेत भरतात तर नसलेल्यावर नीटनेटके grid — दोन्ही अनुभवाची तुलना करून masonry ची शक्ती-सीमा समजून घ्या.", code: `.gallery {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
@supports (grid-template-rows: masonry) {
  .gallery { grid-template-rows: masonry; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["masonry म्हणजे?", "dense काय करतो?", "आधार कसा तपासतात?"],
    quiz: [
      { question: "masonry rows?", options: ["वेगळे आकार", "सरळ", "रंग"], correct: 0 },
      { question: "dense?", options: ["जागा भरते", "रंग देतो", "इलात"], correct: 0 },
      { question: "auto-fill?", options: ["स्तंभ समायोजन", "नाव", "फॉन्ट"], correct: 0 },
      { question: "@supports?", options: ["आधार तपास", "वेग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "मेसॉनरी गॅलरी",
      starterCode: `@supports (grid-template-rows: masonry) { .gallery { grid-template-rows: masonry; } }`,
      expectedOutput: "Renders masonry photo grid",
    },
    interviewQuestions: ["masonry vs grid?", "dense कधी योग्य?"],
    related: ["css-at-property", "css-isolation-mix"],
    prev: "css-at-property",
    next: "css-isolation-mix",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-isolation-mix",
    categoryId: "web",
    title: "Isolation & Mix",
    marathiTitle: "Isolation — थर संदर्भ",
    level: "advanced",
    minutes: 25,
    summary: "contain combined, isolation, blend patterns आणि stacking अभ्यास.",
    sections: [
      {
        title: "Isolation — थर संदर्भ म्हणजे काय?",
        content: "contain combined, isolation, blend patterns आणि stacking अभ्यास.\nisolation: isolate हा घटकाला स्वतंत्र stacking context बनवतो — त्यामुळे आतले थर बाहेरच्या थरांशी गुंता होत नाहीत; आणि contain: paint ने रेखाटनाची व्याप्ती फक्त त्या घटकापुरती मर्यादित राहते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Isolation — थर संदर्भ चे फायदे आणि महत्त्व",
        content: "✓ हे modal, tooltip, dropdown सारख्या वेगळ्या थरांच्या घटकांसाठी सर्वांत महत्त्वाचे — ओपन/क्लोज केल्यावर क्रम कधीही विस्कळीत होत नाही.\n✓ contain हे जुने मूल्य आधी सुरक्षित वापरता येते — खूप कमी ब्राउझर त्याच्या मागे उरले आहेत; पण blend आणि isolate चे निकाल पडद्यावर तपासणे आवश्यक.\n✓ असा स्थिर आणि परीक्षित धोरण ठेवल्यावर या आधुनिक गुणधर्मांचा उपयोग सतत लाभदायक बनतो आणि कोणत्याही स्क्रीनवर साइट बिघडत नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. isolation एकत्र", content: "isolation: isolate हा घटकाला स्वतंत्र stacking context बनवतो — त्यामुळे आतले थर बाहेरच्या थरांशी गुंता होत नाहीत; आणि contain: paint ने रेखाटनाची व्याप्ती फक्त त्या घटकापुरती मर्यादित राहते.\nहे दोन्ही एकत्र मिळतात तेव्हा विजेट खरोखर 'बंदिस्त' होते — बाहेरील blend, z-index, backdrop चा हस्तक्षेप यापुढे आत येऊ शकत नाही.\nकामगिरीसाठी contain ने ब्राउझरला सांगण्यात येते की ठराविक भागात बदल झाला तरी बाहेर फिरू नको — यामुळे rendering वेग सुधारतो.\nअशा प्रकारे isolate + contain ची सांगड कोणत्याही 'स्वायत्त कंपोनंट' ला स्थिर बंदिस्त घटक देते: तो सुरक्षित आणि अंदाजे राहतो.", code: `.widget {
  isolation: isolate;
  contain: paint;
}`, codeLanguage: "css" },
      { title: "2. blend मिश्रण", content: "mix-blend-mode हा घटकाचा रंग त्याच्या खालच्या थराशी मिसळून देतो — normal हे मूल्य म्हणजे मिश्रण नसल्यासारखे साधे रूप; multiply मात्र रंग गडद करतो.\nउदा. हिरव्या hero वर गडद रंगाचे चित्र असल्यास multiply लावल्यास खालच्या चित्राचे गडद भाग हिरव्याशी खोल मिसळतात — सावली आणि खोली वाढते.\nमटेरियल डिझाइनच्या poster, card, header अशा ठिकाणी blend वापरल्यावर रंग संवाद अधिक जिवंत दिसतो.\nपण काळजी घ्या — blend चा परिणाम खालच्या थरावर अवलंबून असतो; म्हणून साध्या दृश्यासाठी normal नेहमी सुरक्षित पर्याय आहे.", code: `.hero {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "3. stacking अभ्यास", content: "isolation: isolate मुळे प्रत्येक घटक स्वतःचा स्तर सुरू करतो — आतले z-index मूल्य बाहेरच्या घटकांशी स्पर्धा करत नाही.\nउदा. .menu ला isolation: isolate आणि z-index: 5 दिलं की तो मेनू आपल्या आतल्या आशयाची थरव्यवस्था स्वतः संभाळतो; बाहेरील मोठा z-index त्याला झाकत नाही.\nहे modal, tooltip, dropdown सारख्या वेगळ्या थरांच्या घटकांसाठी सर्वांत महत्त्वाचे — ओपन/क्लोज केल्यावर क्रम कधीही विस्कळीत होत नाही.\nअनेक थरांच्या गोंधळात मुख्य युक्ती प्रत्येक स्वायत्त घटकाला स्वतःचा संदर्भ देणे; त्यामुळे अनुक्रम स्पष्ट आणि अंदाजे राहतो.", code: `.menu {
  isolation: isolate;
  z-index: 5;
}`, codeLanguage: "css" },
      { title: "4. contain combo", content: "contain ला एकापेक्षा जास्त मूल्ये देताना कामगिरीसाठी नियंत्रण अधिक होते — layout म्हणजे व्यवस्थेची गणना मर्यादित, paint म्हणजे रेखाटन मर्यादित.\nउदा. .panel ला contain: layout paint दिलं की त्या पटलातील बदल बाहेरील घटकांना जाणवत नाहीत; ब्राउझर फक्त त्या भागाची पुनर्गणना करतो.\nअशा छोट्या स्वायत्त घटकांकडे ब्राउझर प्रत्येक बदलावर संपूर्ण पेज रंगवत नाही — यामुळे गती वाढते आणि battery देखील वाचतो.\nपण मर्यादा ओळखा: layout contain घटकाबाहेर पसरणाऱ्या गोष्टी (उदा. absolute पॉपअप) रोखू शकतो; कोणता घटक स्वायत्त खरा आहे हे लक्षात ठेवूनच contain लावा.", code: `.panel {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "5. layer pattern", content: "@layer ने नियमांच्या क्रमाला नावे देतो — base, theme, widgets अशा थरांची यादी आखल्यावर नियमांचा क्रम संपूर्ण प्रोजेक्टमध्ये एकसारखाच राहतो.\nआधीची यादी नंतरच्या थरांना प्राधान्य देते; थराबाहेर लिहिलेल्या नियमांना मात्र सर्वांत जास्त प्राधान्य मिळते.\nहे तंत्र component libraries आणि theme बदलांमध्ये मौल्यवान — समान नावाचे नियम फाइल क्रमाच्या शिकार न होता थर-क्रमाने स्थिर होतात.\nपरिणाम: जुना नियम कुठे आला याचा गोंधळ संपतो आणि दुरुस्ती दिलेल्या ठिकाणी होते; व्यवस्थापन सोपे व स्पष्ट.", code: `@layer base, theme, widgets;`, codeLanguage: "css" },
      { title: "6. आधार आणि सुसंगत", content: "contain हे जुने मूल्य आधी सुरक्षित वापरता येते — खूप कमी ब्राउझर त्याच्या मागे उरले आहेत; पण blend आणि isolate चे निकाल पडद्यावर तपासणे आवश्यक.\n@supports (contain: layout) च्या आत contain नियम टाका; आधार नसेल तर शैली बिनबिघड चालते फक्त वेग स्थिती वेगळी असते.\nडिझाइन लागू करताना visibility आणि कॉन्ट्रास्ट पडद्यांवर अगोदरच तपासणी करा — blend निकाल मॉनिटरनुसार वेगळा दिसतो.\nअसा स्थिर आणि परीक्षित धोरण ठेवल्यावर या आधुनिक गुणधर्मांचा उपयोग सतत लाभदायक बनतो आणि कोणत्याही स्क्रीनवर साइट बिघडत नाही.", code: `@supports (contain: layout) {
  .panel { contain: layout; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक डॅशबोर्ड थरांचे पेज बनवा — प्रत्येक विजेटला स्वतःचा स्तर देत, बाहेरील थरांशी गुंता होऊ न देता.\nप्रत्येक .widget ला isolation: isolate आणि contain: layout paint द्या; त्यामुळे कुठल्याही विजेटचा बदल बाकी पेज थरांवर परिणाम करत नाही.\nशीर्षक क्षेत्रावर mix-blend-mode: multiply लावा — खालच्या रंगाशी गडद सावली मिसळून शीर्षक व्यवस्थित ठळक दिसते.\n@supports (contain: layout) ने contain च्या आधाराची खात्री करा आणि प्रत्येक विजेट वेगळा तपासा; थरव्यवस्थेचे हे संपूर्ण चित्र मग कायमचे समजेल.", code: `.widget {
  isolation: isolate;
  contain: layout paint;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["isolation म्हणजे?", "blend कधी?", "contain strict?"],
    quiz: [
      { question: "isolate?", options: ["नवीन context", "रंग", "आकार"], correct: 0 },
      { question: "multiply?", options: ["गडद", "हलका", "लुप्त"], correct: 0 },
      { question: "strict contain?", options: ["पृथक", "सरळ", "गणना"], correct: 0 },
      { question: "stacking काय?", options: ["क्रम", "रंग", "वेग"], correct: 0 },
    ],
    challenge: {
      prompt: "थर डॅशबोर्ड",
      starterCode: `.widget { isolation: isolate; contain: layout paint; }`,
      expectedOutput: "Renders layered dashboard",
    },
    interviewQuestions: ["blend प्रवेश?", "contain ताकद?"],
    related: ["css-masonry-grid", "css-direction-context"],
    prev: "css-masonry-grid",
    next: "css-direction-context",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-direction-context",
    categoryId: "web",
    title: "Direction & Logical",
    marathiTitle: "Direction — दिशा वारसा",
    level: "advanced",
    minutes: 25,
    summary: "writing-mode, direction आणि logical properties सुसंगतता.",
    sections: [
      {
        title: "Direction — दिशा वारसा म्हणजे काय?",
        content: "writing-mode, direction आणि logical properties सुसंगतता.\nप्रत्येक भाषा डावीकडून उजवीकडे वाचली जात नाही — अरबी, उर्दू सारख्या भाषा उजवीकडून डावीकडे (rtl) वाचल्या जातात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Direction — दिशा वारसा चे फायदे आणि महत्त्व",
        content: "✓ अशा शैलीत एकदा लिहावे लागते आणि भाषा बदलल्यावरसुद्धा नियम वेगळे लिहिण्याची गरज पडत नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ text-align: left/right ही भौतिक मूल्ये दिशा बदलल्यावर चुकीची दिसतात; start आणि end मात्र भाषेच्या आरंभ/शेवटाशी जुळतात.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. भाषा दिशा", content: "प्रत्येक भाषा डावीकडून उजवीकडे वाचली जात नाही — अरबी, उर्दू सारख्या भाषा उजवीकडून डावीकडे (rtl) वाचल्या जातात.\nदिशा बदलल्यावर संरेखनही बदलले पाहिजे; उदा. html[dir=\"rtl\"] .nav वर justify-content: flex-end दिलं की मेनू आपोआप उलट बाजूला बसतो.\nउजवी-डावी अशा 'भौतिक' नियमांऐवजी logical (start/end) मूल्ये वापरली तर दिशा बदलल्यावर शैली आपोआप जुळवली जाते.\nमराठी स्वतः ltr आहे, पण आंतरराष्ट्रीय श्रोत्यांसाठी ही सवय तुमच्या पेजला खऱ्या अर्थाने द्विभाषिक बनवते.", code: `html[dir="rtl"] .nav {
  justify-content: flex-end;
}`, codeLanguage: "css" },
      { title: "2. writing-mode", content: "writing-mode हा मजकूर कोणत्या दिशेला रचला जाईल ते ठरवतो; मुख्य मूल्य horizontal-tb असल्याने रेषा डावीकडून उजवीकडे चालतात.\nस्वाक्षरी, बॅज, पोस्टर दिग्दर्शन अशा ठिकाणी vertical मजकूर हवा असेल तेव्हा vertical-rl किंवा vertical-lr वापरतात.\nउदा. जपानी साहित्य vertical-rl वापरते; पण डिझाइनमध्येसुद्धा शीर्षक खाली-वर लिहायचे असल्यास तेच मूल्य काम करते.\nरेषा आणि आकार दिशा एकत्र न बसल्यास confusion होऊ नये म्हणून तुमच्या content नुसार writing-mode काळजीपूर्वक निवडा.", code: `.sign {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
      { title: "3. logical properties", content: "भौतिक margin-left/right किंवा padding-top/bottom ऐवजी logical properties दिशेनुसार बदलतात — margin-block हा वर-खालचा, margin-inline हा डावा-उजवा.\nउदा. margin-inline: auto दिल्यास घटक ज्या दिशाही असो, आपोआप आडवा मध्यभागी येतो; padding-block: 1rem ने वर-खाली समान अंतर मिळते.\nborder-inline-start सारखी कडा दिशेनुसार 'सुरुवात'ला लागते — rtl मध्ये ती उजवीकडे जाते, ltr मध्ये डावीकडे.\nअशा शैलीत एकदा लिहावे लागते आणि भाषा बदलल्यावरसुद्धा नियम वेगळे लिहिण्याची गरज पडत नाही.", code: `.box {
  margin-inline: auto;
  padding-block: 1rem;
}`, codeLanguage: "css" },
      { title: "4. text-align दिशा", content: "text-align: left/right ही भौतिक मूल्ये दिशा बदलल्यावर चुकीची दिसतात; start आणि end मात्र भाषेच्या आरंभ/शेवटाशी जुळतात.\nउदा. .quote ला text-align: start दिल्यास मराठीत डावीकडे, अरबीत उजवीकडे — मजकूर नेहमी नैसर्गिक वाचनदिशेला लागतो.\nमजकूर मध्यभागी ठेवायचा असल्यास center आणि द्विभाषिक लेआउटमध्ये start/end हा सर्वोत्तम मार्ग.\nहे बदल छोटे; पण एकदा आत्मसात केल्यावर तुमचा मजकूर दोन्ही दिशांना योग्य रीतीने वाचता येतो.", code: `.quote {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. css logical एकक", content: "inline-size आणि block-size ही logical आकारमाने आहेत — inline-size म्हणजे रेषेच्या दिशेतील रुंदी, block-size म्हणजे रेषांमधील उंची.\nउदा. .field ला inline-size: 20rem दिल्यास ltr मध्ये तीच 20rem रुंदी, rtl मध्येही योग्य दिशेने लागू होते; भौतिक width सारखे दिशा गुंतागुंत नाही.\nmin-inline-size लहान मर्यादा ठरवते, max-inline-size मोठी — म्हणजे width/min-width/max-width ची logical आवृत्ती.\nयामुळेच भाषा बदलल्यावर आकार-प्रकाराची गणिते दुरुस्त राहतात आणि लेआउट पुन्हा लिहावा लागत नाही.", code: `.field {
  inline-size: 20rem;
}`, codeLanguage: "css" },
      { title: "6. भाषा तपासणी", content: "html[lang=\"mr\"] { writing-mode: horizontal-tb; direction: ltr; } अशी आधार घोषणा देताना प्रत्येक भाषेची दिशा स्पष्ट लिहावी.\nजुने शैली-नियम (margin-left, text-align: left) टाळून logical मूल्यांकडे वळा; भाषा बदलताना दुरुस्तीसाठी हाच मार्ग सुटसुटीत.\nसर्व logical मूल्ये एकदम बदलू नका — क्रमाने भाग-भाग करून बदल करा आणि प्रत्येक टप्प्यावर ltr व rtl दोन्ही तपासा.\nब्राउझर आधार आणि अपवादांची चाचणी घेतल्यावरच व्यवस्था स्थिर होते; विस्तृत श्रोत्यांसाठी ही काळजी मोठा आदर मिळवून देते.", code: `html[lang="mr"] {
  writing-mode: horizontal-tb;
  direction: ltr;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक द्विभाषिक कार्ड पेज बनवा — मराठी आणि उर्दू अशा दोन्ही दिशांना तेच घटक नीट दिसेल.\nकार्डातील अंतर padding-inline ने द्या आणि शीर्षक text-align: start ठेवा; भाषा बदलताच आशय योग्य बाजूला जुळवला जातो.\nउजव्या बाजूला लहान 'नवीन' बॅज हवा असल्यास .badge ला writing-mode: vertical-rl आणि inline-size: auto द्या — मजकूर उभा वाचता येतो.\nhtml[lang] नुसार त्या दोन भाषांची दिशा बदलून पहा; दोन्ही आवृत्त्या जुळल्या की logical properties चा खरा लाभ प्रत्यक्ष दिसेल.", code: `.badge {
  writing-mode: vertical-rl;
  inline-size: auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["logical काय देतात?", "writing-mode?", "text-align start?"],
    quiz: [
      { question: "margin-inline?", options: ["बाजू", "वर खाली", "रंग"], correct: 0 },
      { question: "vertical-rl?", options: ["उभी ओळ", "आडवी", "संगीत"], correct: 0 },
      { question: "inline-size?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "start दिशा?", options: ["भाषेची सुरूआत", "शेवट", "वेग"], correct: 0 },
    ],
    challenge: {
      prompt: "द्विभाषिक व्यवस्था",
      starterCode: `.box { margin-inline: auto; }`,
      expectedOutput: "Renders logical RTL-safe card",
    },
    interviewQuestions: ["physical vs logical?", "writing-mode कोणते?"],
    related: ["css-isolation-mix", "css-anchor-positioning"],
    prev: "css-isolation-mix",
    next: "css-anchor-positioning",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-anchor-positioning-2",
    categoryId: "web",
    title: "Anchor Positioning",
    marathiTitle: "Anchor — जोड स्थान",
    level: "advanced",
    minutes: 25,
    summary: "anchor-name, position-area आणि position-try प्रतिसाद.",
    sections: [
      {
        title: "Anchor — जोड स्थान म्हणजे काय?",
        content: "anchor-name, position-area आणि position-try प्रतिसाद.\nanchor positioning मध्ये एक घटक 'अँकर' (आधार) बनतो आणि दुसरा घटक त्या आधारावर ठरलेल्या ठिकाणी स्थिर होतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Anchor — जोड स्थान चे फायदे आणि महत्त्व",
        content: "✓ यामुळे ठिकाण कुठे असेल याची गणिते JavaScript न लिहिता, पडद्याच्या आकारानुसार CSS स्वतः करते — हे तंत्र नवीन पण प्रचंड सोयीचे आहे.\n✓ पेजची layout पुन्हा मोजण्याची (reflow) गरज नसते — ब्राउझर फक्त उलट करून योग्य पर्याय शोधतो.\n✓ जावास्क्रिप्ट गरज असेल तर ती तपासणी करूनच वापरा — मुलभूत माहिती/अनुभव कधीही JavaScript वर अवलंबून ठेवू नका.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. anchor कल्पना", content: "anchor positioning मध्ये एक घटक 'अँकर' (आधार) बनतो आणि दुसरा घटक त्या आधारावर ठरलेल्या ठिकाणी स्थिर होतो.\nउदा. सूचीतील बटणावर hover केल्यावर त्याच्या जवळ टूलटिप उघडणे — बटण हा अँकर, टूलटिप हा त्या अँकरला जोडलेला घटक.\nanchor-name: --tip ने तो घटक ओळखण्यायोग्य नाव (जसे --tip) घेतो; नंतर दुसरा घटक तेच नाव वापरून त्याच्याशी बांधला जातो.\nयामुळे ठिकाण कुठे असेल याची गणिते JavaScript न लिहिता, पडद्याच्या आकारानुसार CSS स्वतः करते — हे तंत्र नवीन पण प्रचंड सोयीचे आहे.", code: `.tip-anchor {
  anchor-name: --tip;
}`, codeLanguage: "css" },
      { title: "2. position-area", content: "position-area म्हणजे अँकरच्या आसपासच्या नऊ भागांपैकी एक निवडणे — top, bottom, left, right आणि त्यांची जोडपी (top-left इ.).\nउदा. position: absolute सोबत position-area: bottom दिल्यास घटक अँकरच्या खालच्या भागात येतो; अँकर जरी हलला तरी घटक त्याच्याबरोबर सरकतो.\nबाजूची जोडपी जसे top center देऊन टूलटिप अँकरच्या वरच्या मध्यभागी नेमकी बसवता येते.\nया नामांकनाने ठिकाण घटकाच्या आकारानुसार आपोआप जुळवले जाते — म्हणून प्रत्येक बदलावर अचूक स्थान मिळते.", code: `.tip {
  position: absolute;
  position-area: bottom;
}`, codeLanguage: "css" },
      { title: "3. inset-area नियम", content: "inset-area हा position-area चा जुना/समानार्थी नियम आहे — अँकरच्या कोणत्या बाजूस घटक ठेवायचा ते सांगतो.\nउदा. .pop ला inset-area: top दिल्यास तो popup अँकरच्या वरच्या आतील भागात येतो; आपोआपच बाजूला सरकतो जेणेकरून तो अँकरवर पडत नाही.\nसामान्य CSS मध्ये 'top: ...; left: ...' हाताने मोजावे लागत; येथे ब्राउझरच स्वतः सर्व आकारमाने व उरलेली जागा मोजतो.\nटीप: नवीन लेखांत तेच काम position-area ने केले जाते; सध्याच्या ब्राउझरमध्ये कोणत्या नावाचा आधार आहे ते तपासून वापरा.", code: `.pop {
  inset-area: top;
}`, codeLanguage: "css" },
      { title: "4. position-try", content: "position-try-fallbacks हे 'पर्यायी ठिकाणांची' यादी देते — मुख्य ठिकाणी जागा नसेल तर ब्राउझर पुढचा पर्याय वापरतो.\nउदा. position-try-fallbacks: flip-block दिल्यास वरची जागा नसेल तर घटक आपोआप खालच्या बाजूला उलट होतो; पडद्याच्या काठावरील टूलटिप अशा प्रकारे सुटते.\nपेजची layout पुन्हा मोजण्याची (reflow) गरज नसते — ब्राउझर फक्त उलट करून योग्य पर्याय शोधतो.\nअशा कलात्मक 'auto-flip' मुळे पॉपअप कोणत्याही पडद्यावर, कोणत्याही आकारात दिसतो — वापरकर्त्याला कधी कापलेले टूलटिप दिसत नाहीत.", code: `.tip {
  position-try-fallbacks: flip-block;
}`, codeLanguage: "css" },
      { title: "5. जोड स्थानता", content: "position-anchor ने ठरवतं की घटक कोणत्या अँकरला जोडायचा — तेच नाव वापरून position: fixed असलेला टूलटिप त्या बटणाशी कायमचा बांधला जाऊ शकतो.\nउदा. .tooltip ला position: fixed; position-anchor: --btn; inset-area: top center; दिल्यास टूलटिप नेहमी त्या ठराविक बटणाच्या वर मध्यभागी दिसतो.\nanchor-size() फंक्शनने टूलटिपची रुंदी/उंची अँकरच्या आकारानुसार ठरवता येते — दोन्ही घटक सुसंगत, एकरेषीय दिसतात.\nअशा जोडणीमुळे स्क्रोल, झूम, आकार बदल सर्वांवरही टूलटिप आपोआप जागा बदलतो — म्हणजेच स्थान कधीच सेट होऊन गोंधळ होत नाही.", code: `.tooltip {
  position: fixed;
  position-anchor: --btn;
  inset-area: top center;
}`, codeLanguage: "css" },
      { title: "6. आधार मर्यादा", content: "anchor positioning अजूनही सर्व ब्राउझरमध्ये पूर्णपणे उपलब्ध नाही; म्हणून @supports (position-area: center) ने आधार तपासावा.\nआधार असेल तर मुख्य नियम (जसे position-area: bottom center) लागू होईल; नसेल तर position: absolute सारखा साधा, विश्वासार्ह पर्याय टिकेल.\nजावास्क्रिप्ट गरज असेल तर ती तपासणी करूनच वापरा — मुलभूत माहिती/अनुभव कधीही JavaScript वर अवलंबून ठेवू नका.\nअशा जागरूक, आधार-तपासणीच्या शैलीत काम केल्यास नवा ब्राउझर सर्वोत्तम अनुभव देतो आणि जुनाही दुखावत नाही.", code: `@supports (position-area: center) {
  .tip { position-area: bottom center; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक टूलटिप यंत्रणा बनवा — प्रत्येक बटणाला स्वतःचं अँकर नाव देत, टूलटिप त्या-त्या बटणाशी जोडा.\n.btn ला anchor-name: --btn आणि .tip ला position: fixed; position-anchor: --btn; inset-area: top द्या — माउस फिरवताच अचूक ठिकाणी टूलटिप दिसेल.\nपडद्याच्या वरच्या/खालच्या कडेला position-try-fallbacks वापरून टूलटिप उलट बाजूला जाईल अशी व्यवस्था करा.\nशेवटी @supports ने आधार तपासा; असलेल्या ब्राउझरमध्ये आकर्षक अँकर्ड टूलटिप आणि नसलेल्यांत साधा पर्याय — दोन्ही अनुभव तपासून समजून घ्या.", code: `.btn {
  anchor-name: --btn;
}
.tip {
  position: fixed;
  position-anchor: --btn;
  inset-area: top;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor काय?", "position-area?", "position-try कधी?"],
    quiz: [
      { question: "anchor-name?", options: ["जोड खूण", "रंग", "परिमाण"], correct: 0 },
      { question: "inset-area?", options: ["स्थान क्षेत्र", "मार्क", "फॉन्ट"], correct: 0 },
      { question: "flip-block?", options: ["उलट बदल", "रंग", "वेग"], correct: 0 },
      { question: "@supports?", options: ["आधार तपास", "गणती", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "अॅंकर टूलटिप",
      starterCode: `.tip { position: fixed; position-anchor: --btn; }`,
      expectedOutput: "Renders anchored tooltip",
    },
    interviewQuestions: ["position-area vs try?", "आधार कसा?"],
    related: ["css-direction-context", "css-nesting-selectors"],
    prev: "css-direction-context",
    next: "css-nesting-selectors",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-nesting-selectors",
    categoryId: "web",
    title: "Nesting & Scope",
    marathiTitle: "Nesting — घरटी रचना",
    level: "advanced",
    minutes: 25,
    summary: "& selector, @scope नियम आणि :scope संदर्भ स्पष्टता.",
    sections: [
      {
        title: "Nesting — घरटी रचना म्हणजे काय?",
        content: "& selector, @scope नियम आणि :scope संदर्भ स्पष्टता.\nnesting म्हणजे एका नियमाच्या आतच दुसरा नियम लिहिणे — मुल घटकांचे नियम आई-नियमाच्या आत, म्हणजे कोडची रचना HTML सारखी स्पष्ट होते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Nesting — घरटी रचना चे फायदे आणि महत्त्व",
        content: "✓ &:focus, &::before, &.active अशा सर्व जोडण्यांमध्ये & च उपयोगी पडतो; तसेच & + & अशी जुळवणी करून शेजारचे घटकही निवडता येतात.\n✓ nesting फायद्याचे आहे पण खोली मर्यादित ठेवावी — तीन थरांपेक्षा जास्त खाली गेल्यास कोड वाचायला कठीण आणि ठिकाणे शोधणे अवघड होते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ टीपः & चा अर्थ नेहमी 'आई नियम' एवढाच; & वापरताना कोणता नियम त्याचा जनक आहे हे लक्षात ठेवा म्हणजे चूक होणार नाही.\n✗ nesting फायद्याचे आहे पण खोली मर्यादित ठेवावी — तीन थरांपेक्षा जास्त खाली गेल्यास कोड वाचायला कठीण आणि ठिकाणे शोधणे अवघड होते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. nesting कल्पना", content: "nesting म्हणजे एका नियमाच्या आतच दुसरा नियम लिहिणे — मुल घटकांचे नियम आई-नियमाच्या आत, म्हणजे कोडची रचना HTML सारखी स्पष्ट होते.\nउदा. .card { & h2 { color: #0f766e; } } म्हणजे .card च्या आतले h2 ला तो रंग; बाहेरचे h2 प्रभावित होत नाहीत.\nप्रत्येक वेळी '.card h2' असा पूर्ण selector पुन्हा न लिहावा लागल्याने कोड लहान, स्वच्छ आणि वाचायला सोपा राहतो.\nSass सारख्या preprocessor शिवाय आता नैसर्गिक CSS मध्येच ही सुविधा उपलब्ध आहे — म्हणून आधुनिक शैलीत हा आवडता मार्ग बनला आहे.", code: `.card {
  & h2 {
    color: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "2. & चिन्ह", content: "& हे चिन्ह आई-नियमाला (parent) दर्शवते — त्यामुळे मुलाचा नियम आईशी जोडला जातो; & शिवाय मुल घटक आईच्या बाहेरचा समजला जाईल.\nउदा. .btn { &:hover { color: white; } } मध्ये & म्हणजे .btn; त्यामुळे तयार होणारा नियम .btn:hover — म्हणजे बटणावर hover केल्यावर पांढरा रंग.\n&:focus, &::before, &.active अशा सर्व जोडण्यांमध्ये & च उपयोगी पडतो; तसेच & + & अशी जुळवणी करून शेजारचे घटकही निवडता येतात.\nटीपः & चा अर्थ नेहमी 'आई नियम' एवढाच; & वापरताना कोणता नियम त्याचा जनक आहे हे लक्षात ठेवा म्हणजे चूक होणार नाही.", code: `.btn {
  &:hover {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "3. @scope नियम", content: "@scope एका निवडलेल्या भागापुरते नियम मर्यादित करतो — म्हणजे आतली शैली बाहेर पसरत नाही आणि कुठूनही आत शिरत नाही.\nउदा. @scope (.widget) to (.foot) { .title { color: teal; } } म्हणजे .widget ते .foot पर्यंतच्या भागातील .title ला टील रंग; या सीमेबाहेरचे .title अजिबात बदलत नाहीत.\nएका जुन्या CSS फाइलचा इतर घटकांवरील परिणाम टाळण्यासाठी आणि जागतिक नावांची झगडणी कमी करण्यासाठी हे अत्यंत उपयुक्त.\nकंपोनंट-आधारित शैलीत @scope मुळे प्रत्येक विजेटचं स्वातंत्र्य स्पष्ट होतं, त्यामुळे फाइल वाढत गेली तरी गुंतागुंत वाढत नाही.", code: `@scope (.widget) to (.foot) {
  .title { color: teal; }
}`, codeLanguage: "css" },
      { title: "4. :scope संदर्भ", content: ":scope हे सध्याच्या संदर्भाचा मूळ घटक दर्शवते — म्हणजे @scope च्या आत असल्यास तो त्या भागाचा मूळ, अन्यथा संपूर्ण document root.\nउदा. @scope { :scope { border: 1px solid #ccc; } } मध्ये :scope म्हणजे त्या स्कोपचा मूळ घटक; त्यालाच कडा लागते, इतरांना नाही.\nयामुळे 'माझ्या आत' आणि 'बाहेर' यांतील फरक स्पष्ट होतो — selector नेमका कोणाला लागू होतो हे वाचताच समजतं आणि जटिलता कमी होते.\n:scope ची सवय ठेवल्यास स्कोप-आधारित शैली वाचनीय राहते आणि समान नावाच्या घटकांचा गोंधळ टळतो.", code: `@scope {
  :scope {
    border: 1px solid #ccc;
  }
}`, codeLanguage: "css" },
      { title: "5. nesting खोली", content: "nesting फायद्याचे आहे पण खोली मर्यादित ठेवावी — तीन थरांपेक्षा जास्त खाली गेल्यास कोड वाचायला कठीण आणि ठिकाणे शोधणे अवघड होते.\nउदा. .menu { .item { &.active { font-weight: bold; } } } हे दोन थरांपर्यंत ठीक; आणखी आत गेल्यास selector विचार करायला लागतो.\nस्वतंत्र उप-घटक असतील तर वेगळा class वापरणे अधिक स्पष्ट — खोली वाचवते आणि पुनर्वापर सोपा होतो.\nलहान खोली = वाचनीयता, पुनर्वापर आणि झटपट दुरुस्ती; म्हणून 'कमीत कमी आत' हा नियम पाळा.", code: `.menu {
  .item {
    &.active {
      font-weight: bold;
    }
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "nesting आणि आधुनिक selector नियम अधिकांश नवीन ब्राउझरमध्ये उपलब्ध असले तरी @supports ने तपासणी करणे सुरक्षित.\nउदा. @supports selector(:has(&)) { .card:has(> a) { padding: 1rem; } } — आधार असल्यासच नियम लागू होईल, अन्यथा जुनी पद्धत चालू राहील.\nअशी progressive enhancement पद्धत शिकल्यावर नवीन नियम कधीही मोकळेपणाने वापरता येतात कारण जुन्या ब्राउझरमध्ये फक्त सुधारणा वगळली जाते, मूलभूत रचना बिघडत नाही.\n'आधार आधी, शैली नंतर' हे तत्त्व सर्व आधुनिक CSS मध्ये एकसमान लागू होते — हीच सर्वांत सुरक्षित वाट आहे.", code: `@supports selector(:has(&)) {
  .card:has(> a) { padding: 1rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक नॅव्हिगेशन बार nesting वापरून बनवा — दुव्यांचे रंग आणि त्यांचे hover एकाच नियमात गुंफलेले.\nउदा. .nav { & a { color: #333; &:hover { color: teal; } } } मध्ये सर्व दुवे एका ठिकाणी नियंत्रित होतात; बाहेरचे दुवे अजिबात बदलत नाहीत.\nलागू पडेल तिथे @scope वापरून या नॅव्हिगेशनचे नियम केवळ header पुरते ठेवा; अन्य भागात ते आपोआप पसरत नाहीत.\nखोली दोन-तीन थरांपर्यंत ठेवा आणि @supports selector() ने आधार तपासा; तरच कोड वाचनीय, सुरक्षित आणि भविष्यासाठी तयार राहतो.", code: `.nav {
  & a {
    color: #333;
    &:hover { color: teal; }
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["& काय करतो?", "@scope सीमा?", ":scope म्हणजे?"],
    quiz: [
      { question: "& म्हणजे?", options: ["parent", "child", "रंग"], correct: 0 },
      { question: "@scope?", options: ["सीमा नियम", "गणना", "फॉन्ट"], correct: 0 },
      { question: ":scope?", options: ["स्वतः root", "शेवट", "वेग"], correct: 0 },
      { question: "nesting फायदा?", options: ["वाचनीय", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "नेस्टेड नेव",
      starterCode: `.nav { & a:hover { color: teal; } }`,
      expectedOutput: "Renders nested nav demo",
    },
    interviewQuestions: ["@scope vs legacy?", "nesting खोली किती?"],
    related: ["css-anchor-positioning", "css-performance-advanced"],
    prev: "css-anchor-positioning",
    next: "css-performance-advanced",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-performance-advanced",
    categoryId: "web",
    title: "Performance Advanced",
    marathiTitle: "Performance — वेग वाढ",
    level: "advanced",
    minutes: 25,
    summary: "content-visibility, will-change आणि render संबंध सुधारणा.",
    sections: [
      {
        title: "Performance — वेग वाढ म्हणजे काय?",
        content: "content-visibility, will-change आणि render संबंध सुधारणा.\nब्राउझर पेज दाखवताना प्रत्येक घटकासाठी layout, paint आणि composite या टप्प्यांतून जातो — या प्रक्रियेला render मार्ग म्हणतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Performance — वेग वाढ चे फायदे आणि महत्त्व",
        content: "✓ DevTools मध्ये फीड स्क्रोल करताना फ्रेम वेळ मोजा — content-visibility आधी आणि नंतर तुलना केल्यास फायदा संख्येतच दिसेल.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ पण हे औषध मर्यादितच वापरा — प्रत्येक घटकावर लावल्यास ब्राउझरला सगळे थर लक्षात ठेवावे लागतात आणि स्मृती वाढते.\n✗ हजारो नियम असलेल्या मोठ्या फाइलमध्ये कोणता नियम आधी लागू होतो हे शोधणे कठीण होते — @layer ते काम सोपे करतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. render मार्ग", content: "ब्राउझर पेज दाखवताना प्रत्येक घटकासाठी layout, paint आणि composite या टप्प्यांतून जातो — या प्रक्रियेला render मार्ग म्हणतात.\nलांब पेजवर केवळ वरचा भाग दिसत असतानाही खालचे सर्व घटक आधीच पूर्ण रंगवले जात असतील तर खर्च वाया जातो.\ncontent-visibility: auto लावल्यावर पडद्याबाहेरील भागाची रेखाटन काम ब्राउझर टाळतो — पण घटकची layout गणना मात्र करतो, म्हणून स्क्रोल स्थान योग्य राहते.\nअशा प्रकारे काम कमी होऊन फ्रेम वेगाने तयार होते; वेगवान scroll आणि जड पेजही हलके वाटू लागतात.", code: `.card {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "2. content-visibility", content: "content-visibility: auto हे दृश्य क्षेत्राबाहेरील घटकाचे रेखाटन थांबवते — त्यामुळे सुरुवातीच्या रंगरंगोटीचा भार हजारों घटकांवरून कमी होतो.\nउदा. .feed प्रकारच्या लांब सूचीत प्रत्येक card दृश्य क्षेत्रात येईपर्यंत रंगवले जात नाही; खाली स्क्रोल केल्यावर ते आपोआप तयार होतात.\ncontain-intrinsic-size: auto 600px सोबत दिल्यास प्रत्येक घटकाची अंदाजे उंची ब्राउझरला आधीच माहीत होते, म्हणून scrollbar न अडखळता स्थिर राहतो.\nमात्र काळजी: अचूक intrinsic-size न दिल्यास स्क्रोल उडी मारू शकतो; म्हणून आधी खरी उंची मोजून मग मूल्य ठेवा.", code: `.feed {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "3. contain-intrinsic", content: "content-visibility बरोबर contain-intrinsic-size देताना प्रत्येक घटकाचा प्रारंभीचा (अंदाजे) आकार सांगता येतो — उदा. .long { contain-intrinsic-size: 400px; }.\nहा आकार माहीत असल्याने ब्राउझर रिकाम्या जागेची कल्पना करू शकतो; scrollbar आणि स्क्रोल स्थान अचूक राहते, अचानक झटके बसत नाहीत.\nन देतल्यास पडद्याबाहेरील घटक शून्य उंचीचा गृहीत धरला जातो आणि स्क्रोल केल्यावर सर्व अचानक खाली सरकू शकतो.\n'auto' मूल्य म्हणजे शेवटी आठवलेला आकार — auto 400px प्रकाराने आठवण आणि अंदाज दोन्ही मिळतात, म्हणून हे सर्वांत उपयुक्त मूल्य मानले जाते.", code: `.long {
  contain-intrinsic-size: 400px;
}`, codeLanguage: "css" },
      { title: "4. will-change", content: "will-change हा ब्राउझरला आगाऊ सूचना देतो की हा घटक लवकरच बदलणार — त्यामुळे ब्राउझर त्यासाठी वेगळा थर (layer) तयार करून ठेवतो.\nउदा. .slide ला will-change: transform दिल्यास तो सरकताना transform ची हालचाल GPU वर गुळगुळीत होते; सुरुवातीचा अडखळ थांबतो.\nपण हे औषध मर्यादितच वापरा — प्रत्येक घटकावर लावल्यास ब्राउझरला सगळे थर लक्षात ठेवावे लागतात आणि स्मृती वाढते.\nचांगली सवय: हालचाल संपल्यावर will-change काढून टाका; म्हणजे ब्राउझर तो थर मुक्त करतो आणि कार्यप्रदर्शन स्थिर राहते.", code: `.slide {
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "5. layer ऑर्डर", content: "हजारो नियम असलेल्या मोठ्या फाइलमध्ये कोणता नियम आधी लागू होतो हे शोधणे कठीण होते — @layer ते काम सोपे करतो.\nउदा. @layer reset, base, components, utils; अशी क्रमवारी दिल्यास नियमांचे गट ठरलेल्या क्रमाने लागू होतात; नंतरचे थर आधीच्यांना मागे टाकतात.\nयामुळे 'हा नियम कुठे आला?' असा शोध संपतो — प्रत्येक गट व्यवस्थित वेगळा असल्याने दुरुस्ती नेमक्या ठिकाणी करता येते.\nपरिणामी शैली वाचनीय, संघटित आणि देखभालयोग्य राहते; फाइल कितीही मोठी झाली तरी गुंतागुंत कमी लागते.", code: `@layer reset, base, components, utils;`, codeLanguage: "css" },
      { title: "6. मोजमाप सवय", content: "कार्यप्रदर्शन सुधारण्याआधी मोजमाप करा — DevTools च्या Performance टॅबमध्ये फ्रेम वेळ, layout/paint खर्च पाहा; संख्या न पाहता केलेले 'वेगवान' बदल फसवे ठरतात.\nउदा. 60 fps हे लक्ष्य म्हणजे प्रत्येक फ्रेम 16ms मध्ये तयार व्हायला हवी; त्यापेक्षा जास्त घेणारे काम शोधून कमी करा.\nएक बदल करा, पुन्हा मोजा, दोन्ही निकालांची तुलना करा — ही चक्रीय सवय पुढे येणाऱ्या प्रत्येक कामात विश्वासार्ह निर्णय देते.\nअशा प्रमाणित पद्धतीने काम कराल तर optimize कुठे करायचे हे स्पष्ट होते आणि अनुमानावर आधारित सुधारणा टाळता येतात.", code: `body {
  user-select: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक लांब वृत्त-फीड बनवा ज्यात अनेक लेखांचे विभाग एकामागून एक येतात — प्रत्येक .section ला content-visibility: auto द्या.\ncontain-intrinsic-size: auto 500px देऊन प्रत्येक विभागाची अंदाजे उंची सांगा; म्हणजे स्क्रोलबारची स्थिती स्थिर राहते आणि सुरुवातीचा रंगरंगोटीचा भार कमी होतो.\nDevTools मध्ये फीड स्क्रोल करताना फ्रेम वेळ मोजा — content-visibility आधी आणि नंतर तुलना केल्यास फायदा संख्येतच दिसेल.\n@supports (content-visibility: auto) ने आधार तपासा आणि अंदाजे उंची खऱ्या सामग्रीनुसार ठेवा; तरच स्क्रोल अनुभव गुळगुळीत आणि अचूक राहतो.", code: `.section {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["content-visibility काय?", "will-change कधी?", "intrinsic का?"],
    quiz: [
      { question: "content-visibility?", options: ["पेंट बचत", "रंग", "वेग"], correct: 0 },
      { question: "intrinsic-size?", options: ["आरंभी आकार", "रंग", "फॉन्ट"], correct: 0 },
      { question: "will-change?", options: ["थर", "नाव", "क्रम"], correct: 0 },
      { question: "@layer?", options: ["व्यवस्था", "गडद", "अक्षर"], correct: 0 },
    ],
    challenge: {
      prompt: "वेगवान फीड",
      starterCode: `.section { content-visibility: auto; }`,
      expectedOutput: "Renders fast scrolling feed",
    },
    interviewQuestions: ["will-change अतिवापर?", "intrinsic आवश्यक?"],
    related: ["css-nesting-selectors", "css-marathi-capstone3"],
    prev: "css-nesting-selectors",
    next: "css-marathi-capstone3",
    levelLabel: CSS3_LABEL,
  },
  {
    slug: "css-marathi-capstone3",
    categoryId: "web",
    title: "Marathi Capstone 3",
    marathiTitle: "Marathi capstone — अंतिम",
    level: "advanced",
    minutes: 25,
    summary: "तीन स्तर एकत्र; वृत्तपत्र editorial आणि आधुनिक dashboard.",
    sections: [
      {
        title: "Marathi capstone — अंतिम म्हणजे काय?",
        content: "तीन स्तर एकत्र; वृत्तपत्र editorial आणि आधुनिक dashboard.\nहा अंतिम प्रकल्प Level 3 मधील तीन मुख्य धागे एकत्र करतो — custom properties (थीम), आधुनिक layout (editorial रचना) आणि कार्यप्रदर्शन.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Marathi capstone — अंतिम चे फायदे आणि महत्त्व",
        content: "✓ हे लक्षात ठेवा: वैयक्तिक तंत्रांऐवजी येथे त्यांची सांगड महत्त्वाची — प्रत्येक भाग सुसंगत असेल तरच मराठी संकेतस्थळ सुंदर व वेगवान दिसते.\n✓ प्रवेश्यता हा सजावटीपेक्षा महत्त्वाचा भाग आहे — @media (prefers-reduced-motion: reduce) मध्ये .news { animation: none; } देऊन हालचाल बंद करा, ज्यामुळे हालचाल त्रासदायक वाटणाऱ्यांना आराम मिळतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ हे लक्षात ठेवा: वैयक्तिक तंत्रांऐवजी येथे त्यांची सांगड महत्त्वाची — प्रत्येक भाग सुसंगत असेल तरच मराठी संकेतस्थळ सुंदर व वेगवान दिसते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. उद्दिष्ट तिन्ही", content: "हा अंतिम प्रकल्प Level 3 मधील तीन मुख्य धागे एकत्र करतो — custom properties (थीम), आधुनिक layout (editorial रचना) आणि कार्यप्रदर्शन.\n--paper, --ink, --accent अशी :root वरील मूल्ये संपूर्ण पेजचे रंग-रूप नियंत्रित करतात; एक बदल केल्यावर theme सर्वत्र पलटते.\nवार्तांकनवजा editorial रचना grid मध्ये, तर कामगिरीचा भाग content-visibility व contain ने सांभाळला जातो — तिन्ही एकत्र आल्यावर व्यावसायिक दर्जाचा अनुभव मिळतो.\nहे लक्षात ठेवा: वैयक्तिक तंत्रांऐवजी येथे त्यांची सांगड महत्त्वाची — प्रत्येक भाग सुसंगत असेल तरच मराठी संकेतस्थळ सुंदर व वेगवान दिसते.", code: `:root {
  --paper: #fdf9f3;
  --ink: #1b1b1b;
  --accent: #9c1c2e;
}`, codeLanguage: "css" },
      { title: "2. editorial व्यवस्था", content: "वृत्तपत्रासारखी रचना स्तंभांत मांडणे हा editorial लेआउटचा गाभा — grid-template-columns ने तीन समान स्तंभ ठरवले तर मुख्य बातमी मोठी, उपबातम्या लहान बसतात.\nउदा. .headline-grid मध्ये repeat(3, 1fr) दिल्यास शीर्षकांची तीन स्तंभी जाळी मिळते; .editorial मध्ये column-count: 2 देऊन मजकूर दोन स्तंभांत वाहतो.\ncolumn-gap ने स्तंभांमधील अंतर नियमित ठेवा — वाचकाला डोळ्यांनी एका स्तंभातून दुसऱ्यात जाणे सोपे होते.\nअशी रचना बातमी, लेख, फोटोसह सामग्री नीट वेगळी दाखवते; म्हणून वाचकाला हवी ती माहिती त्वरित सापडते.", code: `.headline-grid {
  grid-template-columns: repeat(3, 1fr);
}
.editorial {
  colum-gap: 2rem;
  column-count: 2;
}`, codeLanguage: "css" },
      { title: "3. थीम वारसा", content: "भाषा आणि दिशा या दोन गोष्टी प्रथम ठरवा — html[lang=\"mr\"] { direction: ltr; } अशी घोषणा केल्यावर संपूर्ण पेजची मजकूर-दिशा स्थिर होते.\nप्रत्येक ठिकाणी left/right ऐवजी logical properties वापरा; उदा. .quote ला border-inline-start: 4px solid var(--accent) दिल्यास कडा भाषेच्या सुरुवातीच्या बाजूला लागते.\n--accent सारख्या custom property मुळे हा रंग एका ठिकाणी बदलला की विभाग, कडा, दुवे सर्वत्र एकसारखे बदलतात.\nअशा रीतीने भाषा-संवेदनशील आणि थीम-आधारित शैली तयार होते; म्हणजेच हे संकेतस्थळ मराठीसोबतच अन्य भाषांनाही नीट सांभाळते.", code: `html[lang="mr"] {
  direction: ltr;
}
.quote {
  border-inline-start: 4px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "4. नेव्हिगेशन", content: "मेनूचे दुवे आणि त्यांचे hover नियम nesting ने एकाच ठिकाणी लिहा — .nav { & a:hover { color: var(--accent); } } मुळे दुव्यांचा रंग थीमशी जोडला जातो.\nटूलटिप पण थीम-अनुरूप ठेवा; position-anchor: --menu आणि inset-area: bottom देऊन ती मेनूच्या खाली नेमकी दिसेल.\nनेव्हिगेशनचे नियम @scope (.nav) मध्ये ठेवल्यास ते इतर भागात पसरत नाहीत — पुनर्वापर करताना फाइल स्वच्छ राहते.\nशेवटी सर्व पडद्यांवर (मोबाइल ते desktop) मेनू उघड-बंद करून तपासा; नेस्टेड शैलीमुळे प्रत्येक जोडणी स्पष्ट व नियंत्रित राहते.", code: `.nav {
  & a:hover { color: var(--accent); }
}
.tip {
  position-anchor: --menu;
  inset-area: bottom;
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "प्रवेश्यता हा सजावटीपेक्षा महत्त्वाचा भाग आहे — @media (prefers-reduced-motion: reduce) मध्ये .news { animation: none; } देऊन हालचाल बंद करा, ज्यामुळे हालचाल त्रासदायक वाटणाऱ्यांना आराम मिळतो.\na:focus-visible { outline: 2px solid var(--accent); } ने कीबोर्ड वापरकर्त्याला कोणता दुवा सध्या निवडलेला आहे हे स्पष्ट दिसते — focus शिवाय नेव्हिगेशन अशक्य.\nमजकूर आणि पार्श्वभूमी यांतील contrast पुरेसा ठेवा; छोटा मजकूर सुवाच्य असावा म्हणून अक्षरांचा आकार व रंग सावकाश निवडा.\nप्रत्येक प्रवेश्यता नियम वास्तविक उपकरणावर तपासा; 'प्रत्येकासाठी सुलभ' हे लक्ष्य ठेवल्यास संकेतस्थळ अधिक चांगले होते.", code: `@media (prefers-reduced-motion: reduce) {
  .news { animation: none; }
}
a:focus-visible {
  outline: 2px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी अंतिम", content: "लांब पानावरील content-visibility: auto हे अंतिम टप्प्यातील कामगिरीचे मुख्य हत्यार — प्रत्येक .news विभाग दृश्य क्षेत्रात येईपर्यंत रंगवला जात नाही.\ncontain-intrinsic-size: auto 600px सोबत दिल्याने प्रत्येक लेखाची अंदाजे उंची माहीत असते, त्यामुळे स्क्रोल न अडखळता स्थिर राहतो.\n@layer reset, base, layout, utils; अशी थरव्यवस्था ठरवल्यास नियमांचा क्रम संपूर्ण प्रोजेक्टभर एकसारखा राहतो — शैली व देखभाल दोन्ही सुधारतात.\nवेग आणि स्थैर्य दोन्ही एकाच वेळी साध्य होतात; म्हणूनच हे संयोजन व्यावसायिक मराठी संकेतस्थळासाठी आदर्श ठरते.", code: `@layer reset, base, layout, utils;
.news {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता मराठी editorial portal पूर्ण करा — theme, editorial व्यवस्था आणि वेग या तिन्ही गोष्टी एका प्रकल्पात एकत्र.\n:root मध्ये --paper आणि --accent ठेवून सर्व रंग त्या variables वर आधारित करा; .news ला grid-template-columns: repeat(3, 1fr) देऊन तीन स्तंभी बातमी रचना बनवा.\nप्रत्येक .news विभागाला content-visibility: auto व contain-intrinsic-size: auto 600px द्या म्हणजे लांब पान वेगाने स्क्रोल होईल.\nमोबाइल, टॅब आणि desktop वर — विशेषतः भाषा, contrast, focus आणि हालचाल यांची तपासणी करा; या सर्व एकत्रित कामाने Level 3 चा अंतिम अनुभव प्रत्यक्षात उतरतो.", code: `:root { --paper: #fdf9f3; --accent: #9c1c2e; }
.news {
  content-visibility: auto;
  grid-template-columns: repeat(3, 1fr);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["तीन स्तर काय?", "reduced motion?", "कामगिरी कशी?"],
    quiz: [
      { question: "logical का?", options: ["दिशा सुसंगत", "रंग", "वेग"], correct: 0 },
      { question: "anchor कुठे?", options: ["टूलटिप", "फॉन्ट", "margin"], correct: 0 },
      { question: "intrinsic?", options: ["स्क्रोल स्थिर", "रंग", "फॉन्ट"], correct: 0 },
      { question: "@layer?", options: ["व्यवस्था", "अंक", "आवाज"], correct: 0 },
    ],
    challenge: {
      prompt: "editorial पोर्टल",
      starterCode: `:root { --accent: #9c1c2e; }`,
      expectedOutput: "Renders polished Marathi editorial portal",
    },
    interviewQuestions: ["Level 3 नवीन काय?", "पुढे कुठे जायचे?"],
    related: ["css-performance-advanced", "css-custom-properties-deep"],
    prev: "css-performance-advanced",
    next: "css-custom-properties-deep",
    levelLabel: CSS3_LABEL,
  },];
