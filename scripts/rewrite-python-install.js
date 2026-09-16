const fs = require('fs');
const file = 'src/data/tutorials/python-level1.ts';
let src = fs.readFileSync(file, 'utf8');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');

// ---------- Lesson 1 (python-basics): de-template title prefixes ----------
const basicsStart = src.indexOf('slug: "python-basics"');
const basicsEnd = src.indexOf('slug: "python-install"');
const basicsSlice = src.slice(basicsStart, basicsEnd);
const titleMap = [
  ['1. संकल्पना — Python म्हणजे काय?', 'Python म्हणजे काय?'],
  ['2. सोप्या मराठीत समज', 'संगणकाला सूचना कशा देतात?'],
  ['3. Python चा इतिहास — सुरुवात कशी झाली?', 'इतिहास: 1989 पासून'],
  ['4. Python इतर भाषांपेक्षा वेगळी का?', 'इतर भाषांपेक्षा फरक'],
  ['5. Syntax — Python कसे दिसते?', 'Python कोड कसा दिसतो?'],
  ['6. मूलभूत उदाहरण', 'पहिलं उदाहरण'],
  ['7. वास्तविक जीवनातील उदाहरण', 'आजच्या जगात Python कुठे वापरतात?'],
  ['8. सामान्य चुका: हे होतात तेव्हा काय करायचं', 'सुरुवातीच्या चुका आणि उपाय'],
  ['9. महत्त्वाच्या नोंदी', 'हे लक्षात ठेवा'],
  ['10. Python च्या आवृत्त्या आणि वापर', 'Python 2 vs Python 3'],
  ['11. Interactive कोड — तुम्ही चालवा', 'Interactive: बदलून पाहा'],
  ['12. Mini Project — पहिली ओळख', 'Mini Project: तुमची ओळख'],
];
let newBasics = basicsSlice;
for (const [oldT, newT] of titleMap) {
  const before = newBasics;
  newBasics = newBasics.split(`title: "${oldT}",`).join(`title: "${newT}",`);
  if (newBasics === before) console.log('WARN title not found:', oldT);
}
src = src.slice(0, basicsStart) + newBasics + src.slice(basicsEnd);
console.log('basics titles updated:', titleMap.length);

