# -*- coding: utf-8 -*-
# Generator for CSS Level 9 (Marathi): 12 lessons x 7 sections.
# Theme: Modern Patterns (aspect-ratio, clamp/fluid, scroll-snap, accent-color,
# color-mix, text-wrap, popover, anchor positioning, writing modes, dialog
# backdrop, focus-visible). Emits src/data/tutorials/css-level9.ts.
# Base content ~110-135 words/section, self-contained CSS code cells.
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=38):
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
# 1. ASPECT RATIO
# =====================================================================
L('css-aspect-ratio',
  'Aspect Ratio',
  'aspect-ratio — प्रमाण नियम',
  'width आणि height प्रमाण संतुलन.',
  [
   S('1. प्रमाण कल्पना',
     'aspect-ratio नवे.\n\nएकाच जागी ठरवा.\n\nwidth height जुळतात.\n\nभाग भरतो.\n\nरचना स्थिर.\n\nवापर सोपा.',
     '.media {\n  aspect-ratio: 16 / 9;\n}'),
   S('2. चौकोन थर',
     'चौकोन समान.\n\nwidth ठरवा.\n\nheight आपोआप.\n\nimage भरते.\n\nप्रमाण कायम.\n\nकोड थोडा.',
     '.thumb {\n  aspect-ratio: 1 / 1;\n  width: 200px;\n}'),
   S('3. व्हिडिओ व्यवस्था',
     'video frame.\n\niframe भरा.\n\nobject-fit नियम.\n\nकड कापा.\n\nगती स्थिर.\n\nस्क्रीन प्रत्येक.',
     '.video {\n  aspect-ratio: 16 / 9;\n}\n.video iframe {\n  width: 100%;\n  height: 100%;\n}'),
   S('4. auto वापर',
     'auto जुना.\n\nप्रमाण बंद.\n\ncontent नुसार.\n\nflex मध्ये.\n\nआकार नेमका.\n\nनियम स्वच्छ.',
     '.auto {\n  aspect-ratio: auto;\n}'),
   S('5. लवचिक थर',
     'छोटी screen.\n\nप्रमाण बदल.\n\nmargin जपा.\n\ncolumn एक.\n\nदृश्य नीट.\n\nसवय योग्य.',
     '@media (width < 640px) {\n  .thumb {\n    aspect-ratio: 1 / 1;\n    width: 100%;\n  }\n}'),
   S('6. पोस्टर रचना',
     'poster उभा.\n\n3 बाय 4.\n\nobject-fit cover.\n\nभाग क्रम.\n\nदृश्य आकर्षक.\n\nकोड सुबक.',
     '.poster {\n  aspect-ratio: 3 / 4;\n  object-fit: cover;\n}'),
   S('Mini Project',
     'flag बॉक्स.\n\n16 बाय 9.',
     '.flag-box {\n  aspect-ratio: 16 / 9;\n  border: 1px solid #cbd5e1;\n}'),
  ],
  ['aspect प्रमाण काय?', 'iframe कसे भरावे?', 'auto कधी वापराल?', 'poster प्रमाण?'],
  [{'q':'aspect-ratio?','o':['प्रमाण','रंग','मार्ग'],'c':0},
   {'q':'16/9 म्हणजे?','o':['रुंद प्रमाण','उंच प्रमाण','कोणतीही'],'c':0},
   {'q':'object-fit?','o':['झाकणे','फिरवणे','निखाली'],'c':0},
   {'q':'1/1 थर?','o':['चौकोन','अळवा','धागा'],'c':0}],
  {'prompt':'video box 16/9 ठेवा.','starterCode':'.video {\n  aspect-ratio: 16 / 9;\n}','expectedOutput':'Renders a 16:9 framed box in Marathi page'},
  ['aspect प्रमाण कशासाठी?', 'auto vs निश्चित फरक?'],
  ['css-clamp-fluid', 'css-scroll-snap', 'css-accent-color'],
  'css-marathi-capstone8', 'css-clamp-fluid')

