# -*- coding: utf-8 -*-
# Generator for CSS Level 7 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level7.ts. Base content ~110-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=34):
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
# 1. CUSTOM PROPERTIES
# =====================================================================
L('css-custom-props',
  'Custom Properties',
  'custom — नवीन मूल्य',
  'custom properties आणि var प्रवाह.',
  [
   S('1. custom property',
     '--brand custom property.\n\n:root वर घोषणा.\n\ndouble dash नाव.\n\nमूल्य संग्रह.\n\nप्रत्येक विचार.\n\ndynamic व्यवस्था.\n\nनाव अर्थपूर्ण.',
     ':root {\n  --brand: #6366f1;\n}'),
   S('2. var एकत्र',
     'var(--brand) वापरा.\n\nजागी मूल्य बसते.\n\nदोन वेळा लिहू नको.\n\nएकच स्रोत.\n\nसुधारणा सोपी.\n\nटीम साठी छान.',
     '.btn {\n  background: var(--brand);\n  border-color: var(--brand);\n}'),
   S('3. वारसा नियम',
     'घटकाकडून वारसा.\n\nआत बदल तर बदल.\n\nबाहेर स्थिर.\n\nरचना प्रमाण.\n\nथीम स्विच.\n\nलवचिक मूल्य.',
     '.card {\n  --radius: 12px;\n}\n.card.large {\n  --radius: 16px;\n}'),
   S('4. scope स्थान',
     'स्कोप ने मर्यादित.\n\nकंटेनर आत.\n\nउदाहरण भाग.\n\nप्रत्येक स्वतंत्र.\n\nनियम स्पष्ट.\n\nव्यवस्था साधी.',
     '.card {\n  --pad: 16px;\n  padding: var(--pad);\n}'),
   S('5. token गट',
     'tokens गट व्यवस्था.\n\nनाव नियम.\n\nरंग अंतर.\n\nएकत्र संग्रह.\n\nबदल एका जागी.\n\nदेखभाल सोपी.',
     ':root {\n  --color-ink: #0f172a;\n  --color-paper: #ffffff;\n  --space-4: 16px;\n}'),
   S('6. आधार तपास',
     'custom आधार मजबूत.\n\nजुने सर्व ब्राउझर.\n\nvar अनिवार्य.\n\nनियम सर्वत्र.\n\nसुरक्षित वापर.\n\nकोड स्वच्छ.',
     'a {\n  color: var(--brand, #6366f1);\n}'),
   S('Mini Project',
     'रूट टोकन सेट करा.\n\nएकच रंग.',
     ':root {\n  --brand: #0d9488;\n}'),
  ],
  ['--brand काय?', 'पुढे var कसे?', 'स्कोप कुठे?'],
  [{'q':'custom property?','o':['-- नाव','रंग','फॉन्ट'],'c':0},
   {'q':'var()?','o':['मूल्य','गती','आकार'],'c':0},
   {'q':':root?','o':['सर्वात वर','आत','शेवट'],'c':0},
   {'q':'वारसा?','o':['होय','नाही','काही'],'c':0}],
  {'prompt':'टोकन आधार सेट करा.','starterCode':':root { --brand: #0d9488; }','expectedOutput':'Renders theme from one custom property source'},
  'custom आधार?',
  ['css-design-tokens', 'css-var-functions', 'css-conic-radial'],
  'css-marathi-capstone6', 'css-var-functions')

