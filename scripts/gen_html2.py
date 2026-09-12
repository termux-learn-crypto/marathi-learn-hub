# -*- coding: utf-8 -*-
# Generator for HTML Level 2 (Marathi): 12 lessons x 7 sections.
# Emits src/data/tutorials/html-level2.ts. Base content ~100-150 words/section,
# self-contained HTML code cells (no network, no <script>, no <style>), codeLanguage: "html".
import json, subprocess, shutil

lessons = []

def L(slug, title, mt, summary, sections, pq, quiz, challenge, iq, related, prev, nxt, minutes=18):
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
# 1. SEMANTIC HTML  (Master 12 — structure deep)
# =====================================================================
L('html-semantics',
  'Semantic HTML - अर्थपूर्ण रचना', 'Semantic Elements - मजकुराचा खरा अर्थ tags ला द्यायचा',
  'header, nav, main, section, article, aside, footer, figure, figcaption, details, summary.',
  [
   S('1. semantic म्हणजे काय?',
     'Semantic म्हणजे अर्थपूर्ण. Semantic HTML म्हणजे अशा tags चा वापर जे स्वतःच्या मजकुराचा अर्थ सांगतात. <header> हा वरचा भाग, <nav> नेव्हिगेशन — tag वाचूनच कळतं.\n\ndiv चं काम म्हणजे फक्त बॉक्स बनवणे — त्याला अर्थ नाही. ब्राउझरला <div> आणि <div> मध्ये फरक दिसत नाही. पण <article> पाहिल्यावर समजतं — इथे एक स्वतंत्र लेख आहे.\n\nSemantic tags ने मशीनला समजणं वाढतं. Search engine, screen reader, ब्राउझर — सगळे अर्थ ओळखतात. त्यामुळे वेबपेज समजण्यास सोपी होते.\n\nजुन्या काळी सर्व रचना div सह होती. आता प्रत्येक भागाचा स्पष्ट tag आहे. हे HTML5 चं मोठं नवनिर्माण होतं.\n\nआपण पुढील भागांत प्रत्येक semantic tag चा वापर एक-एक करून शिकू.',
     '<div>हा साधा box आहे.</div>\n<header>हा वरचा विभाग आहे.</header>\n<nav>हा नेव्हिगेशन आहे.</nav>\n<section>हा एक विभाग आहे.</section>'),
   S('2. header, nav आणि footer',
     'प्रत्येक पेजची तीन गाभ्याची क्षेत्रे: header वर, nav दुव्यांसाठी, footer खाली.\n\n<header> मध्ये पेजचं शीर्षक, लोगो, परिचय येतो. तो पेजच्या सुरुवातीला असतो, पण तो दृश्य अवस्था — background असाच ठेवत.\n\n<nav> फक्त नेव्हिगेशन दुव्यांचा संग्रह — उदा. मुख्य, परिचय, संपर्क. प्रत्येक लिंकची सूची नव्हे; जो मुख्य मेनू आहे तोच nav मध्ये.\n\n<footer> पेजचा शेवट — कॉपीराइट, संपर्क, साइटमॅप दुवे. footer ची माहिती गौण पण उपयुक्त असते.\n\nहे तिन्ही tags पेजला एक हाडाची चौकट देतात. त्यामुळे वाचक आणि machine दोघांना दिशा सापडते.',
     '<header>\n  <h1>मराठी वेब शाळा</h1>\n</header>\n<nav>\n  <a href="index.html">मुख्य</a> |\n  <a href="about.html">परिचय</a>\n</nav>\n<footer>\n  <p>© 2026 मराठी वेब शाळा</p>\n</footer>'),
   S('3. main, section आणि article',
     'पेजच्या मध्यभागाचे तीन powerful tags: <main>, <section>, <article>.\n\n<main> मध्ये पेजचा मुख्य मजकूर असतो — पेजवर एकच main! बाजूचे menu, footer वगळता उरलेला भाग.\n\n<section> मध्ये एखाद्या विषयाचा गट येतो — जसे "आमच्या सेवा" मध्ये तीन-चार सेवा. section ला सहसा शीर्षक असतं.\n\n<article> मध्ये स्वतंत्र, स्वयंपूर्ण मजकूर येतो — बातमी, ब्लॉग पोस्ट, टिप्पणी. article वेगळा काढला की तरी पूर्ण अर्थ राहतो.\n\nsection विभाग करतो, article स्वतंत्र रचना देतो. या दोघांचा वापर संदर्भानुसार करा.',
     '<main>\n  <section>\n    <h2>आमच्या सेवा</h2>\n    <p>सर्व सेवा मराठीतून.</p>\n  </section>\n  <article>\n    <h2>नवीन बातमी</h2>\n    <p>आज एक मोठा निर्णय झाला.</p>\n  </article>\n</main>'),
   S('4. aside — बाजूची माहिती',
     '<aside> हा बाजूचा भाग असतो — मुख्य मजकुराशी संबंधित पण कमी महत्त्वाची माहिती.\n\nवापर: साइडबार, संबंधित दुवे, चेतावणी, उद्धरण, जाहिरात. aside मुळे मुख्य मजकूर वाचताना तो अडथळा न येता मिळतो.\n\naside हा नेहमी बाजूला लिहिला नाही; तो मुख्य मजकुराच्या आतही असू शकतो. अर्थ मुख्य — बाजूची टीप.\n\nमुख्य मजकूर आणि aside यांच्यात फरक ठेवणं वाचकाला सोपं होतं आणि मुख्य गोष्ट अधिक स्पष्ट.\n\nप्रत्येक वेळी aside = बाजूची, गौण माहिती असा नियम लक्षात ठेवा.',
     '<main>\n  <article>\n    <h2>मुख्य लेख</h2>\n    <p>इथे संपूर्ण माहिती येते.</p>\n  </article>\n  <aside>\n    <h3>संबंधित दुवे</h3>\n    <p>अधिक वाचण्यासाठी हे दुवे पहा.</p>\n  </aside>\n</main>'),
   S('5. figure आणि figcaption',
     'चित्र, आकृती, कोड यांना शीर्षक देण्यासाठी <figure> आणि <figcaption>.\n\n<figure> मध्ये साहित्याचा तुकडा — चित्र, ग्राफ, कोड ब्लॉक. <figcaption> त्याचं वर्णन — खाली लिहिलेलं स्पष्टीकरण.\n\nfigure मुख्य मजकुराशी संबंधित पण स्वतःची सरळ रचना असलेला भाग. तो इथे-तिथे हलवला तरी अर्थ बदलत नाही.\n\nalt केवळ चित्राचा; figcaption चित्र वाचकाला अधिक अर्थ देतो. तर alt आणि figcaption दोन्ही भिन्न गोष्टी.\n\nfigure+figcaption ने चित्र आणि मजकूर एकच घटक बनतात — रचना साफ आणि अर्थपूर्ण.',
     '<figure>\n  <img src="ghar.png" alt="पारंपरिक घर" width="200">\n  <figcaption>पारंपरिक मराठी घर — चित्र १</figcaption>\n</figure>'),
   S('6. details आणि summary',
     '<details> मध्ये मजकूर दडवता येतो — वाचक क्लिक करेल तेव्हा उघडतो. <summary> हे या दडवलेल्या भागाचं शीर्षक.\n\nवापर: FAQ, विस्तृत माहिती, वाचन पूर्वावलोकन. details मुळे पेज कमी लांब आणि व्यवस्थित दिसते.\n\ndetails इतर tags सारखा open attribute वगळता visible नसतो — सुरुवातीला बंद असतो, summary मात्र दिसतो.\n\nsummary ला क्लिक केल्यावर उरलेला मजकूर उघडतो किंवा आकुंचन होतो. हा पूर्णपणे HTML आणि ब्राउझरचा वागणूक.\n\nयोग्य ठिकाणी details वापरल्याने लांब मजकूर न झुंबरता वाचक स्वतः निवड करतो.',
     '<details>\n  <summary>मराठी का शिकावं?</summary>\n  <p>मराठी ही क्रोडे-लाखो लोकांची भाषा आहे.</p>\n</details>\n<details open>\n  <summary>पहिली पायरी</summary>\n  <p>HTML ने सुरुवात करा.</p>\n</details>'),
   S('Mini Project',
     'आता सर्व semantic tags एकत्र — एक संपूर्ण लेख पेज बनवू.\n\nheader मध्ये शीर्षक, nav मध्ये तीन दुवे. main मध्ये फक्त एक article.\n\narticle च्या आत दोन section — परिचय आणि इतिहास. एक figure चित्रासह.\n\nबाजूला aside टीप आणि शेवटी footer. details मध्ये FAQ ठेवा.\n\nही रचना केल्यावर लेख पेजचा खरा पाया तयार होतो.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>मराठी लेख</title>\n  </head>\n  <body>\n    <header>\n      <h1>मराठी वेबची वाटचाल</h1>\n    </header>\n    <nav>\n      <a href="index.html">मुख्य</a> | <a href="article.html">लेख</a>\n    </nav>\n    <main>\n      <article>\n        <h2>प्रस्तावना</h2>\n        <p>मराठीतून तंत्रज्ञान शिकणं आता सोपं.</p>\n        <figure>\n          <img src="bolna.png" alt="मराठी बोलणे" width="200">\n          <figcaption>मराठी बोलणारे लोक</figcaption>\n        </figure>\n        <aside><p>टीप: हा लेख प्रासंगिक आहे.</p></aside>\n      </article>\n    </main>\n    <footer>\n      <p>© 2026 मराठी वेब शाळा</p>\n    </footer>\n  </body>\n</html>'),
  ],
  ['header आणि footer मध्ये काय येतं?', 'section वि article फरक?', 'aside कधी वापरतात?', 'details मध्ये काय?'],
  [{'q':'पेजचा मुख्य मजकूर कुठे?','o':['main','header','footer','aside'],'c':0},
   {'q':'स्वतंत्र लेख कोणता tag?','o':['article','section','div','span'],'c':0},
   {'q':'चित्राचं वर्णन खाली कोणता?','o':['figcaption','caption','alt','title'],'c':0},
   {'q':'दडवलेला मजकूर कोणता?','o':['details','summary','aside','hidden'],'c':0}],
  {'prompt':'article+aside+footer असलेलं पेज बनवा','starterCode':'<main>\n  <article>\n    <h2>शीर्षक</h2>\n    <p>मजकूर</p>\n  </article>\n</main>','expectedOutput':'Renders semantic article layout'},
  ['semantic tag चा फायदा काय?', 'div ऐवजी semantic का?'],
  ['html-portfolio-project', 'html-media-content'],
  'html-portfolio-project', 'html-media-content')

