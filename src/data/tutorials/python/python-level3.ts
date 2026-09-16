import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 3 — Functions & Data ===
export const L3_LABEL = "Level 3 — Functions & Data (कार्ये आणि डेटा)";

export const pythonLevel3: Tutorial[] = [
  {
    slug: "python-functions",
    categoryId: "python",
    project: "unit-converter",
    title: "Python Functions",
    marathiTitle: "Functions - कोडचे पुन्हा वापर",
    level: "intermediate",
    minutes: 15,
    summary: "def keyword वापरून Python functions कसे बनवायचे ते शिका.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "फंक्शन म्हणजे काय?",
        content: "फंक्शन म्हणजे विशिष्ट काम करणारा कोडचा एक ब्लॉक. तो एकदाच लिहा आणि कितीही वेळा हाक मारा. Python मध्ये function बनवण्यासाठी def keyword वापरतात.\nfunction लिहून तिची नोंद करण्याला define म्हणतात आणि तिला वापरण्याला call म्हणतात. हा फरक सुरुवातीला नीट लक्षात ठेवा — पुढच्या प्रत्येक धड्यात हीच संज्ञा येते.\nfunction ला नियुक्त कार्यकर्ता समजा: त्याला मूल्ये दिली तर तो निकाल देऊन येतो. उदाहरणार्थ ग्रॅड ठरवणारा कोड function मध्ये ठेवल्यास तो पुन्हा पुन्हा लिहावा लागत नाही — कधीही ग्रॅड हवे असल्यास फक्त function ला हाक द्या.\nfunction चे फायदे तीन आहेत: कोड पुन्हा लिहावा लागत नाही, कोड व्यवस्थित (आयोजित) राहतो, आणि bug शोधताना फक्त संबंधित function तपासता येते.\nएक function एकच काम करावी. अनेक कामे एकत्र केली की ती वाचणे आणि बदलणे कठीण जाते. function लिहायला घेताना तीन प्रश्न विचारा: input काय, process काय, output काय? तिन्ही उत्तरे मिळाली की तिची रचना ठरते.",
      },
      {
        title: "Syntax: def, parameters, return",
        content: "function ची रचना नेहमी समान असते: def लिहा, मग नाव, मग कंसात parameters आणि शेवटी colon (:). आतल्या ओळी समान अंतराने (indentation) सुरू होतात — यावरून Python ला कळते की या ओळी function च्या मालकीच्या आहेत. शेवटी return ने निकाल परत द्या.\nकंसात function ला काय मिळते ते parameters म्हणतात आणि नावापुढे कंस हेच हाक मारण्याचे चिन्ह आहे. कंसाशिवळ फक्त नाव लिहिल्यास function चालत नाही — फक्त तिचा संदर्भ मिळतो.\nखालील कोड मध्ये greet नाव घेऊन नमस्काराचे वाक्य बनवते आणि add दोन संख्यांना जोडते. output मध्ये आधी नमस्कार, सायली! आणि मग बेरीज: 8 येते.\ndef च्या ओळीच्या शेवटी colon असणे आवश्यक आहे. colon नसेल तर Python ला ओळ कुठे संपली ते कळत नाही आणि SyntaxError येतो. आतल्या ओळी एकाच अंतराने नसल्यास त्या function च्या बाहेरच्या ओळींसारख्या वागतात.",
        code: `def greet(name):
    return f"नमस्कार, {name}!"

def add(a, b):
    return a + b

print(greet("सायली"))
print("बेरीज:", add(5, 3))`,
        codeLanguage: "python",
        output: `नमस्कार, सायली!
बेरीज: 8`,
      },
      {
        title: "parameters आणि arguments",
        content: "function च्या definition मधील नावांना parameters आणि हाक मारताना दिलेल्या मूल्यांना arguments म्हणतात. ही दोन नावे वेगवेगळी असली तरी काम एकच आहे — function ला input पोहोचवणे.\nहाक मारताना arguments ची संख्या parameters च्या संख्येशी जुळली पाहिजे. बेरीज जुळली नाही तर Python TypeError देतो आणि function अजिबात चालत नाही. म्हणून function च्या नावासोबत तिला किती मूल्ये हवीत ते लक्षात ठेवा.\nparameters ची नावेही अर्थपूर्ण ठेवा. a, b याऐवजी height, width असे नाव ठेवल्यास function वाचणाऱ्याला कोणते मूल्य कुठे जाते ते लगेच समजते.\narguments हाक मारताना उलट्या क्रमानेही देता येतात — name=सायली, age=25 असे keyword ने लिहिल्यास क्रम कसाही असू दे. पण positional arguments चा क्रम parameters च्या क्रमाप्रमाणेच राखा.",
      },
      {
        title: "Default parameters",
        content: "काही parameters साठी आधीच value ठेवता येते; अशा parameters ला default parameter म्हणतात. हाक मारताना त्यासाठी मूल्य दिले नाही तर default वापरले जाते; दिले तर दिलेले.\nखालील कोडात multiply च्या second parameter b ची default किंमत 2 आहे. multiply(4) म्हणजे 4 गुणिले 2 = 8; multiply(4, 5) म्हणजे 4 गुणिले 5 = 20. दोन्ही हाका एकाच definition वरून चालतात.\ndefault values घेणारे parameters नेहमी function मध्ये शेवटीच लिहा. कुठलेही (optional) parameter आधी किंवा मध्ये लिहिला तर Python शेवटच्या default नसलेल्या parameter पर्यंत गोंधळतो आणि SyntaxError देतो.\ndefault parameter चा व्यावहारिक उपयोग समजा — दुकानदार रोजच्या बिलात नेहमी 5 टक्के कर वापरतो. तो default ठेवल्यास प्रत्येक वेळी कर सांगावा लागत नाही; फक्त वेगळा कर हवा असेल तरच लिहावा लागतो.",
        code: `def multiply(a, b=2):
    return a * b

print(multiply(4))     # 4 * 2 = 8
print(multiply(4, 5))  # 4 * 5 = 20`,
        codeLanguage: "python",
        output: `8
20`,
      },
      {
        title: "वास्तविक उदाहरण: सूट मोजणे",
        content: "दुकानदार वस्तूंवर सूट देतो, हे वास्तविक उदाहरण function मध्ये मांडू. discount function किंमत आणि टक्केवारी हे दोन parameters घेते. saved मध्ये सूटची रक्कम काढते आणि return ने पेमेंटची रक्कम परत करते.\nपहिल्या हाकेत discount(500) म्हणजे 500 वर default 10 टक्के सूट — सूट 50 रुपये आणि पेमेंट 450.0. दुसऱ्या हाकेत discount(500, 30) म्हणजे 30 टक्के सूट — पेमेंट 350.0.\nएकच definition दोन वेगवेगळे निकाल देतो. हा function चा मुख्य गुणधर्म आहे: नियम (saved आणि return ची गणना) एकदा लिहिला की वेगवेगळ्या input वर अचूक output येते.\nसूटप्रमाणेच बँकेतील व्याज आणि कार्यालयातील पगाराची गणना — मुद्दल/दर/कालावधी हे parameters आणि शेवटची रक्कम return. नमुना सारखाच; फक्त नावे आणि सूत्र बदलतात.",
        code: `def discount(price, percent=10):
    saved = price * percent / 100
    return price - saved

print("पेमेंट करा:", discount(500))      # 10% सूट
print("पेमेंट करा:", discount(500, 30))   # 30% सूट`,
        codeLanguage: "python",
        output: `पेमेंट करा: 450.0
पेमेंट करा: 350.0`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ def च्या ओळीच्या शेवटी colon विसरणे — Python ला function ची घोषणा कुठे संपते ते कळत नाही आणि SyntaxError येतो. संदेशातील ओळ क्रमांक पाहून तेथे colon ठेवा.\n✗ return न करणे — function मध्ये return नसेल तर ती None परत करते. None म्हणजे काहीही नाही असा खास मूल्य. जर function चे काम फक्त display करणे असेल तर return आवश्यक नाही; पण निकाल पुढच्या गणनेत वापरायचा असेल तर return लिहा.\n✗ parameters आणि arguments गोंधळणे — definition मधली नावे parameters, हाक मारताना दिलेली मूल्ये arguments. दोन्हीची संख्या जुळली नाही तर TypeError: greet() missing 1 required positional argument सारखा संदेश येतो.\n✗ return नंतर ओळी लिहिणे — return ने function आणि मागील काम थांबते; return नंतरच्या ओळी कधीही चालत नाहीत. म्हणून return ही function ची शेवटची ओळ असू द्या.\n✗ print आणि return मिसळणे — print फक्त स्क्रीनवर दाखवते, return निकाल परत करतो. return न केल्यास दुसऱ्या function ला तो निकाल वापरता येत नाही.\n✗ नावात स्पेस घालणे — function नाव एका शब्दात, lowercase मध्ये असावे; एकापेक्षा अधिक शब्द असतील तर underscore वापरा (calculate_bill).",
      },
      {
        title: "return विरुद्ध print, scope आणि नामकरण",
        content: "return आणि print यांचा फरक एवढाच: print निकाल दाखवते, return निकाल परत करतो जो पुढे गणनेत वापरता येतो. खऱ्या गणनेसाठी return आवश्यक आहे. तसेच return ने function थांबते — म्हणून return function मध्ये शेवटीच लिहा.\nfunction च्या आत तयार केलेले व्हेरिएबल function बाहेर दिसत नाहीत. या मर्यादेला scope म्हणतात. ती सुरक्षेच्या दृष्टीने उपयोगी आहे — एका function च्या व्हेरिएबलचा दुसऱ्या function ला त्रास होत नाही.\nबाहेरचे व्हेरिएबल function मध्ये वाचता येते, पण बदलणे कठीण आहे. त्याच नावाचे दोन व्हेरिएबल वेगवेगळ्या function मध्ये असू शकतात — कुठलाही गोंधळ होत नाही कारण प्रत्येक function चा scope वेगळा आहे.\nfunction चे नाव क्रिया दर्शवणारे ठेवा — get_total, calculate_average अशी नावे वाचल्यावर function काय करते हे लगेच कळते. नियम: lowercase + underscore, उदा. calculate_bill, check_login.",
      },
      {
        title: "Interactive: बेरीज करणारी function",
        content: "खाली total नावाची function यादीतील सर्व किंमती जोडते. s मध्ये 0 पासून सुरुवात; for लूप प्रत्येक price s मध्ये जोडतो आणि शेवटी return s ने एकूण परत होते.\nमूल्ये 120 + 45 + 89 = 254, म्हणून output मध्ये एकूण बिल: 254 दिसते. यादीत 10 किंवा 1000 मूल्ये असली तरी हाच कोड बेरीज करतो — कामाचे सूत्र function आहे, आकार बदलतो.\nलक्षात ठेवा: return लूपच्या बाहेर ठेवावा. return लूपच्या आत ठेवल्यास पहिल्या फेरीतच function संपते आणि दुसऱ्या मूल्याची बेरीज होत नाही.\nfunction च्या आत for लूप चालवणे हा महत्त्वाचा नमुना आहे — नियम function मध्येच असल्यामुळे बाहेरचा कोड स्वच्छ राहतो.",
        code: `def total(items):
    s = 0
    for price in items:
        s += price
    return s

print("एकूण बिल:", total([120, 45, 89]))`,
        codeLanguage: "python",
        output: `एकूण बिल: 254`,
      },
      {
        title: "Mini Project: बिल कॅल्क्युलेटर",
        content: "शेवटी छोटा project — बिल कॅल्क्युलेटर. bill function वस्तूंच्या किंमतींची बेरीज करून त्यावर कर जोडते. amounts या यादीवर sum फंक्शन बेरीज करते आणि tax च्या टक्क्यानुसार कर मोजले जातो.\ncart मधील 99 + 45 + 210 = 354. पहिल्या हाकेत default 5 टक्के कर — एकूण 371.7; दुसऱ्या हाकेत 10 टक्के कर — एकूण 389.4. दोन्ही निकाल एकाच function मधून येतात.\nयेथे function ची ताकद दिसते: वेगळ्या tax साठी पुन्हा कोड न लिहिता फक्त एक argument बदलले. cart मध्ये नवीन वस्तू जोडली तरी function नवीन बेरीज आणि कर आपोआप मोजतो.\nsum हे Python चे तयार function आहे — संख्यांच्या समूहाची बेरीज करते. आपल्या function च्या आत Python चे तयार function वापरता येते हेही येथून लक्षात घ्या.",
        code: `def bill(amounts, tax=5):
    total = sum(amounts)
    return total + total * tax / 100

cart = [99, 45, 210]
print("अंतिम बिल:", bill(cart))
print("अंतिम बिल (10% कर):", bill(cart, 10))`,
        codeLanguage: "python",
        output: `अंतिम बिल: 371.7
अंतिम बिल (10% कर): 389.4`,
      },
    ],
    practiceQuestions: [
      "def वापरून function कशी बनवतात?",
      "return काय करतो?",
      "default parameter म्हणजे काय?",
      "balance calculator: जमा-वजा करणारी function लिहा",
    ],
    quiz: [
      {
        question: "Function बनवण्यासाठी कोणता keyword वापरतात?",
        options: ["func", "function", "def", "define"],
        correct: 2,
      },
      {
        question: "Function मधून value परत मिळवण्यासाठी कोणता keyword?",
        options: ["yield", "return", "send", "out"],
        correct: 1,
      },
      {
        question: "return न करताच function काय देतो?",
        options: ["None", "0", "error", "string"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "एक function square(a) लिहा जी a चा वर्ग परत करते. त्याला 2, 5 आणि 10 देऊन print करा.",
      starterCode: `def square(a):
    return a * a

print(square(2))
print(square(5))
print(square(10))`,
      expectedOutput: "4\n25\n100",
    },
    interviewQuestions: [
      "return vs print मध्ये फरक?",
      "default parameter कधी वापरतात?",
      "function नावासाठी कोणती conventions?",
    ],
    related: ["python-functions-params", "python-lists", "python-loops-project"],
    prev: "python-loops-project",
    next: "python-functions-params",
  },

  {
    slug: "python-functions-params",
    categoryId: "python",
    title: "Parameters & Arguments",
    marathiTitle: "Parameters व Arguments",
    level: "intermediate",
    minutes: 14,
    summary: "Function ला data कसे द्यायचे आणि कसं मिळवायचं.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "parameters आणि arguments म्हणजे काय?",
        content: "function ची व्याख्या लिहिताना कंसांमध्ये नावे ठेवतो — त्यांना parameters म्हणतात. function ला हाक मारताना त्या नावांना खरी मूल्ये देतो — त्यांना arguments म्हणतात. व्याख्येतील नावे parameters, वापरातील मूल्ये arguments. हा फरक ठाम लक्षात ठेवा.\nउदाहरणार्थ info function मध्ये name आणि age ही parameters आहेत; हाक मारताना दिलेले विलास, 25 ही arguments. parameters function च्या आत वापरता येतात आणि function बाहेरच्या जगाशी फक्त याच दारातून जोडली जाते.\nparameters च्या निवडीने function चा वापर सोपा किंवा कठीण होतो. नावे अर्थपूर्ण ठेवा — name, age, grades अशी नावे वाचणाऱ्याला कोणते मूल्य कुठे जाते ते लगेच सांगतात.\nparameters चे पाच प्रकार आहेत: positional (क्रमाने दिलेले), default (आधीच ठरवलेले), keyword (नाव देऊन दिलेले), *args (अनेक मूल्यांचा tuple) आणि **kwargs (अनेक key=value जोड्यांचा dict). प्रत्येक प्रकार वेगळ्या परिस्थितीत उपयोगी आहे.",
      },
      {
        title: "Syntax: default, *args, **kwargs",
        content: "function च्या व्याख्येची रचना अशी आहे — def नंतर नाव, कंसात parameters आणि शेवटी colon. default parameter ला मूल्य येथेच दिले जाते (c=10). *args मधून Python tuple बनवते आणि **kwargs मधून dict बनवते. तारा (*) हीच सांकेतिक खूण आहे.\ndef f(a, b, c=10):  आणि  def g(*args):  → tuple मिळेल   def h(**kwargs):  → dict मिळेल.  एकाच params चा घोषणेसाठी हा नमुना.\nmix function खाली *args चा वापर दाखवते — कितीही मूल्ये स्वीकारून sum ने बेरीज करते. mix(1, 2, 3) म्हणजे 6 आणि mix(10, 20) म्हणजे 30.\nजेव्हा function ला नेमकी किती मूल्ये मिळतील हे ठाऊक नसते तेव्हा *args वापरतो. प्रत्येक हाक वेगळ्या संख्येने मूल्ये देते; Python ती एकत्र करून tuple बनवते. ही function ची लवचिकता आहे.",
        code: `def mix(*args):
    return sum(args)

print(mix(1, 2, 3))
print(mix(10, 20))`,
        codeLanguage: "python",
        output: `6
30`,
      },
      {
        title: "Keyword arguments",
        content: "keyword arguments मध्ये नाव देऊन मूल्ये लिहिली जातात, उदा. info(age=25, name=\"विलास\"). याचा फायदा: मूल्यांचा क्रम महत्त्वाचा नाही. येथे age आधी लिहिले तरी ते age लाच जाते — नाव हेच अट आहे.\ninfo function दोन्ही parameters आवश्यक आहेत (required). दोन्ही नावासोबत दिल्याने क्रमाची चिंताच नाही. खालील कोड चालवल्यास विलास कोण - 25 वर्षांचा/ती असे वाक्य छापते — f-string मध्ये name आणि age ची मूल्ये बसतात.\npositional आणि keyword एकत्र वापरताना positional आधी आणि keyword नंतर द्या — हा क्रम Python ला आवश्यक आहे.\nजेव्हा parameters ५-६ एवढी असतात तेव्हा positional मध्ये क्रम चुकण्याचा धोका असतो. keyword ने कोड वाचणाऱ्याला कोणते मूल्य कोणत्या parameters ला आहे हे कंसातच दिसते — स्पष्टता हाच keyword चा मुख्य फायदा.",
        code: `def info(name, age):
    print(f"{name} कोण - {age} वर्षांचा/ती")

info(age=25, name="विलास")`,
        codeLanguage: "python",
        output: `विलास कोण - 25 वर्षांचा/ती`,
      },
      {
        title: "वास्तविक उदाहरण: गुणांची सरासरी",
        content: "वास्तविक उदाहरण — गुणांची बेरीज आणि सरासरी. stats function कितीही गुण घेते (80, 90, 70) आणि return ने बेरीज, संख्या आणि सरासरी असे तीन निकाल देते.\nfunction एकापेक्षा अधिक निकाल return करू शकते — return total, count, total / count लिहिल्यास ही तिन्ही मूल्ये tuple बनून येतात. निकाल स्वीकारताना pus, qty, avg अशा तीन व्हेरिएबलमध्ये खोलतो — याला unpacking म्हणतात.\n80 + 90 + 70 = 240, गुणांची संख्या 3, सरासरी 240/3 = 80.0. f-string मध्ये .1f ने सरासरी एक दशांश ठिकाणी दिसते.\nहीच function कोणत्याही गुणांच्या यादीसाठी वापरता येते — संख्या कितीही असो, बेरीज आणि सरासरी आपोआप येते. नेमकी संख्या ठाऊक नसलेल्या मूल्यांसाठी *args लवचिक आहे.",
        code: `def stats(*grades):
    total = sum(grades)
    count = len(grades)
    return total, count, total / count

pus, qty, avg = stats(80, 90, 70)
print(f"एकूण: {pus}, प्रश्न: {qty}, सरासरी: {avg:.1f}")`,
        codeLanguage: "python",
        output: `एकूण: 240, प्रश्न: 3, सरासरी: 80.0`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ required parameter न देता हाक मारणे — function ला आवश्यक मूल्य मिळत नाही आणि TypeError येतो. संदेश वाचून कोणते argument गहाळ आहे ते पहा आणि ते द्या.\n✗ positional आणि keyword चा क्रम उलटणे — keyword मूल्ये आधी लिहिली किंवा positional नंतर लिहिली तर Python गोंधळतो आणि SyntaxError देतो. नियम: positional आधी, keyword नंतर.\n✗ *args आणि **kwargs एकत्र वापरताना ठिकाणे चुकवणे — क्रम स्थिर पाळा: positional, नंतर default, नंतर *args, शेवटी **kwargs.\n✗ mutable default वापरणे — उदा. def f(x=[]) लिहिल्यास तोच list सर्व हाकांना सामायिक राहतो आणि एकत्र बदलतो. याऐवजी default None करा आणि function च्या आत yादी तयार करा: def f(x=None) नंतर if x is None: x = [].\n✗ function मधून अनेक निकाल मिळवायचे असतील तर return चा क्रम स्पष्ट ठेवा — unpacking त्या क्रमानेच मूल्ये वाटते.",
      },
      {
        title: "महत्त्वाचे क्रम: positional → default → *args → **kwargs",
        content: "parameters च्या व्याख्येचा नियम फक्त असा: positional parameters हमखास आधी, नंतर default parameters, नंतर *args आणि शेवटी **kwargs. हा क्रम function च्या रचनेचा स्थिर आधार आहे.\nहे क्रम पाळले नाहीत तर Python ला function ची रचना समजत नाही. default parameter नेहमी शेवटी लिहावा चा नियम workbooks तशीच इथेही — बहुतेक हाकांसाठी default पुरेसे असते, विशेष बाबतीतच नवे मूल्य दिले जाते.\n*args tuple बनतो — क्रमाचा संग्रह; **kwargs dict बनतो — नाव-मूल्य जोडी. दोन्हीचे स्वरूप कधी गोंधळू नये: एक महत्त्वाचा का दुसरा कितीही मूल्ये.\nव्यवहारात प्रत्येक function याच चौकटीत बसते. ही तिन्ही नियम लक्षात ठेवल्यास function ची व्याख्या आणि हाक दोन्ही स्थिर आणि वाचकांना समजेल अशी राहते.",
      },
      {
        title: "Interactive: **kwargs सह profile",
        content: "interactive उदाहरणात **kwargs चा वापर पहा. profile function data नावाचा dict घेते. data.items() प्रत्येक नाव-मूल्य (key-value) जोडी क्रमाने देते आणि print प्रत्येक जोडी वेगळ्या ओळीत छापते.\nहाकेत name, city, job अशी नावे (keys) आणि सायली, नागपूर, Teacher अशी मूल्ये (values) दिली आहेत. Python ती सर्व dict मध्ये एकत्र करते — येथूनच output मध्ये name: सायली, city: नागपूर, job: Teacher अशा तिही ओळी दिसतात.\nही रचना form data, configuration आणि user profiles मध्ये सामान्य आहे. प्रत्येक वेळी नेमकी किती माहिती मिळेल हे कळत नाही — **kwargs function ला साधी ठेवत आणि वैविध्य सामावते.\nस्वतः वेगळे data देऊन function चालवून पहा — output मध्ये जोड्यांचा क्रम dict च्या क्रमाप्रमाणेच पाळला जातो.",
        code: `def profile(**data):
    for key, val in data.items():
        print(f"{key}: {val}")

profile(name="सायली", city="नागपूर", job="Teacher")`,
        codeLanguage: "python",
        output: `name: सायली
city: नागपूर
job: Teacher`,
      },
    ],
    practiceQuestions: [
      "positional vs keyword argument फरक?",
      "*args काय देतो?",
      "default argument कुठे ठेवतात?",
      "sum() function — आता स्वतः *args वापरून बनवा",
    ],
    quiz: [
      {
        question: "*args function मध्ये कशात जातो?",
        options: ["list", "tuple", "dict", "set"],
        correct: 1,
      },
      {
        question: "**kwargs function मध्ये कशात जातो?",
        options: ["list", "tuple", "dict", "set"],
        correct: 2,
      },
      {
        question: "default argument कुठे लिहितात?",
        options: ["सुरुवातीला", "शेवटी", "मध्ये", "कुठेही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "*args वापरून कोणत्याही पाच संख्यांची बेरीज आणि सरासरी देणारी function अ‍ॅव्हरेज/संट लिहा (याला कॉल करून print करा).",
      starterCode: `def stats(*nums):
    return sum(nums), sum(nums) / len(nums)

total, avg = stats(10, 20, 30, 40, 50)
print("बेरीज:", total)
print("सरासरी:", avg)`,
      expectedOutput: "बेरीज: 150\nसरासरी: 30.0",
    },
    interviewQuestions: [
      "positional आणि keyword arguments कधी वापरतात?",
      "mutable default argument का धोकादायक?",
      "*args आणि **kwargs ची भूमिका?",
    ],
    related: ["python-functions", "python-functions-scope", "python-lambda"],
    prev: "python-functions",
    next: "python-functions-scope",
  },

  {
    slug: "python-functions-scope",
    categoryId: "python",
    title: "Scope (Local & Global)",
    marathiTitle: "Variable मध्ये इथले पोहोचणे",
    level: "intermediate",
    minutes: 13,
    summary: "Variable कोठे दिसतो — local, global, nonlocal.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "scope म्हणजे काय?",
        content: "scope म्हणजे variable कोठून दिसतो आणि कोठून नाही याची व्यवस्था. Python मध्ये प्रत्येक variable ला एक क्षेत्र असते. function च्या आत बनवलेल्या variable ला local आणि function च्या बाहेर, module पातळीवर बनवलेल्या variable ला global म्हणतात.\nlocal variable फक्त function च्या आतच दिसतो — बाहेरून तो दिसत नाही. global variable सर्वत्र दिसतो — function च्या आतही वाचता येतो.\nघराच्या उदाहरणातून हे स्पष्ट होते: तुमच्या खोलीतला मोबाईल फक्त खोलीत दिसतो (local), पण घराचे स्वयंपाकघर घरातील सर्वांना उपलब्ध असते (global). जसे शेजाऱ्याला खोलीतील वस्तू दिसत नाही, तसे function आतला variable बाहेरच्या कोडला दिसत नाही.\nएकाच नावाचे variable वेगवेगळ्या ठिकाणी वेगळे अर्थ धरू शकतात — कारण दृश्यता नियम (local/global) वेगळे. जर function च्या आत x = 5 लिहिले तर नवीन local variable तयार होतो; बाहेरच्या x वर त्याचा परिणाम होत नाही.\nfunction आतल्या variable चे आयुष्य function ची हाक पूर्ण झाल्यावर संपते. पुढील हाक तो पुन्हा नव्याने तयार करते — म्हणून प्रत्येक हाकेला स्वतंत्र अवस्था असते.",
      },
      {
        title: "Syntax: local आणि global वाचणे",
        content: "खालील कोड मध्ये name हा global variable आहे आणि lang function च्या आतला local variable आहे. show function दोन्ही वाचते — global name वाचता येतो, म्हणून दोन्ही छापले जातात.\nfunction बाहेर print(name) चालते कारण name global आहे. पण print(lang) function बाहेर लिहिले तर NameError येते कारण lang चे क्षेत्र फक्त function च्या आत आहे.\nया कोडचा output दोन ओळी — आधी \"Python मध्ये: मराठी\" आणि मग \"मराठी\". हे दोन्ही वाचनाचे प्रकार दाखवते: function आत local+global, बाहेर फक्त global.\nreading (वाचणे) सर्वत्र शक्य — global चे वाचन function आतही होते. पण प्रत्येक variable चे क्षेत्र नेमके कुठे ते कोड लिहिले त्या ठिकाणावरून ठरते.",
        code: `name = "मराठी"      # global

def show():
    lang = "Python"   # local
    print(lang, "मध्ये:", name)

show()
print(name)          # global ok
# print(lang)        # NameError! local बाहेर नाही`,
        codeLanguage: "python",
        output: `Python मध्ये: मराठी
मराठी`,
      },
      {
        title: "global keyword ने variable वाढवणे",
        content: "function च्या आत global variable बदलायचा असेल तर global keyword लिहावा लागतो. तो keyword दिल्यावर तो variable function मध्ये local म्हणून नव्याने नाही तर module पातळीवरील global म्हणून वागतो.\ncount = 0 हा global variable आहे. bump function मध्ये global count लिहिले आहे, म्हणून count += 1 हे function च्या आत नवीन local बनवत नाही तर global count वरच होते.\nदोन बंप हाकांमुळे count 0 → 1 → 2 असा वाढतो आणि शेवटी \"एकूण: 2\" छापले जाते.\nglobal keyword विसरल्यास Python count ला local समजते — आणि count += 1 या ओळीत त्रुटी येते. सामान्य परिस्थितीत global बदलणे टाळावे; पण counter सारख्या ठिकाणी ते सोयीचे असते. global usage function च्या सुरुवातीला एकदा दिला म्हणजे पुरेसे.",
        code: `count = 0

def bump():
    global count
    count += 1

bump()
bump()
print("एकूण:", count)`,
        codeLanguage: "python",
        output: `एकूण: 2`,
      },
      {
        title: "वास्तविक उदाहरण: भेटींचा counter",
        content: "वास्तविक उदाहरण — भेटी मोजणारा counter. visits हा global variable; visit function त्याला वाढवून return ने नवीन मूल्य देते.\nvisit() तीन वेळा हाक मारल्यावर प्रत्येक वेळी नवीन मूल्य मिळते — 1, 2, 3. print(visit(), visit(), visit()) मधील तिन्ही हाका क्रमाने चालतात आणि \"1 2 3\" छापते.\nशेवटी visits चे अंतिम मूल्य 3 असल्याने print \"एकूण भेटी: 3\" दाखवते — global व्हेरिएबल बाहेरच्या कोडलाही दिसतो म्हणून हे शक्य आहे.\nअसा counter web applications मध्ये page load ची संख्या मोजण्यासाठी नेहमी वापरला जातो. function मध्ये global वापरताना त्याचा उद्देश स्पष्ट ठेवा — कोणता variable वाढला ते नावावरून कळले पाहिजे.",
        code: `visits = 0

def visit():
    global visits
    visits += 1
    return visits

print(visit(), visit(), visit())
print("एकूण भेटी:", visits)`,
        codeLanguage: "python",
        output: `1 2 3
एकूण भेटी: 3`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ local variable बाहेर (module-level) वापरणे — function आतला variable function बाहेर आणला तर NameError येतो. local चे क्षेत्र नेहमी function च्या आतच असते.\n✗ global keyword विसरून बदल करणे — function आत points = points + x लिहिल्यास Python points ला local समजते; मग points + x मध्ये पूर्वीचा points नसल्याने UnboundLocalError येतो. बदल करायचा असेल तर global keyword हवाच.\n✗ global जास्त वापरणे — खूप global variable मुळे कोड गोंधळलेला आणि अंदाज लावण्यास कठीण होतो. कोणत्या function ने कुठल्या global वर परिणाम केला हे शोधणे अवघड जाते.\nटाळण्याची सोपी पद्धत: प्रत्येक variable कोठे वापरला ते ठरवा — फक्त function आत असेल तर local, फक्त बाहेर असेल तर global, दोन्ही ठिकाणी हवा असेल तर बदलासाठी parameter आणि return वापरा.\nचूक घडल्यावर त्रुटी संदेश वाचा — NameError असेल तर name/क्षेत्र, UnboundLocalError असेल तर global चा प्रश्न तपासा.",
      },
      {
        title: "Interactive: UnboundLocalError समजून घेणे",
        content: "interactive उदाहरणात जाणीवपूर्वक एक चूक दाखवली आहे. points = 100 हा global. add function मध्ये points = points + x लिहिले आहे — या रचनेत Python points ला local समजते; मग points + x ची गणना करताना त्या नव्या local ना अजून मूल्य नसते.\nयामुळे UnboundLocalError येतो. खालील कोड try/except मध्ये ठेवल्याने त्रुटी म्हणून संदेश छापला जातो — output मध्ये तो संदेश दिसतो.\nत्रुटीची मांडणी: cannot access local variable 'points' where it is not associated with a value — म्हणजेच Python ने points ला local मानून त्याच्याशी अजून मूल्य जोडले नाही.\nही जाणीवपूर्वक दाखवलेली चूक शिकवते — global keyword शिवाय function मध्ये बाहेरचा variable बदलता येत नाही. global points लिहिल्यास हीच त्रुटी नाहीशी होते.",
        code: `points = 100

def add(x):
    points = points + x
    return points

try:
    print(add(5))
except UnboundLocalError as e:
    print(f"UnboundLocalError: {e}")`,
        codeLanguage: "python",
        output: `UnboundLocalError: cannot access local variable 'points' where it is not associated with a value`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "function मध्ये (global keyword न सांगितल्यास) सर्व variable local असतात. global variable सर्वत्र दिसतो — function आत वाचता येतो, पण बदल करण्यासाठी global keyword लागतो.\nglobal वाढवणे हे function मध्येच बदलणे आहे — त्याऐवजी parameter देऊन वाढवा आणि return ने निकाल परत घ्या. उदाहरणार्थ counter साठी function ला मूल्य द्या, वाढवा आणि परत करा. अशी रचना function स्वच्छ आणि testing सोपी करते.\nएका function च्या local variable ला दुसऱ्या function ने पाहता येत नाही — यामुळे function स्वतंत्र राहतात आणि गोंधळ टळतो.\nनोंदी वाचून सराव करा: एक function लिहा ज्यात local आणि global दोन्ही वापरले जातात — एक वाचा, एक parameter ने वाढवा.",
      },
    ],
    practiceQuestions: [
      "local variable म्हणजे काय?",
      "function मध्ये global variable बदलण्यासाठी काय करावं?",
      "UnboundLocalError कधी होतो?",
      "global वापरू नये असं का म्हणतात?",
    ],
    quiz: [
      {
        question: "Function आत बनवलेला variable काय असतो?",
        options: ["global", "local", "module", "static"],
        correct: 1,
      },
      {
        question: "function मध्ये global variable बदलण्यासाठी?",
        options: ["local", "global", "nonlocal", "static"],
        correct: 1,
      },
      {
        question: "function मध्ये नसलेला variable print केल्यास?",
        options: ["None", "NameError", "warning", "0"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एक counter बनवा: visit() function प्रत्येक call ने global counter 1 ने वाढवतो आणि नवीन मूल्य print करतो.",
      starterCode: `visits = 0

def visit():
    global visits
    visits += 1
    print("भेट क्र.", visits)

visit()
visit()
visit()`,
      expectedOutput: "भेट क्र. 1\nभेट क्र. 2\nभेट क्र. 3",
    },
    interviewQuestions: [
      "local/global scope म्हणजे काय?",
      "UnboundLocalError कधी येतो?",
      "global जास्त वापरणे standard का नाही?",
    ],
    related: ["python-functions-params", "python-functions", "python-lambda"],
    prev: "python-functions-params",
    next: "python-lambda",
  },

  {
    slug: "python-lambda",
    categoryId: "python",
    title: "Lambda Functions",
    marathiTitle: "Lambda — एका ओळीची function",
    level: "intermediate",
    minutes: 12,
    summary: "नाव नसलेली, एका ओळीची function.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "lambda म्हणजे काय?",
        content: "lambda ही छोटी, नाव नसलेली function आहे. ती एकाच expression मध्ये बनते आणि साध्या, लहान कामांसाठी वापरली जाते. \"चौरस कर\", \"दुप्पट कर\" असे एकदाच काम करायचे असेल तर संपूर्ण def function लिहिण्याऐवजी lambda एका ओळीत निकाल देते.\nlambda ला def सारखे नाव लागत नाही — म्हणून तिला anonymous function म्हणतात. नावाची गरज नसते कारण ती बहुतेक वेळा sorted, filter, map सारख्या function च्या argument म्हणून त्वरित वापरली जाते.\nदैनंदिन भाषेत सांगायचे तर lambda ही \"लगेच काम करणारी टीप\" आहे — रिकाम्या जागी पटकन लिहून देतात. उदाहरणार्थ दुप्पट करण्याचे काम इतके लहान आहे की त्यासाठी पूर्ण function वाया जाते; lambda x: x * 2 ही एक ओळ पुरेशी.\nमोठी function, जटिल तर्क, अनेक conditions किंवा loops असतील तर def वापरा. lambda फक्त एका expression च्या साध्या कामासाठी आहे — ही मर्यादा लक्षात ठेवणे महत्त्वाचे.",
      },
      {
        title: "Syntax: lambda arguments: expression",
        content: "lambda ची syntax एकाच ओळीत असते — आधी lambda keyword, मग arguments आणि colon नंतर expression. expression चा निकाल आपोआप return होतो.\nsquare = lambda x: x * x ही function x चा स्वतःशी गुणाकार करून चौरस देते — square(5) म्हणजे 25. add = lambda a, b: a + b ने add(3, 7) = 10 होते.\ndef सोबत तुलना करा: def sq(x): return x * x हीच रचना आहे पण जास्त ओळी. दोन्हीचा निकाल सारखा — sq(4) = 16. lambda हा फक्त छोटा पर्याय आहे.\nएकापेक्षा अधिक arguments असतील तर कॉमाने वेगळे करा — उदा. lambda a, b, c: a + b - c. फक्त एक expression असतो म्हणून नामित variable ना assignment किंवा अनेक विधाने lambda मध्ये शक्य नाहीत.",
        code: `square = lambda x: x * x
print(square(5))

add = lambda a, b: a + b
print(add(3, 7))

# def च्या तुलनेत:
def sq(x):
    return x * x

print(sq(4))`,
        codeLanguage: "python",
        output: `25
10
16`,
      },
      {
        title: "sorted() सोबत lambda",
        content: "sorted आणि sort मध्ये lambda चा सर्वात सामान्य उपयोग क्रमवारीचा key ठरवणे. items यादीत (नाव, किंमत) अशा जोड्या आहेत; x[1] म्हणजे किंमत — त्या key वर वर्ग व्हावा असे आपण ठरवतो.\nitems.sort(key=lambda x: x[1]) मुळे किंमत लहान ते मोठी अशी क्रमवारी होते. परिणाम: पेन (10), पुस्तक (150), बॅग (400).\nlambda प्रत्येक item मधून key काढते आणि sorting त्या key वर होते. जर नावावर वर्ग करायचे असेल तर key=lambda x: x[0] लिहायचे — हाच बदल.\nलक्षात ठेवा: items.sort मूळ यादीतच बदल करते; sorted नवीन यादी देते. दोन्हीमध्ये key हा sorting चा आधार ठरतो.",
        code: `items = [("पुस्तक", 150), ("पेन", 10), ("बॅग", 400)]
items.sort(key=lambda x: x[1])
print(items)`,
        codeLanguage: "python",
        output: `[('पेन', 10), ('पुस्तक', 150), ('बॅग', 400)]`,
      },
      {
        title: "वास्तविक उदाहरण: filter ने उच्च विक्री निवडणे",
        content: "वास्तविक उदाहरण — विक्री नोंदीतून उच्च विक्रीच्या वस्तू निवडायच्या आहेत. sales हा dict आहे ज्यात वस्तूचे नाव आणि किंमत आहे. filter function ला two arguments दिले: अट दाखवणारी function आणि जोड्यांची यादी.\nlambda kv: kv[1] >= 70 ही अट प्रत्येक जोडी (key-value) ची किंमत 70 पेक्षा जास्त आहे का ते तपासते. पुरेशी किमत असलेल्या जोड्या उरतात: चहा 45 वगळला, कॉफी 80 आणि लस्सी 120 ठेवले.\nfilter चा परिणाम dict होत नाही — dict(filter(...)) ने पुन्हा dict बनवला. आउटपुट: {'कॉफी': 80, 'लस्सी': 120}.\nअसा उपयोग report आणि data निवडीत वारंवार होतो. kv म्हणजे key-value जोडी, kv[1] म्हणजे तिचे मूल्य — किंमत. अट पाळल्यास जोडी राहते, नाही तर वगळली जाते.",
        code: `sales = {"चहा": 45, "कॉफी": 80, "लस्सी": 120}
top = dict(filter(lambda kv: kv[1] >= 70, sales.items()))
print(top)`,
        codeLanguage: "python",
        output: `{'कॉफी': 80, 'लस्सी': 120}`,
      },
      {
        title: "Interactive: map सोबत lambda",
        content: "interactive उदाहरणात map सोबत lambda वापरली आहे. map प्रत्येक मूल्यावर function लावते आणि नवीन संग्रह देते. nums = [1, 2, 3, 4] वर lambda x: x * 2 प्रत्येक घटक दुप्पट करते.\nmap ला function आणि संग्रह असे दोन arguments दिले जातात — function आधी. map चा परिणाम iterator असतो, म्हणून list(map(...)) मध्ये गुंडाळून यादी मिळवतो.\nआउटपुट [2, 4, 6, 8] — प्रत्येक संख्या दुप्पट. print(doubles) सरळ यादी दाखवते.\nmap आणि lambda ही यादी रूपांतराची सर्वात सोपी जोडणी आहे. प्रत्येक घटकावर function चालते हीच पद्धत संपूर्ण यादीवर लागू होते.",
        code: `nums = [1, 2, 3, 4]
doubles = list(map(lambda x: x * 2, nums))
print(doubles)`,
        codeLanguage: "python",
        output: `[2, 4, 6, 8]`,
      },
      {
        title: "lambda vs def: कधी काय वापरावे?",
        content: "lambda आणि def दोन्ही function बनवतात; दोघांचे काम सारखे. फरक नेमकेपणाने समजून घ्या: lambda = एक ओळ, एक expression, नाव नाही, निकाल आपोआप return. def = नाव, अनेक ओळी, statements, loops, conditions, स्पष्ट return.\nlambda कधी? — लहान काम त्वरित करायचे असताना: sorted चा key, filter ची अट, map चे रूपांतर. म्हणून modern कोडमध्ये lambda वारंवार दिसते.\ndef कधी? — काम जटिल असेल, अनेक ओळी हव्या असतील, नावाची गरज असेल (पुन्हा वापरायचा) किंवा दस्तऐवजीकरण हवे असेल. नियमित, पुनर्वापराच्या function साठी defच योग्य.\nअचूक ठरवण्याचा प्रश्न एकच: हे काम एका expression मध्ये बसते का? बसते तर lambda, नाही तर def.",
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ lambda आत assignment करणे — x = 5 असे लिहिताच SyntaxError येते. lambda मध्ये विधान (statement) नसून expression असतो — मूल्य दर्शवणारी रचना. म्हणून assignment, if-else चे विधान हे lambda मध्ये शक्य नाही.\n✗ lambda मध्ये return लिहिणे — lambda मध्ये return लिहू नये. expression चा निकाल आपोआप return होतो; return लिहिल्यास SyntaxError येते.\n✗ गुंतागुंतीचे लॉजिक lambda मध्ये — बरेच conditions, loops, अनेक ओळी असतील तर lambda वाचणे कठीण होते. अशा कामासाठी def functionच योग्य — वाचकाला काम कळते.\n✗ print सारखे विधान lambda मध्ये घेणे — print हे विधान आहे, expression नाही. lambda चा उद्देश निकाल देणे, छापणे नाही.\nकोणते काम lambda ला योग्य आणि कोणते def ला हे लक्षात आले तर चुका आपोआप कमी होतात. त्रुटी आल्यावर संदेश वाचा — त्रुटी lambda च्या expression मर्यादेचीच आठवण करतात.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "lambda मध्ये फक्त एक expression असतो — अनेक वाक्ये नसतात. expression चा निकाल आपोआप return होतो; म्हणून return लिहणे गरजेचे नाही.\ndef मध्ये जटिल तर्क, loops, conditions असू शकतात; ते lambda मध्ये शक्य नाही. म्हणून def नियमित function, lambda एका ओळीतील अपवाद.\nlambda ही नाव नसलेली, expression आधारित, एक-ओळीची function आहे. कामाच्या ठिकाणी ती त्वरित लागू होते — sort/filter/map च्या argument मध्ये.\nसरावात हेच ठरवा: लहान, एक expression मध्ये बसणारे काम lambda ने; मोठे, पुनर्वापराचे, जटिल काम def ने. नोंदींचा सार हाच आहे.",
      },
    ],
    practiceQuestions: [
      "lambda म्हणजे काय?",
      "lambda मध्ये return लिहितात का?",
      "sorted() मध्ये key काय करतो?",
      "filter सह 10 पेक्षा मोठ्या संख्या काढा",
    ],
    quiz: [
      {
        question: "lambda मध्ये expression किती?",
        options: ["अनेक", "एक", "दोन", "काहीच नाही"],
        correct: 1,
      },
      {
        question: "lambda नाव असतं का?",
        options: ["हो", "नाही (anonymous)", "कधीकधी", "काल्पनिक"],
        correct: 1,
      },
      {
        question: "lambda चा निकाल मिळतो कसा?",
        options: ["return ने", "expression ने", "yield ने", "print ने"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "lambda वापरून map सह संख्यांच्या list चे वर्ग (squares) print करा.",
      starterCode: `nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, nums))
print(squares)`,
      expectedOutput: "[1, 4, 9, 16, 25]",
    },
    interviewQuestions: [
      "lambda vs def फरक?",
      "lambda कुठे वापरतात (map/filter/sorted)?",
      "lambda मध्ये assignments शक्य का नाही?",
    ],
    related: ["python-functions", "python-functions-scope", "python-list-comprehensions"],
    prev: "python-functions-scope",
    next: "python-recursion",
  },

  {
    slug: "python-recursion",
    categoryId: "python",
    title: "Recursion",
    marathiTitle: "Recursion — स्वतःला बोलावणे",
    level: "intermediate",
    minutes: 15,
    summary: "Function स्वतःला बोलावते — मोठ्या problems लहान होऊन सुटतात.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "recursion म्हणजे काय?",
        content: "जेव्हा function स्वतःलाच हाक मारते तेव्हा त्या पद्धतीला recursion म्हणतात. प्रत्येक call मध्ये समस्या लहान होत जाते; लहान समस्येचे उत्तर मिळताच मोठ्या समस्येचे उत्तरही तयार होते. शेवटी एक base case function ला थांबवायचा संकेत देतो.\nमॅट्रीओश्का बाहुल्यांचे उदाहरण घ्या — मोठी बाहुली आत लपवते, प्रत्येक आतली बाहुली लहान होत जाते. सर्वात आतली बाहुली सरळ उघडते; तसाच recursion मध्ये सर्वात लहान समस्येचे उत्तर सरळ मिळते आणि उत्तर वरती पाठवले जाते.\nसंगणक प्रत्येक call ची कामाची स्थिती जपतो. लहान call संपल्यावर मागील call पुढे सरकतो. प्रत्येक स्तर स्वतःच्या मूल्यांवर काम करतो आणि निकाल वरती पाठवतो — म्हणून एकाच function च्या रूपात अनेक स्तर एकत्र काम करतात.\nहे उलगडणे गोंधळ नाही — प्रत्येक स्तर नियम सारखा पाळतो. सुरुवातीला थोडा विचित्र वाटते; उदाहरणे पुन्हा पुन्हा तपासून मनात बसवा.",
      },
      {
        title: "Syntax: base case आणि recursive call",
        content: "recursion ची रचना नेहमी तीन भागात बसते: def ने function ची सुरुवात; आधी base case तपासा — ती स्थिती सत्य असेल तर थेट निकाल द्या; नाही तर लहान call करा — तेच function कमी मूल्याने हाका.\nखाली factorial पहा. factorial(n) = n × factorial(n - 1). base case जेव्हा n <= 1 तेव्हा उत्तर 1 सरळ. factorial(5) = 5 × 4 × 3 × 2 × 1 = 120 — हा output येतो.\nपहिल्यांदा फक्त def आणि base case लिहा, काम तपासा; शेवटी लहान call जोडून पुन्हा चालवा. अशा पायरी-पायरी बदलांनी चूक झाली तर कोणती ओळ जबाबदार ते लगेच कळते.\nmहङ्ही पाळा: base case आधी आणि नंतर return. निकाल येण्याच्या प्रत्येक मार्गात return असले पाहिजे — थांबण्याकरिता पण निकाल देण्याकरिताही.",
        code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))   # 5*4*3*2*1`,
        codeLanguage: "python",
        output: `120`,
      },
      {
        title: "काम कसे चालते? factorial चा मागोवा",
        content: "factorial(3) म्हणजे 3 गुणिले factorial(2); factorial(2) म्हणजे 2 गुणिले factorial(1); factorial(1) हे base case असल्याने थेट 1 देते.\nनिकाल मागासलेल्या क्रमाने परत येतात: 1, नंतर 2×1 = 2, नंतर 3×2 = 6. हा परतीचा क्रमच recursion चा गाभा आहे.\nfactorial(5) साठी हेच साखळीत सांगा: 5 गुणिले factorial(4), पुन्हा 4 गुणिले factorial(3), असे 1 पर्यंत; नंतर 1, 2, 6, 24, 120 असा निकाल मागे येतो. प्रत्येक परतीचा निकाल पुढील गुणाकारात वापरला जातो.\nहेच चक्र पुढील countdown मध्ये print द्वारे दिसेल — फरक एवढाच: factorial मूल्ये जोडून गुणते, countdown संदेश छापतो.",
      },
      {
        title: "countdown: प्रत्येक थर छापत जाणे",
        content: "countdown function प्रत्येक print नंतर लहान call करते: n छापा, मग countdown(n - 1) हाका. base case n <= 0 झाल्यावर \"बूम!\" छापून function थांबते.\ncountdown(3) ची चालणी: आधी 3 छापले, मग 2, मग 1, शेवटी बूम! — output मध्ये 3, 2, 1, बूम! अशा चार ओळी दिसतात.\nप्रत्येक print हा एक नवीन स्तर दाखवतो आणि त्या स्तराचा call संपल्यावर मागील स्तर पुढे सरकतो. लहान इनपुटवर हा क्रम नेहमी स्पष्ट दिसतो — येथूनच recursion चे आतून होणारे काम ओळखता येते.\nलक्षात ठेवा: countdown मध्ये return निकाल देत नाही — फक्त काम संपवते. recursion मध्ये return कधी मूल्यासाठी, कधी थांबण्यासाठी वापरले जाते.",
        code: `def countdown(n):
    if n <= 0:
        print("बूम!")
        return
    print(n)
    countdown(n - 1)

countdown(3)`,
        codeLanguage: "python",
        output: `3
2
1
बूम!`,
      },
      {
        title: "वास्तविक उदाहरण: फोल्डर रचना शोधणे",
        content: "फोल्डरमधील फाइल्स मोजणे हे recursion चे उत्तम वास्तविक उदाहरण आहे. फोल्डरमध्ये उपफोल्डर, त्यात आणखी उपफोल्डर — ही रचना झाडासारखी आहे आणि प्रत्येक फोल्डरवर function स्वतःला बोलावून प्रवास करते.\nखालील count_files function प्रत्येक फोल्डरचे नाव छापते आणि मग त्याच्या प्रत्येक उपफोल्डरवर (a, b) पुन्हा स्वतःलाच हाक मारते. depth हा इंडेंटचा स्तर दर्शवतो — म्हणून output मध्ये प्रत्येक खोलीचे नाव ठिकाणांसह दिसते.\nbase case depth >= 3 झाल्यावर function थांबते — खोल जाण्याची मर्यादा. म्हणून output मध्ये तिन्ही स्तर दिसतात — माझा_फोल्डर, मग a/b, मग त्या खाली आणखी.\nमेनू प्रणाली, प्रोजेक्ट फाइल्स, कुटुंबवृक्ष, search आणि backup या सर्वांमध्ये झाडासारखी रचना सापडते — त्यात recursion नैसर्गिकरीत्या बसते.",
        code: `def count_files(folder, depth=0):
    if depth >= 3:
        return
    print("  " * depth + "📁 " + folder)
    subs = [folder + "/a", folder + "/b"]
    for sub in subs:
        count_files(sub, depth + 1)

count_files("माझा_फोल्डर")`,
        codeLanguage: "python",
        output: `📁 माझा_फोल्डर
  📁 माझा_फोल्डर/a
    📁 माझा_फोल्डर/a/a
    📁 माझा_फोल्डर/a/b
  📁 माझा_फोल्डर/b
    📁 माझा_फोल्डर/b/a
    📁 माझा_फोल्डर/b/b`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ base case नसल्यास function कधीही थांबत नाही — तेव्हा संगणक RecursionError दाखवतो आणि काम थांबते. प्रत्येक recursion मध्ये base case आवश्यक आहे हा पहिला नियम.\n✗ base case ठीक असला तरी लहान call मूल्य कमी करत नसल्यास function अडकतो — उदा. call नेहमी तेच मूल्य दिले तर स्तर वाढत नाहीत. मूल्य कमी होत आहे याची खात्री करा.\n✗ base case नंतर return न सोडणे — कुठल्याही मार्गाने function निकाल/ठिकाण गाठले पाहिजे. उदाहरणार्थ जर base case फक्त print करते आणि return करत नाही, तर पुढचे गुणाकार चालत राहतात.\n✗ साधी loop पुरेशी असेल तिथे recursion वापरणे — प्रत्येक call वेळ आणि stack घेतो; खोल recursion मध्ये काम हळू आणि memory जास्त लागते. साधे काम loop ने करा; रचना झाडासारखी असेल तेव्हाच recursion.\nत्रुटी संदेश आल्यावर traceback ची शेवटची ओळ नेमकी ठिकाण दाखवते — ती वाचल्यावर समस्या सापडणे सोपे होते.",
      },
      {
        title: "Interactive: Fibonacci मालिका",
        content: "Fibonacci मालिकेत प्रत्येक संख्या मागील दोनची बेरीज असते — 0, 1, 1, 2, 3, 5, 8 असे क्रम पुढे सरकतो. interactive उदाहरणात function स्वतःला दोनदा बोलावते: fib(n - 1) आणि fib(n - 2) — दोन्हीची बेरीज नवीन संख्या देते.\nfor लूप range(7) मध्ये fib(0) ते fib(6) छापतो: 0 1 1 2 3 5 8. end=\" \" ने संख्या एकाच ओळीत येतात.\nप्रत्येक call पुन्हा दोन calls मध्ये विभागतो — हे झाड मोठे होते. लहान n साठी निकाल ठीक आहे, पण मोठ्या n साठी call संख्या वेगाने वाढते आणि काम हळू होते. म्हणून Fibonacci मोठ्या संख्येसाठी दुसऱ्या पद्धतीने लिहिला जातो.\nपहिल्या सात संख्येवर ठीक असल्याने इथले उदाहरण सोपे आहे — हेच झाड recursion ची शक्ती आणि मर्यादा दोन्ही दाखवते.",
        code: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

for i in range(7):
    print(fib(i), end=" ")
print()`,
        codeLanguage: "python",
        output: `0 1 1 2 3 5 8 `,
      },
      {
        title: "Mini Project: पहिल्या n संख्यांची बेरीज",
        content: "पहिल्या n संख्यांची बेरीज recursion वापरून करता येते. total function प्रत्येक वेळी लहान मूल्यावर स्वतःला बोलावते. base case n <= 0 झाल्यावर 0 परत करून थांबते; मागे फिरताना प्रत्येक n जोडला जातो.\ntotal(10) चा प्रवास: 10 + total(9); total(9) = 9 + total(8);... असे 0 पर्यंत. मागे फिरताना सर्व जोडणी होतात आणि उत्तर 55 येते — कारण 1+2+...+10 = 55.\nहा लहान project recursion चा पूर्ण अभ्यास साधतो: base case, लहान call, परतीचा क्रम. आधी छोट्या उदाहरणावर (उदा. total(5)) निकाल तपासा, मग मोठ्यावर जा.\nअशा तपासणीची सवय — लहान उदाहरण चालवून अपेक्षित निकाल पडताळा — recursion समजण्याची गती वाढवते.",
        code: `def total(n):
    if n <= 0:
        return 0
    return n + total(n - 1)

print(total(10))`,
        codeLanguage: "python",
        output: `55`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "प्रत्येक recursion मध्ये दोन गोष्टी काळजीपूर्वक ठेवा: आधार स्थिती नेमकी (base case) आणि मूल्य कमी होणारा call. दोन्ही असल्याशिवाय function अडकतो किंवा RecursionError देतो.\nआधार स्थिती नेहमी लहान उदाहरणावर तपासा — मग मोठे उदाहरण चालवा. बेरीज/फॅक्टोरियलच्या output प्रमाणे अपेक्षित निकाल आधी मोजून तापासा.\nप्रत्येक call वेळ आणि stack चा स्तर घेतो; Python ची सुमारे हजारो स्तरांची मर्यादा असते. मर्यादा संपली की error — म्हणून खोल recursion टाळा आणि सर्वात आधी विचार करा: साधा loop पुरेसा आहे का?\nझाडासारखी रचना (फोल्डर, मेनू, कुटुंबवृक्ष) सापडली तर recursion नैसर्गिक आहे; नाहीतर loop वापरून काम भागवा. योग्य साधन निवडणे हेच तत्त्व आयुष्यभर लागू राहील.",
      },
    ],
    practiceQuestions: [
      "base case म्हणजे काय?",
      "base case नसल्यास काय होतं?",
      "factorial(4) ची गणना सांगा",
      "fibonacci पहिल्या 10 संख्या print करा",
    ],
    quiz: [
      {
        question: "base case ची भूमिका?",
        options: ["वेगवान करणे", "थांबवणे", "सुरु करणे", "error"],
        correct: 1,
      },
      {
        question: "base case नसल्यास?",
        options: ["RecursionError", "None", "0", "loop"],
        correct: 0,
      },
      {
        question: "factorial(1) काय?",
        options: ["0", "1", "2", "error"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "recursion वापरून number च्या अंकांची बेरीज काढा (digit sum). उदा. 123 → 1+2+3 = 6.",
      starterCode: `def digit_sum(n):
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

print(digit_sum(123))
print(digit_sum(999))`,
      expectedOutput: "6\n27",
    },
    interviewQuestions: [
      "recursion vs loop कधी कोणता?",
      "base case नसल्यास काय होतं?",
      "ही recursion: function स्वतःला कशी बोलावते?",
    ],
    related: ["python-functions", "python-functions-scope", "python-while-loop"],
    prev: "python-lambda",
    next: "python-lists",
  },

  {
    slug: "python-lists",
    categoryId: "python",
    project: "todo-app",
    title: "Python Lists",
    marathiTitle: "Lists - एकात अनेक values",
    level: "intermediate",
    minutes: 14,
    summary: "List म्हणजे एकाच variable मध्ये अनेक values ठेवण्याचा मार्ग.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list म्हणजे काय?",
        content: "list म्हणजे अनेक values एकत्र ठेवणारा संग्रह. तो ordered आहे — प्रत्येक value ला स्थान (index) असते; आणि mutable आहे — वापरताना बदलता येतो. क्रमणे ठेवा (square brackets) मध्ये लिहून values स्वल्पविरामाने वेगळे करतात.\nप्रत्येक value ला index नावाचा क्रमांक असतो आणि तो 0 पासून सुरू होतो — पहिला घटक 0 वर, दुसरा 1 वर. list मध्ये संख्या, वाक्ये (string), boolean — सगळे प्रकार एकत्र मिसळतात.\nखरेदीच्या यादीची उपमा घ्या — कागदावर अनेक वस्तू क्रमाने लिहिल्या जातात; वरची वस्तू बदलता येते, नवीन जोडता येते, झालेले काम ओलांडता येते. अशी यादी म्हणजेच Python list. स्टेशनवरील गाड्यांची यादी, पुस्तकांचे शेल्फ क्रमांक, दूध/दुकानाची यादी — ही सर्व list ची रोजची उदाहरणे.\nlist वाचण्याचा थेट मार्ग index: fruits[0] म्हणजे पहिला घटक. for loop ने प्रत्येक घटक क्रमाने आणि while ने index वाढवत वाचता येते; in operator ने घटक सापडतो का ते तपासता येते.",
      },
      {
        title: "Syntax: index, negative index, slice",
        content: "फळांची यादी अशी लिहितात: fruits = [\"सफरचंद\", \"केळी\", \"द्राक्षे\"]. प्रत्येक value स्वल्पविरामाने विभागली जाते. नियम नेहमी आठवा: पहिला घटक index 0 वर असतो — एकापासून नव्हे.\nnegative index शेवटून मोजतो — [-1] शेवटचा घटक, [-2] शेवटच्या आधीचा. तुकडा (slice) काढताना colon वापरतात — fruits[1:] म्हणजे दुसऱ्या घटकापासून पुढे.\nखालील कोड चालवल्यास output मध्ये आधी संपूर्ण यादी, मग पहिला घटक (सफरचंद), शेवटचा घटक (द्राक्षे) आणि शेवटी तुकडा (दुसऱ्यापासून) दिसतो.\nsquare brackets ही list ची ओळख आहे — उघडा bracket, values, बंद bracket. रिकामी list [] किंवा list() लिहितात; dragged list घोषणा झाली की type([]) सांगते की ती list आहे. मोठी यादी वाचणाऱ्यासाठी प्रत्येक value वेगळ्या ओळीवर ठेवता येते.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
print(fruits)
print(fruits[0])     # पहिला
print(fruits[-1])    # शेवटचा
print(fruits[1:])    # तुकडा`,
        codeLanguage: "python",
        output: `['सफरचंद', 'केळी', 'द्राक्षे']
सफरचंद
द्राक्षे
['केळी', 'द्राक्षे']`,
      },
      {
        title: "मूल्ये बदलणे: update, append, sort",
        content: "list mutable आहे म्हणून पोझिशन निवडून मूल्य बदलता येते. marks[1] = 95 ने दुसरा गुण नव्याने ठरतो (update). append ने नवीन value शेवटी जोडते, sort ने यादी क्रमाने मांडते.\nखालील कोडात marks = [80, 91, 66] घेतली; marks[1] = 95 ने दुसरा गुण बदलला; append(70) ने शेवटी 70 जोडला; sort मुळे यादी चढत्या क्रमाने लागली — [66, 70, 80, 95].\nlist बदलण्याची साधने: index निवडून नवीन मूल्य (update), append (शेवटी), insert (मधल्या स्थानी), remove (नावाने काढणे), pop (शेवटचा किंवा निवडलेला), sort (क्रमवारी), reverse (उलट), extend (दुसरी यादी जोडणे).\nslice वर मूल्य दिल्यास अनेक घटक एकाच वेळी बदलतात, पण तुकडा काढल्यास नवीन यादी मिळते — मूळ यादी बदलत नाही. प्रत्येक बदल output मध्ये तपासत जा.",
        code: `marks = [80, 91, 66]
marks[1] = 95           # बदल
marks.append(70)        # जोड
marks.sort()            # क्रम लावा
print(marks)`,
        codeLanguage: "python",
        output: `[66, 70, 80, 95]`,
      },
      {
        title: "वास्तविक उदाहरण: उपस्थिती यादी",
        content: "विद्यार्थ्यांची उपस्थिती list मध्ये ठेवतात. for loop प्रत्येक विद्यार्थ्याला संबोधतो आणि len ने यादीतील विद्यार्थ्यांची एकूण संख्या मिळते — 3.\noutput मध्ये हजर: आदित्य, हजर: प्रिया, हजर: सोनाली अशा तीन ओळी आणि शेवटी 3 विद्यार्थी दिसते.\nएकाच भागात loop आणि len मिसळले — list वाचणे आणि मोजणे एकत्र. असा वास्तविक उपयोग दिवसभर उपस्थित नोंदवण्यात, खरेदीच्या यादीत आणि कामांच्या नियोजनात दिसतो.\nगुणांची सरासरी मोजायची असेल तर sum(marks) / len(marks) — list मधून मोजणीसाठी हीच पद्धत. कोणत्याही application मध्ये कुठेतरी list असतेच.",
        code: `students = ["आदित्य", "प्रिया", "सोनाली"]
for s in students:
    print("हजर:", s)
print(len(students), "विद्यार्थी")`,
        codeLanguage: "python",
        output: `हजर: आदित्य
हजर: प्रिया
हजर: सोनाली
3 विद्यार्थी`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ index 1 पासून सुरू समजणे — पहिला घटक नेहमी 0 वर असतो. marks[1] म्हणजे दुसरा गुण, पहिला नव्हे.\n✗ यादीच्या बाहेरचा index वापरणे — केवळ 5 घटकांच्या यादीत marks[5] दिल्यास IndexError येतो. len() मध्ये मर्यादा तपासा; शेवटपासून जायचे असल्यास negative index वापरा.\n✗ = ने कॉपी करणे — list2 = list1 लिहिल्यास दोन्ही एकाच data ला point करतात (reference); एकामध्ये बदल केला तर दुसऱ्यातही दिसतो. वेगळी प्रत हवी असेल तर [:] किंवा copy() वापरा.\n✗ loop चालवतानाच यादीतून घटक काढणे — काढल्यामुळे index वेगाने सरकतो आणि मधले घटक चुकून सुटतात. सुरक्षित मार्ग: प्रतिलिपीवर (copy वर) loop चालवा किंवा नवीन यादीत जमा करा, मूळ यादी शेवटी बदला.\n✗ वेगवेगळ्या प्रकारांच्या यादीवर sort करणे — number आणि string एकत्र असलेली यादी sort करता येत नाही (TypeError). म्हणून एकाच प्रकाराच्या याद्या sort करा.",
      },
      {
        title: "Interactive: सर्वात मोठा गुण शोधणे",
        content: "गुणांच्या यादीतून सर्वात मोठा गुण शोधण्याची पद्धत: पहिला गुण (marks[0] = 45) सुरुवातीला सर्वात मोठा मानून धरतो; मग for loop प्रत्येक गुणाशी तुलना करतो — मोठा गुण सापडला की largest बदलतो.\nचालणी: 78 आले तर 45 वरून 78; 92 आले तर 78 वरून 92; पुढे 60 आणि 51 मोठे नाहीत म्हणून तसेच राहतो. output: सर्वात जास्त: 92.\nअशा पद्धतीला scan म्हणतात — प्रत्येक घटकावरून जावून योग्य उत्तर निवडणे. विशिष्ट गुण शोधायचा असल्यासही हीच loop पद्धत वापरता येते.\nposition ला बरोबर हवे असेल तर enumerate ने क्रम आणि value दोन्ही मिळते — but simple उदाहरणात index कमी महत्त्वाचा. Loop हीच असा search करण्याची मूलभूत यंत्रणा आहे.",
        code: `marks = [45, 78, 60, 92, 51]

largest = marks[0]
for m in marks:
    if m > largest:
        largest = m
print("सर्वात जास्त:", largest)`,
        codeLanguage: "python",
        output: `सर्वात जास्त: 92`,
      },
      {
        title: "Mini Project: nested list ची बेरीज",
        content: "nested list म्हणजे list च्या आत list — डेटा मांडणीत प्रत्येक आतील यादी एक row सारखी असते. उदाहरणात data = [[1, 2], [3, 4], [5]] या तीन rows आहेत.\nfor loop बाहेरील प्रत्येक row उचलतो आणि sum(row) त्या आतील यादीची बेरीज करतो; total मध्ये सर्व rows च्या बेरीजा जमा होतात. एकूण = 1+2 + 3+4 + 5 = 15.\nहीच पद्धत अस्थिर data (varying size) वर काम करते — आतील याद्यांची लांबी कितीही असो. हेच nested list चे सौंदर्य: प्रत्येक आतील row वर for loop चालवता येतो.\nहा project list चा पूर्ण अभ्यास साधतो — नोंदी, loop, मोजणी. नवीन data घेऊन स्वतः तपासा; आतील याद्यांची खोली वाढली तर recursion ची आठवण येईल, पण एका स्तरासाठी साधा loop पुरेसा आहे.",
        code: `data = [[1, 2], [3, 4], [5]]
total = 0
for row in data:
    total += sum(row)
print("एकूण:", total)`,
        codeLanguage: "python",
        output: `एकूण: 15`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "indexing 0 पासून सुरू होते आणि negative index शेवटून मोजतो — [-1] शेवटचा, [-2] शेवटच्या आधीचा. slice काढताना शेवटचा index वगळला जातो (fruits[1:3] मध्ये index 1 आणि 2 येतात, 3 नाही).\nएका list मध्ये अनेक प्रकार एकत्र शक्य आहेत. len() मध्ये घटकांची एकूण संख्या मिळते; रिकाम्या यादीची len 0 असते. एक घटक असलेली यादी [5] अशी लिहिली जाते.\nappend आणि pop शेवटी जलद असतात; in operator घटक आहे का ते तपासतो; count आणि index ही शोधाची साधने; reverse जागेवर उलट करते; sort मूळ यादी बदलतो आणि sorted नवीन यादी देतो — हा फरक कायम ठेवा.\nनावाने list पाठवली तर reference जाते — म्हणून वेगळी प्रत हवी असेल तर [:] किंवा copy(). नवीन व्हेरिएबल नावे स्वच्छ ठेवा — वाचनीयता वाढते.",
      },
    ],
    practiceQuestions: [
      "List का mutable?",
      "last element कसा मिळवता?",
      "5 संख्यांची list — max आणि min काढा",
      "नावाची list बनवा, शेवटी 2 जोडा",
    ],
    quiz: [
      {
        question: "List मधील पहिल्या element चा index काय असतो?",
        options: ["1", "0", "-1", "start"],
        correct: 1,
      },
      {
        question: "List च्या शेवटी element जोडण्यासाठी कोणती method?",
        options: ["add()", "insert()", "append()", "push()"],
        correct: 2,
      },
      {
        question: "List mutable म्हणजे?",
        options: ["बदलता येते", "बदलत नाही", "sorted", "छोटी"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "नामांची list दिली — त्यातून ज्यांची लांबी 5 पेक्षा जास्त त्यांची नवीन list तयार करा आणि print करा.",
      starterCode: `names = ["आदित्य", "पु", "सोनाली", "रमेश", "कीरा"]
long_names = []
for name in names:
    if len(name) > 5:
        long_names.append(name)
print(long_names)`,
      expectedOutput: "['आदित्य', 'सोनाली', 'रमेश']",
    },
    interviewQuestions: [
      "list vs tuple?",
      "list कशी copy करता — slicing कशी?",
      "indexing 0 पासून का?",
    ],
    related: ["python-list-methods", "python-list-comprehensions", "python-functions"],
    prev: "python-recursion",
    next: "python-list-methods",
  },

  {
    slug: "python-list-methods",
    categoryId: "python",
    title: "List Methods",
    marathiTitle: "List मधील सामान्य methods",
    level: "intermediate",
    minutes: 13,
    summary: "append, insert, remove, pop, sort — list साठी तयार functions.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list methods म्हणजे काय?",
        content: "method म्हणजे list शी जोडलेली तयार क्रिया. तिला list च्या नावासह बोलावतात — उदा. list.append(x). जोडणे, काढणे, शोधणे, क्रमवारी अशी कामे हातात हात करायला लागत नाहीत; method ने ती एका ओळीत होतात — म्हणून कोड लहान आणि स्पष्ट राहतो.\nappend सर्वात वापरला जाणारा method आहे — तो मूल्य यादीच्या शेवटी जोडतो. शेवटी जोडणाऱ्या अशा रचनेला stack म्हणतात; records आणि लॉग साठवण्यास ती नैसर्गिक आहे — प्रत्येक नवीन data मागे येतो.\nटोकरीची उपमा सोपी आहे: टोकरीत वस्तू टाकणे म्हणजे append, टोकातून वस्तू काढणे म्हणजे pop, नावाने काढणे म्हणजे remove, क्रम लावणे म्हणजे sort, वस्तू कुठे आहे ते list मधून पाहणे म्हणजे index आणि कितीदा आहे म्हणजे count.\nकाही methods निकाल परत करतात (जसे count, index) आणि काही फक्त यादीत बदल करतात (जसे sort, append) — हा फरक output मध्ये प्रत्यक्ष दिसतो.",
      },
      {
        title: "Syntax: append, insert, sort, count, index",
        content: "सामान्य रूपरेषा: list.navya_method(मूल्य). append शेवटी जोडते, insert स्थान सांगून घालते (a.insert(0, 0) म्हणजे सुरुवातीला), sort क्रम लावतो, count मूल्य कितीदा आहे त्याची संख्या देते आणि index मूल्य कोणत्या स्थानावर आहे ते सांगते.\nखालील कोडात a = [3, 1, 2] घेतले; append(4) ने शेवटी 4 जोडला, insert(0, 0) ने सुरुवातीला 0 घातला, sort ने चढता क्रम लावला — [0, 1, 2, 3, 4].\noutput मध्ये तिन्ही निकाल दिसतात: क्रमवार यादी, 2 ची संख्या 1 (count) आणि 3 चे स्थान index 3 (index).\na.insert(len(a), x) म्हणजे शेवटी घालणे — तेच append सारखे. म्हणून शेवटी append वापरा, मध्यभागी insert. मूल्य यादीत नसल्यास index ValueError देते — म्हणून संशय असल्यास आधी in ने तपासा.",
        code: `a = [3, 1, 2]
a.append(4)          # [3,1,2,4]
a.insert(0, 0)       # [0,3,1,2,4]
a.sort()             # [0,1,2,3,4]
print(a)
print("2 ची संख्या:", a.count(2))
print("3 कोणत्या index वर:", a.index(3))`,
        codeLanguage: "python",
        output: `[0, 1, 2, 3, 4]
2 ची संख्या: 1
3 कोणत्या index वर: 3`,
      },
      {
        title: "काढणे: remove आणि pop मध्ये फरक",
        content: "remove नावाने घटक काढतो आणि काही परत करत नाही; pop index देऊन घटक काढतो आणि काढलेला घटक परत करतो. append नंतर pop म्हणजे उलट क्रम — शेवटचा घटक आत येतो आणि शेवटचाच बाहेर जातो.\nफळांच्या यादीतील कोड पहा: remove(\"केळी\") मध्यल्या घटकाला नावाने काढतो; pop() ने शेवटचा घटक (द्राक्षे) काढून तोच last मध्ये धरला जातो. output: यादी [सफरचंद] आणि काढलेला: द्राक्षे.\nकाढण्याआधी तपासा — यादीत नसलेला item remove केल्यास ValueError येते. pop साठीही index नक्की संख्येच्या आत असावा; pop(0) पहिला घटक देते — अशी प्रथम-ये-प्रथम-जा रचना queue म्हणतात, पण pop(0) मोठ्या यादीत संथ असू शकतो.\nकाय काढायचे ते आधी ठरवा: नाव माहीत असेल तर remove, शेवटचा/स्थान माहीत असेल तर pop. negative index सह pop चालते — pop(-1) म्हणजे शेवटचा.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
fruits.remove("केळी")      # नावाने काढा
last = fruits.pop()        # शेवटचा काढा
print(fruits)
print("काढलेला:", last)`,
        codeLanguage: "python",
        output: `['सफरचंद']
काढलेला: द्राक्षे`,
      },
      {
        title: "वास्तविक उदाहरण: विद्यार्थी यादी व्यवस्थापन",
        content: "विद्यार्थ्यांची उपस्थिती यादीत व्यवस्थापित करतो. roll मध्ये प्रिया आणि आदित्यसह चार नावे आहेत. count(\"प्रिया\") ने प्रिया कितीदा आहे ते मोजले — उपस्थित: 2.\nroll.sort() ने नावे अक्षरक्रमाने लागली: आदित्य, प्रिया, प्रिया, सोनाली. मग in operator ने आदित्य आहे का ते तपासले आणि remove ने त्याला यादीतून हटवले — आदित्य हटवला.\nअसा वापर शाळेच्या कार्यालयात रोज होतो: नवीन मागणी append ने भरते, झालेली मागणी remove/pop ने काढते, क्रमवारी sort ने साधते, कोणती वस्तू कितीदा विकली हे count देते.\nमहत्त्वाची सवय: काढण्याआधी in ने तपासा. येथे आदित्य होता म्हणून remove सुरक्षित चालला — नसताना शक्य असलेली ValueError ही पद्धत टाळते.",
        code: `roll = ["प्रिया", "सोनाली", "आदित्य", "प्रिया"]
print("उपस्थित:", roll.count("प्रिया"))
roll.sort()
print("क्रमवार:", roll)
if "आदित्य" in roll:
    roll.remove("आदित्य")
    print("आदित्य हटवला")`,
        codeLanguage: "python",
        output: `उपस्थित: 2
क्रमवार: ['आदित्य', 'प्रिया', 'प्रिया', 'सोनाली']
आदित्य हटवला`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ यादीत नसलेला item remove करणे — ValueError: list.remove(x): x not in list येतो. काढण्याआधी in operator ने तपासा — आधी तपास, मग remove.\n✗ रिकाम्या यादीवर pop करणे किंवा बाहेरच्या index वर pop करणे — IndexError: pop from empty list किंवा pop index out of range. len() कडे लक्ष ठेवा; शेवटचा घटक हवा असेल तर pop(-1) किंवा फक्त pop(). index 0 पासूनच मोजला — चुकीचा क्रम गोंधळ घालतो.\n✗ copy करताना = वापरणे — same मध्ये data share होतो; दोन्ही नावे एकाच यादीला point करतात. वेगळी प्रत हवी असेल तर [:] किंवा copy() वापरा.\n✗ वेगवेगळ्या प्रकारांच्या यादीवर sort करणे — संख्या आणि string एकत्र असल्यास TypeError येतो. एकाच प्रकाराची यादी sort करा.\n✗ index शोधताना मूल्य नसणे — index() काम करायला घटक असलाच पाहिजे; नसल्यास ValueError. मूल्य आहे का याची खात्री आधी in ने करा.",
      },
      {
        title: "Interactive: extend ने दोन याद्या जोडणे",
        content: "extend हा append पेक्षा वेगळा आहे. append संपूर्ण यादी एक घटक म्हणून शेवटी जोडते, पण extend दुसऱ्या यादीचे घटक वेगवेगळे काढून a मध्ये मिसळतो.\nखालील कोडात a = [1, 2] आणि b = [3, 4, 5]. a.extend(b) नंतर a मध्ये b चे सर्व घटक क्रमाने — output [1, 2, 3, 4, 5].\nदोन्ही methods चा फरक output मध्येच दिसतो: append दिल्यास result [1, 2, [3, 4, 5]] असे — एक nested यादी; extend दिल्यास घटक सपाट जोडले जातात.\ndata एकत्र करण्यासाठी extend योग्य. स्वतः नवीन याद्यांवर तपासा; a.clear() ने यादी रिकामी होते आणि len 0 येतो — हेही पडताळून पहा.",
        code: `a = [1, 2]
b = [3, 4, 5]
a.extend(b)
print(a)`,
        codeLanguage: "python",
        output: `[1, 2, 3, 4, 5]`,
      },
      {
        title: "sort vs sorted, reverse, copy",
        content: "sort() मूळ यादीतच क्रम लावते — मूळ बदलते; sorted() नवीन यादी देते — मूळ बदलत नाही. मूळ यादी जपायची असेल तर sorted वापरा किंवा आधी प्रत काढा.\nउतरत्या क्रमासाठी reverse=True — a.sort(reverse=True). key वापरून स्वतःचे नियम देता येतात — उदा. नावांची लांबी किंवा दुसऱ्या घटकानुसार क्रमवारी. reverse() जागेवरच क्रम उलट करते — मूळ यादी बदलते.\ncopy साठी [:] किंवा copy() — दोन्ही नवीन प्रत देतात. = ला कधीही copy समजू नका — ते तर reference देते.\nक्रमवारी आणि कॉपीचे हे नियम लक्षात ठेवा: बदल मूळात हवा तर method जागेवर चालवा (sort, reverse); मूळ जपायची असेल तर sorted असो वा copy — नवीन यादी घ्या.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "append शेवटी एक मूल्य जोडते, extend दुसऱ्या यादीचे घटक वेगवेगळे जोडते आणि insert स्थान सांगून घालते. clear सर्व घटक रिकामे करते.\nremove फक्त पहिली घटना काढतो — तोच घटक दोनदा असला तर दुसरा असाच राहतो. count संख्या आणि index first स्थान देते — दोन्ही शोधाची साधने.\nsorted() नवीन यादी देते, sort() मूळ बदलते; reverse() मूळ उलट करते. append आणि indexing जलद; यादी वाढली की काही operations संथ होऊ शकतात — हा तांत्रिक तपशील जाणून ठेवा.\nreverse आणि sort मूळ यादी बदलतात — मूळ जपायची असेल तर copy करून घ्या. slice ([:]) आणि copy() दोन्ही समान प्रत देतात — हेच धड्याचे मुख्य तत्त्व.",
      },
    ],
    practiceQuestions: [
      "append आणि extend फरक?",
      "remove vs pop फरक?",
      "sort() vs sorted() फरक?",
      "5 नावे — पहिली आणि शेवटची pop करा",
    ],
    quiz: [
      {
        question: "शेवटी item जोडणे?",
        options: ["append()", "insert()", "add()", "push()"],
        correct: 0,
      },
      {
        question: "नावाने item काढणे?",
        options: ["pop()", "remove()", "delete()", "drop()"],
        correct: 1,
      },
      {
        question: "शेवटचा item काढून मिळवणे?",
        options: ["remove()", "pop()", "del", "shift()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "क्रमवार न करता list मधून सर्व 'च्या' (dup) हटवा — फक्त पहिलीच मूल्ये ठेवा. नंतर क्रमवार लावा.",
      starterCode: `nums = [3, 1, 3, 2, 1, 4]
unique = []
for n in nums:
    if n not in unique:
        unique.append(n)
unique.sort()
print(unique)`,
      expectedOutput: "[1, 2, 3, 4]",
    },
    interviewQuestions: [
      "append vs extend?",
      "remove vs pop फरक?",
      "list.copy() कशासाठी?",
    ],
    related: ["python-lists", "python-tuples", "python-list-comprehensions"],
    prev: "python-lists",
    next: "python-list-comprehensions",
  },

  {
    slug: "python-list-comprehensions",
    categoryId: "python",
    title: "List Comprehensions",
    marathiTitle: "एका ओळीत list तयार करणे",
    level: "intermediate",
    minutes: 12,
    summary: "for loop चा एका ओळीत संक्षेपक form.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list comprehension म्हणजे काय?",
        content: "list comprehension म्हणजे नवीन list एकाच ओळीत बनवण्याची रचना — ती for loop चा संक्षेपक form आहे. सूत्र: [expression for item in iterable if condition]. expression प्रत्येक item वर चालतो, iterable म्हणजे जिथून घटक येतात आणि condition ऐच्छिक असते — असेल तर ते पास होणाऱ्या item चाच समावेश होतो.\ncomprehension चा उगम loop मध्ये आहे — loop चालतो आणि निकाल वेगळ्या यादीत जमा करतो; comprehension तोच निकाल थेट एका expression मध्ये देतो. नवीन list मिळते, मूळ iterable बदलत नाही.\nउपमा किचनमधली: मसाल्यांच्या पिशवीतील प्रत्येक पिशवी तपासा आणि निवडलेलेच मसाले नवीन पिशवीत घ्या — निवड करणे म्हणजे filter, नवीन पिशवी म्हणजे नवीन list. मूळ पिशवी (मूळ list) तशीच राहते.\nही रचना Pythonic मानली जाते — समान काम एका ओळीत, अनेकदा साध्या loop पेक्षा वेगवान. प्रत्येक उदाहरण output सोबत तपासा — output मधूनच समज पक्की होते.",
      },
      {
        title: "Syntax: expression, iterable, condition",
        content: "सूत्राचा क्रम महत्त्वाचा: आधी expression (item काय होऊन जाईल), मग for item in iterable (कुठून घटक येतात), मग, हवे असल्यास, if condition (अट शेवटी). square brackets मधील हीच रचना संपूर्ण loop सांगते.\nखालील कोडात nums वर squares = [n * n for n in nums] — प्रत्येक n चा वर्ग. evens = [n for n in nums if n % 2 == 0] — अट समाधान करणाऱ्या युग्म संख्याच.\noutput दोन ओळी: squares [1, 4, 9, 16, 25] आणि evens [2, 4]. expression मध्ये function किंवा गणित काहीही लिहिता येते.\nif असेल तरच item list मध्ये येतो; अट नसली (किंवा असली) तर expression प्रत्येक item वर चालतो. हा नियम output मध्ये तपासून समजून घ्या.",
        code: `nums = [1, 2, 3, 4, 5]
squares = [n * n for n in nums]
print(squares)

evens = [n for n in nums if n % 2 == 0]
print(evens)`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16, 25]
[2, 4]`,
      },
      {
        title: "लूप प्रमाणे तुलना",
        content: "समान काम दोन रीतीने: दीर्घ मार्ग loop ने — रिकामी res यादी, for लूप प्रत्येक i वर i * 10 res मध्ये जमा करतो. comprehension एकाच ओळीत: res2 = [i * 10 for i in range(5)].\nदोन्हीपासून परिणाम सारखे — res == res2 ची तुलना True देते आणि res = [0, 10, 20, 30, 40] छापले जाते.\nloop मध्ये तीन ओळी, comprehension मध्ये एक ओळ — कोड वेळ आणि जागा वाचवतो. पण प्रत्येक ठिकाणी comprehension घालू नका — साधा loop वाचायला सोपा असतो आणि मोठा comprehension गुंतागुंतीचा होतो.\nनिवड करताना तोल ठेवा: सरळ expression साठी comprehension; अनेक पायऱ्यांच्या कामासाठी loop. दोन्ही पद्धती एकाच निकालाकडे जातात — हा फरक जाणूनच योग्य निवड करा.",
        code: `# दीर्घ मार्ग
res = []
for i in range(5):
    res.append(i * 10)

# comprehension
res2 = [i * 10 for i in range(5)]

print(res == res2, res)`,
        codeLanguage: "python",
        output: `True [0, 10, 20, 30, 40]`,
      },
      {
        title: "वास्तविक उदाहरण: किंमत दुप्पट करणे",
        content: "दुकानातील प्रत्येक वस्तूची किंमत दुप्पट करायची आहे. doubled = [p * 2 for p in prices] — prices मधील प्रत्येक p दुप्पट होऊन नवीन यादीत येतो: [20, 40, 60].\nमग उच्च किंमतीच फिल्टर करतो: high = [p for p in doubled if p > 25] — 25 पेक्षा मोठे फक्त. output [40, 60].\nexpression आणि filter दोन्ही एका ओळीत — expression आधी, condition शेवटी. मूळ किंमती बदलत नाहीत; नवीन याद्या तयार होतात.\nशेकडो वस्तूंवर हेच काम एका ओळीत होते — software मध्ये किंमत सुधारणा, report फिल्टरिंग अशी कामे comprehension ने वेगवान होतात. नवीन data घेऊन स्वतः तपासा.",
        code: `prices = [10, 20, 30]
doubled = [p * 2 for p in prices]
print(doubled)

# 25 पेक्षा मोठे फक्त
high = [p for p in doubled if p > 25]
print(high)`,
        codeLanguage: "python",
        output: `[20, 40, 60]
[40, 60]`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ क्रम उलट ठेवणे — item आधी आणि condition नंतर लिहायचा, उदा. [item for item in seq if अट]. expression आधी आणि if शेवटी ठेवण्याचा क्रम नेहमी पाळा.\n✗ condition विसरणे — जर फिल्टर हवे असेल तर if जोडायलाच हवे; विसरल्यास सर्व घटक येतात आणि चूक output मध्ये लगेच दिसते.\n✗ मूळ list बदलते का असे समजणे — comprehension नवीन list बनवते, मूळ iterable बदलत नाही. मूळ हवा असेल तर स्वतंत्र ठेवा.\n✗ नेस्टेड comprehension अती खोल करणे — loop आत loop लिहिणे काही वेळा काम करते, पण दोन तीन पेक्षा अधिक खोली गोंधळ घालते आणि वाचता येत नाही.\n✗ error आल्यावर संदेश न वाचणे — त्रुटी आली तर संदेश वाचा आणि ओळ क्रमांक पहा; expression ची चूक, अनोळखी नाव, अट चुकल्यास SyntaxError किंवा NameError येते.",
      },
      {
        title: "Readability: कधी comprehension नको",
        content: "comprehension हे साधन आहे, उद्देश नाही. जेव्हा एका ओळीत जटिल लॉजिक किंवा अनेक conditions बसवतो तेव्हा कोड वाचता येत नाही — अशा वेळी for loop वापरून काम स्पष्ट करा; वाचण्यासाठी loop नेहमी सुरक्षित.\nअनेक घटकांवर बदल, बदलत्या अटी, बहु-स्तरीय गणने असतील तर comprehension ऐवजी स्वतंत्र loop आणि res list अधिक स्वच्छ राहते. हीच readability ची तत्त्व आहे — कमी ओळी हेच सर्व काही नव्हे.\nवाचक अडचणीने कोड उलगडत असेल तर त्यासाठीची मेहनत चुकीची आहे का ते विचारा. सोपा loop सुद्ध तोच निकाल देतो — निर्णयाचा आधार नेहमी स्पष्टता असू द्या.\nनियम सहज सांगता: expression एका ओळीत स्पष्ट बसत असेल तर comprehension वापरा; अन्यथा loop. output ने नेहमी पडताळा करा.",
      },
      {
        title: "Interactive: मराठी अक्षरांवर upper",
        content: "word = \"मराठी\" हे शब्द; upper = [ch.upper() for ch in word] प्रत्येक अक्षर घेऊन upper लावते आणि नवीन यादी बनवते.\nछान निरीक्षण: मराठी अक्षरांना upper ने बदल होत नाही — कारण मराठी लिपीत छोटे-मोठे अक्षर असा भेद नाही. त्यामुळे output हेच अक्षरे वेगवेगळ्यांनी — ['म', 'र', 'ा', 'ठ', 'ी'].\nइंग्रजी अक्षरांवर हेच करून पहा — upper ने a, b, c असे A, B, C होतात. प्रतिस्थापन मूल्याचे वर्तन (uppercase/lowercase) comprehension च्या expression मध्ये कसे बसवले जाते ते इथे दिसते.\nदुसरा शब्द निवडून किंवा lower() वापरून ही रचना स्वतः तपासा. प्रत्येक वेळी output पहा — हा फेरफार शिकण्याचा मार्ग आहे.",
        code: `word = "मराठी"
upper = [ch.upper() for ch in word]
print(upper)`,
        codeLanguage: "python",
        output: `['म', 'र', 'ा', 'ठ', 'ी']`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "comprehension चे तीन भाग: expression, for loop आणि कधीकधी if. क्रम ठरलेला असतो — expression आधी, if शेवटी. हीच Pythonic रचना म्हणून ओळखली जाते.\nमूळ iterable बदलत नाही — नवीन list मिळते. filter करण्यासाठी if वापरा; condition नसेल तर प्रत्येक घटक येतो.\nप्रत्येक कोड output सोबत तपासा — आधी अपेक्षित निकाल मनात लिहा, मग output शी जुळवा. जुळले तर comprehension बरोबर आहे.\nजटिल झाल्यास वाचनीय ठेवा — साध्या loop वर तोल राखा कारण readability आधी, संक्षेपपणा नंतर. हेच धड्याचे शेवटचे शब्द.",
      },
    ],
    practiceQuestions: [
      "comprehension चा syntax?",
      "if कुठे लिहितात?",
      "1-10 मधले squares नवीन list मध्ये काढा",
      "खालच्या वयाची list filter करा [x for x in ages if x >= 18]",
    ],
    quiz: [
      {
        question: "comprehension मध्ये if कोठे?",
        options: ["सुरुवातीला", "शेवटी", "मध्ये", "नाहीच"],
        correct: 1,
      },
      {
        question: "[n*2 for n in range(4)] किंमत?",
        options: ["[0,2,4,6]", "[1,2,3,4]", "[2,4,6]", "[0,1,2,3]"],
        correct: 0,
      },
      {
        question: "comprehension नवीन काय तयार होतं?",
        options: ["tuple", "list", "dict", "set"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "1 ते 30 मधले फक्त 3 ने भाग जाणारे संख्या squares सह तयार करा.",
      starterCode: `result = [x * x for x in range(1, 31) if x % 3 == 0]
print(result)`,
      expectedOutput: "[9, 36, 81, 144, 225, 324, 441, 576, 729, 900]",
    },
    interviewQuestions: [
      "comprehension कधी टाळावं?",
      "expression+loop+if structure सांगा?",
      "dict comprehension शक्य का?",
    ],
    related: ["python-lists", "python-lambda", "python-list-methods"],
    prev: "python-list-methods",
    next: "python-tuples",
  },

  {
    slug: "python-tuples",
    categoryId: "python",
    title: "Tuples",
    marathiTitle: "Tuples — बदल न होणारी list",
    level: "intermediate",
    minutes: 12,
    summary: "Tuple immutable collection — list सारखी पण बदलता येत नाही.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "tuple म्हणजे काय?",
        content: "tuple ही list सारखीच ordered collection आहे — अनेक values एकत्र ठेवते आणि प्रत्येक value ला क्रम असतो. पहिला आणि मुख्य फरक हाच: tuple immutable आहे — तिचे items बदलता येत नाहीत. कंस () मध्ये लिहितात — ती = (1, 2, 3) किंवा t = (\"प्रिया\", 25), मूल्ये comma ने वेगळी करतात.\nहेच तत्त्व वास्तविक जीवनात दिसते: जन्मतारीख कधी बदलत नाही, नोंदणी क्रमांक, आधार क्रमांक, पेन्शन योजना — अपरिवर्तनीय माहिती. पत्ता बदलता येतो (list), पण जन्मतारीख नाही (tuple). स्थिरता = tuple, अस्थिरता = list.\nइम्युटेबिलिटीचे फायदे: असे data सुरक्षित राहतो — कधीही बदलणार नाही. गणना वेगाने होते आणि memory कमी लागते, कारण रचना स्थिर असते. पण बदल हवा असल्यास list वापरा — दोन्ही कशासाठी हे ठरवणे हाच या धड्याचा गाभा.\nतुमची ID ची बाब, शाळेचा दाखला, सील बंद कळस — अशी स्थिर नोंद म्हणजेच tuple ची प्रतिमा. सुरक्षित data ला हीच युक्ती योग्य.",
      },
      {
        title: "Syntax: कंस, single-item, index, unpacking",
        content: "tuple अशी लिहितात: t = (1, 2, 3). एकाच item ची tuple हवी असेल तर comma अपरिहार्य आहे — t = (5,); comma चुकल्यास मूल्यांकन int होते (type((5)) <class 'int'>). रिकामी tuple () लिहितात.\nindex ने मूल्ये मिळतात — point[0] म्हणजे 3. unpacking ही खास सवय: name, age = (\"प्रिया\", 25) म्हणजे पहिले मूल्य name ला आणि दुसरे age ला जाते.\nखालील कोड चालवल्यास आधी point[0] = 3, मग संपूर्ण tuple (3, 5), शेवटी unpacking नंतरचे प्रिया 25 — असे तीन निकाल दिसतात.\nकंसात गुठी म्हणजे tuple — index ने position, unpacking ने नावे ही तिची दोन शस्त्रे. structured data (जसे coordinates, config) साठी हीच रचना.",
        code: `point = (3, 5)
print(point[0])
print(point)

name, age = ("प्रिया", 25)   # unpacking
print(name, age)`,
        codeLanguage: "python",
        output: `3
(3, 5)
प्रिया 25`,
      },
      {
        title: "immutable — बदल शक्य नाही",
        content: "t[0] = 9 असे करण्याचा प्रयत्न केला तर TypeError: 'tuple' object does not support item assignment येतो. ही मर्यादा हीच तिची सुरक्षा — एकदा ठेवलेले बदलता येत नाही, सुरक्षित डेपॉझिट सारखे.\nconfig = (\"localhost\", 3000) अशी settings tuple मध्ये ठेवली तर host आणि port कायम स्थिर राहतात — कुणी चुकून बदलू शकत नाही. संगणक तपासणी करताना हीच हमी मिळते.\nx, y = 10, 20 हे unpacking; print(x, y) मध्ये 10 20 दिसते. tuple चे मूल्य वाचणे वेगवान; बदल करणे अशक्य.\nबदल करायचा असेल तर तीच data नवीन tuple करून ठेवा — पण मग त्रासाचे. ही मर्यादा स्वीकारली, तर सुरक्षितता दुहेरी मिळते. बदल हवा असल्यास list वापरा.",
        code: `config = ("localhost", 3000)   # host, port
# config[0] = "x" → TypeError

x, y = 10, 20
print(x, y)`,
        codeLanguage: "python",
        output: `10 20`,
      },
      {
        title: "tuple विरुद्ध list: कधी कोणते?",
        content: "दोन्ही ordered collections आहेत; फरक एकटाच — mutable vs immutable. list मध्ये append/remove/badl करता येते; tuple मध्ये नाही.\nबदल हवा (याद्या, छान data, records जमा होत असतील) — list वापरा. बदल नको (config, नोंदणी, coordinates, function चे निकाल) — tuple वापरा.\ntuple कडून गणना वेगाने होते कारण रचना स्थिर; list कडून लवचिकता मिळते. याच वेळी tuple ही hashable आहे — पुढील धड्यांत set मध्ये item म्हणून आणि dict चा key म्हणून वापरता येणारी ही खासियत आहे (list ही नाही).\nअनुभवाने निवडतील: कायमस्वरूपी, वाचण्यासाठी data = tuple; वाढणारा, बदलणारा data = list. कोडमध्ये हेतू इतकाच स्पष्ट होतो — वाचकाला कळते की हे बदलण्यासारखे नाही.",
      },
      {
        title: "वास्तविक उदाहरण: function मधून अनेक निकाल",
        content: "function एकाच वेळी अनेक मूल्ये परत करू शकते — return (min(nums), max(nums)) असे tuple ने. min_max function या एका call मध्ये किमान आणि कमाल दोन्ही देते.\nlow, high = min_max([4, 9, 1, 7]) unpacking ने पहिले निकाल low मध्ये आणि दुसरे high मध्ये. output: छोटी: 1, मोठी: 9.\nयेथे tuple चा मुख्य वापर उघड होतो — function कडून एकाच वेळी अनेक निकाल क्रमाने परत करायचे असतील तर tuple ही रचना सर्वमान्य. unpacking ने प्रत्येकाला वेगळे नाव मिळते.\nहीच देवाणघेवाण व्यवसायातही वापरली जाते — किंमत आणि वस्तू, नाव आणि वय, तापमानmin/max असे जोडलेले निकाल tuple मध्ये सुबक बसतात.",
        code: `def min_max(nums):
    return (min(nums), max(nums))

low, high = min_max([4, 9, 1, 7])
print(f"छोटी: {low}, मोठी: {high}")`,
        codeLanguage: "python",
        output: `छोटी: 1, मोठी: 9`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ single tuple मध्ये comma विसरणे — t = (5) लिहिल्यास ते tuple नाही, उगाच int होते (type int). एक item ची tuple हवी तर comma हवा: t = (5,). output किंवा type() ने तपासा.\n✗ tuple बदलण्याचा प्रयत्न — t[0] = 9 करताच TypeError येते. ही मर्यादा अपेक्षित आहे; बदल हवा असेल तर list वापरा किंवा नवीन tuple बनवा.\n✗ empty आणि single गोंधळणे — () रिकामी tuple; (5,) एक item ची tuple; कंसाचा फरक ओळखा. कंस असेल पण comma नाही तर tupleच नाही.\n✗ unpacking मूल्यांची संख्या जुळवणे — name, age = (\"प्रिया\", 25, \"कोल्हापूर\") केल्यास आधी खूप मूल्ये असल्याने ValueError: too many values to unpack येतो. नावांची संख्या tuple च्या मूल्यांशी जुळवा.\nचुकांची हीच रणनीती — comma चे महत्त्व, कंसाचा प्रकार, unpacking ची संख्या — तिन्ही तपासणे. चुका कमी केल्या तर मागील सवय घट्ट होते.",
      },
      {
        title: "Interactive: swap — मूल्ये बदलणे",
        content: "swap म्हणजे दोन variables ची मूल्ये आपसात बदलणे. tuple मुळे हे एकाच ओळीत होते: a, b = b, a. Python आधी उजवीकडील tuple (b, a) बनवते आणि मग unpacking ने a ला जुने b आणि b ला जुने a देते.\nखालील कोडात a = \"पहिला\" आणि b = \"दुसरा\"; swap नंतर a = \"दुसरा\" आणि b = \"पहिला\". output: दुसरा पहिला.\nपरंपरागत language मध्ये swap साठी तिसरा temporary variable लागतो; tuple unpacking ने तोच काम एका ओळीत. हीच tuple ची व्यावहारिक भेट आहे.\nस्वतः नवीन मूल्ये घेऊन (उदा. संख्या किंवा नावे) हा swap करून पहा — output उलट दिसेल आणि unpacking चा अर्थ पक्का होईल.",
        code: `a = "पहिला"
b = "दुसरा"
a, b = b, a
print(a, b)`,
        codeLanguage: "python",
        output: `दुसरा पहिला`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "tuple immutable असल्याने सुरक्षित आणि hashable आहे — म्हणून ती set मध्ये item म्हणून आणि dict चा key म्हणून वापरता येते (list नाही). हे उपयोग पुढील धड्यांत प्रत्यक्ष दिसतील.\ntuple unpacking सहज साधते — name, age = (\"प्रिया\", 25) सारखी नावे त्वरित मिळतात; function कडून multiple return (min, max) सारखे निकाल क्रमाने मिळतात.\nlist पेक्षा tuple lightweight — कमी memory आणि जलद access. config, coordinates, records सारखे कायमस्वरूपी data साठी ही रचना योग्य.\nimmutable म्हणजे हमी — कोडमध्ये tuple दिसली की वाचकाला कळते की हे data बदलणार नाही. अशी स्पष्टता कोड वाचनीय आणि bug-कमी बनवते.",
      },
    ],
    practiceQuestions: [
      "tuple आणि list मध्ये फरक?",
      "single-element tuple कसा लिहितात?",
      "a, b = b, a काय करतं?",
      "tuple ला why immutable हवं?",
    ],
    quiz: [
      {
        question: "tuple mutable का?",
        options: ["हो", "नाही", "कधीकधी", "नंतर"],
        correct: 1,
      },
      {
        question: "single tuple कसा लिहितात?",
        options: ["(5)", "(5,)", "[5]", "{5}"],
        correct: 1,
      },
      {
        question: "tuple मधून values वेगळे काढणं म्हणतात?",
        options: ["packing", "unpacking", "splitting", "breaking"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "चार (x, y) coordinates च्या tuple मधून, ज्यामध्ये x > y आहेत त्या print करा.",
      starterCode: `points = ((3, 5), (9, 2), (4, 4), (7, 1))
for x, y in points:
    if x > y:
        print(x, y)`,
      expectedOutput: "9 2\n7 1",
    },
    interviewQuestions: [
      "tuple vs list कधी कोणता?",
      "immutable का महत्त्वाचं?",
      "multiple values कसे return करता?",
    ],
    related: ["python-lists", "python-sets", "python-dicts"],
    prev: "python-list-comprehensions",
    next: "python-sets",
  },

  {
    slug: "python-sets",
    categoryId: "python",
    title: "Sets",
    marathiTitle: "Sets — अद्वितीय मूल्यांचा संग्रह",
    level: "intermediate",
    minutes: 13,
    summary: "Set मध्ये duplicate नसतात — unique values चा संग्रह.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "set म्हणजे काय?",
        content: "set हा unordered collection आहे ज्यात duplicate मूल्ये नाहीत. curly braces {} मध्ये लिहितात, पण dict प्रमाणे key नसतात — फक्त values असतात. list आणि tuple यांच्यापेक्षा वेगळे: list आणि tuple मध्ये क्रम असतो आणि duplicate असू शकतात (एकच नाव दोनदा लिहिता येते); set मध्ये क्रम नाही आणि प्रत्येक मूल्य केवळ एकदाच.\nमूल्य जोडताना set तपासते ते आधीच आहे का — असेल तर दुसरी प्रत जोडली जात नाही. म्हणून \"कोणते विद्यार्थी आले?\" या प्रश्नासाठी set योग्य: प्रत्येक विद्यार्थी एकदाच, कोण कोण हे महत्त्वाचे, क्रम नको.\nहा hash table वर आधारित data structure — त्यामुळे membership check (विशिष्ट मूल्य आहे का ते शोधणे) खूप वेगवान आहे: O(1) वेळ, list/यादीच्या शोधापेक्षा जलद.\nunique म्हणजे अद्वितीय — प्रत्येक मूल्य केवळ एकच प्रतीत. ही अद्वितीयता आणि वेग हेच set चे सामर्थ्य.",
      },
      {
        title: "Syntax: रचना आणि मूलभूत क्रिया",
        content: "set अशी लिहितात: s = {1, 2, 3} — curly braces आणि comma ने मूल्ये. रिकामी set हवी तर set() वापरा; {} लिहिल्यास ती रिकामी dict बनते — हीच set ची सर्वात मोठी चूक.\nमूलभूत क्रिया: add(element) एक item जोडते, remove(element) एक item काढते (नसला तर error), discard(element) नसला तरी error देत नाही, pop() एक item random काढते, clear() सर्व स्वच्छ.\nकोड: nums = {1, 2, 2, 3, 3, 3} — duplicate आपोआप गायब होऊन {1, 2, 3} दिसते (output आतल्या आकारानेही duplicate ची पुष्टी करते: प्रथम {1, 2, 3}). मग add(4) आणि discard(99) — 99 अजिबात नसल्याने काहीही होत नाही; शेवटी len 4.\noutput क्रम वरील आकड्यांच्या बाबतीत स्थिर दिसतो, पण set unordered आहे — iteration क्रम बदलण्यावर अवलंबून असतो. मूल्य मिळते हे महत्त्वाचे, क्रम नाही.",
        code: `nums = {1, 2, 2, 3, 3, 3}
print(nums)          # duplicate आपोआप गायब

nums.add(4)
nums.discard(99)     # नसला तर काही नाही
print(nums)
print(len(nums))`,
        codeLanguage: "python",
        output: `{1, 2, 3}
{1, 2, 3, 4}
4`,
      },
      {
        title: "गणित क्रिया: union, intersection, difference",
        content: "set च्या गणिती क्रिया operators ने होतात — हेच set चे सामर्थ्य:\nunion | — दोन्ही sets मधील सर्व मूल्ये. a | b = {1, 2, 3, 4}.\nintersection & — दोन्ही sets मधील सामान्य मूल्ये. a & b = {2, 3}.\ndifference - — पहिल्या set मधील आणि दुसऱ्यात नसलेले. a - b = {1}, b - a = {4}.\nsymmetric_difference ^ — दोन्हीतला फरक, म्हणजे सामान्य वगळलेले. a ^ b = {1, 4}.\nअसेच method calls देखील उपलब्ध: a.union(b), a.intersection(b), a.difference(b). operators हेच जलद आणि वाचनीय असतात.\nउदा. दोन संघांची एकत्रित यादी, दोन्ही संघांत खेळणारा, फक्त पहिल्या संघातला — ही गणिते एका ओळीत निघतात.",
        code: `a = {1, 2, 3}
b = {2, 3, 4}
print("एकत्र:", a | b)
print("सामान्य:", a & b)
print("फक्त a:", a - b)`,
        codeLanguage: "python",
        output: `एकत्र: {1, 2, 3, 4}
सामान्य: {2, 3}
फक्त a: {1}`,
      },
      {
        title: "वास्तविक उदाहरण: दोन वर्गांत common विद्यार्थी",
        content: "शाळेतील दोन वर्गांच्या याद्या आहेत आणि कुणी दोन्ही वर्गांत आहे ते शोधायचे आहे. group_a = {\"आदित्य\", \"प्रिया\", \"सोनाली\"} आणि group_b = {\"प्रिया\", \"रमेश\"}. intersection: both = group_a & group_b — output दोघांतही: {'प्रिया'}.\nकागदावर याच याद्या तपासल्या तर प्रत्येक नाव दुसऱ्या वर्गात शोधावे लागते — सैद्धांतिक ओझे. set मुळे एक ओळ पुरेसे. मोठ्या याद्यांवरही ही क्रिया त्वरित.\nअसाच उपयोग: हजेरीतून आज आलेल्यांची set, विद्यार्थ्यांकडून किंवा ग्राहकांकडून duplicate संपर्क काढणे, दोन lists मध्ये सामाईक घटक शोधणे.\ncommon व सर्व वेगळे हे दोन प्रश्न — & आणि | — रोजच्या data कामाचा पाया आहेत.",
        code: `group_a = {"आदित्य", "प्रिया", "सोनाली"}
group_b = {"प्रिया", "रमेश"}

both = group_a & group_b
print("दोघांतही:", both)`,
        codeLanguage: "python",
        output: `दोघांतही: {'प्रिया'}`,
      },
      {
        title: "membership check — O(1) वेग",
        content: "\"एखादा item set मध्ये आहे का\" ते तपासणे खूप जलद असते. if name in present_set हा प्रश्न dict/set च्या hash table मुळे स्थिर वेळेत सुटतो (O(1)) — यादी शेकडो, हजारो मूल्यांची झाली तरी शोधाचा वेळ वाढत नाही.\nउदा. attendees = {\"आ\",\"ब\",\"क\"} आणि कुणी आलं होतं का विचारणे: \"आ\" in attendees → True; \"झ\" in attendees → False. असे तपासण्यासाठी set ही पहिली निवड.\nक्रम नसल्याने set मध्ये indexing नसते — s[0] असे ठिकाण नाही; परंतु \"value मध्ये आहे का?\" असा search हा set चा रोजचा वापर.\nजेव्हा वेग महत्त्वाचा असेल तेव्हा membership साठी list नको, set वापरा — हा data size वाढताच दिसेल.",
      },
      {
        title: "Interactive: unique मूल्ये काढणे",
        content: "नावांच्या list मध्ये duplicate आहेत — set() मधून जाताच केवळ unique राहतात. names मध्ये \"आ\" आणि \"ब\" अनेकदा आहेत; unique = set(names) ने ती स्वतंत्र होतात.\nsorted(unique) output क्रमवार देते — sorted() मुळे निकाल नेहमी सारखा आणि स्थिर दिसतो: ['आ', 'क', 'ब']. len(unique) म्हणजे 3 — एकूण वेगळी नावे.\nक्रमवार set टाइममधून दिसण्याचा हाच मार्ग: हवे तेव्हा sorted(집) वापरा; set चा internal क्रम कायमच orderly नसतो.\nआपल्या नावांच्या list घेऊन ही प्रक्रिया तपासा — जितकी duplicate असतील तितके बचतीचे प्रमाण len मधून दिसेल.",
        code: `names = ["आ", "ब", "आ", "क", "ब"]
unique = set(names)
print(sorted(unique))
print("count:", len(unique))`,
        codeLanguage: "python",
        output: `['आ', 'क', 'ब']
count: 3`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ {} वापरून रिकामी set म्हणजे काय? हो नाही — {} ही रिकामी dict. रिकामी set हवी तर set() लिहा. type() ने तपासा.\n✗ s[0] असे indexing — set unordered आहे, स्थान नसते. मूल्य हवे तर iteration किंवा membership; क्रमवार निकाल हवा तर sorted(s).\n✗ mutable item ठेवणे — set मध्ये list हा item असू शकत नाही कारण list बदलता येतो (hashable नाही): TypeError: unhashable type: 'list'. tuple आणि string मात्र योग्य.\n✗ duplicate ची अपेक्षा — set ने आपोआप duplicate वगळले जातात; add केलेले जुने item दुसऱ्या प्रतीत जमा होत नाही.\n✗ iteration क्रमाची खात्री — set चा output क्रम अचानक बदलू शकतो. निकाल क्रमवार/स्थिर हवा असेल तर सॉर्ट करा.\nत्रुटी आल्यास संदेश वाचा — unhashable आणि type च्या चुका तात्काळ समजतात, उपाय हाच: योग्य item प्रकार आणि set().",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "duplicate मूल्ये आपोआप निघतात आणि membership check (\"a in s\") O(1) वेळेत होतो — unique आणि वेगवान शोध हे दोन गाभे.\nset मध्ये केवळ hashable items असू शकतात: संख्या, string, tuple ठीक; list मुळे error.\nset comprehension देखील आहे — {x for x in range(10)} अशी एका ओळीत set बनते (list comprehension प्रमाणे).\nfrozenset म्हणजे immutable set — ती बदलता येत नाही आणि बदलत्या (mutable) data च्या संग्रहात ती स्वतः hashable म्हणून वापरता येते.\nunordered असली तरी set हा गणिती संच आहे — |, &, -, ^ या क्रियांमुळे data तुलना एका ओळीत होते.",
      },
    ],
    practiceQuestions: [
      "set मध्ये duplicate का नसतात?",
      "indexing शक्य का नाही?",
      "union/intersection operators कोणते?",
      "list मधून duplicate काढण्याचा मार्ग?",
    ],
    quiz: [
      {
        question: "set मध्ये duplicate?",
        options: ["ठेवतो", "नाही ठेवत", "कधीकधी", "error"],
        correct: 1,
      },
      {
        question: "दोघांतले सामान्य मूल्ये?",
        options: ["| union", "& intersection", "- difference", "^ symmetric"],
        correct: 1,
      },
      {
        question: "set मध्ये subscript?",
        options: ["शक्य", "अशक्य", "कधीकधी", "कोणत्याही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "दोन list मधून जी मूल्ये दोन्हीत नाहीत (फरक) print करा — set operators वापरून.",
      starterCode: `a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
s1, s2 = set(a), set(b)
print(s1 - s2)
print(s2 - s1)
print("दोन्हीत common:", s1 & s2)`,
      expectedOutput: "{1, 2}\n{5, 6}\nदोन्हीत common: {3, 4}",
    },
    interviewQuestions: [
      "set vs list?",
      "membership check मध्ये set का वेगवान?",
      "{} dictionary की set — कसा?",
    ],
    related: ["python-tuples", "python-dicts", "python-list-comprehensions"],
    prev: "python-tuples",
    next: "python-dicts",
  },

  {
    slug: "python-dicts",
    categoryId: "python",
    project: "simple-quiz",
    title: "Python Dictionaries",
    marathiTitle: "Dictionaries - key-value जोड्या",
    level: "intermediate",
    minutes: 12,
    summary: "Dictionary मध्ये data key-value pair मध्ये ठेवला जातो.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "Dictionary म्हणजे काय?",
        content: "Dictionary key-value जोड्या ठेवतो — वास्तविक शब्दकोश सारखे: शब्द हा key आणि अर्थ ही value. curly braces {} मध्ये जोड्या लिहितात, प्रत्येक जोडीत unique key असतो आणि value काहीही असू शकते — संख्या, string, list, tuple, अगदी दुसरा dict.\nउपमा थेट मिळते: फोनबुक. नाव हा key, नंबर ही value — नावाने शोधा आणि नंबर मिळतो. तोच शब्दकोश: शब्दाने शोधा, अर्थ मिळतो. घरची सामानाची यादी वस्तू → किंमत, मंडपाचा मेनू पदार्थ → मूल्य, रेल्वे timetable गाडी → वेळ — dictionary सर्वत्र.\nक्रमाऐवजी key ने प्रवेश होतो — index ऐवजी ओळख. त्यामुळे key मध्ये lookup वेगवान आहे: hash table आधारित, O(1) access वेळ.\nkey ही immutable हवी — string, int, tuple योग्य; list नाही. key म्हणजे ओळख आणि value म्हणजे तपशील — ही जोडीच संपूर्ण नोंद. यामुळे dict ही Python मधील सर्वात वापरलेली data structure आहे — data organization साठी मुख्यच.",
      },
      {
        title: "Syntax: प्रवेश आणि methods",
        content: "रचना: d = {\"key\": value} — कोलन ने key आणि value वेगळे, comma ने जोड्या वेगळ्या. प्रत्येक जोडीमध्ये unique key; दोन समान key नसतात.\nप्रवेश दोन मार्गांनी: d[\"key\"] (bracket) किंवा d.get(\"key\"). फरक महत्त्वाचा: key नसली तर bracket → KeyError, दुसरीकडे get() → None किंवा तुम्ही दिलेला default (d.get(\"k\", 0) → मूल्य नसले तर 0). get() सुरक्षित प्रवेश आहे.\nतीन method परतचे संग्रह: keys() सर्व key, values() सर्व value, items() प्रत्येक जोडी (key, value) या रूपात. code मध्ये person dict मधून name, age, key list, value list — सर्व output मध्ये दिसते.\nलूपचे चार प्रकार: for k in d (key), for k in d.keys(), for v in d.values(), for k, v in d.items(). comprehension पण आहे: {k: v for ... in ...} — एका ओळीत शब्दकोश.",
        code: `person = {
    "name": "विलास",
    "age": 25,
    "city": "पुणे",
    "skills": ["Python", "HTML", "CSS"]
}

print(person["name"])
print(person.get("age"))
print(list(person.keys()))
print(list(person.values()))`,
        codeLanguage: "python",
        output: `विलास
25
['name', 'age', 'city', 'skills']
['विलास', 25, 'पुणे', ['Python', 'HTML', 'CSS']]`,
      },
      {
        title: "बदलणे आणि जोडणे",
        content: "एकाच bracket syntax ने दोन्ही होते: person[\"age\"] = 26 value बदलते (key अस्तित्वात आहे), person[\"job\"] = \"Developer\" नवीन जोडी जोडते (key नाही). key असेल तर बदल, नसेल तर जोड — हा नियम लक्षात ठेवा.\nupdate() अनेक जोड्या एकत्र जोडते: d.update({\"city\": \"मुंबई\"}) वगळल्यास dict मध्ये जोडते, समान key असल्यास value बदलते. setdefault(key, val) key नसल्यास जोडते; असल्यास काहीही बदलत नाही.\nकाढण्यासाठी: del d[\"key\"] जोडी काढते; pop(key) काढते आणि काढलेली value परत देते; popitem() शेवटची जोडी काढते; clear() संपूर्ण dict स्वच्छ करते.\nबदलाच्या या चार क्रिया — जोडा, बदला, काढा, स्वच्छ — data dynamic ठेवतात. contact update, salary update, stock update — क्षेत्राची पर्वा न करता तीच कामे करता येतात. मागे key अस्तित्वात असल्याची खात्री करा — चुकीच्या key वर विचारपूर्वक जा.",
        code: `person = {"name": "विलास", "age": 25}
person["age"] = 26
person["job"] = "Developer"
print(person)`,
        codeLanguage: "python",
        output: `{'name': 'विलास', 'age': 26, 'job': 'Developer'}`,
      },
      {
        title: "वास्तविक उदाहरण: विक्री रोजनिशी",
        content: "चहाची विक्री 45, कॉफी 80 — sales dict बनतो: sales = {\"चहा\": 45, \"कॉफी\": 80}. नवीन पदार्थ जोडतो: sales[\"लस्सी\"] = 120, आणि चहा वाढतो: sales[\"चहा\"] += 10 — म्हणजे जुनी value + 10.\nमग for item, count in sales.items() ने प्रत्येक जोडी उलगडल्यास item (key) आणि count (value) मिळतात. output: चहा: 55, कॉफी: 80, लस्सी: 120.\nएकूण विक्री काढायची झाल्यास sum(sales.values()) — सर्व मूल्ये मिळून total, एका ओळीत. विक्री रोजनिशी, पदार्थानुसार मोजणी असा data dict मध्ये सुबक बसतो.\nitem आणि count ची जोडी म्हणजेच नाव → संख्या. असे प्रत्येक दिवसाचे विकिर data असले तरी coding समान राहते — dictionary मुळे program सोपा आणि वेगवान.",
        code: `sales = {"चहा": 45, "कॉफी": 80}
sales["लस्सी"] = 120
sales["चहा"] += 10

for item, count in sales.items():
    print(f"{item}: {count}")`,
        codeLanguage: "python",
        output: `चहा: 55
कॉफी: 80
लस्सी: 120`,
      },
      {
        title: "Nested dictionaries — जटिल data",
        content: "value म्हणून दुसरा dict ठेवता येतो — म्हणजेच nested structure. employees dict मध्ये प्रत्येक कर्मचाऱ्याचा id हा key आणि त्याचे तपशील (नाव, पगार, पत्ता तपशील) value मध्ये दुसरा dict.\nप्रवेश साखळीने: d[\"outer\"][\"inner\"] — आधी बाहेरची key, मग आतल्या dict मधील key. उदा. employees[101][\"name\"].\nहेच compiler/जिने database मध्ये दिसते: रेल्वे timetable (गाडी → वेळ), restaurant (पदार्थ → मूल्य), contact (नाव → स्वतःचा detail dict). एकाच dict मध्ये जटिल, क्रमवार माहिती राहते.\nआंतरिक key नसली तर KeyError — दोन्ही स्तरांवर key अस्तित्वात असल्याची खात्री करा. nested dict हेच मोठ्या data साठी strength; परंतु अधिक निवड अचूक करावी लागते.",
      },
      {
        title: "Interactive: in ने सुरक्षित प्रवेश",
        content: "नसलेली key bracket ने मागितल्यास KeyError येतो — interactive मध्ये आधी in ने तपासणे ही सवय लावा. marks = {\"विलास\": 88, \"सायली\": 95}; who = \"सायली\".\nif who in marks: तपासल्यावर सापडल्यास f\"{who}: {marks[who]}\" म्हणजे सायली: 95; न सापडल्यास \"सापडला नाही\".\nअशा प्रकारे आधी तपास, मग प्रवेश — KeyError कधीच येत नाही. चटकन सापडल्यास निकाल, अन्यथा संदेश: दोन्ही प्रकरणांत program चालत राहतो.\nस्वतः दुसरी key वापरून पहा — who = \"रमेश\" ठेवल्यास else मधील संदेश दिसतो. in ने तपासणे नेहमी सुरक्षित coding आहे; get() हीच याला पर्यायी सुरक्षित रीत.",
        code: `marks = {"विलास": 88, "सायली": 95}
who = "सायली"
if who in marks:
    print(f"{who}: {marks[who]}")
else:
    print("सापडला नाही")`,
        codeLanguage: "python",
        output: `सायली: 95`,
      },
      {
        title: "Mini Project — शब्द मोजणी",
        content: "एका वाक्यात प्रत्येक शब्द किती वेळा आला ते मोजा. sentence = \"चहा कॉफी चहा दुध कॉफी चहा\" — वाक्यातून शब्द split() ने निघतात आणि count dict मध्ये जमतात.\nगुत्ता pattern: count[w] = count.get(w, 0) + 1 — शब्दाची जुनी संख्या get(w, 0) ने मिळवा (नसेल तर 0) आणि 1 ने वाढवून परत ठेवा. output: {'चहा': 3, 'कॉफी': 2, 'दुध': 1}.\nहाच pattern सर्वत्र वापरतात — word frequency, character count, item tally. पुस्तक वाचनात, search engine मध्ये, data विश्लेषणात मूल्ये मोजण्याचे हेच मूळ रूप. get() च्या default मुळे पहिला शब्दही त्रास न करता मोजला जातो.\nस्वतःचे वाक्य घ्या, code मध्ये टाका आणि report पहा — dictionary ची शक्ती प्रत्यक्ष अनुभवायला हेच project पुरेसे.",
        code: `sentence = "चहा कॉफी चहा दुध कॉफी चहा"
count = {}
for w in sentence.split():
    count[w] = count.get(w, 0) + 1
print(count)`,
        codeLanguage: "python",
        output: `{'चहा': 3, 'कॉफी': 2, 'दुध': 1}`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ नसलेली key bracket ने प्रवेश — d[\"job\"] जेव्हा \"job\" नाही तेव्हा KeyError येतो. आधी in ने तपासा किंवा get() वापरा.\n✗ get() ला default न देणे — जेव्हा key नसते तेव्हा None मिळतो आणि कधीकधी तो शांतपणे निकाल बिघडतो. मूल्याला अर्थ नसेल तर default द्या, उदा. d.get(\"k\", 0).\n✗ mutable key — list हा key न देता येतो पण TypeError: unhashable type: 'list' येतो. key नेहमी immutable हवा — string, int, tuple.\n✗ update चा गैरवापर — update() मधून समान key आल्यास value बदलते; बदलायचा नसेल तर वेगळा निर्णय घ्या. जोडण्याचा हेतू असेल आणि existing value टिकवायची असेल तर setdefault() योग्य.\n✗ nested मध्ये चुकीचा प्रवेश — आंतरिक आधीच अस्तित्वात नसलेल्या key वर गेल्यास KeyErrorच. दोन्ही स्तरांवर खात्री करा.\nKeyError नको असेल तर याच तीन सुरक्षा सवयी — in, get(), immutable key — ठेवा.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "get() ने KeyError टाळता येते आणि default — उदा. d.get(\"k\", 0) — मिळतो; in operator key चा अस्तित्व तपासतो (key in dict). हे दोन्ही safe access चे मार्ग.\nkey नेहमी immutable — string, int, tuple. key lookup O(1) वेळेत होते, म्हणून dict मध्ये access जलद. दोन्ही key अनोखे असतात, नंतरचा value जिंकतो.\nitems() ही प्रत्येक जोडी (key, value) देते; keys(), values(), items() तिन्ही methods लूपसाठी असतात. dict comprehension ({k: v for ...}) एका ओळीत शब्दकोश बनवते.\nकॉपी करण्यासाठी copy() shallow copy देते; खोल बदल हवे असतील (nested values) तर copy.deepcopy विचारात घ्या. Python 3.7+ मध्ये dict order नोंदवत राहते — क्रम स्थिर राहतो. defaultdict (collections मधून) also counting ला उपयोगी पडतो.",
      },
    ],
    practiceQuestions: [
      "dictionary key-value कशी ठेवतो?",
      "get() का वापरतात?",
      "नसलेली key access केल्यास?",
      "तुमच्या आवडत्या चित्रपटाचा dict बनवा (नाव/वर्ष/दिग्दर्शक)",
    ],
    quiz: [
      {
        question: "Dictionary मध्ये data कसे साठवले जाते?",
        options: ["key-value pairs", "index-based", "स्ट्रिंग", "list मध्ये"],
        correct: 0,
      },
      {
        question: "Dictionary कशा brackets मध्ये?",
        options: ["[]", "()", "{}", "<>"],
        correct: 2,
      },
      {
        question: "नसलेली key — केला सेफ access?",
        options: ["d[k]", "d.get(k)", "d.read(k)", "d[k]?"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एक dict किंमतीचा — ज्यात 50 च्या खालीचे items print करा (items() वापरून).",
      starterCode: `prices = {"पुस्तक": 150, "पेन": 10, "खोडरबर": 5, "बॅग": 400}
for item, price in prices.items():
    if price < 50:
        print(item, price)`,
      expectedOutput: "पेन 10\nखोडरबर 5",
    },
    interviewQuestions: [
      "dictionary vs list कधी कोणता?",
      "KeyError टाळण्याचे मार्ग?",
      "nested dictionary काय?",
    ],
    related: ["python-dict-methods", "python-sets", "python-lists"],
    prev: "python-sets",
    next: "python-dict-methods",
  },

  {
    slug: "python-dict-methods",
    categoryId: "python",
    title: "Dictionary Methods",
    marathiTitle: "Dictionary मधील सामान्य methods",
    level: "intermediate",
    minutes: 12,
    summary: "keys, values, items, get, update, pop — dict हाताळण्याचे मार्ग.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "तयार methods — keys, values, items",
        content: "dictionary मध्ये data हाताळण्यासाठी अनेक तयार methods आहेत — या धड्याचा केंद्रबिंदू तेच. तिन्ही मुख्य:\nkeys() सर्व key देते, values() सर्व value देते, items() प्रत्येक (key, value) जोडी देते.\nहे तिन्ही view objects परत करतात — list नाही, पण list() ने list मध्ये बदलता येते (जसे code मधील print(list(d.keys()))). view जिवंत असते — dict बदलताच तसेच त्या view मध्येही बदल दिसतो.\nफोनबुकचे पान उलटा: keys = सगळी नावे, values = सगळे नंबर, items = नाव-नंबरच्या जोड्या. हीच या methods ची उपमा — प्रत्येक dictionary program साठी हीच त्रयी आधार.\ncode मध्ये d = {\"a\": 1, \"b\": 2} वर: keys ['a', 'b'], values [1, 2], items [('a', 1), ('b', 2)] — items ची प्रत्येक जोडी tuple रूपात.",
        code: `d = {"a": 1, "b": 2}
print(list(d.keys()))
print(list(d.values()))
print(list(d.items()))`,
        codeLanguage: "python",
        output: `['a', 'b']
[1, 2]
[('a', 1), ('b', 2)]`,
      },
      {
        title: "get(), update(), pop() — प्रवेश, मर्ज, काढणे",
        content: "get() सुरक्षित lookup: d.get(\"z\", 0) — key अस्तित्वात नसल्यास KeyError न येता default (0) मिळते. म्हणून get() चे फल दोन — तयार कोड किंवा default.\nupdate() मर्ज करते: d.update({\"b\": 2, \"c\": 3}) या नवीन जोड्या d मध्ये जोडते; समान key आल्यास value बदलते. output: {'a': 1, 'b': 2, 'c': 3}.\npop(key) काढते आणि काढलेली value परत देते: removed = d.pop(\"a\") → 1; आता d = {'b': 2, 'c': 3}. \"काढलेला: 1\" हाच pop चा उपयोग — नोंद निघाली आणि तिचे मूल्यही हातात.\nget देतो, update भरतो, pop काढून देते — या तिन्ही रोजच्या कामांसाठी पुरेशा. output प्रत्येक पायरीवर तपासा.",
        code: `d = {"a": 1}
print(d.get("z", 0))          # अनुपस्थित → 0

d.update({"b": 2, "c": 3})
print(d)

removed = d.pop("a")
print("काढलेला:", removed)
print(d)`,
        codeLanguage: "python",
        output: `0
{'a': 1, 'b': 2, 'c': 3}
काढलेला: 1
{'b': 2, 'c': 3}`,
      },
      {
        title: "pop विरुद्ध del विरुद्ध popitem",
        content: "काढण्याचे तीन मार्ग ध्यानात ठेवा. pop(key) — जोडी काढून तिची value परत देते; किंवा default सहित: d.pop(key, \"नाही\") key नसल्यास error टाळून default देते.\ndel d[key] — फक्त काढते, value कुठेही परत मिळत नाही. \"काढून टाकायचे आहे, मूल्याची गरज नाही\" तेव्हा del वापरा.\npopitem() — शेवटची जोडी (dict मधील क्रमवार स्थितीत शेवटची) काढते आणि (key, value) tuple परत देते.\npop म्हणजे \"काढा आणि घ्या\", del म्हणजे \"फक्त काढा\", popitem म्हणजे \"शेवटची काढा\". हे तिन्ही बारकावे — आवश्यकतेनुसार निवडता येतात.",
      },
      {
        title: "setdefault — \"असेल तर ठीक, नसेल तर सेट\"",
        content: "setdefault(key, default) हे if चा संक्षेप: key असेल तर तिची value परत मिळते आणि kाहीही बदलत नाही; नसेल तर default value सह नवीन जोडी तयार होते आणि तीच परत मिळते.\nget() आणि setdefault() मधील फरक तोच: get() default परत देते पण तो dict मध्ये टाकत नाही; setdefault() टाकते. counting मध्ये हा फरक महत्त्वाचा.\nउदा. प्रत्येक शहराची पहिली नोंद सेट करणे: data.setdefault(city, []) मध्ये आधीच यादी असेल तर तोच जोडतो, नसेल तर रिकामी यादी तयार होते — पुढे append करता येते.\n\"आधी अस्तित्व तपासा, मग default देणे\" — सेटअप करतानाच्या रोजच्या कामाचा हाच सोपा मार्ग. बरेच counter वा समूह साचे यावरच उभे असतात.",
      },
      {
        title: "वास्तविक उदाहरण: विक्री रिपोर्ट",
        content: "दुकानाची विक्री रिपोर्ट एका ओळीत: sales = {\"चहा\": 45, \"कॉफी\": 80, \"लस्सी\": 120}. एकूण विक्री sum(sales.values()) — सर्व मूल्ये मिळून 245.\nसर्वात जास्त विकलेला पदार्थ शोधणे हा अभिजात वापर: top_item = max(sales, key=sales.get). max() ने sales ची key मुल्ये सरळ घेतली तर शब्दांची शाब्दिक तुलना होते (लस्सी < कॉफी...); key=sales.get दिल्यास विक्री मूल्यांनुसार (45, 80, 120) तुलना होते आणि सर्वाधिक मूल्याची key येते.\noutput: सर्वात विकला: लस्सी 120. sum() आणि max() या दोन्ही methods च्या साहाय्याने data analysis सुलभ होते.\nएकूण, सरासरी, सर्वात कमी/जास्त — values() वरील फंक्शन्स एका ओळीत. व्यवसाय रिपोर्ट, परीक्षा निकाल, स्टॉक मोजणी — हाच नमुना सर्वत्र.",
        code: `sales = {"चहा": 45, "कॉफी": 80, "लस्सी": 120}
print("एकूण विक्री:", sum(sales.values()))
top_item = max(sales, key=sales.get)
print("सर्वात विकला:", top_item, sales[top_item])`,
        codeLanguage: "python",
        output: `एकूण विक्री: 245
सर्वात विकला: लस्सी 120`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ keys() मध्ये subscript — d.keys()[0] करू नका; keys() view object list नाही, स्थान मागितले जात नाही (TypeError). प्रथम list(d.keys())[0] किंवा \"in\" ऑपरेटर.\n✗ pop नसलेली key — d.pop(\"absent\") दिल्यास KeyError. default द्या: d.pop(\"absent\", \"नाही\") — अनुपस्थितीत error टाळतो. get() प्रमाणेच.\n✗ update करताना चुकीचा structure — update(other) ला dict किंवा \"key=value\" युक्त होणारी जोडी असावी; इतर structure ने आधी बदल करा.\n✗ get() ने default dict मध्ये नाही असे समजणे — get() default फक्त हातात परत देते, dict मध्ये जोडत नाही. जोडायचे असेल तर setdefault().\nmethod ने आलेलं एकही output तपासल्यास अशा चुका त्वरित दिसतात — message वाचून ओळ पहा.",
      },
      {
        title: "Interactive: dict comprehension",
        content: "comprehension एकाच ओळीत dict बनवते: {key: value प्रत्येक item साठी}. nums = [1, 2, 3]; squares = {n: n * n for n in nums} म्हणजे प्रत्येक n साठी n → n*n जोडी.\noutput: {1: 1, 2: 4, 3: 9}. loop न लिहिता संपूर्ण शब्दकोश तयार होतो.\ncomprehension चा उपयोग — संख्या किंवा शब्द मोजण्यापासून transform सर्व कामांत. शब्द-लांबी (शब्द → लांबी), वस्तू → किंमत सारखे नकाशे एकाच ओळीत.\nस्वतः list बदलून (उदा. [1, 2, 3] ऐवजी दुसऱ्या मूल्यांनी) हे comprehension चालवा — syntax नेहमीसाठी पक्के होईल. methods आणि comprehension दोन्ही dictionary हाताळणीचे मुख्य साधन.",
        code: `nums = [1, 2, 3]
squares = {n: n * n for n in nums}
print(squares)`,
        codeLanguage: "python",
        output: `{1: 1, 2: 4, 3: 9}`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "keys(), values(), items() हे जिवंत views आहेत — मूळ dict बदलल्यावर सर्व प्रवेशांमध्ये तेच बदल दिसतात; list() ने अलग copy करता येते.\nsetdefault(k, v) ही if तपासणीचा संक्षेप: key नसेल तर default सेट होतो, असेल तर तीच value राहते. counting आणि समूह साच्यांसाठी उपयुक्त.\ndict comprehension ({k: v for ...}) एका ओळीत शब्दकोश बनवते — lists, tuples पासून नकाशे तात्काळ. शब्द मोजणी सारखे काम त्यानेही शक्य.\nget() ही KeyError टाळणारी सुरक्षित lookup; pop() default सह केल्यास error संभवत नाही. methods च्या वर्तनातील हे फरकच error-free dictionary हाताळणीची गुरुकिल्ली.",
      },
    ],
    practiceQuestions: [
      "keys() काय देतो?",
      "update() काय करतो?",
      "आधारीत dict मधला मर्ज कसा करता?",
      "सर्वात मोठ्या value ची key कशी शोधता?",
    ],
    quiz: [
      {
        question: "dict मधल्या value ची सूची?",
        options: ["keys()", "values()", "items()", "get()"],
        correct: 1,
      },
      {
        question: "नसलेली key दिल्यानंतर default काय मिळेल (get)?",
        options: ["KeyError", "default", "None", "0"],
        correct: 1,
      },
      {
        question: "दुसरा dict मर्ज करू जोडणे?",
        options: ["merge()", "update()", "join()", "add()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "दोन dicts मर्ज करा आणि सर्व keys दाखवा — फक्त common किंवा दोन्ही (union):",
      starterCode: `a = {"पुस्तक": 2, "पेन": 5}
b = {"पेन": 3, "खोडरबर": 4}
merged = {}
merged.update(a)
merged.update(b)
print(merged)
print("सर्व items:", merged.items())`,
      expectedOutput: "{'पुस्तक': 2, 'पेन': 3, 'खोडरबर': 4}\nसर्व items: dict_items([('पुस्तक', 2), ('पेन', 3), ('खोडरबर', 4)])",
    },
    interviewQuestions: [
      "get vs pop default?",
      "views (keys/items) live का असतात?",
      "dict.update(d1, d2) vs merge | operator?",
    ],
    related: ["python-dicts", "python-list-comprehensions", "python-sets"],
    prev: "python-dicts",
    next: "python-strings",
  },
];