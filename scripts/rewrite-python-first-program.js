const fs = require('fs');
const file = 'src/data/tutorials/python-level1.ts';
let src = fs.readFileSync(file, 'utf8');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');

const content = (s) => s.replace(/\n +/g, '\n');
const sections = [
  {
    title: 'editor आणि interpreter — दोन्ही हवे',
    content: content(`Python कोड लिहिण्यासाठी दोन गोष्टी हव्या: editor आणि interpreter. editor हा program text फाइल लिहू, बदलू आणि save करू देतो; interpreter हा तो मजकूर वाचून मशीन भाषेत उतरवतो आणि चालवतो. editor लिहायला मदत करतो, interpreter चालवायला — दोन्ही वेगळे आहेत आणि दोन्ही आवश्यक आहेत. one नसेल तर कोड चालणार नाही.
\\n
पत्राच्या उपमेने पाहा: editor म्हणजे कागद आणि पेन, interpreter म्हणजे पोस्टमन. कागद नसेल तर पत्र लिहिता येत नाही; पोस्टमन चुकला तर पत्र पोहोचत नाही. पोस्टमन पत्राची spelling दुरुस्त करत नाही — तो जसं लिहिलं तसं पोहोचवतो. त्याचप्रमाणे interpreter कोड तसाच वाचतो; auto-correct नसतो, म्हणून कोड अचूक लिहावा लागतो.
\\n
कोड चालवताना ही साखळी काम करते: तुमचा विचार → editor मध्ये लिहिलेला text → interpreter → संगणक → output. या साखळीतील एक तरी टप्पा चुकला तर output येत नाही; आताच याची कल्पना आली की कुठे बिघडलं ते पटकन कळतं.`),
  },
  {
    title: 'कोड लिहिण्याचे चार मार्ग',
    content: content(`कोड लिहिण्यासाठी चार सामान्य मार्ग आहेत.
\\n
IDLE — Python बरोबर येणारा साधा editor. Windows वर Python install करताना तो सोबत येतो. उघडल्यावर एका window मध्ये लिहिता येतं, save करता येतं आणि Run दाबल्यावर output दिसतं. सुरुवातीच्या सरावासाठी IDLE पुरेसा आहे.
\\n
VS Code — जगभरातील developers वापरत असलेला editor. रंगीत कोड, त्रुटी लवकर दाखवणे, plugin हे त्याचे फायदे आहेत; पण install आणि set-up थोडा वेळ घेतो.
\\n
Termux मध्ये nano — सर्वात हलका editor, फक्त terminal. nano hello.py लिहून file उघडते; आत लिहून Ctrl+X → Y → Enter ने save होते आणि बाहेर पडता येतं. Termux वापरणाऱ्यांसाठी हा योग्य पर्याय.
\\n
Online editor (repl.it सारखे) — browser मध्येच कोड लिहून चालवता येतं; install काही लागत नाही. इंटरनेट असेल तर सर्वात जलद मार्ग, पण खऱ्या projects साठी device वर file तयार करणं गरजेचं असतं.
\\n
कोणताही editor निवडताना एकच नियम: जो वापरायला सोपा वाटतो तोच योग्य. editor हे साधन आहे — ते निवडलं म्हणजे programming येत नाही, ते वापरून सराव करावा लागतो.`),
  },
  {
    title: '.py extension आणि file नावं',
    content: content(`प्रत्येक Python file च्या नावाचा शेवट .py असतो — hello.py, first.py, my_program.py. हा extension संगणकाला सांगतो की ही Python फाइल आहे. नावात spaces टाकू नका — command मध्ये hello world.py लिहिलं तर ती दोन वेगळ्या फाइलची नावं मानली जातात; spaces ऐवजी underscore वापरा: hello_world.py.
\\n
नावं साक्षर आणि अर्थपूर्ण ठेवा — sum.py ऐवजी sum_of_two.py. क्रमांकाची नावं (1.py, 2.py) नंतर शोधायला गोंधळ करतात; नावात गोष्ट सांगितली तर मोठ्या projects मध्ये फायदा.
\\n
सवयीने सर्व .py फाइल एकाच folder मध्ये ठेवा (उदा. python_programs). terminal मध्ये python hello.py लिहिलं आणि file सापडली नाही, तर फाइल दुसऱ्या folder मध्ये आहे — cd command ने योग्य folder मध्ये जा. ही सगळ्यात सामान्य चूक आहे.`),
  },
  {
    title: 'पहिला program — hello.py',
    content: content(`hello.py file बनवून त्यात दोन print() लिहा. Hello, World! हे परंपरागत पहिलं program आहे — नवीन भाषा शिकताना सर्वप्रथम हेच लिहिलं जातं.
\\n
print हे लहान अक्षरांमध्येच लिहा. Python case sensitive आहे — Print किंवा PRINT हे वेगळे शब्द आहेत आणि त्यांनी error येतो. मजकूर double quotes मध्ये लिहा; मराठी मजकूर चालतो, पण फाइल UTF-8 encoding मध्ये save झालेली असावी.
\\n
प्रत्येक print() एक ओळ output करतो. अवतरण फक्त मजकुरासाठी लागतात — print(42) हे अवतरणाशिवायही चालतं, कारण 42 ही संख्या आहे. मजकूर आणि संख्येतला हा फरक पुढच्या धड्यांत वारंवार येईल.
\\n
कोड लिहून झाल्यावर चार गोष्टी तपासा: print ची spelling बरोबर आहे का, अवतरण दोन्ही बाजूला आहेत का, कंस बंद झालेत का, commas योग्य जागी आहेत का.`),
    code: `print("Hello, World!")
print("माझा पहिला program!")`,
    codeLanguage: 'python',
    output: `Hello, World!
माझा पहिला program!`,
  },
  {
    title: 'python hello.py — terminal मधून चालवणे',
    content: content(`terminal मध्ये फाइल जिथे आहे तिथे cd करा, मग ही command लिहा:
\\n
command मधला पहिला शब्द python म्हणजे interpreter आणि दुसरा hello.py म्हणजे चालवायची फाइल. Enter दाबल्यावर Python फाइल वाचून output screen वर दाखवतो.
\\n
Termux आणि काही Linux systems मध्ये python ऐवजी python3 लिहावं लागतं. पहिल्यांदा दोन्ही try करून जो चालतो तोच नेहमी वापरा.
\\n
फाइल मध्ये बदल केला की terminal मध्ये पुन्हा हीच command चालवावी लागते — browser सारखं auto-refresh नाही. सवय ठेवा: save करा, चालवा, output बघा, दुरुस्त करा, पुन्हा चालवा.`),
    code: `python hello.py`,
    codeLanguage: 'shell',
    output: `Hello, World!
माझा पहिला program!`,
  },
  {
    title: 'सामान्य चुका आणि उपाय',
    content: content(`✗ File सापडत नाही — योग्य folder मध्ये cd करा; cd शिवाय दुसऱ्या folder मधून command दिला तर 'No such file' येतो.
✗ .py extension विसरतात — hello ऐवजी hello.py लिहा; .pyx सारखा चुकीचा extension चालत नाही.
✗ Print किंवा PRINT लिहिलं — Python case sensitive आहे; print लहान अक्षरांनीच.
✗ अवतरण किंवा कंस बंद केला नाही — जे उघडलं ते शेवटी बंद करा; मजकुरात double quotes हवे असतील तर आत single quotes वापरा.
✗ Save केलं नाही — editor मध्ये बदल करून (Ctrl+S) शिवाय चालवलं तर जुना कोडच चालतो.
✗ Spelling चूक — pyton, prrint असे शब्द error देतात; प्रत्येक command अचूक टाइप करा.
\\n
प्रत्येक error message सोबत line number असतो — उदा. 'File hello.py, line 2' म्हणजे दुसऱ्या ओळीत चूक आहे. ती ओळ उघडून पहा; बहुतेकदा तिथेच चूक सापडते. कोड चालत नाही तेव्हा चार प्रश्न विचारा: file save झाली का? योग्य folder मध्ये आहे का? command ची spelling बरोबर आहे का? फाइलचं नाव बरोबर आहे का?`),
  },
  {
    title: 'Interactive: कोड बदलून पहा',
    content: content(`खालील कोड इथेच Run करून पहा — browser मध्येच output दिसतो, install किंवा terminal लागत नाही.
\\n
पहिल्या दोन print() ने मजकूर output होतो; तिसऱ्यात गणित 7 * 6 = 42. print मध्ये मजकूर, संख्या आणि गणित कुठलंही लिहिता येतं.
\\n
दोन मजकूर comma ने दिले तर त्यांच्यात default स्पेस येतो — print("अ", "ब") म्हणजे 'अ ब'. या कोडमध्ये बदल करा — print(7 * 6) ची जागी print(7 * 7) करा — आणि पुन्हा Run दाबा; output बदलताना दिसेल. error आला तर तो नेमकं कुठे चूक आहे ते सांगतो.`),
    code: `print("नमस्कार!")
print("माझं नाव", "मी Python शिकतो")
print(7 * 6)`,
    codeLanguage: 'python',
    output: `नमस्कार!
माझं नाव मी Python शिकतो
42`,
  },
  {
    title: 'save-चालवण्याची सवय',
    content: content(`कोड बदलल्यावर Save दाबल्याशिवाय (Ctrl+S) तो बदल चालत नाही. अनेक नवशिके editor मध्ये बदल करतात, पण जुना output पाहून गोंधळतात — कारण save केलं नसतं. म्हणून command देण्यापूर्वी editor मध्ये Ctrl+S दाबा, मगच terminal मध्ये चालवा.
\\n
प्रत्येक print() चा output स्वतःच्या नवीन ओळीत येतो; एका ओळीत अनेक गोष्टी छापायच्या असतील तर त्यातला end आणि sep पुढल्या धड्यात (python-print) पाहू. Python मध्ये प्रत्येक सूचना वेगळ्या ओळीत असते — semicolon लिहावी लागत नाही.
\\n
मराठी मजकूर output मध्ये विकृत दिसला तर फाइल UTF-8 मध्ये save झाली आहे का ते पहा; बहुतेक editor आपोआप तसं करतात आणि Termux चा nano UTF-8 हाताळतो. दररोज एक तरी छोटा program लिहा — लिहिणे, save, चालवणे, निरीक्षण, सुधारणा हेच चक्र प्रोग्रामरचं दैनंदिन काम आहे.`),
  },
];