# =====================================================================
# 2. VAR FUNCTIONS
# =====================================================================
L('css-var-functions',
  'Var Fallbacks',
  'var — पडझड नियम',
  'var() fallback आणि थीम स्विच.',
  [
   S('1. var गॅच',
     'var() दुसरा fallback.\n\nप्रथम value शून्य.\n\nतर fallback बसते.\n\nरंग strict.\n\nकोड नरम.\n\nवापर अचूक.',
     '.btn {\n  color: var(--ink, #0f172a);\n}'),
   S('2. रिक्त समस्या',
     'रिक्त value गंभीर.\n\nvar(,) चुकीचे.\n\nfallback रिक्त नको.\n\nकोड तपासा.\n\nसमस्या आधी.\n\nप्रॅक्टिस नियम.',
     '.btn {\n  color: var(--ink);\n}'),
   S('3. गुणधर्म अलग',
     'प्रत्येक गुणधर्म.\n\nvar एका जागी.\n\nवेगळे नियम.\n\nरंग स्वतंत्र.\n\nआकार स्वतंत्र.\n\nसंयोग सोपा.',
     '.chip {\n  background: var(--chip-bg, #f1f5f9);\n  color: var(--chip-ink, #0f172a);\n}'),
   S('4. nested जोडणी',
     'var आत var.\n\nएक दुसऱ्यातून.\n\nमूल्य प्रवाह.\n\nअंतिम गणना.\n\nजटिल शक्य.\n\nसाधे राखा.',
     ':root {\n  --accent: var(--brand, #6366f1);\n}'),
   S('5. थीम स्विच',
     'data-theme ते बदल.\n\ndark प्रकाश.\n\nvar अदलाबदल.\n\nएकच कोड.\n\nसंग्रह स्थिर.\n\nवापरकर्ता नियंत्रण.',
     ':root[data-theme="dark"] {\n  --ink: #e2e8f0;\n  --paper: #0f172a;\n}'),
   S('6. आधार तपास',
     'var आधार सर्वत्र.\n\n@property नवीन.\n\nanimation सोबत.\n\nअभ्यास सखोल.\n\nआधुनिक भाग.\n\nआधार स्थिर.',
     '@property --brand {\n  syntax: "<color>";\n  initial-value: #6366f1;\n  inherits: true;\n}'),
   S('Mini Project',
     'डार्क थीम टोकन.\n\nदोन्ही रंग.',
     ':root[data-mode="dark"] {\n  --paper: #0f172a;\n}'),
  ],
  ['fallback काय?', 'रिक्त कसे?', '@property कुठे?'],
  [{'q':'var()?','o':['वापर','नवीन','रंग'],'c':0},
   {'q':'fallback?','o':['दुसरा','पहिला','मोठा'],'c':0},
   {'q':'रिक्त value?','o':['चुकीचे','छान','सोपे'],'c':0},
   {'q':'@property?','o':['नवीन','जुने','रंग'],'c':0}],
  {'prompt':'थीम var स्विच करा.','starterCode':':root[data-theme="dark"] { --ink: #e2e8f0; }','expectedOutput':'Renders theme switched via var tokens'},
  'var उपयोग?',
  ['css-custom-props', 'css-design-tokens', 'css-calc-groove'],
  'css-custom-props', 'css-calc-groove')

# =====================================================================
# 3. CALC GROOVE
# =====================================================================
L('css-calc-groove',
  'Calc Functions',
  'calc — गणना नियम',
  'calc min max clamp fluid गणना.',
  [
   S('1. calc गणना',
     'calc() मोजते.\n\nमिश्र एकक.\n\nरुंदी उंची.\n\nब्राउझर स्वतः.\n\nस्पष्ट नियम.\n\nआधार मजबूत.',
     '.side {\n  width: calc(100% - 260px);\n}'),
   S('2. space नियम',
     'चिन्हा भोवती space.\n\nकमी अधिक.\n\nगुणाकार space नको.\n\nकोड वाचता.\n\nनियम नेमका.\n\nचुका टाळा.',
     '.box {\n  height: calc(100vh - 80px);\n}'),
   S('3. मिश्र एकक',
     'px rem em.\n\nजोड वजा.\n\nतार्किक मर्यादा.\n\nउत्तर स्पष्ट.\n\nरिझर्व मोजणे.\n\nवापर योग्य.',
     '.gap {\n  margin-inline: calc(var(--space) + 4px);\n}'),
   S('4. min max',
     'min() सर्वात लहान.\n\nmax() सर्वात मोठा.\n\nclamp() दोन्ही.\n\nfluid typography.\n\nअनुकूल आकार.\n\nआधार नवीन.',
     'h1 {\n  font-size: clamp(1.5rem, 4vw, 3rem);\n}'),
   S('5. calc आत var',
     'var आत calc.\n\nटोकन नियम.\n\nगणना प्रत्येक.\n\nएकत्र साधे.\n\nमूल्य स्पष्ट.\n\nअचूक वापर.',
     '.card {\n  padding: calc(var(--pad) * 2);\n}'),
   S('6. आधार तपास',
     'calc आधार व्यापक.\n\nजुने prefix.\n\nसामान्य वापर.\n\nmin max नवे.\n\nclamp उत्कृष्ट.\n\nसुरक्षित नियम.',
     '.fluid {\n  block-size: clamp(60px, 12vh, 120px);\n}'),
   S('Mini Project',
     'hero fluid खोली.\n\nclamp मूल्य.',
     '.hero {\n  padding: clamp(24px, 6vw, 64px);\n}'),
  ],
  ['calc काय?', 'space महत्त्व?', 'clamp कुठे?'],
  [{'q':'calc()?','o':['गणना','रंग','फॉन्ट'],'c':0},
   {'q':'space?','o':['आवश्यक','नको','रंग'],'c':0},
   {'q':'min()?','o':['लहान','मोठा','रंग'],'c':0},
   {'q':'clamp()?','o':['दोन माप','एक','तीन इ'],'c':0}],
  {'prompt':'fluid आकार clamp द्या.','starterCode':'h1 { font-size: clamp(1.5rem, 4vw, 3rem); }','expectedOutput':'Renders fluid responsive sizing'},
  'calc आधार?',
  ['css-custom-props', 'css-var-functions', 'css-container-queries'],
  'css-var-functions', 'css-keyframes-tip')

