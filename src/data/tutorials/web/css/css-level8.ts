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
      {
        title: "nav — मार्ग रचना म्हणजे काय?",
        content: "navigation patterns आणि states.\nnav हा पेजचा मुख्य मार्ग दाखवतो — घर, बातम्या, संपर्क असे दुवे एकाच जागी एकत्र.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? nav — मार्ग रचना चे फायदे आणि महत्त्व",
        content: "\"nav — मार्ग रचना\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. nav कल्पना", content: "nav हा पेजचा मुख्य मार्ग दाखवतो — घर, बातम्या, संपर्क असे दुवे एकाच जागी एकत्र. वापरकर्ता कुठे जायचे हे इथे शोधतो; म्हणून स्थान स्थिर आणि क्रम स्पष्ट ठेवतात.\nflex ही रचना आडवी मांडते आणि gap: 8px ने प्रत्येक दुव्यामध्ये समान अंतर देते. एवढ्या दोन ओळींनी सुबक आणि सर्व स्क्रीनवर चालणारा नव तयार होतो.\nहा पाया घट्ट असेल तर sidebar, active स्थिती आणि mobile मेनू असलेला संपूर्ण नव या रचनेवर बसतो — सुरुवातीचा नियमच पुढील सगळे ठरवतो.", code: `nav ul {
  display: flex;
  gap: 8px;
}`, codeLanguage: "css" },
      { title: "2. sidebar रचना", content: "sidebar हा उभा मेनू — पेजच्या एका बाजूला दुवे एकावर एक मांडलेले. मुख्य सामग्रीसोबत हे ठिकाण वेगळे राहते आणि मोठ्या पेजमध्ये मार्ग कायम दिसतो.\ngrid मध्ये gap: 4px ने दुव्यांमधील अंतर लहान पण नेमके; प्रत्येक दुव्याला padding: 10px 14px मुळे क्लिक करण्याचे क्षेत्र मोठे होते. मोठे क्षेत्र म्हणजे सोपा क्लिक — विशेषतः मोबाइलवर.\nअशी रचना मजबूत आधार देते आणि स्क्रोल होतानाही दुवे गाठता येतात. पुढील थर याच पायावर उभे होतात.", code: `.sidebar {
  display: grid;
  gap: 4px;
}
.sidebar a {
  padding: 10px 14px;
}`, codeLanguage: "css" },
      { title: "3. active स्थिती", content: "सध्या उघडलेले पेज नवमध्ये वेगळे दिसावे म्हणून active स्थिती. वापरकर्ता कुठे आहे हे लगेच कळते — दिशा नियंत्रणाचा हा पहिला आधार.\nHTML मध्ये त्या दुव्याला aria-current=\"page\" देतात; CSS ने .nav a[aria-current=\"page\"] निवडून background व color बदलतो. हेच चिन्ह स्क्रीन रीडरलाही नेमकी जागा सांगते.\nकेवळ रंगावर अवलंबून न राहता background आणि color असे दोन संकेत दिल्याने स्थिती अधिक स्पष्ट होते आणि प्रवेश्यता वाढते.", code: `.nav a[aria-current="page"] {
  background: #eef2ff;
  color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "4. indicator थर", content: "active दाखवण्याची दुसरी रीत म्हणजे खाली रंगीत border — indicator थर. मजकुराचा रंग न बदलता ही रेषा दुवा निवडलेला असल्याचे दाखवते.\nसुरुवातीला border-bottom: 2px solid transparent ठेवतो, त्यामुळे जागा आरक्षित राहते; hover वेळी border-color: #6366f1 देऊन दुवा जिवंत दिसतो. transparent पाया layout हलण्यापासून थांबवतो.\nही पद्धत शांत आणि आधुनिक दिसते — फक्त border रंग बदलतो, म्हणून संक्रमण गुळगुळीत आणि कोड साधा राहतो.", code: `.nav a {
  border-bottom: 2px solid transparent;
}
.nav a:hover {
  border-color: #6366f1;
}`, codeLanguage: "css" },
      { title: "5. mobile मेनू", content: "लहान स्क्रीनवर संपूर्ण नव दाबून बसतो, म्हणून तो लपवून बटण वापरतात. mobile मेनूचा CSS नियम — @media (width < 640px) मध्ये .nav ला display: none.\nयामुळे जागा मोकळी होते आणि सामग्रीला श्वास मिळतो; बटणावर क्लिक केले की JavaScript ने नव उघडला जातो. CSS फक्त कोणती स्थिती दिसेल हे ठरवतो.\nकुंपण 640px एकाच ठिकाणी ठेवा जेणेकरून मोबाइल आणि डेस्कटॉप व्यवस्था स्पष्ट वेगळ्या राहतात. हा नियम मोबाइल-प्रथम रचनेचा पाया आहे.", code: `@media (width < 640px) {
  .nav {
    display: none;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "कोणत्याही ब्राउझर आणि स्क्रीनवर नव कसा पडतो ते तपासण्यासाठी flex-wrap उपयुक्त. जागा कमी पडली तर दुवे स्वतः खाली उतरतात — तुटत नाहीत.\nflex सह flex-wrap म्हणजे लहान-मोठ्या प्रत्येक रुंदीवर समान रचना; दुवा कापला जात नाही. अशा खात्रीमुळे कोड सुरक्षित राहतो.\nआधार घट्ट असेल तर पुढे breadcrumb, tabs सारखे भाग सहज बसतात. छोटे नियम संपूर्ण नव स्थिर ठेवतात.", code: `.nav {
  display: flex;
  flex-wrap: wrap;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता सगळे नियम एकत्र आणून एक लहान नव बनवूया. प्रथम .nav ला display: flex आणि gap: 6px द्या — दुवे आडवे आणि समान अंतराने मांडले जातील.\nनंतर एका दुव्याला aria-current=\"page\" देऊन active शैली जोडा; हीच सवय पुढील धड्यांत कामी येते. त्यानंतर 640px खाली mobile बटणाची तयारी ठेवा.\nएवढ्यावर नव वापरासाठी तयार होतो. हा छोटा सराव Level 8 च्या मार्ग रचनेचा सारांश आहे.", code: `.nav {
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
      {
        title: "breadcrumb — मार्ग दाखला म्हणजे काय?",
        content: "breadcrumb separation आणि semantics.\nbreadcrumb हा मार्ग दाखवणारा क्रम — घर, बातम्या, लेख अशा खोल दुव्यांची साखळी.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? breadcrumb — मार्ग दाखला चे फायदे आणि महत्त्व",
        content: "✓ घर क्लिक केले की मुख्य पेज उघडते — परत येण्याची सवय वापरकर्त्याला सोयीस्कर.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. breadcrumb", content: "breadcrumb हा मार्ग दाखवणारा क्रम — घर, बातम्या, लेख अशा खोल दुव्यांची साखळी. वापरकर्ता कुठून आला आणि कुठे आहे हे पटकन समजते.\nflex-wrap ने हा क्रम सुबक गुंडाळतो; जागा कमी पडली तर भाग खाली सरकतात पण क्रम तुटत नाही. छोट्या पडद्यावर हीच सुरक्षा असते.\nप्रत्येक दुवा मागे नेऊ शकतो, त्यामुळे परत जाणे सोपे होते. मार्ग स्पष्ट दिसल्याने वापरकर्त्याचा आत्मविश्वास वाढतो आणि पेजची खोली दिसते.", code: `.crumbs {
  display: flex;
  flex-wrap: wrap;
}`, codeLanguage: "css" },
      { title: "2. विभाजक", content: "भागांमध्ये स्लॅश किंवा बाण विभाजक — मार्ग वाचायला सोपा करतो. हा separator CSS ने ::before pseudo-element द्वारे जोडतात, त्यामुळे HTML स्वच्छ राहतो.\n.crumbs li + li::before मध्ये content: \"/\" हे स्लॅश तयार करते; margin-inline: 8px ने सभोवती अंतर आणि color: #94a3b8 ने हलका रंग. भाग स्पष्ट वेगळे दिसतात.\nप्रत्येक भागाबरोबर हा नियम आपोआप लागतो — नवीन दुवा जोडला तरी कोड बदलत नाही. विभाजकाची ही रचना सडपातळ आणि पुनर्वापरयोग्य आहे.", code: `.crumbs li + li::before {
  content: "/";
  margin-inline: 8px;
  color: #94a3b8;
}`, codeLanguage: "css" },
      { title: "3. aria-label", content: "breadcrumb रचनेला अर्थ देण्यासाठी nav[aria-label=\"Breadcrumb\"] असा विशेष नव. कोणता मार्ग कोणता हे स्क्रीन रीडरलाही स्पष्ट होते.\nCSS मध्ये हीच निवड करून ol ला list-style: none आणि display: flex देतात — यादीचे गुण काढून दुवे आडवे मांडले जातात.\nप्रवेश्यता केवळ रंगाची नाही; योग्य label ने साधनेही मार्ग समजून घेतात. कमीत कमी कोडमध्ये रचना सुरेख आणि अर्थपूर्ण बनते.", code: `nav[aria-label="Breadcrumb"] ol {
  list-style: none;
  display: flex;
}`, codeLanguage: "css" },
      { title: "4. एलिप्सिस", content: "खूप लांब मार्ग असेल तर सुरुवातीचे भाग लपवून शेवट स्पष्ट ठेवतात. .crumbs li:first-child ~ li ला display: none देऊन फक्त अंतिम भाग दिसतो.\nहा नियम पहिल्या दुव्यानंतरचे सर्व भाग लपवतो — वापरकर्ता कुठे आहे हे नेहमी दृश्य राहते. मर्यादित जागेत हा तोल आवश्यक आहे.\nदिशा मिळते आणि पुरेसा संदर्भही राहतो. लहान स्क्रीनवर हा एलिप्सिस नियम विशेष उपयुक्त ठरतो.", code: `.crumbs li:first-child ~ li {
  display: none;
}`, codeLanguage: "css" },
      { title: "5. घर शॉर्ट", content: "घर हा मार्गाचा पहिला दुवा — सामान्यतः आयकॉनने सांकेतिक. font-weight: 700 देऊन तो ठळक करतात आणि क्रमाची सुरुवात स्पष्ट होते.\nमजकुराऐवजी आयकॉन असल्यास स्लॅश त्याच्या उजवीकडे नेमका बसतो; ही बारीक रचना दृश्य तोल सुधारते.\nघर क्लिक केले की मुख्य पेज उघडते — परत येण्याची सवय वापरकर्त्याला सोयीस्कर. छोटा नियम, परंतु दिशेच्या समजुतीत मोठा फरक करतो.", code: `.crumb-home {
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "breadcrumb चा पाया म्हणजे ol चे reset — list-style: none, margin: 0 आणि padding: 0. मूळ यादीचे गुण व अंतर काढून स्वच्छ मार्ग तयार होतो.\nflex आधारामुळे जुन्या ब्राउझरमध्येही हा क्रम स्थिर राहतो. सर्वत्र समान तळ असल्याने नवीन नियम अचूक लागू होतो.\nअसा पाया मजबूत असेल तर विभाजक, aria-label आणि इतर थर सहज बसतात. छोटे reset मोठ्या रचनांचा आधार असतो.", code: `.crumbs ol {
  list-style: none;
  margin: 0;
  padding: 0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक छोटा breadcrumb मार्ग बनवूया — flex ने दुवे आडवे मांडा आणि ol ला list-style: none, margin: 0, padding: 0 ने reset करा.\nनंतर li + li::before मध्ये content: \"/\" ने विभाजक जोडा; margin-inline व color ने तो हलका ठेवा. अंतिम दुवा font-weight ने ठळक करा.\nएवढ्या नियमांनी मार्ग वाचनीय आणि प्रवेश्य होतो. हा पाया पुढील tabs धड्यातील मार्ग संकल्पनांना तयार करतो.", code: `.crumbs {
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
      {
        title: "tabs — भाग निवड म्हणजे काय?",
        content: "tabs roles आणि state नियम.\ntabs हे एकाच भागात अनेक विभाग — tablist मध्ये [role=\\\"tab\\\"] असलेले दुवे आणि त्यांना जोडलेले panels.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? tabs — भाग निवड चे फायदे आणि महत्त्व",
        content: "\"tabs — भाग निवड\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. tabs कल्पना", content: "tabs हे एकाच भागात अनेक विभाग — tablist मध्ये [role=\"tab\"] असलेले दुवे आणि त्यांना जोडलेले panels. क्लिक केल्यावर संबंधित भाग बदलतो.\n[role=\"tablist\"] ला display: flex आणि gap: 4px देऊन टॅब आडवे मांडतात. ही रचना कीबोर्डनेही वापरता येते.\nफक्त एकच panel दिसत असल्याने जागा वाचते आणि सामग्री संक्षिप्त राहते. पर्यायांचा क्रम स्थिर असल्याने निवड करणे सोपे जाते.", code: `[role="tablist"] {
  display: flex;
  gap: 4px;
}`, codeLanguage: "css" },
      { title: "2. state नियम", content: "निवडलेला टॅब स्पष्ट दिसावा — aria-selected=\"true\" हे चिन्ह ते ठरवते. [role=\"tab\"][aria-selected=\"true\"] निवडून background आणि color बदलतो.\nसक्रिय टॅबला background: #eef2ff आणि color: #4f46e5 मिळतो; बाकी टॅब नेहमीसारखे राहतात. रीडरलाही हे चिन्ह वाचता येते.\nरंगाबरोबरच हा attribute एक वेगळा संकेत — स्थिती दोन मार्गांनी स्पष्ट होते. प्रवेश्यता वाढवण्याची हीच योग्य पद्धत.", code: `[role="tab"][aria-selected="true"] {
  background: #eef2ff;
  color: #4f46e5;
}`, codeLanguage: "css" },
      { title: "3. focus रिंग", content: "कीबोर्डने टॅबवर पोहोचल्यावर स्पष्ट रिंग हवी — :focus-visible ही निवड फक्त कीबोर्ड वापरावर लागू होते, माऊसवर नाही.\noutline: 2px solid #6366f1 आणि outline-offset: 2px देऊन रिंग विशेष दिसते. कोणता दुवा किंवा टॅब निवडला आहे ते लगेच कळते.\nहा नियम लहान पण प्रवेश्यता मानकांचा गाभा. एवढ्यामुळे keyboard वापरकर्त्याला स्थिती कधीही अदृश्य राहत नाही.", code: `[role="tab"]:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "4. panel शैली", content: "tabpanel हा निवडलेल्या टॅबचा मजकूर भाग. [role=\"tabpanel\"] ला padding: 16px आणि border: 1px solid #e2e8f0 देऊन तो वेगळा दिसतो.\nborder मुळे panel च्या सीमा स्पष्ट होतात — मजकूर कोठे संपतो ते दिसते. padding ने मजकुराला आतील श्वास मिळतो.\nप्रत्येक टॅबला स्वतःचा panel असतो; त्यामुळे सामग्रीची विभागणी स्वच्छ आणि रचना वाचण्यास सोपी राहते.", code: `[role="tabpanel"] {
  padding: 16px;
  border: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
      { title: "5. संकेत नियम", content: "टॅब बदलण्यासाठी उजवी-डावी बाण, Home/End असे कीबोर्ड संकेत वापरतात. हे नियंत्रण JavaScript मध्ये लिहितात.\nCSS चा थर म्हणजे [role=\"tablist\"] ला overflow-x: auto — जागा कमी पडल्यास टॅब आडवा स्क्रोल होतो; कीबोर्ड मार्ग स्थिर राहतो.\nअशा रीतीने CSS आणि JavaScript यांची जबाबदारी वेगळी ठेवतात — प्रत्येकाचे काम स्पष्ट व सांभाळणे सोपे.", code: `[role="tablist"] {
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "tabs व्यवस्था नेहमी सर्वांना मोकळी राहू द्या — [role=\"tabpanel\"] ला display: block असा पाया. JavaScript लोड न झाल्यासही panel दृश्य राहते.\nrole आणि fallback नियम लिहिल्यास स्क्रीन रीडर व जुने ब्राउझरही रचना उमटवतात — सामग्री कधीही लपलेली राहत नाही.\nअसा आधार मजबूत असेल तर एनिमेशन व रंगाचे थर निर्भयपणे बसवता येतात. प्रवेश्यता आधी, सजावट मागून.", code: `[role="tabpanel"] {
  display: block;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता टॅबची सक्रिय स्थिती नीट दाखवूया. [role=\"tab\"][aria-selected=\"true\"] ला border-bottom: 3px solid #6366f1 द्या — खाली ठळक रेषा.\nरेषा नेमकी आणि स्थिर असते; टॅबगटातील उर्वरित टॅब नेहमीसारखे राहतात. flex मांडणीतील अंतर जुळते.\nया एका नियमाने निवडलेला टॅब लगेच ओळखता येतो. focus-visible रिंग सोबत दिल्यास कीबोर्ड वापरकर्त्यासाठी व्यवस्था पूर्ण होते.", code: `[role="tab"][aria-selected="true"] {
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
      {
        title: "form — प्रश्न व्यवस्था म्हणजे काय?",
        content: "form states, focus आणि helper.\nform हा प्रश्न विचारण्याची जागा — नाव, इमेल, संदेश अशी मजकूर क्षेत्रे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? form — प्रश्न व्यवस्था चे फायदे आणि महत्त्व",
        content: "✓ ::after मुळे HTML मध्ये काहीही जोडावे लागत नाही — CSS स्वतः तारका तयार करतो; सर्व आवश्यक क्षेत्रांना हा चिन्ह आपोआप मिळतो.\n✓ ब्राउझर स्वतः तपासणी करतो — JavaScript ची गरज नाही.\n✓ फॉर्ममध्ये ही स्थिती खूप महत्त्वाची.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ input भरताना त्याची स्थिती बदलते — valid म्हणजे जुळते, invalid म्हणजे चुकते.\n✗ अशा नियमांनी चुक लगेच दिसते आणि भरण्याची सवय सुधारते.\n✗ placeholder मध्ये ही माहिती टाकू नका; ती input च्या आतच झाकली जाते आणि तांत्रिक अडचणी सोबत आणते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. form रचना", content: "form हा प्रश्न विचारण्याची जागा — नाव, इमेल, संदेश अशी मजकूर क्षेत्रे. रचना स्पष्ट असेल तर भरणे सोपे जाते.\n.field च्या display: grid आणि gap: 6px ने label आणि input यांचे अंतर नेमके; प्रत्येक प्रश्न उभ्या क्रमाने मांडला जातो.\nभविष्यात error किंवा helper मजकूर जोडण्याची जागा या रचनेत आरक्षित असते. संपूर्ण form नंतर स्वच्छ आणि नीट भरता येतो.", code: `.field {
  display: grid;
  gap: 6px;
}`, codeLanguage: "css" },
      { title: "2. required star", content: "आवश्यक प्रश्न दाखवण्यासाठी label च्या शेवटी तारका लावतात. .required label::after मध्ये content: \" *\" आणि color: #ef4444.\n::after मुळे HTML मध्ये काहीही जोडावे लागत नाही — CSS स्वतः तारका तयार करतो; सर्व आवश्यक क्षेत्रांना हा चिन्ह आपोआप मिळतो.\nतारका गडद लाल रंगाची — दृष्टीला स्पष्ट. label ला for ने input शी जोडल्यास हे सूत्र प्रवेश्य राहते.", code: `.required label::after {
  content: " *";
  color: #ef4444;
}`, codeLanguage: "css" },
      { title: "3. state शैली", content: "input भरताना त्याची स्थिती बदलते — valid म्हणजे जुळते, invalid म्हणजे चुकते. CSS या स्थिती रंगांनी दाखवते.\ninput:invalid ला border-color: #f87171 लाल; input:valid ला #22c55e हिरवा. ब्राउझर स्वतः तपासणी करतो — JavaScript ची गरज नाही.\nकेवळ रंगावर अवलंबू नका; मजकूर सूचना सोबत असाव्यात. अशा नियमांनी चुक लगेच दिसते आणि भरण्याची सवय सुधारते.", code: `input:invalid {
  border-color: #f87171;
}
input:valid {
  border-color: #22c55e;
}`, codeLanguage: "css" },
      { title: "4. focus शैली", content: "कीबोर्डने input वर पोहोचल्यावर focus रिंग दिसावी — input:focus-visible ला outline: 2px solid #6366f1 आणि outline-offset: 2px.\noffset मुळे रिंग किनारीपासून थोडी बाहेर येते म्हणून कोणत्याही background वर स्पष्ट दिसते; सध्या कोणता प्रश्न भरला जातो हे कळते.\nफॉर्ममध्ये ही स्थिती खूप महत्त्वाची. टच आणि कीबोर्ड दोन्हीसाठी संवाद सुखद बनतो.", code: `input:focus-visible {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. सहायता मजकूर", content: "प्रश्नासोबत छोटी सूचना helper म्हणून देतात — उत्तर कोणत्या स्वरूपात हवे ते सांगते. .hint ला font-size: 0.875rem आणि color: #64748b.\nplaceholder मध्ये ही माहिती टाकू नका; ती input च्या आतच झाकली जाते आणि तांत्रिक अडचणी सोबत आणते. स्वतंत्र helper मजकूर कायम दिसतो.\nहलका रंग आणि लहान आकार असला तरी तो निर्देशाचा भाग राहतो. प्रश्न आणि सूचना यांची जोडी स्पष्ट असेल तर आधार मजबूत.", code: `.hint {
  font-size: 0.875rem;
  color: #64748b;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: ":user-invalid हा नवीन selector — वापरकर्त्याने input ला स्पर्श केल्यानंतरच invalid स्थिती दाखवतो. आधीच कायम लाल नसल्याने त्रास कमी होतो.\ninput:user-invalid ला border-color: #ef4444 द्या; जुन्या ब्राउझरसाठी :invalid असा पाया ठेवावा. दोन्ही नियम सांभाळता येतात.\nअशा प्रगतीशील व्यवस्थेने वृद्ध आणि नवीन ब्राउझरमध्ये form स्थिर राहतो. सवय चांगली राखली तर कोड भविष्यात टिकतो.", code: `input:user-invalid {
  border-color: #ef4444;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एका field ची संपूर्ण रचना बनवूया. .field ला display: grid आणि gap: 6px द्या — label आणि input उभे नेमके नियंत्रित.\nआवश्यक असल्यास .required label::after ने तारका जोडा; focus-visible ने कीबोर्ड रिंग दाखवा; helper मजकूर छोटा आणि हलका ठेवा.\nही दोन-तीन ओळींची रचना संपूर्ण form मध्ये पुन्हा वापरता येते. भाग एका जागी परिभाषित झाल्यास form अधिक नीट राहते.", code: `.field {
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
      {
        title: "switch — पर्याय नियंत्रण म्हणजे काय?",
        content: "custom switch आणि states.\nswitch हा दोन-स्थिती पर्याय — चालू/बंद, होय/नाही.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? switch — पर्याय नियंत्रण चे फायदे आणि महत्त्व",
        content: "✓ प्रवेश्यता नियमाचा हा महत्त्वाचा भाग — focus कधीही अदृश्य ठेवू नये.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. switch कल्पना", content: "switch हा दोन-स्थिती पर्याय — चालू/बंद, होय/नाही. मूळ checkbox असतो, पण दृश्यासाठी सुंदर रचना CSS बनवते.\n.switch ला position: relative, width: 52px आणि height: 28px देतात — track चा आकार. डाव-उजवीकडे हालचालीचा हा पाया.\nमूळ checkbox प्रवेश्यता नियमाने या रचनेतच राहतो; फक्त दृश्य बदलते. कीबोर्ड वापरकर्त्यांसाठी हीच योग्यता निर्णायक असते.", code: `.switch {
  position: relative;
  width: 52px;
  height: 28px;
}`, codeLanguage: "css" },
      { title: "2. thumb रचना", content: "track वर सरकणारा वर्तुळ thumb. .switch::after मध्ये content: \"\" आणि absolute position ने तो track च्या आत बसवतात.\nwidth 22px आणि height 22px ने वर्तुळ; border-radius: 9999px ने पूर्ण गोल. transition: transform 0.2s ने हालचाल गुळगुळीत होते.\ntop: 3px आणि left: 3px ने thumb नेमक्या जागी बसतो. हा थर track वर स्थिर असतो आणि checked नियमाला तयार होतो.", code: `.switch::after {
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
      { title: "3. checked नियम", content: "checked असताना track आणि thumb दोन्ही बदलतात — .switch input:checked + .track ला background: #22c55e हिरवा.\nthumb ला transform: translateX(24px) देऊन उजवीकडे सरकतो; checked स्थिती दोन्ही बदलांनी स्पष्ट होते.\ntransition शिवाय हे झेपेने होईल; translateX थांबण्याचे स्थान track रुंदीशी जुळते. स्थिती बदलाचा अनुभव नेमका आणि आनंददायी.", code: `.switch input:checked + .track {
  background: #22c55e;
}
.switch input:checked + .track::after {
  transform: translateX(24px);
}`, codeLanguage: "css" },
      { title: "4. focus सुरक्षा", content: "switch ची कीबोर्ड दृश्यता — input:focus-visible + .track ला outline: 2px solid #6366f1 आणि outline-offset: 2px.\nही रिंग track च्या सभोवती दिसते; कीबोर्डने switch वर आल्यावर स्थान कळते. click करण्यापूर्वी दृश्य स्पष्ट असते.\nप्रवेश्यता नियमाचा हा महत्त्वाचा भाग — focus कधीही अदृश्य ठेवू नये. छोट्या गुंतवणुकीने आत्मविश्वास वाढतो.", code: `.switch input:focus-visible + .track {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. disabled स्थिती", content: "न वापरण्यासारखा पर्याय disabled करतात. input:disabled + .track ला opacity: 0.5 — track फिके दिसतो.\nहा संकेत सांगतो हे सध्या बदलता येणार नाही; क्लिकला प्रतिसाद ब्राउझर संपवतो. रचना तशीच राहते, फक्त स्वर मंद.\nफिकेपणा सोबत contrast राखा — स्थिती समजते पण संपूर्ण अदृश्य होत नाही. वाचन सुखद आणि नियंत्रण स्पष्ट राहते.", code: `.switch input:disabled + .track {
  opacity: 0.5;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "switch चा पाया म्हणजे track — appearance: none ने मूळ तरटे रूप काढून टाकतात. border-radius: 9999px आणि background: #e2e8f0.\nजुन्या ब्राउझरला appearance न समजल्यास तो नियम उपेक्षित होतो आणि मूळ checkbox तसाच दिसतो — रचना कधीही मोडत नाही.\nअसा आधार घट्ट म्हणजे thumb आणि checked यांचे नियम निर्भयपणे जोडता येतात. प्रगतीशील वाढीचा हा नमुना.", code: `.track {
  appearance: none;
  border-radius: 9999px;
  background: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक छोटा switch बनवूया. .track ला appearance: none, border-radius: 9999px आणि background: #e2e8f0 द्या — स्वच्छ track.\n.switch मध्ये relative position आणि निश्चित रुंदी; thumb साठी ::after वर्तुळ. checked होताच हिरवा रंग आणि translateX हालचाल.\nही रचना checkbox वर बसते म्हणून कीबोर्ड आणि रीडर सुरक्षित राहतात. संपूर्ण switch स्थिर आणि सुंदर दिसतो.", code: `.track {
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
      {
        title: "skeleton — भार दृश्य म्हणजे काय?",
        content: "skeleton आणि shimmer नियम.\nसामग्री लोड होईपर्यंत जागा दाखवणारा skeleton — रिकाम्या रंगीत आकृती.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? skeleton — भार दृश्य चे फायदे आणि महत्त्व",
        content: "\"skeleton — भार दृश्य\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ हा थर लोडिंगचा कंटाळा कमी करतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. skeleton", content: "सामग्री लोड होईपर्यंत जागा दाखवणारा skeleton — रिकाम्या रंगीत आकृती. लोडिंग होत असल्याचे कळते आणि रचना दिसते.\n.skeleton ला background: #e2e8f0 आणि border-radius: 8px देतात — हलके राखाडी ठोकळे. आकार सामग्रीच्या जवळचा ठेवतात.\nहा थर लोडिंगचा कंटाळा कमी करतो. त्वरित उडी देणाऱ्या रचनेपेक्षा हा अनुभव शांत आणि स्थिर असतो.", code: `.skeleton {
  background: #e2e8f0;
  border-radius: 8px;
}`, codeLanguage: "css" },
      { title: "2. shimmer नियम", content: "skeleton वर हलणारी चमक म्हणजे shimmer. .skeleton::after मध्ये linear-gradient ची बारीक पट्टी हलते.\ngradient 90deg ने आडवा; animation: shimmer 1.5s infinite ने सतत लहर. ही हालचाल लोडची उत्सुकता वाढवते.\n::after साठी display: block आणि height: 100% आवश्यक — ठोकळ्याच्या चौकटीतच लहर राहते. नियम लहान, अनुभव मात्र सजीव.", code: `.skeleton::after {
  content: "";
  display: block;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: shimmer 1.5s infinite;
}`, codeLanguage: "css" },
      { title: "3. width तोल", content: "एकाच पेजवर avatar आणि मजकूर skeleton असतील तर आकार वेगळे ठेवा. .s-avatar ला width: 48px आणि height: 48px.\nborder-radius: 9999px ने avatar पूर्ण वर्तुळ; मजकुराच्या ओळी रुंद आणि चपट्या. अशा तोलाने skeleton प्रत्यक्षासारखे दिसते.\nलोड झाल्यावर खऱ्या सामग्रीची जागा होते; आकार जुळले असल्याने रचनेची झेप कमी होते आणि अनुभव गुळगुळीत राहतो.", code: `.s-avatar {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
}`, codeLanguage: "css" },
      { title: "4. reduced सह", content: "प्रत्येक वापरकर्ता हालचाल सहन करत नाही. prefers-reduced-motion: reduce असेल तर shimmer पूर्ण थांबवा.\n@media प्रश्नामध्ये .skeleton::after ला animation: none देतात. सामग्री तीच राहते, फक्त गती नाही.\nही सवलत गती संवेदनशील वापरकर्त्यांसाठी आहे. प्रवेश्यता आदर दाखवण्याची ही सोपी पद्धत प्रत्येक animation मध्ये वापरावी.", code: `@media (prefers-reduced-motion: reduce) {
  .skeleton::after {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "5. state बदल", content: "लोड झाल्यावर skeleton लपवून सामग्री दाखवतात. .loaded .skeleton ला display: none — loaded class घातल्यावर हा नियम लागतो.\nJavaScript class बदलतो आणि CSS नोंदी घेते; रचना समान राहते. दोन्ही अवस्था एकाच पेजमध्ये आहेत.\nskeleton ने आधीच जागा तयार केल्याने सामग्री आल्यावर झेप होत नाही. संक्रमण शांत आणि वापरकर्त्याला सुखद.", code: `.loaded .skeleton {
  display: none;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "shimmer हालचालीसाठी keyframes हवे — @keyframes shimmer मध्ये from translateX(-100%) ते to translateX(100%).\nही फ्रेम gradient आडवा फिरवते; animation इतरत्र घोषित केला. जुन्या ब्राउझरला keyframes न समजल्यास skeleton स्थिर राहतो.\nआधार मजबूत असेल तर हालचाल केवळ सजावट राहते. सराव वाढला की उत्तम थर जोडले जातात.", code: `@keyframes shimmer {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक साधा skeleton बनवूया. .skeleton ला background: #e2e8f0 आणि border-radius: 8px द्या — लोडिंगचा शांत पाया.\navatar साठी .s-avatar वर्तुळ आणि ओळींसाठी अर्धवट रुंद ठोकळे तयार करा; shimmer साठी ::after व gradient animation जोडा.\nसोबत prefers-reduced-motion मध्ये animation: none लिहा — सर्वांना आदर. हा छोटा लोडर पुढील state नियमांना तयार आहे.", code: `.skeleton {
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
      {
        title: "table — डेटा व्यवस्था म्हणजे काय?",
        content: "data table स्क्रोल आणि cards.\ntable ही माहिती सारणी — ओळी आणि स्तंभ व्यवस्थित.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? table — डेटा व्यवस्था चे फायदे आणि महत्त्व",
        content: "✓ विशिष्ट स्तंभ ठळक केल्याने महत्त्वाची माहिती पटकन गवसते.\n✓ संपूर्ण table साठी खास नियमाची गरज नाही.\n✓ मोठ्या माहितीसाठी ही गरजेची सवय.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. table रचना", content: "table ही माहिती सारणी — ओळी आणि स्तंभ व्यवस्थित. पण लहान स्क्रीनवर ती दाबून बसते; म्हणून wrapper आवश्यक.\n.table-wrap ला overflow-x: auto देऊन आडवा स्क्रोल मिळतो; table स्वतः मोठी राहते, परंतु वाहक सरकतो.\nदोन्ही बाजूंमध्ये जागा संतुलित ठेवा; स्तंभ शोधणे सोपे व्हावे. ही रचना मोठ्या माहितीसाठी सर्वात सुरक्षित.", code: `.table-wrap {
  overflow-x: auto;
}`, codeLanguage: "css" },
      { title: "2. header स्थिर", content: "स्क्रोल करताना स्तंभांची नावे कायम दिसावी — th ला position: sticky आणि top: 0. हेडर वर अडकून राहतो.\nbackground: #f1f5f9 देऊन विशेष भाग; स्क्रोलने मजकूर त्याच्या मागून निघून जातो पण नाव कायम दिसते.\nही सोय दीर्घ table मध्ये वाचन सोपे करते — नेहमी कोणता स्तंभ विचारात आहे हे कळत राहते.", code: `th {
  position: sticky;
  top: 0;
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "3. zebra नियम", content: "ओळी अधिक वाचनीय करण्यासाठी पर्यायी रंग — zebra. tbody tr:nth-child(even) ची background: #f8fafc.\nसम क्रमाच्या ओळी हलक्या रंगतात; विषम मूळ राहतात. नजर पटकन एका ओळीवरून पुढील ओळीकडे सरकते.\nरंगातील फरक मऊ ठेवा — खूप जोरदार रंग वाचनाला त्रास देतो. मोठ्या table मध्ये ही छोटी सवय खूप वेळ वाचवते.", code: `tbody tr:nth-child(even) {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "4. card मोड", content: "अत्यंत लहान स्क्रीनवर table च्या ऐवजी cards दाखवतात. @media (width < 640px) मध्ये td::before ला content: attr(data-label) देतात.\nप्रत्येक सेल आता स्वतःच्या नावासह उभा दिसतो; स्तंभ नाव मजकुराबरोबरच येते. प्रत्येक cell ला block रूप हवे.\nहे बदल मोबाइलवर वाचनीयता वाढवते. जुन्या ब्राउझरलाही हे नियम समजतात म्हणून रचना सर्वत्र उपयुक्त.", code: `@media (width < 640px) {
  td::before {
    content: attr(data-label);
  }
}`, codeLanguage: "css" },
      { title: "5. अंतिम स्तंभ", content: "शेवटचा स्तंभ बहुधा एकूण किंवा स्थिती दाखवतो. .total ला font-weight: 700 देऊन ठळक करतात — आकडे लक्षात येतात.\nसंख्यांची मांडणी उजवीकडे ठेवा; आर्थिक माहितीमध्ये ही सवय विशेष उपयुक्त. रंग आणि padding न बदलता केवळ वजन वाढवा.\nविशिष्ट स्तंभ ठळक केल्याने महत्त्वाची माहिती पटकन गवसते. संपूर्ण table साठी खास नियमाची गरज नाही.", code: `.total {
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "table च्या पायामध्ये width: 100% आणि border-collapse: collapse — स्तंभ संपूर्ण जागा भरतात आणि दुहेरी कड येत नाहीत.\nborder-collapse जवळच्या सेलच्या किनारी एकत्र करतो; रचना स्वच्छ दिसते. हा आधार आधुनिक आणि जुन्या दोन्ही.\nzebra, sticky किंवा card मोड काहीही जोडले तरी हा पाया स्थिर राहतो. मोठ्या माहितीसाठी ही गरजेची सवय.", code: `table {
  width: 100%;
  border-collapse: collapse;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक responsive table बनवूया. .table-wrap ला overflow-x: auto द्या आणि table ला width: 100% सह border-collapse: collapse करा.\nहेडरसाठी th ला position: sticky आणि zebra पर्यायी रंग द्या; शेवटचा स्तंभ font-weight ने ठळक करा.\nलहान स्क्रीनसाठी td::before मध्ये data-label दाखवा. डेस्कटॉपवर table आणि मोबाइलवर cards — डेटा कधीही हरवत नाही.", code: `.table-wrap {
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
      {
        title: "toast — सूचना ढिग म्हणजे काय?",
        content: "toast स्टॅक आणि animation.\ntoast ही कोपऱ्यातील छोटी सूचना — संदेश, स्थिती किंवा देखावा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? toast — सूचना ढिग चे फायदे आणि महत्त्व",
        content: "✓ कमी जागेत महत्त्वाची माहिती देते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. toast", content: "toast ही कोपऱ्यातील छोटी सूचना — संदेश, स्थिती किंवा देखावा. पेज न झाकता वर बसते आणि लक्ष वेधते.\n.toast ला position: fixed ने स्क्रीनवर खिळतात; bottom: 16px आणि right: 16px ने कोपरा. स्क्रोल केल्यावरही ती दिसते.\nआठवण किंवा पुष्टी देण्यासाठी ही रचना अचूक आहे. कमी जागेत महत्त्वाची माहिती देते.", code: `.toast {
  position: fixed;
  bottom: 16px;
  right: 16px;
}`, codeLanguage: "css" },
      { title: "2. स्टॅक रचना", content: "अनेक toast एकत्र आल्यास क्रमवार स्टॅक तयार करतात. .toast-stack ला display: grid आणि gap: 8px देतात.\nनवीन toast खाली जोडला जातो; जुन्याचा क्रम स्थिर राहतो. प्रत्येक सूचनेला वेगळी जागा मिळते.\nकोपऱ्यातील हा ढिग बाहेर ठेवल्याने पेजच्या सामग्रीशी संघर्ष होत नाही. अनेक सूचनाही स्वच्छ वाचता येतात.", code: `.toast-stack {
  display: grid;
  gap: 8px;
}`, codeLanguage: "css" },
      { title: "3. रंग स्तर", content: "सूचनेचा प्रकार रंगांनी दाखवतात — error, warning, success. .toast-error ला border-inline-start: 4px solid #ef4444.\nडाव्या धारीवरील रंगीत पट्टा संदेशाचा स्वर सांगते; रंग ओळखता न येणाऱ्यांसाठी आयकॉन सोबत जोडा.\nप्रत्येक प्रकाराला नेमका रंग आणि स्पष्ट चिन्ह द्या. रंग एकटा अर्थ देऊ नये; शब्द आणि रंग दोन्ही मिळून अर्थ ठरतो.", code: `.toast-error {
  border-inline-start: 4px solid #ef4444;
}`, codeLanguage: "css" },
      { title: "4. auto दृश्य", content: "toast काही सेकंदांनी आपोआप गायब होतो. CSS मध्ये animation: slide-in 0.3s ease ने येण्याची हालचाल सांभाळतो.\nगायब होण्याची वेळ JavaScript ठरवते; दोन्हींची जबाबदारी वेगळी. गती आणि वेळ यांचे नियंत्रण स्पष्ट.\nप्रवेश्यता विचारात सूचना इतक्या लवकर गायब करू नका — मजकूर वाचण्यास पुरेसा वेळ द्या.", code: `.toast {
  animation: slide-in 0.3s ease;
}`, codeLanguage: "css" },
      { title: "5. animation", content: "toast च्या येण्याची गती @keyframes slide-in — from transform: translateX(100%) ते to translateX(0).\nनियम आडव्या दिशेने बाहेरून आत आणतात; ease वक्र हळूवारपणा देतो. हालचाल 0.3s सारखी लहान राहू द्या.\nअति गती लक्ष विचलित करते; मऊ आणि संक्षिप्त हालचाल नेहमी योग्य. हा नियम स्टॅकबरोबरही चालतो.", code: `@keyframes slide-in {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "स्टॅकचा आधार म्हणजे position: fixed सह inset-inline-end: 16px आणि inset-block-end: 16px.\nही logical properties — writing-mode बदलल्यावरही कोपरा योग्य राहतो. z-index उंच देऊन झाकण्याचा त्रास टाळतात.\nखाली-उजवीकडचे स्थान सर्वांत सामान्य आणि अडथळा होत नाही. स्थिर आधारावर सूचना नेहमी दिसतात.", code: `.toast-stack {
  position: fixed;
  inset-inline-end: 16px;
  inset-block-end: 16px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक छोटा toast द्या. .toast ला animation: slide-in 0.3s ease आणि keyframes मध्ये translateX मधून आत येण्याची हालचाल द्या.\nस्टॅकसाठी fixed position सह inset-inline-end आणि inset-block-end ने कोपरा निश्चित करा; error साठी border रंग जोडा.\nप्रत्येक सूचना स्वतःला समान वेळ देते. ही रचना आता अनेक प्रकार हाताळण्यास तयार आहे.", code: `.toast {
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
      {
        title: "print — छपाई नियम म्हणजे काय?",
        content: "print media आणि page नियम.\nछपाईसाठी वेगळी शैली — @media print मध्ये नियम लिहितात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? print — छपाई नियम चे फायदे आणि महत्त्व",
        content: "✓ स्क्रीनवर महत्त्वाचे, पण छपाईत नको.\n✓ भाग निवडताना घोटाळा टाळा; फक्त उपयोगी तुकडे ठेवा.\n✓ महत्त्वाचा भाग एकत्र राहिला तर छापलेले वाचन सुखद होते.\n✓ स्क्रीनवर ही गरज नसते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ भाग निवडताना घोटाळा टाळा; फक्त उपयोगी तुकडे ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. print कल्पना", content: "छपाईसाठी वेगळी शैली — @media print मध्ये नियम लिहितात. कागदावर पेज स्क्रीनप्रमाणे दिसत नाही.\nbody ला background: white करतात — मुद्रण शाई वाचवते; रंगछटा कागदावर निरुपयोगी. मजकूर ठोस राहतो.\nस्क्रीनवरील रंग-फरक कागदावर विस्कळीत दिसतो. मजकूर वाचनीयता आणि कागदाचा अपव्यय टाळणे ही छपाई रचनेची सवय.", code: `@media print {
  body {
    background: white;
  }
}`, codeLanguage: "css" },
      { title: "2. hidden भाग", content: "कागदावर नको असलेले भाग लपवतात — nav, toast, बटणे. @media print मध्ये display: none !important द्या.\n!important सामर्थ्य देते — स्क्रीन शैलीशी झगडून कागद स्वच्छ ठेवते. स्क्रीनवर महत्त्वाचे, पण छपाईत नको.\nभाग निवडताना घोटाळा टाळा; फक्त उपयोगी तुकडे ठेवा. छपाई मजकूर-केंद्रित आणि कागद-सन्मानी असते.", code: `@media print {
  nav,
  .toast {
    display: none !important;
  }
}`, codeLanguage: "css" },
      { title: "3. page नियम", content: "@page ने कागदाच्या पानाची मांडणी नियंत्रित होते — margin: 2cm. सर्व पानांवर समान काठ.\nहे नियम फक्त मुद्रणाला लागतात; स्क्रीनवर परिणाम नाही. जवळजवळ सर्व ब्राउझर सपोर्ट करतात.\nsize ने पानाचा आकार आणि orientation ने दिशा ठरवता येते. छपाई नियंत्रणाचा हा एकत्रित ठिकाण आहे.", code: `@page {
  margin: 2cm;
}`, codeLanguage: "css" },
      { title: "4. break नियम", content: "छपाईमध्ये भाग मध्येच तुटू नये — .card ला break-inside: avoid. कार्ड संपूर्ण एकाच पानावर राहते.\ntable पंक्ती, चित्रे, मथळे यांनाही हाच नियम लागू होतो; अर्धवट कार्ड वाचण्याचे त्रास नाहीत.\nनवीन पानासाठी break-before असा दुसरा नियम. महत्त्वाचा भाग एकत्र राहिला तर छापलेले वाचन सुखद होते.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "5. links वाचता", content: "छपाईवर दुव्याचा url दाखवा — a[href]::after मध्ये content: \" (\" attr(href) \")\" लिहितात.\nप्रत्येक दुव्याच्या मागे त्याचा पत्ता उमटतो; वाचकाला काय-काय कुठे नेते हे कळते. स्क्रीनवर ही गरज नसते.\nकागदावर दुवा क्लिक होऊ शकत नाही, म्हणून पत्ता लिहून ठेवण्याची ही छपाईची सोय महत्त्वाची.", code: `a[href]::after {
  content: " (" attr(href) ")";
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "छपाईला नेहमी रंगाचा अर्थ नको — a[href] ला color: inherit द्या. दुवा आजूबाजूच्या मजकुरासारखाच दिसतो.\nस्क्रीनवर निळे दुवे नेहमी; पण कागदावर मजकूर समान रंग ठेवा. शाई वाचवण्याची ही सवय.\nजुन्या ब्राउझरमधील पाया सुरक्षित — @media print सर्वत्र वाचला जातो. छपाईचे नियम कडक आणि टिकाऊ असतात.", code: `@media print {
  a[href] {
    color: inherit;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "छपाईची तयारी करूया. @page मध्ये margin: 2cm लिहा — कागदाला समान काठ द्या.\n@media print मध्ये nav लपवा आणि a[href]::after ने दुव्यांचे पत्ते उमटवा; .card ला break-inside: avoid द्या.\nमुख्य वाचन भाग स्वच्छ ठेवा आणि मजकूराचा रंग स्थिर द्या. कागदावर ही रचना संपूर्ण पेजसाठी योग्य.", code: `@page {
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
      {
        title: "grid — नमुने रचना म्हणजे काय?",
        content: "holy grail subgrid आणि flows.\nholy grail म्हणजे प्रसिद्ध रचना — header वर, sidebar बाजूला, main मध्ये, footer खाली.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? grid — नमुने रचना चे फायदे आणि महत्त्व",
        content: "✓ सामग्रीचा क्रम महत्त्वाचा असेल तर dense टाळा; अन्यथा वाचनाचा क्रम विस्कळीत होऊ शकतो.\n✓ गोंधळ नको असेल तर मर्यादित वापरा; सामग्रीचा क्रम महत्त्वाचा असेल तर हा नियम टाळा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सामग्रीचा क्रम महत्त्वाचा असेल तर dense टाळा; अन्यथा वाचनाचा क्रम विस्कळीत होऊ शकतो.\n✗ गोंधळ नको असेल तर मर्यादित वापरा; सामग्रीचा क्रम महत्त्वाचा असेल तर हा नियम टाळा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. holy grail", content: "holy grail म्हणजे प्रसिद्ध रचना — header वर, sidebar बाजूला, main मध्ये, footer खाली. संपूर्ण पेज एका नजरेत दिसते.\ngrid-template-areas ने नकाशा लिहितो: \"header header\" \"side main\" \"footer footer\". भाग आपोआप या ठिकाणी बसतात.\nएकाच नियमाने संपूर्ण व्यवस्था बदलता येते — नावांची अदलाबदल पुरेशी. मोठ्या व्यवस्थेसाठी हा शक्तिशाली पाया.", code: `.layout {
  display: grid;
  grid-template-areas: "header header" "side main" "footer footer";
}`, codeLanguage: "css" },
      { title: "2. 12-column", content: "लवचिक column रचनेसाठी 12 स्तंभांचे grid आणि span. .col-4 ला grid-column: span 4.\nएक भाग चार स्तंभ व्यापतो; अनेक भाग मिळून संपूर्ण रचना. अंतर आणि गणित व्यवस्थित जमते.\nही 12 भागांची रीत framework मध्ये सामान्य. ती स्वतःच्या grid मध्येही लवचिक बनवता येते — breakpoints ने आधार बदलतो.", code: `.col-4 {
  grid-column: span 4;
}`, codeLanguage: "css" },
      { title: "3. auto-flow", content: "grid मध्ये भागांची प्रवाह दिशा auto-flow ठरवतो. .mosaic ला grid-auto-flow: dense — छिद्रे भरून व्यवस्था घट्ट होते.\ndense क्रम कोणताही भाग सोडत नाही; असमान आकारांचा गठ्ठा सुबक बसतो. फोटो ग्रिड सारख्या गद्दीत उपयुक्त.\nसामग्रीचा क्रम महत्त्वाचा असेल तर dense टाळा; अन्यथा वाचनाचा क्रम विस्कळीत होऊ शकतो.", code: `.mosaic {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
      { title: "4. subgrid", content: "subgrid हा grid च्या आत दुसरा grid — पालकाच्या रेषा वापरतो. .card ला grid-template-rows: subgrid.\nकार्डाखातील ओळी बाहेरच्या पंक्तींशी नीट जुळतात; मजकूर उंची समान राहते. एकच नियंत्रण सर्वांना.\nहा नवीन आधार आहे — जुन्या ब्राउझरमध्ये नसतो. @supports सह fallback द्या आणि रचना कधीही मोडू नये.", code: `.card {
  display: grid;
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
      { title: "5. stagger नियम", content: "कार्ड रचना स्थिर आणि सजीव दिसण्यासाठी stagger नियम. .item:nth-child(even) ला margin-top: 24px.\nपर्यायी भाग खाली सरकतात — ग्रिडमध्ये हलकीशी जिवंतपणाची भावना येते. थोडासा फरक पुरेसा.\nगोंधळ नको असेल तर मर्यादित वापरा; सामग्रीचा क्रम महत्त्वाचा असेल तर हा नियम टाळा.", code: `.item:nth-child(even) {
  margin-top: 24px;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "subgrid ची सुसंगतता तपासण्यासाठी @supports (grid-template-rows: subgrid) वापरतात.\nआत subgrid नियम देतो; पाठिंबा नसल्यास साधा grid पडतो — सामग्री कधीही मोडत नाही. ही प्रगतीशील वाढ.\nजुन्या ब्राउझरसाठी flex साधा पर्याय ठेवा. अशा सवयीने मोठ्या व्यवस्थेत रचना सुरक्षित राहते.", code: `@supports (grid-template-rows: subgrid) {
  .card {
    grid-template-rows: subgrid;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक grid layout बनवूया. .layout ला display: grid द्या आणि grid-template-areas ने header, main, footer ठरवा.\nअसमान भागांसाठी span वापरा आणि auto-flow dense लागू करा; subgrid साठी @supports fallback जोडा.\nएवढ्या नियमांनी संपूर्ण layout लवचिक आणि मोबाइल सज्ज राहते. Level च्या अधिक रचना पॅटर्नसाठी ही तयारी.", code: `.layout {
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
      {
        title: "dark — रात्री थीम म्हणजे काय?",
        content: "color-scheme आणि टोकन योजना.\nरात्रीची थीम — dark mode.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? dark — रात्री थीम चे फायदे आणि महत्त्व",
        content: "\"dark — रात्री थीम\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. dark कल्पना", content: "रात्रीची थीम — dark mode. अंधारात वाचन सोपे आणि बॅटरीला दिलासा. html ला color-scheme: dark द्या.\nयामुळे scrollbar आणि form असे मूळ भागही गडद दिसतात; ब्राउझर स्वतः रंग जुळवतो. थीम सुसंगत बनते.\nहा छोटा नियम मोठे काम करतो. कस्टम रंगांच्या थरांना इथून सुरुवात करावी हाच पाया ठरतो.", code: `html {
  color-scheme: dark;
}`, codeLanguage: "css" },
      { title: "2. रंग टोकन", content: "dark थीमचे नियंत्रण CSS variables — टोकन. :root[data-theme=\"dark\"] मध्ये --surface: #0f172a आणि --ink: #e2e8f0.\nहे मूल्य एकदा ठरवा आणि सर्वत्र var(--surface) वापरा. एका ठिकाणी बदल केला की संपूर्ण रचना बदलते.\nरंग स्रोत एकच — सातत्य आणि दुरुस्ती सोपी. surface पार्श्वभूमी, ink मजकूर; टोकननी थीम खऱ्या अर्थाने नियंत्रित होते.", code: `:root[data-theme="dark"] {
  --surface: #0f172a;
  --ink: #e2e8f0;
}`, codeLanguage: "css" },
      { title: "3. auto नियम", content: "वापरकर्त्याच्या निवडीचा आदर — prefers-color-scheme: dark मध्ये :root चे टोकन बदलतात.\nब्राउझरच्या सेटिंगवरून नियम आपोआप लागू होतो; अतिरिक्त JavaScript लागत नाही. राखीव भाग पडत नाही.\nsystem preference हा नियम सर्वांत योग्य. वापरकर्त्याची निवड केंद्रस्थानी ठेवा; साइट स्वतः न ठरवता.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --surface: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "4. हायलाइट", content: "dark मध्ये विशेष भाग स्पष्ट दिसावा म्हणून contrast जपतात. .highlight ला background: #1e293b आणि color: #f8fafc.\nमजकूर उजळ आणि पार्श्वभूमी थोडी हलकी; दोन्ही मिळून वाचनीयता वाढते. नियम सातत्य व रंग संतुलित.\nखूप गडद रंग टाकू नका — मजकूर झाकला जातो. हायलाइट असा असावा की सामग्रीची ओळख नेमकी होते.", code: `.highlight {
  background: #1e293b;
  color: #f8fafc;
}`, codeLanguage: "css" },
      { title: "5. transition", content: "थीम बदलताना धक्का नको — transition. body ला background-color 0.3s आणि color 0.3s.\nरंग बदल हळूवार आणि डोळ्यांना सुसह्य होतो. वेळ कमीच ठेवा; खूप मोठा वेळ त्रासदायक होतो.\nप्रत्येक गुणधर्माला स्वतंत्र transition लिहा. रात्री-दिवस स्विचचा अनुभव गुळगुळीत राहतो.", code: `body {
  transition: background-color 0.3s, color 0.3s;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "जुन्या ब्राउझरमध्येही dark नियम सुरक्षित ठेवा. @media (prefers-color-scheme: dark) मध्ये * च्या color-scheme: dark द्या.\nसर्व घटकांना मूळ वातावरण मिळते; बाकी नियम टोकनवर चालतात. रचना कधीही मोडत नाही.\nहा पाया थीमचे काम शांत करतो. टोकन आणि media यांचा जुळलेला आधार प्रत्येक ब्राउझरवर.", code: `@media (prefers-color-scheme: dark) {
  * {
    color-scheme: dark;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "dark theme ची सुरुवात करू. html ला color-scheme: dark द्या — मूळ नियंत्रण मिळते.\nटोकन — :root[data-theme=\"dark\"] मध्ये --surface आणि --ink ठरवा; prefers-color-scheme ने auto बदल द्या.\nविशेष भागांचे contrast व transition जुळवा. एवढ्यात रंग, वाचनीयता आणि झेप — रात्रीचा अनुभव तयार होतो.", code: `html {
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
      {
        title: "Component Bahar — भाग संग्रह म्हणजे काय?",
        content: "सर्व Level 8 तंत्रांचा संग्रह.\nया धड्याचे ध्येय — Level 8 च्या तंत्रांचे मिळून एक component portal.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Component Bahar — भाग संग्रह चे फायदे आणि महत्त्व",
        content: "\"Component Bahar — भाग संग्रह\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ user-invalid ने चुकीचे संकेत मिळतात.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. ध्येय", content: "या धड्याचे ध्येय — Level 8 च्या तंत्रांचे मिळून एक component portal. nav, tabs, form, table आणि रात्रीची थीम.\nसुरुवात टोकनांनी — :root मध्ये --surface आणि --ink निश्चित करा; नंतर तेच व्हेरिएबल सर्व भागांमध्ये वापरा.\nरंगाचा स्रोत एक; एकदा ठरवल्यावर संपूर्ण रचना तयार होते. पुढील थर विभागांमध्ये गुंफला जातो.", code: `:root {
  --surface: #ffffff;
  --ink: #0f172a;
}`, codeLanguage: "css" },
      { title: "2. nav भाग", content: "portal चा पहिला भाग nav. .app-nav ला display: flex आणि gap: 8px देऊन दुवे आडवे मांडतात; border-bottom: 1px solid #e2e8f0 धार.\nsidebar स्थिर आणि breadcrumb खाली — तिन्ही मार्ग एकत्र. aria-current ने active स्थिती स्पष्ट होते.\nरचना सुबक आणि प्रत्येक स्क्रीनवर स्थिर. portal ची पहिली छाप इथून बनते.", code: `.app-nav {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
      { title: "3. tabs भाग", content: "दुसरा भाग tabs. [role=\"tab\"][aria-selected=\"true\"] ला border-bottom: 3px solid #6366f1 — निवडलेल्या टॅबची रेषा.\ntablist आणि tabpanel चे role नियम सोबत; कीबोर्ड संकेतांनी सुरक्षा. aria चिन्हे प्रत्येक ब्राउझरवर वाचता येतात.\nसामग्री समान रचनेत विभागली जाते; active ठिकाण ओळखता येते. portal चा हा भाग स्पष्ट व प्रवेश्य.", code: `[role="tab"][aria-selected="true"] {
  border-bottom: 3px solid #6366f1;
}`, codeLanguage: "css" },
      { title: "4. form भाग", content: "portal मध्ये form चे प्रश्न. .field च्या display: grid आणि gap: 6px द्वारे प्रत्येक प्रश्न उभा व्यवस्थित मांडला जातो.\nlabel आणि input जोडलेले; आवश्यकता ::after ने तारका देऊन दाखवली. user-invalid ने चुकीचे संकेत मिळतात.\nसहाय्य मजकूर हलका आणि स्पष्ट — भरण्याचा आधार नेहमी मजबूत. portal चा हा भाग वापरकर्त्याचा सहभाग.", code: `.field {
  display: grid;
  gap: 6px;
}`, codeLanguage: "css" },
      { title: "5. table गती", content: "डेटा भाग table. लहान स्क्रीनवर @media (width < 640px) मध्ये td::before ला data-label द्या.\nमोठ्या स्क्रीनवर ती table म्हणून दिसते; हेडर sticky आणि zebra रंग. दोन्ही अवस्थांमध्ये सामग्री समान.\nकार्ड मोडमुळे मोबाइलवर वाचन सोपे; स्तंभांची नावे प्रत्येक सेलबरोबर येतात. रूप बदलले, डेटा तसाच.", code: `@media (width < 640px) {
  td::before {
    content: attr(data-label);
  }
}`, codeLanguage: "css" },
      { title: "6. थीम स्थिर", content: "शेवटी थीम. prefers-color-scheme: dark मध्ये टोकन बदलतात; @media print साठी स्वतंत्र नियम.\nportal अंधार किंवा प्रकाशात पूर्ण विलीन होतो; फक्त व्हेरिएबल बदलतात. transition गुळगुळीत राहतो.\nप्रवेश्यता आणि छपाई नियम सोबत — portal कोणत्याही परिस्थितीत उपयुक्त. हा संग्रह पूर्ण होतो.", code: `@media (prefers-color-scheme: dark) {
  :root {
    --surface: #0f172a;
    --ink: #e2e8f0;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "portal ची बांधणी संपवा — :root मध्ये --brand: #4f46e5 ठरवा. हा ब्रांड रंग संपूर्ण रचनेत पसरतो.\nnav, tabs, form आणि table आता याच टोकनाला जुळतात; कीबोर्ड रिंग सारखे प्रवेश्यता नियम सोबत असतात.\nबदल एका जागी केल्यावर संपूर्ण portal बदलते — सांभाळणे सोपे होते. Level 8 च्या कौशल्यांचा हा सजीव सारांश.", code: `:root {
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
