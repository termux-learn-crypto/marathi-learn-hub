# -*- coding: utf-8 -*-
# Generator for HTML Level 3 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/html-level3.ts. Base content ~100-150 words/section,
# self-contained HTML code cells (no network, no <script>, no <style>), codeLanguage: "html".
import json, subprocess, shutil

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=18):
    lessons.append({
        'slug': slug, 'categoryId': 'web', 'title': title, 'marathiTitle': mt,
        'level': 'intermediate', 'minutes': minutes, 'summary': summary,
        'sections': sections, 'practiceQuestions': pq, 'quiz': quiz,
        'challenge': challenge, 'interviewQuestions': iq, 'related': related,
        'prev': prev, 'next': nxt,
    })

def S(title, content, code=None):
    s = {'title': title, 'content': content}
    if code:
        s['code'] = code
    return s

# =====================================================================
# 1. GLOBAL ATTRIBUTES  (Advanced)
# =====================================================================
L('html-global-attributes',
  'Global Attributes',
  'Global Attributes — सर्व घटकांसाठी एक नियम',
  'lang, dir, hidden, title, tabindex, contenteditable आणि data-* — जवळपास प्रत्येक HTML घटकाला लावता येणारे सार्वत्रिक गुणधर्म.',
  [
   S('1. lang आणि dir',
     'Global attributes म्हणजे असे गुणधर्म जे जवळपास प्रत्येक HTML घटकावर चालतात. सगळ्यात पहिले lang आणि dir.\n\nlang मध्ये घटकाची भाषा सांगतो — lang="mr" मराठी, lang="en" इंग्रजी. ब्राउझर त्यानुसार hyphenation, quotes आणि spellcheck निवडतो.\n\ndir दिशा ठरवतो — dir="ltr" डावीकडून, dir="rtl" उजवीकडून. एकाच पेजवर वेगवेगळ्या भागांच्या दिशा वेगळ्या असू शकतात.\n\nlang फक्त एकदाच जोडा, मग उपघटक वारसा घेतात. अर्थ बदलत असेल तरच पुन्हा जोडा.\n\nस्क्रीन रीडरला भाषा कळली की उच्चार योग्य होतो.',
     '<html lang="mr">\n<body>\n  <p>हा भाग मराठीत.</p>\n  <p lang="en">This section is English.</p>\n  <p dir="rtl">ही ओळ उजवीकडून वाचली जाते.</p>\n</body>\n</html>'),
   S('2. hidden',
     'जेव्हा घटक दिसू नये, पण कोडमध्ये असावा, तेव्हा hidden attribute वापरतात.\n\nhidden घटक रेंडरच होत नाही — तो दृष्टिहीनांसाठीही नाही. फक्त conditional कंटेंट साठवण्यासाठी सोयीचा.\n\nतरीही DOM मध्ये राहतो, त्यामुळे JavaScript तो पुन्हा दाखवू शकतं. टॅब बदलताना पॅनेल लपवणे एक उदाहरण.\n\nhidden घटकातले दुवे, फॉर्म वगैरेही सक्रिय राहतात? — नाही, hidden भागातले interactive elements प्रवेशयोग्य नसतात.\n\nप्रवेश्यता कायम ठेवायची असेल तर CSS द्वारे लपवू नका — hidden attribute वर विश्वास ठेवा.',
     '<details open>\n  <summary>माझे बॅगेज</summary>\n  <p>योग्य: हा मजकूर दिसतो.</p>\n</details>\n<p hidden>हा मजकूर लपला आहे पण DOM मध्ये आहे.</p>'),
   S('3. title',
     'title attribute प्रत्येक घटकाला टूलटिप देऊ शकतो.\n\nकेवळ tooltip नाही — त्यात थोडकी स्पष्टता द्या. उदा. चिन्हावर "घरी परत जा". माऊसने वर गेल्यावर टूलटिप दिसते.\n\nस्क्रीन रीडर title नेहमी वाचू शकत नाही, त्यामुळे महत्त्वाची माहिती फक्त title मध्ये ठेवू नका.\n\nटूलटिप वरचा मजकूर क्लिपबोर्डवर कॉपी होत नाही — मोठा मजकूर title मध्ये टाकू नका.\n\ntitle चा गैरवापर नको: आवश्यक तेथेच थोडक्यात.',
     '<p title="उदाहरण टूलटिप">ती खालील मजकूरावर माऊस न्या.</p>\n<a href="index.html" title="मुख्यपृष्ठ">घर</a>'),
   S('4. tabindex',
     'कीबोर्ड नेव्हिगेशनचा क्रम tabindex हाताळतो.\n\ntabindex="0" म्हणजे घटक natural क्रमात टॅब होतो. tabindex="-1" फोकस होतो पण टॅब क्रमात नसतो — प्रोग्रॅमेटिक फोकससाठी उपयोगी.\n\nपॉझिटिव्ह tabindex (1, 2...) कधीच देऊ नका — तो नैसर्गिक क्रम तोडतो आणि वाचक अडकतो.\n\nका? कारण interactive elements आधीच टॅब होतात; फोर्स्ड क्रम बदलल्यास अंतिम वापरकर्ता गोंधळतो.\n\nनियम: तुमच्या कोडचाच क्रम ठीक ठेवा, tabindex शक्य तितका टाळा.',
     '<nav>\n  <a href="h1.html">हेडिंग</a>\n  <a href="p1.html" tabindex="0">परिच्छेद</a>\n  <a href="x1.html" tabindex="-1">फक्त फोकस</a>\n</nav>'),
   S('5. contenteditable',
     'contenteditable="true" असलेला घटक पेजवरच संपादन करता येतो.\n\nहे वापरकर्त्याला मजकूर बदलण्याची जागा देते — जसे नोट्स, टिप्पण्या, drafts.\n\nमग काय होतं? ब्राउझर मजकूर युजरने बदलला तर तो DOM मध्ये दिसतो. पण तो नव्या पेज रीलोडवर गमावला जातो — तो राहण्यासाठी JavaScript पाठवणे लागते.\n\nसुरक्षा: contenteditable मधील मजकूर पाठवताना नेहमी escape करा — HTML तुमच्या सुनावणीने येत नाही.\n\nसोपा वापर: मजकूर वाढवण्यासाठी paragraph साधे output दाखवा.',
     '<p contenteditable="true">या ओळीवर क्लिक करा आणि टाईप करा.</p>'),
   S('6. data-* attributes',
     'data-* हे तुमचे स्वतःचे गुणधर्म — dash नंतर कोणतेही नाव.\n\ndata-user="राहुल", data-role="admin" असे data टाकल्यावर JavaScript ते सहज वाचते.\n\nते स्क्रीन रीडरला दिसत नाहीत आणि शोधायलाही उपयोगी नसतात — फक्त component स्टेट.\n\nनियम: data-* नेहमी साधा स्वरूपात ठेवा; संवेदनशील माहिती data मध्ये नको — ती पेज स्रोतात दिसते.\n\nउदा. list item ला id न देता data-id द्या.',
     '<ul>\n  <li data-id="101" data-role="student">राहुल</li>\n  <li data-id="102">सिमा</li>\n</ul>'),
   S('Mini Project',
     'आता सर्व global attributes एकत्र — एक small sample page.\n\nएक paragraph lang="mr". दुसरा lang="en". एक hidden box संदेश.\n\nएक contenteditable टीप. एक data-* नोंद असलेली सूची. title टूलटिप.\n\nही रचना केल्यावर global attributes चा उपयोग पक्का होतो.',
     '<html lang="mr">\n<body>\n  <p lang="mr" title="मराठी">नमस्कार मराठी शिक्षक.</p>\n  <p hidden>दिसत नसलेला संदेश.</p>\n  <div data-course="html" data-level="3">HTML Level 3</div>\n  <p contenteditable="true">टीप लिहा...</p>\n</body>\n</html>'),
  ],
  ['lang कधी बदलतो?', 'hidden वर मजकूर का राहतो?', 'tabindex="0" काय करतो?', 'data-* कशासाठी?'],
  [{'q':'मराठीचे भाषा गुणधर्म?','o':['lang="mr"','lang="hi"','dir="rtl"','id="mr"'],'c':0},
   {'q':'element लपवणारा attribute?','o':['hidden','invisible','close','none'],'c':0},
   {'q':'कीबोर्ड क्रम नैसर्गिक राहण्यासाठी?','o':['tabindex="0"','tabindex="1"','tabindex="-1"','tabindex="all"'],'c':0},
   {'q':'स्वतःचे गुणधर्म?','o':['data-*','meta-*','extra-*','own-*'],'c':0}],
  {'prompt':'global attributes चे demonstrative पेज','starterCode':'<p lang="mr">मराठी मजकूर</p>','expectedOutput':'Renders page with lang, hidden, data-*, contenteditable'},
  ['global attributes उपयोग काय?', 'conteneditable शिवाय कोणता पर्याय?'],
  ['html-semantic-outline', 'html-forms-ux'],
  'html-magazine-project', 'html-forms-ux')