# =====================================================================
# 2. MEDIA CONTENT  (Master 13)
# =====================================================================
L('html-media-content',
  'Media Content - ध्वनी, व्हिडिओ आणि एम्बेड', 'audio, video, source, iframe — media ची शक्ती',
  'audio, video, source, track, iframe, poster, controls, muted, loop, preload.',
  [
   S('1. audio element',
     'ध्वनी पेजवर आणण्यासाठी <audio> element आहे. त्याची रचना सोपी: <audio src="song.mp3" controls></audio>.\n\ncontrols attribute दिल्यास ब्राउझर बटणे, आवाजाची पट्टी दाखवतो. ते न दिल्यास ध्वनी अदृश्य राहतो.\n\naudio हा inline element नाही तर एक embedded content — तो ठराविक जागा घेतो.\n\nसुरुवातीला चालवण्यासाठी autoplay — पण ते ब्राउझर बहुतेक वेळा अडवतात. वापरकर्त्याची ही सोय आहे.\n\nफाइल फॉरमॅट महत्त्वाचं: MP3 सर्वत्र चालतं, Ogg सर्वत्र नाही. योग्य फॉरमॅट निवडा.',
     '<audio src="gane/marathi.mp3" controls></audio>'),
   S('2. video element',
     'व्हिडिओ साठी <video> element — <video src="movie.mp4" controls width="400"></video>.\n\ncontrols, poster, width, height हे महत्त्वाचे attributes. poster मध्ये व्हिडिओ सुरू होण्यापूर्वीचं चित्र देतात.\n\nwidth आणि height दिल्यास लेआउट स्थिर राहतो. व्हिडिओ लोड होण्यापूर्वी जागा निश्चित होते.\n\nmuted आणि loop attributes — muted ने सुरुवात शांत, loop ने पुन्हा पुन्हा वाजतो.\n\nबहुतेक ब्राउझर autoplay ने audio सोबत मनाई करतात, पण muted व्हिडिओ autoplay होऊ शकतो.',
     '<video src="shale/marathi.mp4" controls poster="poster.png" width="400">\n  तुमचा ब्राउझर व्हिडिओ सपोर्ट करत नाही.\n</video>'),
   S('3. source एकाहून अधिक फॉरमॅट',
     'एकाच media ला अनेक फॉरमॅट देण्यासाठी <source> element. audio/video च्या आत अनेक source.\n\nब्राउझर पहिल्या चालणाऱ्या source ची निवड करतो. म्हणून सर्वात प्रचलित फॉरमॅट वर ठेवा.\n\ntype attribute मध्ये MIME नाव: type="video/mp4", type="audio/ogg". ब्राउझर आधीच तपासतो — improper तर सोडून देतो.\n\nशेवटी मजकूर ठेवता येतो — जो कोणता फॉरमॅट चालत नाही तेव्हा दिसतो. हे एक सुरक्षित fallback म्हणून.\n\nsource क्रॉस-ब्राउझर समस्या सोडवते. एक फॉरमॅट सर्वत्र चालतो ते दुर्मिळ.',
     '<audio controls>\n  <source src="gane/marathi.mp3" type="audio/mpeg">\n  <source src="gane/marathi.ogg" type="audio/ogg">\n  तुमचा ब्राउझर audio सपोर्ट करत नाही.\n</audio>'),
   S('4. iframe — दुसरं पेज आत',
     'एका पेजवर दुसरं पेज आणण्यासाठी <iframe>. त्याला src मध्ये दुसऱ्या पेजचा पत्ता.\n\niframe रचना: <iframe src="https://example.com" width="600" height="400"></iframe>. नकाशे, व्हिडिओ, विजेट्स — सर्व iframe ने.\n\ntitle attribute महत्त्वाचा — screen reader ला iframe मध्ये काय आहे ते सांगतो.\n\nloading="lazy" दिल्यास जवळ स्क्रोल केल्यावरच iframe लोड होतो. वेग वाढतो.\n\nsandbox हा सुरक्षेचा सीमा म्हणून — त्याच्या नियंत्रणाबद्दल पुढे अधिक शिकू.',
     '<iframe src="https://example.com" title="उदाहरण पेज" width="600" height="400" loading="lazy"></iframe>'),
   S('5. track — वर्णन आणि subtitles',
     'व्हिडिओला मजकूर देण्यासाठी <track> element. तो subtitles, captions, वर्णन यांसाठी.\n\n<input> सारखा standalone नाही तर video च्या आत लिहितात. kind आणि src हे गुणधर्म.\n\nkind="captions" साठी श्रवण दृष्टिहीनांसाठी जोडतात, kind="subtitles" भाषांतरासाठी.\n\nsrclang मध्ये भाषा कोड — हिन्दी, मराठी, इंग्रजी. त्यामुळे वाचक भाषा निवडू शकतो.\n\ntrack फाइल WebVTT नावाच्या साध्या मजकूर फॉरमॅटमध्ये असते.',
     '<video src="dhyaas.mp4" controls>\n  <track kind="captions" src="dhyaas.mr.vtt" srclang="mr" label="मराठी">\n  <track kind="captions" src="dhyaas.en.vtt" srclang="en" label="English">\n</video>'),
   S('6. media accessibility',
     'Media ची पोहोच सर्वांपर्यंत — transcripts, captions, वर्णन. ही वेबची जबाबदारी.\n\nध्वनी किंवा व्हिडिओच्या खाली link द्या — transcript फाइलकडे. जे ऐकू/पाहू शकत नाहीत त्यांना मजकूर मिळतो.\n\ncaptions मध्ये बोललेला मजकूर; audio descriptions मध्ये दृश्याचं वर्णन — अनेकांच्या शिकण्यासाठी मदत.\n\nचालणाऱ्या media ला show/hide नियंत्रणे द्या. automatic autoplay जबरदस्ती नको.\n\nFlash तर नाहींच — आधुनिक मानके नेहमी फॉलो करा. त्यामुळे media सर्वांना साथ देते.',
     '<figure>\n  <video src="katha.mp4" controls>\n    <track kind="captions" src="katha.mr.vtt" srclang="mr" label="मराठी">\n  </video>\n  <figcaption>\n    कथेचा पूर्ण मजकूर: <a href="katha-transcript.txt">transcript</a>.\n  </figcaption>\n</figure>'),
   S('Mini Project',
     'सर्व media एकत्र: एक मराठी अभ्यास पेज बनवू.\n\nएक ध्वनी — मराठी गाणं audio controls ने. एक video — शिकवणी, controls आणि poster.\n\nव्हिडिओला source दोन फॉरमॅट आणि track subtitles द्या.\n\nखाली transcript दुवा आणि figure figcaption. iframe मध्ये नकाशा/pेज.\n\nसर्व media accessibility सह स्वच्छ दिसते — हीच पद्धत.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>मराठी मीडिया</title>\n  </head>\n  <body>\n    <h1>श्रवण अभ्यास</h1>\n    <audio controls>\n      <source src="udghosh.mp3" type="audio/mpeg">\n    </audio>\n    <figure>\n      <video src="path.mp4" controls width="400" poster="poster.png">\n        <track kind="captions" src="path.mr.vtt" srclang="mr" label="मराठी">\n      </video>\n      <figcaption><a href="path-transcript.txt">मजकूर transcript</a></figcaption>\n    </figure>\n    <iframe src="https://example.com" title="उदाहरण" width="600" height="300" loading="lazy"></iframe>\n  </body>\n</html>'),
  ],
  ['audio मध्ये controls कशासाठी?', 'source म्हणजे काय?', 'track कशासाठी?', 'media accessibility म्हणजे?'],
  [{'q':'ध्वनी वाजवणारा?','o':['audio','video','song','sound'],'c':0},
   {'q':'एकाहून अधिक फॉरमॅट?','o':['source','track','iframe','poster'],'c':0},
   {'q':'subtitles कोणत्या tag ने?','o':['track','caption','title','label'],'c':0},
   {'q':'दुसरं पेज आत?','o':['iframe','frame','embed','object'],'c':0}],
  {'prompt':'audio + video + track असलेलं पेज बनवा','starterCode':'<audio controls>\n  <source src="gane.mp3" type="audio/mpeg">\n</audio>','expectedOutput':'Renders media elements'},
  ['source fallback कसा काम करतो?', 'autoplay का अडवला जातो?'],
  ['html-semantics', 'html-entities'],
  'html-semantics', 'html-entities')

# =====================================================================
# 3. ENTITIES  (Master 14)
# =====================================================================
L('html-entities',
  'Entities - खास चिन्हे आणि अक्षरे', 'Character Entities - > < & आणि खास चिन्हे लिहायचे नियम',
  'entities, nbsp, amp, lt, gt, copy, reg, numeric references, special characters.',
  [
   S('1. entity म्हणजे काय?',
     'Entity हा एक खास मार्ग — असे चिन्ह लिहायचे जे HTML मधील नियमांच्या समस्येने भरलं नाही. उदा. < चिन्ह थेट लिहू नये.\n\nHTML मध्ये < हे tag ची सुरुवात. त्यामुळे मजकुरात < दाखवायचा असेल तर &lt; लिहितात.\n\nentity ची रचना: & चिन्ह, नाव/क्रमांक, नंतर ;. उदा. &amp; म्हणजे &, &lt; म्हणजे <, &gt; म्हणजे >.\n\nप्रत्येक entity ब्राउझर रूपांतर करतो — पेजवर योग्य चिन्ह दिसतं.\n\nentity समजल्याशिवाय तांत्रिक मजकूर किंवा कोड दाखवणं कठीण.',
     '<p>गणित: 5 &lt; 7 आणि 9 &gt; 4.</p>\n<p>कंपनीचं नाव: अमीर &amp; सहकारी</p>'),
   S('2. tag दाखवणे',
     'HTML: कोडचा नमुना पेजवर दाखवायचा की tags अक्षरशः दिसत नाहीत — कारण ब्राउझर त्यांचा व्याख्या करतो.\n\nदाखवण्यासाठी त्वरित कोष्टकांचा नियम: < लिहा &lt; आणि > लिहा &gt;. मग त्याचा अर्थ मजकूर.\n\nउदा. <p> टाईप करायचे असल्यास &lt;p&gt;. पेजवर <p> शब्दशः दिसेल.\n\nहीच युक्ती कोड sample व शिकवणीत वापरतात — वाचकाला असे दाखवतात.\n\nजेव्हा कोड दाखवायची गरज येत तेव्हा entity ची ही खास मदत लक्षात ठेवा.',
     '<p>खालील कोड तयार करा: &lt;p&gt;नमस्कार&lt;/p&gt;</p>\n<pre>&lt;h1&gt;मराठी&lt;/h1&gt;</pre>'),
   S('3. nbsp — सुटू न देणारी जागा',
     'सामान्य जागा ओळीच्या शेवटी तुटू शकते — शब्द वेगळे होतात. ते टाळण्यासाठी &nbsp; non-breaking space.\n\nnbsp दिल्यास दोन शब्द एकत्र राहतात. उदा. "श्री. &nbsp;महोदय" — फरकाप्रमाणे तोड नाही.\n\nवापर: वेळ, आकडे, नावे, चिन्हे — मूल्ये २″ &nbsp;तीन ठिकाणी न येता स्थिर.\n\nnbsp एकदम काही ओळी रिकाम्या करण्यासाठी वापरू नका — त्या layout समस्या निर्माण करतात.\n\nnbsp साधी आणि आवश्यक नाही ती एकत्रतेसाठी आहे.',
     '<p>१०&nbsp;किलोमीटर</p>\n<p>श्री.&nbsp;राजेश कुमार</p>\n<p>किंमत ₹&nbsp;२००</p>'),
   S('4. व्यापारी चिन्हे',
     'व्यवसायिक चिन्हे entity मध्ये उपलब्ध — ©, ®, ™, आणि इतर.\n\n&copy; म्हणजे copyright. फुटरमध्ये सर्रास वापर. &reg; registered trademark.\n\n&trade; trademark चिन्ह. &euro; युरो, &pound; पाउंड, &yen; येन — किमतीचे प्रतीक.\n\n&sect; section चिन्ह कायदेशीर दस्तऐवज. &deg; अंश — २५&deg;C.\n\nहे चिन्हे पेजवर मजकुरात नेमके दिसतात, कोणतेही गोंधळ न करता.',
     '<p>&copy; 2026 मराठी वेब शाळा. सर्व हक्क राखीव.</p>\n<p>उष्णता आज ३२&deg;C आहे.</p>\n<p>नवीन उत्पादन &trade; नामांकित.</p>'),
   S('5. संख्यात्मक references',
     'नावाव्यतिरिक्त entity क्रमांकानेही लिहिता येतात — त्यांना numeric character references म्हणतात.\n\ndecimal: &#128512; म्हणजे हसत मग &amp;#128512;. hexadecimal: &#x1F600; हेच चिन्ह.\n\nकोणतेही Unicode चिन्ह संख्यात्मक reference ने दिसते — अगदी emoji पण.\n\nफायदा: कीबोर्डवर नसलेली चिन्हे — विराम, arrow, गणितीय — लिहिता येते.\n\nनेमकेपणासाठी नाव असलेलं entity pre lgco; नसल्यास numeric वापरा.',
     '<p>ॐ चिन्ह: &#x00C5; &#128512; &#9733; &#8594;</p>\n<p>गणित: &ang; &asymp; &ne; &le; &ge;</p>'),
   S('6. entity आणि मराठी अक्षरे',
     'मराठी अक्षरे पेजवर दिसतात की चुकतात — ते entity वर नाही, charset वर अवलंबून.\n\n<meta charset="utf-8"> असल्यास मराठी, हिंदी, तामिळ अक्षरे थेट लिहिता येतात — entity ची गरज नाही.\n\nentity फक्त HTML च्या खास प्रकारांसाठी — <, >, &, nbsp, चिन्हे. मराठी मजकूर थेट टाईप करा.\n\nजुने काळी ASCII मध्ये अक्षरे entity ने भरतात; आता UTF-8 सह काहीही साहित्य उलटतं.\n\nentity समजून घ्या — पण मराठी मजकूर नेहमी थेट ठेवा.',
     '<meta charset="utf-8">\n<p>मराठी: गोड आणि समृद्ध.</p>\n<p>विशेष: &copy; &deg; &lt;ul&gt;</p>'),
   S('Mini Project',
     'एक entity चे reference पेज बनवा — शिकणाऱ्यांसाठी उपयुक्त.\n\nविभाग १: HTML tag दाखवणे — &lt;p&gt; उदा. दोन-तीन rows.\n\nविभाग २: व्यापारी चिन्हे — © ™ ®. विभाग ३: मोजमाप — ° ©.\n\nnbsp चे दोन उदाहरण आणि numeric reference एक emoji.\n\nप्रत्येक पंक्तीत entity कोड आणि त्याचं दिसणारं चिन्ह दाखवा.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>Entity संदर्भ</title>\n  </head>\n  <body>\n    <h1>खास चिन्हे</h1>\n    <table>\n      <tr><th>कोड</th><th>चिन्ह</th></tr>\n      <tr><td>&amp;lt;</td><td>&lt;</td></tr>\n      <tr><td>&amp;gt;</td><td>&gt;</td></tr>\n      <tr><td>&amp;amp;</td><td>&amp;</td></tr>\n      <tr><td>&amp;copy;</td><td>&copy;</td></tr>\n      <tr><td>&amp;deg;</td><td>&deg;</td></tr>\n    </table>\n    <p>उदा: 5 &lt; 7, मेल a&amp;b, ऊष्ण 25&deg;C</p>\n  </body>\n</html>'),
  ],
  ['entity म्हणजे काय?', '&lt; कधी लिहितात?', 'nbsp कशासाठी?', 'numeric reference म्हणजे?'],
  [{'q':'& चिन्ह?','o':['&amp;','&lt;','&gt;','&nbsp;'],'c':0},
   {'q':'copyright चिन्ह?','o':['&copy;','&reg;','&trade;','&deg;'],'c':0},
   {'q':'न टुटणारी जागा?','o':['&nbsp;','&amp;','&lt;','&gt;'],'c':0},
   {'q':'&lt; दिसतं तेव्हा?','o':['< दाखवण्यासाठी','> दाखवण्यासाठी','& दाखवण्यासाठी','जागा दाखवण्यासाठी'],'c':0}],
  {'prompt':'entity reference table बनवा','starterCode':'<table>\n  <tr><th>कोड</th><th>चिन्ह</th></tr>\n  <tr><td>&amp;copy;</td><td>&copy;</td></tr>\n</table>','expectedOutput':'Renders entity reference table'},
  ['entity मध्ये किती forms?', 'nbsp वापर कुठे चुकीचा?'],
  ['html-media-content', 'html-meta-head'],
  'html-media-content', 'html-meta-head')

