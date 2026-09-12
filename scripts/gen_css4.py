# -*- coding: utf-8 -*-
# Generator for CSS Level 4 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level4.ts. Base content ~100-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=28):
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
# 1. COLOR MIX
# =====================================================================
L('css-color-mix',
  'Color Mix',
  'color-mix — रंग मिश्रण',
  'दोन रंगांचे प्रमाण टक्के, spaces आणि थीम रचना.',
  [
   S('1. मिश्रण कल्पना',
     'color-mix दोन रंग जोडतो.\n\nटक्के नुसार प्रमाण नियंत्रित होते.\n\nरंग हा browser मध्येच मिसळतो.\n\nकोणत्याही preprocess शिवाय सुंदर.\n\nपॅलेट सहज बनते.\n\nगणना न करता नवे टोक मिळते.',
     '.hero-bg {\n  background: color-mix(in srgb, #ff0000 60%, #0000ff);\n}'),
   S('2. टक्के संतुलन',
     'एकाचा टक्का वाढला की दुसरा कमी.\n\nदोघांची बेरीज नेहमी 100 असते.\n\nटोकदार रंग मिळवणे सोपे.\n\nहलका आणि गडद दोन्ही.\n\nप्रमाण हे नियम सांगते.\n\nप्रत्येक रंग दृष्टीने निवडा.',
     '.accent {\n  background: color-mix(in srgb, teal 70%, gold 30%);\n}'),
   S('3. रंग space',
     'in srgb हा साधा आधार.\n\nlab आणि oklab सुधारणा देतात.\n\nlch मध्ये दिशा विशेष.\n\nप्रत्येक space चे अर्थ असतात.\n\nब्राउझर स्थिर वापरतो.\n\nspace निवड प्रयोगाने स्पष्ट.',
     '.mix-lab {\n  background: color-mix(in oklab, #10b981 55%, #f59e0b);\n}'),
   S('4. light-dark()',
     'light-dark() थीम सोबत नियम.\n\ncolor-scheme प्राथम्य असते.\n\nस्वयं समायोजन आधार मिळतो.\n\ndark कोड फिकट रंग घेते.\n\nभाषा सोपी राहते.\n\nथीम दोन रंग फक्त.',
     ':root {\n  color-scheme: light dark;\n}\n.card {\n  color: light-dark(#222, #f3f4f6);\n}'),
   S('5. रंग थीम',
     'थीम टोकांना mix ठेवा.\n\nमुख्य रंग आणि गौण तयार होतो.\n\nhover ने आधार वाढवा.\n\nकोणतीही दोन मूल्ये द्या.\n\nरचना सातत्याने जुळते.\n\nउत्पादन स्वरूप नवे दिसते.',
     '.theme-button {\n  --base: #6366f1;\n  background: color-mix(in srgb, var(--base), white 20%);\n}'),
   S('6. आधार आणि नियम',
     'आधार सर्वत्र नसतो.\n\nजुना रंग साधा ठेवा.\n\nआधुनिक ठिकाणी mix वापरा.\n\n@supports तपासणी सुरक्षा देते.\n\nपडद्यावर फरक पहा.\n\nसमतोल नियम पुढे चालतो.',
     '.legacy {\n  background: #dbeafe;\n}\n@supports (color: color-mix(in srgb, red, blue)) {\n  .new-card {\n    background: color-mix(in srgb, #2563eb 80%, white);\n  }\n}'),
   S('Mini Project',
     'पॅलेट ग्रिड पेज तयार करा.\n\ndark आणि light दोन्ही.\n\nमुख्य टोक निवडा.',
     ':root {\n  color-scheme: light dark;\n}\n.swatch {\n  background: color-mix(in oklab, #6366f1 60%, white);\n}'),
  ],
  ['color-mix काय?', 'light-dark() कसे?', 'oklab मध्ये काय?'],
  [{'q':'color-mix काय?','o':['मिसळते','बदलते','लपवते'],'c':0},
   {'q':'in srgb म्हणजे?','o':['space','नाव','रूप'],'c':0},
   {'q':'light-dark लागत?','o':['color-scheme','script','class'],'c':0},
   {'q':'टक्के बेरीज?','o':['100','50','200'],'c':0}],
  {'prompt':'तीन colorspace वापरून नवीन पॅलेट. 5 card ने तपासा.','starterCode':':root { color-scheme: light dark; }','expectedOutput':'Renders five tinted swatch cards'},
  'color-mix आधार काय?',
  ['css-relative-colors', 'css-filter-effects', 'css-aspect-ratio'],
  'css-marathi-capstone3', 'css-relative-colors')