function emit(sec) {
  let s = '      {\n';
  s += `        title: "${esc(sec.title)}",\n`;
  s += `        content: "${esc(sec.content)}",\n`;
  if (sec.code != null) s += `        code: \`${sec.code}\`,\n`;
  if (sec.codeLanguage) s += `        codeLanguage: "${sec.codeLanguage}",\n`;
  if (sec.output != null) s += `        output: \`${sec.output}\`,\n`;
  s += '      },\n';
  return s;
}

const st = src.indexOf('slug: "python-first-program"');
const en = src.indexOf('slug: "python-print"', st);
const slice = src.slice(st, en);
const arrStart = slice.indexOf('sections: [');
let depth = 0, i = arrStart;
for (; i < slice.length; i++) {
  const c = slice[i];
  if (c === '[') depth++;
  else if (c === ']') { depth--; if (depth === 0) break; }
}
const body = 'sections: [\n' + sections.map(emit).join('') + '    ]';
const newSlice = slice.slice(0, arrStart) + body + slice.slice(i + 1);
src = src.slice(0, st) + newSlice + src.slice(en);
fs.writeFileSync(file, src);
console.log('sections written:', sections.length);

for (const s of sections) {
  const seg = (s.content.match(/\n/g) || []).length + 1;
  if (s.content.length > 3000 || seg > 14) console.log('BLOAT', s.title, 'len=' + s.content.length, 'seg=' + seg);
}