const fs = require("fs");
const file = "src/data/tutorials/python-level1.ts";
let src = fs.readFileSync(file, "utf8");

const P = (...xs) => xs; // paragraph builder

const replacements = [
  P(
    "Python ही एक high-level (उच्च-स्तरीय) programming भाषा आहे. म्हणजे ती माणसाच्या भाषेच्या जवळ आहे, त्यामुळे ती समजून घेणं आणि लिहिणं सोपं जातं. संगणक स्वतः फक्त 0 आणि 1 मध्ये समजतो (हे machine language); Python सारखी भाषा आपल्या सोप्या शब्दांना संगणकाला समजेल अशा भाषेत भाषांतर करते.",
    "हे भाषांतर कोण करतं? Python ही 'interpreted' भाषा आहे — interpreter नावाचा program तुमचा कोड लगेच वाचतो आणि एका एका line ने चालवतो. यामुळे छोटे programs पटकन चालतात आणि चूक लवकर दिसते. उलट C किंवा Java सारख्या भाषा आधी compile (पूर्ण भाषांतर) करतात आणि मग चालतात.",
    "Python ची सर्वात मोठी खासियत तिची syntax (व्याकरण) आहे — ती जवळपास साध्या इंग्रजीसारखी वाचता येते. उदा. 'नमस्कार छाप' हे फक्त print() ने होतं. Python ही free आणि open-source आहे: कोणीही विनामूल्य download करू शकतो, आणि त्यासोबत लाखो libraries (आधीच तयार कोडचे बंडल) मोफत मिळतात — डेटा सायन्स, वेबसाइट, चित्र-आवाज प्रक्रिया, अगदी खेळांसाठीही.",
    "एक गंमत: Python चं नाव आणि 'साप' यांचा संबंध नाही! नाव 'Monty Python's Flying Circus' या ब्रिटिश कॉमेडी शोवरून ठेवलं गेलं. या कोर्समध्ये आपण साध्या print() पासून डेटा, लूप, functions, OOP, files आणि advanced topics पर्यंत सर्व शिकणार आहोत. तुम्ही नवशिके असलात तरी हरकत नाही — Python जगात शिकवण्यासाठी सगळ्यांत योग्य भाषा म्हणून ओळखली जाते."
  ),
  P(
    "Python म्हणजे संगणकाला नेमक्या सूचना देणं. जसं आपण एखाद्या माणसाला 'हा ग्लास पाणी काढून द्या' असं सांगतो, तसंच Python मध्ये आपण संगणकाला सांगतो — फक्त तो अगदी अक्षरशः पाळतो. 'जरा थोडं कमी मिठ घाल' अशा अस्पष्ट सूचना त्याला समजत नाहीत; प्रत्येक गोष्ट नेमकी सांगावी लागते.",
    "उदा. '5 आणि 3 ची बेरीज छाप' हे असं लिहाल:\nprint(5 + 3)\n\nइथे print म्हणजे 'स्क्रीनवर दाखव' आणि 5 + 3 म्हणजे 'आधी बेरीज कर'. संगणक आधी 5 + 3 = 8 काढतो आणि मग ते स्क्रीनवर दाखवतो. 'प्रथम calculate, मग display' हा विचार पुढे खूप वेळा लागेल.",
    "Python मध्ये सूचना वरून खाली क्रमाने चालतात — ज्या क्रमाने lines लिहाल त्याच क्रमाने. याला 'top-to-bottom execution' म्हणतात. पुढील levels मध्ये if, loops, functions यांसारख्या नियंत्रणांनी हा क्रम आपल्या इच्छेप्रमाणे बदलता येतो.",
    "आणखी एक आश्वासन: 'मला English चांगलं येत नाही, कोडिंग करता येईल का?' — होईल! Python मध्ये फक्त काही English शब्द वापरले जातात (print, input, if, else, for, while, def). त्यांचा अर्थ एकदा कळला की इंग्रजीची गरज नाही. प्रत्येक संकल्पना मराठीत शिकवली आहे, आणि मराठीतच कोडही लिहिता येतो — नाव = \"सायली\" असा मराठी variable नाव वापरता!"
  ),
  P(
    "Python ची सुरुवात 1980 च्या दशकाच्या शेवटी नेदरलँड्समध्ये झाली. Guido van Rossum त्या वेळी CWI (सेंट्रो व्होली) संस्थेत काम करत होते. शिकवण्यासाठीच्या ABC भाषेपासून त्यांना प्रेरणा मिळाली, पण ती खूप मर्यादित होती — त्यांना साधी, वाचता येणारी आणि वेगाने लिहिता येणारी भाषा हवी होती.",
    "डिसेंबर 1989 मध्ये Guido ने काम सुरू केलं आणि फेब्रुवारी 1991 मध्ये पहिली सार्वजनिक आवृत्ती (0.9.0) आली. नाव त्यांनी Monty Python कॉमेडी शोवरून ठेवलं — भाषा मजेशीर आणि हलकी वाटावी म्हणून. 1994 मध्ये Python 1.0 आली (lambda, map, filter); 2000 मध्ये 2.0 (list comprehensions, garbage collection).",
    "2008 मध्ये Python 3.0 आली — ती backward-compatible (मागास-सुसंगत) नव्हती, म्हणजे Python 2 मध्ये लिहिलेले काही programs Python 3 मध्ये थेट चालत नाहीत. सुरुवातीला गोंधळ झाला, पण Python 3 हीच भविष्याची भाषा ठरली आणि 1 जानेवारी 2020 नंतर Python 2 चे अधिकृत समर्थन बंद झाले.",
    "आज Python जगातील सर्वाधिक लोकप्रिय भाषांमध्ये अव्वल दहामध्ये असते — TIOBE आणि Stack Overflow सारख्या मोजमापांत ती वरच्या रांगेत असते. ती नि:शुल्क आणि open-source आहे, त्यामुळे जगभरातील हजारो लोक तिच्या सुधारणेत भाग घेतात.",
    "एक quick timeline:\n• 1989 — काम सुरू\n• 1991 — आवृत्ती 0.9.0\n• 1994 — Python 1.0 (lambda, map, filter)\n• 2000 — Python 2.0 (list comprehensions, garbage collection)\n• 2008 — Python 3.0 (जुन्या गोष्टी बदलल्या)\n• 2020 — Python 2 समर्थन बंद",
    "आणि लोगोबद्दल: नाव Monty Python वरून आलं, पण लोगोमध्ये दोन सर्प दिसतात — ते जाणूनबुजून निवडलं गेलं. Python एकीकडे शिस्तबद्ध प्रणाली, तर दुसरीकडे मजेशीर भाषा म्हणून ओळखली जाते."
  ),
  P(
    "प्रत्येक भाषेला स्वतःचं स्थान आहे, पण Python चे काही मोठे फायदे:",
    "पहिला — वाचता येणं (readability): Python च्या design philosophy मध्ये 'Readability counts' हे तत्त्व आहे. कोड इंग्रजीसारखा वाचता येतो, त्यामुळे दुसरा कोणीही तुमचा कोड पटकन समजू शकतो.",
    "दुसरा — कमी तयारी: C/Java मध्ये 'Hello World'साठी boilerplate च्या 5-6 lines लागतात; Python मध्ये फक्त print(\"नमस्कार\"). नवशिक्यांचा आत्मविश्वास वाढतो.",
    "तिसरा — dynamic typing: Java/C मध्ये प्रत्येक variable ची type सांगावी लागते (int age = 5); Python मध्ये नाही — ती स्वतः ओळखते की 5 ही संख्या आहे आणि '5' हा मजकूर.",
    "चौथा — मोठा ecosystem: SciPy/NumPy गणितासाठी, Django/Flask वेबसाठी, Pandas डेटासाठी, Matplotlib graphs साठी, TensorFlow/PyTorch AI साठी — हे सगळं pip या एका command ने install होतं. Python वेब विकास, डेटा सायन्स, automation, AI, शिक्षण, संशोधन आणि robotics मध्येही वापरली जाते.",
    "कमी काय? Python संथ (slower) असू शकते — ती interpreted आहे आणि dynamic typing मुळे अतिरिक्त तपासणी होते. पण बर्याच कामांसाठी हा फरक महत्त्वाचा नसतो, आणि C मध्ये लिहिलेल्या libraries ही कमतरता भरून काढतात. जगभरातील शाळा-महाविद्यालयांमध्येही पहिली भाषा म्हणून Python शिकवली जाते.",
    "Python ची design philosophy म्हणजे 'Zen of Python' — 19 सूत्रांचा संग्रह. त्यातले नियम: 'सोपं जटिलतेपेक्षा चांगलं', 'सुस्पष्ट गूढतेपेक्षा चांगलं'. या तत्त्वज्ञानामुळे Python कोड वाचण्यास सोपा आणि टिकाऊ राहतो."
  ),
  P(
    "Python मध्ये प्रत्येक सूचना एका नवीन line वर लिहितात आणि संगणक त्या वरून खाली क्रमाने वाचतो. साधी सूचना:\n\nprint(\"नमस्कार\")\n\nइथे काय होतं?\n• print हे Python चं built-in function आहे\n• कंसात जे लिहू ते स्क्रीनवर दिसते\n• \"नमस्कार\" अवतरणांमध्ये आहे, म्हणून Python ओळखतं की हा मजकूर आहे, variable नाही",
    "इतर भाषांपेक्षा Python ची syntax कमी symbols वापरते — Java मध्ये अर्धविराम (;) आणि कंसांचा पाढा असतो, Python मध्ये नाही. Python कोड .py extension च्या फाइलमध्ये ठेवतात (उदा. माझा_कोड.py).",
    "महत्त्वाचे: indent (डावीकडील जागा). इतर भाषांमध्ये जागा फक्त सुंदर दिसण्यासाठी असते; Python मध्ये ती कोडचा अर्थ बदलते! if किंवा for लिहिताना आतल्या सूचना 4 spaces ने आत ढकलणं आवश्यक आहे — हे Level 2 मध्ये सविस्तर शिकू. पण PyCharm, VS Code, IDLE सारखे संपादक आपोआप indentation लावतात.",
    "मजकूर आणि संख्या यातला फरक समजून घ्या: print(\"10\") हे 10 हा मजकूर छापतं, पण print(10) ही संख्या. पुढे गणित करताना हाच फरक ठरवतो. आणि expression म्हणजे ज्याचं मूल्य निघतं असा कोड भाग — print(7 * 7) मध्ये 7 * 7 = 49 हे expression. 'मूल्य काढा, मग छापा' ही पद्धत लक्षात ठेवा."
  ),
  P(
    "आपला पहिला program करूया. print() तुम्हाला कोणताही message, संख्या किंवा मजकूर स्क्रीनवर दाखवतो. दोन्ही print च्या lines एकामागून एक चालतात — पहिली 'नमस्कार', दुसरी 'मी Python शिकतोय'. या वेगवेगळ्या messages म्हणजेच program चं output.",
    "पहिल्या ओळीत # पासून सुरू होणारी टीप एक comment आहे. Comment कोडमधील माणसांसाठीची टीप असते — संगणक तिच्याकडे दुर्लक्ष करतो. प्रत्येक प्रोग्रामर comment चा वापर कोड समजावण्यासाठी आणि स्मरणपत्रासाठी करतो.",
    "हा कोड बदलून पाहा: पहिली ओळ तुमचं नाव, दुसरी तुमचं गाव लिहा. काय output येतं ते पहा. स्वतःचं काहीतरी टाकलं की शिकण्याची ताकद वाढते — आपल्या इच्छेनुसार बदलणारा program म्हणजेच खरी programming ची सुरुवात."
  ),
  P(
    "Python कुठे वापरली जाते?",
    "• Google चा search algorithm — मूळ प्रणाली Python मध्येच लिहिली गेली\n• YouTube चा recommendation system — कोणता व्हिडिओ आवडेल हे ठरवण्याचा मोठ्या code चा भाग Python आहे\n• Instagram — मोठी backend अजूनही Python (Django) वर आहे\n• सायन्स रिसर्च आणि Data Science — डेटा मोजणी आणि विश्लेषणासाठी\n• बँकांच्या अनेक गणना आणि सिस्टम्स\n• नवीन AI मॉडेल्स (ChatGPT सारखी) — Python च्या libraries वापरल्या जातात",
    "म्हणजेच जगातील लोकप्रिय apps आणि websites मध्ये Python कुठेतरी असतेच. या कोर्सनंतर तुम्ही स्वतःचे छोटे programs बनवू शकाल — चहा दुकानाचं बिल कोड, मराठी शब्दकोश tool, शाळेचा results program, अगदी छोटा data analysis प्रोजेक्ट.",
    "हे विसरू नका: प्रत्येक master प्रोग्रामरने एकेकाळी पहिल्या print() पासून सुरुवात केली होती. आज तुम्ही करत असलेलं शिकणं हीच पुढच्या मोठ्या कामांची पायाभरणी आहे."
  ),
  P(
    "खाली सुरुवातीला अनेकदा होणाऱ्या चुका आणि त्यांची उत्तरं:",
    "✗ print(\"नमस्कार) — अवतरण (\"\") बंद केलं नाही. Python ला मजकूर कुठे संपतो कळत नाही → SyntaxError.",
    "✗ print(hello) — hello अवतरणांत नाही. Python समजतो की hello हे variable आहे; ते परिभाषित नसल्याने → NameError.",
    "✗ Print(\"नमस्कार\") — Python case-sensitive आहे. print लहान अक्षरांनीच लिहा; मोठे 'P' केल्यास → NameError.",
    "✗ print 5 + 3 — कंस विसरलात. print नेहमी कंसांनी बोलवा: print(5 + 3).",
    "✗ print(\"5 + 3\") — अवतरणांत जे लिहू ते शब्दशः छापलं जातं. बेरीज करायची असल्यास print(5 + 3) लिहा.",
    "✗ print(\"एक\") print(\"दोन\") एकाच ओळीत — प्रत्येक सूचना स्वतःच्या ओळीवर हवी; नाही तर SyntaxError.",
    "चूक झाल्यावर गोंधळू नका — Python चा error message नेमकं कुठे चूक आहे ते सांगतो; तो बारकाईने वाचा. उदा. unterminated string दिसले तर अवतरणांची तपासणी करा. चूक म्हणजे 'अयशस्वी' नव्हे — ती शिकण्याची संधी आहे."
  ),
  P(
    "या धड्यात शिकलेलं थोडक्यात:",
    "• Python ची भाषा clean आणि readable आहे — हे 'अंदाज' नाही, design goal आहे\n• ती free आणि open-source आहे — फी नाही, सर्वांना उपलब्ध\n• तिची community मोठी आहे म्हणून help मिळणं सोपं — Stack Overflow वर लाखो उत्तरं\n• जगातील सर्वात लोकप्रिय भाषांमध्ये Python अव्वल रांगेत आहे\n• print() ही आपली पहिली function — तिला नेहमी कंस लागतात, अवतरण फक्त मजकुरासाठी\n• Python case-sensitive आहे — print, Print, PRINT हे तीन वेगळे शब्द\n• प्रत्येक सूचना नवीन line वर\n• संगणक कोड वरून खाली क्रमाने चालवतो",
    "स्वतःची चाचणी घ्या: 'Python आणि C यात काय फरक?' उत्तर — Python interpreted आणि सोपी; C compiled. आणि 'print(\"5+3\") चं output काय?' — अवतरणांमुळे '5+3' असंच, 8 नाही. पुढील धड्यांमध्ये install, editor, variables, data types, operators सविस्तर शिकणार आहोत; आताचे नियम त्या सर्वांचा पाया आहेत. नियमित कोड लिहा — programming ही वाचून नव्हे, करून शिकायची (सायकलिंगसारखी) गोष्ट आहे."
  ),
  P(
    "सध्या सर्वत्र Python 3 वापरली जाते (उदा. 3.10, 3.11, 3.12). पण 'Python भाषा' आणि 'Python software' या दोन गोष्टी वेगळ्या: भाषा म्हणजे तिचे नियम आणि syntax; interpreter हा software आहे जो ती भाषा चालवतो. Python install केलं म्हणजे हे दोन्ही मिळतं.",
    "जुने दस्तऐवज कधी कधी Python 2 साठी असतात — तिथे print \"नमस्कार\" कंसाशिवाय चालतं; Python 3 मध्ये print(\"नमस्कार\") कंसांनी लिहावं लागतं. आपण Python 3 शिकत आहोत, आणि तीच भविष्याची भाषा आहे.",
    "आवृत्ती तपासणी सोपी आहे: terminal मध्ये python --version. काही नवीन features (f-string, walrus operator, match statement) फक्त विशिष्ट आवृत्त्यांमध्ये असतात. इंटरनेटवरून examples घेताना ते कोणत्या आवृत्तीसाठी लिहिले आहेत ते तपासा — आपल्या आवृत्तीपेक्षा नवीन कोड error देईल. library लाही स्वतःची आवृत्ती असते; install च्या धड्यात ते सविस्तर पाहू."
  ),
];

