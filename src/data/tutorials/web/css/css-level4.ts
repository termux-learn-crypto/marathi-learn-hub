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
      {
        title: "color-mix — रंग मिश्रण म्हणजे काय?",
        content: "दोन रंगांचे प्रमाण टक्के, spaces आणि थीम रचना.\ncolor-mix ही CSS मधील कल्पना दोन रंग जोडून तिसरा नवा रंग तयार करते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? color-mix — रंग मिश्रण चे फायदे आणि महत्त्व",
        content: "✓ ही सगळी गणना browser मध्येच होते, त्यामुळे कोणत्याही preprocessor किंवा script ची गरज नसते.\n✓ नवा टोक मिळवण्यासाठी गणना करण्याची गरज नाही.\n✓ प्रत्येक रंग दृष्टीने निवडणे महत्त्वाचे, कारण एकच टक्का अनेक ठिकाणी पुन्हा वापरता येतो.\n✓ यामुळे dark theme चा वेगळा कोड लिहण्याची गरज नसते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. मिश्रण कल्पना", content: "color-mix ही CSS मधील कल्पना दोन रंग जोडून तिसरा नवा रंग तयार करते. दुकानात दोन पेंटचे डबे मिसळले की नवा रंग तयार होतो — तोच यामागचा सगळा खेळ.\nटक्के सांगतात कोणता रंग किती प्रमाणात मिसळावा. ही सगळी गणना browser मध्येच होते, त्यामुळे कोणत्याही preprocessor किंवा script ची गरज नसते.\nरंगांची मिळणी म्हणजे एकरंगी पॅलेटची मजबूत पाया. हलके-गडद टोक, hover रंग, सीमा रेषा — सर्व एकाच आधार रंगातून मिळतात.\nनवा टोक मिळवण्यासाठी गणना करण्याची गरज नाही. फक्त दोन रंग आणि टक्के निवडले की browser उर्वरित काम उरकतो. हीच या गुणधर्माची खरी ताकद.", code: `.hero-bg {
  background: color-mix(in srgb, #ff0000 60%, #0000ff);
}`, codeLanguage: "css" },
      { title: "2. टक्के संतुलन", content: "एकाचा टक्का वाढवला की दुसऱ्याचा आपोआप कमी होतो, कारण दोघांची बेरीज नेहमी 100 राहते. हे संतुलन समजले की प्रत्येक मिश्रण अंदाज करणे सोपे जाते.\nसमजा teal 70 टक्के आणि gold 30 टक्के मिसळले, तर तेजस्वी परंतु ओळखण्यासारखे टोक मिळते — प्रमाण बदलल्यास रंगाचा الطाळच बदलतो.\nटक्के म्हणजे नियम सांगण्याची भाषा. हलका रंग हवा असेल तर white ची टक्केवारी वाढवा; गडद टोक हवे असेल तर black जवळ ठेवा.\nप्रत्येक रंग दृष्टीने निवडणे महत्त्वाचे, कारण एकच टक्का अनेक ठिकाणी पुन्हा वापरता येतो. प्रमाणांचा हा खेळ सरावाने नेमका पकडला जातो.", code: `.accent {
  background: color-mix(in srgb, teal 70%, gold 30%);
}`, codeLanguage: "css" },
      { title: "3. रंग space", content: "in srgb हा सर्वात साधा आणि स्थिर रंग space आहे — जुने आणि नवे सर्व browsers तो समजतात. रंग गणितातील सुरुवातीचे घर म्हणून हे योग्य.\nlab आणि oklab मध्ये रंगाची मानवी दृष्टी सुधारते, त्यामुळे मिसळलेले रंग अधिक नैसर्गिक दिसतात. oklab हलका-गडद अंदाज अचूक देतो.\nlch space मध्ये दिशा आणि प्रमाण हे वेगळ्या अर्थाने लिहिता येते — रंगाची पातळी सांभाळत टोक बदलता येते.\nप्रत्येक space चे स्वतःचे अर्थ असतात; मूल्ये one-to-one सारखी नसतात. ब्राउझर समान input वर स्थिर आउटपुट देतो, त्यामुळे तुमचा अनुभव कोणत्याही device वर एकसारखा राहतो.", code: `.mix-lab {
  background: color-mix(in oklab, #10b981 55%, #f59e0b);
}`, codeLanguage: "css" ,
        output: ".mix-lab { background: color-mix(in oklab, #10b981 55%, #f59e0b); }",},
      { title: "4. light-dark()", content: "light-dark() हे फंक्शन color-scheme नुसार दोन रंगांमधून निवड करते. color-scheme: light dark असे लिहिल्यावर browser user च्या थीमला ओळखतो.\nप्रत्येकाला दोन रंग दिले जातात — पहिला light साठी, दुसरा dark साठी. मग browser स्वतः योग्य रंग निवडतो.\nयामुळे dark theme चा वेगळा कोड लिहण्याची गरज नसते. dark अवस्थेत कार्डचा रंग आपोआप फिकट होतो आणि मजकूर वाचता राहतो.\nभाषा बरीच सोपी राहते कारण प्रत्येक property ला फक्त दोनच मूल्ये द्यायची असतात. थीमची ही जोडणी म्हणजे प्रत्येक घटकाचा दुहेरी देखावा बनवण्याचा सोपा मार्ग.", code: `:root {
  color-scheme: light dark;
}
.card {
  color: light-dark(#222, #f3f4f6);
}`, codeLanguage: "css" },
      { title: "5. रंग थीम", content: "थीम बनवताना मुख्य टोक color-mix ने तयार ठेवणे सोयीचे. एक आधार रंग आणि भरपूर टक्के मिळून मुख्य रंग, तर कमी टक्के मिळून गौण रंग तयार होतो.\nउदाहरणार्थ --base हा var() मध्ये ठेवल्यावर white 20 टक्के मिसळून हलका button रंग मिळतो. हीच रचना hover वर आणि बॉर्डरसाठीही वापरता येते.\nकोणतीही दोन मूल्ये बदलून संपूर्ण थीमला नवी दिशा मिळते. त्यामुळे रंग मूल्ये सगळीकडे पसरवण्याऐवजी एकाच ठिकाणी व्यवस्थित ठेवता येतात.\nरंगांची ही सोय सातत्य राखते — प्रत्येक कार्ड, बटण आणि सीमा एकाच कुटुंबातून येते. उत्पादन see योग्य नवीन आणि शिस्तबद्ध दिसते.", code: `.theme-button {
  --base: #6366f1;
  background: color-mix(in srgb, var(--base), white 20%);
}`, codeLanguage: "css" },
      { title: "6. आधार आणि नियम", content: "color-mix चा आधार सर्वत्र नसतो. जुन्या ब्राउझरसाठी नेहमी साधा रंग ठेवा, ज्याने किमान घटक दिसेना Android नाही.\n@supports तपासणी सांगते की color-mix उपलब्ध आहे का. मिळाले तर नवीन नियम लागू होतो; नाही मिळाले तर जुना साधा रंगच राहतो.\nहा progressive enhancement चा पाया आहे — प्रत्येक ब्राउझर त्याला शक्य तितक्या चांगल्या पद्धतीने रेंडर करतो.\nपडद्यावर दोन्ही अवस्था तपासणे महत्त्वाचे: मिक्स केलेला आणि न करता केलेला. समतोल राहिला तर प्रत्येक वापरकर्त्याला समाधानकारक अनुभव मिळतो.", code: `.legacy {
  background: #dbeafe;
}
@supports (color: color-mix(in srgb, red, blue)) {
  .new-card {
    background: color-mix(in srgb, #2563eb 80%, white);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "हे mini project दोन्ही थीम सांभाळते — dark आणि light. color-scheme ने ब्राउझरला सूचना दिली जाते, मग light-dark() ने रंग निवड घडते.\nswatch वर्ग मुख्य टोक #6366f1 वर आधारित oklab मध्ये मिसळला जातो. white च्या टक्क्यांमुळे हलका टिंट तयार होतो.\nआधार रंग निवडून तुम्ही तयार केलेला पॅलेट पहा. थीम बदलली तर रंग आपोआप बदलतात — हीच color-mix आणि light-dark() ची सरावातली योगायोग.", code: `:root {
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
      {
        title: "Relative colors — सापेक्ष रंग म्हणजे काय?",
        content: "channel calculations, from syntax आणि color() function.\nसापेक्ष रंग म्हणजे सध्याच्या रंगातील channel वर आधारित नवा रंग तयार करणे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Relative colors — सापेक्ष रंग चे फायदे आणि महत्त्व",
        content: "✓ यामुळे मॉनिटरच्या क्षमतेचा पूर्ण उपयोग होतो — तेजस्वी लाल, हिरवा आणि निळा अधिक जिवंत दिसतात.\n✓ निवडलेला रंग वाचण्यास स्पष्ट असणे महत्त्वाचे — केवळ सुंदर नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. सापेक्ष रंग", content: "सापेक्ष रंग म्हणजे सध्याच्या रंगातील channel वर आधारित नवा रंग तयार करणे. from नंतर आधार रंग लिहितात आणि शेवटी नवीन मूल्ये देतात.\nकोणत्याही channel व्यवस्थित बदलणे शक्य होते. समजा red घटक कमी करायचा, green वाढवायचा — सर्व नियंत्रणे एका ठिकाणी सापडतात.\nथीममध्ये हे उपयुक्त ठरते, कारण एका आधार रंगातून hover आणि disabled सारखी दृश्ये तयार होतात.\nरंगाची ओळख आणि स्वतःचा कौटुंबिक ठसा राखला जातो. गणना न करता रंग व्यवस्थापन सोपे बनते — हेच या तंत्राचे खरे सामर्थ्य.", code: `.from-mix {
  background: rgb(from #4f46e5 r g b / 80%);
}`, codeLanguage: "css" },
      { title: "2. channel गणना", content: "calc() फंक्शनमध्ये channel ची गणना करता येते. उदाहरणार्थ rgb(from #38bdf8 calc(r * 0.6) g b) मध्ये red channel ला 0.6 ने गुणले जाते.\nप्रत्येक channel चे मूल्य स्वतंत्रपणे बदलता येते; फक्त लाल अंधुक करायचा असेल तर फक्त तो बदलतो. इतर channel तसेच राहतात.\nहलकी सावली आणि गडद टोक अशा प्रकारे एकाच आधारातून मिळतात. घेणे-देणे संतुलित राहते — रंगाचा ओळख राखला जातो.\nchannel गणना ही जटिल दिसते, पण वापर सोपा आहे. malloc वेळी ब्राउझर स्वतः गणना करतो, त्यामुळे आपल्याला फक्त सूत्र लिहायचे असते.", code: `.channel-dark {
  background: rgb(from #38bdf8 calc(r * 0.6) g b);
}`, codeLanguage: "css" },
      { title: "3. color() function", content: "color() फंक्शन हे नवीन रंग spaces मिळवण्याचे प्रवेशद्वार आहे. display-p3 सारखे रुंद space मध्ये sRGB पेक्षा जास्त रंग दर्शवता येतात.\nयामुळे मॉनिटरच्या क्षमतेचा पूर्ण उपयोग होतो — तेजस्वी लाल, हिरवा आणि निळा अधिक जिवंत दिसतात.\ncolor() मध्ये channel नावे स्पष्टपणे लिहिता येतात, उदा. color(display-p3 0.2 0.7 0.6). ही absolute मूल्ये नेहमी स्पष्ट असतात.\nहे function भविष्यातील paint आणि gradient रचनांना तयार ठेवते. आधार आधी तपासा — जेथे शक्य असेल तेथे रंगीत अनुभव वाढवा.", code: `.wide-color {
  color: color(display-p3 0.2 0.7 0.6);
}`, codeLanguage: "css" },
      { title: "4. हलका टोक", content: "from वापरून हलका टोक रंगविणे सोपे आहे. मूळ रंगातील h आणि s तसाच ठेवून फक्त lightness वाढवली जाते.\nhsl(from #facc15 h s calc(l + 20%)) मध्ये पिवळ्या रंगाची कौटुंबिक ओळख राहते, पण टोक हलके होते.\nयामुळे कार्डला एकसमान तोल मिळतो. प्रत्येक घटकाचा रंग एकाच आधारातून आल्याने design cherish आणि शिस्तबद्ध दिसते.\nनिर्णय एका ठिकाणी घेता येतो — आधार रंग बदलला की सर्व टिंट्स नवे रंग घेतात. ही सुसंगतता थीम व्यवस्थापनाला गती देते.", code: `.tinted {
  background: hsl(from #facc15 h s calc(l + 20%));
}`, codeLanguage: "css" },
      { title: "5. अॅक्सेस नियम", content: "सापेक्ष रंग वापरताना contrast ची काळजी घेतली पाहिजे. WCAG मध्ये मजकूर आणि पार्श्वभूमीच्या contrast ची किमान पातळी दिली जाते.\nनिवडलेला रंग वाचण्यास स्पष्ट असणे महत्त्वाचे — केवळ सुंदर नाही. गडद पार्श्वभूमीवर हलका मजकूर, हलक्यावर गडद मजकूर योगायोग नाही देत.\nजुने नियम सुरक्षित का आहेत हे समजण्यासाठी प्रत्येक नवे टोक पडद्यावर तपासा. वाचक किंवा वापरकर्ता प्रत्येक स्थितीत मजकूर वाचू शकतो.\nसमतोल आणि प्रवेश्यता दोन्ही बाबतीत रंग निवड हीच डिझाइनची खरी जबाबदारी — हे गुणधर्म साहाय्य करतात, निर्णय आपला.", code: `.safe-text {
  color: rgb(from #0f172a r g b);
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि fallback", content: "@supports चा वापर केल्यास जुने आणि नवे ब्राउझर दोघेही सुरक्षित राहतात. जुन्या ब्राउझरला साधा रंग दिला जातो, तर नव्याला सापेक्ष रंग.\nmodifier तपासणीसाठी rgb(from red r g b) सारखी किमान syntax वापरली जाते. ती समजली तरच रुंद रंग नियम लागू होतो.\ncolor() फंक्शन हे वेगळ्या ठिकाणी सापडते; display-p3 चा आधार अजून मर्यादित. त्यामुळे तपासणी नेहमी ठेवा.\nजुना रंग सर्वत्र चालतो याची खात्री असल्यास संपूर्ण पेज कधीही भग्न होत नाही. stable base ठेवून नवीन तंत्र जोडणे हीच व्यावसायिक सवय.", code: `.mod-ok {
  background: #0ea5e9;
}
@supports (color: rgb(from red r g b)) {
  .mod-ok {
    background: rgb(from #0ea5e9 calc(r + 10) g b);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये एकाच accent टोकातून संपूर्ण गट तयार करतो. --root variable म्हणून आधार रंग ठेवला जातो.\nप्रत्येक tint हा याच आधार रंगातून मिळतो — सारखी channel रचना, फक्त alpha किंवा गणना बदलते.\nrgb(from var(--root) r g b / 30%) सारख्या नियमाने अर्ध-पारदर्शक थर सहज तयार होतो.\nअशा पद्धतीने थीममधील सगळे रंग सुसंगत राहतात आणि बदल कोठेही केले तरी संपूर्ण पॅलेट नवीन रंग घेते.", code: `.base {
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
      {
        title: "text-wrap — मजकूर आकार म्हणजे काय?",
        content: "balance, pretty, overflow शब्द प्रवाह.\ntext-wrap: balance हा गुणधर्म शीर्षकातील ओळी समान लांबीने संतुलित करतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? text-wrap — मजकूर आकार चे फायदे आणि महत्त्व",
        content: "✓ url आणि दीर्घ इंग्रजी शब्दांसाठी हे अत्यंत गरजेचे.\n✓ जागा संपल्यावर शब्द चांगला दिसण्यासाठी overflow-wrap: break-word ची सोबत करायची गरज असते.\n✓ इतर भाषांत फायदा नक्की दिसतो, पण मराठीत प्रयोग करताना आधार तपासा.\n✓ summary आणि वर्णनात याचा उपयोग उत्तम.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ disco separators मर्यादित आहेत हे लक्षात ठेवा.\n✗ दीर्घ शीर्षकांवर हा गुणधर्म टाळा, कारण गणना अधिक होते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. शीर्षक संतुलन", content: "text-wrap: balance हा गुणधर्म शीर्षकातील ओळी समान लांबीने संतुलित करतो. दोन किंवा तीन ओळीचे शीर्षक अधिक सुंदर दिसते.\nसाधारणतः शीर्षक शब्द योग्य प्रकारे आपोआप व्यवस्थित होतात — शेवटची ओळ आधीच्या ओळींसोबत समतोल राहते.\nसौंदर्यासाठी ही मोजणी कमी शीर्षकांपुरती मर्यादित असते. उदाहरणार्थ header, button आणि card title अशी छोटी मजकुरे योग्य.\nमोठा परिच्छेद या गुणधर्माला धीमे करतो, म्हणून तो फक्त भागात वापरा. हे गुणधर्म लागू करताना खूप ठिकाणी न वापरणेच उत्तम.", code: `.h1 {
  text-wrap: balance;
}`, codeLanguage: "css" },
      { title: "2. शब्द प्रवाह", content: "overflow-wrap शब्द ओळ आहे तेथेच फोडण्याचे नियम देतो. जेव्हा एखादा मोठा शब्द ओळीत बसत नाही, तेव्हा तो तोडला जातो.\nसामान्य मजकूर या अवस्थेतधी बदलत नाही; फक्त जागा संपल्यावर शब्द विभागला जातो. url आणि दीर्घ इंग्रजी शब्दांसाठी हे अत्यंत गरजेचे.\ninline-size ने बॉक्सची जागा मर्यादित केल्यावर anywhere हा सर्वात आक्रमक पर्याय ठरतो.\nword-break हा वेगळा नियम आहे, जो फक्त भाषांसाठी तोडण्याचे नियम देतो. दोघांचे परिणाम पडद्यावर तपासून योग्य तो निवडा.", code: `.long-word {
  overflow-wrap: anywhere;
  inline-size: 220px;
}`, codeLanguage: "css" },
      { title: "3. discretionary बदल", content: "hyphens हा गुणधर्म शब्दांमधील योग्य ठिकाणी hyphen जोडतो. पण मराठीसारख्या भाषांमध्ये यासाठी शब्दकोश assets आवश्यक ठरतात.\nब्राउझर भाषा ओळखून तोडण्याची जागा ठरवतो — हे उपलब्ध असल्यासच चालते. disco separators मर्यादित आहेत हे लक्षात ठेवा.\nजागा संपल्यावर शब्द चांगला दिसण्यासाठी overflow-wrap: break-word ची सोबत करायची गरज असते.\nइतर भाषांत फायदा नक्की दिसतो, पण मराठीत प्रयोग करताना आधार तपासा. योग्य ठिकाणी तोडल्याने वाचन खूप सोपे जाते.", code: `.just {
  hyphens: auto;
  overflow-wrap: break-word;
}`, codeLanguage: "css" },
      { title: "4. pretty संरेखन", content: "text-wrap: pretty हा गुणधर्म परिच्छेदाच्या शेवटच्या ओळीला चांगला बघण्यास मदत करतो. एकाकी लहान शब्द किंवा चिकटलेला शब्द दूर होतो.\nमोठ्या परिच्छेदांमध्ये हा लाभ स्पष्ट दिसतो — शेवटची ओळ पुरेशा शब्दांनी भरलेली ठेवली जाते.\nवाचकाला मजकूर संपल्याचा अर्थ स्पष्ट राहतो. summary आणि वर्णनात याचा उपयोग उत्तम.\nकिंचित वेग कमी पडू शकतो, पण लहान panel वर फरक जाणवत नाही. आकर्षक अक्षरटंचाईसाठी हे सोपे अंदाजपत्रक आहे.", code: `article p {
  text-wrap: pretty;
}`, codeLanguage: "css" },
      { title: "5. overflow खात्री", content: "टेबलातील मजकूर अनेकदा ओळीतून बाहेर पडतो किंवा पसरतो. white-space: nowrap ने तो एकाच ओळीत धरून ठेवता येतो.\nपुढे overflow: hidden आणि text-overflow: ellipsis जोडल्यास संपलेला मजकूर … ने लपतो. सीमा स्पष्ट राहते आणि table आकार नियंत्रित राहतो.\nchip किंवा tag मध्ये एक ओळ असलेला मजकूर नेहमी व्यवस्थित दिसतो. मोबाईल पडद्यावरही रचना तुटत नाही.\nतारीख, नावे आणि लहान लेबल अशा ठिकाणी हा संच अतिशय उपयोगी. प्रत्येक घटक एका ओळीत स्थिरता ठेवतो.", code: `.chip {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "text-wrap: balance चा आधार नवीन आहे. browser प्रत्येक शीर्षकाची ओळ मोजून संतुलित करते — यासाठी वेग किंचित वाढतो.\nदीर्घ शीर्षकांवर हा गुणधर्म टाळा, कारण गणना अधिक होते. लहान शीर्षकांसाठी मात्र उत्तम परिणाम मिळतो.\n@supports ने तपासल्यास जुन्या ब्राउझरमध्ये सुरक्षित fallback द्यावा. समजा balance समजले नाही तर खालील नियमच लागतात.\nवाचनीयता नेहमी प्राथमिक असते. कोणत्याही नवीन गुणधर्माप्रमाणे पडद्यावर तपासणी करूनच final निवड करा.", code: `h2 {
  text-wrap: balance;
}
@supports not (text-wrap: balance) {
  h2 {
    margin-inline-end: 1em;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये बातमी कार्डातील शीर्षक संतुलित करतो. card h2 ला text-wrap: balance देऊन सुंदर ओळी मिळवता येतात.\nदोन ओळींचे शीर्षक एकाच वेळी समान दिसते — हे दृश्य शांततेचे भान देते.\nवेगवेगळ्या रुंदीवर पडद्यावर बघा: स्क्रीन लहान झाली तर तीन ओळी येतात, पण तरीही संतुलित राहतात.\nएवढ्या छोट्या गुणधर्माने कार्डचा संपूर्ण अनुभव उजळतो. अशा लहान सुधारणा एकत्र आल्या की कोणतीही रचना व्यावसायिक दिसते.", code: `.card h2 {
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
      {
        title: "scroll-snap — स्क्रोल नियंत्रण म्हणजे काय?",
        content: "snap container, alignment आणि galleries.\nscroll-snap हे गुणधर्म स्क्रोल थांबण्याचे ठिकाण नियंत्रित करते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? scroll-snap — स्क्रोल नियंत्रण चे फायदे आणि महत्त्व",
        content: "✓ गॅलरी नीट थांबणे महत्त्वाचे — thumbs आणि मोठ्या images सोबत या गुणधर्मावर विश्वास ठेवता येतो.\n✓ उपयोगानुसार निवड करा — ताठरपणा नेहमीच चांगला नसतो.\n✓ focus ठिकाण स्पष्ट दिसणे आवश्यक — म्हणून :focus-visible outline चा नियम जोडा.\n✓ टॅब द्वारे प्रत्येक लिंक आणि button वर जाणे महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ दिशा आणि snap संरेखन निवडताना layout ची सवय लक्षात ठेवा — पुढे scroll दिशा ठरवते तेव्हा संरेखनही बदलते.\n✗ वेग आणि संवेदनशीलता लक्षात ठेवा — ज्या ठिकाणी वापरकर्ता स्क्रोल नियंत्रित करतो तेथे snap थोडा लवचिक ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. snap कल्पना", content: "scroll-snap हे गुणधर्म स्क्रोल थांबण्याचे ठिकाण नियंत्रित करते. वापरकर्ता स्क्रोल करतो तेव्हा browser जवळच्या snap point वर स्थिर होतो.\nsnap नियम जुळतो तेव्हा गॅलरी आणि कॅरोसेल अधिक सुबक बनते. कोणत्याही दिशेने — horizontal आणि vertical — हे कार्य करते.\nscroll-snap-type container ला लागतो, तर align मुलांना. दोन्ही एकत्र आले तरच जादू दिसते.\nगॅलरी नीट थांबणे महत्त्वाचे — thumbs आणि मोठ्या images सोबत या गुणधर्मावर विश्वास ठेवता येतो.", code: `.gallery {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "2. प्रकार निवड", content: "scroll-snap-type चे two प्रकार आहेत — mandatory आणि proximity. mandatory कडक थांबेपणा देतो, प्रत्येक वेळी snap point गाठला जातो.\nproximity हे अधिक लवचिक असते; फार दूर नसल्यासच थांबते. वापरकर्त्याने स्क्रोल मध्येच सोडले तर अंतिम ठिकाण जवळील point असते.\nलांब मजकुराच्या विभागांमध्ये proximity योग्य, कारण mandatory मुळे वाचन अडते. प्रत्येक पूर्ण-पडदा image मध्ये मात्र mandatory उत्तम.\nआकार मोठा आणि पटल स्पष्ट असले तर mandatory क्षणिक अनुभव देतो. उपयोगानुसार निवड करा — ताठरपणा नेहमीच चांगला नसतो.", code: `.cards {
  scroll-snap-type: y proximity;
}`, codeLanguage: "css" },
      { title: "3. संरेखन", content: "snap-align हे element मुलांवर दिले जाते आणि कुठे थांबायचे ते ठरवते. start म्हणजे सुरुवात, center म्हणजे मध्य, end म्हणजे शेवट.\nकार्डे center मध्ये snap केल्यास मध्यम आणि मोठे दोन्ही आकार सुंदर दिसतात. प्रत्येक card ला स्वतःचा align नियम दिला जातो.\nscroll-snap-stop: always सांगते की दर मध्ये थांबणे बंधनकारक आहे. यामुळे एक कार्ड अर्ध्या दीन न राहता ठिकट ठिकट राहतो.\nदिशा आणि snap संरेखन निवडताना layout ची सवय लक्षात ठेवा — पुढे scroll दिशा ठरवते तेव्हा संरेखनही बदलते.", code: `.card {
  scroll-snap-align: center;
  scroll-snap-stop: always;
}`, codeLanguage: "css" },
      { title: "4. scroll padding", content: "scroll-padding हे snap point आणि container च्या धार यांमधील अंतर नियंत्रित करते. header ठरल्यावर content साठी जागा राखीव ठेवता येते.\nहे अंतर सर्व भागांना लागू होत नाही — फक्त scroll start च्या बाजूस सोय असते. उदाहरणार्थ scroll-padding-inline उजव्या-डाव्या बाजूला जागा देतो.\nहेडर उंची मोजून padding दिल्यास content कधीही header च्या खाली लपत नाही. हीच small detail मुळे अनुभव खूप सुधारतो.\nसोबत गॅलरी, carousel आणि टाइमलाइन अशा प्रत्येक scroll कंटेनरमध्ये हे वापरता येते.", code: `.carousel {
  scroll-padding-inline: 16px;
}`, codeLanguage: "css" },
      { title: "5. दिशा आणि वेग", content: "scroll-snap दोन्ही अक्षांमध्ये कार्य करतो — scroll-snap-type: both mandatory द्वारे horizontal आणि vertical दोन्ही साधता येते.\nलहान ते मोठ्या गॅलरी पर्यंत snap चे नियंत्रण एकसारखे राहते. images च्या आकाराने threshold मजबूत असते.\nसोबत scroll-snap-align मुलांना लागतो आणि प्रत्येक घटक स्वतःच्या स्थानी स्थिर राहतो. ग्रिड किंवा सूची असो मग ती व्यवस्थित दिसते.\nवेग आणि संवेदनशीलता लक्षात ठेवा — ज्या ठिकाणी वापरकर्ता स्क्रोल नियंत्रित करतो तेथे snap थोडा लवचिक ठेवा.", code: `.grid {
  scroll-snap-type: both mandatory;
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "6. keyboard अनुभव", content: "कीबोर्ड वापरताना carousel स्क्रोल करणे शक्य होते. focus ठिकाण स्पष्ट दिसणे आवश्यक — म्हणून :focus-visible outline चा नियम जोडा.\nटॅब द्वारे प्रत्येक लिंक आणि button वर जाणे महत्त्वाचे. focus झालेला घटक उघडे दिसला पाहिजे यासाठी स्पष्ट ring ठेवा.\nprefers-reduced-motion चा आदर करा — snap आणि स्क्रोल वेग कमी करायला हवा जर वापरकर्त्याने तशी इच्छा केली असेल.\nप्रवेश्यता ही शेवटची जोड नाही, तर सुरुवातीपासूनच आधार असते. keyboard अनुभव योग्य राखल्यास सर्वांसाठी गॅलरी वापरण्याजोगी बनते.", code: `a:focus-visible {
  outline: 2px dashed #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये image गॅलरीसाठी horizontal snap तयार करतो. container ला scroll-snap-type: x mandatory देतो.\nप्रत्येक image ला scroll-snap-align: center दिल्याने ती screenshot च्या मध्यभागी थांबते. तीन images ची साधी फिरणारी गॅलरी तयार होते.\noverflow-x: auto ने गॅलरी स्क्रोल करण्याजोगी होते आणि मोठ्या images ची जागा राखली जाते.\nस्पर्श वापरकर्त्यांसाठी swipe जेवढा सोपे, तेवढा desktop वर trackpad नेही. या लहान project मधून snap ची मजा लगेच लक्षात येते.", code: `.gallery {
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
      {
        title: "aspect-ratio — प्रमाण जपणे म्हणजे काय?",
        content: "ratio control, intrinsic sizing आणि media holders.\naspect-ratio हा गुणधर्म उंची आणि रुंदी यांचे प्रमाण ठरवतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? aspect-ratio — प्रमाण जपणे चे फायदे आणि महत्त्व",
        content: "✓ aspect-ratio चा सर्वात मोठा फायदा म्हणजे आरक्षित जागा.\n✓ aspect-ratio वापरताना height लिहण्याची गरज नसते.\n✓ flex आणि grid मधील उपयोग सोपा होतो; flex: 1 सोबत प्रत्येक image समान रुंदीत सामावतो.\n✓ min-width: 0 हे flex child मध्ये महत्त्वाचे — अशी तर image आकुंचन पावू शकेल अन्यथा overflow होईल.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ border आणि padding यामध्ये गणना होते — box-sizing चे नियम लक्षात ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. प्रमाण भावना", content: "aspect-ratio हा गुणधर्म उंची आणि रुंदी यांचे प्रमाण ठरवतो. video साठी 16/9, square साठी 1/1 अशी नेहमीची मूल्ये वापरता येतात.\nफक्त width दिली की height आपोआप गणली जाते — layout मध्ये जागा आधीच राखीव राहते.\nimage लोड होण्यापूर्वी बॉक्सचे आकारमान ठरलेले असते, त्यामुळे page टपकत नाही. ही स्थिरता वापरकर्त्याला शांतता देते.\nहा साधा गुणधर्म कोणत्याही element ला लागू होतो. प्रमाण नियंत्रणामुळे रचना जास्त अंदाजित आणि व्यावसायिक बनते.", code: `.video {
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. नैसर्गिक आकार", content: "image ला नैसर्गिक dimensions असतात — रुंदी आणि उंची दोन्ही तिच्या source फाइलमध्ये नोंदविलेली असतात. त्यामुळे ratio आधीच ठरलेला असतो.\nपण aspect-ratio केवळ image साठी नाही; कोणतेही element — div, video, canvas — हे प्रमाण स्वीकारते.\nbackground image च्या तुलनेत हे खूप सोपे कारण रंगीत बॉक्स आधीच ट्रेन केला जातो.\nbox ला aspect-ratio: 1 / 1 आणि width दिल्यास height आपोआप मिळते. गणना न करता square किंवा rectangle कधीही नियंत्रित करता येते.", code: `.box {
  aspect-ratio: 1 / 1;
  width: 120px;
}`, codeLanguage: "css" },
      { title: "3. आरक्षित जागा", content: "aspect-ratio चा सर्वात मोठा फायदा म्हणजे आरक्षित जागा. प्रतिमा लोड होण्यापूर्वी exact जागा बॉक्सने घेतलेली असते.\nयामुळे जागा पडत नाही, layout हलत नाही आणि वाचकाला आराम मिळतो — पेज टपटपत नाही.\nsource बदलला तरी सर्व प्रमाण सारखे राहते. velveta 4/3 च्या बॉक्समध्ये cover ने image छान बसते.\ncontent-visibility सोबत याची जोडणी केल्यास कार्यक्षमता सुद्धा सुधारते. स्थिर बॉक्स असल्याने कॅल्क्युलेशन कमी होते.", code: `.hero-img {
  aspect-ratio: 4 / 3;
  background: #e2e8f0;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "4. mobile संरेखन", content: "मोबाईल पडद्यावर portrait बनवण्यासाठी ratio आपोआप बदलता येतो. media query मधून 4/3 ऐवजी 4/5 सारखे उभे प्रमाण द्यावे.\nलहान पडद्यावर उभी रचना जास्त जागा वापरते आणि content चे तुटणे टाळते. हीच mobile-first दिशा.\nवेगवेगळ्या दर्शनांसाठी वेगवेगळे ratio ठरवता येतात — एकच element प्रत्येक आकारात नवीन दिसतो.\nप्रत्येक breakpoint वर पडद्यावर प्रयोग करा. content योग्य असेल तर धारदार फरक तुम्हाला दिसेल आणि रचना सुरक्षित राहते.", code: `@media (max-width: 480px) {
  .media {
    aspect-ratio: 4 / 5;
  }
}`, codeLanguage: "css" },
      { title: "5. ग्रिड जुळणी", content: "ग्रिडमधील सर्व card समान ratio ठेवल्यास पंक्ती व्यवस्थित जुळतात. प्रत्येक image ला 1/1 आणि width 100% दिल्यास square tiles तयार होतात.\nobject-fit: cover दिल्यास image बॉक्स पूर्ण भरतो आणि कापतो. आकार कोणताही असो, प्रत्येक tile समान दिसतो.\nग्रिडच्या पंक्ती आणि स्तंभ सर्व समान जागा घेतात. ओळींमध्ये तुटत नाही — हे व्हिज्युअल आरोग्य देते.\nक्रोमसोबत असलेल्या पॅटर्न सर्व ब्राउझरमध्ये समान दिसतात. हीच gallery आणि profile grids ची मूलकार्ये.", code: `.tile img {
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "6. अचूक व्यवस्था", content: "aspect-ratio वापरताना height लिहण्याची गरज नसते. border आणि padding यामध्ये गणना होते — box-sizing चे नियम लक्षात ठेवा.\nflex आणि grid मधील उपयोग सोपा होतो; flex: 1 सोबत प्रत्येक image समान रुंदीत सामावतो.\nmin-width: 0 हे flex child मध्ये महत्त्वाचे — अशी तर image आकुंचन पावू शकेल अन्यथा overflow होईल.\nप्रमाण आणि flex यांची संगत सरावाने पक्की होते. प्रत्येक element च्या आकार नियमांची खात्री करून प्रकल्प पूर्ण करा.", code: `.wrap {
  display: flex;
  gap: 12px;
}
.wrap img {
  aspect-ratio: 3 / 2;
  flex: 1;
  min-width: 0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये video card चे ग्रिड तयार करतो. video-card ला aspect-ratio: 16/9 देतो आणि object-fit: cover जोडतो.\nसर्व cards समान आकाराचे दिसतात व image सुंदर बसते. पहिली पंक्ती व्यवस्थित सुरू होते.\nवेगवेगळ्या screen sizes वर सर्व video tiles एकसारखे राहतात — size बदलला तरी प्रमाण स्थिर असते.\nअशा ग्रिडमुळे पेजची रचना अंदाजित राहते. हा small project aspect-ratio च्या सामर्थ्याचा नमुना आहे.", code: `.video-card {
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
      {
        title: "motion-path — हालचाल मार्ग म्हणजे काय?",
        content: "offset path, distance आणि लांब गती.\noffset-path हा गुणधर्म घटकाला गतीसाठी ठराविक मार्ग देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? motion-path — हालचाल मार्ग चे फायदे आणि महत्त्व",
        content: "✓ circle(50px at 50% 50%) सारख्या simple shape मार्गासाठी path लिहण्याची गरज नसते.\n✓ अॅनिमेशनमधील प्रत्येक घटक वेगळ्या वेळी सुरू करण्यासाठी animation-delay उपयोगी येतो.\n✓ motion path ची कामगिरी तपासणे आवश्यक.\n✓ ज्या ठिकाणी गरज नाही तेथे अॅनिमेशन नको — कमी वापर जास्त परिणाम.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. मार्ग कल्पना", content: "offset-path हा गुणधर्म घटकाला गतीसाठी ठराविक मार्ग देतो. element एका बिंदूपासून दुसऱ्या बिंदूपर्यंत path च्या बाजूने हलतो.\nयामुळे सरळ हालचाली ऐवजी वक्र, वर्तुळाकार किंवा कस्टम मार्ग साधता येतात. ही नवीन तंत्रे आधुनिक controls मध्ये वापरली जातात.\npath(M10 80 C 40 10, 65 10, 95 80) अशी SVG syntax मार्गाचे वक्र बिंदू दर्शवते.\nप्रयोगाने प्रत्येक गुणधर्म स्पष्ट होतो — अंतर, दिशा आणि वेग सर्व नियंत्रण मिळते. हे अॅनिमेशनच्या जगातील उत्कृष्ट साधन आहे.", code: `.plane {
  offset-path: path("M10 80 C 40 10, 65 10, 95 80");
  offset-distance: 0%;
}`, codeLanguage: "css" },
      { title: "2. अंतर नियंत्रण", content: "offset-distance टक्केवारीत मार्गावर चाललेले अंतर सांगते. 0% म्हणजे सुरुवात आणि 100% म्हणजे शेवट.\nअॅनिमेशनमध्ये या मूल्याला गुळगुळीत हलवले की घटक मार्गावर प्रवास करतो. linear infinite ने तो सतत फिरत राहतो.\ncircle(50px at 50% 50%) सारख्या simple shape मार्गासाठी path लिहण्याची गरज नसते.\nदूरी नियंत्रित करणे म्हणजे वेळ व्यवस्थापनाचा खेळ — प्रत्येक टप्प्यावर नियंत्रण स्पष्ट ठिकाणी राहते.", code: `.dot {
  offset-path: circle(50px at 50% 50%);
  animation: spin 3s linear infinite;
}`, codeLanguage: "css" },
      { title: "3. फिरणे दिशा", content: "offset-rotate हे घटकाची दिशा ठरवते. auto मूल्याने घटक curve सोबत वाकतो — वस्तू मार्गाच्या दिशेने मागे वळते.\nreverse मूल्याने घटक उलटला दिशेने तोंड करतो. number दिल्यास दिशा निश्चित स्थिर राहते.\nगाडी, विमान किंवा बाण या प्रकारच्या visuals मध्ये auto जास्त योग्य — मार्गाची दिशाच दर्शवते.\nदिशा नियंत्रण असल्यास मार्ग नीट दिसतो आणि गतीचा अर्थ स्पष्ट होतो. प्रत्येक परिस्थितीत योग्य मूल्य स्वत: ठरवा.", code: `.car {
  offset-path: path("M20 20 L 200 80");
  offset-rotate: auto;
}`, codeLanguage: "css" },
      { title: "4. विलंब आणि वेगमान", content: "अॅनिमेशनमधील प्रत्येक घटक वेगळ्या वेळी सुरू करण्यासाठी animation-delay उपयोगी येतो. काही घटक मागे-पुढे दिसतात.\nkeyframes मध्ये transcript ची हालचाल ठरवली जाते — प्रत्येक टप्प्यावर offset-distance बदलणे शक्य आहे.\nease-in-out वेगाने सुरुवात आणि शेवट गुळगुळीत होतो, मध्ये वेग जास्त.\nअनेक layers एकत्र आले तर विलंब नियंत्रित नाहीतर हालचाल तुटते. योग्य delay आणि duration नियोजनाने सुंदर वर्तन तयार होते.", code: `.layer {
  offset-path: path("M0 100 C 40 20, 60 20, 100 100");
  animation: travel 4s ease-in-out infinite;
}`, codeLanguage: "css" },
      { title: "5. कामगिरी", content: "motion path ची कामगिरी तपासणे आवश्यक. path लांब आणि गणना जड असल्यास फ्रेम दर खाली जाऊ शकतो — म्हणून प्रत्येक frame वर प्रयोग करा.\nहलकी हालचाल आणि साधी path वेगवान राहते. ज्या ठिकाणी गरज नाही तेथे अॅनिमेशन नको — कमी वापर जास्त परिणाम.\nprefers-reduced-motion चे नियम respect करा; वापरकर्त्याने कमी हालचाल मागितली तर path नियंत्रित करा.\nबऱ्याच ठिकाणी अॅनिमेशन cluttered बनते. थोडे, नेमके आणि समजून स्थानांमध्ये — हीच शैली योग्य.", code: `@media (prefers-reduced-motion: reduce) {
  .plane {
    animation: none;
    offset-distance: 100%;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "offset-path चा आधार मध्यम स्तराचा आहे. आधी @supports ने तपासले तर जुने ब्राउझर अंतिम अवस्था सोप्या रीतीने दाखवतात.\nजुने स्थान ठीक राहते — उदा. transform: translateX(40px) हा स्थिर पर्याय. तपासणी नुसार ते नवे look इच्छिते.\n@supports (offset-path: none) मध्ये आधार तपासल्यावर नवे मार्ग लागू होतात.\nprogressive enhancement वापरून नवे अनुभव पुरवा आणि स्थिरता नेहमी सांभाळा. यामुळे प्रत्येक ब्राउझर चांगला देखावा देतो.", code: `.fallback {
  transform: translateX(40px);
}
@supports (offset-path: none) {
  .fallback {
    transform: none;
    offset-path: path("M0 0 L 80 40");
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये offset-path च्या सोबत वर्तुळाकार मार्ग बनवतो. .orbit ला circle(90px at 50% 50%) देतो.\nanimation go 6s linear infinite ने घटक सतत वर्तुळात फिरत राहतो. या साध्या setup मधून orbit ची भावना मिळते.\nअधिक घटक विलंबाने जोडले तर ग्रह-उपग्रह सारखी रचना दिसते.\nहा project motion path च्या मजा आणि वापराचा एक ठोक आहे. मार्ग बदलून नवीन चक्रे सहज तयार करता येतात.", code: `.orbit {
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
      {
        title: "object-fit — माध्यम गठन म्हणजे काय?",
        content: "cover, contain आणि image जागा नियंत्रण.\nobject-fit image ला दिलेल्या बॉक्समध्ये कसे बसवायचे ते ठरवते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? object-fit — माध्यम गठन चे फायदे आणि महत्त्व",
        content: "✓ गॅलरी आणि प्रोफाइल grids मध्ये याची सर्वात जास्त गरज पडते.\n✓ त्यामुळे प्रत्येक thumb मध्ये छेद नियंत्रित करणे महत्त्वाचे.\n✓ पारदर्शक background सोबत contain चा उपयोग उत्तम.\n✓ फोटोची प्रमुख बाजू निवडणे फायदेशीर.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. माध्यम आकार", content: "object-fit image ला दिलेल्या बॉक्समध्ये कसे बसवायचे ते ठरवते. image चे डिफॉल्ट sizes box पेक्षा वेगळे असू शकते.\nvideo आणि image दोन्ही माध्यमांवर हे लागू होते. गॅलरी आणि प्रोफाइल grids मध्ये याची सर्वात जास्त गरज पडते.\ndefault fill मध्ये image पूर्ण बॉक्स व्यापतो पण प्रमाण बिघडू शकते किंवा तो ताणला जातो.\ndefault सर्व ब्राउझरमध्ये एकसारखे कार्य करते. object-fit चे नियम समजून घेतल्यास माध्यम नियंत्रण सोपे होते.", code: `.thumb {
  width: 160px;
  height: 160px;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "2. cover नियम", content: "cover हे मूल्य image त्या बॉक्स पूर्ण भरण्यासाठी कापते. जर बॉक्स 160 पट 160 आणि image मोठी असेल तर बाजू कापल्या जातात.\nयामुळे अधिक तपशील दिसतो आणि image बॉक्स व्यवस्थित भरते. pruning अचूक होण्यासाठी object-position ने फोकस ठेवता येतो.\nप्रत्येक image चा subject वेगळा — एक व्यक्ती, दुसरी भूदृश्य. त्यामुळे प्रत्येक thumb मध्ये छेद नियंत्रित करणे महत्त्वाचे.\ncover सर्वात लोकप्रिय कारण ते दृश्य संपूर्ण आकार भरते. गॅलरीमध्ये हा प्राथमिक पर्याय म्हणून वापरला जातो.", code: `.cover {
  object-fit: cover;
  object-position: center;
}`, codeLanguage: "css" },
      { title: "3. contain पर्याय", content: "contain मूल्य image संपूर्ण बॉक्समध्ये प्रमाणसह बसवते — कोणताही भाग कापला जात नाही. आकार असला तरी variants देशील?\nअजूनही बाजूंमध्ये जागा राहू शकते — ते designer च्या नियंत्रणात असते. लोगो साठी हे आवश्यक कारण शब्द आणि आकृती कापल्यावर अर्थ गमावतो.\nपारदर्शक background सोबत contain चा उपयोग उत्तम. logo image संपूर्ण दिसते आणि स्पष्ट ठेवता येते.\ncover आणि contain दरम्यान निवड म्हणजे तुकडे टिकवणे विरुद्ध संपूर्ण दर्शवणे — हे नियम स्पष्ट असणे आवश्यक.", code: `.logo {
  object-fit: contain;
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "4. object-position", content: "object-position या गुणधर्माने image चा फोकस बदलता येतो. top, left, center आणि bottom अशी स्थाने दिली जातात.\nटक्केवारीत 0% 0% ही वर-डावीकडे तर 20% 80% खाली उजवीकडे दिशा दर्शवते. फोटोची प्रमुख बाजू निवडणे फायदेशीर.\nकॅप्शन किंवा मजकुराच्या जवळ image चे महत्त्वाचे भाग ठेवा — रचना समतोल दिसते.\nobject-fit: cover सोबत object-position चा उपयोग केल्यास फोकस अचूक ठेवता येतो. प्रत्येक फोटोसाठी योग्य स्थान निवडा.", code: `.portrait {
  object-fit: cover;
  object-position: 20% 80%;
}`, codeLanguage: "css" },
      { title: "5. गॅलरी जुळणी", content: "गॅलरीमध्ये सर्व tiles समान आकाराचे ठेवण्यासाठी object-fit महत्त्वाचे. प्रत्येक image ला cover दिल्यास एका ओळीत समान दिसते.\naspect-ratio 1/1 ने square tiles तयार होतात; image क्रॉप होऊन बॉक्स भरते. आकार एकसमान झाल्यास पेज स्वच्छ दिसते.\nमोठा thumbs आणि छोटी image व्यवस्थापन एकाच नियमाने सोपे होते. cover चे क्रॉपिंग प्रत्येक image वर वेगळ्या दिशेने असू शकते — आकर्षण असे राहते.\nजुळणीने गॅलरीचे pages सरळ आणि सुंदर दिसतात. ही नियमित पद्धतच आधुनिक UI चा पाया आहे.", code: `.tile {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "6. आधार बदल", content: "object-fit चा आधार सर्वाधिक ब्राउझरमध्ये उत्तम आहे. जुने browsers सहजपणे प्रमाण नियंत्रण करतात.\nव्हिडिओ मध्ये हे खूप महत्त्वाचे — aspect-ratio 16/9 आणि cover ने समान फ्रेम भरता येते.\nकोणत्याही script नको — शुद्ध CSS ने माध्यम नियंत्रण पूर्ण होते. हेच ह्या गुणधर्माचे सौंदर्य.\nप्रत्येक तपासणी नेमकी ठेवल्यास image faults टाळता येतात. size आणि direction दोन्ही नियंत्रित राहतात.", code: `.media {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये profile grid चे वर्तुळाकार avatars तयार करतो. width 96px आणि aspect-ratio 1 ने square तयार होतो.\nborder-radius 50% ने तो वर्तुळ बनतो आणि object-fit: cover ने image नीट बसते. face कधीही तुटत नाही.\nप्रत्येक image चा फोकस center ठेवल्यास चिंचळ अचूक दिसते. pixel-perfect avatar पैकीचा सुंदर view मिळतो.\nचांगला avatar नाहील अशी फॉलबॅक आणि नेहमी स्पष्ट. यामुळे profile UI स्वच्छ आणि व्यावसायिक दिसते.", code: `.avatar {
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
      {
        title: "filter — दृश्य प्रभाव म्हणजे काय?",
        content: "blur, contrast, drop-shadow आणि backdrop फिल्टर.\nfilter हा गुणधर्म element च्या दृश्य देखाव्याला बदलतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? filter — दृश्य प्रभाव चे फायदे आणि महत्त्व",
        content: "✓ नेमका आणि आवश्यक ठिकाणी वापर करा.\n✓ will-change साठी filter चा उपयोग काही ठिकाणी करता येतो पण प्रत्येक ठिकाणी लिहण्याची गरज नाही.\n✓ असा थर image वर मजकूर वाचण्यास मदत करतो — आधी dark overlay ची गरज कमी होते.\n✓ हे small example filter च्या daily उपयोगाचा नमुना आहे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      { title: "1. फिल्टर कल्पना", content: "filter हा गुणधर्म element च्या दृश्य देखाव्याला बदलतो. blur ने धूसर, contrast ने स्पष्टता — यांसारखे अनेक प्रभाव शक्य आहेत.\nपूर्ण element वर प्रभाव पडतो — मजकूर, image आणि background सर्व एकत्र.\nएकापेक्षा जास्त प्रभाव जोडता येतात, उदा. filter: blur(2px) saturate(1.2).\nप्रत्येक ठिकाणी वापरू नये; ते परिणाम आणि performance दोन्ही ठिकाणी भरभक्कम असते. नेमका आणि आवश्यक ठिकाणी वापर करा.", code: `.soft {
  filter: blur(2px);
}`, codeLanguage: "css" },
      { title: "2. blur आणि contrast", content: "blur चा प्रमाण वाढवल्यास सर्व काही धूसर होते — मजकूरही वाचत नाही. म्हणून प्रमाण कमी ठेवणे आवश्यक.\nsepia ने उबदार, जुना छटा मिळतो तर saturate ने रंग अधिक जिवंत होतात. grayscale मुळे रंग मिसळले जातात.\nअनेक प्रभाव एका property मध्ये एकत्र लिहिता येतात — एखाद्या फोटोला 40% gray आणि विशिष्ट contrast देता येते.\nयोग्य संयोजन शक्यता तपासून अर्थपूर्ण देखावा मिळवा. प्रत्येक filter चे effect पडद्यावर स्पष्ट दिसते.", code: `.photo {
  filter: grayscale(40%) contrast(1.05) blur(0.5px);
}`, codeLanguage: "css" },
      { title: "3. drop-shadow", content: "drop-shadow ही सावली image किंवा icon च्या आकारानुसार तयार करते. box-shadow सारखी नाही — ही आकाराला लागून असते.\nअल्फा पारदर्शकता जपली जाते; म्हणून cutout icons आणि irregular आकारांसाठी ही योग्य.\nSVG path सोबतही सावली मार्गाच्या आकाराने येते — बाण किंवा हृदय असे आकार अचूक दिसतात.\nbox-shadow बॉक्सला काठ देतो, तर drop-shadow content ला. कुठे वापरायचे याचा स्पष्ट आधार देतो.", code: `.icon {
  filter: drop-shadow(0 4px 6px rgb(0 0 0 / 25%));
}`, codeLanguage: "css" },
      { title: "4. grayscale देखावा", content: "grayscale 100% ने संपूर्ण रंग नाहीसे होतात — image black and white दिसते. मग हळुवार प्रभाव voice करतो.\nhover वर grayscale कमी करून रंग परत आणता येतो. transition filter 0.4s ने हा बदल गुळगुळीत होतो.\nही effect अत्यंत आकर्षक आहे — एखादी image निर्जीव दिसते आणि कर्सरने जिवंत होते.\nआधार सर्व ब्राउझरमध्ये मजबूत आहे. शुद्ध CSS सहित प्रभाव साधायचा असल्यास हे उत्तम उदाहरण ठरते.", code: `img.gr {
  filter: grayscale(100%);
  transition: filter 0.4s;
}
img.gr:hover {
  filter: grayscale(0%);
}`, codeLanguage: "css" },
      { title: "5. backdrop-filter", content: "backdrop-filter मागील भागातील सर्व घटकांवर प्रभाव देतो — मागे असलेले रंग, मजकूर आणि images blur होतात.\nheader किंवा nav मध्ये glass effect तयार करण्यासाठी हे उत्तम. फक्त element वर लागू न करता त्याच्या मागील सामग्रीवर.\nbackground अर्ध-पारदर्शक ठेवल्यास मागचे भाग मऊ दिसतात आणि text वाचता राहतो.\nआधार नवीन असल्याने semitransparent fallback द्या. आधुनिक browsers मध्ये हे शानदार glass effect देतो.", code: `.glass {
  backdrop-filter: blur(10px);
  background: rgb(255 255 255 / 40%);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी सावधानता", content: "फिल्टरची कामगिरी काळजी घेण्यासारखी — प्रत्येक filter paint अधिक गुंतागुंतीचे होते. मोठ्या element वर blur जड होऊ शकतो.\nपूर्ण page वर filter जास्त कठीण; फक्त आवश्यक भाग वापरा.\nwill-change साठी filter चा उपयोग काही ठिकाणी करता येतो पण प्रत्येक ठिकाणी लिहण्याची गरज नाही.\nकमी blur, नेमके भाग आणि सीमित प्रभाव — ही safest strategy. performance आणि देखावा दोन्ही जपते.", code: `.tiny {
  filter: blur(1.5px);
  will-change: filter;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये hero image वर filter थर लावतो. brightness 0.8 ने रंग गडद होतो आणि saturate 1.2 ने रंग जिवंत राहतो.\nअसा थर image वर मजकूर वाचण्यास मदत करतो — आधी dark overlay ची गरज कमी होते.\nhero image च्या रंगीत थरामुळे design अधिक व्यावसायिक दिसतो.\nहे small example filter च्या daily उपयोगाचा नमुना आहे. brightness आणि saturate दोन्ही एकत्र वापरले तर संतुलन उत्तम राहते.", code: `.hero {
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
      {
        title: "style() — शैली प्रश्न म्हणजे काय?",
        content: "@container style() नियम आणि variants.\n@container style() हे घटकाच्या शैलीवर प्रश्न विचारणारे तंत्र आहे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? style() — शैली प्रश्न चे फायदे आणि महत्त्व",
        content: "✓ गरज पडल्यास class वर आधारित fallback द्या — किमान अनुभव सर्वांना मिळतो.\n✓ सर्व नियमांमध्ये सातत्य राखणे महत्त्वाचे.\n✓ theme स्विचिंगच्या भविष्यात हा नियम महत्त्वाचा ठरेल.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ नियम गोंधळ होऊ नये म्हणून क्रम लक्षात ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. शैली प्रश्न", content: "@container style() हे घटकाच्या शैलीवर प्रश्न विचारणारे तंत्र आहे. प्रश्न आकाराऐवजी शैली तपासतो — उदा. custom property value काय आहे.\nकंटेनरला नाव आणि नियम देताना container context असेल तरच style query कार्य करतो. म्हणून container-name लिहणे आवश्यक.\nहे नवीन वैशिष्ट्य आहे; सरावाने तपासताना आधार तपासा. variant खरोखर शक्य होतो.\nstyle() पायदान शिकल्यावर theme आणि variant व्यवस्थापन नव्या पातळीवर जाते. नियम थोडे-थोडे सरावा.", code: `@container style(--theme: neon) {
  .card {
    background: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. custom property", content: "style queries चा आधार custom property वर असतो. variable चे मूल्य असले की नियम लागू होतात.\nउदा. --mode: night असल्यास कार्डचा रंग हलका होतो. variable चे मूल्य attribute data-mode वरून नियंत्रित होते.\nfunction वगळता मूल्य साधे असते — boolean किंवा एकल value साठी सोपे असते.\nनवे value म्हणजे नवा variant. लहान रचना आणि वेगवेगळ्या थीममध्ये जागा वाचते.", code: `.theme[data-mode="night"] {
  container-name: card;
}
@container style(--mode: night) {
  .card {
    color: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "3. संयोजन नियम", content: "style queries मध्ये दोन अटी एकत्र करता येतात — and सह जोडतात. उदा. style(--tone: warm) and (min-width: 300px).\nप्रत्येक query वेगळा असतो; एकाच ठिकाणी अनेक conditions लिहिण्याऐवजी स्पष्ट रचना ठेवा.\nनियम गोंधळ होऊ नये म्हणून क्रम लक्षात ठेवा. style अटी आधी, आकार अटी नंतर — ही सवय स्पष्टता देते.\nसंतुलन राखण्यासाठी आवश्यक त्या अटीच लिहा. अनावश्यक अटी कोड अस्पष्ट करतात.", code: `@container card style(--tone: warm) and (min-width: 300px) {
  .card {
    border-left: 6px solid #f59e0b;
  }
}`, codeLanguage: "css" },
      { title: "4. variant नियंत्रण", content: "variant नियंत्रणासाठी style queries उत्तम आहेत. --layout: grid असेल तर card-wrap मध्ये grid रचना लागू होते.\nतीसरा variant सहजपणे जोडता येतो — नवे custom property value म्हणून.\nकोड सध्या readable आणि succinct राहतो. प्रत्येक variant च्या स्थितीचे नाव स्पष्ट ठेवा.\npropagation आणि nesting नियंत्रित केल्यास variant complicated होत नाही. Readability आणि पुनर्वापर यांचा समतोल साधला जातो.", code: `@container style(--layout: grid) {
  .card-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}`, codeLanguage: "css" },
      { title: "5. आधार", content: "style queries चा आधार नवीन आहे. सर्व browsers मध्ये उपलब्ध नाही, म्हणून आधी तपासणी करणे योग्य.\n@supports मध्ये style query ची आधार तपासतात. जुनी रचना display: block सारखी जोडते.\nगरज पडल्यास class वर आधारित fallback द्या — किमान अनुभव सर्वांना मिळतो.\nहे नवीन तंत्र वापरताना progressive enhancement हेच धोरण असते. सुरक्षित राहणे आणि नवे जोडणे दोन्ही साधता येते.", code: `.fallback-grid {
  display: block;
}
@container style(--layout: grid) {
  .fallback-grid {
    display: grid;
  }
}`, codeLanguage: "css" },
      { title: "6. नियम संतुलन", content: "style queries चा वापर कमी-कमीच ठेवावा. साधारण elements साठी class पुरेसे असतात.\ncomplex शैली गुंतागुंतीची होते; म्हणून फक्त आवश्यक ठिकाणी value checks वापरा.\nसर्व नियमांमध्ये सातत्य राखणे महत्त्वाचे. कोड नेहमी readable आणि maintainable ठेवा.\nstyle query हे टूल आहे, प्रत्येक समस्येचे उत्तर नाही. जिथे जास्त जटिलता वाटेल तिथे साधा class निवडा.", code: `/* keep it simple */
.card {
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये तीन variant cards चे ग्रिड तयार करतो. style query ने --theme: neon असल्यास font-family monospace होते.\nप्रत्येक card स्थितीनुसार नवीन रचना घेते. theme variable बदलल्यावर whole grid बदलते.\nstyle check आणि container एकत्र वापरून variant व्यवस्था सोपी ठरते.\nहे या तंत्राचा छोटा पण प्रभावी नमुना आहे. theme स्विचिंगच्या भविष्यात हा नियम महत्त्वाचा ठरेल.", code: `@container style(--theme: neon) {
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
      {
        title: "highlight — निवड प्रकाश म्हणजे काय?",
        content: "::selection, ::highlight आणि शब्द अधोरेखित.\n::selection हा pseudo-element निवडलेला मजकूर सजवतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? highlight — निवड प्रकाश चे फायदे आणि महत्त्व",
        content: "✓ दोन्ही pseudo-elements मजकूर संपादनासाठी खूप उपयोगी ठरतात.\n✓ गरज असेल तेव्हाच वापरा — मजकूर संपादक, शोध बॉक्स असे विशेष ठिकाण.\n✓ सध्याच्या गरजेसाठी हे प्रयोग करावे लागतात.\n✓ selection background हलका करून मजकूर स्पष्ट ठेवणे महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ text-shadow Selection वर गुंतागुत दिसते, त्यामुळे टाळा.\n✗ ::grammar-error व्याकरणाच्या चुका ओळखतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. निवड रंग", content: "::selection हा pseudo-element निवडलेला मजकूर सजवतो. वापरकर्ता मजकूर निवडला की रंग आणि background बदलता.\nरंग दोन्ही मूल्ये दिल्यास फरक स्पष्ट दिसतो. निवड पूर्ण झालेला भाग आकर्षक दिसतो.\nप्रत्येक वापरकर्त्याची सवय वेगळी असते — काही रंग झाल्याशिवाय न समजता निवडतात. स्पष्ट रंग help करतात.\ntext-shadow Selection वर गुंतागुत दिसते, त्यामुळे टाळा. हे छोटे तपशील मोठा परिणाम देतात.", code: `::selection {
  background: #fbbf24;
  color: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. ::highlight", content: "::highlight पseudo-element नावांनी निवडलेले मजकूर सजवतो. नाव JS मधून document मध्ये नोंदवले जाते.\nउदा. search term चे नाव highlight करून रंग दिला की शोध परिणाम स्पष्ट दिसतात.\ncombined नियम सोपे असतात — केवळ pseudo-element ला रंग आणि background देतात.\nकाही browsers मध्ये अजून आधार मर्यादित आहे, म्हणून धारदार fallback द्या. हे आधुनिक तंत्र research हलके करते.", code: `::highlight(search-term) {
  background: #c7d2fe;
  color: #172554;
}`, codeLanguage: "css" },
      { title: "3. शब्द अधोरेखित", content: "::spelling-error त्रुटी असलेले शब्द दर्शवितो. लाल रंगीत wavy underline सारखे स्वरूप मिळवता येते.\n::grammar-error व्याकरणाच्या चुका ओळखतो. दोन्ही pseudo-elements मजकूर संपादनासाठी खूप उपयोगी ठरतात.\nअनेक browsers मध्ये हे pseudo-elements अजून पूर्ण समजत नाहीत.\nगरज असेल तेव्हाच वापरा — मजकूर संपादक, शोध बॉक्स असे विशेष ठिकाण. सध्याच्या गरजेसाठी हे प्रयोग करावे लागतात.", code: `::spelling-error {
  text-decoration: underline wavy red;
}`, codeLanguage: "css" },
      { title: "4. caret रंग", content: "caret-color हा गुणधर्म text caret चा रंग बदलतो. input आणि textarea मध्ये स्पष्ट फरक दिसतो.\ndefault black पेक्षा brand रंग जास्त ओळखीचा आणि सुंदर दिसतो. form चे focus अधिक आकर्षक बनते.\nअन्य घटकांना असलेल्या रंगांशी जुळवल्यास design harmonious होते.\nलहान तपशील म्हणून दिसतो पण caret हा text entry चा केंद्रबिंदू असतो. जागा भरण्यातील प्रत्येक क्षण अधिक स्पष्ट होतो.", code: `textarea {
  caret-color: #7c3aed;
}`, codeLanguage: "css" },
      { title: "5. संयोग प्रभाव", content: "संयोग म्हणून सगळे प्रभाव एकत्र करता येतात — selection चा रंग आणि caret चा रंग. दोन्ही एका थीममध्ये जुळवून design एकजीव होते.\nselection background हलका करून मजकूर स्पष्ट ठेवणे महत्त्वाचे.\ncaret चा रंग उजळ असल्यास text entry ची अवस्था नेहमी दिसते.\nप्रत्येक ठिकाणचे रंग बदलून एकसंध थीम तयार करतो. छोट्या छोट्या जोडण्यांमधून मोठा फायदा होतो.", code: `::selection {
  background: #a5f3fc;
  color: #083344;
}
input {
  caret-color: #0891b2;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "::selection चा आधार ठोस आणि सर्वत्र असतो. ::highlight हे नवीन आहे आणि त्याचा आधार मर्यादित.\nजुना dark theme नियम ठेवणे चांगले — color-scheme नुसार रंग बदलतो.\nप्रवेश्यता लक्षात ठेवून रंगांचा contrast जपा. निवडलेला मजकूर स्पष्ट दिसणे गरजेचे.\nरंग निवडताना दोन्ही थीमांचा विचार करा. @media (prefers-color-scheme: dark) मध्ये रंग बदलून थीम नियंत्रित ठेवा.", code: `@media (prefers-color-scheme: dark) {
  ::selection {
    background: #fde047;
    color: #1e293b;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये theme चा selection रंग तयार करतो. ::selection ला #6366f1 background आणि white text देतो.\ncaret रंग जोडून संपूर्ण फॉर्म अनुभव एकसंध बनतो.\nप्रत्येक वापरकर्त्याची निवड उजळ आणि स्पष्ट दिसते.\nया छोट्या project मधून highlight pseudo-elements चा वापर चांगलाच समजतो — selection ते caret सर्व नियंत्रण गाठीशी.", code: `::selection {
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
      {
        title: "focus-visible — कीबोर्ड भेद म्हणजे काय?",
        content: ":focus-visible, outline नियम आणि keyboard UX.\nfocus ही अवस्था element संपादनासाठी सक्रिय झाल्यावर येते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? focus-visible — कीबोर्ड भेद चे फायदे आणि महत्त्व",
        content: "✓ स्पष्टता सर्वांसाठी — keyboard, mouse आणि touch साठी उपयोगी.\n✓ माउस किंवा ट्रॅकपॅडने निवडलेल्या element ला हे उपयोगी नसते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ नवीन नाव लक्षात ठेवा आणि आधुनिक UI मध्ये हेच प्रमुख वापरले जाते — पट्ट्यांचे आरोग्य वाढते.\n✗ दोन्ही एकत्र लिहिल्यास न चुकता सर्वांना सूचना मिळते — प्रथम साधा outline, मग keyborad साठी रंगीत.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. focus स्थिती", content: "focus ही अवस्था element संपादनासाठी सक्रिय झाल्यावर येते. टॅब दाबल्यास keyboard focus घटकांवरून जातो.\nमाउस क्लिक वेगळी अवस्था असते — click सोबत focus येतेच असे नाही.\nदृश्य सूचना आवश्यक आहे — वापरकर्त्याला समजले पाहिजे कोणते घटक आता active आहेत.\nप्रत्येक क्रियेला प्रत्युत्तर द्यायचे आहे. स्पष्टता सर्वांसाठी — keyboard, mouse आणि touch साठी उपयोगी.", code: `a:focus {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "2. :focus-visible भेद", content: ":focus-visible हे केवळ keyboard focus साठी सूचना दर्शवते. माउस किंवा ट्रॅकपॅडने निवडलेल्या element ला हे उपयोगी नसते.\nनियम अचूक असतो — keyboard वापरकर्त्यांना नेहमी स्पष्ट अवस्था दिसते.\n:focus सर्व परिस्थितीत लागू होते, तर :focus-visible फक्त keyboard इनपुटशी संबंधित.\nनवीन नाव लक्षात ठेवा आणि आधुनिक UI मध्ये हेच प्रमुख वापरले जाते — पट्ट्यांचे आरोग्य वाढते.", code: `a:focus-visible {
  outline: 3px solid #16a34a;
}`, codeLanguage: "css" },
      { title: "3. outline सानुकूल", content: "outline हे padding वर येणारे काठ आहे — border सारखे जागा घेत नाही. color आणि width विशिष्ट दिल्यास स्पष्ट दिसते.\noutline-offset दिल्यास रेष आणि element दरम्यान अंतर राहते. border-radius उपलब्ध असला तरी outline कोपऱ्यांवर येते.\ndashed किंवा solid दोन्ही शक्य असून visual focus ची निवड करता येते.\nअचूक नियम तयार करणे meaning असते — दर element ला योग्य width आणि color द्या. व्यावसायिक देखावा मिळतो.", code: `.card:focus-visible {
  outline: 3px dashed #f59e0b;
  outline-offset: 4px;
}`, codeLanguage: "css" },
      { title: "4. :has() सोबत", content: ":has() या pseudo-class या भिन्नतेतून focus-visible वापरता येतो. card:has(a:focus-visible) मध्ये card मध्ये लिंक focus झाली तर नियम लागू होतो.\nparent element focus अवस्थेवर reaction देतो — संपूर्ण card outline ring दाखवतो.\nरचना सुरक्षित राहते कारण नियम फक्त keyboard focus नुसार काम करतो.\nस्क्रीन रीडर इथेही चालेल आणि शुद्ध वेब बनतो. हे आधुनिक संयोजन वाढत्या प्रमाणावर वापरले जाते.", code: `.card:has(a:focus-visible) {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "5. keyboard UX", content: "keyboard UX साठी focus ची दृश्य सूचना हीच मूलभूत. button:focus-visible ने आवश्यक ठिकाणी ring दिसते.\ncurrentColor सोबत outline दिल्यास तो मजकुराच्या रंगाशी जुळतो — themed appearance नेहमी प्राप्त.\noutline-offset थोडे दिल्यास रेष स्पष्ट दिसते तेव्हा अंतर राहते.\nप्रत्येक interactive घटकासाठी हा नियम तयार ठेवा — कीबोर्ड वापरकर्ते नेव्हिगेट करताना कधीही भटकत नाहीत.", code: `button:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि सवय", content: ":focus-visible चा आधार उत्तम आणि व्यापक आहे. जुने :focus कुठल्या ब्राउझरमध्येही चालते, पण result भिन्न असू शकतो.\nदोन्ही एकत्र लिहिल्यास न चुकता सर्वांना सूचना मिळते — प्रथम साधा outline, मग keyborad साठी रंगीत.\nप्रत्येक browser नवे नियम चांगल्याप्रकारे हाताळते.\nवाचनीय आणि शिस्तबद्ध राहते. focus धडा आत्मसात झाला की कोणताही interface keyboard संचालनासाठी सज्ज होतो.", code: `a:focus {
  outline: 2px solid;
}
a:focus-visible {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये फॉर्मसाठी focus ring तयार करतो. सर्व input ला :focus-visible ने योग्य रंगीत outline देतो.\noutline-offset अंतराने ring मजकुरापासून स्पष्ट दिसते.\nप्रत्येक खेडा keyboard नेव्हिगेशनमध्ये स्पष्ट दिसतो; वापरकर्त्याला आपण कोणत्या box मध्ये आहोत याची जाणीव राहते.\nअसे छोटे नियम accessibility साठी मोठा फरक घडतात. हा फॉर्म अनुभव प्रत्येकाला समान देतो.", code: `input:focus-visible {
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
      {
        title: "Editorial portal — अंतिम प्रकल्प म्हणजे काय?",
        content: "सर्व Level 4 तंत्रांचा एकत्र संग्रह.\nध्येय म्हणजे editorial portal एकच पद.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Editorial portal — अंतिम प्रकल्प चे फायदे आणि महत्त्व",
        content: "✓ टोकांचा गट एकाच कुटुंबातील दिसतो — हे दृश्य सातत्य महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ अंतिम देखावा खुला आणि आधुनिक दिसेल असा प्रयत्न करा.\n✗ कामगिरी अंतिम तपासणीत content-visibility चा वापर करता येतो; फक्त कठीण भाग अदृश्य ठेवायला सांगितले जाते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. ध्येय", content: "ध्येय म्हणजे editorial portal एकच पद. स्नॅप गॅलरी, रंग थीम आणि keyboard सुविधा सर्व Level 4 तंत्रे येथे जमवली जातात.\n:root मध्ये --brand आणि color-scheme ठेवून सुरुवात होते. थीमचा पाया एका ठिकाणी असतो.\nअंतिम देखावा खुला आणि आधुनिक दिसेल असा प्रयत्न करा.\nहे पूर्ण होताना Level 4 चे सर्वे दृष्टान्त स्मरणात येतात — रंग, हालचाल आणि नियंत्रण यांची जोड.", code: `:root {
  --brand: #7c3aed;
  color-scheme: light dark;
}`, codeLanguage: "css" },
      { title: "2. पॅलेट रचना", content: "पॅलेट रचना color-mix ने मुख्य टोक वाढवून तयार होते. --brand वर आधारित 70-30 mix ने हलके theme accent मिळते.\nlight-dark थीमसाठी color-scheme आधी सेट होतो. कंट्रास्ट नेहमी जपा — मजकूर स्पष्ट राहिला पाहिजे.\nटोकांचा गट एकाच कुटुंबातील दिसतो — हे दृश्य सातत्य महत्त्वाचे.\nवाचन स्पष्ट आणि स्थिर राहते. थीम बदलली तरी रंगांचे तोल सुटत नाही.", code: `.theme-accent {
  background: color-mix(in oklab, var(--brand) 70%, white);
}`, codeLanguage: "css" },
      { title: "3. स्नॅप गॅलरी", content: "स्नॅप गॅलरी horizontal scroll सह बनते. showcase ला flex आणि overflow-x: auto देतो.\nscroll-snap-type: x mandatory ने प्रत्येक frame स्पष्टपणे snap होतो.\nप्रत्येक figure scroll-snap-align: start ने सुरुवातीशी जोडले जाते आणि आकार image पूर्ण भरतो.\ncaption center मध्ये वाचता येते. कीबोर्ड साठी focus ring जोडल्याने गॅलरी keyboard नेव्हिगेट होते — हा प्रवेश्य दृष्टिकोन संपूर्ण portal ची ताकद आहे.", code: `.showcase {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.showcase figure {
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "4. प्रमाण आणि मार्ग", content: "प्रमाण आणि मार्ग या भागात hero video 16/9 aspect-ratio थांबतो. frame जागा राखतो आणि layout स्थिर राहतो.\norbit-dot offset-path च्या वर्तुळावरून फिरतो — animation drift 8s infinite ने सतत हलतो.\nreduced motion च्या साठी @media मध्ये animation निलंबित करतो. ही सौम्यता accessibility च्या दृष्टीने आवश्यक.\nप्रमाण जागा राखून layout तुटणे टाळतो; हलके animation performance देखील सुधारतात.", code: `.hero-frame {
  aspect-ratio: 16 / 9;
}
.orbit-dot {
  offset-path: circle(40px at 50% 50%);
  animation: drift 8s infinite;
}`, codeLanguage: "css" },
      { title: "5. highlight आणि focus", content: "highlight आणि focus या भागात ::selection ने brand रंग दृश्यमान होतो. पिवळा background आणि गडद मजकूर स्पष्ट contrast देतो.\ncaret स्पष्ट ठेवल्यास मजकूर entry अवस्था नेहमी दिसते.\n:focus-visible ने सर्व प्रमुख घटकांवर ring दिसतो — keyboard वापरकर्ते सहज नेव्हिगेट करतात.\nनिवडलेले मजकूर उजळ दिसतो. प्रवेश्यता ही मुख्यता आहे — design मध्ये दुय्यम नाही.", code: `::selection {
  background: #fde047;
  color: #1e293b;
}
:focus-visible {
  outline: 3px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "6. कामगिरी अंतिम", content: "कामगिरी अंतिम तपासणीत content-visibility चा वापर करता येतो; फक्त कठीण भाग अदृश्य ठेवायला सांगितले जाते.\nसर्व component ब्राउझरमध्ये तपासून दृश्य फरक ठरवा.\nमोबाईल आणि desktop दोन्हीवर तोल तपासा.\nप्रकल्प शेवटी सर्व Level 4 तंत्र प्रभावीपणे दर्शवितो — रंग, गॅलरी, मार्ग आणि focus एकत्र सुसंगतपणे कार्य करतात.", code: `@media (prefers-reduced-motion: reduce) {
  .orbit-dot {
    animation: none;
    offset-distance: 0%;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये सर्व Level 4 भाग एकत्र करतो. portal ला container-name देतो आणि style query जोडतो.\n@container style(--theme: dark) नुसार portal चा रंग फिकट होतो.\nसंपूर्ण editorial portal — रंग मिक्सिंग, snap gallery, motion path आणि focus — एका ठिकाणी जमतो.\nप्रत्येक तंत्राचा छोटा पण ठोकदार वापर येथे दिसतो. Level 4 ची सर्व शिकवण या final project मध्ये अनुभवता येते.", code: `.portal {
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
