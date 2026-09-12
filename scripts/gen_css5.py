# -*- coding: utf-8 -*-
# Generator for CSS Level 5 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level5.ts. Base content ~100-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=30):
    lessons.append({
        'slug': slug, 'categoryId': 'web', 'title': title, 'marathiTitle': mt,
        'level': 'advanced', 'minutes': minutes, 'summary': summary,
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
# 1. CLIP PATH
# =====================================================================
L('css-clip-path',
  'Clip Path',
  'clip-path — कापलेले आकार',
  'polygon, circle आणि दृश्य कट.',
  [
   S('1. कट कल्पना',
     'clip-path घटक कापतो.\n\nआकाराबाहेर लपते.\n\nimage सुंदर बनते.\n\ndekor साठी सोपा.\n\nborder सोबत वेगळा.\n\nनवीन नियम जोडा.',
     '.cut {\n  clip-path: circle(50%);\n}'),
   S('2. polygon बिंदू',
     'polygon मध्ये निर्देशांक.\n\nतीन बिंदू त्रिकोण.\n\nटक्के आणि pixels शक्य.\n\nप्रत्येक बिंदू क्रम.\nchip.sh कोपरे सुंदर.\n\nआकार स्वतंत्र.',
     '.chip {\n  clip-path: polygon(8% 0, 100% 0, 92% 100%, 0 100%);\n}'),
   S('3. circle आणि inset',
     'circle मध्यवर्ती आकार.\n\ninset आतून कोपरा कापतो.\n\nकाठ अचूक मोजा.\n\ninset मध्ये चार मूल्ये.\n\nrounded सह व्यवस्था.\n\nदोन्ही उपयोगी.',
     '.badge {\n  clip-path: inset(0 0 0 20%);\n}'),
   S('4. निर्देशांक गणित',
     'कॅल्क्युलेशन मूल्ये.\n\nटक्के हवे तसे मोडतात.\n\nकाही function संगत.\n\nसाधेपणा राखा.\n\nप्रत्येक आकार काळजी.\n\nमोजमाप कठोर पहा.',
     '.edge {\n  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%);\n}'),
   S('5. hover बदल',
     'clip-path hover मध्ये बदलता.\n\ntransition गुळगुळीत.\n\nसमान बिंदू संख्या हवी.\n\nआकार मोठा होतो.\n\nदृश्य परिणाम छान.\n\nसर्व बिंदू योग्य क्रम.',
     '.box {\n  clip-path: circle(30%);\n  transition: clip-path 0.4s;\n}\n.box:hover {\n  clip-path: circle(60%);\n}'),
   S('6. आधार',
     'clip-path आधार मजबूत.\n\nनवीन सर्वत्र चालते.\n\nजुने कोपरे टाळा.\n\nप्रवेश्यता दृष्टीने.\n\nकार्यात्मकता ठेवा.\n\nकोड स्वच्छ ठेवा.',
     '.deco {\n  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);\n}'),
   S('Mini Project',
     'टॅग chip shape तयार.\n\nतीन बिंदू तपासा.',
     '.tag {\n  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);\n}'),
  ],
  ['clip-path काय?', 'polygon कसे?', 'inset कुठे?'],
  [{'q':'clip-path?','o':['कापतो','रंगतो','वाढतो'],'c':0},
   {'q':'polygon?','o':['बिंदू','रेषा','रंग'],'c':0},
   {'q':'circle मध्ये?','o':['50%','दोन','नाव'],'c':0},
   {'q':'transition लागतो?','o':['हवे','नको','कडे'],'c':0}],
  {'prompt':'हेडर निमित्त tag तयार.','starterCode':'.tag { clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%); }','expectedOutput':'Renders a clipped tag shape'},
  'clip-path आधार?',
  ['css-gradient-deep', 'css-pseudo-classes', 'css-shape-outside'],
  'css-marathi-capstone4', 'css-gradient-deep')

# =====================================================================
# 2. GRADIENT DEEP
# =====================================================================
L('css-gradient-deep',
  'Gradient Deep',
  'ग्रेडियंट गणित',
  'conic, radial आणि color stops नियंत्रण.',
  [
   S('1. linear नियम',
     'linear-gradient दिशा गणित.\n\nटक्के मूल्य order.\n\nangle ने दिशा व्यवस्था.\n\nस्टॉपचे स्थान महत्त्वाचे.\n\nरंग संक्रमण सुरळीत.\n\nअचूक नियंत्रण हवे.',
     '.stripes {\n  background: linear-gradient(45deg, #6366f1 25%, #a5b4fc 25%);\n}'),
   S('2. color stops',
     'स्टॉपवर रंग बदलतो.\n\nटक्के शून्य ते शंभर.\n\nhard stop ने टोक कापले.\n\nगुळगुळीत शेडिंग.\n\nतीन रंग साधा.\n\nlocation नियंत्रण नेमके.',
     '.band {\n  background: linear-gradient(90deg, red 0%, orange 50%, yellow 100%);\n}'),
   S('3. radial केंद्र',
     'radial मध्यवर्ती विस्तार.\n\nat location केंद्र हलते.\n\ncircle दश एकसमान.\n\nclosest-side नियम.\n\nप्रकाश सोबत सुंदर.\n\nआकार तपासता.',
     '.glow {\n  background: radial-gradient(circle at 30% 30%, #38bdf8, #0f172a);\n}'),
   S('4. conic पट्टी',
     'conic मध्यवर्तीभोवती फिरते.\n\nपाई चार्ट सहज.\n\nटक्के बेरीज 100.\n\nकाळी पट्टी hard.\n\nरंग क्रम स्पष्ट.\n\nआकडेवारी दृश्य.',
     '.pie {\n  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);\n}'),
   S('5. repeating थर',
     'repeating-linear खाच.\n\nrepeating-radial वलय.\n\nशेवट नियम नेमका.\n\nएकसारखे नमुने.\n\nउपयोगी लहान भाग.\n\nपट्टे जलद होतात.',
     '.zebra {\n  background: repeating-linear-gradient(0deg, #f8fafc 0 10px, #e2e8f0 10px 20px);\n}'),
   S('6. आधार आणि परिस्थिती',
     'ग्रेडियंट आधार उत्तम.\n\nपॅटर्नस सर्वत्र.\n\nबचत graphics.\n\nप्रवेश्यता रंग जपा.\n\nउतरवण्यापूर्वी तपासा.\n\nआधुनिक नियम सोबत.',
     '.hero {\n  background: linear-gradient(160deg, #7c3aed 0%, #db2777 100%);\n}'),
   S('Mini Project',
     'पाई chart card बनवा.\n\nचार भाग.',
     '.pie-badge {\n  background: conic-gradient(#22c55e 0 25%, #f59e0b 25% 60%, #ef4444 60%);\n}'),
  ],
  ['stops काय?', 'conic कुठे?', 'repeating कसे?'],
  [{'q':'linear-gradient?','o':['दिशा','फिरणे','राग'],'c':0},
   {'q':'hard stop?','o':['टोक','गुळगुळीत','रंग'],'c':0},
   {'q':'conic काय?','o':['पाई','ग्रिड','सावली'],'c':0},
   {'q':'radial at?','o':['केंद्र','कडा','शीर्ष'],'c':0}],
  {'prompt':'तिरकस पट्टे band बनवा.','starterCode':'.band { background: repeating-linear-gradient(45deg, #6366f1 0 12px, #a5b4fc 12px 24px); }','expectedOutput':'Renders a striped diagonal band'},
  'ग्रेडियंट उपयोग?',
  ['css-clip-path', 'css-grid-auto-flow', 'css-pseudo-classes'],
  'css-clip-path', 'css-grid-auto-flow')

# =====================================================================
# 3. GRID AUTO FLOW
# =====================================================================
L('css-grid-auto-flow',
  'Grid Auto Flow',
  'grid-auto — ऑटो विधान',
  'auto-flow, auto-rows आणि dense नियम.',
  [
   S('1. ऑटो भरणा',
     'ग्रिड मुलांना स्वयं भरते.\n\nrow ने पुढे पंक्ती.\n\ncolumn ने उभी रचना.\n\norder नुसार क्रम.\n\nजागा मोकळी असेल.\n\nप्रत्येक घटक जोडला.',
     '.grid {\n  display: grid;\n  grid-auto-flow: row;\n}'),
   S('2. auto-rows',
     'auto-rows नव्या ओळी उंची.\n\nउघड्या मूल्यांवर उपाय.\n\nminmax लवचिकता.\n\nसर्व अज्ञात पंक्ती.\n\nग्रिड लवचिक होतो.\n\nसोपी समानता.',
     '.grid {\n  grid-auto-rows: minmax(80px, auto);\n}'),
   S('3. dense नियम',
     'dense मागील जागा भरते.\n\nलहान भाग पुढे.\n\nvisual घट्ट होते.\n\nsource order बदलत नाही.\n\nगॅलरीसाठी उत्तम.\n\nक्रम स्थिर पाहा.',
     '.grid {\n  grid-auto-flow: dense;\n}'),
   S('4. column दिशा',
     'column auto ने उभी वाढ.\n\nछोटे column सेट.\n\nauto-columns रुंदी.\n\nvertical मजकूर सोय.\n\nअक्षर नियम नसल्यास.\n\nदिशा नेमकी निवडा.',
     '.cols {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 1fr;\n}'),
   S('5. explicit मिश्रण',
     'template-row आणि auto.\n\nexplicit प्रथम नियम.\n\nबाकी भाग auto.\n\nएकत्र शक्ती.\n\nसहज वाढ व्यवस्था.\n\nआकार दोन्ही जोडा.',
     '.mix {\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-auto-rows: 60px;\n}'),
   S('6. आधार ग्रिड',
     'grid आधार भक्कम.\n\nauto नियम सर्वत्र.\n\nजुने display वेगळे.\n\nतार्किक गणना.\n\nप्रत्येक ब्राउझर समान.\n\nglobal ला सुरक्षा.',
     '.flow {\n  display: grid;\n  grid-auto-flow: row dense;\n  gap: 8px;\n}'),
   S('Mini Project',
     'chip ग्रिड dense तयार.\n\nलहान मोठे भाग.',
     '.chips {\n  display: grid;\n  grid-auto-flow: dense;\n  grid-auto-rows: 36px;\n}'),
  ],
  ['auto-flow काय?', 'dense कसे?', 'rows कुठे?'],
  [{'q':'auto-flow?','o':['क्रम','रंग','कडा'],'c':0},
   {'q':'dense?','o':['भरते','लपते','वाढते'],'c':0},
   {'q':'auto-rows?','o':['उंची','रुंदी','रंग'],'c':0},
   {'q':'column flow?','o':['उभी','सपाट','चौरस'],'c':0}],
  {'prompt':'dense chip grid तयार.','starterCode':'grid-auto-flow: dense with auto-rows','expectedOutput':'Renders a dense packed chip grid'},
  'grid auto उपयोग?',
  ['css-clip-path', 'css-counters-lists', 'css-gradient-deep'],
  'css-gradient-deep', 'css-counters-lists')

# =====================================================================
# 4. COUNTERS LISTS
# =====================================================================
L('css-counters-lists',
  'Counters Lists',
  'काउंटर आणि यादी',
  'counter-reset, increment आणि display यादी.',
  [
   S('1. काउंटर कल्पना',
     'काउंटर संख्या गिनती.\n\nकोणताही html नाही.\n\nCSS मध्ये व्यवस्था.\n\nnumerals स्वयं जोडतो.\n\nsection numbering सहज.\n\nअनुक्रम स्थिर.',
     'body {\n  counter-reset: section;\n}'),
   S('2. increment नियम',
     'counter-increment पुढे टाकतो.\n\nप्रत्येक h2 नवा.\n\nदुसरे मूल्य सुरुवात.\n\nक्रम वाढतो.\n\nनवीन शाखा.\n\nसोपे नियम पाळा.',
     'h2 {\n  counter-increment: section;\n}\nh2::before {\n  content: counter(section) ". ";\n}'),
   S('3. list style',
     'list-style नियम साधा.\n\nmarker देखावा बदलतो.\n\nimage marker शक्य.\n\nposition आत बाहेर.\n\nक्रम मजबूत.\n\nedit साठी स्पष्ट.',
     'ul {\n  list-style: square inside;\n}'),
   S('4. nested काउंटर',
     'nested heading दोन स्तर.\n\ncounter डॉट संयोग.\n\ntop वर reset.\n\nसबविभाग increment.\n\nअनुक्रम खोल.\n\nस्वयंसिद्ध समजतो.',
     'h3::before {\n  content: counter(section) "." counter(subsection) " ";\n  counter-increment: subsection;\n}'),
   S('5. @counter-style',
     '@counter-style नवा नमुना.\n\nsymbols प्रकार.\n\nsystem नियम.\n\nनाव line वापरा.\n\nआधार मर्यादित.\n\ncustom बरोबर.',
     '@counter-style marathi {\n  system: cyclic;\n  symbols: "१" "२" "३";\n}\nol {\n  list-style: marathi;\n}'),
   S('6. आधार आणि उपयोग',
     'काउंटर आधार रुंद.\n\n@counter-style नवीन.\n\naccessibility scrollbar नियम.\n\nmarker पासून अर्थ.\n\nसाधेपणा ठेवा.\n\nयादी पाशवी करा.',
     'ol {\n  list-style: devanagari;\n}'),
   S('Mini Project',
     'दस्तऐवज numbering तयार.\n\nदोन स्तर.',
     'h2::before {\n  content: counter(sec) ". ";\n  counter-increment: sec;\n}'),
  ],
  ['reset काय?', 'increment कसे?', 'marker कुठे?'],
  [{'q':'counter-reset?','o':['शून्य','दोन','रंग'],'c':0},
   {'q':'increment?','o':['वाढ','घट','नाव'],'c':0},
   {'q':'list-style?','o':['marker','color','gap'],'c':0},
   {'q':'nested?','o':['दोन स्तर','एक','तीन'],'c':0}],
  {'prompt':'दस्ताऐवज 1.1 numbering साधा.','starterCode':'body { counter-reset: sec subs; }','expectedOutput':'Renders auto-numbered section headings'},
  'काउंटर उपयोग?',
  ['css-shape-outside', 'css-pseudo-classes', 'css-gradient-deep'],
  'css-grid-auto-flow', 'css-shape-outside')

# =====================================================================
# 5. SHAPE OUTSIDE
# =====================================================================
L('css-shape-outside',
  'Shape Outside',
  'shape-outside — मजकूर आकार',
  'मजकूर float आकाराभोवती वाहतो.',
  [
   S('1. आकार भोवती',
     'shape-outside float चा आकार बदलतो.\n\nमजकूर त्या मार्गाने.\n\ncircle सह मानेदार.\n\neditorial खूब उत्तम.\n\nनसल्यास साधी.\n\nवाहणे सुंदर होते.',
     '.pic {\n  float: left;\n  shape-outside: circle(50%);\n}'),
   S('2. polygon वाहणे',
     'polygon मध्ये वाकडे.\n\nमजकूर कोपरे टाळतो.\n\nटक्के चांगले.\n\nआधार मोजा.\n\nप्रत्येक बिंदू अचूक.\n\nimage सोबत जुळते.',
     '.blob {\n  float: left;\n  width: 220px;\n  shape-outside: polygon(0 0, 100% 0, 85% 100%, 0 100%);\n}'),
   S('3. float अंतर',
     'float तरंग annotation.\n\nshape-margin अंतर जोडतो.\n\nमजकूर दूर हलतो.\n\nजागा गुळगुळीत.\n\nपट मोकळी लागते.\n\nवाचन स्पष्ट.',
     '.quote-float {\n  float: right;\n  shape-outside: margin-box;\n  shape-margin: 14px;\n}'),
   S('4. image alpha',
     'image alpha वर आकार.\n\nshape-from-image फिरते.\n\nअपारदर्शक भाग ठरतो.\n\nआधार नवीन.\n\nसुंदर प्रभाव.\n\nप्रयोग सोपा.',
     '.leaf {\n  float: left;\n  shape-outside: url(leaf.png);\n  shape-image-threshold: 0.5;\n}'),
   S('5. break नियम',
     'आकाराभोवती break गरज.\n\nshape-margin ने खुला.\n\nfloat कडक येते.\n\nखालील ओळ वाहते.\n\nगणना ठीक.\n\nवाचन व्यवस्थित.',
     '.wrap {\n  float: none;\n}\n.shape-block {\n  overflow: hidden;\n}'),
   S('6. आधार',
     'shape-outside आधार मध्यम.\n\nजुने float नेमका.\n\nमजकूर नेहमी स्पष्ट.\n\nलहान स्क्रीन सांभाळ.\n\nजागा तपासा.\n\nउदाहरण प्रयोग करा.',
     '@media (max-width: 480px) {\n  .pic {\n    float: none;\n    shape-outside: none;\n    width: 100%;\n  }\n}'),
   S('Mini Project',
     'बातमी image वाकडा.\n\ncircle मध्यभागी.',
     '.news-img {\n  float: left;\n  shape-outside: circle(40%);\n}'),
  ],
  ['shape काय?', 'margin कसे?', 'break कुठे?'],
  [{'q':'shape-outside?','o':['आकार','रंग','फॉन्ट'],'c':0},
   {'q':'float लागतो?','o':['होय','नाही','मागे'],'c':0},
   {'q':'shape-margin?','o':['अंतर','जाडी','नाव'],'c':0},
   {'q':'image alpha?','o':['पारदर्शक','कडक','मोठा'],'c':0}],
  {'prompt':'circle avatar उजवीकडे तरंग.','starterCode':'.avatar { float: right; shape-outside: circle(50%); }','expectedOutput':'Renders text flowing around a circular avatar'},
  'shape उपयोग?',
  ['css-counters-lists', 'css-clip-path', 'css-scrollbar-style'],
  'css-counters-lists', 'css-scrollbar-style')

# =====================================================================
# 6. SCROLLBAR STYLE
# =====================================================================
L('css-scrollbar-style',
  'Scrollbar Style',
  'scrollbar — देखावा नियम',
  'scrollbar-color, width आणि custom नियम.',
  [
   S('1. scrollbar प्रकार',
     'स्क्रोलबार बदलता.\n\nदिशा दोन्ही.\n\ncolor आणि width.\n\nखास ठिकाणी व्यवस्था.\n\nस्थिर राहते.\n\nस्वच्छ देखावा.',
     '.outer {\n  scrollbar-width: thin;\n  scrollbar-color: #94a3b8 #e2e8f0;\n}'),
   S('2. scrollbar-width',
     'width thin किंवा auto.\n\nहलका आकार सुधारणा.\n\nमोठा नको.\n\nप्रत्येक browser.\n\nसोपी लाइनर.\n\nमोकळे दृश्य.',
     '.panel {\n  scrollbar-width: thin;\n}'),
   S('3. scrollbar-color',
     'color दोन मूल्ये.\n\nthumb आणि track.\n\nसुसंगत रंग निवडा.\n\ndark themed.\n\nकंट्रास्ट जपा.\n\nस्पष्ट नियंत्रण.',
     '.dark {\n  background: #0f172a;\n  scrollbar-color: #64748b #1e293b;\n}'),
   S('4. webkit नियम',
     '::-webkit-scrollbar खास.\n\nthumb gradient.\n\ntrack रंग.\n\nइतर browser ने वेगळा.\n\ncss prefix विचार.\n\nजुने न प्रणाळी.',
     '.list::-webkit-scrollbar {\n  width: 10px;\n}\n.list::-webkit-scrollbar-thumb {\n  background: #94a3b8;\n  border-radius: 8px;\n}'),
   S('5. प्रवेश्यता',
     'scrollbar दिसणारा ठेवा.\n\nsmall touch नको.\n\nथंड पेक्षा स्वच्छ.\n\nकीबोर्ड tab.\n\nप्रत्येक स्थिती.\n\nनिश्चित टोक.',
     '.scroll {\n  overflow: auto;\n  scroll-behavior: smooth;\n}'),
   S('6. आधार',
     'color आधार मजबूत.\n\nwebkit फक्त क्रोम.\n\nएकत्र नियम.\n\nप्रत्येक browser चालते.\n\nप्रवाह तपासा.\n\nकोड सुबक.',
     '.box {\n  scrollbar-width: thin;\n  scrollbar-color: #dc2626 #fecaca;\n}\n.box::-webkit-scrollbar {\n  width: 8px;\n}'),
   S('Mini Project',
     'chat panel scrollbar रंगा.\n\ndark theme.',
     '.chat {\n  scrollbar-color: #38bdf8 #0f172a;\n}'),
  ],
  ['width काय?', 'color कसे?', 'webkit कुठे?'],
  [{'q':'scrollbar-width?','o':['thin','bold','large'],'c':0},
   {'q':'color मूल्ये?','o':['दोन','तीन','चार'],'c':0},
   {'q':'webkit?','o':['क्रोम','फायर','सफारी'],'c':0},
   {'q':'जुने ब्राउझर?','o':['साधा','रंगीत','गहि'],'c':0}],
  {'prompt':'dark chat scrollbar साधा.','starterCode':'.chat { scrollbar-width: thin; scrollbar-color: #38bdf8 #0f172a; }','expectedOutput':'Renders a thin themed scrollbar'},
  'scrollbar आधार?',
  ['css-shape-outside', 'css-stacking-context', 'css-viewport-units'],
  'css-shape-outside', 'css-stacking-context')

# =====================================================================
# 7. STACKING CONTEXT
# =====================================================================
L('css-stacking-context',
  'Stacking Context',
  'stacking — दृश्य थर',
  'z-index, position आणि थर नियम.',
  [
   S('1. थर कल्पना',
     'घटक थरांमध्ये निवडतात.\n\nz-index क्रम ठरवतो.\n\nposition सोबत चालतो.\n\nउंच थर पुढे.\n\nसमान गट शीर्ष.\n\nvisual ची व्यवस्था.',
     '.over {\n  position: relative;\n  z-index: 10;\n}'),
   S('2. position भूमिका',
     'position निवड स्पष्ट.\n\nrelative नवीन संदर्भ.\n\nabsolute जागा सोडतो.\n\nfixed स्क्रोल ठेवते.\n\nप्रत्येक क्रम स्पष्ट.\n\nकोड वाचता.',
     '.all {\n  position: fixed;\n  z-index: 100;\n}'),
   S('3. z-index नियम',
     'z-index ऋण शक्य.\n\nauto अनिश्चित.\n\nसंख्या जितकी मोठी.\n\ntransform नवीन संदर्भ.\n\nप्रत्येक संदर्भ आतला.\n\nप्रमाण ठेवा.',
     '.a {\n  position: relative;\n  z-index: 5;\n}\n.b {\n  position: relative;\n  z-index: 9;\n}'),
   S('4. संदर्भ निर्मिती',
     'काही गुणधर्म नवीन संदर्भ.\n\nopacity थर उघडतो.\n\nfilter सावली जोडतो.\n\ntransform आतला.\n\nसर्व गुण चालतात.\n\nपॅरेंट संबंधित.',
     '.glass {\n  opacity: 0.8;\n}\n.card {\n  filter: drop-shadow(0 0 4px #000);\n}'),
   S('5. modal नियम',
     'modal उच्च थर.\n\noverlay मागील.\n\nz-index स्पष्ट.\n\nbody सोबत गांठी.\n\nकीबोर्ड management.\n\nreserve साठी मोठा.',
     '.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgb(0 0 0 / 40%);\n  z-index: 50;\n}\n.modal {\n  position: fixed;\n  z-index: 60;\n}'),
   S('6. आधार आणि सवय',
     'z-index सर्वत्र चालते.\n\nगरज न्यूनतम ठेवा.\n\nबहुतेक थर टाळा.\n\nस्पष्ट numbering.\n\nप्रत्येक संदर्भ test.\n\nसध्या सोपे राहो.',
     '.top {\n  z-index: 999;\n}\n.bottom {\n  z-index: 1;\n}'),
   S('Mini Project',
     'tooltip त्याच वर.\n\nmodal joint.',
     '.tooltip {\n  position: absolute;\n  z-index: 30;\n}'),
  ],
  ['थर काय?', 'z-index कसे?', 'modal कुठे?'],
  [{'q':'z-index?','o':['क्रम','रंग','नाव'],'c':0},
   {'q':'position लागतो?','o':['होय','नाही','मागे'],'c':0},
   {'q':'transform?','o':['संदर्भ','रंग','गीत'],'c':0},
   {'q':'overlay?','o':['थर','टीप','काळफ'],'c':0}],
  {'prompt':'tooltip above button साधा.','starterCode':'.btn { position: relative; } .tip { position: absolute; z-index: 20; }','expectedOutput':'Renders a tooltip above its button'},
  'stacking संदर्भ?',
  ['css-scrollbar-style', 'css-pseudo-classes', 'css-viewport-units'],
  'css-scrollbar-style', 'css-pseudo-classes')

# =====================================================================
# 8. PSEUDO CLASSES
# =====================================================================
L('css-pseudo-classes',
  'Pseudo Classes',
  'पseudo-classes — अद्वितीय निवड',
  ':is :where :not आणि nth नियम.',
  [
   S('1. :is() नियम',
     ':is() एकत्र निवडी.\n\nकमी वाक्य.\n\nसगळे match.\n\nसोपे सोयीचे.\n\nजुने वेगळे नियम.\n\nselectors एकत्र.',
     ':is(h1, h2, h3) {\n  margin-top: 1.5em;\n}'),
   S('2. :where() वजन',
     ':where() शून्य specificity.\n\nहलके नियम.\n\nसाध्यांपेक्षा कमी.\n\nसानुकूल जुळते.\n\nउपयोग सुरक्षित.\n\nनवीन लिहिणे.',
     ':where(nav, footer) a {\n  color: #475569;\n}'),
   S('3. :not() उलट',
     ':not() नकार देतो.\n\nएक किंवा अनेक.\n\nकालबाह्य वगळा.\n\nspecificity जोडते.\n\nगरज अचूक निवडा.\n\nस्वरूप स्पष्ट.',
     'li:not(:last-child) {\n  border-bottom: 1px solid #e2e8f0;\n}'),
   S('4. nth गणित',
     'nth-child An+B गणित.\n\nodd even नमुना.\n\n3n मधील तिसरा.\n\nपहिला आणि शेवट.\n\nक्रम तपासा.\n\nप्रगती नमुन्यांत.',
     'tr:nth-child(odd) {\n  background: #f8fafc;\n}'),
   S('5. :target भेद',
     ':target निवड लिंक.\n\nइतर link नवा.\n\nid चे भिंत.\n\nhighlight विभाग.\n\nफक्त ते दिसते.\n\nउपयोग सोपा.',
     'section:target {\n  background: #fef9c3;\n}'),
   S('6. संयोग सवय',
     'एकत्र :is :where.\n\nspecificity नियम जपा.\n\nवाक्य वाचता.\n\nअर्थ स्पष्ट.\n\nआधार मजबूत.\n\nकोड थोडा हवा.',
     ':where(article) :is(h2, h3):not(:first-child) {\n  margin-top: 1em;\n}'),
   S('Mini Project',
     'कार्ड list निवडी सुधारा.\n\nodd even.',
     '.list li:nth-child(odd) {\n  background: #eef2ff;\n}'),
  ],
  [':is काय?', ':where जड?', ':not कसे?'],
  [{'q':':is()?','o':['जोड','तोड','रंग'],'c':0},
   {'q':':where() वजन?','o':['शून्य','उच्च','मध्य'],'c':0},
   {'q':':not()?','o':['नकार','जोड','वाढ'],'c':0},
   {'q':'nth-child?','o':['गणित','रंग','नाव'],'c':0}],
  {'prompt':'odd rows accent साधा.','starterCode':'.list li:nth-child(odd) { background: #eef2ff; }','expectedOutput':'Renders a zebra-striped list'},
  'pseudo आधार?',
  ['css-stacking-context', 'css-counters-lists', 'css-viewport-units'],
  'css-stacking-context', 'css-viewport-units')

# =====================================================================
# 9. VIEWPORT UNITS
# =====================================================================
L('css-viewport-units',
  'Viewport Units',
  'viewport units — आकार एकक',
  'dv, sv, lv आणि container units.',
  [
   S('1. vw vh नियम',
     'vw रुंदीप्रमाणे.\n\nvh उंचीप्रमाणे.\n\n100vh पूर्ण पडदा.\n\nव्यवस्था हलते.\n\nमोबाईल बदल दिसतात.\n\nआधार मजबूत.',
     '.full {\n  height: 100vh;\n}'),
   S('2. dvh बदल',
     'dvh डायनॅमिक उंची.\n\nटूलबार बदल अद्भुत.\n\nsvh लहान स्थिर.\n\nlvh मोठा निर्धार.\n\nप्रत्येक परिस्थिती.\n\nनवीन निवड हवी.',
     '.hero-phone {\n  height: 100dvh;\n}'),
   S('3. svh आणि lvh',
     'svh लहान दृश्य.\n\nlvh मोठा दृश्य.\n\nसुरक्षित sizing.\n\nकीबोर्ड खुला ध्यान.\n\nप्रत्येक ब्राउझर नवा.\n\nमोबाईल प्रयोग.',
     '.safe {\n  height: 100svh;\n}\n.wide {\n  height: 100lvh;\n}'),
   S('4. container units',
     'cqw कंटेनर रुंदी.\n\ncqi inline आकार.\n\ncqb block आकार.\n\nस्वतंत्र वाचन.\n\ncontainer-type लागतो.\n\nनवीन स्तर.',
     '.card {\n  container-type: inline-size;\n}\n.card .btn {\n  font-size: 2cqi;\n}'),
   S('5. एकत्र नियम',
     'min clamp वापरा.\n\nएकक क्रम.\n\nएककांचे रहस्य.\n\nप्रत्येक गरज.\n\nसध्याचे प्रयोग.\n\nप्रमाण स्थिर.',
     '.type {\n  font-size: clamp(1rem, 3cqi, 2.2rem);\n}'),
   S('6. आधार तपास',
     'dvh आधार नवीन.\n\nजुने vh साधा.\n\n@supports तपासा.\n\nक्रम योग्य निवडा.\n\nमोबाईल तपासणी.\n\nसुरक्षित मोड.',
     '.page {\n  min-height: 100vh;\n}\n@supports (height: 100dvh) {\n  .page {\n    min-height: 100dvh;\n  }\n}'),
   S('Mini Project',
     'पूर्ण बटण 100dvh.\n\nमोबाईल तपास.',
     '.cta {\n  min-height: 100dvh;\n}'),
  ],
  ['vw काय?', 'dvh कुठे?', 'cqi कसे?'],
  [{'q':'100vh?','o':['पूर्ण','अर्धा','रंग'],'c':0},
   {'q':'dvh?','o':['डायनॅमिक','साधा','जाड'],'c':0},
   {'q':'svh?','o':['लहान','मोठा','मध्य'],'c':0},
   {'q':'cqi?','o':['कंटेनर','पेज','फॉन्ट'],'c':0}],
  {'prompt':'मोबाईल full cta साधा.','starterCode':'.cta { min-height: 100dvh; }','expectedOutput':'Renders a full-height call-to-action block'},
  'units आधार?',
  ['css-pseudo-classes', 'css-media-ranges', 'css-scrollbar-style'],
  'css-pseudo-classes', 'css-media-ranges')

# =====================================================================
# 10. MEDIA RANGES
# =====================================================================
L('css-media-ranges',
  'Media Ranges',
  'media ranges — आकार सीमा',
  'range syntax आणि container ranges.',
  [
   S('1. range वाक्य',
     'आधुनिक media range.\n\nwidth आणि height.\n\noperator सोबत गणित.\n\nजुने क्लासिक.\n\nनवीन सर्वत्र आता.\n\nवाचन सोपे.',
     '@media (width >= 700px) {\n  .main {\n    display: grid;\n  }\n}'),
   S('2. and range',
     'दोन सीमा मध्ये.\n\nwidth antara.\n\nand जोडते.\n\nश्रेणी अचूक.\n\nपर्यंत ठीक.\n\nप्रत्येक device.',
     '@media (400px <= width <= 800px) {\n  .panel {\n    grid-template-columns: 1fr 1fr;\n  }\n}'),
   S('3. orientation',
     'orientation सरळ.\n\nportrait उभा.\n\nlandscape सपाट.\n\nranges नाही लागत.\n\nमोबाईल नियम.\n\nदृश्य बदलते.',
     '@media (orientation: landscape) {\n  .hero {\n    flex-direction: row;\n  }\n}'),
   S('4. container ranges',
     'container श्रेणी समान.\n\ncqi मोजमाप.\n\n@container नियम.\n\nफक्त घटक पेक्षा.\n\nसंदर्भ सॉफ्ट.\n\nनवीन आधार.',
     '@container (width >= 320px) {\n  .item {\n    font-size: 1.2rem;\n  }\n}'),
   S('5. आधार संवाद',
     'range आधार घट्ट.\n\nजुने वाक्य मंद.\n\nएकत्र @supports.\n\nप्रत्येक environment.\n\nअचूक determination.\n\nतपासणी सवय.',
     '@media (width < 480px) and (prefers-color-scheme: dark) {\n  body {\n    font-size: 18px;\n  }\n}'),
   S('6. उपयोग सवय',
     'एक query एक नियम.\n\nतेजस्वी गणित.\n\nकोड कमी नको.\n\nवाचकाला अर्थ.\n\nश्रेणी तपासा.\n\nप्रत्येक change पहा.',
     '@media (700px <= width <= 1000px) {\n  .article {\n    max-width: 40ch;\n  }\n}'),
   S('Mini Project',
     'range ने आणखी grid.\n\nदोन breakpoints.',
     '@media (600px <= width <= 900px) {\n  .grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}'),
  ],
  ['range काय?', 'antara कसे?', 'container कुठे?'],
  [{'q':'width >= ?','o':['सीमा','रंग','नाव'],'c':0},
   {'q':'<= मध्ये?','o':['श्रेणी','साधा','फॉन्ट'],'c':0},
   {'q':'(400 <= w <= 800)?','o':['दोन्ही','एक','नाही'],'c':0},
   {'q':'container range?','o':['cqi','vw','px'],'c':0}],
  {'prompt':'लहान त्प मोठा grid साधा.','starterCode':'@media (width >= 900px) { .grid { grid-template-columns: repeat(3, 1fr); } }','expectedOutput':'Renders a responsive grid via range queries'},
  'media range आधार?',
  ['css-viewport-units', 'css-border-effects', 'css-pseudo-classes'],
  'css-viewport-units', 'css-border-effects')

# =====================================================================
# 11. BORDER EFFECTS
# =====================================================================
L('css-border-effects',
  'Border Effects',
  'border effects — काठ नियम',
  'border-image, dotted आणि तोल.',
  [
   S('1. border मूलभूत',
     'border काठ सजवतो.\n\nstyle रुंदी रंग.\n\nsolid dashed.\n\nकोड सोबत असा.\n\nradius गुळगुळीत.\n\nसाधा प्रारंभ.',
     '.box {\n  border: 2px solid #0891b2;\n  border-radius: 10px;\n}'),
   S('2. border-image',
     'border-image प्रतिमा वापरते.\n\nslice भाग व्यवस्था.\n\nrepeat stretch.\n\nएकसारखी कापणी.\n\nआधार मर्यादित.\n\nप्रयोग परीक्षा.',
     '.frame {\n  border: 14px solid transparent;\n  border-image: url(rope.png) 14 round;\n}'),
   S('3. double आणि groove',
     'double दुहेरी काठ.\n\ngroove खड्डा.\n\noutset उंच.\n\nप्रत्येक स्वरूप.\n\nरंग नेमका.\n\noriginal दिसतो.',
     '.groove {\n  border: 6px groove #64748b;\n}'),
   S('4. radius रहस्य',
     'radius चार कोपरे.\n\nटक्के प्रमाण.\n\n50% वर्तुळ.\n\nएक रचना विषम.\n\nवेगवेगळे ठेका.\n\nगोल आकार सुंदर.',
     '.circle-avatar {\n  border-radius: 50%;\n  aspect-ratio: 1;\n}'),
   S('5. clip रेषा',
     'border सोबत clip.\n\ngradient काठ.\n\nbackground clip.\n\nलेख साठी सजावट.\n\nरंग सीमा.\n\nउपयुक्त प्रभाव.',
     '.grad {\n  border: 3px solid transparent;\n  background: linear-gradient(#fff, #fff) padding-box,\n              linear-gradient(90deg, #6366f1, #ec4899) border-box;\n}'),
   S('6. आधार',
     'border आधार सर्वत्र.\n\nborder-image नवीन.\n\ncalc रुंदी जपा.\n\nप्रत्येक घटक नियम.\n\nकोड साधा.\n\nआकृती तपासा.',
     '.outline {\n  outline: 2px solid #7c3aed;\n  outline-offset: 3px;\n}'),
   S('Mini Project',
     'टॅप gradient काठ.\n\nसाधा card.',
     '.card {\n  border: 2px solid;\n  border-image: linear-gradient(90deg, #6366f1, #ec4899) 1;\n}'),
  ],
  ['border काय?', 'image कसे?', 'gradient कुठे?'],
  [{'q':'border-style?','o':['solid','रंग','सावली'],'c':0},
   {'q':'border-image?','o':['प्रतिमा','फॉन्ट','एकक'],'c':0},
   {'q':'border-radius?','o':['कोपरा','रंग','नाव'],'c':0},
   {'q':'gradient काठ?','o':['पॅडिंग','मार्जिन','उंची'],'c':0}],
  {'prompt':'gradient outline card साधा.','starterCode':'.card { border: 2px solid transparent; border-image: linear-gradient(90deg, #6366f1, #ec4899) 1; }','expectedOutput':'Renders a card with gradient border'},
  'border उपयोग?',
  ['css-media-ranges', 'css-clip-path', 'css-gradient-deep'],
  'css-media-ranges', 'css-marathi-capstone5')

# =====================================================================
# 12. MARATHI CAPSTONE 5
# =====================================================================
L('css-marathi-capstone5',
  'Marathi Capstone 5',
  'Visual portal — अंतिम देखावा',
  'सर्व Level 5 तंत्रांचा संग्रह.',
  [
   S('1. ध्येय',
     'visual portal एक पेज.\n\nclip tag शीर्षक.\n\nग्रेडियंट ध्वज.\n\nकाउंटर विभाग.\n\nसर्व Level 5 भाग.\n\nअंतिम portal तयार.',
     '.tag {\n  clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);\n}'),
   S('2. पट्टे ध्वज',
     'हेडर पट्टे ग्रेडियंट.\n\nrepeating केळी.\n\ncolor stops नेमके.\n\nवेग नवा.\n\nसंग्रह रंगीत.\n\nसंतुलन जपा.',
     '.flag {\n  background: repeating-linear-gradient(45deg, #6366f1 0 14px, #a5b4fc 14px 28px);\n}'),
   S('3. काउंटर विभाग',
     'विभाग numbering counter.\n\n1.1 दोन स्तर.\n\nlist-style devanagari.\n\nमजकूर क्रम.\n\nअनुक्रम स्वयं.\n\nवाचन स्पष्ट.',
     'section {\n  counter-increment: chap;\n}\nsection h2::before {\n  content: counter(chap) ". "; \n}'),
   S('4. मजकूर आकार',
     'avatar circle outside.\n\nshape-margin अंतर.\n\nमजकूर वाहतो.\n\nclip deco कोपरे.\n\nसुंदर भिंत.\n\nresponsive तपासा.',
     '.avatar-w {\n  float: left;\n  shape-outside: circle(45%);\n  shape-margin: 12px;\n}'),
   S('5. थर आणि निवड',
     'scrollbar thin.\n\nstacking tooltip वर.\n\nnth odd रंग.\n\npseudo जोडे.\n\nथर व्यवस्थित.\n\nकेवळ keyboard.',
     ':where(.portal) li:nth-child(odd) {\n  background: #eef2ff;\n}\n.tooltip {\n  z-index: 20;\n}'),
   S('6. आकार आणि media',
     'एकक units dvh.\n\nrange श्रेणी.\n\nकंटेनर cqi.\n\n1000px grid.\n\nमोबाईल प्रयोग.\n\nअंतिम तपासणी.',
     '@media (width >= 900px) {\n  .portal-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}'),
   S('Mini Project',
     'portal पूर्ण करा.\n\nसर्व parts जोडा.',
     '.portal {\n  min-height: 100dvh;\n}'),
  ],
  ['ध्वज कसे?', 'काउंटर कुठे?', 'आकार काय?'],
  [{'q':'portal?','o':['एक पेज','दोन','तीन'],'c':0},
   {'q':'gradient पट्टा?','o':['repeating','color','image'],'c':0},
   {'q':'counter?','o':['increment','reset','जाड'],'c':0},
   {'q':'range media?','o':['>=','नाव','आवाज'],'c':0}],
  {'prompt':'visual portal पूर्ण.','starterCode':'.portal { min-height: 100dvh; }','expectedOutput':'Renders polished Marathi visual portal using Level 5 techniques'},
  'Level 5 नवीन काय?',
  ['css-border-effects', 'css-clip-path'],
  'css-border-effects', 'css-clip-path')

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
                    line += ", codeLanguage: \"%s\"" % CODE_LANG
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
            if isinstance(c, str):
                c = {'prompt': c, 'starterCode': '', 'expectedOutput': 'Renders Marathi lesson preview'}
            parts.append("    challenge: {")
            parts.append("      prompt: " + js_str(c["prompt"]) + ",")
            parts.append("      starterCode: " + code_block(c["starterCode"]) + ",")
            parts.append("      expectedOutput: " + js_str(c["expectedOutput"]) + ",")
            parts.append("    },")
        else:
            if k in ('slug', 'categoryId', 'title', 'marathiTitle', 'level', 'minutes', 'summary', 'prev', 'next'):
                parts.append("    " + k + ": " + js_str(v) + ",")
    parts.append("    levelLabel: CSS5_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 5 — Shape, Cut आणि Precision ===\n'
    header += 'export const CSS5_LABEL = "CSS · Level 5 — Shape, Cut आणि Precision";\n'
    header += '\nexport const cssLevel5: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css5_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css5_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css5_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level5.ts')
print("WROTE css-level5.ts, lines:", len(out.split(chr(10))))