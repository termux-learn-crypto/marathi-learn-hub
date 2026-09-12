# -*- coding: utf-8 -*-
# Generator for CSS Level 6 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level6.ts. Base content ~110-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=32):
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
# 1. CONTAIN PROPERTY
# =====================================================================
L('css-contain-property',
  'Contain Property',
  'contain — खोली नियंत्रण',
  'containment आणि content-visibility गती.',
  [
   S('1. containment कल्पना',
     'contain घटक खोल व्यवस्था.\n\nब्राउझरला आराम मिळतो.\n\nतीन थर सोपे.\n\nlayout पृथक.\n\nstyle स्वतंत्र.\n\nपेंट भाग मर्यादित.',
     '.embed {\n  contain: layout paint;\n}'),
   S('2. size नियम',
     'size दोन्ही मार्गांना.\n\nरुंदी आणि उंची.\n\nauto पासून तोल.\n\nप्रत्येक घटक खोल.\n\nलहान भाग जलद.\n\nमर्यादा ठरवा.',
     '.fixed-box {\n  contain: size;\n  width: 300px;\n  height: 180px;\n}'),
   S('3. content-visibility',
     'content-visibility जवळ चालवते.\n\nदूरचा भाग लपतो.\n\nscroll खर्च कमी.\n\nजागा ठेवली.\n\nपुन्हा प्रत्यक्ष.\n\nप्रत्येक बदल स्पष्ट.',
     '.section {\n  content-visibility: auto;\n}'),
   S('4. intrinsic आकार',
     'contain-intrinsic-size राखतो.\n\nआधीचा अंदाज असतो.\n\nscroll जंप नाही.\n\nलोड वेळ सुरळीत.\n\nअंदाज नेमका.\n\nवापर सोपा.',
     '.card-long {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 320px;\n}'),
   S('5. उपयोग सवय',
     'मोठी यादी वापरा.\n\nटॅब तपासणी.\n\ncode layers बचत.\n\nतेज वाढ वास्तव.\n\nमोजमाप पुन्हा.\n\nसराव सातत्य.',
     '.tabs .panel {\n  content-visibility: auto;\n  contain: layout;\n}'),
   S('6. आधार तपास',
     'contain आधार मजबूत.\n\ncontent-visibility आधी नवीन.\n\nजुने नियम समान.\n\nसाधेपणा राखा.\n\nप्रत्येक browser पहा.\n\nकोड स्वच्छ राहो.',
     '@supports (contain-intrinsic-size: auto) {\n  .list {\n    content-visibility: auto;\n  }\n}'),
   S('Mini Project',
     'मोठी यादी जलद करा.\n\nतीन नियम.',
     '.feed-item {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 140px;\n}'),
  ],
  ['contain काय?', 'content-visibility कुठे?', 'intrinsic कसे?'],
  [{'q':'contain layout?','o':['पृथक','रंग','फॉन्ट'],'c':0},
   {'q':'paint थर?','o':['मर्यादित','उघडा','जड'],'c':0},
   {'q':'content-visibility?','o':['जलद','मंद','रंग'],'c':0},
   {'q':'intrinsic-size?','o':['अंदाज','नाव','एकक'],'c':0}],
  {'prompt':'मोठा feed जलद करा.','starterCode':'.feed-item { content-visibility: auto; contain: layout paint; }','expectedOutput':'Renders a fast virtualized-style feed'},
  'contain आधार?',
  ['css-will-change', 'css-gap-mastery', 'css-view-transition'],
  'css-marathi-capstone5', 'css-view-transition')

