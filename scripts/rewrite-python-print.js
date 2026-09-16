const fs = require('fs');
const file = 'src/data/tutorials/python-level1.ts';
let src = fs.readFileSync(file, 'utf8');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
const content = (s) => s.replace(/\n +/g, '\n');
const sections = [
  {
    title: 'print() म्हणजे काय?',
    content: content(`print() ही Python ची सर्वात पहिली function आहे — ती कंसात दिलेली गोष्ट screen वर दाखवते. Program मध्ये कितीही गणना झाली, पण वापरकर्त्याला ती दिसत नाही; print() ती उमटवून दाखवते. उदा. account balance काढलं, पण balance दिसलं नाही तर त्याचा उपयोग काय? तेच print() चं काम आहे.
        
print हा शब्द जुन्या छपाईयंत्रांवरून आला आहे — पूर्वी संगणकाचे निकाल कागदावर छापले जायचे, म्हणून print. आज निकाल screen वर येतो, पण नाव तसंच राहिलं. थोडक्यात, print() म्हणजे संगणक जे तुम्हाला दाखवायचं ते स्पष्टपणे उमटवणं.
        
हे function काही return किंवा जतन करत नाही — print(10) ने फक्त screen वर 10 दिसतं, ती value कुठे store होत नाही. हा फरक पुढे variables शिकताना महत्त्वाचा ठरेल.`),
  },
  {
    title: 'print() ची रचना',
    content: content(`print चा उपयोग करताना कंस बंधनकारक आहे: कंस उघडा, आत काय दाखवायचं ते लिहा, कंस बंद करा. कंस विसरलात तर SyntaxError येतो; कारण print हे function आहे आणि प्रत्येक function ला कंस हवाच.
        
मजकूर नेहमी अवतरणांमध्ये लिहा — print("नमस्कार") असं. संख्या मात्र अवतरणांशिवाय — print(10). अवतरणांमधली संख्या screen वर 10च दाखवते, पण ती मजकूर असते; पुढे गणित करताना हा फरक महत्त्वाचा ठरतो.
        
संख्यांबरोबर गणितही print मध्ये लिहिता येतं. print(2 + 3) देतो 5 — Python आधी कंसातला हिशेब करतो, मग निकाल दाखवतो.`),
    code: 'print("नमस्कार")\nprint(10)\nprint(2 + 3)',
    codeLanguage: 'python',
    output: 'नमस्कार\n10\n5',
  },
  {
    title: 'एकाच print मध्ये अनेक values',
    content: content(`एका print मध्ये अनेक values comma ने दिल्यास त्या एकाच ओळीत येतात आणि त्यांमध्ये default स्पेस येतो. उदा. print("वय", 25) म्हणजे output "वय 25". मजकूर अवतरणांत आणि संख्या उघडी — दोघांमध्ये संगणक आपोआप स्पेस टाकतो.
        
comma ने जोडलेल्या गोष्टींची संख्या मर्यादा नाही — तीन, चार, पाच values एकत्र देता येतात. print("मराठी", "Learn", "Hub") म्हणजे "मराठी Learn Hub".
        
संख्यांमध्ये हजारांसाठी comma वापरू नका — 100000 थेट लिहा. 100, 000 असं लिहिल्यास Python त्याला दोन वेगळ्या values मानतो आणि output मध्ये 100 000 असं दिसतं.`),
    code: 'print("वय", 25)\nprint("मराठी", "Learn", "Hub")',
    codeLanguage: 'python',
    output: 'वय 25\nमराठी Learn Hub',
  },
  {
    title: 'sep आणि end — ओळीवर नियंत्रण',
    content: content(`comma मधल्या values मध्ये default स्पेस येतो; हा separator बदलण्यासाठी sep= वापरा. print("मराठी", "Learn", "Hub", sep="-") म्हणजे output "मराठी-Learn-Hub". sep मध्ये कुठलाही मजकूर देता येतो — sep=":", sep=", " वगैरे.
        
प्रत्येक print() च्या शेवटी default ने नवीन ओळ येते. ती बदलण्यासाठी end= वापरा: print("एक", end=" ") आणि नंतर print("दोन") दिल्यास "एक दोन" एकाच ओळीत दिसतं. end="" दिलं तर स्पेसही लागत नाही.
        
values आधी, मग sep आणि end — हा क्रम बंधनकारक आहे. दोन्ही एकत्र देता येतात. default मूल्यं म्हणजे space (sep) आणि नवीन ओळ (end) ही देखील दिलेली मूल्यंच आहेत — ती बदलण्याचा हक्क तुमचा.`),
    code: 'print("साखर", "तेल", "चहा", sep="-", end="!")',
    codeLanguage: 'python',
    output: 'साखर-तेल-चहा!',
  },
  {
    title: 'वास्तविक उदाहरण — दुकानाचं बिल',
    content: content(`Program चा उद्देश निकाल दाखवणं असतो. कॅल्क्युलेटर विचारात घ्या — निकाल आधी कुठेतरी ठेवला जातो, मग दाखवला जातो. खाली बिलाची रक्कम आणि टीप यांची बेरीज एकूण नावाच्या variable मध्ये केली आहे, मग प्रत्येक रक्कम print ने दाखवली आहे.
        
ढळक नावे — बिल:, टीप:, एकूण: — output वाचणाऱ्याला कोणती रक्कम कशाची ते लगेच कळतं. मजकूर आणि संख्या अशी comma ने जोडल्यावर output नीट रांगेत येतो.
        
हाच नमुना प्रत्येक program ला लागतो: data घ्या → गणना करा → output दाखवा. गणना केलेली एखादी गोष्ट print() ने दाखवली नाही तर वापरकर्त्याला तिचा उपयोगच नसतो.`),
    code: 'बिल = 250\nटीप = 50\nएकूण = बिल + टीप\nprint("बिल:", बिल)\nprint("टीप:", टीप)\nprint("एकूण:", एकूण)',
    codeLanguage: 'python',
    output: 'बिल: 250\nटीप: 50\nएकूण: 300',
  },
  {
    title: 'सामान्य चुका आणि उपाय',
    content: content(`✗ print(नमस्कार) — अवतरण विसरलात. संगणक "नमस्कार" नावाचा variable शोधतो; सापडत नाही म्हणून NameError येतो. मजकूर नेहमी अवतरणांत.
        
✗ print("नमस्कार') — एक double आणि एक single अवतरण. ज्या प्रकाराने अवतरण उघडलं त्या प्रकारानेच बंद करा.
        
✗ print "नमस्कार" — कंस नाहीत; SyntaxError. print च्या लगेच नंतर उघडणारा आणि शेवटी बंद होणारा कंस नक्की करा.
        
✗ print("10") — ही संख्या नाही, मजकूर आहे. screen वर 10 असाच दिसतो, पण पुढे गणित करता येणार नाही.
        
Error वाचायला शिका: NameError म्हणजे अवतरण किंवा नाव चुकलं; SyntaxError म्हणजे कंस, अवतरण किंवा रचनेत त्रुटी. Python तुम्हाला नेमक्या ओळीत जातो — error हा शिकण्याचाच भाग आहे.`),
  },
  {
    title: 'f-string — मजकुरात value थेट बसवणे',
    content: content(`आता मजकूर आणि value जोडण्यासाठी comma वापरत आलो. पण अनेक values असतील तर ही पद्धत त्रासदायक होते. त्याचा सोपा मार्ग म्हणजे f-string — मजकुराच्या ओळीत value थेट बसवणं.
        
f-string म्हणजे अवतरणाआधी f अक्षर असलेला मजकूर; आत चौकोनी कंसात variable नाव लिहिलं तर Python print करताना तिथे ती value बसवतो. उदा. print(f"नमस्कार, {नाव}!") मध्ये नाव च्या जागी त्या variable ची value दिसते.
        
चौकोनी कंसात संख्या, variable किंवा गणित कुठलंही उपयोगात आणता येतं. उदा. print(f"बेरीज: {10 + 5}") म्हणजे output "बेरीज: 15". हीच पद्धत पुढील धड्यांत मोठ्या programs साठी रोज वापरली जाणार आहे.`),
    code: 'नाव = "सायली"\nवय = 20\nprint(f"नमस्कार, {नाव}!")\nprint(f"मी {वय} वर्षांची आहे")',
    codeLanguage: 'python',
    output: 'नमस्कार, सायली!\nमी 20 वर्षांची आहे',
  },
  {
    title: 'Mini Project — किराणा बिल',
    content: content(`तीन वस्तूंची किंमत variable मध्ये ठेवा, बेरीज करा आणि print ने दाखवा. खालील example करून पहा:
        
साखर, तेल, चहा यांच्या किमती वस्तु1, वस्तु2, वस्तु3 मध्ये आहेत; बेरीज एकूण मध्ये. प्रत्येक वस्तूचं नाव आणि रक्कम print ने दाखवली आहे.
        
हा कोड स्वतः बदलून पहा: किंमती बदला, चौथी वस्तू घाला, sep किंवा end वापरून रांग दुरुस्त करा. थोडक्यात print(), variables आणि गणना — आत्तापर्यंतचे सारे घटक एकत्र आले. या सरावातून मिळालेला output जतन करा; तोच तुमचा पहिला छोटा project.`),
    code: 'वस्तु1 = 120\nवस्तु2 = 45\nवस्तु3 = 90\nएकूण = वस्तु1 + वस्तु2 + वस्तु3\nprint("साखर :", वस्तु1)\nprint("तेल   :", वस्तु2)\nprint("चहा   :", वस्तु3)\nprint("----- एकूण:", एकूण)',
    codeLanguage: 'python',
    output: 'साखर : 120\nतेल   : 45\nचहा   : 90\n----- एकूण: 255',
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

const st = src.indexOf('slug: "python-print"');
const en = src.indexOf('slug: "python-comments"', st);
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