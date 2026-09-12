# -*- coding: utf-8 -*-
# Generator for HTML Level 4 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/html-level4.ts. Base content ~100-150 words/section,
# self-contained HTML code cells (no network, no <script>, no <style>), codeLanguage: "html".
import json, subprocess, shutil

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=20):
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
# 1. WEB COMPONENTS
# =====================================================================
L('html-web-components',
  'Web Components',
  'Web Components — स्वतंत्र, पुन्हा वापरता येणारे घटक',
  'custom element, त्यांची व्याख्या आणि वापर — मोठ्या साइट्सवर reusable UI चा आधार.',
  [
   S('1. customizable elements',
     'Web Components म्हणजे तुमचे स्वतःचे HTML घटक जे ब्राउझरलाही माहीत होतात.\n\nआधार म्हणजे custom element — तुमच्या दिलेले name attribute किंवा class ची जोडणी.\n\ncustom element ने हा प्रकार स्पष्ट होतो: <app-chart data-kind="वेळ">.\n\nब्राउझर unknown tag ला साधा मजकूर म्हणून वागवतो; custom element ते बदलते.\n\nआता आधुनिक ब्राउझर custom elements स्वतः ओळखतात.',
     '<h2>घटक नाव नियम</h2>\n<ul>\n  <li>custom element नावात dash आवश्यक.</li>\n  <li>टॅग आधी विचारावा की तो custom आहे.</li>\n  <li>आत एकच मुख्य रचना ठेवा.</li>\n</ul>'),
   S('2. नावाचा नियम',
     'custom element च्या नावात एक dash किंवा अधिक तर असायलाच हवा.\n\nस्टँडर्ड टॅगला dash nasate — त्यामुळे clash होत नाही.\n\nउदा. app-button ठीक, button नाही; web-card ठीक, card नाही.\n\nदुसरा नियम: एकदा बनवलेले नाव पुन्हा बदलू नका.\n\nregister झालेले घटक ब्राउझर री-यूज करतो.',
     '<p>बरोबर: app-card, site-menu, data-grid</p>\n<p>चुकीचे: card, menu, grid</p>'),
   S('3. class आणि lifecycle',
     'custom element ची व्याख्या JavaScript class ने होते.\n\nएक class म्हणजे element चा आधार — attributes, content, क्रिया.\n\nonCreated म्हणजे बनताना; connected म्हणजे पेजवर येताना.\n\nहे चक्र "lifecycle" म्हणतात — बनणे, जोडणे, काढणे.\n\nHTML-only शिकताना नियम लक्षात ठेवा — वापर नंतर JavaScript ने.',
     '<p>lifecycle टप्पे:</p>\n<ol>\n  <li>रचना</li>\n  <li>attribute जोडणी</li>\n  <li>पेजवर आल्यावर क्रिया</li>\n  <li>काढल्यावर साफसफाई</li>\n</ol>'),
   S('4. attributes आणि properties',
     'custom element साठी attributes API म्हणून काम करतात.\n\ndata-kind, status, size — हे सर्व observed attributes.\n\nजेव्हा बाहेरून attribute बदलतो, घटक घडवून प्रतिसाद देतो.\n\nproperties ही नवी जोडणी — एखादा object थेट घटकाला जोडता येतो.\n\nनियम: महत्त्वाची माहिती attributes मधूनच द्या.',
     '<app-card title="एक" status="ready"></app-card>\n<app-card title="दोन" status="loading"></app-card>'),
   S('5. independent components',
     'Web Components चे मोठे फायदे — encapsulation आणि reuse.\n\nएकदा बनवलेला घटक अनेक पेजवर वापरता येतो.\n\nमोठी टीम आणि वेगवेगळी अॅप्स — एक घटक सर्वत्र सारखा.\n\nबाहेरचे framework नको — ब्राउझरची मूळ क्षमता पुरेसे.\n\nब्राउझरची मूळ क्षमता असल्याने library हवी नसते.',
     '<main>\n  <app-header></app-header>\n  <app-card title="मराठी"></app-card>\n  <app-footer></app-footer>\n</main>'),
   S('6. केव्हा वापरायचे',
     'हे कोणासाठी? मोठ्या, पुनरावृत्ती होणार्या रचनांसाठी.\n\nटीमच्या अनेक भागांत समान चित्र, कार्ड, मेनू.\n\nएकाच जागी बदल करून सर्वत्र प्रतिसाद मिळतो.\n\nलहान पेजसाठी गरज नाही — थेट semantic HTML पुरेसे.\n\nआधार आधुनिक ब्राउझरमध्ये सर्वत्र चांगला.',
     '<details>\n  <summary>योग्य वापर</summary>\n  <p>पुनरावृत्ती टाळल्यावर मोठा आधार मिळतो.</p>\n</details>'),
   S('Mini Project',
     'एका simple पेजमध्ये custom elements ची यादी.\n\nतीन कार्डस् — प्रत्येकाला title आणि status.\n\nहे template सारखे finite नाही — फक्त प्रदर्शन.\n\ncustom element चे नाव आणि attribute दाखवा.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <app-card title="मराठी" status="ready"></app-card>\n  <app-card title="तंत्रज्ञान" status="loading"></app-card>\n  <app-card title="सराव" status="ready"></app-card>\n</body>\n</html>'),
  ],
  ['custom element चे नाव नियम?', 'lifecycle म्हणजे काय?', 'Web Components केव्हा वापरायचे?', 'बाहेरचे घटक library हवे का?'],
  [{'q':'custom element च्या नावात काय हवे?','o':['dash','लोअर केस','दुहेरी dash','संख्या'],'c':0},
   {'q':'घटक नोंदणी कोणाकडे?','o':['ब्राउझर','मेटा','CSS','सर्व्हर'],'c':0},
   {'q':'piece घटक कुठे वापरायचा?','o':['पुनरावृत्ती रचना','एकदाच','download','print'],'c':0},
   {'q':'लहान पेजसाठी?','o':['semantic HTML','custom बरोबर','तरी custom','sign'],'c':0}],
  {'prompt':'custom elements चे पेज','starterCode':'<app-card title="एक" status="ready"></app-card>','expectedOutput':'Renders page with custom element names and attributes'},
  ['custom element एका पेजवरच का चालतो?', 'सर्व्हरला काय कळतं?'],
  ['html-enterprise-app', 'html-shadow-dom'],
  'html-enterprise-app', 'html-shadow-dom')