# =====================================================================
# 2. FORMS UX & INTELLIGENCE
# =====================================================================
L('html-forms-ux',
  'Forms UX & Intelligence',
  'Forms UX — autocomplete, inputmode आणि स्मार्ट फॉर्म',
  'आधुनिक फॉर्म autocomplete taxonomy, inputmode, autofocus आणि novalidate सह वापरकर्त्याला कमी वेळ घेतात.',
  [
   S('1. autocomplete taxonomy',
     'autocomplete attribute हाताने डेटा भरतो — नाव, ईमेल, पत्ता, फोन.\n\noff अर्थात बंद. name, email, tel, street-address, postal-code — अशा मूल्यांची मोठी शब्दावली आहे.\n\nब्राउझर मागील भरलेली मूल्ये ओळखून सुचना देतो. त्यामुळे फॉर्म वेगाने भरला जातो.\n\nएकाच फॉर्ममध्ये अनेक fields autocomplete ने जोडले की browser गट वेळोवेळी वापरतो.\n\nautocomplete मध्ये street-address, postal-code, country अशी अधिक मूल्ये आहेत — वापरा.',
     '<form action="#" method="post">\n  <label>नाव: <input name="n" autocomplete="name"></label>\n  <label>ईमेल: <input name="e" type="email" autocomplete="email"></label>\n  <label>गाव: <input name="g" autocomplete="street-address"></label>\n</form>'),
   S('2. inputmode',
     'inputmode तुम्हाला जागा देतो की कोणतं कीबोर्ड उघडावं.\n\ninputmode="numeric" फोन कीबोर्डवर अंक. inputmode="decimal" दशांश चिन्ह. inputmode="email" @ आणि . बटणे.\n\nहे फोनवर खूप मदत करते — ईमेल फील्डवर अंक कीबोर्ड उघडणे हात वाया.\n\ntype च्या जोडीने वापरा: type="text" + inputmode="numeric" म्हणजे अंक पण कोणतेही formatting नको.\n\ntel, email, url या types आधीच व्यवस्थापित कीबोर्ड देतात — तरीही तो वापरा.',
     '<label>पिन: <input name="pin" type="text" inputmode="numeric" pattern="[0-9]{6}"></label>\n<label>ईमेल: <input name="em" type="email" inputmode="email"></label>'),
   S('3. autofocus',
     'पेज उघडताच पहिल्या फील्डवर फोकस हवा तर autofocus.\n\nautofocus वापरलेला input आधीच भरायला तयार — स्क्रीन रीडरला स्थान कळते.\n\nनियम: फक्त एकाच फील्डवर autofocus द्या — पेजवर एक.\n\nकधी नको? जेव्हा वापरकर्ता स्क्रोल करत असेल — फोकस त्याला वर आणतो.\n\nमालमत्तेचा नियम: autofocus आणि tabindex जुळवू नका — फोकस क्रम गोंधळतो.',
     '<form action="#" method="post">\n  <label>नाव: <input name="n" autofocus></label>\n  <label>ईमेल: <input type="email" name="e"></label>\n</form>'),
   S('4. novalidate',
     'ब्राउझरचा default validation बंद करणे novalidate ने.\n\nहे कधी? जेव्हा JavaScript चा स्वतःचा validation code असेल, किंवा संदेश अनुकूल करायचे असेल.\n\nform novalidate लागल्यावर required, pattern, type यांचे ब्राउझर संदेश दिसत नाहीत.\n\nसावध राहा: novalidate तुमचे स्वतःचे तपासणी कार्यक्रम बंद करत नाही — फक्त ब्राउझरचे.\n\nजर server validator नियमांना हे HTML फॉलो करत नसेल, तर तुम्हीच जोखीम घेता.',
     '<form action="#" method="post" novalidate>\n  <label>ईमेल: <input type="email" name="e" required></label>\n  <button type="submit">पाठवा</button>\n</form>'),
   S('5. fieldset आणि disabled',
     'फॉर्मचा भाग संदर्भ आणि स्थिती fieldset द्वारे गटबद्ध करा.\n\nfieldset disabled लागल्यावर आतले सर्व controls निष्क्रिय — पाठवणारे मूल्यही नाही.\n\nहे subscription form मध्ये उपयोगी: बंद पॅकेज दिसतं पण निवडताही येत.\n\nlegend ने गटाचं नाव सांगतो; स्क्रीन रीडर fieldset एकूण संदर्भ वाचतो.\n\nfieldset ने गट केल्यावर form चा क्रम वाचणी सोपी होते.',
     '<form action="#" method="post">\n  <fieldset disabled>\n    <legend>बंद पॅकेज</legend>\n    <label><input type="radio" name="p" value="a"> बेसिक</label>\n    <label><input type="radio" name="p" value="b"> प्रो</label>\n  </fieldset>\n</form>'),
   S('6. form attribute',
     'input ला form मध्ये नसले तरी form चा गुणधर्म जोडता येतो.\n\nform="formId" नावाच्या attribute ने कुठल्याही असलेल्या इनपुटला एका बाहेरील form शी जोडला जातो.\n\nमोठ्या layout मध्ये fields वेगवेगळ्या ठिकाणी असतात — हे तोडते.\n\nप्रकार: formaction, formmethod, formtarget ही बटणांवर वापरतात.\n\nsubmit बटण form attribute ने लावले तर त्याच्या form शी जोडणी निश्चित.',
     '<form id="मुख्य" action="#" method="post">\n  <button type="submit">पाठवा</button>\n</form>\n<input name="टीप" form="मुख्य">'),
   S('Mini Project',
     'फॉर्म UX आता एकत्र — भरायला वेगवान आणि सोपा फॉर्म.\n\nautocomplete सर्व fields वर. inputmode योग्य कीबोर्ड.\n\nautofocus पहिल्या field. novalidate नाही — browser तपासणी ठीक.\n\nएक fieldset disabled सह प्रचलित नसलेला पर्याय. form attribute बाहेरील button.',
     '<form action="#" method="post">\n  <fieldset>\n    <legend>संपर्क</legend>\n    <label>नाव: <input name="n" autocomplete="name" autofocus></label>\n    <label>फोन: <input name="ph" type="tel" inputmode="tel" autocomplete="tel"></label>\n    <label>गाव: <input name="g" autocomplete="street-address"></label>\n  </fieldset>\n  <button type="submit">पाठवा</button>\n</form>'),
  ],
  ['autocomplete मूल्ये कुठले?', 'inputmode कधी वापरतात?', 'novalidate कशासाठी?', 'form attribute काय जोडतो?'],
  [{'q':'कीबोर्ड नियंत्रण करणारा?','o':['inputmode','type','placeholder','required'],'c':0},
   {'q':'फॉर्मचा validation बंद करणारा?','o':['novalidate','autocomplete','autofocus','formtarget'],'c':0},
   {'q':'गट बंद करणारा attribute?','o':['disabled','readonly','muted','inert'],'c':0},
   {'q':'बाहेरील input जोडणारा?','o':['form attribute','action','fieldset','legend'],'c':0}],
  {'prompt':'ऑर्डर फॉर्म UX दाखवा','starterCode':'<form action="#" method="post">\n  <label>नाव: <input name="n" autocomplete="name"></label>\n</form>','expectedOutput':'Renders smart form with autocomplete taxonomy'},
  ['मोबाइलवर फॉर्म भरताना काय सोपे होते?', 'disabled fieldset चे नियम?'],
  ['html-global-attributes', 'html-html5-history'],
  'html-global-attributes', 'html-html5-history')

# =====================================================================
# 3. HTML HISTORY & STANDARDS
# =====================================================================
L('html-html5-history',
  'HTML History & Standards',
  'HTML चा इतिहास आणि मानके',
  'HTML4 ते HTML5 आणि living standard — doctype, quirks mode, deprecated tags आणि validity यांचा प्रवास.',
  [
   S('1. HTML4 ते HTML5',
     '1997 मध्ये HTML4 आले. तेव्हा layout साठी फक्त table आणि font वापरत होते.\n\n2000 च्या दशकात XHTML आले — कडक व्याकरण, पण व्यावहारिक अडचणी.\n\n2014 मध्ये HTML5 प्रकाशित झाला — semantics, video, canvas, forms प्रगत.\n\nHTML5 चे ध्येय एक: रचना आणि सादरीकरण वेगळे — CSS ला दिसणे, HTML ला अर्थ.\n\nही दिशा आजही कायम.',
     '<div class="हेडर">जुनी पद्धत</div>\n<header>HTML5 मध्ये अर्थपूर्ण</header>'),
   S('2. doctype आणि mode',
     'पहिली ओळ <!DOCTYPE html> आहे — सर्वांत महत्त्वाची.\n\nयाच्याशिवाय ब्राउझर quirks mode मध्ये जातो — जुनी, अंदाजे CSS.\n\ndoctype दिल्यावर standards mode — नियमांची अचूक अंमलबजावणी.\n\nXHTML चे कडक doctype आता नको — साधे <!DOCTYPE html> पुरेसे.\n\nvisual layout doctype ब्राउझरला सांगतो — कोणता मोड वापरायचा: standards की quirks.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी पेज</title>\n</head>\n<body></body>\n</html>'),
   S('3. deprecated tags',
     'काही tags मानकांमधून निघून गेले — deprecated.\n\n<center> मधलं ठिकाण; <font> अक्षर शैली; <marquee> नाचणारा मजकूर; <blink> चमकणारा.\n\nहे सर्व equivalents CSS ने बदलले — text-align, font-family, animation.\n\nनियम: HTML मध्ये structure, CSS मध्ये presentation.\n\nजुने tags आणखी वाचतात पण — वापरू नका.',
     '<center>गेले</center>\n<font color="red">जुने</font>\n<p class="ओळ">आधुनिक संदर्भ</p>'),
   S('4. standards आणि validity',
     'HTML मानक WHATWG आणि W3C मिळून ठरवतात — living standard.\n\nvalid HTML म्हणजे व्याकरणाच्या नियमांशी जुळणारे — सर्व tags योग्य, attributes चालतात.\n\nValidator टूल्स (जसे W3C validator) तुमचे संपूर्ण पेज तपासतात.\n\ninvalid HTML मध्ये ब्राउझर स्वतः पुनर्बांधणी करतो — पण गोंधळ निर्माण होण्याचा धोका.\n\nमराठी शिकवण्यासाठी: अचूकता नेहमी गुणवत्तेचे लक्षण.',
     '<p>वाचला जाणारा मजकूर.</p>'),
   S('5. quirks mode चे नुकसान',
     'quirks mode जुन्या ब्राउझरचा वर्तन कसा? — अचूक मोजमाप नाही.\n\nप्रथमच्या पेजवर doctype गहाळ असल्यास layout ची तुलना कोणत्याही आधाराशिवाय होते.\n\nबाहेरचा CSS scale वेगळा — त्यामुळे responsive design तुटतो.\n\nत्यावर उपाय एकच: प्रत्येक दस्तऐवजासाठी doctype लिहा.\n\nसावधान: doctype न दिल्यास ब्राउझर जुने अंदाज वापरतो — त्यामुळे responsive रचना बिघडू शकते.',
     '<!DOCTYPE html>\n<html>\n<body>\n  <p>डूक्टाइप नेहमी पहिली ओळ!</p>\n</body>\n</html>'),
   S('6. मराठी HTML दत्त',
     'मराठीत मजकूर लिहिताना दोन अटी पाळा.\n\nपहिली: charset utf-8 पेजच्या head मध्ये. दुसरी: lang="mr" html टॅगवर.\n\ntitle मराठीत असले तरी search engine ते अचूक ओळखतो.\n\nमराठी शब्द strong/em ने संदर्भ मिळवतात — विकृत विरुद्ध नाही.\n\nआपले मराठी पेज standards नुसारच बनवा.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी मानक</title>\n</head>\n</html>'),
   S('Mini Project',
     'एक अतुलनीय standards पेज बनवूया.\n\n<!DOCTYPE html> ने सुरुवात. html lang="mr".\n\nhead मध्ये charset, title, meta. body मध्ये semantic tags.\n\nकोणतेही deprecated tag नको. असा HTML लिहा ज्याची validity शुद्ध असेल.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी मानक पेज</title>\n</head>\n<body>\n  <header><h1>नमस्कार</h1></header>\n  <main><p>HTML मानकांचा सराव.</p></main>\n  <footer><p>&copy; 2026</p></footer>\n</body>\n</html>'),
  ],
  ['doctype कशासाठी?', 'quirks mode म्हणजे?', 'deprecated tags नको का?', 'living standard काय?'],
  [{'q':'standards mode साठी आवश्यक?','o':['<!DOCTYPE html>','<meta charset>','lang','title'],'c':0},
   {'q':'जुने deprecated tag?','o':['<center>','<header>','<figure>','<details>'],'c':0},
   {'q':'HTML5 कधी प्रसिद्ध?','o':['2014','1997','2000','2009'],'c':0},
   {'q':'presentation कडे नेणारे?','o':['CSS','HTML','meta','table'],'c':0}],
  {'prompt':'आधुनिक standards पेज बनवा','starterCode':'<!DOCTYPE html>\n<html lang="mr">\n<body></body>\n</html>','expectedOutput':'Renders valid modern page'},
  ['HTML5 मुळे फायदा काय?', 'पुढे काय living standard ने?'],
  ['html-forms-ux', 'html-semantic-outline'],
  'html-forms-ux', 'html-semantic-outline')

