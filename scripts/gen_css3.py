# -*- coding: utf-8 -*-
# Generator for CSS Level 3 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level3.ts. Base content ~100-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=25):
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
# 1. CUSTOM PROPERTIES DEEP
# =====================================================================
L('css-custom-properties-deep',
  'Custom Properties Deep',
  'Custom properties — वारसा खोल',
  'वारसा, fallback, जावास्क्रिप्ट संवाद आणि typed properties.',
  [
   S('1. variable वारसा',
     'custom property ही वारशाने पुढे जाते.\n\nपालक असेल तोपर्यंत सर्व मुलांना लागते.\n\nघटकाला नवीन मूल्य दिले तर तेच वापरते.\n\nवेगवेगळ्या भागांना वेगवेगळा रंग देता.\n\nथीम ही अशीच खाली वाहते.\n\nवारसा समजणे महत्त्वाचे.',
     ':root {\n  --accent: #0f766e;\n}\n.card {\n  --accent: #b91c1c;\n  color: var(--accent);\n}'),
   S('2. fallback मूल्य',
     'var() ला दुसरे मूल्य सोबत देतो.\n\nमूळ नसल्यास fallback वापरते.\n\nजुने ब्राउझर हे सहज ओळखतात.\n\nअडचण कमी होते.\n\nfallback हा शेवटचा पर्याय होय.\n\nसुरक्षित वापर जपता येतो.',
     '.btn {\n  color: var(--accent, #2563eb);\n}'),
   S('3. जावास्क्रिप्ट वाचन',
     'जावास्क्रिप्ट मधून variable वाचता.\n\ngetPropertyValue ने मूल्य रीड.\n\nकोणत्याही घटकावर ठरते.\n\nदुसरीकडे बदल सरळ होतो.\n\nरंग गतिशील करता येतो.\n\nसंगणित मूल्य तंतोतंत मिळते.',
     'const cs = getComputedStyle(el);\nconst v = cs.getPropertyValue("--accent").trim();'),
   S('4. सेटिंग जावास्क्रिप्ट',
     'setProperty ने variable बदलता.\n\nएका ठिकाणी बदल; सर्वत्र नवे.\n\ndark mode हा सोपा आधार.\n\nआणि revert मागे जातो.\n\nअपडेट सहज शक्य आहे.\n\nअनुभव नियंत्रित राहतो.',
     'el.style.setProperty("--accent", "#0ea5e9");'),
   S('5. transition युक्त',
     'variable वर transition चालू होतो.\n\ntransition गुणधर्म नेहमी यादी देतो.\n\nरंग बदल गुळगुळीत होतो.\n\nगणित मूल्येच हलतात.\n\nरंग आणि संख्या सुंदर बदलतात.\n\nहालचाल उत्तम दिसते.',
     '.theme {\n  transition: color 0.3s, background 0.3s;\n}'),
   S('6. typed properties',
     '@property चे नियम असतात.\n\nsyntax मूल्य प्रकार ठरवतो.\n\ninitial मूल्य सांगितले जाते.\n\ninherits वारसा सतत तपासतो.\n\nअशी typed शैली जास्त स्थिर.\n\nविभागात अधिक समजून घ्या.',
     '@property --ratio {\n  syntax: "<ratio>";\n  inherits: false;\n  initial-value: 1 / 1;\n}'),
   S('Mini Project',
     'थीम variable पेज तयार करा.\n\nतीन switch रंग.\n\ndark mode बटण.\n\ntransition गुळगुळीत पहा.',
     'html[data-theme="dark"] {\n  --bg: #111;\n  --fg: #eee;\n}'),
  ],
  ['variable वारसा कसा?','fallback काय?','जावास्क्रिप्ट से कसे?'],
  [{'q':'var() fallback?','o':['दुसरे मूल्य','रंग','वेग'],'c':0},
   {'q':'getPropertyValue?','o':['वाचते','लिहते','लपवते'],'c':0},
   {'q':'setProperty?','o':['बदलते','वाढते','गणती'],'c':0},
   {'q':'@property syntax?','o':['प्रकार','नाव','क्रम'],'c':0}],
  {'prompt':'dark mode थीम','starterCode':'html[data-theme="dark"] { --bg: #111; }','expectedOutput':'Renders theme toggler demo'},
  ['variable वर transition?','@property फायदा?'],
  ['css-marathi-capstone2', 'css-scroll-driven'],
  'css-marathi-capstone2', 'css-scroll-driven')

