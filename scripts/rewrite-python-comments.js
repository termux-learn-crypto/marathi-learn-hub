const fs = require('fs');
const file = 'src/data/tutorials/python-level1.ts';
let src = fs.readFileSync(file, 'utf8');

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
const content = (s) => s.replace(/\n +/g, '\n');
const sections = [
  {
    title: 'comment म्हणजे काय?',
    content: content(`comment म्हणजे कोडमधली खास नोट जी फक्त माणसांसाठी असते. संगणक ती चालवत नाही — तिच्याकडे पूर्ण दुर्लक्ष करतो. वहीच्या कडेला टाकलेली टीप समजा: ती परीक्षेत उत्तर देत नाही, पण उत्तर लिहायला मदत करते. तसंच comment कोड समजायला मदत करतं.
        
Python मध्ये comment साठी # चिन्ह वापरतात. ते जिथे दिसतं तिथपासून त्या ओळीतला उरलेला शेवटपर्यंतचा मजकूर संगणक दुर्लक्ष करतो. comment कोडमध्ये कुठेही — सुरुवातीला, ओळीच्या शेवटी — लिहिता येतो; output मध्ये तो कधीही दिसत नाही.
        
comment मुळे कोडचा निकाल बदलत नाही — कोड जो output देत असेल, comment जोडल्यावरही तोच output देईल. त्यामुळे भीती न बाळगता गरजेप्रमाणे comment लिहा. भाषेवर बंधन नाही — मराठी, इंग्रजी, हिंदी कुठल्यातही लिहिता येतं.`),
  },
  {
    title: '# चिन्हाचे नियम',
    content: content(`# हे चिन्ह ओळीच्या सुरुवातीला असेल तर ती संपूर्ण ओळ comment बनते. कोडच्या शेवटी, त्याच ओळीवर असेल तर # नंतरचा भागच comment असतो; statement तशीच चालते. उदा. x = 10  # एकूण विद्यार्थी — यात x = 10 चालतं, बाकी टीप.
        
# ओळीच्या मध्यभागी, statement च्या आत घालू नका. x = # मध्ये 5 असं लिहिल्यास # नंतरचं सगळं दुर्लक्ष होतं आणि x = अशी अर्धवट ओळ उरते — ती चालणार नाही. म्हणून # नेहमी statement च्या बाहेरच्या भागात वापरा.
        
Python च्या शैलीची शिफारस (PEP 8) म्हणते — # नंतर एक space ठेवा: # हा comment. ही सवय वाचायला सोपी करते. आणि comment मध्ये देवनागरी असो वा रोमन — संगणकाला त्याच्यात भेदभाव नसतो; कुठलाही मजकूर दुर्लक्ष होतो.`),
    code: '# ही file काय करते ते सांगणारी ओळ\nx = 10  # एकूण विद्यार्थी\nprint(x)',
    codeLanguage: 'python',
    output: '10',
  },
  {
    title: 'multi-line comment — # ने किंवा तीन अवतरणांनी',
    content: content(`दोन, तीन, पाच ओळींचं स्पष्टीकरण हवं असेल तर मोठमोठे मार्ग वापरले जातात. पहिला — प्रत्येक ओळ # ने सुरू करा: साधी आणि स्पष्ट रीत, कोणतीही परंपरा न बदलता.
        
दुसरा — तीन अवतरणांचा block: ''' हे spread ओळींचं स्पष्टीकरण ''' असं. हा block खरोखर string असतो; तो variable ला न दिल्यास output मध्ये काहीही दिसत नाही, त्यामुळे तो comment सारखाच वागतो.
        
सावधान — तो block print("""...""") मध्ये वापरलात तर तो प्रत्यक्ष output होतो. आणि Python चा अधिकृत style guide (PEP 8) फक्त # ची comment म्हणून शिफारस करतो; तीन अवतरणांचा block खरं तर docstring असतो — function च्या वर्णनासाठी, पुढील धड्यांत तो उपयोगात येईल. दोन-तीन ओळींसाठी # सुरक्षित पर्याय आहे.`),
    code: '# हा एका ओळीचा comment\n# हा दुसऱ्या ओळीचा comment\nprint("काम चालू!")',
    codeLanguage: 'python',
    output: 'काम चालू!',
  },
  {
    title: 'comments कुठे उपयोगी पडतात?',
    content: content(`मोठ्या project मध्ये शेकडो files आणि अनेक developers असतात. एकाचा कोड दुसऱ्याला समजला पाहिजे. तिथे comment मुळे कोड न वाचता प्रत्येक ओळीचा हेतू लगेच कळतो. code review मध्ये comment नसला तर सहकारी प्रत्येक ओळ कशासाठी आहे असं विचारत बसतो.
        
स्वतःचा जुना कोड उघडला तरी हीच गोष्ट — तीन महिन्यांनी आपल्या ओळी आपल्यालाच विसरलेल्या असतात. तेव्हा comment वाचून संदर्भ परत मिळतो. हाच comment चा सर्वात मोठा फायदा आहे.
        
खास उपयोग comment-first नावाचा आहे: आधी program काय करणार ते comment मध्ये टप्पे लिहा — उदा. १. नाव घ्या २. स्वागत द्या ३. output — मग प्रत्येक टप्प्याखाली कोड लिहा. असा कोड आखीव राहतो आणि कुठलाच टप्पा चुकत नाही.`),
  },
  {
    title: 'सामान्य चुका आणि उपाय',
    content: content(`✗ // किंवा /* */ ची सवय — या JavaScript, C, Java च्या रीती आहेत. Python मध्ये // म्हणजे भागाकाराचा operator; comment फक्त # ने होतो.
        
✗ comment मध्ये जुना कोड जपून ठेवणं — वाचणाऱ्याला गोंधळतो. जुना कोड काढून टाका; त्याला comment मध्ये पुन्हा जिवंत करू नका.
        
✗ प्रत्येक ओळीवर comment — उलट वाचण्याचा रस घालतो. फक्त गोंधळ शक्य तिथे, महत्त्वाच्या ठिकाणीच comment ठेवा.
        
✗ comment मध्ये password किंवा खाजगी माहिती — comment फाईलसह प्रत्येकाला दिसतो; तिथे अशी गोष्ट शेवटी लिहू नका.
        
✗ comment हे output समजणं — comment screen वर कधीच दिसत नाही; तो दाखवायचा असेल तर print() हवा.
        
✗ अर्थहीन comment — "ही ओळ लिहिली" यात नवी माहिती नाही. comment नेहमी हेतू सांगणारा असावा.`),
  },
  {
    title: 'चांगला comment कसा लिहायचा?',
    content: content(`चांगला comment कृती सांगत नाही, हेतू सांगतो. उदा. "x ला value दिली" हा कुचकामी comment आहे. त्याऐवजी "x मध्ये वापरकर्त्याचं वय आहे" असं लिहा. कोड काय करतो ते कोड स्वतः सांगतो; का करतो — कारण — हे फक्त comment सांगतं.
        
कोड बदलला तर संबंधित comment पण बदला. कोड बदलून जुना comment तसाच ठेवला तर तो खोटी माहिती देऊ लागतो — तो वाचकाची दिशाभूल करतो. कोड आणि comment यांची जोडी नेहमी सुसंगत ठेवा.
        
सवयीचा क्रम: आधी कोड लिहा, तो चालवून बघा, मग त्याच्या महत्त्वाच्या ठिकाणांचे comment जोडा. प्रत्येक function किंवा file च्या सुरुवातीला एक-दोन ओळीचा comment या कामाचं वर्णन देतो.`),
  },
  {
    title: 'Interactive: comment जोडून output तपासा',
    content: content(`खालील कोड इथेच चालवा. त्यात # print("लाइन 2") ही ओळ comment ने बंद केली आहे — म्हणून output मध्ये फक्त "लाइन 1" आणि "लाइन 3" दिसतात.
        
आता त्या ओळीतला # काढून पहा — output मध्ये "लाइन 2" पण येऊ लागतो. प्रत्येक print च्या आधी # टाकून पहा; तो print नाहीसा होतो. बदल करून पुन्हा Run दाबा.
        
हा प्रयोग सिद्ध करतो: comment कधीच output बदलत नाही; तो फक्त एखादी ओळ कामातून बाहेर ठेवतो. debugging मध्ये हीच रीत वापरतात — संशयाची ओळ काढून बघितली जाते.`),
    code: 'print("लाइन 1")\n# print("लाइन 2")\nprint("लाइन 3")',
    codeLanguage: 'python',
    output: 'लाइन 1\nलाइन 3',
  },
  {
    title: 'Mini Project — दिवसाचं शेड्यूल',
    content: content(`तुमच्या दिवसाचं शेड्यूल Python कोडमधून लिहा. प्रत्येक क्रियेच्या आधी comment टाका आणि खाली print() ने ती क्रिया दाखवा.
        
खालील example पहा — comment मध्ये भागाचं नाव, print मध्ये त्या भागाची क्रिया. output मध्ये फक्त print मधल्या ओळी दिसतात; comment कुठेही दिसत नाहीत.
        
शेड्यूल आपलं बनवा — उठणं, नाश्ता, शाळा, अभ्यास, खेळ, संध्याकाळचे काम असे टप्पे तुमच्या आवडीनुसार लिहा आणि प्रत्येकावर comment ठेवा. या सरावात comment आणि कोडची जोडणी प्रत्यक्ष output मध्ये निघते.`),
    code: '# सकाळची तयारी\nprint("उठणे")\nprint("नाश्ता")\n# दिवसाचा अभ्यास\nprint("शाळा")\nprint("अभ्यास")\nprint("खेळ")',
    codeLanguage: 'python',
    output: 'उठणे\nनाश्ता\nशाळा\nअभ्यास\nखेळ',
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

const st = src.indexOf('slug: "python-comments"');
const en = src.indexOf('slug: "python-variables"', st);
const slice = src.slice(st, en > st ? en : st + 100000);
const arrStart = slice.indexOf('sections: [');
let depth = 0, i = arrStart;
for (; i < slice.length; i++) {
  const c = slice[i];
  if (c === '[') depth++;
  else if (c === ']') { depth--; if (depth === 0) break; }
}
const body = 'sections: [\n' + sections.map(emit).join('') + '    ]';
const newSlice = slice.slice(0, arrStart) + body + slice.slice(i + 1);
src = src.slice(0, st) + newSlice + src.slice(st + slice.length);
fs.writeFileSync(file, src);
console.log('sections written:', sections.length);