# =====================================================================
# 2. VIEW TRANSITION
# =====================================================================
L('css-view-transition',
  'View Transition',
  'view transition — दृश्य बदल',
  'page बदल हार्मोनी गुळगुळीत.',
  [
   S('1. संक्रमण कल्पना',
     'view transition पृष्ठ बदलते.\n\nजुने ताजे मध्ये.\n\nएकच call संपूर्ण.\n\nब्राउझर स्वतः बनवतो.\n\nगुळगुळीत गती.\n\nउपयोग अचूक.',
     'document.startViewTransition(cb);'),
   S('2. पूर्वेकडील state',
     'दोन फ्रेम जुळतात.\n\nजुनी प्रतिमा संग्रह.\n\nनव्या लेआउटने.\n\nक्रॉस fade हळूच.\n\nपाठवणे स्पष्ट.\n\nस्वाभाविक वाटते.',
     '::view-transition-old(root) {\n  animation: fade-out 0.3s;\n}'),
   S('3. नवा थर',
     'नवीन थर वर येतो.\n\nक्रम स्थिर.\n\nname ने नियंत्रण.\n\nप्रत्येक भाग अलग.\n\nसुंदर थर.\n\nनियम नेमका.',
     '::view-transition-new(root) {\n  animation: fade-in 0.5s;\n}'),
   S('4. element नियुक्ती',
     'view-transition-name खास.\n\nघटकाला नाव मिळते.\n\nदोन पानांत समान.\n\nस्वतः चलते.\n\nहेडर स्माईल.\n\nसुंदर परिणाम.',
     '.logo {\n  view-transition-name: logo;\n}'),
   S('5. animation बदल',
     'पूर्ण animation नवी.\n\nक्लास नुसार नियम.\n\nreduced गोष्टी.\n\nगती कमी करा.\n\nप्रवेश्यता जपा.\n\nसवय योग्य.',
     '@media (prefers-reduced-motion: reduce) {\n  ::view-transition-group(*) {\n    animation: none !important;\n  }\n}'),
   S('6. आधार आणि use',
     'आधार मर्यादित नवा.\n\nfade जुने नियम.\n\nगरज टाकणे.\n\nकोड थोडा.\n\nसाधा बदल सुंदर.\n\nआधुनिक ब्राउझर पाहा.',
     '::view-transition-group(*),\n::view-transition-old(*),\n::view-transition-new(*) {\n  animation-duration: 0.4s;\n}'),
   S('Mini Project',
     'page swap गुळगुळीत.\n\nदोन फ्रेम.',
     'html {\n  view-transition-name: page;\n}'),
  ],
  ['transition काय?', 'old कुठे?', 'name कसे?'],
  [{'q':'startViewTransition?','o':['एक call','दोन','तीन'],'c':0},
   {'q':'old(root)?','o':['आधी','नंतर','रंग'],'c':0},
   {'q':'new(root)?','o':['नवा','जुना','मोठा'],'c':0},
   {'q':'name?','o':['घटक','रंग','फॉन्ट'],'c':0}],
  {'prompt':'page swap transition साधा.','starterCode':'html { view-transition-name: page; }','expectedOutput':'Renders a smooth cross-page view transition'},
  'view transition आधार?',
  ['css-contain-property', 'css-cascade-layers', 'css-masking-clip'],
  'css-contain-property', 'css-cascade-layers')

# =====================================================================
# 3. CASCADE LAYERS
# =====================================================================
L('css-cascade-layers',
  'Cascade Layers',
  '@layer — क्रम आणि जोडणी',
  'layer क्रम निवड अधिकार jपते.',
  [
   S('1. layer कल्पना',
     '@layer गट व्यवस्थित.\n\nपहिला नियम प्रथम.\n\nनंतरचा जिंकतो.\n\nक्रम स्पष्ट.\n\nकोड सुबक.\n\nनियोजन सोपे.',
     '@layer base, components, utilities;'),
   S('2. वारसा क्रम',
     'layer नंतरचा विजय.\n\nbase प्रथम.\n\nutilities शेवटी.\n\nहातचा विरोध.\n\nनवीन नियम वर.\n\nप्रत्येक सुटे.',
     '@layer base {\n  button {\n    padding: 6px 10px;\n  }\n}\n@layer utilities {\n  .p-2 {\n    padding: 8px;\n  }\n}'),
   S('3. हा !important',
     'important क्रम उलटा.\n\nपहिल्यांदा जिंकतो.\n\nकाळजी नको फार.\n\nविरुद्ध गिळणे.\n\nआधार समज.\n\nकोड थोडा.',
     '@layer base {\n  .btn {\n    color: #0f172a !important;\n  }\n}'),
   S('4. नामनिर्देशन',
     'नाव दिले तर सोपे.\n\n@layer name नियम.\n\nएकत्र जोडणी.\n\nपुनरावृत्ती नको.\n\nस्थान नेमके.\n\nस्वतःचा क्रम.',
     '@layer theme {}\n@layer components;\n@layer utilities {}'),
   S('5. unlayered नियम',
     'बाहेरचे नियम वरचे.\n\nसर्वात उंच अधिकार.\n\nपहिले हळूच.\n\nमिश्रण टाळा.\n\nक्रम समजा.\n\nआधार घट्ट.',
     'body {\n  margin: 0;\n}\n@layer base {\n  body {\n    margin: 8px;\n  }\n}'),
   S('6. आधार तपास',
     '@layer आधार नवीन.\n\nजुने ब्राउझर शैली.\n\nfallback साधा.\n\n@supports काही.\n\nक्रम रुजवा.\n\nकोड वाचता.',
     '@supports (layer: base) {\n  @layer components {}\n}'),
   S('Mini Project',
     'तीन थर घर.\n\nरंग स्थिर.',
     '@layer base, utilities;'),
  ],
  ['layer काय?', 'क्रम कसे?', 'important कुठे?'],
  [{'q':'@layer?','o':['गट','रंग','फॉन्ट'],'c':0},
   {'q':'नंतरचा जिंकतो?','o':['होय','नाही','मागे'],'c':0},
   {'q':'important?','o':['उलट','सरळ','रंग'],'c':0},
   {'q':'unlayered?','o':['वरचे','खाली','मागे'],'c':0}],
  {'prompt':'तीन layer ordered तयार.','starterCode':'@layer base, components, utilities;','expectedOutput':'Renders cascaded layered styles'},
  'layer उपयोग?',
  ['css-view-transition', 'css-scope-rule', 'css-cascade','css-masking-clip'],
  'css-view-transition', 'css-masking-clip')

