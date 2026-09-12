# -*- coding: utf-8 -*-
# Generator for CSS Level 14 (Marathi): 12 lessons x 7 sections.
# Theme: Motion & Color (container queries, :has(), color-mix(), oklch,
# light-dark(), @scope, text-wrap, scroll-driven animation, view transitions,
# subgrid, prefers-* media, capstone).
# Emits src/data/tutorials/css-level14.ts.
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
# 1. CONTAINER QUERIES
# =====================================================================
L('css-container-queries',
  'Container Queries',
  'container queries — आत अनुकूलन',
  '@container ठोस नियम.',
  [
   S('1. container कल्पना',
     'container-type नियम.\n\nआत अनुकूलन.\n\n@media पेक्षा सशक्त.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.card {\n  container-type: inline-size;\n}'),
   S('2. @container नियम',
     '@container मध्ये.\n\nरुंदी पाहा.\n\niframe छान.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@container (min-width: 400px) {\n  .card {\n    flex-direction: row;\n  }\n}'),
   S('3. container-name',
     'नाव नेमके.\n\ncontainer-name नियम.\n\nलक्ष्य स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.news {\n  container: aside / inline-size;\n}'),
   S('4. style query',
     'style query.\n\n@container style.\n\nvariable तपास.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@container style(--theme: dark) {\n  .card {\n    background: #111;\n  }\n}'),
   S('5. कंडिशन नियम',
     'कंडिशन नेमकी.\n\nmin max.\n\nउंची नियम.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@container (min-width: 300px) and (max-width: 500px) {\n  .media {\n    flex-direction: column;\n  }\n}'),
   S('6. तुलना media',
     'media असते.\n\ncontainer असते.\n\nभेद स्पष्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card {\n  container-type: inline-size;\n}\n@container (min-width: 450px) {\n  .body {\n    grid-template-columns: 1fr 1fr;\n  }\n}'),
   S('Mini Project',
     'कार्ड container.\n\ntype एक.',
     '.products {\n  container-type: inline-size;\n}'),
  ],
  ['container-type काय?', '@container कुठे?', 'style query कधी?', 'name कसा?'],
  [{'q':'container-type?','o':['आत मोजणी','रंग','ध्वनी'],'c':0},
   {'q':'@container?','o':['रुंदी तपास','थर','रेखा'],'c':0},
   {'q':'container-name?','o':['नाव देणे','नवीन','क्रम'],'c':0},
   {'q':'style query?','o':['variable तपास','रंग','शोर'],'c':0}],
  {'prompt':'कार्ड container करा.','starterCode':'.products {\n  container-type: inline-size;\n}','expectedOutput':'Marathi card adapts inside its container'},
  ['container vs media?', 'style query कधी?'],
  ['css-responsive-table', 'css-fluid-typography', 'css-media-queries-basics'],
  'css-marathi-capstone13', 'css-has-selector')

