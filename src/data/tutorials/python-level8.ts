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
      { title: "1. परिचय", content: "match हे Python 3.10+ मधील बलवान statement.\n\nहे switch/case सारखे दिसते.\n\nmatch x: असे लिहितात.\n\nप्रत्येक शक्यता case मध्ये.\n\nआधीच्या if-elif साखळीपेक्षा सुबक.\nPython 3.10 पासून उत्तम statement.\nPython 3.10 पासून अनुभव घ्या.\nPython 3.10 पासून आज शिका.\nPython 3.10 पासून धडा लक्षात.\nPython 3.10 पासून स्पष्ट करते.\nPython 3.10 पासून चालवून पहा.\nPython 3.10 पासून सराव करा.\nPython 3.10 पासून धडा लक्षात.\nPython 3.10 पासून स्पष्ट करते.\nPython 3.10 पासून चालवून पहा.\nPython 3.10 पासून सराव करा.\nPython 3.10 पासून verify करा.\nPython 3.10 पासून अचूक निकाल.\nPython 3.10 पासून मराठीत समज.\nPython 3.10 पासून मराठीत समज.\nPython 3.10 पासून उत्तम statement.\nPython 3.10 पासून अनुभव घ्या.\nPython 3.10 पासून आज शिका.\nPython 3.10 पासून धडा लक्षात.\nPython 3.10 पासून स्पष्ट करते.\nPython 3.10 पासून चालवून पहा.", code: `x = 2
match x:
    case 1:
        print("एक")
    case 2:
        print("दोन")`, output: "दोन", codeLanguage: "python" },
      { title: "2. मूल्य सामने", content: "प्रत्येक case एक मूल्य तपासते.\n\nजुळले तर तो block चालतो.\n\ncase _: म्हणजे इतर कोणतीही स्थिती.\n\nशेवटचा default सारखा ठेवतात.\n\nसंख्यांसोबत string देखील उपयुक्त.", code: `विषय = "भौतिकशास्त्र"
match विषय:
    case "गणित":
        print("गणित विषय")
    case "भौतिकशास्त्र":
        print("भौतिकशास्त्र विषय")
    case _:
        print("इतर")`, output: "भौतिकशास्त्र विषय", codeLanguage: "python" },
      { title: "3. रचना (Patterns)", content: "फक्त मूल्य नाही तर रचना सामने करता येते.\n\ncase [a, b]: list unpacking.\n\ncase (x, y): tuple unpacking.\n\nobject ची खोली देखील तपासता.\n\nहे data structure वेगळे करण्यासाठी सर्वोत्तम.", code: `point = (3, 4)
match point:
    case (0, 0):
        print("मूळ बिंदू")
    case (x, y):
        print(f"x={x}, y={y}")`, output: "x=3, y=4", codeLanguage: "python" },
      { title: "4. Guards", content: "guard म्हणजे अतिरिक्त अट.\n\ncase x if अट: असे लिहितात.\n\ncase मध्ये pattern आणि condition दोन्ही.\n\nअट खरी असली तरच case निवडतो.\n\nजास्त काळजीपूर्वक नियंत्रण.", code: `num = 15
match num:
    case n if n > 10:
        print("मोठा")
    case n:
        print("छोटा")`, output: "मोठा", codeLanguage: "python" },
      { title: "5. OR सामने", content: "case 1 | 2: म्हणजे 1 किंवा 2.\n\n| चिन्ह म्हणजे किंवा.\n\nduplicate logic टाळते.\n\nसमान उपचार असलेल्या मूल्यांसाठी.", code: `d = 5
match d:
    case 1 | 2 | 3:
        print("छोटा")
    case 4 | 5 | 6:
        print("मध्यम")`, output: "मध्यम", codeLanguage: "python" },
      { title: "6. व्यवहारी वापर", content: "menu आणि command हाताळण्यासाठी उत्तम.\n\nस्पष्ट आणि वाचनीय.\n\ncase _: ने अज्ञात निवड सापडते.\n\nif-elif चा त्रास नाही.\n\nAPI responses मध्ये देखील वापर.", code: `आदेश = "रन"
match आदेश:
    case "रन":
        print("कोड चालू")
    case "स्टॉप":
        print("कोड थांबले")
    case _:
        print("अज्ञात")`, output: "कोड चालू", codeLanguage: "python" },
      { title: "Mini Project", content: "ATM मेन्यू तयार करा:\n\ncase ने चार पर्याय हाताळा.\n\ndefault पर्याय देखील ठेवा.", code: `निवड = 2
match निवड:
    case 1:
        print("पैसे काढा")
    case 2:
        print("शिल्लक तपासा")
    case 3:
        print("पैसे जमा")
    case _:
        print("अवैध निवड")`, output: "शिल्लक तपासा", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "with म्हणजे resource ची काळजी घेण्याची सोपी पद्धत.\n\nफायली, लॉक, connections.\n\nवापरल्यावर आपोआप बंद होतात.\n\ntry-finally लिहिण्याचा त्रास नाही.\n\nसुरक्षित कोडसाठी आधारस्तंभ.", code: `from io import StringIO
with StringIO() as s:
    s.write("आतून लिहिले")
    txt = s.getvalue()
print(txt)`, output: "आतून लिहिले", codeLanguage: "python" },
      { title: "2. __enter__ आणि __exit__", content: "context manager दोन पद्धतींनी बनवतात.\n\n__enter__ राऱ्यावर चालते.\n\n__exit__ शेवटी बंद करते.\n\nआधी सुरूवात, नंतर शेवट.\n\nस्वतःचा manager लिहिता येतो.\n__enter__ चालवतो क्रम.\n__exit__ चालवतो क्रम.\n__enter__ चालवतो क्रम.\n__enter__ अचूक क्रम.\n__exit__ चालवतो क्रम.\n__exit__ अचूक क्रम.\n__enter__ अचूक क्रम.\n__enter__ चालवतो क्रम.\n__exit__ अचूक क्रम.\n__exit__ चालवतो क्रम.", code: `class Log:
    def __enter__(self):
        print("सुरू")
        return self
    def __exit__(self, *a):
        print("शेवट")
with Log():
    print("मध्ये")`, output: "सुरू\nमध्ये\nशेवट", codeLanguage: "python" },
      { title: "3. चूक हाताळणे", content: "__exit__ मध्ये चूक शोधता येते.\n\nexc_type मध्ये चूकीचा प्रकार.\n\nTrue परत केले तर चूक गिळली जाते.\n\nनेहमी नंतर cleanup होते.\n\nफायलींची गळती थांबते.\nexc_type नियंत्रित करते.\nexc_type नियंत्रित करते.\nexc_type अचूक हाताळणी.\nexc_type अचूक हाताळणी.\nexc_type नियंत्रित करते.", code: `class Safe:
    def __enter__(self):
        return self
    def __exit__(self, t, exc, tb):
        if t:
            print("चूक प्रकार:", t.__name__)
        return True
with Safe():
    raise ValueError("जाणूनबुजून")`, output: "चूक प्रकार: ValueError", codeLanguage: "python" },
      { title: "4. contextlib.contextmanager", content: "generator ने सोपा manager.\n\n@contextmanager सजावट लावतात.\n\nyield च्या आधी सुरूवात, नंतर शेवट.\n\nकमी कोड, स्पष्ट तर्क.\n\nछोट्या कामांसाठी उत्तम.\ncontextlib सोपे करते.\n@contextmanager सोपे करते.\ncontextlib सोपे करते.\ncontextlib अचूक प्रवाह.\n@contextmanager सोपे करते.\n@contextmanager अचूक प्रवाह.\ncontextlib अचूक प्रवाह.\ncontextlib सोपे करते.\n@contextmanager अचूक प्रवाह.\n@contextmanager सोपे करते.", code: `from contextlib import contextmanager
@contextmanager
def vyavahar():
    print("उघडले")
    yield
    print("बंद केले")
with vyavahar():
    print("काम चालू")`, output: "उघडले\nकाम चालू\nबंद केले", codeLanguage: "python" },
      { title: "5. फायली", content: "फायलींसोबत with अनिवार्य.\n\nवाचनासाठी open(p) तर लेखनासाठी open(p, \"w\").\n\nwith संपल्यावर फाईल बंद.\n\nmemory सुरक्षित.\n\nवाचणे आणि लिहिणे दोन्ही.", code: `import tempfile, os
p = os.path.join(tempfile.gettempdir(), "demo_v8.txt")
with open(p, "w") as f:
    f.write("मराठी")
with open(p) as f:
    print(f.read())`, output: "मराठी", codeLanguage: "python" },
      { title: "6. लॉक आणि डेटाबेस", content: "thread साठी Lock देखील with ने.\n\nकी डेटाबेस transaction.\n\nसुरुवात आणि शेवट नेहमी जोडीने.\n\nrace condition टाळते.\n\nजोखीम कमी करते.\nthreading.Lock संरक्षण देतो.\nthreading.Lock संरक्षण देतो.\nthreading.Lock संरक्षण देतो.", code: `import threading
lock = threading.Lock()
with lock:
    print("सुरक्षित क्षेत्र")`, output: "सुरक्षित क्षेत्र", codeLanguage: "python" },
      { title: "Mini Project", content: "खाते व्यवहार असा लिहा:\n\n__enter__ ने सुरूवात, __exit__ ने शेवट.\n\nबदल block मध्ये ठेवा.", code: `class Transaction:
    def __enter__(self):
        print("खाते उघडले")
        return self
    def __exit__(self, t, e, tb):
        print("खाते बंद")
        return True
with Transaction():
    print("रक्कम बदलली")`, output: "खाते उघडले\nरक्कम बदलली\nखाते बंद", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "type hint म्हणजे प्रकाराची खूण.\n\ndef f(x: int) -> str: असे लिहितात.\n\nहे runtime मध्ये अंमलात येत नाही.\n\nसाधने (editors) चुका उचलतात.\n\nस्पष्ट दस्तऐवज म्हणून काम.", code: `def दुप्पट(x: int) -> int:
    return x * 2
print(दुप्पट(4))`, output: "8", codeLanguage: "python" },
      { title: "2. संग्रह प्रकार", content: "list[int] म्हणजे int ची list.\n\ndict[str, int] म्हणजे की-मूल्य.\n\nउदाहरण marks table.\n\nसहकार्यासाठी महत्त्वाचे.\nlist[int] अनुभव घ्या.\nlist[int] मराठीत सोपे.\nlist[int] आज वापरा.\nlist[int] धडा समजतो.\nlist[int] रचना देतो.\nlist[int] verify करा.\nlist[int] चालवून पहा.\nlist[int] धडा समजतो.\nlist[int] रचना देतो.\nlist[int] verify करा.\nlist[int] चालवून पहा.\nlist[int] स्पष्ट दिसते.\nlist[int] सराव करा.\nlist[int] अचूक संग्रह.\nlist[int] अचूक संग्रह.\nlist[int] अनुभव घ्या.\nlist[int] मराठीत सोपे.\nlist[int] आज वापरा.\nlist[int] धडा समजतो.\nlist[int] रचना देतो.\nlist[int] verify करा.", code: `marks: dict[str, int] = {"वेद": 85, "मीरा": 90}
print(sum(marks.values()))`, output: "175", codeLanguage: "python" },
      { title: "3. __annotations__", content: "प्रकार माहिती __annotations__ मध्ये.\n\ndict म्हणून उपलब्ध.\n\nसाधने वापरतात.\n\nही माहिती introspection ने बघता.\n__annotations__ नोंद देतात.\n__annotations__ नोंद देतात.\n__annotations__ अचूक नोंद.\nintrospection नोंद देतात.\nintrospection नोंद देतात.\n__annotations__ अचूक नोंद.\n__annotations__ नोंद देतात.", code: `def stale(x: int, y: str) -> bool:
    return True
a = stale.__annotations__
print(a["x"])`, output: "<class 'int'>", codeLanguage: "python" },
      { title: "4. Optional आणि Union", content: "Optional म्हणजे मूल्य किंवा None.\n\nनाव कधीही None असू शकेल.\n\ndef नाव(n: Optional[str] = None).\n\nUnion म्हणजे एकापेक्षा प्रकार.\n\nसुरक्षित defaults.\nOptional लवचिक बनवतो.\nOptional लवचिक बनवतो.\nOptional अचूक वापर.\nOptional अचूक वापर.\nOptional लवचिक बनवतो.", code: `from typing import Optional
def नाव(n: Optional[str] = None) -> str:
    return n or "अनाम"
print(नाव())`, output: "अनाम", codeLanguage: "python" },
      { title: "5. TypeAlias", content: "लांब प्रकारांना नाव देता.\n\nVekta: TypeAlias = list[float].\n\nवाचनीयता वाढते.\n\nएकदा निर्माण करा, अनेकदा वापरा.\nTypeAlias सुबक ठेवतो.\nTypeAlias सुबक ठेवतो.\nTypeAlias अचूक alias.\nTypeAlias अचूक alias.\nTypeAlias सुबक ठेवतो.", code: `from typing import TypeAlias
Vekta: TypeAlias = list[float]
def बेरीज(v: Vekta) -> float:
    return sum(v)
print(बेरीज([1.5, 2.5]))`, output: "4.0", codeLanguage: "python" },
      { title: "6. TypedDict", content: "dict ची रचना स्पष्ट करते.\n\nकुठले key चा प्रकार कोणता.\n\nडेटा record मध्ये वापर.\n\nruntime मध्ये तेच dict राहते.\nTypedDict रचना स्पष्ट करतो.\nTypedDict रचना स्पष्ट करतो.\nTypedDict अचूक मॅप.\nTypedDict अचूक मॅप.\nTypedDict रचना स्पष्ट करतो.", code: `from typing import TypedDict
class Vidya(TypedDict):
    नाव: str
    गुण: int
v: Vidya = {"नाव": "अदिती", "गुण": 88}
print(f"{v['नाव']} यांना {v['गुण']} गुण")`, output: "अदिती यांना 88 गुण", codeLanguage: "python" },
      { title: "Mini Project", content: "विद्यार्थी नोंदी टाइप करा:\n\nTypedDict ने इनपुट, def ने प्रकार.", code: `from typing import TypedDict, List
class Marks(TypedDict):
    नाव: str
    गुण: List[int]
m: Marks = {"नाव": "राहुल", "गुण": [80, 90]}
print(m["नाव"], sum(m["गुण"]))`, output: "राहुल 170", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "मजकुरासोबतच XML आणि binary फायली.\n\nXML म्हणजे structure मध्ये डेटा.\n\nbinary म्हणजे bytes मध्ये.\n\nदोन्ही software मध्ये सर्वत्र.\n\nमाहिती ठेवण्याच्या इतर पद्धती.\nxml.etree अचूक डेटा.\nxml.etree समजते रचना.\nxml.etree अचूक डेटा.\nxml.etree अचूक डेटा.", code: `b = "मराठी".encode("utf-8")
print(len(b))`, output: "15", codeLanguage: "python" },
      { title: "2. Binary write/read", content: "struct ने संख्यांच्या bytes तयार होतात.\n\npack म्हणजे bytes मध्ये बदल.\n\nunpack म्हणजे परत संख्या.\n\ndata सुबक आणि कॉम्पॅक्ट.\n\nफॉरमॅट्स जसे \"ii\".", code: `import struct
data = struct.pack("ii", 7, 8)
print(struct.unpack("ii", data))`, output: "(7, 8)", codeLanguage: "python" },
      { title: "3. XML पार्सिंग", content: "ElementTree ने XML सोपे.\n\nfromstring ने string वाचतो.\n\nfind ने मूल शोधतो.\n\n.text ने मजकूर मिळतो.\n\nसंगणकांची देवाणघेवाण.\nElementTree काढते डेटा.\nfromstring काढते डेटा.\nElementTree काढते डेटा.\nElementTree अचूक पार्सिंग.\nfromstring काढते डेटा.\nfromstring अचूक पार्सिंग.\nfromstring अचूक पार्सिंग.\nElementTree अचूक पार्सिंग.\nElementTree काढते डेटा.", code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<व्यक्ती><नाव>वेद</नाव></व्यक्ती>")
print(root.find("नाव").text)`, output: "वेद", codeLanguage: "python" },
      { title: "4. Attributes आणि iterate", content: "XML मध्ये attributes असतात.\n\nget(\"toc\") ने मूल्य.\n\nमुले iterate करता.\n\nlist(root) ने सर्व मुले.\n\nगणना आणि फिल्टर.", code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<वर्ग><च toc='1'/><च toc='2'/></वर्ग>")
print([c.get("toc") for c in root])`, output: "['1', '2']", codeLanguage: "python" },
      { title: "5. bytearray आणि bytes", content: "bytes न बदलता येतात.\n\nbytearray बदलता येते.\n\nmemoryview खूप मोठ्या डेटासाठी.\n\nnetwork आणि files मध्ये bytes.\n\nएका रूपात दुसऱ्या मध्ये.\nbytearray बदल घडवते.\nपरिवर्तन बदल घडवते.\nbytearray बदल घडवते.\nbytearray अचूक हाताळणी.\nपरिवर्तन बदल घडवते.\nपरिवर्तन अचूक हाताळणी.\nmemoryview बदल घडवते.\nपरिवर्तन अचूक हाताळणी.\nmemoryview बदल घडवते.\nbytearray अचूक हाताळणी.\nbytearray बदल घडवते.", code: `ba = bytearray([65, 66, 67])
print(bytes(ba))`, output: "b'ABC'", codeLanguage: "python" },
      { title: "6. base64", content: "binary डेटा मजकुरात बदलते.\n\nemail, JSON मध्ये ठेवता.\n\nb64encode ने बदल, b64decode ने परत.\n\nडेटा सुरक्षित ठेवणे नाही, फक्त रूप.", code: `import base64
e = base64.b64encode(b"hello")
print(base64.b64decode(e) == b"hello")`, output: "True", codeLanguage: "python" },
      { title: "Mini Project", content: "XML गणना + binary लांबी:\n\nXML च्या मुलांची गणना.\n\nbinary लांबी मोजा.", code: `import xml.etree.ElementTree as ET
root = ET.fromstring("<ताळा><मद/><मद/><मद/></ताळा>")
print(len(list(root)))
b = "गणित".encode("utf-8")
print(len(b))`, output: "3\n12", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "डेटाबेस म्हणजे व्यवस्थित डेटा.\n\nSQLite फाईल-आधारित डेटाबेस.\n\npython मध्ये sqlite3 समाविष्ट.\n\n:memory: ने RAM मध्ये तात्काळ.\n\nशिकण्यासाठी उत्तम.", code: `import sqlite3
con = sqlite3.connect(":memory:")
print(con.total_changes)`, output: "0", codeLanguage: "python" },
      { title: "2. Table तयार करणे", content: "कॉलम आणि प्रकार ठरवतात.\n\nTEXT मजकूर, INT संख्या.\n\nप्रत्येक रांग नोंद.\n\nसुरुवातीला साधी रचना.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE विद्यार्थी(नाव TEXT, गुण INT)")
