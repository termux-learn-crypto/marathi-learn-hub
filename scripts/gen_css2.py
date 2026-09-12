# -*- coding: utf-8 -*-
# Generator for CSS Level 2 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level2.ts. Base content ~100-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

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
# 1. LAYOUT METHODS
# =====================================================================
L('css-layout-methods',
  'Layout Methods',
  'Layout — भाग व्यवस्था',
  'block, inline आणि inline-block वर्तन, float तंत्र आणि display पर्याय.',
  [
   S('1. display परिचय',
     'display हा layout चा पाया आहे.\n\nप्रत्येक घटक दृश्य कसा देतो ते येथून ठरते.\n\nblock ला पूर्ण रुंदी मिळते; next ओळ खाली सुरू होते.\n\ninline मजकुरातच राहतो — block नाही बनत.\n\nहे दोन प्रकार समजलेले महत्त्वाचे.\n\nव्यवस्था बिघडली की display तपासा.',
     'p {\n  display: block;\n}'),
   S('2. block वर्तन',
     'block घटक वर-खाली प्रवाहात बसतात.\n\nपूर्ण ओळ घेतात; शेजारी जागा सोडत नाहीत.\n\nwidth रुंदी दिली तरी ओळ स्वतंत्र राहते.\n\nmargin centered वापरता येते.\n\nशुद्ध ओळ रचनेसाठी हे स्थिर असते.\n\nप्रवाह आकड्याने तपासता येतो.',
     '.pane {\n  width: 80%;\n  margin: 0 auto;\n}'),
   S('3. inline वर्तन',
     'inline घटक मजकुराच्या ओळीत राहतात.\n\nspan, a, strong ही उदाहरणे.\n\nwidth height त्यांना परिणाम देत नाहीत.\n\nवाढवणे क्षैतिज स्थानावर अवलंबून असते.\n\nमोठे padding घट्ट करता येत नाही.\n\nवाच्यता वाढवण्यासाठी योग्य.',
     'a {\n  color: blue;\n}'),
   S('4. inline-block',
     'inline-block दोन्हींचे फायदे देते.\n\nमजकुराच्या ओळीत बसते.\n\nपण width height सन्मान करते.\n\npadding border सर्व सन्मान होते.\n\nchip, टॅग, button साठी हा असतो.\n\nसंरेखन बारीक करण्यासाठी सोपाये.',
     '.chip {\n  display: inline-block;\n  padding: 4px 8px;\n}'),
   S('5. float तंत्र',
     'float ला घटक बाजूला ठेवतो.\n\nलेखातील चित्र अशा जातात.\n\nमजकूर आरपार वाहतो — गोंधळ होऊ शकतो.\n\nजुना कोड वाचताना हे जाणून घ्या.\n\nclear वापरून प्रवाह परत येतो.\n\nआधुनिक flex आणि grid ने बदलले.',
     '.img-left {\n  float: left;\n}'),
   S('6. display पर्याय',
     'none घटक पूर्ण लपवतो.\n\nflex आणि grid आता मुख्य.\n\nदृश्य आणि प्रवाह वेगळे करता येतात.\n\nsubgrid सारखे नवे बदल नंतर.\n\ndisplay ने रचना तितकीच बदलते.\n\nसरावाने निवड पक्की होते.',
     '.none {\n  display: none;\n}'),
   S('Mini Project',
     'तीन प्रकारांचे पेज बनवा.\n\nblock विभाग. inline words. inline-block chips.\n\nfloat चित्र टाका.\n\nप्रत्येक भाग label सह स्पष्ट दिसेल.',
     '.tags .chip {\n  display: inline-block;\n}'),
  ],
  ['display म्हणजे काय?', 'inline-block कधी वापराल?', 'float कसा वागतो?'],
  [{'q':'block ओळ?' ,'o':['पूर्ण','अर्धी','नाही','केवळ'],'c':0},
   {'q':'inline रुंदी?','o':['मोजली जाते','मोजली नाही','दुप्पट','अर्धी'],'c':1},
   {'q':'float साठी?','o':['जुने तंत्र','नवे','नियम','रंग'],'c':0},
   {'q':'chip साठी?','o':['inline-block','block','none','float'],'c':0}],
  {'prompt':'दृश्य व्यवस्था नमुना','starterCode':'.chip { display: inline-block; }','expectedOutput':'Renders three-part layout demo'},
  ['float वर flex का?', 'inline-block limitations काय?'],
  ['css-structure-cascade', 'css-multi-column'],
  'css-marathi-capstone2', 'css-multi-column')

