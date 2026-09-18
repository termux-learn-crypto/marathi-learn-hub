import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 1 — Absolute Beginner ===
export const L1_LABEL = "Level 1 — Absolute Beginner (सर्वात सुरुवात)";

export const pythonLevel1: Tutorial[] = [
  {
    slug: "python-basics",
    categoryId: "python",
    title: "Python Basics - मूलभूत Python",
    marathiTitle: "Python म्हणजे काय?",
    level: "beginner",
    minutes: 25,
    summary: "Python म्हणजे काय, ती इतकी लोकप्रिय का आहे, तिचा इतिहास, तिची वैशिष्ट्ये आणि ती कुठे वापरली जाते — हे सर्व सविस्तर, मराठीत समजून घेऊया.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Python चे फायदे आणि महत्त्व",
        content: "✓ त्यांचा अर्थ एकदा कळला की इंग्रजीची गरज नाही.\n✓ प्रत्येक भाषेला स्वतःचं स्थान आहे, पण Python चे काही मोठे फायदे:\n\nपहिला — वाचता येणं (readability): Python च्या design philosophy मध्ये 'Readability counts' हे तत्त्व आहे.\n✓ पण बर्याच कामांसाठी हा फरक महत्त्वाचा नसतो, आणि C मध्ये लिहिलेल्या libraries ही कमतरता भरून काढतात.\n✓ महत्त्वाचे: indent (डावीकडील जागा).\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Python म्हणजे काय?",
        content: "Python ही एक high-level (उच्च-स्तरीय) programming भाषा आहे. म्हणजे ती माणसाच्या भाषेच्या जवळ आहे, त्यामुळे ती समजून घेणं आणि लिहिणं सोपं जातं. संगणक स्वतः फक्त 0 आणि 1 मध्ये समजतो (हे machine language); Python सारखी भाषा आपल्या सोप्या शब्दांना संगणकाला समजेल अशा भाषेत भाषांतर करते.\n\nहे भाषांतर कोण करतं? Python ही 'interpreted' भाषा आहे — interpreter नावाचा program तुमचा कोड लगेच वाचतो आणि एका एका line ने चालवतो. यामुळे छोटे programs पटकन चालतात आणि चूक लवकर दिसते. उलट C किंवा Java सारख्या भाषा आधी compile (पूर्ण भाषांतर) करतात आणि मग चालतात.\n\nPython ची सर्वात मोठी खासियत तिची syntax (व्याकरण) आहे — ती जवळपास साध्या इंग्रजीसारखी वाचता येते. उदा. 'नमस्कार छाप' हे फक्त print() ने होतं. Python ही free आणि open-source आहे: कोणीही विनामूल्य download करू शकतो, आणि त्यासोबत लाखो libraries (आधीच तयार कोडचे बंडल) मोफत मिळतात — डेटा सायन्स, वेबसाइट, चित्र-आवाज प्रक्रिया, अगदी खेळांसाठीही.\n\nएक गंमत: Python चं नाव आणि 'साप' यांचा संबंध नाही! नाव 'Monty Python's Flying Circus' या ब्रिटिश कॉमेडी शोवरून ठेवलं गेलं. या कोर्समध्ये आपण साध्या print() पासून डेटा, लूप, functions, OOP, files आणि advanced topics पर्यंत सर्व शिकणार आहोत. तुम्ही नवशिके असलात तरी हरकत नाही — Python जगात शिकवण्यासाठी सगळ्यांत योग्य भाषा म्हणून ओळखली जाते.",
      },
      {
        title: "संगणकाला सूचना कशा देतात?",
        content: "Python म्हणजे संगणकाला नेमक्या सूचना देणं. जसं आपण एखाद्या माणसाला 'हा ग्लास पाणी काढून द्या' असं सांगतो, तसंच Python मध्ये आपण संगणकाला सांगतो — फक्त तो अगदी अक्षरशः पाळतो. 'जरा थोडं कमी मिठ घाल' अशा अस्पष्ट सूचना त्याला समजत नाहीत; प्रत्येक गोष्ट नेमकी सांगावी लागते.\n\nउदा. '5 आणि 3 ची बेरीज छाप' हे असं लिहाल:\nprint(5 + 3)\n\nइथे print म्हणजे 'स्क्रीनवर दाखव' आणि 5 + 3 म्हणजे 'आधी बेरीज कर'. संगणक आधी 5 + 3 = 8 काढतो आणि मग ते स्क्रीनवर दाखवतो. 'प्रथम calculate, मग display' हा विचार पुढे खूप वेळा लागेल.\n\nPython मध्ये सूचना वरून खाली क्रमाने चालतात — ज्या क्रमाने lines लिहाल त्याच क्रमाने. याला 'top-to-bottom execution' म्हणतात. पुढील levels मध्ये if, loops, functions यांसारख्या नियंत्रणांनी हा क्रम आपल्या इच्छेप्रमाणे बदलता येतो.\n\nआणखी एक आश्वासन: 'मला English चांगलं येत नाही, कोडिंग करता येईल का?' — होईल! Python मध्ये फक्त काही English शब्द वापरले जातात (print, input, if, else, for, while, def). त्यांचा अर्थ एकदा कळला की इंग्रजीची गरज नाही. प्रत्येक संकल्पना मराठीत शिकवली आहे, आणि मराठीतच कोडही लिहिता येतो — नाव = \"सायली\" असा मराठी variable नाव वापरता!",
      },
      {
        title: "इतिहास: 1989 पासून",
        content: "Python ची सुरुवात 1980 च्या दशकाच्या शेवटी नेदरलँड्समध्ये झाली. Guido van Rossum त्या वेळी CWI (सेंट्रो व्होली) संस्थेत काम करत होते. शिकवण्यासाठीच्या ABC भाषेपासून त्यांना प्रेरणा मिळाली, पण ती खूप मर्यादित होती — त्यांना साधी, वाचता येणारी आणि वेगाने लिहिता येणारी भाषा हवी होती.\n\nडिसेंबर 1989 मध्ये Guido ने काम सुरू केलं आणि फेब्रुवारी 1991 मध्ये पहिली सार्वजनिक आवृत्ती (0.9.0) आली. नाव त्यांनी Monty Python कॉमेडी शोवरून ठेवलं — भाषा मजेशीर आणि हलकी वाटावी म्हणून.\n\n1994 मध्ये Python 1.0 आली (lambda, map, filter); 2000 मध्ये 2.0 (list comprehensions, garbage collection). 2008 मध्ये Python 3.0 आली — ती backward-compatible (मागास-सुसंगत) नव्हती, म्हणजे Python 2 मध्ये लिहिलेले काही programs Python 3 मध्ये थेट चालत नाहीत. सुरुवातीला गोंधळ झाला, पण Python 3 हीच भविष्याची भाषा ठरली आणि 1 जानेवारी 2020 नंतर Python 2 चे अधिकृत समर्थन बंद झाले.\n\nआज Python जगातील सर्वाधिक लोकप्रिय भाषांमध्ये अव्वल दहामध्ये असते — TIOBE आणि Stack Overflow सारख्या मोजमापांत ती वरच्या रांगेत असते. ती नि:शुल्क आणि open-source आहे, त्यामुळे जगभरातील हजारो लोक तिच्या सुधारणेत भाग घेतात.\n\nQuick timeline: 1989 — काम सुरू; 1991 — आवृत्ती 0.9.0; 1994 — Python 1.0 (lambda, map, filter); 2000 — Python 2.0; 2008 — Python 3.0; 2020 — Python 2 समर्थन बंद. अधिकृत संदर्भासाठी python.org पहा.\n\nलोगोबद्दल: नाव Monty Python वरून आलं, पण लोगोमध्ये दोन सर्प दिसतात — ते जाणूनबुजून निवडलं गेलं. Python एकीकडे शिस्तबद्ध प्रणाली, तर दुसरीकडे मजेशीर भाषा म्हणून ओळखली जाते.",
      },
      {
        title: "इतर भाषांपेक्षा फरक",
        content: "प्रत्येक भाषेला स्वतःचं स्थान आहे, पण Python चे काही मोठे फायदे:\n\nपहिला — वाचता येणं (readability): Python च्या design philosophy मध्ये 'Readability counts' हे तत्त्व आहे. कोड इंग्रजीसारखा वाचता येतो, त्यामुळे दुसरा कोणीही तुमचा कोड पटकन समजू शकतो.\n\nदुसरा — कमी तयारी: C/Java मध्ये 'Hello World'साठी boilerplate च्या 5-6 lines लागतात; Python मध्ये फक्त print(\"नमस्कार\"). नवशिक्यांचा आत्मविश्वास वाढतो.\n\nतिसरा — dynamic typing: Java/C मध्ये प्रत्येक variable ची type सांगावी लागते (int age = 5); Python मध्ये नाही — ती स्वतः ओळखते की 5 ही संख्या आहे आणि '5' हा मजकूर.\n\nचौथा — मोठा ecosystem: SciPy/NumPy गणितासाठी, Django/Flask वेबसाठी, Pandas डेटासाठी, Matplotlib graphs साठी, TensorFlow/PyTorch AI साठी — हे सगळं pip या एका command ने install होतं. Python वेब विकास, डेटा सायन्स, automation, AI, शिक्षण, संशोधन आणि robotics मध्येही वापरली जाते.\n\nकमी काय? Python संथ (slower) असू शकते — ती interpreted आहे आणि dynamic typing मुळे अतिरिक्त तपासणी होते. पण बर्याच कामांसाठी हा फरक महत्त्वाचा नसतो, आणि C मध्ये लिहिलेल्या libraries ही कमतरता भरून काढतात. जगभरातील शाळा-महाविद्यालयांमध्येही पहिली भाषा म्हणून Python शिकवली जाते.\n\nPython ची design philosophy म्हणजे 'Zen of Python' — 19 सूत्रांचा संग्रह. त्यातले नियम: 'सोपं जटिलतेपेक्षा चांगलं', 'सुस्पष्ट गूढतेपेक्षा चांगलं'. या तत्त्वज्ञानामुळे Python कोड वाचण्यास सोपा आणि टिकाऊ राहतो.",
      },
      {
        title: "Python कोड कसा दिसतो?",
        content: "Python मध्ये प्रत्येक सूचना एका नवीन line वर लिहितात आणि संगणक त्या वरून खाली क्रमाने वाचतो. साधी सूचना:\n\nprint(\"नमस्कार\")\n\nइथे काय होतं?\n• print हे Python चं built-in function आहे\n• कंसात जे लिहू ते स्क्रीनवर दिसते\n• \"नमस्कार\" अवतरणांमध्ये आहे, म्हणून Python ओळखतं की हा मजकूर आहे, variable नाही\n\nइतर भाषांपेक्षा Python ची syntax कमी symbols वापरते — Java मध्ये अर्धविराम (;) आणि कंसांचा पाढा असतो, Python मध्ये नाही. Python कोड .py extension च्या फाइलमध्ये ठेवतात (उदा. माझा_कोड.py).\n\nमहत्त्वाचे: indent (डावीकडील जागा). इतर भाषांमध्ये जागा फक्त सुंदर दिसण्यासाठी असते; Python मध्ये ती कोडचा अर्थ बदलते! if किंवा for लिहिताना आतल्या सूचना 4 spaces ने आत ढकलणं आवश्यक आहे — हे Level 2 मध्ये सविस्तर शिकू. पण PyCharm, VS Code, IDLE सारखे संपादक आपोआप indentation लावतात.\n\nमजकूर आणि संख्या यातला फरक समजून घ्या: print(\"10\") हे 10 हा मजकूर छापतं, पण print(10) ही संख्या. पुढे गणित करताना हाच फरक ठरवतो. आणि expression म्हणजे ज्याचं मूल्य निघतं असा कोड भाग — print(7 * 7) मध्ये 7 * 7 = 49 हे expression. 'मूल्य काढा, मग छापा' ही पद्धत लक्षात ठेवा.",
        code: `print("नमस्कार")
print(2 + 3)
print("मराठीमध्ये शिकणे सोपे आहे")`,
        codeLanguage: "python",
        output: "नमस्कार\n5\nमराठीमध्ये शिकणे सोपे आहे",
      },
      {
        title: "पहिलं उदाहरण",
        content: "आपला पहिला program करूया. print() तुम्हाला कोणताही message, संख्या किंवा मजकूर स्क्रीनवर दाखवतो. दोन्ही print च्या lines एकामागून एक चालतात — पहिली 'नमस्कार', दुसरी 'मी Python शिकतोय'. या वेगवेगळ्या messages म्हणजेच program चं output.\n\nपहिल्या ओळीत # पासून सुरू होणारी टीप एक comment आहे. Comment कोडमधील माणसांसाठीची टीप असते — संगणक तिच्याकडे दुर्लक्ष करतो. प्रत्येक प्रोग्रामर comment चा वापर कोड समजावण्यासाठी आणि स्मरणपत्रासाठी करतो.\n\nहा कोड बदलून पाहा: पहिली ओळ तुमचं नाव, दुसरी तुमचं गाव लिहा. काय output येतं ते पहा. स्वतःचं काहीतरी टाकलं की शिकण्याची ताकद वाढते — आपल्या इच्छेनुसार बदलणारा program म्हणजेच खरी programming ची सुरुवात.",
        code: `# पहिला program
print("नमस्कार")
print("मी Python शिकतोय")`,
        codeLanguage: "python",
        output: "नमस्कार\nमी Python शिकतोय",
      },
      {
        title: "आजच्या जगात Python कुठे वापरतात?",
        content: "Python कुठे वापरली जाते?\n\n• Google चा search algorithm — मूळ प्रणाली Python मध्येच लिहिली गेली\n• YouTube चा recommendation system — कोणता व्हिडिओ आवडेल हे ठरवण्याचा मोठ्या code चा भाग Python आहे\n• Instagram — मोठी backend अजूनही Python (Django) वर आहे\n• सायन्स रिसर्च आणि Data Science — डेटा मोजणी आणि विश्लेषणासाठी\n• बँकांच्या अनेक गणना आणि सिस्टम्स\n• नवीन AI मॉडेल्स (ChatGPT सारखी) — Python च्या libraries वापरल्या जातात\n\nम्हणजेच जगातील लोकप्रिय apps आणि websites मध्ये Python कुठेतरी असतेच. या कोर्सनंतर तुम्ही स्वतःचे छोटे programs बनवू शकाल — चहा दुकानाचं बिल कोड, मराठी शब्दकोश tool, शाळेचा results program, अगदी छोटा data analysis प्रोजेक्ट.\n\nहे विसरू नका: प्रत्येक master प्रोग्रामरने एकेकाळी पहिल्या print() पासून सुरुवात केली होती. आज तुम्ही करत असलेलं शिकणं हीच पुढच्या मोठ्या कामांची पायाभरणी आहे.",
      },
      {
        title: "सुरुवातीच्या चुका आणि उपाय",
        content: "खाली सुरुवातीला अनेकदा होणाऱ्या चुका आणि त्यांची उत्तरं:\n\n✗ print(\"नमस्कार) — अवतरण (\"\") बंद केलं नाही. Python ला मजकूर कुठे संपतो कळत नाही → SyntaxError.\n\n✗ print(hello) — hello अवतरणांत नाही. Python समजतो की hello हे variable आहे; ते परिभाषित नसल्याने → NameError.\n\n✗ Print(\"नमस्कार\") — Python case-sensitive आहे. print लहान अक्षरांनीच लिहा; मोठे 'P' केल्यास → NameError.\n\n✗ print 5 + 3 — कंस विसरलात; print नेहमी कंसांनी बोलवा: print(5 + 3). आणि print(\"5 + 3\") — अवतरणांत जे लिहू ते शब्दशः छापलं जातं, त्यामुळे बेरीज करायची असल्यास print(5 + 3) लिहा.\n\n✗ print(\"एक\") print(\"दोन\") एकाच ओळीत — प्रत्येक सूचना स्वतःच्या ओळीवर हवी; नाही तर SyntaxError.\n\nचूक झाल्यावर गोंधळू नका — Python चा error message नेमकं कुठे चूक आहे ते सांगतो; तो बारकाईने वाचा. उदा. unterminated string दिसले तर अवतरणांची तपासणी करा. चूक म्हणजे 'अयशस्वी' नव्हे — ती शिकण्याची संधी आहे.",
      },
      {
        title: "हे लक्षात ठेवा",
        content: "या धड्यात शिकलेलं थोडक्यात:\n\n• Python ची भाषा clean आणि readable आहे — हे 'अंदाज' नाही, design goal आहे\n• ती free आणि open-source आहे — फी नाही, सर्वांना उपलब्ध\n• तिची community मोठी आहे म्हणून help मिळणं सोपं — Stack Overflow वर लाखो उत्तरं\n• जगातील सर्वात लोकप्रिय भाषांमध्ये Python अव्वल रांगेत आहे\n• print() ही आपली पहिली function — तिला नेहमी कंस लागतात, अवतरण फक्त मजकुरासाठी\n• Python case-sensitive आहे — print, Print, PRINT हे तीन वेगळे शब्द\n• प्रत्येक सूचना नवीन line वर\n• संगणक कोड वरून खाली क्रमाने चालवतो\n\nस्वतःची चाचणी घ्या: 'Python आणि C यात काय फरक?' उत्तर — Python interpreted आणि सोपी; C compiled. आणि 'print(\"5+3\") चं output काय?' — अवतरणांमुळे '5+3' असंच, 8 नाही. पुढील धड्यांमध्ये install, editor, variables, data types, operators सविस्तर शिकणार आहोत; आताचे नियम त्या सर्वांचा पाया आहेत. नियमित कोड लिहा — programming ही वाचून नव्हे, करून शिकायची (सायकलिंगसारखी) गोष्ट आहे.",
      },
      {
        title: "Python 2 vs Python 3",
        content: "सध्या सर्वत्र Python 3 वापरली जाते (उदा. 3.10, 3.11, 3.12). पण 'Python भाषा' आणि 'Python software' या दोन गोष्टी वेगळ्या: भाषा म्हणजे तिचे नियम आणि syntax; interpreter हा software आहे जो ती भाषा चालवतो. Python install केलं म्हणजे हे दोन्ही मिळतं.\n\nजुने दस्तऐवज कधी कधी Python 2 साठी असतात — तिथे print \"नमस्कार\" कंसाशिवाय चालतं; Python 3 मध्ये print(\"नमस्कार\") कंसांनी लिहावं लागतं. आपण Python 3 शिकत आहोत, आणि तीच भविष्याची भाषा आहे.\n\nआवृत्ती तपासणी सोपी आहे: terminal मध्ये python --version. काही नवीन features (f-string, walrus operator, match statement) फक्त विशिष्ट आवृत्त्यांमध्ये असतात. इंटरनेटवरून examples घेताना ते कोणत्या आवृत्तीसाठी लिहिले आहेत ते तपासा — आपल्या आवृत्तीपेक्षा नवीन कोड error देईल. library लाही स्वतःची आवृत्ती असते; install च्या धड्यात ते सविस्तर पाहू.",
      },
      {
        title: "Interactive: बदलून पाहा",
        content: "खालील कोड Run बटण दाबून चालवा. तुम्ही तो बदलून देखील पाहू शकता — उदा. name ची value बदला, किंवा 10 + 5 असलेली line बदलून 100 - 20 करा. बर्याचदा कोडमध्ये बदल करून पाहणं हे उत्तम शिक्षण असतं.\n\nइथे काही गोष्टी दिसतात:\n• name हा एक variable आहे — त्यात 'विलास' ही value साठवली आहे\n• print(\"नमस्कार,\", name) — दोन गोष्टी एकत्र print करतो, कॉमा ने वेगळे\n• print(\"बेरीज:\", 10 + 5) — आधी बेरीज (15), मग ती छापली जाते\n\nतुम्हाला स्वतःचं नाव घालून try करा — स्वतःचं नाव पाकिटात ठेवताना वाटतं खरं. तरीही जर variable ची कल्पना अजून अस्पष्ट असेल तर चिंता नको — पुढील lessons मध्ये variables खोलवर शिकू.\n\nRun केल्यावर screen वर काय दिसतं: पहिल्या ओळीत नमस्कार, विलास, दुसऱ्या ओळीत बेरीज: 15. लक्षात घ्या, 'विलास' हे name या variable मध्ये ठेवलेली value आहे — ती बदलली तर output बदलतो. हा प्रयोग लगेच करून पाहा: name ची value दुसऱ्या नावाने बदला आणि पुन्हा Run दाबा.\n\nजर output मध्ये काही चूक दिसली तर त्रास काही नाही — तीन प्रश्न विचारा: spelling बरोबर आहे का? कंस बंद आहेत का? अवतरणं जुळली आहेत का? हे तीन प्रश्न बर्याच सुरुवातीच्या चुका सोडवतात. शिवाय कोड बदलण्याची हीच सवय पुढे debugging नाव देऊन शिकवली जाते — अगदी व्यावसायिक programming मध्येही हेच तंत्र वापरलं जातं.",
        code: `# तुम्ही हे बदलून पाहा!
name = "विलास"
print("नमस्कार,", name)
print("मी Python शिकतोय!")
print("बेरीज:", 10 + 5)`,
        codeLanguage: "python",
        output: "नमस्कार, विलास\nमी Python शिकतोय!\nबेरीज: 15",
      },
      {
        title: "Mini Project: तुमची ओळख",
        content: "छोटं काम: तुमच्या नावाने, गावाने आणि आवडीच्या गोष्टीने एक ओळख print करा. या project मध्ये आपण तीन गोष्टी एकत्र आणतो:\n\n• variable ची निर्मिती — नाव, गाव यांसारखी नावे\n• ती print() मध्ये वापरणे\n• मराठी अक्षरांमध्ये output — Python हे छान छापेल\n\nकार्यक्रमाचा क्रम: first variables सेट करा (नाव = \"सायली\"), मग print मध्ये वापरा. आतापर्यंतच्या नियमांचा पुरावा म्हणजे हे output — संगणकाने तुमच्या सूचना अगदी प्रमाणेच वर्तवल्या.\n\nहा project सोपा वाटत असला तरी त्यात खूप महत्त्वाच्या कल्पना आहेत. पहिली म्हणजे variable — नाव म्हणजे एक box ज्यात आपण value ठेवतो. दुसरी म्हणजे ती value नंतर पुन्हा वापरणे. तिसरी म्हणजे मराठी अक्षर headers output करणे. या तीन गोष्टी पुढच्या कित्येक lessons चा पाया आहेत.\n\nएक चांगली सवय: program लिहिल्यावर तो मित्राला किंवा एखाद्या junior ला दाखवा आणि 'हे काय करतं?' असं विचारा. त्याला जर output स्पष्ट वाटला तर तुमचं program उत्तम आहे — कारण code लिहिताना आपल्याला फक्त संगणकालाच नव्हे, तर माणसांनाही समजावं असं लिहावं लागतं.\n\nशेवटी तुम्हाला हवं तर हा project आणखी वाढवा: आवडत्या गोष्टी, आवडता विषय, शाळेचं नाव — काहीही जोडा. जितक्या जास्त गोष्टी जोडल्या तितकं जास्त शिकणं होईल आणि सगळं मिळून एक मजेदार प्रोग्राम तयार होईल.",
        code: `# माझी ओळख
नाव = "सायली"
गाव = "नागपूर"
print("नमस्कार, मी", नाव)
print("मी", गाव, "मध्ये राहते")
print("मला Python खूप आवडते!")`,
        codeLanguage: "python",
        output: "नमस्कार, मी सायली\nमी नागपूर मध्ये राहते\nमला Python खूप आवडते!",
      },
    ],
    practiceQuestions: [
      "Python भाषा कोणत्या वर्षी आली आणि ती कोणी बनवली?",
      "Python चं नाव कशावरून पडलं — सापांवरून की कॉमेडी शोवरून?",
      "'High-level' भाषा म्हणजे काय, आपल्या शब्दांत सांगा?",
      "Interpreted आणि compiled भाषांमध्ये फरक काय?",
      "आपल्या आवडत्या 3 mobile apps ची नावे लिहा जी Python वापरत असतील.",
      "Print(\"हाय\") आणि print(\"हाय\") — कोणतं valid आहे आणि का? (प्रकरण case-sensitive चं)",
      "print() function ला कंस का लागतात?",
      "Python वापरून तुम्ही स्वतःचं कोणतं छोटं program बनवाल असं वाटतं?",
    ],
    quiz: [
      {
        question: "Python कोणत्या प्रकारची भाषा आहे?",
        options: ["Low-level", "High-level", "Machine language", "Assembly"],
        correct: 1,
      },
      {
        question: "Python मध्ये काही print करण्यासाठी कोणती function वापरतात?",
        options: ["echo()", "print()", "display()", "show()"],
        correct: 1,
      },
      {
        question: "Python कोणत्या डेव्हलपरने तयार केली?",
        options: ["James Gosling", "Bjarne Stroustrup", "Guido van Rossum", "Dennis Ritchie"],
        correct: 2,
      },
      {
        question: "कंप्युटरला सूचना काय म्हणतात?",
        options: ["Syntax", "Code", "Variable", "Program"],
        correct: 2,
      },
      {
        question: "Python ही interpreted भाषा आहे — याचा अर्थ काय?",
        options: ["आधी तयार होऊन मग चालते", "एका एका line ने लगेच चालते", "अजिबात चालत नाही", "फक्त Windows वर चालते"],
        correct: 1,
      },
      {
        question: "Python चं नाव कशावरून आलं?",
        options: ["सापाच्या प्रजातीवरून", "Monty Python comedy show वरून", "Guido च्या आईच्या नावावरून", "एका शहराच्या नावावरून"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "Challenge: print() वापरून 'मराठी भाषा सुंदर आहे' आणि त्याखाली 25 ची बेरीज 10 + 15 करून दाखवा (बेरीज म्हणजे फक्त संख्यांची — \"25\" नाही). नंतर तिसऱ्या print मध्ये तुमचं नाव आणि आवडतं खेळ एकत्र दाखवा.",
      starterCode: `print("मराठी भाषा सुंदर आहे")
print(10 + 15)`,
      expectedOutput: "मराठी भाषा सुंदर आहे\n25",
    },
    interviewQuestions: [
      "Python म्हणजे काय, एका वाक्यात सांगा?",
      "Python ही high-level भाषा का मानतात?",
      "Interpreted language म्हणजे काय आणि Python त्या गटात का येते?",
      "Python चा इतर भाषांपेक्षा मुख्य फायदा काय?",
      "Python compiled language का नाही? याचा वेगावर कसा प्रभाव पडतो?",
      "Python चं नाव Monty Python वरून आलं — याचा programming शी काय संबंध?",
    ],
    related: ["python-install", "python-print", "html-basics"],
    next: "python-install",
  },

  {
    slug: "python-install",
    categoryId: "python",
    title: "Python Install",
    marathiTitle: "Python install करणे",
    level: "beginner",
    minutes: 10,
    summary: "तुमच्या संगणकावर किंवा Termux मध्ये Python कशी install करायची ते शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "Python install करणे म्हणजे काय?",
        content: "तुमच्या संगणकावर किंवा Termux मध्ये Python कशी install करायची ते शिका.\nPython ही भाषा संगणकाला थेट समजत नाही — संगणकाला फक्त 0 आणि 1 (machine language) समजतं.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },

      {
        title: "Install म्हणजे नेमकं काय?",
        content: "Python ही भाषा संगणकाला थेट समजत नाही — संगणकाला फक्त 0 आणि 1 (machine language) समजतं. Python interpreter (दुभाषा) हा मध्यस्थ आहे: तो कोड एका एका ओळीवरून वाचतो, machine language मध्ये भाषांतर करतो आणि लगेच चालवतो. अशा भाषांना interpreter आधारित म्हणतात.\n\ncompiler असलेल्या भाषांमध्ये (उदा. C) संपूर्ण कोड आधी भाषांतरित होऊन एक executable file बनते; interpreter मात्र ओळ-ओळ करून काम करतो. त्यामुळे Python मध्ये चूक लगेच दिसते — चुकलेल्या ओळीपुढचा कोड चालतच नाही.\n\nInstall म्हणजे हा interpreter device वर बसवणे. Installer storage मध्ये interpreter ची file आणि आवश्यक library बसवतो — Android च्या Termux मध्ये ~/../usr इथे, Windows मध्ये C:\\Users\\तुमचंनाव\\AppData इथे. हे ठिकाण लक्षात ठेवायची गरज नाही; installer ते आपोआप ठरवतो.\n\nएकदा install झालं की इंटरनेट नसलं तरी, कोणताही खर्च न करता, फक्त फोन असेल तरी कोड लिहून output पाहता येतो.",
      },
      {
        title: "Android (Termux) वर install",
        content: "Termux हे Android वर चालणारं terminal app आहे. Google Play वर त्याची जुनी आवृत्ती मिळू शकते, म्हणून अधिकृत site किंवा F-Droid कडून घेणं योग्य. पहिल्यांदा उघडल्यावर termux-setup-storage लिहा — याने फोनच्या storage मध्ये फाईल्स ठेवण्यासाठी folder तयार होतो.\n\nPython install करण्यासाठी तीन command पुरेशा:\n\npkg update — package ची नवी यादी download करतो. पहिल्या वेळेला थोडा वेळ घेतो; progress bar दिसत राहते.\n\npkg install python — Python interpreter आणि त्यासोबत येणारी साधने बसवतो.\n\npython --version — install झालं का ते तपासतो; Python 3.x.x अशी आवृत्ती दिसली म्हणजे Python तयार.\n\nTermux मध्ये apt ची गरज नाही — pkg हे apt चं Termux आवरण आहे. दोन्ही आतून एकच काम करतात.",
        code: `pkg update
pkg install python
python --version`,
        codeLanguage: "shell",
        output: `All packages are up to date.
Python 3.12.3`,
      },
      {
        title: "Windows वर install",
        content: "python.org वरून Python 3 चं installer download करा — page वर पिवळ्या रंगाचं Download Python 3.x.x बटण असतं. चालवताना \"Add Python to PATH\" हा checkbox नक्की tick करा; तो चुकवल्यास नंतर python command सापडत नाही. \"Install Now\" दाबा — Customize installation फक्त विशेष गरज असेल तरच.\n\nPATH ही Windows ची यादी आहे; तिच्यात नोंदलेला program कोणत्याही folder मधून लिहिल्यावर चालतो. tick केल्यानंतर Windows python या नावानेच interpreter शोधतो. tick केलं नसेल तर Python पुन्हा install करताना Modify → PATH आणि pip enable करा.\n\ninstaller 32-bit / 64-bit विचारतो; आजकाल तो आपोआप बरोबर निवडतो. Web installer ऐवजी संपूर्ण installer घ्या. काही Windows मध्ये python ऐवजी py --version लिहूनही चालतं; जो output देतो तोच तुमचा Python.",
        code: `python --version`,
        codeLanguage: "shell",
        output: `Python 3.12.3`,
      },
      {
        title: "Install झालं का? — पडताळणी",
        content: "विश्वासू तपासणी हीच command: python --version. जर python सापडला नाही तर python3 आजमावा — Termux आणि Linux मध्ये दोन्ही आहेत. Output मध्ये Python 3.12.3 सारखी आवृत्ती दिसते; 3 मुख्य आवृत्ती, 12 उप-आवृत्ती, 3 पॅच. Tutorials मध्ये \"माझ्याकडे Python 3.10 आहे\" असं म्हटलं जातं, ते याच आवृत्ती-क्रमांकाची नोंद असते.\n\npython असेच लिहिल्यास >>> हे चिन्ह दिसते. ही Python REPL (Read-Eval-Print Loop) आहे — इथे लिहिलेली ओळ वाचून (Read) तिचा अर्थ लावून (Eval) निकाल दाखवला (Print) जातो आणि पुन्हा ओळ मागितली जाते. इथे प्रत्येक expression चा निकाल लगेच दिसतो.\n\nREPL बंद करण्यासाठी exit() — किंवा terminal वर Ctrl+D, Windows वर Ctrl+Z.",
        code: `>>> print("नमस्कार")
>>> 2 + 2`,
        codeLanguage: "shell",
        output: `नमस्कार
4`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ 'python' हा आंतरिक किंवा बाह्य command नाही (Windows) — PATH checkbox tick झाला नव्हता. Python installer पुन्हा चालवून Modify → Add Python to PATH निवडा.\n✗ Termux मध्ये python command सापडत नाही — python3 लिहा; दोन्ही एकच Python आहेत.\n✗ दोन आवृत्त्या दिसतात — python आणि python3 वेगवेगळ्या Python दाखवू शकतात. प्रत्येक project मध्ये एकच command सातत्याने वापरा.\n✗ पुन्हा पुन्हा install चालवतो — आधी python --version करून पहा; आधीच install असेल तर पुन्हा install करणं वेळेचा अपव्यय.\n✗ Python 2.7.x दिसतं — ही अधिकृतपणे संपलेली आवृत्ती आहे. python.org वरून Python 3 download करा.\n✗ pkg update मध्ये काही download होत नाही — इंटरनेट तपासा; WiFi किंवा mobile data असल्याशिवाय package येणार नाहीत.\n✗ permission denied — termux-setup-storage चालवून storage permission द्या.\n✗ पुरेशी जागा नाही — Python ला साधारण 20–50 MB हवी; जुन्या files हटवून जागा करा.\n✗ pyton अशी spelling — command अचूक लिहा; एक अक्षर चुकलं की Command not found दिसतं.\n\nकोणताही error message copy करून Google वर search करा — प्रत्येक अडचणीची उत्तरं आधी कोणीतरी लिहून ठेवली आहेत.",
      },
      {
        title: ".py file मधून कोड चालवणे",
        content: "REPL प्रयोगासाठी आहे; खऱ्या projects मध्ये कोड file मध्ये लिहून चालवला जातो. अशा file ला script म्हणतात आणि तिच्या नावाचा शेवट .py असतो — hello.py.\n\nFile बनवल्यावर shell मध्ये एकच command:\n\npython hello.py\n\nPython ती file वरून खाली ओळ-ओळ वाचून चालवतो. Output REPL सारखाच असतो — फक्त >>> चिन्ह नसतं. चूक दिसली तर file मध्ये दुरुस्त करून पुन्हा चालवा. हा चक्र — लिहा, चालवा, दुरुस्त करा, पुन्हा चालवा — प्रोग्रामरचं दैनंदिन काम आहे.\n\nFile चं नाव साक्षर ठेवा — hello.py, practice.py. नावात स्पेस असली तर command लिहिताना त्रास होतो. File ही फक्त text file असते; कोणताही editor ती उघडतो.",
        code: `print("नमस्कार")`,
        codeLanguage: "python",
        output: `नमस्कार`,
      },
      {
        title: "Termux मधील nano editor",
        content: "Termux मध्ये script लिहिण्याची सर्वात हलकी पद्धत म्हणजे nano editor. Shell मध्ये लिहा:\n\nnano first.py\n\nआत print(\"नमस्कार\") टाइप करा. Save करून बाहेर येण्यासाठी: Ctrl+X → Y → Enter. खालच्या ओळीत दिसणारी ^X, ^Y ही चिन्हे म्हणजेच Ctrl+X, Ctrl+Y — ^ ही Ctrl कीची खूण आहे.\n\nSave केली की नेहमीप्रमाणे चालवा:\n\npython first.py\n\nOutput मध्ये नमस्कार दिसला म्हणजे file तयार करणे आणि चालवणे या दोन्ही रीती पक्क्या झाल्या. सुरुवातीला editor अवघड वाटतो; १० मिनिटांच्या सरावाने कर्सर, save आणि बाहेर येणं या सवयी लागतात.\n\nप्रत्येक file च्या पहिल्या ओळीत # ने एक टीप लिहा — ती file काय करते हे ओळखता येते. उदा. # ही माझी पहिली Python file. पुढे अनेक files असताना ही टीप दिशा दाखवते.",
        code: `python first.py`,
        codeLanguage: "shell",
        output: `नमस्कार`,
      },
      {
        title: "pip आणि libraries",
        content: "Library म्हणजे इतरांनी आधी लिहिलेला तयार कोड, जो install करून आपल्या प्रोग्रॅममध्ये वापरता येतो — उदा. इंटरनेट, गणित, data analysis यासाठी. pip हा Python चा package manager आहे; तो Python सोबतच install होतो, म्हणून वेगळं काही करावं लागत नाही.\n\nकोणतीही library एका command ने येते:\n\npip install requests\n\nयानंतर कोड मध्ये import requests असं लिहून ती वापरता येते. pip list — कोणत्या library install झाल्या आहेत ते दाखवतो; pip uninstall नाव — हटवणे. काही systems मध्ये python3 -m pip असं लिहावं लागतं; तेही बरोबरच चालतं.\n\nसुरुवातीला libraries ची घाई करू नका. आधी Python चे मूळ — variables, conditions, loops — नीट समजून घ्या. पाया मजबूत झाल्यावर library ची ताकद वापरा.",
        code: `pip install requests`,
        codeLanguage: "shell",
        output: `Successfully installed requests-2.31.0`,
      },
      {
        title: "Interactive: REPL मध्ये प्रयोग",
        content: "खाली python REPL मध्ये print() कसं दिसतं याचं उदाहरण आहे. ही प्रत्येक ओळ REPL मध्ये लिहिली जाते — तिचा output तिच्या खाली दिसतो.\n\nपहिली ओळ print(\"Python तयार!\") — याने output मध्ये Python तयार! दिसतं. दुसऱ्या ओळीत 2 + 2 लिहिलं तर Python स्वतःच बेरीज करून 4 दाखवतो. तिसरी ओळ print(\"मी तयार!\") — output मध्ये मी तयार! दिसतं.\n\nलक्षात घ्या: REPL मध्ये print() शिवायही expression लिहिलं तरी निकाल दिसतो (2 + 2 ने 4 दाखवलं). Scripts मध्ये मात्र print() लिहावं लागतं, कारण निकाल स्पष्ट दिसावा अशी script मधली तरतूद असते.\n\nया कोडमध्ये प्रयोग करा: 2 + 2 ची ओळ बदलून 10 - 3 करा, किंवा print मध्ये तुमचं नाव घाला. आणि help(print) लिहून पहा — Python function ची माहिती स्वतः सांगतो. वरचा बाण (up arrow) दाबल्यास मागची ओळ पुन्हा येते; जास्त दिवसांची command पुन्हा टाइप करावी लागत नाही.",
        code: `>>> print("Python तयार!")
>>> 2 + 2
>>> print("मी तयार!")`,
        codeLanguage: "shell",
        output: `Python तयार!
4
मी तयार!`,
      },
      {
        title: "पुढची पायरी",
        content: "धडा पक्का करण्याची तीन कामं:\n\n१. practice.py file बनवा; तिच्यात print() ने तुमचं नाव, आवडता विषय आणि एक मराठी वाक्य लिहा. python practice.py ने चालवून output पहा.\n\n२. REPL मध्ये गणित आजमावा — 3 * 4, 10 - 3, 25 // 4.\n\n३. पुढला धडा python-first-program वाचा; त्यातला कोड REPL मध्येच तपासून पहा.\n\nस्वतःला ही पाच उत्तरं द्या: install म्हणजे काय? Termux मध्ये Python येण्यासाठी कोणत्या दोन command? python --version काय सांगतो? Windows मध्ये कोणता checkbox महत्त्वाचा असतो? REPL कसं बंद करायचं? — उत्तरं मनात न आल्यास संबंधित section पुन्हा वाचा.",
      },
    ],
    practiceQuestions: [
      "Termux मध्ये Python install करण्याच्या command कोणत्या?",
      "python --version हा command काय करतो?",
      "Windows install मध्ये कोणता checkbox नक्की tick करायचा?",
      ">>>  हे चिन्ह काय सांगतं?",
    ],
    quiz: [
      {
        question: "Termux मध्ये Python install करण्याचा command कोणता?",
        options: ["pkg install python3", "pkg install python", "install python", "apt python"],
        correct: 1,
      },
      {
        question: "Python install झाली का ते तपासण्यासाठी कोणता command?",
        options: ["python --version", "python --check", "version python", "pkg --version"],
        correct: 0,
      },
      {
        question: "Windows install मध्ये कोणता checkbox tick करणं महत्त्वाचं?",
        options: ["Add to Desktop", "Add Python to PATH", "Enable Firewall", "Make default"],
        correct: 1,
      },
      {
        question: "कोणती आवृत्ती वापरावी?",
        options: ["Python 2", "Python 3", "Python 1", "कोणतीही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "Termux उघडा, python install करा, मग python --version लिहून आवृत्ती तपासा. खाली तुम्हाला काय दिसलं ते लिहा.",
      starterCode: `# इथे तुम्ही print() try करू शकता
print("Install झालं!")`,
      expectedOutput: "Install झालं!",
    },
    interviewQuestions: [
      "Python interpreter म्हणजे काय?",
      "PATH म्हणजे काय आणि तो महत्त्वाचा का?",
      "Python REPL म्हणजे काय?",
    ],
    related: ["python-basics", "python-first-program", "linux-basics"],
    prev: "python-basics",
    next: "python-first-program",
  },

      {
    slug: "python-first-program",
    categoryId: "python",
    title: "पहिला Python Program",
    marathiTitle: "पहिला Python program",
    level: "beginner",
    minutes: 10,
    summary: "Python कोड कुठे लिहायचा आणि कसा चालवायचा ते शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "पहिला Python program म्हणजे काय?",
        content: "Python कोड कुठे लिहायचा आणि कसा चालवायचा ते शिका.\nPython कोड लिहिण्यासाठी दोन गोष्टी हव्या: editor आणि interpreter.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? पहिला Python program चे फायदे आणि महत्त्व",
        content: "✓ रंगीत कोड, त्रुटी लवकर दाखवणे, plugin हे त्याचे फायदे आहेत; पण install आणि set-up थोडा वेळ घेतो.\n✓ इंटरनेट असेल तर सर्वात जलद मार्ग, पण खऱ्या projects साठी device वर file तयार करणं गरजेचं असतं.\n✓ क्रमांकाची नावं (1.py, 2.py) नंतर शोधायला गोंधळ करतात; नावात गोष्ट सांगितली तर मोठ्या projects मध्ये फायदा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "editor आणि interpreter — दोन्ही हवे",
        content: "Python कोड लिहिण्यासाठी दोन गोष्टी हव्या: editor आणि interpreter. editor हा program text फाइल लिहू, बदलू आणि save करू देतो; interpreter हा तो मजकूर वाचून मशीन भाषेत उतरवतो आणि चालवतो. editor लिहायला मदत करतो, interpreter चालवायला — दोन्ही वेगळे आहेत आणि दोन्ही आवश्यक आहेत. एक नसेल तर कोड चालणार नाही.\n\nपत्राच्या उपमेने पाहा: editor म्हणजे कागद आणि पेन, interpreter म्हणजे पोस्टमन. कागद नसेल तर पत्र लिहिता येत नाही; पोस्टमन चुकला तर पत्र पोहोचत नाही. पोस्टमन पत्राची spelling दुरुस्त करत नाही — तो जसं लिहिलं तसं पोहोचवतो. त्याचप्रमाणे interpreter कोड तसाच वाचतो; auto-correct नसतो, म्हणून कोड अचूक लिहावा लागतो.\n\nकोड चालवताना ही साखळी काम करते: तुमचा विचार → editor मध्ये लिहिलेला text → interpreter → संगणक → output. या साखळीतील एक तरी टप्पा चुकला तर output येत नाही; आताच याची कल्पना आली की कुठे बिघडलं ते पटकन कळतं.",
      },
      {
        title: "कोड लिहिण्याचे चार मार्ग",
        content: "कोड लिहिण्यासाठी चार सामान्य मार्ग आहेत.\n\nIDLE — Python बरोबर येणारा साधा editor. Windows वर Python install करताना तो सोबत येतो. उघडल्यावर एका window मध्ये लिहिता येतं, save करता येतं आणि Run दाबल्यावर output दिसतं. सुरुवातीच्या सरावासाठी IDLE पुरेसा आहे.\n\nVS Code — जगभरातील developers वापरत असलेला editor. रंगीत कोड, त्रुटी लवकर दाखवणे, plugin हे त्याचे फायदे आहेत; पण install आणि set-up थोडा वेळ घेतो.\n\nTermux मध्ये nano — सर्वात हलका editor, फक्त terminal. nano hello.py लिहून file उघडते; आत लिहून Ctrl+X → Y → Enter ने save होते आणि बाहेर पडता येतं. Termux वापरणाऱ्यांसाठी हा योग्य पर्याय.\n\nOnline editor (repl.it सारखे) — browser मध्येच कोड लिहून चालवता येतं; install काही लागत नाही. इंटरनेट असेल तर सर्वात जलद मार्ग, पण खऱ्या projects साठी device वर file तयार करणं गरजेचं असतं.\n\nकोणताही editor निवडताना एकच नियम: जो वापरायला सोपा वाटतो तोच योग्य. editor हे साधन आहे — ते निवडलं म्हणजे programming येत नाही, ते वापरून सराव करावा लागतो.",
      },
      {
        title: ".py extension आणि file नावं",
        content: "प्रत्येक Python file च्या नावाचा शेवट .py असतो — hello.py, first.py, my_program.py. हा extension संगणकाला सांगतो की ही Python फाइल आहे. नावात spaces टाकू नका — command मध्ये hello world.py लिहिलं तर ती दोन वेगळ्या फाइलची नावं मानली जातात; spaces ऐवजी underscore वापरा: hello_world.py.\n\nनावं साक्षर आणि अर्थपूर्ण ठेवा — sum.py ऐवजी sum_of_two.py. क्रमांकाची नावं (1.py, 2.py) नंतर शोधायला गोंधळ करतात; नावात गोष्ट सांगितली तर मोठ्या projects मध्ये फायदा.\n\nसवयीने सर्व .py फाइल एकाच folder मध्ये ठेवा (उदा. python_programs). terminal मध्ये python hello.py लिहिलं आणि file सापडली नाही, तर फाइल दुसऱ्या folder मध्ये आहे — cd command ने योग्य folder मध्ये जा. ही सगळ्यात सामान्य चूक आहे.",
      },
      {
        title: "पहिला program — hello.py",
        content: "hello.py file बनवून त्यात दोन print() लिहा. Hello, World! हे परंपरागत पहिलं program आहे — नवीन भाषा शिकताना सर्वप्रथम हेच लिहिलं जातं.\n\nprint हे लहान अक्षरांमध्येच लिहा. Python case sensitive आहे — Print किंवा PRINT हे वेगळे शब्द आहेत आणि त्यांनी error येतो. मजकूर double quotes मध्ये लिहा; मराठी मजकूर चालतो, पण फाइल UTF-8 encoding मध्ये save झालेली असावी.\n\nप्रत्येक print() एक ओळ output करतो. अवतरण फक्त मजकुरासाठी लागतात — print(42) हे अवतरणाशिवायही चालतं, कारण 42 ही संख्या आहे. मजकूर आणि संख्येतला हा फरक पुढच्या धड्यांत वारंवार येईल.\n\nकोड लिहून झाल्यावर चार गोष्टी तपासा: print ची spelling बरोबर आहे का, अवतरण दोन्ही बाजूला आहेत का, कंस बंद झालेत का, commas योग्य जागी आहेत का.",
        code: `print("Hello, World!")
print("माझा पहिला program!")`,
        codeLanguage: "python",
        output: `Hello, World!
माझा पहिला program!`,
      },
      {
        title: "python hello.py — terminal मधून चालवणे",
        content: "terminal मध्ये फाइल जिथे आहे तिथे cd करा, मग ही command लिहा:\n\ncommand मधला पहिला शब्द python म्हणजे interpreter आणि दुसरा hello.py म्हणजे चालवायची फाइल. Enter दाबल्यावर Python फाइल वाचून output screen वर दाखवतो.\n\nTermux आणि काही Linux systems मध्ये python ऐवजी python3 लिहावं लागतं. पहिल्यांदा दोन्ही try करून जो चालतो तोच नेहमी वापरा.\n\nफाइल मध्ये बदल केला की terminal मध्ये पुन्हा हीच command चालवावी लागते — browser सारखं auto-refresh नाही. सवय ठेवा: save करा, चालवा, output बघा, दुरुस्त करा, पुन्हा चालवा.",
        code: `python hello.py`,
        codeLanguage: "shell",
        output: `Hello, World!
माझा पहिला program!`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ File सापडत नाही — योग्य folder मध्ये cd करा; cd शिवाय दुसऱ्या folder मधून command दिला तर 'No such file' येतो.\n✗ .py extension विसरतात — hello ऐवजी hello.py लिहा; .pyx सारखा चुकीचा extension चालत नाही.\n✗ Print किंवा PRINT लिहिलं — Python case sensitive आहे; print लहान अक्षरांनीच.\n✗ अवतरण किंवा कंस बंद केला नाही — जे उघडलं ते शेवटी बंद करा; मजकुरात double quotes हवे असतील तर आत single quotes वापरा.\n✗ Save केलं नाही — editor मध्ये बदल करून (Ctrl+S) शिवाय चालवलं तर जुना कोडच चालतो.\n✗ Spelling चूक — pyton, prrint असे शब्द error देतात; प्रत्येक command अचूक टाइप करा.\n\nप्रत्येक error message सोबत line number असतो — उदा. 'File hello.py, line 2' म्हणजे दुसऱ्या ओळीत चूक आहे. ती ओळ उघडून पहा; बहुतेकदा तिथेच चूक सापडते. कोड चालत नाही तेव्हा चार प्रश्न विचारा: file save झाली का? योग्य folder मध्ये आहे का? command ची spelling बरोबर आहे का? फाइलचं नाव बरोबर आहे का?",
      },
      {
        title: "Interactive: कोड बदलून पहा",
        content: "खालील कोड इथेच Run करून पहा — browser मध्येच output दिसतो, install किंवा terminal लागत नाही.\n\nपहिल्या दोन print() ने मजकूर output होतो; तिसऱ्यात गणित 7 * 6 = 42. print मध्ये मजकूर, संख्या आणि गणित कुठलंही लिहिता येतं.\n\nदोन मजकूर comma ने दिले तर त्यांच्यात default स्पेस येतो — print(\"अ\", \"ब\") म्हणजे 'अ ब'. या कोडमध्ये बदल करा — print(7 * 6) ची जागी print(7 * 7) करा — आणि पुन्हा Run दाबा; output बदलताना दिसेल. error आला तर तो नेमकं कुठे चूक आहे ते सांगतो.",
        code: `print("नमस्कार!")
print("माझं नाव", "मी Python शिकतो")
print(7 * 6)`,
        codeLanguage: "python",
        output: `नमस्कार!
माझं नाव मी Python शिकतो
42`,
      },
      {
        title: "save-चालवण्याची सवय",
        content: "कोड बदलल्यावर Save दाबल्याशिवाय (Ctrl+S) तो बदल चालत नाही. अनेक नवशिके editor मध्ये बदल करतात, पण जुना output पाहून गोंधळतात — कारण save केलं नसतं. म्हणून command देण्यापूर्वी editor मध्ये Ctrl+S दाबा, मगच terminal मध्ये चालवा.\n\nप्रत्येक print() चा output स्वतःच्या नवीन ओळीत येतो; एका ओळीत अनेक गोष्टी छापायच्या असतील तर त्यातला end आणि sep पुढच्या धड्यात (python-print) पाहू. Python मध्ये प्रत्येक सूचना वेगळ्या ओळीत असते — semicolon लिहावी लागत नाही.\n\nमराठी मजकूर output मध्ये विकृत दिसला तर फाइल UTF-8 मध्ये save झाली आहे का ते पहा; बहुतेक editor आपोआप तसं करतात आणि Termux चा nano UTF-8 हाताळतो. दररोज एक तरी छोटा program लिहा — लिहिणे, save, चालवणे, निरीक्षण, सुधारणा हेच चक्र प्रोग्रामरचं दैनंदिन काम आहे.",
      },
    ],
    practiceQuestions: [
      "hello.py ला .py extension का असतो?",
      "python hello.py हा command काय करतो?",
      "कोणते दोन editor वापरून पहिला program लिहू शकतो?",
    ],
    quiz: [
      {
        question: "Python फाइलचा extension कोणता?",
        options: [".txt", ".py", ".pt", ".pl"],
        correct: 1,
      },
      {
        question: "python hello.py हा command काय करतो?",
        options: ["फाइल उघडतो", "फाइल चालवतो", "फाइल मिटवतो", "फाइल बनवतो"],
        correct: 1,
      },
      {
        question: "Terminal मध्ये फाइल चालवण्यासाठी कोणत्या folder मध्ये जावे?",
        options: ["कोणत्याही", "जिथे फाइल आहे तिथे (cd)", "Root", "Desktop"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "hello.py बनवा. त्यात 3 lines print करा: तुमचं नाव, तुमचं गाव, आणि तुमची आवडती गोष्ट. मग python hello.py ने चालवा.",
      starterCode: `print("माझं नाव: ______")\nprint("माझं गाव: ______")\nprint("मला आवडतं: ______")`,
      expectedOutput: "तुमच्या माहितीनुसार तीन lines दिसतील.",
    },
    interviewQuestions: [
      ".py फाईल म्हणजे काय?",
      "python filename.py command काय करतो?",
      "आपण editor मध्ये कोड लिहतो, पण तो चालवणार कसा?",
    ],
    related: ["python-install", "python-print", "python-basics"],
    prev: "python-install",
    next: "python-print",
  },

  {
    slug: "python-print",
    categoryId: "python",
    title: "print() Function",
    marathiTitle: "print() — output दाखवणे",
    level: "beginner",
    minutes: 12,
    summary: "print() function वापरून screen वर मजकूर आणि numbers दाखवायला शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? print() — output दाखवणे चे फायदे आणि महत्त्व",
        content: "✓ account balance काढलं, पण balance दिसलं नाही तर त्याचा उपयोग काय?\n✓ हा फरक पुढे variables शिकताना महत्त्वाचा ठरेल.\n✓ print चा उपयोग करताना कंस बंधनकारक आहे: कंस उघडा, आत काय दाखवायचं ते लिहा, कंस बंद करा.\n✓ अवतरणांमधली संख्या screen वर 10च दाखवते, पण ती मजकूर असते; पुढे गणित करताना हा फरक महत्त्वाचा ठरतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "print() म्हणजे काय?",
        content: "print() ही Python ची सर्वात पहिली function आहे — ती कंसात दिलेली गोष्ट screen वर दाखवते. Program मध्ये कितीही गणना झाली, पण वापरकर्त्याला ती दिसत नाही; print() ती उमटवून दाखवते. उदा. account balance काढलं, पण balance दिसलं नाही तर त्याचा उपयोग काय? तेच print() चं काम आहे.\n\nprint हा शब्द जुन्या छपाईयंत्रांवरून आला आहे — पूर्वी संगणकाचे निकाल कागदावर छापले जायचे, म्हणून print. आज निकाल screen वर येतो, पण नाव तसंच राहिलं. थोडक्यात, print() म्हणजे संगणक जे तुम्हाला दाखवायचं ते स्पष्टपणे उमटवणं.\n\nहे function काही return किंवा जतन करत नाही — print(10) ने फक्त screen वर 10 दिसतं, ती value कुठे store होत नाही. हा फरक पुढे variables शिकताना महत्त्वाचा ठरेल.",
      },
      {
        title: "print() ची रचना",
        content: "print चा उपयोग करताना कंस बंधनकारक आहे: कंस उघडा, आत काय दाखवायचं ते लिहा, कंस बंद करा. कंस विसरलात तर SyntaxError येतो; कारण print हे function आहे आणि प्रत्येक function ला कंस हवाच.\n\nमजकूर नेहमी अवतरणांमध्ये लिहा — print(\"नमस्कार\") असं. संख्या मात्र अवतरणांशिवाय — print(10). अवतरणांमधली संख्या screen वर 10च दाखवते, पण ती मजकूर असते; पुढे गणित करताना हा फरक महत्त्वाचा ठरतो.\n\nसंख्यांबरोबर गणितही print मध्ये लिहिता येतं. print(2 + 3) देतो 5 — Python आधी कंसातला हिशेब करतो, मग निकाल दाखवतो.",
        code: `print("नमस्कार")
print(10)
print(2 + 3)`,
        codeLanguage: "python",
        output: `नमस्कार
10
5`,
      },
      {
        title: "एकाच print मध्ये अनेक values",
        content: "एका print मध्ये अनेक values comma ने दिल्यास त्या एकाच ओळीत येतात आणि त्यांमध्ये default स्पेस येतो. उदा. print(\"वय\", 25) म्हणजे output \"वय 25\". मजकूर अवतरणांत आणि संख्या उघडी — दोघांमध्ये संगणक आपोआप स्पेस टाकतो.\n\ncomma ने जोडलेल्या गोष्टींची संख्या मर्यादा नाही — तीन, चार, पाच values एकत्र देता येतात. print(\"मराठी\", \"Learn\", \"Hub\") म्हणजे \"मराठी Learn Hub\".\n\nसंख्यांमध्ये हजारांसाठी comma वापरू नका — 100000 थेट लिहा. 100, 000 असं लिहिल्यास Python त्याला दोन वेगळ्या values मानतो आणि output मध्ये 100 000 असं दिसतं.",
        code: `print("वय", 25)
print("मराठी", "Learn", "Hub")`,
        codeLanguage: "python",
        output: `वय 25
मराठी Learn Hub`,
      },
      {
        title: "sep आणि end — ओळीवर नियंत्रण",
        content: "comma मधल्या values मध्ये default स्पेस येतो; हा separator बदलण्यासाठी sep= वापरा. print(\"मराठी\", \"Learn\", \"Hub\", sep=\"-\") म्हणजे output \"मराठी-Learn-Hub\". sep मध्ये कुठलाही मजकूर देता येतो — sep=\":\", sep=\", \" वगैरे.\n\nप्रत्येक print() च्या शेवटी default ने नवीन ओळ येते. ती बदलण्यासाठी end= वापरा: print(\"एक\", end=\" \") आणि नंतर print(\"दोन\") दिल्यास \"एक दोन\" एकाच ओळीत दिसतं. end=\"\" दिलं तर स्पेसही लागत नाही.\n\nvalues आधी, मग sep आणि end — हा क्रम बंधनकारक आहे. दोन्ही एकत्र देता येतात. default मूल्यं म्हणजे space (sep) आणि नवीन ओळ (end) ही देखील दिलेली मूल्यंच आहेत — ती बदलण्याचा हक्क तुमचा.",
        code: `print("साखर", "तेल", "चहा", sep="-", end="!")`,
        codeLanguage: "python",
        output: `साखर-तेल-चहा!`,
      },
      {
        title: "वास्तविक उदाहरण — दुकानाचं बिल",
        content: "Program चा उद्देश निकाल दाखवणं असतो. कॅल्क्युलेटर विचारात घ्या — निकाल आधी कुठेतरी ठेवला जातो, मग दाखवला जातो. खाली बिलाची रक्कम आणि टीप यांची बेरीज एकूण नावाच्या variable मध्ये केली आहे, मग प्रत्येक रक्कम print ने दाखवली आहे.\n\nढळक नावे — बिल:, टीप:, एकूण: — output वाचणाऱ्याला कोणती रक्कम कशाची ते लगेच कळतं. मजकूर आणि संख्या अशी comma ने जोडल्यावर output नीट रांगेत येतो.\n\nहाच नमुना प्रत्येक program ला लागतो: data घ्या → गणना करा → output दाखवा. गणना केलेली एखादी गोष्ट print() ने दाखवली नाही तर वापरकर्त्याला तिचा उपयोगच नसतो.",
        code: `बिल = 250
टीप = 50
एकूण = बिल + टीप
print("बिल:", बिल)
print("टीप:", टीप)
print("एकूण:", एकूण)`,
        codeLanguage: "python",
        output: `बिल: 250
टीप: 50
एकूण: 300`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ print(नमस्कार) — अवतरण विसरलात. संगणक \"नमस्कार\" नावाचा variable शोधतो; सापडत नाही म्हणून NameError येतो. मजकूर नेहमी अवतरणांत.\n\n✗ print(\"नमस्कार') — एक double आणि एक single अवतरण. ज्या प्रकाराने अवतरण उघडलं त्या प्रकारानेच बंद करा.\n\n✗ print \"नमस्कार\" — कंस नाहीत; SyntaxError. print च्या लगेच नंतर उघडणारा आणि शेवटी बंद होणारा कंस नक्की करा.\n\n✗ print(\"10\") — ही संख्या नाही, मजकूर आहे. screen वर 10 असाच दिसतो, पण पुढे गणित करता येणार नाही.\n\nError वाचायला शिका: NameError म्हणजे अवतरण किंवा नाव चुकलं; SyntaxError म्हणजे कंस, अवतरण किंवा रचनेत त्रुटी. Python तुम्हाला नेमक्या ओळीत जातो — error हा शिकण्याचाच भाग आहे.",
      },
      {
        title: "f-string — मजकुरात value थेट बसवणे",
        content: "आता मजकूर आणि value जोडण्यासाठी comma वापरत आलो. पण अनेक values असतील तर ही पद्धत त्रासदायक होते. त्याचा सोपा मार्ग म्हणजे f-string — मजकुराच्या ओळीत value थेट बसवणं.\n\nf-string म्हणजे अवतरणाआधी f अक्षर असलेला मजकूर; आत चौकोनी कंसात variable नाव लिहिलं तर Python print करताना तिथे ती value बसवतो. उदा. print(f\"नमस्कार, {नाव}!\") मध्ये नाव च्या जागी त्या variable ची value दिसते.\n\nचौकोनी कंसात संख्या, variable किंवा गणित कुठलंही उपयोगात आणता येतं. उदा. print(f\"बेरीज: {10 + 5}\") म्हणजे output \"बेरीज: 15\". हीच पद्धत पुढील धड्यांत मोठ्या programs साठी रोज वापरली जाणार आहे.",
        code: `नाव = "सायली"
वय = 20
print(f"नमस्कार, {नाव}!")
print(f"मी {वय} वर्षांची आहे")`,
        codeLanguage: "python",
        output: `नमस्कार, सायली!
मी 20 वर्षांची आहे`,
      },
      {
        title: "Mini Project — किराणा बिल",
        content: "तीन वस्तूंची किंमत variable मध्ये ठेवा, बेरीज करा आणि print ने दाखवा. खालील example करून पहा:\n\nसाखर, तेल, चहा यांच्या किमती वस्तु1, वस्तु2, वस्तु3 मध्ये आहेत; बेरीज एकूण मध्ये. प्रत्येक वस्तूचं नाव आणि रक्कम print ने दाखवली आहे.\n\nहा कोड स्वतः बदलून पहा: किंमती बदला, चौथी वस्तू घाला, sep किंवा end वापरून रांग दुरुस्त करा. थोडक्यात print(), variables आणि गणना — आत्तापर्यंतचे सारे घटक एकत्र आले. या सरावातून मिळालेला output जतन करा; तोच तुमचा पहिला छोटा project.",
        code: `वस्तु1 = 120
वस्तु2 = 45
वस्तु3 = 90
एकूण = वस्तु1 + वस्तु2 + वस्तु3
print("साखर :", वस्तु1)
print("तेल   :", वस्तु2)
print("चहा   :", वस्तु3)
print("----- एकूण:", एकूण)`,
        codeLanguage: "python",
        output: `साखर : 120
तेल   : 45
चहा   : 90
----- एकूण: 255`,
      },
    ],
    practiceQuestions: [
      "print(\"नमस्कार\") चा output काय?",
      "print(50) आणि print(\"50\") मध्ये काय फरक?",
      "sep=\"-\" काय करतं?",
      "एका print मध्ये नाव आणि वय कसे दाखवाल?",
    ],
    quiz: [
      {
        question: "print(\"अ\", \"ब\") चा output काय?",
        options: ["अब", "अ ब", "अब्", "error"],
        correct: 1,
      },
      {
        question: "print(\"10\") मध्ये 10 काय आहे?",
        options: ["number", "string (text)", "variable", "error"],
        correct: 1,
      },
      {
        question: "end=\" \" म्हणजे काय?",
        options: ["नवीन line", "space ने शेवट", "शेवटी पूर्णविराम", "काही नाही"],
        correct: 1,
      },
      {
        question: "f\"नमस्कार, {नाव}!\" मध्ये f काय करतं?",
        options: ["काही नाही", "variable ला जोडते", "error देते", "तिथे फक्त मजकूर"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एका print मध्ये तुमचं नाव, गाव आणि आवडता color — एका वाक्यात दाखवा. मग दुसऱ्या print मध्ये 100 आणि 3 यांची भागाकार (/) दाखवा.",
      starterCode: `print("माझं नाव", "गाव", "आवडता रंग")
print(100 / 3)`,
      expectedOutput: "माझं नाव गाव आवडता रंग\n33.33333333333333",
    },
    interviewQuestions: [
      "print() मध्ये text आणि number कसे वेगळे रेंडर होतात?",
      "sep आणि end parameters काय करतात?",
      "f-string म्हणजे काय?",
    ],
    related: ["python-basics", "python-variables", "python-comments"],
    prev: "python-first-program",
    next: "python-comments",
  },

  {
    slug: "python-comments",
    categoryId: "python",
    title: "Comments",
    marathiTitle: "Comments — कोडमधील नोट्स",
    level: "beginner",
    minutes: 10,
    summary: "# चिन्हाने कोडमध्ये नोट्स लिहा — संगणक त्याकडे दुर्लक्ष करतो.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Comments — कोडमधील नोट्स चे फायदे आणि महत्त्व",
        content: "✓ त्यामुळे भीती न बाळगता गरजेप्रमाणे comment लिहा.\n✓ आणि Python चा अधिकृत style guide (PEP 8) फक्त # ची comment म्हणून शिफारस करतो; तीन अवतरणांचा block खरं तर docstring असतो — function च्या वर्णनासाठी, पुढील धड्यांत तो उपयोगात येईल.\n✓ हाच comment चा सर्वात मोठा फायदा आहे.\n✓ खास उपयोग comment-first नावाचा आहे: आधी program काय करणार ते comment मध्ये टप्पे लिहा — उदा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "comment म्हणजे काय?",
        content: "comment म्हणजे कोडमधली खास नोट जी फक्त माणसांसाठी असते. संगणक ती चालवत नाही — तिच्याकडे पूर्ण दुर्लक्ष करतो. वहीच्या कडेला टाकलेली टीप समजा: ती परीक्षेत उत्तर देत नाही, पण उत्तर लिहायला मदत करते. तसंच comment कोड समजायला मदत करतं.\n\nPython मध्ये comment साठी # चिन्ह वापरतात. ते जिथे दिसतं तिथपासून त्या ओळीतला उरलेला शेवटपर्यंतचा मजकूर संगणक दुर्लक्ष करतो. comment कोडमध्ये कुठेही — सुरुवातीला, ओळीच्या शेवटी — लिहिता येतो; output मध्ये तो कधीही दिसत नाही.\n\ncomment मुळे कोडचा निकाल बदलत नाही — कोड जो output देत असेल, comment जोडल्यावरही तोच output देईल. त्यामुळे भीती न बाळगता गरजेप्रमाणे comment लिहा. भाषेवर बंधन नाही — मराठी, इंग्रजी, हिंदी कुठल्यातही लिहिता येतं.",
      },
      {
        title: "# चिन्हाचे नियम",
        content: "# हे चिन्ह ओळीच्या सुरुवातीला असेल तर ती संपूर्ण ओळ comment बनते. कोडच्या शेवटी, त्याच ओळीवर असेल तर # नंतरचा भागच comment असतो; statement तशीच चालते. उदा. x = 10  # एकूण विद्यार्थी — यात x = 10 चालतं, बाकी टीप.\n\n# ओळीच्या मध्यभागी, statement च्या आत घालू नका. x = # मध्ये 5 असं लिहिल्यास # नंतरचं सगळं दुर्लक्ष होतं आणि x = अशी अर्धवट ओळ उरते — ती चालणार नाही. म्हणून # नेहमी statement च्या बाहेरच्या भागात वापरा.\n\nPython च्या शैलीची शिफारस (PEP 8) म्हणते — # नंतर एक space ठेवा: # हा comment. ही सवय वाचायला सोपी करते. आणि comment मध्ये देवनागरी असो वा रोमन — संगणकाला त्याच्यात भेदभाव नसतो; कुठलाही मजकूर दुर्लक्ष होतो.",
        code: `# ही file काय करते ते सांगणारी ओळ
x = 10  # एकूण विद्यार्थी
print(x)`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "multi-line comment — # ने किंवा तीन अवतरणांनी",
        content: "दोन, तीन, पाच ओळींचं स्पष्टीकरण हवं असेल तर दोन रीती वापरल्या जातात. पहिली — प्रत्येक ओळ # ने सुरू करा: साधी आणि स्पष्ट रीत, कोणतीही परंपरा न बदलता.\n\nदुसरी — तीन अवतरणांचा block: ''' हे अनेक ओळींचं स्पष्टीकरण ''' असं. हा block खरोखर string असतो; तो variable ला न दिल्यास output मध्ये काहीही दिसत नाही, त्यामुळे तो comment सारखाच वागतो.\n\nसावधान — तो block print(\"\"\"...\"\"\") मध्ये वापरलात तर तो प्रत्यक्ष output होतो. आणि Python चा अधिकृत style guide (PEP 8) फक्त # ची comment म्हणून शिफारस करतो; तीन अवतरणांचा block खरं तर docstring असतो — function च्या वर्णनासाठी, पुढील धड्यांत तो उपयोगात येईल. दोन-तीन ओळींसाठी # सुरक्षित पर्याय आहे.",
        code: `# हा एका ओळीचा comment
# हा दुसऱ्या ओळीचा comment
print("काम चालू!")`,
        codeLanguage: "python",
        output: `काम चालू!`,
      },
      {
        title: "comments कुठे उपयोगी पडतात?",
        content: "मोठ्या project मध्ये शेकडो files आणि अनेक developers असतात. एकाचा कोड दुसऱ्याला समजला पाहिजे. तिथे comment मुळे कोड न वाचता प्रत्येक ओळीचा हेतू लगेच कळतो. code review मध्ये comment नसला तर सहकारी प्रत्येक ओळ कशासाठी आहे असं विचारत बसतो.\n\nस्वतःचा जुना कोड उघडला तरी हीच गोष्ट — तीन महिन्यांनी आपल्या ओळी आपल्यालाच विसरलेल्या असतात. तेव्हा comment वाचून संदर्भ परत मिळतो. हाच comment चा सर्वात मोठा फायदा आहे.\n\nखास उपयोग comment-first नावाचा आहे: आधी program काय करणार ते comment मध्ये टप्पे लिहा — उदा. १. नाव घ्या २. स्वागत द्या ३. output — मग प्रत्येक टप्प्याखाली कोड लिहा. असा कोड आखीव राहतो आणि कुठलाच टप्पा चुकत नाही.",
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ // किंवा /* */ ची सवय — या JavaScript, C, Java च्या रीती आहेत. Python मध्ये // म्हणजे भागाकाराचा operator; comment फक्त # ने होतो.\n\n✗ comment मध्ये जुना कोड जपून ठेवणं — वाचणाऱ्याला गोंधळतो. जुना कोड काढून टाका; त्याला comment मध्ये पुन्हा जिवंत करू नका.\n\n✗ प्रत्येक ओळीवर comment — उलट वाचण्याचा रस घालतो. फक्त गोंधळ शक्य तिथे, महत्त्वाच्या ठिकाणीच comment ठेवा.\n\n✗ comment मध्ये password किंवा खाजगी माहिती — comment फाईलसह प्रत्येकाला दिसतो; तिथे अशी गोष्ट शेवटी लिहू नका.\n\n✗ comment हे output समजणं — comment screen वर कधीच दिसत नाही; तो दाखवायचा असेल तर print() हवा.\n\n✗ अर्थहीन comment — \"ही ओळ लिहिली\" यात नवी माहिती नाही. comment नेहमी हेतू सांगणारा असावा.",
      },
      {
        title: "चांगला comment कसा लिहायचा?",
        content: "चांगला comment कृती सांगत नाही, हेतू सांगतो. उदा. \"x ला value दिली\" हा कुचकामी comment आहे. त्याऐवजी \"x मध्ये वापरकर्त्याचं वय आहे\" असं लिहा. कोड काय करतो ते कोड स्वतः सांगतो; का करतो — कारण — हे फक्त comment सांगतं.\n\nकोड बदलला तर संबंधित comment पण बदला. कोड बदलून जुना comment तसाच ठेवला तर तो खोटी माहिती देऊ लागतो — तो वाचकाची दिशाभूल करतो. कोड आणि comment यांची जोडी नेहमी सुसंगत ठेवा.\n\nसवयीचा क्रम: आधी कोड लिहा, तो चालवून बघा, मग त्याच्या महत्त्वाच्या ठिकाणांचे comment जोडा. प्रत्येक function किंवा file च्या सुरुवातीला एक-दोन ओळीचा comment या कामाचं वर्णन देतो.",
      },
      {
        title: "Interactive: comment जोडून output तपासा",
        content: "खालील कोड इथेच चालवा. त्यात # print(\"लाइन 2\") ही ओळ comment ने बंद केली आहे — म्हणून output मध्ये फक्त \"लाइन 1\" आणि \"लाइन 3\" दिसतात.\n\nआता त्या ओळीतला # काढून पहा — output मध्ये \"लाइन 2\" पण येऊ लागतो. प्रत्येक print च्या आधी # टाकून पहा; तो print नाहीसा होतो. बदल करून पुन्हा Run दाबा.\n\nहा प्रयोग सिद्ध करतो: comment कधीच output बदलत नाही; तो फक्त एखादी ओळ कामातून बाहेर ठेवतो. debugging मध्ये हीच रीत वापरतात — संशयाची ओळ काढून बघितली जाते.",
        code: `print("लाइन 1")
# print("लाइन 2")
print("लाइन 3")`,
        codeLanguage: "python",
        output: `लाइन 1
लाइन 3`,
      },
      {
        title: "Mini Project — दिवसाचं शेड्यूल",
        content: "तुमच्या दिवसाचं शेड्यूल Python कोडमधून लिहा. प्रत्येक क्रियेच्या आधी comment टाका आणि खाली print() ने ती क्रिया दाखवा.\n\nखालील example पहा — comment मध्ये भागाचं नाव, print मध्ये त्या भागाची क्रिया. output मध्ये फक्त print मधल्या ओळी दिसतात; comment कुठेही दिसत नाहीत.\n\nशेड्यूल आपलं बनवा — उठणं, नाश्ता, शाळा, अभ्यास, खेळ, संध्याकाळचे काम असे टप्पे तुमच्या आवडीनुसार लिहा आणि प्रत्येकावर comment ठेवा. या सरावात comment आणि कोडची जोडणी प्रत्यक्ष output मध्ये निघते.",
        code: `# सकाळची तयारी
print("उठणे")
print("नाश्ता")
# दिवसाचा अभ्यास
print("शाळा")
print("अभ्यास")
print("खेळ")`,
        codeLanguage: "python",
        output: `उठणे
नाश्ता
शाळा
अभ्यास
खेळ`,
      },
    ],
    practiceQuestions: [
      "Python comment साठी कोणतं चिन्ह?",
      "comment संगणक चालवतो का?",
      "संपूर्ण line comment मध्ये कशी करता?",
      "पंक्तीएवढा मध्ये # नंतरचं काय होतं?",
    ],
    quiz: [
      {
        question: "Python comment साठी कोणतं चिन्ह?",
        options: ["//", "\\", "#", "<!-- -->"],
        correct: 2,
      },
      {
        question: "comment चा कोडवर काय प्रभाव?",
        options: ["धीमा करतो", "वेगवान करतो", "काही नाही", "error"],
        correct: 2,
      },
      {
        question: "कुठे comment लिहितात?",
        options: ["फक्त सुरुवातीला", "कोणत्याही line वर", "फक्त शेवटी", "फक्त brackets मध्ये"],
        correct: 1,
      },
      {
        question: "multi-line comment लिहिण्याची एक रीत?",
        options: ["//", "त्येक ओळ # ने", "/* */", "नाही येता"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "कोड लिहा ज्यात: पहिल्या line वर तुमचं नाव comment मध्ये, मग print(\"Hello\"), आणि शेवटच्या line वर 2 ने 5 गुणाकार दाखवा.",
      starterCode: `# माझं नाव
print("Hello")
print(5 * 2)`,
      expectedOutput: "Hello\n10",
    },
    interviewQuestions: [
      "comments का लिहतात?",
      "Python चा comment symbol कोणता आणि JavaScript चा कोणता?",
      "multi-line comment Python मध्ये कसा लिहावा?",
    ],
    related: ["python-print", "python-variables", "python-basics"],
    prev: "python-print",
    next: "python-variables",
  },

  {
    slug: "python-variables",
    categoryId: "python",
    project: "age-calculator",
    title: "Python Variables",
    marathiTitle: "Variables — मूल्य साठवणे",
    level: "beginner",
    minutes: 14,
    summary: "Variable म्हणजे डेटा साठवणारा नावाचा डब्बा. Python मध्ये declaration खूप सोपी आहे.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Variables — मूल्य साठवणे चे फायदे आणि महत्त्व",
        content: "✓ सर्वात महत्त्वाची ओळ: score = score + 5.\n✓ याचा उपयोग values अदलाबदल करणे: a, b = b, a लिहिल्यास दोघांची values एकाच ओळीत बदलतात; temporary variable लागत नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Variable म्हणजे काय?",
        content: "Variable म्हणजे value साठवण्यासाठी दिलेलं नाव — त्या नावाने value ठेवता येते, शोधता येते आणि वापरता येते. Python मध्ये तयार करणं फक्त name = value इतकं सोपं आहे.\n\nउदा. नाव = \"सायली\" — 'नाव' या variable मध्ये \"सायली\" साठवली. अवतरणांत असलेली value string असते; संख्या आणि decimal अवतरणांशिवाय लिहावीत: वय = 20, उंची = 5.7.\n\nPython मध्ये 'मी variable बनवतो' असं आधी सांगावं लागत नाही आणि type पण सांगावी लागत नाही — \"सायली\" मजकूर आहे, 20 संख्या आहे, 5.7 decimal आहे हे Python value वरून स्वतः ओळखतो. याला dynamic typing म्हणतात.\n\nvalue मजकूर, संख्या, खरं/खोटं आणि पुढे list, dictionary अशी काहीही असू शकते. तीन variables चे हे उदाहरण पहा:\n\nनाव = \"सायली\"\nवय = 20\nउंची = 5.7\nprint(नाव)\nprint(वय)\nprint(उंची)",
        code: `नाव = "सायली"
वय = 20
उंची = 5.7
print(नाव)
print(वय)
print(उंची)`,
        codeLanguage: "python",
        output: `सायली
20
5.7`,
      },
      {
        title: "value बदलणे (reassignment)",
        content: "Variable ची value कधीही बदलता येते. त्याच नावाला नवीन value दिली की जुनी निघून जाते — शेवटची दिलेली valueच उरते. याला reassignment म्हणतात.\n\nscore = 0 ने सुरुवात; नंतर score = 10 लिहिलं. आता 'score' फक्त 10 ठेवतो, 0 नव्हे.\n\nसर्वात महत्त्वाची ओळ: score = score + 5. येथे = ही गणिताची समीकरणं नव्हे; ती ठेवण्याची क्रिया आहे. Python प्रथम उजवी बाजू मोजतो — score ची सध्याची value (10) घेऊन त्यात 5 जोडतो (15) — आणि निकाल त्या नावात ठेवतो. अशा ओळी counter वाढवणे, खेळातील गुण जोडणे यासाठी सर्वत्र येतात.\n\nscore = 0\nprint(\"सुरुवात:\", score)\nscore = 10\nprint(\"माझा score:\", score)\nscore = score + 5\nprint(\"गुण बदलला:\", score)",
        code: `score = 0
print("सुरुवात:", score)
score = 10
print("माझा score:", score)
score = score + 5
print("गुण बदलला:", score)`,
        codeLanguage: "python",
        output: `सुरुवात: 0
माझा score: 10
गुण बदलला: 15`,
      },
      {
        title: "एकाच ओळीत अनेक variables",
        content: "एका ओळीत अनेक variables तयार करता येतात. नावे आणि values याद्या म्हणून दिली जातात; पहिल्या नावाला पहिली value, दुसऱ्या नावाला दुसरी मिळते.\n\na, b, c = 10, 20, 30 म्हणजे a = 10, b = 20, c = 30 — तीन variables एकाच ओळीत.\n\nनावे आणि values यांची संख्या तेवढीच हवी. a, b = 1, 2, 3 असं लिहिलं तर दोन नावे आणि तीन values — Python error देतो.\n\nयाचा उपयोग values अदलाबदल करणे: a, b = b, a लिहिल्यास दोघांची values एकाच ओळीत बदलतात; temporary variable लागत नाही.\n\na, b, c = 10, 20, 30\nprint(a)\nprint(b)\nprint(c)\nprint(\"बेरीज =\", a + b + c)",
        code: `a, b, c = 10, 20, 30
print(a)
print(b)
print(c)
print("बेरीज =", a + b + c)`,
        codeLanguage: "python",
        output: `10
20
30
बेरीज = 60`,
      },
      {
        title: "print मधून value दाखवणे",
        content: "print() मध्ये variable नाव लिहिलं की Python त्या नावाची value आणून छापतो. मजकूर आणि value सोबत दिले तर सुटे वाक्य तयार होते — output मध्ये variable ची actual value दिसते.\n\nखालील उदाहरण नाव, वय, गाव या तीन variables मधून एखाद्या व्यक्तीची ओळख कशी छापायची ते दाखवते.\n\nनाव = \"राहुल\"\nवय = 22\nगाव = \"कोल्हापूर\"\nprint(\"नमस्कार, मी\", नाव)\nprint(\"मी\", वय, \"वर्षांचा आहे\")\nprint(\"मी\", गाव, \"इथे राहतो\")",
        code: `नाव = "राहुल"
वय = 22
गाव = "कोल्हापूर"
print("नमस्कार, मी", नाव)
print("मी", वय, "वर्षांचा आहे")
print("मी", गाव, "इथे राहतो")`,
        codeLanguage: "python",
        output: `नमस्कार, मी राहुल
मी 22 वर्षांचा आहे
मी कोल्हापूर इथे राहतो`,
      },
      {
        title: "नावाचे नियम",
        content: "Variable चं नाव त्या value ची ओळख असते. x, zz सारखी अस्पष्ट नावे टाळा; total_score, गाव अशी नावे कोड वाचणाऱ्याला लगेच समजतात.\n\nPython case-sensitive आहे — नाव, नाव, नाव मोठे/लहान अक्षरांनी वेगळी होतात. एकदा लिहिलेलं नाव पुढे तसंच वापरा.\n\nमराठी आणि इंग्रजी दोन्ही नावे चालतात; एका file मध्ये एकच शैली ठेवा. वय, गाव तसंच name, age — दोन्ही बरोबर, मिसळणं टाळा.\n\nएकापेक्षा जास्त शब्दांचं नाव हवं असेल तर स्पेस किंवा हायफन नको; underscore वापरा: total_score. संख्येने नाव सुरू होऊ नये — age1, वय2 चालतं, पण 1age वर्ज्य.",
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "\"नाव\" = \"सायली\" — नाव अवतरणांत लिहिलं तर variable नसून string बनतं. नाव अवतरणांशिवाय लिहा.\n\nनाव डबा — नावात space असेल तर Python दोन वेगळे ठेव मानतो. जागा underscore ने भरा: नाव_डबा.\n\n1नाव, py-not — संख्येने सुरुवात आणि हायफन वर्ज्य; संख्या नावाच्या पुढे येऊ शकते (वय2), हायफन ही वजाबाकीचं चिन्ह आहे.\n\nif, for, while — हे Python चे राखीव शब्द (keyword) variable name होऊ शकत नाहीत.\n\nname, Name, NAME — ही तीन वेगळी variables; केसची सवय एकदाच ठरवा.\n\na, b = 1, 2, 3 — नावे आणि values ची संख्या जुळत नाही; error येतो. नेहमी जुळवा.\n\nप्रत्येक चुकीवर एकदा कोड लिहून पहा — काय error दिसतो ते अनुभवा.",
      },
      {
        title: "Mini Project — माझं प्रोफाइल",
        content: "आता सर्व संकल्पना एकत्र वापरा: तुमची माहिती variables मध्ये ठेवा आणि print करा.\n\nयेथे f-string वापरली आहे — string अगोदर f लिहून आत {नाव} अशा variable नावे घातली; Python त्या जागी value टाकून वाक्य बनवतो.\n\nखाली नाव, वय, गाव, विषय अशी चार variables आणि दोन f-string वाक्ये आहेत. तुमची माहिती घालून हेच कोड स्वतःचं प्रोफाइल बनवण्यासाठी बदला.\n\nनाव = \"अनिकेत\"\nवय = 19\nगाव = \"अमरावती\"\nविषय = \"Python\"\nprint(f\"नमस्कार! माझं नाव {नाव}.\")\nprint(f\"मी {वय} वर्षांचा, {गाव}चा.\")",
        code: `नाव = "अनिकेत"
वय = 19
गाव = "अमरावती"
विषय = "Python"
print(f"नमस्कार! माझं नाव {नाव}.")
print(f"मी {वय} वर्षांचा, {गाव}चा.")`,
        codeLanguage: "python",
        output: `नमस्कार! माझं नाव अनिकेत.
मी 19 वर्षांचा, अमरावतीचा.`,
      },
      {
        title: "पुढील पायरी",
        content: "आता तपासायच्या पाच गोष्टी: = नावात value ठेवते; नावाला नवीन value दिली की जुनी जाते; एका ओळीत अनेक variables चालतात; print मध्ये variable ची actual value दिसते; नाव अर्थपूर्ण, case-sensitive आणि space किंवा संख्येने सुरुवात वर्ज्य.\n\nसराव — तुमची ओळख चार variables मध्ये ठेवून print करा; score च्या उदाहरणात गुण 0 वरून 20 पर्यंत चार पायऱ्यांत वाढवा आणि प्रत्येक पायरी print करा.\n\nपुढला धडा python-naming-rules — नावाचे नियम सविस्तर समजून घेऊ.",
      },
    ],
    practiceQuestions: [
      "variable कशी तयार करता?",
      "a, b, c = 1, 2, 3 मध्ये काय होतं?",
      "Python मध्ये type declaration लागते का?",
      "खाली output काय?  x = 5; x = x + 2; print(x)",
    ],
    quiz: [
      {
        question: "variable मध्ये value ठेवण्यासाठी कोणतं चिन्ह?",
        options: ["==", "=", "->", ":"],
        correct: 1,
      },
      {
        question: "कोणतं variable name वैध आहे?",
        options: ["2name", "my-name", "my_name", "my name"],
        correct: 2,
      },
      {
        question: "Python मध्ये type declaration लागते का?",
        options: ["होय, नेहमी", "नाही, Python स्वतः ओळखतो", "फक्त numbers साठी", "फक्त strings साठी"],
        correct: 1,
      },
      {
        question: "x = 5; x = x + 2; print(x) चा output?",
        options: ["5", "7", "52", "error"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "तीन variables बनवा: वेळ (घंटा), अंतर (km), गती (speed = अंतर / वेळ). मग सर्व print करा.",
      starterCode: `वेळ = 2
अंतर = 120
गती = अंतर / वेळ
print("वेळ:", वेळ)
print("अंतर:", अंतर)
print("गती:", गती)`,
      expectedOutput: "वेळ: 2\nअंतर: 120\nगती: 60.0",
    },
    interviewQuestions: [
      "Variable म्हणजे काय?",
      "=' आणि '==' मध्ये फरक?",
      "Dynamic typing म्हणजे काय?",
    ],
    related: ["python-naming-rules", "python-data-types", "python-print"],
    prev: "python-comments",
    next: "python-naming-rules",
  },

  {
    slug: "python-naming-rules",
    categoryId: "python",
    title: "Variable Naming Rules",
    marathiTitle: "Variable naming rules",
    level: "beginner",
    minutes: 9,
    summary: "Python variable ला योग्य नाव कसे द्यायचे ते शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Variable naming rules चे फायदे आणि महत्त्व",
        content: "\"Variable naming rules\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Valid name चे नियम",
        content: "Python variable नाव लिहिताना पाच कडक नियम आहेत — यांपैकी एकही मोडलं तर Python error देतो.\n1. नावात फक्त अक्षर (a-z, A-Z), अंक (0-9) आणि underscore (_) येऊ शकतात; दुसरे कुठलेही चिन्ह नको.\n2. नाव अंकाने सुरू होऊ नये — 2name वर्ज्य; पण name2, name_2 चालतं.\n3. नावात space नको — Python त्याला दोन वेगळे शब्द मानतो. अनेक शब्द असतील तर underscore जोडा: total_score.\n4. Python चे राखीव शब्द (keyword) नकोत — if, for, while, def, else, import, return ही नावे राखीव आहेत.\n5. case-sensitive — Name, name, NAME ही तीन वेगळी variables.\n\nखाली योग्य नावांचे उदाहरण: नाव (मराठी), age1 (अंक शेवटी), total_score (अधिक शब्द), _private (underscore ने सुरुवात — खासगी variable ची प्रथा).\nनाव = \"विलास\"\nage1 = 20\ntotal_score = 95\n_private = 10\nprint(नाव, age1, total_score, _private)",
        code: `नाव = "विलास"
age1 = 20
total_score = 95
_private = 10
print(नाव, age1, total_score, _private)`,
        codeLanguage: "python",
        output: `विलास 20 95 10`,
      },
      {
        title: "मराठी नावे",
        content: "Python Unicode लिपीतील नावे स्वीकारतो, म्हणून देवनागरीत variable name लिहिता येते — नाव, वय, गाव असं.\n\nपण मराठी नावावरही नियम तेच लागू: space नको, अंकाने सुरुवात नको, राखीव शब्द नको. एकाच spelling ची सातत्याने पुनरावृत्ती करा — ऱ्हस्व-दीर्घ अक्षरांचा (न/ण, ळ) भेद Python ओळखतो.\n\nखाली तीन मराठी variables print मध्ये एकत्र दाखवले आहेत.\n\nनाव = \"सायली\"\nवय = 20\nगाव = \"पुणे\"\nprint(नाव, \"-\", वय, \"-\", गाव)",
        code: `नाव = "सायली"
वय = 20
गाव = "पुणे"
print(नाव, "-", वय, "-", गाव)`,
        codeLanguage: "python",
        output: `सायली - 20 - पुणे`,
      },
      {
        title: "चुकीची नावे — error आणि उपाय",
        content: "तीन सामान्य चुका आणि त्यांचे उपाय:\n\nif = 5 — if हा राखीव शब्द आहे; Python SyntaxError देतो. नाव बदला: if_marks = 5.\n\n2name = 5 — नाव अंकाने सुरू होतं; अजूनही SyntaxError. अंक शेवटी हलवा: name2 = 5.\n\nmy name = 5 — नावात space आहे; दोन शब्द मानले जातात. underscore वापरा: my_name = 5.\n\nदुरुस्त केलेली तिन्ही variable print करतो:\n\nif_marks = 5\nname2 = 5\nmy_name = 5\nprint(if_marks, name2, my_name)",
        code: `if_marks = 5
name2 = 5
my_name = 5
print(if_marks, name2, my_name)`,
        codeLanguage: "python",
        output: `5 5 5`,
      },
      {
        title: "case-sensitive म्हणजे काय?",
        content: "Python मोठी आणि लहान अक्षरे वेगळी ओळखतो. म्हणून Name, name, NAME ही तीन वेगळी variables — एकात बदल केला तर बाकी दोन अप्रभावित राहतात.\n\nहे दाखवणारं उदाहरण:\n\nName = \"विलास\"\nname = \"राहुल\"\nprint(Name)\nprint(name)",
        code: `Name = "विलास"
name = "राहुल"
print(Name)
print(name)`,
        codeLanguage: "python",
        output: `विलास
राहुल`,
      },
      {
        title: "प्रथा (Convention)",
        content: "नियम कडक आहेत; प्रथा (convention) ही शिफारस — न पाळल्यास error येत नाही, पण कोड वाचायला कठीण होतो.\n\nतीन प्रचलित प्रथा:\n• variable नावे लहान अक्षरांत — name, age, score\n• अनेक शब्दांमध्ये underscore — first_name, total_marks (याला snake_case म्हणतात)\n• स्थिर value साठी संपूर्ण मोठी अक्षरे — PI, MAX_LIMIT\n\nकाही भाषांमध्ये camelCase (firstName) चालतं, पण Python समुदाय snake_case पसंत करतो. एकाच style ला संपूर्ण file मध्ये राखा — अर्ध्यावर बदलू नका.\n\nfirst_name = \"विलास\"\nlast_name = \"पाटील\"\ntotal_marks = 89\nprint(first_name, last_name, \"-\", total_marks)",
        code: `first_name = "विलास"
last_name = "पाटील"
total_marks = 89
print(first_name, last_name, "-", total_marks)`,
        codeLanguage: "python",
        output: `विलास पाटील - 89`,
      },
      {
        title: "हे लक्षात ठेवा",
        content: "नाव अर्थपूर्ण असू द्या — age च्या जागी x लिहिणं नियमात बसतं, पण कोड वाचणाऱ्याला data कळत नाही.\n\nदोन प्रकारांतला फरक लक्षात ठेवा: नियम मोडल्यास error येतो; प्रथा न पाळल्यास कोड चालतो पण वाचणं कठीण होतं.\n\nआणखी तीन टिपा: नाव लहान आणि स्पष्ट ठेवा; एका file मध्ये एकच भाषा ठेवा; नाव बदलायचं असेल तर तो बदल प्रत्येक ठिकाणी करावा लागतो — म्हणून पहिलाच निर्णय अचूक घ्या.",
      },
      {
        title: "Interactive: नावे बदलून पहा",
        content: "खाली मिश्र नावांचे उदाहरण — अंकाने संपणारी, underscore असणारी आणि मराठी नाव एकत्र. सर्व valid आहेत.\n\nकोड बदलून पहा: my_var3 जोडा, कुत्रा सोबत मांजर आणा. आणि चुकीची नावे (2var, my var, if) लिहून error कसा दिसतो ते अनुभवा.\n\nmy_var = 42\nmy_var2 = 42\nकुत्रा = \"टॉमी\"\nprint(my_var, my_var2, कुत्रा)",
        code: `my_var = 42
my_var2 = 42
कुत्रा = "टॉमी"
print(my_var, my_var2, कुत्रा)`,
        codeLanguage: "python",
        output: `42 42 टॉमी`,
      },
      {
        title: "Mini Project — माझा परिचय",
        content: "शिकलेले सर्व नियम वापरून तुमचा परिचय चार-पाच variables मध्ये ठेवा — मराठी किंवा इंग्रजी, पण नियमात.\n\nउदाहरण: first_name, last_name, school_name, total_subjects अशी snake_case नावे. चुकीची नावे टाळा — 2school, my name असं नाव नको.\n\nसर्व variables print करा आणि output अपेक्षेप्रमाणे आले की नावांचे नियम व्यवहारात वापरता आले.\n\nfirst_name = \"विलास\"\nlast_name = \"पाटील\"\nschool_name = \"आदर्श विद्यालय\"\ntotal_subjects = 6\nprint(first_name, last_name, \"-\", school_name)\nprint(\"subjects:\", total_subjects)",
        code: `first_name = "विलास"
last_name = "पाटील"
school_name = "आदर्श विद्यालय"
total_subjects = 6
print(first_name, last_name, "-", school_name)
print("subjects:", total_subjects)`,
        codeLanguage: "python",
        output: `विलास पाटील - आदर्श विद्यालय
subjects: 6`,
      },
    ],
    practiceQuestions: [
      "variable name number ने सुरू होऊ शकतं का?",
      "variable name मध्ये space येऊ शकतं का?",
      "case-sensitive म्हणजे काय?",
      "Python मध्ये अनेक शब्दांचं नाव कसे लिहितात?",
    ],
    quiz: [
      {
        question: "कोणतं नाव वैध आहे?",
        options: ["1st_name", "first-name", "first_name", "first name"],
        correct: 2,
      },
      {
        question: "if = 5 यावर काय होतं?",
        options: ["ठीक आहे", "SyntaxError", "काही नाही", "variable बदलतो"],
        correct: 1,
      },
      {
        question: "Name आणि name मध्ये काय?",
        options: ["समान", "वेगळे (case-sensitive)", "error", "दोन्ही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "तीन variables बनवा जी एका कुत्र्याची माहिती देतात (नाव, वय, जात). snake_case मध्ये नावे द्या. मग सर्व print करा.",
      starterCode: `dog_name = "टॉमी"
dog_age = 3
dog_breed = "जर्मन"
print(dog_name, dog_age, dog_breed)`,
      expectedOutput: "टॉमी 3 जर्मन",
    },
    interviewQuestions: [
      "Variable naming नियम कोणते?",
      "Snake_case म्हणजे काय?",
      "=' v '==' punha — donhni niyam?",
    ],
    related: ["python-variables", "python-data-types", "python-basics"],
    prev: "python-variables",
    next: "python-data-types",
  },

  {
    slug: "python-data-types",
    categoryId: "python",
    title: "Data Types",
    marathiTitle: "Data Types — int, float, str, bool, None",
    level: "beginner",
    minutes: 16,
    summary: "Python मध्ये डेटा कोणत्या प्रकारचा आहे — हे जाणून घ्या.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Data Types — int, float, str, bool, None चे फायदे आणि महत्त्व",
        content: "✓ संगणकाला type कळणं आवश्यक आहे कारण प्रत्येक प्रकाराची क्रिया, गणित आणि memory वापर वेगळा असतो.\n✓ महत्त्वाचा फरक: संख्येत दशांश बिंदू असेल तर ती float, नसेल तर int — 7 हा int, पण 7.0 हा float.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Data type म्हणजे काय?",
        content: "Data type म्हणजे value चा प्रकार. Python मधील पाच मूलभूत types:\n\n• int — पूर्ण संख्या (0, 50, -4)\n• float — दशांश संख्या (3.14, -0.5)\n• str — मजकूर (\"हाय\")\n• bool — सत्य/असत्य (True, False)\n• None — काहीही नाही\n\nvalue चं रूपच तिचा type सांगतं — संख्या int/float, अवतरणांतला मजकूर str. संगणकाला type कळणं आवश्यक आहे कारण प्रत्येक प्रकाराची क्रिया, गणित आणि memory वापर वेगळा असतो.\n\nहे फक्त पहिले पाच प्रकार आहेत; पुढे list, dictionary असे आणखी प्रकार येतील. Python dynamic typed भाषा आहे — variable चा type value वरून आपोआप ठरतो आणि नवीन value मिळाली की बदलू शकतो.",
      },
      {
        title: "type() function",
        content: "type() हा function कोणत्याही value चा प्रकार सांगतो. कोडमध्ये value चा type नेहमी दिसत नाही — type() लागू करून खात्री करता येते.\n\nखाली पाच मूलभूत values चे type दाखवले आहेत. लक्षात घ्या — type(None) हे <class 'NoneType'> दाखवतो; None चा स्वतःचा वेगळा type आहे.\n\nprint(type(10))\nprint(type(10.5))\nprint(type(\"हाय\"))\nprint(type(True))\nprint(type(None))",
        code: `print(type(10))
print(type(10.5))
print(type("हाय"))
print(type(True))
print(type(None))`,
        codeLanguage: "python",
        output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`,
      },
      {
        title: "int आणि float",
        content: "int (integer) म्हणजे पूर्ण संख्या — भाग नाही अशी. 0, 1, -5, 100 हे सगळे int.\nfloat म्हणजे दशांश बिंदू असलेली संख्या — 3.5, 0.2, -7.9. वजन, उंची, किंमत अशी मोजमापं float मध्ये साठवतात.\n\nमहत्त्वाचा फरक: संख्येत दशांश बिंदू असेल तर ती float, नसेल तर int — 7 हा int, पण 7.0 हा float.\n\nx = 10\ny = 10.5\nprint(x, type(x))\nprint(y, type(y))\nprint(7, type(7))\nprint(7.0, type(7.0))",
        code: `x = 10
y = 10.5
print(x, type(x))
print(y, type(y))
print(7, type(7))
print(7.0, type(7.0))`,
        codeLanguage: "python",
        output: `10 <class 'int'>
10.5 <class 'float'>
7 <class 'int'>
7.0 <class 'float'>`,
      },
      {
        title: "str, bool आणि None",
        content: "str (string) म्हणजे अवतरणांमध्ये बंद केलेला मजकूर. अवतरण single ('...') किंवा double (\"...\") दोन्ही चालतात. \"मराठी\" हा str.\n\nbool फक्त दोन मूल्ये ओळखतो: True किंवा False — capital T आणि F सह. true असं लहान अक्षरांत लिहिल्यास Python तो नाव समजतो आणि NameError देतो.\n\nNone म्हणजे 'काहीही नाही' — value अजून ठरवलेली नाही हे सांगतो. तो 0 ना, False ना, कोरा मजकूर ना — स्वतंत्र value.\n\nz = \"मराठी\"\nb = True\nn = None\nprint(z, type(z))\nprint(b, type(b))\nprint(n, type(n))",
        code: `z = "मराठी"
b = True
n = None
print(z, type(z))
print(b, type(b))
print(n, type(n))`,
        codeLanguage: "python",
        output: `मराठी <class 'str'>
True <class 'bool'>
None <class 'NoneType'>`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण",
        content: "फॉर्ममधील प्रत्येक field चा एक निश्चित type असतो: नाव → str, वय → int, उंची → float, विद्यार्थिनी → bool, टीप → None.\n\n'data मोजायचा की सांगायचा' हेच type ठरवतं — मोजायचा तर int/float, सांगायचा तर str, होय/नाही निर्णय असेल तर bool. टीपसारखी रिकामी जागा None म्हणून दाखवतात — 0 किंवा कोरा मजकूर नव्हे.\n\nपूजा नावाच्या विद्यार्थिनीचा फॉर्म:\n\nनाव = \"पूजा\"\nवय = 25\nउंची = 5.4\nविद्यार्थिनी = True\nprint(नाव, type(नाव))\nprint(वय, type(वय))\nprint(उंची, type(उंची))\nprint(विद्यार्थिनी, type(विद्यार्थिनी))",
        code: `नाव = "पूजा"
वय = 25
उंची = 5.4
विद्यार्थिनी = True
print(नाव, type(नाव))
print(वय, type(वय))
print(उंची, type(उंची))
print(विद्यार्थिनी, type(विद्यार्थिनी))`,
        codeLanguage: "python",
        output: `पूजा <class 'str'>
25 <class 'int'>
5.4 <class 'float'>
True <class 'bool'>`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "\"25\" आणि 25 वेगळे — पहिला str, दुसरा int. 25 + 5 = 30, पण \"25\" + \"5\" = \"255\" (मजकूर जोडणी). अवतरण ओळखलं तर ही चूक टळते.\n\n\"मराठी\" - 5 सारखी क्रिया TypeError देतो — प्रत्येक operator योग्य type वरच चालतो.\n\ntrue (लहान अक्षर) — Python ला फक्त True/False माहीत आहेत; true हे NameError देतो. केस नेहमी जुळवा.\n\n5.0 हा float, 5 हा int — दशांश बिंदू असला की type float. दिसायला गोंधळ, पण type मध्ये निर्णायक.\n\nवेगळ्या type ची क्रिया केल्यावर Python 'unsupported operand type' असा TypeError देतो — या संदेशात type हा शब्दच सापडतो.\n\nprint(\"25\" + \"5\")\nprint(25 + 5)",
        code: `print("25" + "5")
print(25 + 5)`,
        codeLanguage: "python",
        output: `255
30`,
      },
      {
        title: "Interactive: type() प्रयोग",
        content: "वेगवेगळ्या values चा type तपासा: type(5) int, type(5.0) float, type(\"5\") str — दिसायला समान पण प्रकार वेगळे. type(True) bool, type(None) NoneType.\n\nकोरी पण बंद स्ट्रिंग \"\" देखील strच असते — रिकामी असली तरी प्रकार बदलत नाही.\n\nprint(type(5))\nprint(type(5.0))\nprint(type(\"5\"))\nprint(type(True))\nprint(type(None))",
        code: `print(type(5))
print(type(5.0))
print(type("5"))
print(type(True))
print(type(None))`,
        codeLanguage: "python",
        output: `<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>`,
      },
      {
        title: "Mini Project — माझा डेटा प्रोफाइल",
        content: "तुमचं data profile बनवा — प्रत्येक माहिती सोबत तिचा type दाखवा. नाव str, वय int, पगार float, अविवाहित/विवाहित स्थिती bool.\n\nपगार 25000.5 असा दशांश असल्याने float; केवळ 25000 असेल तर int. गणितात (व्याज, कर) हा फरक पडतो.\n\nविलासचे उदाहरण पहा — हेच values पुढील type conversion धड्यात रूपांतरित करू.\n\nनाव = \"विलास\"\nवय = 24\nपगार = 25000.5\nsingle = False\nprint(नाव, \"-\", type(नाव))\nprint(वय, \"-\", type(वय))\nprint(पगार, \"-\", type(पगार))\nprint(single, \"-\", type(single))",
        code: `नाव = "विलास"
वय = 24
पगार = 25000.5
single = False
print(नाव, "-", type(नाव))
print(वय, "-", type(वय))
print(पगार, "-", type(पगार))
print(single, "-", type(single))`,
        codeLanguage: "python",
        output: `विलास - <class 'str'>
24 - <class 'int'>
25000.5 - <class 'float'>
False - <class 'bool'>`,
      },
    ],
    practiceQuestions: [
      "type(3.14) काय दाखवेल?",
      "\"5\" आणि 5 मध्ये काय फरक?",
      "bool चे दोन मूल्य कोणते?",
      "None म्हणजे काय?",
    ],
    quiz: [
      {
        question: "type(3.14) म्हणजे काय?",
        options: ["int", "float", "str", "bool"],
        correct: 1,
      },
      {
        question: "\"5\" हा कोणता type?",
        options: ["int", "float", "str", "bool"],
        correct: 2,
      },
      {
        question: "True हा कोणता type?",
        options: ["int", "float", "str", "bool"],
        correct: 3,
      },
      {
        question: "Python मध्ये 'काहीही नाही' दर्शवणारा value?",
        options: ["0", "empty", "None", "nil"],
        correct: 2,
      },
    ],
    challenge: {
      prompt: "4 variables बनवा: एक int, एक float, एक string, एक bool. print() मध्ये type() दाखवा; string मध्ये तुमच्या आवडत्या गोष्टीचं नाव असू द्या.",
      starterCode: `a = 15
b = 2.5
c = "आंबा"
d = True
print(type(a))
print(type(b))
print(type(c))
print(type(d))`,
      expectedOutput: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>",
    },
    interviewQuestions: [
      "Python चे मुख्य data types कोणते?",
      "True uppercase मध्येच का?",
      "type() function काय करतो?",
    ],
    related: ["python-variables", "python-type-conversion", "python-naming-rules"],
    prev: "python-naming-rules",
    next: "python-type-conversion",
  },

  {
    slug: "python-type-conversion",
    categoryId: "python",
    title: "Type Conversion",
    marathiTitle: "Type conversion — int(), float(), str()",
    level: "beginner",
    minutes: 12,
    summary: "एका type मध्ये दुसऱ्याला रूपांतर करा — int(), float(), str() ने.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Type conversion — int(), float(), str() चे फायदे आणि महत्त्व",
        content: "✓ महत्त्वाचं तत्त्व — conversion मध्ये value चा अर्थ तसाच राहतो, फक्त रूप बदलतं.\n✓ निर्णयाच्या if धड्यात उपयोगी.\n✓ conversion चा क्रमही महत्त्वाचा: int(float(\\\"12.9\\\")) = 12; थेट int(\\\"12.9\\\") error देतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Type conversion म्हणजे काय?",
        content: "कधीकधी data एका type मध्ये असतो, पण वापर दुसऱ्या type मध्ये हवा असतो. उदा. input() ने आलेली संख्या सुरुवातीला text असते; गणितासाठी संख्या हवी. यालाच type conversion म्हणतात.\n\nPython मध्ये रूपांतर चार function ने होते: int(), float(), str(), bool().\n\nया धड्यात वयाचे उदाहरण दिसेल: वापरकर्ता \"25\" टाईप करतो (text), int() ने ते 25 (number) बनवतो आणि मग गणना करतो.\n\nमहत्त्वाचं तत्त्व — conversion मध्ये value चा अर्थ तसाच राहतो, फक्त रूप बदलतं. 25 (int) आणि \"25\" (str) — दोघांचाही अर्थ पंचवीस, पण संगणक त्यांना वेगवेगळ्या क्रियांसाठी वापरतो.",
      },
      {
        title: "int(), float(), str(), bool()",
        content: "चार functions आणि त्यांचे काम:\n\nint() — संख्येत बदलतो. int(\"10\") = 10. दशांश संख्या दिली तर छोटा भाग गळतो: int(3.7) = 3.\nfloat() — दशांशात बदलतो. float(5) = 5.0, float(\"2.5\") = 2.5. पूर्ण संख्येलाही float बनवतो.\nstr() — मजकुरात बदलतो. str(100) = \"100\". संख्या आणि मजकूर जोडताना str() आवश्यक — थेट जोडता येत नाही.\nbool() — True/False बनवतो: bool(1) = True, bool(0) = False. निर्णयाच्या if धड्यात उपयोगी.\n\nprint(int(\"10\"))\nprint(int(3.7))\nprint(float(5))\nprint(str(100))\nprint(float(\"2.5\"))",
        code: `print(int("10"))
print(int(3.7))
print(float(5))
print(str(100))
print(float("2.5"))`,
        codeLanguage: "python",
        output: `10
3
5.0
100
2.5`,
      },
      {
        title: "धोक्याच्या बाबी — कधी error येतो?",
        content: "प्रत्येक conversion शक्य नसते:\n\n• int(\"abc\") → ValueError — 'abc' संख्येत बदलणं अशक्य\n• int(\"10.5\") → ValueError — दशांश मजकूर थेट int() होत नाही; आधी float(\"10.5\") नंतर int() करा\n• int(10.9) → 10 — दशांश संख्या रूपांतरित होते; .9 भाग गळतो (truncation)\n\nValueError आल्यावर कोड थांबतो; try/except ने error पकडून कोड पुढे चालवता येतो:\n\ntry:\nprint(int(\"abc\"))\nexcept ValueError:\nprint(\"अशी conversion होत नाही!\")\nprint(int(\"45\"))\nprint(type(int(\"45\")))",
        code: `try:
    print(int("abc"))
except ValueError:
    print("अशी conversion होत नाही!")
print(int("45"))
print(type(int("45")))`,
        codeLanguage: "python",
        output: `अशी conversion होत नाही!
45
<class 'int'>`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — वय",
        content: "वापरकर्ता वय टाईप करतो — पण input() त्याला मजकूर म्हणून देतो, उदा. \"25\". त्या मूल्यावर गणित केलं तर TypeError येतो: मजकुरात संख्या जोडता येत नाही.\n\nम्हणून गणनेपूर्वी int() ने मजकूर संख्येत बदला. हाच सर्वात सामान्य रूपांतराचा प्रकार आहे — input() च्या धड्यात हेच वापराल:\n\nवय = \"25\"\ntry:\nprint(वय + 5)\nexcept TypeError:\nprint(\"गफल: मजकूर + number जोडता येत नाही!\")\n\nवय_संख्या = int(वय)\nprint(वय_संख्या + 5)",
        code: `वय = "25"
try:
    print(वय + 5)
except TypeError:
    print("गफल: मजकूर + number जोडता येत नाही!")

वय_संख्या = int(वय)
print(वय_संख्या + 5)`,
        codeLanguage: "python",
        output: `गफल: मजकूर + number जोडता येत नाही!
30`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "int(\"10.5\") — ValueError देतो, कारण दशांश मजकूर थेट int() होत नाही. आधी float() नंतर int() करा: int(float(\"10.5\")) = 10.\n\n\"5\" + 5 — मजकूर आणि संख्या जोडता येत नाही; TypeError. आधी int(\"5\") करून मग जोडा.\n\nfloat(\"5,5\") — भारतीय पद्धतीने दशांश comma असतो, पण Python फक्त dot मानतो: float(\"5.5\") लिहा.\n\nint(2.9) = 2 — conversion मध्ये दशांश भाग कापला जातो, गोळा केला जात नाही. int() आणि round() वेगळी.\n\nconversion चा क्रमही महत्त्वाचा: int(float(\"12.9\")) = 12; थेट int(\"12.9\") error देतो. मोठ्या संख्येतील comma (100,000) वापरताना आधी काढा, मग रूपांतर करा.",
      },
      {
        title: "हे लक्षात ठेवा",
        content: "int() फक्त पूर्ण भाग देतो — दशांश नाही. str() ने कोणत्याही value ला मजकूर बनवता येतो; संख्या आणि मजकूर print मध्ये मिक्स करताना str() आवश्यक.\n\ninput() ने नेहमी string येतं — तो मजकूर संख्यांमध्ये हवा असेल तर स्पष्टपणे int() किंवा float() करा.\n\nconversion करण्यापूर्वी value वर विश्वास न ठेवता तपासा. error संदेश ओळखा: ValueError म्हणजे value ची रचना चुकीची; TypeError म्हणजे types जुळले नाहीत.\n\nरूपांतर झाल्यावर type() वापरून खात्री करा — हीच सवय पुढील input धड्यातील वय गणनेला सुरक्षित बनवेल.",
      },
      {
        title: "Interactive: वय रूपांतरण",
        content: "वय_text हे नावच सांगतं की तिथे text आहे; वय हे int. अशी नावे कोड स्वतः बोलतं.\n\nvalue बदलून पहा — वय_text मध्ये \"30\" घाला; output प्रमाणे बदलेल. हा fixed-value सराव पुढील input() धड्यात खऱ्या वापरकर्त्यासोबत चालेल.\n\nवय_text = \"20\"\nवय = int(वय_text)\nprint(\"पुढील वर्षी:\", वय + 1)\nprint(\"type:\", type(वय))",
        code: `वय_text = "20"
वय = int(वय_text)
print("पुढील वर्षी:", वय + 1)
print("type:", type(वय))`,
        codeLanguage: "python",
        output: `पुढील वर्षी: 21
type: <class 'int'>`,
      },
      {
        title: "Mini Project — वय गणनेचं रूपांतरण",
        content: "वयाचं रूपांतरण संपूर्ण करा: text वय → int वय → गणना → text display. तीनही conversion एकाच project मध्ये.\n\nवय = \"24\"\nवय_int = int(वय)\nपुढे = वय_int + 1\nprint(\"पुढच्या वर्षी वय होईल:\", पुढे)\nprint(\"वय (text):\", str(पुढे))",
        code: `वय = "24"
वय_int = int(वय)
पुढे = वय_int + 1
print("पुढच्या वर्षी वय होईल:", पुढे)
print("वय (text):", str(पुढे))`,
        codeLanguage: "python",
        output: `पुढच्या वर्षी वय होईल: 25
वय (text): 25`,
      },
    ],
    practiceQuestions: [
      "int(\"45\") चा output काय?",
      "int(4.9) काय असेल?",
      "input() ने काय मिळतं?",
      "135 वय text मध्ये वापरायला कशी conversion करावी?",
    ],
    quiz: [
      {
        question: "int(\"10\") काय देते?",
        options: ["\"10\"", "10", "error", "10.0"],
        correct: 1,
      },
      {
        question: "float(5) चा output काय?",
        options: ["5", "5.0", "\"5\"", "error"],
        correct: 1,
      },
      {
        question: "int(\"abc\") काय करतं?",
        options: ["abc", "0", "ValueError", "nothing"],
        correct: 2,
      },
      {
        question: "input() ने कोणता type मिळतो?",
        options: ["int", "float", "str", "bool"],
        correct: 2,
      },
    ],
    challenge: {
      prompt: "\"10\" आणि \"20\" दोन string दिले आहेत. त्यांना int बनवा, बेरीज करा, आणि output text error शिवाय दाखवा.",
      starterCode: `a = "10"
b = "20"
s = int(a) + int(b)
print("बेरीज:", s)
print(type(s))`,
      expectedOutput: "बेरीज: 30\n<class 'int'>",
    },
    interviewQuestions: [
      "input() ने number का मिळत नाही?",
      "int(4.9) चं काय होतं?",
      "अवैध conversion वर काय error?",
    ],
    related: ["python-data-types", "python-input", "python-variables"],
    prev: "python-data-types",
    next: "python-input",
  },

  {
    slug: "python-input",
    categoryId: "python",
    title: "input() Function",
    marathiTitle: "input() — वापरकर्त्याकडून घेणे",
    level: "beginner",
    minutes: 12,
    summary: "input() function ने program मध्ये वापरकर्त्याकडून डेटा मिळवा.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? input() — वापरकर्त्याकडून घेणे चे फायदे आणि महत्त्व",
        content: "✓ सर्वात महत्त्वाची आठवण — input() ने मिळणारा प्रत्येक डेटा string असतो.\n✓ हा फरकच conversion ची गरज दाखवतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "input() म्हणजे काय?",
        content: "input() ही function program थांबवते आणि वापरकर्त्याकडून एक ओळ लिहायला सांगते; एंटर दाबल्यावर ती ओळ string म्हणून परत देते.\n\nआतापर्यंत values कोडमध्येच लिहिल्या; आता वापरकर्त्याकडून घेणं शिकतो. print() output देतो, input() input घेतो — दोन्ही मिळून program वापरकर्त्याशी बोलू शकतो.\n\nसर्वात महत्त्वाची आठवण — input() ने मिळणारा प्रत्येक डेटा string असतो. तुम्ही संख्या टाईप करा, तरी ती '5' मजकूरच असते; गणित करण्यापूर्वी int() किंवा float() लावावं लागतं.\n\nहेच मागील type conversion धड्याशी नाते — तिथे रूपांतर शिकलो; आता वापरकर्त्याचा खरा input घेऊन रूपांतर करायचं शिकतो.",
      },
      {
        title: "Syntax — नाव = input(प्रश्न)",
        content: "नाव = input(\"तुमचं नाव लिहा: \")\n\ninput() च्या कंसातला मजकूर म्हणजे prompt — वापरकर्त्याला काय टाईप करायचं ते सांगतो. prompt optional आहे, पण तो दिल्याशिवाय वापरकर्त्याला कळत नाही काय करायचं.\n\nएंटर दाबल्यावर टाईप केलेली संपूर्ण ओळ उजवीकडच्या variable मध्ये साठते. तोपर्यंत program थांबलेला असतो.\n\nएक file input() एक ओळ डेटा घेतो; अनेक answer हवे असतील तर अनेक input() लिहा.\n\nनाव = input(\"तुमचं नाव लिहा: \")\nprint(\"नमस्कार,\", नाव)",
        code: `नाव = input("तुमचं नाव लिहा: ")
print("नमस्कार,", नाव)`,
        codeLanguage: "python",
        output: `तुमचं नाव लिहा: विलास
नमस्कार, विलास`,
      },
      {
        title: "Number input — int(input())",
        content: "input() नेहमी text देतो. वय 15 टाईप केलं तरी ते \"15\" मजकूर असतं; गणित करण्यापूर्वी int() आवश्यक.\n\nएकाच ओळीत दोन्ही कामे — int(input(\"तुमचं वय: \")). input() आधी चालतो, त्याचा text निकाल int() ला जातो. दशांश हवं असेल तर float(input()).\n\nवय, मार्क, गुण — पूर्ण संख्या — int(input()); उंची, किंमत — दशांश — float(input()). योग्य function निवडणं हेच कौशल्य.\n\nवय_text = input(\"तुमचं वय: \")\nवय = int(वय_text)\nprint(\"तुमचे वय दुप्पट:\", वय * 2)",
        code: `वय_text = input("तुमचं वय: ")
वय = int(वय_text)
print("तुमचे वय दुप्पट:", वय * 2)`,
        codeLanguage: "python",
        output: `तुमचं वय: 15
तुमचे वय दुप्पट: 30`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — मार्क",
        content: "विद्यार्थ्याची नाव आणि मार्क घ्या: नाव text म्हणून थेट input() ने; मार्क संख्येसाठी int(input()).\n\nf-string मध्ये {नाव} आणि {मार्क} मजकूर आणि संख्या एकत्र print करतात.\n\nनाव = input(\"नाव: \")\nमार्क = int(input(\"मार्क: \"))\nprint(f\"{नाव}, तुझे मार्क {मार्क}!\")",
        code: `नाव = input("नाव: ")
मार्क = int(input("मार्क: "))
print(f"{नाव}, तुझे मार्क {मार्क}!")`,
        codeLanguage: "python",
        output: `नाव: आकाश
मार्क: 89
आकाश, तुझे मार्क 89!`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ input() च्या text वर थेट गणित — \"5\" + 3 TypeError देतो; आधी int() करा.\n\n✗ रिकामं input — वापरकर्ता लगेच एंटर दाबला तर \"\" (रिकामा मजकूर) मिळतो.\n\n✗ input(int()) असा चुकीचा क्रम — input() आधी चालतो, तो निकाल int() ला द्यायचा: int(input()).\n\nint(input()) मध्ये वापरकर्त्याने अक्षर टाईप केलं तर ValueError येते — त्याचं handling पुढील धड्यात येईल; आतापर्यंतच्या उदाहरणांवर सराव करा.",
      },
      {
        title: "हे लक्षात ठेवा",
        content: "संपूर्ण input एक ओळ असतो — एक input() एकच answer घेतो.\n\nconvert करायला विसरू नका — input ने आलेला number गणिताआधी int() किंवा float() मध्ये रूपांतरित करा.\n\nprompt स्पष्ट द्या — \"वय:\" ऐवजी \"तुमचं वय लिहा:\" अधिक समजण्यासारखं.\n\ninput() नंतर type() तपासल्यास <class 'str'> दिसतं; अशी खात्री करणं ही सवय बनवा.",
      },
      {
        title: "Interactive: दोन संख्यांची बेरीज",
        content: "दोन संख्या input करून बेरीज दाखवा. दोन्ही int() मध्ये बदलल्या नाहीत तर '7' आणि '3' मिळून '73' बनेल! हा फरकच conversion ची गरज दाखवतो.\n\na = int(input(\"पहिली संख्या: \"))\nb = int(input(\"दुसरी संख्या: \"))\nprint(\"बेरीज:\", a + b)",
        code: `a = int(input("पहिली संख्या: "))
b = int(input("दुसरी संख्या: "))
print("बेरीज:", a + b)`,
        codeLanguage: "python",
        output: `पहिली संख्या: 7
दुसरी संख्या: 3
बेरीज: 10`,
      },
      {
        title: "Mini Project — वापरकर्ता प्रोफाईल",
        content: "input() ने नाव, वय, गाव घ्या आणि एका वाक्यात प्रोफाईल print करा.\n\nनाव आणि गाव text — थेट input(); वय number — int(input()). प्रत्येकाला योग्य हाताळणी द्या; f-string मध्ये {नाव}, {वय}, {गाव} एका वाक्यात जुळतात.\n\nनाव = input(\"तुमचं नाव: \")\nवय = int(input(\"तुमचं वय: \"))\nगाव = input(\"तुमचं गाव: \")\nprint(f\"नमस्कार {नाव}! तुम्ही {वय} वर्षांचे, {गाव}चे.\")",
        code: `नाव = input("तुमचं नाव: ")
वय = int(input("तुमचं वय: "))
गाव = input("तुमचं गाव: ")
print(f"नमस्कार {नाव}! तुम्ही {वय} वर्षांचे, {गाव}चे.")`,
        codeLanguage: "python",
        output: `तुमचं नाव: विलास
तुमचं वय: 22
तुमचं गाव: नाशिक
नमस्कार विलास! तुम्ही 22 वर्षांचे, नाशिकचे.`,
      },
    ],
    practiceQuestions: [
      "input() ने काय मिळतं?",
      "number input साठी काय करावं लागतं?",
      "prompt म्हणजे काय?",
    ],
    quiz: [
      {
        question: "input() ने काय मिळतं?",
        options: ["int", "float", "str", "bool"],
        correct: 2,
      },
      {
        question: "number input साठी काय करायचं?",
        options: ["काही नाही", "int(input())", "float(input())", "str(input())"],
        correct: 1,
      },
      {
        question: "आपण input() मध्ये दिलेला मजकूर काय असतो?",
        options: ["prompt", "separator", "keyword", "variable"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "वापरकर्त्याकडून लांबी आणि रुंदी घ्या (int), आयताचे क्षेत्रफळ काढा आणि print करा.",
      starterCode: `लांबी = int(input("लांबी: "))
रुंदी = int(input("रुंदी: "))
क्षेत्रफळ = लांबी * रुंदी
print("क्षेत्रफळ:", क्षेत्रफळ)`,
      expectedOutput: "लांबी: 5\nरुंदी: 4\nक्षेत्रफळ: 20",
    },
    interviewQuestions: [
      "input() ने number मिळतं का?",
      "prompt का द्यावा?",
      "input() नंतर conversion हवी का आणि का?",
    ],
    related: ["python-type-conversion", "python-operators-arithmetic", "python-variables"],
    prev: "python-type-conversion",
    next: "python-operators-arithmetic",
  },

  {
    slug: "python-operators-arithmetic",
    categoryId: "python",
    project: "python-calculator",
    title: "Arithmetic Operators",
    marathiTitle: "Arithmetic operators — गणिताचे चिन्ह",
    level: "beginner",
    minutes: 12,
    summary: "Python मध्ये + - * / आणि अन्य गणित operators शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Arithmetic operators — गणिताचे चिन्ह चे फायदे आणि महत्त्व",
        content: "✓ % चा सर्वांत मोठा उपयोग — सम-विषम तपासणी.\n✓ प्रत्येक operator चा निकाल print मध्ये पाहून तपासा — output बघण्याची सवय arithmetic शिकण्यासाठी सर्वांत महत्त्वाची आहे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Arithmetic operators म्हणजे काय?",
        content: "Arithmetic operators म्हणजे गणिताची क्रिया करणारी चिन्हे — बेरीज, वजाबाकी, गुणाकार, भागाकार आणि त्यांचे प्रकार. प्रत्येक operator दोन values (operands) घेऊन एक निकाल देतो.\n\nपहिली चार चिन्हे शाळेतलीच — +, -, *, /. 10 + 3 = 13, 10 - 3 = 7, 10 * 3 = 30, 10 / 3 = 3.33. फक्त चिन्हाचं रूप वेगळं, गणित तेच.\n\nआणखी तीन खास operator — // पूर्ण भाग, % शेष, ** घात. 10 // 3 = 3 (पूर्ण भाग), 10 % 3 = 1 (शेष), 10 ** 2 = 100 (घात).\n\nहे operator variables मध्ये साठवलेल्या संख्यांवर काम करतात — गणनेतून नवीन निकाल बनतो. हाच पुढील सर्व program चा पाया आहे.",
      },
      {
        title: "सात operators एका नजरेत",
        content: "+ बेरीज, - वजाबाकी, * गुणाकार, / दशांश भागाकार, // पूर्ण भाग, % शेष, ** घात — हे सात operators.\n\n/ नेहमी दशांश (float) देतो: 10 / 3 = 3.3333333333333335. // फक्त पूर्ण भाग: 10 // 3 = 3. % शेष: 10 % 3 = 1.\n\nगणनेचा क्रम (precedence) शाळेइतकाच — प्रथम कंस, मग घात, मग गुणाकार-भागाकार, शेवटी बेरीज-वजाबाकी. म्हणून 2 + 3 * 4 = 14.\n\nprint(\"बेरीज:\", 10 + 3)\nprint(\"वजाबाकी:\", 10 - 3)\nprint(\"गुणाकार:\", 10 * 3)\nprint(\"भागाकार:\", 10 / 3)\nprint(\"पूर्ण भाग:\", 10 // 3)\nprint(\"शेष:\", 10 % 3)\nprint(\"घात:\", 10 ** 2)",
        code: `print("बेरीज:", 10 + 3)
print("वजाबाकी:", 10 - 3)
print("गुणाकार:", 10 * 3)
print("भागाकार:", 10 / 3)
print("पूर्ण भाग:", 10 // 3)
print("शेष:", 10 % 3)
print("घात:", 10 ** 2)`,
        codeLanguage: "python",
        output: `बेरीज: 13
वजाबाकी: 7
गुणाकार: 30
भागाकार: 3.3333333333333335
पूर्ण भाग: 3
शेष: 1
घात: 100`,
      },
      {
        title: "पूर्ण भाग आणि शेष — // आणि %",
        content: "// आणि % सोबत शिकण्यासाठी सर्वात सोपी उपमा — वाटप: 17 पुस्तके 5 विद्यार्थ्यांना. प्रत्येकाला 3 पूर्ण पुस्तके, उरली 2. 17 // 5 = 3, 17 % 5 = 2.\n\n% चा सर्वांत मोठा उपयोग — सम-विषम तपासणी. n % 2 चा शेष 0 म्हणजे सम, 1 म्हणजे विषम.\n\nविभाज्यता देखील % ने — 15 % 5 = 0 म्हणजे 15 ही 5 ने पूर्ण विभाज्य (15 = 5 x 3).\n\nकॅलेंडरचे उदाहरण — वर्षात 52 आठवडे व उरलेला 1 दिवस: 365 // 7 = 52, 365 % 7 = 1.\n\nprint(7 % 2)   # 1 → विषम\nprint(8 % 2)   # 0 → सम\nprint(15 % 5)  # 0 → 15 ही 5 ने विभाज्य",
        code: `print(7 % 2)   # 1 → विषम
print(8 % 2)   # 0 → सम
print(15 % 5)  # 0 → 15 ही 5 ने विभाज्य`,
        codeLanguage: "python",
        output: `1
0
0`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — सूट",
        content: "खरेदीवर सूट मोजणं — मूळ किंमत 500 रुपये, 20% सूट. प्रथम सूटची रक्कम: 500 x 0.2 = 100. मग अंतिम किंमत: 500 - 100 = 400.\n\nहे variables मध्ये दोन operator एकत्र करून लिहितो — * (गुणाकार) आणि - (वजाबाकी). टक्का रूपांतर: 20% म्हणजे 20/100 = 0.2.\n\nसूट टक्के बदलल्यास संपूर्ण उत्तर बदलते — म्हणूनच values variables मध्ये ठेवतो; कोड अनेक वेळा वापरता येतो.\n\nमूळ = 500\nडिस्काउंट = मूळ * 0.2\nकिंमत = मूळ - डिस्काउंट\nprint(\"मूळ किंमत:\", मूळ)\nprint(\"डिस्काउंट:\", डिस्काउंट)\nprint(\"अंतिम किंमत:\", किंमत)",
        code: `मूळ = 500
डिस्काउंट = मूळ * 0.2
किंमत = मूळ - डिस्काउंट
print("मूळ किंमत:", मूळ)
print("डिस्काउंट:", डिस्काउंट)
print("अंतिम किंमत:", किंमत)`,
        codeLanguage: "python",
        output: `मूळ किंमत: 500
डिस्काउंट: 100.0
अंतिम किंमत: 400.0`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ 2 + 3 * 4 = 14 — गुणाकार बेरीजपूर्वी चालतो (precedence). बेरीज आधी हवी असेल तर कंस: (2 + 3) * 4 = 20.\n\n✗ पूर्ण भाग हवा असताना / वापरल्यास — 5 / 2 = 2.5; पूर्ण भागासाठी //: 5 // 2 = 2.\n\n✗ number + string — TypeError. \"5\" + 3 चालत नाही; आधी int(\"5\") ची conversion करा.\n\n✗ मजकुरावर arithmetic — \"10\" * 2 = \"1010\" (मजकूर पुनरावृत्ती), पण 10 * 2 = 20 (संख्या गुणाकार). दोन्ही भिन्न; data type ची खात्री करा.",
      },
      {
        title: "हे लक्षात ठेवा",
        content: "/ नेहमी float देतो — 10 / 3 = 3.3333333333333335. // पूर्णांक भाग, % शेष. सात operators: + - * / // % **.\n\nprecedence क्रम — कंस, घात (**), गुणाकार/भागाकार (* / // %), शेवटी बेरीज/वजाबाकी (+ -). संदिग्धता असेल तर कंस वापरा.\n\n// सांगते \"किती पूर्ण\", % सांगते \"किती उरलं\" — ही जोडी वाटपाच्या कोणत्याही गणितात एकत्र लागते.\n\nप्रत्येक operator चा निकाल print मध्ये पाहून तपासा — output बघण्याची सवय arithmetic शिकण्यासाठी सर्वांत महत्त्वाची आहे.",
      },
      {
        title: "Interactive: सर्व operators एकाच वेळी",
        content: "दोन numbers घेऊन सर्व operator चे निकाल एकाच output मध्ये पहा: a = 12, b = 5. a आणि b बदलून पहा — जसे a = 20, b = 6; प्रत्येक बदलाने सर्व निकाल बदलतात.\\n\\nनिकाल वाचा — 12 / 5 = 2.4 (दशांश), 12 // 5 = 2 (पूर्ण भाग), 12 % 5 = 2 (शेष). तीच जोडी भिन्न अर्थ देते — हाच फरक लक्षात ठेवा.\\n\\na = 12\nb = 5\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)",
        code: `a = 12
b = 5
print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a // b)
print(a % b)`,
        codeLanguage: "python",
        output: `17
7
60
2.4
2
2`,
      },
      {
        title: "Mini Project — खरेदीचं बिल",
        content: "एक छोटं बिल program: वस्तूची किंमत, पॅकिंग आणि शिपिंग शुल्क जोडून एकूण रक्कम काढा.\n\nतीन values, एक बेरीज — किंमत + पॅकिंग + शिपिंग. प्रत्येक घटक स्वतंत्र ओळीत print होतो, त्यामुळे बिल स्पष्ट वाचता येतं.\n\nहाच कोड पुढे input() सोबत जोडला तर वापरकर्त्याच्या किंमतीवर चालणारा बिल program बनू शकतो.\n\nकिंमत = 150\nपॅकिंग = 20\nशिपिंग = 10\nएकूण = किंमत + पॅकिंग + शिपिंग\nprint(\"वस्तू:\", किंमत)\nprint(\"पॅकिंग + शिपिंग:\")\nprint(\"एकूण:\", एकूण)",
        code: `किंमत = 150
पॅकिंग = 20
शिपिंग = 10
एकूण = किंमत + पॅकिंग + शिपिंग
print("वस्तू:", किंमत)
print("पॅकिंग + शिपिंग:")
print("एकूण:", एकूण)`,
        codeLanguage: "python",
        output: `वस्तू: 150
पॅकिंग + शिपिंग:
एकूण: 180`,
      },
    ],
    practiceQuestions: [
      "7 % 2 चं उत्तर काय?",
      "// आणि / मध्ये फरक?",
      "2 + 3 * 4 किती?",
      "** म्हणजे काय?",
    ],
    quiz: [
      {
        question: "कोणता operator शेष काढतो?",
        options: ["/", "//", "%", "*"],
        correct: 2,
      },
      {
        question: "10 // 3 चं उत्तर काय?",
        options: ["3.33", "3", "3.0", "1"],
        correct: 1,
      },
      {
        question: "2 + 3 * 4 किती?",
        options: ["20", "14", "24", "9"],
        correct: 1,
      },
      {
        question: "5 ** 2 काय?",
        options: ["10", "25", "32", "7"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "input() ने दोन संख्या घ्या. एकाच print मध्ये बेरीज, वजाबाकी, गुणाकार, भागाकार दाखवा (प्रत्येक वेगळ्या line मध्ये).",
      starterCode: `a = int(input("पहिली संख्या: "))
b = int(input("दुसरी संख्या: "))
print("बेरीज:", a + b)
print("वजाबाकी:", a - b)
print("गुणाकार:", a * b)
print("भागाकार:", a / b)`,
      expectedOutput: "पहिली संख्या: 12\nदुसरी संख्या: 3\nबेरीज: 15\nवजाबाकी: 9\nगुणाकार: 36\nभागाकार: 4.0",
    },
    interviewQuestions: [
      "/ आणि // मध्ये फरक?",
      "% operator कुठे वापरतात?",
      "Operator precedence म्हणजे काय?",
    ],
    related: ["python-input", "python-operators-comparison", "python-variables"],
    prev: "python-input",
    next: "python-operators-comparison",
  },

  {
    slug: "python-operators-comparison",
    categoryId: "python",
    title: "Comparison Operators",
    marathiTitle: "Comparison operators — तुलना",
    level: "beginner",
    minutes: 10,
    summary: "==, !=, <, >, <=, >= ने values तुलना करा — निकाल True/False असतो.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Comparison operators — तुलना चे फायदे आणि महत्त्व",
        content: "✓ सर्वांत महत्त्वाचा फरक — == तुलना करतो, = value ठेवतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Comparison operators म्हणजे काय?",
        content: "Comparison operators दोन values तुलना करतात आणि निकाल नेहमी bool असतो — True किंवा False. तुलना म्हणजे संगणकाला प्रश्न विचारणे: ही दोन मूल्ये समान आहेत का? ही संख्या मोठी आहे का?\n\nसहा operator — == समान, != समान नाही, > मोठा, < लहान, >= मोठा किंवा समान, <= लहान किंवा समान.\n\nसर्वांत महत्त्वाचा फरक — == तुलना करतो, = value ठेवतो. एक चिन्ह चुकलं की अर्थ बदलतो.\n\nतुलनेचा bool निकाल हाच पुढील if धड्यात program निर्णय घेण्याचा आधार बनेल — आज तुलना, उद्या निर्णय.",
      },
      {
        title: "सहा operators एकाच कोडमध्ये",
        content: "प्रत्येक तुलना ओळीत operator दोन values मध्ये येतो — value operator value. निकाल print होतो: True किंवा False.\n\n5 == 5 खरं; 5 != 4 खरं; 10 > 5 खरं; 3 < 2 खोटं; 5 >= 5 खरं; 4 <= 3 खोटं. प्रत्येक ओळ वाचताना निकाल मनात आधी ठरवा, मग output शी जुळवा.\n\nतुलनेचा निकाल print मध्ये बघण्याची सवय तुम्हाला अचूक programmer बनवते — अंदाज आणि आउटपुट जुळले की संकल्पना पक्की.\n\nprint(5 == 5)\nprint(5 != 4)\nprint(10 > 5)\nprint(3 < 2)\nprint(5 >= 5)\nprint(4 <= 3)",
        code: `print(5 == 5)
print(5 != 4)
print(10 > 5)
print(3 < 2)
print(5 >= 5)
print(4 <= 3)`,
        codeLanguage: "python",
        output: `True
True
True
False
True
False`,
      },
      {
        title: "Text तुलना — मजकूर",
        content: "मजकूर (string) देखील तुलना करता येतो. == दोन मजकूर समान आहेत का ते पाहतो — \"apple\" == \"apple\" खरं.\n\nमजकूर तुलना case-sensitive — \"Apple\" == \"apple\" खोटं, कारण मोठी व लहान अक्षरे वेगळी मानली जातात. शेवटची जागा देखील वेगळी: \"विलास \" == \"विलास\" खोटं.\n\nअक्षरांची तुलना dictionary क्रमाने होते — a आधी, b नंतर; म्हणून \"b\" > \"a\" खरं.\n\nमराठी अक्षरे देखील Python ओळखतो — \"विलास\" == \"विलास\" अशी तुलना खरी होते.\n\nprint(\"apple\" == \"apple\")\nprint(\"apple\" != \"mango\")\nprint(\"b\" > \"a\")\nprint(\"Apple\" == \"apple\")",
        code: `print("apple" == "apple")
print("apple" != "mango")
print("b" > "a")
print("Apple" == "apple")`,
        codeLanguage: "python",
        output: `True
True
True
False`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — परीक्षा निकाल",
        content: "परीक्षेचा निकाल ठरवताना — मार्क 42, पास मार्क 35. पास तपासणी: मार्क >= पास (True); फेल तपासणी: मार्क < पास (False).\n\nहे example दाखवते की variables बदलताच तुलना आणि निकाल बदलतो. मार्क 25 केला तर पास False आणि फेल True येईल.\n\nहीच तुलना पुढे input() सोबत जोडल्यास प्रत्येक विद्यार्थ्याच्या मार्कावर खरा निकाल program देईल.\n\nमार्क = 42\nपास = 35\nprint(\"पास:\", मार्क >= पास)\nprint(\"फेल:\", मार्क < पास)",
        code: `मार्क = 42
पास = 35
print("पास:", मार्क >= पास)
print("फेल:", मार्क < पास)`,
        codeLanguage: "python",
        output: `पास: True
फेल: False`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ = ऐवजी == वापरणे — print(5 = 5) लिहिल्यास error; = value ठेवतो, == तुलना करतो.\n\n✗ \"5\" == 5 — मजकूर आणि संख्या भिन्न types, म्हणून खोटं. आधी int(\"5\") केलं तर int(\"5\") == 5 खरं.\n\n✗ 5 = 5 — अशी ओळ लिहिताच Python error देतो, कारण ती value ठेवण्याचा प्रयत्न असतो.\n\n✗ (2 + 3) == 5 — आधी गणना (5), मग तुलना: True. कंस ठेवल्याने गणना आणि तुलना यांचा क्रम स्पष्ट होतो.",
      },
      {
        title: "हे लक्षात ठेवा",
        content: "तुलनेचा निकाल नेहमी bool — True किंवा False. संगणकाला 'कदाचित' माहीत नाही.\n\nnumbers आणि text दोन्हीवर तुलना होते, पण दोन्ही values च्या types समान असल्याशिवाय अर्थ योग्य नसतो.\n\nएखादी तुलना True/False दिली म्हणजे program ला तो आधार मिळतो — तोच पुढील if धड्यात निर्णय घेईल.\n\nसहा operator ची यादी: ==, !=, <, >, <=, >=.",
      },
      {
        title: "Interactive: 7 ची तुलना",
        content: "7 ची तुलना सहा प्रकारांनी — प्रत्येक operator चा अर्थ एकाच output मध्ये तपासा. निकाल आधी मनात ठरवा, मग output शी जुळवा.\n\n7 > 5 खरं, 7 < 5 खोटं, 7 == 7 खरं, 7 != 7 खोटं, 7 >= 8 खोटं, 7 <= 8 खरं — प्रत्येक निकाल त्या operator चा अर्थ देतो.\n\nnumbers बदलून पहा — जसे 7 ऐवजी 9 घ्या; प्रत्येक बदलाने निकाल बदलतात.\n\nprint(7 > 5)\nprint(7 < 5)\nprint(7 == 7)\nprint(7 != 7)\nprint(7 >= 8)\nprint(7 <= 8)",
        code: `print(7 > 5)
print(7 < 5)
print(7 == 7)
print(7 != 7)
print(7 >= 8)
print(7 <= 8)`,
        codeLanguage: "python",
        output: `True
False
True
False
False
True`,
      },
      {
        title: "Mini Project — खेळ गुणांची पात्रता",
        content: "खेळाच्या गुणांवर दोन पातळ्या तपासा — उत्तम गुण (80) आणि पात्रता (50). स्कोअर 85 असल्यास दोन्ही तुलना True देतात.\n\nहा code दाखवतो की एकाच संख्येवर अनेक thresholds तपासता येतात; thresholds variables मध्ये ठेवल्यास नियम बदलायला सोपे होतात.\n\ninput() सोबत जोडलं तर वापरकर्त्याच्या स्कोअरवर हाच निर्णय program देईल.\n\nस्कोअर = 85\nउत्तम = 80\nपात्र = 50\nprint(\"उत्तम गुण:\", स्कोअर >= उत्तम)\nprint(\"पात्र:\", स्कोअर >= पात्र)",
        code: `स्कोअर = 85
उत्तम = 80
पात्र = 50
print("उत्तम गुण:", स्कोअर >= उत्तम)
print("पात्र:", स्कोअर >= पात्र)`,
        codeLanguage: "python",
        output: `उत्तम गुण: True
पात्र: True`,
      },
    ],
    practiceQuestions: [
      "== म्हणजे काय?",
      "\"a\" > \"b\" काय असेल?",
      "तुलना चा निकाल काय?",
      "पास ची तुलना कशी कराल?",
    ],
    quiz: [
      {
        question: "समान तपासण्यासाठी कोणता operator?",
        options: ["=", "==", "===", ":="],
        correct: 1,
      },
      {
        question: "print(5 != 5) output काय?",
        options: ["True", "False", "error", "5"],
        correct: 1,
      },
      {
        question: "तुलना चा निकाल कोणता type?",
        options: ["int", "str", "bool", "float"],
        correct: 2,
      },
    ],
    challenge: {
      prompt: "दोन संख्या input घ्या आणि पहिली दुसऱ्यापेक्षा मोठी आहे का ते print करा.",
      starterCode: `a = int(input("पहिली: "))
b = int(input("दुसरी: "))
print(a > b)`,
      expectedOutput: "पहिली: 4\nदुसरी: 2\nTrue",
    },
    interviewQuestions: [
      "== आणि = मध्ये फरक?",
      "comparison चा निकाल कोणता type असतो?",
      "string तुलना कशी होते?",
    ],
    related: ["python-operators-arithmetic", "python-operators-logical", "python-data-types"],
    prev: "python-operators-arithmetic",
    next: "python-operators-logical",
  },

  {
    slug: "python-operators-logical",
    categoryId: "python",
    title: "Logical Operators",
    marathiTitle: "Logical operators — and, or, not",
    level: "beginner",
    minutes: 12,
    summary: "and, or, not ने conditions एकत्र करा.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "का शिकावे? Logical operators — and, or, not चे फायदे आणि महत्त्व",
        content: "✓ स्थिती 'नाही' अशी तपासायची असेल तेव्हा उपयोगी.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Logical operators म्हणजे काय?",
        content: "Logical operators दोन किंवा अधिक conditions एकत्र जोडतात आणि एकच निकाल देतात. फक्त तीन operator — and, or, not.\n\nand — दोन्ही सत्य असतील तरच True; एकही खोटं असलं तर False. शाळेचं उदाहरण — प्रवेशासाठी वय आणि कागदपत्रे दोन्ही हवी.\n\nor — एक तरी सत्य असेल तर True; दोन्ही खोटे तरच False. उदा. चहा किंवा कॉफी — कोणताही एक पुरेसा.\n\nnot — दिलेल्या निकालाचा उलटा: True → False, False → True. मराठीत सोपा अर्थ — 'नाही'.\n\nहे operator मागील comparison धड्याच्या True/False निकालांना जोडतात — program निर्णय घेण्याची भाषा इथेच पक्की होते.",
      },
      {
        title: "and, or, not — एका कोडमध्ये",
        content: "तीनही operator ची वागणूक थेट print मध्ये तपासा:\n\nTrue and True → True; True and False → False; True or False → True; False or False → False; not True → False; not False → True.\n\nप्रत्येक निकाल bool आहे. लक्षात ठेवण्याचे सूत्र — दोन्ही खरे तरच and; एक तरी खरे तर or; उलटा तर not.\n\nprint(True and True)\nprint(True and False)\nprint(True or False)\nprint(False or False)\nprint(not True)\nprint(not False)",
        code: `print(True and True)
print(True and False)
print(True or False)
print(False or False)
print(not True)
print(not False)`,
        codeLanguage: "python",
        output: `True
False
True
False
False
True`,
      },
      {
        title: "तुलना आणि तर्क एकत्र",
        content: "Comparison operators च्या True/False निकालांना logical operators ने जोडता येतं. मार्क = 65, पास = 40 घ्या.\\n\\nमार्क > पास and मार्क >= 40: 65 > 40 → True आणि 65 >= 40 → True — दोन्ही सत्य → True. मार्क == 0 or मार्क > पास: False or True — एक तरी सत्य → True. not मार्क > 100: मार्क > 100 → False; not False → True.\\n\\nमार्क = 65\nपास = 40\nprint(मार्क > पास and मार्क >= 40)\nprint(मार्क == 0 or मार्क > पास)\nprint(not मार्क > 100)",
        code: `मार्क = 65
पास = 40
print(मार्क > पास and मार्क >= 40)
print(मार्क == 0 or मार्क > पास)
print(not मार्क > 100)`,
        codeLanguage: "python",
        output: `True
True
True`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — login",
        content: "लॉगिन हे and चे उत्तम उदाहरण — username आणि password दोन्ही योग्य हवे; एक चुकलं तर आत प्रवेश नाही. user_ok = True, pass_ok = False घेतल्यास Access: False.\\n\\nप्रवेश नियम हा or चा — वय >= 18 किंवा पालक सोबत — कोणतीही एक अट पुरेशी. वय 18 असल्याने Entry: True. एकाच कोडमध्ये दोन्ही operator — वेबसाइट, ATM, अॅप या सर्वांच्या सुरक्षिततेचा पाया इथेच बांधला जातो.\\n\\nuser_ok = True\npass_ok = False\nprint(\"Access:\", user_ok and pass_ok)\n\nवय = 18\nपालक = True\nprint(\"Entry:\", वय >= 18 or पालक)",
        code: `user_ok = True
pass_ok = False
print("Access:", user_ok and pass_ok)

वय = 18
पालक = True
print("Entry:", वय >= 18 or पालक)`,
        codeLanguage: "python",
        output: `Access: False
Entry: True`,
      },
      {
        title: "not चा उपयोग",
        content: "not हा सर्वांत सोपा operator — निकालाचा उलटा. स्थिती 'नाही' अशी तपासायची असेल तेव्हा उपयोगी.\n\nage = 15 — is_minor = age < 18 म्हणजे True. not is_minor → False, म्हणजे 'प्रौढ नाही'.\n\nage 20 केलं तर is_minor False आणि not is_minor True येईल — स्थिती बदलताच निकाल बदलतो.\n\nage = 15\nis_minor = age < 18\nprint(\"अल्पवयीन:\", is_minor)\nprint(\"प्रौढ नाही:\", not is_minor)",
        code: `age = 15
is_minor = age < 18
print("अल्पवयीन:", is_minor)
print("प्रौढ नाही:", not is_minor)`,
        codeLanguage: "python",
        output: `अल्पवयीन: True
प्रौढ नाही: False`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ And किंवा OR मोठ्या अक्षरांत — Python मध्ये operators नेहमी lowercase: and, or, not. And असे लिहिल्यास error.\n\n✗ true lowercase — true लिहिलं तर variable समजलं जातं; True, False, None हे पहिले अक्षर कॅपिटल असावं.\n\n✗ precedence क्रम — not सर्वांत आधी, मग and, नंतर or. संदिग्ध असेल तर कंस: (a > b) and (c < d).\n\n✗ not True and False — not आधी चालतो: not True → False, नंतर False and False → False. क्रम चुकला की निकाल चुकतो.",
      },
      {
        title: "Interactive: तर्क संयोजने",
        content: "चार संयोजने — प्रत्येकाचा निकाल आधी मनात ठरवा, मग output शी जुळवा.\\n\\nTrue and False or True — आधी and → False, मग or → True.\\nnot (True and False) — आत and → False, not → True.\\n3 > 2 and 5 > 4 — दोन्ही सत्य → True.\\n1 == 2 or 2 == 2 — पहिली खोटी, दुसरी सत्य → True.\\n\\nprint(True and False or True)\nprint(not (True and False))\nprint(3 > 2 and 5 > 4)\nprint(1 == 2 or 2 == 2)",
        code: `print(True and False or True)
print(not (True and False))
print(3 > 2 and 5 > 4)
print(1 == 2 or 2 == 2)`,
        codeLanguage: "python",
        output: `True
True
True
True`,
      },
      {
        title: "Mini Project — परीक्षा निकाल",
        content: "शाळेचा निकाल ठरवा — मार्क >= पास आणि हजेरी >= 75 दोन्ही हवेत; एक चुकलं तरी उत्तीर्ण नाही. मार्क 78, हजेरी 80, पास 40 घेतल्यास उत्तीर्ण True.\n\nपुनर्परीक्षा — not (मार्क >= पास) — फेल स्थितीची उलटी ओळख.\n\nअसाच and + not चा तर्क शाळा, क्रीडा, पदवी या सर्व निर्णयांमध्ये वापरला जातो.\n\nमार्क = 78\nहजेरी = 80\nपास = 40\nprint(\"उत्तीर्ण:\", मार्क >= पास and हजेरी >= 75)\nprint(\"पुनर्परीक्षा:\", not (मार्क >= पास))",
        code: `मार्क = 78
हजेरी = 80
पास = 40
print("उत्तीर्ण:", मार्क >= पास and हजेरी >= 75)
print("पुनर्परीक्षा:", not (मार्क >= पास))`,
        codeLanguage: "python",
        output: `उत्तीर्ण: True
पुनर्परीक्षा: False`,
      },
    ],
    practiceQuestions: [
      "and मध्ये दोन्ही काय हवे?",
      "or मध्ये काय?",
      "not True काय?",
      "परीक्षेचा निकाल कसा (मार्क >= 40 आणि उपस्थिती >= 75%)?",
    ],
    quiz: [
      {
        question: "True and False = ?",
        options: ["True", "False", "error", "None"],
        correct: 1,
      },
      {
        question: "False or False = ?",
        options: ["True", "False", "error", "None"],
        correct: 1,
      },
      {
        question: "not False = ?",
        options: ["True", "False", "error", "None"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "वय आणि पासcode घ्या. वय >= 18 आणि पासcode \"pass123\" असेल तर True दाखवा.",
      starterCode: `वय = int(input("वय: "))
पास = input("पासवर्ड: ")
print(वय >= 18 and पास == "pass123")`,
      expectedOutput: "वय: 21\nपासवर्ड: pass123\nTrue",
    },
    interviewQuestions: [
      "and, or, not का वापरतात?",
      "not चा order कोणता?",
      "दोन conditions एकत्र कसे करता?",
    ],
    related: ["python-operators-comparison", "python-if", "python-operators-others"],
    prev: "python-operators-comparison",
    next: "python-operators-others",
  },

  {
    slug: "python-operators-others",
    categoryId: "python",
    title: "Assignment, Membership, Identity Operators",
    marathiTitle: "Assignment, Membership, Identity operators",
    level: "beginner",
    minutes: 12,
    summary: "Assignment operators (+=, -=), membership (in), identity (is) शिका.",
    levelLabel: L1_LABEL,
    sections: [
      {
        title: "Assignment, Membership, Identity operators म्हणजे काय?",
        content: "Assignment operators (+=, -=), membership (in), identity (is) शिका.\nया धड्यात operator च्या शेवटच्या तीन श्रेणी येतात — assignment, membership आणि identity.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Assignment, Membership, Identity operators चे फायदे आणि महत्त्व",
        content: "\"Assignment, Membership, Identity operators\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "तीन operator श्रेणी",
        content: "या धड्यात operator च्या शेवटच्या तीन श्रेणी येतात — assignment, membership आणि identity.\n\nAssignment — value ठेवणे व बदलणे: =, +=, -=, *=. Membership — एखादी गोष्ट group मध्ये (string, list) आहे का: in, not in. Identity — दोन variable एकच object आहेत का: is.\n\nतीनहींची कामे वेगळी, पण दैनंदिन कोडमध्ये सर्वांत वारंवार वापरल्या जाणाऱ्या.\n\nही पूर्तता झाली की operators चे ज्ञान जवळजवळ पूर्ण — पुढे strings आणि control flow ची वाट सुरू होते.",
      },
      {
        title: "Assignment operators — value बदलणे",
        content: "x = 5 ठेवल्यावर x += 2 म्हणजे x = x + 2 — निकाल 7. अशा छोट्या नोंदीने variable ची value अपडेट होते.\n\nx -= 1 म्हणजे x = x - 1; x *= 3 म्हणजे x = x * 3; x /= 2 म्हणजे x = x / 2 — निकाल float.\n\nअसे operators score, बिल, एकूण गणताना सर्वत्र लागतात — कोड लहान आणि वाचायला सोपा होतो.\n\nx = 5\nx += 2\nprint(x)\nx -= 1\nprint(x)\nx *= 3\nprint(x)",
        code: `x = 5
x += 2
print(x)
x -= 1
print(x)
x *= 3
print(x)`,
        codeLanguage: "python",
        output: `7
6
18`,
      },
      {
        title: "Membership — in आणि not in",
        content: "in operator विचारतो — ही गोष्ट या group मध्ये आहे का? निकाल True/False. string मध्ये अक्षर, list मध्ये घटक — दोन्ही तपासता येतात.\n\nnot in उलट — गोष्ट group मध्ये नाही का ते सांगतो. 5 not in [1, 2, 3] → True.\n\nहेच operators पुढील if धड्यात forms मध्ये नाव आणि परवानगी तपासणीसाठी वापरले जातील.\n\nprint(\"a\" in \"apple\")\nprint(\"x\" in \"apple\")\nprint(2 in [1, 2, 3])\nprint(5 not in [1, 2, 3])",
        code: `print("a" in "apple")
print("x" in "apple")
print(2 in [1, 2, 3])
print(5 not in [1, 2, 3])`,
        codeLanguage: "python",
        output: `True
False
True
True`,
      },
      {
        title: "Identity — is",
        content: "is object ची ओळख पाहतो; == value ची समानता पाहतो. a = [1, 2] आणि b = [1, 2] — values समान, पण दोन वेगळे objects.\n\na == b → True (values समान). a is b → False (वेगळे objects). c = a केल्यावर c ही a च same object — a is c → True.\n\nनियम — value तुलना == ने; object तुलना is ने. is सहसा None सारख्या खास values साठी वापरतात, numbers वर नाही.\n\na = [1, 2]\nb = [1, 2]\nc = a\nprint(a == b)\nprint(a is b)\nprint(a is c)",
        code: `a = [1, 2]
b = [1, 2]
c = a
print(a == b)
print(a is b)
print(a is c)`,
        codeLanguage: "python",
        output: `True
False
True`,
      },
      {
        title: "वास्तविक जीवनातील उदाहरण — चेकलिस्ट",
        content: "रात्रीच्या तपासणीची चेकलिस्ट — पास, बॅग, फोन. in ने वस्तू आहे का ते स्पष्ट होते; टोटल += 5 व += 10 ने एकूण जमा होतो.\n\nएकाच program मध्ये membership आणि assignment दोन्ही — सुरक्षा तपासणी व गणना एकत्र. टोटल += असा account कुठेही चालतो — games, bills, forms; हेच operators office software मध्ये रोज असतात.\n\nचेकलिस्ट = [\"पास\", \"बॅग\", \"फोन\"]\nprint(\"फोन आहे:\", \"फोन\" in चेकलिस्ट)\nprint(\"ताबा:\", \"पिस्तूल\" in चेकलिस्ट)\n\nटोटल = 0\nटोटल += 5\nटोटल += 10\nprint(\"एकूण:\", टोटल)",
        code: `चेकलिस्ट = ["पास", "बॅग", "फोन"]
print("फोन आहे:", "फोन" in चेकलिस्ट)
print("ताबा:", "पिस्तूल" in चेकलिस्ट)

टोटल = 0
टोटल += 5
टोटल += 10
print("एकूण:", टोटल)`,
        codeLanguage: "python",
        output: `फोन आहे: True
ताबा: False
एकूण: 15`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ = आणि == मिसळणे — = value ठेवतो, == तुलना करतो. 5 = 5 लिहिताच error.\n\n✗ is ला value तुलनेसाठी वापरणे — numbers वर is चा परिणाम आश्चर्यकारक येऊ शकतो; value तुलना नेहमी == ने.\n\n✗ membership ची चुकीची syntax — in च्या उजवीकडे string किंवा list हवी: 5 in [1, 2, 3].\n\n✗ स्मरणपट्टी — = assignment, == value तुलना, is object ओळख, in group शोध. चार अर्थ वेगळे ठेवा.",
      },
      {
        title: "Interactive: list आणि assignment एकत्र",
        content: "names list मध्ये विलास, सायली, राहुल — membership तपासा; x = 5 नंतर += 3 व *= 2 ने value बदला.\n\n\"सायली\" in names → True; \"सायली\" not in names → False. x: 5 → 8 → 16 — अंतिम output 16.\n\nप्रत्येक output मागे कोणता operator आहे ते ओळखण्याची सवय — हीच interactive ची मांडणी.\n\nnames = [\"विलास\", \"सायली\", \"राहुल\"]\nprint(\"सायली\" in names)\nprint(\"सायली\" not in names)\nx = 5\nx += 3\nx *= 2\nprint(\"अंतिम:\", x)",
        code: `names = ["विलास", "सायली", "राहुल"]
print("सायली" in names)
print("सायली" not in names)
x = 5
x += 3
x *= 2
print("अंतिम:", x)`,
        codeLanguage: "python",
        output: `True
False
अंतिम: 16`,
      },
      {
        title: "Mini Project — स्कोअर गणना",
        content: "गेमच्या स्कोअरची गणना करा — score 0 पासून, += 10 (धाव), += 5 (बोनस), *= 2 (दुप्पट).\n\nअंतिम स्कोअर 30; शेवटी membership — score in [25, 30, 35] → True — assignment आणि membership एकाच project मध्ये.\n\nअसा pattern games च्या scoring systems मध्ये नेहमीच असतो; पुढील strings धड्यासाठी हीच तयारी.\n\nscore = 0\nscore += 10\nscore += 5\nscore *= 2\nprint(\"स्कोअर:\", score)\nprint(score in [25, 30, 35])",
        code: `score = 0
score += 10
score += 5
score *= 2
print("स्कोअर:", score)
print(score in [25, 30, 35])`,
        codeLanguage: "python",
        output: `स्कोअर: 30
True`,
      },
    ],
    practiceQuestions: [
      "x += 5 म्हणजे काय?",
      "in operator काय तपासतो?",
      "is आणि == मध्ये फरक?",
      "list मध्ये सायली आहे का तपासा",
    ],
    quiz: [
      {
        question: "x += 5 म्हणजे काय?",
        options: ["x = 5", "x = x + 5", "x == 5", "x - 5"],
        correct: 1,
      },
      {
        question: "\"a\" in \"apple\" निकाल काय?",
        options: ["True", "False", "error", "apple"],
        correct: 0,
      },
      {
        question: "is operator काय तपासतो?",
        options: ["value", "object reference", "type", "length"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एक variable score=0 ठेवा. quiz मध्ये गुण जोडा: += प्रत्येक 10, 5, 20. मग एकतरी score list स्वीकारणाऱ्या list ची तपासणी करा.",
      starterCode: `score = 0
score += 10
score += 5
score += 20
print("बोनस नंतर:", score)
print(score in [30, 35, 40])`,
      expectedOutput: "बोनस नंतर: 35\nTrue",
    },
    interviewQuestions: [
      "assignment operators म्हणजे काय?",
      "in operator कुठे उपयुक्त?",
      "is vs == फरक?",
    ],
    related: ["python-operators-logical", "python-lists", "python-variables"],
    prev: "python-operators-logical",
    next: "python-if",
  },
];