# =====================================================================
# 2. SCROLL-DRIVEN
# =====================================================================
L('css-scroll-driven',
  'Scroll-Driven',
  'Scroll-driven — हालचाल जोडणी',
  'scroll-timeline, animation-timeline आणि view-timeline प्रभाव.',
  [
   S('1. स्क्रोल संकल्पना',
     'स्क्रोल ही हालचालच नव्हे.\n\nपुढे सरकल्यावर animation जागते.\n\nवर गेल्यावर मागे सरकते.\n\nscroll चा वेग नियंत्रित करता.\n\nस्वतंत्र स्क्रिप्ट लागत नाही.\n\nहे नवीन तंत्र आता वाढले आहे.',
     '.bar {\n  animation-timeline: scroll();\n}'),
   S('2. scroll-timeline',
     'scroll-timeline ला एक नाव दिले जाते.\n\nकोणता रोलर हलता हे ठरते.\n\nscroll(root) हा मुख्यच.\n\nतुमच्या घटकाचा थर निवडता.\n\nहालचाल ठिकाणी अवलंबून असते.\n\nनाव असले पाहिजे.',
     'section {\n  scroll-timeline: sec;\n}'),
   S('3. animation-timeline',
     'animation-timeline चा संबंध जोडतो.\n\n@keyframes चालवतो सोबत.\n\nस्क्रोल पावला टप्पे.\n\ntimeline रेंज सीमा निवडता.\n\nmisplaced नियंत्रण नाही.\n\nप्रवाह गुळगुळीत असतो.',
     '.progress {\n  animation: fill linear;\n  animation-timeline: scroll(block);\n}'),
   S('4. view-timeline',
     'view-timeline ला दृश्य संदर्भ देतो.\n\nजेव्हा विभाग क्षेत्रात येतो.\n\nआरंभ सीमा हा प्रारंभ.\n\nनिर्गम सीमा हा शेवट.\n\nघटक दिसताच हालचाल सुरू.\n\nअसणे सोयीचे आहे.',
     '.reveal {\n  view-timeline: v;\n  animation: fade linear both;\n  animation-timeline: v;\n}'),
   S('5. रेंज नियम',
     'range स्क्रोलचा टप्पा ठरवतो.\n\ncover पूर्ण क्षेत्र व्यापतो.\n\ncontain घटकांचा आतला भाग.\n\nexit नंतर बाहेर सरकतो.\n\nentry आरंभीच मात्रा.\n\nनिवड अचूक करता येते.',
     '@keyframes fade {\n  to { opacity: 1; translate: 0 0; }\n}'),
   S('6. आधार सूचना',
     'स्क्रोल-ड्रिव्हन सर्वत्र नाही.\n\n@supports ने तपासा आतल्या.\n\nजुन्या ब्राउझरसाठी static.\n\nreduced motion राखून ठेवा.\n\ntransitions वर स्थिर परत.\n\nप्रवेश्यता प्राथमिक ठेवा.',
     '@supports (animation-timeline: scroll()) {\n  .bar { animation-timeline: scroll(); }\n}'),
   S('Mini Project',
     'स्क्रोल प्रोग्रेस बार बनवा.\n\nscroll() timeline.\n\n@keyframes एक रेषा.\n\nreduced पर्याय सोबत.',
     'body {\n  animation: fill linear;\n  animation-timeline: scroll();\n}\n@keyframes fill {\n  from { outline-color: #ddd; }\n  to { outline-color: teal; }\n}'),
  ],
  ['scroll-timeline काय?','animation-timeline काढते?','view रेंज काय?'],
  [{'q':'scroll() आधार?','o':['मुख्य स्क्रोल','रंग','फॉन्ट'],'c':0},
   {'q':'view-timeline?','o':['दृश्य क्षेत्र','नाव','अक्षर'],'c':0},
   {'q':'cover रेंज?','o':['पूर्ण क्षेत्र','अर्धा','रंग'],'c':0},
   {'q':'@supports का?','o':['आधार तपास','वेग','आकार'],'c':0}],
  {'prompt':'स्क्रोल प्रोग्रेस','starterCode':'body { animation-timeline: scroll(); }','expectedOutput':'Renders scroll progress demo'},
  ['स्क्रोल animation फायदा?','प्रवेश्यता कशी?'],
  ['css-custom-properties-deep', 'css-drag-media'],
  'css-custom-properties-deep', 'css-drag-media')

# =====================================================================
# 3. DRAG & MEDIA
# =====================================================================
L('css-drag-media',
  'Drag & Media',
  'Drag and media — परिसर ओळख',
  'pointer, hover, color-gamut आणि scripting queries.',
  [
   S('1. परिसर queries',
     'media ने परिसर विचारता.\n\nhover उपलब्ध आहे का?\n\npointer दृश्य कोणते?\n\ncolor-gamut रंग क्षमता.\n\nप्रत्येक उत्तरावर शैली बदलते.\n\nयोग्य अनुभव मिळतो.',
     '@media (hover: hover) {\n  .card:hover { translate: 0 -4px; }\n}'),
   S('2. hover असणे',
     'hover मध्ये उंदीर असतो.\n\nखऱ्या hover साठी हा query.\n\nटच स्क्रीनवर hover नसतो.\n\nखोट्या स्पर्शाने क्लिकच जाते.\n\nठिकाण वाटणे स्पष्ट करा.\n\nनियम अशा दिशांनी लावा.',
     'a.tap {\n  display: block;\n  min-height: 44px;\n}'),
   S('3. pointer ओळख',
     'pointer ने अचूक यंत्र ओळखता.\n\nfine म्हणजे नेमके input.\n\ncoarse म्हणजे बोट.\n\ntarget आकार वाढवतो.\n\nhover accuracy बदलते.\n\nअंतर आळशी ठेवते.',
     '@media (pointer: coarse) {\n  button { min-height: 44px; }\n}'),
   S('4. color-gamut',
     'color-gamut रंग क्षमता देतो.\n\np3 उंच रंग घेतो.\n\nsrgb हे सर्वत्र.\n\nब्रॉड रंग enhance करता.\n\nनवीन पडद्यावर उत्तम.\n\nजुन्यावर शांत राहतो.',
     '@media (color-gamut: p3) {\n  .hero {\n    color: color(display-p3 0 0.5 0.45);\n  }\n}'),
   S('5. scripting query',
     'scripting उपलब्धता तपासता.\n\nenabled स्क्रिप्ट चालते.\n\nnone मध्ये काही नाही.\n\ninitial-only आरंभीचे होते.\n\nप्रगतीशील वाढ ही योग्य.\n\nआधार नसला तरी रचना चालेल.',
     '@media (scripting: none) {\n  .tab { display: block; }\n}'),
   S('6. लघु उपकरणांमध्ये',
     'मोठे पेज प्रतिसाद देतात.\n\nहे queries आताही मदत.\n\nएकत्र vite केलेले.\n\nवापरकर्त्याला भाव जोडतो.\n\nप्रवेश्यता सध्याचा मुख्य.\n\nसर्व नियम सातत्याने.',
     '@media (hover: none), (pointer: coarse) {\n  .menu { padding: 0.75rem; }\n}'),
   S('Mini Project',
     'मल्टीमीडिया कार्ड पेज.\n\nhover fine वर lift.\n\ntouch coarse वर target.\n\np3 रंग सुधारणा.',
     '@media (hover: hover) {\n  .card:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.2); }\n}\n@media (pointer: coarse) {\n  .card { min-height: 48px; }\n}'),
  ],
  ['hover none म्हणजे?','pointer coarse?','color-gamut काय?'],
  [{'q':'hover: hover?','o':['उंदीर','बोट','केमेरा'],'c':0},
   {'q':'pointer coarse?','o':['स्पर्श','पेन','माउस'],'c':0},
   {'q':'p3 म्हणजे?','o':['रंग रुंद','छोटा','आवाज'],'c':0},
   {'q':'scripting none?','o':['स्क्रिप्ट नाही','जास्त','रंग'],'c':0}],
  {'prompt':'परिसर प्रतिसाद कार्ड','starterCode':'@media (hover: hover) { .card:hover { translate: 0 -4px; } }','expectedOutput':'Renders environment-aware card'},
  ['coarse target का?','gamut प्रवेश?'],
  ['css-scroll-driven', 'css-view-transitions'],
  'css-scroll-driven', 'css-view-transitions')