// ---- extract content blocks in order ----
const blockRe = /(content:\s*")((?:[^"\\]|\\.)*)(")/g;
const blocks = [];
let m;
while ((m = blockRe.exec(src))) blocks.push({ index: m.index, raw: m[2] });

const unescape = (s) =>
  s.replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\").replace(/\\`/g, "`");

const escape = (s) =>
  s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/`/g, "\\`");

console.log(`Total content blocks in file: ${blocks.length}`);
if (blocks.length < 10) {
  console.error("expected >= 10 blocks, aborting");
  process.exit(1);
}

let replaced = 0;
const edits = [];
for (let i = 0; i < 10; i++) {
  const b = blocks[i];
  const oldVal = unescape(b.raw);
  const newVal = replacements[i].join("\n\n");
  edits.push({ b, oldVal, newVal });
}

// apply from last to first so earlier indices stay valid
for (const e of edits.reverse()) {
  const pre = unescape(e.b.raw);
  if (pre !== e.oldVal) {
    console.error(`MISMATCH at block - pre and old differ (lengths ${pre.length} vs ${e.oldVal.length})`);
    continue;
  }
  const replacedStr = `content: "${escape(e.newVal)}"`;
  src = src.slice(0, e.b.index) + replacedStr + src.slice(e.b.index + e.b.raw.length + 11);
  // +11 accounts for `content: "` (10) and trailing `"` (1)
  replaced++;
}

console.log(`Replaced ${replaced}/10 blocks`);
fs.writeFileSync(file, src);