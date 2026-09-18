import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 7 — Practical Python (व्यावहारिक Python) ===
export const L7_LABEL = "Level 7 — Practical Python (व्यावहारिक Python)";

export const pythonLevel7: Tutorial[] = [
  {
    slug: "python-fstrings",
    categoryId: "python",
    title: "f-strings in Depth",
    marathiTitle: "f-strings - सुबक मजकूर कोड",
    level: "advanced",
    minutes: 14,
    summary: "f-strings ने variables थेट string मध्ये; formatting तपशीलवार.",
    sections: [
      {
        title: "का शिकावे? f-strings - सुबक मजकूर कोड चे फायदे आणि महत्त्व",
        content: "\"f-strings - सुबक मजकूर कोड\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "f-string म्हणजे काय?",
        content: "f-string म्हणजे formatted string — variable चे मूल्य थेट string मध्ये घालण्याची पद्धत. अवतरणांच्या आधी f लिहितात: f\"...\" आणि आत {variable} ठेवलं की त्या जागी मूल्य छापलं जातं.\n\nसमजा name मध्ये \"आरोही\" ठेवला; f\"नमस्कार, {name}!\" लिहिलं की Python ते नमस्कार, आरोही! छापतो.\n\nजोडणीचा जुना पर्याय concatenation — \"नमस्कार, \" + name असे + ने string जोडतात. f-string मध्ये मजकूर जसाच्या तसा राहतो आणि मूल्याची जागा कंसाने स्पष्ट दिसते.",
        code: `name = "आरोही"
print(f"नमस्कार, {name}!")`,
        codeLanguage: "python",
        output: `नमस्कार, आरोही!`,
      },
      {
        title: "Expressions: फक्त variable नाही",
        content: "{ } मध्ये फक्त variable नाही तर कोणतंही expression चालतं — बेरीज, गुणाकार, function call. Python आधी expression ची गणना करतो आणि मग निकाल त्या जागी छापतो.\n\nखाली a + b आणि a * b दोन्ही एकाच print मध्ये: 10 + 5 = 15, 10 * 5 = 50.",
        code: `a = 10
b = 5
print(f"बेरीज: {a + b}, गुणाकार: {a * b}")`,
        codeLanguage: "python",
        output: `बेरीज: 15, गुणाकार: 50`,
      },
      {
        title: "अचूक संख्या: दशांश ठिकाणे",
        content: "मूल्याच्या मागे : लावून format spec देतात. {x:.2f} म्हणजे दोन दशांश ठिकाणी छापा — .2f मधला f म्हणजे floating point, त्याआधीचा .2 दशांशांची संख्या. गोल करणं Python स्वतः करतो: 12.34567 ते 12.35 दिसतं.\n\nकिंमत, सरासरी किंवा शास्त्रीय मोजमापात एकसारखे दशांश हवे असतील तर ही पद्धत थेट लिहिता येते.",
        code: `price = 12.34567
print(f"किंमत: {price:.2f}")`,
        codeLanguage: "python",
        output: `किंमत: 12.35`,
      },
      {
        title: "रुंदी आणि संरेखन",
        content: "{value:10} — 10 अक्षरांची रुंदी देतो; मूल्य लहान असेल तर उरलेली जागा स्पेसने भरते. दिशाही निवडता येते: {s:>10} मूल्य उजवीकडे संरेखित, {s:<10} डावीकडे.\n\nआकड्यांच्या सारणीत साधारणपणे प्रत्येक column एका रुंदीत आणि आकडे उजवीकडे संरेखित दिसतात. पूर्णांकासाठी {n:3d} असे रुंदी देतात. दशांश आणि रुंदी दोन्हीही एकत्र येतात: {x:8.2f} — 8 रुंदी, दोन दशांश.",
        code: `score = 95
print(f"गुण: {score:>10}")`,
        codeLanguage: "python",
        output: `गुण:         95`,
      },
      {
        title: "एका वाक्यात अनेक fields",
        content: "एकाच f-string मध्ये कितीही { } चालतात — प्रत्येकाच्या जागी तेच मूल्य बसते. खाली name, subject आणि score तीनही एकाच वाक्यात आले.\n\noutput नैसर्गिक वाक्य आहे: मजकूर आणि मूल्यं मिसळलेली. निकाल पत्रक, बिल, अहवाल — वाचकाला एकाच ओळीत संपूर्ण माहिती मिळते.",
        code: `name = "मीरा"
score = 92
subject = "विज्ञान"
print(f"{name} ने {subject} मध्ये {score} गुण मिळवले")`,
        codeLanguage: "python",
        output: `मीरा ने विज्ञान मध्ये 92 गुण मिळवले`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ f उपसर्ग विसरलात तर {name} असेच output मध्ये दिसतं — Python ते साधा मजकूरच समजतो.\n\n✗ format spec चा क्रम चुकला (उदा. {x:2.f}) तर ValueError येतो — दशांश आधी, f शेवटी.\n\n✗ अवतरणांचा गोंधळ — बाहेर दुहेरी अवतरण आणि आत single असे स्वरूप घेतात: f\"She said '{name}'\".\n\nखाली {x} आणि {x * x} अशी दोन expression — 7 चा वर्ग 49 output मध्ये.",
        code: `x = 7
print(f"{x} चा वर्ग {x * x}")`,
        codeLanguage: "python",
        output: `7 चा वर्ग 49`,
      },
      {
        title: "Interactive: बदलून पाहा",
        content: "खालील कोड आधी तसाच चालवा. मग name चे मूल्य तुमच्या नावाने बदला आणि शुभ संध्याकाळ ऐवजी शुभ सकाळ करा — प्रत्येक बदल output मध्ये दिसतो.\n\n{ } मधलं सूत्र बदलूनही तपासता येतं. अडचण आल्यास f आहे का, कंस जुळले आहेत का, अवतरण बरोबर आहे का — हा क्रम पाळा.",
        code: `name = "वेद"
print(f"नमस्कार {name}, शुभ संध्याकाळ")`,
        codeLanguage: "python",
        output: `नमस्कार वेद, शुभ संध्याकाळ`,
      },
      {
        title: "Mini Project: गुणांचा सुबक card",
        content: "एका f-string मध्ये name आणि score एकत्र. \\n म्हणजे नवीन ओळ — त्यामुळे card दोन ओळींत दिसतो.\n\nहीच रचना पुढे याद्या किंवा अहवाल छापताना वापरता येते — रचना बदलायची असेल तर फक्त f-string चा मजकूर बदला.",
        code: `name = "आरोही"
score = 95
print(f"=== {name} ===
गुण: {score}")`,
        codeLanguage: "python",
        output: `=== आरोही ===
गुण: 95`,
      },
    ],
    practiceQuestions: [
      "f-string चा उपयोग?",
      "{x:.2f} म्हणजे?",
      "f उपसर्ग कशासाठी?",
    ],
    quiz: [
      { question: "f-string कशासाठी?", options: ["मजकूरात मूल्य", "delete", "sort", "import"], correct: 0 },
      { question: ".2f म्हणजे?", options: ["दोन दशांश", "दोन पूर्णांक", "list", "None"], correct: 0 },
      { question: "f कुठे लिहितात?", options: ["सुरुवातीला", "शेवटी", "मधे", "नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "तापमान दोन दशांशात.",
      starterCode: `t = 36.6666
print(f"तापमान: {t:.1f}")`,
      expectedOutput: "तापमान: 36.7",
    },
    interviewQuestions: [
      "f-string का वापरायचे?",
      "format spec म्हणजे काय?",
    ],
    related: ["python-strings", "python-print", "python-functions-advanced"],
    prev: "python-lists",
    next: "python-enumerate",
  },
  {
    slug: "python-enumerate",
    categoryId: "python",
    title: "Enumerate and Zip",
    marathiTitle: "Enumerate व Zip - क्रम आणि जोड्या",
    level: "advanced",
    minutes: 15,
    summary: "enumerate ने क्रमांक मिळतात, zip ने दोन lists जोडल्या जातात.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Enumerate व Zip - क्रम आणि जोड्या म्हणजे काय?",
        content: "enumerate ने क्रमांक मिळतात, zip ने दोन lists जोडल्या जातात.\nenumerate हा built-in function: यादी फिरवताना प्रत्येक item सोबत क्रमांक देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Enumerate व Zip - क्रम आणि जोड्या चे फायदे आणि महत्त्व",
        content: "✓ हाताने क्रमांक वाढवणारा loop — काउंटर variable आणि +1 ची ओळ — लिहिण्याची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "enumerate: क्रमांक आणि मूल्य एकत्र",
        content: "enumerate हा built-in function: यादी फिरवताना प्रत्येक item सोबत क्रमांक देतो. for i, item in enumerate(items): लिहिलं की i मध्ये क्रमांक आणि item मध्ये मूल्य मिळतं.\n\nहाताने क्रमांक वाढवणारा loop — काउंटर variable आणि +1 ची ओळ — लिहिण्याची गरज नाही. enumerate ते आपोआप करतो; output मध्ये 0 पोळी, 1 दही, 2 पाव असे दिसतं.",
        code: `items = ["पोळी", "दही", "पाव"]
for i, item in enumerate(items):
    print(i, item)`,
        codeLanguage: "python",
        output: `0 पोळी
1 दही
2 पाव`,
      },
      {
        title: "start=1: मोजणी एक पासून",
        content: "Python चे index 0 पासून सुरू होतात, पण माणसाची यादी 1 पासून असते. enumerate(items, start=1) लिहिलं तर क्रमांक 1, 2, 3 ... असे मिळतात.\n\nचिवडा, पोहे, सेव अशी यादी 1. चिवडा, 2. पोहे या स्वरूपात दाखवणं नैसर्गिक आहे.",
        code: `snacks = ["चिवडा", "पोहे", "सेव"]
for i, s in enumerate(snacks, start=1):
    print(i, s)`,
        codeLanguage: "python",
        output: `1 चिवडा
2 पोहे
3 सेव`,
      },
      {
        title: "zip: दोन याद्यांच्या जोड्या",
        content: "zip दोन किंवा अधिक याद्यांचे जोड्यांमध्ये रूपांतर करतो — पहिला-पहिला, दुसरा-दुसरा. नावे आणि गुण वेगळ्या याद्यांमध्ये असतील तर zip त्या एकत्र आणतो.\n\nfor n, s in zip(names, scores): — n मध्ये नाव, s मध्ये गुण. आरोही 95 आणि वेद 72 अशा जोड्या छापल्या जातात.",
        code: `names = ["आरोही", "वेद"]
scores = [95, 72]
for n, s in zip(names, scores):
    print(n, s)`,
        codeLanguage: "python",
        output: `आरोही 95
वेद 72`,
      },
      {
        title: "लहान यादीचा निकष",
        content: "याद्यांची लांबी वेगळी असेल तर zip सर्वात लहान यादीएवढ्याच जोड्या तयार करतो; उरलेल्या मूल्यांना जोडीदार मिळत नाही.\n\na मध्ये तीन मूल्ये, b मध्ये दोन — zip फक्त दोन जोड्या बनवतो: (1, 10) आणि (2, 20). 3 ला जोडीदार नसल्याने output मध्ये फक्त 11 आणि 22 दिसतात.",
        code: `a = [1, 2, 3]
b = [10, 20]
for x, y in zip(a, b):
    print(x + y)`,
        codeLanguage: "python",
        output: `11
22`,
      },
      {
        title: "zip आणि enumerate एकत्र",
        content: "तीन किंवा चार याद्या असतील तर zip मध्ये अनेक arguments देता येतात. परिणामी जोड्यांना क्रमांकही हवा असेल तर बाहेर enumerate(..., start=1) गुंडाळतात.\n\nखाली for i, (n, s) असे दोन स्तर unpack आहेत — बाहेरचा i क्रमांक, आतली (n, s) जोडी. ओळीच्या सुरुवातीला क्रमांक दाखवल्याने एक सुबक table बनतं.",
        code: `names = ["आरोही", "वेद", "मीरा"]
subs = ["मराठी", "गणित", "विज्ञान"]
for i, (n, s) in enumerate(zip(names, subs), start=1):
    print(i, n, s)`,
        codeLanguage: "python",
        output: `1 आरोही मराठी
2 वेद गणित
3 मीरा विज्ञान`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ enumerate किंवा zip चा result list नसतो — iterator असतो; थेट print केल्यास enumerate object असे लिहिलेले दिसतं. दाखवण्यासाठी list(enumerate(x)) किंवा list(zip(a, b)) मध्ये गुंडाळतात.\n\n✗ जोडी तोडताना (unpack) variable ची संख्या जोडीच्या आकाराएवढी हवी — zip मधील दोन मूल्यांसाठी for a, b; तीन variable दिले तर ValueError येतो.\n\n✗ लहान यादीचा निकष हवा नसेल तर itertools मधला zip_longest वापरतात — तो उरलेल्या जागी default मूल्य भरतो.\n\nखाली list(enumerate(items)) चा निकाल: प्रत्येक (क्रमांक, मूल्य) जोडी tuple म्हणून.",
        code: `items = ["पोळी", "दही"]
print(list(enumerate(items)))`,
        codeLanguage: "python",
        output: `[(0, 'पोळी'), (1, 'दही')]`,
      },
      {
        title: "Interactive: फळांची यादी",
        content: "खाली फळांची यादी start=1 ने फिरवली आणि f-string मध्ये क्रमांक-बिंदू लावला. आधी तसाच चालवा; मग यादीत आणखी एक फळ घाला — क्रमांक आपोआप वाढतात.\n\nstart काढून पहा — क्रमांक 0 पासून सुरू होतात. दोन्ही पर्यायांचा फरक लगेच दिसतो.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
for i, f in enumerate(fruits, start=1):
    print(f"{i}. {f}")`,
        codeLanguage: "python",
        output: `1. सफरचंद
2. केळी
3. द्राक्षे`,
      },
      {
        title: "Mini Project: गुणांचा निकाल",
        content: "विद्यार्थ्यांची नावे आणि गुण — zip ने जोड्यांमध्ये फिरवले. प्रत्येकाला 70 किंवा अधिक गुण असतील तर उत्तीर्ण, नाही तर सुधारणा असा status कळतो.\n\nif mark >= 70 else अशी अट शेवटी; output मध्ये आरोही: 88 (उत्तीर्ण) आणि वेद: 65 (सुधारणा). याद्या वाढवल्या तरी कोड बदलत नाही.",
        code: `students = ["आरोही", "वेद"]
marks = [88, 65]
for name, mark in zip(students, marks):
    status = "उत्तीर्ण" if mark >= 70 else "सुधारणा"
    print(f"{name}: {mark} ({status})")`,
        codeLanguage: "python",
        output: `आरोही: 88 (उत्तीर्ण)
वेद: 65 (सुधारणा)`,
      },
    ],
    practiceQuestions: [
      "enumerate कोणता क्रमांक देतो?",
      "zip मध्ये लांबी वेगळी असल्यास काय?",
      "start=1 चा अर्थ?",
    ],
    quiz: [
      { question: "enumerate काय करतो?", options: ["क्रमांक देतो", "list तयार करतो", "delete करतो", "sort करतो"], correct: 0 },
      { question: "zip मध्ये किती lists वापरता?", options: ["दोन किंवा अधिक", "फक्त एक", "तीन नाही", "आठ"], correct: 0 },
      { question: "start=1 चा अर्थ?", options: ["क्रमांक 1 पासून", "क्रमांक 0 पासून", "उलट", "stop"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन lists जोडून दाखवा.",
      starterCode: `a = ["पहिला", "दुसरा"]
b = [1, 2]
for x, y in zip(a, b):
    print(x, y)`,
      expectedOutput: "पहिला 1\nदुसरा 2",
    },
    interviewQuestions: [
      "enumerate चा फायदा?",
      "zip चा उपयोग?",
    ],
    related: ["python-fstrings", "python-list-methods", "python-functions-advanced"],
    prev: "python-fstrings",
    next: "python-map-filter",
  },
  {
    slug: "python-map-filter",
    categoryId: "python",
    title: "Map, Filter and Sorted",
    marathiTitle: "Map Filter Sorted - रूपांतरण आणि गाळणी",
    level: "advanced",
    minutes: 15,
    summary: "map ने रूपांतर, filter ने गाळणी, sorted ने क्रमवारी — functional style.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Map Filter Sorted - रूपांतरण आणि गाळणी म्हणजे काय?",
        content: "map ने रूपांतर, filter ने गाळणी, sorted ने क्रमवारी — functional style.\nmap(fn, list) — list च्या प्रत्येक item वर function लावून नवीन iterator देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Map Filter Sorted - रूपांतरण आणि गाळणी चे फायदे आणि महत्त्व",
        content: "\"Map Filter Sorted - रूपांतरण आणि गाळणी\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Map: प्रत्येकावर function",
        content: "map(fn, list) — list च्या प्रत्येक item वर function लावून नवीन iterator देतो. result list मध्ये दिसण्यासाठी list(map(...)) लिहावे लागते. lambda ही छोटी एक-ओळी फंक्शन; त्याऐवजी नावाची function देखील देऊ शकता.\n\nखाली square नावाची function आणि map एकत्र — [1, 4, 9, 16].",
        code: `def square(x):
    return x * x
nums = [1, 2, 3, 4]
print(list(map(square, nums)))`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16]`,
      },
      {
        title: "Filter: गाळणी",
        content: "filter(fn, list) फक्त तेच item ठेवते ज्यासाठी function True परततो. list(filter(...)) ने दिसतो.\n\nसकारात्मक संख्या, मोठे शब्द, गुणांपुढील निकाल — अशी गाळणी. खाली 10 पेक्षा मोठ्या संख्या गाळल्या.",
        code: `nums = [10, 25, 8, 30, 3]
print(list(filter(lambda x: x >= 10, nums)))`,
        codeLanguage: "python",
        output: `[10, 25, 30]`,
      },
      {
        title: "Sorted: क्रमवारी",
        content: "sorted(list) नवीन क्रमवार सूची देतो. sorted(list, reverse=True) उलट क्रम. key= दिल्यास एखाद्या गुणधर्मावरून क्रमवारी.\n\nउदा. शब्दाच्या लांबीवरून क्रमवारी — Go (2), Java (4), Python (6).",
        code: `words = ["Python", "Go", "Java"]
print(sorted(words, key=len))`,
        codeLanguage: "python",
        output: `['Go', 'Java', 'Python']`,
      },
      {
        title: "चुका",
        content: "• map/filter चा result list नाही — list() लागते.\n• key function चुकीची तर क्रमवारी खोटी.\n• reverse=True विसरलात तर वरच्या क्रमाने.",
        code: `nums = [5, 2, 8]
print(sorted(nums, reverse=True))`,
        codeLanguage: "python",
        output: `[8, 5, 2]`,
      },
      {
        title: "Interactive: filter सराव",
        content: "5 पेक्षा मोठ्या संख्या गाळून पहा. list(filter(...)) वापरून output तपासा.",
        code: `nums = [1, 10, 3, 20]
big = list(filter(lambda x: x > 5, nums))
print(big)`,
        codeLanguage: "python",
        output: `[10, 20]`,
      },
      {
        title: "Mini Project: उत्तीर्ण गुण",
        content: "scores मधून 40 पेक्षा अधिक गुण गाळून मग क्रमवारी लावा. filter आणि sorted एकत्र — दोन्ही साधने एकाच प्रोग्राममध्ये.",
        code: `scores = [35, 90, 55, 20]
passed = list(filter(lambda s: s >= 40, scores))
print(sorted(passed))`,
        codeLanguage: "python",
        output: `[55, 90]`,
      },
    ],
    practiceQuestions: [
      "map कोणता परिणाम देतो?",
      "filter कशाला ठेवतो?",
      "sorted उलट कसा?",
    ],
    quiz: [
      { question: "map(fn, list) काय करतो?", options: ["प्रत्येकावर fn", "गाळतो", "जोडतो", "delete"], correct: 0 },
      { question: "filter चा परिणाम दिसण्यासाठी?", options: ["list()", "print(fn)", "import", "reverse"], correct: 0 },
      { question: "sorted उलट क्रमासाठी?", options: ["reverse=True", "key=", "desc", "up"], correct: 0 },
    ],
    challenge: {
      prompt: "सम संख्या गाळा.",
      starterCode: `nums = [1, 2, 3, 4, 5, 6]
print(list(filter(lambda x: x % 2 == 0, nums)))`,
      expectedOutput: "[2, 4, 6]",
    },
    interviewQuestions: [
      "map vs filter फरक?",
      "sorted मध्ये key चा उपयोग?",
    ],
    related: ["python-fstrings", "python-enumerate", "python-lambda"],
    prev: "python-enumerate",
    next: "python-iteration-tools",
  },
  {
    slug: "python-iteration-tools",
    categoryId: "python",
    title: "Iteration Tools",
    marathiTitle: "Iteration Tools - sorted reversed zip",
    level: "advanced",
    minutes: 15,
    summary: "sorted, reversed, zip, enumerate ही दैनंदिन iteration साधने एकत्र.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Iteration Tools - sorted reversed zip म्हणजे काय?",
        content: "sorted, reversed, zip, enumerate ही दैनंदिन iteration साधने एकत्र.\nreversed(list) उलट क्रमाने item देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Iteration Tools - sorted reversed zip चे फायदे आणि महत्त्व",
        content: "\"Iteration Tools - sorted reversed zip\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "reversed: उलट क्रम",
        content: "reversed(list) उलट क्रमाने item देतो. ती सूची बदलत नाही — फक्त उलट वाचता येते. list(reversed(x)) लिहून दिसते. स्ट्रिंगवरही उलट क्रम लागू होतो.",
        code: `name = "Python"
print("".join(reversed(name)))`,
        codeLanguage: "python",
        output: `nohtyP`,
      },
      {
        title: "Sorted with Key",
        content: "sorted चे खरे सामर्थ्य key= मध्ये आहे. key ही function प्रत्येक item घेऊन क्रमवारीसाठीचे मूल्य देते.\n\nउदा. tuples मधील दुसऱ्या घटकावरून क्रमवारी — गुणानुसार यादी.",
        code: `pairs = [("आरोही", 95), ("वेद", 72), ("मीरा", 88)]
print(sorted(pairs, key=lambda p: p[1]))`,
        codeLanguage: "python",
        output: `[('वेद', 72), ('मीरा', 88), ('आरोही', 95)]`,
      },
      {
        title: "एकत्र वापर",
        content: "हे tools एकत्र करून शक्तिशाली परिणाम मिळतात. scores ची उलट क्रमवारी, नंतर enumerate(..., start=1) ने क्रमांक — सुबक ranking table तयार होते.",
        code: `scores = [60, 95, 80]
for rank, s in enumerate(sorted(scores, reverse=True), start=1):
    print(f"{rank}. {s}")`,
        codeLanguage: "python",
        output: `1. 95
2. 80
3. 60`,
      },
      {
        title: "चुका",
        content: "• sorted/reversed चा result नवीन — source बदलत नाही.\n• reverse vs reversed गोंधळू नका.\n• key मध्ये चुकीची function तर क्रम खोटा.",
        code: `nums = [4, 1, 3]
print(sorted(nums))
print(nums)`,
        codeLanguage: "python",
        output: `[1, 3, 4]
[4, 1, 3]`,
      },
      {
        title: "Interactive: sorted + enumerate",
        content: "नावे क्रमवारी लावून enumerate ने क्रमांक द्यायचे. start=1 वापरून 1-आधारित क्रमांक.",
        code: `names = ["मीरा", "आरोही", "वेद"]
for i, n in enumerate(sorted(names), start=1):
    print(i, n)`,
        codeLanguage: "python",
        output: `1 आरोही
2 मीरा
3 वेद`,
      },
      {
        title: "Mini Project: Ranking",
        content: "गुणांनुसार ranking — sorted + enumerate एकत्र. data.sort ने मूळ यादी बदलते; sorted() ने नवीन यादी मिळते.",
        code: `data = [("A", 70), ("B", 90), ("C", 60)]
data.sort(key=lambda x: x[1], reverse=True)
for rank, (name, score) in enumerate(data, start=1):
    print(f"{rank}. {name} {score}")`,
        codeLanguage: "python",
        output: `1. B 90
2. A 70
3. C 60`,
      },
    ],
    practiceQuestions: [
      "reversed कशाला बदलत नाही?",
      "key मध्ये काय देतात?",
      "sort vs sorted फरक?",
    ],
    quiz: [
      { question: "sorted चा result?", options: ["नवीन सूची", "source बदलतो", "delete", "join"], correct: 0 },
      { question: "उलट क्रमासाठी?", options: ["reversed", "reverse=true", "desc", "down"], correct: 0 },
      { question: "key मध्ये काय?", options: ["function", "list", "index", "string"], correct: 0 },
    ],
    challenge: {
      prompt: "लांबीनुसार क्रमवारी.",
      starterCode: `words = ["hi", "hello", "a"]
print(sorted(words, key=len))`,
      expectedOutput: "[\"a\", \"hi\", \"hello\"]",
    },
    interviewQuestions: [
      "sort vs sorted फरक?",
      "key function म्हणजे काय?",
    ],
    related: ["python-map-filter", "python-fstrings", "python-lambda"],
    prev: "python-map-filter",
    next: "python-virtualenv",
  },
  {
    slug: "python-virtualenv",
    categoryId: "python",
    title: "Virtual Environments",
    marathiTitle: "Virtualenv - प्रकल्प वातावरण",
    level: "advanced",
    minutes: 15,
    summary: "venv ने प्रत्येक project साठी वेगळे Python वातावरण; pip install सुरक्षित.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "venv म्हणजे काय?",
        content: "प्रत्येक project ला वेगवेगळ्या libraries ची गरज असते. Virtual environment त्या वेगळ्या ठेवते — एका project मधील library दुसऱ्याला त्रास देत नाही. हे team work आणि production साठी आवश्यक.",
        code: `import sys
print("venv = वेगळे Python वातावरण")`,
        codeLanguage: "python",
        output: `venv = वेगळे Python वातावरण`,
      },
      {
        title: "आदेश",
        content: "venv तयार करण्यासाठी:\n\npython -m venv myenv — नवीन वातावरण.\nsource myenv/bin/activate — सक्रिय करणे (Linux).\n\nसक्रिय झाल्यावर pip install त्या environment मध्ये होते.\ndeactivate — बाहेर येणे.\n\nहे आदेश कोड नाहीत — Terminal मध्ये चालतात.",
        code: `import os
print("venv आदेश Terminal मध्ये चालतात")`,
        codeLanguage: "python",
        output: `venv आदेश Terminal मध्ये चालतात`,
      },
      {
        title: "pip freeze: requirements.txt",
        content: "pip freeze > requirements.txt — त्याची यादी file मध्ये. नंतर दुसरीकडे pip install -r requirements.txt ने तीच libraries. reproducible (तसाच पुन्हा) वातावरण बनते.",
        code: `import subprocess
out = subprocess.run(["python3","-c","print(1+1)"], capture_output=True, text=True)
print(out.stdout.strip())`,
        codeLanguage: "python",
        output: `2`,
      },
      {
        title: "फायदे",
        content: "• प्रत्येक project आपापल्या libraries.\n• versions चा संघर्ष नाही.\n• नवीन developer साठी तसाच setup.\n• test/production एकसारखे.",
        code: `print("अलग project वातावरण = सुरक्षितता")`,
        codeLanguage: "python",
        output: `अलग project वातावरण = सुरक्षितता`,
      },
      {
        title: "चुका",
        content: "• सक्रिय न करता pip install — global मध्ये जाते.\n• requirements.txt अपडेट न करणे.\n• venv ला git मध्ये commit करणे (नको).",
        code: `print("venv .gitignore मध्ये ठेवतात")`,
        codeLanguage: "python",
        output: `venv .gitignore मध्ये ठेवतात`,
      },
      {
        title: "Interactive: venv तपासणी",
        content: "venv सक्रिय करा, मग pip --version पहा — path venv च्या folder कडे बदललेला दिसेल.",
        code: `print("venv सक्रिय करा, मग install")`,
        codeLanguage: "python",
        output: `venv सक्रिय करा, मग install`,
      },
      {
        title: "Mini Project: वातावरण नियोजन",
        content: "project च्या requirements.txt बनवून त्यात libraries नोंदवा. नंतर pip install -r requirements.txt ने त्याच पुन्हा तयार करा.",
        code: `print("project/env सर्व्हर + डेटाबेस")`,
        codeLanguage: "python",
        output: `project/env सर्व्हर + डेटाबेस`,
      },
    ],
    practiceQuestions: [
      "venv कशासाठी?",
      "सक्रिय करण्याचा आदेश?",
      "requirements.txt म्हणजे?",
    ],
    quiz: [
      { question: "venv काय करतो?", options: ["वेगळे वातावरण", "install", "delete", "compile"], correct: 0 },
      { question: "सक्रिय करण्याचा आदेश?", options: ["activate", "run", "start", "go"], correct: 0 },
      { question: "requirements.txt?", options: ["libraries ची यादी", "कोड", "logs", "data"], correct: 0 },
    ],
    challenge: {
      prompt: "venv चा मुख्य फायदा.",
      starterCode: `print("अलग libraries")`,
      expectedOutput: "अलग libraries",
    },
    interviewQuestions: [
      "venv का आवश्यक?",
      "freeze काय दाखवतो?",
    ],
    related: ["python-pip-advanced", "python-modules", "python-functions-advanced"],
    prev: "python-iteration-tools",
    next: "python-numpy",
  },
  {
    slug: "python-numpy",
    categoryId: "python",
    title: "NumPy Basics",
    marathiTitle: "NumPy - संख्या array आणि गणित",
    level: "advanced",
    minutes: 16,
    summary: "NumPy arrays, vectorized गणित, mean/sum — डेटा सायन्सचा पाया.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? NumPy - संख्या array आणि गणित चे फायदे आणि महत्त्व",
        content: "✓ हे शेवट करण्यासाठी उपयोगी.\n✓ array चा आकार (shape) आणि घटक (index) महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "NumPy म्हणजे काय?",
        content: "NumPy ही Python ची संख्यात्मक array library आहे. Array म्हणजे एकाच प्रकारच्या संख्यांची सुबक रचना. List पेक्षा array वर गणित एकत्र (vectorized) होते — वेगवान आणि सोपे.",
        code: `import numpy as np
a = np.array([1, 2, 3])
print(a * 2)`,
        codeLanguage: "python",
        output: `[2 4 6]`,
      },
      {
        title: "Array तयार",
        content: "np.array(list) ने array तयार होते. np.zeros(n), np.ones(n) — शून्य/एकाने भरलेली. np.arange(stop) — 0 पासून. हे शेवट करण्यासाठी उपयोगी.",
        code: `import numpy as np
print(np.arange(5))`,
        codeLanguage: "python",
        output: `[0 1 2 3 4]`,
      },
      {
        title: "Shape व Index",
        content: "array चा आकार (shape) आणि घटक (index) महत्त्वाचे. a.shape — (rows, cols). a[0] — पहिला. a[1:] — उरलेले. 2D array (matrix) ला दोन अक्ष्यांपर्यंत गाठता येतो.",
        code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.shape)