# =====================================================================
# 4. SEMANTIC OUTLINE
# =====================================================================
L('html-semantic-outline',
  'Semantic Outline',
  'Semantic Outline — शीर्षकांचा नकाशा',
  'h1-h6 चा नियमित क्रम, hgroup, sectioning roots आणि TOC — प्रत्येक पेजचा खरा नकाशा.',
  [
   S('1. heading hierarchy',
     'पेजची शीर्षके h1 ते h6 असा नियमित क्रम पाळतात.\n\nh1 पेजचा मुख्य विषय — एकच असावे. h2 मोठे उपविभाग, h3 त्यातले भाग.\n\nस्तर उडवू नका — h1 नंतर थेट h4 नको. तो क्रम स्क्रीन रीडरची नेव्हिगेशन रचना आहे.\n\nheadings मधून वाचक "कुठे आहे मी" हे समजतात.\n\nफक्त आकाराच्या आधारावर heading निवडू नका — विषयाच्या गड्ड्यानुसार.',
     '<h1>शहरातील बाग</h1>\n<h2>वनस्पती</h2>\n<h3>गुलाब</h3>\n<h2>प्राणी</h2>'),
   S('2. hgroup',
     'hgroup दोन शीर्षकांना एक गट म्हणून जोडतो.\n\nउदा. हेडलाइन + subtitle: "महाराष्ट्राला मोठा विजय" आणि "चार गोल नोंदवले".\n\nहा गट मुख्य heading सोबतचा context असतो — मुख्य शीर्षकच वाचनीय ठरतो.\n\nस्क्रीन रीडर hgroup मधून मुख्य heading वाचतो.\n\nरचना: hgroup मध्ये एकच h1-h6, बाकी p किंवा span.',
     '<hgroup>\n  <h1>औद्योगिक प्रगती</h1>\n  <p>उज्ज्वल बातमी</p>\n</hgroup>'),
   S('3. sectioning элементы',
     'काही घटक नवीन outline रचना तयार करतात — sectioning content.\n\nsection, article, aside, nav, header, footer — हे सर्व "ओळखीच्या" सीमा देतात.\n\nत्यांच्यातील heading क्रम स्वतंत्र असू शकतो — मुख्य नकाशाला धक्का नाही.\n\nदस्तऐवज एक गुंतागुंतीचा नकाशा होतो, पण तरीदेखील समजण्यासारखा.\n\nप्रत्येक sectioning block मध्ये त्याची स्वतःची h1 असू शकते? — काही वेळा; पण एकच मुख्य h1 चांगले.',
     '<article>\n  <h2>पहिला लेख</h2>\n  <p>स्वतंत्र मजकूर.</p>\n</article>\n<aside>\n  <h2>बाजूची टीप</h2>\n</aside>'),
   S('4. landmarks',
     'Landmark = पेजचे नेव्हिगेशनल क्षेत्र: header, nav, main, footer.\n\nहे क्षेत्र स्क्रीन रीडरचे jump स्थानक आहेत.\n\nmain एकच असावे, nav दुवे वेगळे, footer मागील माहिती.\n\nlandmark ने पेज रचना कळल्यावर वापरकर्ता पटकन नेव्हिगेट करतो.\n\nlabel लावा जेथे दुरुपयोग होऊ नये — दुव्यांच्या गटाला nav म्हणा.',
     '<header>शीर्षक</header>\n<nav>\n  <a href="a.html">मुख्य</a>\n  <a href="b.html">संपर्क</a>\n</nav>\n<main>मुख्य मजकूर</main>\n<footer>कॉपी © 2026</footer>'),
   S('5. table of contents',
     'TOC (अनुक्रमणिका) readable नकाशा देते — शीर्षकांची सूची.\n\nप्रत्येक विभागाला id द्या. मग nav मध्ये दुवे #id ने.\n\nskip link = वरचा दुवा जो थेट मुख्यकडे जातो. हीही छोटी नेव्हिगेशनच.\n\nTOC वापरकर्त्याला द्रुत जाण्याचे साधन — वाचक आनंदी.\n\nपेज दीर्घ असेल तर TOC आवश्यकच.',
     '<nav>\n  <a href="#परिचय">परिचय</a>\n  <a href="#इतिहास">इतिहास</a>\n  <a href="#प्रगती">प्रगती</a>\n</nav>\n<main id="परिचय">\n  <h2>परिचय</h2>\n</main>'),
   S('6. केवळ रचना नव्हे',
     'Outline केवळ दिसण्यासाठी नाही — मौखिक प्रवेशासाठीही.\n\nscreen reader "शीर्षके त्वरित सूची" वाचतो — वापरकर्ता फेटाळून पुढे जातो.\n\nheadings अर्थसूचक असल्यास नकाशा robust.\n\nजर headings फक्त मोठ्या अक्षरांनी सजावटीसाठी असतील तर outline रिकामा — हे वाईट.\n\nउपाय: आकार CSS सोडा, meaning HTML द्या.',
     '<p>केवळ दिसणारे मोठे</p>\n<h2>खरे विभाग शीर्षक</h2>'),
   S('Mini Project',
     'आता दीर्घ अभ्यास लेखाची रचना.\n\nh1 मुख्य. तीन h2 विभाग. प्रत्येकात एक h3.\n\nnav मध्ये TOC दुवे. sectioning blocks article, aside.\n\nएक skip link मुख्यकडे. सर्व नियमक्रम स्थिर.',
     '<a href="#मुख्य">मुख्यकडे</a>\n<nav>\n  <a href="#ए">एक</a>\n  <a href="#ब">दोन</a>\n</nav>\n<main id="मुख्य">\n  <h1>लेख शीर्षक</h1>\n  <section id="ए">\n    <h2>विभाग एक</h2>\n  </section>\n</main>'),
  ],
  ['h1 किती असतात?', 'hgroup काय करतो?', 'sectioning root म्हणजे?', 'TOC साठी काय हवे?'],
  [{'q':'मुख्य heading किती?','o':['एकच h1','अनेक h1','केवळ h2','कोणतेही'],'c':0},
   {'q':'शीर्षक + subtitle गट?','o':['hgroup','header','details','figure'],'c':0},
   {'q':'जंप स्थानक म्हणून काम?','o':['nav','div','span','br'],'c':0},
   {'q':'TOC दुवे कशाकडे?','o':['id फ्रॅगमेंट','absolute URL','image','pdf'],'c':0}],
  {'prompt':'अचूक heading outline असलेलं पेज','starterCode':'<h1>मुख्य</h1>\n<h2>विभाग</h2>','expectedOutput':'Renders clean semantic outline page'},
  ['heading क्रम का महत्त्वाचा?', 'खरा outline कसा पडताळता?'],
  ['html-html5-history', 'html-landmarks-aria'],
  'html-html5-history', 'html-landmarks-aria')

