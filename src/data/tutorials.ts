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
        content: "HTML (HyperText Markup Language) ही मार्कअप भाषा आहे जी वेबपेजची रचना ठरवते.\n\nHTML मध्ये tags वापरतो. Tag म्हणजे < आणि > यामध्ये लिहिलेला कोड: <h1>, <p>, <div> इत्यादी.\n\nप्रत्येक tag दोन प्रकारे असतो:\n• Opening tag: <p>\n• Closing tag: </p>",
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
        content: "प्रत्येक HTML डॉक्युमेंटमध्ये चार मूलभूत tags असतात: <html> संपूर्ण दस्तऐवज, <head> मेटाडेटा, <title> ब्राउझर टॅबवर दिसणारा टायटल, <body> पेजवर दिसणारी सर्व माहिती.\n\nशीर्षके: <h1> सर्वांत मोठा heading; <h2> ते <h6> लहान headings.\nParagraph आणि Lists: <p> paragraph, <ul> bulleted list, <ol> क्रमांकित list, <li> list item.",
        code: `<h1>मुख्य शीर्षक</h1>
<h2>उप-शीर्षक</h2>
<p>हे एक paragraph आहे.</p>

<ul>
  <li>पहिला item</li>
  <li>दुसरा item</li>
</ul>`,
        codeLanguage: "html",
        output: `मुख्य शीर्षक
उप-शीर्षक
हे एक paragraph आहे.
• पहिला item
• दुसरा item`,
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
        title: "रोजच्या कामातील commands",
        content: "File management: cp — कॉपी; mv — हलवणे/रिनेम; rm — डिलीट; ln — link बनवणे.\nText processing: grep — pattern शोधणे; cat — वाचणे; less — मोठा file आरामात वाचणे; wc — word count.\nSystem: ps — processes; kill — process थांबवणे; df — disk usage; free — memory.",
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
        content: "AI (Artificial Intelligence) म्हणजे संगणकाला माणसासारखं विचार करायला, शिकायला आणि निर्णय घ्यायला शिकवणे. सामान्य प्रोग्राम पूर्वलिखित नियमच पाळतो; AI मात्र data वरून शिकतो.\n\nरोज वापरले जाणारे AI: Siri / Google Assistant, ChatGPT, फोटोमधील चेहरा ओळखणे, YouTube वरील recommendations.",
        code: `# AI काय करतो:
1. Massive data घेतो
2. Patterns शिकतो
3. निर्णय/उत्तर देतो

# उदा. फोटोमधील चेहरा
Input: लाखो चेहऱ्यांचे फोटो
Training: नमुने शिकते
Output: नवीन फोटोमधील चेहरा ओळखते`,
        codeLanguage: "text",
      },
      {
        title: "AI कुठे वापरला जातो?",
        content: "Google Search — टाइप केलेला मजकूर वाचून सुसंगत निकाल देतो.\nYouTube / Instagram — पाहलेल्या video वरून पुढील सुचवतात.\nGoogle Maps — traffic पाहून रस्ता बदलण्याचा अंदाज देतो.\nफोनचा auto-correct — पुढचा शब्द सुचवतो.\nemail चा spam filter — junk message वेगळे करतो.\nबँक / UPI — फसवणुकीचा व्यवहार शोधतो.\n\nAI जादूगार नाही — तो मोठ्या प्रमाणात data वरून अचूक अंदाज लावणारी गणिती प्रक्रिया आहे.",
      },
      {
        title: "नियम प्रोग्राम vs AI",
        content: "Calculator हेच उदाहरण — तो दोन संख्या घेऊन त्यांची बेरीज करतो; नियम स्पष्ट: a + b = c.\n\nपण हाताने लिहिलेला अंक ओळखण्याचे नियम कोणीही तयार करू शकत नाही आणि भाषेतील व्यंग्य नियमांमध्ये मांडता येत नाही.\n\nAI वेगळा येतो — नियम आपण लिहित नाही, तर उदाहरणे देतो: लाखो अंकांचे फोटो (data), प्रत्येक फोटोवर खरे उत्तर (label), आणि संगणक स्वतः नियम शोधतो.\n\nProgramming मध्ये नियम आपण लिहितो; AI मध्ये data वरून नियम आपोआप तयार होतात.",
      },
      {
        title: "Narrow AI vs General AI",
        content: "Narrow AI (Weak AI) — एका विशिष्ट कामात दक्ष: फोटोतील चेहरा ओळखणे, स्पॅम वेगळे करणे, बुद्धिबळात माणसाला हरवणे. आजचे बहुतेक AI narrow आहेत.\n\nGeneral AI (Strong AI) — माणसासारखे कोणतेही काम करू शकणारा. असा AI आज अस्तित्वात नाही; तो संशोधनाचा दीर्घकालीन ध्येयमार्ग आहे.",
      },
      {
        title: "AI कसा शिकतो?",
        content: "AI शिकण्याचे मूळ एकच तत्त्व: उदाहरणांमधून नमुना शोधणे.\n\nSupervised — प्रत्येक उदाहरणाबरोबर खरे उत्तर असते; उदा. फोटो + मांजर लेबल.\n\nUnsupervised — उत्तर नसते, फक्त उदाहरणे; संगणक स्वतः सारखे नमुने वेगळे करतो.\n\nReinforcement — प्रत्येक कृतीला फळ मिळते; चांगली कृती मजबूत होते; उदा. robot ला चालायला शिकवणे.",
      },
      {
        title: "AI ची उपक्षेत्रे",
        content: "Machine Learning (ML) — data वरून नियम शिकणाऱ्या तंत्रांचा संच.\nDeep Learning (DL) — ML चा एक भाग; मानवी मेंदूच्या neuron प्रमाणे layers वापरतो.\nNatural Language Processing (NLP) — भाषा समजून घेणे: translator, chatbot.\nComputer Vision (CV) — प्रतिमा समजून घेणे: face unlock, self-driving car.\n\nChatGPT म्हणजे NLP+DL; बँकेतला चेहरा ओळख म्हणजे CV+DL.",
      },
      {
        title: "AI चे फायदे आणि जोखमी",
        content: "फायदे: दस्तऐवज सारांश वेळ वाचतो; डॉक्टरला X-ray विश्लेषणात मदत; झटपट भाषांतर; फसवणूक शोधणे; बॉम्ब शोधणारा रोबोट माणसाचा धोका टाळतो.\n\nजोखमी: गलिच्छ data → अन्यायकारक निर्णय (bias); छायाचित्रे data मध्ये जातात (privacy); बनावट फोटो/आवाज; काही नोकर्या बदलतात.\n\nAI टाळावा असा नाही, तर जाणूनबुजून वापरावा. AI कडून मिळालेली माहिती तपासा, खासगी गुप्त माहिती शेअर करू नका.",
      },
      {
        title: "या कोर्सचा नकाशा",
        content: "AI शिकण्यामध्ये दिशा महत्त्वाची. या शृंखलेची रचना: १. AI ओळख (हा पाठ), २. Machine Learning, ३. Python व libraries, ४. Data, ५. गणित, ६. Neural networks व Deep learning, ७. Reinforcement learning, ८. ChatGPT / LLM, ९. Prompts, १०. NLP, ११. दोन छोटे प्रकल्प.\n\nगणित म्हणजे घाबरू नका — गणना फक्त बेरीज-वजाबाकीच्या पातळीवर राहील.",
      },
      {
        title: "आजचा सारांश",
        content: "AI म्हणजे data वरून शिकवणे — नियम उदाहरणांवरून शोधतो. आजचे सर्व AI narrow आहेत. शिकण्याचे तीन मार्ग — Supervised, Unsupervised, Reinforcement. उपक्षेत्रे — ML, DL, NLP, CV.\n\nसराव: दिवसभरात वापरलेली तीन AI साधने लिहा; प्रत्येक narrow AI आहे का ते ठरवा.",
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
        content: "ML हे AI चे उप-क्षेत्र आहे. सामान्य programming मध्ये rules लिहितो, पण ML मध्ये data देतो आणि संगणक स्वतःच rules शिकतो.\n\nतीन प्रकार:\n1. Supervised Learning — labeled data वरून शिकणे\n2. Unsupervised Learning — patterns शोधणे\n3. Reinforcement Learning — प्रयत्न-अपयशातून शिकणे\n\nसामान्य उदाहरण: मुलाला सफरचंद ओळखायला शिकवतो — अनेक चित्रे दाखवतो. तो मग स्वतः ओळखतो.",
        code: `# सामान्य programming vs ML

# सामान्य programming
if state == "जवळ" and object == "APPLE":
    label = "सफरचंद"

# ML पद्धत
training_data = [
   (सफरचंद_चित्र, "सफरचंद"),
   (केळी_चित्र, "केळी"),
]
model.learn(training_data)

# आता नवीन चित्र ओळखेल
model.predict(नवीन_चित्र)`,
        codeLanguage: "python",
      },
      {
        title: "Learning — संगणकाच्या नजरेतून",
        content: "संगणकाचे शिकणे म्हणजे data वरून अंदाज प्रक्रियेचे weights/parameters असे बदलतात की अंदाज चांगले व्हायला लागतात.\n\nउदाहरण — रेषा सरकवणे: १० उदाहरणे (घराचे क्षेत्रफळ → किंमत). मॉडेल: किंमत = weight × area + bias. सुरुवातीला weight random — अंदाज चुकीचे. प्रत्येक उदाहरणावर weight थोडा सुधारतो.\n\nशिकण्याचा चक्र: १. उदाहरण घ्या. २. अंदाज लावा. ३. चुक मोजा. ४. weight बदला. ५. पुढील उदाहरण. अनेक फेऱ्यांनंतर चुक कमीत कमी.",
      },
      {
        title: "Features आणि Labels",
        content: "ML मध्ये प्रत्येक उदाहरण दोन भागांचे असते:\n\nFeatures — ज्यावरून अंदाज लावायचा: संख्यात्मक (क्षेत्रफळ, किंमत), शब्द (शहराचे नाव), प्रतिमा (pixel brightness).\n\nLabels — खरं काय: घराची खरी विक्री किंमत, फोटो मांजर की कुत्रा, ईमेल spam की नाही.\n\nSupervised learning: features + label → मॉडेल. Labeling — माणसाने उत्तरे जोडणे — ही वेळखाऊ पण आवश्यक मेहनत.",
      },
      {
        title: "Supervised Learning — Regression आणि Classification",
        content: "Regression (अंदाज): उत्तर सतत संख्या — घराची किंमत, थंडीची पातळी. चुक magnitude ने मोजली जाते.\n\nClassification (वर्गीकरण): उत्तर एका मर्यादित यादीतला — मांजर/कुत्रा, spam/non-spam. चुक चुकीच्या वर्गावरून मोजली जाते.\n\nसोपी ओळख: regression किती? सांगतो, classification कोणता? सांगतो.",
      },
      {
        title: "Unsupervised Learning",
        content: "फक्त features असतात — उत्तर नसते.\n\nClustering: सारख्या features चा गट शोधणे — उदा. ग्राहकांचे गट.\nDimensionality reduction: हजारो features मधून गरजेचे २-३ बनवणे.\n\nSupervised सारखे अचूक नाही, पण जिथे उत्तर नाही तिथे सुरुवात करण्याचा एकमेव मार्ग.",
      },
      {
        title: "Overfitting",
        content: "मॉडेल सरावातील उदाहरणे तंतोतंत पाठ करते, पण नवीन उदाहरणात चुकते.\n\nलक्षणे: Training accuracy 100%, test accuracy वेगाने कमी.\n\nउपाय: जास्त data, सोपे मॉडेल, regularization, cross-validation.\nविरुद्ध बाजू: underfitting — मॉडेल खूप सोपे, training वरही निकृष्ट.",
      },
      {
        title: "Hands-on उदाहरण",
        content: "३ उदाहरणे: घराचे क्षेत्रफळ → किंमत: (100,10) (200,15) (300,20)\n\nसाधे रेषेचे मॉडेल: किंमत = w × क्षेत्रफळ + b. सुरुवातीला w=0, b=0 → चुक 10, 15. w=0.05 → चुक 5. w≈0.06 → अंदाज जवळ.",
      },
      {
        title: "नैतिक गोष्टी",
        content: "Bias — data मध्येच असमतोल असेल तर model पक्षपाती.\nPrivacy — labels तयार करताना खासगी माहिती हाताळली जाते.\nMedical — मॉडेलने सांगितलेले अंदाज नेहमी दोनदा तपासा.\nExplainability — स्पष्ट करता येईल असे मॉडेल निवडा.\n\nचांगले data + पारदर्शक मॉडेल + मानवी पडताळणी = विश्वासार्ह ML.",
      },
      {
        title: "आजचा सारांश",
        content: "ML मध्ये नियम लिहित नाही; data वरून मॉडेलला शिकवतो. शिकण्याचे चक्र: अंदाज → चुक → weight सुधारणा. तीन शैली: Supervised, Unsupervised, Reinforcement. Features + labels = शिकण्याची जोडी. Overfitting — सोपे मॉडेल + जास्त data.\n\nपुढील पाठात Python — AI ची भाषा — पाहू.",
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
        content: "Python ही AI/ML साठी सर्वात लोकप्रिय भाषा — सिंटॅक्स सोपी, भरपूर libraries (NumPy, Pandas, Scikit-learn, TensorFlow/PyTorch), मोठा community, मुक्त.",
        code: `from sklearn.tree import DecisionTreeClassifier

X = [[5.1, 3.5], [7.0, 3.2], [6.3, 3.3]]
y = [0, 1, 1]

model = DecisionTreeClassifier()
model.fit(X, y)
print(model.predict([[5.1, 3.5]]))`,
        codeLanguage: "python",
        output: `[0]`,
      },
      {
        title: "Python सिंटॅक्स",
        content: "Python मध्ये code लिहिणे इंग्रजी वाचल्यासारखे वाटते.\n\nC++: int sum = 0; for (int i=0; i<5; i++) sum += i;\nPython: sum(range(5))\n\nAI data वर काम करताना वेगवान write व पुन्हा वापर महत्त्वाचा — Python तसे शक्य करते.",
      },
      {
        title: "AI साठी Libraries",
        content: "NumPy — संख्यात्मक गणित, arrays, matrix.\nPandas — Data table सांभाळणे, CSV वाचणे.\nMatplotlib — चित्रे/आलेख काढणे.\nScikit-learn — तयार ML algorithms.\nTensorFlow / PyTorch — Deep learning, neural networks.\n\nशिकण्याचा मार्ग: NumPy → Pandas → Scikit-learn → TensorFlow.",
      },
      {
        title: "वातावरण तयार करणे",
        content: "Python install करा (3.x). pip install numpy pandas matplotlib scikit-learn jupyter.\n\nवैकल्पिक: Google Colab — browser मध्येच चालतो, install नाही, Free GPU मिळते. colab.research.google.com",
      },
      {
        title: "पहिला AI मॉडेल",
        content: "DecisionTreeClassifier वापरून मॉडेल बनवणे.\n\ndata: [घंटे_अभ्यास, सराव_प्रश्न] → उत्तीर्ण?\nX = [[3, 4], [6, 8], [1, 2], [8, 9]]\ny = [0, 1, 0, 1]\n\nmodel.fit(X, y) → नियम शिकले.\nmodel.predict([[5, 5]]) → अंदाज.\n\nहे चर step सगळ्या ML algorithms साठी सारखे — फक्त data व algorithm बदलते.",
        code: `from sklearn.tree import DecisionTreeClassifier

X = [[3, 4], [6, 8], [1, 2], [8, 9]]
y = [0, 1, 0, 1]

model = DecisionTreeClassifier()
model.fit(X, y)
print(model.predict([[5, 5]]))`,
        codeLanguage: "python",
      },
      {
        title: "NumPy आणि Pandas",
        content: "NumPy: np.array([1,2,3]), np.zeros((2,3)), np.arange(5), matrix गुणाकार.\nPandas: Series, DataFrame, read_csv, groupby, fillna, dropna.\n\n90% प्रोजेक्ट data साफ करण्यात जाते; या दोन libraries मुळे ते मिनिटात साध्य.",
      },
      {
        title: "Jupyter Notebook",
        content: "cell-दर-cell चालवता येते, output लगेच खाली. Terminal: jupyter notebook. नवीन Notebook → New → Run.\n\nColab वर जास्तीत जास्त सुरुवात करणे सोपे.",
      },
      {
        title: "आजचा सारांश",
        content: "Python साधे code; AI साठी मानक भाषा. Libraries: NumPy, Pandas, scikit-learn, TensorFlow. Setup: pip install व Google Colab. Data आधी पाहा. पहिला मॉडेल १० ओळींत. Jupyter — cell-दर-cell शिकवण्याचा खेळ.\n\nपुढील पाठात AI चा पाया data — features, labels, quality आणि math.",
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
        content: "Voltage (V) — विद्युत दाब, पाण्याच्या दाबासारखा.\nCurrent (I) — विद्युत प्रवाह, पाण्याच्या प्रवाहासारखा.\nResistance (R) — प्रवाहाला विरोध, अरुंद पाईपसारखा.\n\nOhm's Law: V = I × R\n\nघटक: Resistor (प्रवाह मर्यादित), Capacitor (ऊर्जा store), Diode (एका दिशेने), LED (प्रकाश), Transistor (switch/amplifier).",
        code: `# Ohm's Law
V = I × R

# जर V = 5V, R = 1000Ω:
I = 5 / 1000 = 0.005A = 5mA

# LED circuit:
V_source = 5V
V_led = 2V
R = (5 - 2) / 0.02 = 150Ω`,
        codeLanguage: "text",
      },
      {
        title: "सर्किट आणि प्रवाह",
        content: "प्रवाह नेहमी बंद मार्गाने (closed loop) वाहतो.\n\nOpen circuit — मार्ग तुटलेला. Closed circuit — प्रवाह चालतो. Short circuit — थेट (+)−(−) जोडणी, धोकादायक.\n\nपाण्याचे साधर्म्य: Voltage = दाब, Current = वाहणारे पाणी, Resistance = अरुंदाई.\n\nघरातील सर्किट बहुतेक समांतर असतात. प्रयोगांमध्ये फक्त लो-व्होल्टेज (3-9V) वापरा.",
      },
      {
        title: "Ohm's Law — व्यवहार",
        content: "तीन स्वरूप: V = I × R, I = V / R, R = V / I.\n\n१. बॅटरी 5V, resistor 1000Ω → I = 5mA.\n२. LED ला 2V व 20mA, स्रोत 5V → R = 150Ω.\n\nनियम: मोठा R → कमी प्रवाह. दोन resistor शृंखलेत → R बेरीज.\nLED सोबत नेहमी 220Ω resistor.",
      },
      {
        title: "घटकांची ओळख",
        content: "Resistor — रंगीत पट्ट्या.\nCapacitor — गोल/सपाट, अंक लिहिलेले.\nLED — लांब पाय anode (+).\nTransistor — तीन पाय, अक्षर कोड.\n\nसर्वात सोपा प्रयोग: LED + resistor + बॅटरी.",
      },
      {
        title: "साधने — ब्रेडबोर्ड व multimeter",
        content: "ब्रेडबोर्ड: rows मध्ये 5 जोडलेली छिद्रे; बाहेरच्या रेल — +V व GND.\nMultimeter: voltage mode, resistance mode, continuity, current mode.\n\nसुरक्षा: फक्त लो-व्होल्टेज. बॅटरीचे ध्रुव उलट न लावा. तारा (+)/(−) थेट जोडू नका.",
      },
      {
        title: "DIY — बॅटरी + LED दिवा",
        content: "पार्ट्स: 1 LED + 1 resistor 100-220Ω + 2 AA बॅटरी + holder + 2 तारा.\nजोडणी: बॅटरी (+) → resistor → LED anode (+); LED cathode (−) → बॅटरी (−).\n\nचाचणी: LED जळत नसल्यास anode/cathode उलट बघा.\nविस्तार: दोन LEDs समांतर, switch जोडा, कागदाच्या कपाने लँपशेड.",
      },
      {
        title: "आजचा सारांश",
        content: "प्रवाह बंद मार्गाने वाहतो; short circuit धोकादायक.\nV = I × R — तीन स्वरूप.\nघटक — resistor, capacitor, diode, LED, transistor.\nसाधने — ब्रेडबोर्ड व multimeter.\nसुरक्षा — लो-व्होल्टेज, ध्रुव व्यवस्थित.\nDIY — LED दिवा.\n\nपुढील पाठ — Circuits: series/parallel चे नियम.",
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
        content: "Arduino हे microcontroller board आहे जे इलेक्ट्रॉनिक्स प्रोजेक्ट्स बनवण्यासाठी वापरले जाते. input/output pins वर LED, sensor, motor जोडता येतात. Arduino IDE वापरून USB ने upload करतो. भाषा C/C++ सारखी.",
        code: `// LED blink — pin 13 built-in LED
void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`,
        codeLanguage: "c",
      },
      {
        title: "बोर्डचे भाग",
        content: "USB port — program upload व power. Power jack — 7-12V adapter.\nDigital pins 0-13 — IN/OUT; 13 वर built-in LED.\nAnalog pins A0-A5 — sensor वाचन. GND — सामायिक मुळा.\n5V / 3.3V pins — बाह्य घटकांना वीज.\nReset button — program पुन्हा सुरू.\n\nGND शिवाय परिपूर्ण सर्किट नाही.",
      },
      {
        title: "IDE आणि पहिला sketch",
        content: "Arduino IDE मध्ये: Code editor (setup() + loop()), Upload button, Serial monitor, Board/port selector.\n\nvoid setup() { } — सुरुवातीला एकदाच. void loop() { } — पुन्हा पुन्हा.\n\nFile → Examples → 01.Basics → Blink. Tools → Board → Arduino Uno. Upload दाबा. Built-in LED blink होईल.",
      },
      {
        title: "digitalWrite — LED control",
        content: "pinMode(pin, OUTPUT); — pin ची दिशा.\ndigitalWrite(pin, HIGH); — 5V (ON). digitalWrite(pin, LOW); — 0V (OFF).\ndelay(1000) = 1 सेकंद.\n\nप्रयोग: delay 200 करा — वेगवान flicker. दोन LEDs दोन pins वर.",
      },
      {
        title: "digitalRead — बटण वाचणे",
        content: "pull-down: pin 2 ← बटण; दुसऱ्या टोकाला 5V; 10kΩ पिन 2 ते GND.\n\nकोड: pinMode(btn, INPUT); int v = digitalRead(btn); Serial.println(v).\nदाबल्यावर HIGH → LED ON. Serial monitor मध्ये 0/1.\n\nINPUT_PULLUP: pin आतून 5V; बटण GND → दाबल्यावर LOW.",
      },
      {
        title: "सुरक्षा व चुका",
        content: "प्रत्येक pin फक्त ~20-40mA — LED सोबत resistor. 5V आणि GND थेट जोडू नका.\n\nचुका: LED उलट (लांब पाय +), resistor नाही → LED जळतो, GND नाही → सर्किट बंद.\n\nडीबग: Serial.println() ने मूल्य छापा. एकावेळी एक बदल.",
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
        content: "LED हा विद्युत ऊर्जा प्रकाशात बदलतो.\nAnode (+) → resistor (220Ω) → Arduino pin; Cathode (-) → GND.\nResistor नाहीतर LED जळू शकते.",
        code: `// अनेक LEDs sequence
int leds[] = {2, 3, 4, 5};

void setup() {
  for (int i = 0; i < 4; i++)
    pinMode(leds[i], OUTPUT);
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
        content: "pin 13 वर built-in LED. HIGH → ON, LOW → OFF. delay(500) = अर्धा सेकंद.\n\nबदल: delay 1000 → मंद, delay 100 → वेगवान.\nसराव: SOS पॅटर्न (3 लहान, 3 मोठे, 3 लहान).",
      },
      {
        title: "PWM — तेज नियंत्रण",
        content: "analogWrite(pin, value) — value 0 ते 255. 51 ≈ 20%, 128 ≈ 50%, 255 = 100%.\nफक्त PWM pins (3,5,6,9,10,11) वर चालते.\n\nहळूहळू उजळणे: for loop 0→255, delay(10).",
      },
      {
        title: "बटण + LED — इनपुट combo",
        content: "INPUT_PULLUP: pinMode(btn, INPUT_PULLUP). बटण GND ला → LOW → LED ON.\nकोड उलटा: LOW म्हणजे दाबलेले.\n\nबटण bounce झाल्यास delay(20) debounce जोडा.",
      },
      {
        title: "Fade — सुरुवात-शेवट",
        content: "analogWrite ने fade: value 0→255→0, step=5, delay(20).\nstep मोठा → जलद; लहान → मंद.\n\nहेच sunset lamp, candle LED चा आधार.",
      },
      {
        title: "सामान्य चुका व तपासण्या",
        content: "Wiring: Anode → resistor → pin; Cathode → GND.\nPWM pins वापरा; pin number आणि code जुळवा.\nSerial.println(v) ठेवा — मूल्य दिसतील.\n\nबहुतेक चुका wiring/ध्रुवांत असतात.",
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
        content: "सायबर सुरक्षा म्हणजे डिजिटल माहिती सुरक्षित ठेवणे.\n\nधोके: Phishing — बनावट message/link; Malware — वाईट software; Password चोरी; Fake websites.\n\nसुरक्षित राहण्यासाठी: Strong password (लांब + unusual); 2FA; संशयास्पद link क्लिक करू नका; software अपडेट; अज्ञात attachments उघडू नका.",
        code: `# Strong Password टिप्स:
- किमान 12 characters
- uppercase + lowercase
- numbers + symbols
- शब्द/नावे नको
- प्रत्येक account ला वेगळा

# उदा.
कमकुवत: vilas123
मजबूत: V1las@2024!xZ9

# 2FA वापरा:
- SMS/App-based OTP
- Google Authenticator`,
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
        content: "विज्ञान: पाण्याचा उत्कलनांक 100°C, प्रकाशाचा वेग 3 × 10^8 m/s, सूर्य.\n\nभूगोल: माउंट एव्हरेस्ट (8,848m), भारताची राजधानी नवी दिल्ली.\n\nसंगणक: ENIAC (1946), binary system 0 आणि 1, इंटरनेट 1969.",
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
      t.categoryId.toLowerCase().includes(q) ||
      t.sections.some((s) => s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q))
  );
}

export type TutorialSummary = Pick<
  Tutorial,
  "slug" | "marathiTitle" | "summary" | "minutes" | "level" | "categoryId"
>;

export function toTutorialSummary(t: Tutorial): TutorialSummary {
  return {
    slug: t.slug,
    marathiTitle: t.marathiTitle,
    summary: t.summary,
    minutes: t.minutes,
    level: t.level,
    categoryId: t.categoryId,
  };
}
