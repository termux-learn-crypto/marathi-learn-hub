"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorials = void 0;
exports.getTutorial = getTutorial;
exports.getTutorialsByCategory = getTutorialsByCategory;
exports.searchTutorials = searchTutorials;
const python_level1_1 = require("./tutorials/python-level1");
const python_level2_1 = require("./tutorials/python-level2");
const python_level3_1 = require("./tutorials/python-level3");
const python_level4_1 = require("./tutorials/python-level4");
const python_level5_1 = require("./tutorials/python-level5");
const python_level6_1 = require("./tutorials/python-level6");
const python_level7_1 = require("./tutorials/python-level7");
const python_level8_1 = require("./tutorials/python-level8");
const html_level1_1 = require("./tutorials/html-level1");
const html_level2_1 = require("./tutorials/html-level2");
const html_level3_1 = require("./tutorials/html-level3");
const html_level4_1 = require("./tutorials/html-level4");
const html_level5_1 = require("./tutorials/html-level5");
const css_level1_1 = require("./tutorials/css-level1");
const css_level2_1 = require("./tutorials/css-level2");
const css_level3_1 = require("./tutorials/css-level3");
const css_level4_1 = require("./tutorials/css-level4");
const css_level5_1 = require("./tutorials/css-level5");
const css_level6_1 = require("./tutorials/css-level6");
const css_level7_1 = require("./tutorials/css-level7");
const css_level8_1 = require("./tutorials/css-level8");
const css_level9_1 = require("./tutorials/css-level9");
const css_level10_1 = require("./tutorials/css-level10");
const css_level11_1 = require("./tutorials/css-level11");
const css_level12_1 = require("./tutorials/css-level12");
const css_level13_1 = require("./tutorials/css-level13");
const css_level14_1 = require("./tutorials/css-level14");
const css_level15_1 = require("./tutorials/css-level15");
exports.tutorials = [
    // === WEB DEVELOPMENT ===
    {
        slug: "html-basics",
        categoryId: "web",
        title: "HTML Basics - मूलभूत HTML",
        marathiTitle: "HTML म्हणजे काय?",
        level: "beginner",
        minutes: 15,
        summary: "HTML (HyperText Markup Language) म्हणजे वेबपेज तयार करण्यासाठी वापरली जाणारी भाषा.",
        sections: [
            {
                title: "काय आहे HTML?",
                content: "HTML (HyperText Markup Language) ही एक मार्कअप भाषा आहे जी वेबपेजची रचना तयार करते. जशी एखाद्या घराची नक्की (blueprint) असते, तशीच HTML ही वेबपेजची रचना ठरवते.\n\nHTML मध्ये आपण tags वापरतो. Tag म्हणजे < आणि > यामध्ये लिहिलेला कोड. उदा. <h1>, <p>, <div> इत्यादी.\n\nप्रत्येक tag दोन प्रकारे असतो:\n• Opening tag: <p>\n• Closing tag: </p>",
                code: `<!DOCTYPE html>
<html>
  <head>
    <title>माझी वेबसाइट</title>
  </head>
  <body>
    <h1>नमस्कार!</h1>
    <p>हे माझे पहिले वेबपेज आहे.</p>
  </body>
</html>`,
                codeLanguage: "html",
            },
            {
                title: "मूलभूत Tags",
                content: "प्रत्येक HTML डॉक्युमेंटमध्ये खालील मूलभूत tags असतात:\n\n• <html> - संपूर्ण दस्तऐवज\n• <head> - मेटाडेटा (टायटल, लिंक्स)\n• <title> - ब्राउझर टॅबवर दिसणारा टायटल\n• <body> - दिसणारी सर्व माहिती\n\nHeading tags:\n• <h1> - सर्वात मोठा heading\n• <h2> ते <h6> - छोटे headings\n\nParagraph आणि Lists:\n• <p> - paragraph\n• <ul> - unordered list\n• <ol> - ordered list\n• <li> - list item",
                code: `<h1>मुख्य शीर्षक</h1>
<h2>उप-शीर्षक</h2>
<p>हे एक paragraph आहे.</p>

<ul>
  <li>पहिला item</li>
  <li>दुसरा item</li>
</ul>`,
                codeLanguage: "html",
                output: "मुख्य शीर्षक\nउप-शीर्षक\nहे एक paragraph आहे.\n• पहिला item\n• दुसरा item",
            },
        ],
        quiz: [
            {
                question: "HTML मध्ये heading साठी कोणता tag वापरतात?",
                options: ["<p>", "<h1>", "<div>", "<head>"],
                correct: 1,
            },
            {
                question: "HTML चा पूर्ण अर्थ काय?",
                options: [
                    "HyperText Markup Language",
                    "HighText Making Language",
                    "HyperText Machine Language",
                    "Hindi Text Markup Language",
                ],
                correct: 0,
            },
            {
                question: "खालीलपैकी कोणता tag closing tag सोबत येतो?",
                options: ["<p>...</p>", "<br>", "<img>", "<input>"],
                correct: 0,
            },
        ],
        related: ["css-basics", "html-forms", "html-links"],
        next: "css-basics",
    },
    {
        slug: "css-basics",
        categoryId: "web",
        title: "CSS Basics - मूलभूत CSS",
        marathiTitle: "CSS ने वेबपेज सुंदर करा",
        level: "beginner",
        minutes: 18,
        summary: "CSS (Cascading Style Sheets) म्हणजे वेबपेजला color, layout, font देण्याची भाषा.",
        sections: [
            {
                title: "CSS म्हणजे काय?",
                content: "CSS (Cascading Style Sheets) ही अशी भाषा आहे जी वेबपेजला सुंदर बनवते. HTML रचना देतो, पण CSS ती रचना कशी दिसेल हे ठरवते.\n\nउदा. रंग, फॉन्ट, spacing, position, animation इत्यादी.\n\nCSS तीन प्रकारे लिहिता येते:\n1. Inline - थेट tag मध्ये\n2. Internal - <style> tag मध्ये\n3. External - वेगळ्या .css फाईलमध्ये",
                code: `body {
  background-color: lightblue;
  font-family: Arial, sans-serif;
}

h1 {
  color: navy;
  text-align: center;
}

button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}`,
                codeLanguage: "css",
            },
            {
                title: "Selectors आणि Properties",
                content: "CSS मध्ये selector म्हणजे आपण कोणत्या element ला style देत आहोत हे सांगतो.\n\n• Element selector: body { }\n• Class selector: .header { }\n• ID selector: #main { }\n\nProperties म्हणजे style चे गुणधर्म:\n• color - मजकुराचा रंग\n• background-color - पार्श्वभूमी\n• font-size - मजकुराचा आकार\n• margin - बाहेरील जागा\n• padding - आतील जागा",
                code: `.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card h2 {
  color: #333;
}

.card:hover {
  transform: scale(1.02);
}`,
                codeLanguage: "css",
            },
        ],
        quiz: [
            {
                question: "CSS चा पूर्ण अर्थ काय?",
                options: [
                    "Cascading Style Sheets",
                    "Computer Style Sheets",
                    "Creative Style System",
                    "Color Style Sheets",
                ],
                correct: 0,
            },
            {
                question: "खालीलपैकी कोणता CSS selector class साठी वापरतात?",
                options: ["#header", ".header", "header", "&header"],
                correct: 1,
            },
            {
                question: "element मध्ये आतील जागा कोणती property ठरवते?",
                options: ["margin", "border", "padding", "spacing"],
                correct: 2,
            },
        ],
        related: ["html-basics", "css-flexbox", "css-grid"],
        prev: "html-basics",
        next: "html-forms",
    },
    {
        slug: "html-forms",
        categoryId: "web",
        title: "HTML Forms - फॉर्म्स",
        marathiTitle: "HTML Forms म्हणजे काय?",
        level: "intermediate",
        minutes: 20,
        summary: "HTML Forms वापरून user कडून माहिती कशी घ्यावी ते शिका.",
        sections: [
            {
                title: "Forms ची ओळख",
                content: "HTML Form हा user कडून माहिती घेण्यासाठी वापरला जातो. उदा. Login form, Registration form, Search box.\n\n<form> tag मध्ये आपण input elements ठेवतो. प्रत्येक form मध्ये Submit button असतो जो माहिती send करतो.\n\nमूलभूत input types:\n• text - साधा मजकूर\n• password - गुप्त शब्द\n• email - ईमेल\n• number - संख्या\n• checkbox - टिक किंवा नाही\n• radio - एक पर्याय निवडणे",
                code: `<form action="/submit" method="post">
  <label for="name">नाव:</label>
  <input type="text" id="name" name="name"><br>

  <label for="email">ईमेल:</label>
  <input type="email" id="email" name="email"><br>

  <label for="pass">पासवर्ड:</label>
  <input type="password" id="pass" name="pass"><br>

  <input type="submit" value="सबमिट करा">
</form>`,
                codeLanguage: "html",
            },
        ],
        quiz: [
            {
                question: "पासवर्ड input साठी कोणता type वापरतात?",
                options: ["text", "password", "secret", "hidden"],
                correct: 1,
            },
            {
                question: "एका वेळी एक पर्याय निवडण्यासाठी कोणता input वापरतात?",
                options: ["checkbox", "radio", "select", "button"],
                correct: 1,
            },
        ],
        related: ["css-basics", "html-links", "html-tables"],
        prev: "css-basics",
        next: "html-links",
    },
    {
        slug: "html-links",
        categoryId: "web",
        title: "HTML Links - लिंक्स",
        marathiTitle: "HTML मध्ये Links कसे बनवायचे?",
        level: "beginner",
        minutes: 10,
        summary: "<a> tag वापरून वेबपेज दरम्यान नेव्हिगेशन कसे करायचे.",
        sections: [
            {
                title: "Anchor Tag",
                content: "<a> (anchor) tag हा links तयार करण्यासाठी वापरला जातो. href attribute मध्ये destination URL देतो.\n\n<a href=\"https://example.com\">येथे क्लिक करा</a>\n\nआणखी उपयुक्त attributes:\n• target=\"_blank\" - नवीन टॅबमध्ये उघडेल\n• title - टूलटिप",
                code: `<!-- External link -->
<a href="https://google.com">
  Google ला जा
</a>

<!-- नवीन टॅबमध्ये -->
<a href="https://example.com"
   target="_blank">
  नवीन टॅबमध्ये
</a>

<!-- एकाच पेजमधील section -->
<a href="#contact">
  Contact वर जा
</a>`,
                codeLanguage: "html",
            },
        ],
        quiz: [
            {
                question: "link बनवण्यासाठी कोणता tag वापरतात?",
                options: ["<link>", "<a>", "<href>", "<nav>"],
                correct: 1,
            },
            {
                question: "link नवीन टॅबमध्ये उघडण्यासाठी कोणता attribute वापरतात?",
                options: ["target=_blank", "new=tab", "open=new", "rel=external"],
                correct: 0,
            },
        ],
        related: ["html-basics", "html-forms", "css-flexbox"],
        prev: "html-forms",
        next: "css-flexbox",
    },
    {
        slug: "css-flexbox",
        categoryId: "web",
        title: "CSS Flexbox",
        marathiTitle: "Flexbox ने Layout सांभाळा",
        level: "intermediate",
        minutes: 22,
        summary: "Flexbox हा CSS मधील layout सिस्टम आहे जो elements एका line मध्ये ठेवतो.",
        sections: [
            {
                title: "Flexbox म्हणजे काय?",
                content: "Flexbox (Flexible Box) हा CSS layout मोड आहे जो elements एका दिशेने (row किंवा column) व्यवस्थित ठेवतो.\n\nजेव्हा आपण container ला display: flex देतो, तेव्हा त्यातील सर्व child elements एका line मध्ये येतात.\n\nमहत्वाचे properties:\n• justify-content - main axis वर alignment\n• align-items - cross axis वर alignment\n• flex-direction - direction (row/column)\n• gap - elements मधील जागा",
                code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.item {
  background: #3498db;
  color: white;
  padding: 15px;
  border-radius: 8px;
}

<!-- Container मध्ये items -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`,
                codeLanguage: "css",
            },
        ],
        quiz: [
            {
                question: "Flex container बनवण्यासाठी कोणती property वापरतात?",
                options: [
                    "display: flex",
                    "display: block",
                    "display: inline",
                    "position: flex",
                ],
                correct: 0,
            },
            {
                question: "elements मध्ये जागा ठेवण्यासाठी कोणती property वापरतात?",
                options: ["space", "gap", "margin-inline", "padding-gap"],
                correct: 1,
            },
        ],
        related: ["css-basics", "css-grid", "html-basics"],
        prev: "html-links",
        next: "css-grid",
    },
    {
        slug: "css-grid",
        categoryId: "web",
        title: "CSS Grid",
        marathiTitle: "CSS Grid Layout",
        level: "intermediate",
        minutes: 20,
        summary: "CSS Grid एक 2D layout सिस्टम आहे जी rows आणि columns दोन्ही नियंत्रित करते.",
        sections: [
            {
                title: "Grid म्हणजे काय?",
                content: "CSS Grid ही 2-आयामी layout सिस्टम आहे. तुम्ही rows आणि columns दोन्ही बनवू शकता आणि elements कुठे ठेवायचे हे नियंत्रित करू शकता.\n\nFlexbox 1D (एक दिशा) असते, Grid 2D (दोन दिशा) असते.\n\ngrid-template-columns ने columns ची संख्या आणि आकार ठरवतो.\n\ngrid-template-rows ने rows चा आकार ठरवतो.",
                code: `.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.item {
  background: #2ecc71;
  color: white;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
}

<!-- 3 columns मध्ये items -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>`,
                codeLanguage: "css",
            },
        ],
        quiz: [
            {
                question: "CSS Grid ही किती आयामी (dimensional) layout आहे?",
                options: ["1D", "2D", "3D", "कोणतीही नाही"],
                correct: 1,
            },
            {
                question: "Grid मध्ये columns ची संख्या ठरवण्यासाठी कोणती property?",
                options: [
                    "grid-columns",
                    "grid-template-columns",
                    "columns-count",
                    "grid-areas",
                ],
                correct: 1,
            },
        ],
        related: ["css-flexbox", "css-basics", "html-basics"],
        prev: "css-flexbox",
        next: "js-basics",
    },
    {
        slug: "js-basics",
        categoryId: "web",
        title: "JavaScript Basics",
        marathiTitle: "JavaScript - वेबला जीव द्या",
        level: "beginner",
        minutes: 20,
        summary: "JavaScript ही प्रोग्रामिंग भाषा आहे जी वेबपेजला interactive बनवते.",
        sections: [
            {
                title: "JavaScript म्हणजे काय?",
                content: "JavaScript ही सर्वात लोकप्रिय प्रोग्रामिंग भाषांपैकी एक आहे. ती वेबपेजमध्ये interactivity जोडते.\n\nHTML रचना देतो, CSS स्टाईल देतो आणि JavaScript बटण क्लिक, form validation, animation असे dynamic behaviors जोडते.\n\nतुम्ही JavaScript कुठेही चालवू शकता - ब्राउझर, Node.js, आणि आता अगदी hardware वरही.",
                code: `// हे एक comment आहे - प्रोग्रामरसाठी नोट

// variable declare
let name = "विलास";
const age = 25;

// console मध्ये print
console.log("नमस्कार! " + name);

// function बनवणे
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

// if-else
if (age >= 18) {
  console.log("तुम्ही प्रौढ आहात");
} else {
  console.log("तुम्ही अल्पवयीन आहात");
}`,
                codeLanguage: "javascript",
                output: "नमस्कार! विलास\n8\nतुम्ही प्रौढ आहात",
            },
        ],
        quiz: [
            {
                question: "JavaScript मध्ये variable declare करण्यासाठी कोणता keyword वापरतात?",
                options: ["var", "let", "const", "तीनही"],
                correct: 3,
            },
            {
                question: "console मध्ये काही print करण्यासाठी कोणती command वापरतात?",
                options: ["print()", "console.log()", "echo()", "document.write()"],
                correct: 1,
            },
            {
                question: "खालीलपैकी कोणता JavaScript data type नाही?",
                options: ["number", "string", "boolean", "character"],
                correct: 3,
            },
        ],
        related: ["html-basics", "python-basics", "css-basics"],
        prev: "css-grid",
        next: "js-functions",
    },
    {
        slug: "js-functions",
        categoryId: "web",
        title: "JavaScript Functions",
        marathiTitle: "JavaScript Functions समजून घ्या",
        level: "intermediate",
        minutes: 15,
        summary: "Functions म्हणजे कोडचे पुन्हा वापरता येणारे ब्लॉक.",
        sections: [
            {
                title: "Function म्हणजे काय?",
                content: "Function हा कोडचा एक block आहे जो विशिष्ट काम करतो आणि जेव्हा हवे तेव्हा call करता येतो.\n\nयाचे फायदे:\n• कोड पुन्हा लिहावा लागत नाही\n• कोड सुटसुटीत आणि समजण्यासारखा होतो\n• Errors शोधणे सोपे होते\n\nFunction declaration, function expression आणि arrow function असे तीन प्रकार आपण पाहू शकतो.",
                code: `// 1. Function Declaration
function greet(name) {
  return "नमस्कार, " + name;
}

// 2. Function Expression
const square = function(x) {
  return x * x;
};

// 3. Arrow Function
const double = (x) => x * 2;

console.log(greet("राहुल"));
console.log(square(4));
console.log(double(5));`,
                codeLanguage: "javascript",
                output: "नमस्कार, राहुल\n16\n10",
            },
        ],
        quiz: [
            {
                question: "Function मध्ये मूल्य परत करण्यासाठी कोणता keyword वापरतात?",
                options: ["exit", "return", "break", "output"],
                correct: 1,
            },
            {
                question: "Function call कसा करतात?",
                options: ["call myFunction", "myFunction()", "run myFunction", "func myFunction"],
                correct: 1,
            },
        ],
        related: ["js-basics", "python-functions", "python-for-loop"],
        prev: "js-basics",
    },
    // === PYTHON (split into level files) ===
    ...python_level1_1.pythonLevel1,
    ...python_level2_1.pythonLevel2,
    ...python_level3_1.pythonLevel3,
    ...python_level4_1.pythonLevel4,
    ...python_level5_1.pythonLevel5,
    ...python_level6_1.pythonLevel6,
    ...python_level7_1.pythonLevel7,
    ...python_level8_1.pythonLevel8,
    ...html_level1_1.htmlLevel1,
    ...html_level2_1.htmlLevel2,
    ...html_level3_1.htmlLevel3,
    ...html_level4_1.htmlLevel4,
    ...html_level5_1.htmlLevel5,
    ...css_level1_1.cssLevel1,
    ...css_level2_1.cssLevel2,
    ...css_level3_1.cssLevel3,
    ...css_level4_1.cssLevel4,
    ...css_level5_1.cssLevel5,
    ...css_level6_1.cssLevel6,
    ...css_level7_1.cssLevel7,
    ...css_level8_1.cssLevel8,
    ...css_level9_1.cssLevel9,
    ...css_level10_1.cssLevel10,
    ...css_level11_1.cssLevel11,
    ...css_level12_1.cssLevel12,
    ...css_level13_1.cssLevel13,
    ...css_level14_1.cssLevel14,
    ...css_level15_1.cssLevel15,
    // === LINUX ===
    {
        slug: "linux-basics",
        categoryId: "linux",
        title: "Linux Basics",
        marathiTitle: "Linux - मुक्त संगणक ऑपरेटिंग सिस्टम",
        level: "beginner",
        minutes: 15,
        summary: "Linux ही मुक्त (open-source) ऑपरेटिंग सिस्टम आहे. मूलभूत commands शिका.",
        sections: [
            {
                title: "Linux म्हणजे काय?",
                content: "Linux ही एक free आणि open-source ऑपरेटिंग सिस्टम आहे. ती अनेक servers, smartphones आणि संगणकांवर चालते.\n\nLinux मध्ये सर्व काही file आहे - फाइल्स, directories, devices.\n\nTerminal (कमांड लाइन) वापरून आपण संगणकाशी संवाद साधतो. हे GUI पेक्षा जास्त शक्तिशाली आणि fast असते.",
                code: `# फाइल्स पाहणे
ls

# सध्याची directory
pwd

# directory बदलणे
cd /home/user

# नवीन फाइल बनवणे
touch test.txt

# फाइल वाचणे
cat test.txt

# directory बनवणे
mkdir new_folder

# फाइल कॉपी करणे
cp test.txt test_copy.txt

# फाइल हलवणे/रिनेम करणे
mv test_copy.txt renamed.txt

# फाइल डिलीट करणे
rm renamed.txt`,
                codeLanguage: "bash",
                output: "Desktop  Documents  Downloads\n/home/user\nहॅलो Linux!\n",
            },
        ],
        quiz: [
            {
                question: "सध्याची directory बघण्यासाठी कोणती command?",
                options: ["ls", "pwd", "cd", "dir"],
                correct: 1,
            },
            {
                question: "नवीन directory बनवण्यासाठी कोणती command?",
                options: ["makedir", "mkdir", "newdir", "touch"],
                correct: 1,
            },
        ],
        related: ["termux-basics", "linux-permissions", "linux-navigation"],
        next: "linux-navigation",
    },
    {
        slug: "linux-navigation",
        categoryId: "linux",
        title: "Linux Navigation",
        marathiTitle: "Filesystem Navigation - नेव्हिगेशन",
        level: "beginner",
        minutes: 12,
        summary: "Linux filesystem मध्ये cd, ls, pwd वापरून नेव्हिगेशन कसे करायचे.",
        sections: [
            {
                title: "Filesystem समजून घेणे",
                content: "Linux filesystem एक tree सारखी असते - वरून root (/) पासून सुरु होते आणि खाली directories.\n\nमुख्य directories:\n• / - root directory\n• /home - user च्या फाइल्स\n• /etc - configuration files\n• /bin - program binaries\n• /tmp - temporary files\n\nRelative path (.) सध्याच्या directory पासून.\nAbsolute path (/) root पासून सुरु होतो.",
                code: `# absolute path
cd /home/user

# parent directory वर जाणे
cd ..

# home directory वर परत
cd ~

# directory content ls
ls -l    # detail list
ls -a    # hidden files

# tree मधील फाइल शोधणे
find /home -name "*.txt"

# पाथ मध्ये file आहे का तपासणे
file /etc/hostname`,
                codeLanguage: "bash",
            },
        ],
        quiz: [
            {
                question: "parent directory मध्ये जाण्यासाठी काय वापरतात?",
                options: ["cd ..", "cd .", "cd ~", "cd /"],
                correct: 0,
            },
            {
                question: "hidden files बघण्यासाठी कोणती command?",
                options: ["ls", "ls -a", "list hidden", "ls -hidden"],
                correct: 1,
            },
        ],
        related: ["linux-basics", "linux-permissions", "linux-commands"],
        prev: "linux-basics",
        next: "linux-permissions",
    },
    {
        slug: "linux-permissions",
        categoryId: "linux",
        title: "Linux Permissions",
        marathiTitle: "Filesystem Permissions समजून घ्या",
        level: "intermediate",
        minutes: 15,
        summary: "read, write, execute permissions म्हणजे काय आणि chmod कसे वापरायचे.",
        sections: [
            {
                title: "Permissions म्हणजे काय?",
                content: "Linux मध्ये प्रत्येक फाइल आणि directory ला permissions असतात जे ठरवतात कोण ती file वाचू, बदलू किंवा run करू शकतो.\n\nतीन प्रकार:\n• read (r) - वाचणे\n• write (w) - बदलणे\n• execute (x) - run करणे\n\nतीन groups:\n• owner (u) - फाइलचा मालक\n• group (g) - ग्रुप\n• others (o) - इतर",
                code: `# permissions बघणे
ls -l

# chmod वापरून permissions बदलणे
# owner ला read+write+execute
chmod u+rwx file.sh

# सर्वांना read+execute
chmod a+rx file.sh

# numeric method
# 7=rwx 6=rw- 5=r-x 4=r--
chmod 755 script.sh
chmod 644 file.txt

# file कोणाची आहे ते बघणे
ls -l

# owner बदलणे
chown user:group file.txt`,
                codeLanguage: "bash",
                output: "-rw-r--r--  1 user group 123 Sep 04 12:00 file.txt\n",
            },
        ],
        quiz: [
            {
                question: "numeric method मध्ये 7 म्हणजे काय?",
                options: ["read", "write", "read+write+execute", "execute+read"],
                correct: 2,
            },
            {
                question: "execute permission कोणत्या अक्षराने दर्शवतात?",
                options: ["r", "w", "e", "x"],
                correct: 3,
            },
        ],
        related: ["linux-navigation", "linux-basics", "linux-commands"],
        prev: "linux-navigation",
        next: "linux-commands",
    },
    {
        slug: "linux-commands",
        categoryId: "linux",
        title: "Essential Linux Commands",
        marathiTitle: "उपयुक्त Linux Commands",
        level: "intermediate",
        minutes: 18,
        summary: "रोजच्या कामात लागणारे essential Linux commands शिका.",
        sections: [
            {
                title: "Essential Commands",
                content: "येथे काही उपयुक्त Linux commands:\n\nFile management:\n• cp - कॉपी\n• mv - हलवणे\n• rm - डिलीट\n• ln - link\n\nText processing:\n• grep - pattern शोधणे\n• cat - वाचणे\n• less - आरामात वाचणे\n• wc - word count\n\nSystem:\n• ps - processes\n• kill - process थांबवणे\n• df - disk usage\n• free - memory",
                code: `# फाइलमध्ये keyword शोधणे
grep "error" log.txt

# file मधील lines मोजणे
wc -l file.txt

# running processes
ps aux

# process थांबवणे
kill 1234

# disk usage
df -h

# memory
free -h

# इतिहास
history

# पॅकेज इन्स्टॉल (Ubuntu/Debian)
sudo apt install <package>`,
                codeLanguage: "bash",
            },
        ],
        quiz: [
            {
                question: "फाइलमध्ये keyword शोधण्यासाठी कोणती command?",
                options: ["search", "find", "grep", "scan"],
                correct: 2,
            },
            {
                question: "disk usage बघण्यासाठी कोणती command?",
                options: ["disk", "df", "dusage", "fdisk"],
                correct: 1,
            },
        ],
        related: ["linux-permissions", "linux-basics", "linux-navigation"],
        prev: "linux-permissions",
    },
    // === TERMUX ===
    {
        slug: "termux-basics",
        categoryId: "termux",
        title: "Termux Basics",
        marathiTitle: "Termux - Android वरील Linux टर्मिनल",
        level: "beginner",
        minutes: 12,
        summary: "Termux म्हणजे Android वर चालणारा terminal - त्याद्वारे संगणकाप्रमाणे कमांड्स चालवता येतात.",
        sections: [
            {
                title: "Termux म्हणजे काय?",
                content: "Termux हा Android वर चालणारा एक terminal emulator आहे. त्यामुळे आपण फोनवरच Linux commands, Python, Node.js आणि इतर अनेक tools चालवू शकता.\n\nTermux install करण्यासाठी:\n1. F-Droid किंवा GitHub वरून APK download करा\n2. Install करा\n\nहे Play Store वरून येत नाही कारण Google च्या धोरणांमुळे काही features blocked आहेत.",
                code: `# पॅकेज अपडेट
pkg update
pkg upgrade

# python install
pkg install python

# python चालवणे
python

# node.js install
pkg install nodejs

# git install
pkg install git

# camera/permission साठी
termux-setup-storage

# help
pkg help`,
                codeLanguage: "bash",
            },
        ],
        quiz: [
            {
                question: "Termux मध्ये पॅकेज install करण्यासाठी कोणती command?",
                options: ["apt install", "pkg install", "install", "pip install"],
                correct: 1,
            },
            {
                question: "Termux मध्ये Python install कशी करतात?",
                options: ["pkg install python", "install python", "python setup", "pip python"],
                correct: 0,
            },
        ],
        related: ["linux-basics", "termux-python", "linux-commands"],
        next: "termux-python",
    },
    {
        slug: "termux-python",
        categoryId: "termux",
        title: "Termux वर Python",
        marathiTitle: "फोनवर Python Programs",
        level: "intermediate",
        minutes: 15,
        summary: "Termux मध्ये Python install करून programs कसे चालवायचे.",
        sections: [
            {
                title: "Python install आणि चालवणे",
                content: "Termux मध्ये Python install करणे अगदी सोपे आहे.\n\npkg install python\n\nआता फाइल बनवा:\nnano or vi or nano code editor वापरून .py file बनवा\n\nमग python filename.py ने run करा.\n\nModules install करण्यासाठी:\npip install <package>",
                code: `# install
pkg install python

# file बनवणे
nano hello.py

# file content
print("नमस्कार Termux!")

# run
python hello.py

# modules
pip install requests

# interactive mode
python

# >>> print("हाय")`,
                codeLanguage: "bash",
                output: "नमस्कार Termux!",
            },
        ],
        quiz: [
            {
                question: "Termux मध्ये Python फाइल run करण्यासाठी?",
                options: ["run file.py", "python file.py", "execute file.py", "py file.py"],
                correct: 1,
            },
            {
                question: "Python module install करण्यासाठी?",
                options: ["pkg install", "pip install", "module install", "npm install"],
                correct: 1,
            },
        ],
        related: ["termux-basics", "python-basics", "linux-basics"],
        prev: "termux-basics",
    },
    // === COMPUTER ===
    {
        slug: "computer-basics",
        categoryId: "computer",
        title: "Computer Basics",
        marathiTitle: "संगणकाची मूलभूत माहिती",
        level: "beginner",
        minutes: 15,
        summary: "संगणक म्हणजे काय, त्याचे भाग आणि मूलभूत संकल्पना मराठीतून.",
        sections: [
            {
                title: "संगणक म्हणजे काय?",
                content: "संगणक (Computer) हे एक electronic device आहे जे data (माहिती) घेते, ती प्रोसेस करते आणि निकाल देते.\n\nसंगणकाचे चार मुख्य काम:\n1. Input - माहिती घेणे (कीबोर्ड, माउस)\n2. Processing - प्रोसेस करणे (CPU)\n3. Storage - साठवणे (RAM, hard disk)\n4. Output - निकाल देणे (मॉनिटर, printer)\n\nHardware म्हणजे संगणकाचे भौतिक भाग - keyboard, mouse, monitor, CPU.\nSoftware म्हणजे programs - Windows, games, apps.",
                code: `// Input प्रक्रिया समजून घ्या
1. तुम्ही keyboard वर अक्षर टाइप करता (Input)
2. CPU ते प्रोसेस करते (Processing)
3. RAM मध्ये store होते (Storage)
4. Monitor वर दिसते (Output)`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "संगणकाचे hardware म्हणजे काय?",
                options: ["प्रोग्रॅम्स", "भौतिक भाग", "डेटा", "इंटरनेट"],
                correct: 1,
            },
            {
                question: "संगणकाचा 'मेंदू' कोणता भाग?",
                options: ["RAM", "Hard Disk", "CPU", "Monitor"],
                correct: 2,
            },
        ],
        related: ["computer-hardware", "linux-basics", "python-basics"],
        next: "computer-hardware",
    },
    {
        slug: "computer-hardware",
        categoryId: "computer",
        title: "Computer Hardware",
        marathiTitle: "संगणकाचे भाग समजून घ्या",
        level: "beginner",
        minutes: 18,
        summary: "CPU, RAM, motherboard, storage यासारखे संगणकाचे मुख्य hardware भाग.",
        sections: [
            {
                title: "मुख्य Hardware भाग",
                content: "संगणकाचे मुख्य भाग:\n\n• CPU (Central Processing Unit) - संगणकाचा मेंदू, सर्व गणना करतो\n• Motherboard - सर्व भाग जोडणारा मुख्य सर्किट बोर्ड\n• RAM - तात्पुरती माहितीची जागा, जलद पण क्षणभंगुर\n• Storage (HDD/SSD) - कायम स्वरूपाची साठवण\n• PSU - वीज पुरवठा\n• GPU - ग्राफिक्स प्रोसेसिंग\n\nRAM आणि Storage मधील फरक:\nRAM फक्त संगणक चालू असताना data ठेवते. Power बंद झाली की RAM रिकामी होते.\nStorage (hard disk/SSD) मध्ये data कायम राहतो.",
            },
        ],
        quiz: [
            {
                question: "कोणते device तात्पुरती माहिती ठेवते?",
                options: ["Hard Disk", "SSD", "RAM", "CD"],
                correct: 2,
            },
            {
                question: "सर्व hardware भाग कोणत्या board वर जोडलेले असतात?",
                options: ["Graphics card", "Motherboard", "Sound card", "Network card"],
                correct: 1,
            },
        ],
        related: ["computer-basics", "linux-basics", "computer-software"],
        prev: "computer-basics",
        next: "computer-software",
    },
    {
        slug: "computer-software",
        categoryId: "computer",
        title: "Computer Software",
        marathiTitle: "सॉफ्टवेअर म्हणजे काय?",
        level: "beginner",
        minutes: 12,
        summary: "System software, application software आणि त्यांचे प्रकार.",
        sections: [
            {
                title: "सॉफ्टवेअरचे प्रकार",
                content: "Software म्हणजे संगणकाला काय करायचे ते सांगणारे programs.\n\nदोन मुख्य प्रकार:\n\n1. System Software:\n• Operating System (Windows, Linux, Android)\n• Drivers\n• Utilities\n\n2. Application Software:\n• Browsers (Chrome, Firefox)\n• Office (Word, Excel)\n• Games\n• Messaging apps",
                code: `// Software layers
Hardware
  ↓
Operating System (Windows/Linux)
  ↓
Applications (Browser, Games)
  ↓
User`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "Operating System कोणत्या प्रकारचे software आहे?",
                options: ["Application", "System", "Utility", "Driver"],
                correct: 1,
            },
            {
                question: "खालीलपैकी कोणते application software आहे?",
                options: ["Windows", "Linux", "Chrome Browser", "BIOS"],
                correct: 2,
            },
        ],
        related: ["computer-hardware", "computer-basics", "linux-basics"],
        prev: "computer-hardware",
    },
    // === AI ===
    {
        slug: "ai-basics",
        categoryId: "ai",
        title: "AI Basics - काय आहे AI?",
        marathiTitle: "आर्टिफिशियल इंटेलिजन्स म्हणजे काय?",
        level: "beginner",
        minutes: 15,
        summary: "AI म्हणजे संगणकाला माणसासारखा विचार करायला शिकवणे.",
        sections: [
            {
                title: "AI म्हणजे काय?",
                content: "AI (Artificial Intelligence) म्हणजे संगणकाला माणसासारखं विचार करायला, शिकायला आणि निर्णय घ्यायला शिकवणे.\n\nआधीच्या programs नुसार नियमं पाळतात, पण AI data वरून शिकतो.\n\nAI चे उदाहरण:\n• Siri / Google Assistant\n• Chat-GPT\n• फोटो फेस पाहणे\n• YouTube वर recommendations",
                code: `# AI काय करतो (सोपे उदाहरण):
1. Massive data (माहिती) घेतो
2. त्या data मधून patterns (नमुने) शिकतो
3. शिकलेल्या ज्ञानावरून निर्णय/उत्तर देतो

# उदा. फोटोमधील चेहरा
Input: लाखो चेहऱ्यांचे फोटो
Training: नमुने शिकते
Output: नवीन फोटोमधील चेहरा ओळखते`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "AI मध्ये संगणक काय करतो?",
                options: ["फक्त नियम पाळतो", "डेटावरून शिकतो", "काहीच नाही", "फक्त गणित करतो"],
                correct: 1,
            },
            {
                question: "खालीलपैकी कोणते AI चे उदाहरण आहे?",
                options: ["Calculator", "Chat-GPT", "Notepad", "MS Paint"],
                correct: 1,
            },
        ],
        related: ["ai-machine-learning", "python-basics", "ai-applications"],
        next: "ai-machine-learning",
    },
    {
        slug: "ai-machine-learning",
        categoryId: "ai",
        title: "Machine Learning",
        marathiTitle: "मशीन लर्निंग म्हणजे काय?",
        level: "intermediate",
        minutes: 20,
        summary: "Machine Learning म्हणजे संगणकाला data वरून शिकायला शिकवणे.",
        sections: [
            {
                title: "Machine Learning ची ओळख",
                content: "Machine Learning (ML) हे AI चे उप-क्षेत्र आहे. सामान्य programming मध्ये आपण rules लिहतो, पण ML मध्ये आपण data देतो आणि संगणक स्वतःच rules शिकतो.\n\nतीन प्रकार:\n1. Supervised Learning - labeled data वरून शिकणे\n2. Unsupervised Learning - patterns शोधणे\n3. Reinforcement Learning - प्रयत्न-अपयशातून शिकणे\n\nसामान्य उदाहरण:\nआपण मुलाला सफरचंद ओळखायला शिकवतो - अनेक चित्रे दाखवतो. तो मग स्वतः ओळखतो.",
                code: `# सामान्य programming vs ML

# सामान्य programming
if state == 'जवळ' and object == 'APPLE':
    label = 'सफरचंद'

# ML पद्धत
training_data = [
   (सफरचंद_चित्र, 'सफरचंद'),
   (केळी_चित्र, 'केळी'),
]
model.learn(training_data)

# आता नवीन चित्र ओळखेल
model.predict(नवीन_चित्र)`,
                codeLanguage: "python",
            },
        ],
        quiz: [
            {
                question: "ML मध्ये संगणक कसे शिकतो?",
                options: ["नियम वाचून", "डेटावरून", "गाणे ऐकून", "कोड लिहून"],
                correct: 1,
            },
            {
                question: "Supervised learning मध्ये कशाचा वापर होतो?",
                options: ["Labeled data", "कोणताही data", "फक्त text", "फक्त numbers"],
                correct: 0,
            },
        ],
        related: ["ai-basics", "python-basics", "python-lists"],
        prev: "ai-basics",
        next: "ai-python",
    },
    {
        slug: "ai-python",
        categoryId: "ai",
        title: "AI साठी Python",
        marathiTitle: "AI बनवण्यासाठी Python का?",
        level: "intermediate",
        minutes: 15,
        summary: "Python ही AI/ML साठी सर्वात लोकप्रिय भाषा - का ते पाहू.",
        sections: [
            {
                title: "Python आणि AI",
                content: "Python ही AI/ML साठी सर्वात लोकप्रिय भाषा आहे कारण:\n\n• Simpl सिंटॅक्स - learn करणे सोपे\n• भरपूर libraries:\n  - NumPy - गणित\n  - Pandas - data analysis\n  - Scikit-learn - ML algorithms\n  - TensorFlow / PyTorch - deep learning\n• मोठा समाज (community)\n• मुक्त स्वरूप (free)\n\nसुरुवातीला आपण Python basics आणि नंतर ML libraries शिकू.",
                code: `# ML library उदाहरण (सोपे)
# pip install scikit-learn

from sklearn.tree import DecisionTreeClassifier

# data
X = [[5.1, 3.5], [7.0, 3.2], [6.3, 3.3]]
y = [0, 1, 1]  # labels

# मॉडेल तयार
model = DecisionTreeClassifier()
model.fit(X, y)

# prediction
print(model.predict([[5.1, 3.5]]))`,
                codeLanguage: "python",
                output: "[0]",
            },
        ],
        quiz: [
            {
                question: "AI साठी सर्वात लोकप्रिय programming भाषा?",
                options: ["Java", "Python", "C++", "JavaScript"],
                correct: 1,
            },
            {
                question: "कोणती library data analysis साठी वापरतात?",
                options: ["Pandas", "React", "Django", "Flask"],
                correct: 0,
            },
        ],
        related: ["ai-machine-learning", "python-basics", "python-lists"],
        prev: "ai-machine-learning",
    },
    // === ELECTRONICS ===
    {
        slug: "arduino-basics",
        categoryId: "electronics",
        title: "Arduino Basics",
        marathiTitle: "Arduino - इलेक्ट्रॉनिक्सची सुरुवात",
        level: "beginner",
        minutes: 20,
        summary: "Arduino म्हणजे काय, त्याचे भाग आणि पहिला program.",
        sections: [
            {
                title: "Arduino म्हणजे काय?",
                content: "Arduino हे एक microcontroller board आहे जे इलेक्ट्रॉनिक्स प्रोजेक्ट्स बनवण्यासाठी वापरले जाते.\n\nयात अनेक input/output pins असतात ज्यांना LED, sensor, motor इत्यादी जोडता येतात.\n\nआपण computer वर Arduino IDE वापरून program (sketch) लिहतो आणि USB ने upload करतो.\n\nArduino भाषा ही C/C++ सारखी असते.",
                code: `// Arduino चा पहिला program - LED blink
// pin 13 वर LED जोडलेला आहे (Built-in)

void setup() {
  pinMode(13, OUTPUT);   // LED pin output म्हणून सेट
}

void loop() {
  digitalWrite(13, HIGH);   // LED ON
  delay(1000);              // 1 सेकंद थांबणे
  digitalWrite(13, LOW);    // LED OFF
  delay(1000);              // 1 सेकंद थांबणे
}`,
                codeLanguage: "c",
            },
        ],
        quiz: [
            {
                question: "Arduino program (sketch) कोणत्या भाषेसारखा असतो?",
                options: ["Python", "C/C++", "JavaScript", "Java"],
                correct: 1,
            },
            {
                question: "Arduino मध्ये LED ऑन करण्यासाठी कोणती function?",
                options: ["ledOn()", "digitalWrite(pin, HIGH)", "light()", "on(pin)"],
                correct: 1,
            },
        ],
        related: ["electronics-basics", "arduino-led", "diy-projects"],
        next: "arduino-led",
    },
    {
        slug: "arduino-led",
        categoryId: "electronics",
        title: "Arduino LED Projects",
        marathiTitle: "LED control करा Arduino ने",
        level: "intermediate",
        minutes: 18,
        summary: "LED on/off, blink आणि sequence - Arduino LED प्रोजेक्ट्स.",
        sections: [
            {
                title: "LED Control",
                content: "LED (Light Emitting Diode) हा एक साधा घटक आहे जो विद्युत ऊर्जा प्रकाशात बदलतो.\n\nArduino मध्ये LED जोडण्यासाठी:\n• Anode (+) → resistor (220Ω) → Arduino pin\n• Cathode (-) → GND\n\nResistor वापरणे महत्त्वाचे - नाहीतर LED जळू शकते.",
                code: `// अनेक LEDs sequence मध्ये
int leds[] = {2, 3, 4, 5};  // pins

void setup() {
  for (int i = 0; i < 4; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i < 4; i++) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
  for (int i = 3; i >= 0; i--) {
    digitalWrite(leds[i], HIGH);
    delay(200);
    digitalWrite(leds[i], LOW);
  }
}`,
                codeLanguage: "c",
            },
        ],
        quiz: [
            {
                question: "LED सोबत resistor का वापरतात?",
                options: ["चमक वाढविण्यासाठी", "LED जळू नये म्हणून", "रंग बदलण्यासाठी", "गरज नाही"],
                correct: 1,
            },
            {
                question: "LED च्या anode ला कोणती बाजू जोडतात?",
                options: ["GND", "वीज/pin", "दोन्ही", "resistor नाही"],
                correct: 1,
            },
        ],
        related: ["arduino-basics", "electronics-basics", "diy-projects"],
        prev: "arduino-basics",
    },
    {
        slug: "electronics-basics",
        categoryId: "electronics",
        title: "Electronics Basics",
        marathiTitle: "इलेक्ट्रॉनिक्सची मूलभूत संकल्पना",
        level: "beginner",
        minutes: 15,
        summary: "Voltage, current, resistance - इलेक्ट्रॉनिक्सच्या मूलभूत संकल्पना.",
        sections: [
            {
                title: "मूलभूत संकल्पना",
                content: "इलेक्ट्रॉनिक्स समजून घेण्यासाठी तीन मूलभूत गोष्टी:\n\n• Voltage (V) - विद्युत दाब, पाण्याच्या दाबासारखा\n• Current (I) - विद्युत प्रवाह, पाण्याच्या प्रवाहासारखा\n• Resistance (R) - प्रवाहाला विरोध, अरुंद पाईपसारखा\n\nओहमचा नियम:\nV = I × R\n\nमूलभूत घटक:\n• Resistor - प्रवाह मर्यादित करतो\n• Capacitor - ऊर्जा store करतो\n• Diode - एका दिशेने प्रवाह\n• LED - प्रकाश देणारा diode\n• Transistor - switch/amplifier",
                code: `# Ohm's Law उदाहरण:
Voltage (V) = Current (I) × Resistance (R)

जर V = 5V आणि R = 1000Ω:
I = V / R = 5 / 1000 = 0.005A = 5mA

# LED circuit:
V_source = 5V
V_led = 2V (LED चे व्होल्टेज)
R = (5 - 2) / 0.02 = 150Ω`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "ओहमचा नियम काय आहे?",
                options: [
                    "V = I × R",
                    "I = V × R",
                    "R = V × I",
                    "V = I / R",
                ],
                correct: 0,
            },
            {
                question: "प्रवाह मर्यादित करणारा घटक कोणता?",
                options: ["Capacitor", "Diode", "Resistor", "LED"],
                correct: 2,
            },
        ],
        related: ["arduino-basics", "electrical-basics", "arduino-led"],
        next: "arduino-basics",
    },
    // === DIY ===
    {
        slug: "diy-projects",
        categoryId: "diy",
        title: "DIY Projects",
        marathiTitle: "घरगुती DIY प्रोजेक्ट्स",
        level: "beginner",
        minutes: 20,
        summary: "घरी बनवता येणारे मजेदार आणि शिकवणारे DIY प्रोजेक्ट्स.",
        sections: [
            {
                title: "DIY म्हणजे काय?",
                content: "DIY (Do It Yourself) म्हणजे स्वतः काहीतरी बनवणे. हे खूप शिकवणारे असते आणि मजा येते.\n\nघरगुती DIY प्रोजेक्ट्स:\n\n1. LED Blinking Circuit\n2. बॅटरी tester\n3. टॉर्च\n4. इलेक्ट्रॉनिक हॅन्ड-धुण्याचा टाईमर\n5. संगीत सर्किट",
                code: `// प्रोजेक्ट: Portable LED Torch (टॉर्च)
// सोपा सर्किट:

components:
- LED
- Resistor 100Ω
- S위치 (switch)
- 9V battery
- wires

connections:
battery (+) → switch → resistor → LED (+) 
LED (-) → battery (-)

// हे सर्किट connection करून बघा!
// सुरक्षा: शॉर्ट सर्किट टाळा`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "DIY म्हणजे काय?",
                options: [
                    "Do It Yourself",
                    "Do It Yours",
                    "Digital Interactive Y",
                    "Direct Internet Year",
                ],
                correct: 0,
            },
        ],
        related: ["arduino-basics", "electronics-basics", "diy-arduino"],
        next: "diy-arduino",
    },
    {
        slug: "diy-arduino",
        categoryId: "diy",
        title: "DIY प्रोजेक्ट्स - Arduino",
        marathiTitle: "Arduino ने DIY प्रोजेक्ट्स",
        level: "intermediate",
        minutes: 14,
        summary: "Arduino वापरून 3 छान DIY प्रोजेक्ट्स.",
        sections: [
            {
                title: "Arduino DIY Projects",
                content: "येथे 3 छान DIY प्रोजेक्ट्स:\n\n1. Automatic Night Light - अंधारात आपोआप LED शिकणारा\n2. Distance Sensor - जवळ काही आल्यास buzzer वाजणारा\n3. Temperature Monitor - तापमान दाखवणारा",
                code: `// प्रोजेक्ट: Automatic Night Light
// LDR (light sensor) वापरून

int ldrPin = A0;
int ledPin = 13;
int threshold = 500;  // समायोजित करा

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int light = analogRead(ldrPin);
  if (light < threshold) {
    digitalWrite(ledPin, HIGH);  // अंधारात ON
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
                codeLanguage: "c",
            },
        ],
        quiz: [
            {
                question: "LDR sensor काय मोजतो?",
                options: ["तापमान", "प्रकाश", "आवाज", "हालचाल"],
                correct: 1,
            },
        ],
        related: ["diy-projects", "arduino-basics", "arduino-led"],
        prev: "diy-projects",
    },
    // === ELECTRICAL ===
    {
        slug: "electrical-basics",
        categoryId: "electrical",
        title: "Electrical Basics",
        marathiTitle: "इलेक्ट्रिकल मूलभूत माहिती",
        level: "beginner",
        minutes: 15,
        summary: "इलेक्ट्रिकल म्हणजे काय, सुरक्षा आणि मूलभूत संकल्पना.",
        sections: [
            {
                title: "इलेक्ट्रिकल म्हणजे काय?",
                content: "इलेक्ट्रिकल अभियांत्रिकी म्हणजे विजेचा (electricity) उत्पादन, संप्रेषण आणि वापर.\n\nAC (Alternating Current) - घरातील वीज\nDC (Direct Current) - बॅटरीतून\n\nमहत्त्वाचे:\n• घरातील वीज 220V AC आहे (भारतातील)\n• 12V किंवा 5V DC बॅटरी/चार्जरमध्ये\n\nसुरक्षा नियम:\n• ओल्या हातांनी स्विच स्पर्श करू नका\n• damaged wire ताबडतोब बदला\n• विद्युत उपकरणावर काम करताना वीज बंद करा",
            },
        ],
        quiz: [
            {
                question: "घरातील वीज कोणत्या प्रकारची असते?",
                options: ["DC", "AC", "खूप कमी voltage", "बॅटरी"],
                correct: 1,
            },
            {
                question: "भारतातील घरातील वीज किती voltage ची असते?",
                options: ["12V", "220V", "5V", "110V"],
                correct: 1,
            },
        ],
        related: ["electronics-basics", "electrical-safety", "diy-projects"],
        next: "electrical-safety",
    },
    {
        slug: "electrical-safety",
        categoryId: "electrical",
        title: "Electrical Safety",
        marathiTitle: "विद्युत सुरक्षा - महत्त्वाचे नियम",
        level: "beginner",
        minutes: 10,
        summary: "वीजेसोबत काम करताना सुरक्षा नियमांचे महत्त्व.",
        sections: [
            {
                title: "सुरक्षा टिप्स",
                content: "वीज अतिशय उपयुक्त पण धोकादायक असू शकते. सुरक्षा नियम:\n\n• ओल्या हातांनी कधीही switch/wire ला स्पर्श करू नका\n• वीज बंद असो, तरच उपकरणावर काम करा (MCB off)\n• damaged/फाटलेल्या wires ताबडतोब बदला\n• पाणी आणि वीज दूर ठेवा\n• भारावलेल्या (overloaded) socket वापरू नका\n• EMI (earth leakage) less वापरा\n\nआपत्कालीन:\nजर कोणाला करंट लागला तर:\n1. वीज ताबडतोब बंद करा (MCB)\n2. त्या व्यक्तीला लाकडी काठी/चप्पलने दूर करा\n3. तात्काळ डॉक्टर/हॉस्पिटल",
            },
        ],
        quiz: [
            {
                question: "वीजेसोबत काम करताना सर्वात महत्त्वाचे नियम?",
                options: [
                    "वीज बंद करा",
                    "जास्त वेगाने काम करा",
                    "रबर हातमोजे नको",
                    "पाणी वापरा",
                ],
                correct: 0,
            },
            {
                question: "ओल्या हातांनी switch ला स्पर्श करू नये कारण?",
                options: [
                    "स्विच खराब होईल",
                    "करंट लागू शकतो",
                    "प्रकाश कमी होईल",
                    "काहीही होणार नाही",
                ],
                correct: 1,
            },
        ],
        related: ["electrical-basics", "electronics-basics"],
        prev: "electrical-basics",
    },
    // === CYBER ===
    {
        slug: "cyber-basics",
        categoryId: "cyber",
        title: "Cyber Security Basics",
        marathiTitle: "सायबर सुरक्षा - मूलभूत माहिती",
        level: "beginner",
        minutes: 20,
        summary: "सायबर जगात सुरक्षित राहण्यासाठी मूलभूत गोष्टी.",
        sections: [
            {
                title: "सायबर सुरक्षा म्हणजे काय?",
                content: "सायबर सुरक्षा म्हणजे तुमची डिजिटल माहिती (computer, phone, accounts) सुरक्षित ठेवणे.\n\nसर्वात मोठे धोके:\n\n1. Phishing - बनावट message/link द्वारे माहिती चोरणे\n2. Malware - वाईट software\n3. Password चोरी - weak password मुळे\n4. Fake websites\n\nसुरक्षित राहण्यासाठी:\n• Strong password (लांब + unusual)\n• Two-factor authentication (2FA)\n• suspicious link क्लिक करू नका\n• software अपडेट ठेवा\n• अज्ञात sender चे attachments उघडू नका",
                code: `# Strong Password टिप्स:
- किमान 12 characters
- uppercase + lowercase
- numbers + symbols
- शब्द/नावे नको
- प्रत्येक account ला वेगळा password

# उदा.
कमकुवत: vilas123
मजबूत: V1las@2024!xZ9

# 2FA वापरा:
- SMS/App-based OTP
- Authentication apps (Google Authenticator)`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "Phishing म्हणजे काय?",
                options: [
                    "मासे पकडणे",
                    "बनावट message द्वारे माहिती चोरणे",
                    "मझेदार खेळ",
                    "नवीन website",
                ],
                correct: 1,
            },
            {
                question: "Strong password मध्ये काय असावे?",
                options: [
                    "फक्त नाव",
                    "लहान आणि सोपा",
                    "लांब + symbols + numbers",
                    "फक्त numbers",
                ],
                correct: 2,
            },
        ],
        related: ["cyber-password", "computer-basics", "digital-security"],
        next: "cyber-password",
    },
    {
        slug: "cyber-password",
        categoryId: "cyber",
        title: "Password Security",
        marathiTitle: "पासवर्ड सुरक्षा",
        level: "intermediate",
        minutes: 15,
        summary: "मजबूत पासवर्ड कसा बनवायचा आणि तो सुरक्षित कसा ठेवायचा.",
        sections: [
            {
                title: "पासवर्ड सुरक्षा टिप्स",
                content: "पासवर्ड हा तुमच्या डिजिटल जीवनाचा दरवाजा आहे.\n\nसुरक्षित पासवर्ड बनवण्यासाठी:\n• लांब असा (14+ characters)\n• शब्दांच्या जागी passphrase वापरा (उदा. 'सोलरभवनपोहे'\n• numbers आणि symbols मिसळा\n\nPassword manager वापरा:\n• आपोआप strong passwords तयार करतो\n• सर्व passwords एका ठिकाणी security सह\n• autofill करतो\n\n2FA (2-फॅक्टर ऑथेंटिकेशन) चालू करा",
            },
        ],
        quiz: [
            {
                question: "Password मध्ये काय असणे आवश्यक?",
                options: [
                    "किमान 12 characters",
                    "फक्त 4 characters",
                    "केवळ नाव",
                    "केवळ numbers",
                ],
                correct: 0,
            },
            {
                question: "Password कुठे सुरक्षित ठेवता येतो?",
                options: [
                    "क्षुत-paper वर",
                    "Password manager मध्ये",
                    "मेल मध्ये",
                    "चिठीवर",
                ],
                correct: 1,
            },
        ],
        related: ["cyber-basics", "digital-security", "computer-basics"],
        prev: "cyber-basics",
    },
    // === DIGITAL ===
    {
        slug: "digital-security",
        categoryId: "digital",
        title: "Digital Security Tips",
        marathiTitle: "डिजिटल जगात सुरक्षित रहा",
        level: "beginner",
        minutes: 15,
        summary: "इंटरनेट, social media आणि online transactions वर सुरक्षित राहण्याच्या टिप्स.",
        sections: [
            {
                title: "ऑनलाइन सुरक्षित राहणे",
                content: "आजच्या डिजिटल जगात ऑनलाइन सुरक्षा अतिशय महत्त्वाची असते.\n\nटिप्स:\n• सोशल मीडिया वर कमी माहिती शेअर करा\n• सार्वजनिक Wi-Fi वर sensitive काम करू नका\n• Payments फक्त विश्वासू sites वर करा\n• ओळखीच्या व्यक्तींकडूनही आलेली संशयास्पद लिंक क्लिक नका\n• Software अपडेट करा\n• Antivirus वापरा",
                code: `# ऑनलाइन सुरक्षा चेकलिस्ट:
[ ] Strong password
[ ] 2FA सुरू
[ ] Software अपडेट
[ ] Antivirus
[ ] Suspicious links पासून दूर
[ ] Social media privacy settings`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "सार्वजनिक Wi-Fi वर काय करू नये?",
                options: [
                    "वेब ब्राउझ",
                    "बँकिंग/payment",
                    "गाणे ऐकणे",
                    "फोटो पाहणे",
                ],
                correct: 1,
            },
        ],
        related: ["cyber-basics", "digital-skills", "computer-basics"],
        next: "digital-skills",
    },
    {
        slug: "digital-skills",
        categoryId: "digital",
        title: "Essential Digital Skills",
        marathiTitle: "आवश्यक डिजिटल कौशल्ये",
        level: "beginner",
        minutes: 12,
        summary: "आधुनिक जगात प्रत्येकाला लागणारी डिजिटल कौशल्ये.",
        sections: [
            {
                title: "डिजिटल कौशल्ये",
                content: "आधुनिक जगात डिजिटल कौशल्ये खूप महत्त्वाची आहेत.\n\nमूलभूत कौशल्ये:\n\n1. संगणक ऑपरेशन\n2. इंटरनेट research\n3. ईमेल वापरणे\n4. दस्तऐवज तयार करणे (Word/Google Docs)\n5. स्प्रेडशीट (Excel/Google Sheets)\n6. सुरक्षित ऑनलाइन व्यवहार\n7. व्हिडिओ कॉल\n8. IoT - घरातील स्मार्ट उपकरणे",
                code: `// डिजिटल कौशल्य उदाहरण: Excel/Google Sheets
// साधी गणना

  A        B         C
1  माल      किंमत     मात्रा
2  चहा     50        2
3  कॉफी    80        1

// एकूण किंमत:
= B2*C2 + B3*C3
// = 50*2 + 80*1
// = 180`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "खालीलपैकी कोणते आवश्यक डिजिटल कौशल्य आहे?",
                options: [
                    "दस्तऐवज तयार करणे",
                    "फक्त गेम खेळणे",
                    "फक्त WhatsApp",
                    "काहीही नाही",
                ],
                correct: 0,
            },
        ],
        related: ["digital-security", "computer-basics", "freelancing-basics"],
        prev: "digital-security",
    },
    // === FREELANCING ===
    {
        slug: "freelancing-basics",
        categoryId: "freelancing",
        title: "Freelancing Basics",
        marathiTitle: "फ्रीलान्सिंग म्हणजे काय?",
        level: "beginner",
        minutes: 20,
        summary: "फ्रीलान्सिंगमध्ये कसे सुरुवात करायची आणि पैसे कसे मिळवायचे.",
        sections: [
            {
                title: "फ्रीलान्सिंग म्हणजे काय?",
                content: "फ्रीलान्सिंग म्हणजे नोकरीत न राहता स्वतंत्रपणे काम करून पैसे मिळवणे. तुम्ही तुमच्या स्किल्स विकता.\n\nलोकप्रिय क्षेत्रे:\n• Web development\n• ग्राफिक डिझाइन\n• लेखन / translation\n• डिजिटल मार्केटिंग\n• व्हिडिओ एडिटिंग\n\nप्लॅटफॉर्म्स:\n• Fiverr\n• Upwork\n• Freelancer.com\n• इंडियन: WorkIndia, Truelancer",
                code: `# फ्रीलान्सिंग सुरुवात चेकलिस्ट:
1. एक कौशल्य शिका (उदा. web dev)
2. Portfolio (कामाचे उदाहरण) तयार करा
3. Platforms वर account बनवा
4. लहान कामांपासून सुरु करा
5. ग्राहकांशी चांगले संबंध ठेवा
6. हळूहळू rates वाढवा

# सुरुवातीच्या टिप्स:
- कमी price वर सुरु करा (reviews साठी)
- वेळेवर काम पूर्ण करा
- communication चांगली ठेवा`,
                codeLanguage: "text",
            },
        ],
        quiz: [
            {
                question: "फ्रीलान्सिंग म्हणजे काय?",
                options: [
                    "नोकरी करणे",
                    "स्वतंत्रपणे काम करून पैसे मिळवणे",
                    "व्यापार करणे",
                    "शेती करणे",
                ],
                correct: 1,
            },
            {
                question: "खालीलपैकी कोणते फ्रीलान्सिंग प्लॅटफॉर्म आहे?",
                options: ["Fiverr", "Instagram", "Google", "YouTube"],
                correct: 0,
            },
        ],
        related: ["digital-skills", "web-development-career", "computer-basics"],
        next: "freelancing-skills",
    },
    {
        slug: "freelancing-skills",
        categoryId: "freelancing",
        title: "Freelancing Skills",
        marathiTitle: "फ्रीलान्सिंगमध्ये कोणती कौशल्ये शिकावीत?",
        level: "intermediate",
        minutes: 15,
        summary: "फ्रीलान्सिंगमध्ये मागणी असलेली कौशल्ये आणि शिकण्याचा मार्ग.",
        sections: [
            {
                title: "मागणी असलेली कौशल्ये",
                content: "फ्रीलान्सिंग मार्केटमध्ये जास्त मागणी असलेली कौशल्ये:\n\n1. Web Development (HTML/CSS/JS/React)\n2. Python Programming\n3. ग्राफिक डिझाइन (Photoshop/Figma)\n4. डिजिटल मार्केटिंग (SEO, Ads)\n5. Content Writing\n6. Video Editing\n7. Social Media Management\n\nआपण Marathi Learn Hub वर सुरुवातीचे knowledge मोफत मिळवू शकता.\n\nकौशल्य शिकण्यासाठी खूप संयम आणि practice लागते.",
            },
        ],
        quiz: [
            {
                question: "खालीलपैकी कोणते मागणी असलेले फ्रीलान्सिंग कौशल्य आहे?",
                options: [
                    "वेब डेव्हलपमेंट",
                    "फक्त टाइपिंग",
                    "फेसबुक सर्फिंग",
                    "कोणतेही नाही",
                ],
                correct: 0,
            },
        ],
        related: ["freelancing-basics", "web-development-career", "digital-skills"],
        prev: "freelancing-basics",
    },
    // === ANDROID ===
    {
        slug: "android-basics",
        categoryId: "android",
        title: "Android Basics",
        marathiTitle: "Android म्हणजे काय?",
        level: "beginner",
        minutes: 12,
        summary: "Android ही Google ची mobile ऑपरेटिंग सिस्टम आहे.",
        sections: [
            {
                title: "Android म्हणजे काय?",
                content: "Android ही Google ने विकसित केलेली open-source mobile ऑपरेटिंग सिस्टम आहे. जगातील सर्वात जास्त वापरली जाणारी mobile OS.\n\nAndroid वर अॅप्स Java, Kotlin आणि आता दुसऱ्या भाषांमध्येही बनवता येतात.\n\nAndroid च्या मागे Linux kernel वापरलेले आहे.\n\nअॅप्स बनवण्यासाठी:\n• Android Studio (official IDE)\n• Kotlin / Java प्रोग्रामिंग",
            },
        ],
        quiz: [
            {
                question: "Android OS कोणी विकसित केली?",
                options: ["Apple", "Google", "Microsoft", "Samsung"],
                correct: 1,
            },
            {
                question: "Android वर अॅप्स कोणत्या भाषेत लिहिले जातात?",
                options: ["Swift", "Kotlin/Java", "C#", "Ruby"],
                correct: 1,
            },
        ],
        related: ["computer-basics", "termux-basics", "android-tips"],
        next: "android-tips",
    },
    {
        slug: "android-tips",
        categoryId: "android",
        title: "Android Tips & Tricks",
        marathiTitle: "Android उपयुक्त टिप्स",
        level: "beginner",
        minutes: 10,
        summary: "Android फोनवरून जास्तीत जास्त फायदा घेण्यासाठी टिप्स.",
        sections: [
            {
                title: "उपयुक्त टिप्स",
                content: "Android फोन व्यवस्थित ठेवण्यासाठी टिप्स:\n\n• Battery optimize: अंगभूत battery saver\n• Developer options उघडणे: Settings > About > Build number 7 वेळा टॅप\n• Storage clear करणे\n• Apps अद्ययावत ठेवणे\n• Security: Screen lock, Find My Device\n• Termux install करून Linux commands वापरणे",
            },
        ],
        quiz: [
            {
                question: "Android मध्ये developer options कसे उघडतात?",
                options: [
                    "Build number 7 वेळा टॅप करून",
                    "App install करून",
                    "फोन रिस्टार्ट करून",
                    "नाही उघडता येत",
                ],
                correct: 0,
            },
        ],
        related: ["android-basics", "termux-basics", "computer-basics"],
        prev: "android-basics",
    },
    // === GENERAL ===
    {
        slug: "general-knowledge",
        categoryId: "general",
        title: "General Knowledge",
        marathiTitle: "उपयुक्त सामान्य ज्ञान",
        level: "beginner",
        minutes: 12,
        summary: "रोजच्या जीवनात उपयुक्त सामान्य ज्ञान.",
        sections: [
            {
                title: "सामान्य ज्ञान",
                content: "काही उपयुक्त सामान्य ज्ञान:\n\nविज्ञान:\n• पाण्याचा उत्कलनांक 100°C\n• प्रकाशाचा वेग 3 × 10^8 m/s\n• सर्वात जवळचा तारा - सूर्य\n\nभूगोल:\n• सर्वात उंच शिखर - माउंट एव्हरेस्ट (8,848m)\n• भारताची राजधानी - नवी दिल्ली\n\nसंगणक:\n• पहिला computer - ENIAC (1946)\n• binary system - 0 आणि 1\n• इंटरनेट - 1969 पासून",
            },
        ],
        quiz: [
            {
                question: "प्रकाशाचा वेग किती?",
                options: [
                    "3 × 10^8 m/s",
                    "3 × 10^6 m/s",
                    "3 × 10^10 m/s",
                    "300 m/s",
                ],
                correct: 0,
            },
            {
                question: "पहिला electronic computer कोणता?",
                options: ["IBM", "ENIAC", "Apple", "Dell"],
                correct: 1,
            },
        ],
        related: ["computer-basics", "general-science", "computer-hardware"],
        next: "general-science",
    },
    {
        slug: "general-science",
        categoryId: "general",
        title: "Science Facts",
        marathiTitle: "विज्ञानातील मजेशीर तथ्य",
        level: "beginner",
        minutes: 10,
        summary: "विज्ञानातील काही मजेशीर आणि खरे तथ्य.",
        sections: [
            {
                title: "विज्ञान तथ्ये",
                content: "काही मजेशीर विज्ञान तथ्य:\n\n• मध म्हणजे कधीही खराब होत नाही\n• ऑक्टोपसला तीन हृदये असतात\n• मानवी शरीरात 37 ट्रिलियन cells\n• सूर्याला पृथ्वीवर पोहोचण्यासाठी प्रकाश 8 मिनिटे 20 सेकंद लागतात\n• पृथ्वीवरील सर्वात मोठा जीव - विशाल वृक्ष\n• डॉल्फिनला झोपताना एक डोळा उघडा असतो",
            },
        ],
        quiz: [
            {
                question: "सूर्याचा प्रकाश पृथ्वीवर येण्यास किती वेळ लागतो?",
                options: [
                    "8 मिनिटे 20 सेकंद",
                    "5 मिनिटे",
                    "1 तास",
                    "ताबडतोब",
                ],
                correct: 0,
            },
        ],
        related: ["general-knowledge", "computer-basics", "digital-skills"],
        prev: "general-knowledge",
    },
];
function getTutorial(slug) {
    return exports.tutorials.find((t) => t.slug === slug);
}
function getTutorialsByCategory(categoryId) {
    return exports.tutorials.filter((t) => t.categoryId === categoryId);
}
function searchTutorials(query) {
    const q = query.toLowerCase().trim();
    if (!q)
        return exports.tutorials;
    return exports.tutorials.filter((t) => t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.marathiTitle.toLowerCase().includes(q) ||
        t.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q)));
}