# =====================================================================
# 2. CLAMP FLUID
# =====================================================================
L('css-clamp-fluid',
  'Clamp & Fluid',
  'clamp — लवचिक आकार',
  'fluid टायपोग्राफी आणि मर्यादित आकार.',
  [
   S('1. clamp कल्पना',
     'clamp तीन अंक.\n\nminimum पहिला.\n\nइच्छित मधला.\n\nmaximum शेवट.\n\nआकार गुळगुळीत.\n\nस्क्रीन प्रत्येक.',
     'html {\n  font-size: clamp(16px, 2vw, 20px);\n}'),
   S('2. मथळा थर',
     'h1 मोठा.\n\nvw प्रमाण.\n\nरुंद screen वाढ.\n\nछोटी घट.\n\nरचना टिकते.\n\nकोड थोडा.',
     'h1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}'),
   S('3. min max',
     'min लहान.\n\nmax मोठा.\n\nमिळून नियम.\n\nरुंदी तोल.\n\nस्क्रोल नको.\n\nवापर सोपा.',
     '.title {\n  width: min(100%, 720px);\n}'),
   S('4. fluid गणना',
     'vw सोबत rem.\n\nमिश्रण गुळगुळीत.\n\nओळ मिळे.\n\nवाचन आराम.\n\nआकार हळू.\n\nनियम नेमका.',
     '.copy {\n  font-size: clamp(15px, 1vw + 1rem, 18px);\n}'),
   S('5. जागा नियम',
     'card padding.\n\nclamp जागा.\n\nलहान कमी.\n\nमोठे जास्त.\n\nसंतुलन स्थिर.\n\nकोड स्वच्छ.',
     '.card {\n  padding: clamp(12px, 3vw, 24px);\n}'),
   S('6. ग्रिड हाताळणी',
     'auto-fit छान.\n\nminmax लवचिक.\n\ncolumn फिरतो.\n\nहा थर.\n\nरचना सजीव.\n\nसवय चांगली.',
     '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}'),
   S('Mini Project',
     'footer दुवा.\n\nएक मर्यादा.',
     '.fluid {\n  font-size: clamp(14px, 2vw, 18px);\n}'),
  ],
  ['clamp कोणते तीन?', 'min काय करतो?', 'auto-fit कधी?', 'fluid का वापरतो?'],
  [{'q':'clamp काय?','o':['मर्यादा यंत्र','रंग यंत्र','दिनांक'],'c':0},
   {'q':'min म्हणजे?','o':['लहान मर्यादा','मोठी मर्यादा','चौथी संख्या'],'c':0},
   {'q':'vw एकक?','o':['दृश्य रुंदी','उंची धड','मजकूर'],'c':0},
   {'q':'max साठी?','o':['उच्च आकार','निम्न आकार','सगळे समान'],'c':0}],
  {'prompt':'h1 fluid करा.','starterCode':'h1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}','expectedOutput':'Heading scales fluidly across viewport in Marathi page'},
  ['fluid टायपोग्राफी कशी?', 'minmax ग्रिड कसे?'],
  ['css-aspect-ratio', 'css-scroll-snap', 'css-color-mix'],
  'css-aspect-ratio', 'css-scroll-snap')

# =====================================================================
# 3. SCROLL SNAP
# =====================================================================
L('css-scroll-snap',
  'Scroll Snap',
  'scroll-snap — थांबण्याची सोय',
  'स्क्रोल वेळी नीट थांबणे.',
  [
   S('1. snap कल्पना',
     'snap स्क्रोल.\n\ncontainer अक्ष.\n\nअर्थ केंद्र.\n\nथांबणे सोपे.\n\nदृश्य सुबक.\n\nवापर छान.',
     '.snap {\n  scroll-snap-type: x mandatory;\n}'),
   S('2. item नियम',
     'प्रत्येक item.\n\nsnap-align.\n\ncenter मध्यभागी.\n\nकड बरोबर.\n\nस्थान स्थिर.\n\nकोड थोडा.',
     '.slide {\n  scroll-snap-align: center;\n}'),
   S('3. proximity थर',
     'mandatory कडक.\n\nproximity मऊ.\n\nजवळ थांबे.\n\nवापरकर्ता आराम.\n\nनियम नेमका.\n\nसवय योग्य.',
     '.snap {\n  scroll-snap-type: x proximity;\n}'),
   S('4. margin द्या',
     'scroll-margin.\n\nकड जागा.\n\nsticky साथ.\n\nभाग छान.\n\nजागा संतुलित.\n\nकोड स्वच्छ.',
     '.slide {\n  scroll-margin: 12px;\n}'),
   S('5. उभा स्क्रोल',
     'y अक्ष.\n\nअनुलंब थर.\n\nस्तंभ समान.\n\nदिशा व्यवस्थित.\n\nरचना स्थिर.\n\nसवय चांगली.',
     '.columns {\n  scroll-snap-type: y mandatory;\n}'),
   S('6. सुरक्षा नियम',
     'reduced-motion.\n\nगती कमी.\n\nस्थिर स्क्रोल.\n\nआदर दाखवा.\n\nप्रवेश्यता जपा.\n\nकोड सुबक.',
     '@media (prefers-reduced-motion: reduce) {\n  .snap {\n    scroll-behavior: auto;\n  }\n}'),
   S('Mini Project',
     'gallery वाहने.\n\nएकच मार्ग.',
     '.gallery {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}'),
  ],
  ['snap-type अक्ष?', 'align कुठे लिहाल?', 'proximity काय?', 'reduced कधी?'],
  [{'q':'scroll-snap काय?','o':['थांबणे','उड्डाण','रंग'],'c':0},
   {'q':'snap-align?','o':['स्थान','नाम','ध्वनी'],'c':0},
   {'q':'proximity?','o':['सैल थांबणे','कठोर रंग','गोल भाग'],'c':0},
   {'q':'x अक्ष?','o':['क्षैतिज','उभा','ओळ'],'c':0}],
  {'prompt':'gallery snap करा.','starterCode':'.gallery {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}','expectedOutput':'Gallery scrolls and snap-stops neatly on Marathi page'},
  ['snap कसे लिहावे?', 'reduced-motion का?'],
  ['css-clamp-fluid', 'css-accent-color', 'css-aspect-ratio'],
  'css-clamp-fluid', 'css-accent-color')