print([r[0] for r in con.execute("SELECT name FROM sqlite_master WHERE type='table'")])`, output: "['विद्यार्थी']", codeLanguage: "python" },
      { title: "3. INSERT आणि SELECT", content: "INSERT ने रांगा जोडतो.\n\nexecutemany ने अनेक एकत्र.\n\nSELECT ने वाचता.\n\nORDER BY ने लागण क्रम.\n\nहे core वाचन-लेखन.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE विद्यार्थी(नाव TEXT, गुण INT)")
con.executemany("INSERT INTO विद्यार्थी VALUES (?, ?)", [("मीरा", 90), ("वेद", 85)])
for r in con.execute("SELECT नाव, गुण FROM विद्यार्थी ORDER BY गुण DESC"):
    print(r)`, output: "('मीरा', 90)\n('वेद', 85)", codeLanguage: "python" },
      { title: "4. Parametrized queries", content: "? placeholders सुरक्षित असतात.\n\nवापरकर्त्याच्या डेटाला अडवतात.\n\nSQL injection थांबते.\n\nstring जोडण्यापेक्षा नेहमी ?.\n\nसुरक्षिततेचा मूल नियम.\nparameterized सुरक्षित करते.\nparameterized सुरक्षित करते.\nparameterized अचूक सुरक्षा.\nparameterized अचूक सुरक्षा.\nparameterized सुरक्षित करते.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(नाव TEXT)")