# =====================================================================
# 4. KEYFRAMES TIP
# =====================================================================
L('css-keyframes-tip',
  'Keyframe Tips',
  'keyframes — गती कल्पना',
  '@keyframes रचना आणि गती नियम.',
  [
   S('1. keyframes रचना',
     '@keyframes नाम नियम.\n\nचरण प्रवास.\n\nfrom to साधे.\n\nप्रतिशत अधिक.\n\nanimation नाम.\n\nनियम स्पष्ट.',
     '@keyframes slide {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'),
   S('2. transform गृहीत',
     'transform स्वस्त.\n\nopacity सुरळीत.\n\nmargin टाळा.\n\nlayer अचल.\n\nगती फायदा.\n\nपरफॉर्मेंस सोपा.',
     '.pop {\n  animation: slide 0.4s ease;\n}'),
   S('3. easing वेळ',
     'easing प्रत्येक.\n\nease-in-out.\n\ncubic-bezier नेमका.\n\nस्प्रिंग भास.\n\nगती नैसर्गिक.\n\nभाव व्यक्त.',
     '.bouncy {\n  animation: pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);\n}'),
   S('4. iteration दिशा',
     'iteration गुणाकार.\n\ndirection उलट.\n\nalternate दोलन.\n\nfill-mode कडा.\n\ndelay लांबन.\n\ncontrol सोपा.',
     '.blink {\n  animation: pulse 1s ease-in-out infinite alternate;\n}'),
   S('5. steps चरण',
     'steps() चरण.\n\nटिकटॉक प्रभाव.\n\nचेक ठोक.\n\nवेग शहर.\n\nकोड थोडा.\n\nदृश्य छान.',
     '.tick {\n  animation: stepy 0.6s steps(3) infinite;\n}'),
   S('6. आधार तपास',
     'keyframes आधार मजबूत.\n\nreduced थांबा.\n\nanimation none.\n\nसंवाद स्थिर.\n\nप्रवेश्यता जपा.\n\nकोड स्वच्छ.',
     '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation: none !important;\n  }\n}'),
   S('Mini Project',
     'heart pulse गती.\n\nएक नियम.',
     '.heart {\n  animation: pulse 0.8s ease-in-out infinite;\n}'),
  ],
  ['keyframes काय?', 'steps कुठे?', 'easing कसे?'],
  [{'q':'@keyframes?','o':['गती','रंग','फॉन्ट'],'c':0},
   {'q':'from?','o':['सुरुवात','शेवट','रंग'],'c':0},
   {'q':'alternate?','o':['दोलन','सरळ','थांबे'],'c':0},
   {'q':'steps()?','o':['चरण','अचूक नाही','रंग'],'c':0}],
  {'prompt':'smooth pulse तयार.','starterCode':'.heart { animation: pulse 0.8s ease-in-out infinite; }','expectedOutput':'Renders a smooth keyframe pulse'},
  'animation आधार?',
  ['css-prefers-reduced', 'css-perf-hints', 'css-view-transition'],
  'css-calc-groove', 'css-prefers-reduced')

# =====================================================================
# 5. PREFERS REDUCED
# =====================================================================
L('css-prefers-reduced',
  'Prefers Reduced',
  'prefers — प्रवेश्यता',
  'reduced movement आणि colour mood.',
  [
   S('1. media प्रश्न',
     'prefers-reduced-motion.\n\nवापरकर्ता सेटिंग.\n\nकमी गती.\n\nनियम ऐकतो.\n\nप्रवेश्यता आधार.\n\nआधुनिक सवय.',
     '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n  }\n}'),
   S('2. no-preference',
     'no-preference पर्याय.\n\nसामान्य गती.\n\nreduce ब्लॉक.\n\nगरज असल्यास.\n\nकोड दोन्ही.\n\nसुरक्षित sandbox.',
     '.tile {\n  transition: none;\n}\n@media (prefers-reduced-motion: no-preference) {\n  .tile {\n    transition: transform 0.4s;\n  }\n}'),
   S('3. color-scheme',
     'prefers-color-scheme.\n\nlight dark वाचतो.\n\nथीम स्वतः.\n\nटोकन बदल.\n\nवापरकर्ता आराम.\n\nरंग अचूक.',
     '@media (prefers-color-scheme: dark) {\n  :root {\n    --paper: #0f172a;\n    --ink: #e2e8f0;\n  }\n}'),
   S('4. contrast तपास',
     'prefers-contrast.\n\nअधिक फरक.\n\nकमी फरक.\n\nदृष्टी आराम.\n\nवाचनीयता वाढ.\n\nसाधा नियम.',
     '@media (prefers-contrast: more) {\n  .chip {\n    border: 2px solid currentColor;\n  }\n}'),
   S('5. scroll सवय',
     'scroll-behavior जोडणी.\n\nsmooth गुळगुळीत.\n\nauto थांबे.\n\nफक्त नियम.\n\nसरळ दिशा.\n\nवापर नेमका.',
     'html {\n  scroll-behavior: auto;\n}\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    scroll-behavior: smooth;\n  }\n}'),
   S('6. आधार तपास',
     'media आधार जुना.\n\nप्रत्येक ब्राउझर.\n\nवाक्य मान्य.\n\nनियम कडक.\n\nप्रवेश्यता जपा.\n\nLevel नियम.',
     '@media (prefers-reduced-motion: no-preference) {\n  .fade {\n    animation: fade-in 0.4s;\n  }\n}'),
   S('Mini Project',
     'स्क्रोल सवय लिहा.\n\nreduced मान्य.',
     '@media (prefers-reduced-motion: no-preference) {\n  html {\n    scroll-behavior: smooth;\n  }\n}'),
  ],
  ['media काय?', 'no-preference कुठे?', 'contrast कसे?'],
  [{'q':'prefers-reduced?','o':['गती','रंग','फॉन्ट'],'c':0},
   {'q':'no-preference?','o':['घेते गती','थांबवे','रंग'],'c':0},
   {'q':'color-scheme?','o':['dark light','आकार','कोन'],'c':0},
   {'q':'smooth?','o':['गुळगुळीत','कठोर','मंद'],'c':0}],
  {'prompt':'कोणास गती अधिकार.','starterCode':'@media (prefers-reduced-motion: no-preference) { html { scroll-behavior: smooth; } }','expectedOutput':'Renders reduced-motion respecting page'},
  'prefers आधार?',
  ['css-keyframes-tip', 'css-container-queries', 'css-perf-hints'],
  'css-keyframes-tip', 'css-masonry-grid')