# =====================================================================
# 4. ACCENT COLOR
# =====================================================================
L('css-accent-color',
  'Accent Color',
  'accent-color — चेकबॉक्स रंग',
  'मूळ input कंट्रोल्सना रंग देणे.',
  [
   S('1. आधार रंग',
     'checkbox नवा.\n\naccent-color.\n\nपहिला रंग.\n\nमूळ कंट्रोल.\n\nदृश्य टवटवीत.\n\nकोड थोडा.',
     'input {\n  accent-color: #4f46e5;\n}'),
   S('2. toggle साथ',
     'radio जुळते.\n\ncheckbox समान.\n\nरंग नेमका.\n\nstate स्पष्ट.\n\nवापर सोपा.\n\nसवय छान.',
     'input[type="checkbox"] {\n  accent-color: #16a34a;\n}'),
   S('3. range थर',
     'range भरा.\n\nslider रंग.\n\nप्रगती दिसे.\n\nनियम थोडा.\n\nदृश्य स्पष्ट.\n\nकोड स्वच्छ.',
     'input[type="range"] {\n  accent-color: #ea580c;\n}'),
   S('4. फॉर्म शैली',
     'अनेक कंट्रोल.\n\nएकच रंग.\n\nbodice जुळते.\n\nरचना सुबक.\n\nसंवेदना नीट.\n\nसवय योग्य.',
     '.form {\n  accent-color: #7c3aed;\n}'),
   S('5. मानक क्रम',
     ':root थर.\n\nसर्वत्र रंग.\n\nवारसा मिळे.\n\nआधार एक.\n\nनियम शुद्ध.\n\nकोड थोडा.',
     ':root {\n  accent-color: #2563eb;\n}'),
   S('6. सुसंगतता',
     '@supports तपास.\n\nअसेल तर दे.\n\nनसेल सोड.\n\nब्राउझर आदर.\n\nआधार घट्ट.\n\nसवय चांगली.',
     '@supports (accent-color: black) {\n  input {\n    accent-color: #0f766e;\n  }\n}'),
   S('Mini Project',
     'राज्य बॉक्स.\n\nरंग दाखवा.',
     '.check {\n  accent-color: #b91c1c;\n}'),
  ],
  ['accent-color कुठे?', 'range कसा?', ':root का?', '@supports कधी?'],
  [{'q':'accent-color काय?','o':['कंट्रोल रंग','मजकूर रंग','सीमा साइज'],'c':0},
   {'q':'कोणते input?','o':['checkbox','image','link'],'c':0},
   {'q':':root मध्ये?','o':['सर्वत्र','एका जागी','कोठेही नाही'],'c':0},
   {'q':'slider रंग?','o':['range','video','audio'],'c':0}],
  {'prompt':'checkbox हिरवा करा.','starterCode':'input[type="checkbox"] {\n  accent-color: #16a34a;\n}','expectedOutput':'Native checkbox renders green accent on Marathi page'},
  ['accent-color बद्दल?', '@supports का वापराल?'],
  ['css-scroll-snap', 'css-color-mix', 'css-focus-visible'],
  'css-scroll-snap', 'css-color-mix')