# =====================================================================
# 4. VIEW TRANSITIONS
# =====================================================================
L('css-view-transitions',
  'View Transitions',
  'View transitions — दृश्य संक्रमण',
  'view-transition API, shared element आणि सुलभ नियंत्रण.',
  [
   S('1. संक्रमण API',
     'पेज बदलताना दृश्य गुळगुळीत.\n\nजावास्क्रिप्ट फक्त ट्रिगर देतो.\n\nCSS ने रचना आणि प्रभाव ठरतो.\n\nस्नॅपशॉट दोन अवस्था स्मरतो.\n\nजुने नवे हे मिसळतात.\n\nरचना सुखकर बनते.',
     '::view-transition-group(root) {\n  animation-duration: 0.4s;\n}'),
   S('2. shared element',
     'दोन्ही दृश्यांतील घटक जोडता.\n\nview-transition-name हे नाव.\n\nएकच घटक सलग दिसेल.\n\nशीर्षक नाव अद्वितीय हवे.\n\nदृश्य संक्रमण सहज भरते.\n\nरंग आणि आकार वाकतात.',
     '.title {\n  view-transition-name: heading;\n}'),
   S('3. pair निर्मिती',
     '::view-transition-image-pair क्षेत्र.\n\nold आणि new थर असतात.\n\nblend mode सुधारता.\n\nsequence काढून हलवता.\n\nजटिलता वाढवू नये.\n\nसौम्य उपाय चांगला.',
     '::view-transition-image-pair(*) {\n  mix-blend-mode: normal;\n}'),
   S('4. कालावधी नियम',
     'कालावधी मर्यादित ठेवा.\n\noverlay थर प्रथम बाहेर.\n\ntransition मधला विलंब.\n\nसंयोजन रुचकर असू द्या.\n\nखिचडी टाळा साधेपणा.\n\nसतत विचारात घ्या.',
     '::view-transition-old(root) {\n  animation-duration: 0.2s;\n}\n::view-transition-new(root) {\n  animation-duration: 0.3s;\n}'),
   S('5. देखावा नियंत्रण',
     'केवळ भाग बदलताना दाखवा.\n\ndrop नावे सुधारणा.\n\nकाही घटक बदलू नये.\n\nclass क्षेत्र मर्यादित ठेवा.\n\nresolve नियंत्रण शक्य.\n\nअनुभव अचूक ठरतो.',
     '::view-transition-group(info) {\n  animation: none;\n}'),
   S('6. आधार तपासणी',
     'ट्रांझिशन API प्रत्येकजण नाही.\n\nजावास्क्रिप्ट मध्ये तपासा.\n\nfail नसल्यास सरळ बदल.\n\nप्रगतीशील वाढच योग्य.\n\ncompanion अजूनही चालू.\n\nसर्व ब्राउझरसाठी सुरक्षा.',
     'if (document.startViewTransition) {\n  document.startViewTransition(() => swap());\n}'),
   S('Mini Project',
     'प्रोजेक्ट स्विचर पेज बनवा.\n\nसंक्रमण नावे दोन.\n\nसौम्य कालावधी.\n\nआधार तपासणीसह.',
     '.page {\n  view-transition-name: article;\n  animation-duration: 0.3s;\n}'),
  ],
  ['view transition काय?','नाव कसे द्यावे?','जुने नवे काय?'],
  [{'q':'ट्रिगर काय?','o':['startViewTransition','reload','scroll'],'c':0},
   {'q':'नामकरण?','o':['view-transition-name','color','width'],'c':0},
   {'q':'old/new?','o':['दोन्ही थर','एकच','फॉन्ट'],'c':0},
   {'q':'आधार तपास?','o':['if presence','गणती','nave'],'c':0}],
  {'prompt':'पेज स्विच पेज','starterCode':'.page { view-transition-name: article; }','expectedOutput':'Renders smooth page transition'},
  ['जावास्क्रिप्ट लागेल?','shared element नियम?'],
  ['css-drag-media', 'css-at-property'],
  'css-drag-media', 'css-at-property')