// ---------- Lesson 2 (python-install): full sections rewrite ----------
const content = (s) => s.replace(/\n +/g, '\n');
const sections = [
  {
    title: 'Install म्हणजे नेमकं काय?',
    content: content(`Python ही भाषा संगणकाला थेट समजत नाही — संगणकाला फक्त 0 आणि 1 (machine language) समजतं. Python interpreter (दुभाषा) हा मध्यस्थ आहे: तो कोड एका एका ओळीवरून वाचतो, machine language मध्ये भाषांतर करतो आणि लगेच चालवतो. अशा भाषांना interpreter आधारित म्हणतात.

compiler असलेल्या भाषांमध्ये (उदा. C) संपूर्ण कोड आधी भाषांतरित होऊन एक executable file बनते; interpreter मात्र ओळ-ओळ करून काम करतो. त्यामुळे Python मध्ये चूक लगेच दिसते — चुकलेल्या ओळीपुढचा कोड चालतच नाही.

Install म्हणजे हा interpreter device वर बसवणे. Installer storage मध्ये interpreter ची file आणि आवश्यक library बसवतो — Android च्या Termux मध्ये ~/../usr इथे, Windows मध्ये C:\\Users\\तुमचंनाव\\AppData इथे. हे ठिकाण लक्षात ठेवायची गरज नाही; installer ते आपोआप ठरवतो.

एकदा install झालं की इंटरनेट नसलं तरी, कोणताही खर्च न करता, फक्त फोन असेल तरी कोड लिहून output पाहता येतो.`),
  },
  {
    title: 'Android (Termux) वर install',
    content: content(`Termux हे Android वर चालणारं terminal app आहे. Google Play वर त्याची जुनी आवृत्ती मिळू शकते, म्हणून अधिकृत site किंवा F-Droid कडून घेणं योग्य. पहिल्यांदा उघडल्यावर termux-setup-storage लिहा — याने फोनच्या storage मध्ये फाईल्स ठेवण्यासाठी folder तयार होतो.

Python install करण्यासाठी तीन command पुरेशा:

pkg update — package ची नवी यादी download करतो. पहिल्या वेळेला थोडा वेळ घेतो; progress bar दिसत राहते.

pkg install python — Python interpreter आणि त्यासोबत येणारी साधने बसवतो.

python --version — install झालं का ते तपासतो; Python 3.x.x अशी आवृत्ती दिसली म्हणजे Python तयार.

Termux मध्ये apt ची गरज नाही — pkg हे apt चं Termux आवरण आहे. दोन्ही आतून एकच काम करतात.`),
    code: 'pkg update\npkg install python\npython --version',
    codeLanguage: 'shell',
    output: 'All packages are up to date.\nPython 3.12.3',
  },
  {
    title: 'Windows वर install',
    content: content(`python.org वरून Python 3 चं installer download करा — page वर पिवळ्या रंगाचं Download Python 3.x.x बटण असतं. चालवताना "Add Python to PATH" हा checkbox नक्की tick करा; तो चुकवल्यास नंतर python command सापडत नाही. "Install Now" दाबा — Customize installation फक्त विशेष गरज असेल तरच.

PATH ही Windows ची यादी आहे; तिच्यात नोंदलेला program कोणत्याही folder मधून लिहिल्यावर चालतो. tick केल्यानंतर Windows python या नावानेच interpreter शोधतो. tick केलं नसेल तर Python पुन्हा install करताना Modify → PATH आणि pip enable करा.

installer 32-bit / 64-bit विचारतो; आजकाल तो आपोआप बरोबर निवडतो. Web installer ऐवजी संपूर्ण installer घ्या. काही Windows मध्ये python ऐवजी py --version लिहूनही चालतं; जो output देतो तोच तुमचा Python.`),
    code: 'python --version',
    codeLanguage: 'shell',
    output: 'Python 3.12.3',
  },
  {
    title: 'Install झालं का? — पडताळणी',
    content: content(`विश्वासू तपासणी हीच command: python --version. जर python सापडला नाही तर python3 आजमावा — Termux आणि Linux मध्ये दोन्ही आहेत. Output मध्ये Python 3.12.3 सारखी आवृत्ती दिसते; 3 मुख्य आवृत्ती, 12 उप-आवृत्ती, 3 पॅच. Tutorials मध्ये "माझ्याकडे Python 3.10 आहे" असं म्हटलं जातं, ते याच आवृत्ती-क्रमांकाची नोंद असते.

python असेच लिहिल्यास >>> हे चिन्ह दिसते. ही Python REPL (Read-Eval-Print Loop) आहे — इथे लिहिलेली ओळ वाचून (Read) तिचा अर्थ लावून (Eval) निकाल दाखवला (Print) जातो आणि पुन्हा ओळ मागितली जाते. इथे प्रत्येक expression चा निकाल लगेच दिसतो.

REPL बंद करण्यासाठी exit() — किंवा terminal वर Ctrl+D, Windows वर Ctrl+Z.`),
    code: '>>> print("नमस्कार")\n>>> 2 + 2',
    codeLanguage: 'shell',
    output: 'नमस्कार\n4',
  },
  {
    title: 'सामान्य चुका आणि उपाय',
    content: content(`✗ 'python' हा आंतरिक किंवा बाह्य command नाही (Windows) — PATH checkbox tick झाला नव्हता. Python installer पुन्हा चालवून Modify → Add Python to PATH निवडा.

✗ Termux मध्ये python command सापडत नाही — python3 लिहा; दोन्ही एकच Python आहेत.

✗ दोन आवृत्त्या दिसतात — python आणि python3 वेगवेगळ्या Python दाखवू शकतात. प्रत्येक project मध्ये एकच command सातत्याने वापरा.

✗ पुन्हा पुन्हा install चालवतो — आधी python --version करून पहा; आधीच install असेल तर पुन्हा install करणं वेळेचा अपव्यय.

✗ Python 2.7.x दिसतं — ही अधिकृतपणे संपलेली आवृत्ती आहे. python.org वरून Python 3 download करा.

✗ pkg update मध्ये काही download होत नाही — इंटरनेट तपासा; WiFi किंवा mobile data असल्याशिवाय package येणार नाहीत.

✗ permission denied — termux-setup-storage चालवून storage permission द्या.

✗ पुरेशी जागा नाही — Python ला साधारण 20–50 MB हवी; जुन्या files हटवून जागा करा.

✗ pyton अशी spelling — command अचूक लिहा; एक अक्षर चुकलं की Command not found दिसतं.

कोणताही error message copy करून Google वर search करा — प्रत्येक अडचणीची उत्तरं आधी कोणीतरी लिहून ठेवली आहेत.`),
  },
  {
    title: '.py file मधून कोड चालवणे',
    content: content(`REPL प्रयोगासाठी आहे; खऱ्या projects मध्ये कोड file मध्ये लिहून चालवला जातो. अशा file ला script म्हणतात आणि तिच्या नावाचा शेवट .py असतो — hello.py.

File बनवल्यावर shell मध्ये एकच command:

python hello.py

Python ती file वरून खाली ओळ-ओळ वाचून चालवतो. Output REPL सारखाच असतो — फक्त >>> चिन्ह नसतं. चूक दिसली तर file मध्ये दुरुस्त करून पुन्हा चालवा. हा चक्र — लिहा, चालवा, दुरुस्त करा, पुन्हा चालवा — प्रोग्रामरचं दैनंदिन काम आहे.

File चं नाव साक्षर ठेवा — hello.py, practice.py. नावात स्पेस असली तर command लिहिताना त्रास होतो. File ही फक्त text file असते; कोणताही editor ती उघडतो.`),
    code: 'print("नमस्कार")',
    codeLanguage: 'python',
    output: 'नमस्कार',
  },
  {
    title: 'Termux मधील nano editor',
    content: content(`Termux मध्ये script लिहिण्याची सर्वात हलकी पद्धत म्हणजे nano editor. Shell मध्ये लिहा:

nano first.py

आत print("नमस्कार") टाइप करा. Save करून बाहेर येण्यासाठी: Ctrl+X → Y → Enter. खालच्या ओळीत दिसणारी ^X, ^Y ही चिन्हे म्हणजेच Ctrl+X, Ctrl+Y — ^ ही Ctrl कीची खूण आहे.

Save केली की नेहमीप्रमाणे चालवा:

python first.py

Output मध्ये नमस्कार दिसला म्हणजे file तयार करणे आणि चालवणे या दोन्ही रीती पक्क्या झाल्या. सुरुवातीला editor अवघड वाटतो; १० मिनिटांच्या सरावाने कर्सर, save आणि बाहेर येणं या सवयी लागतात.

प्रत्येक file च्या पहिल्या ओळीत # ने एक टीप लिहा — ती file काय करते हे ओळखता येते. उदा. # ही माझी पहिली Python file. पुढे अनेक files असताना ही टीप दिशा दाखवते.`),
    code: 'python first.py',
    codeLanguage: 'shell',
    output: 'नमस्कार',
  },
  {
    title: 'pip आणि libraries',
    content: content(`Library म्हणजे इतरांनी आधी लिहिलेला तयार कोड, जो install करून आपल्या प्रोग्रॅममध्ये वापरता येतो — उदा. इंटरनेट, गणित, data analysis यासाठी. pip हा Python चा package manager आहे; तो Python सोबतच install होतो, म्हणून वेगळं काही करावं लागत नाही.

कोणतीही library एका command ने येते:

pip install requests

यानंतर कोड मध्ये import requests असं लिहून ती वापरता येते. pip list — कोणत्या library install झाल्या आहेत ते दाखवतो; pip uninstall नाव — हटवणे. काही systems मध्ये python3 -m pip असं लिहावं लागतं; तेही बरोबरच चालतं.

सुरुवातीला libraries ची घाई करू नका. आधी Python चे मूळ — variables, conditions, loops — नीट समजून घ्या. पाया मजबूत झाल्यावर library ची ताकद वापरा.`),
    code: 'pip install requests',
    codeLanguage: 'shell',
    output: 'Successfully installed requests-2.31.0',
  },
  {
    title: 'Interactive: REPL मध्ये प्रयोग',
    content: content(`खाली python REPL मध्ये print() कसं दिसतं याचं उदाहरण आहे. ही प्रत्येक ओळ REPL मध्ये लिहिली जाते — तिचा output तिच्या खाली दिसतो.

पहिली ओळ print("Python तयार!") — याने output मध्ये Python तयार! दिसतं. दुसऱ्या ओळीत 2 + 2 लिहिलं तर Python स्वतःच बेरीज करून 4 दाखवतो. तिसरी ओळ print("मी तयार!") — output मध्ये मी तयार! दिसतं.

लक्षात घ्या: REPL मध्ये print() शिवायही expression लिहिलं तरी निकाल दिसतो (2 + 2 ने 4 दाखवलं). Scripts मध्ये मात्र print() लिहावं लागतं, कारण निकाल स्पष्ट दिसावा अशी script मधली तरतूद असते.

या कोडमध्ये प्रयोग करा: 2 + 2 ची ओळ बदलून 10 - 3 करा, किंवा print मध्ये तुमचं नाव घाला. आणि help(print) लिहून पहा — Python function ची माहिती स्वतः सांगतो. वरचा बाण (up arrow) दाबल्यास मागची ओळ पुन्हा येते; जास्त दिवसांची command पुन्हा टाइप करावी लागत नाही.`),
    code: '>>> print("Python तयार!")\n>>> 2 + 2\n>>> print("मी तयार!")',
    codeLanguage: 'shell',
    output: 'Python तयार!\n4\nमी तयार!',
  },
  {
    title: 'पुढची पायरी',
    content: content(`धडा पक्का करण्याची तीन कामं:

१. practice.py file बनवा; तिच्यात print() ने तुमचं नाव, आवडता विषय आणि एक मराठी वाक्य लिहा. python practice.py ने चालवून output पहा.

२. REPL मध्ये गणित आजमावा — 3 * 4, 10 - 3, 25 // 4.

३. पुढला धडा python-first-program वाचा; त्यातला कोड REPL मध्येच तपासून पहा.

स्वतःला ही पाच उत्तरं द्या: install म्हणजे काय? Termux मध्ये Python येण्यासाठी कोणत्या दोन command? python --version काय सांगतो? Windows मध्ये कोणता checkbox महत्त्वाचा असतो? REPL कसं बंद करायचं? — उत्तरं मनात न आल्यास संबंधित section पुन्हा वाचा.`),
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

const st = src.indexOf('slug: "python-install"');
const en = src.indexOf('slug: "python-first-program"', st);
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