# =====================================================================
# 4. MASKING CLIP
# =====================================================================
L('css-masking-clip',
  'Masking Clip',
  'mask — दृश्य कव्हर',
  'mask-image आणि clip संयोग.',
  [
   S('1. mask कल्पना',
     'mask-image भाग लपवतो.\n\nकाळा दृश्य.\n\nपांढरा मिटून.\n\nग्रेडियंट सॉफ्ट.\n\nआकार स्वतंत्र.\n\nनियम सोपा.',
     '.fade-bottom {\n  mask-image: linear-gradient(black, transparent);\n}'),
   S('2. mask-size',
     'mask-size repeat नियम.\n\nआकार मोजा.\n\nप्रत्येक उदाहरण.\n\nपोत सुंदर.\n\nसाखळी एकत्र.\n\nव्यवस्था स्पष्ट.',
     '.pattern {\n  mask-image: url(spark.svg);\n  mask-size: 40px 40px;\n  mask-repeat: repeat;\n}'),
   S('3. mask-position',
     'position केंद्र बदल.\n\nशीर्ष तळ.\n\nटक्के मूल्ये.\n\nरचना अचूक.\n\nहेडर झुकाव.\n\nनियम नेमका.',
     '.highlight {\n  mask-image: radial-gradient(circle, black 30%, transparent 70%);\n  mask-position: center;\n}'),
   S('4. clip संयोग',
     'clip-path आकार काट.\n\nmask रंग गुळगुळीत.\n\nदोन्ही एकत्र.\n\nthumb बनते.\n\nप्रत्येक थर वेगळा.\n\nफलित सुंदर.',
     '.thumb {\n  clip-path: circle(60%);\n  mask-image: radial-gradient(black 60%, transparent);\n}'),
   S('5. mask-composite',
     'composite दोन mask.\n\nadd union.\n\nsubtract अंतर.\n\nनवीन आधार.\n\nसखोल प्रभाव.\n\nवापर कमी.',
     '.logo-mask {\n  mask-image: url(a.svg), url(b.svg);\n  mask-composite: intersect;\n}'),
   S('6. आधार',
     'mask आधार मध्यम.\n\nprefix जुना webkit.\n\n@supports तपास.\n\nclip सरळ.\n\nकोड साधा.\n\nप्रत्येक मोड.',
     '@supports (mask-image: linear-gradient(black, transparent)) {\n  .deco {\n    mask-image: linear-gradient(white, transparent);\n  }\n}'),
   S('Mini Project',
     'thumb mask circle.\n\nsoft कडा.',
     '.thumb { mask-image: radial-gradient(black 60%, transparent); }'),
  ],
  ['mask काय?', 'composite कसे?', 'position कुठे?'],
  [{'q':'mask-image?','o':['लपवतो','रंगतो','फिरतो'],'c':0},
   {'q':'black भाग?','o':['दृश्य','लपलेले','अर्धे'],'c':0},
   {'q':'white भाग?','o':['मिटून','उघडा','जड'],'c':0},
   {'q':'composite?','o':['अंतर','आवाज','गती'],'c':0}],
  {'prompt':'soft circle avatar mask.','starterCode':'.avatar { mask-image: radial-gradient(black 60%, transparent); }','expectedOutput':'Renders a soft-edged masked circle avatar'},
  'mask उपयोग?',
  ['css-view-transition', 'css-box-decoration', 'css-font-fallback'],
  'css-cascade-layers', 'css-font-fallback')

