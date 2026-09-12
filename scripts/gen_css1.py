# -*- coding: utf-8 -*-
# Generator for CSS Level 1 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/css-level1.ts. Base content ~100-135 words/section,
# self-contained code cells (CSS only), codeLanguage: "css".
import json, subprocess, shutil

CODE_LANG = "css"

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=12):
    lessons.append({
        'slug': slug, 'categoryId': 'web', 'title': title, 'marathiTitle': mt,
        'level': 'beginner', 'minutes': minutes, 'summary': summary,
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
# 1. STRUCTURE & CASCADE
# =====================================================================
L('css-structure-cascade',
  'Structure & Cascade',
  'CSS — रचना आणि कलेक्ट नियम',
  'CSS फाइल कशी जोडायची, cascade कसे काम करते आणि शैली कोणती जिंकते.',
  [
   S('1. CSS म्हणजे',
     'CSS ही शैली भाषा — पेजला रंग रूप देते.\n\nHTML रचना सांगते; CSS दृश्य बनवते.\n\nहे two भाग एकत्र पेज घडवतात.\n\nCSS फाइल वेगळी असते — HTML मध्ये जोडतात.\n\nरंग, आकार, अंतर — सर्व येथून ठरते.',
     '<link rel="stylesheet" href="style.css">'),
   S('2. शैली जोडणी',
     'शैली तीन प्रकारे जोडता येते.\n\nबाह्य फाइल — सर्वांत इष्ट.\n\nhead मध्ये style block — लहान पेजसाठी.\n\nattribute सह — एका घटकासाठी.\n\nसामान्य: बाह्य फाइल राखणे योग्य.',
     '<p style="color: blue">थेट शैली</p>',
     ),
   S('3. नियम रचना',
     'प्रत्येक नियम दोन भाग — selector आणि declaration.\n\nselector कोणता घटक निवडतो हे सांगतो.\n\ndeclaration मध्ये गुणधर्म आणि मूल्य.\n\nमूल्य नेमक्या manner मध्ये लिहिले जाते.\n\nरचना समजली की CSS वाचायला सोपे.',
     'p {\n  color: green;\n}'),
   S('4. cascade तत्त्व',
     'cascade म्हणजे नियमांत जिंकणारा क्रम.\n\nदोन नियम लागू झाल्यास नंतरचा जिंकतो.\n\nमहत्त्व आणि क्रम दोन्ही ठरते.\n\nspecificity जास्त असल्यास तोच विजयी.\n\nहा नियम समजला की CSS खुले होते.',
     'p { color: red; }\np { color: blue; }'),
   S('5. specificity मूल',
     'specificity म्हणजे निवडकर्त्याचे वजन.\n\nid सर्वांत जड; class नंतर; tag हलका.\n\nजास्त वजन असलेला नियम जिंकतो.\n\nमोजक्या class ने कोड नीट राहतो.\n\nवजन समजले की त्रास टळतो.',
     '.note { color: teal; }'),
   S('6. सवयी',
     'नियम वाचण्यासाठी प्रत्येक भाग नवी ओळ.\n\nगुणधर्माकडे एक मूल्य — स्पष्टता.\n\nक्रम लहान ते मोठा ठेवा.\n\nप्रत्येक पेजचा मुख्य stylesheet वेगळा.\n\nशुद्ध नियम — पुढे टिकतो.',
     'h1 {\n  color: navy;\n  font-size: 32px;\n}'),
   S('Mini Project',
     'मराठी नमुना पेज तयार करा.\n\nएक stylesheet फाइल. तीन levels शैली.\n\ncascade दर्शवणारी दोन ओळी.\n\nप्रत्येक घटक indexed दिसतो.',
     '<link rel="stylesheet" href="style.css">\n<h1>मराठी शैली</h1>\n<p>हे आमचे पहिले रंग.</p>'),
  ],
  ['CSS काय करते?', 'शैली तीन प्रकारे कशी?', 'selector म्हणजे?', 'cascade नियम काय?'],
  [{'q':'शैली भाषा?','o':['CSS','HTML','SQL','HTTP'],'c':0},
   {'q':'बाह्य फाइल जोडणी?','o':['link tag','script tag','meta tag','slot'],'c':0},
   {'q':'कोणता घटक निवडतो?','o':['selector','declaration','attribute','event'],'c':0},
   {'q':'id चे वजन?','o':['जास्त','शून्य','कमी','नाही'],'c':0}],
  {'prompt':'CSS नमुना संरचना','starterCode':'<link rel="stylesheet" href="style.css">','expectedOutput':'Renders styled marathi sample page'},
  ['cascade विरुद्ध specificity?', 'CSS फाइल का वेगळी?'],
  ['css-marathi-project', 'css-selectors-basics'],
  'css-marathi-project', 'css-selectors-basics')

# =====================================================================
# 2. SELECTORS BASICS
# =====================================================================
L('css-selectors-basics',
  'Selectors Basics',
  'Selectors — निवडक विवरण',
  'tag, class आणि id selectors, attribute work आणि selector सवयी.',
  [
   S('1. tag selector',
     'tag selector म्हणजे घटक नावावर शैली.\n\np, h1, a — हे सर्व tags.\n\nएका rule ने मोठा गट रंगतो.\n\nबेस शैलीसाठी tag selector योग्य.\n\nमर्यादा: प्रत्येकाला वेगळा करता येत नाही.',
     'p { color: #333; }'),
   S('2. class selector',
     'class दोन घटकांना मिळून वापरता येतो.\n\nattribute मधील नाव class असते.\n\nCSS मध्ये बिंदू चिन्ह. नाव पुनरावृत्ती करता.\n\nउदा. सर्व warning संदेश एकाच शैली.\n\nclass ही सर्वांत वापरायची निवड.',
     '.grid-आधार {\n  display: grid;\n}'),
   S('3. id selector',
     'id एकाच घटकाला म्हणतात.\n\nपेजमध्ये id अद्वितीय — फक्त एकदा.\n\nCSS मध्ये hash चिन्हाने लिहिले जाते.\n\nविलक्षण घटकासाठी id योग्य.\n\nशैलीसाठी id कमी; class जास्त सोयीचा.',
     '#मुख्य {\n  padding: 1rem;\n}'),
   S('4. combine selector',
     'selectors मिळवून शैली अचूक करता.\n\nspace म्हणजे आतला घटक.\n\nहे वृक्ष रचना दर्शवते — नाते स्पष्ट.\n\nकोणताही नातेवाईक अलग रंगवा.\n\nगोंधळ टाळण्यासाठी कमी खोली.',
     'header h1 { color: maroon; }'),
   S('5. वजन वापर',
     'प्रत्येक प्रकाराचे वजन वेगळे.\n\ntag हलका; class मध्यम; id जड.\n\nवजन मिळवून नियम निर्णय घेतो.\n\nमोठ्या नियमांत जिंकणारा हा.\n\nवजन समजल्यावर bug कमी होतात.',
     '.card { border: 1px solid #ddd; }'),
   S('6. सवय आणि नावे',
     'नावे मराठी किंवा इंग्रजी द्यावी.\n\nनाव नेमके आणि अर्थपूर्ण हवे.\n\nCSS नावे कधीही मोठी कॅप्स नको.\n\nक्रिया तपासताना class शोध सोपा.\n\nनावे आणि काम सारखी असू देत.',
     '.button {\n  cursor: pointer;\n}'),
   S('Mini Project',
     'निवडकता पेज बनवा.\n\nएक tag selector. एक class. एक id.\n\nनाते combine. वजन नोट.\n\nतीनही प्रकार दृश्यात ठरतात.',
     '.warning { color: darkred; }\n#टीप { background: #f9f9f9; }'),
  ],
  ['tag selector म्हणजे?', 'class दोन घटकांना?', 'id कसे दर्शवतात?', 'space combine काय?'],
  [{'q':'घटक नाव शैली?','o':['tag selector','flex','grid','float'],'c':0},
   {'q':'CSS class चिन्ह?','o':['.','#','>','+'],'c':0},
   {'q':'id कुठे वापरू?','o':['एकदाच','अनेक','कधीच','रंगासाठी'],'c':0},
   {'q':'आतला घटक?','o':['space','comma','dash','dot'],'c':0}],
  {'prompt':'निवडकता पेज','starterCode':'.warning { color: darkred; }','expectedOutput':'Renders selector demo page'},
  ['class आणि id फरक?', 'spec वजन कसे मोजतात?'],
  ['css-structure-cascade', 'css-box-model'],
  'css-structure-cascade', 'css-box-model')

# =====================================================================
# 3. BOX MODEL
# =====================================================================
L('css-box-model',
  'Box Model',
  'Box Model — प्रत्येक घटक खोका',
  'margin, border, padding आणि content — घटकाचे अंतर नियम.',
  [
   S('1. खोका कल्पना',
     'प्रत्येक घटक एक खोका — चार थरांचा.\n\nआत content; नंतर padding; नंतर border.\n\nसर्वात बाहेर margin.\n\nप्रत्येक थर अंतर ठरवतो.\n\nखोका समजला की संरेखन सोपे होते.',
     'div {\n  padding: 8px;\n  border: 1px solid;\n}'),
   S('2. content भाग',
     'content मजकूर, चित्र किंवा नियंत्रण असते.\n\nत्याचा आकार width आणि height सांगतो.\n\nइतर थर content भोवती गुंडाळतात.\n\ncontent मोठा झाला की खोका वाढतो.\n\nसुरुवात content च आधार आहे.',
     'p { background: #eee; }'),
   S('3. padding अंतर',
     'padding content आणि border मधील अंतर.\n\nआतल्या जागेचा नियंत्रण करते.\n\nप्रत्येक बाजू वेगळी सांगता येते.\n\nमोकळेपणा वाढवण्यासाठी padding.\n\nकोड पॅडिंग ने स्पष्ट दिसतो.',
     '.card { padding: 1rem; }'),
   S('4. border किनारी',
     'border ही घटकाची बाह्य किनारी.\n\nजाडी, शैली आणि रंग — तीन गुण.\n\nउदा. solid dashed dotted या शैली.\n\nborder भर घटकाला मर्यादा देतो.\n\nसाधी किनारी sanitize दिसते.',
     '.box { border: 2px solid navy; }'),
   S('5. margin बाहेर',
     'margin घटकाबाहेरली जागा ठरवतो.\n\ndistance शेजारील घटकापासून.\n\nघटक वजन आणि आकार यांनी ठरतो.\n\nmargin कमी केला की घटक जवळ येतात.\n\nदोन margin एकमेकांना भेटल्यास एक जिंकतो.',
     '.item { margin: 4px; }'),
   S('6. box-sizing',
     'box-sizing हा आकार नियम बदलतो.\n\ncontent-box मध्ये width फक्त content.\n\nborder-box मध्ये सर्व थर सामावला.\n\nborder-box वापरल्यास आकार सोपा.\n\nसर्व घटकांसाठी ही सवय ठेवा.',
     '* {\n  box-sizing: border-box;\n}'),
   S('Mini Project',
     'खोका नमुना रचना.\n\nतीन घटक. padding शैली.\n\nborder आणि margin नियम.\n\nborder-box जागता टीप.',
     '.card {\n  padding: 1rem;\n  border: 1px solid #ccc;\n  margin: 1rem;\n}'),
  ],
  ['खोक्याचे चार थर?', 'padding काय करते?', 'border तीन गुण?', 'box-sizing काय बदलतो?'],
  [{'q':'content आणि border मधील?','o':['padding','margin','flex','grid'],'c':0},
   {'q':'घटकाबाहेरली जागा?','o':['margin','padding','gap','routing'],'c':0},
   {'q':'किनारी जाडी?','o':['border','shadow','radius','width'],'c':0},
   {'q':'width सर्व सामावणे?','o':['border-box','content-box','float','none'],'c':0}],
  {'prompt':'खोका नमुना','starterCode':'.card { padding: 1rem; border: 1px solid; }','expectedOutput':'Renders box layout demo'},
  ['padding आणि margin फरक?', 'box-sizing का लावतात?'],
  ['css-selectors-basics', 'css-colors-background'],
  'css-selectors-basics', 'css-colors-background')

# =====================================================================
# 4. COLORS & BACKGROUND
# =====================================================================
L('css-colors-background',
  'Colors & Background',
  'रंग आणि पार्श्वभूमी',
  'रंग मूल्ये, alpha व्यवस्था आणि background shailee.',
  [
   S('1. रंग कल्पना',
     'रंग हा पेजला जग देतो.\n\nनावाने रंग — red, blue सारखे.\n\nहेक्स मूल्य — तंतोतंत.\n\nरंग तीन प्रकार वापरता येतात.\n\nसातत्य राखल्यास दृश्य सुंदर.',
     'h1 { color: red; }'),
   S('2. हेक्स मूल्य',
     'हेक्स म्हणजे हॅश आणि सहा अंक.\n\nलाल, हिरवा, निळा — तीन भाग.\n\nप्रत्येक भाग शून्य ते फ दरम्यान.\n\nलहान आवृत्ती — थोडी आकडे.\n\nभरपूर text करून निवडा.',
     '.रंग { color: #a11; }'),
   S('3. alpha गुण',
     'alpha म्हणजे रंगाची पारदर्शकता.\n\nrgba मध्ये चौथा मूल्य.\n\nशून्य म्हणजे अदृश्य; एक घन.\n\nस्तर जोडणीसाठी alpha उपयोगी.\n\nगुणवत्ता राहून नावे ठरवा.',
     '.bg { background: rgba(0, 0, 0, 0.4); }'),
   S('4. background गुणधर्म',
     'background ची शैली जोडता येते.\n\nरंग, चित्र किंवा gradient.\n\nगुणधर्म एकत्र लिहून संक्षेप.\n\nपार्श्वभूमी मागे राहते — पुढे मजकूर.\n\nसाधन background स्पष्ट दिसते.',
     'body {\n  background: #f5f5f5;\n}'),
   S('5. gradient दिशा',
     'gradient म्हणजे दोन रंगांचे धीमे एकत्र.\n\nउभे, आडवे किंवा कोनीय निर्देश.\n\nहे गुळगुळीत संक्रमण दाखवते.\n\nप्रत्येक वेळी gradient update होतो.\n\nहलक्या रंगांतून सुरुवात.',
     '.hero {\n  background: linear-gradient(45deg, pink, white);\n}'),
   S('6. तुलना नियम',
     'रंग आणि आधार सुसंगत हवा.\n\nटेक्स्ट वाचता येणे महत्त्वाचे — contrast.\n\nगडद मागे; फिकट मजकूर किंवा उलट.\n\nपहिल्या स्क्रीनवर रंग कसा दिसतो.\n\nमराठी मजकुरासाठी वाचनीयता निर्धार.',
     'body { color: #222; }\n.badge { color: white; background: navy; }'),
   S('Mini Project',
     'रंग नमुना पेज.\n\nतीन रंग भिन्न रीतीने.\n\ngradient भाग. alpha टीप.\n\nप्रत्येक रंग नावासह दिसतो.',
     '.मुख्य {\n  background: linear-gradient(180deg, #fff, #ffe);\n}\n.टीप {\n  background: rgba(255, 0, 0, 0.1);\n}'),
  ],
  ['रंग तीन प्रकार?', 'हेक्स म्हणजे?', 'alpha काय करता?', 'gradient म्हणजे?'],
  [{'q':'रंग मूल्य प्रकार?','o':['नाव हेक्स rgba','link meta','width height','tag class'],'c':0},
   {'q':'पारदर्शकता गुण?','o':['alpha','zeta','beta','delta'],'c':0},
   {'q':'दोन रंगांचे एकत्र?','o':['gradient','shadow','radius','scale'],'c':0},
   {'q':'वाचनीयता काय ठरवते?','o':['contrast','float','gap','order'],'c':0}],
  {'prompt':'रंग नमुना पेज','starterCode':'.मुख्य { background: linear-gradient(180deg, #fff, #ffe); }','expectedOutput':'Renders color sample page'},
  ['alpha गुणवत्ता कधी वापरू?', 'contrast तपासणी कशी?'],
  ['css-box-model', 'css-typography'],
  'css-box-model', 'css-typography')

# =====================================================================
# 5. TYPOGRAPHY
# =====================================================================
L('css-typography',
  'Typography',
  'टायपोग्राफी — मजकूर व्यवस्था',
  'font families, आकार, line-height, weight आणि वाचनीयता.',
  [
   S('1. मजकूर भाषा',
     'टायपोग्राफी म्हणजे मजकूर रूप.\n\nfont family म्हणजे अक्षरघर.\n\nआकार, वजन आणि ओळ अंतर — सर्व येथे.\n\nवाचनीयता सर्वांत महत्त्वाची.\n\nमराठी मजकुरासाठी रूप नीट निवडा.',
     'body { font-family: sans-serif; }'),
   S('2. font family',
     'family नावे यादीने देतात.\n\nसर्वांत आधी हवे नाव; नंतर पर्याय.\n\nपहिले नाही मिळाले की दुसरे.\n\ngeneric मध्ये sans-serif शेवटी.\n\nहे रचना विश्वासार्ह करते.',
     'p { font-family: Verdana, Arial, sans-serif; }'),
   S('3. आकार नियम',
     'आकार px किंवा rem असतो.\n\nrem रूट आकारावर अवलंबून — हवे तर.\n\nमोठा मजकूर वाचण्यास आणि शीर्षक.\n\nलहान टीप आकार वेगळे.\n\nवैविध्यात गोंधळ नको.',
     'h1 { font-size: 2rem; }\np { font-size: 1rem; }'),
   S('4. वजन आणि शैली',
     'font-weight म्हणजे अक्षराचा जाडपणा.\n\nसामान्य, मध्यम, ठळक numeric.\n\nitalic म्हणजे तिरपे रूप.\n\nहे शीर्षक आणि टीप वेगळे करते.\n\nजाड जास्त केला की वाचणे त्रासदायक.',
     '.title { font-weight: bold; }\n.टीप { font-style: italic; }'),
   S('5. ओळ अंतर',
     'line-height म्हणजे ओळींचे अंतर.\n\nमोठा मजकूर साठी जास्त त्याची मदत.\n\nउदा. 1.5 सामान्य वाचनीय.\n\nशीर्षकासाठी कमी अंतर चालते.\n\nबरोबर कोड मजकूर स्पष्ट ठेवते.',
     'p { line-height: 1.6; }'),
   S('6. text align',
     'align म्हणजे मजकूर बसवण्याचा क्रम.\n\nडावीकडे, बाजूला, उजवीकडे, बरोबर.\n\nमराठी प्रमाणे डाव्या कडेने वाचतो.\n\nकेंद्र शीर्षकासाठी योग्य.\n\nदोन्ही बाजूंनी neatly जातो.',
     'h1 { text-align: center; }'),
   S('Mini Project',
     'टायपोग्राफी पेज.\n\nतीन heading. दोन paragraph.\n\nfont आणि ओळ अंतर.\n\nमराठी मजकूर रूप स्पष्ट.',
     'body { font-family: sans-serif; line-height: 1.6; }\n.मुख्य { font-weight: bold; }'),
  ],
  ['family म्हणजे?', 'rem कशावर असतो?', 'weight काय?', 'line-height काय?'],
  [{'q':'अक्षरघर?','o':['font family','box model','grid line','border'],'c':0},
   {'q':'रूट आकार?','o':['rem','px only','em calibri','cm'],'c':0},
   {'q':'जाडपणा नियंत्रण?','o':['font-weight','font-size','margin','cursor'],'c':0},
   {'q':'ओळ अंतर?','o':['line-height','letter-spacing','border','radius'],'c':0}],
  {'prompt':'टायपोग्राफी पेज','starterCode':'p { line-height: 1.6; }','expectedOutput':'Renders typography demo'},
  ['rem पेक्षा px कधी?', 'ओळ अंतर जास्त का नको?'],
  ['css-colors-background', 'css-layout-flex'],
  'css-colors-background', 'css-layout-flex')

# =====================================================================
# 6. LAYOUT FLEX
# =====================================================================
L('css-layout-flex',
  'Layout Flex',
  'Flex — लवचिक मांडणी',
  'flex container, main-cross axes, justify-content आणि align.',
  [
   S('1. flex कल्पना',
     'flex एक आयामी मांडणी तंत्र.\n\ncontainer मध्ये आत मुलांची ओळ बनतो.\n\nघटक आपोआप गुळगुळीत बसतात.\n\nहे मोबाइल आणि डेस्कटॉप दोघात होते.\n\nflex ही मांडणीची ताकद.',
     '.app { display: flex; }'),
   S('2. main axis',
     'flex दोन अक्षात चालतो.\n\nmain axis म्हणजे प्राथमिक दिशा.\n\nrow मध्ये क्षैतिज; column उभ्या.\n\nघटक main दिशेने जोडले जातात.\n\nदिशा समजली की आधार सोपा.',
     '.row { display: flex; }\n.column { display: flex; flex-direction: column; }'),
   S('3. justify-content',
     'main axis वरील स्थिती justify नियंत्रित.\n\nसुरुवात, मध्य, शेवट.\n\nspace-between — गट सरकतो.\n\nहे भागांमधील अंतर समजते.\n\nनियम नेमके ठेवा.',
     '.menu { display: flex; justify-content: space-between; }'),
   S('4. align-items',
     'cross axis वरील स्थिती align ठरवते.\n\nवर, मध्य, खाली — निवड तुमची.\n\nstretch म्हणजे पूर्ण उंची.\n\nहे ओळ संरेखित करते.\n\nदोन अक्ष एकत्र मांडतात.',
     '.bar { display: flex; align-items: center; }'),
   S('5. gap आणि wrap',
     'gap म्हणजे घटकांमधील अंतर.\n\nflex-wrap ने ओळ न संपवता next ओळ.\n\nमोठा mobile मध्ये wrap आवश्यक.\n\nदोन गुण मांडणीचा आधार.\n\nस्वच्छ अंतर — सुखी दृश्य.',
     '.list { display: flex; flex-wrap: wrap; gap: 8px; }'),
   S('6. सराव नियम',
     'flex प्रत्येक ओळ original असेल.\n\nsmall groups साठी flex उत्तम.\n\nमोठ्या क्षेत्रांसाठी grid हवा.\n\nप्रत्येक घटकाचे आकार नेमके.\n\nflex नीट केला की page सुरळीत.',
     '.status { display: flex; gap: 4px; }'),
   S('Mini Project',
     'flex मेनू पेज.\n\nतीन item. space-between.\n\nwrap नियम. center align.\n\nमोबाइल आणि डेस्कटॉप दोन्ही सुखी.',
     '.nav { display: flex; justify-content: space-between; flex-wrap: wrap; }'),
  ],
  ['main axis म्हणजे?', 'justify काय?', 'cross axis काय?', 'wrap कधी?'],
  [{'q':'एक आयामी मांडणी?','o':['flex','grid only','float','none'],'c':0},
   {'q':'main स्थिती नियंत्रण?','o':['justify-content','align-items','margin top','z-index'],'c':0},
   {'q':'cross स्थिती?','o':['align-items','justify','flex-wrap','gap'],'c':0},
   {'q':'पुढील ओळ?','o':['flex-wrap','no-wrap','nowrap line','grid only'],'c':0}],
  {'prompt':'flex मेनू','starterCode':'.nav { display: flex; justify-content: space-between; }','expectedOutput':'Renders flex nav demo'},
  ['row आणि column फरक?', 'align stretch काय?'],
  ['css-typography', 'css-grid-system'],
  'css-typography', 'css-grid-system')

# =====================================================================
# 7. GRID SYSTEM
# =====================================================================
L('css-grid-system',
  'Grid System',
  'Grid — रो आणि स्तंभ',
  'grid container, rows/columns, gap आणि areas व्यवस्था.',
  [
   S('1. grid कल्पना',
     'grid ही द्वि-आयामी मांडणी.\n\nओळी आणि स्तंभ एकाच घोषणेत.\n\nमोठे क्षेत्र आणि पत्ते व्यवस्थित.\n\nflex एक दिशा; grid दोन दिशा.\n\nमांडणीचा आधार हा grid.',
     '.app { display: grid; }'),
   S('2. rows columns',
     'grid-template पासून ओळी स्तंभ बनतात.\n\nप्रत्येक ट्रॅक नाव स्पष्ट.\n\nfr म्हणजे वाटणी भाग.\n\nगट मोठा linear उपाय.\n\nरचना लिहिताना आधार basis.',
     '.main {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n}'),
   S('3. gap जागा',
     'gap म्हणजे ओळी आणि स्तंभ अंतर.\n\nएकच गुणधर्म दोन्ही दिशा.\n\nहे स्वच्छ अंतर घालते.\n\nमांडणीत gap आवश्यक.\n\nदृश्य व्यवस्थित आणि हवेहवेसे.',
     '.grid {\n  display: grid;\n  gap: 1rem;\n}'),
   S('4. repeat नियम',
     'ट्रॅक वारंवार लिहू नका.\n\nauto-fit म्हणजे जागेनुसार आकार.\n\nminmax ने लहान मोठी मर्यादा.\n\nहे responsive स्तंभ बनवते.\n\nrepeat गुळगुळीत मांडणी देतो.',
     '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n}'),
   S('5. areas रचना',
     'grid-area ने भाग नाव द्यावे.\n\ntemplate मध्ये नकाशा लिहावा.\n\nउदा. header मुख्य footer.\n\nहे पेजची स्पष्ट रचना देते.\n\nभाग नावे वाचायला सोपी.',
     '.page {\n  display: grid;\n  grid-template-areas: "header" "main" "footer";\n}'),
   S('6. span आणि प्रवाह',
     'घटक अनेक स्तंभ ओलांडू शकतो.\n\ngrid-column मधून span लिहा.\n\nहे एक घटक विस्तार देतो.\n\nशैली रचना न ढळता बसते.\n\nभक्कम मांडणी सहज होते.',
     '.wide {\n  grid-column: span 2;\n}'),
   S('Mini Project',
     'grid पेज रचना.\n\nतीन स्तंभ. repeat आधार.\n\ngap. एक span घटक.\n\nमोबाइलवर मांडणी आपोआप.',
     '.pane {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n}'),
  ],
  ['grid किती आयाम?', 'fr म्हणजे?', 'gap काय?', 'areas म्हणजे?'],
  [{'q':'द्वि-आयामी मांडणी?','o':['grid','flex only','line','none'],'c':0},
   {'q':'वाटणी भाग?','o':['fr','px','rgb','rem'],'c':0},
   {'q':'ट्रॅक अंतर?','o':['gap','margin top','padding','border'],'c':0},
   {'q':'जागेनुसार स्तंभ?','o':['auto-fit','fixed','stretch','overflow'],'c':0}],
  {'prompt':'grid पेज','starterCode':'.pane { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); }','expectedOutput':'Renders grid layout demo'},
  ['grid आणि flex फरक?', 'span कधी वापरू?'],
  ['css-layout-flex', 'css-positioning'],
  'css-layout-flex', 'css-positioning')

# =====================================================================
# 8. POSITIONING
# =====================================================================
L('css-positioning',
  'Positioning',
  'स्थान — घटक कुठे उभा',
  'static, relative, absolute, fixed आणि z-index नियम.',
  [
   S('1. position कल्पना',
     'position घटकाचे स्थान बदलतो.\n\nstd स्थितीत घटक प्रवाहात असतो.\n\nनवीन मूल्य घटक जागा बदलतो.\n\nहे स्टिकी आणि layers चा आधार.\n\nस्थान समजले की अंदाज येतो.',
     '.टीप { position: static; }'),
   S('2. relative',
     'relative घटक मूळ जागेपासून सरकतो.\n\nलेयर रचना बदलते — प्रवाह वाचतो.\n\ntop, left, right ने बदल होतो.\n\nहे लहान बदलांसाठी योग्य.\n\nमूळ जागा सोडत नाही.',
     '.badge { position: relative; top: 2px; }'),
   S('3. absolute',
     'absolute जवळच्या relative पालकाकडे.\n\nपालक नसेल तर पेज बेस बनतो.\n\nघटक प्रवाहातून वेगळा होतो.\n\nकोपरे नेमके ठरवता येतात.\n\nहे मोडल साठी आवश्यक.',
     '.कोपरा {\n  position: absolute;\n  top: 0;\n  right: 0;\n}'),
   S('4. fixed',
     'fixed घटक दृश्यात कायम राहतो.\n\nस्क्रोल केल्यावरही तो स्थिर.\n\nउदा. स्थायी मेनू किंवा टीप.\n\nहे दृश्याच्या आधार स्थान घेते.\n\nलहान वापर correct ने.',
     '.topbar { position: fixed; top: 0; }'),
   S('5. sticky',
     'sticky midly fixed — थांबून राहतो.\n\nस्क्रोलवर तो चिकटतो.\n\nसाधारण boundary मध्ये राहतो.\n\nहे विभाग शीर्षक साठी सोयीचे.\n\nआधार तपासून वापर करा.',
     '.भाग { position: sticky; top: 0; }'),
   S('6. z-index layer',
     'z-index डोंगर क्रम ठरवतो.\n\nजास्त संख्या वर दिसते.\n\nposition शोध mandatory असतो.\n\nमोठा क्रम — धुक्यात लपलेला नको.\n\nस्तर नियम सरळ ठेवा.',
     '.modal { position: absolute; z-index: 100; }'),
   S('Mini Project',
     'स्थान नमुना पेज.\n\nएक relative बिल्ला. एक fixed bar.\n\nsticky heading. z-index टीप.\n\nमोबाइलवरही स्थिर दिसते.',
     '.bar {\n  position: fixed;\n  top: 0;\n  z-index: 10;\n}'),
  ],
  ['static म्हणजे?', 'relative काय?', 'absolute कोणाकडे?', 'z-index काय?'],
  [{'q':'प्रवाहात कायम?','o':['static','absolute','fixed','none'],'c':0},
   {'q':'मूळ जागेपासून?','o':['relative','sticky','grid','flex'],'c':0},
   {'q':'स्क्रोलवर स्थिर?','o':['fixed','relative','static','float'],'c':0},
   {'q':'डोंगर क्रम?','o':['z-index','gap','order','opacity'],'c':0}],
  {'prompt':'स्थान पेज','starterCode':'.bar { position: fixed; top: 0; }','expectedOutput':'Renders positioning demo'},
  ['absolute पालक कसा?', 'sticky कधी?'],
  ['css-grid-system', 'css-responsiveness'],
  'css-grid-system', 'css-responsiveness')

# =====================================================================
# 9. RESPONSIVENESS
# =====================================================================
L('css-responsiveness',
  'Responsiveness',
  'प्रतिसादी रचना',
  'viewport, media queries, mobile first आणि flexible आकार.',
  [
   S('1. viewport कल्पना',
     'viewport म्हणजे दृश्यमान क्षेत्र — स्क्रीनचा भाग.\n\nमोबाइल लहान; डेस्कटॉप मोठा.\n\nहे क्षेत्र CSS आधार सांगते.\n\nviewport meta ने आधार सुधारतो.\n\nप्रतिसादाचा पाया हा viewport.',
     '<meta name="viewport" content="width=device-width, initial-scale=1">'),
   S('2. media query',
     'media query म्हणजे परिस्थितीनुसार शैली.\n\nउदा. लहान स्क्रीनसाठी ओळ.\n\nmin-width म्हणजे मोठ्यापासून.\n\nनियम सुपथ निवडतो.\n\nहे प्रतिसादी रचनेचे मुख्य साधन.',
     '@media (max-width: 600px) {\n  .pane { grid-template-columns: 1fr; }\n}'),
   S('3. mobile first',
     'mobile first मध्ये आधी लहान शैली.\n\nनंतर मोठ्यासाठी सुधारणा.\n\nहे filing सोपी ठेवते.\n\nलहान आधार पहिले — कमी त्रास.\n\nदिशा नियम स्पष्ट ठरतो.',
     '.grid { display: grid; grid-template-columns: 1fr; }\n@media (min-width: 700px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}'),
   S('4. flexible आकार',
     'flexible आकार म्हणजे % किंवा fr वापर.\n\npx ने जागा स्थिर राहते.\n\nrelative युक्तीने आकार वाकतो.\n\nचित्रे max-width ने लहान होतात.\n\nमोठा layout अडकत नाही.',
     'img { max-width: 100%; }'),
   S('5. rem आधार',
     'rem रूटच्या आकारावर असतो.\n\nएक नियम बदलल्यास संपूर्ण वाढतो.\n\nहे प्रवेश्यता सुधारते.\n\nबृहद आकार बदल होतो.\n\nrem ही मदतनीस आकार सवय.',
     'html { font-size: 16px; }\nh1 { font-size: 2rem; }'),
   S('6. टच नियम',
     'बरेच भाग टच वर आधारित.\n\nbutton उंची कमी नको.\n\ntarget लहान म्हणजे त्रास.\n\nयोग्य अंतर टप्पे देतो.\n\nटच अनुभव नियम पाळा.',
     'button { min-height: 44px; }'),
   S('Mini Project',
     'प्रतिसादी पेज.\n\nmobile फक्त एक स्तंभ.\n\nडेस्कटॉपवर दोन स्तंभ.\n\nचित्र max-width. टच आकार.',
     '.row { display: grid; grid-template-columns: 1fr; gap: 1rem; }\n@media (min-width: 700px) {\n  .row { grid-template-columns: 1fr 1fr; }\n}'),
  ],
  ['viewport म्हणजे?', 'media query काय?', 'mobile first काय?', 'max-width काय?'],
  [{'q':'दृश्यमान क्षेत्र?','o':['viewport','margin','padding','border'],'c':0},
   {'q':'परिस्थितीनुसार शैली?','o':['media query','grid','flex','z-index'],'c':0},
   {'q':'लहान प्रथम शैली?','o':['mobile first','desktop first','none','static'],'c':0},
   {'q':'चित्र आकार मर्यादा?','o':['max-width','min-height','z-index','opacity'],'c':0}],
  {'prompt':'प्रतिसादी पेज','starterCode':'@media (min-width: 700px) { .row { grid-template-columns: 1fr 1fr; } }','expectedOutput':'Renders responsive page'},
  ['min-width आधार काय?', 'rem का उपयोगी?'],
  ['css-positioning', 'css-transitions-animations'],
  'css-positioning', 'css-transitions-animations')

# =====================================================================
# 10. TRANSITIONS & ANIMATIONS
# =====================================================================
L('css-transitions-animations',
  'Transitions & Animations',
  'Transfer आणि सजीव रचना',
  'transition गुण, timing, animation आणि keyframes कल्पना.',
  [
   S('1. transition कल्पना',
     'transition म्हणजे बदलाचा गुळगुळीत क्रम.\n\nरंग, आकार बदल सहज दिसतो.\n\nनवा मूल्य हळुवार साधतो.\n\nहे अनुभव अधिक जिवंत करते.\n\nसुरुवात small transition ने.',
     '.btn { transition: background 0.3s; }'),
   S('2. transition गुणधर्म',
     'कोणता गुणधर्म हलवायचा ते सांगा.\n\nकालावधी सेकंदात असतो.\n\ntiming curve गती आकार ठरवते.\n\nउदा. ease, linear, ease-in.\n\nहे सर्व एकत्र लिहून सोपे.',
     '.item { transition: all 0.2s ease; }'),
   S('3. timing curve',
     'timing म्हणजे गतीचा आकार.\n\nease मध्ये आरंभ शांत.\n\nlinear सर्वत्र सारखी.\n\nease-in हळू सुरू होते.\n\nनिवडीने भावना येते.',
     '.x { transition-timing-function: ease-out; }'),
   S('4. animation कल्पना',
     'animation हे अनेक पायरी हालचाल.\n\n@keyframes मध्ये टप्पे लिहितात.\n\nfrom आणि to टप्पे.\n\nduration ने वेळ ठरतो.\n\nहे दृश्य सजीव बनवते.',
     '@keyframes फड {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'),
   S('5. keyframes टप्पे',
     'keyframes मध्ये टप्पे वेगळे लिहितात.\n\n0% आरंभ; 100% अंत.\n\nमध्ये 50% वेगळा दृश्य.\n\nहे दीर्घ हालचाल करते.\n\nगणना नेमकी ठरवा.',
     '@keyframes slide {\n  0% { left: 0; }\n  100% { left: 20px; }\n}'),
   S('6. सवय नियम',
     'हालचाल कमी ठेवा — त्रास कमी.\n\nprefers-reduced-motion वापरा.\n\nजड animation bandwidth लागतो.\n\nप्रवेश्यता ही प्रथम.\n\nसुरुवात हलकी आणि सटीक.',
     '@media (prefers-reduced-motion: reduce) {\n  .x { animation: none; }\n}'),
   S('Mini Project',
     'सजीव नमुना पेज.\n\nएक button transition.\n\nएक animation टीप.\n\nreduced-motion नियम कायम.',
     '.btn {\n  transition: transform 0.2s;\n}\n.btn:hover {\n  transform: scale(1.02);\n}'),
  ],
  ['transition काय?', 'timing म्हणजे?', 'keyframes म्हणजे?', 'reduced-motion काय?'],
  [{'q':'बदल गुळगुळीत?','o':['transition','static','none','border'],'c':0},
   {'q':'गतीचा आकार?','o':['timing function','main axis','grid area','float'],'c':0},
   {'q':'हालचाल टप्पे हे?','o':['keyframes','viewport','margin','display'],'c':0},
   {'q':'हालचाल कमी करणे?','o':['prefers-reduced-motion','flex','gap','z-index'],'c':0}],
  {'prompt':'सजीव नमुना','starterCode':'.btn { transition: transform 0.2s; }','expectedOutput':'Renders transition demo'},
  ['transition आणि animation फरक?', 'keyframes 50% काय?'],
  ['css-responsiveness', 'css-variables-functions'],
  'css-responsiveness', 'css-variables-functions')

# =====================================================================
# 11. VARIABLES & FUNCTIONS
# =====================================================================
L('css-variables-functions',
  'Variables & Functions',
  'Variables — एकदा ठरवा सर्वत्र',
  'custom property, var वापर आणि calc कल्पना.',
  [
   S('1. variables कल्पना',
     'variable म्हणजे नावाने ठरलेले मूल्य.\n\nएक ठिकाणी बदलले तर सर्वत्र बदलते.\n\nसातत्य आणि त्रास कमी होतो.\n\nहे रंग, अंतर साठी योग्य.\n\nसंग्रह variables ने शिचती राहते.',
     ':root {\n  --main-color: #234;\n}'),
   S('2. custom property',
     'custom property नाव -- ने सुरू होते.\n\n:root मध्ये जागतिक ठरते.\n\nघटकाला वेगळे मूल्य द्या.\n\nहेni दोन प्रकार विचारता.\n\nरचना clear राहते.',
     ':root { --space: 8px; }\n.card { padding: var(--space); }'),
   S('3. var वापर',
     'var ने मूल्य जागेवर आणतात.\n\nfallback मूल्य दुसऱ्या जागी.\n\nनाव स्पष्ट असेल तर सोपे.\n\nवाचनीयता वाढते — गोंधळ कमी.\n\nहे व्यवस्थेचा मुख्य खांब.',
     'p { color: var(--ink, #111); }'),
   S('4. calc function',
     'calc मधून गणना होते.\n\nउदा. उंची वजा अंतर.\n\nmultiple एकक मिसळता येते.\n\nपद्धत simple आणि तंतोतंत.\n\nमोजमाप बदल आपोआप होतो.',
     '.bar {\n  width: calc(100% - var(--space));\n}'),
   S('5. min max clamp',
     'min दोघांत लहान; max मोठा.\n\nclamp मध्ये तीन मूल्ये.\n\nलघुतम, आदर्श, गरज.\n\nहे आकार आपोआप सांगते.\n\nतरल आकार main पासून.',
     'h1 { font-size: clamp(1.5rem, 4vw, 3rem); }'),
   S('6. थीम व्यवस्था',
     'variables ne custom theme सोयीस्कर.\n\nरंगांचा संग्रह एकदाच देता.\n\ndark mode बदल सोपा होतो.\n\nstylesheet राहते — मूल्य बदलते.\n\nहे विविध पर्याय देते.',
     ':root { --bg: white; }\n@media (prefers-color-scheme: dark) {\n  :root { --bg: #222; }\n }\nbody { background: var(--bg); }'),
   S('Mini Project',
     'व्हॅरिएबल पेज.\n\nतीन custom property.\n\nvar हे बाबींमधून. calc उदाहरण.\n\nथीम बदल टीप.',
     ':root {\n  --main: teal;\n  --space: 1rem;\n}\n.card {\n  padding: var(--space);\n  border: 1px solid var(--main);\n}'),
  ],
  ['variable म्हणजे?', 'var काय करते?', 'calc काय?', 'clamp कसे?'],
  [{'q':'नावाने ठरलेले मूल्य?','o':['custom property','tag','class','id'],'c':0},
   {'q':'-- नाव असतो?','o':['property','selector','attribute','event'],'c':0},
   {'q':'गणना function?','o':['calc','hover','focus','grid'],'c':0},
   {'q':'तीन मूल्ये आकार?','o':['clamp','gap','border','radius'],'c':0}],
  {'prompt':'व्हॅरिएबल पेज','starterCode':':root { --main: teal; --space: 1rem; }','expectedOutput':'Renders variables demo'},
  ['var fallback काय?', 'calc कुठे उपयोगी?'],
  ['css-transitions-animations', 'css-marathi-project'],
  'css-transitions-animations', 'css-marathi-project')

# =====================================================================
# 12. MARATHI PROJECT (capstone)
# =====================================================================
L('css-marathi-project',
  'CSS Marathi Project',
  'मराठी प्रोजेक्ट — सर्व CSS एकत्र',
  'मराठी न्यूज पेज — selectors, box, flex, grid, responsive आणि variables.',
  [
   S('1. उद्दिष्टे स्पष्ट',
     'हा धडा सर्व CSS गुण एकत्र करतो.\n\nटार्गेट: "मराठी न्यूज पेज" styling.\n\nहेडर, आर्टिकल, बाजूचा स्तंभ.\n\nमोबाइल आणि डेस्कटॉप दोन्ही.\n\nप्रत्येक धड्याचे प्रात्यक्षिक येथे.',
     '<link rel="stylesheet" href="news.css">\n<h1>मराठी न्यूज</h1>'),
   S('2. संरचना setup',
     'स्वच्छ variables प्रथम ठरवा.\n\nरंग आणि अंतर संग्रह.\n\nbox-sizing सर्वत्र.\n\nflex आणि grid रचना ठरवा.\n\nपाया ठरला की styling सोपी.',
     ':root {\n  --ink: #1c1c1c;\n  --accent: #b03;\n  --space: 1rem;\n}\nbody {\n  color: var(--ink);\n  margin: 0;\n}'),
   S('3. header मेनू',
     'header flex ने मांडतो.\n\nlogo डावीकडे. search उजवीकडे.\n\nइतर मेनू wrap ने.\n\nहे mobile साठी सोयीचे.\n\nटॅब रचना स्थिर राहते.',
     'header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--space);\n}'),
   S('4. आर्टिकल grid',
     'मुख्य भाग grid ने रचतो.\n\nमुख्य आर्टिकल मोठा; बाजूला स्तंभ.\n\nलहान आकारात एकच स्तंभ.\n\nदोन आकारांची सुसंगतता.\n\nवाचनीयता आधार ठरतो.',
     '.content {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: var(--space);\n}\n@media (max-width: 700px) {\n  .content { grid-template-columns: 1fr; }\n}'),
   S('5. कार्ड शैली',
     'बातमी कार्ड border, padding व्यवस्था.\n\nbox नियम स्वच्छ आणि मोकळा.\n\nhover सहज transition.\n\nशीर्षक font weight वेगळे.\n\nकार्ड स्वरूप स्थिर राहते.',
     '.card {\n  border: 1px solid #ddd;\n  padding: var(--space);\n  border-radius: 4px;\n  transition: box-shadow 0.2s;\n}'),
   S('6. प्रवेश्यता नियम',
     'रंग contrast कडक असावा.\n\nfocus दृश्य असावा.\n\nreduced-motion नियम.\n\nमराठी मजकूर वाचनीय.\n\nहेच मानक वेब सुखी ठरते.',
     'button { min-height: 44px; }\n:focus-visible {\n  outline: 2px solid var(--accent);\n}'),
   S('Mini Project',
     'संपूर्ण न्यूज पेज styling.\n\nvariables आधार. header flex.\n\nमुख्य grid. कार्ड नियम.\n\nresponsive एक स्तंभ. हे Level 1 समाप्त.',
     ':root { --ink: #1c1c1c; --accent: #b03; --space: 1rem; }\nbody { margin: 0; color: var(--ink); }\nheader { display: flex; justify-content: space-between; }\n.card {\n  border: 1px solid #ddd;\n  padding: var(--space);\n}\n@media (max-width: 700px) {\n  .content { display: block; }\n}'),
  ],
  ['अॅप कुठले गुण जोडतो?', 'variables आधी का?', 'grid कुठे?', 'focus नियम काय?'],
  [{'q':'Header मांडणी?','o':['flex','static','none','border'],'c':0},
   {'q':'मुख्य भाग रचना?','o':['grid','keyframe','viewport only','margin'],'c':0},
   {'q':'व्हॅरिएबल फायदा?','o':['एकदा ठरवा','लहान फाइल','अनेक ठिकाणी','सर्वत्र नाही'],'c':0},
   {'q':'contrast कशाला?','o':['वाचनीयता','सजीवता','भार','खर्च'],'c':0}],
  {'prompt':'न्यूज पेज styling','starterCode':':root { --ink: #1c1c1c; --accent: #b03; --space: 1rem; }','expectedOutput':'Renders full marathi news page styling'},
  ['हे Base कुठून वाढवू?', 'जास्त color कुठे?'],
  ['css-variables-functions', 'css-structure-cascade'],
  'css-variables-functions', 'css-structure-cascade')

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
    parts.append("    levelLabel: CSS1_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === CSS · LEVEL 1 — मूलभूत शैली आणि व्यवस्था ===\n'
    header += 'export const CSS1_LABEL = "CSS · Level 1 — मूलभूत शैली आणि व्यवस्था";\n'
    header += '\nexport const cssLevel1: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/css1_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/css1_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/css1_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/css-level1.ts')
print("WROTE css-level1.ts, lines:", len(out.split(chr(10))))