con.execute("INSERT INTO t VALUES (?)", ("ओम",))
print(con.execute("SELECT * FROM t WHERE नाव=?", ("ओम",)).fetchall())`, output: "[('ओम',)]", codeLanguage: "python" },
      { title: "5. UPDATE आणि DELETE", content: "UPDATE ने मूल्य बदलते.\n\nDELETE ने रांगा निघतात.\n\nWHERE ने फक्त लक्ष्य.\n\nचुका रोखण्यासाठी प्रत्येक वेळी WHERE.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(g INT)")
con.executemany("INSERT INTO t VALUES (?)", [(5,), (9,)])
con.execute("UPDATE t SET g = g + 1 WHERE g = 5")
print(list(con.execute("SELECT g FROM t ORDER BY g")))`, output: "[(6,), (9,)]", codeLanguage: "python" },
      { title: "6. Aggregates", content: "SUM, COUNT, AVG सारखी गणना.\n\nडेटाबेसच आकडे मोजतो.\n\nfetchone ने एक परिणाम.\n\nजलद आणि शक्तिशाली.\n\nअहवालांसाठी उत्तम.\nAggregates मोजते अचूक.\nAggregates मोजते अचूक.\nAggregates अचूक आकडा.\nAggregates अचूक आकडा.\nAggregates मोजते अचूक.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE t(v INT)")
con.executemany("INSERT INTO t VALUES (?)", [(10,), (20,), (30,)])
print(con.execute("SELECT SUM(v), COUNT(*) FROM t").fetchone())`, output: "(60, 3)", codeLanguage: "python" },
      { title: "Mini Project", content: "गुणांचा डेटाबेस:\n\nनोंदी घाला, सर्वोच्च शोधा.\n\nORDER BY DESC LIMIT 1.", code: `import sqlite3