# =====================================================================
# 5. FONT FALLBACK
# =====================================================================
L('css-font-fallback',
  'Font Fallback',
  'font — परतप्रमाण नियम',
  'font-face, stacks आणि features उपाय.',
  [
   S('1. font-face नियम',
     '@font-face खास प्रकार.\n\nस्वतःचा font जोडा.\n\nwoff2 सर्वोत्तम.\n\nweight style अलग.\n\nनाव नेमके.\n\nआधार घट्ट.',
     '@font-face {\n  font-family: "Mukta";\n  src: url(mukta.woff2) format("woff2");\n}'),
   S('2. stack रचना',
     'font-family stack मालिका.\n\nपहिला मिळेल तर.\n\nनाही तर पुढे.\n\nsystem शेवटी.\n\nमराठी आधार.\n\nअचूक उतरते.',
     'body {\n  font-family: "Mukta", "Noto Sans Devanagari", system-ui, sans-serif;\n}'),
   S('3. font-size-adjust',
     'x-height adjust समान होते.\n\nआकार एक सारखा.\n\nलहान प्रकार राखा.\n\nswap दर्शवते.\n\nआधार नवीन.\n\nस्पष्ट reading.',
     '.heading {\n  font-size-adjust: 0.5;\n}'),
   S('4. variable font',
     'variable जाडी अक्षर.\n\nfont-variation नियम.\n\nweight axis तोल.\n\nwidth रुंदी.\n\nछान सूक्ष्म.\n\nआधार चांगला.',
     '.semibold {\n  font-variation-settings: "wght" 600;\n}'),
   S('5. प्रवेश्यता',
     'पडणारा font वाचनीय.\n\nलहान आकार नको.\n\ncontrast जपा.\n\nमराठी देवनागरी.\n\nप्रत्येक वाचक.\n\nसवय योग्य.',
     'html {\n  font-size: 18px;\n  line-height: 1.6;\n}'),
   S('6. आधार नियम',
     'woff2 सर्व ठिकाणी.\n\nweb safe पर्याय.\n\nloaded before जरूर.\n\nerror स्थिर.\n\nकोड सुबक.\n\nप्रत्येक browser आदर.',
     'h1 {\n  font-family: "Mukta", ui-rounded, serif;\n  font-weight: 700;\n}'),
   S('Mini Project',
     'मराठी header stack द्या.\n\nदोन पर्याय.',
     'h1 { font-family: "Mukta", "Noto Sans Devanagari", serif; }'),
  ],
  ['font-face काय?', 'stack कसे?', 'adjust कुठे?'],
  [{'q':'woff2?','o':['आधुनिक','जुने','फॉन्ट'],'c':0},
   {'q':'stack?','o':['मालिका','रंग','नाव'],'c':0},
   {'q':'variation?','o':['axis','कडा','आकार'],'c':0},
   {'q':'system-ui?','o':['शेवट','सुरुवात','मध्य'],'c':0}],
  {'prompt':'मराठी font stack लावा.','starterCode':'body { font-family: "Mukta", "Noto Sans Devanagari", sans-serif; }','expectedOutput':'Renders Marathi text with a robust font stack'},
  'font उपाय?',
  ['css-masking-clip', 'css-gap-mastery', 'css-logical-props'],
  'css-masking-clip', 'css-sticky-nav')

# =====================================================================
# 6. STICKY NAV
# =====================================================================
L('css-sticky-nav',
  'Sticky Nav',
  'sticky — चिकट नेव्हिगेशन',
  'position sticky खोल नियम.',
  [
   S('1. sticky कल्पना',
     'position sticky चिकटवते.\n\nscroll सोबत थांबते.\n\nजागा राहते.\n\nparent मध्ये फिरते.\n\nशीर्षावर अडके.\n\nसहज नियम.',
     '.nav {\n  position: sticky;\n  top: 0;\n}'),
   S('2. container मर्यादा',
     'sticky फक्त parent आत.\n\nपण तेवढ्यात थांबते.\n\nशेवटी जागा सुटते.\n\nheight व्यवस्थित.\n\nआधार स्पष्ट.\n\nनियम मानवी.',
     '.page {\n  min-height: 100vh;\n}\n.side {\n  position: sticky;\n  top: 16px;\n}'),
   S('3. थर स्टॅक',
     'sticky z-index सह.\n\nपुढे दिसावा.\n\noverlay नको.\n\nक्रम नेमका.\n\nप्रत्येक nav.\n\nदृश्य व्यवस्थित.',
     '.nav {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n}'),
   S('4. subnav नियम',
     'दुसरा sticky खाली.\n\ntwo-level सुंदर.\n\nआधार समान.\n\nscroll तोल.\n\nगरज असल्यास.\n\nडिझाइन स्वच्छ.',
     '.subnav {\n  position: sticky;\n  top: 56px;\n  z-index: 30;\n}'),
   S('5. भाग वर्ग',
     'लहान corner चिकट.\n\nback-to-top उपयोग.\n\nscroll नंतर दिसे.\n\ninteraction सोपे.\n\nkeyboard मार्ग.\n\nप्रवेश्यता जपा.',
     '.back-top {\n  position: sticky;\n  bottom: 16px;\n}'),
   S('6. आधार तपास',
     'sticky आधार मजबूत.\n\nजुने fixed वेगळे.\n\noverflow मर्यादा.\n\nइच्छा असल्यास.\n\nकोड सोपा.\n\nप्रत्येक device.',
     '.table-wrap {\n  overflow: auto;\n}\nth {\n  position: sticky;\n  top: 0;\n  background: #f8fafc;\n}'),
   S('Mini Project',
     'तीन भाग sticky द्या.\n\nहेडर स्थिर.',
     '.header { position: sticky; top: 0; }'),
  ],
  ['sticky काय?', 'top कसे?', 'z-index कुठे?'],
  [{'q':'sticky?','o':['चिकट','रंग','फॉन्ट'],'c':0},
   {'q':'parent मर्यादा?','o':['होय','नाही','मागे'],'c':0},
   {'q':'z-index?','o':['थर','रंग','ताप'],'c':0},
   {'q':'back-to-top?','o':['bottom','top','रंग'],'c':0}],
  {'prompt':'चिकट nav तयार.','starterCode':'.nav { position: sticky; top: 0; z-index: 40; }','expectedOutput':'Renders a sticky header nav'},
  'sticky आधार?',
  ['css-font-fallback', 'css-gap-mastery', 'css-masking-clip'],
  'css-font-fallback', 'css-gap-mastery')

