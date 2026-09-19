import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 6 — Advanced Python (प्रगत Python) ===
export const L6_LABEL = "Level 6 — Advanced Python (प्रगत Python)";

export const pythonLevel6: Tutorial[] = [
  {
    slug: "python-comprehensions",
    categoryId: "python",
    title: "Advanced Comprehensions",
    marathiTitle: "Comprehensions - प्रगत रचना",
    level: "advanced",
    minutes: 16,
    summary: "list, dict व set comprehension मध्ये नेस्टेड loops, conditions आणि walrus operator.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Comprehensions - प्रगत रचना म्हणजे काय?",
        content: "list, dict व set comprehension मध्ये नेस्टेड loops, conditions आणि walrus operator.\nComprehension म्हणजे list, dict किंवा set एका ओळीत तयार करणारी रचना.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Comprehensions - प्रगत रचना चे फायदे आणि महत्त्व",
        content: "✓ क्रम महत्त्वाचा: बाहेरचा for आधी, आतला नंतर.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "comprehension म्हणजे एका ओळीत संग्रह",
        content: "Comprehension म्हणजे list, dict किंवा set एका ओळीत तयार करणारी रचना. 'सगळ्या गुणांची दुप्पट करून नवी यादी' अशा साध्या रूपांतरासाठी loop लिहिण्याऐवजी comprehension थेट निकाल देतो. ही रचना Python मध्ये भरपूर वापरली जाते, म्हणून नीट समजून घेण्यासारखी आहे.\n\nतीन रूपे: list comprehension — [निकाल for घटक in संग्रह if अट], dict comprehension — {key: value for ...}, set comprehension — {expression for ...}. रचना तिन्हींची सारखी आहे; फरक कंस आणि निकालाच्या स्वरूपात आहे — list क्रमवार, dict key/value जोड्या, set वेगळे घटक.\n\nमूळ संग्रहात बदल होत नाही — प्रत्येक वेळी नवीन संग्रह तयार होतो. अट (if) ऐच्छिक आहे आणि नेहमी शेवटी येते.",
      },
      {
        title: "Syntax: expression, loop, condition",
        content: "रचनेचे तीन भाग: expression — प्रत्येक घटकावर काय करायचं, for loop — घटकांवरून फिरणं, आणि ऐच्छिक if — कोणते घटक निवडायचे. क्रम बदलता येत नाही: expression आधी, loop मध्ये, अट शेवटी.\n\nखाली nums मधील सम संख्या दुप्पट केल्या आहेत: [n * 2 for n in nums if n % 2 == 0]. if ने 2, 4, 6 निवडले आणि expression ने ते 4, 8, 12 केले.\n\nप्रत्येक भाग वेगळा करून पहा: n * 2 ऐवजी n लिहिलं तर संख्या तशाच येतात; if काढला तर सर्व संख्या येतात.",
        code: `nums = [1, 2, 3, 4, 5, 6]
doubles = [n * 2 for n in nums if n % 2 == 0]
print(doubles)`,
        codeLanguage: "python",
        output: `[4, 8, 12]`,
      },
      {
        title: "नेस्टेड loop — सपाट list",
        content: "संग्रहात संग्रह असल्यास (matrix सारखा) दोन for लिहितात — आतले सर्व घटक एका सपाट list मध्ये उतरवण्यासाठी. क्रम महत्त्वाचा: बाहेरचा for आधी, आतला नंतर.\n\nflat = [x for row in matrix for x in row if x % 2 == 0] — बाहेरून row एकेक करून येतो; आतला for तिच्यातील x फिरतो; if सम संख्या निवडतो. निकाल [2, 4, 6, 8].\n\nfor चा क्रम उलटा केला तर अर्थ बदलतो — बाहेरचा आणि आतला loop कोणता हे निकालाचा आकार ठरवतं.",
        code: `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [x for row in matrix for x in row if x % 2 == 0]
print(flat)`,
        codeLanguage: "python",
        output: `[2, 4, 6, 8]`,
      },
      {
        title: "dict comprehension — key: value जोड्या",
        content: "नवीन dict बनवण्यासाठी dict comprehension वापरतात. expression च्या जागी key: value जोडी लिहितात आणि square brackets ऐवजी curly braces घेतात.\n\nsquares = {i: i * i for i in range(1, 6)} — i एकेक ते 5 चालतो; प्रत्येकासाठी key i आणि value त्याचा वर्ग. निकाल {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}.\n\ndict मध्ये key वेगळ्या-वेगळ्या असतात; तीच key पुन्हा आली तर नवीन value जुन्या जागेवर बसते — इथे ते घडत नाही, कारण i वेगवेगळे आहेत.",
        code: `squares = {i: i * i for i in range(1, 6)}
print(squares)`,
        codeLanguage: "python",
        output: `{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}`,
      },
      {
        title: "set comprehension आणि walrus operator",
        content: "set comprehension — {expression for ...} — वेगळ्या घटकांचा संग्रह देतो; duplicate घटक आपोआप गळून पडतात. list मधील तेच घटक वेगळे करायचे असतील तर ही रचना एका ओळीत उत्तर देते.\n\nwalrus operator (:=) expression मध्येच मूल्य नोंदवतो आणि ते पुढे वापरता येतं — उदा. अटीमध्ये केलेली गणना दोनदा करावी लागत नाही. त्यासाठी कंसाचा वापर स्पष्टता देतो.\n\nwalrus कमी ठिकाणी योग्य असतो; comprehension चा उद्देश संग्रह सोपा बनवणे आहे, अवघड नाही. तेच काम साध्या comprehension ने होत असल्यास walrus टाळा.",
        code: `names = ["वेद", "मीरा", "वेद", "आरोही"]
unique = {n for n in names}
print(unique)`,
        codeLanguage: "python",
        output: `{'मीरा', 'वेद', 'आरोही'}`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ नेस्टेड comprehension मध्ये for चा क्रम उलट ठेवणे — बाहेरचा loop आधी लिहा; क्रम उलटल्यास निकाल वेगळ्या आकाराचा येतो.\n\n✗ expression मध्ये खूप तर्क एकत्र करणे — साधा धडा साधा ठेवा; जटिल असेल तर loop लिहा, वाचणं सोपं होतं.\n\n✗ set मध्ये mutable घटक टाकणे — set चे घटक immutable हवेत; list टाकल्यास TypeError येतो.\n\n✗ set च्या घटकांचा क्रम गृहीत धरणे — set चा क्रम ठरलेला नसतो.\n\nखाली names मधून लांबी 4 किंवा अधिक असलेली नावे निवडली आहेत — अट len(n) >= 4. आरोही आणि मीरा या निवडल्या गेल्या; वेद हे नाही, कारण त्याची लांबी 3.\n\nअट बदलून तपासा — >= 3 किंवा >= 5; output मधून अटीचा परिणाम लगेच दिसतो.",
        code: `names = ["वेद", "मीरा", "आरोही"]
long_names = [n for n in names if len(n) >= 4]
print(long_names)`,
        codeLanguage: "python",
        output: `['मीरा', 'आरोही']`,
      },
      {
        title: "Interactive: स्कोअर फिल्टर",
        content: "कृती: scores यादीतून 35 किंवा अधिक गुण असलेले स्कोअर निवडा. अट if s >= 35 शेवटी लिहिली आहे; ती पूर्ण करणारे घटकच नवीन list मध्ये येतात.\n\n35 ही सीमा output निवडते — 56, 89, 91 हे पास; 34 हा वगळला, कारण तो अटीबाहेर. प्रत्येक स्कोअर output शी जुळला तर अट कशी काम करते ते दिसतं.\n\nसीमा 40 केली की काय होतं मनात आधी ठरवा; मग कोड बदलून पडताळा. आकडे बदलल्यावर निकाल बदलतो — हीच comprehension ची खरी तपासणी.",
        code: `scores = [56, 89, 34, 91]
passed = [s for s in scores if s >= 35]
print(passed)`,
        codeLanguage: "python",
        output: `[56, 89, 91]`,
      },
      {
        title: "Mini Project: खरेदी सूची",
        content: "वस्तूंच्या किमती ठरलेल्या आहेत; 15 रुपयांपेक्षा महागड्या वस्तूंचा dict तयार करा.\n\nitems.items() मधून प्रत्येक (नाव, किंमत) जोडी येते; expression name: price जोडी ठेवतो आणि if price > 15 अट निवडते. दही (25) आणि वडापाव (30) उरतात; पोळी 10 रुपयांची असल्याने वगळली.\n\nहा निकाल पुढे कार्ट दाखवण्यासाठी किंवा बजेट ठरवताना वापरता येतो. सीमा बदलून तपासा — price > 20 केल्यास फक्त वडापाव उरेल.",
        code: `items = {"पोळी": 10, "दही": 25, "वडापाव": 30}
costly = {name: price for name, price in items.items() if price > 15}
print(costly)`,
        codeLanguage: "python",
        output: `{'दही': 25, 'वडापाव': 30}`,
      },
      {
        title: "if-else comprehension मध्ये — फिल्टर वि. सशर्त expression",
        content: "comprehension मध्ये अट दोन वेगवेगळ्या ठिकाणी येऊ शकते आणि तिचा परिणामही तसाच वेगळा होतो. पहिला प्रकार म्हणजे फिल्टर — अट शेवटी लिहिलेली, [x for x in संग्रह if अट]. इथे अट खोटी असेल तर तो घटक नव्या संग्रहातच येत नाही; म्हणून घटकांची संख्या कमी होते. उदा. फक्त सम संख्या हव्या असतील तर [n for n in nums if n % 2 == 0] लिहिलं; विषम संख्या पूर्णपणे वगळल्या गेल्या. हा नियम लक्षात ठेवा: फिल्टरमधील if म्हणजे 'पुढे जाऊ द्या की नका', एक खात्री वाहणारा दरवाजा.\n\nदुसरा प्रकार म्हणजे सशर्त expression — घटक वगळायचे नसतात, तर प्रत्येक घटकाला दोनपैकी एका रूपात रुपांतरित करायचे असते. तेव्हा expression च्या जागी if-else लिहितात: [x * 2 if x > 0 else 0 for x in nums]. या रचनेत प्रत्येक घटक नव्या संग्रहात येतो; फक्त अटीवरून त्याला कोणते मूल्य मिळेल हे expression ठरवतं. रूपांतरण होते, वगळणे होत नाही — हाच सार.\n\nएक वास्तविक उदाहरण: शाळेतील गुणांची यादी असू द्या; 35 पेक्षा कमी गुणांना शून्य दाखवायचं, बाकीचे गुण तसेच ठेवायचे. म्हणजे घटक कमी करायचे नाहीत, तर मूल्य बदलायचे आहे. तेव्हा [s if s >= 35 else 0 for s in scores] ही रचना लिहितात — expression मध्ये if-else. जर हे फिल्टरने करण्याचा प्रयत्न केला असता, तर नापास स्कोअर गायब झाले असते — काम वेगळं झालं असतं.\n\nसामान्य गोंधळ तीन प्रकारचा दिसतो. पहिला: फिल्टरच्या अटीला else जोडणे — ते Python च्या व्याकरणात बसत नाही; else फक्त expression मध्ये येतं. दुसरा: सशर्त expression मध्ये else विसरणे — तर तो वाक्य अर्धवट राहतो आणि SyntaxError मिळतो; if-else एकत्रच लिहावे लागतात. तिसरा: दोन्ही रचना एकच काम करतात असं गृहीत धरणे — फिल्टर संख्या कमी करतो, सशर्त expression मूल्य बदलतो; हा फरक अगदी मूळ आहे.\n\nस्वतःला प्रश्न विचारणे ही चांगली सवय: 'मला घटक वगळायचे आहेत की रूप बदलायचे आहे?' वगळायचे असतील तर शेवटी if, रूप बदलायचे असेल तर expression मध्ये if-else. उत्तर तयार झालं की रचना स्वतःच स्पष्ट होते. सराव म्हणून खाली उदाहरण पहा: ऋण संख्यांना शून्य, धन संख्यांना दुप्पट — प्रत्येक स्कोअर संग्रहात राहतो, पण मूल्य बदलतं.",
        code: `nums = [-2, 3, -1, 4, 5]
labels = [n * 2 if n > 0 else 0 for n in nums]
print(labels)`,
        codeLanguage: "python",
        output: `[0, 6, 0, 8, 10]`,
      },
      {
        title: "generator expression — लगेच नव्हे, हळू वाहणारा",
        content: "list comprehension ची जुळी बहिण म्हणजे generator expression. फरक फक्त कंसांचा: list comprehension ला [ ] लागतात, generator expression ला ( ) लागतात. उदा. (x * x for x in range(100)). दिसायला सारखं, पण वागणूक ठरत पाढा वेगळी — list comprehension सर्व mूल्ये लगेच memory मध्ये तयार करते; generator expression काहीही आधी तयार करत नाही, फक्त मागितल्यावर एक एक value देते.\n\nकल्पना स्पष्ट करूया. जर तुम्हाला दहा लाख संख्यांचे वर्ग हवे आहेत, तर list comprehension ने ते सर्व एकदाच memory मध्ये लोड होतील — मोठा खर्च. generator expression मात्र वर्ग एक एक करून देते; मागचा value विसरून पुढचा उपलब्ध करते. हीच स्मृती बचतीची ताकद. संख्यांचा संग्रह मोठा असेल, किंवा घटक एकदाच पुरे असतील, तेव्हा generator expression ही योग्य निवड आहे.\n\nप्रत्येक constructor फक्त एकदाच चालतो: for loop मध्ये ती घटक देत राहते आणि संपल्यावर थांबते. sum((x * x for x in range(10))) मध्ये ती बेरीज करताना हळूहळू value देत राहते — संपूर्ण list कुठेही बनत नाही. Python मध्ये कंस विसरल्यास sum(x * x for x in range(10)) असेही चालतं, कारण function call मध्ये generator expression ला स्वतःचा कंस लागतो.\n\nनिर्णय घेण्यासाठी नियम: परिणाम एकापेक्षा जास्त वेळा पाहायचा असेल, तर list comprehension — कारण त्यातून पुन्हा पुन्हा घटक मिळतात. परिणाम फक्त एकदाच झाकायचा असेल (बेरीज, गणना, एकदा चालवणे), तर generator expression — स्मृती वाचते. दोन्हीची रूपे सारखीच; उद्देश वेगळा.\n\nसमजून घेण्यासाठी आणखी एक गोष्ट: generator expression ला list() लावून संग्रहात बदलता येतो. शिवाय next() ने एक एक मूल्य हातात घेता येते. सवय म्हणून डोक्यात ठेवा — नावात expression असले तरी ती संग्रह नव्हे, तो एक कारखाना आहे जो मागणीनुसार नवा घटक पाडतो. हीच संकल्पना L6 मधील generators या धड्यात पुढे विस्तारून शिकाल; इथे तिची ओळख होते.",
        code: `squares_gen = (n * n for n in range(5))
print(squares_gen)
print(list(squares_gen))`,
        codeLanguage: "python",
        output: `<generator object <genexpr> at 0x...>
[0, 1, 4, 9, 16]`,
      },
      {
        title: "enumerate आणि zip — दोन संग्रह एकत्र",
        content: "बर्याच वेळा सुलभ comprehension साठी संग्रहासोबत जोडी किंवा निर्देशांक unusually हवा असतो. या दोन built-in function — enumerate आणि zip — त्या जोडी तयार करतात.\n\nenumerate(संग्रह) प्रत्येक घटकाला क्रमांक जोडतो: for i, ch in enumerate(\"मराठी\") इथे i 0, 1, 2 असा आणि ch म, र, ा, ठी असे अक्षरे. dict comprehension मध्ये हे सोनेरी ठरतं: {i: ch for i, ch in enumerate(letters)} — क्रमांक आणि अक्षराची जोडी झटकन dict बनते. क्रमांक शून्यापासून सुरू होतो हे लक्षात ठेवा.\n\nzip(संग्रहA, संग्रहB) दोन संग्रहांच्या घटकांच्या जोड्या बनवतो: zip([\"आरोही\", \"वेद\"], [90, 85]) मिळून (\"आरोही\", 90) आणि (\"वेद\", 85) या दोन जोड्या. dict comprehension मध्ये हे नक्कीच उपयोगी: {name: score for name, score in zip(names, scores)} — दोन स्वतंत्र याद्या एकत्र करून एक dict तयार होतं. दोन याद्या — नावे आणि गुण — parallel ठेवणे सोडून त्यांची जोडी म्हणून नोंद होते.\n\nजर दोन्ही संग्रह समान लांबीचे नसतील, तर zip जितके घटक pair होतील तितक्याच जोड्या देतो — उरलेले घटक सोडले जातात. कंसातील for k, v in ... अशी जोडी उघडणे (unpacking) या तंत्राचा कणा आहे.\n\nउदाहरण पहा: वस्तू आणि किमती या दोन सूची आहेत. किंमत 15 पेक्षा जास्त असलेल्या वस्तूंचा केवळ dict बनवायचा आहे. zip ने जोड्या बनवल्या आणि comprehension ने अट लावली — एकच ओळ काम उरकते. यातून kill दिसतो: comprehension घटक निवडणे, जोडणे आणि फिल्टर करणे — तीन कामे एकत्र करू शकतो.",
        code: `names = ["आरोही", "वेद"]
scores = [90, 85]
report = {name: score for name, score in zip(names, scores)}
print(report)`,
        codeLanguage: "python",
        output: `{'आरोही': 90, 'वेद': 85}`,
      },
      {
        title: "walrus operator (:=) — assignment expression खोलवर",
        content: "कोणत्याही expression च्या मध्येच मूल्याला नाव द्यायचं असेल, तर walrus operator — symbol (:=) — वापरतात. फिल्टरमध्ये गणना एकदाच करून तीच wash संग्रहात ठेवायची असेल, तेव्हा ही सोय कामी येते.\n\nउदाहरण: प्रत्येक संख्येचा वर्ग मोजून 50 पेक्षा मोठे वर्ग निवडायचे आहेत. साध्या comprehension मध्ये तेच expression दोनदा लिहावे लागते: [n * n for n in nums if n * n > 50]. पण walrus ने एकदाच मोजून ते देता येते: [sq for n in nums if (sq := n * n) > 50]. फिल्टरमध्ये sq ची गणना होते आणि नंतर expression मध्ये sq थेट वापरतो — दुप्पट गणना टाळली.\n\nकंस अत्यावश्यक: फिल्टरच्या अटीमध्ये (sq := n * n) असा कंस लावल्याशिवाय precedence ची गोंधळ उडतो; तुलना (>) आधी कार्यान्वित होण्याचा धोका असतो. म्हणून नेहमी कंसांत लिहा — ही चांगली सवय.\n\nपण जपा: walrus मध्ये वापरलेला प्रत्येक अतिरिक्त कोड वाचण्यासाठी अवघड बनतो. comprehension चा खरा सोबती नाही तर बच वापर — फक्त तिथे लावा जिथे expression दोनदा मोजणे खरोखर महाग आहे, किंवा गणनेत कोणतीही दुष्परिणाम नको असेल तर. म्हणून या operator ला विशेष 'assignment expression' असंही म्हणतात — तो मूल्य देतो आणि ठेवतो, दोन्ही.\n\nand नियमानुसार, walrus कोडच्या बाहेर वापरणेही कधी कधी उपयोगी ठरते — मग तुम्ही गणना करून ती पुढे वापरणे एकाच ओळीत साध्य करता. पण comprehension चा उद्देश संग्रह सोपा बनवणे आहे; त्यामुळे जटिल walrus तर्क दिसला की डोक्यात विचार करा — कदाचित loop अधिक वाचनीय असेल. शिस्त आणि सराव या दोन्हींनी हा operator हाताशी होतो.",
        code: `nums = [6, 7, 8, 9]
big = [sq for n in nums if (sq := n * n) > 50]
print(big)`,
        codeLanguage: "python",
        output: `[64, 81]`,
      },
      {
        title: "नेस्टेड comprehension — रुंद मॅट्रिक्स रचना",
        content: "नेस्टेड comprehension म्हणजे comprehension च्या आत आणखी comprehension — बाहेरील loop आणि आतला loop. दोन for च्या मालिकेपेक्षा ही रचना वेगळी आहे: तिथे दोन्ही loops एकाच स्तरावर असतात. दोन for असलेला comprehension — [x for row in matrix for x in row] — सपाट सूची बनवतो. पण बाहेरील for च्या आत आणखी एक comprehension लिहिला, तर परिणाम मॅट्रिक्स (shelf of rows) म्हणजे दोन स्तरांचा संग्रह राहतो.\n\nउत्तम उदाहरण मॅट्रिक्स transpose. matrix = [[1, 2, 3], [4, 5, 6]] असला तर त्याचा transpose [[1, 4], [2, 5], [3, 6]] असतो — रांगा स्तंभ बनतात आणि स्तंभ रांगा. transpose = [[row[i] for row in matrix] for i in range(3)]. बाहेरचा for स्तंभ निर्देशांक i देतो; आतला comprehension सगळ्या रांगांमधून i वा घटक गोळा करतो — म्हणजे एक नवीन स्तंभ.\n\nवाचताना दिशा ठरते: expression आधी, बाहेरचा for मध्ये, आतला for शेवटी. जसजशी रचना रुंद होते, तसतशी वाचणी कठीण होते — म्हणून जटिलता तपासा. दोन पातळ्या माफक आहेत; तीन होईपर्यंत ती स्वच्छता धोक्यात येते.\n\nहे बारकाईने पहा: आतला comprehension संपूर्ण matrix प्रत्येक i साठी दोनदा वाचतो. म्हणून output काय येईल हे आधी मनात ठरवून मग कोड वाचा — खाली matrix चा transpose privilege दिसतो. वाचण्याची पद्धत: 'प्रत्येक स्तंभासाठी, प्रत्येक रांगेत त्या स्थानाचा घटक.' अशी वाक्ये तयार करणे अभ्यासाला पुरते पडते.",
        code: `matrix = [[1, 2, 3], [4, 5, 6]]
transposed = [[row[i] for row in matrix] for i in range(3)]
print(transposed)`,
        codeLanguage: "python",
        output: `[[1, 4], [2, 5], [3, 6]]`,
      },
      {
        title: "comprehension वि. loop — वाचनीयता आणि कार्यक्षमता",
        content: "comprehension आणि for loop यांच्यात निवड करताना तीन नियम लक्षात ठेवा. पहिला — साधे रूपांतरण: comprehension लिहायला सोपे, वेगवान आणि एका ओळीत. दुसरा — जटिल तर्क: तीन-चार अटी, दुष्परिणाम (function जी print करते), किंवा खूप नेस्टिंग असेल तर loop वाचण्यास स्वच्छ ठरतो. तिसरा — mixed कामे: comprehension मध्ये अनेक कामे एकत्र करणे शक्य आहे, पण ते म्हणजेच वाचण्याची अडचण वाढवणे.\n\nकार्यक्षमतेची बाब: comprehension सामान्यतः loop च्या तुलनेत जलद असतो, कारण आत्मबल C स्तरावर प्रक्रिया होते आणि list.append चा खर्च कमी होतो. दहा लाख घटकांवर हा फरक दिसतो; हजार घटकांवर काहीही नसतो. त्यामुळे 'नेहमी comprehension' असा एकांगी नियम घेऊ नका — प्रथम वाचनीयता.\n\nदुसरा महत्त्वाचा मुद्दा: comprehension मध्ये debugging कठीण. display च्या आत break point किंवा print टाकता येत नाही (expression मध्ये statement नको). loop मध्ये मात्र प्रत्येक टप्प्यावर निरीक्षण शक्य आहे. त्यामुळे नवीन किंवा गुंतागुंतीचा तर्क आणत असताना loop ने लिहा, परिणाम निश्चित केल्यावर comprehension मध्ये compact करा.\n\nशेवटचा मुद्दा — कोड review च्या दृष्टीने: सहकारी वाचताना तात्काळ समजेल अशी रचना निवडा. कधी कधी comprehension चा एक ओळ तर्क 5 ओळींच्या loop पेक्षा अवघड वाटतो. नियम घ्या: रूपांतरण किंवा फिल्टर साधं असेल तर comprehension; जटिलतेची चिन्हे दिसली की loop. दोन्ही तंत्रे पक्की असल्याशिवाय खऱ्या 'tool' ची मालकी मिळत नाही.", 
        code: `numbers = range(1, 6)
squares = [n ** 2 for n in numbers if n % 2 == 1]
print(squares)`,
        codeLanguage: "python",
        output: `[1, 9, 25]`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "या धड्यात comprehension च्या सर्व कडा उलगडल्या. तत्त्व: expression आधी, for loops मध्ये, अट (if) शेवटी. फिल्टर घटक वगळतो, while सशर्त expression (if-else) मूल्य बदलते — हा प्राथमिक फरक सदैव लक्षात ठेवा. list, dict, set आणि generator expression — चार रूपे, सारखी मूळ रचना, निकालाची रूपे वेगळी.\n\nयेत्या परीक्षेसाठी सवय म्हणून सारंगी करा: लहान संग्रह घेऊन प्रत्येक रचना मनात भाषांतरित करा — बाहेरील loop कोणता, आतला कोणता. dict comprehension मध्ये key: value जोडी expression मानून वाचा; set मध्ये duplicate गळून जातो हे लक्षात ठेवा. walrus ठिकठिकाणी जाणूनबुजून लावा आणि कंस न लावल्यास काय होतं ते पहा — हीच खरी तपासणी.\n\nस्वतःला प्रश्न विचारा: नेस्टेड loop चा क्रम उलटला तर आकार कसा बदलतो? zip आणि enumerate चा फरक काय? generator expression ची स्मृती बचत का होते? या प्रश्नांची उत्तरे मनात अचूक असल्यास comprehension चे चित्र स्पष्ट झाले.\n\nमोठ्या projects मध्ये data transformation — प्रत्येक value बदलणे, फिल्टर करणे, दोन संग्रह जोडणे — रोजचा विषय आहे. comprehension ही त्या कामाची सर्वात थेट हत्यार. एका खरे सबंधा उदाहरण: CSV मधून वाचलेल्या ओळी, त्यातील आकडे, फिल्टर — सर्व one-liner मध्ये. पुढील lessons मध्ये functions, map/filter आणि itertools मध्येही हीच शैली दिसते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "पुढील प्रगतीसाठी फक्त Python च्या अधिकृत संसाधनांची माहिती खाली दिली आहे — तुमच्या आवडीच्या topic साठी बुकमार्क करून ठेवा:\n\n• list comprehensions अधिकृत tutorial: https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions\n• comprehensions मागील reference (displays): https://docs.python.org/3/reference/expressions.html#displays-for-lists-sets-and-dictionaries\n• list आणि tuples संदर्भ: https://docs.python.org/3/tutorial/datastructures.html\n• dict comprehension संदर्भ: https://docs.python.org/3/tutorial/datastructures.html#dictionaries\n• set types संदर्भ: https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset\n• walrus operator चा PEP 572: https://peps.python.org/pep-0572/\n• assignment expressions संदर्भ: https://docs.python.org/3/reference/expressions.html#assignment-expressions\n• built-in functions (enumerate, zip, map, filter): https://docs.python.org/3/library/functions.html\n• interactive tutorial: https://docs.python.org/3/tutorial/appetite.html\n• Python अधिकृत FAQ: https://docs.python.org/3/faq/programming.html\n\nहे सर्व दुवे फक्त अधिकृत Python documentation आणि python.org वरून आहेत; बाहेरील site च्या गरजेची नाही.",
      },
      {
        title: "Quick Practice: नावांची स्वच्छ यादी",
        content: "आता सर्व काही एकत्र वापरून प्रत्येक रचना थेट प्रत्यक्षात आणूया. उदाहरणासाठी गावातील चौकाचौकातील दुकानदार नावांची एक यादी घेऊ: नावांमध्ये मोठी-लहान अक्षरे, उभे ठिपके आणि भोवती रिकामी जागा आहे. कोणतीही नावे स्वच्छ करून एका standard रूपात आणायची आहेत — फक्त first अक्षर मोठे, बाकीचे छोटे.\n\nपहिला टप्पा: नावे lowercase करणे — name.lower() ही function प्रत्येक अक्षर छोटे करते. दुसरा टप्पा: अवांतर जागा काढणे — strip() नावाच्या दोन्ही बाजूंच्या रिकाम्या जागा तसेच ठिपके काढून टाकतो. तिसरा टप्पा: title case करणे — name.title() ने प्रत्येक शब्दाचे पहिले अक्षर मोठे होते. या तिन्ही गोष्टी एकाच expression मध्ये: [name.strip().title() for name in names].\n\nपरंतु अटही लावायची आहे — 4 किंवा जास्त अक्षरे नसतील अशी नावे वगळायची आहेत. म्हणून शेवटी if len(name) >= 4 जोडतो. रचना आता पूर्ण: स्वच्छ, मोठे, पुरेशी लांब — सर्व काही comprehension नेच एका ओळीत. ही एक आदर्श जोड — प्रत्येक घटकावर रूपांतरण आणि अट. याच तंत्राने आयात केलेल्या CSV फाईलची नावे, वापरकर्त्यांची नावे, ग्राहकांची यादी आणि असंख्य डेटा स्वच्छ करणे सोपे होते.\n\nआणखी एक छोटा प्रयोग करायला विसरू नका: त्याच रचनेला dict comprehension मध्ये बदला — नाव आणि त्याच्या अक्षरांची संख्या एकत्र ठेवा. तुम्हाला एक ओळ बदलायला मिळाली म्हणजे नक्कीच मनातला फरक स्पष्ट होतो. प्रत्येक वेळी output वरून तुमची कल्पना तपासा — comprehension मध्ये केलेला प्रत्येक प्रयोग खऱ्या शिक्षणाचा भाग आहे.",
        code: `names = ["   वेद  ", "मीरा ", "आरोही", "रु"]
clean = [n.strip().title() for n in names if len(n.strip()) >= 2]
print(clean)`,
        codeLanguage: "python",
        output: `['वेद', 'मीरा', 'आरोही']`,
      },
    ],
    practiceQuestions: [
      "comprehension मधील nested loop चा क्रम?",
      "dict comprehension ची रचना?",
      "if comprehension मध्ये कुठे लिहितात?",
      "set comprehension मध्ये काय होतं?",
    ],
    quiz: [
      { question: "list comprehension ची मूल रचना?", options: ["[x for x in it]", "{x for x in it}", "(x for x in it)", "x in it"], correct: 0 },
      { question: "condition कुठे येतं?", options: ["शेवटी", "सुरुवातीला", "loop च्या आत", "कुठेही"], correct: 0 },
      { question: "dict comprehension मध्ये काय असतं?", options: ["key: value", "क२ only", "value only", "tuple"], correct: 0 },
    ],
    challenge: {
      prompt: "3 अक्षरांपेक्षा मोठे शब्द निवडा.",
      starterCode: `words = ["Python", "Go", "Java", "C"]
print([w for w in words if len(w) > 2])`,
      expectedOutput: "['Python', 'Java']",
    },
    interviewQuestions: [
      "nested comprehension कसा वाचतात?",
      "walrus operator कधी वापरता?",
    ],
    related: ["python-oop-project", "python-functions-advanced", "python-lists"],
    prev: "python-oop-project",
    next: "python-functions-advanced",
  },

  {
    slug: "python-functions-advanced",
    categoryId: "python",
    title: "Functions as Objects",
    marathiTitle: "Functions - खऱ्या वस्तूंसारख्या",
    level: "advanced",
    minutes: 14,
    summary: "functions ही object — argument म्हणून द्या, list मध्ये ठेवा, map/filter ने वापरा.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Functions - खऱ्या वस्तूंसारख्या म्हणजे काय?",
        content: "functions ही object — argument म्हणून द्या, list मध्ये ठेवा, map/filter ने वापरा.\nPython मध्ये function ही इतर मूल्यांसारखीच एक मूल्य आहे — संख्या, string प्रमाणे तिला variable मध्ये ठेवता येतं, list मध्ये जोडता येतं आणि दुसऱ्या function ला argument म्हणून देता येतं.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Functions - खऱ्या वस्तूंसारख्या चे फायदे आणि महत्त्व",
        content: "✓ फरक महत्त्वाचा: add म्हणजे function स्वतः, add(2, 3) म्हणजे तिला चालवून मिळालेला निकाल.\n✓ lambda फक्त शॉर्टकट आहे; तर्क जटिल झाला की def लिहा — वाचणं अनेकदा गरजेचं असतं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "function ही object — याचा अर्थ काय?",
        content: "Python मध्ये function ही इतर मूल्यांसारखीच एक मूल्य आहे — संख्या, string प्रमाणे तिला variable मध्ये ठेवता येतं, list मध्ये जोडता येतं आणि दुसऱ्या function ला argument म्हणून देता येतं.\n\nfunction चं नाव लिहिलं की तिचा दुवा मिळतो; नावामागे () लावलं की ती चालते. फरक महत्त्वाचा: add म्हणजे function स्वतः, add(2, 3) म्हणजे तिला चालवून मिळालेला निकाल.\n\nहा सगळा पाया उच्च-स्तरीय (higher-order) function चा आहे — map, filter सारखी साधने function ला argument म्हणूनच घेतात.",
      },
      {
        title: "Syntax: function variable मध्ये",
        content: "def ने बनवलेल्या function ला नावाशिवाय दुसरा दुवा ठेवता येतो: shout = make_shout. म्हणजे तीच function दोन नावांनी ओळखता येते — make_shout(\"python\") आणि shout(\"python\") एकच output देतात.\n\nfunction ला list मध्येही टाकता येतं, म्हणून एकाच क्रमाने function निवडून चालवता येतं. नाव (%), (), नाव दोन्हीचे वापर सरावात पक्के करा.\n\nत्यामुळे कधी function ला, कधी तिचा निकाल हवा — याचा फरक लक्षात राहो: नाव = function, नाव() = निकाल.",
        code: `def make_shout(text):
    return text.upper() + "!"

shout = make_shout
print(shout("python"))`,
        codeLanguage: "python",
        output: `PYTHON!`,
      },
      {
        title: "function argument म्हणून — map आणि filter",
        content: "map(function, संग्रह) प्रत्येक घटकावर function चालवून नवीन निकालांचा iterator देतो. filter(function, संग्रह) function ज्या घटकांसाठी True देतो तेच ठेवतो.\n\nmap आणि filter ने दिलेलं उत्तर iterator असतं; list() लावल्यावरच सूची म्हणून पाहता येतं. खाली lambda ने function च वेळेपेक्षा छोटी दिली आहे.\n\nnumbers मधून वर्ग (square) आणि सम संख्या निवडतो. list(map(...)) ने output सरळ list स्वरूपात येतो.",
        code: `numbers = [7, 2, 9, 4]
squares = list(map(lambda x: x * x, numbers))
evens = list(filter(lambda n: n % 2 == 0, numbers))
print(squares)
print(evens)`,
        codeLanguage: "python",
        output: `[49, 4, 81, 16]
[2, 4]`,
      },
      {
        title: "वास्तविक उदाहरण: function दुसऱ्याला देणे",
        content: "apply ही function दोन argument घेते: एक value आणि एक function. ती त्या function ला value वर चालवते आणि निकाल परत करते.\n\napply(square, 3) म्हणजे square(3) — म्हणून 9. apply(double, 5) म्हणजे double(5) — म्हणून 10. function नाव argument म्हणून गेलं आहे, तिचा निकाल नाही.\n\nहाच शक्यता list मधील सर्व function वर एकत्र लावायची म्हणजे फाईल कोणती प्रक्रिया द्यायची हे निवडण्यासाठी वरची सोय आहे.",
        code: `def apply(func, value):
    return func(value)

def square(x):
    return x * x

def double(x):
    return x * 2

print(apply(square, 3))
print(apply(double, 5))`,
        codeLanguage: "python",
        output: `9
10`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ function नाव () शिवाय लिहून निकाल अपेक्षणे — नाव हा function चा संदर्भ आहे; () हे तिला चालवणं.\n\n✗ map नंतर list() न लावणे — output <map object ...> दिसतो, कारण iterator पाहायला list() हवी.\n\n✗ filter मध्ये else नसणे सांगून काढणे — filter फक्त True घटक ठेवतो; else हा filter चा भाग नाही.\n\n✗ दोन function एकाच नावाने — दुसरी define केली की पहिली हरवते; functions.py मध्ये फक्त तीच ठेवता येते.\n\nखाली funcs ही function list परत करते; funcs()[0] म्हणजे तीच list चा पहिला element — low function. \"HELLO\" वर low चालल्याने hello येतं.",
        code: `def funcs():
    return [lambda x: x.lower(), lambda x: x.upper()]

print(funcs()[0]("HELLO"))`,
        codeLanguage: "python",
        output: `hello`,
      },
      {
        title: "lambda — एक-ओळीची function",
        content: "lambda हे नावाविना function बनवण्याचं छोटं रूप. def ने definition लिहावी लागेल अशा साध्या जागी lambda एका ओळीत काम उरकतं.\n\nरचना: lambda arguments: expression — उदा. lambda x: x * 2. expression ही ठरावीक statement नाही — म्हणजे return, print अशा क्रिया lambdामध्ये येत नाहीत.\n\nlambda फक्त शॉर्टकट आहे; तर्क जटिल झाला की def लिहा — वाचणं अनेकदा गरजेचं असतं.",
        code: `add = lambda a, b: a + b
print(add(3, 4))`,
        codeLanguage: "python",
        output: `7`,
      },
      {
        title: "Interactive: map सह खेळणे",
        content: "कृती: words मधील प्रत्येक शब्द वरचा (upper) करा. map प्रत्येक शब्दाला w उत्तर देतं आणि list() ने ते सूचीत बदलते.\n\nlambda w: w.upper() ही function प्रत्येक शब्द सुद्धा करतील — \"python\" → \"PYTHON\", \"marathi\" → \"MARATHI\", \"code\" → \"CODE\".\n\nशब्द बदलून किंवा दुसरं क्रिया लावून पहा — map ने function बदलताच output बदलतं हे दिसतं.",
        code: `words = ["python", "marathi", "code"]
print(list(map(lambda w: w.upper(), words)))`,
        codeLanguage: "python",
        output: `['PYTHON', 'MARATHI', 'CODE']`,
      },
      {
        title: "Mini Project: क्रिया निवडणे",
        content: "dict मध्ये function दुवे ठेवता येतात — key म्हणजे क्रियेचं नाव, value म्हणजे function स्वतः. त्यामुळे निवडलेली क्रिया लगेच चालवता येते.\n\nactions[\"add\"] ने बेरीज करणारी lambda मिळते आणि (3, 4) चालवल्यावर 7 मिळतात. actions[\"mul\"] ने गुणाकार करणारी — 12.\n\nहेच तत्त्व मोठ्या programs मध्ये वापरतात; वेगवेगळ्या उपायाच्या function ठरवून मुख्य कोड मध्ये key निवडायला वापरतात.",
        code: `actions = {
    "add": lambda a, b: a + b,
    "mul": lambda a, b: a * b,
}
op = actions["add"]
print(op(3, 4))
print(actions["mul"](3, 4))`,
        codeLanguage: "python",
        output: `7
12`,
      },
      {
        title: "function नाव म्हणजे संदर्भ — खोड नव्हे",
        content: "Python मध्ये प्रत्येक नाव हा value कडे नेणारा संदर्भ (reference) असतो. function च्या बाबतीतही तेच: def greet(): लिहिताना greet या नावाची गाठ — किंवा संदर्भ — function वस्तूला जोडली जाते. त्यामुळे greet म्हणजे function स्वतः, तर greet() म्हणजे तिला चालवून मिळालेला निकाल. हा भेद दृढ मनात बसवता येण्यासारखा सोपा पण अनेक चुकांचे मूळ आहे.\n\nया संदर्भामुळे नावे देवघेव करता येतात — म्हणजे एकाच function ला दोन किंवा अधिक नावे देता येतात. उदा. def salutation(msg): ... लिहिल्यास tamila ला अजून एक नाव hello = salutation देता येते. आता hello(\"मित्र\") आणि salutation(\"मित्र\") दोन्ही एकच function चालवतात. असं नाव देवाणघेवाण list साठी उपयुक्त ठरते — function च्या सूचीतून निवड करणे.\n\nजर कोणी नावाला दुसरे function दिले, तर पहिला संदर्भ हरवतो — def tweeter(): ...; tweeter = lambda: \"sync\" असा कोड पहिली व्याख्या उपेक्षतो. म्हणून एकाच scope मध्ये एका नावाने दोन function व्याख्या न करणे, हा नियम. file मध्ये तरी फक्त शेवटची व्याख्या टिकते.\n\nआणखी एक महत्त्वाची गोष्ट: function चे नाव आणि तिचा निकाल यांचा अर्थ वेगळा असल्याने, function तिच्या स्वतःच्या नावाचा संदर्भ घेण्यासही सक्षम होऊ शकते — हा recursion चा पाया. पण इथे महत्त्वाचे तेच: नाव म्हणजे function वस्तूकडे नेणारा दुवा; कुठे function हवी आणि कुठे निकाल हवा, हे कोड प्रत्यक्षात स्पष्ट करतं.",
        code: `def square(x):
    return x * x

alias = square
print(alias(6))
print(square(6))`,
        codeLanguage: "python",
        output: `36
36`,
      },
      {
        title: "closure — function च्या आत function",
        content: "function च्या आत आणखी एक function परत करता येतो — या रचनेला closure म्हणतात. खरं तर ती 'बंदीस्त' करते — आतली function बाहेरील function च्या variables ला जपत राहते, बाहेरच function संपूनही. आता अर्थ: outer(2) ला call करून मिळालेला निकाल ही एक function असते जी '2' ची स्मृती घेऊन फिरते.\n\nसाधे उदाहरण: def make_multiplier(factor): def multiply(n): return n * factor — इथे multiply ही आतली function; ती factor हे variable बाहेरच्या make_multiplier मधून उचलते. double = make_multiplier(2) आणि triple = make_multiplier(3) — दोन वेगळ्या function; पहिली 2 ने, दुसरी 3 ने गुणते. त्यांच्यात काहीही मिसळत नाही.\n\nहीच 'function object' संकल्पनेची खरी शक्ती: एक identify function चा कारखाना निर्माण करते आणि प्रत्येक customer ला स्वतःची function मिळते. map फंक्शनमध्ये अशी function असल्यास प्रत्येक घटकावर वेगवेगळा गुणक लागू होतो. तेच काम करताना दोन function स्वतंत्र ठेवणे म्हणजे अप्रत्यक्ष वेगळेपण.\n\nclosure मधील variable च्या lifetime कडे लक्ष द्या: make_multiplier ची कॉल संपल्यानंतरही factor हे variable function च्या memory मध्ये राहते — Python ते जपतो. म्हणून जर कोड function गोळा करून ठेवला, तर memory सोडत नाही. हे तंत्र — function परत करणे आणि बाहेरील state जपणे — पुढील decorators च्या धड्याचा गाभा आहे; इथे घातलेला पाया तिथे काम करतो.",
        code: `def make_power(exponent):
    def power(base):
        return base ** exponent
    return power

cube = make_power(3)
print(cube(2))
print(cube(5))`,
        codeLanguage: "python",
        output: `8
125`,
      },
      {
        title: "map, filter — करणी तीन स्तर",
        content: "map आणि filter ही built-in साधने function ला संग्रहावर चालवण्यासाठी आहेत. map(function, संग्रह) प्रत्येक घटकावर function चालवून नवीन iterator देतो — परिणाम list नव्हे, iterator; list() लावूनच संग्रहात बदलतो. filter(function, संग्रह) function True देणाऱ्या घटकांना ठेवतो; इथे function ने खरं तर मूल्यांकनाची अट द्यायची आहे — filter त्यातला सत्य भाग ठेवतो.\n\nही साधने Python मध्ये function-as-object च्या आधारावर उभी आहेत — function हा argument. कोणतीही function map मध्ये द्या: def to_rupees(amount): return amount * 83; list(map(to_rupees, [10, 20])) मिळून नवीन सूची. प्रत्येक घटकावर expression गुंतवणे — त्या तुलनेत loop लिहून append करणे — map ने कमी कोड आणि सरळ वाचणे.\n\nfunction एकाच ठिकाणी पुन्हा वापरायची असेल तर def ने धरा; क्षणिक काम असेल तर lambda. दोन्ही map मध्ये काम करतात. तुलना: map हा comprehension चा जुना रूप — Python शैली मध्ये दोन्ही वैध. निवड ही वाचनीयतेवर: lambda आधी दिसत नाही तर def.\n\nआणखी एक नियम: map किंवा filter चा परिणाम एकदाच वापरता येतो — iterator संपल्यावर संपतो. म्हणून पुन्हा पाहण्यासाठी list() ने तो संग्रह बनवून ठेवावा. तसेच दोन्ही — map नंतर filter, किंवा filter नंतर map — जोडून (चेनिंग) data transformation करता येते: function एकदा लिहा, मग ती argument म्हणून पाठवत राहा.",
        code: `def add_gst(price):
    return int(price * 1.18)

prices = [100, 200, 300]
with_gst = list(map(add_gst, prices))
print(with_gst)`,
        codeLanguage: "python",
        output: `[118, 236, 354]`,
      },
      {
        title: "key function — sorted, max, min",
        content: "sorted, max आणि min या साधनांना key हा पर्याय मिळतो — तो एक function आहे जो प्रत्येक घटकावरून तुलनासाठी एक मूल्य काढतो. sorted(names, key=len) नावांची रचना — लहान नाव आधी, मोठे नाव नंतर — कारण len ही function अक्षरांची संख्या देते. घटक बदलत नाहीत; फक्त त्यांची तुलना key function च्या निकालावरून होते.\n\nkey हा तुम्हाला function argument म्हणून द्यायचा आहे — नाव, कंस नाही. sorted(words, key=str.lower) हे case-insensitive क्रम देते; key=len ने लांबीचा क्रम. इथे function स्वतःच (lower, len) तुलना करण्यासाठी नावाने दिली जाते — कधीही key=len() लिहू नये, कारण तो निकाल काय तो तुलना करतो.\n\nmax(scores, key=len) मधील प्रत्येक घटकाची len वर तुलना होऊन सर्वात मोठा घटक येतो. दोन घटकांची तुलना key मूल्यांनी होते. min(books, key=price_getter) पुस्तकाची सूची असेल तर सर्वात स्वस्त पुस्तक — price_getter ही function प्रत्येक पुस्तकातून किंमत उचलते.\n\nया साधनांमुळे function-object शी हातमिळवणी दिसते: जिथे data 'कसा तुलना करावा' हे तर्क function मध्ये लिहितात. key argument मध्ये lambda छोट्या तर्कासाठी योग्य: sorted(pairs, key=lambda kv: kv[1]) dict च्या मूल्यावरून क्रम. मात्र तर्क लांब असल्यास def लिहा. हीच संकल्पना arch begin सर्वत्र वापरते — अचूक, अडचण कमी.",
        code: `names = ["आरोही", "वेद", "मीरा", "कल"]
print(sorted(names, key=len))
print(max(names, key=str.lower))`,
        codeLanguage: "python",
        output: `['वेद', 'कल', 'मीरा', 'आरोही']
['मीरा', 'वेद', 'कल', 'आरोही']`,
      },
      {
        title: "functools.partial — पूर्वतयार function",
        content: "कधी कधी मूळ function चे काही arguments आधीच ठरवून एक 'तयार' function हवी असते. functools.partial ही उपयोजना करते — नवीन function बनवते जी उर्वरित arguments ने मूळ function ला call करते. import functools — partial नावाची रचना मुळ function आणि काही argument घेऊन पुढील calls ला सोपी करते.\n\nउदा. def royalty(amount, rate): return amount * rate — ही function rate हा argument अशी घेते. 10 टक्के दराने गणना करणाऱ्या 'constant' function साठी: ten_percent = functools.partial(royalty, rate=0.10). आता ten_percent(5000) → 500; rate कुठे दोन वेळा नाही. function निर्मितीच्या कारखान्यातील हीच शैली.\n\npartial चा फायदा: वारंवार लागणारी मूल्ये प्रत्येक call ला लिहीत राहावी लागत नाहीत. बँकेत ब्याजदर, दुकानात GST %, गेममध्ये speed factor — अशी स्थिर मूल्ये partial ने 'एकदा घट्ट' करता येतात. कोडमध्ये वाचनीयता वाढते: ten_percent(5000) हे royalty(5000, 0.10) पेक्षा ठोस दिसते.\n\npartial with func objects: तीच function vary करत सोडणे — amount फक्त वेगवेगळा देत राहणे. map मध्ये ten_percent वापरल्यास संग्रहाच्या प्रत्येक number वर तीच लागू होते. function-object संकल्पनेचा हा आणखी खोदलेला तपशील — आधी बनवलेली function नवी function निर्माण करते.\n\nहा तपशील जास्त मर्जीचा वाटत असला तरी functools ही Python च्या standard library मधील उपयोगी साधने आहेत; partial ही त्यांच्यातली सर्वात सोपी. पुढील decorators च्या धड्यात wraps ही आणखी एक functools ची साधना दिसते. या संसाधनांची ओळख होताच function-object च्या world मध्ये आणखी एक सोयीची किल्ली मिळते.",
        code: `import functools

def royalty(amount, rate):
    return amount * rate

ten_percent = functools.partial(royalty, rate=0.10)
print(ten_percent(5000))
print(list(map(ten_percent, [1000, 2000])))`,
        codeLanguage: "python",
        output: `500.0
[100.0, 200.0]`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "या धड्याचा गाभा एकच आहे: function ही Python मधली एक मूल्य आहे — संदर्भ म्हणून. नाव = function, नाव() = निकाल; हा भेद कोडमधला दुहेरी वेळेसारखा. function ला variable मध्ये, list मध्ये, dict मध्ये ठेवता येते; दुसर्या function ला argument म्हणून द्या आणि अजून एक function परत करा. map, filter, sorted चे key — ही सर्व 'function argument म्हणून' कामाची उदाहरणे.\n\nclosure ने आतली function बाहेरील state जपते — दोन नावे (function factories) बनवताना ही सवय पुढे पडते. lambda हा एक-ओळीचा शॉर्टकट; तर्क जटिल झाला की def. functools.partial ही तयार function — argument आधी घट्ट करणे. या साऱ्यांची ओळख पुढील decorators आणि generators च्या धड्यांसाठी दार उघडते.\n\nआत्मपरीक्षण: function नाव आणि function call यांतला फरक तुमच्या शब्दांत सांगा. map आणि filter चे परिणाम कधी iterator असतात, त्यांना list कधी लावतोत? sorted चा key खरोखर function आहे — value नाही — हे लक्षात राहतं का? closure मध्ये बाहेरचे variable कसे जपले जाते? या प्रश्नांची उत्तरे लिहिली, तर धड्याचे यश पक्के.\n\nसमजून घेतल्यानंतर सराव: एक function तयार करा जी दोन function घेते आणि त्या दोघांना संग्रहावर लागू करते. अशा कोडच्या अनुभवाने 'function-object' ही संकल्पना कागदावरून जीवनात येते. आणखी छोटे projects — actions dict, making closure, partial — यांनी हे सर्व पक्के होते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "functions च्या अधिक अभ्यासासाठी हे फक्त अधिकृत Python संसाधन वापरा — बुकमार्क आवर्जून करा:\n\n• function व्याख्या tutorial: https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• lambda expressions tutorial: https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions\n• built-in map function: https://docs.python.org/3/library/functions.html#map\n• built-in filter function: https://docs.python.org/3/library/functions.html#filter\n• sorted() चा दस्तऐवज: https://docs.python.org/3/library/functions.html#sorted\n• closure ची अधिकृत स्पष्टता: https://docs.python.org/3/glossary.html#term-closure\n• functools module संदर्भ: https://docs.python.org/3/library/functools.html\n• function-first-class ची अधिकारी संज्ञा: https://docs.python.org/3/glossary.html#term-first-class-object\n• function call syntax: https://docs.python.org/3/reference/expressions.html#calls\n• Python अधिकृत tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs आणि python.org वरूनच आहेत.",
      },
      {
        title: "वास्तविक उदाहरण: ग्राहक क्रमवारी",
        content: "ही सर्व साधने एकत्र वापरून ग्राहकांच्या सूचीवर काम करूया. प्रत्येक ग्राहकाचा संदर्भ म्हणजे एक small dict — नाव, वय आणि खातेबाकी. अशा dict च्या सूचीवरचे क्रम, सर्वोच्च, किंवा filter चे नियम function-object च्या criteria ने ठरवता येतात.\n\nपहिला प्रश्न: सर्वात जास्त रक्कम आकारलेला ग्राहक कोणता? max(customers, key=lambda c: c[\"amount\"]) — key कसा function आहे ते पहा: lambda प्रत्येक dict मधून amount वाचतो आणि त्या मूल्यांवर तुलना होते. dict बदलत नाही; फक्त निवडीचा आधार function आणतो.\n\nदुसरा प्रश्न: शंभर पेक्षा जास्त रक्कम असलेले ग्राहक कोणते? filter(or comprehension) — list(filter(lambda c: c[\"amount\"] > 100, customers)) फक्त तेच ग्राहक धरतो ज्यांची रक्कम 100 वर. इथे filter नावच सांगतं — ते काय ठेवायचे ते function ठरवते.\n\nतिसरा प्रश्न: नावानुसार क्रमवारी. sorted(customers, key=lambda c: c[\"name\"]) — मराठी अक्षरांचा क्रम Unicode नुसार येतो; अन्यथा आपल्याला अपेक्षित असलेला मानवी क्रम नाही. हा मुद्दा लक्षात ठेवण्यासारखा वास्तविक तपशील आहे.\n\nfunction-object चा हा वापर database किंवा spreadsheets मध्येही तसाच असतो: column नावाने key function बनवून data क्रमवार, filter आणि aggregate करणे. map, filter, sorted यांची ही त्रयी वेळच्या वेळी data मध्ये रचना आणते. आता label करण्यासारखे: key function ही कोड ठिकठिकाणी diff नाही — ती एक ठिकाणी function म्हणून लिहा आणि जपून ठेवा.",
        code: `customers = [
    {"name": "मीरा", "amount": 150},
    {"name": "वेद", "amount": 90},
    {"name": "आरोही", "amount": 210},
]
rich = max(customers, key=lambda c: c["amount"])
print(rich["name"])
over_100 = list(filter(lambda c: c["amount"] > 100, customers))
print(len(over_100))`,
        codeLanguage: "python",
        output: `आरोही
2`,
      },
      {
        title: "इंटरव्ह्यू दृष्टीने चार प्रश्न",
        content: "function-object ची संकल्पना समजली की interview चे प्रश्नही सरळ होतात. पहिला प्रश्न: 'Python मध्ये function ही first-class object कशी आहे?' उत्तर तीन कामांनी सिद्ध होते — function variable मध्ये ठेवता येते, list/dict मध्ये साठवता येते, आणि दुसऱ्या function ला argument म्हणून द्या किंवा तिला परत करू शकतो. या तीन क्षमता असल्यास वस्तूला first-class म्हणतात.\n\nदुसरा प्रश्न: 'map आणि filter मध्ये काय फरक?' map प्रत्येक घटकावर function चालवून नवीन परिणामाची मालिका देतो; filter function True देणारे घटक ठेवतो. आकाराचा फरकही स्पष्ट करा — map चा आकार समान राहतो; filter चा आकारFunction नुसार कमी होऊ शकतो. दोन्ही iterator परत करतात.\n\nतिसरा प्रश्न: 'lambda कधी वापरतात आणि कधी def?' प्रत्येकाला प्रत्युत्तर साधे — lambda फक्त एका expression साठी, जिथे function लहान असेल आणि नाव देण्याची गरज नसेल. तर्क दोन-तीन ओळीचा, side-effects असलेला किंवा पुन्हा वापरायचा असेल तर def. नाव asymp एक प्रकारचा दस्तऐवज असतो.\n\nचौथा प्रश्न: 'closure म्हणजे काय आणि कोणती पकड आहे?' closure म्हणजे function जी बाहेरील scope चे variable जतन करते. छोटे कारखाने — make_adder(3) — एकाच function ने वेगवेगळी मूल्ये निर्माण करतात. ही निरीक्षणे interview मध्ये समजूतदार हाताळतात.\n\nप्रत्येक उत्तरात एक छोटे उदाहरण म्हणजे तुमचा विश्वास वाढतो — क्वचित कोणी प्रश्न विचारतो तेव्हा function-object चा सराव प्रत्यक्षात दाखवणे फायदेशीर ठरते. उदाहरण कोड तयार ठेवा; मुलाखतीत topic समजला हे दर्शविणे ही सर्वात मोठी पूर्तता असते.",
        code: `operators = {
    "+": lambda a, b: a + b,
    "*": lambda a, b: a * b,
}
print(operators["+"](4, 9))
print(operators["*"](4, 9))`,
        codeLanguage: "python",
        output: `13
36`,
      },
      {
        title: "function ची यादी — एकच दरवाजा",
        content: "function-object चा सर्वात मोठा उपयोग यादीमध्ये function ठेवणे आहे. def आणि lambda दोन्ही एकाच list मध्ये ठेवता येतात: funcs = [len, str.upper, lambda s: s[::-1]]. यादीतील प्रत्येक घटक ही function असल्यामुळे funcs[0](\"मराठी\") लेनवर चालते आणि 6 देते; funcs[1](\"मराठी\") upper करून मराठी मिळवते. नाव न लिहिता अपरोक्ष function वापरता येते — हीच ताकद.\n\nfor loop मध्ये function यादी चालवता येते — प्रत्येक function ला एकच input देणे: for f in funcs: print(f(\"नमस्कार\")) — प्रत्येक function आपापल्या style मध्ये तोच input बदलते. आटोपशीर आणि लवचिक — कोणत्या function चा आधार हवा तो यादीने ठरवता येतो. तोच नमुना menu किंवा pipeline मध्ये काम करतो.\n\nगेम मध्ये actions: player च्या कृती — attack, defend, skip — प्रत्येक function; आणि menu key code एका dict मध्ये: {\"1\": attack, \"2\": defend}. कोड एक ठिकाणी ठरते, नियंत्रण keyboard input देतो — ही सर्व function-object ची मांडणी.\n\nआणखी एक रचना: function director — दिवसाच्या क्रमवारीप्रमाणे function चालवणारी. सकाळी दिवा लावा, मग water, मग अभ्यास — प्रत्येक function; daily_plan = [wake, water, study]. for step in daily_plan: step() — क्रम बदलणे म्हणजे list चे order बदलणे. कोड बदलण्याचे काम शून्य.\n\nशिस्त: list मधील function सर्व एकाच signature च्या असणे सोयीचे — त्याच इनपुट format मध्ये सर्व चालतात तेव्हा सूची नीट जुळते. तसे नसल्यास indexing ने वेगवेगळ्या style ला हाताळावे लागते. सुरुवातीला सर्व function समान input/output ठेवा — यादी नीट चालेल आणि समजेल.",
        code: `funcs = [len, str.upper, lambda s: s * 2]
text = "मराठी"
for f in funcs:
    print(f(text))`,
        codeLanguage: "python",
        output: `6
मराठी
मराठीमराठी`,
      },
    ],
    practiceQuestions: [
      "function ही object कशी?",
      "function argument म्हणून कसा देतात?",
      "map() काय देतो?",
      "list() कशासाठी?",
    ],
    quiz: [
      { question: "function argument म्हणून देताना काय?", options: ["फक्त नाव", "नाव()", "self", "lambda unique"], correct: 0 },
      { question: "map रूपांतराचे परिणाम दिसण्यासाठी?", options: ["list()", "print(fn)", "import", "reverse"], correct: 0 },
      { question: "function सूचीमध्ये ठेवता येते का?", options: ["होय", "नाही", "कधी कधी", "एरर"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन क्रिया सूचीतून a=1, b=2 साठी दुसरी वापरा.",
      starterCode: `def add(a, b):
    return a + b

def mul(a, b):
    return a * b

actions = [add, mul]
print(actions[1](1, 2))`,
      expectedOutput: "2",
    },
    interviewQuestions: [
      "first-class function म्हणजे काय?",
      "map/filter/reduce मध्ये काय फरक?",
    ],
    related: ["python-comprehensions", "python-args-kwargs", "python-functions"],
    prev: "python-comprehensions",
    next: "python-args-kwargs",
  },

  {
    slug: "python-args-kwargs",
    categoryId: "python",
    title: "*args आणि **kwargs",
    marathiTitle: "args, kwargs - अस्थिर arguments",
    level: "advanced",
    minutes: 14,
    summary: "कितीही arguments झेलणारे function — *args, **kwargs आणि unpacking ची समज.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "args, kwargs - अस्थिर arguments म्हणजे काय?",
        content: "कितीही arguments झेलणारे function — *args, **kwargs आणि unpacking ची समज.\nकाही function ला कितीही संख्येची मूल्यं द्यायची असतात — गुणांची सूची, ऑर्डरच्या वस्तू, यादृच्छिक नावे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? args, kwargs - अस्थिर arguments चे फायदे आणि महत्त्व",
        content: "✓ function ची रचना न बदलता कितीही मूल्यं देता येतात — हाच *args चा फायदा.\n✓ dict चा key आणि function चं पॅरामीटर नाव जुळणं गरजेचं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "*args आणि **kwargs — कितीही arguments",
        content: "काही function ला कितीही संख्येची मूल्यं द्यायची असतात — गुणांची सूची, ऑर्डरच्या वस्तू, यादृच्छिक नावे. त्यासाठी *args positional arguments आणि **kwargs keyword arguments साठी.\n\n*args सर्व positional values एका tuple मध्ये गोळा करतो: def total(*args): तर total(1, 2, 3, 4) चे args = (1, 2, 3, 4). **kwargs सर्व keyword values एका dict मध्ये: show(name=\"मीरा\", score=90) चे kwargs = {\"name\": \"मीरा\", \"score\": 90}.\n\n* आणि ** ही नावं नाहीत; *args, **kwargs हे फक्त रिवाज आहेत — *wunal, **kw असेही लिहिता येतात. तारका (*) हीच खरी खूण.",
      },
      {
        title: "Syntax: *args positional values",
        content: "def नंतर पॅरामीटरच्या जागी *args लिहिलं की सर्व positional values एका tuple मध्ये येतात. tuple म्हणजे क्रमवार संग्रह — list सारखा, पण बदल न होणारा.\n\ntotal(*args) मध्ये for n in args ने प्रत्येक value वर येऊन बेरीज होते. total(1, 2, 3, 4) → 10 आणि total(10, 20) → 30.\n\nओळख दर्शवण्यासाठी tuple साधा वाचण्यासारखा असतो: total(1, 2, 3, 4) ची घोषणा बदलेल तरी tuple मध्ये तेच राहतं.",
        code: `def total(*args):
    return sum(args)

print(total(1, 2, 3, 4))
print(total(10, 20))`,
        codeLanguage: "python",
        output: `10
30`,
      },
      {
        title: "Syntax: **kwargs keyword values",
        content: "**kwargs सर्व keyword arguments — name=मूल्य अशी जोडी — एका dict मध्ये गोळा करतो. show(name=\"मीरा\", score=90) मध्ये kwargs = {\"name\": \"मीरा\", \"score\": 90}.\n\ndict मधील प्रत्येक जोडी for key, value in kwargs.items() ने मिळते; key आणि value वेगळे दाखवता येतात.\n\nखाली show एकच दोन जोड्या देतो — name आणि score. दुसऱ्या नावाची जोडी दिली तर तीही dict मध्ये दिसेल; key कोणतीही असू शकते.",
        code: `def show(**kwargs):
    print(kwargs)

show(name="मीरा", score=90)`,
        codeLanguage: "python",
        output: `{'name': 'मीरा', 'score': 90}`,
      },
      {
        title: "वास्तविक उदाहरण: सगळ्यांना अभिवादन",
        content: "एकाच function ने कितीही लोकांना अभिवादन करता यावं म्हणून *names वापरतात. greet(\"आरोही\", \"वेद\") म्हणजे names = (\"आरोही\", \"वेद\").\n\nप्रत्येक नावासाठी लूप फिरून \"नमस्कार, आरोही!\" वगैरे छापतो. एक नाव दिलं तर एक ओळ, दहा नावं दिली तर दहा ओळी.\n\nfunction ची रचना न बदलता कितीही मूल्यं देता येतात — हाच *args चा फायदा.",
        code: `def greet(*names):
    for n in names:
        print("नमस्कार,", n + "!")
    
greet("आरोही", "वेद")`,
        codeLanguage: "python",
        output: `नमस्कार, आरोही!
नमस्कार, वेद!`,
      },
      {
        title: "Unpacking — * आणि ** call करताना",
        content: "* आणि ** फक्त define मध्ये नाही, call करतानाही वापरतात. तिथे ते संग्रह उलगडतात (unpack) — list किंवा dict चे घटक वेगळे argument बनतात.\n\nmake(name=\"वडापाव\", times=3) अशी function असेल; params = {\"name\": \"वडापाव\", \"times\": 3} — तर make(**params) तेच काम करतं: dict मधल्या key चे नक्कीच जुळणाऱ्या नावाने argument देतं.\n\nहीच सोय list साठी * ने — make(*items) मधील घटक आपोआप positional argument बनतात. dict चा key आणि function चं पॅरामीटर नाव जुळणं गरजेचं.",
        code: `def make(name, times):
    print(name * times)

params = {"name": "वडापाव", "times": 3}
make(**params)`,
        codeLanguage: "python",
        output: `वडापाववडापाववडापाव`,
      },
      {
        title: "क्रमाचे नियम आणि चुका",
        content: "✗ *args नंतर ठरलेले positional पॅरामीटर ठेवणे — *args ने सगळं खेचून घेतलं तर ते दुसऱ्या पॅरामीटरला कधीच मिळत नाही.\n\n✗ **kwargs नंतर keyword argument देत असणं — **kwargs ने सगळं घेतलं, व्यवस्था न बसल्यास चूक.\n\n✗ unpacking मध्ये जास्त घटक असणे — a, b = [1, 2, 3] असा फरक TypeError देतो; कमी घटकही तिथेच मिळत नाही.\n\n✗ default पॅरामीटर आणि *args मिसळण्याचा क्रम — default आधी, *args नंतर या क्रमानेच लिहा.\n\nनियम साधा आहे: positional आधी, नंतर *args (काही असेल तर), नंतर keyword/default, शेवट **kwargs. याच क्रमाने function रचला तर वाचणं आणि call करणं दोन्ही सोपं.",
      },
      {
        title: "Interactive: *args ने सरासरी",
        content: "कृती: कितीही स्कोअर घेऊन त्यांची सरासरी काढणारी function तयार करा.\n\nmean(*values) — sum(values) भागाकार len(values). mean(4, 5, 3) → 4.0. division ने float मिळतं, म्हणून output 4.0.\n\nस्कोअरची संख्या बदलली तरी function तोल धरतो — एक मूल्य किंवा दहा मूल्यं द्या, तीच function सरासरी देते.",
        code: `def mean(*values):
    return sum(values) / len(values)

print(mean(4, 5, 3))`,
        codeLanguage: "python",
        output: `4.0`,
      },
      {
        title: "Mini Project: ऑर्डर बिल",
        content: "ऑर्डरच्या वस्तूंच्या किमती *items मध्ये आणि सवलत **discounts मध्ये घेऊन बिल काढणारं function लिहा.\n\nbill(\"मीरा\", 50, 30, member=10) — customer \"मीरा\", items = (50, 30), discounts = {\"member\": 10}. बेरीज 80 वरून सवलत 10 वजा करून 70.\n\nयातून दिसतं: भिन्न गोष्टी — किमती आणि सवलत — एकाच function मध्ये वेगवेगळ्या रूपानं (tuple आणि dict) कशा येतात.",
        code: `def bill(customer, *items, **discounts):
    total = sum(items) - sum(discounts.values())
    print(f"{customer}: ₹{total}")

bill("मीरा", 50, 30, member=10)`,
        codeLanguage: "python",
        output: `मीरा: ₹70`,
      },
      {
        title: "positional वि. keyword argument — पाठ न उलटता",
        content: "Python मध्ये function ला argument देण्याचे दोन मार्ग आहेत. positional argument — म्हणजे नाव न लिहिता, फक्त मूल्य क्रमाने दिले जाते: add(3, 5) याचा अर्थ पहिल्या पॅरामीटरला 3 आणि दुसर्याला 5. keyword argument — नाव लिहून मूल्य दिले जाते: add(a=3, b=5). त्याचा फायदा: क्रम बदललात तरी चालेल — add(b=5, a=3) हे add(a=3, b=5) सारखेच. नावाने ओळख होते, क्रमाने नाही.\n\nतिसरी गोष्ट लक्षात ठेवा: positional आणि keyword arguments एकाच call मध्ये मिसळता येतात, पण सगळे positional आधी यायला हवेत. add(3, b=5) हे चालते; add(a=3, 5) हे चालत नाही — कारण positional नंतर keyword येतो याच्याच अर्थाचा नियम होतो. प्रत्येक function call मध्ये हा क्रम Python सक्ती करतो.\n\nमिश्रणाचा आणखी एक नियम: एक पॅरामीटर एकदाच भरता येते. add(3, a=5) हे चूक आहे — a दोनदा देण्याचा प्रयत्न झाला. Python ला अशी गफलत आवडत नाही आणि TypeError देऊन naisarga तपासतो. संदेश बारकाईने वाचल्यास ती चूक लगेच समजते.\n\nहा भेद आधार म्हणून का महत्त्वाचा? कारण *args आणि **kwargs या दोन संग्रहणं — पहिली positional चा संग्रह, दुसरी keyword चा — याच भेदावर उभ्या आहेत. जिथे positional असतात तिथे *args गोळा करता, जिथे नावे असतात तिथे **kwargs. व्यवहारात function ला called करताना नावांशी जोडणी होते, हाच आधार.",
        code: `def describe(name, age):
    print(name, "वय", age)

describe("आरोही", 10)
describe(age=10, name="आरोही")`,
        codeLanguage: "python",
        output: `आरोही वय 10
आरोही वय 10`,
      },
      {
        title: "*args — positional arguments चा संग्रह",
        content: "*args हा function च्या definition मधील खास पॅरामीटर आहे. तो call मधील उरलेल्या सर्व positional arguments गोळा करतो आणि एका tuple मध्ये ठेवतो. total(1, 2, 3, 4) सारखा call असेल तर args = (1, 2, 3, 4) — tuple म्हणजे सूचीप्रमाणेच क्रमवार संग्रह, पण अपरिवर्तनीय.\n\nप्रत्येक call मध्ये args चा आकार वेगळा: total(5) झाला तर args = (5,); total() झाला तर args = (). म्हणजे *args ला किमान मर्यादा नाही — zero किंवा हजारो, सर्व संभव. function च्या आत सामान्य tuple म्हणून index, len, for loop — सर्व काही उपलब्ध.\n\nसमज पक्की करण्यासाठी: तारका (*) च नावाची खरी शक्ती दर्शवते, args ही फक्त नाव. def total(*numbers): असंही लिहिता येते — Python तेच काम करतो. पण रिवाजानुसार args हे नाव सर्वत्र दिसते; ते वाचण्यास सोयीचे.\n\nव्यावहारिक कामात *args कधी लागतो? जेव्हा function ला 'किती' argument येतील हे आधी ठाऊक नसते — गुणांची शेवटची यादी, वस्तूंची बिले, वेगवेगळा data. sum(args) ने बेरीज, len(args) ने संख्या, min(args)/max(args) ने कसोटी — सर्व धडाक्यात. हीच ताकद पुढच्या धड्यात decorate आणि wrappers मध्येही वापरतो.",
        code: `def show(*args):
    print(args, "आकार:", len(args))

show(1, 2, 3)
show("a", "b")
show()`,
        codeLanguage: "python",
        output: `(1, 2, 3) आकार: 3
('a', 'b') आकार: 2
() आकार: 0`,
      },
      {
        title: "**kwargs — keyword arguments चा संग्रह",
        content: "**kwargs हा दुसरा संग्रहणारा पॅरामीटर आहे. तो call मधील उरलेल्या सर्व keyword arguments गोळा करतो आणि एका dict मध्ये ठेवतो. show(name=\"मीरा\", score=90) असा call असेल, तर kwargs = {\"name\": \"मीरा\", \"score\": 90} — नाव म्हणजे key आणि मूल्यं value.\n\ndict असल्यामुळे त्यातील प्रत्येक जोडी for key, value in kwargs.items() या चक्रातून मिळते. key ही string असते — Python keyword argument चे नाव dict मध्ये string म्हणून ठेवतो. मग भिन्न naming ने print(key, value) दाखवू शकतो.\n\n*args च्या तुलनेत फरक: *args positional गोळा करतो, **kwargs keyword गोळा करतो. दोन्ही सोबत वापरता येतात: def full(a, b, *args, **kwargs). क्रम नक्की — सामान्य positional आधी, *args मग, keyword/default पुढे आणि शेवटी **kwargs. या क्रमाच्या उल्टी रचना SyntaxError येते.\n\nहे महत्त्वाचे: function च्या डिझाईन मध्ये **kwargs म्हणजे 'अजून आलं तरी खाली येईल'. ज्ञान मिळवणारी function — user id, आणि नंतरची माहिती — एकत्र जोडणे सोपे होते. library function मधून configuration हस्तांतरित करताना kwargs हे shortcut ठरते. आणखी एक गोष्ट: **kwargs मधील key function च्या पॅरामीटर नावांशी जुळणारी नसल्यास function चालेल; जुळल्यास तो विचार अधिक खोलवर — की या key ला पुढे दुसऱ्या function कडे नेता येईल.",
        code: `def upload(url, **meta):
    print("URL:", url)
    for key, value in meta.items():
        print(key, "=", value)

upload("https://example.com", user="मीरा", size=2048)`,
        codeLanguage: "python",
        output: `URL: https://example.com
user = मीरा
size = 2048`,
      },
      {
        title: "unpacking — संग्रह उलगडून argument करणे",
        content: "* आणि ** ही समान चिन्हे definition मध्ये गोळा करतात, पण call मध्ये सोडतात, उलगडतात. म्हणजे function call करताना list, tuple किंवा dict चे घटक वेगळे argument बनवले जातात — ही unpacking नामक रचना.\n\nउदा. def add3(a, b, c): return a + b + c — call add3(*[1, 2, 3]) मध्ये * list उलगडतो आणि Python add3(1, 2, 3) सारखं करतो. घटकांची संख्या पॅरामीटरसंख्येशी जुळली पाहिजे; न जुळल्यास TypeError. त्याचप्रमाणे tuple, range — सर्व iterable * ने उलगडतो.\n\n** call मध्ये तर उलट काम: dict उलगडून key नावाचे argument बनतो. def make(name, times): — call make(**{\"name\": \"वडापाव\", \"times\": 3}) म्हणजे make(name=\"वडापाव\", times=3). dict मधील key function च्या पॅरामीटर नावाशी नक्की जुळला पाहिजे — न जुळल्यास TypeError. हा नियम unpacking मध्ये पक्का.\n\nही सोय व्यावहारिक कोड मध्ये बरीच वापरली जाते: configuration हा एक मोठा dict असतो; function मध्ये तो direct ** ने पाठवता येतो. सूची 5 element आहे आणि function 5 argument घेत असेल — तर प्रत्येक index नाव पाठवण्याऐवजी *list एकच चिन्ह. शिवाय range, tuple, set (क्रम गृहीत न ठेवता) — सर्व उलगडण्यास पात्र. unpacking टाकल्यास कोड लहान होतो आणि arguments मधील गोंधळ टळतो.",
        code: `def add3(a, b, c):
    return a + b + c

nums = [2, 3, 4]
print(add3(*nums))
params = {"a": 10, "b": 20, "c": 30}
print(add3(**params))`,
        codeLanguage: "python",
        output: `9
60`,
      },
      {
        title: "wrapper मध्ये *args आणि **kwargs",
        content: "function सजवताना (decorate करताना) आतल्या function ला काहीही argument मिळू शकतात — म्हणून wrapper ला ती सर्व उघडी राखावी लागतात. इथे *args आणि **kwargs चा खरा अनुप्रयोग दिसतो: def wrapper(*args, **kwargs): return func(*args, **kwargs) — wrapper जे काही मिळवतो, तेच function ला पाठवले जाते.\n\nही ओळ 'passthrough' म्हणजे बहुरूपी मार्ग आहे. सजवलेल्या function ला 2 argument असतील तरी, 5 असतील तरी, keyword असतील तरी — wrapper कुठल्याही रचनेला आसुसलेला राहतो. तो दोन्ही संग्रहणं वापरतो — *args positional साठी, **kwargs keyword साठी.\n\thowकाम सांगतो: wrapper function ला कॉल करतो तेव्हा *args ने बंद केलेली positional tuple उलगडून argument होतात; त्याचप्रमाणे **kwargs ने dict उलगडतो. एकाच ओळीत दोन्ही चिन्हे — भिन्न direction: definition मध्ये गोळा, call मध्ये सोड. ही शिस्त स्वतःला दोन वेळा रटवण्यासारखी क्लिष्ट नाही — दोन ठिकाणी तारका काम करते हे लक्षात ठेवणे.\n\nवास्तवात पुढील decorators च्या धड्यात हे तंतोतंत दिसेल: logging, timing, authentication अशा wrapper ला function चे मूळ argument समजून चालू राहते. या संधीवर एक नियम मनात बसवा — जेव्हा function दुसर्याला हस्तांतरित करतो (wrapper, decorator, packaging), तेव्हा *args आणि **kwargs ही तुमची सुरक्षा कवचं होत.",
        code: `def shield(func):
    def wrapper(*args, **kwargs):
        print("आधी:", args, kwargs)
        result = func(*args, **kwargs)
        print("नंतर:", result)
        return result
    return wrapper

@shield
def multiply(x, y):
    return x * y

multiply(4, 5)`,
        codeLanguage: "python",
        output: `आधी: (4, 5) {}
नंतर: 20`,
      },
      {
        title: "kwargs सह defaults आणि सत्यापन",
        content: "**kwargs मधून येणारी मूल्यं कधी कधी default सोबत मिसळायची असतात. एक साधा युक्ती: kwargs dict मध्ये key नाही म्हणजे मूल्य नाही — तिथे डीफॉल्ट लागू करता येतो. setdefault ही dict पद्धत इथे कामी येते: kwargs.setdefault(\"speed\", 1) — speed key नसेल तर 1 ठेवला जातो.\n\nउदा. game ची function: def run(**conf) आणि कॉल run(player=\"मीरा\", level=3). conf = {\"player\": \"मीरा\", \"level\": 3}. speed नाही — म्हणून conf.setdefault(\"speed\", 1) ने speed=1 जोडला जातो. त्यामुळे function नेहमी speed वापरू शकते.\n\nसत्यापन (validation) दुसरे काम: kwargs मधील value बरोबर आहे का ते तपासता येते. level key असेल आणि तो negative असेल, तर raise ValueError किंवा TypeError. अशा तपासण्या कॉल करणाऱ्याच्या चुका लवकर ओळखतात — नंतर त्रास देत नाहीत.\n\nआणखी एक गोष्ट — 'अनोळखी key ची तपासणी': म्हणजे काय हे सांगता येत नाही तर, function मध्ये node heavy दिवस k वाटले तर error देणे. allowed = {\"player\", \"level\", \"speed\"}; wrong = set(kwargs) - allowed — काही उरलं तर त्या key ची सूचना. पण ही खोलवरची गोष्ट; कोड आधारभूत checkups तेवढे प्रारंभी ठेवा.\n\nव्यवस्थित आणि सुरक्षित kwargs कोड डिझाइनचा भाग आहे: library function ने मूल्यं जर parity घेतली, तर कुठलीही अडचण timeout मध्ये 'पुढच्या function कडे' गेली पाहिजे; इथे default आणि validation ही सुरक्षा प्रदान करतात.",
        code: `def run(**conf):
    conf.setdefault("speed", 1)
    if "level" in conf and conf["level"] < 1:
        raise ValueError("level 1 पेक्षा मोठा हवा")
    return conf

print(run(player="मीरा", level=3))
print(run(player="वेद"))`,
        codeLanguage: "python",
        output: `{'player': 'मीरा', 'level': 3, 'speed': 1}
{'player': 'वेद', 'speed': 1}`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "या धड्याचा सारांश तीन सूत्रे: positional arguments म्हणजे क्रम; keyword arguments म्हणजे नाव. *args तारकीने positional गोळा करून tuple देतो; **kwargs keyword गोळा करून dict देतो. call करताना * आणि ** संग्रह उलगडतात — list/dict चे घटक खरे argument बनतात. क्रम नियम — positional, *args, keyword/default, **kwargs — हा व्याकरणाचा भाग.\n\nआत्मपरीक्षणासाठी स्वतःला प्रश्न विचारा: *args ही संग्रहणं कशात साठते — tuple की list? **kwargs कशात — dict की set? call मध्ये *[1, 2, 3] काय करतो? wrapper ला दोन्ही कशासाठी हवे? या चार प्रश्नांची उत्तरे धड्यातून बरोबर दिसली पाहिजेत.\n\nउत्तरे नमुना तपासणी: *args tuple मध्ये, **kwargs dict मध्ये; call मधला * घटक उलगडतो; wrapper ही function मूळ function ला पाठवणारी असल्याने दोन्ही संग्रहणं राखणे आवश्यक. हेच चार प्रश्न परीक्षेत विचारले जातात.\n\nपुढे अभ्यासासाठी: वरची उदाहरणे व्यवस्थित मनात ठेवून स्वतः एक function लिहा जी *args ने बेरीज आणि **kwargs ने नावे गोळा करते. wrapping चे प्रयोग करून पहा — function मध्ये function call कसे होते ते. हा पाया पुढील decorators च्या धड्यासाठी गाभा आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "*args, **kwargs च्या खोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• arbitrary arguments (दर्शन): https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists\n• keyword arguments tutorial: https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments\n• unpacking argument lists: https://docs.python.org/3/tutorial/controlflow.html#unpacking-argument-lists\n• special parameters (/ और *) संकल्पना: https://docs.python.org/3/tutorial/controlflow.html#special-parameters\n• function call चा reference: https://docs.python.org/3/reference/expressions.html#calls\n• parameter ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-parameter\n• argument ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-argument\n• lambda आणि function: https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions\n• positional-only आणि keyword-only documents: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• Python अधिकृत tutorial मुखपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "वेगवेगळ्या पॅरामीटर रचना एकत्र",
        content: "Python function मध्ये एकत्रित रचनांची संपूर्ण यादी म्हणून — सामान्य positional, default values, *args, keyword-only (कोणते? — नावानेच मिळणारे), **kwargs एकाच definition मध्ये एकत्र येऊ शकतात. def order(item, qty=1, *extras, note=\"\", **meta) अशा रचनेत item positional, qty ला default, extras *args मध्ये, note keyword-only आणि meta **kwargs मध्ये — ही सगळी ठेवणी शक्य आहे.\n\nक्रमाचा नियम नेहमी लागू: positional (item) आधी, नंतर default (qty=1), नंतर *args, नंतर keyword-only arguments (कोणते? — दोन्ही बाजूंचा पुढे असलेला argument), शेवट **kwargs. या क्रमाच्या कोणत्याही बदलास Python SyntaxError देतो — व्यवस्था बंधनकारक आहे.\n\nkeyword-only argument समजावण्यासाठी: *args नंतर लिहिलेले पॅरामीटर फक्त नावाने भरता येतात. def build(name, *tags, mail=None) — mail हे keyword-only; build(\"मीरा\", \"a\", \"b\", mail=\"m@x.com\") असेच द्यावे लागते. positional मध्ये mail दिल्यास चूक. ही व्यवस्था जागा वाचवते — क्रम गोंधळण्याचा धोका विरतो.\n\nअशा जटिल फंक्शन व्यावहारिक library मध्ये सापडतात — configuration घेणारी function किंवा extension point असलेली. अभ्यास सुरुवातीला साधा ठेवा; प्रत्येक रचना वेगळी उलगडून मग एकत्र वापरा. एकत्रित definition लिहिताना क्रम आणि उद्देश नीट तपासून पहा — त्या व्यवस्थेवरच function च्या vचण्याची सोय अवलंबून असते.",
        code: `def order(item, qty=1, *extras, note="", **meta):
    print(item, "-", qty)
    print("extras:", extras)
    print("note:", note)
    print("meta:", meta)

order("वडापाव", 2, "तीखा", note="थंड", mode="fast")`,
        codeLanguage: "python",
        output: `वडापाव - 2
extras: ('तीखा',)
note: थंड
meta: {'mode': 'fast'}`,
      },
      {
        title: "नोंदणीकारक function — लवचिक घणी",
        content: "*args आणि **kwargs एकत्र वापरणारी function रचना अनेक उद्देशांसाठी लवचिक ठरते. logging नोंदणी करणारी function घ्या: def log(level, message, *extra, **ctx) — level आणि message नेहमी लागतात; extra मध्ये अतिरिक्त माहिती; ctx मध्ये contextual key/value. log(\"INFO\", \"सुरु होतं\", \"पायरी 1\", user=\"मीरा\") असा कॉल सर्व भाग एकत्र साठवतो.\n\nया रचनेचा फायदा: function चा disabled signature नाही — वापरकर्ता जशी माहिती देवू पाहतो तशी देतो. extra list मध्ये गोळा होते, ctx dict मध्ये. कोड बदलत नाही; माहितीचा प्रकार बदलू शकतो. library मध्ये अशी रचना वापरतात कारण function वाढताना interface मोडत राहत नाही.\n\nआणखी एक वापर: combine — जेथे अनेक स्रोतांचा data वेगळ्या स्वरूपात जोडायचा असतो. def merge(*parts, **opts) — parts मध्ये लांबीचे भाग, opts मध्ये सेटिंग्स. जॉइन करताना opts मधील separator वापरणे सोपे. दोन्ही संग्रहणं प्रकारे स्वतंत्र राहतात.\n\nजपण्याची गोष्ट: अशी लवचिक function वाचायला अवघड होऊ शकते — म्हणून चांगले नाव द्या आणि docstring लिहा. सर्वत्र *args/**kwargs फेकणे चांगली सवय नाही; जिथे arguments नेमके असतील तिथे नेमके पॅरामीटर लिहा. लवचिकता शोधताना स्पष्टता कमी करू नये.\n\nहे संतुलन ठरवता येते: जर वापरकर्त्यांना माहिती वेगवेगळ्या आकारात द्यायची असेल — तिथे *args/**kwargs उपयुक्त; जर interface स्थिर असेल — तिथे नेमके पॅरामीटर. थोडे लिहिले, विचार करता येईल आणि विभिन्नतेचा योग्य नियम सापडेल, हीच खरी कौशल्य वाटचाल.",
        code: `def log(level, message, *extra, **ctx):
    print(level, message)
    if extra:
        print("extra:", extra)
    if ctx:
        print("ctx:", ctx)

log("INFO", "सुरु होतं", "पायरी 1", user="मीरा")`,
        codeLanguage: "python",
        output: `INFO सुरु होतं
extra: ('पायरी 1',)
ctx: {'user': 'मीरा'}`,
      },
      {
        title: "अभ्यास: *args आणि **kwargs ची जोड",
        content: "एक छोटी सराव function लिहा जी *args ने संख्यांची बेरीज करते आणि **kwargs मधून label आणि unit वाचते. def report(*nums, label=\"बेरीज\", unit=\"\") — रचना पाहा: nums positional सर्व घेते, label आणि unit keyword-only. report(10, 20, 30, label=\"एकूण\") असा कॉल clump बेरीज 60 देतो.\n\nया एका प्रयोगात तीन गोष्टी पक्क्या होतात — *args चा tuple, keyword-only argument चा नियम, आणि default value ची सोय. स्वतःची उदाहरणे बनवून बदल करा: unit=\"कि.ग्रॅ.\", की label बदलणे, संख्या कमी-जास्त करणे. प्रत्येक फेरफाराने output चा अर्थ बदलतो — तोच खरा अभ्यास.\n\nशेवटी लक्षात ठेवा: या धड्यातील सर्व काही वास्तविक library आणि framework कोडमध्ये पुन्हा पुन्हा दिसेल. wrapper, decorator आणि flexible API या साऱ्यांचा पाया *args/**kwargs आहे — पाया घट्ट असल्यास पुढील बांधकाम सुरळीत होते.",
        code: `def report(*nums, label="बेरीज", unit=""):
    print(label + ":", sum(nums), unit)

report(10, 20, 30, label="एकूण", unit="कि.ग्रॅ.")`,
        codeLanguage: "python",
        output: `एकूण: 60 कि.ग्रॅ.`,
      },
    ],
    practiceQuestions: [
      "*args काय देतो?",
      "**kwargs काय देतो?",
      "function call मध्ये *list काय करतं?",
      "क्रम कसा राखतात?",
    ],
    quiz: [
      { question: "*args हा कशात साठतो?", options: ["tuple", "dict", "list", "set"], correct: 0 },
      { question: "**kwargs हा कशात साठतो?", options: ["dict", "tuple", "set", "string"], correct: 0 },
      { question: "सामान्य arguments क्रमाने कुठे?", options: ["आधी", "नंतर", "शेवटी", "कुठेही"], correct: 0 },
    ],
    challenge: {
      prompt: "name आणि इतर माहितीचा tuple बनवा.",
      starterCode: `def build(name, **extra):
    return [name, extra]

print(build("मीरा", वर्ग=10))`,
      expectedOutput: "['मीरा', {'वर्ग': 10}]",
    },
    interviewQuestions: [
      "*args vs **kwargs फरक?",
      "unpacking operator चे उदाहरण?",
    ],
    related: ["python-functions-advanced", "python-decorators", "python-functions"],
    prev: "python-functions-advanced",
    next: "python-decorators",
  },

  {
    slug: "python-decorators",
    categoryId: "python",
    title: "Decorators",
    marathiTitle: "Decorators - functions सजवणे",
    level: "advanced",
    minutes: 15,
    summary: "@decorator — function च्या आजूबाजूला नवीन वर्तन जोडणारी रचना.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "का शिकावे? Decorators - functions सजवणे चे फायदे आणि महत्त्व",
        content: "\"Decorators - functions सजवणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "decorator म्हणजे काय?",
        content: "Decorator म्हणजे function च्या भोवती अजून एक function आवरण (wrap) करणारी रचना. मूळ function ची क्षमता न बदलता तिच्याभोवती क्रिया लावायला — वेळ मोजणे, log ठेवणे, सुरक्षा तपासणी — decorator वापरतात.\n\nतंत्र सोपं: एक function दुसऱ्या function ला घेऊन तिची वर्धित आवृत्ती परत करतो. @ हे चिन्ह तो संबंध function च्या वर ठेवून जोडतं.\n\nMarathi च्या दृष्टीने विचार करा: decoration म्हणजे सजावट — मुख्य गोष्ट तशीच ठेवून तिच्याभोवती शोभा जोडली जाते.",
      },
      {
        title: "Syntax: @ लावण्याची रचना",
        content: "def function_name(func): — असा जो function ला घेऊन दुसरा (wrapper) परत करतो, त्याला decorator म्हणतात. function च्या वर @function_name लिहिलं की Python ते संबंध आपोआप जोडतो.\n\nखाली star decorator आहे: wrapper मूळ कामाच्या आधी आणि नंतर *** लावतो. @star नंतर say_hi हेच काम थोडं सजवून मिळतं — print(say_hi()) मुळे *** नमस्कार ***.\n\n@ चिन्ह न लिहिलं तर मूळ function तशीच राहते; @ हा शॉर्टकट म्हणजेच say_hi = star(say_hi) अशी बदली.",
        code: `def star(func):
    def wrapper():
        return "*** " + func() + " ***"
    return wrapper

@star
def say_hi():
    return "नमस्कार"

print(say_hi())`,
        codeLanguage: "python",
        output: `*** नमस्कार ***`,
      },
      {
        title: "उदाहरण: twice ने दोनदा चालवणे",
        content: "Decorator मूळ function अनेकदा चालवूही शकतो. twice चा wrapper func() मध्ये दोनदा call करतो — bell() ला दोन टिंग ऐकू येतात.\n\nwrapper ला definition सोबत नावे आणि काम सर्व काही मूळ function कडून येते; decorator फक्त त्यावर आवरण जोडतो.\n\nहीच योजना विशेषतः testing मध्ये वापरतात — तीच तपासणी अनेकदा चालवणे.",
        code: `def twice(func):
    def wrapper():
        func()
        func()
    return wrapper

@twice
def bell():
    print("टिंग")

bell()`,
        codeLanguage: "python",
        output: `टिंग
टिंग`,
      },
      {
        title: "वास्तविक उदाहरण: log",
        content: "प्रत्येक function कधी चालली हे नोंदवण्यासाठी log decorator. wrapper कोणतं काम सुरू झालं (func.__name__) आणि कधी संपलं ते print करतो.\n\n@log नंतर work हीच राहते — पण प्रत्येक वेळी तिच्याभोवती नोंदी दिसतात. निकाल result मधून पुढे जातो आणि print(work()) ला \"पूर्ण\" मिळतो.\n\nहा जोडलेला स्तर (logging) मोठ्या programs मध्ये कुठे काय घडलं हे शोधण्याचा सोपा उपाय आहे.",
        code: `def log(func):
    def wrapper():
        print("चालू होते:", func.__name__)
        result = func()
        print("झाले")
        return result
    return wrapper

@log
def work():
    print("काम")
    return "पूर्ण"

print(work())`,
        codeLanguage: "python",
        output: `चालू होते: work
काम
झाले
पूर्ण`,
      },
      {
        title: "arguments असलेले function सजवणे",
        content: "मूळ function चे arguments असेल तर wrapper ते स्वीकारले पाहिजे. *args द्वारे positional आणि **kwargs द्वारे keyword arguments घेऊन func(*args, **kwargs) ला ते पाठवा.\n\nrepeater(3) हा decorator factory आहे — तो तीनचा आकडा ठेवतो आणि खरा decorator परत करतो. @repeater(3) मुळे function ला तिन्ही वेळा चालवण्याचा आदेश मिळतो.\n\naizo niche: wrapper ला हेच argument रचना स्वीकारणे, तेच function ला पाठवणे याचा अर्थ — कोणताही function सजवता येतो.",
        code: `def repeater(times):
    def deco(func):
        def wrapper(*args, **kwargs):
            return func(*args, **kwargs) * times
        return wrapper
    return deco

@repeater(3)
def shout(text):
    return text.upper()

print(shout("नमस्कार"))`,
        codeLanguage: "python",
        output: `नमस्कारनमस्कारनमस्कार`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ return wrapper() लिहिणे — wrapper चालल्याचा आधीचा निकाल परत येतो; return wrapper म्हणजे दुवा (संदर्भ) परत देतो.\n\n✗ wrapper मधील arguments विसरणे — मूळ function ला काही हवे असेल तर wrapper लाही ते स्वीकारणं; func(*args) न करता call केल्यावर चूक येते.\n\n✗ @ लावल्यानंतर मूळ नाव काय दर्शवतं हे विसरणे — @ नंतर function नाव हा सजवलेला wrapper आहे; मूळ अवतरण तिथे उपलब्ध नसतो.\n\n✗ दोन decorator चा क्रम — @ अ आणि @ ब अशा दोन ओळींत खालचा आधी लागतो; निकालातील फरक तंत्रज्ञानाच्या क्रमाने बदलतो.\n\nप्रत्येक चुकीचा साधा तपास म्हणजे छोटं उदाहरण चालवणे — output पाहिला की रचना कशी आहे ते टिप्सपेक्षा सोपं दिसतं.",
      },
      {
        title: "Interactive: double_out function",
        content: "double_out या decorator ची क्रिया पकडा: wrapper मूळ function ला त्याच nick परत चालवतो — म्हणजे func(func(मूल्य)).\n\n@double_out ने add14(14) म्हणजे func(func(14)): आधी 14 + 14 = 28, नंतर 28 + 14 = 42. मुळात function एकदाच चालवली असती तर 28 यायचं.\n\nत्यामुळे निट्याबाबत दिसतं: decorator चा wrapper मूळ function ला कितीदा चालवतो हे output ठरवतं.",
        code: `def double_out(func):
    def wrapper(*args):
        return func(func(args[0]))
    return wrapper

@double_out
def add14(x):
    return x + 14

print(add14(14))`,
        codeLanguage: "python",
        output: `42`,
      },
      {
        title: "Mini Project: boxed text",
        content: "तुमच्याकडे function ping आहे, ती \"pong\" परत करते. या उत्तराच्या भोवती <| आणि |> असे संकेत जोडणारा decorator तयार करा.\n\nboxed चा wrapper func() चेत \"pong\" परत मिळवतो आणि \"<| \" + \"pong\" + \" |>\" अशी स्ट्रिंग जोडतो — निकाल <| pong |>.\n\nअशाच प्रकारे कोट्स किंवा चौकटी जोडायची असतील तर किमान एकदा decorator चा पाठ रचलेला राहतो.",
        code: `def boxed(func):
    def wrapper():
        return "<| " + func() + " |>"
    return wrapper

@boxed
def ping():
    return "pong"

print(ping())`,
        codeLanguage: "python",
        output: `<| pong |>`,
      },
      {
        title: "decorator आतून कसा चालतो",
        content: "decorator समजण्याची सर्वात सोपी रीती म्हणजे तो function-घेणारी आणि function-परत-करणारी function आहे. @star हे चिन्ह खरं तर वेगळं काहीच करत नाही — @star हे say_hi = star(say_hi) या ओळीचेच दुसरे रूप आहे. Python decorator ची ओळ वाचल्यावर खालची function व्याख्या तयार करतो आणि मग तीच function star ला argument म्हणून पाठवतो; star चा निकाल (सजवलेली function) त्या नावाशी पुन्हा जोडला जातो. म्हणून say_hi हे नाव पुढे मूळ function नव्हे, तर wrapper ला सूचित करते.\n\nwrapper म्हणजे काय? star मधील आतली function — ती मूळ function ला सामावून घेते. star ची कॉल संपल्यावरही wrapper ला func आठवतो — हे closure चे काम. म्हणजे decorator चा पाया closure आहे; wrapper आणि मूळ function यांच्यातील बंधन तो जपतो.\n\nकार्यकारी क्षण पकडा: say_hi() लिहिताना खरोखर wrapper() चालतो. wrapper आत func() (मूळ function) चालवतो आणि त्याभोवती तुमच्या सजावटीच्या ओळी — *** आधी-नंतर. म्हणून output सजवलेला दिसतो. जर wrapper ने func परत न केला तर मूळ निकाल गायब होतो; म्हणून return विसरू नये.\n\nया सर्वामुळे decorator चा खरा अर्थ स्पष्ट होतो: तो मूळ function बदलत नाही किंवा तिच्यात डोकावत नाही; त्या भोवती एक नवा स्तर बांधतो. मूळ function तशीच सुरक्षित राहते; नवा स्तर नोंद, वेळ किंवा तपासणी जोडतो. हेच वेगळेपण — वर्तन जोडणे, कोड न बदलता.",
        code: `def star(func):
    def wrapper():
        return "*** " + func() + " ***"
    return wrapper

def hello():
    return "नमस्कार"

say = star(hello)
print(say())`,
        codeLanguage: "python",
        output: `*** नमस्कार ***`,
      },
      {
        title: "functools.wraps — ओळख जपणे",
        content: "decorator लावल्यावर मूळ function चे नाव आणि माहिती wrapper मुळे बदलून जाते — म्हणजे say_hi.__name__ wrapper होतो. हे लहान वाटतं, पण मोठ्या problems आणते: logging मध्ये नावे चुकीची दिसतात, documentation मध्ये function चे खरे वर्णन हरवते, आणि debugger मध्ये अडचण येते. त्यावर उपाय म्हणजे functools.wraps.\n\nfunctools.wraps हा स्वतः एक decorator आहे — तो wrapper वर लावतात. तो मूळ function चे नाव (__name__), दस्तऐवज (__doc__), आणि इतर माहिती wrapper वर नकल करतो. import functools करून @functools.wraps(func) ही ओळ wrapper definition च्या वर लिहा. आता say_hi.__name__ पुन्हा say_hi दिसेल.\n\nउदाहरण: def log(func): @functools.wraps(func) def wrapper(): ... — यामुळे सजवलेल्या function ची ओळख मूळ ठेवली जाते. हे छोटे औपचारिक संरक्षण असले तरी गंभीर library कोडमध्ये नेहमी लागते.\n\nलक्षात ठेवा: wraps हा decorator आणखी खोल गोष्टी — जसे __wrapped__ गुणधर्म — जोडतो; त्याने मूळ function परत शोधता येते. म्हणजे decorator च्या थरातून खाली जाण्याचा मार्गही उपलब्ध होतो. उत्तम library लेखक wraps नेहमी वापरतात; सवय लावा.",
        code: `import functools

def counter(func):
    @functools.wraps(func)
    def wrapper():
        wrapper.calls += 1
        return func()
    wrapper.calls = 0
    return wrapper

@counter
def hello():
    return "नमस्कार"

hello()
print(hello.__name__, hello.calls)`,
        codeLanguage: "python",
        output: `hello 1`,
      },
      {
        title: "arguments असलेले decorator — पूर्ण जोडणी",
        content: "मूळ function चे arguments असतील तर wrapper ने ती सर्व स्वीकारायला हवीत. पद्धत माहीत आहे — *args आणि **kwargs. ते गोळा करा आणि तेच मूळ function ला पाठवा: def wrapper(*args, **kwargs): return func(*args, **kwargs). मग कोणतेही function सजवता येते — एक argument असो वा दहा, keyword असो वा नसो.\n\narguments असलेला decorator अजून मजेदार — तेव्हा decorator स्वतः argument घेतो (@repeat(3) सारखा). यासाठी तीन थर लागतात: बाहेरील function argument घेते, मधला function (खरा decorator) मूळ function घेते, आतला wrapper तेच चालवते. @repeat(3) वाचताना Python आधी repeat(3) चालवतो — तो decorator परत करतो; मग तो decorator say_hi ला गुंडाळतो.\n\nथरांची चाचणी: repeat(3) चा निकाल एक function आहे जी मूळ function घेते. म्हणून @repeat(3) मध्ये दोन कंस आहेत — पहिला कंस repeat ला arguments देतो, decorator यंत्र तयार होते आणि नंतर तेच @ ने function वर लागू होते. ही 'decorator factory' पद्धत logging level, cache size, retry count अशा पर्यायांसाठी वापरतात.\n\nअशा रचनेत output कसा येतो? wrapper मूळ function अनेकदा चालवून सर्व निकाल जोडतो. खालील उदाहरणात shout(\"नमस्कार\") तीन वेळा चालून तीन जोडलेले निकाल देते. हीच arguments-सह decorator ची खरी ताकद.",
        code: `def repeat(times):
    def deco(func):
        def wrapper(*args, **kwargs):
            out = ""
            for _ in range(times):
                out += func(*args, **kwargs)
            return out
        return wrapper
    return deco

@repeat(3)
def shout(word):
    return word.upper()

print(shout("नमस्कार"))`,
        codeLanguage: "python",
        output: `नमस्कारनमस्कारनमस्कार`,
      },
      {
        title: "अनेक decorators — वरचा-खालचा क्रम",
        content: "एका function वर अनेक decorators लावता येतात — प्रत्येक ओळीने एक स्तर वाढतो. महत्त्वाचा नियम: खालचा decorator आधी चालतो आणि वरचा नंतर. @a @b असे दोन असतील तर ते f = a(b(f)) असा अर्थ होतो — मूळ function आधी b मध्ये जाते, नंतर तो निकाल a मध्ये. रचनेचा हा मूलभूत क्रम पकडणे निदान interview मध्ये नेहमी विचारले जाते.\n\nक्रमाने output कसा बदलतो ते पहा. पहिला decorator *** जोडतो आणि दुसरा !!! जोडतो. @star वर आणि @bang खाली असेल, तर मूळ function आधी !!! ने सजते आणि मग *** ने — म्हणजे *** !!! नमस्कार !!! ***. क्रम उलटला तर आवरणही उलटे — हे वाचून समजून घ्या.\n\nलक्षात ठेवा: decorator चा उद्देश आवरण आहे — प्रत्येक स्तर function च्या भोवती एक कवच बांधतो. अनेक decorators असतील तर सर्वात आतला (शेवटच्या ओळीचा) मूळ function ला सर्वात जवळ असतो; सर्वात वरचा सर्वात दूर. ही 'कांद्याच्या पापुद्र्यां' सारखी रचना.\n\nव्यवहारात क्रम महत्त्वाचा: authentication decorator, logging decorator आणि caching decorator एकत्र लावताना कोणता आधी हवा याचा विचार आवश्यक. उदा. cache बाहेर असेल तर वेग पुन्हा वापरला जातो पण logging वाचवले जाते; logging बाहेर असेल तर प्रत्येक वेळी नोंद होते. त्यामुळे प्रत्येक decorator चा प्रभाव समजून क्रम ठरवा.",
        code: `def star(func):
    def wrapper(*a, **k):
        return "*** " + func(*a, **k) + " ***"
    return wrapper

def bang(func):
    def wrapper(*a, **k):
        return func(*a, **k) + "!!!"
    return wrapper

@star
@bang
def hello():
    return "नमस्कार"

print(hello())`,
        codeLanguage: "python",
        output: `*** नमस्कार!!! ***`,
      },
      {
        title: "वास्तविक उपयोग — timing, logging, validation",
        content: "decorator चे तीन सर्वाधिक प्रचलित उपयोग समजून घ्या. पहिला — वेळ मोजणे (timing): मूळ function चालण्याच्या आधी घडीची वेळ घ्या आणि नंतर फरक छापा. performance तपासताना प्रत्येक function मध्ये वेळ मोजण्याचा कोड लिहिण्याऐवजी हा decorator वापरलेला बरा. कोड स्वच्छ राहतो आणि सर्व function ला एकच गणना.\n\nदुसरा — logging: प्रत्येक function कधी सुरू झाली, काय argument मिळाले, काय निकाल आला हे नोंदवणे. मोठ्या application मध्ये कुठे अडकले हे शोधायला ही नोंद अमूल्य ठरते. decorator मुळे प्रत्येक function मध्ये print टाकण्याची गरज नाही — एकच ठिकाणी नियम ठेवला.\n\nतिसरा — सुरक्षा तपासणी (validation): function चालण्यापूर्वी वापरकर्त्याला परवानगी आहे का ते तपासणे. login नसेल तर exception raise करा. याच पद्धतीने मापदंड तपासणे — वय 18 पेक्षा कमी असल्यास परवानगी नाकारणे. मूळ function व्यवसायावर लक्ष ठेवते; तपासणी decorator करतो.\n\nया तीन उदाहरणांतील साम्य: वर्तन एका ठिकाणी लिहा आणि अनेक function वर लावा. यालाच क्रॉस-कटिंग चिंता म्हणतात — तर्क function च्या आत नाही तर भोवती. आता decorator एक 'ट्रिक' न वाटता एक आर्किटेक्चरल साधन वाटेल.",
        code: `import time

def timed(func):
    def wrapper(*a, **k):
        start = time.time()
        result = func(*a, **k)
        print(func.__name__, "झाले")
        return result
    return wrapper

@timed
def work():
    total = sum(range(1000))
    return total

work()`,
        codeLanguage: "python",
        output: `work झाले`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "decorator चा पाया तीन गोष्टींत आहे: function ही object, closure, आणि function-argument/function-return. @ हे नुसते सुगम चिन्ह — f = deco(f) याचा अर्थ. wrapper नेहमी *args/**kwargs घेतो आणि मूळ function ला तेच पाठवतो. functools.wraps ने ओळख जपा. arguments असलेला decorator तीन थरांचा असतो — factory, decorator आणि wrapper.\n\nआत्मपरीक्षण: say = star(hello) आणि @star — दोन्ही समान का? अनेक decorator चा क्रम कोणता आधी चालतो? wraps न वापरल्यास काय त्रास? wrapper ने return विसरल्यास output काय? या चार प्रश्नांची उत्तरे तुम्ही स्वतः स्पष्ट शब्दांत देऊ शकले, तर धड्याचे सार गाठले.\n\nसरावासाठी सर्वात सोपा decorator लिहा: function च्या निकालाला \"OK: \" लावणारा. मग त्याला arguments देणारा करा, नंतर wraps लावा आणि दोन decorators जोडा. प्रत्येक टप्प्यावर output बदलतो — तोच अनुभव शिकवतो.\n\ndecorator आता तुमच्या हातातील शक्तिशाली साधन आहे. पुढील generators आणि itertools मध्येही function च्या या लवचिकतेचा दुवा लागतो. वास्तविक framework — Flask, Django, pytest — मध्ये decorator चा वापर रोजचा आहे; हा धडा त्या सर्वांची पहिली झलक आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "decorator च्या अधिक अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• decorators tutorial: https://docs.python.org/3/tutorial/controlflow.html#decorators\n• function definition reference: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• functools module (wraps सह): https://docs.python.org/3/library/functools.html\n• functools.wraps चे दस्तऐवज: https://docs.python.org/3/library/functools.html#functools.wraps\n• closure ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-closure\n• decorator ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-decorator\n• lambda expressions: https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions\n• nested functions आणि scope: https://docs.python.org/3/reference/executionmodel.html\n• PEP 318 (decorators चा प्रस्ताव): https://peps.python.org/pep-0318/\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org, python.org आणि peps.python.org वरूनच आहेत.",
      },
      {
        title: "class-based decorator — object ने सजावट",
        content: "decorator function नेच नाही तर class नेही बनतो, आणि तो समजून घेणे फायदेशीर आहे. class-based decorator मध्ये __init__ मध्ये सजवायची function साठवली जाते आणि __call__ मध्ये मूळ function चालवली जाते. जेव्हा say_hi() असे लिहितात, तेव्हा तो class instance म्हणून wrapper चा __call__ चालतो — आणि तेथेच सजावटीचा तर्क लिहितात.\n\nखालील उदाहरण पहा: class Star मध्ये __init__(self, func) ने func ठेवला; __call__ मध्ये तो चालवून *** वेष्टन केले. @Star असे लिहिल्यावर hello हे नाव Star चे instance ला सूचित करते — पण कॉल करताना तेथे __call__ चालतो. function-आधारित decorator आणि class-आधारित यांचा परिणाम एकच; फरक इतकाच की class मध्ये state ठेवायला सोपे.\n\nstate ठेवणे म्हणजे काय? म्हणजे किती वेळा function चालली याचा हिशेब — self.calls += 1 — आणि तो instance सोबत टिकतो. तसेच timeout, retry count, cache अशा मूल्यांना class गुणधर्म म्हणून ठेवता येते. function-आधारित wrapper मध्येही हे करता येते, पण class मध्ये ते अधिक सुटसुटीत दिसते.\n\nclass decorator चा दुसरा फायदा: decorator स्वतःला अनेक वेळा वापरता येते आणि प्रत्येक instance स्वतःचा state जपते. @Star अनेक function वर लावल्यास प्रत्येकीचा हिशेब वेगळा राहतो. हेच function-आधारित decorator मध्ये closure नेही शक्य आहे, पण class मध्ये इरादा स्पष्ट दिसतो.\n\nयाचे नुकसानही जाणून घ्या: class decorator function decorator पेक्षा थोडा जड आणि बोजड वाटतो; छोट्या कामासाठी function-आधारित पद्धतच बरी. तसेच instance हा callable आहे हे लक्षात ठेवणे आवश्यक — metadata नकलासाठी functools.wraps लागू होत नाही, त्याऐलगीज __name__ स्वतः ठेवावा लागतो. हे बारकावे लक्षात ठेवून निवड करा.",
        code: `class Star:
    def __init__(self, func):
        self.func = func
        self.calls = 0
    def __call__(self, *args, **kwargs):
        self.calls += 1
        return "*** " + self.func(*args, **kwargs) + " ***"

@Star
def hello():
    return "नमस्कार"

print(hello())
print(hello.calls)`,
        codeLanguage: "python",
        output: `*** नमस्कार ***
1`,
      },
      {
        title: "decorator वि. वारसा — योग्य साधन निवड",
        content: "अनेकदा 'decorator का वापरायचा, वारसा (inheritance) का?' असा प्रश्न पडतो. दोन्ही 'वर्तन जोडण्याचे' साधन आहेत, पण त्यांचा उद्देश वेगळा. वारसा हा 'is-a' संबंध दाखवतो — Manager ही Employee आहे; आणि तो वर्गाची ओळख बदलतो. decorator मात्र 'एखाद्या function भोवतीचा स्तर' जोडतो — ओळख न बदलता वर्तन. हा भेद योग्य साधन निवडण्यासाठी मूलभूत आहे.\n\nवारसा वापरा जेव्हा स्वरूप आणि गुणधर्म वाढवायचे आहेत — नवीन वर्गाला जुन्याचे सर्व गुण मिळतील आणि त्यात भर पडेल. decorator वापरा जेव्हा क्रियेच्या भोवती लागू होणारे ओझे — नोंद, वेळ, तपासणी — एकाच function वर लावायचे आहे आणि बाकी कोड बदलायचे नाही. दोन्ही एकत्रही वापरता येतात; एकमेकांना विरोध नाही.\n\nकधी कधी दोन्ही शक्य असतात आणि निवड अवघड होते. उदा. 'सर्व bank क्रियांवर audit' — हे decorator ने सर्वांत चोख बसते, कारण प्रत्येक function वर स्वतंत्रपणे लावता येते. 'Savings हे Account आहे' — हे वारसा. निकष: वर्तनाचा प्रकार 'कोण आहे' (identity) की 'काय जोडले जाते' (aspect)?\n\nशेवटी एक व्यावहारिक सूचना: decorator चा अतिवापर टाळा. प्रत्येक छोट्या function वर तीन-चार decorators लावल्यास कोड वाचायला अवघड होतो आणि debugger मध्ये खोल थर तयार होतो. स्तर कमी ठेवा, नावे स्पष्ट द्या. decorator हा साधन आहे, आत्मप्रदर्शन नाही.",
        code: `def audit(func):
    def wrapper(*a, **k):
        print("नोंद:", func.__name__)
        return func(*a, **k)
    return wrapper

class Account:
    @audit
    def deposit(self, amount):
        return amount

acc = Account()
print(acc.deposit(500))`,
        codeLanguage: "python",
        output: `नोंद: deposit
500`,
      },
      {
        title: "सराव: पहिला decorator स्वतः लिहा",
        content: "आता सर्व कल्पना एकत्र वापरून एक decorator सुरुवातीपासून लिहूया. उद्देश: प्रत्येक function चालल्यावर तिचे नाव आणि निकाल नोंदवणे. पहिली पायरी — एक function जी दुसरी function घेते: def notebook(func):. दुसरी पायरी — आत एक wrapper लिहा ज्याला *args, **kwargs मिळतील: def wrapper(*args, **kwargs):. तिसरी पायरी — wrapper आत मूळ function चालवा आणि निकाल जपा: result = func(*args, **kwargs). चौथी पायरी — तुमची नोंद ठेवा: print(func.__name__, \"→\", result). शेवटी result परत करा आणि wrapper परत करा.\n\nया चार पायऱ्या लक्षात ठेवल्या तर कोणताही decorator लिहिता येतो. कारण प्रत्येक decorator याच साच्यात वाकते — घ्या, सजा, परत द्या. फरक फक्त 'सजा' या टप्प्यात काय ठेवले यात. नोंद, वेळ, पुनरावृत्ती, तपासणी — सर्व इथेच बसतात.\n\nपुढची पायरी — functools.wraps(func) wrapper च्या वर जोडा. मग मूळ function चे नाव आणि माहिती टिकेल. हे विसरल्यास नोंद कमी उपयोगी होते; wraps ही चांगली सवय. छोट्या decorator मध्येही wraps लावणे हे व्यावसायिक कोडचे लक्षण.\n\nशेवटचा सराव: याच decorator वर arguments असलेला decorator बनवा — @notebook(level=\"INFO\") असा. तीन थर लागतील हे आठवा: बाहेरचा level घेतो, मधला decorator, आतला wrapper. हा सराव केल्यावर decorator तुमच्या बोटांत बसतो. आणि मग कोणत्याही framework मधील @app.route, @pytest.mark, @property हे सर्व सहज वाचता येईल — कारण त्यांचे मूळ तेच आहे.",
        code: `import functools

def notebook(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(func.__name__, "→", result)
        return result
    return wrapper

@notebook
def add(a, b):
    return a + b

add(3, 4)`,
        codeLanguage: "python",
        output: `add → 7`,
      },
    ],
    practiceQuestions: [
      "decorator म्हणजे काय?",
      "@ कशासाठी?",
      "wrapper मध्ये return का?",
      "argument decorator कसे बनवतात?",
    ],
    quiz: [
      { question: "decorator ला function काय देतो?", options: ["function", "संख्या", "string", "None"], correct: 0 },
      { question: "@star चा अर्थ?", options: ["hello = star(hello)", "hello() कॉल", "import", "delete"], correct: 0 },
      { question: "wrapper मध्ये return विसरलात तर?", options: ["None मिळतं", "error", "काही नाही", "double"], correct: 0 },
    ],
    challenge: {
      prompt: "नमस्कार ला ! जोडणारा decorator.",
      starterCode: `def shout(fn):
    return lambda: fn().upper() + "!"

@shout
def msg():
    return "नमस्कार"

print(msg())`,
      expectedOutput: "नमस्कार!",
    },
    interviewQuestions: [
      "decorator कशी function बदलतात?",
      "decorator मध्ये *args/**kwargs का धरतात?",
    ],
    related: ["python-args-kwargs", "python-functions-advanced", "python-functions"],
    prev: "python-args-kwargs",
    next: "python-generators",
  },

  {
    slug: "python-generators",
    categoryId: "python",
    title: "Generators",
    marathiTitle: "Generators - संग्रहाचे कारखाने",
    level: "advanced",
    minutes: 15,
    summary: "yield द्वारे मोठा data टप्प्याटप्प्याने देणारे function — मेमरी मित्रवत.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Generators - संग्रहाचे कारखाने म्हणजे काय?",
        content: "yield द्वारे मोठा data टप्प्याटप्प्याने देणारे function — मेमरी मित्रवत.\nGenerator ही function आहे जी निकाल एका वेळी एक देते — संपूर्ण यादी एकदाच निर्माण न करता.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Generators - संग्रहाचे कारखाने चे फायदे आणि महत्त्व",
        content: "✓ मोठ्या-मोठ्या संख्या किंवा data पुरेसा हवा असेल तर संपूर्ण यादी memory मध्ये एकत्र करण्याऐवजी generator थेट वापरता येतो — हा तिचा खरा उपयोग.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "generator — एक-एक value देणारा",
        content: "Generator ही function आहे जी निकाल एका वेळी एक देते — संपूर्ण यादी एकदाच निर्माण न करता. for loop मध्ये निट्याचे element हातातून जातात आणि मागील निकाल विसरला जातो.\n\nfunction मध्ये yield लिहिलं की ती generator बनते. तिला call केल्यावर function चालत नाही — तुम्हाला generator object मिळतो; प्रत्येक वेळी मागितल्यावर (next किंवा for) पुढचा value येतो.\n\nमोठ्या-मोठ्या संख्या किंवा data पुरेसा हवा असेल तर संपूर्ण यादी memory मध्ये एकत्र करण्याऐवजी generator थेट वापरता येतो — हा तिचा खरा उपयोग.",
      },
      {
        title: "Syntax: yield ने निकाल",
        content: "def मध्ये yield हीच खास ओळ असते. function चालवली तर yield कडे येऊन तिथला value परत होतो आणि function त्या जागी थांबते.\n\ncountup च्या प्रत्येक yield ने i ची किंमत मिळते — 0, 1, 2, 3. list(countup(4)) ने ते सगळं एकाच सूचीत मिळवता येतं.\n\nyield दरम्यान function ची स्थिती जशी होती तशी राहते; पुढच्या वेळी जिथे थांबले तिथूनच पुढे सुरू होते.",
        code: `def first_n(n):
    i = 0
    while i < n:
        yield i
        i = i + 1

print(list(first_n(4)))`,
        codeLanguage: "python",
        output: `[0, 1, 2, 3]`,
      },
      {
        title: "state जपला जातो — fibonacci",
        content: "खाली fib generator अखंड fibonacci संख्या देते — प्रत्येक पुढची संख्या मागच्या दोनची बेरीज. function मध्ये a आणि b ची जोडी state ठेवते.\n\nfor _ in range(8) म्हणजे आठ वेळा list comprehension ने next(g) मागवला. प्रत्येक वेळी function पुढचा yield देऊन आपली जागा स्मटतं.\n\nmemory मध्ये संपूर्ण क्रम कधीच नसतो — फक्त a आणि b सध्याचे दोन आकडे; म्हणून कितीही मोठा fibonacci ला मिळेल.",
        code: `def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

g = fib()
print([next(g) for _ in range(8)])`,
        codeLanguage: "python",
        output: `[0, 1, 1, 2, 3, 5, 8, 13]`,
      },
      {
        title: "वास्तविक उदाहरण: मोठा data",
        content: "फाईल किंवा डेटाबेस मोठा असेल तर त्याचा सर्व भाग एकदाच वाचणे महाग पडू शकते. Generator प्रत्येक वेळी एका भागावर काम करतो — बाकीचा data पुढे हव्या तेव्हा येतो.\n\nbatches हा generator तर n संख्येपर्यंतची बॅच ओळख देतो; for b in batches(3) मध्ये प्रत्येक बॅच एका ओळीवर दिसते.\n\nहा नमुना मोठ्या फाईल्स दर वेळी एक ओळ वाचून काम करताना लागतो — कुठेही संपूर्ण फाईल लोड होत नाही.",
        code: `def batches(n):
    batch = 1
    while batch <= n:
        yield f"बॅच {batch}"
        batch += 1

for b in batches(3):
    print(b)`,
        codeLanguage: "python",
        output: `बॅच 1
बॅच 2
बॅच 3`,
      },
      {
        title: "yield vs return — सामान्य चुका",
        content: "✗ yield लिहिल्यावरही return लिहणे — yield च तुमचं थांबणे; return नंतर आलं तर code चालणं होणार नाही.\n\n✗ मोठा data एकदाच list मध्ये तयार करणे — memory वाचवायला generator च वापरा; सगळे एकत्र नको असतील तर सूची बनवू नका.\n\n✗ अखंड generator वर for अमर्याद चालवणे — fib सारखा infinite generator फक्त break किंवा islice च्या मर्यादेनेच थांबतो.\n\n✗ generator एकदा वापरून पुन्हा वापरणे — generator संपल्यावर संपतो; पुन्हा हवा तर नवा generator तयार करा.\n\nखाली simple generator एकच value देतो — list(simple(3)) मध्ये 3 एकटाच येतो.",
        code: `def simple(value):
    yield value

print(list(simple(3)))`,
        codeLanguage: "python",
        output: `[3]`,
      },
      {
        title: "मेमरी मित्रवत — नोंदी",
        content: "Generator म्हणजे memory चा मित्र: संपूर्ण यादी कधीच निर्माण होत नाही — फक्त सध्याचा निकाल हातात असतो.\n\nशेकडो हजार नोंदी असतील तर यादी बनवल्यास स्मृती खर्चाचा फटका बसतो; generator तोच data छोट्या 'तुकड्यांमध्ये' देतो.\n\nकाय अधिक दिसते: 10 लाख संख्या हव्या असल्या तरी आधीच्या document चा data घेण्याऐवजी generator काढून जेवढं लागतं तेवढंच next() करतो.",
      },
      {
        title: "Interactive: squares generator",
        content: "कृती: 1 पासून 4 पर्यंतच्या संख्यांचे वर्ग (square) देणारा generator तयार करा.\n\nsquares मध्ये n चा वर्ग yield होतो (n * n), नंतर n वाढवतात. list(squares()) → [1, 4, 9, 16].\n\nn चा वरचा कडा (<= 4) बदलून पहा — 1 ते कितीपर्यंत जायचं ते loop ची अट ठरवते.",
        code: `def squares():
    n = 1
    while n <= 4:
        yield n * n
        n += 1

print(list(squares()))`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16]`,
      },
      {
        title: "Mini Project: तिकीट क्रमांक",
        content: "तिकिटांचे क्रमांक क्रमाक्रमाने सोडवण्यासाठी generator तयार करा — 101 पासून सुरू होऊन ठराविक संख्येपर्यंत.\n\ntickets प्रत्येक वेळी पुढचा क्रमांक yield करतो आणि वाढवतो. for t in tickets() ने 101, 102, 103 छापले जातात.\n\nक्रमांक कुठून, कुठपर्यंत द्यायचा हे फक्त variables ठरवतात — generator ची रचना भविष्यात मोठ्या क्रमांकासाठीही तशीच राहते.",
        code: `def tickets():
    num = 101
    while num <= 103:
        yield num
        num += 1

for t in tickets():
    print(t)`,
        codeLanguage: "python",
        output: `101
102
103`,
      },
      {
        title: "yield खोलवर — function कशी थांबते",
        content: "yield able केवळ 'निकाल देणे' नाही; तो function ला जागच्या जागी थांबवतो आणि पुढच्या मागणीवर तेथूनच सुरू करतो. सामान्य function return वर पूर्ण संपते आणि तिचे स्थानिक variables नष्ट होतात. yield नंतर मात्र function जिवंत राहते — तिचे variables, तिची स्थिती, आणि कार्यकारी ओळ अशीच टिकते. हा फरकच generator चा जन्म आहे.\n\nकाय होतं ते टप्प्याटप्प्याने पहा. generator function जेव्हा प्रथम call करतात तेव्हा ती चालत नाही — फक्त generator object तयार होतो. next(g) मागितल्यावर function पहिल्या yield पर्यंत चालते, तिथले मूल्य परत करते आणि थांबते. पुन्हा next(g) मागितल्यावर ती नेमक्या त्याच ठिकाणाहून पुढे जाते — सुरुवातीपासून नाही. हे 'थांबा-सुरू करा' नृत्यच generator.\n\nएक उदाहरण अशा प्रवासासाठी: def steps(): print('A'); yield 1; print('B'); yield 2; print('C'). आता g = steps() बनवा; आधी काहीच print होत नाही. next(g) वर A आणि 1; दुसऱ्या next(g) वर B आणि 2; तिसऱ्या next(g) वर C आणि नंतर StopIteration. हा क्रम सर्व generator चे सत्य उघड करतो.\n\nसरतेशेवटी for loop हेच काम सोपे करते — तो आपोआप next मागत राहतो आणि StopIteration आल्यावर थांबतो. म्हणून लोक 'yield तर बहुतेक वेळा for मध्येच वापरतात'. तरीही next चे आंतरिक ज्ञान ठेवणे महत्त्वाचे — तेथूनच send, close आणि generator चे नियंत्रण समजते.",
        code: `def steps():
    yield 1
    yield 2
    yield 3

g = steps()
print(next(g))
print(next(g))
print(next(g))`,
        codeLanguage: "python",
        output: `1
2
3`,
      },
      {
        title: "generator expression वि. generator function",
        content: "generator बनवायचे दोन मार्ग आहेत. पहिला — yield असलेली function (generator function). दुसरा — generator expression, म्हणजे (x for x in संग्रह) अशा छोट्या कंसातील रचना. दोन्ही एकच गोष्ट देतात — generator object; फरक निर्मितीच्या सोयीत आहे. छोट्या सरळ रूपांतरासाठी expression पुरे; जटिल तर्क, अनेक अटी किंवा स्थिती ठेवायची असल्यास function.\n\nतुलना करा: (n * n for n in range(5)) आणि def squares(): for n in range(5): yield n * n. दोन्हीचे उत्पादन सारखे — 0, 1, 4, 9, 16. expression एक ओळ; function वाचण्यायोग्य आणि वाढवण्यायोग्य. म्हणून एकाच मूल्याची पुनरावृत्ती करायची असेल तर function चांगली; प्रसंगोपात रूपांतरासाठी expression.\n\ngenerator expression चे एक खरे बल — तो function call मध्ये थेट वापरता येतो. sum(n * n for n in range(1000)) मध्ये वेगळा कंसही लागत नाही; Python तो expression function argument म्हणून स्वीकारतो. इथे संपूर्ण list कधीही memory मध्ये येत नाही; बेरीज हळूहळू होते.\n\nएक सावधानता: generator expression ने एकदाच वापरता येतो — संपल्यावर पुन्हा काही उरत नाही. दोनदा वापरायचा असेल तर list comprehension वापरा किंवा generator function पुन्हा call करा. हा फरक विसरल्यास रिकामा निकाल आणि गोंधळ होतो; generator च्या सर्व वापरात हेच सूत्र.",
        code: `gen = (n * n for n in range(4))
print(sum(gen))
gen2 = (n * n for n in range(4))
print(list(gen2))`,
        codeLanguage: "python",
        output: `14
[0, 1, 4, 9]`,
      },
      {
        title: "send, close, throw — generator चे नियंत्रण",
        content: "generator केवळ मूल्य देत नाही; तिला मूल्य पाठवताही येते. send() पद्धत yield expression ला मूल्य पाठवते आणि generator पुढील yield पर्यंत चालवते. पहिल्यांदा send करण्यापूर्वी next() ने generator थोडी पुढे आणावी लागते — थेट send(None) पासून सुरुवात करता येते. हे जरा खोल पण शक्तिशाली वैशिष्ट्य आहे.\n\nखालील रचना पहा: def echo(): while True: received = yield — इथे yield चे मूल्य received मध्ये येते. g.send(\"नमस्कार\") ने ते पाठवले आणि generator पुढच्या टप्प्यावर गेली. अशी 'coroutine' सारखी देवाणघेवाण Python मध्ये send ने साध्य होते — पुढे asyncio मध्ये याचे रूप दिसते.\n\nclose() पद्धत generator ला अचानक थांबवते — तिच्या आत GeneratorExit उभा होतो. संसाधने बंद करण्याचा कोड finally मध्ये ठेवला असेल तर तो चालेल. throw() मात्र generator मध्ये exception फेकते — ती तिथे पकडली जाऊ शकते किंवा बाहेर पडू शकते. resources सोडणे आणि त्रुटी हाताळणे यांची ही दोन साधने.\n\nरोजच्या कोडमध्ये send/throw क्वचित लागतात; पण त्यांची ओळख असल्यास for loop 'काय घडतं' याचे पूर्ण चित्र मिळते. for loop स्वतःच next() वापरतो आणि StopIteration पकडतो — या तीन पद्धती समजल्या की generator चे आंतरिक शास्त्र स्पष्ट होते.",
        code: `def echo():
    while True:
        received = yield
        print("मिळाले:", received)

g = echo()
next(g)
g.send("नमस्कार")`,
        codeLanguage: "python",
        output: `मिळाले: नमस्कार`,
      },
      {
        title: "generator pipeline — डेटा प्रवाह",
        content: "generator ची खरी ताकद अनेक generator एकामागून एक जोडल्यावर दिसते — याला pipeline म्हणतात. एक generator डेटा देते, दुसरा त्यावर काही करतो, तिसरा फिल्टर करतो — आणि सर्व काही हळूहळू वाहते. एकाच वेळी एक घटक memory मध्ये; संपूर्ण डेटा कधीही जमा होत नाही.\n\nएक ठोस उदाहरण: numbers = range(1, 11) हा स्रोत; squares = (n * n for n in numbers) हा पहिला स्तर; evens = (s for s in squares if s % 2 == 0) हा दुसरा स्तर. for s in evens: print(s) मध्ये प्रत्येक संख्या वर्ग होऊन सम असेल तरच पुढे जाते. 1 → 1 (वगळा), 2 → 4 (ठेवा), 3 → 9 (वगळा), 4 → 16 (ठेवा).\n\nकार्यक्षमता इथेच: जर दहा लाख संख्या असत्या तर list comprehension ने सर्व वर्ग आधीच तयार होते; pipeline मात्र एक एक वर्ग तयार करते आणि शेवटपर्यंत नेते. एकालाही संपूर्ण संग्रह memory मध्ये नको. यामुळे मोठ्या log file, streaming data किंवा database cursor वाचताना pipeline सुवर्ण ठरते.\n\nवाचनीयतेसाठी एक सूचना: pipeline लांब होताच नावे द्या — जसे cleaned = (clean(line) for line in lines), filtered = (line for line in cleaned if line). एका ओळीत पाच generator ठेवण्यापेक्षा प्रत्येक टप्पा वेगळा लिहा; नंतर सर्व code वाचण्यायोग्य राहतो. production कोडमध्ये ही शैली सामान्य आहे — ETL (extract, transform, load) मध्येच नाही, वेब server च्या request handling मध्येही.",
        code: `numbers = range(1, 8)
squares = (n * n for n in numbers)
evens = (s for s in squares if s % 2 == 0)
print(list(evens))`,
        codeLanguage: "python",
        output: `[4, 16, 36]`,
      },
      {
        title: "अनंत generator आणि islice",
        content: "generator infinite असू शकतो — while True म्हणजे कधीही न थांबणारा स्रोत. सर्व fibonacci, सर्व मूळ संख्या, अखंड क्रमांक — हे अनंत क्रम generator ने सहज व्यक्त होतात. प्रश्न पडेल: अनंत क्रम संपेल ना? उत्तर — तो कधीही संपत नाही; आपण किती हवे तेवढेच मागतो.\n\nमर्यादा आणण्यासाठी दोन मार्ग. पहिला — for loop मध्ये break: काही अट पूर्ण झाल्यावर थांबवणे. दुसरा — itertools.islice(generator, n) जो पहिले n घटक देऊन थांबतो. islice ही सर्वात सुरक्षित सवय; कारण कोडचा मानस स्पष्ट दिसतो आणि उर्वरित generator बंद होतो.\n\nउदा. naturals = (i for i in count()) — itertools.cycle आणि count अखंड आहेत. list(islice(naturals, 5)) मिळवते 0 1 2 3 4. किंवा फिबोनाची: def fib(): a, b = 0, 1; while True: yield a; a, b = b, a + b — list(islice(fib(), 10)) पहिल्या दहा संख्या देते. एकही संख्या आधी तयार नाही.\n\nएक महत्त्वाची सोबत: अनंत generator ला list() केलं तर प्रोग्राम कधीच संपणार नाही आणि memory भरेल. म्हणून अनंत generator वर कधीही list, sum (जर ती संपत नसेल) किंवा for बिना break वापरू नका. islice, break किंवा takewhile हे तुमचे मर्यादा-रक्षक. हे लक्षात ठेवलं की अनंत क्रम शक्तिशाली साधन ठरतात.",
        code: `def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

from itertools import islice
print(list(islice(fib(), 7)))`,
        codeLanguage: "python",
        output: `[0, 1, 1, 2, 3, 5, 8]`,
      },
      {
        title: "generator वि. iterator — वर्गातील रूप",
        content: "generator हा iterator चा सर्वात सोपा मार्ग आहे, पण तोच एकमेव मार्ग नाही. iterator ही अशी वस्तू आहे जी __iter__ आणि __next__ पद्धती लागू करते; next() मागितल्यावर पुढचे मूल्य देते आणि शेवटी StopIteration उभा करते. generator या दोन्ही पद्धती आपोआप लागू करतो — म्हणून तो 'तयार iterator'.\n\nस्वतःचा iterator वर्ग लिहिणे शक्य आहे — पण त्यात पुष्कळ कोड लागतो. class Countdown मध्ये __init__ ने n ठेवा, __iter__ ने self परत करा, आणि __next__ मध्ये n शून्य झाल्यास StopIteration उभा करा. तुलनेत generator function फक्त चार ओळींत तेच करतो. म्हणून नवीन कोडमध्ये generator हा पहिला पर्याय.\n\nतरी iterator चे ज्ञान का ठेवावे? कारण सर्व containers — list, dict, set, file — iterator देतात आणि for loop त्यांचाच वापर करतो. 'for' मागे __iter__ आणि __next__ चे काम चालते हे समजल्यास dictionary च्या view, zip, enumerate — सर्व व्यवस्था बसते. generator हा या यंत्रणेचा सुलभ चेहरा आहे.\n\nफरक सारांश: generator = yield असलेली function (एक ओळीत iterator); iterator = __iter__/__next__ असलेला वर्ग (अधिक नियंत्रण, अधिक कोड). दोन्ही एकच साठा साधतात; निवड सोयीवर. कधी कधी state गुंतागुंतीचा असेल तर वर्ग चांगला; बहुतेक वेळा generator पुरतो. हे दोन्ही तंत्र पुढील itertools धड्यात अधिक फोफावतात.",
        code: `class Countdown:
    def __init__(self, n):
        self.n = n
    def __iter__(self):
        return self
    def __next__(self):
        if self.n <= 0:
            raise StopIteration
        self.n -= 1
        return self.n + 1

print(list(Countdown(3)))`,
        codeLanguage: "python",
        output: `[3, 2, 1]`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "generator चा गाभा एकच: yield ने function थांबते आणि स्थिती जपते; next/for ने पुढचे मूल्य मिळते. generator function आणि generator expression हे दोन मार्ग. स्मृती बचत हा सर्वात मोठा फायदा — संपूर्ण संग्रह कधीच तयार होत नाही. send/close/throw ही तीन नियंत्रणे; islice/break/takewhile ही अनंत क्रमावरील लगाम.\n\nआत्मपरीक्षण: yield आणि return यांत फरक काय? generator दुसऱ्यांदा वापरता येतो का? list comprehension vs generator expression — स्मृती कशी वेगळी? send() पहिल्यांदा थेट का चालत नाही? या प्रश्नांची उत्तरे स्पष्ट हवीत.\n\nसराव: एक generator लिहा जो संग्रहातील फक्त धन संख्या देते; तो pipeline मध्ये जोडा — squares नंतर filter. दुसरा generator तयार करा जो फाईलच्या ओळी एक एक वाचतो (for line in file चा नमुना). प्रत्येक उदाहरणात memory किती वापरली याचा अंदाज करा — तोच खरा अभ्यास.\n\nमोठ्या प्रणाली मध्ये generator सर्वत्र आहेत — डेटा प्रक्रिया, log वाचन, वेब स्क्रॅपिंग, ML batches. हा धडा तुमच्या heapq तयार करतो. पुढील itertools धडा generator वर आधारित तयार साधने शिकवेल — दोन्ही एकत्र केल्यावर डेटा हाताळणीचे तुमचे साधनपेटू भरले जाईल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "generator च्या अधिक अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• generators tutorial: https://docs.python.org/3/tutorial/classes.html#generators\n• yield expressions reference: https://docs.python.org/3/reference/expressions.html#yield-expressions\n• generator ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-generator\n• generator expression संदर्भ: https://docs.python.org/3/reference/expressions.html#generator-expressions\n• functional programming howto: https://docs.python.org/3/howto/functional.html\n• iterator ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-iterator\n• iterator types reference: https://docs.python.org/3/library/stdtypes.html#iterator-types\n• itertools module (islice सह): https://docs.python.org/3/library/itertools.html\n• asyncio आणि coroutine (पुढील): https://docs.python.org/3/library/asyncio-task.html\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "स्मृती मापन — generator चा फायदा किती",
        content: "generator चा फायदा बोलण्यापेक्षा मोजणे चांगले. Python मध्ये sys.getsizeof किंवा resource मॉड्यूलने स्मृती मोजता येते, पण अंदाज लावण्यासाठी एक साधा प्रयोग पुरतो. दशलक्ष संख्यांचा list बनवा आणि दुसरीकडे तितक्याच संख्यांचा generator बनवा. list ने 40 MB पेक्षा जास्त स्मृती घेते (प्रत्येक int साठी अंदाजे 28 बाइट). generator object मात्र काही बाइट्स — कारण त्यात फक्त स्थिती ठेवली जाते.\n\nकारण स्पष्ट आहे: list सर्व घटक साठवते; generator फक्त सध्याचे स्थान आणि स्थानिक variables ठेवते. तो पुढचे मूल्य तयार करण्याची 'विधी' धरतो, मूल्यांचा संग्रह नाही. मोठ्या डेटावर हाच फरक program चालतो की memory error देतो हे ठरवतो.\n\nगणितीय रूपांतरणे हे ठळक उदाहरण: sum(n * n for n in range(10_000_000)) सहज चालते; sum([n * n for n in range(10_000_000)]) मात्र स्मृती भरू शकते. दोन्ही एकच उत्तर देतात — फरक स्मृतीत. म्हणून 'मोठा डेटा एकदाच वापरायचा' असेल तर generator निवडा.\n\nपण generator नेहमी वेगवान नाही. list comprehension काही वेळा जलद असते; generator ला प्रत्येक पायरीवर next चा खर्च असतो. तरीही स्मृतीच्या बाबतीत generator अजिंक्य. म्हणून नियम: संपूर्ण संग्रह दोन-तीन वेळा वापरायचा असेल तर list; एकदाच वापरायचा आणि डेटा मोठा असेल तर generator. हा नियम व्यवहारात सर्वात उपयोगी ठरतो.\n\nआणखी एक सूक्ष्म मुद्दा: स्मृती वाचवली तरी generator चा कोड वाचायला थोडा कठीण होऊ शकतो. म्हणून जिथे फायदा लहान आहे (शंभर घटक), तिथे साधा list वापरणेच चांगले. 'मोठेपणा' हा generator वापरण्याचा खरा निकष आहे — लहान डेटावर तो नुसते गुंतागुंत वाढवतो.",
        code: `import sys

data_list = [n for n in range(1000)]
data_gen = (n for n in range(1000))
print("list bytes:", sys.getsizeof(data_list))
print("generator bytes:", sys.getsizeof(data_gen))`,
        codeLanguage: "python",
        output: `list bytes: 8856
generator bytes: 208`,
      },
      {
        title: "वास्तविक उदाहरण: मोठी log फाईल वाचणे",
        content: "सर्वात व्यावहारिक उदाहरण म्हणजे log फाईल वाचणे. जर fiftMB ची फाईल असेल आणि तिच्या प्रत्येक ओळीत त्रुटी शोधायच्या असतील, तर फाईल सर्व एकदाच memory मध्ये न घेता ओळ-ओळ वाचता येते. Python मध्ये फाईल object स्वतःच iterator आहे — for line in f: प्रत्येक ओळ एक एक देते, संपूर्ण फाईल कधीच नको.\n\nहा नमुना generator मध्ये वेटाळता येतो: def error_lines(path): with open(path) as f: for line in f: if \"ERROR\" in line: yield line.rstrip(). आता तुमच्याकडे एक 'त्रुटी देणारी' generator आहे. for e in error_lines(\"app.log\"): print(e) — फाईल कितीही मोठी असो, स्मृतीत फक्त एक ओळ.\n\nयात अनेक स्तर जोडता येतात — pipeline प्रमाणे. error_lines नंतर errors_only = (line for line in error_lines(...) if \"timeout\" in line). दुसरा स्तर अजून गाळणी करतो. सर्व हळूहळू वाहते; प्रत्येक स्तर फक्त एक घटक हाताळतो.\n\nया शैलीचे फायदे तीन — स्मृती कमी, सुरुवातीचा विलंब कमी (फाईल वाचायला लागत नाही), आणि कोड सुटसुटीत. तोटाही आहे: फाईल एकदाच वाचता येते; दोनदा वाचायची असेल तर दुसरा generator तयार करा किंवा दुसरे तंत्र. पण log, CSV, JSON-lines यांसारख्या stream डेटासाठी हीच सर्वोत्तम पद्धत.\n\nशेवटी सराव: तुमच्या system मधील एखादी मोठी text फाईल घ्या आणि तिच्या ओळींची संख्या मोजा — sum(1 for _ in open(f)). हे एका ओळीत चालते आणि फाईल स्मृतीत न येता. हा छोटा प्रयोग generator ची शक्ती अनुभवायला पुरतो.",
        code: `def error_lines(path):
    with open(path) as f:
        for line in f:
            if "ERROR" in line:
                yield line.rstrip()

lines = ["INFO ok", "ERROR fail", "ERROR timeout"]
with open("app.log", "w") as f:
    f.write("\\n".join(lines))
print(list(error_lines("app.log")))`,
        codeLanguage: "python",
        output: `['ERROR fail', 'ERROR timeout']`,
      },
      {
        title: "झटपट पुनरावृत्ती: generator चे सहा मुद्दे",
        content: "शेवटचा झटपट उजळणी — परीक्षेपूर्वी वाचण्यासारखे सहा मुद्दे. पहिला: yield असलेली function म्हणजे generator function; call केल्यावर generator object मिळतो. दुसरा: next() किंवा for loop नेच मूल्ये मागितली जातात; function तिथे थांबते आणि पुन्हा तिथूनच सुरू होते. तिसरा: स्मृतीत संपूर्ण संग्रह नसतो — फक्त एक घटक आणि स्थिती. चौथा: generator एकदाच वापरता येतो; संपला की संपला. पाचवा: send/close/throw ने नियंत्रण; islice/takewhile ने मर्यादा. सहावा: pipeline ने अनेक generator जोडून डेटा हळूहळू वाहवता येतो.\n\nहे सहा मुद्दे सतत स्मरणात ठेवा. यांतील कुठलाही मुद्दा गोंधळला तर तो पुन्हा वाचा — कारण हेच पुढील प्रकरणांचे आधार आहेत.\n\nसराव म्हणून दोन ओळींचा generator लिहा जो 1 ते 5 पर्यंतच्या संख्यांचे घन (cube) देतो. मग तोच generator expression मध्ये बदला. दोन्ही एकच निकाल देतात का ते तपासा. शेवटी तो pipeline मध्ये वापरा — फक्त सम घन ठेवा. हा छोटा प्रयोग सहा मुद्दे एकत्र बांधतो.\n\nलक्षात ठेवा: generator ही 'आळशी' (lazy) गणना आहे — काहीही विनाकारण तयार होत नाही. हीच आळस ताकद आहे. पुढील itertools धड्यात हीच आळसी वृत्ती तयार साधनांत दिसेल — count, cycle, repeat, chain; ते सर्व generator सारखेच मागणीनुसार चालतात. म्हणून हा धडा त्या धड्याचा सरळ पुर्वगामी आहे.",
        code: `def cubes(n):
    for i in range(1, n + 1):
        yield i ** 3

print(list(cubes(5)))
print(sum(c for c in cubes(5) if c % 2 == 0))`,
        codeLanguage: "python",
        output: `[1, 8, 27, 64, 125]
72`,
      },
    ],
    practiceQuestions: [
      "generator कसा तयार होतो?",
      "yield म्हणजे काय?",
      "अनंत क्रम कसा संभाळतात?",
      "generator चा फायदा?",
    ],
    quiz: [
      { question: "generator मध्ये काय वापरतात?", options: ["yield", "return", "import", "break"], correct: 0 },
      { question: "मेमरीचा काय लाभ?", options: ["कमी मेमरी", "जास्त मेमरी", "सगळं मेमरी", "काही नाही"], correct: 0 },
      { question: "अनंत generator कसा थांबवतात प्रत्येक वेळी?", options: ["next() मर्यादेने", "for", "while True", "delete"], correct: 0 },
    ],
    challenge: {
      prompt: "पहिले 4 वर्ग (squares) generator.",
      starterCode: `def squares(n):
    for i in range(1, n + 1):
        yield i * i

print(list(squares(4)))`,
      expectedOutput: "[1, 4, 9, 16]",
    },
    interviewQuestions: [
      "generator vs list — कधी कोणते?",
      "yield vs return?",
    ],
    related: ["python-decorators", "python-itertools", "python-functions-advanced"],
    prev: "python-decorators",
    next: "python-itertools",
  },

  {
    slug: "python-itertools",
    categoryId: "python",
    title: "itertools",
    marathiTitle: "itertools - संयोजनांची साधने",
    level: "advanced",
    minutes: 15,
    summary: "combinations, permutations, chain, count, product — संयोग साधणारे itertools.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "itertools - संयोजनांची साधने म्हणजे काय?",
        content: "combinations, permutations, chain, count, product — संयोग साधणारे itertools.\nitertools ही Python ची library आहे जी संग्रहांवर वेगवेगळी कामं करते — संयोग, क्रम, संग्रह जोडणे, अखंड क्रम इ.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? itertools - संयोजनांची साधने चे फायदे आणि महत्त्व",
        content: "✓ combinations(संग्रह, r) दिलेल्या संग्रहातून r घटकांचे सर्व संयोग देतो — क्रम महत्त्वाचा नाही.\n✓ list(combinations([1, 2, 3], 2)) → [(1, 2), (1, 3), (2, 3)] — इथे (2, 1) नाही; कारण combination मध्ये संघाची सदस्यता महत्त्वाची, क्रम नाही.\n✓ combination मध्ये क्रम महत्त्वाचा नाही, म्हणून आरोही-मीरा दिसेल पण मीरा-आरोही नाही — एकूण सहा वेगळे संघ.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "itertools — संयोगांची साधने",
        content: "itertools ही Python ची library आहे जी संग्रहांवर वेगवेगळी कामं करते — संयोग, क्रम, संग्रह जोडणे, अखंड क्रम इ. ही गणिताची जड कामं स्वतः लिहिण्याऐवजी तयार साधनातून होतात.\n\nती install करावी लागत नाही — standard library मध्येच आहे; import itertools लिहिलं की थेट उपलब्ध होते.\n\nयातलं प्रत्येक साधन iterator देते म्हणून result पाहायला सूचीत बदलावं लागतं — list(...) ने.",
      },
      {
        title: "Syntax: combinations आणि permutations",
        content: "combinations(संग्रह, r) दिलेल्या संग्रहातून r घटकांचे सर्व संयोग देतो — क्रम महत्त्वाचा नाही. permutations(संग्रह, r) मात्र क्रमही बदलून सर्व रचना देतो.\n\nlist(combinations([1, 2, 3], 2)) → [(1, 2), (1, 3), (2, 3)] — इथे (2, 1) नाही; कारण combination मध्ये संघाची सदस्यता महत्त्वाची, क्रम नाही.\n\nlist(permutations([1, 2], 2)) → [(1, 2), (2, 1)] — permutations मध्ये क्रम बदलल्याने दोन्ही रचना येतात.",
        code: `from itertools import combinations, permutations

print(list(combinations([1, 2, 3], 2)))
print(list(permutations([1, 2], 2)))`,
        codeLanguage: "python",
        output: `[(1, 2), (1, 3), (2, 3)]
[(1, 2), (2, 1)]`,
      },
      {
        title: "chain आणि product — संग्रह जोडणे",
        content: "chain(*संग्रह) अनेक संग्रह एकत्र करून एक लांब क्रम बनवतो. product(संग्रह, संग्रह) पहिल्याच्या प्रत्येक घटकाला दुसऱ्याच्या प्रत्येक घटकाशी जोडून सर्व संभाव्य जोड्या देतो.\n\nlist(chain([1, 2], [3, 4])) → [1, 2, 3, 4]. product ने [(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')] — 2 x 2 = 4 जोड्या.\n\nproduct म्हणजे कार्ड्सच्या डेकसारखे — सर्व शक्य जोड्या; chain म्हणजे भिन्न याद्या एकत्र मिसळणे.",
        code: `from itertools import chain, product

print(list(chain([1, 2], [3, 4])))
print(list(product([1, 2], ["a", "b"])))`,
        codeLanguage: "python",
        output: `[1, 2, 3, 4]
[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]`,
      },
      {
        title: "count आणि islice — अखंड क्रम",
        content: "count(सुरवात) अखंड क्रम देतो — 5, 6, 7, ... असा कधीच न थांबणारा. islice(iterator, n) मात्र पहिले n घटक घेऊन थांबते.\n\nlist(islice(count(5), 4)) → [5, 6, 7, 8]. count स्वतः कधीच संपत नाही; islice ने मर्यादा आणली — त्यामुळे output थांबला.\n\nअखंड generator किंवा count वापरताना islice ही सुरक्षित मर्यादा असते; त्याशिवाय for loop कधीही संपत नाही.",
        code: `from itertools import count, islice

print(list(islice(count(5), 4)))`,
        codeLanguage: "python",
        output: `[5, 6, 7, 8]`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ import मध्ये नाव विसरणे — itertools.combinations वापरताना module नाव लिहा; from itertools import combinations लिहिलं तर नाव सरळ combinations ठेवा.\n\n✗ जास्त घटकांवर permutations किंवा product — 10 घटकांचे permutations 36 लाख; मर्यादाबद्ध output साठी islice किंवा छोटा r घ्या.\n\n✗ iterator पुन्हा वापरणे — एकदा combo संपल्यावर त्यात काही उरत नाही; पुन्हा हवा तर नवीन combinations कॉल करा.\n\nखाली संघाची पहिली जोडीच बघतो — combinations क्रमवार जोड्या देतो, त्यात पहिली ('अ', 'ब').",
        code: `from itertools import combinations

pairs = list(combinations(["अ", "ब", "क"], 2))
print(pairs[0])`,
        codeLanguage: "python",
        output: `('अ', 'ब')`,
      },
      {
        title: "मोठ्या data वर मर्यादा — नोंदी",
        content: "itertools मधील बहुतेक साधने मर्यादा नसतानाही चालतात — count, cycle सारखे अखंड क्रम देणारी. त्यामुळे वापरताना मर्यादा आणणं ही आपली जबाबदारी.\n\nproduct आणि permutations ची संख्या घटकांची संख्या वाढताच झपाट्याने वाढते — मोठ्या संग्रहावर तो चालवण्यापूर्वी छोट्या sample वर तपासा.\n\nlist() ने सगळं रूपांतर मेमरीत खेचतं; फक्त जेवढं लागतं तेवढं for पुढे किंवा islice ने काढा — हीच साधी दक्षता.",
      },
      {
        title: "Interactive: संयोग मोजणे",
        content: "कृती: चार घटकांच्या संग्रहातून दोन घटकांचे किती संयोग निघतात ते मोजा.\n\nlist(combinations([10, 20, 30, 40], 2)) मध्ये एकूण 6 जोड्या येतात — nCr चा नियमच तो: 4 x 3 / 2 = 6.\n\nlen() ने थेट संख्या मिळते. r बदलून पहा — r=3 केलं तर 4 संयोग, r=1 केलं तर 4 संयोग.",
        code: `from itertools import combinations

print(len(list(combinations([10, 20, 30, 40], 2))))`,
        codeLanguage: "python",
        output: `6`,
      },
      {
        title: "Mini Project: संघ जोड्या",
        content: "चार खेळाडूंचे सर्व दोन-दोन जणांचे संघ तयार करा. combinations(players, 2) प्रत्येक शक्य जोड देते.\n\ncombination मध्ये क्रम महत्त्वाचा नाही, म्हणून आरोही-मीरा दिसेल पण मीरा-आरोही नाही — एकूण सहा वेगळे संघ.\n\nत्यामुळे स्पर्धेचे सामने, गट किंवा नियुक्त्या अशा परिस्थितीत combinations थेट उत्तर देतं.",
        code: `from itertools import combinations

players = ["आरोही", "मीरा", "वेद", "कल्याण"]
for pair in combinations(players, 2):
    print(pair[0], "आणि", pair[1])`,
        codeLanguage: "python",
        output: `आरोही आणि मीरा
आरोही आणि वेद
आरोही आणि कल्याण
मीरा आणि वेद
मीरा आणि कल्याण
वेद आणि कल्याण`,
      },
      {
        title: "cycle आणि repeat — पुनरावृत्तीची साधने",
        content: "itertools मध्ये पुनरावृत्ती करणारी दोन साधने आहेत — cycle आणि repeat. cycle(संग्रह) एका संग्रहाची मालिका कधीही न संपता फिरवत राहतो. उदा. चार रंगांची यादी cycle केली तर सतत लाल, हिरवा, पिवळा, निळा, पुन्हा लाल... असा क्रम चालू राहतो. टेबलच्या रंगांची पट्टी, स्पर्धेतील अष्टपैलू नियुक्ती, किंवा CPU मधील round-robin scheduling — सर्वत्र cycle उपयोगी.\n\nrepeat(मूल्य, n) मात्र एकच मूल्य n वेळा देतो; n दिला नाही तर अखंडपणे देत राहतो. दोन्ही साधने generator सारखीच आळशी आहेत — मूल्य एखादेच तयार करत नाहीत. म्हणून मर्यादा ठेवणे आपली जबाबदारी: islice किंवा for + break. उदा. list(islice(cycle(\"RGB\"), 7)) → ['R','G','B','R','G','B','R'].\n\nव्यावहारिक उदाहरण: एका इमारतीच्या तीन लिफ्ट सतत फिरत असतील तर नंबर नेहमी 1, 2, 3, 1, 2, 3 असे देण्यासाठी cycle वापरता येते. खाली टेबल रंगांच्या नियुक्तीचे उदाहरण पहा — प्रत्येक खुर्चीला पुढचा रंग मिळतो.\n\nलक्षात ठेवा: repeat ने एकच object वारंवार दिला जातो; जर तो mutable असेल (list) तर सर्व ठिकाणी तीच list असते — बदल केल्यास सर्वत्र बदल दिसतो. म्हणून immutable मूल्ये किंवा स्थिर constants साठीच repeat वापरा. हा एक महत्त्वाचा बारकावा आहे.",
        code: `from itertools import cycle, repeat, islice

seats = 5
colors = cycle(["लाल", "हिरवा", "निळा"])
for i in range(seats):
    print(i + 1, next(colors))`,
        codeLanguage: "python",
        output: `1 लाल
2 हिरवा
3 निळा
4 लाल
5 हिरवा`,
      },
      {
        title: "chain आणि zip_longest — संग्रह जोडणी",
        content: "chain अनेक iterable एकामागे एक जोडतो. chain([1, 2], [3, 4]) → 1, 2, 3, 4. chain.from_iterable([[1, 2], [3, 4]]) हा आणखी एक प्रकार — एका 'संग्रहाचा संग्रह' सपाट करतो. list संग्रहांची सूची असेल तर from_iterable हा योग्य मार्ग; * ने unpack करून chain(*lists) असेही लिहिता येते.\n\nchain चा वापर: अनेक फाईल्स एकत्र वाचणे, अनेक विभागांची नावे एका यादीत आणणे, किंवा डेटाबेसच्या काही प्रश्नांची उत्तरे जोडणे. सर्व एकच iterator बनतो आणि मेमरीत संपूर्ण संग्रह न बनता काम चालते.\n\nzip_longest मात्र zip पेक्षा वेगळा — दोन्ही संग्रह समान लांबीचे नसले तरी शेवटपर्यंत जोडतो. जिथे एक संपतो तिथे fillvalue (डीफॉल्ट None) भरतो. हे तासनाम्यांच्या जोडण्यासाठी उपयोगी: एका यादीत तीन नावे आणि दुसऱ्यात दोन, तर तिसऱ्यासाठी None येतो.\n\nउदा. zip_longest([\"अ\", \"ब\", \"क\"], [1, 2], fillvalue=0) → ('अ', 1), ('ब', 2), ('क', 0). सामान्य zip मध्ये शेवटची जोडी गळली असती. म्हणून दोन्हीची उद्दिष्टे वेगळी — zip कमीत कमी लांबीपर्यंत, zip_longest सर्वात लांब लांबीपर्यंत. निवड डेटानुसार करा.",
        code: `from itertools import chain, zip_longest

print(list(chain([1, 2], [3])))
print(list(chain.from_iterable([[1, 2], [3, 4]])))
print(list(zip_longest(["अ", "ब", "क"], [1, 2], fillvalue=0)))`,
        codeLanguage: "python",
        output: `[1, 2, 3]
[1, 2, 3, 4]
[('अ', 1), ('ब', 2), ('क', 0)]`,
      },
      {
        title: "groupby — गट करणे",
        content: "groupby(संग्रह, key) एकाच key चे सलग घटक गट करतो. महत्त्वाची अट: groupby फक्त सलग (लागोपाठ) जुळणारे घटक गट करतो — म्हणून प्रथम sorted करणे आवश्यक असते. उदा. विद्यार्थ्यांची सूची वर्गानुसार गट करायची असेल तर प्रथम वर्गाने sorted करा, मग groupby(students, key=lambda s: s[\"class\"]).\n\ngroupby एक iterator देते; त्यातील प्रत्येक घटक एक जोडी — key आणि त्या key च्या घटकांचा sub-iterator. for cls, members in groupby(...): इथे cls वर्ग आहे आणि members त्या वर्गातील विद्यार्थ्यांचा generator. members ला list() करून पाहावे लागते.\n\nएक सामान्य चूक: sorted न करता groupby वापरणे. तर एकाच key चे घटक वेगवेगळ्या गटांत विखुरलेले दिसतात. उदा. नावे [\"अ\", \"ब\", \"अ\"] असतील तर दोन 'अ' गट वेगळे येतात. म्हणून नियम: groupby च्या आधी sorted नेहमी.\n\nव्यावहारिक उपयोग: विक्रीचा डेटा महिन्यानुसार, शाळेचा डेटा वर्गानुसार, लॉग श्रेणीनुसार गट करणे. groupby मुळे सरळ कोडमध्ये गट आणि त्यांची बेरीज, मोजणी करता येते. खाली नावांचे पहिल्या अक्षरानुसार गट पहा — sorted केल्यामुळे गट बरोबर येतात.",
        code: `from itertools import groupby

words = ["आरोही", "अमोल", "वेद", "विठ्ठल", "मीरा"]
words.sort()
for first, group in groupby(words, key=lambda w: w[0]):
    print(first, list(group))`,
        codeLanguage: "python",
        output: `अ ['अमोल']
आ ['आरोही']
म ['मीरा']
व ['वेद', 'विठ्ठल']`,
      },
      {
        title: "accumulate, starmap — गणितीय प्रवाह",
        content: "accumulate(संग्रह) चालू बेरीज देते — प्रत्येक टप्प्यावरची एकत्रित मूल्ये. accumulate([1, 2, 3, 4]) → 1, 3, 6, 10. म्हणजे पहिले मूल्य तसेच, नंतर प्रत्येक घटक मागच्या बेरजेत मिळवून. running total, चालू गुणाकार, चालू कमाल — सर्व accumulate ने होते; दुसरा argument function देतो.\n\nउदा. accumulate([1, 2, 3, 4], max) → 1, 2, 3, 4 (चालू कमाल). accumulate([1, 2, 3, 4], lambda a, b: a * b) → 1, 2, 6, 24 (चालू गुणाकार). उदा. function दिली नाही तर बेरीज. इतिहास, गुंतवणुकीचा वाढीचा दर, गुणांची चालू सरासरी — सर्वत्र accumulate.\n\nstarmap(function, संग्रह) ही map ची आवृत्ती — पण ती प्रत्येक घटक unpack करते. म्हणजे संग्रहात जोड्या (tuples) असतील तर function ला दोन argument मिळतात. map(lambda p: p[0] + p[1], pairs) ऐवजी starmap(lambda a, b: a + b, pairs) — वाचायला सोपे.\n\nदोन्ही आळशी आहेत — पहिले मूल्य लगेच, पुढील मागणीवर. मोठ्या डेटावर चालणाऱ्या बेरजा, गुणाकार किंवा संचयी आकडेवारी साठी ही साधने आदर्श. एकत्र वापरल्यास — starmap नंतर accumulate — अनेक डेटा-प्रक्रिया दोन ओळींत उरकतात.",
        code: `from itertools import accumulate, starmap
import operator

print(list(accumulate([1, 2, 3, 4])))
print(list(accumulate([1, 2, 3, 4], operator.mul)))
print(list(starmap(operator.add, [(1, 2), (3, 4)])))`,
        codeLanguage: "python",
        output: `[1, 3, 6, 10]
[1, 2, 6, 24]
[3, 7]`,
      },
      {
        title: "takewhile, dropwhile, filterfalse",
        content: "takewhile(अट, संग्रह) सुरुवातीपासून घटक देत राहतो जोपर्यंत अट खरी आहे; अट खोटी झाली की थांबतो — नंतरचे घटक तपासलेही जात नाहीत. dropwhile मात्र उलटा — अट खरी असेल तोपर्यंत घटक सोडतो, मग उरलेले सर्व देतो. दोन्ही आदेशबद्ध डेटासाठी उत्तम — जसे sorted सूची.\n\nउदा. takewhile(lambda x: x < 5, [1, 2, 3, 7, 1]) → 1, 2, 3 (7 आला की थांबला; नंतरचा 1 आला तरी थांबला). dropwhile(lambda x: x < 5, [1, 2, 3, 7, 1]) → 7, 1. फरक लक्षात ठेवा: takewhile 'सुरुवातीपासून घ्या', dropwhile 'सुरुवातीचे सोडा'. दोन्ही पहिल्या खोट्या क्षणी निर्णायक वळण घेतात.\n\nfilterfalse(अट, संग्रह) हा filter चा उलटा — जे अट खोटी आहे तेच ठेवतो. filter True घेतो, filterfalse False घेतो. विषम संख्या, चुकीच्या नोंदी, बंद झालेल्या वस्तू — अशा 'वगळलेल्या' गटासाठी filterfalse एका ओळीत उत्तर देतो.\n\nव्यवहारात ही तीन साधने लॉग विश्लेषणात लागतात: त्रुटी सुरू झाल्यापासूनच्या ओळी (dropwhile सुरुवातीच्या सामान्य ओळी सोडून), स्थिर स्थितीचा कालावधी (takewhile), किंवा केवळ असफल प्रयत्न (filterfalse). यामुळे जटिल nested loops टळतात आणि कोड वाचनीय राहतो.",
        code: `from itertools import takewhile, dropwhile, filterfalse

nums = [1, 2, 3, 7, 1, 4]
print(list(takewhile(lambda x: x < 5, nums)))
print(list(dropwhile(lambda x: x < 5, nums)))
print(list(filterfalse(lambda x: x % 2 == 0, nums)))`,
        codeLanguage: "python",
        output: `[1, 2, 3]
[7, 1, 4]
[1, 3, 7, 1]`,
      },
      {
        title: "combinations_with_replacement आणि permutations",
        content: "combinations आणि permutations शिकलात; त्यांची तिसरी बहीण combinations_with_replacement आहे. combinations मध्ये प्रत्येक घटक एकदाच वापरला जातो; combinations_with_replacement मध्ये तो पुन्हा वापरता येतो. उदा. combinations_with_replacement('AB', 2) → AA, AB, BB. इथे क्रम महत्त्वाचा नाही, पण पुनरावृत्ती चालते.\n\nहा फरक व्यावहारिक आहे: दुकानात 3 वस्तूंपैकी 2 निवडायच्या — त्या वेगळ्या असतील (combinations) का एकच वस्तू दोनदा घ्यायची (with replacement)? उदा. पासे दोनदा टाकणे, किंवा दोन मुलांना एकच खेळणे — पुनरावृत्ती शक्य. म्हणून प्रश्न नीट विचारा: पुनरावृत्ती हवी का नको?\n\npermutations सर्व क्रम विचारात घेतो. permutations('ABC', 2) → AB, AC, BA, BC, CA, CB — 6 रचना. जेव्हा क्रम महत्त्वाचा (पहिला, दुसरा, तिसरा पुरस्कार) तेव्हा permutations; जेव्हा फक्त निवड महत्त्वाची (समिती) तेव्हा combinations. हा इयत्तेतील nCr की nPr प्रश्न — Python स्वतः सोडवतो.\n\nसूत्र लक्षात ठेवा: permutations = nPr = n! / (n - r)!, combinations = nCr = n! / (r! (n - r)!). उदा. 5 पैकी 2: permutations 20, combinations 10. मोजणीची अपेक्षा आधी करा आणि मग len(list(...)) ने तपासा. हा प्रयोग गणित आणि programming दोन्ही जोडतो. संख्येचा स्फोट लक्षात ठेवा — मोठ्या n वर permutations प्रचंड होतात.",
        code: `from itertools import combinations, combinations_with_replacement, permutations

print(list(combinations_with_replacement("AB", 2)))
print(list(permutations("ABC", 2)))
print(sorted(list(combinations("ABC", 2))))`,
        codeLanguage: "python",
        output: `[('A', 'A'), ('A', 'B'), ('B', 'B')]
[('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]
[('A', 'B'), ('A', 'C'), ('B', 'C')]`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "itertools हे generator वर बांधलेले तयार साधनांचे पेटं आहे. तीन गट लक्षात ठेवा. पहिला — अनंत क्रम: count, cycle, repeat. दुसरा — संग्रह जोडणी व फिल्टर: chain, zip_longest, takewhile, dropwhile, filterfalse. तिसरा — संयोग व गट: combinations, permutations, product, groupby. सर्व आळशी; सर्व iterator देतात; म्हणून list() नेच बहुतेकदा निकाल पाहतात.\n\nआत्मपरीक्षण: combinations वि. permutations फरक? cycle ला थांबवायला काय? groupby आधी sorted का हवे? accumulate आणि sum मध्ये फरक? chain आणि zip_longest कुठे वेगळे? या पाच प्रश्नांची उत्तरे स्पष्ट असल्यास या धड्याचे उद्दिष्ट साधले.\n\nसराव: तीन खेळाडूंच्या सर्व दोन-दोन जोड्या (combinations), तीन रंगांचा अखंड फेरफटका (cycle), आणि एका वाक्यातील शब्दांची चालू लांबी (accumulate) — हे तीन छोटे प्रयोग करा. प्रत्येक output अपेक्षेप्रमाणे आला का ते तपासा.\n\nपुढे अभ्यास: itertools ही standard library आहे; तिचे दस्तऐवज वाचणे सोपे आहे — प्रत्येक साधनाचे छोटे उदाहरण आहे. पुढील regex धड्यात आपण मजकुरात नमुने शोधायला शिकू; itertools ने 'संग्रहांचे' अनेक प्रकार सोडवले, तर regex मजकुराचे नमुने सोडवते. दोन्ही मिळून डेटा हाताळणीचे संपूर्ण साधन तयार होते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "itertools च्या सखोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• itertools module संपूर्ण संदर्भ: https://docs.python.org/3/library/itertools.html\n• itertools recipes (उपयोगी नमुने): https://docs.python.org/3/library/itertools.html#itertools-recipes\n• chain आणि chain.from_iterable: https://docs.python.org/3/library/itertools.html#itertools.chain\n• combinations आणि permutations: https://docs.python.org/3/library/itertools.html#itertools.combinations\n• groupby चे दस्तऐवज: https://docs.python.org/3/library/itertools.html#itertools.groupby\n• accumulate संदर्भ: https://docs.python.org/3/library/itertools.html#itertools.accumulate\n• iterator types: https://docs.python.org/3/library/stdtypes.html#iterator-types\n• functional programming howto: https://docs.python.org/3/howto/functional.html\n• next() built-in: https://docs.python.org/3/library/functions.html#next\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "product — सर्व शक्य जोड्यांचा डेक",
        content: "product(संग्रहA, संग्रहB) पहिल्या संग्रहातील प्रत्येक घटकाला दुसऱ्याच्या प्रत्येक घटकाशी जोडतो — म्हणजे सर्व शक्य जोड्या. product([1, 2], [\"a\", \"b\"]) → (1, 'a'), (1, 'b'), (2, 'a'), (2, 'b'). ही आकार 2 × 2 = 4 जोड्या. गणितातील Cartesian product हाच. product आणि nested for loop यांचा संबंध अगदी थेट — दोन loops समान काम करतात, पण product एका function मध्ये.\n\nतीन किंवा अधिक संग्रहही देता येतात: product([1, 2], \"ab\", [True, False]) — सर्व संयोजन येतात. आकार हा प्रत्येक संग्रहाच्या लांबीचा गुणाकार: 2 × 2 × 2 = 8. म्हणूनच product फार मोठा होऊ शकतो; दहा संग्रहांचे दहा-दहा घटक असेल तर कोट्यवधी जोड्या. मर्यादा आणि sample तपासणी अनिवार्य.\n\nrepeat या parameter ने एकाच संग्रहाचे गुणाकार साधता येतो. product(\"01\", repeat=3) → 000, 001, 010, 011, 100, 101, 110, 111 — म्हणजे सर्व 3-बिट द्विमान संख्या. खुर्च्यांचे आसनबंद, पासवर्डची संख्या, चाचणीचे combinations — सर्व product ने.\n\nरोजचे उदाहरण: दुकानात शर्टाचे 3 रंग आणि पँटचे 2 रंग — किती वेगळे कपडे आहेत? product वापरून len(list(product(shirts, pants))) → 6. प्रत्येक जोडीचे छोटे प्रदर्शनही करता येते. खाली बेड्यांची आणि तासांची जोडणी पहा.\n\nदक्षता: product चा निकाल iterator आहे — लगेच list() करू नका; आवश्यक असेल तरच. मोठ्या आकारात तो memory भरतो. islice, मर्यादित अनुप्रयोग, किंवा छोट्या संग्रहासह प्रयोग पहिल्यांदा करा. गणिताचे प्रश्न product ने सुंदर पद्धतीने सोडवता येतात.",
        code: `from itertools import product

shirts = ["लाल", "निळा", "पांढरा"]
pants = ["जीन्स", "काळी"]
combos = list(product(shirts, pants))
print(len(combos))
print(combos[0])`,
        codeLanguage: "python",
        output: `6
('लाल', 'जीन्स')`,
      },
      {
        title: "count आणि tee — क्रमांक आणि प्रती",
        content: "count(सुरुवात, पाऊल) अखंड क्रमांक देतो — डीफॉल्ट 0, 1, 2; पाऊल बदलल्यास 0, 2, 4. count() ला कधीही मर्यादा नसते; म्हणून islice किंवा break हवे. zip मध्ये count जोडल्यास index सह data मिळतो: list(zip(count(1), [\"अ\", \"ब\"])) → (1, 'अ'), (2, 'ब'). enumerate पर्याय असला तरी count वेगळ्या सुरुवातीसाठी लवचिक.\n\ncount चा एक छान उपयोग — 'अनंत नोंदणी क्रमांक'. generator शी जोडून एखाद्या पंक्तीतील तिकिट क्रमांक, पावती क्रमांक कधीही संपूर्ण न करता देत राहता येतो. खाली 100 पासून पाच क्रमांक पहा.\n\ntee(iterator, n) एका iterator च्या n स्वतंत्र प्रती बनवतो. tee चे एक वेधक वैशिष्ट्य: मूळ iterator एकदाच वापरता येतो, पण tee नंतर अनेक प्रती वेगवेगळ्या दिशांनी वापरता येतात. tee(gen, 2) → दोन iterators; एकावर sum, दुसऱ्यावर list करता येते.\n\nसावधान: tee आंतरिकरीत्या मागील मूल्ये लक्षात ठेवतो — जर एक प्रती खूप पुढे गेली आणि दुसरी मागे राहिली, तर फरक साठवण्याची गरज वाढते आणि memory वाढते. म्हणून tee तेव्हाच वापरा जेव्हा दोन्ही प्रती साधारण समान वेगाने वापरल्या जातात. अन्यथा फाईल पुन्हा वाचणे किंवा list ठेवणे बरे.\n\nएकत्रित उदाहरण: नावांच्या generator च्या दोन प्रती — एकावर लांबी मोजा आणि दुसऱ्यावर अक्षरे. tee मुळे मूळ generator दोनदा तयार करावा लागत नाही. count आणि tee ही दोन्ही साधने generator च्या जगातील उपयोगी किल्ल्या आहेत.",
        code: `from itertools import count, tee, islice

nums = count(100)
first, second = tee(nums, 2)
print(list(islice(first, 3)))
print(list(islice(second, 2)))`,
        codeLanguage: "python",
        output: `[100, 101, 102]
[100, 101]`,
      },
      {
        title: "एकत्रित project: कर्मचाऱ्यांचे वेळापत्रक",
        content: "आता सर्व itertools साधने एकत्र वापरून एक व्यावहारिक project करूया — साप्ताहिक वेळापत्रक. समजा चार कर्मचारी आहेत आणि सात दिवसांसाठी प्रत्येक दिवशी दोन जणांची जोडी हवी. प्रथम कर्मचाऱ्यांच्या सर्व जोड्या combinations ने बनवू — C(4, 2) = 6 जोड्या. मग त्या जोड्या सात दिवसांवर cycle ने फिरवू. दोन कर्मचारी एकाच दिवशी दोनदा येऊ नयेत म्हणून combinations योग्य; permutations वापरलं तर क्रमही बदलला गेला असता.\n\nपहिला भाग: people = [\"आरोही\", \"मीरा\", \"वेद\", \"कल्याण\"]; pairs = list(combinations(people, 2)) → 6 जोड्या. दुसरा भाग: days = [\"सोम\", \"मंगळ\", \"बुध\", \"गुरु\", \"शुक्र\", \"शनि\", \"रवि\"]. आता for day, pair in zip(days, cycle(pairs)): print(day, pair) — cycle मुळे सहा जोड्यांनंतर पुन्हा पहिली जोडी सातव्या दिवशी येते.\n\nहा नमुना वाढवता येतो: प्रत्येक जोडीला क्रमांक द्यायचा असेल तर enumerate जोडा; प्रत्येक कर्मचाऱ्याचे किती वेळा येणे झाले ते मोजायचे असेल तर chain + Counter. product ने सर्व शक्य जोड्या, groupby ने कर्मचाऱ्यानुसार गट — सर्व साधने सहज जोडता येतात.\n\nया project मधून दिसते की itertools ही वेगळी साधने नाहीत — ती एकत्र वापरण्यासाठीच आहेत. संग्रह तयार करणे (combinations), त्यांची चक्रीय फिरवणी (cycle), जोडणी (zip, chain), गट (groupby) — प्रत्येक टप्प्यावर योग्य साधन निवडणे हेच कौशल्य. कोड छोटा राहतो आणि वाचण्यायोग्य होतो.\n\nशेवटी, हे वेळापत्रक कोणत्याही tables किंवा loops च्या जाळ्याशिवाय तयार होते. खालील कोड चालवून पहा आणि जोड्या कशा फिरतात ते पाहा. हा project तुमच्या portfolio मध्ये टाकण्यासारखा छोटा पण पूर्ण उदाहरण आहे — interview मध्ये 'itertools कुठे वापरले?' असे विचारल्यास हे उत्तर पुरते.",
        code: `from itertools import combinations, cycle

people = ["आरोही", "मीरा", "वेद", "कल्याण"]
pairs = list(combinations(people, 2))
days = ["सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि", "रवि"]
for day, pair in zip(days, cycle(pairs)):
    print(day, pair[0], "आणि", pair[1])`,
        codeLanguage: "python",
        output: `सोम आरोही आणि मीरा
मंगळ आरोही आणि वेद
बुध आरोही आणि कल्याण
गुरु मीरा आणि वेद
शुक्र मीरा आणि कल्याण
शनि वेद आणि कल्याण
रवि आरोही आणि मीरा`,
      },
      {
        title: "झटपट उजळणी: कोणते साधन कधी",
        content: "सहा प्रश्नांची झटपट उजळणी. क्रम महत्त्वाचा असल्यास permutations; नसल्यास combinations; पुनरावृत्ती चालल्यास combinations_with_replacement. अखंड क्रमांक हवा असल्यास count; अखंड फेरफटका हवा असल्यास cycle; एकच मूल्य वारंवार हवे असल्यास repeat. संग्रह जोडायचे असल्यास chain; गट करायचे असल्यास groupby (आधी sorted!); सर्व जोड्या हव्या असल्यास product. चालू बेरीज हवी असल्यास accumulate; सुरुवातीचे घटक अट पूर्ण होईपर्यंत हवे असल्यास takewhile.\n\nही निवड सारणी कोड लिहिण्यापूर्वी एकदा वाचा. बहुतेक गोंधळ 'कोणते साधन' यातूनच होतो. साधन बरोबर निवडलं की कोड जवळजवळ स्वतः लिहिला जातो.\n\nएक अंतिम सूचना: itertools चे सर्व साधन iterator देतात — list() ने पाहा, पण मोठ्या डेटावर list() टाळा. for loop मध्ये थेट वापरा; तिथेच खरा फायदा. list() हे छोट्या प्रयोगासाठी आणि तपासणीसाठी.\n\nआणि चूक झाल्यास कंटाळा नका: itertools चे साधन एकदाच वापरता येते, हे लक्षात ठेवा. दुसऱ्यांदा पाहायचे असेल तर list ठेवा किंवा नव्याने तयार करा. हे ज्ञान झालं की itertools अगदी सोपे वाटते.",
        code: `from itertools import chain, accumulate, takewhile

print(list(chain("घर", "दार")))
print(list(accumulate([2, 3, 4])))
print(list(takewhile(lambda n: n < 4, [1, 2, 5, 1])))`,
        codeLanguage: "python",
        output: `['घ', 'र', 'द', 'ा', 'र']
[2, 5, 9]
[1, 2]`,
      },
    ],
    practiceQuestions: [
      "combinations vs permutations?",
      "chain काय करतो?",
      "count() कसा मर्यादित करतात?",
      "product काय देतो?",
    ],
    quiz: [
      { question: "क्रम महत्त्वाचा कुठे?", options: ["permutations", "combinations", "next", "import"], correct: 0 },
      { question: "दोन iterable जोडण्यासाठी?", options: ["chain", "combine", "concat", "join"], correct: 0 },
      { question: "क्रम अमर्याद संख्येसाठी?", options: ["count()", "product()", "sum()", "all()"], correct: 0 },
    ],
    challenge: {
      prompt: "'ab' आणि 'cd' जोडा (chain).",
      starterCode: `import itertools
print(list(itertools.chain("ab", "cd")))`,
      expectedOutput: "['a', 'b', 'c', 'd']",
    },
    interviewQuestions: [
      "नंतरा combinations vs permutations?",
      "मोठा data वर combinations खर्ची?",
    ],
    related: ["python-generators", "python-functions-advanced", "python-magic-methods"],
    prev: "python-generators",
    next: "python-regex",
  },

  {
    slug: "python-regex",
    categoryId: "python",
    title: "Regex (Regular Expressions)",
    marathiTitle: "Regex - नमुन्यांवर शोध",
    level: "advanced",
    minutes: 17,
    summary: "re.search, findall, sub, compile — नमुन्यांच्या मदतीने text मध्ये अचूक शोध.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Regex - नमुन्यांवर शोध म्हणजे काय?",
        content: "re.search, findall, sub, compile — नमुन्यांच्या मदतीने text मध्ये अचूक शोध.\nRegex म्हणजे नमुन्यांची भाषा — एक लहान नमुना लिहून त्याच साचा असणारे भाग शोधणे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Regex - नमुन्यांवर शोध चे फायदे आणि महत्त्व",
        content: "\"Regex - नमुन्यांवर शोध\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "regex म्हणजे नमुन्यांची भाषा",
        content: "Regex म्हणजे नमुन्यांची भाषा — एक लहान नमुना लिहून त्याच साचा असणारे भाग शोधणे. उदा. 'कोलेजात राघव नावाचे सगळे विद्यार्थी शोधा' ही गणना नव्हे, नमुन्यावर आधारित शोध.\n\nमूलभूत खूणा: \\d — अंक, \\s — जागा, \\w — अक्षर किंवा अंक, + — एक किंवा अधिक, * — शून्य किंवा अधिक, {n} — नक्की n वेळा.\n\nre module ची मुख्य साधने: re.search — पहिला सापडेल, re.findall — सगळे सापडतात, re.sub — बदल करतो, re.compile — नमुना पुन्हा वापरण्यासाठी तयार ठेवतो.",
      },
      {
        title: "Syntax: पहिला नमुना — re.search",
        content: "पाच अंकी संख्या शोधण्याचा नमुना r'\\d{5}' असा आहे — {5} म्हणजे नक्की पाच अंक.\n\nखाली text मधून पाच अंकी संख्या बाहेर काढली आहे: re.search(r'\\d{5}', text) पहिली जुळणी शोधतो आणि m.group() तिची किंमत देतो.\n\nsearch फक्त पहिलाच निकाल देतो — या text मध्ये 98765 हाच एक निकाल.",
        code: `import re

text = "पिन 98765"
m = re.search(r"\\d{5}", text)
print(m.group())`,
        codeLanguage: "python",
        output: `98765`,
      },
      {
        title: "re.findall आणि re.sub",
        content: "findall सर्व जुळण्या list मध्ये देतो: 'a1 b22' मधील सगळे अंक r'\\d' ने — output ['1', '2', '2'].\n\nsub बदल करतो: r'\\s+' (एक किंवा अधिक जागा) बदलल्या '_' ने — 'मीरा आज शाळेत' ते 'मीरा_आज_शाळेत'.\n\nfindall कधी पाहण्यासाठी आणि sub कधी स्वच्छता करण्यासाठी — दोन्हीच या ओळींवर दिसतात.",
        code: `import re

print(re.findall(r"\\d", "a1 b22"))
print(re.sub(r"\\s+", "_", "मीरा आज शाळेत"))`,
        codeLanguage: "python",
        output: `['1', '2', '2']
मीरा_आज_शाळेत`,
      },
      {
        title: "वास्तविक उदाहरण: पिनकोड शोधणे",
        content: "pincodes नावाच्या सूचीत प्रत्येक ठिकाणाच्या पिनची माहिती आहे. r'\\d{6}' ने सहा अंकी पिनकोड बाहेर काढला जातो.\n\nfindall प्रत्येक खर्चाच्या ओळीतील सहा अंक गोळा करतो — ['440001', '411001'].\n\nहाच नमुना मोबाईल क्रमांक, आधार आयडी किंवा खाते क्रमांक यांसारख्या अचूक लांबीच्या संख्यांसाठी लागतो.",
        code: `import re

pincodes = "पुणे 440001, नाशिक 411001"
print(re.findall(r"\\d{6}", pincodes))`,
        codeLanguage: "python",
        output: `['440001', '411001']`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ raw string r'...' वापरत नसल्यास backslash गोंधळतो — r'\\d' मध्ये \\d हा नमुन्याचा भाग आहे; साध्या string मध्ये ती लकडी वेगळी उमटते.\n\n✗ + आणि * चा विपरीत वापर — + म्हणजे एक किंवा अधिक, * म्हणजे शून्य किंवा अधिक; किती वेळा हे ही चिन्हे ठरवतात.\n\n✗ anchors (^ आणि $) विसरणे — सुरुवात किंवा शेवट पकडायला ही चिन्हे हवीत; त्यांशिवाय नमुना कुठेही जुळू शकतो.\n\n✗ {n} चा अर्थ — {5} म्हणजे नक्की पाच वेळा, नऊ पेक्षा जास्त नाही.\n\nकडा तपासायचा असेल तर compile करून findall करा — खाली r'ल+' ने ल तेथे किती वेळा आहे ते दिसतं.",
        code: `import re

pat = re.compile(r"ल+")
print(pat.findall("लललपलल"))`,
        codeLanguage: "python",
        output: `['ललल', 'लल']`,
      },
      {
        title: "re.compile — नमुना पुन्हा वापरतो",
        content: "एकच नमुना पुन्हा पुन्हा लागत असेल तर re.compile तो एकदा तयार करतो आणि नंतर pat फक्त वापरला जातो.\n\n• findall → सगळे, search → पहिला\n\n• compile → वारंवार वापरासाठी\n\n• raw string r'...' — नमुन्यातील backslash सुरक्षित ठेवते\n\nमोठ्या कोडमध्ये एकाच नमुन्याचा अनेक ठिकाणी वापर होतो; compile त्याला एका जागी ठेवतो आणि त्रुटी शक्यता कमी करतो.",
      },
      {
        title: "Interactive: नावातील जागा काढणे",
        content: "कृती: नावातील सगळ्या जागा काढून एकत्र नाव तयार करा.\n\nre.sub(r' ', '', name) ने प्रत्येक जागा '' (रिकाम्या string) ने बदलली — 'सचिन तेंडुलकर' ते 'सचिनतेंडुलकर'.\n\nआणखी नावांवर प्रयोग करा — उदा. 'मीरा कदम' वर ठेवून जागा नसलेलं नाव मिळतं हे पाहा.",
        code: `import re

name = "सचिन तेंडुलकर"
print(re.sub(r" ", "", name))`,
        codeLanguage: "python",
        output: `सचिनतेंडुलकर`,
      },
      {
        title: "Mini Project: स्वच्छ मोबाईल नंबर",
        content: "दहा अंकी मोबाईल नंबरचा नमुना r'\\d{10}' असा आहे. mobiles यादीतील पहिल्या नोंदीतून तो बाहेर काढतो.\n\nfindall फक्त दहा अंक परत करतो — ['9876543210']; जागा, कंस किंवा डॅश नसतात.\n\nनंबरमध्ये जागा किंवा टाके असले तरी \\d{10} फक्त अंकच निवडतो — बाकीचे थेट वगळले जातात.",
        code: `import re

mobiles = ["मोबाईल: 98765 43210"]
print(re.findall(r"\\d{10}", mobiles[0]))`,
        codeLanguage: "python",
        output: `['9876543210']`,
      },
      {
        title: "character classes आणि ranges — अक्षरांचे गट",
        content: "regex मध्ये वर्णांचे गट (character class) चौरस कंसात लिहितात. [abc] म्हणजे a किंवा b किंवा c यापैकी एकच वर्ण. [a-z] म्हणजे लहान इंग्रजी अक्षरे; [A-Z] मोठी; [0-9] अंक — आणि हेच \\d. [a-zA-Z0-9] हे सर्व अक्षर-अंक; हेच \\w. वर्गातील वर्णांपैकी कोणताही एक जुळला तर जुळणी यशस्वी.\n\nकंसातील ^ हा उलटा अर्थ देतो: [^0-9] म्हणजे अंक नसलेला कोणताही वर्ण. हा 'नकार' अनेक वेळा लागतो — जसे नावात अंक नकोत, किंवा केवळ अक्षरे हवी. पण ^ चा अर्थ दोन ठिकाणी वेगळा — कंसात आत नकार, बाहेर सुरुवात (anchor). हा फरक गोंधळवणारा पण महत्त्वाचा.\n\nपूर्वपरिभाषित वर्ग लक्षात ठेवा: \\d = अंक, \\D = अंक नव्हे; \\w = अक्षर/अंक/underscore, \\W = ते नव्हे; \\s = रिकामी जागा (space, tab, newline), \\S = ते नव्हे. हे चार जोड्या regex चा पाया आहेत. सर्वत्र \\d, \\w, \\s वापरल्यामुळे कोड वाचनीय राहतो.\n\nरोजचे उदाहरण: भारतीय पिन कोड \\d{6}, मोबाईल \\d{10}, GST क्रमांक [0-9]{2}[A-Z]{5}... असे pattern. वर्ग हा pattern लहान आणि स्पष्ट ठेवतो. खाली नावातील सर्व स्वर (vowels) शोधले आहेत — [अआइईउऊएऐओऔ] हा एक वर्णवर्ग.\n\nमराठीसाठी लक्षात ठेवा: मराठी अक्षरे Unicode मध्ये असल्याने [\u0900-\u097F] असे range द्यावे लागते. \\w मराठी अक्षरेही समाविष्ट करतो; पण जोडाक्षर आणि matra वेगळे येऊ शकतात. म्हणून मराठीसाठी नेहमी प्रत्यक्ष उदाहरणांवर चाचणी करा. संयम ठेवला तर हे वर्ग हाताशी बसतात.",
        code: `import re

text = "किंमत 250 आहे, संख्या 42"
print(re.findall(r"\\d+", text))
print(re.findall(r"[अ-औ]", "मराठी भाषा सुंदर"))`,
        codeLanguage: "python",
        output: `['250', '42']
['अ', 'आ', 'इ']`,
      },
      {
        title: "anchors — ^, $ आणि \\b चे स्थान",
        content: "anchor म्हणजे अट नाही तर 'स्थान' ठरवणारे चिन्ह. ^ चा अर्थ ओळीची सुरुवात, $ चा अर्थ ओळीचा शेवट. जर pattern ^\\d{6}$ असेल तर ती फक्त 'पूर्णपणे सहा अंकांची' ओळ जुळते — मधल्या भागात सहा अंक असलेली मोठी ओळ नाही. anchors शिवाय नमुना कुठेही जुळू शकतो; anchors ने तो जागेवर बांधला जातो.\n\nउदा. re.search(r\"^नमस्कार\", \"नमस्कार मित्र\") यशस्वी; पण \"मी नमस्कार म्हणतो\" वर फसते, कारण शब्द सुरुवातीलाच नाही. आणि re.search(r\"शेवट$\", \"हा शेवट\") यशस्वी — कारण शब्द ओळीच्या शेवटी आहे. हे तपासण्यासाठी होय/नाही उत्तर पुरतो.\n\n\\b हा 'शब्द सीमा' (word boundary) दाखवतो — अक्षर आणि नॉन-अक्षर यांच्यातील सीमा. r\"\\bcat\\b\" फक्त पूर्ण शब्द 'cat' शोधतो — 'concatenate' मधला भाग नाही. मराठी विरामचिन्हे आणि जोडाक्षरांमुळे \\b चे वर्तन थोडे वेगळे वाटू शकते; म्हणून प्रयोग करून पहा.\n\nठळक जागा: forms किंवा input ची तपासणी करताना ^ आणि $ अत्यावश्यक. 'फक्त 10 अंकांचा नंबर' तपासायचा असेल तर ^\\d{10}$ — अन्यथा 20 अंकी क्रमांकही पहिले 10 जुळल्यामुळे चालत जाईल. ही चूक खूप सामान्य आहे. खाली तपासणीपूर्वक उदाहरण पहा.\n\nसारांश: ^ सुरुवात, $ शेवट, \\b शब्द-सीमा. यांना 'नमुना किती मोठा आहे' हे मर्यादित करण्याचे साधन म्हणून वापरा. anchor विसरणे म्हणजे अर्धवट तपासणी — आणि अर्धवट तपासणी ही त्रुटींचे दार आहे. म्हणून प्रत्येक 'पूर्ण तपासणी' मध्ये anchors घालण्याची सवय लावा.",
        code: `import re

code = "440001"
print(bool(re.search(r"^\\d{6}$", code)))
print(bool(re.search(r"^\\d{6}$", "पिन 440001 आहे")))
print(re.findall(r"\\bcat\\b", "cat concatenate cat"))`,
        codeLanguage: "python",
        output: `True
False
['cat', 'cat']`,
      },
      {
        title: "groups आणि alternation — () आणि |",
        content: "कंस ( ) regex मध्ये 'गट' बनवतात. गटामुळे तुम्ही जुळलेल्या भागाला स्वतंत्रपणे पकडू शकता आणि नंतर वापरू शकता. उदा. (\\d{4})-(\\d{2})-(\\d{2}) या pattern मध्ये वर्ष, महिना आणि दिवस हे तीन वेगळे गट आहेत. m.group(1) वर्ष देईल, m.group(2) महिना. हे डेटा काढण्यासाठी अत्यंत उपयोगी.\n\ngroup(0) संपूर्ण जुळणी देतो; group(1), group(2) क्रमानुसार गट; groups() सर्व गटांचा tuple. named groups अधिक वाचनीय — (?P<year>\\d{4}) असे लिहिल्यास m.group(\"year\") ने थेट नावाने मिळतो. फॉर्मचे parsing, log विश्लेषण, URL तुकडे करणे — सर्वत्र named groups कोड स्पष्ट करतात.\n\nalternation | म्हणजे 'किंवा'. (cat|dog) म्हणजे cat किंवा dog. कंसाबाहेरचा | संपूर्ण pattern ला पर्याय देतो — म्हणून योग्य स्थान महत्त्वाचे. (मराठी|हिंदी|इंग्रजी) असे लिहिल्यास तीन भाषांपैकी कोणतीही जुळते.\n\nन जुळलेल्या ऐच्छिक भागासाठी ? वापरतात: (Mr\\.)? किंवा (http|https)? — म्हणजे भाग असू शकतो, नसूही शकतो. हे फॉर्मच्या 'optional' रकान्यांसाठी उपयोगी. गटांची खोली वाढल्यास pattern अवघड होते — म्हणून छोटे ठेवा आणि नावे द्या.\n\nएक सावधानता: गट पकडणे महाग आहे; जर फक्त गट बनवायचा पण मूल्य नको असेल तर (?:...) वापरा — non-capturing group. यामुळे group अंक गोंधळत नाहीत आणि कामक्षमता थोडी वाढते. मराठी उदाहरणात नाव आणि गाव वेगळे काढण्यासाठी group केव्हा हवा ते खाली पहा.",
        code: `import re

date = "2026-09-19"
m = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", date)
print(m.group(1), m.group(2), m.group(3))
print(re.findall(r"(मराठी|हिंदी)", "मराठी आणि हिंदी"))`,
        codeLanguage: "python",
        output: `2026 09 19
['मराठी', 'हिंदी']`,
      },
      {
        title: "greedy वि. lazy — किती घ्यायचं",
        content: "regex मधील * आणि + हे 'लोभी' (greedy) आहेत — ते शक्य तितके जास्त वर्ण घेतात. उदा. <.*> हा pattern \"<a><b>\" वर संपूर्ण \"<a><b>\" घेतो — पहिल्या < पासून शेवटच्या > पर्यंत. कारण greedy * शेवटचा > शोधतो आणि मध्ये सर्व घेतो. ही अनेकदा अपेक्षित नसते.\n\nlazy matching साठी *? किंवा +? वापरतात — ते शक्य तितके कमी वर्ण घेतात. <.*?> हा same text वर \"<a>\" आणि \"<b>\" असे दोन तुकडे देईल — पहिल्या > वर थांबल्यामुळे. म्हणून HTML/टॅगमधून भाग काढताना lazy हवा. फरक एका प्रश्नचिन्हाचा — पण निकालात मोठा.\n\nसमजायचा सोपा मार्ग: greedy 'जास्त घ्या', lazy 'कमी घ्या, पण अट पूर्ण होईपर्यंत'. re.findall(r\"\\{.*?\\}\", text) हे कर्ली ब्रेसेस मधील छोटे भाग शोधते; \\{.*\\} मात्र पहिल्या { पासून शेवटच्या } पर्यंत सर्व. दोन्ही उपयोगी — प्रयोगाने ठरवा.\n\nमर्यादित पुनरावृत्ती ad-hoc अटींसाठी: {n}, {n,}, {n,m}. {2,4} म्हणजे किमान 2 आणि कमाल 4 वेळा. हे लांबी-तपासणीसाठी उत्तम — पिन, आधार, पासवर्ड. greedy/lazy सोबत वापरल्यास अचूक नियंत्रण मिळते.\n\nव्यवहारात ही चूक सर्वाधिक दिसते: '.*' लोभी असल्याने दोन object मधला मजकूर काढताना तो सर्व शोषून घेतो. म्हणून default '.*?' लक्षात ठेवा. आणि शेवटी शक्य असल्यास मर्यादित {n,m} वापरा — पूर्ण खुल्या * पेक्षा सुरक्षित.",
        code: `import re

text = "<a>पहिला</a><b>दुसरा</b>"
print(re.findall(r"<.*>", text))
print(re.findall(r"<.*?>", text))`,
        codeLanguage: "python",
        output: `['<a>पहिला</a><b>दुसरा</b>']
['<a>', '</a>', '<b>', '</b>']`,
      },
      {
        title: "re.sub आणि re.split — बदल आणि विभाजन",
        content: "re.sub(pattern, बदल, मजकूर) जुळलेल्या सर्व भागांची जागा घेते. उदा. re.sub(r\"\\s+\", \" \", text) एक किंवा अधिक रिकाम्या जागा एका जागेत बदलते — मजकूर स्वच्छ होतो. re.sub(r\"\\d\", \"#\", \"pin 1234\") → pin ####. बदल मध्ये group संदर्भही वापरता येतो: \\1, \\2 किंवा \\g<name>.\n\ngroup असलेला बदल शक्तिशाली: क्रमांक 2026-09-19 चे रूपांतर 19/09/2026 करायचे आहे. re.sub(r\"(\\d{4})-(\\d{2})-(\\d{2})\", r\"\\3/\\2/\\1\", date) — \\3, \\2, \\1 ने गट उलटले. हे एका ओळीत तारखेचे स्वरूप बदलते. लक्षात ठेवा raw string r\"...\" न वापरल्यास \\1 चा अर्थ बिघडतो.\n\ncount parameter ने मर्यादा ठेवता येते: re.sub(pattern, repl, text, count=1) फक्त पहिला बदल करते. flags ने केस-अग्राह्य बदल. दुसरा मार्ग — function द्या: re.sub(r\"\\d+\", lambda m: str(int(m.group()) * 2), text) — प्रत्येक संख्या दुप्पट. ही 'callback' पद्धत गतिशील बदलांसाठी उत्तम.\n\nre.split(pattern, मजकूर) मजकूराचे तुकडे करतो — string च्या split पेक्षा लवचिक. re.split(r\"[,;]\\s*\", \"अ, ब; क\") → ['अ', 'ब', 'क']. अनेक विभाजक, ऐच्छिक जागा, regex नमुने — सर्व शक्य. CSV च्या आधीच्या स्वच्छतेसाठी हे अप्रतिम.\n\nएकत्रित उदाहरण: log ओळीतील तारखेचे स्वरूप बदलणे आणि संवेदनशील आकडे लपवणे. sub आणि split regex ला 'शोध' पासून 'रूपांतर' आणि 'विभाजन' पर्यंत नेतात. खाली साधे उदाहरण पहा — अंकांचे Censoring.",
        code: `import re

text = "क्रमांक 9876543210 आणि 1234567890"
hidden = re.sub(r"\\d{6}", "######", text)
print(hidden)
print(re.split(r"[,;]\\s*", "अ, ब; क"))`,
        codeLanguage: "python",
        output: `क्रमांक ######3210 आणि ######7890
['अ', 'ब', 'क']`,
      },
      {
        title: "flags — IGNORECASE, MULTILINE, DOTALL",
        content: "flags pattern चे वर्तन बदलतात. सर्वात उपयोगी re.IGNORECASE (किंवा re.I) — केस अग्राह्य करतो. \"Python\" आणि \"python\" दोन्ही जुळतात. जास्त संयोग संकुचित करतो आणि कोड सुटसुटीत ठेवतो. त्यासाठी pattern मध्ये [Pp][Yy]... असे वर्ग का लिहावे?\n\nre.MULTILINE (re.M) — ^ आणि $ ला प्रत्येक ओळीवर लागू करतो, फक्त संपूर्ण मजकुराच्या सुरुवात-शेवटी नाही. बहु-ओळ मजकुरात प्रत्येक ओळीची सुरुवात शोधण्यासाठी हे आवश्यक. re.findall(r\"^\\w+\", text, re.M) प्रत्येक ओळीचा पहिला शब्द देतो.\n\nre.DOTALL (re.S) — यातील '.' नवीन ओळ (newline) ही जुळतो. डीफॉल्टने '.' नवीन ओळ सोडतो; DOTALL ने तो समाविष्ट होतो. पॅरेग्राफ-आडवा नमुने शोधताना हे लागते. तीनही flags कोड करताना rahatतात — डीफॉल्ट वर्तन का बदलतं हे लक्षात ठेवा.\n\nre.VERBOSE (re.X) — pattern ला स्पष्ट लिहिण्याची सोय; रिकाम्या जागा आणि comments दुर्लक्षित होतात, पण कंसातील वर्ग सोडून. मोठे pattern वाचनीय होतात. एकत्र flags पाइपने जोडतात: re.I | re.M.\n\nकोडमध्ये चांगली सवय: आधी साधे; गरज पडल्यासच flags वापरा. flags आठवण्यासाठी संक्षिप्त नावे (I, M, S, X) पुरतात; अधिकृत दस्तऐवजात सर्व यादी आहे. मोठ्या प्रणालीत flags स्थिरांक म्हणून ठेवा जेणेकरून बदल एकाच ठिकाणी होईल.",
        code: `import re

text = "Python\npython\nPYTHON"
print(re.findall(r"^python$", text, re.I | re.M))
print(re.findall(r".+", "ओळ1\\nओळ2", re.S))`,
        codeLanguage: "python",
        output: `['Python', 'python', 'PYTHON']
['ओळ1\\nओळ2']`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "regex चा गाभा: नमुना म्हणजे मजकुरातील आकार. character classes ([...]), पूर्वपरिभाषित वर्ग (\\d, \\w, \\s), पुनरावृत्ती (*, +, {n,m}), anchors (^, $, \\b), गट ( ), alternation |, आणि greedy/lazy — या सात कलमांचा हात राहिला तर बहुतेक नमुने लिहिता येतात. re ची साधने: search (पहिला), findall (सर्व), sub (बदल), split (विभाजन), compile (वारंवार), आणि flags.\n\nआत्मपरीक्षण: \\d आणि [0-9] — दोन्ही सारखे? search आणि findall फरक? * आणि + फरक? greedy आणि lazy कसे ओळखायचे? group(1) काय देतो? raw string का आवश्यक? या सहा प्रश्नांची उत्तरे स्पष्ट असल्यास नमुना योग्य झाला.\n\nसराव: दहा-अंकी मोबाईल तपासा (^\\d{10}$); \"पिन: 411001\" मधून पिन काढा; \"2026-09-19\" चे \"19/09/2026\" करा; तीन भाषांपैकी एक शोधा. हे चार प्रयोग केल्यावर regex हाताशी बसते.\n\nलक्षात ठेवा: regex हे साधन आहे, धर्म नाही. साध्या कामासाठी (एक अक्षर शोधणे, एक विभाजक) string पद्धती (find, startswith, replace) पुरतात आणि वेगवान आहेत. जिथे नमुना दिसतो तिथे regex; जिथे साधे साध्य तिथे साधे. हे संतुलन शिकल्यावर regex अधिक शक्तिशाली वाटते.\n\nपुढील प्रकरण: exceptions शिकल्यावर तुम्ही regex च्या त्रुटी (जसे invalid pattern) स्वतःच्या exception ने हाताळू शकाल. म्हणून हा धडा पुढील custom exceptions शी जोडलेला आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "regex च्या खोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• re module संपूर्ण संदर्भ: https://docs.python.org/3/library/re.html\n• Regular expression HOWTO: https://docs.python.org/3/howto/regex.html\n• regular expression syntax: https://docs.python.org/3/library/re.html#regular-expression-syntax\n• raw string notation: https://docs.python.org/3/library/re.html#raw-string-notation\n• re.compile चे दस्तऐवज: https://docs.python.org/3/library/re.html#re.compile\n• re.findall संदर्भ: https://docs.python.org/3/library/re.html#re.findall\n• re.sub संदर्भ: https://docs.python.org/3/library/re.html#re.sub\n• group ची अधिकृत चर्चा: https://docs.python.org/3/library/re.html#match-objects\n• flags चे dस्तऐवज: https://docs.python.org/3/library/re.html#flags\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "वास्तविक project: संपर्क माहिती स्वच्छ करणे",
        content: "सर्व regex तंत्र एकत्र वापरून एक व्यावहारिक काम करूया — संपर्क माहिती स्वच्छ करणे. समजा एक text आहे ज्यात नावे, मोबाईल क्रमांक आणि ईमेल आहेत, पण त्यांचे स्वरूप मिसळलेले आहे — कुठे जागा, कुठे डॅश, कुठे कंस. प्रथम मोबाईल क्रमांक काढू: \\b\\d{10}\\b हा pattern दहा अंकांचे सलग क्रमांक शोधतो; जास्तीची जागा, डॅश वगळून. findall ने सर्व क्रमांक मिळतात.\n\nदुसरे पाऊल — कंस, डॅश आणि स्पेस यांमधून स्वच्छ क्रमांक मिळवणे. re.sub(r\"[^0-9]\", \"\", text) सर्व अंकेतर वर्ण काढते; फक्त अंक उरतात. मात्र यामुळे ओळीतील वेगळे क्रमांक जोडले जाऊ शकतात — म्हणून आधी प्रत्येक क्रमांक वेगळा काढून मग स्वच्छ करा. क्रम महत्त्वाचा.\n\nईमेल शोधण्यासाठी pattern: [\\w.+-]+@[\\w-]+\\.[\\w.]+ — प्रत्यक्षात ईमेलचे नमुने गुंतागुंतीचे असतात; साधा pattern पुरतो. नावे शोधताना (?:^|\\s)([अ-ह]+)(?=\\s|$) सारखे Unicode-आधारित pattern लागते. मराठीसाठी नेहमी प्रत्यक्ष उदाहरणांवर चाचणी.\n\nअंतिम डेटा रचना: प्रत्येक नोंदीसाठी names, phones, emails अशी dict बनवा. regex ने काढलेली मूल्ये zip किंवा enumerate ने जोडा. अशा प्रकारे अर्धवट, विखुरलेल्या मजकुरातून स्वच्छ, वापरण्यायोग्य डेटा तयार होतो — data cleaning चे सर्वात प्रचलित काम.\n\nहा project पूर्ण करून पहा: खाली एक ओळीत मोबाईल आणि ईमेल असलेला नमुना आहे; सर्व मोबाईल क्रमांक काढा आणि त्यांतून जागा काढा. output तपासा. हे लहान उदाहरण पोस्टल address, फोन नंबर, तारखा — सर्व self cleaning ला विस्तारता येते.\n\nशेवटी सूचना: regex ने स्वच्छता केल्यावर परत तपासा. काही नोंदी गळल्या का? काही चुकीच्या जोडल्या का? म्हणून मोजणी करा — input किती, output किती. आकडेवारी तपासली तर regex कोड विश्वासू होतो; अन्यथा निम्मा डेटा चुकीने हरवला जाऊ शकतो.",
        code: `import re

text = "मीरा: 98765 43210, वेद: (98200)-12345"
raw = re.findall(r"\\d{5}[\\s-]?\\d{5}", text)
print(raw)
clean = [re.sub(r"\\D", "", num) for num in raw]
print(clean)`,
        codeLanguage: "python",
        output: `['98765 43210', '98200-12345']
['9876543210', '9820012345']`,
      },
      {
        title: "regex आणि कार्यक्षमता — धोके टाळा",
        content: "regex शक्तिशाली आहे पण हळूहळू प्रचंड मंद होऊ शकते. याला 'catastrophic backtracking' म्हणतात. (a+)+b सारखे pattern अशा मजकुरावर चालवले ज्यात अनेक a आहेत पण b नाही, तर regex जवळजवळ सर्व संभाव्य विभाजने तपासत राहतो — वेळ झपाट्याने वाढतो. शेवटी निकाल नाहीच, पण प्रोसेस गोठते.\n\nयावर उपाय: nested quantifiers टाळा — (a+)+ ऐवजी a+b किंवा (?:a+)+b. शक्य असल्यास atomic groups किंवा possessive quantifiers (Python मध्ये अप्रत्यक्ष). greedy * ऐवजी मर्यादित {n,m} वापरा. pattern साधा ठेवा — जटिल नमुना कमी विश्वासू आणि कमी वेगवान असतो.\n\nदुसरा धोका — '.*' मोठ्या मजकुरात. कारण प्रत्येक स्थानावर तो सुरू करून प्रचंड पुढे जातो. शक्य असल्यास अचूक वर्णवर्ग वापरा — \\S*, [^,]*, किंवा anchor जोडा. '*' गरज नसेल तर लावू नका; '?' आणि '+' अधिक अचूक.\n\nतिसरा धोका — pattern पुन्हा पुन्हा compile करणे. re.compile ने एकदा तयार करून ठेवा; मोठ्या लूपमध्ये हे कार्यक्षमतेत मोठा फरक करते. re हा आंतरिक cache वापरतो, पण स्पष्ट compile ही चांगली सवय — आणि नमुना एकच ठिकाणी ठेवण्याचा फायदा.\n\nशेवटचा मुद्दा — तपासणी. नमुना लिहिल्यावर वेगवेगळ्या मजकुराने तो तपासा — लहान, रिकामा, अतिप्रचंड, विचित्र चिन्हे. या 'edge cases' मध्ये अडल्यास नमुना घट्ट आहे. regex हे साधन काळजीपूर्वक वापरले तर उत्तम; नुसते चालले म्हणून सोडून दिले तर पुढे संकट उभे राहते.",
        code: `import re

pattern = re.compile(r"^(\\w+@\\w+\\.\\w+)$")
emails = ["user@example.com", "bad-email"]
for e in emails:
    print(e, bool(pattern.match(e)))`,
        codeLanguage: "python",
        output: `user@example.com True
bad-email False`,
      },
      {
        title: "मराठी, अंक आणि Unicode — स्थानिक नमुने",
        content: "मराठीसारख्या भाषांसाठी regex मध्ये Unicode महत्त्वाचे आहे. \\w डीफॉल्टने फक्त इंग्रजी अक्षरे-अंक घेतो; मात्र Python 3 मध्ये Unicode असल्याने \\w मराठी अक्षरेही घेतो. तरीही विश्वास ठेवण्यापेक्षा प्रत्यक्ष तपासणी करा. मराठी अक्षरांची श्रेणी [\u0900-\u097F] — यात स्वर, व्यंजन, matra, जोडाक्षर घटक सर्व येतात.\n\nमराठी शब्दाची सीमा थोडी गुंतागुंतीची. \\b इंग्रजीत स्पष्ट काम करतो, पण जोडाक्षरांमुळे मराठीत तो वेगळा वागू शकतो. उदा. 'कर्म' मध्ये 'र' आणि 'म' यांच्यात \\b नाही, कारण ते एकच शब्द. साध्या प्रकरणांत \\b ठीक चालतो; अडचण आल्यास [^\\u0900-\\u097F] वापरून सीमा स्वतः ठरवा.\n\nअंकांसाठी \\d सर्व युनिकोड अंकही घेतो — फक्त 0-9 नाही. फक्त ASCII अंक हवे असल्यास [0-9] वापरा. मराठी अंक (०-९) शोधायचे असल्यास [\u0966-\u096F] श्रेणी वापरावी. हा बारकावा संदर्भानुसार महत्त्वाचा — बँक क्रमांक इंग्रजी अंकच हवेत.\n\nव्यावहारिक उदाहरण: 'ग्राहक: आरोही, रक्कम: २५००' मधून मराठी अंक काढायचे आणि इंग्रजीत बदलायचे. re.findall(r\"[\u0966-\u096F]+\", text) ने मराठी अंक मिळतात; मग प्रत्येक अंक वर्णक्रमानुसार बदलता येतो. हे स्थानिकीकरणात उपयोगी.\n\nएक सावधानता: Unicode रेण्जेस लिहिताना raw string वापरा आणि चाचणी करा. दृश्यमान अक्षरांच्या ऐवजी \u0900-सारखे escape code लिहिल्यास कोड सर्व संपादकांत सारखा चालतो — मराठी input बदलल्यास नमुना तुटत नाही. ही चांगली सवय आहे.",
        code: `import re

text = "रक्कम २५०० आणि 1200"
print(re.findall(r"[\\u0966-\\u096F]+", text))
print(re.findall(r"[0-9]+", text))`,
        codeLanguage: "python",
        output: `['२५००']
['2500', '1200']`,
      },
    ],
    practiceQuestions: [
      "r\"...\" का वापरतात?",
      "findall vs search?",
      "\\d, \\s, \\w म्हणजे काय?",
      "sub काय करतो?",
    ],
    quiz: [
      { question: "r string मध्ये काय होतं?", options: ["raw pattern", "random", "reverse", "remove"], correct: 0 },
      { question: "सगळे मिळींना शोधण्यासाठी?", options: ["findall", "search", "match", "sub"], correct: 0 },
      { question: "\\d म्हणजे?", options: ["संख्या", "जागा", "अक्षर", "नवीन ओळ"], correct: 0 },
    ],
    challenge: {
      prompt: "'रक्कम' नंतर केवळ संख्या शोधा.",
      starterCode: `import re
print(re.findall(r"रक्कम\\d+", "रक्कम100 व रक्कम20"))`,
      expectedOutput: "['रक्कम100', 'रक्कम20']",
    },
    interviewQuestions: [
      "regex मध्ये metacharacters कोणते?",
      "greedy vs lazy matching?",
    ],
    related: ["python-itertools", "python-custom-exceptions", "python-strings"],
    prev: "python-itertools",
    next: "python-custom-exceptions",
  },

  {
    slug: "python-custom-exceptions",
    categoryId: "python",
    title: "स्वतःच्या Exceptions",
    marathiTitle: "Custom Exceptions - स्वतःच्या चुका",
    level: "advanced",
    minutes: 15,
    summary: "raise आणि स्वतःचे Exception वर्ग — चुकांना Meaningful नावे व messages.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Custom Exceptions - स्वतःच्या चुका म्हणजे काय?",
        content: "raise आणि स्वतःचे Exception वर्ग — चुकांना Meaningful नावे व messages.\nPython मध्ये अनेक तयार exceptions आहेत — TypeError, ValueError इ.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Custom Exceptions - स्वतःच्या चुका चे फायदे आणि महत्त्व",
        content: "\"Custom Exceptions - स्वतःच्या चुका\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "स्वतःचे exception का बनवायचे?",
        content: "Python मध्ये अनेक तयार exceptions आहेत — TypeError, ValueError इ. पण तुमच्या programme चे नियम वेगळे असतात: 'अपुरी रक्कम!', 'चुकीचा PIN!', 'शून्य मागणी!' अशा चुकांना खास नावे द्यायला स्वतःचे exception class बनवतात.\n\nमराठीत समज: सर्व चुका 'एरर' नावाने नाही. तुमच्याच दुकानाचे नियम असतात — ते ठरवून raise करा. वाचणारा लगेच समजतो: काय चुकलं आणि कुठे.\n\nरचना साधी: class नाव(Exception): pass यापासून सुरुवात. त्यानंतर raise नाव(\"message\") ने चूक निर्माण, आणि except नाव as e ने पकडणे.",
      },
      {
        title: "Syntax: class आणि raise",
        content: "स्वतःचा exception बनवायचा म्हणजे मुळ Exception वरून वारसा घेणारा class लिहावा. त्यात pass पुरेसा — मुख्य काम raise चे.\n\nraise AgeError(\"नकारात्मक वय!\") ही ओळ कोड न थांबवता चूक उभी करते. message तिचे वर्णन टाकते; पकडताना तेच वाचू शकतो.\n\nउदा. check(25) सारख्या स्थितीत अट न बसल्यास raise होत नाही — function सहज उत्तर देते. अट बसल्यास मात्र चूक उभी राहते.",
        code: `class AgeError(Exception):
    pass

def check(age):
    if age < 0:
        raise AgeError("नकारात्मक वय!")
    return "वय तपासले"

print(check(25))`,
        codeLanguage: "python",
        output: `वय तपासले`,
      },
      {
        title: "except ने स्वतःचे exception पकडणे",
        content: "raise ने उभे केलेले exception except मध्ये पकडता येते. तिथे त्या विशिष्ट चुकीवर नियंत्रित उत्तर मिळतं — programme कोसळत नाही.\n\nबँकेचे उदाहरण: withdraw(100, 50) मुळे 50 उरतात. पण withdraw(100, 200) मध्ये अट बसते — raise होतो — आणि except InsufficientFunds तो पकडून 'अपवाद: रक्कम जास्त!' दाखवतो.\n\nम्हणून output मध्ये आधी 50, नंतर अपवादाची ओळ. raise आणि except अशी जोडी चूकांचे काटेकोर व्यवस्थापन करते.",
        code: `class InsufficientFunds(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFunds("रक्कम जास्त!")
    return balance - amount

print(withdraw(100, 50))

try:
    print(withdraw(100, 200))
except InsufficientFunds as e:
    print("अपवाद:", e)`,
        codeLanguage: "python",
        output: `50
अपवाद: रक्कम जास्त!`,
      },
      {
        title: "वास्तविक उदाहरण: पासवर्ड तपासणी",
        content: "सुरक्षा नियम स्वतःच्या exception ने कसे लागू होतात ते पहा. signup function पासवर्डची लांबी तपासते आणि अपुरा पासवर्ड असल्यास raise करते.\n\nलांबी 6 पेक्षा कमी असेल तर WeakPassword उभा होतो, message सह — ठरवलेला नियम वाचतो. पुरेसा लांब पासवर्ड मात्र सरळ 'खाते तयार झाले' देतो.\n\nआणखी नियम — किमान एक मोठे अक्षर, एक अंक इ. — अशाच क्रमाने जोडता येतात. प्रत्येक नियमाला स्वतःचे exception म्हणजे स्वच्छ कोड.",
        code: `class WeakPassword(Exception):
    pass

def signup(password):
    if len(password) < 6:
        raise WeakPassword("किमान 6 अक्षरे हवी")
    return "खाते तयार झाले"

print(signup("अनिकेत123"))`,
        codeLanguage: "python",
        output: `खाते तयार झाले`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ raise मध्ये message न देणे — raise AgeError() लिहिलं तर समज मिळत नाही; message सहित raise करा.\n\n✗ broad except: ने सगळं गिळणे — except Exception जास्त सर्वसाधारण, सगळ्या चुका पकडतो. तुमच्या exception ची विशिष्ट नावे वापरा; अनोळखी चुका दिसाव्यात.\n\n✗ Exception वरून वारसा न घेणे — स्वतःचा वर्ग सामान्य class ठेवला तर Python च्या exception यंत्रणेत बसत नाही; तो Exception पासूनच बनवा.\n\nखाली EmptyBox raise करून तोच except मध्ये message सह पकडला आहे — हीच मूळ जोडी.",
        code: `class EmptyBox(Exception):
    pass

try:
    raise EmptyBox("डब्बा रिकामा!")
except EmptyBox as e:
    print("पकडला:", e)`,
        codeLanguage: "python",
        output: `पकडला: डब्बा रिकामा!`,
      },
      {
        title: "नोंदी: raise, except, finally",
        content: "स्वतःच्या exceptions च्या तीन मुख्य सूत्रं:\n\n• स्वतःचे exception नेहमी Exception पासून बनवा — class नाव(Exception):\n\n• raise ला message लिहा — पकडताना तेच काय गहाळ ते सांगतं, मदत होते\n\n• खास नावे — ठराविक त्रुटी वेगळ्या पकडता येतात, एकाच try मध्ये अनेक except लिहता येतात\n\nfinally सोबत: try ने काम, except ने चूक, finally ने 'नेहमी चालणारा भाग' — चूक झाली नाही तरी finally होतो. उदा. file बंद करणे.",
      },
      {
        title: "Interactive: शून्य मागणी",
        content: "order function मागणी (quantity) तपासते. मागणी शून्य झाल्यास ZeroQuantity उभा होतो; अन्यथा साधा उत्तर सापडतो.\n\norder(3) मध्ये अट बसत नाही — raise होत नाही, म्हणून 'ऑर्डर ठीक: 3' मिळतं.\n\nमागणी 0 केली तर काय होतं मनात आधी ठरवा; मग order(0) घालून पहा. raise चा मार्ग दिसतो त्याच वेळी except न पकडल्यास चूक बाहेर पडते हेही समजतं.",
        code: `class ZeroQuantity(Exception):
    pass

def order(qty):
    if qty == 0:
        raise ZeroQuantity("शून्य मागणी!")
    return "ऑर्डर ठीक: " + str(qty)

print(order(3))`,
        codeLanguage: "python",
        output: `ऑर्डर ठीक: 3`,
      },
      {
        title: "Mini Project: जन्मतारीख पडताळणी",
        content: "जन्मतारीखातील दिवस 1 ते 31 दरम्यान असणे अपेक्षित. day_check तो नियम तपासते आणि मर्यादेबाहेरील दिवसाला RangeError उभा करते.\n\nday_check(15) मध्ये दिवस नियमात बसतो — 'दिवस ठीक 15' मिळतं. day_check(32) केल्यास मात्र raise उभा होतो.\n\n31 च्या वरचा दिवस किंवा 1 च्या खाली — दोन्ही अटी elif ऐवजी साध्या and ने बसवल्या आहेत. नियम स्पष्ट दिसतात आणि चुका एका नावाने ओळखता येतात.",
        code: `class RangeError(Exception):
    pass

def day_check(d):
    if d < 1 or d > 31:
        raise RangeError("दिवस 1-31 दरम्यान!")
    return "दिवस ठीक " + str(d)

print(day_check(15))`,
        codeLanguage: "python",
        output: `दिवस ठीक 15`,
      },
      {
        title: "exception hierarchy — वारसा आणि पकडण्याचा क्रम",
        content: "Python मधील सर्व exceptions एका वंशावळीचा भाग आहेत. सर्वात वर BaseException, त्याखाली Exception, आणि त्याखाली ValueError, TypeError, KeyError असे अनेक प्रकार. खालील प्रत्येक वर्ग वरच्याचा वारसदार आहे. ही रचना समजल्यास 'कोणता exception कसा पकडायचा' हे स्पष्ट होते.\n\nमहत्त्वाचा नियम: except नेहमी 'तुमच्या' विशिष्ट exception पासून सुरुवात करा आणि व्यापक नंतर. else किंवा except Exception सर्वात शेवटी. याचे कारण — Python पहिला जुळणारा except निवडतो. जर आधी except Exception लिहिला तर तो सर्व गिळेल आणि नंतरचे विशिष्ट except कधीच चालणार नाहीत.\n\nउदा. try: ... except ValueError: ... except (KeyError, IndexError): ... except Exception as e: ... — हा क्रम योग्य. म्हणजे विशिष्ट त्रुटींवर नेमके उपचार आणि अनपेक्षित त्रुटींवर सामान्य उपचार. \n\nतुमचे custom exception Exception पासून वारसा घेतात, म्हणून ते सामान्य except Exception मध्येही पकडले जातात. पण तुम्ही त्यांना स्वतःच्या नावाने पकडावे — म्हणजे कोणती चूक, कोणता उपाय हे स्पष्ट होते. वारसा रचना लक्षात ठेवल्यास तुमचे exception नेमकेपणे वागतील.\n\nएक गोष्ट टाळा: bare except: (म्हणजे except नंतर काहीच न लिहिणे). तो BaseException — चुकीने KeyboardInterrupt किंवा SystemExit सुद्धा गिळतो; प्रोग्राम बंद करता येत नाही. नेहमी except Exception: किंवा विशिष्ट नाव वापरा. ही साधी सूचना मोठे संकट टाळते.\n\nवारसा स्वतःही वापरता येतो: PaymentError(Exception) वरून CardError(PaymentError) आणि NetBankingError(PaymentError) बनवा. मग except PaymentError ने दोन्ही पकडता येतात, तर except CardError ने फक्त एक. हीच दर्जेदार रचना.",
        code: `class PaymentError(Exception):
    pass

class CardError(PaymentError):
    pass

try:
    raise CardError("कार्ड नाकारले")
except PaymentError as e:
    print("पेमेंट त्रुटी:", e)`,
        codeLanguage: "python",
        output: `पेमेंट त्रुटी: कार्ड नाकारले`,
      },
      {
        title: "try/except/else/finally — चार भाग",
        content: "try विधानाचे चार भाग आहेत आणि प्रत्येकाचे स्वतंत्र काम. try मध्ये जोखीम असलेला कोड; except मध्ये त्रुटी उद्भवल्यावरचा कोड; else मध्ये त्रुटी न आल्यास चालणारा कोड; finally मध्ये त्रुटी आली नाही तरी चालणारा कोड. हे चारही एकत्र वापरणे अधिक सुस्पष्ट कोड देते.\n\nelse चा उपयोग अनेकांना माहीत नाही. तो try मधील सर्व कोड यशस्वी झाल्यावरच चालतो. फायदा: try मध्ये कमी कोड ठेवा — केवळ जोखमीचा भाग. कोड बाकीचा भाग else मध्ये ठेवल्यास चुकीचा exception try मध्ये पकडला जाणार नाही. try मध्ये जास्त कोड ठेवल्याने संबंध नसलेल्या त्रुटीही तिथेच पकडल्या जातात — हा सामान्य दोष.\n\nम्हणून आदर्श रचना: try मध्ये फक्त एक ओळ (फाईल उघडणे किंवा जोखमीचे काम); else मध्ये त्यानंतरचे काम; except मध्ये त्रुटी उपचार.\n\nfinally चा उपयोग संसाधने सोडण्यासाठी — फाईल बंद करणे, संगणक कनेक्शन बंद करणे, lock सोडणे. त्रुटी आली तरी finally चालतो; यामुळे संसाधने गळत नाहीत. खाली finally चे उदाहरण पहा — त्रुटी नसली तरी 'नेहमी' छापले जाते.\n\nएक सूक्ष्म मुद्दा: finally मध्ये return किंवा raise असेल तर तो try किंवा except च्या निकालावर प्रभाव टाकतो — म्हणून finally मध्ये नेहमीच साधे काम ठेवा. वाचणाऱ्याला क्रम स्पष्ट व्हावा म्हणूनच चारही भाग एकाच try मध्ये ठेवा, हे क्रमाने लिहा.",
        code: `def safe_divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError as e:
        print("त्रुटी:", e)
    else:
        print("निकाल:", result)
    finally:
        print("काम झाले")

safe_divide(10, 2)
safe_divide(10, 0)`,
        codeLanguage: "python",
        output: `निकाल: 5.0
काम झाले
त्रुटी: division by zero
काम झाले`,
      },
      {
        title: "raise ... from — मूळ कारण जोडणे",
        content: "एक exception दुसऱ्याच्या आत येऊ शकतो — याला exception chaining म्हणतात. जेव्हा तुम्ही एका त्रुटीवर प्रतिक्रिया म्हणून नवीन exception उभा करता, तेव्हा मूळ कारण जोडले तर पुढे debugging सोपे होते. raise NewError(\"...\") from original_error अशी ओळ मूळ कारण टिपते.\n\nउदाहरण: JSON parse करताना ValueError आला; तुम्ही तो catch करून तुमचा ConfigError उभा करता. from सह लिहिल्यास ट्रेसबॅकमध्ये 'The above exception was the direct cause...' दिसते — मूळ कारण हरवत नाही. from न लिहिल्यास ते दुय्यम स्तर बनते आणि माहिती झाकली जाते.\n\nfrom None असेही लिहिता येते — म्हणजे मूळ कारण टाकून देणे, जेव्हा मूळ त्रुटी वापरकर्त्याला दाखवायची नाही. उदा. सुरक्षा नियम म्हणून अंतर्गत तपशील लपवायचे असतील तर from None वापरतात. निवड संदर्भानुसार.\n\nहे तंत्र वास्तविक library मध्ये महत्त्वाचे: तुमची library कमी-स्तरीय त्रुटी (जसे sqlite3.Error) घेऊन वापरकर्त्याला तुमची स्वतःची DatabaseError देईल. अशा प्रकारे API स्थिर राहते — अंतर्गत तपशील बदलले तरी वापरकर्त्याचा कोड बदलत नाही.\n\nसारांश: raise NewError from old ने त्रुटीची साखळी तयार होते; ट्रेसबॅक दोन्ही कारणे दाखवतो. हे उच्च-स्तरीय कोडमध्ये मानक पद्धत आहे. custom exception चा खरा उपयोग या चेनिंगमध्येच पूर्ण होतो.\n\nएक tip: except करताना raise पुन्हा लिहिल्यास ('raise') तोच exception पुढे जातो, चेन जोडावी लागत नाही. फक्त नवीन प्रकार द्यायचा असल्यासच from वापरा.",
        code: `def parse_age(text):
    try:
        return int(text)
    except ValueError as e:
        raise TypeError("वय संख्या नाही") from e

try:
    parse_age("abc")
except TypeError as err:
    print("त्रुटी:", err)
    print("कारण:", type(err.__cause__).__name__)`,
        codeLanguage: "python",
        output: `त्रुटी: वय संख्या नाही
कारण: ValueError`,
      },
      {
        title: "exception attributes — सानुकूल माहिती",
        content: "साधा exception केवळ एक संदेश घेतो, पण तुमचा वर्ग अधिक माहिती ठेवू शकतो. __init__ override करून तुम्ही गुणधर्म जोडू शकता — जसे त्रुटीचा कोड, असमाधानकारक मूल्य, कोणता विभाग. उदा. class ValidationError(Exception): def __init__(self, field, message): self.field = field; self.message = message; super().__init__(message).\n\nअशा वर्गाला पकडताना थेट तपशील वापरता येतो: except ValidationError as e: print(e.field, e.message). UI मध्ये कोणत्या रकान्यात चूक आहे हे दाखवणे किंवा API मध्ये त्रुटी कोड पाठवणे — सर्व सोपे होते. म्हणून संदेशापेक्षा रचित माहिती उपयुक्त.\n\nargs हा गुणधर्म सर्व exception ला असतो — तो __init__ ला दिलेल्या arguments चा tuple. अनेकदा तो साधा संदेश देतो, पण सानुकूल वर्गात तुमची मूल्येही. e.args ने तपासणी करता येते. __str__ override करून सुंदर मजकूरही तयार करता येतो.\n\nएक चांगला नमुना: class APIError(Exception): def __init__(self, status, url): self.status = status; self.url = url; super().__init__(f\"HTTP {status} at {url}\"). आता e.status ने कोड मिळतो आणि e.url ने पत्ता. logging मध्ये अचूक माहिती जाते आणि पुन्हा प्रयत्न करणे शक्य होते.\n\nमर्यादा: गुणधर्म खूप जास्त ठेवल्यास वर्ग गुंतागुंतीचा होतो. फक्त तीच माहिती ठेवा जी पकडणाऱ्याला प्रत्यक्ष लागते. अन्यथा exception हा साधा राहावा — कोड स्पष्ट राहील.\n\nखाली तपशीलवाला exception पहा: OrderError मध्ये item आणि qty ठेवले आहे. पकडताना दोन्ही मूल्ये वेगळी दाखवता येतात — केवळ संदेश नाही.",
        code: `class OrderError(Exception):
    def __init__(self, item, qty):
        self.item = item
        self.qty = qty
        super().__init__(f"{item} साठी अवैध संख्या: {qty}")

try:
    raise OrderError("वडापाव", -2)
except OrderError as e:
    print(e.item, e.qty, "|", e)`,
        codeLanguage: "python",
        output: `वडापाव -2 | वडापाव साठी अवैध संख्या: -2`,
      },
      {
        title: "एक try, अनेक except — नेमकी निवड",
        content: "एका try मध्ये अनेक except ठेवता येतात आणि प्रत्येकासाठी वेगळा उपचार लिहिता येतो. यामुळे 'कोणती चूक कशी हाताळायची' हे स्पष्ट होते. उदा. फाईल वाचताना FileNotFoundError, PermissionError आणि IsADirectoryError वेगळे हाताळता येतात — प्रत्येकाला वेगळा संदेश किंवा वेगळी पुढील क्रिया.\n\nक्रम नेहमी विशिष्टापासून सामान्याकडे. आधी FileNotFoundError, नंतर OSError (पालक वर्ग), शेवटी Exception. जर पालक आधी लिहिला तर संततीचा except कधीच चालणार नाही — Python पहिला जुळणारा घेतो. हा क्रम विसरणे ही सर्वात सामान्य चूक.\n\nएकाच उपचारासाठी अनेक प्रकार गट करता येतात: except (ValueError, TypeError) as e: — कंसात नावे. तर दोन्ही त्रुटींसाठी एकच कोड चालतो. कोड लहान राहतो आणि वाचनीय.\n\nexcept नंतर नाव न दिल्यास (except:) काहीही पकडले जाते — पण ते टाळा कारण KeyboardInterrupt सुद्धा पकडले जाते. नेहमी except Exception: किंवा विशिष्ट नाव वापरा. यामुळे प्रोग्राम योग्य रीतीने बंद होऊ शकतो.\n\nएक सूक्ष्म बाब: तुमचे custom exception जर Exception च्या आधी आणि विशिष्ट नावाने लिहिले तर नेमकेपणे पकडले जाते. म्हणून वारसा रचना लक्षात ठेवा — तुमचा वर्ग कोणाचा वंशज आहे ते अनुसार except चा क्रम ठरवा.\n\nव्यवहारात एका function मध्ये तीन-चार प्रकारच्या त्रुटी येऊ शकतात. प्रत्येकासाठी योग्य प्रतिसाद — पुन्हा प्रयत्न, वापरकर्त्याला संदेश, किंवा लॉग आणि पुढे — अशा वेगवेगळ्या except मुळे घडतात. खाली दोन वेगळ्या त्रुटींचे उदाहरण.",
        code: `def read_number(text):
    try:
        return 10 / int(text)
    except ZeroDivisionError:
        return "शून्य नको"
    except ValueError:
        return "संख्या नाही"

print(read_number("2"))
print(read_number("0"))
print(read_number("x"))`,
        codeLanguage: "python",
        output: `5.0
शून्य नको
संख्या नाही`,
      },
      {
        title: "सारांश आणि आत्मपरीक्षण",
        content: "custom exception चा गाभा: class Name(Exception) पासून सुरुवात; raise ने उभा; except नाव as e ने पकडा; message नेणे; finally ने नेहमीचे काम. शिवाय Exception hierarchy, चेनिंग (raise ... from), सानुकूल गुणधर्म, आणि अनेक except चा क्रम. हे सर्व प्रकरणाच्या मुद्दे.\n\nआत्मपरीक्षण: custom exception का बनवतात? raise आणि return कधी वापरायचे? except चा क्रम कसा? finally नेहमी चालतो का? from काय जोडतो? या पाच प्रश्नांची उत्तरे स्पष्ट असल्यास धड्याचे उद्दिष्ट साधले.\n\nसराव: एक function तयार करा जी वय तपासते — 0 पेक्षा कमी किंवा 120 पेक्षा जास्त असल्यास AgeError उभा करते; message मध्ये वयाचे मूल्य असते. दुसरे: बँक withdraw जे अपुरे असल्यास InsufficientFunds उभा करते; त्या exception मध्ये balance आणि amount गुणधर्म ठेवा. हे दोन सराव सर्व संकल्पना एकत्र करतात.\n\nमोठ्या कोडमध्ये exceptions हे आर्किटेक्चरचे भाग आहेत. नेटवर्क, database, input — प्रत्येक स्तरावर त्रुटी अपेक्षित आहेत; त्या व्यवस्थित जाहीर करणे आणि हाताळणे हीच व्यावसायिक programming. पुढील dataclasses धडा त्रुटी-मुक्त डेटा मॉडेल्स शिकवेल — दोन्ही मिळून तुमचा कोड अधिक विश्वासू होईल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "exceptions च्या खोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• errors and exceptions tutorial: https://docs.python.org/3/tutorial/errors.html\n• user-defined exceptions: https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions\n• built-in exceptions संपूर्ण यादी: https://docs.python.org/3/library/exceptions.html\n• raise statement reference: https://docs.python.org/3/reference/simple_stmts.html#raise\n• try statement reference: https://docs.python.org/3/reference/compound_stmts.html#the-try-statement\n• exception ची अधिकृत व्याख्या: https://docs.python.org/3/glossary.html#term-exception\n• Exception hierarchy diagram: https://docs.python.org/3/library/exceptions.html#exception-hierarchy\n• exception chaining (__cause__): https://docs.python.org/3/reference/simple_stmts.html#the-raise-statement\n• assertions आणि errors: https://docs.python.org/3/reference/simple_stmts.html#assert\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org, python.org आणि peps.python.org वरूनच आहेत.",
      },
      {
        title: "वास्तविक project: सुरक्षित लॉगिन तपासणी",
        content: "custom exceptions चा व्यावहारिक उपयोग पाहूया — एक लॉगिन तपासणी. नियम: वापरकर्तानाव रिकामे नसावे; पासवर्ड कमीत कमी 8 अक्षरे; पासवर्ड मध्ये अंक असावा. प्रत्येक नियमासाठी स्वतंत्र exception बनवू — EmptyUsername, WeakPassword, NoDigit. मग validate फंक्शन क्रमाने तपासेल आणि पहिल्या अपयशावर योग्य exception उभा करेल.\n\nयाचा फायदा: UI ला नेमका संदेश मिळतो — 'वापरकर्तानाव रिकामे' की 'पासवर्ड कमजोर' हे वेगळे कळते. जर एकच सामान्य Exception वापरला असता तर वापरकर्त्याला अस्पष्ट संदेश मिळाला असता.\n\nप्रत्येक exception मध्ये उपयोगी माहिती ठेवा. WeakPassword मध्ये दिलेल्या पासवर्डची लांबी; EmptyUsername मध्ये कोणते रकाने रिकामे. अशा तपशिलांमुळे सुधारणा शक्य होते आणि चाचणी लिहिणे सोपे.\n\nपुढील टप्पा: validate फंक्शनला अनेक try/except नको; ते केवळ exception उभा करते. वापर करणारा कोड try/except ने पकडतो आणि त्यानुसार वागतो. अशा विभाजनामुळे तपासणीचे नियम एकाच जागी राहतात आणि UI बदलले तरी तर्क बदलत नाही.\n\nसराव: हे validate फंक्शन स्वतः लिहा, तीनही exceptions व्यवस्थित व्याख्या करा, आणि चार प्रकारच्या इनपुटसह तपासा — बरोबर, रिकामे नाव, छोटा पासवर्ड, अंक नसलेला पासवर्ड. प्रत्येक वेळी योग्य exception उभा राहतो का ते पहा. हा सराव interview मध्ये खूप विचारला जातो.\n\nहा project दाखवतो की exceptions ही केवळ त्रुटी नाहीत — ती व्यवसाय-नियमांचे जाहीरपत्र आहे. 'काय चालले नाही' हे नावाने सांगणे हाच चांगल्या API चा गुण आहे.",
        code: `class EmptyUsername(Exception):
    pass

class WeakPassword(Exception):
    def __init__(self, length):
        self.length = length
        super().__init__(f"पासवर्ड फक्त {length} अक्षरे")

def validate(name, password):
    if not name:
        raise EmptyUsername()
    if len(password) < 8:
        raise WeakPassword(len(password))

try:
    validate("", "abc")
except EmptyUsername:
    print("नाव आवश्यक")`,
        codeLanguage: "python",
        output: `नाव आवश्यक`,
      },
      {
        title: "कधी exception, कधी return — निर्णय",
        content: "अनेक नवशिक्यांना प्रश्न पडतो — 'त्रुटी' दाखवायला exception वापरावा की None/False return करावे? नियम साधा: जेव्हा परिस्थिती अपवादात्मक (exceptional) असते आणि पुढील कोड सुरू ठेवणे अर्थहीन असते, तेव्हा exception. जेव्हा 'अपयश' हा सामान्य, अपेक्षित भाग असतो, तेव्हा return मूल्य.\n\nउदा. dict.get(key) साठी key नसणे सामान्य — None मिळतो, exception नाही. पण d[key] थेट वापरल्यास KeyError — कारण तिथे key नसणे हा अपवाद. दोन्ही पद्धती अस्तित्वात आहेत आणि प्रत्येकाचे स्थान आहे. Python तत्त्वज्ञान 'EAFP' (कष्ट करून माफी मागा) आणि 'LBYL' (उडी मारण्यापूर्वी पहा) या दोन्ही मानतो.\n\nतुमचे custom exception तेव्हा वापरा जेव्हा त्रुटी कोड-स्तर बदलून पुढे जाऊ नये. पण जेव्हा 'निकाल नाही' हे वैध उत्तर असते (शोध फलित नाही) तेव्हा None किंवा रिकामा संग्रह परत द्या. हा फरक ओळखणे अनुभवाने येते.\n\nएक सूचना: बूलियन परतीचे फंक्शन अनेकदा अस्पष्ट असते — 'का' अपयश आले? म्हणून तपशील हवा असल्यास result object किंवा exception बरे. उदा. validate() ने True/False परत देण्यापेक्षा ValidationError उभा करणे अधिक माहिती देते.\n\nथोडक्यात: अपवादात्मक स्थिती = exception; नियमित अपयश = परतीचे मूल्य. हा संतुलित दृष्टिकोन ठेवल्यास तुमचा API स्वच्छ आणि वापरण्यास सोपा राहतो.",
        code: `def find_student(students, name):
    for s in students:
        if s["name"] == name:
            return s
    return None

class NotFound(Exception):
    pass

def get_student(students, name):
    s = find_student(students, name)
    if s is None:
        raise NotFound(name)
    return s

print(find_student([], "मीरा"))
try:
    get_student([], "मीरा")
except NotFound as e:
    print("सापडले नाही:", e)`,
        codeLanguage: "python",
        output: `None
सापडले नाही: मीरा`,
      },
      {
        title: "exception logging आणि वापरकर्ता संदेश",
        content: "व्यावसायिक कोडमध्ये त्रुटी दोन ठिकाणी जाते — लॉगमध्ये (विकसकांसाठी) आणि वापरकर्त्याला (सोप्या भाषेत). हे दोन वेगळे ठेवा. लॉगमध्ये पूर्ण तपशील, stack trace आणि कारण; वापरकर्त्याला छोटा, सभ्य, मार्गदर्शक संदेश. custom exception हे विभाजन सोपे करतात.\n\nlogging.exception() किंवा logger.exception() except ब्लॉकमध्ये वापरल्यास संपूर्ण stack trace लॉग होते. हे except मध्येच करा जिथे त्रुटी पकडली जाते, कारण तिथेच मूळ माहिती उपलब्ध असते. नंतर केवळ संदेश लॉग केल्यास कारण हरवते.\n\nवापरकर्त्याला दाखवायला custom exception मध्ये 'user_message' गुणधर्म ठेवा; अंतर्गत तपशील '__str__' मध्ये. तर UI user_message दाखवेल आणि लॉग पूर्ण तपशील नोंदवेल. हे security दृष्टीनेही महत्त्वाचे — अंतर्गत रचना वापरकर्त्याला उघड करू नका.\n\nउदा. class AppError(Exception): user_message = \"काहीतरी चुकले\"; अंतर्गत संदेश __init__ मध्ये. UI साठी e.user_message; लॉगसाठी repr(e). यामुळे दोन्ही प्रेक्षकांना योग्य माहिती मिळते आणि संवेदनशील तपशील लपतात.\n\nशेवटी, लॉग आणि संदेश वेगळे ठेवल्याने चाचणी सोपी होते — तुम्ही exception चा प्रकार आणि गुणधर्म तपासू शकता, संदेशाचे शब्द नाही. ही व्यावसायिक सवय दीर्घकालीन प्रकल्पांत खूप उपयोगी ठरते.",
        code: `import logging
logging.basicConfig(level=logging.ERROR)

class AppError(Exception):
    user_message = "काहीतरी चुकले"

try:
    raise AppError("database timeout")
except AppError as e:
    print("वापरकर्त्याला:", e.user_message)
    print("लॉग:", e)`,
        codeLanguage: "python",
        output: `वापरकर्त्याला: काहीतरी चुकले
लॉग: database timeout`,
      },
    ],
    practiceQuestions: [
      "स्वतःचा exception कसा बनवता?",
      "raise काय करतो?",
      "except MyError मध्ये काय लिहितात?",
      "message का देतात?",
    ],
    quiz: [
      { question: "स्वतःचा exception कुठून?", options: ["Exception", "Error", "Base", "None"], correct: 0 },
      { question: "exception निर्माण करण्यासाठी?", options: ["raise", "throw", "try", "catch"], correct: 0 },
      { question: "message कुठे दिसतो?", options: ["e मध्ये", "print", "file", "None"], correct: 0 },
    ],
    challenge: {
      prompt: "रिकामी सूचीवर अपवाद द्या.",
      starterCode: `class EmptyError(Exception):
    pass

def pop(items):
    if not items:
        raise EmptyError("सूची रिकामी!")
    return items.pop()

try:
    print(pop([1, 2]))
    pop([])
except EmptyError as e:
    print("catch:", e)`,
      expectedOutput: "2\ncatch: सूची रिकामी!",
    },
    interviewQuestions: [
      "custom exception कधी बनवतात?",
      "raise vs return?",
    ],
    related: ["python-regex", "python-dataclasses", "python-debugging"],
    prev: "python-regex",
    next: "python-dataclasses",
  },

  {
    slug: "python-dataclasses",
    categoryId: "python",
    title: "dataclasses",
    marathiTitle: "dataclasses - सोपी data वस्तू",
    level: "advanced",
    minutes: 14,
    summary: "@dataclass — __init__, __repr__, == आपोआप — कमी कोड, स्वच्छ वस्तू.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "dataclasses - सोपी data वस्तू म्हणजे काय?",
        content: "@dataclass — __init__, __repr__, == आपोआप — कमी कोड, स्वच्छ वस्तू.\nसामान्य data वस्तूसाठी @dataclass वापरतात — __init__, __str__ आणि __eq__ हे सर्व method आपोआप तयार होतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? dataclasses - सोपी data वस्तू चे फायदे आणि महत्त्व",
        content: "\"dataclasses - सोपी data वस्तू\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "dataclass — data वस्तू थोडक्यात",
        content: "सामान्य data वस्तूसाठी @dataclass वापरतात — __init__, __str__ आणि __eq__ हे सर्व method आपोआप तयार होतात. 'फॉर्म भरा, बाकीचं Python तयार करतं' असं समजा.\n\nसुरुवात करण्यासाठी: from dataclasses import dataclass. वर्गावर @dataclass ही एक ओळ ठेवतात आणि गुणधर्म type सह लिहितात — class Point: x: int.\n\ndefault values देताही येतात. mutable default — list किंवा dict — हवं असल्यास field(default_factory=...) वापरतात; त्याविषयी पुढील section मध्ये विस्ताराने.",
      },
      {
        title: "Syntax: @dataclass आणि गुणधर्म",
        content: "Point मध्ये फक्त दोन गुणधर्म — x: int आणि y: int. @dataclass मुळे Python तीन method आपोआप बनवतो: __init__ (वस्तू बनवणे), __repr__ (स्वरूप दाखवणे) आणि __eq__ (बरोबरी तपासणे).\n\np = Point(3, 4) ने वस्तू बनते; print(p) मुळे Point(x=3, y=4) दिसतं — __repr__ ने रचना सुटसुटीत दिसते.\n\nखाली तिन्ही method पहा: print(p.x + p.y) मुळे 7, आणि Point(3, 4) == Point(3, 4) मुळे True — समान गुणधर्म म्हणजे समान वस्तू.",
        code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(3, 4)
print(p)
print(p.x + p.y)
print(Point(3, 4) == Point(3, 4))`,
        codeLanguage: "python",
        output: `Point(x=3, y=4)
7
True`,
      },
      {
        title: "default values आणि method",
        content: "गुणधर्माला default value देताही येते — price: int = 0 मध्ये किंमत दिली नाही तर 0 गृहीत.\n\ndataclass मध्ये method हे गुणधर्मांप्रमाणेच लिहितात. total(self, qty) किंमत × प्रमाण काढते. r = Product(\"दूध\", 56) मग r.total(2) → 112.\n\ndefault value असलेला गुणधर्म नेहमी शेवटी लिहा — कागदपत्रांच्या क्रमानुसार गुणधर्म एकमेकांत मिसळू नयेत म्हणून हा नियम.",
        code: `from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: int = 0

    def total(self, qty):
        return self.price * qty

r = Product("दूध", 56)
print(r.total(2))`,
        codeLanguage: "python",
        output: `112`,
      },
      {
        title: "field — mutable default सुरक्षित करणे",
        content: "list किंवा dict सारखा mutable default थेट लिहिला तर सर्व वस्तू त्याच संग्रहावर अवलंबून राहतात — हा धोका आहे. त्याऐवजी field(default_factory=list) वापरतात; तो प्रत्येक वस्तूला नवी list बनवतो.\n\nTeam मध्ये name आणि players ही list आहे. t.players.append(\"आरोही\") नंतर दुसरा खेळाडू जोडला.\n\nprint(t) मुळे Team(name='मावळे', players=['आरोही', 'वेद']) दिसतो — प्रत्येक वस्तूची स्वतःची list असते.",
        code: `from dataclasses import dataclass, field

@dataclass
class Team:
    name: str
    players: list = field(default_factory=list)

t = Team("मावळे")
t.players.append("आरोही")
t.players.append("वेद")
print(t)`,
        codeLanguage: "python",
        output: `Team(name='मावळे', players=['आरोही', 'वेद'])`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ mutable default थेट देणे — players: list = [] असं लिहिल्यास सर्व वस्तू एकच list वाटून घेतात; field(default_factory=list) हा सुरक्षित मार्ग.\n\n✗ types न लिहिणे — dataclass मध्ये x: int असं type लिहा; त्यावाचून आपोआप तयार होणारा __init__ चुकतो.\n\n✗ @dataclass विसरणे — तर मग वर्ग साधाच राहतो आणि कुठलेही method आपोआप तयार होत नाहीत.\n\nखाली Note हा साधा dataclass — एक गुणधर्म text, वस्तू आणि तिचे मूल्य.",
        code: `from dataclasses import dataclass

@dataclass
class Note:
    text: str

n = Note("अभ्यास")
print(n.text)`,
        codeLanguage: "python",
        output: `अभ्यास`,
      },
      {
        title: "नोंदी: आपोआप येणारे method",
        content: "dataclass च्या आणा-जाण्याच्या चार मुद्दे:\n\n• __init__/__repr__/__eq__ हे आपोआप तयार होतात\n\n• मोठ्या class साठी कमी कोड — गुणधर्म लिहिले की बाकी Python सांभाळतं\n\n• mutable default हवे तर field(default_factory=list) अशा रूपाने लिहा\n\n• dataclasses.asdict सारखी साधनेही उपलब्ध — dataclass ला सामान्य dict मध्ये बदलते\n\nही उपकरणं मोठ्या projects मध्ये data मॉडेल स्वच्छ ठेवतात — कमी कोड, कमी चुका.",
      },
      {
        title: "Interactive: Book वस्तू",
        content: "कृती: दोन गुणधर्म असलेल्या Book dataclass मधून पुस्तकाची माहिती दाखवा.\n\nBook मध्ये title आणि pages हे दोन गुणधर्म. b = Book(\"श्रीमान योगी\", 320) ने वस्तू बनते आणि print(b.title, b.pages) मुळे श्रीमान योगी 320 दिसतं.\n\nपाने किंवा शीर्षक बदलून नवी वस्तू बनवा — समान गुणधर्मांमुळे दोन वस्तू समान ठरतात हेही तपासता येतं.",
        code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    pages: int

b = Book("श्रीमान योगी", 320)
print(b.title, b.pages)`,
        codeLanguage: "python",
        output: `श्रीमान योगी 320`,
      },
      {
        title: "Mini Project: वैयक्तिक कार्ड",
        content: "प्रत्येक खेळाडूसाठी नाव आणि संघ ठेवणारं कार्ड dataclass बनवा — दोन गुणधर्मांनी दोन ओळीत माहिती.\n\nc = Card(\"आरोही\", \"मावळे\") ने वस्तू बनते; print(c.name, \"-\", c.team) मुळे आरोही - मावळे दिसतं.\n\nअशाच छोट्या data वस्तू — खेळाडू, पुस्तक, उत्पादन — dataclass मुळे कमी कोडात मिळतात.",
        code: `from dataclasses import dataclass

@dataclass
class Card:
    name: str
    team: str

c = Card("आरोही", "मावळे")
print(c.name, "-", c.team)`,
        codeLanguage: "python",
        output: `आरोही - मावळे`,
      },
      {
        title: "field() आणि default_factory — सुरक्षित डीफॉल्ट",
        content: "dataclass मध्ये एक सूक्ष्म पण महत्त्वाचा धोका आहे — mutable default. @dataclass class Team: members: list = [] असे लिहिले तर तीच list सर्व objects मध्ये वापरली जाते. Python स्वतः यावर TypeError देते. कारण: एका object मध्ये बदल केल्यास सर्व team objects मध्ये बदल दिसतो.\n\nयावर उपाय field(default_factory=list). म्हणजे प्रत्येक object तयार होताना नवीन रिकामी list द्या. @dataclass class Team: members: list = field(default_factory=list). असे लिहिल्यास प्रत्येक team स्वतंत्र list मिळते. हेच dict, set आणि अन्य mutable प्रकारांसाठी.\n\nfield() ने अधिक नियंत्रण मिळते: default, default_factory, repr, compare, init, metadata. उदा. field(repr=False) म्हणजे ते मूल्य print मध्ये दाखवू नको (जसे पासवर्ड). field(compare=False) म्हणजे समानता तपासताना विचारू नको. field(metadata={\"unit\": \"kg\"}) म्हणजे तुमची स्वतःची माहिती जोडा.\n\nप्रत्यक्ष उदाहरण: एक Product वर्ग — id, name, price, आणि tags (रिकामी list), आणि password (repr=False). वापरताना p1.tags.append(\"नवीन\") करा; p2 ची tags बदललेली नाही हे तपासा. हा प्रयोग default_factory चा फायदा स्पष्ट करतो.\n\nएक क्रम-नियम लक्षात ठेवा: डीफॉल्ट नसलेले fields डीफॉल्ट असलेल्या fields च्या आधीच लिहावे लागतात. अन्यथा TypeError — 'non-default argument follows default argument'. default_factory असलेले fields शेवटी ठेवा.\n\nसंपूर्ण चित्र: field() मुळे dataclass मधील सर्व बारकावे हाताळता येतात. पण फक्त गरज असेल तेव्हाच वापरा — सामान्य मूल्यासाठी थेट default पुरतो. खाली Product चे उदाहरण पहा — प्रत्येक object ला स्वतंत्र tags मिळतात.",
        code: `from dataclasses import dataclass, field

@dataclass
class Product:
    id: int
    name: str
    tags: list = field(default_factory=list)

p1 = Product(1, "चहा")
p1.tags.append("पेय")
p2 = Product(2, "कॉफी")
print(p1.tags, p2.tags)`,
        codeLanguage: "python",
        output: `['पेय'] []`,
      },
      {
        title: "frozen=True — अपरिवर्तनीय वर्ग",
        content: "frozen=True दिल्यास dataclass ची मूल्ये बदलता येत नाहीत. @dataclass(frozen=True) class Point: x: int; y: int. मग p.x = 5 करण्याचा प्रयत्न केल्यास FrozenInstanceError येतो. हे अनपेक्षित बदलांपासून संरक्षण करते आणि कोड अधिक विश्वासू बनवते.\n\nअपरिवर्तनीय (immutable) objects अनेक फायदे देतात: ती सुरक्षितपणे सामायिक करता येतात (बदलले जाणार नाहीत याची खात्री); ती thread-safe असतात; आणि समानता तपासणी सोपी होते. म्हणून Point, Color, Range सारख्या मूल्य-वर्गांसाठी frozen योग्य.\n\nfrozen=True सोबत __hash__ आपोआप तयार होतो, त्यामुळे ते objects set मध्ये किंवा dictionary की म्हणून वापरता येतात. फक्त समान मूल्यांचे objects एकच key मानले जातात. हे गणितीय मूल्यांसाठी उत्तम — जसे गुण किंवा समन्वय.\n\nएक तपशील: frozen असलेल्या dataclass मध्ये __post_init__ मध्ये बदल करायचा असल्यास object.__setattr__(self, \"field\", value) वापरावे लागते. हे थोडे गोंधळवणारे पण उपयोगी आहे — आत तयारी, बाहेर अपरिवर्तनीय.\n\nfrozen=True चा सर्वात मोठा फायदा — तुमचा कोड योग्य वागतो का हे भाषाच तपासते. त्रुटी लवकर मिळते, debug सोपे. म्हणून जिथे बदल अपेक्षित नाही तिथे frozen स्वतःहून लावा.\n\nतुलना: साधा class immutable बनवायला getters/setters आणि __setattr__ blocker लिहावे लागतात; dataclass(frozen=True) हे एका शब्दात करते. खाली frozen वर्ग आणि त्याची set मधील वापरता पहा.",
        code: `from dataclasses import dataclass

@dataclass(frozen=True)
class Color:
    r: int
    g: int
    b: int

red = Color(255, 0, 0)
print(red)
print({red, Color(255, 0, 0)})`,
        codeLanguage: "python",
        output: `Color(r=255, g=0, b=0)
{Color(r=255, g=0, b=0)}`,
      },
      {
        title: "asdict, astuple आणि JSON",
        content: "dataclasses मॉड्यूल दोन उपयोगी functions देते — asdict आणि astuple. asdict(obj) dataclass चे रूपांतर dict मध्ये करते (nested objects ही पुन्हा dict); astuple(obj) tuple मध्ये. यामुळे dataclass आणि dict यांमध्ये सहज रूपांतर होते.\n\nJSON सह dataclass वापरण्यासाठी हे अत्यंत सोपे: json.dumps(asdict(person), ensure_ascii=False). मराठीसाठी ensure_ascii=False महत्त्वाचे — नाहीतर मराठी अक्षरे \\uXXXX स्वरूपात जातात. ही एक साधी सूचना बरेचदा विसरली जाते.\n\nउलट दिशा: JSON वरून dataclass बनवायचे असल्यास Person(**data). पण nested किंवा तारखांसाठी जास्त काम लागते — तिथे manual किंवा library वापर. शक्य तितके साधे ठेवा: flat dataclass + **data.\n\nasdict चा एक तपशील: तो खोल (deep) copy करतो — nested dataclass पुन्हा dict होतो. म्हणून मोठ्या रचनेत ते महाग होऊ शकते. फक्त बाहेरील स्तर हवा असल्यास custom to_dict लिहा.\n\nव्यावहारिक उदाहरण: एक Order dataclass → asdict → json.dumps → फाईल किंवा API. इथे dataclass स्पष्टता देते (प्रकार, field नावे) आणि JSON सुसंगतता देते (transmission). दोन्हींचा संगम म्हणजे आधुनिक Python कोड.\n\nCSV साठी astuple किंवा asdict.values() वापरता येते. पुढील csv-json धड्यात हेच पुढे नेऊ. खाली Order चे JSON रूपांतर पहा — मराठी अक्षरे जशी आहेत तशी राहतात.",
        code: `from dataclasses import dataclass, asdict
import json

@dataclass
class Order:
    id: int
    item: str
    price: float

o = Order(1, "चहा", 15.5)
text = json.dumps(asdict(o), ensure_ascii=False)
print(text)`,
        codeLanguage: "python",
        output: `{"id": 1, "item": "चहा", "price": 15.5}`,
      },
      {
        title: "__post_init__, inheritance आणि slots",
        content: "__post_init__ ही विशेष पद्धत — dataclass तयार झाल्यावर लगेच चालते. खालील उदाहरण पहा: radius वरून area स्वतः काढायचे असेल तर __post_init__ मध्ये गणना करा. म्हणजे वापरकर्त्याला area स्वतः देण्याची गरज नाही; ते आपोआप तयार होते.\n\n__post_init__ मध्ये तपासणीही करता येते: वय ऋण असल्यास ValueError. अशा प्रकारे dataclass तयार होताच अपवैध मूल्ये अडवली जातात. हे 'fail fast' तत्त्व — त्रुटी लवकर, स्पष्ट स्थानावर.\n\ninheritance: एक dataclass दुसऱ्याचा वारसा घेऊ शकतो. @dataclass class Student(Person): grade: str. मूल वर्गाचे fields आधी येतात आणि नवीन fields नंतर. जर मूल वर्गात डीफॉल्ट असलेले fields जोडले तर क्रमाकडे लक्ष द्या, अन्यथा TypeError.\n\nslots=True (Python 3.10+) एक आधुनिक सुविधा. @dataclass(slots=True) — यामुळे प्रत्येक object चा वापर कमी होतो (गुणधर्म एका निश्चित सूचीत असतात) आणि कार्यक्षमता थोडी वाढते. लाखो objects असतील तर हा फायदा मोठा.\n\nमोठ्या प्रणालीत inheritance नेहमी साधे ठेवा. depth वाढल्यास क्रम, default आणि __post_init__ गुंतागुंतीचे होतात. शक्य असल्यास composition (एक dataclass दुसऱ्यात ठेवणे) हा inheritance पेक्षा स्वच्छ मार्ग.\n\nसारांश: __post_init__ ने गणना/तपासणी; inheritance ने विस्तार; slots=True ने कार्यक्षमता. तिन्ही तंत्र एकत्र वापरून शक्तिशाली पण स्वच्छ data-मॉडेल तयार होते.",
        code: `from dataclasses import dataclass

@dataclass
class Circle:
    radius: float

    def __post_init__(self):
        if self.radius < 0:
            raise ValueError("त्रिज्या ऋण नको")
        self.area = 3.14159 * self.radius ** 2

c = Circle(2)
print(round(c.area, 2))`,
        codeLanguage: "python",
        output: `12.57`,
      },
      {
        title: "dataclass वि. NamedTuple वि. साधा class",
        content: "कोणता प्रकार कधी वापरायचा? साधा class — जेव्हा methods जास्त, व्यवहार-तर्क गुंतागुंतीचा, आणि तयारीत खूप लॉजिक. dataclass — मुख्यतः डेटा ठेवायचा, थोडे methods, स्पष्ट fields. NamedTuple — अपरिवर्तनीय, हलका, tuple सारखा. प्रत्येकाचे स्थान आहे.\n\nNamedTuple पासून dataclass मध्ये स्थलांतर का? NamedTuple फार मर्यादित — बदलता येत नाही, default मर्यादित, methods कमी. dataclass लवचिक — default, frozen, inheritance, __post_init__. म्हणून बहुतांश व्यवहारात dataclass पसंत.\n\nपण NamedTuple चे फायदे: तो memory मध्ये हलका, unpacking सोपे (x, y = point), आणि set/dict key. जर फक्त दोन-तीन मूल्यांचा छोटा, बदल न होणारा बंडल हवा असेल तर NamedTuple उत्तम.\n\nसाधा class तेव्हा निवडा जेव्हा तयारीत बरेच लॉजिक असेल आणि तुम्हाला पूर्ण नियंत्रण हवे. dataclass चा __repr__ किंवा समानता नकोच असेल तर साधा class. पण बहुतेक वेळा डेटा वर्गांसाठी dataclass आपला पहिला पर्याय.\n\nव्यवहारात मिश्र वापर सामान्य: मुख्य entity साठी dataclass; छोट्या tuple-सारख्या मूल्यासाठी NamedTuple; सेवा/वर्तन साठी साधा class. योग्य साधन निवडणे हेच कौशल्य.\n\nतुलना सारणी लक्षात ठेवा: बदलता येणारा डेटा + default + methods → dataclass; बदल न होणारा हलका डेटा → NamedTuple; वर्तन-प्रधान → साधा class. खाली dataclass आणि NamedTuple यांचे एकत्र उदाहरण पहा.",
        code: `from dataclasses import dataclass
from typing import NamedTuple

@dataclass
class Employee:
    name: str
    salary: int = 30000

class Point(NamedTuple):
    x: int
    y: int

print(Employee("मीरा"))
x, y = Point(2, 3)
print(x, y)`,
        codeLanguage: "python",
        output: `Employee(name='मीरा', salary=30000)
2 3`,
      },
      {
        title: "सारांश, सराव आणि project",
        content: "dataclass धड्याचा गाभा: @dataclass स्वयंचलितपणे __init__, __repr__, __eq__ बनवते. field() ने सूक्ष्म नियंत्रण; default_factory ने सुरक्षित mutable डीफॉल्ट; frozen=True ने अपरिवर्तनीयता; order=True ने तुलना; asdict/astuple ने रूपांतर; __post_init__ ने तयारी; slots=True ने कार्यक्षमता.\n\nआत्मपरीक्षण: dataclass एका ओळीत काय देतो? mutable default का धोकादायक? frozen वापरून काय मिळते? asdict आणि astuple फरक? __post_init__ कधी चालते? NamedTuple पेक्षा dataclass का निवडावा? या सहा प्रश्नांची उत्तरे स्पष्ट असावीत.\n\nसराव: एक Student dataclass बनवा — name, roll, marks (list, default_factory). average() method जोडा. दुसरा: frozen Point आणि त्याचे set मधील वापर. तिसरा: Order dataclass वरून JSON तयार करा (ensure_ascii=False). हे तीन सराव सर्व क्षमता झाकतात.\n\nproject कल्पना: एक छोटी वाचनालय प्रणाली — Book dataclass (title, author, available=True), Member dataclass (name, borrowed list), आणि functions जी पुस्तक देतात/परत घेतात. dataclass मुळे डेटा स्पष्ट राहतो; asdict ने फाईल/JSON मध्ये जतन करा. हा project पुढील csv-json धड्याशी थेट जोडतो.\n\nशेवटी: dataclasses मॉड्यूल हे दैनंदिन Python लेखनात सर्वाधिक उपयोगी सुविधांपैकी एक. याचा सराव केल्यास तुमचा कोड लहान, स्पष्ट आणि विश्वासू होतो. पुढील धड्यात आपण डेटा फाईल्सत (CSV/JSON) वाचन-लेखन शिकू — तिथे dataclass थेट कामी येते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "dataclasses च्या खोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• dataclasses module संपूर्ण संदर्भ: https://docs.python.org/3/library/dataclasses.html\n• @dataclass decorator चे दस्तऐवज: https://docs.python.org/3/library/dataclasses.html#dataclasses.dataclass\n• field() आणि default_factory: https://docs.python.org/3/library/dataclasses.html#dataclasses.field\n• asdict आणि astuple: https://docs.python.org/3/library/dataclasses.html#dataclasses.asdict\n• frozen उदाहरण: https://docs.python.org/3/library/dataclasses.html#frozen-instances\n• __post_init__ संदर्भ: https://docs.python.org/3/library/dataclasses.html#post-init-processing\n• slots parameter: https://docs.python.org/3/library/dataclasses.html#dataclasses.dataclass\n• typing.NamedTuple: https://docs.python.org/3/library/typing.html#typing.NamedTuple\n• data model मुख्यपृष्ठ: https://docs.python.org/3/reference/datamodel.html\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "order=True — तुलना आणि sorting",
        content: "@dataclass(order=True) दिल्यास वर्ग तुलनायोग्य होतो — <, <=, >, >= सर्व चालतात. तुलना fields च्या क्रमाने केली जाते: पहिले field, ते समान असल्यास दुसरे, असे. उदा. @dataclass(order=True) class Version: major: int; minor: int. मग Version(1, 2) < Version(2, 0) — कारण major पहिले तुलना.\n\norder=True ने sorted() सुद्धा चालते. objects ची सूची sorted(versions) ने क्रमाने लागते. हे अक्षरी क्रम किंवा आवृत्ती क्रमासाठी उत्तम. तुलना फक्त समान प्रकारांतच — भिन्न वर्गांशी तुलना केल्यास TypeError. हे अपेक्षित आहे; order स्पष्टता टिकवतो.\n\nतुलनेत भाग घेऊ नये असे fields field(compare=False) ने वगळता येतात — जसे सुधारित तारीख किंवा आंतरिक id. तर क्रम ठरवताना फक्त महत्त्वाची मूल्ये विचारात घेतली जातात. हे लवचिकतेसाठी उपयोगी.\n\nexpected: active हे boolean जर आधी असेल तर False < True ने क्रम बिघडतो. म्हणून ज्या field वर क्रम ठरवायचा ते पहिले ठेवा, किंवा compare=False ने वगळा. प्रत्यक्ष मूल्यांवर तपासा.\n\nजोडीदार सुविधा: eq=True (डीफॉल्ट) समानता देते; order=True त्यावर अवलंबून — जर eq=False दिला तर order द्यावा लागतो. frozen सोबत order वापरल्यास तुलना नेहमीच चालते आणि objects अपरिवर्तनीय राहतात — मूल्य-वर्गांसाठी आदर्श संगम.\n\nव्यवहारात: employee_id, गुण, आवृत्ती — क्रमाने लागवायच्या डेटासाठी order=True आणि sorted एकत्र वापरा. हे साधे पण शक्तिशाली. खाली आवृत्त्यांचा सॉर्ट पहा.",
        code: `from dataclasses import dataclass

@dataclass(order=True)
class Version:
    major: int
    minor: int

items = [Version(2, 0), Version(1, 5), Version(1, 2)]
for v in sorted(items):
    print(v.major, v.minor)`,
        codeLanguage: "python",
        output: `1 2
1 5
2 0`,
      },
      {
        title: "dataclass सह pattern matching",
        content: "Python 3.10 मध्ये आलेले structural pattern matching (match/case) dataclass सोबत छान जुळते. कारण dataclass चे fields स्पष्ट असतात; match विधानाने त्यांच्यावरून वर्ग ओळखता येतो. दीर्घ if-elif च्या ऐवजी स्वच्छ, वाचनीय कोड.\n\nउदा. match event: case Click(x, y): ... case Key(text): ... — इथे Click आणि Key dataclass किंवा NamedTuple असतील तर त्यांच्या fields थेट चलांत मिळतात. हे event-handling, parser, किंवा निर्णय-वृक्षासाठी उत्तम.\n\npattern matching दगडी (literal) मूल्ये, गट (OR patterns), आणि guard (if अट) सुद्धा झेलतो. case Point(0, 0): — मूळबिंदू; case Point(x, y) if x == y: — कर्णरेषा. वर्गाचे स्थान आणि मूल्य दोन्ही एकत्र तपासता येतात.\n\nएक सूक्ष्म मुद्दा: pattern matching dataclass साठी आपोआप काम करतो कारण ते __match_args__ वापरतो. fields च्या नावानेही जुळवता येते — case Point(x=px):. इथे क्रम महत्त्वाचा नाही. NamedTuple सोबतही हे चालते.\n\nसावधान: match फक्त Python 3.10+ मध्ये उपलब्ध. जुने आवृत्ती वापरत असल्यास if/elif वापरा किंवा आवृत्ती वाढवा. आणि match 'कार्य' करत नाही — तो निर्णय घेतो. म्हणून प्रत्येक branch ने नेमके काम करा, अन्यथा गोंधळ.\n\nव्यवहारात ऑर्डर, API responses, किंवा गेम-घटना match/case + dataclass ने सुंदर हाताळता येतात. खाली दोन आकारांची घटना match ने पहा.",
        code: `from dataclasses import dataclass

@dataclass
class Circle:
    r: int

@dataclass
class Square:
    side: int

def area(shape):
    match shape:
        case Circle(r):
            return 3.14 * r * r
        case Square(side):
            return side * side

print(area(Circle(2)))
print(area(Square(3)))`,
        codeLanguage: "python",
        output: `12.56
9`,
      },
      {
        title: "व्यावहारिक project: पगार पत्रिका",
        content: "dataclass वापरून एक व्यावहारिक project — कर्मचाऱ्यांची पगार पत्रिका. Employee dataclass: name, basic, hra, da. total() method एकूण पगार देते. अनेक employees ची सूची बनवा, asdict वापरून JSON मध्ये जतन करा, आणि order=True/ky ने sorting करा.\n\nप्रथम Employee dataclass बनवा — name (str), basic, hra, da (int). field() ने hra आणि da साठी default द्या (उदा. 20% आणि 10%)? नाही, कारण default मूल्य basic वर अवलंबून — म्हणून ते __post_init__ मध्ये काढा. basic वरून hra = basic * 0.2, da = basic * 0.1. म्हणजे वापरकर्त्याला फक्त basic द्यावे लागते.\n\nदुसरे पाऊल: total() method — basic + hra + da. आता प्रत्येक employee चा एकूण पगार मिळतो. पुढे asdict वापरून प्रत्येकाचे dict बनवा आणि json.dumps ने पूर्ण पत्रिका JSON मध्ये जतन करा — ensure_ascii=False सह.\n\nतिसरे पाऊल: विश्लेषण. सर्वात जास्त पगार — max(employees, key=lambda e: e.total()). सरासरी — statistics.mean किंवा sum/len. क्रमाने यादी — sorted(employees, key=..., reverse=True). dataclass मुळे हे सर्व सोपे आणि वाचनीय.\n\nचौथे पाऊल: फाईलतून वाचन. JSON वरून परत dataclass — Employee(**row) प्रत्येक row साठी. मराठी अक्षरे आणि आकडे दोन्ही व्यवस्थित राहतील. हे पुढील csv-json धड्याची तयारी.\n\nहा project दाखवतो की dataclass हे केवळ सिद्धांत नाही — ते प्रत्यक्ष लेखा, HR, किंवा कोणत्याही नोंद-प्रणालीत थेट वापरता येते. खाली Employee चे __post_init__ आणि total पहा.",
        code: `from dataclasses import dataclass

@dataclass
class Employee:
    name: str
    basic: int

    def __post_init__(self):
        self.hra = int(self.basic * 0.2)
        self.da = int(self.basic * 0.1)

    def total(self):
        return self.basic + self.hra + self.da

e = Employee("मीरा", 50000)
print(e.total())`,
        codeLanguage: "python",
        output: `65000`,
      },
    ],
    practiceQuestions: [
      "@dataclass काय तयार करतो?",
      "field(default_factory=...) कधी?",
      "mutable default का नको?",
      "== आपोआप कसे?",
    ],
    quiz: [
      { question: "@dataclass सगळ्यात जास्त काय देते?", options: ["__init__ इत्यादी", "फक्त name", "errors", "list"], correct: 0 },
      { question: "mutable default साठी?", options: ["field(default_factory)", "=[]", "=None", "सगळं"], correct: 0 },
      { question: "repr कुठे लागतं?", options: ["print वेळी", "import", "class बनवताना", "कधी नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "Student dataclass बनवा व print करा.",
      starterCode: `from dataclasses import dataclass

@dataclass
class Student:
    name: str
    marks: int

print(Student("आरोही", 92))`,
      expectedOutput: "Student(name='आरोही', marks=92)",
    },
    interviewQuestions: [
      "dataclass vs साधा वर्ग?",
      "order/repr पर्याय कधी वापरतात?",
    ],
    related: ["python-custom-exceptions", "python-csv-json", "python-magic-methods"],
    prev: "python-custom-exceptions",
    next: "python-csv-json",
  },

  {
    slug: "python-csv-json",
    categoryId: "python",
    title: "CSV व JSON",
    marathiTitle: "CSV, JSON - data शेअरिंग",
    level: "advanced",
    minutes: 16,
    summary: "csv.reader/writer आणि json.dumps/loads — वास्तविक data फाइल्सवर काम.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "CSV, JSON - data शेअरिंग म्हणजे काय?",
        content: "csv.reader/writer आणि json.dumps/loads — वास्तविक data फाइल्सवर काम.\nPrograms एकमेकांशी data वापरतात — तो पाठवण्यासाठी एक प्रमाणित रूप हवं.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? CSV, JSON - data शेअरिंग चे फायदे आणि महत्त्व",
        content: "\"CSV, JSON - data शेअरिंग\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "CSV आणि JSON — data ची सार्वत्रिक रूपे",
        content: "Programs एकमेकांशी data वापरतात — तो पाठवण्यासाठी एक प्रमाणित रूप हवं. CSV आणि JSON ही दोन अशीच सर्वत्र चालणारी रूपे आहेत.\n\nCSV म्हणजे टेबल — स्वल्पविरामाने विभक्त पंक्ती. प्रत्येक पंक्तीवर cart मधील एक वस्तू आणि तिची किंमत असते.\n\nJSON म्हणजे दुसऱ्या program ला परत देणारी 'रसीद' — key: value च्या जोड्या. या दोन रूपांमुळे कोणताही program दुसऱ्याकडून आलेला data समजू शकतो.",
      },
      {
        title: "Syntax: CSV लिहिणे आणि वाचणे",
        content: "csv module ने फाईल मधील टेबल सहज हाताळता येतं. लिहिण्यासाठी csv.writer, वाचण्यासाठी csv.reader.\n\ncart.csv मध्ये पहिला writerows दोन पंक्ती लिहितो — शीर्षक आणि मूल्य. मग तीच फाईल csv.reader ने उघडल्यावर प्रत्येक पंक्ती list म्हणून दिसते.\n\nलक्षात घ्या: किंमत 10, 25 हे आकडे csv मधून वाचल्यावर string ('10', '25') राहतात — टेबलचा data म्हणून शब्दांतच ठरतो.",
        code: `import csv

with open("cart.csv", "w", newline="") as f:
    csv.writer(f).writerows([["माल", "किंमत"], ["पोळी", 10], ["दही", 25]])

with open("cart.csv") as f:
    for row in csv.reader(f):
        print(row)`,
        codeLanguage: "python",
        output: `['माल', 'किंमत']
['पोळी', '10']
['दही', '25']`,
      },
      {
        title: "Syntax: JSON — dumps आणि pretty print",
        content: "json module data ला string किंवा फाईल रूपात नेते. dict डेटा JSON string मध्ये नेण्यासाठी dumps; उलटे करण्यासाठी loads.\n\ndata हा dict — नाव आणि गुणांची यादी. json.dumps(data, ensure_ascii=False, indent=2) सुबक स्वरूपासह string देतो.\n\nindent=2 ने प्रत्येक स्तर नव्या ओळीत; ensure_ascii=False ने देवनागरी तशीच राहते — विस्कळीत Unicode कोडमध्ये बदलत नाही.",
        code: `import json

data = {"नाव": "आरोही", "गुण": [90, 85, 95]}
print(json.dumps(data, ensure_ascii=False, indent=2))`,
        codeLanguage: "python",
        output: `{
  "नाव": "आरोही",
  "गुण": [
    90,
    85,
    95
  ]
}`,
      },
      {
        title: "वास्तविक उदाहरण: JSON वाचणे",
        content: "दुसऱ्या service कडून मिळालेला API response हा JSON string असतो. तो Python च्या objects मध्ये उघडण्यासाठी json.loads वापरतात.\n\ninfo = json.loads('{\"नाव\": \"वेद\", \"वर्ग\": 9}') हा string dict मध्ये बदलतो. मग info[\"नाव\"] वेद सांगतं — नेहमीप्रमाणे subscript ने.\n\nAPI मोठा आणि nested असतो तेव्हा हीच पद्धत — JSON dict मध्ये उघडून त्याची रचना नीट हाताळता येते.",
        code: `import json

info = json.loads('{"नाव": "वेद", "वर्ग": 9}')
print(info["नाव"])`,
        codeLanguage: "python",
        output: `वेद`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ ensure_ascii न देणे — देवनागरी Unicode \\uXXXX रूपात जाऊ शकते; ensure_ascii=False दिलं तर text तसाच दिसतो.\n\n✗ open() नंतर with विसरणे — फाईल बंद होत नाही आणि data गहाळ होऊ शकतो; with हा ब्लॉक फाईल आपोआप बंद करतो.\n\n✗ csv लिहिताना newline=\"\" न देणे — विंडोजवर दुहेरी ओळी दिसू शकतात; newline=\"\" ही सुरक्षितता.\n\nखाली ensure_ascii=False चा परिणाम — मराठी text JSON मध्ये चक्क तसाच दिसतो, \\uXXXX रूपात जात नाही.",
      },
      {
        title: "नोंदी: dumps/loads आणि dump/load",
        content: "चार शब्दांची जोडणी तयार ठेवा:\n\n• dumps — dict/object ते JSON string\n\n• loads — JSON string ते dict/object\n\n• dump — dict/object थेट फाईल मध्ये\n\n• load — फाईल मधून dict/object\n\nCSV च्या ओळी csv.reader पंक्ती-पंक्ती list देतात; JSON keys ही नेहमी string असतात. ensure_ascii=False हा नियम मराठीसह सर्व भाषांसाठी लावा.",
      },
      {
        title: "Interactive: config गोठवणे",
        content: "कृती: config या dict ला JSON string मध्ये नेऊन पुन्हा dict मध्ये आणा — म्हणजे एकाच cycle मध्ये जतन आणि परत.\n\njson.dumps(config) ने string बनते; json.loads तेच परत dict करते. दोन्हीमुळे आपलेच output मिळते.\n\nअशा रीतीने सेटिंग्स सेव्ह करणे सहज होते — mode आणि vol ही मूल्यं ठेवून, नंतर फाईल मध्येही तोच नमुना.",
        code: `import json

config = {"mode": "dark", "vol": 70}
print(json.loads(json.dumps(config)))`,
        codeLanguage: "python",
        output: `{'mode': 'dark', 'vol': 70}`,
      },
      {
        title: "Mini Project: स्कोअर जतन",
        content: "गुणांचा संच JSON string मध्ये जतन करा — आरोही 85, वेद 92.\n\nscores हा dict आहे; json.dumps(scores, ensure_ascii=False) ने तो सुबक JSON string बनतो — देवनागरी अक्षरे तशीच राहतात.\n\nहा string फाईल मधे ठेवल्यास पुढच्या वेळी loads ने परत वाचता येतो — जतन आणि पुनर्स्थापनाचा आराखडा साधा.",
        code: `import json

scores = {"आरोही": 85, "वेद": 92}
print(json.dumps(scores, ensure_ascii=False))`,
        codeLanguage: "python",
        output: `{"आरोही": 85, "वेद": 92}`,
      },
      {
        title: "csv.reader आणि csv.writer — मूलभूत वाचन-लेखन",
        content: "CSV (comma-separated values) हे सर्वात जुने आणि सर्वात व्यापक डेटा स्वरूप. Excel, Google Sheets, database export — सर्व CSV देते. Python मधील csv मॉड्यूल ते वाचायला आणि लिहायला सोपे करते. नेहमी open(..., newline=\"\") वापरा — नाहीतर Windows वर रिकाम्या ओळी येतात.\n\ncsv.reader(file) प्रत्येक ओळ list म्हणून देते: [\"name\", \"age\"], [\"मीरा\", \"20\"]. लक्षात ठेवा — CSV मधील सर्व मूल्ये string असतात. म्हणून age वापरायचे असेल तर int(row[1]) करावे लागते. हे विसरणे ही सर्वात सामान्य चूक.\n\ncsv.writer(file) list किंवा tuple लिहितो: writer.writerow([\"मीरा\", 20]). writerows(...) अनेक ओळी एकत्र लिहितो. प्रत्येक ओळीत समान संख्या असावी, अन्यथा गडबड. मराठी अक्षरे लिहिताना encoding=\"utf-8\" द्या.\n\nपहिली ओळ सहसा शीर्षलेख (header) असते — name, age. csv.reader ती वेगळी करत नाही; तुम्हाला next(reader) ने वगळावी लागते किंवा ठेवावी लागते. हे लक्षात ठेवा; अन्यथा header हा डेटा समजला जातो.\n\nएक महत्त्वाची सूचना: CSV स्वरूप हे 'प्रत्येक मूल्य स्वल्पविरामाने वेगळे, प्रत्येक ओळ एक नोंद' इतकेच आहे. मूल्यात स्वल्पविराम, अवतरण चिन्ह किंवा नवीन ओळ असेल तर quoting नियम लागू. csv मॉड्यूल हे स्वतः हाताळते — म्हणून ते 'स्वतः split करा' पेक्षा सुरक्षित.\n\nखाली मूलभूत उदाहरण — चार नोंदी लिहा आणि परत वाचा. लक्षात घ्या की age परत int करावे लागते. हीच सवय पुढील सर्व CSV कामांत लागते.",
        code: `import csv

with open("students.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["name", "age"])
    w.writerow(["मीरा", 20])
    w.writerow(["वेद", 22])

with open("students.csv", newline="", encoding="utf-8") as f:
    for row in csv.reader(f):
        print(row)`,
        codeLanguage: "python",
        output: `['name', 'age']
['मीरा', '20']
['वेद', '22']`,
      },
      {
        title: "DictReader आणि DictWriter — नावाने डेटा",
        content: "csv.DictReader(file) प्रत्येक ओळ dictionary म्हणून देते — header चे नाव key म्हणून. row[\"name\"], row[\"age\"] असे वाचता येते. index [0], [1] पेक्षा हे वाचनीय आणि सुरक्षित; columns चा क्रम बदलला तरी कोड चालतो.\n\nDictWriter(file, fieldnames=[...]) नावाने लिहितो: writer.writerow({\"name\": \"मीरा\", \"age\": 20}). fieldnames देणे आवश्यक; writer.writeheader() ने header लिहिता येतो. dict मध्ये fieldnames नसलेली key असल्यास error; extrasaction=\"ignore\" दिल्यास दुर्लक्ष करतो.\n\nक्रम महत्त्वाचा: DictReader परत देत असलेल्या dict मध्ये Python 3.7+ मध्ये insertion order टिकते, कारण ओळीचा क्रम तसाच. म्हणून CSV चा columns क्रम बदलू नका — काही जुनी प्रणाली त्यावर अवलंबून असतात.\n\nडेटा स्वच्छता: DictReader ने वाचताना रिकाम्या मूल्यांसाठी \"\" येते; None नाही. संख्या int/float करताना try/except ठेवा — 'N/A', फोडलेली मूल्ये असू शकतात. हे वास्तविक डेटा हाताळताना अनिवार्य.\n\nप्रत्यक्ष उदाहरण: विद्यार्थ्यांची यादी DictReader ने वाचा, प्रत्येकाचे वय int करा, सरासरी काढा, नंतर फिल्टर करून नवीन CSV DictWriter ने लिहा — फक्त 21 वर्षांवरील. हा संपूर्ण ETL (extract, transform, load) प्रवाह.\n\nएक सूचना: fieldnames वापरताना ते header शी तंतोतंत जुळावेत — जागा, केस, विरामचिन्हे. जुळले नाहीत तर key error. प्रत्यक्ष फाईलचे header एकदा print करून पहा. खाली DictReader/DictWriter चे उदाहरण.",
        code: `import csv

with open("students.csv", "r", encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["name"], int(row["age"]) + 1)`,
        codeLanguage: "python",
        output: `मीरा 21
वेद 23`,
      },
      {
        title: "delimiter, quoting आणि dialects",
        content: "सर्व देशांत स्वल्पविराम वापरत नाहीत. युरोपमध्ये अनेकदा अर्धविराम (;) वापरतात. csv मॉड्यूल मध्ये delimiter=\";\" दिल्यास तेच वापरले जाते. csv.reader(f, delimiter=\";\") आणि csv.writer(f, delimiter=\";\"). हे जागतिक डेटा हाताळताना महत्त्वाचे.\n\nquoting नियम: CSV मध्ये मूल्यात स्वल्पविराम आला तर संपूर्ण मूल्य अवतरण चिन्हांत \"...\" ठेवतात. csv.QUOTE_MINIMAL (डीफॉल्ट) फक्त गरज असल्यास अवतरण; QUOTE_ALL सर्व; QUOTE_NONNUMERIC संख्या सोडून. साध्या कामासाठी डीफॉल्ट पुरतो.\n\nescapechar आणि doublequote हे quoting सह येतात. विशेष चिन्हे असलेला डेटा वाचताना हे parameter योग्य द्या, अन्यथा ओळ फुटते. मूल्यात नवीन ओळ असेल तर पूर्ण मूल्य अवतरणात राहते — हे csv स्वतः करतो.\n\nDialect म्हणजे delimiter, quoting, line terminator इ. यांचा संच. csv.register_dialect(\"excel_semi\", delimiter=\";\") एकदा नोंदवून नंतर reader(..., dialect=\"excel_semi\") वापरता येते. अनेक फाईल्स समान स्वरूपात असतील तर हे कोड स्वच्छ करते.\n\nsniffer: csv.Sniffer().sniff(sample) नमुन्यावरून dialect ओळखू शकतो — कोणता विभाजक वापरला आहे हे स्वतः शोधतो. अज्ञात CSV फाईल्ससाठी उपयोगी, पण नमुना पुरेसा मोठा हवा अन्यथा चुकीचा अंदाज. म्हणून अंतिम निर्णय नेहमी तपासून घ्या.\n\nसारांश: delimiter, quoting आणि dialect यामुळे CSV मॉड्यूल जगभरातील विविध स्वरूपांना तोंड देते. योग्य parameter दिल्यास कोणतीही योग्य CSV फाईल सहज वाचता येते. खाली अर्धविराम विभाजकाचे उदाहरण.",
        code: `import csv

with open("data_semi.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f, delimiter=";")
    w.writerow(["नाव", "गुण"])
    w.writerow(["मीरा", 90])

with open("data_semi.csv", newline="", encoding="utf-8") as f:
    print(list(csv.reader(f, delimiter=";")))`,
        codeLanguage: "python",
        output: `[['नाव', 'गुण'], ['मीरा', '90']]`,
      },
      {
        title: "json.dumps आणि json.dump — parameters",
        content: "JSON हे आजचे सर्वाधिक वापरले जाणारे डेटा स्वरूप — APIs, कॉन्फिग, डेटाबेस. Python चे json मॉड्यूल dict/list/str/int/float/bool/None ला सीधे रूपांतरित करते. dumps string देते, dump फाईलला लिहिते, loads string वाचते, load फाईल वाचते.\n\nमहत्त्वाचे parameters: indent=2 सुंदर स्वरूपन; ensure_ascii=False मराठी अक्षरे जशी आहेत तशी ठेवते; sort_keys=True keys क्रमाने; separators स्वरूप मर्यादित करते. ensure_ascii=False मराठीसाठी अनिवार्य, अन्यथा सर्व अक्षरे \\uXXXX होतात.\n\ndefault parameter custom प्रकारांसाठी: json.dumps(obj, default=str) — जे प्रकार json ओळखत नाही त्यांना str ने बदलते. तारीख, Decimal, कस्टम objects — सर्व str होतात. पण मग परत वाचताना string मिळते, मूळ प्रकार नाही — हे लक्षात ठेवा.\n\nएक मर्यादा: Python चा set, tuple (tuple list होते) आणि datetime json ला माहीत नाहीत. set → list; datetime → isoformat() string. म्हणून 'json करण्यापूर्वी डेटा साधा करा' हा नियम. अन्यथा TypeError: Object of type X is not JSON serializable.\n\nमोठ्या JSON साठी indent वापरू नका (आकार वाढतो); ओळ-आधारित JSON (JSON Lines) विचारात घ्या — प्रत्येक ओळ एक वैध JSON. लॉग आणि streaming साठी उत्तम. json.dump मध्ये स्वयंचलित flush नसतो; मोठ्या लेखनात लक्ष.\n\nखाली एक dict मराठीसह सुंदर JSON मध्ये रूपांतरित केला आहे — indent आणि ensure_ascii चा फरक पहा.",
        code: `import json

data = {"नाव": "मीरा", "गुण": [90, 85], "शहर": "पुणे"}
print(json.dumps(data, ensure_ascii=False, indent=2))`,
        codeLanguage: "python",
        output: `{
  "नाव": "मीरा",
  "गुण": [
    90,
    85
  ],
  "शहर": "पुणे"
}`,
      },
      {
        title: "json.loads आणि त्रुटी हाताळणी",
        content: "json.loads(string) JSON मजकूर Python objects मध्ये रूपांतरित करते. JSON object → dict, array → list, string → str, number → int/float, true/false → True/False, null → None. json.load(file) तेच फाईलसाठी. वाचताना नेहमी त्रुटी शक्यता ठेवा.\n\njson.JSONDecodeError हा ValueError चा उपप्रकार — बिघडलेला JSON, अपूर्ण, किंवा चुकीचे स्वरूप. प्रत्यक्ष API मधून अपूर्ण प्रतिसाद, HTML त्रुटी पृष्ठ, किंवा रिकामा प्रतिसाद येऊ शकतो. म्हणून try/except अनिवार्य.\n\nउदा. try: data = json.loads(text) except json.JSONDecodeError as e: print(\"अवैध JSON\", e). अपयश झाल्यास नेहमी मूळ मजकूर लॉग करा — पुढील तपासणीसाठी. पण संवेदनशील डेटा लॉग करू नका.\n\nप्रकार तपासणी: loads नंतर dict आहे का, list आहे का, अपेक्षित keys आहेत का — हे तपासा. JSON वैध असला तरी रचना अपेक्षेपेक्षा वेगळी असू शकते. उदा. data.get(\"items\", []) सुरक्षित मार्ग. थेट data[\"items\"] ने KeyError येऊ शकतो.\n\nएक छान सुविधा: object_hook ने प्रत्येक dict ला custom प्रकारात बदलता येते. json.loads(text, object_hook=lambda d: Order(**d)) थेट dataclass बनवते. हे मोठ्या प्रणालीत उपयोगी, पण तपासणी नेहमी ठेवा — object_hook मध्ये सर्व dict येतात.\n\nसारांश: loads/load सह try/except, keys तपासणी, आणि आवश्यकतेस object_hook. कोड साधा ठेवा; JSON 'अवैध' होऊ शकते हे सतत लक्षात ठेवा. खाली त्रुटी हाताळणीचे उदाहरण.",
        code: `import json

texts = ['{"x": 1}', '{"x": }']
for t in texts:
    try:
        print(json.loads(t))
    except json.JSONDecodeError:
        print("अवैध JSON:", t)`,
        codeLanguage: "python",
        output: `{'x': 1}
अवैध JSON: {"x": }`,
      },
      {
        title: "nested JSON मधून डेटा काढणे",
        content: "वास्तविक API प्रतिसाद सामान्यतः nested असतात — dict मध्ये list, त्यात dict, त्यात list. उदा. {\"users\": [{\"name\": \"मीरा\", \"roles\": [\"admin\"]}]}. असे डेटा काढताना थेट chain केल्यास KeyError/IndexError चा धोका — एक key हरवली की कोड फुटतो.\n\nसुरक्षित मार्ग: पहिले स्तर data = response.get(\"users\", []). मग प्रत्येक user साठी user.get(\"name\"), user.get(\"roles\", []). असे get() ने प्रत्येक स्तरावर default द्या. अन्यथा मूळ रचना बदलली की सर्व कोड मोडतो.\n\nव्यापक प्रकार: users जर dict असेल पण list अपेक्षित असेल — म्हणून isinstance(user, dict) तपासणी. JSON वैध असतो पण रचना अनेकदा बदलते. म्हणून तपासणी + skip यामुळे प्रोग्राम चालू राहतो. त्रुटी लॉग करा आणि पुढे जा.\n\nजटिल डेटा साठी jsonpath-सारखी पद्धत किंवा छोटे helper: def get_path(d, *keys): for k in keys: d = d.get(k, {}) if isinstance(d, dict) else {}; return d. असे helper दोन-तीन वेळा लिहिल्यावर कोड स्वच्छ होतो.\n\nउदाहरण: वरच्या response मधून सर्व users ची 'admin' भूमिका असलेल्यांची नावे. प्रत्येक user च्या roles मध्ये 'admin' आहे का ते तपासा. हे फिल्टर नेहमीच लागते.\n\nशेवटी, nested JSON हाताळताना 'कमीत कमी अपेक्षा, जास्तीत जास्त तपासणी' हे तत्त्व. खाली सुरक्षित काढणीचे उदाहरण पहा.",
        code: `import json

text = '{"users": [{"name": "मीरा", "roles": ["admin"]}, {"name": "वेद", "roles": []}]}'
data = json.loads(text)
for u in data.get("users", []):
    if "admin" in u.get("roles", []):
        print(u.get("name"))`,
        codeLanguage: "python",
        output: `मीरा`,
      },
      {
        title: "custom encoder आणि datetime",
        content: "datetime, Decimal, set किंवा custom class JSON मध्ये थेट जात नाहीत. त्यांना योग्य string किंवा संख्येत बदलावे लागते. सर्वात सोपा मार्ग default=str; पण नियंत्रण हवे असल्यास json.JSONEncoder वारसा घ्या किंवा default function द्या.\n\nउदा. def default(o): if isinstance(o, datetime): return o.isoformat(); if isinstance(o, Decimal): return float(o); if isinstance(o, set): return list(o); raise TypeError. json.dumps(obj, default=default). हे स्पष्ट आणि पुन्हा वापरण्यायोग्य.\n\nउलट दिशा (deserialization): ISO string वरून datetime बनवायला datetime.fromisoformat. Decimal साठी Decimal(str_value). object_hook किंवा parse_float parameter वापरता येतो. parse_float=Decimal दिल्यास json सर्व float Decimal करते — अचूक आर्थिक गणनेसाठी उपयोगी.\n\nआर्थिक डेटा कधीच float मध्ये साठवू नका — 0.1 + 0.2 समस्या. Decimal वापरा: from decimal import Decimal; json.dumps(Decimal(\"10.25\"), default=str). वाचताना Decimal(p). हा एक महत्त्वाचा व्यावहारिक नियम.\n\nतारखेसाठी सर्वत्र ISO 8601 (YYYY-MM-DDTHH:MM:SS) वापरा — जागतिक, क्रमवार, आणि सर्व भाषांत वाचनीय. timezone माहिती ठेवा (+05:30). हे पुढील प्रणालींशी सुसंगततेसाठी अत्यावश्यक.\n\nसारांश: custom encoder ने Python प्रकार JSON-सुसंगत करा; ISO तारीख; Decimal आर्थिकतेसाठी. हे तीन नियम पाळल्यास real-world JSON सुरळीत हाताळता येते. खाली datetime encoder पहा.",
        code: `import json
from datetime import datetime

def default(o):
    if isinstance(o, datetime):
        return o.isoformat()
    raise TypeError

data = {"बैठक": datetime(2026, 9, 19, 10, 0)}
print(json.dumps(data, ensure_ascii=False, default=default))`,
        codeLanguage: "python",
        output: `{"बैठक": "2026-09-19T10:00:00"}`,
      },
      {
        title: "सारांश, सराव आणि project",
        content: "या धड्याचा गाभा: CSV साठी csv.reader/writer, DictReader/DictWriter, delimiter/dialect. JSON साठी dumps/dump/loads/load, indent, ensure_ascii=False, default, object_hook, आणि त्रुटी हाताळणी. दोन्हीत string ↔ प्रकार रूपांतर आणि encoding (utf-8) विसरू नका.\n\nआत्मपरीक्षण: newline=\"\" का? DictReader फायदा? ensure_ascii=False का? JSONDecodeError कधी? datetime JSON मध्ये कसा? Decimal का? या सहा प्रश्नांची उत्तरे स्पष्ट असावीत.\n\nसराव: (1) students.csv तयार करा, DictReader ने वाचा, गुणांची सरासरी काढा. (2) तीच माहिती JSON मध्ये जतन करा. (3) JSON वरून वाचून dict मध्ये बदला. (4) set JSON मध्ये कसा हाताळायचा ते लिहा. हे चार सराव दोन्ही मॉड्यूल एकत्र करतात.\n\nproject कल्पना: एक खर्च-नोंदणी (expense tracker). खर्च CSV मध्ये साठवा — date, category, amount. महिन्यानुसार बेरीज, श्रेणीनुसार बेरीज, आणि JSON मध्ये मासिक अहवाल. dataclass (Expense) + csv + json + groupby सर्व एकत्र. हा project मागील सर्व धडे जोडतो.\n\nपुढील प्रकरण: testing. CSV/JSON वाचन-लेखनाच्या कोडची चाचणी करणे हीच पुढील पायरी. तिथे आपण unittest शिकू. म्हणून हा धडा testing शी जोडलेला आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "csv आणि json च्या खोल अभ्यासासाठी फक्त अधिकृत Python संसाधने — बुकमार्क करा:\n\n• csv module संपूर्ण संदर्भ: https://docs.python.org/3/library/csv.html\n• csv.reader चे दस्तऐवज: https://docs.python.org/3/library/csv.html#csv.reader\n• csv.DictReader: https://docs.python.org/3/library/csv.html#csv.DictReader\n• csv dialects आणि formatting: https://docs.python.org/3/library/csv.html#dialects-and-formatting-parameters\n• json module संपूर्ण संदर्भ: https://docs.python.org/3/library/json.html\n• json.dumps parameters: https://docs.python.org/3/library/json.html#json.dumps\n• json.loads आणि JSONDecodeError: https://docs.python.org/3/library/json.html#json.loads\n• custom JSONEncoder: https://docs.python.org/3/library/json.html#json.encoder\n• decimal मॉड्यूल: https://docs.python.org/3/library/decimal.html\n• datetime मॉड्यूल: https://docs.python.org/3/library/datetime.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "CSV वि. JSON — कोणते कधी वापरायचे",
        content: "CSV आणि JSON दोन्ही डेटा स्वरूपे आहेत, पण उद्दिष्टे वेगळी. CSV हे आयताकृती (tabular) डेटासाठी — ओळी-स्तंभ, Excel-सारखे. JSON हे स्तरीय (hierarchical) डेटासाठी — nested objects, lists, अनियमित रचना. योग्य निवडीने कोड सोपा होतो.\n\nCSV निवडा जेव्हा: डेटा सारणीत बसतो (विद्यार्थी, विक्री, नोंदी), आकार मोठा (CSV हलके), आणि Excel/Sheets मध्ये उघडायचे आहे. CSV मानव-वाचनीय आणि प्रणाली-अज्ञेय (system-agnostic) आहे. मोठ्या नोंद-सूचीसाठी उत्तम.\n\nJSON निवडा जेव्हा: डेटा nested आहे (एक ऑर्डर + त्यातील वस्तू + प्रत्येक वस्तूचे तपशील), API सह देवाणघेवाण, कॉन्फिग फाईल, किंवा विविध प्रकारांचे मूल्ये (संख्या, string, boolean, null). बहुतांश आधुनिक API JSON देते.\n\nएकत्र वापर: CSV (कच्चा डेटा) → process → JSON (रचित अहवाल). उदा. विक्री CSV वाचून महिन्यानुसार बेरीज करा आणि JSON अहवाल तयार करा. अशा प्रवाहात दोन्हीचे बल वापरले जाते — CSV चा आकार आणि JSON ची रचना.\n\nएक इशारा: CSV मध्ये nested डेटा ठेवण्याचा प्रयत्न करू नका — तो गोंधळतो. nested हवा असल्यास JSON. आणि उलट — फक्त सारणी हवी असल्यास JSON का गुंतवायचे? योग्य साधन निवडा.\n\nसारांश: सारणी → CSV; nested/API/प्रकार-मिश्र → JSON. दोन्ही मिळून डेटा-हाताळणीचे पूर्ण साधन तयार होते; पुढील testing धड्यात या सर्वांची चाचणी शिकू.",
        code: `import csv, json

rows = [["नाव", "गुण"], ["मीरा", "90"], ["वेद", "85"]]
with open("s.csv", "w", newline="", encoding="utf-8") as f:
    csv.writer(f).writerows(rows)

with open("s.csv", encoding="utf-8") as f:
    data = list(csv.DictReader(f))
print(json.dumps(data, ensure_ascii=False))`,
        codeLanguage: "python",
        output: `[{"नाव": "मीरा", "गुण": "90"}, {"नाव": "वेद", "गुण": "85"}]`,
      },
    ],
    practiceQuestions: [
      "CSV मध्ये काय असतो?",
      "json.dumps vs json.dump?",
      "ensure_ascii=False का देतात?",
      "csv.reader काय देतो?",
    ],
    quiz: [
      { question: "CSV म्हणजे?", options: ["टेबल रूप", "इमेज", "audio", "video"], correct: 0 },
      { question: "JSON वाचण्यासाठी?", options: ["json.loads", "json.dumps", "csv.reader", "slice"], correct: 0 },
      { question: "देवनागरी hex मध्ये नको म्हणून?", options: ["ensure_ascii=False", "utf-8=True", "raw=True", "ascii=True"], correct: 0 },
    ],
    challenge: {
      prompt: "देवनागरी सह JSON बनवा.",
      starterCode: `import json
print(json.dumps({"भाषा": "मराठी"}, ensure_ascii=False))`,
      expectedOutput: "{\"भाषा\": \"मराठी\"}",
    },
    interviewQuestions: [
      "CSV vs JSON?",
      "dump/dumps फरक?",
    ],
    related: ["python-dataclasses", "python-testing", "python-files"],
    prev: "python-dataclasses",
    next: "python-testing",
  },

  {
    slug: "python-testing",
    categoryId: "python",
    title: "Testing (assert)",
    marathiTitle: "Testing - चुका आधीच शोधणे",
    level: "advanced",
    minutes: 15,
    summary: "assert, छोट्या test फंक्शन्स मध्ये रचना — कोड बदलल्यावर आधीच पडताळणी.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Testing - चुका आधीच शोधणे म्हणजे काय?",
        content: "assert, छोट्या test फंक्शन्स मध्ये रचना — कोड बदलल्यावर आधीच पडताळणी.\nआणखी कोड लिहिण्यापूर्वी एक प्रश्न विचारा: 'मी केलेला बदल योग्य ना?' याची तपासणी assert करते — अट खरी असेल तर काहीच होत नाही, अट खोटी असेल तर लगेच AssertionError.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Testing - चुका आधीच शोधणे चे फायदे आणि महत्त्व",
        content: "\"Testing - चुका आधीच शोधणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "assert — चूक आधीच पकडणे",
        content: "आणखी कोड लिहिण्यापूर्वी एक प्रश्न विचारा: 'मी केलेला बदल योग्य ना?' याची तपासणी assert करते — अट खरी असेल तर काहीच होत नाही, अट खोटी असेल तर लगेच AssertionError.\n\nअसं शेवटी काय? छोट्या तपासण्यांचा हा रक्षक आहे. कोड बदलला की आधीचे निकाल उलटला तर assert आवाज देतो — bug लवकर सापडतो.\n\nउदा. double(x) ही function दुप्पट देते; तिची पडताळणी तीन assert ने केली — positive, zero आणि negative साठी.",
      },
      {
        title: "Syntax: पहिले assert",
        content: "assert ची रचना दोन भागांची: assert अट — किंवा assert अट, \"संदेश\". अट खोटी असेल तर संदेश AssertionError सोबत दिसतो.\n\ntest_double ही function तीन assert तपासते: double(2) == 4, double(0) == 0 आणि double(-3) == -6. तिन्ही अटी खऱ्या असल्यामुळे function पुढे सरकते.\n\nशेवटी \"सगळे पास!\" परत मिळतं. कोणतीही अट खोटी झाली असती तर तिथेच उरकलं आणि पुढची ओळ कधीही चालली नसती.",
        code: `def double(x):
    return x * 2

def test_double():
    assert double(2) == 4
    assert double(0) == 0
    assert double(-3) == -6
    return "सगळे पास!"

print(test_double())`,
        codeLanguage: "python",
        output: `सगळे पास!`,
      },
      {
        title: "assert चा पराभव पकडणे",
        content: "assert ने उभा केलेला AssertionError except मध्ये पकडता येतो — त्यामुळे programme कोसळत नाही.\n\ndivide ही function भागाकार करते, पण divisor शून्य असेल तर अट खोटी — assert b != 0, \"शून्याने भागाकार नको\" उभा होतो.\n\ndivide(10, 2) सरळ 5.0 देतो. divide(10, 0) मात्र AssertionError उभा करतो — तो except मध्ये पकडून 'catch: शून्याने भागाकार नको' दिसतं.",
        code: `def divide(a, b):
    assert b != 0, "शून्याने भागाकार नको"
    return a / b

print(divide(10, 2))
try:
    divide(10, 0)
except AssertionError as e:
    print("catch:", e)`,
        codeLanguage: "python",
        output: `5.0
catch: शून्याने भागाकार नको`,
      },
      {
        title: "वास्तविक उदाहरण: छोटी test सूची",
        content: "मोठ्या सूचीत अनेक उदाहरणे ठेवून एकाच वेळी सगळ्या तपासता येतात. add(1, 2) हवं 3; add(-1, 1) हवं 0; add(2, 2) हवं 5 — इथे जाणूनबुजून चूक आहे.\n\nfor got, want in tests: — प्रत्येक जोडीसाठी got (मिळालेले) आणि want (अपेक्षित) तुलना होते. got == want असेल तर 'पास', नाही तर 'नापास: मिळाले 4, हवे 5'.\n\noutput मध्ये पहिल्या दोन पास, तिसरी नापास — चूक कोणत्या उदाहरणात आहे ते लगेच सापडतं. हा नमुना पुढे pytest सारख्या testing framework मध्ये विस्तारतो.",
        code: `def add(a, b):
    return a + b

tests = [
    (add(1, 2), 3),
    (add(-1, 1), 0),
    (add(2, 2), 5),
]
for got, want in tests:
    if got == want:
        print("पास")
    else:
        print(f"नापास: मिळाले {got}, हवे {want}")`,
        codeLanguage: "python",
        output: `पास
पास
नापास: मिळाले 4, हवे 5`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ assert च्या जागी फक्त print ने तपासणे — print दिसतंच असे नाही तर पडताळणी होते; assert ची निकालात अट असते.\n\n✗ कोडमधील critical checks मध्ये assert वापरणे — Python optimization ने assert काढून टाकले जाऊ शकतात; खरी तपासणी if/raise ने करा.\n\n✗ test function चे नाव test_ ने सुरू न करणे — पुढे pytest सारखा framework तेच नाव शोधतो; त्या उपसर्गाशिवाय test चालत नाही.\n\nखाली half चे दोन assert सरळ file स्तरावर लिहिले आहेत — दोन्ही पास, नंतर print.",
        code: `def half(x):
    return x // 2

assert half(10) == 5
assert half(7) == 3
print("test_double पास")`,
        codeLanguage: "python",
        output: `test_double पास`,
      },
      {
        title: "नोंदी: test चे नियम",
        content: "testing ची चार सूत्रं व्यवस्थित धरा:\n\n• assert = विकास-काळातील तपासणी\n\n• test functions लहान आणि एकच विषय दाखवणारी\n\n• प्रत्येक बदलानंतर ती नियमितपणे चालवा\n\n• coverage — मुख्य जोखीम आणि साधा मार्ग दोन्ही झाकणे\n\nकोड बदलला की test हीच तुमची पहिली आणि निश्चित तपासणी असते; मोठा project होताच त्यासाठी pytest सारखे framework उपयुक्त ठरतात.",
      },
      {
        title: "Interactive: is_even तपासणी",
        content: "कृती: is_even function — संख्या सम असेल तर True, नाही तर False. दोन्ही अवस्था assert ने पडताळा.\n\nassert is_even(4) is True आणि assert is_even(7) is False — सम आणि विषम संख्येची दोन्ही उदाहरणे झाकली.\n\nएक assert खोटं झालं तर पुढची ओळ कधीही चालत नाही — hence output 'सगळे निकाल पास' म्हणजे दोन्ही अटी खऱ्या.",
        code: `def is_even(n):
    return n % 2 == 0

assert is_even(4) is True
assert is_even(7) is False
print("सगळे निकाल पास")`,
        codeLanguage: "python",
        output: `सगळे निकाल पास`,
      },
      {
        title: "Mini Project: ग्रेडिंग test",
        content: "ग्रेड ठरवणाऱ्या function च्या निर्णयांची पडताळणी करा. grade ही function गुणांनुसार A, B किंवा C श्रेणी देतो.\n\nchecks या सूचीत तीन उदाहरणे — grade(90) A, grade(60) B, grade(10) C. प्रत्येक जोडी for मध्ये assert got == want ने तपासली.\n\nतीनही अटी खऱ्या असल्यामुळे output 'ग्रेड test पास'. गुणांच्या सीमा (75, 35) बदलल्या तर याच test ने चूक लगेच अधोरेखित होते.",
        code: `def grade(m):
    if m >= 75:
        return "A"
    if m >= 35:
        return "B"
    return "C"

checks = [
    (grade(90), "A"),
    (grade(60), "B"),
    (grade(10), "C"),
]
for got, want in checks:
    assert got == want, f"grade({got}) != {want}"
print("ग्रेड test पास")`,
        codeLanguage: "python",
        output: `ग्रेड test पास`,
      },
      {
        title: "unittest — TestCase आणि assert पद्धती",
        content: "Python मध्ये testing साठी अंगभूत unittest मॉड्यूल आहे. unittest.TestCase वारसा घेऊन चाचणी वर्ग बनवतात आणि प्रत्येक चाचणी एक method — test_ ने सुरू. unittest.main() चालवल्यास सर्व चाचण्या आपोआप चालतात.\n\nप्रत्येक assert पद्धतीचे स्वतंत्र काम: assertEqual(a, b) समानता; assertTrue/assertFalse बूलियन; assertIsNone; assertIn/assertNotIn सदस्यत्व; assertRaises(Error) अपवाद; assertAlmostEqual float साठी. योग्य assert निवडल्यास अपयशाचा संदेश स्पष्ट येतो.\n\nचाचणी method मध्ये मांडणी (arrange), क्रिया (act), आणि तपासणी (assert) असते. उदा. calc = Calculator(); result = calc.add(2, 3); self.assertEqual(result, 5). तीन टप्पे वेगळे ठेवल्यास चाचणी वाचनीय राहते.\n\nएक चाचणी = एक वर्तन. अनेक गोष्टी एका method मध्ये तपासू नका — अपयश आल्यास काय फसले हे कळत नाही. म्हणून 'add करता येते' आणि 'add ऋण संख्यांवर चालते' या वेगळ्या चाचण्या.\n\nचाचणी वर्ग unittest.TestCase वारसा घेतो (आता सामान्य class सुद्धा चालते, पण TestCase ने अनेक सुविधा मिळतात). tests फाईल नाव नेहमी test_*.py किंवा *_test.py ठेवा — म्हणजे discovery सहज.\n\nखाली एक पूर्ण unittest उदाहरण पहा — एक साधा वर्ग आणि त्याच्या दोन चाचण्या. प्रत्यक्ष चालवून अपयशाचा संदेश कसा दिसतो ते अनुभवा.",
        code: `import unittest

def add(a, b):
    return a + b

class TestAdd(unittest.TestCase):
    def test_positive(self):
        self.assertEqual(add(2, 3), 5)

    def test_negative(self):
        self.assertEqual(add(-1, -2), -3)

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 2 tests in 0.001s

OK`,
      },
      {
        title: "setUp आणि tearDown — तयारी आणि समारोप",
        content: "प्रत्येक चाचणीपूर्वी तयारी लागते — object तयार करणे, कामचलाऊ फाईल बनवणे, डेटाबेस जोडणे. हे प्रत्येक चाचणीत पुन्हा लिहू नये म्हणून setUp() वापरतात. setUp प्रत्येक चाचणीपूर्वी स्वतःहून चालते आणि चाचणी वेगळी राहते.\n\ntearDown() प्रत्येक चाचणीनंतर चालते — तयारी साफ करण्यासाठी. उदा. तात्पुरती फाईल काढणे, कनेक्शन बंद करणे, mock पुन्हा स्थापित करणे. setUp/tearDown जोडीमुळे चाचण्या स्वतंत्र आणि पुनरावृत्तीयोग्य राहतात.\n\nमहत्त्वाचे: प्रत्येक test method साठी नवीन object तयार होतो. म्हणजे एका चाचणीत केलेला बदल दुसऱ्यावर परिणाम करत नाही. हे स्वातंत्र्य आवश्यक — अन्यथा चाचण्यांचा क्रम बदलल्यास निकाल बदलतो.\n\nएकदाच तयारी (setUpClass) आणि एकदाच समारोप (tearDownClass) classmethod म्हणून वापरता येतात — महागड्या संसाधनांसाठी (डेटाबेस एकदा उघडणे). पण लक्षात ठेवा: ते एकदाच चालतात, त्यामुळे तिथे ठेवलेला बदल सर्व चाचण्यांवर परिणाम करतो.\n\nएक सामान्य चूक: setUp मध्ये चाचणी-तर्क लिहिणे. setUp फक्त तयारी करा; काहीही assert करू नका. अन्यथा तयारीच अयशस्वी झाल्यास सर्व चाचण्या गोंधळात पडतात.\n\nखाली setUp ने एक list तयार करून दोन चाचण्या तिच वापरतात — प्रत्येकाला स्वतंत्र list मिळते. हे स्वातंत्र्यच चाचणीचे बल.",
        code: `import unittest

class TestList(unittest.TestCase):
    def setUp(self):
        self.nums = [1, 2, 3]

    def test_append(self):
        self.nums.append(4)
        self.assertEqual(len(self.nums), 4)

    def test_original(self):
        self.assertEqual(len(self.nums), 3)

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 2 tests in 0.001s

OK`,
      },
      {
        title: "assertRaises आणि अपवादांची चाचणी",
        content: "चांगला कोड त्रुटीही योग्य रीतीने देईल हे तपासणे तितकेच महत्त्वाचे. assertRaises(ErrorType) ने अपेक्षित अपवाद तपासतात. जर अपवाद आला तर चाचणी पास; आला नाही तर फेल. हे 'त्रुटी हाताळणी' ची हमी देते.\n\nदोन पद्धती: with self.assertRaises(ValueError): int(\"abc\") — context manager पद्धत; किंवा self.assertRaises(ValueError, int, \"abc\"). पहिली अधिक वाचनीय आणि संदेश तपासायला सोयीची.\n\nअपवादाचा संदेशही तपासता येतो: with self.assertRaises(ValueError) as cm: ... ; self.assertIn(\"invalid\", str(cm.exception)). यामुळे योग्य संदेश दिला जातो का हे कळते. मात्र संदेशाचे शब्द नाजूक बदलतात — नावापेक्षा अर्थ तपासा.\n\ncustom exceptions च्या बाबतीत assertRaises(InvalidAge) ने नेमका वर्ग तपासा. वारसा रचना लक्षात ठेवा — assertRaises(ParentError) ने संततीचा अपवादही पकडला जातो. म्हणून जिथे नेमकेपणा हवा तिथे सर्वात तरुण वर्ग द्या.\n\nएक उपयोगी तंत्र: अपवाद पकडून त्याचे गुणधर्म तपासा. e = cm.exception; self.assertEqual(e.field, \"age\"). custom exception सानुकूल माहिती ठेवत असल्यास हे थेट तपासता येते — हीच चांगली चाचणी.\n\nसारांश: प्रत्येक अपेक्षित त्रुटीसाठी assertRaises; संदेश आणि गुणधर्म तपासा; नेमका वर्ग निवडा. खाली दोन अपवाद-चाचण्या पहा — एक पास, एक फेल. खरा प्रयत्न करून फेलची नोंद पहा.",
        code: `import unittest

def div(a, b):
    if b == 0:
        raise ZeroDivisionError("शून्य नको")
    return a / b

class TestDiv(unittest.TestCase):
    def test_raises(self):
        with self.assertRaises(ZeroDivisionError):
            div(1, 0)

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 1 test in 0.001s

OK`,
      },
      {
        title: "test discovery आणि नामकरण नियम",
        content: "unittest चा सर्वात सुंदर भाग म्हणजे discovery — तुम्ही सर्व चाचणी फाईल्स स्वतः शोधा असे सांगता. python -m unittest discover चालवल्यास test*.py पद्धतीच्या फाईल्स शोधल्या जातात आणि सर्व test methods चालतात. स्वतंत्रपणे सांगावे लागत नाही.\n\nनामकरण नियम पाळा: फाईल test_*.py किंवा *_test.py; वर्ग नाव Test* (किंवा कोणतेही); method नाव test_*. हे पाळले नाहीतर discovery त्या चाचण्या शोधत नाही आणि त्या 'अनुपस्थित' समजल्या जातात — हा धोका लक्षात ठेवा.\n\n-v (verbose) ने प्रत्येक चाचणीचे नाव दिसते; -q (quiet) कमी आउटपुट. python -m unittest test_module.TestClass.test_method असे नेमके चालवता येते — एखादी चाचणी debug करताना उपयोगी.\n\nप्रकल्प रचना: src/ मध्ये कोड, tests/ मध्ये चाचण्या. सामान्यपणे tests फाईलवर test_ उपसर्ग. pytest सारखी साधने या रचनेला लगेच समजतात. म्हणून नामकरण ही केवळ सोय नाही — सुसंगततेची गुरुकिल्ली.\n\nCI (continuous integration) मध्ये प्रत्येक commit वर सर्व चाचण्या चालवल्या जातात. discovery मुळे नवीन चाचणी आपोआप समाविष्ट होते — हाताने यादी ठेवावी लागत नाही. हा दीर्घकालीन प्रकल्पांत मोठा फायदा.\n\nखाली discovery साठी योग्य रचना दिसते. तुमच्या प्रकल्पात tests/ फोल्डर बनवा, फाईल test_*.py ठेवा, आणि discover चालवा — सर्व चाचण्या एकत्र चालतील.",
        code: `import unittest

class TestString(unittest.TestCase):
    def test_upper(self):
        self.assertEqual("abc".upper(), "ABC")

    def test_split(self):
        self.assertEqual("a b".split(), ["a", "b"])

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 2 tests in 0.001s

OK`,
      },
      {
        title: "mock — बाह्य अवलंबित्व टाळणे",
        content: "प्रत्यक्ष कोड अनेकदा बाह्य गोष्टींवर अवलंबून असतो — API, डेटाबेस, वेळ, यादृच्छिकता, फाईल. चाचणीत हे प्रत्यक्ष वापरणे हळू आणि अनिश्चित. unittest.mock ने त्यांची नकली आवृत्ती (mock) तयार करतात जेणेकरून चाचणी स्थिर, वेगवान आणि स्वयंपूर्ण राहते.\n\nMock() एक साधा नकली object बनवते — कुठलेही attribute मागितल्यास स्वतः उत्तर देते. patch() ने विद्यमान function/attribute तात्पुरते बदलता येते. with patch(\"module.func\", return_value=42): ... अशा प्रकारे प्रत्यक्ष func कधीच चालत नाही.\n\nउदाहरण: weather API कडून तापमान मिळवणारे function. चाचणीत patch करून return_value=30 ठेवा; मग function चे तर्क (उदा. 'उष्ण' म्हणायचे का) तपासता येते — नेटवर्कशिवाय. हेच mock चे मूळ उद्दिष्ट.\n\nवेळेसाठी: mock.patch(\"datetime.datetime\") करून ठराविक तारीख लावा. यादृच्छिकतेसाठी random.seed किंवा mock. यामुळे चाचण्या पुन्हा तोच निकाल देतात — 'flaky' (अनिश्चित) चाचण्या टळतात.\n\nmock चा दुरुपयोग टाळा: प्रत्यक्ष तर्क आहे तिथे mock नको. mock फक्त 'बाहेरील जग' साठी. जर तुम्ही मुख्य तर्क mock केला तर तुम्ही तर्काची चाचणीच करत नाही. म्हणून mock चे प्रमाण कमी ठेवा.\n\nएक चांगली सवय: assert_called_once_with() ने तपासा की function योग्य arguments ने बोलावले गेले. म्हणजे केवळ निकाल नाही, तर संवादही तपासला जातो. खाली patch चे उदाहरण पहा.",
        code: `import unittest
from unittest.mock import patch

def get_message():
    return fetch_remote()

def fetch_remote():
    raise RuntimeError("नेटवर्क नको")

class TestMsg(unittest.TestCase):
    @patch(__name__ + ".fetch_remote", return_value="नमस्कार")
    def test_get(self, mock_fetch):
        self.assertEqual(get_message(), "नमस्कार")
        mock_fetch.assert_called_once()

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 1 test in 0.001s

OK`,
      },
      {
        title: "pytest — कमी कोड, अधिक स्पष्टता",
        content: "pytest ही तिसऱ्या पक्षाची लोकप्रिय testing साधन. unittest पेक्षा कमी कोड — कारण ती साधे assert वापरते. assert add(2, 3) == 5 असेच लिहिता येते; assertEqual लागत नाही. अपयशाचा संदेश स्वतःच तपशीलवार येतो.\n\npytest test_*.py फाईल्स आणि test_* functions स्वतः शोधते; वर्गही चालतात पण गरज नाही. unittest.TestCase वारसा घ्यावा लागत नाही. fixture ने setUp पेक्षा स्वच्छ तयारी — @pytest.fixture ने reusable संसाधने.\n\nparametrize ने एकच चाचणी अनेक इनपुटवर चालवता येते: @pytest.mark.parametrize(\"a,b,expected\", [(1,1,2),(2,3,5)]). यामुळे तक्ता-सारख्या चाचण्या छोट्या राहतात. ही pytest ची सर्वात आकर्षक सुविधा.\n\nunittest च्या तुलनेत pytest मध्ये: कमी boilerplate, चांगले अपयश संदेश, समृद्ध plugins, आणि fixtures. म्हणून आधुनिक प्रकल्प बहुतेक pytest वापरतात. पण unittest मानक — वेगळे install न लागता चालते.\n\nकोणते निवडायचे? शिकण्यासाठी unittest चांगले (संकल्पना स्पष्ट); व्यावसायिक प्रकल्पात pytest सोयीचे. दोन्हींची मूळ कल्पना एकच — मांडणी, क्रिया, तपासणी. एक शिकल्यावर दुसरे सोपे वाटते.\n\nखाली pytest शैलीतील चाचणी दिली आहे (unittest ने वागवली तरी चालू शकेल). लक्षात घ्या — वर्ग नाही, assertEqual नाही, फक्त assert. हीच साधता pytest चे वैशिष्ट्य.",
        code: `def add(a, b):
    return a + b

def test_add_positive():
    assert add(2, 3) == 5

def test_add_zero():
    assert add(0, 0) == 0`,
        codeLanguage: "python",
        output: `# pytest test_file.py
# 2 passed`,
      },
      {
        title: "TDD आणि चाचणीचे प्रकार",
        content: "TDD (test-driven development) म्हणजे प्रथम चाचणी, नंतर कोड. तीन टप्पे: red (चाचणी फेल), green (कोड लिहून पास), refactor (कोड सुधारून चाचणी अजूनही पास). यामुळे आधी 'काय हवे' हे स्पष्ट होते आणि नंतर कोड तयार होतो.\n\nTDD चे फायदे: आवश्यकतेपेक्षा जास्त कोड लिहीत नाही; प्रत्येक वैशिष्ट्य चाचणीने झाकलेले राहते; सुधारणा केल्यावर आधीचे वर्तन तुटले नाही याची हमी. तोटे: सुरुवात हळू वाटते; चुकीच्या समजुती चाचणीतही चालतात. म्हणून संतुलित वापर.\n\nचाचणीचे स्तर: unit (एक function/वर्ग), integration (काही भाग एकत्र), end-to-end (संपूर्ण प्रवाह). बहुतेक चाचण्या unit असाव्यात — वेगवान, नेमक्या. integration/e2e कमी पण महत्त्वाचे. हा 'testing pyramid' या कल्पनेचा गाभा.\n\ncoverage म्हणजे कोडचा किती भाग चाचणीने झाकला. 100% हे ध्येय नको — ते भ्रामक. महत्त्वाचे तर्क, कडा-प्रकरणे आणि त्रुटी-मार्ग झाकणे अधिक महत्त्वाचे. उच्च coverage म्हणजे चांगल्या चाचण्या नव्हे.\n\nचाचणी लिहिताना कडा-प्रकरणे (edge cases) विचारा: रिकामे, शून्य, ऋण, प्रचंड, विचित्र अक्षरे, शेवटचा घटक. याच ठिकाणी बहुतेक दोष लपलेले असतात.\n\nसारांश: TDD चे तीन टप्पे; unit-heavy pyramid; अर्थपूर्ण coverage; कडा-प्रकरणे. चाचणी हा खर्च नाही — तो भविष्यातील दुरुस्तीचा विमा आहे. खाली TDD चा पहिला टप्पा — फेल होणारी चाचणी.",
        code: `import unittest

def is_even(n):
    return n % 2 == 0

class TestEven(unittest.TestCase):
    def test_even(self):
        self.assertTrue(is_even(4))

    def test_odd(self):
        self.assertFalse(is_even(3))

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 2 tests in 0.001s

OK`,
      },
      {
        title: "सारांश, सराव आणि project",
        content: "testing धड्याचा गाभा: unittest.TestCase, test_ नामकरण, assert पद्धती, setUp/tearDown, assertRaises, discovery, mock, pytest, TDD. चाचणीचे तत्त्व — मांडणी, क्रिया, तपासणी; एक चाचणी एक वर्तन; स्वतंत्र आणि पुनरावृत्तीयोग्य.\n\nआत्मपरीक्षण: setUp कधी चालतो? assertRaises चा उपयोग? discovery का आवश्यक? mock का वापरतात? unit आणि integration फरक? TDD चे तीन टप्पे? या सहा प्रश्नांची उत्तरे स्पष्ट असावीत.\n\nसराव: (1) add, sub च्या चाचण्या; (2) zero-division वर assertRaises; (3) setUp ने list तयार करून चाचण्या; (4) patch ने API नकली करा. हे चार सराव संपूर्ण धडा एकत्र करतात.\n\nproject कल्पना: मागील csv-json धड्यातील expense tracker साठी चाचण्या. total() बरोबर बेरीज करते का; चुकीचे amount फेल होते का; रिकामी पत्रिका शून्य देते का; JSON वाचन-लेखन फिरते का. प्रत्येक वैशिष्ट्यासाठी एक चाचणी. हा project testing + dataclass + csv/json जोडतो.\n\nपुढील आणि शेवटचे प्रकरण: mega-project. तिथे आपण आत्तापर्यंतचे सर्व — functions, decorators, generators, itertools, regex, exceptions, dataclasses, csv/json, testing — एका मोठ्या प्रकल्पात एकत्र वापरू. म्हणून हा धडा त्या प्रकल्पाची पायाभरणी आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "testing च्या खोल अभ्यासासाठी अधिकृत Python संसाधने — बुकमार्क करा:\n\n• unittest module संपूर्ण संदर्भ: https://docs.python.org/3/library/unittest.html\n• unittest मूलभूत उदाहरण: https://docs.python.org/3/library/unittest.html#basic-example\n• assert पद्धतींची यादी: https://docs.python.org/3/library/unittest.html#assert-methods\n• setUp आणि tearDown: https://docs.python.org/3/library/unittest.html#organizing-test-code\n• assertRaises: https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertRaises\n• test discovery: https://docs.python.org/3/library/unittest.html#test-discovery\n• unittest.mock module: https://docs.python.org/3/library/unittest.mock.html\n• patch चे दस्तऐवज: https://docs.python.org/3/library/unittest.mock.html#patch\n• assert स्टेटमेंट reference: https://docs.python.org/3/reference/simple_stmts.html#the-assert-statement\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n\nहे सर्व दुवे अधिकृत docs.python.org आणि python.org वरूनच आहेत.",
      },
      {
        title: "float तुलना, assert संदेश आणि चांगल्या चाचणीचे गुण",
        content: "float ची तुलना == ने करू नका — 0.1 + 0.2 कधीच 0.3 नसते (द्विमान अपूर्णतेमुळे). म्हणून assertAlmostEqual(a, b, places=5) वापरा, किंवा math.isclose. unittest ने assertAlmostEqual दिला आहे; pytest मध्ये pytest.approx. हा एक सूक्ष्म पण महत्त्वाचा नियम.\n\nassertEqual ऐवजी योग्य assert निवडल्यास अपयशाचा संदेश स्पष्ट येतो. assertIn अपेक्षित घटक दाखवते; assertAlmostEqual फरक दाखवते. सामान्य assertEqual ने सर्व मूल्ये दाखवली जातात — मोठ्या संग्रहात गोंधळ. म्हणून योग्य साधन.\n\nassert मध्ये संदेश (msg) दिल्यास अपयश समजायला सोपे: self.assertEqual(result, 5, \"add 2+3\"). संदेशाने 'काय अपेक्षित होते' सांगावे — 'चाचणी फेल' नको. लहान पण उपयोगी सवय.\n\nचांगल्या चाचणीची लक्षणे: वेगवान, स्वतंत्र (क्रमावर अवलंबून नाही), पुनरावृत्तीयोग्य (same निकाल), आणि स्पष्ट नाव (test_negative_returns_zero). खराब चाचणी हळू, परस्पर-अवलंबून, किंवा 'अस्पष्ट' असते — ती नंतर त्रास देते.\n\nएक चाचणी फेल झाल्यास ती त्रुटी म्हणा, जे का फसले ते. मग होय/नाही ठरवा: मुख्य कोड बदलतो की चाचणी बदलतो? प्रत्येक बदलाचे कारण ठेवा; नुसते 'पास करण्यासाठी' चाचणी बदलू नका — ते दोष झाकते.\n\nसारांश: float साठी assertAlmostEqual; योग्य assert; अर्थपूर्ण संदेश; चांगल्या गुणांची चाचणी. खाली float तुलनेचे उदाहरण पहा — सामान्य assertEqual फेल होते पण assertAlmostEqual पास.",
        code: `import unittest

class TestFloat(unittest.TestCase):
    def test_sum(self):
        self.assertAlmostEqual(0.1 + 0.2, 0.3, places=5)

unittest.main()`,
        codeLanguage: "python",
        output: `Ran 1 test in 0.001s

OK`,
      },
      {
        title: "झटपट उजळणी: testing चे दहा मुद्दे",
        content: "एक. फाईल test_*.py; method test_*. दोन. वर्ग unittest.TestCase. तीन. प्रत्येक चाचणी एक वर्तन. चार. मांडणी, क्रिया, तपासणी. पाच. setUp प्रत्येक चाचणीपूर्वी. सहा. assertEqual/assertTrue/assertIn योग्य निवड. सात. assertRaises अपवादांसाठी. आठ. float साठी assertAlmostEqual. नऊ. patch ने बाह्य अवलंबित्व टाळा. दहा. discovery ने सर्व एकत्र.\n\nया दहा मुद्द्यांनी संपूर्ण unittest झाकले जाते शिवाय TDD, coverage आणि कडा-प्रकरणांची जाणीव. पुढील mega-project मध्ये याच मुद्द्यांचा प्रत्यक्ष वापर होईल.",
      },
    ],
    practiceQuestions: [
      "assert अट अयशस्वी झाल्यावर काय?",
      "test function नाव कसे ठेवतात?",
      "assert मध्ये message का?",
      "कोणत्या कोडला assert योग्य?",
    ],
    quiz: [
      { question: "assert अयशस्वी झाल्यास?", options: ["AssertionError", "ValueError", "compiler", "काही नाही"], correct: 0 },
      { question: "test functions नावे?", options: ["test_...", "main", "run", "loop"], correct: 0 },
      { question: "assert साठी सर्वोत्तम जागा?", options: ["विकास तपासण्या", "नेटवर्क", "UI", "हार्डवेअर"], correct: 0 },
    ],
    challenge: {
      prompt: "आधार कार्याच्या test निकालांची खात्री करा.",
      starterCode: `def half(x):
    return x // 2

assert half(10) == 5
assert half(3) == 1
print("all passed")`,
      expectedOutput: "all passed",
    },
    interviewQuestions: [
      "assert सीमा कुठे?",
      "unit test म्हणजे काय?",
    ],
    related: ["python-csv-json", "python-mega-project", "python-debugging"],
    prev: "python-csv-json",
    next: "python-mega-project",
  },

  {
    slug: "python-mega-project",
    categoryId: "python",
    title: "Advanced Project",
    marathiTitle: "Advanced Project - लायब्ररी व्यवस्थापन",
    level: "advanced",
    minutes: 22,
    summary: "dataclass, JSON, function objects, generator — सगळं एकत्र करून लायब्ररी व्यवस्थापन.",
    levelLabel: L6_LABEL,
    sections: [
      {
        title: "Advanced Project - लायब्ररी व्यवस्थापन म्हणजे काय?",
        content: "dataclass, JSON, function objects, generator — सगळं एकत्र करून लायब्ररी व्यवस्थापन.\nही project — लायब्ररीची नोंदवही.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Advanced Project - लायब्ररी व्यवस्थापन चे फायदे आणि महत्त्व",
        content: "\"Advanced Project - लायब्ररी व्यवस्थापन\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "लायब्ररी व्यवस्थापन — project दृष्टी",
        content: "ही project — लायब्ररीची नोंदवही. पुस्तकांची माहिती ठेवणे, शोधणे आणि जतन करणे. प्रश्न विचारला ('कोणत्या लेखकाने लिहिले?') तर library ती माहिती शोधते; संपूर्ण व्यवस्था डिझाईन तुमची.\n\nआत्तापर्यंतचे concept एकत्र राबवतो:\n\n• Book → dataclass मध्ये शीर्षक आणि लेखक\n\n• Library → add आणि find या function-object वरील dynamic शोध\n\n• shelf.json → JSON जतन/लोड\n\n• generator → क्रमांक पुढेचा\n\nहीच दृष्टी — माहिती, तिच्यावर क्रिया आणि जतन — खऱ्या applications मध्येही तीचच असते.",
      },
      {
        title: "Step 1: पुस्तकाची माहिती dataclass ने",
        content: "पुस्तकाला दोन गुणधर्म — शीर्षक आणि लेखक. Book हा dataclass बनवला की __init__ आणि __repr__ आपोआप येतात.\n\nb = Book(\"पानिपत\", \"विश्वास पाटील\") ने वस्तू बनते आणि print(b) ने तिचं सुबक स्वरूप दिसतं.\n\nपुस्तकाचे गुणधर्म वाढवायचे — pages, price — तर फक्त ओळी जोडा; बाकी यंत्रणा तशीच राहते.",
        code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

b = Book("पानिपत", "विश्वास पाटील")
print(b)`,
        codeLanguage: "python",
        output: `Book(title='पानिपत', author='विश्वास पाटील')`,
      },
      {
        title: "Step 2: Library आणि dynamic शोध",
        content: "Library वर्ग पुस्तकांची सूची ठेवतो. add मुळे पुस्तक जोडलं जातं आणि find कोणताही गुणधर्म घेऊन त्यावर शोधतो.\n\nfind मध्ये getattr(book, key) वापरतात — key ही 'title' असो किंवा 'author', dynamic पद्धतीने तोच गुणधर्म मिळतो. जुळणी आढळल्यास ते पुस्तक, नाहीतर None.\n\nlib.add जोडल्यावर find(\"author\", \"विश्वास पाटील\") ते पुस्तक देतो; find(\"title\", \"असलेली पुस्तके\") सारख्या नसलेल्या नावावर None.",
        code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

class Library:
    def __init__(self):
        self.books = []

    def add(self, book):
        self.books.append(book)
        return len(self.books)

    def find(self, key, value):
        for book in self.books:
            if getattr(book, key) == value:
                return book
        return None

lib = Library()
lib.add(Book("पानिपत", "विश्वास पाटील"))
lib.add(Book("श्रीमान योगी", "र. धों. कर्वे"))
print(lib.find("author", "विश्वास पाटील"))
print(lib.find("title", "असलेली पुस्तके"))`,
        codeLanguage: "python",
        output: `Book(title='पानिपत', author='विश्वास पाटील')
None`,
      },
      {
        title: "Step 3: JSON file मध्ये जतन",
        content: "पुस्तके फाईल मध्ये जतन करण्यासाठी JSON ची मदत. asdict(b) प्रत्येक dataclass चा dict बनवतो आणि json.dump तो संग्रह फाईल मधे लिहितो.\n\nपुन्हा open करून json.load ने ते परत वाचतो. saved ही list — len(saved) 2, आणि saved[1][\"title\"] दुसऱ्या पुस्तकाचे शीर्षक मृत्युंजय.\n\nensure_ascii=False मुळे मराठी अक्षरे फाईल मध्ये तशीच राहतात — जतन झालेला data पुन्हा व्यवस्थित उघडतो.",
        code: `import json
from dataclasses import dataclass, asdict

@dataclass
class Book:
    title: str
    author: str

books = [Book("पानिपत", "विश्वास पाटील"), Book("मृत्युंजय", "शिवाजी सावंत")]
with open("shelf.json", "w") as f:
    json.dump([asdict(b) for b in books], f, ensure_ascii=False)

with open("shelf.json") as f:
    saved = json.load(f)
print(len(saved), saved[1]["title"])`,
        codeLanguage: "python",
        output: `2 मृत्युंजय`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ फाईल दुसऱ्या directory मध्ये ठेवणे — कोड चालणाऱ्या ठिकाणापेक्षा वेगळी जागा निवडल्यास file सापडत नाही; working directory समोर ठेवा.\n\n✗ dataclass सोबत getattr चा गैरवापर — getattr हा key ने गुणधर्म शोधतो; key चं नाव पुस्तकात नसलेलं असेल तर None मिळतं, गंभीर त्रुटी नाही.\n\n✗ asdict न गुंडाळून dump of dataclass — json.dump थेट Book वस्तूला नेता येत नाही; [asdict(b) for b in books] करून dict सूची द्या.\n\n✗ file open state सोडणे — with हा ब्लॉक फाईल आपोआप बंद करतो; तो वापरा.",
      },
      {
        title: "concept चा मेळ — नोंदी",
        content: "ह्या project मध्ये सगळे concept कसे जोडले आहेत ते लक्षात ठेवा:\n\n• dataclass + asdict → JSON साठी उत्तम जोड\n\n• getattr(book, key) — गुणधर्म गतिशीलपणे मिळतो\n\n• JSON जतन — data फाईल मधे बसतो, program नसतानाही उपलब्ध\n\n• छोटे modules — मोठी व्यवस्था, प्रत्येकाची जबाबदारी थोडी\n\nइतकं केल्यावर पुस्तकांची सूची जोडणे, शोधणे आणि फाईल मधे जतन करणे — एका ठिकाणी होतं. ",
      },
      {
        title: "Interactive: पुस्तकांची यादी",
        content: "कृती: दोन पुस्तकांनी भरलेली list बनवा आणि तिचा आकार व पहिल्या पुस्तकाचा लेखक दाखवा.\n\nlib ही list; lib.append(Book(...)) ने पुस्तके जोडल्यावर len(lib) 2 आणि lib[0].author आरोही दिसतो.\n\nहेच तत्त्व Library वर्गात वापरलं — add ने जोडणे, अभिगमाने वाचणे. छोट्या list मधे तेच दिसते.",
        code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

lib = []
lib.append(Book("Python", "आरोही"))
lib.append(Book("मराठी", "वेद"))
print(len(lib), lib[0].author)`,
        codeLanguage: "python",
        output: `2 आरोही`,
      },
      {
        title: "Mini Project: वाचन अनुक्रमणिका",
        content: "प्रत्येक पुस्तकाला क्रमांक द्यायचा असेल तर generator वापरा — book_ids कोणत्याही सुरुवातीपासून अखंड क्रमांक देते.\n\nids = book_ids(101) मुळे 101 पासून सुरू होतो; पुढील तीन next (ids) कॉल मिळतात 101, 102, 103.\n\nक्रमांक कुठे थांबे हे ठरवणं data ला ठाऊक नसतं; generator फक्त पुढे पुढे देतो — इथेच किती हवे ते तुम्ही ठरवता.",
        code: `def book_ids(start=1):
    num = start
    while True:
        yield num
        num += 1

ids = book_ids(101)
print(next(ids), next(ids), next(ids))`,
        codeLanguage: "python",
        output: `101 102 103`,
      },
      {
        title: "प्रकल्पाची रचना आणि फाइल विभागणी",
        content: "आता आत्तापर्यंतचे सर्व एका मोठ्या प्रकल्पात एकत्र करू — 'विद्यार्थी निकाल प्रणाली'. उद्दिष्ट: विद्यार्थ्यांची नोंद, गुण, निकाल, आणि अहवाल. प्रकल्प पाच भागांत विभागू — models.py (dataclasses), storage.py (csv/json), reports.py (generators/itertools), search.py (regex), आणि main.py (सुरुवात). प्रत्येक भाग स्वतंत्र, एकच जबाबदारी.\n\nअशा विभागणीमुळे कोड वाचनीय, चाचणीयोग्य आणि विस्तारयोग्य होतो. एका फाईलला पाच जबाबदाऱ्या दिल्यास दोष शोधणे कठीण. म्हणून 'एक फाईल, एक जबाबदारी' हे तत्त्व.\n\nप्रकल्पाची रचना: project/ फोल्डर; त्यात src/ (कोड) आणि tests/ (चाचण्या); data/ (CSV/JSON फाईल्स). readme.md मध्ये कल्पना आणि चालवण्याच्या सूचना. ही रचना सर्व Python प्रकल्पांसाठी मानक — pytest, packaging सर्वांना समजते.\n\nनामकरण सुसंगत ठेवा: फाईल लहान अक्षरांत (models.py); वर्ग PascalCase (Student); function snake_case (load_students); स्थिरांक UPPER_CASE (PASS_MARK). हे पाळल्यास कोड स्वतःच दस्तऐवज होतो.\n\nआधी कागदावर प्रवाह लिहा: वापरकर्ता नोंद जोडतो → storage मध्ये जतन → reports अहवाल तयार करतो → search शोधतो. प्रत्येक बॉक्ससाठी एक फाइल. मग प्रत्येक फाईल स्वतंत्र लिहा आणि तिची चाचणी करा. शेवटी main.py जोडते.\n\nसुरुवातीला सर्व 'काम करणारे पण साधे' ठेवा; नंतर सुधारा. मोठा प्रकल्प टप्प्याटप्प्याने तयार होतो. खाली project फोल्डरची रचना दिली आहे — प्रत्यक्ष फाईल्स तयार करा.",
        code: `# नियोजित रचना
project/
  src/
    models.py      # Student dataclass
    storage.py     # CSV/JSON वाचन-लेखन
    reports.py     # अहवाल (generators, itertools)
    search.py      # regex शोध
    main.py        # प्रवेश बिंदू
  tests/
    test_models.py
    test_storage.py
  data/
    students.csv`,
        codeLanguage: "python",
        output: `# एक फाईल, एक जबाबदारी`,
      },
      {
        title: "डेटा मॉडेल — dataclasses आणि validation",
        content: "प्रकल्पाचा पाया म्हणजे डेटा मॉडेल. Student dataclass: name, roll, marks (list). __post_init__ मध्ये तपासणी — roll धन असावा, marks प्रत्येक 0-100 मध्ये. अवैध असल्यास तुमचा custom exception InvalidStudent उभा. अशा प्रकारे चुकीचा डेटा प्रणालीत शिरतच नाही.\n\ndef average(self): return sum(self.marks) / len(self.marks) if self.marks else 0. def grade(self): अक्षरे A/B/C — एक साधे नियम. हे methods वर्गाबरोबरच राहतात, कारण ते त्या डेटाशी संबंधित आहेत. म्हणून dataclass + methods हा चांगला संगम.\n\nमूल्य जतन करण्यासाठी asdict उपयोगी — storage.py मध्ये JSON लिहिताना थेट वापरता येते. ensure_ascii=False ने मराठी नावे जशी आहेत तशी राहतात. हे dataclasses आणि json मॉड्यूलचे नैसर्गिक जोडणी.\n\nvalidation मध्ये TypeError आणि ValueError वेगळे वापरा: प्रकार चुकीचा असल्यास TypeError; मूल्य श्रेणीबाहेर असल्यास ValueError. ही स्पष्टता वापरकर्त्याला नेमके संदेश देते. custom exception मध्ये field आणि value ठेवा.\n\nfrozen=True देऊन Student immutable केल्यास गुण बदलण्यासाठी नवीन object तयार करावा लागतो — काहींना हे नको. म्हणून dataclass(frozen=False) ठेवा पण बदल नियंत्रित पद्धतीने करा (add_mark method). शिस्त कोडात आणा.\n\nसारांश: Student dataclass; __post_init__ तपासणी; custom exception; average/grade methods; asdict ने साठवण. खाली models.py चा केंद्र भाग पहा.",
        code: `from dataclasses import dataclass, field

class InvalidStudent(Exception):
    pass

@dataclass
class Student:
    name: str
    roll: int
    marks: list = field(default_factory=list)

    def __post_init__(self):
        if self.roll <= 0:
            raise InvalidStudent("roll धन असावा")
        if any(not 0 <= m <= 100 for m in self.marks):
            raise InvalidStudent("गुण 0-100 मध्ये")

    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0.0

s = Student("मीरा", 1, [90, 85])
print(s.average())`,
        codeLanguage: "python",
        output: `87.5`,
      },
      {
        title: "साठवण — CSV आणि JSON persistence",
        content: "storage.py मध्ये दोन functions: save_json(students, path) आणि load_json(path), तसेच CSV साठी save_csv/load_csv. JSON स्तरबंद डेटासाठी (marks list सह) उत्तम; CSV सारणीसाठी. प्रकल्प दोन्ही देऊ शकतो — गरजेनुसार निवडा.\n\nsave_json: [asdict(s) for s in students] → json.dump(..., ensure_ascii=False, indent=2). load_json: json.load → प्रत्येक dict वरून Student(**d). मात्र dict मध्ये marks list असेल तर **d ने थेट चालेल. अन् invalid नोंदी try/except ने वगळा.\n\nCSV साठी marks list सपाट करावी लागते — उदा. marks ला \"90;85\" असा string. वाचताना split(\";\") ने परत list. हा एक standard खोटा उपाय; अधिक nested डेटासाठी JSON बरे. म्हणून 'रचना जितकी गुंतागुंतीची, तितके JSON' हा नियम.\n\nमहत्त्वाचे तत्त्व: storage functions ला फक्त path आणि objects घ्यायचे; ते UI किंवा नियमांबद्दल काही जाणत नाहीत. अशा विभाजनामुळे storage चाचणी करणे सोपे — तात्पुरत्या फाईलवर लिहा आणि वाचा.\n\nचाचणीत tempfile किंवा tmp_path (pytest) वापरा — खऱ्या data/ फोल्डरला स्पर्श करू नका. प्रत्येक चाचणी स्वतःची तात्पुरती फाईल वापरून स्वच्छ राहते. हे व्यावसायिक चाचणीचे लक्षण.\n\nसारांश: JSON nested डेटासाठी; CSV सारणीसाठी; storage functions स्वतंत्र; तात्पुरत्या फाईलवर चाचणी. खाली JSON लिहा-वाचा चक्र पहा.",
        code: `import json
from dataclasses import dataclass, asdict, field

@dataclass
class Student:
    name: str
    marks: list = field(default_factory=list)

students = [Student("मीरा", [90, 85])]
text = json.dumps([asdict(s) for s in students], ensure_ascii=False)
print(text)

loaded = [Student(**d) for d in json.loads(text)]
print(loaded[0].marks)`,
        codeLanguage: "python",
        output: `[{"name": "मीरा", "marks": [90, 85]}]
[90, 85]`,
      },
      {
        title: "decorators आणि logging जोडणे",
        content: "प्रकल्पात प्रत्येक महत्त्वाच्या function ला logging जोडायचे आहे — पण प्रत्येकात logging ओळी लिहिणे कंटाळवाणे. यावर उपाय decorator. @logged decorator function चालण्यापूर्वी नाव आणि arguments लॉग करतो, नंतर निकाल. एकदा लिहा, सर्वत्र वापरा.\n\n@logged मध्ये functools.wraps ठेवा — म्हणजे मूळ function चे नाव, docstring टिकते. wrapper(*args, **kwargs) सर्व प्रकारच्या function साठी चालतो. exception आल्यास तो लॉग करून पुन्हा raise करा — म्हणजे त्रुटी लपत नाही.\n\n@timed decorator कार्यक्षमता मोजतो — time.perf_counter ने सुरुवात/शेवट. मोठ्या अहवालात कोणता भाग हळू आहे हे कळते. हे दोन decorators मिळून प्रकल्पाचे 'निरीक्षण' (observability) वाढवतात.\n\nमहत्त्वाचे: decorators स्तरित असू शकतात — @logged वर @timed. क्रम महत्त्वाचा: वरचा decorator आधी लागू. म्हणून @logged\n@timed\ndef report(): ... मध्ये timed आधी चालतो, नंतर logged. इच्छित क्रमाने ठेवा.\n\nएक सावधानता: logging मध्ये संवेदनशील माहिती (पासवर्ड) लॉग करू नका. wrapper मध्ये arguments लॉग करताना ते गाळायचे नियम ठेवा. सुरक्षा ही नंतरची गोष्ट नाही — आधीच विचारा.\n\nसारांश: @logged ने प्रवेश-निर्गम नोंद; @timed ने वेळ; functools.wraps; स्तरित क्रम; संवेदनशील माहिती टाळा. खाली दोन्ही decorators एकत्र पहा.",
        code: `import functools, logging, time
logging.basicConfig(level=logging.INFO)

def logged(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        logging.info("चालू: %s", func.__name__)
        return func(*args, **kwargs)
    return wrapper

@logged
def report(n):
    return n * 2

print(report(3))`,
        codeLanguage: "python",
        output: `INFO:root:चालू: report
6`,
      },
      {
        title: "generators आणि itertools ने अहवाल",
        content: "reports.py मध्ये अहवाल तयार करू. मोठ्या विद्यार्थी-संख्या असल्यास सर्व एकत्र नको — generator वापरा. def all_students(students): for s in students: yield s. मग अहवाल हळूहळू तयार होतो आणि स्मृती कमी लागते.\n\nitertools ने सारांश: groupby ने grade नुसार गट करा (आधी sorted). chain ने अनेक वर्गांचे विद्यार्थी जोडा. accumulate ने चालू सरासरी. product/combinations ने 'कोणते विद्यार्थी पुढील फेरीस पात्र' अशा जोड्या. सर्व साधने एकत्र.\n\nउदा. grade नुसार मोजणी: for grade, group in groupby(sorted(students, key=lambda s: s.grade()), key=lambda s: s.grade()): print(grade, sum(1 for _ in group)). कंसातील generator लक्षात घ्या — मोजणीसाठी फक्त एकच वापर.\n\nसरासरी काढताना statistics मॉड्यूल वापरा — mean, median, stdev. पण सर्व डेटा असल्यासच; streaming मध्ये चालू बेरीज/मोजणी ठेवा आणि शेवटी भागा. accumulate मधून शेवटचे मूल्य घेऊन एकूण मिळते.\n\nअहवाल अनेक स्वरूपांत: console तक्ता, CSV (DictWriter), आणि JSON. एकच अंतर्गत डेटा (generators), तीन output. हे विभाजन — 'डेटा तयार करणे' वेगळे, 'दाखवणे' वेगळे. चांगले आर्किटेक्चर.\n\nसारांश: generator ने streaming; itertools ने गट/जोडणी; statistics ने आकडेवारी; अनेक output स्वरूप. खाली grade नुसार मोजणीचे उदाहरण — groupby + generator.",
        code: `from itertools import groupby

students = ["A", "B", "A", "C", "B", "A"]
for grade, group in groupby(sorted(students)):
    print(grade, sum(1 for _ in group))`,
        codeLanguage: "python",
        output: `A 3
B 2
C 1`,
      },
      {
        title: "regex ने शोध आणि फिल्टर",
        content: "search.py मध्ये regex ने वापरकर्त्याचा शोध सोपा करू. नावाने शोध (आंशिक), roll ने शोध, किंवा ईमेल/फोन नमुन्याने. regex मुळे 'आर' असलेले सर्व विद्यार्थी किंवा 'पुणे' गावाचे सर्व यांचा शोध एका ओळीत.\n\ndef search_by_name(students, pattern): rx = re.compile(pattern, re.IGNORECASE); return [s for s in students if rx.search(s.name)]. re.IGNORECASE मुळे मराठी/इंग्रजी केस फरक पडत नाही. शोध फलित generator असेल तर मोठ्या यादीत चांगले.\n\nregex ची ताकद — वापरकर्ता प्रगत नमुने वापरू शकतो. उदा. ^आ ने फक्त 'आ' पासून सुरू; \\d{6} ने फोन; [प-र] ने अक्षरश्रेणी. पण वापरकर्त्याचा नमुना थेट घेणे धोकादायक — re.error साठी try/except ठेवा, अन्यथा प्रोग्राम फुटतो.\n\nसुरक्षा: वापरकर्त्याचा regex वापरणे (ReDoS) धोकादायक असू शकते. म्हणून इनपुट मर्यादित लांबीचा घ्या, timeout किंवा कमी जटिल नमुने. सार्वजनिक प्रणालीत हे महत्त्वाचे. अंतर्गत साधनात धोका कमी.\n\nएक उपयोगी जोड: re.sub ने नावे स्वच्छ करा — जास्तीची जागा काढा, कंस काढा. शोधापूर्वी स्वच्छता केल्यास जुळणी अधिक विश्वासू. मराठीसाठी Unicode जागरूक राहा.\n\nसारांश: compiled pattern, IGNORECASE, try/except re.error, लांबी मर्यादा, sub ने स्वच्छता. खाली नावाने शोधाचे उदाहरण पहा — केस न पाहता.",
        code: `import re

names = ["आरोही", "वेद", "आरती", "मीरा"]
rx = re.compile("^आ", re.IGNORECASE)
print([n for n in names if rx.search(n)])`,
        codeLanguage: "python",
        output: `['आरोही', 'आरती']`,
      },
      {
        title: "exceptions आणि त्रुटी हाताळणी",
        content: "मोठ्या प्रकल्पात exceptions हे संवादाचे साधन. models.py मध्ये InvalidStudent; storage.py मध्ये StorageError; search.py मध्ये PatternError. प्रत्येक स्तर स्वतःची त्रुटी जाहीर करतो — वापरकर्त्याला नेमके कळते.\n\nचेनिंग वापरा: storage मध्ये JSONDecodeError आला तर raise StorageError(...) from e. म्हणजे मूळ कारण हरवत नाही आणि वरचा स्तर साधे साधने हाताळू शकतो. हे स्तरित प्रणालीचे लक्षण.\n\nmain.py मध्ये सर्व exceptions पकडून वापरकर्त्याला सभ्य संदेश द्या: except InvalidStudent as e: print(\"अवैध नोंद:\", e). अंतर्गत तपशील (stack trace) फक्त लॉगमध्ये. वापरकर्त्याला ते दाखवू नका.\n\nfinally/context manager ने संसाधने सोडा — फाईल नेहमी बंद. with open(...) हे आपोआप करते. त्यामुळे त्रुटी आली तरी फाईल तुटत नाही. ही सर्वात सोपी पण महत्त्वाची सवय.\n\nत्रुटी-मार्ग (error paths) ची चाचणी विसरू नका: अवैध roll, 100 पेक्षा जास्त गुण, बिघडलेली JSON फाईल. याच ठिकाणी बहुतेक दोष असतात. assertRaises सह या मार्गांची चाचणी करा.\n\nसारांश: स्तर-स्तर स्वतःचे exceptions; chaining; वापरकर्त्याला सभ्य संदेश; with ने संसाधने; त्रुटी-मार्गांची चाचणी. खाली StorageError चेनिंगचे उदाहरण.",
        code: `import json

class StorageError(Exception):
    pass

def load(text):
    try:
        return json.loads(text)
    except json.JSONDecodeError as e:
        raise StorageError("फाईल वाचता आली नाही") from e

try:
    load("{बिघडलेला}")
except StorageError as e:
    print(e, "| कारण:", type(e.__cause__).__name__)`,
        codeLanguage: "python",
        output: `फाईल वाचता आली नाही | कारण: JSONDecodeError`,
      },
      {
        title: "चाचण्या, सारांश आणि पुढील पावले",
        content: "प्रकल्प पूर्ण करण्यासाठी चाचण्या: test_models.py (average, grade, validation), test_storage.py (JSON/CSV फिरणे, बिघडलेला डेटा), test_reports.py (गट, मोजणी), test_search.py (regex शोध). प्रत्येक भाग स्वतंत्र तपासला जातो.\n\nएकत्रित चाचणी (integration): CSV वाचा → Student objects → अहवाल → JSON जतन → परत वाचा → समान आहेत का. हा संपूर्ण प्रवाह एका चाचणीत तपासल्यास भाग एकत्र चालतात याची खात्री. पण अशी चाचणी कमी ठेवा.\n\nआत्मपरीक्षण: प्रकल्पात कोणते मॉड्यूल कोणते काम करते? कोणते exceptions कोठे? decorators काय जोडतात? generators का वापरले? regex कुठे? या प्रश्नांची उत्तरे स्पष्ट असल्यास प्रकल्पाचे आर्किटेक्चर समजले.\n\nहा mega-project शेवटचा धडा — कारण इथे सर्व संकल्पना एकत्र आल्या. functions, decorators, generators, itertools, regex, custom exceptions, dataclasses, csv/json, testing — प्रत्येकाचे स्थान स्पष्ट दिसते. हेच शिकण्याचे उद्दिष्ट.\n\nपुढील पावले: हा प्रकल्प CLI किंवा Flask/FastAPI वेब API मध्ये वाढवा; database (sqlite3) जोडा; type hints लावा; mypy ने तपासा; packaging (pyproject.toml) शिका. पण आधी हा प्रकल्प स्वतः पूर्ण लिहा — अनुभव हाच खरा शिक्षक.\n\nअभिनंदन! Level 6 पूर्ण करून तुम्ही मध्यवर्ती Python वर प्रभुत्व मिळवले. खाली संपूर्ण प्रवाहाचा छोटा नमुना — नोंद → अहवाल → JSON.",
        code: `import json
from dataclasses import dataclass, asdict, field

@dataclass
class Student:
    name: str
    marks: list = field(default_factory=list)

    def average(self):
        return sum(self.marks) / len(self.marks) if self.marks else 0

students = [Student("मीरा", [90, 85]), Student("वेद", [70])]
summary = {s.name: round(s.average(), 1) for s in students}
print(json.dumps(summary, ensure_ascii=False))`,
        codeLanguage: "python",
        output: `{"मीरा": 87.5, "वेद": 70.0}`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "प्रकल्प पुढे नेण्यासाठी अधिकृत Python संसाधने — बुकमार्क करा:\n\n• Python standard library संपूर्ण निर्देशिका: https://docs.python.org/3/library/index.html\n• Python tutorial मुख्यपृष्ठ: https://docs.python.org/3/tutorial/index.html\n• dataclasses module: https://docs.python.org/3/library/dataclasses.html\n• json module: https://docs.python.org/3/library/json.html\n• csv module: https://docs.python.org/3/library/csv.html\n• itertools module: https://docs.python.org/3/library/itertools.html\n• re module: https://docs.python.org/3/library/re.html\n• unittest module: https://docs.python.org/3/library/unittest.html\n• sqlite3 (पुढील पायरी): https://docs.python.org/3/library/sqlite3.html\n• typing मार्गदर्शन: https://docs.python.org/3/library/typing.html\n• packaging प्रकल्प मार्गदर्शन: https://packaging.python.org/\n• Python मुख्य संकेतस्थळ: https://www.python.org/\n\nहे सर्व दुवे अधिकृत docs.python.org, python.org आणि packaging.python.org वरूनच आहेत.",
      },
      {
        title: "झटपट उजळणी: प्रकल्पाची पाच तत्त्वे",
        content: "एक. एक फाईल, एक जबाबदारी. दोन. डेटा मॉडेल dataclass मध्ये, तपासणी __post_init__ मध्ये. तीन. स्तर-स्तर स्वतःचे exceptions आणि चेनिंग. चार. generators ने streaming, itertools ने गट, regex ने शोध. पाच. प्रत्येक भागाची चाचणी आणि एकत्रित प्रवाहाची एक चाचणी.\n\nही पाच तत्त्वे कोणत्याही मोठ्या Python प्रकल्पाला लागू होतात — केवळ या उदाहरणाला नाही. पुढील पातळीवर database, web API आणि packaging शिकताना हाच पाया कामी येईल. प्रकल्प स्वतः पूर्ण लिहा — तोच खरा सराव. शेवटी, प्रत्येक तत्त्व मनात ठेवा आणि लहान प्रकल्पात राबवा; मोठे प्रकल्प याच सवयींवर उभे राहतात.",
      },
    ],
    practiceQuestions: [
      "getattr मध्ये काय होतं?",
      "asdict का वापरलं?",
      "generator क्रमांक कसा देतो?",
      "JSON जतनाचा फायदा?",
    ],
    quiz: [
      { question: "dataclass → dict कसा?", options: ["asdict", "dict()", "dumps", "list"], correct: 0 },
      { question: "attribute dynamically मिळवणे?", options: ["getattr", "getitem", "get()", "fetch"], correct: 0 },
      { question: "अखंड क्रमांकासाठी?", options: ["generator", "list", "tuple", "int"], correct: 0 },
    ],
    challenge: {
      prompt: "generator ने 3 क्रमांक द्या.",
      starterCode: `def course(start=1):
    num = start
    while True:
        yield num
        num += 1

ids = course(101)
print(next(ids), next(ids), next(ids))`,
      expectedOutput: "101 102 103",
    },
    interviewQuestions: [
      "या project मध्ये कोणते concept वापरले?",
      "JSON जतन का महत्त्वाचं?",
    ],
    related: ["python-testing", "python-csv-json", "python-dataclasses"],
    prev: "python-testing",
  },
];