print(a[1][0])`,
        codeLanguage: "python",
        output: `(2, 2)
3`,
      },
      {
        title: "गणित",
        content: "array वर गणित element-wise होते — a + 1, a * 2, a ** 2. आणि np.sum, np.mean, np.max सारखे function संपूर्ण array वर. हे हिशोब सोपे करतात.",
        code: `import numpy as np
a = np.array([10, 20, 30])
print(np.sum(a))
print(np.mean(a))`,
        codeLanguage: "python",
        output: `60
20.0`,
      },
      {
        title: "चुका",
        content: "• list आणि array गोंधळू नका — array वर गणित element-wise.\n• shape चुकला तर broadcast error.\n• numpy install न करता import — ModuleNotFoundError.",
        code: `import numpy as np
print(np.array([2, 4]) ** 2)`,
        codeLanguage: "python",
        output: `[ 4 16]`,
      },
      {
        title: "Interactive: array बेरीज",
        content: "दोन arrays ची बेरीज — element-wise addition. a + b ने [5 7 9].",
        code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)`,
        codeLanguage: "python",
        output: `[5 7 9]`,
      },
      {
        title: "Mini Project: सरासरी गुण",
        content: "scores array ची सरासरी np.mean ने. output 85.0 — [80, 90, 70, 100] या चार गुणांची सरासरी.",
        code: `import numpy as np
scores = np.array([80, 90, 70, 100])
print(np.mean(scores))`,
        codeLanguage: "python",
        output: `85.0`,
      },
    ],
    practiceQuestions: [
      "np.array म्हणजे काय?",
      "element-wise म्हणजे?",
      "anyhow सेटअप?",
    ],
    quiz: [
      { question: "array तयार करण्यासाठी?", options: ["np.array", "list()", "dict()", "sort()"], correct: 0 },
      { question: "बेरीज संपूर्ण?", options: ["np.sum", "print", "len", "max"], correct: 0 },
      { question: "vectorized म्हणजे?", options: ["एकत्र गणित", "हाताने", "धीमे", "None"], correct: 0 },
    ],
    challenge: {
      prompt: "array ची सरासरी.",
      starterCode: `import numpy as np
print(np.mean(np.array([2, 4, 6])))`,
      expectedOutput: "4.0",
    },
    interviewQuestions: [
      "list vs array फरक?",
      "vectorized म्हणजे काय?",
    ],
    related: ["python-numbers-random", "python-lists", "python-csv-json"],
    prev: "python-virtualenv",
    next: "python-requests",
  },
  {
    slug: "python-requests",
    categoryId: "python",
    title: "HTTP with Requests",
    marathiTitle: "Requests - वेब विनंत्या",
    level: "advanced",
    minutes: 16,
    summary: "requests library ने HTTP GET/POST; APIs शी बोलणे.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Requests - वेब विनंत्या चे फायदे आणि महत्त्व",
        content: "\"Requests - वेब विनंत्या\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "requests म्हणजे काय?",
        content: "requests ही सर्वात लोकप्रिय HTTP library आहे. requests.get(url) — वेबवरून माहिती मागवते. API (Application Programming Interface) म्हणजे दोन programs मधील संवाद — हवामान, बातम्या, मोठा डेटा सगळे API देतात.",
        code: `print("requests install झाले आहे")`,
        codeLanguage: "python",
        output: `requests install झाले आहे`,
      },
      {
        title: "GET: उत्तर मिळवणे",
        content: "requests.get(url) उत्तर देतो. resp.status_code — 200 म्हणजे यश. resp.json() — data dictionary मध्ये. resp.text — कच्ची मजकूर. status_code मिळते उत्तर.",
        code: `print("status_code: 200 म्हणजे यश")`,
        codeLanguage: "python",
        output: `status_code: 200 म्हणजे यश`,
      },
      {
        title: "Payload व Headers",
        content: "params आणि headers देऊन API ला तपशील देतात. requests.get(url, params={...}, headers={...}). Headers मध्ये key, user-agent, content-type.",
        code: `print("params + headers म्हणजे विनंती तपशील")`,
        codeLanguage: "python",
        output: `params + headers म्हणजे विनंती तपशील`,
      },
      {
        title: "Timeouts व Errors",
        content: "requests.get(url, timeout=10) — 10 सेकंद थांबते. त्रुटीवर (network, 404) exceptions. try/except ने हाताळतात.",
        code: `try:
    raise ConnectionError("network down")
except ConnectionError:
    print("पुन्हा प्रयत्न करा")`,
        codeLanguage: "python",
        output: `पुन्हा प्रयत्न करा`,
      },
      {
        title: "चुका",
        content: "• timeout न दिल्यास हँग होऊ शकते.\n• json() तर data format.\n• API key leaks नको.",
        code: `print("नको API key कोडमध्ये")`,
        codeLanguage: "python",
        output: `नको API key कोडमध्ये`,
      },
      {
        title: "Interactive: GET सराव",
        content: "GET ने data मिळते. status_code तपासा — 200 असेल तर request यशस्वी.",
        code: `print("GET ने data मिळते")`,
        codeLanguage: "python",
        output: `GET ने data मिळते`,
      },
      {
        title: "Mini Project: सुरक्षित network कोड",
        content: "try/except + timeout = सुरक्षित network request. error आल्यास gracefully handle करा.",
        code: `print("try/except + timeout = सुरक्षित")`,
        codeLanguage: "python",
        output: `try/except + timeout = सुरक्षित`,
      },
    ],
    practiceQuestions: [
      "status_code 200 म्हणजे?",
      "timeout कशासाठी?",
      "API म्हणजे?",
    ],
    quiz: [
      { question: "GET साठी request क्या?", options: ["requests.get", "requests.post", "print", "import"], correct: 0 },
      { question: "status 200 म्हणजे?", options: ["यश", "चूक", "404", "500"], correct: 0 },
      { question: "timeout कशासाठी?", options: ["थांबण्यासाठी", "वेग", "skip", "load"], correct: 0 },
    ],
    challenge: {
      prompt: "network error हाताळा.",
      starterCode: `try:
    raise ConnectionError("x")
except ConnectionError:
    print("मिळाले नाही")`,
      expectedOutput: "मिळाले नाही",
    },
    interviewQuestions: [
      "requests म्हणजे काय?",
      "timeout का?",
    ],
    related: ["python-json", "python-web-scraping", "python-exceptions"],
    prev: "python-numpy",
    next: "python-web-scraping",
  },
  {
    slug: "python-web-scraping",
    categoryId: "python",
    title: "Web Scraping",
    marathiTitle: "Web Scraping - पानापासून माहिती",
    level: "advanced",
    minutes: 16,
    summary: "HTML पानातून माहिती काढणे; stdlib parser + BeautifulSoup संकल्पना.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Web Scraping - पानापासून माहिती चे फायदे आणि महत्त्व",
        content: "\"Web Scraping - पानापासून माहिती\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Web Scraping म्हणजे काय?",
        content: "Web scraping म्हणजे वेब पानातून संगणकीय माहिती काढणे. HTML पान हे tags ची रचना — त्यातून विशिष्ट भाग निवडता येतो. BeautifulSoup ही लोकप्रिय library (pip install beautifulsoup4). येथे stdlib parser ने दाखवतो.",
        code: `print("HTML मधून data काढतो")`,
        codeLanguage: "python",
        output: `HTML मधून data काढतो`,
      },
      {
        title: "HTML रचना",
        content: "HTML मध्ये <h1>, <p>, <a>, <li> असे tags. विशिष्ट tag किंवा class निवडून माहिती. सोपे example — एक छोटा HTML भाग stdlib parser ने वाचणे.",
        code: `from html.parser import HTMLParser
class T(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
T().feed("<h1>शीर्षक</h1><p>मजकूर</p>")`,
        codeLanguage: "python",
        output: `शीर्षक
मजकूर`,
      },
      {
        title: "Selectors",
        content: "BeautifulSoup मध्ये soup.find(tag), soup.find_all(tag). CSS class किंवा id ने निवड. .get_text() ने नैसर्गिक text मिळवतात.",
        code: `print("find_all ने सर्व tags मिळतात")`,
        codeLanguage: "python",
        output: `find_all ने सर्व tags मिळतात`,
      },
      {
        title: "Text व Attribute",
        content: "एखाद्या घटकाचा text किंवा attribute (जसे href, src) काढता येतो. .text — आतील मजकूर. [\"href\"] — दुवा. हे newspaper ते products पर्यंत सर्वत्र.",
        code: `print("attribute जसे href काढतो")`,
        codeLanguage: "python",
        output: `attribute जसे href काढतो`,
      },
      {
        title: "Rules व चुका",
        content: "• Website च्या rules (robots.txt) पाळा.\n• खूप विनंत्या करू नका (fair use).\n• कॉपीराईटची काळजी.\n• HTML बदलला तर scraper तुटतो.",
        code: `print("rules आणि fair use पाळा")`,
        codeLanguage: "python",
        output: `rules आणि fair use पाळा`,
      },
      {
        title: "Interactive: parser सराव",
        content: "stdlib parser ने HTML शीर्षके काढून पहा. handle_data callback दर CSS tag चा text छापतो.",
        code: `print("stdlib parser ने शीर्षके")`,
        codeLanguage: "python",
        output: `stdlib parser ने शीर्षके`,
      },
      {
        title: "Mini Project: HTML शीर्षके",
        content: "HTML यादीतून सर्व items काढा — <li> tags मधील text handle_data ने print.",
        code: `from html.parser import HTMLParser
class H(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
H().feed("<ul><li>अ</li><li>ब</li></ul>")`,
        codeLanguage: "python",
        output: `अ
ब`,
      },
    ],
    practiceQuestions: [
      "scraping म्हणजे?",
      "find_all काय करतो?",
      "substantial rules?",
    ],
    quiz: [
      { question: "scraping म्हणजे?", options: ["HTML पासून data", "install", "delete", "compile"], correct: 0 },
      { question: "soup.find_all काय?", options: ["सर्व tags", "एक tag", "गणित", "logs"], correct: 0 },
      { question: "rules काय पाळतात?", options: ["robots.txt", "compile", "speed", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "HTML text काढा.",
      starterCode: `from html.parser import HTMLParser
class P(HTMLParser):
    def handle_data(self, d):
        if d.strip(): print(d.strip())
P().feed("<p>नमस्कार</p>")`,
      expectedOutput: "नमस्कार",
    },
    interviewQuestions: [
      "scraping म्हणजे?",
      "rules का?",
    ],
    related: ["python-requests", "python-json", "python-strings"],
    prev: "python-requests",
    next: "python-threading",
  },
  {
    slug: "python-threading",
    categoryId: "python",
    title: "Threading",
    marathiTitle: "Threading - समांतर काम",
    level: "advanced",
    minutes: 16,
    summary: "threads ने एकाच वेळी काम; lock, join, deterministic output.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Threading - समांतर काम चे फायदे आणि महत्त्व",
        content: "✓ .join() ने output क्रमीक राहतो — हे deterministic साठी महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Threading म्हणजे काय?",
        content: "Threads म्हणजे एकाच program मधील समांतर कामाची ओझी. हे वेगवेगळ्या कामांना एकत्र पुढे नेते. threading हा stdlib module आहे — उदा. एक thread file वाचतो, दुसरा print करतो.",
        code: `import threading
print("thread तयार करायला threading.Thread")`,
        codeLanguage: "python",
        output: `thread तयार करायला threading.Thread`,
      },
      {
        title: "Thread तयार आणि चालवा",
        content: "t = threading.Thread(target=fn) — नवीन thread. t.start() — सुरू करणे. t.join() — पूर्ण होण्याची वाट.\n\n.join() ने output क्रमीक राहतो — हे deterministic साठी महत्त्वाचे.",
        code: `import threading, time
def work(name):
    print("काम", name)
t1 = threading.Thread(target=work, args=("अ",))
t1.start()
t1.join()`,
        codeLanguage: "python",
        output: `काम अ`,
      },
      {
        title: "Lock: सुरक्षित क्षेत्र",
        content: "अनेक threads एकाच data वर काम करत असतील तर Lock हवा. lock.acquire() ते lock.release() — एका वेळी एकच thread. with lock: वापरल्यास आपोआप. यामुळे data corruption टळते.",
        code: `import threading
lock = threading.Lock()
with lock:
    print("सुरक्षित क्षेत्र")`,
        codeLanguage: "python",
        output: `सुरक्षित क्षेत्र`,
      },
      {
        title: "Deterministic Order",
        content: "थ्रेड्सचा output क्रम इच्छेनुसार बदलू शकतो. नियंत्रित output साठी .join() प्रत्येकाला लागून. किंवा results एकत्र करून नंतर क्रमवारी.",
        code: `import threading
def f(x):
    return x + 1
res = []
res.append(f(1))
res.append(f(2))
print(res)`,
        codeLanguage: "python",
        output: `[2, 3]`,
      },
      {
        title: "चुका",
        content: "• join न सोडल्यास अनपेक्षित क्रम.\n• lock नसल्यास data race.\n• अनेक threads CPU कामासाठी वेग नाही (GIL) — I/O साठी वेग.",
        code: `print("I/O साठी threads वेग देतात")`,
        codeLanguage: "python",
        output: `I/O साठी threads वेग देतात`,
      },
      {
        title: "Interactive: list comprehension",
        content: "list comprehension ने एकत्र computation. thread नसल्यासही ही पद्धत काम करते.",
        code: `import threading
def job(i):
    return i * 2
print([job(i) for i in range(3)])`,
        codeLanguage: "python",
        output: `[0, 2, 4]`,
      },
      {
        title: "Mini Project: लॉकसह क्रमिक निकाल",
        content: "lock वापरून अनेक threads एकत्र मूल्ये जोडतात. with lock: मध्ये append केल्याने data safe.",
        code: `import threading
lock = threading.Lock()
def add(li, v):
    with lock:
        li.append(v)
res = []
add(res, 5)
add(res, 9)
print(res)`,
        codeLanguage: "python",
        output: `[5, 9]`,
      },
    ],
    practiceQuestions: [
      "start काय करतो?",
      "join काय करतो?",
      "lock म्हणजे?",
    ],
    quiz: [
      { question: "thread सुरू करण्यासाठी?", options: ["start()", "run all", "go()", "init"], correct: 0 },
      { question: "join काय?", options: ["पूर्ण वाट", "delete", "skip", "pause"], correct: 0 },
      { question: "data race टाळण्यासाठी?", options: ["Lock", "import", "sleep", "print"], correct: 0 },
    ],
    challenge: {
      prompt: "lock सह मूल्य.",
      starterCode: `import threading
lock = threading.Lock()
with lock:
    print("ok")`,
      expectedOutput: "ok",
    },
    interviewQuestions: [
      "thread म्हणजे?",
      "GIL म्हणजे?",
    ],
    related: ["python-async", "python-functions-advanced", "ai-python"],
    prev: "python-web-scraping",
    next: "python-async",
  },
  {
    slug: "python-async",
    categoryId: "python",
    title: "Async Programming",
    marathiTitle: "Async - आणखी समांतरता",
    level: "advanced",
    minutes: 16,
    summary: "async/await + asyncio ने I/O काम स्थगित; कोराउटीन्स.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Async - आणखी समांतरता चे फायदे आणि महत्त्व",
        content: "\"Async - आणखी समांतरता\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "asyncio म्हणजे काय?",
        content: "asyncio हा Python चा asynchronous I/O module. async def — coroutine function. await — थांबून परत येण्याची जागा. asyncio.run(main()) — coroutine चालवते. I/O काम (network, files) दरम्यान दुसरे काम पुढे जाते.",
        code: `import asyncio
async def hi():
    print("नमस्कार")
asyncio.run(hi())`,
        codeLanguage: "python",
        output: `नमस्कार`,
      },
      {
        title: "async def आणि await",
        content: "async function ला थेट call करता येत नाही — await करावी लागते. asyncio.run() मुख्य coroutine चालवते. await मधे program थांबतो आणि I/O ची वाट पाहतो.",
        code: `import asyncio
async def compute():
    return 40 + 2
async def main():
    print(await compute())
asyncio.run(main())`,
        codeLanguage: "python",
        output: `42`,
      },
      {
        title: "await व Sleep",
        content: "await asyncio.sleep(0.1) — मध्ये थांबतो आणि इतर काम पुढे. खऱ्या program मध्ये network wait साठी. asyncio ने कार्यक्षमता वाढते.",
        code: `import asyncio
async def t(name):
    await asyncio.sleep(0.01)
    return name
async def main():
    a = await t("पहिला")
    b = await t("दुसरा")
    print(a, b)
asyncio.run(main())`,
        codeLanguage: "python",
        output: `पहिला दुसरा`,
      },
      {
        title: "Gather: अनेक एकत्र",
        content: "asyncio.gather(*coroutines) अनेक coroutines एकत्र. सगळ्यांचे परिणाम एकत्र येतात. हे I/O काम पटकन पूर्ण करण्यासाठी.",
        code: `import asyncio
async def sq(x):
    return x * x
async def main():
    r = await asyncio.gather(sq(2), sq(3))
    print(r)
asyncio.run(main())`,
        codeLanguage: "python",
        output: `[4, 9]`,
      },
      {
        title: "चुका",
        content: "• async function ला थेट call — coroutine मिळतो आणि चालत नाही.\n• asyncio.run फक्त एकदा मुख्य.\n• CPU कामासाठी async नाही — फक्त I/O.",
        code: `import asyncio
async def f():
    return 1
print(asyncio.run(f()))`,
        codeLanguage: "python",
        output: `1`,
      },
      {
        title: "Interactive: add coroutine",
        content: "async add function बनवून asyncio.run ने चालवा. दोन numbers चा बेरीज.",
        code: `import asyncio
async def add(a, b):
    return a + b
print(asyncio.run(add(3, 4)))`,
        codeLanguage: "python",
        output: `7`,
      },
      {
        title: "Mini Project: gather ने अनेक काम",
        content: "asyncio.gather ने दोन coroutines एकत्र चालवा. दोन्ही परिणाम list मध्ये.",
        code: `import asyncio
async def w(x):
    return x
async def main():
    print(await asyncio.gather(w(1), w(2)))
asyncio.run(main())`,
        codeLanguage: "python",
        output: `[1, 2]`,
      },
    ],
    practiceQuestions: [
      "async def काय?",
      "await म्हणजे?",
      "gather काय?",
    ],
    quiz: [
      { question: "coroutine function साठी?", options: ["async def", "def", "class", "import"], correct: 0 },
      { question: "थांबण्यासाठी?", options: ["await", "sleep", "stop", "wait"], correct: 0 },
      { question: "अनेक एकत्र?", options: ["gather", "join", "sum", "all"], correct: 0 },
    ],
    challenge: {
      prompt: "message print करा.",
      starterCode: `import asyncio
async def m():
    print("हाय")
asyncio.run(m())`,
      expectedOutput: "हाय",
    },
    interviewQuestions: [
      "async vs threading फरक?",
      "await काय?",
    ],
    related: ["python-threading", "python-functions-advanced", "python-regex"],
    prev: "python-threading",
    next: "python-pip-advanced",
  },
  {
    slug: "python-pip-advanced",
    categoryId: "python",
    title: "Advanced pip",
    marathiTitle: "pip प्रगत - package व्यवस्थापन",
    level: "advanced",
    minutes: 15,
    summary: "pip install/uninstall/freeze, versions, requirements — व्यावसायिक package व्यवस्थापन.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? pip प्रगत - package व्यवस्थापन चे फायदे आणि महत्त्व",
        content: "✓ प्रत्येक project च्या library गरजा वेगळ्या असतात; सगळं global ठिकाणी install केल्यास version conflict होतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "pip म्हणजे काय?",
        content: "pip हा Python चा package installer — इतरांनी लिहिलेल्या library (requests, numpy इ.) एका command ने install करतो. Python 3.x सोबत pip आधीच येतो; वेगळे install करावं लागत नाही.\n\ninstall झाली की कोड मध्ये import requests लिहून ती वापरता येते. Termux सारख्या काही ठिकाणी pip ऐवजी python3 -m pip लिहावं लागतं — दोन्ही तोच pip आहे.",
        code: `pip install requests`,
        codeLanguage: "shell",
        output: `Successfully installed requests-2.31.0`,
      },
      {
        title: "install, list, uninstall",
        content: "तीन नेहमीच्या command:\n\npip install नाव — नवीन library बसवतो.\npip list — install केलेल्या library ची नावे आणि आवृत्त्या दाखवतो.\npip uninstall नाव — ती library काढून टाकतो.\n\nखाली pip list चा ठराविक output — प्रत्येक library ची आवृत्ती शेजारी.",
        code: `pip list`,
        codeLanguage: "shell",
        output: `Package    Version
---------- -------
numpy      1.26.0
requests   2.31.0`,
      },
      {
        title: "आवृत्ती निवडणे",
        content: "pip install नाव==1.2.3 ही रचना नेमकी आवृत्ती निवडते. साधा pip install नाव नवीनतम आवृत्ती घेतो, पण सगळ्यात नवी आवृत्ती एखाद्या project शी जुळणारच असं नाही.\n\npip install -U नाव (+upgrade) ने नवीन आवृत्तीवर जातात. == ने आवृत्ती बांधून ठेवल्याने reproducible setup मिळतो.",
        code: `pip install numpy==1.26.0`,
        codeLanguage: "shell",
        output: `Successfully installed numpy-1.26.0`,
      },
      {
        title: "requirements.txt",
        content: "pip freeze — install केलेल्या library च्या नावे आणि आवृत्त्या == स्वरूपात छापतो. तो output file मध्ये नेण्यासाठी > requirements.txt जोडतात.\n\nनवीन ठिकाणी pip install -r requirements.txt लिहितात — project चं setup तसाच उभा राहतो.",
        code: `pip freeze`,
        codeLanguage: "shell",
        output: `numpy==1.26.0
requests==2.31.0`,
      },
      {
        title: "venv मध्येच install करा",
        content: "प्रत्येक project च्या library गरजा वेगळ्या असतात; सगळं global ठिकाणी install केल्यास version conflict होतो. प्रत्येक project ला स्वतःचं venv बनवतात आणि त्यातच install करतात.\n\nsys.executable ने कोणत्या python मध्ये आहोत ते तपासता येते.",
        code: `import sys
print(sys.executable)`,
        codeLanguage: "python",
        output: `/data/data/com.termux/files/usr/bin/python3`,
      },
      {
        title: "सामान्य चुका",
        content: "✗ venv सक्रिय न करता pip install — package global मध्ये जातं.\n\n✗ नवीन library install केल्यावर requirements.txt अपडेट न करणे — पुन्हा pip freeze घ्या.\n\n✗ package चं नाव चुकलं — pip error: No matching distribution found. Spelling तपासा.",
        code: `pip install reqeusts`,
        codeLanguage: "shell",
        output: `ERROR: No matching distribution found for reqeusts`,
      },
      {
        title: "Interactive: pip --version",
        content: "pip --version चा शेवटचा भाग pip कोणत्या python सोबत बसला आहे ते दाखवतो. venv बनवून सक्रिय करा आणि पुन्हा पहा — path बदललेला दिसेल.",
        code: `pip --version`,
        codeLanguage: "shell",
        output: `pip 23.2.1 from /usr/lib/python3/dist-packages/pip (python 3.11)`,
      },
      {
        title: "व्यावसायिक सवयी",
        content: "• project ला स्वतःचं venv बनवून त्यातच install करा.\n• प्रत्येक install नंतर pip freeze करून requirements.txt अपडेट करा.\n• वेळोवेळी pip list पाहून अनावश्यक packages हटवा.\n• package च्या नावावर खात्री हवी असेल तर अधिकृत दस्तऐवज पडताळा.\n\nहे पाळलं की कोणत्याही ठिकाणी project तसाच चालतो.",
      },
    ],
    practiceQuestions: [
      "freeze म्हणजे?",
      "version निवड कशी?",
      "venv का?",
    ],
    quiz: [
      { question: "library install?", options: ["pip install", "pip delete", "import", "exec"], correct: 0 },
      { question: "एकाच version?", options: ["==", ">=", "at", "~"], correct: 0 },
      { question: "requirements?", options: ["yादी file", "कोड", "data", "logs"], correct: 0 },
    ],
    challenge: {
      prompt: "freeze concept.",
      starterCode: `print("pip freeze > requirements.txt")`,
      expectedOutput: "pip freeze > requirements.txt",
    },
    interviewQuestions: [
      "pip install चा परिणाम?",
      "version lock कसा?",
    ],
    related: ["python-virtualenv", "python-modules", "python-numpy"],
    prev: "python-async",
    next: "python-practical-project",
  },
  {
    slug: "python-practical-project",
    categoryId: "python",
    title: "Practical Python Project",
    marathiTitle: "Practical Project - सर्व एकत्र",
    level: "advanced",
    minutes: 18,
    summary: "f-strings, enumerate, zip, sorted, numpy, threading एकत्र करून एक कार्यशील project.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Practical Project - सर्व एकत्र चे फायदे आणि महत्त्व",
        content: "\"Practical Project - सर्व एकत्र\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "हा शेवटचा project — या level मधील सर्व साधने एकत्र. आपण एक छोटा गुण विश्लेषक बनवतो.\n\nf-strings ने सुबक output, enumerate ने क्रम, zip ने जोड्या, numpy ने सरासरी.",
        code: `print("गुण विश्लेषक project")`,
        codeLanguage: "python",
        output: `गुण विश्लेषक project`,
      },
      {
        title: "डेटा व Zip",
        content: "विद्यार्थ्यांची नावे आणि गुण — zip ने जोड्या बनवतो. सरळ list मध्ये जोड्या — हे पुढील गणनेचा पाया.",
        code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
pairs = list(zip(names, marks))
print(len(pairs))`,
        codeLanguage: "python",
        output: `3`,
      },
      {
        title: "Numpy सरासरी",
        content: "numpy ने सरासरी आणि बेरीज. np.mean(marks) — सरासरी गुण. f-string ने सुबक format.",
        code: `import numpy as np
marks = [88, 65, 92]
print(f"सरासरी: {np.mean(marks):.1f}")`,
        codeLanguage: "python",
        output: `सरासरी: 81.7`,
      },
      {
        title: "Ranking",
        content: "sorted ने उतरत्या क्रमाने गुणांची रांग. enumerate(..., start=1) ने क्रमांक. f-string ने सुबक table.",
        code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n} {m}")`,
        codeLanguage: "python",
        output: `1. मीरा 92
2. आरोही 88
3. वेद 65`,
      },
      {
        title: "Threading",
        content: "समांतर काम दाखवण्यासाठी threads. येथे साधा क्रमिक computation — lock वापरून विश्वसनीय result.",
        code: `import threading
lock = threading.Lock()
with lock:
    print("विश्लेषण तयार")`,
        codeLanguage: "python",
        output: `विश्लेषण तयार`,
      },
      {
        title: "Interactive: Summary",
        content: "sum आणि max ने एकूण गुण आणि उच्च गुण — एका ओळीत.",
        code: `marks = [88, 65, 92]
print(f"एकूण: {sum(marks)}, उच्च: {max(marks)}")`,
        codeLanguage: "python",
        output: `एकूण: 245, उच्च: 92`,
      },
      {
        title: "Mini Project: संपूर्ण विश्लेषक",
        content: "सर्व साधने एकत्र — names, marks, sorted ranking, numpy mean. f-string ने सुबक output.",
        code: `import numpy as np
names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
print("=== गुण विश्लेषक ===")
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n}: {m}")
print(f"सरासरी: {np.mean(marks):.1f}")`,
        codeLanguage: "python",
        output: `=== गुण विश्लेषक ===
1. मीरा: 92
2. आरोही: 88
3. वेद: 65
सरासरी: 81.7`,
      },
    ],
    practiceQuestions: [
      "zip + sorted कसे एकत्र?",
      "enumerate start=1 काय?",
      "numpy mean काय?",
    ],
    quiz: [
      { question: "ranking साठी कोणते?", options: ["sorted + reverse", "print", "import", "break"], correct: 0 },
      { question: "क्रमांकासाठी?", options: ["enumerate", "random", "join", "count"], correct: 0 },
      { question: "सरासरी?", options: ["np.mean", "np.max", "len", "abs"], correct: 0 },
    ],
    challenge: {
      prompt: "सरासरी + सर्वोच्च.",
      starterCode: `import numpy as np
m = [70, 90, 80]
print(f"{np.mean(m)}")`,
      expectedOutput: "80.0",
    },
    interviewQuestions: [
      "या project मध्ये काय वापरले?",
      "शेवटचा level?",
    ],
    related: ["python-fstrings", "python-numpy", "python-threading"],
    prev: "python-pip-advanced",
    next: "python-oop-project",
  },
];
