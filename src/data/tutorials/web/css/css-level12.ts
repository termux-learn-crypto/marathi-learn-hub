import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 12 — Blend & Detail ===
export const CSS12_LABEL = "CSS · Level 12 — Blend & Detail";

export const cssLevel12: Tutorial[] = [
  {
    slug: "css-overscroll",
    categoryId: "web",
    title: "Overscroll",
    marathiTitle: "overscroll — स्क्रोल नियंत्रण",
    level: "advanced",
    minutes: 40,
    summary: "overscroll-behavior सह scroll chaining थांबवणे.",
    sections: [
      { title: "1. overscroll कल्पना", content: "स्क्रोल एका घटकाच्या शेवटाला पोहोचला की ब्राउझर ती गती पुढच्या घटकाकडे पाठवतो — याला scroll chaining म्हणतात. उदा. एक modal उघडला असून त्याचा मजकूर संपल्यावर मागचं पेजही हलायला लागतं.\noverscroll-behavior हा नियम ही गती थांबवतो. contain मूल्य दिलं तर स्क्रोल फक्त या घटकाच्या आतच राहतो; बाहेर पाठवला जात नाही.\nnone मूल्याने शेवटची बाऊन्सची तानही (pull-to-refresh) थांबते — मोबाइलवर हा फरक स्पष्ट दिसतो.\nहे नियम वापरल्यावर पेजचे दृश्य शांत राहते आणि वापरकर्त्याला आपण कुठे आहोत हे नेहमी समजतं. हीच मोठी सुधारणा — गतीवर नियंत्रण.", code: `.modal {
  overscroll-behavior: contain;
}`, codeLanguage: "css" },
      { title: "2. chain रोख", content: "चेनिंग म्हणजे एका घटकाच्या शेवटी पोहोचल्यावर गती पुढच्या घटकाकडे सरकण्याची सवय. उदा. एक लहान list मध्ये scroll संपल्यावर बाहेरचं संपूर्ण पेज मागे जातं.\nही वर्तणूक कधी उपयुक्त असते (उदा. फीडमध्ये), पण modal, drawer आणि वेगळ्या क्षेत्रांमध्ये ती चुकीचीच ठरते.\noverscroll-behavior-y: contain फक्त उभ्या (vertical) स्क्रोलची चेन रोखतो; क्षैतिज गती जशीच्या तशी राहते.\nएका घटकाला दोन्ही अक्षांसाठी वेगळे नियम हवे असल्यास overscroll-behavior-x आणि overscroll-behavior-y असे स्वतंत्र वापरा.\nपेजचे थर एकमेकांना ढकलत नाहीत हेच या सवयीचं मर्म — वापरकर्ता नकळत कुठेही सरकत नाही.", code: `html {
  overscroll-behavior-y: contain;
}`, codeLanguage: "css" },
      { title: "3. पेज थर", content: "पेजमध्ये नेहमी दोन थर असतात — मूळ पेज आणि त्यावर उघडलेलं modal किंवा dialog. modal चा मजकूर मोठा असल्यास त्याला स्वतःची स्क्रोल हवी असते.\nपण इथेच समस्या येते — modal संपल्यावर नकळत मागचं पेजही स्क्रोल होऊ लागतं आणि वाचक अचानक वेगळ्या जागी पोहोचतो.\nयावर उपाय: .dialog ला overflow-y: auto द्या — मजकूर मोठा झाल्यास scrollbar आपोआप तयार होईल.\nआणि overscroll-behavior: contain द्या — म्हणजे गती modal च्या आतच सीमित राहील. दोन्ही एकत्र आल्याने मागचं पेज शांत राहतं.\nहा नमुना प्रत्येक modal मध्ये वापरल्यास पेज व्यवस्थित आणि स्थिर दिसतं — हीच अपेक्षित वर्तणूक असते.", code: `.dialog {
  overscroll-behavior: contain;
  overflow-y: auto;
}`, codeLanguage: "css" },
      { title: "4. bounce नको", content: "मोबाइल ब्राउझरमध्ये स्क्रीन संपल्यावर एक नरम बाऊन्स होतो — संपूर्ण पेज थोडं वर-खाली झटकल्यासारखं दिसतं. काही ठिकाणी हे गोंडस वाटतं; पण game किंवा canvas सारख्या ठिकाणी ते गोंधळ निर्माण करतं.\noverscroll-behavior: none ने हा बाऊन्स आणि चेन दोन्ही पूर्णपणे थांबतात — स्क्रीन नेमकी तिथेच थांबते जिथे मजकूर संपतो.\nएका-स्क्रीनच्या ऍपमध्ये (app) हीच अपेक्षित वर्तणूक आहे; मागे घसरून वेगळ्या भागात जाणं अयोग्य.\ncontain फक्त चेन रोखतो; none बाऊन्सही रोखतो. जिथे स्थिरता सर्वांत महत्त्वाची तिथे none योग्य.\nसवय नेमकी ठेवा — कोणत्या घटकाला शांत राहायचं ते आधी ठरवा, मग मूल्य निवडा.", code: `.screen {
  overscroll-behavior: none;
}`, codeLanguage: "css" },
      { title: "5. अक्ष नियम", content: "overscroll-behavior मध्ये दोन मुख्य मूल्ये — contain आणि none. contain ने चेन थांबते; none ने बाऊन्ससह सर्व हालचाल थांबते.\nदुसरा फरक अक्षांचा — overscroll-behavior-x आणि overscroll-behavior-y स्वतंत्रपणे वापरता येतात.\nउदा. body ला overscroll-behavior-x: contain दिलं की क्षैतिज स्वाइप गती बाहेर पाठवली जात नाही; उभा स्क्रोल जसाच्यातसा राहतो.\nजर बाजूंच्या स्लाइडरमुळे पेज आपसूक हलत असेल, तर तेच ठिकाण x-अक्ष नियंत्रणाचं असतं.\nकुठल्या अक्षावर नियंत्रण हवं ते आधी ठरवा — मग गुणधर्माची निवड स्वाभाविक होते.", code: `body {
  overscroll-behavior-x: contain;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "overscroll-behavior हा तुलनेने नवीन गुणधर्म आहे; जुन्या ब्राउझरमध्ये तो ओळखला जात नाही आणि फक्त दुर्लक्षित होतो.\nम्हणूनच उत्तम पद्धत — @supports block मध्ये नियम ठेवा. ब्राउझरला overscroll-behavior समजत असल्यासच तो block लागू होतो.\nजुन्या ब्राउझरमध्ये स्वाभाविक स्क्रोल वर्तणूक सुरू राहते — content वाचण्यायोग्य आणि वापरण्यायोग्य राहतं.\nही सवय लागली की प्रत्येक ब्राउझरवर पेज सुरक्षित राहतं; नवीन गुणधर्मांना भीती वाटायची नाही.\nआधुनिक ब्राउझर मात्र overscroll-behavior ला चांगलं समर्थन देतात — आज हा नियम सातत्याने वापरता येतो.", code: `@supports (overscroll-behavior: contain) {
  .modal {
    overscroll-behavior: contain;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता संपूर्ण सराव — एक modal ज्याचा स्क्रोल मागच्या पेजपासून पूर्ण अलग राहतो. .modal ला overflow-y: auto द्या.\nयामुळे लांब मजकुरात आत स्क्रोल होईल आणि आवश्यकतेनुसार scrollbar दिसेल.\nमग overscroll-behavior: contain जोडा — modal चा स्क्रोल संपल्यावर मागचं पेज हलू नये.\nहे दोन नियम एकत्र आल्यावर modal स्वतःच्या जागी स्थिर राहतो आणि बाहेरचं पेज शांत.\nहा नमुना प्रत्येक modal, drawer, popover मध्ये वापरा — वापरकर्त्याला दिशा नियंत्रित वाटते आणि पेजची गती आरामदायी होते.", code: `.modal {
  overscroll-behavior: contain;
  overflow-y: auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["overscroll काय?", "contain कुठे?", "chain म्हणजे?", "none कधी?"],
    quiz: [
      { question: "overscroll-behavior?", options: ["चेन रोख", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: "contain कुठे?", options: ["modal", "html", "image"], correct: 0 },
      { question: "chain म्हणजे?", options: ["मागे स्क्रोल", "आत रंग", "नवीन थर"], correct: 0 },
      { question: "none कधी?", options: ["बाऊंस नको", "मोठा रंग", "झटका"], correct: 0 },
    ],
    challenge: {
      prompt: "modal स्क्रोल करा.",
      starterCode: `.modal {
  overscroll-behavior: contain;
  overflow-y: auto;
}`,
      expectedOutput: "Modal scroll stays contained on Marathi page",
    },
    interviewQuestions: ["contain फायदा?", "chain त्रास?"],
    related: ["css-scroll-margin", "css-content-visibility", "css-modal-backdrop"],
    prev: "css-marathi-capstone11",
    next: "css-scroll-margin",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-scroll-margin",
    categoryId: "web",
    title: "Scroll Margin",
    marathiTitle: "scroll-margin — अँकर जागा",
    level: "advanced",
    minutes: 40,
    summary: "scroll-margin scroll-padding अँकर व्यवस्था.",
    sections: [
      { title: "1. margin कल्पना", content: "जेव्हा दुव्यावरून पेजमधील एखाद्या भागाकडे जातो, तेव्हा ब्राउझर त्या भागाला पटकन वरच्या काठाशी जुळवतो. पण शीर्षस्थानी sticky header (मथळा) असेल तर तो भाग मथळ्याखाली लपतो.\nscroll-margin हा गुणधर्म इथे मदत करतो — तो अँकर घटकाच्या सभोवती अतिरिक्त जागा सोडतो. उदा. section ला scroll-margin-top: 80px म्हणजे वरून 80px अंतर ठेवून भाग दृश्य होईल.\nम्हणजेच ब्राउझर त्या भागाला काठाला न चिकटवता 80px वर थांबवतो.\nहे छोटं अंतर वाचनाचा क्रम सुधारतं — मथळ्याखाली लपलेलं शीर्षक नको; स्पष्ट दृश्य.\nसरावात प्रत्येक section ला हे अंतर आधीच दिलं तर अँकर दुवे सहज आणि व्यवस्थित काम करतात.", code: `section {
  scroll-margin-top: 80px;
}`, codeLanguage: "css" },
      { title: "2. padding थर", content: "scroll-padding हा गुणधर्म scroll container वर लिहितात — ज्या पात्रात स्क्रोल होतं त्याला. हे अंदाजे scroll-margin सारखंच काम करतं.\nफरक एवढासा — scroll-margin घटकावर असतं; scroll-padding स्क्रोल होणाऱ्या container वर.\nउदा. .container ला scroll-padding-top: 80px दिलं की त्याखाली येणाऱ्या प्रत्येक अँकर भागाला वरून 80px जागा मिळते.\nहे सगळ्या अँकर दुव्यांना एकाच वेळी लागू होतं — प्रत्येक घटकावर वेगळा नियम लिहायची गरज नाही.\nम्हणून मोठ्या गॅलरी किंवा लांब लेखांमध्ये scroll-padding अधिक आवडतं; रचना स्पष्ट आणि देखभाल सोपी राहते.", code: `.container {
  scroll-padding-top: 80px;
}`, codeLanguage: "css" },
      { title: "3. अँकर दुवा", content: "अँकर दुवा म्हणजे hash (#) असणारा दुवा — उदा. a element मध्ये href='#heading'. क्लिक मारल्यावर ब्राउझर #heading असलेल्या घटकाकडे सरकतो.\nपण मथळ्याखाली sticky header असेल तर तो भाग लपतो; म्हणून अँकर घटकाला scroll-margin-top देतात.\nउदा. #heading ला scroll-margin-top: 6rem म्हणजे ब्राउझर या घटकाला वरच्या काठापासून 6rem खाली थांबवतो.\nहे एक छोटंसे अंतर वाचनाला मोठा दिलासा देते — दुव्यांच्या sidebar मध्ये क्लिक करून वाचक नेमक्या जागी पोहोचतो.\nअँकर दुवे आणि scroll-margin समजले की लांब लेखाची सोय आपोआप वाढते.", code: `#heading {
  scroll-margin-top: 6rem;
}`, codeLanguage: "css" },
      { title: "4. snap जोड", content: "scroll snap म्हणजे स्क्रोल करताना घटकांना नेमक्या स्थानांवर थांबवणं — carousel सारख्या गॅलरीत प्रत्येक कार्ड अगदी चौकटीत बसते. ही गोष्ट scroll-snap-type ने सुरू होते.\nscroll-snap-type: x mandatory म्हणजे क्षैतिज स्क्रोल प्रत्येक क्षणी कुठल्या ना कुठल्या snap पॉइंटवर राहतो.\nपण कार्ड काठाला चिकटू नये म्हणून scroll-padding-inline: 20px देतात — दोन्ही बाजूंना थोडी जागा.\nअशा प्रकारे snap आणि padding एकत्र वापरल्यावर प्रत्येक कार्ड समान अंतराने दिसतं.\ncarousel, टाईल गॅलरी, step किंवा स्लाइडर — येथे हा तुकडा नेहमीच उपयोगी पडतो.", code: `.carousel {
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 20px;
}`, codeLanguage: "css" },
      { title: "5. header साथ", content: "sticky header म्हणजे वर बसलेला मथळा जो स्क्रोल करताना स्क्रीनवर राहतो. पण तोच मथळा अँकर दुवे लहान भाग खालून आणल्यावर त्यांना लपवतो.\nउपाय — प्रत्येक section ला scroll-margin-top एवढा द्या की तो header च्या उंचीपेक्षा जास्त असेल. उदा. .section ला scroll-margin-top: 64px.\nम्हणजे अँकर दुव्याने आल्यावर शीर्षक header खाली स्पष्ट दिसतं; लपत नाही.\nheader ची उंची बदलल्यास scroll-margin ची मूल्येही अद्ययावत करा — नाहीतर गोंधळ पुन्हा येतो.\nही लहानशी तपासणी दृश्य सुबक राखते आणि वाचकाला नेहमी योग्य जागेवर आणतं.", code: `.section {
  scroll-margin-top: 64px;
}`, codeLanguage: "css" },
      { title: "6. दोन्ही नियम", content: "scroll-margin आणि scroll-padding हे जवळचे मित्र आहेत — एक घटकावर, तर एक container वर. दोघांचाही वापर एकत्र करता येतो.\nउदा. .section ला scroll-margin: 16px — सर्व बाजूंना 16px अँकर जागा.\nआणि .container ला scroll-padding-top: 8rem — आतल्या भागाला वरून मोठी जागा. दोन्ही मिळून अँकर भाग दृश्य क्षेत्रात टिकतो.\nजेव्हा एका घटकाला वेगळी उंची लागते (उदा. वेगळ्या शैलीचे heading), तेव्हा scroll-margin जास्त योग्य.\nसवय नेमकी — container व्यवस्थापनात scroll-padding; वेगळ्या भागासाठी scroll-margin. दोन्ही समजले की अँकर व्यवस्था पूर्ण होते.", code: `.section {
  scroll-margin: 16px;
}
.container {
  scroll-padding-top: 8rem;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावात मथळ्यांचे दुवे जोडून अँकर जागा निश्चित करूया. प्रत्येक heading ला id द्या आणि दुव्यांसाठी scroll-margin-top द्या.\nउदा. h2[id] ला scroll-margin-top: 96px — header ची उंची आणि आरामाची जागा मिळून असा आकार.\nइथे id असलेल्या सर्व h2 ला एकाच नियमाने जागा मिळते — वेगळे वेगळे नियम नाहीत.\nहे नियम वापरल्यावर प्रत्येक अँकर क्लिक नेमक्या ठिकाणी पोहोचतं आणि दृश्य अचूक राहतं.\nसराव पूर्ण झाल्यावर लांब लेख, docs आणि अध्यायांतील मथळे — सर्वत्र हाच नमुना वापरता येतो.", code: `h2[id] {
  scroll-margin-top: 96px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["scroll-margin काय?", "scroll-padding कुठे?", "anchor कसा?", "snap जोड?"],
    quiz: [
      { question: "scroll-margin?", options: ["अँकर जागा", "ध्वनी", "रंग"], correct: 0 },
      { question: "scroll-padding कुठे?", options: ["container", "image", "table"], correct: 0 },
      { question: "hash दुवा?", options: ["#id", ".class", "@media"], correct: 0 },
      { question: "snap-stop?", options: ["थांबा नियम", "रंग जोड", "रेखा"], correct: 0 },
    ],
    challenge: {
      prompt: "अँकर जागा द्या.",
      starterCode: `h2[id] {
  scroll-margin-top: 96px;
}`,
      expectedOutput: "Marathi headings anchor below topbar",
    },
    interviewQuestions: ["margin vs padding?", "snap कसा जुळतो?"],
    related: ["css-overscroll", "css-scroll-snap", "css-gap-mastery"],
    prev: "css-overscroll",
    next: "css-content-visibility",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-content-visibility",
    categoryId: "web",
    title: "Content Visibility",
    marathiTitle: "content-visibility — रेंडरिंग गती",
    level: "advanced",
    minutes: 40,
    summary: "content-visibility सह ऑफस्क्रीन गती.",
    sections: [
      { title: "1. visibility कल्पना", content: "जेव्हा पेजवर मोठा मजकूर असतो — लांबलेली story, list, feed — तेव्हा ब्राउझर सर्व काही उभं करतो, अगदी स्क्रीनवर नसलेले भागही. यामुळे पेज लोड होताना वेळ वाया जातो.\ncontent-visibility: auto याचे तंत्र वेगळे — स्क्रीनजवळ असलेला भागच त्वरित रेंडर होतो; दूरचे भाग सरकवून आणल्यावर रेंडर होतात.\nयामुळे सुरुवातीचा लोड झपाट्याने वेगवान होतो — जणू लांब पेज अनेक स्तरांमध्ये उघडते.\nब्राउझरचं काम कमी झालं की स्क्रोल गुळगुळीत आणि क्रिया झटपट होतात.\nही performance सुधारणा मोबाइल सारख्या कमी जागा वापरणाऱ्या पेजांसाठी आणखी उपयुक्त आहे.", code: `.story {
  content-visibility: auto;
}`, codeLanguage: "css" },
      { title: "2. आकार जागा", content: "content-visibility: auto ने ब्राउझरला दूरच्या भागांचा आकार नकळतो — त्यांची रुंदी-उंची रिकामी मानली जाते. स्क्रोल करताना जागा अचानक उडी मारते आणि layout ढळतं.\nयावर उपाय म्हणजे contain-intrinsic-size — एखाद्या भागाच्या स्वाभाविक आकाराची घोषणा. उदा. contain-intrinsic-size: 0 500px म्हणजे रुंदी नाही, पण उंची 500px धरून राहा.\nस्क्रीनवर येण्याआधी त्या भागाला ही जागा मिळते, म्हणून scrollbar थरथरत नाही.\nकोणत्या भागाची उंची अंदाजे किती असते ते नेमके लिहा — खूप मोठा अंदाज तर layout खराब करेल.\nआकाराची स्थिरता राहिली की content-visibility चा खरा फायदा दिसतो — गती आणि स्थिरता दोन्ही.", code: `.story {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;
}`, codeLanguage: "css" },
      { title: "3. दूर भाग", content: "लांब article मध्ये स्क्रीनवर फक्त एक भाग दिसतो; बाकीचे खूप दूर असतात. या दूर असलेल्या भागांचे rendering ब्राउझर उगाच केले जाते.\ncontent-visibility: auto ने ब्राउझरला सांगतो — स्क्रीनजवळ आलेला भागच रेंडर करा; दूरचा सोडा.\nबरोबर contain-intrinsic-size: auto 400px जोडायला हवा — auto म्हणजे ब्राउझर आकाराची आठवण ठेवतो आणि 400px ही तात्पुरती उंची.\nयाचा फायदा — स्क्रीन, जागा आणि वेळ तिन्ही वाचतात; पेज लवकर उघडतं.\nफक्त लक्ष ठेवा — प्रत्येक भागाचा आकार वास्तवाच्या जवळ ठेवा; चुकीचा अंदाज layout हलवू शकतो.", code: `article {
  content-visibility: auto;
  contain-intrinsic-size: auto 400px;
}`, codeLanguage: "css" },
      { title: "4. मर्यादा नियम", content: "content-visibility दोन स्वरूपात असतो — auto आणि hidden. auto म्हणजे स्क्रीनजवळ आल्यावर भाग रेंडर होतो.\nhidden मूल्य भाग कायमचा लपवतो — स्क्रीनवर नसताना रेंडरच नाही होणार, आणि त्याची जागाही रिकामी राहते.\nhidden हे केवळ गुप्त ठेवण्यासाठी नाही; तर ब्राउझरला मिळणाऱ्या कामाची मर्यादा नियंत्रित करण्यासाठी.\nauto आणि hidden यांचा योग्य ताळमेळ ठेवला तर rendering नियंत्रित राहतं.\nकोणता भाग कधी दिसणार आहे ते आधी ठरवा — त्यानुसारच मूल्य निवडा; लपलेला मजकूर search मध्ये न येणंही लक्षात ठेवा.", code: `section {
  content-visibility: hidden;
}`, codeLanguage: "css" },
      { title: "5. गती मोजमाप", content: "content-visibility चा खरा फरक जाणून घेण्यासाठी आधी वेळ मोजा — DevTools च्या Performance panel मध्ये पेज लोड वेळ बघा.\nमग लांब पेजवर content-visibility: auto आणि contain-intrinsic-size: auto 600px लावून पुन्हा मोजा.\nफरक नक्की दिसतो — सुरुवातीचा रेंडर वेळ कमी होतो, स्क्रोल गुळगुळीत राहतो.\nप्रत्येक wrapper च्या आकाराचा अंदाज वास्तवाशी जुळवा — खूप मोठी किंमत layout shift ला जन्म देईल.\nहे मोजमाप केलं की performance चे खरे फायदे पटतात आणि वाचनाला आरामही मिळतो.", code: `.wrapper {
  content-visibility: auto;
  contain-intrinsic-size: auto 600px;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "content-visibility हा तुलनेने नवीन गुणधर्म आहे; जुन्या ब्राउझरमध्ये त्याची ओळख नाही — त्याचा नियम शांतपणे टाकून दिला जातो.\nयामुळे विकासक @supports वापरतात — ब्राउझरला हे समजत असेल तरच हा block लागू होतो.\nउदा. list ला content-visibility: auto फक्त @supports च्या आत येतं; जुन्या ब्राउझरमध्ये साधा rendering चालतो.\nhidden सारख्या कठोर मूल्यांसाठी हीच रीत पाळा; नाहीतर घटक पूर्णपणे लपण्याचा धोका.\nआधार तपासत राहिल्यावर नवीन गुणधर्म सुरक्षितपणे वापरता येतात — performance आणि सुसंगतता दोन्ही राखता येते.", code: `@supports (content-visibility: auto) {
  .list {
    content-visibility: auto;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक लांब सूची घ्या आणि तिची गती वाढवा. प्रत्येक पंक्तीला .row class द्या.\n.row ला content-visibility: auto आणि contain-intrinsic-size: auto 96px जोडा — प्रत्येक पंक्ती साधारण 96px उंच.\nस्क्रीनवर नसलेल्या पंक्ती रेंडर होत नाहीत; सरकवून आणल्यावर मात्र लगेच दिसतात.\nही जागा स्थिर ठेवल्यामुळे scrollbar हालचाल सुरळीत राहते आणि लोड वेगवान होतो.\nसराव संपला की हा नमुना प्रत्येक मोठ्या पेजमध्ये आपोआप वापरता येतो.", code: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["content-visibility काय?", "intrinsic कुठे?", "auto vs hidden?", "fallback कसा?"],
    quiz: [
      { question: "content-visibility?", options: ["गती सुधार", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: "intrinsic-size?", options: ["आकार जागा", "रेखा", "थर"], correct: 0 },
      { question: "auto म्हणजे?", options: ["नजीक रेंडर", "कधी नाही", "नेहमी"], correct: 0 },
      { question: "hidden कधी?", options: ["लपवणे", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "लांब सूची गती करा.",
      starterCode: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`,
      expectedOutput: "Long list renders faster on Marathi page",
    },
    interviewQuestions: ["auto फायदा?", "intrinsic चूक?"],
    related: ["css-contain-property", "css-will-change", "css-perf-hints"],
    prev: "css-scroll-margin",
    next: "css-mix-blend-mode",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-mix-blend-mode",
    categoryId: "web",
    title: "Mix Blend",
    marathiTitle: "mix-blend-mode — रंग मिश्रण",
    level: "advanced",
    minutes: 40,
    summary: "mix-blend-mode सह थर रंग जोडणी.",
    sections: [
      { title: "1. blend कल्पना", content: "दोन थर (layers) एकमेकांवर असल्यावर ब्राउझर वरचा थर अगदी सरळ दाखवतो. पण कधी कधी हवं असतं की वरच्या थराचा रंग खालच्या थराशी मिसळावा.\nmix-blend-mode हा गुणधर्म हेच करतो — तो घटकाच्या मागच्या प्रत्येक थराबरोबर रंग मिश्रणाचा नियम ठरवतो.\nउदा. .hero h1 ला mix-blend-mode: multiply दिलं की मथळ्याचा रंग पार्श्वभूमीशी गुणिला जातो — दोन्ही मिळून गडद, समृद्ध रंग तयार होतो.\nपार्श्वभूमीवर छाया, नमुने किंवा gradient असले तरी मथळा त्यांच्याशी नैसर्गिकरित्या जुळतो.\nहा एकच गुणधर्म रचनेला अचूकतेने जिवंत करतो; यालाच blend कल्पना म्हणतात.", code: `.hero h1 {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "2. color-dodge", content: "color-dodge ही blend ची एक शैली — वरच्या थराचा रंग खालच्या थरावर प्रकाश टाकल्यासारखा वाढतो; रंग अधिक तेजस्वी, चकचकीत दिसतो.\nउदा. .stamp फोटो किंवा मजकुरावर color-dodge लावलं की ते जणू हलक्या प्रकाशात चमकते.\nअंधाऱ्या पार्श्वभूमीवर असलेल्या आकृतींसाठी color-dodge एक खास ठसा उमटवतं — पांढरे भाग राहतात, बारीक तपशील उजळतो.\nउपयोग: वॉटरमार्कचा झगमगाट, ब्रँडची खूण, बॅजचा प्रकाश.\nपण लक्ष — खूप तेज रंग डोळ्यांना त्रासदायक ठरतो; वापर संतुलित ठेवा आणि प्रत्येक पार्श्वभूमीवर तपासा.", code: `.stamp {
  mix-blend-mode: color-dodge;
}`, codeLanguage: "css" },
      { title: "3. screen थर", content: "screen ही blend शैली multiply च्या उलट काम करते — ती रंग उजळते. काळ्या पार्श्वभूमीवर screen म्हणजे काळा अपरिवर्तित राहतो; पण पांढरा भाग पुढे येतो.\nम्हणूनच अंधाऱ्या पार्श्वभूमीवर प्रकाशाचा ठसा (glow) तयार करण्यासाठी screen सर्वोत्तम.\nउदा. .glow ला mix-blend-mode: screen दिल्यास खालच्या अंधाऱ्या भागासोबत तो विलीन होऊन हलका glow दिसतो.\nस्क्रीन प्रोजेक्टर, चित्रपटाचे झगमगाट — अशा ठिकाणी ही blend नैसर्गिक वाटते.\nआणि छान गोष्ट — screen रचना बदलत नाही, फक्त रंगसंगती सुधारते; त्यामुळे प्रयोग करणं सोपं जातं.", code: `.glow {
  mix-blend-mode: screen;
}`, codeLanguage: "css" },
      { title: "4. isolation थर", content: "blend चा प्रभाव केवळ एका घटकापुरता असतो असं नाही — तो त्याच्या मागच्या सर्व थरांशी मिसळतो. कधी कधी एखादा गट वेगळा ठेवायचा असतो; बाहेरच्या थरांशी मिश्रण नको.\nisolation: isolate हीच ती सीमा — ती गटाला नवीन blending context बनवते.\nउदा. .group ला isolation: isolate दिलं आणि आतल्या .child ला mix-blend-mode: multiply ठेवलं, तर child फक्त .group च्या आतल्या थरांशी मिसळतो.\nबाहेरची पार्श्वभूमी कशीही असेल — blend त्यावर परिणाम करत नाही.\nहे वापरल्यावर मिश्रणाचा प्रभाव अचूकपणे नियंत्रित होतो — इथून पुढे वेगळा गट, अशीच घोषणा.", code: `.group {
  isolation: isolate;
}
.child {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "5. रंग नियम", content: "blend शैली लावल्यावर रंगांचे रूप बदलते — म्हणून रंगनिवड आधी विचारपूर्वक करा. difference सारख्या शैलीत वर-खालच्या रंगांची उलट संगणना होते.\nउदा. .deep ला mix-blend-mode: difference दिल्यास समान रंगांचे भाग काळे आणि भिन्न रंग तेजस्वी दिसतात.\nहे उपयुक्त असतं खरं, पण बारीक माहिती कधी कधी लपते — त्यामुळे contrast काळजीपूर्वक तपासा.\nमजकूर वाचनीय असणं सर्वांत महत्त्वाचं; मजकूर ठोस पार्श्वभूमीवर असल्यासच तो स्पष्ट राहतो.\nप्रत्येक blend प्रयोगानंतर वाचनीयता तपासणं ही सवय ठेवा — डिझाइन सुंदर आणि वापरकर्ता आनंदी.", code: `.deep {
  mix-blend-mode: difference;
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "mix-blend-mode आधुनिक ब्राउझरमध्ये चांगलाच वापरता येतो, पण जुन्या ब्राउझरमध्ये तो ओळखला जाणार नाही.\nजुने ब्राउझर नियम शांतपणे टाकून देतील — मग मथळा blend शिवाय खालच्या थरावर लिहिला जातो.\nयावर उपाय @supports — ब्राउझरला mix-blend-mode समजत असल्यासच नियम लागू होतो.\nउदा. .h ला multiply आधी साधा रंग द्या; @supports मध्ये blend जोडा.\nअशी रचना केल्यावर सगळ्या ब्राउझरवर मजकूर वाचता राहतो — आधार सुरक्षित आणि प्रयोग मुक्तपणे होतो.", code: `@supports (mix-blend-mode: multiply) {
  .h {
    mix-blend-mode: multiply;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक मथळा तयार करा जो पार्श्वभूमीशी नैसर्गिक मिश्रण करतो. .title ला mix-blend-mode: multiply द्या.\nमथळ्यावर तेजस्वी पिवळसर किंवा निळसर पार्श्वभूमी ठेवा — multiply मधला रंग गडद होऊन स्पष्ट दिसेल.\nहे वापरल्यावर मथळा पार्श्वभूमीवर चिकटून बसलेला वाटतो — जणू छाया रंगवल्यासारखं.\nमागील भाग बदलला तरी blend आपोआप नवीन रंग निर्माण करतो — त्यामुळे प्रत्येक विभागात तो वेगळा, पण नैसर्गिक दिसतो.\nहा सराव झाला की blend ची ताकद मनात स्पष्ट राहते; background-blend मध्ये तीच तत्त्वे पुढे येतात.", code: `.title {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["mix-blend काय?", "screen कुठे?", "isolation का?", "color-dodge कधी?"],
    quiz: [
      { question: "mix-blend-mode?", options: ["रंग मिश्रण", "ध्वनी", "क्रम"], correct: 0 },
      { question: "screen कुठे?", options: ["गडद मागे", "पांढरे", "नवीन"], correct: 0 },
      { question: "isolation?", options: ["गट वेगळा", "रंग जोड", "थर"], correct: 0 },
      { question: "color-dodge?", options: ["तेज रंग", "मऊ", "काळा"], correct: 0 },
    ],
    challenge: {
      prompt: "मथळा blend करा.",
      starterCode: `.title {
  mix-blend-mode: multiply;
}`,
      expectedOutput: "Marathi heading blends into background",
    },
    interviewQuestions: ["blend फायदा?", "isolation केव्हा?"],
    related: ["css-background-blend", "css-isolation-z", "css-stacking-context"],
    prev: "css-content-visibility",
    next: "css-background-blend",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-background-blend",
    categoryId: "web",
    title: "Background Blend",
    marathiTitle: "background-blend — पार्श्वभूमी मिश्रण",
    level: "advanced",
    minutes: 40,
    summary: "background-blend-mode सह थर रंग.",
    sections: [
      { title: "1. blend थर", content: "background-blend-mode एका घटकाच्या आतल्या पार्श्वभूमीच्या थरांना मिश्रण करतो. हे mix-blend-mode पेक्षा वेगळे — येथे सर्व थर एकाच घटकाचे.\nउदा. .card मध्ये background-color प्रथम आणि background-image ग्रॅडियेंट. background-blend-mode: multiply दिल्यास दोन्ही थर गुणिले जातात.\nपरिणाम — रंगदार ग्रॅडियेंटवर खोल रंगछटा; एका झटक्यात समृद्ध पार्श्वभूमी.\nआधी color, नंतर image या क्रमाने थर रचल्यावर blend संगणना नेमकी होते.\nअनेक चित्रांचे थरही जमवून blend करता येतात; हीच background blend कल्पना — आतील संपत्ती.", code: `.card {
  background-color: #7c3aed;
  background-image: linear-gradient(#0d9488, #2563eb);
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "2. gradient जोड", content: "एका ग्रॅडियेंट पार्श्वभूमीवर एक रंग अधिक खोल वाटावा म्हणून background-blend-mode इथेच मदत करतो.\nउदा. .banner मध्ये background-image: linear-gradient(135deg, #0d9488, #2563eb) — हिरवट-निळा उतार.\nत्या खाली background-color: #7c3aed (जांभळा) आणि blend multiply — जांभळा आणि ग्रॅडियेंट एकत्र येऊन एक राजस रंग संपदा.\nक्रम लक्षात ठेवा — image वर, color खाली; blend या दोन्हीला मिसळतो.\nएकाच गुणधर्माने कितीही थर असले तरी रचना व्यवस्थित राहते — दृश्य नेमके आणि तयारी सोपी.", code: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-color: #7c3aed;
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "3. screen थर", content: "ग्रॅडियेंट्सवर screen blend वापरल्यास रंग उजळतात — पांढऱ्याकडे झुकलेले रंग अधिक पुढे येतात.\nउदा. .hero मध्ये linear-gradient(#0d9488, #0f172a) — हिरवट ते गडद निळा उतार.\nscreen ने हा अंधाऱ्या टोकाला हलका वाढवला जातो — जणू काळ्या-निळ्या रंगावर एक मऊ प्रकाशझोत पडला.\nयामुळे मजकूर असलेला विभागही उजळ दिसतो आणि पार्श्वभूमी एकसंध वाटते.\nअंधाऱ्या थीमच्या hero मध्ये screen खास ठसा उमटवतो — तेज, गहिराई आणि साधेपणा एकत्र.", code: `.hero {
  background-image: linear-gradient(#0d9488, #0f172a);
  background-blend-mode: screen;
}`, codeLanguage: "css" },
      { title: "4. pattern नियम", content: "पुनरावर्ती रेषांचा नमुना (pattern) background चा भाग असू शकतो — उदा. repeating-linear-gradient द्वारे 45 अंशाचे हिरवट पट्टे.\nपण असा नमुना थेट असेल तर रचना कठीण वाटू शकते. इथेच blend उपयोगी येतो.\nउदा. .tile मध्ये image नमुना आणि खाली background-color: #ccfbf1 (हलका पुदीना); multiply एकत्र आल्याने नमुना हलका आणि नैसर्गिक दिसतो.\nरेषांचे कडक कोपरे मऊपणे आत मिसळतात — डिझाइन सुबक आणि व्यावसायिक दिसते.\nअसे pattern blend अनेक ठिकाणी वापरता येतात — कार्ड, हेडर, इन्व्हॉइस व्यू; रचना हलकी राहते आणि प्रभाव ठसठशीत.", code: `.tile {
  background-image: repeating-linear-gradient(45deg, #0d9488 0 8px, transparent 8px 16px);
  background-color: #ccfbf1;
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "5. color वेगळा", content: "जेव्हा रंगांचा एक मोठा तोल हवा असतो — उदा. feed मधल्या कार्ड्सची पार्श्वभूमी — तेव्हा color आणि blend नेमके नियंत्रित करतात.\nउदा. .feed मध्ये linear-gradient(90deg, #0d9488, #2563eb) आणि blend overlay — overlay ही अर्धी multiply, अर्धी screen.\nपरिणाम — रंग गडद आणि उजळ यांच्यामध्ये संतुलित; मजकूर वरच्या थरात स्पष्ट वाचला जातो.\nइथे gradient ही image थर आहे; color वेगळा असतो; blend दोघांना जुळवतो.\nअशा प्रकारे color वेगळा ठेवला की रंग संतुलन आणि वाचन दोन्ही सुरक्षित राहतात.", code: `.feed {
  background-image: linear-gradient(90deg, #0d9488, #2563eb);
  background-blend-mode: overlay;
}`, codeLanguage: "css" },
      { title: "6. prose थर", content: "मजकूर वाचताना blend चा वापर काळजीने करावा — मजकुराची स्पष्टता ही ध्येय असते. येथे darken ही blend सोपी ठरते.\nउदा. .text मध्ये linear-gradient(transparent, #0f172a) — वर पारदर्शक, खाली गडद. darken ने खालचा गडद रंगच टिकून राहतो.\nयामुळे मजकुराखाली एक मऊ ढग असल्यासारखं दिसतं — पण मजकूर स्वतः कधीही लपत नाही.\nscreen किंवा color-dodge सारख्या तेज शैलींपेक्षा darken वाचनाला अधिक आरामदायी.\nप्रत्येक blend वापरल्यानंतर मजकूर खरोखर वाचता राहतो का ते तपासा — ही सवय नेमकी असावी.", code: `.text {
  background-image: linear-gradient(transparent, #0f172a);
  background-blend-mode: darken;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक बॅनर तयार करा ज्याची पार्श्वभूमी blend ने समृद्ध होते. .banner ला एक gradient image द्या.\nउदा. linear-gradient(135deg, #0d9488, #2563eb) — कोनीय उतार; मग background-blend-mode: multiply जोडा.\ngradient स्वतःहून एक रंगाचा उतार देतो; multiply ला मागे एक color असेल तर तो अधिक गडद होतो.\nप्रत्येक रंगसज्ज ठिकाणी हा एकच गुणधर्म वापरून रचना बदलल्यावर रंगही बदलतात.\nसराव संपल्यावर रंगसंगती तयार करण्याची सवय अचूक होते.", code: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-blend-mode: multiply;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["background-blend काय?", "layer किती?", "multiply कुठे?", "screen कधी?"],
    quiz: [
      { question: "background-blend?", options: ["थर रंग", "ध्वनी", "रेखा"], correct: 0 },
      { question: "layer कुठे?", options: ["image gradient", "table", "flex"], correct: 0 },
      { question: "multiply?", options: ["गडद मिश्रण", "उजळ", "नवीन"], correct: 0 },
      { question: "screen?", options: ["चमक", "अंधार", "रेखा"], correct: 0 },
    ],
    challenge: {
      prompt: "बॅनर blend करा.",
      starterCode: `.banner {
  background-image: linear-gradient(135deg, #0d9488, #2563eb);
  background-blend-mode: multiply;
}`,
      expectedOutput: "Marathi banner gradients blended",
    },
    interviewQuestions: ["layer क्रम?", "contrast नियम?"],
    related: ["css-mix-blend-mode", "css-gradient-deep", "css-conic-radial"],
    prev: "css-mix-blend-mode",
    next: "css-font-variation",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-font-variation",
    categoryId: "web",
    title: "Font Variation",
    marathiTitle: "font-variation — व्हेरिएबल फॉन्ट",
    level: "advanced",
    minutes: 40,
    summary: "font-variation-settings अक्ष नियंत्रण.",
    sections: [
      { title: "1. variation कल्पना", content: "व्हेरिएबल फॉन्ट एकाच फाइलमध्ये अनेक वजन-रुंदीचे पर्याय ठेवतो — त्यामुळे प्रत्येक आकारासाठी वेगळी फाइल आणायची गरज नाही.\nfont-variation-settings या गुणधर्माने या अक्षांना (axis) नेमकी मूल्ये देतात.\nउदा. .title ला font-variation-settings: 'wght' 700 म्हणजे वजन (weight) 700 — मथळा ठळक.\nहे केवळ फॉन्ट भारच नव्हे, तर रुंदी, उंची, तिरकेपणा यासारखे अनेक आकार नियंत्रित करतं.\nएक फाइल, असंख्य रूप — यामुळे पेज हलके राहते आणि टायपोग्राफी लवचिक होते.", code: `.title {
  font-variation-settings: "wght" 700;
}`, codeLanguage: "css" },
      { title: "2. weight थर", content: "व्हेरिएबल फॉन्टमधील सर्वात सोपा अक्ष म्हणजे wght — मजकूराचा जाडपणा.\nउदा. .light ला 'wght' 300 दिलं की पातळ, हलकी अक्षरे मिळतात.\n100 ची पातळ ते 900 ची सर्वांत जड — प्रत्येक संख्येला अक्षरांचा स्वतःचा ठसा.\nहे वजन बदलताना फॉन्ट खऱ्या अक्षरग्रंथातून निवडतो; कृत्रिम जाडपणाची (pseudo-bold) गरज पडत नाही.\nएका फॉन्ट फाइलमधून हलकं आणि ठळक दोन्ही — वेगळी फाइल न लिहिता टायपोग्राफी समृद्ध होते.", code: `.light {
  font-variation-settings: "wght" 300;
}`, codeLanguage: "css" },
      { title: "3. width नियम", content: "wdth हा व्हेरिएबल फॉन्टचा रुंदी अक्ष — अक्षरे किती संकुचित किंवा विस्तारित दिसतील हे तो ठरवतो.\nउदा. .condensed ला 'wdth' 75 दिलं की अक्षरे अरुंद — एका ओळीत जास्त मजकूर.\nहे उपयुक्त असतं — ठोकळ शीर्षके, लेबल, उभ्या मेनूमध्ये जागेची बचत.\nरुंदी अधिक म्हणजे दिलदार अंतर; संकुचित म्हणजे घट्ट चौकट — नियंत्रण पूर्ण.\nwdth आणि wght एकत्र वापरल्यास लेआउटच्या मागणीप्रमाणे अक्षरे स्वतःला जुळवतात; नियम स्पष्ट आणि अचूक.", code: `.condensed {
  font-variation-settings: "wdth" 75;
}`, codeLanguage: "css" },
      { title: "4. optical थर", content: "optical sizing म्हणजे अक्षरांचा आकार कमी-मोठा झाल्यावर त्यांची रचना आपोआप सुधारण्याची क्षमता.\nमोठ्या शीर्षकात अक्षरे घट्ट, छोट्या मजकुरात हवी-हवीशी — हेच optical adjustment.\nfont-optical-sizing: auto दिल्यावर ब्राउझर फॉन्टच्या योग्य variant ला आपोआप निवडतो.\nउदा. body वर auto ठेवलं की प्रत्येक size ला वाचण्यास आरामदायी रूप मिळतं.\nव्हेरिएबल फॉन्टचा हा हरवणारा फायदा आहे — एका ओळीत वाचन सुधारणा, अतिरिक्त मेहनत शून्य.", code: `body {
  font-optical-sizing: auto;
}`, codeLanguage: "css" },
      { title: "5. संयोजन नियम", content: "व्हेरिएबल फॉन्टमध्ये अनेक अक्ष एकत्र देता येतात — comma ने जोडून. उदा. .btn ला 'wght' 600, 'wdth' 100.\nयाचा अर्थ — साधारण मजबूत वजन आणि पूर्ण रुंदी.\nhover वर वजन 700 करून मजकुरावर जीव आणता येतो — transition सोबत ही हालचाल सजीव दिसते.\nसंकुचित किंवा रुंद अक्षांमध्येही असा संयोजन केल्यास बटणाचे प्रमाण जागीच राहते.\nअनेक अक्ष एकत्र आल्यावर टायपोग्राफी गतिशील होते — हीच combine कल्पना.", code: `.btn {
  font-variation-settings: "wght" 600, "wdth" 100;
}
.btn:hover {
  font-variation-settings: "wght" 700, "wdth" 100;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "व्हेरिएबल फॉन्ट किंवा त्यांचे अक्ष सर्वत्र उपलब्ध नसतात; पण फॉन्ट स्वतः variable नसल्यास संयम ठेवा.\n@supports (font-variation-settings: 'wght' 500) वापरून फक्त समर्थन असल्याचे तपासा.\nमगच .title साठी 'wght' 700 चा नियम लिहा; नाहीतर static फॉन्टचा आधार पुरेसा.\nstatic fallback म्हणजे font-weight: bold — सर्वत्र चालणारं सुरक्षित मूल्य.\nही दुहेरी रचना वापरल्यास जुन्या आणि नव्या ब्राउझरवर मजकूर तसाच सुंदर दिसतो; आधार मजबूत.", code: `@supports (font-variation-settings: "wght" 500) {
  .title {
    font-variation-settings: "wght" 700;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक मथळा व्हेरिएबल वजनासह तयार करा. .display ला font-variation-settings: 'wght' 800 द्या.\nहे 800 चे जडपणा मथळ्याला ठळक, आकर्षक रूप देते.\nआवश्यक असल्यास @supports च्या आत ठेवून जुन्या ब्राउझरसाठी static weight आधार द्या.\nएकाच फॉन्टमध्ये मथळ्याचे वजन बदलून पेज कसा हालतो हे सहज पाहता येतं.\nसराव झाल्यावर हा एकच नियम पेजच्या रूपाला जीव देऊ शकतो.", code: `.display {
  font-variation-settings: "wght" 800;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["variation काय?", "wght कुठे?", "wdth कधी?", "optical का?"],
    quiz: [
      { question: "font-variation?", options: ["अक्ष नियम", "रेखा", "ध्वनी"], correct: 0 },
      { question: "wght म्हणजे?", options: ["वजन", "रुंदी", "थर"], correct: 0 },
      { question: "wdth म्हणजे?", options: ["रुंदी", "उंची", "रंग"], correct: 0 },
      { question: "optical?", options: ["वाचन आराम", "रंग", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "मथळा वजन द्या.",
      starterCode: `.display {
  font-variation-settings: "wght" 800;
}`,
      expectedOutput: "Marathi display heading uses variable weight",
    },
    interviewQuestions: ["variable font फायदा?", "fallback कसा?"],
    related: ["css-font-fallback", "css-typography", "css-custom-props"],
    prev: "css-background-blend",
    next: "css-text-spacing",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-text-spacing",
    categoryId: "web",
    title: "Text Spacing",
    marathiTitle: "text-spacing — अंतर नियम",
    level: "advanced",
    minutes: 40,
    summary: "letter word spacing अंतर व्यवस्था.",
    sections: [
      { title: "1. letter थर", content: "letter-spacing म्हणजे प्रत्येक अक्षरामधील अंतर — ते वाढवले की मजकूर हवादार, कमी केले की घट्ट.\nउदा. .label ला letter-spacing: 0.08em म्हणजे प्रत्येक अक्षरामागे 8% जागा.\nलेबल्स, बटणे, मेनू शीर्षके — दोन-तीन शब्दांमध्ये हे अंतर सुंदर ठसा देतं.\nem एकक अक्षरघराच्या आकारावर आधारित असल्याने प्रत्येक आकारात प्रमाण कायम.\nपण सावध — संपूर्ण परिच्छेदावर खूप letter-spacing केले की वाचन कठीण होते; लहान लेबलांपुरते ठेवा.", code: `.label {
  letter-spacing: 0.08em;
}`, codeLanguage: "css" },
      { title: "2. word थर", content: "word-spacing म्हणजे दोन शब्दांमधील अंतर. letter-spacing अक्षरांना हलवतं; word-spacing शब्दांना.\nउदा. .para ला word-spacing: 0.1em म्हणजे शब्दांमध्ये 10% जागा वाढ.\nमोठ्या परिच्छेदांमध्ये शब्दांना हवा मिळाल्यास ओळी वाचणे सोपं होतं.\nपण खूप अंतर केले तर शब्द विभक्त होतात आणि अर्थ गोंधळतो — म्हणून संतुलन आवश्यक.\nठरलेल्या मूल्यांनी सुरुवात करा आणि वाचून निर्णय घ्या — हीच सवय सुबकता आणते.", code: `.para {
  word-spacing: 0.1em;
}`, codeLanguage: "css" },
      { title: "3. indent नियम", content: "text-indent म्हणजे परिच्छेदाच्या पहिल्या ओळीची सुरुवातीची जागा — मराठी-हिंदी पुस्तकांत हीच सवय राहिली आहे.\nउदा. p ला text-indent: 2em म्हणजे पहिली ओळ 2em अंतरावरून सुरू होते.\nअनेक परिच्छेदांच्या लेखात हे वाचकाला ओळीत नेलेलं ठेवते.\nnegative (ऋण) मूल्य दिल्यास पहिली ओळ मागे ढकलली जाते — hanging indent साठी.\nपरिच्छेद-आधारित लेखांमध्ये हा नियम आवडता; याद्यांमध्ये मात्र तो टाळा.", code: `p {
  text-indent: 2em;
}`, codeLanguage: "css" },
      { title: "4. hyphens थर", content: "मराठीत शब्द साधारणपणे लहान असतात, पण तांत्रिक किंवा मिश्र शब्द लांब असू शकतात. अशा शब्दांमुळे ओळीच्या शेवटी मोकळी जागा निर्माण होते.\nhyphens: auto दिल्यास ब्राउझर लांब शब्द योग्य जागी रेषेने (hyphen) विभाजित करतो.\nउदा. .text वर हा नियम ठेवल्यास ओळी संतुलित राहतात व जागा कमी वाया जाते.\nपुस्तकासारखा मजकूर वाचकाला मिळतो — दृश्य सुबक राहते.\nहे वापरताना भाषेची जोडणी (lang) नीट ठेवा — ब्राउझरला विभाजन नियम त्यानुसार लागतात.", code: `.text {
  hyphens: auto;
}`, codeLanguage: "css" },
      { title: "5. justify नियम", content: "text-align: justify म्हणजे मजकूर दोन्ही बाजूंनी सरळ काठ मिळतो — पुस्तकांसारखं. पण तेवढं ठेवलं की शब्दांमधील अंतर विषम होते.\ntext-justify: inter-word वर ब्राउझर अंतर शब्दांमध्ये समान वाटून घेतो.\nउदा. .body मध्ये दोन्ही ठेवल्यास परिच्छेद सुबक व नैसर्गिक दिसतो.\nकड सरळ करणे आकर्षक, पण लांब परिच्छेदांमध्ये अंतर विस्कळीत होऊ नये याची काळजी.\nसंतुलित ठिकाणीच justify वापरा; रुंद पट्ट्यांमध्ये तो टाळा.", code: `.body {
  text-align: justify;
  text-justify: inter-word;
}`, codeLanguage: "css" },
      { title: "6. संयोजन तोल", content: "मजकुराचा आराम एका गुणधर्मावर अवलंबून नसतो — एकत्र योजना अधिक चांगली.\nउदा. .article मध्ये तीन नियम — line-height: 1.7 उभे अंतर, letter-spacing: 0.01em बारीक अक्षर अंतर, word-spacing: 0.05em शब्दांचा हवा.\nहे तिन्ही एकत्र येऊन वाचनीयता निर्माण करतात — ओळी स्थिर, शब्द स्पष्ट.\nकोणतेही एक अत्यंत जास्त वा कमी ठेवलं तर दृश्य ढळतं; म्हणून प्रमाणांत खेळा.\nयातच धड्याची शिकवण — अंतरांचा तोल राखा, म्हणजे मजकूर वाचायला आनंद देतो.", code: `.article {
  line-height: 1.7;
  letter-spacing: 0.01em;
  word-spacing: 0.05em;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक लांब परिच्छेद घ्या आणि वाचनीयतेसाठी अंतरांची योग्य जोडणी करा. .prose वर line-height: 1.7 द्या.\nतसाच letter-spacing: 0.01em द्या — अक्षरांमधील बारीक अंतर.\nआवश्यक असल्यास word-spacing आणि परिच्छेदाला text-indent देखील जोडता येते.\nबदल करून वाचा — हवेपेक्षा जास्त-कमी अंतर शोधून संतुलन साधा.\nअशा प्रकारे मजकूर पुस्तकासारखा वाचता येतो; शिकलेलं तत्त्व इतरत्रही लागू होतं.", code: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["letter-spacing काय?", "word-spacing कुठे?", "indent का?", "hyphens कधी?"],
    quiz: [
      { question: "letter-spacing?", options: ["अक्षर अंतर", "रंग", "थर"], correct: 0 },
      { question: "word-spacing?", options: ["शब्द अंतर", "ओळ", "क्रम"], correct: 0 },
      { question: "text-indent?", options: ["सुरुवात जागा", "शेवट", "मध्य"], correct: 0 },
      { question: "hyphens?", options: ["रेषा जुळणे", "रंग", "ध्वनी"], correct: 0 },
    ],
    challenge: {
      prompt: "मजकूर आराम करा.",
      starterCode: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`,
      expectedOutput: "Marathi prose spaced for reading",
    },
    interviewQuestions: ["जागा सुबक कशी?", "hyphens कधी?"],
    related: ["css-typography", "css-text-wrap", "css-writing-modes"],
    prev: "css-font-variation",
    next: "css-decoration-style",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-decoration-style",
    categoryId: "web",
    title: "Decoration Style",
    marathiTitle: "decoration-style — रेषा शैली",
    level: "advanced",
    minutes: 40,
    summary: "text-decoration-style wavy double नियम.",
    sections: [
      { title: "1. style कल्पना", content: "text-decoration हा मजकुरावर रेघा काढतो — पण आधुनिक CSS मध्ये त्याला शैली, जाडी आणि रंग सर्व काही नियंत्रित करता येतं.\ntext-decoration-style ने रेघेची शैली निवडता येते — solid, double, dotted, dashed, wavy.\nउदा. .note ला text-decoration-style: wavy दिल्यास मजकुरावर लहरी रेघ येते.\nवाचकांचे लक्ष वेधण्यासाठी या शैली उपयुक्त — warning, note, टीप.\nहा गुणधर्म text-decoration line (underline, overline, line-through) सोबत जोडलेला असतो.", code: `.note {
  text-decoration-style: wavy;
}`, codeLanguage: "css" },
      { title: "2. दुहेरी रेषा", content: "double ही रेघा दोन समांतर पट्ट्यांमध्ये दिसते — जणू मजकूर अधिक ठसठशीत, दुहेरी खूण.\nउदा. .alert ला text-decoration-style: double आणि text-decoration-thickness: 3px — जाडसर दुहेरी रेषा.\nमजकुरासोबतच text-decoration-color ने रंगही निवडता येतो; रेघा संपूर्ण नियंत्रणात.\nअशी रेघा चेतावणी अथवा खास संदेशांमध्ये उपयुक्त — दृश्य ठसा मजबूत.\nजाडी वाढवल्यास रेघा ठळक; कमी केल्यास नाजूक — मोजमाप हाताशी ठेवा.", code: `.alert {
  text-decoration-style: double;
  text-decoration-thickness: 3px;
}`, codeLanguage: "css" },
      { title: "3. wavy थर", content: "wavy म्हणजे लहरी-सदृश रेघा — मजकुराखाली लाटेच्या आकाराची खूण. ही दृश्य सावधान ची भाषा बोलते.\nउदा. .warn ला text-decoration: underline wavy #dc2626 2px — एकाच ओळीत रेघा, लहरी, लाल रंग आणि 2px जाडी.\nफॉर्ममध्ये चुकलेले (invalid) field अशी खूण करायला हीच योग्य जागा.\nवाचक नजर टाकताच समजतो — इथे लक्ष द्या.\nसंक्षिप्त रूप सर्व अर्थ एका ठिकाणी देतं — रचना स्वच्छ आणि वाचण्यास सोपी.", code: `.warn {
  text-decoration: underline wavy #dc2626 2px;
}`, codeLanguage: "css" },
      { title: "4. skip-ink", content: "अधोरेखित मजकुरात रेघ अक्षरांना चिकटते — विशेषतः मराठीच्या वरच्या-खालच्या आढ्या रेषांमध्ये ती खुजी दिसते.\ntext-decoration-skip-ink: auto मुळे ब्राउझर रेघ अक्षरांच्या खुणा टाळतो — मजकूर पूर्ण स्पष्ट दिसतो.\nउदा. .link वर हा नियम ठेवल्यास लिंकची रेघ आणि अक्षरे एकमेकांना अडवत नाहीत.\nवाचक अक्षरे सहज ओळखतो; रेघ फक्त खाली सुरळीत चालताना दिसते.\nही लहान सुधारणा मोठा फरक करते — वाचन आरामदायी आणि रचना नेमकी.", code: `.link {
  text-decoration-skip-ink: auto;
}`, codeLanguage: "css" },
      { title: "5. dotted नियम", content: "dotted म्हणजे ठिपक्यांची रेघ — मजकुराची खूण सूक्ष्म पण स्पष्ट.\nउदा. .link ला text-decoration: underline dotted दिल्यास लिंक खाली ठिपके दिसतात.\nhover वर घट्ट रेघ किंवा रंग बदल — क्रिया होणार याचा संकेत वाचकाला मिळतो.\nप्रत्येक बदलामधून interaction स्पष्ट होतो — कोणता दुवा सजीव आहे ते कळतं.\nसाध्या लिंकमध्ये सौम्य संकेत हवा असेल तर dotted ही योग्य निवड आहे.", code: `.link {
  text-decoration: underline dotted;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "text-decoration-style आणि text-decoration-thickness आधुनिक गुणधर्म आहेत; जुन्या ब्राउझरमध्ये ते ओळखले जात नाहीत — रेघ साधी solid दिसते.\nयावर उपाय — @supports block. उदा. text-decoration-thickness: 2px फक्त समर्थन असल्यास लागू होईल.\nजुन्या ब्राउझरमध्ये साधी solid रेघाही ध्येय साधते — मजकूर वेगळा दिसतो.\nनवीन शैलींचा प्रयोग करताना आधार तपासणे हीच सवय.\nअशी करून जुन्या आणि नव्या ब्राउझरवर रेघ नेहमी सुंदर राहते; हरकत नाही.", code: `@supports (text-decoration-thickness: 2px) {
  .link {
    text-decoration-thickness: 2px;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी फॉर्ममधील अनिवार्य field ला warning ची खूण द्या. .required वर text-decoration: underline wavy #dc2626 2px लिहा.\nयामुळे field चा मजकूर लहरी लाल रेघेखाली दिसतो — सोडू नका एवढा संकेत.\nहे लागू करताना label चा मजकूर स्पष्ट ठेवा; अक्षरे आणि रेघ एकमेकांना न स्पर्शतात हे निरखून घ्या (skip-ink).\nuser-valid किंवा अनिवार्य असल्याची जाणीव वाचकाला आधीच मिळते.\nअशी छोटी खूण पेजच्या वापरात मोठी सुधारणा करते — अनुभव अधिक स्पष्ट होतो.", code: `.required {
  text-decoration: underline wavy #dc2626 2px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["decoration-style काय?", "wavy कुठे?", "double कधी?", "skip-ink का?"],
    quiz: [
      { question: "text-decoration-style?", options: ["रेषा शैली", "रंग थर", "ध्वनी"], correct: 0 },
      { question: "wavy कुठे?", options: ["warning", "मथळा", "टीपा"], correct: 0 },
      { question: "double?", options: ["दुहेरी रेषा", "एक रेषा", "थर"], correct: 0 },
      { question: "skip-ink?", options: ["अक्षरे स्पष्ट", "रंग", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "warning रेषा द्या.",
      starterCode: `.required {
  text-decoration: underline wavy #dc2626 2px;
}`,
      expectedOutput: "Marathi required fields marked wavy",
    },
    interviewQuestions: ["wavy केव्हा?", "skip-ink फायदा?"],
    related: ["css-text-decoration-deep", "css-focus-visible", "css-typography"],
    prev: "css-text-spacing",
    next: "css-user-validity",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-user-validity",
    categoryId: "web",
    title: "User Validity",
    marathiTitle: "user-validity — फॉर्म सत्यता",
    level: "advanced",
    minutes: 40,
    summary: ":user-valid :user-invalid फॉर्म feedback.",
    sections: [
      { title: "1. invalid थर", content: "फॉर्म भरताना अयोग्य मूल्य लिहिलं जातं — ते लगेच दाखवणं हा चांगल्या वेब अनुभवाचा आधार.\n:user-invalid ही pseudo-class त्या घटकांना शैली देते जेव्हा वापरकर्त्याने खरोखर अयोग्य व्हॅल्यू टाकली असेल.\nउदा. input:user-invalid चा border-color लाल — चुकलं हे वाचकास झटक्यात कळते.\nफरक :invalid पेक्षा लक्षणीय — :invalid हे पेज आधीच लावले जाते; :user-invalid मात्र वापरकर्त्याच्या खऱ्या हालचालींनंतर.\nबरोबर वेळी दिसणारी चूक वापरकर्त्याला त्रास देत नाही व रचनाही स्पष्ट राहते.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
      { title: "2. valid नियम", content: "फॉर्ममधील योग्य input ला हिरवा border दिला की वापरकर्त्याला पटकन हवे ते झालं समजतं.\n:user-valid ही pseudo-class तेव्हाच लागू होते जेव्हा मूल्य browser नियमांप्रमाणे बरोबर असेल.\nउदा. input:user-valid चा border-color आणि हिरवा रंग.\nपरिणाम — संपूर्ण फॉर्म कधी पूर्ण झाला हे नजरेनेच लक्षात येतं.\nहिरवे-लाल रंग दोन्ही परिस्थितीत स्पष्ट असतात; रंगांपलीकडे आणखी सूचक चिन्हेही जोडता येतात.", code: `input:user-valid {
  border-color: #16a34a;
}`, codeLanguage: "css" },
      { title: "3. error संदेश", content: "फक्त रंग बदललास पुरे नाही — स्क्रीन रीडर वापरणाऱ्यांना रंग दिसत नाही. म्हणून error संदेशाची मजकूर जोडणी आवश्यक.\nउदा. input[aria-invalid='true'] ला outline: 2px solid #dc2626 — चुकीच्या field सभोवती स्पष्ट किनार.\nआणि label खाली छोटा मजकूर — हा भाग आवश्यक किंवा योग्य व्हॅल्यू द्या असे सूचनपर वाक्य.\naria-invalid attribute मुळे सहाय्यक तंत्रज्ञानाला स्थिती समजते.\nरंग + मजकूर + attribute — तिन्ही एकत्र आल्यावर संदेश सर्वांसाठी स्पष्ट होतो.", code: `input[aria-invalid="true"] {
  outline: 2px solid #dc2626;
}`, codeLanguage: "css" },
      { title: "4. फोकस साथ", content: "कीबोर्डनी फॉर्म भरणारे वापरकर्ते टॅब दाबत फिरतात — त्यांच्यासाठी focus दृश्य असणे आवश्यक.\n:focus-visible ही pseudo-class फक्त कीबोर्ड-नियंत्रित focus ला दृश्य करते.\ninput:user-invalid:focus-visible वर outline: 2px solid #dc2626 आणि outline-offset: 2px दिल्यास field च्या सभोवती स्पष्ट वलय.\nआता वापरकर्त्याला कुठे आहोत हे नेहमी कळतं; चुका आणि दुरुस्ती एकाच ठिकाणी नजरेस.\nफोकस आणि valid-invalid एकत्र केले तर फॉर्मची कार्यक्षमता अनेक पटींनी वाढते.", code: `input:user-invalid:focus-visible {
  outline: 2px solid #dc2626;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. अनिवार्य थर", content: "फॉर्ममध्ये काही भाग अनिवार्य (required) असतात — तो भाग लक्षात घेण्यासाठी label वर स्पष्ट खूण द्यावी.\nउदा. label ला font-weight: 500 — थोडे जाड; आणि मजकुरासाठी पुरेशी जागा.\ninput:required ला border: 1px solid #334155 दिल्यास अनिवार्य field ची किनार अधिक ठोस.\nअनिवार्य भाग वेगळे दिसले की भरताना गोंधळ नाही — वापरकर्ता आत्मविश्वासाने वाटचाल करतो.\nतारका किंवा 'आवश्यक' असे शब्द label सोबत लिहिणे — ही खूण सर्वांना मित्राच्या रूपात भेटते.", code: `label {
  font-weight: 500;
}
input:required {
  border: 1px solid #334155;
}`, codeLanguage: "css" },
      { title: "6. बदल क्रम", content: "फॉर्ममधील रंग थेट बदलला की दृश्याचा झटका वाटतो; लहान transition मुळे स्वर सुरेख होतो.\nउदा. input:user-invalid आणि input:user-valid या दोन्हींवर transition: border-color 0.2s — टाईप करताना रंग मऊ हळू बदलतो.\nटायपिंगचा क्रम खंडित वाटत नाही; वापरकर्ता त्याच वेगाने पुढे जातो.\nही छोटी सजावट वेळेचा आदर करते — सूचना मिळते आणि काम थांबत नाही.\nफक्त transition कमी (0.15s ते 0.3s) ठेवा; जास्त लांबलं की प्रतीक्षेचा त्रास.", code: `input:user-invalid,
input:user-valid {
  transition: border-color 0.2s;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक लॉगिन फॉर्म घ्या आणि feedback रंग जोडा. input:user-invalid चा border-color लाल.\nअयोग्य मेल-पासवर्ड टाईप केल्यावर border लाल होतो — चुका लगेच नजरेस.\nआवश्यक असल्यास :user-valid हिरवा आणि transition सोबत जोडा.\nएका रंगाने सुरुवात करा — मग गरजेनुसार विस्तार.\nहा सराव पूर्ण झाला की फॉर्म भरणे सोपे, आनंददायी आणि निर्दोष राहते.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["user-invalid काय?", "user-valid कुठे?", "aria कधी?", "focus कसा?"],
    quiz: [
      { question: ":user-invalid?", options: ["खराब input", "रंग जोड", "ध्वनी"], correct: 0 },
      { question: ":user-valid?", options: ["बरोबर input", "रेखा", "थर"], correct: 0 },
      { question: "aria-invalid?", options: ["सूचना", "रंग", "क्रम"], correct: 0 },
      { question: "focus-visible?", options: ["keyboard", "mouse", "touch"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म feedback जोडा.",
      starterCode: `input:user-invalid {
  border-color: #dc2626;
}`,
      expectedOutput: "Marathi form flags invalid input",
    },
    interviewQuestions: ["user vs browser?", "transition कसा?"],
    related: ["css-forms-styling", "css-pseudo-state", "css-focus-visible"],
    prev: "css-decoration-style",
    next: "css-pseudo-state",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-pseudo-state",
    categoryId: "web",
    title: "Pseudo State",
    marathiTitle: "pseudo-state — स्थिती नियम",
    level: "advanced",
    minutes: 40,
    summary: ":placeholder-shown :read-write :autofill.",
    sections: [
      { title: "1. placeholder थर", content: "placeholder हा input मध्ये ठेवलेला उदाहरण मजकूर — नाव लिहा, ईमेल सारखा. तो संकेत देतो पण प्रत्यक्ष मूल्य नसतो.\n:placeholder-shown ही pseudo-class तेव्हा लागू होते जेव्हा input रिकामा आणि placeholder दृश्य असेल.\nउदा. input:placeholder-shown चा border-color #94a3b8 — रिकाम्या field ची हलकी किनार.\nहे उपयोगी असते — रिकाम्या field ला जरा हलक्या रंगाने वेगळे करता येतं.\nशैलीवरून input रिकामा आहे का भरला हे फक्त CSS ने ओळखता येते — हीच या pseudo-class ची ताकद.", code: `input:placeholder-shown {
  border-color: #94a3b8;
}`, codeLanguage: "css" },
      { title: "2. भरले input", content: "एकदा मजकूर टाईप केला की placeholder अदृश्य होतो. त्यावेळी आपण :not(:placeholder-shown) वापरतो.\nउदा. input:not(:placeholder-shown) चा border-color #0d9488 — भरलेल्या field ला हिरवसर रंग.\nपरिणाम स्पष्ट — रिकामा input हलका, भरलेला ठोस.\nअशा प्रकारे फॉर्ममधील स्थिती बदलताना ब्राउझरला मोठी माहिती मिळते.\nCSS मध्ये एका pseudo-class सोबत नकार (not) वापरल्यास नियंत्रण सोपे होते.", code: `input:not(:placeholder-shown) {
  border-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. read थर", content: ":read-only ही pseudo-class त्या घटकांना लागू होते जे वापरकर्त्याला बदलता येत नाहीत — पण शैली द्यायची असते.\nउदा. input:read-only चा background #f1f5f9 — हलकी राखाडी पार्श्वभूमी.\nप्रोफाइल पाहताना, गणना दाखवताना अशा ठिकाणी ते उपयोगी.\nवाचकाला आपोआप कळतं — हा भाग बदलण्यास मिळत नाही.\ndisabled पेक्षा read-only सौम्य आहे — शैली नाजूक आणि आरामदायी ठेवा.", code: `input:read-only {
  background: #f1f5f9;
}`, codeLanguage: "css" },
      { title: "4. editable नियम", content: ":read-write ही उलट स्थिती — घटक संपादनास खुला असतो.\nउदा. [contenteditable]:read-write वर outline: 2px solid #0d9488 — संपादनाची स्पष्ट फ्रेम.\ncontenteditable म्हणजे वापरकर्त्याने मजकूर-संपादन परवानगी असलेले field.\nकधी संपादन मिळेल आणि कधी नाही याची दृश्य खूण — नियम नेमका.\nफॉर्ममधील editable fields वर हा प्रकार वापरल्यास चुकीच्या कृती कमी होतात.", code: `[contenteditable]:read-write {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. autofill थर", content: "ब्राउझर फॉर्म भरताना input मध्ये स्वतः data ठेवतो — त्याला autofill म्हणतो. autofill ची पार्श्वभूमी पांढरी-निळीसर दिसते.\n:autofill pseudo-class ने या स्थितीला शैली द्यायचा हा प्रचलित मार्ग.\nउदा. input:autofill वर box-shadow: 0 0 0 1000px #ccfbf1 inset — मोठी हलकी-हिरवी झाक. या मुळे पार्श्वभूमी मनासारखी बदलते.\nआपली background बदल काही ब्राउझर स्वीकारत नाहीत; म्हणून हा box-shadow trick फायदेशीर.\nautofill आला की वापरकर्त्याला समजतं — हा भाग ब्राउझरची स्मृती आहे.", code: `input:autofill {
  box-shadow: 0 0 0 1000px #ccfbf1 inset;
}`, codeLanguage: "css" },
      { title: "6. संयोजन नियम", content: "अनेक pseudo-class एकत्र जोडून शैली अचूक करता येते — उदा. :not(:placeholder-shown):read-write.\nयाचा अर्थ — placeholder दिसत नाही आणि संपादन खुलं — म्हणजे खरोखर लिहिलेला field.\nउदा. अशा field चा border-color #0d9488 — भरलेला आणि संपादनक्षम.\nअशा संयोजनाने रिकाम्या, बंद असलेल्या आणि autofilled स्थितींना वेगवेगळी शैली मिळते.\nप्रत्येक स्थितीला कोणत्या pseudo-class लागते ते निरखणे हीच सवय; मग जोडणी सोपी होते.", code: `input:not(:placeholder-shown):read-write {
  border-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी रिकाम्या input ची खूण द्या. input:placeholder-shown वर background: #f8fafc द्या.\nमजकूर नसलेला input हलक्या राखाडी पार्श्वभूमीवर दिसेल — रिकामी जागा अधिक स्पष्ट.\nभरल्यावर हा नियम आपोआप तुटतो (placeholder गायब) — रचना स्वतः बदलते.\nआवडल्यास :not(:placeholder-shown) जोडून भरलेल्या field ला वेगळा रंग द्या.\nएक नियम पुरेसा; अनेक स्थिती नियंत्रित करता येतात हेच समजणे अपेक्षित.", code: `input:placeholder-shown {
  background: #f8fafc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["placeholder-shown काय?", "read-only कुठे?", "autofill कधी?", "not नियम?"],
    quiz: [
      { question: ":placeholder-shown?", options: ["रिकामे input", "भरले", "ध्वनी"], correct: 0 },
      { question: ":read-only?", options: ["वाचनीय", "संपादन", "रंग"], correct: 0 },
      { question: ":autofill?", options: ["आपोआप भरणे", "नवीन रंग", "थर"], correct: 0 },
      { question: ":read-write?", options: ["संपादन", "लॉक", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "placeholder खुणा करा.",
      starterCode: `input:placeholder-shown {
  background: #f8fafc;
}`,
      expectedOutput: "Marathi empty inputs highlighted",
    },
    interviewQuestions: ["placeholder अर्थ?", "read-write कुठे?"],
    related: ["css-user-validity", "css-field-sizing", "css-forms-styling"],
    prev: "css-user-validity",
    next: "css-field-sizing",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-field-sizing",
    categoryId: "web",
    title: "Field Sizing",
    marathiTitle: "field-sizing — फील्ड आकार",
    level: "advanced",
    minutes: 40,
    summary: "field-sizing सह input आकार स्वयम्.",
    sections: [
      { title: "1. field-sizing", content: "साधारणपणे input ची रुंदी एखाद्या fixed मूल्यानुसार ठरवली जाते — कधी मजकूर जास्त, कधी कमी जागा. तो त्रास field-sizing संपतो.\nfield-sizing: content म्हणजे input आपोआप आपल्या सामग्रीनुसार मोठा-लहान होतो.\nउदा. input { field-sizing: content; } — टाईप करताना input रुंद होतो.\nहे विशेषतः search box, tag input, छोट्या फॉर्मसाठी सोय — अगदी बरोबर आकार.\nनवीन गुणधर्म असल्याने काही ब्राउझरमध्ये आधार तपासणे आवश्यक; परंतु वापर सोपा व फायदा मोठा.", code: `input {
  field-sizing: content;
}`, codeLanguage: "css" },
      { title: "2. textarea थर", content: "textarea मध्ये अनेक ओळींचा मजकूर येतो — त्याची उंची वापरकर्त्याला वाढवता यावी हे अपेक्षित असतं.\nresize: vertical दिल्यास फक्त वर-खाली आकार बदलता येतो; क्षैतिज बदल बंद राहतो.\nउदा. textarea ला resize: vertical आणि min-height: 120px — किमान उंची आधीपासून.\nअशा सेटिंग्सने मजकूर भरताना स्क्रोल-चाल न लागता जागा वाढते.\nमोबाइलवरही रचना नीट राहते — आवश्यकतेनुसार रुंदी कमी करावी.", code: `textarea {
  resize: vertical;
  min-height: 120px;
}`, codeLanguage: "css" },
      { title: "3. select नियम", content: "select घटक निवडीचे पर्याय उघडतो — त्याची रुंदी साधारणपणे मोठ्या option नुसार ठरते.\nwidth: fit-content दिल्यास select ला त्याच्या सामग्रीइतक्याच रुंदीची जागा मिळते.\nउदा. select { width: fit-content; } — लहान सूची खूप मोठी न दिसता आकार योग्य.\nfit-content हा घटकाच्या आतल्या सामग्रीनुसार आकार घेतो.\nड्रॉपडाउनच्या रचनेत ही गोष्ट अनेक ठिकाणी सुबकता देते.", code: `select {
  width: fit-content;
}`, codeLanguage: "css" },
      { title: "4. chip थर", content: "chip या छोट्या बॅज असतात — टॅग, फिल्टर, निवडी दर्शवणारे घटक.\nअशा chip ची रुंदी मजकुराइतकी असावी — width: fit-content सर्वोत्तम.\nउदा. .chip { width: fit-content; padding: 4px 12px; } — मजकुरासोबत आतील हवा.\nदोन chip एकत्र आले की रुंदी मजकुरानुसार वेगळी, पण उंची सारखी.\nया रीतीनं chip समान आणि व्यवस्थित दिसतात; रचना सुबक राहते.", code: `.chip {
  width: fit-content;
  padding: 4px 12px;
}`, codeLanguage: "css" },
      { title: "5. आधार जुना", content: "field-sizing हा नवीन गुणधर्म असल्याने जुन्या ब्राउझरमध्ये तो मान्य नसेल — नियम शांतपणे टाकला जातो.\nयावेळी @supports वापरा — ब्राउझरला field-sizing समजल्यास input स्वयं-आकार; अन्यथा पूर्वीचा.\nउदा. @supports (field-sizing: content) च्या आत input { field-sizing: content; }.\nजुने ब्राउझर आपल्या सवयीनुसार निश्चित रुंदीवर राहतात.\nआधार सुरक्षित आणि नवीनता जपलेली — हीच योग्य दृष्टी.", code: `@supports (field-sizing: content) {
  input {
    field-sizing: content;
  }
}`, codeLanguage: "css" },
      { title: "6. min-width थर", content: "स्वयं-आकाराच्या input मध्येही किमान रुंदी ठेवणं हवं — रुंदी अगदी लहान होऊ नये ही खात्री.\nउदा. input[name='q'] { field-sizing: content; min-width: 200px; }.\nsearch box अगदी लहान होऊ नये; मजकूर कमी असला तरी किमान 200px.\nमजकूर वाढला की रुंदी आपोआप वाढते — दोन्ही नियम सुसंगत.\nस्वयं-आकार आणि किमान आराम — एकत्र आल्यावर input खऱ्या अर्थाने उपयुक्त बनतो.", code: `input[name="q"] {
  field-sizing: content;
  min-width: 200px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक text input ला स्वयं-आकार द्या. input[type='text'] { field-sizing: content; min-width: 160px; }.\nटाईप करताना input रुंद होईल; किमान 160px राहील.\nहेच search फॉर्म आणि छोट्या फॉर्मच्या रचनेत खास उपयोगी.\nजुन्या ब्राउझरसाठी @supports ची सुरक्षा ठेवा.\nसराव झाला की field-sizing ची उपयोगिता नैसर्गिकरीत्या लक्षात येते; input चा आकार सामग्रीनुसार बदलतो.", code: `input[type="text"] {
  field-sizing: content;
  min-width: 160px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["field-sizing काय?", "textarea कसा?", "chip कुठे?", "min-width का?"],
    quiz: [
      { question: "field-sizing?", options: ["आकार स्वयम्", "रंग", "ध्वनी"], correct: 0 },
      { question: "textarea?", options: ["resize", "रेषा", "थर"], correct: 0 },
      { question: "fit-content?", options: ["content आकार", "क्रम", "रेखा"], correct: 0 },
      { question: "min-width?", options: ["किमान", "जास्त", "शून्य"], correct: 0 },
    ],
    challenge: {
      prompt: "input आकार घ्या.",
      starterCode: `input[type="text"] {
  field-sizing: content;
  min-width: 160px;
}`,
      expectedOutput: "Marathi inputs size to content",
    },
    interviewQuestions: ["content sizing फायदा?", "fallback कसा?"],
    related: ["css-form-appearance", "css-intrinsic-sizing", "css-forms-styling"],
    prev: "css-pseudo-state",
    next: "css-marathi-capstone12",
    levelLabel: CSS12_LABEL,
  },
  {
    slug: "css-marathi-capstone12",
    categoryId: "web",
    title: "Detail Capstone",
    marathiTitle: "Blend Bag — भाग संग्रह",
    level: "advanced",
    minutes: 40,
    summary: "Level 12 साधने एकत्र शैली.",
    sections: [
      { title: "1. स्क्रोल संगठन", content: "धड्याची सुरुवात scroll व्यवस्थेने. .modal ला overscroll-behavior: contain दिलं की मागचं पेज हलत नाही.\nतसाच h2[id] चा scroll-margin-top: 96px — अँकर दुव्यांनी येणारे शीर्षक मथळ्याखाली लपत नाही.\nदोन्ही नियम पोर्टलच्या scroll अनुभवाला नेटका बनवतात.\nवापरकर्त्याला कुठे आहोत हे नेहमी समजतं — नकळत उडी नाही.\nसंगठन अशा छोट्या नियमांतून तयार होतं; हाच भाग पुढील घटकांचा आधार.", code: `.modal {
  overscroll-behavior: contain;
}
h2[id] {
  scroll-margin-top: 96px;
}`, codeLanguage: "css" },
      { title: "2. रेंडरिंग गती", content: "लांब सूची असलेल्या पोर्टलमध्ये performance हीच मोठी मागणी असते. .row ला content-visibility: auto द्या.\nत्यासोबत contain-intrinsic-size: auto 96px — प्रत्येक ओळीचा आकार स्थिर मानला जातो.\nस्क्रीनवर नसलेल्या ओळी रेंडर होत नाहीत; सरकवून आणल्यावर लगेच येतात.\nपेज लवकर उघडतं आणि स्क्रोल गुळगुळीत राहतो.\nहेच रेंडरिंग गतीचं गमक — कमी काम, मोठा फरक.", code: `.row {
  content-visibility: auto;
  contain-intrinsic-size: auto 96px;
}`, codeLanguage: "css" },
      { title: "3. blend थर", content: "पोर्टलचा मथळा आकर्षक हवा — .title ला mix-blend-mode: multiply द्या.\nमथळ्याचा रंग पार्श्वभूमीशी मिसळून एक समृद्ध गडद रंग तयार होतो.\nहे एकाच गुणधर्माने छाया-रंगांचे सौंदर्य आणते.\nपार्श्वभूमी बदलली तरी blend आपोआप जुळवून घेते.\nरचना आकर्षक आणि बदल सोपे — चांगले आणि सुरक्षित.", code: `.title {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "4. वजन आकार", content: "मथळ्याचे वजन आणि आकार एकत्र येऊन पोर्टलला ठसा देतात. .display ला font-variation-settings: 'wght' 700 द्या.\nव्हेरिएबल फॉन्टमध्ये 700 म्हणजेच ठळक मथळा — एकाच फाइलमधून.\nशीर्षक ठळक असल्याने वाचताना दिशा स्वच्छ.\nफॉन्ट फाइलच्या वजनाची बचत आणि सुंदर आकार सुबक.\nहे वजन-आकार मिळून पोर्टलची ओळख बनते.", code: `.display {
  font-variation-settings: "wght" 700;
}`, codeLanguage: "css" },
      { title: "5. वाचन नियम", content: "पोर्टलचा मजकूर वाचनीय असावा — .prose ला line-height: 1.7 आणि letter-spacing: 0.01em द्या.\nउभे अंतर वाढल्याने ओळींमधला श्वास सुखकारक.\nबारीक letter-spacing ने अक्षरे स्पष्ट.\nहे दोन्ही एकत्र आले की मजकूर पुस्तकासारखा आरामदायी दिसतो.\nवाचन आराम म्हणजे पोर्टलच्या प्रतिभेचा आधार — रचना नेमकी.", code: `.prose {
  line-height: 1.7;
  letter-spacing: 0.01em;
}`, codeLanguage: "css" },
      { title: "6. फॉर्म feedback", content: "फॉर्म भरणाऱ्याला त्वरित सूचना मिळणे ही या धड्याची विशेषता. input:user-invalid चा border-color लाल.\nअयोग्य मूल्य लिहिल्यावर border झटपट लाल होतो — कोणता भाग चुकला हे दिसतं.\nlabel, aria सूचना आणि transition सोबत जोडले तर संदेश पूर्ण होतो.\nरंग फक्त एक खूण — मजकूर मात्र खरा संदेश.\nफॉर्म feedback व्यवस्थित झाला की पोर्टल वापरण्यास आनंददायी होतं.", code: `input:user-invalid {
  border-color: #dc2626;
}`, codeLanguage: "css" },
      { title: "Final Project", content: "आता सर्व विषय एकत्र आणून संपूर्ण शैली साकार करा. प्रत्येक भागाचा एक नियम निवडा — scroll, performance, blend, वजन, वाचन, feedback.\nउदा. input:placeholder-shown चा background #f8fafc — रिकाम्या field ची खूण.\nप्रत्येक गुणधर्म एका ठिकाणी एकत्र केला की शैलीचा सारांश तयार होतो.\nहा लहान संग्रह शिकलेल्या साधनांचा परीक्षणपेज म्हणून काम करतो.\nसराव पूर्ण झाला की Level 12 चा प्रत्येक विषय आत्मसात झाला — पुढील स्तरासाठी पाया सज्ज.", code: `input:placeholder-shown {
  background: #f8fafc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 12 नवे?", "blend कुठे?", "content visibility?", "feedback कसा?"],
    quiz: [
      { question: "Level 12 थीम?", options: ["Blend & Detail", "रंग रेषा", "जुना थर"], correct: 0 },
      { question: "overscroll?", options: ["चेन रोख", "रंग", "ध्वनी"], correct: 0 },
      { question: "content-visibility?", options: ["गती सुधार", "रेखा", "क्रम"], correct: 0 },
      { question: "user-invalid?", options: ["फॉर्म feedback", "मथळा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "पोर्टल सुरू करा.",
      starterCode: `.modal {
  overscroll-behavior: contain;
}`,
      expectedOutput: "Final detail patterns assembled via Marathi portal",
    },
    interviewQuestions: ["तीन आवडते?", "blend मर्यादा?"],
    related: ["css-marathi-capstone11", "css-scroll-snap", "css-field-sizing"],
    prev: "css-field-sizing",
    next: "css-overscroll",
    levelLabel: CSS12_LABEL,
  },];