# =====================================================================
# 2. RELATIVE COLORS
# =====================================================================
L('css-relative-colors',
  'Relative Colors',
  'Relative colors — सापेक्ष रंग',
  'channel calculations, from syntax आणि color() function.',
  [
   S('1. सापेक्ष रंग',
     'सध्याच्या channel पासून नवा रंग.\n\nfrom रंग निवडत असतो.\n\nchannel बदलांना स्वतंत्रता.\n\nनवीन मूल्ये तरतूद होते.\n\nथीममध्ये रंग रूपांतर.\n\nअर्थ आणि सामर्थ्य बरे.',
     '.from-mix {\n  background: rgb(from #4f46e5 r g b / 80%);\n}'),
   S('2. channel गणना',
     'calc मध्ये channel जोडता.\n\nप्रत्येक channel चे मूल्य हलते.\n\nred बदल नेमका दिसतो.\n\nगडद करणे सोपे होते.\n\nहलकी सावली सोपी येते.\n\nटोक संतुलित राहते.',
     '.channel-dark {\n  background: rgb(from #38bdf8 calc(r * 0.6) g b);\n}'),
   S('3. color() function',
     'color() ला नवीन spaces मिळतात.\n\ndisplay-p3 मध्ये रुंद रंग.\n\nchannel नावे function मध्ये.\n\nabsolute मूल्य शक्य.\n\nब्राउझर आधार तपासा.\n\nfuture paint तयार होते.',
     '.wide-color {\n  color: color(display-p3 0.2 0.7 0.6);\n}'),
   S('4. हलका टोक',
     'from टोक आणि सुरुवात.\n\nविशिष्ट lightness राखतो.\n\nकार्डला तोल मिळतो.\n\nरंगाचा family साचतो.\n\nकोड वाचता राहतो.\n\nनिर्णय एके ठिकाणी.',
     '.tinted {\n  background: hsl(from #facc15 h s calc(l + 20%));\n}'),
   S('5. अॅक्सेस नियम',
     'सापेक्ष रंग contrast ची काळजी घ्या.\n\nWCAG मध्ये minimum असतो.\n\nजुने नियम सुरक्षित का.\n\nपडद्यावर वाचता पहा.\n\nप्रत्येक स्थितीत मजकूर स्पष्ट.\n\nसमतोल आणि प्रवेश्यता दोन्ही.',
     '.safe-text {\n  color: rgb(from #0f172a r g b);\n  background: #f8fafc;\n}'),
   S('6. आधार आणि fallback',
     '@supports सोबत वापर.\n\nजुन्या ब्राउझरला साधा रंग.\n\nmodifier तपासणी नियम.\n\ncolor() function वेगळे.\n\nप्रगतीशील वाढ जपा.\n\nजुने सर्वत्र चालते.',
     '.mod-ok {\n  background: #0ea5e9;\n}\n@supports (color: rgb(from red r g b)) {\n  .mod-ok {\n    background: rgb(from #0ea5e9 calc(r + 10) g b);\n  }\n}'),
   S('Mini Project',
     'एकाच accent टोकातून गट साधा.\n\nचार tints नियम.',
     '.base {\n  --root: #0f766e;\n}\n.t1 {\n  color: rgb(from var(--root) r g b / 30%);\n}'),
  ],
  ['from काय करतो?', 'color() कसे?', 'channel बदल काय?'],
  [{'q':'rgb(from...) काय?','o':['नवीन रंग','जुना रंग','नाव'],'c':0},
   {'q':'channel कुठे?','o':['calc मध्ये','पुढे','खाली'],'c':0},
   {'q':'display-p3?','o':['रुंद','अरुंद','साधा'],'c':0},
   {'q':'आधार काय?','o':['@supports','@media','@key'],'c':0}],
  {'prompt':'सात tints एक टोकातून बनवा.','starterCode':':root { --brand: #7c3aed; }','expectedOutput':'Renders a seven row tint ramp'},
  'relative color अर्थ काय?',
  ['css-color-mix', 'css-filter-effects', 'css-text-wrap'],
  'css-color-mix', 'css-text-wrap')

# =====================================================================
# 3. TEXT WRAP
# =====================================================================
L('css-text-wrap',
  'Text Wrap',
  'text-wrap — मजकूर आकार',
  'balance, pretty, overflow शब्द प्रवाह.',
  [
   S('1. शीर्षक संतुलन',
     'text-wrap: balance नक्की करते.\n\nशीर्षक रेषा समान होतात.\n\nदोन ओळी सौंदर्याने.\n\nउपयोग चांगला शीर्षकांत.\n\nहे गुणधर्म साधा ठेवा.\n\nवाचन सोपे होते.',
     '.h1 {\n  text-wrap: balance;\n}'),
   S('2. शब्द प्रवाह',
     'overflow-wrap शब्द फोडते.\n\nसामान्य शब्द breakup करते.\n\nमर्यादित जागा सोपी.\n\nurl साठी हे आवश्यक.\n\nword-break वेगळा नियम.\n\nकोड मधून दिशा दिसते.',
     '.long-word {\n  overflow-wrap: anywhere;\n  inline-size: 220px;\n}'),
   S('3. discretionary बदल',
     'hyphens मराठीत कमी.\n\nशब्दकोश assets लागतो.\n\nजागा पडल्यावर फक्त.\n\nइतर भाषेत कार्य.\n\nप्रत्येक ठिकाणी नको.\n\nआधार मर्यादित असतो.',
     '.just {\n  hyphens: auto;\n  overflow-wrap: break-word;\n}'),
   S('4. pretty संरेखन',
     'text-wrap: pretty शेवटची ओळ.\n\nलहान एकटा शब्द दूर होतो.\n\nमोठा परिच्छेद वापरा.\n\nवाचकाला आराम मिळतो.\n\nsummary संपते नीट.\n\nकिंचित वेग कमी पडे.',
     'article p {\n  text-wrap: pretty;\n}'),
   S('5. overflow खात्री',
     'टेबल मधले मजकूर पळतात.\n\nnowrap धारून ठेवते.\n\ntext-overflow ellipsis.\n\nhidden प्रमाणे सीमा.\n\nbutton ला एक ओळ.\n\nतारीख अभ्यास सोपा.',
     '.chip {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}'),
   S('6. आधार तपास',
     'balance सर्व नवीन.\n\nजुने वर्तन साधे.\n\nदीर्घ सहन नको.\n\n@supports ने तपासा.\n\nवाचनीयता नेहमी प्राथमिक.\n\nपडद्यावर तपासणी ठेवा.',
     'h2 {\n  text-wrap: balance;\n}\n@supports not (text-wrap: balance) {\n  h2 {\n    margin-inline-end: 1em;\n  }\n}'),
   S('Mini Project',
     'बातमी ओळी संतुलित करा.\n\nसुंदर कार्ड तयार.',
     '.card h2 {\n  text-wrap: balance;\n}'),
  ],
  ['balance काय?', 'ellipsis कसे?', 'anywhere म्हणजे?'],
  [{'q':'balance काय?','o':['ओळी समान','रेषा जाड','रंग'],'c':0},
   {'q':'text-overflow?','o':['ellipsis','color','shadow'],'c':0},
   {'q':'overflow-wrap?','o':['शब्द फोड','रंग','अंतर'],'c':0},
   {'q':'pretty कुठे?','o':['परिच्छेद','शीर्ष','बटण'],'c':0}],
  {'prompt':'पाच शीर्षक balance तपासा.','starterCode':'h1 { text-wrap: balance; }','expectedOutput':'Renders five balanced headings'},
  'text-wrap उपयोग?',
  ['css-relative-colors', 'css-aspect-ratio', 'css-highlight-pseudo'],
  'css-relative-colors', 'css-scroll-snap')

