import type { Tutorial } from "@/data/tutorials";

// === HTML · LEVEL 3 — प्रगत वैशिष्ट्ये आणि Semantic Deep-Dive ===
export const HTML3_LABEL = "HTML · Level 3 — प्रगत वैशिष्ट्ये आणि Semantic Deep-Dive";

export const htmlLevel3: Tutorial[] = [
  {
    slug: "html-global-attributes",
    categoryId: "web",
    title: "Global Attributes",
    marathiTitle: "Global Attributes — सर्व घटकांसाठी एक नियम",
    level: "intermediate",
    minutes: 18,
    summary: "lang, dir, hidden, title, tabindex, contenteditable आणि data-* — जवळपास प्रत्येक HTML घटकाला लावता येणारे सार्वत्रिक गुणधर्म.",
    sections: [
      { title: "1. lang आणि dir", content: "Global attributes म्हणजे असे गुणधर्म जे जवळपास प्रत्येक HTML घटकावर चालतात. सगळ्यात पहिले lang आणि dir.\n\nlang मध्ये घटकाची भाषा सांगतो — lang=\"mr\" मराठी, lang=\"en\" इंग्रजी. ब्राउझर त्यानुसार hyphenation, quotes आणि spellcheck निवडतो.\n\ndir दिशा ठरवतो — dir=\"ltr\" डावीकडून, dir=\"rtl\" उजवीकडून. एकाच पेजवर वेगवेगळ्या भागांच्या दिशा वेगळ्या असू शकतात.\n\nlang फक्त एकदाच जोडा, मग उपघटक वारसा घेतात. अर्थ बदलत असेल तरच पुन्हा जोडा.\n\nस्क्रीन रीडरला भाषा कळली की उच्चार योग्य होतो.", code: `<html lang="mr">
<body>
  <p>हा भाग मराठीत.</p>
  <p lang="en">This section is English.</p>
  <p dir="rtl">ही ओळ उजवीकडून वाचली जाते.</p>
</body>
</html>`, codeLanguage: "html" },
      { title: "2. hidden", content: "जेव्हा घटक दिसू नये, पण कोडमध्ये असावा, तेव्हा hidden attribute वापरतात.\n\nhidden घटक रेंडरच होत नाही — तो दृष्टिहीनांसाठीही नाही. फक्त conditional कंटेंट साठवण्यासाठी सोयीचा.\n\nतरीही DOM मध्ये राहतो, त्यामुळे JavaScript तो पुन्हा दाखवू शकतं. टॅब बदलताना पॅनेल लपवणे एक उदाहरण.\n\nhidden घटकातले दुवे, फॉर्म वगैरेही सक्रिय राहतात? — नाही, hidden भागातले interactive elements प्रवेशयोग्य नसतात.\n\nप्रवेश्यता कायम ठेवायची असेल तर CSS द्वारे लपवू नका — hidden attribute वर विश्वास ठेवा.", code: `<details open>
  <summary>माझे बॅगेज</summary>
  <p>योग्य: हा मजकूर दिसतो.</p>
</details>
<p hidden>हा मजकूर लपला आहे पण DOM मध्ये आहे.</p>`, codeLanguage: "html" },
      { title: "3. title", content: "title attribute प्रत्येक घटकाला टूलटिप देऊ शकतो.\n\nकेवळ tooltip नाही — त्यात थोडकी स्पष्टता द्या. उदा. चिन्हावर \"घरी परत जा\". माऊसने वर गेल्यावर टूलटिप दिसते.\n\nस्क्रीन रीडर title नेहमी वाचू शकत नाही, त्यामुळे महत्त्वाची माहिती फक्त title मध्ये ठेवू नका.\n\nटूलटिप वरचा मजकूर क्लिपबोर्डवर कॉपी होत नाही — मोठा मजकूर title मध्ये टाकू नका.\n\ntitle चा गैरवापर नको: आवश्यक तेथेच थोडक्यात.", code: `<p title="उदाहरण टूलटिप">ती खालील मजकूरावर माऊस न्या.</p>
<a href="index.html" title="मुख्यपृष्ठ">घर</a>`, codeLanguage: "html" },
      { title: "4. tabindex", content: "कीबोर्ड नेव्हिगेशनचा क्रम tabindex हाताळतो.\n\ntabindex=\"0\" म्हणजे घटक natural क्रमात टॅब होतो. tabindex=\"-1\" फोकस होतो पण टॅब क्रमात नसतो — प्रोग्रॅमेटिक फोकससाठी उपयोगी.\n\nपॉझिटिव्ह tabindex (1, 2...) कधीच देऊ नका — तो नैसर्गिक क्रम तोडतो आणि वाचक अडकतो.\n\nका? कारण interactive elements आधीच टॅब होतात; फोर्स्ड क्रम बदलल्यास अंतिम वापरकर्ता गोंधळतो.\n\nनियम: तुमच्या कोडचाच क्रम ठीक ठेवा, tabindex शक्य तितका टाळा.", code: `<nav>
  <a href="h1.html">हेडिंग</a>
  <a href="p1.html" tabindex="0">परिच्छेद</a>
  <a href="x1.html" tabindex="-1">फक्त फोकस</a>
</nav>`, codeLanguage: "html" },
      { title: "5. contenteditable", content: "contenteditable=\"true\" असलेला घटक पेजवरच संपादन करता येतो.\n\nहे वापरकर्त्याला मजकूर बदलण्याची जागा देते — जसे नोट्स, टिप्पण्या, drafts.\n\nमग काय होतं? ब्राउझर मजकूर युजरने बदलला तर तो DOM मध्ये दिसतो. पण तो नव्या पेज रीलोडवर गमावला जातो — तो राहण्यासाठी JavaScript पाठवणे लागते.\n\nसुरक्षा: contenteditable मधील मजकूर पाठवताना नेहमी escape करा — HTML तुमच्या सुनावणीने येत नाही.\n\nसोपा वापर: मजकूर वाढवण्यासाठी paragraph साधे output दाखवा.", code: `<p contenteditable="true">या ओळीवर क्लिक करा आणि टाईप करा.</p>`, codeLanguage: "html" },
      { title: "6. data-* attributes", content: "data-* हे तुमचे स्वतःचे गुणधर्म — dash नंतर कोणतेही नाव.\n\ndata-user=\"राहुल\", data-role=\"admin\" असे data टाकल्यावर JavaScript ते सहज वाचते.\n\nते स्क्रीन रीडरला दिसत नाहीत आणि शोधायलाही उपयोगी नसतात — फक्त component स्टेट.\n\nनियम: data-* नेहमी साधा स्वरूपात ठेवा; संवेदनशील माहिती data मध्ये नको — ती पेज स्रोतात दिसते.\n\nउदा. list item ला id न देता data-id द्या.", code: `<ul>
  <li data-id="101" data-role="student">राहुल</li>
  <li data-id="102">सिमा</li>
</ul>`, codeLanguage: "html" },
      { title: "Mini Project", content: "आता सर्व global attributes एकत्र — एक small sample page.\n\nएक paragraph lang=\"mr\". दुसरा lang=\"en\". एक hidden box संदेश.\n\nएक contenteditable टीप. एक data-* नोंद असलेली सूची. title टूलटिप.\n\nही रचना केल्यावर global attributes चा उपयोग पक्का होतो.", code: `<html lang="mr">
<body>
  <p lang="mr" title="मराठी">नमस्कार मराठी शिक्षक.</p>
  <p hidden>दिसत नसलेला संदेश.</p>
  <div data-course="html" data-level="3">HTML Level 3</div>
  <p contenteditable="true">टीप लिहा...</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["lang कधी बदलतो?", "hidden वर मजकूर का राहतो?", "tabindex=\"0\" काय करतो?", "data-* कशासाठी?"],
    quiz: [
      { question: "मराठीचे भाषा गुणधर्म?", options: ["lang=\"mr\"", "lang=\"hi\"", "dir=\"rtl\"", "id=\"mr\""], correct: 0 },
      { question: "element लपवणारा attribute?", options: ["hidden", "invisible", "close", "none"], correct: 0 },
      { question: "कीबोर्ड क्रम नैसर्गिक राहण्यासाठी?", options: ["tabindex=\"0\"", "tabindex=\"1\"", "tabindex=\"-1\"", "tabindex=\"all\""], correct: 0 },
      { question: "स्वतःचे गुणधर्म?", options: ["data-*", "meta-*", "extra-*", "own-*"], correct: 0 },
    ],
    challenge: {
      prompt: "global attributes चे demonstrative पेज",
      starterCode: `<p lang="mr">मराठी मजकूर</p>`,
      expectedOutput: "Renders page with lang, hidden, data-*, contenteditable",
    },
    interviewQuestions: ["global attributes उपयोग काय?", "conteneditable शिवाय कोणता पर्याय?"],
    related: ["html-semantic-outline", "html-forms-ux"],
    prev: "html-magazine-project",
    next: "html-forms-ux",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-forms-ux",
    categoryId: "web",
    title: "Forms UX & Intelligence",
    marathiTitle: "Forms UX — autocomplete, inputmode आणि स्मार्ट फॉर्म",
    level: "intermediate",
    minutes: 18,
    summary: "आधुनिक फॉर्म autocomplete taxonomy, inputmode, autofocus आणि novalidate सह वापरकर्त्याला कमी वेळ घेतात.",
    sections: [
      { title: "1. autocomplete taxonomy", content: "autocomplete attribute हाताने डेटा भरतो — नाव, ईमेल, पत्ता, फोन.\n\noff अर्थात बंद. name, email, tel, street-address, postal-code — अशा मूल्यांची मोठी शब्दावली आहे.\n\nब्राउझर मागील भरलेली मूल्ये ओळखून सुचना देतो. त्यामुळे फॉर्म वेगाने भरला जातो.\n\nएकाच फॉर्ममध्ये अनेक fields autocomplete ने जोडले की browser गट वेळोवेळी वापरतो.\n\nautocomplete मध्ये street-address, postal-code, country अशी अधिक मूल्ये आहेत — वापरा.", code: `<form action="#" method="post">
  <label>नाव: <input name="n" autocomplete="name"></label>
  <label>ईमेल: <input name="e" type="email" autocomplete="email"></label>
  <label>गाव: <input name="g" autocomplete="street-address"></label>
</form>`, codeLanguage: "html" },
      { title: "2. inputmode", content: "inputmode तुम्हाला जागा देतो की कोणतं कीबोर्ड उघडावं.\n\ninputmode=\"numeric\" फोन कीबोर्डवर अंक. inputmode=\"decimal\" दशांश चिन्ह. inputmode=\"email\" @ आणि . बटणे.\n\nहे फोनवर खूप मदत करते — ईमेल फील्डवर अंक कीबोर्ड उघडणे हात वाया.\n\ntype च्या जोडीने वापरा: type=\"text\" + inputmode=\"numeric\" म्हणजे अंक पण कोणतेही formatting नको.\n\ntel, email, url या types आधीच व्यवस्थापित कीबोर्ड देतात — तरीही तो वापरा.", code: `<label>पिन: <input name="pin" type="text" inputmode="numeric" pattern="[0-9]{6}"></label>
<label>ईमेल: <input name="em" type="email" inputmode="email"></label>`, codeLanguage: "html" },
      { title: "3. autofocus", content: "पेज उघडताच पहिल्या फील्डवर फोकस हवा तर autofocus.\n\nautofocus वापरलेला input आधीच भरायला तयार — स्क्रीन रीडरला स्थान कळते.\n\nनियम: फक्त एकाच फील्डवर autofocus द्या — पेजवर एक.\n\nकधी नको? जेव्हा वापरकर्ता स्क्रोल करत असेल — फोकस त्याला वर आणतो.\n\nमालमत्तेचा नियम: autofocus आणि tabindex जुळवू नका — फोकस क्रम गोंधळतो.", code: `<form action="#" method="post">
  <label>नाव: <input name="n" autofocus></label>
  <label>ईमेल: <input type="email" name="e"></label>
</form>`, codeLanguage: "html" },
      { title: "4. novalidate", content: "ब्राउझरचा default validation बंद करणे novalidate ने.\n\nहे कधी? जेव्हा JavaScript चा स्वतःचा validation code असेल, किंवा संदेश अनुकूल करायचे असेल.\n\nform novalidate लागल्यावर required, pattern, type यांचे ब्राउझर संदेश दिसत नाहीत.\n\nसावध राहा: novalidate तुमचे स्वतःचे तपासणी कार्यक्रम बंद करत नाही — फक्त ब्राउझरचे.\n\nजर server validator नियमांना हे HTML फॉलो करत नसेल, तर तुम्हीच जोखीम घेता.", code: `<form action="#" method="post" novalidate>
  <label>ईमेल: <input type="email" name="e" required></label>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
      { title: "5. fieldset आणि disabled", content: "फॉर्मचा भाग संदर्भ आणि स्थिती fieldset द्वारे गटबद्ध करा.\n\nfieldset disabled लागल्यावर आतले सर्व controls निष्क्रिय — पाठवणारे मूल्यही नाही.\n\nहे subscription form मध्ये उपयोगी: बंद पॅकेज दिसतं पण निवडताही येत.\n\nlegend ने गटाचं नाव सांगतो; स्क्रीन रीडर fieldset एकूण संदर्भ वाचतो.\n\nfieldset ने गट केल्यावर form चा क्रम वाचणी सोपी होते.", code: `<form action="#" method="post">
  <fieldset disabled>
    <legend>बंद पॅकेज</legend>
    <label><input type="radio" name="p" value="a"> बेसिक</label>
    <label><input type="radio" name="p" value="b"> प्रो</label>
  </fieldset>
</form>`, codeLanguage: "html" },
      { title: "6. form attribute", content: "input ला form मध्ये नसले तरी form चा गुणधर्म जोडता येतो.\n\nform=\"formId\" नावाच्या attribute ने कुठल्याही असलेल्या इनपुटला एका बाहेरील form शी जोडला जातो.\n\nमोठ्या layout मध्ये fields वेगवेगळ्या ठिकाणी असतात — हे तोडते.\n\nप्रकार: formaction, formmethod, formtarget ही बटणांवर वापरतात.\n\nsubmit बटण form attribute ने लावले तर त्याच्या form शी जोडणी निश्चित.", code: `<form id="मुख्य" action="#" method="post">
  <button type="submit">पाठवा</button>
</form>
<input name="टीप" form="मुख्य">`, codeLanguage: "html" },
      { title: "Mini Project", content: "autofocus पहिल्या field. novalidate नाही — browser तपासणी ठीक.\n\nएक fieldset disabled सह प्रचलित नसलेला पर्याय. form attribute बाहेरील button.", code: `<form action="#" method="post">
  <fieldset>
    <legend>संपर्क</legend>
    <label>नाव: <input name="n" autocomplete="name" autofocus></label>
    <label>फोन: <input name="ph" type="tel" inputmode="tel" autocomplete="tel"></label>
    <label>गाव: <input name="g" autocomplete="street-address"></label>
  </fieldset>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["autocomplete मूल्ये कुठले?", "inputmode कधी वापरतात?", "novalidate कशासाठी?", "form attribute काय जोडतो?"],
    quiz: [
      { question: "कीबोर्ड नियंत्रण करणारा?", options: ["inputmode", "type", "placeholder", "required"], correct: 0 },
      { question: "फॉर्मचा validation बंद करणारा?", options: ["novalidate", "autocomplete", "autofocus", "formtarget"], correct: 0 },
      { question: "गट बंद करणारा attribute?", options: ["disabled", "readonly", "muted", "inert"], correct: 0 },
      { question: "बाहेरील input जोडणारा?", options: ["form attribute", "action", "fieldset", "legend"], correct: 0 },
    ],
    challenge: {
      prompt: "ऑर्डर फॉर्म UX दाखवा",
      starterCode: `<form action="#" method="post">
  <label>नाव: <input name="n" autocomplete="name"></label>
</form>`,
      expectedOutput: "Renders smart form with autocomplete taxonomy",
    },
    interviewQuestions: ["मोबाइलवर फॉर्म भरताना काय सोपे होते?", "disabled fieldset चे नियम?"],
    related: ["html-global-attributes", "html-html5-history"],
    prev: "html-global-attributes",
    next: "html-html5-history",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-html5-history",
    categoryId: "web",
    title: "HTML History & Standards",
    marathiTitle: "HTML चा इतिहास आणि मानके",
    level: "intermediate",
    minutes: 18,
    summary: "HTML4 ते HTML5 आणि living standard — doctype, quirks mode, deprecated tags आणि validity यांचा प्रवास.",
    sections: [
      { title: "1. HTML4 ते HTML5", content: "1997 मध्ये HTML4 आले. तेव्हा layout साठी फक्त table आणि font वापरत होते.\n\n2000 च्या दशकात XHTML आले — कडक व्याकरण, पण व्यावहारिक अडचणी.\n\n2014 मध्ये HTML5 प्रकाशित झाला — semantics, video, canvas, forms प्रगत.\n\nHTML5 चे ध्येय एक: रचना आणि सादरीकरण वेगळे — CSS ला दिसणे, HTML ला अर्थ.\n\nही दिशा आजही कायम.", code: `<div class="हेडर">जुनी पद्धत</div>
<header>HTML5 मध्ये अर्थपूर्ण</header>`, codeLanguage: "html" },
      { title: "2. doctype आणि mode", content: "पहिली ओळ <!DOCTYPE html> आहे — सर्वांत महत्त्वाची.\n\nयाच्याशिवाय ब्राउझर quirks mode मध्ये जातो — जुनी, अंदाजे CSS.\n\ndoctype दिल्यावर standards mode — नियमांची अचूक अंमलबजावणी.\n\nXHTML चे कडक doctype आता नको — साधे <!DOCTYPE html> पुरेसे.\n\nvisual layout doctype ब्राउझरला सांगतो — कोणता मोड वापरायचा: standards की quirks.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी पेज</title>
</head>
<body></body>
</html>`, codeLanguage: "html" },
      { title: "3. deprecated tags", content: "काही tags मानकांमधून निघून गेले — deprecated.\n\n<center> मधलं ठिकाण; <font> अक्षर शैली; <marquee> नाचणारा मजकूर; <blink> चमकणारा.\n\nहे सर्व equivalents CSS ने बदलले — text-align, font-family, animation.\n\nनियम: HTML मध्ये structure, CSS मध्ये presentation.\n\nजुने tags आणखी वाचतात पण — वापरू नका.", code: `<center>गेले</center>
<font color="red">जुने</font>
<p class="ओळ">आधुनिक संदर्भ</p>`, codeLanguage: "html" },
      { title: "4. standards आणि validity", content: "HTML मानक WHATWG आणि W3C मिळून ठरवतात — living standard.\n\nvalid HTML म्हणजे व्याकरणाच्या नियमांशी जुळणारे — सर्व tags योग्य, attributes चालतात.\n\nValidator टूल्स (जसे W3C validator) तुमचे संपूर्ण पेज तपासतात.\n\ninvalid HTML मध्ये ब्राउझर स्वतः पुनर्बांधणी करतो — पण गोंधळ निर्माण होण्याचा धोका.\n\nमराठी शिकवण्यासाठी: अचूकता नेहमी गुणवत्तेचे लक्षण.", code: `<p>वाचला जाणारा मजकूर.</p>`, codeLanguage: "html" },
      { title: "5. quirks mode चे नुकसान", content: "quirks mode जुन्या ब्राउझरचा वर्तन कसा? — अचूक मोजमाप नाही.\n\nप्रथमच्या पेजवर doctype गहाळ असल्यास layout ची तुलना कोणत्याही आधाराशिवाय होते.\n\nबाहेरचा CSS scale वेगळा — त्यामुळे responsive design तुटतो.\n\nत्यावर उपाय एकच: प्रत्येक दस्तऐवजासाठी doctype लिहा.\n\nसावधान: doctype न दिल्यास ब्राउझर जुने अंदाज वापरतो — त्यामुळे responsive रचना बिघडू शकते.", code: `<!DOCTYPE html>
<html>
<body>
  <p>डूक्टाइप नेहमी पहिली ओळ!</p>
</body>
</html>`, codeLanguage: "html" },
      { title: "6. मराठी HTML दत्त", content: "मराठीत मजकूर लिहिताना दोन अटी पाळा.\n\nपहिली: charset utf-8 पेजच्या head मध्ये. दुसरी: lang=\"mr\" html टॅगवर.\n\ntitle मराठीत असले तरी search engine ते अचूक ओळखतो.\n\nमराठी शब्द strong/em ने संदर्भ मिळवतात — विकृत विरुद्ध नाही.\n\nआपले मराठी पेज standards नुसारच बनवा.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी मानक</title>
</head>
</html>`, codeLanguage: "html" },
      { title: "Mini Project", content: "एक अतुलनीय standards पेज बनवूया.\n\n<!DOCTYPE html> ने सुरुवात. html lang=\"mr\".\n\nhead मध्ये charset, title, meta. body मध्ये semantic tags.\n\nकोणतेही deprecated tag नको. असा HTML लिहा ज्याची validity शुद्ध असेल.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी मानक पेज</title>
</head>
<body>
  <header><h1>नमस्कार</h1></header>
  <main><p>HTML मानकांचा सराव.</p></main>
  <footer><p>&copy; 2026</p></footer>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["doctype कशासाठी?", "quirks mode म्हणजे?", "deprecated tags नको का?", "living standard काय?"],
    quiz: [
      { question: "standards mode साठी आवश्यक?", options: ["<!DOCTYPE html>", "<meta charset>", "lang", "title"], correct: 0 },
      { question: "जुने deprecated tag?", options: ["<center>", "<header>", "<figure>", "<details>"], correct: 0 },
      { question: "HTML5 कधी प्रसिद्ध?", options: ["2014", "1997", "2000", "2009"], correct: 0 },
      { question: "presentation कडे नेणारे?", options: ["CSS", "HTML", "meta", "table"], correct: 0 },
    ],
    challenge: {
      prompt: "आधुनिक standards पेज बनवा",
      starterCode: `<!DOCTYPE html>
<html lang="mr">
<body></body>
</html>`,
      expectedOutput: "Renders valid modern page",
    },
    interviewQuestions: ["HTML5 मुळे फायदा काय?", "पुढे काय living standard ने?"],
    related: ["html-forms-ux", "html-semantic-outline"],
    prev: "html-forms-ux",
    next: "html-semantic-outline",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-semantic-outline",
    categoryId: "web",
    title: "Semantic Outline",
    marathiTitle: "Semantic Outline — शीर्षकांचा नकाशा",
    level: "intermediate",
    minutes: 18,
    summary: "h1-h6 चा नियमित क्रम, hgroup, sectioning roots आणि TOC — प्रत्येक पेजचा खरा नकाशा.",
    sections: [
      { title: "1. heading hierarchy", content: "पेजची शीर्षके h1 ते h6 असा नियमित क्रम पाळतात.\n\nh1 पेजचा मुख्य विषय — एकच असावे. h2 मोठे उपविभाग, h3 त्यातले भाग.\n\nस्तर उडवू नका — h1 नंतर थेट h4 नको. तो क्रम स्क्रीन रीडरची नेव्हिगेशन रचना आहे.\n\nheadings मधून वाचक \"कुठे आहे मी\" हे समजतात.\n\nफक्त आकाराच्या आधारावर heading निवडू नका — विषयाच्या गड्ड्यानुसार.", code: `<h1>शहरातील बाग</h1>
<h2>वनस्पती</h2>
<h3>गुलाब</h3>
<h2>प्राणी</h2>`, codeLanguage: "html" },
      { title: "2. hgroup", content: "hgroup दोन शीर्षकांना एक गट म्हणून जोडतो.\n\nउदा. हेडलाइन + subtitle: \"महाराष्ट्राला मोठा विजय\" आणि \"चार गोल नोंदवले\".\n\nहा गट मुख्य heading सोबतचा context असतो — मुख्य शीर्षकच वाचनीय ठरतो.\n\nस्क्रीन रीडर hgroup मधून मुख्य heading वाचतो.\n\nरचना: hgroup मध्ये एकच h1-h6, बाकी p किंवा span.", code: `<hgroup>
  <h1>औद्योगिक प्रगती</h1>
  <p>उज्ज्वल बातमी</p>
</hgroup>`, codeLanguage: "html" },
      { title: "3. sectioning elements", content: "काही घटक नवीन outline रचना तयार करतात — sectioning content.\n\nsection, article, aside, nav, header, footer — हे सर्व \"ओळखीच्या\" सीमा देतात.\n\nत्यांच्यातील heading क्रम स्वतंत्र असू शकतो — मुख्य नकाशाला धक्का नाही.\n\nदस्तऐवज एक गुंतागुंतीचा नकाशा होतो, पण तरीदेखील समजण्यासारखा.\n\nप्रत्येक sectioning block मध्ये त्याची स्वतःची h1 असू शकते? — काही वेळा; पण एकच मुख्य h1 चांगले.", code: `<article>
  <h2>पहिला लेख</h2>
  <p>स्वतंत्र मजकूर.</p>
</article>
<aside>
  <h2>बाजूची टीप</h2>
</aside>`, codeLanguage: "html" },
      { title: "4. landmarks", content: "Landmark = पेजचे नेव्हिगेशनल क्षेत्र: header, nav, main, footer.\n\nहे क्षेत्र स्क्रीन रीडरचे jump स्थानक आहेत.\n\nmain एकच असावे, nav दुवे वेगळे, footer मागील माहिती.\n\nlandmark ने पेज रचना कळल्यावर वापरकर्ता पटकन नेव्हिगेट करतो.\n\nlabel लावा जेथे दुरुपयोग होऊ नये — दुव्यांच्या गटाला nav म्हणा.", code: `<header>शीर्षक</header>
<nav>
  <a href="a.html">मुख्य</a>
  <a href="b.html">संपर्क</a>
</nav>
<main>मुख्य मजकूर</main>
<footer>कॉपी © 2026</footer>`, codeLanguage: "html" },
      { title: "5. table of contents", content: "TOC (अनुक्रमणिका) readable नकाशा देते — शीर्षकांची सूची.\n\nप्रत्येक विभागाला id द्या. मग nav मध्ये दुवे #id ने.\n\nskip link = वरचा दुवा जो थेट मुख्यकडे जातो. हीही छोटी नेव्हिगेशनच.\n\nTOC वापरकर्त्याला द्रुत जाण्याचे साधन — वाचक आनंदी.\n\nपेज दीर्घ असेल तर TOC आवश्यकच.", code: `<nav>
  <a href="#परिचय">परिचय</a>
  <a href="#इतिहास">इतिहास</a>
  <a href="#प्रगती">प्रगती</a>
</nav>
<main id="परिचय">
  <h2>परिचय</h2>
</main>`, codeLanguage: "html" },
      { title: "6. केवळ रचना नव्हे", content: "Outline केवळ दिसण्यासाठी नाही — मौखिक प्रवेशासाठीही.\n\nscreen reader \"शीर्षके त्वरित सूची\" वाचतो — वापरकर्ता फेटाळून पुढे जातो.\n\nheadings अर्थसूचक असल्यास नकाशा robust.\n\nजर headings फक्त मोठ्या अक्षरांनी सजावटीसाठी असतील तर outline रिकामा — हे वाईट.\n\nउपाय: आकार CSS सोडा, meaning HTML द्या.", code: `<p>केवळ दिसणारे मोठे</p>
<h2>खरे विभाग शीर्षक</h2>`, codeLanguage: "html" },
      { title: "Mini Project", content: "आता दीर्घ अभ्यास लेखाची रचना.\n\nh1 मुख्य. तीन h2 विभाग. प्रत्येकात एक h3.\n\nnav मध्ये TOC दुवे. sectioning blocks article, aside.\n\nएक skip link मुख्यकडे. सर्व नियमक्रम स्थिर.", code: `<a href="#मुख्य">मुख्यकडे</a>
<nav>
  <a href="#ए">एक</a>
  <a href="#ब">दोन</a>
</nav>
<main id="मुख्य">
  <h1>लेख शीर्षक</h1>
  <section id="ए">
    <h2>विभाग एक</h2>
  </section>
</main>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["h1 किती असतात?", "hgroup काय करतो?", "sectioning root म्हणजे?", "TOC साठी काय हवे?"],
    quiz: [
      { question: "मुख्य heading किती?", options: ["एकच h1", "अनेक h1", "केवळ h2", "कोणतेही"], correct: 0 },
      { question: "शीर्षक + subtitle गट?", options: ["hgroup", "header", "details", "figure"], correct: 0 },
      { question: "जंप स्थानक म्हणून काम?", options: ["nav", "div", "span", "br"], correct: 0 },
      { question: "TOC दुवे कशाकडे?", options: ["id फ्रॅगमेंट", "absolute URL", "image", "pdf"], correct: 0 },
    ],
    challenge: {
      prompt: "अचूक heading outline असलेलं पेज",
      starterCode: `<h1>मुख्य</h1>
<h2>विभाग</h2>`,
      expectedOutput: "Renders clean semantic outline page",
    },
    interviewQuestions: ["heading क्रम का महत्त्वाचा?", "खरा outline कसा पडताळता?"],
    related: ["html-html5-history", "html-landmarks-aria"],
    prev: "html-html5-history",
    next: "html-landmarks-aria",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-landmarks-aria",
    categoryId: "web",
    title: "Landmarks & ARIA",
    marathiTitle: "Landmarks आणि ARIA — प्रवेश्यता खोल",
    level: "intermediate",
    minutes: 18,
    summary: "role आणि aria-* attributes ने स्क्रीन रीडरनुसार क्षेत्रे, अवस्था व वर्णन देणे — HTML5 मध्येच.",
    sections: [
      { title: "1. landmarks म्हणजे काय", content: "दस्तऐवजातील प्रमुख क्षेत्रे ब्राउझर ओळखतो — header, nav, main, footer.\n\nहे क्षेत्र screen reader मध्ये jump स्थानक म्हणून नोंदले जाते.\n\nrole attribute ते क्षेत्राचा प्रकार सांगतो — उदा. role=\"navigation\".\n\nजेव्हा HTML tag पुरेसे नसतात, तेव्हा role ने क्षेत्राचा प्रकार स्पष्ट होतो.\n\nआधुनिक HTML5 tag आधीच correct role देतात — दुर्मिळ पर्यायच role जोडतो.", code: `<div role="banner">शीर्षक क्षेत्र</div>
<nav>दुवे</nav>
<main>मुख्य मजकूर</main>
<footer>पाद माहिती</footer>`, codeLanguage: "html" },
      { title: "2. aria-label", content: "aria-label घटकाला स्क्रीन रीडरचे स्वतःचे नाव देते.\n\nदृश्य मजकूर नसलेला button (फक्त icon) असेल तर aria-label गरजेचा.\n\nउदा. <button aria-label=\"बंद\">×</button> — वाचकाला \"बंद\" कळेल.\n\naria-label च्या प्राथमिकतेने दृश्य मजकूर वगळला जाऊ शकतो.\n\nजेथे दृश्य मजकूरच धादस, तेथे aria-label नको.", code: `<button aria-label="मेनू उघडा">&#9776;</button>
<nav aria-label="मुख्य नेव्हिगेशन">
  <a href="x.html">मुख्य</a>
</nav>`, codeLanguage: "html" },
      { title: "3. aria-hidden", content: "aria-hidden=\"true\" असलेला घटक वाचकांपासून लपतो.\n\nसजावटीचे icon, पुनरावृत्ती करणारा decorative मजकूर — हे वगळा.\n\nपण खरा मजकूर कधीही aria-hidden करू नका — ती माहिती हरवते.\n\nलपवलेल्या घटकावर focus असू नये; अशा घटकावर कर्सर गेल्यास वाचक गोंधळतो.\n\naria-hidden केवळ screen readers असलेल्या सजावटीसाठी.", code: `<button aria-label="बंद">&#10005;</button>
<p aria-hidden="true">&#9733;&#9733;&#9733;</p>`, codeLanguage: "html" },
      { title: "4. aria-expanded", content: "aria-expanded म्हणजे उघडा/बंद स्थिती दर्शवणारा attribute.\n\ndetails किंवा accordion उघडा की बंद हे सांगते: aria-expanded=\"true/false\".\n\nस्क्रीन रीडर वापरकर्त्याला button नंतरची स्थिती समजते.\n\nउघडल्यावर false ते true होते — हे JavaScript हाताळते.\n\ndetails/summary हा HTML मध्येच त्यासाठी छान पर्याय.", code: `<button aria-expanded="false">आणखी तपशील</button>
<details>
  <summary>अधिक</summary>
  <p>लपलेला मजकूर.</p>
</details>`, codeLanguage: "html" },
      { title: "5. aria-describedby", content: "aria-describedby दुसऱ्या घटकाचा मजकूर \"वर्णन\" म्हणून जोडतो.\n\nफॉर्म फील्डला मदत करणाऱ्या संदेशाला जोडा — उदा. pattern नियम.\n\n<input aria-describedby=\"टीप\"> आणि पुढे <p id=\"टीप\">अंगावर ...</p>.\n\nहे screen reader पहिले label, नंतर वर्णन वाचतो.\n\nसंदेश दृश्य असला तरी screen reader तो वाचतो.", code: `<label for="pw">पासवर्ड</label>
<input id="pw" type="password" aria-describedby="pwTip">
<p id="pwTip">किमान आठ अक्षरे.</p>`, codeLanguage: "html" },
      { title: "6. role वापरण्याचे नियम", content: "role फारच कमी वेळा वापरा — HTML tag आधीच अर्थ सांगतात.\n\nयोग्य वापर: जेथे समान HTML tag नसेल तेथे role=\"search\", role=\"dialog\".\n\nचुकीचा वापर: div वर role=\"button\" जोडणे — त्याऐवजी button element वापरा.\n\nसर्वात महत्त्वाचा: role बदलाऐवजी योग्य element निवडा.\n\nहे ARIA \"केवळ शेवटचा पर्याय\" म्हणून ठेवा.", code: `<form role="search">
  <label>शोध:</label>
  <input type="search" name="q">
</form>`, codeLanguage: "html" },
      { title: "Mini Project", content: "प्रवेश्य टूलबार एकत्र — landmarks आणि ARIA सह.\n\nheader मध्ये आयकॉन button aria-label ने. nav aria-label.\n\naside decorative aria-hidden. details aria-expanded सदृश.\n\nसर्व वाचकांना मौज वेगळ्यात दिसणारा अनुभव.", code: `<header>
  <button aria-label="सेटिंग्ज">&#9881;</button>
</header>
<nav aria-label="अनुप्रयोग">
  <a href="a.html">घर</a>
</nav>
<main>
  <p>मुख्य मजकूर.</p>
  <p aria-hidden="true">&#11088;&#11088;</p>
</main>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["role कधी हवे?", "aria-label वाचणारे कोण?", "aria-hidden कधी नको?", "aria-describedby काय वाचते?"],
    quiz: [
      { question: "आयकॉन button नाव देणारा?", options: ["aria-label", "title", "alt", "data-name"], correct: 0 },
      { question: "सजावट लपवणारा?", options: ["aria-hidden", "hidden", "disabled", "muted"], correct: 0 },
      { question: "तपशीलाची स्थिती?", options: ["aria-expanded", "aria-label", "aria-hidden", "aria-checked"], correct: 0 },
      { question: "फील्ड वर्णन जोडणारा?", options: ["aria-describedby", "aria-label", "placeholder", "name"], correct: 0 },
    ],
    challenge: {
      prompt: "ARIA-संवर्धित पेज",
      starterCode: `<button aria-label="बंद">×</button>`,
      expectedOutput: "Renders accessible landmarks page",
    },
    interviewQuestions: ["ARIA प्रत्येक वेळी हवे का?", "screen reader धोके?"],
    related: ["html-semantic-outline", "html-embedding-advanced"],
    prev: "html-semantic-outline",
    next: "html-embedding-advanced",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-embedding-advanced",
    categoryId: "web",
    title: "Advanced Embedding",
    marathiTitle: "Advanced Embedding — iframe, sandbox आणि वस्तू",
    level: "intermediate",
    minutes: 18,
    summary: "iframe ची सुरक्षा (sandbox, allow), lazy iframe, object/embed आणि media API ची माहिती.",
    sections: [
      { title: "1. iframe आणि sandbox", content: "sandbox=\"\" ने आतलं पेज सर्व परवानग्यांविना चालते — forms, scripts बंद.\n\nसुरक्षेसाठी मर्यादित allow: sandbox=\"allow-scripts\" इतकेच आवश्यक.\n\nallow-same-origin शिवाय scripts येऊ शकत नाहीत.\n\nनियम: फक्त आवश्यक परवानग्या द्या — प्रत्येक परवानगी नेमकी असावी.", code: `<iframe src="map.html" sandbox="" width="400" height="300" title="नकाशा"></iframe>`, codeLanguage: "html" },
      { title: "2. allow — permissions", content: "allow attribute मध्ये ब्राउझर परवानग्या देतो.\n\nallow=\"fullscreen\" पूर्ण स्क्रीन; allow=\"autoplay\" आवाज; allow=\"geolocation\" ठिकाण.\n\nप्रत्येक iframe साठी फक्त आवश्यक permissions देणे सुरक्षित\n\nजास्त परवानग्या देऊ नका — त्या सुरक्षा धोका देतात.\n\nसंवेदनशील API मध्ये iframe ला कधीही सहज चालू नका.", code: `<iframe src="video.html" width="560" height="315" allow="fullscreen; autoplay" title="व्हिडिओ"></iframe>`, codeLanguage: "html" },
      { title: "3. lazy iframe", content: "खूप iframes असल्यास लोडिंग मंद — त्यासाठी lazy.\n\nloading=\"lazy\" असलेला iframe केवळ दिसेल तेव्हा लोड होतो.\n\nस्क्रीनच्या खाली असेल तर तो नाही येत ब्राउझर आधी उरला.\n\nहे performance तर भरपूर सुधारते — पेज वेगाने उघडते.\n\nvisualShift टाळण्यासाठी width/height नेहमी द्या.", code: `<iframe src="map.html" loading="lazy" width="400" height="300" title="नकाशा"></iframe>`, codeLanguage: "html" },
      { title: "4. object आणि embed", content: "object आणि embed अनेक media types आणतात — PDF, SVG, अॅप.\n\nobject मध्ये data आणि type: <object data=\"guide.pdf\" type=\"application/pdf\">.\n\nembed जुने, साधे: <embed src=\"a.swf\" type=\"application/x-shockwave-flash\">.\n\nPDF आणि SVG आधार ब्राउझरमधूनच चालतो — फक्त plugin साठी इशारा.\n\nआज object/embed चा वापर थोडा — media साठी अधिक पर्याय आहेत.", code: `<object data="चार्ट.pdf" type="application/pdf" width="400" height="300">
  <p>PDF read करणे समर्थन नाही: <a href="चार्ट.pdf">डाउनलोड</a></p>
</object>`, codeLanguage: "html" },
      { title: "5. picture-in-picture (चर्चा)", content: "व्हिडिओला छोट्या खिडकीत ठेवणे = picture-in-picture.\n\nहे कोडमधून सांगितले जाते — पण हे HTML attribute नाही.\n\nहे JavaScript ने नियंत्रित होते — HTML attribute नाही.\n\nआधुनिक ब्राउझर त्यासाठी आधार देतात.\n\nHTML मध्ये शिकायला आवश्यक म्हणजे video आणि controls सुयोग्यता.", code: `<video controls width="320" height="180">
  <source src="demo.mp4" type="video/mp4">
  <p>व्हिडिओ समर्थन नाही.</p>
</video>`, codeLanguage: "html" },
      { title: "6. media API प्रॉक्सी में", content: "audio/video elements API-rich असतात — पण ती JavaScript ची.\n\nHTML मध्ये केवळ समर्थ attributes: controls, loop, muted, preload.\n\nplay(), pause(), currentTime, volume — या सर्व method JavaScript.\n\nHTML-only शिकताना या पर्यायांची माहिती ठेवा.\n\nतरीही controls देणे म्हणजेच base वापरकर्त्यांसाठी सर्व उपाय.", code: `<audio controls muted preload="none">
  <source src="intro.ogg" type="audio/ogg">
  <p>आवाज समर्थन नाही.</p>
</audio>`, codeLanguage: "html" },
      { title: "Mini Project", content: "embedding पॅकेज — प्रत्येक घटक सुरक्षित.\n\nएक sandbox=\"\" नकाशा. दुसरा allow=\"fullscreen\" व्हिडिओ.\n\nloading=\"lazy\" बाहेर नकाशा. एक object PDF.\n\nसर्व iframes ला title द्या — प्रवेश्यता अनिवार्य.", code: `<iframe src="map.html" sandbox="" width="400" height="300" title="नकाशा" loading="lazy"></iframe>
<iframe src="video.html" width="560" height="315" allow="fullscreen" title="व्हिडिओ"></iframe>
<object data="guide.pdf" type="application/pdf" width="400" height="300"></object>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["sandbox काय बंद करतो?", "allow कशासाठी?", "lazy iframe उपयोग?", "object काय आणतो?"],
    quiz: [
      { question: "iframe ची सुरक्षा यंत्रणा?", options: ["sandbox", "allow-scripts", "src", "width"], correct: 0 },
      { question: "पूर्ण स्क्रीन परवानगी?", options: ["fullscreen", "scripts", "forms", "popups"], correct: 0 },
      { question: "लोड वेळ सुधारणे?", options: ["loading=\"lazy\"", "async", "defer", "preload"], correct: 0 },
      { question: "PDF घालणारा?", options: ["object", "iframe", "video", "canvas"], correct: 0 },
    ],
    challenge: {
      prompt: "सुरक्षित embed पेज",
      starterCode: `<iframe src="map.html" sandbox="" title="नकाशा"></iframe>`,
      expectedOutput: "Renders secure embeds page",
    },
    interviewQuestions: ["iframe sandbox कधी गरजेचे?", "embed शिवाय पर्याय?"],
    related: ["html-landmarks-aria", "html-microdata"],
    prev: "html-landmarks-aria",
    next: "html-microdata",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-microdata",
    categoryId: "web",
    title: "Microdata & Rich Results",
    marathiTitle: "Microdata आणि Rich Results",
    level: "intermediate",
    minutes: 18,
    summary: "itemscope, itemprop आणि विकिपीडिया-rich स्निपेट्स — तुमच्या पेजला SEO चा स्कोर.",
    sections: [
      { title: "1. microdata म्हणजे काय", content: "Microdata = HTML मध्ये मशीन-वाचनीय माहिती जोडणारे attributes.\n\nहे शोधायला मदत करते: pages, products, people यांचे प्रकार.\n\nमुख्य attributes: itemscope, itemtype, itemprop.\n\nitemscope=\"itemscope\" — घटकाचे स्वतःच्या scope चा block. itemtype schema.org URL.\n\nउदा. <div itemscope> नाव आणि किंमत आतच.", code: `<div itemscope>
  <div itemprop="name">लाल गुलाब</div>
  <div itemprop="price">100</div>
</div>`, codeLanguage: "html" },
      { title: "2. itemscope आणि itemtype", content: "itemscope सांगते \"येथे एक item सुरु\".\n\nitemtype item चा प्रकार: https://schema.org/Product, /Person, /Article.\n\nप्रकारानुसार itemprop ची अपेक्षित यादी असते.\n\nहे URL बरोबर itemtype लिहा — validator सहज तपासतो.\n\nएका itemscope मध्ये फक्त त्या item ची माहिती ठेवा.", code: `<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">मराठी अभ्यास</span>
  <span itemprop="brand">वेब शाळा</span>
</div>`, codeLanguage: "html" },
      { title: "3. itemprop ने मूल्ये", content: "itemprop एक मूल्य/माहिती जोडतो — name, price, description.\n\nबहुतेक मूल्ये मजकूरात आहेत — तीच दृश्य वापरा.\n\nचलनासाठी: <meta itemprop=\"priceCurrency\" content=\"INR\">.\n\nआभासी गुणधर्म meta ते करता — प्रत्यक्ष मजकूर नसताना.\n\nprice म्हणजे आकडा; priceCurrency म्हणजे चलन.", code: `<div itemscope itemtype="https://schema.org/Product">
  <h2 itemprop="name">बेस्ट टी</h2>
  <p itemprop="description">उत्तम चव.</p>
  <meta itemprop="price" content="99">
  <meta itemprop="currency" content="INR">
  <p>किंमत: रुपये 99</p>
</div>`, codeLanguage: "html" },
      { title: "4. rich results", content: "गुगल आणि बिंग rich results दाखवतात — रेटिंग 4.5, किंमत ₹99, ब्रेडक्रंब.\n\nmicrodata ने ते डेटा मिळवला — असा rich स्निपेट मिळतो.\n\nFAQPage itemtype म्हणजे \"प्रश्न-उत्तर\" rich result.\n\nचुकीच्या माहितीवर Google सूचना देतो — खोटे टाळा.", code: `<div itemscope itemtype="https://schema.org/FAQPage">
  <details itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
    <summary itemprop="name">मराठी कशी शिकू?</summary>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <p itemprop="text">दररोज सराव करा.</p>
    </div>
  </details>
</div>`, codeLanguage: "html" },
      { title: "5. JSON-LD समज", content: "JSON-LD दुसरा प्रकार — head मध्ये script, पण हा reference.\n\nपण script आता <script> — HTML दस्तऐवजात सहसा नको.\n\nआमच्या धड्यात <script> नाही — म्हणून JSON-LD फक्त माहितीसाठी दाखवतो.\n\nवास्तवात आधुनिक वेबवर JSON-LD अधिक सामान्य.\n\nतुमच्या सरावात microdata, आधुनिक वेबमध्ये JSON-LD — दोन्ही जाणून घ्या.", code: `<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="name">पुस्तक</span>
</div>`, codeLanguage: "html" },
      { title: "6. त्रुटी आणि सत्यता", content: "माइक्रोडेटा मध्ये खोटी माहिती देऊ नका — चुकीचे label शिक्षा देते.\n\nप्रत्येक itemprop चे मूल्य वास्तविक. currency अचूक.\n\nRich results Validator मध्ये पडताळा — Google Rich Results Test.\n\nचुकीची माहिती काढून टाका — शोध गुणवत्ता दीर्घकाळ टिकते.", code: `<div itemscope itemtype="https://schema.org/Book">
  <h2 itemprop="name">मराठी व्याकरण</h2>
  <meta itemprop="inLanguage" content="mr">
</div>`, codeLanguage: "html" },
      { title: "Mini Project", content: "Product itemtype. name, brand, price, currency.\n\nFAQPage — तीन तपशील प्रश्न. Article प्रकार.\n\nसर्व काही दृश्य मजकुराशी जुळणारे — खोटे नाही.", code: `<div itemscope itemtype="https://schema.org/Product">
  <h1 itemprop="name">मराठी बुक</h1>
  <p itemprop="description">पूर्ण व्याकरण.</p>
  <meta itemprop="price" content="399">
  <meta itemprop="priceCurrency" content="INR">
</div>
<div itemscope itemtype="https://schema.org/FAQPage">
  <details>
    <summary>वितरण?</summary>
    <p>संपूर्ण भारतात.</p>
  </details>
</div>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["microdata म्हणजे?", "itemtype कुठून?", "rich result कसे दिसते?", "खोटे data ठीक का नाही?"],
    quiz: [
      { question: "item scope गुणधर्म?", options: ["itemscope", "itemname", "itemtypeo", "itemref"], correct: 0 },
      { question: "item चा प्रकार कुठे?", options: ["itemtype", "itemprop", "itemid", "itemscope"], correct: 0 },
      { question: "FAQ वरचा schema?", options: ["FAQPage", "Product", "Person", "Event"], correct: 0 },
      { question: "किंमत साठवणे?", options: ["meta itemprop", "h1", "img alt", "label"], correct: 0 },
    ],
    challenge: {
      prompt: "rich results उत्पादन पेज",
      starterCode: `<div itemscope itemtype="https://schema.org/Product"></div>`,
      expectedOutput: "Renders microdata product block",
    },
    interviewQuestions: ["rich results चा फायदा काय?", "schema.org types कुठून?"],
    related: ["html-embedding-advanced", "html-performance"],
    prev: "html-embedding-advanced",
    next: "html-performance",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-performance",
    categoryId: "web",
    title: "Performance in HTML",
    marathiTitle: "HTML Performance — वेगाचे नियम",
    level: "intermediate",
    minutes: 18,
    summary: "preconnect, dns-prefetch, prefetch, preload, lazy loading आणि CLS — HTML-स्तरावर वेग सुधारणे.",
    sections: [
      { title: "1. परफॉर्मन्स ओळख", content: "मोबाईल नेटवर्क मंद असते — HTML काटकसर असणे गरजेचे.\n\nresources (CSS/JS/चित्रे) वेगवेगळ्या वेळी येतात.\n\nवरच्या भागाला सर्वाधिक महत्त्व — critical content लवकर हवे.\n\nHTML-स्ट्रक्चरमध्येच खूप वेळ वाचवता येतो.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>वेग पेज</title>
</head>
<body>
  <h1>प्रथम मजकूर</h1>
</body>
</html>`, codeLanguage: "html" },
      { title: "2. preconnect आणि dns-prefetch", content: "परकीय hosts शी आधी संपर्क करणे = preconnect.\n\n<link rel=\"preconnect\" href=\"https://fonts.example.com\"> — early handshake.\n\nहे थर्ड-पार्टी resources वेगवान करतात.\n\nफक्त गरजेच्या domains ला — बाकी ओव्हरहेड.", code: `<head>
  <link rel="preconnect" href="https://cdn.example.com">
  <link rel="dns-prefetch" href="https://api.example.com">
</head>`, codeLanguage: "html" },
      { title: "3. prefetch आणि preload", content: "पुढील पेजचे संसाधन आधी आणणे = prefetch.\n\n<link rel=\"prefetch\" href=\"next.html\"> — browser idle मध्ये.\n\nसध्याच्या पेजचे महत्वाचे resource preload ने.\n\n<link rel=\"preload\" as=\"image\" href=\"hero.jpg\">.\n\nकाळजीपूर्वक वापरा — काहीही भरपूर नको.", code: `<head>
  <link rel="preload" as="image" href="hero.jpg">
  <link rel="prefetch" href="p2.html">
</head>`, codeLanguage: "html" },
      { title: "4. loading आणि decoding", content: "चित्रे lazy आणि decode पद्धत.\n\nloading=\"lazy\" केवळ नजीकच्या चित्रांना. loading=\"eager\" आधी.\n\ndecoding=\"async\" चित्राचे decode ब्रेक होत नाही.\n\nहे परफॉर्मन्स: जास्त चित्रांवर फरक स्पष्ट.\n\nनियंत्रण: width/height ने layout तर नाही shift.", code: `<img src="b1.jpg" loading="lazy" decoding="async" width="400" height="300" alt="दृश्य">
<img src="b2.jpg" loading="eager" width="200" height="150" alt="मुख्य">`, codeLanguage: "html" },
      { title: "5. CLS रोखणे", content: "CLS = लेआउट अचानक हलणे — मोजमाप योग्य नाही तर वाचक अडचणीत.\n\nwidth आणि height नक्की द्या — चित्र आधीच आरक्षित.\n\nfont बदलाची जागा स्थिर ठेवा — fallback आकाराचा अंदाज.\n\nखेळणारी रचना नेहमी स्थिर ठेवा.\n\nHTML-लेव्हलवर सर्वात कामाची width/height आरक्षणे.", code: `<img src="photo.jpg" width="600" height="400" alt="छायाचित्र">`, codeLanguage: "html" },
      { title: "6. पेलोड काटकसर", content: "प्रत्येक byte मोज — minimum आकार ठेवा.\n\nचित्रे तर्कसंगत आकाराची; media कट; मजकूर अस्पष्ट नको.\n\nCSS/JS फाइली फक्त गरजेच्या ठेवा.\n\nसर्व संसाधने तपासा — रेंडर वेळ कमी होईल.\n\nHTML मध्ये फुटकळ टिप्पण्या भरपूर टाकू नका.", code: `<img src="hero-min.jpg" width="600" height="300" fetchpriority="high" alt="मुख्य चित्र">`, codeLanguage: "html" },
      { title: "Mini Project", content: "परफॉर्मन्स-अनुकूल पेज.\n\nप्रत्येक चित्र width/height + loading sensible.\n\nभारी media lazy. Kटकसर सर्व कायम.", code: `<head>
  <meta charset="utf-8">
  <link rel="preconnect" href="https://cdn.example.com">
  <link rel="preload" as="image" href="hero.jpg">
</head>
<body>
  <img src="hero.jpg" width="800" height="400" fetchpriority="high" alt="नाव">
  <img src="t1.jpg" loading="lazy" width="300" height="200" alt="तपशील">
</body>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["preconnect काय करतो?", "preload कधी वापरतात?", "CLS रोखायला काय?", "fetchpriority कशासाठी?"],
    quiz: [
      { question: "आधी host संपर्क?", options: ["preconnect", "prefetch", "preload", "decode"], correct: 0 },
      { question: "पुढील पेज संसाधन?", options: ["prefetch", "preload", "preconnect", "lazy"], correct: 0 },
      { question: "layout shift रोखणे?", options: ["width+height", "lazy", "alt", "title"], correct: 0 },
      { question: "लवकर लोड आस्था?", options: ["fetchpriority=\"high\"", "srcset", "loading=\"lazy\"", "decoding"], correct: 0 },
    ],
    challenge: {
      prompt: "performance अनुकूल पेज",
      starterCode: `<link rel="preload" as="image" href="hero.jpg">`,
      expectedOutput: "Renders fast HTML page",
    },
    interviewQuestions: ["कुठे preconnect वापरायचे?", "लोड ऑर्डर कशी जुळवते?"],
    related: ["html-microdata", "html-document-resources"],
    prev: "html-microdata",
    next: "html-document-resources",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-document-resources",
    categoryId: "web",
    title: "Document Resources",
    marathiTitle: "Document Resources — head चे खोल विश्व",
    level: "intermediate",
    minutes: 18,
    summary: "canonical, base, robots, Open Graph खोल, theme-color, manifest आणि favicon variants.",
    sections: [
      { title: "1. canonical", content: "canonical एका पेजचा अधिकृत प्रत ठरवतो.\n\nहे duplicate content ची शिक्षा टाळते — search engine एकच URL ओळखतो.\n\n<link rel=\"canonical\" href=\"https://example.com/page\">.\n\nप्रिंट/सॉर्ट आवृत्त्यांना एकच canonical द्या.\n\nयोग्य मूळ URL द्या — ट्रॅकिंग URL नको.", code: `<head>
  <link rel="canonical" href="https://example.com/articles/marathi">
</head>`, codeLanguage: "html" },
      { title: "2. base", content: "<base href=\"https://example.com/\"> मूळ पत्ता दर्शवतो.\n\nपण base ने सर्व relative दुव्यांचा आधार बदलतो.\n\nbase शीर्षकात फक्त एकच ठेवा — लहान साइटसाठी त्याची गरज नाही.\n\nसावधपणा — हा element फार वापरला जात नाही.", code: `<head>
  <base href="/articles/">
</head>
<body>
  <a href="history.html">इतिहास</a>
</body>`, codeLanguage: "html" },
      { title: "3. robots meta", content: "search bots ला सूचना देणारे मेटा.\n\n<meta name=\"robots\" content=\"index, follow\"> — अनेकांनी.\n\nnoindex — पेज ओळखता येऊ नये. nofollow — दुवे नये.\n\nbots या सूचना पाळतात; पण त्या कठोर नियम नाहीत.\n\nबहुतेक पेजवर index, follow ठेवा; फक्त खास पेज वगळा.", code: `<head>
  <meta name="robots" content="index, follow">
</head>`, codeLanguage: "html" },
      { title: "4. og आणि Twitter खोल", content: "Open Graph मध्ये अधिक: og:image:width, og:image:height, og:locale.\n\nTwitter साठी twitter:card — summary_large_image.\n\nहे जेव्हा वाटले जाते तेव्हा rich card तयार.\n\nवाटप करताना जुळलेले metadata पाठवा — संबंधित fields भरा.\n\nog टॅगांची भाषा बदलू नका — नेहमी सारखी ठेवा.\nog:title नाव screen reader ते वाचते.\nog:title नाव शुद्ध वेब बनतो.\nog:title नाव ही सवय ठेवा.\nog:title नाव आधुनिक दृष्टी घ्या.\nog:title नाव सर्वांसाठी खुला.\nog:title नाव वाचक घाबरत नाही.\nog:title नाव प्रवेशयोग्यता वाढते.\nog:image चित्र screen reader ते वाचते.\nog:image चित्र शुद्ध वेब बनतो.\nog:image चित्र ही सवय ठेवा.\nog:image चित्र आधुनिक दृष्टी घ्या.\nog:image चित्र सर्वांसाठी खुला.\nog:image चित्र वाचक घाबरत नाही.\nog:image चित्र प्रवेशयोग्यता वाढते.\nog:title नाव आधुनिक दृष्टी घ्या.\nog:title नाव सर्वांसाठी खुला.\nog:title नाव वाचक घाबरत नाही.\nog:title नाव प्रवेशयोग्यता वाढते.\nog:title नाव मशीन समजते.\nog:title नाव अर्थ स्पष्ट होतो.\nog:title नाव दृष्टिहीनांना मदत.\nog:image चित्र आधुनिक दृष्टी घ्या.\nog:image चित्र सर्वांसाठी खुला.\nog:image चित्र वाचक घाबरत नाही.\nog:image चित्र प्रवेशयोग्यता वाढते.\nog:image चित्र मशीन समजते.\nog:image चित्र अर्थ स्पष्ट होतो.\nog:image चित्र दृष्टिहीनांना मदत.", code: `<head>
  <meta property="og:title" content="मराठी लेख">
  <meta property="og:type" content="article">
  <meta property="og:image" content="cover.jpg">
  <meta name="twitter:card" content="summary_large_image">
</head>`, codeLanguage: "html" },
      { title: "5. theme-color आणि manifest", content: "theme-color browser बारला रंग देते.\n\n<meta name=\"theme-color\" content=\"#123456\">.\n\nPWA साठी manifest JSON — सर्वात head मध्ये link.\n\n<link rel=\"manifest\" href=\"site.webmanifest\">.\n\ntheme-color किमान मोबाइलसाठी छान.", code: `<head>
  <meta name="theme-color" content="#0055aa">
  <link rel="manifest" href="site.webmanifest">
</head>`, codeLanguage: "html" },
      { title: "6. favicon variants", content: "favicon विविध परिस्थितींसाठी.\n\n<link rel=\"icon\" href=\"favicon.ico\"> मुळ. apple-touch-icon iPhone.\n\n16x16 पासून 512x512 पर्यंत sizes/same.\n\nहे marketing नव्हे — दृश्य ओळख browser टॅबमध्ये.\n\nप्रत्येक साइटला favicon हवे — टॅब रिकामा ठेवू नका.", code: `<head>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
</head>`, codeLanguage: "html" },
      { title: "Mini Project", content: "दस्तऐवज head ते body संपूर्ण.\n\ncanonical, robots index. og+twitter पूर्ण खाली.\n\ntheme-color रंग. favicon आणि apple icon.\n\nhead मध्ये प्रत्येक meta चा योग्य उपयोग.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी ब्लॉग</title>
  <link rel="canonical" href="https://example.com/">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="मराठी ब्लॉग">
  <meta property="og:image" content="cover.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#12aa55">
  <link rel="icon" href="favicon.ico">
</head>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["canonical कशासाठी?", "base चा परिणाम?", "noindex म्हणजे?", "theme-color कुठे दिसते?"],
    quiz: [
      { question: "duplicate रोखणारा?", options: ["canonical", "robots", "base", "manifest"], correct: 0 },
      { question: "relative URLs चा पाया?", options: ["base", "article", "main", "head"], correct: 0 },
      { question: "पेज शोधण्यात नको?", options: ["noindex", "index", "follow", "sitemap"], correct: 0 },
      { question: "ब्राउझर बार रंग?", options: ["theme-color", "favicon", "manifest", "og:image"], correct: 0 },
    ],
    challenge: {
      prompt: "पूर्ण head टाका",
      starterCode: `<meta charset="utf-8">`,
      expectedOutput: "Renders complete document resources head",
    },
    interviewQuestions: ["canonical कोणते तेव्हा हवे?", "manifest विना PWA शक्य?"],
    related: ["html-performance", "html-text-typography"],
    prev: "html-performance",
    next: "html-text-typography",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-text-typography",
    categoryId: "web",
    title: "Text & Typography",
    marathiTitle: "Text आणि Typography — अचूक लेखन",
    level: "intermediate",
    minutes: 18,
    summary: "dishes, quotes, ellipsis, nbsp नियम, संख्या आणि Unicode सुसंगत लेखन.",
    sections: [
      { title: "1. dash दोन प्रकार", content: "टाइपोग्राफी मध्ये dash मागासलेले नाही.\nhyphen (-) शब्द-विभाजन. en dash (–) श्रेणी. em dash (—) विराम.\n\"१–३ मे\" मध्ये en dash श्रेणी; \"माझा — एक निर्णय\" em dash.\nही चिन्हे keyboard वर नसतात — आवश्यक तेथे &mdash; व &ndash; वापरा.\nहे अक्षरे जास्त नको — पण योग्य चिन्ह हवे.", code: `<p>वय १८&ndash;२५ वर्ष. शिक्षण&mdash;प्राथमिक ते महाविद्यालय.</p>`, codeLanguage: "html" },
      { title: "2. quotes प्रकार", content: "अवतरण चिन्हे भाषेनुसार बदलतात.\nमराठीत \"...\" सामान्य; इंग्रजीत \"...\" माणूस.\nEuropean भाषांत &laquo; &raquo; आणि &bdquo; &ldquo;.\nHTML attribute मध्येही quotes हीच चिन्हे — कधी nested.\nभाषा पाळून quotes निवडा — क्षेत्रीय अपेक्षा.", code: `<p>ती म्हणाली: &ldquo;मला मराठी आवडते&rdquo;.</p>
<p lang="fr">Elle dit: &laquo;Bonjour&raquo;.</p>`, codeLanguage: "html" },
      { title: "3. ellipsis आणि निकट", content: "मजकूर तोडण्यावर तीन ठिपके (…) — &hellip;.\nतीन स्वतंत्र खाली नको — एक अणकुचीदार वर्ण &hellip;.\nनिअरिश: \"अधिक &hellip;\" — धडा पूर्णता.\nफॉर्म placeholder मध्येही उपयोगी.\nथ्री-पॉइंट संपूर्ण वाचनीयता देतो.", code: `<p>वाचा: आधुनिक मराठी कविता&hellip;</p>`, codeLanguage: "html" },
      { title: "4. nbsp द्वारे संख्या", content: "nbsp (non-breaking space) दोन शब्द एकत्र ठेवतो.\n\"१२&nbsp;मे\" वेगळे नाही होणार. \"₹&nbsp;९९\" समान.\nnumber आणि unit नेहमी एकत्र — &nbsp; जोडा.\nकिंमत, दिनांक, नाव: \"राहुल&nbsp;कुमार\".\nहे ओळीच्या बदलास वाचलेल्याला नको ते टाळते.", code: `<p>किंमत: ₹&nbsp;९९ सर्व्हिस. सुट्टी: १&nbsp;ऑगस्ट&nbsp;२०२६.</p>`, codeLanguage: "html" },
      { title: "5. संख्या ठवणे", content: "दशांश अंक: १०,०००. decimal, thousands.\nटक्के: ५०&nbsp;%. माप: ५&nbsp;किमी.\nमशीनसाठी meta/data मध्ये खरी value ठेवा.\nदिसणारी संख्या वाचण्यास सोपी — दिशा पाळा.", code: `<p>लोकसंख्या: १,२५,०००&nbsp;लोक. वाढ: ५&nbsp;टक्के.</p>`, codeLanguage: "html" },
      { title: "6. Unicode सुसंगत", content: "अक्षर फॉंट — मराठी Unicode ठीक.\ncharset utf-8 निश्चित. encoding जुनी होऊ देऊ नका.\nविशेष वर्ण entities ने — &copy;, &deg;, &euro;.\ncode साठी mono fonts वापरा.\nहे सर्व एकत्र Text Typography खरा धडा.", code: `<meta charset="utf-8">
<p>तापमान २५&nbsp;&deg;C. हक्क &copy; 2026.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "टाइपोग्राफी नियमांनी परिपूर्ण मजकूर.\nen/em dash योग्य. quotes भाषानुसार.\nellipsis अधिक. numbers nbsp ने जोडले.\nUnicode/font सर्व सहज.", code: `<p>वय&mdash;१८&ndash;६०. शुल्क ₹&nbsp;९९&nbsp;मासिक.</p>
<p>ती म्हणाली: &ldquo;अभ्यास&hellip; आवश्यक&rdquo;.</p>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["en dash कधी?", "em dash कधी?", "nbsp का हवे?", "ellipsis कोणते?"],
    quiz: [
      { question: "श्रेणीसाठी dash?", options: ["&ndash;", "&mdash;", "-", "&hellip;"], correct: 0 },
      { question: "विरामासाठी?", options: ["&mdash;", "&ndash;", "&nbsp;", "&amp;"], correct: 0 },
      { question: "संख्या एकत्र ठेवणारा?", options: ["&nbsp;", "&mdash;", "&hellip;", "&copy;"], correct: 0 },
      { question: "तीन ठिपके?", options: ["&hellip;", "&copy;", "&rsquo;", "&deg;"], correct: 0 },
    ],
    challenge: {
      prompt: "टाइपोग्राफी नियम पेज",
      starterCode: `<p>वय १८&ndash;२५&nbsp;वर्ष.</p>`,
      expectedOutput: "Renders typed text correctly",
    },
    interviewQuestions: ["हे नियम prose मध्ये शिकतात का?", "Unicode entities कधीच जरी?"],
    related: ["html-document-resources", "html-interactive-popover"],
    prev: "html-document-resources",
    next: "html-interactive-popover",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-interactive-popover",
    categoryId: "web",
    title: "Interactive Elements",
    marathiTitle: "Interactive Elements — details, dialog आणि popover",
    level: "intermediate",
    minutes: 18,
    summary: "details/summary accordion, dialog मोडल आणि नवीन popover attributes — केवळ HTML ने संवाद.",
    sections: [
      { title: "1. details/summary पुन्हा", content: "details आणि summary एक नावीन्यपूर्ण disclosure.\n<details> मध्ये content; <summary> चा लेबल.\nopen attribute आधीच उघडलेले आणतो.\nFAQ, क्रॅम, accordion — अगदी सुरळीत.", code: `<details>
  <summary>आणखी माहिती</summary>
  <p>येथे वर्णन.</p>
</details>
<details open>
  <summary>आधी उघडलेले</summary>
  <p>दिसत आहे.</p>
</details>`, codeLanguage: "html" },
      { title: "2. dialog मोडल", content: "dialog मोडल/सामान्य संवाद खिडकी.\n<dialog> रचना; open gुण दिसणे.\ndialog रचना HTML; उघडणे-बंद करणे JavaScript लागते.\nform method=\"dialog\" ने dialog बंद होतो.\nप्रवेशयोग्यता: focus आत — modal semantics.", code: `<dialog open>
  <p>संदेश मजकूर.</p>
  <form method="dialog">
    <button type="submit">बंद</button>
  </form>
</dialog>`, codeLanguage: "html" },
      { title: "3. popover attribute", content: "नवीन HTML popover — CSS/JS शिवाय उघडता.\npopover घटक लपलेला असतो; ट्रिगर तो दाखवतो.\npopovertarget button ला जोडतो: <button popovertarget=\"id\">.\npopovertargetaction=\"show|hide|toggle\".\nहे टूलटिप/मेनू जलद रचना.", code: `<button popovertarget="नोट" popovertargetaction="toggle">दाखवा</button>
<div id="नोट" popover="auto">
  <p>जलद संदेश!</p>
</div>`, codeLanguage: "html" },
      { title: "4. accordion रचना", content: "accordion अनेक details — एक-उघडा pattern.\nएकाच वेळी एकच open ठेवणे — हे नियम.\nप्रत्येक details ला summary. उघडल्यावर हा open.\nसंपूर्ण सूची बंद-उघडा नियम ठेवा.\nमराठीत सुलभ फील्ड — थेट सराव.", code: `<details>
  <summary>भाग एक</summary>
  <p>माहिती एक.</p>
</details>
<details>
  <summary>भाग दोन</summary>
  <p>माहिती दोन.</p>
</details>`, codeLanguage: "html" },
      { title: "5. inert attribute", content: "inert म्हणजे निष्क्रिय — कोणताही संवाद/फोकस नाही.\ninert असलेल्या भागात क्लिक, टॅब, read — बंद.\nमोडल खुला असेल तर बाहेरचा भाग inert करा.\nमोडल बाहेरचा भाग बंद करण्यासाठी हे मदत.\nसंवाद JavaScript सोबत नियंत्रित होतो — HTML रचना देते.", code: `<div inert>
  <button type="button">अक्षम</button>
  <a href="x.html">अक्षम दुवा</a>
</div>`, codeLanguage: "html" },
      { title: "6. hidden state व्यवस्थापन", content: "configurator रचना — hidden vs inert.\nhidden — अदृश्य content (पण page मध्ये).\ninert — दृश्य पण निष्क्रिय भाग.\naccordion/टॅब रचना — hidden panes सह.\nफक्त HTML नाही — पण HTML attributes दिशा देतात.", code: `<p hidden>लपलेला.</p>
<div inert>
  <p>दृश्य पण निष्क्रिय.</p>
</div>`, codeLanguage: "html" },
      { title: "Mini Project", content: "इंटरॅक्टिव्ह घटक एकत्र.\npopover टूलटिप. inert बंद क्षेत्र.\nसर्व केवळ HTML attributes — सराव उत्तम.", code: `<details>
  <summary>सेटिंग</summary>
  <p>विषय पहा.</p>
</details>
<button popovertarget="सूचना">&#8505;</button>
<div id="सूचना" popover="auto">मदत!</div>
<div inert>
  <button type="button">बंद</button>
</div>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["details कधी?", "dialog vs popover?", "inert काय करतो?", "accordion रचना?"],
    quiz: [
      { question: "उघडणारे disclosure?", options: ["details/summary", "object", "iframe", "base"], correct: 0 },
      { question: "मोडल विंडो?", options: ["dialog", "div", "article", "canvas"], correct: 0 },
      { question: "बटण-ट्रिगर popover?", options: ["popovertarget", "aria-label", "name", "direction"], correct: 0 },
      { question: "निष्क्रिय भाग?", options: ["inert", "hidden", "disabled", "readonly"], correct: 0 },
    ],
    challenge: {
      prompt: "इंटरॅक्टिव संवाद पेज",
      starterCode: `<button popovertarget="x">नोंद</button>
<div id="x" popover="auto">मजकूर</div>`,
      expectedOutput: "Renders interactive details/dialog/popover page",
    },
    interviewQuestions: ["popover आधार कुठपर्यंत?", "dialog modal सेमंटिक्स?"],
    related: ["html-text-typography", "html-magazine-project"],
    prev: "html-text-typography",
    next: "html-magazine-project",
    levelLabel: HTML3_LABEL,
  },
  {
    slug: "html-magazine-project",
    categoryId: "web",
    title: "Magazine Project",
    marathiTitle: "मासिक प्रकल्प — सर्व कौशल्य एकत्र",
    level: "intermediate",
    minutes: 18,
    summary: "प्रगत मासिक पेज — semantic outline, landmarks, embedded media, microdata, performance आणि संवाद.",
    sections: [
      { title: "1. उद्दिष्टे", content: "हा प्रकल्प HTML Level 3 चे सर्व धडे एकत्र.\nटार्गेट: \"मराठी टेक मासिक\" फ्रंट पेज.\nsemantic outline, landmarks, embedded media, microdata.\nperformance attributes आणि interactive घटक.\nप्रत्येक विभाग हे एक कौशल्याचे demonstrative.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी टेक मासिक</title>
</head>
<body></body>
</html>`, codeLanguage: "html" },
      { title: "2. head resources", content: "head मध्ये सर्व मेटा.\ncharset utf-8, viewport. description, canonical.\nog आणि twitter card. theme-color. favicon.\nperformance: preload hero चित्र, preconnect cdn.\nप्रत्येक meta चा एक उपयोग.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी टेक मासिक</title>
  <meta name="description" content="मराठी तंत्रज्ञान मासिक">
  <link rel="canonical" href="https://example.com/">
  <meta property="og:title" content="मराठी टेक मासिक">
  <meta property="og:image" content="cover.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#104060">
  <link rel="icon" href="favicon.ico">
  <link rel="preload" as="image" href="cover.jpg">
</head>`, codeLanguage: "html" },
      { title: "3. semantic आणि outline", content: "body semantic रचना.\nheader ब्रँड. nav मध्ये TOC. main एक.\nकव्हर article मध्ये h1 आणि hgroup subtitle.\nप्रत्येक विभागाला h2 आणि id. footer संपर्क.", code: `<header>
  <h1>मराठी टेक</h1>
</header>
<nav aria-label="मुख्य">
  <a href="#लेख">लेख</a>
  <a href="#मीडिया">मीडिया</a>
</nav>
<main>
  <h2>आठवड्याचा लेख</h2>
  <p>मुख्य मजकूर.</p>
</main>
<footer>संपर्क: nakoda@example.com</footer>`, codeLanguage: "html" },
      { title: "4. embedded media", content: "लेखात media एकत्र.\nhero चित्र srcset योग्य साईज. video controls.\naudio कव्हर वर्णन. iframe नकाशा sandbox.\nप्रत्येक media ला width/height आणि title.\nloading lazy नंतरच्या media साठी.", code: `<figure>
  <img src="hero-800.jpg" width="800" height="450" fetchpriority="high" alt="हेडर">
  <figcaption>मुख्य चित्र</figcaption>
</figure>
<video controls width="480" height="270">
  <source src="dur.mp4" type="video/mp4">
</video>
<iframe src="map.html" width="400" height="300" title="नकाशा" loading="lazy"></iframe>`, codeLanguage: "html" },
      { title: "5. form आणि a11y", content: "सदस्यता फॉर्म प्रवेश्य.\nautocomplete नाव/ईमेल. inputmode ईमेल.\nlabel प्रत्येक field. fieldset गट. एक skip link.\naria-describedby मदत संदेश. error संदेश स्पष्ट.\nफॉर्म भरताना वेग आणि सुरक्षा.", code: `<a href="#मुख्य">मुख्यकडे</a>
<form action="#" method="post">
  <fieldset>
    <legend>सदस्यता</legend>
    <label>नाव: <input name="n" autocomplete="name" required></label>
    <label>ईमेल: <input type="email" name="e" inputmode="email" autocomplete="email" required></label>
  </fieldset>
  <button type="submit">सदस्य व्हा</button>
</form>`, codeLanguage: "html" },
      { title: "6. माइक्रोडेटा आणि interactive", content: "लेखाला Article microdata.\nitemscope itemtype Article. itemprop name/date.\nFAQ साठी details accordion. dialog/popover नोंद.\nहे rich result चे source बनते.\ninteractive घटक पेजला जीव देतात.", code: `<article itemscope itemtype="https://schema.org/Article">
  <h2 itemprop="headline">मराठी AI</h2>
  <p itemprop="datePublished">2026-09-09</p>
  <p itemprop="author">राहुल</p>
  <p itemprop="articleBody">मराठी AI प्रगती करत आहे...</p>
</article>
<details>
  <summary>प्रश्न</summary>
  <p>उत्तर अतिशय सोपे.</p>
</details>`, codeLanguage: "html" },
      { title: "Mini Project", content: "head resources सर्व. semantic outline स्थापित.\nmedia embedded. form accessible.\nmicrodata rich. interactive घटक. HTML Level 3 पूर्ण.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी टेक मासिक</title>
</head>
<body>
  <header>
    <h1>मराठी टेक</h1>
  </header>
  <main>
    <h2>घडलेलं</h2>
    <p>आजचा लेख.</p>
  </main>
  <footer>
    <p>&copy; 2026 मराठी टेक</p>
  </footer>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["हा प्रकल्प काय एकत्र करतो?", "head मध्ये काय हवे?", "a11y नियम कुठले?", "microdata कुठे?"],
    quiz: [
      { question: "article microdata कुठे?", options: ["main/article मध्ये", "head मध्ये", "footer मध्ये", "nav मध्ये"], correct: 0 },
      { question: "मीडिया आकार राखणे?", options: ["width/height", "srcset", "alt", "controls"], correct: 0 },
      { question: "प्रवेश्य फॉर्म आधार?", options: ["label for", "disabled", "novalidate", "inert"], correct: 0 },
      { question: "इंटरॅक्टिव FAQ?", options: ["details/summary", "iframe", "object", "canvas"], correct: 0 },
    ],
    challenge: {
      prompt: "मासिक फ्रंट पेज बनवा",
      starterCode: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी टेक</title>
</head>
<body></body>
</html>`,
      expectedOutput: "Renders full magazine page",
    },
    interviewQuestions: ["पेज rich result-source बनले का?", "पुढे CSS/JS लेव्हल?"],
    related: ["html-interactive-popover", "html-global-attributes"],
    prev: "html-interactive-popover",
    next: "html-global-attributes",
    levelLabel: HTML3_LABEL,
  },];