con = sqlite3.connect(":memory:")
con.execute("CREATE TABLE गुण(नाव TEXT, m INT)")
con.executemany("INSERT INTO गुण VALUES (?, ?)", [("अदिती", 95), ("रोहन", 88), ("स्वरा", 92)])
नाव, म = con.execute("SELECT नाव, m FROM गुण ORDER BY m DESC LIMIT 1").fetchone()
print(f"{नाव}: {म}")`, output: "अदिती: 95", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "Flask ही हलकी web framework.\n\nछोट्या ते मध्यम apps साठी.\n\nपायथनमध्ये web server बनवते.\n\nDjango ही मोठी framework; Flask साधी.", code: `from flask import Flask
app = Flask(__name__)
print(type(app).__name__)`, output: "Flask", codeLanguage: "python" },
      { title: "2. Routes", content: "@app.route(\"/\") ने पत्ता.\n\nखालील function प्रतिसाद देतो.\n\nview function म्हणतात.\n\nब्राउझरला मजकूर मिळतो.\n\nसर्वात सोपा web page.\n@app.route जोडतो मार्ग.\n@app.route जोडतो मार्ग.\n@app.route अचूक पेजे.\n@app.route अचूक पेजे.\n@app.route जोडतो मार्ग.", code: `from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "नमस्कार"
print(home())`, output: "नमस्कार", codeLanguage: "python" },
      { title: "3. Dynamic URLs", content: "<name> म्हणजे बदलते मूल्य.\n\n\"<int:x>\" फक्त संख्या.\n\nURL मधून आकडा webserver ला.\n\nप्रत्येक विनंतीला वेगळे मूल्य.\n\nव्यक्तिगत पाने तयार.", code: `from flask import Flask
app = Flask(__name__)
@app.route("/गुण/<int:score>")
def score(score):
    return f"तुमचे गुण: {score}"
print(score(92))`, output: "तुमचे गुण: 92", codeLanguage: "python" },
      { title: "4. Methods", content: "GET वाचतो, POST नोंदवतो.\n\nmethods list मध्ये परवाने.\n\nform पाठवण्यासाठी POST.\n\nयोग्य method योग्य कामासाठी.", code: `from flask import Flask
app = Flask(__name__)
@app.route("/x", methods=["GET", "POST"])
def x():
    return "1"
rules = [r for r in app.url_map.iter_rules() if r.endpoint == "x"][0]
print("GET" in rules.methods and "POST" in rules.methods)`, output: "True", codeLanguage: "python" },
      { title: "5. JSON प्रतिसाद", content: "api साठी jsonify.\n\ndict मध्ये डेटा.\n\nब्राउझर/अॅपला JSON.\n\nएकाच आकारात डेटा.\n\nआधुनिक सिस्टमचा भाषा.", code: `from flask import Flask, jsonify
app = Flask(__name__)
@app.route("/api")
def api():
    return jsonify(nama="मराठी", level=8)
with app.app_context():
    print(api().get_json() == {"nama": "मराठी", "level": 8})`, output: "True", codeLanguage: "python" },
      { title: "6. टेम्पलेट", content: "template मध्ये HTML आणि data.\n\nपृष्ठाची रचना वेगळी.\n\nफक्त जागतिक data बदलतो.\n\nस्वच्छ वेगळेपणा.\n\nउदाहरणाद्वारे कल्पना.\nटेम्पलेट सुबक बनवतो.\nrender_template सुबक बनवतो.\nटेम्पलेट सुबक बनवतो.\nटेम्पलेट अचूक पेजे.\nrender_template सुबक बनवतो.\nrender_template अचूक पेजे.\nrender_template अचूक पेजे.\nटेम्पलेट अचूक पेजे.\nटेम्पलेट सुबक बनवतो.", code: `नम = "आरोही"
पृष्ठ = f"<h1>नमस्कार {नम}</h1>"
print(पृष्ठ)`, output: "<h1>नमस्कार आरोही</h1>", codeLanguage: "python" },
      { title: "Mini Project", content: "दोन पानांची mini site:\n\n/home आणि /about.\n\nप्रत्येकाला वेगळा मजकूर.", code: `from flask import Flask
app = Flask(__name__)
@app.route("/")
def home():
    return "होम"
@app.route("/about")
def about():
    return "बद्दल"
