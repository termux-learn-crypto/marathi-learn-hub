# -*- coding: utf-8 -*-
# Generator for CSS Level 11 (Marathi): 12 lessons x 7 sections.
# Theme: Interaction Modes (light-dark, backdrop-filter, @starting-style,
# initial-letter, ::marker, intrinsic sizing, text-overflow, deep underline,
# form appearance, media/scripting/pointer, caret & selection, capstone).
# Emits src/data/tutorials/css-level11.ts.
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
# 1. LIGHT / DARK
# =====================================================================
L('css-light-dark',
  'Light Dark',
  'light-dark — थीम रंग',
  'color-scheme आणि light-dark() रंग निवड.',
  [
   S('1. थीम कल्पना',
     'color-scheme दोन.\n\nlight-dark() नियम.\n\nरंग जुळतात.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     ':root {\n  color-scheme: light dark;\n}'),
   S('2. रंग जोडी',
     'रंग दोन द्या.\n\nब्राउझर निवड.\n\ntheme बदल.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'body {\n  color: light-dark(#1f2937, #f4f4f5);\n  background: light-dark(#ffffff, #111827);\n}'),
   S('3. कार्ड रूप',
     'कार्ड स्वतः.\n\nअंधार रूप.\n\nborder राहो.\n\nवाचन आराम.\n\nरचना स्थिर.\n\nकोड थोडा.',
     '.card {\n  background: light-dark(#ffffff, #0f172a);\n  border: 1px solid light-dark(#e2e8f0, #334155);\n}'),
   S('4. toggle खुणा',
     'html attribute.\n\ndark class.\n\ncolor-scheme मिळे.\n\nथीम जुळते.\n\nकोड सुबक.\n\nवापर योग्य.',
     'html[data-theme="dark"] {\n  color-scheme: dark;\n}'),
   S('5. संवाद रंग',
     'दुवा बदल.\n\nhover रंग.\n\nनियम नेमका.\n\nदृश्य स्पष्ट.\n\nकोड थोडा.\n\nसवय छान.',
     '.link {\n  color: light-dark(#1d4ed8, #93c5fd);\n}'),
   S('6. आधार जुना',
     '@supports color.\n\nlight-dark() नाही.\n\nfallback नियम.\n\nआधार सुरक्षित.\n\nकोड स्वच्छ.\n\nरचना स्थिर.',
     '@supports (color: light-dark(#000, #fff)) {\n  body {\n    background: light-dark(#ffffff, #0f172a);\n  }\n}'),
   S('Mini Project',
     'थीम दोन.\n\nएक नियम.',
     ':root {\n  color-scheme: light dark;\n}\nbody {\n  background: light-dark(#ffffff, #0b1220);\n  color: light-dark(#111827, #e5e7eb);\n}'),
  ],
  ['light-dark काय?', 'color-scheme कुठे?', 'toggle कसे?', 'जुना आधार?'],
  [{'q':'light-dark काय?','o':['रंग दोन','ध्वनी','थर एक'],'c':0},
   {'q':'color-scheme कुठे?','o':[':root','body','span'],'c':0},
   {'q':'dark रूप?','o':['आपोआप','ओळ','क्रम'],'c':0},
   {'q':'fallback कसा?','o':['@supports','@media','@keyframes'],'c':0}],
  {'prompt':'थीम खुणा करा.','starterCode':':root {\n  color-scheme: light dark;\n}','expectedOutput':'Theme tokens follow Marathi page scheme'},
  ['light-dark लाभ?', 'color-scheme विस्तार?'],
  ['css-dark-mode', 'css-accent-color', 'css-marathi-capstone11'],
  'css-marathi-capstone10', 'css-backdrop-filter')

# =====================================================================
# 2. BACKDROP FILTER
# =====================================================================
L('css-backdrop-filter',
  'Backdrop Filter',
  'backdrop-filter — काच थर',
  'backdrop-filter blur सह glass effect.',
  [
   S('1. काच कल्पना',
     'backdrop-filter blur.\n\nमागे धुके.\n\nरचना नीट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य मऊ.',
     '.glass {\n  backdrop-filter: blur(8px);\n}'),
   S('2. पारभासी',
     'background सरळ.\n\nblur value.\n\nआधार ब्राउझर.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.glass {\n  background: rgba(255, 255, 255, 0.4);\n  backdrop-filter: blur(8px);\n}'),
   S('3. header थर',
     'bar वर.\n\nbackdrop blur.\n\ncontent वाचतो.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.topbar {\n  position: sticky;\n  top: 0;\n  backdrop-filter: blur(12px);\n}'),
   S('4. पटल रूप',
     'cards वर.\n\nglass panel.\n\nblur हलका.\n\nरचना दिसते.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.panel {\n  backdrop-filter: blur(6px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}'),
   S('5. वाचन थर',
     'translucent fine.\n\ntext ठळक.\n\ncontrast राखा.\n\nवाचन आराम.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.overlay {\n  background: rgba(0, 0, 0, 0.35);\n  backdrop-filter: blur(4px);\n}'),
   S('6. आधार तपास',
     '@supports नियम.\n\nनसेल साधा.\n\nमागे रंग.\n\nआधार सुरक्षित.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@supports (backdrop-filter: blur(1px)) {\n  .glass {\n    backdrop-filter: blur(8px);\n  }\n}'),
   S('Mini Project',
     'header काच.\n\nblur मऊ.',
     '.site-header {\n  position: sticky;\n  top: 0;\n  background: rgba(255, 255, 255, 0.6);\n  backdrop-filter: blur(10px);\n}'),
  ],
  ['backdrop-filter काय?', 'blur कुठे?', 'header कसा?', '@supports कधी?'],
  [{'q':'backdrop-filter काय?','o':['मागे धुके','पुढे रंग','खाली रेषा'],'c':0},
   {'q':'blur जास्त?','o':['धुके जास्त','धुके कमी','रंग उजळ'],'c':0},
   {'q':'topbar काय?','o':['काच','मजकूर','रेखा'],'c':0},
   {'q':'@supports कुठे?','o':['आधार','रंग','क्रम'],'c':0}],
  {'prompt':'काच header करा.','starterCode':'.topbar {\n  position: sticky;\n  top: 0;\n  backdrop-filter: blur(10px);\n}','expectedOutput':'Frosted Marathi topbar'},
  ['blur रक्कम?', 'performance साठी?'],
  ['css-filters-fx', 'css-modal-backdrop', 'css-isolation-z'],
  'css-light-dark', 'css-starting-style')

# =====================================================================
# 3. STARTING STYLE
# =====================================================================
L('css-starting-style',
  'Starting Style',
  '@starting-style — सुरुवात शैली',
  'entry state animation display toggle सह.',
  [
   S('1. सुरुवात नियम',
     '@starting-style खुणा.\n\nentry state.\n\nopacity मऊ.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य सजीव.',
     '@starting-style {\n  .box {\n    opacity: 0;\n  }\n}'),
   S('2. display विस्तार',
     'allow-discrete नियम.\n\ndisplay बदल.\n\ntransition चाले.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.box {\n  transition: opacity 0.3s, display 0.3s allow-discrete;\n}'),
   S('3. menu थर',
     'menu उघडते.\n\nscale entry.\n\nopacity पण.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@starting-style {\n  .menu {\n    opacity: 0;\n    transform: scale(0.9);\n  }\n}\n.menu {\n  transition: opacity 0.2s, transform 0.2s;\n}'),
   S('4. टॅब शैली',
     'panel बदल.\n\ncontent दिशा.\n\ntranslate हलका.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@starting-style {\n  .tab {\n    opacity: 0;\n    translate: 0 -6px;\n  }\n}\n.tab {\n  transition: opacity 0.25s, translate 0.25s;\n}'),
   S('5. कार्ड क्रम',
     'card उदय.\n\nstaggered delay.\n\ntransition-delay.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.card {\n  transition: opacity 0.3s;\n}\n@starting-style {\n  .card {\n    opacity: 0;\n  }\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\nanimation साधा.\n\nfallback opacity.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (transition-behavior: allow-discrete) {\n  .box {\n    transition: opacity 0.3s, display 0.3s allow-discrete;\n  }\n}'),
   S('Mini Project',
     'menu उघड.\n\nसुरुवात entry.',
     '@starting-style {\n  .menu {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}\n.menu {\n  transition: opacity 0.2s, transform 0.2s;\n}'),
  ],
  ['@starting-style काय?', 'allow-discrete कुठे?', 'menu कसे?', 'fallback कोणता?'],
  [{'q':'@starting-style काय?','o':['entry state','exit state','रंग रेखा'],'c':0},
   {'q':'allow-discrete?','o':['transition नियम','नवीन रंग','ध्वनी क्रिया'],'c':0},
   {'q':'display बदल?','o':['होय','नाही','कधीच'],'c':0},
   {'q':'scale कुठे?','o':['transform','margin','padding'],'c':0}],
  {'prompt':'menu entry करा.','starterCode':'@starting-style {\n  .menu {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}','expectedOutput':'Menu animates into Marathi page'},
  ['discrete transition काय?', 'delay कसा?'],
  ['css-transitions-animations', 'css-keyframes-tip', 'css-popover-tips'],
  'css-backdrop-filter', 'css-initial-letter')

# =====================================================================
# 4. INITIAL LETTER
# =====================================================================
L('css-initial-letter',
  'Initial Letter',
  'initial-letter — मोठे अक्षर',
  'drop cap initial-letter सह सजावट.',
  [
   S('1. अक्षर कल्पना',
     'initial-letter नियम.\n\ndrop cap.\n\nपरिच्छेद सजवतो.\n\nवाचन छान.\n\nकोड थोडा.\n\nवापर सोपा.',
     'p::first-letter {\n  initial-letter: 3;\n}'),
   S('2. आकार थर',
     'आकार दोन.\n\nbaseline जुळते.\n\nमजकूर बाजू.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'p::first-letter {\n  initial-letter: 2 1;\n  font-weight: bold;\n}'),
   S('3. रंग जोड',
     'drop cap रंग.\n\nbackground पान.\n\nborder खास.\n\nदृश्य आकर्षक.\n\nकोड थोडा.\n\nवापर योग्य.',
     'p::first-letter {\n  initial-letter: 2.5;\n  color: #0d9488;\n}'),
   S('4. संयोग नियम',
     'quote ओळ.\n\nविशेष थर.\n\nsmall cap.\n\nरचना नेमकी.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.quote p::first-letter {\n  initial-letter: 2;\n  color: #0d9488;\n}'),
   S('5. आधार जुना',
     'जुन्या ब्राउझर.\n\ninitial-letter नाही.\n\nfloat साधा.\n\nsize मोठा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.drop {\n  float: left;\n  font-size: 3rem;\n  line-height: 1;\n  margin-right: 8px;\n}'),
   S('6. सुस्पष्ट माने',
     'first-letter वाचतो.\n\ncontrast राखा.\n\npadding थोडी.\n\nवाचन सुधार.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'p::first-letter {\n  initial-letter: 2;\n  color: #115e59;\n  background: #ccfbf1;\n  padding: 4px 8px;\n}'),
   S('Mini Project',
     'परिच्छेद cap.\n\nआकार दोन.',
     'article > p:first-child::first-letter {\n  initial-letter: 2;\n  color: #0d9488;\n}'),
  ],
  ['initial-letter काय?', 'drop cap कुठे?', 'float कधी?', 'baseline कसा?'],
  [{'q':'initial-letter काय?','o':['मोठे अक्षर','रेखा','ध्वनी'],'c':0},
   {'q':'::first-letter कुठे?','o':['पहिले अक्षर','शेवट','मध्य'],'c':0},
   {'q':'आधार जुना?','o':['float','grid','flex'],'c':0},
   {'q':'cap रंग?','o':['color','display','index'],'c':0}],
  {'prompt':'परिच्छेद cap करा.','starterCode':'p::first-letter {\n  initial-letter: 2;\n}','expectedOutput':'Drop cap decorates Marathi paragraph'},
  ['initial-letter लाभ?', 'fallback कसा?'],
  ['css-pseudo-elements', 'css-highlight-pseudo', 'css-typography'],
  'css-starting-style', 'css-marker-style')

# =====================================================================
# 5. MARKER STYLE
# =====================================================================
L('css-marker-style',
  'Marker Style',
  '::marker — सूची चिन्ह',
  '::marker साहाय्याने list markers शैली.',
  [
   S('1. marker कल्पना',
     '::marker नियम.\n\nlist चिन्ह.\n\nशैली स्पष्ट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'li::marker {\n  color: #0d9488;\n}'),
   S('2. चिन्ह निवड',
     'content बदल.\n\nखूण स्पष्ट.\n\ncolor नेमका.\n\nदृश्य सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'li::marker {\n  content: "\\u2713";\n  color: #0d9488;\n}'),
   S('3. गट क्रम',
     'nested list.\n\nmarker व्यवस्था.\n\nआत मोठा.\n\nरचना स्पष्ट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'ul ul li::marker {\n  content: "\\u2022";\n  color: #334155;\n}'),
   S('4. काम सूची',
     'task रूप.\n\nचौखट खूण.\n\nmarker जागा.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.tasks li::marker {\n  content: "\\u25a1 ";  /* checkbox */\n  color: #334155;\n}'),
   S('5. brand थर',
     'brand रंग.\n\nmarker रेषा.\n\nhover बदल.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nरचना स्थिर.',
     'li::marker {\n  content: "\\u2014 ";\n  color: #0d9488;\n}\nli:hover::marker {\n  color: #115e59;\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\n::marker नाही.\n\npadding थोडी.\n\nआकार ठोस.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'li {\n  padding-left: 4px;\n}\nli::marker {\n  color: #0d9488;\n}'),
   S('Mini Project',
     'सूचना सूची.\n\nचिन्ह नेटके.',
     '.note li::marker {\n  content: "\\u2605 ";\n  color: #0d9488;\n}'),
  ],
  ['::marker कुठे?', 'content चिन्ह?', 'hover marker?', 'list-style काय?'],
  [{'q':'::marker काय?','o':['सूची चिन्ह','मथळा','रेखा'],'c':0},
   {'q':'content कुठे?','o':['::marker','::before','::selection'],'c':0},
   {'q':'hover marker?','o':['होय','नाही','कधीच'],'c':0},
   {'q':'steps क्रम?','o':['counter','flex','float'],'c':0}],
  {'prompt':'सूची खुणा करा.','starterCode':'li::marker {\n  content: "\\u2713 ";\n  color: #0d9488;\n}','expectedOutput':'Custom Marathi list markers render'},
  ['::marker सीमा?', 'content मर्यादा?'],
  ['css-counters-lab', 'css-pseudo-elements', 'css-typography'],
  'css-initial-letter', 'css-intrinsic-sizing')

# =====================================================================
# 6. INTRINSIC SIZING
# =====================================================================
L('css-intrinsic-sizing',
  'Intrinsic Sizing',
  'intrinsic-sizing — आंतरिक आकार',
  'fit-content min-content max-content width नियम.',
  [
   S('1. आंतरिक थर',
     'fit-content नियम.\n\ncontent प्रमाण.\n\nwidth नेमकी.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.badge {\n  width: fit-content;\n}'),
   S('2. min-content',
     'छोटा शब्द.\n\nwidth किमान.\n\nअक्षरे जुळतात.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.wide {\n  width: min-content;\n}'),
   S('3. max-content',
     'ओळ संपूर्ण.\n\nwidth घेते.\n\ncontent जागा.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.row {\n  width: max-content;\n}'),
   S('4. बटण आकार',
     'inline बटण.\n\nfit-content छान.\n\npadding सोय.\n\nदृश्य सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'button {\n  width: fit-content;\n  padding: 8px 16px;\n}'),
   S('5. tooltip थर',
     'tooltip नेमकी.\n\nmax width जागा.\n\ncontent बाहेर.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.',
     '.tip {\n  width: max-content;\n  max-width: 240px;\n}'),
   S('6. संदेश थर',
     'chat bubble.\n\nwidth fit.\n\nmin content छोटा.\n\nओळ मिळते.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.bubble {\n  width: fit-content;\n  min-width: min-content;\n}'),
   S('Mini Project',
     'चिन्ह नीट.\n\nfit-content.',
     '.btn {\n  width: fit-content;\n  border-radius: 8px;\n}'),
  ],
  ['fit-content काय?', 'min-content कुठे?', 'max-content कधी?', 'bubble कसा?'],
  [{'q':'fit-content?','o':['content आकार','रंग','थर'],'c':0},
   {'q':'min-content?','o':['किमान','जास्त','शून्य'],'c':0},
   {'q':'max-content?','o':['संपूर्ण ओळ','लहान','मध्यम'],'c':0},
   {'q':'button आकार?','o':['fit','cover','auto'],'c':0}],
  {'prompt':'बटण आकार घ्या.','starterCode':'.btn {\n  width: fit-content;\n}','expectedOutput':'Marathi button hugs its label'},
  ['fit-content वापर?', 'min vs max फरक?'],
  ['css-grid-system', 'css-layout-flex', 'css-box-model'],
  'css-marker-style', 'css-text-overflow')

# =====================================================================
# 7. TEXT OVERFLOW
# =====================================================================
L('css-text-overflow',
  'Text Overflow',
  'text-overflow — दांडी थर',
  'ellipsis text-overflow line-clamp व्यवस्था.',
  [
   S('1. दांडी कल्पना',
     'ellipsis नियम.\n\ntext-overflow set.\n\nwidth नेमकी.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}'),
   S('2. ओळी मर्यादा',
     'दोन ओळी.\n\nline-clamp 2.\n\noverflow मर्यादा.\n\nवाचन नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.clamp {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}'),
   S('3. मथळा थर',
     'title ellipsis.\n\nnowrap ओळ.\n\nभाग जागा.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}'),
   S('4. कार्ड ओळी',
     'card lines.\n\nline-clamp 3.\n\ncontent थर.\n\nरचना सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@supports (line-clamp: 2) {\n  .desc {\n    line-clamp: 3;\n  }\n}'),
   S('5. आधार जुना',
     'line-clamp नाही.\n\noverflow clip.\n\nheight नेमकी.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.',
     '.desc {\n  overflow: hidden;\n  height: 4.5em;\n}'),
   S('6. clip नियम',
     'overflow clip.\n\nबाहेर नको.\n\nscroll नको.\n\nरचना शुद्ध.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.box {\n  overflow: clip;\n}'),
   S('Mini Project',
     'मथळा एक.\n\nदांडी शेवट.',
     '.card-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}'),
  ],
  ['text-overflow काय?', 'line-clamp कुठे?', 'clip कधी?', 'nowrap म्हणजे?'],
  [{'q':'text-overflow?','o':['दांडी','ध्वनी','रंग'],'c':0},
   {'q':'line-clamp?','o':['ओळी मर्यादा','उंची','रुंदी'],'c':0},
   {'q':'nowrap?','o':['एक ओळ','पान','थर'],'c':0},
   {'q':'overflow clip?','o':['बाहेर नको','स्क्रोल','मिड'],'c':0}],
  {'prompt':'मथळा एक ओळ करा.','starterCode':'.title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}','expectedOutput':'Marathi heading truncates with ellipsis'},
  ['ellipsis कधी?', 'clamp कसा?'],
  ['css-typography', 'css-text-wrap', 'css-box-model'],
  'css-intrinsic-sizing', 'css-text-decoration-deep')

# =====================================================================
# 8. TEXT DECORATION DEEP
# =====================================================================
L('css-text-decoration-deep',
  'Decoration Deep',
  'text-decoration — अधोरेखा गहन',
  'underline thickness offset position नियम.',
  [
   S('1. रेषा थर',
     'text-decoration नियम.\n\nunderline ठसा.\n\nthickness नेमकी.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.link {\n  text-decoration: underline;\n  text-decoration-thickness: 2px;\n}'),
   S('2. अंतर थर',
     'underline-offset नियम.\n\nअक्षर अंतर.\n\nरेखा जागा.\n\nवाचन आराम.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.link {\n  text-underline-offset: 4px;\n  text-decoration-thickness: 2px;\n}'),
   S('3. रंग नियम',
     'line color.\n\ncolor वेगळा.\n\nhighlight मऊ.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.link {\n  text-decoration-color: #0d9488;\n  text-decoration-thickness: 2px;\n}'),
   S('4. खाली रेषा',
     'underline position.\n\nbelow रेषा.\n\nbaseline वगळा.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.link {\n  text-underline-position: under;\n}'),
   S('5. वाचन शैली',
     'links नीट.\n\nthickness वाढ.\n\noffset जागा.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर सोपा.',
     'a {\n  text-decoration-thickness: 2px;\n  text-underline-offset: 3px;\n}'),
   S('6. संवाद थर',
     'hover रंग.\n\ndecoration दाखवा.\n\nkeyboard साठी.\n\nदृश्य स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.link {\n  text-decoration: none;\n}\n.link:hover {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}'),
   S('Mini Project',
     'दुवे स्पष्ट.\n\nshort offset.',
     '.nav a {\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}'),
  ],
  ['thickness काय?', 'offset कुठे?', 'under कधी?', 'hover कसा?'],
  [{'q':'thickness?','o':['जाडी','रंग','क्रम'],'c':0},
   {'q':'underline-offset?','o':['अंतर','रुंदी','ध्वनी'],'c':0},
   {'q':'text-underline-position?','o':['खाली','वर','आत'],'c':0},
   {'q':'links कुठे?','o':['nav','body','table'],'c':0}],
  {'prompt':'दुवे स्पष्ट करा.','starterCode':'.nav a {\n  text-decoration-thickness: 2px;\n  text-underline-offset: 4px;\n}','expectedOutput':'Marathi nav links clearly underlined'},
  ['offset काट?', 'thickness फायदा?'],
  ['css-typography', 'css-focus-visible', 'css-nav-systems'],
  'css-text-overflow', 'css-form-appearance')

# =====================================================================
# 9. FORM APPEARANCE
# =====================================================================
L('css-form-appearance',
  'Form Appearance',
  'appearance — नियंत्रण रूप',
  'appearance accent-color custom forms.',
  [
   S('1. appearance कल्पना',
     'appearance none.\n\nब्राउझर रूप.\n\nनियंत्रण साधे.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'select {\n  appearance: none;\n}'),
   S('2. checkbox थर',
     'checkbox रंग.\n\naccent नेमका.\n\nआकार स्थिर.\n\nरचना सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input[type="checkbox"] {\n  accent-color: #0d9488;\n}'),
   S('3. range नियम',
     'range खूण.\n\naccent-color योग.\n\nघटक स्पष्ट.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'input[type="range"] {\n  accent-color: #0d9488;\n}'),
   S('4. custom select',
     'arrow खुणा.\n\ncustom नियम.\n\nappearance none.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.custom {\n  appearance: none;\n  border: 1px solid #0d9488;\n  border-radius: 8px;\n  padding: 8px 12px;\n}'),
   S('5. फोकस थर',
     'focus-visible नियम.\n\noutline जोड.\n\nkeyboard साठी.\n\nनियम नेमका.\n\nकोड थोडा.\n\nवापर सोपा.',
     '.custom:focus-visible {\n  outline: 2px solid #0d9488;\n  outline-offset: 2px;\n}'),
   S('6. font संदेश',
     'font inherit.\n\nनियंत्रणासाठी.\n\nसाइट मॅच.\n\nरचना शुद्ध.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     'input,\nselect,\ntextarea,\nbutton {\n  font: inherit;\n}'),
   S('Mini Project',
     'फॉर्म नीट.\n\nएक शैली.',
     'select,\ninput,\nbutton {\n  appearance: none;\n  font: inherit;\n  border-radius: 8px;\n}'),
  ],
  ['appearance none काय?', 'accent-color कुठे?', 'focus ring कसा?', 'font inherit का?'],
  [{'q':'appearance काय?','o':['ब्राउझर रूप','रंग','ध्वनी'],'c':0},
   {'q':'accent-color कुठे?','o':['checkbox','image','audio'],'c':0},
   {'q':'focus-visible?','o':['keyboard','mouse','touch'],'c':0},
   {'q':'font inherit?','o':['नियंत्रण','मजकूर','थर'],'c':0}],
  {'prompt':'select स्वच्छ करा.','starterCode':'.custom {\n  appearance: none;\n  border-radius: 8px;\n  padding: 8px 12px;\n}','expectedOutput':'Marathi form control styled custom'},
  ['appearance मर्यादा?', 'accent कुठे?'],
  ['css-forms-styling', 'css-focus-visible', 'css-accent-color'],
  'css-text-decoration-deep', 'css-media-scripting')

# =====================================================================
# 10. MEDIA / SCRIPTING
# =====================================================================
L('css-media-scripting',
  'Media Scripting',
  'media-scripting — साधन तपास',
  'scripting pointer hover media queries.',
  [
   S('1. scripting नियम',
     'media scripting.\n\nenabled तपास.\n\nJS असेल.\n\nरचना बदल.\n\nकोड थोडा.\n\nवापर सोपा.',
     '@media (scripting: enabled) {\n  .js {\n    display: block;\n  }\n}'),
   S('2. pointer थर',
     'pointer fine.\n\nमाउस सरळ.\n\nhover उपलब्ध.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@media (pointer: fine) {\n  .tiny {\n    cursor: pointer;\n  }\n}'),
   S('3. touch साठी',
     'any-pointer coarse.\n\nबटण मोठे.\n\nजागा सोय.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@media (any-pointer: coarse) {\n  button {\n    min-height: 48px;\n  }\n}'),
   S('4. hover नियम',
     'hover hover.\n\nहोवर पर्याय.\n\ntouch करा.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '@media (hover: hover) {\n  .item:hover {\n    background: #ccfbf1;\n  }\n}'),
   S('5. अंधार नियम',
     'prefers dark.\n\ndark रूप.\n\nmedia सोपे.\n\nरंग जुळतो.\n\nकोड थोडा.\n\nवापर सोपा.',
     '@media (prefers-color-scheme: dark) {\n  body {\n    background: #0f172a;\n  }\n}'),
   S('6. contrast थर',
     'prefers-contrast more.\n\ncontrast वाढ.\n\ntext ठळक.\n\nवाचन आराम.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '@media (prefers-contrast: more) {\n  body {\n    color: #000;\n  }\n}'),
   S('Mini Project',
     'scripting थर.\n\nबटण मोठे.',
     '@media (any-pointer: coarse) {\n  .action {\n    min-height: 48px;\n  }\n}'),
  ],
  ['scripting कुठे?', 'pointer fine काय?', 'coarse कुठे?', 'dark media?'],
  [{'q':'scripting enabled?','o':['JS चालू','JS बंद','ध्वनी'],'c':0},
   {'q':'pointer coarse?','o':['टच','माउस','की'],'c':0},
   {'q':'hover hover?','o':['उपलब्ध','नाही','शून्य'],'c':0},
   {'q':'prefers-contrast?','o':['वाचन','रंग नाही','गति'],'c':0}],
  {'prompt':'टच बटण करा.','starterCode':'@media (any-pointer: coarse) {\n  button {\n    min-height: 48px;\n  }\n}','expectedOutput':'Marathi touch buttons enlarged'},
  ['scripting उपयोग?', 'pointer vs any-pointer?'],
  ['css-media-ranges', 'css-dark-mode', 'css-responsive-table'],
  'css-form-appearance', 'css-caret-selection')

# =====================================================================
# 11. CARET & SELECTION
# =====================================================================
L('css-caret-selection',
  'Caret Selection',
  'caret-selection — कर्सर निवड',
  'caret-color ::selection user-select नियम.',
  [
   S('1. caret रंग',
     'caret-color नियम.\n\nकर्सर रंग.\n\ninput स्पष्ट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'input,\ntextarea {\n  caret-color: #0d9488;\n}'),
   S('2. caret थर',
     'caret-shape नियम.\n\nblock रूप.\n\nजागा स्पष्ट.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input {\n  caret-shape: underline;\n}'),
   S('3. selection थर',
     '::selection नियम.\n\nनिवड रंग.\n\ntext ठळक.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nवापर योग्य.',
     '::selection {\n  background: #99f6e4;\n  color: #134e4a;\n}'),
   S('4. मथळा निवड',
     'heading वेगळा.\n\nmark स्पष्ट.\n\ncontrast राखा.\n\nवाचन नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'h1::selection {\n  background: #0d9488;\n  color: #ffffff;\n}'),
   S('5. user-select',
     'दुहेरी क्लिक.\n\nनिवड थांबे.\n\nउघडा भाग.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.',
     '.decoration {\n  user-select: none;\n}'),
   S('6. कॉपी थर',
     'copy नियम.\n\nनिवड clear.\n\nशब्द सर्व.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.copy {\n  user-select: all;\n}'),
   S('Mini Project',
     'input caret.\n\nनिवड रंग.',
     'input {\n  caret-color: #0d9488;\n}\n::selection {\n  background: #99f6e4;\n  color: #134e4a;\n}'),
  ],
  ['caret-color कुठे?', '::selection काय?', 'user-select नको?', 'caret-shape?'],
  [{'q':'caret-color?','o':['कर्सर','ध्वनी','रेखा'],'c':0},
   {'q':'::selection?','o':['निवड रंग','मथळा','रीती'],'c':0},
   {'q':'user-select none?','o':['निवड थांबे','निवड वाढ','रंग'],'c':0},
   {'q':'caret-shape?','o':['ब्लॉक','टीप','रेखा'],'c':0}],
  {'prompt':'input caret रंग द्या.','starterCode':'input {\n  caret-color: #0d9488;\n}','expectedOutput':'Marathi input caret teal'},
  ['caret-color लाभ?', 'selection मर्यादा?'],
  ['css-focus-visible', 'css-highlight-pseudo', 'css-forms-styling'],
  'css-media-scripting', 'css-marathi-capstone11')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone11',
  'Interaction Capstone',
  'Interaction Bag — भाग संग्रह',
  'Level 11 साधने एकत्र शैली.',
  [
   S('1. थीम खुणा',
     'थीम टोकन.\n\ncolor-scheme दोन.\n\nरंग जुळतो.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.',
     ':root {\n  color-scheme: light dark;\n}\nbody {\n  color: light-dark(#1f2937, #f4f4f5);\n}'),
   S('2. काच थर',
     'topbar ग्लास.\n\nbackdrop blur.\n\ncontent स्पष्ट.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.topbar {\n  position: sticky;\n  top: 0;\n  backdrop-filter: blur(10px);\n}'),
   S('3. entry शैली',
     'menu सुरुवात.\n\nopacity मऊ.\n\ntransition चाले.\n\nदृश्य सजीव.\n\nकोड थोडा.\n\nवापर योग्य.',
     '@starting-style {\n  .menu {\n    opacity: 0;\n    transform: scale(0.95);\n  }\n}'),
   S('4. मथळा सजावट',
     'drop cap.\n\ninitial-letter 2.\n\nरंग नेमका.\n\nवाचन आकर्षक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.article p:first-of-type::first-letter {\n  initial-letter: 2;\n  color: #0d9488;\n}'),
   S('5. सूची नीट',
     'marker खूण.\n\nsteps क्रम.\n\nरंग ब्रँड.\n\nरचना सुबक.\n\nकोड थोडा.\n\nवापर सोपा.',
     '.steps li::marker {\n  content: "\\u2713 ";\n  color: #0d9488;\n}'),
   S('6. दांडी शैली',
     'मथळा ellipsis.\n\noverflow hidden.\n\nnowrap ओळ.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.card-title {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}'),
   S('Final Project',
     'interaction सर्व.\n\nएक जोड.',
     '::selection {\n  background: #99f6e4;\n  color: #134e4a;\n}'),
  ],
  ['Level 11 नवे?', 'glass कुठे?', 'drop cap कसा?', 'marker कोणते?'],
  [{'q':'Level 11 थीम?','o':['Interaction','रंग रेषा','जुना थर'],'c':0},
   {'q':'light-dark कुठे?','o':['color-scheme','flex','grid'],'c':0},
   {'q':'backdrop blur?','o':['काच','रेखा','रेडी'],'c':0},
   {'q':'::selection कुठे?','o':['निवड','मथळा','स्रोत'],'c':0}],
  {'prompt':'पोर्टल सुरू करा.','starterCode':':root {\n  color-scheme: light dark;\n}','expectedOutput':'Final interaction patterns assembled via Marathi portal'},
  ['तीन आवडते?', 'caret मर्यादा?'],
  ['css-marathi-capstone10', 'css-filters-fx', 'css-dark-mode'],
  'css-caret-selection', 'css-light-dark')

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
    parts.append("    levelLabel: CSS11_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 11 — Interaction Modes ===\n'
    header += 'export const CSS11_LABEL = "CSS · Level 11 — Interaction Modes";\n'
    header += '\nexport const cssLevel11: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css11_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css11_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css11_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level11.ts')
print("WROTE css-level11.ts, lines:", len(out.split(chr(10))))