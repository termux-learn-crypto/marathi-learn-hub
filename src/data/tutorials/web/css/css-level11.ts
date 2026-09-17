import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 11 — Interaction Modes ===
export const CSS11_LABEL = "CSS · Level 11 — Interaction Modes";

export const cssLevel11: Tutorial[] = [
  {
    slug: "css-light-dark",
    categoryId: "web",
    title: "Light Dark",
    marathiTitle: "light-dark — थीम रंग",
    level: "advanced",
    minutes: 40,
    summary: "color-scheme आणि light-dark() रंग निवड.",
    sections: [
      { title: "1. थीम कल्पना", content: "color-scheme हा एक CSS नियम आहे जो ब्राउझरला सांगतो की ही पेज light, dark किंवा दोन्ही रंगसंगतीत दाखवता येते. :root मध्ये color-scheme: light dark लिहिलं की ऑपरेटिंग सिस्टीमच्या सेटिंगनुसार ब्राउझर आपल्या स्वतःच्या भागांचा रंग ठरवतो.\nस्क्रोलबार, form घटक आणि मजकूर निवड असे सर्व ब्राउझर-नियंत्रित भाग सिस्टीमच्या थीमसोबत आपोआप जुळतात. हा नियम तुमच्या पेजच्या रंगांसाठी एक आधार तयार करतो.\nपुढील भागांमध्ये light-dark() या फंक्शनने याच थीमला स्वतःच्या रंगांशी कसे जोडायचे ते दिसेल; color-scheme ही त्या संपूर्ण योजनेची घोषणा आहे.", code: `:root {
  color-scheme: light dark;
}`, codeLanguage: "css" },
      { title: "2. रंग जोडी", content: "light-dark() हे फंक्शन एकाच गुणधर्माला दोन रंग देते — पहिला light थीमसाठी आणि दुसरा dark थीमसाठी. ब्राउझर color-scheme वरून ठरलं की, योग्य रंग त्या जागी निवडतो.\nवरील नियमात body चा मजकूर light मध्ये #1f2937 म्हणजे गडद राखाडी आणि dark मध्ये #f4f4f5 म्हणजे हलका; पार्श्वभूमी light मध्ये #ffffff पांढरी आणि dark मध्ये #111827 गडद. म्हणजेच मजकूर आणि पार्श्वभूमीची सुसंगत जोडी आपोआप उलटते.\nप्रत्येक गुणधर्मावर असे दोन रंग लिहिल्याने थीम बदलताना विरोधी रंगांची जोडी कधीही निर्माण होत नाही. ही सवय रंग व्यवस्था नेटकी ठेवते आणि प्रत्येक mode मध्ये पेज वाचनीय राहते.", code: `body {
  color: light-dark(#1f2937, #f4f4f5);
  background: light-dark(#ffffff, #111827);
}`, codeLanguage: "css" },
      { title: "3. कार्ड रूप", content: "कार्डच्या स्वरूपात color-scheme चा फायदा स्पष्ट दिसतो — वरील नियमात .card ची पार्श्वभूमी light मध्ये पांढरी आणि dark मध्ये #0f172a म्हणजे गडद निळसर राख केली आहे.\nत्याचबरोबर border ला दोन रंग दिले आहेत: दिवसा #e2e8f0 नावाची हलकी किनार आणि अंधारात #334155 नावाची मऊ गडद किनार. यामुळे dark मध्ये कार्ड मागील पार्श्वभूमीवर चपटल्यासारखे दिसत नाही.\nअशा light-dark() जोड्या रेषा, रंग किंवा छाया अशा प्रत्येक गुणधर्मावर लिहिता येतात. का महत्त्वाचं? वाचक कोणतीही थीम निवडेल तरी किनारी आणि पार्श्वभूमी यांचा ताळमेळ राहतो आणि कार्ड लगेच ओळखता येते.", code: `.card {
  background: light-dark(#ffffff, #0f172a);
  border: 1px solid light-dark(#e2e8f0, #334155);
}`, codeLanguage: "css" },
      { title: "4. toggle खुणा", content: "थीम खुणा (toggle) करण्यासाठी JavaScript html घटकावर data-theme हा attribute बदलतो; वरील नियम सांगतो की जेव्हा त्याचे मूल्य dark असेल तेव्हा संपूर्ण पेजसाठी color-scheme: dark लागू व्हावे.\nहा selector html घटकाशी जोडलेला असल्याने नियम वारशाने पेजच्या प्रत्येक घटकापर्यंत पोहोचतो. त्याच्याउलट html[data-theme=light] असेल तर color-scheme: light असा स्वतंत्र नियमही देतात.\ntoggle चे बटण फक्त data-theme चे मूल्य बदलते — योग्य रंग निवडणे ब्राउझर आपोआप करतो. ही खूण तयार झाल्यावर light-dark() चे दोन रंग खरेच कार्यरत होतात; ही थीम यंत्रणेचा मेंदू आहे.", code: `html[data-theme="dark"] {
  color-scheme: dark;
}`, codeLanguage: "css" },
      { title: "5. संवाद रंग", content: "संवादात्मक घटकांना — दुवे आणि बटणे — थीमप्रमाणे वेगळे रंग द्यायचे असतात; वरील नियम .link दुव्याचा रंग light मध्ये #1d4ed8 म्हणजे गडद निळा आणि dark मध्ये #93c5fd नावाचा हलका निळा करतो.\nअंधार थीममध्ये गडद निळा दिसत नाही, म्हणून तेथे हलका निळा — असे दोन रंग एकाच ओळीत दिल्याने प्रत्येक mode मध्ये दुवा स्पष्ट आणि ओळखण्याजोगा राहतो.\nhover किंवा focus यांसारख्या विशेष अवस्थांसाठीही light-dark() च्या जोड्या स्वतंत्र नियमांमध्ये दिल्या जातात.\nरंग केवळ रंगावरच अवलंबून न ठेवता खूणासुद्धा वापरा — पण जेव्हा रंगच हवा, तेव्हा हा दृष्टिकोन थीम दोन्हीकडे दृश्य स्पष्ट ठेवतो.", code: `.link {
  color: light-dark(#1d4ed8, #93c5fd);
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "light-dark() फंक्शन बरेच आधुनिक ब्राउझर हाताळतात, पण जुन्या ब्राउझरला ते माहीत नसते. म्हणून नियम लिहिताना आधी ते फंक्शन त्या ब्राउझरला जमते का हे तपासण्याची सवय ठेवावी.\n@supports (color: light-dark(#000, #fff)) अशी तपासणी लिहिली की आतले नियम फक्त आधार देणाऱ्या ब्राउझरलाच लागू होतात. बाकी ब्राउझरसाठी त्याच्या वर साधा सुरक्षित नियम ठेवतात.\nवरील उदाहरणात body ची दिवस-अंधार जोडी केवळ आधार असलेल्या ब्राउझरमध्ये चालते; जुन्या ब्राउझरला नेहमीचीच पार्श्वभूमी मिळते.\nही progressive enhancement ची रीत आहे — नवीन सुविधा जिथे चालते तिथे द्या आणि न चालणाऱ्यांना साध्या शैलीने सुरक्षित ठेवा.", code: `@supports (color: light-dark(#000, #fff)) {
  body {
    background: light-dark(#ffffff, #0f172a);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या छोट्या प्रकल्पात फक्त दोन नियम — :root वर color-scheme: light dark आणि body वर light-dark() च्या जोड्या — संपूर्ण थीम उभी करतात. root चा नियम ब्राउझरला सांगतो की पेज दोन्ही mode मध्ये दाखवता येते.\nbody चा मजकूर light मध्ये #111827 आणि dark मध्ये #e5e7eb; पार्श्वभूमी light मध्ये #ffffff आणि dark मध्ये #0b1220. म्हणजे थीम बदलताच रंगांची संपूर्ण जोडी आपोआप उलटते.\nमोबाइल किंवा डेस्कटॉपवर dark mode चालू करून हा फरक लगेच दिसतो. या सोप्या पायावर पुढे काच header आणि इतर प्रभाव जोडले जातील — या धड्यात तेच पुढे उलगडले जाते.", code: `:root {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. काच कल्पना", content: "backdrop-filter म्हणजे घटकाच्या मागे असलेल्या भागावर प्रक्रिया करणारा गुणधर्म. सामान्य background फक्त घटकाचे स्वतःचे रूप रंगवते, पण backdrop-filter घटकाच्या खाली दिसणाऱ्या सर्व गोष्टींवर परिणाम करतो.\nउदा. .glass ला backdrop-filter: blur(8px) दिल्यावर त्याच्या मागील मजकूर आणि चित्रे 8px च्या गुणांकाने धूसर होतात — अशी रचना काचेसारखी अर्धपारदर्शक दिसते.\nblur ची रक्कम जास्त दिली तर मागील भाग अधिक धुकेरी; कमी दिली तर हलकी झाकणी. रचना अशा रीतीने स्तरांत उभी राहते आणि दृश्य मऊ-शांत दिसते.\nमागील धुक्यामुळे मजकूर आणि पार्श्वभूमी यांच्यातील स्पर्धा कमी होऊन वाचन सुधारते.", code: `.glass {
  backdrop-filter: blur(8px);
}`, codeLanguage: "css" },
      { title: "2. पारभासी", content: "काचेच्या प्रभावाला दोन गोष्टी एकत्र लागतात — एक अर्धपारदर्शक background आणि एक backdrop-filter. वरील नियमात .glass ला rgba(255, 255, 255, 0.4) म्हणजे पांढरा रंग 40 टक्के पारदर्शकतेने दिला आहे.\nतो एकटा पुरेसा नाही — मागील सामग्री तशीच स्पष्ट दिसेल. म्हणून backdrop-filter: blur(8px) जोडल्यावर मागील भाग धुळके जातो आणि मजकूर त्या थरावर स्पष्ट बसतो.\nrgba मधील alpha मूल्य मोठे असेल तर पार्श्वभूमी दाट, लहान असेल तर पातळ. blur आणि alpha दोन्ही एकत्र संतुलित केल्यावरच इच्छित काच थर तयार होतो.\nमागील भाग हाताळण्यासाठी ब्राउझर दोन्ही गुणधर्मांवर अवलंबून असतो; त्यामुळे हे दोन्ही नियम कायम सोबत लिहा.", code: `.glass {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
}`, codeLanguage: "css" },
      { title: "3. header थर", content: "backdrop-filter चा सर्वांत सामान्य उपयोग म्हणजे स्क्रोलकाळी वर चिकटलेला header. वरील नियमात .topbar ला position: sticky आणि top: 0 दिल्याने तो पेजच्या वरच्या काठावर चिकटून राहतो.\nमागील सामग्री स्क्रोल होत राहते, पण backdrop-filter: blur(12px) मुळे ती header च्या खाली धुसर दिसते. त्यामुळे खाली वाहणारा मजकूर स्पष्ट वाचता येतो आणि header चे मथळे गर्दीत लपत नाहीत.\nकाचेचा थर आणि मजकूर यांच्यातील फरक राहिला की header प्रमुख आणि ओळखण्याजोगा राहतो. sticky या शब्दाचा अर्थ 'चिकटलेला' — स्क्रोल कितीही खाली गेला तरी header सर्वात वर राहतो.\nहा नमुना आधुनिक साइटचा सर्वांत आवडता रूप होऊन गेला आहे.", code: `.topbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
}`, codeLanguage: "css" },
      { title: "4. पटल रूप", content: "काच थर फक्त header साठीच नाही — cards आणि पटलांवरही तो मोहक दिसतो. वरील नियमात .panel ला blur(6px) दिला आहे; हलका blur कारण पटले अनेक असतात आणि त्यांच्या मागील प्रत्येक गोष्ट खूप धुसर करायची नसते.\nत्याचबरोबर border 1px solid rgba(255, 255, 255, 0.2) दिला आहे — हलकी पांढरी, अर्धपारदर्शक किनार. या रचनेतून पटलाला 'काच' असल्याची जाणीव येते आणि तो मागील पार्श्वभूमीपासून वेगळा दिसतो.\nअशा पटलांमध्ये मजकूर ठेवताना color देखील पारदर्शकतेशी संतुलित ठेवावा. कमी blur आणि नाजूक border ही मोठ्या प्रमाणात वापरण्यास सुरक्षित रचना आहे.", code: `.panel {
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`, codeLanguage: "css" },
      { title: "5. वाचन थर", content: "चित्रावर पडणारा overlay थर वाचनीयतेसाठी महत्त्वाचा — वरील नियमात .overlay ला rgba(0, 0, 0, 0.35) म्हणजे अर्धगडद काळा पार्श्वभूमी दिली आहे. तो पातळ असल्याने मागील चित्र दिसत राहते.\nत्यावर blur(4px) जोडल्यावर मागील प्रतिमेच्या ठळक कडा हलक्या धुक्यात मिसळून जातात आणि पुढील मजकूर स्पष्टपणे ठळक होतो.\nजेव्हा overlaid घटकावर मजकूर असेल तेव्हा contrast आपोआप वाढतो — गडद थर आणि हलका मजकूर एकत्र येतात. overlay मध्ये blur जास्त नको; 4px सारखा हलका blur कायम ठेवा.\nअशा रचनेत चित्राचे सौंदर्य टिकते आणि मजकूरही चटकन वाचला जातो — काच थर संतुलन ठेवण्याची हीच रीत.", code: `.overlay {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(4px);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "backdrop-filter ची उपलब्धता ब्राउझरनुसार बदलते; काही ब्राउझरमध्ये तो गुणधर्म दिसत नाही किंवा वेगळा काम करतो. म्हणून या प्रभावाला @supports ने तपासून लावण्याची सवय ठेवावी.\n@supports (backdrop-filter: blur(1px)) अशी तपासणी लिहिली की ती खरी असेल तरच आतील नियम लागू होतो. वरील उदाहरणात .glass चा blur(8px) फक्त आधार देणाऱ्या ब्राउझरमध्येच सक्रिय होतो.\nजुन्या ब्राउझरला मागील सामग्री साधी, निःसंदिग्ध दिसते — मजकूर वाचता येणे कधीही थांबत नाही. हे progressive enhancement चे खरे स्वरूप आहे.\nकोणत्याही प्रगत गुणधर्माला ही तपासणी जोडल्याने नवीन रूप मिळते आणि जुन्या वापरकर्त्याला खराब अनुभव येत नाही.", code: `@supports (backdrop-filter: blur(1px)) {
  .glass {
    backdrop-filter: blur(8px);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात इच्छित रूप म्हणजे काचेसारखा site header. .site-header ला position: sticky आणि top: 0 दिल्याने तो स्क्रोलकाळी सर्वात वर चिकटतो आणि बाकी सामग्री त्याच्या खालून वाहत जाते.\nपार्श्वभूमी rgba(255, 255, 255, 0.6) म्हणजे साठ टक्के दाट पांढरी; या अर्धपारदर्शकतेमुळे खालील मजकूर धुसर दिसू शकतो. त्यासोबत backdrop-filter: blur(10px) तो भाग आणखी मऊ करतो.\nमोठ्या blur रकमेमुळे header चे मथळे नीट बसतात आणि मागील गोंधळ जाणवत नाही. हा एकच नियम आधुनिक फ्रॉस्टेड header निर्माण करतो.\nमोबाइलवरही तपासा — 10px इतकी blur रक्कम सुरक्षित रेंजमध्ये आहे, त्यामुळे लहान पडद्यावर सुद्धा रचना सुबक दिसते.", code: `.site-header {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. सुरुवात नियम", content: "@starting-style हा नियम एखाद्या घटकाची entry स्थिती — म्हणजे पेजवर तो दिसायला सुरुवात होण्यापूर्वीची अवस्था — ठरवतो. वरील नियमात .box ला प्रारंभच्या क्षणी opacity: 0 म्हणजे अदृश्य केले जाते आणि नंतर मुख्य नियमातील transition तो हळूहळू दृश्य बनवतो.\nपूर्वी असे entry effects JavaScript ने इव्हेंट ऐकून लिहावे लागत; आता @starting-style CSS मध्येच आगमनाची अवस्था सांगते.\nअसे प्रभाव display: none वरून block वर आलेल्या घटकांवरही काम करतात — menu आणि popover सारख्या घटकांना मऊ प्रवेश मिळतो.\nही entry स्थिती नियंत्रित आणि मऊ असते; पेज अचानक दिसण्याऐवजी संयमाने उलगडते म्हणून अनुभव सजीव पण सभ्य राहतो.", code: `@starting-style {
  .box {
    opacity: 0;
  }
}`, codeLanguage: "css" },
      { title: "2. display विस्तार", content: "transition ला साध्या गुणांसोबत display सारखे discrete मूल्यही मिळू शकते — पण त्यासाठी allow-discrete हा शब्द जोडावा लागतो. वरील नियमात .box ला opacity 0.3s आणि display 0.3s दोन्ही transition दिले आहेत.\nसामान्यपणे display मूल्ये none ते block मध्ये पायऱ्या नसल्याने transition होत नाही; allow-discrete मुळे ब्राउझर display बदलालाही गुळगुळीत नियंत्रण देतो.\nम्हणजे घटक अचानक दिसण्याऐवजी opacity सोबत हळूहळू प्रकट होतो. असे विस्तार display टॉगल करणाऱ्या JavaScript ला आवश्यक असते.\nयाशिवाय transition-behavior: allow-discrete स्वतंत्र नियमही देतो; दोन्ही मार्गांनी entry अवस्था सुरळीत होते.", code: `.box {
  transition: opacity 0.3s, display 0.3s allow-discrete;
}`, codeLanguage: "css" },
      { title: "3. menu थर", content: "menu उघडताना येणाऱ्या गतीसाठी @starting-style खास उपयुक्त आहे. वरील नियमात .menu उघडताच क्षणभर opacity: 0 आणि transform: scale(0.9) म्हणजे आकाराने थोडा लहान असतो.\nआधार transition नियमात opacity आणि transform दोन्ही 0.2 सेकंदात नव्या मूल्यांत सरकतात — मेनू छोट्यातून मोठा, अदृश्यातून दृश्य बनतो. स्केल सुरुवातीच्या 0.9 वरून 1.0 पर्यंत वाढल्याने 'उघडत असल्याची' जाणीव येते.\nअसा entry effect मेनूचे रूप ओळखता येण्याजोगे आणि सजीव बनवतो. transition आणि @starting-style च्या जोडीमुळेच हे शक्य होते.\nmenu लपला असताना display JavaScript सांभाळते; उघडताच ही गती दिसून येते.", code: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.9);
  }
}
.menu {
  transition: opacity 0.2s, transform 0.2s;
}`, codeLanguage: "css" },
      { title: "4. टॅब शैली", content: "टॅब किंवा panel बदलताना content ला हलकी दिशा दिली तर रचना जिवंत दिसते. वरील नियमात .tab ची सुरुवात opacity: 0 आणि translate: 0 -6px अशी केली आहे — म्हणजे तो भाग वरच्या दिशेने हलवलेला असतो.\ntransition नियमात opacity आणि translate दोन्ही 0.25 सेकंदात नव्या अवस्थेत पोहोचतात — टॅब वरून खाली सरकत दृश्य होतो. translate ची रक्कम नियंत्रित असल्याने जास्त धक्का निर्माण होत नाही.\nअसा नमुना टॅब सिस्टीममध्ये कोणता panel सध्या चालू आहे हे दृश्यमान करतो आणि वाचकाला दिशेची सूचना देतो.\nसुरुवातीच्या अवस्थेत ठेवलेल्या मूल्यांमुळे प्रवेश स्पष्ट होतो — रचना अचानक विस्कळीत दिसत नाही आणि आधुनिक UI चा अनुभव मिळतो.", code: `@starting-style {
  .tab {
    opacity: 0;
    translate: 0 -6px;
  }
}
.tab {
  transition: opacity 0.25s, translate 0.25s;
}`, codeLanguage: "css" },
      { title: "5. कार्ड क्रम", content: "अनेक cards एकाच वेळी दिसल्यास सर्व एकाच क्षणी आल्यासारखे वाटतात; त्यांना क्रमाने (staggered) आणण्यासाठी प्रत्येकाला वेगळा delay द्यावा लागतो. वरील नियम .card च्या entry ला opacity 0 पासून transition 0.3s ने दृश्य बनवतो.\nstaggered अवस्थेसाठी प्रत्येक कार्डाला transition-delay वेगवेगळे मूल्य दिले जाते — पहिल्याला 0.05s, दुसऱ्याला 0.1s असे वाढत जाणारे अंतर.\nहे delay प्रमाणे प्रत्येक कार्ड मागील कार्डापेक्षा थोडे उशिरा दिसते; म्हणून संपूर्ण गट एकदम उडी मारत नाही तर लाटेसारखा उगवतो.\ndelay लहान ठेवल्यास संपूर्ण गट 0.1 ते 0.2 सेकंदांत सुरळीत, सुबक उगवतो.", code: `.card {
  transition: opacity 0.3s;
}
@starting-style {
  .card {
    opacity: 0;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "@starting-style आणि allow-discrete ही नवीन ब्राउझर वैशिष्ट्ये आहेत; जुन्या ब्राउझरला ती समजत नाहीत. म्हणून entry animation आधी @supports ने तपासा.\nवरील नियमात @supports (transition-behavior: allow-discrete) खरी असेल तरच आतील transition नियम लागू होतो. आधार नसेल तर ब्राउझर फक्त मूलभूत transition ने काम करतो — मजकूर दिसेनासा होत नाही.\nअशा रचनेमुळे नवीन ब्राउझरला गुळगुळीत entry मिळते आणि जुन्याला निदान साधी शैली. fallback म्हणून entry अवस्था @keyframes animation नेही चालवता येते.\nनवे वैशिष्ट्य वापरताना ही तपासणी सवय ठेवावी — कोणत्याही ब्राउझरमध्ये वापरकर्त्याला खराब अनुभव मिळू नये.", code: `@supports (transition-behavior: allow-discrete) {
  .box {
    transition: opacity 0.3s, display 0.3s allow-discrete;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात menu उघडण्याची संपूर्ण entry यंत्रणा बनवूया. @starting-style मध्ये .menu ला opacity: 0 आणि transform: scale(0.95) द्या; मग transition नियमात opacity आणि transform दोन्ही 0.2 सेकंदांत सरकू द्या.\nमेनू उघडताच तो लहान आणि अदृश्य असतो, नंतर 0.2 सेकंदात मोठा आणि दृश्य होतो. JavaScript फक्त menu दाखवण्याचे काम करते; रूपात्मक गती CSS सांभाळते.\nबटण दाबून menu बंद-सुरू करून पहा — प्रत्येक वेळी सुरुवात त्या entry अवस्थेतूनच होते. हे तंत्र कोणत्याही dropdown, tooltip किंवा panel वर लावता येते.\n@supports ने आधार तपासून जुने ब्राउझर सुरक्षित ठेवणे येथे आवर्जून करायचे आहे.", code: `@starting-style {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. अक्षर कल्पना", content: "initial-letter हा गुणधर्म परिच्छेदाच्या पहिल्या अक्षराला मोठ्या आकाराची जागा देतो — वृत्तपत्रांतील drop cap सारखा. पूर्वी हा प्रभाव पहिल्या अक्षराला स्वतंत्र span मध्ये टाकून आणि float देऊन साधावा लागत.\nवरील नियमात p::first-letter म्हणजे प्रत्येक परिच्छेदाचे पहिले अक्षर; initial-letter: 3 दिल्याने ते साधारण तीन ओळींच्या उंचीएवढे मोठे बनते.\nब्राउझर ते अक्षर मोठे करतो आणि उरलेल्या ओळी त्याच्या बाजूने नीट बसवतो — रचना आपोआप जुळते. मजकूर वाचताना अशी सजावट आकर्षण निर्माण करते.\nहा गुणधर्म फक्त ::first-letter वर काम करतो म्हणून तो article आणि quote अशा वाचन क्षेत्रांसाठी योग्य ठरतो.", code: `p::first-letter {
  initial-letter: 3;
}`, codeLanguage: "css" },
      { title: "2. आकार थर", content: "initial-letter ला दोन मूल्ये दिली जातात — पहिले अक्षर किती ओळींच्या उंचीचे आणि दुसरे ते जमिनीपासून किती ओळी खाली बसावे. वरील नियमात 2 1 म्हणजे अक्षर दोन ओळी उंच आणि एक ओळ खाली — अशी रचना जुन्या drop cap चे रूप देते.\nदुसरे मूल्य न दिल्यास ब्राउझर अक्षराला पहिल्या ओळीशी चिकटवतो; 1 दिल्यावर ते खाली लटकलेले दिसते आणि पहिल्या ओळींची जागा वाचण्यासाठी मोकळी राहते.\nfont-weight: bold ने ते अक्षर अधिक ठळक होते. baseline ची निर्मिती ब्राउझर आपोआप सांभाळतो म्हणून शेजारील मजकूर नीट बसतो.\nभारदस्त उंची आणि खालची स्थिती एकत्र दिल्यास दृश्य अर्थ स्पष्ट होतो आणि मजकूर वाचनीय राहतो.", code: `p::first-letter {
  initial-letter: 2 1;
  font-weight: bold;
}`, codeLanguage: "css" },
      { title: "3. रंग जोड", content: "drop cap ला रंग आणि पार्श्वभूमी जोडल्यास तो आकर्षक सजावट बनतो. वरील नियमात पहिल्या अक्षराला 2.5 ओळी उंची आणि color #0d9488 म्हणजे हिरवट निळा रंग दिला आहे.\ninitial-letter मध्ये दशांश मूल्येही चालतात — 2.5 म्हणजे दोन ओळींहून अर्धा अधिक, त्यामुळे अक्षराचा आकार नेमका निवडता येतो.\nपहिल्या अक्षराचे स्वरूप वेगळे आणि आकर्षक असल्याने परिच्छेद वाचण्याची सुरुवात विलक्षण दिसते. बाकीचा मजकूर मुख्य नियमाने रंगविला जातो म्हणून drop cap स्पष्ट ठळक राहतो.\ncolor ने सजावटीचा रंग निश्चित होतो; पेजच्या बाकी थीमशी जुळणारा रंग दिल्यास वाचन आनंददायी बनते.", code: `p::first-letter {
  initial-letter: 2.5;
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "4. संयोग नियम", content: "initial-letter केवळ सर्व परिच्छेदांनाच नव्हे, तर विशिष्ट क्षेत्रांनाही वेगळे रूप देतो. वरील नियमात .quote पासून space देऊन p निवडला आहे — म्हणून फक्त quote च्या आतील परिच्छेदाच्या पहिल्या अक्षराला initial-letter: 2 आणि रंग #0d9488 मिळतो.\nहे दृश्य नियंत्रण उपयुक्त आहे: quote च्या ओळींना ठळक सुरुवात मिळते, पण लेखातील बाकी परिच्छेद तसेच राहतात. selector ची खोली वाढवताना लक्षात ठेवा — नियम किती नेमका हे space दाखवतो.\nअशा रीतीने एकाच stylesheet मध्ये लेखाला आणि quote ला वेगवेगळी drop cap शैली देता येते. रचना नेमकी असते आणि वाचकाला तो भेद स्पष्ट दिसतो.", code: `.quote p::first-letter {
  initial-letter: 2;
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. आधार जुना", content: "initial-letter गुणधर्म जुन्या ब्राउझरमध्ये उपलब्ध नाही; तेथे drop cap जुन्या float तंत्राने साधावा. वरील नियमात .drop ला float: left दिला आहे — त्याच्या उजवीकडे मजकूर वाहतो आणि अक्षर डावीकडे राहते.\nfont-size: 3rem ने अक्षर मोठे होते आणि line-height: 1 ने त्याची ओळ घट्ट राखली जाते; margin-right: 8px मुळे मजकूर आणि अक्षर यांच्यात अंतर राहते.\nअशा रीतीने जुन्या ब्राउझरलाही दृश्य drop cap मिळतो — अक्षर मोठे, शेजारच्या ओळीत वाहणारे. आधार नसलेल्या ठिकाणी हा fallback नियम काम करतो.\nमात्र float ने रचना नीट सांभाळावी लागते; त्यामुळे शक्यतवेळी @supports आणि initial-letter यांची जोडणी प्राधान्य द्या.", code: `.drop {
  float: left;
  font-size: 3rem;
  line-height: 1;
  margin-right: 8px;
}`, codeLanguage: "css" },
      { title: "6. सुस्पष्ट माने", content: "drop cap तयार करताना वाचनीयता ध्यानात ठेवावी — पहिले अक्षर केवळ मोठे नको, तर स्पष्टही हवे. वरील नियमात ::first-letter ला रंग #115e59 गडद हिरवा आणि background #ccfbf1 हलकी हिरवट पार्श्वभूमी दिली आहे.\npadding 4px 8px ने रंगीत पट्टीत अक्षराला श्वास घेण्याची जागा मिळते; ती पट्टी दिसल्याने अक्षर उठून दिसते आणि सभोवतालचा मजकूर वेगळा राहतो.\nअशा पट्ट्या वाचन सुधारतात, पण contrast राखणे आवश्यक; गडद मजकूर आणि हलकी पार्श्वभूमी उत्तम जोडी. padding च्या रकमेवरून दृश्य भार बदलतो.\nवेबवर प्रत्येक रंग जोडी contrast नियमांशी संबंधित असते; ही सवय drop cap मध्येही लागू राहते.", code: `p::first-letter {
  initial-letter: 2;
  color: #115e59;
  background: #ccfbf1;
  padding: 4px 8px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "पूर्ण प्रकल्प म्हणजे लेखातील पहिल्याच परिच्छेदाच्या आरंभी drop cap रचणे. वरील नियमात article च्या थेट पहिल्या p ला initial-letter: 2 आणि रंग #0d9488 दिला आहे.\n> हे चिन्ह म्हणजे थेट मुल — फक्त article चा खरा पहिला परिच्छेद निवडतो; आतल्या इतर परिच्छेदांना हा प्रभाव मिळत नाही. असे नियम आरंभ सजवण्यासाठी आदर्श असतात.\nसंपूर्ण लेख वाचताना पहिल्याच ओळीत drop cap ठळकपणे दिसतो आणि बाकी भाग साधा राहतो. ही शैली मराठी लेखांमध्येही नीट बसते.\nआकार आणि रंग बदलून पहा — पहिल्या परिच्छेदाचे स्वरूप तपासताना ब्राउझरची उपलब्धता तपासणी आणि fallback नियम जोडणे आवश्यक आहे.", code: `article > p:first-child::first-letter {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. marker कल्पना", content: "सूचीच्या प्रत्येक item समोर दिसणाऱ्या चिन्हाला ::marker म्हणतात. पूर्वी list च्या चिन्हाचा रंग बदलणे बरेचदा कठीण होते; आता ::marker pseudo-element ने ते थेट नियंत्रित करता येते.\nवरील नियमात li::marker ला color: #0d9488 दिला आहे — सूचीतील सर्व चिन्हे हिरवट निळ्या रंगात उमटतात, प्रत्येक item समोर.\nशैली म्हणून ::marker फक्त मर्यादित गुणांना परवानगी देतो — प्रामुख्याने color, font आणि content असे. त्यामुळे सूचीची चिन्हे वेगळी करणे सोपे आणि स्वच्छ होते.\nअशा रंगामुळे सूचीची चिन्हे ठळक होतात आणि विभागांची ओळख वाचकाला पटकन होते. ही छोटी सजावट मोठा फरक आणते.", code: `li::marker {
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. चिन्ह निवड", content: "::marker मध्ये content गुणधर्म देऊन मूळ चिन्हाला पूर्णपणे बदलता येते. वरील नियमात टिक चिन्हाच्या Unicode मूल्यासह color #0d9488 दिला आहे — म्हणजे सूचीतील प्रत्येक item समोर हिरवट रंगाची टिक खूण दिसते.\ncontent मध्ये असे Unicode मूल्य ठेवून कोणतेही चिन्ह निर्माण करता येते — टिक, ठिपका, तारा, बाण, चौखट असे अनेक पर्याय.\ncolor गुणधर्म त्या चिन्हाचा रंग ठरवतो; म्हणून चिन्हाचे रूप आणि रंग दोन्ही आपल्या हाती येतात — list-style-image सारखे चित्र लावण्याची गरज राहत नाही.\nअशा content रचनेमुळे सूची पेजच्या brand शी जुळते; फक्त ::marker ला आधार देणाऱ्या ब्राउझरमध्ये हे दिसते.", code: `li::marker {
  content: "\\u2713";
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. गट क्रम", content: "nested सूचीत प्रत्येक स्तराला वेगळे चिन्ह देता येते. वरील नियमात ul ul li म्हणजे आतील पातळीतील item निवडतो — त्या चिन्हासाठी भरलेला ठिपका आणि रंग #334155 म्हणजे मध्यम राखाडी दिला आहे.\nबाहेरील सूचीचे चिन्ह तसेच राहते; आतल्या स्तराला स्वतःची खूण मिळते म्हणून पातळी ओळखणे सोपे होते. अशा रचनेत सूची वाचताना खोली स्पष्ट दिसते.\nप्रत्येक स्तर वेगळे चिन्ह असल्याने रचना सुबक दिसते — पहिला स्तर एक चिन्ह आणि आतला दुसरे म्हणून भेद स्पष्ट होतो. हे तत्त्व संयुक्त selector मुळेच शक्य होते.\nअशी खूण-व्यवस्था वाचकाला सूचीचा क्रम आणि अंतर्गत समूह लगेच समजून देते.", code: `ul ul li::marker {
  content: "\\u2022";
  color: #334155;
}`, codeLanguage: "css" },
      { title: "4. काम सूची", content: "कामांच्या सूचीत चौखट चिन्ह अर्थपूर्ण ठरते. वरील नियमात .tasks li::marker ला content मधून रिकामी चौखट दिली आहे — प्रत्येक कामासमोर एक रिकामी चौखट दिसते.\ncolor #334155 ने ती चौखट नीट दृश्यमान राहते. चौखटीच्या खुणेमुळे वाचकाला लगेच समजते की ती यादी पूर्ण करण्यासाठीची आहे — एक व्हिज्युअल संकेत.\ncontent मध्ये मजकुराच्या आधी जागा असेल तर चौखट आणि मजकूर यांच्यात अंतर राहते; अशा छोट्या गोष्टी वाचन आरामात भर टाकतात.\nकाम पूर्ण झाल्यावर चिन्ह बदलण्यासाठी .tasks li.done::marker सारखा नियम लिहिता येतो. ही सजावट पूर्णपणे CSS मध्येच साधली जाते.", code: `.tasks li::marker {
  content: "\\u25a1 ";  /* checkbox */
  color: #334155;
}`, codeLanguage: "css" },
      { title: "5. brand थर", content: "marker च्या माध्यमातून brand व्हिज्युअल आणि संवाद दोन्ही जोडता येतो. वरील उदाहरणात content मध्ये लांब रेषा चिन्ह आणि color #0d9488 हा brand हिरवट निळा रंग आहे.\nhover चा दुसरा नियम li:hover::marker आहे — माउस सूचीच्या item वर गेला की marker चा रंग #115e59 गडद होतो, म्हणजे संवाद दृश्यमान होतो.\nअशा hover बदलामुळे सूची item च्या स्पर्शाची जाणीव होते आणि वाचकाला कुठे आहे ते समजते.\nmarker वर hover नियम चालणे हे pseudo-element च्या क्षमतेमुळे शक्य — साध्या घटकांसारख्या संवाद अवस्था मिळतात. brand आणि संवाद एकत्र केल्यास सूची जिवंत वाटते.", code: `li::marker {
  content: "\\u2014 ";
  color: #0d9488;
}
li:hover::marker {
  color: #115e59;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "::marker जुन्या ब्राउझरमध्ये उपलब्ध नसेल, तर सूचीचा देखावा बिघडू नये म्हणून साधा fallback नियम ठेवला जातो. वरील उदाहरणात li ला padding-left: 4px दिला आहे म्हणून चिन्ह आणि मजकूर यांच्यात जागा राहते.\nजुन्या ब्राउझरमध्ये ::marker दुर्लक्षित होत असला तरी padding मुळे चिन्हांनी गर्दी होत नाही आणि सूचीचा मूळ list-style चिन्ह सामान्य आकारात राहते.\nआणि ::marker समजणाऱ्या ब्राउझरला color #0d9488 चा नियम लागू होतो. अशा रीतीने दोन्ही परिस्थितीत सूची सुबक दिसते.\nfallback नेहमी स्वतंत्र आणि सुरळीत असावा — केवळ नवीन गुणधर्मावर संपूर्ण रूप अवलंबून ठेवू नये.", code: `li {
  padding-left: 4px;
}
li::marker {
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात एका टीप सूचीला तारा चिन्हाची खूण दिली आहे. वरील नियमात .note li::marker ला content मधून पाच-कोनांचा तारा आणि color #0d9488 दिला आहे.\nज्या भागात टीपा, आवर्जून नोंदी किंवा खास माहिती येते, त्या .note सूचीतील प्रत्येक item समोर तारा दिसतो — वाचकाचे लक्ष लगेच तेथे जाते.\ncontent मध्ये मजकुरापूर्वी जागा ठेवल्यामुळे तारा आणि मजकूर यांच्यातील अंतर वाचनासाठी आरामदायी राहते. ही खूण सूचीचा हेतू ओळखण्यात मदत करते.\nmarker ची शैली बदलून ती brand ला जुळवा — अशा छोट्या खुणा संपूर्ण पेजची ओळख मजबूत करतात.", code: `.note li::marker {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. आंतरिक थर", content: "साधारणपणे block घटक उपलब्ध पूर्ण रुंदी घेतो, पण काही घटक फक्त स्वतःच्या content इतकीच रुंदी घ्यावीत असे वाटते — badge किंवा टीप यांसारखे. width: fit-content ने घटक त्याच्या content नुसारच आकार घेतो.\nवरील नियमात .badge ला fit-content दिला आहे; त्यामुळे मजकूर कितीही लहान असला तरी badge ची रुंदी त्याच्याइतकीच राहते आणि तो पूर्ण ओळ व्यापत नाही.\nआणखी फायदा — घटक मध्यभागी बसवायचा असेल तर margin च्या सोबत हा आकार छान चालतो. fit-content ही लहान घटकांसाठी सुरक्षित, सोपी रुंदी निवड आहे.\ncontent जितका मोठा तितकी रुंदी वाढते; मजकूर किमान जागा घेतो आणि रचना बिघडत नाही.", code: `.badge {
  width: fit-content;
}`, codeLanguage: "css" },
      { title: "2. min-content", content: "min-content म्हणजे content ला जागा देणाऱ्या सर्वांत कमी रुंदी — जिथे घटकाची रचना अजून बसते ती मर्यादा. वरील नियमात .wide ला width: min-content दिली आहे, त्यामुळे घटक कमीत कमी जागेत बसतो.\nलांब शब्द तुटून दिसत नाहीत; ब्राउझर प्रत्येक शब्दाला आवश्यक ती रुंदी देतो. अशी रुंदी column किंवा grid च्या ट्रॅकला जागा देण्यासाठी उपयुक्त — पातळ स्तंभ हवा असेल तेव्हा.\nपण एखादा लांब शब्द असेल तर तो घटकाचा आकार मोठा करतो; म्हणून min-content वापरताना overflow संभाळावा लागतो.\nअशा संदर्भात content प्रमाणे घटक संकोचून बसतो हे समजून घेण्यासाठी प्रयोग करा — कमी रुंदीची जाणीव होते.", code: `.wide {
  width: min-content;
}`, codeLanguage: "css" },
      { title: "3. max-content", content: "max-content म्हणजे content ची संपूर्ण ओळ एकाच ओळीत बसवण्यासाठी आवश्यक असलेली रुंदी — घटकाला ओळ तोडावी लागत नाही. वरील नियमात .row ला width: max-content दिला आहे.\nlabels आणि चिन्ह असे घटक संपूर्ण मजकूर एकाच ओळीत दाखवतात; max-content ने ब्राउझर त्याची रुंदी content नुसार अचूक ठरवतो.\nमग खिडकी अरुंद असेल तर उपलब्ध जागा पुरणार नाही — content बाहेर धावतो; म्हणून संयोगात max-width नियंत्रण देते. वरील tooltip भागात तेच संगम दिसते.\nहे महत्त्वाचे आहे कारण content ला पुरेशी जागा मिळत असल्याने ओळी मोकळ्या राहतात आणि रचनेची रुंदी content नुसार स्वयं ठरते.", code: `.row {
  width: max-content;
}`, codeLanguage: "css" },
      { title: "4. बटण आकार", content: "बटण हे fit-content साठी सर्वांत उत्तम उदाहरण — त्यांनी स्वतःच्या मजकुराइतकीच रुंदी घ्यावी, संपूर्ण ओळ नको. वरील नियमात button ला width: fit-content आणि padding: 8px 16px दिला आहे.\nfit-content ने प्रत्येक बटण आपल्या label नुसार आकार घेतो — लहान label लहान बटण, मोठे label मोठे बटण. padding ने आतील जागा मिळते म्हणून मजकूर किनारीला चिकटत नाही.\nअनेक बटणे शेजारी असल्यास fit-content मुळे ती वेगवेगळ्या रुंदीची दिसतात; तीच नैसर्गिकता इच्छित असते.\nआकार न ठरवता content वरून घेणे सुरक्षित आहे — font वाढला तरी बटण आपोआप मोठे होते आणि मजकूर कधीही कापला जात नाही.", code: `button {
  width: fit-content;
  padding: 8px 16px;
}`, codeLanguage: "css" },
      { title: "5. tooltip थर", content: "tooltip चा आकार विविध असू शकतो — लहान शब्द किंवा लांब वाक्य. वरील नियमात .tip ला width: max-content दिली आहे म्हणून तो आपल्या content नुसार रुंद होतो.\nपण खूप लांब मजकुरात tooltip संपूर्ण स्क्रीन व्यापेल; म्हणून max-width: 240px ठेवली आहे. या दोन्ही मूल्यांमुळे सीमा निश्चित राहते — content कमी असेल तर त्याच्याइतकीच रुंदी.\nmax-content मुळे tooltip एकाच वाक्यात राहतो आणि max-width मुळे ओळी बाहेर वाहणे मर्यादित होते.\nअसा संयोग tooltip, टीप, badge अशा तरल घटकांसाठी आदर्श — कोणताही आकार अचानक विस्कळीत होत नाही.", code: `.tip {
  width: max-content;
  max-width: 240px;
}`, codeLanguage: "css" },
      { title: "6. संदेश थर", content: "chat bubble च्या रुंदीचे नियम खास आहेत. वरील नियमात .bubble ला width: fit-content म्हणजे मजकुराइतकी रुंदी; पण अगदी लहान मजकूर घटक घट्ट करू नये म्हणून min-width: min-content देखील जोडली आहे.\nम्हणजे बबल content नुसार संकोचतो पण सर्वांत लांब शब्दाच्या रुंदीपलीकडे छोटा होत नाही. प्रत्येक संदेशासाठी रुंदी आपोआप नवी बनते.\nओळींची रचना स्थिर राहते आणि बबलचा आकार कधीही विस्कळीत होत नाही. अशा जोडणीत कमाल आणि किमान दोन्ही टोकांचे नियंत्रण मिळते.\nफार काळजी न करता content नुसार बबल बसतो आणि overflow टाळला जातो — हे intrinsic sizing चे खरे सामर्थ्य आहे.", code: `.bubble {
  width: fit-content;
  min-width: min-content;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात एका बटणाला स्वयं-आकाराची रुंदी दिली आहे. .btn ला width: fit-content असल्याने तो मजकुराइतकाच रुंद राहतो आणि संपूर्ण ओळ व्यापत नाही.\nborder-radius: 8px ने कोपरे गोल होतात म्हणून बटण आकर्षक दिसते. label लहान असेल तर लहान बटण, मोठे असेल तर मोठे — आकार आपोआप ठरतो.\nही रचना grid किंवा flex मध्ये नीट बसते; शेजारच्या घटकांना अडथळा न करता बटण त्याच्या content भोवती सुबक बसते.\nहा intrinsic sizing चा पाया आहे — घटक स्वतःचा आकार content नुसार घेतो आणि अतिरिक्त नियंत्रणाची गरज राहत नाही.", code: `.btn {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. दांडी कल्पना", content: "मर्यादित रुंदीच्या खोक्यात लांब मजकूर बसत नाही; तेव्हा शेवटी तीन ठिपके (ellipsis) दाखवण्याची रीत text-overflow ने मिळते. पण तो गुणधर्म एकटा काम करत नाही — त्याला दोन साथी आवश्यक आहेत.\nवरील नियमात white-space: nowrap मुळे मजकूर एकाच ओळीत राहतो, overflow: hidden मुळे खोक्याच्या बाहेरला भाग लपतो आणि text-overflow: ellipsis मुळे शेवटी तीन ठिपके दिसतात.\nअशी रचना title, नावे आणि निवडी अशा एका-ओळीच्या मजकुरांसाठी आदर्श — खोक्याच्या आकारातच बसल्यासारखे दाखवले जाते आणि सर्व माहिती जागेत सामावते.\nया तिन्ही गुणधर्मांचा संगम म्हणजे अचूक दांडी व्यवस्था; त्यातील एक कमी पडलासुद्धा उरलेले काम नीट होत नाही.", code: `.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "2. ओळी मर्यादा", content: "कधी मजकूर दोन-तीन ओळींत मर्यादित ठेवावा लागतो — ellipsis फक्त एका ओळीसाठी चालतो. line-clamp ने अनेक ओळींची मर्यादा साधली जाते आणि शेवटी ठिपके दिसतात.\nवरील नियमात display: -webkit-box, -webkit-box-orient: vertical आणि -webkit-line-clamp: 2 असे तिन्ही एकत्र आहेत; overflow: hidden ने उर्वरित भाग लपतो. हीच मर्यादेची पूर्ण सवय आहे.\nline-clamp ची रक्कम वाढवल्यास कार्ड किंवा तुकड्याचे वर्णन मर्यादेत राहते; वाचकाला पूर्ण मजकूर दुव्याने वाचता येतो.\nनवीन ब्राउझरमध्ये सरळ line-clamp मूल्यही चालते; पण स्थिर हाताळणीसाठी वरील विस्तारित रचना अजूनही सुरक्षित आहे.", code: `.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`, codeLanguage: "css" },
      { title: "3. मथळा थर", content: "मथळ्यांची रुंदी कधीही मर्यादित असते — card च्या grid मध्ये, साइडबारमध्ये. वरील नियमात .title ला white-space: nowrap आणि overflow: hidden दिले आहेत; त्यामुळे लांब शीर्षक एकाच ओळीत राहते.\ntext-overflow: ellipsis मुळे ओळ संपली की शेवटी दांडी दिसते; वाचकाला समजते मजकूर चालू आहे पण जागा संपली. हा नियम इथे भूमिका पार पाडतो.\nमथळ्यांच्या रचनेत ellipsis योग्य निर्णय — नाव कापून न दाखवता दांडीच्या खुणेने मर्यादा दिसते. hover वर पूर्ण मजकूर विशेष साधनातून दिसू शकतो.\nभाग जागा नीट बसते, रचना ढळत नाही आणि प्रत्येक मथळा एकाच उंचीवर दिसतो.", code: `.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "4. कार्ड ओळी", content: "कार्डच्या वर्णनाला अनेक ओळींपुरती मर्यादा दिली जाते. नवीन ब्राउझरमध्ये सरळ line-clamp गुणधर्म उपलब्ध आहे; वरील नियमात .desc ला line-clamp: 3 दिला आहे म्हणून तीन ओळींनंतर शेवटी दांडी दिसते.\n@supports ने आधी तपासणी केली आहे — line-clamp समजणाऱ्या ब्राउझरलाच आतला नियम मिळतो. जुन्या ब्राउझरमध्ये संपूर्ण मजकूर दिसतो किंवा स्वतंत्र fallback नियम लागतो.\nअनेक कार्ड एकाच रुंदीत असल्यास प्रत्येक वर्णन तीन ओळींत राहते म्हणून grid चे रूप एकसमान दिसते.\nही मर्यादा वाचकालाही मदत करते — प्रत्येक कार्ड short, ठोस माहिती दाखवते आणि पूर्ण मजकूर वाचण्यासाठी दुवा मिळतो.", code: `@supports (line-clamp: 2) {
  .desc {
    line-clamp: 3;
  }
}`, codeLanguage: "css" },
      { title: "5. आधार जुना", content: "जुन्या ब्राउझरमध्ये line-clamp नाही; तेव्हा height आणि overflow ने ही ओळ मर्यादा साधली जाते. वरील नियमात .desc ला height: 4.5em दिला आहे — line-height प्रमाणे जो भाग या उंचीत बसत नाही तो लपतो.\noverflow: hidden सोबत height चा उपयोग असा की उंचीपलीकडे गेलेला मजकूर एकदम कट होतो — कधीकधी अर्धे अक्षर टेकलेले दिसते.\nअशा fallback पद्धतीत वाचकाला मजकूर कापल्याची थोडी जाणीव होते; म्हणून height नेहमी line-height च्या गुणकाने द्यावी आणि अचूक जुळणी ठेवावी.\nहा fallback मूळ पद्धत नव्हे, पण line-clamp न समजणाऱ्या ब्राउझरसाठी काम चालवतो — स्वीकार्य आणि सुरक्षित उपाय आहे.", code: `.desc {
  overflow: hidden;
  height: 4.5em;
}`, codeLanguage: "css" },
      { title: "6. clip नियम", content: "overflow: clip म्हणजे घटकाच्या काठापलीकडे गेलेला सर्व भाग मर्यादित करणे. सामान्य overflow: hidden प्रमाणे तो content कापतो, पण फरक असा की clip मध्ये स्क्रोलबार निर्माण होत नाही.\nहा गुणधर्म तेव्हा उपयोगी ठरतो जेव्हा आतला content जाणूनबुजून आकाराबाहेर जातो पण स्क्रोल करण्याचा पर्याय नको — उदा. निश्चित रुंदीच्या पट्ट्यातील सजावट.\nवरील नियम .box वर एकटा असल्यास content किनाऱ्यावर कट होतो; overflow: clip हे अधिक स्पष्ट आणि अंदाजी वर्तन आहे.\nscrollable हवे असेल तेव्हा hidden आणि clip मधील निवड महत्त्वाची — clip मुळे स्क्रॉल नको हेच ब्राउझरला स्पष्ट कळते; अशी स्वच्छ व्यवस्था रचनेत जोडली जाते.", code: `.box {
  overflow: clip;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रकल्पाचा हेतू — एका मथळ्याला एकाच ओळीत दांडी व्यवस्था देणे. .card-title ला white-space: nowrap दिल्याने मजकूर एका ओळीत राहतो; overflow: hidden ने बाहेरला भाग लपतो आणि text-overflow: ellipsis ने शेवटी दांडी येते.\nजास्त लांब शीर्षक असले तरी कार्ड चौकट तशीच राहते — दांडीमुळे मजकूर कमी झाल्याची जाणीव होते.\nहे तिन्ही नियम एकत्र मिळून सोपी आणि विश्वासू रचना तयार करतात; प्रत्येक मथळा आपल्या खोक्यात नीट बसतो.\nमोबाइल किंवा अरुंद रुंदीवरही हीच रचना चालते — एक ओळ, दांडी आणि स्थिर उंची हे तीनच गुणधर्म पुरेसे असतात.", code: `.card-title {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. रेषा थर", content: "text-decoration यापुढे फक्त underline दाखवत नाही — त्याची जाडी स्वतंत्ररीत्या नियंत्रित होते. वरील नियमात .link ला underline दिली आहे आणि text-decoration-thickness: 2px ने ती रेषा नेमक्या जाडीची केली आहे.\nपूर्वी रेषेची जाडी ब्राउझरच्या font नुसार ठरत असे; आता ती अचूक दिली जाऊ शकते. नेव्हिगेशनमधील दुव्यांसाठी अशी ठोस जाडी ओळख सुधारते.\nजाडी वाढवताना रेषा मजकुरासोबत घट्ट येते; अतिशय जाड रेषा लहान अक्षरे गच्च करू शकते म्हणून मोजून वापरावी.\nthickness आणि दुव्याची ओळख एकत्र आल्यावर underline स्पष्ट आणि सुसंगत दिसते — हा गुणधर्म सुरुवातीचा पाया आहे.", code: `.link {
  text-decoration: underline;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
      { title: "2. अंतर थर", content: "underline आणि मजकूर यांच्यातील अंतर text-underline-offset ने नियंत्रित होते. वरील नियमात ते अंतर 4px दिले आहे आणि रेषेची जाडी 2px — अशी जोडी मजकुराला स्पष्ट दिसते.\nरेषा अक्षराला चिकटलेली असेल तर खालच्या भागाचे वाचन बिघडते; offset जास्त दिल्यास रेषा मजकुराच्या थोडी खाली जाते आणि खाली लटकणाऱ्या अक्षरांना जागा मिळते.\nमोठ्या font साठी offset अधिक, लहान साठी कमी — प्रत्येक आकारात दुवा स्वच्छ राहतो. रेषेचे अंतर आणि जाडी एकत्र ठरवल्याने वाचन आरामात होते.\nयोग्य अंतर राखून underline मजकूर झाकत नाही आणि दुवा सुसंगत दिसतो — हा संयोग नेहमी लक्षात ठेवावा.", code: `.link {
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
      { title: "3. रंग नियम", content: "underline चा रंग मजकुराच्या रंगापेक्षा वेगळा ठेवता येतो — text-decoration-color ने. वरील नियमात .link ची रेषा #0d9488 या हिरवट निळ्या रंगाची आणि जाडी 2px आहे.\nउदा. गडद मजकुरावर हलकी रंगीत रेषा दिसल्यास मजकूर आणि रेषा दोन्ही नजरेस येतात. हा वेगळा रंग brand ला जुळतो आणि दुवा आकर्षक ठरतो.\nमजकुराचा रंगही वेगळा हवा असेल तर color आणि text-decoration-color दोन्ही स्वतंत्र लिहावे. रेषेच्या रंगाने highlight सूचना मिळते.\nअसे रंग नियंत्रण उपलब्धतेसाठी महत्त्वाचे — फक्त रंगाच्या आधारे दुवा ओळखता येणाऱ्या वापरकर्त्यांखेरीज जोडी राखली जाते.", code: `.link {
  text-decoration-color: #0d9488;
  text-decoration-thickness: 2px;
}`, codeLanguage: "css" },
      { title: "4. खाली रेषा", content: "underline सामान्यपणे baseline पातळीवर किंवा त्याच्या जवळ येते — खाली लटकणाऱ्या अक्षरांची टोके कधीकधी ती ओलांडते. text-underline-position: under दिल्यास रेषा जमिनीच्या आधारे खाली बसते जिथे अक्षरांची टोके संपतात.\nवरील नियम .link साठी अशी नेमकी स्थिती देतो; देवनागरीसारख्या लिपींत आणि तिरप्या मजकुरात हा फरक मोठा असतो.\nखालची रेषा मजकुरावर न पडता त्याच्या खाली राहिली की अक्षरांचे रूप पूर्ण दिसते आणि दुवा ओळखणे सोपे होते.\nbaseline वर रेषा ठेवण्यापेक्षा under निवड योग्य आहे कारण त्यामुळे दुव्याचे रूप घट्ट राहते आणि मजकूर कधीही झाकला जात नाही.", code: `.link {
  text-underline-position: under;
}`, codeLanguage: "css" },
      { title: "5. वाचन शैली", content: "नेव्हिगेशन किंवा लेखातील दुवे एकाच रीतीने ठेवण्यासाठी base नियम योग्य — वरील नियमात सर्व a ला text-decoration-thickness: 2px आणि text-underline-offset: 3px दिले आहेत.\nप्रत्येक ठिकाणी रेषा सारखी दिसते म्हणून दुव्यांची ओळख वाचकाला होते — रेषा कधी जाड, कधी पातळ होत नाही.\nअसे base नियम वारशाने सर्व घटकांना मिळतात; संपूर्ण पेजवर एक संतुलित अधोरेख राहिल्याने रचना शुद्ध दिसते.\nfont मोठा-लहान होण्यातही offset स्थिर ठेवल्यास रेषा मजकुराशी जुळलेली राहते; प्रत्येक दुवा स्पष्ट अधोरेखित आहे — नियंत्रण सोपे होते.", code: `a {
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "6. संवाद थर", content: "कधी रेषा सुरुवातीला न ठेवता hover वर दाखवणे उत्तम — सर्व दुवे शांत असतात व वाचक माउस दुव्यावर घेतो तेव्हाच underline दिसते. वरील नियमात .link ची मूळ अवस्था text-decoration: none आहे.\nhover नियमात underline आणि offset 3px जोडला आहे; म्हणून स्पर्शाच्या क्षणी रेषा स्पष्ट उमटते आणि दुवा ओळखणे सोपे होते.\nkeyboard वापरकर्त्यांसाठी फोकसवरही अशीच सूचना हवी — केवळ hover वर अवलंबून ठेवू नये. ही संवाद शैली वाचताना गोंधळ टाळते.\nउपयुक्ततेसाठी रेषा स्पर्श झाल्यावर दिसते — एकच दुवा अनेक interactiv अवस्थांना सांभाळतो आणि दृश्य स्पष्टता राहते.", code: `.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात एका nav च्या सर्व दुव्यांना स्पष्ट अधोरेख दिला आहे. वरील नियमात .nav a ला text-decoration-thickness: 2px आणि text-underline-offset: 4px दिले आहेत.\nप्रत्येक दुव्याची रेषा जाड आणि मजकुरापासून चांगल्या अंतरावर असल्याने दुवा ओळखणे सहज होते — वाचकाला कुठे क्लिक करायचे हे स्पष्ट दिसते.\nthickness आणि offset यांची ही स्थिर जोडी nav मधून सातत्य आणते; कुठलीही रेषा मजकूर झाकत नाही.\nफोकस अवस्थेतही रेषा स्पष्ट ठेवल्यास keyboard वापरकर्त्यांसाठी दुवा दिसत राहतो — संपूर्ण nav उपलब्ध आणि स्वच्छ दिसतो.", code: `.nav a {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. appearance कल्पना", content: "प्रत्येक ब्राउझर form घटकांना स्वतःचे रूप देतो — select चा मूळ arrow, checkbox ची बॉक्स रचना. appearance हा गुणधर्म ते ब्राउझर-विशिष्ट रूप काढून टाकतो.\nवरील नियमात select ला appearance: none दिला आहे; त्यानंतर मूळ arrow दिसत नाही आणि घटक आपल्या background, border, padding च्या नियमांनी सुशोभित होतो.\nselect मधून arrow गेला की खाली दिशा दाखवणारी खूण हरवते; त्यामुळे स्वतःची खूण जोडावी लागते. appearance हे घटकाचे रूप हाती घेण्याचे पहिले पाऊल आहे.\nहे गुणधर्म वापरताना form ची उपलब्धता जपावी — मूळ रूप काढताना त्याचा हेतूसुद्धा समजून घेणे आवश्यक.", code: `select {
  appearance: none;
}`, codeLanguage: "css" },
      { title: "2. checkbox थर", content: "checkbox चा रंग बदलण्यासाठी त्याची संपूर्ण पुनर्निर्मिती करण्याची गरज नाही — accent-color फक्त मूळ रंग बदलतो. वरील नियमात checkbox ला #0d9488 रंग दिला आहे.\ncheckbox चा बॉक्स आणि निवडलेल्या वेळची खूण दोन्ही या रंगात दिसतात. घटकाची अंतर्गत रचना ब्राउझर सांभाळतो, फक्त रंग आपल्या निवडीचा लागतो.\naccent-color हा सोपा मार्ग आहे — नेटिव्ह रूप टिकते, कार्य स्थिर राहते आणि brand रंग पेजशी जुळवला जातो.\nसुसंगत रंगामुळे form ची सुस्पष्टता वाढते; माउस आणि keyboard दोन्ही प्रकारच्या वापराला हेच नेटिव्ह रूप अनुकूल असते.", code: `input[type="checkbox"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. range नियम", content: "range चा स्लायडर मूळ रूपात राखताना त्याला brand रंग द्यायचा असेल तर accent-color योग्य. वरील नियमात range ला #0d9488 दिला आहे.\nस्लायडरची रेषा आणि हलणारा घुटका दोन्ही या रंगाचे दिसतात — घटक मूळ आहे पण पेजच्या रंगसंगतीशी जुळलेला.\nअर्थ आणि आकार यांची स्पष्टता राखण्यासाठी स्लायडरला नीट आकारही ठेवावा; रंग निर्णय याहून वेगळा असतो.\naccent-color ने कमीत कमी शैलीखर्चात form ची दृश्यता सुधारते — हा गुणधर्म अनेक घटकांना एकाच रीतीने रंग देतो.", code: `input[type="range"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "4. custom select", content: "select ला संपूर्ण custom रूप हवे असेल तर appearance: none सोबत border, padding आणि radius जोडतात. वरील नियमात .custom ची किनार 1px solid #0d9488 आणि कोपरे 8px गोल आहेत.\npadding: 8px 12px मुळे मजकूर आत सुखासीन बसतो; वेगवेगळ्या घटकांची उंचीही समान दिसते. arrow स्वतः जोडावा लागतो म्हणून select ची उपलब्धता विसरू नये.\nअसा custom select ब्राउझरच्या मूळ रूपापेक्षा वेगळा आणि पेजच्या डिझाइनशी जुळणारा बनतो. असे घटक सर्व form मध्ये सातत्य आणण्यास मदत करतात.\nएकाच नियमाने अनेक select चे रूप बदलता येते — रचना नेटकी आणि शैली सर्वत्र समान राहते.", code: `.custom {
  appearance: none;
  border: 1px solid #0d9488;
  border-radius: 8px;
  padding: 8px 12px;
}`, codeLanguage: "css" },
      { title: "5. फोकस थर", content: "keyboard वापरकर्त्यांना focus स्थिती दिसली पाहिजे — :focus-visible हा selector तेव्हा सक्रिय होतो जेव्हा घटक keyboard किंवा अशा साधनांनी निवडला जातो. वरील नियमात .custom ला focus वर outline 2px solid #0d9488 दिली आहे.\noutline-offset: 2px मुळे रेघेचा थर सीमेपासून थोडा बाहेर राहतो; या अंतरामुळे रेघ अधिक स्पष्ट दिसते. घटक keyboard निवडीने लगेच ओळखता येतो.\nनिवड ही केवळ रंगांवर आधारित नसावी — स्पष्ट खूण असावी; उदा. डिझाइनच्या रंगाशी घट्ट विरोध करणारा outline.\nअसा focus ring सहज दिसतो आणि उपलब्धतेचे मार्गदर्शन पाळतो; थीम कोणतीही असली तरी दृश्य स्पष्ट राहते.", code: `.custom:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "6. font संदेश", content: "form घटकांचा font सामान्यपणे ब्राउझरचा असतो आणि पेजच्या font पेक्षा वेगळा दिसतो. वरील नियमात input, select, textarea आणि button या सर्वांना font: inherit दिला आहे म्हणून ते पालकाकडूनच font घेतात.\nयामुळे labels आणि form घटक एकाच रीतीचे दिसतात — साइटची स्वतःची टायपोग्राफी सर्वत्र राखली जाते.\nfont: inherit हा संक्षिप्त नियम size, weight आणि family सर्व घेऊन जातो म्हणून प्रत्येक घटक मजकुराचा एकच प्रकार वापरतो.\nकोणत्याही अतिरिक्त शैलीशिवाय रचना एकरूप दिसते; ही छोटी सवय form च्या डिझाइनला मोठा फरक देते.", code: `input,
select,
textarea,
button {
  font: inherit;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात संपूर्ण form ला सुसंगत रूप दिले आहे. वरील नियमात input, select आणि textarea ला समान background, 1px किनार, 8px कोपरे आणि font: inherit दिला आहे.\nएका वर्गातील नियमाने सर्व फील्ड एकसारखे दिसतात — रुंदी, उंची आणि रेघ प्रत्येक घटकात जुळते. वापरकर्त्याला form नियोजित आणि महत्त्वाचा भाग जाणवतो.\ncheckbox आणि range साठी accent-color ने brand रंग जोडला; select चा arrow appearance: none करून custom जोडला जातो. focus वर दृश्य ring keyboard वापरकर्त्यांना मदत करतो.\nहा form नीट दिसण्याबरोबर वापरायलाही सोपा बनतो — उपलब्धता आणि रूप एकत्र साधले जाते.", code: `select,
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. scripting नियम", content: "पेजमध्ये JavaScript सक्रिय आहे का ते scripting media query तपासते. वरील नियमात @media (scripting: enabled) खरे असेल तरच .js ला display: block मिळतो; JavaScript उपलब्ध असल्यास मागणीच्या .js घटकांना रूप दिसते.\nJavaScript चालू नसेल तर त्या घटकांना display none राहते — म्हणजे मूळ स्वरूपातच सुसंगत वर्तन दाखवता येते.\nअशा रीतीने स्क्रिप्टेड आणि नॉन-स्क्रिप्टेड दोन्ही अवस्थांसाठी वेगवेगळ्या शैली बनतात. केवळ रचना गरजेसारखी बदलता येते.\nदृश्य सुस्थिती म्हणून हा नियम उपयुक्त — JavaScript नसतानाही वापरकर्त्याला काही दिसते आणि असताना समृद्ध रूप अधिक दिसते.", code: `@media (scripting: enabled) {
  .js {
    display: block;
  }
}`, codeLanguage: "css" },
      { title: "2. pointer थर", content: "pointer media query ने सूचक यंत्राचा प्रकार कळतो — pointer: fine म्हणजे माउससारखे अचूक यंत्र. वरील नियमात @media (pointer: fine) ला सर्वात अचूक सूचक — माउस किंवा ट्रॅकपॅड चालत असेल तर .tiny चा cursor pointer होतो.\n.cursor बदलामुळे त्या घटकावर क्लिक शक्य आहे हे दृश्यमान होते; touch डिव्हाइसवर such pointer ची खूण कधी दिसत नाही म्हणून कोर्सर बाह्य सूचकांसाठी ठेवतात.\nफरक म्हणून pointer हे सर्वांत अचूक यंत्र पाहतो — hoverable प्रभाव मिळतो की नाही हे ठरवण्यास मदत होते.\nमाउसवर अशा सूचकांची जोडणी उपयोगी; touch वाल्यांना हे चिन्ह नेहमी वाचण्याची गरज नाही.", code: `@media (pointer: fine) {
  .tiny {
    cursor: pointer;
  }
}`, codeLanguage: "css" },
      { title: "3. touch साठी", content: "any-pointer: coarse म्हणजे टचसारखे गर्द यंत्र तरी एकवटा उपलब्ध आहे — अचूक माउस असला तरी hi scope किंवा स्क्रीन टच मोजतो. वरील नियमात अशा परिस्थितीत button ची किमान उंची 48px धरली आहे.\nटच घटकांना स्पर्श करण्यासाठी मोठी जागा मिळते — बोट नेमके दाबता येते आणि चुकीचे दाबणे टाळले जाते. ही दृश्य ओळख स्पर्श वापरासाठी महत्त्वाची.\nany-pointer वापरल्याने मिश्र परिस्थितीही सांभाळली जाते — एकाच पेजवर माउस आणि टच दोन्ही असल्यास तरी मोठे बटण सुरक्षित ठरते.\nमोठी उंची स्पर्श वापरात आराम देते; छोट्या पडद्यावर साधनांची उपलब्धता निश्चित होते.", code: `@media (any-pointer: coarse) {
  button {
    min-height: 48px;
  }
}`, codeLanguage: "css" },
      { title: "4. hover नियम", content: "hover: hover तपासतो की सूचक घटकावर ठेवता येतो का — माउस आणि अनेक ट्रॅकपॅड होकार देतील. वरील नियमात अशा परिस्थितीत .item:hover ची पार्श्वभूमी #ccfbf1 बनते.\nमाउस ज्या घटकावर असेल तो हलका रंगाने ठळक दिसतो — माऊसचा प्रवास वाचकाला कळतो. hover शक्य नसलेल्या घटकावर हे नियम अर्थहीन होतात.\nhover पर्याय touch वर अवलंबून राहतो — स्पर्शाने hover ची स्थिती टिकत नाही म्हणून असे प्रभाव योग्य यंत्रांनाच देतात.\nपुढील पडद्यावर हा संवाद स्पष्ट आहे; तंत्र आकर्षक वाटत असले तरी touch वर स्थिर राहतो.", code: `@media (hover: hover) {
  .item:hover {
    background: #ccfbf1;
  }
}`, codeLanguage: "css" },
      { title: "5. अंधार नियम", content: "prefers-color-scheme: dark म्हणजे साधन dark mode मध्ये आहे — वापरकर्त्याच्या थीम प्राधान्यानुसार ठरते. वरील नियमात अशा परिस्थितीत body ची पार्श्वभूमी #0f172a होते.\nस्वतःची गडद रंगसंगती पेजवर लावता येते; मजकूर हलका ठेवून contrast जपल्यास dark mode नीट दिसतो. media सोपा असला तरी रंग संयोजन काळजीचे आहे.\nlight मध्ये पार्श्वभूमी उजळ आणि dark मध्ये गडद राहते — चकाकीने वाचन अवघड होत नाही. पेजच्या प्रत्येक रंगीत भागाला दोन्ही रूपात तपासणे आवश्यक आहे.\nअशा नियमांनी थीम संपूर्णपणे swap होते; वापरकर्त्याचे प्राधान्य प्रमाणभूत राहते.", code: `@media (prefers-color-scheme: dark) {
  body {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "6. contrast थर", content: "prefers-contrast: more ही स्थिती वापरकर्ता दृश्य अधिक तीव्र मागतो — वाचनdifficulti असलेल्या व्यक्तींना मजकूर ठळक हवा असतो. वरील नियमात अशा वेळी body चा मजकूर रंग #000 होतो.\nअतिशय गडद मजकूर हलक्या पार्श्वभूमीवर स्पष्ट ठसतो; contrast वाढवणे वाचन सुलभ करते. ही तपासणी उपलब्धतेचा महत्त्वाचा अंग आहे.\nरंगांतूनच केवळ सूचना नको — मजकूराचा ठसा सुधारून मूलभूत वाचन स्थिर राहते. prefers-contrast वर भर देत probability आवश्यक.\nअशी सजावट दृश्य आराम देते; वापरकर्त्याची मागणी ओळखून रूप बदलले जाते.", code: `@media (prefers-contrast: more) {
  body {
    color: #000;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात टचवर स्वतःचे responsive बटण दिले आहे. वरील नियमात @media (any-pointer: coarse) ला .action ची किमान उंची 48px धरली आहे — टचचा बोट नेमके दाबता येतो.\nफक्त टच असल्यावर ही खूण जोडली जाते; माउस वापरताना सामान्य आकार कायम राहतो. कार्य जाणून घेताना नीट तपासणी करा.\nस्पर्श वापरात आराम मिळतो व दृश्य गोंधळ टाळला जातो. ही साधन-रूप रचना लहान स्क्रीनवर आणखी उपयुक्त ठरते.\nmedia query च्या नियमाने सर्वात लहान पडद्यावरही बटण नीट काम करते आणि संपूर्ण form वर हा आकार लागतो.", code: `@media (any-pointer: coarse) {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. caret रंग", content: "caret-color गुणधर्म टाईपिंग करताना दिसणाऱ्या लहान उभ्या रेषेचा रंग बदलतो. वरील नियमात input आणि textarea दोघांचा caret रंग #0d9488 ठेवला आहे.\nमजकूर आधी टाकलेला आणि नवीन लिहिताना कुठे लिहू या क्षणीची खूण म्हणजे caret. पेजच्या रंगांशी जुळणारा caret लक्ष वेधतो.\nसाधारणपणे caret मजकुराचा रंग घेतो; caret-color ने तो वेगळा केल्यास नेमके स्थान स्पष्ट दिसते. रंग हलका ठेवल्यास गडद ठिकाणीही caret उजळतो.\nफॉर्ममधील वापरकर्त्याला लेखन उमटत असल्याची जाणीव होते — मग तो search बॉक्स असो किंवा संदेश पेट्या.", code: `input,
textarea {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. caret थर", content: "caret-shape गुणधर्म caret चे रूप बदलण्याची सुविधा देतो — underline, block किंवा नेहमीची पातळ रेषा. वरील नियमात input चा caret underline केला आहे म्हणून मजकूर टाकताना खाली रेषा दिसते.\nकाही वापरकर्त्यांना मोठा caret हवा असतो — textarea मध्ये draft मोड international desktop किंवा accessibility साधनांसाठी block रूप अधिक स्पष्ट असते.\nहा पर्याय ब्राउझर आणि वापरकर्ता प्राधान्यांवर भर देतो; caret-shape पूर्णपणे न समजणाऱ्या ब्राउझरमध्ये नेहमीचा caret चालू राहतो.\nलिहिताना उमटणारी ओळ मजकुराचे स्थान निर्धारित करते; विशिष्ट वापरासाठी योग्य रूप निवडल्यास फॉर्म वाचणे आरामात होते.", code: `input {
  caret-shape: underline;
}`, codeLanguage: "css" },
      { title: "3. selection थर", content: "::selection pseudo-element वापरकर्त्याने निवडलेल्या मजकुराची शैली ठरवतो. वरील नियमात सर्व निवडलेल्या मजकुराची पार्श्वभूमी #99f6e4 आणि रंग #134e4a ठेवला आहे.\nमजकूर पार केल्यावर पहिल्यांदा रंग अडखळत नाही — निवड दृश्य ठळक राहते आणि वाचकाला नेमकं काय विजेते आहे ते कळते.\nरंग हलका सुळका आणि गडद मजकूर ही contrast सुरक्षित जोडी आहे; अशी जोडी पेज थीमला अनुकूल बनवली जाते.\nनिवडीचा रंग योग्य असावा, अन्यथा मजकूर वाचेनासा होतो. ही सूक्ष्म शैली वाचनाच्या अनुभवात मोठा फरक आणते.", code: `::selection {
  background: #99f6e4;
  color: #134e4a;
}`, codeLanguage: "css" },
      { title: "4. मथळा निवड", content: "निवडताना मथळ्यांना वेगळा highlight द्यायचा असेल तर घटक-विशिष्ट ::selection नियम लिहितात. वरील नियमात h1::selection ला background #0d9488 आणि color #ffffff दिला आहे.\nमजकूर निवडला की मथळ्याचे अक्षर उलट्या रंगाचे दिसतात — तो भाग ताबडतोब ओळखता येतो. contrast स्पष्ट असल्याने मथळे वाचता येतात.\nसादा ::selection नियमापाठोपाठ-विशिष्ट नियम जर weight किंवा क्रमाने जिंकतो; म्हणून मथळ्यांना स्वतंत्र खूण देताना अन्य निवडी थांबणार नाहीत याची काळजी घ्या.\nअशा निवडी मथळ्याचे महत्त्व जागवतात आणि पार केलेला मजकूर नेटके विश्वासाने दाखवला जातो.", code: `h1::selection {
  background: #0d9488;
  color: #ffffff;
}`, codeLanguage: "css" },
      { title: "5. user-select", content: "कधीही मजकुराची निवड इच्छित नसते — सजावटीचे घटक, लेबल किंवा icon वर दुहेरी-क्लिक करता आल्यास गोंधळ निर्माण होतो. वरील नियमात .decoration ची निवड user-select: none ने थांबवली आहे.\nnone लिहिल्यावर त्या भागावर मजकूर निवडता येत नाही आणि copy उपलब्ध नसते; त्यामुळे सजावटीचा भाग कधीही अडखळत नाही.\nसजावट निवडणे वापरकर्त्याला गोंधळात टाकते — असे भाग काढून ठेवणे आरामदायी. मजकूर असल्यास निवड रोखणे योग्य — परंतु मजकुराच्या ठिकाणी निवड खूप कमी राहावी.\nत्यामुळे खासगी मजकुरासाठी नव्हे, तर केवळ non-text घटकांसाठी हा नियम वापरला जातो.", code: `.decoration {
  user-select: none;
}`, codeLanguage: "css" },
      { title: "6. कॉपी थर", content: "काही घटक असे असतात ज्यांचा संपूर्ण मजकूर एकाच क्लिक/टॅपने निवडावा — अनुक्रमांक, वेब ऍड्रेस किंवा code block. वरील नियमात .copy ला user-select: all दिला आहे.\nall असल्यास मजकुरावर क्लिक केल्यावर संपूर्ण सामग्री निवडली जाते; मग copy करणे सोपे आणि पटकन होते.\nयाचा अर्थ मजकूर नक्कल करण्याची तयारी कायम राहते; शब्द न करता संपूर्ण खंड निवडल्यास चुका टाळतात. अचूक copy हा प्रवेशधारकांचा उपयोग आहे.\nblock मध्ये हे रूप अधिक नैसर्गिक दिसते; अशा निवडीने वापरकर्त्याला वेळ वाचतो आणि ठिकठिकाणी गोंधळ निर्माण होत नाही.", code: `.copy {
  user-select: all;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात form ची caret आणि निवड दोन्ही रंगीत केली आहे. वरील नियमात input चा caret-color #0d9488 आणि ::selection चा background #99f6e4, color #134e4a ठेवला आहे.\nटाईप करता करता caret रंगाचा उमटतो आणि मजकूर निवडल्यावर हलका हिरवट high light दिसतो; दोन्ही खुणा पेजच्या brand थीमशी जुळतात.\nफॉर्म वापरताना कसे वाटते ते पहा — ज्या ठिकाणी लेखन होते ते स्पष्ट आणि रंगीत ओळखले जाते.\nचांगल्या रंग निवडीमुळे फॉर्म जिवंत दिसतो; कोणत्याही text entry घटकावर ही शैली समान रीतीने चालते.", code: `input {
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
    levelLabel: CSS11_LABEL,
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
      { title: "1. थीम खुणा", content: "Level 11 ची उपलब्ध थीम यंत्रणा `:root` वर color-scheme: light dark ने सुरू होते — हे वाक्य ब्राउझरला सांगते की पेज light आणि dark दोन्हीमध्ये दर्शवता येते.\nbody च्या color मध्ये light-dark() दोन मूल्ये घेते — पहिले light मध्ये #1f2937 गडद राखाडी, दुसरे dark मध्ये #f4f4f5 हलका मजकूर. थीम बदलताच मजकूर आपोआप swap होतो.\nअशी टोकन रचना संपूर्ण पेजला एकाच ठिकाणाहून नियंत्रण देते; प्रत्येक घटकाला स्वतंत्र जोडी लिहिण्याची गरज नाही.\nरंग जुळतो आणि थीम सर्वत्र सातत्य राखते — हा सर्व सजावटीचा उपक्रम आधार घेणारा सोपा पाया आहे.", code: `:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#1f2937, #f4f4f5);
}`, codeLanguage: "css" },
      { title: "2. काच थर", content: "हे संपूर्ण पेजचा header ग्लास पद्धतीने सादर करते. .topbar ला position: sticky आणि top: 0 दिल्याने स्क्रोलकाळी तो वर चिकटतो; backdrop-filter: blur(10px) मुळे खालून वाहणारी सामग्री धुसर मऊ दिसते.\nपार्श्वभूमी हलकी पारदर्शक नसली तरी blur प्रभावामुळे topbar च्या मागचे दृश्य दिसत असताना मथळे वाचता येतात.\nहे अर्धपारदर्शी रूप काचेच्या खिडकीसारखी दृश्य गुणवत्ता पेजला देते; संपूर्ण screen वर content वाचन विरळ होत नाही.\nयोग्य blur रक्कम घेतल्यास अडथळा नसतो — म्हणून 10px ही सुरक्षित निवड कोणत्याही header ला शोभते.", code: `.topbar {
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
}`, codeLanguage: "css" },
      { title: "3. entry शैली", content: "menu उघडताना दिसणारी सुरुवात @starting-style मध्ये ठेवली आहे. वरील नियमात .menu आरंभी opacity: 0 आणि transform: scale(0.95) — म्हणजे तो प्रथम अदृश्य आणि थोडा लहान असतो.\nज्या क्षणी menu उघडतो त्या क्षणी transition मर्यादेत opacity आणि transform सरकतात — मेनू लहानावरून मोठ्या, अदृश्यावरून दृश्य बनतो आणि हालचाल सजीव दिसते.\nनिकाल म्हणजे entry प्रभाव सहज नजरेस येतो; कोणतेही animation रीतसर पुन्हा लावण्याची गरज नाही.\nअशी रचना ज्या घटकांना उघडायचे असते त्यांना गुळगुळीत आविर्भाव देते — तंत्र आणि परिसर मिळून रचना सजीव राहते.", code: `@starting-style {
  .menu {
    opacity: 0;
    transform: scale(0.95);
  }
}`, codeLanguage: "css" },
      { title: "4. मथळा सजावट", content: "लेखाच्या पहिल्या परिच्छेदाच्या आरंभी drop cap दिसण्यासाठी सामान्य निवडक आणि initial-letter यांचे संयोजन होते. वरील नियमात .article p:first-of-type::first-letter ला initial-letter: 2 आणि color #0d9488 दिला आहे.\np:first-of-type ने लेखातील पहिला परिच्छेद निवडला आणि ::first-letter ने त्याचे पहिले अक्षर घट्ट केले — मग ते अक्षर दोन ओळींच्या उंचीइतके मोठे बनते.\nरंग #0d9488 ने ते अक्षर इतर मजकुरापासून वेगळे ठळक होते; संपूर्ण लेख वाचताना या सजावटीने आरंभ लक्षणीय दिसतो.\nहे पारंपरिक पुस्तक दिसण्याचे तंत्र वेबवर आधुनिकरीत्या सादर होते — वाचन आकर्षक आणि सुरळीत राहते.", code: `.article p:first-of-type::first-letter {
  initial-letter: 2;
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. सूची नीट", content: "पावले दाखवणाऱ्या सूचीतील प्रत्येक item समोर टिक चिन्ह दिसावे म्हणून ::marker नियम दिला आहे. वरील नियमात .steps li::marker चा content मध्ये टिक चिन्हाचा Unicode कोड आणि color #0d9488 आहे.\ncontent मध्ये मजकुराच्या आधी जागा ठेवल्यामुळे टिक आणि मजकूर यांच्यात अंतर राहते; रंगामुळे प्रत्येक पायरीची समाप्ती हिरवट खुणेने दिसते.\nपायरी योग्य प्रकारे बद्ध असल्याची आणि प्रत्येक टप्पा पूर्ण झाल्याची चिन्हे वाचकाला मिळतात — संदिग्धता राहत नाही.\nब्रँड/रंग सुस्पष्ट ठेवल्यास सूचीचे स्वरूप पेजला जुळते आणि रचना सुबक आणि आकर्षक दिसते.", code: `.steps li::marker {
  content: "\\u2713 ";
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "6. दांडी शैली", content: "मथळ्याची रुंदी मर्यादित असताना शेवटी दांडी दिसावी म्हणून तिन्ही नियम एकत्र लागतात. वरील नियमात .card-title ला overflow: hidden, text-overflow: ellipsis आणि white-space: nowrap दिला आहे.\nnowrap मुळे मजकूर एकाच ओळीत राहतो, overflow: hidden ने खोक्याबाहेरला भाग लपतो आणि ellipsis ने शेवटी तीन ठिपके उमटतात.\nलांब मथळाही कार्ड चौकटीत नीट बसतो — दांडीमुळे मजकूर कमी झाल्याची जाणीव स्पष्ट होते आणि कार्डांचे रूप एकसमान राहते.\nहीच व्यवस्था इतर ठिकाणच्या मथळ्यांसाठीही घेतली जाऊ शकते; नियमांची सवय स्थिर ठेवल्यास रचना नीट दिसते.", code: `.card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "Final Project", content: "शेवटचा प्रकल्प या सर्व interaction घटकांचा जिवंत उपयोग दाखवतो. ::selection च्या नियमाने मजकूर निवडताना पार्श्वभूमी #99f6e4 आणि रंग #134e4a होतो — म्हणजे निवडलेला भाग लगेच ठळक दिसतो.\ncaret, menu entry, drop cap, marker आणि ellipsis — या सर्व Level 11 च्या डिझाइन खुणा एकत्रित केल्या जातात; प्रत्येक तुकडा स्वतंत्रपणे काम करत असला तरी एकत्र रचना संपूर्ण बनते.\nवापरकर्ता टाईप करतो, स्क्रोल करतो, निवडतो आणि सूची वाचतो — प्रत्येक हालचालीस सजीव, सुसंगत रूप मिळते.\nअंतिम परिणाम असा की डिझाइन आणि संवाद एकत्र येऊन अनुभव स्मरणात राहतो; हा संपूर्ण संग्रह पुढील levels ला आधार देतो.", code: `::selection {
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
    levelLabel: CSS11_LABEL,
  },];