# =====================================================================
# 2. MULTI-COLUMN
# =====================================================================
L('css-multi-column',
  'Multi-Column',
  'Multi-column — स्तंभ मजकूर',
  'columns गुणधर्म, column-count, column-gap आणि break नियम.',
  [
   S('1. स्तंभ कल्पना',
     'मोठा मजकूर अनेक स्तंभांत बसवता येतो.\n\nवर्तमानपत्र शैली हा उत्तम उपयोग.\n\ncolumn-count संख्या ठरवतो.\n\nब्राउझर स्तंभ आपोआप समतोल करतो.\n\nवाचक ओळींना धक्का न देता पुढे जातो.\n\nसाधे वाक्य असे सुरू राहते.',
     '.article {\n  column-count: 2;\n}'),
   S('2. column-width',
     'column-width ला आदर्श रुंदी सांगता.\n\nब्राउझर प्रमाणे स्तंभ संख्या ठरवतो.\n\nलहान स्क्रीनवर एक स्तंभ होतो.\n\nस्वयं समायोजन हा मोठा फायदा.\n\nबाह्य गुणधर्म कमी कोड देतात.\n\nवापर दुरुस्त करता येतो.',
     '.article {\n  column-width: 220px;\n}'),
   S('3. column-gap',
     'column-gap ला स्तंभांमधील जागा देतो.\n\ndefault ची जागा थोडी असते.\n\nगुळगुळीत स्वच्छ दृश्यासाठी वाढवता येते.\n\ncolumn-rule रेघा मधे जोडतो.\n\nरेघेची जाडी रंग आणि शैली निवडता.\n\nरचना स्पष्ट होते.',
     '.article {\n  column-gap: 2rem;\n  column-rule: 1px solid #ddd;\n}'),
   S('4. break नियम',
     'break नियमांनी घटक कुठे फुटतो हे ठरते.\n\nस्पष्टपणे कुठे फुटणार नाही का विचारता.\n\nheading नंतर फुटू नये असे नियम देतात.\n\nतक्ता अर्धा फुटू नये हे नियम.\n\nवाचनीयता सुधारणारा ही अचूकता.\n\nसवय म्हणून जोडा.',
     'h2 {\n  break-after: avoid;\n}'),
   S('5. समतोल व्यवस्था',
     'ब्राउझर स्तंभांची उंची समतोल करतो.\n\ncolumn-fill मोडनुसार सर्व स्तंभ मिळतात.\n\nauto मध्ये ब्राउझर आपोआप सांभाळतो.\n\nपूर्ण उंची पक्की असल्यास column-fill उपयुक्त.\n\nमजकूर समान प्रमाण वाटतो.\n\nयोग्य वाटणी अंदाज वाढवते.',
     '.cols {\n  height: 300px;\n  column-fill: balance;\n}'),
   S('6. प्रवाह व्यवस्था',
     'मजकूर क्रम column order मध्ये राहतो.\n\nलेख सलग वाचता येतो.\n\nमध्यभागी फुटणे टाळा.\n\nटीपांमध्ये break तपासा.\n\nहे साचे मर्यादित प्रमाणात ठेवा.\n\nसरावाने आकडा उमगतो.',
     '.article p {\n  hyphens: auto;\n}'),
   S('Mini Project',
     'मराठी लेखाचे दोन-स्तंभ पेज बनवा.\n\ncolumn-width आधार. gap आणि rule.\n\nheading break नियम.\n\nमोबाइलवर एक स्तंभ स्वयं होईल.',
     '.article {\n  column-width: 240px;\n  column-rule: 1px solid #ccc;\n}'),
  ],
  ['स्तंभ संख्या कसे ठरते?', 'column-width फायदा?', 'break नियम काय रोखतात?'],
  [{'q':'column-count काय?', 'o':['संख्या','रंग','अंतर','फॉन्ट'],'c':0},
   {'q':'column-width?',   'o':['रुंदी आदर्श','जाडी','संगणक','क्रम'],'c':0},
   {'q':'column-rule?',    'o':['रेघा','मजकूर','चित्र','संरेखन'],'c':0},
   {'q':'break नियम?',     'o':['फूट थांबवणे','वेग','रंग','आकार'],'c':0}],
  {'prompt':'दोन-स्तंभ लेख','starterCode':'.article { column-width: 240px; }','expectedOutput':'Renders two-column article'},
  ['multicol कधी योग्य?','column-fill फरक?'],
  ['css-layout-methods', 'css-subgrid'],
  'css-layout-methods', 'css-subgrid')

# =====================================================================
# 3. SUBGRID
# =====================================================================
L('css-subgrid',
  'Subgrid',
  'Subgrid — आंतरिक ग्रिड',
  'grid शहरू वापर, subgrid alignment वारसा आणि nested रचना.',
  [
   S('1. nested ग्रिड',
     'grid मध्ये घटकाला स्वतःचा grid देतो.\n\nheader फक्त header तेवढाच नियंत्रित होतो.\n\nदोन ग्रिड एकत्र चालतात.\n\nसंरेखन मात्र स्वतंत्र असतात.\n\nही स्वतंत्रता कधी बाधक ठरते.\n\nउपाय subscript embedded मध्ये.',
     '.parent {\n  display: grid;\n}'),
   S('2. subgrid कल्पना',
     'subgrid ला parent च्या ओळी वारसा मिळतात.\n\ndisplay: grid राहतो.\n\ngrid-template नाही द्यायचा.\n\nअजून घटक मुख्य चौकटीत बसतात.\n\nट्रॅक आकार आपोआप जुळतात.\n\nशुद्ध संरेखन ही खास अशी ताकद.',
     '.child {\n  display: grid;\n  grid-template-columns: subgrid;\n}'),
   S('3. ओळ-स्तंभ अभाव',
     'subgrid फक्त एका नात्यावर चालतो.\n\ncolumn subgrid columns वारसा देतो.\n\nrow subgrid rows वारसा देतो.\n\nदोन्ही हवे तर subgrid सरळ लिहा.\n\nसर्व घटक एकत्र ओळीत होतात.\n\nगोंधळ नसणारी रचना मिळते.',
     '.kid {\n  grid-template-rows: subgrid;\n}'),
   S('4. gap वारसा',
     'subgrid ला gap सन्मान करता येतो.\n\ndefault मध्ये विरासतीचे gap जुळते.\n\nपण नवीन gap दिला तर बदलतो.\n\nअचूक माहिती तपासणीसाठी साहाय्य होते.\n\nब्राउझर सुसंगतता आता चांगली.\n\nसलग block वाचताना विराम नाही.',
     '.wrap .card {\n  gap: 1rem;\n}'),
   S('5. वास्तविक उपयोग',
     'कार्डांची समान उंची subgrid देतो.\n\nखालील घटकांना सामील पंक्ती मिळते.\n\nशीर्षक आणि foot समान ओळीवर.\n\nतीन ते चार घटकांची रचना सोपी.\n\nखुला आणि संरेखित दृश्य मिळते.\n\nग्रिडच्या सगळ्या ताकदी जुळतात.',
     '.cards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.cards article {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 2;\n}'),
   S('6. limitation',
     'subgrid कोणत्याही इंटरमीडिएटला नाही.\n\nफक्त parent थेट नातेवाइक असेल तर.\n\nअसं नसल्यास साधा grid वापरा.\n\nअनेक थर आले तरी विचार स्पष्ट.\n\nकाम ठीक झाल्यावर तपासणी करा.\n\nसरावाने नियम पक्के होतात.',
     '.deep .inner {\n  display: grid;\n  grid-template-columns: subgrid;\n}'),
   S('Mini Project',
     'तीन कार्ड संरेखित ग्रिड बनवा.\n\nमुख्य grid तीन स्तंभ.\n\nप्रत्येक कार्ड subgrid.\n\nशीर्षक आणि foot समान ठिकाणी.',
     '.cards article {\n  display: grid;\n  grid-template-rows: subgrid;\n  gap: 0.5rem;\n}'),
  ],
  ['subgrid कसा जाहिर करतो?', 'कधी वापरता येत नाही?', 'subgrid फायदा?'],
  [{'q':'subgrid वारसा?','o':['ओळी-स्तंभ','रंग','फॉन्ट','मार्जिन'],'c':0},
   {'q':'स्तंभ subgrid?','o':['grid-template-columns','width','display'],'c':0},
   {'q':'जुळणारा आकार?','o':['ट्रॅक','चित्र','अक्षर','मूल्य'],'c':0},
   {'q':'थेट parent?','o':['आवश्यक','नाही','कधीही','वारंवार'],'c':0}],
  {'prompt':'कार्ड संरेखित ग्रिड','starterCode':'article { grid-template-rows: subgrid; }','expectedOutput':'Renders aligned three-card grid'},
  ['subgrid आधार किती?','nested grid फरक?'],
  ['css-multi-column', 'css-transform-3d'],
  'css-multi-column', 'css-transform-3d')