# =====================================================================
# 4. META HEAD  (Master 15)
# =====================================================================
L('html-meta-head',
  'Meta & Head - डोक्यातील माहिती', 'head, title, meta, viewport, Open Graph, Twitter Cards',
  'head, title, meta charset, viewport, description, keywords, robots, Open Graph, Twitter Card, canonical, theme-color.',
  [
   S('1. head ची ओळख',
     'head हे पेजचे "डोके" — ते पेजवर थेट दिसत नाही, पण पेजची प्रत्येक माहिती इथे ठरते.\n\nhead मध्ये title, meta, link येतात. सर्व काही body च्या आधी, एका ठिकाणी.\n\n<title> टॅबवर, बुकमार्कला, search result मध्ये दिसणारं नाव. प्रत्येक पेजला एक अचूक title हवा.\n\nmeta खास माहितीचे टॅग असतात — author, माहिती, robots. प्रत्येक meta चा goal वेगळा.\n\nhead तयार केल्याशिवाय पेज search engine ला तसा ओळखत नाही.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>माझे पेज — मराठी</title>\n</head>'),
   S('2. charset आणि viewport',
     'head चे दोन अनिवार्य meta: charset आणि viewport.\n\n<meta charset="utf-8"> हे author अक्षरांची व्यवस्था. त्याशिवाय मराठी अक्षरे खराब दिसतात.\n\n<meta name="viewport" content="width=device-width, initial-scale=1"> हा मोबाइलचा आधार.\n\nviewport न दिल्यास मोबाइलचा स्क्रीन संगणकाच्या आकाराचा दिसतो — वापरकर्त्याला झूम करावं लागतं.\n\ndevice-width सह वेबपेज मोबाइलच्या रुंदीशी जुळते; initial-scale १ म्हणजे मूळ झूम पातळी.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मोबाइल तयार</title>\n</head>'),
   S('3. description, keywords, author',
     'meta tags पेजची माहिती — description search result मध्ये दिसणारं वर्णन.\n\n<meta name="description" content="मराठीतून वेब विकास शिका."> — १५०-१६० अक्षरांची मर्यादा.\n\ndescription चांगला असेल तर search result मध्ये वाचक पटकन क्लिक करतो. तो पेजची जाहिरात.\n\nkeywords जुनी कल्पना — आता search engine वापरत नाहीत, पण तांत्रिक माहितीसाठी ठेवता येतो.\n\nauthor, robots, language — इतर meta माहिती. robots मध्ये noindex, nofollow मूल्ये येतात.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="description" content="मराठीतून वेब विकास शिकण्याची संपूर्ण मार्गदर्शिका.">\n  <meta name="author" content="मराठी वेब शाळा">\n  <meta name="robots" content="index, follow">\n  <title>मराठी वेब विकास</title>\n</head>'),
   S('4. Open Graph — सामाजिक वाटणी',
     'Open Graph (og) पेज सोशल मीडियावर शेअर करताना कसा दिसतो ते ठरवतो.\n\nWhatsApp, Facebook, LinkedIn पेजचा दुवा उघडताना og मधील माहिती दाखवतात.\n\nog:title पेजचं शीर्षक, og:description स्वाद वर्णन, og:image वाटणीसाठीचं चित्र.\n\nog:url मूळ पेजचा पत्ता. og:type पेजचा प्रकार — website, article, video.\n\nog जोडल्यावर शेअर केलेला दुवा आकर्षक आणि स्वच्छ दिसतो.',
     '<head>\n  <meta charset="utf-8">\n  <meta property="og:title" content="मराठी वेब विकास">\n  <meta property="og:description" content="आपल्या भाषेत कोडिंग.">\n  <meta property="og:image" content="https://example.com/cover.png">\n  <meta property="og:url" content="https://example.com/">\n  <meta property="og:type" content="website">\n</head>'),
   S('5. Twitter Cards आणि theme-color',
     'Twitter साठी वेगळी meta — Twitter Cards. og सारखीच पण twitter: उपसर्गाने.\n\ntwitter:card म्हणजे "summary", "summary_large_image" — दिसण्याचा प्रकार.\n\ntwitter:title, twitter:description, twitter:image — आराखडा og प्रमाणे.\n\n<link rel="canonical"> मूळ पेजचा पत्ता — duplicate content टाळतो.\n\n<meta name="theme-color" content="#123456"> मोबाइल ब्राउझरच्या toolbar चा रंग ठरवतो.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="theme-color" content="#12a3b4">\n  <meta name="twitter:card" content="summary_large_image">\n  <meta name="twitter:title" content="मराठी वेब विकास">\n  <meta name="twitter:description" content="आपल्या भाषेत कोडिंग.">\n  <link rel="canonical" href="https://example.com/">\n</head>'),
   S('6. favicon आणि खास link',
     'head मध्ये favicon — ब्राउझर टॅबवरचं छोटं चिन्ह. <link rel="icon" href="favicon.ico">.\n\nfavicon पेज ओळखण्यासाठी; अनेक ठिकाणी दिसतं — टॅब, बुकमार्क, history.\n\nlink rel="preconnect" आणि rel="dns-prefetch" — बाहेरच्या डोमेनशी लवकर जोडणी.\n\nlink rel="preload" अस्सल resources लवकर लोड करणे. rel="stylesheet" — CSS जोडणे.\n\nhead = पेज स्वतःच सांगणारा संदेश देणारं साधन. प्रत्येक link आणि meta एक विशेष काम.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>मराठी वेब</title>\n  <link rel="icon" href="favicon.ico">\n  <link rel="stylesheet" href="style.css">\n</head>'),
   S('Mini Project',
     'एका पेजचं संपूर्ण head तयार करू — व्यावसायिक पातळीवर.\n\ncharset, viewport, title से सुरुवात. description आणि author जोडा.\n\nog: three meta — title, description, image. twitter:card — एकटी दोन.\n\ntheme-color, favicon, canonical — शेवटी. सर्व order स्पष्ट ठेवा.\n\nहा head पेजला गंभीरतेने वाढ सांगतो.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="मराठीतून वेब विकास शिकण्याची सोय.">\n    <meta name="author" content="मराठी वेब शाळा">\n    <meta property="og:title" content="मराठी वेब शाळा">\n    <meta property="og:description" content="आपल्या भाषेत कोडिंग.">\n    <meta property="og:image" content="https://example.com/cover.png">\n    <meta name="theme-color" content="#12a3b4">\n    <meta name="twitter:card" content="summary_large_image">\n    <link rel="icon" href="favicon.ico">\n    <link rel="canonical" href="https://example.com/">\n    <title>मराठी वेब शाळा</title>\n  </head>\n  <body>\n    <h1>मराठी वेब शाळा</h1>\n  </body>\n</html>'),
  ],
  ['viewport म्हणजे काय?', 'og म्हणजे काय?', 'canonical कशासाठी?', 'theme-color काय करतो?'],
  [{'q':'मोबाइलसाठी नियंत्रण?','o':['viewport','charset','author','robots'],'c':0},
   {'q':'सोशल मीडिया वाटणीसाठी?','o':['Open Graph','robots','canonical','theme-color'],'c':0},
   {'q':'मूळ पेजचा पत्ता?','o':['canonical','favicon','preload','author'],'c':0},
   {'q':'टॅबवर दिसणारं नाव?','o':['title','description','keywords','author'],'c':0}],
  {'prompt':'full head package असलेलं पेज बनवा','starterCode':'<head>\n  <meta charset="utf-8">\n  <title>माझे पेज</title>\n</head>','expectedOutput':'Renders page with complete head'},
  ['og meta कसे लिहितात?', 'charset अजिबात नाही तर?'],
  ['html-entities', 'html-seo-fundamentals'],
  'html-entities', 'html-seo-fundamentals')