# =====================================================================
# 6. MASONRY GRID
# =====================================================================
L('css-masonry-grid',
  'Masonry Grid',
  'masonry — रचना प्रवाह',
  'grid masonry आधार आणि उपयोग.',
  [
   S('1. masonry कल्पना',
     'grid-template-rows masonry.\n\nपिन्टेरेस्ट आकार.\n\nउंची स्वतः.\n\nrow align नको.\n\nरचना ओझे.\n\nआधार नवीन.',
     '.masonry {\n  grid-template-rows: masonry;\n}'),
   S('2. आधार fallback',
     'आधार नवीन.\n\nजुने column.\n\nसमान दृश्य.\n\nसाधा पर्याय.\n\nकोड दोन्ही.\n\nसुरक्षा वाढ.',
     '.masonry {\n  columns: 3;\n}\n@supports (grid-template-rows: masonry) {\n  .masonry {\n    columns: unset;\n  }\n}'),
   S('3. आयटम क्रम',
     'आयटम नैसर्गिक.\n\norder स्थिर.\n\nरचना प्रवाह.\n\nप्रत्येक कार्ड.\n\nतोल सुंदर.\n\nनियम सोपा.',
     '.card {\n  break-inside: avoid;\n}'),
   S('4. रुंदी नियम',
     'grid-template-columns.\n\nरुंदी समान.\n\nauto-fill flexible.\n\nमोबाइल आधी.\n\nस्क्रीन प्रत्येक.\n\nरचना लवचिक.',
     '.masonry {\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  grid-template-rows: masonry;\n}'),
   S('5. अंतर तोल',
     'gap समान.\n\nrow अंतर.\n\ncolumn अंतर.\n\nकार्ड सुबक.\n\nदृश्य शांत.\n\nकोड छोटा.',
     '.masonry {\n  gap: 16px;\n}'),
   S('6. आधार निरीक्षण',
     'masonry नवीन नियम.\n\nक्षमता तपासा.\n\nनेट प्रदर्शन.\n\nजुने column साधा.\n\nरचना टिकाव.\n\nआधार गहिरो.',
     '@supports not (grid-template-rows: masonry) {\n  .masonry {\n    columns: 3 1;\n  }\n}'),
   S('Mini Project',
     'simple gallery दोन.\n\ncolumn fallback.',
     '@supports (grid-template-rows: masonry) {\n  .gallery {\n    columns: unset;\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n    grid-template-rows: masonry;\n  }\n}'),
  ],
  ['masonry काय?', 'fallback कसे?', 'columns कुठे?'],
  [{'q':'masonry?','o':['उंची स्वतः','रंग','फॉन्ट'],'c':0},
   {'q':'@supports?','o':['तपास','रंग','आकार'],'c':0},
   {'q':'columns?','o':['जुना साधा','नवीन','रंग'],'c':0},
   {'q':'gap?','o':['अंतर','जाड','रंग'],'c':0}],
  {'prompt':'masonry gallery fallback द्या.','starterCode':'.gallery { columns: 2; }','expectedOutput':'Renders masonry grid with fallback'},
  'masonry आधार?',
  ['css-container-queries', 'css-gap-mastery', 'css-conic-radial'],
  'css-prefers-reduced', 'css-container-queries')