# =====================================================================
# 5. COLOR MIX
# =====================================================================
L('css-color-mix',
  'Color Mix',
  'color-mix — रंग संमिश्रण',
  'दोन रंगांना मिसळून नवा रंग.',
  [
   S('1. मिश्रण थर',
     'दोन रंग.\n\ncolor-mix.\n\nsrgb पद्धत.\n\nसमान प्रमाण.\n\nनवा रंग.\n\nवापर सोपा.',
     '.mix {\n  background: color-mix(in srgb, #f97316 40%, #3b82f6);\n}'),
   S('2. प्रमाण नियम',
     'टक्केवारी.\n\n70 बाय 30.\n\nपहिला ठळक.\n\nसंतुलन जुळते.\n\nरचना शांत.\n\nकोड स्वच्छ.',
     '.mix {\n  border-color: color-mix(in srgb, red 70%, blue);\n}'),
   S('3. हलका थर',
     'white मिसळा.\n\nhsl जागा.\n\ntint साधा.\n\nरंग मऊ.\n\nपार्श्वभूमी नीट.\n\nसवय छान.',
     '.tint {\n  background: color-mix(in hsl, white 80%, #dc2626);\n}'),
   S('4. गडद थर',
     'black मिसळा.\n\noklab उत्तम.\n\nshade गडद.\n\nआधार खोल.\n\nवाचनीय वाढ.\n\nकोड थोडा.',
     '.shade {\n  background: color-mix(in oklab, black 25%, #2563eb);\n}'),
   S('5. hover गती',
     'hover नवा.\n\nरंग फिका.\n\nआकर्षण राहो.\n\nसंक्रमण स्थिर.\n\nनियम नेमका.\n\nकोड सुबक.',
     '.btn:hover {\n  background: color-mix(in srgb, #4f46e5, white 15%);\n}'),
   S('6. मजकूर रंग',
     'tag हलका.\n\nविरोध कमी.\n\nवाचक आराम.\n\nरचना सजीव.\n\nसवय योग्य.\n\nकोड स्वच्छ.',
     '.tag {\n  color: color-mix(in srgb, #111827, white 10%);\n}'),
   S('Mini Project',
     'chip मिश्रण.\n\nएक रंग.',
     '.chip {\n  background: color-mix(in srgb, #059669 70%, white);\n}'),
  ],
  ['color-mix काय?', 'टक्के कसे?', 'tint कसा?', 'hsl कधी?'],
  [{'q':'color-mix काय?','o':['रंग मिसळते','रंग काढते','नाव देते'],'c':0},
   {'q':'in srgb?','o':['मोजणी जागा','रंग धागा','ओळ क्रम'],'c':0},
   {'q':'tint म्हणजे?','o':['हलका रंग','गडद रंग','मोठा रंग'],'c':0},
   {'q':'oklab काय?','o':['नवी मोजणी','जुनी धार','साधा थर'],'c':0}],
  {'prompt':'chip टिंट करा.','starterCode':'.chip {\n  background: color-mix(in srgb, #059669 70%, white);\n}','expectedOutput':'Renders a mint-tinted chip on Marathi page'},
  ['color-mix फायदे?', 'टक्केवारी नियम?'],
  ['css-accent-color', 'css-clamp-fluid', 'css-dark-mode'],
  'css-accent-color', 'css-text-wrap')

# =====================================================================
# 6. TEXT WRAP
# =====================================================================
L('css-text-wrap',
  'Text Wrap',
  'text-wrap — ओळ व्यवस्था',
  'शीर्षक आणि परिच्छेद ओळ सुंदर करणे.',
  [
   S('1. wrap कल्पना',
     'ओळ ठरते.\n\ntext-wrap नवे.\n\nbalance समान.\n\nदृश्य सुबक.\n\nवाचन आराम.\n\nवापर सोपा.',
     'h2 {\n  text-wrap: balance;\n}'),
   S('2. शीर्षक थर',
     'h1 सुबक.\n\nदोन ओळ समान.\n\nरुंदी कमी.\n\nमथळा स्थिर.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.title {\n  text-wrap: balance;\n  max-width: 40ch;\n}'),
   S('3. परिच्छेद नियम',
     'pretty खास.\n\nओळ तोल.\n\nअनाथ ओळ नको.\n\nवाचन नीट.\n\nलांब मजकूर.\n\nसवय छान.',
     'p {\n  text-wrap: pretty;\n}'),
   S('4. लांब ओळ',
     'nowrap बंद.\n\noverflow स्थिर.\n\ntext-overflow.\n\nधागा जपा.\n\nनियम कडक.\n\nकोड स्वच्छ.',
     '.long {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}'),
   S('5. मर्यादा',
     'ch एकक.\n\nरुंदी मिळे.\n\nओळ व्यवस्था.\n\nवाचक सुख.\n\nरचना स्पष्ट.\n\nवापर योग्य.',
     'p {\n  text-wrap: pretty;\n  max-width: 60ch;\n}'),
   S('6. एकत्र धागा',
     'महत्त्वाचा भाग.\n\nतुटू नको.\n\nएक ओळ.\n\nसांयोजन दिसे.\n\nनियम स्पष्ट.\n\nकोड सुबक.',
     'span {\n  white-space: nowrap;\n}'),
   S('Mini Project',
     'मुख्य मथळा.\n\nbalance द्या.',
     'h1 {\n  text-wrap: balance;\n}'),
  ],
  ['balance कुठे?', 'pretty काय?', 'nowrap कधी?', 'ch एकक काय?'],
  [{'q':'balance कशासाठी?','o':['शीर्षक','रंग','image'],'c':0},
   {'q':'pretty काय?','o':['मजकूर तोल','सीमा वाढ','धार काळ'],'c':0},
   {'q':'ellipsis?','o':['थांबवणे','फिरवणे','रंगवणे'],'c':0},
   {'q':'40ch म्हणजे?','o':['रुंदी','उंची','धार'],'c':0}],
  {'prompt':'शीर्षक balance करा.','starterCode':'h1 {\n  text-wrap: balance;\n}','expectedOutput':'Marathi heading lines balance evenly'},
  ['balance मर्यादा?', 'pretty लाभ?'],
  ['css-color-mix', 'css-writing-modes', 'css-print-styles'],
  'css-color-mix', 'css-popover-tips')