# =====================================================================
# 5. LANDMARKS & ARIA
# =====================================================================
L('html-landmarks-aria',
  'Landmarks & ARIA',
  'Landmarks आणि ARIA — प्रवेश्यता खोल',
  'role आणि aria-* attributes ने स्क्रीन रीडरनुसार क्षेत्रे, अवस्था व वर्णन देणे — HTML5 मध्येच.',
  [
   S('1. landmarks म्हणजे काय',
     'दस्तऐवजातील प्रमुख क्षेत्रे ब्राउझर ओळखतो — header, nav, main, footer.\n\nहे क्षेत्र screen reader मध्ये jump स्थानक म्हणून नोंदले जाते.\n\nrole attribute ते क्षेत्राचा प्रकार सांगतो — उदा. role="navigation".\n\nजेव्हा HTML tag पुरेसे नसतात, तेव्हा role ने क्षेत्राचा प्रकार स्पष्ट होतो.\n\nआधुनिक HTML5 tag आधीच correct role देतात — दुर्मिळ पर्यायच role जोडतो.',
     '<div role="banner">शीर्षक क्षेत्र</div>\n<nav>दुवे</nav>\n<main>मुख्य मजकूर</main>\n<footer>पाद माहिती</footer>'),
   S('2. aria-label',
     'aria-label घटकाला स्क्रीन रीडरचे स्वतःचे नाव देते.\n\nदृश्य मजकूर नसलेला button (फक्त icon) असेल तर aria-label गरजेचा.\n\nउदा. <button aria-label="बंद">×</button> — वाचकाला "बंद" कळेल.\n\naria-label च्या प्राथमिकतेने दृश्य मजकूर वगळला जाऊ शकतो.\n\nजेथे दृश्य मजकूरच धादस, तेथे aria-label नको.',
     '<button aria-label="मेनू उघडा">&#9776;</button>\n<nav aria-label="मुख्य नेव्हिगेशन">\n  <a href="x.html">मुख्य</a>\n</nav>'),
   S('3. aria-hidden',
     'aria-hidden="true" असलेला घटक वाचकांपासून लपतो.\n\nसजावटीचे icon, पुनरावृत्ती करणारा decorative मजकूर — हे वगळा.\n\nपण खरा मजकूर कधीही aria-hidden करू नका — ती माहिती हरवते.\n\nलपवलेल्या घटकावर focus असू नये; अशा घटकावर कर्सर गेल्यास वाचक गोंधळतो.\n\naria-hidden केवळ screen readers असलेल्या सजावटीसाठी.',
     '<button aria-label="बंद">&#10005;</button>\n<p aria-hidden="true">&#9733;&#9733;&#9733;</p>'),
   S('4. aria-expanded',
     'aria-expanded म्हणजे उघडा/बंद स्थिती दर्शवणारा attribute.\n\ndetails किंवा accordion उघडा की बंद हे सांगते: aria-expanded="true/false".\n\nस्क्रीन रीडर वापरकर्त्याला button नंतरची स्थिती समजते.\n\nउघडल्यावर false ते true होते — हे JavaScript हाताळते.\n\ndetails/summary हा HTML मध्येच त्यासाठी छान पर्याय.',
     '<button aria-expanded="false">आणखी तपशील</button>\n<details>\n  <summary>अधिक</summary>\n  <p>लपलेला मजकूर.</p>\n</details>'),
   S('5. aria-describedby',
     'aria-describedby दुसऱ्या घटकाचा मजकूर "वर्णन" म्हणून जोडतो.\n\nफॉर्म फील्डला मदत करणाऱ्या संदेशाला जोडा — उदा. pattern नियम.\n\n<input aria-describedby="टीप"> आणि पुढे <p id="टीप">अंगावर ...</p>.\n\nहे screen reader पहिले label, नंतर वर्णन वाचतो.\n\nसंदेश दृश्य असला तरी screen reader तो वाचतो.',
     '<label for="pw">पासवर्ड</label>\n<input id="pw" type="password" aria-describedby="pwTip">\n<p id="pwTip">किमान आठ अक्षरे.</p>'),
   S('6. role वापरण्याचे नियम',
     'role फारच कमी वेळा वापरा — HTML tag आधीच अर्थ सांगतात.\n\nयोग्य वापर: जेथे समान HTML tag नसेल तेथे role="search", role="dialog".\n\nचुकीचा वापर: div वर role="button" जोडणे — त्याऐवजी button element वापरा.\n\nसर्वात महत्त्वाचा: role बदलाऐवजी योग्य element निवडा.\n\nहे ARIA "केवळ शेवटचा पर्याय" म्हणून ठेवा.',
     '<form role="search">\n  <label>शोध:</label>\n  <input type="search" name="q">\n</form>'),
   S('Mini Project',
     'प्रवेश्य टूलबार एकत्र — landmarks आणि ARIA सह.\n\nheader मध्ये आयकॉन button aria-label ने. nav aria-label.\n\naside decorative aria-hidden. details aria-expanded सदृश.\n\nसर्व वाचकांना मौज वेगळ्यात दिसणारा अनुभव.',
     '<header>\n  <button aria-label="सेटिंग्ज">&#9881;</button>\n</header>\n<nav aria-label="अनुप्रयोग">\n  <a href="a.html">घर</a>\n</nav>\n<main>\n  <p>मुख्य मजकूर.</p>\n  <p aria-hidden="true">&#11088;&#11088;</p>\n</main>'),
  ],
  ['role कधी हवे?', 'aria-label वाचणारे कोण?', 'aria-hidden कधी नको?', 'aria-describedby काय वाचते?'],
  [{'q':'आयकॉन button नाव देणारा?','o':['aria-label','title','alt','data-name'],'c':0},
   {'q':'सजावट लपवणारा?','o':['aria-hidden','hidden','disabled','muted'],'c':0},
   {'q':'तपशीलाची स्थिती?','o':['aria-expanded','aria-label','aria-hidden','aria-checked'],'c':0},
   {'q':'फील्ड वर्णन जोडणारा?','o':['aria-describedby','aria-label','placeholder','name'],'c':0}],
  {'prompt':'ARIA-संवर्धित पेज','starterCode':'<button aria-label="बंद">×</button>','expectedOutput':'Renders accessible landmarks page'},
  ['ARIA प्रत्येक वेळी हवे का?', 'screen reader धोके?'],
  ['html-semantic-outline', 'html-embedding-advanced'],
  'html-semantic-outline', 'html-embedding-advanced')

# =====================================================================
# 6. ADVANCED EMBEDDING
# =====================================================================
L('html-embedding-advanced',
  'Advanced Embedding',
  'Advanced Embedding — iframe, sandbox आणि वस्तू',
  'iframe ची सुरक्षा (sandbox, allow), lazy iframe, object/embed आणि media API ची माहिती.',
  [
   S('1. iframe आणि sandbox',
     'iframe आत दुसरे पेज आणते. पण ते सुरक्षित ठेवणे जरुरीचे.\n\nsandbox="" ने आतलं पेज सर्व परवानग्यांविना चालते — forms, scripts बंद.\n\nसुरक्षेसाठी मर्यादित allow: sandbox="allow-scripts" इतकेच आवश्यक.\n\nallow-same-origin शिवाय scripts येऊ शकत नाहीत.\n\nनियम: फक्त आवश्यक परवानग्या द्या — प्रत्येक परवानगी नेमकी असावी.',
     '<iframe src="map.html" sandbox="" width="400" height="300" title="नकाशा"></iframe>'),
   S('2. allow — permissions',
     'allow attribute मध्ये ब्राउझर परवानग्या देतो.\n\nallow="fullscreen" पूर्ण स्क्रीन; allow="autoplay" आवाज; allow="geolocation" ठिकाण.\n\nप्रत्येक iframe साठी फक्त आवश्यक permissions देणे सुरक्षित\n\nजास्त परवानग्या देऊ नका — त्या सुरक्षा धोका देतात.\n\nसंवेदनशील API मध्ये iframe ला कधीही सहज चालू नका.',
     '<iframe src="video.html" width="560" height="315" allow="fullscreen; autoplay" title="व्हिडिओ"></iframe>'),
   S('3. lazy iframe',
     'खूप iframes असल्यास लोडिंग मंद — त्यासाठी lazy.\n\nloading="lazy" असलेला iframe केवळ दिसेल तेव्हा लोड होतो.\n\nस्क्रीनच्या खाली असेल तर तो नाही येत ब्राउझर आधी उरला.\n\nहे performance तर भरपूर सुधारते — पेज वेगाने उघडते.\n\nvisualShift टाळण्यासाठी width/height नेहमी द्या.',
     '<iframe src="map.html" loading="lazy" width="400" height="300" title="नकाशा"></iframe>'),
   S('4. object आणि embed',
     'object आणि embed अनेक media types आणतात — PDF, SVG, अॅप.\n\nobject मध्ये data आणि type: <object data="guide.pdf" type="application/pdf">.\n\nembed जुने, साधे: <embed src="a.swf" type="application/x-shockwave-flash">.\n\nPDF आणि SVG आधार ब्राउझरमधूनच चालतो — फक्त plugin साठी इशारा.\n\nआज object/embed चा वापर थोडा — media साठी अधिक पर्याय आहेत.',
     '<object data="चार्ट.pdf" type="application/pdf" width="400" height="300">\n  <p>PDF read करणे समर्थन नाही: <a href="चार्ट.pdf">डाउनलोड</a></p>\n</object>'),
   S('5. picture-in-picture (चर्चा)',
     'व्हिडिओला छोट्या खिडकीत ठेवणे = picture-in-picture.\n\nहे कोडमधून सांगितले जाते — पण हे HTML attribute नाही.\n\nहे JavaScript ने नियंत्रित होते — HTML attribute नाही.\n\nआधुनिक ब्राउझर त्यासाठी आधार देतात.\n\nHTML मध्ये शिकायला आवश्यक म्हणजे video आणि controls सुयोग्यता.',
     '<video controls width="320" height="180">\n  <source src="demo.mp4" type="video/mp4">\n  <p>व्हिडिओ समर्थन नाही.</p>\n</video>'),
   S('6. media API प्रॉक्सी में',
     'audio/video elements API-rich असतात — पण ती JavaScript ची.\n\nHTML मध्ये केवळ समर्थ attributes: controls, loop, muted, preload.\n\nplay(), pause(), currentTime, volume — या सर्व method JavaScript.\n\nHTML-only शिकताना या पर्यायांची माहिती ठेवा.\n\nतरीही controls देणे म्हणजेच base वापरकर्त्यांसाठी सर्व उपाय.',
     '<audio controls muted preload="none">\n  <source src="intro.ogg" type="audio/ogg">\n  <p>आवाज समर्थन नाही.</p>\n</audio>'),
   S('Mini Project',
     'embedding पॅकेज — प्रत्येक घटक सुरक्षित.\n\nएक sandbox="" नकाशा. दुसरा allow="fullscreen" व्हिडिओ.\n\nloading="lazy" बाहेर नकाशा. एक object PDF.\n\nसर्व iframes ला title द्या — प्रवेश्यता अनिवार्य.',
     '<iframe src="map.html" sandbox="" width="400" height="300" title="नकाशा" loading="lazy"></iframe>\n<iframe src="video.html" width="560" height="315" allow="fullscreen" title="व्हिडिओ"></iframe>\n<object data="guide.pdf" type="application/pdf" width="400" height="300"></object>'),
  ],
  ['sandbox काय बंद करतो?', 'allow कशासाठी?', 'lazy iframe उपयोग?', 'object काय आणतो?'],
  [{'q':'iframe ची सुरक्षा यंत्रणा?','o':['sandbox','allow-scripts','src','width'],'c':0},
   {'q':'पूर्ण स्क्रीन परवानगी?','o':['fullscreen','scripts','forms','popups'],'c':0},
   {'q':'लोड वेळ सुधारणे?','o':['loading="lazy"','async','defer','preload'],'c':0},
   {'q':'PDF घालणारा?','o':['object','iframe','video','canvas'],'c':0}],
  {'prompt':'सुरक्षित embed पेज','starterCode':'<iframe src="map.html" sandbox="" title="नकाशा"></iframe>','expectedOutput':'Renders secure embeds page'},
  ['iframe sandbox कधी गरजेचे?', 'embed शिवाय पर्याय?'],
  ['html-landmarks-aria', 'html-microdata'],
  'html-landmarks-aria', 'html-microdata')