# =====================================================================
# 4. TRANSFORM & 3D
# =====================================================================
L('css-transform-3d',
  'Transform & 3D',
  'Transform — हालचाल आणि खोली',
  'translate, rotate, scale, transform-origin आणि perspective खोली.',
  [
   S('1. transform कल्पना',
     'transform घटकाची दृश्य स्थिती बदलतो.\n\nहालचाल प्रवाहाला त्रास देत नाही.\n\nअनुवाद, परिवल, प्रमाण तीन मुख्य.\n\nमूल्ये मिळून एकाच ओळीत.\n\nअनुक्रम महत्त्वाचा असतो.\n\nसरावाने अर्थ स्पष्ट होतो.',
     '.box {\n  transform: translate(10px, 10px);\n}'),
   S('2. translate',
     'translate घटक अंशतः सरकतो.\n\nX योग्य क्षैतिज, Y उभ्या दिशा.\n\nटक्के स्वतःच्या आकारावर ठरतात.\n\nhover वर हलके सरकणे सुंदर.\n\nप्रवाह स्थिर; दृश्य मात्र बदलते.\n\nव्ह्यूअरला हालचाल दिसते.',
     '.up {\n  translate: 0 -8px;\n}'),
   S('3. rotate',
     'rotate घटक फिरवतो.\n\ndeg मध्ये कोन लिहिला जातो.\n\n45deg हा घड्याळाचा आठवा भाग.\n\ntransform-origin मध्यबिंदू ठरवतो.\n\nकोपर्यावरून फिरवणे शक्य आहे.\n\nicon आणि सूक्ष्म खुणांसाठी योग्य.',
     '.rot {\n  rotate: 45deg;\n}'),
   S('4. scale',
     'scale घटकाचा आकार बदलतो.\n\n1.5 अर्ध्याने वाढवते.\n\n0.8 आकुंचन देतो.\n\nटक्के आकाराशी संबंधीत.\n\nhover प्रभावासाठी सामान्य.\n\nवापराची जाणीव उत्तम दृश्य देते.',
     '.grow:hover {\n  scale: 1.1;\n}'),
   S('5. perspective 3D',
     'perspective मुळेच 3D जाणवते.\n\nperspective मूल्य दृश्य अंतर ठरवते.\n\nमूल्य मोठे तर खोली कमी.\n\nrotateY करताना खोली जाणवते.\n\nगुरुत्व मध्ये स्थिती लागू राहते.\n\nखोली सहज जाणवते.',
     '.scene {\n  perspective: 600px;\n}\n.card:hover {\n  rotate: 0 1 0 20deg;\n}'),
   S('6. transform-origin',
     'transform-origin कोणत्या बिंदूवरून.\n\ntop left, center bottom ही मूल्ये.\n\nrotate हालचाल त्यानुसार बदलते.\n\nस्वतंत्र हालचालीसाठी उपयुक्त.\n\ndefault मध्यभागी सरळ असतो.\n\nअचूक दृश्यासाठी बदलता.',
     '.door {\n  transform-origin: left center;\n  rotate: 0 0 1 -90deg;\n}'),
   S('Mini Project',
     'transform शोकेस पेज बनवा.\n\ntranslate कार्ड. rotate बॅज.\n\nscale hover. perspective 3D कार्ड.\n\nप्रत्येक प्रभाव स्पष्ट खुणेसह.',
     '.flip {\n  perspective: 600px;\n}\n.flip > div {\n  rotate: 0 1 0 180deg;\n}'),
  ],
  ['transform प्रवाहाला त्रास देता?', '3D कशामुळे?', 'origin काय बदलतो?'],
  [{'q':'translate काय?','o':['सरकवणे','फिरवणे','लपवणे','रंग'],'c':0},
   {'q':'rotate एकक?','o':['deg','px','s','em'],'c':0},
   {'q':'scale 1.2?','o':['वाढवते','कमी','लपवते','सारखे'],'c':0},
   {'q':'3D प्रेरणीय?','o':['perspective','margin','color'],'c':0}],
  {'prompt':'3D कार्ड हालचाल','starterCode':'.flip > div { rotate: 0 1 0 180deg; }','expectedOutput':'Renders 3D flip animation'},
  ['transform अनुक्रम का?','perspective कसा जागतो?'],
  ['css-subgrid', 'css-pseudo-elements'],
  'css-subgrid', 'css-pseudo-elements')