# =====================================================================
# 4. SCROLL SNAP
# =====================================================================
L('css-scroll-snap',
  'Scroll Snap',
  'scroll-snap — स्क्रोल नियंत्रण',
  'snap container, alignment आणि galleries.',
  [
   S('1. snap कल्पना',
     'स्क्रोल उजव्या ठिकाणी थांबते.\n\nsnap close नियम जुळते.\n\nगॅलरी सुधारते.\n\nकोणत्याही दिशेत चालले.\n\nभाग अचूक दिसतो.\n\nगुणधर्म एकत्र लागतात.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n  overflow-x: auto;\n}'),
   S('2. प्रकार निवड',
     'mandatory नियंत्रण जास्त घट्ट.\n\nproximity लवचिक राहते.\n\nलांब विभागात proximity.\n\nप्रत्येक पटल काळजी.\n\nआकार मोठा तर mandatory.\n\nअनुभव योग्य करा.',
     '.cards {\n  scroll-snap-type: y proximity;\n}'),
   S('3. संरेखन',
     'snap-align मुलांना दिले जाते.\n\nstart मध्ये आरंभ.\n\ncenter मध्ये मध्य.\n\nend शेवटी सुसंगत.\n\nप्रत्येक card नवा नियम.\n\nपुढे दिशा ठरते.',
     '.card {\n  scroll-snap-align: center;\n  scroll-snap-stop: always;\n}'),
   S('4. scroll padding',
     'scroll-padding अंतर देते.\n\nसर्व भागांना नव्हे.\n\nकार्ड मध्ये वेगळी.\n\nहेडर उंची मोजता.\n\nएकूण स्वरूप सुधारते.\n\nआधाराचा नियम असतो.',
     '.carousel {\n  scroll-padding-inline: 16px;\n}'),
   S('5. दिशा आणि वेग',
     'दोन्ही दिशांमध्ये होते.\n\nblock inline ने जोडते.\n\nनियंत्रण sensitive राहते.\n\nलहान मोठी गॅलरी तोल.\n\nsnap आणि आकार जपा.\n\nवेग स्थिर होतो.',
     '.grid {\n  scroll-snap-type: both mandatory;\n  scroll-snap-align: start;\n}'),
   S('6. keyboard अनुभव',
     'कीबोर्ड ने स्क्रोल carousel चालते.\n\nsnap जागा स्पष्ट.\n\ntab सर्व चालते.\n\nfocus वेगळा दिसतो.\n\nreduce आदर राहतो.\n\nप्रवेश्यता सर्वत्र सुरुवात.',
     'a:focus-visible {\n  outline: 2px dashed #2563eb;\n}'),
   S('Mini Project',
     'image गॅलरी snap तयार.\n\nतीन images ठेवा.',
     '.gallery {\n  scroll-snap-type: x mandatory;\n}\n.gallery img {\n  scroll-snap-align: center;\n}'),
  ],
  ['mandatory काय?', 'align कुठे?', 'padding काय?'],
  [{'q':'snap-type कुठे?','o':['container','item','root'],'c':0},
   {'q':'align कुठे?','o':['item','container','body'],'c':0},
   {'q':'mandatory म्हणजे?','o':['घट्ट','मोकळा','रंग'],'c':0},
   {'q':'scroll-padding?','o':['अंतर','रंग','नाव'],'c':0}],
  {'prompt':'vertical timeline snap साधा.','starterCode':'.tl { scroll-snap-type: y mandatory; }','expectedOutput':'Renders a snapping vertical timeline'},
  'snap उपयोग?',
  ['css-text-wrap', 'css-object-fit', 'css-relative-colors'],
  'css-text-wrap', 'css-aspect-ratio')