# =====================================================================
# 2. SHADOW DOM
# =====================================================================
L('html-shadow-dom',
  'Shadow DOM',
  'Shadow DOM — लपलेल्या जागेची रचना',
  'shadow root, open/closed modes आणि घटकातील अंतर्गत संरचना कशी वेगळी ठेवायची.',
  [
   S('1. shadow root प्रकार',
     'shadow root ही एक वेगळी, लपलेली DOM शाखा.\n\nती घटकाच्या inner रचनेत स्वतःचा अलग जग दाखवते.\n\nopen मोड म्हणजे बाहेरून पाहता येते; closed म्हणजे नाही.\n\nनियम: बहुतांश वेळा open ठेवा — debugging सोपे.\n\nclosed फक्त गोपनीय रचनेसाठी.',
     '<p>shadow root सह घटक:</p>\n<p>बाहेरून लपलेली रचना</p>\n<p>आत साधी रचना आणि शैली</p>'),
   S('2. host घटक',
     'पहिला घटकच host म्हणतात — जो shadow root धारण करतो.\n\nउदा. app-panel हा host; त्यात shadow root राहतो.\n\nhost च्या आतले सर्व घटक लपले राहतात.\n\nबाहेरच्या id/class host ला लागतात, आतल्यांना नाही.\n\nही अलगता encapsulation चा आधार.',
     '<app-panel title="माझी पट्टी">\n  <p>content थेट host मध्ये.</p>\n</app-panel>'),
   S('3. styling alगार',
     'shadow मधली शैली बाहेरच्या CSS पासून संरक्षित.\n\nबाहेरून id किंवा class ने अंतर्गत घटक निवडता येत नाही.\n\nshadow-DOM मधली शैली पारंपरिक cascade सोडते.\n\nही गुणवत्ता encapsulation देते — आधार वाढतो.\n\n:host स्थानिक नियम host लाच लागतात.',
     '<button type="button">अंतर्गत बटण</button>\n<p>आतली रचना स्वतःची शैली घेते.</p>'),
   S('4. slot मुद्दे',
     'slot हे shadow मधली जागा — बाहेरून content घेते.\n\nउदा. header slot मध्ये बाहेरील शीर्षक घातला जातो.\n\nअनेक slot नावांनी गटबद्ध केले जातात.\n\nबाहेरील content slot शी जुळल्यावर ते ठिकाण सजवते.\n\nअसे केल्यावर घटक flexible आणि reusable बनतो.',
     '<app-dialog>\n  <h2 slot="title">निश्चित? </h2>\n  <p slot="body">ही क्रिया वाट पाहते.</p>\n</app-dialog>'),
   S('5. closed mode',
     'closed मोड बाहेरून पूर्णपणे लपवतो.\n\nshadowRoot not accessible — JavaScript लाही सहज नाही.\n\nहे कधी? सुरक्षित रचना आणि खास library.\n\nपण debugging आणि शिक्षणासाठी अडचण निर्माण करतो.\n\nसामान्य वापरासाठी open पुरेसा.',
     '<details>\n  <summary>closed मोड</summary>\n  <p>बाहेरून आंतररचना दिसत नाही.</p>\n</details>'),
   S('6. सराव नियम',
     'शिकताना shadow aspects चा सारा नियम लक्षात ठेवा.\n\nencapsulation चांगली; पण जास्त लपवणे debugging वाईट करते.\n\nनावे तशीच ठेवा — पत्रांशी जुळती.\n\nआधी open, नंतर गरज असल्यास closed.\n\nआपल्या HTML मध्ये shadow फक्त components सोबत येतो.',
     '<p>सारांश:</p>\n<p>encapsulation + reuse = Web Components</p>\n<p>open + slot = सोपी रचना</p>'),
   S('Mini Project',
     'एक simple shadow घटक रचना दाखवा.\n\napp-panel नाव, दोन slot — title आणि body.\n\nopen मोड नियम आणि ठिकाण सांगा.\n\nshadow ने रचना कशी वेगळी होते ते नमूना करा.',
     '<app-panel>\n  <h2 slot="title">बातमी</h2>\n  <p slot="body">आजची माहिती येथे.</p>\n</app-panel>'),
  ],
  ['shadow root दोन moad असतात ते कुठले?', 'encapsulation काय देते?', 'slot म्हणजे काय?', 'closed केव्हा वापरायचा?'],
  [{'q':'shadow root चे दोन मोड?','o':['open/closed','light/dark','a/b','fast/slow'],'c':0},
   {'q':'बाहेरील content घेणारी जागा?','o':['slot','column','tab','box'],'c':0},
   {'q':'बाहेरचे CSS अलग ठेवणे?','o':['encapsulation','reset','prefix','import'],'c':0},
   {'q':'सामान्य वापरासाठी नियम?','o':['open mode','closed mode','नाही','सर्व'],'c':0}],
  {'prompt':'shadow component ची कल्पना','starterCode':'<app-panel><h2 slot="title">मराठी</h2></app-panel>','expectedOutput':'Renders component with slots'},
  ['encapsulation का हवे?', 'closed चे तोटे?'],
  ['html-web-components', 'html-template-technology'],
  'html-web-components', 'html-template-technology')

# =====================================================================
# 3. TEMPLATE & SLOT
# =====================================================================
L('html-template-technology',
  'Template & Slot',
  'Template आणि Slot — नमुने आणि जोडणी',
  'template रचना, slot जोडणी आणि content वेगळे ठेवण्याची यंत्रणा.',
  [
   S('1. template घटक',
     'template घटक म्हणजे HTML मधला नमुना / साचा.\n\nत्यातला मजकूर ब्राउझर रेंडर करत नाही — तो राहतो आणि नंतर वापरला जातो.\n\nजेव्हा जेव्हा गरज पडते, template ची प्रत पेजवर येते.\n\nउदा. सूचीचे item चे स्वरूप एकदा लिहून अनेक वेळा वापरता येते.\n\nहे वेगळे ठेवणे rendering ची गती वाढवते.',
     '<template id="कार्ड">\n  <div class="कार्ड">\n    <h3>शीर्षक</h3>\n    <p>वर्णन</p>\n  </div>\n</template>\n<p>template दिसत नाही — प्रती नंतर येतात.</p>'),
   S('2. content वेगळे',
     'template मधली रचना स्टाईल आणि JS सोबत जोडता येते.\n\nपेज load होता तेव्हा template साठी allocation नाही.\n\nजागा कमी आणि वेग अधिक — मोठ्या सूचीसाठी महत्त्वाचे.\n\nशिकताना नियम: template हे व्याकरणचे साधन.\n\nरचना आणि data वेगळे ठेवण्याची सवय.\n',
     '<template id="menuit">\n  <li><a href="#">दुवा</a></li>\n</template>'),
   S('3. slot जागा',
     'slot हा घटकाच्या आत एक empty जागा.\n\nही जागा बाहेरून पुरवलेल्या content ने भरते.\n\nprincipal slot म्हणजे नाव नसलेली जागा; नाव केलेले slot वेगळे.\n\nउदा. "title" आणि "body" ही नावे content वेगळे ठेवतात.\n\nप्रत्येक नाव एका slot शी जुळते.',
     '<app-dialog>\n  <h2 slot="title">वगळा</h2>\n  <p>मुख्य content slot नावाशिवाय.</p>\n</app-dialog>'),
   S('4. fallback content',
     'slot मध्ये default मजकूरही देता येतो.\n\nजर वापरकर्त्याने content दिला नाही तर default दिसेल.\n\ncontent दिले नाही तर default आपोआप दिसतो.\n\nअशा रीतीने घटक नेहमी पूर्ण दिसतात.\n\nslot हा scaffolding — बाकीचे तुम्ही भरता.',
     '<p>slot content न दिल्यास entry दिसेल:</p>\n<p>नोंदणी / साइन इन</p>'),
   S('5. template + Web Components',
     'template आणि shadow मिळून घटक बनवतात.\n\ntemplate मधली रचना shadow मध्ये copy होते.\n\nslot भाग बाहेरील content भरतो.\n\nही जोडणी reusable UI चा आधार आहे.\n\nचार महत्त्वाची स्तर — template, host, shadow, slot.',
     '<p>स्तर रचना:</p>\n<p>template -> shadow -> slot -> final content</p>'),
   S('6. सराव आणि खबरदारी',
     'template शिकताना प्रश्न: हे रेंडर का दिसत नाही?\n\nकारण template फक्त साचा आहे — जोपर्यंत वापरता येत नाही.\n\nयासाठी JavaScript clone करते — त्यापूर्वी तो जागेवर राहतो.\n\nHTML-only शिकताना फक्त रचना शिका.\n\nवापर येतो component आणि JS सोबत.',
     '<details>\n  <summary>template का दिसत नाही?</summary>\n  <p>कारण तो नमुना आहे — वापर नंतर.</p>\n</details>'),
   S('Mini Project',
     'template आणि slot चे प्रात्यक्षिक.\n\nएक template मध्ये मेनू आयटम. शीर्षक slot.\n\nमुख्य शरीर slot. default content fallback.\n\nही रचना घटकाच्या जगाशी जोडते.',
     '<template id="menuK">\n  <li><a href="#">मुख्य</a></li>\n</template>\n<p>प्रती JavaScript मध्ये वापरल्या जातात.</p>'),
  ],
  ['template काय करतो?', 'slot म्हणजे काय?', 'fallback content कधी दिसतो?', 'template + shadow जोडणी कशी?'],
  [{'q':'न दिसणारा साचा?','o':['template','canvas','object','hidden'],'c':0},
   {'q':'बाहेरून content भरणारी जागा?','o':['slot','span','div','label'],'c':0},
   {'q':'default मजकूर?','o':['fallback','alt','note','default value'],'c':0},
   {'q':'template कधी उपयोगी?','o':['पुनरावृत्ती सूची','एक मजकूर','प्रारूप','फक्त लेआउट'],'c':0}],
  {'prompt':'template कल्पनेचे पेज','starterCode':'<template id="कार्ड"><p>आत</p></template>','expectedOutput':'Renders template with slot structure'},
  ['template रेंडर होत नाही का?', 'डायनॅमिक वापर कशासाठी?'],
  ['html-shadow-dom', 'html-pwa-progressive'],
  'html-shadow-dom', 'html-pwa-progressive')

