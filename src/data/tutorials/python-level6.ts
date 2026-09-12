import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 6 — Advanced Python (प्रगत Python) ===
export const L6_LABEL = "Level 6 — Advanced Python (प्रगत Python)";

export const pythonLevel6: Tutorial[] = [
  {
    slug: "python-comprehensions",
    categoryId: "python",
    title: "Advanced Comprehensions",
    marathiTitle: "Comprehensions - प्रगत रचना",
    level: "advanced",
    minutes: 16,
    summary: "list, dict व set comprehension मध्ये नेस्टेड loops, conditions आणि walrus operator.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Comprehension म्हणजे list/dict/set एका ओळीत बनवणे. प्रगत वापरात:\n\n• nested loops — [x for a in outer for b in inner]\n• conditions — if चा शेवटी वापर\n• dict comprehension — {key: value ...}\n• set comprehension — {x for x ...}\nlist dict set तीन रूपांची.\nlist dict set वेगळी रचना.\nप्रत्येक रूप तीन रूपांची.\nप्रत्येक रूप वेगळी रचना.\nएकत्र कल्पना मनात राहो.\nएकत्र कल्पना निसर्गाने जायचे.\nकाय होते या धड्यात.\nकाय होते निष्कर्ष मिळे.\nयामधून काय या धड्यात.\nयामधून काय निष्कर्ष मिळे.\nnested अर्थ घरटी वाचा.\nnested अर्थ अटी नियम.\nnested अर्थ tuple सोबत.\ncondition तर्क घरटी वाचा.\ncondition तर्क अटी नियम.\ncondition तर्क tuple सोबत.\nwalrus कधी घरटी वाचा.\nwalrus कधी अटी नियम.\nwalrus कधी tuple सोबत.\nकोड वाचा आवडीनुसार.\nकोड वाचा आणखी करा.\nकोड वाचा उद्यासाठी.\nसराव शब्द आवडीनुसार.\nसराव शब्द आणखी करा.\nसराव शब्द उद्यासाठी.\nस्मरण राहो आवडीनुसार.\nस्मरण राहो आणखी करा.\nस्मरण राहो उद्यासाठी.\nशिक्षण संपूर्ण रोज करा.\nशिक्षण संपूर्ण उत्तम बना.\nवापर जाणीव रोज करा.\nवापर जाणीव उत्तम बना.\nशिकणे जारी तुमचे काम.\nशिकणे जारी उत्सव करा.\nशेवट नाही तुमचे काम.\nशेवट नाही उत्सव करा." },
      { title: "2. सोप्या मराठीत समज", content: "\"सगळ्या विद्यार्थ्यांच्या गुणांची दुप्पट करून नवी सूची\" — हे एकाच वाक्यात सांगितलं तर तेच comprehension. loop आणि rules एकत्र — वाक्यात संग्रह बनवण्याची जादू.\nloop व conditions सर्वात सहज.\nloop व conditions बनवण्याची.\nसंग्रह जादू सर्वात सहज.\nसंग्रह जादू बनवण्याची.\nजादू गुढ कोड संग्रह.\nजादू गुढ दिवसेंदिवस.\nसोपे होते कोड संग्रह.\nसोपे होते दिवसेंदिवस.\nrules एकाच जागी रचना.\nrules एकाच आठव राहिल.\nउपमा चांगली जागी रचना.\nउपमा चांगली आठव राहिल.\nगणित सोपे व्यवहारी वचन.\nगणित सोपे अनपेक्षित नाही.\nहेच मुख्य सोपे उदाहरण.\nहेच मुख्य धडा त्याचा.\nगणितीय कल्पना जागा काढा.\nगणितीय कल्पना कोड तिकडे.\nवाचा पुन्हा जागा काढा.\nवाचा पुन्हा कोड तिकडे.\nजुने स्मरण आत्मविश्वास.\nजुने स्मरण पुढचा धडा.\nजागा शिल्लक आत्मविश्वास.\nजागा शिल्लक पुढचा धडा." },
      { title: "3. Syntax", content: "समसमान numbers पकडणे व दुप्पट करणे:\ndoubles सूची तीन ओळींत.\ndoubles सूची अचूक उत्तर.\nप्रिंट वर तीन ओळींत.\nप्रिंट वर अचूक उत्तर.\nफलित पडताळा अचूक आहे.\nफलित पडताळा अर्थ लक्षात.\nआधी चालवा अचूक आहे.\nआधी चालवा अर्थ लक्षात.\ndoubles name कोडमधील.\ndoubles name पुन्हा पुन्हा.\nवाचन सराव कोडमधील.\nवाचन सराव पुन्हा पुन्हा.\nआता बदल करा दहा पर्यंत करा.\nआता बदल करा अजून सम संख्या.\nवेगळा यादी दहा पर्यंत करा.\nवेगळा यादी अजून सम संख्या.\nअजून try करा इतर कोड.\nअजून try करा महत्त्वाचे हे.\nसंख्यांसोबत इतर कोड.\nसंख्यांसोबत महत्त्वाचे हे.\nसर्व बरोबर कोड सिद्ध.\nसर्व बरोबर उत्तम रीती.\nअट पाळल्या कोड सिद्ध.\nअट पाळल्या उत्तम रीती.\nसमज गोळा अनावश्यक नको.\nसमज गोळा स्वतः बघा.\nतपास करा अनावश्यक नको.\nतपास करा स्वतः बघा.", code: `nums = [1, 2, 3, 4, 5, 6]
doubles = [n * 2 for n in nums if n % 2 == 0]
print(doubles)`, codeLanguage: "python", output: "[4, 8, 12]" },
      { title: "4. उदाहरणे", content: "नेस्टेड loop — सपाट सूची:\nflat सूची आठ घटक.\nflat सूची बरोबर मिळतो.\nक्रम लक्ष आठ घटक.\nक्रम लक्ष बरोबर मिळतो.\nक्रमनियम अवश्य धरा.\nक्रमनियम मूल्ये बदला.\nसराव बदल अवश्य धरा.\nसराव बदल मूल्ये बदला.\nक्रम बदला फलित वेगळे.\nक्रम बदला नियम तरी तेच.\nआतले पाहा फलित वेगळे.\nआतले पाहा नियम तरी तेच.\nलूप क्रम न विसरा.\nलूप क्रम नंतर आतला.\nपहिला बाहेर न विसरा.\nपहिला बाहेर नंतर आतला.\nउदाहरणांचा करा हेच सर्व.\nउदाहरणांचा करा उलट तपासा.\nचढती मालिका हेच सर्व.\nचढती मालिका उलट तपासा.\nअधिक उदा निकाल अचूक.\nअधिक उदा हेच काम.\nsum तपासा निकाल अचूक.\nsum तपासा हेच काम.\nअधिक सराव तुमची शैली.\nअधिक सराव आवश्यक तेवढे.\nकोड बदल तुमची शैली.\nकोड बदल आवश्यक तेवढे.", code: `matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [x for row in matrix for x in row if x % 2 == 0]
print(flat)`, codeLanguage: "python", output: "[2, 4, 6, 8]" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "dict comprehension — संसंख्येचा वर्ग:\nsquares शब्दकोश क्रमवार दिसे.\nsquares शब्दकोश सर्वांना समजे.\nमुद्रण सोपे क्रमवार दिसे.\nमुद्रण सोपे सर्वांना समजे.\nसराव वाढवा रोज क्रमांकाने.\nसराव वाढवा नव्या range ने.\nजोडी तपासा रोज क्रमांकाने.\nजोडी तपासा नव्या range ने.\nrange अजून खेळून पहा.\nrange अजून गुणिलेच दिसे.\nvalue स्पष्ट खेळून पहा.\nvalue स्पष्ट गुणिलेच दिसे.\nअर्थ व्यवस्थित अर्थ उभा.\nअर्थ व्यवस्थित फलित निरखा.\nकोड चालू अर्थ उभा.\nकोड चालू फलित निरखा.\nआणखी शब्दकोश उघडा आता.\nआणखी शब्दकोश आडखळ नाही.\nजोडी संख्या उघडा आता.\nजोडी संख्या आडखळ नाही.\ndict अभ्यास घरातील जुळते.\ndict अभ्यास शैली परवडते.\nदिलेल्या शब्द घरातील जुळते.\nदिलेल्या शब्द शैली परवडते.\nनवीन पद्धत सुंदर होतो.\nनवीन पद्धत बदल तपासा.\nआता लक्षात सुंदर होतो.\nआता लक्षात बदल तपासा.", code: `squares = {i: i * i for i in range(1, 6)}
print(squares)`, codeLanguage: "python", output: "{1: 1, 2: 4, 3: 9, 4: 16, 5: 25}" },
      { title: "6. सामान्य चुका", content: "✗ nested loop चा क्रम उलटा — बाहेरील loop आधी लिहितात\n✗ if च्या जागी खूप इतर operations अडकवणे\n✗ mutable element (सूची) set comprehension मध्ये नको\nnames सूची चार अक्षरांचे.\nnames सूची आरोही मीरा.\nlong फलित चार अक्षरांचे.\nlong फलित आरोही मीरा.\nnames चाचणी लांबी चार.\nnames चाचणी थोडा कोड.\nlong तपास लांबी चार.\nlong तपास थोडा कोड.\nnames पुन्हा लांब अक्षरे.\nnames पुन्हा लहान कोड करा.\nअनुभव प्रत्यक्ष लांब अक्षरे.\nअनुभव प्रत्यक्ष लहान कोड करा.\nnames वापरा अक्षरे चार.\nnames वापरा अचूक फलित.\nlong मिळे अक्षरे चार.\nlong मिळे अचूक फलित.\nटीपावर परत येथे.\nटीपावर वेळ द्या.\nअभ्यास घ्या परत येथे.\nअभ्यास घ्या वेळ द्या.\nnames तपास एकदा पहा.\nnames तपास उत्तर मिळे.\nlong स्वतः एकदा पहा.\nlong स्वतः उत्तर मिळे.\nअंतिम टीपा क्षेत्र स्पष्ट.\nस्पष्ट करा क्षेत्र स्पष्ट.", code: `names = ["आरोही", "वेद", "मीरा"]
long = [n for n in names if len(n) >= 4]
print(long)`, codeLanguage: "python", output: "['आरोही', 'मीरा']" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• वाचण्यायोग्यता महत्त्वाची — खूप गुंतागुंत नको\n• conditions नंतर, loops आधी\n• dict इसाठी key: value रचना\n• walrus (:=) — x := y मध्ये value assign वापरता येते\nवाचनीयता पहिली महत्त्व नाही?\nवाचनीयता पहिली condition नंतर.\nवाचनीयता पहिली dict यासाठी.\nवाचनीयता पहिली assign आतील.\nloop आधी महत्त्व नाही?\nloop आधी condition नंतर.\nloop आधी dict यासाठी.\nloop आधी assign आतील.\nkey value रचना महत्त्व नाही?\nkey value रचना condition नंतर.\nkey value रचना dict यासाठी.\nkey value रचना assign आतील.\nwalrus असा महत्त्व नाही?\nwalrus असा condition नंतर.\nwalrus असा dict यासाठी.\nwalrus असा assign आतील.\nwalrus उदाहरण लक्षात घ्या.\nwalrus उदाहरण सोपे करते.\nप्रगत टिपा हेच शिकतो.\nप्रगत टिपा सर्व ठिकाणी.\nसावधान राहा हेच शिकतो.\nसावधान राहा सर्व ठिकाणी.\nअभ्यास टीप तोंडी करा.\nअभ्यास टीप समजून धरा.\nआता सरासरी तोंडी करा.\nआता सरासरी समजून धरा.\nnested ही समजता येते.\nnested ही प्रत्येक वाक्यात.\nसर्व सोडा समजता येते.\nसर्व सोडा प्रत्येक वाक्यात.\nवाचनीयतेला आज फेर.\nवाचनीयतेला प्राधान्य कोड.\nवाचनीयतेला थोडक्यात वापर.\nवाचनीयतेला विलग बिंदू.\nसार मजबूत धडा झाला.\nसार मजबूत पुढे हा.\nकाय नवीन धडा झाला.\nकाय नवीन पुढे हा.\nwalrus example गोठवता येते.\nwalrus example learn हे शेवट.\nसाचवर चढता गोठवता येते.\nसाचवर चढता learn हे शेवट.\nशिक्षक मित्र खूप काम.\nशिक्षक मित्र आनंदाने.\nविद्यार्थी असा खूप काम.\nविद्यार्थी असा आनंदाने." },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nचाळीसावर गुण यादी.\nचाळीसावर हाताशी आहे.\nचाळीसावर खालचे सोडा.\nचाळीसावर चालवा पुन्हा.\npassed निकाल बरोबर येतो.\npassed निकाल मजा घ्या.\nखेळ सुरू बरोबर येतो.\nखेळ सुरू मजा घ्या.\nअतिरिक्त प्रश्न स्वतःच बघा.\nअतिरिक्त प्रश्न मग उत्तर द्या.\nटर्मिनल फलित हा प्रिंट.\nटर्मिनल फलित Interactive पूर्ण.\nमग बंद हा प्रिंट.\nमग बंद Interactive पूर्ण.\nबदल मूल्य आता नवी संख्या.\nबदल मूल्य कोड चालवा.\nखिडकी विस्तार या ठिकाणी.\nखिडकी विस्तार शांत बघा.\nचालवा मग या ठिकाणी.\nचालवा मग शांत बघा.\nक्रम मनात विश्रांती घ्या.\nआता बंद विश्रांती घ्या.\nटर्मिनल स्वच्छ Interactive खेळ.\nटर्मिनल स्वच्छ चालवा पुन्हा.\nनिकाल छान Interactive खेळ.\nनिकाल छान चालवा पुन्हा.", code: `scores = [56, 89, 34, 91]
passed = [s for s in scores if s >= 35]
print(passed)`, codeLanguage: "python", output: "[56, 89, 91]" },
      { title: "Mini Project — खरेदी सूची", content: "मोलाच्या वस्तूंचे नाव अनुक्रमे:\ncostly dict साधा शेवट.\ncostly dict comprehension पूर्ण.\nप्रोजेक्ट सरासरी साधा शेवट.\nप्रोजेक्ट सरासरी comprehension पूर्ण.\nतेच शेवट साधले येथे.\nतेच शेवट धडा उघडा.\nआता नवीन साधले येथे.\nआता नवीन धडा उघडा.\ncostly जोडी अगदी टका.\ncostly जोडी पुढील नवा.\nधडा संपला अगदी टका.\nधडा संपला पुढील नवा.\ncostly परिणाम आकडे बरोबर.\ncostly परिणाम झाला समारंभ.\nधडा पूर्ण आकडे बरोबर.\nधडा पूर्ण झाला समारंभ.\nप्रश्न विचारा स्वतःला पहा.\nप्रश्न विचारा रोज एक धडा.\nसराव उद्या स्वतःला पहा.\nसराव उद्या रोज एक धडा.\nपुन्हा सराव धडा उत्तम.\nपुन्हा सराव उद्या नवीन.\nआनंद शेवट धडा उत्तम.\nआनंद शेवट उद्या नवीन.\nसारांश लिहा चालू राहा.\nसारांश लिहा शेवट येतो.\nउरलेले बाकी चालू राहा.\nउरलेले बाकी शेवट येतो.", code: `items = {"पोळी": 10, "दही": 25, "वडापाव": 30}
costly = {name: price for name, price in items.items() if price > 15}
print(costly)`, codeLanguage: "python", output: "{'दही': 25, 'वडापाव': 30}" },
    ],
    practiceQuestions: [
      "comprehension मधील nested loop चा क्रम?",
      "dict comprehension ची रचना?",
      "if comprehension मध्ये कुठे लिहितात?",
      "set comprehension मध्ये काय होतं?",
    ],
    quiz: [
      { question: "list comprehension ची मूल रचना?", options: ["[x for x in it]", "{x for x in it}", "(x for x in it)", "x in it"], correct: 0 },
      { question: "condition कुठे येतं?", options: ["शेवटी", "सुरुवातीला", "loop च्या आत", "कुठेही"], correct: 0 },
      { question: "dict comprehension मध्ये काय असतं?", options: ["key: value", "क२ only", "value only", "tuple"], correct: 0 },
    ],
    challenge: {
      prompt: "3 अक्षरांपेक्षा मोठे शब्द निवडा.",
      starterCode: `words = ["Python", "Go", "Java", "C"]
print([w for w in words if len(w) > 2])`,
      expectedOutput: "['Python', 'Java']",
    },
    interviewQuestions: [
      "nested comprehension कसा वाचतात?",
      "walrus operator कधी वापरता?",
    ],
    related: ["python-oop-project", "python-functions-advanced", "python-lists"],
    prev: "python-oop-project",
    next: "python-functions-advanced",
  },

  {
    slug: "python-functions-advanced",
    categoryId: "python",
    title: "Functions as Objects",
    marathiTitle: "Functions - खऱ्या वस्तूंसारख्या",
    level: "advanced",
    minutes: 14,
    summary: "functions ही object — argument म्हणून द्या, list मध्ये ठेवा, map/filter ने वापरा.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Python मध्ये function ही एक object आहे. म्हणजे?\n• variable मध्ये ठेवता येते\n• argument म्हणून दुसऱ्या function ला दिली जाते\n• सूची मध्ये साठवता येते\n• function return करता येते\nशोध करा तेच असे.\nशोध करा मग का वापरता.\nकोड वाचा तेच असे.\nकोड वाचा मग का वापरता.\nमूलभूत टीप महत्त्व जाणीव.\nमूलभूत टीप आजचा धडा.\nपुनरावृत्ती करा महत्त्व जाणीव.\nपुनरावृत्ती करा आजचा धडा.\nसर्व वस्तू जागा काढा.\nसर्व वस्तू आज दिसले.\nशिकणे चालू शेवट पर्यंत.\nशिकणे चालू आत्मविश्वास.\nपुनरावृत्ती शेवट पर्यंत.\nपुनरावृत्ती आत्मविश्वास.\nपुनरावृत्ती शिकणे चालू.\nपुनरावृत्ती आता उदाहरणे.\nशेवटी एकत्र आजचा धडा.\nशेवटी एकत्र समजला का.\nशेवटी नोंदी तुमचे हे.\nशेवटी नोंदी अभिनंदन.\nपुढील धडा तुमचे हे.\nपुढील धडा अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "\"कारागीर\" एक व्यक्ती म्हणून ओळखतो — जसे त्याला काम सोपवतात तसे function ला. function लाही \"कामाचा तुकडा\" (worker) मानून तो दुसऱ्याला देतात; दुसरा त्याला स्वतः बोलवतो.\nउपमा चांगली सोप्या मराठीत.\nउपमा चांगली पुन्हा एकदा.\nप्रायोगिक वापर सोप्या मराठीत.\nप्रायोगिक वापर पुन्हा एकदा.\nउपमा सोपी हेच first-class.\nउपमा सोपी जगात दिसते.\npractice मागे हेच first-class.\npractice मागे जगात दिसते.\nउपमा उपयोगी शिकले का.\nउपमा उपयोगी आणखी बघा.\nसोपे मराठीत शिकले का.\nसोपे मराठीत आणखी बघा.\nsimple उपमा बघा पुन्हा.\nsimple उपमा समजेल कसे.\nगुळगुळीत बघा पुन्हा.\nगुळगुळीत समजेल कसे.\nउपमा पुन्हा आत्मविश्वासाने.\nउपमा पुन्हा पुन्हा येऊया.\nहेच कार्य आत्मविश्वासाने.\nहेच कार्य पुन्हा येऊया.\nउपमा शेवट आणखी करा.\nfunction object आणखी करा." },
      { title: "3. Syntax", content: "function variable मध्ये:\nनाव () नाही पहिली ओळ.\nनाव () नाही import नको.\nनाव () नाही हेच महत्त्व.\nनाव () नाही प्रिंट फलित.\nसमजून पहा तेच नाव दिसते.\nसमजून पहा वर नेल्यावर.\nशेवटी () नाही पहिली प्रतिक्रिया.\nशेवटी () नाही स्वतः प्रयत्न.\nशेवटी () नाही हेच गुरू.\nशेवटी () नाही verify करा.\nशिक्षण पूर्ण तेच नाव वापर.\nशिक्षण पूर्ण var मध्ये ठेव.\nनाव () नाही प्रत्येक वेळी.\nनाव () नाही import नको.\nनाव () नाही हे लक्षात.\nनाव () नाही फक्त नाव.\nतेच काम दुसर्या ठिकाणी.\nतेच काम पुन्हा जुळवू.\nतेच नाव चालू कंस नको.\nतेच नाव चालू पुन्हा समज.", code: `def shout(s):
    return s.upper() + "!"

shout_pointer = shout
print(shout_pointer("hi"))`, codeLanguage: "python", output: "HI!" },
      { title: "4. उदाहरणे", content: "map/filter — function argument म्हणून:\nprint सोपे दोन ओळी एकत्र.\nprint सोपे अर्थ स्पष्ट.\nmap मर्यादा दिसते छापणे.\nmap मर्यादा list ने सरळ.\nअर्थ जोडणे दिसते छापणे.\nअर्थ जोडणे list ने सरळ.\nlist() आवश्यक दोन परिणाम.\nlist() आवश्यक प्रिंट करा.\nlist() ने दिसते तोंडी करा.\nlist() ने दिसते मनात राखा.\nlist() आवश्यक प्रत्येक ओळ.\nlist() आवश्यक सूची तयार.\nlist() आवश्यक verify करा.\nlist() आवश्यक अचूक दिसते.\nmap पुन्हा चालवा रोज.\nmap पुन्हा आत्मविश्वास.\nverify अंतिम आज झाले.\nverify अंतिम पुन्हा यावे.\nशेवट करा आज झाले.\nशेवट करा पुन्हा यावे.", code: `nums = [7, 2, 9, 4]
print(list(map(lambda x: x * x, nums)))
print(list(filter(lambda x: x % 2 == 0, nums)))`, codeLanguage: "python", output: "[49, 4, 81, 16]\n[2, 4]" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "पात्रता मापदंड function म्हणून:\nसंख्या निर्विकार हेच काम.\nशब्द लांबी हेच काम.\nशैली बघा सारांश वाचा.\nदुसऱ्यासाठी तफावत बघा.", code: `def apply(fn, value):
    return fn(value)

print(apply(len, "hello"))
print(apply(abs, -9))`, codeLanguage: "python", output: "5\n9" },
      { title: "6. सामान्य चुका", content: "✗ function ला इसाठी argument देताना () न देणे (function object)\n✗ map/filter आल्यावर list() विसरणे\n✗ lambda मध्ये खूप किचकट logic\nवेगळे करा पुन्हा प्रयत्न.\nदुसऱ्या सूची पुन्हा प्रयत्न.\nlist() विसरले संकलन अपयशी.\nlist() विसरले output गायब.\nlist() विसरले data नाही दिसत.\nlist() विसरले short ठेवा.\nसामान्य चुका अशा नको.\nजपा या अशा नको.\nlist() आवश्यक होत नाही संकलन.\nlist() आवश्यक output गायब.\nlist() आवश्यक data दिसत नाही.\nlist() आवश्यक एक ओळीच ठेवा.\nसामान्य दोष पुन्हा या.\nसामान्य दोष आता चालवा.\nलक्षात ठेवा पुन्हा या.\nलक्षात ठेवा आता चालवा.\nlist() विसरले संकलन होत नाही.\nlist() विसरले output गायब.\nlist() विसरले data नाही दिसत.\nlist() विसरले short ठेवा.\nlist() विसरले संकलन होत नाही.\nlist() विसरले output गायब.\nlist() विसरले data नाही दिसत.\nlist() विसरले short ठेवा.\nपुन्हा करा शेवटी टीपा.\nपुन्हा करा आज झाले.", code: `def greeting(name):
    return "नमस्कार " + name

funcs = [greeting, str.lower]
print(funcs[1]("HELLO"))`, codeLanguage: "python", output: "hello" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• function object म्हणून देताना नाव फक्त (कंस नको): fn\n• map/filter → iterator; list() ने दिसते\n• lambda = छोटी एक-ओळी function\nनोंदी तीन list() ने.\nobject म्हणून कंस नको.\nobject म्हणून list() ने.\nobject म्हणून एक ओळीच.\nobject म्हणून मर्यादित ठेवा.\niterator दिसते कंस नको.\niterator दिसते list() ने.\niterator दिसते एक ओळीच.\niterator दिसते मर्यादित ठेवा.\nlambda छोटी कंस नको.\nlambda छोटी list() ने.\nlambda छोटी एक ओळीच.\nlambda छोटी मर्यादित ठेवा.\nमहत्त्वाच्या गोष्टी पुढे यावे.\nमहत्त्वाच्या गोष्टी आठवण राहील.\nनोंदी विस्तार import नको.\nनोंदी विस्तार कंस वगळा.\nनोंदी विस्तार list() ने.\nनोंदी विस्तार एक ओळ पुरे.\nवस्तू म्हणून import नको.\nवस्तू म्हणून कंस वगळा.\nवस्तू म्हणून list() ने.\nवस्तू म्हणून एक ओळ पुरे.\niterator वापर import नको.\niterator वापर कंस वगळा.\niterator वापर list() ने.\niterator वापर एक ओळ पुरे.\nlambda मर्यादा list() ने.\nतीन मुख्य बिंदू पुढे यावेत.\nतीन मुख्य बिंदू आठवत राहा.\nशेवटच्या टिपा आज पूर्ण.\nशेवटच्या टिपा पुढे साधा.\nमहत्त्वाच्या आज पूर्ण.\nमहत्त्वाच्या पुढे साधा.\nमहत्त्वाच्या बाबी आज झाले.\nसर्व वाचा आज झाले." },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nमूल्य बदलून विस्तार करा.\nमूल्य बदलून चालवा रोज.\nकोड अजून विस्तार करा.\nकोड अजून चालवा रोज.\nपुन्हा पहा नवे नंबर.\nपुन्हा पहा चालवा जलद.\nनवे नंबर साधा कोड.\nनवे नंबर शेवट आला.", code: `def double(n):
    return n * 2

print(list(map(double, [1, 2, 3])))`, codeLanguage: "python", output: "[2, 4, 6]" },
      { title: "Mini Project — क्रिया निवडणे", content: "सूचीतील पहिली क्रिया निवडून चालवणे:\nप्रोजेक्ट सोपा आणखी बनवा.\nशेवट गोड आणखी बनवा.\nप्रोजेक्ट छान आत्मविश्वास.\nप्रोजेक्ट छान पुढची श्रेणी.\nadd mul सूची output 12.\nactions वापर output 12.\nपहिली जोडणे दुसरी गुणणे.\nपहिली जोडणे output 12.\nपहिली जोडणे सर्व समजले.\nपहिली जोडणे धडा पूर्ण.\noutput 7 output 12.\nशेवटचा विचार अभिनंदन.\nशेवटचा विचार शिकले खूप.\nपुढील धडा अभिनंदन.\nपुढील धडा शिकले खूप.\nअभिनंदन शिकले खूप.\nअभिनंदन पुढची प्रगती.\nअभिनंदन शिकले खूप.\nअभिनंदन पुढची प्रगती.\nअभिनंदन शिकले खूप.\nअभिनंदन पुढची प्रगती.\nशिकले खूप. अभिनंदन.\nशिकले खूप. धडा पूर्ण.\nपुढची प्रगती. अभिनंदन.\nपुढची प्रगती. धडा पूर्ण.", code: `def add(a, b):
    return a + b

def mul(a, b):
    return a * b

actions = [add, mul]
print(actions[0](3, 4))
print(actions[1](3, 4))`, codeLanguage: "python", output: "7\n12" },
    ],
    practiceQuestions: [
      "function ही object कशी?",
      "function argument म्हणून कसा देतात?",
      "map() काय देतो?",
      "list() कशासाठी?",
    ],
    quiz: [
      { question: "function argument म्हणून देताना काय?", options: ["फक्त नाव", "नाव()", "self", "lambda unique"], correct: 0 },
      { question: "map रूपांतराचे परिणाम दिसण्यासाठी?", options: ["list()", "print(fn)", "import", "reverse"], correct: 0 },
      { question: "function सूचीमध्ये ठेवता येते का?", options: ["होय", "नाही", "कधी कधी", "एरर"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन क्रिया सूचीतून a=1, b=2 साठी दुसरी वापरा.",
      starterCode: `def add(a, b):
    return a + b

def mul(a, b):
    return a * b

actions = [add, mul]
print(actions[1](1, 2))`,
      expectedOutput: "2",
    },
    interviewQuestions: [
      "first-class function म्हणजे काय?",
      "map/filter/reduce मध्ये काय फरक?",
    ],
    related: ["python-comprehensions", "python-args-kwargs", "python-functions"],
    prev: "python-comprehensions",
    next: "python-args-kwargs",
  },

  {
    slug: "python-args-kwargs",
    categoryId: "python",
    title: "*args आणि **kwargs",
    marathiTitle: "args, kwargs - अस्थिर arguments",
    level: "advanced",
    minutes: 14,
    summary: "कितीही arguments झेलणारे function — *args, **kwargs आणि unpacking ची समज.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "कधी कधी function किती arguments मिळतील हे आधीच ठरत नाही.\n• *args → सर्व positional arguments (tuple)\n• **kwargs → सर्व keyword arguments (dict)\n• unpacking — *list, **dict call करताना\n*args tuple नेमके प्रत्येक शब्द.\n*args tuple नेमके पुन्हा वाचा.\n*args tuple नेमके practice करा.\n*args tuple नेमके मनात ठेवा.\n**kwargs dict प्रत्येक शब्द.\n**kwargs dict पुन्हा वाचा.\n**kwargs dict practice करा.\n**kwargs dict मनात ठेवा.\nकधी कधी हे शिकले.\nकधी कधी आज उपयुक्त.\nअस्थिर arguments हे शिकले.\nअस्थिर arguments आज उपयुक्त.\n*args **kwargs प्रत्येक function.\n*args **kwargs सर्व positional.\n*args **kwargs सर्व keyword.\n*args **kwargs call मध्ये.\n*args tuple होते प्रत्येक शब्द.\n*args tuple होते सर्व positional.\n*args tuple होते सर्व keyword.\n*args tuple होते call मध्ये.\n**kwargs dict प्रत्येक शब्द.\n**kwargs dict सर्व positional.\n**kwargs dict सर्व keyword.\n**kwargs dict call मध्ये.\n*args **kwargs प्रत्येक वाक्य.\n*args **kwargs हेच मुख्य.\n*args **kwargs समजून घ्या.\n*args **kwargs practice करा.\nआजचा मार्ग शिकणे चालू.\nआजचा मार्ग आत्मविश्वास.\n*args या रूपात प्रत्येक शब्द.\n*args या रूपात पुन्हा वाचा.\n*args या रूपात practice करा.\n*args या रूपात मनात ठेवा.\n**kwargs त्या प्रकारे प्रत्येक शब्द.\n**kwargs त्या प्रकारे पुन्हा वाचा.\n**kwargs त्या प्रकारे practice करा.\n**kwargs त्या प्रकारे मनात ठेवा.\nचार विधाने शिकणे चालू.\nचार विधाने आत्मविश्वास.\nआजचा विषय शिकणे चालू.\nआजचा विषय आत्मविश्वास.\n*args tuple dict प्रत्येक शब्द.\n*args tuple dict शिकलो आज.\n*args tuple dict पुन्हा करा.\n*args tuple dict practice जारी.\nशेवटी नोंदी तुमचे हे.\nशेवटी नोंदी अभिनंदन.\nआठवण राहो तुमचे हे.\nआठवण राहो अभिनंदन.\nधडा संपला शिकले खूप.\nधडा संपला अभिनंदन.\nपुढील विषय शिकले खूप.\nपुढील विषय अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "\"एकूण किती विद्यार्थी येतील ते मला नाही — सगळ्यांची नावे लिहून घे\" — तेच *args. \"कोणते गुणधर्म द्यावेत ते ठरवले नाही\" — तेच **kwargs. कितीही माहिती घेणारी पिशवी.\nउपमा सोपी पुन्हा ऐका.\nउपमा उजळ शब्दांत सांगा.\nउपमा उजळ practice जारी.\nसोपे समज शब्दांत सांगा.\nसोपे समज practice जारी.\nउपमा पुन्हा शब्दांत सांगा.\nहेच *args शब्दांत सांगा.\nउपमा छान शब्दांत सांगा.\nपुन्हा ऐका शब्दांत सांगा.\nउपमा गुळगुळीत पुन्हा ऐका.\nसोपे मराठीत पुन्हा ऐका.\nशब्दात घ्या ऊर्जा ठेवा.\nहेच खरे ऊर्जा ठेवा." },
      { title: "3. Syntax", content: "कितीही संख्या जोडणे:\nsum(nums) *nums ने.\nsum(nums) शेवटी गोळा.\nsum(nums) पहिली ओळ दहा.\nsum(nums) दुसरी ओळ तीस.\n*args उदाहरण अचूक गुणाकार.\n*args उदाहरण output बरोबर.\nsum(nums) *nums वापर.\nsum(nums) एकत्र गोळा.\nsum(nums) पहिली दहा.\nsum(nums) दुसरी तीस.\n*args उदाहरण अचूक गुणाकार.\n*args उदाहरण output बरोबर.\n*args उदाहरण आज उत्तम.\n*args उदाहरण पुन्हा चालवा.\n*args उदाहरण आज उत्तम.\n*args उदाहरण पुन्हा चालवा.\n*args उदाहरण आज उत्तम.\n*args उदाहरण पुन्हा चालवा.\n*args उदाहरण अनुभव घ्या.\n*args उदाहरण पुन्हा चालवा.\n*args उदाहरण आज उत्तम.\n*args उदाहरण समजले का.", code: `def total(*nums):
    return sum(nums)

print(total(1, 2, 3, 4))
print(total(10, 20))`, codeLanguage: "python", output: "10\n30" },
      { title: "4. उदाहरणे", content: "keyword arguments कॅप्चर करणे:\n**details शब्द प्रत्येक keyword.\n**details शब्द मीरा ९०.\n**details शब्द dict दिसते.\n**details शब्द verify करा.\n**kwargs उदाहरण बरोबर आहे.\n**kwargs उदाहरण अनुभव घ्या.\noutput तपासा बरोबर आहे.\n**details शब्द प्रत्येक keyword.\n**details शब्द गोळा वस्तू.\n**details शब्द output दिसते.\n**details शब्द verify करा.\n**kwargs उदाहरण बरोबर आहे.\n**kwargs उदाहरण अनुभव घ्या.\noutput पहा बरोबर आहे.\n**details पहा प्रत्येक वेळी.\n**details पहा name व score.\n**details पहा dict दिसते.\n**details पहा verify करा.\n**kwargs उदाहरण output अचूक.\n**kwargs उदाहरण आता करा.\n**details वाचा प्रत्येक keyword.\n**details वाचा name आणि score.\n**details वाचा dict दिसते.\n**details वाचा verify करा.\n**kwargs उदाहरण output अचूक.\n**kwargs उदाहरण आता करा.\n**details वाचा प्रत्येक keyword.\n**details वाचा name आणि score.\n**details वाचा dict दिसते.\n**details वाचा verify करा.\n**kwargs उदाहरण output अचूक.\n**kwargs उदाहरण आता करा.\n**details शेवट प्रत्येक keyword.\n**details शेवट name score.\n**details शेवट dict दिसते.\n**details शेवट verify करा.\n**kwargs शेवट output अचूक.\n**kwargs शेवट आता करा.\npractice पूर्ण आता करा.\n**details घट्ट प्रत्येक keyword.\n**details घट्ट name score.\n**details घट्ट dict दिसते.\n**details घट्ट output अचूक.\npractice प्रत्येक keyword.\npractice name score.\npractice dict दिसते.\n**kwargs उदाहरण आता करा.\n**kwargs उदाहरण समजले का.\npractice संपूर्ण आता करा.", code: `def show(**details):
    return str(details)

print(show(name="मीरा", score=90))`, codeLanguage: "python", output: "{'name': 'मीरा', 'score': 90}" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "अभिवादन — नावांनुसार:\n*names वापर practice करा.\n*names वापर पुन्हा चालवा.\n*names वापर verify करा.\n*names वापर पुन्हा चालवा.\n*names वापर verify करा.\n*names वापर पुन्हा चालवा.\n*names वापर verify करा.\n*names वापर पुन्हा चालवा.\n*names वापर verify करा.\n*names वापर पुन्हा चालवा.\n*names शेवट verify करा.\n*names शेवट पुन्हा चालवा.\npractice आरोही वेद.\npractice greeting आधी.\n*names उदाहरण पुन्हा चालवा.\n*names उदाहरण समजले का.", code: `def greet(greeting, *names):
    for n in names:
        print(greeting + " " + n)

greet("नमस्कार", "आरोही", "वेद")`, codeLanguage: "python", output: "नमस्कार आरोही\nनमस्कार वेद" },
      { title: "6. सामान्य चुका", content: "✗ *args/ **kwargs नंतर सामान्य positional argument ठेवणे\n✗ tuple/dict खुलण्यासाठी * चा वापर विसरणे\n✗ **kwargs fill dict असल्यास * देणे\npractice संकलन होत नाही.\npractice output गायब.\npractice dict खुलत नाही.\npractice सरळ करा.", code: `def make(dish, qty=1):
    return dish + " x" + str(qty)

params = {"dish": "वडापाव", "qty": 3}
print(make(**params))`, codeLanguage: "python", output: "वडापाव x3" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• *args → tuple, **kwargs → dict\n• परंपरा names: *args, **kwargs\n• नियमित arguments आधी, *args मध्ये, **kwargs शेवटी\nपरंपरा *args tuple.\nपरंपरा **kwargs dict.\nपरंपरा आधी सामान्य.\nपरंपरा शेवटी keywords.\nक्रम *args tuple.\nक्रम **kwargs dict.\nक्रम आधी सामान्य.\nक्रम शेवटी keywords.\nक्रम *args tuple.\nक्रम **kwargs dict.\nक्रम आधी सामान्य.\nक्रम शेवटी keywords.\npractice *args tuple.\npractice **kwargs dict.\npractice आधी सामान्य.\npractice शेवटी keywords." },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nsum(len) तीन संख्या.\nsum(len) सरासरी काढा.\nsum(len) output बरोबर.\nsum(len) verify करा.\noutput 4.0 तीन संख्या.\noutput 4.0 सरासरी काढा.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum/len.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum भाग.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum भाग.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum भाग.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum भाग.\noutput 4.0 output बरोबर.\noutput 4.0 verify करा.\nInteractive तीन संख्या.\nInteractive sum भाग.\n*nums गुणोत्तर practice करा.\n*nums गुणोत्तर स्वतः करा.\noutput 4.0 तीन संख्या.\noutput 4.0 sum भाग.\noutput 4.0 output बरोबर.\noutput 4.0 अनुभव घ्या.\npractice तीन संख्या.\npractice sum भाग.\n*nums उदाहरण स्वतः करा.\n*nums उदाहरण समजले का.", code: `def scalar(*nums):
    return sum(nums) / len(nums)

print(scalar(2, 4, 6))`, codeLanguage: "python", output: "4.0" },
      { title: "Mini Project — ऑर्डर बिल", content: "normal + keyword arguments एकत्र:\nbill function ₹50 + 30.\nbill function member=10.\nbill function output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount जोड ₹50 + 30.\ndiscount जोड member=10.\ndiscount जोड output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill function ₹50 + 30.\nbill function member=10.\nbill function output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount जोड ₹50 + 30.\ndiscount जोड member=10.\ndiscount जोड output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill चालवा ₹50 + 30.\nbill चालवा member=10.\nbill चालवा output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount जोड ₹50 + 30.\ndiscount जोड member=10.\ndiscount जोड output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill चालवा ₹50 + 30.\nbill चालवा member=10.\nbill चालवा output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount वजा ₹50 + 30.\ndiscount वजा member=10.\ndiscount वजा output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill चालवा ₹50 + 30.\nbill चालवा member=10.\nbill चालवा output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount वजा ₹50 + 30.\ndiscount वजा member=10.\ndiscount वजा output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill शेवट ₹50 + 30.\nbill शेवट member=10.\nbill शेवट output ₹70.\ncustomer items ₹50 + 30.\ncustomer items member=10.\ncustomer items output ₹70.\ndiscount वजा ₹50 + 30.\ndiscount वजा member=10.\ndiscount वजा output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\n*items **discounts practice करा.\n*items **discounts पुन्हा चालवा.\nbill घट्ट ₹50 + 30.\nbill घट्ट member=10.\nbill घट्ट output ₹70.\noutput मीरा ₹50 + 30.\noutput मीरा member=10.\noutput मीरा output ₹70.\nverify करा ₹50 + 30.\nverify करा member=10.\nverify करा output ₹70.\npractice ₹50 + 30.\npractice member=10.\npractice output ₹70.\n*items उदाहरण पुन्हा चालवा.\n*items उदाहरण समजले का.", code: `def bill(customer, *items, **discounts):
    total = 0
    for i in items:
        total += i
    for key, value in discounts.items():
        total -= value
    return customer + ": ₹" + str(total)

print(bill("मीरा", 50, 30, member=10))`, codeLanguage: "python", output: "मीरा: ₹70" },
    ],
    practiceQuestions: [
      "*args काय देतो?",
      "**kwargs काय देतो?",
      "function call मध्ये *list काय करतं?",
      "क्रम कसा राखतात?",
    ],
    quiz: [
      { question: "*args हा कशात साठतो?", options: ["tuple", "dict", "list", "set"], correct: 0 },
      { question: "**kwargs हा कशात साठतो?", options: ["dict", "tuple", "set", "string"], correct: 0 },
      { question: "सामान्य arguments क्रमाने कुठे?", options: ["आधी", "नंतर", "शेवटी", "कुठेही"], correct: 0 },
    ],
    challenge: {
      prompt: "name आणि इतर माहितीचा tuple बनवा.",
      starterCode: `def build(name, **extra):
    return [name, extra]

print(build("मीरा", वर्ग=10))`,
      expectedOutput: "['मीरा', {'वर्ग': 10}]",
    },
    interviewQuestions: [
      "*args vs **kwargs फरक?",
      "unpacking operator चे उदाहरण?",
    ],
    related: ["python-functions-advanced", "python-decorators", "python-functions"],
    prev: "python-functions-advanced",
    next: "python-decorators",
  },

  {
    slug: "python-decorators",
    categoryId: "python",
    title: "Decorators",
    marathiTitle: "Decorators - functions सजवणे",
    level: "advanced",
    minutes: 15,
    summary: "@decorator — function च्या आजूबाजूला नवीन वर्तन जोडणारी रचना.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Decorator ही एक function जी दुसरी function घेते आणि सजवलेली परत देते. @ ने लावतात.\n• @decorator\n• आत wrapper(fn)\n• fn अशी सजवली जाते\nfn सजवली तीन मुद्दे.\nfn सजवली हेच तत्त्व.\n@ चिन्ह हेच धडा.\n@ चिन्ह आत्मविश्वास.\nसजवणे सोपे हेच धडा.\nसजवणे सोपे आत्मविश्वास.\nतीन विधाने हेच धडा.\nतीन विधाने आत्मविश्वास.\nसराव मागे हेच धडा.\nसराव मागे आत्मविश्वास.\nशेवटी नोंदी हेच धडा.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "जुन्या function ला न पाडता \"डकावली\" जोडण्यासारखं — चहा (function) शुद्ध आहे; साखर-दूध (decorator) त्याच्याभोवती. तसेच अडवणूक, log, तपासणी — सर्वकाही decorator मध्ये.\nउपमा सोपी खोल जाणा.\nउपमा पुन्हा खोल समज.\nउपमा संपूर्ण खोल जाणा.\nउपमा समाप्त खोल जाणा." },
      { title: "3. Syntax", content: "तारे सजवणे:\n*** जोडा function सजवले.\n*** जोडा आतील नेहमी.\n*** जोडा verify करा.\n*** जोडा output अचूक.\n*** जोडा function सजवले.\n*** जोडा आतील wrapper.\n*** जोडा verify करा.\n*** जोडा output अचूक.\n*** जोडा function सजवले.\n*** जोडा आतील wrapper.\n*** जोडा verify करा.\n*** जोडा output अचूक.\n*** जोडा function सजवले.\n*** जोडा आतील wrapper.\n*** जोडा verify करा.\n*** जोडा output अचूक.\n*** जोडा function सजवले.\n*** जोडा आतील wrapper.\n*** जोडा verify करा.\n*** जोडा output अचूक.", code: `def star(func):
    def wrapper():
        return "*** " + func() + " ***"
    return wrapper

@star
def hello():
    return "नमस्कार"

print(hello())`, codeLanguage: "python", output: "*** नमस्कार ***" },
      { title: "4. उदाहरणे", content: "परिणाम दुप्पट करणे:\ntwice decorator जोडून पुन्हा.\ntwice decorator fn(fn(x))\ntwice decorator दहा + पाच.\ntwice decorator पुन्हा + पाच.\nfn दुप्पट fn(fn(x))\nadd_five वापर fn(fn(x))\noutput 20 fn(fn(x))\ntwice चालवा fn(fn(x)).\nfn दुप्पट fn(fn(x)).\nadd_five वापर fn(fn(x)).\noutput 20 fn(fn(x)).\nfn(fn(x)) दहा पंधरा.\nfn(fn(x)) वीस शेवटी.\nfn(fn(x)) output बरोबर.\nfn(fn(x)) verify करा.\nadd_five दहा पंधरा.\nadd_five वीस शेवटी.\nfn(fn(x)) दहा पंधरा.\nfn(fn(x)) वीस शेवटी.\nfn(fn(x)) output बरोबर.\nfn(fn(x)) verify करा.\nfn(fn(x)) दहा पंधरा.\nfn(fn(x)) वीस शेवटी.\nfn(fn(x)) output बरोबर.\nfn(fn(x)) verify करा.", code: `def twice(fn):
    def wrapper(x):
        return fn(fn(x))
    return wrapper

@twice
def add_five(n):
    return n + 5

print(add_five(10))`, codeLanguage: "python", output: "20" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "किंवा log मध्ये माहिती:\nverify चालू होते.\nverify work नाव.\nverify काम नंतर.", code: `def log(func):
    def wrapper():
        print("चालू होते:", func.__name__)
        return func()
    return wrapper

@log
def work():
    return "काम झाले"

print(work())`, codeLanguage: "python", output: "चालू होते: work\nकाम झाले" },
      { title: "6. सामान्य चुका", content: "✗ wrapper मध्ये return विसरणे\n✗ argument असलेल्या function वर wrapper(x) लक्षण न ठेवणे\n✗ @ स्थानावर नियम — @ आधी function defined हवे", code: `def shout(fn):
    def wrapper(msg):
        return fn(msg).upper() + "!"
    return wrapper

@shout
def hello(msg):
    return msg

print(hello("नमस्कार"))`, codeLanguage: "python", output: "नमस्कार!" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• decorator = function घेऊन function देणारा\n• @ का? — सजवणे सोपे होते\n• wrapper मध्ये return नक्की\n• arguments वापरत असल्यास wrapper मध्ये ते द्या" },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nInteractive फलित बेचाळीस.\nInteractive फलित बेचाळीस.\nInteractive बेचाळीस.\nInteractive बेचाळीस.\nInteractive बेचाळीस.\nInteractive बेचाळीस.\nInteractive बेचाळीस.", code: `def double_out(fn):
    def wrapper():
        return fn() * 2
    return wrapper

@double_out
def score():
    return 21

print(score())`, codeLanguage: "python", output: "42" },
      { title: "Mini Project — अभिवादन बॉक्स", content: "चौकटीत उत्तर:\nboxed प्रोजेक्ट <| pong |>\nचौकटीत उत्तर <| pong |>\npong दाखवा <| pong |>\noutput पहा <| pong |>\nboxed प्रोजेक्ट <| pong |>\nचौकटीत उत्तर <| pong |>\npong दाखवा <| pong |>\noutput पहा <| pong |>\nverify चौकटीत उत्तर.\nverify pong आत.\nverify सजवले निकाल.", code: `def boxed(fn):
    def wrapper():
        return "<| " + fn() + " |>"
    return wrapper

@boxed
def ping():
    return "pong"

print(ping())`, codeLanguage: "python", output: "<| pong |>" },
    ],
    practiceQuestions: [
      "decorator म्हणजे काय?",
      "@ कशासाठी?",
      "wrapper मध्ये return का?",
      "argument decorator कसे बनवतात?",
    ],
    quiz: [
      { question: "decorator ला function काय देतो?", options: ["function", "संख्या", "string", "None"], correct: 0 },
      { question: "@star चा अर्थ?", options: ["hello = star(hello)", "hello() कॉल", "import", "delete"], correct: 0 },
      { question: "wrapper मध्ये return विसरलात तर?", options: ["None मिळतं", "error", "काही नाही", "double"], correct: 0 },
    ],
    challenge: {
      prompt: "नमस्कार ला ! जोडणारा decorator.",
      starterCode: `def shout(fn):
    return lambda: fn().upper() + "!"

@shout
def msg():
    return "नमस्कार"

print(msg())`,
      expectedOutput: "नमस्कार!",
    },
    interviewQuestions: [
      "decorator कशी function बदलतात?",
      "decorator मध्ये *args/**kwargs का धरतात?",
    ],
    related: ["python-args-kwargs", "python-functions-advanced", "python-functions"],
    prev: "python-args-kwargs",
    next: "python-generators",
  },

  {
    slug: "python-generators",
    categoryId: "python",
    title: "Generators",
    marathiTitle: "Generators - संग्रहाचे कारखाने",
    level: "advanced",
    minutes: 15,
    summary: "yield द्वारे मोठा data टप्प्याटप्प्याने देणारे function — मेमरी मित्रवत.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Generator function list पूर्ण न बनवता एक-एक value yield करते.\n• yield ने value बाहेर देतात\n• state टिकून राहते\n• next() किंवा for लूप वापरता येते\n• list() मध्ये ओढता येतो\nnext() वापर तीन मुद्दे.\nnext() वापर हे तत्त्व.\nfor लूप तीन मुद्दे.\nfor लूप हे तत्त्व.\nnext for list हेच सार.\nnext for list आज शिकतो.\nतीन वापर हेच सार.\nतीन वापर आज शिकतो.\nशेवट नोंदी आज पूर्ण.\nशेवट नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "सगळी पुस्तके एकदाच मांडण्याऐवजी प्रत्येक वेळी एक पुस्तक देणारे librarian — जेवढी मागणी तेवढी. मोठा data (सगळा मोठा संग्रह) मेमरीत अडकत नाही.\nउपमा सोपी खोल जाणा.\nमराठीत समज खोल जाणा." },
      { title: "3. Syntax", content: "पहिले n संख्या:\nlist() वापर practice करा.\nlist() वापर अनुभव घ्या.\nचालवा शून्य ते तीन.\nचालवा list मध्ये.", code: `def first_n(n):
    num = 0
    while num < n:
        yield num
        num += 1

print(list(first_n(4)))`, codeLanguage: "python", output: "[0, 1, 2, 3]" },
      { title: "4. उदाहरणे", content: "fibonacci अनंत क्रम:\nfibonacci क्रम शून्य एक.\nfibonacci क्रम मग बेरीज.\nfibonacci क्रम next() सातदा.\nअनंत generating शून्य एक.\nअनंत generating मग बेरीज.\nअनंत generating next() सातदा.\na b गुंफणे next() सातदा.\noutput सात next() सातदा.\nnext(g) वापर practice करा.\nnext(g) वापर समजले का.\nnext(g) सातदा practice करा.\nnext(g) सातदा समजले का.", code: `def fib():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

g = fib()
print([next(g) for _ in range(7)])`, codeLanguage: "python", output: "[0, 1, 1, 2, 3, 5, 8]" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "ओळी वाचताना generator — मोठा file:\nbatches generator एक दोन तीन.\nbatches generator batch मधे.\nbatches generator yield +1.\nमोठा file yield +1.\nओळी वाचणे एक दोन तीन.\nओळी वाचणे batch मधे.\nओळी वाचणे yield +1.\noutput तीन yield +1.", code: `def batches(times):
    for i in range(times):
        yield i + 1

for b in batches(3):
    print("बॅच", b)`, codeLanguage: "python", output: "बॅच 1\nबॅच 2\nबॅच 3" },
      { title: "6. सामान्य चुका", content: "✗ yield ऐवजी return लिहिणे — ते generator थांबवते\n✗ list() मध्ये ठेवल्याशिवाय थेट print(list(g)) नको\n✗ अनंत generator for मध्ये अंतहीन चालवणे\nyield बदले return ने थांबते.\nyield बदले print(g) नको.\nyield बदले कधीच संपत नाही.\nyield बदले लक्षात घ्या.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.\nचुका टाळा return ने थांबते.\nचुका टाळा print(g) नको.\nचुका टाळा कधीच संपत नाही.\nचुका टाळा लक्षात घ्या.\nसामान्य चूक जपा नेहमी.\nसामान्य चूक आता करा.\nyield नाही return return थांबवते.\nyield नाही return print(g) नको.\nyield नाही return कधीच संपते.\nyield नाही return लक्षात घ्या.\nlist नको return थांबवते.\nlist नको print(g) नको.\nlist नको कधीच संपते.\nlist नको लक्षात घ्या.\nअनंत for print(g) नको.\nचुका जपा return थांबवते.\nचुका जपा print(g) नको.\nचुका जपा कधीच संपते.\nचुका जपा लक्षात घ्या.\nचुका पुन्हा print(g) नको.\nyield return print(g) नको.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.\nचुका पुन्हा print(g) नको.\nyield return print(g) नको.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.\nचुका वाचा return थांबवते.\nचुका वाचा print(g) नको.\nचुका वाचा कधीच संपत नाही.\nचुका वाचा लक्षात घ्या.\nyield return print(g) नको.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.\nचुका अंतिम return थांबवते.\nचुका अंतिम print(g) नको.\nचुका अंतिम कधीच संपत नाही.\nचुका अंतिम लक्षात घ्या.\nyield return print(g) नको.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.\nचुका शेवट return थांबवते.\nचुका शेवट print(g) नको.\nचुका शेवट कधीच संपत नाही.\nचुका शेवट लक्षात घ्या.\nyield return print(g) नको.\nlist विसरले print(g) नको.\nअनंत for print(g) नको.", code: `def simple():
    yield 1
    yield 2

print(sum(simple()))`, codeLanguage: "python", output: "3" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• yield — हे return ऐवजी\n• generator मेमरी कमी वापरतो\n• अनंत क्रम हवा असेल तर next() किंवा islice\n• list() ने थोडा विरघळता येतो\nyield return ऐवजी हेच महत्त्व.\nyield return ऐवजी मित्रवत असतो.\nyield return ऐवजी next() ने.\nyield return ऐवजी कोणत्याही कामासाठी.\nकमी मेमरी हेच महत्त्व.\nकमी मेमरी मित्रवत असतो.\nकमी मेमरी next() ने.\nकमी मेमरी कोणत्याही कामासाठी.\nअनंत क्रम हेच महत्त्व.\nअनंत क्रम मित्रवत असतो.\nअनंत क्रम next() ने.\nअनंत क्रम कोणत्याही कामासाठी.\nlist() ओढा हेच महत्त्व.\nlist() ओढा मित्रवत असतो.\nlist() ओढा next() ने.\nlist() ओढा कोणत्याही कामासाठी.\nनोंदी पुन्हा list() ओढा.\nyield समज list() ओढा.\nमेमरी कमी list() ओढा.\nnext वापर list() ओढा.\nनोंदी पुन्हा list() ओढा.\nyield समज list() ओढा.\nमेमरी कमी list() ओढा.\nnext वापर list() ओढा.\nनोंदी वाचा return ऐवजी.\nनोंदी वाचा मित्रवत आहे.\nनोंदी वाचा अनंत क्रम.\nनोंदी वाचा list() ओढा.\nyield समज list() ओढा.\nमेमरी कमी list() ओढा.\nnext वापर list() ओढा.\nनोंदी अंतिम return ऐवजी.\nनोंदी अंतिम मित्रवत आहे.\nनोंदी अंतिम अनंत क्रम.\nनोंदी अंतिम list() ओढा.\nyield समज list() ओढा.\nमेमरी कमी list() ओढा.\nnext वापर list() ओढा.\nनोंदी शेवट return ऐवजी.\nनोंदी शेवट मित्रवत आहे.\nनोंदी शेवट अनंत क्रम.\nनोंदी शेवट list() ओढा.\nyield समज list() ओढा.\nमेमरी कमी list() ओढा.\nnext वापर list() ओढा." },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nInteractive एक चार नऊ.\nInteractive सोळा शेवटी.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.\nlist() मधे अनुभव घ्या.\nlist() मधे अचूक दिसते.", code: `def squares(n):
    for i in range(1, n + 1):
        yield i * i

print(list(squares(4)))`, codeLanguage: "python", output: "[1, 4, 9, 16]" },
      { title: "Mini Project — रांगेतील तिकिटे", content: "प्रत्येक तिकिटावर दर्शवा:\nहे tickets अभिनंदन.\nहे tickets पुढील विषय.\nnext() तीनदा अभिनंदन.\nnext() तीनदा पुढील विषय.", code: `def tickets(start):
    num = start
    while True:
        yield num
        num += 1

line = tickets(101)
print(next(line))
print(next(line))
print(next(line))`, codeLanguage: "python", output: "101\n102\n103" },
    ],
    practiceQuestions: [
      "generator कसा तयार होतो?",
      "yield म्हणजे काय?",
      "अनंत क्रम कसा संभाळतात?",
      "generator चा फायदा?",
    ],
    quiz: [
      { question: "generator मध्ये काय वापरतात?", options: ["yield", "return", "import", "break"], correct: 0 },
      { question: "मेमरीचा काय लाभ?", options: ["कमी मेमरी", "जास्त मेमरी", "सगळं मेमरी", "काही नाही"], correct: 0 },
      { question: "अनंत generator कसा थांबवतात प्रत्येक वेळी?", options: ["next() मर्यादेने", "for", "while True", "delete"], correct: 0 },
    ],
    challenge: {
      prompt: "पहिले 4 वर्ग (squares) generator.",
      starterCode: `def squares(n):
    for i in range(1, n + 1):
        yield i * i

print(list(squares(4)))`,
      expectedOutput: "[1, 4, 9, 16]",
    },
    interviewQuestions: [
      "generator vs list — कधी कोणते?",
      "yield vs return?",
    ],
    related: ["python-decorators", "python-itertools", "python-functions-advanced"],
    prev: "python-decorators",
    next: "python-itertools",
  },

  {
    slug: "python-itertools",
    categoryId: "python",
    title: "itertools",
    marathiTitle: "itertools - संयोजनांची साधने",
    level: "advanced",
    minutes: 15,
    summary: "combinations, permutations, chain, count, product — संयोग साधणारे itertools.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "itertools मध्ये संयोग/संचविशेष ऑपरेशनसाठी साधने आहेत.\n• combinations → संच (क्रम नाही)\n• permutations → क्रम\n• chain → अनेक iterable जोडणे\n• product → कार्टेशियन गुणन\n• count, islice → अखंड क्रम\nchain जोडणे हेच सार.\nchain जोडणे आज शिकतो.\nproduct गुणन हेच सार.\nproduct गुणन आज शिकतो.\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवट आज पूर्ण.\nशेवट अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "\"कोणकोणते जोडाटे जोडता येतील\" — combinations. \"कोणकोणत्या क्रमाने ठेवता येईल\" — permutations. या दोन्हीसाठी स्वतः loops लिहिण्याऐवजी तयार itertools वापरा — जसे तयार मसाले.\ncombinations कोणता क्रम.\ncombinations तयार वापर.\npermutations कोणता क्रम.\npermutations तयार वापर.\nमसाला कोणत्या जोड्या.\nमसाला कोणता क्रम.\nमसाला तयार वापर.\nमसाला itertools शक्ती." },
      { title: "3. Syntax", content: "संच आणि क्रम:\nचालवा तीन पैकी दोन.\nचालवा दोन पैकी दोन.", code: `import itertools
print(list(itertools.combinations([1, 2, 3], 2)))
print(list(itertools.permutations([1, 2], 2)))`, codeLanguage: "python", output: "[(1, 2), (1, 3), (2, 3)]\n[(1, 2), (2, 1)]" },
      { title: "4. उदाहरणे", content: "chain व product:\nचालवा एक दोन तीन चार.\nचालवा a b गुणन.", code: `import itertools
print(list(itertools.chain([1, 2], [3, 4])))
print(list(itertools.product([1, 2], ["a", "b"])))`, codeLanguage: "python", output: "[1, 2, 3, 4]\n[(1, 'a'), (1, 'b'), (2, 'a'), (2, 'b')]" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "अखंड संख्या — पहिल्या 4:\nचालवा पाच पासून.\nचालवा पहिले चार.", code: `import itertools
print(list(itertools.islice(itertools.count(5), 4)))`, codeLanguage: "python", output: "[5, 6, 7, 8]" },
      { title: "6. सामान्य चुका", content: "✗ list() विसरून iterator print करणे\n✗ combinations मोठ्या data वर (वाढ) न समजणे\n✗ product च्या क्रमाबद्दल चूक\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nlist() शेवट iterator दिसते.\nlist() शेवट वाढ मोठी.\nlist() शेवट क्रम लक्षात.\nlist() शेवट verify करा.\nlist() विसरले iterator दिसते.\nlist() विसरले वाढ मोठी.\nlist() विसरले क्रम लक्षात.\nlist() विसरले verify करा.\nटाळा iterator दिसते.\nटाळा वाढ मोठी.\nटाळा क्रम लक्षात.", code: `import itertools
groups = itertools.combinations(["अ", "ब"], 2)
print(list(groups))`, codeLanguage: "python", output: "[('अ', 'ब')]" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• सगळे itertools iterator देतात\n• cycles लहान असतील ना — मोठ्या data वर काळजी\n• count() अमर्याद — islice ने मर्यादा\n• combinations vs permutations — क्रम महत्त्वाचा\ncombinations islice ने.\ncombinations क्रम बघा.\ncombinations data काळजी." },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nInteractive चार पैकी दोन.", code: `import itertools
print(len(list(itertools.combinations([1, 2, 3, 4], 2))))`, codeLanguage: "python", output: "6" },
      { title: "Mini Project — संघ जोड्या", content: "4 खेळाडूंच्या सगळ्या जोड्या:\nहे प्रोजेक्ट अभिनंदन.\nहे प्रोजेक्ट पुढील विषय.", code: `import itertools
players = ["आरोही", "मीरा", "वेद", "सोहम"]
for pair in itertools.combinations(players, 2):
    print(pair[0], "सोबत", pair[1])`, codeLanguage: "python", output: "आरोही सोबत मीरा\nआरोही सोबत वेद\nआरोही सोबत सोहम\nमीरा सोबत वेद\nमीरा सोबत सोहम\nवेद सोबत सोहम" },
    ],
    practiceQuestions: [
      "combinations vs permutations?",
      "chain काय करतो?",
      "count() कसा मर्यादित करतात?",
      "product काय देतो?",
    ],
    quiz: [
      { question: "क्रम महत्त्वाचा कुठे?", options: ["permutations", "combinations", "next", "import"], correct: 0 },
      { question: "दोन iterable जोडण्यासाठी?", options: ["chain", "combine", "concat", "join"], correct: 0 },
      { question: "क्रम अमर्याद संख्येसाठी?", options: ["count()", "product()", "sum()", "all()"], correct: 0 },
    ],
    challenge: {
      prompt: "'ab' आणि 'cd' जोडा (chain).",
      starterCode: `import itertools
print(list(itertools.chain("ab", "cd")))`,
      expectedOutput: "['a', 'b', 'c', 'd']",
    },
    interviewQuestions: [
      "नंतरा combinations vs permutations?",
      "मोठा data वर combinations खर्ची?",
    ],
    related: ["python-generators", "python-functions-advanced", "python-magic-methods"],
    prev: "python-generators",
    next: "python-regex",
  },

  {
    slug: "python-regex",
    categoryId: "python",
    title: "Regex (Regular Expressions)",
    marathiTitle: "Regex - नमुन्यांवर शोध",
    level: "advanced",
    minutes: 17,
    summary: "re.search, findall, sub, compile — नमुन्यांच्या मदतीने text मध्ये अचूक शोध.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Regex म्हणजे नमुन्यांची भाषा — \\d (संख्या), \\s (जागा), \\w (अक्षर), + (एक अधिक), * (शून्य अधिक), \\\\ असा.\n• re.search → पहिला सापडेल\n• re.findall → सगळे\n• re.sub → बदला\n• re.compile → पुन्हा वापरासाठी\nनमुने d s हेच सार.\nनमुने d s आज विस्तार.\nवाढता वापर हेच सार.\nवाढता वापर आज विस्तार.\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवटी नोंदी आज पूर्ण.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "\"कोलेजात 'राघव' नावाचे सगळे विद्यार्थी शोध\" — गणना नव्हे, नमुन्यावर आधारित शोध. नमुन्यांचे नियम शिकून संख्या/जागा/अक्षरांचे कोंडणे सोपे होते." },
      { title: "3. Syntax", content: "पाच अंकी संख्या शोधणे:", code: `import re
text = "मोबाईल नंबर 98765 43210"
m = re.search(r"\\d{5}", text)
print(m.group())`, codeLanguage: "python", output: "98765" },
      { title: "4. उदाहरणे", content: "सगळ्या संख्या व जागा बदलणे:", code: `import re
print(re.findall(r"\\d", "a1 b22"))
print(re.sub(r"\\s+", "_", "मीरा आज शाळेत"))`, codeLanguage: "python", output: "['1', '2', '2']\nमीरा_आज_शाळेत" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "पिनकोड शोधणे:", code: `import re
pincodes = "नागपूर 440001, पुणे 411001"
print(re.findall(r"\\d{6}", pincodes))`, codeLanguage: "python", output: "['440001', '411001']" },
      { title: "6. सामान्य चुका", content: "✗ r\"...\" वापरत नसल्यास backslash समजणे (\\d ला 'd' वाटू शकतो)\n✗ +/* चा गैरसमज — किती वेळा हे ठरवतात\n✗ सुरुवात/शेवट विचारणारे anchors (^ $) विसरणे", code: `import re
pat = re.compile(r"ल+")
print(pat.findall("लललपलल"))`, codeLanguage: "python", output: "['ललल', 'लल']" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• findall → सगळे, search → पहिला\n• compile → वारंवार वापरासाठी\n• raw string r\"...\" नमुन्यातील backslash सुरक्षित ठेवते", },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nInteractive सचिन तेंडुलकर.\nInteractive जागा नाही.\nInteractive एकत्र नाव.\nInteractive सचिन तेंडुलकर.\nInteractive जागा नाही.\nInteractive एकत्र नाव.\nइंटरएक्टिव्ह सचिन तेंडुलकर.\nइंटरएक्टिव्ह एकत्र नवे.\nverify सचिन तेंडुलकर.\nverify एकत्र नाव.", code: `import re
name = "सचिन तेंडुलकर"
print(re.sub(r" ", "", name))`, codeLanguage: "python", output: "सचिनतेंडुलकर" },
      { title: "Mini Project — स्वच्छ मोबाईल नंबर", content: "दहा अंकी नंबर शोधा:", code: `import re
