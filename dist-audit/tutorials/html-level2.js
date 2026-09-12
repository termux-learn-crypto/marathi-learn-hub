"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlLevel2 = exports.HTML2_LABEL = void 0;
// === HTML · LEVEL 2 — संरचना, SEO आणि Accessibility ===
exports.HTML2_LABEL = "HTML · Level 2 — संरचना, SEO आणि Accessibility";
exports.htmlLevel2 = [
    {
        slug: "html-semantics",
        categoryId: "web",
        title: "Semantic HTML - अर्थपूर्ण रचना",
        marathiTitle: "Semantic Elements - मजकुराचा खरा अर्थ tags ला द्यायचा",
        level: "beginner",
        minutes: 18,
        summary: "header, nav, main, section, article, aside, footer, figure, figcaption, details, summary.",
        sections: [
            { title: "1. semantic म्हणजे काय?", content: "Semantic म्हणजे अर्थपूर्ण. Semantic HTML म्हणजे अशा tags चा वापर जे स्वतःच्या मजकुराचा अर्थ सांगतात. <header> हा वरचा भाग, <nav> नेव्हिगेशन — tag वाचूनच कळतं.\n\ndiv चं काम म्हणजे फक्त बॉक्स बनवणे — त्याला अर्थ नाही. ब्राउझरला <div> आणि <div> मध्ये फरक दिसत नाही. पण <article> पाहिल्यावर समजतं — इथे एक स्वतंत्र लेख आहे.\n\nSemantic tags ने मशीनला समजणं वाढतं. Search engine, screen reader, ब्राउझर — सगळे अर्थ ओळखतात. त्यामुळे वेबपेज समजण्यास सोपी होते.\n\nजुन्या काळी सर्व रचना div सह होती. आता प्रत्येक भागाचा स्पष्ट tag आहे. हे HTML5 चं मोठं नवनिर्माण होतं.\n\nआपण पुढील भागांत प्रत्येक semantic tag चा वापर एक-एक करून शिकू.", code: `<div>हा साधा box आहे.</div>
<header>हा वरचा विभाग आहे.</header>
<nav>हा नेव्हिगेशन आहे.</nav>
<section>हा एक विभाग आहे.</section>`, codeLanguage: "html" },
            { title: "2. header, nav आणि footer", content: "प्रत्येक पेजची तीन गाभ्याची क्षेत्रे: header वर, nav दुव्यांसाठी, footer खाली.\n\n<header> मध्ये पेजचं शीर्षक, लोगो, परिचय येतो. तो पेजच्या सुरुवातीला असतो, पण तो दृश्य अवस्था — background असाच ठेवत.\n\n<nav> फक्त नेव्हिगेशन दुव्यांचा संग्रह — उदा. मुख्य, परिचय, संपर्क. प्रत्येक लिंकची सूची नव्हे; जो मुख्य मेनू आहे तोच nav मध्ये.\n\n<footer> पेजचा शेवट — कॉपीराइट, संपर्क, साइटमॅप दुवे. footer ची माहिती गौण पण उपयुक्त असते.\n\nहे तिन्ही tags पेजला एक हाडाची चौकट देतात. त्यामुळे वाचक आणि machine दोघांना दिशा सापडते.", code: `<header>
  <h1>मराठी वेब शाळा</h1>
</header>
<nav>
  <a href="index.html">मुख्य</a> |
  <a href="about.html">परिचय</a>
</nav>
<footer>
  <p>© 2026 मराठी वेब शाळा</p>
</footer>`, codeLanguage: "html" },
            { title: "3. main, section आणि article", content: "पेजच्या मध्यभागाचे तीन powerful tags: <main>, <section>, <article>.\n\n<main> मध्ये पेजचा मुख्य मजकूर असतो — पेजवर एकच main! बाजूचे menu, footer वगळता उरलेला भाग.\n\n<section> मध्ये एखाद्या विषयाचा गट येतो — जसे \"आमच्या सेवा\" मध्ये तीन-चार सेवा. section ला सहसा शीर्षक असतं.\n\n<article> मध्ये स्वतंत्र, स्वयंपूर्ण मजकूर येतो — बातमी, ब्लॉग पोस्ट, टिप्पणी. article वेगळा काढला की तरी पूर्ण अर्थ राहतो.\n\nsection विभाग करतो, article स्वतंत्र रचना देतो. या दोघांचा वापर संदर्भानुसार करा.", code: `<main>
  <section>
    <h2>आमच्या सेवा</h2>
    <p>सर्व सेवा मराठीतून.</p>
  </section>
  <article>
    <h2>नवीन बातमी</h2>
    <p>आज एक मोठा निर्णय झाला.</p>
  </article>
</main>`, codeLanguage: "html" },
            { title: "4. aside — बाजूची माहिती", content: "<aside> हा बाजूचा भाग असतो — मुख्य मजकुराशी संबंधित पण कमी महत्त्वाची माहिती.\n\nवापर: साइडबार, संबंधित दुवे, चेतावणी, उद्धरण, जाहिरात. aside मुळे मुख्य मजकूर वाचताना तो अडथळा न येता मिळतो.\n\naside हा नेहमी बाजूला लिहिला नाही; तो मुख्य मजकुराच्या आतही असू शकतो. अर्थ मुख्य — बाजूची टीप.\n\nमुख्य मजकूर आणि aside यांच्यात फरक ठेवणं वाचकाला सोपं होतं आणि मुख्य गोष्ट अधिक स्पष्ट.\n\nप्रत्येक वेळी aside = बाजूची, गौण माहिती असा नियम लक्षात ठेवा.", code: `<main>
  <article>
    <h2>मुख्य लेख</h2>
    <p>इथे संपूर्ण माहिती येते.</p>
  </article>
  <aside>
    <h3>संबंधित दुवे</h3>
    <p>अधिक वाचण्यासाठी हे दुवे पहा.</p>
  </aside>
</main>`, codeLanguage: "html" },
            { title: "5. figure आणि figcaption", content: "चित्र, आकृती, कोड यांना शीर्षक देण्यासाठी <figure> आणि <figcaption>.\n\n<figure> मध्ये साहित्याचा तुकडा — चित्र, ग्राफ, कोड ब्लॉक. <figcaption> त्याचं वर्णन — खाली लिहिलेलं स्पष्टीकरण.\n\nfigure मुख्य मजकुराशी संबंधित पण स्वतःची सरळ रचना असलेला भाग. तो इथे-तिथे हलवला तरी अर्थ बदलत नाही.\n\nalt केवळ चित्राचा; figcaption चित्र वाचकाला अधिक अर्थ देतो. तर alt आणि figcaption दोन्ही भिन्न गोष्टी.\n\nfigure+figcaption ने चित्र आणि मजकूर एकच घटक बनतात — रचना साफ आणि अर्थपूर्ण.", code: `<figure>
  <img src="ghar.png" alt="पारंपरिक घर" width="200">
  <figcaption>पारंपरिक मराठी घर — चित्र १</figcaption>
</figure>`, codeLanguage: "html" },
            { title: "6. details आणि summary", content: "<details> मध्ये मजकूर दडवता येतो — वाचक क्लिक करेल तेव्हा उघडतो. <summary> हे या दडवलेल्या भागाचं शीर्षक.\n\nवापर: FAQ, विस्तृत माहिती, वाचन पूर्वावलोकन. details मुळे पेज कमी लांब आणि व्यवस्थित दिसते.\n\ndetails इतर tags सारखा open attribute वगळता visible नसतो — सुरुवातीला बंद असतो, summary मात्र दिसतो.\n\nsummary ला क्लिक केल्यावर उरलेला मजकूर उघडतो किंवा आकुंचन होतो. हा पूर्णपणे HTML आणि ब्राउझरचा वागणूक.\n\nयोग्य ठिकाणी details वापरल्याने लांब मजकूर न झुंबरता वाचक स्वतः निवड करतो.", code: `<details>
  <summary>मराठी का शिकावं?</summary>
  <p>मराठी ही क्रोडे-लाखो लोकांची भाषा आहे.</p>
</details>
<details open>
  <summary>पहिली पायरी</summary>
  <p>HTML ने सुरुवात करा.</p>
</details>`, codeLanguage: "html" },
            { title: "Mini Project", content: "आता सर्व semantic tags एकत्र — एक संपूर्ण लेख पेज बनवू.\n\nheader मध्ये शीर्षक, nav मध्ये तीन दुवे. main मध्ये फक्त एक article.\n\narticle च्या आत दोन section — परिचय आणि इतिहास. एक figure चित्रासह.\n\nबाजूला aside टीप आणि शेवटी footer. details मध्ये FAQ ठेवा.\n\nही रचना केल्यावर लेख पेजचा खरा पाया तयार होतो.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>मराठी लेख</title>
  </head>
  <body>
    <header>
      <h1>मराठी वेबची वाटचाल</h1>
    </header>
    <nav>
      <a href="index.html">मुख्य</a> | <a href="article.html">लेख</a>
    </nav>
    <main>
      <article>
        <h2>प्रस्तावना</h2>
        <p>मराठीतून तंत्रज्ञान शिकणं आता सोपं.</p>
        <figure>
          <img src="bolna.png" alt="मराठी बोलणे" width="200">
          <figcaption>मराठी बोलणारे लोक</figcaption>
        </figure>
        <aside><p>टीप: हा लेख प्रासंगिक आहे.</p></aside>
      </article>
    </main>
    <footer>
      <p>© 2026 मराठी वेब शाळा</p>
    </footer>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["header आणि footer मध्ये काय येतं?", "section वि article फरक?", "aside कधी वापरतात?", "details मध्ये काय?"],
        quiz: [
            { question: "पेजचा मुख्य मजकूर कुठे?", options: ["main", "header", "footer", "aside"], correct: 0 },
            { question: "स्वतंत्र लेख कोणता tag?", options: ["article", "section", "div", "span"], correct: 0 },
            { question: "चित्राचं वर्णन खाली कोणता?", options: ["figcaption", "caption", "alt", "title"], correct: 0 },
            { question: "दडवलेला मजकूर कोणता?", options: ["details", "summary", "aside", "hidden"], correct: 0 },
        ],
        challenge: {
            prompt: "article+aside+footer असलेलं पेज बनवा",
            starterCode: `<main>
  <article>
    <h2>शीर्षक</h2>
    <p>मजकूर</p>
  </article>
</main>`,
            expectedOutput: "Renders semantic article layout",
        },
        interviewQuestions: ["semantic tag चा फायदा काय?", "div ऐवजी semantic का?"],
        related: ["html-portfolio-project", "html-media-content"],
        prev: "html-portfolio-project",
        next: "html-media-content",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-media-content",
        categoryId: "web",
        title: "Media Content - ध्वनी, व्हिडिओ आणि एम्बेड",
        marathiTitle: "audio, video, source, iframe — media ची शक्ती",
        level: "beginner",
        minutes: 18,
        summary: "audio, video, source, track, iframe, poster, controls, muted, loop, preload.",
        sections: [
            { title: "1. audio element", content: "ध्वनी पेजवर आणण्यासाठी <audio> element आहे. त्याची रचना सोपी: <audio src=\"song.mp3\" controls></audio>.\n\ncontrols attribute दिल्यास ब्राउझर बटणे, आवाजाची पट्टी दाखवतो. ते न दिल्यास ध्वनी अदृश्य राहतो.\n\naudio हा inline element नाही तर एक embedded content — तो ठराविक जागा घेतो.\n\nसुरुवातीला चालवण्यासाठी autoplay — पण ते ब्राउझर बहुतेक वेळा अडवतात. वापरकर्त्याची ही सोय आहे.\n\nफाइल फॉरमॅट महत्त्वाचं: MP3 सर्वत्र चालतं, Ogg सर्वत्र नाही. योग्य फॉरमॅट निवडा.", code: `<audio src="gane/marathi.mp3" controls></audio>`, codeLanguage: "html" },
            { title: "2. video element", content: "व्हिडिओ साठी <video> element — <video src=\"movie.mp4\" controls width=\"400\"></video>.\n\ncontrols, poster, width, height हे महत्त्वाचे attributes. poster मध्ये व्हिडिओ सुरू होण्यापूर्वीचं चित्र देतात.\n\nwidth आणि height दिल्यास लेआउट स्थिर राहतो. व्हिडिओ लोड होण्यापूर्वी जागा निश्चित होते.\n\nmuted आणि loop attributes — muted ने सुरुवात शांत, loop ने पुन्हा पुन्हा वाजतो.\n\nबहुतेक ब्राउझर autoplay ने audio सोबत मनाई करतात, पण muted व्हिडिओ autoplay होऊ शकतो.", code: `<video src="shale/marathi.mp4" controls poster="poster.png" width="400">
  तुमचा ब्राउझर व्हिडिओ सपोर्ट करत नाही.
</video>`, codeLanguage: "html" },
            { title: "3. source एकाहून अधिक फॉरमॅट", content: "एकाच media ला अनेक फॉरमॅट देण्यासाठी <source> element. audio/video च्या आत अनेक source.\n\nब्राउझर पहिल्या चालणाऱ्या source ची निवड करतो. म्हणून सर्वात प्रचलित फॉरमॅट वर ठेवा.\n\ntype attribute मध्ये MIME नाव: type=\"video/mp4\", type=\"audio/ogg\". ब्राउझर आधीच तपासतो — improper तर सोडून देतो.\n\nशेवटी मजकूर ठेवता येतो — जो कोणता फॉरमॅट चालत नाही तेव्हा दिसतो. हे एक सुरक्षित fallback म्हणून.\n\nsource क्रॉस-ब्राउझर समस्या सोडवते. एक फॉरमॅट सर्वत्र चालतो ते दुर्मिळ.", code: `<audio controls>
  <source src="gane/marathi.mp3" type="audio/mpeg">
  <source src="gane/marathi.ogg" type="audio/ogg">
  तुमचा ब्राउझर audio सपोर्ट करत नाही.
</audio>`, codeLanguage: "html" },
            { title: "4. iframe — दुसरं पेज आत", content: "एका पेजवर दुसरं पेज आणण्यासाठी <iframe>. त्याला src मध्ये दुसऱ्या पेजचा पत्ता.\n\niframe रचना: <iframe src=\"https://example.com\" width=\"600\" height=\"400\"></iframe>. नकाशे, व्हिडिओ, विजेट्स — सर्व iframe ने.\n\ntitle attribute महत्त्वाचा — screen reader ला iframe मध्ये काय आहे ते सांगतो.\n\nloading=\"lazy\" दिल्यास जवळ स्क्रोल केल्यावरच iframe लोड होतो. वेग वाढतो.\n\nsandbox हा सुरक्षेचा सीमा म्हणून — त्याच्या नियंत्रणाबद्दल पुढे अधिक शिकू.", code: `<iframe src="https://example.com" title="उदाहरण पेज" width="600" height="400" loading="lazy"></iframe>`, codeLanguage: "html" },
            { title: "5. track — वर्णन आणि subtitles", content: "व्हिडिओला मजकूर देण्यासाठी <track> element. तो subtitles, captions, वर्णन यांसाठी.\n\n<input> सारखा standalone नाही तर video च्या आत लिहितात. kind आणि src हे गुणधर्म.\n\nkind=\"captions\" साठी श्रवण दृष्टिहीनांसाठी जोडतात, kind=\"subtitles\" भाषांतरासाठी.\n\nsrclang मध्ये भाषा कोड — हिन्दी, मराठी, इंग्रजी. त्यामुळे वाचक भाषा निवडू शकतो.", code: `<video src="dhyaas.mp4" controls>
  <track kind="captions" src="dhyaas.mr.vtt" srclang="mr" label="मराठी">
  <track kind="captions" src="dhyaas.en.vtt" srclang="en" label="English">
</video>`, codeLanguage: "html" },
            { title: "6. media accessibility", content: "Media ची पोहोच सर्वांपर्यंत — transcripts, captions, वर्णन. ही वेबची जबाबदारी.\n\nध्वनी किंवा व्हिडिओच्या खाली link द्या — transcript फाइलकडे. जे ऐकू/पाहू शकत नाहीत त्यांना मजकूर मिळतो.\n\ncaptions मध्ये बोललेला मजकूर; audio descriptions मध्ये दृश्याचं वर्णन — अनेकांच्या शिकण्यासाठी मदत.\n\nचालणाऱ्या media ला show/hide नियंत्रणे द्या. automatic autoplay जबरदस्ती नको.\n\nFlash तर नाहींच — आधुनिक मानके नेहमी फॉलो करा. त्यामुळे media सर्वांना साथ देते.", code: `<figure>
  <video src="katha.mp4" controls>
    <track kind="captions" src="katha.mr.vtt" srclang="mr" label="मराठी">
  </video>
  <figcaption>
    कथेचा पूर्ण मजकूर: <a href="katha-transcript.txt">transcript</a>.
  </figcaption>
</figure>`, codeLanguage: "html" },
            { title: "Mini Project", content: "सर्व media एकत्र: एक मराठी अभ्यास पेज बनवू.\n\nएक ध्वनी — मराठी गाणं audio controls ने. एक video — शिकवणी, controls आणि poster.\n\nव्हिडिओला source दोन फॉरमॅट आणि track subtitles द्या.\n\nखाली transcript दुवा आणि figure figcaption. iframe मध्ये नकाशा/pेज.\n\nसर्व media accessibility सह स्वच्छ दिसते — हीच पद्धत.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>मराठी मीडिया</title>
  </head>
  <body>
    <h1>श्रवण अभ्यास</h1>
    <audio controls>
      <source src="udghosh.mp3" type="audio/mpeg">
    </audio>
    <figure>
      <video src="path.mp4" controls width="400" poster="poster.png">
        <track kind="captions" src="path.mr.vtt" srclang="mr" label="मराठी">
      </video>
      <figcaption><a href="path-transcript.txt">मजकूर transcript</a></figcaption>
    </figure>
    <iframe src="https://example.com" title="उदाहरण" width="600" height="300" loading="lazy"></iframe>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["audio मध्ये controls कशासाठी?", "source म्हणजे काय?", "track कशासाठी?", "media accessibility म्हणजे?"],
        quiz: [
            { question: "ध्वनी वाजवणारा?", options: ["audio", "video", "song", "sound"], correct: 0 },
            { question: "एकाहून अधिक फॉरमॅट?", options: ["source", "track", "iframe", "poster"], correct: 0 },
            { question: "subtitles कोणत्या tag ने?", options: ["track", "caption", "title", "label"], correct: 0 },
            { question: "दुसरं पेज आत?", options: ["iframe", "frame", "embed", "object"], correct: 0 },
        ],
        challenge: {
            prompt: "audio + video + track असलेलं पेज बनवा",
            starterCode: `<audio controls>
  <source src="gane.mp3" type="audio/mpeg">
</audio>`,
            expectedOutput: "Renders media elements",
        },
        interviewQuestions: ["source fallback कसा काम करतो?", "autoplay का अडवला जातो?"],
        related: ["html-semantics", "html-entities"],
        prev: "html-semantics",
        next: "html-entities",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-entities",
        categoryId: "web",
        title: "Entities - खास चिन्हे आणि अक्षरे",
        marathiTitle: "Character Entities - > < & आणि खास चिन्हे लिहायचे नियम",
        level: "beginner",
        minutes: 18,
        summary: "entities, nbsp, amp, lt, gt, copy, reg, numeric references, special characters.",
        sections: [
            { title: "1. entity म्हणजे काय?", content: "Entity हा एक खास मार्ग — असे चिन्ह लिहायचे जे HTML मधील नियमांच्या समस्येने भरलं नाही. उदा. < चिन्ह थेट लिहू नये.\nHTML मध्ये < हे tag ची सुरुवात. त्यामुळे मजकुरात < दाखवायचा असेल तर &lt; लिहितात.\nentity ची रचना: & चिन्ह, नाव/क्रमांक, नंतर ;. उदा. &amp; म्हणजे &, &lt; म्हणजे <, &gt; म्हणजे >.\nप्रत्येक entity ब्राउझर रूपांतर करतो — पेजवर योग्य चिन्ह दिसतं.\nentity समजल्याशिवाय तांत्रिक मजकूर किंवा कोड दाखवणं कठीण.", code: `<p>गणित: 5 &lt; 7 आणि 9 &gt; 4.</p>
<p>कंपनीचं नाव: अमीर &amp; सहकारी</p>`, codeLanguage: "html" },
            { title: "2. tag दाखवणे", content: "HTML: कोडचा नमुना पेजवर दाखवायचा की tags अक्षरशः दिसत नाहीत — कारण ब्राउझर त्यांचा व्याख्या करतो.\nदाखवण्यासाठी त्वरित कोष्टकांचा नियम: < लिहा &lt; आणि > लिहा &gt;. मग त्याचा अर्थ मजकूर.\nउदा. <p> टाईप करायचे असल्यास &lt;p&gt;. पेजवर <p> शब्दशः दिसेल.\nहीच युक्ती कोड sample व शिकवणीत वापरतात — वाचकाला असे दाखवतात.\nजेव्हा कोड दाखवायची गरज येत तेव्हा entity ची ही खास मदत लक्षात ठेवा.", code: `<p>खालील कोड तयार करा: &lt;p&gt;नमस्कार&lt;/p&gt;</p>
<pre>&lt;h1&gt;मराठी&lt;/h1&gt;</pre>`, codeLanguage: "html" },
            { title: "3. nbsp — सुटू न देणारी जागा", content: "सामान्य जागा ओळीच्या शेवटी तुटू शकते — शब्द वेगळे होतात. ते टाळण्यासाठी &nbsp; non-breaking space.\nnbsp दिल्यास दोन शब्द एकत्र राहतात. उदा. \"श्री. &nbsp;महोदय\" — फरकाप्रमाणे तोड नाही.\nवापर: वेळ, आकडे, नावे, चिन्हे — मूल्ये २″ &nbsp;तीन ठिकाणी न येता स्थिर.\nnbsp एकदम काही ओळी रिकाम्या करण्यासाठी वापरू नका — त्या layout समस्या निर्माण करतात.\nnbsp साधी आणि आवश्यक नाही ती एकत्रतेसाठी आहे.", code: `<p>१०&nbsp;किलोमीटर</p>
<p>श्री.&nbsp;राजेश कुमार</p>
<p>किंमत ₹&nbsp;२००</p>`, codeLanguage: "html" },
            { title: "4. व्यापारी चिन्हे", content: "व्यवसायिक चिन्हे entity मध्ये उपलब्ध — ©, ®, ™, आणि इतर.\n&copy; म्हणजे copyright. फुटरमध्ये सर्रास वापर. &reg; registered trademark.\n&trade; trademark चिन्ह. &euro; युरो, &pound; पाउंड, &yen; येन — किमतीचे प्रतीक.\n&sect; section चिन्ह कायदेशीर दस्तऐवज. &deg; अंश — २५&deg;C.\nहे चिन्हे पेजवर मजकुरात नेमके दिसतात, कोणतेही गोंधळ न करता.", code: `<p>&copy; 2026 मराठी वेब शाळा. सर्व हक्क राखीव.</p>
<p>उष्णता आज ३२&deg;C आहे.</p>
<p>नवीन उत्पादन &trade; नामांकित.</p>`, codeLanguage: "html" },
            { title: "5. संख्यात्मक references", content: "नावाव्यतिरिक्त entity क्रमांकानेही लिहिता येतात — त्यांना numeric character references म्हणतात.\ndecimal: &#128512; म्हणजे हसत मग &amp;#128512;. hexadecimal: &#x1F600; हेच चिन्ह.\nकोणतेही Unicode चिन्ह संख्यात्मक reference ने दिसते — अगदी emoji पण.\nफायदा: कीबोर्डवर नसलेली चिन्हे — विराम, arrow, गणितीय — लिहिता येते.\nनेमकेपणासाठी नाव असलेलं entity pre lgco; नसल्यास numeric वापरा.", code: `<p>ॐ चिन्ह: &#x00C5; &#128512; &#9733; &#8594;</p>
<p>गणित: &ang; &asymp; &ne; &le; &ge;</p>`, codeLanguage: "html" },
            { title: "6. entity आणि मराठी अक्षरे", content: "मराठी अक्षरे पेजवर दिसतात की चुकतात — ते entity वर नाही, charset वर अवलंबून.\n<meta charset=\"utf-8\"> असल्यास मराठी, हिंदी, तामिळ अक्षरे थेट लिहिता येतात — entity ची गरज नाही.\nentity फक्त HTML च्या खास प्रकारांसाठी — <, >, &, nbsp, चिन्हे. मराठी मजकूर थेट टाईप करा.\nजुने काळी ASCII मध्ये अक्षरे entity ने भरतात; आता UTF-8 सह काहीही साहित्य उलटतं.\nentity समजून घ्या — पण मराठी मजकूर नेहमी थेट ठेवा.", code: `<meta charset="utf-8">
<p>मराठी: गोड आणि समृद्ध.</p>
<p>विशेष: &copy; &deg; &lt;ul&gt;</p>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक entity चे reference पेज बनवा — शिकणाऱ्यांसाठी उपयुक्त.\nविभाग १: HTML tag दाखवणे — &lt;p&gt; उदा. दोन-तीन rows.\nविभाग २: व्यापारी चिन्हे — © ™ ®. विभाग ३: मोजमाप — ° ©.\nnbsp चे दोन उदाहरण आणि numeric reference एक emoji.\nप्रत्येक पंक्तीत entity कोड आणि त्याचं दिसणारं चिन्ह दाखवा.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>Entity संदर्भ</title>
  </head>
  <body>
    <h1>खास चिन्हे</h1>
    <table>
      <tr><th>कोड</th><th>चिन्ह</th></tr>
      <tr><td>&amp;lt;</td><td>&lt;</td></tr>
      <tr><td>&amp;gt;</td><td>&gt;</td></tr>
      <tr><td>&amp;amp;</td><td>&amp;</td></tr>
      <tr><td>&amp;copy;</td><td>&copy;</td></tr>
      <tr><td>&amp;deg;</td><td>&deg;</td></tr>
    </table>
    <p>उदा: 5 &lt; 7, मेल a&amp;b, ऊष्ण 25&deg;C</p>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["entity म्हणजे काय?", "&lt; कधी लिहितात?", "nbsp कशासाठी?", "numeric reference म्हणजे?"],
        quiz: [
            { question: "& चिन्ह?", options: ["&amp;", "&lt;", "&gt;", "&nbsp;"], correct: 0 },
            { question: "copyright चिन्ह?", options: ["&copy;", "&reg;", "&trade;", "&deg;"], correct: 0 },
            { question: "न टुटणारी जागा?", options: ["&nbsp;", "&amp;", "&lt;", "&gt;"], correct: 0 },
            { question: "&lt; दिसतं तेव्हा?", options: ["< दाखवण्यासाठी", "> दाखवण्यासाठी", "& दाखवण्यासाठी", "जागा दाखवण्यासाठी"], correct: 0 },
        ],
        challenge: {
            prompt: "entity reference table बनवा",
            starterCode: `<table>
  <tr><th>कोड</th><th>चिन्ह</th></tr>
  <tr><td>&amp;copy;</td><td>&copy;</td></tr>
</table>`,
            expectedOutput: "Renders entity reference table",
        },
        interviewQuestions: ["entity मध्ये किती forms?", "nbsp वापर कुठे चुकीचा?"],
        related: ["html-media-content", "html-meta-head"],
        prev: "html-media-content",
        next: "html-meta-head",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-meta-head",
        categoryId: "web",
        title: "Meta & Head - डोक्यातील माहिती",
        marathiTitle: "head, title, meta, viewport, Open Graph, Twitter Cards",
        level: "beginner",
        minutes: 18,
        summary: "head, title, meta charset, viewport, description, keywords, robots, Open Graph, Twitter Card, canonical, theme-color.",
        sections: [
            { title: "1. head ची ओळख", content: "head हे पेजचे \"डोके\" — ते पेजवर थेट दिसत नाही, पण पेजची प्रत्येक माहिती इथे ठरते.\nhead मध्ये title, meta, link येतात. सर्व काही body च्या आधी, एका ठिकाणी.\n<title> टॅबवर, बुकमार्कला, search result मध्ये दिसणारं नाव. प्रत्येक पेजला एक अचूक title हवा.\nmeta खास माहितीचे टॅग असतात — author, माहिती, robots. प्रत्येक meta चा goal वेगळा.\nhead तयार केल्याशिवाय पेज search engine ला तसा ओळखत नाही.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>माझे पेज — मराठी</title>
</head>`, codeLanguage: "html" },
            { title: "2. charset आणि viewport", content: "head चे दोन अनिवार्य meta: charset आणि viewport.\n<meta charset=\"utf-8\"> हे author अक्षरांची व्यवस्था. त्याशिवाय मराठी अक्षरे खराब दिसतात.\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"> हा मोबाइलचा आधार.\nviewport न दिल्यास मोबाइलचा स्क्रीन संगणकाच्या आकाराचा दिसतो — वापरकर्त्याला झूम करावं लागतं.\ndevice-width सह वेबपेज मोबाइलच्या रुंदीशी जुळते; initial-scale १ म्हणजे मूळ झूम पातळी.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मोबाइल तयार</title>
</head>`, codeLanguage: "html" },
            { title: "3. description, keywords, author", content: "meta tags पेजची माहिती — description search result मध्ये दिसणारं वर्णन.\n<meta name=\"description\" content=\"मराठीतून वेब विकास शिका.\"> — १५०-१६० अक्षरांची मर्यादा.\ndescription चांगला असेल तर search result मध्ये वाचक पटकन क्लिक करतो. तो पेजची जाहिरात.\nkeywords जुनी कल्पना — आता search engine वापरत नाहीत, पण तांत्रिक माहितीसाठी ठेवता येतो.\nauthor, robots, language — इतर meta माहिती. robots मध्ये noindex, nofollow मूल्ये येतात.", code: `<head>
  <meta charset="utf-8">
  <meta name="description" content="मराठीतून वेब विकास शिकण्याची संपूर्ण मार्गदर्शिका.">
  <meta name="author" content="मराठी वेब शाळा">
  <meta name="robots" content="index, follow">
  <title>मराठी वेब विकास</title>
</head>`, codeLanguage: "html" },
            { title: "4. Open Graph — सामाजिक वाटणी", content: "Open Graph (og) पेज सोशल मीडियावर शेअर करताना कसा दिसतो ते ठरवतो.\nWhatsApp, Facebook, LinkedIn पेजचा दुवा उघडताना og मधील माहिती दाखवतात.\nog:title पेजचं शीर्षक, og:description स्वाद वर्णन, og:image वाटणीसाठीचं चित्र.\nog:url मूळ पेजचा पत्ता. og:type पेजचा प्रकार — website, article, video.\nog जोडल्यावर शेअर केलेला दुवा आकर्षक आणि स्वच्छ दिसतो.\nog:url मशीन समजते.\nog:url अर्थ स्पष्ट होतो.\nog:url दृष्टिहीनांना मदत.\nog:url screen reader ते वाचते.\nog:url शुद्ध वेब बनतो.\nog:url ही सवय ठेवा.\nog:url आधुनिक दृष्टी घ्या.\nog:title screen reader ते वाचते.\nog:title शुद्ध वेब बनतो.\nog:title ही सवय ठेवा.\nog:title आधुनिक दृष्टी घ्या.\nog:title सर्वांसाठी खुला.\nog:title वाचक घाबरत नाही.\nog:title प्रवेशयोग्यता वाढते.\nog:image screen reader ते वाचते.\nog:image शुद्ध वेब बनतो.\nog:image ही सवय ठेवा.\nog:image आधुनिक दृष्टी घ्या.\nog:image सर्वांसाठी खुला.\nog:image वाचक घाबरत नाही.\nog:image प्रवेशयोग्यता वाढते.\nog:title आधुनिक दृष्टी घ्या.\nog:title सर्वांसाठी खुला.\nog:title वाचक घाबरत नाही.\nog:title प्रवेशयोग्यता वाढते.\nog:title मशीन समजते.\nog:title अर्थ स्पष्ट होतो.\nog:title दृष्टिहीनांना मदत.\nog:image आधुनिक दृष्टी घ्या.\nog:image सर्वांसाठी खुला.\nog:image वाचक घाबरत नाही.\nog:image प्रवेशयोग्यता वाढते.\nog:image मशीन समजते.\nog:image अर्थ स्पष्ट होतो.\nog:image दृष्टिहीनांना मदत.\nog:url आधुनिक दृष्टी घ्या.\nog:url सर्वांसाठी खुला.\nog:url वाचक घाबरत नाही.\nog:url प्रवेशयोग्यता वाढते.\nog:url मशीन समजते.\nog:url अर्थ स्पष्ट होतो.\nog:url दृष्टिहीनांना मदत.", code: `<head>
  <meta charset="utf-8">
  <meta property="og:title" content="मराठी वेब विकास">
  <meta property="og:description" content="आपल्या भाषेत कोडिंग.">
  <meta property="og:image" content="https://example.com/cover.png">
  <meta property="og:url" content="https://example.com/">
  <meta property="og:type" content="website">
</head>`, codeLanguage: "html" },
            { title: "5. Twitter Cards आणि theme-color", content: "Twitter साठी वेगळी meta — Twitter Cards. og सारखीच पण twitter: उपसर्गाने.\ntwitter:card म्हणजे \"summary\", \"summary_large_image\" — दिसण्याचा प्रकार.\ntwitter:title, twitter:description, twitter:image — आराखडा og प्रमाणे.\n<link rel=\"canonical\"> मूळ पेजचा पत्ता — duplicate content टाळतो.\n<meta name=\"theme-color\" content=\"#123456\"> मोबाइल ब्राउझरच्या toolbar चा रंग ठरवतो.", code: `<head>
  <meta charset="utf-8">
  <meta name="theme-color" content="#12a3b4">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="मराठी वेब विकास">
  <meta name="twitter:description" content="आपल्या भाषेत कोडिंग.">
  <link rel="canonical" href="https://example.com/">
</head>`, codeLanguage: "html" },
            { title: "6. favicon आणि खास link", content: "head मध्ये favicon — ब्राउझर टॅबवरचं छोटं चिन्ह. <link rel=\"icon\" href=\"favicon.ico\">.\nfavicon पेज ओळखण्यासाठी; अनेक ठिकाणी दिसतं — टॅब, बुकमार्क, history.\nlink rel=\"preconnect\" आणि rel=\"dns-prefetch\" — बाहेरच्या डोमेनशी लवकर जोडणी.\nlink rel=\"preload\" अस्सल resources लवकर लोड करणे. rel=\"stylesheet\" — CSS जोडणे.\nhead = पेज स्वतःच सांगणारा संदेश देणारं साधन. प्रत्येक link आणि meta एक विशेष काम.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>मराठी वेब</title>
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="style.css">
</head>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एका पेजचं संपूर्ण head तयार करू — व्यावसायिक पातळीवर.\ncharset, viewport, title से सुरुवात. description आणि author जोडा.\nog: three meta — title, description, image. twitter:card — एकटी दोन.\ntheme-color, favicon, canonical — शेवटी. सर्व order स्पष्ट ठेवा.\nहा head पेजला गंभीरतेने वाढ सांगतो.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="मराठीतून वेब विकास शिकण्याची सोय.">
    <meta name="author" content="मराठी वेब शाळा">
    <meta property="og:title" content="मराठी वेब शाळा">
    <meta property="og:description" content="आपल्या भाषेत कोडिंग.">
    <meta property="og:image" content="https://example.com/cover.png">
    <meta name="theme-color" content="#12a3b4">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="favicon.ico">
    <link rel="canonical" href="https://example.com/">
    <title>मराठी वेब शाळा</title>
  </head>
  <body>
    <h1>मराठी वेब शाळा</h1>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["viewport म्हणजे काय?", "og म्हणजे काय?", "canonical कशासाठी?", "theme-color काय करतो?"],
        quiz: [
            { question: "मोबाइलसाठी नियंत्रण?", options: ["viewport", "charset", "author", "robots"], correct: 0 },
            { question: "सोशल मीडिया वाटणीसाठी?", options: ["Open Graph", "robots", "canonical", "theme-color"], correct: 0 },
            { question: "मूळ पेजचा पत्ता?", options: ["canonical", "favicon", "preload", "author"], correct: 0 },
            { question: "टॅबवर दिसणारं नाव?", options: ["title", "description", "keywords", "author"], correct: 0 },
        ],
        challenge: {
            prompt: "full head package असलेलं पेज बनवा",
            starterCode: `<head>
  <meta charset="utf-8">
  <title>माझे पेज</title>
</head>`,
            expectedOutput: "Renders page with complete head",
        },
        interviewQuestions: ["og meta कसे लिहितात?", "charset अजिबात नाही तर?"],
        related: ["html-entities", "html-seo-fundamentals"],
        prev: "html-entities",
        next: "html-seo-fundamentals",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-seo-fundamentals",
        categoryId: "web",
        title: "SEO Fundamentals - शोध इंजिनासाठी योग्य रचना",
        marathiTitle: "SEO, heading hierarchy, anchor text, alt, semantic structure, performance",
        level: "beginner",
        minutes: 18,
        summary: "SEO, search engine, h1 h2 hierarchy, title, meta description, anchor text, alt text, internal links, robots, sitemap.",
        sections: [
            { title: "1. SEO म्हणजे काय?", content: "SEO म्हणजे Search Engine Optimization — शोध इंजिनात पेज वरच्या क्रमांकावर आणण्याचं शिस्तबद्ध काम.\nगुगल सारख्या search engine वेबवर kroडे पेज वाचतात आणि क्रमवार तयार करतात. त्यांना कोणते पेज original, उपयुक्त हे समजायला हवं.\nHTML हा search engine चा संपर्कच होय. मजकूर, कोड, रचना — सर्व काही मशीनला वाचता येईल पाहिजे.\nSEO चे तीन स्तर: तांत्रिक (कोड), मजकूर (लिखाण), सामाजिक (दुवे). आपण आता तांत्रिक शिकतोय.\nसर्वात महत्त्वाचं: वाचकांसाठी चांगली रचना, मग search engine स्वतःच खरे करतो.", code: `<title>मराठीतून वेब विकास शिका</title>
<meta name="description" content="मराठीतून झिरप तरी HTML सोप्या पद्धतीने शिका.">`, codeLanguage: "html" },
            { title: "2. शीर्षक आणि heading क्रम", content: "पेजचा नकाशा heading क्रम. हे h1, h2, h3 ची साखळी — एकच h1, मग h2, त्याच्या आत h3.\nh1 पेजचा मुख्य विषय. search engine h1 ला प्रमुख सांगतो. दोन h1 गोंधळ निर्माण करतो.\nh2 मुख्य भाग, h3 छोटे उपभाग. क्रम मोडल्यास मशीनला रचना अस्पष्ट होते.\nशीर्षक शब्द निवडताना वास्तविक प्रश्नांची भाषा वापरा — वाचक जसे शोधतो तसे.\nheading एक रचना, सजावट नव्हे. त्यामुळे order नेहमी पाळा.", code: `<h1>मराठी कोडिंग</h1>
<h2>HTML मूलभूत</h2>
<h3>tags काय?</h3>
<h2>CSS परिचय</h2>
<h3>selectors काय?</h3>`, codeLanguage: "html" },
            { title: "3. दुवे आणि anchor text", content: "दुवे वेबला जोडतात. दुव्याचा मजकूर (anchor text) search engine वाचतो — तो दुव्याचा अर्थ सांगतो.\n\"येथे क्लिक करा\" ऐवजी \"मराठी कोडिंग मार्गदर्शक\" लिहा — तोच विषय सूचित होतो.\nInternal links — तुमच्या स्वतःच्या दुसऱ्या पेजकडे. ते site चा नकाशा search engine ला समजवतात.\nExternal links — विश्वासार्ह, संबंधित ठिकाणीच. रिलेटेड पेजचा दुवा दस्तऐवज वाढवतो.\nदुवा कुठे नेतो ते मजकूरातच स्पष्ट असावं.", code: `<p>मराठीतून <a href="html-kos.html">HTML कोर्स</a> पहा.</p>
<p>आमचा <a href="contact.html">संपर्क पेज</a> विजनिंग उपलब्ध.</p>`, codeLanguage: "html" },
            { title: "4. चित्रे आणि alt", content: "चित्रे search engine ला दिसत नाहीत — फक्त alt मजकूर वाचतात. त्यामुळे alt ही संधी.\nalt चित्राचं वर्णन — \"मराठी भाषा महोत्सव\" घडा. \"image123.png\" ही माहिती नाही.\nalt काही असतानाही image search मध्ये पेज सापडू शकतं. माहितीपूर्ण alt वरचा क्रम आणतो.\nसजावटीसाठीचे चित्र alt=\"\" रिकामे, परंतु माहिती संरचना alt समजते.\nफाइल नावही अर्थपूर्ण — ganesh-mandir.jpg सारखं. सर्व चित्रे व्यवस्थित name आणि alt सह.", code: `<img src="marathi-utsav-2026.jpg" alt="मराठी भाषा महोत्सव २०२६" width="300" loading="lazy">`, codeLanguage: "html" },
            { title: "5. semantic structure म्हणजेच SEO", content: "Semantic tags search engine ला पेज समजण्यास मदत करतात — <article>, <main>, <nav>.\nsemantic tags मधील मजकूर महत्त्वाचा मानला जातो. div सारख्या साधनात तो अंदाजे राहतो.\nheadings, दुवे, lists, tables — प्रत्येक योग्य tag मशीनला रचनेची माहिती देतो.\nsearch engine पेज समजेल तरच रिच स्निपेट, खंडित चित्रे मिळतात.\nवाचकाच्या अनुभवासाठी स्वच्छता — SEO हा त्याचा परिणाम.", code: `<main>
  <article>
    <h1>मराठी वेबचे भविष्य</h1>
    <p>मराठीतून तंत्रज्ञान शिकताना आता अचूक मार्गदर्शन.</p>
  </article>
  <aside>
    <p>संबंधित: <a href="web-kos.html">वेब कोर्ससूची</a></p>
  </aside>
</main>`, codeLanguage: "html" },
            { title: "6. performance आणि sitemap", content: "SEO फक्त कोडवर नाही — पेजचा वेगही क्रमवारी ठरवतो. हळू पेज search engine ला आवडत नाही.\nचित्रांचा आकार लहान करा, अतिरिक्त resources वगळा, मोबाइल दृश्य योग्य करा.\nviewport meta मोबाइल सांगते; त्याशिवाय मोबाइल लोकसंख्येचा अर्धा search गमावला.\nrobots.txt search engine ला कोणते पेज अनुसरा, कोणते नको सांगतो — त्याची फाइल server वर असते.\nsitemap.xml पेजांची यादी — search engine ला सर्व काही शोधते. ही दोन्ही तांत्रिक files असतात.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
  <title>मराठी वेब — वेग आणि SEO</title>
</head>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक SEO-मित्र लेख पेज बनवू.\ntitle अचूक, description एक. एकच h1, मग h2/h3 क्रमाने.\nदोन internal दुवे अर्थपूर्ण anchor text सह. एक चित्र अर्थपूर्ण alt.\nsemantic tags — article, aside, nav. शेवटी रोबोट meta.\nहा नमुना तयार केल्यावर पेज शोधयोग्य बनते.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="मराठीतून वेब विकास शिकण्याची मार्गदर्शिका.">
    <meta name="robots" content="index, follow">
    <title>मराठीतून वेब शिका</title>
  </head>
  <body>
    <header>
      <h1>मराठी वेबचा पाया</h1>
    </header>
    <nav>
      <a href="index.html">मुख्य</a> | <a href="web-kos.html">वेब कोर्स</a>
    </nav>
    <main>
      <article>
        <h2>सुरुवात का महत्त्वाची?</h2>
        <p>स्पष्ट रचना वाचक आणि search engine दोघांनाही घेते.</p>
        <img src="paya.png" alt="मराठी वेबचा पाया" width="300">
      </article>
    </main>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["SEO म्हणजे काय?", "एकच h1 का?", "anchor text कसा असावा?", "sitemap म्हणजे?"],
        quiz: [
            { question: "एकच कोणता heading?", options: ["h1", "h2", "h3", "h4"], correct: 0 },
            { question: "चित्राचं वर्णन कुठे?", options: ["alt", "title", "src", "width"], correct: 0 },
            { question: "search engine चा पत्ता कोणता?", options: ["sitemap.xml", "style.css", "index.html", "script.js"], correct: 0 },
            { question: "पेजचं वर्णन meta?", options: ["description", "author", "robots", "charset"], correct: 0 },
        ],
        challenge: {
            prompt: "SEO-friendly article page बनवा",
            starterCode: `<main>
  <article>
    <h1>शीर्षक</h1>
    <p>मजकूर</p>
  </article>
</main>`,
            expectedOutput: "Renders SEO-friendly article",
        },
        interviewQuestions: ["heading order कसा पाळायचा?", "performance का महत्त्वाचं?"],
        related: ["html-meta-head", "html-accessibility"],
        prev: "html-meta-head",
        next: "html-accessibility",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-accessibility",
        categoryId: "web",
        title: "Accessibility - सर्वांसाठी वेब",
        marathiTitle: "a11y, labels, alt, aria, focus, contrast, skip links, screen readers",
        level: "beginner",
        minutes: 18,
        summary: "screen reader, labels, alt, ARIA, aria-label, role, tabindex, focus, contrast, skip link, lang.",
        sections: [
            { title: "1. a11y म्हणजे काय?", content: "Accessibility म्हणजे वेबपेज प्रत्येकाला वापरता येणं — दृष्टिहीन, श्रवणहीन, विकलांग व्यक्तींसह.\na11y हे लघुरूप — a, 11 अक्षरे, y असे. \"Accessibility\" चं आंतरराष्ट्रीय नाव.\nScreen reader हे सॉफ्टवेअर पेजचा मजकूर मोठ्याने वाचतं. त्याला योग्य रचना हवी.\nकीबोर्ड एकाकी — अनेक वापरकर्ते माऊस न वापरता keyboard ने नेव्हिगेट करतात.\na11y म्हणजे \"अपंगांना मदत\" नव्हे — तो सर्वांसाठी चांगला अनुभव आहे.", code: `<label for="नाव">तुमचं नाव:</label>
<input id="नाव" name="नाव" type="text">`, codeLanguage: "html" },
            { title: "2. label आणि form", content: "प्रत्येक <input> ला एक <label> हवा. label संबंधित फील्डचे नाव सांगतो.\nfor आणि id समान असावे — ते जोडणी करतात. त्याशिवाय screen reader फील्ड ओळखत नाही.\nlabel वर क्लिक केल्यावर फील्ड focus होतं — मोठे लक्ष्य, चांगला अनुभव.\nplaceholder हा label नाही. तो नमुना मजकूर; तो गहाळ होतो. नेहमी खरा label द्या.\nform ला name, autocomplete, आवश्यक गुणधर्म स्पष्ट द्या — तपासणी आणि a11y दोन्ही.", code: `<form action="#" method="post">
  <label for="em">ईमेल:</label>
  <input id="em" name="email" type="email" autocomplete="email">
  <label for="vay">वय:</label>
  <input id="vay" name="वय" type="number">
</form>`, codeLanguage: "html" },
            { title: "3. alt आणि ARIA", content: "चित्रे — alt वर्णन. दृश्य माहिती मजकूरात द्या. screen reader alt मोठ्याने वाचतं.\nसजावटीचे चित्र — alt=\"\" रिकामे. त्यामुळे screen reader हे चित्र skip करतो.\ndecuative icon मध्ये aria-hidden=\"true\" देतात — स्वतः न वाचण्यासाठी.\naria-label खास नाव बटणाला, region ला देतो — जेथे मजकूर नाही. उदा. खोकल्या button.\nARIA \"चक्कर\" पर्याय आहे — शक्यतो शुद्ध HTML label वापरा; ARIA गरज असेल तेव्हाच.", code: `<img src="suryoday.png" alt="सूर्योदय पाहताना शेतं" width="300">
<button type="button" aria-label="मेनू उघडा">☰</button>
<p aria-hidden="true">ही सजावटीची ओळ.</p>`, codeLanguage: "html" },
            { title: "4. तार्किक क्रम आणि focus", content: "Keyboard नेव्हिगेशन order महत्त्वाचा — focus एका घटकातून दुसऱ्यात सहज सरकतं.\ntabindex=\"0\" नैसर्गिक ठिकाणाचा घटक focus करणे; tabindex=\"1\" जबरदस्ती आधी — तो नको.\nत्यामुळे focus order कोडच्या क्रमानुसार ठेवा. मेनू, बटणे, दुवे सुसंगत चालल्या पाहिजेत.\nवाचकाला दिसणारं तेच असावं. programmatic एक ठिकाण, दृश्य other ठिकाण — गोंधळ.\nfocus अदृश्य करणे वाईट; focus outline ठेवा — तो keyboard वापरकर्त्याचा मार्ग आहे.", code: `<nav>
  <a href="main.html">मुख्य</a>
  <a href="news.html">बातम्या</a>
</nav>
<form>
  <label for="n">नाव:</label>
  <input id="n" name="नाव">
</form>`, codeLanguage: "html" },
            { title: "5. contrast आणि color", content: "मजकूर आणि background यांचा फरक (contrast) पुरेसा हवा — वाचण्यास सोपं.\nकेवळ रंगाने अर्थ सांगू नका — \"लाल = चुकीचं\" असेल त्याला मजकूरही जोडा.\nफिकट text गडद background किंवा उलट — दोन्ही डोळ्यांसाठी तेजस्वी.\nlang attribute — <html lang=\"mr\">. screen reader योग्य उच्चार करतो.\nमोठ्या अक्षरांची सवय, रंगांधळेपणासाठी हे सर्व छोटे निर्णय महत्त्वाचे.", code: `<html lang="mr">
<body>
  <p>स्पष्ट मजकूर — गडद text, फिकट पार्श्वभूमी.</p>
</body>
</html>`, codeLanguage: "html" },
            { title: "6. skip link आणि error संदेश", content: "Skip link — पेजच्या सुरूवातीचा दुवा जो थेट मुख्य मजकुरावर नेतो. keyboard वापरकर्त्याचा वेग वाढतो.\n<form on Error> — errors मजकुरात स्पष्ट. का चुकलं, कुठे चुकलं — सांगा.\nerror button ला aria-describedby ने जोडता येतं — संदेशाशी जोडणी.\nसगळे media captions/transcript सह. सगळे दुवे अर्थपूर्ण मजकूर.\na11y चा नियम साधा: कोणीही, कोणत्याही परिस्थितीत, पेज वापरू शकेल.", code: `<a href="#मुख्य" class="skip-link">थेट मुख्य लेखाकडे जा</a>
<main id="मुख्य">
  <h1>मुख्य लेख</h1>
  <p>येथून पेज सुरू होतं.</p>
</main>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक accessible profile पेज बनवू.\nlabel सह दोन fields — नाव आणि ईमेल. form autocomplete रो हो.\nलोकल चित्र with अर्थपूर्ण alt. एक skip link वर.\nlang=\"mr\" आधीच. खास बटणा aria-label. सर्व keyboard usable.\nहा पेज सर्वांसाठी खुला झाला.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>प्रोफाइल — प्रवेशयोग्य</title>
  </head>
  <body>
    <a href="#मुख्य" class="skip-link">मुख्य मजकुराकडे</a>
    <nav>
      <a href="index.html">मुख्य</a> | <a href="about.html">परिचय</a>
    </nav>
    <main id="मुख्य">
      <h1>माझे प्रोफाइल</h1>
      <img src="mala.png" alt="माझं चित्र" width="200">
      <form action="#" method="post">
        <label for="na">नाव:</label>
        <input id="na" name="नाव" type="text" required>
        <label for="em">ईमेल:</label>
        <input id="em" name="ईमेल" type="email" autocomplete="email">
        <button type="submit">पाठवा</button>
      </form>
    </main>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["a11y म्हणजे काय?", "label आणि placeholder फरक?", "ARIA कधी वापरतात?", "skip link कशासाठी?"],
        quiz: [
            { question: "screen reader ची जोडणी कोणती?", options: ["label for + id", "alt", "aria-hidden", "tabindex"], correct: 0 },
            { question: "सजावटीचं चित्र alt?", options: ["alt=\"\"", "alt=\"चित्र\"", "alt नको", "alt=\"1\""], correct: 0 },
            { question: "keyboard वापरकर्त्याचा मार्ग?", options: ["focus outline", "placeholder", "title", "style"], correct: 0 },
            { question: "रंगांधळेपणासाठी?", options: ["फक्त रंग नको", "रंग + मजकूर", "केवळ रंग", "काळे-पांढरे"], correct: 0 },
        ],
        challenge: {
            prompt: "accessible form + skip link पेज बनवा",
            starterCode: `<form>
  <label for="n">नाव:</label>
  <input id="n" name="नाव">
</form>`,
            expectedOutput: "Renders accessible form",
        },
        interviewQuestions: ["ARIA vs HTML label?", "contrast नियम काय?"],
        related: ["html-seo-fundamentals", "html-responsive-images"],
        prev: "html-seo-fundamentals",
        next: "html-responsive-images",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-responsive-images",
        categoryId: "web",
        title: "Responsive Images - प्रत्येक पडद्यासाठी चित्र",
        marathiTitle: "srcset, sizes, picture, source, lazy loading, WebP, art direction",
        level: "beginner",
        minutes: 18,
        summary: "srcset, sizes, picture, source media, width descriptors, density, lazy, decoding, fetchpriority, formát.",
        sections: [
            { title: "1. चित्र आकाराची समस्या", content: "संगणकाचे मोठे चित्र मोबाइलवर कसे दाखवता? खूप मोठे लोड होतं, खूप लहान दिसतं.\nप्रत्येक पडद्यासाठी एक आकार नसतो. टीव्ही 1920px, मोबाइल 360px — दोन्ही एकच image, दोन आकार.\nwidth attribute आकार देतो, पण फाइल ती मोठीच राहते. मोबाइलवर 2MB चित्र वाया.\nसोय: ब्राउझर पडद्यानुसार योग्य फाइल निवडेल — srcset आणि sizes ची किमया.\nलक्ष्य: लहान पडदा = लहान फाइल, मोठा पडदा = मोठी फाइल. वेग आणि डेटा दोन्ही वाचतो.", code: `<img src="pune.jpg" alt="पुणे" width="400" height="300">
<p>एकच आकार, सर्व पडद्यांवर.</p>`, codeLanguage: "html" },
            { title: "2. srcset — फाइलांची सूची", content: "srcset या attribute मध्ये एकाच चित्राच्या अनेक आकारांच्या फाइलांची सूची देतात.\nप्रत्येक entry: फाइल, स्पेस, रुंदी (w) किंवा घनता (x). उदा. \"pune-400.jpg 400w\".\nब्राउझर आपल्या पडद्याच्या आकारानुसार योग्य आकार निवडतो. कोणता निवडेल ते ब्राउझरचं.\nw descriptor — म्हणजे चित्राची खरी पिक्सेल रुंदी. ही सूची आरोही क्रमाने लिहा.\nsrcset फक्त src च्या जोरावर काम करत नाही — src हा सुरक्षित fallback असतो.", code: `<img src="pune-400.jpg" alt="पुणे"
     srcset="pune-400.jpg 400w, pune-800.jpg 800w, pune-1200.jpg 1200w">`, codeLanguage: "html" },
            { title: "3. sizes — ठिकाणाचा अंदाज", content: "sizes attribute ब्राउझरला सांगतो — चित्र पेजच्या किती रुंद जागा घेईल. त्यातून निवड सोपी होते.\nउदा. sizes=\"(max-width: 600px) 100vw, 600px\" — लहान पडद्यावर पूर्ण रुंदी, मोठ्यावर 600px.\nvw म्हणजे viewport width; px थेट. एवढीच गरज — विविध शर्ती येथे लिहितात.\nतंतोतंत गणतीत नको; योग्य अंदाज ब्राउझरला पुरेसा — guest image देतो.\nsizes नसेल तर srcset w देखील अंदाजे निवडते — पण sizes अधिक अचूक.", code: `<img src="pune-800.jpg" alt="पुणे"
     srcset="pune-400.jpg 400w, pune-800.jpg 800w, pune-1200.jpg 1200w"
     sizes="(max-width: 600px) 100vw, 600px">`, codeLanguage: "html" },
            { title: "4. picture — art direction", content: "कधी कधी तुम्हाला स्वतःच निवडायचं असतं — कोणता चित्र कोणत्या पडद्यासाठी. त्यासाठी <picture>.\npicture च्या आत <source> आणि शेवटी आवश्यक <img>. मीडिया शर्ती source मध्ये.\nउदा. मोबाइलसाठी क्रॉप केलेलं चित्र, संगणकासाठी पूर्ण दृश्य. media मध्ये अट लिहितात.\npicture ब्राउझरला सर्वात योग्य source निवडण्यास भाग पाडतो.\nsrcset sizes फक्त आकार बदलते; picture आकार आणि दृश्य दोन्ही बदलतो.", code: `<picture>
  <source media="(max-width: 600px)" srcset="mob-600.jpg">
  <source media="(min-width: 601px)" srcset="full-1200.jpg">
  <img src="full-1200.jpg" alt="पुणे शहर">
</picture>`, codeLanguage: "html" },
            { title: "5. lazy loading आणि format", content: "loading=\"lazy\" — दूरची चित्रे स्क्रोल केल्यावरच लोड होतात. पहिला वेग वाढतो.\nपहिल्या स्क्रीनचं चित्र लगेचच; उरलेलं lazy. loading=\"eager\" सक्तीचं तयारी.\ndecoding=\"async\" — चित्र एनकोडिंग पेज दाखवताच सुरू, रचना अडवली जात नाही.\nWebP/AVIF फॉरमॅट लहान फाइल, तीच quality. जुन्या ब्राउझरसाठी JPEG fallback.\nfetchpriority=\"high\" पहिल्या मोठ्या चित्रावर — इतर साठी low ठेवा.", code: `<img src="suraj.jpg" alt="सूर्योदय"
     loading="lazy" decoding="async"
     width="400" height="300">`, codeLanguage: "html" },
            { title: "6. नियम आणि तपासणी", content: "प्रत्येक चित्र device तपासा: small screen, big screen, सुस्त नेट. नेहमी वापरा दृश्य.\nalt नेहमी अर्थपूर्ण — अनेक मार्गाने मिळणारी माहिती.\nन facebook: width, height दिल्यास layout stable राहते — चित्र लोड होण्यापूर्वीही.\nformat नियम: फोटो JPEG/WebP, पारदर्शक PNG/WebP, अॅनिमेशन GIF/WebP.\nएखादा छोटा परीक्षण: DevTools मध्ये Network टॅब — कोणत्या फाइल सर्व्हरवरून आली ते पाहा.", code: `<img src="desh.jpg" alt="देशाचा नकाशा"
     srcset="desh-600.jpg 600w, desh-900.jpg 900w, desh-1400.jpg 1400w"
     sizes="(max-width: 700px) 100vw, 700px"
     loading="lazy" decoding="async" width="700" height="400">`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक responsive gallery पेज बनवू.\nतीन चित्रे — प्रत्येकाला srcset तीन आकार आणि sizes.\ngallery च्या पहिल्या मोठ्या चित्राला fetchpriority=\"high\".\nइतर दोन loading=\"lazy\". सर्वांना अर्थपूर्ण alt.\nआता कोणताही पडदा — चित्रे त्वरित, सुबक, बचत.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>मराठी गॅलरी</title>
  </head>
  <body>
    <h1>आमची गॅलरी</h1>
    <img src="nath-900.jpg" alt="नाथांची पालखी"
         srcset="nath-400.jpg 400w, nath-900.jpg 900w, nath-1400.jpg 1400w"
         sizes="(max-width: 700px) 100vw, 700px"
         fetchpriority="high" width="700" height="450">
    <img src="sadev-600.jpg" alt="संध्याकाळचे दृश्य"
         srcset="sadev-400.jpg 400w, sadev-600.jpg 600w"
         sizes="(max-width: 500px) 100vw, 500px"
         loading="lazy" decoding="async" width="500" height="350">
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["srcset काय देतो?", "sizes काय सांगतं?", "picture कधी?", "lazy loading म्हणजे?"],
        quiz: [
            { question: "फाइलांची सूची कोणता?", options: ["srcset", "sizes", "picture", "media"], correct: 0 },
            { question: "मोबाइलसाठी वेगळं दृश्य?", options: ["picture+source", "srcset", "width", "lazy"], correct: 0 },
            { question: "पडद्याचा आकार सांगतो?", options: ["viewport", "sizes", "src", "alt"], correct: 0 },
            { question: "स्क्रोलवर लोड?", options: ["loading=lazy", "loading=eager", "decoding=async", "fetchpriority"], correct: 0 },
        ],
        challenge: {
            prompt: "srcset + sizes सह चित्र बनवा",
            starterCode: `<img src="a.jpg" srcset="a-400.jpg 400w, a-800.jpg 800w" sizes="50vw">`,
            expectedOutput: "Renders responsive image",
        },
        interviewQuestions: ["srcset वि picture फरक?", "WebP का?"],
        related: ["html-accessibility", "html-forms-advanced"],
        prev: "html-accessibility",
        next: "html-forms-advanced",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-forms-advanced",
        categoryId: "web",
        title: "Advanced Forms - गुंतागुंतीचे फॉर्म",
        marathiTitle: "fieldset, legend, select, optgroup, datalist, textarea, output, file",
        level: "beginner",
        minutes: 18,
        summary: "fieldset, legend, select, option, optgroup, datalist, textarea, output, file, accept, multiple, disabled, readonly.",
        sections: [
            { title: "1. fieldset आणि legend", content: "फॉर्मचे भाग गटबद्ध करण्यासाठी <fieldset>. त्याचं शीर्षक <legend>.\nउदा. \"पत्ता\" fieldset मध्ये नाव, गाव, पिन; \"पैसे\" fieldset मध्ये खाते. गट स्पष्ट.\nfieldset सभोवती एक रेषा/चौकट दाखवतो — मोठ्या फॉर्मला दृश्य सुसंगतता.\nlegend फील्ड्सेटचं नाव screen reader वाचतो — a11y साठी मोलाचं.\ndisabled fieldset मधील सर्व fields अक्षम करतो — एकाच ठिकाणी नियंत्रण.", code: `<fieldset>
  <legend>घराचा पत्ता</legend>
  <label>गाव: <input name="गाव"></label>
  <label>पिन: <input name="पिन" type="text"></label>
</fieldset>`, codeLanguage: "html" },
            { title: "2. select आणि option", content: "सूचीतून एक निवडण्यासाठी <select>. त्याचे पर्याय <option>.\n<option value=\"pune\">पुणे</option> — value पाठवली जाते, दिसणारा मजकूर वेगळा.\nselected attribute पूर्व-निवडलेला पर्याय. अनेक निवड — multiple attribute.\nselect मोबाइलवर नैसर्गिक picker उघडतो — वापरकर्त्यास सोय.\nएकावेळी एक मूल्य सामान्य; क्रम महत्त्वाचा असेल तर multiple.", code: `<label>जिल्हा:
  <select name="जिल्हा">
    <option value="pune">पुणे</option>
    <option value="nashik" selected>नाशिक</option>
    <option value="kolhapur">कोल्हापूर</option>
  </select>
</label>`, codeLanguage: "html" },
            { title: "3. optgroup — सूचीचे वर्ग", content: "मोठ्या select ला वर्ग करण्यासाठी <optgroup>. प्रत्येक वर्गाचं label.\nउदा. fractions: \"मराठी व्याकरण\", \"गणित\", \"विज्ञान\" — प्रत्येकात विषय पर्याय.\noptgroup ने सूची वाचण्यास सोपी आणि नेव्हिगेट करण्यास सोयीची.\nselect मधील option अथवा optgroup फक्त. option मध्ये value अनिवार्य नसतो.\nसुटे opi — screen reader मध्ये वर्ग गट template राहतो.", code: `<label>विषय निवडा:
  <select name="विषय">
    <optgroup label="भाषा">
      <option>मराठी</option>
      <option>हिंदी</option>
    </optgroup>
    <optgroup label="गणित">
      <option>बीजगणित</option>
      <option>भूमिती</option>
    </optgroup>
  </select>
</label>`, codeLanguage: "html" },
            { title: "4. datalist — जलद सुचना", content: "<datalist> select सारखा नाही — तो input सोबत सुचना देतो; वापरकर्ता लिहूही शकतो.\n<input list=\"नाव\"> आणि <datalist id=\"नाव\"> जोडणी list attribute ने.\nटाईप करताना जुळणारे पर्याय दिसतात — वेगवान आणि स्पर्शभूत.\ndatalist मध्ये <option value=\"पुणे\">. text input म्हणूनही मुक्त.\nselect ची कडक निवड नको असेल तेव्हा datalist योग्य.", code: `<label>शहर:
  <input name="शहर" list="शहरे">
</label>
<datalist id="शहरे">
  <option value="पुणे"></option>
  <option value="मुंबई"></option>
  <option value="नागपूर"></option>
  <option value="औरंगाबाद"></option>
</datalist>`, codeLanguage: "html" },
            { title: "5. textarea आणि output", content: "मोठा मजकूर — अनेक ओळी — <textarea>. पत्ता, टिप्पणी, संदेश.\n<textarea name=\"नोट\" rows=\"4\" cols=\"40\">…</textarea>. rows/cols पहिला आकार.\ntextarea ची value content मध्येच असते — opening/closing tag मध्ये. whitespace लक्षात ठेवा.\n<output> गणनेचा निकाल दाखवण्यासाठी — form गणनेचा परिणाम. तो script आणि display साठी.\noutput सहसा script सोबत; markup मध्ये जागा ठरवता येते.", code: `<label>मजकूर:
  <textarea name="नोट" rows="4" cols="40">इथे टिप्पणी लिहा…</textarea>
</label>
<label>निकाल:
  <output name="सरासरी">0</output>
</label>`, codeLanguage: "html" },
            { title: "6. file input आणि state", content: "फाइल अपलोड करण्यासाठी <input type=\"file\">. accept फाइल प्रकार ठरवतो.\naccept=\"image/*\" — चित्रेच. accept=\".pdf,.doc\" — विशिष्ट विस्तार. हे मार्गदर्शन, रक्षण नव्हे.\nmultiple attribute — अनेक फाइल. फाइलचे नाव जागेवरच दिसतं.\ndisabled field न वापरता पाठवत नाही; readonly मूल्य पाठवते पण बदलता येत नाही.\nrequired फाइल फील्ड अनिवार्य करतो; सर्व्हरवरच सुरक्षेचे अतिरिक्त उपाय होतात.", code: `<form action="#" method="post">
  <label>फोटो:
    <input type="file" name="फोटो" accept="image/*" multiple>
  </label>
  <label>जुने मूल्य:
    <input name="संदर्भ" value="12345" readonly>
  </label>
</form>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक संपूर्ण survey form बनवू.\nfieldset १: वैयक्तिक — नाव ईमेल input. fieldset २: आवड — select आणि datalist.\nfieldset ३: अभिप्राय — textarea. file input एक जोडा.\nप्रत्येक गटाला legend. सर्व fields ला label. आवश्यक fields required.\nफॉर्म व्यवस्थित, group wise — a11y आणि अनुभव दोन्ही.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>सर्वेक्षण फॉर्म</title>
  </head>
  <body>
    <form action="#" method="post">
      <fieldset>
        <legend>तुमची ओळख</legend>
        <label>नाव: <input name="नाव" required></label>
        <label>ईमेल: <input type="email" name="ईमेल" required></label>
      </fieldset>
      <fieldset>
        <legend>आवडी</legend>
        <label>विषय:
          <select name="विषय">
            <option>मराठी</option>
            <option>गणित</option>
          </select>
        </label>
        <label>शहर:
          <input name="शहर" list="शहरे">
        </label>
        <datalist id="शहरे">
          <option value="पुणे"></option>
          <option value="मुंबई"></option>
        </datalist>
      </fieldset>
      <fieldset>
        <legend>अभिप्राय</legend>
        <label>टिप्पणी:
          <textarea name="टिप्पणी" rows="4" cols="40"></textarea>
        </label>
        <label>फोटो: <input type="file" name="फोटो" accept="image/*"></label>
      </fieldset>
      <button type="submit">पाठवा</button>
    </form>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["fieldset कशासाठी?", "select वि datalist फरक?", "textarea console काय?", "accept म्हणजे?"],
        quiz: [
            { question: "फॉर्म गटबद्ध करणारा?", options: ["fieldset", "legend", "div", "section"], correct: 0 },
            { question: "टाईप करून निवड?", options: ["datalist", "select", "checkbox", "radio"], correct: 0 },
            { question: "मोठा मजकूर?", options: ["textarea", "input text", "p", "output"], correct: 0 },
            { question: "select मध्ये वर्ग?", options: ["optgroup", "group", "dropdown", "list"], correct: 0 },
        ],
        challenge: {
            prompt: "fieldset + select + textarea form बनवा",
            starterCode: `<fieldset>
  <legend>ओळख</legend>
  <label>नाव: <input name="नाव"></label>
</fieldset>`,
            expectedOutput: "Renders grouped advanced form",
        },
        interviewQuestions: ["datalist vs select?", "readonly vs disabled?"],
        related: ["html-responsive-images", "html-tables-advanced"],
        prev: "html-responsive-images",
        next: "html-tables-advanced",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-tables-advanced",
        categoryId: "web",
        title: "Advanced Tables - गुंतागुंतीच्या सारण्या",
        marathiTitle: "thead, tbody, tfoot, caption, colspan, rowspan, scope, colgroup",
        level: "beginner",
        minutes: 18,
        summary: "table, thead, tbody, tfoot, caption, colgroup, col, span, scope, rowspan, colspan, headers.",
        sections: [
            { title: "1. thead, tbody, tfoot", content: "मोठ्या तक्त्याला तीन भाग: <thead> शीर्षकांच्या ओळी, <tbody> आकडेवारी, <tfoot> सारांश.\nthead मध्ये column labels. tbody मधील rows खरा डेटा. tfoot निकाल/oटा.\nब्राउझर या तीन गटांशी लांबलचक तक्ता हाताळण्यास सोय करतो.\nthead ने स्तंभाचे नाव एकवेळ वाचताना search engine ला समजतं.\nतीन गट आल्यावर तक्ता संरचित — वाचन योग्य, styling सोपी.", code: `<table>
  <thead>
    <tr><th>महिना</th><th>उत्पन्न</th><th>खर्च</th></tr>
  </thead>
  <tbody>
    <tr><td>जानेवारी</td><td>50000</td><td>30000</td></tr>
    <tr><td>फेब्रुवारी</td><td>55000</td><td>31000</td></tr>
  </tbody>
  <tfoot>
    <tr><td>एकूण</td><td>105000</td><td>61000</td></tr>
  </tfoot>
</table>`, codeLanguage: "html" },
            { title: "2. caption आणि scope", content: "<caption> तक्त्याचं शीर्षक — table टॅगच्या लगेच आत. वाचकाला तक्त्याचा विषय कळतो.\nscope=\"col\" सांगतो — ही header सेल संपूर्ण column ला. scope=\"row\" — संपूर्ण row ला.\nscope screen reader मधील नेव्हिगेशन सुधारतो — सेल वाचताना तो head सोबत जोडतो.\nscreen reader साठी headers attribute — cells मध्ये column header जोडणी.\ncaption+scope अनेक थरांची a11y सोय — तक्ता स्पष्ट.", code: `<table>
  <caption>मासिक खर्च (रुपये)</caption>
  <thead>
    <tr><th scope="col">महिना</th><th scope="col">मूल्य</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">जानेवारी</th><td>1000</td></tr>
    <tr><th scope="row">फेब्रुवारी</th><td>1200</td></tr>
  </tbody>
</table>`, codeLanguage: "html" },
            { title: "3. colspan आणि rowspan", content: "<colspan> एक सेल अनेक स्तंभांना विस्तारतो; <rowspan> अनेक ओळींना.\nउदा. शीर्षक पंक्तीत \"संपर्क\" तीन स्तंभांवर — colspan=\"3\".\nrowspan=\"2\" — एक सेल दोन ओळी उंच. कॅलेंडर, वेगवेगळ्या मांडणीमध्ये उपयोग.\nएकूण स्तंभ संख्या समान राहावी — प्रत्येक row ची colspan जोड समान.\nगुंता वाढते — काळजीपूर्वक मांडणी करा; संदर्भ ठीक ठेवा.", code: `<table border="1">
  <tr>
    <th colspan="2">नाव</th>
    <th>मोबाइल</th>
  </tr>
  <tr>
    <td>रवि</td>
    <td>राज</td>
    <td>12345</td>
  </tr>
  <tr>
    <td rowspan="2">आम्ही</td>
    <td>पुणे</td>
    <td>11111</td>
  </tr>
  <tr>
    <td>नाशिक</td>
    <td>22222</td>
  </tr>
</table>`, codeLanguage: "html" },
            { title: "4. colgroup आणि col", content: "<colgroup> स्तंभांचे गट देतो — एकाच वेळी सगळ्या स्तंभांना width किंवा styling\n<colgroup><col><col span=\"2\"></colgroup> — दुसऱ्या व तिसऱ्याला span २.\ncolgroup ने स्तंभांना आकाराचा संदर्भ — table अधिक लवचिक.\nखरं styling CSS मध्ये; colgroup आधारीसाठी (width इ.) — नियम स्पष्ट.\nअनेक स्तंभांवर समान अट घालायची असेल तेव्हा span ही सवलत.", code: `<table>
  <colgroup>
    <col>
    <col span="2" width="100">
  </colgroup>
  <tr><th>सेवा</th><th>किंमत</th><th>काल</th></tr>
  <tr><td>शिक्षण</td><td>500</td><td>1 मासिक</td></tr>
</table>`, codeLanguage: "html" },
            { title: "5. रिकामे सेल आणि मोबाइल", content: "तक्त्यातील रिकामा सेल — खालील सेल गोंधळ करू नका. रिकामा असेल तर <td> </td> ठेवा.\nत्रुटी: > थेट लिहिणं entity मध्ये. योग्य: &nbsp; रिकाम्या सेलमध्ये टाळा.\nमोबाइलवर तक्ता अरुंद — पूर्ण रुंदी दिसतेच नाही. CSS उत्तराला पुढे.\nsmall तक्त्यांसाठी overflow पडदा; मोठ्या साठी पुनर्व्यवस्था सोय.\nरचना तयार ठेवा — वाचक कोणत्याही पडद्यावर कमी न त्रिग्धर.", code: `<table border="1">
  <tr><th>विषय</th><th>स्थिती</th></tr>
  <tr><td>मराठी</td><td>पूर्ण</td></tr>
  <tr><td>गणित</td><td> </td></tr>
  <tr><td>विज्ञान</td><td>चालू</td></tr>
</table>`, codeLanguage: "html" },
            { title: "6. मोठ्या तक्त्याची a11y", content: "मोठा डेटा तक्ता a11y सह — headers attribute प्रत्येक data cell मध्ये id जोडतो.\n<div id=\"colDate\"> जसे each header ला id. मग cell मध्ये headers=\"colDate\".\nscreen reader headers ने history संबंध विशद करतो — सेलचा अर्थ संपूर्ण.\nमोठ्या मांडणीत scope पुरेसा पडत नाही — तेव्हा headers ची जोडणी.\ntsticky header किंवा निश्चित स्तंभ — लांब तक्ता वाचण्यास आधार देतो.", code: `<table>
  <thead>
    <tr>
      <th id="col-city">शहर</th>
      <th id="col-pop">लोकसंख्या</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td headers="col-city">पुणे</td>
      <td headers="col-pop">3.5 दशलक्ष</td>
    </tr>
  </tbody>
</table>`, codeLanguage: "html" },
            { title: "Mini Project", content: "मासिक अभ्यास वेळापत्रक तक्ता बनवू.\ncaption द्या. thead मध्ये दिवस, tbody मध्ये धडे. tfoot सारांश.\nएका सेलमध्ये colspan दोन स्तंभांसाठी; दुसर्यात rowspan.\nheader cells साठी scope द्या. रिकामा सेल &nbsp; ने नाही तर <td> </td>.\nवेळापत्रक सुबक आणि संरचित दिसतं.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>अभ्यास वेळापत्रक</title>
  </head>
  <body>
    <table border="1">
      <caption>साप्ताहिक अभ्यास</caption>
      <thead>
        <tr>
          <th scope="col">वेळ</th>
          <th scope="col">सोमवार</th>
          <th scope="col">मंगळवार</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">सकाळी</th>
          <td>मराठी</td>
          <td>गणित</td>
        </tr>
        <tr>
          <th scope="row">संध्याकाळी</th>
          <td colspan="2">विज्ञान (दोन्ही दिवस)</td>
        </tr>
      </tbody>
      <tfoot>
        <tr><td colspan="3">एकूण ३ विषय</td></tr>
      </tfoot>
    </table>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["thead आणि tbody मध्ये फरक?", "scope काय सांगतं?", "colspan म्हणजे?", "caption कुठे येतो?"],
        quiz: [
            { question: "तक्त्याचं शीर्षक?", options: ["caption", "title", "h1", "legend"], correct: 0 },
            { question: "एकाच सेल २ स्तंभांवर?", options: ["colspan=\"2\"", "rowspan=\"2\"", "span=\"2\"", "col=\"2\""], correct: 0 },
            { question: "header cell कशासाठी?", options: ["th", "td", "tr", "caption"], correct: 0 },
            { question: "डेटा गट कोणता?", options: ["tbody", "thead", "tfoot", "caption"], correct: 0 },
        ],
        challenge: {
            prompt: "caption + thead + colspan तक्ता बनवा",
            starterCode: `<table>
  <caption>माझा तक्ता</caption>
  <thead><tr><th>नाव</th></tr></thead>
</table>`,
            expectedOutput: "Renders structured table",
        },
        interviewQuestions: ["colspan vs rowspan?", "headers मध्ये काय?"],
        related: ["html-forms-advanced", "html-svg-canvas"],
        prev: "html-forms-advanced",
        next: "html-svg-canvas",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-svg-canvas",
        categoryId: "web",
        title: "SVG & Canvas - रेखाचित्र वेबवर",
        marathiTitle: "inline SVG, shapes, canvas element, graphics, script-free markup",
        level: "beginner",
        minutes: 18,
        summary: "svg, circle, rect, line, polygon, text, path, canvas, width, height, graphics.",
        sections: [
            { title: "1. SVG म्हणजे काय?", content: "SVG म्हणजे Scalable Vector Graphics — आकार, रेषा, आकार यांची गणितीय चित्रे.\nप्रत्येक SVG घटक वेक्टर — म्हणजे स्केलवर धार नाही. कितीही मोठा केला तरी स्पष्ट.\nएक्सएमएल सारखी संरचना — <svg> मध्ये shapes tags. पेजवरच लिहिता येतं.\nलोगो, चिन्हे, नकाशे, ग्राफ — SVG चा व्यापक वापर.\nCSS ने class/image सारखी SVG रंग, आकार बदलता येतो — पूर्ण शक्ती.", code: `<svg width="200" height="100" viewBox="0 0 200 100">
  <rect x="10" y="10" width="80" height="60" fill="teal"></rect>
  <circle cx="150" cy="50" r="30" fill="orange"></circle>
</svg>`, codeLanguage: "html" },
            { title: "2. SVG आकार", content: "SVG चे मूल आकार: rect, circle, line, polygon, path.\nrect साठी x, y, width, height. circle साठी cx, cy, r. line साठी x1, y1, x2, y2.\npolygon बिंदूंच्या सूचीने — points=\"10,10 90,10 50,80\". अनेक बाजूचे आकार.\nfill रंग, stroke किनार, stroke-width जाडी — व्हिज्युअल गुणधर्म.\nसंरचना उघडून पहा: coord मधली प्रत्येक जागा math ने नियंत्रित.", code: `<svg width="300" height="120">
  <rect x="5" y="20" width="90" height="60" fill="skyblue"></rect>
  <line x1="120" y1="15" x2="120" y2="95" stroke="black" stroke-width="3"></line>
  <polygon points="140,95 160,15 180,95" fill="gold"></polygon>
  <circle cx="230" cy="55" r="25" fill="tomato"></circle>
</svg>`, codeLanguage: "html" },
            { title: "3. text आणि path", content: "SVG मध्ये मजकूरही — <text> element. x, y ने स्थान, font-size label.\ntext ॲनिमेशन/लिंक सह वापरता येतो — पण मराठी फॉन्ट समर्थन ब्राउझरभर भिन्न.\npath हा सर्वात लवचिक — curves, arcs वेगवेगळ्या खुणा. d attribute मधील commands.\nM रेषा सुरू, L रेषा ओढतो, Z बंद करतो. Q किंवा C वक्र.\nपहिला path साधा ठेवा; जटिलतेतून शक्यता वाढतात.", code: `<svg width="300" height="120">
  <text x="10" y="60" font-size="24" fill="darkgreen">मराठी SVG</text>
  <path d="M 40 90 L 90 30 L 140 90 Z" fill="none" stroke="purple" stroke-width="3"></path>
</svg>`, codeLanguage: "html" },
            { title: "4. canvas — पिक्सेल रचना", content: "<canvas> हा एक रिकामा कॅनव्हास — त्याच्यात काढलेली चित्रे JavaScript ने. HTML मध्ये फक्त element.\nपिक्सेल आधारित — प्रत्येक बिंदूचा रंग. SVG सारखा स्केल होत नाही; image सारखा.\ncanvas मधील content search engine ला दिसत नाही.\ncanvas वरील drawing ला JavaScript हवा; जेव्हा गेम किंवा फोटो editing हवं तेव्हा canvas.", code: `<canvas width="300" height="150">
  तुमचा ब्राउझर canvas सपोर्ट करत नाही.
</canvas>`, codeLanguage: "html" },
            { title: "5. SVG वि canvas", content: "कधी कोणते? SVG आकृती नेहमी sharp राहते; canvas रास्टर — दोन्ही वेगळ्या दिशा.\nSVG: लोगो, चिन्ह, नकाशे, चार्ट — मजकूर/semantic ची गरज. Scale-able, accessible.\nCanvas: गेम, डेटा viz मोठ्या प्रमाणात, फोटो tools — पिक्सेल नियंत्रण.\nSVG DOM मध्ये राहतं; canvas paint करतो. अनेक हजार घटकांनंतर canvas वेगवान.\nचांगली निवड: SVG साध्या रचनेत, canvas गतीमध्ये. प्रत्येकाचं सामर्थ्य समजून घ्या.", code: `<svg width="200" height="100">
  <rect width="100%" height="100%" fill="lightgray"></rect>
  <text x="10" y="55" font-size="20">Vector</text>
</svg>
<canvas width="200" height="100"></canvas>`, codeLanguage: "html" },
            { title: "6. जागा व्यवस्थापन", content: "SVG चा आकार width/height किंवा viewBox. viewBox प्रमाण राखतो.\nwidth=\"100%\" — responsive; पेजच्या रुंदीप्रमाणे स्केल. height auto.\ncanvas साठी width/height static — आकार बदल इंटरएक्टिव्ह नव्हे तर re-render.\na11y: SVG मध्ये <title> आणि <desc> — screen reader वाचतो. canvas मध्ये fallback text.\nदोन्ही graphics HTML मध्येच संरचित होतात; external plugin लागत नाही.", code: `<svg viewBox="0 0 200 100" width="100%">
  <title>वाढ चार्ट</title>
  <desc>महिन्यांची वाढ दाखवणारा चार्ट</desc>
  <rect x="10" y="40" width="40" height="50" fill="blue"></rect>
  <rect x="70" y="20" width="40" height="70" fill="green"></rect>
  <rect x="130" y="10" width="40" height="80" fill="red"></rect>
</svg>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक लहान वाढचा चार्ट SVG ने बनवू.\nतीन आडवे रंगीत बार — तिन्ही rect. खाली text labels.\ntitle आणि desc a11y साठी. viewBox responsive प्रमाण.\nचार्ट साधा, स्पष्ट — आकड्यांची कल्पना नीट उठते.\nहा चार्ट कोणत्याही पेजमध्ये modal.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>मासिक वाढ</title>
  </head>
  <body>
    <h1>तीन महिन्यांची वाढ</h1>
    <svg viewBox="0 0 300 160" width="100%">
      <title>विक्री वाढ</title>
      <desc>जानेवारी, फेब्रुवारी, मार्चची तुलना</desc>
      <rect x="20" y="60" width="70" height="80" fill="skyblue"></rect>
      <rect x="115" y="40" width="70" height="100" fill="orange"></rect>
      <rect x="210" y="20" width="70" height="120" fill="green"></rect>
      <text x="25" y="150" font-size="12">जाने</text>
      <text x="120" y="150" font-size="12">फेब्रु</text>
      <text x="215" y="150" font-size="12">मार्च</text>
    </svg>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["SVG scala का होते?", "canvas मध्ये काय काढतं?", "viewBox काय करतो?", "a11y साठी canvas काय?"],
        quiz: [
            { question: "वेक्टर चित्र कोणता?", options: ["svg", "canvas", "img", "picture"], correct: 0 },
            { question: "canvas मध्ये कोण काढतं?", options: ["JavaScript", "HTML", "CSS", "text"], correct: 0 },
            { question: "गोल आकार?", options: ["circle", "rect", "line", "polygon"], correct: 0 },
            { question: "screen reader साठी?", options: ["title+desc", "width", "fill", "viewBox"], correct: 0 },
        ],
        challenge: {
            prompt: "तीन rect आणि text चा चार्ट बनवा",
            starterCode: `<svg width="200" height="100">
  <rect x="10" y="20" width="50" height="60" fill="blue"></rect>
</svg>`,
            expectedOutput: "Renders SVG bar chart",
        },
        interviewQuestions: ["SVG vs canvas निवड?", "viewBox रहस्य?"],
        related: ["html-tables-advanced", "html-text-international"],
        prev: "html-tables-advanced",
        next: "html-text-international",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-text-international",
        categoryId: "web",
        title: "International Text - भाषा आणि दिशा",
        marathiTitle: "lang, dir, bdi, bdo, ruby, wbr, meter, progress, dialog",
        level: "beginner",
        minutes: 18,
        summary: "lang, dir, bdi, bdo, ruby, rt, rp, wbr, meter, progress, dialog.",
        sections: [
            { title: "1. lang आणि dir", content: "HTML मध्ये भाषा सांगण्यासाठी lang attribute: <html lang=\"mr\">. प्रत्येक भागालाही शक्य.\nlang मुळे screen reader योग्य उच्चार, ब्राउझर योग्य spellcheck करतो.\ndir attribute मजकुराची दिशा — ltr बाक ते उजवीकडे, rtl उजवीकडून बाक.\nमराठी, हिंदी ltr; अरबी, हिब्रू rtl. मिश्र मजकूर दिशांची गरज.\nlang आणि dir हे a11y चे पाया — त्यांच्याशिवाय वाचन निर्जीव होतं.", code: `<html lang="mr">
<p>मराठीतून लिहिलेला मजकूर.</p>
<p dir="rtl">हा मजकूर उजवीकडून.</p>
</html>`, codeLanguage: "html" },
            { title: "2. bdi आणि bdo", content: "मिश्र दिशेच्या मजकुरात bdi आणि bdo दिशेचे नियंत्रक.\n<bdi> isolated text — त्याची दिशा सभोवतालच्या मजकुराच्या प्रभावापासून वेगळी राहते.\nउदा. user list मध्ये अरबी अक्षरांची नावे — bdi मध्ये दिशा बरोबर राहते.\n<bdo> जबरदस्ती दिशा — dir प्रमाणे ltr/rtl; सजावटीसाठी नको.\nमिश्र मजकुरात अचूकता — बाकी पोस्ट दिशेचा परिणाम inputs ने.", code: `<p>वापरकर्ते: <bdi>अली</bdi>, <bdi>विनय</bdi>, <bdi>कात्या</bdi></p>
<p><bdo dir="rtl">हा मजकूर उलटा दिसेल</bdo></p>`, codeLanguage: "html" },
            { title: "3. ruby — उच्चार टीप", content: "<ruby> element मजकुरावर छोटी उच्चार टीप दाखवतो — पूर्व आशियाई भाषांमध्ये सामान्य.\n<ruby>शब्द<rt>उच्चार</rt></ruby> — rt मध्ये मुख्यचा उच्चार वर दिसतो.\nrp — browsers आधार न करणाऱ्यासाठी कंस — <rp>(</rp><rt>…</rt><rp>)</rp>.\nजपानी कानजी, चायनीज — pause यांच्यासाठी ruby मोलाची.\nमराठीत कमी, पण भाषेची संधी — HTML वरच्या रचना पोहोचते.", code: `<ruby>संज्ञा<rt>सं-ज्ञा</rt></ruby>
<ruby>हिंदी<rt>हिं-दी</rt></ruby>`, codeLanguage: "html" },
            { title: "4. wbr — ओळ तोडणी ठिकाण", content: "<wbr> मजकुरात ओळ तोडण्याचे ठिकाण खूण करतो — गरज असल्यास तुम्ही.\nएकाच ठिकाणी खूप लांब शब्द असेल तर ते अडचणीचं. wbr शिफारस.\nwbr हा invisible — फक्त \"येथे तोड शक्य\" असं सूचन.\nदीर्घ URLs, फाइल नावे, संगणक कोड — wbr उपयुक्त.\nwbr visible म्हणतात — दिसत नाही, पण रचना सोयीस्कर करतो.", code: `<p>आपलं पेज https://example.com/बहुत-लांब<wbr>-नाव.jpg हे उदाहरण.</p>
<p>असा दीर्घ शब्द <wbr> ब्रेक <wbr> दिसेल.</p>`, codeLanguage: "html" },
            { title: "5. meter आणि progress", content: "<meter> मोजमाप दाखवतो — 0 ते मर्यादेत. उदा. बॅटरी, स्टोरेज.\n<meter value=\"7\" min=\"0\" max=\"10\"></meter> — मूल्य, किमान, कमाल.\nlow, high, optimum attributes — रंगाचे दर्शक बदलतात.\n<progress> प्रगती दाखवतो — काम पूर्ण होण्याची हालचाल. value आणि max.\nmeter एक आकड्याची स्थिती; progress कार्याची प्रगती — ही निवड समजून घ्या.", code: `<p>स्टोरेज: <meter value="6" min="0" max="10">60%</meter></p>
<p>प्रगती: <progress value="40" max="100">40%</progress></p>`, codeLanguage: "html" },
            { title: "6. dialog — आधुनिक संवाद", content: "<dialog> element — नवीन HTML5 क्षमता: साधं dialog आणि modal.\n<dialog open> मजकूर दाखवतो; बंद करणे JavaScript द्वारे होते.\ndialog मध्ये <form method=\"dialog\"> बंद करण्यासाठी बटन sprite.\nmodal-like — नवीन स्टाइल, सुरुवात खुली open attribute.\nजसजसं HTML5 वाढतं तसतसं dialog साधं UI बनते.", code: `<dialog open>
  <p>तुमचा संदेश पाठवला गेला.</p>
  <form method="dialog">
    <button value="close">ठीक आहे</button>
  </form>
</dialog>`, codeLanguage: "html" },
            { title: "Mini Project", content: "एक आंतरराष्ट्रीय लेख पेज बनवू.\nlang=\"mr\" आधी. एक rtl नमुना bdi मध्ये. एक ruby उदाहरण.\nएक wbr दीर्घ शब्द. meter आणि progress दोन्ही.\ndialog एक — स्थान नकाशा \"पाठवले\" संदेश.\nसर्व tags समजून पेज तयार — आधुनिक HTML5 चा नमुना.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <title>आंतरराष्ट्रीय मजकूर</title>
  </head>
  <body>
    <h1>भाषांची सोय</h1>
    <p>मिळालेले: <bdi>علي</bdi>, <bdi>विनय</bdi></p>
    <ruby>संज्ञा<rt>सं-ज्ञा</rt></ruby>
    <p>साइट: उदाहरण.वेब<wbr>/भाषा-संदर्भ</p>
    <p>स्टोरेज <meter value="6" min="0" max="10">60%</meter></p>
    <p>अपलोड <progress value="45" max="100">45%</progress></p>
    <dialog open>
      <p>संदेश पाठवला गेला.</p>
      <form method="dialog"><button>ठीक आहे</button></form>
    </dialog>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["lang कशासाठी?", "bdi म्हणजे?", "meter वि progress?", "ruby कशासाठी?"],
        quiz: [
            { question: "भाषा कोणत्या attribute ने?", options: ["lang", "dir", "id", "class"], correct: 0 },
            { question: "उजव्या-बाकी भाषांसाठी?", options: ["dir=\"rtl\"", "dir=\"ltr\"", "lang=\"rtl\"", "text=\"rtl\""], correct: 0 },
            { question: "उच्चार टीप?", options: ["ruby", "rt", "bdi", "wbr"], correct: 0 },
            { question: "कामाची प्रगती?", options: ["progress", "meter", "output", "div"], correct: 0 },
        ],
        challenge: {
            prompt: "lang + meter + progress पेज बनवा",
            starterCode: `<html lang="mr">
<body>
  <meter value="5" min="0" max="10"></meter>
</body>
</html>`,
            expectedOutput: "Renders international text elements",
        },
        interviewQuestions: ["dir म्हणजे काय?", "dialog कसा बंद करतो?"],
        related: ["html-svg-canvas", "html-portfolio-project"],
        prev: "html-svg-canvas",
        next: "html-portfolio-project",
        levelLabel: exports.HTML2_LABEL,
    },
    {
        slug: "html-portfolio-project",
        categoryId: "web",
        title: "Portfolio Page - संपूर्ण प्रकल्प एकत्र",
        marathiTitle: "Mini Project - Level 2 चा सर्वांगीण सराव",
        level: "beginner",
        minutes: 18,
        summary: "semantic layout, media, meta, SEO, accessibility, responsive images, forms, tables, profile page.",
        sections: [
            { title: "1. प्रकल्पाची उद्दिष्टे", content: "आता Level 2 चे सर्व ज्ञान एकत्र — एक व्यक्तिमत्त्वाचं portfolio पेज.\nउद्दिष्टे: semantic रचना, समृद्ध head/SEO, accessible फॉर्म, responsive image.\nपेज स्वतःची ओळख — आवडी, कौशल्ये, संपर्क. वाचकाला तुमची माहिती.\nमराठी अभ्यासकांसाठी उदाहरण: संपूर्ण कोड मराठीत.\nपुढील धडे सर्व मिळून एक आदर्श वेबपेज बांधतो.", code: `<h1>मराठी वेब शाळा — विद्यार्थी प्रोफाइल</h1>
<p>हे पेज HTML Level 2 चा सारांश आहे.</p>`, codeLanguage: "html" },
            { title: "2. head आणि SEO", content: "पेजचं head व्यावसायिक ठेवा — charset, viewport, description.\ntitle एक अचूक: \"मराठी वेब — विद्यार्थी प्रोफाइल\". description चांगला.\nog:title, og:description, og:image — सामाजिक वाटणीसाठी. theme-color आणि favicon.\nrobots meta index,follow. canonical मूळ पत्ता.\nहा head पेज शोधात उठतं.", code: `<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="मराठी वेब विद्यार्थ्याचं प्रोफाइल पेज.">
  <meta property="og:title" content="मराठी वेब प्रोफाइल">
  <meta property="og:description" content="आमच्या शाळेचा विद्यार्थी.">
  <title>मराठी वेब — प्रोफाइल</title>
</head>`, codeLanguage: "html" },
            { title: "3. semantic रचना", content: "header मध्ये नाव आणि nav मधील दुवे. main मध्ये मुख्य मजकूर.\narticle — परिचय. section — कौशल्ये. aside — बाजूची माहिती.\nfigure — फोटो. figcaption नावापुढे. details — FAQ.\nfooter — संपर्क आणि copyright. nav सर्व दुवे व्यवस्थित.\nहे सर्व tags साहित्य रचना परिपूर्ण.", code: `<header>
  <h1>नमस्कार, मी राहुल!</h1>
</header>
<nav>
  <a href="#मुख्य">मुख्य</a> | <a href="#कौशल्ये">कौशल्ये</a> | <a href="#संपर्क">संपर्क</a>
</nav>
<main id="मुख्य">
  <article>
    <h2>माझी ओळख</h2>
    <p>मी मराठीतून वेब शिकतो.</p>
  </article>
</main>`, codeLanguage: "html" },
            { title: "4. responsive image", content: "फोटो responsive — तीन आकार srcset आणि sizes.\nपहिला फोटो fetchpriority=\"high\" — लगेच दिसतो. इतर lazy.\nalt अर्थपूर्ण — चित्रात कोण, काय. width height स्थिर layout.\nWebP आधारावर, जुने fallback नाही.\nगॅलरी image त्वरित आणि झीरो effect.", code: `<img src="ravi-900.jpg" alt="राहुलचं प्रोफाइल चित्र"
     srcset="ravi-400.jpg 400w, ravi-900.jpg 900w, ravi-1400.jpg 1400w"
     sizes="(max-width: 700px) 100vw, 600px"
     fetchpriority="high" width="600" height="450">`, codeLanguage: "html" },
            { title: "5. accessible फॉर्म", content: "संपर्क फॉर्म — प्रत्येक label, required फील्ड, autocomplete.\nfieldset मध्ये नाव/ईमेल group. textarea टिप्पणीसाठी.\nselect शहर, datalist कंपन्या. file image आवश्यक नाही.\nप्रत्येक input ला id आणि label for जोडणी.\nफॉर्म सर्वांसाठी — screen reader, keyboard.", code: `<form action="#" method="post">
  <fieldset>
    <legend>संपर्क</legend>
    <label for="na">नाव:</label>
    <input id="na" name="नाव" type="text" required autocomplete="name">
    <label for="em">ईमेल:</label>
    <input id="em" name="ईमेल" type="email" required autocomplete="email">
    <label for="no">टिप्पणी:</label>
    <textarea id="no" name="टिप्पणी" rows="4" cols="40"></textarea>
  </fieldset>
  <button type="submit">पाठवा</button>
</form>`, codeLanguage: "html" },
            { title: "6. तक्ता आणि media", content: "कौशल्यांचा तक्ता — caption, thead/tbody, scope.\nस्तंभ: कौशल्य, पातळी, वर्षे. meter आत — पातळी दाखवतो.\naudio एक — मराठी संगीत. video एक शिकवणी.\nप्रत्येक media ला captions/transcript दुवा.\nहा भाग पेजची गहिराई दर्शवतो — data आणि media.", code: `<table>
  <caption>माझी कौशल्ये</caption>
  <thead>
    <tr><th scope="col">कौशल्य</th><th scope="col">पातळी</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">HTML</th><td>प्रगत</td></tr>
    <tr><th scope="row">CSS</th><td>मध्यम</td></tr>
  </tbody>
</table>
<audio src="mazhe-gane.mp3" controls></audio>`, codeLanguage: "html" },
            { title: "Mini Project", content: "संपूर्ण portfolio — सर्व सांग कोड एकत्र लिहा.\nhead पूर्ण, semantic body, responsive image, accessible form.\nकौशल्य तक्ता, media, footer. सर्व chain भाग जुळेल.\nकोड तपासा — validation, spelling, आकार. clean structure.\nहा पेज प्रकल्प HTML Level 1+2 चा आरसा.", code: `<!DOCTYPE html>
<html lang="mr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="मराठी वेब विद्यार्थ्याचं प्रोफाइल.">
    <title>मराठी वेब — प्रोफाइल</title>
  </head>
  <body>
    <a href="#मुख्य" class="skip-link">मुख्य मजकुराकडे</a>
    <header>
      <h1>नमस्कार, मी राहुल!</h1>
    </header>
    <nav>
      <a href="#मुख्य">मुख्य</a> | <a href="#कौशल्ये">कौशल्ये</a> | <a href="#संपर्क">संपर्क</a>
    </nav>
    <main id="मुख्य">
      <figure>
        <img src="ravi-900.jpg" alt="राहुलचं चित्र"
             srcset="ravi-400.jpg 400w, ravi-900.jpg 900w"
             sizes="(max-width: 600px) 100vw, 500px"
             fetchpriority="high" width="500" height="350">
        <figcaption>मराठी वेबचा विद्यार्थी</figcaption>
      </figure>
      <section id="कौशल्ये">
        <h2>कौशल्ये</h2>
        <table>
          <caption>माझी पातळी</caption>
          <thead>
            <tr><th scope="col">कौशल्य</th><th scope="col">पातळी</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">HTML</th><td>प्रगत</td></tr>
            <tr><th scope="row">CSS</th><td>मध्यम</td></tr>
          </tbody>
        </table>
      </section>
      <aside>
        <p>टीप: हे पेज HTML Level 2 चा सराव आहे.</p>
      </aside>
    </main>
    <section id="संपर्क">
      <h2>संपर्क करा</h2>
      <form action="#" method="post">
        <fieldset>
          <legend>तुमची माहिती</legend>
          <label for="na">नाव:</label>
          <input id="na" name="नाव" type="text" required>
          <label for="em">ईमेल:</label>
          <input id="em" name="ईमेल" type="email" required>
        </fieldset>
        <button type="submit">पाठवा</button>
      </form>
    </section>
    <footer>
      <p>&copy; 2026 राहुल — मराठी वेब शाळा</p>
    </footer>
  </body>
</html>`, codeLanguage: "html" },
        ],
        practiceQuestions: ["portfolio मध्ये काय काय हवं?", "responsive image मध्ये कोणती attribute?", "accessible फॉर्म कसा?", "semantic रचना का?"],
        quiz: [
            { question: "पेजची सुरुवात कोणता tag?", options: ["DOCTYPE html", "header", "nav", "h1"], correct: 0 },
            { question: "search engine साठी कोणता meta?", options: ["description", "viewport", "charset", "theme-color"], correct: 0 },
            { question: "form मधील फील्डचं नाव?", options: ["label", "title", "span", "placeholder"], correct: 0 },
            { question: "चित्र लोडिंग वेग?", options: ["srcset + sizes", "alt", "width", "copyright"], correct: 0 },
        ],
        challenge: {
            prompt: "portfolio पेज — semantic + form + image बनवा",
            starterCode: `<main id="मुख्य">
  <h1>माझं प्रोफाइल</h1>
</main>`,
            expectedOutput: "Renders complete portfolio page",
        },
        interviewQuestions: ["प्रकल्पातून काय शिकलो?", "यापुढे कोणत्या दिशेला जायचं?"],
        related: ["html-text-international", "html-semantics"],
        prev: "html-text-international",
        next: "html-semantics",
        levelLabel: exports.HTML2_LABEL,
    },
];