# =====================================================================
# 4. PWA BASICS
# =====================================================================
L('html-pwa-progressive',
  'PWA Basics',
  'PWA — प्रगत वेब अनुप्रयोगाचा पाया',
  'manifest, service worker चा विचार आणि installable वेब अॅप — HTML पासूनच सुरुवात.',
  [
   S('1. manifest म्हणजे काय',
     'PWA ची ओळख manifest ने होते.\n\nmanifest ही एक JSON फाइल — अॅपचे नाव, रंग, चिन्ह.\n\n<link rel="manifest"> ने ती पेजशी जोडतात.\n\nती install होण्याचा पाया.\n\nHTML च्या head मधूनच ही सुरुवात होते.',
     '<link rel="manifest" href="site.webmanifest">\n<meta name="theme-color" content="#104060">\n<p>manifest installable अॅपची पहिली ओळख.</p>'),
   S('2. installability नियम',
     'ब्राउझर evidence मांडून install करण्याचा प्रस्ताव देतो.\n\nHTTPS हवा — सुरक्षित आणि विश्वासार्ह जोडणी.\n\nसर्व्हिस worker नोंदणी हवी — घटक नेटवर्कशिवाय चालतो.\n\nअॅपचे नाव, चिन्ह आणि रंग भरलेले हवे.\n\nवापरकर्ता किमान एक वेळ पेज उघडतो.',
     '<p>offset नियम:</p>\n<p>https + worker + manifest</p>'),
   S('3. service worker कल्पना',
     'service worker हा एक स्वतंत्र कार्यकर्ता.\n\nतो नेटवर्क रिक्वेस्ट थांबवून उत्तर शोधतो.\n\nकाही content offline दाखवणे — वाई वापरता.\n\nतो network आणि cache व्यवस्थेचे नियंत्रण करतो.\n\nHTML-only शिकताना तो कल्पना आहे, कोड नाही.',
     '<p>service worker साठी तयारी:</p>\n<p>head ठीक, cache नियोजन, पेज स्थिर.</p>'),
   S('4. offline तत्त्व',
     'ऑफलाइन वेळी कोणता content दाखवायचा? हे आधी ठरवा.\n\nनियम: प्रत्येक पेज basic structure हवा.\n\nनेटवर्क येत नाही तेव्हा संदेश स्पष्ट असावा.\n\nहे network च्या अभावाचा त्रास कमी करते.\n\ncache ची शुद्धता आणि नियम येथे महत्त्वाचे.',
     '<p>offline साठी:</p>\n<p>मुख्य भाग येथे, गौण भाग प्रतीक्षेत.</p>'),
   S('5. icons आणि रंग',
     'install होण्यासाठी चिन्हांची साठवण पाहिजे.\n\nfavicon ही ठीक — पण PWA साठी 192 आणि 512 आकार.\n\nयोग्य sizes सह आयकॉन उपाय.\n\nरंग theme-color ने बार सजवतो.\n\nआयकॉन फाइली पूर्ण असल्यास सर्व काही ठीक दिसते.',
     '<link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">\n<link rel="icon" type="image/png" sizes="512x512" href="icon-512.png">'),
   S('6. PWA नियम सारांश',
     'हा धडा फक्त पाया आहे — JavaScript ची गरज नंतर.\n\nHTML आणि head मधील बांधणी आता ठीक करा.\n\nlayout, रंग, नाव, चिन्ह — हे सर्व head मध्ये.\n\nनंतर service worker आणि cache जोडले जातील.\n\nपुढील स्तरावर JavaScript शिकताना हा पाया उपयोगी.',
     '<details>\n  <summary>आजचे नियम</summary>\n  <p>head, रंग, चिन्ह, manifest व्यवस्था.</p>\n</details>'),
   S('Mini Project',
     'लहान पेजमध्ये PWA चा पाया.\n\nmanifest link. theme-color. चिन्हांचा sizes.\n\nही रचना पाहून installability स्पष्ट होते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी अॅप</title>\n  <link rel="manifest" href="site.webmanifest">\n  <meta name="theme-color" content="#104060">\n  <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">\n</head>\n<body>\n  <h1>मराठी अॅप</h1>\n  <p>offline तयार, installable.</p>\n</body>\n</html>'),
  ],
  ['manifest काय हवी? ', 'installable होण्यासाठी काय हवे?', 'service worker कल्पना काय?', 'offline रचना काय?'],
  [{'q':'अॅप ओळखण्याची फाइल?','o':['manifest','package','config','readme'],'c':0},
   {'q':'installability तीन नियम?','o':['https worker manifest','tags लेआउट','colors media','सर्व'],'c':0},
   {'q':'नाम नाव network रिक्वेस्ट थांबवतो?','o':['service worker','iframe','canvas','object'],'c':0},
   {'q':'आयकॉन आकार?','o':['192 आणि 512','16 only','100','750'],'c':0}],
  {'prompt':'PWA पायाचे पेज','starterCode':'<link rel="manifest" href="site.webmanifest">','expectedOutput':'Renders installable app foundation'},
  ['service worker कोड हवा का?', 'installable नियम काय?'],
  ['html-template-technology', 'html-browser-storage'],
  'html-template-technology', 'html-browser-storage')

