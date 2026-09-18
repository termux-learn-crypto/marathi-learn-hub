import type { Tutorial } from "@/data/tutorials";

// === CSS · LEVEL 13 — Precision & Control ===
export const CSS13_LABEL = "CSS · Level 13 — Precision & Control";

export const cssLevel13: Tutorial[] = [
  {
    slug: "css-grid-template",
    categoryId: "web",
    title: "Grid Template",
    marathiTitle: "grid-template — रचना नकाशा",
    level: "advanced",
    minutes: 40,
    summary: "grid-template-areas सह जागा नकाशा.",
    sections: [
      {
        title: "grid-template — रचना नकाशा म्हणजे काय?",
        content: "grid-template-areas सह जागा नकाशा.\ngrid-template-areas म्हणजे layout चा नकाशा — रचना नावांमध्ये मांडलेली.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? grid-template — रचना नकाशा चे फायदे आणि महत्त्व",
        content: "✓ प्रत्येक child एकाच ग्रिडवर जुळतो; नकाशाचे नाव आणि grid-area नाव एकच असणे आवश्यक.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. areas कल्पना", content: "grid-template-areas म्हणजे layout चा नकाशा — रचना नावांमध्ये मांडलेली. प्रत्येक नाव एक cell; एकाच नावाचे अनेक cell मिळून एक क्षेत्र बनते.\nउदा. .layout मध्ये वर header header, मध्ये main side, आणि खाली footer footer.\nया तीन ओळी वाचल्या की संपूर्ण नकाशा नजरेसमोर येतो — कोणताही कोड वाचता.\nहा ग्रिडला मिळालेला खास वरदान — रचना खरोखर दृश्य रूपात.\nक्षेत्रांची नावे अर्थपूर्ण ठेवा — वाचणे आणि नियंत्रण दोन्ही सोपे होते.", code: `.layout {
  grid-template-areas:
    "header header"
    "main side"
    "footer footer";
}`, codeLanguage: "css" },
      { title: "2. area नाव", content: "नकाशात नाव लिहिलं की त्या नावाने संबंधित घटकाला grid-area नियम द्यावा लागतो.\nउदा. .header { grid-area: header; } — हा घटक नकाशातील header क्षेत्रात बसतो.\nतसाच .main { grid-area: main; } — main क्षेत्राची नोंद.\nप्रत्येक child एकाच ग्रिडवर जुळतो; नकाशाचे नाव आणि grid-area नाव एकच असणे आवश्यक.\nजर नाव जुळले नाही तर घटक अनिश्चित ठिकाणी टाकला जातो — नियंत्रण सुटते.\nम्हणून नकाशा आणि नावे एकत्र लिहा — रचना स्पष्ट आणि बांधकामावर प्रभुत्व.", code: `.header { grid-area: header; }
.main { grid-area: main; }`, codeLanguage: "css" },
      { title: "3. मध्य जागा", content: "नकाशात कधी कधी एक cell रिकामा हवा असतो — तो . (बिंदू) ने दाखवतात.\nउदा. header header नंतर . main — पहिला cell रिकामा, दुसऱ्यामध्ये main.\nहे असे ठिकाणी उपयुक्त — उदा. वरच्या ओळीत एकटाच main भाग हवा आणि बाजूला जागा नको.\nनियम — बिंदू म्हणजे रिकामी जागा; नाव म्हणजे ते क्षेत्र तिथे बसवा.\nरिकाम्या सेलमुळे रचना श्वास घेते आणि नकाशा अधिक वाचनीय होतो.", code: `.layout {
  grid-template-areas:
    "header header"
    ". main"
    "footer footer";
}`, codeLanguage: "css" },
      { title: "4. दोन मध्य", content: "तीन स्तंभ असलेल्या नकाशात मुख्य, साईड आणि आणखी एक क्षेत्र एकत्र ठेवता येतात.\nउदा. वरील h h h, मधली m s a, खाली f f f.\nतीन स्तंभ असल्याने प्रत्येक ओळीत नेमके तीन cell असणे आवश्यक.\nयेथे नियंत्रण स्पष्ट — अनेक विभागांची रचना एकाच नकाशातून.\nएखाद्या विभागाला अधिक रुंदी हवी असल्यास त्याचे नाव अधिक cell वर ठेवा.", code: `.layout {
  grid-template-areas:
    "h h h"
    "m s a"
    "f f f";
}`, codeLanguage: "css" },
      { title: "5. responsive नियम", content: "मोबाइलच्या रुंदीवर तीन स्तंभ खोडून एक स्तंभ करणे बरे — @media ने नकाशाच स्विच करा.\nउदा. @media (max-width: 600px) मध्ये नवीन नकाशा — एकच स्तंभ: h, m, s, f.\nप्रत्येक क्षेत्र ओळ-ओळ खाली उतरतं — वाचन सरळ होतं.\nmedia query हीच संदर्भानुसार रचना बदलण्याची योजना.\nएक नकाशा desktop साठी, एक मोबाइलसाठी — दोन्ही लिहून responsive layout पूर्ण.", code: `@media (max-width: 600px) {
  .layout {
    grid-template-areas:
      "h"
      "m"
      "s"
      "f";
  }
}`, codeLanguage: "css" },
      { title: "6. एकत्र नियम", content: "नकाशा आणि ओळांची उंची एकत्र करून लेआउट पूर्ण बनतं.\nउदा. .layout { grid-template-areas: 'h h' 'm s' 'f f'; grid-template-rows: auto 1fr auto; }.\nauto म्हणजे ओळ मजकुरानुसार; 1fr म्हणजे मधली ओळ उरलेली जागा व्यापते.\nयाचा अर्थ — header आणि footer नैसर्गिक; मधला मुख्य भाग विस्तारण्यायोग्य.\nनकाशा आणि rows एकत्र आल्यावर लेआउट प्रत्यक्षात परिपूर्ण होतं.", code: `.layout {
  grid-template-areas: "h h" "m s" "f f";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी संपूर्ण पेजचा नकाशा तयार करा. .page ला दोन ओळींचा नकाशा द्या — header header, main sidebar, footer footer.\nत्यासोबत grid-template-rows: auto 1fr auto — वर-खाली नैसर्गिक, मध्य विस्तरण.\nप्रत्येक विभागाला grid-area ने नाव द्या — header, main, sidebar, footer.\nमोबाइलसाठी @media मध्ये एक-स्तंभ नकाशा जोडा.\nहे झाले की एका नकाशातून संपूर्ण पेजची रचना नियंत्रित — दृश्य आणि अनुभव दोन्ही.", code: `.page {
  grid-template-areas: "header header" "main sidebar" "footer footer";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["areas काय?", "grid-area कुठे?", "empty सेल कसा?", "responsive कसा?"],
    quiz: [
      { question: "grid-template-areas?", options: ["नकाशा", "रंग", "ध्वनी"], correct: 0 },
      { question: "grid-area?", options: ["नाव द्या", "जोडा रंग", "रेखा"], correct: 0 },
      { question: ". सेल?", options: ["रिकामा", "मुख्य", "थर"], correct: 0 },
      { question: "responsive?", options: ["areas बदल", "ध्वनी", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "पृष्ठ नकाशा तयार करा.",
      starterCode: `.page {
  grid-template-areas: "header header" "main sidebar" "footer footer";
  grid-template-rows: auto 1fr auto;
}`,
      expectedOutput: "Marathi page layout by named areas",
    },
    interviewQuestions: ["areas फायदा?", "सेल रिकामा कधी?"],
    related: ["css-auto-fit-fill", "css-grid-system", "css-grid-auto-flow"],
    prev: "css-marathi-capstone12",
    next: "css-auto-fit-fill",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-auto-fit-fill",
    categoryId: "web",
    title: "Auto Fit Fill",
    marathiTitle: "auto-fit — कार्ड नियम",
    level: "advanced",
    minutes: 40,
    summary: "repeat auto-fit auto-fill responsive कार्ड.",
    sections: [
      {
        title: "auto-fit — कार्ड नियम म्हणजे काय?",
        content: "repeat auto-fit auto-fill responsive कार्ड.\nrepeat(auto-fit, minmax(220px, 1fr)) ही एकच ओळ संपूर्ण responsive ग्रिड बनवते — स्तंभांची संख्या आपोआप.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? auto-fit — कार्ड नियम चे फायदे आणि महत्त्व",
        content: "✓ auto-fill आणि auto-fit बघायला बारीक सारखे; पण फरक महत्त्वाचा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. auto-fit कल्पना", content: "repeat(auto-fit, minmax(220px, 1fr)) ही एकच ओळ संपूर्ण responsive ग्रिड बनवते — स्तंभांची संख्या आपोआप.\nminmax म्हणजे किमान-जास्त मर्यादा: प्रत्येक स्तंभ किमान 220px, जास्तीत जास्त 1fr (उरलेल्या जागेचा समान हिस्सा).\nauto-fit — जिथे पुरेशी रुंदी असेल तिथे जास्त स्तंभ बसतात; मोबाइलवर एकच स्तंभ.\nकार्डे कितीही असली तरी एकाच नियमाने त्यांची वळणे आपोआप होतात.\nहेच auto-fit चं तत्त्व — media query न लिहिता रुंदीनुसार लवचिकता.", code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`, codeLanguage: "css" },
      { title: "2. auto-fill नियम", content: "auto-fill आणि auto-fit बघायला बारीक सारखे; पण फरक महत्त्वाचा.\nauto-fill ग्रिडच्या रुंदीतील रिकाम्या जागेतही नवीन track ठेवतो — जरी त्यात भाग असले नाहीत.\nउदा. मोठ्या स्क्रीनवर दोन कार्ड असल्यास auto-fill तिसरा रिकामा track सोडतो.\nauto-fit मात्र रिकामे track विलीन करून कार्डे रुंद करतो.\nदोन्ही समजायला एकच ग्रिड दोन्ही मूल्यांनी बदलून पाहा — फरक डोळ्यांसमोर येतो.", code: `.grid {
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}`, codeLanguage: "css" },
      { title: "3. एकfr तोल", content: "minmax मधील दुसरा भाग 1fr — स्तंभांच्या रुंदी वाढीचा तोल.\nप्रत्येक स्तंभाला उरलेल्या जागेचा समान हिस्सा जातो; 1fr म्हणजे एका भागाची योजना.\nउदा. .cards ला repeat(auto-fit, minmax(180px, 1fr)) — प्रत्येक कार्ड 180px पेक्षा कमी नाही.\nस्क्रीन वाढली की प्रत्येक स्तंभ समान रीतीने रुंद होतो.\n1fr ची ताकद — स्तंभ समान राहतात; कोणी धड जास्त रुंद नाही.", code: `.cards {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}`, codeLanguage: "css" },
      { title: "4. अंतर नियम", content: "ग्रिडमध्ये gap घटकांमधील अंतर सांगतो — display: flex प्रमाणेच.\nउदा. .grid { gap: 16px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }.\nप्रत्येक कार्डामध्ये समान अंतर — नित्य आणि सुसंगत.\ngap एकाच गुणधर्मात सर्व बाजूंचे अंतर नियंत्रित करतो.\nयोग्य gap ठेवल्यास कार्ड एकमेकांना चिकटत नाहीत — रचना स्वच्छ आणि वाचनीय.", code: `.grid {
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}`, codeLanguage: "css" },
      { title: "5. fit vs fill", content: "fit आणि fill — दोन्ही पर्याय एकाच ग्रिडच्या संदर्भात समजून घेता येतात.\n.fill मध्ये repeat(auto-fill, minmax(200px, 1fr)) — रिकामे track कायम राहतात.\n.fit मध्ये auto-fit — रिकामे track विलीन होऊन कार्डे वाढतात.\nसमान minmax, पण वर्तणूक वेगळी — निवड तुमची.\nकार्डे भरून दिसावीत तर auto-fit; आकार स्थिर हवा असल्यास auto-fill.", code: `.fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
      { title: "6. आधार नियम", content: "repeat आणि minmax हे CSS grid चे परिपक्व भाग आहेत — आधुनिक ब्राउझरमध्ये भरघोस समर्थन.\nउदा. .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); } — सर्वत्र चालतं.\nजुन्या साइटसाठी fallback म्हणून display: block देखील चालतो; पण आता आवश्यकता फार कमी.\nब्राउझरच्या आधाराची मोठी प्रगती — हे नियम सुरक्षित.\nकुठल्याही नवीन प्रोजेक्टवर ही संरचना अवलंबता येते.", code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी product कार्ड्सचा ग्रिड बनवा. .products { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }.\nमोठ्या स्क्रीनवर चार स्तंभ; मोबाइलवर एक.\nप्रत्येक कार्ड minmax नुसार 200px ते 1fr — समान आणि लवचिक.\nअंतर, रुंदी आणि क्रम — एकाच नियमातून.\nहे झाले की media query न लिहिताच product पेज responsive — हीच auto-fit ची ताकद.", code: `.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["auto-fit काय?", "auto-fill कुठे?", "minmax का?", "gap कशी?"],
    quiz: [
      { question: "auto-fit?", options: ["रिकामा नको", "थांबे", "रंग"], correct: 0 },
      { question: "auto-fill?", options: ["रिकामा ठेवते", "नवीन", "ध्वनी"], correct: 0 },
      { question: "minmax?", options: ["किमान जास्त", "रेखा", "क्रम"], correct: 0 },
      { question: "1fr?", options: ["समान भाग", "मोठा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "कार्ड ग्रिड बनवा.",
      starterCode: `.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}`,
      expectedOutput: "Marathi products grid adapts to columns",
    },
    interviewQuestions: ["fit vs fill?", "minmax वापर?"],
    related: ["css-grid-template", "css-gap-mastery", "css-masonry-grid"],
    prev: "css-grid-template",
    next: "css-current-color",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-current-color",
    categoryId: "web",
    title: "Current Color",
    marathiTitle: "currentColor — रंग एक",
    level: "advanced",
    minutes: 40,
    summary: "currentColor सह रंग जुळणी.",
    sections: [
      {
        title: "currentColor — रंग एक म्हणजे काय?",
        content: "currentColor सह रंग जुळणी.\ncurrentColor हे CSS मधील खास मूल्य — त्याचा अर्थ म्हणजे सध्या मजकुराच्या color चे मूल्य.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? currentColor — रंग एक चे फायदे आणि महत्त्व",
        content: "✓ प्रत्येक वेळी stroke किंवा rgb मूल्ये लिहायची गरज नाही.\n✓ hover ने color बदलला की border दोन्ही — दुहेरी नियंत्रणाची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. currentColor कल्पना", content: "currentColor हे CSS मधील खास मूल्य — त्याचा अर्थ म्हणजे सध्या मजकुराच्या color चे मूल्य.\nउदा. .btn { border: 2px solid currentColor; } — बटणाच्या काठाचा रंग मजकुराच्या रंगासारखा.\nएकदा color बदललं की काठही आपोआप बदलतो — वेगळा नियम नको.\nहा संबंध एक-शून्याचा — रंग एकत्र आणि रचना सुरेल.\ntheme किंवा mode अनेक असलेल्या ठिकाणी currentColor हा खरा वरदान आहे.", code: `.btn {
  border: 2px solid currentColor;
}`, codeLanguage: "css" },
      { title: "2. shadow थर", content: "box-shadow मध्येही currentColor बसू शकतो — छायेचा रंग मजकुराच्या रंगासारखाच.\nउदा. .card { box-shadow: 0 4px 12px currentColor; } — खाली मऊ रंगीत छाया.\nजर color गडद किंवा हलका बदलला तर छाया आपोआप सामावते.\nछाया आणि रंग एकत्र — रचना एकसंध आणि खोल दिसते.\nही युक्ती बटण, कार्ड, अवतार यांच्या रूपात छान आकार घेते.", code: `.card {
  box-shadow: 0 4px 12px currentColor;
}`, codeLanguage: "css" },
      { title: "3. svg नियम", content: "SVG आकृत्या fill आणि stroke ने रंगतात — currentColor त्यांना मजकूर-रंगाशी जुळवण्याचा मार्ग.\nउदा. .icon { fill: currentColor; } — आयकॉन मजकुराचाच रंग धारण करतो.\nमजकुराचा रंग बदलला आणि आयकॉनही मागे बदलतो.\nप्रत्येक वेळी stroke किंवा rgb मूल्ये लिहायची गरज नाही.\ntheme बदलताना आयकॉनचा रंग रचनेशी तसाच जुळतो — एकसंध design.", code: `.icon {
  fill: currentColor;
}`, codeLanguage: "css" },
      { title: "4. किनार थर", content: "जेव्हा background पारदर्शक हवा असेल आणि फक्त किनार ठळक — तेव्हा currentColor उपयुक्त.\nउदा. .chip { background: transparent; color: #0d9488; border: 1px solid currentColor; }.\nरंग एकदा color मध्ये लिहिला की border आणि मजकूर दोन्ही तोच रंग.\nbackground मोकळा ठेवून chip सौम्य व एकसंध दिसतो.\nhover ने color बदलला की border दोन्ही — दुहेरी नियंत्रणाची गरज नाही.", code: `.chip {
  background: transparent;
  color: #0d9488;
  border: 1px solid currentColor;
}`, codeLanguage: "css" },
      { title: "5. hover नियम", content: "hover वर color बदलणे हे साधे नियंत्रण; currentColor मुळे तेच दुसऱ्या ठिकाणी पोहोचते.\nउदा. .btn:hover { color: #155e75; } — फक्त color नोंदवला; border आणि shadow आपोआप बदलतात.\nएक ठिकाण (color) हे सर्व थरांचे मुख्य स्रोत.\nही सवय राखली तर शैली एकाच निष्कर्षाने नियंत्रित होते.\nसोप्या प्रतिक्रियांचा क्रम — रंग बदलला की सर्व जुळले.", code: `.btn:hover {
  color: #155e75;
}`, codeLanguage: "css" },
      { title: "6. मर्यादा", content: "currentColor ची ताकद मर्यादित — तो फक्त मजकुराचा रंग घेतो; gradient, image किंवा जटिल रंगसंगती त्यात शक्य नाही.\nउदा. .only-color ला outline: 2px solid currentColor — एकरंगी ठोस किनार.\nमर्यादेतच खरे सौंदर्य — किनार, border, shadow, fill यांसाठी पुरेसे.\nजटिल रंगसंगती हवी असल्यास color-mix किंवा relative color सारखी आधुनिक तंत्रे.\nसोपे तर currentColor, गुंतागुंतीला नवीन color — तोल ठेवा.", code: `.only-color {
  outline: 2px solid currentColor;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी ब्रँड आयकॉन मजकुराचा रंग धारण करूया. .brand-icon { fill: currentColor; }.\nमजकूर रंग बदलल्यास ओळख चिन्ह आपोआप त्याच रंगात.\nहे वापरताना फक्त एकच ठिकाण (color) नियंत्रण करा — सर्व जुळते.\nमेनू, फूटर, थीम स्विच — आयकॉन कुठेही रंग एकसंध.\nहे झाले की रंग एका ठिकाणी नियंत्रित — रचना साधी व टिकाऊ.", code: `.brand-icon {
  fill: currentColor;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["currentColor काय?", "shadow कुठे?", "svg का?", "hover कसा?"],
    quiz: [
      { question: "currentColor?", options: ["मजकूर रंग", "ध्वनी", "रेखा"], correct: 0 },
      { question: "border मध्ये?", options: ["कड रंगे", "थर", "क्रम"], correct: 0 },
      { question: "svg fill?", options: ["आकृती रंगे", "रेषा", "ओळ"], correct: 0 },
      { question: "hover?", options: ["रंग बदल", "नवीन", "थांबे"], correct: 0 },
    ],
    challenge: {
      prompt: "icon रंग द्या.",
      starterCode: `.brand-icon {
  fill: currentColor;
}`,
      expectedOutput: "Marathi brand icon follows text color",
    },
    interviewQuestions: ["currentColor फायदा?", "gradient का नाही?"],
    related: ["css-cascade-keywords", "css-colors-background", "css-svg-styles"],
    prev: "css-auto-fit-fill",
    next: "css-cascade-keywords",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-cascade-keywords",
    categoryId: "web",
    title: "Cascade Keywords",
    marathiTitle: "cascade keywords — मूल्य नियम",
    level: "advanced",
    minutes: 40,
    summary: "unset inherit revert initial नियम.",
    sections: [
      {
        title: "cascade keywords — मूल्य नियम म्हणजे काय?",
        content: "unset inherit revert initial नियम.\nCSS नियमांची साखळी आणि ब्राउझरची पूर्वनिर्धारित मूल्ये — सगळे मिळून शैली तयार होते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? cascade keywords — मूल्य नियम चे फायदे आणि महत्त्व",
        content: "✓ फॉर्म reset आणि component आधारासाठी revert अधिकदा उपयोगी.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ मात्र हे लक्षात ठेवा — initial प्रत्येक गुणधर्मासाठी वेगळे असू शकते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. unset कल्पना", content: "CSS नियमांची साखळी आणि ब्राउझरची पूर्वनिर्धारित मूल्ये — सगळे मिळून शैली तयार होते. कधी सगळं उलगडून सुरुवातपासून द्यायचं असतं.\nall: unset हा नियम घटकाची शैली वारशाच्या किंवा initial मूल्यांवर आणतो.\nउदा. button { all: unset; } — बटणाच्या ब्राउझर शैली विसरून नवीन रूप.\nयाचा अर्थ — प्रत्येक गुणधर्म पूर्वनिर्धारित किंवा inherit मूल्यावर.\nबटणाला स्वच्छ सुरुवात द्यायलाच ही सवय.", code: `button {
  all: unset;
}`, codeLanguage: "css" },
      { title: "2. inherit थर", content: "काही गुणधर्म आपोआप वारशाला (inherit) येतात — color, font असे. पण काही येत नाहीत.\ninherit मूल्य लिहिलं म्हणजे घटक पालकाकडून तो गुणधर्म घेतो — हा आपला निर्णय.\nउदा. .child { color: inherit; } — मुलाचा रंग पालकासारखाच.\nअशा प्रकारे ब्राउझरच्या default ऐवजी पालकाचा रंग अंगीकार.\nवारसा स्पष्ट केल्यास रचना अंदाजी आणि इच्छितनुसार बनते.", code: `.child {
  color: inherit;
}`, codeLanguage: "css" },
      { title: "3. revert नियम", content: "revert म्हणजे शैली उलटणे — सर्व स्वतःचे आणि लायब्ररीचे नियम रोखून ब्राउझरच्या मूळ मूल्यांकडे परत.\nउदा. .reset { all: revert; } — आपले नियम बाजूला; ब्राउझरची default शैली आधार.\nहे user-agent शैलीकडे परतणं — बटण पुन्हा मूळ बटणासारखं.\nunset चा अर्थ initial मूल्य; revert चा अर्थ वास्तविक browser संदर्भात परतणे.\nफॉर्म reset आणि component आधारासाठी revert अधिकदा उपयोगी.", code: `.reset {
  all: revert;
}`, codeLanguage: "css" },
      { title: "4. initial थर", content: "initial म्हणजे त्या गुणधर्माचे मूळ परिभाषित प्रथम मूल्य.\nउदा. .zero { margin: initial; } — margin ब्राउझरच्या पहिल्या परिभाषेत (सामान्यतः 0).\nएखादा नियम वेगळी शैली देत असेल तर initial वापरून साफ करता येतं.\nमात्र हे लक्षात ठेवा — initial प्रत्येक गुणधर्मासाठी वेगळे असू शकते.\nप्रत्येक property चे initial मूल्य नेमकं माहीत असल्यासच त्याचा वापर करा.", code: `.zero {
  margin: initial;
}`, codeLanguage: "css" },
      { title: "5. layer बंद", content: "cascade layers ही आधुनिक CSS ची शैली व्यवस्था — एका layer मध्ये नियम, दुसऱ्यात आणखी.\n@layer block मध्ये लिहिलेले नियम त्या layer मध्ये जातात.\nउदा. button { background: unset; } — आतल्या layer मध्ये बटणाची पार्श्वभूमी साफ.\nबाहेरच्या नियमांपासून छेडछाड नाही — layer ची सीमा क्रम ठरवते.\nlayer क्रम समजून घेतल्यावर अनेक घटकांचे शैली विरोध संपतात.", code: `@layer {
  button {
    background: unset;
  }
}`, codeLanguage: "css" },
      { title: "6. all शॉर्टकट", content: "all हा शॉर्टकट — घटकाच्या सर्व गुणधर्मांना एकाच रीतीने मूल्य.\nउदा. .bare { all: unset; font: inherit; } — सर्व शैली रीसेट करून फॉन्ट मात्र पालकाकडून वारसा.\nयाचा अर्थ — एकच ओळ, मोठा आरंभ; पुढे स्वतःचा font खुला.\ncomponent च्या सुरुवातीला असा reset हाताशी ठेवल्यास रचना स्वच्छ राहते.\nall चा परिणाम सर्वांगीण — नीट समजून वापरल्यास ते सुरक्षित साधन.", code: `.bare {
  all: unset;
  font: inherit;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक बटण पूर्णपणे reset करा. button.reset { all: unset; }.\nब्राउझरची किनार, निळा मजकूर आणि सजावट — सर्व उलगडून जाते.\nनंतर स्वतःचे नियम द्या — padding, border, रंग.\nreset ने सुसंगतता मिळते — प्रत्येक ब्राउझरमध्ये ते बटण सारखे दिसते.\nहीच शिस्त — आधी साफ करा, मग स्वतःची शैली; एकसमान बटण सर्व ब्राउझरवर.", code: `button.reset {
  all: unset;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["unset काय?", "inherit कुठे?", "revert कधी?", "all कसा?"],
    quiz: [
      { question: "unset?", options: ["आपोआप", "जड", "रंग"], correct: 0 },
      { question: "inherit?", options: ["वारसा", "नवीन", "ध्वनी"], correct: 0 },
      { question: "revert?", options: ["browser आधार", "थर", "रेखा"], correct: 0 },
      { question: "initial?", options: ["मूळ मूल्य", "क्रम", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "बटण रीसेट करा.",
      starterCode: `button.reset {
  all: unset;
}`,
      expectedOutput: "Marathi button resets to defaults",
    },
    interviewQuestions: ["unset vs inherit?", "revert-layer कधी?"],
    related: ["css-typography", "css-cascade-layers", "css-forms-styling"],
    prev: "css-current-color",
    next: "css-typographic-units",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-typographic-units",
    categoryId: "web",
    title: "Typographic Units",
    marathiTitle: "typographic units — अक्षर एकक",
    level: "advanced",
    minutes: 40,
    summary: "ch ex cap lh एकक वापर.",
    sections: [
      {
        title: "typographic units — अक्षर एकक म्हणजे काय?",
        content: "ch ex cap lh एकक वापर.\nch म्हणजे character — घटकाच्या font मधील शून्य (0) या अक्षराची रुंदी.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? typographic units — अक्षर एकक चे फायदे आणि महत्त्व",
        content: "\"typographic units — अक्षर एकक\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ काही लिपींमध्ये x-उंचीची व्याख्या भिन्न असू शकते — लक्षात ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. ch कल्पना", content: "ch म्हणजे character — घटकाच्या font मधील शून्य (0) या अक्षराची रुंदी.\nउदा. .code { max-width: 60ch; } — मजकूर ओळ ताशी जास्तीत जास्त 60 अक्षरे.\nरुंद ओळ वाचणे थकवणारे; 60 ते 70 ch ही वाचनासाठी प्रमाणित रुंदी.\nलेख, बातमी, कोड — 60ch मध्ये सर्व नीट बसते.\nफॉन्ट आकार बदललास रुंदी प्रमाणानुसार हलते — आंतर संबंध टिकतो.", code: `.code {
  max-width: 60ch;
}`, codeLanguage: "css" },
      { title: "2. ex नियम", content: "ex हे एकक क्ष् अक्षराच्या उंचीवर मोजले जाते — small letter च्या उंचीशी नाते.\nउदा. .small { line-height: 3ex; } — ओळीचे अंतर x-उंचीच्या तीन पटीत.\nहे एकक क्वचित वापरले जाते, पण त्याचा अर्थ विशिष्ट असतो.\nकाही लिपींमध्ये x-उंचीची व्याख्या भिन्न असू शकते — लक्षात ठेवा.\nसाधारण रीत — ex हे em पेक्षा छोटे; layouts साठी em आणि lh अधिक स्पष्ट.", code: `.small {
  line-height: 3ex;
}`, codeLanguage: "css" },
      { title: "3. rem ठोस", content: "rem हे रूट (html) च्या font-size वर आधारित एकक.\nउदा. .section { padding: 1.5rem; } — रूट 16px असेल तर 1.5rem = 24px.\nhtml ची मूल्य बदलली की सर्व rem आकार प्रमाणात बदलतात.\nem मध्ये प्रत्येक स्तर त्याच्या पालकावर आधारतो; rem मात्र एकाच आधारावर.\nप्रवेश्यता आणि responsive मध्ये rem हा ठोस निर्णय — रचना संतुलित ठेवतो.", code: `.section {
  padding: 1.5rem;
}`, codeLanguage: "css" },
      { title: "4. lh नियम", content: "lh हे एकक वर्तमान line-height च्या उंचीवर — ओळीपासून ओळीपर्यंत.\nउदा. .btn { min-height: calc(1lh + 1rem); } — बटणाची उंची ओळीच्या उंचीवर आणि थोडी जागा.\nबटण, input, ओळीचे घटक — 1lh ने उंची अर्धवट राहत नाही.\nफॉन्ट बदललास उंची स्वयं समायोजित होते — नेमकं मोजमाप.\nlh ने उभ्या प्रमाणांची रचना अर्थपूर्ण बनते.", code: `.btn {
  min-height: calc(1lh + 1rem);
}`, codeLanguage: "css" },
      { title: "5. cap थर", content: "cap हे एकक मोठ्या अक्षराच्या (capital letter) उंचीवर — A सारख्या अक्षराची खरी उंची.\nउदा. .title { margin-block: 1cap; } — मथळ्याच्या सभोवती मोठ्या अक्षराच्या उंचीइतकी जागा.\nमथळे किंवा कॅप्स-शैलीच्या ओळींसाठी हे नेमके.\nअक्षरांच्या उंचीमुळे मथळा सुबक आणि संतुलित दिसतो.\nसूक्ष्म मोजमापासाठी cap हे आधुनिक एकक — उंचीचा खरा स्रोत.", code: `.title {
  margin-block: 1cap;
}`, codeLanguage: "css" },
      { title: "6. एकत्र नियम", content: "एकाच रचनेत अनेक एकके मिसळता येतात आणि रचना अधिक सुरक्षित होते.\nउदा. .article { max-width: 70ch; line-height: 1.6; } — ओळीची रुंदी व हवा.\nch मुळे वाचनीय रुंदी; line-height 1.6 मुळे ओळीचे अंतर सुखकारक.\nहे एकत्र आले की मजकूर पुस्तकासारखा वाचला जातो.\nएकके नीट जोडल्यास रचना स्थिर आणि टिकाऊ — आकारानुसार प्रमाण.", code: `.article {
  max-width: 70ch;
  line-height: 1.6;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एका रेसिपीच्या लेखाची रुंदी ठरवा. .prose { max-width: 66ch; }.\n66 अक्षरांच्या ओळी मराठी वाचनाला आरामदायी.\nही रुंदी फॉन्ट बदलल्यावरही प्रमाणशीर राहते.\nतसाच line-height 1.6 जोडा — मजकूर हवा मिळवतो.\nहे झाले की लेख, ब्लॉग, बातमी — सर्वत्र हा नियम नेटका वापरता येतो.", code: `.prose {
  max-width: 66ch;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["ch काय?", "ex कुठे?", "cap कधी?", "lh का?"],
    quiz: [
      { question: "ch unit?", options: ["अक्षर रुंदी", "रंग", "ध्वनी"], correct: 0 },
      { question: "ex?", options: ["छोटा उंची", "थर", "रेखा"], correct: 0 },
      { question: "cap?", options: ["मोठी अक्षर", "क्रम", "शोर"], correct: 0 },
      { question: "lh?", options: ["ओळ उंची", "रुंदी", "जाडी"], correct: 0 },
    ],
    challenge: {
      prompt: "ओळ रुंदी द्या.",
      starterCode: `.prose {
  max-width: 66ch;
}`,
      expectedOutput: "Marathi prose capped at 66ch",
    },
    interviewQuestions: ["ch फायदा?", "lh कुठे उपयोगी?"],
    related: ["css-typography", "css-text-spacing", "css-typography"],
    prev: "css-cascade-keywords",
    next: "css-animation-easing",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-animation-easing",
    categoryId: "web",
    title: "Animation Easing",
    marathiTitle: "animation easing — गती वक्र",
    level: "advanced",
    minutes: 40,
    summary: "timing function easing गती नियम.",
    sections: [
      {
        title: "animation easing — गती वक्र म्हणजे काय?",
        content: "timing function easing गती नियम.\ntransition म्हणजे मूल्याचा बदल — एका अवस्थेतून दुसऱ्याकडे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? animation easing — गती वक्र चे फायदे आणि महत्त्व",
        content: "\"animation easing — गती वक्र\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. easing कल्पना", content: "transition म्हणजे मूल्याचा बदल — एका अवस्थेतून दुसऱ्याकडे. timing function म्हणजे त्या बदलाचा वेळ-वक्र.\nease म्हणजे सुरुवात वेगवान आणि शेवट हळू — नैसर्गिक वाटणारी गती.\nउदा. .box { transition: transform 0.3s ease; } — हलणाऱ्या घटकासाठी गुळगुळीत स्वर.\nगती साधली म्हणजे हालचाल प्राकृतिक भासते — अचानक उडी येत नाही.\neasing नियंत्रित केलं की animation ची गुणवत्ता स्वतंत्रपणे वाढते.", code: `.box {
  transition: transform 0.3s ease;
}`, codeLanguage: "css" },
      { title: "2. cubic-bezier", content: "cubic-bezier म्हणजे वक्राचे चार नियंत्रण बिंदू — तुम्ही गतीचा आकार स्वतः रचता.\nउदा. .btn { transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1); } — स्थिर, संतुलित वक्र.\nपहिले दोन बिंदू गतीची सुरुवात घालतात; शेवटचे दोन शेवट.\nही चार मूल्ये दुरुस्त केल्यावर स्वर मऊ, उसळी किंवा लहरी मिळते.\ncubic-bezier गतीच्या जगातील सूक्ष्म नियंत्रण — होवरला सजीव करते.", code: `.btn {
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}`, codeLanguage: "css" },
      { title: "3. steps थर", content: "steps function गती चरणांमध्ये विभाजित करते — कडक, स्टेप-बाय-स्टेप हालचाल.\nउदा. .icon { animation: spin 1s steps(8) infinite; } — आयकॉन 8 चरणांत फिरतो.\nप्रत्येक चरण थबकून पुढे जातो — झटक्यांचा नैसर्गिक क्रम.\nघड्याळाच्या काट्यासारखी, tick-style, pixel-art — steps योग्य.\nकडक आणि वेगळी गती हवी असेल तेथे steps हाच पर्याय.", code: `.icon {
  animation: spin 1s steps(8) infinite;
}`, codeLanguage: "css" },
      { title: "4. ease-in-out", content: "ease-in-out म्हणजे दोन्ही टोकांना मऊ — सुरुवात हळू, मध्यम वेगवान, शेवट पुन्हा हळू.\nउदा. .card { transition: all 0.4s ease-in-out; } — कार्डच्या प्रत्येक बदलासाठी विणलेला स्वर.\nघटक उडी न घेता मऊ बदलतो; संपूर्ण प्रवास सुरळीत दिसतो.\nभावनिक, सुखद बदलासाठी ease-in-out हा आधार.\nतालबद्ध हालचाल — वाचकाला बदल झाला हे कळते, पण धक्का नाही.", code: `.card {
  transition: all 0.4s ease-in-out;
}`, codeLanguage: "css" },
      { title: "5. वक्र तपास", content: "cubic-bezier मध्ये एक बिंदू उंच उचलला तर गती ओव्हरशूट होते — घटक पुढे जाऊन परत येतो.\nउदा. .pop { transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1); } — जणू उसळी.\nचौथा गुण 1.56 म्हणजे प्रमाणाबाहेर आलेले मूल्य — bounce परिणाम.\nकिंचित वाकणं बटणांना सजीव करते; अतिशय वाकलं तर चित्त विचलित.\nवक्र तपासताना दिशा आणि अंतर दोन्ही ध्यानात ठेवा — नियम घट्ट.", code: `.pop {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
      { title: "6. दिशा नियम", content: "येण्याच्या-जाण्याच्या गती वेगळ्या असू शकतात — दिशा ठरवून स्वर नियंत्रित करता येतो.\nउदा. .card { animation: slide 0.5s ease-out; } — घटक आगमनावेळी मऊ होऊन बसतो.\nease-out म्हणजे सुरुवात वेगवान, शेवट मंद — आगमनासाठी नैसर्गिक.\nनिघण्यासाठी ease-in — वेगवान आणि स्पष्ट.\nप्रत्येक दिशेला योग्य वक्र दिल्यास सजीव क्रम तयार होतो — रचना स्पष्ट.", code: `.card {
  animation: slide 0.5s ease-out;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी बटणाला उसळी द्या. .btn ला transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) द्या.\nhover वर transform: scale(1.05) वापरा — बटण उसळून वाढेल.\ncubic-bezier च्या बिंदूंशी खेळून कमी-जास्त उसळी पाहा.\nहे झाले की गती आणि स्वर तुमच्या नियंत्रणात — आयकॉन, कार्ड, बटण सर्वत्र.\nसुरेख गतीचे कथन — browsing अधिक आनंददायी होते.", code: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["easing काय?", "cubic कुठे?", "steps कधी?", "cubic points कसे?"],
    quiz: [
      { question: "timing function?", options: ["गती वक्र", "रंग", "ध्वनी"], correct: 0 },
      { question: "cubic-bezier?", options: ["वक्र नियम", "थर", "रेखा"], correct: 0 },
      { question: "steps?", options: ["चरण गती", "मऊ", "जड"], correct: 0 },
      { question: "ease-in-out?", options: ["मऊ सुरुवात", "तेज", "क्रम"], correct: 0 },
    ],
    challenge: {
      prompt: "बटण वक्र द्या.",
      starterCode: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
      expectedOutput: "Marathi button bounces with cubic curve",
    },
    interviewQuestions: ["cubic समज कसे?", "steps केव्हा?"],
    related: ["css-transitions-animations", "css-animation-advanced", "css-keyframes-tip"],
    prev: "css-typographic-units",
    next: "css-focus-within",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-focus-within",
    categoryId: "web",
    title: "Focus Within",
    marathiTitle: "focus-within — गट focus",
    level: "advanced",
    minutes: 40,
    summary: ":focus-within keyboard मदत.",
    sections: [
      {
        title: "focus-within — गट focus म्हणजे काय?",
        content: ":focus-within keyboard मदत.\n:focus-within ही pseudo-class तेव्हा लागू होते जेव्हा त्या घटकाच्या आतल्या कोणत्याही मुलाला फोकस मिळतो — म्हणजे गटात कुठेही टॅब आल्यावर बाहेरचा घटक सक्रिय होतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? focus-within — गट focus चे फायदे आणि महत्त्व",
        content: "\"focus-within — गट focus\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. focus-within कल्पना", content: ":focus-within ही pseudo-class तेव्हा लागू होते जेव्हा त्या घटकाच्या आतल्या कोणत्याही मुलाला फोकस मिळतो — म्हणजे गटात कुठेही टॅब आल्यावर बाहेरचा घटक सक्रिय होतो.\nउदा. .card:focus-within { outline: 2px solid #0d9488; } — कार्डमध्ये कुठेही टॅब मारला की संपूर्ण कार्ड उजळते.\nफॉर्म, सर्च, सेटिंग्ज — अनेक टोके असलेला गट एकत्र उजळतो.\nkeyboard वापरकर्त्याला स्थान नेहमी कळते — आपण फॉर्ममध्ये आहोत अशी सूचना.\nएका pseudo-class ने संपूर्ण गट उजळणे — ही या धड्याची खासियत.", code: `.card:focus-within {
  outline: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "2. कार्ड थर", content: "फील्डचा विभाग — उदा. नाव आणि ईमेल एकत्र — फोकस आल्यावर संपूर्ण भाग एकजूट दाखवतो.\nउदा. .field:focus-within { border-color: #0d9488; }.\nगटाची किनार रंगली की वापरकर्त्याला माहीत पडतं — हा भाग सक्रिय आहे.\nkeyboard सुख — प्रत्येक टॅबवर रचना स्पष्ट राहते.\nएकच खूण संपूर्ण विभाग एकत्र आणते — फील्डचा एकत्रित अनुभव.", code: `.field:focus-within {
  border-color: #0d9488;
}`, codeLanguage: "css" },
      { title: "3. सर्च नियम", content: "सर्च बार हा गट असतो — एक input आणि त्याची सोबत search आयकॉन किंवा बटण.\nयात कुठेही फोकस आल्यास संपूर्ण box उजळावे हे योग्य — :focus-within वापरा.\nउदा. .search:focus-within { box-shadow: 0 0 0 3px #99f6e4; } — भोवती हलका हिरवट दिवा.\nआता वापरकर्त्याला स्पष्ट दिसतं — सर्च सक्रिय आहे.\nkeyboard ने सर्च भरताना हा प्रकाश मार्गदर्शक ठरतो — अचूक आणि सुसंगत.", code: `.search:focus-within {
  box-shadow: 0 0 0 3px #99f6e4;
}`, codeLanguage: "css" },
      { title: "4. details थर", content: "details घटक उघडता-विस्तारता येतो — summary हा त्याचा शीर्षक भाग.\n:focus-within ने आत कुठेही फोकस झाल्यास summary चा रंग बदलता — हा नियम वापरा.\nउदा. details:focus-within summary { color: #0d9488; }.\nआता वापरकर्त्याला समजतं — हे details सक्रिय आहे.\nkeyboard ने details मधून फिरत असताना स्थान स्पष्ट मिळतं — रचना अचूक.", code: `details:focus-within summary {
  color: #0d9488;
}`, codeLanguage: "css" },
      { title: "5. ओळ नियम", content: "लांब सूची किंवा table मधील एक ओळ — तिच्यातील कोणताही cell फोकस झाला की संपूर्ण ओळ एकत्र उजळून लक्ष वेधते.\nउदा. .row:focus-within { background: #f8fafc; } — हलकी, आरामदायी पार्श्वभूमी.\nसंपूर्ण ओळ इंगित दिसते — कोणत्या ओळीत आहोत हे स्पष्ट होतं.\nkeyboard ने ओळींमधून फिरताना हीच स्थान-खूण वापरकर्त्याला मार्ग दाखवते.\nअशी चिन्हे सूची, feeds आणि data tables मध्ये दृश्य गुणवत्ता वाढवतात.", code: `.row:focus-within {
  background: #f8fafc;
}`, codeLanguage: "css" },
      { title: "6. प्रवेश थर", content: "keyboard वापरकर्त्याची प्रवेश्यता focus दृश्यावर अवलंबून असते — :focus-within येथेच खरा आधार.\nउदा. .group:focus-within { border: 2px solid #0d9488; } — संपूर्ण गटाची स्पष्ट किनार.\nमाउस नसला तरी वापरकर्त्याला नेहमी मार्ग सापडतो.\ncontrast सुद्धा राखा — रंग आणि जाडी या दोन्हीचा ताळमेळ बाळगा.\nप्रवेश्यता फक्त नियमांमुळे नव्हे — रचना सुंदर असणेही त्याचाच भाग.", code: `.group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक फॉर्म गट तयार करा. .field-group:focus-within { border: 2px solid #0d9488; }.\nफॉर्ममध्ये कुठेही टॅब मारला की किनार हिरवी — संपूर्ण गट उजळतो.\nएका focus साठी संपूर्ण गटाचे दृश्य बदलणे — वापर सोपा आणि परिणামी.\nहा नमुना प्रत्येक form component मध्ये लागू करता येतो.\nसराव झाला की keyboard अनुभव आणि दृश्य स्पष्टता दोन्ही वाढते.", code: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["focus-within काय?", "कार्ड कुठे?", "details कसा?", "प्रवेश का?"],
    quiz: [
      { question: ":focus-within?", options: ["आत focus", "बाहेर", "ध्वनी"], correct: 0 },
      { question: "कार्ड?", options: ["किनार रंग", "थर", "रेखा"], correct: 0 },
      { question: "details?", options: ["summary रंग", "नवीन", "क्रम"], correct: 0 },
      { question: "प्रवेश?", options: ["keyboard मदत", "रंग", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म गट उजळ करा.",
      starterCode: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`,
      expectedOutput: "Marathi form group highlights on focus",
    },
    interviewQuestions: ["focus-within vs focus?", "दृश्य contrast?"],
    related: ["css-focus-visible", "css-tabs-aria", "css-forms-styling"],
    prev: "css-animation-easing",
    next: "css-env-function",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-env-function",
    categoryId: "web",
    title: "Env Function",
    marathiTitle: "env() — सुरक्षित जागा",
    level: "advanced",
    minutes: 40,
    summary: "env() safe-area-inset वापर.",
    sections: [
      {
        title: "env() — सुरक्षित जागा म्हणजे काय?",
        content: "env() safe-area-inset वापर.\nenv() हे function ब्राउझरच्या वातावरणातील मूल्ये घेते — उदा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? env() — सुरक्षित जागा चे फायदे आणि महत्त्व",
        content: "\"env() — सुरक्षित जागा\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. env कल्पना", content: "env() हे function ब्राउझरच्या वातावरणातील मूल्ये घेते — उदा. सुरक्षित जागा (safe area).\nनोच असलेल्या फोनवर स्क्रीनच्या काठी उपकरणांची बार असते — कॅमेरा, status bar सारखे घटक.\nsafe-area-inset-bottom हे मूल्य खालच्या त्या बारची उंची देते.\nउदा. .bottom { padding-bottom: env(safe-area-inset-bottom); } — मजकूर नोचवर न लागता थांबतो.\nएका ओळीत मोबाइलच्या सुरक्षिततेची जागा — env हेच साधन.", code: `.bottom {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
      { title: "2. safe-area थर", content: "सुरक्षित क्षेत्र म्हणजे स्क्रीनचा भाग जो notch, rounding किंवा home-indicator मुळे झाकला जात नाही.\ntop चे मूल्य — safe-area-inset-top; खालचे — bottom; डावे-उजवे — left-right.\nउदा. .topbar { padding-top: env(safe-area-inset-top); } — वरचा मथळा status bar खाली राहतो.\nस्क्रीन उलटल्यास ही मूल्ये आपोआप बदलतात.\nresponsive मध्ये env हा ब्राउझरकडून थेट नियंत्रणाचा दुवा.", code: `.topbar {
  padding-top: env(safe-area-inset-top);
}`, codeLanguage: "css" },
      { title: "3. कस्टम नियम", content: "env() ची मूल्ये कस्टम variable मध्ये ठेवता येतात — एकत्रित व्यवस्थापन.\nउदा. :root { --inset: env(safe-area-inset-left, 0px); } — डावीकडील जागा variable मध्ये.\nfallback म्हणून 0px दिलं — ज्या उपकरणांना notch नाही तिथे शून्य.\nव्हेरिएबल वापरून तेच मूल्य अनेक ठिकाणी सोपे पोहोचते.\nनाव नेटकं ठेवा — एका ठिकाणी बदल, सर्वत्र परिणाम.", code: `:root {
  --inset: env(safe-area-inset-left, 0px);
}`, codeLanguage: "css" },
      { title: "4. जुना आधार", content: "env() सर्व ब्राउझरमध्ये समजत नसतं; जुने ब्राउझर इच्छित शैली विसरू शकतात.\nयावर उपाय — आधी साधे मूल्य, मग env() सह दुसरी ओळ.\nउदा. .safe { padding-left: 16px; padding-left: env(safe-area-inset-left); }.\nजुना ब्राउझर पहिली ओळ घेतो; नवा दुसरी (अधिक नेमकी) लागू करतो.\nही दुहेरी ओळ progressive enhancement — आधार अपरिहार्यपणे मजबूत.", code: `.safe {
  padding-left: 16px;
  padding-left: env(safe-area-inset-left);
}`, codeLanguage: "css" },
      { title: "5. calc नियम", content: "env() ची मूल्ये इतर मूल्यांसह मिसळण्यासाठी calc वापरा.\nउदा. .btn ला margin-bottom: calc(env(safe-area-inset-bottom) + 8px) — सुरक्षित जागा आणि 8px अधिक.\nहा दिलासा नोचची जागा वेगळी ठेऊन घटक दृश्य क्षेत्रात टिकवतो.\nजागा संतुलित ठेवते — रचना न अडता नीट बसते.\ncalc आणि env एकत्र ची गणना नेहमी तपासा — मूल्य अचूक की रचना योग्य.", code: `.btn {
  margin-bottom: calc(env(safe-area-inset-bottom) + 8px);
}`, codeLanguage: "css" },
      { title: "6. दिशा थर", content: "आधुनिक CSS मध्ये डावी-उजवी दिशा एकाच logical नियमाने मिळते.\nउदा. .app { padding-inline: env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px); }.\nपहिले मूल्य start (डावीकडे), दुसरे end (उजवीकडे) — दोन्ही बाजू समान.\nदिशा उलटली (RTL) तरी नियमाने काम चालते — अर्थ स्थिर राहतो.\nअशा logical नियमांमुळे रचना डावे-उजवे सर्वत्र नीट राहते.", code: `.app {
  padding-inline: env(safe-area-inset-left, 0px) env(safe-area-inset-right, 0px);
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी खालची नेव्हिगेशन पट्टी सुरक्षित करा. .tabbar { padding-bottom: env(safe-area-inset-bottom); }.\nनोचच्या फोनवर बटणे खालच्या जागेवर अडकत नाहीत.\nजुन्या ब्राउझरसाठी आधी एक साधी padding आणि मग env ची ओळ.\ncalc ने आवश्यक असल्यास अधिक जागा जोडा.\nहे झाले तर मोबाइल अनुभव अचूक आणि सुरक्षित — परिपूर्णता जवळ.", code: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["env काय?", "safe-area कुठे?", "fallback कसा?", "calc कधी?"],
    quiz: [
      { question: "env()?", options: ["सुरक्षित मूल्य", "रंग", "ध्वनी"], correct: 0 },
      { question: "safe-area?", options: ["notch जागा", "थर", "रेखा"], correct: 0 },
      { question: "fallback?", options: ["जुने साधे", "नवीन", "क्रम"], correct: 0 },
      { question: "calc env?", options: ["जागा तोल", "रंग", "शोर"], correct: 0 },
    ],
    challenge: {
      prompt: "तळ जागा द्या.",
      starterCode: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`,
      expectedOutput: "Marathi tab bar respects safe area",
    },
    interviewQuestions: ["env आधार?", "safe-area केव्हा?"],
    related: ["css-viewport-units", "css-forms-styling", "css-perf-hints"],
    prev: "css-focus-within",
    next: "css-overflow-deep",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-overflow-deep",
    categoryId: "web",
    title: "Overflow Deep",
    marathiTitle: "overflow — ओघ नियम",
    level: "advanced",
    minutes: 40,
    summary: "overflow clip scroll scrollbar-gutter.",
    sections: [
      {
        title: "overflow — ओघ नियम म्हणजे काय?",
        content: "overflow clip scroll scrollbar-gutter.\nघटकाच्या सीमेबाहेर जाणारा content — त्याचे काय होणार?.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? overflow — ओघ नियम चे फायदे आणि महत्त्व",
        content: "✓ यासाठीच overflow चे विविध प्रकार समजणे आवश्यक.\n✓ clip आणि hidden यांच्या बारीक फरकासाठी हा धडा महत्त्वाचा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. overflow कल्पना", content: "घटकाच्या सीमेबाहेर जाणारा content — त्याचे काय होणार? overflow हा गुणधर्म याचे उत्तर देतो.\nhidden म्हणजे बाहेर गेलेला भाग कापून टाकला जातो; वाचकाला दिसत नाही.\nउदा. .box { overflow: hidden; } — आत जागा नाही तर उरलेला भाग नाही.\nपण सावध — hidden मुळे mधलेला भाग शोधता येत नाही; खरी माहिती लपून जाते.\nयासाठीच overflow चे विविध प्रकार समजणे आवश्यक.", code: `.box {
  overflow: hidden;
}`, codeLanguage: "css" },
      { title: "2. scroll थर", content: "overflow-y: auto म्हणजे आवश्यकता असल्यास उभा स्क्रोल; अन्यथा नाही.\nउदा. .list { overflow-y: auto; max-height: 300px; } — लांब सूचीच्या आतच स्क्रोल.\nया नियमाने सूची घटकाच्या चौकटीत फिरते — पेज मोठं होत नाही.\nmax-height ने उंची आधीच मर्यादेत ठेवली.\nलांब सूची, संदेशपट्टी, comments — येथे scroll auto ही आवश्यकता.", code: `.list {
  overflow-y: auto;
  max-height: 300px;
}`, codeLanguage: "css" },
      { title: "3. clip नियम", content: "overflow: clip हे hidden सारखेच बाहेरचा भाग कापते; पण त्या घटकाला स्क्रोल होऊ देत नाही — programmatic scrollही नाही.\nउदा. .pane { overflow: clip; } — सीमेबाहेरचा भाग साफ कापला; scroll चा मार्गही बंद.\nहे चित्रे, कॅनव्हास, अचूक चौकटी राखण्यासाठी आवश्यक — पार्श्वभूमी घट्ट.\nscroll chaining च्या त्रासापासूनही मुक्त — पेज स्थिर राहतं.\nclip आणि hidden यांच्या बारीक फरकासाठी हा धडा महत्त्वाचा.", code: `.pane {
  overflow: clip;
}`, codeLanguage: "css" },
      { title: "4. gutter थर", content: "scrollbar दिसायचा-निसायचा यामुळे content ची जागा बदलते — layout हलते आणि वाचकाला धक्का बसतो.\nscrollbar-gutter: stable ने ब्राउझर स्क्रोलbar साठी नेहमी जागा ठेवतो — bar दिसली नाही तरी.\nउदा. .page { overflow-y: scroll; scrollbar-gutter: stable; }.\nआता scrollbar कधीही आली गेली तरी content हलत नाही — स्थिरता कायम.\nअशा अचानक बदलांना थांबवण्यासाठी gutter हीच उत्तम सवय.", code: `.page {
  overflow-y: scroll;
  scrollbar-gutter: stable;
}`, codeLanguage: "css" },
      { title: "5. अक्ष नियम", content: "x आणि y दोन्ही अक्ष स्वतंत्रपणे नियंत्रित करता येतात.\nउदा. .table-wrap { overflow-x: auto; overscroll-behavior-x: contain; } — क्षैतिज स्क्रोल टेबलच्या आत.\nटेबल रुंद पडली तर आडवा स्क्रोल आतच; पेजला ढकलत नाही.\nपेजचा उभा स्क्रोल तसाच राहतो.\nप्रत्येक अक्ष स्वतंत्र नियंत्रणात ठेवल्यास रचना व्यवस्थित राहते.", code: `.table-wrap {
  overflow-x: auto;
  overscroll-behavior-x: contain;
}`, codeLanguage: "css" },
      { title: "6. जुना तुलना", content: "hidden आणि clip — दोन्ही मूल्ये कापण्याचे काम करतात; पण वर्तणुकीत फरक.\nhidden असलेल्या घटकाला programmatic scroll होऊ शकतो; clip मध्ये तेही बंद.\nउदा. .hidden { overflow: hidden; } आणि .clipped { overflow: clip; }.\nclip नव्या CSS मध्ये अधिक strict — ते scroll container बनवत नाही.\nदोन्ही समजून योग्य जागी योग्य निवड करा — सवय नेमकी.", code: `.hidden {
  overflow: hidden;
}
.clipped {
  overflow: clip;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक फीड तयार करा ज्याचा स्क्रोल आतच राहतो. .feed { overflow-y: auto; max-height: 60vh; }.\nफीडचा मजकूर संपला की उभा स्क्रोल आतच; पेज बाहेर हलत नाही.\nmax-height ने फीड स्क्रीनच्या 60% पर्यंत — आजूबाजूची रचना स्थिर.\nआवश्यक असल्यास x-अक्षही स्वतंत्र ठेवा.\nहे झाले की ओघ नियंत्रित आणि सुरक्षित — वाचक कुठेही गोंधळत नाही.", code: `.feed {
  overflow-y: auto;
  max-height: 60vh;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["overflow काय?", "clip कुठे?", "gutter कधी?", "x y कसे?"],
    quiz: [
      { question: "overflow hidden?", options: ["लपवणे", "रंग", "ध्वनी"], correct: 0 },
      { question: "clip?", options: ["चेन नाही", "नवीन", "रेखा"], correct: 0 },
      { question: "scrollbar-gutter?", options: ["जागा राखा", "थर", "क्रम"], correct: 0 },
      { question: "overflow-x?", options: ["क्षैतिज", "उभा", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "सूची scroll करा.",
      starterCode: `.feed {
  overflow-y: auto;
  max-height: 60vh;
}`,
      expectedOutput: "Marathi feed scrolls within bounds",
    },
    interviewQuestions: ["clip vs hidden?", "gutter फायदा?"],
    related: ["css-overscroll", "css-scrollbar-style", "css-responsive-table"],
    prev: "css-env-function",
    next: "css-table-layout",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-table-layout",
    categoryId: "web",
    title: "Table Layout",
    marathiTitle: "table-layout — टेबल रुंदी",
    level: "advanced",
    minutes: 40,
    summary: "table-layout fixed टेबल नियंत्रण.",
    sections: [
      {
        title: "table-layout — टेबल रुंदी म्हणजे काय?",
        content: "table-layout fixed टेबल नियंत्रण.\nटेबलच्या रुंदीचे गणित — ब्राउझर स्वयं (auto) बरंच मोजमाप करतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? table-layout — टेबल रुंदी चे फायदे आणि महत्त्व",
        content: "\"table-layout — टेबल रुंदी\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. table-layout", content: "टेबलच्या रुंदीचे गणित — ब्राउझर स्वयं (auto) बरंच मोजमाप करतो. पण auto कधी कधी अनपेक्षित रुंदी देतो.\ntable-layout: fixed म्हणजे सर्व स्तंभ समान रुंदीवर — किंवा निर्दिष्ट रुंदीवर.\nउदा. table { table-layout: fixed; width: 100%; } — सगळे स्तंभ समान भाग.\nआता टेबल ठरलेल्या आकारात राहते — पेजचा अंदाज नेमका.\nमोठ्या डेटा टेबलच्या गणनेत fixed वेगवान — performance उपयुक्त.", code: `table {
  table-layout: fixed;
  width: 100%;
}`, codeLanguage: "css" },
      { title: "2. collapse थर", content: "दोन सीमा शेजारी आल्यास ब्राउझर दुहेरी रेष दाखवतो — विचित्र देखावा.\nborder-collapse: collapse ने समीप रेषा एकत्र होतात — स्वच्छ, नेटके दृश्य.\nउदा. table { border-collapse: collapse; } — दुहेरीऐवजी एकत्रित जाड रेष.\nफरक स्पष्ट दिसतो — टेबल सुबक आणि समजायला सोपे.\nथर आणि रेषांची रचना व्यवस्थित ठेवण्यासाठी collapse आवश्यक.", code: `table {
  border-collapse: collapse;
}`, codeLanguage: "css" },
      { title: "3. स्तंभ रुंदी", content: "एका टेबलच्या स्तंभांना वेगवेगळी रुंदी द्यायची असेल तर colgroup आणि col वापरतात.\nउदा. col.a { width: 40%; } आणि col.b { width: 30%; } — प्रमाण स्पष्ट.\nहे HTML मधील colgroup शी जुळवून घेतले जाते.\nहेडर स्पष्ट आणि स्तंभांचे प्रमाण नियंत्रित राहते.\nएकूण 100% पेक्षा जास्त नको — बाकी रुंदी इतर स्तंभांना उरते.", code: `col.a { width: 40%; }
col.b { width: 30%; }`, codeLanguage: "css" },
      { title: "4. sticky header", content: "लांब टेबल स्क्रोल करताना मथळे विसरायला जातात — पुन्हा वर जावे लागते.\nposition: sticky सह thead th वर ठेवले की टेबल स्क्रोल करताना मथळा वर राहतो.\nउदा. thead th { position: sticky; top: 0; background: white; }.\nbackground देणे आवश्यक — नाहीतर मागचा मजकूर दिसू लागतो.\nहे वापरल्यास लांब टेबल वाचन सुलभ होते — शीर्षक नेहमी नजरेसमोर.", code: `thead th {
  position: sticky;
  top: 0;
  background: white;
}`, codeLanguage: "css" },
      { title: "5. cells नियम", content: "टेबल सेलमध्ये पुरेशी padding हवी — मजकूर किनारींना चिकटू नये.\nउदा. td, th { padding: 0.75rem 1rem; text-align: left; }.\nमराठी मजकूर डावीकडून वाचतो — संरेखन बरोबर.\nसंख्यांच्या स्तंभांसाठी text-align उजवीकडे निवडता येतो.\nव्यवस्थित सेल म्हणजे टेबल वाचनीय — सुबकता आणि स्पष्टता दोन्ही.", code: `td, th {
  padding: 0.75rem 1rem;
  text-align: left;
}`, codeLanguage: "css" },
      { title: "6. responsive थर", content: "लहान स्क्रीनवर रुंद टेबल पेजला बाहेर ढकलते — म्हणून त्याला wrapper च्या आत ठेवतात.\nउदा. .wrap { overflow-x: auto; } — आडवा स्क्रोल फक्त wrapper च्या आतच.\nआणि table { min-width: 600px; } — टेबल किमान रुंदीचा राहतो.\nमोबाइलवर टेबल आडवी स्क्रोल होते, पण पेज स्वतः स्थिर राहते.\nएका wrapper ने संपूर्ण टेबल responsive होते — हीच व्यावहारिक सवय.", code: `.wrap {
  overflow-x: auto;
}
table {
  min-width: 600px;
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी एक टेबल संपूर्ण नीट नियंत्रित करा. table { table-layout: fixed; width: 100%; border-collapse: collapse; }.\nसर्व स्तंभ समान; रेषा एकत्र; टेबल पेजवर ताणून नाही.\nथर sticky header जोडून लांब सूची सुलभ करा.\ntd-th ला padding देऊन मजकूर हवा द्या.\nहे व्यवस्था संपली की टेबल कुठेही — मोबाइल, डेस्कटॉप — सुबक राहतं.", code: `table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["table-layout काय?", "collapse कुठे?", "colgroup कधी?", "sticky कसा?"],
    quiz: [
      { question: "table-layout fixed?", options: ["रुंदी नेमकी", "लांब", "रंग"], correct: 0 },
      { question: "border-collapse?", options: ["रेषा जोड", "नवीन", "थर"], correct: 0 },
      { question: "colgroup?", options: ["स्तंभ रुंदी", "रेखा", "क्रम"], correct: 0 },
      { question: "sticky header?", options: ["वर टिके", "खाली", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "टेबल nit करा.",
      starterCode: `table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}`,
      expectedOutput: "Marathi table layout fixed and clean",
    },
    interviewQuestions: ["fixed फायदा?", "sticky कधी?"],
    related: ["css-responsive-table", "css-overflow-deep", "css-grid-system"],
    prev: "css-overflow-deep",
    next: "css-page-break",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-page-break",
    categoryId: "web",
    title: "Page Break",
    marathiTitle: "page-break — प्रिंट नियम",
    level: "advanced",
    minutes: 40,
    summary: "@page break print व्यवस्था.",
    sections: [
      {
        title: "page-break — प्रिंट नियम म्हणजे काय?",
        content: "@page break print व्यवस्था.\nप्रिंट माध्यमाचे नियम @page block मध्ये लिहितात — स्क्रीनऐवजी कागदासाठी.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? page-break — प्रिंट नियम चे फायदे आणि महत्त्व",
        content: "✓ मुद्रण गरजेच्या ठिकाणी हाच पाया मानला जातो.\n✓ वेगवेगळ्या browsers मध्ये प्रिंट पाहा — तपासणी महत्त्वाची.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. @page कल्पना", content: "प्रिंट माध्यमाचे नियम @page block मध्ये लिहितात — स्क्रीनऐवजी कागदासाठी.\nउदा. @page { size: A4; margin: 2cm; } — कागदाचा आकार आणि चारही बाजूंची हाशिये.\nsize ने कागदाचा आकार; margin ने कागदाची सीमा.\nहा block केवळ प्रिंट किंवा PDF ला लागू — स्क्रीनवर नाही.\nमुद्रण गरजेच्या ठिकाणी हाच पाया मानला जातो.", code: `@page {
  size: A4;
  margin: 2cm;
}`, codeLanguage: "css" },
      { title: "2. break नियम", content: "प्रिंटमध्ये एखादा विभाग असेल तर तो दोन पानांवर पसरतो — गोंधळलेला देखावा.\nbreak-inside: avoid म्हणजे घटक मध्यभागी विभागला जात नाही.\nउदा. .card { break-inside: avoid; } — प्रत्येक कार्ड एका पानावर राहते.\nहे वाचनाला आराम देते — कार्ड चिरलेलं दिसत नाही.\nसूची, आकडेवारी, चित्रे — यासाठी break-inside avoid हा नियम.", code: `.card {
  break-inside: avoid;
}`, codeLanguage: "css" },
      { title: "3. पान थर", content: "कधी कधी नवीन विभाग नवीन पानावर सुरू व्हायला हवा — break-before: page.\nउदा. section.new { break-before: page; } — या विभागाआधी पान बदलते.\nअध्याय, विभाग, भाग — स्वच्छपणे वेगळ्या पानांवर.\nअशा नियमांमुळे वाचन क्रम आणि मुद्रण संरचना ठोस राहते.\nमुद्रण आकृतीवर लवचिक नियंत्रण मिळते.", code: `section.new {
  break-before: page;
}`, codeLanguage: "css" },
      { title: "4. named नियम", content: "एकच @page नियम सर्व पानांसाठी लागू करायचा नाही — नावानुसार वेगळी पाने शक्य.\nउदा. @page wide { size: A3 landscape; } — एका नावाचा खास पान आकार.\nमग .overview { page: wide; } — या घटकाला भेटणाऱ्या पानावर wide नियम.\nएकाच document मध्ये मिश्र अभिमुखता — अनेक आकार एकत्र.\nअशा named pages मुळे मुद्रण अत्यंत व्यावसायिक होते.", code: `@page wide {
  size: A3 landscape;
}
.overview {
  page: wide;
}`, codeLanguage: "css" },
      { title: "5. orphan widow", content: "प्रिंटमधील मजकुराची एखादी एकटी ओळ रचना अवघड करते — orphan म्हणजे पानाच्या सुरुवातीची एकटी ओळ; widow म्हणजे शेवटची एकटी ओळ.\nउदा. p { orphans: 3; widows: 3; } — प्रत्येक पानाच्या आरंभ आणि शेवटी किमान तीन ओळी.\nएकट्या ओळीमुळे परिच्छेद फाटलेला दिसतो — हे नियम ते रोखतात.\nमोठ्या मजकुराच्या मुद्रणासाठी हे नियम आवश्यक.\nवाचन सुरक्षित आणि छापलेली रचना नीट राहते.", code: `p {
  orphans: 3;
  widows: 3;
}`, codeLanguage: "css" },
      { title: "6. आधार जुना", content: "break-* गुणधर्म जुन्या आणि नव्या नावांमध्ये बदलले आहेत.\n@supports (break-inside: avoid) ने आधुनिक नियम सुरक्षित ठेवता येतो.\nउदा. @supports मध्ये .card { break-inside: avoid; } — समर्थन असल्यास.\nजुने ब्राउझर page-break-inside च्या जुन्या नावावर चालतात.\nदोन्ही नावे लिहिण्याची सवय — मुद्रण सर्वत्र सुरक्षित.", code: `@supports (break-inside: avoid) {
  .card {
    break-inside: avoid;
  }
}`, codeLanguage: "css" },
      { title: "Mini Project", content: "सरावासाठी प्रिंटचा नियम तयार करा. @media print { .card { break-inside: avoid; } }.\nकागदावरील output मध्ये कार्ड विभागलेले दिसत नाही.\nआणखी @page margin आणि break-before द्यायचा पर्याय.\nवेगवेगळ्या browsers मध्ये प्रिंट पाहा — तपासणी महत्त्वाची.\nप्रिंट सुबक झाला की पेजचा प्रत्येक भाग दस्तऐवजासारखा सुरळीत निघतो.", code: `@media print {
  .card {
    break-inside: avoid;
  }
}`, codeLanguage: "css" ,
        output: "आणखी @page margin आणि break-before द्यायचा पर्याय",},
    ],
    practiceQuestions: ["@page काय?", "break कुठे?", "named कधी?", "orphan का?"],
    quiz: [
      { question: "@page?", options: ["प्रिंट आकार", "रंग", "ध्वनी"], correct: 0 },
      { question: "break-inside?", options: ["खंड रोख", "नवीन", "रेखा"], correct: 0 },
      { question: "break-before?", options: ["नवीन पान", "थर", "क्रम"], correct: 0 },
      { question: "widows?", options: ["शेवट ओळ", "सुरु", "रंग"], correct: 0 },
    ],
    challenge: {
      prompt: "प्रिंट व्यवस्था करा.",
      starterCode: `@media print {
  .card {
    break-inside: avoid;
  }
}`,
      expectedOutput: "Marathi cards print without splits",
    },
    interviewQuestions: ["@page मार्जिन?", "named pages फायदा?"],
    related: ["css-print-styles", "css-responsive-table", "css-overflow-deep"],
    prev: "css-table-layout",
    next: "css-marathi-capstone13",
    levelLabel: CSS13_LABEL,
  },
  {
    slug: "css-marathi-capstone13",
    categoryId: "web",
    title: "Precision Capstone",
    marathiTitle: "Precision Bag — भाग संग्रह",
    level: "advanced",
    minutes: 40,
    summary: "Level 13 साधने एकत्र शैली.",
    sections: [
      {
        title: "Precision Bag — भाग संग्रह म्हणजे काय?",
        content: "Level 13 साधने एकत्र शैली.\nग्रिड-नकाशातून पेजची मुख्य रचना तयार होते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Precision Bag — भाग संग्रह चे फायदे आणि महत्त्व",
        content: "\"Precision Bag — भाग संग्रह\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      { title: "1. लेआउट नकाशा", content: "ग्रिड-नकाशातून पेजची मुख्य रचना तयार होते. .page ला header-header, main-side आणि footer-footer असे विभाग द्या.\nत्यासोबत grid-template-rows: auto 1fr auto — मध्यभाग विस्तारण्यायोग्य.\nप्रत्येक विभाग grid-area ने नाव मिळवतो — रचना एकदम स्पष्ट.\nमोबाइलसाठी @media ने एक-स्तंभ नकाशा.\nहा नकाशा संपूर्ण Level 13 ची मुख्य रचना आधारभूत करतो.", code: `.page {
  grid-template-areas: "header header" "main side" "footer footer";
  grid-template-rows: auto 1fr auto;
}`, codeLanguage: "css" },
      { title: "2. कार्ड ग्रिड", content: "मुख्य content मध्ये कार्ड्सची रचना auto-fit ने — .cards ला repeat(auto-fit, minmax(200px, 1fr)).\nस्क्रीननुसार स्तंभ संख्या बदलते — 1, 2, 3, 4.\nminmax 200px ने किमान रुंदी सुरक्षित राहते.\nहे product, blog किंवा सूची सर्वत्र लागू.\nएका ओळीत responsive कार्ड ग्रिड — हीच auto-fit ची ताकद.", code: `.cards {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`, codeLanguage: "css" },
      { title: "3. रंग एक", content: "आयकॉन्सचा रंग मजकुराशी एकत्र हवा — .icon { fill: currentColor; }.\nमजकूर रंग बदलल्यास आयकॉनही त्याच रंगात.\nकिनार, shadow, border — currentColor ने सर्व जुळते.\nएकच color निर्णय संपूर्ण रचना नियंत्रित करतो.\nब्रँड, मेनू, थीम — सर्वत्र रंग एकसंध ठेवण्याची ही सवय.", code: `.icon {
  fill: currentColor;
}`, codeLanguage: "css" },
      { title: "4. लेख रुंदी", content: "मजकूर वाचण्यास आरामदायी रुंदी — .prose { max-width: 66ch; }.\n66 अक्षरांच्या ओळी मराठी वाचनाला योग्य.\nरुंद स्क्रीनवर मजकूर मध्यभागी संतुलित राहतो.\nch हे एकक फॉन्टशी जुळते — प्रत्येक आकारात प्रमाण.\nओळ खूप मोठी झाली तर पुढची ओळ शोधण्यास डोळे भरकटतात; अरुंद ओळीत ही ओढ कमी.\nदीर्घ लेख, ब्लॉग, बातमी — ही रुंदी नेहमी वापरा.", code: `.prose {
  max-width: 66ch;
}`, codeLanguage: "css" },
      { title: "5. गती वक्र", content: "बटणाचा hover स्वर मऊ हवा — .btn ला cubic-bezier(0.34, 1.56, 0.64, 1).\nया वक्रात एक बिंदू उंच असल्याने हलकी उसळी येते.\nhover वर scale जोडल्यास प्रभाव झटपट दिसतो.\ntransition 0.25s ठेवल्याने गती सजीव पण लवकर संपणारी.\nबटण, कार्ड, आयकॉन — गती योग्य वक्राने देतो.", code: `.btn {
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}`, codeLanguage: "css" },
      { title: "6. keyboard मदत", content: "फॉर्म गट फोकसवर उजळतो — .field-group:focus-within { border: 2px solid #0d9488; }.\nगटात कुठेही टॅब मारला की किनार रंगते.\nमाउस नसतानाही स्थान स्पष्ट ठरतं.\nही चिन्हे केंद्रस्थानी का — कारण फॉर्ममधील प्रत्येक घटक एका स्पष्ट कामाचा भाग.\nप्रवेश्यता हीच आहे — गट एकत्र, दृश्य स्पष्ट.\nkeyboard मदत आणि सौंदर्य दोन्ही एकत्र.", code: `.field-group:focus-within {
  border: 2px solid #0d9488;
}`, codeLanguage: "css" },
      { title: "Final Project", content: "आता सर्व तंत्रे एकत्र आणून पोर्टल पूर्ण करा. प्रत्येक भागाचा एक नियम निवडा — नकाशा, auto-fit, currentColor, ch, easing, focus.\nउदा. .tabbar { padding-bottom: env(safe-area-inset-bottom); } — मोबाइलची सुरक्षा.\nप्रत्येक गुणधर्म एका ठिकाणी मिळून शैलीचा संग्रह तयार होतो.\nहा संग्रह शिकलेल्या साधनांचा अभ्यासपेज म्हणून काम करतो.\nLevel 13 संपला की प्रत्येक विषय आत्मसात — पुढील अभ्यासासाठी पाया स्थिर.", code: `.tabbar {
  padding-bottom: env(safe-area-inset-bottom);
}`, codeLanguage: "css" },
    ],
    practiceQuestions: ["Level 13 नवे?", "areas कुठे?", "currentColor?", "easing नियम?"],
    quiz: [
      { question: "Level 13 थीम?", options: ["Precision & Control", "जुना थर", "रंग रेषा"], correct: 0 },
      { question: "auto-fit?", options: ["कार्ड जुळणी", "ध्वनी", "क्रम"], correct: 0 },
      { question: "focus-within?", options: ["गट उजळ", "रंग", "शोर"], correct: 0 },
      { question: "env()?", options: ["safe जागा", "रेखा", "थर"], correct: 0 },
    ],
    challenge: {
      prompt: "पोर्टल नीट करा.",
      starterCode: `.page {
  grid-template-areas: "header header" "main side" "footer footer";
}`,
      expectedOutput: "Final precision patterns assembled via Marathi portal",
    },
    interviewQuestions: ["तीन आवडते?", "areas मर्यादा?"],
    related: ["css-marathi-capstone12", "css-grid-template", "css-env-function"],
    prev: "css-page-break",
    next: "css-grid-template",
    levelLabel: CSS13_LABEL,
  },];