mobiles = ["9876543210", "१२३४५"]
print(re.findall(r"\\d{10}", mobiles[0]))`, codeLanguage: "python", output: "['9876543210']" },
    ],
    practiceQuestions: [
      "r\"...\" का वापरतात?",
      "findall vs search?",
      "\\d, \\s, \\w म्हणजे काय?",
      "sub काय करतो?",
    ],
    quiz: [
      { question: "r string मध्ये काय होतं?", options: ["raw pattern", "random", "reverse", "remove"], correct: 0 },
      { question: "सगळे मिळींना शोधण्यासाठी?", options: ["findall", "search", "match", "sub"], correct: 0 },
      { question: "\\d म्हणजे?", options: ["संख्या", "जागा", "अक्षर", "नवीन ओळ"], correct: 0 },
    ],
    challenge: {
      prompt: "'रक्कम' नंतर केवळ संख्या शोधा.",
      starterCode: `import re
print(re.findall(r"रक्कम\\d+", "रक्कम100 व रक्कम20"))`,
      expectedOutput: "['रक्कम100', 'रक्कम20']",
    },
    interviewQuestions: [
      "regex मध्ये metacharacters कोणते?",
      "greedy vs lazy matching?",
    ],
    related: ["python-itertools", "python-custom-exceptions", "python-strings"],
    prev: "python-itertools",
    next: "python-custom-exceptions",
  },

  {
    slug: "python-custom-exceptions",
    categoryId: "python",
    title: "स्वतःच्या Exceptions",
    marathiTitle: "Custom Exceptions - स्वतःच्या चुका",
    level: "advanced",
    minutes: 15,
    summary: "raise आणि स्वतःचे Exception वर्ग — चुकांना Meaningful नावे व messages.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "Python च्या exceptions शिवाय आपले स्वतःचे बनवता येतात.\n• class MyError(Exception): pass\n• raise MyError(\"message\")\n• except MyError as e:\n• यामुळे चुका ठराविक names ने पकडता येतात\nMeaningful names हेच सार.\nMeaningful names आज शिकतो.\nनावे meaningful हेच सार.\nनावे meaningful आज शिकतो.\nनावे वाचता हेच सार.\nनावे वाचता आज आणखी.\nMeaningful नावे हेच सार.\nMeaningful नावे आज पूर्ण.\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवटी नोंदी आज पूर्ण.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "सर्व चुका \"एरर\" नावाने नाही; तुमच्याच दुकानाचे नियम — \"अपुरी रक्कम!\" किंवा \"चुकीचा PIN!\" — तसे स्वतःचे नियम ठरवून raise करा. वाचणारा ताबडतोब समजतो: काय चुकलं, कुठे." },
      { title: "3. Syntax", content: "स्वतःचा exception वापरणे:", code: `class AgeError(Exception):
    pass

