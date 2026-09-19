import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 8 — Python Explorations (विस्तार) ===
export const L8_LABEL = "Level 8 — Python Explorations (विस्तार)";

export const pythonLevel8: Tutorial[] = [
  {
    slug: "python-match-case",
    categoryId: "python",
    title: "match-case (Structural Pattern Matching)",
    marathiTitle: "match-case - सोपे नियम नियंत्रण",
    level: "advanced",
    minutes: 14,
    summary: "match statement ने switch सारखे नियंत्रण; patterns, guards, OR.",
    sections: [
      {
        title: "का शिकावे? match-case - सोपे नियम नियंत्रण चे फायदे आणि महत्त्व",
        content: "✓ Menu, आदेश (commands) आणि API चे responses यासारख्या ठिकाणी match खूप उपयोगी ठरतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ अट फक्त pattern जुळल्यानंतरच तपासली जाते — हा क्रम लक्षात ठेवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "match statement म्हणजे काय?",
        content: "match हा Python 3.10 मध्ये जोडलेला statement आहे. switch/case असलेल्या इतर भाषा वापरणाऱ्यांना हे लगेच ओळखता येते: match x: नंतर प्रत्येक शक्यता case मध्ये लिहिली जाते.\n\nकाम कसं होतं? Python x चं मूल्य घेतो आणि case ची मूल्ये वरून खाली तपासतो. जो पहिला case जुळेल त्याचा block चालतो आणि match संपतो. इथे x = 2 असल्याने case 2 जुळतो आणि 'दोन' छापतो. if-elif ची साखळी अवघड व्हायला लागते तेव्हा ही रचना किती सुबक दिसते ते लक्षात येतं.\n\ncase मधला कोड match च्या खाली इंडेंटेशनसह लिहिला जातो — इथेही इंडेंटेशन अर्थपूर्ण आहे.",
        code: `x = 2
match x:
    case 1:
        print("एक")
    case 2:
        print("दोन")`,
        codeLanguage: "python",
        output: `दोन`,
      },
      {
        title: "मूल्य सामने आणि case _:",
        content: "प्रत्येक case एक मूल्य तपासतो — संख्या, मजकूर किंवा काहीही. जुळलेला case चालतो; पुढचे सोडले जातात.\n\ncase _: हा wildcard किंवा default आहे — म्हणजे 'वरील कोणतेही न जुळल्यास हा'. तो शेवटी ठेवतात; तो निवडला गेला म्हणजे मागचे कोणतेही case जुळले नव्हते हे समजतं. इथे विषय हा मजकूर आहे आणि case \"भौतिकशास्त्र\" जुळतो. मजकुराच्या निवडीसारख्या कामांमध्ये हे if-elif पेक्षा जास्त वाचता येण्यासारखं ठरतं.",
        code: `विषय = "भौतिकशास्त्र"
match विषय:
    case "गणित":
        print("गणित विषय")
    case "भौतिकशास्त्र":
        print("भौतिकशास्त्र विषय")
    case _:
        print("इतर")`,
        codeLanguage: "python",
        output: `भौतिकशास्त्र विषय`,
      },
      {
        title: "रचना सामने (structural patterns)",
        content: "match ची खरी ताकद म्हणजे फक्त मूल्य नाही तर data structure ची रचना तपासता येते. case (x, y): असल्यास tuple चे दोन्ही घटक एकत्र सामने होतात — आणि जुळल्यावर ते घटक नावाच्या व्हेरिएबलमध्ये खेचले जातात. list साठी case [a, b]: अशी तपासणी होते.\n\nइथे point = (3, 4) आहे; case (0, 0) जुळत नाही, म्हणून case (x, y) जुळतो आणि x=3, y=4 बांधले जातात. छोट्या text records किंवा API प्रतिसादातील रचना वेगळे करण्यासाठी हे सर्वोत्तम साधन आहे — object च्या attributes ची खोली तपासणारे patterns देखील लिहिता येतात.",
        code: `point = (3, 4)
match point:
    case (0, 0):
        print("मूळ बिंदू")
    case (x, y):
        print(f"x={x}, y={y}")`,
        codeLanguage: "python",
        output: `x=3, y=4`,
      },
      {
        title: "Guards: अटीप्रमाणे निवड",
        content: "Guard म्हणजे case मध्ये जोडलेली अतिरिक्त अट. case n if n > 10: असे लिहिल्यास pattern जुळल्यानंतरही अट खरी असली तरच तो case निवडला जातो.\n\nइथे num = 15 आहे. पहिला case n ला 15 बांधतो; अट n > 10 म्हणजे 15 > 10 खरी असल्याने तो case निवडला जातो आणि 'मोठा' छापते. दुसरा case n कोणतेही मूल्य स्विकारतो, पण त्याला संधीच मिळत नाही. अट फक्त pattern जुळल्यानंतरच तपासली जाते — हा क्रम लक्षात ठेवा.",
        code: `num = 15
match num:
    case n if n > 10:
        print("मोठा")
    case n:
        print("छोटा")`,
        codeLanguage: "python",
        output: `मोठा`,
      },
      {
        title: "एकच case, अनेक मूल्ये (|)",
        content: "एकाच case मध्ये अनेक मूल्ये | ने जोडता येतात: case 1 | 2 | 3: म्हणजे 1, 2 किंवा 3. | हे 'किंवा' सूचित करते.\n\nसमान उपचार असलेल्या मूल्यांसाठी हे लिहिणं सोपे आहे; अन्यथा तोच कोड तीन वेळा लिहावा लागला असता. d = 5 असल्याने case 4 | 5 | 6 जुळतो आणि 'मध्यम' छापता येतो — duplicate logic टाळण्याचा हा सोपा मार्ग आहे.",
        code: `d = 5
match d:
    case 1 | 2 | 3:
        print("छोटा")
    case 4 | 5 | 6:
        print("मध्यम")`,
        codeLanguage: "python",
        output: `मध्यम`,
      },
      {
        title: "Menu आणि commands मध्ये वापर",
        content: "Menu, आदेश (commands) आणि API चे responses यासारख्या ठिकाणी match खूप उपयोगी ठरतो. प्रत्येक शक्यता एका case मध्ये स्पष्ट दिसते आणि case _: ने अज्ञात निवड जपली जाते.\n\nइथे आदेश = \"रन\" मुळे 'कोड चालू' येते. जर आदेश काहीही अन्य असता तर case _: चा block चालला असता. अशा नियंत्रणात if-elif ची नेस्टेड साखळी नाहीशी होते — प्रत्येक निवड एका ओळीत दिसते, विशेषतः API उत्तरावरून कृती ठरवताना हीच पद्धत वापरली जाते.",
        code: `आदेश = "रन"
match आदेश:
    case "रन":
        print("कोड चालू")
    case "स्टॉप":
        print("कोड थांबले")
    case _:
        print("अज्ञात")`,
        codeLanguage: "python",
        output: `कोड चालू`,
      },
      {
        title: "Mini Project: ATM मेन्यू",
        content: "चार पर्याय असलेला ATM मेन्यू match ने बनवतो. निवड या व्हेरिएबलमध्ये वापरकर्त्याची निवड असते — इथे उदाहरणासाठी 2 घेतले आहे.\n\ncase 1: पैसे काढणे; case 2: शिल्लक तपासणे; case 3: पैसे जमा करणे; आणि बाकी कोणताही क्रमांक आला तर case _: मध्ये 'अवैध निवड' दाखवतो. निवड = 2 असल्याने output मध्ये 'शिल्लक तपासा' येते. अशाप्रकारे संपूर्ण menu एकाच match statement मध्ये बसवता येतो.",
        code: `निवड = 2
match निवड:
    case 1:
        print("पैसे काढा")
    case 2:
        print("शिल्लक तपासा")
    case 3:
        print("पैसे जमा")
    case _:
        print("अवैध निवड")`,
        codeLanguage: "python",
        output: `शिल्लक तपासा`,
      },
    ],
    practiceQuestions: [
      "match statement कसे वापरायचे?",
      "case _: म्हणजे काय?",
      "guard म्हणजे काय?",
    ],
    quiz: [
      { question: "match कशासाठी?", options: ["नियम नियंत्रण", "delete", "import", "sort"], correct: 0 },
      { question: "case _: म्हणजे?", options: ["डीफॉल्ट", "list", "error", "skip"], correct: 0 },
      { question: "OR चिन्ह काय?", options: ["|", "+", "#", "@"], correct: 0 },
    ],
    challenge: {
      prompt: "दिवसाच्या नावासाठी match",
      starterCode: `d = "गुरु"
match d:
    case "गुरु":
        print("गुरुवार")`,
      expectedOutput: "गुरुवार",
    },
    interviewQuestions: [
      "match केव्हा वापरायचे?",
      "pattern म्हणजे काय?",
    ],
    related: ["python-functions-advanced", "python-context-managers"],
    prev: "python-practical-project",
    next: "python-context-managers",
  },
  {
    slug: "python-context-managers",
    categoryId: "python",
    title: "Context Managers (with statement)",
    marathiTitle: "Context Managers - with वापर",
    level: "advanced",
    minutes: 14,
    summary: "with statement ने resources आपोआप बंद; __enter__/__exit__ आणि contextlib.",
    sections: [
      {
        title: "का शिकावे? Context Managers - with वापर चे फायदे आणि महत्त्व",
        content: "✓ अनेक वेळा संपूर्ण वर्ग लिहिण्याची गरज नसते.\n✓ open() फाईल उघडते आणि with block संपल्यावर close() आपोआप होतो — म्हणून close लिहायची आठवण ठेवणे याची गरजच उरत नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ __exit__ ला three गोष्टी मिळतात: चुकीचा प्रकार (exception type), तिचे मूल्य आणि traceback.\n✗ लक्षात ठेवा: True परत करणे धोकादायक आहे; ती चूक दडपल्यास कोड का थांबला हे कळत नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "with म्हणजे काय?",
        content: "फाईल, लॉक, network connection यांसारख्या resources ला वापरल्यावर बंद करणे आवश्यक असते; नाही केले तर data गळतो. with statement ही जबाबदारी स्वतः घेतो — block संपला की resource आपोआप बंद होतो. try-finally मध्ये किती व्यवस्थित finally असे लिहावे लागते ते इथे नाहीसे होते.\n\nइथे StringIO हा memory मधील मजकूर buffer आहे. with block मध्ये s.write('आतून लिहिले') ने मजकूर बसतो आणि नंतर getvalue() ने तो परत मिळतो. फाईल handle गळती ही दीर्घ चालणाऱ्या programs ची नेहमीची समस्या असते; resources आपोआप बंद होण्यासाठी with ही Python मधील ठरलेली पद्धत आहे.",
        code: `from io import StringIO
with StringIO() as s:
    s.write("आतून लिहिले")
    txt = s.getvalue()
print(txt)`,
        codeLanguage: "python",
        output: `आतून लिहिले`,
      },
      {
        title: "__enter__ आणि __exit__",
        content: "स्वतःचा context manager बनवण्यासाठी दोन पद्धती लागतात. __enter__: with block चालू होत असताना एकदा चालतो आणि as ने मिळणारे मूल्य परत करतो. __exit__: block संपल्यावर चालतो — काम सामान्यपणे संपले तरी किंवा चूक झाली तरीही, दोन्ही प्रसंगी.\n\nLog वर्गाने पाहू: with Log(): मध्ये 'सुरू' छापले जाते, block मधला 'मध्ये' मुद्रित होतो आणि block संपल्यावर __exit__ मधून 'शेवट' छापते. हीच सुरू/शेवट जोडी प्रत्येक resource सोबत आपोआप काम करते — बाहेरचा कोड त्यात लुडबूड करत नाही.",
        code: `class Log:
    def __enter__(self):
        print("सुरू")
        return self
    def __exit__(self, *a):
        print("शेवट")
with Log():
    print("मध्ये")`,
        codeLanguage: "python",
        output: `सुरू
मध्ये
शेवट`,
      },
      {
        title: "चूक हाताळणे (__exit__)",
        content: "__exit__ ला three गोष्टी मिळतात: चुकीचा प्रकार (exception type), तिचे मूल्य आणि traceback. त्यामुळे block मध्ये काही चूक झाली तरी आपल्याला ती समजते.\n\n__exit__ ने True परत केले तर ती चूक 'गिळली' जाते — म्हणजे ती बाहेर पसरत नाही. False (किंवा None) परत केले तर चूक नेहमीप्रमाणे वर पोहोचते. इथे Safe च्या __exit__ मध्ये चूक प्रकार छापून True परत केले, त्यामुळे ValueError झाला तरी तो दिलासा झाला नाही.\n\nलक्षात ठेवा: True परत करणे धोकादायक आहे; ती चूक दडपल्यास कोड का थांबला हे कळत नाही. सामान्य वापरात चूक दाबायची असेल तरच ते करावे.",
        code: `class Safe:
    def __enter__(self):
        return self
    def __exit__(self, t, exc, tb):
        if t:
            print("चूक प्रकार:", t.__name__)
        return True
with Safe():
    raise ValueError("जाणूनबुजून")`,
        codeLanguage: "python",
        output: `चूक प्रकार: ValueError`,
      },
      {
        title: "contextmanager सजावट",
        content: "अनेक वेळा संपूर्ण वर्ग लिहिण्याची गरज नसते. contextlib मधील @contextmanager सजावटीने तयार केलेला generator function पुरेसा आहे. yield च्या आधीचा भाग __enter__ सारखा आणि नंतरचा भाग __exit__ सारखा चालतो.\n\nvyavahar() मध्ये 'उघडले' छापले जाते, yield ने नियंत्रण block ला दिले जाते, block मधला 'काम चालू' मुद्रित होतो आणि शेवटी 'बंद केले' छापले जाते. छोट्या-मध्यम कामांसाठी ही पद्धत खूपच कमी कोड मागते आणि प्रवाह स्पष्ट दिसतो.",
        code: `from contextlib import contextmanager
@contextmanager
def vyavahar():
    print("उघडले")
    yield
    print("बंद केले")
with vyavahar():
    print("काम चालू")`,
        codeLanguage: "python",
        output: `उघडले
काम चालू
बंद केले`,
      },
      {
        title: "फायलींसोबत with",
        content: "फाईल वाचन-लेखन हा with चा सर्वात सामान्य वापर आहे. open() फाईल उघडते आणि with block संपल्यावर close() आपोआप होतो — म्हणून close लिहायची आठवण ठेवणे याची गरजच उरत नाही.\n\nइथे tempfile.gettempdir() मधील demo_v8.txt मध्ये 'मराठी' लिहिले आणि नंतर तीच फाईल वाचून छापली. लेखनासाठी open(p, \"w\") आणि वाचनासाठी open(p) — दोन्ही with ने व्यवस्थित बंद होतात. handle गळती संपते आणि memory सुरक्षित राहते.",
        code: `import tempfile, os
p = os.path.join(tempfile.gettempdir(), "demo_v8.txt")
with open(p, "w") as f:
    f.write("मराठी")
with open(p) as f:
    print(f.read())`,
        codeLanguage: "python",
        output: `मराठी`,
      },
      {
        title: "लॉक आणि database transaction",
        content: "threading.Lock हा देखील context manager protocol पाळतो. with lock: block मध्ये thread सुरक्षितपणे काम करतो आणि block बाहेर पडल्यावर lock आपोआप सोडला जातो. मॅन्युअल acquire()/release() मध्ये release विसरल्यास deadlock होऊ शकतो — with हा धोका काढतो.\n\nत्याचप्रमाणे डेटाबेस transaction ची सुरूवात आणि शेवट हा देखील जोडीचा काम आहे. 'सुरूवात आणि शेवट नेहमी जोडीने' या तत्त्वाने जे काही जोडीत चालते तिथे सर्वत्र with लागू होतो — race condition टाळण्याची हीच खात्री असते.",
        code: `import threading
lock = threading.Lock()
with lock:
    print("सुरक्षित क्षेत्र")`,
        codeLanguage: "python",
        output: `सुरक्षित क्षेत्र`,
      },
      {
        title: "Mini Project: खाते व्यवहार",
        content: "खाते व्यवहाराची सुरूवात-शेवट with ने सांभाळतो. __enter__ 'खाते उघडले' छापून स्वतःला परत करतो; मधला block 'रक्कम बदलली' नोंदवतो; आणि __exit__ शेवटी 'खाते बंद' छापतो.\n\nTransaction वर्गातील output क्रम: खाते उघडले → रक्कम बदलली → खाते बंद. याच रचनेत database transaction ठेवल्यास अपयशाच्या वेळी अपूर्ण बदल झाल्याची स्थिती टाळता येते — एकतर संपूर्ण काम होते, किंवा काहीच होत नाही.",
        code: `class Transaction:
    def __enter__(self):
        print("खाते उघडले")
        return self
    def __exit__(self, t, e, tb):
        print("खाते बंद")
        return True
with Transaction():
    print("रक्कम बदलली")`,
        codeLanguage: "python",
        output: `खाते उघडले
रक्कम बदलली
खाते बंद`,
      },
    ],
    practiceQuestions: [
      "with statement कशासाठी?",
      "__exit__ काय करते?",
      "contextmanager सजावट?",
    ],
    quiz: [
      { question: "with कशासाठी?", options: ["resource बंद", "delete", "import", "print"], correct: 0 },
      { question: "__exit__ True दिले तर?", options: ["चूक गिळती", "चूक", "अडकले", "skip"], correct: 0 },
      { question: "फाईलसाठी with?", options: ["आपोआप बंद", "data", "dict", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "फाईल वाचण्यासाठी with",
      starterCode: `with open("demo.txt", "w") as f:
    f.write("हाय")`,
      expectedOutput: "",
    },
    interviewQuestions: [
      "context manager केव्हा लिहायचा?",
      "with न वापरल्यास काय?",
    ],
    related: ["python-advanced-files", "python-functions-advanced"],
    prev: "python-match-case",
    next: "python-type-hints",
  },
  {
    slug: "python-type-hints",
    categoryId: "python",
    title: "Type Hints (प्रकार खुणा)",
    marathiTitle: "Type Hints - प्रकार खुणा",
    level: "advanced",
    minutes: 14,
    summary: "hints ने प्रकार स्पष्ट; annotations, Optional, TypedDict.",
    sections: [
      {
        title: "का शिकावे? Type Hints - प्रकार खुणा चे फायदे आणि महत्त्व",
        content: "✓ सहकार्यासाठी महत्त्वाचे — संग्रह प्रकार लिहिणे editor ला स्पष्ट सूचना देते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ हे runtime मध्ये अंमलात येत नाही; साधने (editors) चुका उचलतात आणि स्पष्ट दस्तऐवज म्हणून काम करते.\n✗ साधने (IDE) या माहितीवरून चुका शोधतात.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "type hint म्हणजे प्रकाराची खूण. def f(x: int) -> str: असे लिहितात. हे runtime मध्ये अंमलात येत नाही; साधने (editors) चुका उचलतात आणि स्पष्ट दस्तऐवज म्हणून काम करते.",
        code: `def दुप्पट(x: int) -> int:
    return x * 2
print(दुप्पट(4))`,
        codeLanguage: "python",
        output: `8`,
      },
      {
        title: "संग्रह प्रकार",
        content: "list[int] म्हणजे int ची list; dict[str, int] म्हणजे की-मूल्य जोडी. उदाहरणार्थ marks table वापरून पहा. सहकार्यासाठी महत्त्वाचे — संग्रह प्रकार लिहिणे editor ला स्पष्ट सूचना देते.",
        code: `marks: dict[str, int] = {"वेद": 85, "मीरा": 90}
print(sum(marks.values()))`,
        codeLanguage: "python",
        output: `175`,
      },
      {
        title: "__annotations__",
        content: "प्रकार माहिती __annotations__ dict मध्ये उपलब्ध असते. साधने (IDE) या माहितीवरून चुका शोधतात. introspection ने तपासता येते.",
        code: `def stale(x: int, y: str) -> bool:
    return True
a = stale.__annotations__
print(a["x"])`,
        codeLanguage: "python",
        output: `<class 'int'>`,
      },
      {
        title: "Optional आणि Union",
        content: "Optional म्हणजे मूल्य किंवा None — नाव कधीही None असू शकेल. Union म्हणजे एकापेक्षा जास्त प्रकार. सुरक्षित defaults ठेवता येतात.",
        code: `from typing import Optional
def नाव(n: Optional[str] = None) -> str:
    return n or "अनाम"
print(नाव())`,
        codeLanguage: "python",
        output: `अनाम`,
      },
      {
        title: "TypeAlias",
        content: "लांब प्रकारांना नाव देता येते — Vekta: TypeAlias = list[float]. वाचनीयता वाढते; एकदा निर्माण करा, अनेकदा वापरा.",
        code: `from typing import TypeAlias
Vekta: TypeAlias = list[float]
def बेरीज(v: Vekta) -> float:
    return sum(v)
print(बेरीज([1.5, 2.5]))`,
        codeLanguage: "python",
        output: `4.0`,
      },
      {
        title: "TypedDict",
        content: "dict ची रचना स्पष्ट करते — कुठले key चा प्रकार कोणता. डेटा record मध्ये वापर; runtime मध्ये तेच dict राहते.",
        code: `from typing import TypedDict
class Vidya(TypedDict):
    नाव: str
    गुण: int
v: Vidya = {"नाव": "अदिती", "गुण": 88}
print(f"{v['नाव']} यांना {v['गुण']} गुण")`,
        codeLanguage: "python",
        output: `अदिती यांना 88 गुण`,
      },
      {
        title: "Mini Project",
        content: "विद्यार्थी नोंदी टाइप करा — TypedDict ने इनपुट, def ने प्रकार.",
        code: `from typing import TypedDict, List
class Marks(TypedDict):
    नाव: str
    गुण: List[int]
m: Marks = {"नाव": "राहुल", "गुण": [80, 90]}
print(m["नाव"], sum(m["गुण"]))`,
        codeLanguage: "python",
        output: `राहुल 170`,
      },
    ],
    practiceQuestions: [
      "type hint काय देतात?",
      "Optional म्हणजे?",
      "__annotations__ कुठे?",
    ],
    quiz: [
      { question: "hints कधी तपासतात?", options: ["साधनांनी", "रनटाईम", "नेहमी", "कधीही"], correct: 0 },
      { question: "Optional[str] म्हणजे?", options: ["str किंवा None", "str", "list", "int"], correct: 0 },
      { question: "TypedDict कशासाठी?", options: ["dict रचना", "delete", "import", "sort"], correct: 0 },
    ],
    challenge: {
      prompt: "वय टाइप करून दाखवा",
      starterCode: `def वय(n: int) -> int:
    return n + 1
print(वय(40))`,
      expectedOutput: "41",
    },
    interviewQuestions: [
      "hints अनिवार्य आहेत का?",
      "TypedDict वि dataclass?",
    ],
    related: ["python-context-managers", "python-dataclasses"],
    prev: "python-context-managers",
    next: "python-advanced-files",
  },
  {
    slug: "python-advanced-files",
    categoryId: "python",
    title: "XML आणि Binary Files",
    marathiTitle: "XML आणि Binary Files",
    level: "advanced",
    minutes: 14,
    summary: "XML पार्सिंग, bytes, struct, base64; फाईल हाताळणी.",
    sections: [
      {
        title: "का शिकावे? XML आणि Binary Files चे फायदे आणि महत्त्व",
        content: "\"XML आणि Binary Files\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "मजकुरासोबतच XML आणि binary फायली. XML म्हणजे structure मध्ये डेटा; binary म्हणजे bytes मध्ये. दोन्ही software मध्ये सर्वत्र वापरल्या जातात.",
        code: `b = "मराठी".encode("utf-8")
print(len(b))`,
        codeLanguage: "python",
        output: `15`,
      },
      {
        title: "Binary write/read",
        content: "struct ने संख्यांच्या bytes तयार होतात. pack म्हणजे bytes मध्ये बदल; unpack म्हणजे परत संख्या. data सुबक आणि कॉम्पॅक्ट — फॉरमॅट्स जसे \"ii\" वापरतात.",
        code: `import struct
data = struct.pack("ii", 7, 8)
print(struct.unpack("ii", data))`,
        codeLanguage: "python",
        output: `(7, 8)`,
      },
      {
        title: "XML पार्सिंग",
        content: "ElementTree ने XML सोपे. fromstring ने string वाचतो; find ने मूल शोधतो; .text ने मजकूर मिळतो. संगणकांची देवाणघेवाण.",
        code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<व्यक्ती><नाव>वेद</नाव></व्यक्ती>")
print(root.find("नाव").text)`,
        codeLanguage: "python",
        output: `वेद`,
      },
      {
        title: "Attributes आणि iterate",
        content: "XML मध्ये attributes असतात — get(\"toc\") ने मूल्य मिळतो. मुले iterate करता येतात; list(root) ने सर्व मुले मिळतात. गणना आणि फिल्टर.",
        code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<वर्ग><च toc='1'/><च toc='2'/></वर्ग>")
print([c.get("toc") for c in root])`,
        codeLanguage: "python",
        output: `['1', '2']`,
      },
      {
        title: "bytearray आणि bytes",
        content: "bytes न बदलता येतात; bytearray बदलता येते. memoryview खूप मोठ्या डेटासाठी. network आणि files मध्ये bytes एका रूपात दुसऱ्या मध्ये बदलतात.",
        code: `ba = bytearray([65, 66, 67])
print(bytes(ba))`,
        codeLanguage: "python",
        output: `b'ABC'`,
      },
      {
        title: "base64",
        content: "binary डेटा मजकुरात बदलते — email, JSON मध्ये ठेवता येते. b64encode ने बदल, b64decode ने परत. डेटा सुरक्षित ठेवत नाही, फक्त रूप बदलते.",
        code: `import base64
e = base64.b64encode(b"hello")
print(base64.b64decode(e) == b"hello")`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "Mini Project",
        content: "XML गणना + binary लांबी: XML च्या मुलांची गणना करा; binary लांबी मोजा.",
        code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<ताळा><मद/><मद/><मद/></ताळा>")
print(len(list(root)))
b = "गणित".encode("utf-8")
print(len(b))`,
        codeLanguage: "python",
        output: `3
12`,
      },
    ],
    practiceQuestions: [
      "XML कशासाठी?",
      "struct.pack काय करते?",
      "base64 कशासाठी?",
    ],
    quiz: [
      { question: "XML वाचण्यासाठी module?", options: ["xml.etree", "numpy", "csv", "os"], correct: 0 },
      { question: "bytes न बदलणारे काय?", options: ["bytes", "bytearray", "list", "set"], correct: 0 },
      { question: "binary ला मजकुरात?", options: ["base64", "hashlib", "csv", "json"], correct: 0 },
    ],
    challenge: {
      prompt: "XML च्या नावाचा मजकूर",
      starterCode: `import xml.etree.ElementTree as ET
r = ET.fromstring("<पॉप><नाव/></पॉप>")`,
      expectedOutput: "None",
    },
    interviewQuestions: [
      "XML वि JSON?",
      "binary का कॉम्पॅक्ट?",
    ],
    related: ["python-type-hints", "python-csv-json"],
    prev: "python-type-hints",
    next: "python-sqlite-databases",
  },
  {
    slug: "python-sqlite-databases",
    categoryId: "python",
    title: "Databases - SQLite",
    marathiTitle: "Databases - SQLite मध्ये",
    level: "advanced",
    minutes: 14,
    summary: "sqlite3 ने table, CRUD, parametrized queries, aggregation.",
    sections: [
      {
        title: "का शिकावे? Databases - SQLite मध्ये चे फायदे आणि महत्त्व",
        content: "\"Databases - SQLite मध्ये\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ WHERE ने फक्त लक्ष्य — चुका रोखण्यासाठी प्रत्येक वेळी WHERE.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "डेटाबेस म्हणजे व्यवस्थित डेटा — SQLite फाईल-आधारित डेटाबेस; python मध्ये sqlite3 समाविष्ट. :memory: ने RAM मध्ये तात्काळ.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
print(con.total_changes)`,
        codeLanguage: "python",
        output: `0`,
      },
      {
        title: "Table तयार करणे",
        content: "कॉलम आणि प्रकार ठरवतात — TEXT मजकूर, INT संख्या. प्रत्येक रांग नोंद; सुरुवातीला साधी रचना.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE विद्यार्थी(नाव TEXT, गुण INT)")
print([r[0] for r in con.execute("SELECT name FROM sqlite_master WHERE type='table'")])`,
        codeLanguage: "python",
        output: `['विद्यार्थी']`,
      },
      {
        title: "INSERT आणि SELECT",
        content: "INSERT ने रांगा जोडतो; executemany ने अनेक एकत्र. SELECT ने वाचता; ORDER BY ने लागण क्रम. हे core वाचन-लेखन.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE विद्यार्थी(नाव TEXT, गुण INT)")
con.executemany("INSERT INTO विद्यार्थी VALUES (?, ?)", [("मीरा", 90), ("वेद", 85)])
for r in con.execute("SELECT नाव, गुण FROM विद्यार्थी ORDER BY गुण DESC"):
    print(r)`,
        codeLanguage: "python",
        output: `('मीरा', 90)
('वेद', 85)`,
      },
      {
        title: "Parametrized queries",
        content: "? placeholders सुरक्षित असतात — वापरकर्त्याच्या डेटाला अडवतात; SQL injection थांबते. string जोडण्यापेक्षा नेहमी ? वापरा.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(नाव TEXT)")
con.execute("INSERT INTO t VALUES (?)", ("ओम",))
print(con.execute("SELECT * FROM t WHERE नाव=?", ("ओम",)).fetchall())`,
        codeLanguage: "python",
        output: `[('ओम',)]`,
      },
      {
        title: "UPDATE आणि DELETE",
        content: "UPDATE ने मूल्य बदलते; DELETE ने रांगा निघतात. WHERE ने फक्त लक्ष्य — चुका रोखण्यासाठी प्रत्येक वेळी WHERE.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(g INT)")
con.executemany("INSERT INTO t VALUES (?)", [(5,), (9,)])
con.execute("UPDATE t SET g = g + 1 WHERE g = 5")
print(list(con.execute("SELECT g FROM t ORDER BY g")))`,
        codeLanguage: "python",
        output: `[(6,), (9,)]`,
      },
      {
        title: "Aggregates",
        content: "SUM, COUNT, AVG सारखी गणना — डेटाबेसच आकडे मोजतो. fetchone ने एक परिणाम. जलद आणि शक्तिशाली, अहवालांसाठी उत्तम.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(v INT)")
con.executemany("INSERT INTO t VALUES (?)", [(10,), (20,), (30,)])
print(con.execute("SELECT SUM(v), COUNT(*) FROM t").fetchone())`,
        codeLanguage: "python",
        output: `(60, 3)`,
      },
      {
        title: "Mini Project",
        content: "गुणांचा डेटाबेस — नोंदी घाला, सर्वोच्च शोधा. ORDER BY DESC LIMIT 1.",
        code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE गुण(नाव TEXT, m INT)")
con.executemany("INSERT INTO गुण VALUES (?, ?)", [("अदिती", 95), ("रोहन", 88), ("स्वरा", 92)])
नाव, म = con.execute("SELECT नाव, m FROM गुण ORDER BY m DESC LIMIT 1").fetchone()
print(f"{नाव}: {म}")`,
        codeLanguage: "python",
        output: `अदिती: 95`,
      },
    ],
    practiceQuestions: [
      "sqlite3 कशासाठी?",
      "? placeholder काय करते?",
      "ORDER BY कशासाठी?",
    ],
    quiz: [
      { question: "RAM मधील डेटाबेस?", options: [":memory:", ":disk:", ":ram:", ":file:"], correct: 0 },
      { question: "SQL injection रोकण्यासाठी?", options: ["?", "+", "format", "%"], correct: 0 },
      { question: "सर्वोच्च मूल्य?", options: ["ORDER BY DESC", "DELETE", "UPDATE", "DROP"], correct: 0 },
    ],
    challenge: {
      prompt: "टेबल तयार करा आणि एक रांग",
      starterCode: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE m(v INT)")
con.execute("INSERT INTO m VALUES (?)", (7,))
print(con.execute("SELECT v FROM m").fetchall())`,
      expectedOutput: "[(7,)]",
    },
    interviewQuestions: [
      "SQLite चे फायदे?",
      "commit कधी लागते?",
    ],
    related: ["python-advanced-files", "python-csv-json"],
    prev: "python-advanced-files",
    next: "python-web-flask",
  },
  {
    slug: "python-web-flask",
    categoryId: "python",
    title: "Web App - Flask",
    marathiTitle: "Web App - Flask मध्ये",
    level: "advanced",
    minutes: 14,
    summary: "Flask ने routes, dynamic URLs, methods, JSON.",
    sections: [
      {
        title: "का शिकावे? Web App - Flask मध्ये चे फायदे आणि महत्त्व",
        content: "\"Web App - Flask मध्ये\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "Flask ही हलकी web framework — छोट्या ते मध्यम apps साठी. पायथनमध्ये web server बनवते. Django ही मोठी framework; Flask साधी.",
        code: `from flask import Flask
app = Flask(__name__)
print(type(app).__name__)`,
        codeLanguage: "python",
        output: `Flask`,
      },
      {
        title: "Routes",
        content: "@app.route(\"/\") ने पत्ता ठरवतो; खालील function प्रतिसाद देतो — याला view function म्हणतात. ब्राउझरला मजकूर मिळतो.",
        code: `from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "नमस्कार"
print(home())`,
        codeLanguage: "python",
        output: `नमस्कार`,
      },
      {
        title: "Dynamic URLs",
        content: "<name> म्हणजे बदलते मूल्य; \"<int:x>\" फक्त संख्या. URL मधून आकडा webserver ला मिळतो — प्रत्येक विनंतीला वेगळे मूल्य, व्यक्तिगत पाने तयार.",
        code: `from flask import Flask
app = Flask(__name__)
@app.route("/गुण/<int:score>")
def score(score):
    return f"तुमचे गुण: {score}"
print(score(92))`,
        codeLanguage: "python",
        output: `तुमचे गुण: 92`,
      },
      {
        title: "Methods",
        content: "GET वाचतो, POST नोंदवतो. methods list मध्ये परवाने दिले जातात. form पाठवण्यासाठी POST — योग्य method योग्य कामासाठी.",
        code: `from flask import Flask
app = Flask(__name__)
@app.route("/x", methods=["GET", "POST"])
def x():
    return "1"
rules = [r for r in app.url_map.iter_rules() if r.endpoint == "x"][0]
print("GET" in rules.methods and "POST" in rules.methods)`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "JSON प्रतिसाद",
        content: "API साठी jsonify वापरतात — dict मध्ये डेटा भरून ब्राउझर/अॅपला JSON मिळतो. आधुनिक सिस्टमची भाषा.",
        code: `from flask import Flask, jsonify
app = Flask(__name__)
@app.route("/api")
def api():
    return jsonify(nama="मराठी", level=8)
with app.app_context():
    print(api().get_json() == {"nama": "मराठी", "level": 8})`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "टेम्पलेट",
        content: "टेम्पलेट मध्ये HTML आणि data वेगळे असतात — पृष्ठाची रचना वेगळी, फक्त जागतिक data बदलतो. render_template ने स्वच्छ वेगळेपणा.",
        code: `नम = "आरोही"
पृष्ठ = f"<h1>नमस्कार {नम}</h1>"
print(पृष्ठ)`,
        codeLanguage: "python",
        output: `<h1>नमस्कार आरोही</h1>`,
      },
      {
        title: "Mini Project",
        content: "दोन पानांची mini site — /home आणि /about. प्रत्येकाला वेगळा मजकूर.",
        code: `from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "होम"
@app.route("/about")
def about():
    return "बद्दल"
print(home(), about())`,
        codeLanguage: "python",
        output: `होम बद्दल`,
      },
    ],
    practiceQuestions: [
      "Flask कशासाठी?",
      "route म्हणजे?",
      "POST कधी?",
    ],
    quiz: [
      { question: "Flask म्हणजे?", options: ["web framework", "डेटाबेस", "compiler", "editor"], correct: 0 },
      { question: "डायनॅमिक URL?", options: ["<name>", "#id", "@", "//"], correct: 0 },
      { question: "API output?", options: ["JSON", "bytecode", "obj", "asm"], correct: 0 },
    ],
    challenge: {
      prompt: "गुणांचा route तयार करा",
      starterCode: `from flask import Flask
app = Flask(__name__)
@app.route("/marks/<int:m>")
def marks(m):
    return str(m)
print(marks(50))`,
      expectedOutput: "50",
    },
    interviewQuestions: [
      "Flask वि Django?",
      "server कसा चालवतात?",
    ],
    related: ["python-rest-api", "python-functions-advanced"],
    prev: "python-sqlite-databases",
    next: "python-rest-api",
  },
  {
    slug: "python-rest-api",
    categoryId: "python",
    title: "REST API - FastAPI",
    marathiTitle: "REST API - FastAPI मध्ये",
    level: "advanced",
    minutes: 14,
    summary: "FastAPI ने routes, params, status, body; REST आणि auth संकल्पना.",
    sections: [
      {
        title: "का शिकावे? REST API - FastAPI मध्ये चे फायदे आणि महत्त्व",
        content: "\"REST API - FastAPI मध्ये\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ type hint int प्रमाणित करते — चुकीचा प्रकार 422 error.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "REST म्हणजे API तयार करण्याची पद्धत. FastAPI आधुनिक framework — स्वयंचलित documentation, type hints वापरते. webby सेवांसाठी सर्वोत्तम.",
        code: `from fastapi import FastAPI
app = FastAPI()
print(type(app).__name__)`,
        codeLanguage: "python",
        output: `FastAPI`,
      },
      {
        title: "GET route",
        content: "@app.get(\"/हेलो\") ने वाचन route; async function ने प्रतिसाद. dict परत केले कि JSON मिळते.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/हेलो")
async def hello():
    return {"sha": "नमस्कार"}
import asyncio
print(asyncio.run(hello()))`,
        codeLanguage: "python",
        output: `{'sha': 'नमस्कार'}`,
      },
      {
        title: "Path parameters",
        content: "URL मध्ये <score> सारखे placeholders. type hint int प्रमाणित करते — चुकीचा प्रकार 422 error. स्पष्ट आणि सुरक्षित.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/गुण/{score}")
async def score(score: int):
    return {"गुण": score}
import asyncio
print(asyncio.run(score(88)))`,
        codeLanguage: "python",
        output: `{'गुण': 88}`,
      },
      {
        title: "Query parameters",
        content: "?q= मधील values फिल्टर करण्यासाठी — search API सारखे. query default असू शकते.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/search")
async def search(q: str = "सर्व"):
    return {"q": q}
import asyncio
print(asyncio.run(search()))`,
        codeLanguage: "python",
        output: `{'q': 'सर्व'}`,
      },
      {
        title: "Status codes",
        content: "HTTP status ठरवतात — 200 यश, 404 नाही सापडला, 401 अनधिकृत, 403 निषिद्ध. status_code parameter ने सेट करतात.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/ok", status_code=200)