# =====================================================================
# 5. BROWSER STORAGE
# =====================================================================
L('html-browser-storage',
  'Browser Storage',
  'ब्राउझर Storage — ठिकाणे आणि टिकाऊपणा',
  'localStorage, sessionStorage आणि cookies यांची तुलना — कुठे काय डेटा ठेवायचा.',
  [
   S('1. localStorage',
     'localStorage म्हणजे ब्राउझरची टिकाऊ मेमरी.\n\nडेटा त्या ठिकाणी टिकतो — टॅब बंद केल्याने जात नाही.\n\nkey-value पद्धतीने simple data ठेवता येते.\n\nमर्यादा सुमारे 5 MB — मोठा data नको.\n\nफक्त string मूल्ये — वस्तू JSON मध्ये बदलाव्या लागतात.',
     '<p>localStorage उदाहरणे:</p>\n<p>कायमचे नाव, थीम, खात्री.</p>'),
   S('2. sessionStorage',
     'sessionStorage सत्राबरोबर नष्ट होतो.\n\nटॅब बंद केल्यावर सर्व session data गेला.\n\nही वस्तुस्थिती अस्थायी गरजांसाठी आदर्श.\n\nउदा. wizard च्या पायऱ्यांची मध्यावस्था.\n\ndata आणि गोपनीयता यांची शिल्लक राहते.',
     '<p>sessionStorage साठी:</p>\n<p>wizard, टॅब state, अस्थायी संदेश.</p>'),
   S('3. cookies तुलना',
     'cookies सर्व्हरला माहीत असतात — प्रत्येक रिक्वेस्टमध्ये.\n\nलहान मर्यादा ~4 KB — फक्त session माहिती.\n\nsecure, httpOnly असे गुणधर्म सुरक्षा देतात.\n\nlocalStorage सर्व्हर देत नाही — अधिक private.\n\nकुठे काय ठेवायचं याची निवड महत्त्वाची.',
     '<p>तुलना:</p>\n<p>cookies सर्व्हरप्रमाणे; storage ब्राउझरप्रमाणे.</p>'),
   S('4. योग्य निवड',
     'अस्थायी -> sessionStorage. कायम -> localStorage.\n\nसर्व्हरला हवे -> cookies. सोबत security विचार.\n\nगोपनीय data सर्व्हरकडून अधिक सुरक्षित.\n\nसंवेदनशील माहिती ब्राउझर storage मध्ये ठेवू नका.\n\nनियम: कमीत कमी data, नेमका तेथे.',
     '<form action="#" method="post">\n  <label>जुळणी: <input name="p" type="password" autocomplete="current-password"></label>\n</form>'),
   S('5. सुरक्षा नियम',
     'storage मध्ये टोकन्स आणि सत्र माहिती धोकादायक.\n\nXSS हल्ला storage वाचू शकतो — कडक escape.\n\nkey नाव साधी ठेवा, data सुरक्षित ठेवा.\n\nstorage HTML मध्ये दिसत नाही — पण तरीही तो गुप्त नाही.\n\nसर्व डेटा वापरकर्त्याच्या नियंत्रणात राहावा.',
     '<p>सुरक्षा:</p>\n<p>संवेदनशील -> server side.</p>\n<p>storage -> सामान्य data.</p>'),
   S('6. उदाहरण निर्णय',
     'उदा. उपयोगकर्त्याची थीम निवड localStorage मध्ये.\n\nविझार्डची स्थिती sessionStorage मध्ये.\n\nलॉगिन session cookie मध्ये secure attribute सह.\n\nहे तीनच उपाय 90% गरजा भागवतात.\n\nHTML-only मध्ये ही समज, कोड JavaScript मध्ये.',
     '<p>निर्णय सारणी:</p>\n<p>थीम -> localStorage | संदेश -> sessionStorage | session -> cookie</p>'),
   S('Mini Project',
     'storage तुलनेचे चार्ट बनवा.\n\nतीन स्तंभ: storage प्रकार, टिकाऊपणा, उपयोग.\n\nहे पेज HTML टेबलच्या रूपात स्पष्ट करा.',
     '<table border="1">\n  <tr><th>प्रकार</th><th>टिकाऊ</th><th>उपयोग</th></tr>\n  <tr><td>localStorage</td><td>कायम</td><td>थीम निवड</td></tr>\n  <tr><td>sessionStorage</td><td>सत्र</td><td>wizard स्थिती</td></tr>\n  <tr><td>cookies</td><td>काळनियम</td><td>session id</td></tr>\n</table>'),
  ],
  ['localStorage कायम का?', 'sessionStorage केव्हा जातो?', 'cookies सर्व्हरला कशा मिळतात?', 'थीम कुठे ठेवतात?'],
  [{'q':'कायमस्वरूपी storage?','o':['localStorage','sessionStorage','global','frame'],'c':0},
   {'q':'सत्राबरोबर नष्ट?','o':['sessionStorage','auto','long','memory'],'c':0},
   {'q':'सर्व्हरला मिळणारा data?','o':['cookies','hidden','slot','shadow'],'c':0},
   {'q':'संवेदनशील data नियम?','o':['server side','storage','meta','comment'],'c':0}],
  {'prompt':'storage तुलना पेज','starterCode':'<table><tr><th>प्रकार</th><th>उपयोग</th></tr></table>','expectedOutput':'Renders storage comparison table'},
  ['cookies size किती?', 'XSS आणि storage संबंध?'],
  ['html-pwa-progressive', 'html-http-foundations'],
  'html-pwa-progressive', 'html-http-foundations')

# =====================================================================
# 6. HTTP FOUNDATIONS
# =====================================================================
L('html-http-foundations',
  'HTTP Foundations',
  'HTTP — विधी, स्थिती आणि विचारणा',
  'HTTP methods, status codes, headers आणि caching ची मूलभूत शिकवण.',
  [
   S('1. HTTP म्हणजे काय',
     'HTTP हा मजकूराचा व्यवहाराचा नियम — browser आणि server दरम्यान.\n\nब्राउझर request पाठवतो; server response मध्ये return करतो.\n\nहे संवाद सोपे — कोड आणि headers अभ्यासा.\n\nमागणी, उत्तर, स्थिती — हा क्रम.\n\nवेबच्या कामकाजाचा पाया म्हणजे HTTP.',
     '<form action="#" method="post">\n  <label>नाव: <input name="n"></label>\n  <button type="submit">सबमिट</button>\n</form>'),
   S('2. methods',
     'GET डेटा वाचतो; POST नवीन; PUT संपूर्ण बदल.\n\nPATCH आंशिक बदल; DELETE काढतो.\n\nHTML फॉर्म GET आणि POST वापरतो.\n\nदुवे नेहमी GET — डेटा बदलणे नको.\n\nmethod च्या योग्य निवडीने क्रिया स्पष्ट होते.',
     '<p>HTML मधील methods:</p>\n<p>GET — वाचन, POST — रचना.</p>'),
   S('3. status codes',
     '200 म्हणजे ठीक; 404 म्हणजे सापडले नाही.\n\n403 मनाई; 500 server त्रुटी; 301 कायम बदल.\n\nवापरकर्त्याला कोड दिसत नाही — पण दिशा देतो.\n\n404 पेज मराठीत चांगले — स्पष्ट संदेश.\n\nstatus codes debugging ची पहिली खूण.',
     '<p>सामान्य कोड:</p>\n<p>200 ठीक, 404 मिळाले नाही, 500 त्रुटी.</p>'),
   S('4. headers',
     'headers request आणि response दोन्हीत माहिती देतात.\n\nContent-Type फाइलचा प्रकार; Cache-Control काळ.\n\nStrict-Transport-Security HTTPS बंधन.\n\nते HTML मेटासारखे, पण server नियंत्रणात.\n\nसुरक्षा आणि performance headers वर अवलंबून.',
     '<p>महत्त्वाचे headers:</p>\n<p>Cache-Control, Content-Type, X-Frame-Options.</p>'),
   S('5. caching',
     'cache म्हणजे वारंवार भेटलेला data ठेवणे.\n\nचित्रे आणि CSS पुन्हा न येण्यासाठी cache ठेवा.\n\nCache-Control max-age देतो — किती वेळ वैध.\n\nहे वेग आणि वाहतूक कमी करते.\n\nHTML चा cache कमी ठेवा — नेहमी ताजा द्या.',
     '<link rel="preconnect" href="https://fonts.example.com">\n<p>cache आणि preconnect प्रयोग.</p>'),
   S('6. form + HTTP संवाद',
     'फॉर्म path मध्ये GET/POST चा परिणाम दिसतो.\n\nGET मध्ये data URL वर; POST मध्ये body मध्ये.\n\nमहत्त्वाचा data POST ने — इतिहासात नको.\n\naction निश्चित: लहान data GET, मोठा POST.\n\nही निवड HTTP च्या मूलभावावर उभी असते.',
     '<form action="https://example.com/search" method="get">\n  <label>शोध: <input name="q"></label>\n  <button type="submit">जा</button>\n</form>'),
   S('Mini Project',
     'HTTP मूलभूत चार्ट पेज बनवा.\n\nmethods आणि status codes च्या दोन सारण्या.\n\nप्रत्येकासाठी एक ओळ आणि मराठी नाव.',
     '<table>\n  <tr><th>method</th><th>क्रिया</th></tr>\n  <tr><td>GET</td><td>वाचन</td></tr>\n  <tr><td>POST</td><td>रचना</td></tr>\n  <tr><td>DELETE</td><td>काढणे</td></tr>\n</table>'),
  ],
  ['method कुठले?', '404 म्हणजे काय?', 'headers काय देतात?', 'cache कुठे ठेवतो?'],
  [{'q':'डेटा वाचणारा method?','o':['GET','POST','PATCH','DELETE'],'c':0},
   {'q':'मिळाले नाहीचा कोड?','o':['404','200','500','301'],'c':0},
   {'q':'cache नियम का ठेवतो?','o':['Cache-Control','hidden','title','lang'],'c':0},
   {'q':'महत्त्वाचा data कसे पाठवा?','o':['POST','GET','base','array'],'c':0}],
  {'prompt':'HTTP ज्ञान पेज','starterCode':'<table><tr><th>method</th><th>क्रिया</th></tr></table>','expectedOutput':'Renders HTTP overview charts'},
  ['cache आणि storage फरक?', 'form method निवड नियम?'],
  ['html-browser-storage', 'html-meta-advanced'],
  'html-browser-storage', 'html-meta-advanced')