# =====================================================================
# 7. MICRODATA & RICH RESULTS
# =====================================================================
L('html-microdata',
  'Microdata & Rich Results',
  'Microdata आणि Rich Results',
  'itemscope, itemprop आणि विकिपीडिया-rich स्निपेट्स — तुमच्या पेजला SEO चा स्कोर.',
  [
   S('1. microdata म्हणजे काय',
     'Microdata = HTML मध्ये मशीन-वाचनीय माहिती जोडणारे attributes.\n\nहे शोधायला मदत करते: pages, products, people यांचे प्रकार.\n\nमुख्य attributes: itemscope, itemtype, itemprop.\n\nitemscope="itemscope" — घटकाचे स्वतःच्या scope चा block. itemtype schema.org URL.\n\nउदा. <div itemscope> नाव आणि किंमत आतच.',
     '<div itemscope>\n  <div itemprop="name">लाल गुलाब</div>\n  <div itemprop="price">100</div>\n</div>'),
   S('2. itemscope आणि itemtype',
     'itemscope सांगते "येथे एक item सुरु".\n\nitemtype item चा प्रकार: https://schema.org/Product, /Person, /Article.\n\nप्रकारानुसार itemprop ची अपेक्षित यादी असते.\n\nहे URL बरोबर itemtype लिहा — validator सहज तपासतो.\n\nएका itemscope मध्ये फक्त त्या item ची माहिती ठेवा.',
     '<div itemscope itemtype="https://schema.org/Product">\n  <span itemprop="name">मराठी अभ्यास</span>\n  <span itemprop="brand">वेब शाळा</span>\n</div>'),
   S('3. itemprop ने मूल्ये',
     'itemprop एक मूल्य/माहिती जोडतो — name, price, description.\n\nबहुतेक मूल्ये मजकूरात आहेत — तीच दृश्य वापरा.\n\nचलनासाठी: <meta itemprop="priceCurrency" content="INR">.\n\nआभासी गुणधर्म meta ते करता — प्रत्यक्ष मजकूर नसताना.\n\nprice म्हणजे आकडा; priceCurrency म्हणजे चलन.',
     '<div itemscope itemtype="https://schema.org/Product">\n  <h2 itemprop="name">बेस्ट टी</h2>\n  <p itemprop="description">उत्तम चव.</p>\n  <meta itemprop="price" content="99">\n  <meta itemprop="currency" content="INR">\n  <p>किंमत: रुपये 99</p>\n</div>'),
   S('4. rich results',
     'गुगल आणि बिंग rich results दाखवतात — रेटिंग 4.5, किंमत ₹99, ब्रेडक्रंब.\n\nmicrodata ने ते डेटा मिळवला — असा rich स्निपेट मिळतो.\n\nFAQPage itemtype म्हणजे "प्रश्न-उत्तर" rich result.\n\nहे articles, products, रेसिपी, उत्पादने या प्रकारांत मदत करते.\n\nचुकीच्या माहितीवर Google सूचना देतो — खोटे टाळा.',
     '<div itemscope itemtype="https://schema.org/FAQPage">\n  <details itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">\n    <summary itemprop="name">मराठी कशी शिकू?</summary>\n    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">\n      <p itemprop="text">दररोज सराव करा.</p>\n    </div>\n  </details>\n</div>'),
   S('5. JSON-LD समज',
     'JSON-LD दुसरा प्रकार — head मध्ये script, पण हा reference.\n\nपण script आता <script> — HTML दस्तऐवजात सहसा नको.\n\nआमच्या धड्यात <script> नाही — म्हणून JSON-LD फक्त माहितीसाठी दाखवतो.\n\nवास्तवात आधुनिक वेबवर JSON-LD अधिक सामान्य.\n\nतुमच्या सरावात microdata, आधुनिक वेबमध्ये JSON-LD — दोन्ही जाणून घ्या.',
     '<div itemscope itemtype="https://schema.org/Product">\n  <span itemprop="name">पुस्तक</span>\n</div>'),
   S('6. त्रुटी आणि सत्यता',
     'माइक्रोडेटा मध्ये खोटी माहिती देऊ नका — चुकीचे label शिक्षा देते.\n\nप्रत्येक itemprop चे मूल्य वास्तविक. currency अचूक.\n\nRich results Validator मध्ये पडताळा — Google Rich Results Test.\n\nचुकीची माहिती काढून टाका — शोध गुणवत्ता दीर्घकाळ टिकते.\n\nमराठी नावे व data — schema types मध्ये चालतात.',
     '<div itemscope itemtype="https://schema.org/Book">\n  <h2 itemprop="name">मराठी व्याकरण</h2>\n  <meta itemprop="inLanguage" content="mr">\n</div>'),
   S('Mini Project',
     'उत्पादन पेज rich results सह.\n\nProduct itemtype. name, brand, price, currency.\n\nFAQPage — तीन तपशील प्रश्न. Article प्रकार.\n\nसर्व काही दृश्य मजकुराशी जुळणारे — खोटे नाही.',
     '<div itemscope itemtype="https://schema.org/Product">\n  <h1 itemprop="name">मराठी बुक</h1>\n  <p itemprop="description">पूर्ण व्याकरण.</p>\n  <meta itemprop="price" content="399">\n  <meta itemprop="priceCurrency" content="INR">\n</div>\n<div itemscope itemtype="https://schema.org/FAQPage">\n  <details>\n    <summary>वितरण?</summary>\n    <p>संपूर्ण भारतात.</p>\n  </details>\n</div>'),
  ],
  ['microdata म्हणजे?', 'itemtype कुठून?', 'rich result कसे दिसते?', 'खोटे data ठीक का नाही?'],
  [{'q':'item scope गुणधर्म?','o':['itemscope','itemname','itemtypeo','itemref'],'c':0},
   {'q':'item चा प्रकार कुठे?','o':['itemtype','itemprop','itemid','itemscope'],'c':0},
   {'q':'FAQ वरचा schema?','o':['FAQPage','Product','Person','Event'],'c':0},
   {'q':'किंमत साठवणे?','o':['meta itemprop','h1','img alt','label'],'c':0}],
  {'prompt':'rich results उत्पादन पेज','starterCode':'<div itemscope itemtype="https://schema.org/Product"></div>','expectedOutput':'Renders microdata product block'},
  ['rich results चा फायदा काय?', 'schema.org types कुठून?'],
  ['html-embedding-advanced', 'html-performance'],
  'html-embedding-advanced', 'html-performance')

