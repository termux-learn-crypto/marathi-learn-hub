# -*- coding: utf-8 -*-
# Generator for CSS Level 15 (Marathi): 12 lessons x 7 sections.
# Theme: Systems & Interaction (@layer, native nesting, logical properties,
# scroll snap, :focus-visible, accent-color, caret/selection, columns layout,
# dialog/backdrop, anchor positioning, @property registry, capstone).
# Emits src/data/tutorials/css-level15.ts.
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=40):
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
# 1. CASCADE LAYERS
# =====================================================================
L('css-cascade-layers',
  'Cascade Layers',
  '@layer — थर क्रम',
  '@layer क्रम नियंत्रण.',
  [
   S('1. @layer कल्पना',
     '@layer नियम.\n\nथर क्रम.\n\nspecificity साधा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@layer base, components, utilities;'),
   S('2. थर क्रम',
     '@layer base {...}.\n\nक्रम नेमका.\n\nनियम मागे.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@layer base, components;\n@layer base {\n  h1 {\n    font-size: 2rem;\n  }\n}'),
   S('3. विजय नियम',
     'थराचा क्रम.\n\nउत्तर विजय.\n\nजिंकणारा थर.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@layer components {\n  .btn {\n    color: white;\n  }\n}\n@layer base {\n  button {\n    color: black;\n  }\n}'),
   S('4. आधार थर',
     'जुना आधार.\n\n@layer बाहेर.\n\nविजय नेहमी.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn {\n  color: #0d9488;\n}\n@layer utilities {\n  .btn {\n    color: white;\n  }\n}'),
   S('5. तुलना थर',
     'specificity थर.\n\n@layer सोपा.\n\nक्रम नेमका.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@layer design, theme;\n@layer design {\n  .card {\n    background: white;\n  }\n}\n@layer theme {\n  body {\n    background: #f8fafc;\n  }\n}'),
   S('6. प्रकल्प थर',
     'क्रम घोषित.\n\nथर नावे.\n\nपुनर्लेखन सोपे.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@layer reset, base, components, utilities;\n@layer components {\n  .btn {\n    padding: 0.5rem 1rem;\n  }\n}'),
   S('Mini Project',
     'थर क्रम.\n\n@layer एक.',
     '@layer base, components;\n@layer components {\n  .btn {\n    color: white;\n  }\n}'),
  ],
  ['@layer काय?', 'क्रम कुठे?', 'आधार कसा?', '@layer कधी?'],
  [{'q':'@layer?','o':['थर क्रम','रंग','ध्वनी'],'c':0},
   {'q':'क्रम?','o':['नियम नेमका','थर','क्रम'],'c':0},
   {'q':'बाहेर थर?','o':['विजय नेहमी','नवीन','रंग'],'c':0},
   {'q':'थर नावे?','o':['व्यवस्थापन सोपे','रेखा','शोर'],'c':0}],
  {'prompt':'थर क्रम करा.','starterCode':'@layer base, components;\n@layer components {\n  .btn {\n    color: white;\n  }\n}','expectedOutput':'Marathi layer order wins predictably'},
  ['@layer फायदा?', 'specificity पेक्षा?'],
  ['css-cascade-keywords', 'css-scope-rule', 'css-specificity-tips'],
  'css-marathi-capstone14', 'css-native-nesting')

