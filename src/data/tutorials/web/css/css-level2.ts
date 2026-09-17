import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 2 — उन्नत शैली आणि हालचाल ===
export const CSS2_LABEL = "CSS · Level 2 — उन्नत शैली आणि हालचाल";

export const cssLevel2: Tutorial[] = [
  {
    slug: "css-layout-methods",
    categoryId: "web",
    title: "Layout Methods",
    marathiTitle: "Layout — भाग व्यवस्था",
    level: "intermediate",
    minutes: 18,
    summary: "block, inline आणि inline-block वर्तन, float तंत्र आणि display पर्याय.",
    sections: [
      { title: "1. display परिचय", content: "display हा CSS layout चा पाया आहे — प्रत्येक घटक पेजवर कसा दिसेल आणि कसा वागेल हे या एका गुणधर्माने ठरते. HTML च्या प्रत्येक घटकाला एक मूळ वर्तन असते; display ते वर्तन बदलतो.\nउदा. display: block लावलं तर घटक संपूर्ण ओळ घेतो आणि पुढचा घटक नवीन ओळीत सुरू होतो. display: inline लावलं की घटक मजकुराच्या ओळीतच राहतो — शेजारी वाहत राहतो.\nमनात एकदा हे दोन वर्तन बसले की layout मधील बहुतेक आश्चर्य संपतात. घटकाची रचना बिघडली असेल तर सगळ्यात आधी त्याचा display तपासा — बरेचदा इथेच गडबड लपलेली असते.", code: `p {
  display: block;
}`, codeLanguage: "css" },
      { title: "2. block वर्तन", content: "block हे सर्वांत सामान्य वर्तन आहे. div, p, h1, section असे बहुतेक मोठे घटक block असतात — ते उपलब्ध पूर्ण रुंदी घेतात आणि वर-खाली एका प्रवाहात बसतात.\nblock घटकाला स्वतःची रुंदी द्यायची असेल तर width ठरवता येते; उदा. .pane ला width: 80% दिलं की तो आसपास शेजारी न राहता आपल्या स्वतःच्या ओळीत बसतो.\nनंतर margin: 0 auto लिहिल्यावर संगणक उरलेली जागा दोन्ही बाजूंनी समान वाटतो — घटक आपोआप मध्यभागी बसतो आणि layout संतुलित दिसतो.\nही सोपी तंत्रे समजली की flex किंवा grid न येता सुद्धा रुंद आणि सुसंगत रचना उभी करता येते. block हा नेहमीचा, स्थिर पाया आहे.", code: `.pane {
  width: 80%;
  margin: 0 auto;
}`, codeLanguage: "css" },
      { title: "3. inline वर्तन", content: "inline घटक मजकुराच्या ओळीतच राहतात — जसं एखाद्या वाक्यातला शब्द. span, a, strong ही नेहमीची उदाहरणे; ते शेजारच्या मजकुरासोबत एकाच ओळीत वाहतात आणि नवीन ओळ सुरू करत नाहीत.\ninline घटकाला width किंवा height दिलं तर ते चालत नाही — कारण त्याचा आकार ओळीतील मजकुरावरच ठरतो. मोठा padding किंवा margin उभ्या बाजूने नीट लागतही नाही.\nत्यामुळे सजावटीसाठी inline चा वापर मर्यादित — रंग, वजन, फॉन्ट असे मजकुरी गुणधर्म छान चालतात; हे वरील नियमात a चा रंग निळा केल्यावर दिसते.\nकोणता घटक inline आणि कोणता block हे ओळखलं की मजकूर आणि व्यवस्थेची जोडणी कशी होते तेही स्पष्ट होते.", code: `a {
  color: blue;
}`, codeLanguage: "css" },
      { title: "4. inline-block", content: "inline-block हा दोन्ही जगाचा राजा — तो inline सारखा मजकुराच्या ओळीत बसतो, पण block सारखा width, height, padding, border या सर्व गोष्टींचा आदर करतो.\nउदा. .chip ला display: inline-block दिल्यावर तो शेजारच्या घटकांसोबत एकाच ओळीत राहतो आणि तरीही padding: 4px 8px ने त्याला आपली जागा — रुंदी, उंची, अंतर — ठीक तशी मिळते.\nयामुळे tag, chip, बटण, बैज असे लहान घटक शेजारी शेजारी नीट बसतात आणि प्रत्येक आपला आकार ठरवतो.\nकधीही inline वर padding दिल्याने अंतर गोंधळत असेल, तर inline-block हा सरळ उपाय आहे. यादी आणि सजावटींमध्ये ही सर्वांत आवडती निवड असते.", code: `.chip {
  display: inline-block;
  padding: 4px 8px;
}`, codeLanguage: "css" },
      { title: "5. float तंत्र", content: "float हे जुन्या काळातले layout तंत्र — ते घटकाला डावीकडे किंवा उजवीकडे ढकलतं आणि उरलेल्या मजकुराला त्याच्याभोवती वाहू देतं.\nउदा. .img-left { float: left; } दिल्यावर चित्र डाव्या बाजूला बसतं आणि लेखाच्या ओळी त्याच्या उजवीकडून आरपार जातात — वर्तमानपत्रातील सजावट सारखी.\nपण float चा त्रास असा की मजकूर सगळीकडे वाहत राहतो; रचना आटोक्यात आणायची असेल तर clear नावाचा गुणधर्म लागतो, अन्यथा गोंधळ होतो.\nआधुनिक CSS मध्ये flex आणि grid यांनी float ची जागा घेतली आहे; म्हणून नवीन कोडमध्ये तो क्वचित दिसतो — पण जुना कोड वाचताना float ओळखणं उपयुक्त ठरतं.", code: `.img-left {
  float: left;
}`, codeLanguage: "css" },
      { title: "6. display पर्याय", content: "display ला चार उपयोगी मूल्ये प्रामुख्याने असतात — block, inline, none आणि flex/grid. display: none देताच घटक पेजवरून पूर्ण लुप्त होतो; तो जागाही घेत नाही, दिसतही नाही.\nहे उपयोगी ठरतं जेव्हा मेनू किंवा पॅनेल लपवायचं असतं. पण लक्षात ठेवा — display: none म्हणजे घटक काढून टाकल्यासारखं; त्या मजकुरावर अवलंबून असलेल्या वापरकर्त्यांसाठी प्रवेश्यताही विचारात घ्यावी.\nflex आणि grid आता मुख्य layout साधने आहेत; display बदलून ती सक्रिय होतात आणि घटक एका ओळीत किंवा जाळीत मांडता येतात.\ndisplay ने घटकाचा प्रवाह आणि दृश्य दोन्ही बदलतं — म्हणूनच हा layout चा गाभा आहे. प्रत्येक मूल्य ओळखलं की रचनेवर आपलं नियंत्रण येतं.", code: `.none {
  display: none;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता तिन्ही वर्तनांचं एकत्र पेज बनवूया — एका tags विभागात वेगवेगळ्या display चा फरक नजरेस पडेल.\nएक block विभाग घ्या — तो पूर्ण ओळ घेईल आणि खाली नवीन ओळीत जाईल. मग मजकुरात काही inline शब्द ठेवा — ते ओळीतच राहतील.\nशेवटी .tags मध्ये अनेक .chip घटक ठेवा आणि .tags .chip ला display: inline-block द्या — ते शेजारी शेजारी बसतील, पण प्रत्येकाला padding मुळे आपली जागा मिळेल.\nहे एकच पेज तिन्ही वर्तनांचा नमुना देते. असा सराव केला की block, inline आणि inline-block ची निवड आता सहज करता येईल.", code: `.tags .chip {
  display: inline-block;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["display म्हणजे काय?", "inline-block कधी वापराल?", "float कसा वागतो?"],
    quiz: [
      { question: "block ओळ?", options: ["पूर्ण", "अर्धी", "नाही", "केवळ"], correct: 0 },
      { question: "inline रुंदी?", options: ["मोजली जाते", "मोजली नाही", "दुप्पट", "अर्धी"], correct: 1 },
      { question: "float साठी?", options: ["जुने तंत्र", "नवे", "नियम", "रंग"], correct: 0 },
      { question: "chip साठी?", options: ["inline-block", "block", "none", "float"], correct: 0 },
    ],
    challenge: {
      prompt: "दृश्य व्यवस्था नमुना",
      starterCode: `.chip { display: inline-block; }`,
      expectedOutput: "Renders three-part layout demo",
    },
    interviewQuestions: ["float वर flex का?", "inline-block limitations काय?"],
    related: ["css-structure-cascade", "css-multi-column"],
    prev: "css-marathi-capstone2",
    next: "css-multi-column",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-multi-column",
    categoryId: "web",
    title: "Multi-Column",
    marathiTitle: "Multi-column — स्तंभ मजकूर",
    level: "intermediate",
    minutes: 18,
    summary: "columns गुणधर्म, column-count, column-gap आणि break नियम.",
    sections: [
      { title: "1. स्तंभ कल्पना", content: "मोठा मजकूर शेकडो ओळींत लांबल्यावर वाचणे कंटाळवाणे होते; स्तंभ हा वर्तमानपत्रातील उपाय वेबवरही उपलब्ध आहे.\n.article ला column-count: 2 दिल्यावर ब्राउझर संपूर्ण मजकूर दोन उभ्या स्तंभांत आपोआप विभागतो — जसे पेपरमधील लेख दिसतो.\nब्राउझर प्रत्येक स्तंभाला समान उंची देऊन संतुलित करतो; त्यामुळे ओळी अर्धवट तुटल्यासारखे वाटत नाहीत आणि वाचक एका स्तंभावरून पुढच्या स्तंभात सरकत लेख पूर्ण वाचतो.\nही संपूर्ण मांडणी एका गुणधर्माने घडते — ओळींची फाळणी ब्राउझरच स्वतः सांभाळतो.", code: `.article {
  column-count: 2;
}`, codeLanguage: "css" },
      { title: "2. column-width", content: "column-width मध्ये प्रत्येक स्तंभाची आदर्श रुंदी सांगता — पण स्तंभांची अचूक संख्या ब्राउझर ठरवतो.\nएकदा सुचवलेली रुंदी दिल्यावर ब्राउझर जागेत पुरतील तितके स्तंभ मांडतो; स्क्रीन अरुंद असेल तर एकच स्तंभ उरतो.\nहे स्वयं-समायोजन हाच सर्वांत मोठा फायदा — column-count ने भाग पाडून जागा वाया घालवण्याची चिंता नाही.\nरुंदी ही नेहमी आदर्श राहते; बदलत्या पडद्यांसाठी हीच योग्य निवड असते.", code: `.article {
  column-width: 220px;
}`, codeLanguage: "css" },
      { title: "3. column-gap", content: "column-gap हा दोन स्तंभांमधील उभी जागा नियंत्रित करतो; ब्राउझरची मूळ जागा बरीच छोटी असते म्हणून ती वाढवणे अनेकदा आवश्यक असते.\nउदा. .article ला column-gap: 2rem दिल्याने स्तंभांमध्ये स्वच्छ जागा मिळते आणि मजकूर वाचणे सोपे होते.\nस्तंभांमधील ही रिकामी जागा कंटाळवाणी वाटू नये म्हणून column-rule या गुणधर्माने मध्ये पातळ रेषा जोडता येते.\nरेघेची जाडी, रंग आणि शैली स्वतः निवडता; उदा. 1px solid #ddd सारखी नाजूक रेषा सुटसुटीत दिसते.", code: `.article {
  column-gap: 2rem;
  column-rule: 1px solid #ddd;
}`, codeLanguage: "css" },
      { title: "4. break नियम", content: "स्तंभांत मजकूर फाटताना काही घटक असे विभागले जातात की वाचनीयता बिघडते — शीर्षक शेवटी उरते आणि मजकूर पुढच्या स्तंभात जातो किंवा तक्ता अर्धा उभा राहतो.\nbreak नियमांनी प्रत्येक घटक कुठे फुटेल हे नियंत्रित करता; उदा. h2 ला break-after: avoid दिल्यावर शीर्षकानंतर लगेच फुटणारा भाग नवीन स्तंभात तरी राहतो.\nतक्ता किंवा आकृती संपूर्णपणे एकाच स्तंभात रहावी असे तिच्यासाठी स्वतंत्र नियमही लिहिता येतो.\nअसे सूक्ष्म नियम वाचकाला मोठा आराम देतात म्हणून बहु-स्तंभ रचनेत ही सवय म्हणून जोडायला हवी.", code: `h2 {
  break-after: avoid;
}`, codeLanguage: "css" },
      { title: "5. समतोल व्यवस्था", content: "ब्राउझरचा मूळ प्रयत्न असतो सर्व स्तंभांना अंदाजे समान उंची देणे, जेणेकरून मजकूर एकसमान पसरतो आणि अर्धा रिकामा स्तंभ उरत नाही.\nहे संतुलन column-fill या गुणधर्माने नियंत्रित करता; balance हे मूळ मूल्य बहुतेक वेळा पुरेसे ठरते.\nजर स्तंभांची उंची आधीच fixed दिली असेल — उदा. .cols ला height: 300px — तर column-fill: balance ने मजकूर त्या उंचीमध्ये समान प्रमाणात वाटतो.\nनिश्चित उंची नसल्यास auto मध्ये ब्राउझरच मजकुरानुसार आकार ठरवतो म्हणून तेही योग्य असते.", code: `.cols {
  height: 300px;
  column-fill: balance;
}`, codeLanguage: "css" },
      { title: "6. प्रवाह व्यवस्था", content: "बहु-स्तंभ रचनेत मजकूर त्या क्रमानेच वाचतो ज्या क्रमाने तो HTML मध्ये लिहिलेला असतो — पहिला स्तंभ, मग दुसरा, असे सलग.\nम्हणून विभाग कुठेही मिसळत नाहीत आणि लेख आरंभापासून शेवटपर्यंत स्तंभावरून स्तंभाकडे वाचता येतो.\nपण चित्र दोन स्तंभांमध्ये अर्धवट अडकू नये किंवा टीप तुटू नये म्हणून break नियमांनी सीमा तपासणे आवश्यक आहे.\nही तपासणी नेहमी सरावात राहते; सवय लागली की अचूक फाळणी हा नैसर्गिक भाग बनतो.", code: `.article p {
  hyphens: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात मराठी लेखाचे दोन-स्तंभ पेज घडवूया — वर्तमानपत्रासारखे वाचण्यास सोपे दिसणारे.\nआधार म्हणून .article ला column-width: 240px द्या; मोठ्या पडद्यावर तीन-चार स्तंभ निघतील आणि मोबाइलसारख्या अरुंद पडद्यावर एकच स्तंभ राहील.\nस्तंभांमध्ये column-gap: 1.5rem जागा आणि column-rule ने पातळ रेषा जोडा.\nवेगवेगळ्या रुंदीवर तपासा — मजकूर कुठेही अडकत नाही याची खात्री करा; ही सरावाची सवय बरोबर ठेवा.", code: `.article {
  column-width: 240px;
  column-rule: 1px solid #ccc;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["स्तंभ संख्या कसे ठरते?", "column-width फायदा?", "break नियम काय रोखतात?"],
    quiz: [
      { question: "column-count काय?", options: ["संख्या", "रंग", "अंतर", "फॉन्ट"], correct: 0 },
      { question: "column-width?", options: ["रुंदी आदर्श", "जाडी", "संगणक", "क्रम"], correct: 0 },
      { question: "column-rule?", options: ["रेघा", "मजकूर", "चित्र", "संरेखन"], correct: 0 },
      { question: "break नियम?", options: ["फूट थांबवणे", "वेग", "रंग", "आकार"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन-स्तंभ लेख",
      starterCode: `.article { column-width: 240px; }`,
      expectedOutput: "Renders two-column article",
    },
    interviewQuestions: ["multicol कधी योग्य?", "column-fill फरक?"],
    related: ["css-layout-methods", "css-subgrid"],
    prev: "css-layout-methods",
    next: "css-subgrid",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-subgrid-2",
    categoryId: "web",
    title: "Subgrid",
    marathiTitle: "Subgrid — आंतरिक ग्रिड",
    level: "intermediate",
    minutes: 18,
    summary: "grid शहरू वापर, subgrid alignment वारसा आणि nested रचना.",
    sections: [
      { title: "1. nested ग्रिड", content: "grid च्या आतल्या कोणत्याही घटकाला पुन्हा display: grid देऊन स्वतःची छोटी ग्रिड निर्माण करता येते — याला nested grid म्हणतात.\nअशा वेळी आतील घटक केवळ आपल्या ग्रिडनुसार ओळीत बसतो; दोन्ही ग्रिडच्या पंक्ती एकमेकांशी जुळत नाहीत.\nवेगवेगळ्या कार्डमध्ये शीर्षके वेगवेगळ्या उंचीवर बसतात, तर खालची सामग्रीही सरळ रेषेत न लागता गोंधळते.\nही चणचण दूर करण्यासाठीच subgrid ही संकल्पना आली — पालक ग्रिडच्या पंक्ती आतल्या ग्रिडला वारशाने मिळतात.", code: `.parent {
  display: grid;
}`, codeLanguage: "css" },
      { title: "2. subgrid कल्पना", content: "subgrid ही nested grid ची विशेष आवृत्ती — आतील ग्रिड स्वतःचे ट्रॅक न बनवता पालक ग्रिडच्या पंक्ती आणि स्तंभ वारशाने घेते.\nघोषणा सोपी आहे; .child ला display: grid राहते आणि grid-template-columns: subgrid इतकेच लिहावे.\nमग आतील घटक पालकाच्या अचूक ट्रॅकमध्ये बसतात; शीर्षके त्या ओळीत निघतात ज्याच्या ओळीत पालकाने ठेवले.\nउंची आणि रुंदी आपोआप जुळतात म्हणून प्रत्येक कार्डाला स्वतंत्र नियंत्रण हवेच असे नाही.", code: `.child {
  display: grid;
  grid-template-columns: subgrid;
}`, codeLanguage: "css" },
      { title: "3. ओळ-स्तंभ अभाव", content: "subgrid मध्ये एक गोष्ट लक्षात ठेवा — तो फक्त थेट पालकाच्याच ट्रॅकचा वारसा घेऊ शकतो; घटकांमधे दुसरा grid अडला तर वारसा तुटतो.\ngrid-template-columns: subgrid लिहिल्यावर स्तंभ वारशाने येतात आणि grid-template-rows: subgrid लिहिल्यावर पंक्ती येतात.\nदोन्ही दिशा हव्या असतील तर एकच घोषणा subgrid द्यावी.\nअशी रचना संरेखित राहते — पंक्ती आणि स्तंभ दोन्ही पालकाशी जुळतात म्हणून घटक एका स्वच्छ रेषेत उभे राहतात.", code: `.kid {
  grid-template-rows: subgrid;
}`, codeLanguage: "css" },
      { title: "4. gap वारसा", content: "subgrid मध्ये अंतराचे नियंत्रणही लवचिक आहे; आतील ग्रिडने स्वतःचा gap दिला नाही तर पालकाचे अंतर वारशाने सन्मानित होते.\nपण आतमध्ये gap: 1rem सारखा नवीन नियम दिला तर subgrid तेच नवीन अंतर वापरतो.\nयाचा अर्थ वेगवेगळ्या कार्डमध्ये नियंत्रित आणि परस्परांशी जुळणारे अंतर ठेवता येते.\nआधुनिक ब्राउझरमध्ये हा वारसा स्थिर काम करतो; सरावात कार्डांचा संच अर्धांगी न होता एकसंध राहतो.", code: `.wrap .card {
  gap: 1rem;
}`, codeLanguage: "css" },
      { title: "5. वास्तविक उपयोग", content: "subgrid चा प्रत्यक्ष फायदा कार्डांच्या यादीसारख्या रचनेत सहज दिसतो — प्रत्येक कार्ड स्वतंत्र grid घेतल्यास त्यांच्या शीर्षकांची उंची अस्थिर राहते.\nकार्डाला ग्रिडने पंक्तींसाठी subgrid वापरल्यावर सर्व कार्डांची शीर्षके एकाच ओळीवर बसतात आणि खालील मजकूरही सरळ राहतो.\nउदा. .cards मध्ये repeat(3, 1fr) तसेच article ला grid-template-rows: subgrid आणि grid-row: span 2 दिल्यास प्रत्येक कार्डाचे विभाग पूर्णपणे संरेखित राहतात.\nअशी रचना तीन-चार घटकांच्या यादीसाठी सर्वात स्वच्छ आणि देखरेखीस सोपी असते.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.cards article {
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 2;
}`, codeLanguage: "css" },
      { title: "6. limitation", content: "subgrid ची एक अट आहे — तो फक्त त्या थेट पालकाचेच ट्रॅक घेऊ शकतो; दरम्यान display: grid असलेला दुसरा घटक आला तर वारसा संपतो.\nमध्ये नवीन ग्रिड तयार होत असेल तर subgrid शक्य नाही आणि तिथे सामान्य grid वापरावा.\nखोल रचनेत घटकांचे नाते समजून घेऊनच subgrid ठरवावे; पाच-चार थरांच्या आतला वारसा अनेकदा अडचणी निर्माण करतो.\nसरावाने हे नियम पक्के होतात — कुठे वारसा काम करेल हे अंदाजणे सवयीने सोपे होते.", code: `.deep .inner {
  display: grid;
  grid-template-columns: subgrid;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात तीन कार्डांची यादी घडवूया जिथे प्रत्येक कार्ड आतील ग्रिड म्हणून subgrid वापरते.\n.cards ला तीन स्तंभ आणि .cards article ला grid-template-rows: subgrid द्या; प्रत्येक कार्डाचा वरचा विभाग आणि खालचा विभाग पंक्तीने पंक्ती जुळेल.\nशीर्षक वेगळ्या लांबीचे असले तरी चित्र, मजकूर आणि खालील दुवा प्रत्येक कार्डात समान ओळीवर बसतो याची खात्री करा.\nस्तंभांची रुंदी बदलून पहा — संरेखन कायम राहते हे subgrid चे मोठे सामर्थ्य दिसते.", code: `.cards article {
  display: grid;
  grid-template-rows: subgrid;
  gap: 0.5rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["subgrid कसा जाहिर करतो?", "कधी वापरता येत नाही?", "subgrid फायदा?"],
    quiz: [
      { question: "subgrid वारसा?", options: ["ओळी-स्तंभ", "रंग", "फॉन्ट", "मार्जिन"], correct: 0 },
      { question: "स्तंभ subgrid?", options: ["grid-template-columns", "width", "display"], correct: 0 },
      { question: "जुळणारा आकार?", options: ["ट्रॅक", "चित्र", "अक्षर", "मूल्य"], correct: 0 },
      { question: "थेट parent?", options: ["आवश्यक", "नाही", "कधीही", "वारंवार"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड संरेखित ग्रिड",
      starterCode: `article { grid-template-rows: subgrid; }`,
      expectedOutput: "Renders aligned three-card grid",
    },
    interviewQuestions: ["subgrid आधार किती?", "nested grid फरक?"],
    related: ["css-multi-column", "css-transform-3d"],
    prev: "css-multi-column",
    next: "css-transform-3d",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-transform-3d",
    categoryId: "web",
    title: "Transform & 3D",
    marathiTitle: "Transform — हालचाल आणि खोली",
    level: "intermediate",
    minutes: 18,
    summary: "translate, rotate, scale, transform-origin आणि perspective खोली.",
    sections: [
      { title: "1. transform कल्पना", content: "transform हा घटकाची दृश्य स्थिती बदलतो — सरकवणे, फिरवणे, मोठे-छोटे करणे असे प्रभाव; पण पेजचा सामान्य प्रवाह मात्र तसाच राहतो.\nहेच त्याचे विशेष: घटक हलवला तरी शेजारचे घटक त्यामुळे सरकत नाहीत, त्यामुळे hover सजावट सुरक्षित असते.\ntranslate, rotate, scale ही तीन मुख्य कार्ये; ती एकापाठोपाठ लिहून एकत्रही लावता येतात.\nपण क्रम महत्त्वाचा आहे — प्रत्येक वेळी ब्राउझर मागील निकालावर पुढची क्रिया करतो, त्यामुळे उलट क्रमाने वेगळा देखावा मिळतो.", code: `.box {
  transform: translate(10px, 10px);
}`, codeLanguage: "css" },
      { title: "2. translate", content: "translate घटकाला त्याच्या मूळ ठिकाणापासून हलवतो — पहिले मूल्य क्षैतिज (X), दुसरे उभ्या (Y) दिशेने.\nटक्केवारी दिली तर ब्राउझर स्वतः घटकाच्या आकारावरून ठरवतो; translate: 0 -8px ने घटक वर सरकतो.\nहा स्थानबदल बहुतेकदा hover वर वापरला जातो — बटण माउसखाली थोडे वर येते तेव्हा ते जिवंत दिसते.\nमहत्त्वाची गोष्ट: प्रवाह बदलत नाही; घटक फक्त दृश्यस्थानी सरकतो म्हणून शेजारचे घटक तिथेच राहतात.", code: `.up {
  translate: 0 -8px;
}`, codeLanguage: "css" },
      { title: "3. rotate", content: "rotate घटकाला त्याच्या मध्यबिंदूभोवती फिरवतो; कोन deg या एककाने लिहितात — 45deg म्हणजे घड्याळाचा आठवा भाग.\nकोन सकारात्मक असला की घड्याळाच्या दिशेने, ऋण असला की उलट दिशेने फिरते.\nकोणत्या बिंदूवरून फिरवायचे हे transform-origin ठरवते; मूळ मूल्य center असते म्हणून साधा rotate मध्यभागी फिरतो.\nआयकॉन टप्प्यात फिरवणे, बाण वळवणे किंवा बॅजला उभे ठेवणे — अशा सूक्ष्म खुणांसाठी rotate सोपा आणि प्रभावी आहे.", code: `.rot {
  rotate: 45deg;
}`, codeLanguage: "css" },
      { title: "4. scale", content: "scale घटकाचा आकार प्रमाणित करतो — 1.5 दिल्यास आकार दीडपट वाढतो, तर 0.8 दिल्यास आकुंचन होते.\nमूल्य 1 असले की आकार बदलत नाही; एकाहून अधिक असेल तर मोठे आणि कमी असेल तर छोटे.\nहे अनेकदा hover वर वापरतात — .grow:hover { scale: 1.1; } दिल्यावर कार्ड दाबायच्या आधीच थोडे मोठे होते.\nदेखावा आकर्षक दिसतो पण मजकुराची रूपरेषा विकृत होणार नाही इतकी मर्यादा ठेवायला विसरू नका.", code: `.grow:hover {
  scale: 1.1;
}`, codeLanguage: "css" },
      { title: "5. perspective 3D", content: "खरोखर त्रिआयामी (3D) देखावा निर्माण करायचा असेल तर perspective नावाचा आधार हवा — त्याशिवाय rotateY फक्त चपटे सरकणे वाटते.\nperspective हे एक अंतर आहे; ते लहान असल्यास दृश्य जवळ आणि तीव्र, मोठे असल्यास दूर आणि सौम्य दिसते.\nउदा. .scene ला perspective: 600px दिल्यानंतर आतल्या कार्डला rotate: 0 1 0 20deg देणे अर्थपूर्ण ठरते — ती बाजू मागे सरकत असल्यासारखी भासते.\nसंदर्भ मध्येच ठेवणे आवश्यक आहे; म्हणून perspective पालकावर आणि rotate आतल्या घटकावर लावतात.", code: `.scene {
  perspective: 600px;
}
.card:hover {
  rotate: 0 1 0 20deg;
}`, codeLanguage: "css" },
      { title: "6. transform-origin", content: "transform-origin हे ठरवते की सगळ्या हालचाली कोणत्या बिंदूपासून व्हायच्या — मध्यभाग, वरचा डावा कोपरा, खालचा मध्य असे अनेक पर्याय.\nमूळ मूल्य center असते म्हणून rotate किंवा scale मध्यभागी जागतं; पण transform-origin: left center दिल्यावर फिरणे उभ्या कडेच्या आधारे होते.\nवास्तविक दार उघडे-बंद होते तसे चित्र बनवण्यासाठी हेच उपयुक्त — दार उभ्या कडेच्या बिजागरावर फिरते.\nप्रत्येक हालचालीसाठी योग्य origin निवडल्यास दृश्य अचूक आणि नैसर्गिक दिसते.", code: `.door {
  transform-origin: left center;
  rotate: 0 0 1 -90deg;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात transform च्या सर्व प्रभावांचे एक शोकेस पेज घडवूया — प्रत्येक कार्डावर एक वेगळा प्रभाव दाखवता.\n.pull ला hover वर translate: 0 -8px; एखाद्या बॅजला rotate: 45deg; आणि .card ला hover वर scale: 1.05 द्या.\nशेवटी .flip कार्डसाठी perspective: 600px पालकावर आणि rotate: 0 1 0 180deg आतल्या भागावर द्या जेणेकरून खरी 3D खोली दिसेल.\nप्रत्येक प्रभाव कसा जागतो हे समजण्यासाठी लहान मराठी मजकूर खुणा जोडा; हे एक पेज तिन्ही गुणधर्म समजण्याचा सराव बनते.", code: `.flip {
  perspective: 600px;
}
.flip > div {
  rotate: 0 1 0 180deg;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["transform प्रवाहाला त्रास देता?", "3D कशामुळे?", "origin काय बदलतो?"],
    quiz: [
      { question: "translate काय?", options: ["सरकवणे", "फिरवणे", "लपवणे", "रंग"], correct: 0 },
      { question: "rotate एकक?", options: ["deg", "px", "s", "em"], correct: 0 },
      { question: "scale 1.2?", options: ["वाढवते", "कमी", "लपवते", "सारखे"], correct: 0 },
      { question: "3D प्रेरणीय?", options: ["perspective", "margin", "color"], correct: 0 },
    ],
    challenge: {
      prompt: "3D कार्ड हालचाल",
      starterCode: `.flip > div { rotate: 0 1 0 180deg; }`,
      expectedOutput: "Renders 3D flip animation",
    },
    interviewQuestions: ["transform अनुक्रम का?", "perspective कसा जागतो?"],
    related: ["css-subgrid", "css-pseudo-elements"],
    prev: "css-subgrid",
    next: "css-pseudo-elements",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-pseudo-elements",
    categoryId: "web",
    title: "Pseudo Elements",
    marathiTitle: "Pseudo — सहाय्यक भाग",
    level: "intermediate",
    minutes: 18,
    summary: "::before, ::after, content गुण येणाऱ्या decorative भागांची रचना.",
    sections: [
      { title: "1. pseudo परिचय", content: "pseudo-element म्हणजे घटकाचा काल्पनिक भाग — HTML मध्ये काहीही जोडल्याशिवाय दृश्य रचना अधिक समृद्ध करण्याचे साधन.\n::before घटकाच्या आधी आणि ::after घटकाच्या नंतर काल्पनिक भाग निर्माण करते.\nहे भाग DOM मध्ये दिसत नाहीत म्हणून त्यांना वाचक यंत्राकडून ओळखले जात नाही आणि कोडही स्वच्छ राहतो.\nसजावट, खुणा किंवा छोटे decorative घटक जोडायचे असतील तेव्हा pseudo-element हा पहिली निवड ठरतो.", code: `.note::before {
  content: "!";
}`, codeLanguage: "css" },
      { title: "2. content गुण", content: "content हा ::before आणि ::after च्या कामाचा गाभा — कोरडे pseudo-element काही दाखवत नाही म्हणून content अनिवार्य असतो.\nमजकूर, url() ने प्रतिमा किंवा counter() ने क्रमांक पर्यंत दाखवता — सजावटीच्या दृष्टीने लवचिकता प्रचंड.\nउदा. .tag::before मध्ये content: \"✓ \" दिल्यावर प्रत्येक टॅगसमोर चेक खूण आपोआप येते.\nपण लक्षात ठेवा — pseudo गुण प्रवेश्यता दृष्टीने फक्त सजावट; महत्त्वाची माहिती त्यात ठेवू नये म्हणून उपयोग मर्यादित ठेवा.", code: `.tag::before {
  content: "✓ ";
}`, codeLanguage: "css" },
      { title: "3. ::marker", content: "::marker मध्ये सूचीच्या चिन्ह शैली — गोल किंवा क्रमांक — थेट बदलता येते.\nlist-style प्रमाणे फक्त आकार मर्यादित नसून रंग, फॉन्ट असे गुणधर्म देखील लागू होतात.\nउदा. li::marker { color: teal; } दिल्यास चिन्हे ब्रँडच्या रंगाशी जुळतात आणि सूची आकर्षक बनते.\nसजावटीव्यतिरिक्त marker च्या आकारावरून अधिक माहिती दिली जाऊ शकते; पण वाचकांना चिन्हाचा अर्थ कायमच स्पष्ट राहिला पाहिजे.", code: `li::marker {
  color: teal;
}`, codeLanguage: "css" },
      { title: "4. selection", content: "::selection मध्ये वापरकर्त्याने निवडलेल्या मजकुराची शैली ठरते — मजकूर ओढून उजवा केल्यावर दिसणारा रंग.\nही शैली वेबसाइटच्या ब्रँड रंगांशी जुळवता आणि निवड अधिक आनंददायी दिसते.\nउदा. ::selection { background: gold; } दिल्यावर निवडलेला मजकूर अगदी खुणेने दिसतो.\nपण रंग निवडताना वाचनीयता कायम ठेवायला हवी — गडद पार्श्वभूमीवर हलके अक्षर असे तोल साधा म्हणजे निवड स्पष्ट राहते.", code: `::selection {
  background: gold;
}`, codeLanguage: "css" },
      { title: "5. counter विचार", content: "counter हे पुस्तकातील अध्याय क्रमांकांसारखे — HTML मध्ये संख्या हाताने न लिहिता ब्राउझरला मोजायला लावणे.\ncounter-reset ने मोजणीची सुरुवात ठरवतात; counter-increment प्रत्येक भागासोबत एक वाढवतो.\nमग content: \"भाग \" counter(sec) \": \" असे लिहून प्रत्येक शीर्षकाच्या आधी क्रमांक दाखवता येतो.\nही स्वयंचलित मोजणी मजकूर पुन्हा मांडताना क्रमांक खंडित होण्याचा त्रास दूर करते — दीर्घ लेखातील अध्याय आणि टीपांसाठी ही व्यवस्था अचूक ठरते.", code: `body { counter-reset: sec; }
h2::before {
  counter-increment: sec;
  content: "भाग " counter(sec) ": ";
}`, codeLanguage: "css" },
      { title: "6. accessibility सूचना", content: "pseudo-element जो फक्त सजावटीसाठी आहे त्याच्या मजकुराने वाचन यंत्रांमध्ये गोंधळ होता कामा नये — ती फक्त दृश्य खूण आहे हे स्पष्ट करता.\nउदा. .icon::before मधील चिन्ह केवळ दृश्य सजावट म्हणून वागते; त्याचा अर्थ वाचन यंत्रांना देऊ नये अशी व्यवस्था करता.\nstyling pseudo-elements कडून केवळ decorative भाग ठेवा; महत्त्वाचा मजकूर नेहमी मुख्य DOM मध्येच असावा.\nयामुळे दृश्य सजावट आणि प्रवेश्यता दोन्ही अखंड राहतात — खरा मजकूर मुख्य रचनेत आणि खुणा pseudo मध्ये हा नियम स्मरत राहावा.", code: `.icon::before {
  content: "★";
  speak: never;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात सूचीची सजावट तीन वेगवेगळ्या pseudo-element ने करूया.\nol ला list-style: none देऊन प्रत्येक li::before मध्ये content: counter(item) \". \" द्वारे क्रमांक दाखवा — हे स्वयंचलित राहील.\nmarker साठी li::marker { color: teal; } ने चिन्हांचा रंग बदला आणि शीर्षकांना counter वापरून क्रमांक जोडा.\nसजावट कितीही असली तरी मुख्य मजकूर वाचन यंत्रांना स्पष्ट ठेवा; असे केल्यास प्रवेश्यता आणि सौंदर्य दोन्ही नियंत्रित राहते.", code: `ol { list-style: none; }
ol li::before {
  content: counter(item) ". ";
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["pseudo-element काय?", "content आवश्यक का?", "counter कसे वाढतात?"],
    quiz: [
      { question: "pseudo मार्क?", options: ["::", ":", "#", "."], correct: 0 },
      { question: "content साठी?", options: ["आवश्यक", "नाही", "switch"], correct: 0 },
      { question: "::marker काय?", options: ["सूची चिन्ह", "रंग", "फॉन्ट"], correct: 0 },
      { question: "counter increment?", options: ["वाढवते", "कमी", "लपवते"], correct: 0 },
    ],
    challenge: {
      prompt: "सजलेली सूची आणि counters",
      starterCode: `li::before { content: "• "; }`,
      expectedOutput: "Renders styled list with counters",
    },
    interviewQuestions: ["::before accessibil", "::after कोणते?"],
    related: ["css-transform-3d", "css-forms-styling"],
    prev: "css-transform-3d",
    next: "css-forms-styling",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-forms-styling",
    categoryId: "web",
    title: "Forms Styling",
    marathiTitle: "Forms — दाखल फॉर्म",
    level: "intermediate",
    minutes: 18,
    summary: "input, select, checkbox रंग देणे आणि validation दृश्य अवस्था.",
    sections: [
      { title: "1. फॉर्म रचना", content: "फॉर्म हे वापरकर्ता आणि वेबसाइट यांच्या संवादाचे मुख्य द्वार — त्याची रचना सुटसुटीत आणि स्पष्ट असली पाहिजे.\nपहिली पायरी म्हणजे फॉन्ट आणि रंग पेजच्या संपूर्ण शैलीशी जुळवणे; अनोळखी फॉन्ट फॉर्म माघार घेऊन वाटतो.\nlabel ला display: block आणि थोडे margin दिल्यास प्रत्येक क्षेत्राचे नाव वर स्वच्छ बसते.\ninput चा आकार आणि padding मोठा ठेवल्यास स्पर्श करणे सोपे होते — वापरकर्त्याला फॉर्मचा मार्ग ओळखता येतो.", code: `label {
  display: block;
  margin: 0.3rem 0;
}`, codeLanguage: "css" },
      { title: "2. text input", content: "input ला ठळक border दिल्यास तो प्रचंड मोठा वाटतो; हलका रंग — उदा. input[type=\"text\"] साठी 1px solid #ccc — अधिक संयमी दिसतो.\npadding: 0.5rem ने लिहायला आरामदायक जागा मिळते आणि मजकूर कडेला न चिकटता नीट बसतो.\nफोकस होताना border चा रंग बदलून स्पष्ट खूण द्यावी; :focus वर outline: 2px solid #2563eb सारखी स्पष्ट रेषा कीबोर्ड वापरकर्त्याला निर्णय घेण्यास मदत करते.\nसंपूर्ण फॉर्ममध्ये असेच सातत्य ठेवल्यास वापरकर्त्याचा विश्वास वाढतो.", code: `input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
}`, codeLanguage: "css" },
      { title: "3. focus state", content: ":focus ही स्थिती सांगते की सध्या कोणत्या क्षेत्राशी वापरकर्ता व्यस्त आहे — माउस न चालवता फक्त कीबोर्डनेही फॉर्म क्रॉस करता यावा.\nही दृश्य खूण नसेल तर वापरकर्ता ठिकाणापासून दूर गेल्यासारखा गोंधळतो म्हणून outline स्पष्ट आणि संपूर्ण ठेवावी.\nउदा. input:focus ला outline: 2px solid #2563eb दिल्यावर क्षेत्र वेगळे दिसते आणि सध्याची स्थिती ओळखता येते.\ncheckbox सारख्या नियंत्रणांना accent-color ने ब्रँड रंग सहज जोडता — प्रवेश्यता आणि आकर्षण दोन्ही साधता.", code: `input:focus {
  outline: 2px solid #2563eb;
}`, codeLanguage: "css" },
      { title: "4. checkbox radio", content: "checkbox आणि radio ही मूळ ब्राउझर नियंत्रणे; त्यांना पूर्ण स्वतंत्र शैली देणे कठीण असते.\naccent-color या गुणधर्माने रंग मात्र लगेच बदलतो — :checked वर accent-color: teal दिल्यास निवड ओळखता येते.\nआकार, सीमा किंवा अंतर बदलायचे असेल तर appearance: none ने मूळ देखावा काढून स्वतःचा बनवता येतो.\nपण स्वतःचे नियंत्रण बनवण्यासाठी ध्वनी आणि कीबोर्ड अचूकता यांची काळजी लागते — सोपा पर्याय जर उपलब्ध असेल तर तो अधिक सुरक्षित ठरतो.", code: `:checked {
  accent-color: teal;
}`, codeLanguage: "css" },
      { title: "5. status शैली", content: "ब्राउझर फॉर्म क्षेत्राची वैधता स्वतःच ओळखतो आणि त्यासाठी :invalid आणि :valid अशा दृश्य अवस्था देतो.\nउदा. input:invalid { border-color: #b91c1c; } दिल्यावर चुकीच्या मूल्याची किनार लाल दिसते — चुक वापरकर्त्याला लगेच स्पष्ट होते.\nआवश्यक क्षेत्र असल्यास label मध्ये तारा किंवा शब्द द्वारे सूचना जोडता येते.\nपण रंग एकटा पुरेसा नाही; मजकूरात त्रुटीचे स्पष्ट वर्णन आणि help text हा पूरक मार्ग अधिक खात्रीशीर ठरतो.", code: `input:invalid {
  border-color: #b91c1c;
}`, codeLanguage: "css" },
      { title: "6. सुसंगतता", content: "प्रत्येक ब्राउझर मूळ नियंत्रणे — विशेषतः select, checkbox, radio — आपल्या रीतीने रंगवतो; समान शैली दिल्यास काही ठिकाणी दृश्य वेगळे दिसते.\nappearance: none सहजतेने मूळ देखावा काढून टाकतो, पण त्या नियंत्रणाला स्वतःचा आकार आणि व्यवहार पुन्हा प्रदान करावा लागतो.\nकाही घटक हे ब्राउझरच्या अधिकारातच राहतात म्हणून संगतता तपासत वापरायला हवी.\nसुधारणा मर्यादित आणि पारदर्शक ठेवल्या तर फॉर्म सर्व पडद्यांवर स्थिर बसतो आणि आलेले फरक दुरुस्त करता येतात.", code: `select {
  appearance: auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "या प्रकल्पात एक संपूर्ण नोंदणी फॉर्म शैली करूया — नाव, ईमेल आणि सहमतीचा checkbox ही क्षेत्रे.\nप्रत्येक लेबल वर स्वच्छ ठेवा; input ला पुरेसा padding आणि हलकी किनार द्या.\ninput:focus ने outline: 2px solid #0f766e आणि input:invalid ने border-color: #b91c1c द्या जेणेकरून वापरकर्त्याला चुक लगेच समजेल.\ncheckbox ला accent-color देऊन ब्रँड रंग जोडा; सर्व नियंत्रणांचे दृश्य एकसुरीत राहते याची तपासणी करा.", code: `input:focus {
  outline: 2px solid #0f766e;
}
input:invalid {
  border-color: #b91c1c;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: [":focus का द्यावा?", "accent-color काय करतो?", "invalid कधी दिसते?"],
    quiz: [
      { question: ":focus?", options: ["निवड दृश्य", "रंग", "प्रवेश"], correct: 0 },
      { question: "accent-color?", options: ["checkbox रंग", "border", "मार्जिन"], correct: 0 },
      { question: ":invalid?", options: ["चुक दृश्य", "वेग", "layout"], correct: 0 },
      { question: "appearance none?", options: ["शैली काढते", "रंग", "अंतर"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी फॉर्म शैली",
      starterCode: `input:focus { outline: 2px solid teal; }`,
      expectedOutput: "Renders styled registration form",
    },
    interviewQuestions: ["native control फायदा?", "focus outline महत्त्व?"],
    related: ["css-pseudo-elements", "css-animation-advanced"],
    prev: "css-pseudo-elements",
    next: "css-animation-advanced",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-animation-advanced",
    categoryId: "web",
    title: "Advanced Animation",
    marathiTitle: "Animation — उन्नत हालचाल",
    level: "intermediate",
    minutes: 18,
    summary: "@keyframes टप्पे, animation-timing, steps आणि मिश्रित हालचाल.",
    sections: [
      { title: "1. animation नियम", content: "animation घटकाला ठराविक टप्प्यांतून नेते — transition प्रमाणे एकच बदल नव्हे तर स्वतंत्र दृश्यक्रम तयार करता येतो.\nanimation-duration ने कालावधी ठरतो आणि animation-iteration-count: infinite दिल्यास क्रम सतत चालू राहतो.\nएकाच घटकावर अनेक नियम लिहिले तर ते एकत्र सुरू होतात आणि वेगवेगळे प्रभाव घडतात.\nहालचाल आकर्षक असली तरी संयमित ठेवल्यास वाचन आणि समज दोन्ही सुधारतात.", code: `.ball {
  animation: bounce 1s infinite;
}`, codeLanguage: "css" },
      { title: "2. timing वक्र", content: "animation-timing-function हे नियंत्रण करते की हालचालीचा वेग कसा बदलतो — सुरुवात जलद का शेवट?\nease मध्ये सुरुवात आणि शेवट हलके शांत, मध्य वेगवान असतो; linear मध्ये वेग एकसमान राहतो.\ncubic-bezier ने स्वतःचे वक्र बनवून सुरुवात आणि शेवट नेमका आपल्या आवडीनुसार जुळवता येते.\nटप्पे संतुलित जुळवल्यास दृश्य नैसर्गिक भाव देतो — प्रभाव अनेक पर्यायांवर तपासून निवडावा.", code: `.move {
  animation-timing-function: ease-out;
}`, codeLanguage: "css" },
      { title: "3. steps नियम", content: "steps हे हालचालीला गुळगुळीत वक्र न देता अचानक टप्प्यांची उडी देतो — घड्याळाच्या काट्यासारखी चाल.\nउदा. animation: tick 1s steps(4) infinite दिल्यावर घटक चार पायऱ्यांत तुटकपणे सरकतो.\nटिक-टॅक, countdown किंवा meter अशा नियंत्रित वेगाच्या प्रभावांसाठी steps अतिशय उपयुक्त आहे.\nप्रत्येक वेळी बदल एकदम घडतो म्हणून किती पायऱ्या हव्यात हे आधी ठरवणे गरजेचे असते.", code: `.dial {
  animation: tick 1s steps(4) infinite;
}`, codeLanguage: "css" },
      { title: "4. keyframes टक्केवारी", content: "@keyframes मध्ये टप्पेवार भाग ठरवतात — 50% सारखा मधला टप्पा दिल्यास हालचालीचे दोन वेगवेगळे भाग दिसतात.\n0% ते 100% ही पूर्ण कालमर्यादा आहे; टक्केवारीनुसार प्रत्येक क्षणी घटकाचे रूप ठरते.\nउदा. wave मध्ये 0% आणि 100% वर translateY(0) तर 50% वर -12px — आधी वर नंतर खाली.\nअसे टप्पे जुळवून लहर, कंपन किंवा उसळ असे अनेक नैसर्गिक प्रभाव सहज तयार करता येतात.", code: `@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}`, codeLanguage: "css" },
      { title: "5. मिश्रित properties", content: "एकच animation अनेक गुणधर्म एकत्र हलवू शकतो — उदा. transform आणि opacity सोबत बदलल्यास दृश्य गुळगुळीत राहते.\nfilter blur ला त्यात जोडल्यास अस्पष्टतेतून साफ होणारा नैसर्गिक प्रभाव मिळतो.\nपण layout गुणधर्म — width, margin वगैरे — हलवणे जड होते म्हणून हलकेच गुणनिवडावे.\nmedia query मध्ये हालचाल कमी करून मोठ्या पडद्यांवर प्रभाव सुरळीत आणि लहानांवर संयमित ठेवता येतो.", code: `.fade {
  animation: fade 0.6s ease forwards;
}
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "6. हालचाल कमी", content: "हालचाल कमी करणे महत्त्वाचे.\nprefers-reduced-motion ला तपासा.\nमोठी हालचाल थांबवा.\nfade किंवा static सोडा.\nसगळे वापरकर्ते सोबत.", code: `@media (prefers-reduced-motion: reduce) {
  .ball {
    animation: none;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "वेब पानावर हलते chrome.\nbounce बॉल. wave icon.\nsteps dial. reduced नियम.", code: `@keyframes bounce {
  0%, 100% { translate: 0 0; }
  50% { translate: 0 -30px; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["keyframes काय?", "timing कशासाठी?", "reduced motion का?"],
    quiz: [
      { question: "animation नाव?", options: ["@keyframes", "transition", "display"], correct: 0 },
      { question: "steps देते?", options: ["पायरी हालचाल", "रंग", "अक्षर"], correct: 0 },
      { question: "alternate?", options: ["उलट चाल", "वेग", "नाव"], correct: 0 },
      { question: "reduced motion?", options: ["कमी हालचाल", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "गुळगुळीत हालचाल नमुना",
      starterCode: `@keyframes bounce { 50% { translate: 0 -30px; } }`,
      expectedOutput: "Renders alive animation demo",
    },
    interviewQuestions: ["transform why?", "steps कधी वापराल?"],
    related: ["css-forms-styling", "css-containment"],
    prev: "css-forms-styling",
    next: "css-containment",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-containment",
    categoryId: "web",
    title: "Containment",
    marathiTitle: "Containment — स्वतंत्र क्षेत्र",
    level: "intermediate",
    minutes: 18,
    summary: "contain, isolation आणि stacking context ची स्थिरता.",
    sections: [
      { title: "1. contain कल्पना", content: "contain ला भाग स्वतंत्र करतो.\nप्रवाहांना परिणाम मर्यादित राहतो.\nlayout मध्ये पुनर्गणना कमी.\nकामगिरी पेजवर सुधारते.\nमोठ्या रचनांमध्ये अमूल्य.\nतपासून वापरा — आधार वाढला.", code: `.widget {
  contain: layout;
}`, codeLanguage: "css" },
      { title: "2. paint containment", content: "contain: paint दृश्य सीमा धारण करतो.\nबाहेर गेलेला भाग दिसत नाही.\nमोठे भाग वेगळे राहतात.\nस्वतःची फ्रेम मिळते.\nlazy rendering हा उपयोग.\nसाफ करताना हे सोयीचे.", code: `.panel {
  contain: paint;
}`, codeLanguage: "css" },
      { title: "3. size containment", content: "size मध्ये ला आकार प्रवाहांपासून.\nसामान्य रचनेला जागा सोडवता येते.\nआधी मोजून जागा पडेल.\nकंटेंट चालेल तरी जागा स्थिर.\nएकूण रचना पुढे सरकत नाही.\nहे thumbnail साठी योग्य.", code: `.thumb {
  contain: size;
}`, codeLanguage: "css" },
      { title: "4. isolation", content: "isolation स्वतःची stacking मिळते.\nz-index चा विवाद सोडवणे सोपे.\nआतला थर बाहेर नाही.\nmix-blend-mode सुरक्षित राहतो.\nथोडा गुणधर्म, मोठा फायदा.\nओव्हरलॅप दुरुस्त राहतो.", code: `.layer {
  isolation: isolate;
}`, codeLanguage: "css" },
      { title: "5. stacking context", content: "stacking मध्ये क्रम ठरतो.\nposition आणि opacity बनवतात.\ntransform नेहमी स्वतःचा make करतो.\nz-index मोठा सर्वात वर.\nनकारणूक सोडवणे संदर्भाने.\nसंदर्भ रचना स्पष्ट ठेवतात.", code: `.card {
  transform: translateZ(0);
}`, codeLanguage: "css" },
      { title: "6. कामगिरी सूचना", content: "मोठे वेब पेज तर्कशुद्ध करा.\nसमस्या क्षेत्र शोधणे सोपे.\nनिरर्थक reflow कमी होते.\nबाहेरील घटकांवर परिणाम नाही.\nसरावाने दृश्य आणि वेग दोन्ही.", code: `.spinner {
  contain: strict;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "भाग विभक्त डॅशबोर्ड बनवा.\npaint container widget.\nsize thumbnail.\nisolation ओव्हरलॅप नियंत्रित.", code: `.widget {
  contain: paint;
  isolation: isolate;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["contain काय करतो?", "isolation फायदा?", "stacking कधी बनते?"],
    quiz: [
      { question: "contain: paint?", options: ["दृश्य सीमा", "रंग", "वेग"], correct: 0 },
      { question: "isolation: isolate?", options: ["नवीन context", "अंतर", "आकार"], correct: 0 },
      { question: "transform context?", options: ["बनवतो", "काढतो", "रंग"], correct: 0 },
      { question: "size contain?", options: ["जागा स्थिर", "भर", "अक्षर"], correct: 0 },
    ],
    challenge: {
      prompt: "विभक्त विजेट आराखडा",
      starterCode: `.widget { contain: paint; }`,
      expectedOutput: "Renders contained dashboard widgets",
    },
    interviewQuestions: ["contain जोखीम?", "isolation ब्लेंड?"],
    related: ["css-animation-advanced", "css-cascade-layers"],
    prev: "css-animation-advanced",
    next: "css-cascade-layers",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-cascade-layers-3",
    categoryId: "web",
    title: "Cascade Layers",
    marathiTitle: "Cascade layers — थर क्रम",
    level: "intermediate",
    minutes: 18,
    summary: "@layer क्रम, @supports आणि @container स्थिरता हे दृश्य.",
    sections: [
      { title: "1. @layer कल्पना", content: "@layer मध्ये नियम समूह देतो.\nनंतरचा थर वरच्या ओळीला जिंकतो.\nथरांचा क्रमच निर्णायक असतो.\nआवश्यकतेनुसार थर जोडता.\nमोठ्या प्रोजेक्टमध्ये व्यवस्था.", code: `@layer base, theme, extra;`, codeLanguage: "css" },
      { title: "2. थर रचना", content: "पहिल्यांदा नावे ठरवा.\nमग स्तरवार नियम लिहा.\nextra ओव्हरराइड देते.\nनाव शब्दांश सजग ठेवा.", code: `@layer theme {
  .card {
    color: #111;
  }
}`, codeLanguage: "css" },
      { title: "3. वारसा क्रम", content: "समान नियम उत्तरोत्तर वर जिंकतो.\nएक्स्ट्रा base वर मात करतो.\nimport जुळवून थरांमध्ये ठेवता.\nपूर्वीचे कोड सुरक्षित राहतात.\nगती आणि नियंत्रण दोन्ही.", code: `@import url(base.css) layer(libs);`, codeLanguage: "css" },
      { title: "4. @supports", content: "@supports हवे गुणधर्म तपासतो.\nउपलब्ध असेल तरच नियम लागतो.\nनवीन तंत्र आरक्षित ठेवता.\nजुना नियम base मध्ये राहतो.\nमजबूत सुधारणा करता.\nसुरक्षित प्रगती ही अशीच.", code: `@supports (grid-template-columns: subgrid) {
  .wrap {
    grid-template-columns: subgrid;
  }
}`, codeLanguage: "css" },
      { title: "5. आधार जोखणी", content: "वेगळ्या फाइलमध्ये स्थिरता टिकते.\nमोठी फाइल क्रमाने लोड होते.\nतपासणी अनेक ब्राउझरवर करा.\nयेथे कोणतेही नवे error नको.\nथरांचा हा विचार अचूक.\nविस्तार आता नियंत्रित.", code: `@layer extra {
  .theme-tweak {
    filter: brightness(1.02);
  }
}`, codeLanguage: "css" },
      { title: "6. @container?", content: "@container ला जोडणारा वेगळा.\nस्वतःची विचारणा करता.\nहे पुढील धड्यात सविस्तर.\nआत्ता नावाने ओळख.\nसंकल्पना वाढवत राहा.", code: `@container (min-width: 400px) {
  .mid { display: grid; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "base, theme, extra थर.\nजुने आणि नवे नियम सोबत.", code: `@layer base, theme, extra;
@supports (grid-template-columns: subgrid) {
  .wrap { column-gap: 1rem; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["@layer काय करतो?", "नंतरचा थर?", "@supports कधी?"],
    quiz: [
      { question: "@layer order?", options: ["क्रम निर्णय", "रंग", "मार्जिन"], correct: 0 },
      { question: "@supports?", options: ["तपासतो", "रंग", "लपवतो"], correct: 0 },
      { question: "उत्तरोत्तर थर?", options: ["जिंकतो", "हार", "equal"], correct: 0 },
      { question: "@container?", options: ["कंटेनर विचारणा", "नाव", "फॉन्ट"], correct: 0 },
    ],
    challenge: {
      prompt: "थरवार सादरीकरण",
      starterCode: `@layer base, theme, extra;`,
      expectedOutput: "Renders layered card demo",
    },
    interviewQuestions: ["@layer order का?", "@supports फायदा?"],
    related: ["css-containment", "css-container-queries"],
    prev: "css-containment",
    next: "css-container-queries",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-container-queries-3",
    categoryId: "web",
    title: "Container Queries",
    marathiTitle: "Container queries — आकार प्रतिसाद",
    level: "intermediate",
    minutes: 18,
    summary: "@container नियम, container-type आणि cqw एककांचे प्रतिसाद.",
    sections: [
      { title: "1. query कल्पना", content: "container ला प्रश्न विचारता.\nआतला घटक container चा आधार देतो.\nमोबाइलचा सरळ media नाही.\nसमाविष्ट आकारच प्रतिसाद.\nहे का? पुनरुपयोग सोपा होतो.\nहे आधुनिक तंत्र आहे.", code: `.widget {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "2. container-type", content: "container-type दिशा ठरवतो.\ninline-size सर्वात सोपाई.\nblock-size दुर्मिळ असतो.\nअचूक नियम सीमाबद्ध इच्छित.\nस्वतःचा आकार लॉक करतो.", code: `.info {
  container-type: inline-size;
}`, codeLanguage: "css" },
      { title: "3. @container नियम", content: "@container माप तपासून शैली.\nmin-width वाढल्यावर नियम.\nमोठ्या जागेत दोन स्तंभ.\nछोट्या जागेत एकच.\nहीच योग्य प्रतिसाद हालचाल.\nगुळगुळीत प्रतिसाद मिळतो.", code: `@container (min-width: 480px) {
  .info { display: grid; }
}`, codeLanguage: "css" },
      { title: "4. cqw एकक", content: "cqw म्हणजे container च्या रुंदीचे टक्के.\n10cqw म्हणजे container चा दशांश.\nफॉन्ट आकार नेमका ठरतो.\nही रचना वेगळ्या ठिकाणी करता.\nपुनरुपयोग रचना मिळते.", code: `.label {
  font-size: 4cqw;
}`, codeLanguage: "css" },
      { title: "5. नामकरण", content: "container-name नाव देते.\nअनेक container असल्यास वेगळे ओळखता.\nमोठ्या रचनेत ही जोखीम.\nनाव अर्थपूर्ण ठेवा.", code: `.sidebar {
  container-type: inline-size;
  container-name: side;
}
@container side (min-width: 300px) { }`, codeLanguage: "css" },
      { title: "6. उपयोग व वाts", content: "कार्ड मध्ये पुन:उपयोग करता.\nअनेक ठिकाणी समान रचना.\nperformance ची तपासणी नेहमी करा.\nmedia query अजूनही आवश्यक.\nसर्व तंत्र एकत्र चालतात.", code: `.card {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card { padding: 1.5rem; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "पुनरुपयोग कार्ड बनवा.\ncontainer-type सुरुवात.\n@container दोन अवस्था.\ncwq फॉन्ट उदाहरण.", code: `.article {
  container: side / inline-size;
}
@container side (min-width: 420px) {
  .article { columns: 2; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["container query म्हणजे?", "container-type काय?", "cqw एकक काय?"],
    quiz: [
      { question: "container-type?", options: ["inline-size", "color", "margin"], correct: 0 },
      { question: "@container तपासतो?", options: ["आकार", "रंग", "file"], correct: 0 },
      { question: "cqw सापेक्ष?", options: ["container", "view", "font"], correct: 0 },
      { question: "container-name?", options: ["वेगळे नाव", "चित्र", "आकडा"], correct: 0 },
    ],
    challenge: {
      prompt: "प्रतिसादी कार्ड",
      starterCode: `@container (min-width: 420px) { .card { padding: 1.5rem; } }`,
      expectedOutput: "Renders container-responsive card",
    },
    interviewQuestions: ["container vs media?", "container-type size आधार?"],
    related: ["css-cascade-layers", "css-masking-filters"],
    prev: "css-cascade-layers",
    next: "css-masking-filters",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-masking-filters",
    categoryId: "web",
    title: "Masking & Filters",
    marathiTitle: "Masking — दृश्य सजावट",
    level: "intermediate",
    minutes: 18,
    summary: "filter, clip-path, mask आणि blend modes ची चकतिन.",
    sections: [
      { title: "1. filter नियम", content: "filter ला दृश्य प्रभाव देऊन जातो.\nblur, brightness, contrast मुख्य.\nhover वर सौम्य बदल शक्य.\nमजकूर पारदर्शक नको.\nफक्त प्रकाश बदलला जातो.\nतपासून कमी वापरा.", code: `img {
  filter: brightness(0.9);
}`, codeLanguage: "css" },
      { title: "2. blur दृश्य", content: "blur ला भाग धुंधळा करतो.\nमोठे blur जड असतो.\nमुख्य भागावर जास्त blur नको.\nमोठी प्रतिमा प्रक्रिया थांबवा.\nहलके blur ने परिणाम चांगला.", code: `.modal-back {
  backdrop-filter: blur(6px);
}`, codeLanguage: "css" },
      { title: "3. clip-path", content: "clip-path आकारात कापणे देतो.\ncircle, polygon याप्रमाणे.\nडेकोरेटिव्ह आकार तयार.\nकाम करते तरी मजकूर सुरक्षित.\nआता बरीच प्रगणना शक्य.", code: `.avatar {
  clip-path: circle(50%);
}`, codeLanguage: "css" },
      { title: "4. mask अभ्यास", content: "mask प्रतिमेचा ग्रेडियंट वापरतो.\nपारदर्शक जागा लपवतो.\nअर्धा भाग नाहीसा.\nगुळगुळीत फिकट दृश्य.\nफंक्शनला मर्यादा.\nसरावानेच अर्थ स्पष्ट.", code: `.flag {
  mask-image: linear-gradient(#000, transparent);
}`, codeLanguage: "css" },
      { title: "5. blend mode", content: "blend मध्ये थर एकत्र सरळ.\nmultiply, screen, overlay.\nचित्र आणि रंग मिसळतात.\nमर्यादा ठेवून सांभाळा.\nएकदम प्रभावी दृश्य मिळते.", code: `.hero {
  mix-blend-mode: multiply;
}`, codeLanguage: "css" },
      { title: "6. सुरक्षित सराव", content: "contrast आणि वाचनीयता ठेवणे.\nसजावट content नको झाकू.\nजड प्रभाव निरीक्षणातही चालतात.\nप्राथमिक ते व्यावहारिक वाढ.", code: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सजावट गॅलरी बनवा.\nfilter ग्रेडिंग. circular avatar.\nblend अभ्यास.\nसर्व सजावट अल्प प्रमाणात.", code: `img {
  filter: saturate(1.1);
  clip-path: circle(50%);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["filter काय करतो?", "clip-path म्हणजे?", "blend mode कधी?"],
    quiz: [
      { question: "filter गुणधर्म?", options: ["blur brightness", "margin", "width"], correct: 0 },
      { question: "clip-path?", options: ["आकार काप", "रंग", "शब्द"], correct: 0 },
      { question: "backdrop-filter?", options: ["मागे blur", "पुढे", "आत"], correct: 0 },
      { question: "mask करते?", options: ["लपवते", "जोडते", "वाढते"], correct: 0 },
    ],
    challenge: {
      prompt: "फिल्टर गॅलरी",
      starterCode: `img { filter: saturate(1.1); }`,
      expectedOutput: "Renders masked image gallery",
    },
    interviewQuestions: ["filter परफॉर्मन्स?", "mask आधार किती?"],
    related: ["css-container-queries", "css-marathi-capstone2"],
    prev: "css-container-queries",
    next: "css-marathi-capstone2",
    levelLabel: CSS2_LABEL,
  },
  {
    slug: "css-marathi-capstone2",
    categoryId: "web",
    title: "Marathi Capstone 2",
    marathiTitle: "Marathi project — सर्वांग",
    level: "intermediate",
    minutes: 18,
    summary: "दोन्ही स्तरांची CSS एकत्र; portal पेज, theme आणि परिपूर्ण लेआउट.",
    sections: [
      { title: "1. उद्दिष्टे", content: "हे प्रोजेक्ट दोन्ही स्तर जोडते.\nथीम variables गोळा करा.\nॲनिमेशन सौम्य ठेवा.\nप्रवेश्यता सर्वत्र तपासा.\nदृष्य अंतिम निकाल जवळ.", code: `:root {
  --brand: #0f766e;
  --ink: #1c1c1c;
}`, codeLanguage: "css" },
      { title: "2. theme variables", content: "रंग आणि अंतर variables मध्ये.\nएका ठिकाणी बदल; सर्वत्र लागू.", code: `:root {
  --pad: 1rem;
  --radius: 8px;
}
.card {
  padding: var(--pad);
  border-radius: var(--radius);
}`, codeLanguage: "css" },
      { title: "3. container layout", content: "मुख्य पेज container-based करा.\n@container दोन अवस्था लिहा.\nsubgrid किंवा nested ग्रिड.\nरुंद आणि अरुंद जागा प्रतिसाद.\nकॉम्पोनेंट पुनरुपयोग साध्य.\nमोबाइल आणि डेस्कटॉप दोन्ही.", code: `.dash {
  container-type: inline-size;
}
@container (min-width: 640px) {
  .dash { grid-template-columns: 2fr 1fr; }
}`, codeLanguage: "css" },
      { title: "4. धीमे animation", content: "animation सौम्य आणि short ठेवा.\nreduced motion नियम पक्का.\nहालचाल अर्थासाठीच नको.\nसर्व browser चाचणी.", code: `@media (prefers-reduced-motion: reduce) {
  * { transition-duration: 0.01ms !important; }
}`, codeLanguage: "css" },
      { title: "5. प्रवेश्यता", content: "focus दृश्यमान ठेवा.\nlabel फॉर्मच्या ओळखीसाठी.\nभाषा मराठी स्पष्ट ठेवा.\nसराव पूर्ण करून घ्या.\nसर्वांसाठी दृश्य समान.", code: `a:focus-visible {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}`, codeLanguage: "css" },
      { title: "6. अंतिम पॅकेजिंग", content: "सर्व नियम अंतिम क्रमवार पहा.\n@layer groups गोळा करा.\nजुने कोड वेगळा नाही.\nहे पूर्ण ताकदीने तपासा.\nदस्तऐवज रचना नोंदवा.\nसर्व संकल्पना समजला याची तपासणी करा.", code: `/* final check: cascade, support, a11y */
.card:has(.btn:hover) {
  outline: 2px solid var(--brand);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "variables थीम. container layout.\nरुचकर animation. a11y नियम.\nदोन्ही स्तरांतील ज्ञान एकत्र.", code: `:root { --brand: #0f766e; }
@container (min-width: 640px) {
  .cols { grid-template-columns: 2fr 1fr; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["प्रोजेक्ट काय जोडतो?", "reduced motion?", "container फायदा?"],
    quiz: [
      { question: "variables साठी?", options: ["एक ठिकाण", "अनेक", "नाही"], correct: 0 },
      { question: "@container करता?", options: ["रचना प्रतिसाद", "रंग", "नाव"], correct: 0 },
      { question: "a11y नियम?", options: ["focus contrast", "space", "verbose"], correct: 0 },
      { question: "reduced motion?", options: ["कमी हालचाल", "जास्त", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "मराठी पोर्टल अंतिम",
      starterCode: `:root { --brand: #0f766e; }`,
      expectedOutput: "Renders polished Marathi portal",
    },
    interviewQuestions: ["Level 2 काय वाढले?", "पुढे कुठे?"],
    related: ["css-masking-filters", "css-layout-methods"],
    prev: "css-masking-filters",
    next: "css-layout-methods",
    levelLabel: CSS2_LABEL,
  },];