async def ok():
    return {"st": "ठीक"}
r = [ro for ro in app.routes if getattr(ro, "path", "") == "/ok"][0]
print(r.status_code)`,
        codeLanguage: "python",
        output: `200`,
      },
      {
        title: "POST आणि Auth",
        content: "POST ने नोंदवतो — body मध्ये data. auth म्हणजे ओळख पडताळणी; token ने वापरकर्ता सिद्ध. dict ने सोपे उदाहरण.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.post("/माल")
async def add(m: dict):
    return m["नाव"]
import asyncio
print(asyncio.run(add({"नाव": "कलम"})))`,
        codeLanguage: "python",
        output: `कलम`,
      },
      {
        title: "Mini Project",
        content: "दोन endpoints: /a आणि /b दोन data मूल्ये. paths sorted छापा.",
        code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/a")
async def a():
    return {"z": 1}
@app.get("/b")
async def b():
    return {"z": 2}
paths = [r.path for r in app.routes if r.path in ("/a", "/b")]
print(sorted(paths))`,
        codeLanguage: "python",
        output: `['/a', '/b']`,
      },
    ],
    practiceQuestions: [
      "REST म्हणजे?",
      "status 401?",
      "path vs query param?",
    ],
    quiz: [
      { question: "REST म्हणजे?", options: ["API पद्धत", "compiler", "game", "editor"], correct: 0 },
      { question: "401 म्हणजे?", options: ["अनधिकृत", "यश", "अस्तित्व", "खराब"], correct: 0 },
      { question: "URL मधील मूल्य?", options: ["path param", "import", "class", "loop"], correct: 0 },
    ],
    challenge: {
      prompt: "statatus 201 return",
      starterCode: `from fastapi import FastAPI
app = FastAPI()
@app.post("/कलम", status_code=201)
async def add():
    return {"ok": True}
import asyncio
async def main():
    return await add()
print(asyncio.run(main()))`,
      expectedOutput: "{'ok': True}",
    },
    interviewQuestions: [
      "FastAPI ने REST कसा?",
      "auth कसे करतात?",
    ],
    related: ["python-web-flask", "python-security"],
    prev: "python-web-flask",
    next: "python-data-analysis",
  },
  {
    slug: "python-data-analysis",
    categoryId: "python",
    title: "Data Analysis - numpy",
    marathiTitle: "Data Analysis - numpy आणि CSV",
    level: "advanced",
    minutes: 14,
    summary: "numpy stats, filtering, reshape; CSV वाचन; pandas संकल्पना.",
    sections: [
      {
        title: "का शिकावे? Data Analysis - numpy आणि CSV चे फायदे आणि महत्त्व",
        content: "\"Data Analysis - numpy आणि CSV\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "डेटा विश्लेषण म्हणजे आकड्यांत अर्थ. numpy सध्या स्थापित, वेगवान गणना. pandas तक्ते पण numpy वरील. CSV ही सारणी रूप.",
        code: `import numpy as np
a = np.array([1, 2, 3])
print(a.sum())`,
        codeLanguage: "python",
        output: `6`,
      },
      {
        title: "सांख्यिकी",
        content: "mean सरासरी, std विचलन — मोजमाप ते किती विखुरले. गुणांचा अभ्यास; round ने स्वच्छ output, निर्णयासाठी आधार.",
        code: `import numpy as np
m = np.array([70, 85, 90, 75])
print(round(float(m.mean()), 1))`,
        codeLanguage: "python",
        output: `80.0`,
      },
      {
        title: "फिल्टर आणि निवड",
        content: "a[a > 10] ने अट — फक्त दिलेल्या निकषांचे डेटा मिळतात. मोठ्या सारण्यांतून छोटा कळस, quick insight.",
        code: `import numpy as np
a = np.array([5, 12, 8, 20])
print(a[a > 10].tolist())`,
        codeLanguage: "python",
        output: `[12, 20]`,
      },
      {
        title: "reshape",
        content: "डेटाला आकार द्या — reshape(2, 3) ने table. axis ने दिशेने बेरीज. -1 वापरल्यास Python स्वतः मोजतो — image pixels सारखे लवचिक.",
        code: `import numpy as np
print(np.arange(6).reshape(2, 3).sum(axis=1).tolist())`,
        codeLanguage: "python",
        output: `[3, 12]`,
      },
      {
        title: "CSV वाचन",
        content: "गुणांच्या आकड्यांचा बेरीज — table डेटासाठी CSV मानक.",
        code: `import csv, io
data = io.StringIO("नाव,गुण\nमीरा,90\nवेद,85\n")
rows = list(csv.DictReader(data))
print(sum(int(r["गुण"]) for r in rows))`,
        codeLanguage: "python",
        output: `175`,
      },
      {
        title: "Pandas संकल्पना",
        content: "pandas मध्ये DataFrame हा तक्ता — pip install pandas. numpy सोबत सुसंगत. येथे numpy ने मूळ तर्क; पुढची पायरी pandas.",
        code: `import numpy as np
गुण = np.array([90, 85, 92])
print(f"सरासरी: {गुण.mean():.1f}")`,
        codeLanguage: "python",
        output: `सरासरी: 89.0`,
      },
      {
        title: "Mini Project",
        content: "सुसंगतता तपासा — सरासरी आणि विचलन काढा. कोणता डेटा अधिक स्थिर?",
        code: `import numpy as np
scores = np.array([4, 8, 6, 10])
avg = float(scores.mean())
dev = float(scores.std())
print(f"avg={avg:.2f} std={dev:.2f}")`,
        codeLanguage: "python",
        output: `avg=7.00 std=2.24`,
      },
    ],
    practiceQuestions: [
      "numpy कशासाठी?",
      "std म्हणजे?",
      "CSV म्हणजे?",
    ],
    quiz: [
      { question: "numpy कशासाठी?", options: ["गणना", "web", "GUI", "delete"], correct: 0 },
      { question: "सरासरी नाव?", options: ["mean", "std", "sum", "max"], correct: 0 },
      { question: "CSV म्हणजे?", options: ["सारणी फाईल", "compiler", "shell", "script"], correct: 0 },
    ],
    challenge: {
      prompt: "गुणांची सरासरी",
      starterCode: `import numpy as np
m = np.array([10, 20, 30])
print(float(m.mean()))`,
      expectedOutput: "20.0",
    },
    interviewQuestions: [
      "pandas मध्ये काय वेगळे?",
      "std का महत्त्वाचा?",
    ],
    related: ["python-numpy", "python-csv-json"],
    prev: "python-rest-api",
    next: "python-machine-learning",
  },
  {
    slug: "python-machine-learning",
    categoryId: "python",
    title: "Machine Learning Basics",
    marathiTitle: "Machine Learning Basics - numpy ने",
    level: "advanced",
    minutes: 14,
    summary: "सरळ regression, loss, predictions; sklearn/पूर्ण AI stack संकल्पना.",
    sections: [
      {
        title: "का शिकावे? Machine Learning Basics - numpy ने चे फायदे आणि महत्त्व",
        content: "\"Machine Learning Basics - numpy ने\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "नमुन्यांवरून प्रतिसाद — पर्यवेक्षित शिक्षण = labeled example. आकडे numeric मध्ये; numpy आधारभूत साधन.",
        code: `import numpy as np
X = np.array([1, 2, 3, 4])
y = np.array([2, 4, 6, 8])
print(np.corrcoef(X, y)[0, 1].round(2))`,
        codeLanguage: "python",
        output: `1.0`,
      },
      {
        title: "loss (चूक)",
        content: "model भविष्यवाणी वि खरे — MSE म्हणजे सरासरी वर्ग चूक. लहान loss म्हणजे चांगले; हेच प्रशिक्षणाचे गणित.",
        code: `import numpy as np
y = np.array([2, 4, 6, 8])
p = np.array([2, 5, 6, 9])
print(round(float(np.mean((y - p) ** 2)), 2))`,
        codeLanguage: "python",
        output: `0.5`,
      },
      {
        title: "सरळ रेखा नियम",
        content: "मूळ कल्पना रेखा m*x + b — दोन आकडे शिकायचे: slope, intercept. normal equation ने थेट; pinv ने स्थिर solution.",
        code: `import numpy as np
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])
w = np.linalg.pinv(X) @ y
print(round(float(w[0]), 3))`,
        codeLanguage: "python",
        output: `2.0`,
      },
      {
        title: "bias जोडणे",
        content: "एकाच कॉलममध्ये 1 घाला — मग slope आणि intercept दोन्ही मिळतात. b, m = w. np.hstack अधिक अचूक मॉडेल.",
        code: `import numpy as np