# =====================================================================
# 5. SEO FUNDAMENTALS  (Master 16)
# =====================================================================
L('html-seo-fundamentals',
  'SEO Fundamentals - शोध इंजिनासाठी योग्य रचना', 'SEO, heading hierarchy, anchor text, alt, semantic structure, performance',
  'SEO, search engine, h1 h2 hierarchy, title, meta description, anchor text, alt text, internal links, robots, sitemap.',
  [
   S('1. SEO म्हणजे काय?',
     'SEO म्हणजे Search Engine Optimization — शोध इंजिनात पेज वरच्या क्रमांकावर आणण्याचं शिस्तबद्ध काम.\n\nगुगल सारख्या search engine वेबवर kroडे पेज वाचतात आणि क्रमवार तयार करतात. त्यांना कोणते पेज original, उपयुक्त हे समजायला हवं.\n\nHTML हा search engine चा संपर्कच होय. मजकूर, कोड, रचना — सर्व काही मशीनला वाचता येईल पाहिजे.\n\nSEO चे तीन स्तर: तांत्रिक (कोड), मजकूर (लिखाण), सामाजिक (दुवे). आपण आता तांत्रिक शिकतोय.\n\nसर्वात महत्त्वाचं: वाचकांसाठी चांगली रचना, मग search engine स्वतःच खरे करतो.',
     '<title>मराठीतून वेब विकास शिका</title>\n<meta name="description" content="मराठीतून झिरप तरी HTML सोप्या पद्धतीने शिका.">'),
   S('2. शीर्षक आणि heading क्रम',
     'पेजचा नकाशा heading क्रम. हे h1, h2, h3 ची साखळी — एकच h1, मग h2, त्याच्या आत h3.\n\nh1 पेजचा मुख्य विषय. search engine h1 ला प्रमुख सांगतो. दोन h1 गोंधळ निर्माण करतो.\n\nh2 मुख्य भाग, h3 छोटे उपभाग. क्रम मोडल्यास मशीनला रचना अस्पष्ट होते.\n\nशीर्षक शब्द निवडताना वास्तविक प्रश्नांची भाषा वापरा — वाचक जसे शोधतो तसे.\n\nheading एक रचना, सजावट नव्हे. त्यामुळे order नेहमी पाळा.',
     '<h1>मराठी कोडिंग</h1>\n<h2>HTML मूलभूत</h2>\n<h3>tags काय?</h3>\n<h2>CSS परिचय</h2>\n<h3>selectors काय?</h3>'),
   S('3. दुवे आणि anchor text',
     'दुवे वेबला जोडतात. दुव्याचा मजकूर (anchor text) search engine वाचतो — तो दुव्याचा अर्थ सांगतो.\n\n"येथे क्लिक करा" ऐवजी "मराठी कोडिंग मार्गदर्शक" लिहा — तोच विषय सूचित होतो.\n\nInternal links — तुमच्या स्वतःच्या दुसऱ्या पेजकडे. ते site चा नकाशा search engine ला समजवतात.\n\nExternal links — विश्वासार्ह, संबंधित ठिकाणीच. रिलेटेड पेजचा दुवा दस्तऐवज वाढवतो.\n\nदुवा कुठे नेतो ते मजकूरातच स्पष्ट असावं.',
     '<p>मराठीतून <a href="html-kos.html">HTML कोर्स</a> पहा.</p>\n<p>आमचा <a href="contact.html">संपर्क पेज</a> विजनिंग उपलब्ध.</p>'),
   S('4. चित्रे आणि alt',
     'चित्रे search engine ला दिसत नाहीत — फक्त alt मजकूर वाचतात. त्यामुळे alt ही संधी.\n\nalt चित्राचं वर्णन — "मराठी भाषा महोत्सव" घडा. "image123.png" ही माहिती नाही.\n\nalt काही असतानाही image search मध्ये पेज सापडू शकतं. माहितीपूर्ण alt वरचा क्रम आणतो.\n\nसजावटीसाठीचे चित्र alt="" रिकामे, परंतु माहिती संरचना alt समजते.\n\nफाइल नावही अर्थपूर्ण — ganesh-mandir.jpg सारखं. सर्व चित्रे व्यवस्थित name आणि alt सह.',
     '<img src="marathi-utsav-2026.jpg" alt="मराठी भाषा महोत्सव २०२६" width="300" loading="lazy">'),
   S('5. semantic structure म्हणजेच SEO',
     'Semantic tags search engine ला पेज समजण्यास मदत करतात — <article>, <main>, <nav>.\n\nsemantic tags मधील मजकूर महत्त्वाचा मानला जातो. div सारख्या साधनात तो अंदाजे राहतो.\n\nheadings, दुवे, lists, tables — प्रत्येक योग्य tag मशीनला रचनेची माहिती देतो.\n\nsearch engine पेज समजेल तरच रिच स्निपेट, खंडित चित्रे मिळतात.\n\nवाचकाच्या अनुभवासाठी स्वच्छता — SEO हा त्याचा परिणाम.',
     '<main>\n  <article>\n    <h1>मराठी वेबचे भविष्य</h1>\n    <p>मराठीतून तंत्रज्ञान शिकताना आता अचूक मार्गदर्शन.</p>\n  </article>\n  <aside>\n    <p>संबंधित: <a href="web-kos.html">वेब कोर्ससूची</a></p>\n  </aside>\n</main>'),
   S('6. performance आणि sitemap',
     'SEO फक्त कोडवर नाही — पेजचा वेगही क्रमवारी ठरवतो. हळू पेज search engine ला आवडत नाही.\n\nचित्रांचा आकार लहान करा, अतिरिक्त resources वगळा, मोबाइल दृश्य योग्य करा.\n\nviewport meta मोबाइल सांगते; त्याशिवाय मोबाइल लोकसंख्येचा अर्धा search गमावला.\n\nrobots.txt search engine ला कोणते पेज अनुसरा, कोणते नको सांगतो — त्याची फाइल server वर असते.\n\nsitemap.xml पेजांची यादी — search engine ला सर्व काही शोधते. ही दोन्ही तांत्रिक files असतात.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="robots" content="index, follow">\n  <title>मराठी वेब — वेग आणि SEO</title>\n</head>'),
   S('Mini Project',
     'एक SEO-मित्र लेख पेज बनवू.\n\ntitle अचूक, description एक. एकच h1, मग h2/h3 क्रमाने.\n\nदोन internal दुवे अर्थपूर्ण anchor text सह. एक चित्र अर्थपूर्ण alt.\n\nsemantic tags — article, aside, nav. शेवटी रोबोट meta.\n\nहा नमुना तयार केल्यावर पेज शोधयोग्य बनते.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="मराठीतून वेब विकास शिकण्याची मार्गदर्शिका.">\n    <meta name="robots" content="index, follow">\n    <title>मराठीतून वेब शिका</title>\n  </head>\n  <body>\n    <header>\n      <h1>मराठी वेबचा पाया</h1>\n    </header>\n    <nav>\n      <a href="index.html">मुख्य</a> | <a href="web-kos.html">वेब कोर्स</a>\n    </nav>\n    <main>\n      <article>\n        <h2>सुरुवात का महत्त्वाची?</h2>\n        <p>स्पष्ट रचना वाचक आणि search engine दोघांनाही घेते.</p>\n        <img src="paya.png" alt="मराठी वेबचा पाया" width="300">\n      </article>\n    </main>\n  </body>\n</html>'),
  ],
  ['SEO म्हणजे काय?', 'एकच h1 का?', 'anchor text कसा असावा?', 'sitemap म्हणजे?'],
  [{'q':'एकच कोणता heading?','o':['h1','h2','h3','h4'],'c':0},
   {'q':'चित्राचं वर्णन कुठे?','o':['alt','title','src','width'],'c':0},
   {'q':'search engine चा पत्ता कोणता?','o':['sitemap.xml','style.css','index.html','script.js'],'c':0},
   {'q':'पेजचं वर्णन meta?','o':['description','author','robots','charset'],'c':0}],
  {'prompt':'SEO-friendly article page बनवा','starterCode':'<main>\n  <article>\n    <h1>शीर्षक</h1>\n    <p>मजकूर</p>\n  </article>\n</main>','expectedOutput':'Renders SEO-friendly article'},
  ['heading order कसा पाळायचा?', 'performance का महत्त्वाचं?'],
  ['html-meta-head', 'html-accessibility'],
  'html-meta-head', 'html-accessibility')

# =====================================================================
# 6. ACCESSIBILITY  (Master 17)
# =====================================================================
L('html-accessibility',
  'Accessibility - सर्वांसाठी वेब', 'a11y, labels, alt, aria, focus, contrast, skip links, screen readers',
  'screen reader, labels, alt, ARIA, aria-label, role, tabindex, focus, contrast, skip link, lang.',
  [
   S('1. a11y म्हणजे काय?',
     'Accessibility म्हणजे वेबपेज प्रत्येकाला वापरता येणं — दृष्टिहीन, श्रवणहीन, विकलांग व्यक्तींसह.\n\na11y हे लघुरूप — a, 11 अक्षरे, y असे. "Accessibility" चं आंतरराष्ट्रीय नाव.\n\nScreen reader हे सॉफ्टवेअर पेजचा मजकूर मोठ्याने वाचतं. त्याला योग्य रचना हवी.\n\nकीबोर्ड एकाकी — अनेक वापरकर्ते माऊस न वापरता keyboard ने नेव्हिगेट करतात.\n\na11y म्हणजे "अपंगांना मदत" नव्हे — तो सर्वांसाठी चांगला अनुभव आहे.',
     '<label for="नाव">तुमचं नाव:</label>\n<input id="नाव" name="नाव" type="text">'),
   S('2. label आणि form',
     'प्रत्येक <input> ला एक <label> हवा. label संबंधित फील्डचे नाव सांगतो.\n\nfor आणि id समान असावे — ते जोडणी करतात. त्याशिवाय screen reader फील्ड ओळखत नाही.\n\nlabel वर क्लिक केल्यावर फील्ड focus होतं — मोठे लक्ष्य, चांगला अनुभव.\n\nplaceholder हा label नाही. तो नमुना मजकूर; तो गहाळ होतो. नेहमी खरा label द्या.\n\nform ला name, autocomplete, आवश्यक गुणधर्म स्पष्ट द्या — तपासणी आणि a11y दोन्ही.',
     '<form action="#" method="post">\n  <label for="em">ईमेल:</label>\n  <input id="em" name="email" type="email" autocomplete="email">\n  <label for="vay">वय:</label>\n  <input id="vay" name="वय" type="number">\n</form>'),
   S('3. alt आणि ARIA',
     'चित्रे — alt वर्णन. दृश्य माहिती मजकूरात द्या. screen reader alt मोठ्याने वाचतं.\n\nसजावटीचे चित्र — alt="" रिकामे. त्यामुळे screen reader हे चित्र skip करतो.\n\ndecuative icon मध्ये aria-hidden="true" देतात — स्वतः न वाचण्यासाठी.\n\naria-label खास नाव बटणाला, region ला देतो — जेथे मजकूर नाही. उदा. खोकल्या button.\n\nARIA "चक्कर" पर्याय आहे — शक्यतो शुद्ध HTML label वापरा; ARIA गरज असेल तेव्हाच.',
     '<img src="suryoday.png" alt="सूर्योदय पाहताना शेतं" width="300">\n<button type="button" aria-label="मेनू उघडा">☰</button>\n<p aria-hidden="true">ही सजावटीची ओळ.</p>'),
   S('4. तार्किक क्रम आणि focus',
     'Keyboard नेव्हिगेशन order महत्त्वाचा — focus एका घटकातून दुसऱ्यात सहज सरकतं.\n\ntabindex="0" नैसर्गिक ठिकाणाचा घटक focus करणे; tabindex="1" जबरदस्ती आधी — तो नको.\n\nत्यामुळे focus order कोडच्या क्रमानुसार ठेवा. मेनू, बटणे, दुवे सुसंगत चालल्या पाहिजेत.\n\nवाचकाला दिसणारं तेच असावं. programmatic एक ठिकाण, दृश्य other ठिकाण — गोंधळ.\n\nfocus अदृश्य करणे वाईट; focus outline ठेवा — तो keyboard वापरकर्त्याचा मार्ग आहे.',
     '<nav>\n  <a href="main.html">मुख्य</a>\n  <a href="news.html">बातम्या</a>\n</nav>\n<form>\n  <label for="n">नाव:</label>\n  <input id="n" name="नाव">\n</form>'),
   S('5. contrast आणि color',
     'मजकूर आणि background यांचा फरक (contrast) पुरेसा हवा — वाचण्यास सोपं.\n\nकेवळ रंगाने अर्थ सांगू नका — "लाल = चुकीचं" असेल त्याला मजकूरही जोडा.\n\nफिकट text गडद background किंवा उलट — दोन्ही डोळ्यांसाठी तेजस्वी.\n\nlang attribute — <html lang="mr">. screen reader योग्य उच्चार करतो.\n\nमोठ्या अक्षरांची सवय, रंगांधळेपणासाठी हे सर्व छोटे निर्णय महत्त्वाचे.',
     '<html lang="mr">\n<body>\n  <p>स्पष्ट मजकूर — गडद text, फिकट पार्श्वभूमी.</p>\n</body>\n</html>'),
   S('6. skip link आणि error संदेश',
     'Skip link — पेजच्या सुरूवातीचा दुवा जो थेट मुख्य मजकुरावर नेतो. keyboard वापरकर्त्याचा वेग वाढतो.\n\n<form on Error> — errors मजकुरात स्पष्ट. का चुकलं, कुठे चुकलं — सांगा.\n\nerror button ला aria-describedby ने जोडता येतं — संदेशाशी जोडणी.\n\nसगळे media captions/transcript सह. सगळे दुवे अर्थपूर्ण मजकूर.\n\na11y चा नियम साधा: कोणीही, कोणत्याही परिस्थितीत, पेज वापरू शकेल.',
     '<a href="#मुख्य" class="skip-link">थेट मुख्य लेखाकडे जा</a>\n<main id="मुख्य">\n  <h1>मुख्य लेख</h1>\n  <p>येथून पेज सुरू होतं.</p>\n</main>'),
   S('Mini Project',
     'एक accessible profile पेज बनवू.\n\nlabel सह दोन fields — नाव आणि ईमेल. form autocomplete रो हो.\n\nलोकल चित्र with अर्थपूर्ण alt. एक skip link वर.\n\nlang="mr" आधीच. खास बटणा aria-label. सर्व keyboard usable.\n\nहा पेज सर्वांसाठी खुला झाला.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>प्रोफाइल — प्रवेशयोग्य</title>\n  </head>\n  <body>\n    <a href="#मुख्य" class="skip-link">मुख्य मजकुराकडे</a>\n    <nav>\n      <a href="index.html">मुख्य</a> | <a href="about.html">परिचय</a>\n    </nav>\n    <main id="मुख्य">\n      <h1>माझे प्रोफाइल</h1>\n      <img src="mala.png" alt="माझं चित्र" width="200">\n      <form action="#" method="post">\n        <label for="na">नाव:</label>\n        <input id="na" name="नाव" type="text" required>\n        <label for="em">ईमेल:</label>\n        <input id="em" name="ईमेल" type="email" autocomplete="email">\n        <button type="submit">पाठवा</button>\n      </form>\n    </main>\n  </body>\n</html>'),
  ],
  ['a11y म्हणजे काय?', 'label आणि placeholder फरक?', 'ARIA कधी वापरतात?', 'skip link कशासाठी?'],
  [{'q':'screen reader ची जोडणी कोणती?','o':['label for + id','alt','aria-hidden','tabindex'],'c':0},
   {'q':'सजावटीचं चित्र alt?','o':['alt=""','alt="चित्र"','alt नको','alt="1"'],'c':0},
   {'q':'keyboard वापरकर्त्याचा मार्ग?','o':['focus outline','placeholder','title','style'],'c':0},
   {'q':'रंगांधळेपणासाठी?','o':['फक्त रंग नको','रंग + मजकूर','केवळ रंग','काळे-पांढरे'],'c':0}],
  {'prompt':'accessible form + skip link पेज बनवा','starterCode':'<form>\n  <label for="n">नाव:</label>\n  <input id="n" name="नाव">\n</form>','expectedOutput':'Renders accessible form'},
  ['ARIA vs HTML label?', 'contrast नियम काय?'],
  ['html-seo-fundamentals', 'html-responsive-images'],
  'html-seo-fundamentals', 'html-responsive-images')

