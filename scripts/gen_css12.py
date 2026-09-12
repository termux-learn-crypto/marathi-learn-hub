# -*- coding: utf-8 -*-
# Generator for CSS Level 12 (Marathi): 12 lessons x 7 sections.
# Theme: Blend & Detail (overscroll, scroll margin/padding, content-visibility,
# mix-blend-mode, background-blend, font variation, text spacing, decoration
# style, user validity, pseudo states, field-sizing, capstone).
# Emits src/data/tutorials/css-level12.ts.
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
# 1. OVERSCROLL
# =====================================================================
L('css-overscroll',
  'Overscroll',
  'overscroll — स्क्रोल नियंत्रण',
  'overscroll-behavior सह scroll chaining थांबवणे.',
  [
   S('1. overscroll कल्पना',
     'overscroll-behavior नियम.\n\nस्क्रोल चेन.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य शांत.',
     '.modal {\n  overscroll-behavior: contain;\n}'),
   S('2. chain रोख',
     'chain नियम.\n\nमागे स्क्रोल.\n\nbreak योग्य.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'html {\n  overscroll-behavior-y: contain;\n}'),
   S('3. पेज थर',
     'मूळ पेज.\n\nmodal मध्ये.\n\ncontain नियम.\n\nगती स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.dialog {\n  overscroll-behavior: contain;\n  overflow-y: auto;\n}'),
   S('4. bounce नको',
     'bounce कमी.\n\noverscroll none.\n\nभाग स्थिर.\n\nवापरकर्ता सोपे.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.screen {\n  overscroll-behavior: none;\n}'),
   S('5. अक्ष नियम',
     'contain vs none.\n\nजागा स्वतंत्र.\n\nक्रम नेमका.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nरचना स्थिर.',
     'body {\n  overscroll-behavior-x: contain;\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\nवापर नाही.\n\nस्वाभाविक स्क्रोल.\n\nआधार तपासा.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (overscroll-behavior: contain) {\n  .modal {\n    overscroll-behavior: contain;\n  }\n}'),
   S('Mini Project',
     'modal स्क्रोल.\n\nअलग बंद.',
     '.modal {\n  overscroll-behavior: contain;\n  overflow-y: auto;\n}'),
  ],
  ['overscroll काय?', 'contain कुठे?', 'chain म्हणजे?', 'none कधी?'],
  [{'q':'overscroll-behavior?','o':['चेन रोख','रंग जोड','ध्वनी'],'c':0},
   {'q':'contain कुठे?','o':['modal','html','image'],'c':0},
   {'q':'chain म्हणजे?','o':['मागे स्क्रोल','आत रंग','नवीन थर'],'c':0},
   {'q':'none कधी?','o':['बाऊंस नको','मोठा रंग','झटका'],'c':0}],
  {'prompt':'modal स्क्रोल करा.','starterCode':'.modal {\n  overscroll-behavior: contain;\n  overflow-y: auto;\n}','expectedOutput':'Modal scroll stays contained on Marathi page'},
  ['contain फायदा?', 'chain त्रास?'],
  ['css-scroll-margin', 'css-content-visibility', 'css-modal-backdrop'],
  'css-marathi-capstone11', 'css-scroll-margin')

# =====================================================================
# 2. SCROLL MARGIN
# =====================================================================
L('css-scroll-margin',
  'Scroll Margin',
  'scroll-margin — अँकर जागा',
  'scroll-margin scroll-padding अँकर व्यवस्था.',
  [
   S('1. margin कल्पना',
     'scroll-margin नियम.\n\nअँकर जागा.\n\nवर स्थान.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'section {\n  scroll-margin-top: 80px;\n}'),
   S('2. padding थर',
     'scroll-padding सोय.\n\ncontainer जागा.\n\ntop नेमका.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.container {\n  scroll-padding-top: 80px;\n}'),
   S('3. अँकर दुवा',
     'hash दुवा.\n\nsection वर.\n\nmargin मिळतो.\n\nवाचन नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '#heading {\n  scroll-margin-top: 6rem;\n}'),
   S('4. snap जोड',
     'scroll snap.\n\nsnap-stop योग्य.\n\nजागा समान.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.carousel {\n  scroll-snap-type: x mandatory;\n  scroll-padding-inline: 20px;\n}'),
   S('5. header साथ',
     'sticky header.\n\nscroll-margin जोड.\n\nमथळा नीट.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.section {\n  scroll-margin-top: 64px;\n}'),
   S('6. दोन्ही नियम',
     'दोन्ही गुणधर्म.\n\ntop bottom जागा.\n\nक्रम नेमका.\n\nवापरकर्ता सोपे.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.section {\n  scroll-margin: 16px;\n}\n.container {\n  scroll-padding-top: 8rem;\n}'),
   S('Mini Project',
     'मथळे दुवे.\n\nनेटके जागा.',
     'h2[id] {\n  scroll-margin-top: 96px;\n}'),
  ],
  ['scroll-margin काय?', 'scroll-padding कुठे?', 'anchor कसा?', 'snap जोड?'],
  [{'q':'scroll-margin?','o':['अँकर जागा','ध्वनी','रंग'],'c':0},
   {'q':'scroll-padding कुठे?','o':['container','image','table'],'c':0},
   {'q':'hash दुवा?','o':['#id','.class','@media'],'c':0},
   {'q':'snap-stop?','o':['थांबा नियम','रंग जोड','रेखा'],'c':0}],
  {'prompt':'अँकर जागा द्या.','starterCode':'h2[id] {\n  scroll-margin-top: 96px;\n}','expectedOutput':'Marathi headings anchor below topbar'},
  ['margin vs padding?', 'snap कसा जुळतो?'],
  ['css-overscroll', 'css-scroll-snap', 'css-gap-mastery'],
  'css-overscroll', 'css-content-visibility')

# =====================================================================
# 3. CONTENT VISIBILITY
# =====================================================================
L('css-content-visibility',
  'Content Visibility',
  'content-visibility — रेंडरिंग गती',
  'content-visibility सह ऑफस्क्रीन गती.',
  [
   S('1. visibility कल्पना',
     'content-visibility नियम.\n\nरेंडरिंग थांबे.\n\nगती वाढते.\n\nकोड थोडा.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.story {\n  content-visibility: auto;\n}'),
   S('2. आकार जागा',
     'contain-intrinsic-size.\n\nआकार नेमका.\n\nजागा स्थिर.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.story {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 500px;\n}'),
   S('3. दूर भाग',
     'दूर दिसत नाही.\n\nrendering मऊ.\n\nस्क्रीन जागा.\n\nperformance नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'article {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 400px;\n}'),
   S('4. मर्यादा नियम',
     'auto vs hidden.\n\nदृश्य हलके.\n\nनियम नेमका.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'section {\n  content-visibility: hidden;\n}'),
   S('5. गती मोजमाप',
     'long page.\n\nतपासा गती.\n\nजागा मिळते.\n\nवाचन आराम.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.wrapper {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 600px;\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\nrendering साधा.\n\nवापर नाही.\n\nआधार तपासा.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (content-visibility: auto) {\n  .list {\n    content-visibility: auto;\n  }\n}'),
   S('Mini Project',
     'लांब सूची.\n\nगती जोड.',
     '.row {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 96px;\n}'),
  ],
  ['content-visibility काय?', 'intrinsic कुठे?', 'auto vs hidden?', 'fallback कसा?'],
  [{'q':'content-visibility?','o':['गती सुधार','रंग जोड','ध्वनी'],'c':0},
   {'q':'intrinsic-size?','o':['आकार जागा','रेखा','थर'],'c':0},
   {'q':'auto म्हणजे?','o':['नजीक रेंडर','कधी नाही','नेहमी'],'c':0},
   {'q':'hidden कधी?','o':['लपवणे','रंग','आकार'],'c':0}],
  {'prompt':'लांब सूची गती करा.','starterCode':'.row {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 96px;\n}','expectedOutput':'Long list renders faster on Marathi page'},
  ['auto फायदा?', 'intrinsic चूक?'],
  ['css-contain-property', 'css-will-change', 'css-perf-hints'],
  'css-scroll-margin', 'css-mix-blend-mode')

# =====================================================================
# 4. MIX BLEND
# =====================================================================
L('css-mix-blend-mode',
  'Mix Blend',
  'mix-blend-mode — रंग मिश्रण',
  'mix-blend-mode सह थर रंग जोडणी.',
  [
   S('1. blend कल्पना',
     'mix-blend-mode नियम.\n\nरंग मिसळतो.\n\nरचना आकर्षक.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.hero h1 {\n  mix-blend-mode: multiply;\n}'),
   S('2. color-dodge',
     'color-dodge थर.\n\nरंग तेज.\n\nपार्श्वभूमी जुळते.\n\nदृश्य सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.stamp {\n  mix-blend-mode: color-dodge;\n}'),
   S('3. screen थर',
     'screen नियम.\n\nगडद मागे.\n\nब्राइट थर.\n\nरचना स्थिर.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.glow {\n  mix-blend-mode: screen;\n}'),
   S('4. isolation थर',
     'isolation isolate.\n\nमिश्रण बंद.\n\nगट वेगळा.\n\nनियम स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.group {\n  isolation: isolate;\n}\n.child {\n  mix-blend-mode: multiply;\n}'),
   S('5. रंग नियम',
     'रंग निवड.\n\nblend तपास.\n\ncontrast राखा.\n\nवाचन नीट.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.deep {\n  mix-blend-mode: difference;\n}'),
   S('6. आधार तपास',
     'जुन्या ब्राउझर.\n\nसाधा रंग.\n\nblend नाही.\n\nआधार सुरक्षित.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (mix-blend-mode: multiply) {\n  .h {\n    mix-blend-mode: multiply;\n  }\n}'),
   S('Mini Project',
     'मथळा मिश्रण.\n\nblend एक.',
     '.title {\n  mix-blend-mode: multiply;\n}'),
  ],
  ['mix-blend काय?', 'screen कुठे?', 'isolation का?', 'color-dodge कधी?'],
  [{'q':'mix-blend-mode?','o':['रंग मिश्रण','ध्वनी','क्रम'],'c':0},
   {'q':'screen कुठे?','o':['गडद मागे','पांढरे','नवीन'],'c':0},
   {'q':'isolation?','o':['गट वेगळा','रंग जोड','थर'],'c':0},
   {'q':'color-dodge?','o':['तेज रंग','मऊ','काळा'],'c':0}],
  {'prompt':'मथळा blend करा.','starterCode':'.title {\n  mix-blend-mode: multiply;\n}','expectedOutput':'Marathi heading blends into background'},
  ['blend फायदा?', 'isolation केव्हा?'],
  ['css-background-blend', 'css-isolation-z', 'css-stacking-context'],
  'css-content-visibility', 'css-background-blend')

# =====================================================================
# 5. BACKGROUND BLEND
# =====================================================================
L('css-background-blend',
  'Background Blend',
  'background-blend — पार्श्वभूमी मिश्रण',
  'background-blend-mode सह थर रंग.',
  [
   S('1. blend थर',
     'background-blend-mode.\n\nअनेक layer.\n\nरंग तयार.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.card {\n  background-color: #7c3aed;\n  background-image: linear-gradient(#0d9488, #2563eb);\n  background-blend-mode: multiply;\n}'),
   S('2. gradient जोड',
     'gradient थर.\n\nmultiply नियम.\n\nरचना तयार.\n\nदृश्य नेमके.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.banner {\n  background-image: linear-gradient(135deg, #0d9488, #2563eb);\n  background-color: #7c3aed;\n  background-blend-mode: multiply;\n}'),
   S('3. screen थर',
     'screen रंग.\n\nहलका gradient.\n\nचमक मिळे.\n\nरचना स्पष्ट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.hero {\n  background-image: linear-gradient(#0d9488, #0f172a);\n  background-blend-mode: screen;\n}'),
   S('4. pattern नियम',
     'pattern थर.\n\nmultiply जोड.\n\nडिझाइन नीट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.tile {\n  background-image: repeating-linear-gradient(45deg, #0d9488 0 8px, transparent 8px 16px);\n  background-color: #ccfbf1;\n  background-blend-mode: multiply;\n}'),
   S('5. color वेगळा',
     'background-color.\n\nblend नियम.\n\nरंग तोल.\n\nवाचन आराम.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.feed {\n  background-image: linear-gradient(90deg, #0d9488, #2563eb);\n  background-blend-mode: overlay;\n}'),
   S('6. prose थर',
     'मजकूर वर.\n\nblend साधा.\n\ncontrast जपा.\n\nवापर सोपा.\n\nकोड स्वच्छ.\n\nसवय नेमकी.',
     '.text {\n  background-image: linear-gradient(transparent, #0f172a);\n  background-blend-mode: darken;\n}'),
   S('Mini Project',
     'बॅनर मिश्रण.\n\nएक गुणधर्म.',
     '.banner {\n  background-image: linear-gradient(135deg, #0d9488, #2563eb);\n  background-blend-mode: multiply;\n}'),
  ],
  ['background-blend काय?', 'layer किती?', 'multiply कुठे?', 'screen कधी?'],
  [{'q':'background-blend?','o':['थर रंग','ध्वनी','रेखा'],'c':0},
   {'q':'layer कुठे?','o':['image gradient','table','flex'],'c':0},
   {'q':'multiply?','o':['गडद मिश्रण','उजळ','नवीन'],'c':0},
   {'q':'screen?','o':['चमक','अंधार','रेखा'],'c':0}],
  {'prompt':'बॅनर blend करा.','starterCode':'.banner {\n  background-image: linear-gradient(135deg, #0d9488, #2563eb);\n  background-blend-mode: multiply;\n}','expectedOutput':'Marathi banner gradients blended'},
  ['layer क्रम?', 'contrast नियम?'],
  ['css-mix-blend-mode', 'css-gradient-deep', 'css-conic-radial'],
  'css-mix-blend-mode', 'css-font-variation')

# =====================================================================
# 6. FONT VARIATION
# =====================================================================
L('css-font-variation',
  'Font Variation',
  'font-variation — व्हेरिएबल फॉन्ट',
  'font-variation-settings अक्ष नियंत्रण.',
  [
   S('1. variation कल्पना',
     'font-variation-settings.\n\nअक्ष नियम.\n\nवजन थर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.title {\n  font-variation-settings: "wght" 700;\n}'),
   S('2. weight थर',
     'हलके जड.\n\nअक्ष नेमके.\n\nरचना सुबक.\n\nदृश्य नीट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.light {\n  font-variation-settings: "wght" 300;\n}'),
   S('3. width नियम',
     'width अक्ष.\n\nसंकुचित विस्तार.\n\nजागा नीट.\n\nनियम स्पष्ट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.condensed {\n  font-variation-settings: "wdth" 75;\n}'),
   S('4. optical थर',
     'font-optical-sizing.\n\nवाचन आराम.\n\nआकार बदल.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'body {\n  font-optical-sizing: auto;\n}'),
   S('5. संयोजन नियम',
     'दोन अक्ष.\n\nwght wdth.\n\nhover वजन.\n\nसजीव दृश्य.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.btn {\n  font-variation-settings: "wght" 600, "wdth" 100;\n}\n.btn:hover {\n  font-variation-settings: "wght" 700, "wdth" 100;\n}'),
   S('6. आधार जुना',
     'फॉन्ट variable नाही.\n\nstatic fallback.\n\nनियम नेमका.\n\nआधार तपासा.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (font-variation-settings: "wght" 500) {\n  .title {\n    font-variation-settings: "wght" 700;\n  }\n}'),
   S('Mini Project',
     'मथळा वजन.\n\nएक नियम.',
     '.display {\n  font-variation-settings: "wght" 800;\n}'),
  ],
  ['variation काय?', 'wght कुठे?', 'wdth कधी?', 'optical का?'],
  [{'q':'font-variation?','o':['अक्ष नियम','रेखा','ध्वनी'],'c':0},
   {'q':'wght म्हणजे?','o':['वजन','रुंदी','थर'],'c':0},
   {'q':'wdth म्हणजे?','o':['रुंदी','उंची','रंग'],'c':0},
   {'q':'optical?','o':['वाचन आराम','रंग','क्रम'],'c':0}],
  {'prompt':'मथळा वजन द्या.','starterCode':'.display {\n  font-variation-settings: "wght" 800;\n}','expectedOutput':'Marathi display heading uses variable weight'},
  ['variable font फायदा?', 'fallback कसा?'],
  ['css-font-fallback', 'css-typography', 'css-custom-props'],
  'css-background-blend', 'css-text-spacing')

# =====================================================================
# 7. TEXT SPACING
# =====================================================================
L('css-text-spacing',
  'Text Spacing',
  'text-spacing — अंतर नियम',
  'letter word spacing अंतर व्यवस्था.',
  [
   S('1. letter थर',
     'letter-spacing नियम.\n\nअंतर नेमके.\n\nवाचन नीट.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य सुबक.',
     '.label {\n  letter-spacing: 0.08em;\n}'),
   S('2. word थर',
     'word-spacing सोय.\n\nशब्द अंतर.\n\nवाचन मऊ.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.para {\n  word-spacing: 0.1em;\n}'),
   S('3. indent नियम',
     'text-indent जागा.\n\nपरिच्छेद सुरुवात.\n\nओळ नीट.\n\nदृश्य सुबक.\n\nकोड थोडा.\n\nवापर योग्य.',
     'p {\n  text-indent: 2em;\n}'),
   S('4. hyphens थर',
     'hyphens auto.\n\nlong शब्द.\n\nरेषा जुळते.\n\nवाचन आराम.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.text {\n  hyphens: auto;\n}'),
   S('5. justify नियम',
     'text-align justify.\n\nरेषा समान.\n\nकड सरळ.\n\nरचना नेमकी.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.body {\n  text-align: justify;\n  text-justify: inter-word;\n}'),
   S('6. संयोजन तोल',
     'तीन नियम.\n\nवाचन सुधार.\n\nअंतर तोल.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '.article {\n  line-height: 1.7;\n  letter-spacing: 0.01em;\n  word-spacing: 0.05em;\n}'),
   S('Mini Project',
     'परिच्छेद नीट.\n\nअंतर जोड.',
     '.prose {\n  line-height: 1.7;\n  letter-spacing: 0.01em;\n}'),
  ],
  ['letter-spacing काय?', 'word-spacing कुठे?', 'indent का?', 'hyphens कधी?'],
  [{'q':'letter-spacing?','o':['अक्षर अंतर','रंग','थर'],'c':0},
   {'q':'word-spacing?','o':['शब्द अंतर','ओळ','क्रम'],'c':0},
   {'q':'text-indent?','o':['सुरुवात जागा','शेवट','मध्य'],'c':0},
   {'q':'hyphens?','o':['रेषा जुळणे','रंग','ध्वनी'],'c':0}],
  {'prompt':'मजकूर आराम करा.','starterCode':'.prose {\n  line-height: 1.7;\n  letter-spacing: 0.01em;\n}','expectedOutput':'Marathi prose spaced for reading'},
  ['जागा सुबक कशी?', 'hyphens कधी?'],
  ['css-typography', 'css-text-wrap', 'css-writing-modes'],
  'css-font-variation', 'css-decoration-style')

# =====================================================================
# 8. DECORATION STYLE
# =====================================================================
L('css-decoration-style',
  'Decoration Style',
  'decoration-style — रेषा शैली',
  'text-decoration-style wavy double नियम.',
  [
   S('1. style कल्पना',
     'text-decoration-style.\n\nरेषा शैली.\n\nwavy double.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     '.note {\n  text-decoration-style: wavy;\n}'),
   S('2. दुहेरी रेषा',
     'double नियम.\n\nजाडी दोन.\n\nठसा स्पष्ट.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.alert {\n  text-decoration-style: double;\n  text-decoration-thickness: 3px;\n}'),
   S('3. wavy थर',
     'wavy रेषा.\n\nwarning साठी.\n\nरंग नेमका.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     '.warn {\n  text-decoration: underline wavy #dc2626 2px;\n}'),
   S('4. skip-ink',
     'skip-ink auto.\n\nअक्षरे स्पष्ट.\n\nरेषा नियम.\n\nवाचन आराम.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.link {\n  text-decoration-skip-ink: auto;\n}'),
   S('5. dotted नियम',
     'dotted रेषा.\n\nhover दाखवा.\n\nक्रिया स्पष्ट.\n\nरचना नेमकी.\n\nकोड थोडा.\n\nरचना स्थिर.',
     '.link {\n  text-decoration: underline dotted;\n}'),
   S('6. आधार जुना',
     'जुन्या ब्राउझर.\n\nरेषा साधी.\n\nthickness नाही.\n\nआधार तपासा.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     '@supports (text-decoration-thickness: 2px) {\n  .link {\n    text-decoration-thickness: 2px;\n  }\n}'),
   S('Mini Project',
     'warning रेषा.\n\nwavy खूण.',
     '.required {\n  text-decoration: underline wavy #dc2626 2px;\n}'),
  ],
  ['decoration-style काय?', 'wavy कुठे?', 'double कधी?', 'skip-ink का?'],
  [{'q':'text-decoration-style?','o':['रेषा शैली','रंग थर','ध्वनी'],'c':0},
   {'q':'wavy कुठे?','o':['warning','मथळा','टीपा'],'c':0},
   {'q':'double?','o':['दुहेरी रेषा','एक रेषा','थर'],'c':0},
   {'q':'skip-ink?','o':['अक्षरे स्पष्ट','रंग','क्रम'],'c':0}],
  {'prompt':'warning रेषा द्या.','starterCode':'.required {\n  text-decoration: underline wavy #dc2626 2px;\n}','expectedOutput':'Marathi required fields marked wavy'},
  ['wavy केव्हा?', 'skip-ink फायदा?'],
  ['css-text-decoration-deep', 'css-focus-visible', 'css-typography'],
  'css-text-spacing', 'css-user-validity')

# =====================================================================
# 9. USER VALIDITY
# =====================================================================
L('css-user-validity',
  'User Validity',
  'user-validity — फॉर्म सत्यता',
  ':user-valid :user-invalid फॉर्म feedback.',
  [
   S('1. invalid थर',
     ':user-invalid नियम.\n\nखराब input.\n\nerror ठसा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'input:user-invalid {\n  border-color: #dc2626;\n}'),
   S('2. valid नियम',
     ':user-valid नियम.\n\nबरोबर input.\n\nहिरवा रंग.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input:user-valid {\n  border-color: #16a34a;\n}'),
   S('3. error संदेश',
     'ओळ खाली.\n\nरंग नेमका.\n\nमजकूर स्पष्ट.\n\nवाचन नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'input[aria-invalid="true"] {\n  outline: 2px solid #dc2626;\n}'),
   S('4. फोकस साथ',
     'focus-visible जोड.\n\nkeyboard नियम.\n\nring स्पष्ट.\n\nदृश्य सुबक.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input:user-invalid:focus-visible {\n  outline: 2px solid #dc2626;\n  outline-offset: 2px;\n}'),
   S('5. अनिवार्य थर',
     'required नियम.\n\nतारका खूण.\n\nlabel स्पष्ट.\n\nवापरकर्ता दिशा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     'label {\n  font-weight: 500;\n}\ninput:required {\n  border: 1px solid #334155;\n}'),
   S('6. बदल क्रम',
     'टायपिंग नियंत्रण.\n\nबदल तपास.\n\nरचना स्थिर.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nवापर सोपा.',
     'input:user-invalid,\ninput:user-valid {\n  transition: border-color 0.2s;\n}'),
   S('Mini Project',
     'फॉर्म feedback.\n\nएक रंग.',
     'input:user-invalid {\n  border-color: #dc2626;\n}'),
  ],
  ['user-invalid काय?', 'user-valid कुठे?', 'aria कधी?', 'focus कसा?'],
  [{'q':':user-invalid?','o':['खराब input','रंग जोड','ध्वनी'],'c':0},
   {'q':':user-valid?','o':['बरोबर input','रेखा','थर'],'c':0},
   {'q':'aria-invalid?','o':['सूचना','रंग','क्रम'],'c':0},
   {'q':'focus-visible?','o':['keyboard','mouse','touch'],'c':0}],
  {'prompt':'फॉर्म feedback जोडा.','starterCode':'input:user-invalid {\n  border-color: #dc2626;\n}','expectedOutput':'Marathi form flags invalid input'},
  ['user vs browser?', 'transition कसा?'],
  ['css-forms-styling', 'css-pseudo-state', 'css-focus-visible'],
  'css-decoration-style', 'css-pseudo-state')

# =====================================================================
# 10. PSEUDO STATE
# =====================================================================
L('css-pseudo-state',
  'Pseudo State',
  'pseudo-state — स्थिती नियम',
  ':placeholder-shown :read-write :autofill.',
  [
   S('1. placeholder थर',
     ':placeholder-shown नियम.\n\nरिकामे input.\n\nlabel अंतर.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'input:placeholder-shown {\n  border-color: #94a3b8;\n}'),
   S('2. भरले input',
     ':not placeholder.\n\nरंग नेमका.\n\nस्थिती तपास.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'input:not(:placeholder-shown) {\n  border-color: #0d9488;\n}'),
   S('3. read थर',
     ':read-only मजकूर.\n\nवाचनीय थर.\n\nरंग हलका.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'input:read-only {\n  background: #f1f5f9;\n}'),
   S('4. editable नियम',
     ':read-write थर.\n\nसंपादन स्पष्ट.\n\nकिनार ठोस.\n\nनियम नेमका.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '[contenteditable]:read-write {\n  outline: 2px solid #0d9488;\n}'),
   S('5. autofill थर',
     ':autofill नियम.\n\nरंग बदल.\n\nbox-shadow मऊ.\n\nवापर सोपा.\n\nकोड थोडा.\n\nरचना स्थिर.',
     'input:autofill {\n  box-shadow: 0 0 0 1000px #ccfbf1 inset;\n}'),
   S('6. संयोजन नियम',
     'अनेक states.\n\nनिवड योग्य.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय नेमकी.',
     'input:not(:placeholder-shown):read-write {\n  border-color: #0d9488;\n}'),
   S('Mini Project',
     'placeholder खूण.\n\nएक नियम.',
     'input:placeholder-shown {\n  background: #f8fafc;\n}'),
  ],
  ['placeholder-shown काय?', 'read-only कुठे?', 'autofill कधी?', 'not नियम?'],
  [{'q':':placeholder-shown?','o':['रिकामे input','भरले','ध्वनी'],'c':0},
   {'q':':read-only?','o':['वाचनीय','संपादन','रंग'],'c':0},
   {'q':':autofill?','o':['आपोआप भरणे','नवीन रंग','थर'],'c':0},
   {'q':':read-write?','o':['संपादन','लॉक','क्रम'],'c':0}],
  {'prompt':'placeholder खुणा करा.','starterCode':'input:placeholder-shown {\n  background: #f8fafc;\n}','expectedOutput':'Marathi empty inputs highlighted'},
  ['placeholder अर्थ?', 'read-write कुठे?'],
  ['css-user-validity', 'css-field-sizing', 'css-forms-styling'],
  'css-user-validity', 'css-field-sizing')

# =====================================================================
# 11. FIELD SIZING
# =====================================================================
L('css-field-sizing',
  'Field Sizing',
  'field-sizing — फील्ड आकार',
  'field-sizing सह input आकार स्वयम्.',
  [
   S('1. field-sizing',
     'field-sizing content.\n\ninput आकार.\n\nमजकूर जागा.\n\nकोड थोडा.\n\nवापर सोपा.\n\nदृश्य नीट.',
     'input {\n  field-sizing: content;\n}'),
   S('2. textarea थर',
     'textarea resize.\n\nआकार वाढ.\n\nमजकूर सोय.\n\nरचना स्पष्ट.\n\nकोड स्वच्छ.\n\nसवय छान.',
     'textarea {\n  resize: vertical;\n  min-height: 120px;\n}'),
   S('3. select नियम',
     'select आकार.\n\nwidth नेमकी.\n\noption जागा.\n\nदृश्य नीट.\n\nकोड थोडा.\n\nवापर योग्य.',
     'select {\n  width: fit-content;\n}'),
   S('4. chip थर',
     'chip badge.\n\ncontent आकार.\n\npadding जोड.\n\nसुबक रचना.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.chip {\n  width: fit-content;\n  padding: 4px 12px;\n}'),
   S('5. आधार जुना',
     'जुन्या ब्राउझर.\n\nfield-sizing नाही.\n\nwidth सरळ.\n\nआधार तपासा.\n\nकोड थोडा.\n\nवापर सोपा.',
     '@supports (field-sizing: content) {\n  input {\n    field-sizing: content;\n  }\n}'),
   S('6. min-width थर',
     'min-width नेमकी.\n\nआकार तोल.\n\nरचना स्थिर.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nसवय नेमकी.',
     'input[name="q"] {\n  field-sizing: content;\n  min-width: 200px;\n}'),
   S('Mini Project',
     'input नीट.\n\ncontent आकार.',
     'input[type="text"] {\n  field-sizing: content;\n  min-width: 160px;\n}'),
  ],
  ['field-sizing काय?', 'textarea कसा?', 'chip कुठे?', 'min-width का?'],
  [{'q':'field-sizing?','o':['आकार स्वयम्','रंग','ध्वनी'],'c':0},
   {'q':'textarea?','o':['resize','रेषा','थर'],'c':0},
   {'q':'fit-content?','o':['content आकार','क्रम','रेखा'],'c':0},
   {'q':'min-width?','o':['किमान','जास्त','शून्य'],'c':0}],
  {'prompt':'input आकार घ्या.','starterCode':'input[type="text"] {\n  field-sizing: content;\n  min-width: 160px;\n}','expectedOutput':'Marathi inputs size to content'},
  ['content sizing फायदा?', 'fallback कसा?'],
  ['css-form-appearance', 'css-intrinsic-sizing', 'css-forms-styling'],
  'css-pseudo-state', 'css-marathi-capstone12')

# =====================================================================
# 12. CAPSTONE
# =====================================================================
L('css-marathi-capstone12',
  'Detail Capstone',
  'Blend Bag — भाग संग्रह',
  'Level 12 साधने एकत्र शैली.',
  [
   S('1. स्क्रोल संगठन',
     'overscroll contain.\n\nscroll margin.\n\nअँकर नीट.\n\nकोड थोडा.\n\nरचना स्थिर.\n\nवापर सोपा.',
     '.modal {\n  overscroll-behavior: contain;\n}\nh2[id] {\n  scroll-margin-top: 96px;\n}'),
   S('2. रेंडरिंग गती',
     'content-visibility.\n\nintrinsic size.\n\nलांब पान.\n\nगती वाढ.\n\nकोड स्वच्छ.\n\nसवय छान.',
     '.row {\n  content-visibility: auto;\n  contain-intrinsic-size: auto 96px;\n}'),
   S('3. blend थर',
     'blend एक.\n\nमथळा मिश्रण.\n\nरचना आकर्षक.\n\nकोड थोडा.\n\nवापर योग्य.\n\nदृश्य नीट.',
     '.title {\n  mix-blend-mode: multiply;\n}'),
   S('4. वजन आकार',
     'font variation.\n\nwght सातशे.\n\nमथळा सुबक.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nरचना स्थिर.',
     '.display {\n  font-variation-settings: "wght" 700;\n}'),
   S('5. वाचन नियम',
     'letter spacing.\n\nline-height सोय.\n\nवाचन आराम.\n\nकोड थोडा.\n\nरचना नेमकी.\n\nसवय छान.',
     '.prose {\n  line-height: 1.7;\n  letter-spacing: 0.01em;\n}'),
   S('6. फॉर्म feedback',
     'user-invalid.\n\nरंग नेमका.\n\nसंदेश स्पष्ट.\n\nकोड स्वच्छ.\n\nवापर सोपा.\n\nरचना स्थिर.',
     'input:user-invalid {\n  border-color: #dc2626;\n}'),
   S('Final Project',
     'सर्व जोड.\n\nएक शैली.',
     'input:placeholder-shown {\n  background: #f8fafc;\n}'),
  ],
  ['Level 12 नवे?', 'blend कुठे?', 'content visibility?', 'feedback कसा?'],
  [{'q':'Level 12 थीम?','o':['Blend & Detail','रंग रेषा','जुना थर'],'c':0},
   {'q':'overscroll?','o':['चेन रोख','रंग','ध्वनी'],'c':0},
   {'q':'content-visibility?','o':['गती सुधार','रेखा','क्रम'],'c':0},
   {'q':'user-invalid?','o':['फॉर्म feedback','मथळा','थर'],'c':0}],
  {'prompt':'पोर्टल सुरू करा.','starterCode':'.modal {\n  overscroll-behavior: contain;\n}','expectedOutput':'Final detail patterns assembled via Marathi portal'},
  ['तीन आवडते?', 'blend मर्यादा?'],
  ['css-marathi-capstone11', 'css-scroll-snap', 'css-field-sizing'],
  'css-field-sizing', 'css-overscroll')

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
    parts.append("    levelLabel: CSS12_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 12 — Blend & Detail ===\n'
    header += 'export const CSS12_LABEL = "CSS · Level 12 — Blend & Detail";\n'
    header += '\nexport const cssLevel12: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css12_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css12_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css12_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level12.ts')
print("WROTE css-level12.ts, lines:", len(out.split(chr(10))))