# =====================================================================
# 7. POPOVER TIPS
# =====================================================================
L('css-popover-tips',
  'Popover Tips',
  'popover — तात्काळ टीप',
  'मूळ popover आणि ::backdrop शैली.',
  [
   S('1. popover कल्पना',
     'popover मूळ.\n\nटीप उघडे.\n\nथर हलका.\n\nशैली CSS.\n\nकोड थोडा.\n\nवापर सोपा.',
     '[popover] {\n  inset: 50% auto auto 50%;\n  translate: -50% -50%;\n}'),
   S('2. backdrop थर',
     '::backdrop खास.\n\nमागे रंग.\n\nअर्धपारदर्शक.\n\nलक्ष टीप.\n\nनियम स्पष्ट.\n\nकोड स्वच्छ.',
     '[popover]::backdrop {\n  background: rgb(0 0 0 / 40%);\n}'),
   S('3. कार्ड रचना',
     'टीप card.\n\nरुंदी मर्यादा.\n\nकोपरे गोल.\n\npadding नीट.\n\nदृश्य सुबक.\n\nसवय छान.',
     '[popover] {\n  width: 18rem;\n  border-radius: 12px;\n  padding: 1rem;\n}'),
   S('4. मऊ सावली',
     'box-shadow.\n\nखोली दाखवा.\n\nथर वेगळा.\n\nगती स्थिर.\n\nरचना शोधा.\n\nकोड थोडा.',
     '[popover] {\n  box-shadow: 0 8px 24px rgb(0 0 0 / 20%);\n}'),
   S('5. आगमन गती',
     'keyframes आत.\n\nopacity हळू.\n\nscale कमी.\n\nanimation मऊ.\n\nसजीव दृश्य.\n\nसवय योग्य.',
     '@keyframes pop {\n  from {\n    opacity: 0;\n    scale: 0.95;\n  }\n}\n[popover] {\n  animation: pop 0.2s;\n}'),
   S('6. फोकस रिंग',
     'टीप उघडी.\n\nफोकस जुळे.\n\nहरवता नको.\n\nरिंग स्पष्ट.\n\nkeyboard सुरक्षा.\n\nकोड सुबक.',
     '[popover]:focus-visible {\n  outline: 3px solid #6366f1;\n}'),
   S('Mini Project',
     'साधी टीप.\n\nएक धार.',
     '[popover] {\n  margin: 0;\n  border: 1px solid #cbd5e1;\n}'),
  ],
  ['popover काय?', 'backdrop कुठे?', 'keyframes कसे?', 'एक थर काय?'],
  [{'q':'popover काय?','o':['तात्काळ थर','मुद्रण थर','रंग थर'],'c':0},
   {'q':'::backdrop कुठे?','o':['मागे','समोर','घर'],'c':0},
   {'q':'animate कसे?','o':['keyframes','order','width'],'c':0},
   {'q':'inset खास?','o':['केंद्र','धार','सूत'],'c':0}],
  {'prompt':'टीप कार्ड करा.','starterCode':'[popover] {\n  width: 18rem;\n  border-radius: 12px;\n  padding: 1rem;\n}','expectedOutput':'Native popover styled as a rounded Marathi tip card'},
  ['popover लाभ?', 'backdrop मर्यादा?'],
  ['css-text-wrap', 'css-modal-backdrop', 'css-anchor-position'],
  'css-text-wrap', 'css-anchor-position')

# =====================================================================
# 8. ANCHOR POSITION
# =====================================================================
L('css-anchor-position',
  'Anchor Position',
  'anchor — नांगर रचना',
  'घटकाशी जोडून भाग ठेवणे.',
  [
   S('1. anchor कल्पना',
     'anchor नवीन.\n\nएक घटक.\n\nभाग जोडणी.\n\nस्थान घेते.\n\nकोड कमी.\n\nवापर सोपा.',
     '.tip {\n  position: fixed;\n  position-anchor: --btn;\n}'),
   S('2. नाव नियम',
     'anchor-name स्पष्ट.\n\nbutton ला नाव.\n\nमार्ग जुळतो.\n\nभाग ठिकठीक.\n\nरचना स्थिर.\n\nकोड थोडा.',
     '.btn {\n  anchor-name: --btn;\n}'),
   S('3. मोजणी थर',
     'anchor अंक.\n\ntop मागून.\n\nleft आधार.\n\nजागा नेमकी.\n\nदृश्य सुबक.\n\nसवय छान.',
     '.menu {\n  top: anchor(--btn bottom);\n  left: anchor(--btn left);\n}'),
   S('4. fallback नियम',
     'जागा नाही.\n\nflip-block.\n\nउलट स्थान.\n\nहा प्रयत्न.\n\nसुरक्षा जपा.\n\nकोड स्वच्छ.',
     '.menu {\n  position: absolute;\n  position-try: flip-block;\n}'),
   S('5. सुसंगतता',
     '@supports तपास.\n\nanchor असेल.\n\nनवीन ब्राउझर.\n\nनसेल साधा.\n\nआधार दुहेरी.\n\nकोड थोडा.',
     '@supports (anchor-name: --btn) {\n  .menu {\n    position-anchor: --btn;\n  }\n}'),
   S('6. सवय रचना',
     'inset-area नवा.\n\ntop मध्ये.\n\nनियम छोटा.\n\nजागा जुळते.\n\nवापर नीट.\n\nकोड सुबक.',
     '.tooltip {\n  inset-area: top;\n}'),
   S('Mini Project',
     'नमुना खूण.\n\nanchor name.',
     '.fancy {\n  anchor-name: --fancy;\n}'),
  ],
  ['anchor काय?', 'name कुठे?', 'flip-block कधी?', '@supports का?'],
  [{'q':'anchor काय?','o':['घटक जोडणी','रंग बदल','ध्वनी वाढ'],'c':0},
   {'q':'anchor-name?','o':['नाव द्या','धार घ्या','रंग द्या'],'c':0},
   {'q':'fallback म्हणजे?','o':['उलट प्रयत्न','नवीन रंग','जुनी ओळ'],'c':0},
   {'q':'new CSS?','o':['anchor','rgb','margin'],'c':0}],
  {'prompt':'menu anchor करा.','starterCode':'.menu {\n  position-anchor: --btn;\n  top: anchor(--btn bottom);\n}','expectedOutput':'Menu positioned relative to button on Marathi page'},
  ['anchor कधी वापराल?', 'fallback नेम काय?'],
  ['css-popover-tips', 'css-writing-modes', 'css-modal-backdrop'],
  'css-popover-tips', 'css-writing-modes')