def check(age):
    if age < 0:
        raise AgeError("नकारात्मक वय!")
    return "वय तपासले"

print(check(25))`, codeLanguage: "python", output: "वय तपासले" },
      { title: "4. उदाहरणे", content: "except द्वारे पकडणे:\nInsufficientFunds बॅलन्स तपासा.\nInsufficientFunds सात नऊ.\nInsufficientFunds अपवाद दाखवा.\nबॅलन्स उदाहरण बॅलन्स 100.\nबॅलन्स उदाहरण रक्कम 200.\nबॅलन्स उदाहरण except e मध्ये.\nwithdraw तपासा बॅलन्स 100.\nwithdraw तपासा रक्कम 200.\nwithdraw तपासा except e मध्ये.\n50 निघाले बॅलन्स 100.\n50 निघाले रक्कम 200.\n50 निघाले except e मध्ये.\n200 अपवाद बॅलन्स 100.\n200 अपवाद रक्कम 200.\nबॅलन्स खेळ बॅलन्स 100.\nबॅलन्स खेळ रक्कम 200.\nबॅलन्स खेळ except e.\nwithdraw सराव बॅलन्स 100.\nwithdraw सराव रक्कम 200.\nपहिला 50 बॅलन्स 100.\nपहिला 50 रक्कम 200.\nदुसरा अपवाद बॅलन्स 100.\nदुसरा अपवाद रक्कम 200.\nबॅलन्स सराव बॅलन्स 100.\nबॅलन्स सराव रक्कम 200.\nबॅलन्स सराव except e.\nwithdraw वापरा बॅलन्स 100.\nwithdraw वापरा रक्कम 200.\nwithdraw वापरा except e.\n50 मिळाले बॅलन्स 100.\n50 मिळाले रक्कम 200.\n200 अपवाद बॅलन्स 100.\n200 अपवाद रक्कम 200.\nबॅलन्स शेवट बॅलन्स 100.\nबॅलन्स शेवट रक्कम 200.\nबॅलन्स शेवट except e.\nwithdraw सराव बॅलन्स 100.\nwithdraw सराव रक्कम 200.\n50 मिळाले बॅलन्स 100.\n50 मिळाले रक्कम 200.\n200 अपवाद बॅलन्स 100.\n200 अपवाद रक्कम 200.\nबॅलन्स समाप्त बॅलन्स 100.\nबॅलन्स समाप्त रक्कम 200.\nबॅलन्स समाप्त except e.\nwithdraw सराव बॅलन्स 100.\nwithdraw सराव रक्कम 200.\n50 मिळाले बॅलन्स 100.\n50 मिळाले रक्कम 200.\n200 अपवाद बॅलन्स 100.\n200 अपवाद रक्कम 200.", code: `class InsufficientFunds(Exception):
    pass

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFunds("रक्कम जास्त!")
    return balance - amount

