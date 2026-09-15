export interface GlossaryTerm {
  term: string;
  marathiMeaning: string;
  description: string;
  category:
    | "computer"
    | "web"
    | "python"
    | "electronics"
    | "android"
    | "networking"
    | "ai";
}

export const glossaryCategoryLabels: Record<GlossaryTerm["category"], { marathi: string; english: string }> = {
  computer: { marathi: "संगणक", english: "Computer" },
  web: { marathi: "वेब", english: "Web" },
  python: { marathi: "Python प्रोग्रामिंग", english: "Python Programming" },
  electronics: { marathi: "इलेक्ट्रॉनिक्स", english: "Electronics" },
  android: { marathi: "Android", english: "Android" },
  networking: { marathi: "नेटवर्किंग", english: "Networking" },
  ai: { marathi: "AI - कृत्रिम बुद्धिमत्ता", english: "AI" },
};

export const glossary: GlossaryTerm[] = [
  // ---- संगणक / Computer ----
  { term: "CPU", marathiMeaning: "सेंट्रल प्रोसेसिंग युनिट", category: "computer", description: "संगणकाचा मेंदू — सर्व गणिते आणि सूचना पूर्ण करतो." },
  { term: "RAM", marathiMeaning: "रँडम ॲक्सेस मेमरी", category: "computer", description: "तात्पुरती मेमरी — संगणक चालू असताना माहिती ठेवते." },
  { term: "ROM", marathiMeaning: "रीड ओन्ली मेमरी", category: "computer", description: "कायम मेमरी — संगणक बंद केल्यावरही माहिती टिकवते." },
  { term: "Software", marathiMeaning: "सॉफ्टवेअर", category: "computer", description: "संगणकावर चालणारे कार्यक्रम — apps आणि programs." },
  { term: "Hardware", marathiMeaning: "हार्डवेअर", category: "computer", description: "संगणकाचे भौतिक भाग — कीबोर्ड, मॉनिटर, माउस." },
  { term: "Operating System", marathiMeaning: "ऑपरेटिंग सिस्टीम", category: "computer", description: "संगणक चालवणारा मुख्य प्रोग्राम — Windows, Linux." },
  { term: "File", marathiMeaning: "फाइल", category: "computer", description: "माहिती साठवणारी एकके — चित्र, दस्तऐवज, code." },
  { term: "Folder", marathiMeaning: "फोल्डर", category: "computer", description: "फाइल्स व्यवस्थित ठेवण्यासाठीची जागा." },
  { term: "Program", marathiMeaning: "प्रोग्राम", category: "computer", description: "विशिष्ट काम करणाऱ्या सूचनांचा क्रम." },
  { term: "Input", marathiMeaning: "इनपुट", category: "computer", description: "संगणकात दिलेली माहिती — टंकन किंवा क्लिक." },
  { term: "Output", marathiMeaning: "आउटपुट", category: "computer", description: "संगणकाने दिलेला निकाल — स्क्रीनवर दिसणारे उत्तर." },
  { term: "Compiler", marathiMeaning: "संकलक", category: "computer", description: "प्रोग्रामचे भाषांतर संगणकाला समजेल अशा भाषेत करतो." },
  { term: "Debugging", marathiMeaning: "डिबगिंग", category: "computer", description: "प्रोग्राममधील चुका शोधणे आणि दुरुस्त करणे." },
  { term: "Algorithm", marathiMeaning: "अल्गोरिदम", category: "computer", description: "समस्या सोडवण्यासाठी चरणांची स्पष्ट योजना." },
  { term: "Database", marathiMeaning: "डेटाबेस", category: "computer", description: "व्यवस्थित पद्धतीने साठवलेली माहिती." },
  { term: "Cache", marathiMeaning: "कॅश", category: "computer", description: "वारंवार वापरलेली माहिती लवकर मिळण्यासाठीची तात्पुरती साठवण." },
  { term: "Firewall", marathiMeaning: "फायरवॉल", category: "computer", description: "संगणकाला बाहेरील धोक्यांपासून वाचवणारा संरक्षण कवच." },
  { term: "Backup", marathiMeaning: "बॅकअप", category: "computer", description: "माहिती गमावल्यास परत मिळण्यासाठी घेतलेली सुरक्षित प्रत." },
  { term: "Variable", marathiMeaning: "चल", category: "computer", description: "प्रोग्राममध्ये माहिती साठवण्यासाठी दिलेले नाव." },
  { term: "Function", marathiMeaning: "फंक्शन", category: "computer", description: "विशिष्ट काम करणारा आणि पुन्हा वापरता येणारा code चा भाग." },
  { term: "Loop", marathiMeaning: "लूप", category: "computer", description: "एकच सूचना अनेक वेळा चालवणारी यंत्रणा." },
  { term: "Array", marathiMeaning: "अॅरे", category: "computer", description: "एकाच नावाने अनेक मूल्ये एकत्र ठेवणारी रचना." },
  { term: "String", marathiMeaning: "स्ट्रिंग", category: "computer", description: "अक्षरांचा क्रम — आपले नाव, वाक्य यांसारखी माहिती." },

  // ---- वेब / Web ----
  { term: "HTML", marathiMeaning: "एचटीएमएल", category: "web", description: "वेबपेजची रचना आणि सामग्री तयार करणारी भाषा." },
  { term: "CSS", marathiMeaning: "सीएसएस", category: "web", description: "वेबपेजला रंग, अंतर आणि डिझाइन देणारी भाषा." },
  { term: "JavaScript", marathiMeaning: "जावास्क्रिप्ट", category: "web", description: "वेबपेजला परस्परसंवादी आणि सजीव करणारी भाषा." },
  { term: "Browser", marathiMeaning: "ब्राउझर", category: "web", description: "वेबपेज पाहण्याचा प्रोग्राम — Chrome, Firefox." },
  { term: "Server", marathiMeaning: "सर्व्हर", category: "web", description: "माहिती आणि सेवा इतरांना पुरवणारा संगणक." },
  { term: "Client", marathiMeaning: "क्लायंट", category: "web", description: "सर्व्हरकडून माहिती मागवणारा उपकरण किंवा प्रोग्राम." },
  { term: "URL", marathiMeaning: "यूआरएल", category: "web", description: "वेबपेजचा अद्वितीय पत्ता." },
  { term: "HTTP", marathiMeaning: "एचटीटीपी", category: "web", description: "वेबवर माहिती पाठवण्याची मूलभूत पद्धत." },
  { term: "HTTPS", marathiMeaning: "एचटीटीपीएस", category: "web", description: "सुरक्षित पद्धतीने माहिती पाठवणारी वेब पद्धत." },
  { term: "API", marathiMeaning: "अॅप्लिकेशन प्रोग्रामिंग इंटरफेस", category: "web", description: "दोन सॉफ्टवेअर एकमेकांशी बोलण्याचा मार्ग." },
  { term: "Frontend", marathiMeaning: "फ्रंटएंड", category: "web", description: "वेबसाइटचा वापरकर्त्याला दिसणारा भाग." },
  { term: "Backend", marathiMeaning: "बॅकएंड", category: "web", description: "वेबसाइटच्या मागचा data आणि logic चा भाग." },
  { term: "Framework", marathiMeaning: "फ्रेमवर्क", category: "web", description: "वेबसाइट लवकर तयार करण्यासाठीची पूर्वतयार साधने." },
  { term: "Responsive", marathiMeaning: "रिस्पॉन्सिव्ह", category: "web", description: "मोबाइल आणि संगणक — दोन्हीवर व्यवस्थित दिसणारी वेबसाइट." },
  { term: "DOM", marathiMeaning: "डीओएम", category: "web", description: "वेबपेजमधील सर्व घटकांची क्रमवार रचना." },
  { term: "Deployment", marathiMeaning: "डेप्लॉयमेंट", category: "web", description: "वेबसाइट किंवा app इंटरनेटवर उपलब्ध करणे." },
  { term: "Hosting", marathiMeaning: "होस्टिंग", category: "web", description: "वेबसाइटची फाइल्स ठेवण्यासाठी इंटरनेटवर जागा घेणे." },

  // ---- Python ----
  { term: "Python", marathiMeaning: "पायथॉन", category: "python", description: "सोपी, वाचनीय आणि सुरुवात करणाऱ्यांसाठी उत्तम प्रोग्रामिंग भाषा." },
  { term: "List", marathiMeaning: "लिस्ट", category: "python", description: "अनेक मूल्ये क्रमाने एकत्र ठेवणारी रचना." },
  { term: "Dictionary", marathiMeaning: "डिक्शनरी", category: "python", description: "की आणि किंमत यांच्या जोड्या ठेवणारी रचना." },
  { term: "Tuple", marathiMeaning: "टपल", category: "python", description: "एकदा बनवल्यावर बदलता न येणारी रचना." },
  { term: "Class", marathiMeaning: "क्लास", category: "python", description: "ऑब्जेक्ट तयार करण्यासाठीचा आराखडा." },
  { term: "Object", marathiMeaning: "ऑब्जेक्ट", category: "python", description: "क्लासच्या आधारे तयार केलेली वास्तव रचना." },
  { term: "Module", marathiMeaning: "मॉड्यूल", category: "python", description: "फंक्शन्स आणि variable असलेली Python फाइल." },
  { term: "Package", marathiMeaning: "पॅकेज", category: "python", description: "एकत्र गोळा केलेले अनेक मॉड्यूल." },
  { term: "Exception", marathiMeaning: "अपवाद", category: "python", description: "प्रोग्राममध्ये आलेली चूक जी सांभाळता येते." },
  { term: "Boolean", marathiMeaning: "बुलियन", category: "python", description: "फक्त सत्य किंवा असत्य असणारी किंमत." },
  { term: "Integer", marathiMeaning: "पूर्णांक", category: "python", description: "दशांश नसलेली संख्या — उदा. 17." },
  { term: "Float", marathiMeaning: "फ्लोट", category: "python", description: "दशांश असलेली संख्या — उदा. 3.5." },

  // ---- इलेक्ट्रॉनिक्स / Electronics ----
  { term: "Resistor", marathiMeaning: "रेझिस्टर", category: "electronics", description: "विद्युत प्रवाह कमी किंवा नियंत्रित करणारा घटक." },
  { term: "Capacitor", marathiMeaning: "कॅपॅसिटर", category: "electronics", description: "विद्युत ऊर्जा तात्पुरत्या स्वरूपात साठवणारा घटक." },
  { term: "Transistor", marathiMeaning: "ट्रान्झिस्टर", category: "electronics", description: "सिग्नल वाढवणारा किंवा स्विच म्हणून काम करणारा घटक." },
  { term: "Diode", marathiMeaning: "डायोड", category: "electronics", description: "विद्युत प्रवाह एका दिशेने मात्र नेणारा घटक." },
  { term: "LED", marathiMeaning: "एलईडी", category: "electronics", description: "कमी वीज वापरून प्रकाश देणारा घटक." },
  { term: "Circuit", marathiMeaning: "सर्किट", category: "electronics", description: "विद्युत घटकांच्या जोडण्यांनी बनलेले जाळे." },
  { term: "Microcontroller", marathiMeaning: "मायक्रोकंट्रोलर", category: "electronics", description: "स्वतः प्रोग्राम चालवणारी छोटी संगणक चिप — Arduino." },
  { term: "PWM", marathiMeaning: "पीडब्ल्यूएम", category: "electronics", description: "सिग्नल पटकन चालू-बंद करून वेग किंवा चमक नियंत्रित करणारी पद्धत." },
  { term: "Sensor", marathiMeaning: "सेन्सर", category: "electronics", description: "तापमान, प्रकाश किंवा अंतर यांसारखी माहिती मोजणारा घटक." },
  { term: "Signal", marathiMeaning: "सिग्नल", category: "electronics", description: "माहिती वाहून नेणारा विद्युत प्रवाह किंवा लहर." },
  { term: "Voltage", marathiMeaning: "व्होल्टेज", category: "electronics", description: "विद्युत प्रवाहाला ढकलणारी ऊर्जा — दाब." },
  { term: "Relay", marathiMeaning: "रिले", category: "electronics", description: "कमी वीजेच्या सिग्नलने मोठे यंत्र चालू-बंद करणारा घटक." },

  // ---- Android ----
  { term: "APK", marathiMeaning: "एपीके", category: "android", description: "Android app ची स्थापना करण्यासाठीची फाइल." },
  { term: "Activity", marathiMeaning: "ॲक्टिव्हिटी", category: "android", description: "Android app मधली एक स्क्रीन किंवा पडदा." },
  { term: "Manifest", marathiMeaning: "मॅनिफेस्ट", category: "android", description: "app च्या परवानग्या आणि विवरण असलेली फाइल." },
  { term: "SDK", marathiMeaning: "एसडीके", category: "android", description: "app बनवण्यासाठी लागणाऱ्या साधनांचा संच." },
  { term: "Emulator", marathiMeaning: "इम्युलेटर", category: "android", description: "संगणकावरच मोबाइल सारखं वातावरण चालवणारी साधने." },

  // ---- नेटवर्किंग / Networking ----
  { term: "WiFi", marathiMeaning: "वायफाय", category: "networking", description: "तारेशिवाय इंटरनेट जोडण्याची लोकप्रिय पद्धत." },
  { term: "Bluetooth", marathiMeaning: "ब्लूटूथ", category: "networking", description: "जवळच्या उपकरणांमध्ये तारेशिवाय माहिती पाठवण्याची पद्धत." },
  { term: "IP Address", marathiMeaning: "आयपी पत्ता", category: "networking", description: "नेटवर्कवरील प्रत्येक उपकरणाचा अद्वितीय पत्ता." },
  { term: "Router", marathiMeaning: "राउटर", category: "networking", description: "इंटरनेट माहिती योग्य उपकरणांपर्यंत पाठवणारे साधन." },
  { term: "DNS", marathiMeaning: "डीएनएस", category: "networking", description: "साइटचे नाव संगणकाला समजणाऱ्या पत्त्यात बदलणारी प्रणाली." },
  { term: "Cloud", marathiMeaning: "क्लाउड", category: "networking", description: "इंटरनेटवरील दूरस्थ सर्व्हरवर माहिती आणि सेवा साठवणे." },

  // ---- AI ----
  { term: "AI", marathiMeaning: "कृत्रिम बुद्धिमत्ता", category: "ai", description: "मशीनला विचार, समज आणि शिकण्याची क्षमता देणारे तंत्र." },
  { term: "Machine Learning", marathiMeaning: "मशीन लर्निंग", category: "ai", description: "मशीनला माहितीवरून स्वतः शिकण्याची पद्धत." },
  { term: "IoT", marathiMeaning: "इंटरनेट ऑफ थिंग्ज", category: "ai", description: "घरगुती उपकरणे एकमेकांशी आणि इंटरनेटशी जोडणारे तंत्र." },
  { term: "Data", marathiMeaning: "माहिती - डेटा", category: "ai", description: "संगणक प्रक्रिया करण्यासाठी वापरत असलेली कच्ची माहिती." },
];

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = query.trim().toLowerCase();
  if (!q) return glossary;
  return glossary.filter(
    (t) =>
      t.term.toLowerCase().includes(q) ||
      t.marathiMeaning.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q)
  );
}