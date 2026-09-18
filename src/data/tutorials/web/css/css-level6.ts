import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 6 — Modern Control ===
export const CSS6_LABEL = "CSS · Level 6 — Modern Control";

export const cssLevel6: Tutorial[] = [
  {
    slug: "css-contain-property",
    categoryId: "web",
    title: "Contain Property",
    marathiTitle: "contain — खोली नियंत्रण",
    level: "advanced",
    minutes: 32,
    summary: "containment आणि content-visibility गती.",
    sections: [
      {
        title: "contain — खोली नियंत्रण म्हणजे काय?",
        content: "containment आणि content-visibility गती.\ncontain हा गुणधर्म एखाद्या घटकाला पेजपासून वेगळं बेट बनवतो — त्याची गणना फक्त स्वतःपुरती होते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? contain — खोली नियंत्रण चे फायदे आणि महत्त्व",
        content: "✓ content-visibility चा खरा उपयोग पेजच्या प्रत्येक लांब भागावर संयमाने करणं हाच आहे.\n✓ म्हणून आधार तपासणं गरजेचं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ जिथे गती जाणवते तिथेच ही जोडणी; नको तिथे न वापरताच टाळा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. containment कल्पना", content: "contain हा गुणधर्म एखाद्या घटकाला पेजपासून वेगळं बेट बनवतो — त्याची गणना फक्त स्वतःपुरती होते.\nlayout आणि paint दोन्ही पृथक केले की ब्राउझरला त्या घटकातला बदल संपूर्ण पेजवर पुन्हा मोजावा लागत नाही.\nमोठ्या पेजमध्ये अनेक विजेट्स असतात; एका विजेटचा बदल बाकीच्यांना त्रास देऊ नये म्हणून contain वापरतात.\nउदा. .embed मध्ये contain: layout paint दिल्यावर embedding च्या मांडणी आणि रंगवण्या या दोन्ही प्रक्रिया स्वतःमध्येच संपतात.\nयामुळे गती वाढते आणि dashboard सारख्या भारी पेजेस सुरळीत चालतात.", code: `.embed {
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "2. size नियम", content: "contain: size म्हणजे घटकाचा आकार इतर गोष्टींनी वाढू नये — तो आधी ठरलेल्या रुंदी-उंचीतच राहतो.\nसहसा घटकातला मजकूर किंवा मूल वाढलं की घटकही वाढतो; पण size लागल्यावर तो आणखी वाढत नाही.\nत्यामुळे रुंदी आणि उंची दोन्ही स्वतः आधी लिहाव्या लागतात — जसं .fixed-box मध्ये width: 300px आणि height: 180px दिलं आहे.\nआकार स्थिर राहिल्याने ब्राउझर नेमकेपणाने मांडणी ठरवतो आणि पेज लवकर रंगवतो.\nकार्ड, चित्र किंवा अडकवलेले (embedded) तुकडे यांसारख्या ठरलेल्या आकाराच्या घटकांवर ही सवय छान बसते.", code: `.fixed-box {
  contain: size;
  width: 300px;
  height: 180px;
}`, codeLanguage: "css" },
      { title: "3. content-visibility", content: "content-visibility: auto हा गुणधर्म दृश्य क्षेत्राबाहेरचा मजकूर सुरुवातीलाच लादत नाही — फक्त तो भाग दिसू लागल्यावरच रंगवतो.\nलांब लेख किंवा मोठी यादी घ्या: पहिल्या दृश्याचे भाग लगेच तयार होतात, पुढचे छुपेच राहतात.\nफोल्डर उघडल्यासारखी ही थरची प्रक्रिया — भाग पडद्यावर आला की लगेच साकारतो; हालचाल करताच उमलतो.\nपेज उघडताना सुरुवातीचा भार कमी पडतो — वेग आणि प्रतिसाद वेळ दोन्ही सुधारतात.\nपण जागा नेमकी हवी असेल तर contain-intrinsic-size ची जोड द्या — पुढील धड्यात तेच शिकू.", code: `.section {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "4. intrinsic आकार", content: "content-visibility ने भाग लपवला की त्याला किती जागा हवी हे ब्राउझरला माहीत नसतं; तिथे contain-intrinsic-size येतो.\nहे गुणधर्म सांगतो की त्या भागाला अंदाजे किती उंची-रुंदी लागेल — उदा. contain-intrinsic-size: 0 320px म्हणजे अंदाजे 320px उंची.\nअंदाज मिळताच ब्राउझर लेआउट न ढळता जागा राखतो; स्क्रोल सुरळीत आणि झटकेमुक्त राहते.\nमोठ्या feed मध्ये प्रत्येक item ला अंदाजी आकार दिला की संपूर्ण यादी जलद उलगडते.\nवास्तव आकार नंतर कळल्यावर आपोआप बदलतो; हे मोजमाप फक्त प्रारंभीची सोय आहे.", code: `.card-long {
  content-visibility: auto;
  contain-intrinsic-size: 0 320px;
}`, codeLanguage: "css" },
      { title: "5. उपयोग सवय", content: "content-visibility चा खरा उपयोग पेजच्या प्रत्येक लांब भागावर संयमाने करणं हाच आहे.\nटॅबचे पॅनेल, प्रश्नांचे विभाग, टिप्पण्यांची यादी — हे सर्व बदलत राहणारे भाग auto ला मान देतात.\ncontain: layout मध्ये मांडणी पृथक ठेवली की एका पॅनेलचा बदल दुसऱ्यावर परिणाम करत नाही.\nआधी लहान प्रयोग करा; बदल लक्षात घ्या; नंतर पेजवर विस्तारा — सराव सातत्य ठेवा.\nजिथे गती जाणवते तिथेच ही जोडणी; नको तिथे न वापरताच टाळा.", code: `.tabs .panel {
  content-visibility: auto;
  contain: layout;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "content-visibility हा आधुनिक गुणधर्म आहे; जुन्या ब्राउझरमध्ये तो माहीतच नसतो. म्हणून आधार तपासणं गरजेचं.\n@supports ब्लॉकमध्ये contain-intrinsic-size ची क्षमता विचारली — जर उत्तर होय असेल तरच content-visibility लागू होतं.\nतपासणी न झाल्यास जुन्या ब्राउझरला अनोळखी नियम सापडतो आणि तो फक्त झुगारला जातो — पेज साधारण राहते.\nही रचना म्हणजे प्रगतीशील वाढ: मजबूत ब्राउझरला वेग, जुन्यांना साधेपणा.\nप्रत्येक device वर पेज चालवून बघा; तपासणी हीच खात्री.", code: `@supports (contain-intrinsic-size: auto) {
  .list {
    content-visibility: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक लांब feed एकाच धड्यात जलद करूया — .feed-item ला content-visibility: auto द्या.\nमग contain-intrinsic-size: 0 140px ने प्रत्येक item ला 140px चा अंदाजित आकार द्या; स्क्रोल स्थिर राहील.\nमोठी यादी उघडा; सुरुवात लगेच दिसते आणि स्क्रोल झटकेमुक्त वाटतो.\nमोजा: पेज उघडण्याचा वेळ आणि स्क्रोलची गुळगुळीतपणा.\ncontent-visibility, contain-intrinsic-size आणि contain हे तीन नियम एकत्र आले की feed गतीने साकारतं.", code: `.feed-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 140px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["contain काय?", "content-visibility कुठे?", "intrinsic कसे?"],
    quiz: [
      { question: "contain layout?", options: ["पृथक", "रंग", "फॉन्ट"], correct: 0 },
      { question: "paint थर?", options: ["मर्यादित", "उघडा", "जड"], correct: 0 },
      { question: "content-visibility?", options: ["जलद", "मंद", "रंग"], correct: 0 },
      { question: "intrinsic-size?", options: ["अंदाज", "नाव", "एकक"], correct: 0 },
    ],
    challenge: {
      prompt: "मोठा feed जलद करा.",
      starterCode: `.feed-item { content-visibility: auto; contain: layout paint; }`,
      expectedOutput: "Renders a fast virtualized-style feed",
    },
    interviewQuestions: ["c", "o", "n", "t", "a", "i", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-will-change", "css-gap-mastery", "css-view-transition"],
    prev: "css-marathi-capstone5",
    next: "css-view-transition",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-view-transition",
    categoryId: "web",
    title: "View Transition",
    marathiTitle: "view transition — दृश्य बदल",
    level: "advanced",
    minutes: 32,
    summary: "page बदल हार्मोनी गुळगुळीत.",
    sections: [
      {
        title: "view transition — दृश्य बदल म्हणजे काय?",
        content: "page बदल हार्मोनी गुळगुळीत.\nview transition म्हणजे पेज किंवा भाग बदलताना ब्राउझर स्वतः एक सुरेख संक्रमण तयार करतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? view transition — दृश्य बदल चे फायदे आणि महत्त्व",
        content: "\"view transition — दृश्य बदल\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. संक्रमण कल्पना", content: "view transition म्हणजे पेज किंवा भाग बदलताना ब्राउझर स्वतः एक सुरेख संक्रमण तयार करतो.\nstartViewTransition(cb) ही JavaScript पद्धत एकाच call मध्ये जुनी आणि नवी अवस्था दोन्ही घेते.\nबदल सुरू झाला की जुन्या दृश्याचा स्नॅपशॉट आणि नव्या दृश्याची तयारी एकाच वेळी होते.\nमग ब्राउझर दोन दृश्यांमध्ये आपोआप गुळगुळीत बदल करतो — पूर्वी चित्रपटांमध्ये असे दृश्य बदल असायचे.\nकोड फारच छोटा; मात्र पेज बदल गुळगुळीत आणि सुंदर होतो आणि वापरकर्त्याला बदल जाणवतो.", code: `document.startViewTransition(cb);`, codeLanguage: "css" },
      { title: "2. पूर्वेकडील state", content: "संक्रमणादरम्यान जुने दृश्य कसं निघून जातं ते ::view-transition-old ने नियंत्रित होतं.\nroot हे संपूर्ण पेजचं स्नॅपशॉट दर्शवतं; त्याला fade-out सारखी animation दिली तर जुना दृश्य हळूहळू लुप्त होतो.\nवेळ 0.3s ने बदल पटकन पण स्पष्टपणे पार पडतो.\nही animation बदलताना वापरकर्त्याला दिशा दाखवते — बदल कोठून सुरू झाला ते कळतं.\nअशा हालचाली कमी हव्या असलेल्या वापरकर्त्यांसाठी बंद करण्याची सोयही ठेवा — पुढील धड्यात.", code: `::view-transition-old(root) {
  animation: fade-out 0.3s;
}`, codeLanguage: "css" },
      { title: "3. नवा थर", content: "जुना थर गेला की नवा कसा येतो ते ::view-transition-new ठरवतं.\nदोन्ही स्नॅपशॉट एकाच वेळी पडद्यावर असतात; जुना जातो आणि नवा वर येतो.\nfade-in 0.5s म्हणजे नवा दृश्य 0.5 सेकंदांत झाकून टाकतो — अचानक बदलापेक्षा हे वाचायला सोपं होतं.\nवेळ आणि easing बदलून संपूर्ण स्वरूपच बदलतं; एकच animation-duration सर्व थरांना लागू होतो.\nहे नियम पेजच्या कुठल्याही मोठ्या भागावर प्रयोग करून पहा; परिणाम लगेच दिसेल.", code: `::view-transition-new(root) {
  animation: fade-in 0.5s;
}`, codeLanguage: "css" },
      { title: "4. element नियुक्ती", content: "फक्त संपूर्ण पेजच नाही तर एकच घटक वेगळेपणाने animate होऊ शकतो — view-transition-name ने.\nघटकाला logo असं नाव दिलं की ब्राउझर त्या घटकाचा स्वतंत्र स्नॅपशॉट घेतो.\nबदलताना डावी-उजवीकडून सरकणारी लोगो, हेडर फिरणारं — असे खास प्रभाव शक्य होतात.\nनाव पेजमध्ये अद्वितीय असावं; एकच नाव दोन घटकांना दिलं तर संघर्ष होतो.\nहा घटक पेजच्या इतर भागांपासून वेगळा राहतो — म्हणून नियंत्रण नेमकं मिळतं.", code: `.logo {
  view-transition-name: logo;
}`, codeLanguage: "css" },
      { title: "5. animation बदल", content: "animation सुंदर असली, तरी काही वापरकर्त्यांना हालचाल कमी हवी असते — तिथे reduced-motion नियम धावतो.\n@media (prefers-reduced-motion: reduce) मध्ये ::view-transition-group ची animation बंद केली.\n!important लिहिल्याने इतर कोणतेही नियम त्याला ढकलू शकत नाहीत.\nथरांना animation नको म्हणून बदल अचानक होतो — पेज कार्यरत राहतं, थकवा निर्माण होत नाही.\nप्रवेश्यता ही सजावटीबरोबरच दुसऱ्या बाजूला जपणं; हीच आधुनिक सवय.", code: `@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*) {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार आणि use", content: "view transition हा आधुनिक गुणधर्म आहे; जुन्या ब्राउझरमध्ये तो फक्त झुगारला जातो आणि पेज थेट बदलते.\nम्हणून आधी मूलभूत बदल सुंदर आणि स्पष्ट करा; नंतर transition ची जोडणी द्या.\nयेथे सर्व थरांना एकाच animation-duration 0.4s दिली — सर्व घटक समान गतीने बदलतात.\nजिथे transition फळ देत नाही (जुना browser), तिथे पेज साधा बदल होतो — हेच सुरक्षित वागणं.\nसुरुवात लहान ठेवा; browser आधार वाढताच अधिक प्रभाव जोडा.", code: `::view-transition-group(*),
::view-transition-old(*),
::view-transition-new(*) {
  animation-duration: 0.4s;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एका छोट्या प्रकल्पात हे सगळं एकत्र आणूया: पेजांमधला बदल गुळगुळीत करूया.\nhtml घटकाला view-transition-name: page द्या — संपूर्ण पेज एक घटक म्हणून animate होईल.\nमग startViewTransition ने दुसऱ्या पेजवर जाण्याचं call करा; दोन पेजांमध्ये झालेला बदल सुरळीत दिसेल.\nनव्या पेजवर animation नियम जोडून प्रभाव वाढवा.\nएकच नाव आणि एक call — हेच दोन पायरे; मग पेज बदल जिवंत वाटतो.", code: `html {
  view-transition-name: page;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["transition काय?", "old कुठे?", "name कसे?"],
    quiz: [
      { question: "startViewTransition?", options: ["एक call", "दोन", "तीन"], correct: 0 },
      { question: "old(root)?", options: ["आधी", "नंतर", "रंग"], correct: 0 },
      { question: "new(root)?", options: ["नवा", "जुना", "मोठा"], correct: 0 },
      { question: "name?", options: ["घटक", "रंग", "फॉन्ट"], correct: 0 },
    ],
    challenge: {
      prompt: "page swap transition साधा.",
      starterCode: `html { view-transition-name: page; }`,
      expectedOutput: "Renders a smooth cross-page view transition",
    },
    interviewQuestions: ["v", "i", "e", "w", " ", "t", "r", "a", "n", "s", "i", "t", "i", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-contain-property", "css-cascade-layers", "css-masking-clip"],
    prev: "css-contain-property",
    next: "css-cascade-layers",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-cascade-layers-2",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "@layer — क्रम आणि जोडणी",
    level: "advanced",
    minutes: 32,
    summary: "layer क्रम निवड अधिकार jपते.",
    sections: [
      {
        title: "@layer — क्रम आणि जोडणी म्हणजे काय?",
        content: "layer क्रम निवड अधिकार jपते.\n@layer म्हणजे शैली नियमांना गटबद्ध करण्याची यंत्रणा — फाइलमध्ये घोषित केलेला क्रम ठरवतो कोण जिंकेल.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? @layer — क्रम आणि जोडणी चे फायदे आणि महत्त्व",
        content: "✓ अशा नियोजनाने component शैली आणि उपयोगिता (utility) यांचा संघर्ष संपतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ क्रम उलट केला असता परिणाम उलटा झाला असता; म्हणून थरांचा क्रम आधी नीट नियोजन करा.\n✗ !important म्हणजे जोरदार शस्त्र; त्याचा दुरुपयोग कोडला अंदाज करण्यास कठीण बनवतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. layer कल्पना", content: "@layer म्हणजे शैली नियमांना गटबद्ध करण्याची यंत्रणा — फाइलमध्ये घोषित केलेला क्रम ठरवतो कोण जिंकेल.\n@layer base, components, utilities; अशी एकच ओळ तीन थरांचा क्रम ठरवते.\nयापुढे utility मध्ये लिहिलेला नियम base मध्ये लिहिलेल्या नियमावर जिंकतो — क्रम नेमका आणि वाचण्यास सोपा.\nकोड सुबक होतो कारण थरांची यादी एका ठिकाणी दिसते.\nग्रंथालय आणि स्वतःचे नियम यांचा संघर्ष सोडवणेही हीच रचना सोपं करते.", code: `@layer base, components, utilities;`, codeLanguage: "css" },
      { title: "2. वारसा क्रम", content: "थरांच्या आतही वरून-खाली लिहीण्याचा नियम लागू राहतो.\nbase थरात button चा आधी padding 6px 10px दिला.\nutilities थरात .p-2 वर padding: 8px मांडला — क्रमाने utilities नंतर असल्याने विजय त्याचाच.\nक्रम उलट केला असता परिणाम उलटा झाला असता; म्हणून थरांचा क्रम आधी नीट नियोजन करा.\nअशा नियोजनाने component शैली आणि उपयोगिता (utility) यांचा संघर्ष संपतो.", code: `@layer base {
  button {
    padding: 6px 10px;
  }
}
@layer utilities {
  .p-2 {
    padding: 8px;
  }
}`, codeLanguage: "css" },
      { title: "3. हा !important", content: "साध्या नियमांत !important शैलीची ताकद वाढवते — पण layer च्या आत त्याचा नियम उलटा पडतो.\nपहिल्या थरातला !important नियम नंतरच्या थरातल्या !important नियमावर जिंकतो — क्रम बदलतो.\nयेथे base मध्ये .btn चा !important नियम सर्वांना ढकलतो — अशी सवय योग्य नाही.\n!important म्हणजे जोरदार शस्त्र; त्याचा दुरुपयोग कोडला अंदाज करण्यास कठीण बनवतो.\nआधार म्हणून विचार करा: important ऐवजी थरांचा क्रम बदला.", code: `@layer base {
  .btn {
    color: #0f172a !important;
  }
}`, codeLanguage: "css" },
      { title: "4. नामनिर्देशन", content: "थर फक्त घोषणा करूनही आधी ठरवता येतो; नंतर कोठेही भरता येतो.\nयेथे @layer theme {} रिकामा उघडला; @layer components; नंतर utilities {} मध्ये नियम भरले.\nअशी घोषणा फाइलच्या सुरुवातीलाच करता येते — क्रम ठरल्यावर नियम कुठेही लिहा.\nपुनरावृत्ती नको; प्रत्येक थर एकदा उघडावा आणि मग त्यात नियम जमा करावे.\nहे नियोजन मोठ्या टीममध्ये घर्षण कमी करतं — एकच क्रम सर्वांना.", code: `@layer theme {}
@layer components;
@layer utilities {}`, codeLanguage: "css" },
      { title: "5. unlayered नियम", content: "थराबाहेर लिहिलेले नियम सर्वात जास्त अधिकार घेतात — कोणत्याही थरातल्या नियमाला ढकलतात.\nयेथे body मध्ये margin: 0 बाहेर लिहिलं; base थरात margin: 8px लिहिलं तरीही बाहेरचं जिंकतं.\nहळूहळू यामुळे गोंधळ उभा राहतो; म्हणून सर्व नियम थरांतच ठेवणं योग्य.\nकाही global नियम नक्कीच वर असावेत असं वाटल्यास — जाणूनबुजून बाहेर ठेवा.\nनियमांची जागा समजली की cascade ची चित्रकला स्पष्ट होते.", code: `body {
  margin: 0;
}
@layer base {
  body {
    margin: 8px;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@layer हे नवीन तंत्र; जुन्या ब्राउझरला ते समजत नाही.\n@supports ने क्षमता तपासूनच layer मधील नियम द्यावेत — जुन्या browser साठी साधा नियम सुरक्षित ठेवा.\nयेथे @supports (layer: base) च्या आत components थर उघडला — खरा आधार असल्यासच ब्लॉक हलतो.\nfallback म्हणजे कोडची दुसरी आवृत्ती नाही; प्रगतीशील वाढीचा पाया आहे.\nप्रत्येक ब्राउझरवर पेज तपासा; क्रम नीट रुजला की संघर्ष संपतात.", code: `@supports (layer: base) {
  @layer components {}
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता रंग स्थिर ठेवणारा छोटा प्रकल्प: दोन थरांची सांगड घालूया.\n@layer base, utilities; ही घोषणा फाइलच्या सुरुवातीस ठेवा.\nbase मध्ये घटकांचे आधार रंग; utilities मध्ये बदलायचे पर्याय.\nमग घटकाला utility द्या आणि पाहा की utility जिंकतं.\nक्रम रुजला की भविष्यातील सर्व शैली नक्की वागतील — हीच खरी ताकद.", code: `@layer base, utilities;`, codeLanguage: "css" },
    ],
    practiceQuestions: ["layer काय?", "क्रम कसे?", "important कुठे?"],
    quiz: [
      { question: "@layer?", options: ["गट", "रंग", "फॉन्ट"], correct: 0 },
      { question: "नंतरचा जिंकतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "important?", options: ["उलट", "सरळ", "रंग"], correct: 0 },
      { question: "unlayered?", options: ["वरचे", "खाली", "मागे"], correct: 0 },
    ],
    challenge: {
      prompt: "तीन layer ordered तयार.",
      starterCode: `@layer base, components, utilities;`,
      expectedOutput: "Renders cascaded layered styles",
    },
    interviewQuestions: ["l", "a", "y", "e", "r", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-view-transition", "css-scope-rule", "css-cascade-layers", "css-masking-clip"],
    prev: "css-view-transition",
    next: "css-masking-clip",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-masking-clip",
    categoryId: "web",
    title: "Masking Clip",
    marathiTitle: "mask — दृश्य कव्हर",
    level: "advanced",
    minutes: 32,
    summary: "mask-image आणि clip संयोग.",
    sections: [
      {
        title: "mask — दृश्य कव्हर म्हणजे काय?",
        content: "mask-image आणि clip संयोग.\nmask-image म्हणजे घटकाचे काही भाग झाकणं — चित्राचा भाग अर्धपारदर्शक किंवा अदृश्य करणं.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? mask — दृश्य कव्हर चे फायदे आणि महत्त्व",
        content: "✓ mask-image ला जुन्या ब्राउझरमधील आधार मध्यम आहे; म्हणून तपासून उपयोग करा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. mask कल्पना", content: "mask-image म्हणजे घटकाचे काही भाग झाकणं — चित्राचा भाग अर्धपारदर्शक किंवा अदृश्य करणं.\nकाळा रंग दृश्य राहतो; पांढरा रंग लपतो; आणि gradient मध्यमता देतो.\nयेथे linear-gradient(black, transparent) म्हणजे वर पूर्ण दृश्य, खाली नाही — निघून जाणारा तळ.\nफोटो कार्ड, हेडर आणि popup मध्ये हा मऊ टोक हवाहवासा वाटतो.\nचित्र खरोखर कापलं नाही; फक्त दृश्य झाकलं — म्हणूनच परत करणं सोपं.", code: `.fade-bottom {
  mask-image: linear-gradient(black, transparent);
}`, codeLanguage: "css" },
      { title: "2. mask-size", content: "mask ला एक अख्खं चित्रही देता येतं; ते छोटं चित्र पुन्हा पुन्हा पसरवून नमुना बनतो.\nmask-size: 40px 40px म्हणजे प्रत्येक प्रत 40px बाय 40px.\nmask-repeat: repeat ने ते चित्र संपूर्ण घटकात टाइलसारखं पसरतं — spark चा तो नमुना.\nपोत कसा दिसेल ते काळ्या-पांढऱ्या दृश्याची मांडणी ठरवते.\nपारदर्शक पार्श्वभूमीवर अशा नमुन्यांनी सजावट खुलते; आकार बदलून नवा नमुना मिळतो.", code: `.pattern {
  mask-image: url(spark.svg);
  mask-size: 40px 40px;
  mask-repeat: repeat;
}`, codeLanguage: "css" },
      { title: "3. mask-position", content: "mask ची स्थिती mask-position ने नियंत्रित होते — ती त्या घटकात नेमकी कुठे दिसेल ते ठरवते.\nradial-gradient(circle, black 30%, transparent 70%) म्हणजे मध्यभागी घन, बाजूला लुप्त.\nmask-position: center लिहिल्यावर तो चक्राचा केंद्र अगदी घटकाच्या मध्यभागी बसतो.\nहे highlight, बटणाचा glow किंवा अवताराच्या कडेसाठी छान बसते.\nस्थिती बदलताच रचना बदलते — नियंत्रण एकाच ओळीत.", code: `.highlight {
  mask-image: radial-gradient(circle, black 30%, transparent 70%);
  mask-position: center;
}`, codeLanguage: "css" },
      { title: "4. clip संयोग", content: "clip-path आकार कापतो; mask रंगाची झीज करतो — दोन्ही एकत्र आले की नर्म परिणाम मिळतो.\nclip-path: circle(60%) म्हणजे घटक वर्तुळात कापला जातो.\nmask-image ने त्या वर्तुळाच्या कडा हळूवार झिजवल्या — कडक काठ उरत नाही.\nअसं आलं की थंब किंवा अवतार मऊ कडांसह उठून दिसतो.\nप्रत्येक थर वेगळी भूमिका — एक आकार देतो, दुसरा कडा फिक्कट; दोघेही सोबत.", code: `.thumb {
  clip-path: circle(60%);
  mask-image: radial-gradient(black 60%, transparent);
}`, codeLanguage: "css" },
      { title: "5. mask-composite", content: "एकावर एक अनेक mask image लावून त्यांच्या एकत्रामध्ये नियंत्रण मिळवणं म्हणजे mask-composite.\nयेथे a.svg आणि b.svg दोन्ही mask म्हणून दिले.\nmask-composite: intersect म्हणजे दोन्हींचा सामायिक भागच शिल्लक राहतो — छेदाचा परिणाम.\nलोगोचे खाचखळगे आणि चिन्हांची जोडणी — असे सूक्ष्म प्रभाव शक्य होतात.\nवापर कमीच; पण जिथे जरुर, तिथे अचूक समाधान ठरते.", code: `.logo-mask {
  mask-image: url(a.svg), url(b.svg);
  mask-composite: intersect;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "mask-image ला जुन्या ब्राउझरमधील आधार मध्यम आहे; म्हणून तपासून उपयोग करा.\n@supports ने mask-image ची क्षमता विचारली; खरी असल्यासच .deco ची शैली लागते.\nयेथे .deco ला white ते transparent ग्रेडियंट mask दिला — नर्म निघून जाणारा भाग.\nclip-path चा आधार चांगला; मात्र mask आधी तपासा. आधार नसेल तर घटक नेहमीसारखा दिसतो — हानी नाही.\nप्रगतीशील वाढीचा हा नियम सर्व browser साठी सुरक्षा देतो.", code: `@supports (mask-image: linear-gradient(black, transparent)) {
  .deco {
    mask-image: linear-gradient(white, transparent);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक अवतार circle मऊ कडांसह तयार करूया — soft edges हा ध्येय.\n.thumb ला clip-path: circle(60%) द्या; मग radial-gradient mask जोडा.\nकाळा मध्यभागी, transparent कडेला — किनार हळूवार उतरते.\nपार्श्वभूमी कोणतीही असो, अवतार छान मिसळतो.\nएकच नियम आणि एक सुंदर परिणाम — mask चा हात ओळखता आला.", code: `.thumb { mask-image: radial-gradient(black 60%, transparent); }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["mask काय?", "composite कसे?", "position कुठे?"],
    quiz: [
      { question: "mask-image?", options: ["लपवतो", "रंगतो", "फिरतो"], correct: 0 },
      { question: "black भाग?", options: ["दृश्य", "लपलेले", "अर्धे"], correct: 0 },
      { question: "white भाग?", options: ["मिटून", "उघडा", "जड"], correct: 0 },
      { question: "composite?", options: ["अंतर", "आवाज", "गती"], correct: 0 },
    ],
    challenge: {
      prompt: "soft circle avatar mask.",
      starterCode: `.avatar { mask-image: radial-gradient(black 60%, transparent); }`,
      expectedOutput: "Renders a soft-edged masked circle avatar",
    },
    interviewQuestions: ["m", "a", "s", "k", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-view-transition", "css-box-decoration", "css-font-fallback"],
    prev: "css-cascade-layers",
    next: "css-font-fallback",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-font-fallback",
    categoryId: "web",
    title: "Font Fallback",
    marathiTitle: "font — परतप्रमाण नियम",
    level: "advanced",
    minutes: 32,
    summary: "font-face, stacks आणि features उपाय.",
    sections: [
      {
        title: "font — परतप्रमाण नियम म्हणजे काय?",
        content: "font-face, stacks आणि features उपाय.\n@font-face मध्ये स्वतःचे font पेजवर लादता येतात — तो नवीन प्रकार नसून font ची व्याख्या.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? font — परतप्रमाण नियम चे फायदे आणि महत्त्व",
        content: "✓ वेगळी फाइल न लादता एकाच फाइलवरून आवश्यक रूप निवडलं जातं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. font-face नियम", content: "@font-face मध्ये स्वतःचे font पेजवर लादता येतात — तो नवीन प्रकार नसून font ची व्याख्या.\nयेथे Mukta नावाच्या font ला मुख्य नाव दिलं आणि mukta.woff2 चा पत्ता स्रोत.\nwoff2 हा आधुनिक दाबी (compressed) format — लहान आकार, स्पष्ट अक्षरे.\nsrc मध्ये format लिहिल्याने ब्राउझरला सुसंगत फाइल निवडायला सोपं होतं.\nअशी व्याख्या झाल्यावर font-family मध्ये Mukta लिहिलं तर ते अक्षर वापरता येते.", code: `@font-face {
  font-family: "Mukta";
  src: url(mukta.woff2) format("woff2");
}`, codeLanguage: "css" },
      { title: "2. stack रचना", content: "एकच font उपलब्ध नसला तरी पेज सुंदर दिसावं म्हणून stack — मालिका — वापरतात.\nब्राउझर पहिलं नाव शोधतो; मिळालं नाही तर दुसरं; दुसरं नाही तर तिसरं.\nमराठी मजकुरासाठी देवनागरी समर्थन असलेला Noto Sans Devanagari दुसऱ्या स्थानावर.\nsystem-ui म्हणजे device चे स्थानिक font; शेवटी sans-serif ही हमी.\nतुमचं font न चाललं तरी अक्षर नेहमी वाचता येतं — हेच या मालिकेचं कार्य.", code: `body {
  font-family: "Mukta", "Noto Sans Devanagari", system-ui, sans-serif;
}`, codeLanguage: "css" },
      { title: "3. font-size-adjust", content: "दोन font ची उंची वेगळी; म्हणून x-height जुळवून आकार समान दिसवण्यासाठी font-size-adjust.\nx-height म्हणजे लहान अक्षरांची उंची — ती जुळली की font बदलला तरी आकार बदलल्यागत वाटत नाही.\n0.5 हे प्रमाण सांगतं की लहान अक्षरांची उंची font आकाराची साधारण 50% असावी.\nfont बदलताना मजकुराची रुंदी स्थिर राहते; swap होताना रचना न उसळता बसते.\nब्राउझर आधार वाढत असल्याने हे उपयुक्त आधुनिक साधन ठरते.", code: `.heading {
  font-size-adjust: 0.5;
}`, codeLanguage: "css" },
      { title: "4. variable font", content: "variable font म्हणजे एकाच font फाइलमध्ये अनेक weights आणि रुंद्या — वेगळ्या फाइल नको.\nfont-variation-settings मध्ये axis लिहितात: wght हा वजनाचा axis.\n600 म्हणजे semibold — वजन अचूक ठरते.\nवेगळी फाइल न लादता एकाच फाइलवरून आवश्यक रूप निवडलं जातं.\nअशा सूक्ष्म नियंत्रणाने शीर्षक आणि मजकूर एकाच font मध्ये सुरेख सजतात.", code: `.semibold {
  font-variation-settings: "wght" 600;
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "चांगला font निवडल्यावरही प्रवेश्यता त्याच्या आकारावर अवलंबून असते; आकार आणि ओळ अंतर हेच पाया.\nhtml वर font-size: 18px दिलं की संपूर्ण पेजचे मोजमाप गुणांकाने वाढतं.\nline-height: 1.6 ने परिच्छेदातील ओळी मोकळ्या होतात — वाचणं त्रासदायक होत नाही.\nमराठी देवनागरी लिपीत बारीक मात्रा असतात; आकार आणि अंतर नीट हवं.\nदृष्टी कमी असलेल्या वाचकांसाठी आधार प्रमाण: मोठा, मोकळा, स्पष्ट मजकूर.", code: `html {
  font-size: 18px;
  line-height: 1.6;
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "h1 सारख्या शीर्षकाला वेगळा font stack दिला; Mukta प्रथम.\nui-rounded हे device च्या गोलाकार रूपाची हमी देणारे font.\nशेवटी serif म्हणजे काटे असलेले font — हमी म्हणून ठेवला.\nfont-weight: 700 ने शीर्षक ठळक; stack आणि वजन दोन्ही एकत्र.\nप्रत्येक पातळीच्या stack ची रचना लिहिताना error टाळणे हीच सवय लागते.", code: `h1 {
  font-family: "Mukta", ui-rounded, serif;
  font-weight: 700;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता मराठी शीर्षकाची stack तयार करूया — दोन पर्याय तरी.\nMukta आधी; उपलब्ध नसेल तर Noto Sans Devanagari; शेवटी कोणताही serif.\nअशी मालिका दिल्यावर प्रत्येक device वर मराठी अक्षर सुंदर दिसते.\nमग h1 वर font-weight: 700 जोडा — शीर्षक स्पष्ट उठाव.\nएक stack आणि मजबूत पाया — मराठी font चा पाया आता तयार.", code: `h1 { font-family: "Mukta", "Noto Sans Devanagari", serif; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["font-face काय?", "stack कसे?", "adjust कुठे?"],
    quiz: [
      { question: "woff2?", options: ["आधुनिक", "जुने", "फॉन्ट"], correct: 0 },
      { question: "stack?", options: ["मालिका", "रंग", "नाव"], correct: 0 },
      { question: "variation?", options: ["axis", "कडा", "आकार"], correct: 0 },
      { question: "system-ui?", options: ["शेवट", "सुरुवात", "मध्य"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी font stack लावा.",
      starterCode: `body { font-family: "Mukta", "Noto Sans Devanagari", sans-serif; }`,
      expectedOutput: "Renders Marathi text with a robust font stack",
    },
    interviewQuestions: ["f", "o", "n", "t", " ", "उ", "प", "ा", "य", "?"],
    related: ["css-masking-clip", "css-gap-mastery", "css-logical-props"],
    prev: "css-masking-clip",
    next: "css-sticky-nav",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-sticky-nav",
    categoryId: "web",
    title: "Sticky Nav",
    marathiTitle: "sticky — चिकट नेव्हिगेशन",
    level: "advanced",
    minutes: 32,
    summary: "position sticky खोल नियम.",
    sections: [
      {
        title: "sticky — चिकट नेव्हिगेशन म्हणजे काय?",
        content: "position sticky खोल नियम.\nposition: sticky म्हणजे घटक स्क्रोलमध्ये विशिष्ट बिंदूपासून चिकटून राहतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? sticky — चिकट नेव्हिगेशन चे फायदे आणि महत्त्व",
        content: "✓ पालक लहान असेल तर चिकटपणा कमी काळ; म्हणूनच उंची महत्त्वाची.\n✓ कीबोर्डने आणि प्रवेशयोग्यतेने जपली तर हे बटण प्रत्येकाला सोयीचं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. sticky कल्पना", content: "position: sticky म्हणजे घटक स्क्रोलमध्ये विशिष्ट बिंदूपासून चिकटून राहतो.\ntop: 0 दिल्यावर नेव्हिगेशन पडद्याच्या वरच्या कडेला येते आणि तिथे स्थिर होते.\nपेज स्क्रोल होत राहतं, पण nav वरच्या कडेला दिसत राहतं — मेनू हाताशी.\nखास गोष्ट: sticky घटकाची मूळ जागा राहते; त्यामुळे layout फुटत नाही.\nहे fixed पेक्षा मऊ — मर्यादेपर्यंत चिकटतं, नंतर सोबत वाहतं.", code: `.nav {
  position: sticky;
  top: 0;
}`, codeLanguage: "css" },
      { title: "2. container मर्यादा", content: "sticky फक्त त्याच्या पालकाच्या सीमेत चिकटून राहतो; पालक संपला की हलतो.\nयेथे .side हा .page मधला भाग; page ची min-height मोठी तेवढा चिकट राहू शकतो.\ntop: 16px म्हणजे वरच्या कडेवरून 16px अंतरावर थांबते — हेडर असेल तर तो वाचवता येतो.\nपालक लहान असेल तर चिकटपणा कमी काळ; म्हणूनच उंची महत्त्वाची.\nsidebar आणि टूलबार — ठरवा की किती काळ चिकटायचं; मग तेवढी उंची द्या.", code: `.page {
  min-height: 100vh;
}
.side {
  position: sticky;
  top: 16px;
}`, codeLanguage: "css" },
      { title: "3. थर स्टॅक", content: "चिकट झाल्यावर नेव्हिगेशन इतर घटकांवर दिसावे — म्हणून z-index वापरतात.\nz-index: 40 म्हणजे nav इतर बहुतेक घटकांच्या वर असतो.\nनको असेल तर मजकूर किंवा चित्रे nav च्या वरून सरकताना दिसतात — गोंधळ होतो.\nsticky असताना घटक एक नवीन थर संदर्भ बनवतो; त्यामुळे z-index प्रभावी होतो.\nथर क्रम व्यवस्थित ठेवा: ओव्हरले सर्वात वर, nav खाली, मजकूर त्याच्याही खाली.", code: `.nav {
  position: sticky;
  top: 0;
  z-index: 40;
}`, codeLanguage: "css" },
      { title: "4. subnav नियम", content: "मुख्य nav च्या खाली दुसरा चिकट भागही हवा असेल तर subnav बनवता येतो.\nहा sticky top: 56px — मुख्य nav जितका उंच तेवढे अंतर; त्यामुळे दोन थर रांगेत बसतात.\nz-index: 30 ने मुख्य nav (40) ढकलला जात नाही; पण मजकुरावर तो दिसतो.\nदोघेही स्क्रोलला सोबत चिकटतात; झुंबड न होता समांतर.\nस्पर्धा टाळण्यासाठी दोन्हीचे top आणि z-index नेमके ठेवा.", code: `.subnav {
  position: sticky;
  top: 56px;
  z-index: 30;
}`, codeLanguage: "css" },
      { title: "5. भाग वर्ग", content: "sticky फक्त वरच नाही तर खालच्या बाजूलाही चिकटवता येतो.\n.back-top ला sticky आणि bottom: 16px दिल्याने तो घटक तळाशी स्थिर राहतो.\nलांब लेखाच्या शेवटी वर जा असे बटण अशीच चिकटते.\nमूळ जागा तेवढीच राहून संपूर्ण स्क्रोलमध्ये हारीने दिसते.\nकीबोर्डने आणि प्रवेशयोग्यतेने जपली तर हे बटण प्रत्येकाला सोयीचं.", code: `.back-top {
  position: sticky;
  bottom: 16px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "sticky चा ब्राउझर आधार मजबूत; पण एक मर्यादा ठेवा — पालकाचा overflow.\noverflow: auto असलेल्या container मध्ये sticky आत अडकतो; बाहेर फिरत नाही.\nयेथे .table-wrap overflow auto असल्याने table चे header th sticky वर राहतात — उभे स्क्रोल होताना.\nसारणी आणि लांब याद्या — ही sticky ची उत्तम साथ.\nआधार असला तरी प्रत्येक device वर तपासा; overflow हीच खरी मर्यादा.", code: `.table-wrap {
  overflow: auto;
}
th {
  position: sticky;
  top: 0;
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता पक्का प्रयोग: पेजचा header स्क्रोलमध्ये स्थिर ठेवा.\n.header ला position: sticky आणि top: 0 द्या.\nलांब मजकूर जोडा आणि पेज स्क्रोल करा — header वरच्या कडेला चिकटलेला दिसेल.\nz-index लहान दिला तर सामग्री header च्या आतून, वरून सरकते — तो फरकही पहा.\nहेडर, टूलबार आणि sidenav — ही रचना सर्वत्र असेच काम करते.", code: `.header { position: sticky; top: 0; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["sticky काय?", "top कसे?", "z-index कुठे?"],
    quiz: [
      { question: "sticky?", options: ["चिकट", "रंग", "फॉन्ट"], correct: 0 },
      { question: "parent मर्यादा?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "z-index?", options: ["थर", "रंग", "ताप"], correct: 0 },
      { question: "back-to-top?", options: ["bottom", "top", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "चिकट nav तयार.",
      starterCode: `.nav { position: sticky; top: 0; z-index: 40; }`,
      expectedOutput: "Renders a sticky header nav",
    },
    interviewQuestions: ["s", "t", "i", "c", "k", "y", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-font-fallback", "css-gap-mastery", "css-masking-clip"],
    prev: "css-font-fallback",
    next: "css-gap-mastery",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-gap-mastery",
    categoryId: "web",
    title: "Gap Mastery",
    marathiTitle: "gap — अंतर विजय",
    level: "advanced",
    minutes: 32,
    summary: "gap सर्वत्र flex grid आणि column.",
    sections: [
      {
        title: "gap — अंतर विजय म्हणजे काय?",
        content: "gap सर्वत्र flex grid आणि column.\ngap हा गुणधर्म तिन्ही layout मध्ये अंतर देणारं एकच साधन — flex ने सुरुवात करूया.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? gap — अंतर विजय चे फायदे आणि महत्त्व",
        content: "✓ प्रत्येक सेलला margin द्यायची गरज नाही — gap हीच संपूर्ण रचनेची जागा.\n✓ column-gap: 2em ने त्या दोन स्तंभांमध्ये सोयीस्कर अंतर निर्माण होतं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. flex gap", content: "gap हा गुणधर्म तिन्ही layout मध्ये अंतर देणारं एकच साधन — flex ने सुरुवात करूया.\n.row ला display: flex दिलं आणि मुलांमध्ये सर्वत्र 12px अंतर ठेऊ.\nजुनी पद्धत प्रत्येक मुलाला margin देत असे; आता एकच gap पुरेसा.\nपहिल्या-शेवटच्या मुलांना जादा margin नकोत — सर्व काठ समान.\nघटकांची संख्या कितीही बदलली तरी अंतर तेथेच राहतं; रचना शांत होते.", code: `.row {
  display: flex;
  gap: 12px;
}`, codeLanguage: "css" },
      { title: "2. grid gap", content: "grid मध्ये gap म्हणजे ओळी-स्तंभांमधील अंतर — दोन मूल्ये एकाच ओळीत.\ngap: 24px 12px — पहिलं row gap 24px उभं; दुसरं column gap 12px आडवं.\nग्रिडचं जाळं सुबक होतं; कार्डे एकमेकांना स्पर्श न करता बसतात.\nrow-gap आणि column-gap वेगळेही लिहिता येतात; हा संक्षेप दोन्ही देतो.\nप्रत्येक सेलला margin द्यायची गरज नाही — gap हीच संपूर्ण रचनेची जागा.", code: `.grid {
  display: grid;
  gap: 24px 12px;
}`, codeLanguage: "css" },
      { title: "3. column gap", content: "मजकूर अनेक स्तंभांत विभागला तर स्तंभांतील अंतर column-gap देतो.\n.columns: 2 म्हणजे मजकूर दोन स्तंभांत वाहतो.\ncolumn-gap: 2em ने त्या दोन स्तंभांमध्ये सोयीस्कर अंतर निर्माण होतं.\nवृत्तपत्रासारखा वार्षिक मजकूर वाचायला सुखकारक होतो.\nब्राउझर स्तंभ स्वतः ठरवतो; आपण फक्त अंतर देतो — हा लहान पण कार्यक्षम layout.", code: `.story {
  columns: 2;
  column-gap: 2em;
}`, codeLanguage: "css" },
      { title: "4. row अंतर", content: "आडव्या रचनेत ओळींमधील उभे अंतर row-gap सोडवतो.\n.list ला flex-wrap: wrap दिल्यास मुले एकापेक्षा जास्त ओळींमध्ये पसरतात.\nrow-gap: 8px ने प्रत्येक ओळीतील उभे अंतर 8px राहतो.\ncolumn-gap न दिल्यास आडवे अंतर स्वेच्छ — साधी compact यादी आणि chip टाइल.\nएकाच गुणधर्माने ओळींमधील गोंधळ नाहीसा होतो; रचना प्रमाणित ठरते.", code: `.list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
}`, codeLanguage: "css" },
      { title: "5. नियम संयोजन", content: "gap आणि margin हे निरनिराळे खेळ — दोन्ही नीट वापरल्यावर तोल राहतो.\ngap म्हणजे मुलांमधील अंतर; padding घटकाभोवतीची आतील जागा.\nयेथे .card ग्रिड; मधील मुलांमध्ये 10px gap; स्वतःला 16px padding.\nदोन्ही एकत्र आले की कार्ड मोकळं आणि सुबक दिसते.\nसंतुलन राखणं हा नियम; प्रत्येक साइटला एक तोल हवाच.", code: `.card {
  display: grid;
  gap: 10px;
  padding: 16px 0;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "gap चा आधार आता सर्वत्र चांगला; पण जुन्या ब्राउझरसाठी पर्याय हवा.\nयेथे .row > * + * ला margin-left: 12px दिला — जुना मार्ग.\nमग नियमातच gap: 12px लिहिलं; नवीन browser मध्ये gap जिंकतो.\n> * + * म्हणजे पहिला सोडता सर्व मुले — शेवटच्या मुलाला जादा अंतर नाही.\nअशी दुहेरी रचना जुन्या आणि नव्या दोघांनाही सुरक्षित ठेवते.", code: `.row > * + * {
  margin-left: 12px;
}
.row {
  gap: 12px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता chip ची एक पंक्ती बनवा — दोन्ही दिशांचे अंतर.\n.chips ला display: flex आणि flex-wrap: wrap द्या; मुलांमध्ये 8px gap.\nchip मधील मजकूर आणि chip चे स्वतःचे padding वेगळे ठेवा.\nपंक्ती-क्षमतेपेक्षा जास्त आले तर wrap ने ओळी वाढतात.\nएक gap नियम आणि व्यवस्थित chip row — flex अंतराचा हात पटतो.", code: `.chips { display: flex; gap: 8px; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["gap काय?", "grid कसे?", "column कुठे?"],
    quiz: [
      { question: "gap flex?", options: ["अंतर", "रंग", "फॉन्ट"], correct: 0 },
      { question: "row-gap?", options: ["उभी", "सपाट", "जड"], correct: 0 },
      { question: "column-gap?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "fallback?", options: ["margin", "padding", "border"], correct: 0 },
    ],
    challenge: {
      prompt: "chip row gap साधा.",
      starterCode: `.chips { display: flex; gap: 8px; }`,
      expectedOutput: "Renders a chip row with even gaps",
    },
    interviewQuestions: ["g", "a", "p", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-sticky-nav", "css-box-decoration", "css-contain-property"],
    prev: "css-sticky-nav",
    next: "css-box-decoration",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-box-decoration",
    categoryId: "web",
    title: "Box Decoration",
    marathiTitle: "box decoration — विभाग सजावट",
    level: "advanced",
    minutes: 32,
    summary: "decoration-break आणि सावली नियम.",
    sections: [
      {
        title: "box decoration — विभाग सजावट म्हणजे काय?",
        content: "decoration-break आणि सावली नियम.\nमजकूर अनेक ओळींत तुटला तरी प्रत्येक तुकड्याला पूर्ण शैली द्यायची असेल तर box-decoration-break.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? box decoration — विभाग सजावट चे फायदे आणि महत्त्व",
        content: "✓ neon सारखी अक्षरे दिसतात; पण अक्षरांची वाचनीयता जपणं गरजेचं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. decoration नियम", content: "मजकूर अनेक ओळींत तुटला तरी प्रत्येक तुकड्याला पूर्ण शैली द्यायची असेल तर box-decoration-break.\nslice हा पूर्वनिर्धारित — शैली एकत्र धरली जाते; तुटताना कडा गहाळ होतात.\nclone ने प्रत्येक ओळीला स्वतंत्र box मिळतो — border, background सर्व पूर्ण.\nयेथे span ला clone दिला; ओळींवर पसरलेला मजकूर प्रत्येक तुकड्यात सुबक.\ninline मजकूर आणि प्रत्येक तुकड्याचा स्वतःचा काळ — हीच clone ची निवड.", code: `span {
  box-decoration-break: clone;
}`, codeLanguage: "css" },
      { title: "2. सावली थर", content: "box-shadow मजकुराभोवती नाही तर संपूर्ण खोक्याभोवती सावली टाकतो.\nदोन सावल्या एकत्र दिल्या — प्रथम बारीक 1px 2px, नंतर मोठी 4px 12px.\nपहिली सावली कडा उठवते; दुसरी घटकाला वर फिरवते — बटण हवेत तरंगतं.\nअशा दुहेरी सावलीने बटण खोल आणि जिवंत दिसते.\nप्रत्येक सावलीला रंग आणि opacity दिला — गडद shadow सहज मिळतो.", code: `.btn {
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%), 0 4px 12px rgb(0 0 0 / 15%);
}`, codeLanguage: "css" },
      { title: "3. inset सावली", content: "inset म्हणजे सावली घटकाच्या आतमध्ये टाकणं — बाहेर नाही.\ninset 0 2px 4px ने वरची कडा आत धरली; बटण दाबल्यागत खोल दिसते.\npressed बटण क्लिक केल्यावर असेच आत बसते — परिणाम प्रत्यक्ष जाणवतो.\nएकच ओळ लिहिली आणि संपूर्ण परिणाम बदलला.\nआतल्या सावलीने दाबा ही कृती वापरकर्त्याला स्पष्ट होते.", code: `.pressed {
  box-shadow: inset 0 2px 4px rgb(0 0 0 / 10%);
}`, codeLanguage: "css" },
      { title: "4. text-shadow", content: "text-shadow मजकुराच्या अक्षरांना सभोवती सावली देते — अक्षरे उजळून निघतात.\n0 0 8px आणि 0 0 24px दोन थरांत चमक प्रकाश पसरतो.\nneon सारखी अक्षरे दिसतात; पण अक्षरांची वाचनीयता जपणं गरजेचं.\nरंग आणि पार्श्वभूमीची तुलना ताळ्यावर ठेवा; मजकूर कधीही विस्कटू देऊ नका.\nफक्त शीर्षकात एक shadow; संपूर्ण मजकुरावर नाही — जपून वापरा.", code: `.neon {
  text-shadow: 0 0 8px #22d3ee, 0 0 24px #06b6d4;
}`, codeLanguage: "css" },
      { title: "5. outline अंतर", content: "outline ही बाह्य किनार — box ला आकार देत नाही; फक्त फोकस दाखवते.\n:focus होताना outline: 2px solid #7c3aed दिली तर कीबोर्ड वापरणाऱ्याला स्थान समजते.\noutline-offset: 3px ने ती outline घटकाबाहेर 3px जागेवर बसते — दाट झुंड नाही.\nborder मध्ये जुळून घटकाचा आकार बदलत नाही; outline बदलतो.\nप्रवेश्यतेची ही सवय आधुनिक website चा आधार; प्रत्येक interactive घटकाला द्या.", code: `.focus-ring:focus {
  outline: 2px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "clone चा आधार जुन्या ब्राउझरमध्ये मर्यादित; तरीही परिणाम हळू पडतो.\n.quote ला clone दिला — मजकूर ओळींवर तुटला तरी border प्रत्येक तुकड्याला मिळतो.\nborder-inline-start ने सुरुवातीच्या बाजूची रेषा जोडली — डावी कड सुबक.\nअवतरणांचा आकार प्रत्येक ओळीवर स्वतःची रेषा घेऊन टिकतो.\nmask ऐवजी decoration-break वापरा — ही निवड येथे योग्य.", code: `.quote {
  box-decoration-break: clone;
  border-inline-start: 4px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता अवतरण quote सजवूया — ओळींत तुटलेला मजकूर सुबक राहू द्या.\n.quote ला box-decoration-break: clone द्या — प्रत्येक ओळीला स्वतःची रचना.\nborder-inline-start: 4px solid #2563eb — डावीकडे रंगीत रेषा.\nमजकूर संपेपर्यंत ती रेषा प्रत्येक ओळीच्या तुकड्यावर दिसेल.\nएक छोटा नियम आणि अवतरण खोल, सुबक — सजावटीचा हात पटला.", code: `.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["clone काय?", "shadow कसे?", "inset कुठे?"],
    quiz: [
      { question: "slice?", options: ["पहिला", "नवा", "रंग"], correct: 0 },
      { question: "clone?", options: ["नवा", "जुना", "मोठा"], correct: 0 },
      { question: "inset?", options: ["आत", "बाहेर", "वर"], correct: 0 },
      { question: "offset?", options: ["अंतर", "रंग", "जाड"], correct: 0 },
    ],
    challenge: {
      prompt: "quote आधिकार clone द्या.",
      starterCode: `.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }`,
      expectedOutput: "Renders a decorated quote with cloned borders",
    },
    interviewQuestions: ["b", "o", "x", " ", "d", "e", "c", "o", "r", "a", "t", "i", "o", "n", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-gap-mastery", "css-logical-props", "css-masking-clip"],
    prev: "css-gap-mastery",
    next: "css-logical-props",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-logical-props",
    categoryId: "web",
    title: "Logical Props",
    marathiTitle: "logical — दिशा साधन",
    level: "advanced",
    minutes: 32,
    summary: "block inline आणि logical इनसेट.",
    sections: [
      {
        title: "logical — दिशा साधन म्हणजे काय?",
        content: "block inline आणि logical इनसेट.\nlogical properties म्हणजे दिशेच्या ऐवजी अंदाजाच्या आधारे जागा — block आणि inline.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? logical — दिशा साधन चे फायदे आणि महत्त्व",
        content: "\"logical — दिशा साधन\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. logical कल्पना", content: "logical properties म्हणजे दिशेच्या ऐवजी अंदाजाच्या आधारे जागा — block आणि inline.\nblock म्हणजे या रचनेत उभी दिशा (वर-खाली); inline म्हणजे आडवी (डावी-उजवी).\nmargin-block उभ्या; padding-inline आडव्या — दोन्ही अचूक.\nरचना डावीकडून सुरू (LTR) किंवा उजवीकडून (RTL) — मूल्ये आपोआप जुळतात.\nमजकूर सोबत ही व्यवस्था फिरते; भाषा बदलली तरी रचना तुटत नाही.", code: `.box {
  margin-block: 16px;
  padding-inline: 12px;
}`, codeLanguage: "css" },
      { title: "2. block inline", content: "border-inline-start म्हणजे रचनेच्या सुरुवातीच्या बाजूची रेषा.\nLTR मध्ये ती डावीकडे; RTL मध्ये उजवीकडे — अर्थ कायम.\nयेथे .note ला 3px निळी रेषा सुरुवातीला; माहितीची टीप उठून दिसते.\npadding-block: 8px ने वर-खाली 8px आतील जागा.\nभाषा कोणतीही असो, रेषा सुरुवातीच्या बाजूनेच — स्थिरता.", code: `.note {
  border-inline-start: 3px solid #0ea5e9;
  padding-block: 8px;
}`, codeLanguage: "css" },
      { title: "3. logical inset", content: "logical inset म्हणजे सर्व चार कडा — वर, खाली, डावी, उजवी — एकदम.\nposition: fixed ने घटक पडद्यावर अचल बसतो.\ninset: 0 म्हणजे सर्व कडांपासून 0 अंतर — संपूर्ण पडदा व्यापतो.\nओव्हरले, मॉडल, लोडर — ही सर्व एका नियमाने व्यापली जातात.\nप्रत्येक बाजूला वेगळी ओळ लिहिण्यापेक्षा inset शॉर्टकट सोपा आणि घट्ट.", code: `.overlay {
  position: fixed;
  inset: 0;
}`, codeLanguage: "css" },
      { title: "4. text-align logical", content: "text-align: start म्हणजे मजकूर रचनेच्या सुरुवातीच्या बाजूने बसतो.\nLTR मध्ये डावीकडे; RTL मध्ये उजवीकडे — text-align: left चा अर्थ फिरतो.\n.article ला start दिला की मजकूर लिपीला योग्य दिशेने बसतो.\nमराठी ई-पुस्तकातही हा नियम लागू; RTL भाषेच्या article सोबत योग्य.\nतार्किक नियमाने दिशा आपोआप योग्य राहते — प्रत्येक भाषा स्वतःच्या क्रमाने.", code: `.article {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "5. grid logical", content: "place-items मध्येही logical वापरता येतो — संरेखन तार्किक राहते.\nplace-items: start center म्हणजे मुले सुरुवातीच्या ओळीत, आडव्या केंद्रात.\nरचना बदलली तरी अर्थ तसाच; दिशेनुसार क्रम स्थिर.\nflex आणि grid दोघांमध्येही हे संकेत असतात.\nएकच नियम, अनेक भाषांसाठी योग्य — अशी सोय logical props ची.", code: `.layout {
  display: grid;
  place-items: start center;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "logical चा आधार मजबूत असला तरी जुन्या browser साठी fallback दिला जातो.\nयेथे .meta ला padding-inline: var(--sp, 8px) दिला.\nआधार नसल्यास padding-left: 8px पुढील ओळीत आधार मिळवतो.\nनवीन browser मध्ये logical नियम जिंकतो; जुन्यात padding-left.\nअशी दुहेरी रचना सुरक्षा देते — आधार नेहमी तपासून लिहा.", code: `.meta {
  padding-inline: var(--sp, 8px);
  padding-left: 8px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक टीप logical border सह बनवूया — दिशा स्वतःच निवडू द्या.\n.note ला border-block-start: 3px solid #0ea5e9 द्या — वरच्या कडेला रेषा.\npadding-inline: 12px ने आडव्या अंतर रुंद करा.\nमग lang दिशा बदलून RTL करा — रेषा आणि अंतर आपोआप फिरतात का पहा.\nlogical properties म्हणजे भाषा-तटस्थ रचना; हा प्रयोग ते दाखवेल.", code: `.note { border-block-start: 3px solid #0ea5e9; padding-inline: 12px; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["block काय?", "inline कसे?", "inset कुठे?"],
    quiz: [
      { question: "block?", options: ["उभी", "सपाट", "रंग"], correct: 0 },
      { question: "inline-start?", options: ["डावी", "वर", "खाली"], correct: 0 },
      { question: "inset?", options: ["सर्व", "एक", "दोन"], correct: 0 },
      { question: "RTL?", options: ["उलट", "सरळ", "जड"], correct: 0 },
    ],
    challenge: {
      prompt: "logical border note साधा.",
      starterCode: `.note { border-inline-start: 3px solid #0ea5e9; }`,
      expectedOutput: "Renders a note with logical start border",
    },
    interviewQuestions: ["l", "o", "g", "i", "c", "a", "l", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-box-decoration", "css-font-fallback", "css-scope-rule"],
    prev: "css-box-decoration",
    next: "css-scope-rule",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-scope-rule-2",
    categoryId: "web",
    title: "Scope Rule",
    marathiTitle: "@scope — मर्यादा नियम",
    level: "advanced",
    minutes: 32,
    summary: "scope proximity आणि स्थान नियंत्रण.",
    sections: [
      {
        title: "@scope — मर्यादा नियम म्हणजे काय?",
        content: "scope proximity आणि स्थान नियंत्रण.\n@scope हा नियम कंडिशन सांगतो: घटकाच्या आतल्या मुलांना शैली द्या.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? @scope — मर्यादा नियम चे फायदे आणि महत्त्व",
        content: "✓ क्रमापेक्षा जवळीक महत्त्वाची; हेच scope चं वेगळेपण.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ मिश्रण टाळा: कुठे scope वापरावा, कुठे नाही हे स्पष्ट ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. scope कल्पना", content: "@scope हा नियम कंडिशन सांगतो: घटकाच्या आतल्या मुलांना शैली द्या.\n@scope (.card) म्हणजे .card मधील सर्व घटक.\nआत h3 निवडला तरी निवड अचूक — बाहेरच्या h3 वर परिणाम नाही.\nमोठ्या प्रोजेक्टमध्ये काही भागाची शैली आपल्या सीमेत मर्यादित राहते.\nसिमेंटिक यादी सरळ — कोणता h3 रंगला हे एका ओळीतून कळते.", code: `@scope (.card) {
  h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "2. सीमा (to)", content: "@scope च्या सीमा to ने घट्ट करता येतात.\n@scope (.article) to (.footnote) म्हणजे article आत पण footnote सुरू होण्यापूर्वी संपतं.\nfootnote च्या मजकुराची line-height बदलली जात नाही — तो सीमेबाहेर.\nअशा मर्यादांनी शैली वेगळ्या भागांत नकळत शिरत नाही.\nमोठ्या लेखाच्या केवळ मुख्य मजकुरासाठी नियम लिहायचा असेल तर ही सीमा सुयोग्य.", code: `@scope (.article) to (.footnote) {
  p {
    line-height: 1.7;
  }
}`, codeLanguage: "css" },
      { title: "3. proximity नियम", content: "जेव्हा एकच घटक दोन scope मध्ये येतो, तेव्हा जवळचा scope जिंकतो.\nयेथे .a मध्ये p ला red आणि .b मध्ये p ला blue दिला.\nघटक .b च्या जवळ असेल तर निळा; .a जवळ असेल तर लाल.\nहा proximity नियम — समान वजनात जवळचा ठरतो.\nक्रमापेक्षा जवळीक महत्त्वाची; हेच scope चं वेगळेपण.", code: `@scope (.a) { p { color: red; } }
@scope (.b) { p { color: blue; } }`, codeLanguage: "css" },
      { title: "4. nesting", content: "@scope एका शैलीतील नियमाच्या आतही वापरता येतो — घरटी रचना.\n.article च्या आत @scope उघडला; त्यात h2 + p चा नियम.\nh2 लगेच खाली असलेल्या p ला मर्यादित अंतर मिळते.\nअशी घरटी जोडणी कोड वाचणं सोपं करते.\nकंस नीट जुळले तर रचना घट्ट आणि व्यवस्थित राहते.", code: `.article {
  @scope {
    h2 + p {
      margin-top: 0.6em;
    }
  }
}`, codeLanguage: "css" },
      { title: "5. मर्यादा", content: "scope ची शैली विशिष्ट भागात मर्यादित ठेवता येते; पण आधार तपासा.\nयेथे .section च्या आत .card ला शैली दिली; मुलांवरच फक्त परिणाम.\nजुन्या ब्राउझरमध्ये आधार नसेल तर नियम रद्द — रचना तरीही सुंदर.\nमिश्रण टाळा: कुठे scope वापरावा, कुठे नाही हे स्पष्ट ठेवा.\nजिथे जरुर तिथे scope; आजूबाजूला साधे नियम — दोन्ही एकत्र.", code: `@scope (.section) {
  .card {
    border-radius: 12px;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "@scope चा आधार नवीन आला आहे; जुन्या browser साठी fallback लिहा.\nआधी साधा नियम .card h3 ला color दिला.\nमग @scope मधील नियम — नवीन browser मध्ये हा जागा घेतो.\nदोन्ही एकत्र असले म्हणजे कोणत्याही browser मध्ये परिणाम सारखा.\nपुलाप्रमाणे: जुना मार्ग साधारण, नवा scope अचूक — दोघांना खात्री.", code: `.card h3 {
  color: #0f172a;
}
@scope (.card) {
  h3 {
    color: #0f172a;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता card च्या शीर्षकाचा रंग मर्यादित करू — प्रकल्प लहान.\n@scope (.card) मध्ये h3 चा color द्या.\nबाहेरचे h3 असेच राहतात; फक्त card मधील शीर्षके बदलतात.\nपेजवर एकापेक्षा जास्त card ठेवून फरक पहा — प्रत्येकाला शैली मिळते.\nएकच नियम आणि रंग स्थिर — scope ने आतल्या शैलीची खात्री.", code: `@scope (.card) { h3 { color: #0f172a; } }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scope काय?", "to सीमा?", "proximity कुठे?"],
    quiz: [
      { question: "@scope?", options: ["मर्यादा", "रंग", "फॉन्ट"], correct: 0 },
      { question: "to?", options: ["सीमा", "केंद्र", "शेवट"], correct: 0 },
      { question: "proximity?", options: ["जवळचा", "दुरचा", "मोठा"], correct: 0 },
      { question: "nesting?", options: ["शक्य", "नको", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "card scope color द्या.",
      starterCode: `@scope (.card) { h3 { color: #0f172a; } }`,
      expectedOutput: "Renders scoped card heading color",
    },
    interviewQuestions: ["s", "c", "o", "p", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-logical-props", "css-cascade-layers", "css-will-change"],
    prev: "css-logical-props",
    next: "css-will-change",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-will-change",
    categoryId: "web",
    title: "Will Change",
    marathiTitle: "will-change — गती इशारा",
    level: "advanced",
    minutes: 32,
    summary: "performance, layers आणि बचत नियम.",
    sections: [
      {
        title: "will-change — गती इशारा म्हणजे काय?",
        content: "performance, layers आणि बचत नियम.\nwill-change ब्राउझरला सांगतो की कोणता गुणधर्म बदलणार — त्याची पूर्वतयारी करतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? will-change — गती इशारा चे फायदे आणि महत्त्व",
        content: "\"will-change — गती इशारा\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ color सारखे गुणधर्म प्रत्येक फ्रेम रंगवतात — ते टाळा.\n✗ वापरकर्त्याला हालचाल टाळायची असेल तर पेजही थांबते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. will-change कल्पना", content: "will-change ब्राउझरला सांगतो की कोणता गुणधर्म बदलणार — त्याची पूर्वतयारी करतो.\n.hoverable ला will-change: transform दिलं तर hover चा बदल तयार राहतो.\nब्राउझर त्या घटकाला स्वतंत्र थरावर जोडून कामाला सज्ज होतो.\nजास्त गुणधर्म दिले तर मेमरी वाया जाते; संख्या कमी आणि नेमकी ठेवा.\nहा इशारा जाणीवपूर्वक द्या — प्रत्येक घटकावर नको.", code: `.hoverable {
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "2. layer बचत", content: "fixed घटक स्क्रोल करताना सतत पुन्हा जोडला जातो; transform layer त्याचं काम सोपे करतो.\n.stick ला position: fixed दिलं.\nwill-change: transform म्हणजे तो घटक स्वतःच्या थरावर बसतो.\nस्क्रोल स्थिर राहतो — झटके येत नाहीत.\nअसे घटक स्वतंत्र थरावर असल्याने GPU ने सुरळीत हालचाल होते.", code: `.stick {
  position: fixed;
  will-change: transform;
}`, codeLanguage: "css" },
      { title: "3. कमी वापर", content: "will-change चा वापर काटकसरीने करा — प्रत्येक घटकाला तो नको.\nयेथे .card hover झाल्यावरच will-change देतात.\nबेस .card मध्ये transition: transform 0.3s — मऊ बदल.\nhover संपल्यावर will-change गेला; मेमरी साफ.\nसतत will-change धरल्यास प्रत्येक घटक वेगळा थर घेतो — मेमरीचा अपव्यय.", code: `.card:hover {
  will-change: transform;
}
.card {
  transition: transform 0.3s;
}`, codeLanguage: "css" },
      { title: "4. contain सह", content: "गती दोन्ही साधनांनी वाढते — content-visibility आणि contain-intrinsic-size.\n.virtual घटक लांब असला तरी auto ने दूरचा भाग लादला जात नाही.\ncontain-intrinsic-size: 0 200px म्हणजे त्याचा अंदाजित आकार.\nलांब यादीत प्रत्येक item चा अंदाज मिळताच स्क्रोलbar स्थिर राहतो.\nwill-change सोबत हे सगळं एकत्र आले तर मोठी यादी वेगाने चालते.", code: `.virtual {
  content-visibility: auto;
  contain-intrinsic-size: 0 200px;
}`, codeLanguage: "css" },
      { title: "5. animation विना will", content: "animation फक्त transform आणि opacity सारख्या मजबूत गुणधर्मांवर चालू द्या.\nया दोघांवर ब्राउझरचा खर्च कमी असतो.\nम्हणून .move ला animation: slide 0.4s ease दिला — अचानक नाही.\ncolor सारखे गुणधर्म प्रत्येक फ्रेम रंगवतात — ते टाळा.\nअनावश्यक will-change लिहिण्याऐवजी या गुणधर्मांवर भरवसा ठेवा.", code: `.move {
  animation: slide 0.4s ease;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "शेवटचा नियम प्रवेश्यता: reduced motion ला मान द्या.\n@media (prefers-reduced-motion: reduce) मध्ये .move ची animation बंद केली.\nवापरकर्त्याला हालचाल टाळायची असेल तर पेजही थांबते.\nतेजाचे नियम फक्त वाचकांच्या आरामासाठी; गती त्यांच्या हाती.\nअशी सवय लागली की गती आणि प्रवेश्यता दोन्ही स्थिर राहतात.", code: `@media (prefers-reduced-motion: reduce) {
  .move {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता हलणाऱ्या कार्डला layer सह गती द्या — hover तपासा.\n.card ला will-change: transform द्या.\nसोबत transition: transform 0.3s जोडा — बदल मऊ.\nhover करताना वर-खाली हालचाल व्यवस्थित वाटते.\nपरफॉर्मेंस आणि नियंत्रण दोन्ही — एका ओळीत.", code: `.card { will-change: transform; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["will-change काय?", "layer कुठे?", "रंग कमी?"],
    quiz: [
      { question: "will-change?", options: ["इशारा", "रंग", "नाव"], correct: 0 },
      { question: "gpu?", options: ["तेज", "मंद", "रंग"], correct: 0 },
      { question: "कमी वापर?", options: ["होय", "नाही", "काही"], correct: 0 },
      { question: "reduced?", options: ["नियम", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "card hover tejas द्या.",
      starterCode: `.card { will-change: transform; }`,
      expectedOutput: "Renders a performant hover-transform card",
    },
    interviewQuestions: ["w", "i", "l", "l", "-", "c", "h", "a", "n", "g", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-scope-rule", "css-contain-property", "css-sticky-nav"],
    prev: "css-scope-rule",
    next: "css-marathi-capstone6",
    levelLabel: CSS6_LABEL,
  },
  {
    slug: "css-marathi-capstone6",
    categoryId: "web",
    title: "Marathi Capstone 6",
    marathiTitle: "Portal Nexus — दृश्य संग्रह",
    level: "advanced",
    minutes: 32,
    summary: "सर्व Level 6 तंत्रांचा संग्रह.",
    sections: [
      {
        title: "Portal Nexus — दृश्य संग्रह म्हणजे काय?",
        content: "सर्व Level 6 तंत्रांचा संग्रह.\nआता Level 6 ची सर्व तंत्रे एकाच portal मध्ये सामावत आहोत.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Portal Nexus — दृश्य संग्रह चे फायदे आणि महत्त्व",
        content: "\"Portal Nexus — दृश्य संग्रह\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. ध्येय", content: "आता Level 6 ची सर्व तंत्रे एकाच portal मध्ये सामावत आहोत.\n.portal ला content-visibility: auto दिला — मोठे भाग हवे तेवढेच लादतात.\ncontain: layout paint ने गणना पृथक ठेवली.\nवेग आणि स्थिरता — या दोन ओळींत सामावले.\nभविष्यातील मोठ्या portal चा पाया इथून तयार होतो.", code: `.portal {
  content-visibility: auto;
  contain: layout paint;
}`, codeLanguage: "css" },
      { title: "2. थ्रेशहोल्ड थर", content: "थरांचा क्रम ठरवल्यावर संपूर्ण portal क्रमबद्ध राहतो.\n@layer base, theme, utilities — हा क्रम वरून खाली.\nbase मध्ये reset; theme मध्ये रंग; utilities मध्ये पर्याय.\nनंतरचा थर आधीच्या थरावर जिंकतो — नियम स्थिर.\nएक छोटी घोषणा आणि सर्व शैलीचा ताळा ठरतो.", code: `@layer base, theme, utilities;`, codeLanguage: "css" },
      { title: "3. mask हेडर", content: "मुख्य हेडर सजवताना mask ने मऊ कडा दिल्या.\n.masthead ला radial-gradient(black 55%, transparent) — केंद्र घन, बाजू फिक्कट.\nशीर्षक मोठं; रचना उजळ — चित्र हेडर खोल होतं.\nmask ने भाग लपतो, चित्र राहतं — परत करता येतं.\nएक mask नियम आणि हेडरला वेगळी ओळख.", code: `.masthead {
  mask-image: radial-gradient(black 55%, transparent);
}`, codeLanguage: "css" },
      { title: "4. font आधार", content: "मराठी portal ची भाषा निरनिराळ्या device वर सुस्पष्ट हवी.\n.portal ला font-family अशी मालिका: Mukta, Noto Sans Devanagari, sans-serif.\nMukta नाही तर Noto; Noto नाही तर कोणताही.\nअक्षरांमध्ये एकसारखेपणा; वाचन शांत राहते.\nfont stack म्हणजे यंत्रणेचा पाया — तो ढळत नाही.", code: `.portal {
  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;
}`, codeLanguage: "css" },
      { title: "5. sticky स्ट्रक्चर", content: "portal ची नेव्हिगेशन स्क्रोल करताना सोबत हवी.\n.portal च्या header ला position: sticky; top: 0 दिला.\nz-index: 40 ने तो मजकुरावर दिसतो.\nउप-मेनूची झुंबड टाळण्यासाठी थर वेगळे ठेवा.\ngap आणि अंतर स्थिर असल्याने स्क्रोल सुरळीत दिसते.", code: `.portal {
  position: sticky;
  top: 0;
  z-index: 40;
}`, codeLanguage: "css" },
      { title: "6. आधार मोठा", content: "portal च्या आत scope ने शैली मर्यादित ठेवली.\n@scope (.card) मध्ये h3 चा रंग दिला.\nफक्त card मधील शीर्षक बदलते — बाहेरचे राहतात.\nmargin-block: 24px ने मुख्य भागाचे उभे अंतर.\nएकत्र आले: scope मर्यादा आणि logical अंतर — दोन्ही स्पष्ट.", code: `@scope (.card) {
  h3 { color: #0f172a; }
}
.main {
  margin-block: 24px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "शेवटची कसोटी — संपूर्ण portal जोडत आहोत.\n.portal ला min-height: 100vh द्या — संपूर्ण पडदा व्यापेल.\nयावर Level 6 मध्ये शिकलेले नियम आधीच बसले आहेत.\nहेडर, मजकूर, gallery — सर्व भाग एकत्र चालतात.\nअसा portal तयार झाला की modern control चा पाया पक्का होतो.", code: `.portal { min-height: 100vh; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["layer कसे?", "mask कुठे?", "sticky काय?"],
    quiz: [
      { question: "nexus?", options: ["संग्रह", "रंग", "एक"], correct: 0 },
      { question: "contain?", options: ["तेज", "मंद", "रंग"], correct: 0 },
      { question: "sticky?", options: ["चिकट", "साधा", "जड"], correct: 0 },
      { question: "@scope?", options: ["मर्यादा", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "portal nexus पूर्ण.",
      starterCode: `.portal { min-height: 100vh; }`,
      expectedOutput: "Renders polished Marathi portal nexus using Level 6 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "6", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-will-change", "css-view-transition"],
    prev: "css-will-change",
    next: "css-contain-property",
    levelLabel: CSS6_LABEL,
  },];