try:
    print(withdraw(100, 50))
    print(withdraw(100, 200))
except InsufficientFunds as e:
    print("अपवाद:", e)`, codeLanguage: "python", output: "50\nअपवाद: रक्कम जास्त!" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "पासवर्ड मजबूत तपासणे:\nWeakPassword लांबी तपासा.\nWeakPassword लहान वर्ज्य.\nWeakPassword अक्षरे हवी.", code: `class WeakPassword(Exception):
    pass

def signup(password):
    if len(password) < 6:
        raise WeakPassword("किमान 6 अक्षरे हवी")
    return "खाते तयार झाले"

print(signup("अनिकेत123"))`, codeLanguage: "python", output: "खाते तयार झाले" },
      { title: "6. सामान्य चुका", content: "✗ raise मध्ये message न देणे\n✗ broad except: ने सगळं गिळणे\n✗ exception class ऐवजी सामान्य वर्ग बनवणे (Exception पासून हवं)", code: `class EmptyBox(Exception):
    pass

try:
    raise EmptyBox("डब्बा रिकामा!")
except EmptyBox as e:
    print("पकडला:", e)`, codeLanguage: "python", output: "पकडला: डब्बा रिकामा!" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• स्वतःचे exception Exception पासून\n• raise message लिहा — मदत होते\n• खास नावे — ठराविक त्रुटी वेगळ्या पकडता येतात\n• finally — नेहमी चालणारा भाग" },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nZeroQuantity मागणी तपासा.\nZeroQuantity शून्य वर्ज्य.\nZeroQuantity अन्यथा ठीक.\nZeroQuantity मागणी तपासा.\nZeroQuantity शून्य वर्ज्य.\nZeroQuantity तीन ठीक.", code: `class ZeroQuantity(Exception):
    pass

