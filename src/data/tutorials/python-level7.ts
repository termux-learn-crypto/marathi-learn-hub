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
      { title: "1. परिचय", content: "f-string म्हणजे formatted string — variable चे मूल्य थेट string मध्ये घालण्याची सोपी पद्धत.\n\nf\"...\" असे लिहितात.\n\nआत {variable} ठेवलं तर ते मूल्य गिरवले जाते.\n\n+'पासून string जोडण्यापेक्षा फार आरामदायी आणि वाचनीय.\nf-string उत्तम outcome.\nf-string स्पष्ट दाखवते.\nf-string पटकन लिहितो.\nf-string वाचायला सोपे.\nf-string उत्तम outcome.\nf-string स्पष्ट दाखवते.\nf-string पटकन लिहितो.\nf-string वाचायला सोपे.\nf-string उत्तम outcome.\nf-string स्पष्ट दाखवते.\nf-string पटकन लिहितो.", code: `name = "आरोही"
print(f"नमस्कार, {name}!")`, output: "नमस्कार, आरोही!", codeLanguage: "python" },
      { title: "2. Expressions", content: "फक्त variable नाही तर संपूर्ण expression { } मध्ये घालता येते.\n\nf\"{a + b}\" — बेरीज.\nf\"{x * 2}\" — गुणाकार.\nf\"{len(text)}\" — function कॉल.\n\nकाहीही evaluate होईल ते दाखवता.\n{ } ब्रॅकेट verify करा.\n{ } ब्रॅकेट अचूक असते.\n{ } ब्रॅकेट धडा लक्षात.\n{ } ब्रॅकेट आज शिकतो.\n{ } ब्रॅकेट सरळ मिळते.\n{ } ब्रॅकेट नवीन मूल्य.\n{ } ब्रॅकेट output निश्चित.\n{ } ब्रॅकेट आज शिकतो.\n{ } ब्रॅकेट सरळ मिळते.\n{ } ब्रॅकेट नवीन मूल्य.\n{ } ब्रॅकेट output निश्चित.\n{ } ब्रॅकेट एकाच ओळीत.\n{ } ब्रॅकेट प्रयोग करा.\n{ } ब्रॅकेट चालवा पहा.\n{ } ब्रॅकेट चालवा पहा.\n{ } ब्रॅकेट verify करा.\n{ } ब्रॅकेट अचूक असते.\n{ } ब्रॅकेट धडा लक्षात.\n{ } ब्रॅकेट आज शिकतो.\n{ } ब्रॅकेट सरळ मिळते.\n{ } ब्रॅकेट नवीन मूल्य.", code: `a = 10
b = 5
print(f"बेरीज: {a + b}, गुणाकार: {a * b}")`, output: "बेरीज: 15, गुणाकार: 50", codeLanguage: "python" },
      { title: "3. Format Specs", content: "{f\"{x:.2f}\"} — दोन दशांश.\n{f\"{n:3d}\"} — रुंदी.\nf\"{s:>10}\" — उजवीकडे संरेखित.\n\nहे table किंवा अचूक output साठी उपयोगी.\nसंरेखन सरावा उत्तम.\nसंरेखन वाचनीय output.\nसंरेखन format शिका.\nसंरेखन अचूक आकडे.\nसंरेखन व्यवहारी वापर.\nprecision सरावा उत्तम.\nprecision वाचनीय output.\nprecision format शिका.\nprecision अचूक आकडे.\nprecision format शिका.\nprecision अचूक आकडे.\nprecision नियंत्रण देतो.\nprecision गोल अचूक.\nprecision नियंत्रण देतो.\nprecision गोल अचूक.\nprecision सरावा उत्तम.\nprecision वाचनीय output.\nसंरेखन व्यवहारी वापर.\nसंरेखन नियंत्रण देतो.\nसंरेखन गोल अचूक.\nसंरेखन सरावा उत्तम.\nसंरेखन वाचनीय output.\nसंरेखन गोल अचूक.\nसंरेखन सरावा उत्तम.\nसंरेखन वाचनीय output.\nसंरेखन format शिका.\nसंरेखन अचूक आकडे.\nprecision वाचनीय output.\nprecision format शिका.\nprecision अचूक आकडे.\nprecision नियंत्रण देतो.", code: `price = 12.34567
print(f"किंमत: {price:.2f}")`, output: "किंमत: 12.35", codeLanguage: "python" },
      { title: "4. एकाधिक fields", content: "एकाच f-string मध्ये अनेक variables व expressions एकत्र.\n\nf\"{name} ने {score} गुण मिळवले\".\n\nहे लांब सुसंगत वाक्य तयार करते.\n\nडेटा सोबत मजकूर सुबकपणे.\n\nव्यावहारिक output मध्ये खूप वापर.", code: `name = "मीरा"
score = 92
subject = "विज्ञान"
print(f"{name} ने {subject} मध्ये {score} गुण मिळवले")`, output: "मीरा ने विज्ञान मध्ये 92 गुण मिळवले", codeLanguage: "python" },
      { title: "5. चुका", content: "• f उपसर्ग विसरलात तर {name} असेच छापते.\n• format spec चुकला तर error.\n• nested quotes {f\"...\"} काळजीपूर्वक.\n\nf-string ने खरे सामर्थ्य आणि कमी चुका.", code: `x = 7
print(f"{x} चा वर्ग {x * x}")`, output: "7 चा वर्ग 49", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `name = "वेद"
print(f"नमस्कार {name}, शुभ संध्याकाळ")`, output: "नमस्कार वेद, शुभ संध्याकाळ", codeLanguage: "python" },
      { title: "Mini Project", content: "सुबक card तयार करा:\nआत्मविश्वास गर्व वाटे.\nआत्मविश्वास गर्व वाटे.\nआत्मविश्वास सुंदर दिसते.\nआत्मविश्वास सुंदर दिसते.\nआत्मविश्वास गर्व वाटे.", code: `name = "आरोही"
score = 95
print(f"=== {name} ===\\nगुण: {score}")`, output: "=== आरोही ===\nगुण: 95", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "enumerate हा built-in function जो list च्या प्रत्येक item बरोबर क्रमांक देतो.\n\nसामान्य loop मध्ये i = 0; i += 1 असे हाताने क्रमांक वाढवावे लागतात. enumerate ते आपोआप करते.\n\n{enumerate(list)} म्हणजे (index, item) च्या जोड्या.\n\nfor i, item in enumerate(items): — असे लिहिलं तर i हा क्रमांक, item हे मूल्य.\n\nतुम्हाला क्रमांकाबरोबर मूल्य हवं असेल तेव्हा हे आदर्श.\nenumerate उत्तम वापर.\nenumerate देतो क्रम.\nenumerate देतो क्रम.\nenumerate अचूक मिळते.\nenumerate अचूक मिळते.\nenumerate उत्तम वापर.\nenumerate देतो क्रम.", code: `items = ["पोळी", "दही", "पाव"]
for i, item in enumerate(items):
    print(i, item)`, output: "0 पोळी\n1 दही\n2 पाव", codeLanguage: "python" },
      { title: "2. Start parameter", content: "enumerate मध्ये start देऊन क्रमांक कुठून सुरू करायचा हे ठरवता येते.\n\n{enumerate(items, start=1)} म्हणजे 1, 2, 3...\n\nसामान्यतः माणसांनी मोजणी 1 पासून सुरू होते, म्हणून यादी दाखवताना start=1 उपयोगी.\n\nक्रमांक आणि मूल्य दोन्ही सोबत.\nअनुक्रमणिका देते क्रम.\nअनुक्रमणिका सरळ वापर.\nअनुक्रमणिका सरळ वापर.\nअनुक्रमणिका देते क्रम.", code: `snacks = ["चिवडा", "पोहे", "सेव"]
for i, s in enumerate(snacks, start=1):
    print(i, s)`, output: "1 चिवडा\n2 पोहे\n3 सेव", codeLanguage: "python" },
      { title: "3. Zip म्हणजे काय", content: "zip दोन किंवा अधिक lists च्या item ला जोड्या जोडतो.\n\n{zip(list1, list2)} म्हणजे (पहिला, पहिला), (दुसरा, दुसरा)...\n\nfor a, b in zip(x, y): — असे फिरवायचे.\n\nलांबी वेगळी असली तर सर्वात लहान list इतक्या जोड्या बनतात.", code: `names = ["आरोही", "वेद"]
scores = [95, 72]
for n, s in zip(names, scores):
    print(n, s)`, output: "आरोही 95\nवेद 72", codeLanguage: "python" },
      { title: "4. Zip + Enumerate एकत्र", content: "तीन किंवा चार lists एकत्र हव्या असतील तर zip ला अनेक arguments देतात.\n\n{zip(a, b, c)} म्हणजे तीन घटकांच्या जोड्या.\n\nआणि क्रमांक हवा असेल तर enumerate(zipped) वापरू शकतो.\n\nसगळे एकत्र करून सुबक table बनते.", code: `names = ["आरोही", "वेद", "मीरा"]
subs = ["मराठी", "गणित", "विज्ञान"]
for i, (n, s) in enumerate(zip(names, subs), start=1):
    print(i, n, s)`, output: "1 आरोही मराठी\n2 वेद गणित\n3 मीरा विज्ञान", codeLanguage: "python" },
      { title: "5. चुका", content: "सामान्य चुका:\n\n• enumerate चा result list नाही, iterator आहे — list(enumerate(x)) लागते.\n• zip च्या जोड्या unpack करताना जोडप्यांची संख्या बरोबर हवी.\n• लांबी वेगवेगळी असल्यास लहान list ठरतो.", code: `a = [1, 2, 3]
b = [10, 20]
for x, y in zip(a, b):
    print(x + y)`, output: "11\n22", codeLanguage: "python" },
      { title: "6. Interactive", content: "सरावासाठी:", code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
for i, f in enumerate(fruits, start=1):
    print(f"{i}. {f}")`, output: "1. सफरचंद\n2. केळी\n3. द्राक्षे", codeLanguage: "python" },
      { title: "Mini Project", content: "दोन lists जोडून निकाल:", code: `students = ["आरोही", "वेद"]
marks = [88, 65]
for name, mark in zip(students, marks):
    status = "उत्तीर्ण" if mark >= 70 else "सुधारणा"
    print(f"{name}: {mark} ({status})")`, output: "आरोही: 88 (उत्तीर्ण)\nवेद: 65 (सुधारणा)", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "map(fn, list) — list च्या प्रत्येक item वर function लावून नवीन परिणाम.\n\nfilter(fn, list) — फक्त ज्या item साठी function True परततो ते ठेवते.\n\nsorted(list) — क्रमवारी लावते.\n\nलूप लिहिण्याऐवजी एका ओळीत काम होते.", code: `nums = [1, 2, 3]
print(list(map(lambda x: x * 10, nums)))`, output: "[10, 20, 30]", codeLanguage: "python" },
      { title: "2. Map", content: "map(fn, list) प्रत्येक item ला function लावून नवीन iterator देतो.\n\nresult list मध्ये दिसण्यासाठी list(map(...)) लिहावे लागते.\n\nlambda ही छोटी एक-ओळी फंक्शन.\n\nत्याऐवजी नावाची function देखील देऊ शकता.\nरूपांतरण करते रूपांतर.\nरूपांतरण करते रूपांतर.", code: `def square(x):
    return x * x
nums = [1, 2, 3, 4]
print(list(map(square, nums)))`, output: "[1, 4, 9, 16]", codeLanguage: "python" },
      { title: "3. Filter", content: "filter(fn, list) फक्त those item ठेवते ज्यासाठी function True.\n\nThe function प्रत्येक item घेऊन True/False देतो.\n\nlist(filter(...)) ने दिसतो.\n\nसकारात्मक संख्या, मोठे शब्द, गुणांपुढील निकाल — अशी गाळणी.", code: `nums = [10, 25, 8, 30, 3]
print(list(filter(lambda x: x >= 10, nums)))`, output: "[10, 25, 30]", codeLanguage: "python" },
      { title: "4. Sorted", content: "sorted(list) नवीन क्रमवार सूची देतो.\n\nsorted(list, reverse=True) उलट क्रम.\n\nkey= दिल्यास एखाद्या गुणधर्मावरून क्रमवारी.\n\nउदा. शब्दाच्या लांबीवरून क्रमवारी.\nलांबीनुसार अचूक क्रम.\nलांबीनुसार क्रम लावते.\nलांबीनुसार अचूक क्रम.\nलांबीनुसार अचूक क्रम.", code: `words = ["Python", "Go", "Java"]
print(sorted(words, key=len))`, output: "['Go', 'Java', 'Python']", codeLanguage: "python" },
      { title: "5. चुका", content: "• map/filter चा result list नाही — list() लागते.\n• key function चुकीची तर क्रमवारी खोटी.\n• reverse=True विसरलात तर वरच्या क्रमाने.", code: `nums = [5, 2, 8]
print(sorted(nums, reverse=True))`, output: "[8, 5, 2]", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `nums = [1, 10, 3, 20]
big = list(filter(lambda x: x > 5, nums))
print(big)`, output: "[10, 20]", codeLanguage: "python" },
      { title: "Mini Project", content: "एकत्र वापर:", code: `scores = [35, 90, 55, 20]
passed = list(filter(lambda s: s >= 40, scores))
print(sorted(passed))`, output: "[55, 90]", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "Python मध्ये अनेक iteration tools आहेत जे loops शक्तिशाली बनवतात.\n\nsorted — क्रमवारी. reversed — उलट क्रम. zip — जोड्या. enumerate — क्रमांक.\n\nहे सर्व built-in आहेत, install करावे लागत नाही.\n\nयोग्य साधन योग्य ठिकाणी वापरलं तर कोड छोटा आणि स्पष्ट.", code: `nums = [3, 1, 2]
print(list(reversed(sorted(nums))))`, output: "[3, 2, 1]", codeLanguage: "python" },
      { title: "2. reversed", content: "reversed(list) उलट क्रमाने item देतो.\n\nती सूची बदलत नाही — फक्त उलट वाचता येते.\n\nlist(reversed(x)) लिहून दिसते.\n\nस्ट्रिंगवरही उलट क्रम लागू होतो.", code: `name = "Python"
print("".join(reversed(name)))`, output: "nohtyP", codeLanguage: "python" },
      { title: "3. Sorted with Key", content: "sorted चे खरे सामर्थ्य key= मध्ये आहे.\n\nkey ही function प्रत्येक item घेऊन क्रमवारीसाठीचे मूल्य देते.\n\nlambda key= असा वापरतात.\n\nउदा. tuples मधील दुसऱ्या घटकावरून क्रमवारी.", code: `pairs = [("आरोही", 95), ("वेद", 72), ("मीरा", 88)]
print(sorted(pairs, key=lambda p: p[1]))`, output: "[('वेद', 72), ('मीरा', 88), ('आरोही', 95)]", codeLanguage: "python" },
      { title: "4. एकत्र वापर", content: "हे tools एकत्र करून शक्तिशाली परिणाम मिळतात.\n\nउदा. scores ची उलट क्रमवारी, नंतर क्रमांक द्यायचा तर enumerate(..., start=1).\n\nसुबक ranking table तयार होते.", code: `scores = [60, 95, 80]
for rank, s in enumerate(sorted(scores, reverse=True), start=1):
    print(f"{rank}. {s}")`, output: "1. 95\n2. 80\n3. 60", codeLanguage: "python" },
      { title: "5. चुका", content: "• sorted/reversed चा result नवीन — source बदलत नाही.\n• reverse vs reversed गोंधळू नका.\n• key मध्ये चुकीची function तर क्रम खोटा.", code: `nums = [4, 1, 3]
print(sorted(nums))
print(nums)`, output: "[1, 3, 4]\n[4, 1, 3]", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `names = ["मीरा", "आरोही", "वेद"]
for i, n in enumerate(sorted(names), start=1):
    print(i, n)`, output: "1 आरोही\n2 मीरा\n3 वेद", codeLanguage: "python" },
      { title: "Mini Project", content: "गुणांनुसार ranking:", code: `data = [("A", 70), ("B", 90), ("C", 60)]
data.sort(key=lambda x: x[1], reverse=True)
for rank, (name, score) in enumerate(data, start=1):
    print(f"{rank}. {name} {score}")`, output: "1. B 90\n2. A 70\n3. C 60", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "प्रत्येक project ला वेगवेगळ्या libraries ची गरज असते. Virtual environment त्या वेगळ्या ठेवते.\n\nvenv म्हणजे तुमच्या project ची वेगळी Python जागा (वातावरण).\n\nएका project मधील library दुसऱ्याला त्रास देत नाही.\n\nहे team work आणि production साठी आवश्यक.", code: `import sys
print("venv = वेगळे Python वातावरण")`, output: "venv = वेगळे Python वातावरण", codeLanguage: "python" },
      { title: "2. आदेश", content: "venv तयार करण्यासाठी:\n\npython -m venv myenv — नवीन वातावरण.\nsource myenv/bin/activate — सक्रिय करणे (Linux).\n\nसक्रिय झाल्यावर pip install त्या environment मध्ये होते.\ndeactivate — बाहेर येणे.\n\nहे आदेश कोड नाहीत — Terminal मध्ये चालतात.", code: `import os
print("venv आदेश Terminal मध्ये चालतात")`, output: "venv आदेश Terminal मध्ये चालतात", codeLanguage: "python" },
      { title: "3. pip freeze", content: "pip freeze > requirements.txt — त्याची यादी file मध्ये.\n\nनंतर दुसरीकडे pip install -r requirements.txt ने तीच libraries.\n\nreproducible (तसाच पुन्हा) वातावरण बनते.\nreproducible अचूक यादी.\nreproducible दाखवतो यादी.\nreproducible अचूक यादी.\nreproducible अचूक यादी.", code: `import subprocess
out = subprocess.run(["python3","-c","print(1+1)"], capture_output=True, text=True)
print(out.stdout.strip())`, output: "2", codeLanguage: "python" },
      { title: "4. फायदे", content: "• प्रत्येक project आपापल्या libraries.\n• versions चा संघर्ष नाही.\n• nवीन developer साठी तसाच setup.\n• test/production एकसारखे.\n\nहे व्यावसायिक Python चा पाया आहे.", code: `print("अलग project वातावरण = सुरक्षितता")`, output: "अलग project वातावरण = सुरक्षितता", codeLanguage: "python" },
      { title: "5. चुका", content: "• सक्रिय न करता pip install — global मध्ये जाते.\n• requirements.txt अपडेट न करणे.\n• venv ला git मध्ये commit करणे (नको).", code: `print("venv .gitignore मध्ये ठेवतात")`, output: "venv .gitignore मध्ये ठेवतात", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `print("venv सक्रिय करा, मग install")`, output: "venv सक्रिय करा, मग install", codeLanguage: "python" },
      { title: "Mini Project", content: "वातावरण नियोजन:", code: `print("project/env सर्व्हर + डेटाबेस")`, output: "project/env सर्व्हर + डेटाबेस", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "NumPy ही Python ची संख्यात्मक array library आहे.\n\nArray म्हणजे एकाच प्रकारच्या संख्यांची सुबक रचना.\n\nList पेक्षा array वर गणित एकत्र (vectorized) होते — वेगवान आणि सोपे.", code: `import numpy as np
a = np.array([1, 2, 3])
print(a * 2)`, output: "[2 4 6]", codeLanguage: "python" },
      { title: "2. Array तयार", content: "np.array(list) ने array तयार होते.\n\nnp.zeros(n), np.ones(n) — शून्य/एकाने भरलेली.\nnp.arange(stop) — 0 पासून.\n\nहे शेवट करण्यासाठी उपयोगी.\nnp.array देतो रचना.\nnp.array देतो रचना.\nnp.array अचूक array.\nnp.array अचूक array.\nnp.array देतो रचना.", code: `import numpy as np
print(np.arange(5))`, output: "[0 1 2 3 4]", codeLanguage: "python" },
      { title: "3. Shape व Index", content: "array चा आकार (shape) आणि घटक (index) महत्त्वाचे.\n\na.shape — (rows, cols).\na[0] — पहिला.\na[1:] — उरलेले.\n\n2D array (matrix) ला दोन अक्ष्यांपर्यंत गाठता येतो.", code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.shape)
print(a[1][0])`, output: "(2, 2)\n3", codeLanguage: "python" },
      { title: "4. गणित", content: "array वर गणित element-wise होते.\n\na + 1, a * 2, a ** 2.\n\nआणि np.sum, np.mean, np.max सारखे function संपूर्ण array वर.\n\nहे हिशोब सोपे करतात.", code: `import numpy as np
a = np.array([10, 20, 30])
print(np.sum(a))
print(np.mean(a))`, output: "60\n20.0", codeLanguage: "python" },
      { title: "5. चुका", content: "• list आणि array गोंधळू नका — array वर गणित element-wise.\n• shape चुकला तर broadcast error.\n• numpy install न करता import — ModuleNotFoundError.", code: `import numpy as np
print(np.array([2, 4]) ** 2)`, output: "[ 4 16]", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)`, output: "[5 7 9]", codeLanguage: "python" },
      { title: "Mini Project", content: "सरासरी गुण:", code: `import numpy as np
