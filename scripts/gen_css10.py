# -*- coding: utf-8 -*-
# Generator for CSS Level 10 (Marathi): 12 lessons x 7 sections.
# Theme: Refined Power (is/where/not, nesting, :has, range media, viewport
# units, multi-column, motion path, filters, counters, isolation/z-index,
# SVG styling). Emits src/data/tutorials/css-level10.ts.
# Base content ~110-135 words/section, self-contained CSS code cells.
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
# 1. IS / WHERE / NOT
# =====================================================================
L('css-is-anywhere',
  'Is Where Not',
  'is-anywhere — गट निवड',
  ':is :where :not निवड सरलीकरण.',
  [
   S('1. गट कल्पना',
     'गट मिळून निवड.\n\nहा selector.\n\nअनेक शीर्षक.\n\nशैली एकच.\n\nकोड थोडा.\n\nवापर सोपा.',
     ':is(h1, h2, h3) {\n  letter-spacing: 0.02em;\n}'),
   S('2. where थर',
     'where शून्य.\n\nspecialty नाही.\n\nपुनः लिहा सोपे.\n\nनियम हलका.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     ':where(article, section) p {\n  color: #334155;\n}'),
   S('3. not नियम',
     'not वगळतो.\n\nएक गट.\n\nतयार मजकूर.\n\nरंग नेमका.\n\nसंदर्भ स्पष्ट.\n\nकोड थोडा.',
     'li:not(.done) {\n  color: #dc2626;\n}'),
   S('4. सर्वोत्तम',
     'specificity जपा.\n\nis प्रभाव.\n\nविरोध योग्य.\n\nरचना नेमकी.\n\nकोड स्वच्छ.\n\nवापर नेमका.',
     '.card :is(h2, p) {\n  margin-inline: 0;\n}'),
   S('5. सर्व गट',
     'अनेक tags.\n\nकर्सर चिन्ह.\n\nक्रिया स्पष्ट.\n\nदृश्य सजीव.\n\nनियम नेमका.\n\nसवय योग्य.',
     ':is(button, a[href]) {\n  cursor: pointer;\n}'),
   S('6. वाचन सुधार',
     'साडे ओळीं.\n\nline-height नीट.\n\nवाचन आराम.\n\nजागा तोल.\n\nशैली साधी.\n\nकोड थोडा.',
     ':where(p, li) {\n  line-height: 1.6;\n}'),
   S('Mini Project',
     'दुवा गट.\n\nएक नियम.',
     ':is(nav, footer) a {\n  text-decoration: none;\n}'),
  ],
  ['is कधी वापराल?', 'where फरक काय?', 'not कसे?', 'cursor कुठे?'],
  [{'q':':is() काय?','o':['गट निवड','रंग नियम','ध्वनी गट'],'c':0},
   {'q':':where फरक?','o':['विशेषता शून्य','विशेषता वाढ','काहीच नाही'],'c':0},
   {'q':':not काय?','o':['वगळणे','जोडणे','रंगवणे'],'c':0},
   {'q':'cursor कुठे?','o':['button','body','html'],'c':0}],
  {'prompt':'मथळे गट करा.','starterCode':':is(h1, h2) {\n  letter-spacing: 0.02em;\n}','expectedOutput':'Headings grouped uniformly on Marathi page'},
  ['is vs where फरक?', 'specificity कशी साधायची?'],
  ['css-has-selector', 'css-nesting-rules', 'css-counters-lab'],
  'css-marathi-capstone9', 'css-nesting-rules')

# =====================================================================
# 2. NESTING
# =====================================================================
L('css-nesting-rules',
  'Nesting Rules',
  'nesting — आत शैली',
  'CSS nesting साहाय्याने सुबक रचना.',
  [
   S('1. nesting कल्पना',
     'आतमध्ये शैली.\n\nसुबक रचना.\n\nमूळ पाहतो.\n\nकोड लहान.\n\nवाचणे सोपे.\n\nवापर सोपा.',
     'nav {\n  ul {\n    list-style: none;\n  }\n}'),
   S('2. parent थर',
     'अँपरसँड.\n\nनियम हा.\n\nआत्माशी जोड.\n\nशैली स्पष्ट.\n\nरचना नेमकी.\n\nकोड थोडा.',
     '.card {\n  & > .title {\n    color: #111827;\n  }\n}'),
   S('3. संवाद शैली',
     'hover आत.\n\nरंग बदल.\n\nक्रिया दिसे.\n\nनियम सुबक.\n\nदृश्य सजीव.\n\nकोड स्वच्छ.',
     '.btn {\n  &:hover {\n    background: #4f46e5;\n  }\n}'),
   S('4. media आत',
     'media घराच्या आत.\n\ncleanc cut.\n\nब्रेकपॉइंट जवळ.\n\nस्क्रीन तोल.\n\nरचना व्यवस्थित.\n\nकोड थोडा.',
     '.wrapper {\n  @media (width < 640px) {\n    grid-template-columns: 1fr;\n  }\n}'),
   S('5. सगळे जुळते',
     'दुवा आणि आतील.\n\nरंग शोध.\n\nनियम एक.\n\nवाचन सुबक.\n\nरचना स्थिर.\n\nसवय योग्य.',
     '.nav {\n  & a {\n    text-decoration: none;\n  }\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\nnesting नाही.\n\nतरीही शैली.\n\nसरळ लेखन.\n\nआधार दुहेरी.\n\nकोड स्वच्छ.',
     '.grid {\n  & > .item {\n    padding: 8px;\n  }\n}'),
   S('Mini Project',
     'सूची व्यवस्था.\n\nथोडी जागा.',
     '.list {\n  & li + li {\n    margin-top: 4px;\n  }\n}'),
  ],
  ['nesting फायदा?', '& कसा वापराल?', 'media आत चालते?', 'जुन्या आधार?'],
  [{'q':'nesting काय?','o':['आतमध्ये','बाहेर','नवीन'],'c':0},
   {'q':'& काय दाखवतो?','o':['parent','child','सीमा'],'c':0},
   {'q':':hover कुठे?','o':['& सोबत','नंतर','धागा'],'c':0},
   {'q':'media आत?','o':['होय','नाही','कधीच'],'c':0}],
  {'prompt':'nav list नेस्ट करा.','starterCode':'nav {\n  ul {\n    list-style: none;\n  }\n}','expectedOutput':'Nested nav styles render on Marathi page'},
  ['nesting सपोर्ट?', '& का गरजेचे?'],
  ['css-is-anywhere', 'css-has-selector', 'css-isolation-z'],
  'css-is-anywhere', 'css-has-selector')

# =====================================================================
# 3. HAS SELECTOR
# =====================================================================
L('css-has-selector',
  'Has Selector',
  'has-selector — परिस्थिती निवड',
  ':has() साहाय्याने state वरून रचना.',
  [
   S('1. has कल्पना',
     'parent नियम.\n\n:has() प्रश्न.\n\nमुलगा असेल.\n\nशैली जुळते.\n\nरचना बदल.\n\nवापर सोपा.',
     '.card:has(img) {\n  padding: 0;\n}'),
   S('2. forms साथ',
     'error जवळ.\n\nborder रंग.\n\nवापरकर्ता दिशा.\n\nचूक स्पष्ट.\n\nनियम नेमका.\n\nकोड थोडा.',
     'input:has(~ .error) {\n  border-color: #dc2626;\n}'),
   S('3. nav सूचना',
     'active मुलगा.\n\nपार्श्वभूमी जुळते.\n\naria-current.\n\nमार्ग स्पष्ट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     'nav:has(a[aria-current="page"]) {\n  background: #eef2ff;\n}'),
   S('4. गट रंग',
     'checked row.\n\noutline जोड.\n\nसज्ज स्थिती.\n\nस्पष्ट ठसा.\n\nदृश्य नीट.\n\nसवय योग्य.',
     '.row:has(.checked) {\n  outline: 2px solid #16a34a;\n}'),
   S('5. लेबल नियम',
     'required मुलगा.\n\nतारका खास.\n\ncontent छोटा.\n\nवाचक सुख.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.field:has(> input:required) label::after {\n  content: " *";\n}'),
   S('6. आधार तपास',
     '@supports selector.\n\nअसेल तर दे.\n\nनसेल साधा.\n\nआधार सुरक्षित.\n\nकोड सुबक.\n\nसवय छान.',
     '@supports selector(:has(*)) {\n  .row:has(.on) {\n    background: #f0fdf5;\n  }\n}'),
   S('Mini Project',
     'sidebar खुली.\n\nएक शिफ्ट.',
     '.app:has(.sidebar.open) main {\n  margin-left: 16px;\n}'),
  ],
  ['has काय करतो?', 'forms मध्ये कसा?', 'supports कधी?', 'aria-current कुठे?'],
  [{'q':':has() काय?','o':['parent नियम','रंग थर','ध्वनी गट'],'c':0},
   {'q':'aria-current कुठे?','o':['nav','body','html'],'c':0},
   {'q':'required label?','o':['::after','::before','::first'],'c':0},
   {'q':'@supports काय?','o':['selector','display','margin'],'c':0}],
  {'prompt':'nav active करा.','starterCode':'nav:has(a[aria-current="page"]) {\n  background: #eef2ff;\n}','expectedOutput':'Active nav highlighted on Marathi page'},
  ['has लाभ?', 'fallback कसा?'],
  ['css-is-anywhere', 'css-nesting-rules', 'css-modal-backdrop'],
  'css-nesting-rules', 'css-range-media')

# =====================================================================
# 4. RANGE MEDIA
# =====================================================================
L('css-range-media',
  'Range Media',
  'range-media — दरम्यान नियम',
  'range syntax असलेले मीडिया क्वेरी.',
  [
   S('1. range कल्पना',
     'दरम्यान तपास.\n\nदोन बिंदू.\n\nस्क्रीन आकार.\n\nनियम नेमका.\n\nवापर सोपा.\n\nकोड थोडा.',
     '@media (width >= 640px) and (width <= 1200px) {\n  body {\n    font-size: 16px;\n  }\n}'),
   S('2. छोटा नियम',
     'छोटी screen.\n\nएक column.\n\nसाधी रचना.\n\nमोबाईल सोय.\n\nदृश्य नीट.\n\nकोड स्वच्छ.',
     '@media (width <= 480px) {\n  .grid {\n    grid-template-columns: 1fr;\n  }\n}'),
   S('3. मोठा थर',
     'मोठी screen.\n\nflex दिशा.\n\nजागा मिळे.\n\nबाजू रचना.\n\nरचना स्थिर.\n\nसवय योग्य.',
     '@media (width >= 1024px) {\n  .shell {\n    display: flex;\n  }\n}'),
   S('4. नवी लेखनी',
     'एकदा बिंदू.\n\n> चिन्ह.\n\nवर्णन हलके.\n\nक्रम वाचतो.\n\nनियम स्पष्ट.\n\nकोड थोडा.',
     '@media (width > 40rem) {\n  h1 {\n    font-size: 2rem;\n  }\n}'),
   S('5. दिशा साथ',
     'portrait उभे.\n\nsidebar नको.\n\nजागा कमी.\n\nरचना नीट.\n\nदृश्य सुबक.\n\nसवय छान.',
     '@media (orientation: portrait) {\n  .side {\n    display: none;\n  }\n}'),
   S('6. संयोग नियम',
     'दोन्ही तपास.\n\nhover नाही.\n\ntap सोय.\n\nमोठे बटण.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     '@media (width <= 960px) and (hover: none) {\n  .tap {\n    min-height: 48px;\n  }\n}'),
   S('Mini Project',
     'मध्यम थर.\n\nदोन स्तंभ.',
     '@media (960px <= width <= 1280px) {\n  .banner {\n    grid-template-columns: 1fr 1fr;\n  }\n}'),
  ],
  ['range कधी वापराल?', 'portrait काय?', 'hover none कुठे?', 'to syntax कसा?'],
  [{'q':'range काय?','o':['दरम्यान','नंतर','कोठेही'],'c':0},
   {'q':'portrait काय?','o':['उभा','आडवा','तिरपा'],'c':0},
   {'q':'hover नाही कुठे?','o':['tap','mouse','scroll'],'c':0},
   {'q':'> लेखनी?','o':['नवी पद्धत','जुनी ओळ','रंग रेखा'],'c':0}],
  {'prompt':'ब्रेकपॉइंट घाला.','starterCode':'@media (width >= 640px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}','expectedOutput':'Grid adapts at breakpoint on Marathi page'},
  ['range vs जुनी लेखनी?', 'hover media उपयोग?'],
  ['css-viewport-units', 'css-multicolumn', 'css-modal-backdrop'],
  'css-has-selector', 'css-viewport-units')

# =====================================================================
# 5. VIEWPORT UNITS
# =====================================================================
L('css-viewport-units',
  'Viewport Units',
  'viewport-units — दृश्य एकके',
  'svh dvh lvh एकके mobile-friendly.',
  [
   S('1. viewport थर',
     '100vh जुना.\n\nmobile बार.\n\nउंची मिळते.\n\nरचना लवचिक.\n\nवापर सोपा.\n\nकोड थोडा.',
     '.hero {\n  min-height: 100vh;\n}'),
   S('2. लहान दृश्य',
     'svh लहान.\n\nबार वगळतो.\n\nअचूक उंची.\n\nhero नीट.\n\nनियम स्पष्ट.\n\nकोड स्वच्छ.',
     '.hero {\n  min-height: 100svh;\n}'),
   S('3. गतिशील थर',
     'dvh लवचिक.\n\nबार हलतो.\n\nउंची बदल.\n\nदृश्य संपूर्ण.\n\nरचना स्थिर.\n\nसवय छान.',
     '.hero {\n  min-height: 100dvh;\n}'),
   S('4. मोठा थर',
     'lvh मोठा.\n\nkeyboard बाहेर.\n\nजागा भरते.\n\nविचार योग्य.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.hero {\n  min-height: 100lvh;\n}'),
   S('5. तोल नियम',
     'सर्वात सुरक्षा.\n\n@supports जोड.\n\nअसेल तर dvh.\n\nनसेल svh.\n\nआधार मजबूत.\n\nकोड सुबक.',
     '.hero {\n  min-height: 100svh;\n}\n@supports (height: 100dvh) {\n  .hero {\n    min-height: 100dvh;\n  }\n}'),
   S('6. मिळके वापर',
     'पान उंची.\n\ngrid खाली.\n\nस्क्रोल नको.\n\nफुटर ठीक.\n\nरचना नेमकी.\n\nकोड थोडा.',
     '.page {\n  min-height: 100dvh;\n  display: grid;\n}'),
   S('Mini Project',
     'hero एक.\n\nsvh सोय.',
     '.hero {\n  min-height: 100svh;\n  padding: 1rem;\n}'),
  ],
  ['100vh दोष?', 'svh कधी?', 'dvh कधी?', '@supports का?'],
  [{'q':'100vh समस्या?','o':['बार','रंग','ध्वनी'],'c':0},
   {'q':'svh म्हणजे?','o':['लहान दृश्य','मोठे दृश्य','समान'],'c':0},
   {'q':'dvh काय?','o':['गतिशील','स्थिर','जुने'],'c':0},
   {'q':'lvh?','o':['मोठा','लहान','खाली'],'c':0}],
  {'prompt':'hero dvh करा.','starterCode':'.hero {\n  min-height: 100dvh;\n}','expectedOutput':'Hero fills viewport dynamically on Marathi page'},
  ['svh vs dvh फरक?', '@supports का लिहावे?'],
  ['css-range-media', 'css-filters-fx', 'css-isolation-z'],
  'css-range-media', 'css-multicolumn')

# =====================================================================
# 6. MULTI-COLUMN
# =====================================================================
L('css-multicolumn',
  'Multi-Column',
  'multicolumn — स्तंभ मजकूर',
  'columns प्रॉपर्टीने वर्तमानपत्र रचना.',
  [
   S('1. columns कल्पना',
     'स्तंभ मजकूर.\n\nमासिक रचना.\n\nआपोआप भाग.\n\nवाचन आराम.\n\nवापर सोपा.\n\nकोड थोडा.',
     '.mag {\n  columns: 3 220px;\n}'),
   S('2. अंतर नियम',
     'column-gap.\n\nमधली जागा.\n\nकड स्पष्ट.\n\nवाचन नीट.\n\nरचना सुबक.\n\nकोड स्वच्छ.',
     '.mag {\n  column-gap: 24px;\n}'),
   S('3. विभाजक थर',
     'column-rule.\n\nरेषा मध्ये.\n\nरंग हलका.\n\nमजकूर वेगळा.\n\nदृश्य नीट.\n\nसवय छान.',
     '.mag {\n  column-rule: 1px solid #cbd5e1;\n}'),
   S('4. span थर',
     'column-span.\n\nमथळा सर्व.\n\ncolumn टाकतो.\n\nरचना खुली.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.mag h2 {\n  column-span: all;\n}'),
   S('5. संतुलन',
     'column-fill.\n\nbalance मध्यम.\n\nउंची समान.\n\nओळ स्थिर.\n\nवाचन सुख.\n\nकोड स्वच्छ.',
     '.mag {\n  column-fill: balance;\n}'),
   S('6. जुळणी',
     'justify मजकूर.\n\nhyphens auto.\n\nकड सरळ.\n\nवाचन सुरळीत.\n\nरचना नेमकी.\n\nकोड थोडा.',
     '.mag {\n  text-align: justify;\n  hyphens: auto;\n}'),
   S('Mini Project',
     'वृत्तपत्र मजकूर.\n\nदोन स्तंभ.',
     '.news {\n  columns: 2;\n  column-gap: 20px;\n}'),
  ],
  ['columns कधी वापराल?', 'span काय करतो?', 'balance म्हणजे?', 'rule काय?'],
  [{'q':'columns काय?','o':['स्तंभ','रंग','स्क्रोल'],'c':0},
   {'q':'column-gap?','o':['अंतर','उंची','धार'],'c':0},
   {'q':'span सगळे?','o':['पंक्ती','कोपरा','थर'],'c':0},
   {'q':'विभाजक?','o':['column-rule','column-gap','column-fill'],'c':0}],
  {'prompt':'अनुच्छेद columns करा.','starterCode':'.mag {\n  columns: 2;\n  column-gap: 20px;\n}','expectedOutput':'Two-column Marathi article text'},
  ['columns मर्यादा?', 'span वापर कुठे?'],
  ['css-viewport-units', 'css-counters-lab', 'css-text-wrap'],
  'css-viewport-units', 'css-motion-path')

# =====================================================================
# 7. MOTION PATH
# =====================================================================
L('css-motion-path',
  'Motion Path',
  'motion-path — मार्ग गती',
  'offset-path वरून मार्गावर हालचाल.',
  [
   S('1. path कल्पना',
     'मार्ग घाला.\n\nघटक फिरतो.\n\npath चिन्ह.\n\nकोड थोडा.\n\nदृश्य सजीव.\n\nवापर सोपा.',
     '.bird {\n  offset-path: path("M 0 0 L 100 0");\n}'),
   S('2. गोल मार्ग',
     'circle आभास.\n\nकेंद्र सोय.\n\nत्रिज्या नेमकी.\n\nगती गोल.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     '.dot {\n  offset-path: circle(60px at center);\n}'),
   S('3. अंतर नियम',
     'offset-distance.\n\nटक्केवारी.\n\nप्रवास किती.\n\nस्थान स्पष्ट.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.dot {\n  offset-distance: 30%;\n}'),
   S('4. कोन थर',
     'offset-rotate.\n\nकोन जपा.\n\nअक्षर सरळ.\n\nगती नीट.\n\nदृश्य सुबक.\n\nसवय योग्य.',
     '.dot {\n  offset-rotate: 0deg;\n}'),
   S('5. सजीव चाल',
     'keyframes जोड.\n\ndistance शेवट.\n\nहालचाल गुळगुळीत.\n\nसजीव दृश्य.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@keyframes fly {\n  to {\n    offset-distance: 100%;\n  }\n}\n.bird {\n  animation: fly 3s linear infinite;\n}'),
   S('6. आधार तपास',
     '@supports path.\n\nअसेल तर मार्ग.\n\nनसेल स्थिर.\n\nआधार सुरक्षित.\n\nकोड सुबक.\n\nसवय छान.',
     '@supports (offset-path: none) {\n  .bird {\n    offset-path: path("M 0 0 L 240 0");\n  }\n}'),
   S('Mini Project',
     'उपग्रह कक्षा.\n\nगोल फिरता.',
     '.sat {\n  offset-path: circle(90px at center);\n  animation: fly 8s linear infinite;\n}'),
  ],
  ['offset-path काय?', 'offset-distance?', 'rotate कधी?', 'supports कसा?'],
  [{'q':'motion-path काय?','o':['मार्ग','रंग','फॉन्ट'],'c':0},
   {'q':'offset-distance?','o':['प्रवास','आकार','नाव'],'c':0},
   {'q':'circle कुठे?','o':['आधार','शेवट','रुंदी'],'c':0},
   {'q':'offset-rotate?','o':['कोन','गती','धार'],'c':0}],
  {'prompt':'पक्षी उडवा.','starterCode':'@keyframes fly {\n  to {\n    offset-distance: 100%;\n  }\n}','expectedOutput':'Bird animated along path on Marathi page'},
  ['path syntax काय?', 'supports आधार कसा?'],
  ['css-filters-fx', 'css-isolation-z', 'css-marathi-capstone10'],
  'css-multicolumn', 'css-filters-fx')

# =====================================================================
# 8. FILTER EFFECTS
# =====================================================================
L('css-filters-fx',
  'Filter Effects',
  'filters-fx — प्रभाव थर',
  'filter प्रॉपर्टीने रूप देणे.',
  [
   S('1. filter कल्पना',
     'प्रभाव एक.\n\nfilter नियम.\n\nराखाडी रंग.\n\nरूप नेमके.\n\nवापर सोपा.\n\nकोड थोडा.',
     '.img {\n  filter: grayscale(0.5);\n}'),
   S('2. परत रंग',
     'hover उलट.\n\nsaturate वाढ.\n\nरंग जुळतो.\n\nक्रिया स्पष्ट.\n\nदृश्य सजीव.\n\nकोड स्वच्छ.',
     '.thumb:hover {\n  filter: saturate(1.2);\n}'),
   S('3. धुके थर',
     'blur धुके.\n\nमागे सजीव.\n\nलक्ष मध्य.\n\nरचना स्पष्ट.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.blur {\n  filter: blur(8px);\n}'),
   S('4. प्रकाश',
     'brightness कमी.\n\nअंधार थर.\n\nरूप बदल.\n\nदृश्य नीट.\n\nरचना स्थिर.\n\nसवय योग्य.',
     '.dark {\n  filter: brightness(0.8);\n}'),
   S('5. अनेक प्रभाव',
     'दोन्ही एकत्र.\n\ncontrast थोडा.\n\nsepia हलका.\n\nरूप सुबक.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '.fx {\n  filter: contrast(1.1) sepia(0.2);\n}'),
   S('6. सावली थर',
     'drop-shadow.\n\nआकार सावली.\n\nआधार दिसे.\n\nखोली वाढ.\n\nकोड थोडा.\n\nसवय छान.',
     '.card {\n  filter: drop-shadow(0 8px 12px rgb(0 0 0 / 0.2));\n}'),
   S('Mini Project',
     'लोगो फिका.\n\nएक प्रभाव.',
     '.logo-muted {\n  filter: grayscale(1);\n  opacity: 0.6;\n}'),
  ],
  ['filter कधी वापराल?', 'grayscale कुठे?', 'hover कसे?', 'drop-shadow लाभ?'],
  [{'q':'filter काय?','o':['प्रभाव','रंग','मजकूर'],'c':0},
   {'q':'grayscale?','o':['राखाडी','हिरवा','निळा'],'c':0},
   {'q':'blur?','o':['धुके','तेल','धागा'],'c':0},
   {'q':'drop-shadow?','o':['सावली','रुंदी','ओळ'],'c':0}],
  {'prompt':'होवर रंग द्या.','starterCode':'.thumb:hover {\n  filter: saturate(1.2);\n}','expectedOutput':'Thumbnail saturates on hover in Marathi page'},
  ['filter गती लागते का?', 'drop-shadow फायदा?'],
  ['css-motion-path', 'css-accent-color', 'css-color-mix'],
  'css-motion-path', 'css-counters-lab')

# =====================================================================
# 9. COUNTERS
# =====================================================================
L('css-counters-lab',
  'Counters Lab',
  'counters-lab — आपोआप क्रम',
  'CSS counters ने स्वयं क्रमांक.',
  [
   S('1. counter कल्पना',
     'मोजणी नवी.\n\nreset आधी.\n\nincrement वाढ.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'ol {\n  counter-reset: item;\n}\nol li {\n  counter-increment: item;\n}'),
   S('2. दाखवणे',
     '::before जोड.\n\ncontent वाचा.\n\nक्रमांक दिसे.\n\nस्वरूप नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'ol li::before {\n  content: counter(item) ". ";\n}'),
   S('3. गोल शैली',
     'कंस व्यवस्था.\n\nस्वरूप वेगळे.\n\nवाचन स्पष्ट.\n\nरचना नेमकी.\n\nकोड थोडा.\n\nवापर योग्य.',
     'ol li::before {\n  content: "(" counter(item) ")";\n}'),
   S('4. शीर्षक क्रम',
     'sec counter.\n\nमथळा आधी.\n\nleading-zero.\n\nसंरेखन नीट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     '.sec h2::before {\n  counter-increment: sec;\n  content: counter(sec, decimal-leading-zero) " ";\n}'),
   S('5. reset नियम',
     'पटलाला reset.\n\nप्रत्येक पटल.\n\nक्रम पुन्हा.\n\nविभाग स्पष्ट.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.panel {\n  counter-reset: sec;\n}'),
   S('6. सूची रचना',
     'पायरी रंग.\n\nक्रम जुळतो.\n\nमोजणी वाढ.\n\nदृश्य नीट.\n\nरचना सुबक.\n\nसवय योग्य.',
     '.steps li {\n  counter-increment: step;\n}\n.steps li::before {\n  content: counter(step) ".";\n}'),
   S('Mini Project',
     'प्रक्रिया क्रम.\n\nआपोआप अंक.',
     '.steps li {\n  counter-increment: step;\n}\n.steps li::before {\n  content: counter(step) ". ";\n}'),
  ],
  ['counter कधी वापराल?', 'reset कुठे?', 'format काय?', '::before का?'],
  [{'q':'counter काय?','o':['मोजणी','रंग','धार'],'c':0},
   {'q':'counter-reset?','o':['शून्य','वाढ','नाव'],'c':0},
   {'q':'increment?','o':['वाढ','थांबे','फिरते'],'c':0},
   {'q':':before कुठे?','o':['दाखवणे','फिरवणे','हलवणे'],'c':0}],
  {'prompt':'पायरी क्रमांक करा.','starterCode':'.steps li {\n  counter-increment: step;\n}\n.steps li::before {\n  content: counter(step) ".";\n}','expectedOutput':'Steps auto-numbered on Marathi page'},
  ['counter vs list-style?', 'nested counter कसे?'],
  ['css-multicolumn', 'css-print-styles', 'css-is-anywhere'],
  'css-filters-fx', 'css-isolation-z')

# =====================================================================
# 10. ISOLATION / Z-INDEX
# =====================================================================
L('css-isolation-z',
  'Isolation & Z',
  'isolation-z — थर क्रम',
  'stacking contexto आणि z-index नियंत्रण.',
  [
   S('1. stack कल्पना',
     'थर क्रम.\n\nz-index अंक.\n\nसमोर मागे.\n\nरचना समजते.\n\nवापर सोपा.\n\nकोड थोडा.',
     '.front {\n  z-index: 2;\n}'),
   S('2. खोली थर',
     'isolation नवे.\n\nथर वेगळा.\n\nथर समूह.\n\nभाग स्पष्ट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.',
     '.layer {\n  isolation: isolate;\n}'),
   S('3. दरवाजा',
     'header सापेक्ष.\n\nz-index 10.\n\nओव्हरलॅप नीट.\n\nसूची वर.\n\nनियम नेमका.\n\nकोड थोडा.',
     '.header {\n  position: relative;\n  z-index: 10;\n}'),
   S('4. अलगाव',
     'isolation कापून.\n\nआतमधील थर.\n\nबाहेर जुळतो.\n\nगोंधळ टाळा.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.modal-content {\n  isolation: isolate;\n}'),
   S('5. चिकट थर',
     'sticky स्थिर.\n\nz-index एक.\n\nवर राहो.\n\nस्क्रोल नीट.\n\nदृश्य स्पष्ट.\n\nकोड थोडा.',
     '.gallery {\n  position: sticky;\n  z-index: 1;\n}'),
   S('6. कार्ड तुलना',
     'प्रत्येक card.\n\nस्वतः थर.\n\nक्रम समजतो.\n\nरचना नेमकी.\n\nनियम स्पष्ट.\n\nकोड स्वच्छ.',
     '.card {\n  position: relative;\n  z-index: 0;\n}'),
   S('Mini Project',
     'वरचा बार.\n\nsticky वर.',
     '.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}'),
  ],
  ['z-index कधी वापराल?', 'isolation काय?', 'topbar कसा?', 'sticky कुठे?'],
  [{'q':'z-index काय?','o':['थर','रंग','अक्षर'],'c':0},
   {'q':'isolation?','o':['वेगळा गट','नवीन रंग','मोठा आकार'],'c':0},
   {'q':'sticky कुठे?','o':['topbar','बॉडी','image'],'c':0},
   {'q':'z-index उच्च?','o':['समोर','मागे','आत'],'c':0}],
  {'prompt':'topbar थर करा.','starterCode':'.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}','expectedOutput':'Sticky Marathi topbar above content'},
  ['stacking context काय?', 'isolation उपयोग?'],
  ['css-svg-styles', 'css-viewport-units', 'css-marathi-capstone10'],
  'css-counters-lab', 'css-svg-styles')

# =====================================================================
# 11. SVG STYLES
# =====================================================================
L('css-svg-styles',
  'SVG Styles',
  'svg-styles — चिन्ह रंग',
  'inline SVG fill stroke सह उभे करणे.',
  [
   S('1. svg कल्पना',
     'svg inline.\n\nCSS जोडता.\n\nचिन्ह आकार.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.icon {\n  width: 24px;\n  height: 24px;\n}'),
   S('2. fill थर',
     'आतील रंग.\n\nfill नियम.\n\nचिन्ह स्पष्ट.\n\nरंग निवड.\n\nदृश्य नीट.\n\nकोड स्वच्छ.',
     '.icon {\n  fill: #4f46e5;\n}'),
   S('3. stroke नियम',
     'किनारी रेषा.\n\nstroke रंग.\n\nजाडी नेमकी.\n\nआकार ठळक.\n\nरचना सुबक.\n\nकोड थोडा.',
     '.icon {\n  stroke: #0f172a;\n  stroke-width: 1.5;\n}'),
   S('4. संवाद शैली',
     'hover रंग.\n\nचिन्ह बदल.\n\nक्रिया दिसे.\n\nपरस्पर स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.icon:hover {\n  fill: #7c3aed;\n}'),
   S('5. प्रमाण थर',
     'avatar मोठा.\n\nsvg भरा.\n\nआकार जुळतो.\n\nरचना नेमकी.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.avatar svg {\n  width: 100%;\n  height: 100%;\n}'),
   S('6. दृश्य नियम',
     'svg image.\n\ndisplay block.\n\nगॅप नको.\n\nरचना शुद्ध.\n\nनियम नेमका.\n\nकोड स्वच्छ.',
     'img[src$=".svg"] {\n  display: block;\n}'),
   S('Mini Project',
     'लोगो नीट.\n\nएक आधार.',
     '.logo {\n  display: inline-block;\n  vertical-align: middle;\n}'),
  ],
  ['svg inline का?', 'fill कुठे?', 'stroke काय?', 'hover कसे?'],
  [{'q':'fill काय?','o':['आतील रंग','धार','ध्वनी'],'c':0},
   {'q':'stroke कुठे?','o':['किनारी','मध्य','खाली'],'c':0},
   {'q':'hover कसा?','o':['संवाद','नवीन','धागा'],'c':0},
   {'q':'width सेट?','o':['आकार','नाव','थर'],'c':0}],
  {'prompt':'लोगो रंग द्या.','starterCode':'.logo {\n  fill: #4f46e5;\n}','expectedOutput':'Marathi logo icon colored via CSS'},
  ['inline svg लाभ?', 'stroke-width क्रम?'],
  ['css-isolation-z', 'css-filters-fx', 'css-accent-color'],
  'css-isolation-z', 'css-marathi-capstone10')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone10',
  'Refined Capstone',
  'Power Bag — भाग संग्रह',
  'Level 10 नवीन साधने एकत्र.',
  [
   S('1. संग्रह थर',
     'brand टोकन.\n\nमूळ ऐक्य.\n\nरंग एक.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.',
     ':root {\n  --brand: #7c3aed;\n}'),
   S('2. मथळा गट',
     'is गट एक.\n\nमथळा तोल.\n\nएक नियम.\n\nवाचन आराम.\n\nरचना नेमकी.\n\nकोड स्वच्छ.',
     ':is(h1, h2, h3) {\n  text-wrap: balance;\n}'),
   S('3. has कार्ड',
     'image कार्ड.\n\npadding शून्य.\n\nदृश्य सुबक.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nसवय छान.',
     '.card:has(img) {\n  padding: 0;\n}'),
   S('4. नवी मीडिया',
     'दोन स्तंभ.\n\nब्रेकपॉइंट.\n\nस्क्रीन मोठी.\n\nरचना बदल.\n\nकोड स्वच्छ.\n\nवापर योग्य.',
     '@media (width >= 768px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}'),
   S('5. hero उंची',
     'dvh उंची.\n\nपरफेक्ट भरणे.\n\nबार राहो.\n\nदृश्य पूर्ण.\n\nकोड थोडा.\n\nसवय छान.',
     '.hero {\n  min-height: 100dvh;\n}'),
   S('6. सूचना थर',
     'स्तंभ दोन.\n\nअंतर नेमके.\n\nवाचन सुख.\n\nरचना सुबक.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '.note {\n  columns: 2;\n  column-gap: 16px;\n}'),
   S('Final Project',
     'सर्व अंतिम.\n\nथर जोडा.',
     '.topbar {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}'),
  ],
  ['Level 10 नवे?', 'is कुठे?', 'hero उंची?', 'topbar कसा?'],
  [{'q':'Level 10 थीम?','o':['रिफाइन पॉवर','साधा रंग','जुना थर'],'c':0},
   {'q':'selectors कुठे?','o':['is has not','snap accent','clamp mix'],'c':0},
   {'q':'hero उंची?','o':['dvh','vh50','px100'],'c':0},
   {'q':'columns कुठे?','o':['अनुच्छेद','व्हिडिओ','फॉर्म'],'c':0}],
  {'prompt':'पोर्टल सुरू करा.','starterCode':':root {\n  --brand: #7c3aed;\n}','expectedOutput':'Final patterns assembled through Marathi portal'},
  ['तीन आवडते साधने?', 'z-index नियम?'],
  ['css-svg-styles', 'css-motion-path', 'css-counters-lab'],
  'css-svg-styles', 'css-is-anywhere')

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
    parts.append("    levelLabel: CSS10_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 10 — Refined Power ===\n'
    header += 'export const CSS10_LABEL = "CSS · Level 10 — Refined Power";\n'
    header += '\nexport const cssLevel10: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css10_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css10_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css10_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level10.ts')
print("WROTE css-level10.ts, lines:", len(out.split(chr(10))))