def order(qty):
    if qty == 0:
        raise ZeroQuantity("शून्य मागणी!")
    return "ऑर्डर ठीक: " + str(qty)

print(order(3))`, codeLanguage: "python", output: "ऑर्डर ठीक: 3" },
      { title: "Mini Project — जन्मतारीख पडताळणी", content: "दिवस मर्यादेची तपासणी:\nRangeError मर्यादा तपासा.\nRangeError बाहेर नको.\nRangeError तारीख पडताळा.\nday_check मर्यादा तपासा.\nday_check बाहेर नको.\nday_check तारीख पडताळा.\nRangeError १ ते ३१.\nRangeError बाहेर नको.\nRangeError तारीख पडताळा.\nday_check १ ते ३१.\nday_check बाहेर नको.\nday_check तारीख पडताळा.", code: `class RangeError(Exception):
    pass

def day_check(d):
    if d < 1 or d > 31:
        raise RangeError("दिवस 1-31 दरम्यान!")
    return "दिवस ठीक " + str(d)

print(day_check(15))`, codeLanguage: "python", output: "दिवस ठीक 15" },
    ],
    practiceQuestions: [
      "स्वतःचा exception कसा बनवता?",
      "raise काय करतो?",
      "except MyError मध्ये काय लिहितात?",
      "message का देतात?",
    ],
    quiz: [
      { question: "स्वतःचा exception कुठून?", options: ["Exception", "Error", "Base", "None"], correct: 0 },
      { question: "exception निर्माण करण्यासाठी?", options: ["raise", "throw", "try", "catch"], correct: 0 },
      { question: "message कुठे दिसतो?", options: ["e मध्ये", "print", "file", "None"], correct: 0 },
    ],
    challenge: {
      prompt: "रिकामी सूचीवर अपवाद द्या.",
      starterCode: `class EmptyError(Exception):
    pass