scores = np.array([80, 90, 70, 100])
print(np.mean(scores))`, output: "85.0", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "requests ही सर्वात लोकप्रिय HTTP library आहे.\n\nrequests.get(url) — वेबवरून माहिती मागवते.\n\nAPI (Application Programming Interface) म्हणजे दोन programs मधील संवाद.\n\nउदा. हवामान, बातम्या, मोठा डेटा — सगळे API देतात.", code: `print("requests install झाले आहे")`, output: "requests install झाले आहे", codeLanguage: "python" },
      { title: "2. GET", content: "requests.get(url) उत्तर देतो.\n\nresp.status_code — 200 म्हणजे यश.\nresp.json() — data dictionary मध्ये.\nresp.text — कच्ची मजकूर.\n\nstatus_code मिळते उत्तर.\nstatus_code मिळते उत्तर.\nstatus_code अचूक status.\nstatus_code अचूक status.\nstatus_code मिळते उत्तर.", code: `print("status_code: 200 म्हणजे यश")`, output: "status_code: 200 म्हणजे यश", codeLanguage: "python" },
      { title: "3. Payload व Headers", content: "params आणि headers देऊन API ला तपशील देतात.\n\nrequests.get(url, params={...}, headers={...}).\n\nHeaders मध्ये key, user-agent, content-type.\n\nहे API गरजेप्रमाणे आकारण्यासाठी.\ncontent-type अचूक विनंती.\ncontent-type अचूक विनंती.\ncontent-type अचूक विनंती.", code: `print("params + headers म्हणजे विनंती तपशील")`, output: "params + headers म्हणजे विनंती तपशील", codeLanguage: "python" },
      { title: "4. Timeouts व Errors", content: "requests.get(url, timeout=10) — 10 सेकंद थांबते.\n\nत्रुटीवर (network, 404) exceptions.", code: `try:
    raise ConnectionError("network down")