# =====================================================================
# 7. GAP MASTERY
# =====================================================================
L('css-gap-mastery',
  'Gap Mastery',
  'gap — अंतर विजय',
  'gap सर्वत्र flex grid आणि column.',
  [
   S('1. flex gap',
     'flex दिशा अंतर.\n\nmargin नको गरज.\n\nसामुहिक नियम.\n\nदोन्ही अनुलंब.\n\nघटक स्वतंत्र.\n\nस्पष्ट आराम.',
     '.row {\n  display: flex;\n  gap: 12px;\n}'),
   S('2. grid gap',
     'grid रिक्त अंतर.\n\nrow-gap आणि column.\n\nदोन मूल्ये.\n\nसुंदर नेटवर्क.\n\nकार्ड सरळ.\n\nविशाल नियम.',
     '.grid {\n  display: grid;\n  gap: 24px 12px;\n}'),
   S('3. column gap',
     'column रचना अंतर.\n\ncolumn-gap प्रमाण.\n\none दोन काळ.\n\nवाचन गुळगुळीत.\n\nविभाग स्पष्ट.\n\nआधार घट्ट.',
     '.story {\n  columns: 2;\n  column-gap: 2em;\n}'),
   S('4. row अंतर',
     'row-gap अनुलंब.\n\nflex सोबत उत्तम.\n\ncompact यादी.\n\nगरज नेमकी.\n\nकोड छोटा.\n\nव्यवस्था स्पष्ट.',
     '.list {\n  display: flex;\n  flex-wrap: wrap;\n  row-gap: 8px;\n}'),
   S('5. नियम संयोजन',
     'margin सोबत gap मिश्रण.\n\nसोबत मिश्रण वाढे.\n\nसंतुलन जपा.\n\nअंतर मोजा.\n\nप्रत्येक रचना.\n\nसवय चांगली.',
     '.card {\n  display: grid;\n  gap: 10px;\n  padding: 16px 0;\n}'),
   S('6. आधार तपास',
     'gap उपक्रमांत व्यापक.\n\nजुने margin fallback.\n\nदोन्ही लिहा.\n\nसुरक्षित पर्याय.\n\nसध्याचे सर्व चांगले.\n\nकोड स्वच्छ.',
     '.row > * + * {\n  margin-left: 12px;\n}\n.row {\n  gap: 12px;\n}'),
   S('Mini Project',
     'chip row gap द्या.\n\nदोन्ही दिशा.',
     '.chips { display: flex; gap: 8px; }'),
  ],
  ['gap काय?', 'grid कसे?', 'column कुठे?'],
  [{'q':'gap flex?','o':['अंतर','रंग','फॉन्ट'],'c':0},
   {'q':'row-gap?','o':['उभी','सपाट','जड'],'c':0},
   {'q':'column-gap?','o':['रुंदी','उंची','रंग'],'c':0},
   {'q':'fallback?','o':['margin','padding','border'],'c':0}],
  {'prompt':'chip row gap साधा.','starterCode':'.chips { display: flex; gap: 8px; }','expectedOutput':'Renders a chip row with even gaps'},
  'gap आधार?',
  ['css-sticky-nav', 'css-box-decoration', 'css-contain-property'],
  'css-sticky-nav', 'css-box-decoration')