# =====================================================================
# 7. RESPONSIVE IMAGES  (Master 18)
# =====================================================================
L('html-responsive-images',
  'Responsive Images - प्रत्येक पडद्यासाठी चित्र', 'srcset, sizes, picture, source, lazy loading, WebP, art direction',
  'srcset, sizes, picture, source media, width descriptors, density, lazy, decoding, fetchpriority, formát.',
  [
   S('1. चित्र आकाराची समस्या',
     'संगणकाचे मोठे चित्र मोबाइलवर कसे दाखवता? खूप मोठे लोड होतं, खूप लहान दिसतं.\n\nप्रत्येक पडद्यासाठी एक आकार नसतो. टीव्ही 1920px, मोबाइल 360px — दोन्ही एकच image, दोन आकार.\n\nwidth attribute आकार देतो, पण फाइल ती मोठीच राहते. मोबाइलवर 2MB चित्र वाया.\n\nसोय: ब्राउझर पडद्यानुसार योग्य फाइल निवडेल — srcset आणि sizes ची किमया.\n\nलक्ष्य: लहान पडदा = लहान फाइल, मोठा पडदा = मोठी फाइल. वेग आणि डेटा दोन्ही वाचतो.',
     '<img src="pune.jpg" alt="पुणे" width="400" height="300">\n<p>एकच आकार, सर्व पडद्यांवर.</p>'),
   S('2. srcset — फाइलांची सूची',
     'srcset या attribute मध्ये एकाच चित्राच्या अनेक आकारांच्या फाइलांची सूची देतात.\n\nप्रत्येक entry: फाइल, स्पेस, रुंदी (w) किंवा घनता (x). उदा. "pune-400.jpg 400w".\n\nब्राउझर आपल्या पडद्याच्या आकारानुसार योग्य आकार निवडतो. कोणता निवडेल ते ब्राउझरचं.\n\nw descriptor — म्हणजे चित्राची खरी पिक्सेल रुंदी. ही सूची आरोही क्रमाने लिहा.\n\nsrcset फक्त src च्या जोरावर काम करत नाही — src हा सुरक्षित fallback असतो.',
     '<img src="pune-400.jpg" alt="पुणे"\n     srcset="pune-400.jpg 400w, pune-800.jpg 800w, pune-1200.jpg 1200w">'),
   S('3. sizes — ठिकाणाचा अंदाज',
     'sizes attribute ब्राउझरला सांगतो — चित्र पेजच्या किती रुंद जागा घेईल. त्यातून निवड सोपी होते.\n\nउदा. sizes="(max-width: 600px) 100vw, 600px" — लहान पडद्यावर पूर्ण रुंदी, मोठ्यावर 600px.\n\nvw म्हणजे viewport width; px थेट. एवढीच गरज — विविध शर्ती येथे लिहितात.\n\nतंतोतंत गणतीत नको; योग्य अंदाज ब्राउझरला पुरेसा — guest image देतो.\n\nsizes नसेल तर srcset w देखील अंदाजे निवडते — पण sizes अधिक अचूक.',
     '<img src="pune-800.jpg" alt="पुणे"\n     srcset="pune-400.jpg 400w, pune-800.jpg 800w, pune-1200.jpg 1200w"\n     sizes="(max-width: 600px) 100vw, 600px">'),
   S('4. picture — art direction',
     'कधी कधी तुम्हाला स्वतःच निवडायचं असतं — कोणता चित्र कोणत्या पडद्यासाठी. त्यासाठी <picture>.\n\npicture च्या आत <source> आणि शेवटी आवश्यक <img>. मीडिया शर्ती source मध्ये.\n\nउदा. मोबाइलसाठी क्रॉप केलेलं चित्र, संगणकासाठी पूर्ण दृश्य. media मध्ये अट लिहितात.\n\npicture ब्राउझरला सर्वात योग्य source निवडण्यास भाग पाडतो.\n\nsrcset sizes फक्त आकार बदलते; picture आकार आणि दृश्य दोन्ही बदलतो.',
     '<picture>\n  <source media="(max-width: 600px)" srcset="mob-600.jpg">\n  <source media="(min-width: 601px)" srcset="full-1200.jpg">\n  <img src="full-1200.jpg" alt="पुणे शहर">\n</picture>'),
   S('5. lazy loading आणि format',
     'loading="lazy" — दूरची चित्रे स्क्रोल केल्यावरच लोड होतात. पहिला वेग वाढतो.\n\nपहिल्या स्क्रीनचं चित्र लगेचच; उरलेलं lazy. loading="eager" सक्तीचं तयारी.\n\ndecoding="async" — चित्र एनकोडिंग पेज दाखवताच सुरू, रचना अडवली जात नाही.\n\nWebP/AVIF फॉरमॅट लहान फाइल, तीच quality. जुन्या ब्राउझरसाठी JPEG fallback.\n\nfetchpriority="high" पहिल्या मोठ्या चित्रावर — इतर साठी low ठेवा.',
     '<img src="suraj.jpg" alt="सूर्योदय"\n     loading="lazy" decoding="async"\n     width="400" height="300">'),
   S('6. नियम आणि तपासणी',
     'प्रत्येक चित्र device तपासा: small screen, big screen, सुस्त नेट. नेहमी वापरा दृश्य.\n\nalt नेहमी अर्थपूर्ण — अनेक मार्गाने मिळणारी माहिती.\n\nन facebook: width, height दिल्यास layout stable राहते — चित्र लोड होण्यापूर्वीही.\n\nformat नियम: फोटो JPEG/WebP, पारदर्शक PNG/WebP, अॅनिमेशन GIF/WebP.\n\nएखादा छोटा परीक्षण: DevTools मध्ये Network टॅब — कोणत्या फाइल सर्व्हरवरून आली ते पाहा.',
     '<img src="desh.jpg" alt="देशाचा नकाशा"\n     srcset="desh-600.jpg 600w, desh-900.jpg 900w, desh-1400.jpg 1400w"\n     sizes="(max-width: 700px) 100vw, 700px"\n     loading="lazy" decoding="async" width="700" height="400">'),
   S('Mini Project',
     'एक responsive gallery पेज बनवू.\n\nतीन चित्रे — प्रत्येकाला srcset तीन आकार आणि sizes.\n\ngallery च्या पहिल्या मोठ्या चित्राला fetchpriority="high".\n\nइतर दोन loading="lazy". सर्वांना अर्थपूर्ण alt.\n\nआता कोणताही पडदा — चित्रे त्वरित, सुबक, बचत.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>मराठी गॅलरी</title>\n  </head>\n  <body>\n    <h1>आमची गॅलरी</h1>\n    <img src="nath-900.jpg" alt="नाथांची पालखी"\n         srcset="nath-400.jpg 400w, nath-900.jpg 900w, nath-1400.jpg 1400w"\n         sizes="(max-width: 700px) 100vw, 700px"\n         fetchpriority="high" width="700" height="450">\n    <img src="sadev-600.jpg" alt="संध्याकाळचे दृश्य"\n         srcset="sadev-400.jpg 400w, sadev-600.jpg 600w"\n         sizes="(max-width: 500px) 100vw, 500px"\n         loading="lazy" decoding="async" width="500" height="350">\n  </body>\n</html>'),
  ],
  ['srcset काय देतो?', 'sizes काय सांगतं?', 'picture कधी?', 'lazy loading म्हणजे?'],
  [{'q':'फाइलांची सूची कोणता?','o':['srcset','sizes','picture','media'],'c':0},
   {'q':'मोबाइलसाठी वेगळं दृश्य?','o':['picture+source','srcset','width','lazy'],'c':0},
   {'q':'पडद्याचा आकार सांगतो?','o':['viewport','sizes','src','alt'],'c':0},
   {'q':'स्क्रोलवर लोड?','o':['loading=lazy','loading=eager','decoding=async','fetchpriority'],'c':0}],
  {'prompt':'srcset + sizes सह चित्र बनवा','starterCode':'<img src="a.jpg" srcset="a-400.jpg 400w, a-800.jpg 800w" sizes="50vw">','expectedOutput':'Renders responsive image'},
  ['srcset वि picture फरक?', 'WebP का?'],
  ['html-accessibility', 'html-forms-advanced'],
  'html-accessibility', 'html-forms-advanced')

# =====================================================================
# 8. ADVANCED FORMS  (Master 19)
# =====================================================================
L('html-forms-advanced',
  'Advanced Forms - गुंतागुंतीचे फॉर्म', 'fieldset, legend, select, optgroup, datalist, textarea, output, file',
  'fieldset, legend, select, option, optgroup, datalist, textarea, output, file, accept, multiple, disabled, readonly.',
  [
   S('1. fieldset आणि legend',
     'फॉर्मचे भाग गटबद्ध करण्यासाठी <fieldset>. त्याचं शीर्षक <legend>.\n\nउदा. "पत्ता" fieldset मध्ये नाव, गाव, पिन; "पैसे" fieldset मध्ये खाते. गट स्पष्ट.\n\nfieldset सभोवती एक रेषा/चौकट दाखवतो — मोठ्या फॉर्मला दृश्य सुसंगतता.\n\nlegend फील्ड्सेटचं नाव screen reader वाचतो — a11y साठी मोलाचं.\n\ndisabled fieldset मधील सर्व fields अक्षम करतो — एकाच ठिकाणी नियंत्रण.',
     '<fieldset>\n  <legend>घराचा पत्ता</legend>\n  <label>गाव: <input name="गाव"></label>\n  <label>पिन: <input name="पिन" type="text"></label>\n</fieldset>'),
   S('2. select आणि option',
     'सूचीतून एक निवडण्यासाठी <select>. त्याचे पर्याय <option>.\n\n<option value="pune">पुणे</option> — value पाठवली जाते, दिसणारा मजकूर वेगळा.\n\nselected attribute पूर्व-निवडलेला पर्याय. अनेक निवड — multiple attribute.\n\nselect मोबाइलवर नैसर्गिक picker उघडतो — वापरकर्त्यास सोय.\n\nएकावेळी एक मूल्य सामान्य; क्रम महत्त्वाचा असेल तर multiple.',
     '<label>जिल्हा:\n  <select name="जिल्हा">\n    <option value="pune">पुणे</option>\n    <option value="nashik" selected>नाशिक</option>\n    <option value="kolhapur">कोल्हापूर</option>\n  </select>\n</label>'),
   S('3. optgroup — सूचीचे वर्ग',
     'मोठ्या select ला वर्ग करण्यासाठी <optgroup>. प्रत्येक वर्गाचं label.\n\nउदा. fractions: "मराठी व्याकरण", "गणित", "विज्ञान" — प्रत्येकात विषय पर्याय.\n\noptgroup ने सूची वाचण्यास सोपी आणि नेव्हिगेट करण्यास सोयीची.\n\nselect मधील option अथवा optgroup फक्त. option मध्ये value अनिवार्य नसतो.\n\nसुटे opi — screen reader मध्ये वर्ग गट template राहतो.',
     '<label>विषय निवडा:\n  <select name="विषय">\n    <optgroup label="भाषा">\n      <option>मराठी</option>\n      <option>हिंदी</option>\n    </optgroup>\n    <optgroup label="गणित">\n      <option>बीजगणित</option>\n      <option>भूमिती</option>\n    </optgroup>\n  </select>\n</label>'),
   S('4. datalist — जलद सुचना',
     '<datalist> select सारखा नाही — तो input सोबत सुचना देतो; वापरकर्ता लिहूही शकतो.\n\n<input list="नाव"> आणि <datalist id="नाव"> जोडणी list attribute ने.\n\nटाईप करताना जुळणारे पर्याय दिसतात — वेगवान आणि स्पर्शभूत.\n\ndatalist मध्ये <option value="पुणे">. text input म्हणूनही मुक्त.\n\nselect ची कडक निवड नको असेल तेव्हा datalist योग्य.',
     '<label>शहर:\n  <input name="शहर" list="शहरे">\n</label>\n<datalist id="शहरे">\n  <option value="पुणे"></option>\n  <option value="मुंबई"></option>\n  <option value="नागपूर"></option>\n  <option value="औरंगाबाद"></option>\n</datalist>'),
   S('5. textarea आणि output',
     'मोठा मजकूर — अनेक ओळी — <textarea>. पत्ता, टिप्पणी, संदेश.\n\n<textarea name="नोट" rows="4" cols="40">…</textarea>. rows/cols पहिला आकार.\n\ntextarea ची value content मध्येच असते — opening/closing tag मध्ये. whitespace लक्षात ठेवा.\n\n<output> गणनेचा निकाल दाखवण्यासाठी — form गणनेचा परिणाम. तो script आणि display साठी.\n\noutput सहसा script सोबत; markup मध्ये जागा ठरवता येते.',
     '<label>मजकूर:\n  <textarea name="नोट" rows="4" cols="40">इथे टिप्पणी लिहा…</textarea>\n</label>\n<label>निकाल:\n  <output name="सरासरी">0</output>\n</label>'),
   S('6. file input आणि state',
     'फाइल अपलोड करण्यासाठी <input type="file">. accept फाइल प्रकार ठरवतो.\n\naccept="image/*" — चित्रेच. accept=".pdf,.doc" — विशिष्ट विस्तार. हे मार्गदर्शन, रक्षण नव्हे.\n\nmultiple attribute — अनेक फाइल. फाइलचे नाव जागेवरच दिसतं.\n\ndisabled field न वापरता पाठवत नाही; readonly मूल्य पाठवते पण बदलता येत नाही.\n\nrequired फाइल फील्ड अनिवार्य करतो; सर्व्हरवरच सुरक्षेचे अतिरिक्त उपाय होतात.',
     '<form action="#" method="post">\n  <label>फोटो:\n    <input type="file" name="फोटो" accept="image/*" multiple>\n  </label>\n  <label>जुने मूल्य:\n    <input name="संदर्भ" value="12345" readonly>\n  </label>\n</form>'),
   S('Mini Project',
     'एक संपूर्ण survey form बनवू.\n\nfieldset १: वैयक्तिक — नाव ईमेल input. fieldset २: आवड — select आणि datalist.\n\nfieldset ३: अभिप्राय — textarea. file input एक जोडा.\n\nप्रत्येक गटाला legend. सर्व fields ला label. आवश्यक fields required.\n\nफॉर्म व्यवस्थित, group wise — a11y आणि अनुभव दोन्ही.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>सर्वेक्षण फॉर्म</title>\n  </head>\n  <body>\n    <form action="#" method="post">\n      <fieldset>\n        <legend>तुमची ओळख</legend>\n        <label>नाव: <input name="नाव" required></label>\n        <label>ईमेल: <input type="email" name="ईमेल" required></label>\n      </fieldset>\n      <fieldset>\n        <legend>आवडी</legend>\n        <label>विषय:\n          <select name="विषय">\n            <option>मराठी</option>\n            <option>गणित</option>\n          </select>\n        </label>\n        <label>शहर:\n          <input name="शहर" list="शहरे">\n        </label>\n        <datalist id="शहरे">\n          <option value="पुणे"></option>\n          <option value="मुंबई"></option>\n        </datalist>\n      </fieldset>\n      <fieldset>\n        <legend>अभिप्राय</legend>\n        <label>टिप्पणी:\n          <textarea name="टिप्पणी" rows="4" cols="40"></textarea>\n        </label>\n        <label>फोटो: <input type="file" name="फोटो" accept="image/*"></label>\n      </fieldset>\n      <button type="submit">पाठवा</button>\n    </form>\n  </body>\n</html>'),
  ],
  ['fieldset कशासाठी?', 'select वि datalist फरक?', 'textarea console काय?', 'accept म्हणजे?'],
  [{'q':'फॉर्म गटबद्ध करणारा?','o':['fieldset','legend','div','section'],'c':0},
   {'q':'टाईप करून निवड?','o':['datalist','select','checkbox','radio'],'c':0},
   {'q':'मोठा मजकूर?','o':['textarea','input text','p','output'],'c':0},
   {'q':'select मध्ये वर्ग?','o':['optgroup','group','dropdown','list'],'c':0}],
  {'prompt':'fieldset + select + textarea form बनवा','starterCode':'<fieldset>\n  <legend>ओळख</legend>\n  <label>नाव: <input name="नाव"></label>\n</fieldset>','expectedOutput':'Renders grouped advanced form'},
  ['datalist vs select?', 'readonly vs disabled?'],
  ['html-responsive-images', 'html-tables-advanced'],
  'html-responsive-images', 'html-tables-advanced')