X = np.array([[1], [2], [3]])
y = np.array([3, 5, 7])
A = np.hstack([np.ones((3, 1)), X])
w = np.linalg.pinv(A) @ y
print(round(float(w[1]), 3))`,
        codeLanguage: "python",
        output: `2.0`,
      },
      {
        title: "वर्गीकरण संकल्पना",
        content: "वर्गीकरण म्हणजे गट ठरवणे — पास/फेल सारखे थ्रेशोल्ड. >= 50 True.",
        code: `import numpy as np
प्रति = np.array([55, 80, 40, 90])
पास = प्रति >= 50
print(पास.tolist())`,
        codeLanguage: "python",
        output: `[True, True, False, True]`,
      },
      {
        title: "मोठा AI stack",
        content: "sklearn मध्ये तयार algorithms; pytorch/tensorflow मध्ये neural nets; transformers मध्ये language models. LLM हे खूप मोठे model — GGUF फॉरमॅटमध्ये small files.",
        code: `import numpy as np
X = np.array([1, 2, 3, 4, 5, 6])
पहिले = X[:4]
नंतर = X[4:]
print(len(पहिले), len(नंतर))`,
        codeLanguage: "python",
        output: `4 2`,
      },
      {
        title: "Mini Project",
        content: "रेखा शोधा — y = m*x + b मध्ये दोन्ही काढा; round ने स्वच्छ output.",
        code: `import numpy as np