# =====================================================================
# 8. PERFORMANCE IN HTML
# =====================================================================
L('html-performance',
  'Performance in HTML',
  'HTML Performance — वेगाचे नियम',
  'preconnect, dns-prefetch, prefetch, preload, lazy loading आणि CLS — HTML-स्तरावर वेग सुधारणे.',
  [
   S('1. परफॉर्मन्स ओळख',
     'पेज वेग हा वापरकर्त्याचा अनुभव — प्रत्येक सेकंद मोलाचा.\n\nमोबाईल नेटवर्क मंद असते — HTML काटकसर असणे गरजेचे.\n\nresources (CSS/JS/चित्रे) वेगवेगळ्या वेळी येतात.\n\nवरच्या भागाला सर्वाधिक महत्त्व — critical content लवकर हवे.\n\nHTML-स्ट्रक्चरमध्येच खूप वेळ वाचवता येतो.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>वेग पेज</title>\n</head>\n<body>\n  <h1>प्रथम मजकूर</h1>\n</body>\n</html>'),
   S('2. preconnect आणि dns-prefetch',
     'परकीय hosts शी आधी संपर्क करणे = preconnect.\n\n<link rel="preconnect" href="https://fonts.example.com"> — early handshake.\n\ndns-prefetch DNS आधी सोडवतो — लहान पण फायदा.\n\nहे थर्ड-पार्टी resources वेगवान करतात.\n\nफक्त गरजेच्या domains ला — बाकी ओव्हरहेड.',
     '<head>\n  <link rel="preconnect" href="https://cdn.example.com">\n  <link rel="dns-prefetch" href="https://api.example.com">\n</head>'),
   S('3. prefetch आणि preload',
     'पुढील पेजचे संसाधन आधी आणणे = prefetch.\n\n<link rel="prefetch" href="next.html"> — browser idle मध्ये.\n\nसध्याच्या पेजचे महत्वाचे resource preload ने.\n\n<link rel="preload" as="image" href="hero.jpg">.\n\nकाळजीपूर्वक वापरा — काहीही भरपूर नको.',
     '<head>\n  <link rel="preload" as="image" href="hero.jpg">\n  <link rel="prefetch" href="p2.html">\n</head>'),
   S('4. loading आणि decoding',
     'चित्रे lazy आणि decode पद्धत.\n\nloading="lazy" केवळ नजीकच्या चित्रांना. loading="eager" आधी.\n\ndecoding="async" चित्राचे decode ब्रेक होत नाही.\n\nहे परफॉर्मन्स: जास्त चित्रांवर फरक स्पष्ट.\n\nनियंत्रण: width/height ने layout तर नाही shift.',
     '<img src="b1.jpg" loading="lazy" decoding="async" width="400" height="300" alt="दृश्य">\n<img src="b2.jpg" loading="eager" width="200" height="150" alt="मुख्य">'),
   S('5. CLS रोखणे',
     'CLS = लेआउट अचानक हलणे — मोजमाप योग्य नाही तर वाचक अडचणीत.\n\nwidth आणि height नक्की द्या — चित्र आधीच आरक्षित.\n\nfont बदलाची जागा स्थिर ठेवा — fallback आकाराचा अंदाज.\n\nखेळणारी रचना नेहमी स्थिर ठेवा.\n\nHTML-लेव्हलवर सर्वात कामाची width/height आरक्षणे.',
     '<img src="photo.jpg" width="600" height="400" alt="छायाचित्र">'),
   S('6. पेलोड काटकसर',
     'प्रत्येक byte मोज — minimum आकार ठेवा.\n\nचित्रे तर्कसंगत आकाराची; media कट; मजकूर अस्पष्ट नको.\n\nCSS/JS फाइली फक्त गरजेच्या ठेवा.\n\nसर्व संसाधने तपासा — रेंडर वेळ कमी होईल.\n\nHTML मध्ये फुटकळ टिप्पण्या भरपूर टाकू नका.',
     '<img src="hero-min.jpg" width="600" height="300" fetchpriority="high" alt="मुख्य चित्र">'),
   S('Mini Project',
     'परफॉर्मन्स-अनुकूल पेज.\n\npreconnect तीन domains. preload हीरो चित्र.\n\nप्रत्येक चित्र width/height + loading sensible.\n\nभारी media lazy. Kटकसर सर्व कायम.',
     '<head>\n  <meta charset="utf-8">\n  <link rel="preconnect" href="https://cdn.example.com">\n  <link rel="preload" as="image" href="hero.jpg">\n</head>\n<body>\n  <img src="hero.jpg" width="800" height="400" fetchpriority="high" alt="नाव">\n  <img src="t1.jpg" loading="lazy" width="300" height="200" alt="तपशील">\n</body>'),
  ],
  ['preconnect काय करतो?', 'preload कधी वापरतात?', 'CLS रोखायला काय?', 'fetchpriority कशासाठी?'],
  [{'q':'आधी host संपर्क?','o':['preconnect','prefetch','preload','decode'],'c':0},
   {'q':'पुढील पेज संसाधन?','o':['prefetch','preload','preconnect','lazy'],'c':0},
   {'q':'layout shift रोखणे?','o':['width+height','lazy','alt','title'],'c':0},
   {'q':'लवकर लोड आस्था?','o':['fetchpriority="high"','srcset','loading="lazy"','decoding'],'c':0}],
  {'prompt':'performance अनुकूल पेज','starterCode':'<link rel="preload" as="image" href="hero.jpg">','expectedOutput':'Renders fast HTML page'},
  ['कुठे preconnect वापरायचे?', 'लोड ऑर्डर कशी जुळवते?'],
  ['html-microdata', 'html-document-resources'],
  'html-microdata', 'html-document-resources')

# =====================================================================
# 9. DOCUMENT RESOURCES
# =====================================================================
L('html-document-resources',
  'Document Resources',
  'Document Resources — head चे खोल विश्व',
  'canonical, base, robots, Open Graph खोल, theme-color, manifest आणि favicon variants.',
  [
   S('1. canonical',
     'canonical एका पेजचा अधिकृत प्रत ठरवतो.\n\nहे duplicate content ची शिक्षा टाळते — search engine एकच URL ओळखतो.\n\n<link rel="canonical" href="https://example.com/page">.\n\nप्रिंट/सॉर्ट आवृत्त्यांना एकच canonical द्या.\n\nयोग्य मूळ URL द्या — ट्रॅकिंग URL नको.',
     '<head>\n  <link rel="canonical" href="https://example.com/articles/marathi">\n</head>'),
   S('2. base',
     'base element फक्त एकच — सर्व relative URLs चा पाया.\n\n<base href="https://example.com/"> मूळ पत्ता दर्शवतो.\n\nपण base ने सर्व relative दुव्यांचा आधार बदलतो.\n\nbase शीर्षकात फक्त एकच ठेवा — लहान साइटसाठी त्याची गरज नाही.\n\nसावधपणा — हा element फार वापरला जात नाही.',
     '<head>\n  <base href="/articles/">\n</head>\n<body>\n  <a href="history.html">इतिहास</a>\n</body>'),
   S('3. robots meta',
     'search bots ला सूचना देणारे मेटा.\n\n<meta name="robots" content="index, follow"> — अनेकांनी.\n\nnoindex — पेज ओळखता येऊ नये. nofollow — दुवे नये.\n\nbots या सूचना पाळतात; पण त्या कठोर नियम नाहीत.\n\nबहुतेक पेजवर index, follow ठेवा; फक्त खास पेज वगळा.',
     '<head>\n  <meta name="robots" content="index, follow">\n</head>'),
   S('4. og आणि Twitter खोल',
     'Open Graph मध्ये अधिक: og:image:width, og:image:height, og:locale.\n\nTwitter साठी twitter:card — summary_large_image.\n\nहे जेव्हा वाटले जाते तेव्हा rich card तयार.\n\nवाटप करताना जुळलेले metadata पाठवा — संबंधित fields भरा.\n\nog टॅगांची भाषा बदलू नका — नेहमी सारखी ठेवा.',
     '<head>\n  <meta property="og:title" content="मराठी लेख">\n  <meta property="og:type" content="article">\n  <meta property="og:image" content="cover.jpg">\n  <meta name="twitter:card" content="summary_large_image">\n</head>'),
   S('5. theme-color आणि manifest',
     'theme-color browser बारला रंग देते.\n\n<meta name="theme-color" content="#123456">.\n\nPWA साठी manifest JSON — सर्वात head मध्ये link.\n\n<link rel="manifest" href="site.webmanifest">.\n\ntheme-color किमान मोबाइलसाठी छान.',
     '<head>\n  <meta name="theme-color" content="#0055aa">\n  <link rel="manifest" href="site.webmanifest">\n</head>'),
   S('6. favicon variants',
     'favicon विविध परिस्थितींसाठी.\n\n<link rel="icon" href="favicon.ico"> मुळ. apple-touch-icon iPhone.\n\n16x16 पासून 512x512 पर्यंत sizes/same.\n\nहे marketing नव्हे — दृश्य ओळख browser टॅबमध्ये.\n\nप्रत्येक साइटला favicon हवे — टॅब रिकामा ठेवू नका.',
     '<head>\n  <link rel="icon" href="favicon.ico" type="image/x-icon">\n  <link rel="apple-touch-icon" href="apple-touch-icon.png">\n</head>'),
   S('Mini Project',
     'दस्तऐवज head ते body संपूर्ण.\n\ncanonical, robots index. og+twitter पूर्ण खाली.\n\ntheme-color रंग. favicon आणि apple icon.\n\nhead मध्ये प्रत्येक meta चा योग्य उपयोग.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी ब्लॉग</title>\n  <link rel="canonical" href="https://example.com/">\n  <meta name="robots" content="index, follow">\n  <meta property="og:title" content="मराठी ब्लॉग">\n  <meta property="og:image" content="cover.jpg">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="theme-color" content="#12aa55">\n  <link rel="icon" href="favicon.ico">\n</head>'),
  ],
  ['canonical कशासाठी?', 'base चा परिणाम?', 'noindex म्हणजे?', 'theme-color कुठे दिसते?'],
  [{'q':'duplicate रोखणारा?','o':['canonical','robots','base','manifest'],'c':0},
   {'q':'relative URLs चा पाया?','o':['base','article','main','head'],'c':0},
   {'q':'पेज शोधण्यात नको?','o':['noindex','index','follow','sitemap'],'c':0},
   {'q':'ब्राउझर बार रंग?','o':['theme-color','favicon','manifest','og:image'],'c':0}],
  {'prompt':'पूर्ण head टाका','starterCode':'<meta charset="utf-8">','expectedOutput':'Renders complete document resources head'},
  ['canonical कोणते तेव्हा हवे?', 'manifest विना PWA शक्य?'],
  ['html-performance', 'html-text-typography'],
  'html-performance', 'html-text-typography')