# =====================================================================
# 2. HAS SELECTOR
# =====================================================================
L('css-has-selector',
  'Has Selector',
  ':has() — नवा निवडक',
  ':has() पालक निवड.',
  [
   S('1. has कल्पना',
     ':has() नियम.\n\nमुल तपास.\n\nपालक निवड.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.card:has(img) {\n  display: block;\n}'),
   S('2. :checked थर',
     ':has(:checked).\n\nनिवड स्पष्ट.\n\nrow खूण.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'tr:has(input:checked) {\n  background: #f0fdf4;\n}'),
   S('3. मेनू नियम',
     ':has(> a).\n\nथेट मुल.\n\nमेनू रंग.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'nav li:has(> ul)::after {\n  content: "\\25BE";\n}'),
   S('4. गट थर',
     ':has(:focus-within).\n\nगट उजळ.\n\nफॉर्म क्षेत्र.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.field:has(:focus-within) {\n  border-color: #0d9488;\n}'),
   S('5. कार्ड नियम',
     ':has(img).\n\nचित्र कार्ड.\n\nस्लाइड मोठा.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.slide:has(img) {\n  grid-template-columns: 1fr 1fr;\n}'),
   S('6. तुलना नियम',
     ':has(:not()).\n\nजटिल टाळा.\n\ncycle नको.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.box:has(:not(.empty)) {\n  border: 2px solid #334155;\n}'),
   S('Mini Project',
     'सूची निवड.\n\nhas एक.',
     'li:has(strong) {\n  font-weight: 700;\n}'),
  ],
  [':has काय?', ':checked कुठे?', 'थेट मुल कसा?', 'cycle टाळा कधी?'],
  [{'q':':has()?','o':['पालक निवड','रंग','ध्वनी'],'c':0},
   {'q':':checked?','o':['निवड स्थिती','थर','रेखा'],'c':0},
   {'q':'थेट मुल?','o':['> खूण','नवीन','क्रम'],'c':0},
   {'q':'cycle?','o':['टाळा जटिल','रंग','शोर'],'c':0}],
  {'prompt':'सूची निवड दाखवा.','starterCode':'li:has(strong) {\n  font-weight: 700;\n}','expectedOutput':'Marathi parent list item emphasized via :has()'},
  [':has फायदा?', 'performance धोका?'],
  ['css-focus-within', 'css-pseudo-state', 'css-forms-styling'],
  'css-container-queries', 'css-color-mix')

# =====================================================================
# 3. COLOR MIX
# =====================================================================
L('css-color-mix',
  'Color Mix',
  'color-mix — रंग मिसळ',
  'color-mix() दोन रंग.',
  [
   S('1. color-mix कल्पना',
     'color-mix() नियम.\n\nदोन रंग.\n\nप्रमाण सेट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.chip {\n  background: color-mix(in srgb, red 70%, white);\n}'),
   S('2. शेड थर',
     'hover थर.\n\nमूळ रंग.\n\nरंग मऊ.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn:hover {\n  background: color-mix(in srgb, #0d9488 85%, black);\n}'),
   S('3. किनार नियम',
     'border रंग.\n\ncolor-mix जोड.\n\nध्वनी वाढ.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.card {\n  border: 1px solid color-mix(in oklab, #0d9488 40%, white);\n}'),
   S('4. मृदू थर',
     'क्रिया स्थिती.\n\nअर्धे प्रमाण.\n\nसजीव दिसे.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn:disabled {\n  background: color-mix(in srgb, #0d9488 40%, white);\n}'),
   S('5. प्रमाण नियम',
     'प्रमाण नेमके.\n\nटक्केवारी.\n\nएक तर अंत.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.tint {\n  background: color-mix(in oklab, #155e75 60%, white);\n}'),
   S('6. आधार थर',
     'आधार नवा.\n\nजुने साधे.\n\nपडताळा नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.safe-tint {\n  background: #d9f2ee;\n}\n@supports (background: color-mix(in srgb, red, white)) {\n  .safe-tint {\n    background: color-mix(in oklab, #0d9488 20%, white);\n  }\n}'),
   S('Mini Project',
     'बटण शेड.\n\ncolor-mix एक.',
     '.btn-primary {\n  background: color-mix(in srgb, #0d9488 90%, black);\n}'),
  ],
  ['color-mix काय?', 'in srgb कुठे?', 'hover कसा?', 'प्रमाण कसे?'],
  [{'q':'color-mix()?','o':['दोन रंग मिसळ','रंग रेखा','ध्वनी'],'c':0},
   {'q':'in oklab?','o':['जागा रंग','थर','क्रम'],'c':0},
   {'q':'hover?','o':['शेड जोड','नवीन','रंग'],'c':0},
   {'q':'प्रमाण?','o':['टक्केवारी','रेखा','शोर'],'c':0}],
  {'prompt':'बटण शेड करा.','starterCode':'.btn-primary {\n  background: color-mix(in srgb, #0d9488 90%, black);\n}','expectedOutput':'Marathi button mixed shade via color-mix()'},
  ['color-mix आधार?', 'in srgb vs oklab?'],
  ['css-oklch-color', 'css-colors-background', 'css-design-system'],
  'css-has-selector', 'css-oklch-color')

# =====================================================================
# 4. OKLCH COLOR
# =====================================================================
L('css-oklch-color',
  'Oklch Color',
  'oklch — रंग जागा',
  'oklch() हलका रंग नियंत्रण.',
  [
   S('1. oklch कल्पना',
     'oklch() नियम.\n\nहलका जागा.\n\nदृश्य साम्य.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.brand {\n  color: oklch(0.7 0.15 160);\n}'),
   S('2. L थर',
     'L मूल्य नेमकी.\n\nहलका पातळी.\n\nतुलना स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.muted {\n  color: oklch(0.9 0.05 160);\n}'),
   S('3. chroma नियम',
     'C मूल्य.\n\nरंग वेगळा.\n\nखूप टाळा.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.loud {\n  color: oklch(0.6 0.25 25);\n}'),
   S('4. hue थर',
     'H प्रकार.\n\nनिळा हिरवा.\n\nक्रम नेमका.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.cool {\n  color: oklch(0.55 0.1 250);\n}'),
   S('5. मालिका नियम',
     'डार्क थर.\n\nएकच hue.\n\nटोन योग्य.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     ':root {\n  --brand: oklch(0.65 0.18 180);\n  --brand-dark: oklch(0.45 0.16 180);\n}'),
   S('6. तुलना थर',
     'hex थर.\n\noklch अगोदर.\n\nआधार साधा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     ':root {\n  --accent: #0d9488;\n}\n@supports (color: oklch(0.7 0.15 160)) {\n  :root {\n    --accent: oklch(0.65 0.18 180);\n  }\n}'),
   S('Mini Project',
     'टोन नियम.\n\noklch एक.',
     '.button {\n  background: oklch(0.65 0.18 180);\n}'),
  ],
  ['oklch काय?', 'L कुठे?', 'C काय?', 'H नियम?'],
  [{'q':'oklch()?','o':['हलका नियंत्रण','रंग रेखा','ध्वनी'],'c':0},
   {'q':'L?','o':['हलकीपणा','थर','क्रम'],'c':0},
   {'q':'C?','o':['रंग वेगळा','नवीन','रंग'],'c':0},
   {'q':'H?','o':['रंग प्रकार','रेखा','शोर'],'c':0}],
  {'prompt':'टोन मालिका करा.','starterCode':'.button {\n  background: oklch(0.65 0.18 180);\n}','expectedOutput':'Marathi tonal scale via oklch()'},
  ['oklch फायदा?', 'hex पासून बदल कधी?'],
  ['css-color-mix', 'css-design-system', 'css-root-custom'],
  'css-color-mix', 'css-light-dark')

# =====================================================================
# 5. LIGHT DARK
# =====================================================================
L('css-light-dark',
  'Light Dark',
  'light-dark — थीम नियम',
  'light-dark() रंग वातावरण.',
  [
   S('1. light-dark कल्पना',
     'color-scheme नियम.\n\nlight dark.\n\nएक मूल्य.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     ':root {\n  color-scheme: light dark;\n}\nbody {\n  background: light-dark(white, #0f172a);\n  color: light-dark(#0f172a, white);\n}'),
   S('2. फॉर्म थर',
     'फॉर्म रंग.\n\nसिस्टम थीम.\n\nकोड सोपा.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input {\n  background: light-dark(white, #1e293b);\n  color: light-dark(#0f172a, white);\n}'),
   S('3. कार्ड नियम',
     'कार्ड रंग.\n\nदोन पालट.\n\nसममूल्य.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.card {\n  background: light-dark(#ffffff, #111c2e);\n}'),
   S('4. किनार थर',
     'किनार हलका.\n\nदृश्य वेगळा.\n\nरंग तोल.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.btn {\n  border: 1px solid light-dark(#cbd5e1, #334155);\n}'),
   S('5. स्वतः नियम',
     'color-scheme ठरवा.\n\nस्वतः प्रमाण.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.\n\nदृश्य नीट.',
     ':root {\n  color-scheme: dark;\n}\nbody {\n  background: light-dark(white, #0f172a);\n}'),
   S('6. आधार थर',
     'जुने साधे.\n\nmedia तपास.\n\nपडताळा नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'body {\n  background: white;\n}\n@media (prefers-color-scheme: dark) {\n  body {\n    background: #0f172a;\n  }\n}'),
   S('Mini Project',
     'थीम स्विच.\n\nlight-dark एक.',
     ':root {\n  color-scheme: light dark;\n}\nbody {\n  background: light-dark(white, #0f172a);\n}'),
  ],
  ['color-scheme काय?', 'light-dark कुठे?', 'किनार कसा?', 'आधार कधी?'],
  [{'q':'color-scheme?','o':['थीम मर्यादा','रंग रेखा','ध्वनी'],'c':0},
   {'q':'light-dark()?','o':['दोन रंग','थर','क्रम'],'c':0},
   {'q':'किनार?','o':['दोन्ही थीम','नवीन','रंग'],'c':0},
   {'q':'जुना आधार?','o':['media साधा','रेखा','शोर'],'c':0}],
  {'prompt':'थीम प्रणाली करा.','starterCode':':root {\n  color-scheme: light dark;\n}\nbody {\n  background: light-dark(white, #0f172a);\n}','expectedOutput':'Marathi body flips with system theme'},
  ['light-dark आधार?', 'prefers पेक्षा फायदा?'],
  ['css-prefers-media', 'css-colors-background', 'css-design-system'],
  'css-oklch-color', 'css-scope-rule')

# =====================================================================
# 6. SCOPE RULE
# =====================================================================
L('css-scope-rule',
  'Scope Rule',
  '@scope — क्षेत्र नियम',
  '@scope नियम तोल.',
  [
   S('1. scope कल्पना',
     '@scope नियम.\n\nक्षेत्र स्पष्ट.\n\nबाहेर काही नाही.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@scope (.card) {\n  h2 {\n    color: #0d9488;\n  }\n}'),
   S('2. खोल थर',
     'ओळख कमी.\n\nनियम सुरक्षित.\n\nमर्यादा स्पष्ट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@scope (.list) to (.item) {\n  p {\n    margin: 0;\n  }\n}'),
   S('3. एकत्र नियम',
     '@scope एकत्र.\n\nनाव मिळते.\n\nअव्यवस्था नाही.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@scope (.teaser) {\n  .title {\n    font-size: 1.2rem;\n  }\n}'),
   S('4. आधार नियम',
     'आधार तपासा.\n\nसोपा नियम.\n\nबाहेर मर्यादा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.teaser .title {\n  font-size: 1.1rem;\n}\n@scope (.teaser) {\n  .title {\n    font-size: 1.25rem;\n  }\n}'),
   S('5. खोल थर',
     'scope nested.\n\nखोल घरटे.\n\nनियम व्यवस्थित.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@scope (.app) {\n  @scope (.panel) {\n    button {\n      width: 100%;\n    }\n  }\n}'),
   S('6. तुलना थर',
     'BEM थर.\n\nscope आधुनिक.\n\nनिवड सोपी.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card__title {\n  color: #0d9488;\n}\n@scope (.card) {\n  .title {\n    color: #0d9488;\n  }\n}'),
   S('Mini Project',
     'कार्ड scope.\n\n@scope एक.',
     '@scope (.card) {\n  h2 {\n    color: #0d9488;\n  }\n}'),
  ],
  ['@scope काय?', 'to मर्यादा?', 'nested कसा?', 'BEM तुलना?'],
  [{'q':'@scope?','o':['क्षेत्र नियम','रंग रेखा','ध्वनी'],'c':0},
   {'q':'to?','o':['शेवट मर्यादा','थर','क्रम'],'c':0},
   {'q':'nested?','o':['खोल scope','नवीन','रंग'],'c':0},
   {'q':'नाव?','o':['कमी गाळा','रेखा','शोर'],'c':0}],
  {'prompt':'कार्ड scope करा.','starterCode':'@scope (.card) {\n  h2 {\n    color: #0d9488;\n  }\n}','expectedOutput':'Marathi card styles scoped without leakage'},
  ['@scope फायदा?', 'आधार समस्या?'],
  ['css-cascade-keywords', 'css-cascade-layers', 'css-specificity-tips'],
  'css-light-dark', 'css-text-wrap')

# =====================================================================
# 7. TEXT WRAP
# =====================================================================
L('css-text-wrap',
  'Text Wrap',
  'text-wrap — ओळ तोल',
  'text-wrap balance pretty.',
  [
   S('1. balance कल्पना',
     'text-wrap balance.\n\nओळ समान.\n\nशीर्ष नीट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'h2 {\n  text-wrap: balance;\n}'),
   S('2. pretty थर',
     'text-wrap pretty.\n\nशेवट सुबक.\n\nपरिच्छेद नीट.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'p {\n  text-wrap: pretty;\n}'),
   S('3. मर्यादा नियम',
     'balance खर्च.\n\nकमी मजकूर.\n\nमोठे शीर्ष.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.hero h1 {\n  text-wrap: balance;\n}'),
   S('4. एकत्र थर',
     'typography सोपा.\n\nप्रमाण योग्य.\n\ntext-wrap जोड.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.hero {\n  max-width: 60ch;\n}\n.hero h1 {\n  text-wrap: balance;\n}'),
   S('5. आधार नियम',
     'आधार जुने.\n\nसोपा जोड.\n\nपडताळा नीट.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     'h2 {\n  text-wrap: balance;\n  overflow-wrap: normal;\n}'),
   S('6. तुलना थर',
     'normal थर.\n\nbalance नवा.\n\nकधी वापर.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'h1 {\n  text-wrap: balance;\n}\np {\n  text-wrap: pretty;\n}'),
   S('Mini Project',
     'शीर्ष सम.\n\nbalance एक.',
     '.headline {\n  text-wrap: balance;\n}'),
  ],
  ['balance काय?', 'pretty कुठे?', 'खर्च कधी?', 'आधार कसा?'],
  [{'q':'text-wrap balance?','o':['ओळ समान','रंग','ध्वनी'],'c':0},
   {'q':'pretty?','o':['शेवट सुबक','थर','क्रम'],'c':0},
   {'q':'मर्यादा?','o':['कमी मजकूर','नवीन','रंग'],'c':0},
   {'q':'जुना आधार?','o':['normal साधा','रेखा','शोर'],'c':0}],
  {'prompt':'मथळा सम करा.','starterCode':'.headline {\n  text-wrap: balance;\n}','expectedOutput':'Marathi headline breaks evenly'},
  ['balance मर्यादा?', 'कधी खर्च जास्त?'],
  ['css-typography', 'css-text-spacing', 'css-fluid-typography'],
  'css-scope-rule', 'css-scroll-driven')

# =====================================================================
# 8. SCROLL DRIVEN
# =====================================================================
L('css-scroll-driven',
  'Scroll Driven',
  'scroll timeline — स्क्रोल गती',
  'animation-timeline scroll नियम.',
  [
   S('1. scroll नियम',
     'animation-timeline.\n\nscroll source.\n\nगती जोड.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.progress {\n  animation: grow linear both;\n  animation-timeline: scroll();\n}'),
   S('2. view थर',
     'view() timeline.\n\nदृश्य स्थिती.\n\nप्रगती नेमकी.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.card {\n  animation: fade linear both;\n  animation-timeline: view();\n  animation-range: entry 10% exit 90%;\n}'),
   S('3. keyframes नियम',
     'keyframes जोड.\n\nauto मूल्ये.\n\nटोके नवे.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@keyframes grow {\n  from { scale: 0; }\n  to { scale: 1; }\n}'),
   S('4. बार नियम',
     'एक बार.\n\nशीर्ष नियम.\n\nगती स्पष्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'header .bar {\n  transform-origin: left;\n  animation: grow linear both;\n  animation-timeline: scroll();\n}'),
   S('5. range थर',
     'एंट्री मध्ये.\n\nrange नेमकी.\n\nस्लाइड मऊ.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.slide {\n  animation: rise linear both;\n  animation-timeline: view();\n  animation-range: cover 0 cover 40%;\n}'),
   S('6. आधार नियम',
     'एक टेकनिक.\n\nसोपा toggle.\n\nआधार मर्यादा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.fixed {\n  transform: scale(1);\n}\n@supports (animation-timeline: view()) {\n  .card {\n    animation: rise linear both;\n    animation-timeline: view();\n  }\n}'),
   S('Mini Project',
     'बार प्रगती.\n\nscroll एक.',
     '.progress {\n  animation: grow linear both;\n  animation-timeline: scroll();\n}'),
  ],
  ['animation-timeline?', 'view() कुठे?', 'range काय?', 'आधार कसा?'],
  [{'q':'animation-timeline?','o':['स्क्रोल नियम','रंग रेखा','ध्वनी'],'c':0},
   {'q':'view()?','o':['दृश्य स्थिती','थर','क्रम'],'c':0},
   {'q':'scroll()?','o':['स्क्रोल स्रोत','नवीन','रंग'],'c':0},
   {'q':'range?','o':['स्थान नेमके','रेखा','शोर'],'c':0}],
  {'prompt':'प्रगती बार करा.','starterCode':'.progress {\n  animation: grow linear both;\n  animation-timeline: scroll();\n}','expectedOutput':'Marathi progress bar tied to scroll'},
  ['view vs scroll timeline?', 'easing कसा?'],
  ['css-animation-easing', 'css-keyframes-tip', 'css-responsive-table'],
  'css-text-wrap', 'css-view-transitions')

# =====================================================================
# 9. VIEW TRANSITIONS
# =====================================================================
L('css-view-transitions',
  'View Transitions',
  'view transitions — थर बदल',
  'view-transition-name स्थिती.',
  [
   S('1. view कल्पना',
     'view transitions.\n\nपान बदल.\n\nसजीव थर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '::view-transition-old(root),\n::view-transition-new(root) {\n  animation-duration: 0.4s;\n}'),
   S('2. name नियम',
     'view-transition-name.\n\nमुल थर.\n\nस्वतंत्र गती.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.avatar {\n  view-transition-name: avatar;\n}'),
   S('3. सूची थर',
     'सूची नवीन.\n\nनिवड स्पष्ट.\n\nखूणपट्टी.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.selected {\n  view-transition-name: selection;\n}'),
   S('4. आधार नियम',
     'आधार साधा.\n\nविस्तार नाही.\n\nपडताळा नीट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@supports (view-transition-name: none) {\n  .avatar {\n    view-transition-name: avatar;\n  }\n}'),
   S('5. गती थर',
     'क्रिया नेमकी.\n\nथवा मऊ.\n\nवेग योग्य.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '::view-transition-group(selection) {\n  animation-duration: 0.5s;\n}'),
   S('6. तुलना थर',
     'जुने थर.\n\nview हलका.\n\nनिवड नेमकी.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.page {\n  background: white;\n}\n::view-transition-group(selection) {\n  position: absolute;\n}'),
   S('Mini Project',
     'कार्ड निवड.\n\nview एक.',
     '.card {\n  view-transition-name: card;\n}'),
  ],
  ['view transition?', 'name काय?', '@supports कधी?', 'निवड कशी?'],
  [{'q':'view-transition-name?','o':['थर नाव','रंग रेखा','ध्वनी'],'c':0},
   {'q':'::view-transition?','o':['गती थर','थर','क्रम'],'c':0},
   {'q':'@supports?','o':['आधार तपास','नवीन','रंग'],'c':0},
   {'q':'नाव बदल?','o':['स्वतंत्र गती','रेखा','शोर'],'c':0}],
  {'prompt':'कार्ड बदल करा.','starterCode':'.card {\n  view-transition-name: card;\n}','expectedOutput':'Marathi card morphs across pages'},
  ['view transitions मर्यादा?', 'नाव नेमके कधी?'],
  ['css-scroll-driven', 'css-animation-easing', 'css-keyframes-tip'],
  'css-scroll-driven', 'css-subgrid')

# =====================================================================
# 10. SUBGRID
# =====================================================================
L('css-subgrid',
  'Subgrid',
  'subgrid — खोल ग्रिड',
  'grid-template-rows subgrid.',
  [
   S('1. subgrid कल्पना',
     'subgrid नियम.\n\nमुल ग्रिड.\n\nपालक आधार.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.panel {\n  display: grid;\n  grid-template-columns: subgrid;\n}'),
   S('2. संरेखण थर',
     'स्तंभ जुळतात.\n\nसमान रुंदी.\n\nकार्ड व्यवस्थित.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.row {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n}\n.row > * {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 2;\n}'),
   S('3. पंक्ती थर',
     'पंक्ती subgrid.\n\nउंची तोल.\n\nसारणी नीट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.shelf {\n  display: grid;\n  grid-template-rows: subgrid;\n}'),
   S('4. कस्टम थर',
     'रचना साधा.\n\nभाग लक्ष्य.\n\nनियंत्रण स्पष्ट.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.dashboard {\n  display: grid;\n  grid-template-columns: subgrid;\n  gap: 1rem;\n}'),
   S('5. आधार नियम',
     'आधार जुना.\n\nसाधा फॉलबॅक.\n\nपडताळा नीट.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.panel {\n  display: grid;\n}\n@supports (grid-template-rows: subgrid) {\n  .panel {\n    grid-template-rows: subgrid;\n  }\n}'),
   S('6. तुलना थर',
     'नवीन नियम.\n\nflex तोल.\n\nकधी वापर.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card {\n  display: grid;\n  grid-template-rows: subgrid;\n  grid-row: span 3;\n}'),
   S('Mini Project',
     'सूची नीट.\n\nsubgrid एक.',
     '.card-list {\n  display: grid;\n  gap: 1rem;\n}\n.card-list .card {\n  display: grid;\n  grid-template-rows: subgrid;\n}'),
  ],
  ['subgrid काय?', 'grid-row कुठे?', 'आधार कसा?', 'subgrid कधी?'],
  [{'q':'subgrid?','o':['पालक रचना','रंग रेखा','ध्वनी'],'c':0},
   {'q':'grid-row span?','o':['उंची थर','थर','क्रम'],'c':0},
   {'q':'@supports?','o':['आधार तपास','नवीन','रंग'],'c':0},
   {'q':'subgrid rows?','o':['उंची तोल','रेखा','शोर'],'c':0}],
  {'prompt':'कार्ड subgrid करा.','starterCode':'.card-list {\n  display: grid;\n  gap: 1rem;\n}','expectedOutput':'Marathi cards align rows via subgrid'},
  ['subgrid फायदा?', 'आधार मर्यादा?'],
  ['css-grid-template', 'css-grid-auto-flow', 'css-auto-fit-fill'],
  'css-view-transitions', 'css-prefers-media')

# =====================================================================
# 11. PREFERS MEDIA
# =====================================================================
L('css-prefers-media',
  'Prefer Media',
  'prefers — वापरकर्ता नियम',
  'prefers-reduced-motion नियम.',
  [
   S('1. reduced कल्पना',
     'prefers-reduced-motion.\n\nगती हलकी.\n\nसन्मान नीट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n  }\n}'),
   S('2. contrast थर',
     'prefers-contrast.\n\nउजळ थर.\n\nवाचन सोपे.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@media (prefers-contrast: more) {\n  body {\n    filter: contrast(1.1);\n  }\n}'),
   S('3. theme नियम',
     'prefers-color-scheme.\n\nsystem थीम.\n\nस्वयं जोड.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@media (prefers-color-scheme: dark) {\n  :root {\n    --bg: #0f172a;\n    --fg: white;\n  }\n}'),
   S('4. कमी गती',
     'animation थांबवा.\n\nक्रिया स्थिर.\n\nसरकता बंद.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@media (prefers-reduced-motion: reduce) {\n  .card {\n    transition: none;\n  }\n}'),
   S('5. दोन्ही नियम',
     'दोन्ही स्थिती.\n\nनियम स्पष्ट.\n\nसन्मान सर्व.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@media (prefers-reduced-motion: no-preference) {\n  .hero {\n    animation: rise 0.6s ease-out;\n  }\n}'),
   S('6. नियम थर',
     'पुढे वापर.\n\nसर्व ठिकाणी.\n\nसाइट उजळ.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    transition: none !important;\n  }\n}'),
   S('Mini Project',
     'गती सन्मान.\n\nreduced एक.',
     '@media (prefers-reduced-motion: reduce) {\n  .banner {\n    animation: none;\n  }\n}'),
  ],
  ['prefers काय?', 'reduced कुठे?', 'contrast कधी?', 'theme कसा?'],
  [{'q':'prefers-reduced?','o':['गती कमी','रंग','ध्वनी'],'c':0},
   {'q':'no-preference?','o':['गती ठीक','थर','क्रम'],'c':0},
   {'q':'prefers-contrast?','o':['उजळ थर','नवीन','रंग'],'c':0},
   {'q':'color-scheme?','o':['थीम जोड','रेखा','शोर'],'c':0}],
  {'prompt':'गती नियम करा.','starterCode':'@media (prefers-reduced-motion: reduce) {\n  .banner {\n    animation: none;\n  }\n}','expectedOutput':'Marathi banner respects reduced motion'},
  ['reduced-motion का?', 'contrast आधार?'],
  ['css-light-dark', 'css-animation-easing', 'css-accessibility'],
  'css-subgrid', 'css-marathi-capstone14')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone14',
  'Motion Color Capstone',
  'Motion Bag — गती रंग',
  'Level 14 साधने एकत्र.',
  [
   S('1. कार्ड container',
     'container-type.\n\nआत अनुकूलन.\n\nकार्ड टिकते.\n\nकोड थोडा.\n\nरचना स्थिर.\n\nवापर सोपा.',
     '.card {\n  container-type: inline-size;\n}'),
   S('2. रंग थर',
     'oklch रंग.\n\ncolor-mix थर.\n\nमऊ नियम.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय छान.',
     '.card {\n  background: color-mix(in srgb, oklch(0.65 0.18 180) 85%, white);\n}'),
   S('3. डार्क थर',
     'light-dark जोड.\n\nथीम जुळे.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर योग्य.\n\nरचना स्थिर.',
     ':root {\n  color-scheme: light dark;\n}\n.card {\n  background: light-dark(white, #111c2e);\n}'),
   S('4. स्क्रोल थर',
     'scroll timeline.\n\nप्रगती बार.\n\nसजीव नीट.\n\nकोड स्वच्छ.\n\nरचना स्थिर.\n\nसवय छान.',
     '.bar {\n  animation: grow linear both;\n  animation-timeline: scroll();\n}'),
   S('5. संरेखित थर',
     'subgrid तोल.\n\nओळ एक.\n\nसंरेखण स्पष्ट.\n\nकोड थोडा.\n\nदृश्य नीट.\n\nवापर सोपा.',
     '.row > * {\n  grid-template-rows: subgrid;\n}'),
   S('6. गती सन्मान',
     'prefers थर.\n\nगती हलकी.\n\nसर्व आराम.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '@media (prefers-reduced-motion: reduce) {\n  .bar {\n    animation: none;\n  }\n}'),
   S('Final Project',
     'Level 14 घटक.\n\nसर्व जोड.',
     '.card {\n  container-type: inline-size;\n}\n.row > * {\n  grid-template-rows: subgrid;\n}'),
  ],
  ['container काय?', 'oklch कुठे?', 'subgrid कधी?', 'reduced नियम?'],
  [{'q':'Level 14 थीम?','o':['Motion & Color','जुना थर','रंग रेषा'],'c':0},
   {'q':'container-type?','o':['आत मोजणी','ध्वनी','क्रम'],'c':0},
   {'q':'color-mix?','o':['रंग मिसळ','रंग','शोर'],'c':0},
   {'q':'prefers-reduced?','o':['गती कमी','रेखा','थर'],'c':0}],
  {'prompt':'पोर्टल उजळ करा.','starterCode':'.card {\n  container-type: inline-size;\n}','expectedOutput':'Final motion & color patterns assembled via Marathi portal'},
  ['तीन आवडते?', 'container मर्यादा?'],
  ['css-marathi-capstone13', 'css-container-queries', 'css-oklch-color'],
  'css-prefers-media', 'css-container-queries')

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
    parts.append("    levelLabel: CSS14_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 14 — Motion & Color ===\n'
    header += 'export const CSS14_LABEL = "CSS · Level 14 — Motion & Color";\n'
    header += '\nexport const cssLevel14: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css14_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css14_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css14_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level14.ts')
print("WROTE css-level14.ts, lines:", len(out.split(chr(10))))