# =====================================================================
# 5. AT-PROPERTY
# =====================================================================
L('css-at-property',
  '@property',
  '@property — घोषित मूल्य',
  'syntax, inherits, initial-value आणि animation interpolation.',
  [
   S('1. @property कल्पना',
     '@property ने custom type घोषित करते.\n\nsyntax मध्ये प्रकार लिहितो.\n\ninitial-value आरंभीचे मूल्य.\n\ninherits वारसा ठरवते.\n\nब्राउझरला प्रकार माहीत.\n\nआंतरपोल करणे सोपे होते.',
     '@property --x {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 0px;\n}'),
   S('2. syntax प्रकार',
     'syntax मध्ये type देतो.\n\n<length>, <color>, <number>.\n\n<percentage> वाढीव.\n\nकस्टम bool शक्य.\n\nप्रकार नियंत्रित होते.\n\nअचूक डेटा बंधनकारक.',
     '@property --hue {\n  syntax: "<number>";\n  inherits: true;\n  initial-value: 0;\n}'),
   S('3. रंग animation',
     'रंग variable पूर्वी गुळगुळीत नव्हता.\n\ntransition मधे हळूहळू होता.\n\n@property दिल्यावर सहज बदलतो.\n\nब्राउझरला रंग समजतो.\n\npurple ते blue संक्रमण.\n\nहा नवा अनुभव मिळतो.',
     '@property --brand {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: #0f766e;\n}'),
   S('4. चक्र हालचाल',
     'टक्के मूल्ये जागेवर सरकतात.\n\n0% ते 100% गुळगुळीत.\n\nआकार आणि अंतर बदलते.\n\nअचूक नियंत्रण सोपे होते.\n\nनक्कीच दृश्य दिसते.\n\nगणना ब्राउझर करतो.',
     '@property --p {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 0%;\n}\n.prog { width: var(--p); }'),
   S('5. registerProperty',
     'जावास्क्रिप्ट मधून register.\n\nnew syntax वापरता सुरूआत.\n\nsame type आणि inherits.\n\nडॉक्युमेंटच्या आधी करा.\n\nआधाराबाहेर राहू नये.\n\nनाव नेहमी -- सह.',
     'CSS.registerProperty({\n  name: "--m",\n  syntax: "<number>",\n  inherits: false,\n  initialValue: "0"\n});'),
   S('6. आधार तपास',
     '@property आधार काहीतरी.\n\n@supports ने तपासता.\n\nfail नसल्यास साधा fallback.\n\nप्रगतीशील अपग्रेड.\n\nहे सोबत वेब नियम.\n\nसुरक्षित वापर केला पाहिजे.',
     '@supports (syntax: "<color>") {\n  @property --brand {\n    syntax: "<color>";\n    inherits: true;\n  }\n}'),
   S('Mini Project',
     'animated progress पेज बनवा.\n\n@property typed.\n\ntransition गुळगुळीत.\n\nआधार fallback सोबत.',
     '@property --fill {\n  syntax: "<percentage>";\n  inherits: false;\n  initial-value: 20%;\n}\n.bar { width: var(--fill); transition: --fill 1s; }'),
  ],
  ['@property काय घोषित?','syntax का?','registerProperty कधी?'],
  [{'q':'@property syntax?','o':['प्रकार','नाव','आकार'],'c':0},
   {'q':'रंग transition?','o':['गुळगुळीत','थबक','रिटर्न'],'c':0},
   {'q':'inherits?','o':['वारसा','रंग','वेग'],'c':0},
   {'q':'registerProperty?','o':['जावास्क्रिप्ट','रंग','लुप्त'],'c':0}],
  {'prompt':'गुळगुळीत प्रोग्रेस','starterCode':'@property --fill { syntax: "<percentage>"; }','expectedOutput':'Renders interpolating progress bar'},
  ['typed variable फायदा?','आधार कसा तपासता?'],
  ['css-view-transitions', 'css-masonry-grid'],
  'css-view-transitions', 'css-masonry-grid')

# =====================================================================
# 6. MASONRY GRID
# =====================================================================
L('css-masonry-grid',
  'Masonry Grid',
  'Masonry — जोडणी जाळी',
  'मोठ्या स्तंभात नसलेली masonry रचना आणि dense पूर्णकरण.',
  [
   S('1. masonry कल्पना',
     'masonry मध्ये आकार भिन्न असतात.\n\nप्रत्येक घटक नैसर्गिक उंची.\n\nपुढील स्तंभात अंतर भरतो.\n\nPinterest सारखा देखावा.\n\nओळ नसलेली जाळी नीट.\n\nहे तंत्र अजून नवीन आहे.',
     '.gallery {\n  display: grid;\n  grid-template-rows: masonry;\n}'),
   S('2. स्तंभ रुंदी',
     'स्तंभ रुंदी repeat देतो.\n\nauto-fill भर घालतो.\n\nminmax लहान खिडकीसाठी.\n\nघटक आपली उंची जपतात.\n\nजागा व्यवस्थित वाटते.\n\nरचना स्थिर राहते.',
     '.gallery {\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n}'),
   S('3. ब्लॉक भराव',
     'masonry मध्ये जागा खाली भरली जाते.\n\nएकामागून एक प्रवाह.\n\nस्वच्छ अंतर दिसतो.\n\nउंची प्रमाण नको.\n\nफंक्शन नेहमी चांगले.\n\nसाधेपणा फायद्याचा.',
     '.item {\n  margin-bottom: 1rem;\n}'),
   S('4. dense पर्याय',
     'dense मध्ये लहान तुकडे भरतात.\n\nपुढे मोठे येऊ शकतात.\n\nआधी छोटे घटक वर.\n\nलेआउट घट होण्यास येते.\n\nआधारानुसार निवड शक्य.\n\nअर्ज मोठा असेल तर वापरा.',
     '.gallery {\n  grid-auto-flow: dense;\n}'),
   S('5. आधार स्थिती',
     'grid-template-rows: masonry आधार कमी.\n\n@supports ने वेगळे नियम.\n\nfail नसल्यास साधा grid.\n\nदोन्ही दृश्ये स्वीकार्य.\n\nहे तंतोतंत प्रगतीशील.\n\nप्रत्येक पेज निर्माण होईल.',
     '@supports (grid-template-rows: masonry) {\n  .wrap { grid-template-rows: masonry; }\n}'),
   S('6. प्रयोग सूचना',
     'मोठ्या images वर blank spaces.\n\nआकार वेगवेगळे निवडा.\n\nloading सुलभ ठेवा.\n\nनिरनिराळे पर्याय तपासा.\n\nयोग्य उद्देशासाठीच वापरा.\n\nसरावाने रचना पक्की.',
     '.card img {\n  width: 100%;\n  height: auto;\n}'),
   S('Mini Project',
     'मराठी गॅलरी पेज बनवा.\n\nmasonry rows नियम.\n\n@supports guard.\n\nप्रत्येक कार्ड स्वयं आकार.',
     '.gallery {\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n}\n@supports (grid-template-rows: masonry) {\n  .gallery { grid-template-rows: masonry; }\n}'),
  ],
  ['masonry म्हणजे?','dense काय करतो?','आधार कसा तपासतात?'],
  [{'q':'masonry rows?','o':['वेगळे आकार','सरळ','रंग'],'c':0},
   {'q':'dense?','o':['जागा भरते','रंग देतो','इलात'],'c':0},
   {'q':'auto-fill?','o':['स्तंभ समायोजन','नाव','फॉन्ट'],'c':0},
   {'q':'@supports?','o':['आधार तपास','वेग','आकार'],'c':0}],
  {'prompt':'मेसॉनरी गॅलरी','starterCode':'@supports (grid-template-rows: masonry) { .gallery { grid-template-rows: masonry; } }','expectedOutput':'Renders masonry photo grid'},
  ['masonry vs grid?','dense कधी योग्य?'],
  ['css-at-property', 'css-isolation-mix'],
  'css-at-property', 'css-isolation-mix')