# =====================================================================
# 2. NATIVE NESTING
# =====================================================================
L('css-native-nesting',
  'Native Nesting',
  'nesting — घरटे नियम',
  '& चिन्ह घरटे.',
  [
   S('1. nesting कल्पना',
     'CSS nesting.\n\n& चिन्ह.\n\nमुल शैली.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.card {\n  & h2 {\n    color: #0d9488;\n  }\n}'),
   S('2. & चिन्ह',
     '& पालक.\n\nसोपे वाचन.\n\nरचना स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn {\n  &:hover {\n    background: #0f766e;\n  }\n}'),
   S('3. खोल घरटे',
     'खोल घरटे.\n\nएकाच ठिकाणी.\n\nनियम एकत्र.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.nav {\n  ul {\n    li {\n      a {\n        color: #334155;\n      }\n    }\n  }\n}'),
   S('4. प्लेसहोल्ड',
     'प्लेसहोल्ड.\n\nतारा नियम.\n\nसोपे जोड.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.icon {\n  &:is(svg) {\n    width: 1rem;\n  }\n}'),
   S('5. माध्यम घरटे',
     'media घरटे.\n\nscope स्पष्ट.\n\nमर्यादा पाळा.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.card {\n  @media (min-width: 600px) {\n    display: flex;\n  }\n}'),
   S('6. आधार थर',
     'आधार जुना.\n\n@media तपासा.\n\nसाधा नियम.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'h2 {\n  color: #0d9488;\n}\n@supports (selector(&)) {\n  .card h2 {\n    color: #0d9488;\n  }\n}'),
   S('Mini Project',
     'कार्ड nesting.\n\n& एक.',
     '.card {\n  & h2 {\n    color: #0d9488;\n  }\n}'),
  ],
  ['nesting काय?', '& कुठे?', 'media कसा?', 'आधार कधी?'],
  [{'q':'nesting?','o':['मुल शैली','रंग','ध्वनी'],'c':0},
   {'q':'& चिन्ह?','o':['पालक निर्देश','थर','क्रम'],'c':0},
   {'q':'माध्यम?','o':['घरटे scope','नवीन','रंग'],'c':0},
   {'q':'जुना आधार?','o':['@supports साधा','रेखा','शोर'],'c':0}],
  {'prompt':'कार्ड nesting करा.','starterCode':'.card {\n  & h2 {\n    color: #0d9488;\n  }\n}','expectedOutput':'Marathi nested card stops repeat'},
  ['nesting फायदा?', 'preprocessor पेक्षा?'],
  ['css-scope-rule', 'css-cascade-layers', 'css-specificity-tips'],
  'css-cascade-layers', 'css-logical-properties')

# =====================================================================
# 3. LOGICAL PROPERTIES
# =====================================================================
L('css-logical-properties',
  'Logical Properties',
  'logical — दिशा नियम',
  'inline block दिशा.',
  [
   S('1. logical कल्पना',
     'logical नियम.\n\ninline दिशा.\n\nblock दिशा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.box {\n  margin-inline: auto;\n}'),
   S('2. किनार थर',
     'margin-inline.\n\nदोन्ही बाजू.\n\nसोपा क्रम.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.media {\n  padding-inline: 1rem;\n  padding-block: 0.5rem;\n}'),
   S('3. text दिशा',
     'text-start.\n\nउजवी बाजू.\n\nदिशा नेमकी.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.entry {\n  text-align: start;\n}'),
   S('4. खूण थर',
     'border-inline.\n\nडावी रेखा.\n\nलहान कोड.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.quote {\n  border-inline-start: 4px solid #0d9488;\n}'),
   S('5. स्थिती थर',
     'inset-inline.\n\nस्थान नेमके.\n\nदिशा पाळा.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.badge {\n  position: absolute;\n  inset-inline-end: 0.5rem;\n}'),
   S('6. तुलना थर',
     'जुने left.\n\nlogical नवा.\n\nदिशा भेद.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.box {\n  margin-left: auto;\n}\n.box-new {\n  margin-inline-start: auto;\n}'),
   S('Mini Project',
     'दिशा नियम.\n\ninline एक.',
     '.card {\n  padding-inline: 1rem;\n}'),
  ],
  ['logical काय?', 'inline कुठे?', 'block काय?', 'जुना कसा?'],
  [{'q':'logical?','o':['दिशा नियम','रंग','ध्वनी'],'c':0},
   {'q':'inline?','o':['क्षैतिज दिशा','थर','क्रम'],'c':0},
   {'q':'block?','o':['उभी दिशा','नवीन','रंग'],'c':0},
   {'q':'जुना मार्ग?','o':['left साधा','रेखा','शोर'],'c':0}],
  {'prompt':'दिशा नियम करा.','starterCode':'.card {\n  padding-inline: 1rem;\n}','expectedOutput':'Marathi card flips direction with logical props'},
  ['logical फायदा?', 'कधी वापर?'],
  ['css-box-model', 'css-media-queries-basics', 'css-typography'],
  'css-native-nesting', 'css-scroll-snap')

# =====================================================================
# 4. SCROLL SNAP
# =====================================================================
L('css-scroll-snap',
  'Scroll Snap',
  'scroll snap — स्थान थर',
  'scroll-snap-type नियम.',
  [
   S('1. snap कल्पना',
     'scroll-snap-type.\n\nस्थान नेमके.\n\nगती स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n}'),
   S('2. मुल स्थान',
     'scroll-snap-align.\n\nमुल थर.\n\nकेंद्र स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.slide {\n  scroll-snap-align: center;\n}'),
   S('3. आवश्यक थर',
     'mandatory नियम.\n\nथांबा नेमका.\n\nगती कडक.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  scroll-snap-align: start;\n}'),
   S('4. मर्यादा थर',
     'proximity मऊ.\n\nस्वाभाविक गती.\n\nआराम नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.cards {\n  scroll-snap-type: y proximity;\n}\n.card {\n  scroll-snap-align: center;\n}'),
   S('5. margin थर',
     'scroll-margin.\n\nहेडर साठी.\n\nस्थान तोल.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.card {\n  scroll-snap-align: start;\n  scroll-margin-top: 4rem;\n}'),
   S('6. आधार नियम',
     'आधार नेहमी.\n\nस्क्रोल काम.\n\nसोपे मूळ.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.gallery {\n  overflow-x: auto;\n}\n@supports (scroll-snap-type: x mandatory) {\n  .gallery {\n    scroll-snap-type: x mandatory;\n  }\n}'),
   S('Mini Project',
     'गॅलरी snap.\n\nsnap एक.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  scroll-snap-align: center;\n}'),
  ],
  ['snap काय?', 'align कुठे?', 'mandatory काय?', 'margin कधी?'],
  [{'q':'scroll-snap-type?','o':['स्थान नियम','रंग','ध्वनी'],'c':0},
   {'q':'align?','o':['मुल स्थान','थर','क्रम'],'c':0},
   {'q':'proximity?','o':['मऊ थर','नवीन','रंग'],'c':0},
   {'q':'scroll-margin?','o':['स्थान तोल','रेखा','शोर'],'c':0}],
  {'prompt':'गॅलरी snap करा.','starterCode':'.gallery {\n  scroll-snap-type: x mandatory;\n}\n.slide {\n  scroll-snap-align: center;\n}','expectedOutput':'Marathi gallery snaps to center slide'},
  ['snap फायदा?', 'proximity कधी?'],
  ['css-responsive-table', 'css-media-queries-basics', 'css-grid-template'],
  'css-logical-properties', 'css-focus-visible')

# =====================================================================
# 5. FOCUS VISIBLE
# =====================================================================
L('css-focus-visible',
  'Focus Visible',
  ':focus-visible — लक्ष थर',
  ':focus-visible दृश्य लक्ष.',
  [
   S('1. focus कल्पना',
     ':focus-visible नियम.\n\nकीबोर्ड लक्ष.\n\nदृश्य वलय.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     ':focus-visible {\n  outline: 2px solid #0d9488;\n  outline-offset: 2px;\n}'),
   S('2. भेद थर',
     ':focus प्रकार.\n\nसर्व input.\n\nवेगळा अर्थ.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input:focus {\n  border-color: #0d9488;\n}\n:focus-visible {\n  outline: 2px solid #0d9488;\n}'),
   S('3. कार्ड नियम',
     'लिंक थर.\n\nकीबोर्ड योग्य.\n\nवलय स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'a:focus-visible {\n  outline: 2px solid #0d9488;\n}'),
   S('4. बटण थर',
     'बटण लक्ष.\n\nस्पष्ट दृश्य.\n\nसहाय्य नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn:focus-visible {\n  outline: 2px solid #0d9488;\n  outline-offset: 2px;\n}'),
   S('5. सुरक्षित नियम',
     'outline टाकू नका.\n\nजुने नको.\n\nस्पष्ट वलय.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'button:focus {\n  outline: 2px solid #0d9488;\n}\nbutton:focus:not(:focus-visible) {\n  outline: none;\n}'),
   S('6. अभ्यास थर',
     'सर्व घटक.\n\nनियम एक.\n\nसुसंगत दृश्य.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     ':focus-visible {\n  outline: 2px solid #0d9488;\n  outline-offset: 2px;\n}'),
   S('Mini Project',
     'लक्ष वलय.\n\nfocus-visible एक.',
     ':focus-visible {\n  outline: 2px solid #0d9488;\n}'),
  ],
  [':focus-visible काय?', ':focus पेक्षा?', 'outline कुठे?', 'जुना नियम?'],
  [{'q':':focus-visible?','o':['कीबोर्ड लक्ष','रंग','ध्वनी'],'c':0},
   {'q':':focus?','o':['सर्व लक्ष','थर','क्रम'],'c':0},
   {'q':'outline?','o':['वलय दृश्य','नवीन','रंग'],'c':0},
   {'q':'जुना सवय?','o':['टाका नका','रेखा','शोर'],'c':0}],
  {'prompt':'लक्ष वलय करा.','starterCode':':focus-visible {\n  outline: 2px solid #0d9488;\n}','expectedOutput':'Marathi keyboard focus gets visible ring'},
  [':focus-visible फायदा?', ':focus पेक्षा भेद?'],
  ['css-pseudo-state', 'css-focus-within', 'css-accessibility'],
  'css-scroll-snap', 'css-accent-color')

# =====================================================================
# 6. ACCENT COLOR
# =====================================================================
L('css-accent-color',
  'Accent Color',
  'accent — फॉर्म रंग',
  'accent-color फॉर्म नियंत्रण.',
  [
   S('1. accent कल्पना',
     'accent-color नियम.\n\ncheckbox रंग.\n\nनियंत्रण खूण.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'input {\n  accent-color: #0d9488;\n}'),
   S('2. range थर',
     'range स्लाइड.\n\naccent जोड.\n\nथीमने समजू.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input[type="range"] {\n  accent-color: #0d9488;\n}'),
   S('3. प्रगती थर',
     'प्रगती मीटर.\n\naccent रंग.\n\nस्थिती स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'progress {\n  accent-color: #0d9488;\n}'),
   S('4. थीम नियम',
     'color-scheme जोड.\n\ndark फॉर्म.\n\nरंग तोल.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     ':root {\n  color-scheme: light dark;\n  accent-color: #0d9488;\n}'),
   S('5. एकत्र थर',
     'फॉर्म सर्व.\n\naccent एक.\n\nरंग सुसंगत.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'input, progress, range {\n  accent-color: #0d9488;\n}'),
   S('6. आधार थर',
     'आधार जुना.\n\nसोपा रंग.\n\nपडताळा नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'input[type="checkbox"] {\n  accent-color: #0d9488;\n}\n@supports (accent-color: #000) {\n  input {\n    accent-color: #0d9488;\n  }\n}'),
   S('Mini Project',
     'फॉर्म खूण.\n\naccent एक.',
     'input {\n  accent-color: #0d9488;\n}'),
  ],
  ['accent-color काय?', 'range कुठे?', 'progress कसा?', 'आधार कधी?'],
  [{'q':'accent-color?','o':['फॉर्म रंग','रंग रेखा','ध्वनी'],'c':0},
   {'q':'range?','o':['स्लाइड खूण','थर','क्रम'],'c':0},
   {'q':'progress?','o':['मीटर रंग','नवीन','रंग'],'c':0},
   {'q':'color-scheme?','o':['थीम जोड','रेखा','शोर'],'c':0}],
  {'prompt':'फॉर्म खूण करा.','starterCode':'input {\n  accent-color: #0d9488;\n}','expectedOutput':'Marathi form controls tint teal'},
  ['accent-color फायदा?', 'कुठे वापर?'],
  ['css-light-dark', 'css-pseudo-state', 'css-forms-styling'],
  'css-focus-visible', 'css-caret-selection')

# =====================================================================
# 7. CARET + SELECTION
# =====================================================================
L('css-caret-selection',
  'Caret Selection',
  'caret — निवड थर',
  'caret-color हायलाइट.',
  [
   S('1. caret कल्पना',
     'caret-color नियम.\n\nटंकित रेषा.\n\nरंग नेमका.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'input {\n  caret-color: #0d9488;\n}'),
   S('2. निवड थर',
     '::selection नियम.\n\nमजकूर रंग.\n\nहायलाइट स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '::selection {\n  background: #99f6e4;\n  color: #0f172a;\n}'),
   S('3. भाग थर',
     'निवड क्षेत्र.\n\nहेडर स्तर.\n\nरंग वेगळा.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'h1::selection {\n  background: #0d9488;\n  color: white;\n}'),
   S('4. टंकित नियम',
     'caret स्पष्ट.\n\nइनपुट खूण.\n\nसतत दिसे.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input, textarea {\n  caret-color: #0d9488;\n}'),
   S('5. मर्यादा थर',
     'निवड रंग.\n\nब्राउझर मान्य.\n\nसाधे पाळा.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'p::selection {\n  background: #ccfbf1;\n}'),
   S('6. एकत्र थर',
     'दोन्ही नियम.\n\nफॉर्म सुधार.\n\nरंग सुसंगत.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'input {\n  caret-color: #0d9488;\n}\n::selection {\n  background: #99f6e4;\n}'),
   S('Mini Project',
     'फॉर्म खूण.\n\ncaret एक.',
     'input {\n  caret-color: #0d9488;\n}\n::selection {\n  background: #99f6e4;\n}'),
  ],
  ['caret-color काय?', '::selection कुठे?', 'h1 निवड?', 'मर्यादा कधी?'],
  [{'q':'caret-color?','o':['टंकित रंग','रंग','ध्वनी'],'c':0},
   {'q':'::selection?','o':['मजकूर हायलाइट','थर','क्रम'],'c':0},
   {'q':'हायलाइट?','o':['निवड क्षेत्र','नवीन','रंग'],'c':0},
   {'q':'मर्यादा?','o':['ब्राउझर पाळा','रेखा','शोर'],'c':0}],
  {'prompt':'फॉर्म खूण करा.','starterCode':'input {\n  caret-color: #0d9488;\n}\n::selection {\n  background: #99f6e4;\n}','expectedOutput':'Marathi caret pops with matching selection'},
  ['caret फायदा?', 'selection मर्यादा?'],
  ['css-pseudo-state', 'css-text-spacing', 'css-forms-styling'],
  'css-accent-color', 'css-columns-layout')

# =====================================================================
# 8. COLUMNS LAYOUT
# =====================================================================
L('css-columns-layout',
  'Columns Layout',
  'columns — खोल स्तंभ',
  'columns मजकूर वितरण.',
  [
   S('1. columns कल्पना',
     'columns नियम.\n\nस्तंभ दोन.\n\nमजकूर वितरित.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.text {\n  columns: 2;\n}'),
   S('2. अंतर थर',
     'column-gap नियम.\n\nअंतर नेमके.\n\nवाचन सोपे.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.text {\n  columns: 2;\n  column-gap: 2rem;\n}'),
   S('3. रेषा थर',
     'column-rule नियम.\n\nरेषा नीट.\n\nभाग दिसे.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.text {\n  columns: 3;\n  column-rule: 1px solid #cbd5e1;\n}'),
   S('4. फुटणे थर',
     'break-inside नियम.\n\nकार्ड एकत्र.\n\nफुटणे नको.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  break-inside: avoid;\n}'),
   S('5. मोठे थर',
     'माध्यम जोड.\n\nस्तंभ वाढ.\n\nरेषा नेमकी.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@media (min-width: 900px) {\n  .text {\n    columns: 3;\n  }\n}'),
   S('6. तुलना थर',
     'grid तोल.\n\ncolumns हलका.\n\nमजकूर योग्य.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.news {\n  columns: 2;\n}\n.news .item {\n  break-inside: avoid;\n}'),
   S('Mini Project',
     'वृत्तपत्र स्तंभ.\n\ncolumns एक.',
     '.articles {\n  columns: 2;\n  column-gap: 2rem;\n}'),
  ],
  ['columns काय?', 'column-gap कुठे?', 'rule कसा?', 'break-inside कधी?'],
  [{'q':'columns?','o':['मजकूर वितरण','रंग','ध्वनी'],'c':0},
   {'q':'column-gap?','o':['अंतर नेमके','थर','क्रम'],'c':0},
   {'q':'column-rule?','o':['रेषा भाग','नवीन','रंग'],'c':0},
   {'q':'break-inside?','o':['फुटणे टाळा','रेखा','शोर'],'c':0}],
  {'prompt':'वृत्तपत्र स्तंभ करा.','starterCode':'.articles {\n  columns: 2;\n  column-gap: 2rem;\n}','expectedOutput':'Marathi news columns balance with inside-avoid'},
  ['columns फायदा?', 'grid पेक्षा कधी?'],
  ['css-grid-template', 'css-subgrid', 'css-responsive-table'],
  'css-caret-selection', 'css-dialog-backdrop')

# =====================================================================
# 9. DIALOG + BACKDROP
# =====================================================================
L('css-dialog-backdrop',
  'Dialog Backdrop',
  'dialog — पॉपअप थर',
  'dialog ::backdrop नियम.',
  [
   S('1. dialog कल्पना',
     'dialog नियम.\n\nshowModal मदती.\n\nपॉपअप सोपा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'dialog {\n  border: none;\n  border-radius: 12px;\n}'),
   S('2. backdrop थर',
     '::backdrop नियम.\n\nमागे रंग.\n\nलक्ष स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'dialog::backdrop {\n  background: rgb(0 0 0 / 0.4);\n}'),
   S('3. खाली थर',
     'मोठे dialog.\n\nपॅडिंग नीट.\n\nक्रम स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'dialog {\n  padding: 1.5rem;\n  max-width: min(90vw, 30rem);\n}'),
   S('4. निकट थर',
     'निवड वलय.\n\nफोकस स्पष्ट.\n\nकीबोर्ड सोपे.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'dialog:focus {\n  outline: none;\n}\ndialog :focus-visible {\n  outline: 2px solid #0d9488;\n}'),
   S('5. थीम थर',
     'backdrop मऊ.\n\nरंग नेमका.\n\nथीम जुळे.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'dialog::backdrop {\n  background: oklch(0.2 0.05 240 / 0.6);\n}'),
   S('6. आधार नियम',
     'आधार सर्व.\n\nपॉपअप पाळा.\n\nसोपे बाहेर.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@supports (backdrop-filter: blur(2px)) {\n  dialog::backdrop {\n    backdrop-filter: blur(2px);\n  }\n}'),
   S('Mini Project',
     'कार्ड dialog.\n\ndialog एक.',
     'dialog {\n  border: none;\n  border-radius: 12px;\n}\ndialog::backdrop {\n  background: rgb(0 0 0 / 0.4);\n}'),
  ],
  ['dialog काय?', '::backdrop कुठे?', 'फोकस कसा?', 'आधार कधी?'],
  [{'q':'dialog?','o':['पॉपअप थर','रंग','ध्वनी'],'c':0},
   {'q':'::backdrop?','o':['मागे रंग','थर','क्रम'],'c':0},
   {'q':'showModal?','o':['मोडल खुले','नवीन','रंग'],'c':0},
   {'q':'बाहेर नियम?','o':['सोपे पाळा','रेखा','शोर'],'c':0}],
  {'prompt':'कार्ड dialog करा.','starterCode':'dialog {\n  border: none;\n  border-radius: 12px;\n}\ndialog::backdrop {\n  background: rgb(0 0 0 / 0.4);\n}','expectedOutput':'Marathi modal opens with dim backdrop'},
  ['dialog फायदा?', 'backdrop कधी?'],
  ['css-focus-visible', 'css-anchor-positioning', 'css-forms-styling'],
  'css-columns-layout', 'css-anchor-positioning')

# =====================================================================
# 10. ANCHOR POSITIONING
# =====================================================================
L('css-anchor-positioning',
  'Anchor Positioning',
  'anchor — स्थान थर',
  'anchor() निर्देश नेमका.',
  [
   S('1. anchor कल्पना',
     'anchor-name नियम.\n\nस्थान नेमके.\n\nनिर्देश स्पष्ट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.tip {\n  position: relative;\n  anchor-name: --tip;\n}'),
   S('2. जोड थर',
     'position-area.\n\nशेजारी स्थिती.\n\nगणना सोपी.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.bubble {\n  position: absolute;\n  position-area: top center;\n}'),
   S('3. वेळोवेळी नियम',
     '@position-try.\n\nपात्र नमुने.\n\nबदल नेमका.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.bubble {\n  position-area: bottom center;\n  @position-try --above {\n    position-area: top center;\n  }\n}'),
   S('4. स्थान थर',
     'anchor() मूल्य.\n\nकोन नेमका.\n\nनिकट स्पष्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.tooltip {\n  left: anchor(--tip right);\n  top: anchor(--tip top);\n}'),
   S('5. क्षमता थर',
     'आधार तपासा.\n\nबाहेर निर्देश.\n\nसाधे मूळ.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.bubble {\n  position: fixed;\n}\n@supports (anchor-name: --tip) {\n  .bubble {\n    position: absolute;\n    position-area: bottom center;\n  }\n}'),
   S('6. पडताळा थर',
     'नवा नियम.\n\nजुने तपासा.\n\nस्थान बल.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.bubble {\n  position-area: top center;\n  @position-try --below {\n    position-area: bottom center;\n  }\n}'),
   S('Mini Project',
     'टूलटिप स्थान.\n\nanchor एक.',
     '.tip {\n  anchor-name: --tip;\n}\n.bubble {\n  position: absolute;\n  position-area: top center;\n}'),
  ],
  ['anchor-name काय?', 'position-area कुठे?', '@position-try काय?', 'anchor() कधी?'],
  [{'q':'anchor-name?','o':['स्थान नाव','रंग','ध्वनी'],'c':0},
   {'q':'position-area?','o':['शेजारी स्थिती','थर','क्रम'],'c':0},
   {'q':'@position-try?','o':['पर्याय नमुने','नवीन','रंग'],'c':0},
   {'q':'anchor()?','o':['कोन नेमका','रेखा','शोर'],'c':0}],
  {'prompt':'टूलटिप स्थान करा.','starterCode':'.tip {\n  anchor-name: --tip;\n}\n.bubble {\n  position: absolute;\n  position-area: top center;\n}','expectedOutput':'Marathi tooltip pins to its anchor'},
  ['anchor फायदा?', 'आधार स्थिती?'],
  ['css-overflow-deep', 'css-focus-visible', 'css-dialog-backdrop'],
  'css-dialog-backdrop', 'css-property-registry')

# =====================================================================
# 11. PROPERTY REGISTRY
# =====================================================================
L('css-property-registry',
  'Property Registry',
  '@property — नवा चल',
  '@property सजीव चल.',
  [
   S('1. @property कल्पना',
     '@property नियम.\n\nसजीव चल.\n\nमूल्य प्रकार.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@property --spacing {\n  syntax: "<length>";\n  inherits: false;\n  initial-value: 1rem;\n}'),
   S('2. रंग थर',
     'रंग चल.\n\nsyntax रंग.\n\ntransition सोपे.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@property --tone {\n  syntax: "<color>";\n  inherits: true;\n  initial-value: #0d9488;\n}'),
   S('3. कोन थर',
     'कोन चल.\n\nग्रेडियंट.\n\nगती नेमकी.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@property --angle {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}'),
   S('4. जोड थर',
     'चल नवा.\n\nकुठे वापर.\n\nमर्यादा स्पष्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  --spacing: 1.5rem;\n  padding: var(--spacing);\n}'),
   S('5. आधार थर',
     'आधार जुना.\n\n@supports तपास.\n\nसोपे धडे.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     ':root {\n  --tone: #0d9488;\n}\n@supports (--tone: red) {\n  .card {\n    --tone: #0f766e;\n  }\n}'),
   S('6. सजीव नियम',
     'गती जोड.\n\nव्हेरिएबल सजीव.\n\nदृश्य नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card {\n  animation: spin 2s linear infinite;\n}\n@keyframes spin {\n  to {\n    --angle: 360deg;\n  }\n}'),
   S('Mini Project',
     'सजीव चल.\n\n@property एक.',
     '@property --angle {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}\n.badge {\n  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);\n}'),
  ],
  ['@property काय?', 'syntax कुठे?', 'inherits काय?', 'सजीव चल कसा?'],
  [{'q':'@property?','o':['चल नोंदणी','रंग','ध्वनी'],'c':0},
   {'q':'syntax?','o':['मूल्य प्रकार','थर','क्रम'],'c':0},
   {'q':'inherits?','o':['वारसा नियम','नवीन','रंग'],'c':0},
   {'q':'सजीव चल?','o':['कोन गती','रेखा','शोर'],'c':0}],
  {'prompt':'सजीव चल करा.','starterCode':'@property --angle {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}\n.badge {\n  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);\n}','expectedOutput':'Marathi badge spins via registered property'},
  ['@property फायदा?', 'कुठे गरज?'],
  ['css-root-custom', 'css-animation-easing', 'css-oklch-color'],
  'css-anchor-positioning', 'css-marathi-capstone15')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone15',
  'Interaction Capstone',
  'Systems Bag — स्थिती थर',
  'Level 15 साधने एकत्र.',
  [
   S('1. थर क्रम',
     '@layer नियम.\n\nक्रम नेमका.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@layer base, components;\n@layer components {\n  .btn {\n    color: white;\n  }\n}'),
   S('2. घरटे थर',
     'nesting घरटे.\n\n& चिन्ह.\n\nसोपे वाचन.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय छान.',
     '.card {\n  & h2 {\n    color: #0d9488;\n  }\n}'),
   S('3. दिशा थर',
     'logical दिशा.\n\ninline block.\n\nरचना नीट.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर योग्य.',
     '.media {\n  padding-inline: 1rem;\n}'),
   S('4. स्थान थर',
     'snap स्थान.\n\nfocus वलय.\n\nलक्ष स्पष्ट.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n}\n:focus-visible {\n  outline: 2px solid #0d9488;\n}'),
   S('5. फॉर्म थर',
     'accent रंग.\n\ncaret नीट.\n\nनिवड स्पष्ट.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर सोपा.',
     'input {\n  accent-color: #0d9488;\n  caret-color: #0d9488;\n}'),
   S('6. सजीव थर',
     'dialog पॉपअप.\n\nanchor स्थान.\n\n@property सजीव.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय छान.',
     '@property --angle {\n  syntax: "<angle>";\n  inherits: false;\n  initial-value: 0deg;\n}\n.badge {\n  background: conic-gradient(from var(--angle), #0d9488, #99f6e4);\n}'),
   S('Final Project',
     'Level 15 घटक.\n\nसर्व जोड.',
     '@layer base, components;\n.card {\n  & h2 {\n    color: #0d9488;\n  }\n}\ninput {\n  accent-color: #0d9488;\n}'),
  ],
  ['Level 15 थीम?', '@layer काय?', 'nesting कुठे?', 'accent कधी?'],
  [{'q':'Level 15 थीम?','o':['Systems & Interaction','जुना थर','रंग रेषा'],'c':0},
   {'q':'@layer?','o':['क्रम थर','ध्वनी','क्रम'],'c':0},
   {'q':'nesting?','o':['घरटे शैली','रंग','शोर'],'c':0},
   {'q':'accent-color?','o':['फॉर्म रंग','रेखा','थर'],'c':0}],
  {'prompt':'वेब स्थिती बनवा.','starterCode':'@layer base, components;\n.card {\n  & h2 {\n    color: #0d9488;\n  }\n}','expectedOutput':'Final interaction patterns via Marathi portal'},
  ['तीन आवडते?', '@layer मर्यादा?'],
  ['css-marathi-capstone14', 'css-cascade-layers', 'css-accent-color'],
  'css-property-registry', 'css-cascade-layers')

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
    parts.append("    levelLabel: CSS15_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 15 — Systems & Interaction ===\n'
    header += 'export const CSS15_LABEL = "CSS · Level 15 — Systems & Interaction";\n'
    header += '\nexport const cssLevel15: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css15_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css15_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css15_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level15.ts')
print("WROTE css-level15.ts, lines:", len(out.split(chr(10))))