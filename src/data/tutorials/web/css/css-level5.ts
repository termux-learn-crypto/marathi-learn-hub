import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 5 — Shape, Cut आणि Precision ===
export const CSS5_LABEL = "CSS · Level 5 — Shape, Cut आणि Precision";

export const cssLevel5: Tutorial[] = [
  {
    slug: "css-clip-path",
    categoryId: "web",
    title: "Clip Path",
    marathiTitle: "clip-path — कापलेले आकार",
    level: "advanced",
    minutes: 30,
    summary: "polygon, circle आणि दृश्य कट.",
    sections: [
      { title: "1. कट कल्पना", content: "clip-path हा गुणधर्म element चा दृश्य भाग कापून दाखवतो. बाहेरचा भाग लपतो — आकार काकती पटा बनवता येतो.\nimage किंवा card ला अद्वितीय आकार देणे सोपे होते. cosine आणि त्रिकोण असे आकार सहज साधता येतात.\ndecorative elements मध्ये हे खूप उपयोगी — ज्या ठिकाणी कठीण भाग नको तेथे आकार बदलतो.\nborder आणि shadow सोबत वेगळे effect मिळतात. हे नवीन नियम शिकण्यास श्रेयस्कर आहे.", code: `.cut {
  clip-path: circle(50%);
}`, codeLanguage: "css" },
      { title: "2. polygon बिंदू", content: "polygon आकार बिंदूंच्या सूचीनुसार तयार होतो. प्रत्येक बिंदू X आणि Y coordinates देतो — पहिला टक्का horizontal, दुसरा vertical.\nतीन बिंदू दिल्यास त्रिकोण तयार होतो; चार दिल्यास चौकोन किंवा trapezoid.\nटक्के आणि pixels दोन्ही प्रकारे coordinate मान्य होतात — लवचिक आकार.\nchip सारख्या नियमासाठी 8% पासून 100% असे क्रमवार बिंदू येतात. आकार स्वतंत्र आणि अचूक दिसतो.", code: `.chip {
  clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);
}`, codeLanguage: "css" },
      { title: "3. circle आणि inset", content: "circle आकार मध्यवर्ती भाग ठरवतो. circle(50%) मध्ये व्यास संपूर्ण भरतो — गोल काप.\ninset हा आतून भाग कापून ठेवतो. inset(0 0 0 20%) मध्ये डावीकडून 20% भाग लपतो.\ninset मध्ये चार मूल्ये वर उजवी खाली डावी अशा क्रमाने येतात.\nकाठ अचूक मोजल्यास कट स्वच्छ दिसतो. rounded सह व्यवस्था वेगळ्या प्रकारे करता येते.", code: `.badge {
  clip-path: inset(0 0 0 20%);
}`, codeLanguage: "css" },
      { title: "4. निर्देशांक गणित", content: "निर्देशांक गणना clip-path मध्ये calc() सह शक्य आहे. टक्के मूल्ये आधारासोबत गणली जातात.\nउदा. polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%) हा खालचा कोपरा सरळ करतो.\nकाही function आयात करता येतात, पण साधेपणा राखताना काळजी घ्या.\nप्रत्येक बिंदूचा क्रम आणि गणना तपासूनच final आकार निश्चित करा. आकार सुंदर आणि अचूक मिळतो.", code: `.edge {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);
}`, codeLanguage: "css" },
      { title: "5. hover बदल", content: "hover वर clip-path बदलता येतो. circle(30%) ते circle(60%) असे अचानक न करता transition सह गुळगुळीत होते.\ntransition: clip-path 0.4s मध्ये रूपांतर सुरळीत दिसते. आकार बदल वापरकर्त्याच्या लक्षात येतो.\nसर्व बिंदू योग्य क्रमाने असतील तर बदल त्रासदायक होत नाही.\nहा effect माउस-टच दोन्हीवर चांगला दिसतो. कार्ड, button आणि image अशा अनेक ठिकाणी वापरता येतो.", code: `.box {
  clip-path: circle(30%);
  transition: clip-path 0.4s;
}
.box:hover {
  clip-path: circle(60%);
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "clip-path चा आधार मजबूत आणि व्यापक आहे. नवीन browsers मध्ये हा नियम अचूक चालतो.\nप्रवेश्यता दृष्टीने काळजी घ्या — आकारामुळे मजकूर कापला जाऊ नये.\nकार्यात्मकता सोबत दृश्य दोन्ही जपणे महत्त्वाचे आहे.\nclip-path चा प्रत्येक वापर आधी तपासा; कुठल्या आकारात काही घटक लपेल हे समजताच रचना सुद्धा सुधारते.", code: `.deco {
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये टॅग chip चा आकार तयार करतो. polygon चे बिंदू असे दिले की उजवीकडे बाण किंवा टोकदार भाग मिळतो.\n0 ते 92% चा डावीकडून भाग सरळ असतो; शेवटचा बिंदू मध्यभागी असल्याने त्रिकोण टोक बनतो.\nअसा tag आकार वापरून piece UI ची ओळख तयार होते. center मध्ये मजकूर ठेवताना padding जपा.\nहा सोपा नियम प्रत्येक listing मध्ये वापरता येतो.", code: `.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["clip-path काय?", "polygon कसे?", "inset कुठे?"],
    quiz: [
      { question: "clip-path?", options: ["कापतो", "रंगतो", "वाढतो"], correct: 0 },
      { question: "polygon?", options: ["बिंदू", "रेषा", "रंग"], correct: 0 },
      { question: "circle मध्ये?", options: ["50%", "दोन", "नाव"], correct: 0 },
      { question: "transition लागतो?", options: ["हवे", "नको", "कडे"], correct: 0 },
    ],
    challenge: {
      prompt: "हेडर निमित्त tag तयार.",
      starterCode: `.tag { clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); }`,
      expectedOutput: "Renders a clipped tag shape",
    },
    interviewQuestions: ["c", "l", "i", "p", "-", "p", "a", "t", "h", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-gradient-deep", "css-pseudo-classes", "css-shape-outside"],
    prev: "css-marathi-capstone4",
    next: "css-gradient-deep",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-gradient-deep",
    categoryId: "web",
    title: "Gradient Deep",
    marathiTitle: "ग्रेडियंट गणित",
    level: "advanced",
    minutes: 30,
    summary: "conic, radial आणि color stops नियंत्रण.",
    sections: [
      { title: "1. linear नियम", content: "linear-gradient ची दिशा आणि स्टॉपची रचना गणिती असते. 45deg सारख्या कोनातून रंग वाहतो.\nटक्के मूल्ये स्टॉपचे स्थान ठरवतात — रंग कोठे बदलणार हे सांगते.\nangle ने कोणत्याही दिशेला दिशा मिळवता येते. स्टॉपचे स्थान हे रंग संक्रमणाचे स्वरूप ठरवतो.\nरंग संक्रमण गुळगुळीत असते — अचूक नियंत्रण हवे असल्यास स्टॉप टक्के मूल्ये काळजीपूर्वक लिहा.", code: `.stripes {
  background: linear-gradient(45deg, #6366f1 25%, #a5b4fc 25%);
}`, codeLanguage: "css" },
      { title: "2. color stops", content: "रंग stops नुसार रंग बदलतो. प्रत्येक stop चे स्थान टक्केवारीत 0 ते 100 दरम्यान असते.\nhard stop म्हणजे दोन स्टॉप एकाच ठिकाणी — रंग अचानक कापला जातो. उदा. 0 25%, 25% यांसारखे.\nगुळगुळीत शेडिंगसाठी stops दूर ठेवतात.\nlocation नियंत्रण नेमके असल्यास gradient चा परिणाम अचूक आणि आकर्षक दिसतो. पट्टे आणि बँड यांसाठी ही योग्य पद्धत.", code: `.band {
  background: linear-gradient(90deg, red 0%, orange 50%, yellow 100%);
}`, codeLanguage: "css" },
      { title: "3. radial केंद्र", content: "radial-gradient मध्यवर्ती बिंदूपासून बाहेर विस्तारतो. circle प्रकार दृष्टी एकसमान देतो.\nclosest-side ने तो सर्वात जवळच्या सीमेपर्यंत वाढतो. प्रकाश किंवा glow प्रभावासाठी हे उत्तम.\nकेंद्र बिंदू टक्क्यांनी निवडता येतो — at 30% 30% असा.\nआकार आणि दिशा तपासल्यास gradient सुंदर दिसतो. background मध्ये हे आधुनिक styling देतात.", code: `.glow {
  background: radial-gradient(circle at 30% 30%, #38bdf8, #0f172a);
}`, codeLanguage: "css" },
      { title: "4. conic पट्टी", content: "conic-gradient मध्यवर्ती बिंदूभोवती फिरतो. वर्तुळाभोवती रंग विभाग लागतात — पाई chart सारखे.\nटक्के बेरीज 100 राखावी. 0 25%, 25% 60% अशा stops ने विभाग वेगळे होतात.\nआकडेवारी दृश्यरूपात दर्शवण्यासाठी conic खूप उपयोगी — प्रमाण स्पष्ट दिसते.\nपाई आणि डोनट चार्ट CSS current शिवाय बनवता येतात.", code: `.pie {
  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);
}`, codeLanguage: "css" },
      { title: "5. repeating थर", content: "repeating-linear-gradient ने नियमित नमुने तयार होतात. समान अंतराच्या पट्ट्या आणि बँड सहज बनतात.\nrepeating-radial-gradient वर्तुळाकार वलय देते — लक्ष्य किंवा तरंग नमुना.\nएकसारखे नमुने सतत पुनरावृत्त होतात कारण स्टॉपचे अंतर एका भागाशी जुळवून ठेवले जाते.\nलहान भाग आणि decorative textures यांसाठी हे सोपे तंत्र खूप कामी येते.", code: `.zebra {
  background: repeating-linear-gradient(0deg, #f8fafc 0 10px, #e2e8f0 10px 20px);
}`, codeLanguage: "css" },
      { title: "6. आधार आणि परिस्थिती", content: "ग्रेडियंटचा आधार उत्तम आणि व्यापक आहे. नवीन व जुने दोन्ही browsers फ़ंक्शन्स समजतात.\nपॅटर्नची बचत graphics potential प्रमाणेच आहे — कोणतीही image शिवाय नमुने मिळतात.\nप्रवेश्यता दृष्टीने रंग combination तपासा; वाचनीयता जपा.\nउतरवण्यापूर्वी डिव्हाइस आणि प्रिंट दोन्हीवर check करा. आधुनिक नियम सोबत तयार केलेले gradient design फायदेशीर ठरतात.", code: `.hero {
  background: linear-gradient(160deg, #7c3aed 0%, #db2777 100%);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये पाई chart card बनवतो. conic-gradient चे तीन विभाग — हिरवा, केशरी आणि लाल — प्रमाणानुसार दाखवतो.\n0 25% हा green भाग, 25% 60% हा orange आणि उर्वरित red असा विभाजन होतो.\nचार किंवा अधिक भागांसाठी stops चे प्रमाण जुळवा.\nहा small project gradient च्या वास्तविक जगातील उपयोगाचा नमुना आहे — अंकीय माहिती दृश्यमान होते.", code: `.pie-badge {
  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["stops काय?", "conic कुठे?", "repeating कसे?"],
    quiz: [
      { question: "linear-gradient?", options: ["दिशा", "फिरणे", "राग"], correct: 0 },
      { question: "hard stop?", options: ["टोक", "गुळगुळीत", "रंग"], correct: 0 },
      { question: "conic काय?", options: ["पाई", "ग्रिड", "सावली"], correct: 0 },
      { question: "radial at?", options: ["केंद्र", "कडा", "शीर्ष"], correct: 0 },
    ],
    challenge: {
      prompt: "तिरकस पट्टे band बनवा.",
      starterCode: `.band { background: repeating-linear-gradient(45deg, #6366f1 0 12px, #a5b4fc 12px 24px); }`,
      expectedOutput: "Renders a striped diagonal band",
    },
    interviewQuestions: ["ग", "्", "र", "े", "ड", "ि", "य", "ं", "ट", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-clip-path", "css-grid-auto-flow", "css-pseudo-classes"],
    prev: "css-clip-path",
    next: "css-grid-auto-flow",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-grid-auto-flow",
    categoryId: "web",
    title: "Grid Auto Flow",
    marathiTitle: "grid-auto — ऑटो विधान",
    level: "advanced",
    minutes: 30,
    summary: "auto-flow, auto-rows आणि dense नियम.",
    sections: [
      { title: "1. ऑटो भरणा", content: "ग्रिडमधील मुले auto-flow ने स्वयं भरतात. row ने पुढील ओळीत आणि column ने उभ्या रचनेत.\nघटक document order नुसार क्रमाने बसतात. प्रत्येक cell स्वतः व्यवस्थित होतो.\nहा default वर्तन असल्याने रचना सहज समजते.\nआकार न थांबता auto-flow ने multitudes सहज सामावतात — हेच grid चे सामर्थ्य.", code: `.grid {
  display: grid;
  grid-auto-flow: row;
}`, codeLanguage: "css" },
      { title: "2. auto-rows", content: "auto-rows नव्या अस्पष्ट ओळींची उंची ठरवतो. प्रत्येक नवीन पंक्तीच्या size finger नियंत्रित करता येते.\nminmax(80px, auto) मध्ये किमान 80px आणि आवश्यकतेसाठी अधिक जागा.\nसर्व अज्ञात पंक्ती एकाच नियमाने नियंत्रित होतात — सोपी आणि स्थिर.\nउघड्या मूल्यांवर अवलंबून न राहता नियम असल्याने layout अंदाजित राहतो.", code: `.grid {
  grid-auto-rows: minmax(80px, auto);
}`, codeLanguage: "css" },
      { title: "3. dense नियम", content: "dense ने मागील रिकामी जागा नवीन घटकांनी भरतो. source order बदलत नाही — फक्त placement अनुकूल होते.\nगॅलरीमध्ये dense अत्यंत उपयुक्त — आकार वेगळे असले तरी रिकाम्या जागा कमी दिसतात.\nकोणतीही मोठी मुल खूप पुढे येऊन रचना तोडत नाही.\nदृश्य order document order नुसार शोधता येते, पण placement dense ने सुजलेले राहते.", code: `.grid {
  grid-auto-flow: dense;
}`, codeLanguage: "css" },
      { title: "4. column दिशा", content: "column auto-flow मध्ये स्तंभ उभे वाढतात. grid-auto-flow: column ने रचना उभी जाते.\nauto-columns रुंदी देतात — सर्व नवीन स्तंभांना.\nvertical मजकूर किंवा टेबल सारखी असेंबली येथे सोयीची. एका row विरुद्ध column ची निवड layout च्या गरजेनुसार करा.\nbuttons किंवा tags ची उभी यादी column flow ने व्यवस्थित बसते.", code: `.cols {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
}`, codeLanguage: "css" },
      { title: "5. explicit मिश्रण", content: "explicit आणि auto रचना एकत्र करता येते. grid-template-columns मध्ये पहिल्या स्तंभांची रचना स्पष्ट असते.\nबाकी भाग auto-rows ने भरला जातो. explicit नियम प्राथमिक — तो कधीही बदलत नाही.\nmix: 1fr 2fr आणि auto-rows 60px — स्पष्ट व स्वयंचे संयोग.\nसहज वाढ व्यवस्था या संयोगाने मिळते — नवीन घटक आपोआप व्यवस्थित बसतात.", code: `.mix {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 60px;
}`, codeLanguage: "css" },
      { title: "6. आधार ग्रिड", content: "grid चा आधार भक्कम आणि सर्व ब्राउझरमध्ये एकसमान आहे. तार्किक गणना पारदर्शक असते.\nसर्व dimensions — rows, columns आणि gaps — नियंत्रित होतात.\nglobal डिझाइनसाठी grid चा वापर योग्य राहो — सगळी रचना एका मॉडेलने सुरळीत चालते.\nप्रत्येक browsers ने समान result देतो — आत्मविश्वास वाढतो.", code: `.flow {
  display: grid;
  grid-auto-flow: row dense;
  gap: 8px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये chip ग्रिड dense ची रचना करतो. grid-auto-flow: dense ने लहान-मोठ्या chips ची जागा व्यवस्थित भरली जाते.\nauto-rows 36px ने प्रत्येक पंक्तीची उंची स्थिर राहते.\nचिप्सची जोडणी लवचिक असते — vast sizes असले तरी रचना तोडत नाही.\nहा project auto-flow ची दररोजची उपयोगिता दाखवतो. chips चे tagging UI नेहमी व्यवस्थित दिसते.", code: `.chips {
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 36px;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["auto-flow काय?", "dense कसे?", "rows कुठे?"],
    quiz: [
      { question: "auto-flow?", options: ["क्रम", "रंग", "कडा"], correct: 0 },
      { question: "dense?", options: ["भरते", "लपते", "वाढते"], correct: 0 },
      { question: "auto-rows?", options: ["उंची", "रुंदी", "रंग"], correct: 0 },
      { question: "column flow?", options: ["उभी", "सपाट", "चौरस"], correct: 0 },
    ],
    challenge: {
      prompt: "dense chip grid तयार.",
      starterCode: `grid-auto-flow: dense with auto-rows`,
      expectedOutput: "Renders a dense packed chip grid",
    },
    interviewQuestions: ["g", "r", "i", "d", " ", "a", "u", "t", "o", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-clip-path", "css-counters-lists", "css-gradient-deep"],
    prev: "css-gradient-deep",
    next: "css-counters-lists",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-counters-lists",
    categoryId: "web",
    title: "Counters Lists",
    marathiTitle: "काउंटर आणि यादी",
    level: "advanced",
    minutes: 30,
    summary: "counter-reset, increment आणि display यादी.",
    sections: [
      { title: "1. काउंटर कल्पना", content: "काउंटर हा CSS मधील संख्या गिनती करणारा नियम आहे. HTML मधील कोणताही markup न करता भाग स्वतः नंबर केले जातात.\ncounter-reset ने संख्या 0 पासून सुरू होते. body वर reset केल्यास संपूर्ण document मध्ये क्रम सुरू होतो.\nविभाग, headings किंवा याद्या — कुठलाही ऑर्डर नियंत्रित करता येतो.\nअनुक्रम स्थिर आणि स्वयंसिद्ध असतो — सूची संपादनामुळे क्रम बिघडत नाही.", code: `body {
  counter-reset: section;
}`, codeLanguage: "css" },
      { title: "2. increment नियम", content: "counter-increment ने काउंटर पुढे टाकला जातो. प्रत्येक h2 नंतर counter वाढतो.\nदुसरे मूल्य म्हणजे increment चे मूल्य — काउंटर एक ने वाढतो.\n::before आणि content: counter(section) ने नंबर दिसतो.\nक्रम वाढतो आणि नवीन शाखा निर्माण होते. हीच सुविधा headings आणि sections ला स्वतः स्वयं नंबर देते.", code: `h2 {
  counter-increment: section;
}
h2::before {
  content: counter(section) ". ";
}`, codeLanguage: "css" },
      { title: "3. list style", content: "list-style हा यादीतील marker नियंत्रित करतो. साधा नियम — square inside, disc outside, decimal आणि असेच.\nमजकूर आणि marker च्या placement ची निवड करता येते.\nक्रम मजबूत असतो — edit नंतरही यादी संख्या आपोआप बदलते.\nसोपी आणि स्पष्ट रचना प्रत्येक ब्राउझरमध्ये स्थिर राहते.", code: `ul {
  list-style: square inside;
}`, codeLanguage: "css" },
      { title: "4. nested काउंटर", content: "nested काउंटर दोन स्तरांचा क्रम देतात. वर section counter आणि खाली subsection counter असतो.\nh3::before मध्ये counter(section) आणि counter(subsection) दोन्ही दाखवता येतात.\nप्रत्येक subsection increment होतो आणि नवीन विभागात नवीन क्रम सुरू होतो.\nअनुक्रम खोल व स्वयंसिद्ध — दस्तऐवज course material साठी अतिशय उपयुक्त.", code: `h3::before {
  content: counter(section) "." counter(subsection) " ";
  counter-increment: subsection;
}`, codeLanguage: "css" },
      { title: "5. @counter-style", content: "@counter-style हा नियम स्वतःचा counter style बनवतो. system आणि symbols मध्ये ठरवतात की क्रम कसा दिसेल.\ndevanagari सारख्या style सहज उपलब्ध आहेत — यादी संख्या मराठीत दिसतात.\ncustom symbols द्या — लाल, हिरवा, निळा असे सूचक.\nआधार मर्यादित असू शकतो, तपासणी ठेवा. हे आधुनिक तंत्र custom look शिवायच स्वतःची शैली देते.", code: `@counter-style marathi {
  system: cyclic;
  symbols: "१" "२" "३";
}
ol {
  list-style: marathi;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि उपयोग", content: "काउंटरचा आधार रुंद आहे. @counter-style हे नवीन वैशिष्ट्य काही browser मध्ये मर्यादित असू शकते.\naccessibility दृष्टीने marker स्पष्ट असावा — colourच्या आधारे फक्त ठरवू नका.\nसाधेपणा राखा — काउंटर खूप खोल होऊ नये.\nआधी default style तपासा मग custom जोडा. यामुळे कोणतीही रचना टिकते आणि प्रत्येकाला वाचता येते.", code: `ol {
  list-style: devanagari;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये दस्तऐवज भाग स्वयं-नंबर करतो. सेक्शन आणि उपविभाग सारखे दोन स्तर.\nsec counter increment केल्यावर ::before मध्ये dot सह संख्या दिसते.\nresume किंवा report मधील headings आपोआप sequence बनतात.\nहे छोटे project counters चा व्यावहारिक उपयोग दर्शवतो — क्रम बदलला तरी नंबर आपोआप नवीन होतात.", code: `h2::before {
  content: counter(sec) ". ";
  counter-increment: sec;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["reset काय?", "increment कसे?", "marker कुठे?"],
    quiz: [
      { question: "counter-reset?", options: ["शून्य", "दोन", "रंग"], correct: 0 },
      { question: "increment?", options: ["वाढ", "घट", "नाव"], correct: 0 },
      { question: "list-style?", options: ["marker", "color", "gap"], correct: 0 },
      { question: "nested?", options: ["दोन स्तर", "एक", "तीन"], correct: 0 },
    ],
    challenge: {
      prompt: "दस्ताऐवज 1.1 numbering साधा.",
      starterCode: `body { counter-reset: sec subs; }`,
      expectedOutput: "Renders auto-numbered section headings",
    },
    interviewQuestions: ["क", "ा", "उ", "ं", "ट", "र", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-shape-outside", "css-pseudo-classes", "css-gradient-deep"],
    prev: "css-grid-auto-flow",
    next: "css-shape-outside",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-shape-outside",
    categoryId: "web",
    title: "Shape Outside",
    marathiTitle: "shape-outside — मजकूर आकार",
    level: "advanced",
    minutes: 30,
    summary: "मजकूर float आकाराभोवती वाहतो.",
    sections: [
      { title: "1. आकार भोवती", content: "shape-outside हा float element चा आकार बदलतो आणि मजकूर त्याभोवती वाहतो. circle सह गोल image ची आसपास मजकूर फिरतो.\neditorial लेआउट मध्ये ही अद्वितीय रचना दाखवता येते.\nfloat नसल्यास shape लागू होत नाही — आधार म्हणून float आणि shape दोन्ही हवे.\nमजकूर आणि image यांचे सुंदर संतुलन मिळते. साधेपणा आणि परिणाम दोन्ही — हेच गुणधर्माचे वैशिष्ट्य.", code: `.pic {
  float: left;
  shape-outside: circle(50%);
}`, codeLanguage: "css" },
      { title: "2. polygon वाहणे", content: "polygon च्या आकाराने मजकूर वाकडा वाहतो. बिंदूंच्या coordinates नुसार रेष तयार होते.\nटक्के आणि pixels दोन्ही स्वीकारले जातात. आधार मोजा — आकार अचूक असावा.\nप्रत्येक बिंदूची स्थिती image च्या देखाव्याशी जुळवावी.\nअसा मार्ग widget व editorial layouts मध्ये छान दिसतो — मजकूर स्वाभाविकपणे वाहतो.", code: `.blob {
  float: left;
  width: 220px;
  shape-outside: polygon(0 0, 100% 0, 85% 100%, 0 100%);
}`, codeLanguage: "css" },
      { title: "3. float अंतर", content: "float चे annotation element च्या बाजूला ठेवता येते. shape-margin हे element आणि मजकूरातील अंतर नियंत्रित करते.\nजागा गुळगुळीत ठेवण्यासाठी margin आवश्यक आहे — मजकूर खूप जवळ येत नाही.\nquote-float चा वापर करून अवतरण विशेष ठिकाणी दाखवता येते.\nपट मोकळी लागते आणि वाचन स्पष्ट राहते. परिच्छेद स्वच्छ दिसतो.", code: `.quote-float {
  float: right;
  shape-outside: margin-box;
  shape-margin: 14px;
}`, codeLanguage: "css" },
      { title: "4. image alpha", content: "shape-from-image मध्ये image च्या alpha वर आधारित आकार तयार होतो. हे प्रगत तंत्र आहे.\nleaf सारखी image मधून मजकूर तिच्या आकाराभोवती वाहतो — सुंदर प्रभाव.\nshape-image-threshold 0.5 म्हणजे कोणता alpha चा भाग आकार म्हणून गणू.\nआधार तपासून प्रयोग करा — काही ब्राउझर मर्यादित असू शकतात.", code: `.leaf {
  float: left;
  shape-outside: url(leaf.png);
  shape-image-threshold: 0.5;
}`, codeLanguage: "css" },
      { title: "5. break नियम", content: "आकाराभोवती मजकूर वाहवताना break नियम आवश्यक आहेत. मजकूर ओळींमध्ये तुटण्याची योग्य जागा दिली पाहिजे.\nshape-margin ने जागा उघडी राहते. overflow: hidden ने ब्लॉक साफ राहतो.\nखालील ओळी आकाराच्या खाली येऊन सरळ चालतात.गणना ठीक असल्यास मजकूर कधीही आकारावर चढत नाही.\nवाचन व्यवस्थित आणि स्वच्छ ठेवण्यासाठी हे महत्त्वाचे.", code: `.wrap {
  float: none;
}
.shape-block {
  overflow: hidden;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "shape-outside चा आधार मध्यम आहे. जुने ब्राउझर आकार विचारात घेत नाहीत — मजकूर सरळ जातो.\nमजकूर नेहमी स्पष्ट राहतो — आकार कोणताही असो.\nलहान स्क्रीनवर (max-width 480px) आकार बंद करून मजकूर पूर्ण जागेत ठेवा.\nmedia query मध्ये conforming layout तपासणे प्रत्येक device साठी उत्तम.", code: `@media (max-width: 480px) {
  .pic {
    float: none;
    shape-outside: none;
    width: 100%;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये बातमीतील image वाकडा करतो. news-img ला float left आणि shape-outside: circle(40%) देतो.\nमजकूर त्या वर्तुळाभोवती वाहतो — पहिले ओळ आकाराशी जुळते.\ncircle ची त्रिज्या बदलून image चा प्रभाव नियंत्रित केला जातो.\nहे छोटे project show करतो की मजकूर पारंपरिक box पेक्षा अधिक रोचकपणे वाहू शकतो.", code: `.news-img {
  float: left;
  shape-outside: circle(40%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["shape काय?", "margin कसे?", "break कुठे?"],
    quiz: [
      { question: "shape-outside?", options: ["आकार", "रंग", "फॉन्ट"], correct: 0 },
      { question: "float लागतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "shape-margin?", options: ["अंतर", "जाडी", "नाव"], correct: 0 },
      { question: "image alpha?", options: ["पारदर्शक", "कडक", "मोठा"], correct: 0 },
    ],
    challenge: {
      prompt: "circle avatar उजवीकडे तरंग.",
      starterCode: `.avatar { float: right; shape-outside: circle(50%); }`,
      expectedOutput: "Renders text flowing around a circular avatar",
    },
    interviewQuestions: ["s", "h", "a", "p", "e", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-counters-lists", "css-clip-path", "css-scrollbar-style"],
    prev: "css-counters-lists",
    next: "css-scrollbar-style",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-scrollbar-style",
    categoryId: "web",
    title: "Scrollbar Style",
    marathiTitle: "scrollbar — देखावा नियम",
    level: "advanced",
    minutes: 30,
    summary: "scrollbar-color, width आणि custom नियम.",
    sections: [
      { title: "1. scrollbar प्रकार", content: "स्क्रोलबारचा देखावा बदलता येतो. रुंदी आणि रंग दोन्ही नियंत्रित करता येतात.\nscrollbar-width: thin ने स्क्रोलबार जाडी कमी होते. scrollbar-color ने thumb आणि track चे रंग दिले जातात.\nखास ठिकाणी रंग देऊन UI मध्ये सातत्य आणता येते.\nस्वच्छ, साधा देखावा वापरकर्त्याला आनंद देतो — स्क्रोलमध्येही शैली दिसते.", code: `.outer {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 #e2e8f0;
}`, codeLanguage: "css" },
      { title: "2. scrollbar-width", content: "scrollbar-width चे मूल्य thin किंवा auto असते. हे प्रत्येक मुख्य browser मध्ये समजले जाते.\nसोपी लाइनर — width कमी केल्यावर स्क्रोलबार लहान आणि कमी आक्रमक होतो.\nमोठा scrollbar नको असेल तर thin हा योग्य पर्याय.\nपेज खूप कमी जागा घेते — दृश्य अधिक मोकळे दिसते.", code: `.panel {
  scrollbar-width: thin;
}`, codeLanguage: "css" },
      { title: "3. scrollbar-color", content: "scrollbar-color ला दोन मूल्ये — thumb आणि track — आवश्यक. प्रथम thumb चा रंग, दुसरा background चा.\nसुसंगत रंग निवडून design ला जोडता येते. dark theme मध्ये गडद thumb ट्रॅक उत्तम दिसतो.\nकंट्रास्ट जपा — thumb स्पष्ट दिसला पाहिजे.\nहे गुणधर्म साधे आणि स्थिर आहे — स्क्रॉलबारचा देखावा सर्वत्र एकसारखा राहतो.", code: `.dark {
  background: #0f172a;
  scrollbar-color: #64748b #1e293b;
}`, codeLanguage: "css" },
      { title: "4. webkit नियम", content: "::-webkit-scrollbar हा webkit browsers मधील सविस्तर नियम आहे. Chrome आणि सफारी साठी विशेष styling.\nthumb आणि track चे रंग, width आणि border-radius दिले जाते. gradient thumb सुद्धा शक्य.\nइतर browser मध्ये हे नियम लागू होत नाहीत — फॉलबॅक आवश्यक.\ncss prefix चा विचार करा — newer versions वेगळ्या रीतीने कार्य करतात. जुने स्वरूप न उरले पाहिजे.", code: `.list::-webkit-scrollbar {
  width: 10px;
}
.list::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 8px;
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "प्रवेश्यता दृष्टीने स्क्रोलबार दिसणारा ठेवा. रंग फिकट असल्यास user ला स्क्रोल शक्यता कळत नाही.\nथंड रंग पेक्षा स्वच्छ, स्पष्ट thumb आवश्यक.\nकीबोर्ड tab आणि scroll साठी scroll-behavior: smooth उपयोगी.\nप्रत्येक स्थितीत संपूर्ण स्क्रॉलपणा दृश्यमान राहतो — हीच वापरकर्त्यांसाठी सुरक्षित निवड आहे.", code: `.scroll {
  overflow: auto;
  scroll-behavior: smooth;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "scrollbar-color चा आधार मजबूत आहे. webkit फक्त Chrome सारख्यांमध्ये असते — म्हणून दोन्ही नियम एकत्र देतात.\nसर्व browsers मध्ये साधा पर्याय चालतो; webkit ने अतिरिक्त सुधारणा होतात.\nदोन्ही नियमांनी परिणाम एकत्र — सर्वत्र आकर्षक स्क्रॉलबार दिसतो.\nप्रवाह प्रत्येक browser मध्ये तपासतो आणि कोड सुरक्षित ठेवतो.", code: `.box {
  scrollbar-width: thin;
  scrollbar-color: #dc2626 #fecaca;
}
.box::-webkit-scrollbar {
  width: 8px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये chat panel च्या scrollbar चा रंग बदलतो. dark theme मध्ये #38bdf8 हे निळसर thumb आणि गडद track वापरला जातो.\nchip येथे scrollbar-color दिल्याने chat window ला brand रंग मिळतो.\nहे खास element च्या आत — संपूर्ण पेजवर नव्हे — स्क्रॉलबार रंगवतो.\nअशा लहान सुधारणांमुळे UI अधिक welded आणि परिपूर्ण दिसते.", code: `.chat {
  scrollbar-color: #38bdf8 #0f172a;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["width काय?", "color कसे?", "webkit कुठे?"],
    quiz: [
      { question: "scrollbar-width?", options: ["thin", "bold", "large"], correct: 0 },
      { question: "color मूल्ये?", options: ["दोन", "तीन", "चार"], correct: 0 },
      { question: "webkit?", options: ["क्रोम", "फायर", "सफारी"], correct: 0 },
      { question: "जुने ब्राउझर?", options: ["साधा", "रंगीत", "गहि"], correct: 0 },
    ],
    challenge: {
      prompt: "dark chat scrollbar साधा.",
      starterCode: `.chat { scrollbar-width: thin; scrollbar-color: #38bdf8 #0f172a; }`,
      expectedOutput: "Renders a thin themed scrollbar",
    },
    interviewQuestions: ["s", "c", "r", "o", "l", "l", "b", "a", "r", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-shape-outside", "css-stacking-context", "css-viewport-units"],
    prev: "css-shape-outside",
    next: "css-stacking-context",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-stacking-context",
    categoryId: "web",
    title: "Stacking Context",
    marathiTitle: "stacking — दृश्य थर",
    level: "advanced",
    minutes: 30,
    summary: "z-index, position आणि थर नियम.",
    sections: [
      { title: "1. थर कल्पना", content: "घटक थरांमध्ये निवडतात — z-index ची मदत येथे होते. position सोबत z-index अर्थपूर्ण होते.\nजास्त झाकणारा भाग वर येतो. थरांची शिस्त समजणे महत्त्वाचे.\nvisual ची व्यवस्था काळजीपूर्वक करावी लागते — header पेक्षा modal नेहमी वरचा.\nहे संकल्पना subtle आहे, पण comprehension साठी महत्त्वपूर्ण.", code: `.over {
  position: relative;
  z-index: 10;
}`, codeLanguage: "css" },
      { title: "2. position भूमिका", content: "position relative असल्यास z-index लागू होतो. relative हा संपूर्ण context तयार करत नाही, पण नेहमी ऑर्डर करतो.\nfixed आणि absolute हे panel चे ठिकाण निवडतात. z-index चा क्रम स्पष्ट ठेवला पाहिजे.\nप्रत्येक stack element च्या ऑर्डरची जाणीव हवी.\nप्रत्येक क्रम स्पष्ट राहतो आणि मधल्या घटकांमध्ये गोंधळ नाही होत.", code: `.all {
  position: fixed;
  z-index: 100;
}`, codeLanguage: "css" },
      { title: "3. z-index नियम", content: "z-index auto मध्ये अनिश्चितता असते — order अधिक dependent असतो. मोठी संख्या म्हणजे वरचा थर.\ntransform सोबत नवीन stacking context तयार होतो — सर्वात मागे असलेल्या संदर्भातील मुले वर येत नाहीत.\nप्रत्येक संदर्भ आतल्या क्रमाची जबाबदारी असतो. root मध्ये साधी संख्या विकेंद्रीत ठेवा.\nसर्व element ला किमान numeric z-index द्या — क्रम अंदाजात ठेवता येईल.", code: `.a {
  position: relative;
  z-index: 5;
}
.b {
  position: relative;
  z-index: 9;
}`, codeLanguage: "css" },
      { title: "4. संदर्भ निर्मिती", content: "काही गुणधर्म नवीन stacking context तयार करतात. opacity 0.8, filter, transform, position — अशी उदाहरणे.\ntransform असलेल्या element मध्ये सर्व मुले एकत्र एकच आधार म्हणून वागतात.\nपॅरेंट context पूर्णपणे संदर्भात बसतो — z-index सोबत फरक करतो.\nहे समजून घेतल्यास अचानक display mismatch टाळता येतो.", code: `.glass {
  opacity: 0.8;
}
.card {
  filter: drop-shadow(0 0 4px #000);
}`, codeLanguage: "css" },
      { title: "5. modal नियम", content: "modal चे नियम सोपे असतात — overlay मागे राहतो आणि मोठा येतो z-index देतो.\nफिक्स्ड overlay मध्ये inset 0 ने पूर्ण पडदा झाकला जातो. background अर्धपारदर्शक असल्यास मागील दिसते.\nmodal ला overlay पेक्षा मोठा z-index देतो.\nकीबोर्ड management — Esc दाबून modal बंद होणे — आवश्यक. reserve साठी मोठा क्रम ठेवा.", code: `.overlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 40%);
  z-index: 50;
}
.modal {
  position: fixed;
  z-index: 60;
}`, codeLanguage: "css" },
      { title: "6. आधार आणि सवय", content: "z-index सर्व ब्राउझरमध्ये चालतो. बहुतेक थर टाळणे हीच चांगली सवय — गोंधळ कमी राहतो.\nस्पष्ट numbering मधून क्रम सहज समजतो. उदा. 1 ते 999 दरम्यान साधा क्रम.\nप्रत्येक संदर्भ स्वतंत्रपणे test करा — एकाच ठिकाणी सर्व तपासणी न करता.\nसध्या सोपे ठेवा — content आणि संदर्भ यथायोग्य राहतात.", code: `.top {
  z-index: 999;
}
.bottom {
  z-index: 1;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये tooltip element वर ठेवतो. absolute position आणि z-index 30 ने tooltip button च्या वर दिसते.\nजवळचा modal context चा आधार राहतो.\nz-index सोबत position ने tooltip नेहमी वरचा दिसतो — संपूर्ण layout मध्ये.\nहे सोपे उदाहरण stacking function समजवते.", code: `.tooltip {
  position: absolute;
  z-index: 30;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["थर काय?", "z-index कसे?", "modal कुठे?"],
    quiz: [
      { question: "z-index?", options: ["क्रम", "रंग", "नाव"], correct: 0 },
      { question: "position लागतो?", options: ["होय", "नाही", "मागे"], correct: 0 },
      { question: "transform?", options: ["संदर्भ", "रंग", "गीत"], correct: 0 },
      { question: "overlay?", options: ["थर", "टीप", "काळफ"], correct: 0 },
    ],
    challenge: {
      prompt: "tooltip above button साधा.",
      starterCode: `.btn { position: relative; } .tip { position: absolute; z-index: 20; }`,
      expectedOutput: "Renders a tooltip above its button",
    },
    interviewQuestions: ["s", "t", "a", "c", "k", "i", "n", "g", " ", "स", "ं", "द", "र", "्", "भ", "?"],
    related: ["css-scrollbar-style", "css-pseudo-classes", "css-viewport-units"],
    prev: "css-scrollbar-style",
    next: "css-pseudo-classes",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-pseudo-classes",
    categoryId: "web",
    title: "Pseudo Classes",
    marathiTitle: "पseudo-classes — अद्वितीय निवड",
    level: "advanced",
    minutes: 30,
    summary: ":is :where :not आणि nth नियम.",
    sections: [
      { title: "1. :is() नियम", content: ":is() ही pseudo-class एकत्र selectors ला जोडते. h1, h2, h3 अशा अनेक selector एकाच नियमात मिळवला जातो.\nकमी वाक्य म्हणजे less repetition — कोड स्वच्छ. सगळ्या selectors मध्ये एकाच नियम लागू होतो.\nसर्वात मोठा (सर्वात जास्त जुळणारा) selector ची specificity म्हणून.\nसोपे सोयीचे — सोबत जटिल regulator असल्यास सर्वात जोडून वापरा.\nसरावाने selector मिश्रण पक्के आणि अचूक बनते.", code: `:is(h1, h2, h3) {
  margin-top: 1.5em;
}`, codeLanguage: "css" },
      { title: "2. :where() वजन", content: ":where() ही specificity शून्य करते. त्यामुळे लहान selectors ची जास्तीची गरज नसते.\nसर्वात जुळणारा नियम सापेक्ष ठेवतो — तुमच्या नवीन नियमाला precedents मिळते.\nnav, footer अशा ठिकाणी हलके default मूल्ये सुरक्षित.\nउपयोग सुरक्षित आणि शिस्तबद्ध — जिथे स्टाइल ओव्हरराइट करणे सोपे हवे.\nही चांगली सवय आहे — साझा नियम म्हणून याचा वापर केला तर कोणतीही गोंधळ नाही.", code: `:where(nav, footer) a {
  color: #475569;
}`, codeLanguage: "css" },
      { title: "3. :not() उलट", content: ":not() मध्ये नकार दिला जातो — जुळणा-या घटकांना सोडून उर्वरित निवडतो.\nएक किंवा अनेक selectors देतात. कालबाह्य किंवा अनावश्यक elements वगळले जातात.\nspecificity मध्ये :not() ची जोडणी होते — त्या आतल्या selector च्या वजनाइतकी.\nगरज अचूक निवडण्यासाठी स्पष्ट नियम लिहा — नकार चुकल्यास आश्चर्य नाही.\nनियम कडक आणि वाचला जाणारा — parent-child संबंध स्पष्टसमजण्यासारखे.", code: `li:not(:last-child) {
  border-bottom: 1px solid #e2e8f0;
}`, codeLanguage: "css" },
      { title: "4. nth गणित", content: "nth-child गणिती निवड करते — An+B formula वापरतो. 3n मधील तिसरा घटक निवडतो.\nodd आणि even सोपे वारंवार उपयोगी — zebra स्ट्राईप.\nपहिला आणि शेवटचा भाग विशेष ठिकाणी प्रमुख.\nक्रम तपासा — गणना वेळी आधार meaning होतो.\nप्रगती नमुन्यांतर medium — अधिक advance design साठी हे पाया.", code: `tr:nth-child(odd) {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "5. :target भेद", content: ":target हे निवडल्या लिंकच्या भागाला लक्षात घेते. id फ्रेगमेंट नुसार element च्या target-class ला styles लागतात.\nउदा. section:target background highlight होतो — वाचक नेमके कोणते भाग बघतो ते स्पष्ट.\nइतर link नवा — फक्त समोरचा भाग अधोरेखित.\nफक्त त्या भागाची ओळख उपयुक्त — शुद्ध CSS मध्ये हा simplest JS-free feedback आहे.\nआत्मविश्वास वाढतो — प्रत्येक स्थितीत दृश्य प्रत्युत्तर मिळते.", code: `section:target {
  background: #fef9c3;
}`, codeLanguage: "css" },
      { title: "6. संयोग सवय", content: "एकत्र :is, :where आणि :not वापरता येतात. specificity चे नियम जपणे महत्त्वाचे — नियमांचा क्रम म्हणून तोडायचा नाही.\n:where मध्ये light wrapper, :is मध्ये meaningful selectors आणि :not ने exceptions.\nवाक्य वाचता येते — जटिलता शक्य तितकी कमी.\nआधार मजबूत — सर्व browsers ही pseudo-classes समजतात.\nसरावाने selector संयोजन मजबूत आणि अचूक होते.", code: `:where(article) :is(h2, h3):not(:first-child) {
  margin-top: 1em;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये कार्ड यादीची निवड सुधारतो. list li:nth-child(odd) ने alternate background देतो.\nzebra appearance अधिक readable आणि आकर्षक — आढळ सुधारते.\nhover स्थितीसह gray rows स्पष्ट दिसतात.\n\nहे सोपे स्टायलीकरण उदाहरण pseudo-class च्या daily उपयोगाचा नमुना आहे.", code: `.list li:nth-child(odd) {
  background: #eef2ff;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: [":is काय?", ":where जड?", ":not कसे?"],
    quiz: [
      { question: ":is()?", options: ["जोड", "तोड", "रंग"], correct: 0 },
      { question: ":where() वजन?", options: ["शून्य", "उच्च", "मध्य"], correct: 0 },
      { question: ":not()?", options: ["नकार", "जोड", "वाढ"], correct: 0 },
      { question: "nth-child?", options: ["गणित", "रंग", "नाव"], correct: 0 },
    ],
    challenge: {
      prompt: "odd rows accent साधा.",
      starterCode: `.list li:nth-child(odd) { background: #eef2ff; }`,
      expectedOutput: "Renders a zebra-striped list",
    },
    interviewQuestions: ["p", "s", "e", "u", "d", "o", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-stacking-context", "css-counters-lists", "css-viewport-units"],
    prev: "css-stacking-context",
    next: "css-viewport-units",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-viewport-units-2",
    categoryId: "web",
    title: "Viewport Units",
    marathiTitle: "viewport units — आकार एकक",
    level: "advanced",
    minutes: 30,
    summary: "dv, sv, lv आणि container units.",
    sections: [
      { title: "1. vw vh नियम", content: "vw रुंदीच्या टक्क्यांना सादर करते आणि vh उंचीच्या. 100vh म्हणजे पूर्ण पडद्याची उंची.\nHero आणि full-screen sections साठी 100vh ही ठीक सुरुवात.\nआधार मजबूत — सर्व browsers मध्ये चालते.\nपण भिंग वापरताना खबरदारी — उंची लहान डिव्हाइसवर समस्या देऊ शकते. body scroll होत नाही.", code: `.full {
  height: 100vh;
}`, codeLanguage: "css" },
      { title: "2. dvh बदल", content: "dvh ही dynamic viewport height आहे. address bar दिसणे-न दिसणे यासह उंची बदलत राहते.\nमोबाईलवर 100dvh म्हणजे visually उपलब्ध जागा.\nनवीन — पण section layout साठी अधिक अचूक.\nप्रत्येक परिस्थितीत योग्य मूल्य chose करणे सोपे होते.\nआधार विस्तारत असल्यामुळे 100vh सोबत fallback द्या.", code: `.hero-phone {
  height: 100dvh;
}`, codeLanguage: "css" },
      { title: "3. svh आणि lvh", content: "svh सर्वात लहान दृश्य उंची आणि lvh सर्वात मोठी उंची दर्शवते.\nsvh उपयोग जेव्हा address bar दिसतो तेव्हा content फिट करणे हवे.\nlvh ही पूर्ण उंची दर्शवते.\nकीबोर्ड खुला असल्यास svh प्रकार सुरक्षित —\nनवीन browser मध्ये तपासून योग्य मूल्य वापरा.", code: `.safe {
  height: 100svh;
}
.wide {
  height: 100lvh;
}`, codeLanguage: "css" },
      { title: "4. container units", content: "container units — cqw, cqh, cqi, cqb — कंटेनरच्या size वर आधारित असतात. container-type: inline-size सांगतो.\ncqi ही inline direction ची unit — font आणि spacing variant साठी उत्तम.\nकंटेनरच्या आकारावर अवलंबून — घटक आपोआप adapt होतो.\ncontainer queries सोबत हे units वेगळे new level देते.\nस्वतंत्र वाचन होते — लहान wrapper मध्ये वेगळे font size.", code: `.card {
  container-type: inline-size;
}
.card .btn {
  font-size: 2cqi;
}`, codeLanguage: "css" },
      { title: "5. एकत्र नियम", content: "एकत्र units वापरताना clamp() ने नियंत्रण मिळते. font-size: clamp(1rem, 3cqi, 2.2rem) सारखे गरजेनुसार adjust होते.\nmin-max दरम्यानचे मूल्य बदलते — स्मार्ट प्रतिसाद.\nएककांचा क्रम — unit चा आधार tags नुसार ठेवा.\nप्रत्येक गरज breakpoint ऐवजी container आधारावर सांभाळता येते.\nप्रमाण स्थिर राहण्यास मदत होते.", code: `.type {
  font-size: clamp(1rem, 3cqi, 2.2rem);
}`, codeLanguage: "css" },
      { title: "6. आधार तपास", content: "dvh चा आधार नवीन आहे. @supports मध्ये height: 100dvh तपासून fallback जोडा.\nजुन्या browser मध्ये 100vh वापरतो — दोन्ही चालतात.\nमोबाईलवर प्रयोग आवश्यक — dvh बदलणाऱ्या परिस्थितीत दिसतो.\nसुरक्षित मोड — मुख्य लेआउट कधीही तुटत नाही.", code: `.page {
  min-height: 100vh;
}
@supports (height: 100dvh) {
  .page {
    min-height: 100dvh;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये full-screen CTA बनवतो. min-height: 100dvh सह CTA मोबाईल पडद्यावर पूर्ण उभा राहतो.\ncontent vertical मध्ये संतुलित. आधार तपासणी जोडल्यास जुने browser 100vh वापरतात.\nहा छोटा project viewport units चा व्यावहारिक नियम दर्शवतो — हिरवे mode आणि fallback दोन्ही.", code: `.cta {
  min-height: 100dvh;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["vw काय?", "dvh कुठे?", "cqi कसे?"],
    quiz: [
      { question: "100vh?", options: ["पूर्ण", "अर्धा", "रंग"], correct: 0 },
      { question: "dvh?", options: ["डायनॅमिक", "साधा", "जाड"], correct: 0 },
      { question: "svh?", options: ["लहान", "मोठा", "मध्य"], correct: 0 },
      { question: "cqi?", options: ["कंटेनर", "पेज", "फॉन्ट"], correct: 0 },
    ],
    challenge: {
      prompt: "मोबाईल full cta साधा.",
      starterCode: `.cta { min-height: 100dvh; }`,
      expectedOutput: "Renders a full-height call-to-action block",
    },
    interviewQuestions: ["u", "n", "i", "t", "s", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-pseudo-classes", "css-media-ranges", "css-scrollbar-style"],
    prev: "css-pseudo-classes",
    next: "css-media-ranges",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-media-ranges",
    categoryId: "web",
    title: "Media Ranges",
    marathiTitle: "media ranges — आकार सीमा",
    level: "advanced",
    minutes: 30,
    summary: "range syntax आणि container ranges.",
    sections: [
      { title: "1. range वाक्य", content: "आधुनिक media query मध्ये range syntax थेट लिहिता येते. width >= 700px मध्ये operator सह स्पष्ट नियम.\nजुने min-width मधील नियम अजूनही चालतो. नवीन वाचन सोपे आणि arithmetic स्पष्ट.\nheight सुद्धा अशाच स्वरूपात प्रश्न करता येते.\nवाचन सोपे — अटी गणितासारख्या लिहितात.", code: `@media (width >= 700px) {
  .main {
    display: grid;
  }
}`, codeLanguage: "css" },
      { title: "2. and range", content: "दोन value दरम्यानच्या range साठी and जोडी वापरता येते. 400px width रुंदी मध्ये 800px दरम्यानचे device.\nदोन्ही side ची संख्या स्पष्ट — width асनियमशी जोडलेले.\nअचूक श्रेणी निगमन सोपे.\nप्रत्येक device चा आकार breakpoint च्या आत वेगळा लेआउट प्राप्त होतो.\nही लहान वाचनीयता व्यावसायिक दस्तआवज्यात विशेष उपयुक्त.", code: `@media (400px <= width <= 800px) {
  .panel {
    grid-template-columns: 1fr 1fr;
  }
}`, codeLanguage: "css" },
      { title: "3. orientation", content: "orientation सरळ निर्णय देतो. portrait उभा, landscape सपाट दृश्य.\nhero layout landscape मध्ये flex-direction: row आणि portrait मध्ये column ठरतो.\nrange operator orientation नाही लागत — स्थिती आधारित निवड.\nमोबाईल स्क्रीन वर orientation ने component बदलता येते.\nदृश्यbinding भिन्नतेनुसार नियंत्रण सोपे होते.", code: `@media (orientation: landscape) {
  .hero {
    flex-direction: row;
  }
}`, codeLanguage: "css" },
      { title: "4. container ranges", content: "container queries मध्ये range समान syntax असते. @container (width >= 320px) ने घटक नियंत्रित होतो.\ncqi units मध्ये मोजल्यास आकाराशी संबंध पकडला जातो.\nमीडिया अटी पेक्षा हे अधिक लवचिक — कंटेनरच्या आकारावर अवलंबून.\nसंदर्भ सॉफ्ट — component design तयार होते.\nहे आधुनिक तंत्र नवीन आधार क्षेत्र उघडते.", code: `@container (width >= 320px) {
  .item {
    font-size: 1.2rem;
  }
}`, codeLanguage: "css" },
      { title: "5. आधार संवाद", content: "range चा आधार दृढ आहे. media query च्या आत @supports मध्ये उपयोग करता येते.\nप्रत्येक environment मध्ये स्थिरता राखता येते.\nअचूक determination — width वर आधारित निर्णय.\nतपासणी सवय — प्रत्येक change नंतर पडद्यावर look करा.", code: `@media (width < 480px) and (prefers-color-scheme: dark) {
  body {
    font-size: 18px;
  }
}`, codeLanguage: "css" },
      { title: "6. उपयोग सवय", content: "तेजस्वी गणित म्हणजे श्रेणी समजणे सोपे — 700px ते 1000px मधील device साठी नियम.\nवाचकाला अर्थ — breakpoint चा क्रम दृश्यमान.\nश्रेणी तपासल्यास कुठलाही विभाग दुरुस्त करणे सोपे होते.\nप्रत्येक change पडद्यावर पाहून वाचनीयता दाट — नेहमी अंतिम तपासणी.\nहे आधुनिक syntax अधिक developers मधील सामान्य सवय बनत आहे.", code: `@media (700px <= width <= 1000px) {
  .article {
    max-width: 40ch;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये 600px ते 900px दरम्यान दोन-स्तंभी grid साधतो. range query फक्त त्या आकारात लागू होतो.\nयाआधी एक स्तंभ, यानंतर तीन — साधे आणि नेमके.\nही scrollbar free, मजेदार, न चुकणारी सहज नियंत्रणे दाखवते.\nअशा range नियमांनी प्रत्येक device चा आकार व्यवस्थित साधला जातो.", code: `@media (600px <= width <= 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["range काय?", "antara कसे?", "container कुठे?"],
    quiz: [
      { question: "width >= ?", options: ["सीमा", "रंग", "नाव"], correct: 0 },
      { question: "<= मध्ये?", options: ["श्रेणी", "साधा", "फॉन्ट"], correct: 0 },
      { question: "(400 <= w <= 800)?", options: ["दोन्ही", "एक", "नाही"], correct: 0 },
      { question: "container range?", options: ["cqi", "vw", "px"], correct: 0 },
    ],
    challenge: {
      prompt: "लहान त्प मोठा grid साधा.",
      starterCode: `@media (width >= 900px) { .grid { grid-template-columns: repeat(3, 1fr); } }`,
      expectedOutput: "Renders a responsive grid via range queries",
    },
    interviewQuestions: ["m", "e", "d", "i", "a", " ", "r", "a", "n", "g", "e", " ", "आ", "ध", "ा", "र", "?"],
    related: ["css-viewport-units", "css-border-effects", "css-pseudo-classes"],
    prev: "css-viewport-units",
    next: "css-border-effects",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-border-effects",
    categoryId: "web",
    title: "Border Effects",
    marathiTitle: "border effects — काठ नियम",
    level: "advanced",
    minutes: 30,
    summary: "border-image, dotted आणि तोल.",
    sections: [
      { title: "1. border मूलभूत", content: "border हा घटकाचा काठ सजवतो. solid, dashed असे style ने दिसतो.\n2px solid ठोस आणि स्पष्ट किनारी दर्शवते.\nborder-radius गुळगुळीत कोपरे देतो — 10px म्हणजे थोडे rounded.\nसाधा प्रारंभ — प्रथा नुसार सुरुवात दर्शवते.\nप्रत्येक ब्राउझरमध्ये हा नियम चालतो — विश्वासार्हता.", code: `.box {
  border: 2px solid #0891b2;
  border-radius: 10px;
}`, codeLanguage: "css" },
      { title: "2. border-image", content: "border-image प्रतिमेच्या भागांची व्यवस्था करतो. slice ने भाग विभागले जातात.\nborder: 14px solid transparent आवश्यक — image 14 भागात कापला जातो.\nrepeat किंवा stretch ने भाग पुनरावृत्त होतात. एकसारखी कापणी frame साठी उत्तम.\nआधार मर्यादित — border-radius बरोबर काही browsers मध्ये जोडत नाही.", code: `.frame {
  border: 14px solid transparent;
  border-image: url(rope.png) 14 round;
}`, codeLanguage: "css" },
      { title: "3. double आणि groove", content: "double आणि groove हे border styles विशेष देखावा देतात. double दुहेरी काठ दर्शवतो.\ngroove खड्ड्याच्या रूपाची सीमा दर्शवतो.\noutset उंच भाग दर्शवतो — 3D सारखा. प्रत्येक style चा स्वतःचा visual आकार आहे.\nरंग नेमका दिल्यास परिणाम अधिक स्पष्ट होतो.\nजुना देखावा modern इंटरफेसमध्ये क्वचित वापरला जातो, पण साध्याने उपयोगी.", code: `.groove {
  border: 6px groove #64748b;
}`, codeLanguage: "css" },
      { title: "4. radius रहस्य", content: "border-radius चे टक्केवारी मूल्ये प्रमाणानुसार गोल होतात. 50% म्हणजे वर्तुळ — square फुल गोल.\nव्यासाच्या अर्ध्या जागेत कोपरे सर्वांना जुळतात.\nएक रचना विषम — वेगवेगळ्या कोपऱ्यांना वेगळी मूल्ये लिहिता येतात.\nअंडाकृती किंवा pill साठी 999px सारखी मोठी संख्या वापरता येते.\nहे गुणधर्म avatar, button व card सर्वत्र उपयोगी.", code: `.circle-avatar {
  border-radius: 50%;
  aspect-ratio: 1;
}`, codeLanguage: "css" },
      { title: "5. clip रेषा", content: "gradient काठ बनवण्यासाठी background-clip पद्धती वापरता येते. border 3px solid transparent आधी.\nदोन gradients मध्ये padding-box आणि border-box विभागले जातात.\nlinear-gradient सह रंग काठावर दिसतो.\nहे चित्रात्मक काठ modern card design मध्ये आकर्षक दिसते.\nरंग सीमा आणि देखावा दोन्ही अचूक राहतात.", code: `.grad {
  border: 3px solid transparent;
  background: linear-gradient(#fff, #fff) padding-box,
              linear-gradient(90deg, #6366f1, #ec4899) border-box;
}`, codeLanguage: "css" },
      { title: "6. आधार", content: "border आधार सर्व ब्राउझरमध्ये आहे. border-image मात्र नवे तंत्र.\nप्रत्येक घटकाची किनार नियमानुसार — शिस्तबद्ध रचना.\nकोड साधा ठेवा — गरज भासली तरच प्रगत तंत्र.\noutline हे देखावा साठी विशेष — हे border नाही, पण सूचना देते.\nआकृती तपासल्यास प्रत्येक काठ सुशोभित होतो.", code: `.outline {
  outline: 2px solid #7c3aed;
  outline-offset: 3px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये gradient काठ तयार करतो. card ला border 2px solid transparent दिला जातो.\nborder-image मध्ये linear-gradient रंग ठेवला जातो — उजव्या-डाव्या gradient दिशा.\nआधुनिक pinch — gradient border शिवाय code सोपे.\nहे उदाहरण border effects च्या शक्यता दाखवते — square पेक्षा जास्त रोचक.", code: `.card {
  border: 2px solid;
  border-image: linear-gradient(90deg, #6366f1, #ec4899) 1;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["border काय?", "image कसे?", "gradient कुठे?"],
    quiz: [
      { question: "border-style?", options: ["solid", "रंग", "सावली"], correct: 0 },
      { question: "border-image?", options: ["प्रतिमा", "फॉन्ट", "एकक"], correct: 0 },
      { question: "border-radius?", options: ["कोपरा", "रंग", "नाव"], correct: 0 },
      { question: "gradient काठ?", options: ["पॅडिंग", "मार्जिन", "उंची"], correct: 0 },
    ],
    challenge: {
      prompt: "gradient outline card साधा.",
      starterCode: `.card { border: 2px solid transparent; border-image: linear-gradient(90deg, #6366f1, #ec4899) 1; }`,
      expectedOutput: "Renders a card with gradient border",
    },
    interviewQuestions: ["b", "o", "r", "d", "e", "r", " ", "उ", "प", "य", "ो", "ग", "?"],
    related: ["css-media-ranges", "css-clip-path", "css-gradient-deep"],
    prev: "css-media-ranges",
    next: "css-marathi-capstone5",
    levelLabel: CSS5_LABEL,
  },
  {
    slug: "css-marathi-capstone5",
    categoryId: "web",
    title: "Marathi Capstone 5",
    marathiTitle: "Visual portal — अंतिम देखावा",
    level: "advanced",
    minutes: 30,
    summary: "सर्व Level 5 तंत्रांचा संग्रह.",
    sections: [
      { title: "1. ध्येय", content: "ध्येय म्हणजे visual portal एकच पद. ग्रेडियंट ध्वज, काउंटर विभाग आणि shapes सर्व Level 5 तंत्रे जमवली जातात.\nहे portal दृश्य सौंदर्यावर आधारित — shape, cut आणि precise आकार यांचे दर्शन.\nसुरुवात tag च्या clip-path ने होते — portal ची ओळख.\nअंतिम portal खुला आणि आधुनिक — सर्व तंत्रांचे मिलन.", code: `.tag {
  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
}`, codeLanguage: "css" },
      { title: "2. पट्टे ध्वज", content: "पट्टे-ध्वज हा भाग ग्रेडियंटचा प्रभाव दाखवतो. header मध्ये repeating-linear-gradient ने रंगीत पट्ट्या तयार होतात.\n45deg आणि 14px-28px stops सह नियमित नमुना.\nसंग्रह रंगीत दिसतो आणि नजर खेचतो.\nसंतुलन जपा — रंगांची रग एकाच दिशेने वाहते.\nहे सुशोभित element portal च्या आरंभी शोभा देतो.", code: `.flag {
  background: repeating-linear-gradient(45deg, #6366f1 0 14px, #a5b4fc 14px 28px);
}`, codeLanguage: "css" },
      { title: "3. काउंटर विभाग", content: "काउंटर विभाग मध्ये section ची numbering स्वयं होते. section counter-increment chap देतो.\nh2::before मध्ये counter(chap) ने क्रम दिसतो — 1.1 दोन स्तर.\nlist-style devanagari मराठीत संख्या दर्शवतो.\nमजकूर क्रम स्वयं व्यवस्थित — वाचन स्पष्ट.\nअनुक्रम कोणत्याही edit नंतरही आपोआप सुधारतो — ही Grade ची शक्ती.", code: `section {
  counter-increment: chap;
}
section h2::before {
  content: counter(chap) ". "; 
}`, codeLanguage: "css" },
      { title: "4. मजकूर आकार", content: "मजकूर आकार म्हणजे avatar circle च्या आकाराभोवती मजकूर वाहतो. avatar-w float left आणि shape-outside circle(45%).\nshape-margin 12px ने मजकूरात दूरी राहते.\nमजकूर वाहतो आणि सुंदर भिंत दिसते.\nresponsive असल्याने लहान screen वर आकार बदलतो — तरीही परिच्छेद वाचतात.\nहे शृंगार आणि readability दोन्ही जपते.", code: `.avatar-w {
  float: left;
  shape-outside: circle(45%);
  shape-margin: 12px;
}`, codeLanguage: "css" },
      { title: "5. थर आणि निवड", content: "थर आणि निवड या भागात scrollbar thin राहतो — नीट साफ.\ntooltip z-index 20 ने वर राहतो.\n:where(.portal) आणि nth-child(odd) ने alternate रंग येतो.\npseudo जोडे एकत्र — थर व्यवस्थित आणि मर्यादित.\nकेवळ keyboard focus राहतो — प्रवेश्य आणि सुंदर.", code: `:where(.portal) li:nth-child(odd) {
  background: #eef2ff;
}
.tooltip {
  z-index: 20;
}`, codeLanguage: "css" },
      { title: "6. आकार आणि media", content: "आकार आणि media या भागात range query ने portal grid नियंत्रित होतो.\n@media (width >= 900px) मध्ये तीन स्तंभ — तर 600px वर दोन.\nकंटेनर cqi units सह internal adjust होतात.\nमोबाईल प्रयोग तपासले — प्रत्येक device वर portal सुंदर.\nअंतिम तपासणी असल्यावर सर्व components सुसंगत राहतात.", code: `@media (width >= 900px) {
  .portal-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "Mini project मध्ये सर्व Level 5 भाग एकत्र जोडतो. portal min-height: 100dvh ने पूर्ण पडद्याचा आधार घेतो.\nहे मागील सर्व तंत्रांचे — clip-path, gradient, counters, shapes — एकत्र दर्शन.\nvisual portal शेवटी सर्व काही दाखवतो आणि Level 5 शिकवण स्मरणात राहते.\nअसे final project शिकण्याची सवय आणि आत्मविश्वास दोन्ही वाढवतो.", code: `.portal {
  min-height: 100dvh;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["ध्वज कसे?", "काउंटर कुठे?", "आकार काय?"],
    quiz: [
      { question: "portal?", options: ["एक पेज", "दोन", "तीन"], correct: 0 },
      { question: "gradient पट्टा?", options: ["repeating", "color", "image"], correct: 0 },
      { question: "counter?", options: ["increment", "reset", "जाड"], correct: 0 },
      { question: "range media?", options: [">=", "नाव", "आवाज"], correct: 0 },
    ],
    challenge: {
      prompt: "visual portal पूर्ण.",
      starterCode: `.portal { min-height: 100dvh; }`,
      expectedOutput: "Renders polished Marathi visual portal using Level 5 techniques",
    },
    interviewQuestions: ["L", "e", "v", "e", "l", " ", "5", " ", "न", "व", "ी", "न", " ", "क", "ा", "य", "?"],
    related: ["css-border-effects", "css-clip-path"],
    prev: "css-border-effects",
    next: "css-clip-path",
    levelLabel: CSS5_LABEL,
  },];
