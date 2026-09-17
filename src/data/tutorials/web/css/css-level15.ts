import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 15 — Systems & Interaction ===
export const CSS15_LABEL = "CSS · Level 15 — Systems & Interaction";

export const cssLevel15: Tutorial[] = [
  {
    slug: "css-cascade-layers",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "@layer — थर क्रम",
    level: "advanced",
    minutes: 40,
    summary: "@layer क्रम नियंत्रण.",
    sections: [
      { title: "1. @layer कल्पना", content: "@layer ही CSS मधील थर व्यवस्था — शैलींना नावे असलेल्या गटांमध्ये विभागून त्यांचा क्रम नेमका ठरवता येतो. @layer base, components, utilities; या एकाच ओळीत तिन्ही थरांची नावे आणि क्रम सापडतात: base आधी, components नंतर, utilities सर्वांत शेवटी.\nक्रमाचा अर्थ स्पष्ट: शेवटच्या थरातील नियम सर्वांत मोठ्या बळाने लागू होतात. त्यामुळे specificity सांभाळण्याऐवजी थरांच्या क्रमावर अवलंबून राहता येते — विरोधी नियमांत नक्की कोण जिंकेल हे आधीच ठाऊक असते.\nसुरुवातीसाठी हे तीन थर पुरेसे: reset वा मूलभूत शैली base, घटकांची रचना components, शेवटच्या सुधारणा utilities. क्रम घोषित करणे म्हणजे संपूर्ण stylesheet चे नकाशे आधी ठरवणे.", code: `@layer base, components, utilities;`, codeLanguage: "css" },
      { title: "2. थर क्रम", content: "@layer base, components; या ओळीने थरांचा क्रम निश्चित होतो — base आधी, components शेवटी. त्यानंतर @layer base { h1 { font-size: 2rem; } } लिहिले की तो h1 चा नियम base थरात सामावला जातो.\nक्रम का महत्त्वाचा? कारण दोन थरांत विरोधी नियम आले तर घोषित क्रमानुसार शेवटचा थर जिंकतो. येथे components हा शेवटचा असल्याने त्याचे नियम base च्या नियमांवर मात करतात — यालाच थर क्रम म्हणतात.\nही एकच ओळ फाइलच्या सुरुवातीला लिहिणे म्हणजे पुढील सर्व नियमांचा आराखडा तयार करणे. कोणता नियम कोणत्या थरात आहे हे ठाऊक असल्याने नवीन शैली जोडणे, बदलणे आणि मोठ्या फाइलचे व्यवस्थापन सर्व काही सोपे होते — रचना स्पष्ट राहते.", code: `@layer base, components;
@layer base {
  h1 {
    font-size: 2rem;
  }
}`, codeLanguage: "css" },
      { title: "3. विजय नियम", content: "येथे @layer components आधी आणि @layer base नंतर घोषित केला आहे. म्हणून या क्रमानुसार base हा शेवटचा — म्हणजे विजयी — थर ठरतो. दोन्ही नियम button घटकालाच लागू होतात: components मधील .btn चा white रंग आणि base मधील button चा black रंग.\n.btn हा class असल्याने specificity ने जास्त वजनदार, पण थर क्रमाने base नंतर आला म्हणून black रंगच जिंकतो. याचा अर्थ विजय-नियम असा: थरांच्या क्रमात जो थर नंतर लिहिला तोच जिंकतो — specificity चा दाब येथे मागे पडतो.\nम्हणूनच शैली system बनवताना क्रम आधी ठरवावा, मग नियम लिहावेत. विजयी थर नेहमी शेवटचा; हे लक्षात राहिले की विरोधी शैली आल्याही परिणाम अंदाजे राहतो.", code: `@layer components {
  .btn {
    color: white;
  }
}
@layer base {
  button {
    color: black;
  }
}`, codeLanguage: "css" },
      { title: "4. आधार थर", content: "येथे वरील .btn नियम कोणत्याही @layer च्या बाहेर लिहिला आहे — अशा नियमांना unlayered म्हणतात. ब्राउझर त्यांना सर्व घोषित थरांच्या नंतर ठेवतो, म्हणून ते नेहमी विजयी राहतात.\nम्हणजेच @layer utilities मध्ये .btn ला white दिला असला तरी बाहेरचा #0d9488 रंगच जिंकतो — कारण थराबाहेरचे नियम सर्व थरांपेक्षा उच्च प्राधान्य घेतात. हा 'आधार थर' आपल्या जुन्या शैलींचे संरक्षक आहे.\nपण सावधान: हीच शक्ती उलटसुलट वाटू शकते. थरांमध्ये ठेवलेल्या शैली वेगळ्या प्रकल्पातून मिसळल्या तर बाहेरचा नियम अनपेक्षितपणे जिंकतो. म्हणून नियम थरात ठेवायचे की बाहेर हे जाणीवपूर्वक ठरवा.", code: `.btn {
  color: #0d9488;
}
@layer utilities {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "5. तुलना थर", content: "या उदाहरणात @layer design, theme; या एकाच ओळीने दोन थरांचा क्रम निश्चित केला — design आधी, theme नंतर. त्यामुळे theme चे नियम विजयी ठरतात.\ndesign मध्ये .card चा पांढरा background आला आणि theme मध्ये body चा #f8fafc रंग. body हा tag च्या रूपाने .card पेक्षा कमी specificity असला तरी theme शेवटचा थर असल्याने त्याचा body रंग जिंकतो.\nतुलना स्पष्ट: जुनी पद्धत specificity ने निकाल ठरवत होती; @layer मध्ये क्रम सोपा सांगता येतो. design आणि theme सारखी नावे लिहिली की कोणता थर कोणता विचार सांभाळतो हे वाचकाला लगेच समजते — रचना नावांतूनच वाचता येते.", code: `@layer design, theme;
@layer design {
  .card {
    background: white;
  }
}
@layer theme {
  body {
    background: #f8fafc;
  }
}`, codeLanguage: "css" },
      { title: "6. प्रकल्प थर", content: "प्रकल्पात सहसा चार थर पुरेसे असतात: reset, base, components आणि utilities. @layer reset, base, components, utilities; या एकाच ओळीने सर्व थरांचा क्रम नेमका ठरतो — reset आधी, utilities शेवटी.\nयेथे components थरात .btn ला padding: 0.5rem 1rem दिला आहे. हा नियम थरात बसल्याने संघटना स्पष्ट; नंतर utilities मध्ये वेगळ्या शैली आल्या तरी क्रम तोच राहतो.\nअशी रचना ठरवली की पुनर्लेखन सोपे होते — नवीन थर जुने नियम हादरवल्याशिवाय जोडता येतात. प्रत्येक थराचा उद्देश स्पष्ट असेल तर मोठी फाइलही वाचनीय आणि देखभालक्षम राहते — हीच सवय प्रकल्पाच्या आकारमानाबरोबर टिकते.", code: `@layer reset, base, components, utilities;
@layer components {
  .btn {
    padding: 0.5rem 1rem;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "हा छोटा प्रोजेक्ट या धड्याचा सार आहे — @layer base, components; या क्रम घोषणेनंतर components थरातील .btn चा white रंग विजयी कसा होतो हे दिसते. base आणि components या दोन थरांमध्ये स्वतःच्या शैली वाटून पहा.\nउदा. base मध्ये button चा मूलभूत रंग आणि components मध्ये .btn वर white दिला की components चा नियमच लागतो — कारण तो शेवटचा थर आहे. क्रम घोषित केल्याने 'कोण जिंकेल' हा प्रश्न उरत नाही.\nथरांचा क्रम आपल्या डिझाइन system चा पाया बनतो; एकदा क्रम ठरवला की मोठ्या फाइलमध्येही शैली अंदाजे राहते. ही या सरावाची मुख्य शिकवण आहे.", code: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@layer काय?", "क्रम कुठे?", "आधार कसा?", "@layer कधी?"],
    quiz: [
      { question: "@layer?", options: ["थर क्रम", "रंग", "ध्वनी"], correct: 0 },
      { question: "क्रम?", options: ["नियम नेमका", "थर", "क्रम"], correct: 0 },
      { question: "बाहेर थर?", options: ["विजय नेहमी", "नवीन", "रंग"], correct: 0 },
      { question: "थर नावे?", options: ["व्यवस्थापन सोपे", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "थर क्रम करा.",
      starterCode: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`,
      expectedOutput: "Marathi layer order wins predictably",
    },
    interviewQuestions: ["@layer फायदा?", "specificity पेक्षा?"],
    related: ["css-cascade-keywords", "css-scope-rule", "css-popover-tips"],
    prev: "css-marathi-capstone14",
    next: "css-native-nesting",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-native-nesting",
    categoryId: "web",
    title: "Native Nesting",
    marathiTitle: "nesting — घरटे नियम",
    level: "advanced",
    minutes: 40,
    summary: "& चिन्ह घरटे.",
    sections: [
      { title: "1. nesting कल्पना", content: "Native nesting म्हणजे CSS मध्येच पालक नियमाच्या आत मुलांचे नियम लिहिणे — जसे HTML मध्ये रचना व्यवस्थित दिसते. येथे .card च्या आत & h2 लिहिले आहे, म्हणजे .card च्या आतमधील सर्व h2 घटकांना color: #0d9488 लागू होतो.\n& हे चिन्ह पालकाला दर्शवते; & h2 म्हणजे .card h2 — दोन्ही नियम एकसारखे, पण घरटे लिहिल्या गेल्याने वाचणे आणि दुरुस्त करणे सोपे. कोणती शैली कोणत्या भागाला हे एकाच ठिकाणी दिसते.\nपूर्वी हे फक्त preprocessor मध्ये मिळत असे; आता थेट CSS मध्येच उपलब्ध आहे. त्यामुळे अतिरिक्त build साधनाची गरज नाही, निवड पुन्हा लिहिणे थांबते आणि कोड स्वच्छ व कमी पुनरावृत्तीचा राहतो.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "2. & चिन्ह", content: "& चिन्हाचा अर्थ 'मी जो पालक आहे तोच' — येथे &:hover म्हणजे .btn:hover. बटणावर mouse फिरवताच background हळूहळू #0f766e रंगात बदलतो.\nआधी हे दोन नियम स्वतंत्र लिहावे लागत — .btn आणि .btn:hover वेगळ्या ठिकाणी. घरट्यामध्ये & हे चिन्ह पालकाची पुनरावृत्ती टाळते आणि बटणाची सामान्य अवस्था व hover अवस्था एकत्र ठेवते.\nम्हणून & हे फक्त मुल जोडण्याचे नाही; pseudo-class आणि pseudo-element सर्वांसाठी ते पालकाला जोडण्याचे साधन आहे. रचना वाचताना प्रत्येक अवस्था स्वतःच्या जागी दिसते — कोड सुसंगत राहतो आणि देखभालही सोपी होते.", code: `.btn {
  &:hover {
    background: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "3. खोल घरटे", content: "Nesting मुळे खोल रचना एकाच नियमात स्पष्ट होते — .nav च्या आत ul, त्यात li आणि शेवटी a — सर्वांना color: #334155 लागतो. HTML ची वृक्ष रचना CSS मध्येच प्रतिबिंबित होते.\nपूर्वी संपूर्ण मार्ग लिहावा लागत होता: .nav ul li a { ... } — लांब आणि पुनरावृत्तीने भरलेला. आता प्रत्येक स्तर आपापल्या ठिकाणी बसतो; कोणता नियम कोणत्या खोलीचा आहे हे लगेच समजते.\nपण खोल घरटे संयमानेच वापरा — तीन-चार स्तरांच्या पुढे जाताना विचार करा. खोली वाढली की specificity हीसुद्धा वाढते आणि नियम पुन्हा लागू करणे अवघड होते. शक्यतो प्रत्येक स्तराला class द्या; घरटे रचना स्पष्ट करते, खोली वाढवण्याचे साधन नाही.", code: `.nav {
  ul {
    li {
      a {
        color: #334155;
      }
    }
  }
}`, codeLanguage: "css" },
      { title: "4. प्लेसहोल्ड", content: "& चिन्ह फक्त मुलालाच जोडत नाही; is() सारख्या फंक्शनसहही ते नीट काम करते. येथे &:is(svg) म्हणजे .icon:is(svg) — जर .icon हा स्वतःच svg घटक असेल तरच width: 1rem लागू होतो.\nis() येथे 'निवडलेल्या नावांपैकी कोणतेही एक' असा अर्थ देतो — ही यादी वाढवायची असेल तर नियम सोपा राहतो. अशा प्रकारे आयकॉनला स्वतःच्या घटकरूपांनुसार शैली एकाच ठिकाणी बसते.\nहे उपयोगी तेव्हा, जेव्हा एकच class अनेक घटकांवर असतो — उदा. आयकॉन कधी svg, कधी img. is() च्या जोडीने & वापरल्यास लक्ष्य नेमके होते आणि फक्त इच्छित घटकालाच शैली मिळते; बाकी घटक अतिरिक्त शैलीने झाकले जात नाहीत.", code: `.icon {
  &:is(svg) {
    width: 1rem;
  }
}`, codeLanguage: "css" },
      { title: "5. माध्यम घरटे", content: "@media चा नियम घरट्यात ठेवल्यास संबंधित शैली एकाच ठिकाणी राहते. येथे .card च्या आत min-width: 600px वर display: flex लागू होतो — त्या आकारानंतर कार्डची आतील रचना आडवी बसते.\nपूर्वी घटकाचा नियम आणि @media चा स्वतंत्र block दोन ठिकाणी लिहावे लागत. घरट्यामध्ये 'कोणत्या घटकासाठी, कोणत्या स्क्रीनवर' हे दोन्ही एकत्र दिसते, त्यामुळे संदर्भ स्पष्ट राहतो.\nलक्षात ठेवा: हे घरटे फक्त scope स्पष्ट करते, @media चा अर्थ येथे बदलत नाही. स्क्रीन 600px पेक्षा रुंद असेल तरच flex; लहान असेल तर जुनी रचना. अशा रचनेने responsive नियम व्यवस्थित ठेवणे सोपे होते आणि चुकीच्या ठिकाणी नियम लिहिणे टळते.", code: `.card {
  @media (min-width: 600px) {
    display: flex;
  }
}`, codeLanguage: "css" },
      { title: "6. आधार थर", content: "Nesting नवीन तंत्र असल्याने सर्व ब्राउझरला & चिन्ह समजत नाही. म्हणून आधार तपासणी आवश्यक — @supports (selector(&)) ची तपासणी सांगते की ब्राउझरला हा selector समजतो का.\nयेथे h2 चा मूलभूत नियम (color: #0d9488) बाहेर लिहिला आहे — सर्वांना सुरक्षा. मग @supports च्या आत .card h2 वर nesting शैली दिली आहे, पण घरट्याऐवजी सामान्य मार्गाने — त्यामुळे जुने आणि नवे ब्राउझर दोन्ही नीट रंगतात.\nही सवय म्हणजे progressive enhancement: आधी नेहमी काम करणारा साधा नियम, मग @supports ने तंत्राला आधार असेल तरच नवीन शैली. असे केले की जुन्या ब्राउझरवरही पेज नीट राहते आणि नवीन ब्राउझरला पूर्ण फायदा मिळतो.", code: `h2 {
  color: #0d9488;
}
@supports (selector(&)) {
  .card h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये सर्वात महत्त्वाचा nesting नियम वापरला — .card च्या आत & h2 ने कार्डमधील सर्व शीर्षकांचा रंग नेमका ठरवला. वाचताना स्पष्ट: कार्डच्या शीर्षकाची शैली कार्डच्या नियमातच आहे.\nअशा लेखनाने कोडची पुनरावृत्ती कमी होते आणि 'हा h2 कुठल्या रचनेसाठी' हे ठाऊक राहते. कार्डमध्ये बदल करायचा असेल तर तो एकाच ठिकाणी होतो — वेगळे नियम शोधायची गरज नाही.\nछोट्या प्रोजेक्टमध्ये घरटे उत्तम; पण खोली मर्यादित ठेवा — फक्त संबंधित मुले पालकासह जोडा. & चे स्थान नेमके ठेवले तर nesting कोड सुरक्षित आणि देखभालक्षम राहतो.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["nesting काय?", "& कुठे?", "media कसा?", "आधार कधी?"],
    quiz: [
      { question: "nesting?", options: ["मुल शैली", "रंग", "ध्वनी"], correct: 0 },
      { question: "& चिन्ह?", options: ["पालक निर्देश", "थर", "क्रम"], correct: 0 },
      { question: "माध्यम?", options: ["घरटे scope", "नवीन", "रंग"], correct: 0 },
      { question: "जुना आधार?", options: ["@supports साधा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड nesting करा.",
      starterCode: `.card {
  & h2 {
    color: #0d9488;
  }
}`,
      expectedOutput: "Marathi nested card stops repeat",
    },
    interviewQuestions: ["nesting फायदा?", "preprocessor पेक्षा?"],
    related: ["css-scope-rule", "css-cascade-layers", "css-popover-tips"],
    prev: "css-cascade-layers",
    next: "css-logical-properties",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-logical-properties",
    categoryId: "web",
    title: "Logical Properties",
    marathiTitle: "logical — दिशा नियम",
    level: "advanced",
    minutes: 40,
    summary: "inline block दिशा.",
    sections: [
      { title: "1. logical कल्पना", content: "Logical properties म्हणजे भौतिक दिशांऐवजी (left, right) मजकुराच्या प्रवाहाशी जोडलेले गुणधर्म. margin-inline: auto येथे क्षैतिज दोन्ही बाजूंवर auto ठेवून घटकाला क्षैतिज मध्यभागी आणते — अगदी आडवे शीर्षकही केंद्रस्थानी बसते.\ninline दिशा म्हणजे मजकूर वाचण्याची दिशा — मराठी आणि इंग्रजीत डावी-उजवी; block दिशा म्हणजे वर-खाली. त्यामुळे ही मूल्ये भाषा आणि text direction नुसार आपोआप बदलतील.\nउदा. अरबी सारख्या उजवीकडून वाचणार्या भाषांतही margin-inline: auto हे मध्यभागीच ठेवते; तर left आणि right उलट पडतात. म्हणून logical properties चा वापर international आणि responsive डिझाइनमध्ये मूलभूत मानला जातो.", code: `.box {
  margin-inline: auto;
}`, codeLanguage: "css" },
      { title: "2. किनार थर", content: "येथे दोन logical properties एकत्र दिसतात — padding-inline: 1rem म्हणजे दोन्ही बाजूंना (डावी व उजवी) 1rem जागा आणि padding-block: 0.5rem वर-खाली. एकाच गुणधर्माने दोन बाजू सामावल्या जातात.\nहा 'किनार थर' मीडिया घटकासाठी आदर्श — मजकुराला बाजूंनी श्वास घेण्याची जागा, वर-खाली कमी. भाषा बदलली (उदा. उजवीकडून वाचणारी) तरी हे अंतर दिशेनुसार आपोआप फिरते; left/right वापरले असते तर हे घडले नसते.\nम्हणून padding आणि margin साठी जुनी भौतिक मूल्ये (padding-left इ.) लिहिण्याऐवजी inline/block चा वापर करा. असे केले की डिझाइन दिशेच्या गोंधळापासून मुक्त होते आणि सर्व भाषांच्या वापरकर्त्यांना एकसारखा अनुभव मिळतो.", code: `.media {
  padding-inline: 1rem;
  padding-block: 0.5rem;
}`, codeLanguage: "css" },
      { title: "3. text दिशा", content: "text-align: start ही logical दिशा आहे — मजकूराच्या सुरुवातीच्या बाजूला संरेखित करते. मराठी आणि इंग्रजीत ही डावी बाजू, तर उजवीकडून वाचणार्या भाषांमध्ये उजवी बाजू.\nआधी text-align: left लिहिल्यास उजवीकडून वाचणार्या भाषेतही मजकूर डावीकडे चिकटतो — चुकीचे संरेखन. start आणि end यांना ही समस्या नाही, कारण ती वाचन दिशेशी जोडलेली असतात.\nयेथे .entry चा मजकूर सुरुवातीच्या बाजूने संरेखित होतो — दैनंदिन परिच्छेदांसाठी सर्वांत स्वाभाविक. मराठीत start हे left सारखेच पडते, पण आंतरराष्ट्रीय रचनेत तोच नियम योग्य ठरतो; म्हणून संरेखन करताना logical दिशा वापरण्याची सवय ठेवा.", code: `.entry {
  text-align: start;
}`, codeLanguage: "css" },
      { title: "4. खूण थर", content: "border-inline-start हा logical गुणधर्म — मजकूर ज्या बाजूने सुरू होतो त्या बाजूला रेखा टाकतो. येथे .quote (उद्धरण) च्या सुरुवातीच्या बाजूला 4px जाड, #0d9488 रंगाची खूण रेखा दिसते.\nपूर्वी border-left वापरले जात असे; पण वाचन दिशा बदलली की ती रेखा उलट बाजूला हवी होती. border-inline-start आपोआप योग्य बाजूला ठेवतो — म्हणून हा नियम भाषेच्या दिशेहून स्वतंत्र.\nअशा रचनेने संदर्भ स्पष्ट होतो: उद्धरण, टीप किंवा विशेष विभागाला शेजारी रंगीत रेखा म्हणजे 'हे वेगळे म्हणणे आहे' असे वाचकाला लगेच समजते. एकच नियम विविध भाषांमध्ये तसाच राहतो — डिझाइन सुरक्षित होते.", code: `.quote {
  border-inline-start: 4px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. स्थिती थर", content: "inset-inline-end ही positional logical property — घटकाला मजकूराच्या शेवटच्या बाजूला 0.5rem अंतरावर ठेवते. येथे .badge absolute स्थितीत पालकाच्या त्या बाजूला नेमक्या जागी बसतो.\nहा 'स्थान थर' म्हणजे लहान बॅज, नोटिफिकेशन किंवा खूण कोपऱ्यात लावण्याचा सोपा मार्ग. शेवटच्या बाजूचे नाव end, सुरुवातीचे start; वाचन दिशा बदलली तर बॅज आपोआप उलट बाजूला सरकतो.\nपण absolute स्थितीत योग्य पालक (position: relative) असलाच पाहिजे, अन्यथा घटक पेजच्या तुलनेत बसतो. एक नियम लिहिला की अनेक भाषांमध्ये स्थान राखले जाते — म्हणून logical स्थितीची ही सवय उपयुक्त आहे.", code: `.badge {
  position: absolute;
  inset-inline-end: 0.5rem;
}`, codeLanguage: "css" },
      { title: "6. तुलना थर", content: "तुलना करणे सोपे: .box वर margin-left: auto फक्त डावी बाजू केंद्रस्थानी आणते; .box-new वर margin-inline-start: auto मजकूराच्या सुरुवातीची बाजू. मराठी-इंग्रजीत दोन्ही सारखे दिसतात — फरक दिशा बदलल्यावरच दिसतो.\nउदा. उजवीकडून वाचणार्या भाषेत margin-left वापरले तर मजकूर उजवीकडून सुरू होत असला तरी नियम डावी बाजूच ढकलतो — व्यवस्था चुकते. margin-inline-start वाचन दिशेनुसार सुरुवात-बाजू शोधते आणि योग्य ठिकाणी ठेवते.\nम्हणजे हा भेद आधी नजरेस येत नाही, पण भाषा बदलल्यावर स्पष्ट होतो. सुरुवातीपासून logical मूल्ये वापरल्यास हा त्रास टाळता येतो — ही सवय लागली की रचना भविष्यासाठी सुरक्षित राहते.", code: `.box {
  margin-left: auto;
}
.box-new {
  margin-inline-start: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये मूळ logical नियम वापरला — .card ला padding-inline: 1rem म्हणजे दोन्ही बाजूंचे अंतर एकाच ओळीत. मजकूर किनारीला न चिकटता सुंदर बसतो आणि रचना हलकी राहते.\nहा नियम भाषेच्या दिशेहून स्वतंत्र असल्याने साइट पुढे इतर भाषांमध्येही गेली तरी नीट राहतो. जोडून padding-block चाही प्रयोग करा — वर-खाली वेगळे अंतर.\nछोट्या नियमांतून logical properties ची शक्ती समजते: दिशा-सजग आणि टिकाऊ रचना. कार्डला हेच नियम लावून बदल अभ्यासा — पुढे box model आणि layout सर्वत्र हीच भाषा वापरली जाते.", code: `.card {
  padding-inline: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["logical काय?", "inline कुठे?", "block काय?", "जुना कसा?"],
    quiz: [
      { question: "logical?", options: ["दिशा नियम", "रंग", "ध्वनी"], correct: 0 },
      { question: "inline?", options: ["क्षैतिज दिशा", "थर", "क्रम"], correct: 0 },
      { question: "block?", options: ["उभी दिशा", "नवीन", "रंग"], correct: 0 },
      { question: "जुना मार्ग?", options: ["left साधा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "दिशा नियम करा.",
      starterCode: `.card {
  padding-inline: 1rem;
}`,
      expectedOutput: "Marathi card flips direction with logical props",
    },
    interviewQuestions: ["logical फायदा?", "कधी वापर?"],
    related: ["css-box-model", "css-basics", "css-typography"],
    prev: "css-native-nesting",
    next: "css-scroll-snap",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-scroll-snap",
    categoryId: "web",
    title: "Scroll Snap",
    marathiTitle: "scroll snap — स्थान थर",
    level: "advanced",
    minutes: 40,
    summary: "scroll-snap-type नियम.",
    sections: [
      { title: "1. snap कल्पना", content: "Scroll snap म्हणजे स्क्रोल थांबण्याचे व्यवस्थित नियम — गॅलरी किंवा पेज स्क्रोल करताना नेमक्या स्थानावर थांबते. scroll-snap-type: x mandatory हा मुख्य नियम — क्षैतिज (x) अक्षावर अनिवार्यपणे स्थानाच्या जागी थांबवणे.\nही रचना फोटो गॅलरी, स्लाइडर, फुलस्क्रीन विभागांमध्ये अत्यंत उपयोगी — प्रत्येक कार्ड किंवा स्लाइड नीट समोर येते, अर्धवट कापलेले दिसत नाही.\nmandatory म्हणजे स्क्रोल संपताच घटक बळजबरीने जवळच्या स्थानावर येतो; ही गती कठोर असल्याने संपूर्ण चौकटीच्या रचनांसाठीच ती योग्य. snap म्हणजे वाचकाला मार्गदर्शन — कोठे थांबायचे हे त्याला आपोआप समजते.", code: `.gallery {
  scroll-snap-type: x mandatory;
}`, codeLanguage: "css" },
      { title: "2. मुल स्थान", content: "scroll-snap-type कंटेनरवर लावतात; मुलांवर काय ते scroll-snap-align ठरवते. येथे .slide वर scroll-snap-align: center — स्लाइड स्क्रोल संपताच कंटेनरच्या मध्यभागी नेमकी येते.\nमूल्यांचे पर्याय: start (सुरुवातीशी), center (मध्यभागी), end (शेवटाशी). हेच ठरवते वाचक कुठे थांबेल — गॅलरीचे केंद्र स्पष्ट होते.\nपण लक्षात ठेवा: कंटेनरवर scroll-snap-type नसेल तर मुलांच्या align चा अर्थ नाही; दोन्ही एकत्र पूरक असतात. गॅलरीत सर्व स्लाइड center असल्यास प्रत्येक फोटो मध्यभागी नीट दिसतो — संतुलित आणि स्थिर अनुभव. त्यामुळे मुलांचे align नेमके करणे म्हणजे स्नॅपिंगचे वर्तन ठरवणे.", code: `.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "3. आवश्यक थर", content: "येथे दोन्ही नियम एकत्र आहेत — .gallery वर scroll-snap-type: x mandatory आणि .slide वर scroll-snap-align: start. स्क्रोल संपताच प्रत्येक स्लाइड कंटेनरच्या सुरुवातीशी नीट उभी राहते.\nmandatory चा अर्थ: वापरकर्ता मधूनच स्क्रोल थांबवू शकत नाही; ब्राउझर बळजबरीने जवळच्या स्नॅप बिंदूवर नेतो. त्यामुळे अर्धवट दिसणारे घटक पूर्णपणे टळतात — ही कडक पद्धत.\nपण कडक नियम प्रत्येक ठिकाणी योग्य नाही; लहान घटकांच्या यादीत तो अडचणीचा ठरू शकतो. बहुतेक स्लाइडर आणि फुलस्क्रीन रचनांसाठी mandatory हा सर्वांत अंदाजे आणि थांबा नेमका देणारा पर्याय दिसतो.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: start;
}`, codeLanguage: "css" },
      { title: "4. मर्यादा थर", content: "proximity म्हणजे 'जवळ आल्यावर' स्नॅप — सर्वांत मऊ पद्धत: स्क्रोल थांबवताना मुलाचे स्थान जवळ असेल तर तेथे थांबवणे; दूर असेल तर मोकळा सोडणे. त्यामुळे हा बर्याच अनुभवांना नैसर्गिक वाटतो.\nयेथे .cards वर उभ्या (y) दिशेने proximity दिला आणि प्रत्येक .card center. दीर्घ यादीत कार्ड जवळ आल्यास मध्यभागी थांबते, पण मधून कुठेही स्क्रोल करत राहणे वापरकर्त्याच्या हातात असते.\nलांब यादी, ब्लॉग, दस्तऐवज अशा ठिकाणी proximity च उत्तम — वाचक मुक्तपणे पुढे जातो, पण जवळच्या स्थानावर स्थिरावतो. कठोर mandatory आणि मऊ proximity यांतून आपल्या उपयोगाला योग्य तेच निवडा.", code: `.cards {
  scroll-snap-type: y proximity;
}
.card {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
      { title: "5. margin थर", content: "scroll-margin हा गुणधर्म स्नॅप स्थानाचे अंतर नेमके करतो. येथे .card ला scroll-snap-align: start सोबत scroll-margin-top: 4rem दिले — स्क्रीनच्या वरच्या काठापासून 4rem दूर असे स्थान मिळते.\nहे उपयोगी तेव्हा, जेव्हा वर fixed header असते — अन्यथा घटक header च्या मागे अर्धवट लपतो. scroll-margin मुळे स्नॅप स्थान header च्या खाली सुरू होते आणि प्रत्येक कार्ड नीट दिसते.\nत्यामुळे 'स्थान तोल' साधला जातो: header जोडले तरी स्नॅप केलेला घटक अडथळ्यांमध्ये न अडकता नीट समोर येतो. हा गुणधर्म scroll-padding सोबत पूरक आहे — एक कंटेनरवर, दुसरा मुलांवर; दोन्ही जोडले तर स्थान रचना अचूक होते.", code: `.card {
  scroll-snap-align: start;
  scroll-margin-top: 4rem;
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "Snap बर्याच ब्राउझरमध्ये उपलब्ध आहे, पण आधार तपासणी ठेवणे चांगले. येथे .gallery ला मुळात overflow-x: auto दिले — त्यामुळे क्षैतिज स्क्रोल होतोच, snap शिवायही.\nमग @supports (scroll-snap-type: x mandatory) च्या आतच स्नॅप नियम लावले. ब्राउझरला snap समजत नसेल तर गॅलरी स्क्रोल होतेच, फक्त स्थान ठरवण्याचा नियम वगळला जातो — मूळ वर्तन सुरक्षित.\nही progressive enhancement सवय: आधी मूलभूत कार्यरत रचना, मग @supports ने सुधारणा. जुन्या ब्राउझर आणि मोबाइल पेजवरही रचना नीट राहते; स्नॅपची शैली फक्त पूरक असते. नवीन तंत्रे नेहमी अशीच जोडा.", code: `.gallery {
  overflow-x: auto;
}
@supports (scroll-snap-type: x mandatory) {
  .gallery {
    scroll-snap-type: x mandatory;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "गॅलरी स्नॅपिंगचा संपूर्ण सराव: .gallery वर scroll-snap-type: x mandatory आणि प्रत्येक .slide वर scroll-snap-align: center. स्क्रोल संपल्यावर स्लाइड नेमकी मध्यभागी उभी राहते.\nचाचणी करा: बोट सरकवून सोडा — ब्राउझर आपोआप जवळच्या स्लाइडकडे नेतो. प्रत्येक फोटो संपूर्ण आणि कापलेला नसलेला दिसतो — हेच या सरावाचे उद्दिष्ट.\nयानंतर fixed header असेल तर scroll-margin-top जोडून तोल करा. स्नॅप, align आणि margin एकत्र वापरल्याने अर्धवट दिसणार्या स्लाइडची समस्या कधीच निर्माण होत नाही — हा अनुभव या प्रोजेक्टमधून मिळतो.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: center;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["snap काय?", "align कुठे?", "mandatory काय?", "margin कधी?"],
    quiz: [
      { question: "scroll-snap-type?", options: ["स्थान नियम", "रंग", "ध्वनी"], correct: 0 },
      { question: "align?", options: ["मुल स्थान", "थर", "क्रम"], correct: 0 },
      { question: "proximity?", options: ["मऊ थर", "नवीन", "रंग"], correct: 0 },
      { question: "scroll-margin?", options: ["स्थान तोल", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "गॅलरी snap करा.",
      starterCode: `.gallery {
  scroll-snap-type: x mandatory;
}
.slide {
  scroll-snap-align: center;
}`,
      expectedOutput: "Marathi gallery snaps to center slide",
    },
    interviewQuestions: ["snap फायदा?", "proximity कधी?"],
    related: ["css-responsive-table", "css-basics", "css-grid-template"],
    prev: "css-logical-properties",
    next: "css-focus-visible",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-focus-visible",
    categoryId: "web",
    title: "Focus Visible",
    marathiTitle: ":focus-visible — लक्ष थर",
    level: "advanced",
    minutes: 40,
    summary: ":focus-visible दृश्य लक्ष.",
    sections: [
      { title: "1. focus कल्पना", content: ":focus-visible हा pseudo-class कीबोर्डवरून येणार्या लक्षाला दृश्य स्वरूप देतो — जेव्हा घटक टॅब, कीबोर्ड शॉर्टकट किंवा व्हॉइस नियंत्रणाने लक्ष प्राप्त करतो तेव्हा ही अवस्था लागू होते.\nयेथे outline: 2px solid #0d9488 दिले की लक्ष असलेल्या घटकाभोवती 2px जाड, ठळक वलय दिसते. outline-offset: 2px ने ते वलय काठापासून 2px दूर ठेवले — मूळ रचनेत व्यत्यय न आणता.\nमाऊसने क्लिक केल्यावर :focus-visible लागू होत नाही — फक्त कीबोर्ड नेव्हिगेशनवर. म्हणून माऊस वापरकर्त्यांना त्रास नाही, पण कीबोर्ड वापरकर्त्याला संपूर्ण मार्ग दिसतो. हे 'दृश्य लक्ष' प्रवेश्यता (accessibility) चा पाया आहे.", code: `:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "2. भेद थर", content: ":focus आणि :focus-visible यांच्यातील भेद समजणे महत्त्वाचे. input:focus प्रत्येक लक्ष अवस्थेवर लागू — माऊसने क्लिक केले, टॅब केले किंवा कोणत्याही मार्गाने; त्यावर border-color बदलतो.\n:focus-visible मात्र फक्त कीबोर्ड किंवा assistive तंत्रज्ञानाच्या लक्षावर असतो — येथे outline वलय दिले. टेक्स्ट बॉक्सवर माऊसने क्लिक केल्यास बॉर्डरचा रंग दिसेल; टॅब केल्यास वलय.\nकारण दोन्ही वेगवेगळ्या संदर्भांना उत्तर देतात: :focus सर्व लक्षांसाठी, :focus-visible नेव्हिगेशनच्या प्रकारासाठी. दोन्ही एकत्र वापरले तर प्रत्येक वापरकर्त्याला आवश्यक दृश्य सूचना मिळते — डिझाइन कमी आक्रमक, पण लक्ष अत्यंत स्पष्ट.", code: `input:focus {
  border-color: #0d9488;
}
:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "3. कार्ड नियम", content: "लिंक्सना (a) विशेष लक्ष हवे — कारण कीबोर्ड वापरकर्ता टॅब करताना सर्वांत आधी लिंकवर येतो. a:focus-visible ला outline वलय दिले की प्रत्येक टॅबवर 'तुम्ही या निर्देशावर आहात' हे स्पष्ट दिसते.\nमाऊस वापरकर्त्याला हे वलय अडथळासारखे वाटू नये म्हणून :focus-visible फक्त कीबोर्ड नेव्हिगेशनवर लागू होतो — क्लिक केल्यावर वलय दिसत नाही. त्यामुळे सर्वांना योग्य सूचना, कोणालाही त्रास नाही.\nलिंकच्या रंगावरच अवलंबून राहिले तर रंगातील भेद न दिसणार्यांसाठी मार्ग अस्पष्ट राहतो; वलयासह तोच दुवा प्रत्येकासाठी स्पष्ट होतो. रंग आणि रेषा दोन्ही मिळून सूचना देणे ही उत्तम प्रवेश्यता आहे.", code: `a:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "4. बटण थर", content: "बटणांसाठी :focus-visible हा मोठा फायदा — कीबोर्ड वापरकर्ता टॅब करून बटणावर आला की .btn:focus-visible ने outline वलय आणि outline-offset दोन्ही मिळते. वलय बटणाच्या काठापासून 2px दूर राहते.\nहा अंतर महत्त्वाचा: बर्याच बटणांवर स्वतःची किनार किंवा shadow असते; वलय त्या सर्वांपासून स्वतंत्र ठेवल्यास ते स्पष्ट दिसते आणि redesign मध्येही जुळते.\nमाऊसने क्लिक केल्यावर वलय दिसत नाही, कीबोर्डने आल्यावरच दिसते — त्यामुळे साइटच्या शैलीशी लढा न करता प्रवेश्यता मिळते. कोणताही वापरकर्ता बटण कुठे आहे आणि ते निवडले आहे हे निश्चित समजतो.", code: `.btn:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "5. सुरक्षित नियम", content: "जुनी सवय — button:focus वर outline: none — कीबोर्ड वापरकर्त्याला दृश्य मार्ग नाहीसा करते; ही प्रवेश्यता त्रुटी. येथे सुरक्षित नियम दिला: button:focus वर स्वच्छ वलय, आणि button:focus:not(:focus-visible) वर outline: none.\nnot(:focus-visible) म्हणजे 'लक्ष असेल, पण तो कीबोर्डचा नसेल' — म्हणजे माऊसने आलेला focus. त्यावर वलय नको, म्हणून काढले; पण कीबोर्ड focus चे वलय टिकून राहते.\nपरिणाम: माऊस प्रयोग स्वच्छ, कीबोर्ड प्रवेश स्पष्ट. दोन्ही नियम एकत्र आले की जुनी मर्यादा दूर होते आणि नवीन वैशिष्ट्यही सुरक्षित राहते — कोणत्याही घटकासाठी हाच दृष्टिकोन वापरता येतो.", code: `button:focus {
  outline: 2px solid #0d9488;
}
button:focus:not(:focus-visible) {
  outline: none;
}`, codeLanguage: "css" },
      { title: "6. अभ्यास थर", content: "सर्वांसाठी एकरूप नियम — एकेरी :focus-visible selector पेजवरच्या सर्व घटकांना लागू. रंग, जाडी आणि अंतर एकाच ठिकाणी ठरवल्याने पूर्ण पेजवर सुसंगत वलय दिसते.\nअशा रीतीने focus अवस्था सर्व घटकांसाठी एकच भाषा बोलते — कीबोर्ड नेव्हिगेशन सर्वत्र एकसारखे स्पष्ट. थीमच्या रंगाशी जुळणारा वलय निवडल्यास प्रत्येक विभागात तो नीट दिसतो.\nपण सावधान: सर्वांना लागू असल्याने रंग आणि offset यांचे संतुलन हवे — अति ठळक वलय लक्ष विचलित करते, पाण्यासारखा मऊ वलय दिसत नाही. जागतिक नियमासोबत विशिष्ट घटकांसाठी स्वतंत्र शैली जोडता येते — ही रचना व्यवस्थित आणि देखभालक्षम राहते.", code: `:focus-visible {
  outline: 2px solid #0d9488;
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये एकच मूलभूत नियम :focus-visible ला outline दिले. संपूर्ण पेजवर कीबोर्ड नेव्हिगेशनने सर्व घटकांना एकसारखे नीट दृश्य वलय मिळते — लिंक, बटणे, फॉर्म.\nचाचणी: टॅब दाबत जा — प्रत्येक टॅबवर घटक कुठे आहे ते नजरेस येते. माऊसने क्लिक करा — वलय नाही, कारण :focus-visible फक्त कीबोर्डवर लागू; अनुभव शांत असतो.\nहा छोटा सराव संपूर्ण साइटच्या प्रवेश्यता पायाला आधार देतो. पुढे :focus-within, स्किप नेव्हिगेशन अशी वाढ करत जा; मूळ नियम टिकला की प्रत्येक नवा घटक आपोआप दृश्य लक्ष घेतो.", code: `:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: [":focus-visible काय?", ":focus पेक्षा?", "outline कुठे?", "जुना नियम?"],
    quiz: [
      { question: ":focus-visible?", options: ["कीबोर्ड लक्ष", "रंग", "ध्वनी"], correct: 0 },
      { question: ":focus?", options: ["सर्व लक्ष", "थर", "क्रम"], correct: 0 },
      { question: "outline?", options: ["वलय दृश्य", "नवीन", "रंग"], correct: 0 },
      { question: "जुना सवय?", options: ["टाका नका", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "लक्ष वलय करा.",
      starterCode: `:focus-visible {
  outline: 2px solid #0d9488;
}`,
      expectedOutput: "Marathi keyboard focus gets visible ring",
    },
    interviewQuestions: [":focus-visible फायदा?", ":focus पेक्षा भेद?"],
    related: ["css-pseudo-state", "css-focus-within", "css-grid"],
    prev: "css-scroll-snap",
    next: "css-accent-color",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-accent-color",
    categoryId: "web",
    title: "Accent Color",
    marathiTitle: "accent — फॉर्म रंग",
    level: "advanced",
    minutes: 40,
    summary: "accent-color फॉर्म नियंत्रण.",
    sections: [
      { title: "1. accent कल्पना", content: "accent-color हा गुणधर्म फॉर्मच्या नियंत्रणांचा रंग ठरवतो — checkbox, radio, range आणि progress. येथे input वर accent-color: #0d9488 दिला की निवडलेल्या checkbox ची खूण आणि radio ची निवड या रंगाने दिसते.\nस्वतःचे आयकॉन किंवा रचना काढण्याची गरज नाही — ब्राउझर नियंत्रणाची मूळ रचना आणि वर्तन ठेवतो, फक्त रंग आपल्या थीमचा होतो. त्यामुळे फॉर्म native आणि ओळखण्यासारखा राहतो.\nपूर्वी हा बदल क्लिष्ट होता — appearance, पार्श्वभूमी, निवड खूण सर्व स्वतः लिहावे लागत. accent-color एकाच ओळीत हे करतो आणि सर्व फॉर्म घटकांना एकसंध रंग देतो — रचना सोपी आणि देखभाल सुलभ.", code: `input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. range थर", content: "input[type=range] हा स्लाइडर नियंत्रण — मूल्य निवडण्यासाठीचा घटक. त्यालाही accent-color लागू होतो: स्लाइडरचा भरलेला भाग #0d9488 रंगात दिसतो, बाकी मार्ग ब्राउझर रंगवतो.\nउदा. व्हॉल्यूम, चमक किंवा आकार ठरवणारा स्लाइडर — थीमशी जुळणारा रंग मिळाल्यास संपूर्ण फॉर्म एकसंध भासतो. नेटिव्ह स्लाइडरची स्पर्श योग्यता आणि वर्तन तसेच राहते.\nस्लाइडर पूर्ण हाताने सजवणे (track आणि thumb स्वतंत्र रंगवणे) ब्राउझरनुसार वेगळे पडते; accent-color सर्व ब्राउझरमध्ये समान परिणाम देतो. त्यामुळे एका रंग ओळीतूनच स्लाइडरचा ब्रँड रंग नेमका साधता येतो.", code: `input[type="range"] {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. प्रगती थर", content: "progress घटक कामाची प्रगती दर्शवतो — भरलेला भाग म्हणजे झालेले काम. progress वर accent-color दिला की भरलेला विभाग #0d9488 रंगात दिसतो.\nउदा. फाईल अपलोड, व्हिडियो बफर किंवा प्रश्नावलीची टक्केवारी — वापरकर्त्याला स्थिती लगेच समजते. उर्वरित रचना ब्राउझरची native असल्याने सर्व ओएसवर सुसंगत दिसते.\nहे सर्व फॉर्म घटक एकाच रंग भाषेत घेऊन येत: checkbox, range आणि progress समान brand रंग. फॉर्मचे स्वरूप एकत्रित आणि व्यावसायिक बनते — हीच या गुणधर्माची खरी ताकद.", code: `progress {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "4. थीम नियम", content: "dark mode मध्ये accent-color बदलणे सोपे — color-scheme: dark घोषित केली की ब्राउझर गडद थीम समजतो आणि native नियंत्रणांची मूळ रचना गडद होते. येथे :root वर color-scheme सह accent-color #2dd4bf दिला.\nहलका रंग गडद पार्श्वभूमीवर अधिक चटकन दिसतो — checkbox आणि range ची निवड स्पष्ट राहते. रंग आणि ब्राउझर रचना दोन्ही थीमच्या तोलात येतात.\npalette variable मध्ये ठेवल्यास प्रत्येक ठिकाणी रंग सुधारणे टाळता येते; थीमनुसार फक्त value बदलते. color-scheme आणि accent-color एकत्र वापरल्यास दोन्ही थीम एकाच source वरून सुसंगत राहतात.", code: `:root {
  color-scheme: light dark;
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. एकत्र थर", content: "येथे एकाच नियमात input, progress आणि range या तीनही घटकांना accent-color दिला आहे — स्वल्पविरामाने वेगळे केलेले selector गट एकत्र शैली देतात. तिन्ही घटकांचा नियंत्रण रंग एकसारखा होतो.\nसेलेक्टर गट लिहिताना अचूकता महत्त्वाची — घटकांची रचना आणि वर्तन बदलत नाही, फक्त रंग. फॉर्म संपूर्णपणे एकसंध दिसतो आणि रंग सुसंगतता राखली जाते.\nhover आणि :disabled सारख्या विशिष्ट अवस्थांसाठी स्वतंत्र नियम जोडता येतो; मूलभूत रंग मात्र एका ठिकाणीच राहतो. अशी रचना वाचण्यास सोपी आणि बदलत्या थीममध्ये लवचिक राहते.", code: `input, progress, range {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "6. आधार थर", content: "accent-color जुन्या ब्राउझरमध्ये शक्य नाही, पण नियंत्रणांचे मूळ वर्तन तरीही कार्यरत राहते — checkbox निवडता येते, फक्त रंग ब्राउझरचा असतो. येथे input[type=checkbox] वर स्वतःची पर्यायी शैली दिली आहे.\nसर्वांना सुरक्षित आधार: मूल रचना native ठेवून फक्त रंग सुधारणे. ब्राउझरला नियम समजला तर रंग लागू होईल; नाही समजला तर फॉर्म सरळ काम करत राहतो.\nगरज असल्यास @supports (accent-color: black) तपासणी जोडून शैली मर्यादित करता येते. प्रत्येक गुणधर्माप्रमाणे येथेही सराव स्पष्ट: आधी मूलभूत स्थिरता आणि नंतरच नवीन सुधारणा — हीच सवय सर्व नवीन तंत्रांना लागू होते.", code: `input[type="checkbox"] {
  accent-color: #0d9488;
}
@supports (accent-color: #000) {
  input {
    accent-color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये फॉर्मच्या नियंत्रणांना एकाच accent रंगाने रंगवले — input वर accent-color: #0d9488 दिला. checkbox, radio आणि range सर्वांना एकसारखी निवड खूण मिळते.\nजोडून progress लाही समान रंग द्या — फाईल किंवा चरण प्रगती सुद्धा थीमशी जुळेल. फॉर्म म्हणजे केवळ मजकूर नाही; निवड, स्लाइड आणि प्रगती सर्व ब्रँड रंगात एकत्रित दिसतात.\nहा धडा घटक रंगवण्यापलीकडे जातो: native वर्तन ठेवून रंग एका ठिकाणी नियंत्रित करणे. फॉर्मचा संपूर्ण अनुभव एकसंध आणि व्यावसायिक बनतो — हीच शिकवण या सरावातून मिळते.", code: `input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["accent-color काय?", "range कुठे?", "progress कसा?", "आधार कधी?"],
    quiz: [
      { question: "accent-color?", options: ["फॉर्म रंग", "रंग रेखा", "ध्वनी"], correct: 0 },
      { question: "range?", options: ["स्लाइड खूण", "थर", "क्रम"], correct: 0 },
      { question: "progress?", options: ["मीटर रंग", "नवीन", "रंग"], correct: 0 },
      { question: "color-scheme?", options: ["थीम जोड", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म खूण करा.",
      starterCode: `input {
  accent-color: #0d9488;
}`,
      expectedOutput: "Marathi form controls tint teal",
    },
    interviewQuestions: ["accent-color फायदा?", "कुठे वापर?"],
    related: ["css-light-dark", "css-pseudo-state", "css-forms-styling"],
    prev: "css-focus-visible",
    next: "css-caret-selection",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-caret-selection-2",
    categoryId: "web",
    title: "Caret Selection",
    marathiTitle: "caret — निवड थर",
    level: "advanced",
    minutes: 40,
    summary: "caret-color हायलाइट.",
    sections: [
      { title: "1. caret कल्पना", content: "caret ही input आणि textarea मध्ये झगमगणारी उभी रेषा — जिथे मजकूर टाइप होणार आहे ती जागा दाखवते. caret-color हा गुणधर्म तिचा रंग बदलतो; येथे input वर caret-color: #0d9488 दिला.\nब्राउझरचा नेहमीचा काळा caret सर्व ठिकाणी नीट दिसतो, पण theme च्या रंगाचा caret फॉर्म अधिक सुंदर आणि ओळखण्यासारखा करतो. वापरकर्त्याला नेमके कुठे टाइप करतोय हे स्पष्ट होते.\nहे छोटे तपशील संपूर्ण फॉर्मचा अनुभव सुधारतात — ब्रॅंड रंग caret मुळे देखावा एकसंध होतो. caret-color फक्त रेषेचा रंग बदलतो; टाइप केलेल्या मजकुराच्या रंगावर त्याचा परिणाम नाही.", code: `input {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "2. निवड थर", content: "::selection हा pseudo-element निवडलेल्या मजकुराचा रंग ठरवतो — माऊसने किंवा टॅबने मजकूर निवडला की background आणि text color बदलतो. येथे ::selection ला #0d9488 पार्श्वभूमी आणि पांढरा मजकूर दिला.\nनिवडीचा रंग थीमशी जुळवल्यास वापरकर्त्याला आपली निवड स्पष्ट दिसते — चुकून होणारी निवडही नजरेस येते. Default निळा रंगही काम करतो, पण ब्रँड रंग अधिक सुसंगत दिसतो.\nकाळजी: मजकूर आणि पार्श्वभूमीचा contrast राखा — गडद पार्श्वभूमीवर गडद मजकूर वाचता येणार नाही. हलका background चांगला; त्यामुळे निवडलेला मजकूर सर्वांना स्पष्ट राहतो. ही प्रवेश्यताही आहे.", code: `::selection {
  background: #99f6e4;
  color: #0f172a;
}`, codeLanguage: "css" },
      { title: "3. भाग थर", content: "::selection विशिष्ट घटकावरही लिहिता येतो — h1::selection फक्त शीर्षकाच्या निवडीवर लागू होतो. येथे शीर्षक निवडल्यास background #facc15 आणि मजकूर #1f2937 रंगाचा होतो — अधिक झगमगीत वेगळा देखावा.\nसामान्य मजकुराच्या ::selection पेक्षा भिन्न रंग ठेवल्यास विभाग नेमके दिसतात — शीर्षकाची निवड वेगळी जाणवते. संपूर्ण पेज एकाच नियमात रंगवण्याऐवजी प्रत्येक घटकाला स्वतःची भाषा देतात.\nपण contrast लक्षात ठेवा — yellow पार्श्वभूमीवर गडद मजकूर वाचण्यास स्पष्ट आहे. अशा विशिष्ट नियमांनी page च्या प्रत्येक भागाला योग्य आणि सुसंगत निवड देखावा मिळतो. छोट्या फरकाने संपूर्ण अनुभव उजळतो.", code: `h1::selection {
  background: #0d9488;
  color: white;
}`, codeLanguage: "css" },
      { title: "4. टंकित नियम", content: "caret केवळ input वरच नाही — textarea मध्येही तोच महत्त्वाचा. input, textarea या गटाला caret-color दिला की दोन्ही ठिकाणी मजकूर टाइप करताना रंगीत रेष दिसते.\nदीर्घ मजकूर लिहिणार्या textarea मध्ये caret नेहमी स्पष्ट राहावा — वापरकर्त्याला कुठे लिहीतोय हे लगेच कळते. सतत दिसणारी खूण टाइपिंगच्या अनुभवाला आत्मविश्वास देते.\nउदा. फॉर्म भरताना नावाच्या box नंतर संदेशाच्या box मध्ये — दोन्हीकडे रंगीत caret एकसंध राहतो. माऊस किंवा टॅबने देशील तरी caret चा रंग तोच — फॉर्म भरण्याचा अनुभव स्थिर आणि स्पष्ट राहतो.", code: `input, textarea {
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. मर्यादा थर", content: "::selection च्या रंग निवडीच्या काही मर्यादा आहेत — काही ब्राउझर विशिष्ट pseudo-element वर मर्यादित शैलीच देतात. म्हणून सर्व ब्राउझरमध्ये दिसणारी साधी शैली पाळणे उत्तम.\np::selection वर फक्त color आणि background सारखे सामान्य गुणधर्म सुसंगत दिसतात; font-size, padding सारख्या गोष्टी काही ठिकाणी वगळल्या जातात. त्यामुळे जटिल देखाव्याऐवजी शुद्ध रंग वापरा.\nमर्यादा स्वीकारल्या की शैली सर्व ठिकाणी एकसारखी राहते. उदा. परिच्छेदाची निवड रंगवताना फक्त रंग जोडा — निवड वाचता येणे हेच मुख्य. आधातून साधेपणा ठेवल्यास ब्राउझरच्या फरकांनी निवड अनुभव खराब होत नाही.", code: `p::selection {
  background: #ccfbf1;
}`, codeLanguage: "css" },
      { title: "6. एकत्र थर", content: "caret-color आणि ::selection एकत्र आले की फॉर्मचा प्रत्येक लिखाण-अनुभव एकसंध होतो — caret टाइपिंगची जागा दाखवतो आणि निवडलेला मजकूर रंगात वेगळा दिसतो.\ninput वर दोन्ही नियम लावले — caret-color: #0d9488 म्हणजे रेषेचा रंग; ::selection म्हणजे निवडलेल्या मजकुराचा. दोन्ही समान रंग भाषा — फॉर्मचा अनुभव शिस्तबद्ध आणि स्पष्ट होतो.\nफायदा: वापरकर्ता कुठे लिहीतो आणि कोणता मजकूर निवडला हे दोन्ही लगेच समजते. छोटे तपशील असले तरी प्रत्येक फॉर्म भरताना खूप फरक पडतो — हेच या धड्याचे सूत्र: रंग संबंध, रचना नाही.", code: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये फॉर्मचा लिखाण अनुभव सजवला — input वर caret-color #0d9488 दिला, त्यामुळे टाइप करताना रेषा थीम रंगाची दिसते. त्यासोबत निवडीचा रंगही सुसंगत केला.\nचाचणी करा: box मध्ये क्लिक करून टाइप करा — झगमगणारी रेष नेमकी जागा दाखवते. मजकूर निवडा — निवडलेला भाग थीम रंगात उजळून दिसतो. दोन्ही एकत्र आले की फॉर्मचा संपूर्ण अनुभव एकसारखा भासतो.\nहा धडा केवळ रंग नाही — प्रत्येक छोट्या तपशीलात वापरकर्त्याला मार्गदर्शन करणे शिकवतो. caret आणि selection एकत्र वापरून फॉर्म अधिक स्पष्ट, आरामदायक आणि व्यावसायिक बनतो.", code: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["caret-color काय?", "::selection कुठे?", "h1 निवड?", "मर्यादा कधी?"],
    quiz: [
      { question: "caret-color?", options: ["टंकित रंग", "रंग", "ध्वनी"], correct: 0 },
      { question: "::selection?", options: ["मजकूर हायलाइट", "थर", "क्रम"], correct: 0 },
      { question: "हायलाइट?", options: ["निवड क्षेत्र", "नवीन", "रंग"], correct: 0 },
      { question: "मर्यादा?", options: ["ब्राउझर पाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म खूण करा.",
      starterCode: `input {
  caret-color: #0d9488;
}
::selection {
  background: #99f6e4;
}`,
      expectedOutput: "Marathi caret pops with matching selection",
    },
    interviewQuestions: ["caret फायदा?", "selection मर्यादा?"],
    related: ["css-pseudo-state", "css-text-spacing", "css-forms-styling"],
    prev: "css-accent-color",
    next: "css-columns-layout",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-columns-layout",
    categoryId: "web",
    title: "Columns Layout",
    marathiTitle: "columns — खोल स्तंभ",
    level: "advanced",
    minutes: 40,
    summary: "columns मजकूर वितरण.",
    sections: [
      { title: "1. columns कल्पना", content: "columns हा गुणधर्म मजकूर वेगवेगळ्या स्वतंत्र स्तंभांमध्ये वितरित करतो — वृत्तपत्रासारखी रचना. .text वर columns: 2 लिहिले की सामग्री दोन उभ्या स्तंभांमध्ये विभागली जाते.\nमजकूर आपोआप अखंड वाहतो — पहिला स्तंभ भरल्यावर उरलेला दुसर्या स्तंभात जातो. यासाठी flex किंवा grid ची गरज नाही; ब्राउझर स्वतः समतोल वाटप करतो.\nदीर्घ परिच्छेद, बातमी लेख किंवा वाचन सामग्री यासाठी ही रचना उत्तम — ओळी लहान होतात आणि वाचन गती सुधारते. संपूर्ण लेख एकाच घटकात ठेवला की columns ने सर्व फरक आपोआप होतो.", code: `.text {
  columns: 2;
}`, codeLanguage: "css" },
      { title: "2. अंतर थर", content: "column-gap हा गुणधर्म दोन स्तंभांमधील जागा ठरवतो. .text वर column-gap: 2rem दिला की स्तंभांमध्ये 2rem रुंद मोकळी जागा राहते — मजकूर एकमेकांना चिकटत नाही.\nअंतर उपयोगी का? वाचताना डोळे एका स्तंभातून दुसर्यात सहज सरकतात — कुणीकडे जायचे ते स्पष्ट असते. जास्त अंतर रचना सैल करते, तर कमी अंतर मजकूर गोंधळात टाकतो.\nएकाच ठिकाणी बदल करून संपूर्ण रचनेची जागा नियंत्रित करता येते. वाचन सोपे आणि रचना व्यवस्थित ठेवण्यासाठी योग्य gap निवडणे हेच सूत्र — इथे 2rem संतुलित स्वरूप देते.", code: `.text {
  columns: 2;
  column-gap: 2rem;
}`, codeLanguage: "css" },
      { title: "3. रेषा थर", content: "column-rule हा गुणधर्म स्तंभांमधील मधल्या जागेत उभी रेषा काढतो. येथे 1px जाड, ठळक रंगाची हलकी रेष स्तंभ वेगळे करते — मजकूर मिसळत नाही.\ncolumn-gap च्या मध्यभागी ही रेष बसते; म्हणून gap पुरेसा ठेवल्यास रेष आणि मजकूर यांमधून श्वास घेण्याची जागा मिळते. रेष जास्त जाड किंवा गर्द केल्यास वाचनाला व्यत्यय येतो.\nवृत्तपत्र वा दस्तऐवजातील विभाग स्पष्ट करण्यासाठी ही रेष उपयोगी — दोन्ही स्तंभांची स्वतंत्रता ठळक होते. column-gap आणि column-rule एकत्र वापरल्यास मजकूर स्वच्छ विभागला जातो आणि रचना नीट दिसते.", code: `.text {
  columns: 3;
  column-rule: 1px solid #cbd5e1;
}`, codeLanguage: "css" },
      { title: "4. फुटणे थर", content: "columns मधील समस्या — कार्ड किंवा image एका स्तंभाच्या शेवटी फुटून पुढील स्तंभात विभागले जाऊ शकते. break-inside: avoid या नियमाने ते टळते — घटक एकत्रच राहतो.\n.cards मधील प्रत्येक कार्ड संपूर्ण राहते, अर्धे नाही — मजकूर किंवा सीमा तुटल्यासारखी दिसत नाही. इमेज, फॉर्म किंवा कोणताही स्वतंत्र घटक असा संरक्षित ठेवता येतो.\nहा तपशील लहान, पण रचनेची गुणवत्ता ठरवतो — कार्ड कापल्यासारखे दिसणे असं प्रोफेशनल दिसत नाही. columns वापरताना break-inside: avoid ही सवय जोपासली की सर्व घटक व्यवस्थित राहतात.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "5. मोठे थर", content: "columns मोठ्या स्क्रीनवर वाढवता येते — media query मध्ये columns: 3 दिले की रुंद स्क्रीनवर तीन स्तंभ दिसतात. येथे min-width: 900px वर संपूर्ण मजकूर तीन उभ्या भागांत विभागला जातो.\nलहान पडद्यावर एक स्तंभच राहतो — मोबाइलवर तीन लहान स्तंभ वाचणे कठीण होते. त्यामुळे breakpoint नंतरच स्तंभांची संख्या वाढवणे योग्य — responsive रचना बनते.\nस्तंभांची संख्या वाढवल्याने अंतर आणि रेषेचे गुणधर्म तसेच राहतात; frame बदलला तरी शैली टिकते. मोठ्या पडद्याच्या जागेचा पूर्ण उपयोग होऊन वाचन आरामदायक राहतो.", code: `@media (min-width: 900px) {
  .text {
    columns: 3;
  }
}`, codeLanguage: "css" },
      { title: "6. तुलना थर", content: "दीर्घ मजकूरासाठी columns उत्तम; पण स्वतंत्र कार्डे वा विजेट्ससाठी grid अधिक योग्य — grid मध्ये प्रत्येक रचना वेगळी ठेवता येते. .news मध्ये मजकूर स्तंभांत वाहतो तर grid कार्डांची रेषा नियंत्रित करते.\ncolumns चा फायदा: फक्त मजकूर दिला की रचना आपोआप होते; grid ला rows आणि columns नियोजन हवे. columns गणना हलकी आणि प्रवाह सोपा असल्याने लेख रचनेसाठी तो प्रभावी.\ntुलना करून निवड: सतत वाचण्याचा लांब मजकूर — columns; असंबंधित घटकांची यादी — grid. प्रत्येक साधनाचे स्वतःचे उद्दिष्ट आहे; योग्य निवड केली की रचना वाचनीय आणि देखभालक्षम राहते.", code: `.news {
  columns: 2;
}
.news .item {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये लेख विभागात columns चा उपयोग केला — .articles वर columns आणि gap दिला की दीर्घ लेख वृत्तपत्राच्या स्तंभांसारखा वाचला जातो. मजकूर आपोआप विभागला जातो.\nजोडून break-inside: avoid नियम मुलांवर द्या — कोणतीही इमेज किंवा कार्ड अर्धे फुटणार नाही. स्तंभांची संख्या वेगवेगळी करून परिणाम पहा — रचना कशी बदलते हे लगेच समजते.\nपुढे media query जोडून मोठ्या पडद्यावर स्तंभ वाढवा — लहान पडद्यावर एक, मोठ्यावर दोन-तीन. प्रवाह आणि अंतर नियंत्रित ठेवल्यास वाचन आरामदायक होते — हेच या सरावाचे सूत्र.", code: `.articles {
  columns: 2;
  column-gap: 2rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["columns काय?", "column-gap कुठे?", "rule कसा?", "break-inside कधी?"],
    quiz: [
      { question: "columns?", options: ["मजकूर वितरण", "रंग", "ध्वनी"], correct: 0 },
      { question: "column-gap?", options: ["अंतर नेमके", "थर", "क्रम"], correct: 0 },
      { question: "column-rule?", options: ["रेषा भाग", "नवीन", "रंग"], correct: 0 },
      { question: "break-inside?", options: ["फुटणे टाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "वृत्तपत्र स्तंभ करा.",
      starterCode: `.articles {
  columns: 2;
  column-gap: 2rem;
}`,
      expectedOutput: "Marathi news columns balance with inside-avoid",
    },
    interviewQuestions: ["columns फायदा?", "grid पेक्षा कधी?"],
    related: ["css-grid-template", "css-subgrid", "css-responsive-table"],
    prev: "css-caret-selection",
    next: "css-dialog-backdrop",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-dialog-backdrop",
    categoryId: "web",
    title: "Dialog Backdrop",
    marathiTitle: "dialog — पॉपअप थर",
    level: "advanced",
    minutes: 40,
    summary: "dialog ::backdrop नियम.",
    sections: [
      { title: "1. dialog कल्पना", content: "dialog हा मूळ HTML घटक — पॉपअप, मोडल किंवा नोटिफिकेशन तयार करण्यासाठी. showModal() या JavaScript पद्धतीने ते उघडते आणि बाकी पेज अवरोधित होतो.\nस्वतःच्या div वर बनवलेल्या पॉपअपपेक्षा dialog चे फायदे: कीबोर्डला टॅब फ्रेम मिळते, Escape दाबता ठीक आणि स्क्रीन रीडरला मोडल समजते. वर्तन ब्राउझरचेच असल्याने सुरक्षित आणि अंदाजे राहते.\nयेथे dialog वर background, padding आणि border-radius दिले — दिसण्याची शैली आपली, पण वागणूक native. म्हणजे फायदा दोघांचा: पॉपअप सुंदर दिसतो आणि प्रवेश्यता टिकते.", code: `dialog {
  border: none;
  border-radius: 12px;
}`, codeLanguage: "css" },
      { title: "2. backdrop थर", content: "dialog::backdrop हा pseudo-element dialog च्या मागील संपूर्ण पडद्यावर पसरतो — त्याला रंग दिला की पेज मागे गडद होते आणि dialog समोर स्पष्ट दिसतो.\nयेथे backdrop ला अर्ध-पारदर्शक गडद रंग दिला — पेज दिसतच राहते, पण लक्ष dialog वरच केंद्रित राहते. मागील मजकूर वाचता येण्याइतका अस्पष्ट होणे हे उद्दिष्ट.\nहे ओव्हरले माऊसप्रमाणेच वाटते; backdrop हा घटक नाही, म्हणून त्यावर क्लिकने dialog बंद होत नाही. foci: backdrop रंगविणे म्हणजे वापरकर्त्याला 'आता आपण पॉपअपमध्ये आहोत' हे सुस्पष्ट करणे — रचना वाचता राहून लक्ष नियंत्रित राहते.", code: `dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`, codeLanguage: "css" },
      { title: "3. खाली थर", content: "मोठ्या मजकूराचे dialog रुंदीत मर्यादित पण दृश्यमान ठेवले जाते — max-width दिला की लहान पडद्यावरही ते किनारीला न चिकटता नीट दिसते. येथे dialog ला योग्य पॅडिंग आणि सुंदर आकार दिला.\nपॅडिंग महत्त्वाचे: dialog मधील मजकूर काठाला चिकटला तर रचना गोंधळलेली वाटते. संतुलित पॅडिंग मजकुराला श्वास घेण्याची जागा देते आणि वाचन सोपे होते.\nक्रम स्पष्ट: आधी dialog ची उंची-रुंदी, मग पॅडिंग, शेवटी backdrop रंग — असे केले की घटक व्यवस्थित आणि प्रवेशयोग्य राहतो. या क्रमाने शैली जोडल्यास नवीन प्रकल्पातही तीच रचना पाळता येते.", code: `dialog {
  padding: 1.5rem;
  max-width: min(90vw, 30rem);
}`, codeLanguage: "css" },
      { title: "4. निकट थर", content: "dialog उघडताच focus कुठे आहे ते दृश्यमान करणे गरजेचे — dialog:focus वर वलय दिले की कीबोर्ड वापरकर्त्याला स्थान स्पष्ट होते. निवड वलय रंगीत आणि सहज दिसणारे असावे.\nस्वयंचलित focus मुळे टॅब सर्वांत आधी dialog घटकावर येतो; म्हणून वलय आवश्यक — अन्यथा वापरकर्त्याला कुठे आहोत ते समजत नाही. Escape, टॅब आणि निवडचा संपूर्ण मार्ग स्पष्ट दिसणे आवश्यक.\nbackdrop सोबत हे सर्व आल्यास अनुभव पूर्ण होतो: मागे गडद, समोर dialog आणि स्पष्ट focus. प्रवेश्यतेचे हे तीन भाग एकत्र जोडले की कोणताही वापरकर्ता पॉपअप सहज वापरू शकतो — हीच या धड्याची जाणीव.", code: `dialog:focus {
  outline: none;
}
dialog :focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. थीम थर", content: "backdrop मऊ ठेवण्यासाठी आधी गडद पार्श्वभूमी आणि नंतर backdrop-filter: blur जोडता येते — मागील पेज अस्पष्ट पण ओळखण्यासारखे दिसते. यामुळे backdrop मऊ आणि आधुनिक दिसतो.\nथीमशी जुळणारा रंग निवडणे महत्त्वाचे — गडद थीमवर कमी गडद backdrop, हलक्या थीमवर किंचित गडद. विपरीत रंग जुळत नाहीत आणि डोळ्यांना त्रास देतात.\nblur ने मागचे लक्ष विचलित होत नाही — वाचकाचे लक्ष dialog वरच राहते. पण backdrop-filter चा आधार तपासायला विसरू नये; काही ब्राउझरवर मऊ रंग तरीही नीट काम करतो.", code: `dialog::backdrop {
  background: oklch(0.2 0.05 240 / 0.6);
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "backdrop-filter हे नवीन वैशिष्ट्य असल्याने आधार सर्व ब्राउझरमध्ये नाही. @supports (backdrop-filter: blur(2px)) च्या आतच blur नियम ठेवला — ब्राउझरला तो समजला तरच मऊ देखावा लागेल.\nजुने ब्राउझर आधीचा साधा backdrop नियम घेतात — मागे गडद रंग दिसतो, पण blur नाही. तरीही dialog नीट उघडतो आणि वापरता येतो — सोपे बाहेर पडायचेही उपलब्ध असल्यास अनुभव सुरक्षित.\nहीच progressive enhancement सवय: सर्वांसाठी मूलभूत, नव्यांसाठी सुधारणा. ब्राउझरनुसार देखावा वेगळा होतो, पण वर्तन कधीही तुटत नाही — नवीन गुणधर्म या पद्धतीनेच वापरा.", code: `@supports (backdrop-filter: blur(2px)) {
  dialog::backdrop {
    backdrop-filter: blur(2px);
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये कार्ड-शैलीचा dialog तयार केला — dialog वर गोल कोपरे, योग्य पॅडिंग आणि मऊ रंग दिला. showModal() ने तो उघडताच backdrop खाली गडद होतो आणि कार्ड समोर दिसते.\nचाचणी: बटण क्लिक करून dialog उघडा — पेज मागे अस्पष्ट, dialog स्पष्ट. Escape दाबून बंद करा — वर्तन ब्राउझरचेच. फोकस वलय स्पष्ट दिसत असल्यास अनुभव पूर्ण.\nहा धडा dialog च्या वर्तनाचा पाया देतो — उघडणे, बंद होणे, backdrop आणि focus. पुढे JavaScript जोडून बटण नियंत्रण आणि animate करा; मूलभूत नियम टिकला की सर्व काही व्यवस्थित बसते.", code: `dialog {
  border: none;
  border-radius: 12px;
}
dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["dialog काय?", "::backdrop कुठे?", "फोकस कसा?", "आधार कधी?"],
    quiz: [
      { question: "dialog?", options: ["पॉपअप थर", "रंग", "ध्वनी"], correct: 0 },
      { question: "::backdrop?", options: ["मागे रंग", "थर", "क्रम"], correct: 0 },
      { question: "showModal?", options: ["मोडल खुले", "नवीन", "रंग"], correct: 0 },
      { question: "बाहेर नियम?", options: ["सोपे पाळा", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड dialog करा.",
      starterCode: `dialog {
  border: none;
  border-radius: 12px;
}
dialog::backdrop {
  background: rgb(0 0 0 / 0.4);
}`,
      expectedOutput: "Marathi modal opens with dim backdrop",
    },
    interviewQuestions: ["dialog फायदा?", "backdrop कधी?"],
    related: ["css-focus-visible", "css-anchor-positioning", "css-forms-styling"],
    prev: "css-columns-layout",
    next: "css-anchor-positioning",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-anchor-positioning",
    categoryId: "web",
    title: "Anchor Positioning",
    marathiTitle: "anchor — स्थान थर",
    level: "advanced",
    minutes: 40,
    summary: "anchor() निर्देश नेमका.",
    sections: [
      { title: "1. anchor कल्पना", content: "Anchor positioning म्हणजे एका घटकाला दुसर्या घटकाशी जोडून ठेवणे — उदा. टूलटिप ला त्याच्या बटणाशी. anchor-name हा गुणधर्म एका घटकाला नाव देतो, जेणेकरून दुसरा घटक त्याला संदर्भ देऊ शकतो.\nयेथे .tip ला anchor-name: --tip दिला — आता इतर घटक या नावाने त्याला ओळखतात. नाव फक्त संदर्भ आहे; घटकाची रचना बदलत नाही. प्रत्येक anchor ला वेगळे नाव दिले तर अनेक टूलटिप नेमक्या जागी बसतात.\nही यंत्रणा position साठी मूलभूत आहे — माऊस किंवा मजकूर बदलला तरी टूलटिप आपोआप anchor सह हलते. म्हणून अचूक आणि देखभालक्षम स्थान मिळते 'निर्देश स्पष्ट' ठेवून.", code: `.tip {
  position: relative;
  anchor-name: --tip;
}`, codeLanguage: "css" },
      { title: "2. जोड थर", content: "position-area हा गुणधर्म घटकाला anchor च्या कोणत्या बाजूला बसवायचे ते सांगतो — उदा. बबल बटणाच्या उजवीकडे किंवा वर बसवणे. .bubble वर position-area दिला की स्थान गणना ब्राउझर करतो.\nस्वतःची गणना नाही — position आणि inset मोजण्याची गरज नाही. 'शेजारी स्थिती' एका ओळीत लिहिता येते, म्हणून कोड लहान आणि वाचनीय राहतो. anchor बदलला की बबल आपोआप नव्या जागेत झुकतो.\nहे तंत्र टूलटिप, popover आणि मेनूसाठी आदर्श — प्रत्येकाला जवळच्या घटकाशी स्पष्ट स्थान मिळते. गणना न करता अचूक स्थान मिळवणे म्हणजे anchor positioning चा थेट फायदा.", code: `.bubble {
  position: absolute;
  position-area: top center;
}`, codeLanguage: "css" },
      { title: "3. वेळोवेळी नियम", content: "@position-try हा नियम स्थान संघर्ष सोडवतो — सांगतो की पहिली जागा भरली किंवा हलकी गेली तर कोणती पर्यायी जागा वापरायची. .bubble वर alternate स्थानाचे नमुने दिले.\nउदा. टूलटिप पडद्याच्या काठावर पोहोचली तर @position-try ने ती उलट बाजूला सरकते — कापली जात नाही. लहान पडद्यावरही मजकूर पूर्ण दिसतो.\nही सवय 'बदल नेमका' करते: प्रत्येक स्थानाचे पर्याय आधीच नमूने म्हणून ठरवलेले असतात. कोणतेही JavaScript झुकवणे नको — ब्राउझर स्वतः पर्याय अमलात आणतो, त्यामुळे वर्तन अंदाजे आणि सुरक्षित राहते.", code: `.bubble {
  position-area: bottom center;
  @position-try --above {
    position-area: top center;
  }
}`, codeLanguage: "css" },
      { title: "4. स्थान थर", content: "anchor() हे फंक्शन आधीच्या position मूल्यात थेट anchor बिंदू वापरते — उदा. left: anchor(--tip right) म्हणजे anchor च्या right बाजूला. .tooltip वर अशा स्थान मूल्यांसह नेमके ठिकाण मिळते.\nकोन (top, right, bottom, left) आणि मध्य (center) अशी मूल्ये देऊन टूलटिप कोपऱ्यात किंवा मध्यभागी बसवता येते. गणना ब्राउझर करत असल्याने रुंदी बदलली तरी स्थान समायोजित होते.\nउदा. लेबलशी जोडलेली टूलटिप — anchor च्या सर्व बाजू function मध्ये दर्शवता येतात. 'निकट स्पष्ट' ठेवण्यासाठी anchor() अचूक संदर्भ देते, त्यामुळे त्याचे स्थान नेहमी व्यवस्थित पडते.", code: `.tooltip {
  left: anchor(--tip right);
  top: anchor(--tip top);
}`, codeLanguage: "css" },
      { title: "5. क्षमता थर", content: "anchor positioning नवीन तंत्र असल्याने आधार मर्यादित — सर्व ब्राउझरला ते समजत नाही. म्हणून आधी तपासणी करा आणि साधा मूलभूत नियम ठेवा.\nयेथे .bubble ला आधी absolute आणि सामान्य स्थान दिले — टूलटिप जुना पद्धतीने दिसतेच. मग @supports मध्ये anchor आधार तपासून नवे position-area नियम लागू केले.\nहे progressive enhancement: सर्वांसाठी कार्यरत साधा आधार आणि नव्यांसाठी अचूक anchor स्थान. जुन्या ब्राउझरवर टूलटिप स्थान गमावते पण तुटत नाही — हीच सुरक्षित सवय नवीन गुणधर्मांसाठी योग्य राहते.", code: `.bubble {
  position: fixed;
}
@supports (anchor-name: --tip) {
  .bubble {
    position: absolute;
    position-area: bottom center;
  }
}`, codeLanguage: "css" },
      { title: "6. पडताळा थर", content: "नवीन नियम add करण्यापूर्वी जुन्या रचनेचे पडताळणी करा — anchor नावे, position-area आणि @position-try जुळत असतील तरच स्थान व्यवस्थित पडते. प्रत्येक नियम ब्राउझरवर तपासा.\nजुने तपासताना खालील गोष्टी पडताळा: anchor-name असलेला घटक अस्तित्वात आहे का, नावे नेमकी जुळतात का, आणि पर्यायी स्थान Shift बदलताना नीट काम करतो का. एक चुकला तरी स्थान अचूक राहत नाही.\nपडताळा हा अंतिम टप्पा — सर्व विधाने एकत्र असल्यास टूलटिप नेहमी योग्य जागी बसते. नवीन तंत्रांचा वापर म्हणजे गणना नाही; नियम उतरवून पडताळणीची सवय — हेच भव्य बळ.", code: `.bubble {
  position-area: top center;
  @position-try --below {
    position-area: bottom center;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये बटणाभोवती टूलटिप ठेवली — .tip वर anchor-name दिला आणि टूलटिपला position-area ने त्याच्या शेजारी बसवले. माऊस किंवा किबोर्ड फोकसने टूलटिप दिसते.\nचाचणी: बटणावर mouse ठेवा — टूलटिप नेमकी बाजूला येते. पडद्याच्या काठापाशी नेल्यास @position-try ने ती उलट बाजूला सरकते — अर्धी कापली जात नाही.\nएवढ्या टूलटिपमधून anchor positioning चा संपूर्ण पाया समजतो — नाव, स्थान आणि पर्याय. पुढे popover, मेनू आणि उच्च विजेट्ससाठी तेच तंत्र वापरा; मूळ रचना सुरक्षित ठेवल्यास सर्वत्र समान वर्तन मिळते.", code: `.tip {
  anchor-name: --tip;
}
.bubble {
  position: absolute;
  position-area: top center;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["anchor-name काय?", "position-area कुठे?", "@position-try काय?", "anchor() कधी?"],
    quiz: [
      { question: "anchor-name?", options: ["स्थान नाव", "रंग", "ध्वनी"], correct: 0 },
      { question: "position-area?", options: ["शेजारी स्थिती", "थर", "क्रम"], correct: 0 },
      { question: "@position-try?", options: ["पर्याय नमुने", "नवीन", "रंग"], correct: 0 },
      { question: "anchor()?", options: ["कोन नेमका", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "टूलटिप स्थान करा.",
      starterCode: `.tip {
  anchor-name: --tip;
}
.bubble {
  position: absolute;
  position-area: top center;
}`,
      expectedOutput: "Marathi tooltip pins to its anchor",
    },
    interviewQuestions: ["anchor फायदा?", "आधार स्थिती?"],
    related: ["css-overflow-deep", "css-focus-visible", "css-dialog-backdrop"],
    prev: "css-dialog-backdrop",
    next: "css-property-registry",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-property-registry",
    categoryId: "web",
    title: "Property Registry",
    marathiTitle: "@property — नवा चल",
    level: "advanced",
    minutes: 40,
    summary: "@property सजीव चल.",
    sections: [
      { title: "1. @property कल्पना", content: "@property हा नियम custom property (चल) ला अधिकृत स्वरूप देतो — syntax, initial-value आणि inherits घोषित करता येते. येथे @property --spacing ला दैर्धाकाशाची syntax दिली.\nsyntax सांगते की variable मध्ये कोणत्या प्रकारचे मूल्य येईल — उदा. <length> म्हणजे 1rem, 10px; रंग किंवा पूर्ण संख्या वेगळे. मूल्य जुळत नसल्यास initial-value वापरला जातो.\nहे महत्त्वाचे का? सामान्य custom property हा ब्राउझर sentence समजतो; @property मधून त्याचा अर्थ ठरतो. मग गणना, तुलना आणि transition योग्यरित्या चालते — 'सजीव चल' मिळते, कोड स्पष्ट राहतो.", code: `@property --spacing {
  syntax: "<length>";
  inherits: false;
  initial-value: 1rem;
}`, codeLanguage: "css" },
      { title: "2. रंग थर", content: "रंगाचे चल @property ने syntax: <color> अशी तयार करता येते. येथे --tone हे रंग म्हणून घोषित केले — मग transition ने रंग गुळगुळीत बदलता येतो.\nलेखन सोपे: @property --tone { syntax: \"<color>\"; initial-value: #0d9488; inherits: true; } — अर्थ स्पष्ट. कोड वाचणार्याला लगेच कळते हे चल रंग धारण करते.\nफायदा: transition सध्या रंगातील बदल गुळगुळीत करते — कारण ब्राउझरला रंगाचा प्रकार माहीत असतो. साधा var() असता तर बदल अचानक होत नाही; @property मुळे डिझाइनमध्ये कोड, रचना आणि गती एकत्र येते.", code: `@property --tone {
  syntax: "<color>";
  inherits: true;
  initial-value: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. कोन थर", content: "कोनाचे चल gradient आणि रोटेशनसाठी उत्तम — @property --angle ला syntax: <angle> दिला की मूल्य degrees मध्ये लिहिता येते. येथे --angle च्या बदलाने gradient फिरतो.\nकोन बदलणे म्हणजे गती निर्माण करणे — @keyframes मध्ये angle घटत/वाढत जातो आणि gradient इकडे-तिकडे हलतो. गणना ब्राउझर करतो, आपल्याला फक्त कोन द्यायचा असतो.\ngradient वर 0deg ते 360deg पर्यंत नेण्यासाठी interpolation आवश्यक असते — म्हणून @property चा अर्थ 'नेमकी गती' आहे. अपेक्षित वर्तन मिळविण्यासाठी initial-value आणि inherits योग्य ठेवा.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}`, codeLanguage: "css" },
      { title: "4. जोड थर", content: "@property मधील चल संपूर्ण project मध्ये वापरता येते — .card वर border-radius, पॅडिंग किंवा रंग यांमध्ये ते जोडता येते. येथे .card मध्ये custom property वापरून गती बसवली.\nचल कुठे आणि कसे उपयोगी — .card ला अनेक अवस्था: hover वर मूल्य बदलते, transition गुळगुळीत होते. प्रत्येक ठिकाणी नवीन नियम लिहिण्याची गरज नाही.\nमर्यादा स्पष्ट: syntax घोषित केलेल्या प्रकारापलीकडे मूल्य देता येत नाही — म्हणून गैरसमज टळतात. नवीन चल जोडणे म्हणजे डिझाइन systematize करणे: प्रत्येक मूल्याचा अर्थ चिन्हाने निश्चित राहतो.", code: `.card {
  --spacing: 1.5rem;
  padding: var(--spacing);
}`, codeLanguage: "css" },
      { title: "5. आधार थर", content: "@property चा आधार नवीन असल्याने जुने ब्राउझर ते वगळतात — म्हणून मूलभूत आधार ठेवा. :root मध्ये आधी साधा var() ची व्याख्या द्या, ज्याने रचना कार्यरत राहते.\nमग @supports (--tone: #000) ने @property चा आधार तपासा — समजला तरच syntax आणि initial-value लागू होतील. जुने ब्राउझर साधे मूल्य वापरतात, नवे संपूर्ण फायदा घेतात.\nही सवय सुरक्षिततेची: काहीही तुटत नाही, सर्वांना किमान अनुभव मिळतो. नवीन तंत्र नेहमी @supports च्या मागे ठेवावे — प्रत्येक वापरकर्ता त्याच्या ब्राउझरला अनुकूल अनुभव घेतो.", code: `:root {
  --tone: #0d9488;
}
@supports (--tone: red) {
  .card {
    --tone: #0f766e;
  }
}`, codeLanguage: "css" },
      { title: "6. सजीव नियम", content: "@property हे चल मुक्त घडवते — transition आणि @keyframes मध्ये त्याचे मूल्य सजीव होते. येथे .card वर custom property बदलल्याने गती हुकते आणि मूल्य दोन अवस्थांमध्ये गुळगुळीत सरकते.\nचलाला एनीमेशन मिळते, कारण syntax ते चल मूल्याचा प्रकार ठरवते. 0.5s सोबत hover, focus किंवा वेळेनुसार बदल — सर्व नियंत्रण एकाच चलामधून.\nहे 'सजीव नियम' चे रहस्य: आधी व्याख्या, मग वापर, शेवटी गती. अशा रचनेत नवीन दृश्ये बनवणे सोपे होते आणि कोड मर्यादित राहतो — दोन्हींला एकत्र रचत ते सजीव आणि देखभालक्षम बनते.", code: `.card {
  animation: spin 2s linear infinite;
}
@keyframes spin {
  to {
    --angle: 360deg;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रोजेक्टमध्ये @property --angle ने gradient फिरवला — syntax: <angle> घोषित करून कोनाचे चल तयार केले. @keyframes मध्ये तो सतत फिरतो, त्यामुळे रंगीत सजीव पार्श्वभूमी मिळते.\nचाचणी: --angle बदलून gradient ची दिशा बघा — प्रत्येक मूल्यावर रचना नव्याने वळते. संपूर्ण घटक CSS मध्येच सजीव होत असल्याने JavaScript ची गरज नसते.\nहे खरे तर @property ची क्षमता दाखवते — चल फक्त मूल्य धरतो नाही, तर प्रकार आणि गतीही पकडतो. पुढे रंग आणि अंतराचे चल जोडा; एकच यंत्रणा संपूर्ण डिझाइन गतिमान करते.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@property काय?", "syntax कुठे?", "inherits काय?", "सजीव चल कसा?"],
    quiz: [
      { question: "@property?", options: ["चल नोंदणी", "रंग", "ध्वनी"], correct: 0 },
      { question: "syntax?", options: ["मूल्य प्रकार", "थर", "क्रम"], correct: 0 },
      { question: "inherits?", options: ["वारसा नियम", "नवीन", "रंग"], correct: 0 },
      { question: "सजीव चल?", options: ["कोन गती", "रेखा", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "सजीव चल करा.",
      starterCode: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`,
      expectedOutput: "Marathi badge spins via registered property",
    },
    interviewQuestions: ["@property फायदा?", "कुठे गरज?"],
    related: ["css-custom-props", "css-animation-easing", "css-oklch-color"],
    prev: "css-anchor-positioning",
    next: "css-marathi-capstone15",
    levelLabel: CSS15_LABEL,
  },
  {
    slug: "css-marathi-capstone15",
    categoryId: "web",
    title: "Interaction Capstone",
    marathiTitle: "Systems Bag — स्थिती थर",
    level: "advanced",
    minutes: 40,
    summary: "Level 15 साधने एकत्र.",
    sections: [
      { title: "1. थर क्रम", content: "@layer हा या धड्यांचा पहिला पाया — शैलींना नावे असलेल्या थरांमध्ये विभागून क्रम ठरवतो. @layer base, components; च्या आधी base नंतर components या क्रमाने शैली लागू होतात.\nयेथे @layer components मध्ये .btn ला color: white दिला — थराच्या नावात नियम सामावला जातो. दोन थरांत विरोधी नियम आले तर घोषित क्रमाने शेवटचा थर जिंकतो — क्रम नेमका याचा अर्थ हाच.\nप्रकल्पात थराचा उपयोग म्हणजे संघटना: base मूलभूत, components घटके. क्रम आधी ठरवल्यास नवीन शैली कोठे लिहायची हे आपोआप समजते — मोठ्या फाईलचे व्यवस्थापन सोपे होते.", code: `@layer base, components;
@layer components {
  .btn {
    color: white;
  }
}`, codeLanguage: "css" },
      { title: "2. घरटे थर", content: "Native nesting हे दुसरे साधन — .card च्या आत & h2 लिहिले की .card मधील सर्व शीर्षकांना color जातो. & चिन्ह पालकाला दर्शवते, त्यामुळे selectors पुन्हा लिहण्याची गरज नाही.\nवाचन सोपे होते: कार्डची संपूर्ण शैली एकाच ठिकाणी — शीर्षकाचा नियम कार्डातच. पालक आणि मुलगा यांच्यातील संबंध डोळ्यासमोर दिसतो, कोड पुनरावृत्तीतून मुक्त होतो.\nघरटे नेहमी संयमानेच वापरा — खोली तीन-चार स्तरांच्या आत ठेवा. अशा सवयीने specificity कमी राहते आणि देखभाल सोपी होते; हीच nesting ची योग्य पद्धत आहे.", code: `.card {
  & h2 {
    color: #0d9488;
  }
}`, codeLanguage: "css" },
      { title: "3. दिशा थर", content: "Logical properties तिसरे साधन — .media वर padding-inline: 1rem म्हणजे दोन्ही बाजूंचे अंतर एकाच ओळीत. inline दिशा वाचन-प्रवाहाची (डावी-उजवी), block दिशा वर-खाली.\nभाषा किंवा text direction बदलली तरी हे अंतर आपोआप योग्य दिशेने जाते — left/right सारखे गोंधळ नाही. तुम्ही आंतरराष्ट्रीय रचना करता तेव्हा हेच सुरक्षित मार्गदर्शक ठरते.\nम्हणून या धड्यांचा नियम: padding, margin, border यांमध्ये शक्यतो logical मूल्ये वापरा. रचना नीट राहते आणि भविष्यातील भाषा-बदलांसाठी डिझाइन तयार असते.", code: `.media {
  padding-inline: 1rem;
}`, codeLanguage: "css" },
      { title: "4. स्थान थर", content: "स्थान आणि लक्ष यांची जोडणी येथे दिसते — .gallery वर scroll-snap-type: x mandatory क्षैतिज स्क्रोल नेमक्या स्थानी थांबवते, प्रत्येक स्लाइड नीट दिसते. यासोबत :focus-visible वर outline वलय.\nकीबोर्डने कोणताही घटक ठळक वलयाने स्पष्ट होतो — टॅब करताना वापरकर्त्याला स्थान नेहमी कळते. दोन्ही एकत्र आले की स्क्रोल आणि फोकस हे वर्तन अभेद्य बनते.\nस्नॅप दृश्य मार्गदर्शन, वलय प्रवेश्यता — मिळून 'लक्ष स्पष्ट' ठेवतात. या दोन यंत्रणा अनेक component मध्ये एकत्र येतात; त्यांचा क्रम आणि आकार व्यवस्थित ठेवणे आवश्यक.", code: `.gallery {
  scroll-snap-type: x mandatory;
}
:focus-visible {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "5. फॉर्म थर", content: "फॉर्मचा रंग आणि लिखाण दोन्ही एकत्र सुधारते — input वर accent-color: #0d9488 ने निवड चौकोन आणि रेडिओचा रंग बदलतो; caret-color त्याच रंगाने टाइपिंगची रेषा रंगवते.\nनिवड स्पष्ट होते: checkbox निवडल्यास खूण ब्रँड रंगाची, आणि टाइप करताना झगमगणारी रेष तीच भाषा बोलते. वापरकर्त्याला फॉर्म कोणत्या ठिकाणी आणि कसे भरतोय हे लगेच समजते.\nयामुळे फॉर्म अधिक व्यावसायिक दिसतो आणि प्रवेश्यता सुधारते — दृश्य सूचना दोन्ही बाजूंनी स्पष्ट. accent-color आणि caret-color एकत्र वापरणे म्हणजे फॉर्मला संपूर्ण रंग भाषा देणे.", code: `input {
  accent-color: #0d9488;
  caret-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "6. सजीव थर", content: "सजीव थर म्हणजे तीन गतिमान साधने — dialog पॉपअप मोडल, anchor positioning टूलटिप स्थान आणि @property मधील सजीव चल. येथे @property --angle ने कोन नोंदवला आणि .badge चा conic-gradient त्याला वळतो.\nsyntax: <angle> ने ब्राउझरला कोनाचा प्रकार कळतो — मग keyframes मध्ये मूल्य बदलल्यास gradient शिस्तीने फिरतो. dialog आणि anchor ने पॉपअप व टूलटिपला क्रम आणि स्थान मिळते.\nहे तिन्ही मिळून एक संपूर्ण 'सजीव' पृष्ठ बनवतात — मोडल खुलतो, टूलटिप सरकते, रंग फिरतो. प्रत्येक साधन छोटे, पण एकत्र वापरल्यास अनुभव अत्यंत गतिमान होतो.", code: `@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
.badge {
  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);
}`, codeLanguage: "css" },
      { title: "Final Project", content: "अंतिम वेब स्थिती सर्व धडे एकत्र जोडते — @layer घोषणा क्रम ठरवते, .card मध्ये & h2 nesting ने शीर्षकाचा रंग सांभाळतो आणि input वर accent-color फॉर्मला रंग देतो.\nडावीकडे थरांचा क्रम, वरून घरटे आणि मजकुराचा रंग, खाली फॉर्म रंग — सर्व स्वतंत्र नियम एकत्र काम करतात. प्रत्येक तंत्राची जबाबदारी स्पष्ट असल्याने रचना देखभालक्षम राहते.\nपुढे स्वतः फिरता gradient, निवड रंग आणि dialog जोडा — धड्यांतून शिकलेली प्रत्येक यंत्रणा येथे वापरून पहा. संपूर्ण सिस्टम बनल्यावर क्रम, घरटे आणि रंग यांचा खरा अर्थ लक्षात येतो.", code: `@layer base, components;
.card {
  & h2 {
    color: #0d9488;
  }
}
input {
  accent-color: #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 15 थीम?", "@layer काय?", "nesting कुठे?", "accent कधी?"],
    quiz: [
      { question: "Level 15 थीम?", options: ["Systems & Interaction", "जुना थर", "रंग रेषा"], correct: 0 },
      { question: "@layer?", options: ["क्रम थर", "ध्वनी", "क्रम"], correct: 0 },
      { question: "nesting?", options: ["घरटे शैली", "रंग", "शोर"], correct: 0 },
      { question: "accent-color?", options: ["फॉर्म रंग", "रेखा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "वेब स्थिती बनवा.",
      starterCode: `@layer base, components;
.card {
  & h2 {
    color: #0d9488;
  }
}`,
      expectedOutput: "Final interaction patterns via Marathi portal",
    },
    interviewQuestions: ["तीन आवडते?", "@layer मर्यादा?"],
    related: ["css-marathi-capstone14", "css-cascade-layers", "css-accent-color"],
    prev: "css-property-registry",
    next: "css-cascade-layers",
    levelLabel: CSS15_LABEL,
  },];