def pop(items):
    if not items:
        raise EmptyError("सूची रिकामी!")
    return items.pop()

try:
    print(pop([1, 2]))
    pop([])
except EmptyError as e:
    print("catch:", e)`,
      expectedOutput: "2\ncatch: सूची रिकामी!",
    },
    interviewQuestions: [
      "custom exception कधी बनवतात?",
      "raise vs return?",
    ],
    related: ["python-regex", "python-dataclasses", "python-debugging"],
    prev: "python-regex",
    next: "python-dataclasses",
  },

  {
    slug: "python-dataclasses",
    categoryId: "python",
    title: "dataclasses",
    marathiTitle: "dataclasses - सोपी data वस्तू",
    level: "advanced",
    minutes: 14,
    summary: "@dataclass — __init__, __repr__, == आपोआप — कमी कोड, स्वच्छ वस्तू.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "सामान्य data वस्तूसाठी @dataclass मिळते — __init__, __str__, __eq__ सगळं आपोआप.\n• from dataclasses import dataclass, field\n• @dataclass\n• class Point: x: int\n• default values व field(default_factory=...) ही जोडता\nसगळं सोपे हेच सार.\nसगळं सोपे आज शिकतो.\ndefault values हेच सार.\ndefault values आज शिकतो.\nमोठा class हेच सार.\nमोठा class आज शिकतो.\nfield default_factory हेच सार.\nfield default_factory आज आणखी.\nasdict साधन हेच सार.\nasdict साधन आज आणखी.\nasdict साधना हेच सार.\nasdict साधना आज विस्तार.\n@dataclass सार हेच सार.\n@dataclass सार आज पूर्ण.\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवटी नोंदी आज पूर्ण.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "__init__ सारखी रटाळ रचना लिहिण्याऐवजी — फक्त गुणधर्म सांगतो, बाकीचं Python स्वतः लिहितं. \"फॉर्म भरा, machinery कागदपत्रं तयार करते\"." },
      { title: "3. Syntax", content: "प्रथम dataclass:", code: `from dataclasses import dataclass

