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
      {
        title: "का शिकावे? CSS — रचना आणि कलेक्ट नियम चे फायदे आणि महत्त्व",
        content: "✓ दुसरा — <style> block head मध्ये: लहान पेज किंवा तात्पुरत्या शैलीसाठी सोयीस्कर.\n✓ एका नियमात अनेक declaration असू शकतात; सोयीसाठी प्रत्येक declaration नवीन ओळीवर लिहितात.\n✓ कोड काय लिहितो त्यापेक्षा कसा लिहितो हेदेखील महत्त्वाचं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ स्वच्छ, सुसंगत CSS पुढे टिकतो; गोंधळलेला शैली कधीच अडचण आणतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. CSS म्हणजे काय?", content: "CSS चा पूर्ण अर्थ Cascading Style Sheets. ही एक शैली भाषा आहे — वेबपेज कसा दिसेल हे ती ठरवते. HTML फक्त रचना सांगते: कोणता मजकूर, कोणती यादी, कोणतं चित्र. पण तेच घटक लाल, निळे, मोठे, लहान, अंतर देऊन दिसतील का — हा निर्णय CSS चा.\nएक घर घ्या: HTML भिंत आणि दारे उभी करते; CSS त्यांना रंग, रांगोळी आणि आरसा लावते. दोन्ही एकत्र आले म्हणजे पेज सुंदर दिसते.\nCSS मध्ये नियम लिहितो: कोणत्या घटकाला, काय शैली. ही शैली एका वेगळ्या फाइलमध्ये (style.css) ठेवतात आणि HTML मध्ये <link> ने जोडतात.\nअशा वेगळ्या फाइलमुळे मजकूर आणि रूप वेगळे राहतात आणि एका ठिकाणी बदल केला की सगळीकडे होतो. हा धडा तोच पाया रचतो.", code: `<link rel="stylesheet" href="style.css">`, codeLanguage: "css" },
      { title: "2. शैली जोडणी", content: "शैली HTML मध्ये तीन मार्गांनी जोडता येते. पहिला — बाह्य फाइल: <link rel=\"stylesheet\" href=\"style.css\"> ही ओळ head मध्ये घालतात आणि संपूर्ण पेजला ती फाइल लागू होते. मोठ्या साइटसाठी हाच सर्वोत्तम मार्ग — एक फाइल, अनेक पेजे.\nदुसरा — <style> block head मध्ये: लहान पेज किंवा तात्पुरत्या शैलीसाठी सोयीस्कर. पण ती शैली फक्त त्या एका पेजला मिळते, दुसऱ्या पेजवर नाही.\nतिसरा — inline attribute: <p style=\"color: blue\"> सारखा घटकाबरोबरच थेट शैली. हा फक्त त्या एका घटकालाच लागू होतो आणि पुन्हा वापरता येत नाही.\nसुरुवातीला तिन्ही प्रकार ओळखून घ्या, पण सवय बाह्य फाइलचीच ठेवा. तिने रंग, font आणि layout सर्व एकाच व्यवस्थेच्या ठिकाणी असते आणि बदल सहज होतो.", code: `<p style="color: blue">थेट शैली</p>`, codeLanguage: "css" },
      { title: "3. नियम रचना", content: "प्रत्येक CSS नियमाची रचना दोन भागांत असते — selector आणि declaration. Selector सांगतो कोणत्या घटकाला शैली लागू करायची; declaration मध्ये ती शैली काय आहे हे लिहितात.\nDeclaration नेहमी { } या कंसात बसते आणि त्यात property: value अशी जोडी असते. उदा. color: green म्हणजे मजकुराचा रंग हिरवा.\nएका नियमात अनेक declaration असू शकतात; सोयीसाठी प्रत्येक declaration नवीन ओळीवर लिहितात. शेवटी semicolon (;) घालायला विसरू नये — तोच एका ओळीतील दोन जोड्या वेगळे करतो.\nनियम वाचण्याची ही सवय लागली की कोणताही stylesheet उलगडतो. अनोळखी फाइलही वरून खाली नीट वाचता येते — रचना समजली की CSS चं अर्धं जग उघडतं.", code: `p {
  color: green;
}`, codeLanguage: "css" },
      { title: "4. cascade तत्त्व", content: "Cascade म्हणजे नियमांतील जिंकण्याचा क्रम. दोन नियम एकाच घटकाला विरोधी शैली देत असतील, तर कोणता लागू होईल हे cascade ठरवतो.\nसाधा नियम: नंतर लिहिलेला नियम आधीच्या नियमाला ढकलतो. वर p { color: red; } आणि खाली p { color: blue; } असेल, तर मजकूर निळा दिसतो — कारण निळा नंतर आला.\nपण जेव्हा अधिक विशिष्ट निवडक (id किंवा class) सहभागी येते, तेव्हा क्रमापेक्षा तोच जिंकतो. म्हणूनच CSS चं नाव 'cascading' — शैली थरांवर थर चढत जातात.\nहा क्रम लक्षात राहिला तर 'माझी शैली का लागली नाही' हा प्रश्न कधीच राहत नाही. हे motוiviं समजणं म्हणजे CSS चं सखोल समजणं.", code: `p { color: red; }
p { color: blue; }`, codeLanguage: "css" },
      { title: "5. specificity मूल", content: "Specificity म्हणजे selector च्या वजनाचा क्रम — कोणता नियम जिंकेल हे तो ठरवतो. सगळे selectors सारखे वजनाचे नसतात; id, class आणि tag यांचे वजन वेगळे असते.\nId निवड (#मुख्य) सर्वांत जड; त्यानंतर class (.note) मध्यम; आणि tag (p, h1) सर्वांत हलका. जास्त वजन असलेला नियम कुठेही लिहिला तरी जिंकतो.\nजर .note चा teal आणि p चा red नियम एकत्र आला, तर .note असलेला paragraph teal दिसतो — कारण class चं वजन tag पेक्षा जास्त.\nव्यवहारात अनेक शैली class नेच करतात; id शैलीसाठी क्वचित वापरतात. वजन समजलं की 'माझा नियम का लागला नाही' असे त्रास संपतात.", code: `.note { color: teal; }`, codeLanguage: "css" },
      { title: "6. सवयी", content: "कोड काय लिहितो त्यापेक्षा कसा लिहितो हेदेखील महत्त्वाचं. स्वच्छ, सुसंगत CSS पुढे टिकतो; गोंधळलेला शैली कधीच अडचण आणतो.\nपहिली सवय: एका नियमातील प्रत्येक declaration नवीन ओळीवर लिहा. वाचायला सोपं जातं आणि कोणता बदल कुठे झाला हे लगेच दिसतं.\nदुसरी: एका गुणधर्माला एक मूल्य; एकाच जागी दोन पर्याय लिहू नका. तिसरी: प्रत्येक पेजचा मुख्य stylesheet वेगळा ठेवा — दुसऱ्याचा कोड अडकवू नका.\nया लहान सवयी लागल्या की मोठा प्रोजेक्टही CSS मध्ये सुरळीत राहतो. शुद्ध नियम आणि शुद्ध सवय — हीच या धड्याची शिकवण.", code: `h1 {
  color: navy;
  font-size: 32px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता सगळं एकत्र करूया — एक बाह्य stylesheet फाइल, तीन घटकांची शैली आणि cascade चा प्रात्यक्षिक दाखवा.\nफाइलमध्ये काही selectors ने रंग ठरवा; <link> घालून ती HTML मध्ये जोडा. नंतर दोन विरोधी शैली एकाच ठिकाणी लिहा — नंतर लिहिलेला नियम जिंकेल हे दिसेल.\nप्रत्येक घटक आपल्या शैलीने रंगतो आणि cascade चा नियमही नजरेस पडतो. संपूर्ण पेज एका फाइलीतून नियंत्रित होत असल्याचं दिसतं.\nहा छोटा सराव या Level चा आरसा आहे. पुढील धड्यांत selectors, box model आणि इतर गुण याच पायावर उभे राहतील.", code: `<link rel="stylesheet" href="style.css">
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
      {
        title: "Selectors — निवडक विवरण म्हणजे काय?",
        content: "tag, class आणि id selectors, attribute work आणि selector सवयी.\nTag selector ही सर्वांत सोपी निवड — घटकाच्या नावावरच शैली.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Selectors — निवडक विवरण चे फायदे आणि महत्त्व",
        content: "✓ पण सरावात शैलीसाठी id कमी वापरतात; JavaScript ला घटक शोधण्यासाठी id अधिक सोयीची असते.\n✓ हे संयम नियम मोठ्या प्रोजेक्टमध्ये अधिक उपयोगी ठरतात; सुरुवातीपासून सवय लावल्यास पुढे खूप वेळ वाचतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ दोन घटकांना समान id देणं चुकीचं — ब्राउझरला गोंधळ होतो.\n✗ दोन-तीन ओळींपुढे जाणारे नियम वाचणे कठीण होते — combine कमी आणि class जास्त वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. tag selector", content: "Tag selector ही सर्वांत सोपी निवड — घटकाच्या नावावरच शैली. p, h1, a, div अशा HTML tags ला एकत्र नियम लिहितात.\nउदा. p { color: #333; } म्हणजे पेजवरचे सर्व paragraph मजकूर गडद राखाडी. एक ओळ लिहिली आणि अनेक घटक रंगले.\nहे सुरुवातीच्या बेस शैलीसाठी उत्तम: body चा font, सर्व headings चा रंग. मोठ्या गटाची एकाच वेळी शैली वेळ वाचवते.\nमर्यादाही आहे — tag ने प्रत्येक घटकाला वेगळी शैली देता येत नाही. म्हणून सगळ्यांना एकत्र नको तिथे class किंवा id वापरावा.", code: `p { color: #333; }`, codeLanguage: "css" },
      { title: "2. class selector", content: "जेव्हा घटकांच्या गटाला वेगळी शैली हवी, तेव्हा class वापरतात. HTML मध्ये घटकाला class=\"warning\" असं नाव देतात आणि CSS मध्ये बिंदूसह लिहितात: .warning.\nएकच class अनेक घटकांना लावता येतो — सर्व warning संदेश, सर्व कार्ड, सर्व बटणे. त्यामुळे एकच नियम अनेक ठिकाणी लागू होतो.\nCSS मधील बिंदू (.) चिन्हाचा अर्थ 'हे नाव एक class आहे'. उदा. .grid-आधार { display: grid; } — हा class ग्रिडची मांडणी देईल.\nआधुनिक CSS मध्ये class ही सर्वांत वापरलेली निवड. ती tag पेक्षा जास्त वजनाची असते आणि नाव अर्थपूर्ण असेल तर कोड वाचतो सहज.", code: `.grid-आधार {
  display: grid;
}`, codeLanguage: "css" },
      { title: "3. id selector", content: "Id ही एका घटकाची अद्वितीय ओळख — पेजमध्ये एकाच ठिकाणी एकच id वापरता येतो. दोन घटकांना समान id देणं चुकीचं — ब्राउझरला गोंधळ होतो.\nCSS मध्ये id hash (#) चिन्हाने दर्शवतात: #मुख्य { padding: 1rem; }. पेजवर id=\"मुख्य\" असा एकच घटक असेल.\nId चं वजन class पेक्षा जास्त — त्याचा नियम विरोधी नियमांतही जिंकतो. म्हणून शैली नक्की असेल अशा ठिकाणी id उपयुक्त.\nपण सरावात शैलीसाठी id कमी वापरतात; JavaScript ला घटक शोधण्यासाठी id अधिक सोयीची असते. शैलीसाठी classच पर्याय राहू द्या.", code: `#मुख्य {
  padding: 1rem;
}`, codeLanguage: "css" },
      { title: "4. combine selector", content: "Selectors एकत्र जोडून शैली अचूक करता येते. उदा. header h1 म्हणजे header च्या आतला h1 — फक्त space लिहिलं की ब्राउझरला समजतं: हा नियम आतमधल्या घटकासाठी आहे.\nSpace म्हणजे descendant — कोणत्याही खोलीचा मुल; > हे चिन्ह थेट child दर्शवतं. अशा रचनेने HTML चा वृक्षाबंध (DOM) शैलीत प्रतिबिंबित होतो.\nउदा. header h1 { color: maroon; } — फक्त header मधील शीर्षक तांबडं; बाकी ठिकाणचे h1 तसेच राहतात.\nगोंधळ टाळण्यासाठी खूप खोल व नियम लिहू नका. दोन-तीन ओळींपुढे जाणारे नियम वाचणे कठीण होते — combine कमी आणि class जास्त वापरा.", code: `header h1 { color: maroon; }`, codeLanguage: "css" },
      { title: "5. वजन वापर", content: "प्रत्येक निवडीचं वजन ठरलं तर विरोधी नियमांत कोण जिंकतो हे नेहमी समजतं. वजनाचा क्रम असा: tag कमी, class मध्यम, id जास्त.\nएखादा नियम कितीही नंतर लिहिला, तरी जास्त वजन असलेला पहिलाच लागू होतो. उदा. p { color: red; } आणि .card { color: blue; } दोन्ही मिळाले, तर .card असलेले घटक निळे जिंकतील.\nविकासात हे वजन ध्यानात ठेवलं की 'माझी शैली का लागली नाही' हे प्रश्न कमी होतात. लहान प्रोजेक्टमध्ये त्रास नाही, पण मोठ्या फाइलमध्ये वजन नियंत्रण हवं.\nसाधा नियम: शैली सर्वत्र class ने द्या; id फक्त अपवादासाठी. असं केलं की वजनाचा गोंधळ टळतो आणि कोड सुरळीत चालतो.", code: `.card { border: 1px solid #ddd; }`, codeLanguage: "css" },
      { title: "6. सवय आणि नावे", content: "CSS मध्ये नावे अर्थपूर्ण असावीत — .button, .warning, .grid-आधार सारखी नावे कोड स्वयं-वर्णन करतात. कोणताही माणूस फाइल वाचताना समजेल शैली कशासाठी आहे.\nनाव मोठ्या कॅप्समध्ये (जसे BUTTON) लिहू नका; lowercase आणि dash सर्वत्र स्वीकारले जाते. एकाच शैलीने नावे ठेवा — काही ठिकाणी शब्द जोडताना dash चा वापर करा.\nनाव बदलले की जिथे वापरले तिथे सर्वत्र बदलावे लागते; म्हणून नावे अचूक, लहान आणि स्पष्ट ठेवा. एकच नाव अनेक ठिकाणी असेल तर त्याचा अर्थ सारखाच राहू द्या.\nहे संयम नियम मोठ्या प्रोजेक्टमध्ये अधिक उपयोगी ठरतात; सुरुवातीपासून सवय लावल्यास पुढे खूप वेळ वाचतो.", code: `.button {
  cursor: pointer;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता तिन्ही निवडी एकत्र आणून एक नमुना पेज बनवूया. वरच्या भागात tag selector ने शैली द्या — उदा. सर्व paragraph गडद राखाडी.\nमग एका class ने एका गटाला वेगळी शैली द्या, उदा. .warning संदेश darkred. आणि एक id — #टीप ने background द्या.\nनंतर space combine करून header च्या आतला h1 निवडा आणि त्याची शैली वेगळी करा. शेवटी कोणत्या निवडीचं वजन जास्त ते नजरेस पडेल.\nतिन्ही प्रकार एकत्र वापरल्यावर शैली किती ताकदीची होते हे पटतं. पुढील धडा box model हेच पाऊल पुढे नेतो — प्रत्येक घटकचा एक खोका दिसेल.", code: `.warning { color: darkred; }
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
      {
        title: "Box Model — प्रत्येक घटक खोका म्हणजे काय?",
        content: "margin, border, padding आणि content — घटकाचे अंतर नियम.\nCSS मध्ये प्रत्येक घटक एक खोका (box) — त्याच्या चार थरांचा विचार करावा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Box Model — प्रत्येक घटक खोका चे फायदे आणि महत्त्व",
        content: "✓ सुरुवातीसाठी content समजणं गरजेचं — कारण padding, border आणि margin सर्व त्याच्या सभोवतीच जुळतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ लिहिताना तीन गुण लक्षात ठेवा: जाडी, शैली आणि रंग.\n✗ content-box मध्ये width फक्त content ची असते; त्यात padding आणि border जोडल्यावर घटकच मोठा होतो — दिलेला width चुकतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. खोका कल्पना", content: "CSS मध्ये प्रत्येक घटक एक खोका (box) — त्याच्या चार थरांचा विचार करावा. आत content, त्यानंतर padding, नंतर border आणि सर्वांत बाहेर margin.\nContent मध्ये मजकूर किंवा चित्र असते; padding content आणि border मधील अंतर; border घटकाची किनारी; आणि margin दोन घटकांमधील अंतर.\nउदा. div { padding: 8px; border: 1px solid; } म्हणजे मजकुराच्या सभोवती थोडी जागा आणि बाहेर एक बारीक किनारी.\nप्रत्येक घटक — मग तो शब्द असो, button असो किंवा संपूर्ण layout — असाच खोका बनतो. खोक्याची ही कल्पना CSS layout चा गाभा आहे.", code: `div {
  padding: 8px;
  border: 1px solid;
}`, codeLanguage: "css" },
      { title: "2. content भाग", content: "खोक्याच्या मध्यभागी content असतो — मजकूर, चित्र किंवा इतर घटक. त्याचा आकार width आणि height ने ठरवता येतो.\nइतर थर content भोवती गुंडाळले जातात; content मोठा झाला (उदा. लांब मजकूर) की खोका आपोआप तेवढा वाढतो.\nContent ला वेगळी पार्श्वभूमी द्यायला p { background: #eee; } सारखा नियम — मग मजकूर कुठे संपतो हे स्पष्ट दिसतं.\nसुरुवातीसाठी content समजणं गरजेचं — कारण padding, border आणि margin सर्व त्याच्या सभोवतीच जुळतात. पाया नीट असेल तर पुढील थरही नीट बसतात.", code: `p { background: #eee; }`, codeLanguage: "css" },
      { title: "3. padding अंतर", content: "Padding म्हणजे content आणि border मधील आतील अंतर. ते घटकाला 'श्वास घेण्याची जागा' देते — मजकूर किनारीला चिकटत नाही.\nउदा. .card { padding: 1rem; } म्हणजे सर्व चार बाजूंना 1rem जागा. फक्त वर-खाली हवं असेल तर padding: 1rem 0; अशी दोन मूल्ये द्या.\nकिंवा padding-top, padding-right, padding-left, padding-bottom असे प्रत्येक बाजूला स्वतंत्र नियंत्रण.\nPadding वाढवलं की घटकाची विशालता वाढते (border-box शिवाय). त्यामुळे आकार नेमका हवा असेल तर box-sizing ध्यानात ठेवा — पुढे तो নিয়म शिकू.", code: `.card { padding: 1rem; }`, codeLanguage: "css" },
      { title: "4. border किनारी", content: "Border म्हणजे घटकाची बाह्य किनारी — ती मजकुराला एक स्वच्छ सीमा देते. लिहिताना तीन गुण लक्षात ठेवा: जाडी, शैली आणि रंग.\nउदा. border: 2px solid navy; — 2px जाडी, solid शैली, navy रंग. शैलीचे पर्याय: solid, dashed, dotted, double वगैरे.\nसगळी बाजू एकत्र नको असतील तर border-top, border-left असे वेगळे सांगता येतात; रंग आणि जाडीही प्रत्येक बाजूला वेगळी.\nकिनारी घटकाला वेगळं रूप देते आणि डिझाइनला आकार. खूप जाड किनारी layout वाढवते; म्हणून बारीक आणि सुसंगत रंग निवडा.", code: `.box { border: 2px solid navy; }`, codeLanguage: "css" },
      { title: "5. margin बाहेर", content: "Margin म्हणजे घटकाच्या बाहेरील जागा — दोन घटकांमधील अंतर तेच ठरवते. आतील अंतर padding, बाहेरील अंतर margin.\nउदा. .item { margin: 4px; } म्हणजे प्रत्येक बाजूला 4px अंतर. दोन item ला margin दिलं तर त्यांच्यामधील अंतर मिळून अधिक दिसते.\nखास नियम: दोन margin एकत्र आल्यावर मोठा जिंकतो — हे collapse होणं सर्वांत सामान्य. दोन परिच्छेदांमधील अंतर मोठ्या margin इतकेच ठरते.\nMargin कमी-जास्त करून घटक दूर-जवळ आणता येतात. आतून जागा (padding) आणि बाहेरून जागा (margin) — दोन्ही वेगळे ठेवले की layout नियंत्रण सोपं जातं.", code: `.item { margin: 4px; }`, codeLanguage: "css" },
      { title: "6. box-sizing", content: "box-sizing हा गुणधर्म घटकाच्या आकाराचा नियम बदलतो. खोक्याचे दोन मोड आहेत: content-box आणि border-box.\ncontent-box मध्ये width फक्त content ची असते; त्यात padding आणि border जोडल्यावर घटकच मोठा होतो — दिलेला width चुकतो.\nborder-box मध्ये width मध्ये padding आणि border सामावले जातात. म्हणजे जितका आकार सांगितला, तितकाच खोका राहतो — अंदाज नेमका.\nसाधी रीत: सुरुवातीलाच सर्व घटकांना box-sizing: border-box लावा. मग आकार लावणं अनेक पटींनी सोपं होतं आणि layout ढळत नाही.", code: `* {
  box-sizing: border-box;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता खोक्याचे सर्व थर एका छोट्या प्रोजेक्टमध्ये दाखवूयात. तीन कार्ड घ्या आणि प्रत्येकाला padding, border आणि margin द्या.\n.card ची padding 1rem ठेवा — मजकूर किनारीपासून दूर; border 1px solid #ccc ने बारीक किनारी; आणि margin 1rem ने कार्डांमधील अंतर.\nमग * { box-sizing: border-box; } जोडून आकार बदलाचा फरक निरीक्षण करा — कार्डांची रुंदी समान राहील.\nहा सराव संपला की margin, padding, border यांचा हात लागतो आणि पुढील रंग-पार्श्वभूमी धड्याला तयारी होते.", code: `.card {
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
      {
        title: "रंग आणि पार्श्वभूमी म्हणजे काय?",
        content: "रंग मूल्ये, alpha व्यवस्था आणि background shailee.\nरंग वेबपेजला जीव देतात — ते भावना देतात आणि माहिती वेगळी करतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? रंग आणि पार्श्वभूमी चे फायदे आणि महत्त्व",
        content: "✓ हे उपयोगी ठरतं: मजकुराच्या मागे हलकी पार्श्वभूमी, छाया, ओव्हरले.\n✓ रंग आणि पार्श्वभूमीचा ताळमेळ महत्त्वाचा; येथेच contrast ची भूमिका येते.\n✓ उपयोग: hero विभागाची पार्श्वभूमी, बटणाची शैली, भागाची ओळख.\n✓ रंग निवडताना वाचनीयता सर्वांत महत्त्वाची — मजकूर आणि पार्श्वभूमी यांच्यात पुरेसा contrast हवा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सुरुवात हलक्या, जवळच्या रंगांपासून करा; अति भिन्न रंगांनी झगझगाट होऊन वाचनीयता बिघडते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. रंग कल्पना", content: "रंग वेबपेजला जीव देतात — ते भावना देतात आणि माहिती वेगळी करतात. CSS मध्ये रंग तीन मुख्य प्रकारांनी सांगता येतात: नाव, हेक्स कोड आणि rgb/rgba.\nसोपा प्रकार म्हणजे नाव: red, blue, teal, navy, white — ब्राउझरला हजारो नावे माहीत असतात. सुरुवातीसाठी हा सर्वांत सोपा.\nकोणत्या घटकाच्या मजकुराचा रंग लाल हवा असेल तर h1 { color: red; } असा लिहितात — color गुणधर्म मजकूराचा रंग ठरवतो.\nडिझाइनमध्ये रंग सातत्य राखा; प्रत्येक ठिकाणी वेगळा रंग लावला तर पेज अव्यवस्थित दिसते. रंगांची एक टीम एकत्र ठेवा.", code: `h1 { color: red; }`, codeLanguage: "css" },
      { title: "2. हेक्स मूल्य", content: "हेक्स (hexadecimal) रंग हा सर्वांत अचूक रंग देण्याचा मार्ग — सहा अंकांनी नेमका रंग मिळतो. रचना: #, मग 6 अंक किंवा अक्षरे.\nपहिले दोन लाल (red), मधले दोन हिरवे (green), शेवटचे दोन निळे (blue). प्रत्येक भाग 00 ते FF या दरम्यान — #000000 म्हणजे काळा, #ffffff म्हणजे पांढरा.\nउदा. .रंग { color: #a11; } म्हणजे लालवार गडद रंग. तीन-अक्षरांची लघु आवृत्तीही चालते — #a11 हे #aa1111 सारखेच.\nहेक्स रंग color picker मधून कॉपी करून वापरणं सोपं; स्वतः तयार करताना प्रयोग करून निवडा. नेमक्या रंगासाठी हेक्स उत्तम साधन आहे.", code: `.रंग { color: #a11; }`, codeLanguage: "css" },
      { title: "3. alpha गुण", content: "alpha म्हणजे रंगाची पारदर्शकता — रंग किती ठळक किंवा फिकट. rgba() मध्ये चौथा गुण म्हणजेच alpha.\nमूल्य 0 ते 1 दरम्यान: 0 पूर्ण अदृश्य, 1 पूर्ण घन, मधले अंश अर्धपारदर्शक. उदा. rgba(0, 0, 0, 0.4) — काळ्या रंगाची 40% छाया.\nहे उपयोगी ठरतं: मजकुराच्या मागे हलकी पार्श्वभूमी, छाया, ओव्हरले. घटकावर थर जोडणे सहज होते.\nopacity गुणधर्मही आहे पण तो संपूर्ण घटक (मजकूरासह) पारदर्शक करतो; alpha फक्त पार्श्वभूमी पारदर्शक ठेवतो, मजकूर तसाच राहतो.", code: `.bg { background: rgba(0, 0, 0, 0.4); }`, codeLanguage: "css" },
      { title: "4. background गुणधर्म", content: "पार्श्वभूमी (background) हा घटकाचा आतला स्तर — रंग, चित्र किंवा gradient तेथे असतो. background-color ने एक रंग, background-image ने चित्र.\nउदा. body { background: #f5f5f5; } — संपूर्ण पेज हलके राखाडी. हा नरम रंग वाचनीयता सुधारतो आणि मजकूर स्पष्ट दिसतो.\nbackground हे संक्षिप्त रूप वापरून सर्व गुण एकाच ओळीत लिहिता येतात: background: #fff url(bg.png) no-repeat center;\nपार्श्वभूमी ही मागे राहणारी थर असते — त्यावरचा मजकूर आधी वाचता आला पाहिजे. रंग आणि पार्श्वभूमीचा ताळमेळ महत्त्वाचा; येथेच contrast ची भूमिका येते.", code: `body {
  background: #f5f5f5;
}`, codeLanguage: "css" },
      { title: "5. gradient दिशा", content: "gradient म्हणजे दोन रंगांचे हळुवार एकत्र होणारे संक्रमण — एका टोकाला एक रंग, दुसऱ्या टोकाला दुसरा. ती रचना सतत मिसळत असल्याने 'जिवंत' दिसते.\nlinear-gradient(direction, color1, color2) — दिशेत 45deg म्हणजे कोनीय, to right क्षैतिज, to bottom उभा. उदा. linear-gradient(45deg, pink, white).\nउपयोग: hero विभागाची पार्श्वभूमी, बटणाची शैली, भागाची ओळख. gradient ने एका घटकात अनेक रंग साठवता येतात.\nसुरुवात हलक्या, जवळच्या रंगांपासून करा; अति भिन्न रंगांनी झगझगाट होऊन वाचनीयता बिघडते. gradient सुंदर, पण वापर संयमाने करा.", code: `.hero {
  background: linear-gradient(45deg, pink, white);
}`, codeLanguage: "css" },
      { title: "6. तुलना नियम", content: "रंग निवडताना वाचनीयता सर्वांत महत्त्वाची — मजकूर आणि पार्श्वभूमी यांच्यात पुरेसा contrast हवा. गडद पार्श्वभूमीवर फिकट मजकूर, किंवा फिकटवर गडद.\nउदा. body { color: #222; } गडद राखाडी मजकूर आणि पांढरी पार्श्वभूमी — सर्वात सुरक्षित जोडी. .badge मध्ये पांढरा मजकूर, navy पार्श्वभूमीही चालते.\nफक्त रंगाच्या फरकावर विसंबून राहू नका: लाल-हिरवा फरक काहींना रंगांधळेपणामुळे दिसत नाही. मजकुराला वजन किंवा सूचक खूणही द्या.\nमराठी मजकुरासाठीही हे नियम लागू — अक्षरांचा आकार आणि राग दोन्ही मिळून निवडा, म्हणजे वाचनीयता निश्चित होते.", code: `body { color: #222; }
.badge { color: white; background: navy; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता रंगांचा नमुना पेज बनवा — तिन्ही रंग प्रकार वापरा. पहिल्या भागात नावाने रंग (उदा. .मुख्य), दुसऱ्या भागात हेक्स.\nआणि एका टीप block मध्ये rgba(255, 0, 0, 0.1) ने हलकी लाल पार्श्वभूमी वापरा. शेवटी एका hero ला linear-gradient द्या.\nपार्श्वभूमीचे रंग हलके ठेवा, जेणेकरून मजकूर स्पष्ट वाचू शकेल. रंग प्रत्येक ठिकाणी नावासह लिहा — कोणता गुणधर्म कुठे वापरला ते लक्षात येईल.\nहा सराव झाला की पुढील धडा (टायपोग्राफी) मजकुराच्या आकार-रूपावर लक्ष केंद्रित करेल. चांगली रंगनिवड मजकूर अधिक सुंदर दिसण्यास मदत करते.", code: `.मुख्य {
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
      {
        title: "टायपोग्राफी — मजकूर व्यवस्था म्हणजे काय?",
        content: "font families, आकार, line-height, weight आणि वाचनीयता.\nटायपोग्राफी म्हणजे मजकुराची दृश्य रचना — आकार, वजन, ओळींचे अंतर, अक्षरघर.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? टायपोग्राफी — मजकूर व्यवस्था चे फायदे आणि महत्त्व",
        content: "✓ एककांत rem सर्वांत महत्त्वाचे — ते रूट (html) च्या आकारावर अवलंबून असते.\n✓ font-style: italic ने तिरपे रूप मिळते; हे 'टीप', 'पर्याय' किंवा नावांमध्ये सोयीचे.\n✓ line-height संख्येत (जसे 1.6) लिहितात तेव्हा ते font-size च्या गुणक उपयोगी — p { font-size: 16px; } असेल तर 1.6 × 16 ≈ 26px अंतर.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. मजकूर भाषा", content: "टायपोग्राफी म्हणजे मजकुराची दृश्य रचना — आकार, वजन, ओळींचे अंतर, अक्षरघर. वेबपेजवर मजकूर हा मुख्य भाग असतो; त्याचं रूप ठरवतं की पेज किती वाचनीय आहे.\nउदा. body { font-family: sans-serif; } — संपूर्ण पेजला एक समान अक्षरघर. sans-serif म्हणजे टोके नसलेली अक्षरे, स्क्रीनवर वाचण्यास आरामदायी.\nखराब टायपोग्राफी — अति लहान अक्षरे, चिकटलेल्या ओळी — वाचकाला पटकन थकवते. चांगली रचना वाचायला प्रवृत्त करते.\nमराठी मजकुरासाठी अक्षरघर निवडताना देवनागरी समर्थन तपासा; अनेक लोकप्रिय अक्षरे देवनागरी छान दाखवतात. इथूनच मजकूर व्यवस्थेला सुरुवात होते.", code: `body { font-family: sans-serif; }`, codeLanguage: "css" },
      { title: "2. font family", content: "font-family मध्ये इच्छित नावे एका यादीत लिहितात; ब्राउझर पहिली उपलब्ध नाव शोधतो. होतांना सर्वांत प्रिय नाव आधी येतं.\nउदा. font-family: Verdana, Arial, sans-serif; — जर पहिला Verdana मिळाला तर तो; नाही तर Arial; नाही तर कोणताही sans-serif.\nशेवटी generic नाव (sans-serif, serif, monospace) नेहमी ठेवा — म्हणजे ब्राउझर त्या घराला योग्य अक्षरघर निवडेल; कोणताही अक्षरघर गहाळ होणार नाही.\nही यादी प्रत्येक पेजला body वर एकदाच ठरवा. नंतर शीर्षकांना वेगळे अक्षरघर घेता येतं; बदल सोपा आणि स्वच्छ राहतो.", code: `p { font-family: Verdana, Arial, sans-serif; }`, codeLanguage: "css" },
      { title: "3. आकार नियम", content: "font-size ने अक्षरांचा आकार ठरतो. एककांत rem सर्वांत महत्त्वाचे — ते रूट (html) च्या आकारावर अवलंबून असते.\nउदा. html { font-size: 16px; } असेल तर h1 { font-size: 2rem; } म्हणजे 32px आणि p { font-size: 1rem; } 16px. एकाच ठिकाणी आधार बदलला की सर्व आकार आपोआप बदलतात.\nमोठा मजकूर शीर्षकांसाठी, 1rem सामान्य मजकुरासाठी, लहान टीपांसाठी — तीन-चार स्तरांपेक्षा जास्त वैविध्य नको.\npx हा निश्चित आकार आहे; rem लवचिक. प्रवेश्यता आणि responsive साठी rem अधिक चांगला; px फक्त अगदी ठरलेल्या ठिकाणी वापरा.", code: `h1 { font-size: 2rem; }
p { font-size: 1rem; }`, codeLanguage: "css" },
      { title: "4. वजन आणि शैली", content: "font-weight म्हणजे अक्षराचा जाडपणा — normal, bold किंवा 100 ते 900 पर्यंत numeric. शीर्षक ठळक, टीप सरळ — हेच भेद वाचकाला मार्ग दाखवतात.\nfont-style: italic ने तिरपे रूप मिळते; हे 'टीप', 'पर्याय' किंवा नावांमध्ये सोयीचे. underline ने देखील emphasise करता येतं.\nउदा. .title { font-weight: bold; } शीर्षकाला जाड आणि .टीप { font-style: italic; } टीप तिरपी. वजनाच्या फरकाने पेजची श्रेणीविभागणी स्वतःच दिसते.\nपण सर्वत्र bold करू नका — जास्त ठळक अक्षरे वाचायला थकवणारी ठरतात; ज्या शब्दावर लक्ष हवं तोच ठळक करा.", code: `.title { font-weight: bold; }
.टीप { font-style: italic; }`, codeLanguage: "css" },
      { title: "5. ओळ अंतर", content: "line-height म्हणजे दोन ओळींमधील उभे अंतर. योग्य अंतराशिवाय परिच्छेद थकवतात; 1.5 ते 1.6 हे सर्वांत वाचनीय अंतर मानले जाते.\nline-height संख्येत (जसे 1.6) लिहितात तेव्हा ते font-size च्या गुणक उपयोगी — p { font-size: 16px; } असेल तर 1.6 × 16 ≈ 26px अंतर.\nशीर्षकांसाठी अंतर कमी चालते — मोठी अक्षरे, घट्ट ओळी; मजकुरासाठी जास्त अंतर ठेवा.\nही सवय लागली की पेज उघडताच 'मोकळं, स्पष्ट' वाटतं. ओळ अंतर किमान 1.5 ठेवणं ही आधार रीत.", code: `p { line-height: 1.6; }`, codeLanguage: "css" },
      { title: "6. text align", content: "text-align मजकूर कोणत्या बाजूला बसेल हे ठरवतो. पर्याय: left (डावीकडे), right (उजवीकडे), center (मध्ये), justify (दोन्ही बाजूंनी सारखे).\nउदा. h1 { text-align: center; } — शीर्षक मध्यभागी; हे एका शीर्षकात छान दिसतं. देवनागरी पेजात साधारणपणे डावीकडून सुरुवात होते.\nमोठ्या paragraph justify करू नका — दोन्ही बाजूंनी ताणून अक्षरांमध्ये विषम अंतर तयार होते आणि वाचनीयता बिघडते.\ntext-align चा वापर लहान भागांपुरता ठेवा; संपूर्ण पेज एका संतुलित शैलीने रचा.", code: `h1 { text-align: center; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता टायपोग्राफीचा छोटा प्रोजेक्ट: एक शीर्षक, दोन परिच्छेद आणि एक टीप. body वर font-family: sans-serif आणि line-height: 1.6 द्या.\nh1 center आणि bold ठेवा; मजकूर 1rem आकाराचा. एक word italic आणि एक टीप class वेगळी शैली दाखवेल.\nमग rem ने शीर्षकाचा आकार बदलून पाहा — बदल एका ठिकाणी केला की संपूर्ण पेजवर आपोआप दिसतो.\nआता मजकूर सुंदर वाचला गेला की पुढील धड्यात layout (flex) सोबत तोच मजकूर पेजवर नीट बसवता येईल.", code: `body { font-family: sans-serif; line-height: 1.6; }
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
      {
        title: "Flex — लवचिक मांडणी म्हणजे काय?",
        content: "flex container, main-cross axes, justify-content आणि align.\nflex ही एक-आयामी मांडणी तंत्रज्ञान — घटक एकाच दिशेने सरळ रचते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Flex — लवचिक मांडणी चे फायदे आणि महत्त्व",
        content: "✓ आपोआपच वर्तन: गरज भासल्यास घटक ताणले जातात, अपुरी जागा असल्यास आकुंचन पावतात — हेच 'flex' — लवचिकता.\n✓ flex मध्ये दोन अक्ष महत्त्वाचे: main axis आणि cross axis.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ 'गटांमध्ये अंतर हवं तर space-between' हा पटकन लक्षात ठेवावा; प्रत्येक घटकाभोवती समान जागा हवी असेल तर space-evenly.\n✗ flex वापरताना काही सोपे नियम लक्षात ठेवा — छोट्या गटांसाठी flex उत्तम.\n✗ 'सर्वत्र flex' ही सवय टाळा — तंत्र योग्य ठिकाणी निवडा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. flex कल्पना", content: "flex ही एक-आयामी मांडणी तंत्रज्ञान — घटक एकाच दिशेने सरळ रचते. मात्र 'flexible layout' त्याचा मूळ अर्थ.\nContainer वर display: flex लिहिलं की आतले घटक एका रांगेत (default row) आपोआप बसतात; उपलब्ध जागा मिळून रांग भरते.\nआपोआपच वर्तन: गरज भासल्यास घटक ताणले जातात, अपुरी जागा असल्यास आकुंचन पावतात — हेच 'flex' — लवचिकता.\nहे मोबाइलच्या लहान पडद्यावर आणि डेस्कटॉपच्या मोठ्या पडद्यावरही सुसंगत मांडणी देते — आजच्या वेबची ताकद येथेच आहे.", code: `.app { display: flex; }`, codeLanguage: "css" },
      { title: "2. main axis", content: "flex मध्ये दोन अक्ष महत्त्वाचे: main axis आणि cross axis. दिशा flex-direction ठरवते — row (क्षैतिज) उजवीकडे, column (उभी) खाली.\nDefault क्षैतिज असतो; column देऊन उभी रांग बनते. रुंदी ही मुख्य दिशेचे मापन row मध्ये, उंची column मध्ये.\nउदा. .row { display: flex; flex-direction: row; } मेनूसाठी उत्तम; .column स्टॅक सारख्या गोष्टींसाठी.\nदिशा समजली तर justify (main वरील) आणि align (cross वरील) नियंत्रण सोपे होते. प्रत्येक घटक त्याच्या दिशेनेच बसतो.", code: `.row { display: flex; }
.column { display: flex; flex-direction: column; }`, codeLanguage: "css" },
      { title: "3. justify-content", content: "justify-content हे main axis वरील स्थिती रेखाटते — घटक रांगेत कुठे उभे राहतील हे ठरवते. पर्याय: flex-start (आधी), center (मध्ये), flex-end (शेवट).\nविशेष मूल्ये: space-between गटांमधे समान अंतर; space-around प्रत्येकाभोवती अंतर; space-evenly सर्वत्र समान जागा.\nउदा. .menu { display: flex; justify-content: space-between; } — लोगो डावीकडे, menu उजवीकडे — छान मेनू तयार होतो.\n'गटांमध्ये अंतर हवं तर space-between' हा पटकन लक्षात ठेवावा; प्रत्येक घटकाभोवती समान जागा हवी असेल तर space-evenly.", code: `.menu { display: flex; justify-content: space-between; }`, codeLanguage: "css" },
      { title: "4. align-items", content: "align-items हे cross axis वरील संरेखन करतं — जेव्हा flex-direction row असेल तर वर/मध्य/खाली अशी उभी स्थिती. पर्याय: flex-start, center, flex-end, stretch, baseline.\nstretch हा default — घटक cross दिशेने उपलब्ध जागेपर्यंत ताणला जातो. .bar { display: flex; align-items: center; } मध्ये सर्व घटक उभ्या मध्यभागी बसतात.\nउदा. toolbar मध्ये आयकॉन आणि मजकूर center केल्यास सुबक राहते; stretch ने कार्डे समान उंचीची होतात.\nalign-items ला justify-content सोबतच पाहा — एक main अक्ष, एक cross अक्ष; दोन्ही मिळाले की flex पूर्णपणे कळतो.", code: `.bar { display: flex; align-items: center; }`, codeLanguage: "css" },
      { title: "5. gap आणि wrap", content: "gap म्हणजे घटकांमधील निश्चित अंतर; flex मध्ये आधी margin वापरावा लागत होता, पण gap स्वच्छ आणि एकाच ठिकाणी. उदा. .list { display: flex; flex-wrap: wrap; gap: 8px; }.\nflex-wrap ही पुढची सोय: default nowrap मध्ये घटक एकच ओळ ओलांडून पुढे जात नाहीत; wrap दिलं की पुढील ओळीत नेले जातात.\nमोबाइलवर अनेक menu item एका ओळीत बसत नाहीत; wrap ने ते आपोआप पुढील ओळीत व्यवस्थित बसतात.\nआधुनिक मांडणीत gap वेगळी जागा घेते; margin आणि padding गोंधळ कमी होतो आणि layout नियंत्रण सोपे राहते.", code: `.list { display: flex; flex-wrap: wrap; gap: 8px; }`, codeLanguage: "css" },
      { title: "6. सराव नियम", content: "flex वापरताना काही सोपे नियम लक्षात ठेवा — छोट्या गटांसाठी flex उत्तम. उदा. मेनू, बटणांचा गट, स्टेटस बार, एका ओळीचे घटक.\nमोठ्या संपूर्ण-पेज layout साठी grid अधिक योग्य. 'सर्वत्र flex' ही सवय टाळा — तंत्र योग्य ठिकाणी निवडा.\nflex घटकांचे आकार flex-grow, flex-shrink, flex-basis ने नियंत्रित होतात — सुरुवातीला हे सर्व लागू नाही, फक्त प्रत्येक घटक किती जागा घेतो हे पहा.\nछोट्या भागांमधून flex सुसंगत ठेवा; योग्य वापर केल्यास पेज सुरळीत आणि वाचनीय होते.", code: `.status { display: flex; gap: 4px; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता flex चा नमुना तयार करा: एक nav bar. लोगो डावीकडे, दुवे उजवीकडे — justify-content: space-between वापरा.\nनंतर जास्त दुवे असल्यास wrap द्या; मोबाइलवर ते आपोआप पुढील ओळीत व्यवस्थित बसतील. align-items: center ने सर्व उभ्या मध्ये बसवा.\nएक स्टेटस बारही बनवा — तीन-चार टीप item, gap 4px ने स्वच्छ अंतर.\nहे सराव झाले की flex मांडणीचा हात लागतो; पुढे grid हेच दोन्ही आयामातील मोठी शक्ती देईल.", code: `.nav { display: flex; justify-content: space-between; flex-wrap: wrap; }`, codeLanguage: "css" },
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
      {
        title: "Grid — रो आणि स्तंभ म्हणजे काय?",
        content: "grid container, rows/columns, gap आणि areas व्यवस्था.\ngrid ही द्वि-आयामी मांडणी — rows आणि columns एकाच घोषणेमध्ये नियंत्रित होतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Grid — रो आणि स्तंभ चे फायदे आणि महत्त्व",
        content: "✓ लहान स्क्रीनवर स्तंभ आपोआप कमी होतात, मोठ्यावर जास्त — अतिरिक्त media query ची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. grid कल्पना", content: "grid ही द्वि-आयामी मांडणी — rows आणि columns एकाच घोषणेमध्ये नियंत्रित होतात. flex एक दिशा, grid दोन्ही दिशा एकत्र.\ndisplay: grid लिहिलं की आतले घटक columns मध्ये आपोआप बसतात. नंतर grid-template-columns ने स्तंभांची संख्या आणि रुंदी ठरवता येते.\nमोठ्या क्षेत्रांची रचना — आर्टिकल + sidebar, कार्डांची ग्रीड, dashboard — यासारखे अनेक भाग असलेले layout grid साठी योग्य.\nउदा. .app { display: grid; } ने सुरुवात; मग 2fr 1fr स्तंभ दिले की मुख्य 2 भाग, बाजूचा 1 भाग अशी स्पष्ट रचना मिळते.", code: `.app { display: grid; }`, codeLanguage: "css" },
      { title: "2. rows columns", content: "grid-template-columns स्तंभांची रुंदी ठरवतो; grid-template-rows ओळींची उंची. प्रत्येक मूल्य एका स्तंभाचा किंवा ओळीचा track असतो.\nएकके: px निश्चित, %/vw चांगले, पण फक्त fr सर्वांत लवचिक — fr म्हणजे fraction, उरलेली जागा वाटून घेणे. 1fr 1fr 1fr म्हणजे तीन समान स्तंभ.\nउदा. .main { display: grid; grid-template-columns: 1fr 1fr 1fr; } — मांडणी तीन समान भागात विभागते.\nfr वापरलं की मोठ्या स्क्रीनवर स्तंभ मोठे होतात आणि लहान स्क्रीनवर लहान — मांडणी 'responsive' आधीच बनते. fixed व fr मिसळूनही रचता येते.", code: `.main {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`, codeLanguage: "css" },
      { title: "3. gap जागा", content: "gap म्हणजे grid (आणि flex) मध्ये सर्व track मधील अंतर एकाच ठिकाणी. gap: 1rem लिहिलं की rows आणि columns दोन्हीमध्ये 1rem अंतर.\nस्वतंत्र हवं असेल तर row-gap आणि column-gap वेगळे द्या. पूर्वी margin जोडणी लागत होती; gap ने ती सोय संपली.\nउदा. .grid { display: grid; gap: 1rem; } — कार्डांमध्ये सुंदर अंतर; कोणतेही element चे margin स्वतंत्र लिहावे लागत नाही.\nmargin आणि gap एकाच ठिकाणी मिसळल्यास अंतर दुप्पट होते — म्हणून एकच पद्धत निवडा. gap ही आधुनिक, स्वच्छ रीत आहे.", code: `.grid {
  display: grid;
  gap: 1rem;
}`, codeLanguage: "css" },
      { title: "4. repeat नियम", content: "सगळे स्तंभ वारंवार लिहू नका — repeat() फंक्शन वापरा. repeat(3, 1fr) म्हणजे तीन समान स्तंभ.\nauto-fit म्हणजे उपलब्ध जागेत शक्य तितके स्तंभ ठरवा; minmax(180px, 1fr) म्हणजे प्रत्येक स्तंभ किमान 180px आणि पेक्षा मोठा जागेनुसार.\nहे एकत्र लिहिलं: grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); — 'जितकी जागा तितके स्तंभ'. हा responsive grid चा सर्वात उपयुक्त नमुना.\nलहान स्क्रीनवर स्तंभ आपोआप कमी होतात, मोठ्यावर जास्त — अतिरिक्त media query ची गरज नाही.", code: `.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}`, codeLanguage: "css" },
      { title: "5. areas रचना", content: "grid-area च्या साहाय्याने भागांना नावे द्यायला येतात आणि grid-template-areas मध्ये नकाशा रेखाटला जातो.\nउदा. header भागाला grid-area: header; main ला main; footer ला footer, नंतर grid-template-areas: \"header\" \"main\" \"footer\".\nनकाशा वाचणं सोपं — पेजची रचना कशी दिसेल तसे शब्द लिहितात. भाग नावे वापरून पुढे बदल करणंही सोपे होते.\nareas एका ओळीतही मिळतात: \"header header\" \"sidebar main\" \"footer footer\" — अनेक स्तंभांमध्ये भाग नकाशातूनच ठरवता येतात.", code: `.page {
  display: grid;
  grid-template-areas: "header" "main" "footer";
}`, codeLanguage: "css" },
      { title: "6. span आणि प्रवाह", content: "एक घटक अनेक स्तंभ किंवा ओळी ओलांडू शकतो — तो विस्तार grid-column: span 2; ने सांगता येतो.\nउदा. एखादे कार्ड दोन स्तंभ व्यापून मोठे दिसते; एखादा विषय विभाग संपूर्ण रुंदीवर पसरतो. grid-column: span 2 हे घटक दुहेरी जागा देते.\ngrid-column: 1 / 3; अशी विशिष्ट सीमा लिहूनही घटक नेमका कुठे बसतो ते ठरवता येते — कोणता track कुठे सुरू आणि समाप्त.\nspan मुळे 'पूर्ण रुंदीचा एक block' सारखे भाग सहज तयार होतात. उरलेली रचना आपोआप प्रवाहाने भरते.", code: `.wide {
  grid-column: span 2;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता grid चा संपूर्ण नमुना तयार करा. चार-पाच item घ्या आणि repeat(auto-fit, minmax(150px, 1fr)) स्तंभ द्या.\ngap: 1rem ने सुंदर अंतर ठेवा; .wide च्या एका item ला grid-column: span 2 द्या — तो दुहेरी रुंदीचा दिसेल.\nमोबाइल स्क्रीनवर स्तंभ आपोआप कमी होतात — media query न लिहिताही रचना स्वयं बदलते.\nहा नमुना दाखवतो की grid कमी लेखनीने शक्तिशाली मांडणी कशी देते. पुढील धड्यात स्थान (positioning) नियम शिकू.", code: `.pane {
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
      {
        title: "स्थान — घटक कुठे उभा म्हणजे काय?",
        content: "static, relative, absolute, fixed आणि z-index नियम.\nposition हा गुण घटकाच्या ठावघालीचे नियम बदलतो — तो घटक प्रवाहात (flow) राहतो की बाहेर, तो ठरवलेल्या ठिकाणी उभा राहतो की सदैव दिसतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? स्थान — घटक कुठे उभा चे फायदे आणि महत्त्व",
        content: "✓ उपयोग: लहान समायोजन, आयकॉनवर जोडणीसारखे घटक.\n✓ महत्त्वाचे: relative असलेला घटक absolute मुलासाठी 'संदर्भ' बनतो; अन्यथा तो मुलगा संपूर्ण पेजच्या संदर्भात बसतो.\n✓ उपयोग: modal, tooltip, बिल्ले आणि ओव्हरले — अशा गोष्टी ज्या नेमक्या ठिकाणी हव्यात.\n✓ उपयोग: स्थिर header, फ्लोटिंग बटण, घोषणा बार — सदैव दिसणारे घटक.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सर्वत्र उंची वाढवण्याऐवजी मोजकी मूल्ये (जसे 10, 100) आणि मर्यादित ठेवा; हजारो जास्त संख्या राखणे कठीण होते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. position कल्पना", content: "position हा गुण घटकाच्या ठावघालीचे नियम बदलतो — तो घटक प्रवाहात (flow) राहतो की बाहेर, तो ठरवलेल्या ठिकाणी उभा राहतो की सदैव दिसतो.\nमूल्ये: static (मूल), relative, absolute, fixed आणि sticky — प्रत्येकाचे वागणे वेगळे.\nstatic हा default — घटक HTML च्या क्रमाप्रमाणे सामान्य प्रवाहात असतो; त्यात कोणतेही विशेष विस्थापन लागू होत नाही.\nइतर मूल्ये समजली म्हणजे 'हे घटक नेमके कुठे उभे?' हे प्रश्न उरत नाहीत आणि अंदाज नेमका येतो. हाच धडा त्या मूल्यांसाठी आहे.", code: `.टीप { position: static; }`, codeLanguage: "css" },
      { title: "2. relative", content: "relative मूल्य घटकाला त्याच्या मूळ जागेपासून सरकवते — प्रवाह राखला जातो, पण top/right/bottom/left ने विस्थापन होते.\nउदा. .badge { position: relative; top: 2px; } — बिल्ला मूळ ठिकाणाहून 2px खाली सरकतो; सभोवतीचे घटक हलत नाहीत.\nउपयोग: लहान समायोजन, आयकॉनवर जोडणीसारखे घटक. position: absolute साठी हा पाया बनतो — relative पालक absolute मुलाचा आधार असतो.\nमहत्त्वाचे: relative असलेला घटक absolute मुलासाठी 'संदर्भ' बनतो; अन्यथा तो मुलगा संपूर्ण पेजच्या संदर्भात बसतो.", code: `.badge { position: relative; top: 2px; }`, codeLanguage: "css" },
      { title: "3. absolute", content: "absolute घटक प्रवाहातून वेगळा होतो — तो जवळच्या positioned (relative/absolute) पालकाच्या सापेक्ष बसतो. पालक नसेल तर पेज बेस बनतो.\nउदा. .कोपरा { position: absolute; top: 0; right: 0; } — संदर्भ घटकाच्या वरच्या उजव्या कोपऱ्यात अडकतो.\nउपयोग: modal, tooltip, बिल्ले आणि ओव्हरले — अशा गोष्टी ज्या नेमक्या ठिकाणी हव्यात.\nआधार योग्य नसला तर absolute घटक 'पेजवर' फिरतो; म्हणून पालकाला relative किंवा absolute देऊन सीमा निश्चित करा.", code: `.कोपरा {
  position: absolute;
  top: 0;
  right: 0;
}`, codeLanguage: "css" },
      { title: "4. fixed", content: "fixed घटकाची जागा viewport (दृश्य क्षेत्र) च्या सापेक्ष असते — पेज स्क्रोल केली तरी तो जागेवर राहतो.\nउदा. .topbar { position: fixed; top: 0; } — असा मेनू किंवा बार नेहमी वर दिसतो, कुठेही स्क्रोल करा तरी.\nउपयोग: स्थिर header, फ्लोटिंग बटण, घोषणा बार — सदैव दिसणारे घटक.\nपेजातील इतर घटकांकडे दुर्लक्ष करून fixed घटक viewport ला कवळतो; म्हणून एकाच ठिकाणी मोजका वापरा. मोबाइलवर एकच fixed आधार ठेवा.", code: `.topbar { position: fixed; top: 0; }`, codeLanguage: "css" },
      { title: "5. sticky", content: "sticky हा relative आणि fixed यांचा संगम — प्रवाहात राहतो, पण स्क्रोल करताना ठरलेल्या ठिकाणी 'चिकटतो'.\nउदा. .भाग { position: sticky; top: 0; } — भागातील घटक स्क्रीनच्या वर येईपर्यंत सरकत राहतो, नंतर तिथे चिकटतो आणि भाग संपताच सोडतो.\nउपयोग: विभाग शीर्षके, टेबल header, बाजूचा टीप मेनू — संदर्भ सोबत राहावा अशा ठिकाणी.\nsticky ला top/bottom मूल्य आवश्यक आणि तो फक्त पालकाच्या सीमेमध्येच राहतो. हे बंधन त्याला fixed पेक्षा अधिक नियंत्रित वागवते.", code: `.भाग { position: sticky; top: 0; }`, codeLanguage: "css" },
      { title: "6. z-index layer", content: "z-index म्हणजे घटकांची उंची क्रम (layer) — कोणता घटक पुढे दिसेल ते ठरवतो. मोठा z-index पुढे.\nउदा. .modal { position: absolute; z-index: 100; } — संवादासाठी modal इतर सर्व घटकांवर दिसतो. default auto/0 असतो.\nमहत्त्वाचे: z-index फक्त positioned घटकांवर (relative/absolute/fixed/sticky) आणि flex/grid मुलांवर लागू होतो.\nसर्वत्र उंची वाढवण्याऐवजी मोजकी मूल्ये (जसे 10, 100) आणि मर्यादित ठेवा; हजारो जास्त संख्या राखणे कठीण होते.", code: `.modal { position: absolute; z-index: 100; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता स्थान नियमांची झलक तयार करा — एक sticky bar (top: 0), एक badge (relative, top: 2px), एक fixed बटण.\nsticky विभाग शीर्षके प्रत्येक भागावर द्या — खाली स्क्रोल करता ती वर अडकतात. fixed बटण नेहमी उजवीकडे खाली दिसते.\nmodal किंवा कोपऱ्यात absolute घटक तयार करा आणि z-index ने त्याला वर आणा.\nहे नमुना दाखवतो की positioning संदर्भ + क्रम (z-index) एकत्र करून घटक कसे नेमके ठिकाणी उभे राहतात.", code: `.bar {
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
      {
        title: "प्रतिसादी रचना म्हणजे काय?",
        content: "viewport, media queries, mobile first आणि flexible आकार.\nviewport म्हणजे दृश्यमान क्षेत्र — ब्राउझरमध्ये पेज दिसत असलेला भाग.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? प्रतिसादी रचना चे फायदे आणि महत्त्व",
        content: "✓ लहान स्क्रीनचा कोड अधिक महत्त्वाचा.\n✓ त्यासाठी flexible आकार आवश्यक.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ पेजमधील आकार ठरवताना निरपेक्ष px वगैरे वापरल्यास लहान पडद्यावर अडचण येते.\n✗ मोबाइल वापरकर्ते बोटाने टॅप करतात; लहान target असल्यास चुकीचा दाब होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. viewport कल्पना", content: "viewport म्हणजे दृश्यमान क्षेत्र — ब्राउझरमध्ये पेज दिसत असलेला भाग. मोबाइलवर लहान, डेस्कटॉपवर मोठा.\nपेज CSS चे नियम viewport च्या रुंदीवर आधारित ठरतात; त्यामुळे सर्व घटक त्याच्या सापेक्ष आकार घेतात.\n<head> मध्ये <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> ही ओळ आवश्यक — मोबाइलवर पेज वास्तविक रुंदीने दिसते.\nही ओळ नसली तर मोबाइल पेज खूप लहान दिसते. प्रत्येक HTML पेजमध्ये ती असावी — हीच प्रतिसादी रचनेची प्रस्तावना.", code: `<meta name="viewport" content="width=device-width, initial-scale=1">`, codeLanguage: "css" },
      { title: "2. media query", content: "media query म्हणजे परिस्थितीनुसार शैली बदलण्याचे साधन — पडद्याच्या रुंदीवर आधारित. @media (max-width: 600px) { ... } ही अट आहे.\nmax-width म्हणजे '600px पेक्षा लहान असेल तर'; min-width म्हणजे '600px पेक्षा मोठे असेल तर'.\nउदा. मोबाइलवर grid एकच स्तंभ करण्यासाठी — @media (max-width: 600px) { .pane { grid-template-columns: 1fr; } }.\nपडद्याची रुंदी बदलताच ब्राउझर हे नियम पुन्हा लागू करतो. म्हणूनच हे responsive रचनेचे मुख्य साधन आहे.", code: `@media (max-width: 600px) {
  .pane { grid-template-columns: 1fr; }
}`, codeLanguage: "css" },
      { title: "3. mobile first", content: "mobile first म्हणजे आधी लहान पडद्याची शैली लिहा, नंतर मोठ्यासाठी सुधारणा करा. अशी शैली बेस सोपी ठेवते.\nउदा. बेसमध्ये grid-template-columns: 1fr (एक स्तंभ), मग @media (min-width: 700px) मध्ये 1fr 1fr दोन स्तंभ.\nही पद्धत प्रथम आधारभूत रचना तयार करते; मोठ्या स्क्रीनला अतिरिक्त विस्तार मिळतो. लहान स्क्रीनचा कोड अधिक महत्त्वाचा.\nउलट desktop-first मध्ये मोठ्या नंतर लहानसाठी खूप सुधारणा कराव्या लागतात. mobile first शैली स्वच्छ आणि सोपी राहते.", code: `.grid { display: grid; grid-template-columns: 1fr; }
@media (min-width: 700px) {
  .grid { grid-template-columns: 1fr 1fr; }
}`, codeLanguage: "css" },
      { title: "4. flexible आकार", content: "पेजमधील आकार ठरवताना निरपेक्ष px वगैरे वापरल्यास लहान पडद्यावर अडचण येते. त्यासाठी flexible आकार आवश्यक.\nचित्रांसाठी img { max-width: 100%; } — मोठी चित्रे पडद्याइतकी छोटी होतात, पण मूळ आकारापेक्षा दिसतात. हा एक नियम संपूर्ण पेजला मदत करतो.\nकंटेनरसाठी width: 100% ऐवजी max-width वापरा; fr आणि % अधिक लवचिक असतात.\nआकार लवचिक ठेवल्यास पडदा कितीही बदलला तरी पेज त्याला 'फिट' होते — बाहेर जात नाही, गोंधळ निर्माण होत नाही.", code: `img { max-width: 100%; }`, codeLanguage: "css" },
      { title: "5. rem आधार", content: "rem म्हणजे रूट (html) element च्या font-size च्या आधारे आकार. html { font-size: 16px; } असेल तर 1rem म्हणजे 16px.\nfont-size: 2rem म्हणजे 32px. वापरकर्त्याने ब्राउझरचा आधार मोठा केला (मोठे अक्षरे) तर सर्व rem आपोआप वाढतात — प्रवेश्यता सुधारते.\nशीर्षक, अंतर, padding सर्व rem मध्ये दिल्यास एका जागी आधार बदलून संपूर्ण घटक स्केल करता येतो.\nrelative आकार अधिक सुसंगत; px निश्चित ठेवतो पण लवचिकता नसते. rem ही आधुनिक सवय — responsive मांडणीची मदत.", code: `html { font-size: 16px; }
h1 { font-size: 2rem; }`, codeLanguage: "css" },
      { title: "6. टच नियम", content: "मोबाइल वापरकर्ते बोटाने टॅप करतात; लहान target असल्यास चुकीचा दाब होतो. त्यासाठी टच नियम पाळावे.\nApple आणि Google ची मान्यता: बटणे/दुवे किमान 44px उंच असावेत (min-height: 44px). असे केल्यास टॅप अचूक पडतो.\nटच भागांमध्ये पुरेसे अंतर ठेवा — 'हा की तो' असा गोंधळ नको. त्यासाठी gap आणि padding दोन्ही वापरा.\nhover मोबाइलवर उपलब्ध नसतं; म्हणून सर्व माहिती सामान्य दृश्यात ठेवा. लहान पडद्याच्या वापरकर्त्यासाठी ही रचना दयाळू असते.", code: `button { min-height: 44px; }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता एक प्रतिसादी पेज बनवूया. आधी लहान पडद्यासाठी: .row { display: grid; grid-template-columns: 1fr; gap: 1rem; }.\nमग @media (min-width: 700px) { .row { grid-template-columns: 1fr 1fr; } } — मोठ्या पडद्यावर दुहेरी स्तंभ.\nचित्रांना img { max-width: 100% } द्या आणि बटणांना min-height: 44px — टच आकार.\nही रचना मोबाइल, टॅबलेट आणि डेस्कटॉप तिन्हीवर व्यवस्थित बसेल. media query + flexible आकार — हेच या धड्याचे सार.", code: `.row { display: grid; grid-template-columns: 1fr; gap: 1rem; }
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
      {
        title: "Transfer आणि सजीव रचना म्हणजे काय?",
        content: "transition गुण, timing, animation आणि keyframes कल्पना.\ntransition म्हणजे स्थिती बदलताना गुळगुळीत संक्रमण.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Transfer आणि सजीव रचना चे फायदे आणि महत्त्व",
        content: "✓ हे नियम बदलाची गरज न ठेवता आपोआप चालतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. transition कल्पना", content: "transition म्हणजे स्थिती बदलताना गुळगुळीत संक्रमण. एका value पासून दुसऱ्या value कडे तात्काळ उडीऐवजी सरकत हालचाल होते.\nउदा. .btn { transition: background 0.3s; } — hover केल्यावर पार्श्वभूमी लगेच बदलण्याऐवजी 0.3 सेकंदात बदलते.\nअचानक बदल पेज 'जड' वाटतो; गुळगुळीत संक्रमण अनुभव जिवंत करते. छोटा transition आनंददायी अनुभव देतो.\ntransition गुणधर्म (all किंवा specific), कालावधी आणि timing ठरवता येते. सुरुवात मोजक्या वापराने करा — जास्त कालावधी गोंधळ निर्माण करतो.", code: `.btn { transition: background 0.3s; }`, codeLanguage: "css" },
      { title: "2. transition गुणधर्म", content: "transition चे चार भाग होतात: transition-property (कोणता गुणधर्म), duration (कालावधी), timing (गती), delay (थांबा).\nउदा. .item { transition: all 0.2s ease; } — सर्व गुणधर्म 0.2 सेकंदात ease गतीने. हे संक्षिप्त असे सर्व एकत्र.\nduration सेकंदांत (0.2s) किंवा मिलीसेकंदांत (200ms) लिहितात; 150 ते 300ms हा सामान्य, सुखद आधार.\ntransition ला अट: बदल झाला — hover, focus सारख्या स्थितीत गुणधर्म फरक पडतो तेव्हाच गुळगुळीत संक्रमण दिसते.", code: `.item { transition: all 0.2s ease; }`, codeLanguage: "css" },
      { title: "3. timing curve", content: "timing function म्हणजे गतीचा आकार — संक्रमण कशी वाढते/कमी होते. ease हे default — आरंभ सरळ, शेवट शांत.\nlinear म्हणजे सर्वत्र एकच गती; ease-in म्हणजे सुरुवातीस मंद, ease-out शेवटीस मंद, ease-in-out दोन्ही.\nउदा. .x { transition-timing-function: ease-out; } — गती सुरुवातीला वेगवान, शेवटी मंद — नैसर्गिक वाटते.\nनिवडीने भावना येते: ease चा दयाळू वापर, linear चा यांत्रिक. बहुतेक वेळा ease किंवा ease-out पुरेसे असते.", code: `.x { transition-timing-function: ease-out; }`, codeLanguage: "css" },
      { title: "4. animation कल्पना", content: "animation म्हणजे अनेक टप्प्यांची हालचाल — transition एका बदलासाठी, animation स्वयं-चालू नियमासाठी.\n@keyframes मध्ये टप्पे लिहितात — from (आरंभ) आणि to (अंत), किंवा 0% / 50% / 100%.\nउदा. @keyframes फड { from { opacity: 0; } to { opacity: 1; } } — मजकूर हळूहळू दिसतो; animation: फड 1s ease; ने तो सुरू होतो.\nहे नियम बदलाची गरज न ठेवता आपोआप चालतात. animation सजीव रचना बनवते — बटण सजीव, रंग डोलते.", code: `@keyframes फड {
  from { opacity: 0; }
  to { opacity: 1; }
}`, codeLanguage: "css" },
      { title: "5. keyframes टप्पे", content: "keyframes मध्ये टप्पे नेमके ठरवतात — 0% सुरुवातीची स्थिती, 50% मधली, 100% अंतिम.\nउदा. @keyframes slide { 0% { left: 0; } 100% { left: 20px; } } — घटक डावीकडून उजवीकडे 20px सरकतो.\nमध्ये अधिक टप्पे — 25%, 50%, 75% — दीर्घ, जटिल हालचाल बनते. प्रत्येक टप्प्यात गुणधर्मांचा फरक होतो.\nकिती टप्पे आणि त्यांचा क्रम हे शैलीची कल्पना दर्शवते. टप्पे बदलून जटिल animation तयार होते — प्रयोग करत राहा.", code: `@keyframes slide {
  0% { left: 0; }
  100% { left: 20px; }
}`, codeLanguage: "css" },
      { title: "6. सवय नियम", content: "प्रवेश्यता दृष्टीने animation नियंत्रित करणे आवश्यक — काहींना हालचाल जड जाते. prefers-reduced-motion ने तो नियम कमी करावा.\nउदा. @media (prefers-reduced-motion: reduce) { .x { animation: none; } } — वापरकर्त्याच्या सिस्टीम सेटिंगनुसार.\nतसे केल्यास हालचाल नको असलेल्यांसाठी पेज शांत आणि सुलभ राहतो; इतरांसाठी animation पूर्ण.\nजड animation bandwidth वापरतो — मोजका वापर करा. प्रवेश्यता ही प्रथम; सुरुवात हलकी आणि सटीक ठेवा.", code: `@media (prefers-reduced-motion: reduce) {
  .x { animation: none; }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता transition आणि animation चा छोटा प्रोजेक्ट: एक button. बेसमध्ये transition: transform 0.2s.\n:hover स्थितीत transform: scale(1.02) — hover केल्यावर बटण हळूहळू मोठे होते. opacity चा पर्यायही वापरता येईल.\nएका टीपला @keyframes ने fade-in करा (from opacity: 0 → to 1) आणि animation च्या साहाय्याने लावा.\nशेवटी prefers-reduced-motion block जोडून नियम नियंत्रित करा. सजीव पण आदरयुक्त — हेच या धड्याचे ध्येय.", code: `.btn {
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
      {
        title: "Variables — एकदा ठरवा सर्वत्र म्हणजे काय?",
        content: "custom property, var वापर आणि calc कल्पना.\nvariable म्हणजे नावाने ठरलेले मूल्य — एकदा ठरवा, अनेक ठिकाणी वापरा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Variables — एकदा ठरवा सर्वत्र चे फायदे आणि महत्त्व",
        content: "✓ फायदा असा की एका ठिकाणी मूल्य बदललं की सर्व ठिकाणी ते बदल होतो — दहा ठिकाणी शोध लावण्याची गरज नाही.\n✓ Variables हा महत्त्वाचा CSS अभ्यास आहे.\n✓ हे सर्वत्र उपयोगी — एक घटक दुसऱ्याच्या सापेक्ष ठरवायला.\n✓ महत्त्वाचे: calc मध्ये ऑपरेटर सभोवती एक रिकामी जागा ठेवा (100% - 10px असे); इतर ब्राउझरला वाक्य अवैध वाटू शकते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. variables कल्पना", content: "variable म्हणजे नावाने ठरलेले मूल्य — एकदा ठरवा, अनेक ठिकाणी वापरा. रंग, अंतर, आकार यांसाठी उत्तम.\nCSS मध्ये custom property -- नावाने लिहितात — उदा. :root { --main-color: #234; }. नंतर var(--main-color) ने वापरतात.\nफायदा असा की एका ठिकाणी मूल्य बदललं की सर्व ठिकाणी ते बदल होतो — दहा ठिकाणी शोध लावण्याची गरज नाही.\nहे रंग, अंतर, font-size साठी आदर्श — मोठी फाइल व्यवस्थित राहते आणि त्रास कमी होतो. Variables हा महत्त्वाचा CSS अभ्यास आहे.", code: `:root {
  --main-color: #234;
}`, codeLanguage: "css" },
      { title: "2. custom property", content: "custom property म्हणजे -- नावांनी दिलेले मूल्य; :root मध्ये ठरवली की संपूर्ण पेजवर उपलब्ध होते. एखाद्या घटकावरही देता येते — तिथल्या मुलांपर्यंत पोहोचते (scope).\nउदा. :root { --space: 8px; } — पेजभर space 8px; .card मध्ये --space वेगळे मूल्य दिले तर फक्त card च्या आत ते लागू होते.\nहे दोन प्रकार विचार घेऊ शकतात — global आणि local. म्हणूनच याला scope ची भावना आहे; प्रत्येक ठिकाण त्याच्या संदर्भावर.\nप्रत्येक वेळी -- नाव लिहिण्याची सवय लागते; एकदा लागली नंतर भरपूर वेळ वाचतो — पूर्ण पेज व्यवस्थित नियंत्रित येते.", code: `:root { --space: 8px; }
.card { padding: var(--space); }`, codeLanguage: "css" },
      { title: "3. var वापर", content: "var() फंक्शन custom property चे मूल्य जागेवर आणते. var(--ink, #111) — पहिला argument नाव, दुसरा fallback.\nfallback म्हणजे custom property सापडली नाही तर वापरण्याचे मूल्य — उदा. नवीन theme मध्ये --ink नसेल तर #111.\nवापर: p { color: var(--ink); } — theme बदलला म्हणजे मजकुराचा रंग सर्वत्र एकत्र बदलतो.\nम्हणूनच var हा व्यवस्थेचा खांब: एक मूल्य, अनेक वापर, बदल करणे सोपे — वाचनीयता वाढते आणि गोंधळ कमी होतो.", code: `p { color: var(--ink, #111); }`, codeLanguage: "css" },
      { title: "4. calc function", content: "calc() फंक्शन गणित करते — एकके मिसळून आणि मोजमापांचे संयोजन. उदा. width: calc(100% - 20px).\nहे सर्वत्र उपयोगी — एक घटक दुसऱ्याच्या सापेक्ष ठरवायला. - बेरीज वजाबाकी (आणि गुणाकार भागाकारही) शक्य.\nउदा. .bar { width: calc(100% - var(--space)); } — variables सोबत गणना केल्यास संयोजन शक्तिशाली होते.\nमहत्त्वाचे: calc मध्ये ऑपरेटर सभोवती एक रिकामी जागा ठेवा (100% - 10px असे); इतर ब्राउझरला वाक्य अवैध वाटू शकते.", code: `.bar {
  width: calc(100% - var(--space));
}`, codeLanguage: "css" },
      { title: "5. min max clamp", content: "min(), max(), clamp() — या तीन फंक्शन आकार नियंत्रण देतात. min दोन मूल्यांत लहान; max मोठे.\nclamp(minimum, ideal, maximum) — तीन मूल्ये: किमान, आदर्श (पसंतीचा), कमाल. याला 'लवचिक मर्यादा' म्हणता येईल.\nउदा. h1 { font-size: clamp(1.5rem, 4vw, 3rem); } — मोठ्या पडद्यावर 3rem, लहानावर 1.5rem, दरम्यान 4vw प्रमाणे.\nहे एकाच ओळीत responsive आकार देते — वेगळ्या media query न लिहिता. शीर्षकांच्या आकारासाठी हे अत्यंत उपयुक्त.", code: `h1 { font-size: clamp(1.5rem, 4vw, 3rem); }`, codeLanguage: "css" },
      { title: "6. थीम व्यवस्था", content: "variables ने theme व्यवस्था सोपी होते — रंग एकदा ठरवा, संदर्भानुसार बदला. light/dark theme साठी हे उत्तम तंत्र.\nउदा. :root { --bg: white; } आणि @media (prefers-color-scheme: dark) { :root { --bg: #222; } } — सिस्टीम dark असल्यास आपोआप गडद पार्श्वभूमी.\nbody { background: var(--bg); } — variable एक जागी, मूल्य दोन जागी. नवा theme जोडणे म्हणजे नवे मूल्य जाहीर करणे.\nहे एकाच stylesheet मध्ये अनेक theme नियंत्रण वेगळे ठेवते; कोड न बदलता फक्त variable मूल्य बदलते.", code: `:root { --bg: white; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #222; }
 }
body { background: var(--bg); }`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता variable चा नमुना तयार करा: :root मध्ये --main: teal आणि --space: 1rem ठरवा.\nएका card ला padding: var(--space) द्या आणि border: 1px solid var(--main). रंग आणि अंतर दोन्ही variables कडून.\nएक calc उदाहरण जोडा: width: calc(100% - var(--space)); आणि एका h1 ला clamp द्या — responsive आकार.\nशेवटी --main चा रंग बदला — एकाच ठिकाणी बदल की संपूर्ण पेज नवे रूप घेते. variable ची ताकद स्पष्ट दिसते.", code: `:root {
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
      {
        title: "मराठी प्रोजेक्ट — सर्व CSS एकत्र म्हणजे काय?",
        content: "मराठी न्यूज पेज — selectors, box, flex, grid, responsive आणि variables.\nहा धडा Level 2 च्या आधीच्या सर्व गुणांचा सारांश — selectors, box model, flex, grid, responsive आणि variables एकत्र येतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? मराठी प्रोजेक्ट — सर्व CSS एकत्र चे फायदे आणि महत्त्व",
        content: "\"मराठी प्रोजेक्ट — सर्व CSS एकत्र\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. उद्दिष्टे स्पष्ट", content: "हा धडा Level 2 च्या आधीच्या सर्व गुणांचा सारांश — selectors, box model, flex, grid, responsive आणि variables एकत्र येतात.\nटार्गेट: मराठी न्यूज पेज styling करणे — header, मुख्य मजकूर, कार्डे — मोबाइल आणि डेस्कटॉप दोन्हीसाठी.\nव्याख्याने स्पष्ट: header मध्ये logo आणि search; मुख्य भागात बातमी; बाजूचा स्तंभ आणि अधिक बातम्यांची कार्डे.\nप्रत्येक घटकाची भूमिका समजली की शैली लिहायला सोपे जाते; हेच Level चे मोठे कार्य आहे.", code: `<link rel="stylesheet" href="news.css">
<h1>मराठी न्यूज</h1>`, codeLanguage: "css" },
      { title: "2. संरचना setup", content: "आधी पाया ठरवा — स्वच्छ variables प्रथम. :root मध्ये --ink, --accent आणि --space ठरवा; नंतर body ला margin: 0 आणि color द्या.\nbox-sizing: border-box सर्वत्र लावा — आकार अंदाज नेमका राहतो. हे आधार setup संपूर्ण पेजला शिस्त देतो.\nflex आणि grid कोणत्या भागात येईल ते स्पष्ट करा — header मेनू flex, मुख्य भाग grid.\nपाया ठरला की पुढील styling सोपी होते; सर्व भाग एका साच्यात व्यवस्थित बसतात. हा प्रोजेक्टचा मजबूत आरंभ.", code: `:root {
  --ink: #1c1c1c;
  --accent: #b03;
  --space: 1rem;
}
body {
  color: var(--ink);
  margin: 0;
}`, codeLanguage: "css" },
      { title: "3. header मेनू", content: "header मध्ये logo डावीकडे आणि search उजवीकडे ठरवा. display: flex आणि justify-content: space-between ने अंतर तयार होते.\nalign-items: center ने सर्व उभ्या मध्ये बसतात; flex-wrap: wrap मुळे लहान पडद्यावर भाग खाली येऊ शकतो.\ngap: var(--space) ने अंतर सुसंगत राहते — वेगवेगळ्या ठिकाणी समान अंतर.\nहे खास मोबाइलवर उपयुक्त — अनेक menu item असल्यास ते आपोआप पुढील ओळीत बसतात. फ्लेक्सचा वापर मेनूसाठी उत्तम.", code: `header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space);
}`, codeLanguage: "css" },
      { title: "4. आर्टिकल grid", content: "मुख्य भाग grid ने रचतो — डावीकडे मोठा आर्टिकल (2fr), उजवीकडे बाजूचा स्तंभ (1fr). grid-template-columns: 2fr 1fr.\ngap: var(--space) ने मध्ये अंतर; मुख्य मजकूर जास्त जागा घेतो — ही news लेआउटची मानक रचना.\n@media (max-width: 700px) { .content { grid-template-columns: 1fr; } } — मोबाइलवर दोन्ही भाग एकमेकांखाली दीर्घ होतात.\nहे वाचनीयता सुधारते — लहान पडद्यावर स्तंभ आकुंचित न होता संपूर्ण रुंदी मिळते. responsive design चे उत्तम उदाहरण.", code: `.content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space);
}
@media (max-width: 700px) {
  .content { grid-template-columns: 1fr; }
}`, codeLanguage: "css" },
      { title: "5. कार्ड शैली", content: "बातमी कार्ड border, padding ने बनते — box model चा व्यावहारिक वापर. border: 1px solid #ddd आणि padding: var(--space).\nborder-radius: 4px ने कडा नरम होतो; transition: box-shadow 0.2s ने hover वर हलकी सावली हळूहळू वाढते.\nशीर्षकासाठी font-weight वेगळा ठेवा; कार्डात मजकूर, दुवा आणि चित्र असू शकतात.\nअशी कार्डे grid मध्ये सहज बसतात — भरपूर मोकळीक व स्पष्ट सीमा. धड्याचे नियम आता दृश्यात दिसतात.", code: `.card {
  border: 1px solid #ddd;
  padding: var(--space);
  border-radius: 4px;
  transition: box-shadow 0.2s;
}`, codeLanguage: "css" },
      { title: "6. प्रवेश्यता नियम", content: "प्रवेश्यता नियम वेब सगळ्यांसाठी खुले ठेवतात. रंग contrast कडक हवा — मजकूर पार्श्वभूमीपासून स्पष्ट दिसला पाहिजे.\nreduced-motion नियम जोडा — हालचाल नको असलेल्यांसाठी; बटणे किमान 44px उंच ठेवा — टच सर्वांसाठी सुलभ.\n:focus-visible ने कीबोर्ड वापरकर्त्याला स्पष्ट सूचना द्या — outline: 2px solid var(--accent) सारखी.\nमराठी मजकूरचे वाचन हेच मानक आहे; हे नियम पाळल्यास वेब सर्वांसाठी सुखकारक ठरते.", code: `button { min-height: 44px; }
:focus-visible {
  outline: 2px solid var(--accent);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "आता संपूर्ण न्यूज पेज styling एकत्र करूया — :root मध्ये --ink, --accent, --space ठरवा आणि body ला margin: 0 आणि color द्या.\nbody { margin: 0; color: var(--ink); } नंतर header flexने किंवा space-between रचा; .card ला border आणि padding द्या.\nमुख्य content grid ने रचा; @media (max-width: 700px) { .content { display: block; } } — मोबाइलवर एकच स्तंभ.\nयाच ओळींमध्ये Level 1 चे सर्व गुण आहेत: structure, cascade, selectors, box, flex, grid, responsive, variables — ही Level 1 ची सांगता.", code: `:root { --ink: #1c1c1c; --accent: #b03; --space: 1rem; }
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