print(home(), about())`, output: "होम बद्दल", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "REST म्हणजे API तयार करण्याची पद्धत.\n\nFastAPI आधुनिक framework.\n\nस्वयंचलित documentation.\n\ntype hints वापरते.\n\nwebby सेवांसाठी सर्वोत्तम.", code: `from fastapi import FastAPI
app = FastAPI()
print(type(app).__name__)`, output: "FastAPI", codeLanguage: "python" },
      { title: "2. GET route", content: "@app.get(\"/हेलो\") ने वाचन.\n\nasync function ने प्रतिसाद.\n\ndict परत केले कि JSON.\n\npassword auth संकल्पना नंतर.\n@app.get देतो डेटा.\n@app.get देतो डेटा.\n@app.get अचूक response.\n@app.get अचूक response.", code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/हेलो")
async def hello():
    return {"sha": "नमस्कार"}
import asyncio
print(asyncio.run(hello()))`, output: "{'sha': 'नमस्कार'}", codeLanguage: "python" },
      { title: "3. Path parameters", content: "URL मध्ये <score> सारखे.\n\ntype hint int प्रमाणित करते.\n\nचुकीचा प्रकार 422 error.\n\nस्पष्ट आणि सुरक्षित.\n\nAPI डिझाइनचा आधार.", code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/गुण/{score}")
async def score(score: int):
    return {"गुण": score}
import asyncio
print(asyncio.run(score(88)))`, output: "{'गुण': 88}", codeLanguage: "python" },
      { title: "4. Query parameters", content: "?q= मधील values.\n\nफिल्टर करण्यासाठी.\n\nsearch API सारखे.\n\nquery default असू शकते.\n? mark अनुभव घ्या.\n? mark मराठीत सोपे.\n? mark आज वापरा.\n? mark धडा समजतो.\n? mark लवचिक करतो.\n? mark verify करा.\n? mark चालवून पहा.\n? mark धडा समजतो.\n? mark लवचिक करतो.\n? mark verify करा.\n? mark चालवून पहा.\n? mark स्पष्ट दिसतो.\n? mark सराव करा.\n? mark अचूक फिल्टर.\n? mark चालवून पहा.\n? mark स्पष्ट दिसतो.\n? mark सराव करा.\n? mark अचूक फिल्टर.\n? mark अनुभव घ्या.\n? mark मराठीत सोपे.\n? mark आज वापरा.", code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/search")
async def search(q: str = "सर्व"):
    return {"q": q}
import asyncio
print(asyncio.run(search()))`, output: "{'q': 'सर्व'}", codeLanguage: "python" },
      { title: "5. Status codes", content: "HTTP status ठरवतात.\n\n200 यश, 404 नाही सापडला.\n\n401 अनधिकृत, 403 निषिद्ध.\n\nstatus_code parameter.\n\nAPI documentation महत्त्वाची.", code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/ok", status_code=200)
async def ok():
    return {"st": "ठीक"}
r = [ro for ro in app.routes if getattr(ro, "path", "") == "/ok"][0]
print(r.status_code)`, output: "200", codeLanguage: "python" },
      { title: "6. POST आणि Auth", content: "POST ने नोंदवतो.\n\nbody मध्ये data.\n\nauth म्हणजे ओळख पडताळणी.\n\ntoken ने वापरकर्ता सिद्ध.\n\ndict ने सोपे उदाहरण.\n@app.post साठवतो नोंदी.\n@app.post साठवतो नोंदी.\n@app.post अचूक संग्रह.\n@app.post अचूक संग्रह.", code: `from fastapi import FastAPI
app = FastAPI()
@app.post("/माल")
async def add(m: dict):
    return m["नाव"]
import asyncio
print(asyncio.run(add({"नाव": "कलम"})))`, output: "कलम", codeLanguage: "python" },
      { title: "Mini Project", content: "दोन endpoints:\n\n/a आणि /b दोन data मूल्ये.\n\nपथा sorted छापा.", code: `from fastapi import FastAPI
app = FastAPI()
@app.get("/a")
async def a():
    return {"z": 1}
@app.get("/b")
async def b():
    return {"z": 2}
paths = [r.path for r in app.routes if r.path in ("/a", "/b")]
print(sorted(paths))`, output: "['/a', '/b']", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "डेटा विश्लेषण म्हणजे आकड्यांत अर्थ.\n\nnumpy सध्या स्थापित.\n\nवेगवान गणना.\n\npandas तक्ते पण numpy वरील.\n\nCSV ही सारणी रूप.", code: `import numpy as np
a = np.array([1, 2, 3])
print(a.sum())`, output: "6", codeLanguage: "python" },
      { title: "2. सांख्यिकी", content: "mean सरासरी, std विचलन.\n\nमोजमाप ते किती विखुरले.\n\nगुणांचा अभ्यास.\n\nround ने स्वच्छ output.\n\nनिर्णयासाठी आधार.\nसांख्यिकी सांगते आकडा.\nसांख्यिकी सांगते आकडा.\nसांख्यिकी अचूक सरासरी.\nसांख्यिकी अचूक सरासरी.\nसांख्यिकी सांगते आकडा.", code: `import numpy as np
m = np.array([70, 85, 90, 75])
print(round(float(m.mean()), 1))`, output: "80.0", codeLanguage: "python" },
      { title: "3. फिल्टर आणि निवड", content: "a[a > 10] ने अट.\n\nफक्त दिलेल्या निकषांचे डेटा.\n\nमोठ्या सारण्यांतून छोटा कळस.\n\nquick insight.\nफिल्टर निवडते घटक.\na[a > 5] अनुभव घ्या.\na[a > 5] मराठीत सोपे.\na[a > 5] आज वापरा.\na[a > 5] धडा समजतो.\na[a > 5] निवडते घटक.\na[a > 5] verify करा.\na[a > 5] चालवून पहा.\nफिल्टर निवडते घटक.\nफिल्टर अचूक फिल्टर.\na[a > 5] धडा समजतो.\na[a > 5] निवडते घटक.\na[a > 5] verify करा.\na[a > 5] चालवून पहा.\na[a > 5] स्पष्ट दिसतो.\na[a > 5] सराव करा.\na[a > 5] अचूक फिल्टर.\na[a > 5] चालवून पहा.\na[a > 5] स्पष्ट दिसतो.\na[a > 5] सराव करा.\na[a > 5] अचूक फिल्टर.\na[a > 5] अनुभव घ्या.\na[a > 5] मराठीत सोपे.\na[a > 5] आज वापरा.\nफिल्टर अचूक फिल्टर.\nफिल्टर निवडते घटक.", code: `import numpy as np
a = np.array([5, 12, 8, 20])
print(a[a > 10].tolist())`, output: "[12, 20]", codeLanguage: "python" },
      { title: "4. reshape", content: "डेटाला आकार द्या.\n\nreshape(2, 3) ने table.\n\naxis ने दिशेने बेरीज.\n\nimage pixels सारखे.\n\nलवचिक रचना.\nnp.reshape अचूक आकार.\n-1 वापरणे स्पष्ट होते.\n-1 वापरणे सराव करा.\n-1 वापरणे अचूक आकार.\n-1 वापरणे अनुभव घ्या.\n-1 वापरणे मराठीत सोपे.\n-1 वापरणे आज वापरा.\n-1 वापरणे धडा समजतो.\nreshape आकार देतो.\nreshape आकार देतो.\nreshape अचूक आकार.\nnp.reshape आकार देतो.\nnp.reshape अचूक आकार.\n-1 वापरणे धडा समजतो.\n-1 वापरणे आकार देतो.\n-1 वापरणे verify करा.\n-1 वापरणे चालवून पहा.\n-1 वापरणे स्पष्ट होते.\n-1 वापरणे सराव करा.\n-1 वापरणे अचूक आकार.\nnp.reshape अचूक आकार.\n-1 वापरणे चालवून पहा.\n-1 वापरणे स्पष्ट होते.\n-1 वापरणे सराव करा.\n-1 वापरणे अचूक आकार.\n-1 वापरणे अनुभव घ्या.\n-1 वापरणे मराठीत सोपे.\n-1 वापरणे आज वापरा.\n-1 वापरणे अचूक आकार.\n-1 वापरणे अनुभव घ्या.\n-1 वापरणे मराठीत सोपे.\n-1 वापरणे आज वापरा.\n-1 वापरणे धडा समजतो.\n-1 वापरणे आकार देतो.\n-1 वापरणे verify करा.\nreshape अचूक आकार.\nreshape आकार देतो.", code: `import numpy as np
print(np.arange(6).reshape(2, 3).sum(axis=1).tolist())`, output: "[3, 12]", codeLanguage: "python" },
      { title: "5. CSV वाचन", content: "गुणांच्या आकड्यांचा बेरीज.\n\ntable डेटासाठी CSV मानक.", code: `import csv, io
data = io.StringIO("नाव,गुण\\nमीरा,90\\nवेद,85\\n")
rows = list(csv.DictReader(data))
print(sum(int(r["गुण"]) for r in rows))`, output: "175", codeLanguage: "python" },
      { title: "6. Pandas संकल्पना", content: "pandas मध्ये DataFrame हा तक्ता.\n\npip install pandas.\n\n.numpy सोबत सुसंगत.\n\nयेथे numpy ने मूल तर्क.\n\nपुढची पायरी pandas.", code: `import numpy as np
गुण = np.array([90, 85, 92])
print(f"सरासरी: {गुण.mean():.1f}")`, output: "सरासरी: 89.0", codeLanguage: "python" },
      { title: "Mini Project", content: "सुसंगतता तपासा:\n\nसरासरी आणि विचलन.\n\nकोणता डेटा अधिक स्थिर.", code: `import numpy as np
scores = np.array([4, 8, 6, 10])
avg = float(scores.mean())
dev = float(scores.std())
print(f"avg={avg:.2f} std={dev:.2f}")`, output: "avg=7.00 std=2.24", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "नमुन्यांवरून प्रतिसाद.\n\nपर्यवेक्षित शिक्षण = labeled example.\n\nआकडे numeric मध्ये.\n\nnumpy आधारभूत साधन.", code: `import numpy as np
X = np.array([1, 2, 3, 4])
y = np.array([2, 4, 6, 8])
print(np.corrcoef(X, y)[0, 1].round(2))`, output: "1.0", codeLanguage: "python" },
      { title: "2. चूक/possession (loss)", content: "model भविष्यवाणी वि खरे.\n\nMSE म्हणजे सरासरी वर्ग चूक.\n\nलहान loss म्हणजे चांगले.\n\nहेच प्रशिक्षणाचे गणित.\n\nसगळे algorithms हेच करतात.", code: `import numpy as np
y = np.array([2, 4, 6, 8])
p = np.array([2, 5, 6, 9])
print(round(float(np.mean((y - p) ** 2)), 2))`, output: "0.5", codeLanguage: "python" },
      { title: "3. सरळ रेखा नियम", content: "मूळ कल्पना रेखा m*x + b.\n\nदोन आकडे शिकायचे: slope, intercept.\n\nnormal equation ने थेट.\n\nX.T @ X म्हणजे गुणाकार.\n\npinv ने स्थिर solution.", code: `import numpy as np
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])
w = np.linalg.pinv(X) @ y
print(round(float(w[0]), 3))`, output: "2.0", codeLanguage: "python" },
      { title: "4. bias जोडणे", content: "एकाच कॉलममध्ये 1 घाला.\n\nमग slope आणि intercept दोन्ही.\n\nb, m = w.\n\nअधिक अचूक मॉडेल.\n\nअधिक विनम्र गणित.\nnp.hstack अचूक गणना.\nnp.hstack दुरुस्त करतो.\nnp.hstack अचूक गणना.\nnp.hstack अचूक गणना.", code: `import numpy as np