# =====================================================================
# 9. WRITING MODES
# =====================================================================
L('css-writing-modes',
  'Writing Modes',
  'writing-mode — लिखाण दिशा',
  'उभे लिखाण आणि दिशा नियंत्रण.',
  [
   S('1. दिशा कल्पना',
     'writing-mode हे.\n\nhorizontal साधा.\n\nvertical नवा.\n\nअक्षर फिरते.\n\nरचना बदल.\n\nवापर सोपा.',
     '.vertical {\n  writing-mode: vertical-rl;\n}'),
   S('2. अक्षर थर',
     'mixed अक्षरे.\n\nलॅटिन उभे.\n\nदेवनागरी सरळ.\n\nवाचन नीट.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.vertical {\n  writing-mode: vertical-rl;\n  text-orientation: mixed;\n}'),
   S('3. rtl व्यवस्था',
     'उजवी दिशा.\n\nहिंदी मजकूर.\n\ndirection नियम.\n\nसभोवताल जुळे.\n\nरचना स्थिर.\n\nसवय छान.',
     '[dir="rtl"] {\n  direction: rtl;\n}'),
   S('4. उभी रचना',
     'vertical-lr खास.\n\nडावी वाढ.\n\nस्तंभ ठीक.\n\nदृश्य वेगळे.\n\nसंतुलन जपा.\n\nकोड स्वच्छ.',
     '.vertical {\n  writing-mode: vertical-lr;\n  text-align: start;\n}'),
   S('5. आदर नियम',
     'logical props.\n\nmargin-inline-start.\n\nदिशा आदर.\n\nrtl मध्ये उलट.\n\nरचना नम्र.\n\nकोड थोडा.',
     '.box {\n  margin-inline-start: 8px;\n}'),
   S('6. सील रचना',
     'upright अक्षरे.\n\nदेवनागरी शुद्ध.\n\nउभे पूर्ण.\n\nसील दिसे.\n\nनियम स्पष्ट.\n\nकोड सुबक.',
     '.seal {\n  text-orientation: upright;\n}'),
   S('Mini Project',
     'ध्वज लिखाण.\n\nएक दिशा.',
     '.seal {\n  writing-mode: vertical-rl;\n}'),
  ],
  ['vertical कधी?', 'mixed काय?', 'rtl कसे?', 'upright कुठे?'],
  [{'q':'writing-mode काय?','o':['लिखाण दिशा','रंग वाढ','ध्वनी थर'],'c':0},
   {'q':'vertical-rl?','o':['उभे','आडवे','कर्ण'],'c':0},
   {'q':'direction rtl?','o':['उजवी सुरुवात','डावी सुरुवात','मध्य थांबा'],'c':0},
   {'q':'logical prop?','o':['आदर नियम','रंग नियम','धार नियम'],'c':0}],
  {'prompt':'सील उभा करा.','starterCode':'.seal {\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n}','expectedOutput':'Marathi text upright on vertical seal'},
  ['writing-mode उद्देश?', 'upright फरक?'],
  ['css-anchor-position', 'css-text-wrap', 'css-print-styles'],
  'css-anchor-position', 'css-modal-backdrop')