# =====================================================================
# 9. ADVANCED TABLES  (Master 20)
# =====================================================================
L('html-tables-advanced',
  'Advanced Tables - गुंतागुंतीच्या सारण्या', 'thead, tbody, tfoot, caption, colspan, rowspan, scope, colgroup',
  'table, thead, tbody, tfoot, caption, colgroup, col, span, scope, rowspan, colspan, headers.',
  [
   S('1. thead, tbody, tfoot',
     'मोठ्या तक्त्याला तीन भाग: <thead> शीर्षकांच्या ओळी, <tbody> आकडेवारी, <tfoot> सारांश.\n\nthead मध्ये column labels. tbody मधील rows खरा डेटा. tfoot निकाल/oटा.\n\nब्राउझर या तीन गटांशी लांबलचक तक्ता हाताळण्यास सोय करतो.\n\nthead ने स्तंभाचे नाव एकवेळ वाचताना search engine ला समजतं.\n\nतीन गट आल्यावर तक्ता संरचित — वाचन योग्य, styling सोपी.',
     '<table>\n  <thead>\n    <tr><th>महिना</th><th>उत्पन्न</th><th>खर्च</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>जानेवारी</td><td>50000</td><td>30000</td></tr>\n    <tr><td>फेब्रुवारी</td><td>55000</td><td>31000</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>एकूण</td><td>105000</td><td>61000</td></tr>\n  </tfoot>\n</table>'),
   S('2. caption आणि scope',
     '<caption> तक्त्याचं शीर्षक — table टॅगच्या लगेच आत. वाचकाला तक्त्याचा विषय कळतो.\n\nscope="col" सांगतो — ही header सेल संपूर्ण column ला. scope="row" — संपूर्ण row ला.\n\nscope screen reader मधील नेव्हिगेशन सुधारतो — सेल वाचताना तो head सोबत जोडतो.\n\nscreen reader साठी headers attribute — cells मध्ये column header जोडणी.\n\ncaption+scope अनेक थरांची a11y सोय — तक्ता स्पष्ट.',
     '<table>\n  <caption>मासिक खर्च (रुपये)</caption>\n  <thead>\n    <tr><th scope="col">महिना</th><th scope="col">मूल्य</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope="row">जानेवारी</th><td>1000</td></tr>\n    <tr><th scope="row">फेब्रुवारी</th><td>1200</td></tr>\n  </tbody>\n</table>'),
   S('3. colspan आणि rowspan',
     '<colspan> एक सेल अनेक स्तंभांना विस्तारतो; <rowspan> अनेक ओळींना.\n\nउदा. शीर्षक पंक्तीत "संपर्क" तीन स्तंभांवर — colspan="3".\n\nrowspan="2" — एक सेल दोन ओळी उंच. कॅलेंडर, वेगवेगळ्या मांडणीमध्ये उपयोग.\n\nएकूण स्तंभ संख्या समान राहावी — प्रत्येक row ची colspan जोड समान.\n\nगुंता वाढते — काळजीपूर्वक मांडणी करा; संदर्भ ठीक ठेवा.',
     '<table border="1">\n  <tr>\n    <th colspan="2">नाव</th>\n    <th>मोबाइल</th>\n  </tr>\n  <tr>\n    <td>रवि</td>\n    <td>राज</td>\n    <td>12345</td>\n  </tr>\n  <tr>\n    <td rowspan="2">आम्ही</td>\n    <td>पुणे</td>\n    <td>11111</td>\n  </tr>\n  <tr>\n    <td>नाशिक</td>\n    <td>22222</td>\n  </tr>\n</table>'),
   S('4. colgroup आणि col',
     '<colgroup> स्तंभांचे गट देतो — एकाच वेळी सगळ्या स्तंभांना width किंवा styling\n\n<colgroup><col><col span="2"></colgroup> — दुसऱ्या व तिसऱ्याला span २.\n\ncolgroup ने स्तंभांना आकाराचा संदर्भ — table अधिक लवचिक.\n\nखरं styling CSS मध्ये; colgroup आधारीसाठी (width इ.) — नियम स्पष्ट.\n\nअनेक स्तंभांवर समान अट घालायची असेल तेव्हा span ही सवलत.',
     '<table>\n  <colgroup>\n    <col>\n    <col span="2" width="100">\n  </colgroup>\n  <tr><th>सेवा</th><th>किंमत</th><th>काल</th></tr>\n  <tr><td>शिक्षण</td><td>500</td><td>1 मासिक</td></tr>\n</table>'),
   S('5. रिकामे सेल आणि मोबाइल',
     'तक्त्यातील रिकामा सेल — खालील सेल गोंधळ करू नका. रिकामा असेल तर <td> </td> ठेवा.\n\nत्रुटी: > थेट लिहिणं entity मध्ये. योग्य: &nbsp; रिकाम्या सेलमध्ये टाळा.\n\nमोबाइलवर तक्ता अरुंद — पूर्ण रुंदी दिसतेच नाही. CSS उत्तराला पुढे.\n\nsmall तक्त्यांसाठी overflow पडदा; मोठ्या साठी पुनर्व्यवस्था सोय.\n\nरचना तयार ठेवा — वाचक कोणत्याही पडद्यावर कमी न त्रिग्धर.',
     '<table border="1">\n  <tr><th>विषय</th><th>स्थिती</th></tr>\n  <tr><td>मराठी</td><td>पूर्ण</td></tr>\n  <tr><td>गणित</td><td> </td></tr>\n  <tr><td>विज्ञान</td><td>चालू</td></tr>\n</table>'),
   S('6. मोठ्या तक्त्याची a11y',
     'मोठा डेटा तक्ता a11y सह — headers attribute प्रत्येक data cell मध्ये id जोडतो.\n\n<div id="colDate"> जसे each header ला id. मग cell मध्ये headers="colDate".\n\nscreen reader headers ने history संबंध विशद करतो — सेलचा अर्थ संपूर्ण.\n\nमोठ्या मांडणीत scope पुरेसा पडत नाही — तेव्हा headers ची जोडणी.\n\ntsticky header किंवा निश्चित स्तंभ — लांब तक्ता वाचण्यास आधार देतो.',
     '<table>\n  <thead>\n    <tr>\n      <th id="col-city">शहर</th>\n      <th id="col-pop">लोकसंख्या</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td headers="col-city">पुणे</td>\n      <td headers="col-pop">3.5 दशलक्ष</td>\n    </tr>\n  </tbody>\n</table>'),
   S('Mini Project',
     'मासिक अभ्यास वेळापत्रक तक्ता बनवू.\n\ncaption द्या. thead मध्ये दिवस, tbody मध्ये धडे. tfoot सारांश.\n\nएका सेलमध्ये colspan दोन स्तंभांसाठी; दुसर्यात rowspan.\n\nheader cells साठी scope द्या. रिकामा सेल &nbsp; ने नाही तर <td> </td>.\n\nवेळापत्रक सुबक आणि संरचित दिसतं.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>अभ्यास वेळापत्रक</title>\n  </head>\n  <body>\n    <table border="1">\n      <caption>साप्ताहिक अभ्यास</caption>\n      <thead>\n        <tr>\n          <th scope="col">वेळ</th>\n          <th scope="col">सोमवार</th>\n          <th scope="col">मंगळवार</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope="row">सकाळी</th>\n          <td>मराठी</td>\n          <td>गणित</td>\n        </tr>\n        <tr>\n          <th scope="row">संध्याकाळी</th>\n          <td colspan="2">विज्ञान (दोन्ही दिवस)</td>\n        </tr>\n      </tbody>\n      <tfoot>\n        <tr><td colspan="3">एकूण ३ विषय</td></tr>\n      </tfoot>\n    </table>\n  </body>\n</html>'),
  ],
  ['thead आणि tbody मध्ये फरक?', 'scope काय सांगतं?', 'colspan म्हणजे?', 'caption कुठे येतो?'],
  [{'q':'तक्त्याचं शीर्षक?','o':['caption','title','h1','legend'],'c':0},
   {'q':'एकाच सेल २ स्तंभांवर?','o':['colspan="2"','rowspan="2"','span="2"','col="2"'],'c':0},
   {'q':'header cell कशासाठी?','o':['th','td','tr','caption'],'c':0},
   {'q':'डेटा गट कोणता?','o':['tbody','thead','tfoot','caption'],'c':0}],
  {'prompt':'caption + thead + colspan तक्ता बनवा','starterCode':'<table>\n  <caption>माझा तक्ता</caption>\n  <thead><tr><th>नाव</th></tr></thead>\n</table>','expectedOutput':'Renders structured table'},
  ['colspan vs rowspan?', 'headers मध्ये काय?'],
  ['html-forms-advanced', 'html-svg-canvas'],
  'html-forms-advanced', 'html-svg-canvas')