X = np.array([[1], [2], [3]])
y = np.array([3, 5, 7])
A = np.hstack([np.ones((3, 1)), X])
w = np.linalg.pinv(A) @ y
print(round(float(w[1]), 3))`, output: "2.0", codeLanguage: "python" },
      { title: "5. वर्गीकरण संकल्पना", content: "वर्गीकरण म्हणजे गट ठरवणे.\n\nपास/फेल सारखे थ्रेशोल्ड.\n\n>= 50 True.\n\nurl सोपे example.\nवर्गीकरण ठरवतो वर्ग.\nवर्गीकरण ठरवतो वर्ग.\nवर्गीकरण अचूक वर्ग.\nवर्गीकरण अचूक वर्ग.\nवर्गीकरण ठरवतो वर्ग.", code: `import numpy as np
प्रति = np.array([55, 80, 40, 90])
पास = प्रति >= 50
print(पास.tolist())`, output: "[True, True, False, True]", codeLanguage: "python" },
      { title: "6. मोठा AI stack", content: "sklearn मध्ये तयार algorithms.\n\npytorch/tensorflow मध्ये neural nets.\n\ntransformers मध्ये language models.\n\nLLM हे खूप मोठे model.\n\nGGUF फॉरमॅटमध्ये small files.\ntransformers अचूक समज.\nscikit-learn देतो दिशा.\nPyTorch देतो दिशा.\nscikit-learn देतो दिशा.\nscikit-learn अचूक समज.\nPyTorch देतो दिशा.\nPyTorch अचूक समज.\ntransformers देतो दिशा.\ntransformers अचूक समज.\nPyTorch अचूक समज.\ntransformers अचूक समज.\nscikit-learn अचूक समज.\nscikit-learn देतो दिशा.", code: `import numpy as np
X = np.array([1, 2, 3, 4, 5, 6])
पहिले = X[:4]
नंतर = X[4:]
print(len(पहिले), len(नंतर))`, output: "4 2", codeLanguage: "python" },
      { title: "Mini Project", content: "रेखा शोधा:\n\ny = m*x + b मध्ये दोन्ही.\n\nround ने स्वच्छ output.", code: `import numpy as np
X = np.array([1, 2, 3, 4, 5])
y = np.array([5, 7, 9, 11, 13])
A = np.hstack([np.ones((5, 1)), X.reshape(-1, 1)])
b, m = np.linalg.pinv(A) @ y
print(f"y = {round(float(m), 2)}x + {round(float(b), 2)}")`, output: "y = 2.0x + 3.0", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "sockets ने संगणकांत संवाद.\n\nदोन पैलू: server आणि client.\n\nTCP विश्वसनीय, UDP जलद.\n\nIP पत्ता ओळख.\n\nसर्व network इथेच.", code: `import socket
print(socket.SOCK_STREAM)`, output: "1", codeLanguage: "python" },
      { title: "2. TCP server+client", content: "server bind करून listen.\n\nclient connect करून send.\n\n127.0.0.1 म्हणजे localhost.\n\nपोर्ट 0 आपोआप.\n\nbytes मध्येच डेटा.\n127.0.0.1 स्पष्ट दिसते.\n127.0.0.1 सराव करा.\n127.0.0.1 अचूक क्रम.\n127.0.0.1 अनुभव घ्या.\n127.0.0.1 मराठीत सोपे.\n127.0.0.1 आज वापरा.\n127.0.0.1 धडा समजतो.\n127.0.0.1 अनुभव घ्या.\n127.0.0.1 मराठीत सोपे.\n127.0.0.1 आज वापरा.\n127.0.0.1 धडा समजतो.\n127.0.0.1 घडवते संवाद.\n127.0.0.1 verify करा.\n127.0.0.1 चालवून पहा.\n127.0.0.1 चालवून पहा.\n127.0.0.1 स्पष्ट दिसते.\n127.0.0.1 सराव करा.\n127.0.0.1 अचूक क्रम.\n127.0.0.1 अनुभव घ्या.\n127.0.0.1 मराठीत सोपे.\n127.0.0.1 आज वापरा.\n127.0.0.1 अचूक क्रम.\n127.0.0.1 अनुभव घ्या.\n127.0.0.1 मराठीत सोपे.\n127.0.0.1 आज वापरा.\n127.0.0.1 धडा समजतो.\n127.0.0.1 घडवते संवाद.\n127.0.0.1 verify करा.", code: `import socket, threading
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
sv.close()`, output: "प्राप्त: नमस्कार", codeLanguage: "python" },
      { title: "3. IP पत्ता", content: "inet_aton ने bytes मध्ये.\n\ngethostbyname ने पत्ता.\n\nlocalhost नेहमी 127.0.0.1.\n\nनेटवर्क नसतानाही स्थिर.\n\nपत्ता प्रणालीची माहिती.\n127.0.0.1 स्वतः अनुभव घ्या.\n127.0.0.1 स्वतः मराठीत सोपे.\n127.0.0.1 स्वतः आज वापरा.\n127.0.0.1 स्वतः धडा समजतो.\n127.0.0.1 स्वतः ओळखतो device.\n127.0.0.1 स्वतः verify करा.\n127.0.0.1 स्वतः चालवून पहा.\n192.168 नेट अनुभव घ्या.\n192.168 नेट मराठीत सोपे.\n192.168 नेट आज वापरा.\n192.168 नेट धडा समजतो.\n192.168 नेट ओळखतो device.\n192.168 नेट verify करा.\n192.168 नेट चालवून पहा.\n127.0.0.1 स्वतः धडा समजतो.\n127.0.0.1 स्वतः ओळखतो device.\n127.0.0.1 स्वतः verify करा.\n127.0.0.1 स्वतः चालवून पहा.\n127.0.0.1 स्वतः स्पष्ट होते.\n127.0.0.1 स्वतः सराव करा.\n127.0.0.1 स्वतः अचूक पत्ता.\n192.168 नेट धडा समजतो.\n192.168 नेट ओळखतो device.\n192.168 नेट verify करा.\n192.168 नेट चालवून पहा.\n192.168 नेट स्पष्ट होते.\n192.168 नेट सराव करा.\n192.168 नेट अचूक पत्ता.\n192.168 नेट चालवून पहा.\n192.168 नेट स्पष्ट होते.\n192.168 नेट सराव करा.\n192.168 नेट अचूक पत्ता.\n192.168 नेट अनुभव घ्या.\n192.168 नेट मराठीत सोपे.\n192.168 नेट आज वापरा.\n127.0.0.1 स्वतः अचूक पत्ता.\n127.0.0.1 स्वतः अनुभव घ्या.\n127.0.0.1 स्वतः मराठीत सोपे.\n127.0.0.1 स्वतः आज वापरा.\n127.0.0.1 स्वतः धडा समजतो.\n127.0.0.1 स्वतः ओळखतो device.\n127.0.0.1 स्वतः verify करा.", code: `import socket