# =====================================================================
# 7. ISOLATION & MIX
# =====================================================================
L('css-isolation-mix',
  'Isolation & Mix',
  'Isolation — थर संदर्भ',
  'contain combined, isolation, blend patterns आणि stacking अभ्यास.',
  [
   S('1. isolation एकत्र',
     'isolate सोबत contain जोडता.\n\nपृथक थर स्वतःचे क्षेत्र.\n\nब्लेंड बाहेर नाही.\n\nstacking विश्वासार्ह.\n\nस्वतंत्र विजेट स्थिर.\n\nरचना विश्वसनीय होते.',
     '.widget {\n  isolation: isolate;\n  contain: paint;\n}'),
   S('2. blend मिश्रण',
     'blend शैली थरांना एकत्र आणते.\n\nmultiply दाट सावली.\n\nscreen उजळ दृश्य.\n\nnormal हा साधा.\n\nसंरेखन काळजी घेतात.\n\nउपयोग संतुलित ठेवा.',
     '.hero {\n  mix-blend-mode: multiply;\n}'),
   S('3. stacking अभ्यास',
     'प्रत्येक isolation नवीन संदर्भ.\n\nz-index आतला निर्णय.\n\nबाहेरील क्रम तोलतात.\n\nmodal नेहमी सुरक्षित.\n\nअनेक थरांचा गोंधळ नाही.\n\nअनुक्रम स्पष्ट ठेवा.',
     '.menu {\n  isolation: isolate;\n  z-index: 5;\n}'),
   S('4. contain combo',
     'contain ला अनेक मूल्ये.\n\nlayout paint size.\n\nstrict दोन्ही घेते.\n\ncontent मध्ये कंटेनर.\n\nकामगिरी सुधारते.\n\nनियमांबद्दल जागरूक असा.',
     '.panel {\n  contain: layout paint;\n}'),
   S('5. layer pattern',
     'थर व्यवस्था layer द्वारे.\n\nbase theme extra.\n\nstacking सुद्धा यादी.\n\nकोड स्थिर राहतो.\n\nजुना नियम सापडेल.\n\nव्यवस्थापन सोपे.',
     '@layer base, theme, widgets;'),
   S('6. आधार आणि सुसंगत',
     'isolation आधार मजबूत आहे.\n\ncontain देखील सुरक्षित.\n\nblend थोडा वेगळा असतो.\n\nसर्व तपासा पडद्यावर.\n\nस्थिर धोरण मग ठेवा.\n\nकाम लाभदायक बनेल.',
     '@supports (contain: layout) {\n  .panel { contain: layout; }\n}'),
   S('Mini Project',
     'डॅशबोर्ड थर पेज.\n\nisolation per widget.\n\nblend शीर्षकावर.\n\ncontain तपासणीसह.',
     '.widget {\n  isolation: isolate;\n  contain: layout paint;\n}'),
  ],
  ['isolation म्हणजे?','blend कधी?','contain strict?'],
  [{'q':'isolate?','o':['नवीन context','रंग','आकार'],'c':0},
   {'q':'multiply?','o':['गडद','हलका','लुप्त'],'c':0},
   {'q':'strict contain?','o':['पृथक','सरळ','गणना'],'c':0},
   {'q':'stacking काय?','o':['क्रम','रंग','वेग'],'c':0}],
  {'prompt':'थर डॅशबोर्ड','starterCode':'.widget { isolation: isolate; contain: layout paint; }','expectedOutput':'Renders layered dashboard'},
  ['blend प्रवेश?','contain ताकद?'],
  ['css-masonry-grid', 'css-direction-context'],
  'css-masonry-grid', 'css-direction-context')