X = np.array([1, 2, 3, 4, 5])
y = np.array([5, 7, 9, 11, 13])
A = np.hstack([np.ones((5, 1)), X.reshape(-1, 1)])
b, m = np.linalg.pinv(A) @ y
print(f"y = {round(float(m), 2)}x + {round(float(b), 2)}")`,
        codeLanguage: "python",
        output: `y = 2.0x + 3.0`,
      },
    ],
    practiceQuestions: [
      "ML म्हणजे?",
      "MSE म्हणजे?",
      "sklearn काय देते?",
    ],
    quiz: [
      { question: "labeled data म्हणजे?", options: ["उत्तरासह", "विना", "अस्पष्ट", "संपूर्ण"], correct: 0 },
      { question: "वर्गीकरण?", options: ["गट ठरवणे", "sum", "import", "delete"], correct: 0 },
      { question: "LLM म्हणजे?", options: ["language model", "game", "site", "font"], correct: 0 },
    ],
    challenge: {
      prompt: "थ्रेशोल्ड 60 वर पास",
      starterCode: `import numpy as np
s = np.array([50, 70, 60])
print(list(s >= 60))`,
      expectedOutput: "[False, True, True]",
    },
    interviewQuestions: [
      "pytorch वि sklearn?",
      "transformers कशासाठी?",
    ],
    related: ["python-data-analysis", "python-numpy"],
    prev: "python-data-analysis",
    next: "python-networking",
  },
  {
    slug: "python-networking",
    categoryId: "python",
    title: "Networking - Sockets",
    marathiTitle: "Networking - Sockets मध्ये",
    level: "advanced",
    minutes: 14,
    summary: "localhost TCP/UDP sockets, byte पाठवणे; TCP/UDP/DNS संकल्पना.",
    sections: [
      {
        title: "का शिकावे? Networking - Sockets मध्ये चे फायदे आणि महत्त्व",
        content: "\"Networking - Sockets मध्ये\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "sockets ने संगणकांत संवाद — दोन पैलू: server आणि client. TCP विश्वसनीय, UDP जलद. IP पत्ता ओळख.",
        code: `import socket