# =====================================================================
# 8. BOX DECORATION
# =====================================================================
L('css-box-decoration',
  'Box Decoration',
  'box decoration — विभाग सजावट',
  'decoration-break आणि सावली नियम.',
  [
   S('1. decoration नियम',
     'box-decoration-break भाग सजवतो.\n\nओळींनी शैली.\n\nslice पहिला.\n\nclone नवा.\n\nखंड स्पष्ट.\n\nनियम नेमका.',
     'span {\n  box-decoration-break: clone;\n}'),
   S('2. सावली थर',
     'अनेक सावल्या एकत्र.\n\nत्रि आकारमान.\n\nगहन प्रकाश.\n\nबटण उठते.\n\nextra अंधार.\n\nव्यवस्था तोल.',
     '.btn {\n  box-shadow: 0 1px 2px rgb(0 0 0 / 10%), 0 4px 12px rgb(0 0 0 / 15%);\n}'),
   S('3. inset सावली',
     'inset आतमध्ये.\n\nखोल दाबले.\n\npressed बटण.\n\nएकटा नियम.\n\nhappy टोक.\n\nउदाहरण स्पष्ट.',
     '.pressed {\n  box-shadow: inset 0 2px 4px rgb(0 0 0 / 10%);\n}'),
   S('4. text-shadow',
     'text-shadow अक्षर उजळ.\n\nदोन थर दाट.\n\nneon प्रभाव.\n\nवाचनीय ठेवा.\n\nरंग जपा.\n\nकोड सुबक.',
     '.neon {\n  text-shadow: 0 0 8px #22d3ee, 0 0 24px #06b6d4;\n}'),
   S('5. outline अंतर',
     'outline-offset जागा.\n\nfocus रिंग छान.\n\nborder पेक्षा अलग.\n\nप्रवेश्यता नेमकी.\n\nदृश्य स्पष्ट.\n\nनियम सोपा.',
     '.focus-ring:focus {\n  outline: 2px solid #7c3aed;\n  outline-offset: 3px;\n}'),
   S('6. आधार तपास',
     'clone नवीन आधार.\n\nslice जुने.\n\nसर्वभाग नियम.\n\nmask न वापरा.\n\nप्रत्येक ब्राउझर.\n\nस्वच्छ कोड.',
     '.quote {\n  box-decoration-break: clone;\n  border-inline-start: 4px solid #2563eb;\n}'),
   S('Mini Project',
     'quote clone सजवा.\n\nबॉर्डर खोली.',
     '.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }'),
  ],
  ['clone काय?', 'shadow कसे?', 'inset कुठे?'],
  [{'q':'slice?','o':['पहिला','नवा','रंग'],'c':0},
   {'q':'clone?','o':['नवा','जुना','मोठा'],'c':0},
   {'q':'inset?','o':['आत','बाहेर','वर'],'c':0},
   {'q':'offset?','o':['अंतर','रंग','जाड'],'c':0}],
  {'prompt':'quote आधिकार clone द्या.','starterCode':'.quote { box-decoration-break: clone; border-inline-start: 4px solid #2563eb; }','expectedOutput':'Renders a decorated quote with cloned borders'},
  'box decoration आधार?',
  ['css-gap-mastery', 'css-logical-props', 'css-masking-clip'],
  'css-gap-mastery', 'css-logical-props')

# =====================================================================
# 9. LOGICAL PROPS
# =====================================================================
L('css-logical-props',
  'Logical Props',
  'logical — दिशा साधन',
  'block inline आणि logical इनसेट.',
  [
   S('1. logical कल्पना',
     'logical props दिशा स्वतः.\n\nblock उभी.\n\ninline सपाट.\n\nRTL लवचिक.\n\ntext-सोबत चालते.\n\nनियम आधुनिक.',
     '.box {\n  margin-block: 16px;\n  padding-inline: 12px;\n}'),
   S('2. block inline',
     'inline-start डावी.\n\nblock-start वर.\n\nmismatch उलट.\n\nप्रत्येक बाजू.\n\nसामंजस्य रोख.\n\nव्यवस्था साधी.',
     '.note {\n  border-inline-start: 3px solid #0ea5e9;\n  padding-block: 8px;\n}'),
   S('3. logical inset',
     'inset-block उभी.\n\ninset-inline क्षैतिज.\n\nशॉर्टकट सोय.\n\nposition अचूक.\n\nस्क्रीन स्वतः.\n\nकोड लहान.',
     '.overlay {\n  position: fixed;\n  inset: 0;\n}'),
   S('4. text-align logical',
     'text-align start नियम.\n\nend शेवट.\n\nदिशा नशिब.\n\nमराठी अरबी सोय.\n\nप्रत्येक भाषा.\n\nआधार घट्ट.',
     '.article {\n  text-align: start;\n}'),
   S('5. grid logical',
     'grid logical भाग.\n\nstart end प्रमाण.\n\nरचना स्वतः.\n\nflex सोबत समान.\n\nआधार नवीन.\n\nभाग स्पष्ट.',
     '.layout {\n  display: grid;\n  place-items: start center;\n}'),
   S('6. आधार तपास',
     'logical आधार मजबूत.\n\nजुने physical ही.\n\nदोन्ही लिहा.\n\nसुरक्षा वाढ.\n\nसध्याचे चांगले.\n\nकोड वाचता.',
     '.meta {\n  padding-inline: var(--sp, 8px);\n  padding-left: 8px;\n}'),
   S('Mini Project',
     'note logical border.\n\nदिशा स्वतः.',
     '.note { border-block-start: 3px solid #0ea5e9; padding-inline: 12px; }'),
  ],
  ['block काय?', 'inline कसे?', 'inset कुठे?'],
  [{'q':'block?','o':['उभी','सपाट','रंग'],'c':0},
   {'q':'inline-start?','o':['डावी','वर','खाली'],'c':0},
   {'q':'inset?','o':['सर्व','एक','दोन'],'c':0},
   {'q':'RTL?','o':['उलट','सरळ','जड'],'c':0}],
  {'prompt':'logical border note साधा.','starterCode':'.note { border-inline-start: 3px solid #0ea5e9; }','expectedOutput':'Renders a note with logical start border'},
  'logical उपयोग?',
  ['css-box-decoration', 'css-font-fallback', 'css-scope-rule'],
  'css-box-decoration', 'css-scope-rule')