# =====================================================================
# 8. DIRECTION & LOGICAL
# =====================================================================
L('css-direction-context',
  'Direction & Logical',
  'Direction — दिशा वारसा',
  'writing-mode, direction आणि logical properties सुसंगतता.',
  [
   S('1. भाषा दिशा',
     'भाषेनुसार दिशा बदलते.\n\nउजवीकडून डावीकडे शैली.\n\nउजवीकडून डावीकडे ही शैली.\n\nलॉजिकल properties अनुकूल.\n\nphysical कडक दिशा.\n\nयोग्य वापर करा.',
     'html[dir="rtl"] .nav {\n  justify-content: flex-end;\n}'),
   S('2. writing-mode',
     'writing-mode ला रेषा ठरवतो.\n\nhorizontal-tb हे मुख्य.\n\nvertical-rl दिशा बदलते.\n\nलॉगो व्यवस्थेसाठी उपयुक्त.\n\nब्राउझर सर्वत्र करतो.\n\nचाचणी आवश्यक आहे.',
     '.sign {\n  writing-mode: vertical-rl;\n}'),
   S('3. logical properties',
     'margin-block वर-खाली शैली.\n\nmargin-inline डावे-उजवे.\n\npadding-block समान.\n\nborder-inline कडा ओळखणे.\n\nstart/end दिशा भाषेनुसार.\n\nस्वयं सुसंगत रचना.',
     '.box {\n  margin-inline: auto;\n  padding-block: 1rem;\n}'),
   S('4. text-align दिशा',
     'text-align start मार्गदर्शक.\n\nसुरुवात भाषेच्या आरंभी.\n\nend ही शेवटची दिशा.\n\nमराठीप्रमाणे हिंदी वापरते.\n\nकेंद्रण सहज राहते.\n\nसंरेखन दिशेने होते.',
     '.quote {\n  text-align: start;\n}'),
   S('5. css logical एकक',
     'inline size रुंदी ला.\n\nblock size उंची ला.\n\nmin-inline लहान मर्यादा.\n\nवैश्विक वापर करता.\n\nswitch भाषा बदलल्यावर.\n\nसर्व नियम बरोबर.',
     '.field {\n  inline-size: 20rem;\n}'),
   S('6. भाषा तपासणी',
     'भाषा बदलताना तपासा.\n\nजुने physical नियम सोडा.\n\nlogical हे नवीन आधार.\n\nउपसर्ग मर्यादित.\n\nमोठा वाचक कौतुक करतो.\n\nसरावाने व्यवस्था पक्की.',
     'html[lang="mr"] {\n  writing-mode: horizontal-tb;\n  direction: ltr;\n}'),
   S('Mini Project',
     'द्विभाषिक कार्ड पेज.\n\nlogical padding.\n\nstart text-align.\n\nvertical बॅज.',
     '.badge {\n  writing-mode: vertical-rl;\n  inline-size: auto;\n}'),
  ],
  ['logical काय देतात?','writing-mode?','text-align start?'],
  [{'q':'margin-inline?','o':['बाजू','वर खाली','रंग'],'c':0},
   {'q':'vertical-rl?','o':['उभी ओळ','आडवी','संगीत'],'c':0},
   {'q':'inline-size?','o':['रुंदी','उंची','रंग'],'c':0},
   {'q':'start दिशा?','o':['भाषेची सुरूआत','शेवट','वेग'],'c':0}],
  {'prompt':'द्विभाषिक व्यवस्था','starterCode':'.box { margin-inline: auto; }','expectedOutput':'Renders logical RTL-safe card'},
  ['physical vs logical?','writing-mode कोणते?'],
  ['css-isolation-mix', 'css-anchor-positioning'],
  'css-isolation-mix', 'css-anchor-positioning')

# =====================================================================
# 9. ANCHOR POSITIONING
# =====================================================================
L('css-anchor-positioning',
  'Anchor Positioning',
  'Anchor — जोड स्थान',
  'anchor-name, position-area आणि position-try प्रतिसाद.',
  [
   S('1. anchor कल्पना',
     'anchor मध्ये एक घटक ठिकाण असतो.\n\nदुसरा त्यावर स्थिर होतो.\n\nhover मध्ये popup दिसते.\n\nस्वतंत्र position गणना.\n\nरचना तरुण तंत्र.\n\nसुविधा मिळत आहे.',
     '.tip-anchor {\n  anchor-name: --tip;\n}'),
   S('2. position-area',
     'position-area क्षेत्र निवडतो.\n\ntop-left अशी नामे देतो.\n\nघटक त्या भागात येईल.\n\nकीबोर्ड नियंत्रण नेमके.\n\nshift नेहमी स्पष्ट.\n\nअचूक ठिकाण हवे.',
     '.tip {\n  position: absolute;\n  position-area: bottom;\n}'),
   S('3. inset-area नियम',
     'inset-area मध्ये थोडी जागा.\n\ntop center ला शीर्षक.\n\nहे positioning उपयोगी.\n\nब्राउझर नवीन मोजे.\n\nसोपा मार्ग दिसतो.\n\nव्यावहारिक असेल.',
     '.pop {\n  inset-area: top;\n}'),
   S('4. position-try',
     'position-try उलट पर्याय.\n\nजागा नाही तर दुसरे.\n\nस्वॅप direction आपोआप.\n\nedge protection लाभतो.\n\nस्क्रीनच्या बाहेरही.\n\nreflow न करता बदलतो.',
     '.tip {\n  position-try-fallbacks: flip-block;\n}'),
   S('5. जोड स्थानता',
     'anchor दोन्ही नियंत्रित.\n\nstart-end अंतर देतो.\n\nanchor-size समायोजन.\n\nटूलटिप सरळ जुळते.\n\nरेषा सुंदर असते.\n\nअनुभव पूर्ण होतो.',
     '.tooltip {\n  position: fixed;\n  position-anchor: --btn;\n  inset-area: top center;\n}'),
   S('6. आधार मर्यादा',
     'anchor आधार तपासा.\n\n@supports मध्ये position-area.\n\nfail नसल्यास absolute साधा.\n\nजावास्क्रिप्ट प्रगती.\n\nसर्जनशीलता नियंत्रित.\n\nसुरक्षित वापर करा.',
     '@supports (position-area: center) {\n  .tip { position-area: bottom center; }\n}'),
   S('Mini Project',
     'टूलटिप सिस्टीम बनवा.\n\nanchor नावे.\n\ninset-area ठिकाण.\n\nposition-try swaps.',
     '.btn {\n  anchor-name: --btn;\n}\n.tip {\n  position: fixed;\n  position-anchor: --btn;\n  inset-area: top;\n}'),
  ],
  ['anchor काय?','position-area?','position-try कधी?'],
  [{'q':'anchor-name?','o':['जोड खूण','रंग','परिमाण'],'c':0},
   {'q':'inset-area?','o':['स्थान क्षेत्र','मार्क','फॉन्ट'],'c':0},
   {'q':'flip-block?','o':['उलट बदल','रंग','वेग'],'c':0},
   {'q':'@supports?','o':['आधार तपास','गणती','नाव'],'c':0}],
  {'prompt':'अॅंकर टूलटिप','starterCode':'.tip { position: fixed; position-anchor: --btn; }','expectedOutput':'Renders anchored tooltip'},
  ['position-area vs try?','आधार कसा?'],
  ['css-direction-context', 'css-nesting-selectors'],
  'css-direction-context', 'css-nesting-selectors')