# =====================================================================
# 7. CONTAINER QUERIES
# =====================================================================
L('css-container-queries',
  'Container Queries',
  'container — क्वेरी युग',
  'container-type आणि @container नियम.',
  [
   S('1. container नियम',
     'container-type inline-size.\n\nकंटेनर नाव.\n\n@container प्रश्न.\n\nघटक बदल.\n\nव्यवस्था स्पष्ट.\n\nआधार नवीन.',
     '.card {\n  container-type: inline-size;\n}'),
   S('2. नामांकित',
     'container-name नाव.\n\nविशिष्ट कंटेनर.\n\nस्थान नेमके.\n\nएकत्र कंटेनर.\n\nकार्ड शैली.\n\nनियम सुबक.',
     '.feed { container-name: feed; }\n@container feed (min-width: 400px) {\n  .card {\n    display: grid;\n  }\n}'),
   S('3. सांगाडा शैली',
     'व्यापक शैली.\n\nक्वेरी काट.\n\nलहान मोठा.\n\nपुनर्वापर.\n\nफ्लेक्स ग्रिड.\n\nरचना बदल.',
     '.card {\n  container-type: inline-size;\n}\n@container (min-width: 420px) {\n  .card {\n    flex-direction: row;\n  }\n}'),
   S('4. मर्यादा सादर',
     'मीडिया क्वेरी.\n\nviewport घेते.\n\nकंटेनर निर्णय.\n\nscroll सोबत.\n\nव्यवस्था जुळते.\n\nमीडिया साधा.',
     '.note {\n  container-type: inline-size;\n}'),
   S('5. style queries',
     'style() क्वेरी.\n\nगुणधर्म मूल्य.\n\n--theme dark.\n\nशैली निर्णय.\n\nवर्ग कमी.\n\nआधुनिक सवय.',
     '@container style(--theme: dark) {\n  .card {\n    background: #0f172a;\n  }\n}'),
   S('6. आधार तपास',
     'container आधार नवीन.\n\nmedia जुना.\n\nदुहेरी साधा.\n\nप्रत्येक कंटेनर.\n\nतारा समान.\n\nकोड स्वच्छ.',
     '@supports (container-type: inline-size) {\n  .card {\n    container-type: inline-size;\n  }\n}'),
   S('Mini Project',
     'note क्वेरी लिहा.\n\nएक नियम.',
     '.note {\n  container-type: inline-size;\n}'),
  ],
  ['container काय?', 'name कुठे?', 'style कसे?'],
  [{'q':'container-type?','o':['कंटेनर','रंग','फॉन्ट'],'c':0},
   {'q':'@container?','o':['क्वेरी','गती','रंग'],'c':0},
   {'q':'inline-size?','o':['रुंदी','उंची','रंग'],'c':0},
   {'q':'style()?','o':['गुणधर्म','आकार','नाव'],'c':0}],
  {'prompt':'card क्वेरी द्या.','starterCode':'.card { container-type: inline-size; }','expectedOutput':'Renders container-query responsive card'},
  'container आधार?',
  ['css-masonry-grid', 'css-custom-props', 'css-calc-groove'],
  'css-masonry-grid', 'css-design-tokens')

# =====================================================================
# 8. DESIGN TOKENS
# =====================================================================
L('css-design-tokens',
  'Design Tokens',
  'tokens — भाषा रचना',
  'token scale आणि semantic वापर.',
  [
   S('1. tokens रचना',
     'design tokens संग्रह.\n\ncolor space.\n\ntype आकार.\n\nनाव अर्थपूर्ण.\n\nएक स्रोत.\n\nकोड स्थिर.',
     ':root {\n  --color-primary: #0d9488;\n  --space-s: 8px;\n}'),
   S('2. नाव system',
     'टोकन नाव.\n\nscale मालिका.\n\nbase 4px.\n\ngap दुपट्टा.\n\nनियम एकत्र.\n\nस्मरण सोपे.',
     ':root {\n  --space-base: 4px;\n  --space-2: 8px;\n  --space-4: 16px;\n}'),
   S('3. semantic tokens',
     'semantic नाव.\n\nउपयोग स्पष्ट.\n\nटोकन रोल.\n\nअर्थ वाहक.\n\nबदल एका जागी.\n\nव्यवस्था शुद्ध.',
     ':root {\n  --color-ink-primary: #0f172a;\n}'),
   S('4. थीम मॅप',
     'theme मॅपिंग.\n\nlight dark.\n\nएकच टोकन.\n\nवापर ठिकाणी.\n\nप्रमाण एकत्र.\n\nस्विच स्वच्छ.',
     ':root[data-theme="dark"] {\n  --surface: #0f172a;\n  --text: #e2e8f0;\n}'),
   S('5. component props',
     'component रंग.\n\nlocal override.\n\nवारसा किंवा.\n\nभाग स्वतंत्र.\n\nनियम कमी.\n\nदेखभाल छान.',
     '.badge {\n  background: var(--badge-bg, var(--color-primary));\n}'),
   S('6. आधार तपास',
     'टोकन सर्व चांगले.\n\nvar सर्वत्र.\n\natomic एकत्र.\n\nबदल स्थिर.\n\nटीम सहमत.\n\nLevel उत्तम.',
     ':root {\n  --sp-1: 4px;\n  --sp-2: 8px;\n  --sp-3: 12px;\n}'),
   S('Mini Project',
     'listing token सेट.\n\nएक रंग.',
     ':root {\n  --color-listing: #0284c7;\n}'),
  ],
  ['token काय?', 'scale कसे?', 'semantic कुठे?'],
  [{'q':'design tokens?','o':['संग्रह','रंग','गती'],'c':0},
   {'q':'scale?','o':['4px','रंग','नाव'],'c':0},
   {'q':'semantic?','o':['अर्थ','आकार','गती'],'c':0},
   {'q':'component?','o':['var जागा','केंद्र','रंग'],'c':0}],
  {'prompt':'semantic token थीम द्या.','starterCode':':root { --color-ink-primary: #0f172a; }','expectedOutput':'Renders consistent semantic tokens'},
  'tokens उपयोग?',
  ['css-custom-props', 'css-var-functions', 'css-container-queries'],
  'css-container-queries', 'css-conic-radial')