# =====================================================================
# 5. ASPECT RATIO
# =====================================================================
L('css-aspect-ratio',
  'Aspect Ratio',
  'aspect-ratio — प्रमाण जपणे',
  'ratio control, intrinsic sizing आणि media holders.',
  [
   S('1. प्रमाण भावना',
     'aspect-ratio उंची रुंदी दर ठरवते.\n\nvideo 16/9 सारखा.\n\nimage साठी पूर्व जागा.\n\nlayout हलत नाही.\n\nआकार अंदाजे वाढतो.\n\nसाधा गुणधर्म वापरा.',
     '.video {\n  aspect-ratio: 16 / 9;\n  width: 100%;\n  background: #0f172a;\n}'),
   S('2. नैसर्गिक आकार',
     'image ला दोन्ही dimensions असतात.\n\nमग ratio ऐतिहासिक.\n\nकसलेही element ने घ्या.\n\nwidth फिक्स करून उंच.\n\nbackground पेक्षा साधा.\n\nप्रमाण संगत राहते.',
     '.box {\n  aspect-ratio: 1 / 1;\n  width: 120px;\n}'),
   S('3. आरक्षित जागा',
     'प्रतिमा लोड होण्याआधी ratio राखतो.\n\nजागा पडत नाही.\n\nscroll जंप टळतो.\n\nवाचकाला आराम.\n\nsource बदलले तरी थर.\n\nlayout स्थिर राहते.',
     '.hero-img {\n  aspect-ratio: 4 / 3;\n  background: #e2e8f0;\n  object-fit: cover;\n}'),
   S('4. mobile संरेखन',
     'पोर्ट्रेट झाल्यावर ratio बदलता.\n\nmedia queries ने नवे.\n\nलहान पडदा जास्त उभा.\n\nकॉन्टेंट तुटत नाही.\n\nवेगवेगळे स्वरूप शक्य.\n\nउदाहरण प्रयोग पहा.',
     '@media (max-width: 480px) {\n  .media {\n    aspect-ratio: 4 / 5;\n  }\n}'),
   S('5. ग्रिड जुळणी',
     'ग्रिड मधले card समान.\n\nसर्व ratio एकच आधी.\n\nobject-fit पाठवा.\n\nआकार जागा भरतो.\n\nक्रोमवर दिसते.\n\nसंग्रह सुंदर बनतो.',
     '.tile img {\n  aspect-ratio: 1 / 1;\n  width: 100%;\n  object-fit: cover;\n}'),
   S('6. अचूक व्यवस्था',
     'height लिहायची गरज नाही.\n\nborder आणि padding मोजा.\n\nbox-sizing ने आकडा.\n\ncontent बाहेर आल्यावर ratio.\n\nflex मधले नियम.\n\nसुटू नये म्हणून ठेवा.',
     '.wrap {\n  display: flex;\n  gap: 12px;\n}\n.wrap img {\n  aspect-ratio: 3 / 2;\n  flex: 1;\n  min-width: 0;\n}'),
   S('Mini Project',
     'video card ग्रिड तयार.\n\nhero 16/9 ठीक.',
     '.video-card {\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}'),
  ],
  ['ratio काय?', 'mini कुठे?', 'object-fit?'],
  [{'q':'aspect-ratio?','o':['width/height','color','gap'],'c':0},
   {'q':'16 / 9 कुठे?','o':['video','font','margin'],'c':0},
   {'q':'object-fit?','o':['cover','bold','none'],'c':0},
   {'q':'scroll जंप?','o':['टळते','वाढते','रंग'],'c':0}],
  {'prompt':'हेडर बॅनर 21/9 तयार.','starterCode':'.banner { aspect-ratio: 21 / 9; width: 100%; }','expectedOutput':'Renders a wide 21:9 banner'},
  'ratio उपयोग काय?',
  ['css-scroll-snap', 'css-object-fit', 'css-color-mix'],
  'css-scroll-snap', 'css-motion-path')

# =====================================================================
# 6. MOTION PATH
# =====================================================================
L('css-motion-path',
  'Motion Path',
  'motion-path — हालचाल मार्ग',
  'offset path, distance आणि लांब गती.',
  [
   S('1. मार्ग कल्पना',
     'offset-path घटकाला मार्ग देतो.\n\nवाकडे टोक सुंदर.\n\nscript नाही जरुरी.\n\nहालचाल दिशा जपते.\n\nनवीन तंत्र हे.\n\nप्रयोगाने स्पष्ट.',
     '.plane {\n  offset-path: path("M10 80 C 40 10, 65 10, 95 80");\n  offset-distance: 0%;\n}'),
   S('2. अंतर नियंत्रण',
     'offset-distance टक्के मध्ये.\n\n0 पर्यंत आरंभ.\n\n100 शेवट.\n\nanimation मध्ये लांब प्रवास.\n\nगुळगुळीत बदल.\n\nमार्ग वेळ फिक्स.',
     '.dot {\n  offset-path: circle(50px at 50% 50%);\n  animation: spin 3s linear infinite;\n}'),
   S('3. फिरणे दिशा',
     'offset-rotate दिशा ठरवते.\n\nauto वक्र कडे वाकते.\n\nreverse opposite.\n\nnumber निश्चित pose.\n\nदृश्य नियंत्रण आवडे.\n\nमार्ग ठीक दिसणे.',
     '.car {\n  offset-path: path("M20 20 L 200 80");\n  offset-rotate: auto;\n}'),
   S('4. विलंब आणि वेगमान',
     'काही टक्के चालू.\n\ntiming वैविध्य वापरा.\n\nanimation-delay वाढवा.\n\nप्रत्येक घटक मागे.\n\nदृश्य थर सुंदर.\n\nkeyframes सोबत नियोजन.',
     '.layer {\n  offset-path: path("M0 100 C 40 20, 60 20, 100 100");\n  animation: travel 4s ease-in-out infinite;\n}'),
   S('5. कामगिरी',
     'path लांब. लवकर तपासा.\n\nहलकी निरपेक्ष.\n\ncontent कमी ठेवा.\n\nजुने पडत नाही.\n\nreduced motion आदर.\n\nबऱ्याच ठिकाणी नको.',
     '@media (prefers-reduced-motion: reduce) {\n  .plane {\n    animation: none;\n    offset-distance: 100%;\n  }\n}'),
   S('6. आधार',
     'offset-path आधार मध्यम.\n\n@supports तपासा.\n\nजुने साधे ठिकाण.\n\nprogressive अपग्रेड.\n\nनवीन स्थान खुलवते.\n\nकोड एकत्र राहते.',
     '.fallback {\n  transform: translateX(40px);\n}\n@supports (offset-path: none) {\n  .fallback {\n    transform: none;\n    offset-path: path("M0 0 L 80 40");\n  }\n}'),
   S('Mini Project',
     'लूप सोबत गोल चक्र.\n\nतीन dot तोल.',
     '.orbit {\n  offset-path: circle(90px at 50% 50%);\n  animation: go 6s linear infinite;\n}'),
  ],
  ['offset-path काय?', 'rotate कसे?', 'आधार?'],
  [{'q':'offset-path?','o':['मार्ग','रंग','फॉन्ट'],'c':0},
   {'q':'offset-distance?','o':['टक्के','किलो','ग्रॅम'],'c':0},
   {'q':'auto म्हणजे?','o':['दिशा','नाव','क्रम'],'c':0},
   {'q':'reduced काय?','o':['कमी','वाढ','रंग'],'c':0}],
  {'prompt':'बटण burst path तयार.','starterCode':'.btn { offset-path: path("M0 0 H 80"); }','expectedOutput':'Renders a button travelling a short path'},
  'motion path कसे कार्य?',
  ['css-aspect-ratio', 'css-filter-effects', 'css-scroll-snap'],
  'css-aspect-ratio', 'css-object-fit')