# =====================================================================
# 5. PSEUDO ELEMENTS
# =====================================================================
L('css-pseudo-elements',
  'Pseudo Elements',
  'Pseudo — सहाय्यक भाग',
  '::before, ::after, content गुण येणाऱ्या decorative भागांची रचना.',
  [
   S('1. pseudo परिचय',
     'pseudo-element घटकाचा काल्पनिक भाग देतो.\n\n::before मध्ये आधी भाग जोडतो.\n\n::after मधे नंतरचा भाग.\n\nडॉक्युमेंट मध्ये नवीन टॅग नाही.\n\nशुद्ध CSS ने सजावट शक्य होते.\n\nकोड स्वच्छ आणि कमी राहतो.',
     '.note::before {\n  content: "!";\n}'),
   S('2. content गुण',
     'content हा pseudo साठी आवश्यक.\n\nरिक्त असेल तर काही दिसत नाही.\n\nमजकूर, तसेच counters देतो.\n\nचिन्ह शब्दांचा वापर करता.\n\nurl ने प्रतिमा सहज.\n\nसजावट अशी मर्यादित असावी.',
     '.tag::before {\n  content: "✓ ";\n}'),
   S('3. ::marker',
     '::marker ला सूची चिन्ह सुधारता.\n\nlist-style च्या जागी ही शैली.\n\nरंग आकार बदलू शकतात.\n\ndisplay reading नुसार बदलता.\n\nसूची निट असे दिसते.\n\nमराठी मजकुरासाठी सोपे आहे.',
     'li::marker {\n  color: teal;\n}'),
   S('4. selection',
     '::selection ला user निवडलेला मजकूर दिसतो.\n\nbackground आणि color शैली करता.\n\nब्रँड रंगांशी जुळवता.\n\nउत्तम वापर पडद्यावर स्पष्ट राहतो.\n\nकळलेली निवड स्पष्ट होते.\n\nवाचनीयता कायम ठेवा.',
     '::selection {\n  background: gold;\n}'),
   S('5. counter विचार',
     'counter मध्ये क्रमाक्रमाने अंक मोजतात.\n\ncounter-reset सुरुवात करतो.\n\ncounter-increment प्रत्येक वेळी वाढतो.\n\ncontent मध्ये counter() बोलावतो.\n\nहेडिंगची सलग संख्या मिळते.\n\nपुस्तकासारखी अशी व्यवस्था.',
     'body { counter-reset: sec; }\nh2::before {\n  counter-increment: sec;\n  content: "भाग " counter(sec) ": ";\n}'),
   S('6. accessibility सूचना',
     'decorative pseudo ला वाचनाची गरज नाही.\n\nमोठा मजकूर content मध्ये देताना तपासा.\n\nscreen reader ते वाचू शकेल का पहा.\n\nसजावट aria-hidden शैलीने ठेवता.\n\nकल्पकता आणि स्पष्टता सोबत.\n\nप्रवेश्यता नंतरही शुद्ध राहते.',
     '.icon::before {\n  content: "★";\n  speak: never;\n}'),
   S('Mini Project',
     'सूची शैली आणि marker सराव.\n\n::before खुणा. ::marker रंग.\n\ncounter headings.\n\nसजावट भाग नियंत्रित दाखवा.',
     'ol { list-style: none; }\nol li::before {\n  content: counter(item) ". ";\n}'),
  ],
  ['pseudo-element काय?','content आवश्यक का?','counter कसे वाढतात?'],
  [{'q':'pseudo मार्क?','o':['::',':','#','.'],'c':0},
   {'q':'content साठी?','o':['आवश्यक','नाही','switch'],'c':0},
   {'q':'::marker काय?','o':['सूची चिन्ह','रंग','फॉन्ट'],'c':0},
   {'q':'counter increment?','o':['वाढवते','कमी','लपवते'],'c':0}],
  {'prompt':'सजलेली सूची आणि counters','starterCode':'li::before { content: "• "; }','expectedOutput':'Renders styled list with counters'},
  ['::before accessibil', '::after कोणते?'],
  ['css-transform-3d', 'css-forms-styling'],
  'css-transform-3d', 'css-forms-styling')

# =====================================================================
# 6. FORMS STYLING
# =====================================================================
L('css-forms-styling',
  'Forms Styling',
  'Forms — दाखल फॉर्म',
  'input, select, checkbox रंग देणे आणि validation दृश्य अवस्था.',
  [
   S('1. फॉर्म रचना',
     'फॉर्ममध्ये स्थिर रचना करता येते.\n\nfont आणि रंग पहिल्यांदा जुळवा.\n\ninput नीट आकार आणि padding वापरा.\n\nlabel अर्थ सांगणारा असतो.\n\nसंरेखन सुसंगत ठेवा.\n\nवापरकर्त्याला मार्ग दिसतो.',
     'label {\n  display: block;\n  margin: 0.3rem 0;\n}'),
   S('2. text input',
     'text input रुंदी आणि आकार देतो.\n\nborder हलक्या रंगाचा निवडतात.\n\ntransition focus साठी सुखद.\n\n:focus मध्ये outline स्पष्ट करा.\n\nplaceholder टीप असावी.\n\nमोठ्या फॉर्मला हे सातत्य देते.',
     'input[type="text"] {\n  padding: 0.5rem;\n  border: 1px solid #ccc;\n}'),
   S('3. focus state',
     ':focus कुठे आहे हे समजवते.\n\nकीबोर्ड वापरकर्त्यास आवश्यक.\n\noutline संपूर्ण दृश्य ठेवावी.\n\nborder रंगाने वाढते रंगरूप.\n\naccent-color checkbox वाढवते.\n\nप्रवेश्यता येथे सर्वांत मोठी.',
     'input:focus {\n  outline: 2px solid #2563eb;\n}'),
   S('4. checkbox radio',
     'checkbox दिसणे मर्यादा सहज येते.\n\naccent-color रंग एका ओळीत देतो.\n\nरंग आणि आकार निश्चित होतो.\n\nजुने ब्राउझर चिन्ह स्वतः देतात.\n\ncustom control शक्य आहेदेखील.\n\nसाधेपणा राखणे बरे.',
     ':checked {\n  accent-color: teal;\n}'),
   S('5. status शैली',
     ':invalid रंगाने चुक खास करतो.\n\n:valid मध्ये नीट दिसणे मिळते.\n\ndisabled कण गडद करतो.\n\nrequired तारकित खूण शक्य.\n\nत्रुटी योग्य माहितीने सांगतात.\n\nhelp text जास्त स्पष्ट करतो.',
     'input:invalid {\n  border-color: #b91c1c;\n}'),
   S('6. सुसंगतता',
     'सर्व ब्राउझर एका प्रमाणे नसतात.\n\nappearance: none ला सेटिंग तोडते.\n\nकाही स्वतः दृश्य राहते.\n\nसंगतता राखून व्यवस्था टिकते.\n\nसुधारणा मर्यादित ठेवा.\n\nवापरादरम्यान तपासत राहा.',
     'select {\n  appearance: auto;\n}'),
   S('Mini Project',
     'मराठी नोंदणी फॉर्म तयार करा.\n\nनाव, ईमेल, चेकबॉक्स.\n\nfocus outline. invalid रंग.\n\nसर्व नियंत्रण दृश्य सुसंगत.',
     'input:focus {\n  outline: 2px solid #0f766e;\n}\ninput:invalid {\n  border-color: #b91c1c;\n}'),
  ],
  [':focus का द्यावा?','accent-color काय करतो?','invalid कधी दिसते?'],
  [{'q':':focus?','o':['निवड दृश्य','रंग','प्रवेश'],'c':0},
   {'q':'accent-color?','o':['checkbox रंग','border','मार्जिन'],'c':0},
   {'q':':invalid?','o':['चुक दृश्य','वेग','layout'],'c':0},
   {'q':'appearance none?','o':['शैली काढते','रंग','अंतर'],'c':0}],
  {'prompt':'मराठी फॉर्म शैली','starterCode':'input:focus { outline: 2px solid teal; }','expectedOutput':'Renders styled registration form'},
  ['native control फायदा?','focus outline महत्त्व?'],
  ['css-pseudo-elements', 'css-animation-advanced'],
  'css-pseudo-elements', 'css-animation-advanced')