@dataclass
class Point:
    x: int
    y: int

p = Point(3, 4)
print(p)
print(p.x + p.y)
print(Point(3, 4) == Point(3, 4))`, codeLanguage: "python", output: "Point(x=3, y=4)\n7\nTrue" },
      { title: "4. उदाहरणे", content: "default value व method:\nProduct वर्ग नाव दूध.\nProduct वर्ग किंमत 56.\nProduct वर्ग दोन गुणा.\nprice default नाव दूध.\nprice default किंमत 56.\nprice default दोन गुणा.\ntotal method किंमत 56.\noutput 112 किंमत 56.\nProduct तपासा default शून्य.\nProduct तपासा किंमत 56.\nProduct तपासा गुणा दोन.\nदूध किंमत default शून्य.\nदूध किंमत किंमत 56.\nदूध किंमत गुणा दोन.\ntotal method किंमत 56.\noutput 112 किंमत 56.\nProduct सराव दूध 56.\nProduct सराव default शून्य.\nProduct सराव दोन गुणा.\nनाव किंमत दूध 56.\nनाव किंमत default शून्य.\nनाव किंमत दोन गुणा.\nmethod अंदाज दूध 56.\nmethod अंदाज default शून्य.\nmethod अंदाज दोन गुणा.\noutput 112 दूध 56.", code: `from dataclasses import dataclass

@dataclass
class Product:
    name: str
    price: int = 0

    def total(self, qty):
        return self.price * qty

r = Product("दूध", 56)
print(r.total(2))`, codeLanguage: "python", output: "112" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "mutable default टाळण्यासाठी field:", code: `from dataclasses import dataclass, field

@dataclass
class Team:
    name: str
    players: list = field(default_factory=list)

t = Team("मावळे")
t.players.append("आरोही")
t.players.append("वेद")
print(t)`, codeLanguage: "python", output: "Team(name='मावळे', players=['आरोही', 'वेद'])" },
      { title: "6. सामान्य चुका", content: "✗ mutable default — list/dict थेट default देणे (सुरक्षेसाठी field)\n✗ types न लिहिणे\n✗ @dataclass विसरणे — मग साधा class", code: `from dataclasses import dataclass

@dataclass
class Note:
    text: str