# =====================================================================
# 10. SCOPE RULE
# =====================================================================
L('css-scope-rule',
  'Scope Rule',
  '@scope — मर्यादा नियम',
  'scope proximity आणि स्थान नियंत्रण.',
  [
   S('1. scope कल्पना',
     '@scope विभाग मर्यादित.\n\nघटक आतला.\n\nसीमा नियम.\n\nएकटा रंग.\n\nस्थान स्पष्ट.\n\nनियम नेमका.',
     '@scope (.card) {\n  h3 {\n    color: #0f172a;\n  }\n}'),
   S('2. सीमा (to)',
     'to सीमा थांबते.\n\nआतील निवडणे.\n\nबाहेरचे रक्षण.\n\nप्रत्येक विभाग.\n\nसखोल संग्रह.\n\nआधार नवीन.',
     '@scope (.article) to (.footnote) {\n  p {\n    line-height: 1.7;\n  }\n}'),
   S('3. proximity नियम',
     'जवळचा विजय.\n\nspecificity समान.\n\nजवळ कोण.\n\nहलके नियम.\n\nनिर्णय सोपा.\n\nक्रम दुय्यम.',
     '@scope (.a) { p { color: red; } }\n@scope (.b) { p { color: blue; } }'),
   S('4. nesting',
     'ते स्वतः.\n\n@scope शक्यतो.\n\nघट्ट रचना.\n\nउपयोग साधा.\n\nनियम संयोजन.\n\nभाग स्पष्ट.',
     '.article {\n  @scope {\n    h2 + p {\n      margin-top: 0.6em;\n    }\n  }\n}'),
   S('5. मर्यादा',
     'class अजून आंतर.\n\nscope आधार नवीन.\n\nजुने नियम चालू.\n\nमिश्रण टाळा.\n\nगरज न्याय्य.\n\nकोड थोडा.',
     '@scope (.section) {\n  .card {\n    border-radius: 12px;\n  }\n}'),
   S('6. आधार तपास',
     '@scope आधार नवीन.\n\nfallback साधा.\n\nsame विचार.\n\ntest सर्वत्र.\n\nकोड स्वच्छ.\n\nनवीन kronolog.',
     '.card h3 {\n  color: #0f172a;\n}\n@scope (.card) {\n  h3 {\n    color: #0f172a;\n  }\n}'),
   S('Mini Project',
     'card scope हलके.\n\ncolor स्थिर.',
     '@scope (.card) { h3 { color: #0f172a; } }'),
  ],
  ['scope काय?', 'to सीमा?', 'proximity कुठे?'],
  [{'q':'@scope?','o':['मर्यादा','रंग','फॉन्ट'],'c':0},
   {'q':'to?','o':['सीमा','केंद्र','शेवट'],'c':0},
   {'q':'proximity?','o':['जवळचा','दुरचा','मोठा'],'c':0},
   {'q':'nesting?','o':['शक्य','नको','रंग'],'c':0}],
  {'prompt':'card scope color द्या.','starterCode':'@scope (.card) { h3 { color: #0f172a; } }','expectedOutput':'Renders scoped card heading color'},
  'scope आधार?',
  ['css-logical-props', 'css-cascade-layers', 'css-will-change'],
  'css-logical-props', 'css-will-change')

# =====================================================================
# 11. WILL CHANGE
# =====================================================================
L('css-will-change',
  'Will Change',
  'will-change — गती इशारा',
  'performance, layers आणि बचत नियम.',
  [
   S('1. will-change कल्पना',
     'will-change इशारा देते.\n\nब्राउझर तयार होते.\n\nanimation सुरळीत.\n\nजास्त नको.\n\nकाळजी घ्या.\n\nप्रत्येक घटक नियम.',
     '.hoverable {\n  will-change: transform;\n}'),
   S('2. layer बचत',
     'composite layer दूर.\n\ngpu सोय.\n\nscroll स्थिर.\n\nanimate सोपे.\n\nपेन थर मर्यादित.\n\nतेज वाढ.',
     '.stick {\n  position: fixed;\n  will-change: transform;\n}'),
   S('3. कमी वापर',
     'अनावश्यक नको.\n\nकोड नियम कमी.\n\npause वेळी सोडा.\n\nhover आधी.\n\nस्मृती वाचा.\n\nचांगला equilibria.',
     '.card:hover {\n  will-change: transform;\n}\n.card {\n  transition: transform 0.3s;\n}'),
   S('4. contain सह',
     'contain-intrinsic सह.\n\nदोन्ही सराईत.\n\nभाग मर्यादित.\n\nमोठी यादी.\n\nगती फायदा.\n\nनियम एकत्र.',
     '.virtual {\n  content-visibility: auto;\n  contain-intrinsic-size: 0 200px;\n}'),
   S('5. animation विना will',
     'काही गुणधर्म नियम.\n\ntransform opacity.\n\nपेंट नवीन.\n\nगुळगुळीत वाटे.\n\nपरफॉर्मेंस जपा.\n\nकोड स्वच्छ.',
     '.move {\n  animation: slide 0.4s ease;\n}'),
   S('6. आधार तपास',
     'will-change आधार घट्ट.\n\nजुने नियम समान.\n\nकडक मोजमाप.\n\nतपासणी नेमकी.\n\nसर्वोत्तम सवय.\n\nशेवटचा नियम.',
     '@media (prefers-reduced-motion: reduce) {\n  .move {\n    animation: none;\n  }\n}'),
   S('Mini Project',
     'card hover तेज द्या.\n\ntransform layer.',
     '.card { will-change: transform; }'),
  ],
  ['will-change काय?', 'layer कुठे?', 'रंग कमी?'],
  [{'q':'will-change?','o':['इशारा','रंग','नाव'],'c':0},
   {'q':'gpu?','o':['तेज','मंद','रंग'],'c':0},
   {'q':'कमी वापर?','o':['होय','नाही','काही'],'c':0},
   {'q':'reduced?','o':['नियम','रंग','आकार'],'c':0}],
  {'prompt':'card hover tejas द्या.','starterCode':'.card { will-change: transform; }','expectedOutput':'Renders a performant hover-transform card'},
  'will-change आधार?',
  ['css-scope-rule', 'css-contain-property', 'css-sticky-nav'],
  'css-scope-rule', 'css-marathi-capstone6')