# =====================================================================
# 7. ANIMATION ADVANCED
# =====================================================================
L('css-animation-advanced',
  'Advanced Animation',
  'Animation — उन्नत हालचाल',
  '@keyframes टप्पे, animation-timing, steps आणि मिश्रित हालचाल.',
  [
   S('1. animation नियम',
     'animation नाव आणि कालावधी घेते.\n\n@keyframes टप्पे ठरवतो.\n\ninfinite पुन्हा चालवतो.\n\nalternate उलटा पण शिळा.\n\nअनेक नियम एकत्र सुरू होतात.\n\nहालचाल सजीव बनते.',
     '.ball {\n  animation: bounce 1s infinite;\n}'),
   S('2. timing वक्र',
     'timing हालचालीचा वेग ठरवतो.\n\nease मधे सुरुवात शांत.\n\nlinear एकसमान राहतो.\n\ncubic-bezier ने स्वतःचा वक्र.\n\nटप्पे जुळवून भाव देतो.\n\nflow पर्यायांना तपासा.',
     '.move {\n  animation-timing-function: ease-out;\n}'),
   S('3. steps नियम',
     'steps कणी अचानक बदल देतो.\n\n9 steps मधे frame उडी मारतो.\n\nटिक-टॅकसारखी हालचाल होते.\n\ncountdown आणि meter साठी.\n\nstart end पर्याय निवडता.\n\nवेळेत काप एकदम होतो.',
     '.dial {\n  animation: tick 1s steps(4) infinite;\n}'),
   S('4. keyframes टक्केवारी',
     'keyframes मध्ये 50% टप्पा.\n\n0% ते 100% पर्यंत हालचाल.\n\nमधला टप्पा पहिल्यांदा सोडून.\n\nतीन टप्पे अधिक control देतात.\n\nआधी वर नंतर खाली दिशा.\n\nमिश्रित पाऊल सोपे होते.',
     '@keyframes wave {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-12px); }\n}'),
   S('5. मिश्रित properties',
     'एकच animation अनेक गुणधर्म हलवतो.\n\ntransform आणि opacity जुळवतात.\n\nfilter blur ला गुळगुळीत करतो.\n\nजड गुण टाळा; हलके निवडा.\n\nmedia query मधे कमी करता.\n\nप्रभाव सुरळीत राहतो.',
     '.fade {\n  animation: fade 0.6s ease forwards;\n}\n@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'),
   S('6. हालचाल कमी',
     'हालचाल कमी करणे महत्त्वाचे.\n\nprefers-reduced-motion ला तपासा.\n\nमोठी हालचाल थांबवा.\n\nfade किंवा static सोडा.\n\nसगळे वापरकर्ते सोबत.\n\nनियम म्हणून ही सवय ठेवा.',
     '@media (prefers-reduced-motion: reduce) {\n  .ball {\n    animation: none;\n  }\n}'),
   S('Mini Project',
     'वेब पानावर हलते chrome.\n\nbounce बॉल. wave icon.\n\nsteps dial. reduced नियम.\n\nअनुभव समृद्ध आणि सुरक्षित.',
     '@keyframes bounce {\n  0%, 100% { translate: 0 0; }\n  50% { translate: 0 -30px; }\n}'),
  ],
  ['keyframes काय?','timing कशासाठी?','reduced motion का?'],
  [{'q':'animation नाव?','o':['@keyframes','transition','display'],'c':0},
   {'q':'steps देते?','o':['पायरी हालचाल','रंग','अक्षर'],'c':0},
   {'q':'alternate?','o':['उलट चाल','वेग','नाव'],'c':0},
   {'q':'reduced motion?','o':['कमी हालचाल','जास्त','रंग'],'c':0}],
  {'prompt':'गुळगुळीत हालचाल नमुना','starterCode':'@keyframes bounce { 50% { translate: 0 -30px; } }','expectedOutput':'Renders alive animation demo'},
  ['transform why?','steps कधी वापराल?'],
  ['css-forms-styling', 'css-containment'],
  'css-forms-styling', 'css-containment')

# =====================================================================
# 8. CONTAINMENT
# =====================================================================
L('css-containment',
  'Containment',
  'Containment — स्वतंत्र क्षेत्र',
  'contain, isolation आणि stacking context ची स्थिरता.',
  [
   S('1. contain कल्पना',
     'contain ला भाग स्वतंत्र करतो.\n\nप्रवाहांना परिणाम मर्यादित राहतो.\n\nlayout मध्ये पुनर्गणना कमी.\n\nकामगिरी पेजवर सुधारते.\n\nमोठ्या रचनांमध्ये अमूल्य.\n\nतपासून वापरा — आधार वाढला.',
     '.widget {\n  contain: layout;\n}'),
   S('2. paint containment',
     'contain: paint दृश्य सीमा धारण करतो.\n\nबाहेर गेलेला भाग दिसत नाही.\n\nमोठे भाग वेगळे राहतात.\n\nस्वतःची फ्रेम मिळते.\n\nlazy rendering हा उपयोग.\n\nसाफ करताना हे सोयीचे.',
     '.panel {\n  contain: paint;\n}'),
   S('3. size containment',
     'size मध्ये ला आकार प्रवाहांपासून.\n\nसामान्य रचनेला जागा सोडवता येते.\n\nआधी मोजून जागा पडेल.\n\nकंटेंट चालेल तरी जागा स्थिर.\n\nएकूण रचना पुढे सरकत नाही.\n\nहे thumbnail साठी योग्य.',
     '.thumb {\n  contain: size;\n}'),
   S('4. isolation',
     'isolation स्वतःची stacking मिळते.\n\nz-index चा विवाद सोडवणे सोपे.\n\nआतला थर बाहेर नाही.\n\nmix-blend-mode सुरक्षित राहतो.\n\nथोडा गुणधर्म, मोठा फायदा.\n\nओव्हरलॅप दुरुस्त राहतो.',
     '.layer {\n  isolation: isolate;\n}'),
   S('5. stacking context',
     'stacking मध्ये क्रम ठरतो.\n\nposition आणि opacity बनवतात.\n\ntransform नेहमी स्वतःचा make करतो.\n\nz-index मोठा सर्वात वर.\n\nनकारणूक सोडवणे संदर्भाने.\n\nसंदर्भ रचना स्पष्ट ठेवतात.',
     '.card {\n  transform: translateZ(0);\n}'),
   S('6. कामगिरी सूचना',
     'मोठे वेब पेज तर्कशुद्ध करा.\n\nwidget वेगळे तपासता येतात.\n\nसमस्या क्षेत्र शोधणे सोपे.\n\nनिरर्थक reflow कमी होते.\n\nबाहेरील घटकांवर परिणाम नाही.\n\nसरावाने दृश्य आणि वेग दोन्ही.',
     '.spinner {\n  contain: strict;\n}'),
   S('Mini Project',
     'भाग विभक्त डॅशबोर्ड बनवा.\n\npaint container widget.\n\nsize thumbnail.\n\nisolation ओव्हरलॅप नियंत्रित.',
     '.widget {\n  contain: paint;\n  isolation: isolate;\n}'),
  ],
  ['contain काय करतो?','isolation फायदा?','stacking कधी बनते?'],
  [{'q':'contain: paint?','o':['दृश्य सीमा','रंग','वेग'],'c':0},
   {'q':'isolation: isolate?','o':['नवीन context','अंतर','आकार'],'c':0},
   {'q':'transform context?','o':['बनवतो','काढतो','रंग'],'c':0},
   {'q':'size contain?','o':['जागा स्थिर','भर','अक्षर'],'c':0}],
  {'prompt':'विभक्त विजेट आराखडा','starterCode':'.widget { contain: paint; }','expectedOutput':'Renders contained dashboard widgets'},
  ['contain जोखीम?','isolation ब्लेंड?'],
  ['css-animation-advanced', 'css-cascade-layers'],
  'css-animation-advanced', 'css-cascade-layers')