# =====================================================================
# 9. CONIC RADIAL
# =====================================================================
L('css-conic-radial',
  'Conic Radials',
  'gradient — वर्तुळ रंग',
  'conic radial आणि repeating थर.',
  [
   S('1. conic मूलभूत',
     'conic-gradient फेरा.\n\nकेंद्र ते बाजूला.\n\nकोन नियम.\n\npie भाग.\n\nअचूक रंग.\n\nसरळ वापर.',
     '.loader {\n  background: conic-gradient(#22d3ee, #0d9488);\n}'),
   S('2. टक्के थांबे',
     'from angle.\n\nटक्के स्थान.\n\nरंग थांबणे.\n\npie विभाग.\n\nडायल सुंदर.\n\nनियम नेमका.',
     '.donut {\n  background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);\n}'),
   S('3. radial थर',
     'radial-gradient.\n\nकेंद्र ते बाहेर.\n\ncircle अंडाकार.\n\nfade सॉफ्ट.\n\nग्लो प्रभाव.\n\nसंयोग छान.',
     '.glow {\n  background: radial-gradient(circle, #f97316 0%, transparent 70%);\n}'),
   S('4. कंसात थर',
     'multiple layers.\n\nrepeating जुने.\n\nmask सोबत.\n\nचेकर्ड पट्टे.\n\nआधार मध्यम.\n\nकोड स्वच्छ.',
     '.stripes {\n  background: repeating-conic-gradient(#0ea5e9 0 15deg, transparent 15deg 30deg);\n}'),
   S('5. gradient प्रोजेक्ट',
     'संयुक्त gradient.\n\nरंग गुळगुळीत.\n\nबटण उठवा.\n\nलाइन शांत.\n\nप्रत्येक थर.\n\nध्येय स्पष्ट.',
     '.fund {\n  background: linear-gradient(135deg, #f59e0b, #ef4444 45%, #8b5cf6);\n}'),
   S('6. आधार तपास',
     'conic आधार चांगला.\n\nprefix जुना webkit.\n\n@supports नाही.\n\nfallback रंग.\n\nआधार स्थिर.\n\nकोड सुरक्षित.',
     '.donut {\n  background: #e2e8f0;\n}\n@supports (background: conic-gradient(#fff 0 50%, #000 50% 100%)) {\n  .donut {\n    background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%);\n  }\n}'),
   S('Mini Project',
     'pie gradient भाग.\n\nचार टक्के.',
     '.pie {\n  background: conic-gradient(#6366f1 0 40%, #e2e8f0 40% 100%);\n}'),
  ],
  ['conic काय?', 'radial कुठे?', 'repeating कसे?'],
  [{'q':'conic-gradient?','o':['फेरा','सरळ','उंच'],'c':0},
   {'q':'pie?','o':['टक्के','रंग नाही','गती'],'c':0},
   {'q':'radial?','o':['केंद्रातून','बाजूने','रंग'],'c':0},
   {'q':'fallback?','o':['साधा रंग','सर्व','काही'],'c':0}],
  {'prompt':'donut conic द्या.','starterCode':'.donut { background: conic-gradient(#6366f1 0 25%, #e2e8f0 25% 100%); }','expectedOutput':'Renders a conic donut chart'},
  'conic आधार?',
  ['css-design-tokens', 'css-masking-clip', 'css-chaining'],
  'css-design-tokens', 'css-chaining')

