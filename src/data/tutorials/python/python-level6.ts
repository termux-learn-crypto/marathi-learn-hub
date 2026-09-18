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