# =====================================================================
# 10. SVG & CANVAS  (Master 21)
# =====================================================================
L('html-svg-canvas',
  'SVG & Canvas - रेखाचित्र वेबवर', 'inline SVG, shapes, canvas element, graphics, script-free markup',
  'svg, circle, rect, line, polygon, text, path, canvas, width, height, graphics.',
  [
   S('1. SVG म्हणजे काय?',
     'SVG म्हणजे Scalable Vector Graphics — आकार, रेषा, आकार यांची गणितीय चित्रे.\n\nप्रत्येक SVG घटक वेक्टर — म्हणजे स्केलवर धार नाही. कितीही मोठा केला तरी स्पष्ट.\n\nएक्सएमएल सारखी संरचना — <svg> मध्ये shapes tags. पेजवरच लिहिता येतं.\n\nलोगो, चिन्हे, नकाशे, ग्राफ — SVG चा व्यापक वापर.\n\nCSS ने class/image सारखी SVG रंग, आकार बदलता येतो — पूर्ण शक्ती.',
     '<svg width="200" height="100" viewBox="0 0 200 100">\n  <rect x="10" y="10" width="80" height="60" fill="teal"></rect>\n  <circle cx="150" cy="50" r="30" fill="orange"></circle>\n</svg>'),
   S('2. SVG आकार',
     'SVG चे मूल आकार: rect, circle, line, polygon, path.\n\nrect साठी x, y, width, height. circle साठी cx, cy, r. line साठी x1, y1, x2, y2.\n\npolygon बिंदूंच्या सूचीने — points="10,10 90,10 50,80". अनेक बाजूचे आकार.\n\nfill रंग, stroke किनार, stroke-width जाडी — व्हिज्युअल गुणधर्म.\n\nसंरचना उघडून पहा: coord मधली प्रत्येक जागा math ने नियंत्रित.',
     '<svg width="300" height="120">\n  <rect x="5" y="20" width="90" height="60" fill="skyblue"></rect>\n  <line x1="120" y1="15" x2="120" y2="95" stroke="black" stroke-width="3"></line>\n  <polygon points="140,95 160,15 180,95" fill="gold"></polygon>\n  <circle cx="230" cy="55" r="25" fill="tomato"></circle>\n</svg>'),
   S('3. text आणि path',
     'SVG मध्ये मजकूरही — <text> element. x, y ने स्थान, font-size label.\n\ntext ॲनिमेशन/लिंक सह वापरता येतो — पण मराठी फॉन्ट समर्थन ब्राउझरभर भिन्न.\n\npath हा सर्वात लवचिक — curves, arcs वेगवेगळ्या खुणा. d attribute मधील commands.\n\nM रेषा सुरू, L रेषा ओढतो, Z बंद करतो. Q किंवा C वक्र.\n\nपहिला path साधा ठेवा; जटिलतेतून शक्यता वाढतात.',
     '<svg width="300" height="120">\n  <text x="10" y="60" font-size="24" fill="darkgreen">मराठी SVG</text>\n  <path d="M 40 90 L 90 30 L 140 90 Z" fill="none" stroke="purple" stroke-width="3"></path>\n</svg>'),
   S('4. canvas — पिक्सेल रचना',
     '<canvas> हा एक रिकामा कॅनव्हास — त्याच्यात काढलेली चित्रे JavaScript ने. HTML मध्ये फक्त element.\n\nपिक्सेल आधारित — प्रत्येक बिंदूचा रंग. SVG सारखा स्केल होत नाही; image सारखा.\n\ncanvas मधील content search engine ला दिसत नाही.\n\ncanvas वरील drawing ला JavaScript हवा; जेव्हा गेम किंवा फोटो editing हवं तेव्हा canvas.\n\ncanvas element मध्ये fallback मजकूर — जुन्या ब्राउझरसाठी.',
     '<canvas width="300" height="150">\n  तुमचा ब्राउझर canvas सपोर्ट करत नाही.\n</canvas>'),
   S('5. SVG वि canvas',
     'कधी कोणते? SVG आकृती नेहमी sharp राहते; canvas रास्टर — दोन्ही वेगळ्या दिशा.\n\nSVG: लोगो, चिन्ह, नकाशे, चार्ट — मजकूर/semantic ची गरज. Scale-able, accessible.\n\nCanvas: गेम, डेटा viz मोठ्या प्रमाणात, फोटो tools — पिक्सेल नियंत्रण.\n\nSVG DOM मध्ये राहतं; canvas paint करतो. अनेक हजार घटकांनंतर canvas वेगवान.\n\nचांगली निवड: SVG साध्या रचनेत, canvas गतीमध्ये. प्रत्येकाचं सामर्थ्य समजून घ्या.',
     '<svg width="200" height="100">\n  <rect width="100%" height="100%" fill="lightgray"></rect>\n  <text x="10" y="55" font-size="20">Vector</text>\n</svg>\n<canvas width="200" height="100"></canvas>'),
   S('6. जागा व्यवस्थापन',
     'SVG चा आकार width/height किंवा viewBox. viewBox प्रमाण राखतो.\n\nwidth="100%" — responsive; पेजच्या रुंदीप्रमाणे स्केल. height auto.\n\ncanvas साठी width/height static — आकार बदल इंटरएक्टिव्ह नव्हे तर re-render.\n\na11y: SVG मध्ये <title> आणि <desc> — screen reader वाचतो. canvas मध्ये fallback text.\n\nदोन्ही graphics HTML मध्येच संरचित होतात; external plugin लागत नाही.',
     '<svg viewBox="0 0 200 100" width="100%">\n  <title>वाढ चार्ट</title>\n  <desc>महिन्यांची वाढ दाखवणारा चार्ट</desc>\n  <rect x="10" y="40" width="40" height="50" fill="blue"></rect>\n  <rect x="70" y="20" width="40" height="70" fill="green"></rect>\n  <rect x="130" y="10" width="40" height="80" fill="red"></rect>\n</svg>'),
   S('Mini Project',
     'एक लहान वाढचा चार्ट SVG ने बनवू.\n\nतीन आडवे रंगीत बार — तिन्ही rect. खाली text labels.\n\ntitle आणि desc a11y साठी. viewBox responsive प्रमाण.\n\nचार्ट साधा, स्पष्ट — आकड्यांची कल्पना नीट उठते.\n\nहा चार्ट कोणत्याही पेजमध्ये modal.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>मासिक वाढ</title>\n  </head>\n  <body>\n    <h1>तीन महिन्यांची वाढ</h1>\n    <svg viewBox="0 0 300 160" width="100%">\n      <title>विक्री वाढ</title>\n      <desc>जानेवारी, फेब्रुवारी, मार्चची तुलना</desc>\n      <rect x="20" y="60" width="70" height="80" fill="skyblue"></rect>\n      <rect x="115" y="40" width="70" height="100" fill="orange"></rect>\n      <rect x="210" y="20" width="70" height="120" fill="green"></rect>\n      <text x="25" y="150" font-size="12">जाने</text>\n      <text x="120" y="150" font-size="12">फेब्रु</text>\n      <text x="215" y="150" font-size="12">मार्च</text>\n    </svg>\n  </body>\n</html>'),
  ],
  ['SVG scala का होते?', 'canvas मध्ये काय काढतं?', 'viewBox काय करतो?', 'a11y साठी canvas काय?'],
  [{'q':'वेक्टर चित्र कोणता?','o':['svg','canvas','img','picture'],'c':0},
   {'q':'canvas मध्ये कोण काढतं?','o':['JavaScript','HTML','CSS','text'],'c':0},
   {'q':'गोल आकार?','o':['circle','rect','line','polygon'],'c':0},
   {'q':'screen reader साठी?','o':['title+desc','width','fill','viewBox'],'c':0}],
  {'prompt':'तीन rect आणि text चा चार्ट बनवा','starterCode':'<svg width="200" height="100">\n  <rect x="10" y="20" width="50" height="60" fill="blue"></rect>\n</svg>','expectedOutput':'Renders SVG bar chart'},
  ['SVG vs canvas निवड?', 'viewBox रहस्य?'],
  ['html-tables-advanced', 'html-text-international'],
  'html-tables-advanced', 'html-text-international')

# =====================================================================
# 11. INTERNATIONAL TEXT  (Master 22)
# =====================================================================
L('html-text-international',
  'International Text - भाषा आणि दिशा', 'lang, dir, bdi, bdo, ruby, wbr, meter, progress, dialog',
  'lang, dir, bdi, bdo, ruby, rt, rp, wbr, meter, progress, dialog.',
  [
   S('1. lang आणि dir',
     'HTML मध्ये भाषा सांगण्यासाठी lang attribute: <html lang="mr">. प्रत्येक भागालाही शक्य.\n\nlang मुळे screen reader योग्य उच्चार, ब्राउझर योग्य spellcheck करतो.\n\ndir attribute मजकुराची दिशा — ltr बाक ते उजवीकडे, rtl उजवीकडून बाक.\n\nमराठी, हिंदी ltr; अरबी, हिब्रू rtl. मिश्र मजकूर दिशांची गरज.\n\nlang आणि dir हे a11y चे पाया — त्यांच्याशिवाय वाचन निर्जीव होतं.',
     '<html lang="mr">\n<p>मराठीतून लिहिलेला मजकूर.</p>\n<p dir="rtl">हा मजकूर उजवीकडून.</p>\n</html>'),
   S('2. bdi आणि bdo',
     'मिश्र दिशेच्या मजकुरात bdi आणि bdo दिशेचे नियंत्रक.\n\n<bdi> isolated text — त्याची दिशा सभोवतालच्या मजकुराच्या प्रभावापासून वेगळी राहते.\n\nउदा. user list मध्ये अरबी अक्षरांची नावे — bdi मध्ये दिशा बरोबर राहते.\n\n<bdo> जबरदस्ती दिशा — dir प्रमाणे ltr/rtl; सजावटीसाठी नको.\n\nमिश्र मजकुरात अचूकता — बाकी पोस्ट दिशेचा परिणाम inputs ने.',
     '<p>वापरकर्ते: <bdi>अली</bdi>, <bdi>विनय</bdi>, <bdi>कात्या</bdi></p>\n<p><bdo dir="rtl">हा मजकूर उलटा दिसेल</bdo></p>'),
   S('3. ruby — उच्चार टीप',
     '<ruby> element मजकुरावर छोटी उच्चार टीप दाखवतो — पूर्व आशियाई भाषांमध्ये सामान्य.\n\n<ruby>शब्द<rt>उच्चार</rt></ruby> — rt मध्ये मुख्यचा उच्चार वर दिसतो.\n\nrp — browsers आधार न करणाऱ्यासाठी कंस — <rp>(</rp><rt>…</rt><rp>)</rp>.\n\nजपानी कानजी, चायनीज — pause यांच्यासाठी ruby मोलाची.\n\nमराठीत कमी, पण भाषेची संधी — HTML वरच्या रचना पोहोचते.',
     '<ruby>संज्ञा<rt>सं-ज्ञा</rt></ruby>\n<ruby>हिंदी<rt>हिं-दी</rt></ruby>'),
   S('4. wbr — ओळ तोडणी ठिकाण',
     '<wbr> मजकुरात ओळ तोडण्याचे ठिकाण खूण करतो — गरज असल्यास तुम्ही.\n\nएकाच ठिकाणी खूप लांब शब्द असेल तर ते अडचणीचं. wbr शिफारस.\n\nwbr हा invisible — फक्त "येथे तोड शक्य" असं सूचन.\n\nदीर्घ URLs, फाइल नावे, संगणक कोड — wbr उपयुक्त.\n\nwbr visible म्हणतात — दिसत नाही, पण रचना सोयीस्कर करतो.',
     '<p>आपलं पेज https://example.com/बहुत-लांब<wbr>-नाव.jpg हे उदाहरण.</p>\n<p>असा दीर्घ शब्द <wbr> ब्रेक <wbr> दिसेल.</p>'),
   S('5. meter आणि progress',
     '<meter> मोजमाप दाखवतो — 0 ते मर्यादेत. उदा. बॅटरी, स्टोरेज.\n\n<meter value="7" min="0" max="10"></meter> — मूल्य, किमान, कमाल.\n\nlow, high, optimum attributes — रंगाचे दर्शक बदलतात.\n\n<progress> प्रगती दाखवतो — काम पूर्ण होण्याची हालचाल. value आणि max.\n\nmeter एक आकड्याची स्थिती; progress कार्याची प्रगती — ही निवड समजून घ्या.',
     '<p>स्टोरेज: <meter value="6" min="0" max="10">60%</meter></p>\n<p>प्रगती: <progress value="40" max="100">40%</progress></p>'),
   S('6. dialog — आधुनिक संवाद',
     '<dialog> element — नवीन HTML5 क्षमता: साधं dialog आणि modal.\n\n<dialog open> मजकूर दाखवतो; बंद करणे JavaScript द्वारे होते.\n\ndialog मध्ये <form method="dialog"> बंद करण्यासाठी बटन sprite.\n\nmodal-like — नवीन स्टाइल, सुरुवात खुली open attribute.\n\nजसजसं HTML5 वाढतं तसतसं dialog साधं UI बनते.',
     '<dialog open>\n  <p>तुमचा संदेश पाठवला गेला.</p>\n  <form method="dialog">\n    <button value="close">ठीक आहे</button>\n  </form>\n</dialog>'),
   S('Mini Project',
     'एक आंतरराष्ट्रीय लेख पेज बनवू.\n\nlang="mr" आधी. एक rtl नमुना bdi मध्ये. एक ruby उदाहरण.\n\nएक wbr दीर्घ शब्द. meter आणि progress दोन्ही.\n\ndialog एक — स्थान नकाशा "पाठवले" संदेश.\n\nसर्व tags समजून पेज तयार — आधुनिक HTML5 चा नमुना.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <title>आंतरराष्ट्रीय मजकूर</title>\n  </head>\n  <body>\n    <h1>भाषांची सोय</h1>\n    <p>मिळालेले: <bdi>علي</bdi>, <bdi>विनय</bdi></p>\n    <ruby>संज्ञा<rt>सं-ज्ञा</rt></ruby>\n    <p>साइट: उदाहरण.वेब<wbr>/भाषा-संदर्भ</p>\n    <p>स्टोरेज <meter value="6" min="0" max="10">60%</meter></p>\n    <p>अपलोड <progress value="45" max="100">45%</progress></p>\n    <dialog open>\n      <p>संदेश पाठवला गेला.</p>\n      <form method="dialog"><button>ठीक आहे</button></form>\n    </dialog>\n  </body>\n</html>'),
  ],
  ['lang कशासाठी?', 'bdi म्हणजे?', 'meter वि progress?', 'ruby कशासाठी?'],
  [{'q':'भाषा कोणत्या attribute ने?','o':['lang','dir','id','class'],'c':0},
   {'q':'उजव्या-बाकी भाषांसाठी?','o':['dir="rtl"','dir="ltr"','lang="rtl"','text="rtl"'],'c':0},
   {'q':'उच्चार टीप?','o':['ruby','rt','bdi','wbr'],'c':0},
   {'q':'कामाची प्रगती?','o':['progress','meter','output','div'],'c':0}],
  {'prompt':'lang + meter + progress पेज बनवा','starterCode':'<html lang="mr">\n<body>\n  <meter value="5" min="0" max="10"></meter>\n</body>\n</html>','expectedOutput':'Renders international text elements'},
  ['dir म्हणजे काय?', 'dialog कसा बंद करतो?'],
  ['html-svg-canvas', 'html-portfolio-project'],
  'html-svg-canvas', 'html-portfolio-project')