# =====================================================================
# 10. MODAL BACKDROP
# =====================================================================
L('css-modal-backdrop',
  'Modal Backdrop',
  'modal — संवाद थर',
  'dialog modal आणि ::backdrop नियंत्रण.',
  [
   S('1. dialog कल्पना',
     'dialog मूळ.\n\nmodal खुला.\n\nfocus आत.\n\nखाली हटून.\n\nवापर सोपा.\n\nकोड थोडा.',
     'dialog[open] {\n  margin: auto;\n}'),
   S('2. backdrop थर',
     'मागे रंग.\n\nrgba नियंत्रण.\n\nलक्ष भाग.\n\nसंदर्भ खोल.\n\nदृश्य स्पष्ट.\n\nकोड स्वच्छ.',
     'dialog::backdrop {\n  background: rgba(15, 23, 42, 0.6);\n}'),
   S('3. आगमन थर',
     'keyframes fade.\n\nopacity हळू.\n\ntranslate वर.\n\nanimation मऊ.\n\nसजीव प्रवेश.\n\nसवय छान.',
     '@keyframes fade-in {\n  from {\n    opacity: 0;\n  }\n}\ndialog[open] {\n  animation: fade-in 0.25s;\n}'),
   S('4. स्क्रोल नियम',
     ':has नवा.\n\nमागे स्क्रोल.\n\noverflow hidden.\n\nbody स्थिर.\n\nइथे दृश्य.\n\nकोड थोडा.',
     'body:has(dialog[open]) {\n  overflow: hidden;\n}'),
   S('5. रुंदी तोल',
     'min मर्यादा.\n\n90vw थर.\n\n480px खोल.\n\nरुंदी जुळते.\n\nरचना नीट.\n\nकोड स्वच्छ.',
     'dialog {\n  width: min(90vw, 480px);\n}'),
   S('6. मऊ थर',
     'backdrop-filter.\n\nblur हलका.\n\nसभोवताल मऊ.\n\nलक्ष भाग.\n\nनियम स्पष्ट.\n\nकोड सुबक.',
     'dialog::backdrop {\n  backdrop-filter: blur(4px);\n}'),
   S('Mini Project',
     'पहिला modal.\n\nएकांत थर.',
     'dialog {\n  border: 0;\n  border-radius: 14px;\n}'),
  ],
  ['dialog काय?', 'backdrop कुठे?', ':has कधी?', 'blur का?'],
  [{'q':'dialog काय?','o':['संवाद थर','मुद्रण थर','रंग थर'],'c':0},
   {'q':'::backdrop?','o':['मागे रंग','समोर ओळ','घर दरवाजा'],'c':0},
   {'q':':has नियम?','o':['स्क्रोल बंद','ध्वनी वाढ','धार काळ'],'c':0},
   {'q':'min काय?','o':['रुंदी मर्यादा','उंची खोल','नाव धार'],'c':0}],
  {'prompt':'modal कोपरे करा.','starterCode':'dialog {\n  border: 0;\n  border-radius: 14px;\n}','expectedOutput':'Rounded Marathi dialog with dimmed backdrop'},
  ['dialog vs popover?', ':has उपयोग?'],
  ['css-writing-modes', 'css-popover-tips', 'css-focus-visible'],
  'css-writing-modes', 'css-focus-visible')

