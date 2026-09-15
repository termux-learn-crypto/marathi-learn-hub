import type { Tutorial } from "@/data/tutorials";

// === AI · LEVEL 2 — use-case, जबाबदारी आणि व्यवहारी प्रकल्प ===
// ai-image-recognition → ai-ethics → ai-tools → ai-career →
// ai-project-spam → ai-project-chatbot

export const aiLevel2: Tutorial[] = [
  {
    slug: "ai-image-recognition",
    categoryId: "ai",
    title: "Image Recognition - AI कसे पाहतं",
    marathiTitle: "Image Recognition — pixels, CNN, face unlock (सोपं स्पष्टीकरण)",
    level: "intermediate",
    minutes: 30,
    summary: "तुमचा फोन चेहरा कसा ओळखतो? फोटो, pixels, image processing आणि CNN सारख्या विशेष neural networks — कसं चित्रातून अर्थ काढले जातं ते उदाहरणांसह.",
    sections: [
      {
        title: "संगणकाला चित्र कसे दिसते",
        content: "तुमच्या डोळ्यांना चित्र दिसते. संगणकाला मात्र फक्त संख्या दिसतात.\n\nप्रत्येक चित्र लहान बिंदूंनी (pixels) बनते:\n\t• काळ्या-पांढऱ्या फोटोत प्रत्येक pixel एक संख्या (0=काळा, 255=गोरा).\n\t• रंगीत फोटोत प्रत्येक pixel तीन संख्या — लाल (R), हिरवा (G), निळा (B).\n\nएक 100×100 चित्र = 10,000 pixels = 30,000 संख्या (RGB साठी).\n\nहे सगळे म्हणजे संगणकाला संख्यांची एक मोठी यादी (वेक्टर) दिसते.\n\nAI चा प्रवास येथूनच सुरू होतो: संख्यांच्या नमुन्यांतून 'चेहरा', 'डोळा', 'कार' असे forms कसे शिकायचे.",
      },
      {
        title: "फोटोवर प्रक्रिया — पहिली पायरी",
        content: "Image मधून नमुने काढण्याआधी काही साधी रूपांतरे (processing) होतात:\n\n• Resize — सगळी चित्रे एकाच आकारात (उदा. 224×224).\n• Normalize — संख्या 0-1 दरम्यान आणणे.\n• Augmentation — थोडे वळवले, घट्ट, रंग बदलून उदाहरणे वाढवणे.\n\nउदा. चित्रे थोडी वळवली/फिरवली तरी AI ते ओळखेल — यासाठी augmentation.\n\nहे बदल आवश्यक असतात:\n\t• नवीन चित्र एकाच आकारात आले की गणित सोपे.\n\t• Normalize ने गणित स्थिर.\n\t• Augmentation ने overfitting कमी (ai-data पाठ)।\n\nएकदा ही तयारी झाली की मुख्य AI भाग — नमुने शोधणे.",
      },
      {
        title: "हाताने ओळख व training",
        content: "संगणकाला शिकवण्यापूर्वी प्रत्येक फोटोला label लागतो:\n\t'हे चेहरा आहे', 'हे मांजर आहे'.\n\nहे label असलेले फोटो आपल्या न्यूरल नेटवर्कला (neural network) mode fit केले जातात:\n\t१) चित्राचे pixels input.\n\t२) hidden layers नमुने पाहतात.\n\t३) output layer संधी देते.\n\t४) खऱ्या label बरोबर error → weights सुधार (ai-neural-networks मधील backpropagation).\n\nअशी लाखो फोटोची पुनरावृत्ती नंतर:\n\t• डोळ्यांची/कानांची नेमकी रचना.\n\t• वेगवेगळ्या प्रकाशातील चेहरे.\n\t• अशा बदलांनाही ओळखणे.\n\nम्हणूनच image AI ला सगळ्यात जास्त data (लाखो फोटो) आणि गणना शक्ती लागते.",
      },
      {
        title: "CNN — चित्रांसाठी खास network",
        content: "सामान्य neural network चित्रांसाठी अकार्यक्षम असतो — म्हणून CNN (Convolutional Neural Network) तयार झाली.\n\nतीन विशेष भाग:\n\t• Convolution — फोटोवर एक लहान 'जाळ' (filter) फिरवून कडा/कोपरे/रेषा शोधणे.\n\t• Pooling — फोटोचा आकार लहान करणे (महत्त्वाची माहिती ठेवून).\n\t• Layers — प्रत्येक पायरीवर अधिक गुंतागुंतीचे नमुने.\n\nमुख्य फायदा:\n\t• एखादा चेहरा फोटोच्या डावीकडे किंवा उजवीकडे — दोन्ही ठीक ओळखतो.\n\t• सामान्य network मध्ये ते अवघड होते.\n\nकल्पना करा: एक व्यक्ती आधी रेषा पाहते, मग छोटे भाग, मग संपूर्ण वस्तू... CNN हेच करतो — लहान ते मोठे नमुने.\n\nआता सगळ्या modern image systems CNN वर उभे आहेत.",
      },
      {
        title: "चेहरा ओळख — तुमच्या फोनमध्ये",
        content: "तुमचा फोन 'चेहरा ओळख' कसा करतो?\n\n• पहिला step — फोन कॅमेराने तुमच्या चेहर्याचे 'face template' बनवतो (एकदा setup).\n• दर वेळेस — कॅमेरा फोटो घेतो, त्यातून चेहरा शोधतो, template सोबत तुलना.\n• जुळल्यास unlock.\n\nमहत्त्वाच्या गोष्टी:\n\t• हे तंत्र template मध्ये काही एका व्यक्तीचा अर्थ ठेवते.\n\t• Lighting, glasses, beard — यांनी अचूकता बदलते.\n\t• अनेक फोनवर पर्याय: 'अधिक सुरक्षित' (require open eyes) — म्हणजे फोटोने unlock होत नाही.\n\nहे फोटोंतून व्यक्ती ओळखणाऱ्या face recognition पेक्षा वेगळं — कारण इथे privacy चा मुद्दा महत्त्वाचा.\n\nत्यामुळे image systems मध्ये privacy हा मोठा मुद्दा — ai-ethics मध्ये पुढे येईल.",
      },
      {
        title: "वापर — कोणत्या ठिकाणी",
        content: "Image recognition अनेक कामांत:\n\n• Medical imaging — X-ray/scan ने रोग शिकवणे.\n• सुरक्षा — सीसीटीव्ही फुटेजमधून ओळख.\n• Self-driving — रस्ता, लेन, पादचारी ओळख.\n• शेती — पिकातील रोग ओळखणे.\n• काम — उत्पादन दोष शोधणे.\n\nशेती उदाहरण:\n\t• फोनने पानाचा फोटो.\n\t• AI ओळखतं 'रोग-प्रकार'.\n\t• शेतकऱ्याला सल्ला मिळतो.\n\nआश्चर्याची गोष्ट:\n\t• अचूकता आतापर्यंत काही कामांत माणसांपेक्षाही चांगली.\n\t• पण टोकाच्या केसेसमध्ये चुका — म्हणून healthcare मध्ये तज्ज्ञांचा पडताळा.\n\nImage AI ची ताकद तंत्र समजल्यावर दिसते — त्याचा निर्णय कोणत्या data वर आधारित हे लक्षात ठेवा.",
      },
      {
        title: "जोखीम आणि मर्यादा",
        content: "Image AI आतापर्यंत आकर्षक, पण अनेक मर्यादा:\n\n• Bias — काही लोक/जग नमुन्यात नसल्यास कार्य करत नाही (ai-data मध्ये bias).\n• Fooling — फोटोमध्ये छोटा खोटा 'स्टिकर' लावल्यास ओळख उलट.\n• Privacy — चेहरा ओळख कोण वापरतो हा मोठा मुद्दा.\n• Transparency — 'नेमके का असे ठरले' हे सांगणे कठीण.\n\nउदाहरण — adblocking sticker:\n\t• 'चेहरा?' — या निर्णयात फोटोच्या कोणत्याही ठिकाणी स्टिकर.\n\t• AI चुकून ओळख चुकवू शकतो.\n\nयाचा सार: कठीण जेवढ्या जाणकारतेने वापरले जाते, तेवढाच image AI लाभदायक.\n\nहे सगळे मुद्दे पुढील पाठात ethics सोबत दिसतील.",
      },
      {
        title: "आजचा सारांश",
        content: "Image recognition मध्ये:\n\n• फोटो = संख्यांचा मोठा संच (pixels).\n• Preprocessing — resize, normalize, augment.\n• CNN — filters ने नमुने; pooling ने आकार.\n• training — लाखो labeled फोटो + backprop.\n• वापर — face unlock, medical, self-driving.\n• मर्यादा — bias, fooling, privacy.\n\nMRI/फोटो या सगळ्या मागे हीच प्रणाली.\n\nपुढील पाठात आपण हे सगळे नैतिक प्रश्न — bias, privacy, fake content — थेट पाहणार: ai-ethics.\n\nआजचे प्रॅक्टिस:\n\t०१. तुमच्या फोनवर face unlock सेटअप करा — लँडिंग ते template निर्मितीचे steps लिहा.\n\t०२. कॅमेरातील वेगवेगळ्या प्रकाशात चेहरा ओळख बदलते का बघा.\n\t०३. medical imaging आणि self-driving मध्ये image AI चे 2 वापर लिहा.",
      },
    ],
    practiceQuestions: [
      "काळ्या-पांढऱ्या फोटोत प्रत्येक pixel कोणती संख्या दाखवतो?",
      "Augmentation का करतात?",
      "सामान्य neural network पेक्षा CNN काम का चांगलं करतो?",
      "Face unlock 'open eyes' का मागत असतो?",
    ],
    quiz: [
      { question: "प्रत्येक pixel मध्ये संगणकाला काय दिसतं?", options: ["संख्या", "रंग मिश्रण", "शब्द", "आकार"], correct: 0 },
      { question: "AI साठी फोटो कसा तयार केला जातो?", options: ["Resize/Normalize", "Compile", "Encrypt", "Upload"], correct: 0 },
      { question: "चित्रांसाठी खास neural network कोणती?", options: ["CNN", "RNN", "LLM", "SVM"], correct: 0 },
      { question: "training ला किती labeled फोटो लागतात?", options: ["काही शेकडो", "हजारो-लाखो", "एक", "शून्य"], correct: 1 },
      { question: "image AI मधील मोठी मर्यादा कोणती?", options: ["Bias", "गाणे", "वेग", "रंग"], correct: 0 },
    ],
    related: ["ai-nlp", "ai-neural-networks", "ai-data"],
    prev: "ai-nlp",
    next: "ai-ethics",
  },

  {
    slug: "ai-ethics",
    categoryId: "ai",
    title: "AI Ethics - जबाबदारीची जाण",
    marathiTitle: "AI Ethics — bias, privacy, fake content (सोप्या भाषेत)",
    level: "beginner",
    minutes: 25,
    summary: "AI ची ताकद वापरताना काय योग्य, काय अयोग्य? bias, privacy, fake content/deepfake, सुरक्षा आणि जबाबदार वापर — हे सगळे मुद्दे उदाहरणांसह.",
    sections: [
      {
        title: "Ethics का महत्त्वाचे",
        content: "AI हा साधन आहे — साधन योग्य की अयोग्य याचा निर्णय वापर करणाऱ्याचा.\n\nपण AI ची मोठी ताकद असल्याने त्याचा गैरवापर प्रचंड नुकसान करू शकतो:\n\t• अयोग्य निर्णय — नोकरी/कर्ज.\n\t• खोटी माहिती — हजारो लोकांपर्यंत.\n\t• गोपनीयता भंग — आपल्या माहितीचा दुरुपयोग.\n\nEthics म्हणजे चर्चा नाही — व्यवहारी नियम: AI कोणाचा फायदा करतो, कोणाचा त्रास.\n\nमुळात एकच प्रश्न: 'हा AI कोणाला उपयोगाचा आणि कोणाला हानिकारक ठरतो?'\n\nचांगला AI म्हणजे केवळ चांगला function नव्हे — तर कोणाला हानी होणार नाही याची खात्री.",
      },
      {
        title: "Bias — AI चा अयोग्य न्याय",
        content: "Bias म्हणजे AI ने योग्य नसलेली पूर्वग्रहीत वैमनस्ये शिकणे.\n\nउगम — data मधील समस्या:\n\t• नोकरी ऍप्लिकेशनचा data जर पुरुष उमेदवारांवरच असेल तर AI महिलांना उपेक्षून टाकू शकतो.\n\t• कर्ज विभागात जर विशिष्ट area मध्ये फक्त few approved, तर त्या area मधील अर्ज चुकून रद्द.\n\nशास्त्रीय उदाहरण — ब्रेक अॅडजस्टमेंट:\n\t• चेहरा ओळख AI गोरे चेहरे ओळखतो पण काळ्या/तपकिरी चेहर्यांमध्ये त्रुटी.\n\t• कारण training data मध्ये गोर्या लोकांचे प्रमाण जास्त.\n\nप्रभाव:\n\t• चुकीचे निकाल.\n\t• वाढती असमानता.\n\nउपाय — biasमुक्त data: विविध, सर्व गटांचे, deliberate योग्य weight.",
      },
      {
        title: "Privacy — तुमचा data तुमचाच",
        content: "AI मध्ये राहण्याचा महत्त्वाचा प्रश्न — माहिती कोणती, कोण वापरेल.\n\nउदाहरणे:\n\t• फोनवरील voice assistant — तो ऐकतो का, कधी?\n\t• Social media — तुमच्या लाईक/क्लिक वरून AI स्पॉट.\n\t• Face unlock / photo apps — फोटोंचा वापर.\n\nनियम येतात (privacy laws):\n\t\tसंस्थांनी माहिती संकलनासाठी परवानगी विचारावी.\n\t\texplanation — कशासाठी वापरली जाते.\n\t\tRight to delete — तुमची माहिती काढून घेण्याचा अधिकार.\n\nवापरकर्त्याने करावे:\n\t• परवानगी काळजीपूर्वक वाचा.\n\t• अनावश्यक data/माहिती देऊ नका.\n\t• 'मला हे Data वापरू नको' चा पर्याय शोधा.\n\nहे प्रारंभी जरी थोडे त्रासदायक वाटतं, पण हीच तुमची privacy ची पहिली ढाल.",
      },
      {
        title: "Fake content — खोटंच खरं वाटणे",
        content: "AI आता खोटं जीवंत साहित्य बनवू शकतं:\n\n• Deepfake — चेहरा/आवाज बदलून खोटा व्हिडिओ.\n• Fake news — AI ने लिहिलेले सुसंगत खोटे लेख.\n• AI images — ना अस्तित्वात असलेल्या घटनांचे फोटो.\n\nधोका:\n\t• विश्वास भंग — 'याचा पुरावा आहे' ही भ्रमास्पद आत्मविश्वास.\n\t• सम व प्रचार — 2 मिनिटांत लाखो जणांपर्यंत.\n\t• गुन्हे — बनावट privacy उल्लंघन.\n\nपडताळणी:\n\t• इमेज-व्हिडिओ reverse search.\n\t• URL चा पत्ता विचारपूर्वक तपासा.\n\t• अनेक स्त्रोत तपासा.\n\t• 'असा पुरावा' म्हणून औपचारिक जोड काढा.\n\nगंभीर मुद्दा: deepfake पूर्ण theorizeच करण्यासाठी अनेक वर्षे लागतील — तर आजपासून सावध.",
      },
      {
        title: "स्वायत्त निर्णय — कोण जबाबदार",
        content: "AI निर्णय घेतो तेव्हा जबाबदारी कोणाची?\n\nउदाहरण:\n\t• Self-driving कार अपघात — ड्रायव्हर? कंपनी? AI?\n\t• Medical AI चुकीचं निदान — डॉक्टर? software?\n\t• Loan नाकारले — बँक? model?\n\nआदर्श प्रणाली:\n\t• मानव-पर्यवेक्षण (human in the loop) — गंभीर निर्णयांत माणूस अंतिम.\n\t• Explainability — 'निर्णय का' हे स्पष्ट असावे.\n\t• Failure plan — AI निकामी झाल्यास manual उपाय.\n\nआता AI टूल्स तंत्र टाकतात — पण 'तो म्हणाला' हे उत्तर अंतिम नसते.\n\nजबाबदारी व्यवस्थित नियोजनाद्वारे ठरते — नेहमी human accountability सोबत.",
      },
      {
        title: "सुरक्षा — AI misuse विरुद्ध",
        content: "AI चा गैरवापर टाळण्यासाठी सुरक्षा महत्त्वाची:\n\n• Jailbreak — प्रतिबंध बाजूला करून मॉडेलला खोटं/हानिकारक बनवणे.\n• Social engineering — AI ने उत्तम फसवणूक messages.\n• अफवा — अनेक चटकन पसरलेली बनावटी.\n\nआपल्यासाठी उपाय:\n\t• सिस्टम updates ठेवा.\n\t• संशयास्पद messages मध्ये 2-step verify करा.\n\t• OTP/कोड कोणालाही देऊ नका.\n\t• टूल्स आणि सर्व्हिसेसची अनावश्यक जाचक परवानग्या काढून घ्या.\n\nआणि tech side:\n\t• Content watermarking (AI गोष्टींची खूण).\n\t• Detect tools — deepfake शोधणारे.\n\nसुरक्षा आणि सादरता दोन्ही सोबत असल्यासच AI विश्वासायोग्य.",
      },
      {
        title: "जबाबदार वापराचे नियम",
        content: "सोप्या चौकटी — AI रोज वापरताना:\n\n१) विश्वासाचा प्रश्न तपासा: 'हे खरं का?' आकडे/स्रोत.\n२) वैयक्तिक माहिती द्या — पण फक्त जेथे आवश्यक.\n३) हे मला निर्णय घ्यायला मदत करतं किंवा घेतं — हे जाणून रहा.\n४) सर्जनशीलता — तुमची विचारधारा मात्र तुमचीच ठेवा.\n५) AI ने अर्थपूर्ण काम (कल्पना, data) सुधारायला वापरा — पण निर्णयावर punctitude.\n\nचांगला वापरकर्ता = तंत्रबध्दता व अर्थ नीट समजणारा.\n\nAI कोणत्याही शक्तीप्रमाणे — वापर करणाऱ्याच्या हातातील आहे.",
      },
      {
        title: "आजचा सारांश",
        content: "AI Ethics ची चार मुख्य तत्त्वे:\n\n• फायदा — AI कोणाला सकारात्मक उपयोगी?\n• न्याय — bias न होता सर्वांना निष्पक्षता.\n• पारदर्शकता — निर्णयाचे स्पष्टीकरण.\n• गोपनीयता — data का, कसा वापरला जातो.\n\nबाकी गोष्टीः\n\t• Deepfake आणि खोटं content पडताळा.\n\t• मानवी जबाबदारी नेहमी.\n\t• Bias शोधून त्रुटी दुरुस्त करा.\n\nहे तत्त्व रोजच्या वापरातलं — तंत्र शिकल्यासारखंच.\n\nआजचे प्रॅक्टिस:\n\t०१. एखाद्या जाहिरातीत बाईस research करा.\n\t०२. तुमच्या फोनमधील गोपनीयता सेटिंग्ज तपासा.\n\t०३. एखाद्या deepfake ची उदाहरणे वाचा आणि तपासणी करा.",
      },
    ],
    practiceQuestions: [
      "Bias मध्ये समस्या data कुठे येते — एक उदाहरण द्या.",
      "Privacy चे तीन उपाय वापरकर्त्यासाठी सांगा.",
      "Deepfake ओळखायची एक पद्धत सांगा.",
      "Self-driving कारच्या अपघातात जबाबदारी कोणाची असावी — तुमचे मत.",
    ],
    quiz: [
      { question: "AI ने पूर्वग्रहीत न्याय शिकण्याला काय म्हणतात?", options: ["Bias", "Overfit", "Hallucinate", "Tokenize"], correct: 0 },
      { question: "AI च्या data मधील समस्येचा प्राथमिक उगम कोणता?", options: ["Data चा वैविध्य अभाव", "मोठ्या संख्या", "जलद CPU", "मनोरंजन"], correct: 0 },
      { question: "Deepfake म्हणजे काय?", options: ["खोटा व्हिडिओ/चेहरा", "छोटा data", "एक गेम", "रोबोट"], correct: 0 },
      { question: "गंभीर AI निर्णयांमध्ये कोण अंतिम असावा?", options: ["मानव (human in the loop)", "फक्त AI", "कोणी नाही", "वापरकर्ता-नाही"], correct: 0 },
      { question: "AI चे सर्वात विश्वास ठेवण्याचे साधन कोणतं?", options: ["पडताळा (verify)", "एकदाच वाचा", "अंध विश्वास", "लहान data"], correct: 0 },
    ],
    related: ["ai-data", "ai-image-recognition", "computer-security"],
    prev: "ai-image-recognition",
    next: "ai-tools",
  },

  {
    slug: "ai-tools",
    categoryId: "ai",
    title: "AI Tools - रोजचे हत्यार",
    marathiTitle: "AI Tools — ChatGPT, Gemini, Copilot (उपयोगाची ओळख)",
    level: "beginner",
    minutes: 25,
    summary: "सध्या हाताशी असलेले AI साधनं — chatbots, image tools, assistant, office AI — प्रत्येकाचा नेमका उपयोग, मोफत सुरुवात आणि निवडीचे निकष.",
    sections: [
      {
        title: "AI साधनं आजच",
        content: "पूर्वी AI ही खाजगी संशोधनाची गोष्ट होती. आज मोफत साधने सर्वांसाठी.\n\nप्रमुख प्रकार:\n\t• Chatbots — मजकूर शिकवण्यासाठी (ChatGPT, Gemini, Claude).\n\t• Image tools — फोटो तयार/सुधारणा (Midjourney, DALL-E, Canva AI).\n\t• Code tools — कोड help (GitHub Copilot).\n\t• Voice — वाचन/लेखन (transcription, TTS).\n\t• Search — स्मार्ट search (AI परिणाम).\n\nही सगळी साधने 'मदतनीस' म्हणून काम करतात — कल्पना वेगवान, कामाचा वेळ कमी.\n\nसर्वांत महत्त्वाचं: साधनांचे निर्णय अचूक तपासा — AI हा सहाय्यक, तुम्ही मालक.",
      },
      {
        title: "Chatbot — तुमचा पहिला परिचय",
        content: "ChatGPT / Gemini सारखे chatbots हे सगळ्यांत लोकप्रिय AI.\n\nनेमकं काम:\n\t• प्रश्न-उत्तर (कोड, शिक्षण, स्पष्टीकरण).\n\t• मसुदे — email, निबंध, कविता.\n\t• विचारमंथन — कल्पना/योजना.\n\t• भाषांतर — इंग्रजी↔मराठी.\n\nसुरुवात कशी?\n\t१) वेबसाइट उघडा (chat.openai.com किंवा gemini.google.com).\n\t२) account बनवा (मोफत तर असेल).\n\t३) पहिला prompt विचारा.\n\nमोफत आवृत्ती इतकीच ताकद — स्मार्ट वापर आणि prompt (ai-prompts) चा नियम लागू होतो: नेटिक प्रश्न = नेटिक उत्तर.\n\nकार्ये विविध असूनही तत्त्व समान — संभाषणातून मदत.",
      },
      {
        title: "Image tools — फोटो आणि डिझाइन",
        content: "AI image tools दोन प्रकारे काम करतात:\n\n• Generation — प्रॉम्प्टवरून नवीन फोटो/कला ('आकाशात उडणारा हत्ती').\n• Editing — फोटो सुधारणा/रिटच करणे, पार्श्वभूमी बदलणे, व्यक्ती काढणे.\n\nलोकप्रिय:\n\t• DALL-E/ChatGPT — मजकूरातून फोटो.\n\t• Canva AI — डिझाइन/फोटो सुधारणा (सुरुवातीसाठी उत्तम).\n\t• Midjourney — कलात्मक फोटो.\n\nवापर:\n\t• शाळेचा project — ग्राफिक.\n\t• सोशल पोस्ट — बॅनर.\n\t• मित्रांची खोटी (deepfake) प्रतिमा काढून वापरू नका.\n\nसावधानता:\n\t• copyright — वापराच्या अटी वाचा.\n\t• deepfake/खोटी माहिती (ai-ethics).\n\t• quality — AI प्रतिमा 'खरी' नाही; तपासणी जरूर."
      },
      {
        title: "Code tools — programer चा साथीदार",
        content: "AI code tools त्रुटी शोधणे, कोड लिहिणे, समजावणे यात मदत करतात.\n\nउदाहरणे:\n\t• Copilot — editor मध्ये suggestion.\n\t• ChatGPT — कोड विचारा/बग सांगा.\n\t• भाषांतर — एका language वरून दुसऱ्यात.\n\nवापर:\n\t• फंक्शन लिहा — प्रॉम्प्ट द्या.\n\t• कोड explain करणे — 'हा code काय करतो?'\n\t• डबग — error past करा.\n\nमहत्त्वाची मर्यादा:\n\t• कोड आत्मविश्वासाने चुकीचा शकतो.\n\t• सुरक्षा — कोड कॉपी करण्यापूर्वी नीट समजून घ्या.\n\t• रट्टा शिकणू नका — कोड नीट समजा.\n\nहे tools वेग वाढवतात, पण मूलभूत programming ज्ञान आवश्यकच — AI हा सहाय्यक (assistant) आहे, tutor नाही.",
      },
      {
        title: "Office / productivity AI",
        content: "कामाच्या साधनांमध्ये AI राबवले जात आहे:\n\n• E-mail — मसुदा/उत्तर suggest.\n• Documents — सारांश/शोध.\n• Spreadsheet — formula/विश्लेषण सुझाव.\n• Presentations — डिझाइन.\n• Meetings — transcript/minutes.\n\nउदाहरण:\n\tतक्रारीचा email वाचून summary तयार करा.\n\nफायदा:\n\t• वेळ वाचते.\n\t• कंटाळवाणं काम AI करतो.\n\nलक्षात ठेवा:\n\t• गोपनीय माहिती — गोपनीय राहते (compliant version निवडा).\n\t• परिणाम तपासा — कारण AI मध्ये hallucination.\n\nव्यवसायातील जबाबदार निर्णयांसाठी माणुसकी तेवढीच.",
      },
      {
        title: "Voice आणि Search AI",
        content: "भाषा नसलेल्या इंटरफेसचे साधन:\n\nVoice:\n\t• Speech-to-text — बोलण्यातून मजकूर (typing न करता).\n\t• Text-to-speech — मजकूर → आवाज (audible विद्यार्थ्यांसाठी).\n\t• Translator — बोलतानाच भाषांतर.\n\nSearch:\n\t• AI search — प्रश्नाचे थेट उत्तर (पृष्ठांची यादी नव्हे).\n\t• Image/Sound search.\n\nवापर:\n\t• मीटिंग नोट्स.\n\t• मराठीत आवाजासह AI शिकणे.\n\nमोबाईल assistant (ओके Google/Siri) मध्ये आधीच हे बसलेले आहे — परिचित.\n\nफरक: सर्व डेटा process होताना privacy चा विचार — data सुरक्षित राहावा म्हणून मर्यादा (ai-ethics मध्ये).",
      },
      {
        title: "टूल निवडताना काय बघावे",
        content: "पुढे असंख्य AI tools येणार — निवडीचे निकष:\n\n१) किंमत — free पर्याय खरंच पुरेसा?\n२) भाषा — मराठी आधार?\n३) गोपनीयता — data कुठे जातो (policy वाचा).\n४) अचूकता — जागतिक संदर्भ/विशेष उपयोग.\n५) सुरक्षा — account/2FA.\n\nहे टाळा:\n\t• फक्त प्रसिद्ध/trending नावाबरोबर न जाणे.\n\t• demo बघून मुख्य feature तपासा.\n\nसोपा नियम: त्या साधनाने तुमचे दैनंदिन काम सुलभ होते का? — हो, तरच निवडा.\n\nAI हे हत्यार आहे — गरजेला पुरेसे; भरपूर चकचकीत हत्यारांच्या निवडीत फसू नका.",
      },
      {
        title: "आजचा सारांश",
        content: "AI tools चा वर्गवारी:\n\n• Chatbot — संभाषण (ChatGPT/Gemini).\n• Image — निर्मिती/सुधारणा (Canva, DALL-E).\n• Code — assistant (Copilot).\n• Productivity — email/docs.\n• Voice/Search — भाषा आणि शोध.\n\nनिवडताना — भाषा, privacy, किंमत, अचूकता.\nAI हा सहाय्यक, निर्णयक नव्हे.\n\nआजचे प्रॅक्टिस:\n\t०१. एका chatbot ला एक व्यावहारिक कार्य द्या (email मसुदा) आणि result test करा.\n\t०२. Canva AI ने एक पोस्ट बनवा.\n\t०३. किमान एक AI tool ची privacy policy मध्ये data usage पहा.",
      },
    ],
    practiceQuestions: [
      "Chatbot मध्ये मराठीत कोणतं काम करता येतं?",
      "Image tool वापरताना copyright/अटी का वाचायच्या?",
      "Code tool ची मर्यादा काय?",
      "कोणत्या निकषांवर AI tool निवडाल?",
    ],
    quiz: [
      { question: "मजकूर कामासाठी सर्वांत लोकप्रिय AI tool प्रकार कोणता?", options: ["Chatbot", "Image", "Voice", "Robot"], correct: 0 },
      { question: "प्रॉम्प्टवरून नवीन फोटो तयार करणाऱ्या tool च्या प्रकाराला काय म्हणतात?", options: ["Image generation", "Compile", "Search", "Office"], correct: 0 },
      { question: "AI code tool करू शकत नाही — कोणते?", options: ["खात्रीने अचूक कोड", "कोड सुचवणे", "बग शोधणे", "कोड समजावणे"], correct: 0 },
      { question: "privacy मध्ये सहाय्य — tool निवडताना का वाचता?", options: ["data कुठे जातो", "वेग किती", "रंग", "फॉन्ट"], correct: 0 },
      { question: "निर्णय घेण्यासाठी कोणाचा वापर करतो?", options: ["तुमचा निर्णय", "फक्त AI", "कोणी नाही", "अविश्वासू"], correct: 0 },
    ],
    related: ["ai-chatgpt", "ai-prompts", "termux-basics"],
    prev: "ai-ethics",
    next: "ai-career",
  },

  {
    slug: "ai-career",
    categoryId: "ai",
    title: "AI Career - शिकण्याचा मार्ग",
    marathiTitle: "AI मध्ये प्रवेश — शिकण्याचा रोडमॅप (मराठीत)",
    level: "beginner",
    minutes: 25,
    summary: "AI शिकताना कुठून सुरुवात करावी? आवश्यक गणित, Python, कोर्सेस, सराव, कोणती jobs — एक सोपा आणि स्पष्ट आराखडा.",
    sections: [
      {
        title: "AI शिकणे म्हणजे काय",
        content: "AI शिकणे दोन रस्त्यांनी जाते:\n\n१) वापरणारा (user) — tools नीट वापरणे (ai-tools), prompt कला.\n२) बनवणारा (builder) — मॉडेल train करणे, Python, math.\n\nहा पाठ builder च्या दरवाज्यावर उभा — पण user पासून (tasks ने) सुरुवात होते.\n\nआधी आपण प्रश्न विचारतो:\nतुम्हाला एआयी कोडिंग करायचं का, डेटा विश्लेषण, की फक्त tools? आवड/गरज ठरवा.\n\nस्तर क्रम:\n\t०) Basics — संगणक (computer-basics).\n\t१) Python — ai-python व python शास्त्र.\n\t२) math — ai-math-ai.\n\t३) concepts — ai-data, NN, ML.\n\t४) hands-on — mini project.\n\t५) tools/library — sklearn, pandas.\n\t६) फील्ड — वेब/डेटा/robotics.\n\nचांगली बातमी: ही सगळी सोपी पायरीवाट आहे — आज सुरुवात केली तरी महिनाभरात पहिले AI प्रोजेक्ट.",
      },
      {
        title: "Python प्रथम",
        content: "AI ची भाषा Python — म्हणून पहिला पाया Python.\n\nकिती शिकू?\n\t• Variables, data types.\n\t• Lists, loops, functions.\n\t• Files, errors.\n\t• Libraries वापरण्याची सवय.\n\nकुठून?\n\t• याच साईटवरील python शृंखला.\n\t• मोफतPython संसाधने.\n\nहा पाया पूर्ण झाल्यावर numpy/pandas सारख्या AI libraries:\n\t• संख्यांचे गणित (numpy) — ai-math-ai साठी.\n\t• data table (pandas) — ai-data साठी.\n\t• sklearn — ML models.\n\nशिकण्याचा नियम: उदाहरण लिहा, चालवा, पुन्हा खेळा. फक्त वाचू नका.\n\nकोडचा सराव दररोज किमान 30 मिनिटे — सतत प्रगतीमध्ये ठरवा.",
      },
      {
        title: "गणित किती लागेल",
        content: "AI 'बनवण्यासाठी' गणित काही घटक लागतो — पण आधी घाबरून नका.\n\nआवश्यक:\n\t• सरासरी/मध्य — ai-math-ai.\n\t• बीजगणित — equations, matrices basics.\n\t• वेक्टर — संख्यांच्या याद्या, embedded मध्ये.\n\t• डेरिव्हेटिव्ह (कल) — gradient descent चा पाया.\n\t• सांख्यिकी — mean/median/bias/variance.\n\nकिती सखोल? — तुमच्या लक्ष्यानुसार:\n\t• data analyst — सांख्यिकी जास्त.\n\t• ML engineer — calculus, linear algebra.\n\t• app developer (AI use) — कमी म्हणजे गणित कंटाळवाणं नाही.\n\nथोडक्यात:\n\tआधी जवळ-जवळ 10-15 तासांच्या पायरीवर काम सुरू करता येते — कधीही पुढे जात राहा.\n\nगणितात अडल्यास — visual अॅनिमेशन्स/उदाहरणं शोधा, formulae नाही.",
      },
      {
        title: "सराव प्रकल्प",
        content: "शिकण्याचा सगळ्यात ताकदीचा भाग — प्रकल्प (projects).\n\nसोपे प्रकल्प:\n\t१) Spam classifier — मेसेज spam/normal (हा series मधील).\n\t२) एक साध्या chatbot नियमांनी.\n\t३) घराच्या किंमतीचा अंदाज (regression).\n\t४) चित्राच्या pixels वर अंक ओळखणे.\n\t५) प्रॉम्प्ट टूल — व्यावहारिक bot.\n\nप्रत्येक प्रकल्प:\n\t• data शोधा (फ्री dataset).\n\t• model train.\n\t• निकाल बघा व explain करा.\n\nहाताशी असेल तेच महत्त्वाचं — समज, आत्मविश्वास आणि नोकरीसाठी portfolio.\n\nसोपा सल्ला: प्रोजेक्ट जो तुमच्या स्वतःच्या गरजेला (घरचा एक छोटा टूल) — तो प्रेरणा ठेवतो.",
      },
      {
        title: "कोर्स आणि reference",
        content: "संरचित शिकण्यासाठी कोर्सेस उपयोगी — पण निवड काळजीपूर्वक:\n\nमोफत:\n\t• या साईटच्या शृंखला.\n\t• YouTube (मराठी/हिंदी) — तुम्हाला स्थानिक भाषेत.\n\t• Government/संस्थांचे free courses.\n\nसशुल्क (प्रमाण):\n\t• Specializations (काही finance aid).\n\t• Certificate courses — प्रमाण तेवढे, प्रकल्प जास्त.\n\nनिवडताना:\n\t• curriculum वाचा — तुमच्या पातळीशी.\n\t• hands-on प्रकल्प असला तर २ जास्त चांगला.\n\t• जास्त reviews च्या मागे न जाता निवडा.\n\nएक गोष्ट लक्षात: प्रमाणपत्र certificate प्रमाण आहे, ज्ञान प्रकल्प अधिक — पण सुरुवातीसाठी दोन्ही चांगलं.",
      },
      {
        title: "Jobs आणि career रस्ते",
        content: "AI मध्ये कामाचे प्रकार:\n\n• Data Analyst — data मधून अर्थ (सांख्यिकी).\n• ML Engineer — models तयार/डिप्लॉय.\n• Data Engineer — data pipeline.\n• Prompt/Applied AI — tools ला व्यवसाय वापर.\n• Research — नवीन तंत्र (advanced degree).\n\nसुरुवातीसाठी:\n\t• internships/projects + portfolio.\n\t• रिस्यूमे मध्ये प्रकल्प.\n\t• communication/समस्या सोडवण्याची कौशल्ये.\n\nमराठी वर्कफोर्ससाठी:\n\t• स्थानिक भाषा टूल्स/डेटा — नवीन संधी.\n\t• मराठी डेटा+AI हा विशेष फायदा — कमी लोक, जास्त गरज.\n\nमुख्य: AI discipline म्हणजे एकच रस्ता नाही — तुमच्या आवडीचे (data/code/use) निवडा.",
      },
      {
        title: "दैनंदिन अभ्यास व्यवस्था",
        content: "शिकण्याची व्यवस्था कशी ठेवावी:\n\nनित्यक्रम:\n\t• दररोज किमान 45-60 मिनिटे.\n\t• 15 मिनिटे वाचन — 30 मिनिटे कोड.\n\t• शनिवार — एक छोटा प्रकल्प.\n\nसुरुवातीचा पहिला महिना:\n\t सप्ताह १: Python basics (variables, print).\n\t सप्ताह २: lists, loops, funcs.\n\t सप्ताह ३: numpy/pandas intro.\n\t सप्ताह ४: ai-data + ai-math.\n\nत्रुटी:\n\t• ट्यूटोरियल-zombie — फक्त वाचू नका, कोड करा.\n\t• महत्त्वाच्या concept च्या सरावाकडे दुर्लक्ष करू नका.\n\t• समज न आल्यास पुढे न जाता प्रश्न विचारा.\n\nशिक्षण हे स्प्रिन्ट नव्हे — मॅरेथॉन. स्थिरता (consistency) हीच मुख्य यशाची गुरुकिल्ली.",
      },
      {
        title: "आजचा सारांश",
        content: "AI career रोडमॅप:\n\n• User → Builder या क्रमाने गा.\n• Python प्रथम, मग math, मग concepts.\n• प्रत्येक पाठात hands-on प्रकल्प.\n• कोर्स/प्रशिक्षण — फक्त guidance.\n• Jobs — data/ML/prompt रस्ते खुले.\n• 45-60 मिनिटे रोज — हीच ताकद.\n\nया साईटवरील सगळे AI पाठ आता एक क्रम बनतात — आपण कित्येक पायऱ्या आधीच गेलो.\n\nआजचे प्रॅक्टिस:\n\t०१. तुम्हाला कोणता रस्ता आवडतो (data/code/use) कागदावर लिहा.\n\t०२. 4 आठवड्यांची योजना बनवा.\n\t०३. आजच एक library install करून छोटं experiment चालवा.",
      },
    ],
    practiceQuestions: [
      "AI शिकण्याचा योग्य क्रम सांगा.",
      "Python च्या कोणत्या 3 गोष्टी AI ला मूलभूतपणे आवश्यक?",
      "गणितातील कोणते घटक AI साठी महत्त्वाचे?",
      "तुमचा आवडता AI रस्ता कोणता आणि एक प्रकल्प विचार करा.",
    ],
    quiz: [
      { question: "AI शिकण्याचा पहिला पाया कोणता?", options: ["Python", "गणित", "जाळे", "कोड काय"], correct: 0 },
      { question: "AI साठी सर्वांत महत्त्वाचे गणिताचे घटक कोणते?", options: ["सरासरी/वेक्टर/कल", "कठीण समीकरण", "फक्त कर्ण", "चौकोन"], correct: 0 },
      { question: "शिकण्यात सर्वांत ताकदीचा भाग कोणता?", options: ["प्रोजेक्ट", "फक्त वाचन", "फक्त video", "फक्त प्रश्नोत्तर"], correct: 0 },
      { question: "ML Engineer चे काम मुख्य काय?", options: ["model तयार/डिप्लॉय", "फक्त लेख", "फक्त design", "फक्त अनुसार"], correct: 0 },
      { question: "शिकण्याची मुख्य गुरुकिल्ली कोणती?", options: ["स्थिरता", "अनेक ट्यूटोरियल", "सर्व उपकरणे", "रात्रभर"], correct: 0 },
    ],
    related: ["ai-python", "ai-data", "python-basics"],
    prev: "ai-tools",
    next: "ai-project-spam",
  },

  {
    slug: "ai-project-spam",
    categoryId: "ai",
    title: "AI Project - Spam Detector",
    marathiTitle: "पहिला AI प्रोजेक्ट — Python ने Spam Detector",
    level: "intermediate",
    minutes: 35,
    summary: "आतापर्यंतची संकल्पना वापरून Python मध्ये पहिला खरा AI प्रकल्प: SMS मेसेज spam/not-spam ठरवणारा वर्गीकरण. data, features, model आणि evaluation संपूर्ण प्रक्रिया.",
    sections: [
      {
        title: "प्रकल्पाची ओळख",
        content: "आम्ही बनवणार — एक SMS spam detector.\n\nअंतिम काम:\n\tमेसेज द्या → model ठरवतो 'spam' की 'normal'.\n\nहेच तंत्र आधुनिक email filters मध्ये — संपूर्ण प्रक्रिया समजण्यासाठी उत्तम.\n\nकाय काय शिकणार:\n\t• data (ai-data) — labeled messages.\n\t• features (ai-nlp) — bag of words/शब्द गिनती.\n\t• model (ai-machine-learning) — classifier.\n\t• evaluation — अचूकता तपासणे.\n\nप्रकल्पाचा क्रम:\n\t१) data लोड.\n\t२) टेक्स्ट features मध्ये रूपांतर.\n\t३) train/test मध्ये विभागणी.\n\t४) model train.\n\t५) evaluate.\n\nहे सर्व Python मध्ये — या साईटवरील python शृंखला ही जोड दस्तऐवज.",
      },
      {
        title: "Environment तयार करा",
        content: "आधी tools स्थापित — याच साईटवरील python-install व termux मध्ये clear.\n\nआवश्यक libraries:\n\t• scikit-learn — ML algorithms.\n\t• pandas/numpy — data.\n\ninstall:\n\tpip install scikit-learn\n\t(उदा. Termux: pip install scikit-learn)\n\nटीप: हे मोठे package — थोडा वेळ लागतो.\n\nकाही अडचण आल्यास:\n\t• python3 -m pip ... असे ट्राय करा.\n\t• internet stable ठेवा.\n\nआता पहिला प्रोग्राम कोडमध्ये — मग data मध्ये. पुढील steps च धडा येथून आधारित आहे.",
      },
      {
        title: "Data — सोपा नमुना",
        content: "वास्तव spam data मध्ये हजारो messages असतात. सोप्या उदाहरणासाठी आम्ही छोटा set वापरू:\n\nmessages:\n\t'मोफत किंमत जिंकली!' → spam\n\t'स्कॉलरशिप ऑफर मिळाली' → spam\n\t'मीटिंग बदलली दुपारी 3 वाजता' → normal\n\t'मीटिंग पुढे ढकलली — कृपया काळजी' → normal\n\nएक dataset तयार करा (pandas DataFrame):\n\t• text नावाचा column — message.\n\t• label — 'spam'/'ham' (ham = normal).\n\nसंपूर्ण csv/scikit sample data वापरायचे असल्यास — पुढील पाठात दुवे.\n\nआतासाठी लहान असलं तरी complete cycle आपल्याला दिसेल.",
      },
      {
        title: "मजकूर → संख्या (features)",
        content: "model ला मजकूर नाही — संख्या हवी (ai-nlp).\n\nसर्वात सोपं — टेक्स्ट मध्ये कोणते शब्द किती वेळा:\n\t• sk-learn मध्ये CountVectorizer.\n\t• प्रत्येक message → संख्यांची यादी (पहिल्या शब्द index ची गिनती).\n\nउदाहरण:\n\t'ऑफर' चा वापर spam मध्ये जास्त → model समजते की हा मजकूर spam चा.\n\nम्हणून:\n\tvectorizer = CountVectorizer()\n\tX = vectorizer.fit_transform(messages)\n\tfit_transform — शब्दांची यादी बनवते आणि प्रत्येक message मध्ये प्रत्येक शब्द किती वेळा (गिनती).\n\nहेच features (X) आहे — model ला पुढे देतो.",
      },
      {
        title: "Train/test विभागणी",
        content: "ai-data मध्ये पाहिले — आता चालवू:\n\n\tfrom sklearn.model_selection import train_test_split\n\tX_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.2)\n\nम्हणजे:\n\t• 80% data — शिकण्यासाठी.\n\t• 20% — परीक्षेसाठी (नवीन).\n\nका:\n\t• model ने उदाहरण पाठ केले असल्यास test वर कळेल.\n\t• या वेळी shuffle करून सर्व प्रकारचे data दोन्ही गटात.\n\nयेथून monitor करा — मोठ्या data मध्ये हा नियमच महत्त्वाचा:\n\tmodel चा अंतिम निकाल test data वर तपासतात.",
      },
      {
        title: "Classifier — model बनवा",
        content: "आता model निवडा. सोपा प्रारंभ — Naive Bayes (शब्दांच्या संधीच्या आकड्यांवर):\n\nवास्तव कोड:\n\tfrom sklearn.naive_bayes import MultinomialNB\n\tmodel = MultinomialNB()\n\tmodel.fit(X_train, y_train)\n\n.fit() — येथे model weights सुधारण्याची क्रिया कोडमधून घडते (ai-machine-learning मधील 'शिकणे').\n\nहे 'model.fit / predict' तुम्ही ai-python मध्ये आधी एकदा पाहिले — आता पूर्ण संदर्भात:\n\tdata तयारी → features → train/test विभागणी → model train → prediction.\n\nहेच तर सगळे पाठ जोडणारा क्षण आहे.",
      },
      {
        title: "Evaluation — किती चांगलं",
        content: "केवळ 'अचूकता' पुरेशी नाही — 95% तर चांगले, पण spam filter मध्ये दोन प्रकारच्या चुका महत्त्वाच्या:\n\n• False positive — normal मेसेज spam म्हणून गेला (त्रासदायक!).\n• False negative — spam normal म्हणून गेला (धोकादायक!).\n\nआकडे:\n\tfrom sklearn.metrics import accuracy_score, classification_report\n\tprint(classification_report(y_test, p))\n\nहे सांगते:\n\t• precision — ठरवलेल्या spam पैकी किती खरे.\n\t• recall — खऱ्या spam मध्ये किती पकडले.\n\nfalse positive चा विचार करताना लक्षात:\n\t• spam फिल्टरमध्ये false positive = वाईट (ग्राहक त्रास).\n\nएकच निकाल नव्हे — कामानुसार priority.",
      },
      {
        title: "सुधारणा — पुढे काय",
        content: "आधार model झाला — सुधारणेसाठी:\n\n१) अधिक data — हजारो messages.\n२) Better preprocessing — stop words काढणे (ai-nlp).\n\t   vectorizer वर stop_words='english' पास / मराठी manually.\n३) टेक्स्ट भर — n-grams (२ शब्दांचे संयोग).\n४) चांगला model — LogisticRegression/SVM.\n\nउदाहरण:\n\tvectorizer = CountVectorizer(stop_words='english', ngram_range=(1,2))\n\nअसे बदल test data वर तपासा — फक्त training वर नाही.\n\nया प्रकल्पामुळे पुढच्या प्रकल्पांसाठी एक नमुना (template) तयार होतो — चांगलं scaffolding.",
      },
      {
        title: "आजचा सारांश",
        content: "Spam detector ची संपूर्ण साखळी:\n\n\tdata (text+label)\n\t→ CountVectorizer (features)\n\t→ train_test_split\n\t→ MultinomialNB.fit\n\t→ predict + evaluation\n\nहेच pattern प्रत्येक ML प्रकल्पात — विषय बदलला तरी पायऱ्या समान.\n\nपुढील पाठात आपण आणखी एक प्रकल्प — नियम-आधारित chatbot — बनवणार.\n\nआजचे प्रॅक्टिस:\n\t०१. वरील चरण समजून कोड लिहा व पहिला result मिळवा.\n\t०२. तुमच्या स्वतःच्या 10 messages चा लहान dataset बनवा.\n\t०३. stop_words व ngram बदलाचा effect test करा.",
      },
    ],
    practiceQuestions: [
      "CountVectorizer कोणतं रूपांतर करतो?",
      "train_test_split मध्ये test_size लहान किंवा मोठा — दोन्हींचा परिणाम?",
      "false positive आणि false negative मध्ये फरक सांगा.",
      "stop_words काढल्यावर काय फायदा?",
    ],
    quiz: [
      { question: "मजकूर संख्यांत रूपांतर करणाऱ्या tool चे नाव?", options: ["CountVectorizer", "MultinomialNB", "train_test_split", "LSTM"], correct: 0 },
      { question: "model शिकण्यासाठी कोणता data वापरता?", options: ["Training", "Test", "Validation", "Production"], correct: 0 },
      { question: "जास्तीत जास्त example मध्ये model सुधारण्याची पहिली पायरी?", options: ["अधिक data", "कमी data", "कोड कपात", "bank चुकीचा"], correct: 0 },
      { question: "normal मेसेज spam म्हणून गेल्यास काय म्हणतात?", options: ["False positive", "False negative", "True spam", "Zero"], correct: 0 },
      { question: "MultinomialNB हा कोणत्या प्रकारचा model आहे?", options: ["Classifier", "Regressor", "Generator", "Search"], correct: 0 },
    ],
    related: ["ai-nlp", "ai-python", "python-machine-learning"],
    prev: "ai-career",
    next: "ai-project-chatbot",
  },

  {
    slug: "ai-project-chatbot",
    categoryId: "ai",
    title: "AI Project - नियम-आधारित Chatbot",
    marathiTitle: "दुसरा प्रकल्प — Python मध्ये साधा Chatbot",
    level: "intermediate",
    minutes: 35,
    summary: "कोणतेही मोठे model न लावता Python मध्ये काम करणारा नियम-आधारित chatbot. input parsing, rules, मराठी उत्तरे, सत्र (state) — सोपी शिस्त आणि पुढे LLM कुठे बसेल ते पाहू.",
    sections: [
      {
        title: "Chatbot चे प्रकार",
        content: "Chatbot दोन मुख्य प्रकार:\n\n१) Rule-based — फिक्स नियम; वाक्यातील शब्द/pattern दिसल्यावर उत्तर. सोपे, अचूक, पण अवघड प्रश्नात अडकतो.\n२) AI/LLM-based — न्यूरल model; मुक्त संभाषण, पण भारी, cost, data लागतो.\n\nया पाठात rule-based बनवणार — कारण: सोपा, शिकवण्यासाठी उत्तम.\n\nव्यवहारात अनेक प्रणाली दोन्ही मिक्स करतात:\n\t• साधे प्रश्न (मेनू, वेळ, ठिकाण) → rules.\n\t• खुल्या समस्या → LLM.\n\nमग हा प्रोजेक्ट तुम्हाला देईल: पाया + विचार — पुढे LLM कुठे जोडायचं ते समजेल.",
      },
      {
        title: "वापराची स्थिती काय",
        content: "आपला chatbot काय करील ते ठरवा:\n\nउदाहरण — शाळेचा सहाय्यक bot:\n\t• 'होमवर्क काय आहे?' → उत्तर (session state सोबत).\n\t• 'वेळ काय?' → शाळेचा time-table.\n\t• 'कोण आहेस?' → परिचय.\n\t• शुभेच्छा/निरोप.\n\nमर्यादित domain — गणित सोपे असा नियम.\n\nहे उदाहरण ठरवून:\n\t• input हे text.\n\t• output text.\n\t• state — विद्यार्थ्याची आठवण (उदा. शेवटचा विषय).\n\nवास्तव bot मध्ये प्रथम domain ठरवणे हीच मोठी कला — काय समजायचं, काय नाही.",
      },
      {
        title: "पहिली रचना — input parsing",
        content: "Bot चा पहिला भाग — वापरकर्त्याने काय लिहिले ते समजून घेणे.\n\nसोपी पद्धत — शब्द शोधणे:\n\tमजकूर lower-case करा.\n\tकोणते नमुने (keywords) ठरवा.\n\nPython:\n\tmessage = input('तुम्ही: ')\n\tmsg = message.lower()\n\n	if 'नमस्कार' in msg:\n\t    print('Bot: नमस्कार! कसं मदत करू?')\n	elif 'होमवर्क' in msg:\n\t    print('Bot: आज गणिताचं segment-1 पूर्ण करायचं.')\n\nहे rule-based चा गाभा — condition ची साखळी.\n\nसुधारणा: if/elif क्रमानंतर default उत्तर ('मला ते नीट समजलं नाही. पुन्हा विचारा.') — अज्ञात प्रश्नात चांगला वागणूक.",
      },
      {
        title: "मराठी शब्द आणि स्वरूप",
        content: "मराठी input मध्ये अनेक रूपे:\n\t'होमवर्क', 'homework', 'गृहपाठ' — सगळे तेच.\n\nतर नियम बनवा — अनेक शब्द समान 'category' मध्ये:\n\n\thomework = ['होमवर्क', 'homework', 'गृहपाठ', 'गृहकार्य']\n\tif any(w in msg for w in homework):\n\t    ...\n\nयाला synonym list / intent असा विचार करा.\n\nआणखी सुधारणा:\n\t• सामान्य शब्द stop (ai-nlp).\n\t• छोटे शब्द skip करा — 'मला', 'हे', 'काय'.\n\nप्रत्येक नियम मराठी अक्षरांत उपयुक्त ठेवा — हे मराठी bot बनवण्याचा पहिला अर्थपूर्ण पाऊल.",
      },
      {
        title: "State — आठवण ठेवणे",
        content: "सतत सत्र (conversation state) — मागची माहिती भविष्यातील उत्तरांत:\n\nउदाहरण:\n\tप्रश्न: 'गणिताचं होमवर्क काय?'\n\tbot: 'गणिताचं काम 5 प्रश्न पूर्ण करा.'\n\tपुढे: 'आणखी काही?'\n\tbot शेवटचा विषय 'गणित' आठवतो.\n\nPython मध्ये:\n\tlast_topic = None\n\t...\n\tif 'गणित' in msg:\n\t    last_topic = 'गणित'\n\t    print('Bot: गणिताचं काम 5 प्रश्न.')\n\telif 'आणखी' in msg and last_topic:\n\t    print(f'Bot: {last_topic} वर आणखी विचारा.')\n\nहे session व memory ची साधी पायरी — LLM तो context window मध्ये ठेवतो (ai-chatgpt).\n\nstate ची रचना वाढल्यास dict/class बनवा — मोठ्या bot मध्ये database लागतो.",
      },
      {
        title: "Capture — error हाताळणे",
        content: "वापरकर्त्यांच्या प्रश्नांत अनेक गोष्टी — नेहमी सांभाळा:\n\t• रिकामा input — विचार करा.\n\t• गैरसमज/अपशब्द — तटस्थ उत्तर.\n\t• केवळ default तपासणे.\n\nरचना:\n\n\ttry:\n\t    msg = input(...)\n\texcept EOFError:\n\t    break\n\nतसेच while loop तोडण्यासाठी 'निरोप'/'बाय' नियम.\n\ndefault उत्तर:\n\tमदत करायचा प्रयत्न दिसला तरी बरोबर — 'मला ते नीट समजलं नाही. पुन्हा विचारा.'\n\nमोठी गोष्ट — chatbot एक software product: अपेक्षित/अनपेक्षित सर्व आघात हाताळणे आवश्यक.\n\nकोड लिहा आणि शक्य तितके विचित्र inputs द्या — तीच तपासणीची पद्धत.",
      },
      {
        title: "कोड संरचना — functions",
        content: "सगळा कोड एका रांगेत न लिहिता function च्या स्वरूपात:\n\n\tdef get_response(msg):\n\t    # शब्द पडताळणी\n\t    ...\n\t    return उत्तर\n\n\tdef main():\n\t    while True:\n\t        msg = input('तुम्ही: ')\n\t        if 'निरोप' in msg:\n\t            print('Bot: निरोप!')\n\t            break\n\t        print('Bot:', get_response(msg))\n\nमफलत:\n\t• प्रत्येक भाग स्वतंत्र.\n\t• नवीन नियम जोडणे सोपे.\n\t• (unit) test करता येते.\n\nहेच तंत्र मोठ्या software मध्ये — वाचनीयता व राखण्यायोग्यता.\n\nआतापर्यंतच्या Python शृंखलेतील functions हा पाया इथे कामी येतो.",
      },
      {
        title: "चाचणी आणि सुधारणा",
        content: "पूर्ण bot तयार झाल्यावर — चाचणी:\n\nसर्किट चालवून चाचणी:\n\t• 'नमस्कार, कोण आहेस?'\n\t• 'होमवर्क काय?'\n\t• 'आणखी काही?'\n\t• 'निरोप'\n\t• 'अज्ञात विचार...'\n\nउत्तरांचा निकष:\n\t• अचूक उत्तर मिळाले का.\n\t• काही विषयात गोंधळ नाही का.\n\t• चुकीच्या प्रश्नावर default व्यवस्थित.\n\nसुधारणेसाठी:\n\t• नवीन keywords/patterns जोडा.\n\t• state आणखी सखोल.\n\t• 'नमस्कार' मधील रूपे\u200b (hello, हाय) शोधा.\n\nहेच cycle — बनवा, तपासा, सुधारा — सगळ्या software विकासात.",
      },
      {
        title: "packaging — पुढे काय करू शकता",
        content: "दोन प्रकल्प पूर्ण! पुढे:\n\t• हा bot web मध्ये सादर करा (python-web-flask).\n\t• Rule-based सोबत LLM call जोडा (GPT मध्ये send text → उत्तर).\n\t• Intents डेटामध्ये वर्गीकरण करा (spam प्रोजेक्ट सारखा classifier).\n\nबरंच path:\n\tRule-based → +LLM/hybrid → chatbot product.\n\nआजचे सार:\n\t• domain ठरवा.\n\t• input parsing (शब्द/pattern).\n\t• state/memory.\n\t• error handling + default.\n\t• functions + testing.\n\nदोन्ही प्रकल्पांनी तुम्हाला पूर्ण cycle समजलं — याचसारखी AI ची मजा आणि ताकद खरी जाणवते!",
      },
      {
        title: "आजचा सारांश",
        content: "नियम-आधारित chatbot मध्ये:\n\n• Rule-based vs AI bot चा फरक.\n• Keyword/intent मधून parsing.\n• Synonym lists — मराठी रूपे.\n• Session state — आठवण.\n• Error handling + default उत्तर.\n• Functions व टेस्टिंग.\n\nतुम्ही आता AI series च्या दोन प्रकल्पांमध्ये पूर्ण cycle शिकलात.\n\nआजचे प्रॅक्टिस:\n\t०१. chatbot बनवा आणि किमान 10 प्रश्नांवर चालवा.\n\t०२. state मध्ये शेवटच्या 3 विषयांची यादी ठेवा.\n\t०३. एक keyword नवीन जोडा आणि testing द्या.",
      },
    ],
    practiceQuestions: [
      "Rule-based chatbot ची मर्यादा काय?",
      "Synonym list का उपयोगी?",
      "Session state काय ठेवतो?",
      "default उत्तर नसल्यास काय होतं?",
    ],
    quiz: [
      { question: "नियम-आधारित chatbot चा मुख्य घटक कोणता?", options: ["नियम/if-elif", "LLM", "GPU", "मोठा data"], correct: 0 },
      { question: "bots मराठीत विविध रूपांचा सामना कसा करतो?", options: ["Synonym list", "फक्त exact", "रंग", "शब्द नाही"], correct: 0 },
      { question: "मागील संभाषणाची आठवण कोणत्या अवस्थेत राहते?", options: ["State/session", "CPU", "Hardware", "Image"], correct: 0 },
      { question: "समजत नसलेल्या प्रश्नावर bot काय करतो?", options: ["default उत्तर", "गप्प", "कोड अडवणे", "लॉगिन"], correct: 0 },
      { question: "कोड व्यवस्थित ठेवण्यासाठी कोणती रचना वापरतात?", options: ["Functions", "फक्त print", "फक्त variable", "कोणतीही नाही"], correct: 0 },
    ],
    related: ["ai-career", "ai-prompts", "python-functions"],
    prev: "ai-project-spam",
  },
];