# =====================================================================
# 7. ADVANCED META
# =====================================================================
L('html-meta-advanced',
  'Advanced Meta',
  'Advanced Meta — शोध, भाषा आणि समृद्ध परिणाम',
  'hreflang, variants, og डीप आणि knowledge panel — मेटा ज्या पलीकडे जातो.',
  [
   S('1. hreflang',
     'hreflang म्हणजे भाषिक आवृत्त्यांची जोडणी.\n\nएकच पेज अनेक भाषांत — search engine सांगा.\n\nalternate आणि hreflang attribute मराठी आवृत्ती दर्शवते.\n\nहे search यंत्राला भाषा कळते.\n\nअनेक भाषांसाठी प्रत्येकातला दुवा हवा.',
     '<link rel="alternate" hreflang="mr" href="https://example.com/mr/">\n<link rel="alternate" hreflang="en" href="https://example.com/en/">'),
   S('2. canonical बहु-आवृत्ती',
     'canonical चे दोन उपयोग:\n\nprint आवृत्ती, सॉर्ट आवृत्ती, पृष्ठभाग.\n\nएकच अधिकृत URL निवडा आणि search engine ला सांगा.\n\nही काळजी duplicate शिक्षा टाळते.\n\nएकाच पेजवर फक्त एकच canonical ठीक.',
     '<link rel="canonical" href="https://example.com/mars/2026/">'),
   S('3. og deep',
     'og मेटा फक्त नाव नाही — type आणि locale.\n\nog:type article, og:locale mr_IN.\n\ntwitter card summary_large_image सोबत.\n\nवाटणीमध्ये जुळणारे fields नेमके भरा.\n\nप्रत्येक पेजवर जुळणारे og नेमके भरा.',
     '<meta property="og:type" content="article">\n<meta property="og:locale" content="mr_IN">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">'),
   S('4. knowledge panel',
     'knowledge panel ही गुगलची बाजूची पट्टी.\n\nOrganization, Person, Product डेटा panels बनवतो.\n\nJSON-LD च्या महत्त्वामुळे structural data हवा.\n\nमराठी संस्थांसाठी name आणि स्थान भरा.\n\nहे rich result चा पुढचा टप्पा.',
     '<p>knowledge panel साठी data:</p>\n<p>नाव, पत्ता, लोगो — संरचना JSON-LD ने.</p>'),
   S('5. robots.txt आणि sitemap',
     'robots.txt directory-level नियम देतो — HTML नाही.\n\nsitemap.xml ही URL सूची — शोधकर्त्यासाठी.\n\nहे search जगाचे दिशादर्शक — HTML च्या सोबत.\n\nmeta robots पेजवर; फायली रूटवर.\n\nदोन्ही मिळून काम करतात.',
     '<p>रूट फाइली:</p>\n<p>robots.txt सूचना, sitemap.xml सूची.</p>'),
   S('6. मेटा समन्वय',
     'सर्व मेटा एकत्रित — भाषा, जोडण्या, rich data.\n\nhreflang भाषा; canonical दुवा; og वाटणी.\n\nहे सर्व head मध्ये तयार राहते.\n\nप्रत्येक पेजवर नियमित तपास करा.\n\nमेटा शुद्ध असल्यास search चांगले उत्तर देते.',
     '<head>\n  <meta charset="utf-8">\n  <title>मराठी लेख</title>\n  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">\n  <link rel="canonical" href="https://example.com/mr/lekh">\n  <meta property="og:locale" content="mr_IN">\n  <meta property="og:type" content="article">\n</head>'),
   S('Mini Project',
     'एका article पेजचे head पूर्ण भरा.\n\nhreflang दोन भाषा. canonical. og डीप.\n\nlocale आणि type ची निवड दाखवा.',
     '<head>\n  <meta charset="utf-8">\n  <title>आजचा लेख</title>\n  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">\n  <link rel="alternate" hreflang="hi" href="https://example.com/hi/">\n  <link rel="canonical" href="https://example.com/mr/aaj">\n  <meta property="og:type" content="article">\n  <meta property="og:locale" content="mr_IN">\n</head>'),
  ],
  ['hreflang काय सांगतो?', 'canonical बहु-आवृत्ती कशी?', 'og deep म्हणजे?', 'knowledge panel कोणते data?'],
  [{'q':'भाषिक आवृत्ती दुवा?','o':['hreflang','alternate lang','dir','bdi'],'c':0},
   {'q':'दुहेरी content टाळणारा?','o':['canonical','robots','charset','theme'],'c':0},
   {'q':'वाटणी locale?','o':['og:locale','og:size','og:name','og:image'],'c':0},
   {'q':'रूटवर नियम फाइल?','o':['robots.txt','index.html','404.html','webpack'],'c':0}],
  {'prompt':'मेटा डीप पेज','starterCode':'<link rel="alternate" hreflang="mr" href="https://example.com/mr/">','expectedOutput':'Renders rich multilingual head'},
  ['hreflang आणि canonical संबंध?', 'og locale कुठे भरतो?'],
  ['html-http-foundations', 'html-form-security'],
  'html-http-foundations', 'html-form-security')

# =====================================================================
# 8. FORM SECURITY
# =====================================================================
L('html-form-security',
  'Form Security',
  'Form Security — संरक्षणाचे नियम',
  'CSRF, XSS, autocomplete संवेदनशील fields आणि सुरक्षित फॉर्म रचना.',
  [
   S('1. CSRF अर्थ',
     'CSRF म्हणजे दुसर्या साइटकडून येणारा हल्ला.\n\nवापरकर्ता लॉगिन असताना हल्ला request पाठवतो.\n\nटोकन हे संरक्षण — सर्व्हर दिलेले unique मूल्य.\n\nअसे form मध्ये टॉकन गुप्त field म्हणून असतो.\n\nसर्व्हर टॉकनशिवाय क्रिया मानत नाही.',
     '<form action="#" method="post">\n  <input type="hidden" name="csrftoken" value="अनोखा"><br>\n  <button type="submit">सुरक्षित</button>\n</form>'),
   S('2. XSS प्रतिबंध',
     'XSS म्हणजे बाह्य script भरवणे.\n\nवापरकर्त्याचे input तसेच पाठवणे धोकादायक.\n\nनियम: पाठवण्यापूर्वी escape आणि encode.\n\n< आणि > दर्शवण्यासाठी entity वापरा — कंस आत जाऊ देऊ नका.\n\nसर्व्हरवर तपासणे बंधनकारक.',
     '<p>मजकूर दिसला आणि सुरक्षित:</p>\n<p>&lt;script&gt; असे लिहिल्यास चालत नाही.</p>'),
   S('3. संवेदनशील fields',
     'क्रेडिट कार्ड, पिन, अर्ज — autocomplete नको.\n\nautocomplete="off" फक्त अस्थायी नाही — प्रत्येक संदर्भ.\n\nnew-password आणि current-password ने मदत.\n\nनियम: गुप्त data मोकळा ठेवू नका.\n\nHTTPS अनिवार्य — संदेश सुरक्षित हवा.',
     '<label>क्रेडिट कार्ड: <input name="cc" type="text" autocomplete="off" inputmode="numeric"></label>'),
   S('4. password managers',
     'password managers चांगले दुवा — autocomplete नियम.\n\ncurrent-password आणि new-password अचूक द्या.\n\nनाव आणि autocomplete जुळल्यास मदत होते.\n\nsingle use token — SMS OTP साठी.\n\nहे वापरकर्त्याला व्यवस्था देते.',
     '<form action="#" method="post">\n  <label>जुना: <input type="password" name="old" autocomplete="current-password"></label>\n  <label>नवा: <input type="password" name="new" autocomplete="new-password"></label>\n  <button type="submit">बदला</button>\n</form>'),
   S('5. GET vs POST निवड',
     'डेटा बदलण्याची क्रिया POST — GET नको.\n\nGET चा data इतिहास आणि logs मध्ये दिसतो.\n\nPOST body मध्ये — विशिष्ट दृश्य नाही.\n\nक्रियांच्या ठिकाणी POST चा उपयोग निश्चित.\n\nशोध आणि वाचन फक्त GET.',
     '<form action="#" method="post">\n  <p>मोठा data बदल POST ने.</p>\n</form>'),
   S('6. सुरक्षित फॉर्म तपासणी',
     'पाठवण्यापूर्वी तपासणी:\n\nautocomplete — संवेदनशील ठिकाणी off.\n\nटोकन hidden field — उपस्थित का?\n\nमजकूर escape — कोणतेही tag टाकू नका.\n\nHTTPS — सर्व request सुरक्षित.\n\nनियम तपासल्यावर फॉर्म विश्वासार्ह.',
     '<form action="https://example.com/apply" method="post">\n  <input type="hidden" name="tk" value="xyz"><br>\n  <label>नाव: <input name="n" autocomplete="off" required></label>\n  <button type="submit">पाठवा</button>\n</form>'),
   S('Mini Project',
     'सुरक्षित अर्ज फॉर्म बनवा.\n\nhidden token. autocomplete off. POST method.\n\nदोन password fields current/new योग्य.',
     '<form action="https://example.com/secure" method="post">\n  <input type="hidden" name="tk" value="अनोखा"><br>\n  <label>नाव: <input name="n" autocomplete="off" required></label>\n  <label>पासवर्ड: <input type="password" name="p" autocomplete="new-password"></label>\n  <button type="submit">पाठवा</button>\n</form>'),
  ],
  ['CSRF टोकन काय करतो?', 'XSS कसे टाळतात?', 'autocomplete off कधी?', 'password manager मदत कशी?'],
  [{'q':'दुसर्या साइटचा हल्ला?','o':['CSRF','XSS','SEO','URL'],'c':0},
   {'q':'input कसे सुरक्षित?','o':['escape आणि encode','component','CSS','cache'],'c':0},
   {'q':'क्रेडिट कार्ड autocomplete?','o':['off','on','new-password','none'],'c':0},
   {'q':'क्रिया कशी पाठवावी?','o':['POST','GET','embed','paint'],'c':0}],
  {'prompt':'सुरक्षित फॉर्म','starterCode':'<form action="https://example.com/x" method="post"><input type="hidden" name="tk" value="abc"></form>','expectedOutput':'Renders secure form with token and restrictions'},
  ['CSRF आणि XSS फरक?', 'token कुठे ठेवतात?'],
  ['html-meta-advanced', 'html-video-audio'],
  'html-meta-advanced', 'html-video-audio')