# =====================================================================
# 12. PORTFOLIO PROJECT  (Master 23 — capstone)
# =====================================================================
L('html-portfolio-project',
  'Portfolio Page - संपूर्ण प्रकल्प एकत्र', 'Mini Project - Level 2 चा सर्वांगीण सराव',
  'semantic layout, media, meta, SEO, accessibility, responsive images, forms, tables, profile page.',
  [
   S('1. प्रकल्पाची उद्दिष्टे',
     'आता Level 2 चे सर्व ज्ञान एकत्र — एक व्यक्तिमत्त्वाचं portfolio पेज.\n\nउद्दिष्टे: semantic रचना, समृद्ध head/SEO, accessible फॉर्म, responsive image.\n\nपेज स्वतःची ओळख — आवडी, कौशल्ये, संपर्क. वाचकाला तुमची माहिती.\n\nमराठी अभ्यासकांसाठी उदाहरण: संपूर्ण कोड मराठीत.\n\nपुढील धडे सर्व मिळून एक आदर्श वेबपेज बांधतो.',
     '<h1>मराठी वेब शाळा — विद्यार्थी प्रोफाइल</h1>\n<p>हे पेज HTML Level 2 चा सारांश आहे.</p>'),
   S('2. head आणि SEO',
     'पेजचं head व्यावसायिक ठेवा — charset, viewport, description.\n\ntitle एक अचूक: "मराठी वेब — विद्यार्थी प्रोफाइल". description चांगला.\n\nog:title, og:description, og:image — सामाजिक वाटणीसाठी. theme-color आणि favicon.\n\nrobots meta index,follow. canonical मूळ पत्ता.\n\nहा head पेज शोधात उठतं.',
     '<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <meta name="description" content="मराठी वेब विद्यार्थ्याचं प्रोफाइल पेज.">\n  <meta property="og:title" content="मराठी वेब प्रोफाइल">\n  <meta property="og:description" content="आमच्या शाळेचा विद्यार्थी.">\n  <title>मराठी वेब — प्रोफाइल</title>\n</head>'),
   S('3. semantic रचना',
     'header मध्ये नाव आणि nav मधील दुवे. main मध्ये मुख्य मजकूर.\n\narticle — परिचय. section — कौशल्ये. aside — बाजूची माहिती.\n\nfigure — फोटो. figcaption नावापुढे. details — FAQ.\n\nfooter — संपर्क आणि copyright. nav सर्व दुवे व्यवस्थित.\n\nहे सर्व tags साहित्य रचना परिपूर्ण.',
     '<header>\n  <h1>नमस्कार, मी राहुल!</h1>\n</header>\n<nav>\n  <a href="#मुख्य">मुख्य</a> | <a href="#कौशल्ये">कौशल्ये</a> | <a href="#संपर्क">संपर्क</a>\n</nav>\n<main id="मुख्य">\n  <article>\n    <h2>माझी ओळख</h2>\n    <p>मी मराठीतून वेब शिकतो.</p>\n  </article>\n</main>'),
   S('4. responsive image',
     'फोटो responsive — तीन आकार srcset आणि sizes.\n\nपहिला फोटो fetchpriority="high" — लगेच दिसतो. इतर lazy.\n\nalt अर्थपूर्ण — चित्रात कोण, काय. width height स्थिर layout.\n\nWebP आधारावर, जुने fallback नाही.\n\nगॅलरी image त्वरित आणि झीरो effect.',
     '<img src="ravi-900.jpg" alt="राहुलचं प्रोफाइल चित्र"\n     srcset="ravi-400.jpg 400w, ravi-900.jpg 900w, ravi-1400.jpg 1400w"\n     sizes="(max-width: 700px) 100vw, 600px"\n     fetchpriority="high" width="600" height="450">'),
   S('5. accessible फॉर्म',
     'संपर्क फॉर्म — प्रत्येक label, required फील्ड, autocomplete.\n\nfieldset मध्ये नाव/ईमेल group. textarea टिप्पणीसाठी.\n\nselect शहर, datalist कंपन्या. file image आवश्यक नाही.\n\nप्रत्येक input ला id आणि label for जोडणी.\n\nफॉर्म सर्वांसाठी — screen reader, keyboard.',
     '<form action="#" method="post">\n  <fieldset>\n    <legend>संपर्क</legend>\n    <label for="na">नाव:</label>\n    <input id="na" name="नाव" type="text" required autocomplete="name">\n    <label for="em">ईमेल:</label>\n    <input id="em" name="ईमेल" type="email" required autocomplete="email">\n    <label for="no">टिप्पणी:</label>\n    <textarea id="no" name="टिप्पणी" rows="4" cols="40"></textarea>\n  </fieldset>\n  <button type="submit">पाठवा</button>\n</form>'),
   S('6. तक्ता आणि media',
     'कौशल्यांचा तक्ता — caption, thead/tbody, scope.\n\nस्तंभ: कौशल्य, पातळी, वर्षे. meter आत — पातळी दाखवतो.\n\naudio एक — मराठी संगीत. video एक शिकवणी.\n\nप्रत्येक media ला captions/transcript दुवा.\n\nहा भाग पेजची गहिराई दर्शवतो — data आणि media.',
     '<table>\n  <caption>माझी कौशल्ये</caption>\n  <thead>\n    <tr><th scope="col">कौशल्य</th><th scope="col">पातळी</th></tr>\n  </thead>\n  <tbody>\n    <tr><th scope="row">HTML</th><td>प्रगत</td></tr>\n    <tr><th scope="row">CSS</th><td>मध्यम</td></tr>\n  </tbody>\n</table>\n<audio src="mazhe-gane.mp3" controls></audio>'),
   S('Mini Project',
     'संपूर्ण portfolio — सर्व सांग कोड एकत्र लिहा.\n\nhead पूर्ण, semantic body, responsive image, accessible form.\n\nकौशल्य तक्ता, media, footer. सर्व chain भाग जुळेल.\n\nकोड तपासा — validation, spelling, आकार. clean structure.\n\nहा पेज प्रकल्प HTML Level 1+2 चा आरसा.',
     '<!DOCTYPE html>\n<html lang="mr">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <meta name="description" content="मराठी वेब विद्यार्थ्याचं प्रोफाइल.">\n    <title>मराठी वेब — प्रोफाइल</title>\n  </head>\n  <body>\n    <a href="#मुख्य" class="skip-link">मुख्य मजकुराकडे</a>\n    <header>\n      <h1>नमस्कार, मी राहुल!</h1>\n    </header>\n    <nav>\n      <a href="#मुख्य">मुख्य</a> | <a href="#कौशल्ये">कौशल्ये</a> | <a href="#संपर्क">संपर्क</a>\n    </nav>\n    <main id="मुख्य">\n      <figure>\n        <img src="ravi-900.jpg" alt="राहुलचं चित्र"\n             srcset="ravi-400.jpg 400w, ravi-900.jpg 900w"\n             sizes="(max-width: 600px) 100vw, 500px"\n             fetchpriority="high" width="500" height="350">\n        <figcaption>मराठी वेबचा विद्यार्थी</figcaption>\n      </figure>\n      <section id="कौशल्ये">\n        <h2>कौशल्ये</h2>\n        <table>\n          <caption>माझी पातळी</caption>\n          <thead>\n            <tr><th scope="col">कौशल्य</th><th scope="col">पातळी</th></tr>\n          </thead>\n          <tbody>\n            <tr><th scope="row">HTML</th><td>प्रगत</td></tr>\n            <tr><th scope="row">CSS</th><td>मध्यम</td></tr>\n          </tbody>\n        </table>\n      </section>\n      <aside>\n        <p>टीप: हे पेज HTML Level 2 चा सराव आहे.</p>\n      </aside>\n    </main>\n    <section id="संपर्क">\n      <h2>संपर्क करा</h2>\n      <form action="#" method="post">\n        <fieldset>\n          <legend>तुमची माहिती</legend>\n          <label for="na">नाव:</label>\n          <input id="na" name="नाव" type="text" required>\n          <label for="em">ईमेल:</label>\n          <input id="em" name="ईमेल" type="email" required>\n        </fieldset>\n        <button type="submit">पाठवा</button>\n      </form>\n    </section>\n    <footer>\n      <p>&copy; 2026 राहुल — मराठी वेब शाळा</p>\n    </footer>\n  </body>\n</html>'),
  ],
  ['portfolio मध्ये काय काय हवं?', 'responsive image मध्ये कोणती attribute?', 'accessible फॉर्म कसा?', 'semantic रचना का?'],
  [{'q':'पेजची सुरुवात कोणता tag?','o':['DOCTYPE html','header','nav','h1'],'c':0},
   {'q':'search engine साठी कोणता meta?','o':['description','viewport','charset','theme-color'],'c':0},
   {'q':'form मधील फील्डचं नाव?','o':['label','title','span','placeholder'],'c':0},
   {'q':'चित्र लोडिंग वेग?','o':['srcset + sizes','alt','width','copyright'],'c':0}],
  {'prompt':'portfolio पेज — semantic + form + image बनवा','starterCode':'<main id="मुख्य">\n  <h1>माझं प्रोफाइल</h1>\n</main>','expectedOutput':'Renders complete portfolio page'},
  ['प्रकल्पातून काय शिकलो?', 'यापुढे कोणत्या दिशेला जायचं?'],
  ['html-text-international', 'html-semantics'],
  'html-text-international', 'html-semantics')

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
    parts.append("    levelLabel: HTML2_LABEL,")
    parts.append("  },")
    return "\n".join(parts)

def build_file():
    header = 'import type { Tutorial } from "@/data/tutorials";\n'
    header += '\n// === HTML · LEVEL 2 — संरचना, SEO आणि Accessibility ===\n'
    header += 'export const HTML2_LABEL = "HTML · Level 2 — संरचना, SEO आणि Accessibility";\n'
    header += '\nexport const htmlLevel2: Tutorial[] = [\n'
    body = "\n".join(render_lesson(i, l) for i, l in enumerate(lessons))
    return header + body + "];\n"

out = build_file()
open('/data/data/com.termux/files/usr/tmp/opencode/html2_test.ts', 'w', encoding='utf-8').write(out)
r = subprocess.run(['node', '-e', """
const tsc = require('/data/data/com.termux/files/home/marathi-learn-hub/node_modules/typescript/lib/typescript.js');
const src = require('fs').readFileSync('/data/data/com.termux/files/usr/tmp/opencode/html2_test.ts','utf8');
const sf = tsc.createSourceFile('t.ts', src, tsc.ScriptTarget.Latest, true, tsc.ScriptKind.TS);
console.log('diag:', JSON.stringify(sf.parseDiagnostics.map(d=>tsc.flattenDiagnosticMessageText(d.messageText,' ')).slice(0,8)));
"""], capture_output=True, text=True)
print("TSC stdout:", r.stdout.strip())
print("TSC stderr:", r.stderr.strip())
print("lessons:", len(lessons))
shutil.copy('/data/data/com.termux/files/usr/tmp/opencode/html2_test.ts',
            '/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/html-level2.ts')
print("WROTE html-level2.ts, lines:", len(out.split(chr(10))))