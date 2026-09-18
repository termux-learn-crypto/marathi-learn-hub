import type { Tutorial } from "@/data/tutorials";

export const webExtra: Tutorial[] = [
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
        title: "HTML म्हणजे काय?",
        content: "HTML (HyperText Markup Language) म्हणजे वेबपेज तयार करण्यासाठी वापरली जाणारी भाषा.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? HTML चे फायदे आणि महत्त्व",
        content: "\"HTML\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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

practiceQuestions: [
      "HTML चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "HTML वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
        title: "का शिकावे? CSS ने वेबपेज सुंदर करा चे फायदे आणि महत्त्व",
        content: "\"CSS ने वेबपेज सुंदर करा\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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

practiceQuestions: [
      "CSS ने वेबपेज सुंदर करा चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "CSS ने वेबपेज सुंदर करा वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
        title: "HTML Forms म्हणजे काय?",
        content: "HTML Forms वापरून user कडून माहिती कशी घ्यावी ते शिका.\nHTML Form हा user कडून माहिती घेण्यासाठी वापरला जातो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? HTML Forms चे फायदे आणि महत्त्व",
        content: "\"HTML Forms\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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
        output: "<form action=\"/submit\" method=\"post\">\nनाव:\nईमेल:\nपासवर्ड:",
      },
    ],

practiceQuestions: [
      "HTML Forms चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "HTML Forms वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["HTML Forms", "ग्रेडियंट गणित", "Generators - संग्रहाचे कारखाने", "Performance — वेग वाढ"],
        correct: 0,
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
        title: "HTML मध्ये Links कसे बनवायचे म्हणजे काय?",
        content: "<a> tag वापरून वेबपेज दरम्यान नेव्हिगेशन कसे करायचे.\n<a> (anchor) tag हा links तयार करण्यासाठी वापरला जातो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? HTML मध्ये Links कसे बनवायचे चे फायदे आणि महत्त्व",
        content: "\"HTML मध्ये Links कसे बनवायचे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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
        output: "Google ला जा\nनवीन टॅबमध्ये\nContact वर जा",
      },
    ],

practiceQuestions: [
      "HTML मध्ये Links कसे बनवायचे? चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "HTML मध्ये Links कसे बनवायचे? वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["HTML मध्ये Links कसे बनवायचे", "ब्राउझर Storage — ठिकाणे आणि टिकाऊपणा", "Video आणि Audio — प्रगत मीडिया", "pip प्रगत - package व्यवस्थापन"],
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
        title: "का शिकावे? Flexbox ने Layout सांभाळा चे फायदे आणि महत्त्व",
        content: "\"Flexbox ने Layout सांभाळा\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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

practiceQuestions: [
      "Flexbox ने Layout सांभाळा चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "Flexbox ने Layout सांभाळा वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["Flexbox ने Layout सांभाळा", "Form Security — संरक्षणाचे नियम", "Comprehensions - प्रगत रचना", "overflow — ओघ नियम"],
        correct: 0,
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
        title: "का शिकावे? CSS Grid Layout चे फायदे आणि महत्त्व",
        content: "\"CSS Grid Layout\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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

practiceQuestions: [
      "CSS Grid Layout चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "CSS Grid Layout वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["CSS Grid Layout", "Filesystem Permissions समजून घ्या", "animation easing — गती वक्र", "Links - एका पेजवरून दुसऱ्याकडे"],
        correct: 0,
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
        title: "का शिकावे? JavaScript Functions समजून घ्या चे फायदे आणि महत्त्व",
        content: "✓ याचे फायदे:\n• कोड पुन्हा लिहावा लागत नाही\n• कोड सुटसुटीत आणि समजण्यासारखा होतो\n• Errors शोधणे सोपे होते\n\nFunction declaration, function expression आणि arrow function असे तीन प्रकार आपण पाहू शकतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

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

practiceQuestions: [
      "JavaScript Functions समजून घ्या चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा.",
      "JavaScript Functions समजून घ्या वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा.",
      "ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा.",
    ],    quiz: [
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
    
      {
        question: "ह्या धड्यात मुख्य विषय कोणता?",
        options: ["JavaScript Functions समजून घ्या", "Advanced Project - लायब्ररी व्यवस्थापन", "Functions - खऱ्या वस्तूंसारख्या", "Events — button दाबल्यावर कृती"],
        correct: 0,
      },
],
    related: ["js-basics", "python-functions", "python-for-loop"],
    prev: "js-basics",
  }
];