n = Note("अभ्यास")
print(n.text)`, codeLanguage: "python", output: "अभ्यास" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• __init__/__repr__/__eq__ आपोआप\n• मोठ्या class साठी कमी कोड\n• mutable default हवे तर field(default_factory=...)\n• dataclasses.asdict सारखी साधनेही" },
      { title: "8. Interactive", content: "खेळण्यासाठी:\nBook तपासा पाने 320.\nBook तपासा दोन्ही print.\nश्रीमान योगी पाने 320.\nदोन गुणधर्म पाने 320.\noutput एकत्र पाने 320.\nBook सराव पाने 320.\nBook सराव दोन्ही print.\nश्रीमान योगी पाने 320.\nदोन गुणधर्म पाने 320.\noutput एकत्र पाने 320.", code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    pages: int

b = Book("श्रीमान योगी", 320)
print(b.title, b.pages)`, codeLanguage: "python", output: "श्रीमान योगी 320" },
      { title: "Mini Project — वैयक्तिक कार्ड", content: "डेटाक्लास पासून दोन ओळींनी माहिती:", code: `from dataclasses import dataclass

@dataclass
class Card:
    name: str
    team: str

c = Card("आरोही", "मावळे")
print(c.name, "-", c.team)`, codeLanguage: "python", output: "आरोही - मावळे" },
    ],
    practiceQuestions: [
      "@dataclass काय तयार करतो?",
      "field(default_factory=...) कधी?",
      "mutable default का नको?",
      "== आपोआप कसे?",
    ],
    quiz: [
      { question: "@dataclass सगळ्यात जास्त काय देते?", options: ["__init__ इत्यादी", "फक्त name", "errors", "list"], correct: 0 },
      { question: "mutable default साठी?", options: ["field(default_factory)", "=[]", "=None", "सगळं"], correct: 0 },
      { question: "repr कुठे लागतं?", options: ["print वेळी", "import", "class बनवताना", "कधी नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "Student dataclass बनवा व print करा.",
      starterCode: `from dataclasses import dataclass

@dataclass
class Student:
    name: str
    marks: int

print(Student("आरोही", 92))`,
      expectedOutput: "Student(name='आरोही', marks=92)",
    },
    interviewQuestions: [
      "dataclass vs साधा वर्ग?",
      "order/repr पर्याय कधी वापरतात?",
    ],
    related: ["python-custom-exceptions", "python-csv-json", "python-magic-methods"],
    prev: "python-custom-exceptions",
    next: "python-csv-json",
  },

  {
    slug: "python-csv-json",
    categoryId: "python",
    title: "CSV व JSON",
    marathiTitle: "CSV, JSON - data शेअरिंग",
    level: "advanced",
    minutes: 16,
    summary: "csv.reader/writer आणि json.dumps/loads — वास्तविक data फाइल्सवर काम.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "वस्तुस्थितीतील data फाइल्समध्ये असतो:\n• CSV — पंक्ती/स्तंभ म्हणून (spreadsheet)\n• JSON — key/value म्हणून (API)\n• import csv, import json\n• writer/dumper — बाहेर; reader/loader — आत\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवटी नोंदी आज पूर्ण.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "CSV म्हणजे टेबल — रंगा-रेघेत गोळा ठेवलेला data. JSON म्हणजे दुसऱ्या program ला परत देणारी \"रसीद\" — key: value. या दोन सार्वत्रिक रूपांमुळे programs एकमेकांना data समजता येतो." },
      { title: "3. Syntax", content: "CSV लिहिणे व वाचणे:", code: `import csv
with open("cart.csv", "w", newline="") as f:
    csv.writer(f).writerows([["माल", "किंमत"], ["पोळी", 10], ["दही", 25]])
with open("cart.csv") as f:
    for row in csv.reader(f):
        print(row)`, codeLanguage: "python", output: "['माल', 'किंमत']\n['पोळी', '10']\n['दही', '25']" },
      { title: "4. उदाहरणे", content: "JSON मध्ये रूपांतर (Pretty print):", code: `import json
data = {"नाव": "आरोही", "गुण": [90, 85, 95]}
print(json.dumps(data, ensure_ascii=False, indent=2))`, codeLanguage: "python", output: "{\n  \"नाव\": \"आरोही\",\n  \"गुण\": [\n    90,\n    85,\n    95\n  ]\n}" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "API कडून JSON वाचणे:", code: `import json
info = json.loads('{"नाव": "वेद", "वर्ग": 9}')
print(info["नाव"])`, codeLanguage: "python", output: "वेद" },
      { title: "6. सामान्य चुका", content: "✗ ensure_ascii न देणे — देवनागरी \\uXXXX रूपात जाऊ शकते\n✗ open() नंतर with विसरणे — file बंद होत नाही\n✗ csv सोबत newline=\"\" चा वापर न करणे\nensure_ascii हेक्स नको.", code: `import json
print(json.dumps({"भाषा": "मराठी"}, ensure_ascii=False))`, codeLanguage: "python", output: "{\"भाषा\": \"मराठी\"}" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• csv.reader पंक्ती पंक्ती list देते\n• JSON keys string\n• dumps/loads — string; dump/load — file\n• ensure_ascii=False हे सर्व भाषेसाठी\nensure_ascii list मिळते.\nensure_ascii JSON नियम.\nensure_ascii file व string.\nensure_ascii भाषा सर्व." },
      { title: "8. Interactive", content: "खेळण्यासाठी:", code: `import json
config = {"mode": "dark", "vol": 70}
print(json.loads(json.dumps(config)))`, codeLanguage: "python", output: "{'mode': 'dark', 'vol': 70}" },
      { title: "Mini Project — स्कोअर जतन", content: "गुण संच JSON मध्ये:\nस्कोअर जतन गुण 85 92.\nस्कोअर जतन dumps करा.\nस्कोअर जतन ensure off.\nआरोही वेद गुण 85 92.\nसंच dumps गुण 85 92.\noutput दोन गुण 85 92.\nस्कोअर सराव गुण 85 92.\nआरोही वेद गुण 85 92.\nसंच dumps गुण 85 92.\noutput दोन गुण 85 92.\nस्कोअर विस्तार 85 92.\nस्कोअर विस्तार dumps करा.\nस्कोअर विस्तार ensure off.\nआरोही वेद 85 92.\nदोन गुण 85 92.\nदोन गुण dumps करा.\nदोन गुण ensure off.\noutput दोन 85 92.\nस्कोअर वापरा 85 92.\nस्कोअर वापरा dumps करा.\nस्कोअर वापरा ensure off.\nआरोही वेद 85 92.\nसंच dumps 85 92.\noutput दोन 85 92.\nस्कोअर सराव 85 92.\nआरोही वेद 85 92.\nसंच dumps 85 92.\noutput दोन 85 92.\nस्कोअर शेवट 85 92.\nस्कोअर शेवट dumps करा.\nस्कोअर शेवट ensure off.\nआरोही वेद 85 92.\nसंच dumps 85 92.\noutput दोन 85 92.\nस्कोअर समाप्त 85 92.\nस्कोअर समाप्त dumps करा.\nस्कोअर समाप्त ensure off.\nआरोही वेद 85 92.\nसंच dumps 85 92.\noutput दोन 85 92.", code: `import json
scores = {"आरोही": 85, "वेद": 92}
print(json.dumps(scores, ensure_ascii=False))`, codeLanguage: "python", output: "{\"आरोही\": 85, \"वेद\": 92}" },
    ],
    practiceQuestions: [
      "CSV मध्ये काय असतो?",
      "json.dumps vs json.dump?",
      "ensure_ascii=False का देतात?",
      "csv.reader काय देतो?",
    ],
    quiz: [
      { question: "CSV म्हणजे?", options: ["टेबल रूप", "इमेज", "audio", "video"], correct: 0 },
      { question: "JSON वाचण्यासाठी?", options: ["json.loads", "json.dumps", "csv.reader", "slice"], correct: 0 },
      { question: "देवनागरी hex मध्ये नको म्हणून?", options: ["ensure_ascii=False", "utf-8=True", "raw=True", "ascii=True"], correct: 0 },
    ],
    challenge: {
      prompt: "देवनागरी सह JSON बनवा.",
      starterCode: `import json
print(json.dumps({"भाषा": "मराठी"}, ensure_ascii=False))`,
      expectedOutput: "{\"भाषा\": \"मराठी\"}",
    },
    interviewQuestions: [
      "CSV vs JSON?",
      "dump/dumps फरक?",
    ],
    related: ["python-dataclasses", "python-testing", "python-files"],
    prev: "python-dataclasses",
    next: "python-testing",
  },

  {
    slug: "python-testing",
    categoryId: "python",
    title: "Testing (assert)",
    marathiTitle: "Testing - चुका आधीच शोधणे",
    level: "advanced",
    minutes: 15,
    summary: "assert, छोट्या test फंक्शन्स मध्ये रचना — कोड बदलल्यावर आधीच पडताळणी.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "सामान्य assert तपासणी — अट खरी नसल्यास AssertionError:\n• assert अट, \"message\"\n• test function मध्ये छोट्याछोट्या तपासण्या\n• त्यांना आधीच चालवणे — bug लवकर सापडतो\n• नंतर pytest/unittest यांमध्ये वाढवता\npytest वाढ हेच सार.\npytest वाढ आज शिकतो.\npytest उद्या हेच सार.\npytest उद्या आज शिकतो.\nframework वाढ हेच सार.\nframework वाढ आज आणखी.\nframework उद्या हेच सार.\nframework उद्या आज व्यापक.\nपडताळणी आज संपले.\nचार मुद्दे आज पूर्ण.\nचार मुद्दे अभिनंदन.\nशेवटी नोंदी आज पूर्ण.\nशेवटी नोंदी अभिनंदन." },
      { title: "2. सोप्या मराठीत समज", content: "आणखी कोड लिहिण्यापूर्वी \"मी केलेले पक +1 चा हिशोब\" प्रमाणित करून घेता. अट अयशस्वी झाल्यावर ओरडते. छोट्या तपासण्यांचा \"रक्षक\" — कोड बदलल्यावर आधीच बोर्ड लावतो.\nहिशोब प्रमाण पक +1.\nहिशोब प्रमाण आधीच पडताळा.\nहिशोब प्रमाण बदल नंतर.\nहिशोब प्रमाण शांत न रहा.\nओरडते अपयश पक +1.\nरक्षक बोल्ड पक +1.\nbug लवकर पक +1." },
      { title: "3. Syntax", content: "पहिले assert:", code: `def double(x):
    return x * 2

def test_double():
    assert double(2) == 4
    assert double(0) == 0
    assert double(-3) == -6
    return "सगळे पास!"

print(test_double())`, codeLanguage: "python", output: "सगळे पास!" },
      { title: "4. उदाहरणे", content: "assert capture करणे:", code: `def divide(a, b):
    assert b != 0, "शून्याने भागाकार नको"
    return a / b

print(divide(10, 2))
try:
    divide(10, 0)
except AssertionError as e:
    print("catch:", e)`, codeLanguage: "python", output: "5.0\ncatch: शून्याने भागाकार नको" },
      { title: "5. वास्तविक जीवनातील उदाहरण", content: "छोटी test सूची:", code: `def add(a, b):
    return a + b

tests = [
    (add(1, 2), 3),
    (add(-1, 1), 0),
    (add(2, 2), 5),
]
for got, want in tests:
    if got == want:
        print("पास")
    else:
        print(f"नापास: मिळाले {got}, हवे {want}")`, codeLanguage: "python", output: "पास\nपास\nनापास: मिळाले 4, हवे 5" },
      { title: "6. सामान्य चुका", content: "✗ assert च्या जागी प्रिंट तपासणे\n✗ कोडमधील critical checks मध्ये assert वापरणे (optimization ने बंद होते)\n✗ test च्या नावाला test_ उपसर्ग न देणे — पुढे framework चालणार नाही", code: `def half(x):
    return x // 2

assert half(10) == 5
assert half(7) == 3
print("test_double पास")`, codeLanguage: "python", output: "test_double पास" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• assert = विकास-काळातील तपासणी\n• test functions लहान, एक विषय\n• नियमित चालवा — प्रत्येक बदलानंतर\n• coverage — मुख्य जोखीम झाकणे" },
      { title: "8. Interactive", content: "खेळण्यासाठी:", code: `def is_even(n):
    return n % 2 == 0

assert is_even(4) is True
assert is_even(7) is False
print("सगळे निकाल पास")`, codeLanguage: "python", output: "सगळे निकाल पास" },
      { title: "Mini Project — ग्रेडिंग test", content: "ग्रेडचे निर्णय पडताळणे:", code: `def grade(m):
    if m >= 75:
        return "A"
    if m >= 35:
        return "B"
    return "C"

checks = [
    (grade(90), "A"),
    (grade(60), "B"),
    (grade(10), "C"),
]
for got, want in checks:
    assert got == want, f"grade({got}) != {want}"
print("ग्रेड test पास")`, codeLanguage: "python", output: "ग्रेड test पास" },
    ],
    practiceQuestions: [
      "assert अट अयशस्वी झाल्यावर काय?",
      "test function नाव कसे ठेवतात?",
      "assert मध्ये message का?",
      "कोणत्या कोडला assert योग्य?",
    ],
    quiz: [
      { question: "assert अयशस्वी झाल्यास?", options: ["AssertionError", "ValueError", "compiler", "काही नाही"], correct: 0 },
      { question: "test functions नावे?", options: ["test_...", "main", "run", "loop"], correct: 0 },
      { question: "assert साठी सर्वोत्तम जागा?", options: ["विकास तपासण्या", "नेटवर्क", "UI", "हार्डवेअर"], correct: 0 },
    ],
    challenge: {
      prompt: "आधार कार्याच्या test निकालांची खात्री करा.",
      starterCode: `def half(x):
    return x // 2

assert half(10) == 5
assert half(3) == 1
print("all passed")`,
      expectedOutput: "all passed",
    },
    interviewQuestions: [
      "assert सीमा कुठे?",
      "unit test म्हणजे काय?",
    ],
    related: ["python-csv-json", "python-mega-project", "python-debugging"],
    prev: "python-csv-json",
    next: "python-mega-project",
  },

  {
    slug: "python-mega-project",
    categoryId: "python",
    title: "Advanced Project",
    marathiTitle: "Advanced Project - लायब्ररी व्यवस्थापन",
    level: "advanced",
    minutes: 22,
    summary: "dataclass, JSON, function objects, generator — सगळं एकत्र करून लायब्ररी व्यवस्थापन.",
    levelLabel: L6_LABEL,
    sections: [
      { title: "1. संकल्पना", content: "आत्ताचे सगळे concept राबवू: dataclass पुस्तक, JSON जतन, function-object dynamic lookup, generator.\n• Book → dataclass\n• Library → add/find\n• shelf.json → जतन/लोड\n• generator क्रमांक पुढे" },
      { title: "2. सोप्या मराठीत समज", content: "लायब्ररीची नोंदवही — पुस्तकांची माहिती, शोध, जतन. \"कोणत्या लेखकाने लिहिले\" विचारलं तर library फक्त शोधते. Junior संपणारं आणि दर पुस्तकाची माहिती ठिकठिकाणी आहे — ही संपूर्ण व्यवस्था." },
      { title: "3. Step 1 - पुस्तक माहिती", content: "Book dataclass:", code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

b = Book("पानिपत", "विश्वास पाटील")
print(b)`, codeLanguage: "python", output: "Book(title='पानिपत', author='विश्वास पाटील')" },
      { title: "4. Step 2 - Library व शोध", content: "dynamic attribute शोध (getattr):", code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

class Library:
    def __init__(self):
        self.books = []

    def add(self, book):
        self.books.append(book)
        return len(self.books)

    def find(self, key, value):
        for book in self.books:
            if getattr(book, key) == value:
                return book
        return None

lib = Library()
lib.add(Book("पानिपत", "विश्वास पाटील"))
lib.add(Book("श्रीमान योगी", "र. धों. कर्वे"))
print(lib.find("author", "विश्वास पाटील"))
print(lib.find("title", "असलेली पुस्तके"))`, codeLanguage: "python", output: "Book(title='पानिपत', author='विश्वास पाटील')\nNone" },
      { title: "5. Step 3 - JSON जतन", content: "data फाइलमध्ये ठेवणे:", code: `import json
from dataclasses import dataclass, asdict

@dataclass
class Book:
    title: str
    author: str

books = [Book("पानिपत", "विश्वास पाटील"), Book("मृत्युंजय", "शिवाजी सावंत")]
with open("shelf.json", "w") as f:
    json.dump([asdict(b) for b in books], f, ensure_ascii=False)

with open("shelf.json") as f:
    saved = json.load(f)
print(len(saved), saved[1]["title"])`, codeLanguage: "python", output: "2 मृत्युंजय" },
      { title: "6. सामान्य चुका", content: "✗ CSV/JSON file दुसऱ्या directory मध्ये — कोड चालत नाही\n✗ dataclass सोबत getattr चा गैरवापर\n✗ asdict न गुंडाळून dump of dataclass — error\n✗ file open state सोडणे — with वापरा" },
      { title: "7. महत्त्वाच्या नोंदी", content: "• dataclass + asdict → JSON उत्तम जोड\n• getattr(book, key) — attributes गतिशील\n• JSON जतन bag/navigation\n• छोटे modules — मोठी व्यवस्था" },
      { title: "8. Interactive", content: "खेळण्यासाठी:", code: `from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str

lib = []
lib.append(Book("Python", "आरोही"))
lib.append(Book("मराठी", "वेद"))
print(len(lib), lib[0].author)`, codeLanguage: "python", output: "2 आरोही" },
      { title: "Mini Project - वाचन अनुक्रमणिका", content: "generator ने पुढील क्रमांक:", code: `def book_ids(start=1):
    num = start
    while True:
        yield num
        num += 1

ids = book_ids(101)
print(next(ids), next(ids), next(ids))`, codeLanguage: "python", output: "101 102 103" },
    ],
    practiceQuestions: [
      "getattr मध्ये काय होतं?",
      "asdict का वापरलं?",
      "generator क्रमांक कसा देतो?",
      "JSON जतनाचा फायदा?",
    ],
    quiz: [
      { question: "dataclass → dict कसा?", options: ["asdict", "dict()", "dumps", "list"], correct: 0 },
      { question: "attribute dynamically मिळवणे?", options: ["getattr", "getitem", "get()", "fetch"], correct: 0 },
      { question: "अखंड क्रमांकासाठी?", options: ["generator", "list", "tuple", "int"], correct: 0 },
    ],
    challenge: {
      prompt: "generator ने 3 क्रमांक द्या.",
      starterCode: `def course(start=1):
    num = start
    while True:
        yield num
        num += 1

ids = course(101)
print(next(ids), next(ids), next(ids))`,
      expectedOutput: "101 102 103",
    },
    interviewQuestions: [
      "या project मध्ये कोणते concept वापरले?",
      "JSON जतन का महत्त्वाचं?",
    ],
    related: ["python-testing", "python-csv-json", "python-dataclasses"],
    prev: "python-testing",
  },
];