# =====================================================================
# 9. ADVANCED VIDEO & AUDIO
# =====================================================================
L('html-video-audio',
  'Advanced Video & Audio',
  'Video आणि Audio — प्रगत मीडिया',
  'video srcset, poster, tracks, muted autoplay आणि audio व्यवस्था.',
  [
   S('1. video स्रोत',
     'video घटकात एकापेक्षा अधिक source ठेवता येतात.\n\nप्राथमिक MP4; दुय्यम WebM — आधार बदलतो.\n\nब्राउझर पहिला सुरू होणारा स्रोत निवडतो.\n\nप्रत्येक source type ने लिहा — सुसंगतता.\n\nप्रारंभक चित्र poster ने दिसते.',
     '<video controls width="480" height="270" poster="still.jpg">\n  <source src="film.mp4" type="video/mp4">\n  <source src="film.webm" type="video/webm">\n  <p>तुमचा ब्राउझर video दर्शवू शकत नाही.</p>\n</video>'),
   S('2. poster आणि controls',
     'poster हे व्हिडिओचे प्रारंभक चित्र.\n\nउघडण्यापूर्वी ते दिसते — त्यावरून content अंदाज येतो.\n\ncontrols हे ब्राउझरचे play/pause बटण.\n\nposter साठीचे चित्र योग्य तेथे ठेवा.\n\ncontrols नसल्यास वापरकर्त्याला दिशा मिळत नाही.',
     '<video controls width="480" height="270" poster="cover-mr.jpg">\n  <source src="intro.mp4" type="video/mp4">\n</video>'),
   S('3. muted autoplay',
     'autoplay धोकादायक — म्हणून muted तरी नियम.\n\nmuted सह playback वेगाने सुरू होतो.\n\nहे article मध्ये नको — फक्त background साठी.\n\nलहान प्रयोगांसाठी loop आणि muted हवे.\n\nआवाजाशिवाय autoplay काम करत नाही.',
     '<video autoplay muted loop playsinline width="200" height="120">\n  <source src="bg.mp4" type="video/mp4">\n</video>'),
   S('4. tracks',
     'track घटक subtitles आणि captions देतो.\n\nव्हिडिओमध्ये भाषांतर track मराठी जोडू शकतात.\n\ntrack kind="subtitles" label भाषा; srclang.\n\nहे प्रवेश्यता आणि जगासाठी vital.\n\ntext वेगळी फाइल (.vtt) वापरते.',
     '<video controls width="480" height="270">\n  <source src="film.mp4" type="video/mp4">\n  <track kind="subtitles" src="sub-mr.vtt" srclang="mr" label="मराठी">\n</video>'),
   S('5. preload निवड',
     'preload किती data लागेल हे ठरवतो.\n\nnone — फक्त प्रती; metadata — लांबी; auto — पूर्ण.\n\nपहिल्या स्क्रीनसाठी metadata योग्य.\n\nहे performance आणि डेटा खर्च संतुलित करते.\n\nगरज नसलेला video नंतर load नका.',
     '<video controls preload="metadata" width="240" height="135">\n  <source src="film.mp4" type="video/mp4">\n</video>'),
   S('6. audio व्यवस्था',
     'audio हा video नसलेला ध्वनी — controls, muted गुण.\n\nloop आणि preload नियम समजून घ्या.\n\nएकच audio फाइल — ध्वनीचा संग्रह.\n\nमराठी podcasts नवीन युगात audio महत्त्वाचा.\n\ntype वा dimensions audio ला नाहीत.',
     '<audio controls>\n  <source src="show.mp3" type="audio/mpeg">\n  <p>हा ध्वनी चालला नाही.</p>\n</audio>'),
   S('Mini Project',
     'मीडिया पेज तयार करा.\n\nvideo with poster, sources, tracks मराठी.\n\naudio controls. muted autoplay बंद.\n\nप्रत्येक घटकाला width/height आणि रूपांतर.',
     '<figure>\n  <video controls width="480" height="270" poster="still.jpg">\n    <source src="film.mp4" type="video/mp4">\n    <track kind="subtitles" src="sub-mr.vtt" srclang="mr" label="मराठी">\n  </video>\n  <figcaption>उदाहरण व्हिडिओ</figcaption>\n</figure>\n<audio controls prepend>\n  <source src="show.mp3" type="audio/mpeg">\n</audio>'),
  ],
  ['video किती source हवे?', 'poster काय दाखवतो?', 'autoplay नियम काय?', 'tracks कुठे काम असतात?'],
  [{'q':'व्हिडिओचे प्रारंभक चित्र?','o':['poster','controls','src','track'],'c':0},
   {'q':'ऑटोप्ले नियम?','o':['muted सह','loop only','preload','none'],'c':0},
   {'q':'subtitles कुठे?','o':['track','video','caption','meta'],'c':0},
   {'q':'ऍट्रीब्यूट न लागणारा?','o':['audio width','controls','muted','loop'],'c':0}],
  {'prompt':'मीडिया पेज','starterCode':'<video controls width="480" height="270"><source src="film.mp4" type="video/mp4"></video>','expectedOutput':'Renders video with poster, tracks and audio'},
  ['poster आणि first frame difference?', 'subtitles मराठी कसे करतात?'],
  ['html-form-security', 'html-navigation-history'],
  'html-form-security', 'html-navigation-history')