# =====================================================================
# 10. CHAINING
# =====================================================================
L('css-chaining',
  'Nesting Chaining',
  'nesting — घरटी रचना',
  'nesting :has आणि @supports संयोग.',
  [
   S('1. nesting नियम',
     'CSS nesting आधुनिक.\n\n& parent स्रोत.\n\nआत शैली.\n\nकोड छोटा.\n\nवाचन सोपे.\n\nआधार नवीन.',
     '.card {\n  & h3 {\n    color: #0f172a;\n  }\n}'),
   S('2. & वापर',
     '& मार्ग सोपा.\n\n:hover & सह.\n\nमागे बदल.\n\nअचूक निवड.\n\nनियम घट्ट.\n\nवाचन स्पष्ट.',
     '.btn:hover {\n  background: #0891b2;\n}\n.btn:focus-visible {\n  outline: 2px solid #0891b2;\n}'),
   S('3. @supports एकत्रीकरण',
     '@supports ब्लॉक.\n\nक्षमता तपास.\n\nनवीन शैली.\n\nजुनी शैली.\n\nसंरक्षण स्थिर.\n\nकोड सुबक.',
     '@supports (selector(:has(*))) {\n  .card:has(h2) {\n    border-top: 3px solid #0ea5e9;\n  }\n}'),
   S('4. :has निवड',
     ':has() खास.\n\nसंबंध तपास.\n\nदुसरा घटक.\n\nस्तर सक्रिय.\n\nआधार नवीन.\n\nवापर नेमका.',
     '.nav:has(a:hover) {\n  background: #f8fafc;\n}'),
   S('5. कुल विचार',
     'nesting depth लहान.\n\nटोकन वापर.\n\nसमंजस करा.\n\nगर्द गोंधळ टाळा.\n\nशैली नेटकी.\n\nरचना स्वच्छ.',
     '.form .field:has(input:focus) {\n  outline: 2px solid #2563eb;\n}'),
   S('6. आधार तपास',
     'nesting आधार नवीन.\n\nजुना write flat.\n\n:has नवीन.\n\nmedia सोबत.\n\nगणना स्थिर.\n\nकोड वाजवी.',
     '@media (width >= 768px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}'),
   S('Mini Project',
     'has image कार्ड.\n\nएक निवड.',
     '.card:has(img) {\n  border-radius: 14px;\n}'),
  ],
  ['nesting काय?', ':has कुठे?', '@supports कसे?'],
  [{'q':'nesting?','o':['आत शैली','बाहेर','रंग'],'c':0},
   {'q':'&?','o':['parent','मुल','रंग'],'c':0},
   {'q':':has()?','o':['संबंध','आकार','गती'],'c':0},
   {'q':'@supports?','o':['तपास','नाव','रंग'],'c':0}],
  {'prompt':'card has img द्या.','starterCode':'.card:has(img) { border-radius: 14px; }','expectedOutput':'Renders chained stateful card styles'},
  'nesting आधार?',
  ['css-conic-radial', 'css-scope-rule', 'css-prefers-reduced'],
  'css-conic-radial', 'css-perf-hints')

# =====================================================================
# 11. PERF HINTS
# =====================================================================
L('css-perf-hints',
  'Perf Hints',
  'perf — तेज नियम',
  'paint composite आणि गती बचत.',
  [
   S('1. paint खर्च',
     'box-shadow जड.\n\nfilter महाग.\n\ntransform स्वस्त गती.\n\npaint थर कमी.\n\nगणना सोपी.\n\nवेळ बदल.',
     '.motion {\n  transform: translateX(0);\n}\n.button:active {\n  transform: translateY(2px);\n}'),
   S('2. layer हाताळणी',
     'will-change सोय.\n\ntransform layer.\n\nopacity स्तर.\n\nमर्यादित वापर.\n\nअनावश्यक नको.\n\nकाळजी ठेवा.',
     '.sticky-nav {\n  position: sticky;\n  will-change: transform;\n}'),
   S('3. animation गती',
     'animation steps.\n\ncontent-visibility.\n\nलांब यादी.\n\nपेंट नियंत्रण.\n\nतेज वाढ.\n\nपरफॉर्मेंस चांगली.',
     '.long-list li {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 64px;\n}'),
   S('4. layout कमी',
     'layout उंच खर्च.\n\ntop-left बदल.\n\ntransform बेटर.\n\nनवी गती.\n\nमोजणी कमी.\n\nस्पष्ट वाट.',
     '.slide {\n  transform: translateX(0);\n}\n.slide.active {\n  transform: translateX(40px);\n}'),
   S('5. contain पृथक',
     'contain layout.\n\nपृथक गणना.\n\nभाग स्थिर.\n\nइतर अलग.\n\nगणना जलद.\n\nमोठा स्क्रीन.',
     '.widget {\n  contain: layout paint;\n}'),
   S('6. DevTools सवय',
     'performance tab.\n\nrecord frame.\n\nचाचणी सर्वत्र.\n\nमोजा पहा.\n\nलक्ष्य नेमके.\n\nकोड स्वच्छ.',
     '.precise {\n  transform: translateZ(0);\n}'),
   S('Mini Project',
     'row contain द्या.\n\nतेज राखा.',
     '.row {\n  contain: layout paint;\n}'),
  ],
  ['paint काय?', 'layer कुठे?', 'transform कसे?'],
  [{'q':'box-shadow?','o':['जड','हलका','रंग'],'c':0},
   {'q':'will-change?','o':['घट्ट','नको फार','नाव'],'c':0},
   {'q':'transform?','o':['स्वस्त','महाग','रंग'],'c':0},
   {'q':'content-visibility?','o':['तेज','मंद','जड'],'c':0}],
  {'prompt':'row perf द्या.','starterCode':'.row { contain: layout paint; }','expectedOutput':'Renders fast isolated row performance'},
  'perf रहस्य?',
  ['css-keyframes-tip', 'css-contain-property', 'css-will-change'],
  'css-chaining', 'css-marathi-capstone7')