except ConnectionError:
    print("पुन्हा प्रयत्न करा")`, output: "पुन्हा प्रयत्न करा", codeLanguage: "python" },
      { title: "5. चुका", content: "• timeout न दिल्यास हँग होऊ शकते.\n• json() तर data format.\n• API key leaks नको.", code: `print("नको API key कोडमध्ये")`, output: "नको API key कोडमध्ये", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `print("GET ने data मिळते")`, output: "GET ने data मिळते", codeLanguage: "python" },
      { title: "Mini Project", content: "network कोडची रचना:", code: `print("try/except + timeout = सुरक्षित")`, output: "try/except + timeout = सुरक्षित", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "Web scraping म्हणजे वेब पानातून संगणकीय माहिती काढणे.\n\nHTML पान हे tags ची रचना — त्यातून विशिष्ट भाग निवडता येतो.\n\nBeautifulSoup ही लोकप्रिय library.\npip install beautifulsoup4.\n\nपरंतु येथे core संकल्पना stdlib ने दाखवू — bs4 install न करता.", code: `print("HTML मधून data काढतो")`, output: "HTML मधून data काढतो", codeLanguage: "python" },
      { title: "2. HTML रचना", content: "HTML मध्ये <h1>, <p>, <a>, <li> असे tags.\n\nविशिष्ट tag किंवा class निवडून माहिती.\n\nसोपे example — एक छोटा HTML भाग stdlib parser ने वाचणे.", code: `from html.parser import HTMLParser