# =====================================================================
# 7. OBJECT FIT
# =====================================================================
L('css-object-fit',
  'Object Fit',
  'object-fit — माध्यम गठन',
  'cover, contain आणि image जागा नियंत्रण.',
  [
   S('1. माध्यम आकार',
     'object-fit image कसे बसते ठरवते.\n\nदिलेल्या आकारापेक्षा image भिन्न.\n\nvideo पेक्षा image अधिक.\n\nगॅलरीत हे सुंदर.\n\ndefault fill पूर्ण खिचते.\n\ndefault सर्व ठिकाणी जुळते.',
     '.thumb {\n  width: 160px;\n  height: 160px;\n  object-fit: cover;\n}'),
   S('2. cover नियम',
     'cover भाग कापतो.\n\nअधिक तपशील राहतो.\n\nहेडर image जास्त.\n\nआकारांतून जातो.\n\nप्रत्येक image नवा विचार.\n\nछेद अचूक पहा.',
     '.cover {\n  object-fit: cover;\n  object-position: center;\n}'),
   S('3. contain पर्याय',
     'contain संपूर्ण image दाखवतो.\n\nरिकामी जागा शिल्लक.\n\ndesigner नियंत्रण.\n\nलोगो साठी अचूक.\n\nपट्टी मध्ये वेगळा.\n\nदृश्य सुटे राहते.',
     '.logo {\n  object-fit: contain;\n  background: #f1f5f9;\n}'),
   S('4. object-position',
     'object-position फोकस हलवते.\n\ntop left center सर्व.\n\nफोटोची बाजू लक्षात.\n\nकॅप्शन उजवीकडे.\n\nप्रत्येक चित्र निर्णय.\n\nहालचाल कमी येते.',
     '.portrait {\n  object-fit: cover;\n  object-position: 20% 80%;\n}'),
   S('5. गॅलरी जुळणी',
     'ग्रिड सर्व square.\n\nप्रत्येक image cover.\n\nआकार एकसमान.\n\nimage क्रॉप सुंदर.\n\nमोठा थर छान.\n\nजुळणीने pages सरळ.',
     '.tile {\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n}'),
   S('6. आधार बदल',
     'object-fit आधार रुंद.\n\nजुने काही विशेष नाही.\n\nनवीन space मिळते.\n\nव्हिडिओ मध्ये ratio.\n\nकोणताही script नको.\n\nप्रत्येक तपासणी नेमकी.',
     '.media {\n  aspect-ratio: 16 / 9;\n  object-fit: cover;\n}'),
   S('Mini Project',
     'प्रोफाइल ग्रिड circle.\n\nimages cover तपासा.',
     '.avatar {\n  width: 96px;\n  aspect-ratio: 1;\n  border-radius: 50%;\n  object-fit: cover;\n}'),
  ],
  ['cover काय?', 'contain केव्हा?', 'position कसे?'],
  [{'q':'object-fit?','o':['क्रॉप','रंग','नाव'],'c':0},
   {'q':'cover म्हणजे?','o':['कापतो','संपतो','वाढ'],'c':0},
   {'q':'contain?','o':['संपूर्ण','अर्धा','नाही'],'c':0},
   {'q':'object-position?','o':['फोकस','रंग','आकार'],'c':0}],
  {'prompt':'चार image टाइल ग्रिड.','starterCode':'.tile { aspect-ratio: 1; object-fit: cover; }','expectedOutput':'Renders a 2x2 square image grid'},
  'object-fit आधार?',
  ['css-aspect-ratio', 'css-filter-effects', 'css-scroll-snap'],
  'css-motion-path', 'css-filter-effects')