print(socket.inet_aton("127.0.0.1").hex())`, output: "7f000001", codeLanguage: "python" },
      { title: "4. UDP datagram", content: "UDP मध्ये संदेश थेट.\n\nsendto ने लक्ष्य आणि डेटा.\n\nrecvfrom ने परत.\n\nकमी गुरुत्व, पण जलद.\n\nव्हिडिओ कॉल सारखे.", code: `import socket
udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp.bind(("127.0.0.1", 0))
port = udp.getsockname()[1]
udp.sendto(b"hi", ("127.0.0.1", port))
data, _ = udp.recvfrom(10)
print(data.decode())
udp.close()`, output: "hi", codeLanguage: "python" },
      { title: "5. प्रोटोकॉल संख्या", content: "IPPROTO_TCP ही संख्या 6.\n\nIPPROTO_UDP ही 17.\n\nप्रोटोकॉल नियमांचा संच.\n\nडेटा कसा जावा.\n\nTCP/UDP वेगळे नियम.", code: `import socket
print((socket.IPPROTO_TCP, socket.IPPROTO_UDP))`, output: "(6, 17)", codeLanguage: "python" },
      { title: "6. DNS आणि hostname", content: "gethostbyname नाव -> पत्ता.\n\nlocalhost वर नेटवर्क लागत नाही.\n\nनावांनी लक्षात ठेवू.\n\nIP भाषा संगणकाची.\nsocket.gethostbyname देतो IP.\nsocket.gethostbyname देतो IP.\nsocket.gethostbyname अचूक lookup.\nsocket.gethostbyname अचूक lookup.", code: `import socket
print(socket.gethostbyname("localhost"))`, output: "127.0.0.1", codeLanguage: "python" },
      { title: "Mini Project", content: "echo server:\n\nclient पाठवो, server परत.\n\nएकाच फेरीत पूर्ण.", code: `import socket
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
sv.close()`, output: "echo", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "सुरक्षा म्हणजे डेटा संरक्षित.\n\nहॅश एकाच दिशेने.\n\ning केल्यावर उलट नाही.\n\nencryption उलट करता येते.\n\nदोन्ही वेगळे तंत्र.", code: `import hashlib
print(hashlib.sha256(b"abc").hexdigest()[:16])`, output: "ba7816bf8f01cfea", codeLanguage: "python" },
      { title: "2. base64", content: "मजकुरात binary.\n\nb64encode ने बदल.\n\nखालील 64 चिन्हे.\n\nडेटा हस्तांतरासाठी.\n\nencryption नाही, फक्त रूप.", code: `import base64
s = base64.b64encode(b"secure")
print(s.decode())`, output: "c2VjdXJl", codeLanguage: "python" },
      { title: "3. XOR साधा cipher", content: "XOR ने bytes बदलतात.\n\nदोनदा लावल्यास परत मूळ.\n\nशिकण्यासाठी चांगला.\n\nसाधी encryption कल्पना.", code: `def xor(a, b):
    return bytes(x ^ y for x, y in zip(a, b))
msg = b"om"
k = b"\\x41\\x42"
print(xor(xor(msg, k), k) == msg)`, output: "True", codeLanguage: "python" },
      { title: "4. Salted hash", content: "salt म्हणजे अतिरिक्त मीठ.\n\nदोन लोकांचा समान पाणी उलट.\n\npassword storage मध्ये महत्त्व.\n\nhexdigest लांबी 64.", code: `import hashlib
s = hashlib.sha256(b"salt" + b"om").hexdigest()
print(len(s))`, output: "64", codeLanguage: "python" },
      { title: "5. Port scan (स्वयं-होस्ट)", content: "port scan माहिती देतो.\n\nस्वतःच्या server वर तपासा.\n\nopen म्हणजे सेवा उपलब्ध.\n\nबंद पोर्ट refused.\n\nचाचणीसाठी सुरक्षित.\nस्वयं-होस्ट तपासतो पोर्ट.\nsocket.connect_ex तपासतो पोर्ट.\nस्वयं-होस्ट तपासतो पोर्ट.\nsocket.connect_ex तपासतो पोर्ट.\nस्वयं-होस्ट तपासतो पोर्ट.", code: `import socket
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
sv.close()`, output: "port open", codeLanguage: "python" },
      { title: "6. सुरक्षित तुलना", content: "hmac.compare_digest समानता.\n\nवेळेच्या हल्ल्याला अडवते.\n\nहॅश तुलना धोकादायक.\n\npassword check साठी योग्य.\n\nन दाखवता तपासा.\nhmac.compare_digest संरक्षण देतो.\nhmac.compare_digest संरक्षण देतो.\nhmac.compare_digest अचूक तुलना.\nhmac.compare_digest अचूक तुलना.\nhmac.compare_digest संरक्षण देतो.", code: `import hmac, hashlib
a = hashlib.sha256(b"om").digest()
b = hashlib.sha256(b"om").digest()
print(hmac.compare_digest(a, b))`, output: "True", codeLanguage: "python" },
      { title: "Mini Project", content: "फिंगरप्रिंट:\n\nmd5 तपासा, base64 करा.\n\nदोन्हींचा स्थिर output.", code: `import hashlib, base64
print(hashlib.md5(b"").hexdigest())
print(base64.b64encode(b"demo").decode())`, output: "d41d8cd98f00b204e9800998ecf8427e\nZGVtbw==", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "GUI म्हणजे दृश्य app.\n\nTkinter अंगभूत GUI toolkit.\n\nहे Termux वर नाही (desktop आवश्यक).\n\nwidget म्हणजे घटक.\n\nLabel, Button, Entry सारखे.", code: `class Labelca:
    def __init__(self, t):
        self.t = t
    def montra(self):
        return f"<Label>{self.t}</Label>"
फ = Labelca("नमस्कार")
print(फ.montra())`, output: "<Label>नमस्कार</Label>", codeLanguage: "python" },
      { title: "2. widget ट्री", content: "खिडकीत widget मुले असतात.\n\nपालक-मूल संबंध.\n\nरूट ही मुख्य खिडकी.\n\nरचना झाडासारखी.\n\nमॉडेल ने शिकायचे.", code: `class मूल:
    def __init__(self, न, पालक=None):
        self.न = न
        self.पालक = पालक
        self.मुले = []
        if पालक:
            पालक.मुले.append(self)
    def दाखवा(self, d=0):
        out = "  " * d + self.न
        for m in self.मुले:
            out += "\\n" + m.दाखवा(d + 1)
        return out
रूट = मूल("रूट")
बटण = मूल("Button", रूट)
लेबल = मूल("Label", रूट)
print(रूट.दाखवा())`, output: "रूट\n  Button\n  Label", codeLanguage: "python" },
      { title: "3. Layout", content: "widgets ठिकाणी लावले.\n\npack ने क्रमाने खाली.\n\ngrid ने सारणी.\n\nplace ने नक्की जागा.\n\nसुबक डिझाइनसाठी.\n\n order महत्त्वाचा.", code: `order = ["नाव", "गुण", "पाठवा"]
print(" -> ".join(order))`, output: "नाव -> गुण -> पाठवा", codeLanguage: "python" },
      { title: "4. Events", content: "क्लिक म्हणजे event.\n\nfunction callback म्हणून.\n\nदाबल्यावर function चालते.\n\nUI प्रतिसाद.\n\nआधी function, नंतर वायर.", code: `def क्लिक():
    return "दाबले"