# =====================================================================
# 10. TEXT & TYPOGRAPHY
# =====================================================================
L('html-text-typography',
  'Text & Typography',
  'Text आणि Typography — अचूक लेखन',
  'dishes, quotes, ellipsis, nbsp नियम, संख्या आणि Unicode सुसंगत लेखन.',
  [
   S('1. dash दोन प्रकार',
     'टाइपोग्राफी मध्ये dash मागासलेले नाही.\n\nhyphen (-) शब्द-विभाजन. en dash (–) श्रेणी. em dash (—) विराम.\n\n"१–३ मे" मध्ये en dash श्रेणी; "माझा — एक निर्णय" em dash.\n\nही चिन्हे keyboard वर नसतात — आवश्यक तेथे &mdash; व &ndash; वापरा.\n\nहे अक्षरे जास्त नको — पण योग्य चिन्ह हवे.',
     '<p>वय १८&ndash;२५ वर्ष. शिक्षण&mdash;प्राथमिक ते महाविद्यालय.</p>'),
   S('2. quotes प्रकार',
     'अवतरण चिन्हे भाषेनुसार बदलतात.\n\nमराठीत "..." सामान्य; इंग्रजीत "..." माणूस.\n\nEuropean भाषांत &laquo; &raquo; आणि &bdquo; &ldquo;.\n\nHTML attribute मध्येही quotes हीच चिन्हे — कधी nested.\n\nभाषा पाळून quotes निवडा — क्षेत्रीय अपेक्षा.',
     '<p>ती म्हणाली: &ldquo;मला मराठी आवडते&rdquo;.</p>\n<p lang="fr">Elle dit: &laquo;Bonjour&raquo;.</p>'),
   S('3. ellipsis आणि निकट',
     'मजकूर तोडण्यावर तीन ठिपके (…) — &hellip;.\n\nतीन स्वतंत्र खाली नको — एक अणकुचीदार वर्ण &hellip;.\n\nनिअरिश: "अधिक &hellip;" — धडा पूर्णता.\n\nफॉर्म placeholder मध्येही उपयोगी.\n\nथ्री-पॉइंट संपूर्ण वाचनीयता देतो.',
     '<p>वाचा: आधुनिक मराठी कविता&hellip;</p>'),
   S('4. nbsp द्वारे संख्या',
     'nbsp (non-breaking space) दोन शब्द एकत्र ठेवतो.\n\n"१२&nbsp;मे" वेगळे नाही होणार. "₹&nbsp;९९" समान.\n\nnumber आणि unit नेहमी एकत्र — &nbsp; जोडा.\n\nकिंमत, दिनांक, नाव: "राहुल&nbsp;कुमार".\n\nहे ओळीच्या बदलास वाचलेल्याला नको ते टाळते.',
     '<p>किंमत: ₹&nbsp;९९ सर्व्हिस. सुट्टी: १&nbsp;ऑगस्ट&nbsp;२०२६.</p>'),
   S('5. संख्या ठवणे',
     'संख्या नियम पाळा — स्पष्टता.\n\nदशांश अंक: १०,०००. decimal, thousands.\n\nटक्के: ५०&nbsp;%. माप: ५&nbsp;किमी.\n\nमशीनसाठी meta/data मध्ये खरी value ठेवा.\n\nदिसणारी संख्या वाचण्यास सोपी — दिशा पाळा.',
     '<p>लोकसंख्या: १,२५,०००&nbsp;लोक. वाढ: ५&nbsp;टक्के.</p>'),
   S('6. Unicode सुसंगत',
     'अक्षर फॉंट — मराठी Unicode ठीक.\n\ncharset utf-8 निश्चित. encoding जुनी होऊ देऊ नका.\n\nविशेष वर्ण entities ने — &copy;, &deg;, &euro;.\n\ncode साठी mono fonts वापरा.\n\nहे सर्व एकत्र Text Typography खरा धडा.',
     '<meta charset="utf-8">\n<p>तापमान २५&nbsp;&deg;C. हक्क &copy; 2026.</p>'),
   S('Mini Project',
     'टाइपोग्राफी नियमांनी परिपूर्ण मजकूर.\n\nen/em dash योग्य. quotes भाषानुसार.\n\nellipsis अधिक. numbers nbsp ने जोडले.\n\nUnicode/font सर्व सहज.',
     '<p>वय&mdash;१८&ndash;६०. शुल्क ₹&nbsp;९९&nbsp;मासिक.</p>\n<p>ती म्हणाली: &ldquo;अभ्यास&hellip; आवश्यक&rdquo;.</p>'),
  ],
  ['en dash कधी?', 'em dash कधी?', 'nbsp का हवे?', 'ellipsis कोणते?'],
  [{'q':'श्रेणीसाठी dash?','o':['&ndash;','&mdash;','-','&hellip;'],'c':0},
   {'q':'विरामासाठी?','o':['&mdash;','&ndash;','&nbsp;','&amp;'],'c':0},
   {'q':'संख्या एकत्र ठेवणारा?','o':['&nbsp;','&mdash;','&hellip;','&copy;'],'c':0},
   {'q':'तीन ठिपके?','o':['&hellip;','&copy;','&rsquo;','&deg;'],'c':0}],
  {'prompt':'टाइपोग्राफी नियम पेज','starterCode':'<p>वय १८&ndash;२५&nbsp;वर्ष.</p>','expectedOutput':'Renders typed text correctly'},
  ['हे नियम prose मध्ये शिकतात का?', 'Unicode entities कधीच जरी?'],
  ['html-document-resources', 'html-interactive-popover'],
  'html-document-resources', 'html-interactive-popover')

# =====================================================================
# 11. INTERACTIVE ELEMENTS
# =====================================================================
L('html-interactive-popover',
  'Interactive Elements',
  'Interactive Elements — details, dialog आणि popover',
  'details/summary accordion, dialog मोडल आणि नवीन popover attributes — केवळ HTML ने संवाद.',
  [
   S('1. details/summary पुन्हा',
     'details आणि summary एक नावीन्यपूर्ण disclosure.\n\n<details> मध्ये content; <summary> चा लेबल.\n\nopen attribute आधीच उघडलेले आणतो.\n\nFAQ, क्रॅम, accordion — अगदी सुरळीत.\n\nscreen reader ही रचना नेहमी घोषित करतो.',
     '<details>\n  <summary>आणखी माहिती</summary>\n  <p>येथे वर्णन.</p>\n</details>\n<details open>\n  <summary>आधी उघडलेले</summary>\n  <p>दिसत आहे.</p>\n</details>'),
   S('2. dialog मोडल',
     'dialog मोडल/सामान्य संवाद खिडकी.\n\n<dialog> रचना; open gुण दिसणे.\n\ndialog रचना HTML; उघडणे-बंद करणे JavaScript लागते.\n\nform method="dialog" ने dialog बंद होतो.\n\nप्रवेशयोग्यता: focus आत — modal semantics.',
     '<dialog open>\n  <p>संदेश मजकूर.</p>\n  <form method="dialog">\n    <button type="submit">बंद</button>\n  </form>\n</dialog>'),
   S('3. popover attribute',
     'नवीन HTML popover — CSS/JS शिवाय उघडता.\n\npopover घटक लपलेला असतो; ट्रिगर तो दाखवतो.\n\npopovertarget button ला जोडतो: <button popovertarget="id">.\n\npopovertargetaction="show|hide|toggle".\n\nहे टूलटिप/मेनू जलद रचना.',
     '<button popovertarget="नोट" popovertargetaction="toggle">दाखवा</button>\n<div id="नोट" popover="auto">\n  <p>जलद संदेश!</p>\n</div>'),
   S('4. accordion रचना',
     'accordion अनेक details — एक-उघडा pattern.\n\nएकाच वेळी एकच open ठेवणे — हे नियम.\n\nप्रत्येक details ला summary. उघडल्यावर हा open.\n\nसंपूर्ण सूची बंद-उघडा नियम ठेवा.\n\nमराठीत सुलभ फील्ड — थेट सराव.',
     '<details>\n  <summary>भाग एक</summary>\n  <p>माहिती एक.</p>\n</details>\n<details>\n  <summary>भाग दोन</summary>\n  <p>माहिती दोन.</p>\n</details>'),
   S('5. inert attribute',
     'inert म्हणजे निष्क्रिय — कोणताही संवाद/फोकस नाही.\n\ninert असलेल्या भागात क्लिक, टॅब, read — बंद.\n\nमोडल खुला असेल तर बाहेरचा भाग inert करा.\n\nमोडल बाहेरचा भाग बंद करण्यासाठी हे मदत.\n\nसंवाद JavaScript सोबत नियंत्रित होतो — HTML रचना देते.',
     '<div inert>\n  <button type="button">अक्षम</button>\n  <a href="x.html">अक्षम दुवा</a>\n</div>'),
   S('6. hidden state व्यवस्थापन',
     'configurator रचना — hidden vs inert.\n\nhidden — अदृश्य content (पण page मध्ये).\n\ninert — दृश्य पण निष्क्रिय भाग.\n\naccordion/टॅब रचना — hidden panes सह.\n\nफक्त HTML नाही — पण HTML attributes दिशा देतात.',
     '<p hidden>लपलेला.</p>\n<div inert>\n  <p>दृश्य पण निष्क्रिय.</p>\n</div>'),
   S('Mini Project',
     'इंटरॅक्टिव्ह घटक एकत्र.\n\ndetails accordion तीन भाग. dialog open modal.\n\npopover टूलटिप. inert बंद क्षेत्र.\n\nसर्व केवळ HTML attributes — सराव उत्तम.',
     '<details>\n  <summary>सेटिंग</summary>\n  <p>विषय पहा.</p>\n</details>\n<button popovertarget="सूचना">&#8505;</button>\n<div id="सूचना" popover="auto">मदत!</div>\n<div inert>\n  <button type="button">बंद</button>\n</div>'),
  ],
  ['details कधी?', 'dialog vs popover?', 'inert काय करतो?', 'accordion रचना?'],
  [{'q':'उघडणारे disclosure?','o':['details/summary','object','iframe','base'],'c':0},
   {'q':'मोडल विंडो?','o':['dialog','div','article','canvas'],'c':0},
   {'q':'बटण-ट्रिगर popover?','o':['popovertarget','aria-label','name','direction'],'c':0},
   {'q':'निष्क्रिय भाग?','o':['inert','hidden','disabled','readonly'],'c':0}],
  {'prompt':'इंटरॅक्टिव संवाद पेज','starterCode':'<button popovertarget="x">नोंद</button>\n<div id="x" popover="auto">मजकूर</div>','expectedOutput':'Renders interactive details/dialog/popover page'},
  ['popover आधार कुठपर्यंत?', 'dialog modal सेमंटिक्स?'],
  ['html-text-typography', 'html-magazine-project'],
  'html-text-typography', 'html-magazine-project')

