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