# =====================================================================
# 11. FOCUS VISIBLE
# =====================================================================
L('css-focus-visible',
  'Focus Visible',
  'focus-visible — फोकस रिंग',
  'कीबोर्ड फोकस स्पष्ट दाखवणे.',
  [
   S('1. फोकस कल्पना',
     'फोकस खास.\n\nkeyboard मार्ग.\n\nनियम वेगळे.\n\nरिंग दिसे.\n\nप्रवेश्यता वाढ.\n\nवापर सोपा.',
     ':focus-visible {\n  outline: 3px solid;\n  outline-offset: 2px;\n}'),
   S('2. दुवा थर',
     'दुवा फोकस.\n\nरिंग नीट.\n\nओळ स्पष्ट.\n\nवाचक शोध.\n\nनियम नेमका.\n\nकोड थोडा.',
     'a:focus-visible {\n  outline: 2px solid #4f46e5;\n}'),
   S('3. बटण वलय',
     'button रिंग.\n\noffset बाहेर.\n\nसावली मऊ.\n\nदृश्य ठळक.\n\nप्रवेश सुख.\n\nकोड स्वच्छ.',
     '.btn:focus-visible {\n  outline: 3px solid #7c3aed;\n  box-shadow: 0 0 0 4px #ede9fe;\n}'),
   S('4. दुहेरी नियम',
     'focus हा.\n\nfocus-visible उपयोग.\n\nmouse नको.\n\noutline none.\n\nगोंधळ टाळा.\n\nसवय योग्य.',
     ':focus:not(:focus-visible) {\n  outline: none;\n}'),
   S('5. विरोध तोल',
     'रंग दिसे.\n\ncontrast जपा.\n\nहिरवा स्पष्ट.\n\nवाचक सुख.\n\nआधार मजबूत.\n\nकोड थोडा.',
     ':focus-visible {\n  outline-color: #d97706;\n}'),
   S('6. सुसंगतता',
     '@supports selector.\n\nअसेल तर दे.\n\nनसेल जुना.\n\nसर्व ब्राउझर.\n\nनियम कडक.\n\nकोड सुबक.',
     '@supports selector(:focus-visible) {\n  a:focus-visible {\n    outline: 2px solid;\n  }\n}'),
   S('Mini Project',
     'रिंग वलय.\n\nएक नियम.',
     '.menu:focus-visible {\n  outline: 3px solid #dc2626;\n}'),
  ],
  ['focus-visible कधी?', 'mouse वर?', '@supports का?', 'contrast कशी?'],
  [{'q':'focus-visible काय?','o':['कीबोर्ड रिंग','माऊस रिंग','रंग वाढ'],'c':0},
   {'q':'outline कुठे?','o':['सीमेत बाहेर','मध्ये','आत'],'c':0},
   {'q':'selector support?','o':['@supports','@media','@import'],'c':0},
   {'q':'not rule काय?','o':['माऊस ठिकठीक','सगळे अंधार','नवीन रंग'],'c':0}],
  {'prompt':'दुवा रिंग करा.','starterCode':'a:focus-visible {\n  outline: 2px solid #4f46e5;\n  outline-offset: 2px;\n}','expectedOutput':'Keyboard focus clearly ringed on Marathi page'},
  ['focus-visible महत्त्व?', 'outline-offset का?'],
  ['css-modal-backdrop', 'css-accent-color', 'css-dark-mode'],
  'css-modal-backdrop', 'css-marathi-capstone9')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone9',
  'Modern Patterns Capstone',
  'Pattern Bag — भाग संग्रह',
  'Level 9 नवीन पॅटर्न एकत्र आणणे.',
  [
   S('1. संग्रह थर',
     ':root मध्ये brand.\n\naccent-color जोडा.\n\nटोकन एक.\n\nसर्वत्र रंग.\n\nरचना स्थिर.\n\nकोड थोडा.',
     ':root {\n  --brand: #4f46e5;\n  accent-color: var(--brand);\n}'),
   S('2. मथळा थर',
     'h1 fluid.\n\nclamp नियम.\n\ncop joint.\n\nवाचन स्थिर.\n\nस्क्रीन सगळी.\n\nनियम स्पष्ट.',
     'h1 {\n  font-size: clamp(1.8rem, 4vw, 3.2rem);\n}'),
   S('3. gallery थर',
     'snap gallery.\n\nflex सरळ.\n\noverflow auto.\n\nथांबणे नीट.\n\nदृश्य सजीव.\n\nकोड स्वच्छ.',
     '.gallery {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}'),
   S('4. chip थर',
     'tint chip.\n\ncolor-mix मऊ.\n\nbrand हलका.\n\nआधार नेमका.\n\nसंतुलन छान.\n\nकोड थोडा.',
     '.chip {\n  background: color-mix(in srgb, var(--brand) 15%, white);\n}'),
   S('5. शीर्षक तोल',
     'h2 balance.\n\nओळ समान.\n\nरुंदी मर्यादा.\n\nमथळा सुबक.\n\nवाचन आराम.\n\nकोड स्वच्छ.',
     'h2,\nh3 {\n  text-wrap: balance;\n  max-width: 45ch;\n}'),
   S('6. टीप थर',
     'popover टीप.\n\nरुंदी 18rem.\n\nbackdrop मऊ.\n\nरंग शांत.\n\nकोड थोडा.\n\nवापर सोपा.',
     '[popover] {\n  width: 18rem;\n}\n[popover]::backdrop {\n  background: rgba(0, 0, 0, 0.35);\n}'),
   S('Final Project',
     'सर्व अंतिम.\n\nरिंग जोडा.',
     'a:focus-visible {\n  outline: 3px solid #4f46e5;\n  outline-offset: 2px;\n}'),
  ],
  ['Level 9 काय शिकलं?', 'accent कुठे?', 'balance कुठे?', 'final रिंग?'],
  [{'q':'Level 9 सारांश?','o':['पॅटर्न संग्रह','एकट कोड','फक्त रंग'],'c':0},
   {'q':'fluid कुठे?','o':['clamp','snap','mix'],'c':0},
   {'q':'टीप कुठे?','o':['popover','print','link'],'c':0},
   {'q':'keyboard फोकस?','o':['focus-visible','hover only','none'],'c':0}],
  {'prompt':'पॅटर्न एकत्र करा.','starterCode':':root {\n  --brand: #4f46e5;\n  accent-color: var(--brand);\n}','expectedOutput':'Modern patterns combined through Marathi component page'},
  ['तीन आवडते पॅटर्न?', 'एकत्र वापर नियम?'],
  ['css-focus-visible', 'css-popover-tips', 'css-clamp-fluid'],
  'css-focus-visible', 'css-aspect-ratio')

# =====================================================================
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
    parts.append("    levelLabel: CSS9_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 9 — Modern Patterns ===\n'
    header += 'export const CSS9_LABEL = "CSS · Level 9 — Modern Patterns";\n'
    header += '\nexport const cssLevel9: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css9_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css9_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css9_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level9.ts')
print("WROTE css-level9.ts, lines:", len(out.split(chr(10))))