# =====================================================================
# 10. NESTING & SCOPE
# =====================================================================
L('css-nesting-selectors',
  'Nesting & Scope',
  'Nesting — घरटी रचना',
  '& selector, @scope नियम आणि :scope संदर्भ स्पष्टता.',
  [
   S('1. nesting कल्पना',
     'nesting मध्ये नियम शक्यतो.\n\nparent च्या आत child.\n\nकोड वाचायला सोपे.\n\nकोड कमी सुंदर.\n\nselector पुनरुक्ति नाही.\n\nरचना घट्ट राहते.',
     '.card {\n  & h2 {\n    color: #0f766e;\n  }\n}'),
   S('2. & चिन्ह',
     '& हा parent धरतो.\n\n&:hover सहज दर्शवतो.\n\ncombine आणखी सरळ.\n\nउदाहरण class मध्ये वापर.\n\nस्वयं सापेक्ष राहते.\n\nचूक होऊ नये.',
     '.btn {\n  &:hover {\n    color: white;\n  }\n}'),
   S('3. @scope नियम',
     '@scope मध्ये सीमारेषा निर्दिष्ट करते.\n\nlimit मध्येच नियम.\n\nchild तिथेच लागतात.\n\nजागतिक कोड सुरक्षित.\n\nनामांचा संघर्ष कमी.\n\nतोल आला आहे.',
     '@scope (.widget) to (.foot) {\n  .title { color: teal; }\n}'),
   S('4. :scope संदर्भ',
     ':scope हा root स्वतः.\n\nआतला निवडला तर.\n\nमुलांचा संदर्भ स्पष्ट.\n\nनियम नेमका होतो.\n\nselector वाक्य वाचता.\n\nजटिलता उतरवते.',
     '@scope {\n  :scope {\n    border: 1px solid #ccc;\n  }\n}'),
   S('5. nesting खोली',
     'खोली मर्यादित ठेवा.\n\nदोन थर उत्तम.\n\nतीन थर नको.\n\nअजून खोल चुका.\n\nकोड स्पष्ट पडतो.\n\nवाचनीयता वाढते.',
     '.menu {\n  .item {\n    &.active {\n      font-weight: bold;\n    }\n  }\n}'),
   S('6. आधार तपास',
     'nesting आधार बऱ्याच जागी.\n\n@scope नवीन आहे.\n\n@supports चाचणी.\n\nजुने वेगळे नियम.\n\nप्रगतीशील वाढ.\n\nसुरक्षा पहिली असावी.',
     '@supports selector(:has(&)) {\n  .card:has(> a) { padding: 1rem; }\n}'),
   S('Mini Project',
     'नॅव्ह बार nesting करा.\n\n& hover नियम.\n\n@scope विभाग स्पष्ट.\n\nकोड समजता येईल.',
     '.nav {\n  & a {\n    color: #333;\n    &:hover { color: teal; }\n  }\n}'),
  ],
  ['& काय करतो?','@scope सीमा?',':scope म्हणजे?'],
  [{'q':'& म्हणजे?','o':['parent','child','रंग'],'c':0},
   {'q':'@scope?','o':['सीमा नियम','गणना','फॉन्ट'],'c':0},
   {'q':':scope?','o':['स्वतः root','शेवट','वेग'],'c':0},
   {'q':'nesting फायदा?','o':['वाचनीय','रंग','आकार'],'c':0}],
  {'prompt':'नेस्टेड नेव','starterCode':'.nav { & a:hover { color: teal; } }','expectedOutput':'Renders nested nav demo'},
  ['@scope vs legacy?','nesting खोली किती?'],
  ['css-anchor-positioning', 'css-performance-advanced'],
  'css-anchor-positioning', 'css-performance-advanced')

# =====================================================================
# 11. PERFORMANCE ADVANCED
# =====================================================================
L('css-performance-advanced',
  'Performance Advanced',
  'Performance — वेग वाढ',
  'content-visibility, will-change आणि render संबंध सुधारणा.',
  [
   S('1. render मार्ग',
     'पेज render करताना खर्च होतो.\n\nlayout paint काम जास्त.\n\nकमाल फ्रेम स्थिर.\n\nसुधारणा सोपी असते.\n\nमोजमाप आधी करा.\n\nवेग सुधारतो.',
     '.card {\n  content-visibility: auto;\n}'),
   S('2. content-visibility',
     'content-visibility दृष्य ठिकाण.\n\nबाहेरील कंटेंट पेंट नाही.\n\nस्क्रोलमुळे लोड होतो.\n\nवेग चांगला वाढतो.\n\nजागा कमी राहते.\n\nकाळजी घ्या मर्यादा.',
     '.feed {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 600px;\n}'),
   S('3. contain-intrinsic',
     'contain-intrinsic आरंभी आकार.\n\nस्क्रोल स्थान अचूक राहतो.\n\nकुठेही आकस्मिक हाल होते.\n\nअंतर स्थिर ठेवते.\n\nपेंट नसलेल्यांचा आधार.\n\nनिर्णयामुळे तोल राहतो.',
     '.long {\n  contain-intrinsic-size: 400px;\n}'),
   S('4. will-change',
     'will-change आगाऊ घोषणा करते.\n\nब्राउझर थर तयार करतो.\n\nanimation गुळगुळीत.\n\nअतिवापर जड करतो.\n\nकेवळ एक दोन ठिकाणी.\n\nनंतर काढून टाका.',
     '.slide {\n  will-change: transform;\n}'),
   S('5. layer ऑर्डर',
     'नियम क्रम कामगिरी.\n\n@layer व्यवस्था स्पष्ट.\n\nहजारों नियम वाचताना.\n\nसमूह एकत्र शोधणे.\n\nदेखभाल वाढते.\n\nशैली वाचनीय.',
     '@layer reset, base, components, utils;'),
   S('6. मोजमाप सवय',
     'मोजमाप tool आधी.\n\nperformance मोजमाप दाखवा.\n\nआणि ६० फ्रेम लक्ष्य.\n\nसुधारणा नंतर पुन्हा.\n\nविश्लेषण विश्वासार्ह.\n\nवेग सहज ठरेल.',
     'body {\n  user-select: auto;\n}'),
   S('Mini Project',
     'लांब फीड पेज बनवा.\n\ncontent-visibility विभाग.\n\ncontain-intrinsic आकार.\n\nwill-change एक ठिकाण.',
     '.section {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 500px;\n}'),
  ],
  ['content-visibility काय?','will-change कधी?','intrinsic का?'],
  [{'q':'content-visibility?','o':['पेंट बचत','रंग','वेग'],'c':0},
   {'q':'intrinsic-size?','o':['आरंभी आकार','रंग','फॉन्ट'],'c':0},
   {'q':'will-change?','o':['थर','नाव','क्रम'],'c':0},
   {'q':'@layer?','o':['व्यवस्था','गडद','अक्षर'],'c':0}],
  {'prompt':'वेगवान फीड','starterCode':'.section { content-visibility: auto; }','expectedOutput':'Renders fast scrolling feed'},
  ['will-change अतिवापर?','intrinsic आवश्यक?'],
  ['css-nesting-selectors', 'css-marathi-capstone3'],
  'css-nesting-selectors', 'css-marathi-capstone3')

