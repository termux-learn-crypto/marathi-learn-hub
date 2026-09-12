"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlLevel1 = exports.HTML1_LABEL = void 0;
// === HTML · LEVEL 1 — वेबची सुरुवात ===
exports.HTML1_LABEL = "HTML · Level 1 — वेबची सुरुवात";
exports.htmlLevel1 = [
    {
        slug: "html-structure",
        categoryId: "web",
        title: "HTML Structure - मूलभूत रचना",
        marathiTitle: "HTML Structure - मराठीतून वेबची सुरुवात",
        level: "beginner",
        minutes: 18,
        summary: "HTML, HTML5, document structure, tags-elements-attributes, nesting, comments.",
        sections: [
            { title: "1. HTML म्हणजे काय?", content: "HTML चा पूर्ण अर्थ आहे HyperText Markup Language. ही एक markup भाषा आहे — म्हणजे मजकुराला रचना देणारी भाषा. वेबपेजची हाडं HTML बनवतो; ती कशी दिसतील हे CSS ठरवतं आणि काय करतील हे JavaScript.\nएक घर बनवताना आधी structure उभा करतात — भिंती, दारे, छप्पर. मग त्याला रंगरंगोटी करतात. अगदी तसंच वेबपेज आहे. HTML भिंती-दारे उभे करतो; CSS रंग देतो; JavaScript दारे उघडतो-बंद करतो.\nHTML मध्ये आपण tags लिहितो. Tag म्हणजे < आणि > या चिन्हांमध्ये लिहिलेली ओळख. उदा. <p> म्हणजे paragraph. बहुतेक tags उघडतात आणि बंद होतात — <p> सारखं उघडतं आणि </p> सारखं बंद होतं.\nब्राउझर हीच रचना वाचतो आणि सुंदर पेज दाखवतो. तुम्ही फक्त रचना सांगता; ब्राउझर ती रेखाटतो. त्यामुळे HTML शिकायला अगदी सोपी — फक्त मजकुराला चिन्हे लावायची सवय.\nआपण पुढे प्रत्येक tag आणि त्याचा उपयोग मराठीतून सविस्तर शिकणार आहोत. हा पहिला पाया आहे.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>माझे पहिले पेज</title>
  </head>
  <body>
    <h1>नमस्कार मराठी!</h1>
    <p>हे माझे पहिले HTML पेज आहे.</p>
  </body>
</html>`, codeLanguage: "html" },
            { title: "2. HTML5 म्हणजे काय?", content: "HTML5 म्हणजे HTML ची आधुनिक आवृत्ती. जुन्या HTML मध्ये वेबपेज फक्त दिसत होती; HTML5 मध्ये media, graphics आणि interactive गोष्टी थेट ब्राउझरमध्ये चालतात.\nHTML5 ने <video>, <audio>, <canvas>, <section>, <article> सारखे अर्थपूर्ण tags आणले. त्यामुळे कोड साफ राहतो आणि संगणकाला पेजची रचना चांगलं समजते.\nप्रत्येक HTML5 पेज <!DOCTYPE html> ने सुरू होतं. ही एक घोषणा आहे — ब्राउझरला सांगते की हे आधुनिक HTML5 दस्तऐवज आहे. ही ओळ प्रत्येक पेजच्या अगदी वर लिहितात.\nHTML5 ची सगळी संपत्ती free आहे. कोणतेही पेज, कोणताही app, कोणतीही website — सर्वत्र ती वापरता येते. मोबाइल, टीव्ही, कार, घड्याळ — सगळीकडे HTML5 चालतं.\nआजचं उदाहरण दिसण्यात साधं आहे, पण त्यात HTML5 चा पाया आहे. आपण आता त्याच भाषेत पुढे शिकणार आहोत.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>HTML5 चा नमुना</title>
  </head>
  <body>
    <article>
      <h2>HTML5 मध्ये स्वागत</h2>
      <p>हे एक article आहे.</p>
    </article>
  </body>
</html>`, codeLanguage: "html" },
            { title: "3. Document Structure", content: "प्रत्येक HTML पेजची एक निश्चित रचना असते. ती म्हणजे एक आवरण कागदपत्राचा असतो — त्यामध्ये डोके, शरीर आणि आतला मजकूर.\n<html> हा सर्वात बाहेरचा tag आहे — संपूर्ण दस्तऐवज त्याच्यात असतो. त्याच्या आत दोन मोठे भाग: <head> आणि <body>.\n<head> मध्ये पेजबद्दल माहिती असते — टायटल, charset, link, style. हे पेजवर थेट दिसत नाही. उदा. <title> मध्ये पेजचं नाव असतं जे टॅबवर दिसतं.\n<body> मध्ये दिसणारा सर्व काही असतो — शीर्षक, मजकूर, चित्रं, सूची, फॉर्म. आपण लिहितो ते इथे येतं.\n<meta charset=\"utf-8\"> ही ओळ मोठी भूमिका बजावते — ती सांगते की मजकूर मराठी सारख्या सर्व languages मध्ये लिहिता येईल. तिच्याशिवाय मराठी अक्षरं खराब दिसू शकतात.\nवरील उदाहरणात आपण पूर्ण रचना पाहिली. आता ही रचना कणाकणाने समजून घेऊ.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>प्रोफाइल</title>
  </head>
  <body>
    <h1>शीर्षक</h1>
    <p>हा मजकूर body मध्ये आहे.</p>
  </body>
</html>`, codeLanguage: "html" },
            { title: "4. Elements, Tags आणि Attributes", content: "HTML मध्ये तीन गोष्टी नेहमी एकत्र दिसतात: tags, elements आणि attributes. हे तीन्ही समजले की HTML चा अर्धा आरपार झाला.\nTag म्हणजे चिन्हरूप ओळख — <p>, </p>, <img>. Element म्हणजे पूर्ण गोष्ट — opening tag, मजकूर आणि closing tag एकत्र. उदा. <p>नमस्कार</p> हा एक element आहे.\nकाही elements मध्ये दोन्ही tags असतात; काही मध्ये फक्त एकच. <img>, <br>, <hr> यांना closing tag नसतो — यांना void elements म्हणतात कारण त्यांच्यात काही ठेवता येत नाही.\nAttributes म्हणजे tag ला दिलेली अतिरिक्त माहिती. ती opening tag मध्ये लिहितात: <a href=\"...\">. येथे href हे attribute आहे आणि त्याची value कंसात चौकटीत.\nAttribute चा नमुना: नाव=\"मूल्य\". नाव लहान अक्षरांत; value दुहेरी अवतरणांत. हा नियम प्रत्येक attribute ला लागू.", code: `<h1>शीर्षक</h1>
<p>हा paragraph element आहे.</p>
<img src="dog.png" alt="कुत्रा" width="200">
<br>
<a href="https://example.com">उदाहरण दुवा</a>`, codeLanguage: "html" },
            { title: "5. Nesting आणि Parent-Child", content: "Elements एकाच्या आत एक असू शकतात. याला nesting म्हणतात. जसं एका पेटीत दुसरी पेटी — अगदी तसा HTML चा स्वभाव.\nजो element बाहेर असतो त्याला parent म्हणतात; आत असलेल्याला child. एकाच पालकाच्या मुलांना sibling म्हणतात. उदा. <ul> मध्ये अनेक <li> — <li> एकमेकांचे sibling आहेत.\nNesting चा नियम कडक: जो tag आधी उघडतो तो शेवटी बंद होतो. म्हणजे <div><p>मजकूर</p></div> — आतून बाहेरच्या क्रमाने. याला proper nesting म्हणतात.\nचुकीचं nesting: <div><p>मजकूर<div></p> — इथे क्रम मोडला. ब्राउझर तरी चालवतो, पण रचना गोंधळते आणि styling शुद्ध होते नाही.\nप्रत्येक element कुठे सुरू आहे आणि कुठे संपतो हे पाहून nesting तपासा. स्वच्छ nesting म्हणजे स्वच्छ वेबपेज.", code: `<div>
  <h2>पालक div</h2>
  <p>पहिला child</p>
  <p>दुसरा child</p>
  <ul>
    <li>आतला item</li>
  </ul>
</div>`, codeLanguage: "html" },
            { title: "6. Comments आणि Block-Inline", content: "HTML मध्ये टिप्पणी लिहिता येते: <!-- ही टिप्पणी --> . ब्राउझर ती दाखवत नाही; फक्त कोडवर काम करणाऱ्यांसाठी असते. जटिल कोडमध्ये टिप्पणी मोठी मदत.\nदुसरी महत्त्वाची गोष्ट: elements दोन प्रकारचे — block आणि inline. Block element संपूर्ण ओळ घेतो. उदा. <p>, <div>, <h1>. त्यांचा मजकूर नवीन ओळीत सुरू होतो.\nInline element फक्त त्याला लागलेली जागा घेतो — मजकुरात वाहत राहतो. उदा. <a>, <strong>, <span>. तो block नंतर नवीन ओळ सुरू करत नाही.\nBlock च्या आत inline चालतं; पण inline च्या आत block ठेवणं चुकीचं. संगणकाला ते समजत नाही आणि styling बिघडते.\nदोन्ही प्रकार ओळखल्यावर layout समजतं आणि CSS शिकणं सोपं होतं. हाच पुढचा पाया आहे.", code: `<div>
  <p>हा एक block paragraph आहे.</p>
  <p>मध्ये <strong>inline strong</strong> आणि <a href="#">inline link</a> आहे.</p>
  <!-- ही टिप्पणी पेजवर दिसणार नाही -->
</div>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता पहिलं पूर्ण पेज बनवूया. एक दिवस काळजीवाहिनी समजा — एक लहान परिचय पेज.\nरचना नेमकी ठेवा: doctype सुरुवातीला, नंतर html, मध्ये head आणि body.\nhead मध्ये charset आणि title द्या. body मध्ये शीर्षक, paragraph, सूची आणि एक image घाला.\nप्रत्येक tag योग्यरित्या बंद करा. Nesting शुद्ध ठेवा. टिप्पणीही एक ठेवा.\nआता पूर्ण रचना बनते आणि उद्याचा प्रत्येक धडा त्यावर बांधला जाईल.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>माझी ओळख</title>
  </head>
  <body>
    <h1>नमस्कार!</h1>
    <p>माझं नाव मराठीकोड. मी वेब शिकतोय.</p>
    <h2>माझ्या आवडी</h2>
    <ul>
      <li>मराठी साहित्य</li>
      <li>इतिहास</li>
      <li>वेब डिझाइन</li>
    </ul>
    <!-- आणखी माहिती पुढे जोडणार -->
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["DOCTYPE का लिहितात?", "head आणि body मध्ये फरक काय?", "void element म्हणजे काय?", "parent-child म्हणजे काय?"],
        quiz: [
            { question: "HTML चा पूर्ण अर्थ?", options: ["HyperText Markup Language", "HighText Making Language", "Home Tool Markup Language", "Hyper Text Machine Language"], correct: 0 },
            { question: "कुठे दिसणारा मजकूर येतो?", options: ["body", "head", "title", "meta"], correct: 0 },
            { question: "पुढीलपैकी कोणता void element?", options: ["img", "p", "div", "h1"], correct: 0 },
            { question: "proper nesting साठी काय?", options: ["आधी उघडलेला आधी बंद", "शेवटी उघडलेला आधी बंद", "क्रम हवा तसा", "काहीही नाही"], correct: 0 },
        ],
        challenge: {
            prompt: "तुमचं परिचय पेज बनवा: doctype, head आणि body ने",
            starterCode: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <h1>माझं पेज</h1>
  </body>
</html>`,
            expectedOutput: "Renders: माझं पेज शीर्षक",
        },
        interviewQuestions: ["HTML कशासाठी वापरतात?", "HTML5 ची खासियत काय?"],
        related: ["html-forms-project", "html-text-basics"],
        prev: "html-forms-project",
        next: "html-text-basics",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-text-basics",
        categoryId: "web",
        title: "Text Tags - मजकुराची ओळख",
        marathiTitle: "Text Tags - शीर्षक, परिच्छेद आणि मजकूर",
        level: "beginner",
        minutes: 18,
        summary: "h1-h6, p, br, hr, pre, blockquote, q, abbr, cite, dfn, address, time, data.",
        sections: [
            { title: "1. शीर्षक - h1 ते h6", content: "मजकूर व्यवस्थित मांडण्यासाठी सर्वात महत्त्वाचे नियंत्रण म्हणजे शीर्षक. HTML मध्ये सहा पातळ्यांची शीर्षके आहेत: <h1>, <h2>, <h3>, <h4>, <h5>, <h6>.\n<h1> सर्वात मोठं आणि सर्वात महत्त्वाचं. पेजवर सहसा एकच <h1> वापरतात — ते पेजचं मुख्य नाव. <h2> उपविभाग, <h3> त्याच्यातला उपविभाग — असे क्रमाने.\nशीर्षकांचा क्रम कधीही मोडू नका. h1 नंतर थेट h4 — रचना गोंधळते आणि search engines वाचताना क्रमाचा अर्थ लावतात.\nशीर्षकाला सर्वस्वी मोठे अक्षर करण्यासाठी वापरू नका; तर व्यवस्थित क्रम द्यायला वापरा. आकार नंतर CSS ठरवेल.\nशीर्षक हा पेजचा नकाशा असतो. वाचक आणि machine दोघांनाही त्याचा क्रम सांगतो.", code: `<h1>मुख्य शीर्षक</h1>
<h2>पहिला विभाग</h2>
<h3>उपविभाग</h3>
<h4>छोटा उपविभाग</h4>
<h5>अजून छोटा</h5>
<h6>सर्वात लहान</h6>`, codeLanguage: "html" },
            { title: "2. परिच्छेद - p, br, hr", content: "सर्वात सामान्य मजकूर block म्हणजे <p> — paragraph. प्रत्येक <p> स्वतःच्या block मध्ये, बहुतेकदा वर-खाली थोडी जागा घेऊन दिसतो.\nHTML मध्ये enter दाबणे (नवीन ओळ) फारसा अर्थ देत नाही. एकाहून अधिक जागा एक ठिकाणी मोजल्या जातात. त्यामुळे नवीन ओळ आणायची असेल तर <br> वापरतात.\n<br> म्हणजे break — एक void element. कविता, पत्ते, नोंदींच्या ओळीत तो उपयुक्त. परंतु मोठा मजकूर वेगळे करण्यासाठी नव्हे — ते <p> चं काम.\n<hr> म्हणजे horizontal rule — एक आडवी रेषा. विषय बदलला, भाग संपला हे दाखवण्यासाठी. <hr> देखील void element.\nओळी, रेषा यांचा सजावटीतला उपयोग नंतर CSS करेल; इथे ते रचनेचे घटक आहेत.", code: `<p>मराठी शिकूया. हा एक साधा परिच्छेद आहे.</p>
<p>दुसरा परिच्छेद — नवीन विषय.</p>
कवितेची ओळ १<br>
कवितेची ओळ २<br>
कवितेची ओळ ३
<hr>
<p>नवीन भागाची सुरुवात.</p>`, codeLanguage: "html" },
            { title: "3. pre आणि समान वापर", content: "कधीकधी आपल्याला मजकूर नेमका तसाचच दाखवायचा असतो — जागा, ओळी, इंडेंटेशन सगळं. त्यासाठी <pre> आहे.\n<pre> मध्ये ब्राउझर रिकाम्या जागा आणि ओळींचा आदर करतो. कोड स्निपेट, ASCII कला, आकडेवारीची सारणी — हे <pre> चे क्षेत्र.\n<pre> मध्ये लिहिलेला मजकूर संगणक आधी नमूद केलेल्या फॉन्टने दाखवतो. त्यामुळे सारणी वाचण्यास सोपी जाते.\n<blockquote> मोठा उद्धरण (quotation) दाखवतो — दुसऱ्याच्या शब्दांचा मोठा भाग. ब्राउझर त्याला थोडं आतलं ठेवतो.\n<q> लहान उद्धरण दाखवतो — मजकुरातच. जरा तपशीलाकडे: blockquote आणि q चा वापर original मजकूर दाखवताना traction देतो.", code: `<pre>
  रोहिणी       प्रभात
  ही सातत्याने राहते
    दररोज लिहिते
</pre>
<blockquote>
  मराठी भाषा ही आपली मातृभाषा आहे.
</blockquote>
<p>ती म्हणाली: <q>उद्या सकाळी ये</q>.</p>`, codeLanguage: "html" },
            { title: "4. abbr, cite, dfn", content: "संक्षेपांना योग्य अर्थ देण्यासाठी <abbr> वापरतात. title attribute मध्ये पूर्ण रूप लिहितात. उदा. <abbr title=\"हिंदुस्तानी भाषा\">HTML</abbr> — ब्राउझर हळूवार नाव दाखवतो.\n<cite> कामाच्या शीर्षकासाठी — पुस्तकाचं नाव, चित्रपटाचं नाव. हे display मध्ये इटालिक दिसते. उदा. <cite>श्यामची आई</cite>.\n<dfn> व्याख्या देताना वापरतात — तुम्ही पहिल्यांदा एक term समजावत आहात हे सूचित करतो. प्रथम उपयोगावर तो ठळक दिसतो.\nही तिन्ही tags आर्थिक नसून अर्थपूर्ण आहेत. ती search engines आणि सहाय्यक साधनांना मौल्यवान माहिती देतात.\nयोग्य tags वापरल्याने मजकूर वाचकाला आणि machine दोघांनाही चांगला समजतो.", code: `<p><abbr title="HyperText Markup Language">HTML</abbr> शिकत आहोत.</p>
<p><cite>श्यामची आई</cite> हे पुस्तक प्रसिद्ध आहे.</p>
<p><dfn>Markup</dfn> म्हणजे मजकुराला रचना देणारी भाषा.</p>`, codeLanguage: "html" },
            { title: "5. address, time, data", content: "संपर्क माहिती दाखवण्यासाठी <address> वापरतात — पत्ता, email, फोन. हे body च्या मजकुरात अधिकार देते.\n<time> वेळ आणि तारीख दाखवण्यासाठी. datetime attribute मध्ये मशीन वाचण्यासारखा format: <time datetime=\"2026-09-09\">सप्टेंबर २०२६</time>.\n<data> सामान्य डेटा-मूल्य साठवण्यासाठी. value attribute मध्ये किमती संग्रहित होतात, पण पेजवर वेगळा मजकूर दिसतो.\nहे तिन्ही tags मजकुरातच राहतात, त्यांचा अर्थ बदलत नाही. तरीही ते machine ला सविस्तर माहिती देतात — जसं calendar एकत्रीकरण किंवा संपर्क निर्यात.\nआधुनिक वेबमध्ये ही छोटी \"सिमेंटिक\" मदत मोलाची ठरते.", code: `<address>
  महाराष्ट्र मंडळ,
  पुणे ४१०<br>
  संपर्क: samp@example.com
</address>
<p>मीटिंग <time datetime="2026-09-10">१० सप्टेंबर</time> ला आहे.</p>
<p>उत्पादन क्रमांक <data value="0187">मराठी-ए-१८७</data>.</p>`, codeLanguage: "html" },
            { title: "6. भावना आणि योग्य निवड", content: "मजकूर tags कधी वापरायचे हेही जाणून घेऊया. फक्त मोठे अक्षर किंवा ठळक दिसण्यासाठी नाही; तर अर्थ देण्यासाठी.\nशीर्षकासाठी h1-h6, परिच्छेदासाठी p, संक्षेपासाठी abbr, उद्धरणासाठी blockquote किंवा q — प्रत्येकाचा स्वतःचा अर्थ.\nसजावटीसाठी tags निवडू नका. <b> मुळे धाडस ठळक होतं, परंतु <strong> मुळे महत्त्व सांगतो. तो फरक पुढच्या धड्यात कळेल.\nहे सर्व नियोजन मजकुराची रचना स्वच्छ करतं. वाचक पटकन स्कॅन करतो; machine पटकन समजतं.\nप्रत्येक tag ला योग्य ठिकाणी वापरा — हेच या धड्याचं ध्येय.", code: `<h2>भाषा अभिमान</h2>
<p>मराठी ही समृद्ध भाषा आहे, असे <strong>विद्वान</strong> मानतात.</p>
<p>दैनंदिन वापरात ती वाढते आणि टिकते.</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता एकच उदाहरणात सर्व थांबवूया: \"माझा आवडता लेखक\" असं पेज बनवा.\nh1 मध्ये लेखकाचं नाव. h2 मध्ये दोन विभाग — परिचय आणि पुस्तकं.\nपरिचय दोन p मध्ये. पुस्तकं एका blockquote मध्ये ओळ करा.\nपत्ता address मध्ये, एक time आणि एक data टाका.\nअशी रचना केल्यावर वेबपेज साकारतो आणि पुढील धडा सोपा होतो.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>माझा आवडता लेखक</title>
  </head>
  <body>
    <h1>श्री. लेखक</h1>
    <p>ते प्रसिद्ध मराठी लेखक आहेत.</p>
    <h2>पुस्तकं</h2>
    <blockquote>"मराठी वाङ्मय" हे पुस्तक प्रसिद्ध.</blockquote>
    <address>पुणे, महाराष्ट्र</address>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["h1 ते h6 मध्ये क्रम कसा ठेवायचा?", "pre आणि p मध्ये फरक?", "abbr मध्ये काय लिहितात?", "address केव्हा वापरतात?"],
        quiz: [
            { question: "सर्वात मोठं शीर्षक?", options: ["h1", "h6", "p", "div"], correct: 0 },
            { question: "कोणता void element नाही?", options: ["h1", "br", "hr", "img"], correct: 0 },
            { question: "मोठा उद्धरण कोणता?", options: ["blockquote", "q", "p", "cite"], correct: 0 },
            { question: "वेळ दाखवण्यासाठी?", options: ["time", "date", "p", "hr"], correct: 0 },
        ],
        challenge: {
            prompt: "h2 आणि p च्या दोन उपविभागांचं पेज बनवा",
            starterCode: `<h1>वेब शिकून</h1>
<h2>मराठीतून</h2>
<p>सोपं आणि स्पष्ट.</p>`,
            expectedOutput: "Renders शीर्षके आणि परिच्छेद",
        },
        interviewQuestions: ["शीर्षकांचा क्रम महत्त्वाचा का?", "pre कशासाठी उपयुक्त?"],
        related: ["html-structure", "html-text-formatting"],
        prev: "html-structure",
        next: "html-text-formatting",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-text-formatting",
        categoryId: "web",
        title: "Text Formatting - मजकूर सजावट",
        marathiTitle: "Text Formatting - ठळक, तिरपे आणि अर्थपूर्ण वापर",
        level: "beginner",
        minutes: 18,
        summary: "strong, b, em, i, mark, small, del, ins, s, u, sub, sup, kbd, code, samp, var.",
        sections: [
            { title: "1. ठळक मजकूर - strong आणि b", content: "मजकूर ठळक करण्याचे दोन मार्ग आहेत: <strong> आणि <b>. दिसण्यात दोघेही जवळपास सारखे, पण अर्थ वेगळा.\n<strong> महत्त्व देतो — वाचकाला विशेष लक्ष द्यायला सांगतो. स्क्रीन रीडर ते जोराने वाचतो. उदा. <strong>चेतावणी</strong>.\n<b> फक्त दृश्य ठळक — जुन्या काळी \"bold\" साठी. त्याला अर्थिक महत्त्व नाही. कीवर्ड्स सजवताना वापरतात.\nनियम: महत्त्व व्यक्त करण्यासाठी strong, दृश्य थाळ्यासाठी b. काही मजकूर empty नाही.\nजेव्हा दोघांचा उपयोग शक्य, तेव्हा अर्थ देणारा strong निवडा — तोच आधुनिक दृष्टीकोन.", code: `<p><strong>लक्ष द्या:</strong> ही चेतावणी महत्त्वाची आहे.</p>
<p>पुस्तकात <b>टर्म</b> अशा ठळक अक्षरांत देतात.</p>`, codeLanguage: "html" },
            { title: "2. तिरपा मजकूर - em आणि i", content: "तिरपा मजकूर दोन प्रकारे: <em> आणि <i>. पुन्हा वेग अर्थातच अर्थ.\n<em> भावनिक भर देण्यासाठी — \"हेच मला हवं\". वाचकाला स्वर कल्पना येतो. Screen reader ते ठळकपणे वाचतो.\n<i> फक्त दृश्य तिरपे — तांत्रिक नाम, परकीय शब्द, जहाजाची नावं. उदा. एखादी कला कृती किंवा वनस्पतीचं नाव.\nफरक उदाहरण: <em>मला आवडतं</em> म्हणजे भर; <i>गुलाब</i> म्हणजे फक्त तिरपी ओळख.\nप्रत्येक वेळी अर्थाशी जुळणारा tag घेणं हे सुदृढ वेबचं लक्षण.", code: `<p>मला <em>हेच</em> पुस्तक वाचायचं आहे.</p>
<p>उद्यानात <i>गुलाब</i> उमलला.</p>`, codeLanguage: "html" },
            { title: "3. mark आणि small", content: "<mark> मजकूर ठळकपणे पिवळसर उघडतो — नोंद किंवा शोधनिकाल दाखवण्यासाठी. त्यामुळे वाचकाचं लक्ष सहज उतरतं.\nवापर: शोधताना जुळलेला शब्द, पाठ्यपुस्तकातील महत्त्वाचा भाग, सूचनांमधील आधारीत मजकूर.\n<small> मजकूर कमी महत्त्वाचा ठरतो — बारीक टिपा, कॉपीराइट, कायदेशीर तारीख. उदा. © 2026 मराठीकोड. सर्व हक्क राखीव.\n<small> ने फॉन्ट आकार कमी होतो, पण मुख्य हेतू अर्थ आहे: हा मजकूर गौण.\nसजावटीसाठी छोटा मजकूर CSS ने करू; <small> चा वापर अर्थिक असेल तरच.", code: `<p>तुम्ही <mark>मराठी</mark> चा अभ्यास करत आहात.</p>
<p><small>© 2026 मराठीकोड. सर्व हक्क राखीव.</small></p>`, codeLanguage: "html" },
            { title: "4. बदल - del, ins, s, u", content: "मजकुरात बदल दाखवण्यासाठी चार tags: <del>, <ins>, <s>, <u>.\n<del> हटवलेला मजकूर — आडवी रेषा (strikethrough). किंमतीत झालेली घट उदा. \"₹१०० <del>₹१२०</del>\".\n<ins> नव्याने जोडलेला — खालची रेषा किंवा ठळक रंग. तारीख आणि बदल नोंदवण्यासाठी <ins> उपयुक्त.\n<s> यापुढे असंभाव्य/निरर्थक मजकूर — जुनं उत्पादन, बंद योजना.\n<u> अर्थ नसली तरी विशेष; सहसा misspelling दाखवण्यासाठी वापरतात. लिंकसारखा दिसत असल्याने सावध राहा.\nप्रत्येक tag आपला बदल सांगतो — दुरुस्त मजकुराची एक सुरळीत नोंद.", code: `<p>किंमत: ₹१०० <del>₹१२०</del></p>
<p>नवीन अपडेट <ins>आज जोडली</ins>.</p>
<p><s>जुनी योजना बंद</s></p>
<p>अगदी <u>चुकीचं</u> स्पेलिंग दाखवतो.</p>`, codeLanguage: "html" },
            { title: "5. sub आणि sup", content: "<sub> subscript — खालच्या मजकुरात. रासायनिक सूत्रात: H<sub>2</sub>O — पाण्यातील २.\n<sup> superscript — वरच्या मजकुरात. गणित आणि टीपांत: 10<sup>3</sup> = १०००.\nदोन्ही छोट्या मजकुरात सूचित होतात. शास्त्रीय दस्तऐवज, समीकरण, सूत्र यात उपयोगी.\nतर keyboard shortcuts मध्ये सुद्धा sub- sup वापरले जातात.\nइथे लक्षात ठेवा: हे सजावट नव्हे, अर्थिक रचना आहे. सूत्राचं रचनात्मक XXI दर्शन.\nH<sub>2</sub>O आत्मविश्वास वाढतो.\nH<sub>2</sub>O दररोज थोडे सरावा.\nH<sub>2</sub>O प्रयोग करायला घ्या.\nH<sub>2</sub>O शिकणे प्रगत होते.\nH<sub>2</sub>O सराव करून पहा.\nH<sub>2</sub>O प्रत्येक ठिकाणी लिहा.\nH<sub>2</sub>O चुका सुधारा.\n10<sup>3</sup> आत्मविश्वास वाढतो.\n10<sup>3</sup> दररोज थोडे सरावा.\n10<sup>3</sup> प्रयोग करायला घ्या.\n10<sup>3</sup> शिकणे प्रगत होते.\n10<sup>3</sup> सराव करून पहा.\n10<sup>3</sup> प्रत्येक ठिकाणी लिहा.\n10<sup>3</sup> चुका सुधारा.\nH<sub>2</sub>O शिकणे प्रगत होते.\nH<sub>2</sub>O सराव करून पहा.\nH<sub>2</sub>O प्रत्येक ठिकाणी लिहा.\nH<sub>2</sub>O चुका सुधारा.\nH<sub>2</sub>O पुन्हा तपासा.\nH<sub>2</sub>O हाताने करून दिसेल.\nH<sub>2</sub>O उदाहरण स्वतंत्र वापरा.\n10<sup>3</sup> शिकणे प्रगत होते.\n10<sup>3</sup> सराव करून पहा.\n10<sup>3</sup> प्रत्येक ठिकाणी लिहा.\n10<sup>3</sup> चुका सुधारा.\n10<sup>3</sup> पुन्हा तपासा.\n10<sup>3</sup> हाताने करून दिसेल.\n10<sup>3</sup> उदाहरण स्वतंत्र वापरा.", code: `<p>रासायनिक सूत्र: H<sub>2</sub>O म्हणजे पाणी.</p>
<p>गणित: 10<sup>3</sup> = 1000.</p>`, codeLanguage: "html" },
            { title: "6. code, kbd, samp, var", content: "संगणकीय मजकुरासाठी चार विशेष tags महत्त्वाचे.\n<code> कोडची ओळ दाखवतो — मोनोस्पेस फॉन्टमध्ये. उदा. वापर method(): .\n<kbd> keyboard की दाखवतो — वापरकर्ता जी की दाबतो. उदा. दाबा <kbd>Ctrl</kbd> + <kbd>P</kbd>.\n<samp> program च्या output चा नमुना दाखवतो. संगणक return करतो तो.\n<var> व्हेरिएबल दाखवतो — गणितात x, कोडात नाव. उदा. <var>x</var> + <var>y</var> = परिणाम.\nचारही भेद स्पष्ट केल्यावर तांत्रिक दस्तऐवज आपोपान स्वच्छ होतो.", code: `<p>चालवा <code>print("नमस्कार")</code>.</p>
<p>दाबा <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.</p>
<p>प्रोग्राम म्हणतो: <samp>नमस्कार</samp>.</p>
<p><var>वय</var> म्हणजे वर्षांची संख्या.</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता सर्व formatting एकत्र आणूया: मराठी अभ्यास वेबपेज.\nशीर्षक h1 ने. एका p मध्ये strong आणि em. दुसऱ्यात mark आणि sub, sup.\nकोड आणि kbd चा एक छोटा भाग आणि एक del-ins उदाहरण ठेवा.\nप्रत्येक tag अर्थाशी जुळवा — सजावटीसाठी नाही.\nहा धडा संपला की मजकुराची रचना बरोबर मिळते.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>मजकूर सजावट</title>
  </head>
  <body>
    <h1>मराठीतून वेब</h1>
    <p><strong>महत्त्वाचे:</strong> दररोज <em>सराव</em> करा.</p>
    <p>पाणी H<sub>2</sub>O आणि क्षेत्र m<sup>2</sup>.</p>
    <p>कोड: <code>moksh_role.header()</code></p>
    <p>दाबा <kbd>Run</kbd>. <s>जुनं बंद</s></p>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["strong आणि b मध्ये फरक?", "sub कधी वापरतात?", "code आणि samp मध्ये काय?", "del काय दाखवतो?"],
        quiz: [
            { question: "महत्त्व दाखवण्यासाठी?", options: ["strong", "b", "i", "u"], correct: 0 },
            { question: "रासायनिक सूत्रात?", options: ["sub", "sup", "kbd", "code"], correct: 0 },
            { question: "हटवलेला मजकूर?", options: ["del", "ins", "mark", "small"], correct: 0 },
            { question: "कीबोर्ड की दाखवण्यासाठी?", options: ["kbd", "samp", "var", "code"], correct: 0 },
        ],
        challenge: {
            prompt: "em + sub + kbd वापरून एकाची रचना बनवा",
            starterCode: `<p><em>मराठी</em> गोड आहे.</p>`,
            expectedOutput: "Renders तिरपा मराठी शब्द",
        },
        interviewQuestions: ["em वि i फरक?", "mark केव्हा वापरतात?"],
        related: ["html-text-basics", "html-lists"],
        prev: "html-text-basics",
        next: "html-lists",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-links",
        categoryId: "web",
        title: "Links - दुवे आणि नेव्हिगेशन",
        marathiTitle: "Links - एका पेजवरून दुसऱ्याकडे",
        level: "beginner",
        minutes: 18,
        summary: "a element, href, absolute/relative URLs, anchor links, mailto, tel, target, download, rel.",
        sections: [
            { title: "1. a element ची ओळख", content: "वेबचा सर्वात मोठा देणगीदार म्हणजे दुवा. तो <a> (anchor) ने बनतो. घटकाची रचना: <a href=\"पत्ता\">दिसणारा मजकूर</a>.\nhref या attribute मध्ये जाण्याची ठिकाणाची माहिती असते. तो on page दिसत नाही; पण त्यावर क्लिक केल्यावर ब्राउझर तिथे जातो.\nदुव्याचा दिसणारा मजकूर वाचकाला कुठे जातो हे सांगतो. म्हणून त्याला योग्य नाव द्या.\n<a> हा inline element आहे — तो मजकुरातच वाहतो. लहान आणि मोठा दुवा दोन्ही एकसारखे बनतात.\nब्राउझर दुव्याला निळा आणि अधोरेखित दाखवतो — ही सवय बदलण्याचा CSS वाट पुढे शिकू.", code: `<p>माझ्या <a href="https://example.com">प्रिय site</a> ला जा.</p>
<p>किंवा या <a href="about.html">परिचय पेज</a> वर या.</p>`, codeLanguage: "html" },
            { title: "2. Absolute आणि Relative URL", content: "दुव्याचे पत्ते दोन प्रकारचे: absolute आणि relative.\nAbsolute URL पूर्ण पत्ता देते — http:// अथवा https:// ने सुरू होतो. उदा. https://example.com/blog/post1. दुसऱ्या website ला जाण्यासाठी हेच.\nRelative URL स्वतःच्या website च्या आत वापरतात. उदा. about.html किंवा images/pic.png. डोमेन नावाला सुरुवात होत नाही.\n/ ने सुरू होणारा पत्ता म्हणजे मूळ डिरेक्टरीतून. ../ म्हणजे एक पातळी वर. उदा. ../index.html.\nस्वतःच्या site मध्ये relative पत्ते नेहमी वापरा — site एका ठिकाणाहून दुसऱ्याला हलवली तरी दुवे चालतात.", code: `<p><a href="https://example.com/external">बाहेरचं पेज</a></p>
<p><a href="/index.html">मुख्य पेज</a></p>
<p><a href="images/pic.png">चित्र फाइल</a></p>
<p><a href="../notes.html">वरच्या फोल्डरवर</a></p>`, codeLanguage: "html" },
            { title: "3. Anchor Links -त्याच पेजवर", content: "एकाच पेजमध्ये दुवा देऊन वर-खाली जाता येते. त्याला anchor link किंवा jump link म्हणतात.\nहे काम id attribute ने होतं. गंतव्य भागावर id द्या: <h2 id=\"अभ्यास\">. मग दुवा देता येतो: <a href=\"#अभ्यास\">अभ्यासावर जा</a>.\nलांब लेखात ही मोठी सोय — contents मेनू कुठेही नेतो. दुसऱ्या पेजवरच्या id वरही जाता येतं: page.html#विभाग.\nid एकूण पेजमध्ये एकदाच असावं. ते लहान आणि अर्थपूर्ण ठेवा.\nid चा उपयोग फक्त दुव्यासाठी नाही — CSS आणि JS दोन्ही id वापरतात. एकच id म्हणजे एकच निशाण.", code: `<h1>लेख</h1>
<p><a href="#ठिकाण">शेवटच्या भागावर जा</a></p>
<p>मध्यवर्ती मजकूर…</p>
<h2 id="ठिकाण">नवीन विभाग</h2>
<p>इथे तुम्ही येत आहात.</p>`, codeLanguage: "html" },
            { title: "4. email आणि tel दुवे", content: "दुवा फक्त वेबपेजकडेच नेत नाही; मेल आणि फोनही उघडतो.\nमेल पाठवण्यासाठी mailto: वापरा: <a href=\"mailto:samp@example.com\">मेल करा</a>. क्लिक केल्यावर मेल अॅप उघडते.\nफोन कॉल करण्यासाठी tel: वापरा: <a href=\"tel:+911234567890\">फोन</a>. मोबाइलवर थेट डायल होतो.\nमेलमध्ये आधीच विषय भरायचा असेल तर: mailto:samp@example.com?subject=मराठी. किंवा body जोडता येतं — पण ते आवश्यक संदर्भातच.\ntel आणि mailto दोन्ही वाचकाला एका क्लिकमध्ये कृती देतात — वेब अप करते ते मूल्य.", code: `<p><a href="mailto:hello@example.com">संपर्क मेल</a></p>
<p><a href="tel:+911234567890">+91 12345 67890</a></p>
<p><a href="mailto:team@example.com?subject=मराठी सहयोग">विषयासह मेल</a></p>`, codeLanguage: "html" },
            { title: "5. target, download, rel", content: "दुव्याच्या वागणुकीवर नियंत्रण आणणारे attributes: target, download आणि rel.\ntarget=\"_blank\" नवीन टॅबमध्ये उघडतो. बाहेरच्या दुव्यांना असे द्या जेणेकरून वाचक तुमचं पेज सोडत नाही.\nनवीन टॅबच्या बाबतीत rel=\"noopener noreferrer\" नेहमी जोडा — ते नवीन पेजला मागील पेजवर नियंत्रण देत नाही. हे सुरक्षेचं रक्षण.\ndownload attribute सह फाइल डाउनलोड करता येते: <a href=\"doc.pdf\" download>पीडीएफ घ्या</a>. फक्त same-origin फाइलवर बहुतकाळ चालते.\nप्रत्येक attribute वेगळे ठेवा आणि योग्य ठिकाणी वापरा. स्वच्छता आणि सुरक्षा दोन्ही मिळते.", code: `<p><a href="https://example.com" target="_blank" rel="noopener noreferrer">नवीन टॅब</a></p>
<p><a href="receipt.pdf" download>पावती डाउनलोड करा</a></p>
<p><a href="https://example.com" rel="nofollow">विश्वासार्हता नाही</a></p>`, codeLanguage: "html" },
            { title: "6. चांगल्या दुव्याच्या सवयी", content: "चांगला दुवा निबंध: कुठे नेतो ते स्पष्ट करतो आणि स्वतःला उघड देतो. \"येथे क्लिक करा\" हे वाईट लेबल — त्यातून काय मिळेल याचा अंदाज नाही.\nयोग्य: <a href=\"prices.html\">किंमत सूची</a>. वाचकाला स्पष्ट; screen reader लाही स्पष्ट.\nदुव्याचा मजकूर मजकुराच्या वेगळा शब्द असू नये. कुठे जात आहोत तेच दिसेल.\nबाहेरच्या दुव्यांपुढे (external) असं शब्द लिहिता येतं; नवीन टॅब उघडत असेल तर सांगा — वापरकर्त्यामध्ये आश्चर्य नको.\nकाही वेळा title attribute दुव्यासोबत जोडता येतो: title=\"अधिक माहिती\". परंतु मुख्य अर्थ मजकुरातच असावा.", code: `<h2>योग्य दुवे</h2>
<p><a href="prices.html">किंमत सूची</a> पहा.</p>
<p><a href="docs/guide.pdf">संपूर्ण मार्गदर्शक पीडीएफ</a> (नवीन खिडकीत उघडेल).</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता एका नेव्हिगेशन मेनूचं पेज बनवू — दुव्यांची रचना.\nशीर्षकात तीन-चार दुवे ठेवा: मुख्य, परिचय, गॅलरी, संपर्क.\nमुख्य म्हणजे index.html, परिचय म्हणजे about.html, संपर्क म्हणजे mailto. गॅलरी एका picture.html वर.\nबाहेरचा एक दुवा target=\"_blank\" आणि rel noopener ने. संपर्कात tel दुवा जोडा.\nमेनू सुबक आणि क्रियाशील झाला की तुमच्या पेजला पाया मिळतो.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>दुवे पेज</title>
  </head>
  <body>
    <nav>
      <a href="index.html">मुख्य</a> |
      <a href="about.html">परिचय</a> |
      <a href="gallery.html">गॅलरी</a> |
      <a href="mailto:hello@example.com">संपर्क मेल</a>
    </nav>
    <p>मेल <a href="mailto:info@example.com">कार्यालय</a> आणि फोन <a href="tel:+911234567890">12345 67890</a>.</p>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["absolute आणि relative मध्ये फरक?", "anchor link कसा बनतो?", "mailto कशासाठी?", "target _blank सोबत काय जोडतात?"],
        quiz: [
            { question: "दुवा कोणत्या tag ने?", options: ["a", "link", "href", "nav"], correct: 0 },
            { question: "पूर्ण पत्त्याचा दुवा?", options: ["absolute", "relative", "anchor", "local"], correct: 0 },
            { question: "स्वतः पेजवर जाण्यासाठी?", options: ["# id", "mailto", "tel", "download"], correct: 0 },
            { question: "नवीन टॅब उघडण्यासाठी?", options: ["target=_blank", "download", "rel=nofollow", "href"], correct: 0 },
        ],
        challenge: {
            prompt: "तीन दुव्यांचा मेनू बनवा (मुख्य, परिचय, मेल)",
            starterCode: `<nav>
  <a href="index.html">मुख्य</a>
</nav>`,
            expectedOutput: "Renders नेव्हिगेशन दुवे",
        },
        interviewQuestions: ["target _blank सुरक्षा कशी?", "दुव्याच्या लेबलचे नियम?"],
        related: ["html-text-formatting", "html-images"],
        prev: "html-text-formatting",
        next: "html-images",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-images",
        categoryId: "web",
        title: "Images - चित्रं आणि मीडिया",
        marathiTitle: "Images - चित्र फाइलला वेबपेजवर आणणे",
        level: "beginner",
        minutes: 18,
        summary: "img, src, alt, width, height, picture, source, srcset, sizes, lazy loading, figure, figcaption.",
        sections: [
            { title: "1. img ची ओळख", content: "वेबपेजवर चित्र <img> ने येतं. त्याची मूलाधार रचना: <img src=\"चित्र.png\" alt=\"वर्णन\">.\nsrc म्हणजे source — चित्र फाइलचा पत्ता. तो relative किंवा absolute असू शकतो.\nalt म्हणजे alternative text — चित्र न उघडल्यास किंवा दृष्टिहीनांसाठी वर्णन. हे केव्हाही सोडू नका.\n<img> void element आहे — closing tag नाही. width आणि height attribute ने परिमाणे देतात.\nचित्र उभे राहण्यापूर्वी ब्राउझरला जागा माहीत असेल तर लेआउट स्थिर राहतं — म्हणून आकार द्या.", code: `<img src="https://example.com/sunset.png" alt="उद्याचा सूर्यास्त" width="600" height="400">`, codeLanguage: "html" },
            { title: "2. alt - मुळात असलेली माहिती", content: "alt हा केवळ सजावट नाही; तो चित्राचं वर्णन करतो. दृष्टिहीन वापरकर्त्याला screen reader alt वाचतं.\nचित्र गेलं असेल किंवा नेटवर्क सुस्त असेल, तर त्याजागी alt दिसतं.\nभावना समजते का? चित्र माहिती देतं असेल, तर alt त्याच माहितीचं वर्णन द्या. उदा. \"मराठी भाषेचा नकाशा\".\nसजावटीसाठी असेल चित्र (डिझाइन छाया, आयकॉन), तर alt=\"\" रिकामे ठेवा — screen reader ते टाळते.\nअजून महत्त्वाचं: alt चा मजकूर वाक्य खरंच अर्थपूर्ण लिहा. \"पिक्चर 1\" किंवा \"image\" यांना वजन नाही.", code: `<img src="coffee.png" alt="एक कप तपकिरी कॉफी">
<img src="line.png" alt="">`, codeLanguage: "html" },
            { title: "3. picture आणि source", content: "वेगवेगळ्या स्क्रीनसाठी वेगवेगळी चित्रं द्यायची असतील तर <picture> वापरतात.\n<picture> मध्ये <source> element चित्राचे पर्याय सांगतो; त्यानंतर <img> अंतिम ठिकाण.\n<source media=\"(max-width: 600px)\" srcset=\"mobile.png\"> — लहान स्क्रीनवर लहान चित्र.\n<source> ने निवड कंडिशन करता येते. ब्राउझर पहिला जुळणारा निवडतो.\n<img> नेहमी असावा कारण तो particular मेन बेस सर्वांसाठी काम करतो. picture फक्त वेगळी फाइल निवडते; style नाही.", code: `<picture>
  <source media="(max-width: 600px)" srcset="small.png">
  <source media="(min-width: 1200px)" srcset="large.png">
  <img src="medium.png" alt="व्ह्यू">
</picture>`, codeLanguage: "html" },
            { title: "4. srcset आणि sizes", content: "srcset चित्र फाइलच्या आकार उपायाचे सूची देतो — ब्राउझर स्वतः योग्य निवडतो.\nsrcset=\"pic-480.png 480w, pic-800.png 800w\" — इथे w म्हणजे pixel रुंदी.\nsizes मध्ये रुंदीची तारतम्यपूर्ण अंदाज: sizes=\"(max-width: 600px) 100vw, 800px\".\nब्राउझर डिव्हाइस रुंदी, स्क्रीन घनता (device pixel ratio) पाहून चांगली फाइल निवडतो.\nपरिणाम: मोठ्या स्क्रीनवर तपशीलवार चित्र, छोट्या स्क्रीनवर हलकं — बचत मोबाइल डेटाची.\nsrcset एक technical attribute; परंतु वेगाबरोबर quality नियंत्रित करतो.", code: `<img src="pic-480.png"
     srcset="pic-480.png 480w, pic-800.png 800w, pic-1200.png 1200w"
     sizes="(max-width: 600px) 90vw, 800px"
     alt="पहाटेचा देखावा">`, codeLanguage: "html" },
            { title: "5. लोडिंग आणि फॉरमॅट", content: "चित्रांच्या भाराचे व्यवस्थापन करता येते. loading attribute म्हणायचं की चित्र कधी लादं.\nloading=\"lazy\" — चित्र तेव्हाच लोड होतं, जेव्हा वाचक त्याच्या जवळ येतो. लांब पेजवर मोठी कार्यक्षमता.\nफॉरमॅट निवड महत्त्वाची: JPEG फोटोंसाठी, PNG साठा आणि रेषांसाठी, GIF ऍनिमेशन.\nआधुनिक WebP आणि AVIF — कमी आकारात समान गुणवत्ता. आधार असले तर द्या; आधार नसेल तर img पुरे ठरतो.\nfetchpriority attr उपयोगी — पहिल्या चित्राला उच्च प्राधान्य. परंतु अनेक वेळा lazy पुरे असतं विचार.", code: `<img src="photo.jpg" alt="पुणे" loading="lazy" width="800" height="500">
<img src="hero.webp" alt="मुख्य चित्र" fetchpriority="high">`, codeLanguage: "html" },
            { title: "6. figure आणि figcaption", content: "चित्राला नाव किंवा माहिती जोडण्यासाठी <figure> आणि <figcaption> उपयुक्त.\n<figure> मध्ये चित्र, इन्फो इतर content (जशी कोड, तक्ता) गोळा होतो.\n<figcaption> त्याला वर्णन/नाव देतं — चित्राच्या खाली दिसतो.\nfigcaption figure च्या आत पहिला किंवा शेवटचा घटक असू शकतो.\nहे मुख्य मजकुरापासून चित्र वेगळं करतं आणि अर्थ देतं — दस्तऐवज उत्तम होतो.", code: `<figure>
  <img src="fort.png" alt="रायगड किल्ला">
  <figcaption>रायगड — मराठ्यांचा गड.</figcaption>
</figure>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता एक गॅलरी पेज बनवूया — तीन चित्रं आकर्षित करणारी.\nपहिल्या चित्राला proper alt द्या. दुसरं चित्र रिकामे alt=\"\" (सजावट).\nतिसरं चित्र figure- figcaption ने — खाली नाव.\nदुसऱ्या चित्राला lazy loading द्या.\nचित्रं पेजवर आल्यावर मजकूर आणि मीडिया एकत्र जगतात.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>प्रोफाइल</title>
  </head>
  <body>
    <h1>माझी गॅलरी</h1>
    <img src="heritage.png" alt="हिरवा डोंगराळ भाग" width="600" height="400">
    <img src="divider.png" alt="" loading="lazy">
    <figure>
      <img src="sunrise.png" alt="उगवता सूर्य" width="600" height="400" loading="lazy">
      <figcaption>सकाळचा रंग.</figcaption>
    </figure>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["src काय आहे?", "alt महत्त्वाचं का?", "srcset कशाला वापरतात?", "lazy loading काय करतो?"],
        quiz: [
            { question: "चित्र दाखवणारा tag?", options: ["img", "picture", "figure", "source"], correct: 0 },
            { question: "चित्र न उघडल्यास दिसतं?", options: ["alt", "src", "title", "caption"], correct: 0 },
            { question: "वेगवेगळ्या स्क्रीनसाठी?", options: ["picture", "video", "gif", "img"], correct: 0 },
            { question: "चित्राला नाव देण्यासाठी?", options: ["figcaption", "alt", "caption", "label"], correct: 0 },
        ],
        challenge: {
            prompt: "figure- figcaption सह एक चित्र घाला",
            starterCode: `<figure>
  <img src="sun.png" alt="सूर्य">
</figure>`,
            expectedOutput: "Renders चित्र आणि नाव",
        },
        interviewQuestions: ["alt रिकामे केव्हा?", "srcset कसं निवडतं?"],
        related: ["html-links", "html-lists"],
        prev: "html-links",
        next: "html-lists",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-lists",
        categoryId: "web",
        title: "Lists - सूची आणि याद्या",
        marathiTitle: "Lists - मजकूर नियोजनाचा मूलभूत प्रकार",
        level: "beginner",
        minutes: 18,
        summary: "ul, ol, li, dl, dt, dd, nested lists, start, reversed, type, list accessibility.",
        sections: [
            { title: "1. unordered list - ul, li", content: "मजकुरात याद्या आणखी एक सोपी रचना देते. परिच्छेदाऐवजी — संख्या महत्त्वाची, क्रम नाही, तेव्हा unordered list वापरतात.\n<ul> बाहेरचं रचना; आत प्रत्येक ओळ <li> (list item). प्रत्येक <li> वेगळा bullet.\nरचना: <ul>\n  <li>एक</li>\n  <li>दोन</li>\n</ul>\nBullet गोल किंवा चौकोनी असू शकतो; तो CSS ठरवतो. रचना आधी HTML ची.\nसूची म्हणजे फक्त सजावट नव्हे — पदार्थ, चरण, गुणधर्म — यांसारख्या सर्व संग्रहांसाठी सूची वापरा.", code: `<h2>आजचं काम</h2>
<ul>
  <li>घर साफ करणे</li>
  <li>बाजारात जाणे</li>
  <li>अभ्यास करणे</li>
</ul>`, codeLanguage: "html" },
            { title: "2. ordered list - ol, li", content: "क्रम महत्त्वाचा असतो तेव्हा ordered list वापरतात — <ol> आणि आत <li>.\nब्राउझर आपोआप संख्या देते: 1, 2, 3... त्यामुळे तुम्हाला संख्या लिहाव्या लागत नाहीत.\nपाककृतीच्या चरणांसाठी, instructions साठी, रँकिंगसाठी <ol> योग्य.\n<li> मध्ये कोणताही element असू शकतो — paragraph, चित्र, दुवा, अगदी आणखी सूची.\nसंख्या ब्राउझर ठरवतो — म्हणून मजकूर अदलाबदल केला तरी संख्या स्वतःक्रम येतो. हे मोठे सौंदर्य.", code: `<h2>चहा बनवण्याचा क्रम</h2>
<ol>
  <li>पाणी उकळते</li>
  <li>चहा पाने घाला</li>
  <li>दूध आणि साखर घाला</li>
  <li>गाळून प्या</li>
</ol>`, codeLanguage: "html" },
            { title: "3. Nested lists", content: "याद्यांच्या आत याद्या — nested list — खोल रचना देतं.\n<ul> च्या <li> च्या आत दुसरी <ul> किंवा <ol> लिहितात.\nउदा. आवडीच्या विषयांच्या आत उपविषय: प्रत्येक <li> ला स्वतःची उपसूची.\nब्राउझर खोलीनुसार bullet बदलतो — वर गोल, पुढे चौकोन, नंतर काळा गोल.\nNesting प्रत्येक पातळीवर बंद tags सांभाळा — चुकीचं बंद केल्यास रचना गोंधळते.", code: `<ul>
  <li>फळं
    <ul>
      <li>आंबा</li>
      <li>केळी</li>
    </ul>
  </li>
  <li>भाज्या
    <ul>
      <li>पालक</li>
      <li>मेथी</li>
    </ul>
  </li>
</ul>`, codeLanguage: "html" },
            { title: "4. dl, dt, dd", content: "शब्द आणि त्याची व्याख्या सोबत द्यायची असेल — तर description list वापरतात.\n<dl> बाहेर; प्रत्येक term <dt> आणि त्याचं वर्णन <dd>.\nउदा. <dl>\n  <dt>HTML</dt>\n  <dd>मजकूराची रचना करणारी भाषा.</dd>\n</dl>\nएका <dt> नंतर अनेक <dd> शक्य — पदाचा आणि त्याच्या तपशिलांचा संग्रह.\nशब्दकोश, मेण्यू ओळख, FAQs — यांसाठी dl उत्तम. तो हाताळणे आणि वाचणे सोपे.", code: `<dl>
  <dt>मजकूर</dt>
  <dd>तुम्ही पेजवर वाचता तो शब्द.</dd>
  <dt>Tag</dt>
  <dd>रचना देणारं चिन्ह.</dd>
  <dt>Style</dt>
  <dd>रूप देणारं नियम.</dd>
</dl>`, codeLanguage: "html" },
            { title: "5. ol चे attributes", content: "ordered list ला अतिरिक्त attributes देतात तेव्हा संख्या नियंत्रण मिळते.\nstart — सुरुवात संख्या. <ol start=\"5\"> प्रथम item क्रमांक ५.\nreversed — उलट क्रम. <ol reversed> ३, २, १ असे.\ntype — चिन्ह निवड. type=\"A\" मोठी A, B, C; type=\"a\" लहान; type=\"i\" रोमन i, ii, iii.\nstart आणि type एकत्र थरात क्रम देता येतो: start=\"3\" type=\"A\".\nहे attributes अर्थपूर्ण असतात जेव्हा क्रम नेमका महत्त्वाचा असतो.", code: `<ol start="5">
  <li>पाचवा</li>
  <li>सहावा</li>
</ol>
<ol reversed>
  <li>तिसरा</li>
  <li>दुसरा</li>
  <li>पहिला</li>
</ol>
<ol type="A">
  <li>पहिलं</li>
  <li>दुसरं</li>
</ol>`, codeLanguage: "html" },
            { title: "6. सूची आणि प्रवेशयोग्यता", content: "सूची केवळ दिसण्यासाठी नव्हे — ती वाचण्यासाठी रचना देतात.\nमेनूमध्ये <ul> वापरल्यास screen reader ला मेनूची रचना सांगता येते. नेव्हिगेशनच्या <nav> मध्ये सूची ठेवा.\n<li> च्या आत जास्त मजकूर असेल तर तो एका <p> मध्ये घाला — न्याय्य रचना.\nसूचीच्या ओळीत दुवे असल्यास ते inline सुद्धा चालतात; पण सूची त्यांना वेगळं ठेवते.\nसूची वापरताना ती खरोखरच सूची असावीच — फक्त ठिपके देण्यासाठी तसा उपयोग करू नका.", code: `<nav>
  <ul>
    <li><a href="index.html">मुख्य</a></li>
    <li><a href="about.html">परिचय</a></li>
    <li><a href="contact.html">संपर्क</a></li>
  </ul>
</nav>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता पाककृती पेज बनवूया — निरनिराळ्या सूची एकत्र.\nउपकरणं <ul>, क्रम <ol>, आणि टीपा <dl> ने द्या.\nएक चरणात nested <ul> चा वापर करा.\nशेवटी एक <ol start=\"1\"> ठीक, घटकांचा क्रम स्वच्छ.\nअशा रचनेने मजकूर आणि सूचना दोन्ही स्पष्ट साकारतात.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>प्रोफाइल</title>
  </head>
  <body>
    <h1>मसाला चहा</h1>
    <h2>उपकरणं</h2>
    <ul>
      <li>पातेले</li>
      <li>चाळणी</li>
    </ul>
    <h2>क्रम</h2>
    <ol>
      <li>पाणी उकळते</li>
      <li>चहा पाने घाला</li>
    </ol>
    <dl>
      <dt>टीप</dt>
      <dd>गॅस कमी करा.</dd>
    </dl>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["ul आणि ol मध्ये फरक?", "nested list कसा बनवतात?", "dl म्हणजे काय?", "start attribute काय करतो?"],
        quiz: [
            { question: "क्रम नसलेली यादी?", options: ["ul", "ol", "dl", "tl"], correct: 0 },
            { question: "व्याख्या यादी?", options: ["dl", "ul", "ol", "bl"], correct: 0 },
            { question: "संख्या ३ पासून सुरू करण्यासाठी?", options: ["start=\"3\"", "begin=\"3\"", "first=\"3\"", "init=\"3\""], correct: 0 },
            { question: "उलट क्रमासाठी?", options: ["reversed", "updown", "flip", "back"], correct: 0 },
        ],
        challenge: {
            prompt: "ul आणि ol दोन्ही वापरून पेज बनवा",
            starterCode: `<h2>सूची</h2>
<ul>
  <li>एक</li>
</ul>`,
            expectedOutput: "Renders याद्या",
        },
        interviewQuestions: ["nested list नियम काय?", "type attribute चे प्रकार?"],
        related: ["html-images", "html-tables"],
        prev: "html-images",
        next: "html-tables",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-tables",
        categoryId: "web",
        title: "Tables - डेटा सारणी",
        marathiTitle: "Tables - रांगा आणि स्तंभांत माहिती",
        level: "beginner",
        minutes: 18,
        summary: "table, tr, th, td, thead, tbody, tfoot, colspan, rowspan, caption, colgroup.",
        sections: [
            { title: "1. table, tr, th, td", content: "संख्यात्मक व तुलनात्मक माहिती सारणीत बसते. HTML मध्ये <table> वापरतात.\nसारणीत रांगा असतात — त्या <tr> (table row) ने बनतात. प्रत्येक रांगेच्या आत घटक असतात.\nघटक दोन प्रकारचे: <th> म्हणजे header (शीर्षक) आणि <td> म्हणजे data (आकडा/मजकूर).\n<tr>\n  <th>नाव</th>\n  <td>रमेश</td>\n</tr>\nप्रथम रांगेत th दिल्यास ब्राउझर शीर्षक ठळक आणि मध्यवर्ती दाखवतो.\nसारणी डेटासाठी; layout साठी नाही — हा सुवर्ण नियम आठवा.", code: `<table>
  <tr>
    <th>भाषा</th>
    <th>वक्ते</th>
  </tr>
  <tr>
    <td>मराठी</td>
    <td>९५ कोटी</td>
  </tr>
  <tr>
    <td>हिंदी</td>
    <td>६० कोटी</td>
  </tr>
</table>`, codeLanguage: "html" },
            { title: "2. thead, tbody, tfoot", content: "मोठ्या सारणीत रचना तीन भाग करू शकतो: thead, tbody, tfoot.\n<thead> शीर्षक रांगा. <tbody> मुख्य डेटा. <tfoot> शेवटचा सारांश.\nहा विभाग संगणकाला कळतो — printing, scrolling सारख्या वागणुकीला आधार.\nthead मध्ये चालतो tr आणि th; tbody मध्ये tr आणि td.\ncopy सारणी ही एकाची नेटकी; पण thead-tbody-tfoot दिल्यावर रचना वाचनीय होते.", code: `<table>
  <thead>
    <tr><th>महिना</th><th>पाऊस</th></tr>
  </thead>
  <tbody>
    <tr><td>जून</td><td>५० मिमी</td></tr>
    <tr><td>जुलै</td><td>८० मिमी</td></tr>
  </tbody>
  <tfoot>
    <tr><td>एकूण</td><td>१३० मिमी</td></tr>
  </tfoot>
</table>`, codeLanguage: "html" },
            { title: "3. caption आणि colgroup", content: "सारणीचं वर्णन caption देते — ते सारणीच्या वर दिसतं.\n<caption>एकूण प्रवेश</caption> — सारणीला शीर्षक.\n<colgroup> स्तंभांची गटांना माहिती देतो. <col span=\"2\" style=\"...\"> असे दोन स्तंभ एकत्र.\ncolgroup चा उपयोग styling सारखे गुण देतानाच नाही; स्तंभ गटबद्ध करतो.\ncaption आणि colgroup दोन्ही table च्या सुरुवातीला लिहितात.", code: `<table>
  <caption>स्पर्धेचे गुण</caption>
  <colgroup>
    <col>
    <col style="background:#f4f4f4">
  </colgroup>
  <tr>
    <th>स्पर्धक</th>
    <th>गुण</th>
  </tr>
  <tr>
    <td>आर्या</td>
    <td>९२</td>
  </tr>
</table>`, codeLanguage: "html" },
            { title: "4. colspan आणि rowspan", content: "सारणीत एक घटक अनेक स्तंभ किंवा रांगा व्यापू शकतो.\ncolspan=\"2\" म्हणजे घटक दोन स्तंभांचं क्षेत्र घेतो. उदा. <td colspan=\"2\">.\nrowspan=\"2\" म्हणजे घटक दोन रांगांच्या उंचीचा. उत्पादनाचा आराखडा, कॅलेंडर — यांत असा वापर.\nसमान रांगेत जेवढा स्तंभ विस्तार, तेवढे घटक कमी लिहितात. मोजणी बरोबर ठेवा.\nपटकन चुकायची शक्यता — सारणी काढून मोजून लिहा.", code: `<table>
  <tr>
    <th>नाव</th>
    <th colspan="2">पत्ता</th>
  </tr>
  <tr>
    <td>राम</td>
    <td>पुणे</td>
    <td>पिंपरी</td>
  </tr>
  <tr>
    <td rowspan="2">शाळा</td>
    <td>इयत्ता ७</td>
    <td>इयत्ता ८</td>
  </tr>
</table>`, codeLanguage: "html" },
            { title: "5. प्रवेशयोग्य सारणी", content: "सारणी वापरताना screen reader ला रचना कळणं गरजेचं.\nthead-th वापरा जेणेकरून header प्रत्येक cell ला जोडला जाईल.\nscope attribute: <th scope=\"col\"> किंवा scope=\"row\" — header कोणत्या दिशेला लागू.\nही सवय केल्यावर तुमची सारणी scientific way सर्वांना वाचता येते.", code: `<table>
  <caption>मासिक विक्री</caption>
  <thead>
    <tr>
      <th scope="col">उत्पादन</th>
      <th scope="col">युनिट</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">पेन</th>
      <td>१२०</td>
    </tr>
    <tr>
      <th scope="row">वही</th>
      <td>४५</td>
    </tr>
  </tbody>
</table>`, codeLanguage: "html" },
            { title: "6. अर्थ आणि सावधानता", content: "सारणी ही संरचनात्मक साधन नाही — ती डेटा संरचना आहे.\nlayout साठी table वापरली असती तर जुन्या जमान्यात; आज CSS layout sांभाळतो.\nलहान आकडा, तुलना, किंवा वेळापत्रक — हेच table चे क्षेत्र.\nमजकूराबरोबर table मध्ये थोड्याशा आकडे शक्य; पण दिसणे CSS संभाळेल.\nHTML मध्ये आकडा मांडा, मग तो कोणत्याही रूपात वाजवता येतो.", code: `<table>
  <tr>
    <th>दिवस</th>
    <th>सकाळ</th>
    <th>संध्याकाळ</th>
  </tr>
  <tr>
    <td>सोम</td>
    <td>गणित</td>
    <td>विज्ञान</td>
  </tr>
  <tr>
    <td>मंगळ</td>
    <td>मराठी</td>
    <td>इतिहास</td>
  </tr>
</table>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता मासिक आत प्रवेश सारणी बनवूया.\nthe-head मध्ये दिवस आणि वेळ. tbody मध्ये दोन-तीन रांगा विषयांच्या.\neka घटकाला colspan किंवा rowspan द्या.\ncaption आणि scope वापरा. अर्थ असेल तर.\nसारणी संपल्यावर डेटा व्यवस्थित, मराठीतून वेब सादर होतो.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>आठवड्याचे वेळापत्रक</title>
  </head>
  <body>
    <table>
      <caption>अभ्यास वेळापत्रक</caption>
      <thead>
        <tr><th scope="col">दिवस</th><th scope="col">विषय</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">सोमवार</th><td>मराठी</td></tr>
        <tr><th scope="row">मंगळवार</th><td>गणित</td></tr>
      </tbody>
    </table>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["th म्हणजे काय?", "the-एड का वापरतात?", "colspan काय करतो?", "caption कुठे लिहितात?"],
        quiz: [
            { question: "सारणीचा base tag?", options: ["table", "tbl", "grid", "list"], correct: 0 },
            { question: "शीर्षक cell?", options: ["th", "td", "tr", "ta"], correct: 0 },
            { question: "दोन स्तंभ विस्तार?", options: ["colspan=\"2\"", "rowspan=\"2\"", "width=\"2\"", "span=\"2\""], correct: 0 },
            { question: "सारणीचं शीर्षक?", options: ["caption", "title", "header", "note"], correct: 0 },
        ],
        challenge: {
            prompt: "the-एड आणि tfoot सह सारणी बनवा",
            starterCode: `<table>
  <tr><th>नाव</th></tr>
  <tr><td>सीता</td></tr>
</table>`,
            expectedOutput: "Renders सारणी",
        },
        interviewQuestions: ["scope काय सांगतो?", "layout table का नको?"],
        related: ["html-lists", "html-forms"],
        prev: "html-lists",
        next: "html-forms",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-forms",
        categoryId: "web",
        title: "Forms - आकडा घेणे",
        marathiTitle: "Forms - मजकूर पाठवणे आणि मिळवणे",
        level: "beginner",
        minutes: 18,
        summary: "form, label, input, textarea, select, option, fieldset, legend, button.",
        sections: [
            { title: "1. form ची ओळख", content: "वेबपेजकडून माहिती घेण्याची व्यवस्था म्हणजे form. प्रश्नावली, लॉगिन, नोंदणी — सर्व form आहेत.\n<form> रचनेत इनपुटचे विविध प्रकार असतात. submit केल्यावर माहिती पाठवली जाते.\nform मध्ये कित्येक controls: input (बॉक्स), textarea (परिच्छेद), select (यादी), button.\nप्रत्येक control ला name द्या — तेच पाठवलेल्या डेटाचं ओळखपत्र.\nआतासाठी form कसा दिसतो ते पाहू; server ला data कसा जातो पुढे शिकू.", code: `<form>
  <p>
    <label>तुमचं नाव:
      <input name="नाव">
    </label>
  </p>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "2. label ची जोडणी", content: "प्रत्येक input ला label हवा — तो वर्णन देतो आणि प्रवेशयोग्यता वाढवतो.\nदोन प्रकार: <label for=\"id\">... तर input मध्ये id;\nकिंवा <label> च्या आतच input ठेवा. दोन्ही सर्वसाधारण चालतात.\nlabel वर क्लिक केल्यावर input फोकस होतो — मोठ्या स्क्रीनवर उपयुक्त.\nfor आणि id बरोबर जुळले पाहिजे; चुकीचा ref म्हणजे योग्य मदत नाही.", code: `<label for="वय">तुमचं वय:</label>
<input id="वय" name="वय" type="number">`, codeLanguage: "html" },
            { title: "3. input आणि textarea", content: "एक ओळींचा मजकूर घ्यायला input; अनेक ओळींचा घ्यायला textarea.\n<input> मध्ये type ठरवतो काय दाखवायचं: text (शब्द), password (गुप्त), email, number...\n<textarea> मध्ये रुंदी-उंची cols, rows ने देतात. मजकूर मागील memories साठी मोठी.\nplaceholder मध्ये वरील दाखवायची नमुना ओळ; परंतु ती label बदलत नाही.", code: `<label for="टिप्पणी">अभिप्राय:</label>
<textarea id="टिप्पणी" name="टिप्पणी" rows="4" cols="40" placeholder="तुमचे मत इथे लिहा"></textarea>`, codeLanguage: "html" },
            { title: "4. select, option, optgroup", content: "संकुचित यादीतून एक निवड घ्यायची असेल तर select उपयुक्त.\n<select name=\"शहर\"> आणि आत प्रत्येक निवड <option value=\"पुणे\">पुणे</option>.\nvalue हे खऱ्या मूल्य असते जे server ला जातं; दिसणारा मजकूर वेगळा असू शकतो.\nमोठ्या याद्यांना optgroup ने गट द्यावा: शहरं, राज्यं असे.\nmultiple attribute दिल्यास अनेक निवड; परंतु तो सहसा गोंधळतो.", code: `<label for="राज्य">राज्य:</label>
<select id="राज्य" name="राज्य">
  <option value="महाराष्ट्र">महाराष्ट्र</option>
  <option value="कर्नाटक">कर्नाटक</option>
  <option value="गोवा">गोवा</option>
</select>`, codeLanguage: "html" },
            { title: "5. fieldset आणि legend", content: "form च्या आतच उपगट करायचे असतील तर fieldset घालतात.\n<fieldset> बॉक्स सारखी रचना काढतो; <legend> त्याचं शीर्षक.\nउदा. संपर्क माहिती — नाव, फोन, पत्ता एका fieldset मध्ये.\nहे वाचकाला form मधून मार्ग दाखवतं आणि screen reader लाही.\nनेहमी legend रिकामा नको; अर्थपूर्ण नाव द्या.", code: `<fieldset>
  <legend>संपर्क माहिती</legend>
  <label for="नाव">नाव:</label>
  <input id="नाव" name="नाव"><br>
  <label for="फोन">फोन:</label>
  <input id="फोन" name="फोन" type="tel">
</fieldset>`, codeLanguage: "html" },
            { title: "6. button प्रकार", content: "form च्या शेवटी क्रिया button ने होते. <button> लवचिक.\ntype=\"submit\" form पाठवतो; type=\"reset\" मुल्ये रिकामी; type=\"button\" plain बटण.\nआतील मजकूर वेगळ्या ओळीत येऊ शकतो; <button> मध्ये सर्व काही चालते.\nजुन्या <input type=\"submit\"> पर्यायही चालतो; पण button अधिक लवचिक.\nचांगलं नाव द्या: \"नोंदणी पाठवा\" — काय होते ते स्पष्ट.", code: `<form>
  <label for="ईमेल">ईमेल:</label>
  <input id="ईमेल" name="ईमेल" type="email"><br>
  <button type="submit">सदस्य व्हा</button>
  <button type="reset">रिकामे करा</button>
  <button type="button">नोट करा</button>
</form>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता एक संपूर्ण नोंदणी form रचूया.\nनाव input text, ईमेल input email, संदेश textarea.\nराज्य select, एक checkbox सहमती. सर्व label for सोबत.\nशेवटी submit आणि reset.\nहा form पुढच्या धड्यांत अधिक भरला जाईल.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>प्रोफाइल</title>
  </head>
  <body>
    <h1>नवीन सदस्य</h1>
    <form>
      <label for="नाव">नाव:</label>
      <input id="नाव" name="नाव" type="text"><br>
      <label for="ईमेल">ईमेल:</label>
      <input id="ईमेल" name="ईमेल" type="email"><br>
      <label for="शहर">शहर:</label>
      <select id="शहर" name="शहर">
        <option value="pune">पुणे</option>
        <option value="mumbai">मुंबई</option>
      </select><br>
      <label><input type="checkbox" name="सहमत"> मी नियम मान्य करतो</label><br>
      <button type="submit">नोंदणी करा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["name attribute का महत्त्वाचा?", "label चे दोन प्रकार?", "select मध्ये value काय?", "fieldset कधी वापरतात?"],
        quiz: [
            { question: "माहिती पाठवणारा tag?", options: ["form", "input", "button", "field"], correct: 0 },
            { question: "अनेक ओळींचे input?", options: ["textarea", "input", "select", "option"], correct: 0 },
            { question: "यादीतून निवड करणारा?", options: ["select", "input", "textarea", "check"], correct: 0 },
            { question: "form पाठवणारा button?", options: ["type=\"submit\"", "type=\"clear\"", "type=\"send\"", "type=\"go\""], correct: 0 },
        ],
        challenge: {
            prompt: "label आणि textarea सह form बनवा",
            starterCode: `<form>
  <label for="m">संदेश:</label>
  <textarea id="m" name="m"></textarea>
</form>`,
            expectedOutput: "Renders फॉर्म",
        },
        interviewQuestions: ["label- input जोड कशी?", "legend काय देतो?"],
        related: ["html-tables", "html-input-types"],
        prev: "html-tables",
        next: "html-input-types",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-input-types",
        categoryId: "web",
        title: "Input Types - प्रत्येक input साठी प्रकार",
        marathiTitle: "Input Types - योग्य type निवडण्याचे सौंदर्य",
        level: "beginner",
        minutes: 18,
        summary: "text, password, email, number, tel, url, search, date, time, color, range, checkbox, radio, file.",
        sections: [
            { title: "1. text, password, email", content: "input चे type चे मूल कोणत्या प्रकारचा डेटा घ्यायचा ते सांगतो.\ntype=\"text\" साधा मजकूर; सर्वात सामान्य.\ntype=\"password\" मजकूर लपवतो — बिंदू दाखवतो.\ntype=\"email\" ईमेलचा मर्यादा तपासतो; ब्राउझर आपोआप तपासतो.\nयोग्य type दिल्यावर मोबाइलवर keyboard बदलतं (उदा. email सह @ की). हेच मोठे फायदे.", code: `<label>नाव: <input type="text" name="नाव"></label>
<label>पासवर्ड: <input type="password" name="पास"></label>
<label>ईमेल: <input type="email" name="मेल"></label>`, codeLanguage: "html" },
            { title: "2. number, tel, url, search", content: "each डेटा प्रकारासाठी नेमका type शोधा.\ntype=\"number\" फक्त अंक; वर-खाली बाण देते. min, max आकडे नियंत्रित.\ntype=\"tel\" फोन नंबर; मोबाइलवर संख्या keypad.\ntype=\"url\" दुव्याचा आराखडा; ब्राउझर URL तपासतो.\ntype=\"search\" शोध पेटी — ब्राउझर clean बटण देतो.\nही तिन्ही एकाच structural element — पण प्रकार निवडल्याने अनुभव प्रगत.", code: `<label>वय: <input type="number" name="वय" min="1" max="120"></label>
<label>फोन: <input type="tel" name="फोन"></label>
<label>वेब: <input type="url" name="वेब"></label>
<label>शोध: <input type="search" name="शोध"></label>`, codeLanguage: "html" },
            { title: "3. date, time, month, week", content: "तारीख आणि वेळ घेण्यासाठी विशेष types आहेत.\ntype=\"date\" कॅलेंडर देते. type=\"time\" घड्याळ वेळ.\ntype=\"datetime-local\" दोन्ही एकत्र.\ntype=\"month\" महिना-वर्ष. type=\"week\" आठवडा-वर्ष.\nही control फॉरमॅट निरनिराळ्या ब्राउझरमध्ये वेगवेगळंते दिसतं; परंतु value मानक ISO format ने नोंदतं.\nडेटा वेळ form मध्ये ठीक; शैली CSS साठी वेगळी ठेवा.", code: `<label>जन्मतारीख:
  <input type="date" name="तारीख"></label>
<label>वेळ:
  <input type="time" name="वेळ"></label>
<label>मीटिंग:
  <input type="datetime-local" name="मीट"></label>`, codeLanguage: "html" },
            { title: "4. checkbox आणि radio", content: "निवडींचे दोन प्रकार: checkbox आणि radio.\ncheckbox — एक किंवा अनेक निवड. प्रत्येक independent वर.\nradio — एकच निवड. त्याच्या गटात name एकसारखे ठेवा.\nradio गटात भिन्न name असेल तर स्वतंत्र गट. दुरुस्ती गटासाठी समान name.\nchecked attribute ने पूर्वनिवड; value ने पाठवणारा आकडा.", code: `<p>आवडी:</p>
<label><input type="checkbox" name="विषय" value="गणित"> गणित</label>
<label><input type="checkbox" name="विषय" value="विज्ञान"> विज्ञान</label>
<p>शिफ्ट:</p>
<label><input type="radio" name="शिफ्ट" value="सकाळ" checked> सकाळ</label>
<label><input type="radio" name="शिफ्ट" value="संध्याकाळ"> संध्याकाळ</label>`, codeLanguage: "html" },
            { title: "5. color, range, file", content: "रंग, श्रेणी आणि फाइल — तिन्ही अशा types जे अनुभव रंगवतात.\ntype=\"color\" रंग निवडक पटल देतो. value चे नियम: #rrggbb.\ntype=\"range\" फिसकट स्लाइडर — min, max, step. लवचिक सर्व्हाय.\ntype=\"file\" फाइल निवडण्याचा संवाद. accept attribute ने स्वरूप मर्यादा.\nfile चा साठा करताना form मध्ये enctype आवश्यक — पुढे server धड्यात.\nही प्रत्येक property नेमकी, तरीही simple वापरकर्ता अनुभव.", code: `<label>आवडता रंग:
  <input type="color" name="रंग" value="#ff0000"></label>
<label>आवाज:
  <input type="range" name="आवाज" min="0" max="100" value="50"></label>
<label>पासपोर्ट फोटो:
  <input type="file" name="फोटो" accept="image/*"></label>`, codeLanguage: "html" },
            { title: "6. hidden आणि button types", content: "form मध्ये काही input नेमके दिसत नाहीत.\ntype=\"hidden\" मूल्य पाठवतो, पण दाखवत नाही. token, id, मागील संदर्भ.\nवापरकर्त्याला दिसल्याशिवाय status पाठवण्यासाठी hidden उत्तम.\ntype=\"image\" चित्र-बटण; सबमिट करताना क्लिक झालेल्या बिंदूचे आकडेही.\nपरंतु hidden मध्ये अति वापर नको — मूल्ये गुप्त नाहीत, फक्त झाकलेली.\nसाधेपणा राखा, आवश्यकतेतच hidden गोप्यांकन.", code: `<input type="hidden" name="session-id" value="xyz123">
<button type="submit">पाठवा</button>
<button type="reset">रिकामे</button>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता एक आवडत्या गोष्टींचं पेज input types ने रचा.\nनाव text, वय number, रंग color, इच्छा checkbox किंवा radio.\nएक date आणि एक range वापरा.\nlabel सोबत प्रत्येक control, name योग्य.\nया रचनेतून type चे प्रकार प्रत्यक्ष वापरताना दिसतात.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>माझी निवड</title>
  </head>
  <body>
    <form>
      <label>नाव: <input type="text" name="नाव"></label><br>
      <label>वय: <input type="number" name="वय" min="1" max="120"></label><br>
      <label>आवडता रंग: <input type="color" name="रंग"></label><br>
      <label>वेळ: <input type="time" name="वेळ"></label><br>
      <label><input type="radio" name="शिफ्ट" value="सकाळ" checked> सकाळ</label>
      <label><input type="radio" name="शिफ्ट" value="रात्री"> रात्री</label><br>
      <button type="submit">साठवा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["email type काय तपासतो?", "radio गटात name का समान?", "range चे attributes?", "hidden कशाला वापरतात?"],
        quiz: [
            { question: "डेटा लपवणारा input?", options: ["hidden", "private", "mask", "secret"], correct: 0 },
            { question: "एकच निवडीचा?", options: ["radio", "checkbox", "toggle", "switch"], correct: 0 },
            { question: "फोन नंबरसाठी?", options: ["tel", "phone", "call", "num"], correct: 0 },
            { question: "रंग निवडण्यासाठी?", options: ["color", "pick", "rgb", "hue"], correct: 0 },
        ],
        challenge: {
            prompt: "radio गट आणि color सह form बनवा",
            starterCode: `<form>
  <label><input type="radio" name="g" value="a"> अ</label>
  <label><input type="radio" name="g" value="b"> ब</label>
</form>`,
            expectedOutput: "Renders रेडिओ गट",
        },
        interviewQuestions: ["checkbox व ideo मध्ये फरक?", "accept काय मर्यादा देतो?"],
        related: ["html-forms", "html-form-attributes"],
        prev: "html-forms",
        next: "html-form-attributes",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-form-attributes",
        categoryId: "web",
        title: "Form Attributes - नियंत्रण सविस्तर",
        marathiTitle: "Form Attributes - action, method, pattern आणि बाकी",
        level: "beginner",
        minutes: 18,
        summary: "action, method, name, value, placeholder, required, disabled, readonly, min, max, step, pattern, accept.",
        sections: [
            { title: "1. action आणि method", content: "form कुठे आणि कसे पाठवेल हे action आणि method ठरवतात.\naction — माहिती ज्या पत्त्यावर जाईल तो URL.\nmethod — पाठवण्याचा मार्ग: GET किंवा POST.\nGET URL मध्ये मूल्य जोडतो — शोध, लिंक. POST शरीरात ठेवतो — गुप्त, मोठा डेटा.\n<form action=\"/सूची\" method=\"post\"> — अशी सामान्य रचना.\ncurrent पेजवरच सोडायचं तर action रिकामे ठेवतात.", code: `<form action="/api/नोंदणी" method="post">
  <label>नाव: <input name="नाव"></label>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "2. name आणि value", content: "form चे खरे कार्य name मुळे होतं. प्रत्येक control च्या name ने डेटा ओळखला जातो.\n<input name=\"वय\"> — server ला \"वय\" सोबत मूल्य पाठवतं.\nvalue म्हणजे पूर्वनिर्धारित किंवा पाठवला जाणारा आकडा. text साठी सुरुवात मूल्य.\ncheckbox/radio मध्ये value पाठवली जाते; न दिल्यास \"on\" जातो.\nदोन control चे name समान असल्यास अनेक मूल्ये — सामान्य checkbox साठी.", code: `<input type="checkbox" name="विषय" value="गणित">
<input type="hidden" name="प्रकार" value="er">
<label>शहर:
  <input name="शहर" value="पुणे">
</label>`, codeLanguage: "html" },
            { title: "3. placeholder आणि required", content: "placeholder नमुना मजकूर दाखवतो — पेटी रिकामी असताना. तो label नव्हे.\nplaceholder=\"उदा. राम\" — लिहिताच निघून जातो. म्हणून label वेगळा ठेवा.\nrequired attribute म्हणण्याने ती पेटी बंधनकारक. रिकामी पाठवली तर ब्राउझर थांबवतो.\nrequired सोबत संदेश चालतो आणि screen reader लाही कळतं.\nआवश्यक पेटी ओळखण्यासाठी * चिन्ह वापरतात; परंतु legend आणि मजकूर स्पष्ट हवा.", code: `<label for="नाव">नाव:</label>
<input id="नाव" name="नाव" required placeholder="तुमचं पूर्ण नाव">`, codeLanguage: "html" },
            { title: "4. disabled आणि readonly", content: "कधीतरी control काम करू नये, पण दिसावा — disabled.\ndisabled control पाठवला जात नाही आणि संवाद साधत नाही.\nreadonly फक्त वाचण्यासाठी — मूल्य पाठवते, पण बदल होत नाही.\nसर्व्हरकडून मिळालेले पूर्व value दाखवायचे असतील तर readonly उत्तम.\nफरक: disabled निष्क्रिय + न पाठवलं; readonly सक्रिय दिसणारा + पाठविलेले.", code: `<input name="नाव" value="राम" readonly>
<input name="सदस्य" value="प्रीमियम" disabled>
<label>सदस्यता:
  <input name="स्थिती" value="सक्रिय" readonly>
</label>`, codeLanguage: "html" },
            { title: "5. min, max, step आणि length", content: "संख्येच्या आणि मजकुराच्या मर्यादा attribute ने देतात.\nmin आणि max — संख्या/तारीख/श्रेणीची सीमा.\nstep — पुढील पायरी. <input type=\"number\" step=\"5\"> म्हणजे ०,५,१०...\nmaxlength — मजकुराच्या लांबीची कमाल; ती मर्यादा कठोर.\nminlength — किमान लांबी; pattern इतर स्वरूप नियंत्रण.\nही मर्यादा वापरकर्त्याला चुकीपासून वाचवतात.", code: `<label>वय:
  <input type="number" name="वय" min="18" max="99"></label>
<label>पिन:
  <input type="text" name="पिन" minlength="4" maxlength="6"></label>
<label>रेटिंग:
  <input type="range" name="रेटिंग" min="0" max="5" step="1"></label>`, codeLanguage: "html" },
            { title: "6. pattern आणि accept", content: "मजकूराचे निश्चित स्वरूप तपासण्यासाठी pattern attribute.\npattern वर regex लिहितात. उदा. [0-9]{6} म्हणजे सहा अंक.\ntype=\"email\" अगर tel मध्ये स्वतःचे नियम आधीच असतात.\naccept फाइल type मर्यादा: accept=\".pdf,image/*\"\nकठीण regex फक्त तेव्हाच, जेव्हा जुळवणी अर्थपूर्ण. वापरकर्त्याला पैटर्न सांगा.", code: `<label for="पिन">पिन कोड:</label>
<input id="पिन" name="पिन" pattern="[0-9]{6}" placeholder="6 अंक">
<label>कागदपत्र:
  <input type="file" name="दस्त" accept=".pdf,image/*"></label>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता attributes ने सुबक नोंदणी रचा.\nनाव required, वय min-max, ईमेल pattern नियम.\nपासवर्ड minlength, फोन pattern अंकांचा.\ndisabled एक, readonly एक — नोंदणी प्रकल्प.\nसाइट submit करून चुका शोधा — त्या प्रत्यक्ष परिणाम.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>प्रोफाइल</title>
  </head>
  <body>
    <form action="#" method="post">
      <label>नाव: <input name="नाव" required></label><br>
      <label>ईमेल: <input type="email" name="मेल" required></label><br>
      <label>वय: <input type="number" name="वय" min="12" max="99"></label><br>
      <label>पिन: <input name="पिन" pattern="[0-9]{6}"></label><br>
      <button type="submit">पाठवा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["GET आणि POST मध्ये फरक?", "required काय करतो?", "disabled आणि readonly मध्ये फरक?", "pattern काय तपासतो?"],
        quiz: [
            { question: "form माहिती कुठे पाठवतो?", options: ["action", "method", "target", "send"], correct: 0 },
            { question: "बंधनकारक input?", options: ["required", "force", "ness", "must"], correct: 0 },
            { question: "पाठवला न जाणारा?", options: ["disabled", "readonly", "lock", "freeze"], correct: 0 },
            { question: "पैटर्न regex?", options: ["pattern", "mask", "format", "mode"], correct: 0 },
        ],
        challenge: {
            prompt: "required आणि min-max सह form बनवा",
            starterCode: `<form>
  <label>वय:
    <input type="number" name="वय" min="1" max="120">
  </label>
</form>`,
            expectedOutput: "Renders मर्यादित form",
        },
        interviewQuestions: ["GET कधी वापरतात?", "maxlength कशासाठी?"],
        related: ["html-input-types", "html-form-validation"],
        prev: "html-input-types",
        next: "html-form-validation",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-form-validation",
        categoryId: "web",
        title: "Form Validation - चुका थांबवणे",
        marathiTitle: "Form Validation - ब्राउझरची तपासणी",
        level: "beginner",
        minutes: 18,
        summary: "native validation, required, type, pattern, min/max, step, validation API, custom validity.",
        sections: [
            { title: "1. validation म्हणजे काय?", content: "चुकीचा डेटा server पर्यंत पोहोचू नये म्हणून तपासणी करायची म्हणजे validation.\nब्राउझर स्वतः अनेक चुका पकडू शकतो — याला native validation.\nrequired रिकामे थांबवते; type email वेडा मजकूर नाकारतो.\nसर्व्हरवर जाण्यापूर्वी ब्राउझर संदेश दाखवतो — वापरकर्त्याला लगेच कळते.\nvalidation म्हणजे ब्लॉक नाही; तो मार्गदर्शन आहे — प्रत्येक चुका पटकन सुधारता येते.", code: `<form>
  <label for="नाव">नाव:</label>
  <input id="नाव" name="नाव" required>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "2. ब्राउझर तपासणी कशी?", content: "ब्राउझर प्रत्येक control ची constraints तपासतो.\nrequired सह रिकामा — लाल संदेश: \"कृपया ही फील्ड भरा\".\ntype=\"email\" मध्ये @ नसेल — ईमेल चुकल्याचा संदेश.\nसंदेश भाषा ब्राउझर आणि device भाषेनुसार. या तपासण्या बंद करता येतात — novalidate attribute ने बंद केल्या जाऊ शकतात.\nवापरकर्त्याने जुळवणारे संदेश किंवा सुधारणे आवश्यक असेल तर स्वतःची नियंत्रण घ्या.", code: `<form>
  <label for="ईमेल">ईमेल:</label>
  <input id="ईमेल" name="ईमेल" type="email" required>
  <label for="वय">वय:</label>
  <input id="वय" name="वय" type="number" min="18" max="99">
  <button type="submit">तपासा</button>
</form>`, codeLanguage: "html" },
            { title: "3. pattern आणि अंकांसह नियंत्रण", content: "स्वतःचे नियम लिहिण्यासाठी pattern attribute.\npattern=\"[1-9][0-9]{5}\" — पिनचं स्वरूप. फक्त तेच मान्य.\n[0-9] — अंक; {n} — अचूक संख्या; $ आधार सुरु-अंत.\nटायटल मजकुरात pattern समजावा: title=\"6 अंकांचा पिन\".\nजटिल नियम टाळा; सोप्या आणि उपयोगी पैटर्नना नित्यप्रति वापरा.", code: `<label for="पिन">पिन कोड:</label>
<input id="पिन" name="पिन" pattern="[0-9]{6}"
       title="6 अंकांचा पिन" placeholder="123456">
<label for="फोन">फोन (10 अंक):</label>
<input id="फोन" name="फोन" type="tel"
       pattern="[0-9]{10}" title="10 अंकांचा नंबर">`, codeLanguage: "html" },
            { title: "4. min, max, step पासून नियम", content: "संख्येवर नियंत्रण min, max, step ने.\nmin प्रौढपणा, max वयाची कमाल, step पायरी निश्चित.\nतारखांवरही min/max लागू — अर्ज तारीख पेटीवर.\nstep नुसार value मध्ये किती फरक असू शकतो.\nब्राउझरचा संदेश वाचकाला मर्यादेची कल्पना देते.", code: `<label for="वय">वय:</label>
<input id="वय" name="वय" type="number" min="18" max="60" step="1">
<label for="तारीख">जन्मतारीख:</label>
<input id="तारीख" name="तारीख" type="date" min="1926-01-01" max="2026-12-31">`, codeLanguage: "html" },
            { title: "5. गट आणि form स्तरावर नियम", content: "fieldset मधील required सर्व control एकत्र तपासले जातात.\ncheckbox required कधीकधी गटाबाहेर असा — प्रत्येक control ला लागू.", code: `<form>
  <fieldset>
    <legend>संपर्क</legend>
    <label>ईमेल:
      <input type="email" name="मेल" required></label>
  </fieldset>
  <label>
    <input type="checkbox" name="अटी" required> अटी मान्य
  </label>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "6. validation API ची ओळख", content: "HTML attributes पुरेसे नसतील तर JavaScript ची validation API.\ncheckValidity() — control तपासतो आणि boolean देतो.\nreportValidity() — ब्राउझरचा संदेश दाखवतो.\nsetCustomValidity() — तुमचा स्वत:चा संदेश देतो.\nHTML ने सुरुवात करा; आवश्यकतेनुसार API जोडा. सर्व तपासण्या browser आणि server दोन्हीकडे अंतिम.", code: `<form>
  <label for="पास">पासवर्ड:</label>
  <input id="पास" name="पास" type="password" minlength="6" required>
  <label for="पास2">पुन्हा पासवर्ड:</label>
  <input id="पास2" name="पास2" type="password" minlength="6" required>
  <button type="submit">साइनअप</button>
</form>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता मजबूत नोंदणी form चा प्रश्न सोडवा.\nईमेल required + type email. पासवर्ड minlength 8.\nपिन pattern, वय min-max, फोन 10 अंक नियम.\ncheckbox अटी required. त्या प्रत्येक झूम परत स्पष्ट.\nहा form सबमिट करून चुकांवर संदेश पहा — तोच वास्तविक अनुभव.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>मजबूत नोंदणी</title>
  </head>
  <body>
    <form action="#" method="post">
      <label>ईमेल:
        <input type="email" name="मेल" required></label><br>
      <label>पासवर्ड:
        <input type="password" name="पास" minlength="8" required></label><br>
      <label>पिन:
        <input name="पिन" pattern="[0-9]{6}" required></label><br>
      <label>
        <input type="checkbox" name="अटी" required> अटी मान्य करा
      </label><br>
      <button type="submit">नोंदणी करा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["native validation काय तपासतो?", "pattern कधी वापरतात?", "novalidate काय करतं?", "reportValidity काय दाखवतो?"],
        quiz: [
            { question: "required काय थांबवतो?", options: ["रिकामे फील्ड", "मोठा नंबर", "आडवे मजकूर", "अपलोड"], correct: 0 },
            { question: "email स्वरूप तपासणारा?", options: ["type=\"email\"", "type=\"text\"", "type=\"name\"", "type=\"mail\""], correct: 0 },
            { question: "6 अंकांचा नियम?", options: ["pattern=\"[0-9]{6}\"", "max=\"6\"", "min=\"6\"", "step=\"6\""], correct: 0 },
            { question: "स्व:चा संदेश देतो?", options: ["setCustomValidity", "checkValidity", "required", "invalid"], correct: 0 },
        ],
        challenge: {
            prompt: "required + pattern सह form बनवा",
            starterCode: `<form>
  <label>पिन:
    <input required pattern="[0-9]{6}">
  </label>
</form>`,
            expectedOutput: "Renders सत्यापित form",
        },
        interviewQuestions: ["server validation का गरजेचं?", "novalidate कधी?"],
        related: ["html-form-attributes", "html-forms-project"],
        prev: "html-form-attributes",
        next: "html-forms-project",
        levelLabel: exports.HTML1_LABEL,
    },
    {
        slug: "html-forms-project",
        categoryId: "web",
        title: "Forms Project - संपूर्ण नोंदणी पेज",
        marathiTitle: "Forms Project - सगळे विषय एकत्र सराव",
        level: "beginner",
        minutes: 18,
        summary: "Form project: structure, labels, all input types, attributes, validation, accessible submit.",
        sections: [
            { title: "1. प्रकल्पाची कल्पना", content: "आता आपण सगळे ज्ञान एकत्र आणून एक संपूर्ण नोंदणी पेज बनवूयाच. हे एक वास्तविक login फर्मसारखे असेल.\nनिर्माण करायच्या घटकांना निश्चित करा: नाव, ईमेल, पासवर्ड, शहर, आवड, आणि अटी.\nप्रत्येक घटक label ने; name आणि योग्य type ने.\nप्रथम structure स्वतंत्रपणे तयार करा — क्रियाशीलता नंतर.\nवाचनीय संरचना हीच पहिली अचूकता.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>नोंदणी पेज</title>
  </head>
  <body>
    <h1>नवीन खाते</h1>
    <form action="#" method="post">
      <p><label for="नाव">नाव:</label>
      <input id="नाव" name="नाव" type="text" required></p>
      <button type="submit">नोंदणी करा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
            { title: "2. संपर्क तपशील", content: "आता संपर्क माहिती जोडा — ईमेल आणि फोन.\nईमेल required + type email. फोन pattern ने 10 अंक.\nप्रत्येक label चं clear नाव. आवश्यक चिन्हासाठी * टीप.\nfieldset मध्ये हे दोन विभाग गटबद्ध करा — legend असलेला.\nआवश्यकतेनुसार मर्यादा लावा.", code: `<fieldset>
  <legend>संपर्क</legend>
  <label for="ईमेल">ईमेल:</label>
  <input id="ईमेल" name="ईमेल" type="email" required>
  <label for="फोन">फोन:</label>
  <input id="फोन" name="फोन" type="tel" pattern="[0-9]{10}" title="10 अंक">
</fieldset>`, codeLanguage: "html" },
            { title: "3. पासवर्ड आणि सुरक्षा", content: "पासवर्ड घटक योग्य मार्गाने.\ntype=\"password\" — मजकूर लपवला जातो.\nminlength=\"8\" — किमान लांबीचा नियम.\npattern ला वेळी special character मर्यादा देताना काळजी.\nसुरक्षित पर्याय म्हणून पुन्हा पासवर्ड तपासणीसाठी दुसरा घटक आवश्यक करा.", code: `<label for="पास">पासवर्ड:</label>
<input id="पास" name="पास" type="password" minlength="8" required>
<label for="पास2">पासवर्ड पुन्हा:</label>
<input id="पास2" name="पास2" type="password" minlength="8" required>`, codeLanguage: "html" },
            { title: "4. निवडी गटबद्ध", content: "शहर select, आवड checkbox, शिफ्ट radio.\nselect मध्ये option value योग्य.\ncheckbox गटात एकाधिक name सह अनेक निवड; radio एकच.\nप्रत्येक निवडीला label द्या — मोठी लक्ष्य क्षेत्र मिळते.\nगटबद्ध निवड रचना स्पष्ट करते.", code: `<label for="शहर">शहर:</label>
<select id="शहर" name="शहर">
  <option value="pune">पुणे</option>
  <option value="mumbai">मुंबई</option>
  <option value="nagar">नगर</option>
</select>
<p>आवड:</p>
<label><input type="checkbox" name="विषय" value="कला"> कला</label>
<label><input type="checkbox" name="विषय" value="क्रीडा"> क्रीडा</label>
<p>शिफ्ट:</p>
<label><input type="radio" name="शिफ्ट" value="सकाळ" checked> सकाळ</label>
<label><input type="radio" name="शिफ्ट" value="संध्याकाळ"> संध्याकाळ</label>`, codeLanguage: "html" },
            { title: "5. अतिरिक्त घटक", content: "अजून नियंत्रणे जोडा — तारीख, color, range.\nजन्मतारीख date type; रंग color; स्तर range.\nहे घटक मनोरंजक आणि व्यवहारी — पूर्ण फॉर्म उजळतो.\ntextarea ने अतिरिक्त शेरा क्षेत्र.\nप्रत्येक visibility attribute सह set करा.", code: `<label for="जन्म">जन्मतारीख:</label>
<input id="जन्म" name="जन्म" type="date">
<label for="रंग">आवडता रंग:</label>
<input id="रंग" name="रंग" type="color" value="#008000">
<label for="स्तर">अनुभव:</label>
<input id="स्तर" name="स्तर" type="range" min="0" max="10" value="3">
<label for="शेरा">शेरा:</label>
<textarea id="शेरा" name="शेरा" rows="3"></textarea>`, codeLanguage: "html" },
            { title: "6. सबमिटing आणि feedback", content: "नोंदणी पेज संपवताना submit आणि reset.\nsubmit verify — वापरकर्त्याला आश्वासन: \"नोंदणी करा\".\nreset रिकामे — सावध: त्यावर यादृच्छिक click नको.\nअचूक संदेश आणि स्वरूप server जोडताना ठरवतो.\nप्रत्येक पाउल रचनेत बसलेले सुनिश्चित करा.", code: `<button type="submit">नोंदणी करा</button>
<button type="reset">रिकामे करा</button>`, codeLanguage: "html" },
            { title: "Mini Project", content: "शेवटची कसोटी — संपूर्ण नोंदणी पेज एकाच कोडमध्ये.\nशीर्षक, रचना, माहिती, पासवर्ड, निवड, जन्म, शेरा — सर्व.\nप्रत्येक control ला name, label, मर्यादा.\nValidation नुसार form तपासा; चुका पकडा.\nहे पेज रेडी झाल्यावर HTML L1 संपुष्टात — तुम्ही form interfaces सांभाळाल.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>पूर्ण नोंदणी</title>
  </head>
  <body>
    <h1>खाते तयार करा</h1>
    <form action="#" method="post">
      <label for="नाव">नाव *:</label>
      <input id="नाव" name="नाव" type="text" required>

      <label for="ईमेल">ईमेल *:</label>
      <input id="ईमेल" name="ईमेल" type="email" required>

      <label for="पास">पासवर्ड *:</label>
      <input id="पास" name="पास" type="password" minlength="8" required>

      <label for="शहर">शहर:</label>
      <select id="शहर" name="शहर">
        <option value="pune">पुणे</option>
        <option value="mumbai">मुंबई</option>
      </select>

      <fieldset>
        <legend>शिफ्ट</legend>
        <label><input type="radio" name="शिफ्ट" value="सकाळ" checked> सकाळ</label>
        <label><input type="radio" name="शिफ्ट" value="संध्याकाळ"> संध्याकाळ</label>
      </fieldset>

      <label><input type="checkbox" name="अटी" required> अटी मान्य करा</label>

      <button type="submit">नोंदणी करा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["या प्रकल्पात काय संग्रहित?", "password site सुरक्षा कशी?", "radio गटात name कशी?", "मर्यादा कशा ठेवल्या?"],
        quiz: [
            { question: "पेजचा आधार tag?", options: ["form", "body", "input", "table"], correct: 0 },
            { question: "password साठी काय?", options: ["type=\"password\"", "type=\"secret\"", "type=\"pwd\"", "type=\"key\""], correct: 0 },
            { question: "एकच निवड reader?", options: ["radio", "checkbox", "menu", "list"], correct: 0 },
            { question: "रिकामे करणारा बटण?", options: ["type=\"reset\"", "type=\"clear\"", "type=\"wipe\"", "type=\"new\""], correct: 0 },
        ],
        challenge: {
            prompt: "सर्व types सह कोणते नोंदणी form बनवा",
            starterCode: `<form action="#" method="post">
  <label>नाव:
    <input name="नाव" required>
  </label>
</form>`,
            expectedOutput: "Renders complete registration form",
        },
        interviewQuestions: ["पूर्ण फॉर्म बनवून तपासता येईल का?", "error messages कुठे दिसतात?"],
        related: ["html-form-validation", "html-structure"],
        prev: "html-form-validation",
        next: "html-structure",
        levelLabel: exports.HTML1_LABEL,
    },
];