# =====================================================================
# 12. MARATHI CAPSTONE 6
# =====================================================================
L('css-marathi-capstone6',
  'Marathi Capstone 6',
  'Portal Nexus — दृश्य संग्रह',
  'सर्व Level 6 तंत्रांचा संग्रह.',
  [
   S('1. ध्येय',
     'portal nexus संग्रह.\n\nभाग सुंदर जोड.\n\ncontain speed.\n\ntransition सुरळीत गती.\n\ndark प्रकाश.\n\nअंतिम portal.',
     '.portal {\n  content-visibility: auto;\n  contain: layout paint;\n}'),
   S('2. थ्रेशहोल्ड थर',
     'तीन layer घर.\n\nbase theme.\n\nutilities शेवट.\n\norder स्थिर.\n\ncolor एकत्र.\n\nनियम शुद्ध.',
     '@layer base, theme, utilities;'),
   S('3. mask हेडर',
     'हेडर mask धूसर.\n\ngradient सॉफ्ट कडे.\n\nशीर्षक मोठा.\n\ndeco कोपरे.\n\nरचना उजळ.\n\nदृश्य नीट.',
     '.masthead {\n  mask-image: radial-gradient(black 55%, transparent);\n}'),
   S('4. font आधार',
     'मराठी stack मजबूत.\n\nMukta आधार.\n\nNoto पर्याय.\n\nअक्षर शांत.\n\nवाचन व्यवस्था.\n\nएकसारखे आकार.',
     '.portal {\n  font-family: "Mukta", "Noto Sans Devanagari", sans-serif;\n}'),
   S('5. sticky स्ट्रक्चर',
     'हेडर sticky वर.\n\nsubnav खाली.\n\nsidebar उजवी.\n\nगॅप समान.\n\nअंतर तोल.\n\nस्क्रोल स्थिर.',
     '.portal {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n}'),
   S('6. आधार मोठा',
     '@scope नियम आत.\n\nlogical border.\n\nneed कमी.\n\nwill-change हलका.\n\nतपासणी अंतिम.\n\nLevel 6 पूर्ण.',
     '@scope (.card) {\n  h3 { color: #0f172a; }\n}\n.main {\n  margin-block: 24px;\n}'),
   S('Mini Project',
     'portal जोडा.\n\nसर्व भाग.',
     '.portal { min-height: 100vh; }'),
  ],
  ['layer कसे?', 'mask कुठे?', 'sticky काय?'],
  [{'q':'nexus?','o':['संग्रह','रंग','एक'],'c':0},
   {'q':'contain?','o':['तेज','मंद','रंग'],'c':0},
   {'q':'sticky?','o':['चिकट','साधा','जड'],'c':0},
   {'q':'@scope?','o':['मर्यादा','रंग','आकार'],'c':0}],
  {'prompt':'portal nexus पूर्ण.','starterCode':'.portal { min-height: 100vh; }','expectedOutput':'Renders polished Marathi portal nexus using Level 6 techniques'},
  'Level 6 नवीन काय?',
  ['css-will-change', 'css-view-transition'],
  'css-will-change', 'css-contain-property')

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
    parts.append("    levelLabel: CSS6_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 6 — Modern Control ===\n'
    header += 'export const CSS6_LABEL = "CSS · Level 6 — Modern Control";\n'
    header += '\nexport const cssLevel6: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css6_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css6_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css6_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level6.ts')
print("WROTE css-level6.ts, lines:", len(out.split(chr(10))))