# =====================================================================
# 9. CASCADE LAYERS
# =====================================================================
L('css-cascade-layers',
  'Cascade Layers',
  'Cascade layers — थर क्रम',
  '@layer क्रम, @supports आणि @container स्थिरता हे दृश्य.',
  [
   S('1. @layer कल्पना',
     '@layer मध्ये नियम समूह देतो.\n\nनंतरचा थर वरच्या ओळीला जिंकतो.\n\nथरांचा क्रमच निर्णायक असतो.\n\nआवश्यकतेनुसार थर जोडता.\n\nमोठ्या प्रोजेक्टमध्ये व्यवस्था.\n\nविरोध कमी होतो.',
     '@layer base, theme, extra;'),
   S('2. थर रचना',
     'पहिल्यांदा नावे ठरवा.\n\nमग स्तरवार नियम लिहा.\n\nbase मूलभूत ठरतो.\n\nextra ओव्हरराइड देते.\n\nनाव शब्दांश सजग ठेवा.\n\nक्रम चुकू नये म्हणून तपासा.',
     '@layer theme {\n  .card {\n    color: #111;\n  }\n}'),
   S('3. वारसा क्रम',
     'समान नियम उत्तरोत्तर वर जिंकतो.\n\nएक्स्ट्रा base वर मात करतो.\n\nimport जुळवून थरांमध्ये ठेवता.\n\nजुने कोड लागेल तेव्हा तरतूद.\n\nपूर्वीचे कोड सुरक्षित राहतात.\n\nगती आणि नियंत्रण दोन्ही.',
     '@import url(base.css) layer(libs);'),
   S('4. @supports',
     '@supports हवे गुणधर्म तपासतो.\n\nउपलब्ध असेल तरच नियम लागतो.\n\nनवीन तंत्र आरक्षित ठेवता.\n\nजुना नियम base मध्ये राहतो.\n\nमजबूत सुधारणा करता.\n\nसुरक्षित प्रगती ही अशीच.',
     '@supports (grid-template-columns: subgrid) {\n  .wrap {\n    grid-template-columns: subgrid;\n  }\n}'),
   S('5. आधार जोखणी',
     'वेगळ्या फाइलमध्ये स्थिरता टिकते.\n\nमोठी फाइल क्रमाने लोड होते.\n\nतपासणी अनेक ब्राउझरवर करा.\n\nयेथे कोणतेही नवे error नको.\n\nथरांचा हा विचार अचूक.\n\nविस्तार आता नियंत्रित.',
     '@layer extra {\n  .theme-tweak {\n    filter: brightness(1.02);\n  }\n}'),
   S('6. @container?',
     '@container ला जोडणारा वेगळा.\n\nस्वतःची विचारणा करता.\n\nआकार बदल बरोबर शैली.\n\nहे पुढील धड्यात सविस्तर.\n\nआत्ता नावाने ओळख.\n\nसंकल्पना वाढवत राहा.',
     '@container (min-width: 400px) {\n  .mid { display: grid; }\n}'),
   S('Mini Project',
     'थरांची रचना सराव करा.\n\nbase, theme, extra थर.\n\n@supports subgrid check.\n\nजुने आणि नवे नियम सोबत.',
     '@layer base, theme, extra;\n@supports (grid-template-columns: subgrid) {\n  .wrap { column-gap: 1rem; }\n}'),
  ],
  ['@layer काय करतो?','नंतरचा थर?','@supports कधी?'],
  [{'q':'@layer order?','o':['क्रम निर्णय','रंग','मार्जिन'],'c':0},
   {'q':'@supports?','o':['तपासतो','रंग','लपवतो'],'c':0},
   {'q':'उत्तरोत्तर थर?','o':['जिंकतो','हार','equal'],'c':0},
   {'q':'@container?','o':['कंटेनर विचारणा','नाव','फॉन्ट'],'c':0}],
  {'prompt':'थरवार सादरीकरण','starterCode':'@layer base, theme, extra;','expectedOutput':'Renders layered card demo'},
  ['@layer order का?','@supports फायदा?'],
  ['css-containment', 'css-container-queries'],
  'css-containment', 'css-container-queries')

