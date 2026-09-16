export interface TopicSection {
  title: string;
  content: string;
  code?: string;
  codeLanguage?: string;
  output?: string;
  input?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

export interface CodingChallenge {
  prompt: string;
  starterCode?: string;
  expectedOutput?: string;
}

export interface Tutorial {
  slug: string;
  categoryId: string;
  title: string;
  marathiTitle: string;
  level: "beginner" | "intermediate" | "advanced";
  minutes: number;
  summary: string;
  sections: TopicSection[];
  quiz: QuizQuestion[];
  related: string[];
  next?: string;
  prev?: string;
  levelLabel?: string;
  practiceQuestions?: string[];
  interviewQuestions?: string[];
  challenge?: CodingChallenge;
}

import { pythonLevel1 } from "./tutorials/python-level1";
import { pythonLevel2 } from "./tutorials/python-level2";
import { pythonLevel3 } from "./tutorials/python-level3";
import { pythonLevel4 } from "./tutorials/python-level4";
import { pythonLevel5 } from "./tutorials/python-level5";
import { pythonLevel6 } from "./tutorials/python-level6";
import { pythonLevel7 } from "./tutorials/python-level7";
import { pythonLevel8 } from "./tutorials/python-level8";
import { htmlLevel1 } from "./tutorials/html-level1";
import { htmlLevel2 } from "./tutorials/html-level2";
import { htmlLevel3 } from "./tutorials/html-level3";
import { htmlLevel4 } from "./tutorials/html-level4";
import { htmlLevel5 } from "./tutorials/html-level5";
import { cssLevel1 } from "./tutorials/css-level1";
import { cssLevel2 } from "./tutorials/css-level2";
import { cssLevel3 } from "./tutorials/css-level3";
import { cssLevel4 } from "./tutorials/css-level4";
import { cssLevel5 } from "./tutorials/css-level5";
import { cssLevel6 } from "./tutorials/css-level6";
import { cssLevel7 } from "./tutorials/css-level7";
import { cssLevel8 } from "./tutorials/css-level8";
import { cssLevel9 } from "./tutorials/css-level9";
import { cssLevel10 } from "./tutorials/css-level10";
import { cssLevel11 } from "./tutorials/css-level11";
import { cssLevel12 } from "./tutorials/css-level12";
import { cssLevel13 } from "./tutorials/css-level13";
import { cssLevel14 } from "./tutorials/css-level14";
import { cssLevel15 } from "./tutorials/css-level15";
import { computerFoundation } from "./tutorials/computer-foundation";
import { computerLevel1 } from "./tutorials/computer-level1";
import { androidLevel1 } from "./tutorials/android-level1";
import { aiLevel1 } from "./tutorials/ai-level1";
import { aiLevel2 } from "./tutorials/ai-level2";
import { electronicsLevel1 } from "./tutorials/electronics-level1";
import { electronicsLevel2 } from "./tutorials/electronics-level2";
import { electronicsLevel3 } from "./tutorials/electronics-level3";
import { electronicsLevel4 } from "./tutorials/electronics-level4";
import { electronicsLevel5 } from "./tutorials/electronics-level5";
import { jsLevel1 } from "./tutorials/js-level1";
import { jsLevel2 } from "./tutorials/js-level2";
import { jsLevel3 } from "./tutorials/js-level3";
import { jsLevel4 } from "./tutorials/js-level4";
import { jsLevel5 } from "./tutorials/js-level5";
import { jsLevel6 } from "./tutorials/js-level6";
import { jsLevel7 } from "./tutorials/js-level7";
import { jsLevel8 } from "./tutorials/js-level8";
export const tutorials: Tutorial[] = [
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
    slug: "html-forms-2",
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
    slug: "html-links-2",
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
}`,
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
}`,
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
  ...pythonLevel1,
  ...pythonLevel2,
  ...pythonLevel3,
  ...pythonLevel4,
  ...pythonLevel5,
  ...pythonLevel6,
  ...pythonLevel7,
  ...pythonLevel8,
  ...htmlLevel1,
  ...htmlLevel2,
  ...htmlLevel3,
  ...htmlLevel4,
  ...htmlLevel5,
  ...cssLevel1,
  ...cssLevel2,
  ...cssLevel3,
  ...cssLevel4,
  ...cssLevel5,
  ...cssLevel6,
  ...cssLevel7,
  ...cssLevel8,
  ...cssLevel9,
  ...cssLevel10,
  ...cssLevel11,
  ...cssLevel12,
  ...cssLevel13,
  ...cssLevel14,
  ...cssLevel15,

  // --- JAVASCRIPT ---
  ...jsLevel1,
  ...jsLevel2,
  ...jsLevel3,
  ...jsLevel4,
  ...jsLevel5,
  ...jsLevel6,
  ...jsLevel7,
  ...jsLevel8,

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
        content: "pkg install python\n\nआता फाइल बनवा:\nnano or vi or nano code editor वापरून .py file बनवा\n\nमग python filename.py ने run करा.\n\nModules install करण्यासाठी:\npip install <package>",
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

  // === COMPUTER · FOUNDATION ===
  ...computerFoundation,

  // === COMPUTER · LEVEL 1 ===
  ...computerLevel1,

  // === ANDROID · APP INVENTOR ===
  ...androidLevel1,

  // === AI · LEVEL 1 ===
  ...aiLevel1,

  // === AI · LEVEL 2 ===
  ...aiLevel2,

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
      {
        title: "AI कुठे वापरला जातो — रोजची उदाहरणे",
        content: "AI आता केवळ प्रयोगशाळेत नाही — तो रोजच्या जीवनात सगळीकडे आहे. अनेकदा तो आपल्या लक्षातही येत नाही:\n\n• Google Search — आपण टंपलेला सगळा मजकूर वाचून बरोबर निकाल देतो.\n• YouTube / Instagram — आपण काय पाहतो त्यावरून पुढील video सुचवणे.\n• Maps — traffic साठी रस्ता बदलण्याचा अंदाज.\n• फोनचा auto-correct — आपल्या शब्दाचा अंदाज घेऊन पुढचा शब्द सुचवणे.\n• Spam filter — email मधील junk message ओळखणे.\n• UPI / बँक — फसवणूकीचा व्यवहार शोधणे.\n\nही सगळी उदाहरणे मागे data वर शिकलेला एक अंदाज (prediction) असतो. AI म्हणजे जादूगार नाही — तो अधिक अचूक अंदाज लावणारा गणितज्ञ आहे.\n\nआजच्या कोर्समध्ये आपण हेच करणार: प्रत्येक वापर मागची साधी कल्पना उलगडत जाणार.",
      },
      {
        title: "नियम प्रोग्राम vs AI — मुख्य फरक",
        content: "संगणक सुरुवातीपासून केवळ नियम पाळतो. आपण त्याला सांगतो — जर असे असेल तर हे कर. यालाच programming म्हणतात.\n\nउदाहरण — calculator:\n\t• input त्यांची बेरीज करून output देतो.\n\t• नियम स्पष्ट: a + b = c.\n\nपण काही कामांसाठी नियम लिहिणेच अशक्य असते:\n\t• हाताने लिहिलेला अंक ओळखण्याचे नियम कोणीही सांगू शकत नाही.\n\t• भाषेतील व्यंग्य (sarcasm) नियमांनी मांडता येत नाही.\n\nइथेच AI वेगळा — नियम आपण लिहित नाही, तर उदाहरणे देतो:\n\t1. लाखो अंकांचे फोटो (data).\n\t2. प्रत्येक फोटोवर खरे उत्तर (label).\n\t3. संगणक स्वतः नियम शोधतो.\n\nथोडक्यात: programming मध्ये आपण नियम लिहितो; AI मध्ये data वरून नियम आपोआप तयार होतात. ही सर्वात महत्त्वाची ओळख आहे.",
      },
      {
        title: "Narrow AI vs General AI",
        content: "AI चे भविष्य चर्चा करताना आपल्याला दोन संज्ञा ऐकू येतात:\n\nNarrow AI (Weak AI) — एका विशिष्ट कामात दक्ष:\n\t• फोटोतला चेहरा ओळखणे.\n\t• स्पॅम वेगळे करणे.\n\t• शतरंजात माणसाला हरवणे.\n\nहे एक काम अप्रतिम करते, पण त्याच क्षमता दुसऱ्या कामात वापरता येत नाहीत. आजचे बहुतेक सगळे AI narrow आहेत. आजचा फोन चेहरा ओळखतो, पण त्याचा face-unlock वापरून व्याकरण शिकवणारा tutor बनत नाही.\n\nGeneral AI (Strong AI) — माणसासारखे कोणतेही काम करू शकणारा:\n\t• शिकणे, समजणे, सर्जनशील राहणे.\n\t• एकाच बुद्धीतून वेगवेगळ्या कामांत लागणे.\n\nअसा AI आज अस्तित्वात नाही; तो संशोधनाचा दीर्घकालीन ध्येयमार्ग आहे. म्हणून चित्रपटांतील 'AI चा ताबा' या कल्पना सध्या तरी प्रत्यक्षात नाही — आजचे AI केवळ नियमीत कामांत उत्तम आहेत.",
      },
      {
        title: "AI कसा शिकतो — मुख्य तीन मार्ग",
        content: "AI शिकण्याचे एकच मूलभूत तत्त्व असते — उदाहरणांमधून नमुना शोधणे. याची तीन मुख्य शैली:\n\n१. पाठ्यपुस्तकी (Supervised):\n\t• प्रत्येक उदाहरणाबरोबर खरे उत्तर असते.\n\t• उदा. फोटो + 'मांजर' असे लेबल.\n\t• संगणक उत्तराचा अंदाज लावून, चुकीवरून सुधारतो.\n\n२. गट शोधणे (Unsupervised):\n\t• उत्तर नसते, फक्त उदाहरणे असतात.\n\t• संगणक स्वतःच सारखे नमुने वेगळे करतो.\n\t• उदा. ग्राहकांचे गट शोधून marketing strategy.\n\n३. प्रयत्न-अपयश (Reinforcement):\n\t• कृतीचे फळ मिळते; चांगली कृती मजबूत होते.\n\t• उदा. robot ला चालायला शिकवणे — पडल्यावर शिक्षा व यशावर बक्षीस.\n\nया तिन्ही मार्गांवर पुढील पाठांत सविस्तर प्रकाश पडेल. आतासाठी फक्त ओळख — AI मध्ये 'शिकणे' हे data वरून नमुना शोधणेच आहे.",
      },
      {
        title: "AI ची प्रमुख तंत्रे — ML, DL, NLP, Vision",
        content: "AI चे अनेक उपक्षेत्र आहेत; चार प्रमुख ती नक्की समजून घ्या:\n\nMachine Learning (ML):\n\t• Data वरून नियम शिकणाऱ्या तंत्रांचा संच्य.\n\t• या कोर्सचा पाया.\n\nDeep Learning (DL):\n\t• ML चा एक भाग — मानवी मेंदूच्या neuron प्रमाणे layers वापरणे.\n\t• मोठे data व मोठ्या संगणकावर अचूक.\n\t• फोटो, आवाज, भाषा यात दबदबा.\n\nNatural Language Processing (NLP):\n\t• भाषा समजून घेणे — translator, chatbot, writer असिस्टंट.\n\nComputer Vision (CV):\n\t• चित्रे/फोटो समजून घेणे — face unlock, self-driving car, फोटो search.\n\nसोपी ओळख: ChatGPT हा NLP+DL चा वापर; बँकेतला चेहरा ओळख CV+DL चा. ही उपक्षेत्रे पुढील पाठांमध्ये एकेक उलगडत जातील.",
      },
      {
        title: "AI चे फायदे — व्यक्ती आणि समाज",
        content: "AI चा योग्य वापर अनेक कामे सोपी करतो:\n\n• वेळ वाचवणे — दस्तऐवज सारांश, मसुदा, नोंदी.\n• दुर्गम कामे — डॉक्टरला X-ray विश्लेषणात मदत.\n• भाषा — झटपट भाषांतर, शिक्षण सर्वांसाठी.\n• व्यवसाय — फसवणूकी शोधणे, वेअरहाऊस व्यवस्थापन.\n• शारीरिक धोका टाळणे — बॉम्ब शोधणारा रोबोट, धोकादायक ठिकाणचे संशोधन.\n\nपण फायदा योग्य data व योग्य वापरावर अवलंबून. AI हेच साधन — ते शिक्षक बनू शकते किंवा दिशाभूल करणारेही. चांगला निकाल मिळवण्याची जबाबदारी आपलीच.\n\nमराठीत विचार: AI मुळे शाळेतील विद्यार्थ्याला स्वतःहून गणित सराव मिळू शकतो; अनुवादामुळे मराठी साहित्य जगभर पोहोचू शकते. या कोर्सचा उद्देश असाच सामर्थ्यवर्धक वापर शिकवणे आहे.",
      },
      {
        title: "AI च्या जोखमी — सावधान",
        content: "प्रत्येक तंत्रज्ञानाच्या सोबत जोखमी असतात; AI लाही:\n\n• Bias — data गलिच्छ असल्यास निर्णय अन्यायकारक (उदा. एका गटाला नेहमी नाकारणे).\n• Privacy — एखाद्याची छायाचित्रे, सवयी व चुका data मध्ये येतात.\n• Fake content — बनावट फोटो/आवाज/बातम्या विश्वास लायक वाटतात.\n• नोकरी — काही नोकर्या बदलतील; स्किल्स अपडेट ठेवाव्या लागतील.\n• Over-reliance — AI वर अंध विश्वास; माणसाचा निर्णय कमी.\n\nयाचा अर्थ AI टाळावा असा नाही — तर तो जाणूनबुजून वापरावा.\n\nमुख्य सुरक्षा नियम: AI कडून मिळणारी माहिती तपासा, वैयक्तिक गुप्त माहिती शेअर करू नका, आणि महत्त्वाच्या निर्णयांसाठी नेहमी माणसाची पडताळणी घ्या. हे नियम ai-ethics पाठात सविस्तर येतील.",
      },
      {
        title: "या कोर्सचा नकाशा",
        content: "AI शिकण्यामध्ये दिशा महत्त्वाची. या शृंखलेची रचना अशी आहे:\n\n१. AI ओळख (हे पाठ) — AI काय आहे, कुठे वापरतात.\n२. Machine Learning — data वरून शिकण्याची मुळे.\n३. Python — AI ची भाषा व libraries.\n४. Data — features, labels, quality (ai-data).\n५. गणित — सरासरी, error, gradient (ai-math-ai).\n६. Neural networks व Deep learning (ai-neural-networks).\n७. Reinforcement learning (ai-reinforcement).\n८. ChatGPT / LLM — tokens, context (ai-chatgpt).\n९. Prompts — ChatGPT ला चांगले प्रश्न (ai-prompts).\n१०. NLP — भाषेचे तंत्र (ai-nlp).\n११. दोन small प्रकल्प — Spam detector व Chatbot (ai-project-*).\n\nशिकण्याची पद्धत: प्रत्येक पाठ वाचा, अंतर्गत code सोबत करा, शेवटी प्रश्न स्वतः सोडवा. गणित म्हणजे घाबरु नका — आपण फक्त बेरीज-वजाबाकीच्या पातळीवर जाणार.",
      },
      {
        title: "आजचा सारांश",
        content: "आजचे प्रमुख धडे:\n\n• AI म्हणजे संगणकाला data वरून शिकवणे — नियम आपण लिहित नाही, तो उदाहरणांवरून नियम शोधतो.\n• आजचे सगळे AI narrow आहेत — एका कामात उत्तम, पण सर्वशक्तिमान नाही.\n• शिकण्याचे तीन मार्ग: Supervised, Unsupervised, Reinforcement.\n• उपक्षेत्रे: ML, DL, NLP, Computer Vision.\n• फायदा आणि जोखीम — योग्य data आणि जबाबदार वापर आवश्यक.\n• कोर्सचा मार्ग: ओळख → ML → Python → Data → गणित → Networks → नंतर प्रकल्प.\n\nपुढील पाठात Machine Learning — AI चे हृदय — सोप्या उदाहरणांसह समजून घेणार आहोत.\n\nआजचे प्रॅक्टिस:\n\t०१. दिवसभरात तुम्ही वापरलेले ३ AI साधने लिहा (वर प्रमाणे).\n\t०२. प्रत्येक साधन narrow AI आहे का — का — ते कारण सांगा.\n\t०३. 'AI मुळे नोकरी जाईल' या विधानावर तुमचे मत ४ ओळीत लिहा.",
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
    related: ["ai-machine-learning", "python-basics"],
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
      {
        title: "Learning म्हणजे नेमकं काय — संगणकाच्या नजरेतून",
        content: "माणूस शिकतो म्हणजे अनुभवातून वागण्याची पद्धत बदलते. संगणकाचे 'शिकणे' म्हणजे data वरून अंदाज प्रक्रियेचे नियम (weights/parameters) असे बदलतात की अंदाज चांगले व्हायला लागतात.\n\nउदाहरण घेऊ — रेषा सरकवणे:\n\t• १० उदाहरणे: घराचे क्षेत्रफळ → किंमत.\n\t• मॉडेल एक रेषा: किंमत = weight × area + bias.\n\t• सुरुवातीला weight यादृच्छिक (random) — अंदाज चुकीचे.\n\t• प्रत्येक उदाहरणावर चुक प्रमाणे weight थोडा सुधारतो.\n\nशिकण्याचा चक्र (training loop):\n\t१. एक उदाहरण घ्या.      २. अंदाज लावा.\n\t३. चुक मोजा.            ४. चुक कमी करेल अशा दिशेने weight बदला.\n\t५. पुढील उदाहरण घ्या — पुन्हा १ पासून.\n\nअनेक फेऱ्यांनंतर weight असे जुळतो की चुक कमीत कमी. या प्रक्रियेला प्रशिक्षण (training) म्हणतात. शेवटी नवीन घरासाठी अंदाज योग्य येतो.",
      },
      {
        title: "features आणि labels — शिकण्याची जोडी",
        content: "ML मध्ये प्रत्येक उदाहरण दोन भागांचे असते:\n\nFeatures (माहिती) — ज्यावरून अंदाज लावायचा:\n\t• संख्यात्मक — क्षेत्रफळ, किंमत, दिवस संख्या.\n\t• शब्द — शहराचे नाव, श्रेणी.\n\t• प्रतिमा — प्रत्येक pixel ची brightness.\n\nLabels (उत्तर) — खरं काय, ते मॉडेलला शिकवायचे:\n\t• घराची खरी विक्री किंमत.\n\t• फोटो मांजर की कुत्रा.\n\t• ईमेल spam की नाही.\n\nSupervised learning चे सूत्र: features + label → मॉडेल.\nज्या उदाहरणांवर label नसेल, त्या उदाहरणांवर मॉडेलला काही शिकवता येत नाही. म्हणूनच labeling — माणसाने उत्तरे जोडणे — ही वेळखाऊ पण आवश्यक मेहनत असते.\n\nलक्षात ठेवा: प्रत्येक algorithm मध्ये features व label चा मेळ बरोबर असावा लागतो; अन्यथा शिकणे दिशाभूल होते.",
      },
      {
        title: "Supervised learning — सखोल दृष्टी",
        content: "सगळ्यांत सामान्य आणि उपयोगी पद्धत. त्यात दोन प्रकार:\n\nRegression (अंदाज — संख्या):\n\t• उत्तर सतत संख्या असते.\n\t• उदा. घराची किंमत, थंडीची पातळी, उत्पादन विक्री.\n\t• चुक मोजली जाते magnitude ने (अंदाज किती दूर गेला).\n\nClassification (वर्गीकरण — निवड):\n\t• उत्तर एका मर्यादित यादीतला असते.\n\t• उदा. मांजर/कुत्रा, spam/non-spam, रोगी/निरोगी.\n\t• चुक मोजली जाते चुकीच्या वर्गावरून.\n\nदोन्हीमध्ये काम करणारा data: [features → पाठ/उत्तर]. मॉडेलला शिकताना 'या features मध्ये हे उत्तर होते' प्रमाणे शिकवतात.\n\nसोपी ओळख: regression 'किती?' सांगतो, classification 'कोणता?' सांगतो. दोन्ही एकत्रही येतात — उदा. disease prediction मध्ये आधी वर्ग (रोग/नाही) नंतर शक्यता (किती % धोका).",
      },
      {
        title: "Unsupervised learning — गट शोधणे",
        content: "कधीकधी आपल्याकडे फक्त features असतात — उत्तर नसते. तरीही माहिती वेगळी मांडता येते:\n\nClustering (गट बनवणे):\n\t• सारख्या features चा गट शोधणे.\n\t• उदा. ग्राहकांचे गट — कोण जास्त खरेदी करतो, कोण केवळ सेल वर.\n\t• उदा. बातम्या — स्वतः विषयांचे गट तयार होतात.\n\nDimensionality reduction (मोठा data लहान करणे):\n\t• हजारो features मधून गरजेचे २-३ सोपे features बनवणे.\n\t• उदा. चेहऱ्याचा data १०००० pixel वरून १०० अवयवांत कमी करणे.\n\nहे कशासाठी?\n\t• data समजणे — आधी गट माहीत झाले, मग प्रत्येक गटाला नाव देणे.\n\t• गलिच्छ data शोधणे — असामान्य नमुने वेगळे दिसतात.\n\nहे supervised सारखे अचूक नाही, पण जिथे उत्तर नाही तिथे सुरुवात करण्याचा एकमेव मार्ग.",
      },
      {
        title: "Evaluating — चांगले कसे तपासतात",
        content: "मॉडेल बनवले की प्रश्न येतो: किती चांगले? खरी परीक्षा म्हणजे नवीन (test) data वर निकाल.\n\nमुख्य मोजमापे:\n\t• Accuracy — एकूण उदाहरणांपैकी किती बरोबर?\n\t• Precision / Recall — दुर्मिळ गटासाठी (रोग, फसवणूक) महत्त्वाचे.\n\t• Confusion matrix — कोणत्या गटात चुक होते, ते पाहणे.\n\t• Error (regression) — अंदाज सरासरी किती दूर.\n\nटोकाची परिस्थिती:\n\t• 100 मध्ये 99 'निरोगी', 1 'रोगी'. फक्त 'निरोगी' सांगणारे मॉडेल 99% accuracy देते — पण निरुपयोगी. यामुळे accuracy एकटीच पुरेशी नाही.\n\t• precision/recall मुळेच असे मॉडेल पकडले जातात.\n\nमहत्त्वाचे: test data हा training मध्ये लगेच वापरू नये. मॉडेल वारंवार test data वरच तपासायचे झाल्यास तो तो data पाठ करतो आणि परीक्षा खोटी होते.",
      },
      {
        title: "Overfitting — पाठांतराची सापळा",
        content: "एक सामान्य अपयश — मॉडेल सरावातील उदाहरणे तंतोतंत पाठ करते, पण नवीन उदाहरणात चुकते.\n\nउदाहरण:\n\t• मुलाने ५ प्रश्नांची उत्तरे लक्षात ठेवली. परीक्षेत प्रश्न बदलले की गोंधळ.\n\t• मॉडेलने data मध्ये घोंगडी (noise) नेमके वाचले — तो नियम नव्हे, योगायोग शिकला.\n\nलक्षणे:\n\t• Training accuracy अगदी 100%.\n\t• Test accuracy वेगाने कमी.\n\nउपाय:\n\t• जास्त data — नवे नमुने.\n\t• मॉडेल सोपे — कमी layers/features.\n\t• regularization — खूप मोठ्या weight ला शिक्षा.\n\t• cross-validation — data वेगवेगळ्या कापांत तपासणी.\n\nविरुद्ध बाजू underfitting — मॉडेल खूप सोपे, training वरही निकृष्ट.\n\nयोग्य निवड: मॉडेल इतकं सोपं असावं की general बरोबर, आणि इतकं क्षमतावान की पुरेसं नियम शिकवेल. ही संतुलनाची कसरत आहे.",
      },
      {
        title: "एक छोटे hands-on उदाहरण — गणित सोबत",
        content: "कल्पना करा: ३ उदाहरणे आहेत — घराचे क्षेत्रफळ → किंमत:\n\t(100,10)  (200,15)  (300,20)\n\nसाधे रेषेचे मॉडेल: किंमत = w × क्षेत्रफळ + b.\nसुरुवातीला w=0, b=0:\n\t• १०० → 0, खरी 10, चुक = 10.\n\t• २०० → 0, खरी 15, चुक = 15.\n\nसुधारणा नियम: w थोडा वाढवा. 1-2 फेऱ्यांत:\n\t• w=0.05 → 100→5, चुक 5;   300→15, चुक 5.\n\nआणखी फेऱ्या केल्यास w≈0.06 बरोबर जवळ — तीनही अंदाज जवळ आले.\n\nहे साधे उदाहरण खरे शिकणे दाखवते:\n\t१. चुक मोजणे.\n\t२. चुक कमी करण्याच्या दिशेने नियम बदलणे.\n\t३. पुन्हा, पुन्हा — चुक कमी होते.\n\nनेहमी code न करता कागदावरच हा खेळ नक्की करा — मग कोणतेही algorithm (sklearn, TensorFlow) सोपे वाटेल. भविष्यातील ai-math-ai पाठात याचे gradient चे गणित देखील येईल.",
      },
      {
        title: "नैतिक गोष्टी — शिकतानाच शिकणे",
        content: "ML शिकण्याबरोबर त्याच्या जबाबदारीची ओळख देखील व्हायला हवी:\n\n• Bias — data मध्येच असमतोल असेल तर model पक्षपाती.\n\tउदा. कमी महिला असलेल्या भरती data वर प्रशिक्षण = महिलांना दुर्लक्ष.\n• Privacy — labels तयार करताना एखाद्याची खासगी माहिती जाणीवपूर्वक हाताळली जाते.\n• Medical — मॉडेलने सांगितलेले अंदाज नेहमी दोनदा तपासा (उदा. रोगाचा निदान आणि डॉक्टरचा सल्ला).\n• Explainability — स्पष्ट करता येईल असे मॉडेल निवडा; काळ्या पेटीसारखे मॉडेल महत्त्वाच्या निर्णयात धोकादायक.\n\nचांगले data + पारदर्शक मॉडेल + मानवी पडताळणी = विश्वासार्ह ML.\n\nया सर्व जबाबदाऱ्या ai-ethics पाठात विस्ताराने समजतील. शिकण्याची सुरुवातच नैतिक मनाने होणे महत्त्वाचे.",
      },
      {
        title: "आजचा सारांश",
        content: "Machine Learning — ठळक मुद्दे:\n\n• ML मध्ये आपण नियम लिहित नाही; data वरून मॉडेलला नियम शिकवतो.\n• शिकण्याचे चक्र: अंदाज → चुक → weight सुधारणा → पुन्हा.\n• तीन शैली: Supervised, Unsupervised, Reinforcement.\n• Supervised मध्ये दोन: regression (किती?) व classification (कोणता?).\n• Features + labels ही शिकण्याची जोडी.\n• evaluation — नवीन data वर तपासणे; accuracy ही एकमेव परीक्षा नाही.\n• Overfitting — पाठांतर; सोपे मॉडेल + जास्त data हा उपाय.\n• नैतिक ओळख — bias, privacy, मानवी पडताळणी.\n\nपुढील पाठात Python — AI ची भाषा — त्याच्या libraries सह पाहू.\n\nआजचे प्रॅक्टिस:\n\t०१. तुमच्या रोजच्या गोष्टीत एक regression आणि एक classification उदाहरण शोधा.\n\t०२. मॉडेलला 'पाठांतर' होणे कसे टाळाल ते २ उपाय लिहा.\n\t०३. स्वतः ३ उदाहरणांचे छोटे supervised प्रकरण तयार करा व weight कसा सुधारेल ते कागदावर दाखवा.",
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
      {
        title: "Python ची ओळख — पहिला दृष्टीक्षेप",
        content: "Python मध्ये code लिहिणे हे इंग्रजी वाचल्यासारखे वाटते. हेच त्याचे सर्वांत मोठे वैशिष्ट्य.\n\nसाधी तुलना (C++ विरुद्ध Python):\n\tC++:  int sum = 0; for (int i=0; i<5; i++) sum += i;\n\tPython: sum(range(5))\n\nAI data वर काम करताना वेगवान write व पुन्हा वापर महत्त्वाचा — Python तसे शक्य करते.\n\nयाशिवाय Python चे फायदे:\n\t• Open source — फुकट.\n\t• मोठा समुदाय — प्रश्न सोडवणारी लोक भरपूर.\n\t• Libraries — AI साठी तयार साहित्य.\n\nतुम्हाला programming नवीन असेल तर डरू नका — या कोर्समध्ये Python basics (python-basics पाठ) नंतर AI specific वापर शिकवला जातो.",
      },
      {
        title: "AI साठी महत्त्वाच्या libraries",
        content: "Python ची खरी ताकद त्याच्या libraries मध्ये आहे — AI साठी रेडीमेड साधने:\n\nNumPy:\n\t• संख्यात्मक गणित — arrays, matrix.\n\t• उदा. 1000 संख्यांवर गणित एका ओळीत.\n\nPandas:\n\t• Data table सांभाळणे — excel सारखा data.\n\t• उदा. CSV वाचणे, गट करणे, कमी असलेली मूल्ये हाताळणे.\n\nMatplotlib:\n\t• चित्रे/आलेख काढणे — data पाहणे.\n\nScikit-learn:\n\t• तयार ML algorithms — regression, classification, clustering.\n\t• Beginner मध्ये सर्वांत आवडते.\n\nTensorFlow / PyTorch:\n\t• Deep learning — neural networks बनवणे.\n\t• जास्त क्षमता, पण तुलनेने अवघड.\n\nशिकण्याचा मार्ग: NumPy → Pandas → Scikit-learn या ओळीने. TensorFlow नंतर. एका वेळी एक library — व्यवस्थित समजा.",
      },
      {
        title: "वातावरण तयार करणे — install आणि setup",
        content: "AI कोड चालवण्यासाठी Python install असणे आवश्यक. सोपा प्रारंभ:\n\n१. Python install करा (नवीन आवृत्ती 3.x).\n\t• Windows: python.org वरून installer.\n\t• Termux (Android): pkg install python\n\t• Linux/Mac: बहुतेक वेळा आधीचं.\n\n२. पॅकेज install करा (स्वतंत्र project साठी):\n\t• pip install numpy pandas matplotlib scikit-learn jupyter\n\t• त्रुटी आली तरी काळजी नसावी — समस्येचा message वाचून google करणे हीच शिकण्याची पद्धत.\n\n३. वैकल्पिक सोपा मार्ग — Google Colab:\n\t• Browser मध्येच चालतो, install नाही.\n\t• Free GPU मिळते (deep learning करताना उपयुक्त).\n\t• लगेच सुरुवात: colab.research.google.com\n\nशेअरिंग व बॅकअप: Colab प्रत्येक notebook Google Drive मध्ये साठवतो. सुरुवातीला हाच सर्वांत सोपा मार्ग.\n\nआता पुढील पाठातल्या code ला चालवण्यासाठी वातावरण तयार माना.",
      },
      {
        title: "Data ओळख — आधी खेळणे (Hands-on टिप)",
        content: "कोणताही AI प्रोजेक्ट करण्यापूर्वी डेटा पाहण्याची सवय लावा. Pandas चा वापर उदाहरण:\n\nimport pandas as pd\ndf = pd.read_csv('houses.csv')\nprint(df.head())        # पहिल्या 5 ओळी\nprint(df.describe())    # stats — सरासरी, किमान, कमाल\nprint(df.shape)         # rows, columns\n\nही चार आज्ञा data चा दृष्टीक्षेप देतात. नंतर:\n\n\t• रिकामे boxes?  df.isnull().sum()\n\t• विषम मूल्ये?  df['price'].plot.hist() # matplotlib\n\nहे करतानाच आपल्याला कळते: कोणते features सुदृढ, कोणते सोडावे लागतील.\n\nसर्वांत महत्त्वाचा नियम: 'clean data → good AI'. Data आधी समजून घेतल्यावर मॉडेल नंतर लगेच बसवता येते. कोड मागे मेहनत लक्षणीयपणे कमी होते.",
      },
      {
        title: "पहिला AI मॉडेल — १० ओळींत",
        content: "तयार library वापरून मॉडेल बनवणे आश्चर्यकारकरीत्या सोपे आहे:\n\nfrom sklearn.tree import DecisionTreeClassifier\n\n# data: [घंटे_अभ्यास, सराव_प्रश्न] -> उत्तीर्ण?\nX = [[3, 4], [6, 8], [1, 2], [8, 9]]\ny = [0, 1, 0, 1]   # 0 = नापास, 1 = उत्तीर्ण\n\nmodel = DecisionTreeClassifier()\nmodel.fit(X, y)   # शिकणे\n\nprint(model.predict([[5, 5]]))   # अंदाज\n\nकाय घडतंय:\n\t१. sklearn मधील algorithm निवडला.\n\t२. data (X) + उत्तरे (y) दिली.\n\t३. fit() ने नियम शिकले.\n\t४. predict() ने नवीन उदाहरणावर उत्तर दिले.\n\nहे चार step सगळ्या ML algorithms साठी सारखे असतात — फक्त data व algorithm बदलते. पुढील पाठांमध्ये प्रत्येक step गहन करूया.",
      },
      {
        title: "NumPy आणि Pandas — स्फोटक सारांश",
        content: "दोन libraries AI data हाताळण्याचा पाया:\n\nNumPy — संख्यांची साधने:\n\t• np.array([1,2,3]) — वेगवान mathematical arrays.\n\t• np.zeros((2,3)), np.arange(5)\n\t• मॅट्रिक्स गुणाकार — neural network च्या मागे.\n\nPandas — data table:\n\t• Series (एक स्तंभ), DataFrame (संपूर्ण तक्ता).\n\t• CSV/Excel/SQL वाचणे — read_csv, read_excel.\n\t• गट: df.groupby('city')['price'].mean()\n\t• बदल: df.fillna(0), df.dropna()\n\nनेहमी लक्षात ठेवा: 90% प्रोजेक्ट data साफ करण्यात जाते; या दोन libraries मुळे ते मिनिटात साध्य होते. कोणतेही AI code तुम्ही भविष्यात पाहाल ते या दोन भोवती फिरेल.",
      },
      {
        title: "Jupyter Notebook — शिकण्याचा खेळ",
        content: "ज्युटर हा AI code लिहिण्याचा लोकप्रिय मार्ग — कारण त्यात cell-दर-cell चालवता येते व परिणाम तत्काळ पाहता येतो.\n\nफायदे:\n\t• एक एक cell run करा; output लगेच खाली.\n\t• निकाल दिसल्यावर पुढील cell चालवता येते.\n\t• शिकताना प्रयोग करणे सोपे.\n\t• चित्रे/आलेख notebook मध्येच दिसतात.\n\nकशी चालवावी:\n\t• Terminal: jupyter notebook\n\t• Browser मध्ये interface उघडेल.\n\t• वरील code copy → New Notebook → Run.\n\nसवय: छोटे प्रयोग एकत्रित करून २-३ pages चा 'शिकण्याचा diary' बनवा. प्रत्येक प्रयोगाचे नाव लिहा — प्रोजेक्ट करताना परत संदर्भासाठी.\n\nColab वर जास्तीत जास्त सुरुवात करणे सोपे; फक्त गरज नसते तेव्हा GPU वापरू नका.",
      },
      {
        title: "आजचा सारांश",
        content: "Python आणि AI — आजचे मुद्दे:\n\n• Python साधे code लिहिणे; AI साठी मानक भाषा.\n• महत्त्वाच्या libraries: NumPy (संख्या), Pandas (data), scikit-learn (ML), TensorFlow (deep).\n• Setup: pip install numpy pandas matplotlib scikit-learn; किंवा Google Colab (फुकट).\n• Data आधी पाहा — Pandas च्या head()/describe()/isnull() ने.\n• पहिला मॉडेल १० ओळींत — sklearn algorithm + fit + predict.\n• Jupyter Notebook — cell-दर-cell शिकवण्याचा खेळ.\n\nपुढील पाठात AI चा पाया data — features, labels, quality आणि math — सोप्या भाषेत पाहू.\n\nआजचे प्रॅक्टिस:\n\t०१. Google Colab उघडा व 'पहिला AI मॉडेल' section चा code चालवा.\n\t०२. df.head() व df.describe() मध्ये काय फरक, लिहा.\n\t०३. स्वतः ४ उदाहरणांचा छोटा डेटासेट बनवून पहिला मॉडेल १० ओळींत चालवा.",
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
    next: "ai-data",
  },

  // === ELECTRONICS ===

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
      {
        title: "सर्किट आणि प्रवाह",
        content: "प्रवाह नेहमी बंद मार्गाने (closed loop) वाहतो.\n\nसर्किटचे प्रकार:\n\t• Open circuit — मार्ग तुटलेला, प्रवाह नाही.\n\t• Closed circuit — संपूर्ण मार्ग जोडलेला, प्रवाह चालतो.\n\t• Short circuit — थेट (+)−(−) जोडणी, धोकादायक.\n\nपाण्याच्या नळीचे साधर्म्य:\n\t• Voltage = पाण्याचा दाब.\n\t• Current = वाहणारे पाणी.\n\t• Resistance = नळीची अरुंदाई.\n\nघरातील सर्किट बहुतेक समांतर असतात — एक घटक बंद झाला तरी बाकी चालतात.\n\nप्रयोगांमध्ये नेहमी फक्त लो-व्होल्टेज (3-9V) वापरा.\n\nपुढील पाठांमध्ये series/parallel चे नियम सखोल येतील.",
      },
      {
        title: "ओहमचा नियम — व्यवहार",
        content: "एकच समीकरण इलेक्ट्रॉनिक्सचे मूळ:\n\nV = I × R\n\nतीन स्वरूप:\n\t• V = I × R — voltage काढणे.\n\t• I = V / R — प्रवाह काढणे.\n\t• R = V / I — resistor काढणे.\n\nउदाहरण १:\n\t• बॅटरी 5V, resistor 1000Ω → I = 5/1000 = 0.005A = 5mA.\n\nउदाहरण २:\n\t• LED ला 2V व 20mA हवे, स्रोत 5V.\n\t• R = (5 − 2) / 0.02 = 150Ω.\n\nनियम:\n\t• मोठा R → कमी प्रवाह.\n\t• दोन resistor शृंखलेत → R बेरीज.\n\t• तार/कंडक्टरचा resistance जवळजवळ शून्य.\n\nनेहमी लक्षात ठेवा: LED सोबत 220Ω resistor आवश्यक.",
      },
      {
        title: "घटकांची ओळख",
        content: "पाच मूलभूत घटक:\n\n• Resistor — प्रवाह मर्यादित करतो.\n• Capacitor — थोडी ऊर्जा साठवतो/फिल्टर करतो.\n• Diode — एकाच दिशेने प्रवाह देतो.\n• LED — प्रकाश देणारा diode.\n• Transistor — लहान इशाऱ्याने मोठा प्रवाह नियंत्रित करतो.\n\nओळख कशी?\n\t• Resistor — रंगीत पट्ट्या.\n\t• Capacitor — गोल/सपाट, अंक लिहिलेले.\n\t• LED — लांब पाय anode (+).\n\t• Transistor — तीन पाय, अक्षर कोड.\n\nसर्वात सोपा प्रयोग: LED + resistor + बॅटरी.\n\nपुढील पाठांमध्ये प्रत्येक घटकाचे तपशील.",
      },
      {
        title: "साधने — ब्रेडबोर्ड व multimeter",
        content: "प्रयोग करण्यासाठी दोन मुख्य साधने:\n\nब्रेडबोर्ड:\n\t• मध्य रेषेच्या दोन्ही बाजूंना rows — प्रत्येक row मध्ये 5 जोडलेली छिद्रे.\n\t• बाहेरच्या रेल — एक +V, एक GND.\n\t• न वेल्ड करता योग्य तारांनी सर्किट जलद.\n\nMultimeter:\n\t• Voltage mode — घटकावरील V मोजणे.\n\t• Resistance mode — R वाचणे.\n\t• Continuity — तार तुटली आहे का तपासणे.\n\t• Current mode — प्रवाह मोजणे (सावधान).\n\nसुरक्षा:\n\t• फक्त लो-व्होल्टेज (3-9V).\n\t• बॅटरीचे ध्रुव उलट न लावा.\n\t• तारा (+)/(−) थेट जोडू नका.\n\nसराव: 2 बॅटरी holder बनवून voltage मोजा.",
      },
      {
        title: "DIY — बॅटरी + LED दिवा",
        content: "पहिला प्रोजेक्ट — battery-powered टेबल दिवा.\n\nपार्ट्स:\n\t• 1 × LED (कोणताही रंग).\n\t• 1 × resistor 100-220Ω.\n\t• 2 × AA बॅटरी + holder.\n\t• 2 तारा.\n\nजोडणी:\n\t• बॅटरी (+) → resistor → LED anode (+).\n\t• LED cathode (−) → बॅटरी (−).\n\nचाचणी:\n\t• LED जळत नसल्यास anode/cathode उलट बघा.\n\t• धूसर असेल तर resistor मूल्य कमी करा (मर्यादेत).\n\nविस्तार:\n\t• दोन LEDs समांतर.\n\t• बटण switch जोडून ON/OFF.\n\t• कागदाच्या कपाने लँपशेड.\n\nहेच सर्किट पुढे Arduino ने चालवले जाते.",
      },
      {
        title: "आजचा सारांश",
        content: "इलेक्ट्रॉनिक्स बेसिक्सचे सहा मुद्दे:\n\n• प्रवाह बंद मार्गाने वाहतो; short circuit धोकादायक.\n• V = I × R — तीन स्वरूप.\n• घटक — resistor, capacitor, diode, LED, transistor.\n• साधने — ब्रेडबोर्ड आणि multimeter.\n• सुरक्षा — लो-व्होल्टेज, ध्रुव व्यवस्थित.\n• DIY — LED दिवा; नंतर switch जोडा.\n\nआजचे प्रॅक्टिस:\n\t०१. घरातील बॅटरी दिव्यांचे निरीक्षण करा.\n\t०२. Multimeter ने बॅटरी voltage मोजा.\n\t०३. LED + 220Ω + बॅटरी दिवा बनवा.\n\t०४. दोन भिन्न resistor ची मूल्ये मोजा.\n\nपुढील पाठ — Circuits: series/parallel चे नियम.",
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
    related: ["electronics-circuits", "electrical-basics", "arduino-basics"],
    next: "electronics-circuits",
  },

  // === ELECTRONICS · LEVEL 1 ===
  ...electronicsLevel1,
  ...electronicsLevel3,

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
      {
        title: "बोर्डचे भाग",
        content: "Arduino Uno वर काय काय असते:\n\n• USB port — program upload व power.\n• Power jack — 7-12V adapter साठी.\n• Digital pins 0-13 — IN/OUT; 13 वर built-in LED.\n• Analog pins A0-A5 — sensor वाचन.\n• GND pins — सामायिक मुळा (सर्वात महत्त्वाचा).\n• 5V / 3.3V pins — बाह्य घटकांना वीज.\n• Reset button — program पुन्हा सुरू.\n• TX/RX LEDs — upload दरम्यान चमकतात.\n\nसाधा नियम:\n\t• GND शिवाय परिपूर्ण सर्किट नाही.\n\t• Built-in LED pin 13 — पहिला प्रयोग.\n\nभिन्न बोर्ड (Nano, Mega) — pin names साठी boards/documentation पहा.\n\nआता IDE उघडा आणि पहिला sketch चालवा.",
      },
      {
        title: "IDE आणि पहिला sketch",
        content: "Arduino IDE — सर्व काम एका जागी.\n\nमुख्य भाग:\n\t• Code editor — setup() आणि loop().\n\t• Upload button (→) — program बोर्डवर.\n\t• Serial monitor — बोर्डचे मजकूर वाचणे.\n\t• Board/port selector.\n\nस्ट्रक्चर:\n\tvoid setup() { } — सुरुवातीला एकदाच.\n\tvoid loop() { } — पुन्हा पुन्हा अनंत वेळा.\n\nपहिला program (Blink):\n\t• File → Examples → 01.Basics → Blink.\n\t• Tools → Board → Arduino Uno.\n\t• Tools → Port → योग्य port.\n\t• Upload दाबा.\n\t• Built-in LED 1 सेकंदाच्या अंतराने blink होईल.\n\nबोर्ड/port दिसत नसल्यास:\n\t• USB दुसऱ्या port मध्ये लावा.\n\t• driver/bootloader तपासा.\n\nएकदा Blink चालले की काहीही बनवता येईल.",
      },
      {
        title: "digitalWrite — LED control",
        content: "LED नियंत्रणाचे तीन आदेश:\n\n\tpinMode(pin, OUTPUT); — pin ची दिशा.\n\tdigitalWrite(pin, HIGH); — 5V (ON).\n\tdigitalWrite(pin, LOW); — 0V (OFF).\n\nमूल कोड:\n\tvoid setup() {\n\t  pinMode(13, OUTPUT);\n\t}\n\tvoid loop() {\n\t  digitalWrite(13, HIGH);\n\t  delay(1000);\n\t  digitalWrite(13, LOW);\n\t  delay(1000);\n\t}\n\ndelay(मिलिसेकंद):\n\t• delay(1000) = 1 सेकंद.\n\t• लहान delay → जलद blink.\n\nप्रयोग:\n\t• delay 200 करा — वेगवान flicker.\n\t• दोन LEDs दोन pins वर चालवा.\n\t• वेगवेगळे वेग द्या.\n\nसराव: 3 blink + थांबा + पुन्हा असा pattern बनवा.",
      },
      {
        title: "digitalRead — बटण वाचणे",
        content: "बटण दाबल्याचे ओळखण्यासाठी digitalRead.\n\nजोडणी (pull-down):\n\t• पिन 2 ← बटण; बटण दुसऱ्या टोकाला 5V.\n\t• 10kΩ पिन 2 ते GND — स्थिर LOW.\n\t• LED पिन 13 (built-in).\n\nकोड:\n\tint btn = 2;\n\tvoid setup() {\n\t  pinMode(btn, INPUT);\n\t  pinMode(13, OUTPUT);\n\t  Serial.begin(9600);\n\t}\n\tvoid loop() {\n\t  int v = digitalRead(btn);\n\t  Serial.println(v);\n\t  digitalWrite(13, v == HIGH ? HIGH : LOW);\n\t}\n\nकाम:\n\t• दाबल्यावर pin 2 → HIGH → LED ON.\n\t• Serial monitor मध्ये 0/1 दिसते.\n\nINPUT_PULLUP:\n\t• पिन आतून 5V कडे खेचली जाते.\n\t• बटण दुसऱ्या टोकाला GND → दाबल्यावर LOW.\n\t• कोड तद्नुसार उलट बदलतो.\n\nसराव: बटणाने blink वेग बदला.",
      },
      {
        title: "analogRead — वाचन",
        content: "सतत बदलणारे मूल्य वाचण्यासाठी analogRead.\n\nकोड:\n\tint light = analogRead(A0);\n\tSerial.println(light);\n\nमूल्यांचा अर्थ:\n\t• 0V → 0\n\t• 5V → 1023\n\t• मध्ये — voltage प्रमाणात 0-1023.\n\nव्यवहार:\n\t• LDR → प्रकाश.\n\t• Potentiometer → फिरवल्यावर voltage बदलतो.\n\t• Thermistor → तापमानाचा ठोका.\n\nSerial Plotter:\n\t• Tools → Serial Plotter — वाचनाचा ग्राफ.\n\t• बदल लगेच दिसतात.\n\nसराव: A0 वर potentiometer जोडून ग्राफ पहा.\n\nSensor पाठात हेच वाढवले जाते.",
      },
      {
        title: "सुरक्षा व सामान्य चुका",
        content: "Arduino सोबत सुरक्षा:\n\n• प्रत्येक pin फक्त ~20-40mA — LED सोबत resistor.\n• 5V आणि GND थेट जोडू नका.\n• बाह्य वीज बंद करून wiring करा.\n• पिन/data sheet तपासा.\n\nसामान्य चुका:\n\t• LED उलट — लांब पाय (+), छोटा (−).\n\t• resistor नाही → LED जळतो.\n\t• GND नाही → सर्किट बंद.\n\t• pin चुकला → काही प्रतिसाद नाही.\n\nडीबग पद्धत:\n\t• Serial.println() ने मूल्य छापा.\n\t• एकावेळी एक बदल व upload.\n\t• ब्रेडबोर्ड rows क्रमाने तपासा.\n\nसराव: मुद्दाम एक चूक करून शोधा — पटकन शिकायला होईल.",
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
    related: ["arduino-led", "electronics-transistor", "electronics-basics"],
    next: "arduino-led",
    prev: "electronics-power-supply",
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
      {
        title: "Built-in LED — पहिले blink",
        content: "बहुतांश boards वर pin 13 शी जोडलेला एक सोपा LED असतो.\n\nकोड:\n\tvoid setup() {\n\t  pinMode(13, OUTPUT);\n\t}\n\tvoid loop() {\n\t  digitalWrite(13, HIGH);\n\t  delay(500);\n\t  digitalWrite(13, LOW);\n\t  delay(500);\n\t}\n\nकाय घडते:\n\t• HIGH → LED प्रकाशित; LOW → बंद.\n\t• delay(500) = अर्धा सेकंद.\n\nबदल:\n\t• delay 1000 → मंद blink.\n\t• delay 100 → वेगवान blink.\n\nहेच simple timing प्रत्येक LED project मध्ये असते.\n\nसराव: SOS पॅटर्न बनवा (3 लहान, 3 मोठे, 3 लहान).",
      },
      {
        title: "PWM — तेज नियंत्रण (analogWrite)",
        content: "लक्षात ठेवा: analogRead वाचते, analogWrite तेज बदलते.\n\nतेज समजून घेणे:\n\t• analogWrite(pin, value) — value 0 ते 255.\n\t• 51 ≈ 20%, 128 ≈ 50%, 255 = 100%.\n\nकोड — हळूहळू उजळणे:\n\tint led = 9;   // PWM capable pin\n\tvoid setup() { pinMode(led, OUTPUT); }\n\tvoid loop() {\n\t  for (int i = 0; i <= 255; i++) {\n\t    analogWrite(led, i);\n\t    delay(10);\n\t  }\n\t  delay(500);\n\t  for (int i = 255; i >= 0; i--) {\n\t    analogWrite(led, i);\n\t    delay(10);\n\t  }\n\t  delay(500);\n\t}\n\nफक्त PWM pins (3,5,6,9,10,11) वर analogWrite चालते.\n\nसराव: रात्रीचा हळू उजळणारा दिवे बनवा.",
      },
      {
        title: "बटण + LED — इनपुट combo",
        content: "आता LED फक्त बटण दाबल्यावरच झळकतो.\n\nजोडणी:\n\t• पिन 2 ← बटण (बटण दुसऱ्या टोकाला GND).\n\t• पिन 9 → 220Ω → LED.\n\nकोड (INPUT_PULLUP):\n\tint btn = 2, led = 9;\n\tvoid setup() {\n\t  pinMode(btn, INPUT_PULLUP);\n\t  pinMode(led, OUTPUT);\n\t}\n\tvoid loop() {\n\t  int v = digitalRead(btn);\n\t  if (v == LOW) digitalWrite(led, HIGH);\n\t  else digitalWrite(led, LOW);\n\t}\n\nप्रयोग:\n\t• बटण GND ला → दाबल्यावर v = LOW → LED ON.\n\t• कोड उलटा असतो (LOW म्हणजे दाबलेले).\n\nबटण bounce झाल्यास delay(20) debounce जोडा.\n\nसराव: दोन बटणे — एक ON, दुसरा बदल.",
      },
      {
        title: "Fade — सुरुवात-शेवट",
        content: "analogWrite ने सोपे fade बनवू.\n\nविचार:\n\t१. value 0 → 255 (उजळणे).\n\t२. delay 10ms.\n\t३. value 255 → 0 (मंद होणे).\n\t४. delay 10ms.\n\nकोड:\n\tint led = 9;\n\tint b = 0;\n\tint step = 5;\n\tvoid setup() { pinMode(led, OUTPUT); }\n\tvoid loop() {\n\t  analogWrite(led, b);\n\t  b = b + step;\n\t  if (b <= 0 || b >= 255) step = -step;\n\t  delay(20);\n\t}\n\nstep मोठा → जलद; लहान → मंद.\n\nहेच lighting चा आधार — sunset lamp, मंद candle LED.\n\nसराव: step आणि delay बदलून दोन वेगांची तुलना करा.",
      },
      {
        title: "सामान्य चुका व तपासण्या",
        content: "LED project चालत नसेल तर क्रमाने तपासा:\n\n१. Wiring:\n\t• Anode → resistor → pin; Cathode → GND.\n\t• resistor वगळल्यास LED जळतो.\n\t• GND सामायिक झाला आहे का बघा.\n\n२. Pin:\n\t• PWM वापरत असल्यास PWM pin निवडा.\n\t• pin number आणि code जुळले का.\n\n३. Code:\n\t• braces/स्वल्पविराम कुठे चुकले नाही ना.\n\t• upload होत नसल्यास syntax error पहा.\n\n४. Serial:\n\t• Serial.println(v) ठेवा — मूल्य दिसतील.\n\t• HIGH/LOW logic पडताळा.\n\nलक्षात ठेवा: बहुतेक चुका wiring/ध्रुवांत असतात.",
      },
      {
        title: "आजचा सारांश",
        content: "Arduino LED चे सहा मुद्दे:\n\n• Built-in LED pin 13 — पहिला blink.\n• analogWrite — 0 ते 255 तेज.\n• PWM pins — 3,5,6,9,10,11.\n• बटण + INPUT_PULLUP — दाबल्यावर LOW.\n• Fade — step + delay ने दिशा बदल.\n• Debug — wiring, pin, code, serial.\n\nआजचे प्रॅक्टिस:\n\t०१. Built-in LED blink वेग बदलून बघा.\n\t०२. PWM ने LED 30% तेजावर ठेवा.\n\t०३. बटणाने LED toggle करा.\n\t०४. fade चे step/delay खेळवा.\n\nपुढे sensors — analogRead ने जग वाचा.",
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
    related: ["arduino-basics", "arduino-sensor", "diy-projects"],
    prev: "arduino-basics",
    next: "arduino-sensor",
  },

  // === ELECTRONICS · LEVEL 2 ===
  ...electronicsLevel2,
  ...electronicsLevel4,
  ...electronicsLevel5,


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
- स्विच (switch)
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
    related: ["digital-skills", "python-web-flask", "computer-basics"],
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
    related: ["freelancing-basics", "python-web-flask", "digital-skills"],
    prev: "freelancing-basics",
  },

  // === ANDROID · TIPS ===
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
    prev: "android-permissions",
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

export function getTutorial(slug: string): Tutorial | undefined {
  return tutorials.find((t) => t.slug === slug);
}

export function getTutorialsByCategory(categoryId: string): Tutorial[] {
  return tutorials.filter((t) => t.categoryId === categoryId);
}

export function searchTutorials(query: string): Tutorial[] {
  const q = query.toLowerCase().trim();
  if (!q) return tutorials;
  return tutorials.filter(
    (t) =>
      t.title.toLowerCase().includes(q) ||
      t.summary.toLowerCase().includes(q) ||
      t.marathiTitle.toLowerCase().includes(q) ||
      t.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
  );
}