# =====================================================================
# 8. FILTER EFFECTS
# =====================================================================
L('css-filter-effects',
  'Filter Effects',
  'filter — दृश्य प्रभाव',
  'blur, contrast, drop-shadow आणि backdrop फिल्टर.',
  [
   S('1. फिल्टर कल्पना',
     'filter घटकाला दृश्य बदलतो.\n\nblur हलके पडदे.\n\ncontrast स्पष्टता देतो.\n\nपूर्ण element वर प्रभाव.\n\nएकत्र जोडता येतो.\n\nप्रत्येक ठिकाणी नको.',
     '.soft {\n  filter: blur(2px);\n}'),
   S('2. blur आणि contrast',
     'blur प्रमाण वाढू नये.\n\ncontrast उजळ करते.\n\ngrayscale जुना देखावा.\n\nsepia उबदार.\n\nsaturate रंग लाभ.\n\nसंपूर्ण संयोजन शक्य.',
     '.photo {\n  filter: grayscale(40%) contrast(1.05) blur(0.5px);\n}'),
   S('3. drop-shadow',
     'drop-shadow आकारानुसार सावली.\n\nbox-shadow आतून बाहेर.\n\nअल्फा पारदर्शकता जपते.\n\npath सोबत जुळते.\n\nसावली आकार प्रमाणे.\n\nपुढे दिशा नियम.',
     '.icon {\n  filter: drop-shadow(0 4px 6px rgb(0 0 0 / 25%));\n}'),
   S('4. grayscale देखावा',
     'grayscale 100 निःसंदिग्ध.\n\nhover ने रंग परत.\n\nआकर्षक effect.\n\nआधार सर्वत्र.\n\nकमी सजावट ठीक.\n\nसंदर्भ योग्य निवडा.',
     'img.gr {\n  filter: grayscale(100%);\n  transition: filter 0.4s;\n}\nimg.gr:hover {\n  filter: grayscale(0%);\n}'),
   S('5. backdrop-filter',
     'backdrop मागील अनुभव.\n\nमागील भाग blur.\n\nहेडर glass प्रभाव.\n\nआधार नवीन.\n\ntext वाचता राहतो.\n\nटोक सावध ठेवा.',
     '.glass {\n  backdrop-filter: blur(10px);\n  background: rgb(255 255 255 / 40%);\n}'),
   S('6. कामगिरी सावधानता',
     'फिल्टर paint जड असतात.\n\nलहान घटक ठीक.\n\nentire page नको.\n\ntransition तोल साधा.\n\nreduced आदर राहतो.\n\nमोजमाप पुन्हा करा.',
     '.tiny {\n  filter: blur(1.5px);\n  will-change: filter;\n}'),
   S('Mini Project',
     'hero image filter थर.\n\ndark overlay तपासा.',
     '.hero {\n  filter: brightness(0.8) saturate(1.2);\n}'),
  ],
  ['filter काय?', 'drop-shadow कसे?', 'backdrop कुठे?'],
  [{'q':'filter?','o':['दृश्य','आवाज','कोड'],'c':0},
   {'q':'blur?','o':['धूसर','तिखट','मोठा'],'c':0},
   {'q':'drop-shadow?','o':['आकार','कोपरा','रेष'],'c':0},
   {'q':'backdrop-filter?','o':['मागील','पुढील','रंग'],'c':0}],
  {'prompt':'ग्लास हेडर तयार.','starterCode':'.header { backdrop-filter: blur(8px); background: rgb(255 255 255 / 40%); }','expectedOutput':'Renders a frosted glass header'},
  'filter कामगिरी?',
  ['css-color-mix', 'css-relative-colors', 'css-object-fit'],
  'css-object-fit', 'css-style-queries')

# =====================================================================
# 9. STYLE QUERIES
# =====================================================================
L('css-style-queries',
  'Style Queries',
  'style() — शैली प्रश्न',
  '@container style() नियम आणि variants.',
  [
   S('1. शैली प्रश्न',
     '@container style() शैली तपासते.\n\nआकार नाही, style विचारते.\n\ncustom property वजन.\n\nvariant नियंत्रण सोपे.\n\nकंटेनर गरज असेल.\n\nहे नवे घटक.',
     '@container style(--theme: neon) {\n  .card {\n    background: #0f172a;\n  }\n}'),
   S('2. custom property',
     'style queries variable वर.\n\nमूल्य असलेच तर नियम.\n\nfunction वगळता साधा.\n\nकंडिशन boolean.\n\nनवीन value नवा रूप.\n\nलहान रचना जागे.',
     '.theme[data-mode="night"] {\n  container-name: card;\n}\n@container style(--mode: night) {\n  .card {\n    color: #e2e8f0;\n  }\n}'),
   S('3. संयोजन नियम',
     'दोन अटी सोबत.\n\nstyle आणि size दोन्ही.\n\nप्रत्येक query वेगळा.\n\nनियम गोंधळ नको.\n\norder मध्ये बरोबर.\n\nसंतुलन राखतो.',
     '@container card style(--tone: warm) and (min-width: 300px) {\n  .card {\n    border-left: 6px solid #f59e0b;\n  }\n}'),
   S('4. variant नियंत्रण',
     'तिसरा variant सोपा.\n\npropagate ला लेबल.\n\nकन्स्टंट style राहते.\n\nकोड गोंधळ नाही.\n\nreadability वाढते.\n\nphase पक्की होते.',
     '@container style(--layout: grid) {\n  .card-wrap {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n}'),
   S('5. आधार',
     'style queries नवीन.\n\nआधार वाढतो.\n\nसाधा fallback रचना.\n\n@container तपासणी.\n\nजुने सर्वत्र चालते.\n\nगरज पडल्यास class.',
     '.fallback-grid {\n  display: block;\n}\n@container style(--layout: grid) {\n  .fallback-grid {\n    display: grid;\n  }\n}'),
   S('6. नियम संतुलन',
     'style queries कमी वापरा.\n\nआधार अनिश्चित असेल.\n\nसाधे class जास्त.\n\ncomplex टाळा.\n\nतपासणी नेहमी कठोर.\n\nकोड वाचनीय ठेवा.',
     '/* keep it simple */\n.card {\n  padding: 1rem;\n}'),
   S('Mini Project',
     'तीन variant card ग्रिड.\n\nstyle तपासणी जोडा.',
     '@container style(--theme: neon) {\n  .card {\n    font-family: monospace;\n  }\n}'),
  ],
  ['style() काय?', 'कंटेनर कुठे?', 'आधार?'],
  [{'q':'style()?','o':['शैली','आकार','रंग'],'c':0},
   {'q':'कंटेनर काय?','o':['नाव','रंग','फॉन्ट'],'c':0},
   {'q':'custom property कुठे?','o':['style()','@media','@key'],'c':0},
   {'q':'आधार?','o':['नवीन','जुना','सर्व'],'c':0}],
  {'prompt':'दोन theme ग्रिड बनवा.','starterCode':'@container style(--theme: dark) { .grid { background: #111; } }','expectedOutput':'Renders two styled grids from a theme variable'},
  'style queries उपयोग?',
  ['css-relative-colors', 'css-filter-effects', 'css-text-wrap'],
  'css-filter-effects', 'css-highlight-pseudo')