# =====================================================================
# 10. CONTAINER QUERIES
# =====================================================================
L('css-container-queries',
  'Container Queries',
  'Container queries — आकार प्रतिसाद',
  '@container नियम, container-type आणि cqw एककांचे प्रतिसाद.',
  [
   S('1. query कल्पना',
     'container ला प्रश्न विचारता.\n\nआतला घटक container चा आधार देतो.\n\nमोबाइलचा सरळ media नाही.\n\nसमाविष्ट आकारच प्रतिसाद.\n\nहे का? पुनरुपयोग सोपा होतो.\n\nहे आधुनिक तंत्र आहे.',
     '.widget {\n  container-type: inline-size;\n}'),
   S('2. container-type',
     'container-type दिशा ठरवतो.\n\ninline-size सर्वात सोपाई.\n\nblock-size दुर्मिळ असतो.\n\nsize दोन्ही प्रकारांसाठी.\n\nअचूक नियम सीमाबद्ध इच्छित.\n\nस्वतःचा आकार लॉक करतो.',
     '.info {\n  container-type: inline-size;\n}'),
   S('3. @container नियम',
     '@container माप तपासून शैली.\n\nmin-width वाढल्यावर नियम.\n\nमोठ्या जागेत दोन स्तंभ.\n\nछोट्या जागेत एकच.\n\nहीच योग्य प्रतिसाद हालचाल.\n\nगुळगुळीत प्रतिसाद मिळतो.',
     '@container (min-width: 480px) {\n  .info { display: grid; }\n}'),
   S('4. cqw एकक',
     'cqw म्हणजे container च्या रुंदीचे टक्के.\n\n10cqw म्हणजे container चा दशांश.\n\nफॉन्ट आकार नेमका ठरतो.\n\nसापेक्ष जागा स्वयं मिळते.\n\nही रचना वेगळ्या ठिकाणी करता.\n\nपुनरुपयोग रचना मिळते.',
     '.label {\n  font-size: 4cqw;\n}'),
   S('5. नामकरण',
     'container-name नाव देते.\n\nअनेक container असल्यास वेगळे ओळखता.\n\nस्पष्ट निवड शैली नियंत्रित करते.\n\nगोंधळ टाळणे सोपे होते.\n\nमोठ्या रचनेत ही जोखीम.\n\nनाव अर्थपूर्ण ठेवा.',
     '.sidebar {\n  container-type: inline-size;\n  container-name: side;\n}\n@container side (min-width: 300px) { }'),
   S('6. उपयोग व वाts',
     'कार्ड मध्ये पुन:उपयोग करता.\n\nडॅशबोर्ड विजेट प्रतिसादात्मक.\n\nअनेक ठिकाणी समान रचना.\n\nperformance ची तपासणी नेहमी करा.\n\nmedia query अजूनही आवश्यक.\n\nसर्व तंत्र एकत्र चालतात.',
     '.card {\n  container-type: inline-size;\n}\n@container (min-width: 400px) {\n  .card { padding: 1.5rem; }\n}'),
   S('Mini Project',
     'पुनरुपयोग कार्ड बनवा.\n\ncontainer-type सुरुवात.\n\n@container दोन अवस्था.\n\ncwq फॉन्ट उदाहरण.',
     '.article {\n  container: side / inline-size;\n}\n@container side (min-width: 420px) {\n  .article { columns: 2; }\n}'),
  ],
  ['container query म्हणजे?','container-type काय?','cqw एकक काय?'],
  [{'q':'container-type?','o':['inline-size','color','margin'],'c':0},
   {'q':'@container तपासतो?','o':['आकार','रंग','file'],'c':0},
   {'q':'cqw सापेक्ष?','o':['container','view','font'],'c':0},
   {'q':'container-name?','o':['वेगळे नाव','चित्र','आकडा'],'c':0}],
  {'prompt':'प्रतिसादी कार्ड','starterCode':'@container (min-width: 420px) { .card { padding: 1.5rem; } }','expectedOutput':'Renders container-responsive card'},
  ['container vs media?','container-type size आधार?'],
  ['css-cascade-layers', 'css-masking-filters'],
  'css-cascade-layers', 'css-masking-filters')

# =====================================================================
# 11. MASKING & FILTERS
# =====================================================================
L('css-masking-filters',
  'Masking & Filters',
  'Masking — दृश्य सजावट',
  'filter, clip-path, mask आणि blend modes ची चकतिन.',
  [
   S('1. filter नियम',
     'filter ला दृश्य प्रभाव देऊन जातो.\n\nblur, brightness, contrast मुख्य.\n\nhover वर सौम्य बदल शक्य.\n\nमजकूर पारदर्शक नको.\n\nफक्त प्रकाश बदलला जातो.\n\nतपासून कमी वापरा.',
     'img {\n  filter: brightness(0.9);\n}'),
   S('2. blur दृश्य',
     'blur ला भाग धुंधळा करतो.\n\nपार्श्वभूमी झाकणे सोपे.\n\nमोठे blur जड असतो.\n\nमुख्य भागावर जास्त blur नको.\n\nमोठी प्रतिमा प्रक्रिया थांबवा.\n\nहलके blur ने परिणाम चांगला.',
     '.modal-back {\n  backdrop-filter: blur(6px);\n}'),
   S('3. clip-path',
     'clip-path आकारात कापणे देतो.\n\ncircle, polygon याप्रमाणे.\n\nचौकोन गोल करता.\n\nडेकोरेटिव्ह आकार तयार.\n\nकाम करते तरी मजकूर सुरक्षित.\n\nआता बरीच प्रगणना शक्य.',
     '.avatar {\n  clip-path: circle(50%);\n}'),
   S('4. mask अभ्यास',
     'mask प्रतिमेचा ग्रेडियंट वापरतो.\n\nपारदर्शक जागा लपवतो.\n\nअर्धा भाग नाहीसा.\n\nगुळगुळीत फिकट दृश्य.\n\nफंक्शनला मर्यादा.\n\nसरावानेच अर्थ स्पष्ट.',
     '.flag {\n  mask-image: linear-gradient(#000, transparent);\n}'),
   S('5. blend mode',
     'blend मध्ये थर एकत्र सरळ.\n\nmultiply, screen, overlay.\n\nचित्र आणि रंग मिसळतात.\n\nसंगणन वेग प्रभाव.\n\nमर्यादा ठेवून सांभाळा.\n\nएकदम प्रभावी दृश्य मिळते.',
     '.hero {\n  mix-blend-mode: multiply;\n}'),
   S('6. सुरक्षित सराव',
     'सजावट मर्यादित प्रमाणात.\n\ncontrast आणि वाचनीयता ठेवणे.\n\nreduced motion ला comply.\n\nसजावट content नको झाकू.\n\nजड प्रभाव निरीक्षणातही चालतात.\n\nप्राथमिक ते व्यावहारिक वाढ.',
     '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n  }\n}'),
   S('Mini Project',
     'सजावट गॅलरी बनवा.\n\nfilter ग्रेडिंग. circular avatar.\n\nblend अभ्यास.\n\nसर्व सजावट अल्प प्रमाणात.',
     'img {\n  filter: saturate(1.1);\n  clip-path: circle(50%);\n}'),
  ],
  ['filter काय करतो?','clip-path म्हणजे?','blend mode कधी?'],
  [{'q':'filter गुणधर्म?','o':['blur brightness','margin','width'],'c':0},
   {'q':'clip-path?','o':['आकार काप','रंग','शब्द'],'c':0},
   {'q':'backdrop-filter?','o':['मागे blur','पुढे','आत'],'c':0},
   {'q':'mask करते?','o':['लपवते','जोडते','वाढते'],'c':0}],
  {'prompt':'फिल्टर गॅलरी','starterCode':'img { filter: saturate(1.1); }','expectedOutput':'Renders masked image gallery'},
  ['filter परफॉर्मन्स?','mask आधार किती?'],
  ['css-container-queries', 'css-marathi-capstone2'],
  'css-container-queries', 'css-marathi-capstone2')