# =====================================================================
# 12. MARATHI CAPSTONE 7
# =====================================================================
L('css-marathi-capstone7',
  'Marathi Capstone 7',
  'Design Dhara — थीम संग्रह',
  'सर्व Level 7 तंत्रांचा संग्रह.',
  [
   S('1. ध्येय',
     'design system portal.\n\ntokens रचना.\n\nथीम दोन्ही.\n\ncontainer वापर.\n\nmasonry गॅलरी.\n\nरचना पूर्ण.',
     ':root {\n  --brand: #0d9488;\n  --surface: #ffffff;\n}'),
   S('2. tokens कार्य',
     'token नियम.\n\nspace scale.\n\ncolor semantic.\n\nप्रत्येक वापर.\n\nबदल एका जागी.\n\nव्यवस्था शुद्ध.',
     ':root {\n  --space-2: 8px;\n  --space-4: 16px;\n  --radius: 12px;\n}'),
   S('3. container लवचिक',
     'container क्वेरी.\n\nकार्ड बदल.\n\nरुंदी नियम.\n\nमोबाइल आधी.\n\nरचना टिकाव.\n\nदृश्य स्पष्ट.',
     '.panel {\n  container-type: inline-size;\n}'),
   S('4. font थर',
     'फॉन्ट stack.\n\nMukta सर्वत्र.\n\nNoto पर्याय.\n\nvar आकार.\n\nअक्षर शांत.\n\nवाचन व्यवस्था.',
     '.panel {\n  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;\n}'),
   S('5. masonry गॅलरी',
     'gallery भाग.\n\nलहान मोठे.\n\nगैप समान.\n\nआधार तपास.\n\nरचना सुंदर.\n\nकोड स्वच्छ.',
     '.gallery {\n  columns: 2;\n  gap: 12px;\n}\n@supports (grid-template-rows: masonry) {\n  .gallery {\n    columns: unset;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n    grid-template-rows: masonry;\n  }\n}'),
   S('6. reduced मान्य',
     'reduced honors.\n\nहलकी शैली.\n\ntransition सुरळीत.\n\nतेज स्थिर.\n\nLevel 7 पूर्ण.\n\nवारसा सोपा.',
     '@media (prefers-reduced-motion: no-preference) {\n  .panel:hover {\n    transform: translateY(-2px);\n  }\n}'),
   S('Mini Project',
     'portal जोडा.\n\nसर्व भाग.',
     '.portal {\n  display: grid;\n  gap: var(--space-4);\n}'),
  ],
  ['token कसे?', 'container कुठे?', 'masonry काय?'],
  [{'q':'dhara?','o':['संग्रह','रंग','एक'],'c':0},
   {'q':'tokens?','o':['संग्रह','गती','नाव'],'c':0},
   {'q':'container?','o':['क्वेरी','रंग','आकार'],'c':0},
   {'q':'masonry?','o':['उंची स्वतः','सरळ','जड'],'c':0}],
  {'prompt':'design portal पूर्ण.','starterCode':'.portal { display: grid; gap: var(--space-4); }','expectedOutput':'Renders polished Marathi design-system portal using Level 7 techniques'},
  'Level 7 नवीन काय?',
  ['css-perf-hints', 'css-prefers-reduced'],
  'css-perf-hints', 'css-custom-props')

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
    parts.append("    levelLabel: CSS7_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 7 — Design Systems ===\n'
    header += 'export const CSS7_LABEL = "CSS · Level 7 — Design Systems";\n'
    header += '\nexport const cssLevel7: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css7_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css7_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css7_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level7.ts')
print("WROTE css-level7.ts, lines:", len(out.split(chr(10))))