# =====================================================================
# 12. MARATHI CAPSTONE 3
# =====================================================================
L('css-marathi-capstone3',
  'Marathi Capstone 3',
  'Marathi capstone — अंतिम',
  'तीन स्तर एकत्र; वृत्तपत्र editorial आणि आधुनिक dashboard.',
  [
   S('1. उद्दिष्ट तिन्ही',
     'हे प्रकल्प तिन्ही पातळी एकत्र.\n\nvariable थीम स्थिर.\n\ncontainer रचना गतिमान.\n\nanimation थोडासा.\n\nकामगिरी आणि वेग.\n\nप्रदर्शन पूर्ण होईल.',
     ':root {\n  --paper: #fdf9f3;\n  --ink: #1b1b1b;\n  --accent: #9c1c2e;\n}'),
   S('2. editorial व्यवस्था',
     'वृत्तपत्र सदरवार रचना.\n\nकॉलम अशा grid रचनेत.\n\nmasonry टीझर नियम.\n\nछायाचित्र संरेखित.\n\narticle सुसंगत.\n\nवाचकांना मार्ग.',
     '.headline-grid {\n  grid-template-columns: repeat(3, 1fr);\n}\n.editorial {\n  colum-gap: 2rem;\n  column-count: 2;\n}'),
   S('3. थीम वारसा',
     'भाषा आणि दिशा तपासा.\n\nlogical properties वापरा.\n\nभिन्न विभाग रंग.\n\nरंग switch सोबत.\n\nसर्व paragraph एकसारखा.\n\nतोल ठीक राहो.',
     'html[lang="mr"] {\n  direction: ltr;\n}\n.quote {\n  border-inline-start: 4px solid var(--accent);\n}'),
   S('4. नेव्हिगेशन',
     'anchor टूलटिप सोबत.\n\nnesting मेनू.\n\nhover सौम्य प्रभाव.\n\nटच target मोठा.\n\nकळ स्पष्ट राहते.\n\nपडद्यावर तपासा.',
     '.nav {\n  & a:hover { color: var(--accent); }\n}\n.tip {\n  position-anchor: --menu;\n  inset-area: bottom;\n}'),
   S('5. प्रवेश्यता',
     'reduced motion ला आदर.\n\nfocus दृश्यमान.\n\ncontrast मोठा.\n\nमजकूर सुवाच्य.\n\nप्रत्येक नियम तपासा.\n\nबदल अंदाजे होतात.',
     '@media (prefers-reduced-motion: reduce) {\n  .news { animation: none; }\n}\na:focus-visible {\n  outline: 2px solid var(--accent);\n}'),
   S('6. कामगिरी अंतिम',
     'content-visibility लांब विभाग.\n\nintrinsic आकार जोडा.\n\nwill-change एक ठिकाण.\n\nlayer व्यवस्था ठीक.\n\nमोजमाप पुन्हा करा.\n\nवेग आणि स्थैर्य दोन्ही.',
     '@layer reset, base, layout, utils;\n.news {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 600px;\n}'),
   S('Mini Project',
     'मराठी editorial portal पूर्ण.\n\nतीन स्तर एकत्र.\n\nथीम + व्यवस्था + स्पीड.\n\nअंतिम पेज तयार.',
     ':root { --paper: #fdf9f3; --accent: #9c1c2e; }\n.news {\n  content-visibility: auto;\n  grid-template-columns: repeat(3, 1fr);\n}'),
  ],
  ['तीन स्तर काय?','reduced motion?','कामगिरी कशी?'],
  [{'q':'logical का?','o':['दिशा सुसंगत','रंग','वेग'],'c':0},
   {'q':'anchor कुठे?','o':['टूलटिप','फॉन्ट','margin'],'c':0},
   {'q':'intrinsic?','o':['स्क्रोल स्थिर','रंग','फॉन्ट'],'c':0},
   {'q':'@layer?','o':['व्यवस्था','अंक','आवाज'],'c':0}],
  {'prompt':'editorial पोर्टल','starterCode':':root { --accent: #9c1c2e; }','expectedOutput':'Renders polished Marathi editorial portal'},
  ['Level 3 नवीन काय?','पुढे कुठे जायचे?'],
  ['css-performance-advanced', 'css-custom-properties-deep'],
  'css-performance-advanced', 'css-custom-properties-deep')

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
    parts.append("    levelLabel: CSS3_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 3 — आधुनिक CSS तंत्र ===\n'
    header += 'export const CSS3_LABEL = "CSS · Level 3 — आधुनिक CSS: Nesting, Scroll आणि Positioning";\n'
    header += '\nexport const cssLevel3: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css3_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css3_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css3_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level3.ts')
print("WROTE css-level3.ts, lines:", len(out.split(chr(10))))