print(socket.SOCK_STREAM)`,
        codeLanguage: "python",
        output: `1`,
      },
      {
        title: "TCP server+client",
        content: "server bind करून listen; client connect करून send. 127.0.0.1 म्हणजे localhost; पोर्ट 0 आपोआप. bytes मध्येच डेटा.",
        code: `import socket, threading
sv = socket.socket()
sv.bind(("127.0.0.1", 0))
port = sv.getsockname()[1]
sv.listen(1)
def acc():
    c, _ = sv.accept()
    print("प्राप्त:", c.recv(100).decode())
t = threading.Thread(target=acc)
t.start()
cl = socket.socket()
cl.connect(("127.0.0.1", port))
cl.sendall("नमस्कार".encode("utf-8"))
cl.close()
t.join()
sv.close()`,
        codeLanguage: "python",
        output: `प्राप्त: नमस्कार`,
      },
      {
        title: "IP पत्ता",
        content: "inet_aton ने bytes मध्ये; gethostbyname ने पत्ता. localhost नेहमी 127.0.0.1 — नेटवर्क नसतानाही स्थिर.",
        code: `import socket
print(socket.inet_aton("127.0.0.1").hex())`,
        codeLanguage: "python",
        output: `7f000001`,
      },
      {
        title: "UDP datagram",
        content: "UDP मध्ये संदेश थेट — sendto ने लक्ष्य आणि डेटा, recvfrom ने परत. कमी गुरुत्व, पण जलद; व्हिडिओ कॉल सारखे.",
        code: `import socket
udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp.bind(("127.0.0.1", 0))
port = udp.getsockname()[1]
udp.sendto(b"hi", ("127.0.0.1", port))
data, _ = udp.recvfrom(10)
print(data.decode())
udp.close()`,
        codeLanguage: "python",
        output: `hi`,
      },
      {
        title: "प्रोटोकॉल संख्या",
        content: "IPPROTO_TCP ही संख्या 6; IPPROTO_UDP ही 17. प्रोटोकॉल म्हणजे नियमांचा संच — डेटा कसा जावा.",
        code: `import socket
print((socket.IPPROTO_TCP, socket.IPPROTO_UDP))`,
        codeLanguage: "python",
        output: `(6, 17)`,
      },
      {
        title: "DNS आणि hostname",
        content: "gethostbyname नाव -> पत्ता. localhost वर नेटवर्क लागत नाही — नावांनी लक्षात ठेवू; IP भाषा संगणकाची.",
        code: `import socket
print(socket.gethostbyname("localhost"))`,
        codeLanguage: "python",
        output: `127.0.0.1`,
      },
      {
        title: "Mini Project",
        content: "echo server — client पाठवो, server परत. एकाच फेरीत पूर्ण.",
        code: `import socket
sv = socket.socket()
sv.bind(("127.0.0.1", 0))
port = sv.getsockname()[1]
sv.listen(1)
cl = socket.socket()
cl.connect(("127.0.0.1", port))
c, _ = sv.accept()
cl.sendall(b"echo")
c.sendall(c.recv(100))
print(cl.recv(100).decode())
cl.close()
c.close()
sv.close()`,
        codeLanguage: "python",
        output: `echo`,
      },
    ],
    practiceQuestions: [
      "TCP वि UDP?",
      "socket म्हणजे?",
      "localhost म्हणजे?",
    ],
    quiz: [
      { question: "TCP कसा?", options: ["विश्वसनीय", "स्वस्त", "जलद", "सोपा"], correct: 0 },
      { question: "localhost IP?", options: ["127.0.0.1", "1.1.1.1", "8.8.8.8", "10.0.0.1"], correct: 0 },
      { question: "UDP चे वैशिष्ट्य?", options: ["जलद", "विश्वसनीय", "क्रमबद्ध", "सुरक्षित"], correct: 0 },
    ],
    challenge: {
      prompt: "UDP संदेश पाठवा-परत",
      starterCode: `import socket
u = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
u.bind(("127.0.0.1", 0))
p = u.getsockname()[1]
u.sendto(b"om", ("127.0.0.1", p))
d, _ = u.recvfrom(10)
print(d.decode())
u.close()`,
      expectedOutput: "om",
    },
    interviewQuestions: [
      "ports कसे असतात?",
      "firewall काय करते?",
    ],
    related: ["python-threading", "python-async"],
    prev: "python-machine-learning",
    next: "python-security",
  },
  {
    slug: "python-security",
    categoryId: "python",
    title: "Security - Hashing व Encryption",
    marathiTitle: "Security - Hashing आणि Encryption",
    level: "advanced",
    minutes: 14,
    summary: "hashlib, base64, XOR, salted hash, self-hosted port scan.",
    sections: [
      {
        title: "का शिकावे? Security - Hashing आणि Encryption चे फायदे आणि महत्त्व",
        content: "✓ password storage मध्ये महत्त्वाचे; hexdigest लांबी 64.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "सुरक्षा म्हणजे डेटा संरक्षित. हॅश एकाच दिशेने — ing केल्यावर उलट नाही; encryption उलट करता येते. दोन्ही वेगळे तंत्र.",
        code: `import hashlib
print(hashlib.sha256(b"abc").hexdigest()[:16])`,
        codeLanguage: "python",
        output: `ba7816bf8f01cfea`,
      },
      {
        title: "base64",
        content: "मजकुरात binary बदलते — b64encode ने बदल; खालील 64 चिन्हे. डेटा हस्तांतरासाठी; encryption नाही, फक्त रूप.",
        code: `import base64
s = base64.b64encode(b"secure")
print(s.decode())`,
        codeLanguage: "python",
        output: `c2VjdXJl`,
      },
      {
        title: "XOR साधा cipher",
        content: "XOR ने bytes बदलतात — दोनदा लावल्यास परत मूळ. शिकण्यासाठी चांगला; साधी encryption कल्पना.",
        code: `def xor(a, b):
    return bytes(x ^ y for x, y in zip(a, b))
msg = b"om"
k = b"\x41\x42"
print(xor(xor(msg, k), k) == msg)`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "Salted hash",
        content: "salt म्हणजे अतिरिक्त मीठ — दोन लोकांचा समान पाणी उलट. password storage मध्ये महत्त्वाचे; hexdigest लांबी 64.",
        code: `import hashlib
s = hashlib.sha256(b"salt" + b"om").hexdigest()
print(len(s))`,
        codeLanguage: "python",
        output: `64`,
      },
      {
        title: "Port scan (स्वयं-होस्ट)",
        content: "port scan माहिती देतो — स्वतःच्या server वर तपासा. open म्हणजे सेवा उपलब्ध; बंद पोर्ट refused. चाचणीसाठी सुरक्षित.",
        code: `import socket
sv = socket.socket()
sv.bind(("127.0.0.1", 0))
port = sv.getsockname()[1]
sv.listen(1)
try:
    c = socket.create_connection(("127.0.0.1", port), timeout=2)
    print("port open")
    c.close()
except OSError:
    print("port closed")
sv.close()`,
        codeLanguage: "python",
        output: `port open`,
      },
      {
        title: "सुरक्षित तुलना",
        content: "hmac.compare_digest समानता — वेळेच्या हल्ल्याला अडवते. हॅश तुलना धोकादायक; password check साठी योग्य.",
        code: `import hmac, hashlib
a = hashlib.sha256(b"om").digest()
b = hashlib.sha256(b"om").digest()
print(hmac.compare_digest(a, b))`,
        codeLanguage: "python",
        output: `True`,
      },
      {
        title: "Mini Project",
        content: "फिंगरप्रिंट — md5 तपासा, base64 करा. दोन्हींचा स्थिर output.",
        code: `import hashlib, base64
print(hashlib.md5(b"").hexdigest())
print(base64.b64encode(b"demo").decode())`,
        codeLanguage: "python",
        output: `d41d8cd98f00b204e9800998ecf8427e
ZGVtbw==`,
      },
    ],
    practiceQuestions: [
      "हॅश म्हणजे?",
      "salt का?",
      "XOR कसा?",
    ],
    quiz: [
      { question: "sha256 output लांबी?", options: ["64 hex", "8", "10", "5"], correct: 0 },
      { question: "password तुलना?", options: ["compare_digest", "==", "+", "%"], correct: 0 },
      { question: "base64 कशासाठी?", options: ["रूप बदल", "कूट", "फाईल", "गेम"], correct: 0 },
    ],
    challenge: {
      prompt: "साधा हॅश",
      starterCode: `import hashlib
print(hashlib.sha256(b"demo").hexdigest()[:8])`,
      expectedOutput: "2a97516c",
    },
    interviewQuestions: [
      "हॅश वि encryption?",
      "port scan धोका?",
    ],
    related: ["python-networking", "python-rest-api"],
    prev: "python-networking",
    next: "python-gui-tkinter",
  },
  {
    slug: "python-gui-tkinter",
    categoryId: "python",
    title: "GUI - Tkinter रचना",
    marathiTitle: "GUI - रचना/s आणि widgets",
    level: "advanced",
    minutes: 14,
    summary: "widget मॉडेल, layout, events; Tkinter/PyQt संकल्पना.",
    sections: [
      {
        title: "का शिकावे? GUI - रचना/s आणि widgets चे फायदे आणि महत्त्व",
        content: "✓ सुबक डिझाइनसाठी order महत्त्वाचा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "GUI म्हणजे काय?",
        content: "GUI म्हणजे दृश्य app — Tkinter अंगभूत GUI toolkit. हे Termux वर नाही (desktop आवश्यक). widget म्हणजे घटक — Label, Button, Entry सारखे.",
        code: `class Labelca:
    def __init__(self, t):
        self.t = t
    def montra(self):
        return f"<Label>{self.t}</Label>"
फ = Labelca("नमस्कार")
print(फ.montra())`,
        codeLanguage: "python",
        output: `<Label>नमस्कार</Label>`,
      },
      {
        title: "widget ट्री",
        content: "खिडकीत widget मुले असतात — पालक-मूल संबंध. रूट ही मुख्य खिडकी; रचना झाडासारखी.",
        code: `class मूल:
    def __init__(self, न, पालक=None):
        self.न = न
        self.पालक = पालक
        self.मुले = []
        if पालक:
            पालक.मुले.append(self)
    def दाखवा(self, d=0):
        out = "  " * d + self.न
        for m in self.मुले:
            out += "\n" + m.दाखवा(d + 1)
        return out