# =====================================================================
# 12. MARATHI CAPSTONE 2
# =====================================================================
L('css-marathi-capstone2',
  'Marathi Capstone 2',
  'Marathi project — सर्वांग',
  'दोन्ही स्तरांची CSS एकत्र; portal पेज, theme आणि परिपूर्ण लेआउट.',
  [
   S('1. उद्दिष्टे',
     'हे प्रोजेक्ट दोन्ही स्तर जोडते.\n\nथीम variables गोळा करा.\n\ncontainer रचना गतिमान ठेवा.\n\nॲनिमेशन सौम्य ठेवा.\n\nप्रवेश्यता सर्वत्र तपासा.\n\nदृष्य अंतिम निकाल जवळ.',
     ':root {\n  --brand: #0f766e;\n  --ink: #1c1c1c;\n}'),
   S('2. theme variables',
     'रंग आणि अंतर variables मध्ये.\n\nएका ठिकाणी बदल; सर्वत्र लागू.\n\ndark mode पर्याय जोडता.\n\nसंगत नावे नेटकी ठेवा.\n\nएकूण व्यवस्था स्पष्ट होते.\n\nतपासणी दोन्ही मोडवर करा.',
     ':root {\n  --pad: 1rem;\n  --radius: 8px;\n}\n.card {\n  padding: var(--pad);\n  border-radius: var(--radius);\n}'),
   S('3. container layout',
     'मुख्य पेज container-based करा.\n\n@container दोन अवस्था लिहा.\n\nsubgrid किंवा nested ग्रिड.\n\nरुंद आणि अरुंद जागा प्रतिसाद.\n\nकॉम्पोनेंट पुनरुपयोग साध्य.\n\nमोबाइल आणि डेस्कटॉप दोन्ही.',
     '.dash {\n  container-type: inline-size;\n}\n@container (min-width: 640px) {\n  .dash { grid-template-columns: 2fr 1fr; }\n}'),
   S('4. धीमे animation',
     'animation सौम्य आणि short ठेवा.\n\ntransition ease मध्ये.\n\nreduced motion नियम पक्का.\n\nहालचाल अर्थासाठीच नको.\n\nसर्व browser चाचणी.\n\nगुळगुळीत अनुभव द्या.',
     '@media (prefers-reduced-motion: reduce) {\n  * { transition-duration: 0.01ms !important; }\n}'),
   S('5. प्रवेश्यता',
     'contrast कडक तपासा.\n\nfocus दृश्यमान ठेवा.\n\nlabel फॉर्मच्या ओळखीसाठी.\n\nभाषा मराठी स्पष्ट ठेवा.\n\nसराव पूर्ण करून घ्या.\n\nसर्वांसाठी दृश्य समान.',
     'a:focus-visible {\n  outline: 2px solid var(--brand);\n  outline-offset: 2px;\n}'),
   S('6. अंतिम पॅकेजिंग',
     'सर्व नियम अंतिम क्रमवार पहा.\n\n@layer groups गोळा करा.\n\nजुने कोड वेगळा नाही.\n\nहे पूर्ण ताकदीने तपासा.\n\nदस्तऐवज रचना नोंदवा.\n\nसर्व संकल्पना समजला याची तपासणी करा.',
     '/* final check: cascade, support, a11y */\n.card:has(.btn:hover) {\n  outline: 2px solid var(--brand);\n}'),
   S('Mini Project',
     'मराठी पोर्टल पूर्ण करा.\n\nvariables थीम. container layout.\n\nरुचकर animation. a11y नियम.\n\nदोन्ही स्तरांतील ज्ञान एकत्र.',
     ':root { --brand: #0f766e; }\n@container (min-width: 640px) {\n  .cols { grid-template-columns: 2fr 1fr; }\n}'),
  ],
  ['प्रोजेक्ट काय जोडतो?','reduced motion?','container फायदा?'],
  [{'q':'variables साठी?','o':['एक ठिकाण','अनेक','नाही'],'c':0},
   {'q':'@container करता?','o':['रचना प्रतिसाद','रंग','नाव'],'c':0},
   {'q':'a11y नियम?','o':['focus contrast','space','verbose'],'c':0},
   {'q':'reduced motion?','o':['कमी हालचाल','जास्त','रंग'],'c':0}],
  {'prompt':'मराठी पोर्टल अंतिम','starterCode':':root { --brand: #0f766e; }','expectedOutput':'Renders polished Marathi portal'},
  ['Level 2 काय वाढले?','पुढे कुठे?'],
  ['css-masking-filters', 'css-layout-methods'],
  'css-masking-filters', 'css-layout-methods')

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
            parts.append("    challenge: {")
            parts.append("      prompt: " + js_str(c["prompt"]) + ",")
            parts.append("      starterCode: " + code_block(c["starterCode"]) + ",")
            parts.append("      expectedOutput: " + js_str(c["expectedOutput"]) + ",")
            parts.append("    },")
        else:
            if k in ('slug', 'categoryId', 'title', 'marathiTitle', 'level', 'minutes', 'summary', 'prev', 'next'):
                parts.append("    " + k + ": " + js_str(v) + ",")
    parts.append("    levelLabel: CSS2_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 2 — उन्नत शैली आणि हालचाल ===\n'
    header += 'export const CSS2_LABEL = "CSS · Level 2 — उन्नत शैली आणि हालचाल";\n'
    header += '\nexport const cssLevel2: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css2_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css2_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css2_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level2.ts')
print("WROTE css-level2.ts, lines:", len(out.split(chr(10))))