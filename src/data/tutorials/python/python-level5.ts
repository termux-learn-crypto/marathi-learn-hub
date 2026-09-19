import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 5 — OOP (वस्तू आणि वर्ग) ===
export const L5_LABEL = "Level 5 — OOP (वस्तू आणि वर्ग)";

export const pythonLevel5: Tutorial[] = [
  {
    slug: "python-classes",
    categoryId: "python",
    title: "OOP - Classes",
    marathiTitle: "Classes - ऑब्जेक्टचे साचे",
    level: "intermediate",
    minutes: 15,
    summary: "प्रोग्रामची वस्तू (object) आणि साचा (class) ही मूलभूत संकल्पना सोप्या मराठीत.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Classes - ऑब्जेक्टचे साचे चे फायदे आणि महत्त्व",
        content: "✓ रिकाम्या class मध्ये pass आवश्यक आहे — Python ला भरलेला block हवा असतो; pass म्हणजे 'येथे काही नाही' अशी जागा.\n✓ या दोन्ही साधनं मोठ्या programs मध्ये, वस्तू खरोखर अपेक्षित प्रकारची आहे का हे ठरवताना उपयोगी पडतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "वस्तू आणि साचा म्हणजे काय?",
        content: "रोजच्या जीवनात साच्यावरून वस्तू बनवतो — कुकी कटरने कुकी आणि मोल्डने मूर्ती बनते. प्रोग्रामिंगमध्येही हेच दोन शब्द आहेत: class म्हणजे साचा किंवा ब्ल्यूप्रिंट (वस्तूची रचना ठरवणारी आखणी), तर object म्हणजे त्या साच्यातून बनलेली खरी वस्तू.\n\nएका class पासून कितीही objects बनवता येतात — सर्व एकाच रचनेचे, पण प्रत्येक वेगळी. class हा फक्त रचना असतो; तो स्वतः चालत नाही आणि data धरत नाही. खरा data आणि खरी कामं object मध्ये असतात.",
      },
      {
        title: "class लिहून वस्तू तयार करणे",
        content: "class कीवर्डने साचा परिभाषित करतो आणि नावानंतर () लिहून त्या साच्याची वस्तू तयार करतो. रिकाम्या class मध्ये pass आवश्यक आहे — Python ला भरलेला block हवा असतो; pass म्हणजे 'येथे काही नाही' अशी जागा.\n\nखालील कोडमध्ये class Dog ने साचा बनवला आहे आणि rex = Dog() ने त्याची वस्तू तयार केली आहे. class चं नाव मोठ्या अक्षराने सुरू करणं ही Python ची परंपरा आहे.",
        code: `class Dog:
    pass

rex = Dog()
print(type(rex))
print(isinstance(rex, Dog))`,
        codeLanguage: "python",
        output: `<class '__main__.Dog'>
True`,
      },
      {
        title: "type() आणि isinstance() — वस्तू ओळखणे",
        content: "वरील output मधील <class '__main__.Dog'> दोन भाग सांगतं: __main__ म्हणजे class कोणत्या module मध्ये लिहिला आहे आणि Dog म्हणजे त्या class चं नाव. print(type(rex)) म्हणजे 'rex कोणत्या class ची वस्तू आहे ते सांग' — हे वस्तू ओळखण्याचं साधन आहे.\n\nisinstance(rex, Dog) ही तपासणी True किंवा False देते: 'rex ही Dog चीच वस्तू आहे का?' हे Python विचारतो. या दोन्ही साधनं मोठ्या programs मध्ये, वस्तू खरोखर अपेक्षित प्रकारची आहे का हे ठरवताना उपयोगी पडतात.",
      },
      {
        title: "एका साच्यातून अनेक वस्तू",
        content: "एका class पासून एकापेक्षा जास्त वस्तू बनवता येतात — याचं हे उदाहरण. class Cat मध्ये sound हा गुणधर्म \"म्यांव\" ठेवला आहे. tara आणि ami या दोन वेगवेगळ्या वस्तू; दोघी एकाच साच्यातून बनल्याने दोघींनाही तोच sound मिळतो.\n\nवस्तूच्या नावानंतर डॉट (.) व गुणधर्माचं नाव लिहून गुणधर्म वाचता येतो — tara.sound किंवा ami.sound. दोन्ही print मध्ये म्यांव येतं, कारण sound चा निर्णय class मध्येच झाला आहे.",
        code: `class Cat:
    sound = "म्यांव"

tara = Cat()
ami = Cat()
print(tara.sound)
print(ami.sound)`,
        codeLanguage: "python",
        output: `म्यांव
म्यांव`,
      },
      {
        title: "उदाहरण: फोन नोंदणी",
        content: "मोबाईल फोनची नोंदणी करणारी लहान यादी हे साचा-वस्तू नात्याचं व्यावहारिक उदाहरण. प्रत्येक फोन वेगळी वस्तू, पण तिची रचना एकाच साच्याप्रमाणे. class Phone मध्ये brand चं मूल्य \"माहिती नाही\" असं default ठेवलंय.\n\np1 आणि p2 या दोन वस्तूंवर brand बदलला नसल्याने दोन्हीकडे तेच default मूल्य दिसतं. पुढे प्रत्येक वस्तूचा गुणधर्म वेगळा कसा सेट करायचा, ते याच धड्यात येणार आहे.",
        code: `class Phone:
    brand = "माहिती नाही"

p1 = Phone()
p2 = Phone()
print(p1.brand, p2.brand)`,
        codeLanguage: "python",
        output: `माहिती नाही माहिती नाही`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ class चं नाव लहान अक्षरांनी लिहिणं — Python चूक दाखवत नाही, पण परंपरेनुसार class ची नावे मोठ्या अक्षराने सुरू होतात (Dog, Student). लहान अक्षरांची नावे वाचताना function शी गोंधळ होतो.\n\n✗ रिकाम्या class मध्ये pass विसरणं — Python ला रिकामा block मान्य नाही, त्यामुळे syntax error येतो.\n\n✗ class परिभाषित होण्यापूर्वीच वस्तू बनवणं — त्या वेळी class अस्तित्वात नसतो, त्यामुळे NameError येतो. नेहमी आधी class आणि मग वस्तू.",
      },
      {
        title: "वस्तू बनल्यावर गुणधर्म बदलणे",
        content: "वस्तू बनल्यानंतर तिचा गुणधर्म बदलता येतो. class Song मध्ये title चं default मूल्य \"अजून नाही\" आहे; s.title मध्ये नवीन मूल्य ठेवल्यावर तो फक्त s वस्तूवर बदलतो — class मधली default रचना तशीच राहते.\n\nहा बदल फक्त त्या वस्तूला लागू होतो. त्यामुळे एकच साचा असूनही प्रत्येक वस्तू स्वतःची माहिती ठेवू शकते — हेच attribute चं मूळ तत्त्व आहे.",
        code: `class Song:
    title = "अजून नाही"

s = Song()
s.title = "माझ्या सहलीचे गाणे"
print(s.title)`,
        codeLanguage: "python",
        output: `माझ्या सहलीचे गाणे`,
      },
      {
        title: "Mini Project — टॉय स्टोअर",
        content: "खेळण्यांच्या दुकानात प्रत्येक खेळणं ही वस्तू आहे; सर्वांची रचना एकाच Toy साच्याप्रमाणे. येथे car या वस्तूला \"रिमोट कार\" हे खास नाव दिलंय — तिच्यावर default नाव \"साधे खेळणे\" राहिलं नाही.\n\nहीच कल्पना वाढवा: एकाच Toy साच्यातून ball, doll या आणखी वस्तू बनवा आणि प्रत्येकी name वेगळं ठरवा. साचा एक, वस्तू कितीही — हेच या धड्याचं सार आहे.",
        code: `class Toy:
    name = "साधे खेळणे"

car = Toy()
car.name = "रिमोट कार"
print(car.name)`,
        codeLanguage: "python",
        output: `रिमोट कार`,
      },
    {
        title: "class ची सखोल रचना",
        content: "class हा फक्त साचा नसून संपूर्ण रचनेची आखणी आहे. रोजच्या जीवनात उदाहरण घ्या — घराचं बिल्डिंग प्लॅन (आर्किटेक्टचं blueprint) हा class आणि त्याच प्लॅनवरून उभारलेले प्रत्येक घर हे object. प्लॅनवरून कितीही घरे बांधता येतात; प्रत्येक घर एक वेगळी अस्तित्वात असलेली वस्तू. तसंच class मधून कितीही objects बनवता येतात — प्रत्येक object ला स्वतःची जागा (memory) मिळते आणि त्यात स्वतःचं मूल्य साठवता येतं.\n\nPython मध्ये class हा आपल्या कोडच्या आत samान्य function सारखा definition च असतो; फरक एवढाच की function मध्ये कामाची कृती असते आणि class मध्ये वस्तूची रचना. def ने function सुरू होतो, तर class ने class सुरू होतो. उदाहरण म्हणून दुकानाचा नोंदवही: प्रत्येक मालाची नोंद वेगळी पण तिचा नमुना एकच. तो नमुना म्हणजे class आणि प्रत्येक नोंद म्हणजे object.\n\nसर्वात महत्त्वाचं तत्त्व लक्षात ठेवा: class चा कोड तयार होतो तेव्हा Python त्यातलं काहीही काम करत नाही — फक्त रचना लक्षात ठेवतो. खरं काम सुरू होतं तेव्हा आपण object बनवतो. त्यामुळे class च्या आत लिहिलेली नावं, खाली object बनवल्याशिवाय output मध्ये दिसत नाहीत.",
      },
      {
        title: "attribute — वस्तूची माहिती",
        content: "वस्तूची माहिती data attribute म्हणून ठेवली जाते. attribute म्हणजे वस्तूशी जोडलेली एक मूल्य — नाव, किंमत, रंग असं काहीही. जेव्हा आपण tara.sound लिहितो तेव्हा Python आत जाऊन त्या वस्तूचा sound नावाचा attribute शोधतो आणि त्यातली मूल्य आणतो. ही शोधण्याची क्रिया डॉट नोटेशन म्हणून ओळखली जाते — obj.attribute असा नमुना.\n\nattribute चे दोन प्रकार या धड्यात पहिल्यांदा दिसतात. पहिला — class attribute: class च्या आत सरळ लिहिलेले मूल्य; त्या साच्यातून बनलेल्या सर्व objects ला समान मिळतं. दुसरा — instance attribute: object बनल्यानंतर त्या एका object वरच ठरवलेलं मूल्य; प्रत्येक object चं स्वतःचं.\n\nउदाहरण: class Cat मध्ये sound च्या आत \"अज्ञात\" हे default मूल्य असो. आता tara आणि ami या दोन वस्तू बनवल्या; दोघींनाही सुरुवातीला \"अज्ञात\"च मिळतं. नंतर tara.sound = \"म्यांव\" असा बदल केला तर फक्त tara ला \"म्यांव\" मिळतं — ami तशीच \"अज्ञात\" राहते. ही एकांतिक (independent) माहिती म्हणजे OOP मधील प्रत्येक object चं खरं वैशिष्ट्य.",
        code: `class Cat:
    sound = "अज्ञात"

tara = Cat()
ami = Cat()
tara.sound = "म्यांव"
print(tara.sound)
print(ami.sound)`,
        codeLanguage: "python",
        output: `म्यांव
अज्ञात`,
      },
      {
        title: "वस्तूला नाव देणे — memory मधील दुवा",
        content: "Python मध्ये object बनवताना नाव देणं म्हणजे त्या object ला memory मधला पत्ता देणं होतं. rex = Dog() हे वाक्य दोन कामं करतं — पहिलं, Dog() ने memory मध्ये नवीन object तयार होतो; दुसरं, rex या नावाने त्या object कडे दुवा (reference) दिला जातो. तुम्ही दुसरं नाव देऊन वेगळा दुवा तयार करू शकता: buddy = rex असा लिहिलं तर buddy आणि rex दोन्ही तोच object सूचित करतात!\n\nहे जाणणं महत्त्वाचं आहे कारण बर्याच नवशिक्यांना वाटतं की object बनवलं की नावं आपोआप वेगळीdata असतात. खरं तर दोन नावं एकाच object कडे दाखवत असतील तर त्यांपैकी एकावरून बदल केला तर दुसऱ्याकडूनही तोच बदल दिसतो. एकाच object वर दोन नावे म्हणजे एकाच घराचे दोन दरवाजे — आत तेच घर असतं.\n\nतरीही सुरुवातीला आपण साहजिकपणे प्रत्येक object ला वेगळं नाव देऊ; vेगवेगळ्या नावांनी वेगवेगळे objects बनवले की प्रत्येक स्वतंत्र माहिती ठेवतो. हे तत्त्व लक्षात ठेवल्यास पुढे lists, dictionaries आणि नंतरच्या धड्यांमधील data handling सोपं होईल.",
        code: `class Dog:
    pass

rex = Dog()
buddy = rex
print(rex is buddy)
a = Dog()
b = Dog()
print(a is b)`,
        codeLanguage: "python",
        output: `True
False`,
      },
      {
        title: "निरीक्षण: output मधून शिकणे",
        content: "Python च्या output मध्ये उत्तरंच नव्हे, तर उत्तरं देण्याची पद्धतही लपलेली असते. print(type(rex)) लिहिलं तर <class '__main__.Dog'> येतं — याचा अर्थ rex ही Dog वर्गाची वस्तू आहे आणि Dog वर्ग main प्रोग्राममध्येच लिहिलेला आहे. print(isinstance(rex, Dog)) ने True येतं — Python या वस्तूचा type घेऊन वर्गाशी मेळ घालतो.\n\nवर्गाचं नाव हेच type चं नाव असतं. rex चा type म्हणजेच Dog. याचाच अर्थ होतो की object आणि class यांचा नातं प्रत्येक वेळी तपासता येतं: isinstance ही built-in function वस्तू आणि वर्ग ही dois वस्तू घेऊन उत्तर True किंवा False देते. कोणताही program लिहिताना तुमच्याकडे आलेली वस्तू योग्य प्रकारची आहे का हे पडताळणे ही चांगली सवय आहे.\n\nखाली एक रोजचं उदाहरण: शाळेच्या यादीतून मिळालेला entry खरोखर Student object आहे का?, अशी तपासणी करून आत्मविश्वासाने पुढे जाणे. या तपासण्या तुम्हाला पुढे डिबगिंगच्या वेळी खूप मदत करतील, कारण बर्याच वेळा एररचं कारण चुकीचा type नसतो — अपेक्षा केलेला वर्ग नसलेली वस्तू असते.",
        code: `class Student:
    pass

s1 = Student()
s2 = "माझे नाव"
print(isinstance(s1, Student))
print(isinstance(s2, Student))`,
        codeLanguage: "python",
        output: `True
False`,
      },
      {
        title: "Mini Project — एका साच्यातून अनेक वस्तू",
        content: "छोटा प्रोजेक्ट: एकच साचा वापरून अनेक objects बनवणे आणि प्रत्येकाचा गुणधर्म वेगळा ठरवणे. कोणत्याही व्यवसायाचा डेटा असा असतो — ग्राहकांची दुकानात नोंद, बँकेत खाती, शाळेत विद्यार्थी. प्रत्येक नोंदीची रचना एकच, पण माहिती वेगवेगळी.\n\nयेथे Toy या साच्यातून ball, doll, car या वेगवेगळ्या वस्तू बनवून प्रत्येकी name वेगळं ठरवलं आहे. कार्य सोपं आहे: printed output मध्ये प्रत्येक वस्तूचं वेगळं नाव दिसतं, हे सिद्ध करा की एकाच class पासून अनेक objects बनवता येतात आणि त्या प्रत्येकाला स्वतःची माहिती असू शकते.\n\nहा project खरं तर पुढील अनेक धड्यांचा पाया आहे — आत्ता प्रत्येक object ची माहिती default होते; पुढच्या धड्यात __init__ हा प्रत्येक object बनतानाच माहिती भरायला शिकवेल. याच सरावाची सवय लागणार आहे: साचा एक, उपयोग अनेक; वस्तू बनवा, नाव द्या, गुणधर्म वेगळे करा.",
        code: `class Toy:
    name = "साधे खेळणे"

t1 = Toy()
t2 = Toy()
t1.name = "चेंडू"
t2.name = "बाहुली"
print(t1.name)
print(t2.name)`,
        codeLanguage: "python",
        output: `चेंडू
बाहुली`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "हे विषय अधिक खोलवर शिकण्यासाठी Python च्या अधिकृत दस्तऐवजांमधून खालील संसाधने उपयोगी पडतील. सर्व स्रोत अधिकृत आणि free आहेत:\n\n• Classes ची अधिकृत व्याख्या व उदाहरणे: https://docs.python.org/3/tutorial/classes.html\n• Classes मधील नावांची जागा (scope) आणि namespace: https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces\n• object आणि type तपासणीसाठी built-in functions: https://docs.python.org/3/library/functions.html\n• isinstance() चा अधिकृत संदर्भ: https://docs.python.org/3/library/functions.html#isinstance\n• type() चा अधिकृत संदर्भ: https://docs.python.org/3/library/functions.html#type\n• attribute access (dot) चा अर्थ: https://docs.python.org/3/reference/expressions.html#attribute-references\n• पहिलं धडा नसलेल्या तुमच्या OOP प्रवासाची सुरुवात: https://docs.python.org/3/tutorial/introduction.html\n• object च्या आयुष्याची सविस्तर माहिती: https://docs.python.org/3/reference/datamodel.html\n• class attribute व instance attribute चा फरक समजून घेणे: https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables\n• Python मधील data model — objects, values, types: https://docs.python.org/3/reference/datamodel.html#objects-values-and-types\n• core language documentation (सर्व नियम): https://docs.python.org/3/reference/index.html\n• Python अधिकृत मुख्य संकेतस्थळ: https://www.python.org\n\nया links मधील नमुना कोड स्वतः चालवून पहा — चालवल्याशिवाय OOP ची पकड पक्की होत नाही.",
      },
    {
        title: "class मध्ये pass ची भूमिका",
        content: "Python च्या syntax मध्ये प्रत्येक block ला आत काहीतरी लिहिलेलं असायलाच हवं. class Dog: लिहिल्यानंतर आत काहीही नसेल तर Python गोंधळतो — त्याला एक तरी ओळ हवी असते. रिकामा block नाकारून Python syntax error देतो. या समस्येसाठी pass हा खास keyword आहे: तो एक काही करत नसलेली सूचना आहे, पण म्हणूनच तो block भरलेला बनवतो.\n\npass चा अर्थ मराठीत 'काही करू नको, पुढे जा' असा आहे. class चा आराखडा तयार करून नंतर त्यात घटक भरायचे असतील, किंवा प्रोग्रामची सुरुवात एखाद्या मोठ्या प्रकल्पात घटकांच्या नावांनी करून रचना नकाशा तयार करायचा असेल तर pass उपयुक्त आहे.\n\nएक गोष्ट स्पष्ट — pass हा फक्त class मध्ये वापरायला मिळतो असं नाही; empty function, if block, loop अशा सगळ्या ठिकाणी जिथे Python ला block हवा आहे पण तुम्हाला अजून ते काम लिहायचं नाही, तिथे pass वापरता येतो. आजच्या धड्यात pass हे class ची रचना सुरू करण्याचं साधन म्हणून पाहू — मोठी रचना आधी ठरवा, मग प्रत्येक भाग भरा.",
        code: `class First:
    pass

class Second:
    pass

print("रचना तयार")
f = First()
s = Second()
print(type(f))
print(type(s))`,
        codeLanguage: "python",
        output: `रचना तयार
<class '__main__.First'>
<class '__main__.Second'>`,
      },
      {
        title: "विविध उदाहरणांतून सराव",
        content: "आता valख्या रोजच्या जीवनातील गोष्टींवरून वेगवेगळे class तयार करून पहा — Book, Fruit, Country असे. प्रत्येक वेळी तीन पायऱ्या करा: पहिली, class नाव मोठ्या अक्षराने लिहा; दुसरी, त्यात default attribute ठेवा; तिसरी, object बनवून print करा.\n\nCountry चा उदाहरण घ्या: class Country मध्ये native_language = \"मराठी\" ठेवलं; india नावाची वस्तू बनवून india.native_language print केलं. अशा वेगवेगळ्या उदाहरणांनी अगदी समज येते की class ची रचना कशी मोठ्या प्रकल्पांचा पाया बनते — कोणताही डेटा या पद्धतीने आखून मग भरता येतो.\n\nएक महत्त्वाची टीप: प्रत्येक वेळी class चं नाव unique असणं आवश्यक आहे — दोन class चं नाव समान असेल तर शेवटचा class पहिल्याला लपवतो. हाच नियम variables साठीही आहे. पुढच्या धड्यांमध्ये आपण हेच class नावांसाठी जागतिक (global) नावाचा नकाशा म्हणून कसं वापरायचं ते शिकू.",
        code: `class Country:
    native_language = "मराठी"

india = Country()
print(india.native_language)`,
        codeLanguage: "python",
        output: `मराठी`,
      },
      {
        title: "वस्तू आणि साचा — सारांश",
        content: "हा धडा संपला म्हणजे खालील गोष्टी पक्क्या झाल्या पाहिजेत: class म्हणजे वस्तूचा साचा/ब्ल्यूप्रिंट; object म्हणजे त्या साच्यातून बनलेली खरी वस्तू. एका class पासून कितीही objects बनवता येतात. class चं नाव मोठ्या अक्षराने सुरू करणं ही Python ची परंपरा असून ती दुसऱ्यांना वाचताना साहजिकच दिसते.\n\nरिकामा class लिहिताना pass लिहिणं आवश्यक आहे कारण Python ला भरलेला block हवा असतो. वस्तूतील गुणधर्म obj.attribute असा डॉटने वाचला जातो. type() वस्तूचा वर्ग सांगतो आणि isinstance() वस्तू त्या वर्गाची आहे की नाही ते True/False मध्ये सांगतो. प्रत्येक object ला स्वतःची memory जागा मिळते म्हणून एका वस्तूचा गुणधर्म बदलणं दुसऱ्या वस्तूवर परिणाम करत नाही.\n\nसराव म्हणून स्वत:चं उदाहरण लिहा: तुमच्या आवडत्या खेळाची रचना बनवा — class Game मध्ये name आणि players ची default मूल्ये ठेवा; दोन वस्तू बनवून दोघांना वेगवेगळी नावे द्या; print करून उत्तर तपासा. अशा प्रकारे धडा स्वतः लिहून अनुभव घेतल्यास समज पक्की होते; पुढील धड्यात आपण object बनताच माहिती देणारी __init__ पद्धत शिकणार आहोत.",
        code: `class Game:
    name = "सामान्य खेळ"
    players = 2

cricket = Game()
cricket.name = "क्रिकेट"
cricket.players = 11
print(cricket.name, cricket.players)`,
        codeLanguage: "python",
        output: `क्रिकेट 11`,
      },
    {
        title: "डॉट नोटेशनचा अर्थ",
        content: "objeक्ट आणि attribute यांच्यातलं नातं बांधणारा कं, तर डॉट नोटेशन आहे. tara.sound म्हणजे 'tara या वस्तूमध्ये sound नावाचं काय आहे ते शोध'. ही नियमित रीत Python मध्ये सर्वत्र वापरली जाते — केवळ attribute मध्ये नव्हे, तर method मध्येही. वस्तूची पद्धत पुढील धड्यांत यईल; आत्ता attribute वाचणं आणि ठरवणं दोन्ही डॉटनेच होतं.\n\nकधीकधी class मधील default attribute आणि वस्तूवर दिलेले नवीन मूल्य यांच्यात मोठा फरक असतो: default म्हणजे साच्याचा आरंभ, वस्तूवरचं मूल्य म्हणजे त्या वस्तूची खरी स्थिती. वस्तूवर नवीन मूल्य दिल्यास ते मूल्य प्राधान्य घेते. हेच तत्त्व पुढे __init__ मध्ये प्रत्येक वस्तूची सुरुवात करताना मूलतत्त्वतः वापरले जातं — म्हणून आत्ताच ही समज पक्की करा.\n\nआणखी एक निरीक्षण — जर वस्तूवर अस्तित्वात नसलेल्या attribute चे नाव आपण वाचायचा प्रयत्न करतो, तर Python AttributeError देतो. उदा. साच्यात color ही माहिती नसेल आणि आपण tara.color लिहिलं तर एरर येतो. ही चूक झाली तर घाबरू नका — तीच सूचना आहे की साच्यात ते मूल्य आधी समाविष्ट करा किंवा वस्तूवर ते ठरवा.",
        code: `class Exam:
    subject = "गणित"

e1 = Exam()
e2 = Exam()
print(e1.subject)
e1.subject = "विज्ञान"
print(e1.subject)
print(e2.subject)`,
        codeLanguage: "python",
        output: `गणित
विज्ञान
गणित`,
      },
      {
        title: "वस्तूची निर्मिती — Python मागे काय करतो",
        content: "Python मध्ये Dog() असं लिहिलं की छप्परा खाली अनेक गोष्टी घडतात. पहिली, त्या वर्गासाठी memory मध्ये नवीन जागा तयार होते. दुसरी, (पुढील धड्यांत शिकणार असलेली) त्या वस्तूची सुरुवात करणारी विशेष पद्धत आपोआप चालते. तिसरी, तयार झालेल्या वस्तूचा दुवा नावाकडे सुपूर्द होतो. ही तीन पायऱ्यांची नोंद म्हणजेच object ची निर्मिती.\n\nobject ची संख्या मर्यादा नाही — तुमच्या प्रोग्राममध्ये एक हजार objects बनवलात तरी प्रत्येकाला स्वतंत्र जागा आहे. संगणकाला पुरेशी स्मृती असेल तर objects बनवत राहाता येते; आपण आता लक्षात घेतो 'जितकी वस्तू, तितकी स्वतंत्र जागा' हे तत्त्व.\n\nएक उपयुक्त व्यायाम: एकाच वर्गातून खूप वस्तूंची यादी (list) बनवताना objects ची नावे वेगवेगळी ठेवण्याऐवजी आपण ती list मध्येच ठेवू शकतो. हे पुढच्या धड्यांत आपण detail मध्ये पाहू — आत्ता फक्त लक्षात ठेवा: प्रत्येक object ही स्वतंत्र निर्मिती आहे आणि तिला आपण कोणत्याही নামाने किंवा 저장ामध्ये ठेवू शकतो.",
        code: `class Ticket:
    status = "राखीव"

t1 = Ticket()
t2 = Ticket()
t3 = Ticket()
t2.status = "रद्द"
print(t1.status)
print(t2.status)
print(t3.status)`,
        codeLanguage: "python",
        output: `राखीव
रद्द
राखीव`,
      },
      {
        title: "class attribute मधील अद्भुत बदल",
        content: "class attribute वर कोणीही थेट बदल करू शकतो — पण फरक पडतो कोठे? जर आपण वस्तूवर नवीन मूल्य दिलं, तर बदल फक्त त्या वस्तूला दिसतो. पण जर आपण साच्यावरच (class वरच) मूल्य बदललं, तर त्या साच्यातून बनलेल्या सर्व वस्तूंना नवीन मूल्य मिळतं — जोपर्यंत एखादी वस्तू स्वतःचं वेगळं मूल्य ठरवत नाही.\n\nहे तत्त्व अनेक प्रकारच्या projects मध्ये उपयुक्त आहे. सर्व वस्तूंना एकच बदल लागू करायचा असेल तर class वरील मूल्य बदला; फक्त एखादीच वस्तू विशेष हवी असेल तर तिला वेगळं मूल्य द्या. असं करताना हे लक्षात ठेवा की class मधील मूल्य एकच नियंत्रण असतो — त्यावर बदल केला तर प्रत्येक वस्तूत त्याचे परिणाम दिसतात.",
        code: `class Set:
    theme = "उन्हाळा"

s1 = Set()
s2 = Set()
Set.theme = "पावसाळा"
print(s1.theme)
print(s2.theme)`,
        codeLanguage: "python",
        output: `पावसाळा
पावसाळा`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "हे विषय अधिक सखोल करण्यासाठी Python अधिकृत documentation ची खालील संसाधने उपयोगी पडतील. सर्व अधिकृत असल्याने विश्वासार्ह आहेत:\n\n• क्लासेसची शिकवण (tutorial): https://docs.python.org/3/tutorial/classes.html\n• डॉट नोटेशन आणि attribute references: https://docs.python.org/3/reference/expressions.html#attribute-references\n• class attribute vs instance attribute: https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables\n• pass स्टेटमेंटची व्याख्या: https://docs.python.org/3/reference/compound_stmts.html#the-pass-statement\n• isinstance() documentation: https://docs.python.org/3/library/functions.html#isinstance\n• type() documentation: https://docs.python.org/3/library/functions.html#type\n• वस्तू आणि प्रकार यांचे नियम: https://docs.python.org/3/reference/datamodel.html#objects-values-and-types\n• getattr() आणि setattr() सारख्या उपयुक्त functions: https://docs.python.org/3/library/functions.html#getattr\n• class नावांची नेमकी यांत्रिकी: https://docs.python.org/3/reference/compound_stmts.html#class-definitions\n• glossary मधील 'class' ची व्याख्या: https://docs.python.org/3/glossary.html\n• Python मध्ये नावांची शिस्त (PEP 8): https://peps.python.org/pep-0008/\n• Python अधिकृत मुख्यपृष्ठ: https://www.python.org\n\nसर्व लिंक बुकमार्क करून ठेवा; प्रत्येक धडा घेताना आणखी खोलखाली जाण्यासाठी याच दस्तऐवजांचा वापर होईल.",
      },
    ],
    practiceQuestions: [
      "class म्हणजे नेमकं काय?",
      "object म्हणजे काय?",
      "एका class पासून किती objects बनवता येतात?",
      "उदाहरणाने class व object समजावा",
    ],
    quiz: [
      { question: "class बनवण्यासाठी कोणता keyword?", options: ["def", "class", "import", "new"], correct: 1 },
      { question: "object बनवण्यासाठी काय करतात?", options: ["ClassName()", "class ClassName", "del ClassName", "new ClassName"], correct: 0 },
      { question: "isinstance(rex, Dog) काय देतो?", options: ["Dog चे नाव", "True/False", "rex ची संख्या", "एरर"], correct: 1 },
    ],
    challenge: {
      prompt: "Pet नावाचा class बनवा व त्याची वस्तू बनवून kind print करा.",
      starterCode: `class Pet:
    kind = "dog"

p = Pet()
print(p.kind)`,
      expectedOutput: "dog",
    },
    interviewQuestions: [
      "class आणि object मध्ये काय फरक?",
      "type() आणि isinstance() कधी वापरतात?",
    ],
    related: ["python-debugging", "python-init", "python-methods"],
    prev: "python-debugging",
    next: "python-init",
  },

  {
    slug: "python-init",
    categoryId: "python",
    title: "__init__ आणि self",
    marathiTitle: "init - प्रत्येक वस्तूचे सुरुवातीचे काम",
    level: "intermediate",
    minutes: 14,
    summary: "प्रत्येक वस्तू जन्माच्या वेळी आपोआप चालणारी पहिली पद्धत __init__ — तिचा वापर आणि self ची भूमिका.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? init - प्रत्येक वस्तूचे सुरुवातीचे काम चे फायदे आणि महत्त्व",
        content: "✓ ही विशेष पद्धत object बनताच आपोआप एकदाच चालते; तिला स्वतः कॉल करायची गरज नसते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "__init__ म्हणजे काय?",
        content: "वस्तू बनताना तिला सुरुवातीची माहिती हवी असते — विद्यार्थ्याचं नाव आणि वर्ग, बँक खात्याची रक्कम. हे सुरुवातीचं काम __init__ (constructor) करते. ही विशेष पद्धत object बनताच आपोआप एकदाच चालते; तिला स्वतः कॉल करायची गरज नसते.\n\n__init__ ला दोन्ही बाजूंनी दोन अंडरस्कोअर (__) असतात. हा नावाचा नियम Python चा आहे — तो बदलल्यास Python ही पद्धत विशेष मानत नाही.",
      },
      {
        title: "self म्हणजे 'मी स्वतः'",
        content: "self हे __init__ चं पहिलं argument. self म्हणजे 'तीच वस्तू, जी आत्ता बनत आहे'. self.name = name म्हणजे 'हे name मूल्य या वस्तूवर साठव'.\n\nशाळेत प्रवेश घेतानाच्या फॉर्मशी तुलना करा — फॉर्म भरताना नाव, वर्ग, गुण लिहितो; फॉर्म भरल्यावरच विद्यार्थी तयार होतो. तसाच self प्रत्येक वस्तूचा स्वतःचा 'फॉर्म' सांभाळतो. self च्या जागी दुसरं नाव देता येतं, पण परंपरेनुसार नेहमी self लिहितात.",
      },
      {
        title: "विद्यार्थ्याची माहिती नोंदवणे",
        content: "विद्यार्थ्याची माहिती घेऊन आरोही आणि वेदांत या वेगळ्या वस्तू बनवल्या आहेत. s1 = Student(\"आरोही\", 10) बनतानाच __init__ त्याला name आणि cls ही मूल्ये देते. print मध्ये प्रत्येक वस्तूची स्वतःची मूल्ये दिसतात.\n\nइथेच self चं खरं काम दिसतं — प्रत्येक वस्तूची माहिती वेगळी राहते. एकाच class मधून दोन वस्तू, पण दोघांचे गुणधर्म स्वतंत्र.",
        code: `class Student:
    def __init__(self, name, cls):
        self.name = name
        self.cls = cls

s1 = Student("आरोही", 10)
s2 = Student("वेदांत", 9)
print(s1.name, s1.cls)
print(s2.name, s2.cls)`,
        codeLanguage: "python",
        output: `आरोही 10
वेदांत 9`,
      },
      {
        title: "default मूल्य — argument ऐच्छिक",
        content: "__init__ मध्ये argument ला default मूल्य दिलं तर तो argument ऐच्छिक होतो. इथे cls=10 असं ठेवलंय; त्यामुळे Student(\"आरोही\") लिहिलं तरी cls मध्ये आपोआप 10 येतं.\n\ndefault मूल्य असलेले argument शेवटीच लिहितात — default नसलेल्या argument मध्ये default समोवलं तर Python चूक दाखवतो.",
        code: `class Student:
    def __init__(self, name, cls=10):
        self.name = name
        self.cls = cls

s = Student("आरोही")
print(s.name, s.cls)`,
        codeLanguage: "python",
        output: `आरोही 10`,
      },
      {
        title: "उदाहरण: बँक खाते",
        content: "बँक खाते उघडताना मालकाचं नाव आणि सुरुवातीची रक्कम नोंदवणे — हेही __init__ चं काम. a = Bank(\"मीरा\", 5000) ने खाते बनताच owner आणि balance दोन्ही मूल्ये लागतात आणि output मध्ये मीरा 5000 दिसतं.\n\nपुढील धड्यांमध्ये हीच रक्कम method द्वारे कशी बदलायची ते शिकणार आहोत. आत्ता लक्षात ठेवा: object बनताना जे मूल्य हवं ते __init__ मध्ये argument म्हणून देतात.",
        code: `class Bank:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

a = Bank("मीरा", 5000)
print(a.owner, a.balance)`,
        codeLanguage: "python",
        output: `मीरा 5000`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ def __init__ मध्ये self विसरणं — self पहिलं argument लिहायलाच हवं; ते विसरल्यास Python मूल्ये चुकीच्या ठिकाणी नेऊन पोहोचवतो.\n\n✗ self चा अर्थ गोंधळणं — self हा कोणतंही नाव असू शकतं, पण परंपरेनुसार self लिहितात.\n\n✗ __init__ ला कॉल करण्याचा प्रयत्न करणं — ती वस्तू बनताना आपोआप चालते; तिला ऐकून कॉल करता येत नाही.\n\nआणखी एक चूक: class ला name हवं असताना s = Student() लिहिलं तर TypeError येतो — कारण __init__ ला अपेक्षित मूल्य मिळत नाही. नेहमी आवश्यक arguments सोबतच वस्तू तयार करा.",
        code: `class Student:
    def __init__(self, name):
        self.name = name

# चुकीचा प्रयत्न नको:
# s = Student()  -> TypeError (name हवं)
s = Student("आरोही")
print(s.name)`,
        codeLanguage: "python",
        output: `आरोही`,
      },
      {
        title: "इंटरॅक्टिव्ह: खेळाडूची धावसंख्या",
        content: "खेळाडूचं नाव आणि धावसंख्या नोंदवणारी वस्तू बनवू. p = Player(\"सचिन\", 100) बनताच name आणि runs मूल्ये लागतात. print मध्ये p.name, \"ने\" आणि p.runs हे तीन भाग एकत्र छापले.\n\nमूल्ये बदलून पहा — Player(\"धोनी\", 50) लिहिलं तर output धोनी ने 50 दिसेल. __init__ मधील मूल्ये बदलून वस्तूची सुरुवात वेगळी करता येते.",
        code: `class Player:
    def __init__(self, name, runs):
        self.name = name
        self.runs = runs

p = Player("सचिन", 100)
print(p.name, "ने", p.runs)`,
        codeLanguage: "python",
        output: `सचिन ने 100`,
      },
      {
        title: "Mini Project — स्वागत कार्ड",
        content: "वर्गाच्या नव्या विद्यार्थ्यांसाठी स्वागत कार्ड छापणारा छोटा प्रकल्प. make_card function मध्ये f-string वापरून name आणि age मिसळून एकच वाक्य बनवलंय; output मध्ये आदित्य बारावी, वय 17 दिसतं.\n\nf-string मधील {name} आणि {age} यांच्या जागी function ला दिलेली मूल्ये बसतात. हाच नमुना __init__ मध्ये वस्तू तयार करताना वापरतो — सुरुवातीच्या माहितीतून वाक्ये किंवा नोंदी तयार करताना.",
        code: `def make_card(name, age):
    return f"{name} बारावी, वय {age}"

print(make_card("आदित्य", 17))`,
        codeLanguage: "python",
        output: `आदित्य बारावी, वय 17`,
      },
    {
        title: "what __init__ नेहमी का पहिले चालते",
        content: "object बनवताच __init__ आपोआप चालतो — यामागचं कारण Python चा स्वरूपाचा नियम आहे. ClassName() असं लिहिलं की Python त्या वर्गात 'आता सुरुवात करा' ही जादुई सूचना पाठवतो आणि ती सूचना वाचणारी पद्धत म्हणजेच __init__. हे नाव तीन भागांनी बनलेलं आहे: दोन अंडरस्कोर, init या वर्ड आणि दोन अंडरस्कोर.\n\nतुम्ही __init__ लिहिला नाहीत तर? Python एक रिकामा आरंभ पद्धत आपोआप वापरतो — वस्तू अजूनही तयार होते, पण तिला कोणतीही आरंभ माहिती मिळत नाही. म्हणूनच steps च्या धड्यांमध्ये जेव्हा वस्तूला नाव, वर्ग यांची गरज असते तेव्हा __init__ लिहितात.\n\nहे तत्त्व आयुष्यातल्या उदाहरणाने लक्षात ठेवा: औषधाचा किस, फॉर्म भरून सरकारी कार्यालय सुरू झालं तर त्यानंतरच कागद बेरजा. असंच object बनवतात — सुरुवातीची नोंद झाल्याशिवाय पुढची कोणतीही क्रिया अर्थहीन आहे.",
      },
      {
        title: "आरंभ मूल्यांची गरज",
        content: "जेव्हा आपण वस्तूत माहिती ठेवायची असते तेव्हा त्या माहितीची नोंद सुरुवातीलाच करायला हवी. __init__ मधील parameters ही आरंभीची मूल्ये ठरवतात. उदा. बँक खातं उघडताना मालकाचं नाव आणि सुरुवातीची रक्कम द्यावी लागते; खात्याचा data तयार होत असतानाच आतमध्ये ती नोंद होते.\n\narguments ची संख्या व ठिकाण हा ठरवतो की कोणती माहिती गरजेची आहे आणि कोणती ऐच्छिक आहे. default मूल्य असलेले parameters शेवटी लिहिले जातात; default शिवायचे parameters आधी. उदाहरणात cls=10 असा default मूल्य ठेवून आपण विद्small्याचा वर्ग आधीच 10 कसा ठरू शकतो हे पाहिलं.\n\nलक्षात घ्या की __init__ मध्ये जी माहिती भरली जाते ती प्रत्येक object साठी वेगवेगळी असू शकते. त्यामुळे सगळ्या वस्तूंना एकच मूल्य नको असेल tर आपण त्यांना वेगवेगळी मूल्ये देतो; default फक्त सोयीसाठी राहतो.",
      },
      {
        title: "self च्या मागची यंत्रणा",
        content: "self किंवा तत्सम नाव हे प्रत्येक पद्धतचं पहिलं argument असतं. जेव्हा s1 = Student(\"आरोही\", 10) लिहिलं जातं तेव्हा Python मागे आपोआप self म्हणून s1 हीच वस्तू पाठवतो. म्हणजे self.name = name ही ओळ प्रत्यक्षात s1.name = \"आरोही\" सारखी चालते. self हा 'मी' दाखवतो — म्हणजे 'जे मी आत्ता तयार करतोय ते मी'.\n\nहीच यंत्रणा नंतरच्या सर्व पद्धतींमध्येही तशीच चालते: कोणतीही पद्धत म्हणजे वस्तूवर कॉल करण्यात येतो — मग त्या वस्तूला पहिला argument म्हणून method ला प्राप्त होतं. self हे नाव फक्त आपली सोय आहे; Python ने नावाबद्दल काही धारणा नाही — आपण asdf लिहिलं तरी चालतं, पण परंपरेनुसार selfच लिहातात.\n\nमहत्त्वाचं: जिथे वस्तू दिसते तिथे self हे नाव आपण स्वतः नाही लिहीत — तो दुवा Python स्वतः जोडतो. हे विसरलं तर चुका होऊन method ला योग्य मूल्ये मिळत नाहीत, म्हणून self नेहमी पहिल्या स्थानी ठेवा.",
      },
      {
        title: "उदाहरण — विक्रीची नोंद",
        content: "विक्रीच्या दुकानाची नोंद करणारा छोटा कार्यक्रम. __init__ मध्ये item आणि price या दोन माहिती भरतो. वस्तू बनवतानाच नोंद होते आणि output मध्ये item व price दोन्ही दिसतात. प्रत्येक विक्री ही वेगळी वस्तू असल्याने प्रत्येकाची नोंद स्वतंत्र असते.\n\nवस्तूवरची माहिती तिच्या अस्तित्वाबरोबर राहते — हेच __init__ चं यश. दुकानातील मजूरांची यादी, विद्यार्थ्यांची यादी, बँक खात्यांची यादी अशा सर्व ठिकाणी हीच रचना वापरली जाते. आरंभीच्या माहितीशिवाय कोणतीही नोंद बनवणं शक्य नाही.",
        code: `class Sale:
    def __init__(self, item, price):
        self.item = item
        self.price = price

s1 = Sale("पुस्तक", 200)
s2 = Sale("पेन", 15)
print(s1.item, s1.price)
print(s2.item, s2.price)`,
        codeLanguage: "python",
        output: `पुस्तक 200
पेन 15`,
      },
      {
        title: "सामान्य चुका आरंभमूल्यांसोबत",
        content: "✗ self चा मागचा आधार विसरून तो argument म्हणून देताना गडबड करणे — self पहिल्याच स्थानी; तो कधीही स्वतः लिहून द्यायचा नसतो.\n✗ __init__ मध्ये default value असलेले parameter आधी लिहिणे — Python हा क्रम चुकीचा मानतो आणि SyntaxError देतो.\n✗ object बनवताना __init__ च्या all arguments मूल्ये न देणे — मग आवश्यक argument अभावी TypeError येतो.\n✗ self.variable ऐवजी फक्त नाव लिहिणे — ते मूल्य object वर येतच नाही; फक्त local variable असतो.\n\nउदाहरणातील खालील कोड बरोबर ठेवला आहे: गरजेची मूल्ये प्रत्येक वस्तू मध्ये दिली आहेत आणि self द्वारेच साठवली आहेत. अशी निगा राखली तर __init__ चा उपयोग उत्तम होतो.",
        code: `class Student:
    def __init__(self, name, cls=8):
        self.name = name
        self.cls = cls

s = Student("वैदेही")
print(s.name, s.cls)
s2 = Student("राज", 5)
print(s2.name, s2.cls)`,
        codeLanguage: "python",
        output: `वैदेही 8
राज 5`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "सुरुवातीच्या पद्धतींचा आणखी अभ्यास करण्यासाठी अधिकृत स्रोत:\n\n• classes मधील __init__ चा विस्तारित उल्लेख: https://docs.python.org/3/tutorial/classes.html#method-objects\n• special method names चा अधिकृत यादी: https://docs.python.org/3/reference/datamodel.html#special-method-names\n• instantiation म्हणजे object निर्मिती कशी होते: https://docs.python.org/3/reference/datamodel.html#object.__init__\n• methods मध्ये self/instance parameter: https://docs.python.org/3/tutorial/classes.html#random-remarks\n• function definitions आणि parameters: https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• default argument values: https://docs.python.org/3/tutorial/controlflow.html#default-argument-values\n• बँक खात्याचं अधिकृत उदाहरण: https://docs.python.org/3/tutorial/classes.html#a-first-looking-at-classes\n• object.__init__ ची अधिकृत नोंद: https://docs.python.org/3/reference/datamodel.html#object-other-methods\n• glossary मधील special method: https://docs.python.org/3/glossary.html#term-special-method\n• व्यवहारांमधील Python style शिकण्यासाठी PEP 8: https://peps.python.org/pep-0008/\n• Python documentation च्या main index: https://docs.python.org/3/\n• अधिकृत tutorial च्या संपूर्ण contents: https://docs.python.org/3/tutorial/\n\nकमी जास्त वेळा __init__ मधील चुका टाळण्यासाठी हे संदर्भ frequently वाचा.",
      },
    {
        title: "बँक खाते — उदाहरणातून शिकणे",
        content: "बँक खाते तयार करताना मालकाचं नाव, सुरुवातीची रक्कम अशी माहिती देणे आवश्यक असते. हेच काम __init__ करतो: Bank(\"मीरा\", 5000) लिहिलं की आतमध्ये owner आणि balance ही दोन मूल्ये बसवली जातात. object बनताच माहिती भरलेली असल्याने नंतर कुठेही वापरता येते.\n\nबँक खात्याच्या रचनेचा विचार करा — प्रत्येक खात्याला मालक व रक्कम ही दोन मूल्यं हवीत. याच रचनेवर पुढे अनेक क्रिया येतात: रक्कम जमा करणे, काढणे, व्याज मोजणे. आत्ता फक्त आरंभीची नोंद होत असली तरी हा पाया पुढील सर्व क्रियांचा आहे.\n\nया धड्याचा मुख्य निष्कर्ष: प्रत्येक वस्तूला ज्या माहितीची सुरुवातीपासून गरज आहे ती आरंभीच द्यावी. नंतर वेगळा assignment करून माहिती टाकणे शक्य आहे, पण व्यवस्था आणि स्पष्टतेसाठी __init__ मधूनच पुरवणे योग्य.",
        code: `class Bank:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

a = Bank("मीरा", 5000)
b = Bank("कबीर", 2500)
print(a.owner, a.balance)
print(b.owner, b.balance)`,
        codeLanguage: "python",
        output: `मीरा 5000
कबीर 2500`,
      },
      {
        title: "default मूल्य कधी वापरावे",
        content: "default मूल्य सोयीचं असतं जेव्हा बर्याच वस्तूंसाठी एकच सुरुवात हवी असते. उदा. नवीन विद्यार्थ्यांसाठी वर्ग default ठेवला तर विद्यार्थ्यांना वारंवार वर्ग सांगावा लागत नाही. Students मधील गुणांसाठी marks=0 असं default ठेवून सुरुवात रिकाम्या गुणांनी करता येते.\n\nपण काळजी घ्या: default मूल्य कधीही बदलणारे (mutable) मूल्य असू नये — उदा. list किंवा dict. कारण ते एकदाच तयार होतं आणि सर्व वस्तूंना तेच सामायिक मिळतं. यामुळे लपून बसणारे बग आढळतात. या टप्प्यावर फक्त तत्त्व लक्षात ठेवा: default साठी साधी मूल्ये वापरा.\n\nदुसरा नियम — default असलेले argument शेवटीच ठेवतात. उदा. def __init__(self, name, cls=10). जर नामांतर केलं तर Python 8 ला meaning देऊ शकत नाही. प्रत्येक call करताना स्पष्टपणे मूल्ये दिल्यास अंदाज बरोबर राहतो.",
        code: `class Exam:
    def __init__(self, subject, max_marks=100):
        self.subject = subject
        self.max_marks = max_marks

e1 = Exam("गणित")
e2 = Exam("इंग्रजी", 50)
print(e1.subject, e1.max_marks)
print(e2.subject, e2.max_marks)`,
        codeLanguage: "python",
        output: `गणित 100
इंग्रजी 50`,
      },
      {
        title: "खेळाडूची नोंद — सराव",
        content: "आणखी एक उदाहरण म्हणून खेळाडूची नोंद पाहू. खेळाडूचं नाव आणि गोल किंवा धावांची संख्या ही आरंभ माहिती. प्रत्येक खेळाडू वेगळी वस्तू; त्याची गणना स्वतंत्र. Player(\"सचिन\", 100) असा घेतल्यावर name आणि runs दोन्ही आपोआप भरतात.\n\nप्रत्येक call चा अर्थ वेगळा असतो — तोच वर्ग आणि तीच रचना, पण मूल्ये भिन्न. हे समजून घेतल्यावर तुम्ही __init__ कशाप्रकारे reusable बनवतो हे लक्षात येते: एकदा लिहिलेली रचना, कितीही objects साठी तयार.",
        code: `class Player:
    def __init__(self, name, runs):
        self.name = name
        self.runs = runs

s1 = Player("सचिन", 100)
s2 = Player("धोनी", 50)
print(s1.name, s1.runs)
print(s2.name, s2.runs)`,
        codeLanguage: "python",
        output: `सचिन 100
धोनी 50`,
      },
      {
        title: "स्वतःला विचारा — प्रश्न",
        content: "• __init__ ही पद्धत कोणत्या वेळी चालते? उत्तर: object बनवताना ती एकदा आपोआप चालते.\n• self हे नाव बदलता येते का? उत्तर: पहिल्या argument चे नाव काहीही असू शकते; पण परंपरा म्हणून self लिहा.\n• default argument कशासाठी? उत्तर: काही मूल्ये ऐच्छिक ठेवण्यासाठी; ती न दिल्यास default लागतो.\n• सर्व वस्तूंना वेगवेगळी मूल्ये कशी मिळतील? उत्तर: प्रत्येक Object मध्ये argument म्हणून मूल्ये दिली की self द्वारे वेगवेगळे attributes तयार होतात.\n\nही उत्तरं विचारात घेऊन पुढील सराव करा: नवीन वर्ग तयार करा ज्यामध्ये नाव, वय अशी दोन आरंभ मूल्ये भरायची असतील. स्वतःच्या उदाहरणाने अभ्यास केल्यास हा धडा खूप दृढ होतो — जेव्हा डेटा मिळवून वस्तू बनवतो तेव्हाच खऱ्या OOP ची सुरुवात होते.",
      },
      {
        title: "Mini Project — नवीन नोंदी",
        content: "छोटा प्रकल्प: एकाच वर्गासाठी वेगवेगळ्या नोंदी तयार करणे आणि print करणे. खालील कोडमध्ये Product वर्ग name व price घेतो; दोन वेगवेगळ्या उत्पादनांच्या वस्तूंवर output दाखवला आहे. प्रत्येक वस्तूची रचना सारखी असली तरी तिची मूल्ये स्वतंत्र — याचाच अर्थ __init__ चा कल्पना:\n\n'वस्तू बनवतानाच माहिती भरा' — प्रत्येक माहिती प्रत्येक वस्तूत नोंदवली जाते, मग ती वस्तू कितीही असली तरी. हीच पोटरी आपल्याला पुढच्या धड्यांत method मधील गणनांना मदत करेल — त्यामुळे या project ची पूर्ण नोंद केल्याशिवाय पुढे जाऊ नका.",
        code: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

laptop = Product("लॅपटॉप", 45000)
mobile = Product("मोबाईल", 15000)
print(laptop.name)
print(mobile.name)
print(laptop.price + mobile.price)`,
        codeLanguage: "python",
        output: `लॅपटॉप
मोबाईल
60000`,
      },
    {
        title: "त्रुटी आणि त्यांचं निराकरण",
        content: "✗ TypeError: __init__() missing 1 required positional argument — अशी त्रुटी येते तेव्हा आपण __init__ च्या एक किंवा अधिक आवश्यक arguments मूल्ये न दिल्याचं संकेत आहे. उपाय: आवश्यक सर्व arguments सोबत वस्तू बनवा.\n✗ NameError: name 'self' is not defined — self विसरून तो वापरताना येतो; self चा अर्थ प्रत्येक पद्धतीतच असतो.\n✗ AttributeError — self.var चा वापर करण्यापूर्वी तो ठरवण्यात अयशस्वी झाल्यास येतो; सुरुवातीला self.var ची मूल्ये __init__ मध्ये ठरवणे योग्य.\n✗ IndentationError — __init__ च्या आतल्या code मध्ये योग्य अंतर (indentation) नसल्यास येतो; Python मध्ये अंतर महत्त्वाचं.\n\nत्रुटी झाल्यावर त्याचं message बारकाईने वाचणं हाच मार्ग आहे. Python तुम्हाला नेमका line नंबर देतो — त्या line वर जाऊन spelling, apostrophe, अंतर तपासा. त्रुटी म्हणजे अपयश नाही; ती शिक्षणाची संधी आहे.",
        code: `class Student:
    def __init__(self, name, cls=10):
        self.name = name
        self.cls = cls

# योग्य: आवश्यक argument दिला
s = Student("आरोही")
print(s.name, s.cls)

# चूक: आवश्यक argument नाही
# t = Student()  -> TypeError`,
        codeLanguage: "python",
        output: `आरोही 10`,
      },
      {
        title: "इंटरॅक्टिव्ह: स्वतः मूल्ये बदला",
        content: "खालील कोड तुम्ही पटकन चालवून बदलू शकता. name व age मधली मूल्ये बदलून output कसा बदलतो ते पहा. उदा. Person(\"सुहास\", 25) असं लिहिलं तर output सुहास 25 येईल. हा experiment करणं तुम्हाला __init__ मधला data प्रत्येक वस्तूवर कसा लागतो ते दाखवतो.\n\nआणखी एक वस्तू बनवा आणि तिची मूल्ये वेगळी द्या — दोन वेगवेगळ्या मूल्यांसह दोन वस्तू output मध्ये एकत्र दिसतील. अशा प्रकारे खेळत राहून तुम्ही या धड्याला खऱ्या अनुभवात बदलता.\n\nप्रत्येक बदलानंतर विचार करा: 'या बदलाचा output वर काय परिणाम झाला?' हा प्रश्न विचारता आल्यास तुम्ही programmer ची दृष्टी मिळवता आहात.",
        code: `class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("सुहास", 25)
print(p.name, p.age)`,
        codeLanguage: "python",
        output: `सुहास 25`,
      },
      {
        title: "मराठी उदाहरणांसह सराव",
        content: "• खेळाडू: name, runs — प्रत्येक खेळाडूची वेगळी धावसंख्या.\n• विद्यार्थी: name, cls, marks — प्रत्येक विद्यार्थी वेगळ्या वर्गात.\n• दुकान: item, price, qty — प्रत्येक वस्तूची किंमत व प्रमाण.\n• गाडी: brand, model, year — वाहन खरेदीची नोंद.\n\nअशा मराठी उदाहरणांमधून self ची भूमिका आणि आरंभ मूल्यांची गरज लक्षात येते. प्रत्येक उदाहरणात 'बनवतानाच माहिती द्या' हा तत्त्व सारखा असतो, मूल्ये मात्र वेगवेगळी.\n\nनवीन व्यक्तीला हे समजावताना जर तुम्ही 'अरे, हे रोजच्या जगातलेच नमुने आहेत' असं म्हणू शकलात तर तुम्ही खरंच समजून घेतलं आहे. अशीच सवय सर्व OOP धड्यांमध्ये घ्या.",
      },
    {
        title: "एकूण आठवणी — रेकॅप",
        content: "या धड्यात शिकलेल्या गोष्टींची थोडक्यात उजळणी:\n\n• object बनवताच __init__ आपोआप एकदा चालतो — तो constructor आहे.\n• __init__ ला दोन्ही बाजंूनी दोन अंडरस्कोर असतात — Python चा हा special name नियम आहे.\n• self म्हणजे तीच वस्तू जी आत्ता बनते; self.name = name म्हणजे त्या वस्तूवर मूल्य साठवणे.\n• default value असलेले arguments ऐच्छिक होतात; ते शेवटी लिहिले पाहिजेत.\n• प्रत्येक वस्तूला वेगवेगळी मूल्ये दिल्यास ती स्वतंत्र राहतात; काही वस्तू सुसंगत असतीलही.\n\nपुढील धड्यात method म्हणजे वस्तूवरील क्रिया कशी लिहायची आणि ती self द्वारे डेटा कसा वापरते हे शिकायला मिळेल. __init__ समजल्यास ते सोपं होईल — कारण method मध्येही self हाच नियम वापरतात.\n\nसराव म्हणून आणखी एक छोटं कार्य: bank_chalan वर्ग तयार करा ज्यामध्ये खातेदाराचं नाव व रक्कम दोघंही defaults असतील; दोन वस्तू बनवा; आता एक वस्तू बदलून दुसऱ्या वस्तूवर परिणाम होत नाही हे तपासा. उत्तर तुमच्यासमोरच आहे — असंच तपासून घेणं म्हणजे शिक्षण.",
        code: `class Student:
    def __init__(self, name):
        self.name = name
        self.attended = 0

s1 = Student("अनुजा")
s2 = Student("नितीन")
print(s1.name, s1.attended)
print(s2.name, s2.attended)`,
        codeLanguage: "python",
        output: `अनुजा 0
नितीन 0`,
      },
      {
        title: "वेगवेगळ्या आवृत्त्यांमधील विचित्रता",
        content: "Python च्या वेगवेगळ्या आवृत्त्यांमध्ये __init__ चे नाव वर्तन बदलत नाही — ही special method प्रत्येक आवृत्तीत सारखीच चालते. तरीही आवृत्ती बदलताना काळजी घेण्यासारखी काही गोष्टी असतात — उदा. f-string 3.6 पूर्वी उपलब्ध नव्हती, म्हणून जुने कोड string concatenation वापरतात. Software install करताना version तपासून जुळवून घेणं ही शिस्त राखा.\n\nआणखी एक गोष्ट लक्षात ठेवा — हे सर्व संदर्भ वाचताना वेगवेगळे लेखक वेगवेगळ्या आवृत्त्यांसाठी लिहू शकतात. मूलभूत तत्त्व खरे असते, पण concrete code तपासूनच वापरा. आपल्या system मध्ये python --version सारखी command चालवून आवृत्ती ओळखली जाते. हीच शिस्त coding आणि documentation giftedness दोन्ही ठिकाणी मदत करते.",
      },
    {
        title: "अधिक मदत — वाचन सूची",
        content: "जर __init__ थोडा गोंधळात असेल तर खालील वाचन सूची मदत करेल. ही सर्व अधिकृत संसाधने आहेत आणि स्पष्टीकरणासह उदाहरणे देतात:\n\n• https://docs.python.org/3/tutorial/classes.html — classes ची संपूर्ण माहिती.\n• https://docs.python.org/3/tutorial/controlflow.html#defining-functions — method लिहिण्याचे नियम.\n• https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions — parameters ची खोल चर्चा.\n• https://docs.python.org/3/reference/compound_stmts.html#function-definitions — function अभिव्यक्ती ची व्याख्या.\n• https://docs.python.org/3/glossary.html#term-parameter — parameter चा अर्थ.\n• https://docs.python.org/3/glossary.html#term-argument — argument चा अर्थ.\n\nप्रत्येक दस्तऐवज वाचल्यानंतरं स्वतः एक तरी उदाहरण लिहून पहा; वाचूनच थांबू नका. संकल्पना उजळून निघाल्यावर पुढील धडा — methods — सहज समजेल.",
      },
      {
        title: "आत्मपरीक्षण प्रश्न",
        content: "१. __init__ कधी आणि किती वेळा चालते? उत्तर: प्रत्येक वस्तू बनवताना तोच एका वेळी.\n२. self चा अर्थ काय? उत्तर: त्याच वस्तूचा संदर्भ; self.name = name ने मूल्य वस्तूवर साठवतो.\n३. default argument हवं असेल तर काय करावे? उत्तर: def __init__(self, name, cls=10) असं default मूल्य देणं.\n४. __init__ मध्ये उत्पन्न होणारा error कसा सोडवायचा? उत्तर: error message वाचून आवश्यक arguments, self आणि indentation तपासणे.\n\nयांपैकी प्रत्येक प्रश्नाची उत्तरं मराठीत बोलून सांगा; मग स्वतः कोड लिहा. शिकवण्याचा हा त्रिमूर्ती दृष्टिकोन — वाचणे, करणे, शिकवणे — अंतिम परिणाम 100% करतो.",
      },
    ],
    practiceQuestions: [
      "__init__ म्हणजे काय?",
      "self म्हणजे काय?",
      "__init__ ला self का देतात?",
      "default argument चा उपयोग काय?",
    ],
    quiz: [
      { question: "__init__ कधी चालते?", options: ["object बनताना", "method कॉल करताना", "program सुरुवातीला", "प्रत्येक लूपमध्ये"], correct: 0 },
      { question: "self हे पहिले argument कुणासाठी?", options: ["class साठी", "त्या वस्तूसाठी", "Python साठी", "काहीही नाही"], correct: 1 },
      { question: "s = Student() ठीक होण्यासाठी काय?", options: ["सगळे arguments default हवेत", "class रिकामा हवा", "__init__ चे नाव बदलावं", "काही करायला नको"], correct: 0 },
    ],
    challenge: {
      prompt: "marks घेणारा Student class बनवा आणि marks 0 असलेली वस्तू बनवा.",
      starterCode: `class Student:
    def __init__(self, name, marks=0):
        self.name = name
        self.marks = marks

s = Student("आरोही")
print(s.marks)`,
      expectedOutput: "0",
    },
    interviewQuestions: [
      "constructor म्हणजे काय?",
      "self ला वेगळं नाव दिलं तर होईल का?",
    ],
    related: ["python-classes", "python-methods", "python-attributes"],
    prev: "python-classes",
    next: "python-methods",
  },

  {
    slug: "python-methods",
    categoryId: "python",
    title: "OOP - Methods",
    marathiTitle: "Methods - वर्गातील कार्ये",
    level: "intermediate",
    minutes: 15,
    summary: "वस्तू सोबतच कार्ये (methods) जोडा — वर्तुळाचा परीघ, आयताचे क्षेत्रफळ आणि बरेच काही.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "Methods - वर्गातील कार्ये म्हणजे काय?",
        content: "वस्तू सोबतच कार्ये (methods) जोडा — वर्तुळाचा परीघ, आयताचे क्षेत्रफळ आणि बरेच काही.\nवर्गाच्या आत अस्तित्वात असलेल्या function ला method म्हणतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Methods - वर्गातील कार्ये चे फायदे आणि महत्त्व",
        content: "✓ points मधले गुण बदलून method चा उपयोग प्रत्यक्ष अनुभवा — method म्हणजे वस्तूवरची कृती, हे तत्त्व इथेच पक्कं होतं.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "method म्हणजे वस्तूवरची कृती",
        content: "वर्गाच्या आत अस्तित्वात असलेल्या function ला method म्हणतात. function म्हणजे कामाची कृती; ती class च्या आत ठेवल्यावर वस्तू आपल्या data सोबत method घेऊन जाते — माहिती आणि कृती एकत्र राहतात.\n\nमोबाईल घ्या: त्याच्याकडे data आहे — नंबर, बॅटरी — आणि कृती आहेत — call(), message(). हे सगळं एकाच वस्तूत आहे. तसाच Python मधला object आपला data आणि method दोन्ही सोबत नेतो; method self मधला data वापरतो आणि obj.method() असा कॉल होतो.",
      },
      {
        title: "method लिहून कॉल करणे",
        content: "method बनवण्याची रचना function सारखीच असते: def नाव(self, ...): आणि आतला कोड. खाली class Circle मधील circumference ही method वर्तुळाचा परीघ मोजते — 2 * 22 * radius // 7 असं सूत्र वापरून निकाल return ने परत देते.\n\nc.circumference() कॉल करताच self आपोआप भरतो — म्हणजे c वरचा radius method ला उपलब्ध होतो. या उदाहरणात radius 7 असल्याने output मध्ये 44 दिसतं.",
        code: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    def circumference(self):
        return 2 * 22 * self.radius // 7

c = Circle(7)
print(c.circumference())`,
        codeLanguage: "python",
        output: `44`,
      },
      {
        title: "उदाहरण: आयताचे क्षेत्रफळ",
        content: "आयताचं क्षेत्रफळ म्हणजे रुंदी × उंची. area ही method self.width आणि self.height वाचून गुणाकार करते आणि return देते. box = Rectangle(4, 5) म्हणजे रुंदी 4, उंची 5; box.area() ने output मध्ये 20 दिसतं.\n\nहाच method इतर मोजणीसाठीही वापरता येतो — पुस्तकाचं कव्हर, खोलीची जमीन, दाराचं माप. मूल्ये बदलून तोच method पुन्हा चालवता येतो; गणित वारंवार लिहावं लागत नाही.",
        code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

box = Rectangle(4, 5)
print(box.area())`,
        codeLanguage: "python",
        output: `20`,
      },
      {
        title: "उदाहरण: उत्तीर्ण की नापास?",
        content: "विद्यार्थी उत्तीर्ण की नापास हे ठरवणारी method. passed ही method marks >= 35 असल्यास True आणि नसल्यास False परत करते. एकच method आता दोन वेगवेगळी उत्तरं देते.\n\nStudent(\"राहुल\", 72).passed() मध्ये वस्तू बनवून लगेचच तिची method कॉल केली आहे. output मध्ये आधी True आणि नंतर 28 गुणांच्या पूजासाठी False येतं.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def passed(self):
        return self.marks >= 35

print(Student("राहुल", 72).passed())
print(Student("पूजा", 28).passed())`,
        codeLanguage: "python",
        output: `True
False`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ method मध्ये self विसरणं — self पहिलं argument हवंच; ते विसरल्यास method चा अर्थच बदलतो.\n\n✗ obj.method लिहून () विसरणं — method चालत नाही, फक्त तिचा reference (पत्ता) दिसतो.\n\n✗ return सोडणं — method आतला कोड चालतो, पण निकाल परत मिळत नाही; त्यामागे None येतं.\n\nखाली greet या method चं नेमकं हेच उदाहरण आहे. print(d.greet) ने method चालणार नाही; print(d.greet()) लिहिल्यावरच return केलेला नमस्कार दिसतो.",
        code: `class Demo:
    def greet(self):
        return "नमस्कार"

d = Demo()
# चुकीचं: print(d.greet)   <- method reference
print(d.greet())`,
        codeLanguage: "python",
        output: `नमस्कार`,
      },
      {
        title: "इंटरॅक्टिव्ह: तिहेरी स्कोअर",
        content: "खेळात जिंकलेले गुण तीन पटीने मोजायचे असतील तर triple ही method self.points * 3 परत करते. s = Score(5) असल्यास s.triple() ने output मध्ये 15 दिसतं.\n\npoints मध्ये 5 ऐवजी 8 दिलं तर निकाल 24 असेल. points मधले गुण बदलून method चा उपयोग प्रत्यक्ष अनुभवा — method म्हणजे वस्तूवरची कृती, हे तत्त्व इथेच पक्कं होतं.",
        code: `class Score:
    def __init__(self, points):
        self.points = points

    def triple(self):
        return self.points * 3

s = Score(5)
print(s.triple())`,
        codeLanguage: "python",
        output: `15`,
      },
      {
        title: "Mini Project — फोन चार्ज",
        content: "फोनची बॅटरी चार्ज करणारी method. charge(self, amount) मध्ये self.battery += amount करून नवीन मूल्यच return केलंय. phone = Phone(30) ने सुरुवात; charge(70) वर बॅटरी 100% होते — output हेच दर्शवतं.\n\nआणखी एक method जोडा — उदा. use(amount) ती battery कमी करून शिल्लक परत करेल. अशा प्रकारे वस्तूचा data method द्वारेच बदलतो; ही पद्धत पुढे encapsulation मध्ये पक्की होईल.",
        code: `class Phone:
    def __init__(self, battery):
        self.battery = battery

    def charge(self, amount):
        self.battery += amount
        return self.battery

phone = Phone(30)
print(phone.charge(70))`,
        codeLanguage: "python",
        output: `100`,
      },
      {
        title: "method चे तीन नियम",
        content: "value घ्यायची असेल तर return लिहा — ते नसल्यास None मिळतं आणि ती सर्वात सामान्य चूक आहे.\n\nobj.method() असा () सह कॉल करा; तेव्हा self आपोआप भरतो — तो argument म्हणून द्यावा लागत नाही.\n\nएकाच नावाची method वेगवेगळ्या वस्तूंवर चालवता येते; प्रत्येक वेळी ती त्याच वस्तूचा data वापरते.",
      },
    {
        title: "method मध्ये self का हवं असतो",
        content: "कोणतीही method class च्या आत def नाव(self, ...): असा लिहिली जाते. self हे पहिलं parameter असतं आणि पुढे self.name, self.marks असे वस्तूचे attribute वाचण्यासाठी वापरले जाते. जेव्हा obj.method() कॉल करतो तेव्हा Python obj हीच वस्तू आपोआप self मध्ये पाठवतो. त्यामुळे self म्हणजे 'त्याच वस्तूचा reference' — वस्तूची माहिती method ला मिळते.\n\nself नसला तर method ला वस्तूची माहिती कुठून मिळेल? तो गुणधर्म नाही. उदा. print(self.mark) असल्यास हे self वर अवलंबून असतं; जर तो आपण विसरून गेलो तर method चालताना Python 'unbound method' म्हणून वागतो आणि आपल्याला अनपेक्षित परिणाम मिळतो.\n\nमहत्त्वाचं: method मध्ये self हे नाव नेहमी पहिल्या स्थानीच लिहितात. हे नाव बदलता येतं — पण तसं करण्यात काहीच शहाणपण नाही; परंपरा आणि वाचण्याची सोय या दोन्हीसाठी self योग्य आहे. आपण आजही self नाव वापरणार आहोत.",
      },
      {
        title: "method आणि function — फरक",
        content: "function ही स्वतंत्र घटक असते आणि ती कोणत्याही वस्तू नसून स्वतःच्या अवकाशात राहते. method मात्र class च्या आत अस्तित्वात असते आणि ती object शी जोडलेली असते. method ला कॉल करताना obj.method() अशी रचना वापरतात; function ला मात्र फक्त नावाने कॉल करता येते.\n\nफरक कळण्यासाठी टेबलचा विचार करा: function म्हणजे स्वतंत्र मशीन ज्याला वस्तू दिली तर काम करतं; method म्हणजे वस्तूचा स्वतःचा अवयव. वस्तूशिवाय method काम करू शकत नाही, कारण तिला self द्वारे वस्तूचा डेटा हवा असतो.\n\nहा काही योग नाही; across programming languages हेच नातं आहे. कोणताही कोड वाचताना function आणि method यातला भेद कळल्यावर तो कोड आपोआप स्पष्ट होतो. पुढील उदाहरण तो फरक प्रत्यक्ष दाखवतं.",
      },
      {
        title: "वाढवलेले कार्य — multiple returns",
        content: "method मधून एकापेक्षा जास्त मूल्ये का नकोत असं काही नाही. In Python, return कॉमाने अनेक मूल्ये देऊ शकतो — त्या मिळून एक tuple तयार होते. खरं तर सामान्य माहिती मिळवण्यासाठी एकच मूल्य पुरेसं असतं, पण कधीकधी गणना दोन निकाल देत असते.\n\nउदा. विद्यार्थ्याची बेरीज आणि सरासरी दोन्ही हवी असतील; मग method दोन्ही return करते. वापरताना sum, avg = obj.scores() अशा रचनेने दोन्ही मिळतात. हे आवश्यक नाही, पण उपयुक्त आहे — आतापर्यंत आपण फक्त एकच return वापरून आलो आहोत.\n\nलक्षात ठेवा: return हा method तिथेच संपवतो; त्याखालचा कोड चालत नाही. म्हणून निकालाचा क्रम सांभाळा आणि return हवं तेव्हाच वापरा. जर return न लिहिलं तर method None परत करते — ही सर्वात सामान्य चूक आहे.",
        code: `class Student:
    def __init__(self, name, *marks):
        self.name = name
        self.marks = marks

    def total(self):
        return sum(self.marks)

s = Student("रिया", 70, 80, 90)
print(s.total())
print(Student("रिया", 70, 80, 90).total())`,
        codeLanguage: "python",
        output: `240
240`,
      },
      {
        title: "उदाहरण — पूर्ण गुणपत्रिका",
        content: "विद्यार्थ्याची माहिती सांगणारी method बनवू. introduce ही method नाव आणि गुण एकत्र वाक्यात परत करते; आपण print मध्ये वापरतो. हे उदाहरण दाखवतं की method फक्त गणित नाही; ती माहिती आकार देते — string तयार करते.\n\nप्रत्येक वस्तूसाठी तीच method वेगवेगळा output देते, कारण self मधला data वेगवेगळा असतो. शाळेच्या सवयीनुसार प्रत्येक विद्यार्थी वेगळा. याच तऱ्हेची method नंतर __str__ शी लांब पुढे जोडली जाते.\n\nव्यावहारिक वापर: फोन अ‍ॅपमध्ये प्रोफाइल कार्ड, बँकेत स्टेटमेंट, दुकानात बिल — या सर्वत्र method माहिती सविस्तर वाक्यांत करते आणि self चा data वापरून output तयार करते.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def introduce(self):
        return f"{self.name} चे गुण: {self.marks}"

s1 = Student("आरोही", 85)
s2 = Student("वेद", 62)
print(s1.introduce())
print(s2.introduce())`,
        codeLanguage: "python",
        output: `आरोही चे गुण: 85
वेद चे गुण: 62`,
      },
      {
        title: "method आणि data चं एकत्रीकरण",
        content: "OOP मधील एक महत्त्वाचं शक्तिस्थान म्हणजे data आणि method एकत्रच राहतात. प्रत्येक वस्तू आपली माहिती आणि आपलं वर्तन दोन्ही सोबत घेऊन जाते; त्यामुळे वस्तू बाहेरून वापरताना कोणत्याही external variable च्या मदतीची गरज नसते.\n\nउदा. वर्तुळाची वस्तू: तिच्याकडे radius ही माहिती आणि circumference ही कृती दोन्ही आहे. तुम्ही तिच्यावर कितीही गणना कराल तरी सर्व काही तिच्याच आत होतं. अशा वस्तू वापरणे खूप समजून येण्यासारखे होते.\n\nही well-organized रचना भविष्यातील बर्याच projects मध्ये मदत करेल — वेब site चा data, गेम मधील खेळाडू, फोन मधील बॅटरी मीटर. जोपर्यंत method आणि data एकत्र ठेवतो तोपर्यंत प्रोग्राम स्वतः organization झाल्यासारखा दिसतो.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "methods बद्दल अधिक वाचण्यासाठी अधिकृत स्रोत:\n\n• classes मध्ये method कसे परिभाषित होते: https://docs.python.org/3/tutorial/classes.html#method-objects\n• self/instance method च्या रचना: https://docs.python.org/3/tutorial/classes.html#random-remarks\n• functions मध्ये धडाः https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• return स्टेटमेंटची व्याख्या: https://docs.python.org/3/reference/simple_stmts.html#return\n• default parameter values: https://docs.python.org/3/tutorial/controlflow.html#default-argument-values\n• body मध्ये f-string वापरणे: https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals\n• glossary मध्ये method: https://docs.python.org/3/glossary.html#term-method\n• Python style guide चे नियम: https://peps.python.org/pep-0008/\n• संपूर्ण classes चा अधिकृत dhडा: https://docs.python.org/3/tutorial/classes.html\n\nहे सगळं वाचूननंतर heel स्वतः method लिहून पहा — केवळ वाचणं पुरेसं नाही.",
      },
    {
        title: "चुका दुरूस्त करणे — व्यवहारात",
        content: "✗ obj.method() ऐवजी obj.method लिहिणं — () विसरल्यास method चालत नाही, फक्त तिचा reference दिसतो.\n✗ method मध्ये return द्यायचं विसरणं — ते method None परत करते.\n✗ self मध्ये वेगवेगळे नावं वापरताना गोंधळ — नेहमी self लिहा.\n✗ method मध्ये duplicate print आणि return दोन्ही ठेवणे — कशाची गरज नाही; फक्त return परत द्या.\n\nखाली corrected example आहे: method परत मूल्य देतो; print ते छापतो. अशी शिस्त हवी तेव्हा पाळली तर कोड स्वच्छ आणि निरपेक्ष राहतो.",
        code: `class Rect:
    def __init__(self, w, h):
        self.w = w
        self.h = h

    def area(self):
        return self.w * self.h

r = Rect(4, 5)
print(r.area())`,
        codeLanguage: "python",
        output: `20`,
      },
      {
        title: "प्रत्येक वस्तू स्वतंत्र method output",
        content: "जेव्हा दोन वस्तू एकाच method वर कॉल करतात तेव्हा प्रत्येक वस्तूचा निकाल वेगळा असतो, कारण method self मधला data घेऊन काम करते. खाली ज्या रंगात छपाई होते ती method color_name — red_box व blue_box या वेगवेगळ्या वस्तूंवर output वेगवेगळा देतं.\n\nहे दर्शवतं की method नेहमी त्याच्या वस्तूसोबत जोडलेल्या माहितीला अनुसरतं. त्या method विचारतात: 'मी ज्या वस्तूचा अवयव आहे, त्या वस्तूचा data काय?' याच तत्त्वावर संपूर्ण OOP उभं आहे — ही समज पुढे खूप उपयोगी पडेल.",
      },
      {
        title: "method मधील गणिताची शैली",
        content: "प्रत्येक गणना method मध्ये परिभाषित करणं शक्य आहे: बेरीज, वजाबाकी, गुणाकार, भागाकार, सरासरी, टक्केवारी. उदा. विद्यार्थ्याची टक्केवारी method मध्ये ठेवली तर प्रत्येक वस्तूचा निकाल आपोआप योग्य येतो कारण self.marks आपोआप मिळते.\n\nहीच गणना whole code मध्ये वेगवेगळ्या ठिकाणी लिहिण्यापेक्षा एकाच method मध्ये ठेवणं — त्या ठिकाणी बदल केला तर सर्वत्र परिणाम दिसतो. वारंवार कोड copy न करता तग राहणाऱ्या रचनेची ही उत्तम सवय आहे.\n\nउदा. टक्केवारी काढणारी method: (self.marks / self.max_marks) * 100. अशी method वापरल्यास नवीन विद्यार्थी जोडला तरी तोच code वापरतो.",
        code: `class Student:
    def __init__(self, name, marks, total):
        self.name = name
        self.marks = marks
        self.total = total

    def percent(self):
        return self.marks * 100 // self.total

s = Student("रिया", 145, 200)
print(s.name, s.percent(), "%")`,
        codeLanguage: "python",
        output: `रिया 72 %`,
      },
      {
        title: "पत्रTokenlikes उदाहरण",
        content: "method समजून घेण्यासाठी एखाद्या उदाहरणाचा विचार करा: पोस्टकार्ड हा object, त्याला 'पुढे पाठवा' म्हणजे method. एक कार्ड दुसऱ्या जागी पाठवता येतं; कार्ड म्हणजेच self चा data. प्रत्येक कार्ड वेगळं: प्रत्येकाचा पत्ता self.addr मध्ये ठेवलेला.\n\nआयुष्यातल्या अशा उदाहरणांनी method ची संकल्पना रूढ होते — method म्हणजे वस्तूची कृती जी वस्तूशी जोडलेल्या माहितीवर काम करते. हे नेहमी लक्षात ठेवा: 'हे method कोणत्या वस्तूवर चालतं?' — त्याचच उत्तर self देतो.\n\nअभ्यासासाठी मित्राला सांगा की तुम्ही class मधील method म्हणजे काय शिकलात; तर तुमची समज आणखी पक्की होईल. शिकवणं ही सर्वोत्तम परीक्षा असते.",
      },
      {
        title: "Mini Project — बँकेतले व्यवहार",
        content: "बँक खात्यात जमा आणि काढणे अशा व्यवहारांसाठी method तयार करू. deposit(self, amount) ही जमा करते; withdraw(self, amount) ही काढते. दोन्ही method स्वत:चा balance बदलतात; output balance दाखवतो.\n\nसर्व method वस्तूवरच काम करतात — एखाद्या खात्याचा balance बाहेरच्या variable मध्ये ठेवायची गरज नाही. आता बघा की ही रचना तुम्ही पुढे encapsulation धड्यात get_balance सारख्या method सोबत अधिकाच नियंत्रणाने वापराल.",
        code: `class Bank:
    def __init__(self, owner, balance):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        return self.balance

a = Bank("मीरा", 5000)
print(a.deposit(1000))
print(a.withdraw(2000))`,
        codeLanguage: "python",
        output: `6000
4000`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "methods बद्दल अधिक खोलवर जाण्यासाठी ही अधिकृत संसाधने उपयोगी:\n\n• तुझ्या धड्यातील methods च्या कोडची सेटिंग: https://docs.python.org/3/tutorial/classes.html\n• instance methods ची विस्तृत चर्चा: https://docs.python.org/3/tutorial/classes.html#method-objects\n• function, method नियम: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• बिल्ड-इन math methods: https://docs.python.org/3/library/math.html\n• f-string formatted output: https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals\n• sum() built-in function: https://docs.python.org/3/library/functions.html#sum\n• glossary मध्ये method: https://docs.python.org/3/glossary.html#term-method\n• caller instance मागे self कसा जातो: https://docs.python.org/3/reference/expressions.html#calls\n\nव्यवस्थित वाचत राहा; प्रत्येक वाचनानंतर स्वतःची छोटी उदाहरणे तयार करा.",
      },
    {
        title: "method वापरताना सूचना",
        content: "जेव्हा तुम्ही method वापरता तेव्हा खालील सूचना लक्षात ठेवा:\n\n• method मध्ये पहिलं argument नेहमी self असावं.\n• वस्तूवरून कॉल करताना obj.method() असे () सह लिहा.\n• गणना method मध्ये return वापरून निकाल परत द्या.\n• default मूल्य हवं असेल तर method मध्येही default arguments द्या.\n• फक्त data वाचायचा असेल तरी method बनवून वापरण्याची सवय ठेवा — प्रोग्राम clean राहतो.\n\nहे सगळं लक्षात ठेवलेलं असेल तर पुढील धड्यांमध्ये attributes, inheritance च्या वेळी तो योग्य वापर साहजिकच होईल. शिकण्यात सातत्य म्हणजे प्रत्येक धडा मागच्यावर बसतो; methods हीच इथली दुसरी-पायरी आहे.",
      },
      {
        title: "गोष्टींची उजळणी — रेकॅप",
        content: "या धड्यात method म्हणजे वस्तूवरची कृती हे समजलं; method लिहिणं म्हणजे class च्या आत function लिहिणं; पहिला parameter self असतो आणि तो Python आपोआप भरतो; obj.method() मध्ये () आवश्यक; return न दिल्यास None मिळतं; प्रत्येक वस्तूचा निकाल self मधल्या data वर अवलंबून असतो.\n\nमुख्य निष्कर्ष: method म्हणजे वस्तूचा स्वतःचा अवयव; ती वस्तूचा data वापरते आणि तिच्यावर काम करते. हे नियम self च्या रूपात प्रत्येक method मधून लागू होतात — म्हणूनच OOP मधले data आणि कृती एकत्र ठेवले जातात.\n\nआता पुढे जाण्यापूर्वी आत्मपरीक्षण करा: तुम्ही एक method लिहू शकता का जी दोन वस्तूंची बेरीज करते? जर हो — आणखी एक जर नाही — तर धडा पुन्हा उलटवा; अशी पुनरावृत्ती दृढ makes the code.",
      },
      {
        title: "नवीन वेगळी method जोडणे",
        content: "वस्तूला बर्याच method असू शकतात — प्रत्येक एक वेगळं काम करते. उदा. गाडीच्या वस्तूवर start(), stop(), speed() या तीन वेगवेगळ्या method असू शकतात. प्रत्येक method class मध्ये स्वतंत्र def ने लिहिली जाते आणि प्रत्येक self ने सुरू होते.\n\nएकाच class मधून कितीही method तयार करता येतात — त्यांची नावे वेगवेगळी हवीत. यामुळे वस्तू सशक्त बनते: तिच्यावर अनेक क्रिया करता येतात. वास्तविक programs मध्ये एका वस्तूवर डझनभर method असतात.\n\nखाली example मध्ये गाडीच्या वस्तूवर तीन method आहेत; output मध्ये त्या तीनही निकाल दाखवते. अशा अनेक method असलेल्या वस्तूंना real-world objects म्हटलं जातं.",
        code: `class Car:
    def __init__(self, brand):
        self.brand = brand
        self.speed = 0

    def start(self):
        self.speed = 10
        return self.speed

    def speed_up(self):
        self.speed += 20
        return self.speed

c = Car("Mahindra")
print(c.start())
print(c.speed_up())`,
        codeLanguage: "python",
        output: `10
30`,
      },
      {
        title: "संवाद शैलीत सराव प्रश्न",
        content: "१. method म्हणजे काय? उत्तर: वर्गातील function; वस्तूवर कॉल होतो.\n२. self argument का देतात? उत्तर: त्याच वस्तूचा reference method ला हवा असतो.\n३. obj.method आणि obj.method() मध्ये फरक काय? उत्तर: () विसरल्यास method चालत नाही; फक्त reference मिळतो.\n४. return गहाळ झाल्यास काय मिळतं? उत्तर: None.\n५. method मध्ये अनेक actions कशा एकत्र करता येतात? उत्तर: प्रत्येक action वेगवेगळ्या method म्हणून; शक्य तितकी सोपी गणना एका method मध्ये.\n\nहे प्रश्न नियमित विचारत राहा; उत्तरंही स्वतः आपल्या शब्दांत सांगा. such habit ची सवय तुम्हाला संभाषण-शैलीत प्रोग्रामर बनवते.",
      },
    {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "methods च्या अभ्यासाला अधिक पुष्टी देण्यासाठी अधिकृत स्रोतांची ही यादी:\n\n• https://docs.python.org/3/tutorial/classes.html#method-objects — method objects.\n• https://docs.python.org/3/tutorial/classes.html#random-remarks — self बद्दल सखोल.\n• https://docs.python.org/3/reference/compound_stmts.html#function-definitions — def ची व्याख्या.\n• https://docs.python.org/3/library/functions.html — सर्व built-in functions.\n• https://docs.python.org/3/library/math.html — गणितीय functions.\n• https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions — parameters.\n• https://docs.python.org/3/library/stdtypes.html — types आणि attributes.\n• https://docs.python.org/3/glossary.html#term-callable — callable ची व्याख्या.\n\nप्रत्येक लिंक वाचताना ती लिंक तुमच्या method ना कशी जोडली असं विचारात ठेवा; त्या गोष्टीमुळे पुढील धड्यांतील प्रत्येक कोड अधिक स्पष्ट होईल.",
      },
      {
        title: "आव्हान — स्वतः method बनवा",
        content: "आता स्वतःचं काहीतरी बनवून पहा: एक Number वर्ग बनवा ज्यामध्ये value हा attribute असेल; lenght_cube नावाची method बनवा जी self.value ** 3 परत करेल (म्हणजे घन). संख्यांच्या वेगवेगळ्या वस्तू बनवण्याचा प्रयत्न करा — १, २, ३ अशा.\n\nस्वतःच्या example मधून शिकणं सर्वात दृढ असतं कारण हात करताना अनेक छोट्या गोष्टी लक्षात येतात: self चा वापर, return चा क्रम, attribute चं नाव. तुम्ही जर कुठे अडकलात तर warning म्हणून हा कोड बघा आणि बदल करून वापरा.\n\nउत्तर जवळजवळ आकड्यात असेल; तरीही स्वतः लिहून try करा. 'मी लिहिलेला कोड output देतो' हा आत्मविश्वासच पुढच्या अनेक धड्यांचा पाया आहे.",
        code: `class Number:
    def __init__(self, value):
        self.value = value

    def cube(self):
        return self.value ** 3

n = Number(3)
print(n.cube())`,
        codeLanguage: "python",
        output: `27`,
      },
    ],
    practiceQuestions: [
      "method म्हणजे काय?",
      "method च्या पहिल्या argument ला काय म्हणतात?",
      "obj.method() आणि obj.method मध्ये फरक?",
      "return गहाळ झाल्यास काय मिळतं?",
    ],
    quiz: [
      { question: "method कशी लिहितात?", options: ["def method():", "class method():", "import method:", "obj.method()"], correct: 0 },
      { question: "पहिले argument कोणते?", options: ["self", "class", "method", "None"], correct: 0 },
      { question: "वस्तूची method कॉल करण्याची रीत?", options: ["Class.method", "obj.method()", "self.method", "method(obj)"], correct: 1 },
    ],
    challenge: {
      prompt: "Number class मध्ये अर्धा मिळवणारी method बनवा.",
      starterCode: `class Number:
    def __init__(self, value):
        self.value = value

    def half(self):
        return self.value // 2

n = Number(22)
print(n.half())`,
      expectedOutput: "11",
    },
    interviewQuestions: [
      "method आणि function मध्ये काय फरक?",
      "self ची भूमिका method मध्ये?",
    ],
    related: ["python-init", "python-attributes", "python-classes"],
    prev: "python-init",
    next: "python-attributes",
  },

  {
    slug: "python-attributes",
    categoryId: "python",
    title: "OOP - Attributes",
    marathiTitle: "Attributes - वस्तूचे गुणधर्म",
    level: "intermediate",
    minutes: 14,
    summary: "class-level आणि object-level गुणधर्म — दोघे एकत्र कुशलतेने कसे वापरायचे.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "Attributes - वस्तूचे गुणधर्म म्हणजे काय?",
        content: "class-level आणि object-level गुणधर्म — दोघे एकत्र कुशलतेने कसे वापरायचे.\nattribute म्हणजे वस्तूचे गुणधर्म — नाव, किंमत, रंग असे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Attributes - वस्तूचे गुणधर्म चे फायदे आणि महत्त्व",
        content: "✓ class attribute चा उपयोग मोजणीसाठीही होतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "attribute चे दोन प्रकार",
        content: "attribute म्हणजे वस्तूचे गुणधर्म — नाव, किंमत, रंग असे. त्यांचे दोन प्रकार आहेत. class attribute साच्यावर लिहिलेलं असतं आणि त्या साच्यातून बनलेल्या सर्व वस्तूंना common मिळतं. instance attribute मात्र self. ने वस्तूच्या आत लिहिलं जातं — प्रत्येक वस्तूचं ते खास असतं.\n\nकुठे लिहायचं हे ठरवतं: प्रत्येक वस्तूला समान मूल्य हवं असेल तर class attribute, आणि प्रत्येकी स्वतःचं मूल्य हवं असेल तर instance attribute वापरावं.",
      },
      {
        title: "समाजाचं उदाहरण",
        content: "\"सर्व मराठी माणसे मराठी बोलतात\" — हे सर्वांसाठी समान; त्यामुळे हे class attribute चं उदाहरण. \"प्रत्येक व्यक्तीचं नाव वेगळं\" — हे प्रत्येकाला स्पेशल; ते instance attribute आहे, वस्तू बनताना तिच्यासाठीच नोंदवलं जातं.\n\nएका व्यक्तीने आपलं नाव बदललं तर दुसऱ्याचं नाव बदलत नाही. तसाच जेव्हा एखादी वस्तू आपला instance attribute बदलते तेव्हा फक्त तिचा बदलतो — बाकीची वस्तू आणि class attribute तसेच राहतात.",
      },
      {
        title: "वेगवेगळ्या भाषा — वेगवेगळ्या वस्तू",
        content: "Movie class मध्ये language हा class attribute आहे — मूल्य \"मराठी\". m1 आणि m2 या दोन वस्तू बनवल्या; दोघींनाही सुरुवातीला मराठीच मिळतं. आता m2.language = \"हिंदी\" असा बदल करतो — पण हा बदल फक्त m2 वर.\n\noutput मध्ये तीन ओळी दिसतात: m1.language मराठी — बदल नाही; m2.language हिंदी — वस्तूवरचा बदल; Movie.language मराठी — class attribute तसंच राहिलं. वस्तूवर दिलेलं नवीन मूल्य class attribute बदलत नाही.",
        code: `class Movie:
    language = "मराठी"

m1 = Movie()
m2 = Movie()
m2.language = "हिंदी"
print(m1.language)
print(m2.language)
print(Movie.language)`,
        codeLanguage: "python",
        output: `मराठी
हिंदी
मराठी`,
      },
      {
        title: "किती वस्तू बनल्या?",
        content: "class attribute चा उपयोग मोजणीसाठीही होतो. Counter class मध्ये created = 0 ठेवलंय; __init__ चालताना Counter.created += 1 होतं — म्हणजे प्रत्येक वेळी वस्तू बनताच मोजणी एकने वाढते.\n\na, b, c अशा तीन वस्तू बनवल्या की created मध्ये 3 साठतं आणि print(Counter.created) ने output 3 दिसतं. ही मोजणी class attribute मुळे सर्व वस्तूंना एकत्र दिसते.",
        code: `class Counter:
    created = 0

    def __init__(self):
        Counter.created += 1

a = Counter()
b = Counter()
c = Counter()
print(Counter.created)`,
        codeLanguage: "python",
        output: `3`,
      },
      {
        title: "उदाहरण: किराणा दुकानाचा GST",
        content: "दुकानात GST कसा मिळतो ते पाहू. tax = 5 हा class attribute आहे — सर्व वस्तूंना लागणारा कर. gst = cart.price * cart.tax // 100 म्हणजे 1200 * 5 // 100 — यावरून 60 रुपये GST मिळतो; output मध्ये GST: 60 दिसतं.\n\nयेथे self.price (वस्तूचा डेटा) आणि tax (class attribute) एकत्र वापरले आहेत. अशा प्रकारे सामायिक मूल्यावरून प्रत्येक वस्तूची गणना होते.",
        code: `class Cart:
    tax = 5

    def __init__(self, items, price):
        self.items = items
        self.price = price

cart = Cart(3, 1200)
gst = cart.price * cart.tax // 100
print("GST:", gst)`,
        codeLanguage: "python",
        output: `GST: 60`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ साठवताना self. लिहणं विसरणं — खाली Book उदाहरणात title self वर नोंदवला आहे; self. विसरल्यास तो गुणधर्म वस्तूवरच तयार होत नाही आणि नंतर b.title ला एरर येतो.\n\n✗ class attribute बदलल्याने सर्व वस्तूंवर परिणाम होतो असं समजणं — वस्तूला वेगळं मूल्य दिल्यास फक्त तीच बदलते.\n\n✗ _ ने सुरू होणारा attribute बाहेरून बदलण्याचा प्रयत्न करणं — अशा नावाचा गुणधर्म 'आतला' समजला जातो; त्यावरचे बदल method द्वारेच करावेत.",
        code: `class Book:
    def __init__(self, title):
        self.title = title

b = Book("श्रीमान योगी")
print(b.title)`,
        codeLanguage: "python",
        output: `श्रीमान योगी`,
      },
      {
        title: "इंटरॅक्टिव्ह: पेन आणि शाई",
        content: "class Pen मध्ये ink = 100 आहे. p1 आणि p2 या दोन वस्तू; दोघींनी सुरुवातीला 100च घेतलं. आता फक्त p2.ink = 40 केलं तर output मध्ये p1 चं 100 आणि p2 चं 40 दिसतं.\n\nहेच instance attribute चं तत्त्व — एक वस्तू बदलली तरी बाकीच्या तशाच राहतात. ink ची मूल्ये बदलून हा फरक स्वतः अनुभवा.",
        code: `class Pen:
    ink = 100

p1 = Pen()
p2 = Pen()
p2.ink = 40
print(p1.ink, p2.ink)`,
        codeLanguage: "python",
        output: `100 40`,
      },
      {
        title: "Mini Project — फलंदाजाची सरासरी",
        content: "फलंदाजाची सरासरी हे खेळातलं नेहमीचं गणित: धावा ÷ डाव. Cricketer class मधील average method self.runs // self.innings करते. विराटच्या 2000 धावा आणि 40 डावांवरून 50 सरासरी मिळते — output विराट 50.\n\nruns आणि innings मध्ये वेगळे आकडे द्या; तोच method त्यावरून नवीन निकाल देईल. सरासरी बाहेरून बदलत नाही — तिची गणना नेहमी method द्वारे होते, ही सवय पुढील encapsulation चा पाया आहे.",
        code: `class Cricketer:
    def __init__(self, name, runs, innings):
        self.name = name
        self.runs = runs
        self.innings = innings

    def average(self):
        return self.runs // self.innings

v = Cricketer("विराट", 2000, 40)
print(v.name, v.average())`,
        codeLanguage: "python",
        output: `विराट 50`,
      },
    {
        title: "attribute लिहिण्याचे नियम",
        content: "attribute चं नाव लहान अक्षरांनी सुरू होतं; दोन शब्द असतील तर त्यांना underscore ने जोडतात (उदा. native_language). हे नाव केवळ Permitted शब्द असेल तर उत्तम: अक्षर, अंक, underscore स्वीकारतो; पैकी मध्ये रिकामी जागा नको. शब्द वाचता येण्यासाठी मराठीत नावे ठेवण्यात काहीही अडचण नाही — Python unicode names स्वीकारते.\n\na.ttribute किंवा method च्या नावांसोबत privileged keywords आणि builtin names टाळणं बरं असतं — उदा. name या नावाने attribute असेल तर class वरील builtin property शी संघर्ष होऊ शकतो. अशा संघर्षाशिवाय सोपं आणि विशिष्ट नाव निवडा म्हणजे कोड वाचताना गोंधळ होणार नाही.\n\nआणखी एक subtle गोष्ट: दोन underscore ने सुरू होणारे attribute Python मध्ये name mangling करतात — ते class च्या आत बदललेले दिसते. या टप्प्यावर फक्त नियम जाणून घ्या; प्रत्यक्ष वापर पुढच्या धड्यांत येईल. आत्ता जे पटकन लागू होतं ते म्हणजे — नाव निवडताना स्पष्टता ठेवा.",
      },
      {
        title: "class attribute चे व्यावहारिक उपयोग",
        content: "class attribute जिथे वापरता येते ती काही सामान्य ठिकाणे:\n\n• सर्व वस्तूंसाठी सामायिक मूल्य — उदा. GST, टक्केवारी, आवृत्ती.\n• मोजणी — प्रत्येक वस्तू बनताना counter वाढवणे.\n• default/सामान्य प्रारंभ — जेव्हा वस्तूला विशिष्ट मूल्य हवं असेल.\n• सर्व वस्तूंना एकच नियम लागू करणे — class attribute बदलला की सर्वांना दिसतं.\n\nउदाहरणाद्वारे पाहिलं: Movie मध्ये language हा class attribute \"मराठी\" ठेवून दोन वस्तूंना समान दिसलं; नंतर एका वस्तूवर \"हिंदी\" दिल्यावर फक्त तीच बदलली. हे लक्षात ठेवा की जेव्हा वस्तू बदलते तेव्हा ती स्वतःची वेगळी स्थिती तयार करते; class attribute बदलत नाही.\n\nहे नियम वापरताना प्रत्येक वेळी विचार करा: 'हे मूल्य सर्व वस्तूंना हवाय का?' उत्तर होय असेल तर class attribute; नाही असेल तर instance attribute. या सोप्या परीक्षेने attributes चा वापर योग्य होतो.",
        code: `class Shop:
    gst = 5

s1 = Shop()
s2 = Shop()
print(s1.gst, s2.gst)
Shop.gst = 7
print(s1.gst, s2.gst)`,
        codeLanguage: "python",
        output: `5 5
7 7`,
      },
      {
        title: "self.attribute आणि plain variable फरक",
        content: "class च्या method मध्ये two प्रकारची नावे असतात: उदा. self.title हा attribute आहे — तो वस्तूवर राहतो आणि त्याच अस्तित्वाचे आयुष्य असतं. plain variable title मात्र method मधील स्थानिक नाव आहे — तो method संपल्यावर नाहीसं होतो. हे दोन वेगळे म्हणूनच self.title = title असं लिहून दोन्ही वेगळे ठेवतात.\n\nजर एखाद्या method मध्ये फक्त variable ठेवला आणि object बाहेरून त्या नावाने शोधला तर तो सापडत नाही — AttributeError येतो. कारण तो variable object वर नाही. प्रत्येक वेळी माहिती वस्तूवर ठेवायची असेल तर self. लावणं आवश्यक आहे.\n\nहेच कारण आहे की आपण __init__ मध्ये self.attribute तयार करतो — यामुळे वस्तूची नोंद कायम राहते. आणखी एक गोष्ट: self.attribute नवीन मूल्य देताना तो निनावी वेळीही तयार होतो; परंतु योग्य प्रथा म्हणून त्याची सुरुवात __init__ मध्येच करा.",
        code: `class Note:
    def __init__(self, text):
        self.note_text = text
        temp = "लपलेले"
x = Note("अभ्यास")
print(x.note_text)
# print(x.temp)  -> AttributeError`,
        codeLanguage: "python",
        output: `अभ्यास`,
      },
      {
        title: "तुमचा स्वतःचा attributes नमुन्यात सराव",
        content: "• घर: color, floors, area — प्रत्येक घराची माहिती वेगळी.\n• पुस्तक: title, author, pages — शेल्फमधील प्रत्येक पुस्तक.\n• गाडी: brand, color, speed — रस्त्यावरची प्रत्येक गाडी.\n• फोन: model, battery — मोबाईलची माहिती.\n\nअशा उदाहरणांमधून instance attributes प्रत्येक वस्तूवर कसे बसतात हे दिसतं. जसे प्रत्येक गाडी वेगळ्या रंगाची असते, तसंच प्रत्येक instance attribute वेगळ्या वस्तूवर वेगवेगळी मूल्ये घेऊ शकतो.\n\nअशा स्वतंत्र attributes चा वापर इतर धड्यात, विशेषतः encapsulation व property मध्ये महत्त्वपूर्ण आहे — तिथे नियंत्रित वाचन-लिखाण केले जाते. आजच्या उदाहरणांतून हा पाया घट्ट करा.",
      },
      {
        title: "सामान्य चुका — विस्तारित स्पष्टीकरण",
        content: "✗ सुरुवातीला self. attribute न ठेवता नंतर तो वापरणे — AttributeError येतो कारण तो वस्तूवर तयार झालेला नसतो.\n✗ class attribute च्या नावाशी instance attribute गोंधळणे — दोन वेगवेगळ्या गोष्टी; प्राधान्य instance ला असतं.\n✗ class attribute वर थेट बदल करणे — तो बदल सर्व वस्तूंवर लागतो; हे हवं असेल तरच करा.\n✗ method मध्ये plain variable ठेवणे — तो वस्तूवर नाही; self. वापरून कायम ठेवा.\n\nचुका झाल्यावर हे सगळं लक्षात ठेवून निरीक्षण करा; output वाताअनुसार त्रुटी कशा येतात ते पहा. programming म्हणजे 'चूक शोधून सुधारण्याची खेळी' — हीच सवय तुम्हाला मास्टर बनवेल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "attributes बद्दल अधिक समजण्यासाठी अधिकृत स्रोत:\n\n• class आणि instance variables: https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables\n• attributes ना access करण्याची रचना: https://docs.python.org/3/reference/expressions.html#attribute-references\n• setattr/getattr सारख्या built-ins: https://docs.python.org/3/library/functions.html#getattr\n• वस्तूच्या attributes मागील data model: https://docs.python.org/3/reference/datamodel.html#instance-attributes\n• ग्लॉसरी मधील instance: https://docs.python.org/3/glossary.html#term-instance\n• classes चा tutorial: https://docs.python.org/3/tutorial/classes.html\n• वस्तू/मूल्ये/प्रकार: https://docs.python.org/3/reference/datamodel.html#objects-values-and-types\n• name mangling बद्दल: https://docs.python.org/3/tutorial/classes.html#private-variables\n\nया प्रत्येक स्रोताचा अभ्यास केल्यानंतर तुमच्या मनात येणारे प्रश्न स्वतःलाच विचारा; उत्तर serve करणे म्हणजेच खऱ्या प्रगतीची नोंद.",
      },
    {
        title: "attributes मधील डेटा आणि method शी संबंध",
        content: "attributes हे वस्तूच्या डेटाचे थर असतात आणि method वस्तूवरील कृती होते. या दोघांच्या कामामुळे वस्तूची आत्मनिर्भरता निर्माण होते. उदा. क्रिकेटर वस्तूमध्ये runs आणि innings हे attributes आहेत; average ही method या दोन attributes चा वापर करून निकाल काढते. त्यामुळे accurate माहिती नेहमीच वस्तूपासून मिळते.\n\nattribute आणि method यांचे नातं असं आहे — method आपल्या वस्तूचे attributes वाचते किंवा बदलते. बाहेरून कोणीही attributes बदलू शकतं, पण व्यवस्थित रचनेत ते method द्वारे नियंत्रित होतं. पुढील धड्यात 'encapsulation' मध्ये हे नियंत्रण कसं करायचं ते दिसेल.\n\nएक गोष्ट लक्षात ठेवा: attributes चा आकडा बदलला की method चा निकाल आपोआप बदलतो. त्यामुळे transaction दरम्यान जेव्हा आकडा बदलला जातो तेव्हा पुढच्या calculations कोणत्याही वेळी चुकत नाहीत — याचा अर्थ data हा एकच स्रोत असतो.",
        code: `class Cricketer:
    def __init__(self, name, runs, innings):
        self.name = name
        self.runs = runs
        self.innings = innings

    def average(self):
        return self.runs // self.innings

v = Cricketer("विराट", 2000, 40)
print(v.name, v.average())
v.runs = 3000
print(v.name, v.average())`,
        codeLanguage: "python",
        output: `विराट 50
विराट 75`,
      },
      {
        title: "공유 vs स्वतंत्र attributes ची तुलना",
        content: "class attribute आणि instance attribute यांच्यात काय वेग आहे ते नेटके समजून घेण्यासाठी टेबल मनात ठेवा:\n\n• class attribute: class मध्ये सरळ लिहिलं; सर्व वस्तूंना समान दिसतं; बदल केला तर सर्वांना.\n• instance attribute: self.magual मध्ये वस्तूत; प्रत्येक वस्तूला वेगळं; बदल फक्त त्या वस्तूवर.\n\nआपण करत असलेल्या निर्णयाकडे पहा: एखादी माहिती सर्व वस्तूंसाठी national योग्य असेल तर ती class attribute; व्यक्तीची जर तर instance attribute. रोजचे उदाहरण: गणितातील परीक्षेचा एकूण गुण सर्वांना समान — class attribute; प्रत्येक विद्यार्थ्याचे गुण वेगवेगळे — instance attribute.\n\nही निवड योग्य करून कोड व्यवस्थित राहतो आणि बग कमी होतात. खासकरून मोठ्या projects मध्ये हे महत्त्वाचं आहे. आज धड्यात दोन्ही प्रकार वापरून पहा म्हणजे विसर our नाही.",
      },
      {
        title: "पुढच्या धड्यांना जोडणारे आधार",
        content: "attributes ची सवय पुढील प्रत्येक OOP धड्याला लागते. inheritance मध्ये मूल वर्ग पालकाचे attributes आपोआप घेतो; encapsulation मध्ये _balance सारखे खाजगी attributes वापरतो; property मध्ये _stock आणि stock हे आतला-बाहेरचा फरक दिसतो. हे सगळं attribute या मूळ संकल्पनेवर उभं आहे.\n\nम्हणूनच आजचा धडा तीन ओळींत सांगता येतो: class attribute सर्वांना समान, instance attribute प्रत्येकाला स्वतःचे; बदल करताना प्राधान्य instance ला; self. वापरल्यास attribute कायम राहतो. या आधारावर पुढची सगळी OOP सोपी जाते.\n\nअसं काही समजलं की तुम्ही आणखी पुढे शिकवू शकता — दुसऱ्याला समजावणं हीच सर्वोत्तम परीक्षा असते. तुम्हाला जे आज समजलं ते एका मित्राला सांगा; तो वाटल्यावर आत्मविश्वास वाढेल.",
        code: `class Film:
    language = "मराठी"

f1 = Film()
f2 = Film()
print(f1.language, f2.language)
f2.language = "हिंदी"
print(f1.language, f2.language)`,
        codeLanguage: "python",
        output: `मराठी मराठी
मराठी हिंदी`,
      },
      {
        title: "विविध नवीन उदाहरणे",
        content: "• झाड: वर्गातील प्रत्येक झाडाची उंची वेगळी; कुठल्याही झाडाला 'सदाहरित' या class मूल्याची जोड देणे.\n• उडणारे: plane ला model, speed; सर्व विमानांना हवेत उडण्यासाठी चालवण्याचा class attribute oil_required.\n• खादाड: पिझ्झाला size, toppings; सर्व पिझ्झांना base_rate हा class attribute.\n• शेती: पिकाला name, water_days; सर्व पिकांना season हा class attribute.\n\nअशा अनेक उदाहरणांचा संग्रह तयार करा; त्यामधून दोन attributes मधला फरक समजतो. तसेच प्रत्येक वस्तूची स्वतंत्र माहिती बाहेर दिसते — हे वास्तविक जगाचे रूप आहे.\n\nमग स्वतः दुसरा class बनवा — एक class attribute आणि एक instance attribute ठेवा; तर त्यातून परिणाम तपासा. हा प्रयोग धड्याची पकड इतकी घट्ट करेल की पुढे कधीही विसर होणार नाही.",
      },
      {
        title: "सविस्तर रेकॅप — काय घ्यायचं",
        content: "या धड्यात आपण शिकलो: attribute म्हणजे वस्तूचे गुणधर्म; त्यांचे दोन प्रकार — class attribute आणि instance attribute; class attribute सर्व वस्तूंना समान मिळते; self. attribute वस्तूत स्वतःची नोंद बनवतो; वस्तूवर दुरुस्त केल्यास फक्त ती वस्तू बदलते; class attribute वर बदल केल्यास सर्व वस्तूंवर लागतो; method attributes वापरून गणना करते.\n\nपुढील धडा 'Inheritance — वारसा' मध्ये ही दोन्ही प्रकारची attributes मुलाच्या वर्गात कशी येतात ते दिसेल. पालकाचे class attribute आणि instance attribute दोन्ही मुलाला मिळतात; मग मुल आपल्या स्वतःच्या नवीन जोडू शकतो.\n\nसरावाचा एक चांगला कार्यक्रम: आजच्या नोट्समध्ये दोन attributes चा फरक एका furniture उदाहरणात लिहा. उदा. सर्व खुर्च्यांना legs = 4 (class); प्रत्येक खुर्चीला color वेगवेगळा (instance). असा नमुना तुमच्या नोट्समध्ये राहिल्यास उत्तम.",
        code: `class Chair:
    legs = 4

c1 = Chair()
c1.color = "तपकिरी"
c2 = Chair()
c2.color = "काळी"
print(c1.legs, c1.color)
print(c2.legs, c2.color)`,
        codeLanguage: "python",
        output: `4 तपकिरी
4 काळी`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "attributes च्या अभ्यासासाठी अधिक अधिकृत संसाधने:\n\n• https://docs.python.org/3/tutorial/classes.html#class-and-instance-variables\n• https://docs.python.org/3/reference/expressions.html#attribute-references\n• https://docs.python.org/3/reference/datamodel.html#instance-attributes\n• https://docs.python.org/3/library/functions.html#getattr\n• https://docs.python.org/3/library/functions.html#setattr\n• https://docs.python.org/3/library/functions.html#hasattr\n• https://docs.python.org/3/glossary.html#term-attribute\n• https://docs.python.org/3/tutorial/classes.html#private-variables\n\nया प्रत्येक संसाधनाची माहिती वाचून उदाहरणे लिहा; सुसंगत अंक dry or उदाहरणे माझ्याकडून पुढे उपयोगी पडतील.",
      },
    {
        title: "निरीक्षण प्रश्न — attributes विषयी",
        content: "१. class attribute कोठे लिहिला जातो? उत्तर: class च्या ओघात, कोणत्याही method च्या बाहेर.\n२. instance attribute कसा तयार होतो? उत्तर: self.attribute = value अशा नियमाने object मध्ये.\n३. दोघांमध्ये मुख्य फरक काय? उत्तर: class attribute सर्व वस्तूंना समान होतो; instance attribute स्वतःच वस्तूत वेगळा.\n४. एका वस्तूने attribute बदलला तर? उत्तर: बदल त्या वस्तूवरच राहतो; इतर वस्तू तशाच.\n५. class attribute बदलल्यास? उत्तर: सर्व वस्तूंना तो बदल दिसतो (वस्तूवर स्वतःच मूल्य असेल तर वेगळं).\n\nही पाच उत्तरं आत्मसात करा; पुढे प्रत्येक OOP धड्यात तुम्हाला माहीत असलेलं उत्तर येईल. आजच्या सरावाची हीच मुख्य पकड आहे.",
        code: `class Test:
    total = 100

a = Test()
b = Test()
print(a.total, b.total)
b.total = 95
print(a.total, b.total)`,
        codeLanguage: "python",
        output: `100 100
100 95`,
      },
      {
        title: "एकात्मिक उदाहरण — तग धरून",
        content: "एका सर्वांत मोठ्या project चा विचार करा: शाळेसाठी डेटा मॅनेजमेंट. प्रत्येक विद्यार्थ्याला instance attributes — name, roll, marks; प्रत्येक शाळेला class attributes — school_name, medium. असं एकत्र केल्यावर किती तरी कोडच ठिक राहतं.\n\nअशा एकत्राचा वापर वास्तविक software मध्ये होतो — application चे settings class attributes म्हणून; user डेटा instance attributes म्हणून. दोन्ही एकत्र ठेवल्याने कोड रीडॅबल आणि देखणा राहतो.\n\nसराव म्हणून स्वतः अशी रचना बनवा — टेबलची दुकानाची यादी, ग्राहकांची यादी, बिल — सर्वत्र हेच तत्त्व. अशा वेळी attributes म्हणजे वस्तूचे 'हातातील सामान' — कुठे shared कुठे private — ठरून चालते.",
        code: `class School:
    school_name = "सरस्वती विद्यालय"
    medium = "मराठी"

    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

s1 = School("आरोही", 85)
print(School.school_name)
print(s1.name, s1.marks)`,
        codeLanguage: "python",
        output: `सरस्वती विद्यालय
आरोही 85`,
      },
    {
        title: "attributes च्या नावासंबंधी स्वच्छता",
        content: "attributes ची नावे स्पष्ट, पूर्ण आणि अर्थपूर्ण असावीत — ताबडतोब कळलं पाहिजे की काय साठवलेलं. length, width असं स्पष्ट; x, y अशी अस्पष्ट नावे टाळा. विशेषतः कोड अनेक लोकांना वाचण्यासमवेत असेल तर तर सुस्पष्ट नावे संपूर्ण project मध्ये काम करतात.\n\nPython मधील नियमानुसार attribute लहान अक्षरांनी; दोन शब्द असल्यास underscore ने जोडा. जुळलेले शब्द म्हणजे vocabulary ची सहज वाचण्याची सोय. कधी कधी प्रकार अगोदरच स्पष्ट असतो, तर name_quantity सारखी नावेही तयार करता येतात.\n\nकाही नावे आरक्षित असतात (class, def, for, while) — ती attribute साठी वापरू नका; जर वापरलीच तर चुकीचा अर्थ निघेल. हीच शिस्त function आणि variable साठीही आहे — आजपासूनच सवय लावा, मग मोठ्या project सुद्धा सुरळीत राहतात.",
      },
      {
        title: "सामान्य प्रश्नोत्तरे — attributes",
        content: "प्रश्न: सर्व वस्तूंना एकच value हवी, तर काय कराल? उत्तर: deep class attribute वापरा.\nप्रश्न: प्रत्येक वस्तूला वेगळी value हवी? उत्तर: __init__ मध्ये self.attribute वापरून ठेवा.\nप्रश्न: एखाद्याने मधून attribute बदलला तर? उत्तर: वस्तू स्वतःचं value ठेवते; design नुसार परिणाम.\nप्रश्न: method मध्ये attribute नसल्यास काय? उत्तर: AttributeError; आधी self.attribute ठरवा.\n\nहे चार प्रश्न-उत्तरांचे नमुने धड्याचा सार सांगतात. यासंदर्भात शालेय नोट्स बनवून पुढे वेळोवेळी उलटवा. प्रत्येक OOP धड्यानंतर अशीच चार प्रश्नोत्तरे तयार करण्याची सवय तुमच्या आत्मपरीक्षणाला उपयोगी पडेल.",
      },
    {
        title: "मानसिक तपासणी — प्रत्येक attribute साठी विचारले जाणारे प्रश्न",
        content: "एकाच प्रकारची बर्याच वस्तू असतील तर कोणता attribute class वर ठेवायचा आणि कोणता self वर? तीन प्रश्न नेहमी विचारा:\n\nपहिला: ही मूल्य सर्व वस्तूंना सारखीच असते का? होय — class attribute.\nदुसरा: प्रत्येक वस्तू वेगळ्या मूल्यासह भरते का? होय — instance attribute.\nतिसरा: बदलले तर कोणाला दिसेल? सर्वांना — class attribute; एकालाच — instance attribute.\n\nही तीन प्रश्नांची नेट такая तपासणी वापरून कोणताही project च्या attributes ची निवड करता येते. नाममात्र नियम हेच OOP मधील प्रत्येक निर्णयात येतात.\n\nही तपासणी तुमच्या सर्व OOP धड्यांमध्ये वापरत राहा. नंतर encapsulation, property अशा धड्यांमध्ये आताच्या निवडीवर आधार जोडला जातो; तेव्हा तुमची तयारी उत्तम असल्यास कितीक वेळ वाचतो.",
        code: `class Book:
    edition = 1

b1 = Book()
b2 = Book()
b1.title = "श्रीमान योगी"
b2.title = "पाणिपत"
print(b1.title, b1.edition)
print(b2.title, b2.edition)`,
        codeLanguage: "python",
        output: `श्रीमान योगी 1
पाणिपत 1`,
      },
    ],
    practiceQuestions: [
      "class attribute म्हणजे काय?",
      "instance attribute कसा तयार होतो?",
      "दोघांमध्ये काय फरक?",
      "एका वस्तूने attribute बदलला तर?",
    ],
    quiz: [
      { question: "class attribute कुठे लिहितात?", options: ["__init__ च्या आत", "method मध्ये", "class च्या मध्ये सरळ", "function मध्ये"], correct: 2 },
      { question: "प्रत्येक वस्तूचा खास गुणधर्म कोणता?", options: ["class attribute", "instance attribute", "module", "global"], correct: 1 },
      { question: "एका वस्तूचा instance attribute बदलला तर इतर वस्तूंचा बदलतो का?", options: ["होय", "नाही", "कधी कधी", "एरर येतो"], correct: 1 },
    ],
    challenge: {
      prompt: "Battery class मध्ये instance attribute 70 व class attribute 100 ठेवून दोन्ही प्रिंट करा.",
      starterCode: `class Battery:
    max_level = 100

    def __init__(self, level):
        self.level = level

b = Battery(70)
print(b.level, Battery.max_level)`,
      expectedOutput: "70 100",
    },
    interviewQuestions: [
      "class attribute vs instance attribute?",
      "कोणाला प्राधान्य — self.attribute की class attribute?",
    ],
    related: ["python-methods", "python-init", "python-inheritance"],
    prev: "python-methods",
    next: "python-inheritance",
  },

  {
    slug: "python-inheritance",
    categoryId: "python",
    title: "OOP - Inheritance",
    marathiTitle: "Inheritance - वारसा",
    level: "intermediate",
    minutes: 15,
    summary: "पालक वर्गाचे गुणधर्म व पद्धती मुलाकडे वारशाने — inheritance ची सोपी मांडणी.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Inheritance - वारसा चे फायदे आणि महत्त्व",
        content: "✓ रचना पुन्हा लिहायची नसते, तीच वापरायची असते — वारसा घेणं म्हणजेच यातला फायदा.\n✓ पगाराची रचना Employee मध्ये एकदाच लिहून ठेवली; ती पुन्हा लिहायची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "वारसा (inheritance) म्हणजे काय?",
        content: "मूल पालकांकडून स्वभाव आणि गुण घेतं — हीच वारसाची कल्पना प्रोग्रामिंगमध्येही आहे. पालक वर्ग (parent/super/base) चे method आणि attributes मूल वर्गाला (child/sub) आपोआप मिळतात.\n\nमूल पालकाचे सगळे गुणधर्म वापरू शकतो आणि त्यात स्वतःचे नवीन जोडू शकतो. रचना साधी असते: class Child(Parent): — कंसात पालकाचं नाव. हे सूत्रच inheritance ची चावी आहे.",
      },
      {
        title: "प्राणी आणि कुत्रा",
        content: "\"प्राणी\" हा पालक वर्ग समजा — त्याचं नाव द्यायचं आहे, म्हणून त्याने __init__ लिहिला. \"कुत्रा\" हा मूल — प्राण्यामधला नाव देणारा __init__ वारशाने घेतो आणि आपला खास आवाज जोडतो.\n\nरचना पुन्हा लिहायची नसते, तीच वापरायची असते — वारसा घेणं म्हणजेच यातला फायदा. नवा प्राणी जोडायचा असेल तर त्याच साच्यातून नवीन method आणि आवाज देता येतो.",
      },
      {
        title: "पालकाकडून __init__ वारसा",
        content: "class Dog(Animal) लिहिलं की Dog ला Animal मधलं सगळं आपोआप मिळतं. Dog ने स्वतःचा __init__ लिहिला नाही — म्हणून त्याला पालकाचा __init__ वारसा मिळतो आणि d = Dog(\"रेक्स\") मध्ये name आपोआप बसतं.\n\nDog ने speak मात्र नव्याने लिहिली — \"भू - भू\". output मध्ये रेक्स आणि भू - भू दिसतं. पालकाची speak असतेच, पण मुलाने दिलेली नवीन आवृत्ती पुढे येते.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "आवाज"

class Dog(Animal):
    def speak(self):
        return "भू - भू"

d = Dog("रेक्स")
print(d.name)
print(d.speak())`,
        codeLanguage: "python",
        output: `रेक्स
भू - भू`,
      },
      {
        title: "गाय — पालकाची method बदलणे",
        content: "गाय ही प्राण्यातूनच. Cow(Animal) ने पालकाकडून नाव देणारा __init__ घेतला आणि speak अशीच नव्याने दिली — \"हंबर\". c = Cow(\"गंगा\"); print(c.name, c.speak()) म्हणून output गंगा हंबर दिसतं.\n\nपालकाची रचना न बदलता मुलाची method वेगळी करणे हा inheritance चा सर्वात उपयुक्त वापर. मांजर, शेळी अशा नव्या प्राण्यांसाठी हाच नमुना पुन्हा करता येतो.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "आवाज"

class Cow(Animal):
    def speak(self):
        return "हंबर"

c = Cow("गंगा")
print(c.name, c.speak())`,
        codeLanguage: "python",
        output: `गंगा हंबर`,
      },
      {
        title: "उदाहरण: कर्मचारी आणि व्यवस्थापक",
        content: "कार्यालयात व्यवस्थापक हा कर्मचारीच असतो — फक्त अधिक जबाबदारी. Manager(Employee) मध्ये Employee चा __init__ वारसा म्हणून आला आणि bonus ही स्वतःची नवीन माहिती जोडली.\n\nकिरण हा 40000 पगाराचा व्यवस्थापक; m.salary + m.bonus म्हणजे 45000 — output किरण 45000. पगाराची रचना Employee मध्ये एकदाच लिहून ठेवली; ती पुन्हा लिहायची गरज नाही.",
        code: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    bonus = 5000

m = Manager("किरण", 40000)
print(m.name, m.salary + m.bonus)`,
        codeLanguage: "python",
        output: `किरण 45000`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ class Dog: असं कंस विसरून लिहिणं — मग तो inheritance ठरत नाही; तो फक्त साधा नवा class असतो आणि पालकाचे गुण मिळत नाहीत.\n\n✗ मुलाने __init__ पुन्हा लिहिला तर पालकाचा वारसा तुटतो — पालकाची सुरुवात हवी असेल तर super() वापरा (पुढचे धडे).\n\n✗ isinstance कसोटी न करता वारसा असल्याचं गृहीत धरणं.\n\nखाली कंस विसरलेल्या Dog चीच कसोटी आहे. print(isinstance(d, Animal)) ने output False दिसतं — कंसात पालकाचं नाव असेल तरच वारसा खरा होतो.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog:
    # (Animal) विसरलो — त्यामुळे वारसा नाही
    def __init__(self, name):
        self.name = name

d = Dog("रेक्स")
print(isinstance(d, Animal))`,
        codeLanguage: "python",
        output: `False`,
      },
      {
        title: "इंटरॅक्टिव्ह: Vehicle पासून Car",
        content: "Vehicle (वाहन) पासून Car (गाडी) बनवली आणि Car मध्ये msg ही नवीन method जोडली: self.brand + \" ची गाडी\". c = Car(\"Mahindra\"); c.msg() ने output मध्ये Mahindra ची गाडी दिसतं.\n\nVehicle ला brand देणारा __init__ होता; Car ने तो वारसा घेतल्याने brand इथेही उपलब्ध आहे. वारसा म्हणजे एक साचा, त्यातून अनेक प्रकारच्या गाड्या.",
        code: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

class Car(Vehicle):
    def msg(self):
        return self.brand + " ची गाडी"

c = Car("Mahindra")
print(c.msg())`,
        codeLanguage: "python",
        output: `Mahindra ची गाडी`,
      },
      {
        title: "Mini Project — मोजक्या वस्तूंचे बिल",
        content: "मोजक्या (per piece) वस्तूंचं बिल बनवणारा छोटा प्रकल्प. Item वर्ग name व price घेऊन bill method करतो. Counted(Item) मध्ये qty ही अतिरिक्त माहिती आणि bill method प्रमाणानुसार गुणाकार करतो — साखर 45 × 2 म्हणजे 90 रुपये.\n\nCounted ने स्वतःचा __init__ लिहिल्यामुळे त्याला पालकाची सुरुवातही हवी; त्यासाठी super().__init__(name, price) वापरलंय — super चा तपशील पुढच्या धड्यात येणार आहे. आत्ता output बघा: पाव: ₹10 आणि साखर x2: ₹90.",
        code: `class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def bill(self):
        return self.name + ": ₹" + str(self.price)

class Counted(Item):
    def __init__(self, name, price, qty):
        super().__init__(name, price)
        self.qty = qty

    def bill(self):
        return self.name + " x" + str(self.qty) + ": ₹" + str(self.price * self.qty)

print(Item("पाव", 10).bill())
print(Counted("साखर", 45, 2).bill())`,
        codeLanguage: "python",
        output: `पाव: ₹10
साखर x2: ₹90`,
      },
    {
        title: "वारसा कशासाठी — फायद्यांचे खोलवर भाषण",
        content: "inheritance चा मुख्य फायदा म्हणजे कोडचा पुनर्वापर — पालक वर्गातील एकदा लिहिलेली रचना मुलांनी पुन्हा लिहायची गरज नाही. उदा. Employee चा __init__ एकदा लिहिला तर Manager ला तो आपोआप मिळतो. अशा रचनेने कामाचा वेळ वाहतो आणि चुकाही कमी होतात.\n\nदुसरा फायदा म्हणजे रचनेची शिस्त. मुळात सर्व प्राणी, सर्व वाहने, सर्व कर्मचारी यांच्या सामान्य गोष्टी पालक वर्गात ठेवतो आणि विशेष गोष्टी मूल वर्गात. ही पद्धत जगातली वस्तू व्यवस्थित उतरवते — कोड वाचणाऱ्याला सहज समजतं की काय सामान्य, काय खास.\n\nतिसरा फायदा म्हणजे विस्तार — नवीन मूल वर्ग बनवून आधीच्या रचनेत बदल न करता कार्यक्षमता वाढवता येते. उदा. नवीन पक्षी वर्ग जोडायचा तर तो Bird पासून बनवून फक्त विशेष आवाज द्या. बाकीचं सगळं आपोआप मिळतं. हीच inheritance ची मुख्य दिशा.",
      },
      {
        title: "वारसा म्हणजे काय — खोलवर",
        content: "class Child(Parent): — कंसातील नाव पालकाचं. Python हे वाचल्यावर मुलाच्या वर्गात पालकाचे सर्व attributes आणि methods आपोआप दाखवतो. मुल शांतपणे त्याच्यावर किंवा आपल्या नवीन गोष्टी जोडतो.\n\nमुलाच्या वर्गात जर पालकाच्या नावाने नवीन method लिहिली, तर ती नवीन आवृत्ती पालकाची मागे सारते — याच नावाने overriding. पण पालकाची method वापरायची असेल तर super() उपयुक्त — हे पुढच्या धड्यांत शिकू will. आत्ता फक्त मूल वर्गाला पालकाच्या रचनेचा पूर्ण access मिळतो यावर लक्ष केंद्रित करा.\n\nवारसा पालक-मूल अशी एका दिशेने जातो; पालकाला मुलाची नवीन गोष्ट माहीत नसते. म्हणूनच सामान्य गोष्टी पालकात, विशेष गोष्टी मुलात. हा दिशेचा नियम सर्व OOP languages मध्ये आहे आणि inheritance चा गाभा म्हणून प्रत्येक स्तरावर वापरला जातो.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def sound(self):
        return "भू - भू"

d = Dog("रेक्स")
print(d.name)
print(d.sound())`,
        codeLanguage: "python",
        output: `रेक्स
भू - भू`,
      },
      {
        title: "पालकाची __init__ आलेली नसल्यास?",
        content: "जर मूल वर्गाने स्वतःचा __init__ लिहिला असेल, तर पालकाचा __init__ आपोआप चालत नाही. त्यामुळे आपल्याला पालकाने सांभाळलेली माहिती हवी असेल तर ती सुपुर्तeg द्यावी लागते — super().__init__(...) द्वारे. तोच नियम पुढच्या धड्यात detail मध्ये येईल.\n\nअन्यथा मुलाने नवीन __init__ लिहिला तर पूर्वीची पालकातली माहिती भरत नाही; ती जागा रिकामी राहते आणि आपण पालकातील attribute वर विश्वास ठेवू नका. उदा. Employee च्या __init__ ने name घेत असेल; Manager ने स्वतःचा __init__ लिहिला तर name त्यात मोठी झाला पाहिजे.\n\nव्यवहारात बर्याच वेळा मुलाला फक्त नवीन माहिती जोडायची असते — तेव्हा super().__init__ आणि नंतर नवीन self.attribute लिहिलं जातं. ही रचना जबरदस्त common आहे; प्रत्येक OOP project मध्ये तुम्हाला दिसेल.",
        code: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Developer(Employee):
    def __init__(self, name, salary, lang):
        super().__init__(name, salary)
        self.lang = lang

d = Developer("अंकित", 50000, "Python")
print(d.name, d.salary, d.lang)`,
        codeLanguage: "python",
        output: `अंकित 50000 Python`,
      },
      {
        title: "वारसा वापरताना व्यावहारिक उदाहरणे",
        content: "• वाहने: Vehicle पासून Car, Bike, Bus — प्रत्येकाला wheels, model मिळतं.\n• शाळा: Student पासून DayScholar, Hosteler — दोघांनाही name, cls मिळतं.\n• दुकान: Product पासून Food, Electronics — प्रत्येकाला name, price.\n• खेळ: Athlete पासून Runner, Swimmer — दोघांनाही name, timing.\n\nअशा प्रत्येक example मध्ये सामान्य गोष्टी पालकात आणि विशेष गोष्टी मुलात. या रचनेमुळे कोड तिन्ही ठिकाणी सारखा असताना तो पुन्हा लिहिला जात नाही — केवळ एकदा पालकात लिहिला जातो आणि सर्वांना वारसा मिळतो.\n\nमग स्वतःचे two examples तयार करा: मूल वर्ग पालकाकडून attributes घेतो; त्यावर अधिक विशेष गुणधर्म जोडतो. अशा मराठी उदाहरणांनी inheritance चे सार कळण्यास वेग लागतो.",
        code: `class Vehicle:
    def __init__(self, name):
        self.name = name

class Car(Vehicle):
    wheels = 4

class Bike(Vehicle):
    wheels = 2

c = Car("इको")
b = Bike("स्पेशल")
print(c.name, c.wheels)
print(b.name, b.wheels)`,
        codeLanguage: "python",
        output: `इको 4
स्पेशल 2`,
      },
      {
        title: "चुका कशा टाळता — सविस्तर",
        content: "✗ कंस विसरून class Dog: लिहिणे — तर वारसा मिळत नाही; पालकाचे गुण अजिबात सापडत नाहीत.\n✗ मुलाने __init__ लिहिल्यावर पालकाचा __init__ कॉल न करणे — पालकाची माहिती भरत नाही.\n✗ पालकाचा class preposition मधला abstract concept समजून न घेणे — मूल पालकाची रचना वापरू शकतं पण पालकाला मुलाची माहिती नसते.\n✗ isinstance तपासणी न करणे — वारसा गृहीत न धरता तपासणी करा.\n\nचुका टाळण्याची खरी तयारी म्हणजे शुद्ध लेखन — हातांनी तोडफोडीतून नव्हे. प्रत्येक चूक कशी दिसते ते लक्षात ठेवल्यास प्रत्येक नवीन प्रोग्राम स्वच्छ जातो.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "inheritance बद्दल अधिक वाचण्यासाठी अधिकृत स्रोत:\n\n• classes चा tutorial मध्ये inheritance: https://docs.python.org/3/tutorial/classes.html#inheritance\n• multiple inheritance चा उल्लेख: https://docs.python.org/3/tutorial/classes.html#multiple-inheritance\n• isinstance(): https://docs.python.org/3/library/functions.html#isinstance\n• issubclass(): https://docs.python.org/3/library/functions.html#issubclass\n• ग्वारसा आणि पालक वर्ग: https://docs.python.org/3/glossary.html#term-base-class\n• मूल वर्गची व्याख्या: https://docs.python.org/3/glossary.html#term-derived-class\n• data model मधील inheritance: https://docs.python.org/3/reference/datamodel.html\n• MRO (method resolution order): https://docs.python.org/3/tutorial/classes.html#method-resolution-order\n\nही सर्व अधिकृत संसाधने बुकमार्क करा; प्रत्येक धड्यानंतर पुनर्वाचन करा. inheritance समजल्यावर super(), overriding, polymorphism हे सर्व सोपे होतात.",
      },
    {
        title: "वारसा मागे सगळ्या method चा वापर",
        content: "मुल वर्ग पालकाच्या सर्व method वापरू शकतो — ज्या पद्धती त्याने स्वतः override केल्या नाहीत त्या पालकातून मिळतात. उदा. Cow ने speak override केली; पण जर ती override नसती तर Cow ला पालकाची speak मिळाली असती.\n\nहे तत्त्व विस्तारासाठी खूप महत्त्वाचं — एका पालकाची method ही सर्व मुलांना विनामूल्य मिळते. त्यामुळे नवीन मूल वर्ग जोडताना फक्त त्या विशेष गोष्टी लिहा ज्या त्या मुलाच्या विशेष असतात.\n\nआणखी एक गोष्ट: मूल वर्ग पालकाच्या attributes वरही access घेऊ शकतो — name, sound सारखे. उदा. Cow ला पालकाचा name attribute मिळतो आणि ती त्याच्यावर काम करू शकते. अशा संयोजनामुळे inheritance ची पूर्ण शक्ती दिसते.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "आवाज"

class Cat(Animal):
    def speak(self):
        return "म्यांव"

class Dog(Animal):
    pass

print(Cat("मिनी").speak())
print(Dog("रेक्स").speak())`,
        codeLanguage: "python",
        output: `म्यांव
आवाज`,
      },
      {
        title: "object की class — नावाच्या शुद्धतेची पडताळणी",
        content: "काही नवशिके inheritance मध्ये नावांचा गोंधळ करतात — class नाव आणि object नाव. class हा साचा, object ही वस्तू; दोन्ही वेगवेगळे. तसेच पालक वर्गाला base class म्हणतात; मुलाला derived class किंवा subclass. ही नावे अचूक ठेवल्यास संवाद स्पष्ट राहतो.\n\nतपासणी करण्यासाठी दोन built-in functions उपयोगी — isinstance(object, Class) आणि issubclass(Child, Parent). पहिली वस्तू त्या वर्गाची आहे का; दुसरी वर्ग दुसऱ्या वर्गाचा मूल आहे का. दोन्ही True/False देतात.\n\nया पडताळण्या projects मध्ये design time ला खूप उपयुक्त असतात — वारसा योग्यरीतीने जोडला आहे की नाही हे ओळखता येतं. तसेच code वाचताना कोणता वर्ग कोणत्या वर्गाकडून आला हे त्याच्या उतरती माहितीतून स्पष्ट होतं.",
        code: `class Animal:
    pass

class Dog(Animal):
    pass

d = Dog()
print(isinstance(d, Dog))
print(isinstance(d, Animal))
print(issubclass(Dog, Animal))`,
        codeLanguage: "python",
        output: `True
True
True`,
      },
      {
        title: "संवादी अभ्यास — questions वाचा",
        content: "१. मुलाला पालकाकडून काय मिळतं? उत्तर: attributes आणि methods; आणि आवश्यक असल्यास नवीन जोडू शकतो.\n२. वारशाचा मुख्य फायदा काय? उत्तर: कोड पुन्हा लिहायचा नसतो.\n३. मुलाने __init__ लिहिला तर पालकाचा आपोआप चालतो का? उत्तर: नाही; super() ने मिळवावा.\n४. कंस विसरला तर काय होतं? उत्तर: वारसा नाही; class सरळ mutation होतं.\n५. nested वारसा किती खोल? उत्तर: कितीही; पण व्यवहारात 2-3 थर पुरेसे.\n\nस्वतःच्या शब्दांत उत्तरे म्हणा; मग कोड लिहून तपासा. या अभ्यासात अडल्यास मागचा धडा पुन्हा वाचा — कारण inheritance ची रचना एकदा पक्की झाली की पुढे सगळं स्थिर.",
      },
      {
        title: "properties वरून वारसा — फरक",
        content: "inheritance आणि encapsulation यात दडलेला फरक समजून घ्या: inheritance हे वर्गांमधील नाते — मूल पालकाकडून रचना घेते; encapsulation ही वस्तूमधील नियंत्रणाची पद्धत — data केवळ method द्वारे बदलतो. दोन्ही एकत्र वापरता येतात कारण inheritance ही एक रचना आहे आणि encapsulation ती रचना कशी वापरायची याची शिस्त.\n\nउदाहरणाद्वारे: पालक Bank चा _balance आणि deposit() method; मूल SavingsBank त्याचाच वापर करून व्याज जोडतं — येथे वारसा (मूल) + encapsulation (_balance) एकत्र. असा एकत्रित वापर वास्तविक projects मध्ये सर्वत्र दिसतो.\n\nहे फरक समजल्यावर OOP ची पूर्ण चित्रं स्पष्ट होते; तुम्ही प्रत्येक संकल्पना कोठे लागते ते निवडू शकता.",
        code: `class Bank:
    def __init__(self, balance=0):
        self._balance = balance

    def deposit(self, amount):
        self._balance += amount

class Savings(Bank):
    def add_interest(self, rate):
        self._balance += self._balance * rate // 100
        return self._balance

a = Savings(1000)
a.deposit(500)
print(a.add_interest(10))`,
        codeLanguage: "python",
        output: `1650`,
      },
      {
        title: "सराव प्रश्न — वारशाच्या रोजच्या अर्थापर्यंत",
        content: "जीवनात वारशाची उदाहरणे नक्की सापडतील — मूल पालकाकडून गुण घेते; मग स्वतःचे जोडते. Python मध्ये तेच घडते: कोडमध्ये पालक वर्गातील attributes आणि methods मुलाकडे येतात. हे नातं कायम एकतर्फी राहतं.\n\nआपल्या घराबाहेरचं उदाहरण घ्या: आजीचीाकडील पाककृती, बाबांच्या गाडीची हाताळणी — हे 'वारसाघेणे' तर common knowledge आहे. same मालिकेत inheritance म्हणजे वस्तूच्या रचनेत पुनर्वापर — वेळ वाचवणं, चुका टाळणं.\n\nप्रत्येक नवा class लिहिताना प्रश्न करा: 'माझ्याकडे आधीपासून रचना आहे का जिच्यायोगे हा नवा class बनू शकतो?' उत्तर होय असेल तर inheritance वापरा. हा प्रश्न लाखदा विचारा म्हणजे code natural आणि शिस्तबद्ध राहतो.",
        code: `class Gadget:
    def __init__(self, name):
        self.name = name

class Phone(Gadget):
    def call(self):
        return self.name + " रिंग होतो"

p = Phone("माझा फोन")
print(p.call())`,
        codeLanguage: "python",
        output: `माझा फोन रिंग होतो`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "inheritance वरील अधिक अधिकृत संसाधने:\n\n• https://docs.python.org/3/tutorial/classes.html#inheritance — वारसा.\n• https://docs.python.org/3/tutorial/classes.html#multiple-inheritance — मिश्र वारसा.\n• https://docs.python.org/3/library/functions.html#super — super() संदर्भ.\n• https://docs.python.org/3/library/functions.html#issubclass — issubclass.\n• https://docs.python.org/3/glossary.html#term-inheritance — glossary मध्ये व्याख्या.\n• https://docs.python.org/3/glossary.html#term-parent-class — पालक वर्ग.\n• https://docs.python.org/3/glossary.html#term-child-class — मूल वर्ग.\n• https://docs.python.org/3/reference/datamodel.html#customization — class customization.\n\nवेळोवेळी या स्रोतांचा अभ्यास करा; दोन-तीन दिवसांनी पुन्हा वाचल्यास तुमची समज घट्ट होईल. inheritance समजल्याने पुढील super() आणि overriding हे नैसर्गिकरीत्या समजतात.",
      },
    {
        title: "पालक वर्गातील नावे मुलात कशी दिसतात",
        content: "जेव्हा मूल वर्ग पालक वर्गातून वारसा घेतो तेव्हा पालकातील प्रत्येक attribute आणि method मुलाच्या namespace मध्ये येते. उदा. Animal मध्ये self.name, __init__, speak; Dog(Animal) ला त्या तिघांची नोंद दिसते. हा एक प्रकार आहे आणि त्यामुळे मूल वर्गाला पालकाकडे झुकायची गरज नसते.\n\nही नोंद वारसा घेतलेल्या वेळेपासून कायम असते; मूल वर्ग पालकातील नाव बदलू शकत नाही — तो फक्त त्याच्यावर नवीन आवृत्ती लिहू शकतो. हा फरक महत्त्वाचा आहे: 'बदलणे' नव्हे, तर 'आच्छादन' होतं. मूळ पालकाची method मुळात नाहीशी होत नाही.\n\nहेच कारण आहे की overriding मध्ये जुनी पद्धत super() द्वारे पुन्हा वापरता येते — ती अजूनही पालकात उपलब्ध आहे म्हणून. अशी सजग रचना OOP मध्ये code विस्तार करण्यासाठी आदर्श ठरते.",
        code: `class Animal:
    def speak(self):
        return "आवाज"

class Dog(Animal):
    def speak(self):
        return super().speak() + " आणि भू भू"

d = Dog()
print(d.speak())`,
        codeLanguage: "python",
        output: `आवाज आणि भू भू`,
      },
      {
        title: "वारशाचे प्रकार — single आणि multiple",
        content: "Python मध्ये दोन प्रकारचे वारसा आहेत: single inheritance — एक मूल एक पालक; आणि multiple inheritance — एक मूल एकापेक्षा जास्त पालकांतून घेतो. विविधता विस्तारासाठी उपयुक्त असली तरी गुंतागुंत वाढवते. या टप्प्यात single inheritance वरच पुरेसा भर आहे.\n\nmultiple inheritance लिहिताना class Child(A, B): अशी रचना असते; method दोघांपैकी कोणाची येते ते MRO ठरवते. हे process खूप खोल व जटिल आहे; सुरुवातीला फक्त single वापरा. एकाच पालकागत एकाच दिशेला वारसा मिळतो हे मुख्य तत्त्व होय.\n\nहे प्रकार समजल्यावर तुम्ही project नुसार रचना निवडू शकता. बर्याच व्यावहारिक application मध्ये तीन-चार थरांचा single वारसा असतो; तो शांत व व्यवस्थित राहतो.",
        code: `class A:
    def who(self):
        return "A"

class B:
    def who(self):
        return "B"

class C(B):
    pass

print(C().who())`,
        codeLanguage: "python",
        output: `B`,
      },
      {
        title: "परीक्षा — तुम्ही किती कळलात?",
        content: "खालील प्रश्नांची उत्तरे स्वतःलाकडे विचारा आणि नंतर कोड लिहून तपासा:\n\n१. class Dog(Animal): मध्ये काय होतं? उत्तर — Dog ला Animal चे सगळे गुण मिळतात.\n२. मुलाने speak override केल्यास कोणती चालते? उत्तर — मुलाची; पालकाची super() ने मिळते.\n३. पालकाची माहिती मुलात super() शिवाय मिळते का? उत्तर — attributes व method सरळ मिळतात; फक्त __init__ पुन्हा लिहिल्यास super() लागतो.\n४. isinstance कधी उपयोगी? उत्तर — तपासणी करण्यासाठी; त्या वस्तूच्या पालक-मूल नात्याची.\n\nप्रत्येक प्रश्नाची उत्तरं भूतनुभवातून तयार झाली पाहिजेत — कोड लिहून, बदलून, चालवून. त्या सरावानेच inheritance ची अंडरस्टॅंडिंग पक्की होते.",
      },
      {
        title: "उद्योगातील वापर — inheritance कुठे?",
        content: "मोठ्या सॉफ्टवेअर मध्ये inheritance ठिकठिकाणी आढळते — API लायब्ररींमध्ये base classes जोडलेल्या असतात; framework मध्ये तुमची नवीन क्लास त्याच्या parent वर बसते; UI मध्ये विंडोज असतात टेक्स्ट व बटणांसाठी. हे सर्व वारशावरच उभं असतं.\n\ndjango, Flask फ्रेमवर्कमध्ये तुमच्या मॉडेल वर्गाला base model वारसा दिला जातो; चाचणी लिहिताना base test class पासून वारसा घेतला जातो. त्यामुळे library इस्तेमाल करण्यासाठी inheritance समजून घेणं मदत करतं.\n\nहा ज्ञान रोजच्या कोडिंगमध्ये कामाला येतो — आजपासून सगळे मोठे project थोडा inheritance चा वापर त्रिकाळात करतात. आत्ता शिकलेली संकल्पना व्यावसायिक जगात उलथून लागणार आहे.",
      },
    {
        title: "पुनरावलोकन — धड्याचा सारांश",
        content: "या धडयात inheritance म्हणजे मूल पालकाकडून गुणधर्म व पद्धती वारशाने घेणे हे शिकलो. class Child(Parent): या रचनेने वारसा दिला जातो; तो कंस विसरल्यास वारसा नाही. मूल पालकाच्या सर्व attributes व methods वापरू शकतो आणि नव्या जोडू शकतो.\n\nमूल override केलेल्या method ची नवीन आवृत्ती चालवतो; पालकाची जुनी super() ने मिळते. isinstance आणि issubclass या तपासण्या वापरून वारसा पडताळता येतो. मुलाने स्वतःचा __init__ लिहिल्यास पालकाचा आपोआप चालत नाही — super().__init__ ने आणावा.\n\nहीच माहिती पुढील super() आणि overriding धड्यांमध्ये रुळेल. आता सराव करा: एक पालक वर्ग, दोन मूल वर्ग — प्रत्येक मुलाला वेगळ्या method सह बनवा; output मध्ये पैशांचा फरक दिसेल. अशा सरावाने तुमची पकड inheritance वर घट्ट होईल.",
        code: `class Appliance:
    def __init__(self, name):
        self.name = name

    def power(self):
        return "वापरतो"

class Fan(Appliance):
    def power(self):
        return self.name + " फिरतो"

f = Fan("पंखा")
print(f.power())`,
        codeLanguage: "python",
        output: `पंखा फिरतो`,
      },
    ],
    practiceQuestions: [
      "inheritance मध्ये कोणती रचना लिहितात?",
      "मुलाला पालकाकडून काय मिळतं?",
      "वारशाचा मुख्य फायदा काय?",
      "isinstance चा उपयोग?",
    ],
    quiz: [
      { question: "मुलाचा class कसा लिहितात?", options: ["class Child(Parent):", "class Child():", "child Parent()", "class Parent(Child):"], correct: 0 },
      { question: "पालकाच्या method ला मुलाने वेगळी रचना दिली तर?", options: ["एरर", "नवीन आवृत्ती वापरते", "पालकाचीच", "दोन्ही"], correct: 1 },
      { question: "isinstance(c, Animal) कधी True?", options: ["c ही Animal ची वस्तू असल्यास", "c ही छोटी वस्तू असल्यास", "नेहमी", "कधी नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "पालकाची पद्धत मुलात बदला.",
      starterCode: `class Animal:
    def speak(self):
        return "आवाज"

class Cat(Animal):
    def speak(self):
        return "म्यांव"

c = Cat()
print(c.speak())`,
      expectedOutput: "म्यांव",
    },
    interviewQuestions: [
      "inheritance चे फायदे?",
      "मूल - पालक वर्ग कसे जोडतात?",
    ],
    related: ["python-attributes", "python-super", "python-override"],
    prev: "python-attributes",
    next: "python-super",
  },

  {
    slug: "python-super",
    categoryId: "python",
    title: "super() - पालक वर्गाचे काम",
    marathiTitle: "super - पालकाकडून मदत",
    level: "intermediate",
    minutes: 14,
    summary: "super() द्वारे पालक वर्गाच्या पद्धती सहज वापरा — जोडा, न बदलता.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? super - पालकाकडून मदत चे फायदे आणि महत्त्व",
        content: "✓ super चा सर्वात मोठा उपयोग __init__ मध्ये होतो — पालकाने सांभाळलेली सुरुवातीची रचना पुन्हा वापरता येते आणि कोड दुहेरी लिहायची गरज टळते.\n✓ super() मध्ये self लिहिणं — पालक वर्ग आपोआप कळतो; super(self) असं लिहायची गरज नाही.\n✓ इथे super() ची गरज नाही, कारण पालकाचं काहीही वापरलं जात नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "super() म्हणजे काय?",
        content: "मुलाच्या आतून पालकाची पद्धत बोलवणे म्हणजे super().method(...). super() पालक वर्ग दाखवतो; त्यावर जी पद्धत कॉल कराल ती पालकाचीच चालते.\n\nsuper चा सर्वात मोठा उपयोग __init__ मध्ये होतो — पालकाने सांभाळलेली सुरुवातीची रचना पुन्हा वापरता येते आणि कोड दुहेरी लिहायची गरज टळते.",
      },
      {
        title: "घरचं उदाहरण: बाबांचं गणित",
        content: "मूल अभ्यास करताना 'बाबांनी शिकवलेलं गणित' विसरता कामा नये. super() म्हणजे 'बाबांचं ते आधीच झालेलं काम वापर'; नवीन शिकलेलं काम मूल आपलं लिहितं.\n\nघरात, शाळेत हे नातं सर्वत्र दिसतं — जुने ज्ञान आधार घेणं आणि नवीन जोडणं. प्रोग्रामिंगमध्ये तेच काम super करतो.",
      },
      {
        title: "पालकाचा __init__ वाढवणे",
        content: "मुलाचा __init__ वाढवण्याचा नमुना. Dog ने स्वतःचा __init__ लिहिलाय — त्यात breed ही नवीन माहिती; पण नावाची नोंद स्वतःमध्ये न करता super().__init__(name) ने पालकाकडेच सोपवली.\n\nd = Dog(\"रेक्स\", \"जर्मन शेफर्ड\") मध्ये name आणि breed दोन्ही बसतात. print(d.name, d.breed) ने output रेक्स जर्मन शेफर्ड दिसतं — पालकाची रचना तुटत नाही आणि नवीन माहिती जोडली जाते.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("रेक्स", "जर्मन शेफर्ड")
print(d.name, d.breed)`,
        codeLanguage: "python",
        output: `रेक्स जर्मन शेफर्ड`,
      },
      {
        title: "पालकाची method वाढवणे",
        content: "पालकाची method वाढवणेही शक्य. Dog ची speak सुरुवातीला super().speak() कॉल करते — म्हणजे पालकाचं \"मी एक प्राणी\" मिळवते — आणि त्यात \", भुंकतो\" जोडते.\n\nprint(Dog().speak()) ने output मी एक प्राणी, भुंकतो दिसतं. पालकाचं वाक्य टिकलं आणि मुलाचं नवीन उत्तर पुढे आलं.",
        code: `class Animal:
    def speak(self):
        return "मी एक प्राणी"

class Dog(Animal):
    def speak(self):
        return super().speak() + ", भुंकतो"

print(Dog().speak())`,
        codeLanguage: "python",
        output: `मी एक प्राणी, भुंकतो`,
      },
      {
        title: "उदाहरण: विक्रीवरील सूट",
        content: "विक्रीवरची वस्तू — मूळ किंमत वापरून सूट काढणे. Sale ने super().__init__(name, price) ने पालकाकडून मूळ रचना आणली; मग सूटचं गणित केलं: self.price - self.price * discount // 100.\n\nकमळ चादर 1000 रुपये वर 20% सूट म्हणजे 800 रुपये — output कमळ चादर 800. मूळ किंमत आणि सूट बदलून नवीन निकाल सहज तपासता येतो.",
        code: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Sale(Product):
    def __init__(self, name, price, discount):
        super().__init__(name, price)
        self.price = self.price - self.price * discount // 100

m = Sale("कमळ चादर", 1000, 20)
print(m.name, m.price)`,
        codeLanguage: "python",
        output: `कमळ चादर 800`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ super() मध्ये self लिहिणं — पालक वर्ग आपोआप कळतो; super(self) असं लिहायची गरज नाही.\n\n✗ मुलाच्या __init__ मध्ये पालकाच्या __init__ चा कॉलच न करणं — तर पालकाने सांभाळलेली माहिती मुलात भरत नाही.\n\n✗ super().__init__ विसरून नवीन स्वतंत्र कोड लिहिणं — हे पालकाची रचना तोडून टाकतं.\n\nखाली कुत्र्याने super द्वारेच नाव नोंदवलंय — output रेक्स. पालकाकडून हवी असलेली नोंद मुलातही टिकते हा नमुना पुढे कायम वापरा.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)

d = Dog("रेक्स")
print(d.name)`,
        codeLanguage: "python",
        output: `रेक्स`,
      },
      {
        title: "इंटरॅक्टिव्ह: Circle चे क्षेत्रफळ",
        content: "Circle ने Shape ची area method नव्याने लिहिली — 22 × r × r // 7 अशी पूर्ण नवीन गणना. इथे super() ची गरज नाही, कारण पालकाचं काहीही वापरलं जात नाही. output जागा: 154 असा दिसतो.\n\nsuper() ही आवश्यकतेनुसार वापरायची — पालकाचं काम वाढवायचं असेल तेव्हाच. पालकाची method वापरायची नसेल तर स्वतःची लिहिता येते.",
        code: `class Shape:
    def area(self):
        return "सर्वांची जागा"

class Circle(Shape):
    def area(self, r):
        return "जागा: " + str(22 * r * r // 7)

print(Circle().area(7))`,
        codeLanguage: "python",
        output: `जागा: 154`,
      },
      {
        title: "Mini Project — गुणपत्रिका",
        content: "मार्क्सवरून ग्रेड देणारा मूल वर्ग. GradeReport ने super().__init__(name, marks) ने पालकाकडून सुरुवातीची रचना घेतली आणि grade ही नवीन method जोडली — 75 किंवा अधिक म्हणजे A, 35 किंवा अधिक म्हणजे B, अन्यथा C.\n\nGradeReport(\"स्वरा\", 82).grade() मध्ये 82 >= 75, म्हणून output A. name आणि marks वेगळे देऊन B, C ग्रेडही तपासा — तोच code नवीन निकाल देतो.",
        code: `class Report:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

class GradeReport(Report):
    def __init__(self, name, marks):
        super().__init__(name, marks)

    def grade(self):
        if self.marks >= 75:
            return "A"
        if self.marks >= 35:
            return "B"
        return "C"

print(GradeReport("स्वरा", 82).grade())`,
        codeLanguage: "python",
        output: `A`,
      },
    {
        title: "super() मध्ये काय होतं — तपशील",
        content: "super() हा special function आहे जो वर्तमान वर्गाच्या पालक वर्गाशी संवाद साधतो. तुम्ही तो मुलाच्या वर्गात कॉल केल्यावर Python आपोआप ठरवतो की त्या मुलाचा पालक कोण आणि त्याच्या पद्धती कोणत्या. हे ठरवण्याचं काम method resolution order म्हणून ओळखलं जातं — आत्ता फक्त इतकं पुरेसं की super() चा वापर केला तर पालकाची पद्धत शोधून मिळते.\n\nसर्वात सामान्य वापर म्हणजे मुलाच्या __init__ मध्ये पालकाचा __init__ कॉल करणे. जेव्हा मूल वर्ग आपला स्वतःचा __init__ लिहितो तेव्हा पालकाचा आपोआप होत नाही; त्यामुळे पालकाने सांभाळलेली माहिती तुमच्या मुलात नसते. super().__init__(name, ...) लिहिल्याने पालकाची सुरुवातीची रचना चालून तिचे attributes मुलात भरतात.\n\nही रचना का महत्त्वाची? कोडची पुनरावृत्ती टाळण्यासाठी. पालकाच्या __init__ मध्ये दहा lines असतील तर मुलाने त्या दहा lines पुन्हा लिहिण्यापेक्षा एका ओळीत super().__init__ ने काम होतं. याचा अर्थ पालकाच्या रचनेत बदल केला तर मुलाला सुद्धा आपोआप तो बदल मिळतो — कोणतीही रचना दुहेरी ठिकाणी ठेवायची गरज उरत नाही.",
      },
      {
        title: "super() चा वापर — attribute जोडणीचा नमुना",
        content: "सर्वात सामान्य नमुना म्हणजे पालकाची सुरुवात कॉल करून मागे नवीन attributes जोडणे. खालील कोड पहा: Dog ने स्वतःचा __init__ लिहिला; त्यात सुरुवातीला super().__init__(name) ने पालकाची नावं भरली आणि नंतर breed ही स्वतःची नवीन माहिती जोडली. यामुळे दोन्ही वर्गांची रचना तुटत नाही आणि माहिती पूर्णपणे भरली जाते.\n\nहा नमुना project मध्ये सर्वत्र वापरला जातो — नवीन वर्ग पालकापासून सुरू होऊन त्यात नवीन घटक जोडतो. उदा. कर्मचारी वर्ग पालक, व्यवस्थापक मूल — व्यवस्थापकाला विभाग किंवा बोनसची माहिती अतिरिक्त हवी; ती super().__init__ नंतर जोडली जाते.\n\nअशा रचनेत काही त्रुटी येऊ शकतात: जर मुलाने super() विसरला आणि थेट self.name = name अशी पुनरावृत्ती केली तर कोड काम करतो पण पालकाच्या रचनेचा फायदा नाही मिळत. योग्य पद्धत लक्षात ठेवा — जे पालक सांभाळतो ते पालकाकडूनच घ्या; जे विशेष ते स्वतःच्या __init__ मध्ये ठरवा.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed

d = Dog("रेक्स", "जर्मन शेफर्ड")
print(d.name, d.breed)`,
        codeLanguage: "python",
        output: `रेक्स जर्मन शेफर्ड`,
      },
      {
        title: "super() फक्त __init__ साठीच नाही",
        content: "super() सर्व पद्धतींसाठी काम करतो — केवळ __init__ साठी मर्यादित नाही. कोणतीही पद्धत पालकात असेल आणि मुलाला तिचा निकाल घेऊन त्यात वाढ करायची असेल तर super().method() वापरता येतो. उदा. पालकाची speak जुनी आवृत्ती मिळवून त्यात आपला भर जोडणे.\n\nहाच नमुना overriding मधल्या 'जुनी द्या, नवीन जोडा' या तत्त्वात पुढे सविस्तर येईल. super() चा मुख्य अर्थ पालकाशी जोडणे हा आहे — तो कशाही पद्धतीसाठी वापरता येतो. पालकाची पद्धत न बदलता तिचे परिणाम आणणे हे प्रत्येक वेळी हवे असते.\n\nव्यावहारिक उदाहरण: Ticket वर्गाची price() ही सर्वांसाठी 50 देते; VIP मूल वर्गाला तिच्यावर 350 मिळवायचा असेल तर VIP च्या price() मध्ये super().price() कॉल करून निकाल + 350 return करा. अशी रचना पालकाची मूळ माहिती न बदलता विस्तार करते.",
        code: `class Ticket:
    def price(self):
        return 50

class VIP(Ticket):
    def price(self):
        return super().price() + 350

print(VIP().price())`,
        codeLanguage: "python",
        output: `400`,
      },
      {
        title: "super() कधी नको?",
        content: "super() हे उपकरण नेहमी हवे आहे असं नाही. जर मुल वर्गाला पालकाच्या पद्धतीशी संबंधच नसेल तर super() ची गरज नाही — मुल स्वतःची पूर्ण नवीन पद्धत लिहू शकतो. उदा. Circle ची area ही Shape च्या area पेक्षा पूर्णपणे वेगळी असेल तर super() वापरण्याचा काही उपयोग नाही; पूर्ण नवीन गणना दिली जाते.\n\nतिसरा नियम — जर मुलाने स्वतःचा __init__ लिहिला असेल पण पालकाची कोणतीही माहिती हवी नसेल (उदा. रचना पूर्णपणे वेगळी), तर तो super().__init__ कॉल नाही करत. मग मूल पूर्णपणे आपल्या रचनेची वस्तू बनते; पालकांशी कोणताही संबंध ठेवत नाही.\n\nहे ओळखण्याचा कसोटी प्रश्न: 'माझ्या मुलाला पालकाचं काही वापरावं लागतं का?' होय — super वापरा; नाही — फक्त स्वतःचे लिहा. या एका प्रश्नाने तुम्ही कोणत्या वेळी super कामी येईल ते अचूक ठरवू शकता.",
        code: `class Shape:
    def area(self):
        return "ढोबळ"

class Circle(Shape):
    def area(self, r):
        return "जागा: " + str(22 * r * r // 7)

print(Circle().area(7))`,
        codeLanguage: "python",
        output: `जागा: 154`,
      },
      {
        title: "वारसा योग्य जोडला आहे का — तपासणी",
        content: "जेव्हा मूल वर्ग पालकापासून बनवला आहे तेव्हा तो पालकाची वस्तूही म्हणून गणला जातो. isinstance(d, Animal) True देते कारण d ही Dog ची वस्तू असून दोघांचाही समावेश होतो. ही तपासणी उपयुक्त आहे कारण Mझाल्यावर तुम्हाला पालकाची पद्धत वापरायची असेल तर ती available आहे.\n\nतसेच issubclass(Dog, Animal) ही तपासणी वर्ग पातळीवर करते — ती विचारते की Dog हा Animal चा मूल वर्ग आहे का. हे design check करताना आवश्यक आहे: कोणत्या वर्गांपासून कोणते वर्ग उतरले हे कळतं.\n\nयाच तपासण्यांमुळे codes मध्ये रचना मोडत नाही. उदा. function ला Animal ची वस्तू दिली तर आपण त्याच्यावर speak किंवा name अशा पालकातील पद्धती वापरू शकतो — कारण आपण पडताळून घेतले की ती खरोखर Animal वर्गातून आली आहे.",
        code: `class Animal:
    pass

class Dog(Animal):
    pass

d = Dog()
print(isinstance(d, Animal))
print(issubclass(Dog, Animal))`,
        codeLanguage: "python",
        output: `True
True`,
      },
      {
        title: "चुका आणि उपाय — super व्यवहारात",
        content: "✗ super() च्या कंसात self लिहिणं — Python ही चूक करते; तुम्हाला फक्त super().__init__() लिहावं; self आपोआप जातो.\n✗ super().__init__ कॉल करताना पालकाच्या argument विसरून जाणं — पालकाला name हवा असेल तर तो द्या; नाही तर TypeError.\n✗ super() ला विसरून पालकाची माहिती स्वतः पुन्हा लिहिणं — हे काम करतं पण क्लिष्ट आणि दुहेरी; योग्य मार्ग super.\n✗ पालक आणि मूल दोघांच्या __init__ मध्ये समान attribute वेगवेगळ्या मूल्यांनी सेट करताना गोंधळ — क्रम नीट ठेवा.\n\nचुकांचं निरीक्षण करून त्याची दुरुस्ती करणं हेच प्रोग्रामिंगचं केंद्रबिंदू आहे. प्रत्येक चूक तुम्हाला अधिक स्पष्ट करते — 'हे केलं तर असं होतं' म्हणून सगळं स्वतः लिहून तपासा. या धड्यातील super चे प्रयोग नेहमी पुन्हा करा.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)

d = Dog("रेक्स")
print(d.name)`,
        codeLanguage: "python",
        output: `रेक्स`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "super() च्या अभ्यासासाठी अधिकृत स्रोतांची यादी:\n\n• super() फंक्शनची अधिकृत व्याख्या: https://docs.python.org/3/library/functions.html#super\n• inheritance आणि super च्या classes tutorial: https://docs.python.org/3/tutorial/classes.html#inheritance\n• method resolution order चे स्पष्टीकरण: https://docs.python.org/3/tutorial/classes.html#method-resolution-order\n• Cooperative super call ची चर्चा: https://docs.python.org/3/tutorial/classes.html#multiple-inheritance\n• glossary मधील super चा संदर्भ: https://docs.python.org/3/glossary.html#term-mro\n• object.__init__ ची नोंद: https://docs.python.org/3/reference/datamodel.html#object.__init__\n• पालक वर्गाची व्याख्या: https://docs.python.org/3/glossary.html#term-base-class\n• classes चा संपूर्ण tutorial पुन्हा वाचायला: https://docs.python.org/3/tutorial/classes.html\n• function calls मधील arguments चे नियम: https://docs.python.org/3/reference/expressions.html#calls\n\nsuper() या शब्दावर Google करून प्रत्येक नवीन संदर्भात कसे बसते ते पहा; मग तुमच्या स्वतःच्या कोडमध्ये त्याची उजळणी करा.",
      },
    {
        title: "super() म्हणजे 'बाबांचं काम आधी'",
        content: "घरातल्या сравнительной मधून समजून घेऊ: मूल स्वयंपाक करतांना 'बाबा, आधी तुमची पद्धत' असं म्हणतं म्हणजेच super चा अर्थ. मूल पालकाची पाककृती आधी तयार करतं, मग त्यात आपले नवीन मसाले घालतं. पालकाचं मूल्य टिकून राहतं, त्यावर आपली सुधारणा जोडली जाते.\n\nअशीच रचना कोडमध्ये — मुलाचा __init__ पालकाचा __init__ आधी चालवतो, मग आपल्या विशेष attribute स्वतः सेट करतो. यामुळे पालकातील सगळी नोंद विकृत न बदलता मुलाला मिळते. स्वयंपाकघरात आधी पोळीचा डाव निघतो, मग त्यावर लोणी; कोडमध्ये super().__init__ आधी, मग नवीन माहिती.\n\nहीच रचना रोजच्या प्रकल्पांमध्ये quantification होते — व्यवस्थापक कर्मचारी वर्गातील पगाराची नोंद super ने घेतो तर बोनस स्वतः जोडतो. अशा रचनेमुळे पालकाची रचना वाचते आणि मुलाची वाढ दिसते. हा timetable नेहमी लक्षात ठेवा: जुने आधी (super), नवीन नंतर (self केलेलं).",
      },
      {
        title: "super शिवाय पर्यायी मार्ग — विचार करा",
        content: "काही नवशिके विचारतात — पालकाची माहिती super शिवाय मिळेल का? उत्तर: पर्यायी मार्ग असतो, पण तो कठोर असतो. उदा. मुलाच्या __init__ मध्ये Animal.__init__(self, name) लिहिलं तर ते super() सारखेच काम करतं — पालकाची पद्धत थेट नावाने कॉल होते.\n\nहा पर्याय उपयुक्त दिसतो पण मर्यादा आहेत: तो पालकाचं नाव हार्डकोड करतो — पालकाचं नाव बदललं तर तो कोडही बदल लागतो. तसेच वेगवेगळ्या ठिकाणी वर्गांची व्यवस्था असताना super() अधिक flexible राहतो. त्यामुळे आधुनिक Python मध्ये super() हा शिफारसीत मार्ग आहे.\n\nमोठ्या frameworks मध्ये तर super() जवळजवळ अनिवार्य असतो कारण वर्गांची साखळी खोल असते; तिथे एखादं नाव hardcode केलं तर कोड खचतो. म्हणूनच 'पालकाकडून जे हवं ते super द्वारे' हा नियम सर्वत्र लागू होतो. प्रयोग म्हणून दोन्ही मार्ग लिहून पहा — फरक समजेल.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

class Dog(Animal):
    def __init__(self, name, breed):
        Animal.__init__(self, name)
        self.breed = breed

d = Dog("रेक्स", "शेफर्ड")
print(d.name, d.breed)`,
        codeLanguage: "python",
        output: `रेक्स शेफर्ड`,
      },
      {
        title: "super चा सारांश — एका ठिकाणी",
        content: "super() चे मुख्य मुद्दे लिहून घेऊ या:\n\n• super() म्हणजे पालक वर्गाशी संवाद; मुलाच्या वर्गातून कॉल होतो.\n• super().__init__(...) ने पालकाचा __init__ चालतो.\n• super().method(...) ने पालकाची पद्धत न बदलताच तशी वापरता येते.\n• मुलाला पालकाचं जेथे हवं तिथे super; पूर्ण स्वतंत्र काम असेल तर गरज नाही.\n• self, double-underscore — गोंधळ नको; फक्त super() सरळ लिहा.\n\nपुढील धडा overriding मध्ये हीच संकल्पना आणखी खोल दिसेल — पालकाची पद्धत override करताना त्याचा मूळ निकाल super() ने घेऊन वाढ करता येणार. super आत्ता समजल्यास तिथे अडचण येणार नाही.\n\nसराव: एक वर्ग बनवा जिथे पालकाची रचना super ने घेतली जाते आणि नवीन दोन attributes जोडतात; तो कोड चालवून output तपासा. अशा प्रकारे ही संकल्पना संपूर्ण झाली असे समजतो.",
        code: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

class Sale(Product):
    def __init__(self, name, price, discount):
        super().__init__(name, price)
        self.price = self.price - self.price * discount // 100

m = Sale("कमळ चादर", 1000, 20)
print(m.name, m.price)`,
        codeLanguage: "python",
        output: `कमळ चादर 800`,
      },
    {
        title: "super च्या व्यवहारातील उदाहरणे — गहन विचार",
        content: "व्यवहारात super() किती उपयोगी ठरतो ते वेगवेगळ्या उदाहरणांतून पहायला हवं. पहिलं उदाहरण — गुणपत्रिका: Report वर्ग name व marks घेतो; GradeReport हा मूल वर्ग super ने ती नोंद घेऊन grade पद्धत जोडतो. येथे name व marks या नोंदी पालकाकडेच राहतात आणि ग्रेड मोजणी मुलाकडे — रचना टिकून राहते.\n\nदुसरं उदाहरण — वाहन खरेदी: Vehicle वर्ग brand व model घेतो; Car मूल वर्ग super ने दोन्ही घेऊन color जोडतो. बर्याच प्रकारच्या वाहनांची रचना बनवताना हीच रचना पुन्हा पुन्हा लागू होते — सामान्य माहिती पालकात, विशेष माहिती मुलात.\n\nतिसरं उदाहरण — चित्रपटांतील ticket दर: Ticket वर्गातील price method 50 देते; VIP मूल वर्ग super().price() वर 350 मिळवतो. या रचनेत जर पालकाच्या price मध्ये बदल केला तर छान § त्यामुळे सर्व ठिकाणी समान नियंत्रण राहतं. अशा प्रकारे super() तुम्हाला एका ठिकाणी बदल करून सर्वत्र परिणाम पाठवण्याची पद्धत देतो.",
      },
      {
        title: "अधिक सखोल सराव — super ची पुनरावृत्ती",
        content: "super ची पकड पक्की करण्यासाठी स्वतः वेगवेगळे प्रयोग करा:\n\n• पालक वर्ग बनवा ज्यात brand attribute आहे; मूल वर्गात तोच वापरून दोन अक्षरांचा मजकूर बनवा.\n• मुलाच्या __init__ मधून एक जास्त attribute जोडा, पण super विसरू नका.\n• पालकाची पद्धत method मधून super ने मिळवा आणि त्यात text जोडा.\n• isinstance पडताळून तपासा की वस्तू दोन्ही वर्गांची म्हणून गणली जाते.\n\nप्रत्येक प्रयोगानंतर output काळजीपूर्वक पहा — तुम्ही जे समजलात त्याचा परिणाम दिसतो का? असं सतत तपासल्यास super च्या वर्तनाचा नियम मनात पक्का होतो.\n\nशेवटी एक चांगलं काम: तुमच्या नोट्समध्ये super ची व्याख्या, वापर, उदाहरण — तीन ओळीत लिहा. पुढील overriding च्या धड्यात या नोट्स तुमच्या कामाच्या आधाराचा पाया बनतील.",
        code: `class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return "आवाज"

class Dog(Animal):
    def __init__(self, name):
        super().__init__(name)

    def speak(self):
        return super().speak() + ", भुंकतो"

print(Dog("रेक्स").name)
print(Dog("रेक्स").speak())`,
        codeLanguage: "python",
        output: `रेक्स
आवाज, भुंकतो`,
      },
    {
        title: "super चा विचार — सामान्य चुका व निराकरण",
        content: "super वापरताना जो आमच्या सर्वात वारंवार समोर येणाऱ्या अडचणी घेऊ या:\n\n✗ मुलाच्या __init__ मध्ये पालकाच्या __init__ चा कॉलच न करणे — तर पालकाचे attributes अजिबात भरत नाहीत; output मध्ये AttributeError येतो.\n✗ super().__init__ मध्ये चुकीचे arguments अथवा nil count देणे — पालकाला तीन मूल्ये हवी असतील तर ती सर्व द्या; नाही तर TypeError.\n✗ super() ला बाउंड नसलेली पद्धत समजून घेणे — super() नेहमी वर्तमान वर्गाची अंतर्गत माहिती घेते.\n✗ दोन ** जास्ती जास्त — super मध्ये keyword arguments टाकण्यासंबंधी नियम; साध्या प्रकरणात फक्त positional च ठीक.\n\nबर्याच वेळा चूक करून घेतल्यावर आपापल्या मनात योग्य मार्ग बिंबतो. शुद्ध नमुना अधिक सरावाने बसतो; त्यामुळे आजपासून प्रत्येक inheritance project मध्ये super ला शिफारसीत वापरा. योग्य प्रकारे super आणि attributes ची सांगड घातल्यावर मोठे project आपोआप स्वच्छ राहतात.",
        code: `class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, bonus):
        super().__init__(name, salary)
        self.bonus = bonus

m = Manager("किरण", 40000, 5000)
print(m.name, m.salary + m.bonus)`,
        codeLanguage: "python",
        output: `किरण 45000`,
      },
    {
        title: "सारांश — super चा एकत्रित नजर",
        content: "super() चा मुख्य अर्थ या एका वाक्यात: पालक वर्गाची पद्धत मुलाच्या वर्गातून वापरणे. __init__ मध्ये पालकाची आरंभ माहिती, method मध्ये पालकाचा निकाल, अशा दोन्ही ठिकाणी अपयश येत नाही. हे विसरलं तर पुढचा कोड तुटतो.\n\nसोपा प्रश्न: 'पालकाचं काही वापरायचं आहे का?' — होय असेल तर super, नाही तर स्वतःचे लिहा. या प्रश्नाने super ची निवड अचूक होते. तसेच super मध्ये self लिहायची गरज नाही — तो दुवा Python आपोआप करतो.\n\nआता पुढचा धडा overriding — पालकाची पद्धत मुलात नव्या रूपात सादर करणे. तिथे super ची मदत होईल कारण नवीन आवृत्तीत जुना निकाल super द्वारे वापरता येतो. super समजल्याने तो धडा सहज उलटेल.",
        code: `class Animal:
    def speak(self):
        return "आवाज"

class Cow(Animal):
    def speak(self):
        return "हंबर"

c = Cow()
print(c.speak())`,
        codeLanguage: "python",
        output: `हंबर`,
      },
    {
        title: "नवीन निरीक्षण — output ची तपासणी",
        content: "प्रत्येक नवीन उदाहरण लिहून तुम्ही output तपासण्याची सवय ठेवा. उदा. खालील कोडमध्ये पालकाची speak आणि मुलाची speak यांचा फरक दिसतो — output मध्ये आवाज आणि हंबर येतं. हे तपासताना लक्षात येतं की मूल पालकाची पद्धत override करतो; तोच पुढच्या धड्याचा विषय.\n\noutput हा तुमचा खरा शिक्षक आहे. तुम्ही कोड लिहिला आणि output मध्ये अनपेक्षित मूल्य आलं तर तत्वाशी जुळवून कारण शोधा — हे debugging चं प्रथम दर्शन आहे. अशा पद्धतीने super आणि inheritance ची निरीक्षणात्मक समज वाढते.\n\nशेवटी सातत्य ठेवा — प्रत्येक धड्याच्या शेवटी एक output तपासा आणि त्याचं स्पष्टीकरण आपल्या शब्दांत लिहा. असा अभ्यास संध्याकाळी पुन्हा उघडून वाचल्यास माहिती दीर्घकाळ टिकते.",
        code: `class Animal:
    def speak(self):
        return "आवाज"

class Cow(Animal):
    def speak(self):
        return "हंबर"

print(Animal().speak())
print(Cow().speak())`,
        codeLanguage: "python",
        output: `आवाज
हंबर`,
      },
    ],
    practiceQuestions: [
      "super() काय करतो?",
      "super().__init__(name) का देतात?",
      "super() फक्त कुठे वापरतात?",
      "super().speak() काय बोलवतो?",
    ],
    quiz: [
      { question: "मुलाच्या आत पालकाची __init__ कशी बोलवतात?", options: ["super().__init__()", "parent.__init__()", "self.__init__()", "Animal()"], correct: 0 },
      { question: "super() काय देतो?", options: ["पालक वर्ग", "नवीन वस्तू", "רשימה", "एरर"], correct: 0 },
      { question: "पालकाची पद्धत वाढवण्यासाठी?", options: ["super().method() वापरा", "नवीन class बनवा", "delete करा", "काही करू नका"], correct: 0 },
    ],
    challenge: {
      prompt: "वाहनाला चाकांची संख्या पालकाकडून देऊन मुलात मजकूर बनवा.",
      starterCode: `class Vehicle:
    def __init__(self, wheels):
        self.wheels = wheels

class Car(Vehicle):
    def __init__(self, wheels):
        super().__init__(wheels)

    def msg(self):
        return "चाके: " + str(self.wheels)

print(Car(4).msg())`,
      expectedOutput: "चाके: 4",
    },
    interviewQuestions: [
      "super() का वापरतात?",
      "super() शिवाय कोड कसा वाढतो?",
    ],
    related: ["python-inheritance", "python-override", "python-classes"],
    prev: "python-inheritance",
    next: "python-override",
  },

  {
    slug: "python-override",
    categoryId: "python",
    title: "OOP - Overriding",
    marathiTitle: "Overriding - पद्धती सुधारणे",
    level: "intermediate",
    minutes: 14,
    summary: "मुलाच्या वर्गात पालकाची पद्धत नव्या रूपात सादर करणे — overriding.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Overriding - पद्धती सुधारणे चे फायदे आणि महत्त्व",
        content: "\"Overriding - पद्धती सुधारणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "override म्हणजे काय?",
        content: "जेव्हा मुलाच्या वर्गात पालकाच्या पद्धतीच्या नावानेच नवीन पद्धत लिहितात, तेव्हा ती जुनी पद्धत बाजूला सरते आणि मुलाची आवृत्ती चालते. यालाच override म्हणतात.\n- same name, same arguments — नवीन वर्तन\n- super() द्वारे जुनी पद्धत उपलब्धच राहते\n- Override म्हणजे पद्धतीची नवीन आवृत्ती",
      },
      {
        title: "पोळी आणि भाजी",
        content: "\"पोळी\" ची मूळ कृती आजीकडे होती; तीच \"पोळी + भाजी\" अशी मूल बनवते. पद्धतीचं नाव तेच — पण नवीन रूप.\n\nOverriding मध्ये जुने काही हरवत नाही — जुनी पद्धत super() ने उपलब्ध असते; फक्त नव्या वर्तनाला प्राधान्य मिळतं.",
      },
      {
        title: "एकच method, वेगवेगळी रूपे",
        content: "Bird ची sound method \"चिवचिव\" देते. Peacock(Bird) ने तीच sound नव्याने लिहिली — \"मयूर आवाज\".\n\nprint(Bird().sound()) आणि print(Peacock().sound()) हाताशी फरक दाखवतात — output मध्ये चिवचिव आणि मयूर आवाज एकामागून एक दिसतं. नाव एक, वर्तन वेगळे — override चा हाच धडा.",
        code: `class Bird:
    def sound(self):
        return "चिवचिव"

class Peacock(Bird):
    def sound(self):
        return "मयूर आवाज"

print(Bird().sound())
print(Peacock().sound())`,
        codeLanguage: "python",
        output: `चिवचिव
मयूर आवाज`,
      },
      {
        title: "जुनी आणि नवीन जोडणे",
        content: "Chef(Cook) ने recipe override करताना पालकाची पद्धत विसरली नाही. super().recipe() आधी \"पोळी\" आणतं आणि त्यात \" + भाजी\" जोडतं.\n\nprint(Chef().recipe()) ने output पोळी + भाजी दिसतं — जुनी आणि नवीन दोन्ही एकत्र. जुनी पद्धत पुन्हा हवी असेल तेव्हा super() हा एकमेव मार्ग.",
        code: `class Cook:
    def recipe(self):
        return "पोळी"

class Chef(Cook):
    def recipe(self):
        return super().recipe() + " + भाजी"

print(Chef().recipe())`,
        codeLanguage: "python",
        output: `पोळी + भाजी`,
      },
      {
        title: "उदाहरण: तिकिटाचे दर",
        content: "तिकिटाचे दर वेगवेगळे — सामान्य तिकीट 50, VIP तिकीट जास्त. VIP ने price override केली: super().price() म्हणजे 50, त्यावर 350 मिळवल्यावर 400.\n\noutput मध्ये सामान्य: 50 आणि VIP: 400 असे दोन्ही दिसतं. एकाच price method मध्ये प्रत्येक वस्तू आपल्या दराचं उत्तर देते.",
        code: `class Ticket:
    def price(self):
        return 50

class VIP(Ticket):
    def price(self):
        return super().price() + 350

print("सामान्य:", Ticket().price())
print("VIP:", VIP().price())`,
        codeLanguage: "python",
        output: `सामान्य: 50
VIP: 400`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ नव्या पद्धतीत जुनी माहिती पूर्णपणे विसरणं — जुनी हवी असेल तर super() ने ती घेणं उत्तम.\n✗ same name पण चुकीचे arguments लिहिणे — मग कॉलवेळी वर्तन गोंधळतं.\n✗ super() शिवाय जुनी कार्यक्षमता पुन्हा स्वतः लिहिणे — हे सरळ दुहेरी काम.\n\nखाली Child ने greet override करून मुलाचीच आवृत्ती दाखवली — output नमस्कार, मित्रा!. पालकाची greet वेगळीच राहते.",
        code: `class Base:
    def greet(self):
        return "नमस्कार"

class Child(Base):
    def greet(self):
        return "नमस्कार, मित्रा!"

# मुलाची आवृत्ती — पालकाची वेगळी
print(Child().greet())`,
        codeLanguage: "python",
        output: `नमस्कार, मित्रा!`,
      },
      {
        title: "इंटरॅक्टिव्ह: SmartAlarm",
        content: "SmartAlarm(Alarm) ने sound override केल्यावर तो स्वतःचा आवाज देतो — \"बीप बीप - अलार्म!\" जुना \"बीप\" मागे सरतो आणि नवा चालतो.\n\nकोड बदलून स्वतःचा आवाज ठेवून पहा — उदाहरणार्थ \"झेंडी वाढली!\" अशी आवृत्ती. आवाज बदलला की output फलित कसा बदलतो ते निरीक्षण करा.",
        code: `class Alarm:
    def sound(self):
        return "बीप"

class SmartAlarm(Alarm):
    def sound(self):
        return "बीप बीप - अलार्म!"

print(SmartAlarm().sound())`,
        codeLanguage: "python",
        output: `बीप बीप - अलार्म!`,
      },
      {
        title: "Mini Project — हॉस्टेल शुल्क",
        content: "हॉस्टेलच्या विद्यार्थ्याला मूळ शुल्काबरोबर अतिरिक्त शुल्क लागतं. Hostel(Fees) ने amount override केली: super().amount() म्हणजे 5000, त्यावर 8000 मिळवल्यावर 13000.\n\nprint(Hostel().amount()) ने output 13000 दिसतं. Fees वर्गाची रचना तुटत नाही — त्यातूनच वारसा आणि अतिरिक्त रक्कम मिळते. आकडे बदलून पुन्हा तपासा.",
        code: `class Fees:
    def amount(self):
        return 5000

class Hostel(Fees):
    def amount(self):
        return super().amount() + 8000

print(Hostel().amount())`,
        codeLanguage: "python",
        output: `13000`,
      },
    {
        title: "override कधी लिहावं? — निर्णय",
        content: "प्रत्येक वेळी मुलाच्या वर्गात पालकाच्या पद्धतीची new आवृत्ती हवी असेल तेव्हा override करतात. पण आधी विचार करा — 'पालकाची पद्धत मुलासाठी योग्य आहे का?' उत्तर नाही येत असेल तरच नवीन आवृत्ती लिहा; नाही तर ती पद्धत वारशानेच स्वीकारा.\n\nदुसरा निर्णय — नवीन आवृत्ती पूर्णपणे वेगळी का पालकाच्या निकालावर आधारित? जर मुलाला पालकाचा निकाल हवा असेल आणि त्यात वाढ करायची असेल तर super() वापरा. पूर्णपणे वेगळं काम असेल तर स्वतः पूर्ण नवीन लिहा.\n\nहे निर्णय प्रत्येक OOP project मध्ये आलेच असतात; त्यामुळे override ची निवड नियमित सरावाने वेगवान होते. प्रत्येक new वर्ग लिहिताना विचार करा: 'पालकाची रचना माझ्यासाठी किती उपयुक्त?' तेव्हाच override योग्य कधी वापरायचा हे समजेल.",
      },
      {
        title: "override ची भाषा तंत्र — same नाव, नवीन रूप",
        content: "override मध्ये पालकाच्या पद्धतीचे नाव अचूक जुळणं आवश्यक आहे — नाव समान असल्याशिवाय Python ती नवीन आवृत्ती म्हणून ओळखत नाही. नाव थोडंसं वेगळं (उदा. speak याऐवजी speak2) केलं तर ती वेगळी पद्धत बनते आणि override होत नाही.\n\nनावाबरोबर arguments ची रचना काळजीने ठेवा. सामान्य स्थितीत पालकाची argument संख्या बदलू नका; नाही तर दोन्ही ठिकाणी वापरणाऱ्या कोडचा अर्थ बदलतो. जर नवीन argument हवा असेल तर default मूल्य देऊन ते ऐच्छिक ठेवा.\n\nयोग्य नाव आणि योग्य arguments — दोन्ही जुळले की Python नंतर मुलाची पद्धत primary म्हणून वापरतो. ही भाषा तंत्र समजल्यास override चे वर्तन अचूक असेल आणि अनपेक्षित आश्चर्य टळतील.",
        code: `class Bird:
    def sound(self):
        return "चिवचिव"

class Peacock(Bird):
    def sound(self):
        return "मयूर आवाज"

print(Bird().sound())
print(Peacock().sound())`,
        codeLanguage: "python",
        output: `चिवचिव
मयूर आवाज`,
      },
      {
        title: "super सह override — जुनी नवीन जोडणी",
        content: "सर्वात उपयुक्त override नमुना म्हणजे जुनी पद्धत वापरून नवीन जोडणे. खाली Chef हा Cook ची recipe super.validate ने मूळ 'पोळी' मिळवतो आणि त्यात ' + भाजी' जोडतो. ही रचना पालकाचा मूळ गाभा टिकवून मुलाची वाढ दाखवते.\n\nहा नमुना वास्तविक project मध्ये सर्वत्र आहे: बँकेची fee पद्धत मूळ रक्कम super ने घेऊन व्याज जोडतं; पेमेंट पद्धत मूळ विधि super ने करून पावती print करते. प्रत्येक वेळी नियम एकच — जुने आधी, नवीन नंतर.\n\nsuper सह override करताना लक्षात ठेवा की पालकाचा मूळ निकाल कोणता return करतो ते. तो number, string किंवा काहीही असू शकतो; नवीन आवृत्ती त्यावर योग्य operation करते. यामुळे टप्प्याटप्प्याने बदल न बदलता विस्तार होतो.",
        code: `class Cook:
    def recipe(self):
        return "पोळी"

class Chef(Cook):
    def recipe(self):
        return super().recipe() + " + भाजी"

print(Chef().recipe())`,
        codeLanguage: "python",
        output: `पोळी + भाजी`,
      },
      {
        title: "override ची सामान्य चुका",
        content: "✗ नाव जुळवायचं विसरणे — थोडं वेगळं नाव लिहिलं तर ती नवीन पद्धत बनते; override होत नाही आणि पालकाचीच चालते.\n✗ arguments बदलणे — पालकाच्या पद्धतीला एक argument असेल आणि मुलाला दोन दिले तर वापरात गोंधळ होतो;\n✗ super() विसरून जुना कोड पुन्हा लिहिणे — ते काम होतं पण दुहेरी; सांभाळ जड होतो.\n✗ तसेच नाव समान असल्यावरही पालक पद्धतीचं वर्तन गृहीत न धरणे — प्रत्येक आवृत्ती स्वतंत्र.\n\nचुकांची यादी तुम्हाला override च्या मर्यादा समजावते. प्रत्येक चूक सुधारून तुम्ही अधिक अचूक वागता. संगणकीय नियमांचं पालन करताना हे प्रश्न नेहमी विचारा: 'ही पद्धत खरोखर override होत आहे का, की तिचं नाव चुकलं?'",
      },
      {
        title: "override आणि polymorphism — संबंध",
        content: "override आणि polymorphism जवळचे नातेवाईक आहेत. override हे एका वर्गाने दुसऱ्या वर्गाची पद्धत नवीन रूपात सादर करणं; polymorphism म्हणजे एकाच पद्धतीचं नाव वेगवेगळ्या वस्तूंमध्ये वेगवेगळं वर्तन. दोन्ही परस्पर पूरक आहेत.\n\nबर्याच वेळा polymorphism चा पाया override वर उभा असतो — पालकातील पद्धत मुलांनी override केली तर एकच नाव अनेक उत्तरं देऊ शकतं. उदा. Bird ची sound; Cat व Dog दोघांनी override केला तर लूप एकाच पद्धतीने अनेक आवाज काढतं.\n\nत्यामुळे override शिकल्यानंतर polymorphism धडा सोपा वाटतो. आजच्या धड्यातील नवीन आवृत्तीची संकल्पना पुढील धड्यात शक्ती म्हणून काम करते — एक कोड, अनेक परिणाम.",
        code: `class Fees:
    def amount(self):
        return 5000

class Hostel(Fees):
    def amount(self):
        return super().amount() + 8000

print(Hostel().amount())`,
        codeLanguage: "python",
        output: `13000`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "overriding बद्दल अधिक वाचण्यासाठी ही अधिकृत स्रोत असणाऱ्या संसाधने:\n\n• classes मधील method/naming आचार: https://docs.python.org/3/tutorial/classes.html#method-objects\n• पालक वर्ग आणि मूल वर्ग ची रचना: https://docs.python.org/3/tutorial/classes.html#inheritance\n• super() फंक्शनची व्याख्या: https://docs.python.org/3/library/functions.html#super\n• __init__ ची आवृत्ति alignment नियम: https://docs.python.org/3/library/functions.html#super (special method)\n• glossary मधील method: https://docs.python.org/3/glossary.html#term-method\n• data model: https://docs.python.org/3/reference/datamodel.html\n• function definitions संदर्भ: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• Python style guide (नाव शिस्त): https://peps.python.org/pep-0008/\n\nहे स्रोत वाचून प्रत्येक override उदाहरण स्वतः लिहा; super सह आणि super शिवाय दोन्ही करून फरक पहा. असा अभ्यास override तुमच्या आत्म्यात उतरवतो.",
      },
    {
        title: "पालकाची पद्धत न बदलता मुलाचं वर्तन",
        content: "override चे सर्वात महत्त्वाचं वैशिष्ट्य म्हणजे पालकाची मूळ पद्धत अजूनही त्याच्या मुळावर उपलब्ध असते — नवीन आवृत्ती फक्त मुलाच्या वर्गात चालते. उदा. Print कंस वापरल्यास पालकाची greet output देतं; पण मुलाच्या वस्तूवर वापरल्यास मुलाची आवृत्ती दिसते.\n\nयाचा फायदा मोठा आहे: एकाच पालक वर्गातून अनेक मूल वर्ग निघतात आणि प्रत्येक स्वतःचं वर्तन बनवतो. पालकाची रचना मात्र कधीही हलत नाही — तो आधारभूत गाभा पुढेही स्थिर असतो. याचीच रचना प्रत्येक framework मध्ये वापरली जाते.\n\nहीच युक्ती व्यावहारिक वापरात: तिकिटांचे दर, कर गणना, कर्मचारी वेतन — प्रत्येक मूल वर्ग पालकाच्या मूळ पद्धतीवर आपला विशेष भाग जोडतो. अशा रचनेने program टिकाऊ होतो: मूल नवे असले तरी पालकाची मूलभूत तत्त्व तशीच राहतात.",
        code: `class Ticket:
    def price(self):
        return 50

class VIP(Ticket):
    def price(self):
        return super().price() + 350

print("सामान्य:", Ticket().price())
print("VIP:", VIP().price())`,
        codeLanguage: "python",
        output: `सामान्य: 50
VIP: 400`,
      },
      {
        title: "override सराव — स्वतःचे उदाहरण",
        content: "override समजायला सराव आवश्यक. आत्ता दोन उदाहरणे करून पहा आणि output काढा:\n\nपहिलं — Instrument वर्गात play पद्धत म्हणजे 'आवाज वाजतो'; Guitar मूल वर्गात ती पद्धत override करा 'स्ट्रिंग खटकतात'. दुसरं — Bus वर्गाची tickets आणि metro वर्गाची tickets वेगळी करा.\n\nतिसरं — SuperMarket मध्ये bill मूल्य फक्त discount पद्धतीने; त्यावर आधार वाढवा. प्रत्येक उदाहरणात super() चा वापर करून नवीन वर्तन पालकाच्या निकालावर बसवा म्हणजे जुनी-नवीन जोडणी घडते.\n\nस्वतःच्या उदाहरणातून शिकणं हे खूप secure असतं. त्यामुळे आज रात्री एक तरी नवीन override उदाहरण तुमच्या हस्ते लिहा — तुम्ही चालवता, बदलता, सुधारता; हीच OOP shikण्याची सर्वात सकस पद्धत.",
        code: `class Instrument:
    def play(self):
        return "आवाज वाजतो"

class Guitar(Instrument):
    def play(self):
        return "स्ट्रिंग खटकतात"

print(Instrument().play())
print(Guitar().play())`,
        codeLanguage: "python",
        output: `आवाज वाजतो
स्ट्रिंग खटकतात`,
      },
      {
        title: "सारांश आणि पुढची वाट",
        content: "override चा सार: पालकाच्या पद्धतीच्या नावाने मुलात नवीन आवृत्ती लिहिल्यास पालकाची मागे सरते आणि मुलाची चालते. नाव अचूक जुळलं पाहिजे; जुना निकाल हवा असेल तर super() वापरा; पूर्ण वेगळं काम असेल तर स्वतः लिहा. हेच तीन नियम या धड्याचे केंद्रबिंदू आहेत.\n\nपुढील धडा encapsulation — डेटा संरक्षण. तिथे _balance सारखे अंतर्गत attributes कसे संभाळायचे ते दिसेल. override ची नवीन आवृत्ती तयार करण्याची शैली encapsulation मध्ये पद्धतींच्या नियंत्रणासाठी आधार बनते.\n\nआजच्या धड्याची एक नोट एका sentence मध्ये लिहा: 'एकाच नावाने नवीन waging — तीच override.' ही नोट पुढील प्रत्येक OOP धड्यात तुमची भक्कम स्मरणशक्ती असेल.",
        code: `class Alarm:
    def sound(self):
        return "बीप"

class SmartAlarm(Alarm):
    def sound(self):
        return "बीप बीप - अलार्म!"

print(SmartAlarm().sound())`,
        codeLanguage: "python",
        output: `बीप बीप - अलार्म!`,
      },
      {
        title: "वारंवार विचारले जाणारे प्रश्न — override",
        content: "प्रश्न: override केल्याने पालकाची पद्धत मिटते का? उत्तर: नाही; ती पालकात तशीच असते; मुलात नवीन आवृत्ती उलगडते.\nप्रश्न: नाव जुळेल असं कसं सुनिश्चित करायचं? उत्तर: पालकाची पद्धत नेमकी कशी लिहिली ते बारकाईने पहा आणि तीच नाव वर mouse करा.\nप्रश्न: जुना result हवा असेल तर? उत्तर: super().method() वापरा.\nप्रश्न: arguments बदलता येतात का? उत्तर: default मूल्ये देऊन शक्य नाही; ते टाळा आणि क्रम सांभाळा.\n\nही प्रश्नोत्तरे override ची आत्मतीर्थ उदाहरणे आहेत. त्यांना कागदावर लिहा आणि आजच्या संध्याकाळी पुन्हा वाचा. दुसऱ्या दिवशी मित्राला समजावताना तुम्ही खरा गुरू व्हाल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "overriding च्या सखोल अभ्यासासाठी अधिकृत संसाधनांची संपूर्ण यादी:\n\n• classes मधील inheritance आणि override: https://docs.python.org/3/tutorial/classes.html#inheritance\n• super() ची अधिकृत व्याख्या: https://docs.python.org/3/library/functions.html#super\n• मूल वर्गाची व्याख्या: https://docs.python.org/3/glossary.html#term-derived-class\n• अभियांत्रिकीतील method resolution order: https://docs.python.org/3/tutorial/classes.html#method-resolution-order\n• Python data model मधील पद्धतींचे नियम: https://docs.python.org/3/reference/datamodel.html\n• function definition चे नियम: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• variable scope समजून घेणे: https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces\n• आणखी एक अधिकृत classes पाश: https://docs.python.org/3/tutorial/classes.html#a-first-looking-at-classes\n\nप्रत्येक संसाधनाची पुनरावृत्ती करा आणि त्यातले नमुने कोड करा. तेव्हा override नावाची शक्ती तुमच्यात मूळ होईल.",
      },
    {
        title: "override मधील नाव जुळवणी — गहन विश्लेषण",
        content: "override चा गाभा म्हणजे name resolution — Python मुलाच्या वर्गात पद्धत शोधतो; मिळवण्याचा तो वापर करतो; नाही तर पालकात शोधतो. या शोधाचा क्रमच override ची खरी यंत्रणा आहे.\n\nयामागचा तर्क असा: मूल वर्गातील पद्धत पालकाच्या नावावर छाया पाडते (shadow). त्यामुळे मुलाच्या वस्तूला कॉल करताना Python नेहमी मुलातील आवृत्तीच निवडतो — पालकाची अजिबात दिसत नाही. हीच आचारसंहिता OOP मध्ये सर्वत्र लागू होते.\n\nकधी कधी नवशिके चुकून मूल वर्गात पालकाच्या पद्धतीची खोटीच नाव वापरतात (उदा. speak_all, speak_text) — तेव्हा Python ती वेगळी पद्धत समजतो आणि override यशस्वी होत नाही. म्हणून 'पालकाची पद्धत कशी लिहिली?' हा प्रश्न संपूर्ण कोडमध्ये जपून विचारा.",
        code: `class Base:
    def greet(self):
        return "नमस्कार"

class Child(Base):
    def greet(self):
        return "नमस्कार, मित्रा!"

print(Child().greet())`,
        codeLanguage: "python",
        output: `नमस्कार, मित्रा!`,
      },
      {
        title: "खोल रचनेतील override — स्तरयुक्त",
        content: "override फक्त एक थरातच नाही; तुम्ही मुलाच्या मुलाचा वर्ग बनवू शकता आणि प्रत्येक थरांत नवीन आवृत्ती लिहू शकता. वारंवार जर B हा A चा मूल असेल आणि C हा B चा मूल, तर C ला तिन्ही स्तरांचा पगडा मिळतो — परंतु जे B किंवा A override करतो ते सगळ्या वरच्या थरात नवीन रूपात चालतं.\n\nअशा स्तरयुक्त रचनेत पद्धतीचा अंतिम निर्णय C च्या वर्गातून येतो; तिरकस पद्धत super() द्वारे जुन्या थरातील रचना मिळवते. हीच MRO ची साखळी — या धड्याच्या प्रमाणे ती तंतोतंत क्रमाने काम करते.\n\nस्तरयुक्त override जरी शक्तिशाली असली तरी सोप्या code साठी एकाच थरच पुरेसे. दोन तीन थरांच्या पलीकडे नेटके नियंत्रण हळूहळू जटिल होते. म्हणून साहजिकपणे जितके थर हवे तितके; अधिक गरज नसतो.",
      },
      {
        title: "override चा वापर वेगवेगळ्या क्षेत्रात",
        content: "override चे वास्तविक उपयोग:\n\n• गेम — प्रत्येक खेळाडू प्रकार heroic attack पद्धत वेगळ्या रूपात override करतो.\n• शाळा — फी नोंदणीची पद्धत नियमित आणि hostel विद्यार्थ्यांसाठी वेगळी.\n• बँक — व्याज गणना पद्धत खाते प्रकारानुसार override होते.\n• दुकान — बिल पद्धत नियमित आणि सवलती वस्तूंसाठी वेगळी.\n\nही उदाहरणे सगळी एकाच नमुन्यावर उभी आहेत: पालकातील सामान्य रचना आणि मुलातील विशेष वर्तन. यामुळे प्रोग्रामर्स कोड पुन्हा लिहित नाहीत; फक्त ज्या कृती वेगळ्या आहेत त्या विशेष वर्गात override करतात.\n\nहे उपयोग समजल्यावर override ची शक्ती दिसते — एकच पद्धतीचं नाव अनेक आवृत्त्यांसह अनेक क्षेत्रांना सेवा देतं. असा एकत्रित वापर OOP ची खरी जादू आहे.",
        code: `class Student:
    def fee(self):
        return 5000

class HostelStudent(Student):
    def fee(self):
        return super().fee() + 3000

print(Student().fee())
print(HostelStudent().fee())`,
        codeLanguage: "python",
        output: `5000
8000`,
      },
    {
        title: "override टाळण्याची वेळ — निर्णयाची तपासणी",
        content: "override नेहमीच योग्य असेलच असं नाही. काही वेळा ती पद्धतच बदलणे टाळणे आणि पालकाची रचना जशी आहे तशी वापरणे योग्य ठरते:\n\nपहिली वेळ — पालकाची पद्धत आधीच मुलासाठी योग्य आहे; तेव्हा override शिवाय पालकाचीच रचना मिळते. दुसरी वेळ — बदल करण्याऐवजी नवीन पद्धत निर्माण करणे हे clear असते; जुनी रचना नाहीशी होत नाही. तिसरी वेळ — ज्या रचनेत बदल vintage मध्ये गोंधळ करू शकतो तिथे नवीन पद्धत वेगळ्या नावाने करा.\n\nही निवड नेमकी करण्यासाठी प्रश्न विचारा: 'मी मूळ behavior कायम ठेवायचे आहे का?' उत्तर होय — वारसा किंवा super वापरा; नाही — नवीन पद्धत बनवा. अशा निर्णयाने तुमचा कोड टिकाऊ आणि वाचण्यास सोपा राहतो.",
      },
      {
        title: "व्यवहारातील override — घडीचं उदाहरण",
        content: "दुकानाचे बिल बनवण्याचा विचार करा. मूळ Item वर्गात bill पद्धत name आणि price छापते; Counted मूल वर्गात तीच पद्धत override करून qty नुसार गुणाकार होतो. दोन्ही वस्तूंचा output एकाच for loop मध्ये सातत्याने दिसतो.\n\nहा नमुना दर्शवतो की override चा वापर रोजच्या code मध्ये किती आराम देतो — मुळाची रचना तुटत नाही, फक्त मूल वर्गाची आवृत्ती उपयोगात येते. याच शैलीने दुकानाची GST, कार्टची रक्कम हे सगळे वेगवेगळे वर्ग एकत्र काम करतात.\n\nसरावासाठी हाच नमुना बसवा: एक output चे दोन्ही पद्धती — मूल वर्गाला त्याच्या वस्तूवर कॉल करा आणि output मध्ये दोन्ही वेगवेगळे निकाल पहा. अशा वेळी override चा अर्थ तुमच्या डोक्यात पक्का होतो.",
        code: `class Item:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def bill(self):
        return self.name + ": ₹" + str(self.price)

class Counted(Item):
    def __init__(self, name, price, qty):
        super().__init__(name, price)
        self.qty = qty

    def bill(self):
        return self.name + " x" + str(self.qty) + ": ₹" + str(self.price * self.qty)

print(Item("पाव", 10).bill())
print(Counted("साखर", 45, 2).bill())`,
        codeLanguage: "python",
        output: `पाव: ₹10
साखर x2: ₹90`,
      },
    {
        title: "override चा आत्मपरीक्षण — प्रश्नोत्तर",
        content: "आत्मपरीक्षणासाठी खालील प्रश्न विचारा आणि उत्तरं स्वतः बोला:\n\nप्रश्न १: पालकाची पद्धत मुलामध्ये नव्याने लिहिल्यास कोणती चालते? उत्तर: मुलाची — ती जुन्याला मागे सारते.\nप्रश्न २: जुनी पद्धत सुरक्षित कशी राहते? उत्तर: super().method() द्वारे.\nप्रश्न ३: एरर आल्यास काय तपासाल? उत्तर: नाव जुळते का, arguments बरोबर आहेत का.\nप्रश्न ४: override आणि नवीन पद्धत यात फरक? उत्तर: operation override — समान नाव नवीन वर्तन; नवीन पद्धत — वेगळं nama.\n\nही प्रश्नोत्तरे उच्चारून सांगणं महत्त्वाचं — फक्त वाचलं नसून बोललं तर मेंदूत साठतं. पुढे दुसऱ्याला सांगताना sopभ sway सहज बाहेर पडते.\n\nसराव म्हणून एक नवीन example आज नक्की तयार करा — टीव्ही चॅनेलचा sound वेगवेगळ्या खोल्यांमध्ये override करा; output वेगळा दिसेल. असे प्रयोग दिवसाला एक केले तर OOP कौशल्य rapidly वाढते.",
        code: `class TV:
    def sound(self):
        return "टीव्हीचा आवाज"

class SmartTV(TV):
    def sound(self):
        return super().sound() + " - 4K स्पष्ट"

print(SmartTV().sound())`,
        codeLanguage: "python",
        output: `टीव्हीचा आवाज - 4K स्पष्ट`,
      },
    {
        title: "शेवटचा ध्यास — override चा दरवाजा",
        content: "आजच्या धड्यात override म्हणजे काय, ती कशी लिहायची, super कसा वापरायचा आणि कधी टाळायचा हे सगळं समजलं. नाव अचूक, arguments सही, जुनी पद्धत super द्वारे — हे तीन स्तंभ आजपासून तुमच्या override च्या शब्दकोशात आहेत.\n\nपुढील धडा encapsulation — डेटा संरक्षण. तिथे जुन्या पद्धती आणि नव्या method च्या संरक्षित tracks या दोन्ही एकत्र येतील. आजच्या override च्या सखोल समजामुळे पुढे encapsulation चे नियंत्रण सोपे होईल.\n\nउत्कृष्ट programming साठी नियमित सराव अपरिहार्य आहे. तुम्ही आज शिकलेला override कोड उद्या पुन्हा लिहा; त्यानंतर प्रत्येक संकल्पनेमागे एक नवीन example जोडा. प्रगती हळूहळू स्थिर होते ते याच टप्प्यातून.",
        code: `class Vehicle:
    def fuel(self):
        return "इंधन"

class EV(Vehicle):
    def fuel(self):
        return "वीज"

print(Vehicle().fuel())
print(EV().fuel())`,
        codeLanguage: "python",
        output: `इंधन
वीज`,
      },
    ],
    practiceQuestions: [
      "overriding म्हणजे काय?",
      "जुनी पद्धत कशी उपलब्ध राहते?",
      "same name लिहिल्यावर कोणती चालते?",
      "overriding का महत्त्वाचं?",
    ],
    quiz: [
      { question: "मुलाच्या वर्गात पालकाच्या नावाने पद्धत लिहिल्यास?", options: ["एरर", "नवी आवृत्ती चालते", "जुनीच", "Python निवडतं"], correct: 1 },
      { question: "जुनी पद्धत वापरण्यासाठी?", options: ["self.old()", "parent()", "super().method()", "delete"], correct: 2 },
      { question: "overriding मध्ये नाव कसं हवं?", options: ["वेगळं", "same", "मोठं", "कोणतेही"], correct: 1 },
    ],
    challenge: {
      prompt: "पालकाची method मुलात बदला (बीप दोनदा).",
      starterCode: `class Alarm:
    def sound(self):
        return "बीप"

class SmartAlarm(Alarm):
    def sound(self):
        return super().sound() + " - बीप" + super().sound()

print(SmartAlarm().sound())`,
      expectedOutput: "बीप - बीपबीप",
    },
    interviewQuestions: [
      "overriding vs फक्त नवी पद्धत?",
      "super() कसे संबंधित — overriding मध्ये?",
    ],
    related: ["python-inheritance", "python-super", "python-polymorphism"],
    prev: "python-super",
    next: "python-encapsulation",
  },

  {
    slug: "python-encapsulation",
    categoryId: "python",
    title: "OOP - Encapsulation",
    marathiTitle: "Encapsulation - डेटा संरक्षण",
    level: "intermediate",
    minutes: 15,
    summary: "वस्तूचा डेटा (data) व्यवस्थित संरक्षित करणे — _ खाजगी attribute आणि नियंत्रित methods.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Encapsulation - डेटा संरक्षण चे फायदे आणि महत्त्व",
        content: "\"Encapsulation - डेटा संरक्षण\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "encapsulation म्हणजे काय?",
        content: "Encapsulation म्हणजे वस्तूचा आतला data थेट न बदलता — फक्त वस्तूच्या पद्धतींनीच बदलू देणे.\n- _name म्हणजे \"आतला\" गुणधर्म (परंपरा)\n- deposit() आणि get_balance() सारख्या पद्धती — नियंत्रित बदल\n- आतले details लपवल्याने वस्तू सुरक्षित आणि व्यवस्थित",
      },
      {
        title: "वॉलेटचं उदाहरण",
        content: "वॉलेट आतमध्ये पैसे ठेवतं (data). कोणीही थेट आत डोकावून काढू नये — म्हणून केवळ पद्धतींनी (methods) पैसे देणे-घेणे होतं.\n\n\"_\" चिन्ह परंपरेनुसार सांगतं: \"आतला माल, बाहेरून थेट हात लावू नका.\" याचाच अर्थ — वस्तूशी संवाद तिच्या पद्धतींनी; हीच सुरक्षिततेची रीत.",
      },
      {
        title: "बँक खाते — _balance",
        content: "बँक खात्यात _balance हा आतला data आहे. जमा करण्यासाठी deposit() पद्धत आणि तपासण्यासाठी get_balance() पद्धत — थेट acc._balance बदलण्याऐवजी हाच मार्ग.\n\nacc = Bank(1000); acc.deposit(500); print(acc.get_balance()) म्हणून output 1500. बदल आणि वाचन या दोन्ही पद्धतींनीच होतं.",
        code: `class Bank:
    def __init__(self, balance=0):
        self._balance = balance

    def deposit(self, amount):
        self._balance += amount

    def get_balance(self):
        return self._balance

acc = Bank(1000)
acc.deposit(500)
print(acc.get_balance())`,
        codeLanguage: "python",
        output: `1500`,
      },
      {
        title: "पैसे काढताना तपासणी",
        content: "पैसे काढताना तपासणी. spend() पद्धत आधी अट तपासते: amount मागितलेले पैसे _cash पेक्षा जास्त असतील तर \"पुरेसे पैसे नाहीत\" सांगते.\n\nw = Wallet(200); w.spend(150) ने 150 वजा होऊन output 50. पुन्हा w.spend(100) — 100 > 50, म्हणून output पुरेसे पैसे नाहीत. वस्तू स्वतःची काळजी घेते.",
        code: `class Wallet:
    def __init__(self, cash=0):
        self._cash = cash

    def spend(self, amount):
        if amount > self._cash:
            return "पुरेसे पैसे नाहीत"
        self._cash -= amount
        return self._cash

w = Wallet(200)
print(w.spend(150))
print(w.spend(100))`,
        codeLanguage: "python",
        output: `50
पुरेसे पैसे नाहीत`,
      },
      {
        title: "फ्रिज — आतला स्टॉक",
        content: "फ्रिजमधल्या वस्तूंची यादी _items मध्ये. ती बाहेरून थेट दिली जात नाही — add() पद्धत स्टॉक वाढवते आणि len(self._items) ने नवीन मोजणी देते.\n\noutput मध्ये 1 आणि 2 दिसतं — दूध जोडल्यावर एक, दही जोडल्यावर दोन. आतला साठा फक्त methods द्वारेच सांभाळला जातो.",
        code: `class Fridge:
    def __init__(self):
        self._items = []

    def add(self, item):
        self._items.append(item)
        return len(self._items)

f = Fridge()
print(f.add("दूध"))
print(f.add("दही"))`,
        codeLanguage: "python",
        output: `1
2`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ _balance खाजगी (private) आहे असं समजणे — _ हा फक्त परंपरेचा इशारा, सुरक्षेचं कुलूप नाही.\n✗ _balance आणि balance यांचा गोंधळ — ही दोन वेगळी attributes ठरतात.\n✗ बाहेरून थेट बदलणे — बदलाची जबाबदारी वस्तूच्या पद्धतीकडेच राहू द्या.\n\nखालील Demo मध्ये _score वाचणे आणि बदलणे हे दोन्ही set_score()/get_score() यांच्यातूनच होतं — output 10.",
        code: `class Demo:
    def __init__(self):
        self._score = 0

    def set_score(self, value):
        self._score = value

    def get_score(self):
        return self._score

d = Demo()
d.set_score(10)
print(d.get_score())`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "इंटरॅक्टिव्ह: वीज मीटर",
        content: "वीज मीटरमध्ये _units ही आतली माहिती. use() पद्धत फक्त ती वाढवते — बाहेरून m._units = 200 असं थेट बदल नको.\n\nm = Meter(50); print(m.use(30)) म्हणजे output 80. घरगुती वीज बिलातले युनिट अर्थ आठवा आणि स्वतःचे आकडे लिहून तुलना करा.",
        code: `class Meter:
    def __init__(self, units=0):
        self._units = units

    def use(self, extra):
        self._units += extra
        return self._units

m = Meter(50)
print(m.use(30))`,
        codeLanguage: "python",
        output: `80`,
      },
      {
        title: "Mini Project — तिजोरी आणि PIN",
        content: "तिजोरीत PIN तपासल्याशिवाय रक्कम बाहेरच येत नाही. check() पद्धत आधी pin चा मेळ घेते — PIN चुकला तर \"चुकीचा PIN\", रक्कम कमी तर \"अपुरी रक्कम\"; नाहीतर तितकी रक्कम वजा करून परतावा सांगते.\n\nv = Vault(1234, 5000). v.check(9999, 100) मुळे output चुकीचा PIN; v.check(1234, 2000) मुळे output मिळाले: 2000. सुरक्षित तिजोरी ही वस्तूचीच जबाबदारी.",
        code: `class Vault:
    def __init__(self, pin, amount):
        self._pin = pin
        self._amount = amount

    def check(self, pin, take):
        if pin != self._pin:
            return "चुकीचा PIN"
        if take > self._amount:
            return "अपुरी रक्कम"
        self._amount -= take
        return "मिळाले: " + str(take)

v = Vault(1234, 5000)
print(v.check(9999, 100))
print(v.check(1234, 2000))`,
        codeLanguage: "python",
        output: `चुकीचा PIN
मिळाले: 2000`,
      },
    {
        title: "_ चं खरं अर्थ — परंपरा की कुलूप?",
        content: "Python मध्ये _ ने सुरू होणाऱ्या attribute चा अर्थ काय? तो 'अधिकृत कुलूप' नसून एक परंपरा (convention) आहे. _balance लिहिलं की program चे developers वाचतात की 'हे अंतर्गत data आहे, बाहेरून थेट बदलू नका'. Python हे नियम लादत नाही — फक्त अशी सवय कायम ठेवली जाते.\n\nखरं कुलूप हवं असेल तर दोन अंडरस्कोर (__balance) वापरता येतो. तेव्हा Python name mangling करतो — attribute चं नाव बदललं जातं म्हणून बाहेरून थेट उपयोग करणे कठीण होतं. पण तरीही तो absolute सुरक्षा नाही; फक्त समजणं कठीण होतं.\n\nमराठीत उदाहरण: वॉलेटचा आतला पैसा आपण _cash म्हणून धरतो; खिशातून tटथेट पैसे बाहेर काढण्याऐवजी पैसे देणे/घेणे यासाठी पद्धती वापरतो. हीच परंपरा encapsulation मध्ये संरक्षणाची रीत बनते.",
      },
      {
        title: "data कोण bदलू शकतो — नियंत्रण",
        content: "encapsulation चा एक महत्त्वाचा फायदा म्हणजे data बदलण्यावर नियंत्रण ठेवता येते. उदा. बँक खात्यात जमा करताना deposit method आत जाऊन amount शून्यापेक्षा जास्त आहे का ते तपासू शकते; कोणीही थेट _balance मध्ये नकारात्मक रक्कम टाकू शकत नाही.\n\nअशी तपासणी पद्धतीत ठेवल्यावर data ची सुरक्षा दृढ होते. प्रत्येक बदल method द्वारे होतो — आपण शक्यता वाढवू/-कमी करू शकतो, आणि नकली बदलांना रोखू शकतो. बँकेची खरी प्रथा म्हणजे कधीही प्रत्येक व्यवहार तपासूनच नोंदवणे.\n\nव्यवहारात अशा नियंत्रणाचा उपयोग अनेक ठिकाणी होतो: तापमान सेन्सर मर्यादा ओलांडल्यास एरर; खेळांमध्ये score negative झाल्यास रोखणे; गाडीची speed मर्यादा. संरक्षण फक्त 'लपवणं' नव्हे — तर बदलाच्या नियमांची व्यवस्था.",
        code: `class Wallet:
    def __init__(self, cash=0):
        self._cash = cash

    def spend(self, amount):
        if amount > self._cash:
            return "पुरेसे पैसे नाहीत"
        self._cash -= amount
        return self._cash

w = Wallet(200)
print(w.spend(150))
print(w.spend(100))`,
        codeLanguage: "python",
        output: `50
पुरेसे पैसे नाहीत`,
      },
      {
        title: "encapsulation चे तीन भाग — समजून घ्या",
        content: "encapsulation ही एकसंध हक्काची कल्पना असून तिचे तीन भाग आहेत:\n\nपहिला — data लपवणे: आतले attributes _ ने सुरू करतो म्हणजे बाहेर थेट उपयोग टाळतो. दुसरा — नियंत्रित पद्धती: प्रत्येक बदल method द्वारे होतो; method ची तपासणी data च्या सुरक्षेसाठी. तिसरा — वस्तूची जबाबदारी: वस्तू स्वतःच्या data ची काळजी घेते; बाहेरच्या कोडने तिच्यात ढवळाढवळ करू नये.\n\nहे तीन भाग मिळून वस्तू 'सुरक्षित बॉक्स' बनते — आतला data लपलेला, बाहेर फक्त सुस्पष्ट पद्धती. च्या मालकीचं वर्तन वस्तूच्या आत राहतो आणि बाहेरचा कोड फक्त पद्धतीला तारीतो.\n\nया तीन भागांची पुनरावृत्ती करणे म्हणजे encapsulation पक्का समजणे होय. आता तुमची कोणती उदाहरणे ठीक — बँक, वॉलेट, फ्रिज — प्रत्येकात हे तीन भाग असतीलच.",
        code: `class Bank:
    def __init__(self, balance=0):
        self._balance = balance

    def deposit(self, amount):
        self._balance += amount

    def get_balance(self):
        return self._balance

acc = Bank(1000)
acc.deposit(500)
print(acc.get_balance())`,
        codeLanguage: "python",
        output: `1500`,
      },
      {
        title: "प्रत्येक example मध्ये नियंत्रण",
        content: "घरगुती उदाहरणांनी encapsulation पक्का होतो:\n\n• फ्रिज — आतला साठा _items; फक्त add() पद्धत नवीन वस्तू घालते; बाहेरून थेट फ्रिजची यादी बदलता येत नाही.\n• तिजोरी — आतला _pin आणि _amount; check() पद्धत PIN तपासूनच रक्कम देते.\n• वीज मीटर — _units; use() पद्धत फक्त वापर वाढवते.\n• बँक — _balance; deposit/get_balance मिळून व्यवहार.\n\nप्रत्येक example सांगतं की data ला पद्धतीचं कवच असतं. बाहेरच्या जगाशी संपर्क पद्धतींद्वारे होतो; थेट प्रवेश हेकट जातो. हेच encapsulation चं सार आहे.\n\nत्यामुळे तुमची zoomed दायित्वं — कोणता attribute बाहेर पडू द्यायचा आणि कोणता बंद ठेवायचा — हा design निर्णय आता तुमच्या अंगवळणी पडतो.",
        code: `class Fridge:
    def __init__(self):
        self._items = []

    def add(self, item):
        self._items.append(item)
        return len(self._items)

f = Fridge()
print(f.add("दूध"))
print(f.add("दही"))`,
        codeLanguage: "python",
        output: `1
2`,
      },
      {
        title: "सामान्य चुका — encapsulation मध्ये",
        content: "✗ _balance हे खाजगी आहे असं समजणे — ते फक्त परंपरेचा इशारा; Python सक्ती करत नाही.\n✗ _balance आणि balance यांची एकमेकांशी सरमिसळ करणे — दोन वेगळे attributes; return फरक पडतो.\n✗ मागे थेट attributes बदलणे — पद्धतीविना केलेलं; ती सोय टाळा.\n✗ तिसरा खोला निर्माण करणे — encapsulation साठी तिसरा पद्धत तयार नसल्यास data तुटतो.\n\nचुका ओळखत सुधारण्याची शिस्त ही देशी विकासाची जडणघडणी होस्. प्रत्येक चूक तुम्हाला encapsulation च्या सीमा अचूक पाडते; म्हणून अशी सर्व नोंदी स्वतः लिहून तपासा.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "encapsulation च्या अभ्यासासाठी अधिकृत स्रोत:\n\n• classes मधील private variables ची चर्चा: https://docs.python.org/3/tutorial/classes.html#private-variables\n• name mangling चे नियम: https://docs.python.org/3/tutorial/classes.html#private-variables\n• attribute naming संबंधी शिष्टाचार: https://docs.python.org/3/reference/expressions.html#attribute-references\n• glossary मधील encapsulation सदृश संकल्पना: https://docs.python.org/3/glossary.html#term-encapsulation\n• data model मधील attribute management: https://docs.python.org/3/reference/datamodel.html\n• getattr/setattr built-ins: https://docs.python.org/3/library/functions.html#getattr\n• property अंतर्गत तयारी: https://docs.python.org/3/library/functions.html#property\n• Python style guide: https://peps.python.org/pep-0008/\n\nहे स्रोत वाचल्यावर प्रत्येक _ attribute च्या मागे काय घडतं ते समजून येईल. पुढील property धड्यात याच संकल्पना शेवटच्या रूपात वापरल्या जातील.",
      },
    {
        title: "नियंत्रित पद्धती — getter आणि setter आधार",
        content: "encapsulation मध्ये एका attribute साठी अनेकदा दोन पद्धती तयार केल्या जातात: एक वाचण्यासाठी (getter) आणि एक बदलण्यासाठी (setter). उदा. _score साठी get_score() वापरून वाचतात आणि set_score(value) वापरून ठरवतात. अशा पद्धती चालवतात तेव्हा वाचन-लिखाणावर नियंत्रण मिळते.\n\ngetter मध्ये आपण data परत देतो; setter मध्ये आपण तपासणी करतो आणि योग्य मूल्य नोंदवतो. उदा. set_score मध्ये value 100 पेक्षा जास्त असेल तर 100 म्हणून ठरवता येतं. अशा तपासण्या अनेकदा बाहेरच्या कोडला लपाऊन वस्तू स्वतः करते.\n\nपुढील धड्यात property मध्ये हेच getter/setter @property आणि @setter या decorate ने लिहिले जातील — त्यामुळे सेम रचना परंतु अधिक सुंदर. आजच्या हाताने getter/setter लिहिण्याची सवय encapSeparation चा पाया घट्ट करते.",
        code: `class Demo:
    def __init__(self):
        self._score = 0

    def set_score(self, value):
        self._score = value

    def get_score(self):
        return self._score

d = Demo()
d.set_score(10)
print(d.get_score())`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "नियंत्रण का महत्त्वाचं — आरोग्य उदाहरण",
        content: "design नुसार data नियंत्रण का महत्त्वाचं याचं सर्वोत्तम उदाहरण म्हणजे आरोग्य. तापमान मोजणारी वस्तू घ्या: _temp attribute; set_temp() मध्ये -50 ते 150 मर्यादा तपासली जाते; अन्यथा गैर मूल्य टाकल्यावर एरर. अशा कठोर तपासण्यांशिवाय data चुकीचा होऊ शकतो.\n\nरोजच्या जीवनातही असेच — खात्यावर रक्कम, पाकिटातील पैसे, वीज मीटरचे युनिट — प्रत्येक बदल तपासून होतो. encapsulation हाच नियम कोडमध्येला आणतो: प्रत्येक बदल सुरक्षित मार्गाने.\n\nजेव्हा तुम्ही असा वर्ग लिहिता जिथे data बदल फक्त पद्धतीने होतो, तेव्हा त्या वस्तूचा पुढे वापर करणारा प्रत्येक प्रोग्राम सुरक्षित राहतो. हीच दीर्घकालीन बुद्धी encapsulation ने मिळते.",
        code: `class Room:
    def __init__(self):
        self._temp = 25

    def set_temp(self, value):
        if value < -50 or value > 150:
            return "मर्यादेबाहेर"
        self._temp = value
        return self._temp

r = Room()
print(r.set_temp(30))
print(r.set_temp(300))`,
        codeLanguage: "python",
        output: `30
मर्यादेबाहेर`,
      },
      {
        title: "encapsulation आणि other धडे — जोड",
        content: "encapsulation एकटाच नाही; तो attributes, methods, inheritance या सगळ्यांनी जोडला जातो. attributes च्या _ प्रकारांनी data आतला राहतो; methods त्या आतल्या data वर काम करतात; inheritance मध्ये मूल वर्ग पालकाचे _attribute वापरून पद्धती जोडतो.\n\nउदा. पालक Bank मध्ये _balance आणि deposit() असेल; मूल Savings हा वारसा घेऊन add_interest पद्धत जोडतो. येथे encapsulation (आतला data) आणि inheritance (रचना वारसा) एकत्र येतात; data तरीही पद्धतींनी बदलतो.\n\nअशा जोडण्या OOP ची खरी अवस्था दर्शवतात — प्रत्येक संकल्पना स्वतंत्र नसते, तर सहकारितेने काम करतात. हीच संपूर्णता पुढील property, polymorphism, magic methods मध्ये आणखी दिसते.",
        code: `class Piggy:
    def __init__(self, saved=0):
        self._saved = saved

    def add(self, coin):
        self._saved += coin
        return self._saved

p = Piggy(10)
print(p.add(5))`,
        codeLanguage: "python",
        output: `15`,
      },
      {
        title: "चुका — encapsulation मध्ये वारंवार",
        content: "✗ बाहेरून _score थेट बदलण्याचा मोह टाळणे — त्यासाठी पद्धती वापरा; थेट बदल असंबद्ध असतो.\n✗ getter मध्ये मूल्य न बदलणे — वाचणे असते; बदल setter द्वारे होतो; getter ने बदल करणे गोंधळ.\n✗ _ आणि खरं कुलूप यात गोंधळ — _ ही परंपरा; खऱं कुलूप __ द्वारे, परंतु तेही मर्यादित.\n✗ जिथे नियंत्रण आवश्यक नाही तिथे encapsulation लादणे — सर्वत्र नको; नियम स्पष्ट हवे.\n\nचुका टाळायच्या तर पद्धतीचा आदर करा. सर्व बदल पद्धतींनी; वाचन पद्धतींनी. हीच ती habituated सवय तुम्हाला professional programmer बनवते.",
      },
      {
        title: "सारांश — encapsulation एका नजरेत",
        content: "या धड्यात आपण encapsulation म्हणजे data संरक्षण समजलं; _ attribute परंपरेचा इशारा; पद्धतींद्वारे नियंत्रित बदल; getter/setter मध्ये वाचन-लिखाण; आणि data चा आतला साठा बाहेरून न लपवता योग्यरीत्या पद्धतींनी. ही सगळी कल्पना खरे OOP projects च्या कणा आहेत.\n\nपुढील धडा property — येथे दिसलेले getter/setter आता @property आणि @setter या decorate ने अधिक सुंदर व लिहायला सोपे होतील. attributes ची संरक्षणाची संकल्पना तिथे पूर्ण रूप धारण करते.\n\nआता स्वतः सराव करा: एक वस्तू बनवा जिथे _speed हा आतला data असेल; set_speed() मध्ये मर्यादा तपासली जाईल (0 ते 200); get_speed() वाचेल. तिथे encapsulation चा अर्थ पूर्णपणे दिसेल.",
        code: `class Meter:
    def __init__(self, units=0):
        self._units = units

    def use(self, extra):
        self._units += extra
        return self._units

m = Meter(50)
print(m.use(30))`,
        codeLanguage: "python",
        output: `80`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "encapsulation च्या गहन अभ्यासासाठी अधिकृत संसाधनांची संपूर्ण यादी:\n\n• private variables व name mangling: https://docs.python.org/3/tutorial/classes.html#private-variables\n• property() function ची अधिकृत व्याख्या: https://docs.python.org/3/library/functions.html#property\n• attribute references चे नियम: https://docs.python.org/3/reference/expressions.html#attribute-references\n• __getattr__/__setattr__ मागील data model: https://docs.python.org/3/reference/datamodel.html#customizing-attribute-access\n• glossary मध्ये encapsulation: https://docs.python.org/3/glossary.html#term-encapsulation\n• classes tutorial पुन्हा: https://docs.python.org/3/tutorial/classes.html\n• function getattr आणि setattr: https://docs.python.org/3/library/functions.html#getattr\n• deserialization संदर्भातील detailed नियमावली: https://docs.python.org/3/tutorial/inputoutput.html\n\nहे sources वाचत गेल्यावर encapsulation ची धारणा complete होईल; पुढील property धडा तेव्हा सहज उलटेल.",
      },
    {
        title: "getter/setter का — वास्तव उद्देश्य",
        content: "हाताने getter/setter लिहिण्याचा खरा उद्देश्य म्हणजे भविष्यातील बदलासाठी स्वातंत्र्य सोडणे. आज _score फक्त वाचण्यासाठी आहे; उद्या त्याची गणना बदलली किंवा मर्यादा जोडायची आली तर setter ने ती जोडता येते — बाहेरचा कोड बदलता न लागता.\n\nजर लोक थेट _score वापरत असतील तर भविष्यातील बदल मोठे गोंधळ निर्माण करतो. पण सगळे बदल पद्धतींनी होत असल्यास आतला design कधीही बदलता येतो. हेच Encapsulation देऊन पुढे काळजी घेणं असतं.\n\nम्हणून शिकताना सुरुवातीला getter/setter हाताने लिहा; नंतर पुढील धड्यात property ने तेच सोपे रूप घ्या. दोन्ही पद्धतींची जवळीक समजल्यास तुमची OOP वास्तुशास्त्र फिरकी घेऊन पक्के होईल.",
        code: `class Result:
    def __init__(self):
        self._marks = 0

    def set_marks(self, value):
        if value < 0:
            value = 0
        self._marks = value
        return self._marks

    def get_marks(self):
        return self._marks

r = Result()
print(r.set_marks(-5))
print(r.get_marks())`,
        codeLanguage: "python",
        output: `0
0`,
      },
      {
        title: "हातोहात नियंत्रणाचे फायदे",
        content: "encapsulation चे वास्तविक फायदे:\n\nपहिला — सुरक्षेची हमी: मर्यादा तपासणी पद्धतीत राहते, data चुकीचे होत नाही.\nदुसरा — बदलण्याची सोय: आतली रचना बदलली तरी बाहेरचा वापर तसाच राहतो.\nतिसरा — गोग्य वाचन: getter जाणीवपूर्वक मूल्य परत करतो; कोणतीही धुकं नसते.\nचौथा — अंकितता: कोणता डेटा बाहेर दिसतो हे तुमच्या हातात असते.\n\nही चार फायदे रोजच्या programming मध्ये काम राहणे टाळतात. नियंत्रण हे आजोळ्च्यात coercion दर्शविते — वस्तूची जबाबदारी स्वतः घेता येते.\n\nआता पुढे जाण्यापूर्वी आपल्याकडे एक गोष्ट मनात ठेवावी: encapsulation हे Python संरक्षणाचे शेवटचे साधन नाही; तो एक आवश्यक habit आहे. ती habit पुढील property धड्यात सुधारीते.",
        code: `class Temp:
    def __init__(self):
        self._c = 0

    def set_c(self, v):
        self._c = v
        return self._c

    def to_f(self):
        return self._c * 9 // 5 + 32

t = Temp()
t.set_c(40)
print(t.to_f())`,
        codeLanguage: "python",
        output: `104`,
      },
      {
        title: "शेवटचा सराव — दिवसाचा प्रयोग",
        content: "आजचा दिवसाचा प्रयोग असा करा: आपल्या घरच्या कोणत्याही वस्तूचा एक वर्ग लिहा — उदा. रेफ्रिजरेटर, पंखा, मोबाईल — ज्यात एक _attribute असेल आणि त्यावर नियंत्रण ठेवणारी दोन getter/setter पद्धती असतील.\n\nउदा. Revolution फॅन: _speed 0 ते 5; set_speed मध्ये पलटा मर्यादेबाहेर असल्यास सोडतो किंवा काढतो; get_speed वाचतो. अशा वस्तूवर काम करताना encapsulation व्यावहारिक वाटतो.\n\nहा प्रयोग पूर्ण केल्यावर तुम्हाला encapsulation म्हणून संपूर्ण समजते. पुढील धडा property — तिथे हेच उदाहरण @property ने अधिक सुंदर रूप घेईल. आजचा सराव हा त्या धड्याचा मार्ग तयार करतो.",
        code: `class Fan:
    def __init__(self):
        self._speed = 0

    def set_speed(self, v):
        if v < 0 or v > 5:
            return "अवैध"
        self._speed = v
        return self._speed

    def get_speed(self):
        return self._speed

f = Fan()
print(f.set_speed(3))
print(f.set_speed(9))`,
        codeLanguage: "python",
        output: `3
अवैध`,
      },
    {
        title: "encapsulation चे शेवटचे प्रश्न",
        content: "प्रश्न: _ म्हणजे नेमका काय? उत्तर: ही परंपरा — 'हा data आतला आहे'; Python तो लादत नाही, पण सवय राखली जाते.\nप्रश्न: खरं लपवणं हवं असेल तर? उत्तर: पूर्ण तंत्र वेगळे; पण सामान्य सरावात _ पुरेसे होते.\nप्रश्न: getter/setter हाताने आणि property यात फरक? उत्तर: दोन्ही समान; property मधून लिखाण decimal व सुंदर होते.\nप्रश्न: encapsulation सर्वत्र लावावं का? उत्तर: तेथेच जिथे data नियंत्रण आवश्यक; अन्यथा साधी रचना.\n\nही उत्तरे तुमच्या मनात ठेवा. पुढील धडा property — आताचे getter/setter @property व @setter ने अधिकाक्षरात लिहिले जातील. आता तुम्ही त्या धड्याला तयार आहात.",
        code: `class Safe:
    def __init__(self, amount):
        self._amount = amount

    def withdraw(self, x):
        if x > self._amount:
            return "अपुरी रक्कम"
        self._amount -= x
        return self._amount

s = Safe(500)
print(s.withdraw(200))
print(s.withdraw(400))`,
        codeLanguage: "python",
        output: `300
अपुरी रक्कम`,
      },
    {
        title: "आतला data सुरक्षित ठेवण्याची कला",
        content: "encapsulation शिकवणारा शेवटचा मुद्दा: वस्तूच्या आतला data हा तिचा खाजगी खजिना. वस्तू स्वतःच ठरवते कोणता data बाहेर दिसेल आणि कोणता लपेल. हे स्वातंत्र्य देणं म्हणजे encapsulation ची कला.\n\nउदा. गाडीचा वेग — ड्रायव्हरला वेग दिसतो (get_speed); पण आतली यंत्रणा (fuel mixture) दिसत नाही. वस्तूचं प्रदर्शन आणि आतली यंत्रणा वेगळे ठेवणे यातच खरी शिस्त आहे. म्हणून attribute ठेवा _ ने आणि पद्धतींनीच बाहेर जोडा.\n\nअशा शिस्तीने तुमचा संपूर्ण प्रकल्प सुटसुटीत राहतो: प्रत्येक वस्तू आपली जबाबदारी स्वतः सांभाळते आणि बाहेरचा कोड तिच्या आंतरिक तपशीलांमध्ये अडकत नाही. हीच पुढील मोठ्या प्रकल्पांची पहिली पायरी आहे.",
        code: `class Bike:
    def __init__(self):
        self._speed = 0

    def accelerate(self, x):
        self._speed += x
        return self._speed

    def brake(self):
        self._speed = 0
        return self._speed

b = Bike()
print(b.accelerate(20))
print(b.brake())`,
        codeLanguage: "python",
        output: `20
0`,
      },
    {
        title: "अखेरची टिप — सातत्य ठेवा",
        content: "encapsulation चा अभ्यास इथे संपतो. आजपासून प्रत्येक वर्ग लिहिताना विचारा: 'कोणता data लपवायचा आणि कोणता बाहेर द्यायचा?' हा एकच प्रश्न तुमचा कोड स्वच्छ ठेवेल. सातत्याने विचारल्यास ही शिस्त सवय होते आणि सवयच गुरु होते.",
        code: `class Counter:
    def __init__(self):
        self._n = 0

    def inc(self):
        self._n += 1
        return self._n

c = Counter()
print(c.inc())
print(c.inc())`,
        codeLanguage: "python",
        output: `1
2`,
      },
    ],
    practiceQuestions: [
      "encapsulation म्हणजे काय?",
      "_ ने सुरू होणारा attribute काय सांगतो?",
      "deposit/get_balance का वापरतात?",
      "data थेट बदलण्याऐवजी काय करतात?",
    ],
    quiz: [
      { question: "खाजगी परंपरेचे चिन्ह?", options: ["_", "$", "&", "!"], correct: 0 },
      { question: "डेटा बदलण्याची सुरक्षित रीत?", options: ["थेट प्रवेश", "methods द्वारे", "printed", "कोणतीही"], correct: 1 },
      { question: "encapsulation चा फायदा?", options: ["डेटा संरक्षित", "तेजस्वी कोड", "लहान file", "शब्द"], correct: 0 },
    ],
    challenge: {
      prompt: "पिग्गी बँक — coin टाकून शिल्लक.",
      starterCode: `class Piggy:
    def __init__(self, saved=0):
        self._saved = saved

    def add(self, coin):
        self._saved += coin
        return self._saved

p = Piggy(10)
print(p.add(5))`,
      expectedOutput: "15",
    },
    interviewQuestions: [
      "encapsulation कसे achieve करतात?",
      "_ सुरुवातीच्या attribute चा अर्थ?",
    ],
    related: ["python-property", "python-classes", "python-methods"],
    prev: "python-override",
    next: "python-property",
  },

  {
    slug: "python-property",
    categoryId: "python",
    title: "OOP - Property",
    marathiTitle: "Property - गेटर व सेटर",
    level: "intermediate",
    minutes: 14,
    summary: "@property व @setter द्वारे attributes वर व्यवस्थित नियंत्रण — वाचणे व ठरवणे.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Property - गेटर व सेटर चे फायदे आणि महत्त्व",
        content: "\"Property - गेटर व सेटर\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "@property म्हणजे काय?",
        content: "@property म्हणजे गेटर — attribute वाचताना चालणारी पद्धत. @setter — attribute ठरवताना चालणारी पद्धत.\n- obj.x वाचल्यास getter चालते\n- obj.x = value लिहिल्यास setter चालतो\n- आतला data _x मध्ये साठतो",
      },
      {
        title: "तापमानयंत्राची उपमा",
        content: "\"तापमानयंत्र\" घ्या — वरून फक्त output वाचता येतं, पण आतमध्ये पडताळा आणि मर्यादा असतात. Property म्हणजे read/write ची सोय — पण तपासणीसह.\n\nबाहेर वाचणे कोणालाही सोपे; आत तपासणे हे मात्र वस्तूचं कर्तव्य. गेटर वाचन आणतो, सेटर नियम लावतो — हीच property ची जोडी.",
      },
      {
        title: "साधा getter",
        content: "Cell मध्ये _stock हा आतला data. @property ने stock ही वाचता येणारी सोय तयार केली — c = Cell(10); print(c.stock) म्हणजे output 10.\n\nहे वाचन getter द्वारे होतं. बाहेरून थेट _stock वापरण्याऐवजी हीच सोय वापरली जाते.",
        code: `class Cell:
    def __init__(self, stock=0):
        self._stock = stock

    @property
    def stock(self):
        return self._stock

c = Cell(10)
print(c.stock)`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "setter — बदलताना नियम",
        content: "getter च्या जोडीला setter — बदलताना नियम. @stock.setter मध्ये value < 0 असल्यास raise ValueError(\"शून्यापेक्षा कमी नको\") होतो; मगच _stock बदलतो.\n\nc.stock = 25 ने _stock 25 फलित; print c.stock मधून 10 आणि 25 दोन्ही दिसतात. नकारात्मक स्टॉक दिल्यास त्रुटी — तपासणी नीट काम करते.",
        code: `class Cell:
    def __init__(self, stock=0):
        self._stock = stock

    @property
    def stock(self):
        return self._stock

    @stock.setter
    def stock(self, value):
        if value < 0:
            raise ValueError("शून्यापेक्षा कमी नको")
        self._stock = value

c = Cell(10)
print(c.stock)
c.stock = 25
print(c.stock)`,
        codeLanguage: "python",
        output: `10
25`,
      },
      {
        title: "गणना करणारा getter — फॅरेनहाईट",
        content: "गणना करणारा getter. t.fahrenheit वाचताच आतमध्ये काही साठवल्याशिवाय सूत्र लागतं: _celsius × 9 // 5 + 32.\n\nt = Temp(100); print(t.fahrenheit) म्हणजे 100 × 9 // 5 + 32 = 212. आतला _celsius खाजगी राहतो; बाहेर फक्त मोजलेले मूल्य दिसतं.",
        code: `class Temp:
    def __init__(self, celsius=0):
        self._celsius = celsius

    @property
    def fahrenheit(self):
        return self._celsius * 9 // 5 + 32

t = Temp(100)
print(t.fahrenheit)`,
        codeLanguage: "python",
        output: `212`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ getter शिवाय setter — किंवा उलट — मग ती plain attribute बनते.\n✗ setter च्या आत self.x = value लिहिणे — तोच setter पुन्हा चालतो आणि infinite loop होतो; तिथे self._x मध्ये लिहा.\n✗ _x आणि x यांचा गोंधळ.\n\nखाली Demo मध्ये setter _x मध्ये value × 2 साठवतो — output 10. सेटरने आत्मनियंत्रण कसं बसवलं ते नीट पहा.",
        code: `class Demo:
    def __init__(self):
        self._x = 0

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        self._x = value * 2

d = Demo()
d.x = 5
print(d.x)`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "इंटरॅक्टिव्ह: पेज आणि शब्द",
        content: "पेजमधली अक्षरे आत _chars मध्ये; बाहेर शब्द वाचू इच्छितो. words हा getter आपोआप गणना देतो: _chars // 5.\n\np = Page(500); print(p.words) म्हणजे 500 // 5 = 100. आतली मोजणी, बाहेरचा सोपा वाचन — ही getter ची जादू.",
        code: `class Page:
    def __init__(self, chars=0):
        self._chars = chars

    @property
    def words(self):
        return self._chars // 5

p = Page(500)
print(p.words)`,
        codeLanguage: "python",
        output: `100`,
      },
      {
        title: "Mini Project — गुणांची मर्यादा",
        content: "गुण 100 पेक्षा जास्त ठरता कामा नये. Marks चा setter min(value, 100) वापरतो — Python चा min दोनपैकी लहान आकडा देतो.\n\nm = Marks(); m.marks = 120 मध्ये आत खरंच जातं 100; print(m.marks) ने output 100 दिसतं. मर्यादा setter च्या ठिकाणीच — हेच property चे सामर्थ्य.",
        code: `class Marks:
    def __init__(self):
        self._marks = 0

    @property
    def marks(self):
        return self._marks

    @marks.setter
    def marks(self, value):
        self._marks = min(value, 100)

m = Marks()
m.marks = 120
print(m.marks)`,
        codeLanguage: "python",
        output: `100`,
      },
    {
        title: "@property चा खरा अर्थ — पद्धत की attribute?",
        content: "@property म्हणजे पद्धतीला attribute सारखं वागवण्याचं तंत्र. बाहेरून पाहणाऱ्याला ते attribute वाटतं; आत मात्र पद्धत चालते. उदा. obj.name लिहिल्यास तिथे property चालते; तेथे फक्त मूल्य परत केलं जातं.\n\nयामुळे दोन गोष्टी साध्य होतात: एक — वापर साधा (कंस नाही); दुसरा — आत मध्ये तपासणी किंवा गणना करण्याची पूर्ण स्वातंत्र्य. हेच property चे खरे बळ आहे.\n\nमराठी उदाहरण: चहाची क्वचित किंमत — बाहेर फक्त 'किंमत' दिसते; पण ती गणना करताना साहित्य, दूध, साखर लागतात. तुम्ही फक्त किंमत म्हणता; गणना आत चालते. हाच @property चा अर्थ.\n\nम्हणून शिकवण्याची पद्धत — getter चं नाव @property ने सजवा; तेच नाव attribute म्हणून वापरा. पुढे setter/@deleter ही जोडावी लागेल — त्यांचं स्वरूप समजून घेऊ.",
      },
      {
        title: "@setter ने बदल नियंत्रित करणे",
        content: "property ने वाचन सोपे झाले; आता बदल नियंत्रित करायला @setter वापरतो. तो त्याच नावाचा दुसरा भाग, फक्त @नाव.setter अशी सजावट. तिथे आपण मूल्य तपासतो आणि मग आतला _attribute ठेवतो.\n\nउदा. वय वाढवण्याची property: age हे नाव; @property मध्ये _age परत; @age.setter मध्ये ऋण असेल तर एरर; अन्यथा _age ला मूल्य. बाहेर वापर करणारा सरळ obj.age = 25 लिहितो — पण आत तपासणी होते.\n\nहेच property चे सर्वात उपयुक्त स्वरूप — attribute सारखा वापर, पण पद्धतीची तपासणी. यामुळे data चुकीचा होण्याची शक्यता कमी होते; कोड सुटसुटीत व सुरक्षित राहतो.",
        code: `class Person:
    def __init__(self):
        self._age = 0

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("वय ऋण असू शकत नाही")
        self._age = value

p = Person()
p.age = 25
print(p.age)`,
        codeLanguage: "python",
        output: `25`,
      },
      {
        title: "getter, setter, deleter — तिघांची जोडी",
        content: "property चे तीन भाग असू शकतात:\n\n• @property — वाचण्यासाठी (getter)\n• @नाव.setter — बदलण्यासाठी (setter)\n• @नाव.deleter — हटवण्यासाठी (deleter)\n\nतिघे समान नावाभोवती बांधलेले असतात. deleter बरोबर del वापरतो: del obj.नाव. उदा. _items property ची delet कधी हटवायची ते तिथे ठरवता येते. तिघांना वेगवेगळी तपासणी लावता येते.\n\nरोजच्या प्रयोगात getter आणि setter पुरतात; deleter विशेष प्रसंगात. उदा. संपूर्ण खातेच बंद करताना. हे त्रिकूट समजून घेतल्यावर property वरील पकड भक्कम होते.",
        code: `class Box:
    def __init__(self):
        self._items = []

    @property
    def count(self):
        return len(self._items)

    @count.setter
    def count(self, n):
        self._items = list(range(n))

    @count.deleter
    def count(self):
        self._items = []

b = Box()
b.count = 3
print(b.count)
del b.count
print(b.count)`,
        codeLanguage: "python",
        output: `3
0`,
      },
      {
        title: "getter बरोबर काल्पनिक attribute",
        content: "property चे आणखी एक महत्त्वाचे काम — काल्पनिक (computed) attribute. जो data साठवला जात नाही, पण गणना करून दिला जातो. उदा. वर्तुळाची त्रिज्या असते; क्षेत्रफळ साठवत नाही; property मध्ये तयार करतो.\n\nअसे computed attribute data साठवणुकीची जागा वाचवतात आणि नेहमी अद्ययावत असतात. त्रिज्या बदलली की क्षेत्रफळ आपोआप बदलते. साठवलेलं मूल्य जुनं होण्याची भीतीच नाही.\n\nहे तंत्र अभियांत्रिकीत खूप वापरतात: वजनासाठी density, एकूण कमाईसाठी total, तापमानासाठी दोन एककांतली किंमत. प्रत्येक ठिकाणी property computed मूल्य सुंदरपणे देते आणि वापर साधा ठेवते.",
        code: `class Circle:
    def __init__(self, radius):
        self.radius = radius

    @property
    def area(self):
        return 3.14 * self.radius * self.radius

c = Circle(10)
print(round(c.area, 2))`,
        codeLanguage: "python",
        output: `314.0`,
      },
      {
        title: "property चे सामान्य चुका",
        content: "✗ getter आणि setter चं नाव वेगळं ठेवणे — दोन्ही समान नावाचं असावं; नाही तर property जोडणी तुटते.\n✗ @property नंतर @नाव.setter चुकीचं नाव — उदा. @name.setter परंतु getter चं नाव age — तर एरर.\n✗ getter मध्ये कंस ठेवणे — property attribute सारखी वापरली जाते; कंस असेल तरी फरक पडतो.\n✗ setter न लिहिता बदल करणे — जर फक्त getter लिहिला तर बदल केला असता एरर येतो; setter नको असेल तर बदल टाळा.\n\nया चुका सुधारल्यावर property चा वापर नक्की सोपा होईल. प्रत्येक नवीन वर्गात getter-setter जोडी जुळली आहे का ते एकदा तपासा.",
      },
      {
        title: "सराव व पुढची वाट",
        content: "आजचा property धडा पूर्ण; सरावार्थ उदाहरणे:\n\nपहिलं — Rectangle वर्ग: width आणि height; property area गणना करेल.\nदुसरं — Student वर्ग: _marks property; setter 0-100 मर्यादा तपासेल.\nतिसरं — Cart वर्ग: items property; count computed पद्धत.\n\nप्रत्येक उदाहरणात property चे तीन प्रकार वापरा — वाचन, बदल, computed. असे प्रयोग केल्यास property ची समज शिखरावर पोहोचते.\n\nपुढील धडा polymorphism — एकच नाव अनेक वर्तन. प्रत्येक वस्तूची property तिचं वेगळं मूल्य देते; तेच तत्त्व polymorphism मध्ये पद्धतींवर लागू होते. आजचा धडा त्या दिशेने पहिलं पाऊल आहे.",
        code: `class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @property
    def area(self):
        return self.width * self.height

r = Rectangle(5, 4)
print(r.area)`,
        codeLanguage: "python",
        output: `20`,
      },
    {
        title: "property() फंक्शन — जुनं तंत्र",
        content: "property हे शब्द अक्षरशः एक built-in फंक्शनदेखील आहे. सजावटीऐवजी थेट फंक्शन वापरूनही ते बनवता येते — name = property(get_name, set_name). हे जुनं तंत्र आजही अनेक जुन्या प्रकल्पांमध्ये दिसते.\n\nफंक्शन वापरताना तीन arguments देता येतात: getter, setter, deleter आणि चौथा docstring. हे तंत्र वाचायला कठीण वाटतं; म्हणून आधुनिक कोडमध्ये @property decorate अधिक वापरली जाते. दोन्हीचा परिणाम एकच — attribute सारखा वापर.\n\nनवशिक्यांनी सजावटीनेच सुरुवात करावी; पण property() फंक्शन पाहिल्यास जुन्या कोडचं रहस्य उलगडतं. दोन्ही पद्धती समजल्यावर तुम्ही कोणताही प्रकल्प समजून घेऊ शकता.",
        code: `class Demo:
    def __init__(self):
        self._x = 1

    def get_x(self):
        return self._x

    def set_x(self, v):
        self._x = v

    x = property(get_x, set_x)

d = Demo()
print(d.x)
d.x = 9
print(d.x)`,
        codeLanguage: "python",
        output: `1
9`,
      },
      {
        title: "computed property चे फायदे — उदाहरणे",
        content: "computed property चा वापर अनेक क्षेत्रांमध्ये:\n\n• बिल — एकूण रक्कम साठवत नाही; प्रत्येक वस्तूची किंमत × संख्या\n• वय — जन्मवर्षावरून आपोआप गणना\n• शरीर — वजन आणि उंचीवरून BMI\n• वर्ग — गुणांची बेरीज आणि सरासरी\n• गाडी — अंतर आणि वेळेवरून वेग\n\nप्रत्येक उदाहरणात मूळ data साठवला जातो; फळ मात्र गणनेने मिळते. यामुळे data एकाच ठिकाणी ठेवला जातो आणि चुकीचं दुहेरी मूल्य टळतं.\n\nदुहेरी साठवणूक हा programmable चा शत्रू — एक जागा बदलली आणि दुसरी जुनी राहिली तर गोंधळ. computed property हा गोंधळ मुळापासून टाळते; म्हणूनच ती शिफारस केलेली पद्धत आहे.",
        code: `class Marks:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    @property
    def total(self):
        return self.a + self.b

    @property
    def average(self):
        return (self.a + self.b) / 2

m = Marks(40, 60)
print(m.total, m.average)`,
        codeLanguage: "python",
        output: `100 50.0`,
      },
      {
        title: "property मागची सुरक्षितता — एक उदाहरण",
        content: "property मुळे data सुरक्षित कसा राहतो ते उदाहरणाने पहा. एक वर्ग Savings; setter मध्ये ठराविक मर्यादा किंवा नियम. उदा. वाढीव रक्कम ऋण असू नये; रक्कम हजाराच्या पटीत असावी; इत्यादी.\n\nबाहेरून कोणी deposit property ठेवू पाहतो तेव्हा तपासणी आपोआप चालते; अट पूर्ण नाही तर एरर. अशी सुरक्षा data मध्ये चुका घडू देत नाही. हेच encapsulation चं property द्वारे सुंदर रूप.\n\nआधीच्या धड्यातील getter/setter आठवा — property म्हणजे तेच, पण वापर सर्वथा सोपा. data protection आणि सोपा वापर — दोन्ही एकत्र मिळवण्याचं साधन म्हणजे property.",
        code: `class Savings:
    def __init__(self):
        self._amt = 0

    @property
    def amount(self):
        return self._amt

    @amount.setter
    def amount(self, v):
        if v < 0:
            raise ValueError("ऋण नको")
        self._amt = v

s = Savings()
s.amount = 500
print(s.amount)`,
        codeLanguage: "python",
        output: `500`,
      },
      {
        title: "property vs method — निवड कशी",
        content: "कधी property आणि कधी ordinary method? हा प्रश्न नवशिक्यांना पडतो. नियम सोपा: जे मूल्य मिळवणं हे data वाचल्यासारखं वाटतं, ते property; जे क्रिया करणं हे काम वाटतं, ते method.\n\nउदा. person.name — property; person.calculate_tax() — method. नाव वाचतात ते property; गणना करतात ते method. असा विचार केल्यास वर्गाचा वापर नेहमी स्वाभाविक वाटतो.\n\nलोकप्रिय नियम: property मध्ये अडचणीचं काम नको — जास्त वेळ लागणारं काम method मध्ये; property नेहमी हलका व वेगवान असावा. property मध्ये एरर फेकण्याचीही क्षमता असते; पण ती काळजीपूर्वक वापरा.\n\nही निवड केल्यावर कोड वाचणाऱ्याला स्पष्ट होतं: कंस नाही म्हणजे मूल्य; कंस आहे म्हणजे क्रिया. हीच सुसंगतता professional कोडची ओळख.",
        code: `class User:
    def __init__(self, first, last):
        self.first = first
        self.last = last

    @property
    def full_name(self):
        return self.first + " " + self.last

    def greet(self):
        return "नमस्कार " + self.full_name

u = User("सीमा", "पाटील")
print(u.full_name)
print(u.greet())`,
        codeLanguage: "python",
        output: `सीमा पाटील
नमस्कार सीमा पाटील`,
      },
      {
        title: "पुढील पायरी — property मधून पुढे",
        content: "property चा अभ्यास झाला; आता polymorphism धड्याकडे वळू. property प्रत्येक वस्तूचं वेगळं मूल्य देते; polymorphism मध्ये प्रत्येक वस्तूची पद्धत वेगळा निकाल देते. दोन्हीत साम्य — एकच नाव अनेक वर्तन.\n\nपुन्हा सराव: एक वर्ग तयार करा जिथे product price property असेल; setter मध्ये 0 पेक्षा मोठं असावं. तसेच एक computed property जोडा — tax सहित किंमत. हा प्रयोग केल्यावर property ची सर्व वैशिष्ट्ये एकत्र वापरता येतील.\n\nया धड्यात शिकलेली property पुढे मोठ्या प्रकल्पांमध्ये नेहमी दिसेल. म्हणून getter/setter/computer प्रकार आज पक्के करा. सातत्य ठेवा — दररोज एक वर्ग, एक property; काही आठवड्यांत तुम्ही OOP चे मास्टर व्हाल.",
        code: `class Product:
    def __init__(self, price):
        self._price = price

    @property
    def price(self):
        return self._price

    @price.setter
    def price(self, v):
        if v <= 0:
            raise ValueError("किंमत धन असावी")
        self._price = v

    @property
    def with_tax(self):
        return round(self._price * 1.18)

p = Product(100)
print(p.price, p.with_tax)`,
        codeLanguage: "python",
        output: `100 118`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "property च्या सखोल अभ्यासासाठी अधिकृत स्रोत:\n\n• property() built-in ची व्याख्या: https://docs.python.org/3/library/functions.html#property\n• decorated properties चे वर्णन: https://docs.python.org/3/library/functions.html#property\n• attribute access customization: https://docs.python.org/3/reference/datamodel.html#customizing-attribute-access\n• classes tutorial: https://docs.python.org/3/tutorial/classes.html\n• functions as first-class: https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• decorators मागील तत्त्व: https://docs.python.org/3/glossary.html#term-decorator\n• data model overview: https://docs.python.org/3/reference/datamodel.html\n• Python style guide: https://peps.python.org/pep-0008/\n\nहे वाचून प्रत्येक property स्वतः लिहा; getter, setter, computed अशा तीनही प्रकारांचा सराव करा. property ची समज तेव्हा पक्की होते.",
      },
    {
        title: "property मधील तपासणीचे प्रकार",
        content: "setter मध्ये अनेक प्रकारच्या तपासण्या करता येतात:\n\n• प्रकार तपासणी — value म्हणजेच संख्या आहे का\n• मर्यादा तपासणी — ठराविक किमान-कमाल आहे का\n• रचना तपासणी — मजकुरात विशिष्ट शब्द आहे का\n• संबंध तपासणी — इतर attributesशी जुळतं का\n\nप्रत्येक तपासणीमुळे data शुद्ध राहतो. उदा. वय 0-120; टक्केवारी 0-100; नाव रिकामं नको. जिथे चुकीचं मूल्य आलं तर तिथेच थांबवणं — पुढे नेण्यापेक्षा बरं.\n\nया तपासण्या property चं खरं बळ आहेत. त्या एका ठिकाणी लिहिल्याने संपूर्ण प्रकल्प सुरक्षित होतो. नवीन developers देखील चूक करू शकत नाहीत — कारण प्रवेशच नियंत्रित.\n\nअसा दृष्टिकोन ठेवा: property हे वस्तूचं रक्षक दार. प्रत्येक बदल त्या दारातूनच आत येतो.",
      },
      {
        title: "property आणि inheritance — एकत्र वापर",
        content: "मूल वर्ग property ला override करू शकतो. पालकात वेगळी computed property असेल आणि मुलात वेगळी गणना हवी असेल तर मुलात त्याच नावाची property पुन्हा लिहिता येते. हे override चंच property मधलं रूप.\n\nपण लक्षात ठेवा: property पूर्ण जोडणी (getter+setter) समान नावाने असेल तरच वापर सुसंगत राहतो. मुलात फक्त getter लिहिला तर पालकाचा setter वापरात राहतो — हे वर्तन काळजीपूर्वक समजून घ्या.\n\nsuper() सह देखील property वापरता येते — getter मध्ये फक्त पालकाचं मूल्य घेऊन त्यावर वाढ करणं. उदा. total = super().total + extra. अशा रचनेत inheritance आणि property एकत्र खुलतात.\n\nही जोडणी OOP च्या प्रगल्भतेचं लक्षण आहे. सुरुवातीला गरज कमी पडेल; पण जसजसे प्रकल्प मोठे होतात तसतशी ही रचना उपयोगी ठरेल.",
        code: `class Base:
    @property
    def label(self):
        return "आधार"

class Child(Base):
    @property
    def label(self):
        return "आधार + विशेष"

print(Child().label)`,
        codeLanguage: "python",
        output: `आधार + विशेष`,
      },
      {
        title: "सराव संच — वेगवेगळी उदाहरणे",
        content: "या धड्याची पकड वाढवण्यासाठी उदाहरणे:\n\n१. Meter वर्ग: _cm property; setter 0 पेक्षा मोठा; मीटर computed property.\n२. Score वर्ग: _runs; strike_rate computed (runs/balls*100).\n३. Email वर्ग: address property; setter मध्ये @ चिन्ह तपासा.\n४. Bill वर्ग: price आणि qty; total computed; GST computed.\n\nही उदाहरणे सोडवताना लक्षात येईल की property सगळीकडे सारखीच लागू होते. प्रत्येक ठिकाणी data आत, पद्धत बाहेर, गणना computed.\n\nव्यवहारात हेच उदाहरणे भेटतात — दुकानातील बिल, शाळेतील गुण, रुग्णालयातील तापमान. property शिकल्यावर तुम्ही हे सर्व सहजपणे कोडमध्ये उतरवू शकता.\n\nसरावात प्रत्येक वेळी output तपासा आणि चुका दुरुस्त करा. असा अभ्यास टिकतो; वाचनापेक्षा लिखाण दहापट प्रभावी.",
        code: `class Score:
    def __init__(self, runs, balls):
        self.runs = runs
        self.balls = balls

    @property
    def strike_rate(self):
        return (self.runs / self.balls) * 100

s = Score(60, 40)
print(s.strike_rate)`,
        codeLanguage: "python",
        output: `150.0`,
      },
    {
        title: "property चा सारांश — एका नजरेत",
        content: "या धड्यात शिकलो: @property ने वाचन; @नाव.setter ने बदल; @नाव.deleter ने हटवण; computed property ने गणना; property() फंक्शनचं जुनं रूप; आणि data नियंत्रण. हे सगळे एकत्र करून वर्ग साधा व सुरक्षित राहतो.\n\nलक्षात ठेवा तीन नियम: नाव समान; getter वर सजावट; setter @नाव.setter. या तीन नियमांनी property सदोष चालते. एखादी चूक झाली तर वरील नियम क्रमाने तपासा.\n\nपुढील धडा polymorphism — एकच नाव अनेक वर्तन. property प्रत्येक वस्तूचं मूल्य वेगळं देते; तसंच polymorphism पद्धतीचे निकाल वेगळे देतो. दोन्हीत साम्य: एकच नाव, अनेक अर्थ. हाच पुढचा विषय.",
        code: `class Temperature:
    def __init__(self, c):
        self._c = c

    @property
    def fahrenheit(self):
        return self._c * 9 / 5 + 32

t = Temperature(30)
print(t.fahrenheit)`,
        codeLanguage: "python",
        output: `86.0`,
      },
      {
        title: "अंतिम सल्ला — property चा वापर",
        content: "property चा वापर शिकताना फार नको; जिथे खरंच data नियंत्रण हवं तिथेच. साध्या वर्गात थेट attribute ठीक; property लावली तर अनावश्यक गुंतागुंत. म्हणून प्रसंग पाहून property लावा.\n\nनियम: १) वाचनात तपासणी किंवा गणना असेल तर property; २) बदलात अट असेल तर setter; ३) computed मूल्य असेल तर property. या तीन नियमांनी योग्य ठिकाणी property वापरता येते.\n\nआता पुढील धड्यात polymorphism शिकू. प्रत्येक वस्तूची property वेगळी; तसंच प्रत्येक वस्तूची पद्धत वेगळी. हेच धडा पुढे नेईल. सातत्य ठेवून सराव करा — यश नक्की.",
        code: `class Cart:
    def __init__(self):
        self._items = [10, 20, 30]

    @property
    def total(self):
        return sum(self._items)

c = Cart()
print(c.total)`,
        codeLanguage: "python",
        output: `60`,
      },
    {
        title: "शेवटचा प्रश्न — property का शिकावी",
        content: "property का शिकावी? कारण प्रत्येक मोठ्या प्रकल्पात data आणि तिचं नियंत्रण वेगळं ठेवावं लागतं. property हेच वेगळेपण साध्य करते — वापर साधा ठेवून आत तपासणी करण्याची सोय. म्हणून प्रत्येक professional Python कोडमध्ये property भेटते.\n\nतसंच property मुळे भविष्यातील बदल सोपे होतात. एकदा property लावली की आतली रचना कधीही बदलता येते; बाहेरचा वापर तसाच राहतो. हे दीर्घकालीन गुंतवणुकीसारखं आहे — आज थोडा वेळ, उद्या मोठा फायदा.\n\nआता पुढच्या धड्यात जातो — polymorphism. पण जाण्यापूर्वी हाताने एक property चं उदाहरण पूर्ण लिहा आणि output तपासा. प्रत्यक्ष करून पाहिलेलं ज्ञानच कायम टिकतं.",
        code: `class Ladder:
    def __init__(self, steps):
        self._steps = steps

    @property
    def height(self):
        return self._steps * 20

l = Ladder(15)
print(l.height)`,
        codeLanguage: "python",
        output: `300`,
      },
    {
        title: "समारोप — property वर पकड",
        content: "property चा हा धडा इथे संपतो. वाचन, बदल, हटवण, गणना — चारही प्रकार तुम्ही पाहिले. प्रत्येक प्रकाराला सजावटीचं स्वरूप आणि property() फंक्शनचं जुनं रूप ठाऊक झालं. आता कोणताही वर्ग वाचताना property दिसली तर तिचं वर्तन तुम्हाला स्पष्ट असेल.\n\nसराव चालू ठेवा; property मधल्या चुका शोधण्याची सवय ठेवा. नाव जुळलं नाही, सजावट चुकली, कंस लागला — या तपासण्या करा. या सवयीने पुढील OOP मार्ग सोपा होईल.",
        code: `class Bank:
    def __init__(self):
        self._amt = 100

    @property
    def balance(self):
        return self._amt

b = Bank()
print(b.balance)`,
        codeLanguage: "python",
        output: `100`,
      },
    ],
    practiceQuestions: [
      "@property काय करतो?",
      '@setter ची गरज कधी असते?',
      "आतला data कोणत्या नावाने?",
      "setter मध्ये काय लिहिता येतं?",
    ],
    quiz: [
      { question: "read करताना चालणारी पद्धत?", options: ["@property", "@setter", "self", "class"], correct: 0 },
      { question: "write करताना चालणारी पद्धत?", options: ["@property", "@x.setter", "@getter", "@len"], correct: 1 },
      { question: "setter मध्ये काय करता येतं?", options: ["तपासणी", "फक्त delete", "काहीही नाही", "प्रिंट"], correct: 0 },
    ],
    challenge: {
      prompt: "किलोमीटर तास → मीटर प्रति सेकंद.",
      starterCode: `class Speed:
    def __init__(self, kmh=0):
        self._kmh = kmh

    @property
    def mps(self):
        return self._kmh * 1000 // 3600

s = Speed(72)
print(s.mps)`,
      expectedOutput: "20",
    },
    interviewQuestions: [
      "property का वापरतात?",
      "getter/setter आणि सरळ attribute यात फरक?",
    ],
    related: ["python-encapsulation", "python-attributes", "python-magic-methods"],
    prev: "python-encapsulation",
    next: "python-polymorphism",
  },

  {
    slug: "python-polymorphism",
    categoryId: "python",
    title: "OOP - Polymorphism",
    marathiTitle: "Polymorphism - अनेकरूपता",
    level: "intermediate",
    minutes: 14,
    summary: "एकच पद्धतीची नाव, अनेक वर्तन — polymorphism ची शक्ति.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Polymorphism - अनेकरूपता चे फायदे आणि महत्त्व",
        content: "✓ एकच function, वेगवेगळ्या data वर वेगवेगळं उत्तर — पण type ठरवायची गरज नाही.\n✓ type check करणे — तिची गरज नाही; Python मध्ये duck typing — पद्धत असेल तर पुरे.\n✓ Duck ला sound असेल तर output quack — तो कोणत्या वर्गाचा हे ठरवायची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "polymorphism म्हणजे काय?",
        content: "\"एकच नाव, वेगवेगळ्या वस्तूंमध्ये वेगवेगळे वर्तन\" — हेच polymorphism. वस्तूच्या type प्रमाणे तीच पद्धत वेगळं उत्तर देते.\n\n- समान method name\n- प्रत्येक class आपलं वर्तन देतो\n- एकच call — अनेक रूपे",
      },
      {
        title: "बोल() ची उपमा",
        content: "\"बोल()\" घ्या — कुत्रा भू-भू, मांजर म्यांव, पोपट चिवचिव. बोलण्याची कृती सारखीच केली, पण प्रत्येकाने स्वतःचं वर्तन दिलं.\n\nPolymorphism म्हणजे नेमकं हेच — एक method, अनेक आवाज. घरातल्या प्राण्यांची उजळणी स्वतः करून पहा; प्रत्येकाचा आवाज वेगळा.",
      },
      {
        title: "एकच sound(), वेगवेगळ्या प्राण्यांकडून",
        content: "animal_sound() हा function सामान्य आहे; त्याला कळतं फक्त animal.sound() हे नाव. Dog ने sound म्हणजे \"भू - भू\" आणि Cat ने \"म्यांव\" दिलं.\n\nfor a in [Dog(), Cat()]: print(animal_sound(a)) म्हणजे output भू - भू आणि म्यांव. एकच sound(), दोन उत्तरे — हाच polymorphism चा खेळ.",
        code: `def animal_sound(animal):
    return animal.sound()

class Dog:
    def sound(self):
        return "भू - भू"

class Cat:
    def sound(self):
        return "म्यांव"

for a in [Dog(), Cat()]:
    print(animal_sound(a))`,
        codeLanguage: "python",
        output: `भू - भू
म्यांव`,
      },
      {
        title: "len() सर्वांसाठी — तरी वेगवेगळं",
        content: "Python मधल्या built-in शक्तीही याच तऱ्हेच्या — len() घ्या. len(\"python\") म्हणजे 6, len([1, 2, 3, 4]) म्हणजे 4, len({\"a\": 1, \"b\": 2}) म्हणजे 2.\n\nएकच function, वेगवेगळ्या data वर वेगवेगळं उत्तर — पण type ठरवायची गरज नाही. len() ला कसं मोजायचं ते आपण होऊन समजतं.",
        code: `print(len("python"))
print(len([1, 2, 3, 4]))
print(len({"a": 1, "b": 2}))`,
        codeLanguage: "python",
        output: `6
4
2`,
      },
      {
        title: "बिल — प्रत्येक वस्तूचे दर",
        content: "दुकानातला खरा हिशोब. Juice.cost() 30 आणि Lassi.cost() 45; bill() function फक्त item.cost() मागवतं.\n\nprint(bill(Juice())) म्हणजे output 30; print(bill(Lassi())) म्हणजे output 45. एकच cost पद्धत — प्रत्येक वस्तू आपला दर देते.",
        code: `class Juice:
    def cost(self):
        return 30

class Lassi:
    def cost(self):
        return 45

def bill(item):
    return item.cost()

print(bill(Juice()))
print(bill(Lassi()))`,
        codeLanguage: "python",
        output: `30
45`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ वेगवेगळे method names देणे — sound, make_sound असे वेगळे नाव दिल्यास polymorphism संपतो.\n✗ type check करणे — तिची गरज नाही; Python मध्ये duck typing — पद्धत असेल तर पुरे.\n✗ inheritance आणि polymorphism चा गोंधळ.\n\nDuck ची कथा: talk(thing) फक्त thing.sound() मागवतं. Duck ला sound असेल तर output quack — तो कोणत्या वर्गाचा हे ठरवायची गरज नाही.",
        code: `class Duck:
    def sound(self):
        return "quack"

def talk(thing):
    return thing.sound()

print(talk(Duck()))`,
        codeLanguage: "python",
        output: `quack`,
      },
      {
        title: "इंटरॅक्टिव्ह: आकार आणि बाजू",
        content: "आकार आणि बाजू — Triangle, Square आणि Shape यांची sides वेगवेगळी. तिन्ही एका यादीत ठेवून for loop मध्ये तीच पद्धत कॉल केली.\n\noutput 3, 4, 0 — त्रिकोणाला 3, चौरसाला 4 आणि सर्वसाधारण Shape ला 0 बाजू. प्रत्येक वस्तू आपलंच उत्तर देते.",
        code: `class Shape:
    def sides(self):
        return 0

class Triangle(Shape):
    def sides(self):
        return 3

class Square(Shape):
    def sides(self):
        return 4

shapes = [Triangle(), Square(), Shape()]
for s in shapes:
    print(s.sides())`,
        codeLanguage: "python",
        output: `3
4
0`,
      },
      {
        title: "Mini Project — रोख आणि UPI",
        content: "पेमेंटची दोन रूपे — रोख आणि UPI. दोन्ही वर्गांना pay() नावाची पद्धत; for mode in [Cash(), UPI()] मध्ये तीच pay() एकामागून एक चालते.\n\noutput रोख रक्कम मिळाली आणि UPI रक्कम मिळाली. नवीन पेमेंट पद्धत जोडायची असेल तर pay() सह नवा class आला — polymorphism चाच शेवटचा प्रयोग.",
        code: `class Cash:
    def pay(self):
        return "रोख रक्कम मिळाली"

class UPI:
    def pay(self):
        return "UPI रक्कम मिळाली"

for mode in [Cash(), UPI()]:
    print(mode.pay())`,
        codeLanguage: "python",
        output: `रोख रक्कम मिळाली
UPI रक्कम मिळाली`,
      },
    {
        title: "polymorphism चा खरा अर्थ — अनेक रूपं",
        content: "polymorphism म्हणजे 'अनेक रूपं' — एकच नाव, वेगवेगळ्या वस्तूंकडून वेगळा प्रतिसाद. उदा. 'speak' हा शब्द कुत्रा, मांजर, गाय प्रत्येकाकडे वेगळा येतो. कोडमध्येही एकच पद्धतीचं नाव प्रत्येक वर्गात वेगळं वागतं.\n\nयाचा फायदा असा — जो कोड वापरतो त्याला प्रत्येक वर्ग माहीत असण्याची गरज नाही. तो फक्त animal.speak() म्हणतो; वस्तू कोणती हे महत्त्वाचं नाही. Python योग्य आवृत्ती आपोआप निवडतो. हेच लवचिक कोडचं रहस्य.\n\nमराठी समानार्थी उदाहरण: 'बोल' ही क्रिया माणूस, पोपट, रेडिओ प्रत्येकाकडे वेगळी. कोण बोलतंय हे माहीत असेल तर योग्य अर्थ मिळतो. त्याच प्रकारे कोडमध्ये वस्तूचा प्रकार ठरवतो कोणती पद्धत चालेल.\n\npolymorphism हे OOP चं सर्वात सुंदर तत्त्व मानलं जातं — कारण ते कोडला वेगवेगळ्या वस्तूंशी एकाच भाषेत बोलण्याची शक्ती देते.",
      },
      {
        title: "polymorphism चे प्रकार",
        content: "Python मध्ये polymorphism मुख्यतः दोन प्रकारे दिसते:\n\n१. method overriding द्वारे — मूल वर्ग पालकाची पद्धत नव्याने लिहितो; एकच नाव वेगळं वर्तन.\n२. duck typing द्वारे — वस्तूचा वर्ग कोणता हे न पाहता पद्धत आहे का ते पाहिलं जातं; 'जर बदकासारखं चालतं आणि बदकासारखं बोलतं तर ते बदक'.\n\nदोन्ही प्रकारांत साम्य एकच — वेगळ्या वस्तू एका सारख्या इंटरफेसने वापरता येतात. override प्रकार inheritance वर आधारित; duck typing inheritance शिवायही चालतो.\n\nदुसरा प्रकार Python चं वैशिष्ट्य आहे. इतर काही भाषांमध्ये आधी interface घोषित करावं लागतं; Python मध्ये फक्त पद्धत असली तर चालतं. यामुळे कोड लवचिक व कमी अडकलेला राहतो.\n\nदोन्ही प्रकार शिकल्यावर तुम्ही प्रसंगानुसार योग्य निवड करू शकता.",
        code: `class Cat:
    def speak(self):
        return "म्याव"

class Dog:
    def speak(self):
        return "भाऊ"

for a in (Cat(), Dog()):
    print(a.speak())`,
        codeLanguage: "python",
        output: `म्याव
भाऊ`,
      },
      {
        title: "polymorphism आणि for loop — सुंदर जोड",
        content: "polymorphism चं खरं सौंदर्य for loop मध्ये दिसतं. एका यादीत वेगवेगळ्या वर्गांच्या वस्तू ठेवा आणि एकाच पद्धतीने फिरवा — प्रत्येक वस्तू आपलं स्वतःचं उत्तर देते. वापरणाऱ्या कोडला वर्ग माहीत असण्याची गरजच नाही.\n\nउदा. विद्यार्थी, शिक्षक, कर्मचारी — तिघांनाही details() पद्धत; एका loop मध्ये सगळ्यांची माहिती छापता येते. नवीन प्रकार जोडला तर जुन्या loop ला काहीच बदल नाही. हेच extensible design.\n\nहे तंत्र मोठ्या प्रकल्पांमध्ये अत्यंत उपयोगी — भाषा, वाहन, खाते, पेमेंट पद्धत — सगळीकडे. एक लूप आणि अनेक वर्तनं; कोड वाढला तरी गुंतागुंत वाढत नाही.\n\nम्हणूनच प्रत्येक OOP शिकणाऱ्याने polymorphism स्वतःच्या हाताने वापरून पाहावं. तोच खरा प्रत्यय.",
        code: `class Student:
    def details(self):
        return "विद्यार्थी"

class Teacher:
    def details(self):
        return "शिक्षक"

for p in (Student(), Teacher()):
    print(p.details())`,
        codeLanguage: "python",
        output: `विद्यार्थी
शिक्षक`,
      },
      {
        title: "duck typing — Python चं वैशिष्ट्य",
        content: "duck typing म्हणजे 'पद्धत असेल तर चालेल'. वस्तूचा वर्ग कोणता हे न पाहता जर तिच्याकडे हवी ती पद्धत असेल तर वापरा. उदा. फक्त quack() असेल तर ती बदकासारखी वागते असं मानलं जातं.\n\nयाचा फायदा — पूर्वीची interface घोषणा नको; inheritance नको; फक्त पद्धतीने जुळलं की झालं. त्यामुळे कोड लवचिक व वेगाने लिहिता येतो. Python च्या या गुणामुळेच अनेक libraries हलक्या व जोडण्यास सोप्या असतात.\n\nअर्थात याचा तोटाही आहे — चूक पद्धत गायब असेल तर फक्त runtime ला कळतं. म्हणून चाचण्या व सावध लेखन लागतं. तरीही duck typing हे Python चं जिव्हाळ्याचं वैशिष्ट्य आहे.\n\nएक वाक्यात: 'वस्तू कशी आहे हे नको; ती काय करू शकते हे पाहा'. हाच duck typing चा मंत्र.",
        code: `class Pen:
    def write(self):
        return "पेन लिहितो"

class Pencil:
    def write(self):
        return "पेन्सिल लिहिते"

for t in (Pen(), Pencil()):
    print(t.write())`,
        codeLanguage: "python",
        output: `पेन लिहितो
पेन्सिल लिहिते`,
      },
      {
        title: "polymorphism चे सामान्य चुका",
        content: "✗ पद्धतीचं नाव वेगळं ठेवणे — Cat.speak आणि Dog.sound असेल तर polymorphism होत नाही; समान नाव हवं.\n✗ यादीत फिरवताना वर्ग तपासणी करणे — if isinstance हे अनेकदा टाळावं; polymorphism चा उद्देशच ती गरज टाळणे.\n✗ arguments वेगळे ठेवणे — सारख्या इंटरफेससाठी arguments सुसंगत ठेवा.\n✗ वस्तूऐवजी वर्ग वापरणे — फंक्शनला वस्तू द्या, वर्ग नाही.\n\nया चुका सुधारल्यास कोड लवचिक होतो. लक्षात ठेवा — polymorphism म्हणजे एक इंटरफेस, अनेक रूपं. प्रत्येक वस्तूचं वर्तन तिच्याच ठिकाणी राहतं; वापरणारा फक्त नाव वापरतो.",
      },
      {
        title: "सराव — polymorphism हाताने",
        content: "सरावार्थ उदाहरणे:\n\n१. Shape, Circle, Square — सर्वांना area() पद्धत; loop मध्ये क्षेत्रफळ.\n२. Payment, Card, UPI, Cash — सर्वांना pay() पद्धत.\n३. Notification, Email, SMS — सर्वांना send() पद्धत.\n४. Animal, Lion, Elephant — सर्वांना sound() पद्धत.\n\nप्रत्येक उदाहरणात वेगवेगळ्या वस्तू एका यादीत ठेवा आणि एकाच पद्धतीने फिरवा. output मध्ये प्रत्येकाचं वेगळं उत्तर दिसेल — तेच polymorphism चं प्रत्यक्ष दर्शन.\n\nअसे प्रयोग केल्यावर polymorphism मनात ठसतो. पुढील धडा magic methods — तिथे प्रत्येक वस्तूला स्वतःचं वर्तन देण्याची आणखी सखोल पद्धत शिकू.",
        code: `class Shape:
    def area(self):
        return 0

class Circle(Shape):
    def __init__(self, r):
        self.r = r

    def area(self):
        return 3.14 * self.r * self.r

class Square(Shape):
    def __init__(self, s):
        self.s = s

    def area(self):
        return self.s * self.s

for sh in (Circle(2), Square(3)):
    print(sh.area())`,
        codeLanguage: "python",
        output: `12.56
9`,
      },
    {
        title: "method overloading — Python मध्ये कसं?",
        content: "इतर भाषांमध्ये एकाच नावाच्या अनेक पद्धती वेगळ्या arguments ने लिहिता येतात — त्याला method overloading म्हणतात. Python मध्ये प्रत्यक्ष overloading नाही; नंतरची व्याख्या आधीची झाकते.\n\nपण default arguments किंवा *args वापरून त्याचा परिणाम साधता येतो. उदा. add(a, b, c=0) असेल तर दोन किंवा तीन संख्यांसह चालतो. एकच पद्धत अनेक इनपुट स्वीकारते — हेच overloading चं Python मधलं रूप.\n\nही मर्यादा आणि ही सोय दोन्ही समजून घ्या. Python साधेपणावर भर देतो; म्हणून अनेक पद्धतींऐवजी एका लवचिक पद्धतीला प्राधान्य देतो. हाच तत्त्व polymorphism शी जोडतो — एक नाव, अनेक प्रकारचे इनपुट.\n\nसराव: एक greet(name, punctuation='!') पद्धत लिहा; ती दोन्ही प्रकारे वापरून output तपासा. हेच Python चं overloading तंत्र.",
        code: `class Calc:
    def add(self, a, b, c=0):
        return a + b + c

print(Calc().add(2, 3))
print(Calc().add(2, 3, 4))`,
        codeLanguage: "python",
        output: `5
9`,
      },
      {
        title: "operator overloading — चिन्हांना अर्थ",
        content: "polymorphism चं आणखी एक रूप म्हणजे operator overloading — +, -, * यांसारख्या चिन्हांना वस्तूंसाठी नवीन अर्थ देणे. उदा. दोन सदिश वेक्टर + ने जोडता येतील किंवा दोन नाणी + ने एकत्र करता येतील.\n\nयासाठी magic methods लागतात: __add__, __sub__, __mul__. पुढील धड्यात त्या सविस्तर शिकू; इथे फक्त ओळख. जेव्हा a + b लिहिता आणि a वस्तू असेल तर Python a.__add__(b) चालवतो.\n\nया तंत्रामुळे वस्तू अगदी मूळ प्रकारांसारख्या वागतात. उदा. Money वर्गात + ने रक्कम जोडणं; Fraction वर्गात + ने अपूर्णांक जोडणं. कोड वाचायला साहजिक होतो.\n\nत्यामुळे operator overloading हे polymorphism चंच वाढीव रूप आहे — एक चिन्ह, अनेक अर्थ. हे पाहिल्यावर magic methods शिकण्याची उत्सुकता वाढेल.",
        code: `class Money:
    def __init__(self, amount):
        self.amount = amount

    def __add__(self, other):
        return Money(self.amount + other.amount)

m = Money(100) + Money(50)
print(m.amount)`,
        codeLanguage: "python",
        output: `150`,
      },
      {
        title: "वास्तविक उपयोग — एक प्रकल्प",
        content: "polymorphism वापरून एक छोटा प्रकल्प बनवू. एका दुकानात वेगवेगळ्या वस्तू — पुस्तक, खेळणं, कपडे — प्रत्येकाला price() पद्धत. एकूण बिल एकाच loop मध्ये मोजता येतं.\n\nनवीन प्रकार जोडायचा झाला (उदा. इलेक्ट्रॉनिक) तर फक्त नवीन वर्ग; बाकी कोड तसाच. हेच polymorphism चं व्यावहारिक बळ. दुकान वाढलं तरी बिलाचा कोड बदलत नाही.\n\nयाच नमुन्यावर अनेक प्रकल्प उभे आहेत — ग्रंथालय, रुग्णालय, वाहनतळ, ऑनलाइन दुकान. प्रत्येक ठिकाणी सामाईक इंटरफेस आणि वेगळी अंमलबजावणी.\n\nसराव: हाच प्रकल्प स्वतः लिहा — तीन वस्तू प्रकार, एक यादी, एक loop, output तपासा. असा प्रकल्प पूर्ण झाल्यावर polymorphism तुमच्या रक्तात भिनला असेल.",
        code: `class Book:
    def price(self):
        return 200

class Toy:
    def price(self):
        return 150

class Cloth:
    def price(self):
        return 800

items = [Book(), Toy(), Cloth()]
total = 0
for i in items:
    total += i.price()
print(total)`,
        codeLanguage: "python",
        output: `1150`,
      },
      {
        title: "polymorphism चे फायदे — सविस्तर",
        content: "polymorphism चे फायदे:\n\n• लवचिकता — नवीन वर्ग जोडणे सोपे; जुना कोड बदलत नाही.\n• पुनर्वापर — एकच लूप अनेक वस्तूंसाठी; पुनर्लेखन टळतं.\n• स्वच्छता — वर्ग तपासण्याची if-else गर्दी नको.\n• विस्तारक्षमता — प्रकल्प मोठा झाला तरी रचना स्थिर.\n• चाचणी सुलभ — प्रत्येक वर्ग स्वतंत्र तपासता येतो.\n\nही फायद्यांची यादीच सांगते की polymorphism का शिकावा. मोठ्या प्रकल्पात हे गुण अनिवार्य आहेत; म्हणूनच आधुनिक software design polymorphism वर उभा आहे.\n\nनवशिक्या वेळी कधी वाटतं की if-else ठीक आहे. पण 5-6 प्रकार झाले की if-else ची गुंतागुंत झपाट्याने वाढते. polymorphism तीच गुंतागुंत कायमस्वरूपी घटवते.\n\nम्हणून सुरुवातीपासूनच इंटरफेस सारखे ठेवण्याची सवय ठेवा. तीच सवय पुढे प्रकल्पाला साकळणारी ठरेल.",
      },
      {
        title: "polymorphism व inheritance — नातं",
        content: "inheritance आणि polymorphism निकटचे आहेत पण वेगळे. inheritance म्हणजे मूल वर्ग पालकाकडून गुण घेतो; polymorphism म्हणजे वेगळ्या वस्तूंना एका नावाने वापरणं.\n\ninheritance polymorphism साधायचं एक साधन आहे — पालकातील पद्धत मुलांनी override केली तर एकच नाव अनेक वर्तन. पण polymorphism inheritance शिवायही शक्य — duck typing द्वारे.\n\nम्हणून दोन्ही वेगळे: एक रचनेचं तत्त्व, दुसरं वर्तनाचं. एकमेकांना पूरक; पण एकमेकांत गुंतलेले नाहीत. हे स्पष्टता ठेवल्यास design निवड सोपी होते.\n\nसराव: एकाच पद्धतीने inheritance आणि polymorphism यांचा वापर करून एक वर्ग रचना करा; नंतर पाहा कोणती गोष्ट कशासाठी वापरली. ही निरीक्षणे तुमची समज गहन करतील.",
        code: `class Animal:
    def name(self):
        return "प्राणी"

class Dog(Animal):
    def name(self):
        return "कुत्रा"

class Robot:
    def name(self):
        return "यंत्र"

for n in (Dog(), Robot()):
    print(n.name())`,
        codeLanguage: "python",
        output: `कुत्रा
यंत्र`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "polymorphism च्या सखोल अभ्यासासाठी अधिकृत स्रोत:\n\n• inheritance आणि method override: https://docs.python.org/3/tutorial/classes.html#inheritance\n• duck typing ची glossary व्याख्या: https://docs.python.org/3/glossary.html#term-duck-typing\n• special method चे names: https://docs.python.org/3/reference/datamodel.html#special-method-names\n• classes tutorial पुन्हा: https://docs.python.org/3/tutorial/classes.html\n• operator overloading मागील तत्त्व: https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types\n• glossary मधील polymorphism: https://docs.python.org/3/glossary.html#term-polymorphism\n• function arguments शिस्त: https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• Python style guide: https://peps.python.org/pep-0008/\n\nहे sources वाचून प्रत्येक प्रकार स्वतः कोड करा; पुढील magic methods धड्याची तयारी होईल.",
      },
    {
        title: "polymorphism चा वापर abstraction सोबत",
        content: "polymorphism आणि abstraction सोबत वापरले जातात. abstraction म्हणजे फक्त काय करायचं हे सांगणं; कसं करायचं ते लपवणं. पालक इंटरफेस 'काय' ठरवतो; प्रत्येक मूल वर्ग 'कसं' ठरवतो.\n\nPython मध्ये abstract base class वापरून ही रचना करता येते. abstractmethod म्हणजे 'ही पद्धत मुलांनी लिहावीच'. जो मूल वर्ग ती लिहित नाही तो वस्तू बनवताच एरर देतो.\n\nयामुळे सर्व वर्ग एकच इंटरफेस पाळतात — हेच polymorphism टिकवण्याचा मार्ग. मोठ्या teams मध्ये ही शिस्त कल्पनेपेक्षा अधिक उपयोगी असते.\n\nसुरुवातीला abstract classes जड वाटतील; पण तीन-चार प्रकारांच्या प्रकल्पात त्यांचं मोल लगेच समजतं. हा विषय पुढच्या दीर्घ अभ्यासाचा भाग आहे.",
        code: `class Appliance:
    def start(self):
        return "चालू"

class Fan(Appliance):
    def start(self):
        return "पंखा चालू"

for a in (Appliance(), Fan()):
    print(a.start())`,
        codeLanguage: "python",
        output: `चालू
पंखा चालू`,
      },
      {
        title: "एकात्म सराव — polymorphism प्रकल्प",
        content: "आता polymorphism चा संपूर्ण प्रकल्प करू. एक रुग्णालय — Doctor, Nurse, Patient; प्रत्येकाला role() पद्धत. एका loop मध्ये सर्वांची भूमिका छापा. हा साधा प्रकल्प polymorphism चं शेवटचं सराव.\n\nत्यानंतर त्यात नवीन वर्ग जोडा — Receptionist. जुन्या loop ला अजिबात बदल नाही; फक्त नवीन वर्ग. हेच extensibility चं प्रत्यक्ष दर्शन. असा प्रयोग करूनच शिकणं टिकतं.\n\nप्रकल्प पूर्ण झाल्यावर स्वतः विचारा: 'मी प्रत्येक वस्तूचा वर्ग तपासला का?' जर तपासला तर duck typing चा लाभ घेतला नाही. तपासणी काढून पुन्हा करा — कोड अधिक सुंदर होईल.\n\nअशा प्रकारे polymorphism ज्ञानातून कौशल्यात रूपांतरित होते. हाच पुढील magic methods धड्याचा निर्धार.",
        code: `class Doctor:
    def role(self):
        return "डॉक्टर"

class Nurse:
    def role(self):
        return "नर्स"

class Receptionist:
    def role(self):
        return "स्वागतकर्ता"

for p in (Doctor(), Nurse(), Receptionist()):
    print(p.role())`,
        codeLanguage: "python",
        output: `डॉक्टर
नर्स
स्वागतकर्ता`,
      },
      {
        title: "शेवटचे मुद्दे — polymorphism सारांश",
        content: "या धड्यात शिकलो: एक नाव अनेक रूपं; overriding आणि duck typing हे दोन प्रकार; method overloading चं Python रूप; operator overloading; for loop मधलं सौंदर्य; abstraction सोबतची जोड. हे सगळे मिळून polymorphism चं पूर्ण चित्र देतं.\n\nमुख्य नियम: पद्धतीचं नाव सारखं; वर्ग तपासणी टाळा; नवीन प्रकार जोडायला सोपी रचना. हे तीन लक्षात ठेवल्यास polymorphism व्यवहारात नक्की उपयोगी पडेल.\n\nपुढील धडा magic methods — __str__, __len__, __add__ यांसारख्या विशेष पद्धती. तिथे वस्तूंना मूळ प्रकारांसारखं वागवणं शिकू. आजचा polymorphism त्या धड्याशी जवळून जोडलेला आहे.\n\nसातत्य ठेवा आणि प्रत्येक संकल्पना स्वतः कोड करून पहा — हाच शिकण्याचा खरा मार्ग.",
        code: `class Laptop:
    def __str__(self):
        return "लॅपटॉप"

for x in (Laptop(), Laptop()):
    print(x)`,
        codeLanguage: "python",
        output: `लॅपटॉप
लॅपटॉप`,
      },
    {
        title: "polymorphism चा आत्मस्वर — प्रश्नोत्तर",
        content: "प्रश्न: polymorphism चा मुख्य फायदा? उत्तर: नवीन वर्ग जोडताना जुना कोड बदलावा लागत नाही.\nप्रश्न: समान नाव का आवश्यक? उत्तर: कारण वापरणारा एकच नाव म्हणतो; वस्तू योग्य आवृत्ती निवडते.\nप्रश्न: duck typing म्हणजे काय? उत्तर: वर्ग न पाहता पद्धत असली तर चालते.\nप्रश्न: कधी वापरावा? उत्तर: जेव्हा अनेक वस्तू एकाच पद्धतीने वापरायच्या असतील.\n\nही उत्तरे पाठ करू नका; समजून घ्या. समजून घेतल्यास पुढील धड्यात polymorphism चा वापर सहज जमेल. प्रत्येक उत्तराचं एक उदाहरण स्वतः तयार करा.",
        code: `class Bird:
    def move(self):
        return "उडतो"

class Fish:
    def move(self):
        return "पोहतो"

for x in (Bird(), Fish()):
    print(x.move())`,
        codeLanguage: "python",
        output: `उडतो
पोहतो`,
      },
      {
        title: "समारोप — पुढच्या प्रवासाची तयारी",
        content: "polymorphism चा धडा संपला. आता तुम्ही एकाच इंटरफेसने अनेक वस्तू वापरण्याचं तत्त्व समजून घेतलं. हे तत्त्व पुढील प्रकल्पांत सतत भेटेल — चाहे payment, notification, report असो. प्रत्येक ठिकाणी सामाईक नाव आणि वेगळी अंमलबजावणी.\n\nपुढील धडा magic methods घेऊन येईल. तिथे प्रत्येक वस्तूला मूळ प्रकारांसारखं वागवण्याची कला शिकू — __str__, __len__, __add__ इत्यादी. आजचा polymorphism त्या धड्याचा थेट पूर्वगामी आहे.\n\nघरी सराव: दोन उदाहरणे रोज लिहा — एक inheritance सह, एक duck typing ने. आठवड्याभरात तुमच्या हातात polymorphism पक्का होईल. शुभेच्छा!",
        code: `class Tool:
    def use(self):
        return "वापर"

class Hammer(Tool):
    def use(self):
        return "ठोकतो"

print(Hammer().use())`,
        codeLanguage: "python",
        output: `ठोकतो`,
      },
    {
        title: "शेवटचा निरोप — एकच नाव अनेक वर्तन",
        content: "polymorphism चा सार एका वाक्यात: 'एकच नाव अनेक वर्तन'. हे साधं वाटतं, पण त्यात OOP ची सर्वात मोठी शक्ती साठलेली आहे. जो कोड एका इंटरफेसवर लिहिला जातो तो भविष्यातील नवीन वर्गांसाठीही तयार असतो.\n\nहे शिकल्यावर तुमच्या कोडकौशल्यात एक नवी परिमाण जोडली गेली. आता तुम्ही if-else च्या गर्दीऐवजी स्वच्छ इंटरफेस निवडू शकता. पुढील धड्यात magic methods ने हीच शक्ती आणखी वाढवू.\n\nसराव चालू ठेवा; जो शिकला तोच शिकवू शकतो. काही दिवसांनी हा धडा मित्राला समजावा — समजावताना तुमचीच समज दृढ होईल. पुढील धड्यात भेटू.",
        code: `class Vehicle:
    def horn(self):
        return "हॉर्न"

class Truck(Vehicle):
    def horn(self):
        return "जोरदार हॉर्न"

print(Truck().horn())`,
        codeLanguage: "python",
        output: `जोरदार हॉर्न`,
      },
    {
        title: "अखेरची सूचना — रोजचा अभ्यास",
        content: "polymorphism पक्का करायला रोज दहा मिनिटे पुरतात. दररोज एक वर्ग लिहा, त्याला समान नावाची पद्धत द्या, आणि दुसऱ्या वर्गासोबत एका loop मध्ये वापरा. सात दिवसांत सात उदाहरणे — समज गहन होईल. मग खात्रीने पुढील धड्याकडे वळा.",
        code: `class Fruit:
    def taste(self):
        return "गोड"

print(Fruit().taste())`,
        codeLanguage: "python",
        output: `गोड`,
      },
    {
        title: "शेवटचा शब्द",
        content: "polymorphism हे OOP चं हृदय आहे. जो याला समजला तो अनेक वस्तूंना एका नावाने हाताळू शकतो आणि स्वच्छ, विस्तारयोग्य कोड लिहू शकतो. अभ्यास सुरू ठेवा — पुढील धड्यात भेट.",
      },
    ],
    practiceQuestions: [
      "polymorphism म्हणजे काय?",
      "same method नाव का हवं?",
      "len() वेगवेगळ्या data वर कसे चालते?",
      "polymorphism चा फायदा?",
    ],
    quiz: [
      { question: "polymorphism मध्ये method names कसे?", options: ["वेगळे", "एकसारखे", "मोठे", "छोटे"], correct: 1 },
      { question: "len() काय दाखवतो?", options: ["थर", "साइज", "रंग", "type"], correct: 1 },
      { question: "एकच function सर्व objects साठी चालवता येतो कारण?", options: ["same method name", "समान class", "समान file", "काहीही"], correct: 0 },
    ],
    challenge: {
      prompt: "पेट्रोल/विज — एकच fuel() बिल.",
      starterCode: `class Car:
    def fuel(self):
        return "पेट्रोल"

class EV:
    def fuel(self):
        return "वीज"

def refuel(v):
    return v.fuel()

print(refuel(EV()))`,
      expectedOutput: "वीज",
    },
    interviewQuestions: [
      "polymorphism ची व्याख्या?",
      "संगणकीय कोडमधील उदाहरण?",
    ],
    related: ["python-override", "python-inheritance", "python-magic-methods"],
    prev: "python-property",
    next: "python-magic-methods",
  },

  {
    slug: "python-magic-methods",
    categoryId: "python",
    title: "OOP - Magic Methods",
    marathiTitle: "Magic Methods - दुहेरी अंडरबार",
    level: "intermediate",
    minutes: 14,
    summary: "__str__, __len__, __add__, __eq__ — Python च्या आतील जादू वस्तूंच्या वर्तनात.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "का शिकावे? Magic Methods - दुहेरी अंडरबार चे फायदे आणि महत्त्व",
        content: "\"Magic Methods - दुहेरी अंडरबार\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "magic methods म्हणजे काय?",
        content: "__ ने सुरू होणाऱ्या आणि संपणाऱ्या पद्धतींना magic methods म्हणतात. त्या आपोआप चालतात — विशिष्ट क्रिया घडताना.\n\n- __str__ म्हणजे print() आणि str() वेळी\n- __len__ म्हणजे len() वेळी\n- __eq__ म्हणजे == वेळी\n- __add__ म्हणजे + वेळी",
      },
      {
        title: "पुस्तक बोलतं तेव्हा",
        content: "पुस्तक छापताना Python ला हवं असतं ते कसं दाखवायचं — तो विचारतो \"तुझ्या __str__ ने काय सांगतं?\" Magic method म्हणजे तुमच्या वस्तूचे \"वागण्याचे नियम\" Python ला सांगणारी पद्धत.\n\nसामान्य print म्हणजे कंटाळवाणं <__main__.Book object>; __str__ ने मात्र अर्थपूर्ण संदेश मिळतो. हेच magic method चं बल.",
      },
      {
        title: "__str__ आणि __len__",
        content: "Book मध्ये __str__ म्हणजे दाखवण्याची पद्धत — f-string ने title आणि पाने सजवली. __len__ म्हणजे मोजण्याची — pages परत आणतो.\n\nprint(b) ने output पाणिपत (320 पाने); len(b) ने 320. print आणि len या दोन्ही आता तुमच्या वस्तूशी बोलतात.",
        code: `class Book:
    def __init__(self, title, pages):
        self.title = title
        self.pages = pages

    def __str__(self):
        return f"{self.title} ({self.pages} पाने)"

    def __len__(self):
        return self.pages

b = Book("पाणिपत", 320)
print(b)
print(len(b))`,
        codeLanguage: "python",
        output: `पाणिपत (320 पाने)
320`,
      },
      {
        title: "__add__ — दोन वस्तू जोडणे",
        content: "a + b लिहिलं की Python तुमच्या __add__ ला कॉल करतो. तिथे स्वतःची बेरीज सांगितली — self.value + other.value.\n\na = Number(10); b = Number(20); print(a + b) म्हणजे output [30] — आत 30 आणि __str__ ने बाहेरचं आवरण [ ]. + हे आता तुमच्या नियमाने चालतं.",
        code: `class Number:
    def __init__(self, value):
        self.value = value

    def __str__(self):
        return "[" + str(self.value) + "]"

    def __add__(self, other):
        return Number(self.value + other.value)

a = Number(10)
b = Number(20)
print(a + b)`,
        codeLanguage: "python",
        output: `[30]`,
      },
      {
        title: "काळ सुंदर छापणे",
        content: "135 मिनिटं सुंदर छापायची — 2 तास 15 मि. Time.__str__ गणती लावतो: minutes // 60 म्हणजे तास, minutes % 60 म्हणजे उरलेल्या मिनिटं.\n\nprint(Time(135)) ने output 2 तास 15 मि दिसतं. घड्याळचं रोजचं उदाहरण — आता कोडमध्ये बसलेलं.",
        code: `class Time:
    def __init__(self, minutes):
        self.minutes = minutes

    def __str__(self):
        return str(self.minutes // 60) + " तास " + str(self.minutes % 60) + " मि"

print(Time(135))`,
        codeLanguage: "python",
        output: `2 तास 15 मि`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ __str__ मध्ये return string करायचं विसरणे — ती method stringच परत द्यायला हवी.\n✗ चुकीचे नाव — __string__, __len__more असे दिल्यास ती पद्धत कधीच चालत नाही.\n✗ f-string ऐवजी किचकट रचना — f-string सोपी आणि वाचता येण्यासारखी.\n\nNote मधला __str__ \"टीप: \" + self.text देतो — print(n) ने output टीप: अभ्यास करा.",
        code: `class Note:
    def __init__(self, text):
        self.text = text

    def __str__(self):
        return "टीप: " + self.text

n = Note("अभ्यास करा")
print(n)`,
        codeLanguage: "python",
        output: `टीप: अभ्यास करा`,
      },
      {
        title: "इंटरॅक्टिव्ह: पैशांची तुलना",
        content: "पैशांची तुलना — Money ने __eq__ लिहिला. दोघांचे rupees सारखे असतील तर True, नाहीतर False.\n\nMoney(500) == Money(500) म्हणजे True; Money(500) == Money(600) म्हणजे False. == हा आता या वस्तूच्या अर्थाने वागतो.",
        code: `class Money:
    def __init__(self, rupees):
        self.rupees = rupees

    def __eq__(self, other):
        return self.rupees == other.rupees

print(Money(500) == Money(500))
print(Money(500) == Money(600))`,
        codeLanguage: "python",
        output: `True
False`,
      },
      {
        title: "Mini Project — वाक्यातील शब्द",
        content: "वाक्यातील शब्द मोजण्याचा छोटा प्रकल्प. Word ने __len__ मध्ये len(self.text.split()) दिला — self.text.split() म्हणजे शब्दांची यादी, तिची मोजणी len.\n\nlen(Word(\"मराठी शिकूया सहज\")) म्हणजे output 3. तुमच्या वस्तूला Python भाषेशी जोडणे — याच घड्याळातून आता पुढचा प्रकल्प.",
        code: `class Word:
    def __init__(self, text):
        self.text = text

    def __len__(self):
        return len(self.text.split())

print(len(Word("मराठी शिकूया सहज")))`,
        codeLanguage: "python",
        output: `3`,
      },
    {
        title: "magic methods म्हणजे काय — ओळख",
        content: "magic methods म्हणजे दोन अंडरस्कोरने वेढलेल्या विशेष पद्धती — __init__, __str__, __len__, __add__ इत्यादी. यांना 'dunder methods' (double underscore) असंही म्हणतात. या पद्धती थेट न कॉल करता Python विशिष्ट क्रियांवर आपोआप कॉल करतो.\n\nउदा. print(obj) लिहिल्यास Python obj.__str__() कॉल करतो; len(obj) लिहिल्यास obj.__len__(); a + b लिहिल्यास a.__add__(b). म्हणजे वस्तू मूळ प्रकारांसारखी वागू लागते.\n\nमराठी उदाहरण: एखाद्या वस्तूचं 'नाव' विचारलं की ती स्वतः सांगते — तेच __str__. तिचं 'किती' विचारलं की मोजून सांगते — तेच __len__. विशेष पद्धती वस्तूला भाषेचा दर्जा देतात.\n\nही कल्पना समजल्यावर तुमचे वर्ग अधिक नैसर्गिक वाटतील. वापर करणारा फक्त obj.mango, print(obj), len(obj) अशा साध्या रूपात काम करेल.",
      },
      {
        title: "__str__ आणि __repr__ — दोन मित्र",
        content: "__str__ आणि __repr__ दोन्ही मजकूर परत करतात, पण उद्देश वेगळा. __str__ माणसाला वाचण्यासाठी — print(obj) ला दिसतं. __repr__ developer साठी — debugging मध्ये दिसतं; जास्त तांत्रिक आणि अचूक.\n\nउदा. Book वर्ग: __str__ 'अमुक पुस्तक'; __repr__ 'Book(\"अमुक\", 300)'. दोन्ही लिहिल्यास व्यवहारात फायदा — print स्वच्छ आणि debug स्पष्ट. फक्त एकच लिहायचं असेल तर __repr__ लिहा; Python ते __str__ साठीही वापरतो.\n\nशिफारस: प्रत्येक वर्गात __repr__ लिहा. कारण interactive shell मध्ये obj टाइप केल्यावर तेच दिसतं आणि चूक शोधायला सोपं जातं.\n\nहे दोन मित्र — एक वापरकर्त्यासाठी, एक विकसकासाठी. दोघं असल्यास वर्ग पूर्ण वाटतो.",
        code: `class Book:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __str__(self):
        return self.name

    def __repr__(self):
        return "Book('" + self.name + "', " + str(self.price) + ")"

b = Book("पंचतंत्र", 250)
print(b)
print(repr(b))`,
        codeLanguage: "python",
        output: `पंचतंत्र
Book('पंचतंत्र', 250)`,
      },
      {
        title: "__len__ आणि __getitem__ — संग्रहासारखं वागणं",
        content: "वस्तूला संग्रहासारखं वागवायचं असेल तर __len__ आणि __getitem__ लिहा. __len__ मुळे len(obj) चालतो; __getitem__ मुळे obj[0] चालतो — म्हणजे वस्तूवर index वापरता येतो.\n\nउदा. एक सिटीबस वर्ग; आत प्रवासी यादी. __len__ ने प्रवासी संख्या; __getitem__ ने ith प्रवासी. आता 'len(bus)' आणि 'bus[2]' अगदी यादीसारखे चालतात.\n\nयामुळे तुमचा वर्ग for loop मध्येही चालेल — Python आपोआप __getitem__ वापरतो. अशा प्रकारे वस्तू सर्वसामान्य संग्रहासारखी वागते; वापरणं सहज होतं.\n\nहे तंत्र libraries मध्ये सर्वत्र आहे — dataframe, tensor, custom container. वापरकर्त्याला साधं वाटतं; पण आत या विशेष पद्धती काम करतात.\n\nसराव: एक Bag वर्ग बनवा आणि त्या तंत्रांने चालवा.",
        code: `class Bag:
    def __init__(self, items):
        self.items = items

    def __len__(self):
        return len(self.items)

    def __getitem__(self, i):
        return self.items[i]

b = Bag(["आंबा", "केळी", "द्राक्ष"])
print(len(b))
print(b[1])`,
        codeLanguage: "python",
        output: `3
केळी`,
      },
      {
        title: "__add__ आणि operator overloading",
        content: "__add__ हा magic method वस्तूंना + ने जोडण्याची परवानगी देतो. जेव्हा a + b लिहिता आणि a वस्तू असेल तर Python a.__add__(b) चालवतो. त्यात नवीन वस्तू तयार करून परत देतो.\n\nउदा. दोन सदिश वेक्टर जोडणं, दोन रकमा जोडणं, दोन अपूर्णांक जोडणं. अशा रचनेमुळे कोड अगदी साध्या गणितासारखा वाचतो — v1 + v2; बाकी काहीच नको.\n\n__add__ सोबत __sub__, __mul__, __eq__ इत्यादी सुद्धा करता येतात. प्रत्येक चिन्हाचं स्वतंत्र special method. यामुळे वस्तू जवळजवळ मूळ प्रकारांसारखी संपूर्ण वागते.\n\nमात्र एक नियम: चिन्हाचा अर्थ विचित्र करू नका. + हे बेरीज/जोडणीसाठीच; त्याला दुसरा अर्थ दिला तर कोड गोंधळतो. सुसंगत अर्थ ठेवा.\n\nहे शिकल्यावर magic methods चं खरं बळ लक्षात येतं.",
        code: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, o):
        return Vector(self.x + o.x, self.y + o.y)

    def __str__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")"

v = Vector(1, 2) + Vector(3, 4)
print(v)`,
        codeLanguage: "python",
        output: `(4, 6)`,
      },
      {
        title: "अन्य उपयुक्त magic methods",
        content: "magic methods ची यादी मोठी आहे; सर्वात उपयुक्त काही:\n\n• __eq__ — दोन वस्तू समान आहेत का (==).\n• __lt__ — एखादी वस्तू लहान आहे का (<); sorting साठी.\n• __bool__ — वस्तू सत्य/असत्य; if obj साठी.\n• __contains__ — 'in' operator साठी.\n• __iter__ — for loop साठी iterator.\n• __call__ — वस्तूला फंक्शनसारखं कॉल करण्यासाठी.\n\nप्रत्येक जण एक वेगळं भाषा-वैशिष्ट्य वस्तूसाठी उघडतं. __lt__ लिहिल्यास sorted() वस्तूंवर चालतो; __eq__ मुळे if obj1 == obj2 अर्थपूर्ण होतो.\n\nहे सगळे लिहिणं आवश्यक नाही; जिथे गरज असेल तिथेच. उदा. Card वर्ग sorting हवा असेल तर __lt__; Account तुलना हवी असेल तर __eq__. निवड प्रसंगानुसार.\n\nया यादीची जाणीव ठेवा; पुढे कोणत्याही वर्गात योग्य special method निवडायला सोपं जाईल.",
      },
      {
        title: "सामान्य चुका — magic methods",
        content: "✗ __str__ मध्ये string परत न करणे — तर TypeError; नेहमी str परत करा.\n✗ __eq__ मध्ये बरोबरीचा संदर्भ न तपासणे — obj1 == obj1 खोटं येऊ शकतं.\n✗ __add__ मध्ये बदल परत न करणे — नवीन वस्तू परत करा; मूळ बदलू नका.\n✗ फार कमी magic methods लिहिणे — वर्ग कोरडा वाटतो.\n✗ चुकीचं नाव — __str__ ऐवजी __Str__ लिहिलं तर काहीच होत नाही; Python विशेष नावे अचूक हवी.\n\nया चुका टाळल्या तर magic methods अचूक काम करतील. प्रत्येक विशेष पद्धतीचं नाव बरोबर आहे का हे एकदा तपासा; नाव चुकलं की ती साधी पद्धत बनते — फायदा शून्य.",
      },
    {
        title: "__eq__ चे तपशील — समानता",
        content: "__eq__ दोन वस्तू समान आहेत का ते ठरवतो. सामान्यतः आपण तपासतो की महत्त्वाचे attributes जुळतात का. उदा. दोन Point वस्तू — x आणि y समान असतील तर समान. हे लिहिल्यावर list मध्ये शोध, set मध्ये ठेवणे सर्व चालतं.\n\n__eq__ सोबत __hash__ देखील लक्षात ठेवा. जर __eq__ लिहिला आणि वस्तू set/dict मध्ये वापरायच्या असतील तर __hash__ लागतो. दोन्ही समान वस्तूंचा hash समान असावा — हा नियम अत्यंत महत्त्वाचा.\n\nउदा. वस्तू mutable असेल तर __hash__ सहसा नको; immutable असेल तर चाले. हा बारकावला नवशिके अनेकदा चुकतात; म्हणून __eq__ लिहिताना __hash__ विचार करा.\n\nपुढील सरावात dictionary ची गुणी वेन व्यक्ती तयार करा — __eq__ आणि __hash__ सोबत. तेव्हा या तपशिलांचं खरं मोल समजून येईल.",
        code: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __eq__(self, o):
        return self.x == o.x and self.y == o.y

print(Point(1, 2) == Point(1, 2))
print(Point(1, 2) == Point(3, 4))`,
        codeLanguage: "python",
        output: `True
False`,
      },
      {
        title: "__lt__ आणि sorting",
        content: "__lt__ मुळे वस्तूंवर '<' चालतो. हे केल्यावर sorted() आणि list.sort() थेट वस्तूंवर काम करतात — स्वतंत्र key फंक्शन नको. ही सोय मोठ्या याद्यांसाठी अमूल्य.\n\nउदा. विद्यार्थ्यांची यादी; __lt__ गुणांवर आधारित; sorted(students) एका ओळीत क्रम लावतो. किंवा वस्तूंची किंमत, वय, तारीख यावर क्रम. प्रत्येक ठिकाणी फक्त __lt__ लिहायचा.\n\nसमानतेसाठी __eq__, क्रमासाठी __lt__, मोठ्यासाठी __gt__ — पण बर्याचदा __lt__ आणि __eq__ पुरतात; Python बाकीचे तर्कशुद्ध करतो. उदा. <= हा < किंवा == वरून.\n\nहे तंत्र शिकल्यावर तुमचे वर्ग सर्वसामान्य याद्यांसारखे वागतील; वापरणं नैसर्गिक वाटेल. sorted() चं सामर्थ्य आता तुमच्या वस्तूंसाठीही खुलं होतं.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def __lt__(self, o):
        return self.marks < o.marks

    def __str__(self):
        return self.name

s = [Student("अ", 50), Student("ब", 80), Student("क", 65)]
print(", ".join(str(x) for x in sorted(s)))`,
        codeLanguage: "python",
        output: `अ, क, ब`,
      },
      {
        title: "__bool__ आणि __contains__",
        content: "__bool__ वस्तूचं सत्य-असत्य ठरवतो; if obj ने वस्तू तपासता येते. उदा. एक बॅटरी वर्ग; चार्ज 0 असेल तर if battery असत्य. वापरणारा सहज if battery म्हणतो — आतली स्थिती तपासली जाते.\n\n__contains__ वस्तूत काही आहे का हे ठरवतो; item in obj. उदा. Playlist वर्ग; __contains__ मुळे गाणं आहे का ते सरळ 'if song in playlist' ने तपासता येतं. आत यादीवर शोध चालतो.\n\nया दोन पद्धतींमुळे वस्तू Python च्या नैसर्गिक वाक्यरचनेत सामील होते — if, in, not in. वापरकर्त्याला वेगळी पद्धत शिकावी लागत नाही; भाषा जशी वापरतो तसंच करतो.\n\nहेच magic methods चं मूळ उद्दिष्ट — वस्तूंना भाषेचा दर्जा देणे. यामुळे कोड वाचायला सोपा आणि लिहायला स्वाभाविक होतो.\n\nसराव: दोन्ही पद्धती एका वर्गात लिहा आणि if/in वापरून पहा.",
        code: `class Basket:
    def __init__(self, items):
        self.items = items

    def __bool__(self):
        return len(self.items) > 0

    def __contains__(self, x):
        return x in self.items

b = Basket(["सेब", "नाशपाती"])
print(bool(b))
print("सेब" in b)
print("आंबा" in b)`,
        codeLanguage: "python",
        output: `True
True
False`,
      },
      {
        title: "__call__ — वस्तूला फंक्शनासारखं वापरणे",
        content: "__call__ मुळे वस्तूला फंक्शनसारखं कॉल करता येते — obj(). हे तंत्र अनेक आधुनिक libraries मध्ये वापरतात. उदा. एक Multiplier वर्ग; obj(5) म्हणजे 5 ने गुणा.\n\nयाचा फायदा असा की वस्तू स्थिती (state) सांभाळू शकते आणि तरीही कॉल करता येते. सामान्य फंक्शनला स्थिती नसते; __call__ असलेली वस्तू स्थिती ठेवूनही कॉल करता येते. हेच दोन्हींचं मिलन.\n\nउदा. कंपाउंड इंटरेस्ट कॅल्क्युलेटर; दर ठेवला आणि नंतर वेगवेगळ्या रकमांसाठी कॉल केला. प्रत्येक कॉलवर नवीन गणना — पण दर लक्षात ठेवलेला. हे स्थिती + क्रिया यांचं सुंदर उदाहरण.\n\n__call__ शिकल्यावर decorators आणि callbacks समजायला सोपं जातं. म्हणून हा magic method प्रगत Python चा दरवाजा मानला जातो.\n\nसराव: एक Echo वर्ग बनवा जो दिलेला मजकूर पुन्हा म्हणेल.",
        code: `class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, x):
        return x * self.factor

double = Multiplier(2)
print(double(5))
print(double(10))`,
        codeLanguage: "python",
        output: `10
20`,
      },
      {
        title: "magic methods वास्तव प्रकल्पात",
        content: "magic methods वास्तव प्रकल्पांमध्ये कसे वापरतात ते पहा:\n\n• Complex वर्ग — __add__, __sub__, __mul__ ने गणित.\n• Money वर्ग — __add__ ने चलन जोडणे; __eq__ ने तुलना.\n• Matrix वर्ग — __getitem__ ने m[0][1]; __add__ ने बेरीज.\n• Version वर्ग — __lt__ ने आवृत्ती तुलना.\n• Season वर्ग — __iter__ ने for loop.\n\nप्रत्येक ठिकाणी magic methods कोडला स्वाभाविक भाषा देतात. वापरणारा कंस, चिन्ह, in, for असं साधं लिहितो — पण आत जटिल काम घडतं.\n\nहीच magic methods ची खरी उपयुक्तता — साधेपणा बाहेर, सामर्थ्य आत. मोठ्या libraries या तत्त्वावरच उभ्या आहेत; तुमचे वर्गही तसंच घडवता येतात.\n\nहे शिकल्यावर कोणतीही library वाचायला सोपी जाईल — कारण ती तुम्हाला ठाऊक असलेल्या पद्धतींवर उभी असेल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "magic methods च्या सखोल अभ्यासासाठी अधिकृत स्रोत:\n\n• data model — special method names: https://docs.python.org/3/reference/datamodel.html#special-method-names\n• __str__ व __repr__: https://docs.python.org/3/reference/datamodel.html#object.__repr__\n• __len__ व __getitem__: https://docs.python.org/3/reference/datamodel.html#emulating-container-types\n• numeric types emulation: https://docs.python.org/3/reference/datamodel.html#emulating-numeric-types\n• __eq__ आणि __hash__: https://docs.python.org/3/reference/datamodel.html#object.__hash__\n• __call__: https://docs.python.org/3/reference/datamodel.html#object.__call__\n• classes tutorial: https://docs.python.org/3/tutorial/classes.html\n• Python style guide: https://peps.python.org/pep-0008/\n\nया sources वाचून प्रत्येक special method स्वतः कोड करा; पुढील OOP प्रकल्प धड्याची तयारी होईल.",
      },
    {
        title: "__iter__ — स्वतःचा iterator बनवणे",
        content: "__iter__ मुळे वस्तू for loop मध्ये चालते. जेव्हा 'for x in obj' लिहिता तेव्हा Python obj.__iter__() कॉल करतो; तो iterator परत करतो. प्रत्येक फेरीत पुढचं मूल्य मिळतं.\n\nउदा. एक Countdown वर्ग; 5 ते 1 पर्यंत मोजणी. __iter__ मध्ये पुढची संख्या देतो; for loop ती घेतो. अशा रचनेत वस्तू स्वतःची क्रमवारी ठरवते — वापरकर्त्याला फक्त for लिहायचं.\n\nहीच गोष्ट यादी, शब्दकोश, फाइल — सर्वांमध्ये घडते. तुमच्या वर्गात __iter__ लिहिल्यावर तोही त्या यादीत सामील होतो. Python ची for loop किती लवचिक आहे याचं हे प्रत्यक्ष दर्शन.\n\nसोपी अंमलबजावणी म्हणजे generator — yield वापरून. पुढील पायरीत generators शिकू; पण आधी __iter__ ची कल्पना स्पष्ट हवी. ती स्पष्ट झाली की generators सहज उलगडतील.\n\nसराव: Countdown वर्ग लिहा आणि for loop मध्ये चालवा.",
        code: `class Countdown:
    def __init__(self, start):
        self.start = start

    def __iter__(self):
        n = self.start
        while n > 0:
            yield n
            n -= 1

for i in Countdown(3):
    print(i)`,
        codeLanguage: "python",
        output: `3
2
1`,
      },
      {
        title: "magic methods चा सारांश",
        content: "या धड्यात शिकलेले magic methods:\n\n• __str__ / __repr__ — मजकूर रूप\n• __len__ / __getitem__ — संग्रह रूप\n• __add__ / __eq__ / __lt__ — गणित व तुलना\n• __bool__ / __contains__ — तर्क व 'in'\n• __call__ — फंक्शनसारखं\n• __iter__ — for loop\n\nप्रत्येक पद्धत वस्तूला एक नवीन भाषा-वैशिष्ट्य देतं. एकच वर्ग अनेक रूपांत वापरता येतो — हेच magic methods चं सामर्थ्य. आवश्यक तेवढेच लिहा; पण जिथे लिहाल तिथे अचूक लिहा.\n\nआता तुमचे वर्ग मूळ प्रकारांसारखे वागू शकतात. वापरणार्याला आतली गुंतागुंत दिसत नाही; फक्त साधी भाषा दिसते. हीच उत्तम design ची खूण.\n\nपुढील धडा OOP प्रकल्प — आतापर्यंतचं सगळं एकत्र. तिथे वर्ग, वारसा, encapsulation, property, polymorphism, magic methods — सर्व एका प्रकल्पात वापरू.",
        code: `class Temp:
    def __init__(self, c):
        self.c = c

    def __str__(self):
        return str(self.c) + "°C"

print(Temp(30))`,
        codeLanguage: "python",
        output: `30°C`,
      },
      {
        title: "शेवटचे मुद्दे — magic methods",
        content: "magic methods शिकणं म्हणजे Python च्या आतल्या यंत्रणेकडे पाहणं. प्रत्येक चिन्ह, प्रत्येक built-in फंक्शन मागे एक special method असतो — हे समजल्यावर भाषा नव्याने उलगडते.\n\nलक्षात ठेवा: नाव अचूक दोन अंडरस्कोर; योग्य प्रकारचं मूल्य परत; एक अर्थ सुसंगत. या तीन नियमांनी magic methods नेहमी बरोबर चालतील.\n\nआजचा धडा संपतो, पण अभ्यास थांबू नये. प्रत्येक नव्या वर्गात किमान __str__ तरी लिहा; तो सर्वात उपयुक्त आणि सर्वात सोपा आहे. हळूहळू इतर पद्धती जोडत जा.\n\nपुढील प्रकल्प धड्यात या सर्वांचा वापर पहाल. आज शिकलेलं तिथे प्रत्यक्ष काम करताना दिसेल. सातत्य ठेवा — पुढील धड्यात भेटू!",
      },
    {
        title: "प्रश्नोत्तर — magic methods",
        content: "प्रश्न: magic methods थेट कॉल करता येतात का? उत्तर: होय, पण सहसा करू नका; Python आपोआप कॉल करतो.\nप्रश्न: __str__ आणि __repr__ दोन्ही का? उत्तर: एक वापरकर्त्यासाठी, एक विकसकासाठी; दोन्ही असल्यास पूर्ण.\nप्रश्न: __eq__ लिहिल्यावर __hash__ का? उत्तर: set/dict मध्ये वापरायचं असेल तर दोन्ही आवश्यक.\nप्रश्न: किती magic methods लिहावेत? उत्तर: गरज असेल तेवढेच; अनावश्यक जड करू नका.\n\nही उत्तरं मनात ठेवल्यास magic methods चा वापर योग्य होईल. प्रत्येक पद्धत एका विशिष्ट भाषा-वैशिष्ट्याशी जोडलेली आहे; ती ओळखून वापरा.",
        code: `class Age:
    def __init__(self, n):
        self.n = n

    def __eq__(self, o):
        return self.n == o.n

print(Age(20) == Age(20))`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "समारोप — पुढील प्रकल्पाची ओढ",
        content: "magic methods चा प्रवास इथे थांबतो. आता तुम्ही वस्तूंना print, len, +, in, for सर्वांसाठी योग्य वर्तन देऊ शकता. हे ज्ञान OOP प्रकल्पात थेट उपयोगी पडेल — Gradebook मध्ये बरोबर __str__, __len__, __getitem__ यांची गरज भासेल.\n\nपुढील धडा पूर्ण प्रकल्प आहे — शाळेची गुणपत्रिका. तिथे वर्ग, __init__, attributes, inheritance, encapsulation, property, polymorphism, magic methods — सगळं एकत्र येईल. आजपर्यंतचा अभ्यास तिथे फळ देईल.\n\nजाण्यापूर्वी एक शेवटचा सराव: एक वर्ग बनवा ज्याला __str__, __len__ आणि __add__ तिन्ही असतील. असा वर्ग लिहिल्यावर पुढील प्रकल्प सहज जमेल. शुभेच्छा!",
        code: `class Playlist:
    def __init__(self, songs):
        self.songs = songs

    def __len__(self):
        return len(self.songs)

    def __str__(self):
        return "प्लेलिस्ट: " + str(len(self.songs))

p = Playlist(["गाणं1", "गाणं2"])
print(p)`,
        codeLanguage: "python",
        output: `प्लेलिस्ट: 2`,
      },
    {
        title: "अखेरची टिप — रोजचा सराव",
        content: "magic methods पक्के करायला रोज एक विशेष पद्धत लिहा. आज __str__, उद्या __len__, परवा __add__. दहा दिवसांत दहा पद्धती — Python च्या आतल्या भाषेची तुम्हाला सवय होईल. ही सवय पुढील प्रकल्पात सोनेरी ठरेल. सातत्य हाच यशाचा मंत्र आहे.",
        code: `class Box:
    def __init__(self, n):
        self.n = n

    def __len__(self):
        return self.n

b = Box(7)
print(len(b))`,
        codeLanguage: "python",
        output: `7`,
      },
    {
        title: "शेवटचा श्वास — दुंदर पद्धती",
        content: "दुंदर पद्धतींचा हा धडा एका मोठ्या सत्याने संपतो: Python मधली प्रत्येक क्रिया एखाद्या विशेष पद्धतीकडे नेते. हे समजल्यावर भाषा जादू वाटेना; स्पष्ट यंत्रणा वाटते. आणि स्पष्टता हीच प्रगतीची पहिली पायरी. पुढील प्रकल्पात प्रत्यक्ष वापर करून हे ज्ञान कायमस्वरूपी करा.",
      },
    {
        title: "शेवटची ओळ",
        content: "magic methods शिकल्याबद्दल अभिनंदन! आता तुमच्या वर्गांना Python ची खरी शक्ती मिळाली आहे. पुढील प्रकल्प धड्यात हे सर्व ज्ञान एकत्र वापरून एक अर्थपूर्ण प्रकल्प बनवू. तयार व्हा!",
      },
    {
        title: "एक छोटी गोष्ट",
        content: "प्रत्येक वर्गात __str__ लिहिण्याची सवय ठेवा; ती सर्वात सोपी आणि सर्वात उपयुक्त दुंदर पद्धती आहे.",
      },
    ],
    practiceQuestions: [
      "magic methods कोणत्या रचनेने लिहितात?",
      "__str__ कधी चालते?",
      "__len__ कोणत्या operator सोबत?",
      "__eq__ कशासाठी?",
    ],
    quiz: [
      { question: "print() च्या वेळी कोणती पद्धत?", options: ["__init__", "__str__", "__add__", "__len__"], correct: 1 },
      { question: "len() कधी कार्य करते?", options: ["__len__ असल्यास", "नेहमी", "कधी नाही", "फक्त list"], correct: 0 },
      { question: "== ची आपली व्याख्या कशी?", options: ["__eq__", "__str__", "__init__", "__add__"], correct: 0 },
    ],
    challenge: {
      prompt: "डब्यातील वस्तूंची संख्या __str__ मध्ये.",
      starterCode: `class Box:
    def __init__(self, count):
        self.count = count

    def __str__(self):
        return "डब्यातील: " + str(self.count)

print(Box(5))`,
      expectedOutput: "डब्यातील: 5",
    },
    interviewQuestions: [
      "कोणती magic methods वापरतात? उदाहरणासह",
      "__str__ आणि __repr__ चा फरक?",
    ],
    related: ["python-polymorphism", "python-property", "python-oop-project"],
    prev: "python-polymorphism",
    next: "python-oop-project",
  },

  {
    slug: "python-oop-project",
    categoryId: "python",
    title: "OOP Mini Project",
    marathiTitle: "OOP Project - विद्यार्थी गुणपत्रिका",
    level: "intermediate",
    minutes: 20,
    summary: "OOP च्या सगळ्या संकल्पना एकत्र — विद्यार्थी व वर्ग पुस्तक (Gradebook) तयार करा.",
    levelLabel: L5_LABEL,
    sections: [
      {
        title: "OOP Project - विद्यार्थी गुणपत्रिका म्हणजे काय?",
        content: "OOP च्या सगळ्या संकल्पना एकत्र — विद्यार्थी व वर्ग पुस्तक (Gradebook) तयार करा.\nआता सगळं एकत्र: Classes, __init__, Methods, Inheritance, Encapsulation.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? OOP Project - विद्यार्थी गुणपत्रिका चे फायदे आणि महत्त्व",
        content: "\"OOP Project - विद्यार्थी गुणपत्रिका\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "एकत्र बसवलेला प्रोजेक्ट",
        content: "आता सगळं एकत्र: Classes, __init__, Methods, Inheritance, Encapsulation. वास्तविक प्रोजेक्ट — विद्यार्थ्यांच्या गुणांची नोंदणी.\n\n- Student — नाव व गुण\n- Gradebook — सूची सांभाळणे\n- average() / top() / passed() — गणना\nहे सगळे धडे आता एकत्र आल्यावर कोडला खरा आकार दिसतो.",
      },
      {
        title: "शिक्षकाची नोंदवही",
        content: "शिक्षकाकडे एक नोंदवही आहे — ती Gradebook. त्यात प्रत्येक विद्यार्थ्याचे नाव-गुण म्हणजे Student नोंदलेले. विचारल्यावर वही सांगते: एकूण किती, सरासरी किती, कोण टॉप.\n\nOOP चे हेच रूप — नोंदवही ही वस्तू, तिचा data आणि उत्तरे पद्धतींनी. शाळेची ही उपमा तुम्हाला रोजच्या जगात दिसते.",
      },
      {
        title: "Student वर्ग बनवणे",
        content: "पहिली पायरी — Student वर्ग. __init__ ने name आणि marks सांभाळले; passed() सांगते की marks >= 35 आहे का.\n\ns = Student(\"अर्णव\", 78); print(s.name, s.passed()) म्हणजे output अर्णव True. वर्ग नीट तयार झाला — आता सूचीवर जायचं.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def passed(self):
        return self.marks >= 35

s = Student("अर्णव", 78)
print(s.name, s.passed())`,
        codeLanguage: "python",
        output: `अर्णव True`,
      },
      {
        title: "वर्ग पुस्तक — नोंदणी, सरासरी, टॉप",
        content: "Gradebook हा दुसरा वर्ग. add() विद्यार्थी सूचीत घालतो; average() सर्वांचे गुण जमा करून // len ने सरासरी देतो; top() सर्वात जास्त गुणांच्या विद्यार्थ्याचं नाव.\n\nआरोही 85, वेद 62, मीरा 90 — output एकूण: 3, सरासरी: 79, टॉप: मीरा. याच सूत्रावर वर्ग पुस्तक उभं आहे.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def passed(self):
        return self.marks >= 35

class Gradebook:
    def __init__(self):
        self.students = []

    def add(self, student):
        self.students.append(student)
        return len(self.students)

    def average(self):
        total = 0
        for s in self.students:
            total += s.marks
        return total // len(self.students)

    def top(self):
        best = self.students[0]
        for s in self.students:
            if s.marks > best.marks:
                best = s
        return best.name

book = Gradebook()
book.add(Student("आरोही", 85))
book.add(Student("वेद", 62))
book.add(Student("मीरा", 90))
print("एकूण:", len(book.students))
print("सरासरी:", book.average())
print("टॉप:", book.top())`,
        codeLanguage: "python",
        output: `एकूण: 3
सरासरी: 79
टॉप: मीरा`,
      },
      {
        title: "उत्तीर्ण विद्यार्थ्यांची गणना",
        content: "उत्तीर्ण विद्यार्थी मोजणे. आरोही 85 आणि मीरा 90 पास; पूजा 29 अयशस्वी. for s in book.students: if s.passed() म्हणून मोजणी होते.\n\noutput उत्तीर्ण: 2 दिसतो. वस्तूची पद्धत वापरून केलेली मोजणी — हा वापर रोजच्या कोडात सतत येतो.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def passed(self):
        return self.marks >= 35

class Gradebook:
    def __init__(self):
        self.students = []

    def add(self, student):
        self.students.append(student)

book = Gradebook()
book.add(Student("आरोही", 85))
book.add(Student("पूजा", 29))
book.add(Student("मीरा", 90))
count = 0
for s in book.students:
    if s.passed():
        count += 1
print("उत्तीर्ण:", count)`,
        codeLanguage: "python",
        output: `उत्तीर्ण: 2`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ रिकाम्या सूचीवर top() कॉल — तिथे students[0] नसल्याने index error येतो.\n✗ add() विसरणे — मग सूची रिकामी राहते आणि गणना गोंधळते.\n✗ attribute spelling चा गोंधळ — marks आणि mark ही दोन वेगळी attributes ठरतात.\n✗ average() मध्ये / ऐवजी // चा गोंधळ — पूर्ण संख्येची अपेक्षा असेल तेव्हा.\n\nही चार ठिकाणे आता जाणूनबुजून काळजी घेण्याची — सगळ्या धड्यांचा सार इथे उतरलाय.",
      },
      {
        title: "इंटरॅक्टिव्ह: बेरीज काढणे",
        content: "Gradebook मध्ये add() ने रिया 70 आणि सोहम 88 नोंदवले; नंतर for loop मध्ये total += s.marks केलं.\n\nprint(\"बेरीज:\", total) म्हणजे output बेरीज: 158. data वेगवेगळे लिहून आकडे पुन्हा जुळतात का ते पडताळून पहा.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

class Gradebook:
    def __init__(self):
        self.students = []

    def add(self, s):
        self.students.append(s)

book = Gradebook()
book.add(Student("रिया", 70))
book.add(Student("सोहम", 88))
total = 0
for s in book.students:
    total += s.marks
print("बेरीज:", total)`,
        codeLanguage: "python",
        output: `बेरीज: 158`,
      },
      {
        title: "Mini Project — वर्ग सूची",
        content: "शेवटचा प्रोजेक्ट — प्रत्येक विद्यार्थ्याला ग्रेड. Student मध्ये grade() पद्धत: 75 किंवा अधिक म्हणजे A, 35 किंवा अधिक म्हणजे B, अन्यथा C.\n\nयादीत तीन विद्यार्थी — अर्णव 78 म्हणजे A, पूजा 34 म्हणजे C, मीरा 90 म्हणजे A. output त्याच क्रमाने छापला जातो. आता सगळ्या OOP संकल्पना एका निकालात उतरल्या.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def grade(self):
        if self.marks >= 75:
            return "A"
        if self.marks >= 35:
            return "B"
        return "C"

students = [Student("अर्णव", 78), Student("पूजा", 34), Student("मीरा", 90)]
for s in students:
    print(s.name, s.grade())`,
        codeLanguage: "python",
        output: `अर्णव A
पूजा C
मीरा A`,
      },
    {
        title: "प्रकल्पाची ओळख — Gradebook",
        content: "आपण एक प्रकल्प बनवणार आहोत — शाळेची गुणपत्रिका (Gradebook). या प्रकल्पात विद्यार्थी, गुण, सरासरी, क्रमवारी आणि अहवाल — सगळं वर्गांच्या मदतीने घडवू. आतापर्यंतचं सगळं OOP ज्ञान एकत्र येथे वापरलं जाईल.\n\nप्रकल्पाची रचना अशी: एक Student वर्ग (नाव आणि गुण); एक Gradebook वर्ग (विद्यार्थ्यांची यादी); पद्धती — add_student, average, topper, report. यामध्ये __init__, attributes, methods, encapsulation आणि magic methods सर्वांचा वापर.\n\nहे प्रकल्प छोटं पण पूर्ण आहे — वास्तवातील गरजा आणि OOP तत्त्वं दोन्ही सामावली आहेत. असं प्रकल्प पूर्ण केल्यावर कोणताही मोठा प्रकल्प उभारण्याची खात्री मिळते.\n\nपुढील पानांत प्रत्येक वर्ग वेगवेगळे तपशीलवार रचू या. प्रत्येक भाग समजून घ्या आणि स्वतः लिहा.",
      },
      {
        title: "Student वर्ग — पायाभूत रचना",
        content: "पहिला वर्ग Student. त्यात दोन attributes — name आणि marks. name हा विद्यार्थ्याचं नाव; marks ही गुणांची यादी. __init__ द्वारे दोन्ही भरली जातात.\n\nपुढे उपयुक्त पद्धती — total() गुणांची बेरीज देतो; average() सरासरी; __str__ मजकूर रूप. यामुळे प्रत्येक विद्यार्थी स्वतःची गणना आणि रूप दाखवू शकतो. हीच encapsulation ची शिस्त — data आत, पद्धती बाहेर.\n\nलक्षात घ्या: marks ची यादी आत ठेवली; बाहेरून थेट बदलण्याऐवजी पद्धती वापरू शकतो. सुरुवातीला साधं ठेवू; पुढे गरज असेल तर setter जोडू. असा टप्प्याटप्प्याने विकास हा आधुनिक प्रकल्पशैलीचा भाग आहे.\n\nअशा रचनेने पुढील Gradebook वर्ग सहज बनेल — प्रत्येक विद्यार्थ्याची गणना त्याच्याच वर्गात राहते.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def total(self):
        return sum(self.marks)

    def average(self):
        return self.total() / len(self.marks)

    def __str__(self):
        return self.name + " (" + str(self.total()) + ")"

s = Student("सीमा", [80, 90, 70])
print(s)
print(s.average())`,
        codeLanguage: "python",
        output: `सीमा (240)
80.0`,
      },
      {
        title: "Gradebook वर्ग — विद्यार्थ्यांची यादी",
        content: "दुसरा वर्ग Gradebook — विद्यार्थ्यांची यादी सांभाळतो. __init__ मध्ये रिकामी यादी; add_student() नवीन विद्यार्थी घालतो; __len__ एकूण संख्या देतो; __str__ सारांश.\n\nया वर्गातील मुख्य काम म्हणजे सामूहिक गणना — सगळ्या विद्यार्थ्यांची सरासरी, सर्वोच्च विद्यार्थी, आणि अहवाल. प्रत्येक पद्धत यादीवर फिरते आणि विद्यार्थ्याच्या पद्धती वापरते. हेच earlier शिकलेलं polymorphism व्यवहारात.\n\nभूमिका स्पष्ट ठेवा: Student स्वतःची गणना करतो; Gradebook सगळ्यांची एकत्र. अशा विभागणीने कोड स्वच्छ व चाचणीयोग्य राहतो. प्रत्येक वर्ग एकच जबाबदारी सांभाळतो.\n\nपुढील भागात सरासरी, सर्वोच्च आणि अहवाल यांची अंमलबजावणी पाहू.",
        code: `class Gradebook:
    def __init__(self):
        self.students = []

    def add_student(self, student):
        self.students.append(student)

    def __len__(self):
        return len(self.students)

    def __str__(self):
        return "विद्यार्थी: " + str(len(self.students))

g = Gradebook()
g.add_student("सीमा")
g.add_student("राम")
print(g)
print(len(g))`,
        codeLanguage: "python",
        output: `विद्यार्थी: 2
2`,
      },
      {
        title: "सरासरी आणि सर्वोच्च — गणना",
        content: "आता Gradebook मध्ये सामूहिक गणना जोडू. average() सर्व विद्यार्थ्यांच्या सरासरीची सरासरी देते. topper() सर्वाधिक एकूण गुण असलेला विद्यार्थी शोधतो.\n\naverage() मध्ये रिकामी यादीची अट ठेवावी — अन्यथा शून्याने भागाकार होऊन एरर. topper() मध्ये सुरुवातीला पहिला विद्यार्थी धरून प्रत्येकाशी तुलना करावी — max मिळवण्याची सोपी पद्धत.\n\nया पद्धतींमध्ये encapsulation चा फायदा दिसतो: गणना आत; बाहेर फक्त निकाल. वापरणार्याला अंतर्गत तपशील माहीत नको. अशा रचनेने प्रकल्पाची चाचणी सोपी होते आणि पुढील बदल सुरक्षित.\n\nहे दोन्ही निकाल अहवालात वापरले जातील.",
        code: `class Gradebook:
    def __init__(self):
        self.students = []

    def add_student(self, s):
        self.students.append(s)

    def average(self):
        if not self.students:
            return 0
        return sum(s.average() for s in self.students) / len(self.students)

    def topper(self):
        return max(self.students, key=lambda s: s.total())

g = Gradebook()
g.add_student(Student("सीमा", [80, 90]))
g.add_student(Student("राम", [70, 60]))
print(g.average())
print(g.topper())`,
        codeLanguage: "python",
        output: `75.0
सीमा (170)`,
      },
      {
        title: "अहवाल — report पद्धत",
        content: "प्रकल्पाचा शेवटचा भाग — report(). हा प्रत्येक विद्यार्थ्याची ओळ छापतो आणि शेवटी सरासरी दाखवतो. वापरकर्त्याला एका आदेशाने संपूर्ण चित्र मिळतं.\n\nreport() मध्ये लूप, __str__, आणि average() — सगळं एकत्र येतं. हे पाहून प्रकल्पातील सर्व वर्ग कसे जोडलेले आहेत ते समजतं: Gradebook विद्यार्थ्यांवर; विद्यार्थी स्वतःच्या गुणांवर. हेच object collaboration.\n\nअहवालाचं स्वरूप छोटं पण स्वच्छ ठेवा — प्रत्येक विद्यार्थी एका ओळीत; शेवटी सरासरी. अशा स्वरूपामुळे output वाचायला सोपा. तुम्ही हवं तसं बदलू शकता — टक्केवारी, श्रेणी, क्रमवारी.\n\nहा भाग पूर्ण झाला की प्रकल्प तयार. मग तो स्वतः चालवून पहा — शेवटचा output तपासा.",
        code: `class Gradebook:
    def __init__(self):
        self.students = []

    def add_student(self, s):
        self.students.append(s)

    def average(self):
        if not self.students:
            return 0
        return sum(s.average() for s in self.students) / len(self.students)

    def report(self):
        for s in self.students:
            print(s)
        print("सरासरी:", self.average())

g = Gradebook()
g.add_student(Student("सीमा", [80, 90]))
g.add_student(Student("राम", [70, 60]))
g.report()`,
        codeLanguage: "python",
        output: `सीमा (170)
राम (130)
सरासरी: 75.0`,
      },
      {
        title: "प्रकल्पाचे विस्तार — नवीन शक्यता",
        content: "हा प्रकल्प इथे थांबत नाही. त्यात नवीन वैशिष्ट्यं जोडता येतात:\n\n• श्रेणी — गुणांवरून A, B, C.\n• क्रमवारी — topper वर आधारित sorted यादी.\n• विषय — प्रत्येक विषयाचे स्वतंत्र गुण.\n• उत्तीर्णता — किमान गुणांची अट.\n• CSV निर्यात — अहवाल फाइलमध्ये.\n\nप्रत्येक वैशिष्ट्य जोडताना आधीची रचना तुटत नाही — हेच OOP design चं बळ. नवीन पद्धत किंवा नवीन वर्ग; जुना कोड तसाच. हीच विस्तारयोग्यता खरी गुणवत्ता.\n\nजसं प्रकल्प वाढतो तसं प्रत्येक वर्गाची जबाबदारी स्पष्ट ठेवा. Student फक्त गुण; Gradebook सामूहिक काम; Report कदाचित वेगळा वर्ग. अशी विभागणी प्रकल्प मोठा होताना टिकवते.\n\nस्वतः ही वैशिष्ट्यं जोडून पहा — तुमची समज वाढेल.",
      },
    {
        title: "प्रकल्पातील OOP तत्त्वांची यादी",
        content: "या प्रकल्पात आपण वापरलेली OOP तत्त्वं एकत्र पाहू:\n\n• वर्ग व वस्तू — Student, Gradebook.\n• __init__ — दोन्ही वर्गांची सुरुवात.\n• attributes — name, marks, students.\n• methods — total, average, topper, report.\n• encapsulation — गणना वर्गातच.\n• magic methods — __str__, __len__.\n• polymorphism — प्रत्येक विद्यार्थी स्वतःची average देतो.\n\nप्रत्येक तत्त्व आधीच्या धड्यांत शिकलेलं; इथे एकत्र वापरलं. हेच प्रकल्प शिक्षणाचं खरं उद्दिष्ट — वेगवेगळे भाग जोडून एक पूर्ण वस्तू बनवणं. जसं यंत्राचे भाग जोडून यंत्र तयार होतं.\n\nहे पाहिल्यावर समजतं की OOP हा विषयांचा संग्रह नाही; तो एक जीवनपद्धती आहे. प्रत्येक समस्येचं विभाजन वर्गांत करा आणि प्रत्येक वर्गाला एक जबाबदारी द्या — प्रकल्प सहज उभा राहतो.\n\nपुढील प्रकल्पात हीच यादी पुन्हा वापरता येईल.",
      },
      {
        title: "प्रकल्प चाचणी — प्रत्येक पद्धत तपासा",
        content: "प्रकल्प पूर्ण झाल्यावर प्रत्येक पद्धत स्वतंत्रपणे तपासा. चाचणी हा प्रकल्पाचा अविभाज्य भाग:\n\n• empty average() — शून्य देते का?\n• एका विद्यार्थ्याची average() — योग्य का?\n• topper() — जास्त गुणांचा निवडतो का?\n• __len__ — बरोबर संख्या देतो का?\n• report() — प्रत्येक ओळ योग्य का?\n\nअशा चाचण्या लिहिण्याची सवय प्रत्येक developer ला हवी. कारण चूक लवकर पकडली तर सुधारणा स्वस्त. जी पद्धत तपासली नाही ती जोखीम बनते.\n\nचुका आल्यास प्रत्येक पद्धत वेगळी करून तपासा. कोणता भाग चुकतोय हे लगेच कळतं. हाच debugging चा शिस्तबद्ध मार्ग.\n\nअसे केल्यावर प्रकल्प दुसऱ्यांच्या वापरासाठी विश्वासार्ह होतो.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def average(self):
        return sum(self.marks) / len(self.marks)

print(Student("अ", [60, 80]).average())`,
        codeLanguage: "python",
        output: `70.0`,
      },
      {
        title: "प्रकल्प सुधारणा — कोड स्वच्छ ठेवा",
        content: "प्रकल्प काम करतोय, आता तो स्वच्छ करू. स्वच्छ कोड म्हणजे वाचता येणारा, समजणारा आणि बदलता येणारा कोड. काही सोपे नियम:\n\n• नावं अर्थपूर्ण — name, marks, average; s किंवा x नको.\n• प्रत्येक पद्धत एकच काम करे.\n• वर्ग छोटे ठेवा — एका वर्गाची एक जबाबदारी.\n• टिप्पण्या फार नको — नावांनीच स्पष्टता येईल.\n• समान शैली — सगळीकडे एकाच पद्धतीने लिहा.\n\nहे नियम Python community च्या शिष्टाचाराचा भाग आहेत. ते पाळल्यावर तुमचा कोड इतरांनाही सहज समजतो — आणि सहा महिन्यांनी तुम्हालाच.\n\nस्वच्छता ही एकदाची गोष्ट नाही; ती सतत जपावी लागते. प्रत्येक नवीन बदल करताना जुनी स्वच्छता राखा. असा कोड दीर्घकाळ टिकतो.\n\nहा प्रकल्प संपल्यावर तो पुन्हा एकदा वाचा — सुधारणा सापडतील.",
      },
      {
        title: "पुढील पायरी — मोठे प्रकल्प",
        content: "हा छोटा प्रकल्प पूर्ण केल्यावर तुम्ही मोठ्या प्रकल्पांना तयार आहात. पुढील प्रकल्पांसाठी काही कल्पना:\n\n• लायब्ररी व्यवस्थापन — Book, Member, Library वर्ग.\n• बँक प्रकल्प — Account, Transaction, Bank वर्ग.\n• रुग्णालय — Patient, Doctor, Appointment वर्ग.\n• ऑनलाइन दुकान — Product, Cart, Order वर्ग.\n\nप्रत्येक प्रकल्प एकाच पद्धतीने उभारा: आधी वर्गांची यादी; मग प्रत्येकाची जबाबदारी; मग पद्धती; मग चाचणी. हीच प्रक्रिया मोठ्या प्रकल्पांनाही लागू होते.\n\nमहत्त्वाचं म्हणजे सुरुवात छोटी करा. एक-दोन वर्गांनी सुरुवात; हळूहळू वाढवा. प्रत्येक टप्प्यावर चालणारा कोड ठेवा. अशा रीतीने प्रकल्प कधीही अनावर होत नाही.\n\nआता तुमच्याकडे OOP ची संपूर्ण साधनं आहेत — वापरायला सुरुवात करा!",
      },
      {
        title: "सामान्य चुका — प्रकल्पात",
        content: "प्रकल्प उभारताना होणाऱ्या नेहमीच्या चुका:\n\n✗ सगळं एका वर्गात कोंबणे — वर्ग फुगतो; जबाबदारी विभागा.\n✗ वर्गांची गरज नसताना वर्ग बनवणे — overengineering; सोपं ठेवा.\n✗ डेटा बाहेर ठेवणे — encapsulation राखा.\n✗ चाचणी न करणे — चुका लपून राहतात.\n✗ नावं अस्पष्ट ठेवणे — उद्या तुम्हालाच समजणार नाही.\n\nया चुका टाळल्या तर प्रकल्प सुंदर व टिकाऊ होतो. प्रत्येक चूक ही शिकण्याची संधी — पण इतरांनी केलेल्या चुकांतून शिकणं अधिक शहाणपणाचं.\n\nप्रकल्प सुरू करण्यापूर्वी वर्गांची रचना कागदावर काढा. कोणता वर्ग, कोणती जबाबदारी, कोणते attributes — स्पष्ट झाल्यावर कोड सहज लिहा. हा नियोजनाचा टप्पा वेळ वाचवतो.\n\nअशा शिस्तीने प्रत्येक प्रकल्प यशस्वी होतो.",
      },
    {
        title: "संपूर्ण प्रकल्प एकत्र — अंतिम कोड",
        content: "आता संपूर्ण प्रकल्प एका नजरेत पाहू — Student आणि Gradebook दोन्ही वर्ग, सर्व पद्धती सोबत. हा अंतिम कोड तुमच्या OOP प्रवासाचा सारांश आहे. खालील कोड स्वतः चालवा, output तपासा, आणि आपल्या शब्दांत समजावून घ्या.\n\nकोड वाचताना लक्ष द्या: प्रत्येक पद्धत कशी छोटी आहे; प्रत्येक वर्ग कसा स्वतंत्र आहे; आणि तरीही सगळे मिळून कसं काम करतं. हेच उत्तम design चं लक्षण — भाग साधे, संपूर्णता सुंदर.\n\nहा कोड extension करा: श्रेणी पद्धत जोडा, क्रमवारी जोडा, किंवा अहवाल फाइलमध्ये लिहा. प्रत्येक वाढ तुमची खरी परीक्षा. जो कोड तुम्ही स्वतः बदलता तोच खरा अभ्यास.\n\nअभिनंदन — तुम्ही OOP प्रकल्प पूर्ण केला!",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def total(self):
        return sum(self.marks)

    def average(self):
        return self.total() / len(self.marks)

    def __str__(self):
        return self.name + " (" + str(self.total()) + ")"

class Gradebook:
    def __init__(self):
        self.students = []

    def add_student(self, s):
        self.students.append(s)

    def average(self):
        if not self.students:
            return 0
        return sum(s.average() for s in self.students) / len(self.students)

    def topper(self):
        return max(self.students, key=lambda s: s.total())

    def report(self):
        for s in self.students:
            print(s)
        print("सरासरी:", self.average())

g = Gradebook()
g.add_student(Student("सीमा", [80, 90]))
g.add_student(Student("राम", [70, 60]))
g.report()`,
        codeLanguage: "python",
        output: `सीमा (170)
राम (130)
सरासरी: 75.0`,
      },
      {
        title: "प्रकल्प वरून खाली — पुनरावलोकन",
        content: "प्रकल्पाचं पुनरावलोकन करू. सुरुवात Student वर्गाने — नाव, गुण आणि गणना. मग Gradebook वर्गाने — यादी आणि सामूहिक पद्धती. शेवटी report ने — वापरकर्त्यासाठी अहवाल.\n\nप्रत्येक टप्प्यावर आपण आधीचं ज्ञान वापरलं: __init__ ने वस्तू जन्माला; attributes ने डेटा; methods ने क्रिया; encapsulation ने संरक्षण; magic methods ने रूप. हे सगळं विखुरलेलं ज्ञान एकत्र आल्यावर प्रकल्प उभा राहिला.\n\nया पुनरावलोकनातून एक धडा मिळतो: मोठ्या प्रकल्पांची सुरुवात लहान भागांनी होते. प्रत्येक भाग स्वतंत्रपणे पूर्ण करा, चाचणी करा, मग पुढे जा. अशा रीतीने प्रकल्प एका घटकेच साकार होतो.\n\nआता तुम्ही हाच प्रकल्प वेगळ्या विषयावर बनवू शकता — शिक्षक नोंद, उपस्थिती, निकाल. रचना तीच; फक्त विषय बदलतो.\n\nहीच कौशल्याची खरी परीक्षा.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "OOP प्रकल्पाच्या सखोल अभ्यासासाठी अधिकृत स्रोतांची संपूर्ण यादी:\n\n• classes चं संपूर्ण tutorial: https://docs.python.org/3/tutorial/classes.html\n• data model — special methods: https://docs.python.org/3/reference/datamodel.html\n• property() function: https://docs.python.org/3/library/functions.html#property\n• super() function: https://docs.python.org/3/library/functions.html#super\n• inheritance: https://docs.python.org/3/tutorial/classes.html#inheritance\n• private variables: https://docs.python.org/3/tutorial/classes.html#private-variables\n• glossary मधील object: https://docs.python.org/3/glossary.html#term-object\n• Python style guide: https://peps.python.org/pep-0008/\n• मानक संग्रह (data structures): https://docs.python.org/3/tutorial/datastructures.html\n• Modules व packages: https://docs.python.org/3/tutorial/modules.html\n\nहे sources वाचून आणखी प्रकल्प बनवा. प्रत्येक नवीन प्रकल्प समज वाढवतो — कोड जितका जास्त, शिक्षण तितकं घट्ट.",
      },
    {
        title: "प्रश्नोत्तर — OOP प्रकल्प",
        content: "प्रश्न: प्रकल्प कुठून सुरू करायचा? उत्तर: वर्गांच्या यादीने — कोणती वस्तू, कोणती जबाबदारी.\nप्रश्न: डेटा कुठे ठेवायचा? उत्तर: संबंधित वर्गातच; Gradebook मध्ये फक्त यादी.\nप्रश्न: गणना कोण करे? उत्तर: ज्याचा डेटा त्याची गणना — Student स्वतःची average.\nप्रश्न: चाचणी कधी? उत्तर: प्रत्येक पद्धत लिहिल्यावर लगेच; शेवटपर्यंत थांबू नका.\n\nही उत्तरं पुढील प्रत्येक प्रकल्पात लागू होतील. प्रकल्प उभारणीची हीच खरी शिस्त — विभागणी, जबाबदारी, चाचणी. या तीन पायांवर कोणताही प्रकल्प उभा राहतो.",
        code: `class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def total(self):
        return sum(self.marks)

print(Student("सीमा", [10, 20]).total())`,
        codeLanguage: "python",
        output: `30`,
      },
      {
        title: "समारोप — OOP प्रवास पूर्ण",
        content: "अभिनंदन! तुम्ही Python level 5 पूर्ण केला. वर्ग, वस्तू, __init__, attributes, methods, inheritance, super, overriding, encapsulation, property, polymorphism, magic methods आणि एक पूर्ण प्रकल्प — इतकं शिकलात.\n\nहे ज्ञान आता सरावाने घट्ट करा. दररोज एक छोटा वर्ग लिहा; आठवड्यात एक प्रकल्प. काही महिन्यांत तुम्ही कोणताही Python प्रकल्प वर्गांच्या मदतीने उभारू शकाल.\n\nOOP हा प्रवास नाही — ती एक विचारसरणी आहे. प्रत्येक समस्या वस्तूंमध्ये पाहण्याची सवय लावा. ती सवय तुमचं प्रोग्रामिंग जीवन सुंदर व सुटसुटीत करेल.\n\nपुढील स्तरावर आणखी प्रगत संकल्पना शिकू. तोपर्यंत — सराव, सराव आणि सराव. तुमच्या पुढील प्रवासास शुभेच्छा!",
        code: `print("OOP प्रवास पूर्ण!")`,
        codeLanguage: "python",
        output: `OOP प्रवास पूर्ण!`,
      },
    {
        title: "शेवटचा सल्ला — प्रकल्प आणि सराव",
        content: "शेवटचा सल्ला: शिकलेलं विसरू नका; सराव करत राहा. प्रत्येक प्रकल्पात जुनी तत्त्वं नव्याने वापरा. अशा पुनरावृत्तीनेच कौशल्य घट्ट होते. लक्षात ठेवा — प्रत्येक मोठा programmer एकेकळ प्रकल्पातूनच घडला आहे. तुमचा प्रवास आता सुरू झाला आहे; तो चालू ठेवा. पुढील धड्यात भेटू — शुभेच्छा!",
        code: `print("सराव करत राहा!")`,
        codeLanguage: "python",
        output: `सराव करत राहा!`,
      },
    {
        title: "अखेरची ओळ",
        content: "OOP शिकल्याबद्दल पुन्हा अभिनंदन! हे ज्ञान तुमच्या प्रत्येक प्रकल्पात कामी येईल. सराव सोडू नका; प्रत्येक वर्ग लिहिताना आतापर्यंतची तत्त्वं लक्षात ठेवा. दररोज थोडा सराव, आठवड्यात एक प्रकल्प. शुभेच्छा!",
      },
    ],
    practiceQuestions: [
      "Gradebook च्या आत काय ठेवलं?",
      "average() मध्ये // का वापरलं?",
      "top() काय करतो?",
      "objects सूचीत कसे ठेवतात?",
    ],
    quiz: [
      { question: "सूचीच्या आत काय ठेवतात?", options: ["numbers", "objects", "class", "module"], correct: 1 },
      { question: "average हिशोबात काय वापरतात?", options: ["f-strings", "//", "input", "print"], correct: 1 },
      { question: "प्रोजेक्टमध्ये कोणती कल्पना वापरली?", options: ["सगळ्या OOP", "फक्त loops", "फक्त strings", "काही"], correct: 0 },
    ],
    challenge: {
      prompt: "संघात खेळाडू जोडा व सूची दाखवा.",
      starterCode: `class Team:
    def __init__(self, name):
        self.name = name
        self.players = 0

    def add_player(self):
        self.players += 1
        return self.players

t = Team("मावळे")
t.add_player()
t.add_player()
print(t.name, t.players)`,
      expectedOutput: "मावळे 2",
    },
    interviewQuestions: [
      "या project मध्ये inheritance कुठे बसतं?",
      "OOP वापरल्याने code कसा सुधारतो?",
    ],
    related: ["python-classes", "python-magic-methods", "python-functions"],
    prev: "python-magic-methods",
    next: "python-comprehensions",
  },
];