रूट = मूल("रूट")
बटण = मूल("Button", रूट)
लेबल = मूल("Label", रूट)
print(रूट.दाखवा())`,
        codeLanguage: "python",
        output: `रूट
  Button
  Label`,
      },
      {
        title: "Layout",
        content: "widgets ठिकाणी लावले — pack ने क्रमाने खाली, grid ने सारणी, place ने नक्की जागा. सुबक डिझाइनसाठी order महत्त्वाचा.",
        code: `order = ["नाव", "गुण", "पाठवा"]
print(" -> ".join(order))`,
        codeLanguage: "python",
        output: `नाव -> गुण -> पाठवा`,
      },
      {
        title: "Events",
        content: "क्लिक म्हणजे event — function callback म्हणून. दाबल्यावर function चालते; UI प्रतिसाद.",
        code: `def क्लिक():
    return "दाबले"
बटण = क्लिक
print(बटण())`,
        codeLanguage: "python",
        output: `दाबले`,
      },
      {
        title: "Form रचना",
        content: "लॉगिन फॉर्म मध्ये input — Entry मजकूर, secret* पासवर्ड, Button पाठवणे. स्वच्छ क्रम.",
        code: `फॉर्म = [("नाव", "input"), ("पासवर्ड", "input_secret"), ("लॉगिन", "button")]
for f in फॉर्म:
    print(f"{f[0]}: {f[1]}")`,
        codeLanguage: "python",
        output: `नाव: input
पासवर्ड: input_secret
लॉगिन: button`,
      },
      {
        title: "PyQt आणि आधुनिक",
        content: "PyQt दुसरी popular toolkit — दोन्हीचा concept पालक-मूल. जास्त साधने Tkinter मध्ये; क्लास आणि widgets.",
        code: `विजेट = [("Label", "शुभेच्छा"), ("Button", "OK"), ("Entry", "लेखन")]
for k, v in विजेट:
    print(f"{k} - {v}")`,
        codeLanguage: "python",
        output: `Label - शुभेच्छा
Button - OK
Entry - लेखन`,
      },
      {
        title: "Mini Project",
        content: "फॉर्म मॉडेल — तीन घटक, प्रत्येकी प्रकार. स्वच्छ प्रिंट.",
        code: `विजेट = [("Label", "शीर्षक"), ("Entry", "मजकूर"), ("Button", "पाठवा")]
for k, v in विजेट:
    print(f"{k} - {v}")`,
        codeLanguage: "python",
        output: `Label - शीर्षक
Entry - मजकूर
Button - पाठवा`,
      },
    ],
    practiceQuestions: [
      "GUI म्हणजे?",
      "widget म्हणजे?",
      "Tkinter केव्हा?",
    ],
    quiz: [
      { question: "Tkinter म्हणजे?", options: ["GUI toolkit", "game", "compiler", "editor"], correct: 0 },
      { question: "क्लिक कसे सांगतात?", options: ["callback", "import", "print", "delete"], correct: 0 },
      { question: "widget म्हणजे?", options: ["UI घटक", "IP", "port", "file"], correct: 0 },
    ],
    challenge: {
      prompt: "फॉर्म रचना",
      starterCode: `फॉर्म = [("नाव", "input")]
for f in फॉर्म:
    print(f"{f[0]}: {f[1]}")`,
      expectedOutput: "नाव: input",
    },
    interviewQuestions: [
      "Tkinter वि PyQt?",
      "GUI में Termux नाही का?",
    ],
    related: ["python-security", "python-oop-project"],
    prev: "python-security",
    next: "python-automation-system",
  },
  {
    slug: "python-automation-system",
    categoryId: "python",
    title: "Automation आणि System",
    marathiTitle: "Automation - subprocess, सभ्यता",
    level: "advanced",
    minutes: 14,
    summary: "subprocess, env vars, glob, scheduling heapq, logging, threads; multiprocessing संकल्पना.",
    sections: [
      {
        title: "Automation - subprocess, सभ्यता म्हणजे काय?",
        content: "subprocess, env vars, glob, scheduling heapq, logging, threads; multiprocessing संकल्पना.\nइतर कार्यक्रम चालवतो — subprocess.run([...]).\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Automation - subprocess, सभ्यता चे फायदे आणि महत्त्व",
        content: "\"Automation - subprocess, सभ्यता\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "subprocess",
        content: "इतर कार्यक्रम चालवतो — subprocess.run([...]). capture_output ने stdout मिळतो. शेल कमांड python मधून; सिस्टम ऑटोमेशनचा आधार.",
        code: `import subprocess
r = subprocess.run(["python3", "-c", "print(6*7)"], capture_output=True, text=True)
print(r.stdout.strip())`,
        codeLanguage: "python",
        output: `42`,
      },
      {
        title: "Environment variables",
        content: "env vars प्रणाली सेटिंग — os.environ मध्ये मानचित्रण. गुप्त कळा ठेवता येतात; os.environ[\"MODE\"] लिहितात.",
        code: `import os
os.environ["MODE"] = "अभ्यास"
print(os.environ.get("MODE"))`,
        codeLanguage: "python",
        output: `अभ्यास`,
      },
      {
        title: "फाईल ऑटोमेशन",
        content: "glob ने नावांनी शोध — *.log ने पद्धत. cleaning, बॅकअप; सोप्या क्रियांचे मूळ.",
        code: `import tempfile, os, glob
d = tempfile.mkdtemp()
for n in ("a.log", "b.log", "x.txt"):
    open(os.path.join(d, n), "w").close()
print(len(glob.glob(os.path.join(d, "*.log"))))`,
        codeLanguage: "python",
        output: `2`,
      },
      {
        title: "शेड्युलिंग",
        content: "कामांना प्राधान्य — heapq ने लहान प्रथम. (\"वेळ\", \"काम\") tuples; heappop ने सर्वात लवकर. task queue सारखी रचना.",
        code: `import heapq
q = [(5, "शॉर्ट"), (2, "मेल"), (9, "बॅकअप")]
heapq.heapify(q)
_, नाव = heapq.heappop(q)
print(नाव)`,
        codeLanguage: "python",
        output: `मेल`,
      },
      {
        title: "लॉगिंग",
        content: "logging ने प्रगती नोंदवतो — StreamHandler ने text output. StringIO मध्ये पकडा; ग्रंथात अमूल्य.",
        code: `import logging, io
buf = io.StringIO()
h = logging.StreamHandler(buf)
lg = logging.getLogger("v8")
lg.addHandler(h)
lg.setLevel(logging.INFO)
lg.info("सुरवात झाली")
print(buf.getvalue().strip().split(":")[-1].strip())`,
        codeLanguage: "python",
        output: `सुरवात झाली`,
      },
      {
        title: "समांतर कार्य",
        content: "threads भाग करतात — ThreadPoolExecutor ने सोपे. ex.map ने परिणाम क्रम. multiprocessing प्रक्रियांसाठी; GIL मुळे भिन्न context.",
        code: `from concurrent.futures import ThreadPoolExecutor
def वर्ग(x):
    return x ** 2
with ThreadPoolExecutor(max_workers=2) as ex:
    out = list(ex.map(वर्ग, [1, 2, 3, 4]))
print(sum(out))`,
        codeLanguage: "python",
        output: `30`,
      },
      {
        title: "Mini Project",
        content: "पाइपलाइन — subprocess ने sum काढा; आदेशांना जोडा.",
        code: `import subprocess
r = subprocess.run(["python3", "-c", "import sys; print(sum(map(int, sys.argv[1:])))", "10", "20", "30"], capture_output=True, text=True)
print(f"बेरीज={r.stdout.strip()}")`,
        codeLanguage: "python",
        output: `बेरीज=60`,
      },
    ],
    practiceQuestions: [
      "subprocess कशासाठी?",
      "env vars कुठे?",
      "logging का?",
    ],
    quiz: [
      { question: "subprocess कशासाठी?", options: ["इतर प्रोग्राम", "GUI", "photo", "file"], correct: 0 },
      { question: "env vars मध्ये कुठे?", options: ["os.environ", "sys.path", "math", "re"], correct: 0 },
      { question: "threads सारखे?", options: ["ThreadPoolExecutor", "json", "csv", "os"], correct: 0 },
    ],
    challenge: {
      prompt: "logging सोपे example",
      starterCode: `import logging
logging.basicConfig(level=logging.INFO, force=True)
logging.info("सुरू")`,
      expectedOutput: "",
    },
    interviewQuestions: [
      "multiprocessing वि threading?",
      "scheduling कसे करतात?",
    ],
    related: ["python-threading", "python-async"],
    prev: "python-gui-tkinter",
    next: "",
  },];