# =====================================================================
# 12. MAGAZINE PROJECT (capstone)
# =====================================================================
L('html-magazine-project',
  'Magazine Project',
  'मासिक प्रकल्प — सर्व कौशल्य एकत्र',
  'प्रगत मासिक पेज — semantic outline, landmarks, embedded media, microdata, performance आणि संवाद.',
  [
   S('1. उद्दिष्टे',
     'हा प्रकल्प HTML Level 3 चे सर्व धडे एकत्र.\n\nटार्गेट: "मराठी टेक मासिक" फ्रंट पेज.\n\nsemantic outline, landmarks, embedded media, microdata.\n\nperformance attributes आणि interactive घटक.\n\nप्रत्येक विभाग हे एक कौशल्याचे demonstrative.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी टेक मासिक</title>\n</head>\n<body></body>\n</html>'),
   S('2. head resources',
     'head मध्ये सर्व मेटा.\n\ncharset utf-8, viewport. description, canonical.\n\nog आणि twitter card. theme-color. favicon.\n\nperformance: preload hero चित्र, preconnect cdn.\n\nप्रत्येक meta चा एक उपयोग.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी टेक मासिक</title>\n  <meta name="description" content="मराठी तंत्रज्ञान मासिक">\n  <link rel="canonical" href="https://example.com/">\n  <meta property="og:title" content="मराठी टेक मासिक">\n  <meta property="og:image" content="cover.jpg">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="theme-color" content="#104060">\n  <link rel="icon" href="favicon.ico">\n  <link rel="preload" as="image" href="cover.jpg">\n</head>'),
   S('3. semantic आणि outline',
     'body semantic रचना.\n\nheader ब्रँड. nav मध्ये TOC. main एक.\n\nकव्हर article मध्ये h1 आणि hgroup subtitle.\n\nप्रत्येक विभागाला h2 आणि id. footer संपर्क.\n\noutline पूर्ण — स्क्रीन रीडर नेव्हिगेशन.',
     '<header>\n  <h1>मराठी टेक</h1>\n</header>\n<nav aria-label="मुख्य">\n  <a href="#लेख">लेख</a>\n  <a href="#मीडिया">मीडिया</a>\n</nav>\n<main>\n  <h2>आठवड्याचा लेख</h2>\n  <p>मुख्य मजकूर.</p>\n</main>\n<footer>संपर्क: nakoda@example.com</footer>'),
   S('4. embedded media',
     'लेखात media एकत्र.\n\nhero चित्र srcset योग्य साईज. video controls.\n\naudio कव्हर वर्णन. iframe नकाशा sandbox.\n\nप्रत्येक media ला width/height आणि title.\n\nloading lazy नंतरच्या media साठी.',
     '<figure>\n  <img src="hero-800.jpg" width="800" height="450" fetchpriority="high" alt="हेडर">\n  <figcaption>मुख्य चित्र</figcaption>\n</figure>\n<video controls width="480" height="270">\n  <source src="dur.mp4" type="video/mp4">\n</video>\n<iframe src="map.html" width="400" height="300" title="नकाशा" loading="lazy"></iframe>'),
   S('5. form आणि a11y',
     'सदस्यता फॉर्म प्रवेश्य.\n\nautocomplete नाव/ईमेल. inputmode ईमेल.\n\nlabel प्रत्येक field. fieldset गट. एक skip link.\n\naria-describedby मदत संदेश. error संदेश स्पष्ट.\n\nफॉर्म भरताना वेग आणि सुरक्षा.',
     '<a href="#मुख्य">मुख्यकडे</a>\n<form action="#" method="post">\n  <fieldset>\n    <legend>सदस्यता</legend>\n    <label>नाव: <input name="n" autocomplete="name" required></label>\n    <label>ईमेल: <input type="email" name="e" inputmode="email" autocomplete="email" required></label>\n  </fieldset>\n  <button type="submit">सदस्य व्हा</button>\n</form>'),
   S('6. माइक्रोडेटा आणि interactive',
     'लेखाला Article microdata.\n\nitemscope itemtype Article. itemprop name/date.\n\nFAQ साठी details accordion. dialog/popover नोंद.\n\nहे rich result चे source बनते.\n\ninteractive घटक पेजला जीव देतात.',
     '<article itemscope itemtype="https://schema.org/Article">\n  <h2 itemprop="headline">मराठी AI</h2>\n  <p itemprop="datePublished">2026-09-09</p>\n  <p itemprop="author">राहुल</p>\n  <p itemprop="articleBody">मराठी AI प्रगती करत आहे...</p>\n</article>\n<details>\n  <summary>प्रश्न</summary>\n  <p>उत्तर अतिशय सोपे.</p>\n</details>'),
   S('Mini Project',
     'आता संपूर्ण मासिक फ्रंट एकत्र करा.\n\nhead resources सर्व. semantic outline स्थापित.\n\nmedia embedded. form accessible.\n\nmicrodata rich. interactive घटक. HTML Level 3 पूर्ण.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी टेक मासिक</title>\n</head>\n<body>\n  <header>\n    <h1>मराठी टेक</h1>\n  </header>\n  <main>\n    <h2>घडलेलं</h2>\n    <p>आजचा लेख.</p>\n  </main>\n  <footer>\n    <p>&copy; 2026 मराठी टेक</p>\n  </footer>\n</body>\n</html>'),
  ],
  ['हा प्रकल्प काय एकत्र करतो?', 'head मध्ये काय हवे?', 'a11y नियम कुठले?', 'microdata कुठे?'],
  [{'q':'article microdata कुठे?','o':['main/article मध्ये','head मध्ये','footer मध्ये','nav मध्ये'],'c':0},
   {'q':'मीडिया आकार राखणे?','o':['width/height','srcset','alt','controls'],'c':0},
   {'q':'प्रवेश्य फॉर्म आधार?','o':['label for','disabled','novalidate','inert'],'c':0},
   {'q':'इंटरॅक्टिव FAQ?','o':['details/summary','iframe','object','canvas'],'c':0}],
  {'prompt':'मासिक फ्रंट पेज बनवा','starterCode':'<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी टेक</title>\n</head>\n<body></body>\n</html>','expectedOutput':'Renders full magazine page'},
  ['पेज rich result-source बनले का?', 'पुढे CSS/JS लेव्हल?'],
  ['html-interactive-popover', 'html-global-attributes'],
  'html-interactive-popover', 'html-global-attributes')

# ============ RENDER ============
def js_str(s):
    return json.dumps(s, ensure_ascii=False)

def code_block(code):
    ec = code.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '`' + ec + '`'

def render_lesson(i, lesson):
    parts = ["  {"]
    for k, v in lesson.items():
        if k == 'sections':
            parts.append("    sections: [")
            for s in v:
                line = "      { title: " + js_str(s["title"]) + ", content: " + js_str(s["content"])
                if s.get('code'):
                    line += ", code: " + code_block(s['code'])
                    line += ", codeLanguage: \"html\""
                line += " },"
                parts.append(line)
            parts.append("    ],")
        elif k == 'quiz':
            parts.append("    quiz: [")
            for q in v:
                opts = ", ".join(js_str(o) for o in q['o'])
                parts.append("      { question: " + js_str(q['q']) + ", options: [" + opts + "], correct: " + str(q['c']) + " },")
            parts.append("    ],")
        elif k == 'practiceQuestions':
            parts.append("    practiceQuestions: [" + ", ".join(js_str(s) for s in v) + "],")
        elif k == 'interviewQuestions':
            parts.append("    interviewQuestions: [" + ", ".join(js_str(s) for s in v) + "],")
        elif k == 'related':
            parts.append("    related: [" + ", ".join(js_str(r) for r in v) + "],")
        elif k == 'challenge':
            c = v
            parts.append("    challenge: {")
            parts.append("      prompt: " + js_str(c["prompt"]) + ",")
            parts.append("      starterCode: " + code_block(c["starterCode"]) + ",")
            parts.append("      expectedOutput: " + js_str(c["expectedOutput"]) + ",")
            parts.append("    },")
        else:
            if k in ('slug', 'categoryId', 'title', 'marathiTitle', 'level', 'minutes', 'summary', 'prev', 'next'):
                parts.append("    " + k + ": " + js_str(v) + ",")
    parts.append("    levelLabel: HTML3_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === HTML · LEVEL 3 — प्रगत वैशिष्ट्ये आणि Semantic Deep-Dive ===\n'
    header += 'export const HTML3_LABEL = "HTML · Level 3 — प्रगत वैशिष्ट्ये आणि Semantic Deep-Dive";\n'
    header += '\nexport const htmlLevel3: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/html3_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/html3_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/html3_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/html-level3.ts')
print("WROTE html-level3.ts, lines:", len(out.split(chr(10))))