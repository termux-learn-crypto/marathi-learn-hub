"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlLevel4 = exports.HTML4_LABEL = void 0;
// === HTML · LEVEL 4 — Modern Web Components, PWA आणि Advanced Security ===
exports.HTML4_LABEL = "HTML · Level 4 — Modern Web Components, PWA आणि Advanced Security";
exports.htmlLevel4 = [
    {
        slug: "html-web-components",
        categoryId: "web",
        title: "Web Components",
        marathiTitle: "Web Components — स्वतंत्र, पुन्हा वापरता येणारे घटक",
        level: "intermediate",
        minutes: 20,
        summary: "custom element, त्यांची व्याख्या आणि वापर — मोठ्या साइट्सवर reusable UI चा आधार.",
        sections: [
            { title: "1. customizable elements", content: "Web Components म्हणजे तुमचे स्वतःचे HTML घटक जे ब्राउझरलाही माहीत होतात.\n\nआधार म्हणजे custom element — तुमच्या दिलेले name attribute किंवा class ची जोडणी.\n\ncustom element ने हा प्रकार स्पष्ट होतो: <app-chart data-kind=\"वेळ\">.\n\nब्राउझर unknown tag ला साधा मजकूर म्हणून वागवतो; custom element ते बदलते.\n\nआता आधुनिक ब्राउझर custom elements स्वतः ओळखतात.", code: `<h2>घटक नाव नियम</h2>
<ul>
  <li>custom element नावात dash आवश्यक.</li>
  <li>टॅग आधी विचारावा की तो custom आहे.</li>
  <li>आत एकच मुख्य रचना ठेवा.</li>
</ul>`, codeLanguage: "html" },
            { title: "2. नावाचा नियम", content: "custom element च्या नावात एक dash किंवा अधिक तर असायलाच हवा.\n\nस्टँडर्ड टॅगला dash nasate — त्यामुळे clash होत नाही.\n\nउदा. app-button ठीक, button नाही; web-card ठीक, card नाही.\n\nदुसरा नियम: एकदा बनवलेले नाव पुन्हा बदलू नका.\n\nregister झालेले घटक ब्राउझर री-यूज करतो.", code: `<p>बरोबर: app-card, site-menu, data-grid</p>
<p>चुकीचे: card, menu, grid</p>`, codeLanguage: "html" },
            { title: "3. class आणि lifecycle", content: "custom element ची व्याख्या JavaScript class ने होते.\n\nएक class म्हणजे element चा आधार — attributes, content, क्रिया.\n\nonCreated म्हणजे बनताना; connected म्हणजे पेजवर येताना.\n\nहे चक्र \"lifecycle\" म्हणतात — बनणे, जोडणे, काढणे.\n\nHTML-only शिकताना नियम लक्षात ठेवा — वापर नंतर JavaScript ने.", code: `<p>lifecycle टप्पे:</p>
<ol>
  <li>रचना</li>
  <li>attribute जोडणी</li>
  <li>पेजवर आल्यावर क्रिया</li>
  <li>काढल्यावर साफसफाई</li>
</ol>`, codeLanguage: "html" },
            { title: "4. attributes आणि properties", content: "custom element साठी attributes API म्हणून काम करतात.\n\ndata-kind, status, size — हे सर्व observed attributes.\n\nजेव्हा बाहेरून attribute बदलतो, घटक घडवून प्रतिसाद देतो.\n\nproperties ही नवी जोडणी — एखादा object थेट घटकाला जोडता येतो.\n\nनियम: महत्त्वाची माहिती attributes मधूनच द्या.", code: `<app-card title="एक" status="ready"></app-card>
<app-card title="दोन" status="loading"></app-card>`, codeLanguage: "html" },
            { title: "5. independent components", content: "Web Components चे मोठे फायदे — encapsulation आणि reuse.\n\nएकदा बनवलेला घटक अनेक पेजवर वापरता येतो.\n\nमोठी टीम आणि वेगवेगळी अॅप्स — एक घटक सर्वत्र सारखा.\n\nबाहेरचे framework नको — ब्राउझरची मूळ क्षमता पुरेसे.\n\nब्राउझरची मूळ क्षमता असल्याने library हवी नसते.", code: `<main>
  <app-header></app-header>
  <app-card title="मराठी"></app-card>
  <app-footer></app-footer>
</main>`, codeLanguage: "html" },
            { title: "6. केव्हा वापरायचे", content: "हे कोणासाठी? मोठ्या, पुनरावृत्ती होणार्या रचनांसाठी.\n\nटीमच्या अनेक भागांत समान चित्र, कार्ड, मेनू.\n\nएकाच जागी बदल करून सर्वत्र प्रतिसाद मिळतो.\n\nलहान पेजसाठी गरज नाही — थेट semantic HTML पुरेसे.\n\nआधार आधुनिक ब्राउझरमध्ये सर्वत्र चांगला.", code: `<details>
  <summary>योग्य वापर</summary>
  <p>पुनरावृत्ती टाळल्यावर मोठा आधार मिळतो.</p>
</details>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एका simple पेजमध्ये custom elements ची यादी.\n\nतीन कार्डस् — प्रत्येकाला title आणि status.\n\nहे template सारखे finite नाही — फक्त प्रदर्शन.\n\ncustom element चे नाव आणि attribute दाखवा.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <app-card title="मराठी" status="ready"></app-card>
  <app-card title="तंत्रज्ञान" status="loading"></app-card>
  <app-card title="सराव" status="ready"></app-card>
</body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["custom element चे नाव नियम?", "lifecycle म्हणजे काय?", "Web Components केव्हा वापरायचे?", "बाहेरचे घटक library हवे का?"],
        quiz: [
            { question: "custom element च्या नावात काय हवे?", options: ["dash", "लोअर केस", "दुहेरी dash", "संख्या"], correct: 0 },
            { question: "घटक नोंदणी कोणाकडे?", options: ["ब्राउझर", "मेटा", "CSS", "सर्व्हर"], correct: 0 },
            { question: "piece घटक कुठे वापरायचा?", options: ["पुनरावृत्ती रचना", "एकदाच", "download", "print"], correct: 0 },
            { question: "लहान पेजसाठी?", options: ["semantic HTML", "custom बरोबर", "तरी custom", "sign"], correct: 0 },
        ],
        challenge: {
            prompt: "custom elements चे पेज",
            starterCode: `<app-card title="एक" status="ready"></app-card>`,
            expectedOutput: "Renders page with custom element names and attributes",
        },
        interviewQuestions: ["custom element एका पेजवरच का चालतो?", "सर्व्हरला काय कळतं?"],
        related: ["html-enterprise-app", "html-shadow-dom"],
        prev: "html-enterprise-app",
        next: "html-shadow-dom",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-shadow-dom",
        categoryId: "web",
        title: "Shadow DOM",
        marathiTitle: "Shadow DOM — लपलेल्या जागेची रचना",
        level: "intermediate",
        minutes: 20,
        summary: "shadow root, open/closed modes आणि घटकातील अंतर्गत संरचना कशी वेगळी ठेवायची.",
        sections: [
            { title: "1. shadow root प्रकार", content: "ती घटकाच्या inner रचनेत स्वतःचा अलग जग दाखवते.\n\nopen मोड म्हणजे बाहेरून पाहता येते; closed म्हणजे नाही.\n\nनियम: बहुतांश वेळा open ठेवा — debugging सोपे.\n\nclosed फक्त गोपनीय रचनेसाठी.", code: `<p>shadow root सह घटक:</p>
<p>बाहेरून लपलेली रचना</p>
<p>आत साधी रचना आणि शैली</p>`, codeLanguage: "html" },
            { title: "2. host घटक", content: "पहिला घटकच host म्हणतात — जो shadow root धारण करतो.\n\nउदा. app-panel हा host; त्यात shadow root राहतो.\n\nhost च्या आतले सर्व घटक लपले राहतात.\n\nबाहेरच्या id/class host ला लागतात, आतल्यांना नाही.\n\nही अलगता encapsulation चा आधार.", code: `<app-panel title="माझी पट्टी">
  <p>content थेट host मध्ये.</p>
</app-panel>`, codeLanguage: "html" },
            { title: "3. styling alगार", content: "shadow मधली शैली बाहेरच्या CSS पासून संरक्षित.\n\nबाहेरून id किंवा class ने अंतर्गत घटक निवडता येत नाही.\n\nshadow-DOM मधली शैली पारंपरिक cascade सोडते.\n\nही गुणवत्ता encapsulation देते — आधार वाढतो.\n\n:host स्थानिक नियम host लाच लागतात.", code: `<button type="button">अंतर्गत बटण</button>
<p>आतली रचना स्वतःची शैली घेते.</p>`, codeLanguage: "html" },
            { title: "4. slot मुद्दे", content: "slot हे shadow मधली जागा — बाहेरून content घेते.\n\nउदा. header slot मध्ये बाहेरील शीर्षक घातला जातो.\n\nअनेक slot नावांनी गटबद्ध केले जातात.\n\nअसे केल्यावर घटक flexible आणि reusable बनतो.", code: `<app-dialog>
  <h2 slot="title">निश्चित? </h2>
  <p slot="body">ही क्रिया वाट पाहते.</p>
</app-dialog>`, codeLanguage: "html" },
            { title: "5. closed mode", content: "closed मोड बाहेरून पूर्णपणे लपवतो.\n\nshadowRoot not accessible — JavaScript लाही सहज नाही.\n\nहे कधी? सुरक्षित रचना आणि खास library.\n\nपण debugging आणि शिक्षणासाठी अडचण निर्माण करतो.\n\nसामान्य वापरासाठी open पुरेसा.", code: `<details>
  <summary>closed मोड</summary>
  <p>बाहेरून आंतररचना दिसत नाही.</p>
</details>`, codeLanguage: "html" },
            { title: "6. सराव नियम", content: "encapsulation चांगली; पण जास्त लपवणे debugging वाईट करते.\n\nनावे तशीच ठेवा — पत्रांशी जुळती.\n\nआधी open, नंतर गरज असल्यास closed.\n\nआपल्या HTML मध्ये shadow फक्त components सोबत येतो.", code: `<p>सारांश:</p>
<p>encapsulation + reuse = Web Components</p>
<p>open + slot = सोपी रचना</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक simple shadow घटक रचना दाखवा.\n\napp-panel नाव, दोन slot — title आणि body.\n\nopen मोड नियम आणि ठिकाण सांगा.\n\nshadow ने रचना कशी वेगळी होते ते नमूना करा.", code: `<app-panel>
  <h2 slot="title">बातमी</h2>
  <p slot="body">आजची माहिती येथे.</p>
</app-panel>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["shadow root दोन moad असतात ते कुठले?", "encapsulation काय देते?", "slot म्हणजे काय?", "closed केव्हा वापरायचा?"],
        quiz: [
            { question: "shadow root चे दोन मोड?", options: ["open/closed", "light/dark", "a/b", "fast/slow"], correct: 0 },
            { question: "बाहेरील content घेणारी जागा?", options: ["slot", "column", "tab", "box"], correct: 0 },
            { question: "बाहेरचे CSS अलग ठेवणे?", options: ["encapsulation", "reset", "prefix", "import"], correct: 0 },
            { question: "सामान्य वापरासाठी नियम?", options: ["open mode", "closed mode", "नाही", "सर्व"], correct: 0 },
        ],
        challenge: {
            prompt: "shadow component ची कल्पना",
            starterCode: `<app-panel><h2 slot="title">मराठी</h2></app-panel>`,
            expectedOutput: "Renders component with slots",
        },
        interviewQuestions: ["encapsulation का हवे?", "closed चे तोटे?"],
        related: ["html-web-components", "html-template-technology"],
        prev: "html-web-components",
        next: "html-template-technology",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-template-technology",
        categoryId: "web",
        title: "Template & Slot",
        marathiTitle: "Template आणि Slot — नमुने आणि जोडणी",
        level: "intermediate",
        minutes: 20,
        summary: "template रचना, slot जोडणी आणि content वेगळे ठेवण्याची यंत्रणा.",
        sections: [
            { title: "1. template घटक", content: "template घटक म्हणजे HTML मधला नमुना / साचा.\n\nत्यातला मजकूर ब्राउझर रेंडर करत नाही — तो राहतो आणि नंतर वापरला जातो.\n\nजेव्हा जेव्हा गरज पडते, template ची प्रत पेजवर येते.\n\nउदा. सूचीचे item चे स्वरूप एकदा लिहून अनेक वेळा वापरता येते.\n\nहे वेगळे ठेवणे rendering ची गती वाढवते.", code: `<template id="कार्ड">
  <div class="कार्ड">
    <h3>शीर्षक</h3>
    <p>वर्णन</p>
  </div>
</template>
<p>template दिसत नाही — प्रती नंतर येतात.</p>`, codeLanguage: "html" },
            { title: "2. content वेगळे", content: "template मधली रचना स्टाईल आणि JS सोबत जोडता येते.\n\nपेज load होता तेव्हा template साठी allocation नाही.\n\nजागा कमी आणि वेग अधिक — मोठ्या सूचीसाठी महत्त्वाचे.\n\nशिकताना नियम: template हे व्याकरणचे साधन.\n\nरचना आणि data वेगळे ठेवण्याची सवय.", code: `<template id="menuit">
  <li><a href="#">दुवा</a></li>
</template>`, codeLanguage: "html" },
            { title: "3. slot जागा", content: "slot हा घटकाच्या आत एक empty जागा.\n\nही जागा बाहेरून पुरवलेल्या content ने भरते.\n\nprincipal slot म्हणजे नाव नसलेली जागा; नाव केलेले slot वेगळे.\n\nउदा. \"title\" आणि \"body\" ही नावे content वेगळे ठेवतात.\n\nप्रत्येक नाव एका slot शी जुळते.", code: `<app-dialog>
  <h2 slot="title">वगळा</h2>
  <p>मुख्य content slot नावाशिवाय.</p>
</app-dialog>`, codeLanguage: "html" },
            { title: "4. fallback content", content: "slot मध्ये default मजकूरही देता येतो.\n\nजर वापरकर्त्याने content दिला नाही तर default दिसेल.\n\ncontent दिले नाही तर default आपोआप दिसतो.\n\nअशा रीतीने घटक नेहमी पूर्ण दिसतात.\n\nslot हा scaffolding — बाकीचे तुम्ही भरता.", code: `<p>slot content न दिल्यास entry दिसेल:</p>
<p>नोंदणी / साइन इन</p>`, codeLanguage: "html" },
            { title: "5. template + Web Components", content: "template आणि shadow मिळून घटक बनवतात.\n\ntemplate मधली रचना shadow मध्ये copy होते.\n\nslot भाग बाहेरील content भरतो.\n\nही जोडणी reusable UI चा आधार आहे.\n\nचार महत्त्वाची स्तर — template, host, shadow, slot.", code: `<p>स्तर रचना:</p>
<p>template -> shadow -> slot -> final content</p>`, codeLanguage: "html" },
            { title: "6. सराव आणि खबरदारी", content: "template शिकताना प्रश्न: हे रेंडर का दिसत नाही?\n\nकारण template फक्त साचा आहे — जोपर्यंत वापरता येत नाही.\n\nयासाठी JavaScript clone करते — त्यापूर्वी तो जागेवर राहतो.\n\nHTML-only शिकताना फक्त रचना शिका.\n\nवापर येतो component आणि JS सोबत.", code: `<details>
  <summary>template का दिसत नाही?</summary>
  <p>कारण तो नमुना आहे — वापर नंतर.</p>
</details>`, codeLanguage: "html" },
            { title: "Mini Project", content: "template आणि slot चे प्रात्यक्षिक.\n\nएक template मध्ये मेनू आयटम. शीर्षक slot.\n\nमुख्य शरीर slot. default content fallback.\n\nही रचना घटकाच्या जगाशी जोडते.", code: `<template id="menuK">
  <li><a href="#">मुख्य</a></li>
</template>
<p>प्रती JavaScript मध्ये वापरल्या जातात.</p>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["template काय करतो?", "slot म्हणजे काय?", "fallback content कधी दिसतो?", "template + shadow जोडणी कशी?"],
        quiz: [
            { question: "न दिसणारा साचा?", options: ["template", "canvas", "object", "hidden"], correct: 0 },
            { question: "बाहेरून content भरणारी जागा?", options: ["slot", "span", "div", "label"], correct: 0 },
            { question: "default मजकूर?", options: ["fallback", "alt", "note", "default value"], correct: 0 },
            { question: "template कधी उपयोगी?", options: ["पुनरावृत्ती सूची", "एक मजकूर", "प्रारूप", "फक्त लेआउट"], correct: 0 },
        ],
        challenge: {
            prompt: "template कल्पनेचे पेज",
            starterCode: `<template id="कार्ड"><p>आत</p></template>`,
            expectedOutput: "Renders template with slot structure",
        },
        interviewQuestions: ["template रेंडर होत नाही का?", "डायनॅमिक वापर कशासाठी?"],
        related: ["html-shadow-dom", "html-pwa-progressive"],
        prev: "html-shadow-dom",
        next: "html-pwa-progressive",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-pwa-progressive",
        categoryId: "web",
        title: "PWA Basics",
        marathiTitle: "PWA — प्रगत वेब अनुप्रयोगाचा पाया",
        level: "intermediate",
        minutes: 20,
        summary: "manifest, service worker चा विचार आणि installable वेब अॅप — HTML पासूनच सुरुवात.",
        sections: [
            { title: "1. manifest म्हणजे काय", content: "PWA ची ओळख manifest ने होते.\n\nmanifest ही एक JSON फाइल — अॅपचे नाव, रंग, चिन्ह.\n\n<link rel=\"manifest\"> ने ती पेजशी जोडतात.\n\nती install होण्याचा पाया.\n\nHTML च्या head मधूनच ही सुरुवात होते.", code: `<link rel="manifest" href="site.webmanifest">
<meta name="theme-color" content="#104060">
<p>manifest installable अॅपची पहिली ओळख.</p>`, codeLanguage: "html" },
            { title: "2. installability नियम", content: "ब्राउझर evidence मांडून install करण्याचा प्रस्ताव देतो.\n\nHTTPS हवा — सुरक्षित आणि विश्वासार्ह जोडणी.\n\nसर्व्हिस worker नोंदणी हवी — घटक नेटवर्कशिवाय चालतो.\n\nअॅपचे नाव, चिन्ह आणि रंग भरलेले हवे.\n\nवापरकर्ता किमान एक वेळ पेज उघडतो.", code: `<p>offset नियम:</p>
<p>https + worker + manifest</p>`, codeLanguage: "html" },
            { title: "3. service worker कल्पना", content: "तो नेटवर्क रिक्वेस्ट थांबवून उत्तर शोधतो.\n\nकाही content offline दाखवणे — वाई वापरता.\n\nतो network आणि cache व्यवस्थेचे नियंत्रण करतो.\n\nHTML-only शिकताना तो कल्पना आहे, कोड नाही.", code: `<p>service worker साठी तयारी:</p>
<p>head ठीक, cache नियोजन, पेज स्थिर.</p>`, codeLanguage: "html" },
            { title: "4. offline तत्त्व", content: "ऑफलाइन वेळी कोणता content दाखवायचा? हे आधी ठरवा.\n\nनियम: प्रत्येक पेज basic structure हवा.\n\nनेटवर्क येत नाही तेव्हा संदेश स्पष्ट असावा.\n\nहे network च्या अभावाचा त्रास कमी करते.\n\ncache ची शुद्धता आणि नियम येथे महत्त्वाचे.", code: `<p>offline साठी:</p>
<p>मुख्य भाग येथे, गौण भाग प्रतीक्षेत.</p>`, codeLanguage: "html" },
            { title: "5. icons आणि रंग", content: "install होण्यासाठी चिन्हांची साठवण पाहिजे.\n\nfavicon ही ठीक — पण PWA साठी 192 आणि 512 आकार.\n\nयोग्य sizes सह आयकॉन उपाय.\n\nरंग theme-color ने बार सजवतो.\n\nआयकॉन फाइली पूर्ण असल्यास सर्व काही ठीक दिसते.", code: `<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
<link rel="icon" type="image/png" sizes="512x512" href="icon-512.png">`, codeLanguage: "html" },
            { title: "6. PWA नियम सारांश", content: "हा धडा फक्त पाया आहे — JavaScript ची गरज नंतर.\n\nHTML आणि head मधील बांधणी आता ठीक करा.\n\nlayout, रंग, नाव, चिन्ह — हे सर्व head मध्ये.\n\nनंतर service worker आणि cache जोडले जातील.\n\nपुढील स्तरावर JavaScript शिकताना हा पाया उपयोगी.", code: `<details>
  <summary>आजचे नियम</summary>
  <p>head, रंग, चिन्ह, manifest व्यवस्था.</p>
</details>`, codeLanguage: "html" },
            { title: "Mini Project", content: "लहान पेजमध्ये PWA चा पाया.\n\nmanifest link. theme-color. चिन्हांचा sizes.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी अॅप</title>
  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#104060">
  <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
</head>
<body>
  <h1>मराठी अॅप</h1>
  <p>offline तयार, installable.</p>
</body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["manifest काय हवी? ", "installable होण्यासाठी काय हवे?", "service worker कल्पना काय?", "offline रचना काय?"],
        quiz: [
            { question: "अॅप ओळखण्याची फाइल?", options: ["manifest", "package", "config", "readme"], correct: 0 },
            { question: "installability तीन नियम?", options: ["https worker manifest", "tags लेआउट", "colors media", "सर्व"], correct: 0 },
            { question: "नाम नाव network रिक्वेस्ट थांबवतो?", options: ["service worker", "iframe", "canvas", "object"], correct: 0 },
            { question: "आयकॉन आकार?", options: ["192 आणि 512", "16 only", "100", "750"], correct: 0 },
        ],
        challenge: {
            prompt: "PWA पायाचे पेज",
            starterCode: `<link rel="manifest" href="site.webmanifest">`,
            expectedOutput: "Renders installable app foundation",
        },
        interviewQuestions: ["service worker कोड हवा का?", "installable नियम काय?"],
        related: ["html-template-technology", "html-browser-storage"],
        prev: "html-template-technology",
        next: "html-browser-storage",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-browser-storage",
        categoryId: "web",
        title: "Browser Storage",
        marathiTitle: "ब्राउझर Storage — ठिकाणे आणि टिकाऊपणा",
        level: "intermediate",
        minutes: 20,
        summary: "localStorage, sessionStorage आणि cookies यांची तुलना — कुठे काय डेटा ठेवायचा.",
        sections: [
            { title: "1. localStorage", content: "localStorage म्हणजे ब्राउझरची टिकाऊ मेमरी.\n\nडेटा त्या ठिकाणी टिकतो — टॅब बंद केल्याने जात नाही.\n\nkey-value पद्धतीने simple data ठेवता येते.\n\nमर्यादा सुमारे 5 MB — मोठा data नको.\n\nफक्त string मूल्ये — वस्तू JSON मध्ये बदलाव्या लागतात.", code: `<p>localStorage उदाहरणे:</p>
<p>कायमचे नाव, थीम, खात्री.</p>`, codeLanguage: "html" },
            { title: "2. sessionStorage", content: "sessionStorage सत्राबरोबर नष्ट होतो.\n\nही वस्तुस्थिती अस्थायी गरजांसाठी आदर्श.\n\nउदा. wizard च्या पायऱ्यांची मध्यावस्था.\n\ndata आणि गोपनीयता यांची शिल्लक राहते.", code: `<p>sessionStorage साठी:</p>
<p>wizard, टॅब state, अस्थायी संदेश.</p>`, codeLanguage: "html" },
            { title: "3. cookies तुलना", content: "cookies सर्व्हरला माहीत असतात — प्रत्येक रिक्वेस्टमध्ये.\n\nलहान मर्यादा ~4 KB — फक्त session माहिती.\n\nsecure, httpOnly असे गुणधर्म सुरक्षा देतात.\n\nlocalStorage सर्व्हर देत नाही — अधिक private.\n\nकुठे काय ठेवायचं याची निवड महत्त्वाची.", code: `<p>तुलना:</p>
<p>cookies सर्व्हरप्रमाणे; storage ब्राउझरप्रमाणे.</p>`, codeLanguage: "html" },
            { title: "4. योग्य निवड", content: "अस्थायी -> sessionStorage. कायम -> localStorage.\n\nसर्व्हरला हवे -> cookies. सोबत security विचार.\n\nगोपनीय data सर्व्हरकडून अधिक सुरक्षित.\n\nसंवेदनशील माहिती ब्राउझर storage मध्ये ठेवू नका.\n\nनियम: कमीत कमी data, नेमका तेथे.", code: `<form action="#" method="post">
  <label>जुळणी: <input name="p" type="password" autocomplete="current-password"></label>
</form>`, codeLanguage: "html" },
            { title: "5. सुरक्षा नियम", content: "storage मध्ये टोकन्स आणि सत्र माहिती धोकादायक.\n\nXSS हल्ला storage वाचू शकतो — कडक escape.\n\nkey नाव साधी ठेवा, data सुरक्षित ठेवा.\n\nstorage HTML मध्ये दिसत नाही — पण तरीही तो गुप्त नाही.\n\nसर्व डेटा वापरकर्त्याच्या नियंत्रणात राहावा.", code: `<p>सुरक्षा:</p>
<p>संवेदनशील -> server side.</p>
<p>storage -> सामान्य data.</p>`, codeLanguage: "html" },
            { title: "6. उदाहरण निर्णय", content: "उदा. उपयोगकर्त्याची थीम निवड localStorage मध्ये.\n\nविझार्डची स्थिती sessionStorage मध्ये.\n\nलॉगिन session cookie मध्ये secure attribute सह.\n\nहे तीनच उपाय 90% गरजा भागवतात.\n\nHTML-only मध्ये ही समज, कोड JavaScript मध्ये.", code: `<p>निर्णय सारणी:</p>
<p>थीम -> localStorage | संदेश -> sessionStorage | session -> cookie</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "storage तुलनेचे चार्ट बनवा.\n\nतीन स्तंभ: storage प्रकार, टिकाऊपणा, उपयोग.\n\nहे पेज HTML टेबलच्या रूपात स्पष्ट करा.", code: `<table border="1">
  <tr><th>प्रकार</th><th>टिकाऊ</th><th>उपयोग</th></tr>
  <tr><td>localStorage</td><td>कायम</td><td>थीम निवड</td></tr>
  <tr><td>sessionStorage</td><td>सत्र</td><td>wizard स्थिती</td></tr>
  <tr><td>cookies</td><td>काळनियम</td><td>session id</td></tr>
</table>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["localStorage कायम का?", "sessionStorage केव्हा जातो?", "cookies सर्व्हरला कशा मिळतात?", "थीम कुठे ठेवतात?"],
        quiz: [
            { question: "कायमस्वरूपी storage?", options: ["localStorage", "sessionStorage", "global", "frame"], correct: 0 },
            { question: "सत्राबरोबर नष्ट?", options: ["sessionStorage", "auto", "long", "memory"], correct: 0 },
            { question: "सर्व्हरला मिळणारा data?", options: ["cookies", "hidden", "slot", "shadow"], correct: 0 },
            { question: "संवेदनशील data नियम?", options: ["server side", "storage", "meta", "comment"], correct: 0 },
        ],
        challenge: {
            prompt: "storage तुलना पेज",
            starterCode: `<table><tr><th>प्रकार</th><th>उपयोग</th></tr></table>`,
            expectedOutput: "Renders storage comparison table",
        },
        interviewQuestions: ["cookies size किती?", "XSS आणि storage संबंध?"],
        related: ["html-pwa-progressive", "html-http-foundations"],
        prev: "html-pwa-progressive",
        next: "html-http-foundations",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-http-foundations",
        categoryId: "web",
        title: "HTTP Foundations",
        marathiTitle: "HTTP — विधी, स्थिती आणि विचारणा",
        level: "intermediate",
        minutes: 20,
        summary: "HTTP methods, status codes, headers आणि caching ची मूलभूत शिकवण.",
        sections: [
            { title: "1. HTTP म्हणजे काय", content: "HTTP हा मजकूराचा व्यवहाराचा नियम — browser आणि server दरम्यान.\n\nब्राउझर request पाठवतो; server response मध्ये return करतो.\n\nहे संवाद सोपे — कोड आणि headers अभ्यासा.\n\nमागणी, उत्तर, स्थिती — हा क्रम.\n\nवेबच्या कामकाजाचा पाया म्हणजे HTTP.", code: `<form action="#" method="post">
  <label>नाव: <input name="n"></label>
  <button type="submit">सबमिट</button>
</form>`, codeLanguage: "html" },
            { title: "2. methods", content: "GET डेटा वाचतो; POST नवीन; PUT संपूर्ण बदल.\n\nPATCH आंशिक बदल; DELETE काढतो.\n\nHTML फॉर्म GET आणि POST वापरतो.\n\nदुवे नेहमी GET — डेटा बदलणे नको.", code: `<p>HTML मधील methods:</p>
<p>GET — वाचन, POST — रचना.</p>`, codeLanguage: "html" },
            { title: "3. status codes", content: "200 म्हणजे ठीक; 404 म्हणजे सापडले नाही.\n\n403 मनाई; 500 server त्रुटी; 301 कायम बदल.\n\nवापरकर्त्याला कोड दिसत नाही — पण दिशा देतो.\n\n404 पेज मराठीत चांगले — स्पष्ट संदेश.\n\nstatus codes debugging ची पहिली खूण.", code: `<p>सामान्य कोड:</p>
<p>200 ठीक, 404 मिळाले नाही, 500 त्रुटी.</p>`, codeLanguage: "html" },
            { title: "4. headers", content: "headers request आणि response दोन्हीत माहिती देतात.\n\nContent-Type फाइलचा प्रकार; Cache-Control काळ.\n\nStrict-Transport-Security HTTPS बंधन.\n\nते HTML मेटासारखे, पण server नियंत्रणात.\n\nसुरक्षा आणि performance headers वर अवलंबून.", code: `<p>महत्त्वाचे headers:</p>
<p>Cache-Control, Content-Type, X-Frame-Options.</p>`, codeLanguage: "html" },
            { title: "5. caching", content: "cache म्हणजे वारंवार भेटलेला data ठेवणे.\n\nचित्रे आणि CSS पुन्हा न येण्यासाठी cache ठेवा.\n\nCache-Control max-age देतो — किती वेळ वैध.\n\nहे वेग आणि वाहतूक कमी करते.\n\nHTML चा cache कमी ठेवा — नेहमी ताजा द्या.", code: `<link rel="preconnect" href="https://fonts.example.com">
<p>cache आणि preconnect प्रयोग.</p>`, codeLanguage: "html" },
            { title: "6. form + HTTP संवाद", content: "फॉर्म path मध्ये GET/POST चा परिणाम दिसतो.\n\nGET मध्ये data URL वर; POST मध्ये body मध्ये.\n\nमहत्त्वाचा data POST ने — इतिहासात नको.\n\naction निश्चित: लहान data GET, मोठा POST.\n\nही निवड HTTP च्या मूलभावावर उभी असते.", code: `<form action="https://example.com/search" method="get">
  <label>शोध: <input name="q"></label>
  <button type="submit">जा</button>
</form>`, codeLanguage: "html" },
            { title: "Mini Project", content: "HTTP मूलभूत चार्ट पेज बनवा.\n\nmethods आणि status codes च्या दोन सारण्या.\n\nप्रत्येकासाठी एक ओळ आणि मराठी नाव.", code: `<table>
  <tr><th>method</th><th>क्रिया</th></tr>
  <tr><td>GET</td><td>वाचन</td></tr>
  <tr><td>POST</td><td>रचना</td></tr>
  <tr><td>DELETE</td><td>काढणे</td></tr>
</table>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["method कुठले?", "404 म्हणजे काय?", "headers काय देतात?", "cache कुठे ठेवतो?"],
        quiz: [
            { question: "डेटा वाचणारा method?", options: ["GET", "POST", "PATCH", "DELETE"], correct: 0 },
            { question: "मिळाले नाहीचा कोड?", options: ["404", "200", "500", "301"], correct: 0 },
            { question: "cache नियम का ठेवतो?", options: ["Cache-Control", "hidden", "title", "lang"], correct: 0 },
            { question: "महत्त्वाचा data कसे पाठवा?", options: ["POST", "GET", "base", "array"], correct: 0 },
        ],
        challenge: {
            prompt: "HTTP ज्ञान पेज",
            starterCode: `<table><tr><th>method</th><th>क्रिया</th></tr></table>`,
            expectedOutput: "Renders HTTP overview charts",
        },
        interviewQuestions: ["cache आणि storage फरक?", "form method निवड नियम?"],
        related: ["html-browser-storage", "html-meta-advanced"],
        prev: "html-browser-storage",
        next: "html-meta-advanced",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-meta-advanced",
        categoryId: "web",
        title: "Advanced Meta",
        marathiTitle: "Advanced Meta — शोध, भाषा आणि समृद्ध परिणाम",
        level: "intermediate",
        minutes: 20,
        summary: "hreflang, variants, og डीप आणि knowledge panel — मेटा ज्या पलीकडे जातो.",
        sections: [
            { title: "1. hreflang", content: "hreflang म्हणजे भाषिक आवृत्त्यांची जोडणी.\n\nएकच पेज अनेक भाषांत — search engine सांगा.\n\nalternate आणि hreflang attribute मराठी आवृत्ती दर्शवते.\n\nहे search यंत्राला भाषा कळते.\n\nअनेक भाषांसाठी प्रत्येकातला दुवा हवा.", code: `<link rel="alternate" hreflang="mr" href="https://example.com/mr/">
<link rel="alternate" hreflang="en" href="https://example.com/en/">`, codeLanguage: "html" },
            { title: "2. canonical बहु-आवृत्ती", content: "canonical चे दोन उपयोग:\n\nprint आवृत्ती, सॉर्ट आवृत्ती, पृष्ठभाग.\n\nएकच अधिकृत URL निवडा आणि search engine ला सांगा.\n\nही काळजी duplicate शिक्षा टाळते.\n\nएकाच पेजवर फक्त एकच canonical ठीक.", code: `<link rel="canonical" href="https://example.com/mars/2026/">`, codeLanguage: "html" },
            { title: "3. og deep", content: "og मेटा फक्त नाव नाही — type आणि locale.\n\nog:type article, og:locale mr_IN.\n\nवाटणीमध्ये जुळणारे fields नेमके भरा.\n\nप्रत्येक पेजवर जुळणारे og नेमके भरा.", code: `<meta property="og:type" content="article">
<meta property="og:locale" content="mr_IN">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">`, codeLanguage: "html" },
            { title: "4. knowledge panel", content: "Organization, Person, Product डेटा panels बनवतो.\n\nJSON-LD च्या महत्त्वामुळे structural data हवा.\n\nमराठी संस्थांसाठी name आणि स्थान भरा.\n\nहे rich result चा पुढचा टप्पा.", code: `<p>knowledge panel साठी data:</p>
<p>नाव, पत्ता, लोगो — संरचना JSON-LD ने.</p>`, codeLanguage: "html" },
            { title: "5. robots.txt आणि sitemap", content: "robots.txt directory-level नियम देतो — HTML नाही.\n\nsitemap.xml ही URL सूची — शोधकर्त्यासाठी.\n\nहे search जगाचे दिशादर्शक — HTML च्या सोबत.\n\nmeta robots पेजवर; फायली रूटवर.\n\nदोन्ही मिळून काम करतात.", code: `<p>रूट फाइली:</p>
<p>robots.txt सूचना, sitemap.xml सूची.</p>`, codeLanguage: "html" },
            { title: "6. मेटा समन्वय", content: "सर्व मेटा एकत्रित — भाषा, जोडण्या, rich data.\n\nhreflang भाषा; canonical दुवा; og वाटणी.\n\nहे सर्व head मध्ये तयार राहते.\n\nप्रत्येक पेजवर नियमित तपास करा.\n\nमेटा शुद्ध असल्यास search चांगले उत्तर देते.", code: `<head>
  <meta charset="utf-8">
  <title>मराठी लेख</title>
  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">
  <link rel="canonical" href="https://example.com/mr/lekh">
  <meta property="og:locale" content="mr_IN">
  <meta property="og:type" content="article">
</head>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एका article पेजचे head पूर्ण भरा.\n\nlocale आणि type ची निवड दाखवा.", code: `<head>
  <meta charset="utf-8">
  <title>आजचा लेख</title>
  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">
  <link rel="alternate" hreflang="hi" href="https://example.com/hi/">
  <link rel="canonical" href="https://example.com/mr/aaj">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="mr_IN">
</head>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["hreflang काय सांगतो?", "canonical बहु-आवृत्ती कशी?", "og deep म्हणजे?", "knowledge panel कोणते data?"],
        quiz: [
            { question: "भाषिक आवृत्ती दुवा?", options: ["hreflang", "alternate lang", "dir", "bdi"], correct: 0 },
            { question: "दुहेरी content टाळणारा?", options: ["canonical", "robots", "charset", "theme"], correct: 0 },
            { question: "वाटणी locale?", options: ["og:locale", "og:size", "og:name", "og:image"], correct: 0 },
            { question: "रूटवर नियम फाइल?", options: ["robots.txt", "index.html", "404.html", "webpack"], correct: 0 },
        ],
        challenge: {
            prompt: "मेटा डीप पेज",
            starterCode: `<link rel="alternate" hreflang="mr" href="https://example.com/mr/">`,
            expectedOutput: "Renders rich multilingual head",
        },
        interviewQuestions: ["hreflang आणि canonical संबंध?", "og locale कुठे भरतो?"],
        related: ["html-http-foundations", "html-form-security"],
        prev: "html-http-foundations",
        next: "html-form-security",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-form-security",
        categoryId: "web",
        title: "Form Security",
        marathiTitle: "Form Security — संरक्षणाचे नियम",
        level: "intermediate",
        minutes: 20,
        summary: "CSRF, XSS, autocomplete संवेदनशील fields आणि सुरक्षित फॉर्म रचना.",
        sections: [
            { title: "1. CSRF अर्थ", content: "CSRF म्हणजे दुसर्या साइटकडून येणारा हल्ला.\n\nवापरकर्ता लॉगिन असताना हल्ला request पाठवतो.\n\nटोकन हे संरक्षण — सर्व्हर दिलेले unique मूल्य.\n\nअसे form मध्ये टॉकन गुप्त field म्हणून असतो.\n\nसर्व्हर टॉकनशिवाय क्रिया मानत नाही.", code: `<form action="#" method="post">
  <input type="hidden" name="csrftoken" value="अनोखा"><br>
  <button type="submit">सुरक्षित</button>
</form>`, codeLanguage: "html" },
            { title: "2. XSS प्रतिबंध", content: "XSS म्हणजे बाह्य script भरवणे.\n\nवापरकर्त्याचे input तसेच पाठवणे धोकादायक.\n\nनियम: पाठवण्यापूर्वी escape आणि encode.\n\n< आणि > दर्शवण्यासाठी entity वापरा — कंस आत जाऊ देऊ नका.\n\nसर्व्हरवर तपासणे बंधनकारक.", code: `<p>मजकूर दिसला आणि सुरक्षित:</p>
<p>&lt;script&gt; असे लिहिल्यास चालत नाही.</p>`, codeLanguage: "html" },
            { title: "3. संवेदनशील fields", content: "क्रेडिट कार्ड, पिन, अर्ज — autocomplete नको.\n\nautocomplete=\"off\" फक्त अस्थायी नाही — प्रत्येक संदर्भ.\n\nnew-password आणि current-password ने मदत.\n\nनियम: गुप्त data मोकळा ठेवू नका.\n\nHTTPS अनिवार्य — संदेश सुरक्षित हवा.", code: `<label>क्रेडिट कार्ड: <input name="cc" type="text" autocomplete="off" inputmode="numeric"></label>`, codeLanguage: "html" },
            { title: "4. password managers", content: "password managers चांगले दुवा — autocomplete नियम.\n\ncurrent-password आणि new-password अचूक द्या.\n\nनाव आणि autocomplete जुळल्यास मदत होते.\n\nहे वापरकर्त्याला व्यवस्था देते.", code: `<form action="#" method="post">
  <label>जुना: <input type="password" name="old" autocomplete="current-password"></label>
  <label>नवा: <input type="password" name="new" autocomplete="new-password"></label>
  <button type="submit">बदला</button>
</form>`, codeLanguage: "html" },
            { title: "5. GET vs POST निवड", content: "डेटा बदलण्याची क्रिया POST — GET नको.\n\nGET चा data इतिहास आणि logs मध्ये दिसतो.\n\nPOST body मध्ये — विशिष्ट दृश्य नाही.\n\nक्रियांच्या ठिकाणी POST चा उपयोग निश्चित.\n\nशोध आणि वाचन फक्त GET.", code: `<form action="#" method="post">
  <p>मोठा data बदल POST ने.</p>
</form>`, codeLanguage: "html" },
            { title: "6. सुरक्षित फॉर्म तपासणी", content: "पाठवण्यापूर्वी तपासणी:\n\nautocomplete — संवेदनशील ठिकाणी off.\n\nटोकन hidden field — उपस्थित का?\n\nमजकूर escape — कोणतेही tag टाकू नका.\n\nHTTPS — सर्व request सुरक्षित.\n\nनियम तपासल्यावर फॉर्म विश्वासार्ह.", code: `<form action="https://example.com/apply" method="post">
  <input type="hidden" name="tk" value="xyz"><br>
  <label>नाव: <input name="n" autocomplete="off" required></label>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "Mini Project", content: "सुरक्षित अर्ज फॉर्म बनवा.\n\nhidden token. autocomplete off. POST method.\n\nदोन password fields current/new योग्य.", code: `<form action="https://example.com/secure" method="post">
  <input type="hidden" name="tk" value="अनोखा"><br>
  <label>नाव: <input name="n" autocomplete="off" required></label>
  <label>पासवर्ड: <input type="password" name="p" autocomplete="new-password"></label>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["CSRF टोकन काय करतो?", "XSS कसे टाळतात?", "autocomplete off कधी?", "password manager मदत कशी?"],
        quiz: [
            { question: "दुसर्या साइटचा हल्ला?", options: ["CSRF", "XSS", "SEO", "URL"], correct: 0 },
            { question: "input कसे सुरक्षित?", options: ["escape आणि encode", "component", "CSS", "cache"], correct: 0 },
            { question: "क्रेडिट कार्ड autocomplete?", options: ["off", "on", "new-password", "none"], correct: 0 },
            { question: "क्रिया कशी पाठवावी?", options: ["POST", "GET", "embed", "paint"], correct: 0 },
        ],
        challenge: {
            prompt: "सुरक्षित फॉर्म",
            starterCode: `<form action="https://example.com/x" method="post"><input type="hidden" name="tk" value="abc"></form>`,
            expectedOutput: "Renders secure form with token and restrictions",
        },
        interviewQuestions: ["CSRF आणि XSS फरक?", "token कुठे ठेवतात?"],
        related: ["html-meta-advanced", "html-video-audio"],
        prev: "html-meta-advanced",
        next: "html-video-audio",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-video-audio",
        categoryId: "web",
        title: "Advanced Video & Audio",
        marathiTitle: "Video आणि Audio — प्रगत मीडिया",
        level: "intermediate",
        minutes: 20,
        summary: "video srcset, poster, tracks, muted autoplay आणि audio व्यवस्था.",
        sections: [
            { title: "1. video स्रोत", content: "video घटकात एकापेक्षा अधिक source ठेवता येतात.\n\nप्राथमिक MP4; दुय्यम WebM — आधार बदलतो.\n\nब्राउझर पहिला सुरू होणारा स्रोत निवडतो.\n\nप्रत्येक source type ने लिहा — सुसंगतता.\n\nप्रारंभक चित्र poster ने दिसते.", code: `<video controls width="480" height="270" poster="still.jpg">
  <source src="film.mp4" type="video/mp4">
  <source src="film.webm" type="video/webm">
  <p>तुमचा ब्राउझर video दर्शवू शकत नाही.</p>
</video>`, codeLanguage: "html" },
            { title: "2. poster आणि controls", content: "poster हे व्हिडिओचे प्रारंभक चित्र.\n\nउघडण्यापूर्वी ते दिसते — त्यावरून content अंदाज येतो.\n\ncontrols हे ब्राउझरचे play/pause बटण.\n\nposter साठीचे चित्र योग्य तेथे ठेवा.\n\ncontrols नसल्यास वापरकर्त्याला दिशा मिळत नाही.", code: `<video controls width="480" height="270" poster="cover-mr.jpg">
  <source src="intro.mp4" type="video/mp4">
</video>`, codeLanguage: "html" },
            { title: "3. muted autoplay", content: "autoplay धोकादायक — म्हणून muted तरी नियम.\n\nmuted सह playback वेगाने सुरू होतो.\n\nहे article मध्ये नको — फक्त background साठी.\n\nलहान प्रयोगांसाठी loop आणि muted हवे.\n\nआवाजाशिवाय autoplay काम करत नाही.", code: `<video autoplay muted loop playsinline width="200" height="120">
  <source src="bg.mp4" type="video/mp4">
</video>`, codeLanguage: "html" },
            { title: "4. tracks", content: "track घटक subtitles आणि captions देतो.\n\nव्हिडिओमध्ये भाषांतर track मराठी जोडू शकतात.\n\ntrack kind=\"subtitles\" label भाषा; srclang.\n\nहे प्रवेश्यता आणि जगासाठी vital.\n\ntext वेगळी फाइल (.vtt) वापरते.", code: `<video controls width="480" height="270">
  <source src="film.mp4" type="video/mp4">
  <track kind="subtitles" src="sub-mr.vtt" srclang="mr" label="मराठी">
</video>`, codeLanguage: "html" },
            { title: "5. preload निवड", content: "preload किती data लागेल हे ठरवतो.\n\nnone — फक्त प्रती; metadata — लांबी; auto — पूर्ण.\n\nपहिल्या स्क्रीनसाठी metadata योग्य.\n\nहे performance आणि डेटा खर्च संतुलित करते.\n\nगरज नसलेला video नंतर load नका.", code: `<video controls preload="metadata" width="240" height="135">
  <source src="film.mp4" type="video/mp4">
</video>`, codeLanguage: "html" },
            { title: "6. audio व्यवस्था", content: "audio हा video नसलेला ध्वनी — controls, muted गुण.\n\nएकच audio फाइल — ध्वनीचा संग्रह.\n\nमराठी podcasts नवीन युगात audio महत्त्वाचा.\n\ntype वा dimensions audio ला नाहीत.", code: `<audio controls>
  <source src="show.mp3" type="audio/mpeg">
  <p>हा ध्वनी चालला नाही.</p>
</audio>`, codeLanguage: "html" },
            { title: "Mini Project", content: "video with poster, sources, tracks मराठी.\n\naudio controls. muted autoplay बंद.\n\nप्रत्येक घटकाला width/height आणि रूपांतर.", code: `<figure>
  <video controls width="480" height="270" poster="still.jpg">
    <source src="film.mp4" type="video/mp4">
    <track kind="subtitles" src="sub-mr.vtt" srclang="mr" label="मराठी">
  </video>
  <figcaption>उदाहरण व्हिडिओ</figcaption>
</figure>
<audio controls prepend>
  <source src="show.mp3" type="audio/mpeg">
</audio>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["video किती source हवे?", "poster काय दाखवतो?", "autoplay नियम काय?", "tracks कुठे काम असतात?"],
        quiz: [
            { question: "व्हिडिओचे प्रारंभक चित्र?", options: ["poster", "controls", "src", "track"], correct: 0 },
            { question: "ऑटोप्ले नियम?", options: ["muted सह", "loop only", "preload", "none"], correct: 0 },
            { question: "subtitles कुठे?", options: ["track", "video", "caption", "meta"], correct: 0 },
            { question: "ऍट्रीब्यूट न लागणारा?", options: ["audio width", "controls", "muted", "loop"], correct: 0 },
        ],
        challenge: {
            prompt: "मीडिया पेज",
            starterCode: `<video controls width="480" height="270"><source src="film.mp4" type="video/mp4"></video>`,
            expectedOutput: "Renders video with poster, tracks and audio",
        },
        interviewQuestions: ["poster आणि first frame difference?", "subtitles मराठी कसे करतात?"],
        related: ["html-form-security", "html-navigation-history"],
        prev: "html-form-security",
        next: "html-navigation-history",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-navigation-history",
        categoryId: "web",
        title: "Navigation & History",
        marathiTitle: "Navigation — दिशा, इतिहास आणि वर्तणूक",
        level: "intermediate",
        minutes: 20,
        summary: "hash routing, history API विचार, target नियम आणि scroll वर्तणूक.",
        sections: [
            { title: "1. दुव्यांची दिशा", content: "दुवे नेहमी नवीन टॅब वर टाकू नका — target नियम.\n\nबाहेरची साइट target=\"_blank\" पण rel नाही.\n\nrel=\"noopener\" बसते — सुरक्षा नियम.\n\nमुख्य दुवे same tab — वापरकर्ता इतिहासात.\n\nदुवे आणि target यांचा तोल ठेवा.", code: `<a href="https://example.com" target="_blank" rel="noopener">बाहेरील</a>
<a href="#भाग">आतील</a>`, codeLanguage: "html" },
            { title: "2. hash navigation", content: "hash दुवे (#भाग) त्या घटकात स्क्रोल करतात.\n\nहे एक पेज साइटची दिशा — अशी रचना SP.\n\nब्राउझर history hash ठेवतो — back काम.\n\nही media state नसून दृष्टी आहे.\n\nइतिहासात hash ची नोंद — मागे-पुढे काम करते.", code: `<nav>
  <a href="#परिचय">परिचय</a>
  <a href="#स्वरूप">स्वरूप</a>
</nav>
<h2 id="परिचय">परिचय</h2>`, codeLanguage: "html" },
            { title: "3. history API कल्पना", content: "pushState ने नवीन entry इतिहासात.\n\nहे JavaScript चे साधन — HTML नाही.\n\nअशा डायनॅमिक साइट्स SPA म्हणतात.\n\nHTML शिकताना इतिहास व्यवस्था फक्त समजा.", code: `<p>history API विचार:</p>
<p>URL बदल, पेज refreshing न कोण?</p>`, codeLanguage: "html" },
            { title: "4. scroll-behavior", content: "scroll-behavior हा CSS नियम — smooth scroll.\n\nएक पेज long layout साठी comfort.\n\nहे HTML नाही — पण navigation शी संबंधित.\n\nप्रवेश्यता: reduce motion सह बंद.", code: `<p>scroll-behavior हा CSS गुणधर्म:</p>
<p>html { scroll-behavior: smooth; }</p>
<p>हा नमुना फक्त माहितीसाठी — धड्यात HTML नाही.</p>`, codeLanguage: "html" },
            { title: "5. target नियम", content: "target=\"_top\" संपूर्ण ब्राउझर वापरतो.\n\niframe मध्ये छोटी खिडकी असल्यास ती संपूर्ण.\n\nहे embedded दृश्यांचा उपयोग.\n\ntarget=\"_self\" ही normal आज्ञा.\n\nनियम: बाहेरचे _blank + rel noopener.", code: `<iframe src="मार्ग.html" width="400" height="300" title="नकाशा">
  <a href="मार्ग.html" target="_top">मोठे दृश्य</a>
</iframe>`, codeLanguage: "html" },
            { title: "6. नेव्हिगेशन नियम", content: "नेव्हिगेशनची सवय निर्माण करा:\n\nमुख्य दुवे same tab; बाहेरचे noopener.\n\nhash दुवे विभागांना; इतिहास व्यवस्था.\n\nदीर्घ पेजमध्ये वर जाण्याचा दुवा द्या?\n\nनियम तपासल्यावर वापरकर्ता गोंधळत नाही.", code: `<p>नेव्हिगेशन सारांश:</p>
<p>same tab, noopener, hash, history.</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एका सामग्री पेजमध्ये नेव्हिगेशन.\n\nscroll-behavior note. नियम प्रात्यक्षिक.", code: `<nav>
  <a href="#परिचय">परिचय</a>
  <a href="#काम">काम</a>
</nav>
<h2 id="परिचय">परिचय</h2>
<a href="https://example.com" target="_blank" rel="noopener">बाहेरील</a>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["बाहेरचा दुवा कसा?", "hash दुवा काय करतो?", "history API कोणाचा?", "target=\"_top\" कुठे?"],
        quiz: [
            { question: "बाहेरच्या दुव्यासाठी?", options: ["target=_blank rel=noopener", "rel=gallery", "target=top", "link=no"], correct: 0 },
            { question: "एका पेजचा विभाग दुवा?", options: ["hash दुवा", "file", "base", "download"], correct: 0 },
            { question: "history entry जोडणारा?", options: ["pushState", "reset", "render", "reload"], correct: 0 },
            { question: "iframe मध्ये मोठे दृश्य?", options: ["target=_top", "target=below", "rel=frame", "name=all"], correct: 0 },
        ],
        challenge: {
            prompt: "नेव्हिगेशन पेज",
            starterCode: `<nav><a href="#परिचय">परिचय</a></nav>`,
            expectedOutput: "Renders hash navigation with noopener external link",
        },
        interviewQuestions: ["history आणि hash फरक?", "कुठे smooth scroll नको?"],
        related: ["html-video-audio", "html-debugging-tools"],
        prev: "html-video-audio",
        next: "html-debugging-tools",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-debugging-tools",
        categoryId: "web",
        title: "Debugging Tools",
        marathiTitle: "Debugging — चुका शोधण्याची साधने",
        level: "intermediate",
        minutes: 20,
        summary: "validator, DOM tree, सामान्य त्रुटी आणि निराकरणाचे नियम.",
        sections: [
            { title: "1. validator वापर", content: "validator हे व्याकरण तपासणारे साधन.\n\nW3C validator कोड वाचतो आणि दोष दाखवतो.\n\nटाका म्हणजेच — कोड बरोबर नियम.\n\nअशा तपासणीने अनेक त्रुटी आधी दिसतात.\n\nHTML शिकताना नियमित validator हा मित्र.", code: `<p>validator काय सांगते:</p>
<p>missing end tag, अजून दोष.</p>`, codeLanguage: "html" },
            { title: "2. DOM tree समज", content: "पेजचे घटक एका झाडात — DOM tree.\n\nपालक-child संबंध झाड दाखवतो.\n\nकुठला tag कुठे चुकला हे त्यातून कळतो.\n\ndiv भरपूर का? — ते tree मध्ये दिसते.\n\nडीबग मध्ये tree ने प्रथम स्थान.", code: `<main>
  <h2>शीर्षक</h2>
  <p>मजकूर खाली.</p>
</main>`, codeLanguage: "html" },
            { title: "3. सामान्य त्रुटी", content: "सामान्य चुका: न भरलेला tag, चुकीचा attribute.\n\nquotes न भरलेले — पेज तुटते.\n\nनावातील चुका — class वा id जुळत नाहीत.\n\nदोष पेजवर दिसत नाहीत — फक्त झाडात.\n\nप्रत्येक चूक एक शिकवण.", code: `<p title="उदाहरण">quotes नियम</p>
<p class="मराठी">क्लास स्थिर</p>`, codeLanguage: "html" },
            { title: "4. scrolling text उपाय", content: "जेव्हा मजकूर चुकतो, feedback ने शोधा.\n\nCSS वा JS त्रुटी HTML शी संबंध नाही.\n\nत्रुटी पेजवर का दिसत असेल? का याचा अंदाज tree ने.\n\nशोध प्रक्रिया लगेचच.", code: `<p>दृश्य आणि त्रुटी:</p>
<p>दृश्येत बिघडलं -> tree तपासा.</p>`, codeLanguage: "html" },
            { title: "5. प्रवेश्यता चुका", content: "एरर मध्ये प्रवेश्यता अडचणी सामान्य.\n\nहे validator ने का न कळणार? — ते सदोष नाही, पण मग.\n\nसाधनं आणि मराठी नियम दोन्ही हवे.\n\nप्रवेश्यता चूक वापरकर्त्याला दिसत नाही.", code: `<label for="nm">नाव</label>
<input id="nm" name="n">
<p>label जोडले तर प्रवेश्य.</p>`, codeLanguage: "html" },
            { title: "6. debugging क्रम", content: "एक नियमित धडा: सरावाने क्रम.\n\n१: validator. २: tree. ३: attributes.\n\nचूक शोधणे हेच खरं शिकणे.\n\nतुमच्या पेजवर मराठी मानक.\n\nही debugging ची सवय सर्वत्र उपयोगी.", code: `<ol>
  <li>validator चालवा</li>
  <li>tree पहा</li>
  <li>attribute तपासा</li>
</ol>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एका intentional चुकीच्या पेजवर DEBUG.\n\nmissing closing tag आणि अयोग्य attribute दाखवा.\n\nनंतर योग्य रचना सोपी करून दाखवा.", code: `<main>
  <h2>चुकीचे:</h2>
  <p>closing tag न. <title="अरेरे">
</main>
<p>योग्य आवृत्ती: प्रत्येक tag भरा.</p>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["validator काय दाखवतो?", "DOM tree म्हणजे?", "सामान्य त्रुटी?", "प्रवेश्यता चूक कशी?"],
        quiz: [
            { question: "व्याकरण तपासणारा?", options: ["validator", "preview", "console", "cache"], correct: 0 },
            { question: "घटकांचे झाड?", options: ["DOM tree", "stack", "queue", "table"], correct: 0 },
            { question: "दिसत नसलेली चूक?", options: ["missing end tag", "रंग", "फॉन्ट", "मार्जिन"], correct: 0 },
            { question: "label न ठेवणे काय?", options: ["प्रवेश्यता चूक", "CSS चूक", "HTTP चूक", "cache चूक"], correct: 0 },
        ],
        challenge: {
            prompt: "डीबग पेज",
            starterCode: `<main><h2>शीर्षक</h2><p>मजकूर</main>`,
            expectedOutput: "Renders corrected page with notes",
        },
        interviewQuestions: ["validator मर्यादा?", "tree मध्ये काय दिसते?"],
        related: ["html-navigation-history", "html-enterprise-app"],
        prev: "html-navigation-history",
        next: "html-enterprise-app",
        levelLabel: exports.HTML4_LABEL,
    },
    {
        slug: "html-enterprise-app",
        categoryId: "web",
        title: "Enterprise App",
        marathiTitle: "Enterprise App — सर्व Level 4 एकत्र",
        level: "intermediate",
        minutes: 20,
        summary: "एंटरप्राइझ माहिती अॅप — Web Components, PWA पाया, storage दिशा आणि सुरक्षा.",
        sections: [
            { title: "1. उद्दिष्टे", content: "हा धडा Level 4 ची सर्व कौशल्ये एकत्र करतो.\n\nटार्गेट: \"मराठी माहिती केंद्र\" — माहिती अॅप.\n\ncustom element दिशा, manifest, मेटा डीप.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी माहिती केंद्र</title>
</head>
<body></body>
</html>`, codeLanguage: "html" },
            { title: "2. head enterprise", content: "head मध्ये PWA आणि मेटा डीप.\n\nmanifest link, theme-color, icon sizes.\n\ncanonical, og locale, twitter card.\n\nhreflang दोन भाषा. robots ध्येय.\n\nहा पाया enterprise दर्जाचा.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी माहिती केंद्र</title>
  <link rel="manifest" href="site.webmanifest">
  <meta name="theme-color" content="#104060">
  <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">
  <link rel="canonical" href="https://example.com/mr/">
  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">
  <link rel="alternate" hreflang="en" href="https://example.com/en/">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="mr_IN">
  <meta name="twitter:card" content="summary_large_image">
</head>`, codeLanguage: "html" },
            { title: "3. रचना आणि नेव्हिगेशन", content: "body मध्ये semantic रचना आणि नेव्हिगेशन.\n\nheader ब्रँड. nav hash दुवे. main एक.\n\nविभागांना id. footer संपर्क.\n\nदुवे same tab; बाहेरचे noopener.\n\nहे tree आणि प्रवेश्यता दोन्ही सुधारते.", code: `<header>
  <h1>मराठी माहिती केंद्र</h1>
</header>
<nav>
  <a href="#विषय">विषय</a>
  <a href="#साधने">साधने</a>
</nav>
<main>
  <h2 id="विषय">विषय</h2>
  <p>आजची माहिती.</p>
</main>
<footer><p>&copy; 2026 केंद्र</p></footer>`, codeLanguage: "html" },
            { title: "4. घटक आणि मीडिया", content: "अॅपमध्ये custom element कल्पना आणि मीडिया.\n\napp-card ची रचना. video poster सह.\n\naudio सोबत टीप द्या. width/height सर्वत्र.\n\nहे Level 4 चे प्रात्यक्षिक दाखवते.", code: `<main>
  <app-card title="मराठी शाळा"></app-card>
  <video controls width="480" height="270" poster="still.jpg">
    <source src="intro.mp4" type="video/mp4">
  </video>
  <audio controls>
    <source src="show.mp3" type="audio/mpeg">
  </audio>
</main>`, codeLanguage: "html" },
            { title: "5. सुरक्षित फॉर्म", content: "सदस्यता फॉर्म enterprise सुरक्षा.\n\nhidden token. POST method. autocomplete नियम.\n\npassword fields current/new. label जोडणी.\n\nहे CSRF आणि XSS दिशेची खबरदारी.", code: `<form action="https://example.com/secure" method="post">
  <input type="hidden" name="tk" value="अनोखा"><br>
  <label>नाव: <input name="n" autocomplete="name" required></label>
  <label>पासवर्ड: <input type="password" name="p" autocomplete="new-password"></label>
  <button type="submit">सदस्य व्हा</button>
</form>`, codeLanguage: "html" },
            { title: "6. storage दिशा", content: "अॅपच्या data टिकाऊपणा दिशा सांगा.\n\nथीम निवड localStorage मध्ये.\n\nप्रवेश टोकन cookie मध्ये secure सह.\n\nHTML-only मध्ये ही व्यवस्था समजावणी.", code: `<table>
  <tr><th>data</th><th>ठिकाण</th></tr>
  <tr><td>थीम</td><td>localStorage</td></tr>
  <tr><td>session</td><td>sessionStorage</td></tr>
  <tr><td>प्रवेश</td><td>cookie</td></tr>
</table>`, codeLanguage: "html" },
            { title: "Mini Project", content: "संपूर्ण enterprise अॅप फ्रंट कनेक्ट.\n\nhead डीप. नेव्हिगेशन. घटक आणि मीडिया.\n\nसुरक्षित फॉर्म. storage तक्ता.\n\nHTML Level 4 समाप्त — पुढे CSS.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी माहिती केंद्र</title>
</head>
<body>
  <header>
    <h1>मराठी माहिती केंद्र</h1>
  </header>
  <main>
    <h2>आजचे विषय</h2>
    <p>माहिती येथे.</p>
  </main>
  <footer><p>&copy; 2026 केंद्र</p></footer>
</body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["हा अॅप काय एकत्र करतो?", "head मध्ये काय हवे?", "फॉर्म सुरक्षा कशी?", "storage दिशा कशी?"],
        quiz: [
            { question: "मुख्य URL वर alternate?", options: ["hreflang", "title", "lang", "encoding"], correct: 0 },
            { question: "सुरक्षित फॉर्म पहिले?", options: ["hidden token", "autofocus", "placeholder", "reset"], correct: 0 },
            { question: "थीम कुठे टिकते?", options: ["localStorage", "cookie only", "session child", "frame"], correct: 0 },
            { question: "Level 4 पुढे?", options: ["CSS track", "back to Python", "संपवणे", "history end"], correct: 0 },
        ],
        challenge: {
            prompt: "एंटरप्राइझ फ्रंट",
            starterCode: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी केंद्र</title>
</head>
<body></body>
</html>`,
            expectedOutput: "Renders full enterprise information app",
        },
        interviewQuestions: ["हे app install कसा होईल?", "पुढे CSS दिशा कशी?"],
        related: ["html-debugging-tools", "html-web-components"],
        prev: "html-debugging-tools",
        next: "html-web-components",
        levelLabel: exports.HTML4_LABEL,
    },
];