# =====================================================================
# 10. NAVIGATION & HISTORY
# =====================================================================
L('html-navigation-history',
  'Navigation & History',
  'Navigation — दिशा, इतिहास आणि वर्तणूक',
  'hash routing, history API विचार, target नियम आणि scroll वर्तणूक.',
  [
   S('1. दुव्यांची दिशा',
     'दुवे नेहमी नवीन टॅब वर टाकू नका — target नियम.\n\nबाहेरची साइट target="_blank" पण rel नाही.\n\nrel="noopener" बसते — सुरक्षा नियम.\n\nमुख्य दुवे same tab — वापरकर्ता इतिहासात.\n\nदुवे आणि target यांचा तोल ठेवा.',
     '<a href="https://example.com" target="_blank" rel="noopener">बाहेरील</a>\n<a href="#भाग">आतील</a>'),
   S('2. hash navigation',
     'hash दुवे (#भाग) त्या घटकात स्क्रोल करतात.\n\nहे एक पेज साइटची दिशा — अशी रचना SP.\n\nब्राउझर history hash ठेवतो — back काम.\n\nही media state नसून दृष्टी आहे.\n\nइतिहासात hash ची नोंद — मागे-पुढे काम करते.',
     '<nav>\n  <a href="#परिचय">परिचय</a>\n  <a href="#स्वरूप">स्वरूप</a>\n</nav>\n<h2 id="परिचय">परिचय</h2>'),
   S('3. history API कल्पना',
     'history API पेज रिप्लेसमेंट करतो — URL असली तरी.\n\npushState ने नवीन entry इतिहासात.\n\nहे JavaScript चे साधन — HTML नाही.\n\nअशा डायनॅमिक साइट्स SPA म्हणतात.\n\nHTML शिकताना इतिहास व्यवस्था फक्त समजा.',
     '<p>history API विचार:</p>\n<p>URL बदल, पेज refreshing न कोण?</p>'),
S('4. scroll-behavior',
     'scroll-behavior हा CSS नियम — smooth scroll.\n\nएक पेज long layout साठी comfort.\n\nहे HTML नाही — पण navigation शी संबंधित.\n\nप्रवेश्यता: reduce motion सह बंद.\n\nही शैली नाही — पण दिशा समजून घ्या.',
     '<p>scroll-behavior हा CSS गुणधर्म:</p>\n<p>html { scroll-behavior: smooth; }</p>\n<p>हा नमुना फक्त माहितीसाठी — धड्यात HTML नाही.</p>'),
   S('5. target नियम',
     'target="_top" संपूर्ण ब्राउझर वापरतो.\n\niframe मध्ये छोटी खिडकी असल्यास ती संपूर्ण.\n\nहे embedded दृश्यांचा उपयोग.\n\ntarget="_self" ही normal आज्ञा.\n\nनियम: बाहेरचे _blank + rel noopener.',
     '<iframe src="मार्ग.html" width="400" height="300" title="नकाशा">\n  <a href="मार्ग.html" target="_top">मोठे दृश्य</a>\n</iframe>'),
   S('6. नेव्हिगेशन नियम',
     'नेव्हिगेशनची सवय निर्माण करा:\n\nमुख्य दुवे same tab; बाहेरचे noopener.\n\nhash दुवे विभागांना; इतिहास व्यवस्था.\n\nदीर्घ पेजमध्ये वर जाण्याचा दुवा द्या?\n\nनियम तपासल्यावर वापरकर्ता गोंधळत नाही.',
     '<p>नेव्हिगेशन सारांश:</p>\n<p>same tab, noopener, hash, history.</p>'),
   S('Mini Project',
     'एका सामग्री पेजमध्ये नेव्हिगेशन.\n\nhash मेनू दोन विभाग. एक बाहेरचा noopener.\n\nscroll-behavior note. नियम प्रात्यक्षिक.',
     '<nav>\n  <a href="#परिचय">परिचय</a>\n  <a href="#काम">काम</a>\n</nav>\n<h2 id="परिचय">परिचय</h2>\n<a href="https://example.com" target="_blank" rel="noopener">बाहेरील</a>'),
  ],
  ['बाहेरचा दुवा कसा?', 'hash दुवा काय करतो?', 'history API कोणाचा?', 'target="_top" कुठे?'],
  [{'q':'बाहेरच्या दुव्यासाठी?','o':['target=_blank rel=noopener','rel=gallery','target=top','link=no'],'c':0},
   {'q':'एका पेजचा विभाग दुवा?','o':['hash दुवा','file','base','download'],'c':0},
   {'q':'history entry जोडणारा?','o':['pushState','reset','render','reload'],'c':0},
   {'q':'iframe मध्ये मोठे दृश्य?','o':['target=_top','target=below','rel=frame','name=all'],'c':0}],
  {'prompt':'नेव्हिगेशन पेज','starterCode':'<nav><a href="#परिचय">परिचय</a></nav>','expectedOutput':'Renders hash navigation with noopener external link'},
  ['history आणि hash फरक?', 'कुठे smooth scroll नको?'],
  ['html-video-audio', 'html-debugging-tools'],
  'html-video-audio', 'html-debugging-tools')

# =====================================================================
# 11. DEBUGGING TOOLS
# =====================================================================
L('html-debugging-tools',
  'Debugging Tools',
  'Debugging — चुका शोधण्याची साधने',
  'validator, DOM tree, सामान्य त्रुटी आणि निराकरणाचे नियम.',
  [
   S('1. validator वापर',
     'validator हे व्याकरण तपासणारे साधन.\n\nW3C validator कोड वाचतो आणि दोष दाखवतो.\n\nटाका म्हणजेच — कोड बरोबर नियम.\n\nअशा तपासणीने अनेक त्रुटी आधी दिसतात.\n\nHTML शिकताना नियमित validator हा मित्र.',
     '<p>validator काय सांगते:</p>\n<p>missing end tag, अजून दोष.</p>'),
   S('2. DOM tree समज',
     'पेजचे घटक एका झाडात — DOM tree.\n\nपालक-child संबंध झाड दाखवतो.\n\nकुठला tag कुठे चुकला हे त्यातून कळतो.\n\ndiv भरपूर का? — ते tree मध्ये दिसते.\n\nडीबग मध्ये tree ने प्रथम स्थान.',
     '<main>\n  <h2>शीर्षक</h2>\n  <p>मजकूर खाली.</p>\n</main>'),
   S('3. सामान्य त्रुटी',
     'सामान्य चुका: न भरलेला tag, चुकीचा attribute.\n\nquotes न भरलेले — पेज तुटते.\n\nनावातील चुका — class वा id जुळत नाहीत.\n\nदोष पेजवर दिसत नाहीत — फक्त झाडात.\n\nप्रत्येक चूक एक शिकवण.',
     '<p title="उदाहरण">quotes नियम</p>\n<p class="मराठी">क्लास स्थिर</p>'),
   S('4. scrolling text उपाय',
     'जेव्हा मजकूर चुकतो, feedback ने शोधा.\n\nCSS वा JS त्रुटी HTML शी संबंध नाही.\n\nHTML दोष — tree पहा. attribute दोष — head.\n\nत्रुटी पेजवर का दिसत असेल? का याचा अंदाज tree ने.\n\nशोध प्रक्रिया लगेचच.',
     '<p>दृश्य आणि त्रुटी:</p>\n<p>दृश्येत बिघडलं -> tree तपासा.</p>'),
   S('5. प्रवेश्यता चुका',
     'एरर मध्ये प्रवेश्यता अडचणी सामान्य.\n\nlabel नसलेले input, contrast कमी.\n\nहे validator ने का न कळणार? — ते सदोष नाही, पण मग.\n\nसाधनं आणि मराठी नियम दोन्ही हवे.\n\nप्रवेश्यता चूक वापरकर्त्याला दिसत नाही.',
     '<label for="nm">नाव</label>\n<input id="nm" name="n">\n<p>label जोडले तर प्रवेश्य.</p>'),
   S('6. debugging क्रम',
     'एक नियमित धडा: सरावाने क्रम.\n\n१: validator. २: tree. ३: attributes.\n\nचूक शोधणे हेच खरं शिकणे.\n\nतुमच्या पेजवर मराठी मानक.\n\nही debugging ची सवय सर्वत्र उपयोगी.',
     '<ol>\n  <li>validator चालवा</li>\n  <li>tree पहा</li>\n  <li>attribute तपासा</li>\n</ol>'),
   S('Mini Project',
     'एका intentional चुकीच्या पेजवर DEBUG.\n\nmissing closing tag आणि अयोग्य attribute दाखवा.\n\nनंतर योग्य रचना सोपी करून दाखवा.',
     '<main>\n  <h2>चुकीचे:</h2>\n  <p>closing tag न. <title="अरेरे">\n</main>\n<p>योग्य आवृत्ती: प्रत्येक tag भरा.</p>'),
  ],
  ['validator काय दाखवतो?', 'DOM tree म्हणजे?', 'सामान्य त्रुटी?', 'प्रवेश्यता चूक कशी?'],
  [{'q':'व्याकरण तपासणारा?','o':['validator','preview','console','cache'],'c':0},
   {'q':'घटकांचे झाड?','o':['DOM tree','stack','queue','table'],'c':0},
   {'q':'दिसत नसलेली चूक?','o':['missing end tag','रंग','फॉन्ट','मार्जिन'],'c':0},
   {'q':'label न ठेवणे काय?','o':['प्रवेश्यता चूक','CSS चूक','HTTP चूक','cache चूक'],'c':0}],
  {'prompt':'डीबग पेज','starterCode':'<main><h2>शीर्षक</h2><p>मजकूर</main>','expectedOutput':'Renders corrected page with notes'},
  ['validator मर्यादा?', 'tree मध्ये काय दिसते?'],
  ['html-navigation-history', 'html-enterprise-app'],
  'html-navigation-history', 'html-enterprise-app')