बटण = क्लिक
print(बटण())`, output: "दाबले", codeLanguage: "python" },
      { title: "5. Form रचना", content: "लॉगिन फॉर्म मध्ये input.\n\nEntry मजकूर, secret\times पासवर्ड.\n\nButton पाठवणे.\n\nस्वच्छ क्रम.\n\nमॉडेल मध्ये क्रम.", code: `फॉर्म = [("नाव", "input"), ("पासवर्ड", "input_secret"), ("लॉगिन", "button")]
for f in फॉर्म:
    print(f"{f[0]}: {f[1]}")`, output: "नाव: input\nपासवर्ड: input_secret\nलॉगिन: button", codeLanguage: "python" },
      { title: "6. PyQt आणि आधुनिक", content: "PyQt दुसरी popular toolkit.\n\nदोन्हीचा concept पालक-मूल.\n\nजास्त साधने Tkinter मध्ये.\n\nक्लास आणि widgets.\n\nइथे मॉडेल ने शिकणे.\nQtWidgets पुढे घेऊन जातो.\nQtWidgets पुढे घेऊन जातो.\nQtWidgets अचूक समज.\nQtWidgets अचूक समज.\nQtWidgets पुढे घेऊन जातो.", code: `विजेट = [("Label", "शुभेच्छा"), ("Button", "OK"), ("Entry", "लेखन")]
for k, v in विजेट:
    print(f"{k} - {v}")`, output: "Label - शुभेच्छा\nButton - OK\nEntry - लेखन", codeLanguage: "python" },
      { title: "Mini Project", content: "फॉर्म मॉडेल:\n\nतीन घटक, प्रत्येकी प्रकार.\n\nस्वच्छ प्रिंट.", code: `विजेट = [("Label", "शीर्षक"), ("Entry", "मजकूर"), ("Button", "पाठवा")]
for k, v in विजेट:
    print(f"{k} - {v}")`, output: "Label - शीर्षक\nEntry - मजकूर\nButton - पाठवा", codeLanguage: "python" },
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
      { title: "1. subprocess", content: "इतर कार्यक्रम चालवतो.\n\nsubprocess.run([...]).\n\ncapture_output ने stdout.\n\nशेल कमांड python मधून.\n\nसिस्टम ऑटोमेशनचा आधार.", code: `import subprocess
r = subprocess.run(["python3", "-c", "print(6*7)"], capture_output=True, text=True)
print(r.stdout.strip())`, output: "42", codeLanguage: "python" },
      { title: "2. Environment variables", content: "env vars प्रणाली सेटिंग.\n\nos.environ मध्ये मानचित्रण.\n\nगुप्त कळा ठेवता.\n\nos.environ[\"MODE\"] लिहितात.\n\nअनुप्रयोग कॉन्फिगरेशन.\nos.environ वाचतो सेटिंग.\nos.environ वाचतो सेटिंग.\nos.environ अचूक मूल्य.\nos.environ अचूक मूल्य.\nos.environ वाचतो सेटिंग.", code: `import os
os.environ["MODE"] = "अभ्यास"
print(os.environ.get("MODE"))`, output: "अभ्यास", codeLanguage: "python" },
      { title: "3. फाईल ऑटोमेशन", content: "glob ने नावांनी शोध.\n\n*.log ने पद्धत.\n\ncleaning, बॅकअप.\n\nसोप्या क्रियांचे मूल.\n*.log पद्धत स्पष्ट होते.\n*.log पद्धत सराव करा.\n*.log पद्धत अचूक फाइल.\n*.log पद्धत अनुभव घ्या.\n*.log पद्धत मराठीत सोपे.\n*.log पद्धत आज वापरा.\n*.log पद्धत धडा समजतो.\nos.remove अचूक फाइल.\n*.log पद्धत धडा समजतो.\n*.log पद्धत सोपे करते काम.\n*.log पद्धत verify करा.\n*.log पद्धत चालवून पहा.\n*.log पद्धत स्पष्ट होते.\n*.log पद्धत सराव करा.\n*.log पद्धत अचूक फाइल.\nos.remove सोपे करते काम.\nos.remove अचूक फाइल.\n*.log पद्धत चालवून पहा.\n*.log पद्धत स्पष्ट होते.\n*.log पद्धत सराव करा.\n*.log पद्धत अचूक फाइल.\n*.log पद्धत अनुभव घ्या.\n*.log पद्धत मराठीत सोपे.\n*.log पद्धत आज वापरा.\nos.remove अचूक फाइल.", code: `import tempfile, os, glob
d = tempfile.mkdtemp()
for n in ("a.log", "b.log", "x.txt"):
    open(os.path.join(d, n), "w").close()
print(len(glob.glob(os.path.join(d, "*.log"))))`, output: "2", codeLanguage: "python" },
      { title: "4. शेड्युलिंग", content: "कामांना प्राधान्य.\n\nheapq ने लहान प्रथम.\n\n(\"वेळ\", \"काम\") tuples.\n\nheappop ने सर्वात लवकर.\n\ntask queue सारखी रचना.\nशेड्युलिंग चालवतो स्वयंचलित.\nशेड्युलिंग चालवतो स्वयंचलित.\nशेड्युलिंग अचूक वेळ.\nशेड्युलिंग अचूक वेळ.\nशेड्युलिंग चालवतो स्वयंचलित.", code: `import heapq
q = [(5, "शॉर्ट"), (2, "मेल"), (9, "बॅकअप")]
heapq.heapify(q)
_, नाव = heapq.heappop(q)
print(नाव)`, output: "मेल", codeLanguage: "python" },
      { title: "5. लॉगिंग", content: "logging ने प्रगती नोंदवतो.\n\nStreamHandler ने text output.\n\nStringIO मध्ये पकडा.\n\nग्रंथात अमूल्य.\nलॉगिंग नोंद ठेवतो.\nलॉगिंग नोंद ठेवतो.\nलॉगिंग अचूक लॉग.\nलॉगिंग अचूक लॉग.\nलॉगिंग नोंद ठेवतो.", code: `import logging, io
buf = io.StringIO()
h = logging.StreamHandler(buf)
lg = logging.getLogger("v8")
lg.addHandler(h)
lg.setLevel(logging.INFO)
lg.info("सुरवात झाली")
print(buf.getvalue().strip().split(":")[-1].strip())`, output: "सुरवात झाली", codeLanguage: "python" },
      { title: "6. समांतर कार्य", content: "threads भाग करतात.\n\nThreadPoolExecutor ने सोपे.\n\nex.map ने परिणाम क्रम.\n\nmultiprocessing प्रक्रियांसाठी.\n\nGIL मुळे भिन्न context.\nThreadPoolExecutor वेगवान करतो.\nThreadPoolExecutor वेगवान करतो.", code: `from concurrent.futures import ThreadPoolExecutor
def वर्ग(x):
    return x ** 2
with ThreadPoolExecutor(max_workers=2) as ex:
    out = list(ex.map(वर्ग, [1, 2, 3, 4]))
print(sum(out))`, output: "30", codeLanguage: "python" },
      { title: "Mini Project", content: "पाइपलाइन:\n\nsubprocess ने sum काढा.\n\nआदेशांना जोडा.", code: `import subprocess
r = subprocess.run(["python3", "-c", "import sys; print(sum(map(int, sys.argv[1:])))", "10", "20", "30"], capture_output=True, text=True)
print(f"बेरीज={r.stdout.strip()}")`, output: "बेरीज=60", codeLanguage: "python" },
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