# =====================================================================
# 10. HIGHLIGHT PSEUDO
# =====================================================================
L('css-highlight-pseudo',
  'Highlight Pseudo',
  'highlight — निवड प्रकाश',
  '::selection, ::highlight आणि शब्द अधोरेखित.',
  [
   S('1. निवड रंग',
     '::selection निवडलेला मजकूर.\n\nरंग आणि background.\n\nनिवड पूर्ण भरतो.\n\nलहान नियम प्रभावी.\n\nप्रत्येक सवय ठीक.\n\ntext shadow नको.',
     '::selection {\n  background: #fbbf24;\n  color: #0f172a;\n}'),
   S('2. ::highlight',
     '::highlight JS ने नावे.\n\ndocument highlight जोडतो.\n\nरंग अलग राहतात.\n\nशोध मोठा दिसतो.\n\ncombined नियम सोपे.\n\nकाहीना आधार नाही.',
     '::highlight(search-term) {\n  background: #c7d2fe;\n  color: #172554;\n}'),
   S('3. शब्द अधोरेखित',
     '::spelling-error त्रुटी दर्शवतो.\n\nलाल तरंग.\n\n::grammar-error व्याकरण.\n\nकाही browsers नाहीत.\n\nगरज असेल तेव्हा.\n\nसद्य गरजेसाठी.',
     '::spelling-error {\n  text-decoration: underline wavy red;\n}'),
   S('4. caret रंग',
     'caret-color cursor रंग.\n\ninput मध्ये स्पष्ट.\n\ndefault black पेक्षा.\n\nbrand सह जुळवा.\n\nfocus अधिक ओळखी.\n\nलहान तपशील छान.',
     'textarea {\n  caret-color: #7c3aed;\n}'),
   S('5. संयोग प्रभाव',
     'सगळे एकत्र जोडता.\n\nselection + caret.\n\nhighlight नाव ॲड.\n\nप्रत्येक नियम वेगळा.\n\nस्वरूप एकत्र जुळते.\n\nमजकूर स्वरूप तयार.',
     '::selection {\n  background: #a5f3fc;\n  color: #083344;\n}\ninput {\n  caret-color: #0891b2;\n}'),
   S('6. आधार',
     '::selection आधार घट्ट.\n\n::highlight नवीन.\n\nजुना dark नियम ठीक.\n\nप्रवेश्यता दृष्टीने.\n\nरंग काळजी घ्या.\n\ncontrast नेहमी जपा.',
     '@media (prefers-color-scheme: dark) {\n  ::selection {\n    background: #fde047;\n    color: #1e293b;\n  }\n}'),
   S('Mini Project',
     'निवड रंग theme तयार.\n\ncaret जोडा.',
     '::selection {\n  background: #6366f1;\n  color: #fff;\n}'),
  ],
  ['::selection काय?', 'highlight कसे?', 'caret?'],
  [{'q':'::selection?','o':['निवड','लिंक','इमेज'],'c':0},
   {'q':'::highlight?','o':['नाव','रंग','आकार'],'c':0},
   {'q':'caret-color?','o':['cursor','border','margin'],'c':0},
   {'q':'spelling-error?','o':['त्रुटी','फॉन्ट','काठा'],'c':0}],
  {'prompt':'search highlight demo.','starterCode':'::highlight(match) { background: #fde68a; }','expectedOutput':'Renders highlighted search matches'},
  'highlight प्रवेश्यता?',
  ['css-text-wrap', 'css-focus-visible', 'css-relative-colors'],
  'css-style-queries', 'css-focus-visible')

# =====================================================================
# 11. FOCUS VISIBLE
# =====================================================================
L('css-focus-visible',
  'Focus Visible',
  'focus-visible — कीबोर्ड भेद',
  ':focus-visible, outline नियम आणि keyboard UX.',
  [
   S('1. focus स्थिती',
     'element focus संपादित होते.\n\nटॅब ने keyboard येते.\n\nमाउस क्लिक वेगळी.\n\nदृश्य सूचना गरज.\n\nप्रत्येक क्रियेला उत्तर.\n\nस्पष्टता सर्वांसाठी.',
     'a:focus {\n  outline: 2px solid #2563eb;\n}'),
   S('2. :focus-visible भेद',
     ':focus-visible keyboard दिसते.\n\nमाउस साठी नाही.\n\nनियम अचूक असतो.\n\nगरज म्हणून हे.\n\nनवीन नाव लक्षात.\n\nप्रवेश्यता मोठी सुधारणा.',
     'a:focus-visible {\n  outline: 3px solid #16a34a;\n}'),
   S('3. outline सानुकूल',
     'outline कडक दिसतो.\n\ncolor आणि offset नियंत्रण.\n\nborder-radius सोबत.\n\ndashed किंवा solid.\n\nगोल हवे तर box.\n\nअचूक नियम तयार.',
     '.card:focus-visible {\n  outline: 3px dashed #f59e0b;\n  outline-offset: 4px;\n}'),
   S('4. :has() सोबत',
     ':has() मध्ये focus-visible.\n\nparent दर्शवतो.\n\ncard आतला भाग.\n\nरचना सुरक्षित.\n\nअनेक आकार एकत्र.\n\nहे आधुनिक नियम.',
     '.card:has(a:focus-visible) {\n  outline: 2px solid #2563eb;\n}'),
   S('5. keyboard UX',
     'focus सूचना दृश्य.\n\nमोठी keyboard भाग.\n\nmotion कमी ठेवा.\n\ntext सहित बटण.\n\nप्रत्येक घटक नियम.\n\nपर्याय जलद निवडा.',
     'button:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}'),
   S('6. आधार आणि सवय',
     ':focus-visible आधार उत्तम.\n\nजुने :focus सोबत.\n\n:focus पूर्ण replace.\n\nदोन्ही लिहिता.\n\nप्रत्येक ब्राउझर चांगले.\n\nवाचनीय राहते.',
     'a:focus {\n  outline: 2px solid;\n}\na:focus-visible {\n  outline: 2px solid #2563eb;\n}'),
   S('Mini Project',
     'फॉर्म focus ring तयार.\n\nसर्व input तपासा.',
     'input:focus-visible {\n  outline: 2px solid #7c3aed;\n  outline-offset: 3px;\n}'),
  ],
  ['focus काय?', 'focus-visible कसे?', 'outline?'],
  [{'q':'focus-visible?','o':['keyboard','mouse','touch'],'c':0},
   {'q':'outline कुठे?','o':['नियम','रंग','margin'],'c':0},
   {'q':':has() काय?','o':['parent','child','ते'],'c':0},
   {'q':'outline-offset?','o':['अंतर','रंग','जाड'],'c':0}],
  {'prompt':'सर्व card keyboard नेव्हिगेट तपासा.','starterCode':'.card:has(a:focus-visible) { outline: 2px solid #2563eb; }','expectedOutput':'Renders a focus ring on keyboard-only focus'},
  'focus-visible प्रवेश्यता?',
  ['css-scroll-snap', 'css-highlight-pseudo', 'css-color-mix'],
  'css-highlight-pseudo', 'css-marathi-capstone4')

