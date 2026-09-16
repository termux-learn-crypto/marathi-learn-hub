import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 1 — मूलभूत शैली आणि व्यवस्था ===
export const CSS1_LABEL = "CSS · Level 1 — मूलभूत शैली आणि व्यवस्था";

export const cssLevel1: Tutorial[] = [
  {
    slug: "css-structure-cascade",
    categoryId: "web",
    title: "Structure & Cascade",
    marathiTitle: "CSS — रचना आणि कलेक्ट नियम",
    level: "beginner",
    minutes: 12,
    summary: "CSS फाइल कशी जोडायची, cascade कसे काम करते आणि शैली कोणती जिंकते.",
    sections: [
      { title: "1. CSS म्हणजे", content: "CSS ही शैली भाषा — पेजला रंग रूप देते.\n\nHTML रचना सांगते; CSS दृश्य बनवते.\n\nहे two भाग एकत्र पेज घडवतात.\n\nCSS फाइल वेगळी असते — HTML मध्ये जोडतात.\n\nरंग, आकार, अंतर — सर्व येथून ठरते.", code: `<link rel="stylesheet" href="style.css">`, codeLanguage: "css" },
      { title: "2. शैली जोडणी", content: "शैली तीन प्रकारे जोडता येते.\n\nhead मध्ये style block — लहान पेजसाठी.\n\nattribute सह — एका घटकासाठी.\n\nसामान्य: बाह्य फाइल राखणे योग्य.", code: `<p style="color: blue">थेट शैली</p>`, codeLanguage: "css" },
      { title: "3. नियम रचना", content: "प्रत्येक नियम दोन भाग — selector आणि declaration.\n\nselector कोणता घटक निवडतो हे सांगतो.\n\ndeclaration मध्ये गुणधर्म आणि मूल्य.\n\nमूल्य नेमक्या manner मध्ये लिहिले जाते.\n\nरचना समजली की CSS वाचायला सोपे.", code: `p {
  color: green;
}`, codeLanguage: "css" },
      { title: "4. cascade तत्त्व", content: "cascade म्हणजे नियमांत जिंकणारा क्रम.\n\nदोन नियम लागू झाल्यास नंतरचा जिंकतो.\n\nमहत्त्व आणि क्रम दोन्ही ठरते.\n\nspecificity जास्त असल्यास तोच विजयी.\n\nहा नियम समजला की CSS खुले होते.", code: `p { color: red; }
p { color: blue; }`, codeLanguage: "css" },
      { title: "5. specificity मूल", content: "specificity म्हणजे निवडकर्त्याचे वजन.\n\nid सर्वांत जड; class नंतर; tag हलका.\n\nजास्त वजन असलेला नियम जिंकतो.\n\nमोजक्या class ने कोड नीट राहतो.\n\nवजन समजले की त्रास टळतो.", code: `.note { color: teal; }`, codeLanguage: "css" },
      { title: "6. सवयी", content: "नियम वाचण्यासाठी प्रत्येक भाग नवी ओळ.\n\nगुणधर्माकडे एक मूल्य — स्पष्टता.\n\nप्रत्येक पेजचा मुख्य stylesheet वेगळा.\n\nशुद्ध नियम — पुढे टिकतो.", code: `h1 {
  color: navy;
  font-size: 32px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक stylesheet फाइल. तीन levels शैली.\ncascade दर्शवणारी दोन ओळी.\nप्रत्येक घटक indexed दिसतो.", code: `<link rel="stylesheet" href="style.css">
<h1>मराठी शैली</h1>
<p>हे आमचे पहिले रंग.</p>`, codeLanguage: "css" },
    ],
    practiceQuestions: ["CSS काय करते?", "शैली तीन प्रकारे कशी?", "selector म्हणजे?", "cascade नियम काय?"],
    quiz: [
      { question: "शैली भाषा?", options: ["CSS", "HTML", "SQL", "HTTP"], correct: 0 },
      { question: "बाह्य फाइल जोडणी?", options: ["link tag", "script tag", "meta tag", "slot"], correct: 0 },
      { question: "कोणता घटक निवडतो?", options: ["selector", "declaration", "attribute", "event"], correct: 0 },
      { question: "id चे वजन?", options: ["जास्त", "शून्य", "कमी", "नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "CSS नमुना संरचना",
      starterCode: `<link rel="stylesheet" href="style.css">`,
      expectedOutput: "Renders styled marathi sample page",
    },
    interviewQuestions: ["cascade विरुद्ध specificity?", "CSS फाइल का वेगळी?"],
    related: ["css-marathi-project", "css-selectors-basics"],
    prev: "css-marathi-project",
    next: "css-selectors-basics",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-selectors-basics",
    categoryId: "web",
    title: "Selectors Basics",
    marathiTitle: "Selectors — निवडक विवरण",
    level: "beginner",
    minutes: 12,
    summary: "tag, class आणि id selectors, attribute work आणि selector सवयी.",
    sections: [
      { title: "1. tag selector", content: "tag selector म्हणजे घटक नावावर शैली.\np, h1, a — हे सर्व tags.\nएका rule ने मोठा गट रंगतो.\nबेस शैलीसाठी tag selector योग्य.\nमर्यादा: प्रत्येकाला वेगळा करता येत नाही.", code: `p { color: #333; }`, codeLanguage: "css" },
      { title: "2. class selector", content: "attribute मधील नाव class असते.\nCSS मध्ये बिंदू चिन्ह. नाव पुनरावृत्ती करता.\nउदा. सर्व warning संदेश एकाच शैली.\nclass ही सर्वांत वापरायची निवड.", code: `.grid-आधार {
  display: grid;
}`, codeLanguage: "css" },
      { title: "3. id selector", content: "id एकाच घटकाला म्हणतात.\nपेजमध्ये id अद्वितीय — फक्त एकदा.\nCSS मध्ये hash चिन्हाने लिहिले जाते.\nविलक्षण घटकासाठी id योग्य.\nशैलीसाठी id कमी; class जास्त सोयीचा.", code: `#मुख्य {
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "4. combine selector", content: "selectors मिळवून शैली अचूक करता.\nspace म्हणजे आतला घटक.\nहे वृक्ष रचना दर्शवते — नाते स्पष्ट.\nकोणताही नातेवाईक अलग रंगवा.\nगोंधळ टाळण्यासाठी कमी खोली.", code: `header h1 { color: maroon; }`, codeLanguage: "css" },
      { title: "5. वजन वापर", content: "प्रत्येक प्रकाराचे वजन वेगळे.\ntag हलका; class मध्यम; id जड.\nवजन मिळवून नियम निर्णय घेतो.\nमोठ्या नियमांत जिंकणारा हा.\nवजन समजल्यावर bug कमी होतात.", code: `.card { border: 1px solid #ddd; }`, codeLanguage: "css" },
      { title: "6. सवय आणि नावे", content: "नावे मराठी किंवा इंग्रजी द्यावी.\nनाव नेमके आणि अर्थपूर्ण हवे.\nCSS नावे कधीही मोठी कॅप्स नको.\nक्रिया तपासताना class शोध सोपा.\nनावे आणि काम सारखी असू देत.", code: `.button {
  cursor: pointer;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक tag selector. एक class. एक id.\nनाते combine. वजन नोट.\nतीनही प्रकार दृश्यात ठरतात.", code: `.warning { color: darkred; }
#टीप { background: #f9f9f9; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["tag selector म्हणजे?", "class दोन घटकांना?", "id कसे दर्शवतात?", "space combine काय?"],
    quiz: [
      { question: "घटक नाव शैली?", options: ["tag selector", "flex", "grid", "float"], correct: 0 },
      { question: "CSS class चिन्ह?", options: [".", "#", ">", "+"], correct: 0 },
      { question: "id कुठे वापरू?", options: ["एकदाच", "अनेक", "कधीच", "रंगासाठी"], correct: 0 },
      { question: "आतला घटक?", options: ["space", "comma", "dash", "dot"], correct: 0 },
    ],
    challenge: {
      prompt: "निवडकता पेज",
      starterCode: `.warning { color: darkred; }`,
      expectedOutput: "Renders selector demo page",
    },
    interviewQuestions: ["class आणि id फरक?", "spec वजन कसे मोजतात?"],
    related: ["css-structure-cascade", "css-box-model"],
    prev: "css-structure-cascade",
    next: "css-box-model",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-box-model",
    categoryId: "web",
    title: "Box Model",
    marathiTitle: "Box Model — प्रत्येक घटक खोका",
    level: "beginner",
    minutes: 12,
    summary: "margin, border, padding आणि content — घटकाचे अंतर नियम.",
    sections: [
      { title: "1. खोका कल्पना", content: "प्रत्येक घटक एक खोका — चार थरांचा.\nआत content; नंतर padding; नंतर border.\nसर्वात बाहेर margin.\nप्रत्येक थर अंतर ठरवतो.", code: `div {
  padding: 8px;
  border: 1px solid;
}`, codeLanguage: "css" },
      { title: "2. content भाग", content: "content मजकूर, चित्र किंवा नियंत्रण असते.\nत्याचा आकार width आणि height सांगतो.\nइतर थर content भोवती गुंडाळतात.\ncontent मोठा झाला की खोका वाढतो.\nसुरुवात content च आधार आहे.", code: `p { background: #eee; }`, codeLanguage: "css" },
      { title: "3. padding अंतर", content: "padding content आणि border मधील अंतर.\nआतल्या जागेचा नियंत्रण करते.\nप्रत्येक बाजू वेगळी सांगता येते.\nमोकळेपणा वाढवण्यासाठी padding.", code: `.card { padding: 1rem; }`, codeLanguage: "css" },
      { title: "4. border किनारी", content: "border ही घटकाची बाह्य किनारी.\nजाडी, शैली आणि रंग — तीन गुण.\nउदा. solid dashed dotted या शैली.\nborder भर घटकाला मर्यादा देतो.\nसाधी किनारी sanitize दिसते.", code: `.box { border: 2px solid navy; }`, codeLanguage: "css" },
      { title: "5. margin बाहेर", content: "margin घटकाबाहेरली जागा ठरवतो.\ndistance शेजारील घटकापासून.\nघटक वजन आणि आकार यांनी ठरतो.\nmargin कमी केला की घटक जवळ येतात.\nदोन margin एकमेकांना भेटल्यास एक जिंकतो.", code: `.item { margin: 4px; }`, codeLanguage: "css" },
      { title: "6. box-sizing", content: "box-sizing हा आकार नियम बदलतो.\ncontent-box मध्ये width फक्त content.\nborder-box मध्ये सर्व थर सामावला.\nborder-box वापरल्यास आकार सोपा.", code: `* {
  box-sizing: border-box;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन घटक. padding शैली.\nborder आणि margin नियम.\nborder-box जागता टीप.", code: `.card {
  padding: 1rem;
  border: 1px solid #ccc;
  margin: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["खोक्याचे चार थर?", "padding काय करते?", "border तीन गुण?", "box-sizing काय बदलतो?"],
    quiz: [
      { question: "content आणि border मधील?", options: ["padding", "margin", "flex", "grid"], correct: 0 },
      { question: "घटकाबाहेरली जागा?", options: ["margin", "padding", "gap", "routing"], correct: 0 },
      { question: "किनारी जाडी?", options: ["border", "shadow", "radius", "width"], correct: 0 },
      { question: "width सर्व सामावणे?", options: ["border-box", "content-box", "float", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "खोका नमुना",
      starterCode: `.card { padding: 1rem; border: 1px solid; }`,
      expectedOutput: "Renders box layout demo",
    },
    interviewQuestions: ["padding आणि margin फरक?", "box-sizing का लावतात?"],
    related: ["css-selectors-basics", "css-colors-background"],
    prev: "css-selectors-basics",
    next: "css-colors-background",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-colors-background",
    categoryId: "web",
    title: "Colors & Background",
    marathiTitle: "रंग आणि पार्श्वभूमी",
    level: "beginner",
    minutes: 12,
    summary: "रंग मूल्ये, alpha व्यवस्था आणि background shailee.",
    sections: [
      { title: "1. रंग कल्पना", content: "रंग हा पेजला जग देतो.\nनावाने रंग — red, blue सारखे.\nरंग तीन प्रकार वापरता येतात.\nसातत्य राखल्यास दृश्य सुंदर.", code: `h1 { color: red; }`, codeLanguage: "css" },
      { title: "2. हेक्स मूल्य", content: "हेक्स म्हणजे हॅश आणि सहा अंक.\nलाल, हिरवा, निळा — तीन भाग.\nप्रत्येक भाग शून्य ते फ दरम्यान.\nलहान आवृत्ती — थोडी आकडे.\nभरपूर text करून निवडा.", code: `.रंग { color: #a11; }`, codeLanguage: "css" },
      { title: "3. alpha गुण", content: "alpha म्हणजे रंगाची पारदर्शकता.\nrgba मध्ये चौथा मूल्य.\nशून्य म्हणजे अदृश्य; एक घन.\nस्तर जोडणीसाठी alpha उपयोगी.\nगुणवत्ता राहून नावे ठरवा.", code: `.bg { background: rgba(0, 0, 0, 0.4); }`, codeLanguage: "css" },
      { title: "4. background गुणधर्म", content: "background ची शैली जोडता येते.\nरंग, चित्र किंवा gradient.\nगुणधर्म एकत्र लिहून संक्षेप.\nपार्श्वभूमी मागे राहते — पुढे मजकूर.", code: `body {
  background: #f5f5f5;
}`, codeLanguage: "css" },
      { title: "5. gradient दिशा", content: "gradient म्हणजे दोन रंगांचे धीमे एकत्र.\nउभे, आडवे किंवा कोनीय निर्देश.\nहे गुळगुळीत संक्रमण दाखवते.\nप्रत्येक वेळी gradient update होतो.\nहलक्या रंगांतून सुरुवात.", code: `.hero {
  background: linear-gradient(45deg, pink, white);
}`, codeLanguage: "css" },
      { title: "6. तुलना नियम", content: "रंग आणि आधार सुसंगत हवा.\nटेक्स्ट वाचता येणे महत्त्वाचे — contrast.\nगडद मागे; फिकट मजकूर किंवा उलट.\nपहिल्या स्क्रीनवर रंग कसा दिसतो.\nमराठी मजकुरासाठी वाचनीयता निर्धार.", code: `body { color: #222; }
.badge { color: white; background: navy; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन रंग भिन्न रीतीने.\ngradient भाग. alpha टीप.\nप्रत्येक रंग नावासह दिसतो.", code: `.मुख्य {
  background: linear-gradient(180deg, #fff, #ffe);
}
.टीप {
  background: rgba(255, 0, 0, 0.1);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["रंग तीन प्रकार?", "हेक्स म्हणजे?", "alpha काय करता?", "gradient म्हणजे?"],
    quiz: [
      { question: "रंग मूल्य प्रकार?", options: ["नाव हेक्स rgba", "link meta", "width height", "tag class"], correct: 0 },
      { question: "पारदर्शकता गुण?", options: ["alpha", "zeta", "beta", "delta"], correct: 0 },
      { question: "दोन रंगांचे एकत्र?", options: ["gradient", "shadow", "radius", "scale"], correct: 0 },
      { question: "वाचनीयता काय ठरवते?", options: ["contrast", "float", "gap", "order"], correct: 0 },
    ],
    challenge: {
      prompt: "रंग नमुना पेज",
      starterCode: `.मुख्य { background: linear-gradient(180deg, #fff, #ffe); }`,
      expectedOutput: "Renders color sample page",
    },
    interviewQuestions: ["alpha गुणवत्ता कधी वापरू?", "contrast तपासणी कशी?"],
    related: ["css-box-model", "css-typography"],
    prev: "css-box-model",
    next: "css-typography",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-typography",
    categoryId: "web",
    title: "Typography",
    marathiTitle: "टायपोग्राफी — मजकूर व्यवस्था",
    level: "beginner",
    minutes: 12,
    summary: "font families, आकार, line-height, weight आणि वाचनीयता.",
    sections: [
      { title: "1. मजकूर भाषा", content: "टायपोग्राफी म्हणजे मजकूर रूप.\nआकार, वजन आणि ओळ अंतर — सर्व येथे.\nवाचनीयता सर्वांत महत्त्वाची.\nमराठी मजकुरासाठी रूप नीट निवडा.", code: `body { font-family: sans-serif; }`, codeLanguage: "css" },
      { title: "2. font family", content: "family नावे यादीने देतात.\nसर्वांत आधी हवे नाव; नंतर पर्याय.\nपहिले नाही मिळाले की दुसरे.\ngeneric मध्ये sans-serif शेवटी.\nहे रचना विश्वासार्ह करते.", code: `p { font-family: Verdana, Arial, sans-serif; }`, codeLanguage: "css" },
      { title: "3. आकार नियम", content: "rem रूट आकारावर अवलंबून — हवे तर.\nमोठा मजकूर वाचण्यास आणि शीर्षक.\nलहान टीप आकार वेगळे.\nवैविध्यात गोंधळ नको.", code: `h1 { font-size: 2rem; }
p { font-size: 1rem; }`, codeLanguage: "css" },
      { title: "4. वजन आणि शैली", content: "font-weight म्हणजे अक्षराचा जाडपणा.\nसामान्य, मध्यम, ठळक numeric.\nitalic म्हणजे तिरपे रूप.\nहे शीर्षक आणि टीप वेगळे करते.\nजाड जास्त केला की वाचणे त्रासदायक.", code: `.title { font-weight: bold; }
.टीप { font-style: italic; }`, codeLanguage: "css" },
      { title: "5. ओळ अंतर", content: "line-height म्हणजे ओळींचे अंतर.\nउदा. 1.5 सामान्य वाचनीय.\nशीर्षकासाठी कमी अंतर चालते.\nबरोबर कोड मजकूर स्पष्ट ठेवते.\n1.5 आधार पुन्हा तपासा.\n1.5 आधार हाताने करून दिसेल.\n1.5 आधार उदाहरण स्वतंत्र वापरा.\n1.5 आधार आत्मविश्वास वाढतो.", code: `p { line-height: 1.6; }`, codeLanguage: "css" },
      { title: "6. text align", content: "align म्हणजे मजकूर बसवण्याचा क्रम.\nडावीकडे, बाजूला, उजवीकडे, बरोबर.\nकेंद्र शीर्षकासाठी योग्य.\nदोन्ही बाजूंनी neatly जातो.", code: `h1 { text-align: center; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "टायपोग्राफी पेज.\nतीन heading. दोन paragraph.\nfont आणि ओळ अंतर.", code: `body { font-family: sans-serif; line-height: 1.6; }
.मुख्य { font-weight: bold; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["family म्हणजे?", "rem कशावर असतो?", "weight काय?", "line-height काय?"],
    quiz: [
      { question: "अक्षरघर?", options: ["font family", "box model", "grid line", "border"], correct: 0 },
      { question: "रूट आकार?", options: ["rem", "px only", "em calibri", "cm"], correct: 0 },
      { question: "जाडपणा नियंत्रण?", options: ["font-weight", "font-size", "margin", "cursor"], correct: 0 },
      { question: "ओळ अंतर?", options: ["line-height", "letter-spacing", "border", "radius"], correct: 0 },
    ],
    challenge: {
      prompt: "टायपोग्राफी पेज",
      starterCode: `p { line-height: 1.6; }`,
      expectedOutput: "Renders typography demo",
    },
    interviewQuestions: ["rem पेक्षा px कधी?", "ओळ अंतर जास्त का नको?"],
    related: ["css-colors-background", "css-layout-flex"],
    prev: "css-colors-background",
    next: "css-layout-flex",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-layout-flex",
    categoryId: "web",
    title: "Layout Flex",
    marathiTitle: "Flex — लवचिक मांडणी",
    level: "beginner",
    minutes: 12,
    summary: "flex container, main-cross axes, justify-content आणि align.",
    sections: [
      { title: "1. flex कल्पना", content: "flex एक आयामी मांडणी तंत्र.\ncontainer मध्ये आत मुलांची ओळ बनतो.\nघटक आपोआप गुळगुळीत बसतात.\nहे मोबाइल आणि डेस्कटॉप दोघात होते.\nflex ही मांडणीची ताकद.", code: `.app { display: flex; }`, codeLanguage: "css" },
      { title: "2. main axis", content: "flex दोन अक्षात चालतो.\nrow मध्ये क्षैतिज; column उभ्या.\nघटक main दिशेने जोडले जातात.\nदिशा समजली की आधार सोपा.", code: `.row { display: flex; }
.column { display: flex; flex-direction: column; }`, codeLanguage: "css" },
      { title: "3. justify-content", content: "main axis वरील स्थिती justify नियंत्रित.\nसुरुवात, मध्य, शेवट.\nspace-between — गट सरकतो.\nहे भागांमधील अंतर समजते.\nनियम नेमके ठेवा.", code: `.menu { display: flex; justify-content: space-between; }`, codeLanguage: "css" },
      { title: "4. align-items", content: "वर, मध्य, खाली — निवड तुमची.\nstretch म्हणजे पूर्ण उंची.\nहे ओळ संरेखित करते.", code: `.bar { display: flex; align-items: center; }`, codeLanguage: "css" },
      { title: "5. gap आणि wrap", content: "gap म्हणजे घटकांमधील अंतर.\nflex-wrap ने ओळ न संपवता next ओळ.\nमोठा mobile मध्ये wrap आवश्यक.\nदोन गुण मांडणीचा आधार.\nस्वच्छ अंतर — सुखी दृश्य.", code: `.list { display: flex; flex-wrap: wrap; gap: 8px; }`, codeLanguage: "css" },
      { title: "6. सराव नियम", content: "flex प्रत्येक ओळ original असेल.\nsmall groups साठी flex उत्तम.\nमोठ्या क्षेत्रांसाठी grid हवा.\nप्रत्येक घटकाचे आकार नेमके.\nflex नीट केला की page सुरळीत.", code: `.status { display: flex; gap: 4px; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन item. space-between.\nwrap नियम. center align.\nमोबाइल आणि डेस्कटॉप दोन्ही सुखी.", code: `.nav { display: flex; justify-content: space-between; flex-wrap: wrap; }`, codeLanguage: "css" },
    ],
    practiceQuestions: ["main axis म्हणजे?", "justify काय?", "cross axis काय?", "wrap कधी?"],
    quiz: [
      { question: "एक आयामी मांडणी?", options: ["flex", "grid only", "float", "none"], correct: 0 },
      { question: "main स्थिती नियंत्रण?", options: ["justify-content", "align-items", "margin top", "z-index"], correct: 0 },
      { question: "cross स्थिती?", options: ["align-items", "justify", "flex-wrap", "gap"], correct: 0 },
      { question: "पुढील ओळ?", options: ["flex-wrap", "no-wrap", "nowrap line", "grid only"], correct: 0 },
    ],
    challenge: {
      prompt: "flex मेनू",
      starterCode: `.nav { display: flex; justify-content: space-between; }`,
      expectedOutput: "Renders flex nav demo",
    },
    interviewQuestions: ["row आणि column फरक?", "align stretch काय?"],
    related: ["css-typography", "css-grid-system"],
    prev: "css-typography",
    next: "css-grid-system",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-grid-system",
    categoryId: "web",
    title: "Grid System",
    marathiTitle: "Grid — रो आणि स्तंभ",
    level: "beginner",
    minutes: 12,
    summary: "grid container, rows/columns, gap आणि areas व्यवस्था.",
    sections: [
      { title: "1. grid कल्पना", content: "grid ही द्वि-आयामी मांडणी.\nओळी आणि स्तंभ एकाच घोषणेत.\nमोठे क्षेत्र आणि पत्ते व्यवस्थित.\nflex एक दिशा; grid दोन दिशा.\nमांडणीचा आधार हा grid.", code: `.app { display: grid; }`, codeLanguage: "css" },
      { title: "2. rows columns", content: "grid-template पासून ओळी स्तंभ बनतात.\nप्रत्येक ट्रॅक नाव स्पष्ट.\nfr म्हणजे वाटणी भाग.\nरचना लिहिताना आधार basis.", code: `.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`, codeLanguage: "css" },
      { title: "3. gap जागा", content: "gap म्हणजे ओळी आणि स्तंभ अंतर.\nएकच गुणधर्म दोन्ही दिशा.\nहे स्वच्छ अंतर घालते.\nमांडणीत gap आवश्यक.\nदृश्य व्यवस्थित आणि हवेहवेसे.", code: `.grid {
  display: grid;
  gap: 1rem;
}`, codeLanguage: "css" },
      { title: "4. repeat नियम", content: "ट्रॅक वारंवार लिहू नका.\nauto-fit म्हणजे जागेनुसार आकार.\nminmax ने लहान मोठी मर्यादा.\nहे responsive स्तंभ बनवते.\nrepeat गुळगुळीत मांडणी देतो.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}`, codeLanguage: "css" },
      { title: "5. areas रचना", content: "grid-area ने भाग नाव द्यावे.\ntemplate मध्ये नकाशा लिहावा.\nउदा. header मुख्य footer.\nहे पेजची स्पष्ट रचना देते.\nभाग नावे वाचायला सोपी.", code: `.page {
  display: grid;
  grid-template-areas: "header" "main" "footer";
}`, codeLanguage: "css" },
      { title: "6. span आणि प्रवाह", content: "घटक अनेक स्तंभ ओलांडू शकतो.\ngrid-column मधून span लिहा.\nहे एक घटक विस्तार देतो.\nशैली रचना न ढळता बसते.\nभक्कम मांडणी सहज होते.", code: `.wide {
  grid-column: span 2;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "तीन स्तंभ. repeat आधार.\ngap. एक span घटक.\nमोबाइलवर मांडणी आपोआप.", code: `.pane {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["grid किती आयाम?", "fr म्हणजे?", "gap काय?", "areas म्हणजे?"],
    quiz: [
      { question: "द्वि-आयामी मांडणी?", options: ["grid", "flex only", "line", "none"], correct: 0 },
      { question: "वाटणी भाग?", options: ["fr", "px", "rgb", "rem"], correct: 0 },
      { question: "ट्रॅक अंतर?", options: ["gap", "margin top", "padding", "border"], correct: 0 },
      { question: "जागेनुसार स्तंभ?", options: ["auto-fit", "fixed", "stretch", "overflow"], correct: 0 },
    ],
    challenge: {
      prompt: "grid पेज",
      starterCode: `.pane { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }`,
      expectedOutput: "Renders grid layout demo",
    },
    interviewQuestions: ["grid आणि flex फरक?", "span कधी वापरू?"],
    related: ["css-layout-flex", "css-positioning"],
    prev: "css-layout-flex",
    next: "css-positioning",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-positioning",
    categoryId: "web",
    title: "Positioning",
    marathiTitle: "स्थान — घटक कुठे उभा",
    level: "beginner",
    minutes: 12,
    summary: "static, relative, absolute, fixed आणि z-index नियम.",
    sections: [
      { title: "1. position कल्पना", content: "position घटकाचे स्थान बदलतो.\nstd स्थितीत घटक प्रवाहात असतो.\nहे स्टिकी आणि layers चा आधार.\nस्थान समजले की अंदाज येतो.", code: `.टीप { position: static; }`, codeLanguage: "css" },
      { title: "2. relative", content: "relative घटक मूळ जागेपासून सरकतो.\nलेयर रचना बदलते — प्रवाह वाचतो.\ntop, left, right ने बदल होतो.\nहे लहान बदलांसाठी योग्य.", code: `.badge { position: relative; top: 2px; }`, codeLanguage: "css" },
      { title: "3. absolute", content: "absolute जवळच्या relative पालकाकडे.\nपालक नसेल तर पेज बेस बनतो.\nघटक प्रवाहातून वेगळा होतो.\nहे मोडल साठी आवश्यक.", code: `.कोपरा {
  position: absolute;
  top: 0;
  right: 0;
}`, codeLanguage: "css" },
      { title: "4. fixed", content: "fixed घटक दृश्यात कायम राहतो.\nस्क्रोल केल्यावरही तो स्थिर.\nउदा. स्थायी मेनू किंवा टीप.\nहे दृश्याच्या आधार स्थान घेते.\nलहान वापर correct ने.", code: `.topbar { position: fixed; top: 0; }`, codeLanguage: "css" },
      { title: "5. sticky", content: "sticky midly fixed — थांबून राहतो.\nस्क्रोलवर तो चिकटतो.\nसाधारण boundary मध्ये राहतो.\nहे विभाग शीर्षक साठी सोयीचे.\nआधार तपासून वापर करा.", code: `.भाग { position: sticky; top: 0; }`, codeLanguage: "css" },
      { title: "6. z-index layer", content: "z-index डोंगर क्रम ठरवतो.\nजास्त संख्या वर दिसते.\nposition शोध mandatory असतो.\nस्तर नियम सरळ ठेवा.", code: `.modal { position: absolute; z-index: 100; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "स्थान नमुना पेज.\nएक relative बिल्ला. एक fixed bar.\nsticky heading. z-index टीप.\nमोबाइलवरही स्थिर दिसते.", code: `.bar {
  position: fixed;
  top: 0;
  z-index: 10;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["static म्हणजे?", "relative काय?", "absolute कोणाकडे?", "z-index काय?"],
    quiz: [
      { question: "प्रवाहात कायम?", options: ["static", "absolute", "fixed", "none"], correct: 0 },
      { question: "मूळ जागेपासून?", options: ["relative", "sticky", "grid", "flex"], correct: 0 },
      { question: "स्क्रोलवर स्थिर?", options: ["fixed", "relative", "static", "float"], correct: 0 },
      { question: "डोंगर क्रम?", options: ["z-index", "gap", "order", "opacity"], correct: 0 },
    ],
    challenge: {
      prompt: "स्थान पेज",
      starterCode: `.bar { position: fixed; top: 0; }`,
      expectedOutput: "Renders positioning demo",
    },
    interviewQuestions: ["absolute पालक कसा?", "sticky कधी?"],
    related: ["css-grid-system", "css-responsiveness"],
    prev: "css-grid-system",
    next: "css-responsiveness",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-responsiveness",
    categoryId: "web",
    title: "Responsiveness",
    marathiTitle: "प्रतिसादी रचना",
    level: "beginner",
    minutes: 12,
    summary: "viewport, media queries, mobile first आणि flexible आकार.",
    sections: [
      { title: "1. viewport कल्पना", content: "viewport म्हणजे दृश्यमान क्षेत्र — स्क्रीनचा भाग.\nमोबाइल लहान; डेस्कटॉप मोठा.\nहे क्षेत्र CSS आधार सांगते.\nviewport meta ने आधार सुधारतो.\nप्रतिसादाचा पाया हा viewport.", code: `<meta name="viewport" content="width=device-width, initial-scale=1">`, codeLanguage: "css" },
      { title: "2. media query", content: "उदा. लहान स्क्रीनसाठी ओळ.\nmin-width म्हणजे मोठ्यापासून.\nनियम सुपथ निवडतो.\nहे प्रतिसादी रचनेचे मुख्य साधन.", code: `@media (max-width: 600px) {
  .pane { grid-template-columns: 1fr; }
}`, codeLanguage: "css" },
      { title: "3. mobile first", content: "नंतर मोठ्यासाठी सुधारणा.\nहे filing सोपी ठेवते.\nलहान आधार पहिले — कमी त्रास.\nदिशा नियम स्पष्ट ठरतो.", code: `.grid { display: grid; grid-template-columns: 1fr; }
@media (min-width: 700px) {
  .grid { grid-template-columns: 1fr 1fr; }
}`, codeLanguage: "css" },
      { title: "4. flexible आकार", content: "relative युक्तीने आकार वाकतो.\nचित्रे max-width ने लहान होतात.\nमोठा layout अडकत नाही.", code: `img { max-width: 100%; }`, codeLanguage: "css" },
      { title: "5. rem आधार", content: "rem रूटच्या आकारावर असतो.\nएक नियम बदलल्यास संपूर्ण वाढतो.\nहे प्रवेश्यता सुधारते.\nबृहद आकार बदल होतो.\nrem ही मदतनीस आकार सवय.", code: `html { font-size: 16px; }
h1 { font-size: 2rem; }`, codeLanguage: "css" },
      { title: "6. टच नियम", content: "बरेच भाग टच वर आधारित.\ntarget लहान म्हणजे त्रास.\nयोग्य अंतर टप्पे देतो.\nटच अनुभव नियम पाळा.", code: `button { min-height: 44px; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "प्रतिसादी पेज.\nmobile फक्त एक स्तंभ.\nडेस्कटॉपवर दोन स्तंभ.\nचित्र max-width. टच आकार.", code: `.row { display: grid; grid-template-columns: 1fr; gap: 1rem; }
@media (min-width: 700px) {
  .row { grid-template-columns: 1fr 1fr; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["viewport म्हणजे?", "media query काय?", "mobile first काय?", "max-width काय?"],
    quiz: [
      { question: "दृश्यमान क्षेत्र?", options: ["viewport", "margin", "padding", "border"], correct: 0 },
      { question: "परिस्थितीनुसार शैली?", options: ["media query", "grid", "flex", "z-index"], correct: 0 },
      { question: "लहान प्रथम शैली?", options: ["mobile first", "desktop first", "none", "static"], correct: 0 },
      { question: "चित्र आकार मर्यादा?", options: ["max-width", "min-height", "z-index", "opacity"], correct: 0 },
    ],
    challenge: {
      prompt: "प्रतिसादी पेज",
      starterCode: `@media (min-width: 700px) { .row { grid-template-columns: 1fr 1fr; } }`,
      expectedOutput: "Renders responsive page",
    },
    interviewQuestions: ["min-width आधार काय?", "rem का उपयोगी?"],
    related: ["css-positioning", "css-transitions-animations"],
    prev: "css-positioning",
    next: "css-transitions-animations",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-transitions-animations",
    categoryId: "web",
    title: "Transitions & Animations",
    marathiTitle: "Transfer आणि सजीव रचना",
    level: "beginner",
    minutes: 12,
    summary: "transition गुण, timing, animation आणि keyframes कल्पना.",
    sections: [
      { title: "1. transition कल्पना", content: "transition म्हणजे बदलाचा गुळगुळीत क्रम.\nरंग, आकार बदल सहज दिसतो.\nनवा मूल्य हळुवार साधतो.\nहे अनुभव अधिक जिवंत करते.\nसुरुवात small transition ने.", code: `.btn { transition: background 0.3s; }`, codeLanguage: "css" },
      { title: "2. transition गुणधर्म", content: "कोणता गुणधर्म हलवायचा ते सांगा.\nकालावधी सेकंदात असतो.\ntiming curve गती आकार ठरवते.\nउदा. ease, linear, ease-in.\nहे सर्व एकत्र लिहून सोपे.", code: `.item { transition: all 0.2s ease; }`, codeLanguage: "css" },
      { title: "3. timing curve", content: "timing म्हणजे गतीचा आकार.\nease मध्ये आरंभ शांत.\nlinear सर्वत्र सारखी.\nनिवडीने भावना येते.", code: `.x { transition-timing-function: ease-out; }`, codeLanguage: "css" },
      { title: "4. animation कल्पना", content: "animation हे अनेक पायरी हालचाल.\n@keyframes मध्ये टप्पे लिहितात.\nfrom आणि to टप्पे.\nduration ने वेळ ठरतो.\nहे दृश्य सजीव बनवते.", code: `@keyframes फड {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "5. keyframes टप्पे", content: "keyframes मध्ये टप्पे वेगळे लिहितात.\n0% आरंभ; 100% अंत.\nमध्ये 50% वेगळा दृश्य.\nहे दीर्घ हालचाल करते.\nगणना नेमकी ठरवा.", code: `@keyframes slide {
  0% { left: 0; }
  100% { left: 20px; }
}`, codeLanguage: "css" },
      { title: "6. सवय नियम", content: "prefers-reduced-motion वापरा.\nजड animation bandwidth लागतो.\nप्रवेश्यता ही प्रथम.\nसुरुवात हलकी आणि सटीक.", code: `@media (prefers-reduced-motion: reduce) {
  .x { animation: none; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "एक button transition.\nएक animation टीप.\nreduced-motion नियम कायम.", code: `.btn {
  transition: transform 0.2s;
}
.btn:hover {
  transform: scale(1.02);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["transition काय?", "timing म्हणजे?", "keyframes म्हणजे?", "reduced-motion काय?"],
    quiz: [
      { question: "बदल गुळगुळीत?", options: ["transition", "static", "none", "border"], correct: 0 },
      { question: "गतीचा आकार?", options: ["timing function", "main axis", "grid area", "float"], correct: 0 },
      { question: "हालचाल टप्पे हे?", options: ["keyframes", "viewport", "margin", "display"], correct: 0 },
      { question: "हालचाल कमी करणे?", options: ["prefers-reduced-motion", "flex", "gap", "z-index"], correct: 0 },
    ],
    challenge: {
      prompt: "सजीव नमुना",
      starterCode: `.btn { transition: transform 0.2s; }`,
      expectedOutput: "Renders transition demo",
    },
    interviewQuestions: ["transition आणि animation फरक?", "keyframes 50% काय?"],
    related: ["css-responsiveness", "css-variables-functions"],
    prev: "css-responsiveness",
    next: "css-variables-functions",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-variables-functions",
    categoryId: "web",
    title: "Variables & Functions",
    marathiTitle: "Variables — एकदा ठरवा सर्वत्र",
    level: "beginner",
    minutes: 12,
    summary: "custom property, var वापर आणि calc कल्पना.",
    sections: [
      { title: "1. variables कल्पना", content: "variable म्हणजे नावाने ठरलेले मूल्य.\nएक ठिकाणी बदलले तर सर्वत्र बदलते.\nसातत्य आणि त्रास कमी होतो.\nहे रंग, अंतर साठी योग्य.\nसंग्रह variables ने शिचती राहते.", code: `:root {
  --main-color: #234;
}`, codeLanguage: "css" },
      { title: "2. custom property", content: ":root मध्ये जागतिक ठरते.\nघटकाला वेगळे मूल्य द्या.\nहेni दोन प्रकार विचारता.\nरचना clear राहते.\n-- नाव वापर सोपा आहे.\n-- नाव अचूक गुण देतो.\n-- नाव प्रत्येक वेळी शिकवतो.\n-- नाव सरावाने नक्की.", code: `:root { --space: 8px; }
.card { padding: var(--space); }`, codeLanguage: "css" },
      { title: "3. var वापर", content: "var ने मूल्य जागेवर आणतात.\nfallback मूल्य दुसऱ्या जागी.\nवाचनीयता वाढते — गोंधळ कमी.\nहे व्यवस्थेचा मुख्य खांब.", code: `p { color: var(--ink, #111); }`, codeLanguage: "css" },
      { title: "4. calc function", content: "calc मधून गणना होते.\nउदा. उंची वजा अंतर.\nmultiple एकक मिसळता येते.\nपद्धत simple आणि तंतोतंत.\nमोजमाप बदल आपोआप होतो.", code: `.bar {
  width: calc(100% - var(--space));
}`, codeLanguage: "css" },
      { title: "5. min max clamp", content: "min दोघांत लहान; max मोठा.\nclamp मध्ये तीन मूल्ये.\nलघुतम, आदर्श, गरज.\nहे आकार आपोआप सांगते.\nतरल आकार main पासून.", code: `h1 { font-size: clamp(1.5rem, 4vw, 3rem); }`, codeLanguage: "css" },
      { title: "6. थीम व्यवस्था", content: "variables ne custom theme सोयीस्कर.\nरंगांचा संग्रह एकदाच देता.\nstylesheet राहते — मूल्य बदलते.\nहे विविध पर्याय देते.", code: `:root { --bg: white; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #222; }
 }
body { background: var(--bg); }`, codeLanguage: "css" },
      { title: "Mini Project", content: "व्हॅरिएबल पेज.\nतीन custom property.\nvar हे बाबींमधून. calc उदाहरण.\nथीम बदल टीप.", code: `:root {
  --main: teal;
  --space: 1rem;
}
.card {
  padding: var(--space);
  border: 1px solid var(--main);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["variable म्हणजे?", "var काय करते?", "calc काय?", "clamp कसे?"],
    quiz: [
      { question: "नावाने ठरलेले मूल्य?", options: ["custom property", "tag", "class", "id"], correct: 0 },
      { question: "-- नाव असतो?", options: ["property", "selector", "attribute", "event"], correct: 0 },
      { question: "गणना function?", options: ["calc", "hover", "focus", "grid"], correct: 0 },
      { question: "तीन मूल्ये आकार?", options: ["clamp", "gap", "border", "radius"], correct: 0 },
    ],
    challenge: {
      prompt: "व्हॅरिएबल पेज",
      starterCode: `:root { --main: teal; --space: 1rem; }`,
      expectedOutput: "Renders variables demo",
    },
    interviewQuestions: ["var fallback काय?", "calc कुठे उपयोगी?"],
    related: ["css-transitions-animations", "css-marathi-project"],
    prev: "css-transitions-animations",
    next: "css-marathi-project",
    levelLabel: CSS1_LABEL,
  },
  {
    slug: "css-marathi-project",
    categoryId: "web",
    title: "CSS Marathi Project",
    marathiTitle: "मराठी प्रोजेक्ट — सर्व CSS एकत्र",
    level: "beginner",
    minutes: 12,
    summary: "मराठी न्यूज पेज — selectors, box, flex, grid, responsive आणि variables.",
    sections: [
      { title: "1. उद्दिष्टे स्पष्ट", content: "हा धडा सर्व CSS गुण एकत्र करतो.\nटार्गेट: \"मराठी न्यूज पेज\" styling.\nहेडर, आर्टिकल, बाजूचा स्तंभ.\nमोबाइल आणि डेस्कटॉप दोन्ही.\nप्रत्येक धड्याचे प्रात्यक्षिक येथे.", code: `<link rel="stylesheet" href="news.css">
<h1>मराठी न्यूज</h1>`, codeLanguage: "css" },
      { title: "2. संरचना setup", content: "स्वच्छ variables प्रथम ठरवा.\nरंग आणि अंतर संग्रह.\nbox-sizing सर्वत्र.\nflex आणि grid रचना ठरवा.\nपाया ठरला की styling सोपी.", code: `:root {
  --ink: #1c1c1c;
  --accent: #b03;
  --space: 1rem;
}
body {
  color: var(--ink);
  margin: 0;
}`, codeLanguage: "css" },
      { title: "3. header मेनू", content: "logo डावीकडे. search उजवीकडे.\nहे mobile साठी सोयीचे.", code: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space);
}`, codeLanguage: "css" },
      { title: "4. आर्टिकल grid", content: "मुख्य भाग grid ने रचतो.\nमुख्य आर्टिकल मोठा; बाजूला स्तंभ.\nलहान आकारात एकच स्तंभ.\nदोन आकारांची सुसंगतता.\nवाचनीयता आधार ठरतो.", code: `.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space);
}
@media (max-width: 700px) {
  .content { grid-template-columns: 1fr; }
}`, codeLanguage: "css" },
      { title: "5. कार्ड शैली", content: "बातमी कार्ड border, padding व्यवस्था.\nbox नियम स्वच्छ आणि मोकळा.\nhover सहज transition.\nशीर्षक font weight वेगळे.", code: `.card {
  border: 1px solid #ddd;
  padding: var(--space);
  border-radius: 4px;
  transition: box-shadow 0.2s;
}`, codeLanguage: "css" },
      { title: "6. प्रवेश्यता नियम", content: "रंग contrast कडक असावा.\nreduced-motion नियम.\nमराठी मजकूर वाचनीय.\nहेच मानक वेब सुखी ठरते.", code: `button { min-height: 44px; }
:focus-visible {
  outline: 2px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "संपूर्ण न्यूज पेज styling.\nvariables आधार. header flex.\nमुख्य grid. कार्ड नियम.\nresponsive एक स्तंभ. हे Level 1 समाप्त.", code: `:root { --ink: #1c1c1c; --accent: #b03; --space: 1rem; }
body { margin: 0; color: var(--ink); }
header { display: flex; justify-content: space-between; }
.card {
  border: 1px solid #ddd;
  padding: var(--space);
}
@media (max-width: 700px) {
  .content { display: block; }
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["अॅप कुठले गुण जोडतो?", "variables आधी का?", "grid कुठे?", "focus नियम काय?"],
    quiz: [
      { question: "Header मांडणी?", options: ["flex", "static", "none", "border"], correct: 0 },
      { question: "मुख्य भाग रचना?", options: ["grid", "keyframe", "viewport only", "margin"], correct: 0 },
      { question: "व्हॅरिएबल फायदा?", options: ["एकदा ठरवा", "लहान फाइल", "अनेक ठिकाणी", "सर्वत्र नाही"], correct: 0 },
      { question: "contrast कशाला?", options: ["वाचनीयता", "सजीवता", "भार", "खर्च"], correct: 0 },
    ],
    challenge: {
      prompt: "न्यूज पेज styling",
      starterCode: `:root { --ink: #1c1c1c; --accent: #b03; --space: 1rem; }`,
      expectedOutput: "Renders full marathi news page styling",
    },
    interviewQuestions: ["हे Base कुठून वाढवू?", "जास्त color कुठे?"],
    related: ["css-variables-functions", "css-structure-cascade"],
    prev: "css-variables-functions",
    next: "css-structure-cascade",
    levelLabel: CSS1_LABEL,
  },];