# =====================================================================
# 12. ENTERPRISE APP (capstone)
# =====================================================================
L('html-enterprise-app',
  'Enterprise App',
  'Enterprise App — सर्व Level 4 एकत्र',
  'एंटरप्राइझ माहिती अॅप — Web Components, PWA पाया, storage दिशा आणि सुरक्षा.',
  [
   S('1. उद्दिष्टे',
     'हा धडा Level 4 ची सर्व कौशल्ये एकत्र करतो.\n\nटार्गेट: "मराठी माहिती केंद्र" — माहिती अॅप.\n\ncustom element दिशा, manifest, मेटा डीप.\n\nसुरक्षित फॉर्म आणि मीडिया समावेश.\n\nप्रत्येक विभाग एक कौशल्य प्रदर्शन.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी माहिती केंद्र</title>\n</head>\n<body></body>\n</html>'),
   S('2. head enterprise',
     'head मध्ये PWA आणि मेटा डीप.\n\nmanifest link, theme-color, icon sizes.\n\ncanonical, og locale, twitter card.\n\nhreflang दोन भाषा. robots ध्येय.\n\nहा पाया enterprise दर्जाचा.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी माहिती केंद्र</title>\n  <link rel="manifest" href="site.webmanifest">\n  <meta name="theme-color" content="#104060">\n  <link rel="icon" type="image/png" sizes="192x192" href="icon-192.png">\n  <link rel="canonical" href="https://example.com/mr/">\n  <link rel="alternate" hreflang="mr" href="https://example.com/mr/">\n  <link rel="alternate" hreflang="en" href="https://example.com/en/">\n  <meta property="og:type" content="website">\n  <meta property="og:locale" content="mr_IN">\n  <meta name="twitter:card" content="summary_large_image">\n</head>'),
   S('3. रचना आणि नेव्हिगेशन',
     'body मध्ये semantic रचना आणि नेव्हिगेशन.\n\nheader ब्रँड. nav hash दुवे. main एक.\n\nविभागांना id. footer संपर्क.\n\nदुवे same tab; बाहेरचे noopener.\n\nहे tree आणि प्रवेश्यता दोन्ही सुधारते.',
     '<header>\n  <h1>मराठी माहिती केंद्र</h1>\n</header>\n<nav>\n  <a href="#विषय">विषय</a>\n  <a href="#साधने">साधने</a>\n</nav>\n<main>\n  <h2 id="विषय">विषय</h2>\n  <p>आजची माहिती.</p>\n</main>\n<footer><p>&copy; 2026 केंद्र</p></footer>'),
   S('4. घटक आणि मीडिया',
     'अॅपमध्ये custom element कल्पना आणि मीडिया.\n\napp-card ची रचना. video poster सह.\n\naudio सोबत टीप द्या. width/height सर्वत्र.\n\nहे Level 4 चे प्रात्यक्षिक दाखवते.',
     '<main>\n  <app-card title="मराठी शाळा"></app-card>\n  <video controls width="480" height="270" poster="still.jpg">\n    <source src="intro.mp4" type="video/mp4">\n  </video>\n  <audio controls>\n    <source src="show.mp3" type="audio/mpeg">\n  </audio>\n</main>'),
   S('5. सुरक्षित फॉर्म',
     'सदस्यता फॉर्म enterprise सुरक्षा.\n\nhidden token. POST method. autocomplete नियम.\n\npassword fields current/new. label जोडणी.\n\nहे CSRF आणि XSS दिशेची खबरदारी.',
     '<form action="https://example.com/secure" method="post">\n  <input type="hidden" name="tk" value="अनोखा"><br>\n  <label>नाव: <input name="n" autocomplete="name" required></label>\n  <label>पासवर्ड: <input type="password" name="p" autocomplete="new-password"></label>\n  <button type="submit">सदस्य व्हा</button>\n</form>'),
   S('6. storage दिशा',
     'अॅपच्या data टिकाऊपणा दिशा सांगा.\n\nथीम निवड localStorage मध्ये.\n\nsession wizard मध्ये sessionStorage.\n\nप्रवेश टोकन cookie मध्ये secure सह.\n\nHTML-only मध्ये ही व्यवस्था समजावणी.',
     '<table>\n  <tr><th>data</th><th>ठिकाण</th></tr>\n  <tr><td>थीम</td><td>localStorage</td></tr>\n  <tr><td>session</td><td>sessionStorage</td></tr>\n  <tr><td>प्रवेश</td><td>cookie</td></tr>\n</table>'),
   S('Mini Project',
     'संपूर्ण enterprise अॅप फ्रंट कनेक्ट.\n\nhead डीप. नेव्हिगेशन. घटक आणि मीडिया.\n\nसुरक्षित फॉर्म. storage तक्ता.\n\nHTML Level 4 समाप्त — पुढे CSS.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी माहिती केंद्र</title>\n</head>\n<body>\n  <header>\n    <h1>मराठी माहिती केंद्र</h1>\n  </header>\n  <main>\n    <h2>आजचे विषय</h2>\n    <p>माहिती येथे.</p>\n  </main>\n  <footer><p>&copy; 2026 केंद्र</p></footer>\n</body>\n</html>'),
  ],
  ['हा अॅप काय एकत्र करतो?', 'head मध्ये काय हवे?', 'फॉर्म सुरक्षा कशी?', 'storage दिशा कशी?'],
  [{'q':'मुख्य URL वर alternate?','o':['hreflang','title','lang','encoding'],'c':0},
   {'q':'सुरक्षित फॉर्म पहिले?','o':['hidden token','autofocus','placeholder','reset'],'c':0},
   {'q':'थीम कुठे टिकते?','o':['localStorage','cookie only','session child','frame'],'c':0},
   {'q':'Level 4 पुढे?','o':['CSS track','back to Python','संपवणे','history end'],'c':0}],
  {'prompt':'एंटरप्राइझ फ्रंट','starterCode':'<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी केंद्र</title>\n</head>\n<body></body>\n</html>','expectedOutput':'Renders full enterprise information app'},
  ['हे app install कसा होईल?', 'पुढे CSS दिशा कशी?'],
  ['html-debugging-tools', 'html-web-components'],
  'html-debugging-tools', 'html-web-components')

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
    parts.append("    levelLabel: HTML4_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === HTML · LEVEL 4 — Modern Web Components, PWA आणि Advanced Security ===\n'
    header += 'export const HTML4_LABEL = "HTML · Level 4 — Modern Web Components, PWA आणि Advanced Security";\n'
    header += '\nexport const htmlLevel4: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/html4_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/html4_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/html4_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/html-level4.ts')
print("WROTE html-level4.ts, lines:", len(out.split(chr(10))))