# =====================================================================
# 12. MARATHI CAPSTONE 4
# =====================================================================
L('css-marathi-capstone4',
  'Marathi Capstone 4',
  'Editorial portal — अंतिम प्रकल्प',
  'सर्व Level 4 तंत्रांचा एकत्र संग्रह.',
  [
   S('1. ध्येय',
     'editorial portal एक पेज.\n\nरंग mix पॅलेट.\n\nस्नॅप गॅलरी.\n\nप्रत्येक भाग Level 4.\n\nअंतिम देखावा खुला.\n\nहे पूर्ण प्रकल्प.',
     ':root {\n  --brand: #7c3aed;\n  color-scheme: light dark;\n}'),
   S('2. पॅलेट रचना',
     'color-mix ने टोक वाढवा.\n\nlight-dark थीम.\n\nकंट्रास्ट नेहमी.\n\nगौण रंग तयार.\n\nटोकांचा गट सारखा.\n\nवाचन स्पष्ट राहील.',
     '.theme-accent {\n  background: color-mix(in oklab, var(--brand) 70%, white);\n}'),
   S('3. स्नॅप गॅलरी',
     'image row scroll-snap.\n\nप्रत्येक frame cover.\n\ncaption center.\n\nकीबोर्ड साठी focus.\n\nपुढे मागे दिशा.\n\nगॅलरी प्रभावी.',
     '.showcase {\n  display: flex;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n}\n.showcase figure {\n  scroll-snap-align: start;\n}'),
   S('4. प्रमाण आणि मार्ग',
     'hero video 16/9.\n\norbit मध्ये dot हलते.\n\nmotion-path साजरे.\n\nप्रमाण जागा राखतो.\n\nreduced motion आदर.\n\nहलके animation.',
     '.hero-frame {\n  aspect-ratio: 16 / 9;\n}\n.orbit-dot {\n  offset-path: circle(40px at 50% 50%);\n  animation: drift 8s infinite;\n}'),
   S('5. highlight आणि focus',
     '::selection brand रंग.\n\ncaret स्पष्ट.\n\n:focus-visible ring.\n\nसर्व keyboard चालते.\n\nप्रवेश्यता मुख्य.\n\nनिवड पडण्यास उजळ.',
     '::selection {\n  background: #fde047;\n  color: #1e293b;\n}\n:focus-visible {\n  outline: 3px solid #7c3aed;\n  outline-offset: 3px;\n}'),
   S('6. कामगिरी अंतिम',
     'filter कमी वापरा.\n\ngallery जागा जपा.\n\nstyle queries साध्या.\n\ncontent-visibility वापर.\n\nमोजमाप पुन्हा करा.\n\nसर्व तपासणी नक्की.',
     '@media (prefers-reduced-motion: reduce) {\n  .orbit-dot {\n    animation: none;\n    offset-distance: 0%;\n  }\n}'),
   S('Mini Project',
     'editorial portal पूर्ण करा.\n\nसर्व Level 4 parts जोडा.',
     '.portal {\n  container-name: portal;\n}\n@container style(--theme: dark) {\n  .portal {\n    color: #e2e8f0;\n  }\n}'),
  ],
  ['पॅलेट कसे?', 'snap कुठे?', 'आधार काय?'],
  [{'q':'portal काय?','o':['एक पेज','तीन','पाच'],'c':0},
   {'q':'color-mix?','o':['पॅलेट','font','margin'],'c':0},
   {'q':'showcase?','o':['snap','blur','grid'],'c':0},
   {'q':'focus-visible?','o':['ring','रंग','छाया'],'c':0}],
  {'prompt':'editorial portal पूर्ण.','starterCode':':root { --brand: #7c3aed; color-scheme: light dark; }','expectedOutput':'Renders polished Marathi editorial portal using Level 4 techniques'},
  'Level 4 नवीन काय?',
  ['css-focus-visible', 'css-color-mix'],
  'css-focus-visible', 'css-color-mix')

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
    parts.append("    levelLabel: CSS4_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 4 — रंग, Movement आणि Control ===\n'
    header += 'export const CSS4_LABEL = "CSS · Level 4 — रंग, Movement आणि Control";\n'
    header += '\nexport const cssLevel4: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css4_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css4_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css4_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level4.ts')
print("WROTE css-level4.ts, lines:", len(out.split(chr(10))))