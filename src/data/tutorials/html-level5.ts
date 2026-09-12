import type { Tutorial } from "@/data/tutorials";

// === HTML · LEVEL 5 — Cutting-Edge Web: Canvas, Workers आणि Protocol खोली ===
export const HTML5_LABEL = "HTML · Level 5 — Cutting-Edge Web: Canvas, Workers आणि Protocol खोली";

export const htmlLevel5: Tutorial[] = [
  {
    slug: "html-canvas-graphics",
    categoryId: "web",
    title: "Canvas & Graphics",
    marathiTitle: "Canvas — रास्टर रेखांकनाचा पाया",
    level: "intermediate",
    minutes: 22,
    summary: "canvas element, 2d context, coordinate system आणि canvas विरुद्ध SVG निर्णय.",
    sections: [
      { title: "1. canvas element", content: "canvas हा एक drawing surface — ब्राउझरमधील चित्र तयार करण्याची जागा.\n\nwidth आणि height attributes ने त्याचा आकार ठरतो. height म्हणजे पिक्सेल.\n\nहे element साधा rectangle आहे — त्यात पाठ text fallback म्हणून ठेवता येते.\n\nजुने ब्राउझर fallback दाखवतो, नवे canvas रेखांकन करतो.\n\nCSS आकार आणि attribute आकार वेगळे असू शकतात — नियम लक्षात ठेवा.", code: `<canvas width="400" height="300">
  तुमचा ब्राउझर canvas दाखवू शकत नाही.
</canvas>`, codeLanguage: "html" },
      { title: "2. 2d context", content: "canvas वर चित्र काढण्यासाठी 2d context मिळवावा लागतो.\n\ngetContext म्हणजे एक हात जोडणी — ती JavaScript ने होते.\n\nरेषा, आयत, वर्तुळ आणि मजकूर — सर्व त्या context वर.\n\nHTML फक्त container आहे; खरे चित्र कोड रेखांकन करते.\n\nशिकताना context ची कल्पना समजून घ्या — वापर JavaScript मध्ये.", code: `<canvas width="400" height="300">रेखांकन जागा</canvas>`, codeLanguage: "html" },
      { title: "3. coordinate system", content: "canvas चा आधार ग्रिड — प्रत्येक बिंदू x आणि y ने सांगितला.\n\nमूळ बिंदू वरच्या डाव्या कोपर्यात — x उजवीकडे, y खाली वाढतो.\n\nप्रत्येक एकक म्हणजे एक पिक्सेल सेल.\n\nहे गणित सोपे आणि अचूक — ग्राफिक्सचा पाया.\n\nआकार ठरवताना width आणि height याच ग्रिडवर अवलंबून.", code: `<canvas width="200" height="150">ग्रिड कल्पना</canvas>`, codeLanguage: "html" },
      { title: "4. drawing एपीआय", content: "रेषा आणि आकृती काढण्यासाठी drawing API वापरतात.\n\nfill — आत भरा; stroke — फक्त किनारी.\n\nआकार कोडमध्ये निर्देशांकांनी नेमके ठरतात.\n\nरंग आणि जाडी पाठवलेल्या data ने बदलतात.\n\nHTML-only शिकताना फक्त these कल्पना नोंद.", code: `<canvas width="240" height="160">आकृती जागा</canvas>`, codeLanguage: "html" },
      { title: "5. रेखांकन कार्यक्षमता", content: "canvas गुळगुळीत हलण्यासाठी redraw ची जोडणी सुनियोजित हवी.\n\nप्रत्येक frame साफ करून पुन्हा काढणे ही सामान्य पद्धत.\n\nजास्त redraw म्हणजे जास्त काम — minimum ठेवा.\n\nचित्र स्थिर असेल तर एकदाच काढा.\n\nआधुनिक वेळजोडणी animation साठी आवश्यक.", code: `<canvas width="320" height="180">animation जागा</canvas>`, codeLanguage: "html" },
      { title: "6. canvas विरुद्ध SVG", content: "canvas रास्टर चित्र — पिक्सेल मालिका; zoom वर कण दिसतात.\n\nSVG हे vector — गणितावर आधारित; zoom केल्यावर धार राहते.\n\ncanvas हजारो बिंदूंसाठी; SVG घटक रचनेसाठी.\n\nआकृती मोजकी तर SVG, चित्र विस्तृत तर canvas.\n\nनिवड कामाच्या स्वरूपावर अवलंबून.", code: `<p>निर्णय नियम:</p>
<p>चित्र विस्तृत -> canvas. रचना घटक -> SVG.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "प्रत्येकाला fallback मजकूर. एका शेजारी SVG टीप.\nहे चित्र जागेची रचना दाखवते.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>Canvas नमुना</title>
</head>
<body>
  <h1>Canvas पेज</h1>
  <canvas width="300" height="200">चित्र राखीव जागा</canvas>
  <p>SVG vector रचनेसाठी.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["canvas म्हणजे काय?", "2d context कशासाठी?", "ग्रिड मूळ कुठे?", "canvas विरुद्ध SVG निर्णय कसा?"],
    quiz: [
      { question: "चित्र तयार करणारी जागा?", options: ["canvas", "iframe", "dialog", "slot"], correct: 0 },
      { question: "आकार कुठे ठरतो?", options: ["width/height attributes", "style только", "title", "data"], correct: 0 },
      { question: "पाठ fallback कुठे?", options: ["canvas आत", "head मध्ये", "slot ने", "object"], correct: 0 },
      { question: "vector रचना?", options: ["SVG", "canvas", "image", "audio"], correct: 0 },
    ],
    challenge: {
      prompt: "canvas पेज रचना",
      starterCode: `<canvas width="300" height="200">fallback</canvas>`,
      expectedOutput: "Renders canvas blocks with fallback text",
    },
    interviewQuestions: ["canvas पेक्षा SVG कधी?", "context कोड कोणता?"],
    related: ["html-future-project", "html-3d-webgl"],
    prev: "html-future-project",
    next: "html-3d-webgl",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-3d-webgl",
    categoryId: "web",
    title: "3D WebGL",
    marathiTitle: "WebGL — त्रिमितीय रेखांकन",
    level: "intermediate",
    minutes: 22,
    summary: "WebGL context, shader कल्पना, scene रचना आणि GPU वापराची माहिती.",
    sections: [
      { title: "1. WebGL म्हणजे", content: "WebGL हे 3D रेखांकनाचे browser-level तंत्र.\nते GPU वर चालते — त्रिमितीय दृश्ये वेगाने.\ncanvas वर 3d context म्हणून अस्तित्वात असते.\nजुने आधार आणि नवे WebGL2 पर्याय असतात.\nआधुनिक ब्राउझर दोन्ही स्तर देतात.", code: `<canvas width="480" height="270">3D जागा</canvas>`, codeLanguage: "html" },
      { title: "2. WebGL2", content: "WebGL2 ही नव्या त्रिमितीय रचनेची आवृत्ती.\nअधिक पोत आणि तसेच आधुनिक API असतात.\nआदर कमी; पण क्षमता जास्त.\nमोठ्या आधुनिक game साठी WebGL2 शिफारस.\nआधार तपासताना context प्रकार दोन्ही तपासा.", code: `<canvas width="400" height="300">WebGL2 आधार तपासा</canvas>`, codeLanguage: "html" },
      { title: "3. shader कल्पना", content: "shader हे GPU वर चालणारे लहान गणिताचे कोड.\nvertex shader बिंदूंची स्थिती सांगते; fragment shader रंग.\nहे GLSL नावाच्या भाषेत लिहिले जाते.\nHTML-only दृष्टी: shader म्हणजे दृश्याचा नियम.\nआता फक्त समज — कोड नंतर JavaScript मध्ये.", code: `<p>shader प्रकार:</p>
<p>vertex स्थिती, fragment रंग.</p>`, codeLanguage: "html" },
      { title: "4. scene रचना", content: "3D दृश्याचे भाग — camera, मॉडेल आणि प्रकाश.\ncamera कोन ठरवतो; मॉडेल आकार देतो.\nप्रकाश पडदा स्पष्ट करतो.\nघटक एकत्र येऊन scene बनतो.\nसरावासाठी गोलाकार मॉडेल सर्वांत सोपे.", code: `<p>scene घटक:</p>
<p>camera, mesh, light.</p>`, codeLanguage: "html" },
      { title: "5. frame rate कार्यक्षमता", content: "गुळगुळीत हालचालीसाठी frame rate महत्त्वाचा.\nप्रति सेकंद आदर्श 60 frames.\nजास्त draw calls म्हणजे जड GPU.\nमॉडेल साधे आणि प्रकाश कमी ठेवा.", code: `<p>कार्यक्षमता नियम:</p>
<p>कमी calls, साधे मॉडेल, स्थिर frame.</p>`, codeLanguage: "html" },
      { title: "6. तयारी आणि नियम", content: "3D HTML मध्ये फक्त canvas container.\nattributes width/height आणि fallback मजकूर.\ncontext मिळतो का हे तपासतात.\nसुरुवात लहान cube ने करा.\nपुढे JavaScript आणि GLSL crumbs जोडतील.", code: `<canvas width="400" height="300">WebGL ची तयारी</canvas>`, codeLanguage: "html" },
      { title: "Mini Project", content: "3D तयारीचे पेज बनवा.\ncanvas 3d जागेसह. fallback मजकूर.\nscene घटकांची यादी. आधार टीप.\nहे WebGL चा शून्य स्तर दाखवते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>3D तयारी</h1>
  <canvas width="400" height="300">WebGL उपलब्ध नाही</canvas>
  <p>camera, mesh, light — scene रचना.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["WebGL कोणावर चालते?", "WebGL2 फायदा काय?", "shader म्हणजे काय?", "फ्रेम रेट नियम?"],
    quiz: [
      { question: "3D रेखांकन तंत्र?", options: ["WebGL", "iframe", "marquee", "dialog"], correct: 0 },
      { question: "shader भाषा?", options: ["GLSL", "CSS", "SQL", "JSON"], correct: 0 },
      { question: "दृश्य घटक?", options: ["camera mesh light", "form field", "nav item", "link tag"], correct: 0 },
      { question: "आदर्श frame rate?", options: ["60", "1", "500", "1000"], correct: 0 },
    ],
    challenge: {
      prompt: "3D तयारी पेज",
      starterCode: `<canvas width="400" height="300">WebGL जागा</canvas>`,
      expectedOutput: "Renders 3D canvas with scene list",
    },
    interviewQuestions: ["shader म्हणजे काय?", "WebGL2 आधार कसा तपासता?"],
    related: ["html-canvas-graphics", "html-web-sockets"],
    prev: "html-canvas-graphics",
    next: "html-web-sockets",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-web-sockets",
    categoryId: "web",
    title: "Web Sockets",
    marathiTitle: "Web Sockets — सतत जोडलेले संवाद",
    level: "intermediate",
    minutes: 22,
    summary: "realtime संवाद, websocket protocol, messages आणि सुरक्षा नियम.",
    sections: [
      { title: "1. realtime संवाद", content: "सामान्य HTTP मध्ये ब्राउझरच मागणी करतो — server गप्प राहतो.\nrealtime प्रकरणात server ला आगाऊ संदेश पाठवता येतो.\nहेच काम web socket करते — दोन्ही बाजू मोकळे.\nchat, ticker, game — अशा अॅप्ससाठी आदर्श.\nHTML-only मध्ये कल्पना, वापर JavaScript ने.", code: `<p>realtime परिस्थिती:</p>
<p>chat, सूचना, खेळ स्थिती.</p>`, codeLanguage: "html" },
      { title: "2. protocol समज", content: "web socket चा पत्ता ws:// की wss:// असतो.\nwss म्हणजे सुरक्षित — encryption सह.\nसुरुवातीला handshake घडते — ते HTTP सारखे.\nनंतर दोन्ही बाजूना बोलणे मोकळे — full duplex.\nहा कायमचा मार्ग ब्राउझर आणि server दरम्यान.", code: `<p>पत्ता नियम:</p>
<p>wss:// सुरक्षित — वापरा.</p>`, codeLanguage: "html" },
      { title: "3. messages व्यवस्था", content: "संदेश text किंवा binary असू शकतो.\nप्रत्येक संदेश frame ने जातो — क्रम नेमका.\nमोठे संदेश ओढा — लेखन लहान ठेवा.\nमाहिती गमावल्यास पुन्हा जोडणी हवी.\nसंदेश रचना आधी ठरवली की सुसंगतता राहते.", code: `<p>संदेश नियम:</p>
<p>लहान, क्रमबद्ध, binary किंवा text.</p>`, codeLanguage: "html" },
      { title: "4. events आणि state", content: "जोडणीचे टप्पे — open, message, close.\nopen म्हणजे मार्ग तयार; message म्हणजे संदेश आला.\nclose झाल्यावर state अपडेट करा आणि reconnect विचार.\nstate गमावल्यास पुन्हा सिंक करा.\nअस्थिर network साठी reconnect नियम महत्त्वाचा.", code: `<p>event टप्पे:</p>
<p>open -> message -> close.</p>`, codeLanguage: "html" },
      { title: "5. सुरक्षा नियम", content: "wss:// सर्वांत पहिली अट — असुरक्षित ws नको.\nटोकन सर्व्हरने दिलेले हवे — प्रवेश वैध.\nसंदेश क्रिया नियम तपासणे हवे.\nसुरक्षा काळजी असली की प्रवाह विश्वासार्ह.", code: `<p>सुरक्षा:</p>
<p>wss + origin + token.</p>`, codeLanguage: "html" },
      { title: "6. वापर उदाहरणे", content: "शेअर टिकर — किंमत बदल server पाठवतो.\nखेळातील हालचाल — हलका and द्रुत response.\nहे सर्व browser मध्ये राहते.\nHTML रचना येथे तयार — संवाद JavaScript जोडतो.", code: `<p>वापर:</p>
<p>chat, ticker, game state.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "realtime नुसार रचना पेज बनवा.\nयात कुठे संवाद येईल ते नोंद.\nHTML रचना websocket च्या तयारीसाठी.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>Realtime नमुना</h1>
  <p>chat क्षेत्र — येथे संदेश येतील.</p>
  <p>टिकर — किंमत सूचना.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["realtime काय देतो?", "wss कशासाठी?", "events कुठले?", "reconnect कधी?"],
    quiz: [
      { question: "सतत जोडलेले संवादाचे तंत्र?", options: ["web socket", "iframe", "form", "meta"], correct: 0 },
      { question: "सुरक्षित पत्ता?", options: ["wss://", "ws://", "https only", "mailto"], correct: 0 },
      { question: "जोडणी तयार झाली?", options: ["open event", "close", "error code", "reload"], correct: 0 },
      { question: "network तुटला तर?", options: ["reconnect", "reload", "reset", "exit"], correct: 0 },
    ],
    challenge: {
      prompt: "realtime रचना पेज",
      starterCode: `<p>chat क्षेत्र</p>`,
      expectedOutput: "Renders realtime-ready structure",
    },
    interviewQuestions: ["web socket आणि HTTP फरक?", "origin तपासणी काय?"],
    related: ["html-3d-webgl", "html-worker-life"],
    prev: "html-3d-webgl",
    next: "html-worker-life",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-worker-life",
    categoryId: "web",
    title: "Worker Life",
    marathiTitle: "Workers — पार्श्वभूमीची कामे",
    level: "intermediate",
    minutes: 22,
    summary: "dedicated/shared workers, data transfer आणि मुख्य पेज न अडकवण्याचे नियम.",
    sections: [
      { title: "1. workers कल्पना", content: "मुख्य पेजच्या धाग्यावर जड काम केले की पेज अडकते.\nworker हा वेगळा धागा — पार्श्वभूमीत काम चालते.\nमुख्य पेज सुरळीत राहते; प्रगती दिसते.\nहे parallel काम browser ची क्षमता.\nHTML रचना तयार — काम JavaScript ने चालते.", code: `<p>worker कामे:</p>
<p>मोठे गणित, फाइल वाचन, data तयारी.</p>`, codeLanguage: "html" },
      { title: "2. dedicated worker", content: "dedicated worker एका पेजसाठी असतो.\npostMessage पाठवते; onmessage घेते.\nमाहिती सोप्या रूपात जाते — clone ने.\nमुख्य पेज आणि worker दोघेही बोलतात.\nनियम: लहान संदेश, नेमका data.", code: `<p>dedicated workflow:</p>
<p>post -> process -> post back.</p>`, codeLanguage: "html" },
      { title: "3. shared worker", content: "shared worker अनेक टॅब मिळून वापरतात.\nउदा. वेळ गणना एकदा — सर्व टॅब नवे.\nही जोडणी जास्त कुशल आहे.\nपण state गोंधळाची काळजी घ्या.", code: `<p>shared नियम:</p>
<p>एक राज्य, अनेक वापरकर्ते.</p>`, codeLanguage: "html" },
      { title: "4. मर्यादा", content: "worker मध्ये DOM नाही — घटक बदलता येत नाहीत.\nwindow नाही; self scope असतो.\nalert, prompt नाही — फक्त message.\nहे जाणून काम वेगळे ठरवा.", code: `<p>worker मर्यादा:</p>
<p>DOM नाही, कळा नाही, संदेश हे रूप.</p>`, codeLanguage: "html" },
      { title: "5. data transfer", content: "डेटा worker ला structured clone होऊन जातो.\ntransfer list ने ownership वेगाने हलते.\nनियम: संवेदनशील data संरक्षित हवा.", code: `<p>transfer नियम:</p>
<p>मोठा data भागांत, लहान संदेश.</p>`, codeLanguage: "html" },
      { title: "6. worker + स्ट्रक्चर", content: "worker कधी सुरू करणे? पेज तयार झाल्यावर.\nकाम आधी सुनियोजित — कोणते भाग parallel करायचे.\nstatus सांगणारा progress संदेश हवा.\nसंपल्यावर worker थांबवणे डेटा साफ करते.\nहे व्यवस्थापन आधुनिक अॅपची सवय.", code: `<p>worker रचना:</p>
<p>सुरू -> संदेश -> संपवणे.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "worker तयारीचे सूचना पेज बनवा.\nDOM मर्यादा टीप. data transfer नियम.\nहे workers ची वैचारिक रचना देते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>Worker तयारी</h1>
  <p>dedicated — एक पेज. shared — अनेक टॅब.</p>
  <p>DOM नाही — संदेश हे रूप.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["worker काय करतो?", "dedicated आणि shared फरक?", "worker मध्ये काय नाही?", "transfer नियम काय?"],
    quiz: [
      { question: "पार्श्वभूमी धागा?", options: ["worker", "frame", "link", "slot"], correct: 0 },
      { question: "एका पेजचा worker?", options: ["dedicated", "shared", "global", "local"], correct: 0 },
      { question: "worker मध्ये नाही?", options: ["DOM", "घर", "network", "storage"], correct: 0 },
      { question: "worker ला संदेश?", options: ["postMessage", "alert", "submit", "refresh"], correct: 0 },
    ],
    challenge: {
      prompt: "worker तयारी पेज",
      starterCode: `<p>dedicated एक पेज</p>`,
      expectedOutput: "Renders worker concepts list",
    },
    interviewQuestions: ["worker मध्ये DOM का नाही?", "transfer गती कशी वाढते?"],
    related: ["html-web-sockets", "html-indexed-stores"],
    prev: "html-web-sockets",
    next: "html-indexed-stores",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-indexed-stores",
    categoryId: "web",
    title: "Indexed Stores",
    marathiTitle: "IndexedDB — ब्राउझर डेटाबेस",
    level: "intermediate",
    minutes: 22,
    summary: "object store, transactions, indexes आणि offline data व्यवस्था.",
    sections: [
      { title: "1. IndexedDB कल्पना", content: "IndexedDB ब्राउझरमधील मोठा डेटाबेस आहे.\nlocalStorage पेक्षा जागा आणि क्षमता जास्त.\nडेटा object नावाच्या store मध्ये राहतो.\nsearch आणि range या गरजा तसे सोडवते.\nमोठा offline data — येथे ठेवणे योग्य.", code: `<p>IndexedDB साठी:</p>
<p>मोठे डेटा, संरचित रचना, offline.</p>`, codeLanguage: "html" },
      { title: "2. object store", content: "object store हे table सारखे — रेकॉर्डची रचना.\nप्रत्येक रेकॉर्ड key ने ओळखला जातो.\nstore रचना आधी ठरवावी.\nहे schema — डेटाची जोडणी.", code: `<p>store नियम:</p>
<p>key + value रचना स्थिर.</p>`, codeLanguage: "html" },
      { title: "3. transactions", content: "बदल transaction ने होतात — एकाच वेळी गट.\nसर्व बदल एकत्र यशस्वी किंवा सर्व नाही.\nअसे atomic नियंत्रण डेटा सुरक्षित ठेवते.\nअनोळखी रद्द होणे टाळणे गरजेचे.", code: `<p>transaction नियम:</p>
<p>एकत्र यशस्वी, एकत्र रद्द.</p>`, codeLanguage: "html" },
      { title: "4. indexes", content: "index म्हणजे अतिरिक्त search पथ — key वर नोंद.\nkey path वगळून दुसर्या फील्डवर शोधता येते.\nउदा. दिनांकानुसार नोंदी शोधणे.\nindex ने डेटा वेगात मिळतो.\nप्रत्येक गरजेच्या field ला index जोडा.", code: `<p>index नियम:</p>
<p>शोधत असलेल्या field ला index.</p>`, codeLanguage: "html" },
      { title: "5. version नियम", content: "डेटाबेस version ने वाढतो — रचना बदलता येते.\nonupgrade event मध्ये नवीन store बनतो.\nजुना version ते नवे मार्ग सांगणे हवे.\nमाइग्रेशन क्रमबद्ध — data गमावू नको.\nversion हे schema चे नियंत्रण.", code: `<p>version नियम:</p>
<p>नवी रचना upgrade event मध्ये.</p>`, codeLanguage: "html" },
      { title: "6. वापर नोंद", content: "IndexedDB कुठे? offline इनबॉक्स, फोटो सूची.\ncooperation — worker सोबत भारी data इथे.\nहे फक्त कल्पना — कोड JavaScript मध्ये.\nरचना नियम आधी, नंतर आकडे.", code: `<p>IndexedDB उपयोग:</p>
<p>offscreen इनबॉक्स, फोटो नोंदी.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "डेटाबेस कल्पनेचे रेखाटन पेज.\nobject store नियम. transaction गुण.\nindex नोंद. version संकल्पना टीप.\nहे IndexedDB ची विचार रचना देते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>IndexedDB माहिती</h1>
  <p>object store — key + value.</p>
  <p>transaction — एकत्र यशस्वी.</p>
  <p>index — शोधाचा पथ.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["IndexedDB म्हणजे काय?", "object store म्हणजे?", "transaction काय करतो?", "version कशासाठी?"],
    quiz: [
      { question: "मोठा browser डेटाबेस?", options: ["IndexedDB", "localStorage", "cookie", "title"], correct: 0 },
      { question: "record ओळख?", options: ["key", "tag", "class", "color"], correct: 0 },
      { question: "एकत्र बदल गट?", options: ["transaction", "link", "form", "style"], correct: 0 },
      { question: "शोधाचा पथ?", options: ["index", "frame", "slot", "role"], correct: 0 },
    ],
    challenge: {
      prompt: "डेटाबेस कल्पना पेज",
      starterCode: `<p>object store key value</p>`,
      expectedOutput: "Renders IndexedDB concept structure",
    },
    interviewQuestions: ["localStorage आणि IndexedDB फरक?", "version change कसा?"],
    related: ["html-worker-life", "html-wasm-intro"],
    prev: "html-worker-life",
    next: "html-wasm-intro",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-wasm-intro",
    categoryId: "web",
    title: "Web Assembly",
    marathiTitle: "Web Assembly — जलद बायनरी कोड",
    level: "intermediate",
    minutes: 22,
    summary: "WASM बायनरी स्वरूप, module रचना आणि browser मधील कार्यक्षमता.",
    sections: [
      { title: "1. WASM म्हणजे", content: "Web Assembly हे ब्राउझरसाठी बायनरी स्वरूप.\nमशीन वाचू शकते — म्हणून खूप वेगवान.\nC++ किंवा Rust चा कोड WASM मध्ये बदलतो.\nनंतर तो ब्राउझर sandbox मध्ये चालतो.", code: `<p>WASM कुठे चांगले?</p>
<p>खेळ, व्हिडिओ, सिम्युलेशन.</p>`, codeLanguage: "html" },
      { title: "2. performance मूल", content: "ब्राउझर WASM ला जवळच्या मशीन कोडप्रमाणे चालवतो.\nparse वेगवान — फाइल लहान आणि स्थिर.\ninterpreter चा धीमा काम नाही.\nहोय — near native गती मिळते.\nनेहमी नाही; पण गणना गरजेसाठी उत्तम.", code: `<p>performance कशी?</p>
<p>लहान parse, जवळ native गती.</p>`, codeLanguage: "html" },
      { title: "3. module रचना", content: "WASM फाइलला module म्हणतात.\nimport — बाहेरील function घेते.\nexport — आपली function बाहेर देते.\nmain code module ला JavaScript शी जोडतो.\nरचना स्पष्ट आणि नियंत्रित असते.", code: `<p>module घटक:</p>
<p>import, export, functions.</p>`, codeLanguage: "html" },
      { title: "4. JavaScript जोडणी", content: "WASM स्वतः JavaScript वर अवलंबून — जोडणी तेच.\nआधी two-way mapping तयार करतात.\nनंतर function calls वाट्याने चालतात.\nहेच architecture आधुनिक अॅपमध्ये दिसते.", code: `<p>जोडणी नियम:</p>
<p>import/export मध्ये function जुळणी.</p>`, codeLanguage: "html" },
      { title: "5. सुरक्षा sandbox", content: "WASM सँडबॉक्समध्ये चालतो — अलग मेमरी.\nमेमरी bounds चेक होते — धोका मर्यादित.\nफाइल Direct access नाही.\nआपले origin नियम कायम.\nहे browser चे संरक्षण कायम ठेवते.", code: `<p>sandbox नियम:</p>
<p>मेमरी अलग, origin नियंत्रित.</p>`, codeLanguage: "html" },
      { title: "6. योग्य वापर", content: "आकडे calculations — WASM फायदेशीर.\nनिवड कामाच्या स्वरूपावर.", code: `<p>वापर नियम:</p>
<p>गणना जड तर WASM, साधे तर JS.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "WASM कल्पनेचे सूचना पेज.\nmodule घटक. performance टीप.\nsandbox सुरक्षा. योग्य वापर नियम.\nहे WASM ची वैचारिक ओळख देते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>Web Assembly</h1>
  <p>import/export function जुळणी.</p>
  <p>sandbox — मेमरी अलग.</p>
  <p>जड गणना — WASM योग्य.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["WASM म्हणजे?", "performance कशी?", "module म्हणजे?", "sandbox काय देतो?"],
    quiz: [
      { question: "बायनरी वेग कोड?", options: ["WebAssembly", "Canvas", "CSS Grid", "Audio"], correct: 0 },
      { question: "module बाहेर function?", options: ["export", "hidden", "local", "cache"], correct: 0 },
      { question: "मेमरी अलग करणे?", options: ["sandbox", "frame", "link", "meta"], correct: 0 },
      { question: "WASM कुठे चांगले?", options: ["जड गणना", "CSS reset", "मजकूर ठेवणे", "form design"], correct: 0 },
    ],
    challenge: {
      prompt: "WASM कल्पना पेज",
      starterCode: `<p>WebAssembly बायनरी वेग</p>`,
      expectedOutput: "Renders WASM concept page",
    },
    interviewQuestions: ["WASM parity JS कधी?", "sandbox म्हणजे काय?"],
    related: ["html-indexed-stores", "html-net-security"],
    prev: "html-indexed-stores",
    next: "html-net-security",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-net-security",
    categoryId: "web",
    title: "Network Security",
    marathiTitle: "Network Security — सुरक्षित प्रवाह",
    level: "intermediate",
    minutes: 22,
    summary: "TLS, CORS, CSP आणि mixed content यांचे नियम.",
    sections: [
      { title: "1. TLS प्रवाह", content: "TLS म्हणजे संकेत केलेला प्रवाह — encryption.\nhandshake मध्ये key व्यवस्था होते.\ncertificate ने ओळख पटते — कोणाशी बोलतोय.\nसर्व traffic गुप्त राहतो — reading नको.\nआधुनिक वेबचा पाया हा TLS आहे.\nप्रवाह मोकळा असत नाही — दोन्ही बाजूंची जोडणी प्रमाणितच.\nप्रत्येक संदेश वाचता येत नाही, म्हणून गोपनीयता राहते.", code: `<p>TLS नियम:</p>
<p>certificate + encryption + ओळख.</p>`, codeLanguage: "html" },
      { title: "2. CORS नियम", content: "CORS म्हणजे cross-origin ठरवण्याचा नियम.\nserver headers ने कुठल्या origin चा परवानगी देतो.\norigin म्हणजे scheme + host + port.\nयोग्य headers ने बाहेरून API वापरता येते.\nचुकीचा CORS request browser थांबवतो.", code: `<p>CORS ठरवणे:</p>
<p>Allowed-Origin headers स्पष्ट.</p>`, codeLanguage: "html" },
      { title: "3. CSP संरक्षण", content: "Content-Security-Policy हे बाह्य code चा कडक नियम.\nकोणता source चालू — हे leader ठरवतो.\ninline code नको — नियम कडक होतो.\nXSS चा मार्ग लहान होतो.\nCSP मध्ये सोडवलेल्या नियमांनी धोका टाळतो.", code: `<p>CSP ध्येय:</p>
<p>कोणता script कोठून येईल ते ठरवणे.</p>`, codeLanguage: "html" },
      { title: "4. mixed content", content: "mixed content म्हणजे HTTPS मध्ये HTTP भाग.\nचित्र किंवा script insecure आले तर धोका.\nआधुनिक ब्राउझर असे request block करतो.\nसर्व URL https मध्ये रूपांतर करा.\nनियम: एकही http resource नको.\nअपग्रेड केलेला सर्व मार्ग एकाच सुरक्षित स्वरूपात राहतो.\nनवी फाइल जोडताना url तपासा — https नेच द्या.", code: `<p>mixed नियम:</p>
<p>सर्व resource https नेच.</p>`, codeLanguage: "html" },
      { title: "5. referrer नियंत्रण", content: "referrer म्हणजे कोणत्या जागेवरून आलो ती माहिती.\nकाही संदर्भात ती गोपनीय हवी.\nreferrerpolicy attribute ने ते नियंत्रण होते.\nno-referrer किंवा strict-origin — निवड तुमची.\nगोपनीयता आणि विश्लेषणाचा तोल साधा.", code: `<a href="https://example.com" referrerpolicy="no-referrer">बाहेरचा</a>`, codeLanguage: "html" },
      { title: "6. सारांश नियम", content: "सुरक्षित प्रवाहासाठी तीन गोष्टी.\nपहिली: सर्वत्र TLS — https ने आधार.\nदुसरी: CORS — मर्यादित cross-origin.\nतिसरी: CSP — बाह्य कोड कडक.\nही त्रयी आधुनिक वेबची हमी.\nहा नियम मराठी पेजेसाठीही तितकाच महत्त्वाचा.\nसुरक्षा नियम पाळल्यावर वापरकर्ता विश्वासाने आत येतो.", code: `<p>सावधगिरी तीन:</p>
<p>TLS + CORS + CSP.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "प्रत्येक नियमासाठी एक विभाग.\nhttps आधार टीप. referrer उदाहरण.\nहे तत्त्व स्वतःच्या पेजला लावा.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>सुरक्षा मार्गदर्शक</h1>
  <p>TLS — सर्वत्र https.</p>
  <p>CORS — मर्यादित परवाना.</p>
  <p>CSP — बाह्य कोड कडक.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["TLS काय करतो?", "CORS म्हणजे?", "CSP काय थांबवतो?", "mixed content म्हणजे?"],
    quiz: [
      { question: "प्रवाह गुप्त करणारा?", options: ["TLS", "meta", "canvas", "slot"], correct: 0 },
      { question: "cross-origin नियम?", options: ["CORS", "CSS", "URL", "DOM"], correct: 0 },
      { question: "बाह्य कोड कडक नियम?", options: ["CSP", "JSON", "XML", "Base"], correct: 0 },
      { question: "https मध्ये http भाग?", options: ["mixed content", "incognito", "private mode", "sandbox"], correct: 0 },
    ],
    challenge: {
      prompt: "सुरक्षा मार्गदर्शक",
      starterCode: `<p>TLS सर्वत्र https</p>`,
      expectedOutput: "Renders security guide",
    },
    interviewQuestions: ["CSP inline का नको?", "referrer कधी गुप्त ठेवायचे?"],
    related: ["html-wasm-intro", "html-performance-core"],
    prev: "html-wasm-intro",
    next: "html-performance-core",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-performance-core",
    categoryId: "web",
    title: "Performance Core",
    marathiTitle: "Performance Core — कोर मेट्रिक्स",
    level: "intermediate",
    minutes: 22,
    summary: "Core Web Vitals, LCP, INP, CLS आणि resource hints.",
    sections: [
      { title: "1. Core Web Vitals", content: "Core Web Vitals ही पेज अनुभवाची तीन मोजमापे.\nLCP — किती लवकर मुख्य भाग दिसतो.\nINP — क्लिकला किती वेगाने उत्तर.\nCLS — रचना हलते का.\nही त्रयी वापरकर्त्याचा अनुभव ठरवते.", code: `<p>तीन मेट्रिक्स:</p>
<p>LCP, INP, CLS.</p>`, codeLanguage: "html" },
      { title: "2. LCP लोडिंग", content: "LCP म्हणजे largest content paint — मुख्य भाग.\nअनेकदा hero चित्र किंवा मोठे हेडिंग.\nचित्रासाठी fetchpriority ने आधार मिळतो.\nनियम: मुख्य media आधी येते.\nवेगासाठी width/height आधी जागा देता.", code: `<img src="hero.jpg" width="800" height="450" fetchpriority="high" alt="मुख्य">
<p>मुख्य चित्र आधी लोड होते.</p>`, codeLanguage: "html" },
      { title: "3. INP प्रतिसाद", content: "INP म्हणजे interaction ते प्रतिसाद वेळ.\nक्लिक, टॅप, की — प्रत्येक क्रिया मोजली.\nworker ने काम वेगळे करता येते.\nलहान request आणि सोपे handlers इष्ट.", code: `<button type="button">प्रतिसाद नियम</button>
<p>क्रिया वेगाने उत्तर देतात.</p>`, codeLanguage: "html" },
      { title: "4. CLS स्थिरता", content: "CLS म्हणजे layout shift — रचना हलते का.\nचित्र लोड होता जागा न घेतल्यास हलचाल.\nwidth/height attribute ने जागा आरक्षित.\nfont बदल स्थिर ठेवा.\nहे मोजमाप वापरकर्त्याच्या त्रासाची खूण.", code: `<p>CLS नियम:</p>
<p>चित्रांना जागा, font स्थिर.</p>`, codeLanguage: "html" },
      { title: "5. resource hints", content: "resource hints म्हणजे पेजची आधी तयारी.\npreconnect — host आगाऊ जोडणी.\npreload — जड resource आधी भरणे.\nfetchpriority — महत्त्व क्रम सांगणे.\nहे performance सुधारते, वाहतूक नाही वाढवते.", code: `<link rel="preconnect" href="https://cdn.example.com">
<link rel="preload" as="image" href="hero.jpg">`, codeLanguage: "html" },
      { title: "6. मोजमाप सवय", content: "मोजमापासाठी browser devtools हे साधन.\nनियम: लक्ष्य गाठल्यावर गुणवत्ता दिसेल.\nHTML रचना येथे base — JS वाटा वेगळा.", code: `<p>मोजमाप नियम:</p>
<p>devtools + real user data.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "performance चे नियम पेज बनवा.\nतीन मेट्रिक्स. preconnect उदाहरण.\nwidth/height टीप. आधार नोंद.\nहे Core Web Vitals ची जाण देते.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <link rel="preconnect" href="https://cdn.example.com">
</head>
<body>
  <h1>Performance Core</h1>
  <img src="hero.jpg" width="800" height="450" alt="मुख्य">
  <p>LCP, INP, CLS — तीन मेट्रिक्स.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["तिन्ही मेट्रिक्स?", "LCP काय दाखवतो?", "CLS कसे चांगले राखतात?", "preload कशासाठी?"],
    quiz: [
      { question: "LCP म्हणजे?", options: ["largest content paint", "least code pass", "local call point", "load cache part"], correct: 0 },
      { question: "interaction प्रतिसाद?", options: ["INP", "CSS", "SEO", "URL"], correct: 0 },
      { question: "रचना हलते का?", options: ["CLS", "ALT", "GET", "POST"], correct: 0 },
      { question: "host आधी जोडणी?", options: ["preconnect", "fetch", "submit", "reset"], correct: 0 },
    ],
    challenge: {
      prompt: "performance नियम पेज",
      starterCode: `<link rel="preconnect" href="https://cdn.example.com">`,
      expectedOutput: "Renders core vitals page",
    },
    interviewQuestions: ["CWV बदलत का?", "real user data कुठून?"],
    related: ["html-net-security", "html-a11y-advanced"],
    prev: "html-net-security",
    next: "html-a11y-advanced",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-a11y-advanced",
    categoryId: "web",
    title: "A11y Advanced",
    marathiTitle: "Accessibility — प्रगत प्रवेश्यता",
    level: "intermediate",
    minutes: 22,
    summary: "ARIA roles, accessible name, live regions आणि focus रचना.",
    sections: [
      { title: "1. ARIA खोली", content: "ARIA म्हणजे प्रवेश्यता माहिती देणारे attributes.\nrole — what या प्रकारचे घटक.\nstate — status काय.\nproperty — गुण आणि ओळख.\nनेहमी आधी native tag; ARIA नंतर जोडा.", code: `<p>ARIA तीन:</p>
<p>role, state, property.</p>`, codeLanguage: "html" },
      { title: "2. accessible name", content: "प्रत्येक इंटरॅक्टिव्ह घटकाला name हवा.\nname म्हणजे वाचकाने ओळखलेले वर्णन.\nlabel ने name मिळतो — आधी तो वापरा.\naria-label तेव्हाच, जेव्हा दृश्य मजकूर नाही.\nनियम: दृश्य प्रथम, ARIA दुय्यम.", code: `<label for="nm">नाव</label>
<input id="nm" name="n">
<p>label ने प्रवेश्य name मिळतो.</p>`, codeLanguage: "html" },
      { title: "3. focus रचना", content: "कीबोर्ड वापरकर्त्यासाठी focus क्रम महत्त्वाचा.\ntabindex ने natural order राखा.\nfocus दिसत असावा — स्पष्ट किनारी.\nनियम: फोकस नेहमी दृश्य राहील.\nफोकस सूचना keyboard आणि mouse यांना वेगळे दिसते — म्हणून स्पष्ट outline आवश्यक.\nटॅब दाबून तपासा की मार्ग नेमका दिसतो.", code: `<a href="#मुख्य">मुख्यकडे</a>
<h2 id="मुख्य">मुख्य भाग</h2>`, codeLanguage: "html" },
      { title: "4. live regions", content: "aria-live म्हणजे सूचना भाग — घोषणा लगेच.\npolite — वाट पाहून सांगतो.\nassertive — लगेच मध्ये धावतो.\nचुकीचा मजकूर बदल घोषित होतो.\nहे dynamic content ची मदत.\nसूचना भाग आधी रिकामा राहतो — बदल झाल्यावर घोषणा होते.", code: `<p aria-live="polite">नवी सूचना येथे.</p>`, codeLanguage: "html" },
      { title: "5. form त्रुटी", content: "त्रुटी संदेश name ने जोडलेला हवा.\naria-describedby ने वर्णन ओळखते.\naria-invalid ने स्थिती स्पष्ट करते.\ncolor फक्त एक खूण नको.\nसंदेश स्पष्ट आणि मार्गदर्शक असो.", code: `<label for="em">ईमेल</label>
<input id="em" type="email" aria-invalid="true" aria-describedby="emTip">
<p id="emTip">योग्य ईमेल भरा.</p>`, codeLanguage: "html" },
      { title: "6. रचना तपासणी", content: "प्रवेश्यता तपासणी साधनांनी नेहमी करा.\nlandmarks — header, nav, main, footer.\nओळख labels आणि headings.\nकीबोर्ड संपूर्ण पथ तपासा.\nमराठी मजकुरातही हेच नियम लागतात.", code: `<p>तपासणी यादी:</p>
<p>landmarks, names, focus, live.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "label सर्व fields. live region टीप.\nskip link. focus दृश्य. name नियम.\nहे प्रगत a11y चे प्रात्यक्षिक.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <a href="#काम">कामाकडे</a>
  <main id="काम">
    <h1>प्रवेश्य पेज</h1>
    <label for="nm">नाव:</label>
    <input id="nm" name="n">
    <p aria-live="polite">स्थिती येथे.</p>
  </main>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["ARIA तीन प्रकार?", "name कुठून मिळतो?", "live region काय?", "त्रुटी कशी जोडतात?"],
    quiz: [
      { question: "accessibility attributes?", options: ["ARIA", "CSS", "SVG", "JSON"], correct: 0 },
      { question: "name देणारा tag?", options: ["label", "div", "span", "canvas"], correct: 0 },
      { question: "लगेच सूचना भाग?", options: ["aria-live", "aria-hidden", "aria-label", "title"], correct: 0 },
      { question: "त्रुटी वर्णन जोडणी?", options: ["aria-describedby", "aria-hidden", "muted", "inert"], correct: 0 },
    ],
    challenge: {
      prompt: "प्रवेश्य पेज",
      starterCode: `<label for="nm">नाव</label><input id="nm">`,
      expectedOutput: "Renders accessible page with live region",
    },
    interviewQuestions: ["native tag आधी का?", "aria-live polite काय?"],
    related: ["html-performance-core", "html-protocol-velocity"],
    prev: "html-performance-core",
    next: "html-protocol-velocity",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-protocol-velocity",
    categoryId: "web",
    title: "Protocol Velocity",
    marathiTitle: "Protocol — HTTP/2 आणि HTTP/3",
    level: "intermediate",
    minutes: 22,
    summary: "multiplexing, streams, header compression आणि QUIC समज.",
    sections: [
      { title: "1. HTTP/2 बदल", content: "HTTP/2 ने जुने HTTP/1 चे धीमे गुण बदलले.\nएकाच जोडणीवर अनेक संदेश — multiplexing.\nstream नावाच्या मार्गांनी parallel चालते.\nयामुळे वेग आणि वाहतूक सुधारली.", code: `<p>HTTP/2 गुण:</p>
<p>multiplex, compression, parallel.</p>`, codeLanguage: "html" },
      { title: "2. HTTP/3 नवा", content: "HTTP/3 ने TCP ऐवजी QUIC वर आधार.\nQUIC हे UDP वर तयार — कमी विलंब.\nconnection सेटअप वेगाने होतो.\nहे मोबाइल नेटवर्कसाठी छान झाले.", code: `<p>HTTP/3 गुण:</p>
<p>QUIC, low latency, resilient.</p>`, codeLanguage: "html" },
      { title: "3. multiplex तत्त्व", content: "multiplex म्हणजे एकाच मार्गावर संदेशांचा गट.\nreceiving side प्रत्येक संदेश वेगळा ओळखतो.\nकोणता पूर्ण झाला म्हणून बाकी थांबत नाही.\nhead-of-line अडथळा कमी होतो.\nवेगमान अनुभव मिळतो.", code: `<p>multiplex:</p>
<p>एक मार्ग, अनेक संदेश, वेगळा क्रम.</p>`, codeLanguage: "html" },
      { title: "4. prioritization", content: "प्राधान्य म्हणजे कोणता request आधी पुरेसा.\nमुख्य CSS/HTML चा क्रम वर.\nहे server आणि client संयोजित ठरवतात.\npriority नियम कामाची दिशा देतो.", code: `<p>priority नियम:</p>
<p>मुख्य आधी, गौण नंतर.</p>`, codeLanguage: "html" },
      { title: "5. server push विचार", content: "HTTP/2 मध्ये server आधी resources पाठवू शकतो.\nहे push कल्पनेने वेग वाढतो.\nपण जास्त push वाहतूक वाढवते.\nआधुनिक browsers push ऐवजी hints वापरतात.\nनियम: काळजीपूर्वक, कमीत कमी.", code: `<p>push नियम:</p>
<p>कमी, नेमकी, काळजीपूर्वक.</p>`, codeLanguage: "html" },
      { title: "6. परिणाम सारांश", content: "HTTP/2 आज सर्वत्र — आधार मिळतो.\nHTTP/3 हळूहळू व्यापत आहे.\nmultiplex आणि compression गुण सामान्य.\nहे protocol ज्ञान HTML च्या पलीकडे जाते.\nपेज वेगासाठी आधीपासून तयारी हवी.", code: `<p>सारांश:</p>
<p>HTTP/2 सध्याचा, HTTP/3 पुढे.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "protocol गुणांचे पेज.\nmultiplex टीप. QUIC नोंद.\npriority नियम. push खबरदारी.\nहे protocol ची जाण देते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>Protocol Velocity</h1>
  <p>multiplex — एक मार्ग अनेक संदेश.</p>
  <p>QUIC — कमी विलंब.</p>
  <p>priority — मुख्य आधी.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["HTTP/2 काय सुधारते?", "HTTP/3 वर काय?", "multiplex म्हणजे?", "push नियम?"],
    quiz: [
      { question: "आधुनिक वेगाचे protocols?", options: ["HTTP/2 HTTP/3", "FTP SMTP", "POP IMAP", "NTP"], correct: 0 },
      { question: "HTTP/3 चा आधार?", options: ["QUIC", "slow", "delay", "none"], correct: 0 },
      { question: "एक मार्ग अनेक संदेश?", options: ["multiplex", "single", "serial", "batch"], correct: 0 },
      { question: "server आधी पाठवणे?", options: ["push", "pull", "render", "format"], correct: 0 },
    ],
    challenge: {
      prompt: "protocol गुण पेज",
      starterCode: `<p>multiplex एक मार्ग अनेक संदेश</p>`,
      expectedOutput: "Renders protocol velocity page",
    },
    interviewQuestions: ["HTTP/3 कुठे डेटा?", "push आधुनिक का नको?"],
    related: ["html-a11y-advanced", "html-cdn-edge"],
    prev: "html-a11y-advanced",
    next: "html-cdn-edge",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-cdn-edge",
    categoryId: "web",
    title: "CDN & Edge",
    marathiTitle: "CDN आणि Edge — जवळचे वितरण",
    level: "intermediate",
    minutes: 22,
    summary: "CDN cache, edge compute, geo routing आणि secure distribution.",
    sections: [
      { title: "1. CDN म्हणजे", content: "CDN म्हणजे जगभर पसरलेले server गट.\nप्रत्येक भागातील user जवळच्या server शी बोलतो.\norigin म्हणजे खरा स्रोत — दूर राहतो.\nCDN cache ने ती प्रत जवळ ठेवतो.", code: `<p>CDN गुण:</p>
<p>जागतिक cache, कमी विलंब.</p>`, codeLanguage: "html" },
      { title: "2. edge compute", content: "edge म्हणजे जवळचा server भाग — code तेथे चालतो.\nहे वेगवान response देते — user जवळ.\nपेज रचना वेगळी नाही — वितरण वेगळे.\nहे आधुनिक वास्तुकलेची दिशा.", code: `<p>edge नियम:</p>
<p>जवळचा code, कमी गोल फेरी.</p>`, codeLanguage: "html" },
      { title: "3. cache धोरण", content: "cache किती वेळ ठेवायचे — हे TTL ठरवते.\nTTL संपल्यावर origin पुन्हा मिळतो.\nstale पण ताळ खाली ठेवता येते.\npurge म्हणजे लवकर काढून टाकणे.\nहेच धोरण वेग आणि ताजेपणा ठरवते.", code: `<p>cache नियम:</p>
<p>TTL, stale, purge — धोरण.</p>`, codeLanguage: "html" },
      { title: "4. geo routing", content: "geo routing म्हणजे जवळचे server निवडणे.\ndomain ला अनेक server उत्तर देतात.\nanycast ने जवळचा मार्ग सापडतो.\nमापन latency ने होते.\nयामुळे प्रत्येक user ला जवळचा उपाय.", code: `<p>routing नियम:</p>
<p>anycast + जवळचे server.</p>`, codeLanguage: "html" },
      { title: "5. सुरक्षा वितरण", content: "CDN च्या वर सुरक्षा स्तर असतो.\nWAF — धोकादायक request थांबवते.\nDDoS हल्ल्यांची प्रतिकार — गर्दी सोसते.\nहे barriers origin चे संरक्षण करतात.", code: `<p>CDN सुरक्षा:</p>
<p>WAF, DDoS defense, bot नियंत्रण.</p>`, codeLanguage: "html" },
      { title: "6. योग्य वापर", content: "स्थिर media — CDN सर्वांत योग्य.\nप्रत्येक फाइल cache करणे नको.\nhead headers ने cache नियम पाठवा.\nनिवडीने व्यवस्था सुधारते.", code: `<p>वापर नियम:</p>
<p>media cache, HTML ताजे, सर्व headers.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "WAF सुरक्षा. edge नोंद.\nहे वितरण व्यवस्थेची जाण देते.", code: `<!DOCTYPE html>
<html lang="mr">
<body>
  <h1>CDN योजना</h1>
  <p>जागतिक cache — कमी विलंब.</p>
  <p>edge compute — जवळचे code.</p>
  <p>WAF + DDoS defense.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["CDN काय करतो?", "edge म्हणजे?", "TTL म्हणजे?", "WAF काय थांबवतो?"],
    quiz: [
      { question: "जागतिक server गट?", options: ["CDN", "PDF", "PPT", "DOC"], correct: 0 },
      { question: "जवळचा code प्रकार?", options: ["edge compute", "center cloud", "main frame", "local file"], correct: 0 },
      { question: "cache काळ व्यवस्था?", options: ["TTL", "URL", "ALT", "IHL"], correct: 0 },
      { question: "धोकादायक request थांबवणे?", options: ["WAF", "GPS", "USB", "MP3"], correct: 0 },
    ],
    challenge: {
      prompt: "CDN योजना पेज",
      starterCode: `<p>जागतिक cache कमी विलंब</p>`,
      expectedOutput: "Renders CDN planning page",
    },
    interviewQuestions: ["origin आणि edge फरक?", "HTML cache का नको?"],
    related: ["html-protocol-velocity", "html-future-project"],
    prev: "html-protocol-velocity",
    next: "html-future-project",
    levelLabel: HTML5_LABEL,
  },
  {
    slug: "html-future-project",
    categoryId: "web",
    title: "Future Project",
    marathiTitle: "Future Project — सर्व Level 5 एकत्र",
    level: "intermediate",
    minutes: 22,
    summary: "realtime मराठी network अॅप — canvas, workers, IndexedDB आणि सुरक्षित प्रोटोकॉल.",
    sections: [
      { title: "1. उद्दिष्टे", content: "हा धडा Level 5 ची सर्व कौशल्ये जोडतो.\nटार्गेट: \"मराठी network केंद्र\" — realtime अॅप.\nrealtime संवाद, worker काम, IndexedDB storage.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी network केंद्र</title>
</head>
<body></body>
</html>`, codeLanguage: "html" },
      { title: "2. realtime रचना", content: "अॅपचे realtime भाग नियोजन.\nchat field — websocket जोडणी जागा.\nरचना HTML तयार — संवाद JavaScript ने.", code: `<main>
  <h2>निवड</h2>
  <p>chat क्षेत्र — संदेश येथे.</p>
  <p aria-live="polite">स्थिती सूचना.</p>
</main>`, codeLanguage: "html" },
      { title: "3. worker आणि storage", content: "डेटा IndexedDB मध्ये — मोठी साठवण.\nlocalStorage फक्त थीम सारखे लहान.\nworker संदेश आणि transaction नियम.\nवेग आणि सुरक्षा दोन्ही दिसतील.", code: `<p>data योजना:</p>
<p>worker काम, IndexedDB data, थीम localStorage.</p>`, codeLanguage: "html" },
      { title: "4. canvas ग्राफिक्स", content: "width/height निर्धार आधी.\ncanvas HTML घटक येथे चालतो.", code: `<canvas width="400" height="240">आकडेवारी chart जागा</canvas>`, codeLanguage: "html" },
      { title: "5. सुरक्षा आणि प्रवेश्यता", content: "सर्व प्रवाह wss आणि https ने.\nटोकन नियम. CSP धोरण.\nlabels, live region आणि focus.\nप्रवेश्यता आणि सुरक्षा ही दोन्ही पाठीशी.\nनियम तपासल्यावर अप्प तयार.", code: `<form action="https://example.com/login" method="post">
  <label>सदस्य: <input name="u" autocomplete="username"></label>
  <label>पासवर्ड: <input type="password" name="p" autocomplete="current-password"></label>
  <button type="submit">प्रवेश</button>
</form>`, codeLanguage: "html" },
      { title: "6. मेट्रिक्स नोंद", content: "अॅप performance मोजतो.\nLCP मुख्य; INP क्रिया; CLS स्थिर.\nprotocol HTTP/3 तयारी.\nयातून Level 5 चे दर्शन होते.", code: `<p>मेट्रिक्स:</p>
<p>LCP, INP, CLS — तीन नोंद.</p>`, codeLanguage: "html" },
      { title: "Mini Project", content: "संपूर्ण network केंद्राची रचना करा.\nhead नियम. realtime chat क्षेत्र.\ncanvas chart. storage योजना.\nआता CSS आणि JavaScript चा वाटा पुढे.", code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>मराठी network केंद्र</title>
</head>
<body>
  <h1>मराठी network केंद्र</h1>
  <p>realtime chat — वेब सॉकेट जागा.</p>
  <canvas width="400" height="240">chart जागा</canvas>
  <p aria-live="polite">स्थिती येथे.</p>
</body>
</html>`, codeLanguage: "html" },
    ],
    practiceQuestions: ["अॅप कुठले कौशल्य जोडतो?", "data योजना कशी?", "canvas कुठे?", "सुरक्षा नियम कुठले?"],
    quiz: [
      { question: "realtime जोडणी रचना?", options: ["chat field + wss", "only HTTP", "no net", "offline only"], correct: 0 },
      { question: "जड काम कुठे?", options: ["worker", "main thread", "link", "meta"], correct: 0 },
      { question: "मोठा data कुठे?", options: ["IndexedDB", "title", "href", "class"], correct: 0 },
      { question: "अएप सर्व स्तर?", options: ["secure protocol", "plain text", "no cache", "hidden"], correct: 0 },
    ],
    challenge: {
      prompt: "network केंद्र फ्रंट",
      starterCode: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="utf-8">
  <title>network केंद्र</title>
</head>
<body></body>
</html>`,
      expectedOutput: "Renders full next-gen marathi network app",
    },
    interviewQuestions: ["हे app पुढे कोणते भाग JavaScript जोडतील?", "CSS कुठून येईल?"],
    related: ["html-cdn-edge", "html-canvas-graphics"],
    prev: "html-cdn-edge",
    next: "html-canvas-graphics",
    levelLabel: HTML5_LABEL,
  },];