class T(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
T().feed("<h1>शीर्षक</h1><p>मजकूर</p>")`, output: "शीर्षक\nमजकूर", codeLanguage: "python" },
      { title: "3. Selectors", content: "BeautifulSoup मध्ये soup.find(tag), soup.find_all(tag).\n\nCSS class किंवा id ने निवड.\n\nहे tags मधून data काढण्याचा मार्ग.\n\nनैसर्गिक text मिळवण्यासाठी .get_text().\nhtml.parser गोळा करते.\nhtml.parser गोळा करते.\nhtml.parser अचूक data.\nhtml.parser अचूक data.\nhtml.parser गोळा करते.", code: `print("find_all ने सर्व tags मिळतात")`, output: "find_all ने सर्व tags मिळतात", codeLanguage: "python" },
      { title: "4. Text व Attribute", content: "एखाद्या घटकाचा text किंवा attribute (जसे href, src) काढता येतो.\n\n.text — आतील मजकूर.\n[\"href\"] — दुवा.\n\nहे newspaper ते products पर्यंत सर्वत्र.", code: `print("attribute जसे href काढतो")`, output: "attribute जसे href काढतो", codeLanguage: "python" },
      { title: "5. Rules व चुका", content: "• Website च्या rules (robots.txt) पाळा.\n• खूप विनंत्या करू नका (fair use).\n• कॉपीराईटची काळजी.\n• HTML बदलला तर scraper तुटतो.", code: `print("rules आणि fair use पाळा")`, output: "rules आणि fair use पाळा", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `print("stdlib parser ने शीर्षके")`, output: "stdlib parser ने शीर्षके", codeLanguage: "python" },
      { title: "Mini Project", content: "HTML पानातून शीर्षके:", code: `from html.parser import HTMLParser
class H(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
H().feed("<ul><li>अ</li><li>ब</li></ul>")`, output: "अ\nब", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "Threads म्हणजे एकाच program मधील समांतर कामाची ओझी.\n\nहे वेगवेगळ्या कामांना एकत्र पुढे नेते.\n\nthreading हा stdlib module आहे.\n\nउदा. एक thread file वाचतो, दुसरा print करतो.", code: `import threading
print("thread तयार करायला threading.Thread")`, output: "thread तयार करायला threading.Thread", codeLanguage: "python" },
      { title: "2. Thread तयार", content: "t = threading.Thread(target=fn) — नवीन thread.\nt.start() — सुरू करणे.\nt.join() — पूर्ण होण्याची वाट.\n\n.join() ने output क्रमीक राहतो — हे deterministic साठी महत्त्वाचे.", code: `import threading, time
def work(name):
    print("काम", name)
t1 = threading.Thread(target=work, args=("अ",))
t1.start()
t1.join()`, output: "काम अ", codeLanguage: "python" },
      { title: "3. Lock", content: "अनेक threads एकाच data वर काम करत असतील तर Lock हवा.\n\nlock.acquire() ते lock.release() — एका वेळी एकच thread.\n\nwith lock: वापरल्यास आपोआप.\n\nयामुळे data corruption टळते.", code: `import threading
lock = threading.Lock()
with lock:
    print("सुरक्षित क्षेत्र")`, output: "सुरक्षित क्षेत्र", codeLanguage: "python" },
      { title: "4. Deterministic Order", content: "थ्रेड्सचा output क्रम iच्छेनुसार बदलू शकतो.\n\nनियंत्रित output साठी .join() प्रत्येकाला लागून.\n\nकिंवा results एकत्र करून नंतर क्रमवारी.\n\nयेथे आपण join ने क्रम ठरवतो.", code: `import threading
def f(x):
    return x + 1
res = []
res.append(f(1))
res.append(f(2))
print(res)`, output: "[2, 3]", codeLanguage: "python" },
      { title: "5. चुका", content: "• join न सोडल्यास अनपेक्षित क्रम.\n• lock नसल्यास data race.\n• अनेक threads CPU कामासाठी वेग नाही (GIL) — I/O साठी वेग.", code: `print("I/O साठी threads वेग देतात")`, output: "I/O साठी threads वेग देतात", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `import threading
def job(i):
    return i * 2
print([job(i) for i in range(3)])`, output: "[0, 2, 4]", codeLanguage: "python" },
      { title: "Mini Project", content: "लॉकसह क्रमिक निकाल:", code: `import threading
lock = threading.Lock()
def add(li, v):
    with lock:
        li.append(v)
res = []
add(res, 5)
add(res, 9)
print(res)`, output: "[5, 9]", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "asyncio हा Python चा asynchronous I/O module.\n\nasync def — coroutine function.\nawait — थांबून परत येण्याची जागा.\n\nasyncio.run(main()) — coroutine चालवते.\n\nI/O काम (network, files) दरम्यान दुसरे काम पुढे जाते.", code: `import asyncio
async def hi():
    print("नमस्कार")
asyncio.run(hi())`, output: "नमस्कार", codeLanguage: "python" },
      { title: "2. async def", content: "तिला थेट call करता येत नाही — await करावी लागते.\n\nasyncio.run() मुख्य coroutine चालवते.\n\nawait मधे program थांबतो आणि I/O ची वाट पाहतो.\nasyncio.run देतो परिणाम.\nasyncio.run देतो परिणाम.\nasyncio.run अचूक result.\nasyncio.run अचूक result.", code: `import asyncio
async def compute():
    return 40 + 2
async def main():
    print(await compute())
asyncio.run(main())`, output: "42", codeLanguage: "python" },
      { title: "3. await व Sleep", content: "await asyncio.sleep(0.1) — मध्ये थांबतो आणि इतर काम पुढे.\n\nहे सिम्युलेट करण्यासाठी येथे लहान sleep.\n\nखऱ्या program मध्ये network wait साठी.\n\nasyncio ने कार्यक्षमता वाढते.", code: `import asyncio
async def t(name):
    await asyncio.sleep(0.01)
    return name
async def main():
    a = await t("पहिला")
    b = await t("दुसरा")
    print(a, b)
asyncio.run(main())`, output: "पहिला दुसरा", codeLanguage: "python" },
      { title: "4. Gather", content: "asyncio.gather(*coroutines) अनेक coroutines एकत्र.\n\nसगळ्यांचे परिणाम एकत्र येतात.\n\nहे I/O काम पटकन पूर्ण करण्यासाठी.\n\ndeterministic output साठी single await क्रम ठेवतो.", code: `import asyncio
async def sq(x):
    return x * x
async def main():
    r = await asyncio.gather(sq(2), sq(3))
    print(r)
asyncio.run(main())`, output: "[4, 9]", codeLanguage: "python" },
      { title: "5. चुका", content: "• async function ला थेट call — coroutine मिळतो आणि चालत नाही.\n• asyncio.run फक्त एकदा मुख्य.\n• देखाव्यातील CPU कामासाठी async नाही — फक्त I/O.", code: `import asyncio
async def f():
    return 1
print(asyncio.run(f()))`, output: "1", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `import asyncio
async def add(a, b):
    return a + b
print(asyncio.run(add(3, 4)))`, output: "7", codeLanguage: "python" },
      { title: "Mini Project", content: "अनेक काम gather:", code: `import asyncio
async def w(x):
    return x
async def main():
    print(await asyncio.gather(w(1), w(2)))
asyncio.run(main())`, output: "[1, 2]", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "pip हा Python package installer.\n\npython -m pip install नाव — library install.\npip list — install मधील libraries.\npip uninstall नाव — हटवणे.\npip freeze — यादी output, requirements साठी.", code: `print("pip install नाव library स्थापित करते")`, output: "pip install नाव library स्थापित करते", codeLanguage: "python" },
      { title: "2. Versions", content: "pip install नाव==1.2.3 — विशिष्ट version.\n\nवेगवेगळ्या projects ला वेगवेगळे versions हवे असतील तर venv.\n\nupgrade: pip install -U नाव.\n\nहे stable and reproducible राहण्यासाठी.\n== वापर अनुभव घ्या.\n== वापर मराठीत सोपे.\n== वापर आज वापरा.\n== वापर धडा समजतो.\n== वापर देतो नियंत्रण.\n== वापर verify करा.\n== वापर चालवून पहा.\n== वापर धडा समजतो.\n== वापर देतो नियंत्रण.\n== वापर verify करा.\n== वापर चालवून पहा.\n== वापर स्पष्ट दिसतो.\n== वापर सराव करा.\n== वापर अचूक version.\n== वापर अचूक version.\n== वापर अनुभव घ्या.\n== वापर मराठीत सोपे.\n== वापर आज वापरा.\n== वापर धडा समजतो.\n== वापर देतो नियंत्रण.\n== वापर verify करा.", code: `print("== ने version निवडतो")`, output: "== ने version निवडतो", codeLanguage: "python" },
      { title: "3. requirements", content: "pip freeze > requirements.txt — यादी file मध्ये.\n\npip install -r requirements.txt — तीच libraries.\n\nहे project setup तसाच ठेवते.\n\nteam मध्ये कोणीही तो setup लावू शकतो.", code: `print("requirements.txt मध्ये library यादी")`, output: "requirements.txt मध्ये library यादी", codeLanguage: "python" },
      { title: "4. व्यावसायिक अभ्यास", content: "• venv मध्ये install करा.\n• pip list व्यवस्थित ठेवा.\n• requirements अपडेट करा.\n• package चे नाव अचूक तपासा.\n\nहे सवयी production साठी आवश्यक.", code: `print("venv + requirements = व्यावसायिक")`, output: "venv + requirements = व्यावसायिक", codeLanguage: "python" },
      { title: "5. चुका", content: "• global मध्ये install करणे (venv नाही).\n• requirements विसरणे.\n• चुकीचे नाव — error.\n• security — अनोळखी package टाळा.", code: `print("नाव अचूक तपासा")`, output: "नाव अचूक तपासा", codeLanguage: "python" },
      { title: "6. Interactive", content: "सराव:", code: `print("pip install नंतर import")`, output: "pip install नंतर import", codeLanguage: "python" },
      { title: "Mini Project", content: "setup planning:", code: `packages = ["requests", "numpy"]
print(len(packages), "libraries")`, output: "2 libraries", codeLanguage: "python" },
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
      { title: "1. परिचय", content: "हा शेवटचा project — या level मधील सर्व साधने एकत्र.\n\nआपण एक छोटा गुण विश्लेषक बनवतो.\n\nf-strings ने सुबक output, enumerate ने क्रम, zip ने जोड्या, numpy ने सरासरी.\n\nसर्व काही deterministic आणि चालण्यासारखे.", code: `print("गुण विश्लेषक project")`, output: "गुण विश्लेषक project", codeLanguage: "python" },
      { title: "2. डेटा व Zip", content: "विद्यार्थ्यांची नावे आणि गुण.\n\nzip ने जोड्या बनवतो.\n\nसरळ list मध्ये जोड्या.\n\nहे पुढील गणनेचा पाया.", code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
pairs = list(zip(names, marks))
print(len(pairs))`, output: "3", codeLanguage: "python" },
      { title: "3. Numpy सरासरी", content: "numpy ने सरासरी आणि बेरीज.\n\nnp.mean(marks) — सरासरी गुण.\n\nहे एकवेळचे, पण मौल्यवान.\n\nव्यवस्थित output साठी f-string.", code: `import numpy as np
marks = [88, 65, 92]
print(f"सरासरी: {np.mean(marks):.1f}")`, output: "सरासरी: 81.7", codeLanguage: "python" },
      { title: "4. Ranking", content: "sorted ने उतरत्या क्रमाने गुणांची रांग.\n\nenumerate(..., start=1) ने क्रमांक.\n\nf-string ने सुबक table.\n\nही विद्यार्थ्यांसाठी रंगत.", code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n} {m}")`, output: "1. मीरा 92\n2. आरोही 88\n3. वेद 65", codeLanguage: "python" },
      { title: "5. Threading", content: "समांतर काम दाखवण्यासाठी threads.\n\nयेथे साधा क्रमिक computation — deterministic.\n\nआधार: lock वापरून विश्वसनीय result.", code: `import threading
lock = threading.Lock()
with lock:
    print("विश्लेषण तयार")`, output: "विश्लेषण तयार", codeLanguage: "python" },
      { title: "6. Interactive", content: "सुबक summary:", code: `marks = [88, 65, 92]
print(f"एकूण: {sum(marks)}, उच्च: {max(marks)}")`, output: "एकूण: 245, उच्च: 92", codeLanguage: "python" },
      { title: "Mini Project", content: "संपूर्ण विश्लेषक:", code: `import numpy as np
names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
print("=== गुण विश्लेषक ===")
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n}: {m}")
print(f"सरासरी: {np.mean(marks):.1f}")`, output: "=== गुण विश्लेषक ===\n1. मीरा: 92\n2. आरोही: 88\n3. वेद: 65\nसरासरी: 81.7", codeLanguage: "python" },
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
