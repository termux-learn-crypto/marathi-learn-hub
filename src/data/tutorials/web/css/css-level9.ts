import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 9 — Modern Patterns ===
export const CSS9_LABEL = "CSS · Level 9 — Modern Patterns";

export const cssLevel9: Tutorial[] = [
  {
    slug: "css-aspect-ratio-2",
    categoryId: "web",
    title: "Aspect Ratio",
    marathiTitle: "aspect-ratio — प्रमाण नियम",
    level: "advanced",
    minutes: 38,
    summary: "width आणि height प्रमाण संतुलन.",
    sections: [
      { title: "1. प्रमाण कल्पना", content: "aspect-ratio हा नवीन गुणधर्म — रुंदी-उंचीचे प्रमाण एका ओळीत निश्चित करतो. 16 / 9 म्हणजे 16 भाग रुंद आणि 9 भाग उंच.\n.media ला aspect-ratio: 16 / 9 दिल्यावर एकाच जागी प्रमाण ठरते; आकार कितीही असला तरी प्रमाण स्थिर.\nरुंदी किंवा उंची एक दिली की दुसरी आपोआप बसते. चित्र, व्हिडिओ, बॉक्स या सर्वांसाठी ही सोय आधुनिक आहे.", code: `.media {
  aspect-ratio: 16 / 9;
}`, codeLanguage: "css" },
      { title: "2. चौकोन थर", content: "चौकोन थर म्हणजे 1 / 1 प्रमाण — रुंदी आणि उंची समान. .thumb ला aspect-ratio: 1 / 1 आणि width: 200px.\nरुंदी ठरवली की उंची आपोआप 200px होते; square नेहमी square राहतो. picture आणि avatar साठी उत्तम.\nआधीच्या रचनेत padding किंवा JavaScript लागत असते; आता एकच नियम पुरेसा. कोड कमी, व्यवस्था नेमकी.", code: `.thumb {
  aspect-ratio: 1 / 1;
  width: 200px;
}`, codeLanguage: "css" },
      { title: "3. व्हिडिओ व्यवस्था", content: "व्हिडिओ रचनेत iframe भरण्यासाठी aspect-ratio सर्वोत्तम. .video ला aspect-ratio: 16 / 9 द्या.\nआतला iframe width: 100% आणि height: 100% घेऊन संपूर्ण box भरतो; प्रमाण पाळून रचना सुरू होते.\nobject-fit ने चित्राचा केंद्र भाग संरक्षित होतो. व्हिडिओ, नकाशा किंवा embed असो — हीच रीत रचना स्थिर ठेवते.", code: `.video {
  aspect-ratio: 16 / 9;
}
.video iframe {
  width: 100%;
  height: 100%;
}`, codeLanguage: "css" },
      { title: "4. auto वापर", content: "auto हे मूळ मूल्य — aspect-ratio बंद. .auto ला aspect-ratio: auto म्हणजे घटकाचा आकार सामग्रीवर अवलंबून.\nकधी-कधी flex किंवा grid मध्ये आकार विस्कळीत होऊ नये म्हणून auto हवे असते; भाग सामग्रीशी ताल मिळवतो.\nauto म्हणजे प्रमाणाचा दाब नाही. हे समजल्यावर कधी प्रमाण द्यायचे आणि कधी नाही हे नेमके ठरते.", code: `.auto {
  aspect-ratio: auto;
}`, codeLanguage: "css" },
      { title: "5. लवचिक थर", content: "लहान स्क्रीनवर प्रमाण बदलवतात. @media (width < 640px) मध्ये .thumb ला aspect-ratio: 1 / 1 आणि width: 100%.\nथंब इतका मोठा होतो की मोबाइलवर स्पष्ट दिसतो; रुंदी संपूर्ण पडद्याची, उंची आपोआप समान.\nmargin शून्य करणे आणि स्तंभ एक — स्वच्छ वाचणी. प्रत्येक स्क्रीनसाठी प्रमाणाचे नियम वेगळे हवे.", code: `@media (width < 640px) {
  .thumb {
    aspect-ratio: 1 / 1;
    width: 100%;
  }
}`, codeLanguage: "css" },
      { title: "6. पोस्टर रचना", content: "पोस्टर रचना उभी — 3 / 4 प्रमाण. .poster ला aspect-ratio: 3 / 4 आणि object-fit: cover.\nचित्र उंच आयतामध्ये बसते; object-fit ने कापून तोल सांभाळला जातो. पुस्तकाचे आच्छादन, मेडिया कार्ड.\nही रचना आकर्षक आणि नियम सुबक. प्रमाण विचारात घेऊन चित्र व्यवस्थित बसते.", code: `.poster {
  aspect-ratio: 3 / 4;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक flag box बनवूया. .flag-box ला aspect-ratio: 16 / 9 आणि border: 1px solid #cbd5e1 द्या.\nरुंदी कोणतीही ठेवा — उंची प्रमाणानुसार बसेल. गरज असल्यास चौकोन 1/1 मध्ये बदला.\nएका नियमाने प्रमाण नेहमी स्थिर राहते. खोक्या, चित्रे, व्हिडिओ यासाठी हा उपयोगी पाया.", code: `.flag-box {
  aspect-ratio: 16 / 9;
  border: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["aspect प्रमाण काय?", "iframe कसे भरावे?", "auto कधी वापराल?", "poster प्रमाण?"],
    quiz: [
      { question: "aspect-ratio?", options: ["प्रमाण", "रंग", "मार्ग"], correct: 0 },
      { question: "16/9 म्हणजे?", options: ["रुंद प्रमाण", "उंच प्रमाण", "कोणतीही"], correct: 0 },
      { question: "object-fit?", options: ["झाकणे", "फिरवणे", "निखाली"], correct: 0 },
      { question: "1/1 थर?", options: ["चौकोन", "अळवा", "धागा"], correct: 0 },
    ],
    challenge: {
      prompt: "video box 16/9 ठेवा.",
      starterCode: `.video {
  aspect-ratio: 16 / 9;
}`,
      expectedOutput: "Renders a 16:9 framed box in Marathi page",
    },
    interviewQuestions: ["aspect प्रमाण कशासाठी?", "auto vs निश्चित फरक?"],
    related: ["css-clamp-fluid", "css-scroll-snap", "css-accent-color"],
    prev: "css-marathi-capstone8",
    next: "css-clamp-fluid",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-clamp-fluid",
    categoryId: "web",
    title: "Clamp & Fluid",
    marathiTitle: "clamp — लवचिक आकार",
    level: "advanced",
    minutes: 38,
    summary: "fluid टायपोग्राफी आणि मर्यादित आकार.",
    sections: [
      { title: "1. clamp कल्पना", content: "clamp तीन मूल्ये घेते — minimum, इच्छित आणि maximum. html ला font-size: clamp(16px, 2vw, 20px).\nस्क्रीन लहान असेल तर 16px, मोठी असेल तर 20px; मधे 2vw नुसार. आकार गुळगुळीत सरकतो, अचानक नाही.\nरुंदी वाढली किंवा कमी झाली तरी आकार मर्यादेत राहतो. संपूर्ण पेजच्या आधार आकारासाठी हा योग्य.", code: `html {
  font-size: clamp(16px, 2vw, 20px);
}`, codeLanguage: "css" },
      { title: "2. मथळा थर", content: "मथळे fluid करण्यासाठी clamp आदर्श — h1 ला font-size: clamp(1.5rem, 4vw, 3rem).\nमोठ्या पडद्यावर 4vw वाढतो, पण 3rem ची कमाल; छोट्या पडद्यावर 1.5rem खाली जात नाही. आकार नेहमी समजूत.\nवेगवेगळ्या स्क्रीनवर शीर्षक व्यवस्थित आणि आकर्षक राहते. clamp ने breakpoints ची गरज कमी होते.", code: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`, codeLanguage: "css" },
      { title: "3. min max", content: "min आणि max हे रुंदी तोलण्यासाठी — .title ला width: min(100%, 720px) द्या.\nपेज जागा कमी असल्यास 100%, मोठी असल्यास 720px कमाल; ओळी खूप रुंद होत नाहीत.\nदृश्याच्या या साध्या नियमाने मजकूर वाचनीय राहतो. min/max ही clamp ची जोडणारी श्रेणी समजून घ्या.", code: `.title {
  width: min(100%, 720px);
}`, codeLanguage: "css" },
      { title: "4. fluid गणना", content: "fluid गणनांमध्ये एककांचा मेळ — font-size: clamp(15px, 1vw + 1rem, 18px).\n1vw + 1rem म्हणजे दृश्य रुंदीचा एक भाग आणि मूळ आकार; दोन्ही एकत्र आल्यावर आकार हळूहळू वाढतो.\nदृश्य रुंदी व मूळ आकार यांचे संतुलन. परिच्छेद आणि मजकूर थरांसाठी ही रीत वाचन आराम वाढवते.", code: `.copy {
  font-size: clamp(15px, 1vw + 1rem, 18px);
}`, codeLanguage: "css" },
      { title: "5. जागा नियम", content: "जागा देखील fluid करता येते — .card ला padding: clamp(12px, 3vw, 24px) द्या.\nलहान स्क्रीनवर 12px अंतर, मोठ्या स्क्रीनवर 24px; मधे 3vw नुसार. प्रमाणानुसार अंतर वाढते.\nमोठ्या पडद्यावर जागा आरामदायी आणि लहानावर व्यवस्थित. रंग आणि रचना सुसंगत राहते.", code: `.card {
  padding: clamp(12px, 3vw, 24px);
}`, codeLanguage: "css" },
      { title: "6. ग्रिड हाताळणी", content: "fluid ग्रिड म्हणजे auto-fit आणि minmax. .cards ला grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)).\nकमीत कमी 200px रुंदी; स्तंभ स्वतः जुळवले जातात. स्क्रीन मोठी झाल्यावर जास्त स्तंभ, लहान झाल्यावर कमी.\nहा पॅटर्न cards मध्ये सर्वाधिक वापरला जातो. clamp सोबत हा संपूर्ण fluid व्यवस्थेचा आधार.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "fluid आकार बनवा. .fluid ला font-size: clamp(14px, 2vw, 18px) द्या — मजकूर प्रत्येक स्क्रीनवर समजूत.\nशीर्षकासाठी समान clamp पैटर्न; ग्रिडसाठी auto-fit सह minmax वापरा.\nएवढ्या नियमांमध्ये भाग आकार रुंदीला आपोआप जुळतात. वाचन आराम आणि रचना तोल राखली जाते.", code: `.fluid {
  font-size: clamp(14px, 2vw, 18px);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["clamp कोणते तीन?", "min काय करतो?", "auto-fit कधी?", "fluid का वापरतो?"],
    quiz: [
      { question: "clamp काय?", options: ["मर्यादा यंत्र", "रंग यंत्र", "दिनांक"], correct: 0 },
      { question: "min म्हणजे?", options: ["लहान मर्यादा", "मोठी मर्यादा", "चौथी संख्या"], correct: 0 },
      { question: "vw एकक?", options: ["दृश्य रुंदी", "उंची धड", "मजकूर"], correct: 0 },
      { question: "max साठी?", options: ["उच्च आकार", "निम्न आकार", "सगळे समान"], correct: 0 },
    ],
    challenge: {
      prompt: "h1 fluid करा.",
      starterCode: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
      expectedOutput: "Heading scales fluidly across viewport in Marathi page",
    },
    interviewQuestions: ["fluid टायपोग्राफी कशी?", "minmax ग्रिड कसे?"],
    related: ["css-aspect-ratio", "css-scroll-snap", "css-color-mix"],
    prev: "css-aspect-ratio",
    next: "css-scroll-snap",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-scroll-snap-2",
    categoryId: "web",
    title: "Scroll Snap",
    marathiTitle: "scroll-snap — थांबण्याची सोय",
    level: "advanced",
    minutes: 38,
    summary: "स्क्रोल वेळी नीट थांबणे.",
    sections: [
      { title: "1. snap कल्पना", content: "scroll-snap म्हणजे स्क्रोल करताना नेमके थांबणे. .snap ला scroll-snap-type: x mandatory द्या.\nआडवा (x) स्क्रोल मध्ये प्रत्येक भाग ठिकठिकाणी; mandatory म्हणजे थांबणे सक्ती. संग्रहात स्लाईड व्यवस्थित थांबतो.\nजोरदार स्क्रोलनंतरही रचना व्यवस्थित दिसते. gallery आणि carousel साठी हा पाया लोकप्रिय.", code: `.snap {
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "2. item नियम", content: "प्रत्येक भागाचे स्थान snap-align ठरवते. .slide ला scroll-snap-align: center — भाग मध्यभागी.\nstart किंवा end ने किनारीला; center सर्वांत व्यवस्थित. स्क्रोलनंतर भाग नेमका बसतो.\nहे नियम container ला नाही, तर बाहेरच्या element ला देतात — भाग आणि दिशा यांची जोडी महत्त्वाची.", code: `.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "3. proximity थर", content: "mandatory कडक असते — प्रत्येक स्क्रोलला थांबवते. .snap ला scroll-snap-type: x proximity द्या; मृदू नियम.\nproximity मध्ये भागाजवळ असेल तरच थांबते; वापरकर्त्याला मुक्त स्क्रोल मिळतो. अधिक आरामदायी.\nमोठ्या यादीत proximity अधिक चांगले. दोन्ही नियम कधी वापरायचे हे उपयोग ठरवतो.", code: `.snap {
  scroll-snap-type: x proximity;
}`, codeLanguage: "css" },
      { title: "4. margin द्या", content: "scroll-margin मुळे भाग किनारीला चिकटत नाहीत. .slide ला scroll-margin: 12px देऊन सभोवती जागा.\nsticky हेडर असतील तर ही सोय अधिक उपयोगी — भाग व्यवस्थित दिसतो. जागा संतुलित असते.\nचित्र किंवा कार्ड मध्ये सर्व स्थानांमध्ये अंतर दृश्य. हे लहान नियम महत्त्वाचे.", code: `.slide {
  scroll-margin: 12px;
}`, codeLanguage: "css" },
      { title: "5. उभा स्क्रोल", content: "उभे स्क्रोलसाठी y अक्ष — .columns ला scroll-snap-type: y mandatory.\nप्रत्येक स्तंभ वरून खाली ठिकठिकाणी बसतो; अनेक भागांच्या यादीत नियंत्रण चांगले.\nx आणि y दोन्ही सोपे. दृश्य किंवा gallery नुसार अक्ष निवडा; नियमाचे मुख्य काम थांबणे — दिशा ठरवा.", code: `.columns {
  scroll-snap-type: y mandatory;
}`, codeLanguage: "css" },
      { title: "6. सुरक्षा नियम", content: "गती कमी करणाऱ्या वापरकर्त्यांसाठी सुरक्षा नियम — prefers-reduced-motion: reduce मध्ये scroll-behavior: auto.\nस्क्रोल स्थिर आणि आरामदायी; जोरदार आकर्षण नाही. प्रवेश्यता आदराचा हा भाग आवश्यक.\nसामग्री तीच — फक्त गती कमी. असे नियम लिहिल्यास प्रत्येकाला अनुभव सुखद होतो.", code: `@media (prefers-reduced-motion: reduce) {
  .snap {
    scroll-behavior: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता gallery बनवूया. .gallery ला display: flex, overflow-x: auto आणि scroll-snap-type: x mandatory द्या.\nप्रत्येक item ला scroll-snap-align: center आणि scroll-margin देऊन जागा राखा.\nस्क्रोलला snapping मिळतो; संवेदनशीलांसाठी reduced-motion नियम जोडा. संग्रह सुबक आणि आनंददायी बनतो.", code: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["snap-type अक्ष?", "align कुठे लिहाल?", "proximity काय?", "reduced कधी?"],
    quiz: [
      { question: "scroll-snap काय?", options: ["थांबणे", "उड्डाण", "रंग"], correct: 0 },
      { question: "snap-align?", options: ["स्थान", "नाम", "ध्वनी"], correct: 0 },
      { question: "proximity?", options: ["सैल थांबणे", "कठोर रंग", "गोल भाग"], correct: 0 },
      { question: "x अक्ष?", options: ["क्षैतिज", "उभा", "ओळ"], correct: 0 },
    ],
    challenge: {
      prompt: "gallery snap करा.",
      starterCode: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`,
      expectedOutput: "Gallery scrolls and snap-stops neatly on Marathi page",
    },
    interviewQuestions: ["snap कसे लिहावे?", "reduced-motion का?"],
    related: ["css-clamp-fluid", "css-accent-color", "css-aspect-ratio"],
    prev: "css-clamp-fluid",
    next: "css-accent-color",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-accent-color-2",
    categoryId: "web",
    title: "Accent Color",
    marathiTitle: "accent-color — चेकबॉक्स रंग",
    level: "advanced",
    minutes: 38,
    summary: "मूळ input कंट्रोल्सना रंग देणे.",
    sections: [
      { title: "1. आधार रंग", content: "मूळ input कंट्रोल्सना रंग देण्यासाठी accent-color. input ला accent-color: #4f46e5 द्या.\ncheckbox, radio, range असे मूळ भाग रंगतात; कोणतीही JavaScript लागत नाही. ब्राउझर स्वतः रंग निवडतो.\nएक ओळ — सर्व सर्वत्र. form च्या एकसूत्री वातावरणासाठी ही सोय आधुनिक आहे.", code: `input {
  accent-color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "2. toggle साथ", content: "checkbox किंवा radio ला वेगळा रंग द्यायचा असेल — input[type=\"checkbox\"] ला accent-color: #16a34a.\nप्रकारानुसार रंग नेमका; स्थिती स्पष्ट दिसते. सुरुवातीला मूळ रचना तशीच राहते.\nहिरवा checkbox परिचित — वाचकांना स्थिती समजते. मूळ भाग रंगवण्यासाठी ही सोपी रीत.", code: `input[type="checkbox"] {
  accent-color: #16a34a;
}`, codeLanguage: "css" },
      { title: "3. range थर", content: "slider रंगवण्यासाठी input[type=\"range\"] ला accent-color: #ea580c द्या.\nrange चे भरलेले भाग रंगतात; thumb सुद्धा सोबत. रंगाने प्रगती स्पष्ट होते; नियम एक.\nस्लाइडर वेगवेगळ्या ब्राउझरमध्ये वेगळा दिसतो, पण रंग जुळतो. form च्या आधारासाठी ही सोय.", code: `input[type="range"] {
  accent-color: #ea580c;
}`, codeLanguage: "css" },
      { title: "4. फॉर्म शैली", content: ".form सारख्या गटाला accent-color दिल्यास आतले सर्व input रंगतात — एकाच जागी नियंत्रण.\nरंग नेमका ठरवा; checkbox, radio, range सर्व समान. पेजच्या थीमशी सुसंगत रंग निवडा.\nगट स्थिती व्यवस्थित दिसते; रचना सुबक. फॉर्मच्या एका दृश्यासाठी हे पाऊल महत्त्वाचे.", code: `.form {
  accent-color: #7c3aed;
}`, codeLanguage: "css" },
      { title: "5. मानक क्रम", content: ":root मध्ये accent-color दिल्यास संपूर्ण पेजवर एकच रंग — :root { accent-color: #2563eb }.\nवारसा च्या नियमाने सर्व घटकांना मिळतो; प्रत्येक input ला नियम नको. रंगाचा दगदग होत नाही.\nथीमचा भाग म्हणून टोकनमध्ये ठेवा. एक ठिकाण बदलवला की पेजचे forms सजीव बनतात.", code: `:root {
  accent-color: #2563eb;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "@supports (accent-color: black) ने आधार तपासतो — जुन्या ब्राउझरमध्ये नसेल तर.\nआत input ला accent-color: #0f766e देतो; नसेल तर मूळ रचना तशीच राहते. रचना कधीही मोडत नाही.\nप्रगतीशील वाढीचा हा नमुना. नवीन गुण उपलब्ध असल्यावरच तो वापरला जातो.", code: `@supports (accent-color: black) {
  input {
    accent-color: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता राज्य चे बॉक्स बनवूया. .check ला accent-color: #b91c1c द्या — गडद लाल चेकबॉक्स.\nform मध्ये एकाच रंगाचे नियंत्रण; :root च्या टोकनला जोडा आणि @supports तपासा.\nकमीत कमी कोड, अधिक एकसंध दृश्य. मूळ input स्वतः चांगले दिसतात आणि थीमशी जुळतात.", code: `.check {
  accent-color: #b91c1c;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["accent-color कुठे?", "range कसा?", ":root का?", "@supports कधी?"],
    quiz: [
      { question: "accent-color काय?", options: ["कंट्रोल रंग", "मजकूर रंग", "सीमा साइज"], correct: 0 },
      { question: "कोणते input?", options: ["checkbox", "image", "link"], correct: 0 },
      { question: ":root मध्ये?", options: ["सर्वत्र", "एका जागी", "कोठेही नाही"], correct: 0 },
      { question: "slider रंग?", options: ["range", "video", "audio"], correct: 0 },
    ],
    challenge: {
      prompt: "checkbox हिरवा करा.",
      starterCode: `input[type="checkbox"] {
  accent-color: #16a34a;
}`,
      expectedOutput: "Native checkbox renders green accent on Marathi page",
    },
    interviewQuestions: ["accent-color बद्दल?", "@supports का वापराल?"],
    related: ["css-scroll-snap", "css-color-mix", "css-focus-visible"],
    prev: "css-scroll-snap",
    next: "css-color-mix",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-color-mix-3",
    categoryId: "web",
    title: "Color Mix",
    marathiTitle: "color-mix — रंग संमिश्रण",
    level: "advanced",
    minutes: 38,
    summary: "दोन रंगांना मिसळून नवा रंग.",
    sections: [
      { title: "1. मिश्रण थर", content: "color-mix दोन रंगांनी नवा रंग तयार करते — background: color-mix(in srgb, #f97316 40%, #3b82f6).\nकेशरी 40% आणि निळा उर्वरित; मिळून ताजा रंग. srgb ही मोजणीची पद्धत — रंग मिसळण्याचे ठिकाण.\nरंगांच्या श्रेणीत ही रीत खूप उपयोगी. दोन मूळ रंगांमधून अनेक छटा मिळतात.", code: `.mix {
  background: color-mix(in srgb, #f97316 40%, #3b82f6);
}`, codeLanguage: "css" },
      { title: "2. प्रमाण नियम", content: "प्रमाण नेमके — टक्केवारी. .body ला border-color: color-mix(in srgb, red 70%, blue) द्या.\nलाल 70% आणि निळा उर्वरित; पहिला भाग ठळक. दुसऱ्या रंगाला टक्के नसल्यास त्याने बाकीचे घेतो.\nसंतुलन नियंत्रित होते. एकाच ठिकाणी रंगांचे कुटुंब मांडले जाते.", code: `.mix {
  border-color: color-mix(in srgb, red 70%, blue);
}`, codeLanguage: "css" },
      { title: "3. हलका थर", content: "हलका रंग (tint) — white सोबत मिसळा. .tint ला background: color-mix(in hsl, white 80%, #dc2626).\nपांढरा 80%, लाल उर्वरित — मऊ गुलाबी. hsl पद्धत रंग आणि प्रकाश नियंत्रणात अचूक.\nपार्श्वभूमीला मऊ रंग देते. जास्त ताणाविना सहज हलक्या छटा बनतात.", code: `.tint {
  background: color-mix(in hsl, white 80%, #dc2626);
}`, codeLanguage: "css" },
      { title: "4. गडद थर", content: "गडद रंग (shade) — black सोबत मिसळा. .shade ला background: color-mix(in oklab, black 25%, #2563eb).\nकाळा 25%, उर्वरित निळा — गडद निळा. oklab ही नवीन अचूक मोजणी; रंगातील एकसमानता चांगली.\nमजकुरासाठी contrast वाढतो. रंग खोल आणि व्यवस्थित राहतो; वाचनीयता सुधारते.", code: `.shade {
  background: color-mix(in oklab, black 25%, #2563eb);
}`, codeLanguage: "css" },
      { title: "5. hover गती", content: "hover वर रंग न बदलता हलका — .btn:hover ला color-mix(in srgb, #4f46e5, white 15%).\nमूळ रंगाचीच छटा; transition गुळगुळीत. आकर्षण वाढते, कुरूप बदल नाही.\nएका रंगाच्या दोन छटा buttons मध्ये नेहमी उपयोगी. हा नियम मऊ आणि स्थिर असतो.", code: `.btn:hover {
  background: color-mix(in srgb, #4f46e5, white 15%);
}`, codeLanguage: "css" },
      { title: "6. मजकूर रंग", content: "मजकुराचा रंग हलका करण्यासाठी color-mix. .tag ला color: color-mix(in srgb, #111827, white 10%).\nकाळा 90%, पांढरा 10% — मऊ राखाडी; विरोध कमी, वाचन आराम. tag आणि label साठी उत्तम.\nरचना सजीव आणि सुबक. ही रीत theme colors मध्ये सहज बसते.", code: `.tag {
  color: color-mix(in srgb, #111827, white 10%);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता chip बनवूया. .chip ला background: color-mix(in srgb, #059669 70%, white) द्या.\nहिरवी छटा फिकी — मऊ chip; brand रंग वापरून tint तयार होते.\nप्रत्येक ठिकाणी रंग निवडण्याऐवजी मिसळा. संपूर्ण पॅलेट एका निर्णयापासून तयार होते.", code: `.chip {
  background: color-mix(in srgb, #059669 70%, white);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["color-mix काय?", "टक्के कसे?", "tint कसा?", "hsl कधी?"],
    quiz: [
      { question: "color-mix काय?", options: ["रंग मिसळते", "रंग काढते", "नाव देते"], correct: 0 },
      { question: "in srgb?", options: ["मोजणी जागा", "रंग धागा", "ओळ क्रम"], correct: 0 },
      { question: "tint म्हणजे?", options: ["हलका रंग", "गडद रंग", "मोठा रंग"], correct: 0 },
      { question: "oklab काय?", options: ["नवी मोजणी", "जुनी धार", "साधा थर"], correct: 0 },
    ],
    challenge: {
      prompt: "chip टिंट करा.",
      starterCode: `.chip {
  background: color-mix(in srgb, #059669 70%, white);
}`,
      expectedOutput: "Renders a mint-tinted chip on Marathi page",
    },
    interviewQuestions: ["color-mix फायदे?", "टक्केवारी नियम?"],
    related: ["css-accent-color", "css-clamp-fluid", "css-dark-mode"],
    prev: "css-accent-color",
    next: "css-text-wrap",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-text-wrap-3",
    categoryId: "web",
    title: "Text Wrap",
    marathiTitle: "text-wrap — ओळ व्यवस्था",
    level: "advanced",
    minutes: 38,
    summary: "शीर्षक आणि परिच्छेद ओळ सुंदर करणे.",
    sections: [
      { title: "1. wrap कल्पना", content: "text-wrap हा गुण मजकुराच्या ओळी कशा संपतात हे ठरवतो. h2 ला text-wrap: balance द्या.\nशीर्षकाच्या ओळी समान लांबीच्या होतात — शेवटची ओळ लहान-मोठी न राहता संतुलित दिसते.\nवाचन आराम वाढतो आणि मथळा सुबक बनतो. जुन्या ब्राउझरमध्ये नसेल तर नेहमीची ओळ विभागणी चालते.", code: `h2 {
  text-wrap: balance;
}`, codeLanguage: "css" },
      { title: "2. शीर्षक थर", content: "शीर्षकासाठी balance सोबत रुंदी मर्यादा. .title ला text-wrap: balance आणि max-width: 40ch द्या.\nch हे अक्षरांवर आधारित एकक — मजकूर 40 अक्षरांच्या आत राहतो. ओळी व्यवस्थित आणि वाचनीय.\nमुख्य मथळे आणि उपशीर्षकांसाठी ही रीत आदर्श; दृश्य स्थिर राहते.", code: `.title {
  text-wrap: balance;
  max-width: 40ch;
}`, codeLanguage: "css" },
      { title: "3. परिच्छेद नियम", content: "परिच्छेदांसाठी text-wrap: pretty — शेवटची ओळ संतुलित करते. p ला हा नियम द्या.\nएकटी रिकामी ओळ राहत नाही; मजकूर संपूर्ण सुबक दिसतो. लांब मजकुरात वाचन आराम वाढतो.\nनवीन समर्थन असल्याने जुन्या ब्राउझरमध्ये नेहमीची विभागणी चालते.", code: `p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
      { title: "4. लांब ओळ", content: "लांब मजकूर एकाच ओळीत ठेवायचा असेल तर nowrap. .long ला white-space: nowrap, overflow: hidden आणि text-overflow: ellipsis द्या.\nमजकूर एक ओळीत राहतो आणि शेवटी ... सूचित होतो. filename किंवा शीर्षक जागेत लपवता येते.\nतोल सांभाळला जातो — मजकूर खाली न पडता नेमका राहतो.", code: `.long {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`, codeLanguage: "css" },
      { title: "5. मर्यादा", content: "परिच्छेदाची रुंदी ch मर्यादेने तोलता येते. p ला text-wrap: pretty आणि max-width: 60ch द्या.\n60 अक्षरे ही वाचनासाठी आरामदायी रुंदी — ओळ खूप रुंद होत नाही. वाचकाला सहज मिळेल.\nरुंदी आणि ओळ विभागणी दोन्ही मिळून वाचन सुखद बनते.", code: `p {
  text-wrap: pretty;
  max-width: 60ch;
}`, codeLanguage: "css" },
      { title: "6. एकत्र धागा", content: "महत्त्वाचा शब्द किंवा संख्या उडू नये म्हणून span ला white-space: nowrap द्या.\nशब्द एकत्र राहतात — उदा. संख्या आणि एकक अर्धे तुटत नाही. ओळीच्या शेवटी शब्दखंड नको.\nअशा छोट्या नियमांनी मजकूर नेहमी व्यवस्थित. सांध्याच्या जागी नियंत्रण महत्त्वाचे.", code: `span {
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता मुख्य मथळा सुबक करा. h1 ला text-wrap: balance द्या — ओळी समान होतात.\nउपशीर्षकांना max-width: 40ch आणि परिच्छेदांना pretty जोडा; महत्त्वाचे शब्द nowrap ने जपा.\nकमीत कमी कोडमध्ये मजकूर व्यवस्थित. वाचन आराम हे या धड्याचे मुख्य फळ.", code: `h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["balance कुठे?", "pretty काय?", "nowrap कधी?", "ch एकक काय?"],
    quiz: [
      { question: "balance कशासाठी?", options: ["शीर्षक", "रंग", "image"], correct: 0 },
      { question: "pretty काय?", options: ["मजकूर तोल", "सीमा वाढ", "धार काळ"], correct: 0 },
      { question: "ellipsis?", options: ["थांबवणे", "फिरवणे", "रंगवणे"], correct: 0 },
      { question: "40ch म्हणजे?", options: ["रुंदी", "उंची", "धार"], correct: 0 },
    ],
    challenge: {
      prompt: "शीर्षक balance करा.",
      starterCode: `h1 {
  text-wrap: balance;
}`,
      expectedOutput: "Marathi heading lines balance evenly",
    },
    interviewQuestions: ["balance मर्यादा?", "pretty लाभ?"],
    related: ["css-color-mix", "css-writing-modes", "css-print-styles"],
    prev: "css-color-mix",
    next: "css-popover-tips",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-popover-tips",
    categoryId: "web",
    title: "Popover Tips",
    marathiTitle: "popover — तात्काळ टीप",
    level: "advanced",
    minutes: 38,
    summary: "मूळ popover आणि ::backdrop शैली.",
    sections: [
      { title: "1. popover कल्पना", content: "popover हा आधुनिक मूळ घटक — टीप, मेनू किंवा सूचना त्वरित उघडतो. शैली CSS ने दिली जाते.\n[popover] ला inset: 50% auto auto 50% आणि translate: -50% -50% — मध्यभागी बसते. JavaScript ची गरज कमी.\nरुंदी, रंग, कोपरे सर्व नियंत्रणात. हा घटक dialog शी संबंधित, पण दृश्य हलके.", code: `[popover] {
  inset: 50% auto auto 50%;
  translate: -50% -50%;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "popover च्या मागे अंधार पडदा ::backdrop. [popover]::backdrop ला background: rgb(0 0 0 / 40%) द्या.\nटीपेच्या मागे सौम्य अंधार — लक्ष टीपेवर. backdrop चे नियंत्रण HTML न करता CSS करतो.\nस्पष्ट दृश्य आणि एकाग्रता. मागील सामग्री मंद दिसते पण दिसतच असते.", code: `[popover]::backdrop {
  background: rgb(0 0 0 / 40%);
}`, codeLanguage: "css" },
      { title: "3. कार्ड रचना", content: "टीपेचे कार्ड रूप — [popover] ला width: 18rem, border-radius: 12px आणि padding: 1rem द्या.\nरुंदी मर्यादित, कोपरे गोल — स्वच्छ कार्ड. मजकुराला श्वास मिळतो; रचना सुबक दिसते.\nहे गुण एकत्र येतात तेव्हा popover वास्तविक UI बनतो. मजकूर वाचनीय आणि रचना आकर्षक.", code: `[popover] {
  width: 18rem;
  border-radius: 12px;
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "4. मऊ सावली", content: "टीपेची खोली दाखवण्यासाठी box-shadow — [popover] ला box-shadow: 0 8px 24px rgb(0 0 0 / 20%).\nसावली हलकी पण स्पष्ट — थर वेगळा दिसतो. मागील सामग्रीच्या वर भाग उभा राहतो.\nखूप जोरदार सावली नको; मऊ संतुलन. दृश्य व्यवस्थित आणि UI व्यावसायिक बनते.", code: `[popover] {
  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);
}`, codeLanguage: "css" },
      { title: "5. आगमन गती", content: "आगमनाची गती — @keyframes pop मध्ये opacity 0 ते 1 आणि scale 0.95 ते 1.\n[popover] ला animation: pop 0.2s — हळूवार उघडल्याचा अनुभव. गती संक्षिप्त आणि मऊ.\nसजीव दृश्य वापरा. अति हालचाल टाळा; गती कमी ठेवा म्हणजे अनुभव सुखद.", code: `@keyframes pop {
  from {
    opacity: 0;
    scale: 0.95;
  }
}
[popover] {
  animation: pop 0.2s;
}`, codeLanguage: "css" },
      { title: "6. फोकस रिंग", content: "टीप उघडल्यावर फोकस स्पष्ट — [popover]:focus-visible ला outline: 3px solid #6366f1.\nकीबोर्ड वापरकर्त्याला स्थिती कळते; फोकस हरवत नाही. प्रवेश्यता आदराचा भाग.\npopover बंद करणे सुद्धा सोपे — Esc आधार. ही सवय प्रत्येक modal व popover मध्ये ठेवा.", code: `[popover]:focus-visible {
  outline: 3px solid #6366f1;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक साधी टीप बनवा. [popover] ला margin: 0 आणि border: 1px solid #cbd5e1 द्या.\nमध्यभागी ठेवण्यासाठी inset व translate; backdrop ने मागे अंधार, box-shadow ने खोली.\nरुंदी मर्यादित आणि focus रिंग जोडा. टीप आता वापरासाठी तयार आणि दिसायला सुबक.", code: `[popover] {
  margin: 0;
  border: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["popover काय?", "backdrop कुठे?", "keyframes कसे?", "एक थर काय?"],
    quiz: [
      { question: "popover काय?", options: ["तात्काळ थर", "मुद्रण थर", "रंग थर"], correct: 0 },
      { question: "::backdrop कुठे?", options: ["मागे", "समोर", "घर"], correct: 0 },
      { question: "animate कसे?", options: ["keyframes", "order", "width"], correct: 0 },
      { question: "inset खास?", options: ["केंद्र", "धार", "सूत"], correct: 0 },
    ],
    challenge: {
      prompt: "टीप कार्ड करा.",
      starterCode: `[popover] {
  width: 18rem;
  border-radius: 12px;
  padding: 1rem;
}`,
      expectedOutput: "Native popover styled as a rounded Marathi tip card",
    },
    interviewQuestions: ["popover लाभ?", "backdrop मर्यादा?"],
    related: ["css-text-wrap", "css-modal-backdrop", "css-anchor-position"],
    prev: "css-text-wrap",
    next: "css-anchor-position",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-anchor-position",
    categoryId: "web",
    title: "Anchor Position",
    marathiTitle: "anchor — नांगर रचना",
    level: "advanced",
    minutes: 38,
    summary: "घटकाशी जोडून भाग ठेवणे.",
    sections: [
      { title: "1. anchor कल्पना", content: "anchor म्हणजे एका घटकाला दुसऱ्या घटकाच्या संदर्भात ठेवणे. .tip ला position: fixed आणि position-anchor: --btn.\n--btn हे नाव button ला जोडलेले; टीप त्याच्या संदर्भात बसते. JavaScript नको.\nहा नवीन CSS आधार — tooltip आणि menu साठी अचूक काम. कोड कमी, व्यवस्था नेमकी.", code: `.tip {
  position: fixed;
  position-anchor: --btn;
}`, codeLanguage: "css" },
      { title: "2. नाव नियम", content: "anchor साठी घटकाला नाव द्यावे — .btn ला anchor-name: --btn द्या.\nनाव unique आणि स्पष्ट; दुसरा घटक या नावाने जोडला जातो. कनेक्शन थेट — दुसरी स्क्रिप्ट नको.\nनाव नियम नेमका ठेवा; पुढील नियम या नावावरच चालतो.", code: `.btn {
  anchor-name: --btn;
}`, codeLanguage: "css" },
      { title: "3. मोजणी थर", content: "ठिकाण मोजण्यासाठी anchor() — .menu ला top: anchor(--btn bottom) आणि left: anchor(--btn left) द्या.\nम्हणजे menu button च्या खालच्या काठावरून आणि डाव्या काठाने उघडतो. स्थान नेमके.\nदिशा बदलल्यावरही ही मोजणी अचूक. tooltip व context menu साठी हा गाभा.", code: `.menu {
  top: anchor(--btn bottom);
  left: anchor(--btn left);
}`, codeLanguage: "css" },
      { title: "4. fallback नियम", content: "जागा कमी पडल्यास fallback — .menu ला position: absolute आणि position-try: flip-block द्या.\nखाली जागा नसेल तर वर उघडतो; flip सह रचना स्वतः जुळवते. वापरकर्त्याला त्रास नाही.\nहा नियम प्रयत्नांची क्रमवारी देते; तोल आपोआप सांभाळला जातो. रचना कधीही कापली जात नाही.", code: `.menu {
  position: absolute;
  position-try: flip-block;
}`, codeLanguage: "css" },
      { title: "5. सुसंगतता", content: "नवीन गुण असल्याने @supports (anchor-name: --btn) ने तपासा.\nआत .menu ला position-anchor: --btn द्या; नसेल तर साधी positioning चालते. रचना कधीही मोडत नाही.\nप्रगतीशील वाढीचा हा नमुना. नवीन ब्राउझरमध्ये पूर्ण सोय, जुन्यात साहजिक पर्याय.", code: `@supports (anchor-name: --btn) {
  .menu {
    position-anchor: --btn;
  }
}`, codeLanguage: "css" },
      { title: "6. सवय रचना", content: "inset-area नवा नियम — .tooltip ला inset-area: top म्हणजे वरच्या बाजूला उघडेल.\nshortcut मध्ये स्थान जुळते; परिणाम नेमका आणि कोड छोटा. anchor सोबत सारखे आधार.\nनवीन आधार समजून आल्यावर दोन्ही नियम मिळून व्यवस्था सोपी होते.", code: `.tooltip {
  inset-area: top;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता खूण रचनेचा सराव — .fancy ला anchor-name: --fancy द्या.\nआणखी एक घटक या नावाने position-anchor लावा; anchor() ने स्थान नेमके करा, @supports तपासा.\nटूलटीप किंवा मेनू अचूक जागी बसतो. हा नवीन CSS मार्ग JavaScript कमी करतो.", code: `.fancy {
  anchor-name: --fancy;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor काय?", "name कुठे?", "flip-block कधी?", "@supports का?"],
    quiz: [
      { question: "anchor काय?", options: ["घटक जोडणी", "रंग बदल", "ध्वनी वाढ"], correct: 0 },
      { question: "anchor-name?", options: ["नाव द्या", "धार घ्या", "रंग द्या"], correct: 0 },
      { question: "fallback म्हणजे?", options: ["उलट प्रयत्न", "नवीन रंग", "जुनी ओळ"], correct: 0 },
      { question: "new CSS?", options: ["anchor", "rgb", "margin"], correct: 0 },
    ],
    challenge: {
      prompt: "menu anchor करा.",
      starterCode: `.menu {
  position-anchor: --btn;
  top: anchor(--btn bottom);
}`,
      expectedOutput: "Menu positioned relative to button on Marathi page",
    },
    interviewQuestions: ["anchor कधी वापराल?", "fallback नेम काय?"],
    related: ["css-popover-tips", "css-writing-modes", "css-modal-backdrop"],
    prev: "css-popover-tips",
    next: "css-writing-modes",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-writing-modes",
    categoryId: "web",
    title: "Writing Modes",
    marathiTitle: "writing-mode — लिखाण दिशा",
    level: "advanced",
    minutes: 38,
    summary: "उभे लिखाण आणि दिशा नियंत्रण.",
    sections: [
      { title: "1. दिशा कल्पना", content: "writing-mode लिखाणाची दिशा ठरवते — horizontal सामान्य, vertical-rl उभे लिखाण.\n.vertical ला writing-mode: vertical-rl दिल्यावर मजकूर वरून खाली वाढतो. शीर्षक, पोस्टर, सीलसाठी.\nरचना एका नियमाने बदलते; आधीचे अंतर नियम दिशेला आदर देतात. दृश्य नवे आणि रोचक.", code: `.vertical {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
      { title: "2. अक्षर थर", content: "उभ्या ओळीत अक्षरे मिसळताना text-orientation: mixed — लॅटिन उभे, देवनागरी सरळ.\nउदा. नाव किंवा शब्द अक्षरे खालून-वर न राहता व्यवस्थित दिसतात. वाचन अधिक आरामदायी.\nमिश्र भाषेच्या मजकुरासाठी हे नियम महत्त्वाचे. केवळ उभे राहणे पुरेसे नाही — orientation हवा.", code: `.vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}`, codeLanguage: "css" },
      { title: "3. rtl व्यवस्था", content: "उजवीकडून डावीकडे लिहिणाऱ्या भाषांसाठी direction: rtl. [dir=\"rtl\"] ने markup मध्ये दिशा दिली जाते.\nCSS चे काम सभोवतालचा तोल सांभाळणे; rtl मध्ये start-आधारित नियम स्वयं उलटतात.\nबहुभाषिक पेजमध्ये हे नियम बचाव बनतात — मजकूर सातत्याने वाचकासमोर राहतो.", code: `[dir="rtl"] {
  direction: rtl;
}`, codeLanguage: "css" },
      { title: "4. उभी रचना", content: "vertical-lr म्हणजे डावीकडून उजवीकडे उभे लिखाण. .vertical ला writing-mode: vertical-lr आणि text-align: start.\nस्तंभ उभे वाढतात; दिशा स्पष्ट. शीर्षक आणि पुस्तक अशा रचनेत उपयुक्त.\nदृश्य वेगळे असले तरी संतुलन जपा. नियम नेमके लिहिल्यास रचना सुबक राहते.", code: `.vertical {
  writing-mode: vertical-lr;
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. आदर नियम", content: "दिशेला आदर दाखवणारे logical properties — margin-inline-start: 8px. .box साठी.\nहा गुण rtl मध्ये उजवीकडे, ltr मध्ये डावीकडे — आपोआप. भौतिक बाजू (left/right) अचूक उलटत नाही.\nबहुभाषिक रचनेत हा आधार खूप महत्त्वाचा. एक नियम सर्व दिशांना उपयुक्त.", code: `.box {
  margin-inline-start: 8px;
}`, codeLanguage: "css" },
      { title: "6. सील रचना", content: "upright ने अक्षरे सरळ उभी — .seal ला text-orientation: upright. देवनागरी शुद्ध दिसते.\nसील, स्टॅम्प, पोस्टर अशा सजावटीतून वापर. अक्षरे फिरत नाहीत, पण सरळ उभी राहतात.\nनियम स्पष्ट व कोड सुबक. उभ्या रचनेत मजकूर नेहमी व्यवस्थित.", code: `.seal {
  text-orientation: upright;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता ध्वजावर उभे लिखाण करा. .seal ला writing-mode: vertical-rl द्या.\nअक्षरे सरळ राहण्यासाठी text-orientation: upright जोडा; rtl भाषांसाठी logical properties वापरा.\nएक नियम बदलला की पूर्ण रचना उभी होते. लिखाण दिशेचे हे नियंत्रण सोपे आणि सशक्त.", code: `.seal {
  writing-mode: vertical-rl;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["vertical कधी?", "mixed काय?", "rtl कसे?", "upright कुठे?"],
    quiz: [
      { question: "writing-mode काय?", options: ["लिखाण दिशा", "रंग वाढ", "ध्वनी थर"], correct: 0 },
      { question: "vertical-rl?", options: ["उभे", "आडवे", "कर्ण"], correct: 0 },
      { question: "direction rtl?", options: ["उजवी सुरुवात", "डावी सुरुवात", "मध्य थांबा"], correct: 0 },
      { question: "logical prop?", options: ["आदर नियम", "रंग नियम", "धार नियम"], correct: 0 },
    ],
    challenge: {
      prompt: "सील उभा करा.",
      starterCode: `.seal {
  writing-mode: vertical-rl;
  text-orientation: upright;
}`,
      expectedOutput: "Marathi text upright on vertical seal",
    },
    interviewQuestions: ["writing-mode उद्देश?", "upright फरक?"],
    related: ["css-anchor-position", "css-text-wrap", "css-print-styles"],
    prev: "css-anchor-position",
    next: "css-modal-backdrop",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-modal-backdrop",
    categoryId: "web",
    title: "Modal Backdrop",
    marathiTitle: "modal — संवाद थर",
    level: "advanced",
    minutes: 38,
    summary: "dialog modal आणि ::backdrop नियंत्रण.",
    sections: [
      { title: "1. dialog कल्पना", content: "dialog हा मूळ modal घटक — dialog[open] असल्यावर खुला असतो. CSS ने त्याला मध्यभागी आणता येतो.\ndialog[open] ला margin: auto — संपूर्ण ब्राउझर क्षेत्राच्या सापेक्ष मध्यभागी. रचना स्थिर.\nजागा वाचते आणि सामग्री त्वरित लक्ष वेधते. घटना नियंत्रण ब्राउझरमध्ये नेमके.", code: `dialog[open] {
  margin: auto;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "dialog च्या मागे अंधार — ::backdrop. dialog::backdrop ला background: rgba(15, 23, 42, 0.6) द्या.\nमागील सामग्री मंद — लक्ष dialog वर. अंधार संतुलित: खूप काळा नको.\nbackdrop व dialog एकच घटक असतो; CSS एकाच जागी नियंत्रण देते. स्वच्छ दृश्य.", code: `dialog::backdrop {
  background: rgba(15, 23, 42, 0.6);
}`, codeLanguage: "css" },
      { title: "3. आगमन थर", content: "आगमन गती — @keyframes fade-in मध्ये opacity 0 ते 1. dialog[open] ला animation: fade-in 0.25s.\nहळूवार प्रकट — अचानक उडी नाही. वापरकर्त्याला सुखद प्रवेश.\nगती संक्षिप्त आणि मऊ ठेवा; दीर्घ एनिमेशन त्रासदायक. सजीवता आणि संयतपणा दोन्ही.", code: `@keyframes fade-in {
  from {
    opacity: 0;
  }
}
dialog[open] {
  animation: fade-in 0.25s;
}`, codeLanguage: "css" },
      { title: "4. स्क्रोल नियम", content: "modal उघडल्यावर मागील body चे स्क्रोल थांबवतात — body:has(dialog[open]) ला overflow: hidden.\n:has ने मागील अवस्था तपासून नियम लागू करतो. मागील सामग्री हलत नाही.\nही सोय सर्व ब्राउझरमध्ये नाही; जुने सोडले तर body हलते, पण रचना व्यवस्थित राहते.", code: `body:has(dialog[open]) {
  overflow: hidden;
}`, codeLanguage: "css" },
      { title: "5. रुंदी तोल", content: "modal ची रुंदी मर्यादित — dialog ला width: min(90vw, 480px) द्या.\nलहान स्क्रीनवर 90vw, मोठ्या स्क्रीनवर 480px कमाल. रुंदी नेहमी तोलात.\nखूप मोठा modal वाचनात अडथळा आणतो; हा नियम सुबकता राखतो. प्रत्येक स्क्रीनसाठी योग्य.", code: `dialog {
  width: min(90vw, 480px);
}`, codeLanguage: "css" },
      { title: "6. मऊ थर", content: "मऊ पार्श्वभूमीसाठी backdrop-filter — dialog::backdrop ला backdrop-filter: blur(4px).\nमागील सामग्री हलकी धुंधली होते; अंधाराइतका कठोर नाही. लक्ष dialog वर आणखी खोल.\nनवीन नियम — जुन्या ब्राउझरमध्ये नसेल तर अंधारच राहतो. सजावटीचा हा थर निरुपद्रवी.", code: `dialog::backdrop {
  backdrop-filter: blur(4px);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "पहिला modal बनवा — dialog ला border: 0 आणि border-radius: 14px द्या.\nbackdrop ला rgba अंधार आणि fade-in animation जोडा; रुंदी min(90vw, 480px) ठरवा.\n:has ने मागील स्क्रोल थांबवा. modal स्वच्छ, केंद्रित आणि वापर सज्ज.", code: `dialog {
  border: 0;
  border-radius: 14px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["dialog काय?", "backdrop कुठे?", ":has कधी?", "blur का?"],
    quiz: [
      { question: "dialog काय?", options: ["संवाद थर", "मुद्रण थर", "रंग थर"], correct: 0 },
      { question: "::backdrop?", options: ["मागे रंग", "समोर ओळ", "घर दरवाजा"], correct: 0 },
      { question: ":has नियम?", options: ["स्क्रोल बंद", "ध्वनी वाढ", "धार काळ"], correct: 0 },
      { question: "min काय?", options: ["रुंदी मर्यादा", "उंची खोल", "नाव धार"], correct: 0 },
    ],
    challenge: {
      prompt: "modal कोपरे करा.",
      starterCode: `dialog {
  border: 0;
  border-radius: 14px;
}`,
      expectedOutput: "Rounded Marathi dialog with dimmed backdrop",
    },
    interviewQuestions: ["dialog vs popover?", ":has उपयोग?"],
    related: ["css-writing-modes", "css-popover-tips", "css-focus-visible"],
    prev: "css-writing-modes",
    next: "css-focus-visible",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-focus-visible-2",
    categoryId: "web",
    title: "Focus Visible",
    marathiTitle: "focus-visible — फोकस रिंग",
    level: "advanced",
    minutes: 38,
    summary: "कीबोर्ड फोकस स्पष्ट दाखवणे.",
    sections: [
      { title: "1. फोकस कल्पना", content: "focus-visible फक्त कीबोर्ड वापरावर दिसते — :focus-visible ला outline: 3px solid आणि outline-offset: 2px.\nमाऊसवर कोणतीही रिंग नाही; कीबोर्ड मार्ग स्पष्ट. प्रवेश्यता वाढते.\nहा नियम सर्वांसाठी आधार — कोणता घटक निवडला आहे ते कळते. नियम एकच, सगळ्यांना लागू.", code: `:focus-visible {
  outline: 3px solid;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "2. दुवा थर", content: "दुव्यासाठी नेमकी रिंग — a:focus-visible ला outline: 2px solid #4f46e5 द्या.\nनिळी रिंग स्पष्ट आणि जाणीवर. दुवा वापरकर्त्याला मिळतो; फोकस गोंधळत नाही.\nरंगुल खेळ नको — ठोस रिंग नेमकी. कीबोर्ड वापरकर्त्यासाठी ही सवय अपेक्षित.", code: `a:focus-visible {
  outline: 2px solid #4f46e5;
}`, codeLanguage: "css" },
      { title: "3. बटण वलय", content: "बटणाला दुहेरी रिंग — .btn:focus-visible ला outline: 3px solid #7c3aed आणि box-shadow: 0 0 0 4px #ede9fe.\nआतील जांभळी रिंग, बाहेर हलकी — लोकप्रिय रिंग रचना. बटण स्पष्ट आणि आकर्षक.\nbox-shadow रिंग दृश्याला उंचावते; सर्व ब्राउझरमध्ये सुसंगत. बटणे, दुवे, साधने साठी.", code: `.btn:focus-visible {
  outline: 3px solid #7c3aed;
  box-shadow: 0 0 0 4px #ede9fe;
}`, codeLanguage: "css" },
      { title: "4. दुहेरी नियम", content: "माऊसवर रिंग नको — :focus:not(:focus-visible) ला outline: none द्या.\nमाऊस क्लिकने रिंग नाही; कीबोर्डने मात्र स्पष्ट रिंग. गोंधळ टाळला जातो.\nहा नियम UI स्वच्छ बनवतो — विनाकारण रिंग फिरत नाही. सवय योग्य आणि कोड सुरक्षित.", code: `:focus:not(:focus-visible) {
  outline: none;
}`, codeLanguage: "css" },
      { title: "5. विरोध तोल", content: "रिंगचा रंग contrast सह — :focus-visible ला outline-color: #d97706 केशरी.\nहा रंग बहुतेक पार्श्वभूमीवर वेगळा; वाचकाला त्रास नाही. स्पष्टता महत्त्वाची.\nरंग निवडताना पार्श्वभूमी विचारात घ्या. रिंग नेहमी दूरवरून दिसावी.", code: `:focus-visible {
  outline-color: #d97706;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "@supports selector(:focus-visible) ने आधार तपासा.\nआत a:focus-visible ला outline: 2px solid द्या; नसेल तर जुना focus नियम चालू राहतो.\nप्रगतीशील वाढ — नवीन ब्राउझरमध्ये नवी रिंग, जुन्यात सुरक्षित पर्याय. कोड भविष्यासाठी तयार.", code: `@supports selector(:focus-visible) {
  a:focus-visible {
    outline: 2px solid;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक रिंग नियम जोडा — .menu:focus-visible ला outline: 3px solid #dc2626 द्या.\nकीबोर्ड मार्ग स्पष्ट; दुवे, बटणे, साधने यांनाही एकसंध रिंग द्या. contrast ध्यानात.\nप्रवेश्यता महत्त्वाची आणि दृश्य सुबक. हा नियम संपूर्ण पेजवर लागू होतो.", code: `.menu:focus-visible {
  outline: 3px solid #dc2626;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["focus-visible कधी?", "mouse वर?", "@supports का?", "contrast कशी?"],
    quiz: [
      { question: "focus-visible काय?", options: ["कीबोर्ड रिंग", "माऊस रिंग", "रंग वाढ"], correct: 0 },
      { question: "outline कुठे?", options: ["सीमेत बाहेर", "मध्ये", "आत"], correct: 0 },
      { question: "selector support?", options: ["@supports", "@media", "@import"], correct: 0 },
      { question: "not rule काय?", options: ["माऊस ठिकठीक", "सगळे अंधार", "नवीन रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "दुवा रिंग करा.",
      starterCode: `a:focus-visible {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}`,
      expectedOutput: "Keyboard focus clearly ringed on Marathi page",
    },
    interviewQuestions: ["focus-visible महत्त्व?", "outline-offset का?"],
    related: ["css-modal-backdrop", "css-accent-color", "css-dark-mode"],
    prev: "css-modal-backdrop",
    next: "css-marathi-capstone9",
    levelLabel: CSS9_LABEL,
  },
  {
    slug: "css-marathi-capstone9",
    categoryId: "web",
    title: "Modern Patterns Capstone",
    marathiTitle: "Pattern Bag — भाग संग्रह",
    level: "advanced",
    minutes: 38,
    summary: "Level 9 नवीन पॅटर्न एकत्र आणणे.",
    sections: [
      { title: "1. संग्रह थर", content: "SUMMARY — Level 9 चे नवीन नियम एकत्र portal मध्ये. :root मध्ये --brand: #4f46e5 आणि accent-color: var(--brand).\nब्रांड रंग टोकन बनतो; checkbox, radio, range सर्व मूळ घटक रंगतात.\nएक स्रोत, सर्वत्र रंग — थीम एकसंध. पुढील विभाग या टोकनांवर चालतात.", code: `:root {
  --brand: #4f46e5;
  accent-color: var(--brand);
}`, codeLanguage: "css" },
      { title: "2. मथळा थर", content: "मथळ्यासाठी fluid — h1 ला font-size: clamp(1.8rem, 4vw, 3.2rem) द्या.\nस्क्रीन नुसार आकार गुळगुळीत; पण मर्यादा नेमक्या. मथळा नेहमी संतुलित.\nप्रत्येक स्क्रीनवर — वाचन आराम. clamp च्या सहाय्याने breakpoints कमी होतात.", code: `h1 {
  font-size: clamp(1.8rem, 4vw, 3.2rem);
}`, codeLanguage: "css" },
      { title: "3. gallery थर", content: "गॅलरी भाग — .gallery ला display: flex, overflow-x: auto आणि scroll-snap-type: x mandatory द्या.\nप्रत्येक item scroll-snap-align center; स्क्रोल नेमके थांबते. चित्रसंग्रह नियंत्रित.\nअनेक स्क्रीनवर एकसमान अनुभव. gallery ची रचना आता सज्ज.", code: `.gallery {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "4. chip थर", content: "chip भाग — .chip ला background: color-mix(in srgb, var(--brand) 15%, white) द्या.\nब्रांडची हलकी छटा — मऊ chip; रंग टोकन वापरून tint तयार होतो. बदल एका ठिकाणी.\nएकूण पॅलेट सामंजस्यपूर्ण. नवीन रंग निवडण्याचा त्रास नाही.", code: `.chip {
  background: color-mix(in srgb, var(--brand) 15%, white);
}`, codeLanguage: "css" },
      { title: "5. शीर्षक तोल", content: "शीर्षक तोल — h2 आणि h3 ला text-wrap: balance आणि max-width: 45ch द्या.\nओळी समान आणि रुंदी मर्यादित; विभागाचे मथळे सुबक. वाचन आराम वाढतो.\nगोंधळ न वाढवता छोटे नियम व्यवस्था सजवतात. प्रत्येक स्क्रीनवर एकसमान.", code: `h2,
h3 {
  text-wrap: balance;
  max-width: 45ch;
}`, codeLanguage: "css" },
      { title: "6. टीप थर", content: "टीप भाग — [popover] ला width: 18rem; [popover]::backdrop ला rgba(0, 0, 0, 0.35) द्या.\nमऊ अंधार आणि मर्यादित रुंदी — टीप सुबक. जोडा box-shadow व focus रिंग.\nportal चा हा भाग संवादासाठी सज्ज. नवीन मूळ घटक एकत्र राहतात.", code: `[popover] {
  width: 18rem;
}
[popover]::backdrop {
  background: rgba(0, 0, 0, 0.35);
}`, codeLanguage: "css" },
      { title: "Final Project", content: "अंतिम रिंग — a:focus-visible ला outline: 3px solid #4f46e5 आणि outline-offset: 2px द्या.\nकीबोर्ड मार्ग संपूर्ण portal मध्ये स्पष्ट; प्रवेश्यता पूर्ण होते.\nहा नियमच portal चा शेवटचा घटक. सातत्य आणि समावेश संपूर्ण Level 9 चा सारांश.", code: `a:focus-visible {
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 9 काय शिकलं?", "accent कुठे?", "balance कुठे?", "final रिंग?"],
    quiz: [
      { question: "Level 9 सारांश?", options: ["पॅटर्न संग्रह", "एकट कोड", "फक्त रंग"], correct: 0 },
      { question: "fluid कुठे?", options: ["clamp", "snap", "mix"], correct: 0 },
      { question: "टीप कुठे?", options: ["popover", "print", "link"], correct: 0 },
      { question: "keyboard फोकस?", options: ["focus-visible", "hover only", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "पॅटर्न एकत्र करा.",
      starterCode: `:root {
  --brand: #4f46e5;
  accent-color: var(--brand);
}`,
      expectedOutput: "Modern patterns combined through Marathi component page",
    },
    interviewQuestions: ["तीन आवडते पॅटर्न?", "एकत्र वापर नियम?"],
    related: ["css-focus-visible", "css-popover-tips", "css-clamp-fluid"],
    prev: "css-focus-visible",
    next: "css-aspect-ratio",
    levelLabel: CSS9_LABEL,
  },];
