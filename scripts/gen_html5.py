# -*- coding: utf-8 -*-
# Generator for HTML Level 5 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/html-level5.ts. Base content ~105-140 words/section,
# self-contained code cells (no network, no <script>, no <style>), codeLanguage: "html".
import json, subprocess, shutil

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=22):
    lessons.append({
        'slug': slug, 'categoryId': 'web', 'title': title, 'marathiTitle': mt,
        'level': 'intermediate', 'minutes': minutes, 'summary': summary,
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
# 1. CANVAS & GRAPHICS
# =====================================================================
L('html-canvas-graphics',
  'Canvas & Graphics',
  'Canvas — रास्टर रेखांकनाचा पाया',
  'canvas element, 2d context, coordinate system आणि canvas विरुद्ध SVG निर्णय.',
  [
   S('1. canvas element',
     'canvas हा एक drawing surface — ब्राउझरमधील चित्र तयार करण्याची जागा.\n\nwidth आणि height attributes ने त्याचा आकार ठरतो. height म्हणजे पिक्सेल.\n\nहे element साधा rectangle आहे — त्यात पाठ text fallback म्हणून ठेवता येते.\n\nजुने ब्राउझर fallback दाखवतो, नवे canvas रेखांकन करतो.\n\nCSS आकार आणि attribute आकार वेगळे असू शकतात — नियम लक्षात ठेवा.',
     '<canvas width="400" height="300">\n  तुमचा ब्राउझर canvas दाखवू शकत नाही.\n</canvas>'),
   S('2. 2d context',
     'canvas वर चित्र काढण्यासाठी 2d context मिळवावा लागतो.\n\ngetContext म्हणजे एक हात जोडणी — ती JavaScript ने होते.\n\nरेषा, आयत, वर्तुळ आणि मजकूर — सर्व त्या context वर.\n\nHTML फक्त container आहे; खरे चित्र कोड रेखांकन करते.\n\nशिकताना context ची कल्पना समजून घ्या — वापर JavaScript मध्ये.',
     '<canvas width="400" height="300">रेखांकन जागा</canvas>'),
   S('3. coordinate system',
     'canvas चा आधार ग्रिड — प्रत्येक बिंदू x आणि y ने सांगितला.\n\nमूळ बिंदू वरच्या डाव्या कोपर्यात — x उजवीकडे, y खाली वाढतो.\n\nप्रत्येक एकक म्हणजे एक पिक्सेल सेल.\n\nहे गणित सोपे आणि अचूक — ग्राफिक्सचा पाया.\n\nआकार ठरवताना width आणि height याच ग्रिडवर अवलंबून.',
     '<canvas width="200" height="150">ग्रिड कल्पना</canvas>'),
   S('4. drawing एपीआय',
     'रेषा आणि आकृती काढण्यासाठी drawing API वापरतात.\n\nfill — आत भरा; stroke — फक्त किनारी.\n\nआकार कोडमध्ये निर्देशांकांनी नेमके ठरतात.\n\nरंग आणि जाडी पाठवलेल्या data ने बदलतात.\n\nHTML-only शिकताना फक्त these कल्पना नोंद.',
     '<canvas width="240" height="160">आकृती जागा</canvas>'),
   S('5. रेखांकन कार्यक्षमता',
     'canvas गुळगुळीत हलण्यासाठी redraw ची जोडणी सुनियोजित हवी.\n\nप्रत्येक frame साफ करून पुन्हा काढणे ही सामान्य पद्धत.\n\nजास्त redraw म्हणजे जास्त काम — minimum ठेवा.\n\nचित्र स्थिर असेल तर एकदाच काढा.\n\nआधुनिक वेळजोडणी animation साठी आवश्यक.',
     '<canvas width="320" height="180">animation जागा</canvas>'),
   S('6. canvas विरुद्ध SVG',
     'canvas रास्टर चित्र — पिक्सेल मालिका; zoom वर कण दिसतात.\n\nSVG हे vector — गणितावर आधारित; zoom केल्यावर धार राहते.\n\ncanvas हजारो बिंदूंसाठी; SVG घटक रचनेसाठी.\n\nआकृती मोजकी तर SVG, चित्र विस्तृत तर canvas.\n\nनिवड कामाच्या स्वरूपावर अवलंबून.',
     '<p>निर्णय नियम:</p>\n<p>चित्र विस्तृत -> canvas. रचना घटक -> SVG.</p>'),
   S('Mini Project',
     'canvas नमुना पेज तयार करा.\n\nतीन canvas blocks. width आणि height नेमके.\n\nप्रत्येकाला fallback मजकूर. एका शेजारी SVG टीप.\n\nहे चित्र जागेची रचना दाखवते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>Canvas नमुना</title>\n</head>\n<body>\n  <h1>Canvas पेज</h1>\n  <canvas width="300" height="200">चित्र राखीव जागा</canvas>\n  <p>SVG vector रचनेसाठी.</p>\n</body>\n</html>'),
  ],
  ['canvas म्हणजे काय?', '2d context कशासाठी?', 'ग्रिड मूळ कुठे?', 'canvas विरुद्ध SVG निर्णय कसा?'],
  [{'q':'चित्र तयार करणारी जागा?','o':['canvas','iframe','dialog','slot'],'c':0},
   {'q':'आकार कुठे ठरतो?','o':['width/height attributes','style только','title','data'],'c':0},
   {'q':'पाठ fallback कुठे?','o':['canvas आत','head मध्ये','slot ने','object'],'c':0},
   {'q':'vector रचना?','o':['SVG','canvas','image','audio'],'c':0}],
  {'prompt':'canvas पेज रचना','starterCode':'<canvas width="300" height="200">fallback</canvas>','expectedOutput':'Renders canvas blocks with fallback text'},
  ['canvas पेक्षा SVG कधी?', 'context कोड कोणता?'],
  ['html-future-project', 'html-3d-webgl'],
  'html-future-project', 'html-3d-webgl')

# =====================================================================
# 2. 3D WEBGL
# =====================================================================
L('html-3d-webgl',
  '3D WebGL',
  'WebGL — त्रिमितीय रेखांकन',
  'WebGL context, shader कल्पना, scene रचना आणि GPU वापराची माहिती.',
  [
   S('1. WebGL म्हणजे',
     'WebGL हे 3D रेखांकनाचे browser-level तंत्र.\n\nते GPU वर चालते — त्रिमितीय दृश्ये वेगाने.\n\ncanvas वर 3d context म्हणून अस्तित्वात असते.\n\nजुने आधार आणि नवे WebGL2 पर्याय असतात.\n\nआधुनिक ब्राउझर दोन्ही स्तर देतात.',
     '<canvas width="480" height="270">3D जागा</canvas>'),
   S('2. WebGL2',
     'WebGL2 ही नव्या त्रिमितीय रचनेची आवृत्ती.\n\nअधिक पोत आणि तसेच आधुनिक API असतात.\n\nआदर कमी; पण क्षमता जास्त.\n\nमोठ्या आधुनिक game साठी WebGL2 शिफारस.\n\nआधार तपासताना context प्रकार दोन्ही तपासा.',
     '<canvas width="400" height="300">WebGL2 आधार तपासा</canvas>'),
   S('3. shader कल्पना',
     'shader हे GPU वर चालणारे लहान गणिताचे कोड.\n\nvertex shader बिंदूंची स्थिती सांगते; fragment shader रंग.\n\nहे GLSL नावाच्या भाषेत लिहिले जाते.\n\nHTML-only दृष्टी: shader म्हणजे दृश्याचा नियम.\n\nआता फक्त समज — कोड नंतर JavaScript मध्ये.',
     '<p>shader प्रकार:</p>\n<p>vertex स्थिती, fragment रंग.</p>'),
   S('4. scene रचना',
     '3D दृश्याचे भाग — camera, मॉडेल आणि प्रकाश.\n\ncamera कोन ठरवतो; मॉडेल आकार देतो.\n\nप्रकाश पडदा स्पष्ट करतो.\n\nघटक एकत्र येऊन scene बनतो.\n\nसरावासाठी गोलाकार मॉडेल सर्वांत सोपे.',
     '<p>scene घटक:</p>\n<p>camera, mesh, light.</p>'),
   S('5. frame rate कार्यक्षमता',
     'गुळगुळीत हालचालीसाठी frame rate महत्त्वाचा.\n\nप्रति सेकंद आदर्श 60 frames.\n\nजास्त draw calls म्हणजे जड GPU.\n\nमॉडेल साधे आणि प्रकाश कमी ठेवा.\n\nप्रत्येक frame नंतर जागा व्यवस्थित सोडा.',
     '<p>कार्यक्षमता नियम:</p>\n<p>कमी calls, साधे मॉडेल, स्थिर frame.</p>'),
   S('6. तयारी आणि नियम',
     '3D HTML मध्ये फक्त canvas container.\n\nattributes width/height आणि fallback मजकूर.\n\ncontext मिळतो का हे तपासतात.\n\nसुरुवात लहान cube ने करा.\n\nपुढे JavaScript आणि GLSL crumbs जोडतील.',
     '<canvas width="400" height="300">WebGL ची तयारी</canvas>'),
   S('Mini Project',
     '3D तयारीचे पेज बनवा.\n\ncanvas 3d जागेसह. fallback मजकूर.\n\nscene घटकांची यादी. आधार टीप.\n\nहे WebGL चा शून्य स्तर दाखवते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>3D तयारी</h1>\n  <canvas width="400" height="300">WebGL उपलब्ध नाही</canvas>\n  <p>camera, mesh, light — scene रचना.</p>\n</body>\n</html>'),
  ],
  ['WebGL कोणावर चालते?', 'WebGL2 फायदा काय?', 'shader म्हणजे काय?', 'फ्रेम रेट नियम?'],
  [{'q':'3D रेखांकन तंत्र?','o':['WebGL','iframe','marquee','dialog'],'c':0},
   {'q':'shader भाषा?','o':['GLSL','CSS','SQL','JSON'],'c':0},
   {'q':'दृश्य घटक?','o':['camera mesh light','form field','nav item','link tag'],'c':0},
   {'q':'आदर्श frame rate?','o':['60','1','500','1000'],'c':0}],
  {'prompt':'3D तयारी पेज','starterCode':'<canvas width="400" height="300">WebGL जागा</canvas>','expectedOutput':'Renders 3D canvas with scene list'},
  ['shader म्हणजे काय?', 'WebGL2 आधार कसा तपासता?'],
  ['html-canvas-graphics', 'html-web-sockets'],
  'html-canvas-graphics', 'html-web-sockets')

# =====================================================================
# 3. WEB SOCKETS
# =====================================================================
L('html-web-sockets',
  'Web Sockets',
  'Web Sockets — सतत जोडलेले संवाद',
  'realtime संवाद, websocket protocol, messages आणि सुरक्षा नियम.',
  [
   S('1. realtime संवाद',
     'सामान्य HTTP मध्ये ब्राउझरच मागणी करतो — server गप्प राहतो.\n\nrealtime प्रकरणात server ला आगाऊ संदेश पाठवता येतो.\n\nहेच काम web socket करते — दोन्ही बाजू मोकळे.\n\nchat, ticker, game — अशा अॅप्ससाठी आदर्श.\n\nHTML-only मध्ये कल्पना, वापर JavaScript ने.',
     '<p>realtime परिस्थिती:</p>\n<p>chat, सूचना, खेळ स्थिती.</p>'),
   S('2. protocol समज',
     'web socket चा पत्ता ws:// की wss:// असतो.\n\nwss म्हणजे सुरक्षित — encryption सह.\n\nसुरुवातीला handshake घडते — ते HTTP सारखे.\n\nनंतर दोन्ही बाजूना बोलणे मोकळे — full duplex.\n\nहा कायमचा मार्ग ब्राउझर आणि server दरम्यान.',
     '<p>पत्ता नियम:</p>\n<p>wss:// सुरक्षित — वापरा.</p>'),
   S('3. messages व्यवस्था',
     'संदेश text किंवा binary असू शकतो.\n\nप्रत्येक संदेश frame ने जातो — क्रम नेमका.\n\nमोठे संदेश ओढा — लेखन लहान ठेवा.\n\nमाहिती गमावल्यास पुन्हा जोडणी हवी.\n\nसंदेश रचना आधी ठरवली की सुसंगतता राहते.',
     '<p>संदेश नियम:</p>\n<p>लहान, क्रमबद्ध, binary किंवा text.</p>'),
   S('4. events आणि state',
     'जोडणीचे टप्पे — open, message, close.\n\nopen म्हणजे मार्ग तयार; message म्हणजे संदेश आला.\n\nclose झाल्यावर state अपडेट करा आणि reconnect विचार.\n\nstate गमावल्यास पुन्हा सिंक करा.\n\nअस्थिर network साठी reconnect नियम महत्त्वाचा.',
     '<p>event टप्पे:</p>\n<p>open -> message -> close.</p>'),
   S('5. सुरक्षा नियम',
     'wss:// सर्वांत पहिली अट — असुरक्षित ws नको.\n\norigin तपासणी server करतो — बाहेरून नको.\n\nटोकन सर्व्हरने दिलेले हवे — प्रवेश वैध.\n\nसंदेश क्रिया नियम तपासणे हवे.\n\nसुरक्षा काळजी असली की प्रवाह विश्वासार्ह.',
     '<p>सुरक्षा:</p>\n<p>wss + origin + token.</p>'),
   S('6. वापर उदाहरणे',
     'chat खिडकी — संदेश लगेच येतो.\n\nशेअर टिकर — किंमत बदल server पाठवतो.\n\nखेळातील हालचाल — हलका and द्रुत response.\n\nहे सर्व browser मध्ये राहते.\n\nHTML रचना येथे तयार — संवाद JavaScript जोडतो.',
     '<p>वापर:</p>\n<p>chat, ticker, game state.</p>'),
   S('Mini Project',
     'realtime नुसार रचना पेज बनवा.\n\nchat क्षेत्र मजकूर. टिकर सूचना.\n\nयात कुठे संवाद येईल ते नोंद.\n\nHTML रचना websocket च्या तयारीसाठी.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>Realtime नमुना</h1>\n  <p>chat क्षेत्र — येथे संदेश येतील.</p>\n  <p>टिकर — किंमत सूचना.</p>\n</body>\n</html>'),
  ],
  ['realtime काय देतो?', 'wss कशासाठी?', 'events कुठले?', 'reconnect कधी?'],
  [{'q':'सतत जोडलेले संवादाचे तंत्र?','o':['web socket','iframe','form','meta'],'c':0},
   {'q':'सुरक्षित पत्ता?','o':['wss://','ws://','https only','mailto'],'c':0},
   {'q':'जोडणी तयार झाली?','o':['open event','close','error code','reload'],'c':0},
   {'q':'network तुटला तर?','o':['reconnect','reload','reset','exit'],'c':0}],
  {'prompt':'realtime रचना पेज','starterCode':'<p>chat क्षेत्र</p>','expectedOutput':'Renders realtime-ready structure'},
  ['web socket आणि HTTP फरक?', 'origin तपासणी काय?'],
  ['html-3d-webgl', 'html-worker-life'],
  'html-3d-webgl', 'html-worker-life')

# =====================================================================
# 4. WORKER LIFE
# =====================================================================
L('html-worker-life',
  'Worker Life',
  'Workers — पार्श्वभूमीची कामे',
  'dedicated/shared workers, data transfer आणि मुख्य पेज न अडकवण्याचे नियम.',
  [
   S('1. workers कल्पना',
     'मुख्य पेजच्या धाग्यावर जड काम केले की पेज अडकते.\n\nworker हा वेगळा धागा — पार्श्वभूमीत काम चालते.\n\nमुख्य पेज सुरळीत राहते; प्रगती दिसते.\n\nहे parallel काम browser ची क्षमता.\n\nHTML रचना तयार — काम JavaScript ने चालते.',
     '<p>worker कामे:</p>\n<p>मोठे गणित, फाइल वाचन, data तयारी.</p>'),
   S('2. dedicated worker',
     'dedicated worker एका पेजसाठी असतो.\n\npostMessage पाठवते; onmessage घेते.\n\nमाहिती सोप्या रूपात जाते — clone ने.\n\nमुख्य पेज आणि worker दोघेही बोलतात.\n\nनियम: लहान संदेश, नेमका data.',
     '<p>dedicated workflow:</p>\n<p>post -> process -> post back.</p>'),
   S('3. shared worker',
     'shared worker अनेक टॅब मिळून वापरतात.\n\nएक जागा अनेकांची — ब्रॉडकास्टमध्ये.\n\nउदा. वेळ गणना एकदा — सर्व टॅब नवे.\n\nही जोडणी जास्त कुशल आहे.\n\nपण state गोंधळाची काळजी घ्या.',
     '<p>shared नियम:</p>\n<p>एक राज्य, अनेक वापरकर्ते.</p>'),
   S('4. मर्यादा',
     'worker मध्ये DOM नाही — घटक बदलता येत नाहीत.\n\nwindow नाही; self scope असतो.\n\nalert, prompt नाही — फक्त message.\n\nहे जाणून काम वेगळे ठरवा.\n\nमर्यादा कळल्या की वापर योग्य.',
     '<p>worker मर्यादा:</p>\n<p>DOM नाही, कळा नाही, संदेश हे रूप.</p>'),
   S('5. data transfer',
     'डेटा worker ला structured clone होऊन जातो.\n\nमोठा data ट्रान्सफर करता — गती बदलते.\n\ntransfer list ने ownership वेगाने हलते.\n\nसंदेश लहान ठेवा — गोंधळ टाळा.\n\nनियम: संवेदनशील data संरक्षित हवा.',
     '<p>transfer नियम:</p>\n<p>मोठा data भागांत, लहान संदेश.</p>'),
   S('6. worker + स्ट्रक्चर',
     'worker कधी सुरू करणे? पेज तयार झाल्यावर.\n\nकाम आधी सुनियोजित — कोणते भाग parallel करायचे.\n\nstatus सांगणारा progress संदेश हवा.\n\nसंपल्यावर worker थांबवणे डेटा साफ करते.\n\nहे व्यवस्थापन आधुनिक अॅपची सवय.',
     '<p>worker रचना:</p>\n<p>सुरू -> संदेश -> संपवणे.</p>'),
   S('Mini Project',
     'worker तयारीचे सूचना पेज बनवा.\n\nतीन कामे नोंद. dedicated/shared भेद.\n\nDOM मर्यादा टीप. data transfer नियम.\n\nहे workers ची वैचारिक रचना देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>Worker तयारी</h1>\n  <p>dedicated — एक पेज. shared — अनेक टॅब.</p>\n  <p>DOM नाही — संदेश हे रूप.</p>\n</body>\n</html>'),
  ],
  ['worker काय करतो?', 'dedicated आणि shared फरक?', 'worker मध्ये काय नाही?', 'transfer नियम काय?'],
  [{'q':'पार्श्वभूमी धागा?','o':['worker','frame','link','slot'],'c':0},
   {'q':'एका पेजचा worker?','o':['dedicated','shared','global','local'],'c':0},
   {'q':'worker मध्ये नाही?','o':['DOM','घर','network','storage'],'c':0},
   {'q':'worker ला संदेश?','o':['postMessage','alert','submit','refresh'],'c':0}],
  {'prompt':'worker तयारी पेज','starterCode':'<p>dedicated एक पेज</p>','expectedOutput':'Renders worker concepts list'},
  ['worker मध्ये DOM का नाही?', 'transfer गती कशी वाढते?'],
  ['html-web-sockets', 'html-indexed-stores'],
  'html-web-sockets', 'html-indexed-stores')

# =====================================================================
# 5. INDEXED STORES
# =====================================================================
L('html-indexed-stores',
  'Indexed Stores',
  'IndexedDB — ब्राउझर डेटाबेस',
  'object store, transactions, indexes आणि offline data व्यवस्था.',
  [
   S('1. IndexedDB कल्पना',
     'IndexedDB ब्राउझरमधील मोठा डेटाबेस आहे.\n\nlocalStorage पेक्षा जागा आणि क्षमता जास्त.\n\nडेटा object नावाच्या store मध्ये राहतो.\n\nsearch आणि range या गरजा तसे सोडवते.\n\nमोठा offline data — येथे ठेवणे योग्य.',
     '<p>IndexedDB साठी:</p>\n<p>मोठे डेटा, संरचित रचना, offline.</p>'),
   S('2. object store',
     'object store हे table सारखे — रेकॉर्डची रचना.\n\nप्रत्येक रेकॉर्ड key ने ओळखला जातो.\n\nkey path — ऑब्जेक्टमधील फील्ड जे key बनते.\n\nstore रचना आधी ठरवावी.\n\nहे schema — डेटाची जोडणी.',
     '<p>store नियम:</p>\n<p>key + value रचना स्थिर.</p>'),
   S('3. transactions',
     'बदल transaction ने होतात — एकाच वेळी गट.\n\nसर्व बदल एकत्र यशस्वी किंवा सर्व नाही.\n\nअसे atomic नियंत्रण डेटा सुरक्षित ठेवते.\n\nवाचन write पेक्षा वेगळ्या transaction असू शकेल.\n\nअनोळखी रद्द होणे टाळणे गरजेचे.',
     '<p>transaction नियम:</p>\n<p>एकत्र यशस्वी, एकत्र रद्द.</p>'),
   S('4. indexes',
     'index म्हणजे अतिरिक्त search पथ — key वर नोंद.\n\nkey path वगळून दुसर्या फील्डवर शोधता येते.\n\nउदा. दिनांकानुसार नोंदी शोधणे.\n\nindex ने डेटा वेगात मिळतो.\n\nप्रत्येक गरजेच्या field ला index जोडा.',
     '<p>index नियम:</p>\n<p>शोधत असलेल्या field ला index.</p>'),
   S('5. version नियम',
     'डेटाबेस version ने वाढतो — रचना बदलता येते.\n\nonupgrade event मध्ये नवीन store बनतो.\n\nजुना version ते नवे मार्ग सांगणे हवे.\n\nमाइग्रेशन क्रमबद्ध — data गमावू नको.\n\nversion हे schema चे नियंत्रण.',
     '<p>version नियम:</p>\n<p>नवी रचना upgrade event मध्ये.</p>'),
   S('6. वापर नोंद',
     'IndexedDB कुठे? offline इनबॉक्स, फोटो सूची.\n\nमोठा data शोभत नाही हे localStorage मध्ये ठेवू नका.\n\ncooperation — worker सोबत भारी data इथे.\n\nहे फक्त कल्पना — कोड JavaScript मध्ये.\n\nरचना नियम आधी, नंतर आकडे.',
     '<p>IndexedDB उपयोग:</p>\n<p>offscreen इनबॉक्स, फोटो नोंदी.</p>'),
   S('Mini Project',
     'डेटाबेस कल्पनेचे रेखाटन पेज.\n\nobject store नियम. transaction गुण.\n\nindex नोंद. version संकल्पना टीप.\n\nहे IndexedDB ची विचार रचना देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>IndexedDB माहिती</h1>\n  <p>object store — key + value.</p>\n  <p>transaction — एकत्र यशस्वी.</p>\n  <p>index — शोधाचा पथ.</p>\n</body>\n</html>'),
  ],
  ['IndexedDB म्हणजे काय?', 'object store म्हणजे?', 'transaction काय करतो?', 'version कशासाठी?'],
  [{'q':'मोठा browser डेटाबेस?','o':['IndexedDB','localStorage','cookie','title'],'c':0},
   {'q':'record ओळख?','o':['key','tag','class','color'],'c':0},
   {'q':'एकत्र बदल गट?','o':['transaction','link','form','style'],'c':0},
   {'q':'शोधाचा पथ?','o':['index','frame','slot','role'],'c':0}],
  {'prompt':'डेटाबेस कल्पना पेज','starterCode':'<p>object store key value</p>','expectedOutput':'Renders IndexedDB concept structure'},
  ['localStorage आणि IndexedDB फरक?', 'version change कसा?'],
  ['html-worker-life', 'html-wasm-intro'],
  'html-worker-life', 'html-wasm-intro')

# =====================================================================
# 6. WEB ASSEMBLY
# =====================================================================
L('html-wasm-intro',
  'Web Assembly',
  'Web Assembly — जलद बायनरी कोड',
  'WASM बायनरी स्वरूप, module रचना आणि browser मधील कार्यक्षमता.',
  [
   S('1. WASM म्हणजे',
     'Web Assembly हे ब्राउझरसाठी बायनरी स्वरूप.\n\nमशीन वाचू शकते — म्हणून खूप वेगवान.\n\nC++ किंवा Rust चा कोड WASM मध्ये बदलतो.\n\nनंतर तो ब्राउझर sandbox मध्ये चालतो.\n\nजड गणना आणि खेळांसाठी हा पर्याय.',
     '<p>WASM कुठे चांगले?</p>\n<p>खेळ, व्हिडिओ, सिम्युलेशन.</p>'),
   S('2. performance मूल',
     'ब्राउझर WASM ला जवळच्या मशीन कोडप्रमाणे चालवतो.\n\nparse वेगवान — फाइल लहान आणि स्थिर.\n\ninterpreter चा धीमा काम नाही.\n\nहोय — near native गती मिळते.\n\nनेहमी नाही; पण गणना गरजेसाठी उत्तम.',
     '<p>performance कशी?</p>\n<p>लहान parse, जवळ native गती.</p>'),
   S('3. module रचना',
     'WASM फाइलला module म्हणतात.\n\nimport — बाहेरील function घेते.\n\nexport — आपली function बाहेर देते.\n\nmain code module ला JavaScript शी जोडतो.\n\nरचना स्पष्ट आणि नियंत्रित असते.',
     '<p>module घटक:</p>\n<p>import, export, functions.</p>'),
   S('4. JavaScript जोडणी',
     'WASM स्वतः JavaScript वर अवलंबून — जोडणी तेच.\n\nआधी two-way mapping तयार करतात.\n\nनंतर function calls वाट्याने चालतात.\n\ndata buffer shared — रूपांतरण तेथे.\n\nहेच architecture आधुनिक अॅपमध्ये दिसते.',
     '<p>जोडणी नियम:</p>\n<p>import/export मध्ये function जुळणी.</p>'),
   S('5. सुरक्षा sandbox',
     'WASM सँडबॉक्समध्ये चालतो — अलग मेमरी.\n\nमेमरी bounds चेक होते — धोका मर्यादित.\n\nफाइल Direct access नाही.\n\nआपले origin नियम कायम.\n\nहे browser चे संरक्षण कायम ठेवते.',
     '<p>sandbox नियम:</p>\n<p>मेमरी अलग, origin नियंत्रित.</p>'),
   S('6. योग्य वापर',
     'आकडे calculations — WASM फायदेशीर.\n\nखेळ physics — गती महत्त्वाची.\n\nव्हिडिओ codec — काम जड.\n\nसाधे DOM काम — नको, JavaScript पुरेसे.\n\nनिवड कामाच्या स्वरूपावर.',
     '<p>वापर नियम:</p>\n<p>गणना जड तर WASM, साधे तर JS.</p>'),
   S('Mini Project',
     'WASM कल्पनेचे सूचना पेज.\n\nmodule घटक. performance टीप.\n\nsandbox सुरक्षा. योग्य वापर नियम.\n\nहे WASM ची वैचारिक ओळख देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>Web Assembly</h1>\n  <p>import/export function जुळणी.</p>\n  <p>sandbox — मेमरी अलग.</p>\n  <p>जड गणना — WASM योग्य.</p>\n</body>\n</html>'),
  ],
  ['WASM म्हणजे?', 'performance कशी?', 'module म्हणजे?', 'sandbox काय देतो?'],
  [{'q':'बायनरी वेग कोड?','o':['WebAssembly','Canvas','CSS Grid','Audio'],'c':0},
   {'q':'module बाहेर function?','o':['export','hidden','local','cache'],'c':0},
   {'q':'मेमरी अलग करणे?','o':['sandbox','frame','link','meta'],'c':0},
   {'q':'WASM कुठे चांगले?','o':['जड गणना','CSS reset','मजकूर ठेवणे','form design'],'c':0}],
  {'prompt':'WASM कल्पना पेज','starterCode':'<p>WebAssembly बायनरी वेग</p>','expectedOutput':'Renders WASM concept page'},
  ['WASM parity JS कधी?', 'sandbox म्हणजे काय?'],
  ['html-indexed-stores', 'html-net-security'],
  'html-indexed-stores', 'html-net-security')

# =====================================================================
# 7. NETWORK SECURITY
# =====================================================================
L('html-net-security',
  'Network Security',
  'Network Security — सुरक्षित प्रवाह',
  'TLS, CORS, CSP आणि mixed content यांचे नियम.',
  [
   S('1. TLS प्रवाह',
     'TLS म्हणजे संकेत केलेला प्रवाह — encryption.\n\nhandshake मध्ये key व्यवस्था होते.\n\ncertificate ने ओळख पटते — कोणाशी बोलतोय.\n\nसर्व traffic गुप्त राहतो — reading नको.\n\nआधुनिक वेबचा पाया हा TLS आहे.\n\nप्रवाह मोकळा असत नाही — दोन्ही बाजूंची जोडणी प्रमाणितच.\n\nप्रत्येक संदेश वाचता येत नाही, म्हणून गोपनीयता राहते.',
     '<p>TLS नियम:</p>\n<p>certificate + encryption + ओळख.</p>'),
   S('2. CORS नियम',
     'CORS म्हणजे cross-origin ठरवण्याचा नियम.\n\nserver headers ने कुठल्या origin चा परवानगी देतो.\n\norigin म्हणजे scheme + host + port.\n\nयोग्य headers ने बाहेरून API वापरता येते.\n\nचुकीचा CORS request browser थांबवतो.',
     '<p>CORS ठरवणे:</p>\n<p>Allowed-Origin headers स्पष्ट.</p>'),
   S('3. CSP संरक्षण',
     'Content-Security-Policy हे बाह्य code चा कडक नियम.\n\nकोणता source चालू — हे leader ठरवतो.\n\ninline code नको — नियम कडक होतो.\n\nXSS चा मार्ग लहान होतो.\n\nCSP मध्ये सोडवलेल्या नियमांनी धोका टाळतो.',
     '<p>CSP ध्येय:</p>\n<p>कोणता script कोठून येईल ते ठरवणे.</p>'),
   S('4. mixed content',
     'mixed content म्हणजे HTTPS मध्ये HTTP भाग.\n\nचित्र किंवा script insecure आले तर धोका.\n\nआधुनिक ब्राउझर असे request block करतो.\n\nसर्व URL https मध्ये रूपांतर करा.\n\nनियम: एकही http resource नको.\n\nअपग्रेड केलेला सर्व मार्ग एकाच सुरक्षित स्वरूपात राहतो.\n\nनवी फाइल जोडताना url तपासा — https नेच द्या.',
     '<p>mixed नियम:</p>\n<p>सर्व resource https नेच.</p>'),
   S('5. referrer नियंत्रण',
     'referrer म्हणजे कोणत्या जागेवरून आलो ती माहिती.\n\nकाही संदर्भात ती गोपनीय हवी.\n\nreferrerpolicy attribute ने ते नियंत्रण होते.\n\nno-referrer किंवा strict-origin — निवड तुमची.\n\nगोपनीयता आणि विश्लेषणाचा तोल साधा.',
     '<a href="https://example.com" referrerpolicy="no-referrer">बाहेरचा</a>'),
   S('6. सारांश नियम',
     'सुरक्षित प्रवाहासाठी तीन गोष्टी.\n\nपहिली: सर्वत्र TLS — https ने आधार.\n\nदुसरी: CORS — मर्यादित cross-origin.\n\nतिसरी: CSP — बाह्य कोड कडक.\n\nही त्रयी आधुनिक वेबची हमी.\n\nहा नियम मराठी पेजेसाठीही तितकाच महत्त्वाचा.\n\nसुरक्षा नियम पाळल्यावर वापरकर्ता विश्वासाने आत येतो.',
     '<p>सावधगिरी तीन:</p>\n<p>TLS + CORS + CSP.</p>'),
   S('Mini Project',
     'सुरक्षा मार्गदर्शक पेज बनवा.\n\nप्रत्येक नियमासाठी एक विभाग.\n\nhttps आधार टीप. referrer उदाहरण.\n\nहे तत्त्व स्वतःच्या पेजला लावा.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>सुरक्षा मार्गदर्शक</h1>\n  <p>TLS — सर्वत्र https.</p>\n  <p>CORS — मर्यादित परवाना.</p>\n  <p>CSP — बाह्य कोड कडक.</p>\n</body>\n</html>'),
  ],
  ['TLS काय करतो?', 'CORS म्हणजे?', 'CSP काय थांबवतो?', 'mixed content म्हणजे?'],
  [{'q':'प्रवाह गुप्त करणारा?','o':['TLS','meta','canvas','slot'],'c':0},
   {'q':'cross-origin नियम?','o':['CORS','CSS','URL','DOM'],'c':0},
   {'q':'बाह्य कोड कडक नियम?','o':['CSP','JSON','XML','Base'],'c':0},
   {'q':'https मध्ये http भाग?','o':['mixed content','incognito','private mode','sandbox'],'c':0}],
  {'prompt':'सुरक्षा मार्गदर्शक','starterCode':'<p>TLS सर्वत्र https</p>','expectedOutput':'Renders security guide'},
  ['CSP inline का नको?', 'referrer कधी गुप्त ठेवायचे?'],
  ['html-wasm-intro', 'html-performance-core'],
  'html-wasm-intro', 'html-performance-core')

# =====================================================================
# 8. PERFORMANCE CORE
# =====================================================================
L('html-performance-core',
  'Performance Core',
  'Performance Core — कोर मेट्रिक्स',
  'Core Web Vitals, LCP, INP, CLS आणि resource hints.',
  [
   S('1. Core Web Vitals',
     'Core Web Vitals ही पेज अनुभवाची तीन मोजमापे.\n\nLCP — किती लवकर मुख्य भाग दिसतो.\n\nINP — क्लिकला किती वेगाने उत्तर.\n\nCLS — रचना हलते का.\n\nही त्रयी वापरकर्त्याचा अनुभव ठरवते.',
     '<p>तीन मेट्रिक्स:</p>\n<p>LCP, INP, CLS.</p>'),
   S('2. LCP लोडिंग',
     'LCP म्हणजे largest content paint — मुख्य भाग.\n\nअनेकदा hero चित्र किंवा मोठे हेडिंग.\n\nचित्रासाठी fetchpriority ने आधार मिळतो.\n\nनियम: मुख्य media आधी येते.\n\nवेगासाठी width/height आधी जागा देता.',
     '<img src="hero.jpg" width="800" height="450" fetchpriority="high" alt="मुख्य">\n<p>मुख्य चित्र आधी लोड होते.</p>'),
   S('3. INP प्रतिसाद',
     'INP म्हणजे interaction ते प्रतिसाद वेळ.\n\nक्लिक, टॅप, की — प्रत्येक क्रिया मोजली.\n\nजड काम धागा रोखते तर INP वाईट.\n\nworker ने काम वेगळे करता येते.\n\nलहान request आणि सोपे handlers इष्ट.',
     '<button type="button">प्रतिसाद नियम</button>\n<p>क्रिया वेगाने उत्तर देतात.</p>'),
   S('4. CLS स्थिरता',
     'CLS म्हणजे layout shift — रचना हलते का.\n\nचित्र लोड होता जागा न घेतल्यास हलचाल.\n\nwidth/height attribute ने जागा आरक्षित.\n\nfont बदल स्थिर ठेवा.\n\nहे मोजमाप वापरकर्त्याच्या त्रासाची खूण.',
     '<p>CLS नियम:</p>\n<p>चित्रांना जागा, font स्थिर.</p>'),
   S('5. resource hints',
     'resource hints म्हणजे पेजची आधी तयारी.\n\npreconnect — host आगाऊ जोडणी.\n\npreload — जड resource आधी भरणे.\n\nfetchpriority — महत्त्व क्रम सांगणे.\n\nहे performance सुधारते, वाहतूक नाही वाढवते.',
     '<link rel="preconnect" href="https://cdn.example.com">\n<link rel="preload" as="image" href="hero.jpg">'),
   S('6. मोजमाप सवय',
     'मोजमापासाठी browser devtools हे साधन.\n\nreal user data ही सर्वांत खरी — वापरकर्तेच.\n\nनियम: लक्ष्य गाठल्यावर गुणवत्ता दिसेल.\n\nसतत मोजण्याची सवय ठेवा.\n\nHTML रचना येथे base — JS वाटा वेगळा.',
     '<p>मोजमाप नियम:</p>\n<p>devtools + real user data.</p>'),
   S('Mini Project',
     'performance चे नियम पेज बनवा.\n\nतीन मेट्रिक्स. preconnect उदाहरण.\n\nwidth/height टीप. आधार नोंद.\n\nहे Core Web Vitals ची जाण देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <link rel="preconnect" href="https://cdn.example.com">\n</head>\n<body>\n  <h1>Performance Core</h1>\n  <img src="hero.jpg" width="800" height="450" alt="मुख्य">\n  <p>LCP, INP, CLS — तीन मेट्रिक्स.</p>\n</body>\n</html>'),
  ],
  ['तिन्ही मेट्रिक्स?', 'LCP काय दाखवतो?', 'CLS कसे चांगले राखतात?', 'preload कशासाठी?'],
  [{'q':'LCP म्हणजे?','o':['largest content paint','least code pass','local call point','load cache part'],'c':0},
   {'q':'interaction प्रतिसाद?','o':['INP','CSS','SEO','URL'],'c':0},
   {'q':'रचना हलते का?','o':['CLS','ALT','GET','POST'],'c':0},
   {'q':'host आधी जोडणी?','o':['preconnect','fetch','submit','reset'],'c':0}],
  {'prompt':'performance नियम पेज','starterCode':'<link rel="preconnect" href="https://cdn.example.com">','expectedOutput':'Renders core vitals page'},
  ['CWV बदलत का?', 'real user data कुठून?'],
  ['html-net-security', 'html-a11y-advanced'],
  'html-net-security', 'html-a11y-advanced')

# =====================================================================
# 9. A11Y ADVANCED
# =====================================================================
L('html-a11y-advanced',
  'A11y Advanced',
  'Accessibility — प्रगत प्रवेश्यता',
  'ARIA roles, accessible name, live regions आणि focus रचना.',
  [
   S('1. ARIA खोली',
     'ARIA म्हणजे प्रवेश्यता माहिती देणारे attributes.\n\nrole — what या प्रकारचे घटक.\n\nstate — status काय.\n\nproperty — गुण आणि ओळख.\n\nनेहमी आधी native tag; ARIA नंतर जोडा.',
     '<p>ARIA तीन:</p>\n<p>role, state, property.</p>'),
   S('2. accessible name',
     'प्रत्येक इंटरॅक्टिव्ह घटकाला name हवा.\n\nname म्हणजे वाचकाने ओळखलेले वर्णन.\n\nlabel ने name मिळतो — आधी तो वापरा.\n\naria-label तेव्हाच, जेव्हा दृश्य मजकूर नाही.\n\nनियम: दृश्य प्रथम, ARIA दुय्यम.',
     '<label for="nm">नाव</label>\n<input id="nm" name="n">\n<p>label ने प्रवेश्य name मिळतो.</p>'),
   S('3. focus रचना',
     'कीबोर्ड वापरकर्त्यासाठी focus क्रम महत्त्वाचा.\n\ntabindex ने natural order राखा.\n\nfocus दिसत असावा — स्पष्ट किनारी.\n\nskip link ने मुख्य भागाकडे थेट जाता.\n\nनियम: फोकस नेहमी दृश्य राहील.\n\nफोकस सूचना keyboard आणि mouse यांना वेगळे दिसते — म्हणून स्पष्ट outline आवश्यक.\n\nटॅब दाबून तपासा की मार्ग नेमका दिसतो.',
     '<a href="#मुख्य">मुख्यकडे</a>\n<h2 id="मुख्य">मुख्य भाग</h2>'),
   S('4. live regions',
     'aria-live म्हणजे सूचना भाग — घोषणा लगेच.\n\npolite — वाट पाहून सांगतो.\n\nassertive — लगेच मध्ये धावतो.\n\nचुकीचा मजकूर बदल घोषित होतो.\n\nहे dynamic content ची मदत.\n\nसूचना भाग आधी रिकामा राहतो — बदल झाल्यावर घोषणा होते.',
     '<p aria-live="polite">नवी सूचना येथे.</p>'),
   S('5. form त्रुटी',
     'त्रुटी संदेश name ने जोडलेला हवा.\n\naria-describedby ने वर्णन ओळखते.\n\naria-invalid ने स्थिती स्पष्ट करते.\n\ncolor फक्त एक खूण नको.\n\nसंदेश स्पष्ट आणि मार्गदर्शक असो.',
     '<label for="em">ईमेल</label>\n<input id="em" type="email" aria-invalid="true" aria-describedby="emTip">\n<p id="emTip">योग्य ईमेल भरा.</p>'),
   S('6. रचना तपासणी',
     'प्रवेश्यता तपासणी साधनांनी नेहमी करा.\n\nlandmarks — header, nav, main, footer.\n\nओळख labels आणि headings.\n\nकीबोर्ड संपूर्ण पथ तपासा.\n\nमराठी मजकुरातही हेच नियम लागतात.\n\nप्रत्येक नव्या पेजवर संपूर्ण यादी तपासल्यास प्रवेश्यता स्थिर राहते.',
     '<p>तपासणी यादी:</p>\n<p>landmarks, names, focus, live.</p>'),
   S('Mini Project',
     'प्रवेश्य पेज तयार करा.\n\nlabel सर्व fields. live region टीप.\n\nskip link. focus दृश्य. name नियम.\n\nहे प्रगत a11y चे प्रात्यक्षिक.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <a href="#काम">कामाकडे</a>\n  <main id="काम">\n    <h1>प्रवेश्य पेज</h1>\n    <label for="nm">नाव:</label>\n    <input id="nm" name="n">\n    <p aria-live="polite">स्थिती येथे.</p>\n  </main>\n</body>\n</html>'),
  ],
  ['ARIA तीन प्रकार?', 'name कुठून मिळतो?', 'live region काय?', 'त्रुटी कशी जोडतात?'],
  [{'q':'accessibility attributes?','o':['ARIA','CSS','SVG','JSON'],'c':0},
   {'q':'name देणारा tag?','o':['label','div','span','canvas'],'c':0},
   {'q':'लगेच सूचना भाग?','o':['aria-live','aria-hidden','aria-label','title'],'c':0},
   {'q':'त्रुटी वर्णन जोडणी?','o':['aria-describedby','aria-hidden','muted','inert'],'c':0}],
  {'prompt':'प्रवेश्य पेज','starterCode':'<label for="nm">नाव</label><input id="nm">','expectedOutput':'Renders accessible page with live region'},
  ['native tag आधी का?', 'aria-live polite काय?'],
  ['html-performance-core', 'html-protocol-velocity'],
  'html-performance-core', 'html-protocol-velocity')

# =====================================================================
# 10. PROTOCOL VELOCITY
# =====================================================================
L('html-protocol-velocity',
  'Protocol Velocity',
  'Protocol — HTTP/2 आणि HTTP/3',
  'multiplexing, streams, header compression आणि QUIC समज.',
  [
   S('1. HTTP/2 बदल',
     'HTTP/2 ने जुने HTTP/1 चे धीमे गुण बदलले.\n\nएकाच जोडणीवर अनेक संदेश — multiplexing.\n\nstream नावाच्या मार्गांनी parallel चालते.\n\nheader compression ने वाहतूक कमी.\n\nयामुळे वेग आणि वाहतूक सुधारली.',
     '<p>HTTP/2 गुण:</p>\n<p>multiplex, compression, parallel.</p>'),
   S('2. HTTP/3 नवा',
     'HTTP/3 ने TCP ऐवजी QUIC वर आधार.\n\nQUIC हे UDP वर तयार — कमी विलंब.\n\nconnection सेटअप वेगाने होतो.\n\npacket loss असल्याही काम चालत राहते.\n\nहे मोबाइल नेटवर्कसाठी छान झाले.',
     '<p>HTTP/3 गुण:</p>\n<p>QUIC, low latency, resilient.</p>'),
   S('3. multiplex तत्त्व',
     'multiplex म्हणजे एकाच मार्गावर संदेशांचा गट.\n\nreceiving side प्रत्येक संदेश वेगळा ओळखतो.\n\nकोणता पूर्ण झाला म्हणून बाकी थांबत नाही.\n\nhead-of-line अडथळा कमी होतो.\n\nवेगमान अनुभव मिळतो.',
     '<p>multiplex:</p>\n<p>एक मार्ग, अनेक संदेश, वेगळा क्रम.</p>'),
   S('4. prioritization',
     'प्राधान्य म्हणजे कोणता request आधी पुरेसा.\n\nमुख्य CSS/HTML चा क्रम वर.\n\nचित्रे नंतर — anticipation.\n\nहे server आणि client संयोजित ठरवतात.\n\npriority नियम कामाची दिशा देतो.',
     '<p>priority नियम:</p>\n<p>मुख्य आधी, गौण नंतर.</p>'),
   S('5. server push विचार',
     'HTTP/2 मध्ये server आधी resources पाठवू शकतो.\n\nहे push कल्पनेने वेग वाढतो.\n\nपण जास्त push वाहतूक वाढवते.\n\nआधुनिक browsers push ऐवजी hints वापरतात.\n\nनियम: काळजीपूर्वक, कमीत कमी.',
     '<p>push नियम:</p>\n<p>कमी, नेमकी, काळजीपूर्वक.</p>'),
   S('6. परिणाम सारांश',
     'HTTP/2 आज सर्वत्र — आधार मिळतो.\n\nHTTP/3 हळूहळू व्यापत आहे.\n\nmultiplex आणि compression गुण सामान्य.\n\nहे protocol ज्ञान HTML च्या पलीकडे जाते.\n\nपेज वेगासाठी आधीपासून तयारी हवी.',
     '<p>सारांश:</p>\n<p>HTTP/2 सध्याचा, HTTP/3 पुढे.</p>'),
   S('Mini Project',
     'protocol गुणांचे पेज.\n\nmultiplex टीप. QUIC नोंद.\n\npriority नियम. push खबरदारी.\n\nहे protocol ची जाण देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>Protocol Velocity</h1>\n  <p>multiplex — एक मार्ग अनेक संदेश.</p>\n  <p>QUIC — कमी विलंब.</p>\n  <p>priority — मुख्य आधी.</p>\n</body>\n</html>'),
  ],
  ['HTTP/2 काय सुधारते?', 'HTTP/3 वर काय?', 'multiplex म्हणजे?', 'push नियम?'],
  [{'q':'आधुनिक वेगाचे protocols?','o':['HTTP/2 HTTP/3','FTP SMTP','POP IMAP','NTP'],'c':0},
   {'q':'HTTP/3 चा आधार?','o':['QUIC','slow','delay','none'],'c':0},
   {'q':'एक मार्ग अनेक संदेश?','o':['multiplex','single','serial','batch'],'c':0},
   {'q':'server आधी पाठवणे?','o':['push','pull','render','format'],'c':0}],
  {'prompt':'protocol गुण पेज','starterCode':'<p>multiplex एक मार्ग अनेक संदेश</p>','expectedOutput':'Renders protocol velocity page'},
  ['HTTP/3 कुठे डेटा?', 'push आधुनिक का नको?'],
  ['html-a11y-advanced', 'html-cdn-edge'],
  'html-a11y-advanced', 'html-cdn-edge')

# =====================================================================
# 11. CDN & EDGE
# =====================================================================
L('html-cdn-edge',
  'CDN & Edge',
  'CDN आणि Edge — जवळचे वितरण',
  'CDN cache, edge compute, geo routing आणि secure distribution.',
  [
   S('1. CDN म्हणजे',
     'CDN म्हणजे जगभर पसरलेले server गट.\n\nप्रत्येक भागातील user जवळच्या server शी बोलतो.\n\norigin म्हणजे खरा स्रोत — दूर राहतो.\n\nCDN cache ने ती प्रत जवळ ठेवतो.\n\nविलंब कमी आणि वेग जास्त होतो.',
     '<p>CDN गुण:</p>\n<p>जागतिक cache, कमी विलंब.</p>'),
   S('2. edge compute',
     'edge म्हणजे जवळचा server भाग — code तेथे चालतो.\n\nहे वेगवान response देते — user जवळ.\n\nलहान function edge वर चालतात.\n\nपेज रचना वेगळी नाही — वितरण वेगळे.\n\nहे आधुनिक वास्तुकलेची दिशा.',
     '<p>edge नियम:</p>\n<p>जवळचा code, कमी गोल फेरी.</p>'),
   S('3. cache धोरण',
     'cache किती वेळ ठेवायचे — हे TTL ठरवते.\n\nTTL संपल्यावर origin पुन्हा मिळतो.\n\nstale पण ताळ खाली ठेवता येते.\n\npurge म्हणजे लवकर काढून टाकणे.\n\nहेच धोरण वेग आणि ताजेपणा ठरवते.',
     '<p>cache नियम:</p>\n<p>TTL, stale, purge — धोरण.</p>'),
   S('4. geo routing',
     'geo routing म्हणजे जवळचे server निवडणे.\n\ndomain ला अनेक server उत्तर देतात.\n\nanycast ने जवळचा मार्ग सापडतो.\n\nमापन latency ने होते.\n\nयामुळे प्रत्येक user ला जवळचा उपाय.',
     '<p>routing नियम:</p>\n<p>anycast + जवळचे server.</p>'),
   S('5. सुरक्षा वितरण',
     'CDN च्या वर सुरक्षा स्तर असतो.\n\nWAF — धोकादायक request थांबवते.\n\nDDoS हल्ल्यांची प्रतिकार — गर्दी सोसते.\n\nbot नियंत्रण — खरी मानवी भेट वेगळी.\n\nहे barriers origin चे संरक्षण करतात.',
     '<p>CDN सुरक्षा:</p>\n<p>WAF, DDoS defense, bot नियंत्रण.</p>'),
   S('6. योग्य वापर',
     'स्थिर media — CDN सर्वांत योग्य.\n\nप्रत्येक फाइल cache करणे नको.\n\nhead headers ने cache नियम पाठवा.\n\nमराठी content साठीही हेच नियम.\n\nनिवडीने व्यवस्था सुधारते.',
     '<p>वापर नियम:</p>\n<p>media cache, HTML ताजे, सर्व headers.</p>'),
   S('Mini Project',
     'CDN योजना पेज बनवा.\n\ncache TTL नियम. geo routing टीप.\n\nWAF सुरक्षा. edge नोंद.\n\nहे वितरण व्यवस्थेची जाण देते.',
     '<!DOCTYPE html>\n<html lang="mr">\n<body>\n  <h1>CDN योजना</h1>\n  <p>जागतिक cache — कमी विलंब.</p>\n  <p>edge compute — जवळचे code.</p>\n  <p>WAF + DDoS defense.</p>\n</body>\n</html>'),
  ],
  ['CDN काय करतो?', 'edge म्हणजे?', 'TTL म्हणजे?', 'WAF काय थांबवतो?'],
  [{'q':'जागतिक server गट?','o':['CDN','PDF','PPT','DOC'],'c':0},
   {'q':'जवळचा code प्रकार?','o':['edge compute','center cloud','main frame','local file'],'c':0},
   {'q':'cache काळ व्यवस्था?','o':['TTL','URL','ALT','IHL'],'c':0},
   {'q':'धोकादायक request थांबवणे?','o':['WAF','GPS','USB','MP3'],'c':0}],
  {'prompt':'CDN योजना पेज','starterCode':'<p>जागतिक cache कमी विलंब</p>','expectedOutput':'Renders CDN planning page'},
  ['origin आणि edge फरक?', 'HTML cache का नको?'],
  ['html-protocol-velocity', 'html-future-project'],
  'html-protocol-velocity', 'html-future-project')

# =====================================================================
# 12. FUTURE PROJECT (capstone)
# =====================================================================
L('html-future-project',
  'Future Project',
  'Future Project — सर्व Level 5 एकत्र',
  'realtime मराठी network अॅप — canvas, workers, IndexedDB आणि सुरक्षित प्रोटोकॉल.',
  [
   S('1. उद्दिष्टे',
     'हा धडा Level 5 ची सर्व कौशल्ये जोडतो.\n\nटार्गेट: "मराठी network केंद्र" — realtime अॅप.\n\nrealtime संवाद, worker काम, IndexedDB storage.\n\ncanvas ग्राफिक्स आणि secure protocol.\n\nप्रत्येक विभाग एक कौशल्ये प्रदर्शन.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी network केंद्र</title>\n</head>\n<body></body>\n</html>'),
   S('2. realtime रचना',
     'अॅपचे realtime भाग नियोजन.\n\nchat field — websocket जोडणी जागा.\n\nस्थिती टीप — सूचना येथे दाखवणे.\n\nwss नियम कायम.\n\nरचना HTML तयार — संवाद JavaScript ने.',
     '<main>\n  <h2>निवड</h2>\n  <p>chat क्षेत्र — संदेश येथे.</p>\n  <p aria-live="polite">स्थिती सूचना.</p>\n</main>'),
   S('3. worker आणि storage',
     'जड काम worker मध्ये.\n\nडेटा IndexedDB मध्ये — मोठी साठवण.\n\nlocalStorage फक्त थीम सारखे लहान.\n\nworker संदेश आणि transaction नियम.\n\nवेग आणि सुरक्षा दोन्ही दिसतील.',
     '<p>data योजना:</p>\n<p>worker काम, IndexedDB data, थीम localStorage.</p>'),
   S('4. canvas ग्राफिक्स',
     'आकडेवारी chart साठी canvas.\n\nस्थिती दृश्य — रेषा आणि गोल.\n\nwidth/height निर्धार आधी.\n\nमोजकी redraw — गुळगुळीत re-flow.\n\ncanvas HTML घटक येथे चालतो.',
     '<canvas width="400" height="240">आकडेवारी chart जागा</canvas>'),
   S('5. सुरक्षा आणि प्रवेश्यता',
     'सर्व प्रवाह wss आणि https ने.\n\nटोकन नियम. CSP धोरण.\n\nlabels, live region आणि focus.\n\nप्रवेश्यता आणि सुरक्षा ही दोन्ही पाठीशी.\n\nनियम तपासल्यावर अप्प तयार.',
     '<form action="https://example.com/login" method="post">\n  <label>सदस्य: <input name="u" autocomplete="username"></label>\n  <label>पासवर्ड: <input type="password" name="p" autocomplete="current-password"></label>\n  <button type="submit">प्रवेश</button>\n</form>'),
   S('6. मेट्रिक्स नोंद',
     'अॅप performance मोजतो.\n\nLCP मुख्य; INP क्रिया; CLS स्थिर.\n\nCDN edge जवळचे वितरण देतात.\n\nprotocol HTTP/3 तयारी.\n\nयातून Level 5 चे दर्शन होते.',
     '<p>मेट्रिक्स:</p>\n<p>LCP, INP, CLS — तीन नोंद.</p>'),
   S('Mini Project',
     'संपूर्ण network केंद्राची रचना करा.\n\nhead नियम. realtime chat क्षेत्र.\n\ncanvas chart. storage योजना.\n\nआता CSS आणि JavaScript चा वाटा पुढे.',
     '<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>मराठी network केंद्र</title>\n</head>\n<body>\n  <h1>मराठी network केंद्र</h1>\n  <p>realtime chat — वेब सॉकेट जागा.</p>\n  <canvas width="400" height="240">chart जागा</canvas>\n  <p aria-live="polite">स्थिती येथे.</p>\n</body>\n</html>'),
  ],
  ['अॅप कुठले कौशल्य जोडतो?', 'data योजना कशी?', 'canvas कुठे?', 'सुरक्षा नियम कुठले?'],
  [{'q':'realtime जोडणी रचना?','o':['chat field + wss','only HTTP','no net','offline only'],'c':0},
   {'q':'जड काम कुठे?','o':['worker','main thread','link','meta'],'c':0},
   {'q':'मोठा data कुठे?','o':['IndexedDB','title','href','class'],'c':0},
   {'q':'अएप सर्व स्तर?','o':['secure protocol','plain text','no cache','hidden'],'c':0}],
  {'prompt':'network केंद्र फ्रंट','starterCode':'<!DOCTYPE html>\n<html lang="mr">\n<head>\n  <meta charset="utf-8">\n  <title>network केंद्र</title>\n</head>\n<body></body>\n</html>','expectedOutput':'Renders full next-gen marathi network app'},
  ['हे app पुढे कोणते भाग JavaScript जोडतील?', 'CSS कुठून येईल?'],
  ['html-cdn-edge', 'html-canvas-graphics'],
  'html-cdn-edge', 'html-canvas-graphics')

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
                    line += ", codeLanguage: \"html\""
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
    parts.append("    levelLabel: HTML5_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === HTML · LEVEL 5 — Cutting-Edge Web: Canvas, Workers आणि Protocol खोली ===\n'
    header += 'export const HTML5_LABEL = "HTML · Level 5 — Cutting-Edge Web: Canvas, Workers आणि Protocol खोली";\n'
    header += '\nexport const htmlLevel5: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/html5_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/html5_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/html5_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/html-level5.ts')
print("WROTE html-level5.ts, lines:", len(out.split(chr(10))))