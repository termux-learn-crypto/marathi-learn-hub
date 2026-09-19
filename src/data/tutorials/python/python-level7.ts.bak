import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 7 — Practical Python (व्यावहारिक Python) ===
export const L7_LABEL = "Level 7 — Practical Python (व्यावहारिक Python)";

export const pythonLevel7: Tutorial[] = [
  {
    slug: "python-fstrings",
    categoryId: "python",
    title: "f-strings in Depth",
    marathiTitle: "f-strings - सुबक मजकूर कोड",
    level: "advanced",
    levelLabel: L7_LABEL,
    minutes: 14,
    summary: "f-strings ने variables थेट string मध्ये; formatting तपशीलवार.",
    sections: [
      {
        title: "का शिकावे? f-strings - सुबक मजकूर कोड चे फायदे आणि महत्त्व",
        content: "\"f-strings - सुबक मजकूर कोड\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "f-string म्हणजे काय?",
        content: "f-string म्हणजे formatted string — variable चे मूल्य थेट string मध्ये घालण्याची पद्धत. अवतरणांच्या आधी f लिहितात: f\"...\" आणि आत {variable} ठेवलं की त्या जागी मूल्य छापलं जातं.\n\nसमजा name मध्ये \"आरोही\" ठेवला; f\"नमस्कार, {name}!\" लिहिलं की Python ते नमस्कार, आरोही! छापतो.\n\nजोडणीचा जुना पर्याय concatenation — \"नमस्कार, \" + name असे + ने string जोडतात. f-string मध्ये मजकूर जसाच्या तसा राहतो आणि मूल्याची जागा कंसाने स्पष्ट दिसते.",
        code: `name = "आरोही"
print(f"नमस्कार, {name}!")`,
        codeLanguage: "python",
        output: `नमस्कार, आरोही!`,
      },
      {
        title: "Expressions: फक्त variable नाही",
        content: "{ } मध्ये फक्त variable नाही तर कोणतंही expression चालतं — बेरीज, गुणाकार, function call. Python आधी expression ची गणना करतो आणि मग निकाल त्या जागी छापतो.\n\nखाली a + b आणि a * b दोन्ही एकाच print मध्ये: 10 + 5 = 15, 10 * 5 = 50.",
        code: `a = 10
b = 5
print(f"बेरीज: {a + b}, गुणाकार: {a * b}")`,
        codeLanguage: "python",
        output: `बेरीज: 15, गुणाकार: 50`,
      },
      {
        title: "अचूक संख्या: दशांश ठिकाणे",
        content: "मूल्याच्या मागे : लावून format spec देतात. {x:.2f} म्हणजे दोन दशांश ठिकाणी छापा — .2f मधला f म्हणजे floating point, त्याआधीचा .2 दशांशांची संख्या. गोल करणं Python स्वतः करतो: 12.34567 ते 12.35 दिसतं.\n\nकिंमत, सरासरी किंवा शास्त्रीय मोजमापात एकसारखे दशांश हवे असतील तर ही पद्धत थेट लिहिता येते.",
        code: `price = 12.34567
print(f"किंमत: {price:.2f}")`,
        codeLanguage: "python",
        output: `किंमत: 12.35`,
      },
      {
        title: "रुंदी आणि संरेखन",
        content: "{value:10} — 10 अक्षरांची रुंदी देतो; मूल्य लहान असेल तर उरलेली जागा स्पेसने भरते. दिशाही निवडता येते: {s:>10} मूल्य उजवीकडे संरेखित, {s:<10} डावीकडे.\n\nआकड्यांच्या सारणीत साधारणपणे प्रत्येक column एका रुंदीत आणि आकडे उजवीकडे संरेखित दिसतात. पूर्णांकासाठी {n:3d} असे रुंदी देतात. दशांश आणि रुंदी दोन्हीही एकत्र येतात: {x:8.2f} — 8 रुंदी, दोन दशांश.",
        code: `score = 95
print(f"गुण: {score:>10}")`,
        codeLanguage: "python",
        output: `गुण:         95`,
      },
      {
        title: "एका वाक्यात अनेक fields",
        content: "एकाच f-string मध्ये कितीही { } चालतात — प्रत्येकाच्या जागी तेच मूल्य बसते. खाली name, subject आणि score तीनही एकाच वाक्यात आले.\n\noutput नैसर्गिक वाक्य आहे: मजकूर आणि मूल्यं मिसळलेली. निकाल पत्रक, बिल, अहवाल — वाचकाला एकाच ओळीत संपूर्ण माहिती मिळते.",
        code: `name = "मीरा"
score = 92
subject = "विज्ञान"
print(f"{name} ने {subject} मध्ये {score} गुण मिळवले")`,
        codeLanguage: "python",
        output: `मीरा ने विज्ञान मध्ये 92 गुण मिळवले`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ f उपसर्ग विसरलात तर {name} असेच output मध्ये दिसतं — Python ते साधा मजकूरच समजतो.\n\n✗ format spec चा क्रम चुकला (उदा. {x:2.f}) तर ValueError येतो — दशांश आधी, f शेवटी.\n\n✗ अवतरणांचा गोंधळ — बाहेर दुहेरी अवतरण आणि आत single असे स्वरूप घेतात: f\"She said '{name}'\".\n\nखाली {x} आणि {x * x} अशी दोन expression — 7 चा वर्ग 49 output मध्ये.",
        code: `x = 7
print(f"{x} चा वर्ग {x * x}")`,
        codeLanguage: "python",
        output: `7 चा वर्ग 49`,
      },
      {
        title: "Interactive: बदलून पाहा",
        content: "खालील कोड आधी तसाच चालवा. मग name चे मूल्य तुमच्या नावाने बदला आणि शुभ संध्याकाळ ऐवजी शुभ सकाळ करा — प्रत्येक बदल output मध्ये दिसतो.\n\n{ } मधलं सूत्र बदलूनही तपासता येतं. अडचण आल्यास f आहे का, कंस जुळले आहेत का, अवतरण बरोबर आहे का — हा क्रम पाळा.",
        code: `name = "वेद"
print(f"नमस्कार {name}, शुभ संध्याकाळ")`,
        codeLanguage: "python",
        output: `नमस्कार वेद, शुभ संध्याकाळ`,
      },
      {
        title: "Mini Project: गुणांचा सुबक card",
        content: "एका f-string मध्ये name आणि score एकत्र. \\n म्हणजे नवीन ओळ — त्यामुळे card दोन ओळींत दिसतो.\n\nहीच रचना पुढे याद्या किंवा अहवाल छापताना वापरता येते — रचना बदलायची असेल तर फक्त f-string चा मजकूर बदला.",
        code: `name = "आरोही"
score = 95
print(f"=== {name} ===
गुण: {score}")`,
        codeLanguage: "python",
        output: `=== आरोही ===
गुण: 95`,
      },
    {
        title: "जुन्या पद्धती: % आणि format()",
        content: "f-string ही Python 3.6 मध्ये आली. त्याआधी मजकूरात मूल्यं बसवण्याच्या दोन पद्धती होत्या. सर्वात जुनी टक्के (%) पद्धत सी भाषेतून आलेली — \"मी %d वर्षांचा\" % (10) अशी लिहितात. %s म्हणजे मजकुराची जागा, %d पूर्णांकाची, %f दशांशाची. ही पद्धत आजही logging मध्ये दिसते, म्हणून ती ओळखणं आवश्यक आहे.\n\nतिच्यानंतर Python 3 मध्ये str.format() पद्धत आली: \"नमस्कार, {}!\".format(name) — कंसात मूल्यं क्रमाने बसतात. धन्यांकाने क्रम बदलता येतो: \"{1} आणि {0}\".format(a, b). नावे दिल्यास key म्हणून वापरता येतात. format spec ही मात्र तीच: : नंतर रुंदी, दशांश, संरेखन असे तपशील.\n\nकधी कधी जुना कोड वाचताना ही दोन्ही पद्धत भेटते. library च्या उदाहरणांमध्येही असतात. तो कोड समजायला हवा म्हणून आधी जुने शिकलो. पण नवीन कोड लिहिताना f-stringच निवडा.\n\nमुख्य फरक एकच: f-string मध्ये मूल्य थेट मजकुरात असतं, त्यामुळे कोड वाचताना output चा अंदाज येतो. format() मध्ये मजकूर एका ठिकाणी आणि मूल्यं कंसात दुसऱ्या; मोठ्या string मध्ये हा फरक व्यवस्थापन अवघड करतो.\n\nखाली तिन्ही पद्धतींनी तोच संदेश. तिन्ही चालवा आणि output सारखा येतो का पाहा.",
        code: `name = "आरोही"
print("%s ला 95 गुण" % name)
print("{} ला 95 गुण".format(name))
print(f"{name} ला 95 गुण")`,
        codeLanguage: "python",
        output: `आरोही ला 95 गुण
आरोही ला 95 गुण
आरोही ला 95 गुण`,
      },
      {
        title: "अवतरणांची निवड: single, double, triple",
        content: "f-string लिहिताना बाहेर दुहेरी अवतरण असेल तर आतल्या अवतरणांचा विचार करावा लागतो. मूल्यात single quote असेल तर बाहेर double आणि आत single ठेवतात: f\"She said 'नमस्कार'\" — हे बरोबर चालतं. उलट बाहेर single असेल तर आत double: f'तिने \"होय\" म्हटलं'.\n\ndict मधून मूल्य काढताना हीच काळजी लागते: f\"{d['मराठी']}\" — बाहेर double, आत single. key नावात जर प्रत्यक्ष single quote असेल तर गोंधळ होतो; अशा वेळी key आधी variable मध्ये घेऊन मग वापरा.\n\nमोठा बहु-ओळीचा मजकूर असेल तर triple quotes: f\"\"\"पहिली ओळ...\"\"\" अशी रचना. त्यात \n (नवीन ओळ) थेट लिहिता येतो किंवा प्रत्यक्ष enter दाबूनही ओळी वेगळ्या करता येतात.\n\nPython 3.12 नंतर (PEP 701) f-string नियम लवचिक झाले — आतल्या मजकुरात पुन्हा त्याच अवतरणांचा वापरही करता येतो. पण आपला कोड जुन्या आवृत्तीवरही चालला पाहिजे, म्हणून जुन्या पद्धतीच सांभाळणं योग्य.\n\nखाली dict key चा वापर आणि अवतरणांचे प्रयोग आहेत. output आधी कागदावर लिहा आणि मग कोड चालवून पडताळा घ्या.",
        code: `d = {"मराठी": "अभिमानाची भाषा"}
print(f"एका वाक्यात: {d['मराठी']} आणि 'python'")`,
        codeLanguage: "python",
        output: `एका वाक्यात: अभिमानाची भाषा आणि 'python'`,
      },
      {
        title: "संख्यांचे आधार: binary, hex, अष्टांक",
        content: "कधी कधी मूल्य इतर आधारांमध्ये दाखवावं लागतं — machine वर बायनरी, नेटवर्किंगमध्ये hex. f-string मध्ये format spec ने हे लगेच होतं: {value:b} म्हणजे बायनरी, {value:x} म्हणजे hex लहान अक्षरे, {value:X} मोठी अक्षरे, {value:o} अष्टांक.\n\nउदा. 255 ही संख्या: बायनरीत 11111111, hex मध्ये ff, अष्टांकात 377 दिसते. हे फक्त दाखवण्याची पद्धत आहे — संख्येचं मूल्य बदलत नाही; फक्त ती कशी छापायची हे ठरतं.\n\nआणखी एक आवडीची सोय: literal curly brace छापण्यासाठी दुहेरी कंस लिहावे लागतात. f\"{{नमस्कार}}\" लिहिलं तर output मध्ये {नमस्कार} असंच दिसतं. एकटं { लिहिलं तर Python expression मानतो.\n\nनियम आठवा: f-string मध्ये { } इतकेच expression ची जागा. पुढे फॉर्मॅटिंगच्या इतर सोयी याच संकल्पनेवर उभ्या आहेत.\n\nखाली तीन आधारांमध्ये 255 दाखवला. प्रत्येक output स्वतः मोजून पहा — बायनरी, hex आणि अष्टांक किती येतो ते.",
        code: `x = 255
print(f"बायनरी: {x:b}")
print(f"Hex: {x:x}")
print(f"अष्टांक: {x:o}")`,
        codeLanguage: "python",
        output: `बायनरी: 11111111
Hex: ff
अष्टांक: 377`,
      },
      {
        title: "रुंदी, संरेखन आणि भराव खुणा",
        content: "सारणीतील आकडे एका रुंदीत उभे राहिले तर वाचणं सोपं जातं. रुंदीनंतर दिशा देतात: {s:>10} उजवीकडे, {s:<10} डावीकडे, {s:^10} मध्यभागी. रुंदीसंबंधी मूल्य आपोआप स्पेसने भरतं.\n\nस्पेस ऐवजी इतर खूणांनी भरायचं असेल तर ती खूण दिशेच्या आधी लिहितात: {n:_>10} म्हणजे आकडा उजवीकडे आणि उरलेली जागा अधोरेखापट्टीने भरा. ही सोय आकड्यांमधील गंभीर अहवालांत सामान्य आहे.\n\nपूर्णांकासाठी रुंदीसोबत d हे अक्षर लागते: {n:3d}. दशांशांसोबत रुंदी आणि दशांश दोन्ही: {x:8.2f} — एकूण 8 अक्षरांची रुंदी, त्यात 2 दशांश. आकडा लहान असेल तर उरलेली जागा नियमाप्रमाणे स्पेसने भरते.\n\nखाली score रुंदी 4 मध्ये उजवीकडे संरेखित करून छापला आहे. आकडा = 7 असल्याने output मध्ये 3 स्पेस आणि मग 7 दिसतो. आकडा रुंदीपेक्षा मोठा असेल तर रुंदी आपोआप वाढते — काहीही कापला जात नाही.\n\nहे सगळं format spec mini-language च्या नियमांनी चालतं; अधिकृत दस्तऐवजात संपूर्ण नकाशा आहे. सुरुवातीला या तीन नियमांचं पुरेसं आहे.",
        code: `score = 7
print(f"गुण: {score:>4}")`,
        codeLanguage: "python",
        output: `गुण:    7`,
      },
      {
        title: "Debugging साठी = चिन्ह",
        content: "चूक शोधताना आपण बर्याचदा print(f\"x = {x}\") अशी ओळ लिहितो. f-string मधला = ही सवय बदलते: f\"{x=}\" लिहिलं की output मध्ये x=95 असंच दिसतं — नाव, बरोबरी, मूल्य एकत्र.\n\nसमजा तुमचा कोड कुठे चुकतोय हे शोधत आहात. अनेक variables एकाच ओळीत सापडतात: print(f\"{a=} {b=} {a*b=}\"). output मध्ये प्रत्येकाचं मूल्य लगेच दिसतं. यालाच debugging म्हणतात.\n\nformat spec सोबतही = वापरता येतं: f\"{price=:.2f}\" म्हणजे price चे मूल्य दोन दशांशांत दाखवावं. उदा. price 12.5 असेल तर output: price=12.50.\n\nलक्षात घ्या: = ची सोय Python 3.8 पासून आहे. जुन्या आवृत्तीवर कोड चालवत असाल तर ही चिन्ह विसरा आणि जुनी पद्धत वापरा.\n\nखाली बेरीज आणि भागाकाराची मूल्ये = सह छापली आहेत. output मधून कोणती मूल्यं कशी आहेत ते पहा आणि अंदाज पडताळा.",
        code: `a = 10
b = 3
print(f"{a=} {b=} {a*b=}")
print(f"{a/b=:.2f}")`,
        codeLanguage: "python",
        output: `a=10 b=3 a*b=30
a/b=3.33`,
      },
      {
        title: "टक्केवारी, विभाजक आणि वैज्ञानिक संख्या",
        content: "व्यावहारिक कोडमध्ये आकडे अनेक रूपांमध्ये दिसतात — टक्केवारी, मोठी संख्या, सूक्ष्म मूल्ये. format spec ती सजवून दाखवतो.\n\nटक्केवारीसाठी :.1% — 0.875 म्हणजे output मध्ये 87.5% दिसतं. Python आधी 100 ने गुणतो आणि टक्के चिन्ह जोडतो; स्वतः 100 ने गुणायची गरज नाही.\n\nमोठ्या संख्येला कॉमा विभाजक: {amount:,} लिहिलं तर 1234567 म्हणजे 1,234,567 दिसतं. आकडा वाचण्याच्या सोयीपेक्षाही तयार करताना चूक कमी होते.\n\nवैज्ञानिक पद्धतीसाठी :.2e — 12345.678 ला 1.23e+04 असं दाखवतो. अत्यंत मोठ्या किंवा लहान संख्यांसाठी ही पद्धत शास्त्रीय गणनेत वापरतात.\n\nनियम आठवा: : मागे type (f, d, b, x, e, %), त्यासोबत दशांश (.2), आधी रुंदी. क्रम — भराव, संरेखन, रुंदी, दशांश, type. खाली तिन्ही प्रकार एकत्र दाखवले आहेत.",
        code: `p = 0.875
amt = 1234567
sci = 12345.678
print(f"{p:.1%}")
print(f"{amt:,}")
print(f"{sci:.2e}")`,
        codeLanguage: "python",
        output: `87.5%
1,234,567
1.23e+04`,
      },
      {
        title: "loop मध्ये f-string: सुबक सारण्या",
        content: "f-string चं खरं सामर्थ्य loops मध्ये दिसतं. प्रत्येक फेरीत मूल्य बदलतं आणि f-string ते नव्या ओळीत सजवून छापतो. यादी, zip, enumerate — सगळ्यांशी ती जुळते.\n\nखाली दोन याद्या zip केल्या आणि प्रत्येक जोडी f-string मधून छापली. मजकूर आणि मूल्य एका ओळीत — output वाचताना सूची स्पष्ट दिसते.\n\nप्रत्यक्ष अहवाल अशाच रचनेतून बनतात: निकालपत्रक, बिल, सूची, log फाईल. फक्त मजकूर बदलला की नवा अहवाल तयार.\n\nटीप: f-string मधील expression हलकं ठेवा — जड गणना आधी variable मध्ये काढून मग वापरा. कोड वाचण्याला सोपा राहतो आणि चूक शोधायला सोपी जाते.\n\nयादी मोठी केली तरी कोड बदलत नाही — तोच loop, तीच f-string, मूल्यं आपोआप नवी. ही आता आपल्या toolbox मधील रोजची सोय आहे.",
        code: `names = ["आरोही", "वेद", "मीरा"]
scores = [95, 72, 88]
for name, score in zip(names, scores):
    print(f"{name}: {score}")`,
        codeLanguage: "python",
        output: `आरोही: 95
वेद: 72
मीरा: 88`,
      },
      {
        title: "हे लक्षात ठेवा — पुनरावलोकन",
        content: "या धड्याचा सारांश ठळक मुद्द्यांमध्ये:\n\n• f-string म्हणजे मजकुरात थेट मूल्यं बसवण्याची सोय — उपसर्ग f किंवा F.\n• { } मध्ये कोणतंही expression चालतं — गणित, function call.\n• : नंतर format spec — .2f दशांश, > < ^ संरेखन, b/x/o आधार, , विभाजक, % टक्के, e वैज्ञानिक.\n• = ही debugging सोय (आवृत्ती 3.8+).\n• literal कंसासाठी {{ }} दुहेरी.\n• अवतरणांची काळजी — बाहेर आणि आत वेगळी अवतरणे.\n• जुन्या % आणि format() पद्धती ओळखा; नव्यात f-string निवडा.\n\nसवय करा: तापमान, बिल, निकालअहवाल हे f-string ने सजवा. नियमित सरावाने ही संकल्पना आपोआपच आठवते.\n\nपुढील धड्यात enumerate आणि zip — क्रम आणि जोड्या, ज्या f-string सोबत जोडून सुबक सारण्या बनवण्याचा पाया आहेत.",
      },
      {
        title: "आजच्या दिवसांमध्ये f-string कुठे उपयोगी येते?",
        content: "f-string हा आजच्या Python मधील सर्वांत वापरला जाणारा formatting पर्याय आहे — web development, data science, automation, परीक्षा results, bank bills, त्याबरोबर logging मधील संदेश — सर्वत्र. ती वापरली जाते कारण ती जलद गणणे करते, कोड स्वच्छ ठेवते आणि output मध्ये चूक होण्याची शक्यता कमी करते.\n\nउदाहरणासाठी एक बिल printer विचारात घ्या. वस्तूंच्या नावे, दर आणि गुणवत्ता अशा प्रकारे प्रदर्शित कराव्या लागतात की त्या सुबक दिसाव्यात. f-string च्या रुंदी आणि संरेखन च्या सोयींमुळे असे बिल एका ओळीत छापता येते. form parameter मध्ये रुंदी दिल्यामुळे सर्व दर एका सरळ रेषेत येतात.\n\nवेब API कडून येणारे JSON data सुद्धा f-string ने मराठीत रूपांतरित करता येते. म्हणजे इंग्रजी शब्दांमधील संगणकीय निकाल मराठी sentences मध्ये दाखवता येतात. यामुळे सामान्य वापरकर्त्याला अर्थ समजतो.\n\nविद्यार्थ्यापर्यंतचे अहवाल, शेतकऱ्याचा उत्पन्न विवरण, दुकानदाराचा मालतपास — प्रत्येक ठिकाणी f-string असे चाललेलं दिसते. शिकल्यावर तुम्हालाही हा फरक रोज दिसेल की किती छोटे-छोटे कोड हे तंत्र वापरतात.\n\nआजवरच्या सर्व उदाहरणांमध्ये f-string output मध्ये प्रत्यक्ष मूल्ये बसत होती — तेच या research चे शेवटचे धडे आहेत: f-string ही केवळ सजावट नव्हे, तर output वाचणाऱ्या माणसासाठी स्पष्ट संवाद आहे.",
        code: `items = [("पोळी", 20), ("दही", 15)]
for name, price in items:
    print(f"{name:<6} ₹{price:>4}")`,
        codeLanguage: "python",
        output: `पोळी    ₹  20
दही     ₹  15`,
      },
      {
        title: "f-string मध्ये तारखा आणि वेळ",
        content: "व्यावहारिक कोडमध्ये तारखा आणि वेळ छापणे नेहमीच लागते. datetime module चा object थेट f-string मध्ये घालता येतो, पण त्याचे स्वरूप Python च्या default प्रमाणे YYYY-MM-DD असे येते. आपल्याला मराठीत किंवा इच्छित स्वरूपात हवे असेल तर strftime पद्धतीने format करावे लागते.\n\nउदा. date.today() मध्ये आजची तारीख असते. f\"आजची तारीख: {today}\" लिहिल्यास default format मिळतो. त्याऐवजी today.strftime(\"%d-%m-%Y\") लिहिल्यास दिवस-महिना-वर्ष अशी मागणी होते.\n\n%H:%M:%S म्हणजे तास-मिनिट-सेकंद — हे log files मधे कधी घडले हे दाखवण्यासाठी वापरतात. %p म्हणजे AM/PM चिन्ह. %A म्हणजे आठवड्याच्या दिवसाचे नाव, %B महिन्याचे नाव.\n\nतारीख unknown असताना datetime.now() वापरतात; time.time() मधून epoch seconds मिळतात जी मोजमापासाठी उपयुक्त असतात. त्या seconds ला नंतर माणूस वाचू शकेल अशा स्वरूपात नेता येते.\n\nशिकताना नेहमी लक्षात ठेवा — f-string फक्त प्रदर्शन करते; data चे memory मधील मूल्य बदलत नाही. म्हणून अहवाल सजवताना स्वरूप निवडा आणि गणना मात्र मूळ value वर करा.\n\nखाली आजची तारीख दोन स्वरूपांमध्ये दाखवली आहे — एक Python चे मूळ, दुसरे सुबक मराठी प्रमाणे.",
        code: `from datetime import date
today = date.today()
print(f"आज: {today}")
print(f"सुबक: {today.strftime('%d-%m-%Y')}")`,
        codeLanguage: "python",
        output: `आज: 2026-09-19
सुबक: 19-09-2026`,
      },
      {
        title: "nested f-string आणि जटिल expression",
        content: "एखाद्या { } मधे दुसरा f-string असेल तर त्याला nested f-string म्हणतात. हे फारसे वारंवार आवश्यक नसते; पण गतिमान रुंदी द्यायची असल्यास उपयुक्त ठरते. जसे रुंदीचे अंक स्वतः variable मध्ये ठेवून f\"{name:{width}}\" असे लिहिता येते — आतल्या कंसात width चे मूल्य वापरले जाते.\n\nअशा रचनेत आतल्या कंसांची संतुलितता नेहमी तपासा. एक कंस जास्त किंवा कमी असेल तर SyntaxError येतो. Python संतुलन पडताळून तरच कोड चालवतो.\n\nशिवाय { } मध्ये function call, list comprehension, अगदी conditional expression द्याता येते. उदा. f\"{score if score >= 40 else 'नापास'}\" — एकाच ओळीत जगनिर्णय.\n\nसावधगिरी: अतिशय जटिल expression f-string मध्ये घातल्यास कोड कळणे कठीण होते. तसे असेल तर आधी important computation variable मध्ये करा आणि मग f-string मध्ये फक्त तो variable वापरा. हीच professional सवय मानली जाते.\n\nखाली width variable मधून घेतला आहे आणि त्यात निकाल screen वर योग्य तऱ्हेने बसतो. जटिल कोड असला तरी output सोप्या शब्दात येतो — हीच ध्येय रेखा असते.",
        code: `name = "मीरा"
width = 10
print(f"|{name:^{width}}|")`,
        codeLanguage: "python",
        output: `|   मीरा    |`,
      },
      {
        title: "f-string विरुद्ध format(): कोणते केव्हा वापरावे",
        content: "दोन्ही पर्याय Python मध्ये available आहेत आणि दोन्ही meaningfully काम करतात. फरक काय आणि कोणते केव्हा वापरावे हे समजून घेणे गरजेचे — कारण तुमच्या future कंपनीच्या codebase मध्ये दोन्ही असतील.\n\nformat() हे एक separate method असते ज्यात format string एकदा तयार केली जाते आणि values नंतर कंसात दिल्या जातात. जेव्हा एकच format string वेगवेगळ्या data वर पुन्हा-पुन्हा लावायची असेल, तेव्हा format() जास्त योग्य ठरते — कारण string वेगळी ठेवता येते आणि values नंतर बदलता येतात.\n\nf-string मध्ये values तर कोडमध्येच उपलब्ध असतात आणि तर लिहिताना बदल करणे अशक्य. f-string वाचताना clear दिसते कारण value आणि त्याच्या जागेचे नियम एकत्र दिसतात.\n\nPerformance पाहता f-string जास्त जलद असते — एका तपासण्यात हेच दिसले आहे. पण performance साठीच not मात्र format() नाकारू नका. कधी आणि कुठे वापरायचे हे उद्दिष्ट ठरवते.\n\nप्रत्येक लेखनाच्या वेळी सर्वात वाचनीय आणि देखभाल करायला सोपा कोड निवडा. जे सहकारी वाचतील, जे कोड next year देखील सांभाळतील तेच शहाणे पर्याय समजले जातात.\n\nया धड्यातील उदाहरणे दोन्हीही cultivate करतात — तुमच्या विशिष्ट गरजेनुसार योग्य निवड करण्याचा अधिकार तुम्हाला सोपवला आहे.",
        code: `template = "नमस्कार, {}!"
for name in ["आरोही", "वेद"]:
    print(template.format(name))`,
        codeLanguage: "python",
        output: `नमस्कार, आरोही!
नमस्कार, वेद!`,
      },
    {
        title: "f-string मधील सामान्य चुका — आणखी एक दृष्टिकोन",
        content: "f-string शिकताना काही चुका वारंवार होतात आणि त्यांची कारणे समजली तर त्रास वाचतो. पहिली — f उपसर्ग विसरणे. फक्त \"{name}\" लिहिल्यास output मध्ये मूल्य न येता सरळ {name} च मजकूर छापला जातो. तो output पाहून विद्यार्थी गोंधळतात कारण चूक कुठेतरी चुकल्यासारखे वाटतं.\n\nदुसरी — { } च्या आत जागा चुकणे. braces मधील expression सर्वसाधारण असते, पण आत dict key किंवा string असेल तर अवतरणांची जुळवणी करणे गरजेचे असते. बरीचशी syntax चुका इथेच घडतात — कारण आतला मजकूर आणि बाहेरचा मजकूर एकसारखी अवतरणे वापरल्यास Python ला सीमा कळत नाही.\n\nतिसरी — format spec मधील चुका. {x:2f} लिहिल्यास Python ला त्रुटी दिसते कारण दशांश आणि प्रकाराचा क्रम बरोबर असावा लागतो. बरोबर रूप {x:.2f} हेच — आधी बिंदू, मग दशांश संख्या, मग f. या क्रमातील एक जागा बदलल्यास समज न येणारी त्रुटी येते.\n\nचौथी — क्रमाने मूल्ये न बसणे. f-string मधील प्रत्येक expression वेगळं असतं; ती क्रमाने बसत नाहीत. आधी name मग score असे आपल्या इच्छेप्रमाणे लिहून घेतात — यात क्रम आपल्याच हातात असतो.\n\nपाचवी — गुंतागुंतीचे expression. एकाच कंसात calculator सारखी जड गणना केल्यास कोड वाचणे कठीण होते. नेहमी लहान steps मध्ये करा. ही सवय आपला कोड सांभाळण्यासाठी दिलासा देते.\n\nखाली f-string मधील सामान्य चुकीचा सराव — एक लहान उदाहरण बरोबर रूपात दाखवले आहे.",
        code: `name = "सायली"
print(f"नमस्कार, {name}! तुझे 5 मध्ये 100 गुण")`,
        codeLanguage: "python",
        output: `नमस्कार, सायली! तुझे 5 मध्ये 100 गुण`,
      },
      {
        title: "आवृत्ती तपासून नंतरच सुरुवात",
        content: "f-string सोबत काम करताना तुमच्या Python ची आवृत्ती काय आहे हे जाणून घेणे महत्त्वाचे. Python 3.6 पूर्वी f-string अस्तित्वातच नव्हती — जुन्या आवृत्तीवर ती चालवली तर SyntaxError मिळतो. त्यामुळे कोड begin करण्यापूर्वी आवृत्ती तपासा.\n\nटर्मिनलमध्ये python --version लिहिल्यास आवृत्ती दिसते. शाळा किंवा कंपनीतील संगणकांवर आजकाल 3.8, 3.10, 3.11 या आवृत्त्या असतात — त्या सर्वांवर f-string चालते.\n\nआवृत्ती 3.8 मधून = ही debugging सोय आली; 3.8 पूर्वी ती वापरण्यास मिळत नाही. 3.12 मधून nested quotes सारख्या सुधारणा आल्या. त्यामुळे तुमचा कोड कोणत्या आवृत्तीवर चालणार हे ठरवून त्या स्तराच्या सुविधांचाच उपयोग करा.\n\nजर कोड इतरांना पाठवणार असाल तर कमीत कमी आवृत्तीच्या सुविधांनीच लिहा — तुमच्या कोडला सर्वत्र चालणे शक्य होते. अन्यथा library मध्ये खरेदीतल्यासारखी चूक होते.\n\nएकच धडा लक्षात ठेवा: आवृत्ती जुनी आहे म्हणून f-string नको असे नाही; फक्त कोणत्या सुविधा उपलब्ध आहेत याची जाण ठेवा. आजच्या अभ्यासासाठी 3.8 वरील आवृत्ती सर्वोत्तम असते.\n\nखाली आवृत्ती तपासणीचा एक सोपा कोड — output मध्ये आवृत्ती क्रमांक दिसतो.",
        code: `import sys
print(sys.version)`,
        codeLanguage: "python",
        output: `3.11.9 (tags/v3.11.9:..., ......)`,
      },
      {
        title: "f-string चे पर्यायी उपयोग: Unicode आणि गणित",
        content: "f-string फक्त मजकूर सजवण्यापुरती मर्यादित नाही — ती Unicode मराठी अक्षरे, चिन्हे आणि गणितीय expression एकत्र मिसळण्याची क्षमता देतो. मराठी भाषेत शिकत असल्याने Unicode सोबत काम करणे नैसर्गिकच — नमस्कार, शुभ दिवस या सर्व शब्दांतील अक्षरे Unicode प्रणालीत आहेत.\n\nमराठीतील मात्रा जोडलेल्या अक्षरांचे output योग्य पद्धतीने यातील स्वरूपात दिसते. f-string मध्ये असे मजकूर ठेवताना अवतरणांची काळजी घेऊन सरळ मजकूर लिहिला तर Python तो जसाच्या तसा छापतो.\n\nगणितीय expression देखील सोपे — f-string मधील values ची बेरीज, वजाबाकी, गुणाकार एकाच ओळीत करता येते. 2 + 2 चे उत्तर लिहायचे असेल तर f\"{2 + 2}\" लिहिल्यास 4 मिळते.\n\nहे डेटा processing सोबत उपयोगी — सरासरी, टक्के काढून सुबक यादी तयार करताना f-string एकाच ठिकाणी हे सर्व साध्य करते.\n\nसंगणकावर काम करताना मराठी अक्षरे लिहिण्यासाठी आधुनिक editor वापरा — केवळ formatting साठी इंग्रजी अक्षरेच वापरावी लागत नाहीत. हेच शेवटचे महत्त्वाचे उदाहरण: भाषा आणि तंत्र दोन्ही एकत्र मिसळून शिकण्याची हीच सुरुवात आहे.\n\nखाली मराठी मजकूर आणि गणित expression एकत्र करून output दाखवले आहे.",
        code: `नाव = "आरोही"
print(f"{नाव} चे गुण: {95 + 3}")`,
        codeLanguage: "python",
        output: `आरोही चे गुण: 98`,
      },
    {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील सर्व दुवे Python अधिकृत दस्तऐवजांचे आहेत — तपशील, अचूक व्याख्या आणि संपूर्ण नियम त्यात आहेत. सर्च इंजिनऐवजी थेट इथून शिका:\n\n• f-string ची व्याख्या — lexical analysis: https://docs.python.org/3/reference/lexical_analysis.html#f-strings\n• format spec mini-language — संपूर्ण नकाशा: https://docs.python.org/3/library/string.html#formatspec\n• जुनी टक्के (%) पद्धत: https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting\n• str.format पद्धतीची माहिती: https://docs.python.org/3/library/stdtypes.html#str.format\n• string module — सर्व साधने: https://docs.python.org/3/library/string.html\n• formatting उदाहरणांचा संग्रह: https://docs.python.org/3/library/string.html#format-examples\n• PEP 498 — f-string सुरुवात: https://peps.python.org/pep-0498/\n• PEP 701 — नवीन f-string नियम: https://peps.python.org/pep-0701/\n• input आणि output चा tutorial: https://docs.python.org/3/tutorial/inputoutput.html\n• आवृत्ती 3.6 मधील बदलांची यादी: https://docs.python.org/3/whatsnew/3.6.html\n• वारंवार विचारलेले प्रश्न (FAQ): https://docs.python.org/3/faq/programming.html\n• printf-style formatting उदाहरणे: https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting\n\nप्रत्येक दुवा उघडून संबंधित परिच्छेद वाचा — व्याख्या पुन्हा न लिहिता अधिकृत मजकूर समजून घेणं ही professional सवय आहे.",
      },
    ],


    {
      title: "thread banavn entry - practically shuru karo",
      content: "chaliye practical example se shuru karte hain. aapko threading import karna hota hai, phir alag alag kaam ke liye alag banayiya. basic syntax: import threading. phir threading.Thread(target=kaam_function) se thread banata hain. start karne ke liye thread.start() istemal karein. chaliye ek simple example dekhte hain:

code: import threading\ndef mere_kaam():
    print("Kaam poora hua!")
t = threading.Thread(target=mere_kaam)
t.start(),
output: Kaam poora hua!,
    },
    {
      title: "Thread states aur is_alive check",
      content: "har thread ek state mainhta hai — created, started, running, finished. thread.is_alive() method se check kar sakte hain ke thread still chal raha hai ya already khatam ho chuka hai. yeh baat multithreading mein tracking ke liye bohot zaroori hoti hain.

example: if t.is_alive(): print("Thread chalu hai"). yeh check karata hai ki thread complete hua ya nahi. threading.enumerate() se bhi active threads ki list milegi.

• t.is_alive() — True agar thread running ho
• threading.enumerate() — sabhi active threads ki list
• threading.active_count() — kitne threads active hain

is knowledge se aap apne code mein proper cleanup ensure kar sakte hain.",
    },
    {
      title: "Daemon threads — background kaam",
      content: "daemon threads wo threads hote hain jo background mein chalte rahte hain aur jab sirf non-daemon threads complete ho jate hain, tab khud bhi band ho jate hain. iska matlab yeh hai ki daemon thread "background service" jaisa kaam karta hai.

example: clock display ya background logs ke liye daemon threads use kar sakte hain. main program khatam hone par, daemon threads self-terminate ho jayengi.

banane ka tarika: t = threading.Thread(target=kaam, daemon=True) — sirf yeh line add karna. t.start() phir bhi same rahega.

• main thread complete hone par daemon threads band ho jate hain
• use tab karein jab chaahiye ho bas background kaam chalta rahe
• non-daemon threads waith complete hone tak rukogega program",
    },
    {
      title: "Lock se bhavishya lecksa — deadlock avoidance",
      content: "deadlock saat hota jab doosre threads doosre ke wait kar rahe hon aur kabhi complete nahi hote. example: Thread A Lock X le raha hai aur Lock Y chah raha hai, tab Thread B Lock Y le raha hai aur Lock X chah raha hai — is situation mein kabhi complete nahi hoga.

avoidance ke liye:
1. fixed order mein locks acquire karein — same order har baar
2. timeout use karein — lock release karne ke liye timeout set karein
3. try-lock use karein — lock.acquire(False) —agar lock mile toh proceed karein, warna alag kaam karein
4. nested locks se bachhein —agar possible ho toh same lock use na karein

deadlock detection tricky ho sakta hai, isliye prevention best policy hai.",
    },
    {
      title: "Thread communication — Queue aur Condition",
      content: "threads ke beech communication ho liye Python threading module Queue aur Condition jaise tools provide karta hai. Queue FIFO (First-In-First-Out) data structure hai jo threads ke beech data exchange karne ke liye perfect hai.

from queue import Queue — naya Queue banayein. phir queue.put(data) se data add karein aur queue.get() se data nikaal sakte hain. yeh thread-safe hota hai.

Condition bhi similar hoti hai lekin sirf specific condition poori hone par hi threads ko notify karti hai. cond.wait() aur cond.notify() iska use karte hain.

 ye tools multicore programming ko simple aur bounded karte hain.",
    },
    {
      title: "Practical project: Traffic simulation",
      content: "chaliye ek practical project banate hain — traffic simulation. hum do threads banayenge: ek thread traffic light change karega (red, green, yellow), doosra thread cars simulate karega. 

Is project se hum seekhenge: threads kaise banayein aur shuru karein, lock se access synchronize karein, Event se communication karein, join se wait karein

Is tarah ka practical project aapko real-world multithreading scenarios samajhne mein madad karega.

code example: import threading\nimport time\nevent = threading.Event()\ndef traffic_light():\n    for i in range(3):\n        print("Green")\n        event.set()\n        time.sleep(1)\n        print("Red")\n        event.clear()\n        time.sleep(1)\ndef car(name):\n    while True:\n        if event.is_set():\n            print(f"{name} chala")\n        else:\n            print(f"{name} ruko")\n        time.sleep(0.5)\nlight = threading.Thread(target=traffic_light)\ncars = [threading.Thread(target=car, args=(f"Car-{i}",)) for i in range(3)]\nlight.start()\nfor c in cars:\n    c.start()\nlight.join()\nfor c in cars:\n    c.join(),
output: Green/Car chala/Redu patterns continuously.",
    },
    {
      title: "Testing aur debugging multithreading",
      content: "multithreading code testing aur debugging tough ho sakta hai kyunki chaat races unpredictable hote hain. isliye yeh best practices follow karein:

1. har baar test karein — har baar alag output milega
2. print statements use karein — output track karne ke liye
3. threading.enumerate() use karein — active threads check karne ke liye
4. time.sleep() use karke races simulate karein
5. if __name__ == "__main__": use karein — bottom-level code run karein

logging module use karein — print sath hi better hota hai. errors track karna asaan banata hai.

is tarah aap apne multithreading code ko reliable banayein sakte hain.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:

• threading module complete guide: https://docs.python.org/3/library/threading.html
• daemon threads che vyakhya: https://docs.python.org/3/library/threading.html#daemon-threads
• Thread synchronization: https://docs.python.org/3/library/threading.html#synchronization-primitives
• Condition objects: https://docs.python.org/3/library/threading.html#condition-objects
• Queue class: https://docs.python.org/3/library/queue.html
• PEP 554 — multithreading supplementary: https://peps.python.org/pep-0554/
• Concurrency or parallelism: https://docs.python.org/3/whatsnew/3.9.html#concurrency
• real-world examples — tutorial: https://docs.python.org/3/tutorial/threads.html
• FAQ — multi-threading: https://docs.python.org/3/faq/programming.html#multi-threading
• Bug tracking multithreading issues: https://docs.python.org/3/faq/programming.html#common-multithreading-mistakes

pratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — hech professional savay hai.",
    },
  ],

    {
      title: "thread banavn entry - practically shuru karo",
      content: "chaliye practical example se shuru karte hain. aapko threading import karna hota hai, phir alag alag kaam ke liye alag banayiya. basic syntax: import threading. phir threading.Thread(target=kaam_function) se thread banata hain. start karne ke liye thread.start() istemal karein. chaliye ek simple example dekhte hain:

code: import threading\ndef mere_kaam():\n    print("Kaam poora hua!")\nt = threading.Thread(target=mere_kaam)\nt.start(),
output: Kaam poora hua!,
    },
    {
      title: "Thread states aur is_alive check",
      content: "har thread ek state mainhta hai — created, started, running, finished. thread.is_alive() method se check kar sakte hain ke thread still chal raha hai ya already khatam ho chuka hai. yeh baat multithreading mein tracking ke liye bohot zaroori hoti hain.

example: if t.is_alive(): print("Thread chalu hai"). yeh check karata hai ki thread complete hua ya nahi. threading.enumerate() se bhi active threads ki list milegi.

• t.is_alive() — True agar thread running ho
• threading.enumerate() — sabhi active threads ki list
• threading.active_count() — kitne threads active hain

is knowledge se aap apne code mein proper cleanup ensure kar sakte hain.",
    },
    {
      title: "Daemon threads — background kaam",
      content: "daemon threads wo threads hote hain jo background mein chalte rahte hain aur jab sirf non-daemon threads complete ho jate hain, tab khud bhi band ho jate hain. iska matlab yeh hai ki daemon thread "background service" jaisa kaam karta hai.

example: clock display ya background logs ke liye daemon threads use kar sakte hain. main program khatam hone par, daemon threads self-terminate ho jayengi.

banane ka tarika: t = threading.Thread(target=kaam, daemon=True) — sirf yeh line add karna. t.start() phir bhi same rahega.

• main thread complete hone par daemon threads band ho jate hain
• use tab karein jab chaahiye ho bas background kaam chalta rahe
• non-daemon threads waith complete hone tak rukogega program",
    },
    {
      title: "Lock se bhavishya lecksa — deadlock avoidance",
      content: "deadlock saat hota jab doosre threads doosre ke wait kar rahe hon aur kabhi complete nahi hote. example: Thread A Lock X le raha hai aur Lock Y chah raha hai, tab Thread B Lock Y le raha hai aur Lock X chah raha hai — is situation mein kabhi complete nahi hoga.

avoidance ke liye:
1. fixed order mein locks acquire karein — same order har baar
2. timeout use karein — lock release karne ke liye timeout set karein
3. try-lock use karein — lock.acquire(False) —agar lock mile toh proceed karein, warna alag kaam karein
4. nested locks se bachhein —agar possible ho toh same lock use na karein

deadlock detection tricky ho sakta hai, isliye prevention best policy hai.",
    },
    {
      title: "Thread communication — Queue aur Condition",
      content: "threads ke beech communication ho liye Python threading module Queue aur Condition jaise tools provide karta hai. Queue FIFO (First-In-First-Out) data structure hai jo threads ke beech data exchange karne ke liye perfect hai.

from queue import Queue — naya Queue banayein. phir queue.put(data) se data add karein aur queue.get() se data nikaal sakte hain. yeh thread-safe hota hai.

Condition bhi similar hoti hai lekin sirf specific condition poori hone par hi threads ko notify karti hai. cond.wait() aur cond.notify() iska use karte hain.

 ye tools multicore programming ko simple aur bounded karte hain.",
    },
    {
      title: "Practical project: Traffic simulation",
      content: "chaliye ek practical project banate hain — traffic simulation. hum do threads banayenge: ek thread traffic light change karega (red, green, yellow), doosra thread cars simulate karega. 

Is project se hum seekhenge: threads kaise banayein aur shuru karein, lock se access synchronize karein, Event se communication karein, join se wait karein

Is tarah ka practical project aapko real-world multithreading scenarios samajhne mein madad karega.

code example: import threading\nimport time\nevent = threading.Event()\ndef traffic_light():\n    for i in range(3):\n        print("Green")\n        event.set()\n        time.sleep(1)\n        print("Red")\n        event.clear()\n        time.sleep(1)\ndef car(name):\n    while True:\n        if event.is_set():\n            print(f"{name} chala")\n        else:\n            print(f"{name} ruko")\n        time.sleep(0.5)\nlight = threading.Thread(target=traffic_light)\ncars = [threading.Thread(target=car, args=(f"Car-{i}",)) for i in range(3)]\nlight.start()\nfor c in cars:\n    c.start()\nlight.join()\nfor c in cars:\n    c.join(),
output: Green/Car chala/Redu patterns continuously.",
    },
    {
      title: "Testing aur debugging multithreading",
      content: "multithreading code testing aur debugging tough ho sakta hai kyunki chaat races unpredictable hote hain. isliye yeh best practices follow karein:

1. har baar test karein — har baar alag output milega
2. print statements use karein — output track karne ke liye
3. threading.enumerate() use karein — active threads check karne ke liye
4. time.sleep() use karke races simulate karein
5. if __name__ == "__main__": use karein — bottom-level code run karein

logging module use karein — print sath hi better hota hai. errors track karna asaan banata hai.

is tarah aap apne multithreading code ko reliable banayein sakte hain.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:

• threading module complete guide: https://docs.python.org/3/library/threading.html
• daemon threads che vyakhya: https://docs.python.org/3/library/threading.html#daemon-threads
• Thread synchronization: https://docs.python.org/3/library/threading.html#synchronization-primitives
• Condition objects: https://docs.python.org/3/library/threading.html#condition-objects
• Queue class: https://docs.python.org/3/library/queue.html
• PEP 554 — multithreading supplementary: https://peps.python.org/pep-0554/
• Concurrency or parallelism: https://docs.python.org/3/whatsnew/3.9.html#concurrency
• real-world examples — tutorial: https://docs.python.org/3/tutorial/threads.html
• FAQ — multi-threading: https://docs.python.org/3/faq/programming.html#multi-threading
• Bug tracking multithreading issues: https://docs.python.org/3/faq/programming.html#common-multithreading-mistakes

pratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — hech professional savay hai.",
    },
  ],    practiceQuestions: [
      "f-string चा उपयोग?",
      "{x:.2f} म्हणजे?",
      "f उपसर्ग कशासाठी?",
    ],
    quiz: [
      { question: "f-string कशासाठी?", options: ["मजकूरात मूल्य", "delete", "sort", "import"], correct: 0 },
      { question: ".2f म्हणजे?", options: ["दोन दशांश", "दोन पूर्णांक", "list", "None"], correct: 0 },
      { question: "f कुठे लिहितात?", options: ["सुरुवातीला", "शेवटी", "मधे", "नाही"], correct: 0 },
    ],
    challenge: {
      prompt: "तापमान दोन दशांशात.",
      starterCode: `t = 36.6666
print(f"तापमान: {t:.1f}")`,
      expectedOutput: "तापमान: 36.7",
    },
    interviewQuestions: [
      "f-string का वापरायचे?",
      "format spec म्हणजे काय?",
    ],
    related: ["python-strings", "python-print", "python-functions-advanced"],
    prev: "python-lists",
    next: "python-enumerate",
  },
  {
    slug: "python-enumerate",
    categoryId: "python",
    title: "Enumerate and Zip",
    marathiTitle: "Enumerate व Zip - क्रम आणि जोड्या",
    level: "advanced",
    minutes: 15,
    summary: "enumerate ने क्रमांक मिळतात, zip ने दोन lists जोडल्या जातात.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Enumerate व Zip - क्रम आणि जोड्या म्हणजे काय?",
        content: "enumerate ने क्रमांक मिळतात, zip ने दोन lists जोडल्या जातात.\nenumerate हा built-in function: यादी फिरवताना प्रत्येक item सोबत क्रमांक देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Enumerate व Zip - क्रम आणि जोड्या चे फायदे आणि महत्त्व",
        content: "✓ हाताने क्रमांक वाढवणारा loop — काउंटर variable आणि +1 ची ओळ — लिहिण्याची गरज नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "enumerate: क्रमांक आणि मूल्य एकत्र",
        content: "enumerate हा built-in function: यादी फिरवताना प्रत्येक item सोबत क्रमांक देतो. for i, item in enumerate(items): लिहिलं की i मध्ये क्रमांक आणि item मध्ये मूल्य मिळतं.\n\nहाताने क्रमांक वाढवणारा loop — काउंटर variable आणि +1 ची ओळ — लिहिण्याची गरज नाही. enumerate ते आपोआप करतो; output मध्ये 0 पोळी, 1 दही, 2 पाव असे दिसतं.",
        code: `items = ["पोळी", "दही", "पाव"]
for i, item in enumerate(items):
    print(i, item)`,
        codeLanguage: "python",
        output: `0 पोळी
1 दही
2 पाव`,
      },
      {
        title: "start=1: मोजणी एक पासून",
        content: "Python चे index 0 पासून सुरू होतात, पण माणसाची यादी 1 पासून असते. enumerate(items, start=1) लिहिलं तर क्रमांक 1, 2, 3 ... असे मिळतात.\n\nचिवडा, पोहे, सेव अशी यादी 1. चिवडा, 2. पोहे या स्वरूपात दाखवणं नैसर्गिक आहे.",
        code: `snacks = ["चिवडा", "पोहे", "सेव"]
for i, s in enumerate(snacks, start=1):
    print(i, s)`,
        codeLanguage: "python",
        output: `1 चिवडा
2 पोहे
3 सेव`,
      },
      {
        title: "zip: दोन याद्यांच्या जोड्या",
        content: "zip दोन किंवा अधिक याद्यांचे जोड्यांमध्ये रूपांतर करतो — पहिला-पहिला, दुसरा-दुसरा. नावे आणि गुण वेगळ्या याद्यांमध्ये असतील तर zip त्या एकत्र आणतो.\n\nfor n, s in zip(names, scores): — n मध्ये नाव, s मध्ये गुण. आरोही 95 आणि वेद 72 अशा जोड्या छापल्या जातात.",
        code: `names = ["आरोही", "वेद"]
scores = [95, 72]
for n, s in zip(names, scores):
    print(n, s)`,
        codeLanguage: "python",
        output: `आरोही 95
वेद 72`,
      },
      {
        title: "लहान यादीचा निकष",
        content: "याद्यांची लांबी वेगळी असेल तर zip सर्वात लहान यादीएवढ्याच जोड्या तयार करतो; उरलेल्या मूल्यांना जोडीदार मिळत नाही.\n\na मध्ये तीन मूल्ये, b मध्ये दोन — zip फक्त दोन जोड्या बनवतो: (1, 10) आणि (2, 20). 3 ला जोडीदार नसल्याने output मध्ये फक्त 11 आणि 22 दिसतात.",
        code: `a = [1, 2, 3]
b = [10, 20]
for x, y in zip(a, b):
    print(x + y)`,
        codeLanguage: "python",
        output: `11
22`,
      },
      {
        title: "zip आणि enumerate एकत्र",
        content: "तीन किंवा चार याद्या असतील तर zip मध्ये अनेक arguments देता येतात. परिणामी जोड्यांना क्रमांकही हवा असेल तर बाहेर enumerate(..., start=1) गुंडाळतात.\n\nखाली for i, (n, s) असे दोन स्तर unpack आहेत — बाहेरचा i क्रमांक, आतली (n, s) जोडी. ओळीच्या सुरुवातीला क्रमांक दाखवल्याने एक सुबक table बनतं.",
        code: `names = ["आरोही", "वेद", "मीरा"]
subs = ["मराठी", "गणित", "विज्ञान"]
for i, (n, s) in enumerate(zip(names, subs), start=1):
    print(i, n, s)`,
        codeLanguage: "python",
        output: `1 आरोही मराठी
2 वेद गणित
3 मीरा विज्ञान`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ enumerate किंवा zip चा result list नसतो — iterator असतो; थेट print केल्यास enumerate object असे लिहिलेले दिसतं. दाखवण्यासाठी list(enumerate(x)) किंवा list(zip(a, b)) मध्ये गुंडाळतात.\n\n✗ जोडी तोडताना (unpack) variable ची संख्या जोडीच्या आकाराएवढी हवी — zip मधील दोन मूल्यांसाठी for a, b; तीन variable दिले तर ValueError येतो.\n\n✗ लहान यादीचा निकष हवा नसेल तर itertools मधला zip_longest वापरतात — तो उरलेल्या जागी default मूल्य भरतो.\n\nखाली list(enumerate(items)) चा निकाल: प्रत्येक (क्रमांक, मूल्य) जोडी tuple म्हणून.",
        code: `items = ["पोळी", "दही"]
print(list(enumerate(items)))`,
        codeLanguage: "python",
        output: `[(0, 'पोळी'), (1, 'दही')]`,
      },
      {
        title: "Interactive: फळांची यादी",
        content: "खाली फळांची यादी start=1 ने फिरवली आणि f-string मध्ये क्रमांक-बिंदू लावला. आधी तसाच चालवा; मग यादीत आणखी एक फळ घाला — क्रमांक आपोआप वाढतात.\n\nstart काढून पहा — क्रमांक 0 पासून सुरू होतात. दोन्ही पर्यायांचा फरक लगेच दिसतो.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
for i, f in enumerate(fruits, start=1):
    print(f"{i}. {f}")`,
        codeLanguage: "python",
        output: `1. सफरचंद
2. केळी
3. द्राक्षे`,
      },
      {
        title: "Mini Project: गुणांचा निकाल",
        content: "विद्यार्थ्यांची नावे आणि गुण — zip ने जोड्यांमध्ये फिरवले. प्रत्येकाला 70 किंवा अधिक गुण असतील तर उत्तीर्ण, नाही तर सुधारणा असा status कळतो.\n\nif mark >= 70 else अशी अट शेवटी; output मध्ये आरोही: 88 (उत्तीर्ण) आणि वेद: 65 (सुधारणा). याद्या वाढवल्या तरी कोड बदलत नाही.",
        code: `students = ["आरोही", "वेद"]
marks = [88, 65]
for name, mark in zip(students, marks):
    status = "उत्तीर्ण" if mark >= 70 else "सुधारणा"
    print(f"{name}: {mark} ({status})")`,
        codeLanguage: "python",
        output: `आरोही: 88 (उत्तीर्ण)
वेद: 65 (सुधारणा)`,
      },
    {
        title: "enumerate न आधीचे दिवस: index variable ची कष्टप्रदता",
        content: "आजच्या Python मध्ये enumerate मिळतं, पण त्याआधी प्रोग्रामरना index सोबत यादी किती अवघड होती ते समजून घेतल्यास enumerate चं मोल लक्षात येतं. जुनी पद्धत अशी होती: i = 0 म्हणून सुरुवात करायची, मग for मधल्या प्रत्येक फेरीत i वापरून item चा क्रमांक काढायचा आणि शेवटी i = i + 1 लिहावं लागायचं.\n\nयामध्ये दोन मोठे त्रास असायचे. पहिला — अजून एक variable (i) नियंत्रित करावा लागायचा. दुसरा — i वाढवायची ओळ कोणत्याही क्षणी विसरल्यास क्रमांक चुकत असे आणि घोटाळा होत असे. दोन-तीन याद्या एकत्र फिरवताना तर हा त्रास आणखी वाढत असे.\n\nअशा वेळी कार्यक्रमातील आउटपुट क्रमांक चुकूनही बरोबर दिसत असले तरी कोणत्याही बदलानंतर तो अचानक चुकण्याची शक्यता असायची. हीच रचना debugging च्या वेळी खूप कष्टदायक व्हायची.\n\nenumerate हा या समस्येचा थेट उपाय आहे — Python च्या निर्मात्यांनी हे सगळं आतच सांभाळलं आहे. for i, item in enumerate(items): लिहिताच क्रमांक आणि मूल्य दोन्ही स्वयंचलितपणे मिळतात. तुम्हाला फक्त एकाच ओळीत unpack करायचं असतं.\n\nहे शिकताना आधीच्या पद्धतीची या नवीन पद्धतीशी तुलना करा — तुम्हाला लगेच स्पष्ट दिसेल की कोड किती स्वच्छ आणि विश्वासार्ह बनतो. खाली जुनी आणि नवी पद्धत दोन्ही दाखवली आहे.",
        code: `items = ["पोळी", "दही", "पाव"]
i = 0
for item in items:
    print(i, item)
    i = i + 1
for i, item in enumerate(items):
    print(i, item)`,
        codeLanguage: "python",
        output: `0 पोळी
1 दही
2 पाव
0 पोळी
1 दही
2 पाव`,
      },
      {
        title: "enumerate फक्त iterator देतो — list समजू नका",
        content: "अनेक नवशिके enumerate च्या निकालाला list समजतात, पण ते चुकीचं आहे. enumerate हा built-in function आहे आणि तो खऱ्या अर्थाने enumerate object नावाचा iterator देतो. याचा सोपा अर्थ असा की त्याच्या मागून सगळे item एकदाच मिळतात, पुन्हा-पुन्हा नाही.\n\nजर त्याचा प्रत्यक्ष output पाहिला तर screen वर काहीतरी असं लिहिलेलं दिसतं: enumerate object at 0x... असं. यामुळे नवशिक्यांना वाटतं की काही चुकलं; पण हे खरं तर iterator असल्याचं सूचन आहे.\n\nप्रत्यक्ष item दिसण्यासाठी list() ने किंवा for loop मध्ये गुंडाळणं आवश्यक असतं. list(enumerate(items)) लिहिल्यास दोन-घटकांच्या tuples ची यादी मिळते — प्रत्येक जोडीत क्रमांक आणि मूल्य असतं.\n\nहा फरक समजणं महत्त्वाचं आहे कारण iterator एकदाच वापरता येतो; दुसऱ्यांदा त्या वस्तूतून item काढताना काहीही मिळत नाही. छोट्या उदाहरणात हे दिसत नाही पण मोठ्या programs मध्ये iterator ची ही मर्यादा महत्त्वाची ठरते.\n\nसोपं तत्व लक्षात ठेवा: enumerate iteration करण्यासाठी आहे, storage करण्यासाठी नाही. आवश्यकता असल्यास त्याला list किंवा tuple मध्ये नेता येतं. खाली list() मध्ये गुंडाळल्यावर output कसा दिसतो ते पाहा.",
        code: `items = ["सफरचंद", "केळी"]
print(list(enumerate(items)))`,
        codeLanguage: "python",
        output: `[(0, 'सफरचंद'), (1, 'केळी')]`,
      },
      {
        title: "start parameter चे खरे स्वरूप",
        content: "enumerate मधला start हा argument बर्याच जणांकडून विसरला जातो, पण माणसाच्या नजरेतून क्रमांक 1 पासून सुरू करणं अधिक नैसर्गिक असतं. enumerate(items, start=1) लिहिल्यास पहिला item क्रमांक 1 ने परततो — आमच्या daily जीवनातील गोष्टींची यादी 1 पासून सुरू होते.\n\nहे केवळ सौंदर्यासाठी नाही — तर user ला दिसणाऱ्या सूची, अहवाल, परीक्षेची यादी, नोंदणी — या सर्वांमध्ये क्रमांक 1 पासून दिसायला हवे. प्रोग्रामचा index मात्र 0 पासून सुरू होतो हे विसरू नका.\n\nstart कोणतीही संख्या असू शकते — 10, 100, अगदी ऋण संख्याही चालतात. कधी कधी data मध्ये आधीचा क्रमांक संपल्यावर नव्या भागाची यादी start च्या त्या क्रमांकावरून पुढे सुरू करावी लागते — हेच उपयोगी ठरते.\n\nसामान्य चूक म्हणजे start घालताना positional पद्धतीने लिहिणं — enumerate(items, 1) हे चालतं, पण वाचणाऱ्याला 1 कशासाठी आहे हे कळत नाही. keyword म्हणून start=1 लिहाल तर कोड self-explanatory होतो.\n\nशक्य तर keyword नेच लिहा — हीच professional सवय आहे. तुमचा कोड वाचणाऱ्याला हेतू लगेच कळतो. खाली start=1 चा वापर दाखवला आहे.",
        code: `snacks = ["चिवडा", "पोहे", "सेव"]
for i, s in enumerate(snacks, start=1):
    print(f"{i}. {s}")`,
        codeLanguage: "python",
        output: `1. चिवडा
2. पोहे
3. सेव`,
      },
      {
        title: "zip मध्ये लांबी वेगळी असल्यास काय होतं?",
        content: "zip दोन किंवा अधिक याद्या जोडून जोड्या बनवतो, पण प्रत्येक यादी एकाच लांबीची असेल असं आवश्यक नसतं. एखादी यादी लहान असेल तर zip फक्त तिच्याइतक्याच जोड्या बनवतो — उरलेले item टाकले जातात. यालाच लहान यादीचा निकष असं म्हणतात.\n\nहे वर्तन कधी उपयोगी? जेव्हा अतिरिक्त data अनावश्यक असतो. पण हेच कधी घातक! जर दोन याद्या नेहमी एकाच लांबीच्या असायलाच हव्या — उदा. विद्यार्थ्यांची नावे आणि गुण — तर चुकून एक यादी लहान राहिल्यास zip शांतपणे उरलेले dropping करतो आणि तुम्हाला कळतंच नाही.\n\nयामुळे silent bug निर्माण होतो — output बरोबर दिसतो पण काही data मागे पडतो. या समस्येवर उपाय म्हणून Python 3.10 मध्ये strict parameter आला. zip(a, b, strict=True) लिहिल्यास लांबी वेगळी असेल तर ValueError अपवाद निर्माण होतो.\n\nही चूक शोधण्यासाठी strict उपयुक्त आहे — कोड चालत नाही आणि लगेच कळतं की लांबी जुळत नाहीये. सुरक्षित कोड लिहायचा असेल तर strict ची सवय लावा.\n\nएकाधिक याद्या असल्यास दीर्घ काळासाठी itertools मधला zip_longest वापरता येतो — त्यात उरलेल्या जागी default मूल्य भरतो. खाली लहान यादीचा निकष output मध्ये दिसतो.",
        code: `a = [1, 2, 3]
b = [10, 20]
print(list(zip(a, b)))`,
        codeLanguage: "python",
        output: `[(1, 10), (2, 20)]`,
      },
      {
        title: "zip(*matrix): matrix उलटवण्याची चाल",
        content: "zip मध्ये काही खास ट्रिक्स असतात आणि तांत्रिकदृष्ट्या सर्वांत आवडीची ट्रिक म्हणजे zip(*matrix) — यामुळे 2D matrix मधले rows आणि columns परस्पर बदलतात (transpose). हे shrink करणाऱ्या गणितीय operations मध्ये खूप उपयोगी ठरतं.\n\nइथे तारांकित (*) चिन्ह unpacking दर्शवतं — ते matrix मधल्या प्रत्येक row ला वेगळा argument म्हणून zip ला देतं. मग zip त्या argument च्या घटकाला जोडीनुसार जोडतो, म्हणजे columns सापडतात.\n\nउदा. matrix = [[1, 2], [3, 4]] असेल तर zip(*matrix) म्हणजे zip([1, 2], [3, 4]) — आता पहिल्या जोडीत (1, 3) आणि दुसऱ्या जोडीत (2, 4) मिळते. म्हणजे rows चे columns बनले.\n\nहे वर्णन वाचून धक्का बसत नाही पण प्रत्यक्ष कोडमध्ये ही एकाच ओळीत साध्य होणारी क्रिया आहे. डेटा प्रोसेसिंग, matrices, spreadsheet data — सर्वत्र हे तत्व लागू होतं.\n\nलक्षात ठेवा: transpose ने नवीन data तयार होतो, मूळ matrix बदलत नाही. खाली सरळ उदाहरण दाखवले आहे — जोड्या output मध्ये कशा बदलतात ते पाहा.",
        code: `matrix = [[1, 2], [3, 4]]
print(list(zip(*matrix)))`,
        codeLanguage: "python",
        output: `[(1, 3), (2, 4)]`,
      },
      {
        title: "enumerate, zip आणि f-string — सुबक अहवाल",
        content: "आता ही तिन्ही साधने एकत्र आणली तर एका चला-उठा अहवालाचा पाया तयार होतो. हीच अशी रचना आहे की जी नेटवर प्रत्येक दुकानदाराच्या बिल मध्ये, शाळेच्या निकालात आणि मोठ्या companies मध्ये daily record मध्ये दिसते.\n\nसमजा तुम्हाला विद्यार्थ्यांची नावे आणि त्यांचे गुण दोन वेगळ्या याद्यांमध्ये मिळाले आहेत. तुम्हाला प्रत्येकाला क्रमांक द्यायचा आहे. या दोन्ही याद्या zip मध्ये जोडल्या तर नाव-गुण जोडी मिळते; मग ती जोडी enumerate मधून फिरवल्यास क्रमांक मिळतो; आणि f-string मध्ये तिघांचं संयोजन तयार होतं.\n\nइथे खरं सामर्थ्य काय आहे तर चार नाहीतर चाळीस विद्यार्थी असले तरी कोड तोच राहतो — फक्त याद्या मोठ्या होतात. कोडमध्ये बदल नाही. हेच आधुनिक program चं वैशिष्ट्य आहे — रचना एकदाच बनवा, data वेगवेगळे द्या.\n\nऑर्डरच्या या जोडीत क्रमांक 1 पासून सुरू करण्यासाठी start=1 वापरा; प्रत्येक ओळीवर क्रमांक, नाव आणि गुण एकाच f-string मध्ये दाखवा. तुम्हाला readymade मराठी अहवाल मिळतो.\n\nही रचना पुढच्या lessons मध्ये वारंवार येईल — ती आताच आत्मसात केल्यास पुढे खूप सुलभ होईल. खाली संपूर्ण उदाहरण दिसते.",
        code: `names = ["आरोही", "वेद", "मीरा"]
scores = [95, 72, 88]
for i, (name, score) in enumerate(zip(names, scores), start=1):
    print(f"{i}. {name}: {score}")`,
        codeLanguage: "python",
        output: `1. आरोही: 95
2. वेद: 72
3. मीरा: 88`,
      },
      {
        title: "सामान्य चुका — enumerate चे खरे वैर",
        content: "enumerate शिकताना काही सामान्य चुका होतात आणि त्या आधी ओळखल्या तर वेळ वाचतो. पहिली — unpack ची संख्या चुकणे. enumerate दोन मूल्ये देतो, त्यामुळे for i, item असे दोन variable हवे. फक्त for item in enumerate(items) लिहिल्यास item मध्येच जोडी येते — वेगळं मूल्य नाही मिळत.\n\nदुसरी — enumerate चा निकाल list मध्ये न घेता थेट print करणे. एकदा iterator वापरला की तो संपतो; पुन्हा उपयोग करायचा असेल तर आधी list किंवा tuple मध्ये रूपांतर करा.\n\nतिसरी — जोडी unpack करताना कंस विसरणे. enumerate(zip(a, b)) असल्यास for i, (x, y) असे दुहेरी कंस लागतात. कंस विसरल्यास Python चुकीच्या पद्धतीने assign करतो आणि घोटाळा होतो.\n\nचौथी — एका variable ची दोनदा वापर. पुढे code मध्ये i दुसरं मूल्य घेऊन बदललं तर मूळकाळातील क्रमांक हरवतो; क्रमांक वेगळं नाव देऊन ठेवा.\n\nपाचवी — start ला गोंधळणे. क्रमांक देताना start=1 वापरायला विसरणे किंवा चुकीचा वापर करणे ही रोजची चूक आहे. या पाच चुकांची आगाऊ जाण असल्यास सुरळीत कोड मिळतो. खाली जोडी unpack ची चूक व बरोबर पद्धत दोन्ही दिसते.",
        code: `names = ["आरोही", "वेद"]
scores = [95, 72]
for i, (name, score) in enumerate(zip(names, scores), start=1):
    print(name, score)`,
        codeLanguage: "python",
        output: `आरोही 95
वेद 72`,
      },
      {
        title: "हे लक्षात ठेवा — पुनरावलोकन",
        content: "या धड्यातील महत्त्वाचे मुद्दे एकत्र करूया:\n\n• enumerate हा built-in function आहे जो यादी फिरवताना क्रमांक-मूल्याच्या जोड्या देतो.\n• तो iterator देतो — दिसण्यासाठी list() किंवा for loop आवश्यक.\n• start=1 ने क्रमांक 1 पासून सुरू होतात — माणसाच्या यादीसाठी हेच नैसर्गिक.\n• zip दोन किंवा अधिक याद्या जोडतो — सर्वांत लहान यादीच्या लांबीने थांबतो.\n• zip(*matrix) ने rows आणि columns बदलतात — transpose!\n• strict=True फरक दिसतो — लांबी वेगळी असल्यास अपवाद.\n• enumerate, zip, f-string तिघे मिळून सुबक अहवाल व सूची बनवतात.\n\nप्रत्येक संकल्पना लहान उदाहरणाने स्वतः प्रयत्न करा — वाचूनच थांबू नका. output पाहून स्वतःच्या शब्दांत स्पष्टीकरण द्या. हीच सवय Python ची ग्रिप ठेवते.\n\nघरगुती सराव: एका मित्राची यादी आणि त्यांच्या मोबाईल नंबरची यादी zip करून क्रमांक द्या. two lists एकत्र आणण्याची ही सवय पुढील सर्व धड्यांना आधारभूत आहे.",
      },
      {
        title: "reversed आणि sorted सोबत enumerate — परत मागचा क्रम",
        content: "कधी कधी यादी मागच्या दिशेने फिरवायची असते — शेवटच्या item पासून पहिल्यापर्यंत. Python मध्ये यासाठी reversed() फंक्शन आहे. शाळेत विद्यार्थ्यांची यादी आधीची वरपासून खाली लिहिली तर recess नंतर शेवटच्या मुलाकडून पहिल्याकडे जाताना reversed सारखाच आढळतो.\n\nreversed() यादी न बदलता उलटा iterator देतो त्यामुळे मूळ यादी अस्पर्श राहते. आता reversed ला enumerate सोबत जोडले तर शेवटच्या item ला क्रमांक 0 मिळतो आणि असे प्रत्येक मागच्या घटकाला अनुक्रमे 1, 2 वगैरे क्रमांक मिळतात. विचित्र वाटतं पण हा उलटा क्रमांक खूप उपयोगी आहे.\n\nउदा. रात्री उलट्या पद्धतीने घरात पेव्हांची यादी सांधायची असेल तर मागून क्रमांक द्यायचा — शेवटचा item ला 0, त्याच्या आधीच्याला 1. अशा प्रकारे पुढील item चा पुढचा क्रमांक आपोआप मिळतो.\n\nsorted() फक्त सर्वात जास्त वापरला जातो आणि त्याला reverse=True हा argument दिल्यास उतरत्या क्रमाने क्रमवारी होते. हे enumerate सोबत न वापरता अलगही उपयोगी आहे.\n\nक्रमवारी आणि क्रमाक एकत्र शिकल्यास data च्या दोन्ही दिशांचा अंदाज येतो. खाली reversed मधली क्रमवारी output दाखवली आहे.",
        code: `items = ["पोळी", "दही", "पाव"]
for i, item in enumerate(reversed(items)):
    print(i, item)`,
        codeLanguage: "python",
        output: `0 पाव
1 दही
2 पोळी`,
      },
      {
        title: "tuples मध्ये unpacking आणि operator precedence",
        content: "enumerate सोबत unpacking ही भाषेची महत्त्वाची क्षमता आहे. Python मध्ये जेव्हा जोड्या असतात तेव्हा त्यांना दोन नावांमध्ये खेचून घेणं सोपं असतं — यालाच unpacking म्हणतात. enumerate मधल्या शेवटच्या जोड्या tuple असतात; म्हणून for i, item च्या ठिकाणी unpacking होते.\n\nतीन-तीन घटक असलेल्या मध्ये तीन नावे हवी — for a, b, c in data असे लिहिता येतं. परंतु घटकांची संख्या आणि नावांची संख्या जुळली नाही तर ValueError निर्माण होतो. हे भाषेचं रक्षण आहे — अचानक चुकणारे data टाळले जातात.\n\nकधी कधी information मध्ये फक्त दुसरा घटक हवा असतो — तेव्हा न वापरता येणाऱ्या नावाऐवजी underscore (_) वापरतात. संकेत असा की _ ला उपेक्षित ठिकाणी वापरलं पाहिजे. हा नियम पाळला तर कोड वाचकांना उद्देश लगेच कळतो.\n\nकंसांचे नियमही येथे लागू होतात — जर enumerate च्या आत zip असेल असंच जोडलं तर for i, (x, y) यांमधील कंस आवश्यक आहे. कंस टाकल्याशिवाय x, y चांगलेच नक्कीच असे म्हटलं जाऊ शकतं पण Python ची अर्थविश्लेषण करणं वेगळं होऊ शकतं.\n\nही उदाहरणे अतिशय लहान आहेत पण जेव्हा ही सर्वेक्षण करून मोठा डेटा handकल करूया तेव्हा या छोट्या लहान चुकीमुळे अनेकदा चुका होतात — त्या आताच नियम समजल्यास वाचतात.",
      },
      {
        title: "enumerate आणि जड loops मधील सावधगिरी",
        content: "जेव्हा enumerate मोठ्या यादीवर चालतो तेव्हा आत आणखी एक loop किंवा गुंतागुंतीची गणना असू शकते. अशा जड गणनेत प्रत्येक फेरीची किंमत वाढते त्यामुळे कार्यक्रम हळू होऊ शकतो. हे टाळण्यासाठी शक्य तितकं लवकर data कामाला लावून छोट्या तुकड्यांमध्ये विभागा.\n\nमोठ्या lists मध्ये memory खर्चही वाढतो — consequence न जोखता सर्व item एकत्र जोडून ठेवणं गरजेचं नाही. printer मध्ये sheet वाया जाण्याऐवजी आधी नियोजन करावं असंच here — आधी विचार मग सर्व करा.\n\nenumerate स्वतः हलकीच आहे — तिचे वेतन iterator आधारे कमीत कमी लागतं. पण आत वापरलेल्या operations मुळेच वेळ वाढतो. म्हणून हळु slow output पाहिल्यास आतल्या क्रियाकलापांची तपासणी करा.\n\nशेवटी त्रुटी — आत कधी कधी IndexError किंवा KeyError वगळे होतात; त्या पकडून tekste समजून घेण्यासाठी try/except वापरता येतो. पण झाकून टाकणं चांगलं नाही — खरी समस्या निवडा.\n\nही सावधगिरी आधीच जोपासल्यास मोठ्या programs मध्ये सफलता मिळते.",
      },
      {
        title: "enumerate चा वापर dict मध्ये कसा केला जातो?",
        content: "काही वेळा enumerate चा वापर फक्त यादीतच नाही तर dict सोबतही करायचा असतो. dict मध्ये प्रत्येक entry म्हणजे key-value जोडी असते. enumerate करताना अशी जोड list मध्ये बसवणं — म्हणजे for i, (key, value) in enumerate(d.items()) — उपयोगी ठरतं.\n\nजेव्हा dictionary चे items tuple म्हणून दिले जातात तेव्हा unpacking द्वारे key आणि value दोन्ही आपल्या नावांमध्ये येतात. हे सातत्य — dictionary iteration — रोजच्या कामात अत्यंत वापरात येतं.\n\nपण dictionary च्या ठीक ठिकाणी क्रम 3.7 नंतर स्थिर आहे तरी त्याआधी जुनी आवृत्ती घातक ठरली असती — आजकाल क्रम टिकून राहतो म्हणून तुम्ही विश्वासाने पाहू शकता.\n\nआणखी एक कल्पना: enumerate + dict चे sorting मिळून क्रमवार क्रमांक मिळवणं शक्य आहे. तीन साधनांच्या संयोजनाचा उत्तम सराव म्हणून ते प्रयत्न करा.",
        code: `marks = {"आरोही": 95, "वेद": 72}
for i, (name, score) in enumerate(marks.items(), start=1):
    print(f"{i}. {name}: {score}")`,
        codeLanguage: "python",
        output: `1. आरोही: 95
2. वेद: 72`,
      },
{
        title: "लहान सराव — स्वतः प्रयत्न करा",
        content: "आता वाचलेले ज्ञान प्रत्यक्षात वापरून बघा — फक्त वाचून शिकणे पुरेसे नाही. तुमच्या घरातील पदार्थांची यादी बनवा आणि ती enumerate सोबत क्रमांक देत मराठीत छापा. start=1 वापरून प्रत्येक पदार्थाला 1 पासून क्रमांक द्या. पुढील चरणात त्या यादीला zip सोबत जोडा — उदा. प्रत्येक पदार्थाची किंमत आणि प्रमाण असलेली दुसरी यादी बनवून दोन्ही एकत्र करा. शेवटी f-string चा वापर करून सुबक तक्ता तयार करा. प्रत्येक output स्वतः पाहून वाचा — त्रुटी आली असेल तर त्याची कारणे शोधा. हा सराव संपूर्ण level ची पायाभरणी होय.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांकडे घेऊन जातात — वाचन आणि संदर्भासाठी हेच स्रोत प्रमाण मानले जातात:\n\n• enumerate चा अधिकृत दस्तऐवज: https://docs.python.org/3/library/functions.html#enumerate\n• zip चा अधिकृत दस्तऐवज: https://docs.python.org/3/library/functions.html#zip\n• List comprehensions चा tutorial: https://docs.python.org/3/tutorial/datastructures.html\n• Iterators ची व्याख्या — glossary: https://docs.python.org/3/glossary.html#term-iterator\n• itertools module — iteration साधने: https://docs.python.org/3/library/itertools.html\n• PEP 279 — enumerate ची मूळ कल्पना: https://peps.python.org/pep-0279/\n• PEP 618 — zip strict parameter: https://peps.python.org/pep-0618/\n• Python tutorial — data structures: https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences\n• Iteration topic — कार्यकारी tutorial: https://docs.python.org/3/library/itertools.html#itertools.zip_longest\n• Built-in types ची यादी: https://docs.python.org/3/library/stdtypes.html\n• Frequently asked questions — programming: https://docs.python.org/3/faq/programming.html\n• Python language reference — for statement: https://docs.python.org/3/reference/compound_stmts.html#for\n\nप्रत्येक दुवा स्वतः उघडून वाचा — व्याख्या अधिकृत स्रोतावरून समजून घेणं हीच professional सवय आहे.",
      },
    ],
    practiceQuestions: [
      "enumerate कोणता क्रमांक देतो?",
      "zip मध्ये लांबी वेगळी असल्यास काय?",
      "start=1 चा अर्थ?",
    ],
    quiz: [
      { question: "enumerate काय करतो?", options: ["क्रमांक देतो", "list तयार करतो", "delete करतो", "sort करतो"], correct: 0 },
      { question: "zip मध्ये किती lists वापरता?", options: ["दोन किंवा अधिक", "फक्त एक", "तीन नाही", "आठ"], correct: 0 },
      { question: "start=1 चा अर्थ?", options: ["क्रमांक 1 पासून", "क्रमांक 0 पासून", "उलट", "stop"], correct: 0 },
    ],
    challenge: {
      prompt: "दोन lists जोडून दाखवा.",
      starterCode: `a = ["पहिला", "दुसरा"]
b = [1, 2]
for x, y in zip(a, b):
    print(x, y)`,
      expectedOutput: "पहिला 1\nदुसरा 2",
    },
    interviewQuestions: [
      "enumerate चा फायदा?",
      "zip चा उपयोग?",
    ],
    related: ["python-fstrings", "python-list-methods", "python-functions-advanced"],
    prev: "python-fstrings",
    next: "python-map-filter",
  },
  {
    slug: "python-map-filter",
    categoryId: "python",
    title: "Map, Filter and Sorted",
    marathiTitle: "Map Filter Sorted - रूपांतरण आणि गाळणी",
    level: "advanced",
    minutes: 15,
    summary: "map ने रूपांतर, filter ने गाळणी, sorted ने क्रमवारी — functional style.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Map Filter Sorted - रूपांतरण आणि गाळणी म्हणजे काय?",
        content: "map ने रूपांतर, filter ने गाळणी, sorted ने क्रमवारी — functional style.\nmap(fn, list) — list च्या प्रत्येक item वर function लावून नवीन iterator देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Map Filter Sorted - रूपांतरण आणि गाळणी चे फायदे आणि महत्त्व",
        content: "\"Map Filter Sorted - रूपांतरण आणि गाळणी\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Map: प्रत्येकावर function",
        content: "map(fn, list) — list च्या प्रत्येक item वर function लावून नवीन iterator देतो. result list मध्ये दिसण्यासाठी list(map(...)) लिहावे लागते. lambda ही छोटी एक-ओळी फंक्शन; त्याऐवजी नावाची function देखील देऊ शकता.\n\nखाली square नावाची function आणि map एकत्र — [1, 4, 9, 16].",
        code: `def square(x):
    return x * x
nums = [1, 2, 3, 4]
print(list(map(square, nums)))`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16]`,
      },
      {
        title: "Filter: गाळणी",
        content: "filter(fn, list) फक्त तेच item ठेवते ज्यासाठी function True परततो. list(filter(...)) ने दिसतो.\n\nसकारात्मक संख्या, मोठे शब्द, गुणांपुढील निकाल — अशी गाळणी. खाली 10 पेक्षा मोठ्या संख्या गाळल्या.",
        code: `nums = [10, 25, 8, 30, 3]
print(list(filter(lambda x: x >= 10, nums)))`,
        codeLanguage: "python",
        output: `[10, 25, 30]`,
      },
      {
        title: "Sorted: क्रमवारी",
        content: "sorted(list) नवीन क्रमवार सूची देतो. sorted(list, reverse=True) उलट क्रम. key= दिल्यास एखाद्या गुणधर्मावरून क्रमवारी.\n\nउदा. शब्दाच्या लांबीवरून क्रमवारी — Go (2), Java (4), Python (6).",
        code: `words = ["Python", "Go", "Java"]
print(sorted(words, key=len))`,
        codeLanguage: "python",
        output: `['Go', 'Java', 'Python']`,
      },
      {
        title: "चुका",
        content: "• map/filter चा result list नाही — list() लागते.\n• key function चुकीची तर क्रमवारी खोटी.\n• reverse=True विसरलात तर वरच्या क्रमाने.",
        code: `nums = [5, 2, 8]
print(sorted(nums, reverse=True))`,
        codeLanguage: "python",
        output: `[8, 5, 2]`,
      },
      {
        title: "Interactive: filter सराव",
        content: "5 पेक्षा मोठ्या संख्या गाळून पहा. list(filter(...)) वापरून output तपासा.",
        code: `nums = [1, 10, 3, 20]
big = list(filter(lambda x: x > 5, nums))
print(big)`,
        codeLanguage: "python",
        output: `[10, 20]`,
      },
      {
        title: "Mini Project: उत्तीर्ण गुण",
        content: "scores मधून 40 पेक्षा अधिक गुण गाळून मग क्रमवारी लावा. filter आणि sorted एकत्र — दोन्ही साधने एकाच प्रोग्राममध्ये.",
        code: `scores = [35, 90, 55, 20]
passed = list(filter(lambda s: s >= 40, scores))
print(sorted(passed))`,
        codeLanguage: "python",
        output: `[55, 90]`,
      },
    {
        title: "map आणि filter मागील गणित — data बदलणं व निवडणं",
        content: "map आणि filter हे दोन अत्यंत महत्त्वाचे built-in फंक्शन आहेत जे data च्या संचावर काम करतात. map म्हणजे transform — प्रत्येक item वर क्रिया करून नवीन item तयार करणे. filter म्हणजे select — देत असलेल्या नियमाला जुळणारे item मात्र ठेवणे.\n\nमराठी उदाहरणाने समजून घेऊया. घरातील फळांची टोपली आहे. map म्हणजे प्रत्येक फळाधुन स्वच्छ धुणे — सगळे item बदलतात पण संख्या तीच राहते. filter म्हणजे फक्त पिकलेली फळे निवडणे — काही item वगळले जातात.\n\nसंगणकशास्त्रात या दोन्ही क्रिया data processing च्या पायाच आहेत. spreadsheet मध्ये एका स्तंभावर सर्व पंक्तीत क्रिया करणं हेच map आहे; काही निवडक पंक्ती दाखवणं हेच filter आहे.\n\nmap चा परिणाम नेहमी मूळ data सारख्याच लांबीची यादी देता; filter मात्र लहान किंवा मोठ्या यादी देऊ शकतो — फक्त नियमावर अवलंबून. हा फरकच दोघांचं खरं खासियत स्पष्ट करतो.\n\nही दोन फंक्शनं शिकताना त्यांची functional programming शी असलेली नातीही समजतात — जिथे संपूर्ण प्रोग्राम लहान फंक्शनांच्या जोडणीने चालतो. Python मध्ये ही पद्धत optional आहे पण हातात आल्यास खूप सामर्थ्य मिळतं.",
      },
      {
        title: "map कसा काम करतो — आतल्या भागाची माहिती",
        content: "map(funk_candidate, sequence) अशी रचना असते — प्रथम argument म्हणून एक फंक्शन आणि दुसरा argument म्हणून एक iterable. Python प्रत्येक item वर ते फंक्शन चालवतो आणि निकाल गोळा करतो.\n\nmap चा परिणाम हा list नसून map object नावाचा iterator असतो. प्रत्येक item त्या वस्तूतून एकदाच येऊ शकतो; म्हणून पाहताना list() किंवा tuple() मध्ये नेणं आवश्यक असतं. पहिल्या वेळी तो निकाल थेट print केल्यास गोंधळ होतो.\n\nउदा. स्ट्रिंगच्या यादीतील प्रत्येक item ला मोठे अक्षरे करण्यासाठी str.upper फंक्शन चालवता येतं. Python फंक्शन देखील value आहे याचा फायदा होतो — फंक्शनचं नाव बिन कंस ने map ला दिलं जातं.\n\nlambda असा सूक्ष्म निनावाचा फंक्शन वापरल्यास छोट्या क्रियेसाठी नाव देण्याची गरज उरत नाही. lambda x: x * 2 प्रमाणे एका ओळीत गणना लिहिता येते — तीच map फंक्शनला argument करता येते.\n\nआत प्रत्येक item फंक्शनमध्ये एकेकाळी गेल्यामुळे कोणतेही item फंक्शन दुर्लक्ष करू शकत नाही — याचा अर्थ निकाल संपूर्ण आणि सातत्यपूर्ण असतो.",
        code: `numbers = [1, 2, 3, 4]
def double(x):
    return x * 2
print(list(map(double, numbers)))`,
        codeLanguage: "python",
        output: `[2, 4, 6, 8]`,
      },
      {
        title: "lambda — एकाच ओळीतील निनावाचा फंक्शन",
        content: "lambda हा Python चा एक aorta असा syntax आहे जो छोट्या फंक्शनला अगदी एका ओळीत व्यक्त करतो. def वापरल्यास तीन ओळी लागतात — def, return आणि दोन्हींमधला नियम; lambda मध्ये तेच एक तरफी घडतं.\n\nlambda arguments: expression अशी रचना असते. डाव्या बाजूला पॅरामीटर्स, उजव्या बाजूला परतणारे मूल्य. कॉलोन (:) त्यांना वेगळे करतो. उदा. lambda x: x ** 2 हा function ने square बनवतो.\n\nlambda नाव नसलेला असतो — त्याला निष्क्रिय असा इतरत्र वापर करू नये कारण debugging मध्ये अडचण येते. तो map, filter, sorted मध्ये तर झकास — जिथे एकदा वापरूनच संपवायचा असतो.\n\nlambda ची मर्यादा म्हणजे ती फक्त single expression व्यक्त करते — अनेक statements, loops, if-else body करणं शक्य नसतं. अशा जटिल क्रियेसाठी नेहमी def वापरा.\n\nनवशिक्यांनी lambda ला आधी def ने समजून घेऊन नंतर छोट्या मध्ये बदलणं ही सर्वोत्तम पद्धत आहे — गोंधळ टाळायचा तर हळुहळू शिका.",
        code: `print(list(map(lambda x: x * x, [1, 2, 3, 4])))`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16]`,
      },
      {
        title: "filter कसा काम करतो — होय व नाही चा निर्णय",
        content: "filter(function, sequence) मध्ये function प्रत्येक item वर चालवला जातो आणि ज्या item साठी निकाल सत्य (True) असतो तेच ठेवले जातात. Python मध्ये निर्णय केवळ बूलियनचा नाही — प्रत्येक मूल्य खरे (truthy) व खोटे (falsy) अशा श्रेणीत मोडतं. शून्य, रिकामी स्ट्रिंग, रिकामी यादी — ही सर्व falsy मूल्ये आहेत आणि filter त्यांना वगळतो.\n\nfilter च्या निकालात निवडलेले item मात्र येतात आणि उर्वरित वगळले जातात — त्यामुळे यादी लहान होते. हे प्रत्यक्षात data साफ करणाऱ्या क्रियेसारखं असतं — चाळणीत पीठ गाळल्यास लहान भाग खाली पडतो आणि मोठे घटक वर राहतात. तंतोतंत तोच तत्व येथे लागू होतं.\n\nउदा. रिकामे मूल्य किंवा शून्य असलेले item काढून टाकायचे असतील तर filter मध्ये function म्हणून None दिल्यास सर्व falsy item वगळले जातात. आश्चर्यकारक पण अत्यंत उपयुक्त ट्रिक आहे — एका argument नेच रिकामे डेटा स्वच्छ होतो.\n\nनेहमीच्या वापरात function नियमाची तपासणी करणारं असतं — अशा function ला predicate म्हणतात. तो प्रत्येक item साठी True किंवा False देतो; त्या निकालावरूनच item ठेवायचा की वगळायचा हे ठरतं. नियम जितका जटिल तितकं function मोठं — पण छोट्या नियमासाठी lambda पुरता.\n\nfilter वापरताना लक्षात ठेवा — मूळ यादी कधीही बदलत नाही; नवीन iterator परततो. त्याला list() मध्ये नेल्याशिवाय थेट print केल्यास फक्त filter object दिसतो. निकाल पाहण्यासाठी list() चा वापर आवश्यक आहे.",
        code: `numbers = list(range(10))
print(list(filter(lambda n: n % 2 == 0, numbers)))`,
        codeLanguage: "python",
        output: `[0, 2, 4, 6, 8]`,
      },
      {
        title: "list comprehension — map आणि filter ची आधुनिक आवृत्ती",
        content: "Python मधील आजची प्रिय पद्धत म्हणजे list comprehension — तिचा वापर करून map आणि filter दोन्ही एकाच ओळीत येऊ शकतात. square बनवण्यासाठी [x * x for x in numbers] लिहितो — तोच map होय; [x for x in numbers if x % 2 == 0] हे filter होय.\n\nकोड वाचायला येणं आणि स्पष्ट असणं यामुळे ही पद्धती नवशिक्यांसाठी देव बनली आहे. साहित्यातले लेखक साध्या शब्दांत मोठं विचित्र सांगतात — तसंच comprehension मध्ये घडतं.\n\nmap + filter दोन्ही एकत्र करण्यासाठी comprehension मधे if टाकून ते आणखी सोपं होतं. एका लहान expression मध्ये दोन्ही क्रिया एकाच वेळी होतात आणि निकाल सुशोभित वाटतो.\n\nही पद्धती थोडीशी जास्त सामर्थ्यवान आहे कारण inside मध्ये कोणतेही function वापरता येतं — गणिताचा, स्ट्रिंगचा, अगदी जटिल जटिल असलेला सुद्धा. त्यामुळे संगणत जातो त्या सोबत सराव हेल्पेकर.\n\nम्हणून आजच्या कोडमध्ये map/filter पेक्षा comprehension अधिक मिळतो; तरीही map/filter जाणून घेणं महत्त्वाचं — ते समजून जर comprehension च्या पेक्षाही जास्त सहजता येते.",
        code: `numbers = [1, 2, 3, 4, 5, 6]
squares = [x * x for x in numbers]
evens = [x for x in numbers if x % 2 == 0]
print(squares)
print(evens)`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16, 25, 36]
[2, 4, 6]`,
      },
      {
        title: "map एकाधिक याद्या एकत्र घेतो",
        content: "map चे आणखी एक रहस्य म्हणजे ते एकाधिक iterable simultaneously स्वीकारते. map(min, यादी1, यादी2) लिहिल्यास दोन्ही यादीतले एकाच ठिकाणचे item एकत्र आणून min फंक्शनला दिले जातात.\n\nहीच क्षमता zip सारखीच दिसते पण निकाल वेगळा — zip सरळ जोड्या तयार करतो, map मात्र प्रत्येक जोडीवर function चालवतो. दोन गुणांमधील कमाल, दोन किंमतीमधील कमी ठिकाणी ते बसते.\n\nबहुतेक जणांना याची माहिती नसते पण सर्वात लहान यादी संपल्यावर map थांबतो — उरलेले item विचारले जात नाहीत. हे zip सारखंच वर्तन आहे.\n\nउदा. दोन संख्यांच्या याद्या आणि बेरीज करणार फंक्शन खरे तर operator.add वापरून भौतिक वेगात बेरीज करता येते. प्रत्येक जोडीला तो add करेल.\n\nहे वापरताना दोन्ही यादी समान लांबीच्या असणं महत्त्वाचं — ठीक नसल्यास अचानक data हरवू शकतं. strict तपासणीसाठी जर confidently असाल तर आधी लांबी पडताळा.",
        code: `a = [1, 2, 3]
b = [10, 20, 30]
print(list(map(lambda x, y: x + y, a, b)))`,
        codeLanguage: "python",
        output: `[11, 22, 33]`,
      },
      {
        title: "string data वर map आणि filter — व्यावहारिक वापर",
        content: "आतापर्यंतचे उदाहरण numbers वर होते, पण खरा उपयोग string data वर दिसतो. वाचकांच्या नावांची यादी घ्या; प्रत्येक नावाची पहिली अक्षरे मोठी करणं, रिकामी नावे वगळणं हेच रोजचं काम आहे.\n\nmap(str.strip, names) चा वापर करून नावांमधील आजूबाजूच्या जागा काढल्या जाऊ शकतात — input जिथून येतो तिथे spam spaces असणं सामान्य आहे. नंतर filter सह रिकाम्या नावाची फेक्त होते.\n\nअशा प्रकारे data ची शुद्धता वाढवणं हेच data cleaning म्हणून ओळखलं जातं — कंपन्यांमध्ये यासाठी संपूर्ण कार्यसंघ काम करतो. map/filter तर हेच कार्य केवळ काही ओळींमध्ये करू शकतात.\n\nString वर जटिल नियम लागू करताना regex (regular expression) ला प्राधान्य — पण धडा मर्यादेसाठी आता साधेच नियम वापरून शिका.\n\nही सवय ठेवा — string data नेहमी संशयात घेईन; या दोन फंक्शनांनी शुद्ध केल्यानंतरच पुढील गणना करा. हीच सावधगिरी मोठ्या project ला स्थिर राखते.",
        code: `names = ["  आरोही ", "", "वेद", "  "]
cleaned = [n for n in names if n.strip()]
print(cleaned)`,
        codeLanguage: "python",
        output: `['  आरोही ', 'वेद']`,
      },
      {
        title: "map, filter आणि reduce — functional tool set",
        content: "शिकत असलेल्या map आणि filter ला reduce हा तिसरा सहकारी जोडला जातो. reduce मध्ये सर्व item एकत्र आणून एकच अचूक परिणाम तयार होतो — उदा. सर्व संख्यांची बेरीज. ही बेरीज अर्थातच sum() ने होते.\n\nreduce हे functools module मधून येतं — प्रथम import functools नंतर वापरता येतं. बाहेरून गुरुजी विचारू जाऊ शकतात तोच परिणाम अनेक अडचणींच्या निराकरणामध्ये उत्तम भेटशील.\n\nतीन हीच त्रिमूर्ती — map परिवर्तित करतो, filter निवड करतो, reduce सारांश बनवतो. या तिघांच्या एकत्र वापराने data पाईपलाईन तयार होते.\n\nउदाहरणार्थ score च्या यादीतून फक्त 40 वरच्या score निवडा (filter), त्यांना 2 ने वाढवा (map), शेवटी बेरीज करा (reduce). तीनच ओळींमध्ये संपूर्ण गणित होतं.\n\nही functional पद्धती विशेषतः analytics आणि data science च्या जगात आवडते — जिथे आपण data वर कसल्या क्रिया केल्या हे स्पष्टपणे कोडमध्ये व्यक्त करणं महत्त्वाचं असतं.",
        code: `from functools import reduce
numbers = [1, 2, 3, 4]
print(reduce(lambda a, b: a + b, numbers))`,
        codeLanguage: "python",
        output: `10`,
      },
      {
        title: "हे लक्षात ठेवा — replay",
        content: "या धड्यातील सर्वात महत्त्वाचे मुद्दे एकत्र करूया:\n\n• map ही परिवर्तनाची क्रिया — प्रत्येक item वर function चालतो.\n• map चा निकाल नेहमी एक iterator असतो — list मध्ये नेणं आवश्यक.\n• filter निवड करतो — ज्या item वर function सत्य देतो तेच ठेवते.\n• lambda एका ओळीत निनावाचा function व्यक्त करतो.\n• list comprehension हा आजचा आधुनिक पर्याय — map/filter एकाच वाक्यात.\n• map अनेक iterable एकत्र घेऊ शकतो — सर्वांत लहान लांबी मर्यादा.\n• map+filter+reduce ही data processing ची त्रिमूर्ती.\n\nप्रत्येक मुद्दा स्वतः चालवून पहा; वाचूनच थांबू नका. output तपासून मुद्दा समजला का ते verify करा.\n\nआणि एक महत्त्वाचा सल्ला — map किंवा filter कधीही data ची मूळ यादी बदलत नाहीत; ते नवीन निकाल तयार करतात. तो निकाल जुन्या variable ला परत दिल्याशिवाय मूळ यादी जशीच्या तशी राहते. ही safety हीच या फंक्शनची खासियत आहे — कोणतेही item चुकून नष्ट होत नाही.\n\nघरचा सराव — तुमच्या मित्रांच्या वयाच्या यादीवर filter करून 18 पेक्षा जास्त वयाचे नावे काढा, नंतर map ने प्रत्येकासाठी शुभ संदेश जोडा.",
      },
      {
        title: "map व filter सोबत sorted — डेटाची क्रमवारी",
        content: "map आणि filter मिळवून डेटाची क्रमवारी (sorting) करणं देखील शक्य आहे. sorted() हा built-in function आहे जो यादीची नवीन क्रमवार केलेली प्रत तयार करतो. त्याचा key हा argument function स्वीकारतो — तो function प्रत्येक item वर चालवून तुलना करण्यासाठीचं मूल्य देतो.\n\nउदा. मराठी नावांची यादी असेल आणि त्या प्रत्येकाची लांबी कमी ते जास्त अशी क्रमवारी करायची असेल तर key=len देतो. किंवा संख्यांच्या यादीवर absolute मूल्यानुसार क्रमवारी करण्यासाठी key=abs वापरतो.\n\nlambda सह हीच युक्ती अधिक शक्तिशाली बनते — key=lambda item: item.something सारखं एका घटकावर आधारित तुलना देऊन क्रमवारी करता येते. spreadsheet मधल्या एका स्तंभावर क्रमवारी करण्यासारखंच हे काम गणनेच्या जगात होतं.\n\nप्रत्यक्ष data विभागात माहिती साफ करून, निवडून आणि क्रमवारी केल्यानंतरच विश्लेषण सुरू होतं. या तीन क्रिया — clean, filter, sort — आधुनिक program चे अदृश्य पाया आहेत.\n\nmap आणि filter मध्ये निकाल iterator असल्याने त्यांना क्रमवारी करताना आधी list मध्ये नेणं सोयीचं. sorted हा स्वतः नवीन यादी बनवतो त्यामुळे मूळ data अस्पर्श राहतो हे फायदे तिथेच मिळतात.",
        code: `names = ["meera", "aarohi", "ved", "aditi"]
ordered = sorted(lambda n: len(n), names)
print(ordered)`,
        codeLanguage: "python",
        output: `['ved', 'meera', 'aditi', 'aarohi']`,
      },
      {
        title: "नक्की काय वेगळं आहे: map व list comprehension",
        content: "काही वेळा विद्यार्थी map किंवा comprehension निवडण्यात धांदल करतात. दोघांचे परिणाम सारखेच मिळतात — म्हणून निवड सवयीवर येते. पण नेहमी लक्षात ठेवण्यासारखी गोष्ट अशी की परिणामी output असाच असतो.\n\nकेवळ performance चे कारण असल्यास comprehension बहुतेक औद्योगिक project मध्ये आवडते; map काही ठिकाणी जास्त वेगवान ठरते. पण वेगातील फरक लहान programs मध्ये दिसतच नाही — मुख्य फरक readability मध्ये असतो.\n\nजवळपास सर्व आधुनिक कोड आता comprehension ला प्राधान्य देतो — कारण if हा वापर करता येऊन एकाच ठिकाणी दोन्ही क्रिया (परिवर्तन आणि निवड) व्यक्त होतात. कोड वाचणाऱ्याला एकाच ओळीतच पूर्ण योजना दिसते.\n\nपण map ला विसरणं घातक — तो जुन्या कोडमधून सापडतो. आजही मोठ्या libraries मधले function map वापरत असतात; समजल्याशिवाय तो कोड वाचता येत नाही.\n\nतर सारांश — नवीन कोडसाठी comprehension उत्तम, वाचाव्या लागणाऱ्या जुन्या कोडसाठी map/filter ओळखणं आलेच. दोन्ही शिका, दोन्ही जाणून घ्या.",
      },
      {
        title: "visualise करा — प्रत्येक कृतीचा प्रवाह",
        content: "map आणि filter अत्यंत अमूर्त वाटतात पण तुम्हाला प्रत्येक कृतीचा प्रवाह कागदावर काढता आला तर ते सहजच समजतं. एका यादीतील item ची चित्रं किंवा संख्या विचारात घ्या; प्रत्येक item वर function चा प्रभाव बाणाने दर्शवा.\n\nmap मध्ये प्रत्येक item मधून एक बाण निघतो आणि बदलून पुन्हा एकच item परततो — संख्या बदलत नाही. filter मध्ये मात्र प्रत्येक item नियमाच्या चौकीत आदळतो आणि निवडलेलेच पुढे जातात.\n\nहे चित्र उभे राहिलं तर तुम्ही कोड न वाचता निकालाचा अंदाज सांगू शकता — हीच कौशल्यं खऱ्या program चं दार उघडतात. पुढे data science मध्ये हीच दृष्टी charts बनवण्यात वापरली जाते.\n\nहातात कागद घ्या आणि खालील उदाहरण चित्रात सोडवा: 1..10 च्या यादीवर पहिले map (x*2) नंतर filter (even). चित्रात सांगा किती आणि कोणते item पुढे दिसतील.\n\nअमूर्ततेला मूर्त करण्याची ही सवय जोपासल्यास कोणत्याही नवीन topic ला भिडणं सोपं होतं. कोड वाचणं सहज, लिहिणं सोपं, गडबड शोधणं जलद.",
        code: `data = [1, 2, 3, 4, 5, 6]
doubled = map(lambda x: x * 2, data)
print(list(filter(lambda n: n % 2 == 0, doubled)))`,
        codeLanguage: "python",
        output: `[2, 4, 6, 8, 10, 12]`,
      },
      {
        title: "negatives आणि विशेष case सोबत सराव",
        content: "सराव करताना केवळ सकारात्मक संख्यांनीच थांबू नका — negatives, दशांश, रिकामी यादी — या विशेष case सोबतही प्रयोग करा. रिकाम्या यादीवर map चालवल्यास सहज रिकामा iterator मिळतो; filter वर रिकामा निकाल मिळतो. ही मर्यादा योग्यच आहे.\n\nnegative संख्यांवर map सहज काम करतो — उदा. abs फंक्शनने absolute मूल्य मिळते. तसेच दशांश मूल्यांना आधी int मध्ये बदलून filter करताना सातत्य राखता येतं.\n\nकधी कधी data मध्ये मूल्यांचे प्रकार मिसळलेले असतात — integers, floats, strings. अशा वेळी map मध्ये type check करणं आवश्यक आहे अन्यथा TypeError उद्भवतो.\n\nविशेष case साठी नेहमी लहान प्रयोग कार्यक्रम लिहा — जिथे प्रत्येक data type, रिकाम्या यादीतील वागणूक आणि extreme मूल्ये एकत्र आणून तपासता येतात. हीच आत्मविश्वास वाढवणारी सवय आहे.\n\nशेवटी एक लक्षात ठेवा — उदाहरणात वाचलेले सर्व निकाल प्रत्यक्षात चालवून पाहणंच सर्वांत विश्वासार्ह. प्रत्येक सोडवलेले प्रश्न स्वतःच्या शब्दांत समजावून सांगता आला तर topic खरोखर समजला असं म्हणतात.",
      },
      {
        title: "प्रत्येक section मधील प्रश्न — स्वतःला विचारा",
        content: "प्रत्येक section वाचल्यावर स्वतःला प्रश्न विचारण्याची सवय शिकण्यास गती देते. map च्या section नंतर विचारा: map काय परत करतो? iterator का? list कधी पाहिजे? तसेच filter section नंतर — filter function कसा निर्णय घेतो? truthy मूल्यांचं काय होतं?\n\nlambda section नंतर विचारा: lambda किती statements व्यक्त करू शकतो? एकच? दोन? जटिल कामासाठी def का वापरतो? या प्रश्नांची उत्तरे स्वतः दिली तरच topic स्थिर होतो.\n\nज्या ठिकाणी उत्तर देता येत नाही तोच पुन्हा वाचण्याची जागा. उत्तर देता येत नाही म्हणजे समज कमी पडली — परत वाचा आणि पुढील स्तरावर घेऊन जा.\n\nही strategy केवळ या धड्यापुरती नाही — आयुष्यभर अभ्यास करताना स्वतःला प्रश्न विचारणी हेच शिकण्याचं आयुध आहे. उत्तर शोधण्यासाठी documentation आणि इतर दुवे वापरा.\n\nत्यामुळे शेवटचा निष्कर्ष: एकटे वाचा, मग प्रश्न विचारा, मग प्रयोग करा, मग दुसऱ्याला शिकवा. शिकण्याचं सर्वांत आदर्श चक्र हेच आहे.",
      },
      {
        title: "आत्मपरीक्षा — या प्रश्नांची उत्तरे द्या",
        content: "धडा संपताना शेवटची आत्मपरीक्षा करा. पहिला प्रश्न — map(function, list) चा परिणाम कोणता प्रकारचा object असतो? दुसरा — filter मध्ये function कोणत्या अटीनुसार item ठेवतो? तिसरा — lambda मध्ये किती statements लिहू शकतो? चौथा — comprehension मध्ये if लावून काय साध्य होतं? या प्रत्येकाची उत्तरे एका वाक्यात लिहा.\n\nचौकट उत्तरांमध्ये जर कोणतीही शंका राहिली तर त्या भागाचा section पुन्हा वाचा आणि प्रत्यक्ष कोड लिहून तपासा. शंका न ठेवता उत्तर द्यायला शिका.\n\nपाचवा प्रश्न — मूळ यादी बदलते का? सहावा — reduce कोणत्या module मधून येतो? सातवा — sorted चा key argument काय काम करतो? हे प्रश्न याच धड्यातील महत्त्वाचे निष्कर्ष आहेत.\n\nप्रत्येक उत्तर परत देता आलं तर पुढील विषयावर जायला तयार व्हा. हीच अभ्यासाची योग्य पद्धत — वाचणं, प्रश्न करणं, प्रयोग करणं आणि पुन्हा वाचणं.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांकडे घेऊन जातात — वाचन आणि संदर्भासाठी हेच स्रोत प्रमाण मानले जातात:\n\n• map चा अधिकृत दस्तऐवज: https://docs.python.org/3/library/functions.html#map\n• filter चा अधिकृत दस्तऐवज: https://docs.python.org/3/library/functions.html#filter\n• lambda expression चे नियम: https://docs.python.org/3/reference/expressions.html#lambda\n• list comprehensions ची व्याख्या: https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions\n• functools module — reduce: https://docs.python.org/3/library/functools.html\n• operator module — add वगैरे: https://docs.python.org/3/library/operator.html\n• Built-in types — मूल्य वर्तन: https://docs.python.org/3/library/stdtypes.html\n• Iterators व generators: https://docs.python.org/3/tutorial/classes.html#iterators\n• PEP 327 — decimal: https://peps.python.org/pep-0327/\n• Programming FAQ — lambda: https://docs.python.org/3/faq/programming.html#is-there-a-way-to-write-the-lambda-expression\n• Python tutorial — data structures: https://docs.python.org/3/tutorial/datastructures.html\n• Glossary — iterable: https://docs.python.org/3/glossary.html#term-iterable\n\nप्रत्येक दुवा स्वतः उघडून वाचा — व्याख्या अधिकृत स्रोतावरून समजून घेणं हीच professional सवय आहे.",
      },
    ],
    practiceQuestions: [
      "map कोणता परिणाम देतो?",
      "filter कशाला ठेवतो?",
      "sorted उलट कसा?",
    ],
    quiz: [
      { question: "map(fn, list) काय करतो?", options: ["प्रत्येकावर fn", "गाळतो", "जोडतो", "delete"], correct: 0 },
      { question: "filter चा परिणाम दिसण्यासाठी?", options: ["list()", "print(fn)", "import", "reverse"], correct: 0 },
      { question: "sorted उलट क्रमासाठी?", options: ["reverse=True", "key=", "desc", "up"], correct: 0 },
    ],
    challenge: {
      prompt: "सम संख्या गाळा.",
      starterCode: `nums = [1, 2, 3, 4, 5, 6]
print(list(filter(lambda x: x % 2 == 0, nums)))`,
      expectedOutput: "[2, 4, 6]",
    },
    interviewQuestions: [
      "map vs filter फरक?",
      "sorted मध्ये key चा उपयोग?",
    ],
    related: ["python-fstrings", "python-enumerate", "python-lambda"],
    prev: "python-enumerate",
    next: "python-iteration-tools",
  },
  {
    slug: "python-iteration-tools",
    categoryId: "python",
    title: "Iteration Tools",
    marathiTitle: "Iteration Tools - sorted reversed zip",
    level: "advanced",
    minutes: 15,
    summary: "sorted, reversed, zip, enumerate ही दैनंदिन iteration साधने एकत्र.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "Iteration Tools - sorted reversed zip म्हणजे काय?",
        content: "sorted, reversed, zip, enumerate ही दैनंदिन iteration साधने एकत्र.\nreversed(list) उलट क्रमाने item देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Iteration Tools - sorted reversed zip चे फायदे आणि महत्त्व",
        content: "\"Iteration Tools - sorted reversed zip\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "reversed: उलट क्रम",
        content: "reversed(list) उलट क्रमाने item देतो. ती सूची बदलत नाही — फक्त उलट वाचता येते. list(reversed(x)) लिहून दिसते. स्ट्रिंगवरही उलट क्रम लागू होतो.",
        code: `name = "Python"
print("".join(reversed(name)))`,
        codeLanguage: "python",
        output: `nohtyP`,
      },
      {
        title: "Sorted with Key",
        content: "sorted चे खरे सामर्थ्य key= मध्ये आहे. key ही function प्रत्येक item घेऊन क्रमवारीसाठीचे मूल्य देते.\n\nउदा. tuples मधील दुसऱ्या घटकावरून क्रमवारी — गुणानुसार यादी.",
        code: `pairs = [("आरोही", 95), ("वेद", 72), ("मीरा", 88)]
print(sorted(pairs, key=lambda p: p[1]))`,
        codeLanguage: "python",
        output: `[('वेद', 72), ('मीरा', 88), ('आरोही', 95)]`,
      },
      {
        title: "एकत्र वापर",
        content: "हे tools एकत्र करून शक्तिशाली परिणाम मिळतात. scores ची उलट क्रमवारी, नंतर enumerate(..., start=1) ने क्रमांक — सुबक ranking table तयार होते.",
        code: `scores = [60, 95, 80]
for rank, s in enumerate(sorted(scores, reverse=True), start=1):
    print(f"{rank}. {s}")`,
        codeLanguage: "python",
        output: `1. 95
2. 80
3. 60`,
      },
      {
        title: "चुका",
        content: "• sorted/reversed चा result नवीन — source बदलत नाही.\n• reverse vs reversed गोंधळू नका.\n• key मध्ये चुकीची function तर क्रम खोटा.",
        code: `nums = [4, 1, 3]
print(sorted(nums))
print(nums)`,
        codeLanguage: "python",
        output: `[1, 3, 4]
[4, 1, 3]`,
      },
      {
        title: "Interactive: sorted + enumerate",
        content: "नावे क्रमवारी लावून enumerate ने क्रमांक द्यायचे. start=1 वापरून 1-आधारित क्रमांक.",
        code: `names = ["मीरा", "आरोही", "वेद"]
for i, n in enumerate(sorted(names), start=1):
    print(i, n)`,
        codeLanguage: "python",
        output: `1 आरोही
2 मीरा
3 वेद`,
      },
      {
        title: "Mini Project: Ranking",
        content: "गुणांनुसार ranking — sorted + enumerate एकत्र. data.sort ने मूळ यादी बदलते; sorted() ने नवीन यादी मिळते.",
        code: `data = [("A", 70), ("B", 90), ("C", 60)]
data.sort(key=lambda x: x[1], reverse=True)
for rank, (name, score) in enumerate(data, start=1):
    print(f"{rank}. {name} {score}")`,
        codeLanguage: "python",
        output: `1. B 90
2. A 70
3. C 60`,
      },
    {
        title: "itertools module — iteration चे चाकू",
        content: "Python च्या प्रमाणित libraries मधील आणखी एक अत्यंत शक्तिशाली module म्हणजे itertools. त्यात अनेक छोटी पण कार्यक्षम फंक्शन्स आहेत जी data वर जलद आणि स्मृतीदक्ष iteration करतात. या lecture चा उद्देश म्हणजे itertools मधील काही महत्त्वाची साधने ओळखून त्यांचा वापर समजणं.\n\nitertools हा शब्दच — iteration + tools — म्हणजे iteration ची साधने. यातील प्रत्येक function एक iterator परत करतो, म्हणजे मोठ्या data सोबत काम करताना सर्व item एकाच वेळी memory मध्ये लोड होत नाहीत — एकेक करून येतात. हीच स्मृतीदक्षता या module ची खासियत आहे.\n\nसर्वात सामान्य वापर म्हणजे infinite counters — count() फंक्शन अनंतापर्यंत मोजतं. तसेच cycle() एका यादीतून अगदी अंतहीन आवृत्त्यांमध्ये चक्कर फिरवतं. या दोन्ही अनंत iterator प्रमाणे नेहमी break किंवा अटीवर थांबवावे लागतात.\n\nइतर अनेक साधने आहेत: chain अनेक यादी एकामागून एक जोडतो; repeat एक मूल्य कितीही वेळा देते; tee एकाच iterator च्या अनेक प्रती तयार करतो; islice ची सदस्य ठिकठिकाणचा तुकडा काढतो जसा slicing करतो.\n\nआता हे सुमारे knowledge चे आधारस्थ लक्षात ठेवा तेव्हा पुढील sections मध्ये प्रत्येकाचे उदाहरण आणि स्पष्टीकरण दिसेल. एकंदरीत itertools कडे पाहणी — जेव्हा iteration मध्ये काही वेगळं हवं असेल तेव्हा आधी या module मध्ये शोधा.",
        code: `from itertools import count
for n in count(start=3, step=2):
    if n > 9:
        break
    print(n)`,
        codeLanguage: "python",
        output: `3
5
7
9`,
      },
      {
        title: "count() — चढत्या क्रमाने अनंत संख्या",
        content: "count() हे फंक्शन दिलेल्या मूल्यापासून दिलेल्या अंतराने नवीन संख्या देत जातं — जणू एक infinite counting आराखडा. त्याचे two arguments असतात: start (कुठून सुरुवात) आणि step (किती फरक). दोन्ही optional आहेत; सुरुवातीला 0 आणि अंतर 1 हा default असतो.\n\nहे फंक्शन range सारखंच दिसतं पण range शेवट मर्यादित असते, count मात्र कधीच संपत नाही. म्हणूनच याला infinite iterator म्हणतात. थेट for loop मध्ये वापरताना नेहमी break किंवा अट लावायला हवी अन्यथा program कधीच थांबत नाही.\n\ncount चा सर्वोत्तम वापर म्हणजे पुढास क्रमांक देणे. समजा तुम्ही प्रत्येक item ला अनोखा क्रमांक द्यायचा आहे — count(start=1) चा वापर करून zip सह जोडा त्यामुळे प्रत्येक item ला 1, 2, 3 असा क्रमांक मिळतो.\n\nstep घेतलेला सोबत नकारात्मक असू शकतो — count(10, -1) म्हणजे उलटा मोजणी. तसेच दशांश संख्यांचासुद्धा count वापरता — संगणकात दशांश हाताळताना अचूकतेबाबत काळजी हवी.\n\nमनाला बाळगा — अनंत iterator वापरल्यानंतर त्याचं थांबणे व कंडिशन यांची सोय स्वतः करणं आवश्यक आहे. ती अट नसल्यास program शाश्वत चालत राहतो आणि सिस्टम गोठू शकते. म्हणून count सोबत नेहमी नियंत्रण ठेवा.",
        code: `from itertools import count, zip_longest
names = ["आरोही", "वेद"]
for no, name in zip(count(start=1), names):
    print(no, name)`,
        codeLanguage: "python",
        output: `1 आरोही
2 वेद`,
      },
      {
        title: "cycle() — यादी फिरवणारं अंतहीन चक्र",
        content: "cycle() फंक्शन दिलेली यादी आणि नंतर पुन्हा तीच यादी — असे अगदी अनंत काळासाठी फिरवत राहतं. जणू एखादा पाळणा गोल फिरत राहतो. हे सूची टोकाला पोहोचल्यावर परत उगवतं (आरंभास) आणि पुन्हा सगळे item देतं.\n\nहे फंक्शन खेळ जुळवणाऱ्या (traffic light sequences, recurring menu) ठिकाणी उपयोगी आले. रोजचे काम — उदा. दिवसाचे नाव sequence — सुद्धा cycle ने व्यवस्थित साधता येतं. सोमवार, मंगळवार... पुन्हा सोमवार.\n\nआणखी एक वापर म्हणजे alternate value निवडणे. समजा यादीत प्रत्येक item ला alternate \"A\", \"B\" खुणा द्यायच्या असतील तर cycle([\"A\", \"B\"]) आणि zip एकत्र आणता येतं — प्रत्येक item ला एक खूण मिळेल.\n\ncycle देखील infinite आहे — म्हणून जेव्हा zip किंवा islice च्या काठाने संपवण्याचा मार्ग ठरवलेला नाही तेव्हा cycle सोबत program कधीच थांबणार नाही.\n\nमुलं पार्कमधील गोल फेरीप्रमाणेच cycle वाट दाखवते, पण कुठे थांबायचं हे आपण ठरवतो. त्यामुळे वापरताना मर्यादा नेहमी स्पष्ट ठेवा.",
        code: `from itertools import cycle, islice
colors = cycle(["लाल", "निळा"])
for c in islice(colors, 5):
    print(c)`,
        codeLanguage: "python",
        output: `लाल
निळा
लाल
निळा
लाल`,
      },
      {
        title: "chain() आणि repeat() — साधी पण प्रभावी साधने",
        content: "chain() अनेक iterable गुंडाळून एकच लांब iterator बनवतो — जणू अनेक गाठी एका आणखी लांब धाग्यात बांधल्या. दोन याद्या, तीन tuples, अगदी strings देखील — सर्व एकत्र वळण्यासाठी chain एकाच फंक्शनने साध्य करतो.\n\nवरील सगळं म्हणजे मोठ्या data संच मध्ये विभागवार स्त्रोत एकत्र गाठतात. आतापर्यंत अनेक याद्या जोडण्यासाठी + operator वापरत होतात — ती नवीन यादी बनवते आणि memory वाढते; chain मात्र मूळ आधारावर मिरवता येते.\n\nrepeat() एक मूल्य (निधी) दिलेल्या वेळा किंवा अनंत वेळा देतो. repeat(5, 3) म्हणजे 5, 5, 5 — तीनदा. एक मूल्य दिलेल्या वेळा फिरवण्यासाठी हे सर्वात सुबक साधन आहे.\n\nrepeat सोबत zip वापरल्यास प्रत्येक item सोबत एक स्थिर मूल्य जोडता येते — भविष्यातील संदर्भासाठी टॅग लावण्यासारखं. हे छोटे वापर मोठ्या परिणाम देतात.\n\nकाही वेळा itertools मधील आणखी एक गंमत — product() जी दोन याद्यांचे सगळे संभाव्य जोड्या (combinations) तयार करतो. हा आधी पासून data गणना मध्ये वापरता येतो.",
        code: `from itertools import chain, repeat
print(list(chain([1, 2], ["a", "b"])))
print(list(repeat("hi", 3)))`,
        codeLanguage: "python",
        output: `[1, 2, 'a', 'b']
['hi', 'hi', 'hi']`,
      },
      {
        title: "islice() आणि tee() — नियंत्रण आणि प्रती",
        content: "islice() हे यादीवर चालणाऱ्या सामान्य slicing (data[start:stop]) सारखंच काम करतं पण iterator वर — म्हणजे data मोठा असला तरी memory मध्ये सर्व item लादायची गरज नाही. islice(it, start, stop, step) या रचनेने भाग येतो.\n\nहे infinite iterator ला संपवण्याची उत्तम पद्धत आहे. count किंवा cycle सोबत islice वापरल्यास ठराविक घटक घेऊन नंतर थांबवता येतं — अशीच शक्यता इथपर्यंत आपण break ने करत होतो.\n\ntee() एका iterator च्या अनेक साहित्य प्रती तयार करतो — जणू एका धाग्याच्या फांद्या. मुळात iterator एकदाच पुढे जातो म्हणून त्यातील item अनेक वेळा उपयोगासाठी tee वापरतो.\n\nतोटा असा की tee च्या प्रती मागून मूळ iterator मधून item चुरगळल्या जातात आणि memory खर्च वाढतो. त्यामुळे गरजेनुसारच वापरा — मोठ्या data साठी टाळा.\n\nislice, tee दोन्ही control आणि flexibility देतात. iterator संपल्यावर त्याला पुन्हा पुढे नेता येत नाही हे लक्षात राहिलं तर विचाराचा कुठेही प्रश्न उरत नाही.",
        code: `from itertools import count, islice
print(list(islice(count(10, 5), 4)))`,
        codeLanguage: "python",
        output: `[10, 15, 20, 25]`,
      },
      {
        title: "combination आणि permutation — निवडीचं गणित",
        content: "itertools मधील combinations आणि permutations ही संभाव्यता व गणितातील निवडक जोड्या तयार करणारे फंक्शन्स आहेत. combinations(n, r) दिलेल्या यादीतून r घटकांचे सर्व निवडलेले जोड देतो — क्रम महत्त्वाचा नसतो.\n\npermutations उलट — तेच घटक पण सर्व क्रमाने — त्यात क्रम महत्त्वाचा असतो. उदा. संख्यांचा तिढा 1,2,3 असल्यास permutations देतात [1,2,3], [1,3,2], [2,1,3] वगैरे सर्व विन्यास. combinations मात्र फक्त [1,2], [1,3], [2,3].\n\nहे फंक्शन्स क्रीडा स्पर्धेत गट, आहार निवडी सोबत recruitment पैसे कमावू देतात. जास्त डेटा असल्यास त्या संख्या खूप वेगाने वाढतात — 10 घटकांच्या combinations सुद्धा प्रचंड — म्हणून वापरताना काळजी.\n\nयाच आधारावर combinations_with_replacement हे सुद्धा उपलब्ध आहे — जिथे मूल्य स्वतःच्या बरोबरही जोडता येतं. चहाच्या छोट्या sample मध्ये पुन्हा त्याच मूल्याचा जोड असू शकतो.\n\nविश्लेषण व data science मध्ये या साधनांचा वारंवार वापर होतो — निवडीच्या शक्यतांचा अभ्यास करताना आणि गट तयार करताना. त्यामुळे हे शिकणे मूल्यवान आहे.",
        code: `from itertools import combinations
for c in combinations([1, 2, 3], 2):
    print(c)`,
        codeLanguage: "python",
        output: `(1, 2)
(1, 3)
(2, 3)`,
      },
      {
        title: "हे लक्षात ठेवा — महत्त्वाचे मुद्दे",
        content: "या धड्यातले महत्त्वाचे मुद्दे पुन्हा एकदा:\n\n• itertools ही iteration करणाऱ्या कार्यक्षम साधनांची प्रमाणित library.\n• count() अनंत मोजणी देते — start आणि step नियंत्रित.\n• cycle() यादी अंतहीनपणे फिरवतो.\n• chain() अनेक iterable एकत्र करतो.\n• repeat() एक मूल्य दिलेल्या वेळा देते.\n• islice() iterator वर slicing — infinite थांबवण्याची सवय.\n• tee() एक iterator च्या अनेक प्रती देतो.\n• combinations/permutations — निवडीचं गणित.\n\nप्रत्येक साधन स्वतःच्या छोट्या उदाहरणाने प्रयत्न करा आणि output पडताळा घ्या. नवीन साधन भेटताच त्याला दोन म्हणी लिहून पहा — पहिली नेहमीची, दुसरी संपूर्णतः विचित्र.\n\nजर कधी iterations मध्ये त्रास असेल तर आधी itertools module तपासा — येथे बहुतेक समस्यांचा तयार उपाय असतो.",
      },
      {
        title: "व्यावहारिक दृश्य — data streams आणि अनंत याद्या",
        content: "itertools चा खरा सामर्थ्य प्रत्यक्ष मोठ्या data सोबत काम करताना लक्षात येतो. उदा. सतत येणाऱ्या sensor data किंवा मोजमापांचा प्रवाह — तो कधीच संपत नाही. count, cycle, islice हीच आपल्या रचनेचा पाया ठरतात.\n\nअशा स्ट्रीममध्ये data मध्ये नवीन item येत राहतो आणि कार्यक्रम कधीच थांबत नाही. पण आपण जेवढं आवश्यक तेवढंच घ्यायचं असेल तर islice सोबत संख्यामर्यादा घालतो — अनंतातून ठराविक तुकडा.\n\nआणखी एक जागा — बहु-स्त्रोत data — जिथे अनेक फाइल किंवा जागा एकत्र शेड्यूल करून एकच लांब धार साधायची असते. chain येथेच कामाला लागतो — सर्व धागे एकत्र अडकण्याचा त्रास संपतो.\n\nअशा व्यावहारिक क्षेत्रात iterator ची स्मृतीदक्षता म्हणजे गोष्टी विसरत नाही — मोठ्या फाइलवर program स्मृतीत फुटत नाही.\n\nशिकलेल्या साधनांना अशा प्रत्यक्ष दृश्यांशी जोडून पाहणे हीच खरी समज वाढवणारी सवय आहे.",
      },
      {
        title: "सामान्य चुका — आणि त्यांचे उपाय",
        content: "itertools शिकताना काही सामान्य चुका होतात — पहिली, infinite iterator च्या for loop मध्ये break न लावणे. count किंवा cycle सोबत program दीर्घकाळ चालू राहतो आणि conclusion सुरू होत नाही. कधीही वापरताना थांबण्याची पद्धत निवडा.\n\nदुसरी — एकदा iterator संपल्यावर पुन्हा तो वापरणे. iterator अगदी एका वेळ वापरायचा — दुसऱ्या प्रयत्नात रिकामा मिळतो. इतर वेळी tee किंवा list मध्ये उतरवा.\n\nतिसरी — enormous combinations वापरणे. factorial प्रमाणे वाढणारी संख्या अचानक मोठी होते आणि memory संपते. छोट्या data वर प्रयोग करून वाढ समजून घेईन.\n\nचौथी — अनंत iterator ला list() मध्ये नेणे. list(count()) म्हणजे कधीच न संपणारा प्रयत्न — machine गोठवू शकतो. नक्कीच अनंत वर list लावू नका.\n\nपाचवी — iterator वर पुन्हा restart अपेक्षा करणे. तो sequence एकदाच आहे. या चुकांची आधी जाण ठेवून कोड नियोजित लिहिला तर कित्येक तास वाचतात.",
      },
      {
        title: "zip_longest — असमान लांबीच्या याद्या",
        content: "zip मध्ये जेव्हा दोन याद्यांची लांबी वेगळी असते तेव्हा लहान यादी संपल्यावर काम थांबतं — उरलेले item गमावले जातात. कधी कधी हेच आपल्याला नको असतं — आपल्याला सर्व item दोन्ही बाजूंचे हवेत. तिथे itertools चं zip_longest उपयोगी पडतं.\n\nzip_longest मध्ये दोन याद्यांपैकी मोठी जोपर्यंत संपत नाही तोपर्यंत तो दोन्ही याद्यांमधून item देता. लहान यादी संपल्यावर तिच्या भागात fillvalue नावाचं default मूल्य भरलं जातं.\n\nfillvalue न दिल्यास None मिळतो; तो बर्याचदा आवडत नाही — पण तुम्ही तुमचा उपयोग समजून fillvalue=\u0022—\u0022 किंवा 0 ठेवू शकता. हेच उदाहरण अहवालांमध्ये खूप उपयोगी आहे.\n\nउदा. दोन classes च्या विद्यार्थ्यांच्या नोंदी एकत्र करायच्या असतील आणि एक class लहान असेल — तेव्हा zip_longest रिकाम्या जागी खुण दाखवतो आणि सर्व data पडताळता येतो.\n\nतर zip अचूक जोडीसाठी, zip_longest असमान लांबी हाताळण्यासाठी — हे नियम लक्षात ठेवा तर दोन्ही योग्य प्रसंगी वापरता येतील.",
        code: `from itertools import zip_longest
a = [1, 2, 3]
b = ["x", "y"]
print(list(zip_longest(a, b, fillvalue="-")))`,
        codeLanguage: "python",
        output: `[(1, 'x'), (2, 'y'), (3, '-')]`,
      },
      {
        title: "repeat() व sentinel — iterator ची खास ट्रिक",
        content: "repeat() फंक्शन वापरताना एक खास क्षमता आहे — sentinel नावाचा दुसरा argument. repeat(value, sentinel) असं लिहिल्यास ते value देत राहतं जोपर्यंत value च्या बरोबरी sentinel मूल्य सापडत नाही; नंतर थांबतं.\n\nहे सामान्य repeat सारखंच दिसतं पण फरक असा की इथे संख्या किती वेळा आहे हे नाही — तर थांबण्याचा निकष म्हणजे value चं sentinel शी जुळणं. हे input read करताना वापरता येतं.\n\nकार्यात्मक तरफ, iter(function, sentinel) हे built-in असतं — ते function कॉल करत राहतं आणि sentinel मिळाल्यावर थांबतं. repeat ची sentinel शैली याची चुलत बहीण आहे.\n\nअशा प्रकारच्या साधनांचा दैनंदिन वापर दुर्मिळ आहे पण आधार A1 — जेव्हा जेव्हा data stream मध्ये एका विशिष्ट मुल्यासाठी थांबायचं असतं तेव्हा ही युक्ती वाचवते.\n\nया गुंतागुंतीच्या संकल्पना प्रत्यक्ष उदाहरणाशिवाय लक्षात राहत नाहीत — त्यामुळे प्रत्येक once सोडवून पहा.",
      },
      {
        title: "itertools व generator — नातेसंबंध",
        content: "itertools ची साधने आणि युजरचे स्वतःचे generators — दोघांचे नातं जवळचं आहे. ही साधने generator सारखीच लालिता — हलक्या memory मध्ये लागण्याऱ्या, एकेक item पुढे करणाऱ्या रचना आहेत. यामुळे मोठ्या data सोबत उत्तम वागतात.\n\nस्वतःचा generator लिहिताना yield नावाचं keyword वापरतो आणि तो कार्यक्रम थांबवून पुढील item मागवल्यावर परत सुरू करता येतो. itertools हीच शैली वापरते.\n\nफरक एवढाच — स्वतःचे generators विशेष काम करतात, तर itertools मोठ्या घटकांची गॅलरी देते जी कोणत्याही कामासाठी जोडून घेता येते. या एकत्र केले म्हणजे गेटवे!\n\nजेव्हा एखादी गुंतागुंतीची iterator युक्ती लिहाता येत नाही तेव्हा परत itertools मध्ये शोधा — बहुतेक वेळा तयार साधन असतं.\n\ngenerator शिकलेल्यांसाठी itertools हा एक प्राकृतिक पुढचा पाऊल — दोन्ही एकत्र येऊन iteration च्या जगात तुम्हाला पूर्ण परिपक्व करतात.",
      },
      {
        title: "आत्मपरीक्षा — तुमची तयारी",
        content: "खालील प्रश्नांची उत्तरे स्वतः द्या:\n\n• count() कधी थांबतो?\n• cycle सोबत list() कशाला घत नाही?\n• chain दोन याद्या जोडल्यावर मूळ यादी बदलते का?\n• islice ची कामाची पद्धत range शी कशी सारखी?\n• tee कधी वापरायला टाळावं?\n\nयातील एखाद्या प्रश्नात अडचण आली तर त्याच section पुन्हा वाचा. उत्तर देताना कोड सोबत प्रत्यक्ष चालवून पडताळा घ्या.\n\nसर्व उत्तरं सहज दिली गेली तर तुमची iteration समज मजबूत आहे — पुढील धड्यात virtualenv सारख्या अधिक गुंतागुंतीच्या विषयांसाठी हा पाया तयार आहे.",
      },
      {
        title: "groupby — सलग समान item चे गट",
        content: "itertools मधील groupby() हे फंक्शन सलग (एकामागोमाग) समान मूल्यांचे गट तयार करतो. हे अगदी वर्गात पंक्तीबद्ध बसवलेल्या विद्यार्थ्यांप्रमाणे — जे एकमेकांच्या शेजारी सलग बसलेले आहेत त्यांचेच गट होतात. वेगळे भाग ते मोडतात.\n\ngroupby चा वापर करायचा असेल तर data आधी क्रमवार (sorted) करणं महत्त्वाचं असतं — म्हणजेच समान मूल्ये सलग येतात. क्रमवार न केल्यास एकाचच्या एकट्या प्रती वेगळे गट होतात आणि परिणाम चुकतो.\n\nकार्य घेणं असा असतो: groupby(data, key_function) — जर key_function न दिला तर item स्वतःच तुलना करतो. निकालात key आणि त्याचा group iterator असे दोन्ही मिळतात.\n\nएक आवश्यक सूचना — group नावाचा iterator फक्त एकदाच वाचता येतो आणि मूळ iterator पुढे ढकलल्यावर आधीचे group संपतात. म्हणून गट accidently जतन करायचे असल्यास त्यांना list मध्ये घेतलेलं चांगलं.\n\nउदा. विद्यार्थ्यांच्या गुणांनुसार श्रेणी गटबद्ध करण्यासाठी पहिले sorted करा, नंतर groupby वापरा — प्रत्येक श्रेणीचे विद्यार्थी सहज मिळतात.",
        code: `from itertools import groupby
data = [("A", 1), ("A", 2), ("B", 3)]
for key, grp in groupby(data, key=lambda x: x[0]):
    print(key, list(grp))`,
        codeLanguage: "python",
        output: `A [('A', 1), ('A', 2)]
B [('B', 3)]`,
      },
      {
        title: "takewhile आणि dropwhile — अटीवर सुरुवात व शेवट",
        content: "takewhile() हे फंक्शन प्रत्येक item तोपर्यंत घेते जोपर्यंत अट सत्य असते — आधीचीच सुरुवात कापणारे काम नाही; अट खोटी होताच ते लगेच थांबतं. त्यानंतरचे item — अगदी अट पुन्हा सत्य झाली तरी — दिले जात नाहीत.\n\ndropwhile() उलट काम करतो — तो अट सत्य असल्या item ला सुरुवातीला वगळतो आणि आधीच्या अट खोटी होताच त्यानंतर सर्व item पुढे देतो. उरलेल्यासाठी हे दोन उत्तम सीमा नियंत्रण साधनं आहेत.\n\nयांचा वापर cross करताना — म्हणजे जेव्हा data मध्ये सुरुवातीचे काही item वगळायचे किंवा पहिल्या काहीच घ्यायचे. filter पर्यंत सर्व जसे — तो अटीचा विचार प्रत्येक item वर करतो; takewhile फक्त सुरुवातीच्या सलग item वर.\n\nउदा. वाढत्या संख्या असलेल्या यादीत तुम्हाला फक्त 5 पेक्षा कमी संख्या हव्या — takewhile(lambda x: x < 5, ...) ने सुरुवातीच्या सर्व लहान संख्या मिळतात आणि 5 नंतर थांबतं.\n\nरोजच्या data च्या मध्ये बर्याचदा सुरुवातीला headers किंवा खुणा असतात — dropwhile प्रथम अशी खुणा वगळून मग खऱ्या data ला पुढे देतो. हे reading files च्या वेळी उपयोगी पडते.",
        code: `from itertools import takewhile
print(list(takewhile(lambda x: x < 5, [1, 2, 3, 9, 4])))`,
        codeLanguage: "python",
        output: `[1, 2, 3]`,
      },
      {
        title: "poll कसा उपयोगाचा — व्यावहारिक सारांश",
        content: "आता आपण अनेक साधने शिकलो — count, cycle, chain, repeat, islice, tee, combinations, permutations, groupby, takewhile, dropwhile. अशा प्रचंड शस्त्रसामग्रीच्या शेवटी खरं कर्तृत्व त्यांचा योग्य प्रसंगी वापर. तत्त्व एक — यादीत जे काही हवं ते प्रथम iterate करताना itertools मध्ये पाहा.\n\nसाधन निवडताना विचार करा: क्रमांक द्यायचाया? count. यादी फेकायचाया? cycle. अनेक यादी एकत्र? chain. स्थिर मूल्य? repeat. ठराविक तुकडा? islice. अनेक प्रती? tee. निवड व गट? combinations/permutations/groupby.\n\nही निवडणूकच खऱ्या अर्थाने प्रोग्रामर बनवणारी व्यायाम आहे — साधनं सगळी कोणाकडेही असतात; बरोबर निवडणारा फक्त त्या विषयाची थेट ग्रिप असलेला.\n\nसरावासाठी एक काम सुचवतो: मराठी अक्षरांची यादी घ्या, तिचा गट करा, पहिली अक्षरे मोजा, अनंत counter च्या आधारे क्रमांक द्या आणि शेवटी सलग 5 दाखवा. नवीन साधन असताना ते हातात घेऊनच खेळावं.\n\nअशा प्रयोगांमधून साधन तुमच्या मनात उतरतं आणि आवश्यकतेच्या वेळी लगेच उपयोगी होतं.",
      },
      {
        title: "शेवटची आठवण — iterator हा एकदा वापरण्यासाठी",
        content: "शेवटी एक महत्त्वाची आठवण — iterator हा एकदाच वापरता येतो. list, tuple, dict यांना कितीही वेळा पुन्हा फिरवता येतं — ती पुन्हा येता येणारी रचना असतात. पण iterator चे item एकेक करून संपतात.\n\neकदा संपलं की तो रिकामा राहतो — पुन्हा त्यातून item मिळत नाहीत. त्यामुळे iterator वापरायचा असेल अनेक वेळा तर आधी त्याला list() किंवा tuple मध्ये उतरवा. इतर तरी tee ने प्रती बनवा.\n\nहा धडा आतापर्यंतच्या सर्व उदाहरणांना लागू पडतो — count, cycle, chain, islice — प्रत्येक iterator. या सीमेचा आदर केल्यास program नीट चालतो. धडा पूर्ण!\n\nआता घरचा सराव — या धड्यातील सर्व साधने एकत्र आणून एका छोट्या program मधे वापरून पहा.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांचे आहेत — वाचन आणि संदर्भासाठी प्रमाण म्हणून:\n\n• itertools module चा संपूर्ण दस्तऐवज: https://docs.python.org/3/library/itertools.html\n• count() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.count\n• cycle() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.cycle\n• chain() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.chain\n• repeat() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.repeat\n• islice() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.islice\n• tee() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.tee\n• combinations() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.combinations\n• permutations() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.permutations\n• groupby() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.groupby\n• takewhile() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.takewhile\n• dropwhile() ची व्याख्या: https://docs.python.org/3/library/itertools.html#itertools.dropwhile\n\nप्रत्येक दुवा स्वतः उघडा — अचूक व्याख्या अधिकृत स्रोतावरून समजून घ्या.",
      },
    ],
    practiceQuestions: [
      "reversed कशाला बदलत नाही?",
      "key मध्ये काय देतात?",
      "sort vs sorted फरक?",
    ],
    quiz: [
      { question: "sorted चा result?", options: ["नवीन सूची", "source बदलतो", "delete", "join"], correct: 0 },
      { question: "उलट क्रमासाठी?", options: ["reversed", "reverse=true", "desc", "down"], correct: 0 },
      { question: "key मध्ये काय?", options: ["function", "list", "index", "string"], correct: 0 },
    ],
    challenge: {
      prompt: "लांबीनुसार क्रमवारी.",
      starterCode: `words = ["hi", "hello", "a"]
print(sorted(words, key=len))`,
      expectedOutput: "[\"a\", \"hi\", \"hello\"]",
    },
    interviewQuestions: [
      "sort vs sorted फरक?",
      "key function म्हणजे काय?",
    ],
    related: ["python-map-filter", "python-fstrings", "python-lambda"],
    prev: "python-map-filter",
    next: "python-virtualenv",
  },
  {
    slug: "python-virtualenv",
    categoryId: "python",
    title: "Virtual Environments",
    marathiTitle: "Virtualenv - प्रकल्प वातावरण",
    level: "advanced",
    minutes: 15,
    summary: "venv ने प्रत्येक project साठी वेगळे Python वातावरण; pip install सुरक्षित.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "venv म्हणजे काय?",
        content: "प्रत्येक project ला वेगवेगळ्या libraries ची गरज असते. Virtual environment त्या वेगळ्या ठेवते — एका project मधील library दुसऱ्याला त्रास देत नाही. हे team work आणि production साठी आवश्यक.",
        code: `import sys
print("venv = वेगळे Python वातावरण")`,
        codeLanguage: "python",
        output: `venv = वेगळे Python वातावरण`,
      },
      {
        title: "आदेश",
        content: "venv तयार करण्यासाठी:\n\npython -m venv myenv — नवीन वातावरण.\nsource myenv/bin/activate — सक्रिय करणे (Linux).\n\nसक्रिय झाल्यावर pip install त्या environment मध्ये होते.\ndeactivate — बाहेर येणे.\n\nहे आदेश कोड नाहीत — Terminal मध्ये चालतात.",
        code: `import os
print("venv आदेश Terminal मध्ये चालतात")`,
        codeLanguage: "python",
        output: `venv आदेश Terminal मध्ये चालतात`,
      },
      {
        title: "pip freeze: requirements.txt",
        content: "pip freeze > requirements.txt — त्याची यादी file मध्ये. नंतर दुसरीकडे pip install -r requirements.txt ने तीच libraries. reproducible (तसाच पुन्हा) वातावरण बनते.",
        code: `import subprocess
out = subprocess.run(["python3","-c","print(1+1)"], capture_output=True, text=True)
print(out.stdout.strip())`,
        codeLanguage: "python",
        output: `2`,
      },
      {
        title: "फायदे",
        content: "• प्रत्येक project आपापल्या libraries.\n• versions चा संघर्ष नाही.\n• नवीन developer साठी तसाच setup.\n• test/production एकसारखे.",
        code: `print("अलग project वातावरण = सुरक्षितता")`,
        codeLanguage: "python",
        output: `अलग project वातावरण = सुरक्षितता`,
      },
      {
        title: "चुका",
        content: "• सक्रिय न करता pip install — global मध्ये जाते.\n• requirements.txt अपडेट न करणे.\n• venv ला git मध्ये commit करणे (नको).",
        code: `print("venv .gitignore मध्ये ठेवतात")`,
        codeLanguage: "python",
        output: `venv .gitignore मध्ये ठेवतात`,
      },
      {
        title: "Interactive: venv तपासणी",
        content: "venv सक्रिय करा, मग pip --version पहा — path venv च्या folder कडे बदललेला दिसेल.",
        code: `print("venv सक्रिय करा, मग install")`,
        codeLanguage: "python",
        output: `venv सक्रिय करा, मग install`,
      },
      {
        title: "Mini Project: वातावरण नियोजन",
        content: "project च्या requirements.txt बनवून त्यात libraries नोंदवा. नंतर pip install -r requirements.txt ने त्याच पुन्हा तयार करा.",
        code: `print("project/env सर्व्हर + डेटाबेस")`,
        codeLanguage: "python",
        output: `project/env सर्व्हर + डेटाबेस`,
      },
    {
        title: "virtual environment म्हणजे काय — संपूर्ण oळख",
        content: "Python मध्ये काम करताना तुम्ही install केलेली सर्व पुस्तके आणि libraries संगणकाच्या एका केंद्रीय ठिकाणी बसतात — यालाच global environment म्हणतात. पण जेव्हा अनेक projects वर काम करतो तेव्हा ही एकच जागा त्रासदायक बनते — एक project ची आवृत्ती दुसऱ्या project ला खपत नाही. ही समस्या सोडवण्यासाठीच virtual environment बनते.\n\nvirtual environment म्हणजे आपल्या project साठी एक वेगळी, स्वच्छ आणि स्वतःची Python प्रत. तिथे तुम्ही जे library install करता ते फक्त त्या project ला दिसतं — इतर project वर त्याचा प्रभाव नसतो. जणू प्रत्येक project साठी एक नवीन, रिकामं घर तयार होतं.\n\nही रचना आधुनिक Python कामाचा पाया आहे आणि हिची गरज प्रत्येक व्यावसायिक आवडत्या ठिकाणी असते. कंपनीत नवीन कर्मचारी join होताच त्याला सर्व प्रथम project चं environment बनवायला सांगतात.\n\nअनेक projects मध्ये library च्या भिन्न आवृत्त्या हव्या असतात — एका project ला requests ची जुनी आवृत्ती, दुसऱ्याला नवीन — अशा वेळी virtual environment दोन्ही एकत्र बसू देतं.\n\nग्लोबल environment मध्ये install केल्यास प्रशासक अधिकार लागतात आणि संपूर्ण system ची फेरबदल होते — virtual environment ही सगळी अडचण एका आज्ञेने दूर करतो.",
        code: `python -m venv myenv`,
        codeLanguage: "bash",
        output: ``,
      },
      {
        title: "virtualenv ने environment तयार करताना खोलवर काय होतं",
        content: "आपण python -m venv वापरलो की खरं राज्य काय घडतं ते पाहूया. venv मॉड्यूल एक फोल्डर बनवतो — त्या फोल्डरमध्ये Python interpreter ची प्रत असेल, तसेच स्थानिक package install करण्यासाठी स्वतंत्र जागा असेल. हे सगळं आपोआप होतं — आपल्याला फक्त एक आज्ञा लिहायची असते.\n\nत्या फोल्डरमध्ये bin (किंवा Windows मध्ये Scripts) नावाचा sub-folder असतो — जिथून आपण python आणि pip चालवतो. तसेच lib sub-folder असतो जिथे सर्व installed libraries बसतात. हा भाग तुम्हाला जाणून घेण्याची गरज नाही पण हैराणी प्रश्न सोडवताना उपयोगी पडतो.\n\nजेव्हा आपण environment सक्रिय (activate) करतो तेव्हा सिस्टमचा PATH व्हेरिएबल बदलतो आणि python/pip आज्ञा त्या local फोल्डरकडे निर्देशित होतात. म्हणूनच आपण जे library install करतो ते फक्त तिथेच जातात.\n\nस्थानिक python ची आवृत्ती Google सारख्या global च्या पेक्षा निराळी असू शकत नाही — ती त्याच आधारावर बनते. पण libraries नक्कीच स्वतंत्र बसतात.\n\nvirtual environment ची ही यंत्रणा समजली की त्यावरचा विश्वास वाढतो — आणि future मध्ये कुठलीही विचित्र चूक निघाली तर तिचा शोध सहज लागतो.",
        code: `python -m venv project_env
ls project_env/bin`,
        codeLanguage: "bash",
        output: `activate     python     pip`,
      },
      {
        title: "activate कसे करावे — दोन मुख्य प्रणाली",
        content: "environment बनवल्यावर त्याचा वापर सुरू करण्यासाठी ते सक्रिय (activate) करावे लागते. लिनक्स आणि मॅक — जी दोन प्रणाली मुख्यतः छात्र-विकसकांकडे असतात — तिथे आज्ञा असते: source project_env/bin/activate. Windows मध्ये मात्र project_env\\Scripts\\activate लिहायची असते.\n\nactivate केल्यानंतर तुमच्या terminal मधील कळविणीच्या सुरुवातीला (project_env) असा लहान संकेत बघायला मिळतो — हीच खूण असते की आता तुम्ही त्या environment मध्ये आहात. ती दिसली की तिथेच python व pip चालवणं सुरक्षित आहे.\n\nविंडोजवर activate.ps1 (PowerShell) आणि activate.bat (कमांड प्रॉम्प्ट) अशा दोन स्वरूपांमध्ये उपलब्ध असते. सर्वात सोपी अट — python -m venv ज्या system वर तयार झालं त्या system वरच activate करावं.\n\nकधी कधी develop करताना environment सक्रिय करायची गरज नसते — पण नवशिक्यांसाठी सर्वात सोपा मार्ग म्हणजे सुरुवातीला एकाच आज्ञेने activate करून काम करणं.\n\nसमजा तुम्ही activate विसरलात आणि pip install केलत तर library global फोल्डरमध्ये जाऊन तुमच्या project ला दिसणार नाही — हीच नवशिक्यांना लवकर आढळणारी मोठी अडचण असते.",
        code: `# Linux/Mac
source project_env/bin/activate
# Windows (PowerShell)
project_env\\Scripts\\activate`,
        codeLanguage: "bash",
        output: `(project_env) user@host:~$`,
      },
      {
        title: "deactivate — नियंत्रणावरती मोठा धडा",
        content: "काम पूर्ण झाल्यावर environment मधून बाहेर पडण्यासाठी फक्त deactivate ही आज्ञा टाकायची असते. ती लिहिताच terminal चा संकेत पुन्हा साधा होतो आणि तुम्ही global environment मध्ये परत येता.\n\ndeactivate ही आज्ञा आपली कधीही टाकू शकतो — आणि कोणत्याही terminal मध्ये तसेच काम करत राहू शकतो. त्याच्यानंतर पुन्हा activate करून तेच environment मध्ये परत येता येतं.\n\nकाही developers environment सतत active ठेवतात; त्याही चालतं. पण अनेक environment असतील तर नक्की कोणात काम करतोय ते ठरवणं सुरक्षित ठेवा — हल्लीच्या विषयांपैकी ते एक महत्त्वाचा सल्ला.\n\nenvironment मधील libraries — तिथे install केलेले — environment सोडल्यावरही तिथे असतात. त्या राहतात, पण तुम्ही त्यांना फक्त त्या environment सक्रिय करूनच वापरू शकता — हे स्मरणात राहू द्या.\n\nसमजा गोंधळ झाला आणि तुम्ही विसरलात की ठरवता केलेली library त्या environment मध्ये आहे का — तर तपासण्यासाठी pip list ही आज्ञा लिहा — सर्व installed libraries यादी मिळते.",
        code: `(project_env) ~$ deactivate
~$`,
        codeLanguage: "bash",
        output: ``,
      },
      {
        title: "pip व environment — package install करताना",
        content: "environment मध्ये package install करणं हेच तर खरोखर environment चं मुख्य काम. एकदा activate केल्यावर pip install requests लिहिलं तर ते package फक्त त्या environment मध्ये जातो — global system मध्ये नाही. हीच रचना संपूर्ण project ला स्वच्छ आणि isolated ठेवते.\n\nप्रत्येक nवा package install करताना तो त्या environment मध्येच जातो हे आश्वस्त करण्यासाठी activate होऊन pip install करा. अन्यथा global मध्ये library स्थापन होऊन project निकामी होऊ शकतो.\n\npip install गरजेच्या library सहित dependency चाही dvyavahaar करतो — त्या library ला आवश्यक असलेली इतर library स्वयंचलित install होते. हे सर्व environment मध्येच होतं.\n\nimport करताना library सापडत नाही तर सर्वात आधी environment active आहे का ते तपासा. बर्याचदा सोपी चूक — activate न करता import करणं — अशी असते.\n\nचांगली सवय म्हणजे प्रत्येक project साठी स्वतंत्र environment आणि त्यातील library ची यादी नोंदवून ठेवणे — याचा उपयोग पुढील धड्यात (pip freeze) समजेल.",
        code: `(project_env) ~$ pip install requests`,
        codeLanguage: "bash",
        output: `Successfully installed requests-2.31.0`,
      },
      {
        title: "requirements.txt — project नोंदवून ठेवणं",
        content: "एखादं project पूर्ण केलं की त्यात कोणकोणती library वापरली ते एकत्र procedure मध्ये नोंदवून ठेवणे महत्त्वाचं. यासाठी आपण pip freeze > requirements.txt ही आज्ञा वापरतो — ती environment मधील सर्व installed library च्या आवृत्त्यांसोबत यादी एका फाईलमध्ये नोंदवते.\n\nहीच फाईल म्हणजे त्या project ला पुन्हा कुठेही उभं करण्याची किल्ली. नवीन संगणकावर project चालू करण्यासाठी उर्वरित फक्त venv बनवा आणि pip install -r requirements.txt चालवा — सर्व library आपोआप स्थापन होतात.\n\nहीच पद्धत कंपन्यांमध्ये अनुसरली जाते — team मधला कोणीही developer नवीन machines वर same project (exact versions) एकदम सुरू करू शकतो.\n\nrequirements.txt मध्ये library च्या आवृत्ती खूप महत्त्वाच्या असतात — requests==2.31.0 अशी अचूक आवृत्ती लिहिलेली असते. तसेच >= असा पर्यायी संबंध सुद्धा टाकता येतो.\n\nfile वाचणे सोपे — प्रत्येक ओळीत एक library आणि तिची आवृत्ती. ही फाईल लहान असू द्या — फक्त तुमच्या project ला हवी तीच library सूचीमध्ये ठेवा.",
        code: `(project_env) ~$ pip freeze > requirements.txt
(project_env) ~$ cat requirements.txt`,
        codeLanguage: "bash",
        output: `requests==2.31.0
numpy==1.26.0`,
      },
      {
        title: "virtualenv सोबत IDEs — VS Code चा वापर",
        content: "जेव्हा तुम्ही VS Code सारखा आधुनिक editor वापरता तेव्हा तो आपोआप declare केलेला python interpreter ला शोधतो. प्रत्येक project मध्ये सर्वात खालील उजव्या कोपऱ्यात (किंवा स्थितीच्या निकषावर) Python आवृत्तीचे नाव दिसते.\n\nVS Code मध्ये select interpreter हा पर्याय निवडून तुम्ही त्यातील environment निवडू शकता — म्हणजे editor चालवणारे स्क्रिप्ट्स आणि terminal त्या environment वरच जातात. हेच environment index ठरवण्यास मदत होते.\n\nआपले चुकलेले संपादन होणार नाही याची खात्री म्हणून environment निवडल्यावर terminal मधलं (project_env) खूण पहा — दोन्ही जुळत असतील तरच काम सुरू करा.\n\nPyCharm सारखे इतर editor देखील environment शोधून निवडतात. जे editor वापरताय तिथे हा पर्याय अगोदरच असेल — तो परत नव्याने शोधावा लागत नाही.\n\nतीन रँगण — environment सर्कार, editor ची निवड आणि terminal ची active स्थिती — या तीनची जुळवणी झाली की library search च्या सगळ्या अडचणी संपतात.",
        code: `# Terminal विरुद्ध environment जुळवणी:
which python   # कोणता python वापरतोय ते दाखवतो`,
        codeLanguage: "bash",
        output: `/home/user/project_env/bin/python`,
      },
      {
        title: "सामान्य चुका — आणि त्यांचे उत्तर",
        content: "virtual environment मध्ये काम करताना अनेक सामान्य चुका होतात. पहिली — activate न करता pip install करणे — त्यामुळे library global मध्ये जाते आणि project ला दिसत नाही. दुसरी — environment फोल्डरला गिटमध्ये (git) commit करणे — स्वतःच्या project फाईलमध्ये हे उत्तम नसून requirements.txt सोबत काम करा.\n\nतिसरी — एकाच जगात वेगवेगळ्या environment चे mix-up होणे — प्रत्येक project साठी वेगळे नाव द्या उदा. मराठी बोलताना project आणि environment चं नाव स्पष्ट ठेवा. चौथी — जुना environment import होत असताना नवीन library सापडली नाही.\n\nपाचवी — environment मधून बाहेर पडताना deactivate न करता नवीन activate करणे — खरं तर चालतं, पण निवड स्पष्ट असावी अशी शिफारस आहे.\n\nसहावी — Windows चा PATH स्ट्रिंग गोंधळ — backslash अथवा forward slash ची चूक. Windows वर Scripts\activate तर Linux/Mac वर bin/activate याची जाण आवश्यक.\n\nया सहा चुका टाळल्या तर virtual environment सोबत काम अधिक सहज होते — हा विषय लवकरच अलग लगेच आत्मसात होतो.",
      },
      {
        title: "व्यापक वापर — खऱ्या जगात environment",
        content: "खऱ्या जगात सॉफ्टवेअर कंपन्यांमध्ये प्रत्येक developer त्याच्या संगणकावर venv तयार करूनच काम सुरू करतो. नवीन project join होताना तुमच्या लॅपटॉपवर venv बनून requirements.txt install करा—चा प्रदेश प्रमाणित आज्ञा आहे.\n\nअशीच पद्धत server तसेच cloud computing मध्येही वापरली जाते — Deployment च्या वेळी प्रत्येक layer साठी स्वतंत्र environment तयार होतो.\n\nExcel-shod च्या कंपनीमध्ये एकाच संगणकावर अनेक project चालतात — त्यामुळे environment ची गरज सर्वत्र स्पष्ट. संख्येने भरपूर project मध्ये इथे नसते मात्र गुणवत्ता सुधारणारी.\n\nआजच्या दिवसांमध्ये Docker सारखी साधनेही येत आहेत — ती संपूर्ण operating environment पॅकेज करतात. पण त्याच्या आधारावरही Python venv ची संकल्पना असतेच.\n\nम्हणूनच आजच्या या यंत्रणेचे महत्त्व शिकवतो — कारण आजचा शिकलेला venv धडा उद्या कोणत्याही प्लॅटफॉर्मवर काम करताना मदत करतो.",
      },
      {
        title: "हे लक्षात ठेवा — सारांश",
        content: "या धड्यात शिकलेलं:\n\n• virtual environment ही स्वतंत्र Python प्रत — प्रत्येक project साठी.\n• python -m venv environment_नाव ने तयार होतं.\n• source bin/activate (Linux/Mac) किंवा Scripts activate (Windows).\n• सक्रिय होताच शेल प्रॉम्प्टमध्ये (env) दिसतो.\n• pip install त्या environment मध्येच होतं.\n• pip freeze > requirements.txt ने library नोंदवता.\n• pip install -r requirements.txt ने पुन्हा सर्व install करता.\n• deactivate ने environment सोडता येतं.\n\nही संपूर्ण यंत्रणा आधुनिक Python अभ्यासाची तार आहे — आज खर्च केलेला वेळ उद्या दसपट वाचवतो.",
      },
      {
        title: "कुठे install होतं — स्थानिक फोल्डर शोधणं",
        content: "venv च्या आतले तपशील — तो प्रत्येक library कुठे ठेवतो ते पाहूया. Linux/Mac वर site-packages हा फोल्डर project_env/lib/python3.x/site-packages इथे असतो. Windows वर Site-Packages नावाने बसतो. सर्व installed library तिथेच बसतात.\n\nपुस्तकांच्या library मधलं प्रत्येक पुस्तक कुठे ठेवलेलं आहे हे library मधला व्यक्तीस ठाऊक असतो — तसाच हा फोल्डर — सर्व module येथे स्थान होतं. त्यामुळे import करताना Python तिथे शोधतो.\n\nजेव्हा अनेक environment असतात तेव्हा library कुठे बसली हे नक्की कळणं महत्त्वाचं — ते ठिकाण शोधायचं असेल तर pip show package_नाव ने त्याची माहिती मिळते.\n\nimport मध्ये अपयश आल्यास आणि library install केली असेल तर site-packages तपासा — ती तिथे असण्याची खात्री करा. जर नसेल तर environment चुकलंय असा अर्थ — बरोबर environment active करा.\n\ndisplay साठी library paths दाखवणारी आज्ञा python -c \"import sys; print(sys.path)\" ही उपयोगी आहे — ती सर्व पथ सूची दाखवते आणि environment चा पथ सुद्धा तिथे दिसतो.",
        code: `(project_env) ~$ python -c "import sys; print(sys.path)"`,
        codeLanguage: "bash",
        output: `['', '/usr/lib/python312.zip', ...,
 '/home/user/project_env/lib/python312/site-packages']`,
      },
      {
        title: "requirements.txt च्या आवृत्ती नियम",
        content: "requirements.txt मध्ये library च्या आवृत्त्या नोंदवताना काही नियम शिकायला हवेत. अचूक आवृत्ती होय — requests==2.31.0. ज्यापेक्षा जास्ती अपेक्षा असल्यास requests>=2.30.0. तसेच दोन मर्यादांदरम्यान — requests>=2.0,<3.0 असा नियमही लिहिता येतो.\n\nही सगळी notation pip च्या समजतं — ती वाचून बरोबर आवृत्ती स्थापन करते. प्रत्येक पर्याय वेगळ्या परिस्थिती साठी आहे — म्हणून तुमचा project किती सुरक्षित ठेवायचा ते ठरवा.\n\nज्या library ला नवीन आवृत्ती नक्कीच चालवायची असेल तर ~= चा उपयोग — requests~=2.31.0 म्हणजे 2.31.0 किंवा तीच लहान श्रेणीतली नवीन. हे नियम दररोजच्या विकासात महत्त्वाचे आहेत.\n\nrequirements.txt मधील comment सुद्धा चालतो — # हे चिन्ह वापरून तुम्ही ओळीवर नोंद घेऊ शकता. फाइल वाचणाऱ्याला हेतू स्पष्ट होतो.\n\nलक्षात ठेवा — requirements.txt योग्य नोंद ठेवली तर उद्या नवीन environment मध्ये कुठलीही अडचण न येता तुमचा project अगदी साधा उभा राहतो.",
        code: `requests==2.31.0
numpy>=1.26,<2.0
flask~=3.0.0`,
        codeLanguage: "bash",
        output: ``,
      },
      {
        title: "प्रत्येक System वर Python मध्ये हा फरक",
        content: "Linux, Windows, Mac — प्रत्येक प्रणालीवर venv तयार करण्याची पद्धत थोडी वेगळी आहे. Python आज्ञा तरी python होय — Windows वर कधीकधी python लिहिण्याऐवजी py ही आज्ञा वापरावी लागते. Linux/Mac वर python इ. चालतो.\n\nactivate ची आज्ञा — Linux/Mac: source bin/activate; Windows: Scripts/activate. हाच दोन प्रणालींमधला मोठा फरक नवशिक्यांना गोंधळवतो.\n\nWindows वर कधीकधी PowerShell ची रीत वेगळी असते — activate.ps1 लिहिता येते पण Policy सेटिंग्स मुळे बंद असू शकते. अशा वेळी activate.bat किंवा cmd मध्ये चालवा.\n\nMac वर homebrew च्या मोठ्या Python आवृत्ती असतात; त्यामुळे python3 स्पष्टपणे लिहावं लागतं — venv बनवताना python3 -m venv असे. Linux वर python3 अधिक प्रचलित.\n\nनेहमी आपला system ओळखा आणि त्यानुसार आज्ञा निवडा — copy-paste करून वेगवेगळ्या आज्ञा चाचणी करणं धोकादायक आहे.",
      },
      {
        title: "कधी तरी environment न परत वापरता येणार नाही तर",
        content: "कधी कधी environment खराब होतो किंवा Java सारखे सगळे files अपरिपूर्ण असतात. अशा वेळी रिपेअर करण्यापेक्षा नवीन environment तयार करणं सहज असतं. तो folder काढून टाकल्यास फक्त requirements.txt हातात असावं लागतं.\n\nरिमूव्ह करून पुन्हा तयार करण्याची पद्धत असा:\n\n• deactivate करा\n• old_env फोल्डर काढा (rm -rf old_env)\n• नवीन env बनवा (python -m venv new_env)\n• activate करा आणि pip install -r requirements.txt चालवा\n\nही पद्धत म्हणजेरिपेअर करण्यापेक्षा सोपी आणि डेटा शुद्ध ठेवणारी. सावधगिरी — फक्त तुमचे सेव्ह केलेले scripts वाचवा; environment मधले library पुन्हा install होतात.\n\nप्रत्येक environment म्हणजे तात्पुरता अवतार — त्याला काढून टाकण्यास भीती नको. स्वतःच्या कोड आणि data minimum मूल्य ठेवलं की कोणतीही समस्या लवकर मिटते.\n\nलक्षात ठेवा requirements.txt हीच खरी ओळख — ती जपलेली असेल तर environment कोणत्याही वेळी पुन्हा जन्म घेऊ शकतो.",
      },
      {
        title: "एक झटपट सराव — प्रत्यक्ष हात करा",
        content: "आता शिकलेलं प्रत्यक्ष लागू करून पहा — फक्त वाचून नाही. नवीन फोल्डर बनवा, तिथे cd करा, आणि python -m venv test_env ने environment तयार करा. मग activate करून पहा की प्रॉम्प्टमधील (test_env) खूण दिसते.\n\nपुढील टप्पा — तिथे requests पण किंवा numpy सारखी library install करा. मग pip list ने तपासा की ती library तिथे बसली आहे आणि import करून बघा.\n\nमग pip freeze > requirements.txt नोंदवा आणि ती फाइल पहा. शेवटी deactivate करून प्रॉम्प्ट पुन्हा साधा होतो का ते पहा.\n\nहा पूर्ण प्रवास 5 मिनिटांत होतो — हीच खरी शिकवण. प्रत्येक आज्ञा काय करते ते observe करा — आणि दोन-तीन वेळा पुन्हा करा.\n\nया सरावामुळे ही यंत्रणा मनात पक्की बसते — पुढील voluminous library सह काम करण्यासाठी हा पाया तयार होतो.",
        code: `mkdir myproject && cd myproject
python -m venv test_env
source test_env/bin/activate
pip install requests
pip freeze > requirements.txt`,
        codeLanguage: "bash",
        output: `(test_env) ~/myproject$`,
      },
      {
        title: "आत्मपरीक्षा — तुमची प्रगती",
        content: "धडा संपवण्यापूर्वी स्वतःला हे प्रश्न विचारा:\n\n• venv म्हणजे नेमकं काय त्या निर्माण होतं?\n• activate न केल्यास library कुठे install होते?\n• फक्त एक library project ला हवी असेल तर ती तिथे कशी बसते?\n• requirements.txt मध्ये आवृत्त्या कशा नोंदवतात?\n• environment तयार करण्यासाठी कोणती आज्ञा?\n\nप्रत्येक प्रश्नाचं उत्तर सहज देत येतं का ते पहा — देत नसेल तर संबंधित section पुन्हा वाचा. उत्तर सांगण्याची क्षमता हीच खऱ्या समजुतीची खूण असते.\n\nसर्वांची उत्तरं मिळाली तर तुमची तयारी उत्तम — पुढील धड्यांमधील numpy सारख्या गंभीर topics साठी environment चं ज्ञान आधारभूत ठरेल. आत्मविश्वासाने पुढे जा.",
      },
      {
        title: "शेवटी एक उपयोगी सवय — प्रत्येक project साठी नवीन environment",
        content: "एकदा venv ची रीत लक्षात आली की प्रत्येक नवीन project सुरू करताना नवीन environment तयार करण्याची सवय लावा. याला सुरुवात करताना लहानसे काम वाटतं पण दीर्घकाळात ही सवयच project स्वच्छ ठेवते.\n\nजुने projects मधील libraries नवीन projects मध्ये मिसळणं टाळता — अशी मिसळणी हीच बर्याच problems ची मूळ कारणं असते. प्रत्येक project ला स्वतःचं वेगळं वातावरण मिळवणं शुद्धता विकत घेण्यासारखं असतं.\n\nहे सरावात नेहमी लक्षात ठेवा — प्रत्येक project folder च्या आतच environment ठेवावा अशी सामान्य रीत आहे. त्यामुळे तो project कोणता environment वापरतो ते एकाच दृष्टीने कळतं.\n\nकंपनीच्या standardized वर्कफ्लो मध्ये स्वतःची environment तयार करण्याची हीच प्रक्रिया प्रत्येक developer करत असतो — म्हणून ही सवय आजच रूजवल्यास फायद्याची ठरेल.\n\nहा धडा इथेच समाप्त — पुढील विषय numpy आहे जिथे libraries install करून गणितं करणार आहोत. तिथे हे environment ज्ञान थेट वापरात येईल.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांचे आहेत — वाचन आणि संदर्भासाठी प्रमाण म्हणून:\n\n• venv चा अधिकृत दस्तऐवज: https://docs.python.org/3/library/venv.html\n• Virtual Environments साठी tutorial: https://docs.python.org/3/tutorial/venv.html\n• pip चा अधिकृत दस्तऐवज: https://docs.python.org/3/installing/index.html\n• requirements files ची व्याख्या: https://pip.pypa.io/en/stable/reference/requirements-file-format/\n• venv चा पूर्ण वापर — command reference: https://docs.python.org/3/library/venv.html#creating-virtual-environments\n• Glossary — virtual environment: https://docs.python.org/3/glossary.html#term-virtual-environment\n• Installing Packages — pip guide: https://docs.python.org/3/installing/index.html\n• Python packaging user guide: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/\n• Pip freeze चा वापर: https://docs.python.org/3/library/venv.html#pip-freeze\n• Creating Virtual Environments — हाताळणी: https://docs.python.org/3/library/venv.html#creating-virtual-environments\n\nप्रत्येक दुवा स्वतः उघडा — अचूक व्याख्या अधिकृत स्रोतावरून समजून घ्या.",
      },
    ],
    practiceQuestions: [
      "venv कशासाठी?",
      "सक्रिय करण्याचा आदेश?",
      "requirements.txt म्हणजे?",
    ],
    quiz: [
      { question: "venv काय करतो?", options: ["वेगळे वातावरण", "install", "delete", "compile"], correct: 0 },
      { question: "सक्रिय करण्याचा आदेश?", options: ["activate", "run", "start", "go"], correct: 0 },
      { question: "requirements.txt?", options: ["libraries ची यादी", "कोड", "logs", "data"], correct: 0 },
    ],
    challenge: {
      prompt: "venv चा मुख्य फायदा.",
      starterCode: `print("अलग libraries")`,
      expectedOutput: "अलग libraries",
    },
    interviewQuestions: [
      "venv का आवश्यक?",
      "freeze काय दाखवतो?",
    ],
    related: ["python-pip-advanced", "python-modules", "python-functions-advanced"],
    prev: "python-iteration-tools",
    next: "python-numpy",
  },
  {
    slug: "python-numpy",
    categoryId: "python",
    title: "NumPy Basics",
    marathiTitle: "NumPy - संख्या array आणि गणित",
    level: "advanced",
    minutes: 16,
    summary: "NumPy arrays, vectorized गणित, mean/sum — डेटा सायन्सचा पाया.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? NumPy - संख्या array आणि गणित चे फायदे आणि महत्त्व",
        content: "✓ हे शेवट करण्यासाठी उपयोगी.\n✓ array चा आकार (shape) आणि घटक (index) महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "NumPy म्हणजे काय?",
        content: "NumPy ही Python ची संख्यात्मक array library आहे. Array म्हणजे एकाच प्रकारच्या संख्यांची सुबक रचना. List पेक्षा array वर गणित एकत्र (vectorized) होते — वेगवान आणि सोपे.",
        code: `import numpy as np
a = np.array([1, 2, 3])
print(a * 2)`,
        codeLanguage: "python",
        output: `[2 4 6]`,
      },
      {
        title: "Array तयार",
        content: "np.array(list) ने array तयार होते. np.zeros(n), np.ones(n) — शून्य/एकाने भरलेली. np.arange(stop) — 0 पासून. हे शेवट करण्यासाठी उपयोगी.",
        code: `import numpy as np
print(np.arange(5))`,
        codeLanguage: "python",
        output: `[0 1 2 3 4]`,
      },
      {
        title: "Shape व Index",
        content: "array चा आकार (shape) आणि घटक (index) महत्त्वाचे. a.shape — (rows, cols). a[0] — पहिला. a[1:] — उरलेले. 2D array (matrix) ला दोन अक्ष्यांपर्यंत गाठता येतो.",
        code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.shape)
print(a[1][0])`,
        codeLanguage: "python",
        output: `(2, 2)
3`,
      },
      {
        title: "गणित",
        content: "array वर गणित element-wise होते — a + 1, a * 2, a ** 2. आणि np.sum, np.mean, np.max सारखे function संपूर्ण array वर. हे हिशोब सोपे करतात.",
        code: `import numpy as np
a = np.array([10, 20, 30])
print(np.sum(a))
print(np.mean(a))`,
        codeLanguage: "python",
        output: `60
20.0`,
      },
      {
        title: "चुका",
        content: "• list आणि array गोंधळू नका — array वर गणित element-wise.\n• shape चुकला तर broadcast error.\n• numpy install न करता import — ModuleNotFoundError.",
        code: `import numpy as np
print(np.array([2, 4]) ** 2)`,
        codeLanguage: "python",
        output: `[ 4 16]`,
      },
      {
        title: "Interactive: array बेरीज",
        content: "दोन arrays ची बेरीज — element-wise addition. a + b ने [5 7 9].",
        code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)`,
        codeLanguage: "python",
        output: `[5 7 9]`,
      },
      {
        title: "Mini Project: सरासरी गुण",
        content: "scores array ची सरासरी np.mean ने. output 85.0 — [80, 90, 70, 100] या चार गुणांची सरासरी.",
        code: `import numpy as np
scores = np.array([80, 90, 70, 100])
print(np.mean(scores))`,
        codeLanguage: "python",
        output: `85.0`,
      },
    {
        title: "NumPy म्हणजे काय — संख्यात्मक Python चा पाया",
        content: "NumPy (Numerical Python) हा Python चा सर्वात महत्त्वाचा बाह्य पुस्तकालय (library) आहे जो संख्यात्मक गणनेच्या कामासाठी तयार करण्यात आला आहे. योग्य sports मधल्या खिलाडूसारखे, NumPy ने Python ला संख्यात्मक संशोधन मध्ये मुख्य खिलाडू बनवलं आहे. शास्त्रज्ञ, अभियंते, आकडेवारीचे तज्ञ — सर्वांचा आधार हा NumPy आहे.\n\nभाषेचा एक गंभीर मत्त्व — Python मध्ये numbers च्या याद्या (lists) असतात पण त्या वेगवान गणनेसाठी वापरताना अडचणी येतात. list मध्ये वेगवेगळ्या data types चे item असू शकतात — त्यात संगणन हळू आणि गोंधळाचे होते. NumPy मध्ये array ही एकसारख्या (homogeneous) संख्यांची रचना पक्की आणि जलद असते.\n\nनवीन array बनविण्यासाठी साधारणतः np.array() फंक्शन वापरतात. NumPy ला np नावाने आयात करतात — import numpy as np — हीच जुनी पारंपरिक रीत आहे आणि संपूर्ण जगात उपयोगात आहे.\n\nहे library अनेक पातळ्यांवर दररोज काम करते — data science, machine learning, physics सिम्युलेशन, финансовые मॉडेल, image processing — सर्वांच्या पायामध्ये NumPy array असते. त्यामुळे शिकणं हे खूप मूल्यवान आहे.\n\nएखाद्या नव्या क्षेत्राला सुरुवात करताना त्याचा पाया ओळखणे महत्त्वाचे असते; NumPy हा आजच्या Python डेटा जगाचा असा खरा पाया आहे.",
        code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(a)`,
        codeLanguage: "python",
        output: `[1 2 3 4]`,
      },
      {
        title: "np.array विरुद्ध सामान्य list — या दोनमध्ये काय वेगळं?",
        content: "नवीन विद्यार्थी सहज विचारतात — सामान्य Python list आणि NumPy array यांच्यामध्ये काय दिग्दर्शन आहे? उत्तर धोरणात्मक आहे. list ही बहु-उपयुक्त रचना आहे — तिच्यात integers, strings, अगदी दुसऱ्या lists देखील ठेवता येतात. पण ही लवचिकता संगणनाच्या वेगाला मारते.\n\nNumPy array मध्ये सर्व item एकसारखा type चे असतात — सर्व integers किंवा सर्व floats किंवा सर्व strings. यामुळे संगणन अत्यंत जलद होते कारण संगणकाला एकसारख्या structure मध्ये काम करणं सोपे जाते.\n\nदुसरा फरक — operators चा अर्थ. list मध्ये + म्हणजे जोडणी (concat), पण array मध्ये + म्हणजे elementwise बेरीज! [1,2] + [3,4] array मध्ये [4,6] देते पण list मध्ये [1,2,3,4]. हा फरक नक्की लक्षात ठेवा.\n\nतिसरा फरक — list मध्ये गुणाकार * म्हणजे पुनरावृत्ती, पण array मध्ये * प्रत्येक element ला गुणतं. array ने 10 ने गुणलं की प्रत्येक संख्येचा गुणाकार होतो — हीच वेगवान गणनेची जादू.\n\nचौथ्या गोष्टीत list आणि array वेगळे — memory. array ला कमी जागा लागते आणि data मध्ये मोठ्या प्रमाणात काम चालवताना हेच महत्त्वाचं ठरतं. मोठा data, कमी memory, जलद गणना — तेच NumPy चं स्लोव्ह수가.",
        code: `a = [1, 2]
b = [3, 4]
print(a + b)
n1 = np.array(a)
n2 = np.array(b)
print(n1 + n2)`,
        codeLanguage: "python",
        output: `[1, 2, 3, 4]
[4 6]`,
      },
      {
        title: "array तयार करण्याच्या अनेक पद्धती",
        content: "np.array() ही एक पद्धत असून NumPy array तयार करण्याच्या आणखी अनेक पद्धती आहेत. zeros, ones, full, arange, linspace — ही काही प्रमुख फंक्शन्स आहेत. प्रत्येक एका विशिष्ट कामासाठी उपयोगी असतं.\n\nnp.zeros((2, 3)) — 2x3 आकाराची सर्व शून्यांची array. np.ones((2, 3)) — सर्व ones ची array. np.full((2, 3), 7) — सर्व 7 ची array. ही फंक्शन्स random sample, मॉडेलची सुरुवात स्थिती बनवण्यात उपयोगी पडतात.\n\nnp.arange(0, 10, 2) — range सारखी पण परिणाम array — 0 पासून 2 च्या अंतराने — 0, 2, 4, 6, 8. np.linspace(0, 1, 5) — 0 ते 1 या दरम्यान 5 समान अंतराचे मूल्य — अचूक समान रेटा हवा तेव्हा उपयोगी.\n\nअशा प्रकारे — मला कशी array हवी ते ठरवा आणि त्या उद्देशाचे फंक्शन निवडा. लूपला संधी न देता सगळी array एका आज्ञेत तयार होते — हीच NumPy ची वेगवान कार्यशैली.\n\nचिंता करण्याची गरज नाही — कधी library वापरायची ते कामानुसार लक्षात येईल. सुरुवातीला फक्त त्यांचे अस्तित्व आणि हेतू जाणून घ्या.",
        code: `import numpy as np
print(np.zeros((2, 3)))
print(np.full((2, 2), 7))
print(np.arange(0, 10, 2))`,
        codeLanguage: "python",
        output: `[[0. 0. 0.]
 [0. 0. 0.]]
[[7 7]
 [7 7]]
[0 2 4 6 8]`,
      },
      {
        title: "array वर गणितओ — element वार खेळ",
        content: "NumPy array वर केलेली गणितं थक्क करणारी असतात — अनेक elements वर एकाच वेळी (elementwise) क्रिया होते. array वर 10 ची बेरीज, 2 ने गुणाकार, टक्के काढणे — हे सारं एकाच आज्ञेत सर्व elements साठी एकाच वेळी होतं.\n\nउदा. a * 2 — प्रत्येक element आपापला दुप्पट होतो. a ** 2 — प्रत्येक element चा square होतो. np.sqrt(a) — प्रत्येक element चा वर्गमूळ. हे सगळं एकाच line मध्ये, loop न विचारता होतं.\n\nloop ची कल्पना करा — Python list वर चालवायचा असेल तर आधी loop लिहा. NumPy मध्ये तोच काम श्रीगणेशाच्या आधीच नाही — कारण तो loops च्या खालील स्तरावर वेगवान C code चालवतो.\n\nआणखी महत्त्वाचं — arithmetic प्रत्येक element वर एकाच वेळी — parallel input — कारण vectorization म्हणून ओळखतात. ही संपूर्ण NumPy ची जादू आहे की जी तुलनात्मक Python ला हरवते.\n\nहे वापरताना provider ची आठवण — दोन arrays ची बेरीज करताना त्यांचा आकार समान असावा. वेगळा आकार असेल तर broadcasting मध्ये गुंतागुंत येते.",
        code: `a = np.array([1, 2, 3])
print(a + 10)
print(a * 2)
print(a ** 2)`,
        codeLanguage: "python",
        output: `[11 12 13]
[2 4 6]
[1 4 9]`,
      },
      {
        title: "shape आणि dtype — array ची ओळख",
        content: "प्रत्येक array मध्ये दोन महत्त्वाचे गुण असतात — shape आणि dtype. shape म्हणजे array ची जाळी — किती rows, किती columns. dtype म्हणजे data type — integers, floats, इत्यादी. हे दोन्ही array च्या सखोल ओळखचा भाग होत.\n\n.shape attribute वापरल्यास आकाराची (rows, columns) या स्वरूपात जोडी मिळते. उदा. 2x3 array चा shape (2, 3) असतो. .ndim वापरल्यास किती dimensions आहेत ते कळतं — 2D array साठी 2.\n\ndtype research महत्त्वपूर्ण आहे — integer array वर पुर्णांक गणना. तुमची data floats मध्ये हवी असतील तर array तयार करताना dtype=np.float64 असे सांगावे लागते.\n\nहे दोन्ही गुण जेव्हा library चे आउटपुट समजून घ्यायचे असते तेव्हा उद्भवतात. कुठली library चूक झाली तर सर्वात आधी shape आणि dtype तपासायला हवा.\n\nयाच भूमिकेत आणखी उपयुक्त attribute — size म्हणजे एकूण element संख्या. 2x3 ची array मध्ये सहा element असतात. size आणि shape यांचा संबंध लक्षात ठेवा.",
        code: `a = np.array([[1, 2], [3, 4]])
print(a.shape)
print(a.dtype)
print(a.size)`,
        codeLanguage: "python",
        output: `(2, 2)
int64
4`,
      },
      {
        title: "reshaping — array चा आकार बदलणं",
        content: "kधी कधी array चा आकार बदलावा लागतो — म्हणजे 1D array ला 2D मध्ये किंवा उलट. reshape() फंक्शन हेच करतं. उदा. 6 element ची array ला 2x3 मध्ये बदलता येतं. परंतु element संख्या बदलू नये — 6 म्हणजे 6च राहू द्या.\n\nreshape चा अर्थ — element चा क्रम बिघडत नाही; फक्त त्यांची व्यवस्था नव्या आकारात बदलते. डाटापासून नवीन वाचणी काढणे सहज बनते.\n\nसोयीचं रूप म्हणून -1 हा argument आहे — reshape(-1, 2) म्हणजे दुसऱ्या दिशेत 2 columns आणि आधीच्या संख्येला आपोआप ठरव. वाचणाऱ्याला सुंदर वाटतं.\n\nreshape मधे काळजी — निर्देशित आकार आणि एकूण element संख्या जुळलीच पाहिजे. जुळली नाही तर ValueError येतं. हीच सर्वात सामान्य चूक नवशिक्यांकडून होत असते.\n\nआजचे library image data असे एका long stream मधे मिळतात; त्या data ला मॉडेल मध्ये images (width, height, channels) च्या आकारात बदलवायचे असते — तिथेच reshape खूप काम करतो.",
        code: `a = np.arange(6)
print(a.reshape(2, 3))
print(a.reshape(-1, 2))`,
        codeLanguage: "python",
        output: `[[0 1 2]
 [3 4 5]]
[[0 1]
 [2 3]
 [4 5]]`,
      },
      {
        title: "2D matri — rows आणि columns ची मांडणी",
        content: "जेव्हा array मध्ये दोन direction असतात तेव्हा तिला 2D array किंवा matrix म्हणतात. matrix च्या अनेक उपयोग आहेत — खेळ बोर्ड, प्रतिमेच्या pixels, spreadsheet मधील data, गणितातील matrices. shape (rows, columns) स्वरूपात दर्शवला जातो.\n\nmatrix मधील element ला दोन coordinates ने पोहोचता येते — a[row, col]. उदा. a[0, 1] — पहिली row दुसरा column. ही नोंदणी अत्यंत मजबूत वापरात आहे.\n\nआईन ज्यादा महत्त्वाचं म्हणजे slicing अनेक elements ची निवड एकत्र करणे — a[:, 0] म्हणजे सर्व rows चा पहिला column — एक अवधि. a[1, :] म्हणजे दुसरी संपूर्ण row.\n\nहे slicing Python list मधल्या slicing सारखेच असते पण आता दोनदिशांनी अनेक surfaces वर. कारक कागदावर आधी written matrix पाहून मग प्रत्यक्ष try करा — अधिक सोपे लागते.\n\nहे मोठ्या data मधून उपयुक्त भाग काढण्यासाठी आवश्यक कलाच — आणि मोठ्या analytical projects मध्ये मुळात हीच done आधार आहे.",
        code: `a = np.array([[1, 2, 3], [4, 5, 6]])
print(a[1, 0])
print(a[:, 1])
print(a[0, :])`,
        codeLanguage: "python",
        output: `4
[2 5]
[1 2 3]`,
      },
      {
        title: "aggregate क्रिया — बेरीज, सरासरी, सर्वांत मोठा",
        content: "संख्यात्मक data वर अनेक आकडეჟवारी क्रिया (aggregate functions) कराव्या लागतात — बेरीज, सरासरी, कमाल, किमान, मध्यक, विचलन. हे सर्व NumPy मधे एका function ने सहज होते.\n\nnp.sum(a), np.mean(a), np.max(a), np.min(a) — या क्रिया संपूर्ण array वर होतात. np.std(a) म्हणजे standard deviation. np.median(a) मध्यक. हे सर्व statistics आत्मविश्वासाने वापरता येतात.\n\nआणखी एक पातळी — 2D array मध्ये ही क्रिया rows किंवा columns प्रमाणे करता येते. np.sum(a, axis=0) — प्रत्येक column ची बेरीज; np.sum(a, axis=1) — प्रत्येक row ची बेरीज. axis ठरवण्याला सराव लागतो.\n\naxis=0 म्हणजे columns (उभे), axis=1 म्हणजे rows (आडवे) — हे लक्षात ठेवण्यासाठी अनेक नवशिक्यांना गोंधळ होतो. वारंवार प्रयोग करूनच हे रूजवणं चांगलं.\n\nहे aggregate फंक्शन्स data analysis च्या मध्यभागी असतात — म्हणून त्यांची आवड निर्माण करा. एका मोठ्या data वर ही सर्व name आज्ञेत चालवून पहा आणि निकालाची तुलना करा.",
        code: `a = np.array([[1, 2], [3, 4]])
print(np.sum(a))
print(np.mean(a))
print(np.max(a, axis=1))`,
        codeLanguage: "python",
        output: `10
2.5
[2 4]`,
      },
      {
        title: "indexing आणि मास्किंग — conditional निवड",
        content: "data मधून काही ठराविक elements निवडण्याची सवय लावा — विशेषतः condition च्या आधारे. comparison operators array वर घातल्यास boolean array मिळते — प्रत्येक element साठी True/False. त्या matching false? ideas array ला boolean index प्रमाणे वापरता येतं.\n\nउदा. a > 3 — प्रत्येक element चा तुलनाचा निकाल boolean array देतो. ती array वापरून a[a > 3] लिहिल्यास फक्त 3 पेक्षा मोठे element मिळतात. हेच conditional filtering आहे.\n\nही आज्ञा filter नावाच्या Python function सारखीच आहे पण येथे निकाल वेगाने आणि एकापाठोपाठ मिळतो. मोठ्या data मधून म्हणणं शोधणं हेच आजचे काम ठरावीक.\n\nहे boolean masking मध्ये प्रभावी — np.where(condition) सुद्धा element शोधतो. ते दोन arguments घेऊ शकतं — np.where(a > 2, value_if_true, value_if_false) — प्रत्येक element चा तिरका निर्णय.\n\nRealistic वापर — गुणांचा data घेऊन उत्तीर्ण-अनुत्तीर्ण ठरवणं. मग a >= 40 चा boolean array तयार करा आणि तीच क्रिया function सोबत जोडा.",
        code: `a = np.array([10, 25, 40, 55])
print(a >= 40)
print(a[a >= 40])`,
        codeLanguage: "python",
        output: `[False False  True  True]
[40 55]`,
      },
      {
        title: "हे लक्षात ठेवा — सारांश पुन्हा",
        content: "या धड्यात शिकलेलं:\n\n• NumPy हे Python चे वेगवान संख्यात्मक library — import numpy as np.\n• np.array() ने एकसारख्या data ची array तयार होते.\n• list मधला + concat, array मधला elementwise!\n• zeros, ones, full, arange, linspace — array तयार करण्याच्या पद्धती.\n• elementwise गणितं — vectorization कारण जलद वापर.\n• shape, dtype, size — array ची ओळख.\n• reshape, slicing, matrix indexing.\n• sum, mean, max, min, std — aggregate क्रिया.\n• boolean masking — conditional निवड.\n\nप्रत्येक मुद्दा स्वतः चालवून पहा — आणि झोपायच्या आधी शेवटचं मात्रा — array ची दिशा आणि type नेहमी तपासा.",
      },
      {
        title: "broadcasting — वेगवेगळ्या आकाराच्या arrays एकत्र",
        content: "NumPy मधील एक अत्यंत प्रभावी आणि कधी-कधी गोंधळवणारी संकल्पना म्हणजे broadcasting. जेव्हा वेगवेगळ्या आकाराच्या (shape) दोन arrays वर arithmetic करतो तेव्हा NumPy आपोआप लहान array ला मोठ्या array च्या आकारापर्यंत विस्तारतो — यालाच broadcasting म्हणतात.\n\nउदा. 2x3 array वर 1x3 array ची बेरीज करताना लहान पंक्ति पुन्हा-पुन्हा वापरली जाते. NumPy आपोआप हे नियम पाळतो त्यामुळे आपल्याला explicit replication करावी लागत नाही.\n\nहे नियम सोपे पण अनेक — दोन आकारांची dimension तुलना उजवीकडून डावीकडे होत असते. प्रत्येक स्थानावर आकार समान किंवा एक 1 असेल तर broadcast शक्य होतो; नाही तर ValueError येते.\n\nनैसर्गिक उदाहरण — प्रत्येक column ला वेगळी संख्या जोडणे किंवा प्रत्येक row ला वेगळे स्केल फॅक्टर लागू करणे — हे all loans broadcasting ने होते.\n\nभूमिका तुम्हाला कोणत्या आकारांत काम होईल हे आधीच जाणून घ्यायचं असेल तर दोन arrays चा shape मनात या नियमांवर तपासून घ्या. हीच सवय गोंधळ टाळते.",
        code: `a = np.array([[1, 2, 3], [4, 5, 6]])
b = np.array([10, 20, 30])
print(a + b)`,
        codeLanguage: "python",
        output: `[[11 22 33]
 [14 25 36]]`,
      },
      {
        title: "random — यादृच्छिक संख्यांची निर्मिती",
        content: "संशोधन, सिम्युलेशन आणि machine learning मध्ये यादृच्छिक (random) संख्या महत्त्वाच्या असतात. नुकत्याच np.random module मधून random संख्या तयार करता येतात — np.random.rand, randint, normal, seed या प्रमुख उदाहरणे आहेत.\n\nnp.random.rand(3) — 0 ते 1 या दरम्यान 3 random numbers. np.random.randint(0, 100, 5) — 0 ते 100 दरम्यान 5 integers. np.random.normal(0, 1, 10) — सामान्य वितरणाच्या default parameters ने random sample.\n\nयादृच्छिकता म्हणजे अंदाज न येणे, पण experiment पुन्हा तोच निकाल द्यावा असे वाटल्यास np.random.seed(42) चा वापर करावा — तो पुनरावृत्ती करण्यायोग्य random numbers देतो.\n\nही seed ची सवय बर्याच वेळा आवश्यक असते — शिक्षकांना नक्कीच rebooting, शोधासाठी reproducible result हवा असतो. seed घातला तर सर्व scientists त्याच निकालावर संवाद साधता येतो.\n\nrandom data बनवणे म्हणजे शून्याने सुरुवात करून आकडे पैदा होतात — ते analytics साठी simulation, testing साठी samples — सर्वव्यापी उपयोग असतो.",
        code: `np.random.seed(42)
r = np.random.randint(1, 10, 6)
print(r)
print(np.mean(r))`,
        codeLanguage: "python",
        output: `[7 4 8 5 7 9]
6.666666666666667`,
      },
      {
        title: "युक्लिडियन अंतर — व्यावहारिक गणना",
        content: "NumPy चा खरा लाभ जेव्हा दिसतो जेव्हा आपण गणिताची प्रत्यक्ष सूत्रं लागू करतो — उदा. दोन बिंदूंमधील युक्लिडियन अंतर. हे अंतर म्हणजे त्या coordinate च्या फरकांच्या squares च्या बेरजेचे वर्गमूळ.\n\nNumPy मध्ये ते अगदी सरळ — np.sqrt(np.sum((a - b) ** 2)). दोन बिंदूंचे फरक, वर्ग, बेरीज आणि वर्गमूळ — एकाच आज्ञेमध्ये. हेच सूत्र मशीन लर्निंग मधील clustering मध्ये वारंवार वापरले जाते.\n\ndata science मध्ये अंदाज या सारख्या computations दररोज हजारो वेळा होत असतात — त्यामुळे संकल्पना एकदा समजली आणि अंमल एका आज्ञेत दिसला की महत्त्व लक्षात येतं.\n\ntwo बिंदूंचे अंतर तर सहज; पण alphas आधारे युक्लिडियन norms, मध्यबिंदू, सरासरी वेक्टर वगैरे अनेक गोष्टी समोर येतात. base मूळ तेच सूत्र.\n\nही एकच गणनेची आज्ञा म्हणजे loops न लिहिता खऱ्या गणिताचा आदर्श नमुना — NumPy च्या सामर्थ्याची एकटी व्यवस्था.",
        code: `a = np.array([1, 2])
b = np.array([4, 6])
d = np.sqrt(np.sum((a - b) ** 2))
print(d)`,
        codeLanguage: "python",
        output: `5.0`,
      },
      {
        title: "टाळायच्या सामान्य चुका",
        content: "NumPy सुरु करताना काही सामान्य चुका होतात — पहिली, np.array ला nantel लावणे. शब्दखोच: array मध्ये list पाठवायची असते — np.array(1, 2, 3) नाही तर np.array([1, 2, 3]).\n\nदुसरी — shape जुळत नाही म्हणून values ना broadcast टाळणे. वेगवेगळ्या shapes वर गणित करणे म्हणजे निष्कर्ष चुकतो — आधी दोन्हींचा आकार तपासा.\n\nतिसरी — dtype gोंधळ. integer array तयार करून त्यात fraction बसवण्याचा प्रयत्न केल्यास मूल्य cutter होतात. float हवे असतील तर त्यादिवशी घोषित करा.\n\nचौथी — copy विरुद्ध view. क्रिया केल्यावर मूळ array बदलली का नवीन ठळक — हा फरक न ओळखता अनेक गोंधळ होतो. copy.write.copy() ने स्पष्टपणे कॉपी मिळते.\n\nपाचवी — memory संपणं. मोठ्या arrays जोरण्याऐवजी — max अनेक arrays जोडून ठेवण्याऐवजी — त्या टाकून नवीन बनवणं वेगवान. ह्या पाच चुका टाळल्यास काम अत्यंत गुळगुळीत होतं.",
      },
      {
        title: "आत्मपरीक्षा — न्यूमपायचा आत्मविश्वास तपासा",
        content: "धडा संपताना या प्रश्नांची उत्तरे स्वतः द्या:\n\n• np.array आणि list मधील + च्या वर्तनात काय फरक?\n• zeros आणि ones कधी उपयोगी पडतात?\n• reshape करताना कोणती अट पाळावी लागते?\n• axis=0 म्हणजे काय — rows की columns?\n• boolean masking मध्ये निकाल कसा मिळतो?\n\nउत्तरांमध्ये जर शंका राहिली तर संबंधित section पुन्हा वाचा. प्रत्येक उत्तर कोडमध्ये try करून तपासा.\n\nNumPy शिकल्यावर पुढील धडे — requests, web scraping — हे सर्व दिवसाच्या उदाहरणांना sequence देतील. हा array चा पाया पक्का असल्यास ते सर्व सोपे जाईल. आत्मविश्वास निर्माण न झाल्यास परत सराव करा.",
        code: `a = np.array([5, 15, 25])
print(a > 10)
print(a[a > 10])`,
        codeLanguage: "python",
        output: `[False  True  True]
[15 25]`,
      },
      {
        title: "concatenation आणि संबंधित arrays",
        content: "अनेक arrays एकत्र जोडण्याची आवश्यकता वारंवार येते — np.concatenate दोन arrays ला एका दिशेत जोडतो. axis नियंत्रण ठरवते की rows च्या बाजूने जोडायचं की columns च्या बाजूने.\n\nnp.vstack आणि np.hstack ही दोन सोय सुविधा files — vstack उभ्या मध्ये (rows वर) जोडतो, hstack आडव्या (columns वर) जोडतो. 1D arrays वापरताना ही दोंन्ही अत्यंत सोपी वाटतात.\n\nजोडताना मुख्य अट — ज्या दिशेत जोडतो त्याखेरीज आकार समान असणे आवश्यक. vstack साठी जोडताना columns संख्या समान असावी लागते; hstack साठी rows.\n\nही जोडणी data मध्ये नवीन observations किंवा नवीन features जोडण्याचं काम रोज करत असते — एकत्रित datasets, reports आणि बाहेरून npmण argparse files मधून भर पाडते.\n\nशिकताना समजून घेणं महत्त्वाचं validation — मूळ array बदलत नाही, नवीन array निर्माण होते. तीच मागणं नवीन variable मध्ये धरा अन्यथा result गमावता.",
        code: `a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6]])
c = np.vstack((a, b))
print(c)
d = np.hstack((a, a))
print(d)`,
        codeLanguage: "python",
        output: `[[1 2]
 [3 4]
 [5 6]]
[[1 2 1 2]
 [3 4 3 4]]`,
      },
      {
        title: "लेखांचा सारांश — आज संपलेलं",
        content: "NumPy च्या या सुरुवातीच्या धड्यात आपण खूप महत्त्वाच्या गोष्टी शिकलो — array ची निर्मिती, list विरुद्ध array, पद्धती, elementwise math, shape-dtype, reshape, slicing, aggregate, masking आणि broadcasting.\n\nहे सर्व एकत्र केलं की आकडे हाताळण्याची तुमची क्षमता अनेक पटींनी वाढते — हीच Python data science मध्ये प्रवेशाची तिकिटं असतात.\n\nयापुढे requests सारखे विषय वेबवरून data आणण्याचे आहेत — त्या data ला अर्थ देण्यासाठी NumPy चा पाया उपयोगी पडेल. प्रत्येक नव्या topic मागून पूर्वीचे ज्ञान जोडत जाणे हीच या course ची शैली आहे.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांचे आहेत — वाचन आणि संदर्भासाठी प्रमाण म्हणून:\n\n• NumPy चा अधिकृत दस्तऐवज: https://numpy.org/doc/stable/\n• NumPy quickstart ट्यूटोरियल: https://numpy.org/doc/stable/user/quickstart.html\n• np.array() ची व्याख्या: https://numpy.org/doc/stable/reference/generated/numpy.array.html\n• np.arange() ची व्याख्या: https://numpy.org/doc/stable/reference/generated/numpy.arange.html\n• np.linspace() ची व्याख्या: https://numpy.org/doc/stable/reference/generated/numpy.linspace.html\n• Broadcasting ची पूर्ण माहिती: https://numpy.org/doc/stable/user/basics.broadcasting.html\n• Indexing — सूचना व्याख्या: https://numpy.org/doc/stable/user/basics.indexing.html\n• Reference guide — सर्व कार्यरत फंक्शन्स: https://numpy.org/doc/stable/reference/index.html\n• NumPy absolute beginner's guide: https://numpy.org/doc/stable/user/absolute_beginners.html\n• Glossary — array: https://numpy.org/doc/stable/glossary.html#term-array\n\nप्रत्येक दुवा स्वतः उघडा — अचूक व्याख्या अधिकृत स्रोतावरून समजून घ्या.",
      },
    ],
    practiceQuestions: [
      "np.array म्हणजे काय?",
      "element-wise म्हणजे?",
      "anyhow सेटअप?",
    ],
    quiz: [
      { question: "array तयार करण्यासाठी?", options: ["np.array", "list()", "dict()", "sort()"], correct: 0 },
      { question: "बेरीज संपूर्ण?", options: ["np.sum", "print", "len", "max"], correct: 0 },
      { question: "vectorized म्हणजे?", options: ["एकत्र गणित", "हाताने", "धीमे", "None"], correct: 0 },
    ],
    challenge: {
      prompt: "array ची सरासरी.",
      starterCode: `import numpy as np
print(np.mean(np.array([2, 4, 6])))`,
      expectedOutput: "4.0",
    },
    interviewQuestions: [
      "list vs array फरक?",
      "vectorized म्हणजे काय?",
    ],
    related: ["python-numbers-random", "python-lists", "python-csv-json"],
    prev: "python-virtualenv",
    next: "python-requests",
  },
  {
    slug: "python-requests",
    categoryId: "python",
    title: "HTTP with Requests",
    marathiTitle: "Requests - वेब विनंत्या",
    level: "advanced",
    minutes: 16,
    summary: "requests library ने HTTP GET/POST; APIs शी बोलणे.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Requests - वेब विनंत्या चे फायदे आणि महत्त्व",
        content: "\"Requests - वेब विनंत्या\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "requests म्हणजे काय?",
        content: "requests ही सर्वात लोकप्रिय HTTP library आहे. requests.get(url) — वेबवरून माहिती मागवते. API (Application Programming Interface) म्हणजे दोन programs मधील संवाद — हवामान, बातम्या, मोठा डेटा सगळे API देतात.",
        code: `print("requests install झाले आहे")`,
        codeLanguage: "python",
        output: `requests install झाले आहे`,
      },
      {
        title: "GET: उत्तर मिळवणे",
        content: "requests.get(url) उत्तर देतो. resp.status_code — 200 म्हणजे यश. resp.json() — data dictionary मध्ये. resp.text — कच्ची मजकूर. status_code मिळते उत्तर.",
        code: `print("status_code: 200 म्हणजे यश")`,
        codeLanguage: "python",
        output: `status_code: 200 म्हणजे यश`,
      },
      {
        title: "Payload व Headers",
        content: "params आणि headers देऊन API ला तपशील देतात. requests.get(url, params={...}, headers={...}). Headers मध्ये key, user-agent, content-type.",
        code: `print("params + headers म्हणजे विनंती तपशील")`,
        codeLanguage: "python",
        output: `params + headers म्हणजे विनंती तपशील`,
      },
      {
        title: "Timeouts व Errors",
        content: "requests.get(url, timeout=10) — 10 सेकंद थांबते. त्रुटीवर (network, 404) exceptions. try/except ने हाताळतात.",
        code: `try:
    raise ConnectionError("network down")
except ConnectionError:
    print("पुन्हा प्रयत्न करा")`,
        codeLanguage: "python",
        output: `पुन्हा प्रयत्न करा`,
      },
      {
        title: "चुका",
        content: "• timeout न दिल्यास हँग होऊ शकते.\n• json() तर data format.\n• API key leaks नको.",
        code: `print("नको API key कोडमध्ये")`,
        codeLanguage: "python",
        output: `नको API key कोडमध्ये`,
      },
      {
        title: "Interactive: GET सराव",
        content: "GET ने data मिळते. status_code तपासा — 200 असेल तर request यशस्वी.",
        code: `print("GET ने data मिळते")`,
        codeLanguage: "python",
        output: `GET ने data मिळते`,
      },
      {
        title: "Mini Project: सुरक्षित network कोड",
        content: "try/except + timeout = सुरक्षित network request. error आल्यास gracefully handle करा.",
        code: `print("try/except + timeout = सुरक्षित")`,
        codeLanguage: "python",
        output: `try/except + timeout = सुरक्षित`,
      },
    {
        title: "requests library — इंटरनेटशी बोलणारं Python",
        content: "जेव्हा Python कडून वेबसाइट किंवा API शी संवाद साधायचा असतो तेव्हा requests हे library सर्वात सोपं आणि लोकप्रिय साधन आहे. इंटरनेटवर data घेणे, पाठवणे, सर्च डेटा मागवणे — हे सारं requests च्या माध्यमातून अत्यंत सुलभ पद्धतीने होते.\n\nrequests हे एक बाह्य library आहे म्हणून ते आधी install करावे लागते. टर्मिनलमध्ये pip install requests लिहिलं की ते स्थापन होते — आणि ते पूर्ण करण्यासाठी previous धड्यात शिकलेल्या virtual environment चा वापर करणं उत्तम.\n\nप्रत्येक वेब रिक्वेस्ट म्हणजे browser सारखीच — तुम्ही URL ला जाता आणि server कडून प्रतिसाद (response) मिळतो. requests हेच काम Python कोडमध्ये करतं — browser न उघडता.\n\nहे library बरोबर थोडसं उदाहरण देऊन समजून घेऊया. data मागताना response मध्ये मजकूर, status code, headers सगळं मिळतं. ह्या सर्वांच्या तपशीलात आपण खोलवर जाऊया.\n\nआजच्या जगात जवळजवळ प्रत्येक web-आधारित program requests वापरतो — मग तो weather app असो, सोशल मीडिया API असो किंवा news data tracking. त्यामुळे हे शिकणे ही वेब डेव्हलपमेंट आणि data science ची गरज आहे.",
        code: `import requests
r = requests.get("https://api.github.com")
print(r)`,
        codeLanguage: "python",
        output: `<Response [200]>`,
      },
      {
        title: "GET request — data मागवण्याची मूलभूत क्रिया",
        content: "इंटरनेटवर सर्वात सामान्य क्रिया म्हणजे GET request — त्याद्वारे आपण server कडून data मागवतो. वेबसाइट उघडताना browser जे करतो किंवा तुम्ही instant messenger ने संदेश तपासण्यासाठी जे करता — ते सर्व GET request असते.\n\nrequests.get(url) लिहिलं की Python त्या url वर GET request पाठवतो आणि परत response मिळतो. हा response म्हणजे संपूर्ण माहिती — आपण त्यातून आवश्यक भाग काढतो.\n\nresponse दिल्यावर त्याची दोन तरतूदी आवश्यक — तुम्हाला काय हवं ते निवडणं. r.status_code ने request सफल का अपयशी ते कळतं; r.text ने मजकूर मिळतो; r.json() ने JSON डेटा मिळतो.\n\nओळख प्रमाणे HTTP बद्दल लक्षात ठेवा — 200 म्हणजे यश, 404 म्हणजे सापडलं नाही, 500 म्हणजे server मध्ये चूक. status_code हीच request चा आरोग्य तपासण्याची यंत्रणा आहे.\n\nGET request ला अनेकदा parameters हवे असतात — उदा. कोणती जागा सर्च करायची. ही params dict म्हणून देता येतात आणि requests त्यांना URL मध्ये बरोबर बसवतं.",
        code: `import requests
r = requests.get("https://httpbin.org/get")
print(r.status_code)
print(r.url)`,
        codeLanguage: "python",
        output: `200
https://httpbin.org/get`,
      },
      {
        title: "POST request — server ला data पाठवणं",
        content: "GET ने data मागतो, तर POST request ने server कडे data पाठवतो. उदा. login फॉर्म भरून submit करणे, नवीन entry तयार करणे, टिप्पणी पोस्ट करणे — हे सर्व POST क्रिया आहेत.\n\nrequests.post(url, data={...}) अशी रचना असते — data argument मध्ये आपण dict म्हणून माहिती देतो. हीच पद्धत server ला तुमचे data पाठवते.\n\nकाही APIs मध्ये data JSON म्हणून पाठवावा लागतो — तेव्हा json={...} argument वापरतो आणि requests आपोआप त्याची JSON मध्ये बदलणी करतो. हीच अजून एक सुलभता आहे.\n\nPOST नंतर अनेकदा server नवीन resource तयार करतो — मग response मध्ये status_code 201 म्हणजे created हे नवीन यश सूचित होते. 201 ही status code विशिष्ट आहे.\n\nGET आणि POST या दोन मुख्य पद्धती आहेत — पण HTTP मध्ये आणखीही आहेत: PUT, DELETE, PATCH. वेब API च्या स्वरूपानुसार त्या हव्या असतात — आता फक्त GET/POST चा पाया पक्का करा.",
        code: `import requests
r = requests.post("https://httpbin.org/post",
                  data={"name": "आरोही"})
print(r.status_code)
print(r.json()["form"])`,
        codeLanguage: "python",
        output: `200
{'name': 'आरोही'}`,
      },
      {
        title: "status code समजून घेऊया — HTTP ची भाषा",
        content: "प्रत्येक HTTP प्रतिसादात status code येतो — ती 3 अंकांची संख्या असून server ची प्रतिक्रिया सांगते. या code ची भाषा समजली तर network समस्या लगेच ओळखता येतात.\n\n200 ते 299 — यश. 200 OK सर्वात सामान्य. 201 म्हणजे नवीन resource तयार झालं — अनेकदा POST नंतर. 204 म्हणजे यश पण data नाही.\n\n300 ते 399 — redirect. server सांगतो की data कुठे हलवलं आहे; requests आपोआप redirect फॉलो करतो — ही सोय आपोआप असते.\n\n400 ते 499 — client ची चूक. 404 म्हणजे URL चुकली; 401 म्हणजे login आवश्यक; 403 म्हणजे प्रवेश नाही; 400 म्हणजे request चुकीची.\n\n500 ते 599 — server ची चूक. 500 म्हणजे सामान्य त्रुटी; 502/503 म्हणजे server तात्पुरता बंद. ही माहिती नेहमी उपयोगी पडते — response तपासताना आधी status_code बघा.",
        code: `codes = {200: "OK", 404: "not found", 500: "server error"}
for code in codes:
    print(code, codes[code])`,
        codeLanguage: "python",
        output: `200 OK
404 not found
500 server error`,
      },
      {
        title: "response मधील data — text, json, headers",
        content: "request केल्यावर मिळालेल्या response च्या आत तीन महत्त्वाचे भाग असतात — मजकूर (text), JSON data आणि headers. कोणता वापरायचा हे server काय पाठवतं त्यावर ठरतं.\n\nr.text — संपूर्ण body मजकूर (अनेकदा HTML). r.content — bytes मध्ये data (प्रतिमा, फाइल्स). r.json() — जर server JSON पाठवत असेल तर आपोआप decode होऊन Python dict मिळतं.\n\nr.headers — server ने पाठवलेल्या meta-माहितीची जोडी — Content-Type, Date, सर्व नोंद. कधी कधी token किंवा rate limit ची माहिती देखील headers मध्ये असते.\n\nr.json() वापरताना काळजी — जर data JSON नसेल तर ValueError येते. म्हणून XML किंवा HTML हाताळताना तो control करून वापरावा.\n\nकधी कधी encoded मजकूर चुकतो — r.encoding च्या आधारे text decode होतो. मराठी किंवा इतर भाषेच्या text मध्ये encoding ची काळजी महत्त्वाची ठरते.",
        code: `import requests
r = requests.get("https://httpbin.org/json")
data = r.json()
print(data["slideshow"]["title"])`,
        codeLanguage: "python",
        output: `Sample Slide Show`,
      },
      {
        title: "headers — आपल्या request ला ओळख द्या",
        content: "आपण server ला request करतो तेव्हा browser असल्यासारखं दिसणं अनेकदा आवश्यक असतं — काही servers केवळ सामान्य bot ला block करतात. यासाठी request मध्ये headers पाठवता येतात.\n\nUser-Agent हे header विशेष महत्त्वाचं — ते सांगते की कोणतं साधन request करतंय. कधी कधी साधारण requests ने आलेली मागणी नाकारली जाते — तेव्हा browser चे User-Agent देतो.\n\nAccess token सुद्धा headers मध्ये पाठवला जातो — Authorization: Bearer <token>. APIs साठी प्रमाणित पद्धत हीच आहे. तुमचा client कोण आहे ते ओळखण्यासाठी headers चा उपयोग.\n\nheaders हा dict म्हणून requests.get(url, headers={...}) च्या रूपात जातो. प्रत्येक API ची headers ची गरज त्या दस्तऐवजात स्पष्ट लिहिलेली असते.\n\nगोपनीयता लक्षात ठेवा — token चा अर्थ असा की ती माहिती गुप्त ठेवा; कोडमध्ये शेअर करू नका, source control मध्ये जाऊ नका हे महत्त्वाचं असते.",
        code: `import requests
headers = {"User-Agent": "Mozilla/5.0"}
r = requests.get("https://httpbin.org/headers",
                 headers=headers)
print(r.json())`,
        codeLanguage: "python",
        output: `{'headers': {'User-Agent': 'Mozilla/5.0', ...}}`,
      },
      {
        title: "timeout — request संपत नाही हे कसे टाळावे?",
        content: "कधी कधी server उत्तर देत नाही आणि request असंबद्धपणे प्रलंबित राहते — program गोठते. यासाठी requests मध्ये timeout द्यावा लागतो — requests.get(url, timeout=5) म्हणजे 5 सेकंदांत उत्तर न मिळाल्यास त्रुटी.\n\ntimeout चे दोन भाग असू शकतात — connect timeout आणि read timeout. timeout=(3, 10) म्हणजे कनेक्शनसाठी 3 सेकंद, उत्तर वाचण्यासाठी 10 सेकंद.\n\ntimeout न दिल्यास requests थांबेलच असे नाही पण नेटवर्कची अनिश्चितता तुमचा कार्यक्रम मंद करू शकते. त्यामुळे नेहमी timeout द्यायची सवय लावा.\n\ntimeout संपल्यास requests.exceptions.Timeout ही त्रुटी उद्भवते — ती try/except ने पकडून कार्यक्रमाला विनम्र पर्याय द्या.\n\nreal जगात network कधीही तुटू शकतो — म्हणूनच robust program तयार करणे म्हणजे timeout आणि त्रुटी हाताळणे या गोष्टी अपरिहार्य असतात.",
        code: `import requests
try:
    r = requests.get("https://httpbin.org/delay/5",
                     timeout=2)
except requests.exceptions.Timeout:
    print("वेळ संपली — server बोलत नाही")`,
        codeLanguage: "python",
        output: `वेळ संपली — server बोलत नाही`,
      },
      {
        title: "तापमान API — पहिला खरा project",
        content: "आता शिकलेलं वापरून एक खरा काम करूया — हवामानाचा data मागवूया. open-meteo सारखी मोफत, login नसलेली API URL मध्ये latitude, longitude दिल्यावर हवामान data देतात.\n\nrequests.get त्या URL ला जातो आणि params मधील data प्रमाणे browser सारखी request तयार होते. निकाल JSON मध्ये येतो ज्यात temperature, wind यासारखी माहिती असते.\n\nr.json() ने निकाल Python dict मध्ये मिळतो आणि आपण त्या dict मधून हवा तो भाग काढतो. हेच — server मिळालेल्या data मधून अर्थ काढणे — data science ची सुरुवात आहे.\n\nएक काळजी — प्रत्येक API चे स्वतःचे नियम असतात; दस्तऐवज वाचून parameters आणि format तपासा. free API वर किती request करता येते याची मर्यादा ही — rate limit — सुद्धा पहात रहा.\n\nहा सराव झाला तर तुम्ही network programming चा खरा पाया गाठला — पुढील web scraping धड्यात हेच ज्ञान आणखी वाढेल.",
        code: `import requests
params = {"latitude": 18.96, "longitude": 72.82,
          "current_weather": "true"}
r = requests.get("https://api.open-meteo.com/v1/forecast",
                 params=params)
data = r.json()
print(data["current_weather"]["temperature"])`,
        codeLanguage: "python",
        output: `28.4`,
      },
      {
        title: "टाळायच्या चुका — requests मधील धोके",
        content: "requests वापरताना काही सामान्य चुका होतात. पहिली — response चा status तपासण्याआधी r.json() लावणे — server ने त्रुटी पाठवली तर ValueError मिळतो. आधी status_code तपासा.\n\nदुसरी — timeout न देणे — गोठणाऱ्या program चे कारण हेच असते. प्रत्येक request ला timeout द्या हा नियम ठेवा.\n\nतिसरी — token किंवा keys कोडमध्ये साठवणे व शेअर करणे — गोपनीय डेटा बाहेर गेला तर धोका होतो. environment variables वापरा.\n\nचौथी — exceptions न हाताळणे — नेटवर्क विघ्न कधीही होऊ शकतात; try/except ने बचाव करा अन्यथा program मध्यभागी थांबतो.\n\nपाचवी — request लूपच्या आत न ठेवता वारंवार करणे — server वर ओझे आणि आपला request block होऊ शकतो. हे सर्व टाळून स्थिर कोड लिहा.",
        code: `import requests
r = requests.get("https://httpbin.org/get", timeout=5)
if r.status_code == 200:
    print(r.json())
else:
    print(f"त्रुटी: {r.status_code}")`,
        codeLanguage: "python",
        output: `{'args': {}, 'headers': {...}, ...}`,
      },
      {
        title: "हे लक्षात ठेवा — requests चा सारांश",
        content: "या धड्यात शिकलेलं:\n\n• requests हे इंटरनेटशी संवाद साधणारं library.\n• GET data मागवतो, POST data पाठवतो.\n• status_code 200-299 यश, 4xx client, 5xx server चूक.\n• r.text, r.json(), r.headers — response चे भाग.\n• headers द्वारे ओळख आणि token पाठवता येतो.\n• timeout ने request अडकण्यापासून वाचतो.\n• API चा data वापरून खरं project करता येतं.\n\nप्रत्येक मुद्दा प्रत्यक्ष request करून तपासा — आणि URL types प्रयोगांसाठी httpbin.org फार उपयुक्त आहे.",
      },
      {
        title: "session — एकाच ओळीशी अनेक requests",
        content: "एखाद्या वेबसाइटवर अनेक requests करताना आपण तोच connection आणि cookies बरोबर वापरल्यास काम जलद आणि व्यवस्थित होते. requests.Session हेच हे करतं — তুমি एक session उघडून त्यातून अनेक GET/POST requests पाठवू शकतो.\n\nlogin फॉर्म भरल्यानंतर server cookies देतो — त्या cookies शिवाय पुढील pages मिळत नाहीत. session आपोआप cookies जपून ठेवतो — म्हणून login नंतर प्रत्येक request सह session चा वापर आश्वस्त होतो.\n\nsession headers मध्ये ठठेर सामाईक माहिती ठेऊन देखील वापरता येते — session.heirs.update({...}) ने पहिल्या header सेट केले की त्या session च्या सर्व requests मध्ये ती headers आपोआप जातात.\n\nया session चा वापर करताना दीर्घ loops मध्ये जलदता येते कारण connection पुन्हा तयार न होता उघडा राहतो. एका page नंतर next page मिळवणे हाच वापर web scraping मध्ये आवडतो.\n\nशेवटी आठवण — session सोबत timeout आणि errors हाताळण्याची सवयेला विसरू नका. जर network तुटला तर session पुन्हा तयार करणे आवश्यक.",
        code: `import requests
s = requests.Session()
s.get("https://httpbin.org/cookies/set/user/आरोही")
r = s.get("https://httpbin.org/cookies")
print(r.json()["cookies"])`,
        codeLanguage: "python",
        output: `{'user': 'आरोही'}`,
      },
      {
        title: "cookies आणि authentication — login मागे",
        content: "बहुतेक वेबसाइट login आणि session च्या आधारे काम करतात — त्यात data मागवताना आपल्याला ओळख सिद्ध करावी लागते. cookies हेच लहान data आहेत जे server तुमच्या session ला ओळखण्यासाठी वाचते.\n\nrequests मध्ये cookies dict म्हणून पाठवता येतात — requests.get(url, cookies={...}). पण session मध्ये त्या आपोआप मिळतात — म्हणून session ची सोय आवडते.\n\nauth पाठवण्यासाठी requests मध्ये auth=argument आहे — requests.get(url, auth=(\"user\", \"pass\")) — basic authentication साठी. अधिक जटिल OAuth 2.0 सारखं असेल तर token headers वाटे पाठवला जातो.\n\nसुरक्षा महत्त्वाची — कोडमध्ये किंवा repository मध्ये passwords ठेवू नका. input किंवा environment variable मधून घ्या. हा नियम प्रत्येक real project मध्ये कठोर असतो.\n\nत्यामुळे authentication शिकण्याचा सर्वांत चांगला मार्ग — local sample API on httpbin.org सोबत सराव करणे, जिथे assumption सुरक्षित असते.",
        code: `import requests
r = requests.get(
    "https://httpbin.org/basic-auth/अ/अ",
    auth=("अ", "अ"))
print(r.status_code)`,
        codeLanguage: "python",
        output: `200`,
      },
      {
        title: "streaming — मोठा data तुकड्यांमध्ये",
        content: "जेव्हा खूप मोठी फाइल डाउनलोड करायची असते तेव्हा ती एकट्याने memory मध्ये न ठेवता तुकड्यांमध्ये घेता येते — याला streaming म्हणतात. requests मध्ये stream=True argument ने हे शक्य होते.\n\nstream=True दिल्यास response body ताबडतोब वाचली नाही — ती स्ट्रीम म्हणून राहते. मग response.iter_content(chunk_size=...) ने तुकडे वाचून फाईलमध्ये लिहिता येतात.\n\nहे library वापरल्याने मोठ्या फाइल्स — video, backups, datasets — memory न तोडता हाताळता येतात. हीच व्यवस्था production system मध्ये वापरली जाते.\n\nडाउनलोड करताना फाईललाच byts तुकड्यांत लिहिणे ही main सवय — अर्धवट network तोडल्यास अपूर्ण फाईल मिळते; वास्तविक अपयश संभाळणे हीच मोठी शैली.\n\nहे तंत्र शिकण्यासाठी सोपे sample URL वापरा आणि फाईलचा आकार लक्षात घ्या — आणि प्रत्येक वेळी content-length मिळत नाही हेही अंगिकारा.",
        code: `import requests
r = requests.get("https://httpbin.org/bytes/100",
                 stream=True)
for chunk in r.iter_content(chunk_size=50):
    print(len(chunk))`,
        codeLanguage: "python",
        output: `50
50`,
      },
      {
        title: "redirects — जाणून घ्या कसा फॉलो होतो",
        content: "जेव्हा server सांगतो की URL हलवली आहे तेव्हा redirect होते — 301, 302 सारखे status codes. requests आपोआप redirect फॉलो करतो — पण काही वेळा हाताने निर्णय घ्यावासा वाटतो.\n\nallow_redirects=False दिल्यास requests पहिल्या उत्तरानेच थांबते — आपल्याला redirect कुठे जातोय ते पहायचे असेल तर location header तपासावी. r.headers में location URL असते.\n\nredirect चाक may अंतहीन — A पासून B, B पासून C — असा loop होऊ शकतो. requests मध्ये सुरक्षित वरिष्ठ मर्यादा असते; त्या पलीकडे TooManyRedirects त्रुटी येते.\n\nform submiss होताना POST redirect चे नियम वेगळे — GET redirect वर data गमावता. अशा जागांवर allow_redirects चा निर्णय स्वतः ठरवा.\n\nredirect handling व्यावहारिक web कामात नेहमी येते — विशेषतः login नंतर मुख्य page दिसण्यासाठी — त्यामुळे हे चांगले समजून घ्या.",
        code: `import requests
r = requests.get("https://httpbin.org/redirect/1")
print(r.status_code)
print(len(r.history))`,
        codeLanguage: "python",
        output: `200
1`,
      },
      {
        title: "रोजचे MIainya — URL building आणि params",
        content: "API request करताना परिस्थितीनुसार URL बदलते — ती हाताने तयार करणे चूकीचे ठरते. requests.miat झालेल्या params argument ने ही समस्या संपते — तो dict स्वीकारून URL च्या query strings मध्ये बरोबर बसवतो.\n\nउदा. रोजचा weather report मागताना हवे city, units, language — हे सर्व params dict मधून दिल्यास URL स्वयंचलित होते. encoding च्या जटिलताही requests सांभाळते.\n\nहेच काम हाताने करताना ? व & चिन्हे, percent-encoding, विशेष अक्षरे — अशा अनेक गोष्टींची चूक होऊ शकते. requests मध्ये ते नाही.\n\nparams ने URL जुळणार degree — r.url आणि r.request.url तपासून बरोबर URL बनली का पहाता येतं. हीच verify ची सवय maintain ठेवा.\n\nसोपा नियम — कोणतीही dynamic URL हाताने नाही; नेहमी params dict वापरा. यामुळे कोड खूपच विश्वासार्ह बनतो.",
        code: `import requests
res = requests.get("https://httpbin.org/get",
                   params={"q": "python", "page": 2})
print(res.url)`,
        codeLanguage: "python",
        output: `https://httpbin.org/get?q=python&page=2`,
      },
      {
        title: "शेवटचे शब्द — नेटवर्क कोड लिहिताना",
        content: "नेटवर्कशी बोलणारा कोड लिहिताना नेहमी असेच ठरवा — कोणत्याही परिस्थितीत program कोसळू नये. timeout, try/except, status check — या तिन्हीची सवय लावल्यास खरोखर व्यावसायिक कोड मिळतो.\n\nआणि एकच मूल्य सर्वांत महत्त्वाचं — मौज करत शिका. httpbin.org सारख्या test servers वर सुरक्षित प्रयोग करून स्वतःचा आत्मविश्वास वाढवा.",
      },
      {
        title: "स्वतःला प्रश्न विचारा",
        content: "आता स्वतःला हे प्रश्न विचारा — GET चे काम काय? POST कधी वापरतो? थर्ड step मध्ये r.json() कधीही नाही चुकता? timeout न दिल्यास काय? response मधून data कसे काढतो? यांची उत्तरं सहज दिली तर requests चा आत्मविश्वास तयार झाला.\n\nप्रत्येक उत्तर टर्मिनलमधून प्रत्यक्ष request करून तपासा — शंका उरल्यासं section पुन्हा वाचा. म्हणजेच या धड्याचा समारोप requests च्या चांगल्या अभ्यासाने होतो.",
      },
      {
        title: "हे लक्षात ठेवा — requests चा संपूर्ण सारांश",
        content: "आता पूर्ण धड्याचा सारांश:\n\n• requests हे web संवादाचे प्रमुख Python library.\n• GET data घेते, POST data पाठवते.\n• status_code ने यश-अपयश कळते.\n• headers व cookies ओळख आणि session साठी.\n• params, timeout, stream, redirects — ही main arguments.\n• session ने अनेक requests जलद होतात.\n• JSON, text, content — response चे स्वरूप ठरवा.\n\nया सर्वांचा सराव httpbin.org या सुरक्षित test server वर करा — प्रत्येक topic स्वतः request करून पहा. शंका आली की documentation अधिकृत वाचा.",
        code: `import requests, json
r = requests.get("https://httpbin.org/json", timeout=5)
if r.status_code == 200:
    print(json.dumps(r.json()["slideshow"]))
`,
        codeLanguage: "python",
        output: `{"title": "Sample Slide Show", "author": "Yours Truly"}`,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांचे आहेत — वाचन आणि संदर्भासाठी प्रमाण म्हणून:\n\n• requests चा अधिकृत दस्तऐवज: https://requests.readthedocs.io/\n• Quickstart गाईड — पहिला step: https://requests.readthedocs.io/en/latest/user/quickstart/\n• Advanced usage — जटिल वापर: https://requests.readthedocs.io/en/latest/user/advanced/\n• API Reference — सर्व फंक्शन्स: https://requests.readthedocs.io/en/latest/api/\n• HTTP status codes ची यादी: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status\n• Python urllib.request — बिल्ट-इन पर्याय: https://docs.python.org/3/library/urllib.request.html\n• JSON पुस्तकालय — जॉन decoder: https://docs.python.org/3/library/json.html\n• argparse — कमांड-लाइन argument: https://docs.python.org/3/library/argparse.html\n• urllib.error — त्रुटी हाताळणे: https://docs.python.org/3/library/urllib.error.html\n• What's New — Python 3.11 network संबंधी: https://docs.python.org/3/whatsnew/3.11.html\n\nप्रत्येक दुवा स्वतः उघडा — अचूक व्याख्या अधिकृत स्रोतावरून समजून घ्या.",
      },
    ],
    practiceQuestions: [
      "status_code 200 म्हणजे?",
      "timeout कशासाठी?",
      "API म्हणजे?",
    ],
    quiz: [
      { question: "GET साठी request क्या?", options: ["requests.get", "requests.post", "print", "import"], correct: 0 },
      { question: "status 200 म्हणजे?", options: ["यश", "चूक", "404", "500"], correct: 0 },
      { question: "timeout कशासाठी?", options: ["थांबण्यासाठी", "वेग", "skip", "load"], correct: 0 },
    ],
    challenge: {
      prompt: "network error हाताळा.",
      starterCode: `try:
    raise ConnectionError("x")
except ConnectionError:
    print("मिळाले नाही")`,
      expectedOutput: "मिळाले नाही",
    },
    interviewQuestions: [
      "requests म्हणजे काय?",
      "timeout का?",
    ],
    related: ["python-json", "python-web-scraping", "python-exceptions"],
    prev: "python-numpy",
    next: "python-web-scraping",
  },
  {
    slug: "python-web-scraping",
    categoryId: "python",
    title: "Web Scraping",
    marathiTitle: "Web Scraping - पानापासून माहिती",
    level: "advanced",
    minutes: 16,
    summary: "HTML पानातून माहिती काढणे; stdlib parser + BeautifulSoup संकल्पना.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Web Scraping - पानापासून माहिती चे फायदे आणि महत्त्व",
        content: "\"Web Scraping - पानापासून माहिती\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Web Scraping म्हणजे काय?",
        content: "Web scraping म्हणजे वेब पानातून संगणकीय माहिती काढणे. HTML पान हे tags ची रचना — त्यातून विशिष्ट भाग निवडता येतो. BeautifulSoup ही लोकप्रिय library (pip install beautifulsoup4). येथे stdlib parser ने दाखवतो.",
        code: `print("HTML मधून data काढतो")`,
        codeLanguage: "python",
        output: `HTML मधून data काढतो`,
      },
      {
        title: "HTML रचना",
        content: "HTML मध्ये <h1>, <p>, <a>, <li> असे tags. विशिष्ट tag किंवा class निवडून माहिती. सोपे example — एक छोटा HTML भाग stdlib parser ने वाचणे.",
        code: `from html.parser import HTMLParser
class T(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
T().feed("<h1>शीर्षक</h1><p>मजकूर</p>")`,
        codeLanguage: "python",
        output: `शीर्षक
मजकूर`,
      },
      {
        title: "Selectors",
        content: "BeautifulSoup मध्ये soup.find(tag), soup.find_all(tag). CSS class किंवा id ने निवड. .get_text() ने नैसर्गिक text मिळवतात.",
        code: `print("find_all ने सर्व tags मिळतात")`,
        codeLanguage: "python",
        output: `find_all ने सर्व tags मिळतात`,
      },
      {
        title: "Text व Attribute",
        content: "एखाद्या घटकाचा text किंवा attribute (जसे href, src) काढता येतो. .text — आतील मजकूर. [\"href\"] — दुवा. हे newspaper ते products पर्यंत सर्वत्र.",
        code: `print("attribute जसे href काढतो")`,
        codeLanguage: "python",
        output: `attribute जसे href काढतो`,
      },
      {
        title: "Rules व चुका",
        content: "• Website च्या rules (robots.txt) पाळा.\n• खूप विनंत्या करू नका (fair use).\n• कॉपीराईटची काळजी.\n• HTML बदलला तर scraper तुटतो.",
        code: `print("rules आणि fair use पाळा")`,
        codeLanguage: "python",
        output: `rules आणि fair use पाळा`,
      },
      {
        title: "Interactive: parser सराव",
        content: "stdlib parser ने HTML शीर्षके काढून पहा. handle_data callback दर CSS tag चा text छापतो.",
        code: `print("stdlib parser ने शीर्षके")`,
        codeLanguage: "python",
        output: `stdlib parser ने शीर्षके`,
      },
      {
        title: "Mini Project: HTML शीर्षके",
        content: "HTML यादीतून सर्व items काढा — <li> tags मधील text handle_data ने print.",
        code: `from html.parser import HTMLParser
class H(HTMLParser):
    def handle_data(self, d):
        if d.strip():
            print(d.strip())
H().feed("<ul><li>अ</li><li>ब</li></ul>")`,
        codeLanguage: "python",
        output: `अ
ब`,
      },
    {
        title: "web scraping म्हणजे काय — वेबवरून data वाचन",
        content: "जेव्हा आपल्याला वेबसाइटवर दिसणारी माहिती संगणकीय program मध्ये हवी असते तेव्हा आपण ती handaly नं finger हलवत clear copy नाही करत — आपण एक program लिहितो जो ती माहिती आपोआप वाचून घेतो. या प्रक्रियेला web scraping म्हणतात.\n\nweb scraping म्हणजे वेब पृष्ठावरून data काढून त्याचे विश्लेषण, साठवणूक किंवा इतर कामात वापर. उदा. news वेबसाइटवरून headlines, दुकानदारांकडून किमती, परीक्षा परिणाम — हे सर्व scraping द्वारे मिळवतात.\n\nएक महत्त्वाचा फरक — API आणि scraping. API ही सोयीस्कर अधिकृत प्रवेश पद्धत असते जी server उघड्या करून देते. scraping हा पृष्ठाच्या HTML मधून data काढण्याचा पर्याय — जेव्हा API नसते किंवा अडचण असते तेव्हा वापरतात.\n\nscraping हा तांत्रिक नाही तर विधिमान्य प्रश्नसुद्धा असतो — किती अभ्यासाला परवानगी असते हे वेबसाइटच्या नियमांवर ठरतं. त्यामुळे scraping करताना नेहमी terms of service आणि robots.txt ची आदर करा.\n\nआजच्या या धड्यात आपण HTML ची मूलतत्त्वे, requests, BeautifulSoup या library चा वापर आणि data काढण्याच्या पद्धती शिकणार आहोत. हे सर्व एकत्र आलं की scraping सहज आणि शिस्तबद्ध होतं.",
        code: `import requests
html = requests.get("https://example.com").text
print(html[:120])`,
        codeLanguage: "python",
        output: `<!doctype html>
<html>
<head>
    <title>Example Domain</title>
...`,
      },
      {
        title: "HTML — वेब पृष्ठाचा कंकाल",
        content: "प्रत्येक वेब पृष्ठ HTML नावाच्या भाषेत बनलेलं असतं — तीच पृष्ठाची रचना तयार करते. HTML मध्ये tags असतात — ते <टॅग> या चिन्हात लिहिले जातात. उदा. <h1> मोठा शीर्षक, <p> परिच्छेद, <a> दुवा.\n\nप्रत्येक tag ची एक जोडी असते — सुरुवातीचा <p> आणि ओळखीचा </p> — त्यांच्या दरम्यान मजकूर असतो. हीच रचना browser मध्ये सुबक मांडली जाते — आपल्याला दिसणारं प्रत्येक स्थान म्हणजे हीच टॅग्सची व्यवस्था असते.\n\ntags मध्ये attributes नावाची अतिरिक्त माहिती देखील असते. सर्वात महत्त्वाची — class आणि id — कारण त्यांच्या आधारे आपण मजकुराचा हवा तो भाग शोधतो. उदा. <p class=\"price\"> मध्ये किंमत element दिसते.\n\nscraping करताना आपण हेच करतो — HTML मध्ये आपल्या हव्या tag/class शोधतो आणि त्याचा मजकूर काढतो. म्हणून HTML ची मूलतत्त्वे समजणे हीच scraping ची तयारी आहे.\n\nपृष्ठ पाहण्यासाठी browser मध्ये उजवा-क्लिक -> Inspect (किंवा DevTools) वापरा — तिथे त्या पृष्ठाचा संपूर्ण HTML दिसतो. त्या पृष्ठाचा HTML समजून घेणं हीच scraping project ची सुरुवात असते.",
        code: `<h1>मुख्य शीर्षक</h1>
<p class="price">रु. 99</p>
<a href="https://example.com">अधिक वाचा</a>`,
        codeLanguage: "html",
        output: ``,
      },
      {
        title: "BeautifulSoup — HTML मधून data काढणारं library",
        content: "requests ने HTML चा मजकूर मिळतो पण त्यातून आपल्या हवा भाग शोधण्यासाठी एक सोयीचं साधन हवं — तेच BeautifulSoup. हे library HTML मधील tags शोधणे, मजकूर काढणे आणि डेटा नियोजित करणे अत्यंत सोपे करतं.\n\ninstall करण्यासाठी pip install beautifulsoup4 लिहा. वापरताना from bs4 import BeautifulSoup आणि नंतर BeautifulSoup(html, 'html.parser') ने पार्सर तयार करा. html हा requests ने मिळालेला मजकूर असतो.\n\nsoup.find('h1') — पहिला h1 tag शोधतो. soup.find_all('a') — सर्व <a> tags ची यादी. प्रत्येक tag परत मिळाल्यावर .text ने मजकूर आणि .get('href') ने दुवा मिळतो.\n\ntag शोधताना class वापरायचं असेल तर soup.find('p', class_='price') असं लिहितात. id साठी soup.find(id='main'). हेच सर्वात महत्त्वाचं research आहे — हवा मुद्दा निवडायला.\n\nBeautifulSoup हळवा आहे — जर घटक नाही सापडला तर None मिळते. त्याची तपासणी करण्याची सवय ठेवा — अन्यथा त्याचा .text वर access करता येत नाही आणि AttributeError येऊ शकते.",
        code: `from bs4 import BeautifulSoup
html = "<h1>नमस्कार</h1><p class='price'>रु. 99</p>"
soup = BeautifulSoup(html, "html.parser")
print(soup.find("h1").text)
print(soup.find("p", class_="price").text)`,
        codeLanguage: "python",
        output: `नमस्कार
रु. 99`,
      },
      {
        title: "CSS selectors — लक्ष्य finger",
        content: "BeautifulSoup मध्ये अधिक शक्तिशाली शोध पद्धत म्हणजे CSS selectors — soup.select() पद्धत. ती तुम्हाला CSS नियमांप्रमाणे tags निवडायला देते — जे browser ला समजते त्याचेच रूप.\n\nसंविधान सोपी — 'h1' टॅग, '.price' class, '#main' id, 'div p' आतला p, 'a[href]' दुवा असलेला tag. selector लिहिला की त्या नियमाला जुळणाऱ्या सर्व element ची यादी select ने देते.\n\nfind_all तर select — दोन्ही modes — पण select हे नंतर आलेली आधुनिक सोय आहे. वेब pages वर वाचकांनी दोन्ही पद्धती वापरताना अनुभव घ्या — सवय तुम्हाला निवडायला लावेल.\n\nselect चा निकाल नेहमी list असतो — element न सापडल्यास रिकामी list. म्हणून for loop मध्ये तिची लूप करण्यास सुरक्षित असते.\n\nसर्वात महत्त्वाचं mnemonic — select ने तुम्ही नियंत्रण ठेवता. HTML ची रचना कशीही असो, नियम बरोबर लिहिला तर data नक्की मिळतं.",
        code: `from bs4 import BeautifulSoup
html = '<div class="card"><h2>पुस्तक</h2><p class="price">रु. 50</p></div>'
soup = BeautifulSoup(html, "html.parser")
items = soup.select(".card .price")
print(items[0].text)`,
        codeLanguage: "python",
        output: `रु. 50`,
      },
      {
        title: "एका पृष्ठावरून data काढण्याचा संपूर्ण प्रवास",
        content: "आता requests, BeautifulSoup आणि select — तिन्ही मिळून एका पृष्ठावरून data काढण्याचा संपूर्ण प्रवास करूया. तीन पायरी: (1) requests ने HTML मिळवा, (2) BeautifulSoup ने रचना समजून घ्या, (3) select/find ने हवा data काढा.\n\nउदा. एका नकली bookstore चा पुस्तकांच्या किमती दुव्यासहित list हवा आहे असे समजू. initial उदाहरण म्हणून HTML थेट कोडमधे देऊ — प्रत्यक्ष पृष्ठासाठी तोच request जोडून येतो.\n\ndata मिळाल्यावर त्याला dict किंवा list मध्ये गोळा करा — मग print, file मध्ये लिहा किंवा numpy वापरून विश्लेषण करा. scraping चा उद्देश म्हणजे data usable स्वरूपात मिळवणे.\n\nएक वास्तववादी पृष्ठ निवडताना — ते chart चा expected structure असतं; आधी browser मधील inspect वरून HTML रचना तपासा — मगच selector लिहा.\n\nया प्रवासात motor चा सर्वात सामान्य अडथळा — HTML मध्ये space किंवा अनपेक्षित nested tags — म्हणून output नेहमी print करून तपासा. टाकण Hello verify हीच professional सवय.",
        code: `from bs4 import BeautifulSoup
html = """
<ul>
  <li class='book'>पुस्तक 1 <span class='p'>रु. 100</span></li>
  <li class='book'>पुस्तक 2 <span class='p'>रु. 200</span></li>
</ul>"""
soup = BeautifulSoup(html, "html.parser")
for b in soup.select(".book"):
    name = b.contents[0].strip()
    price = b.select_one(".p").text
    print(name, price)`,
        codeLanguage: "python",
        output: `पुस्तक 1 रु. 100
पुस्तक 2 रु. 200`,
      },
      {
        title: "robots.txt आणि कायदेशीरते — जबाबदार scraping",
        content: "scraping करताना सर्वात महत्त्वाची गोष्ट म्हणजे वेबसाइटच्या नियमांची मान्यता. प्रत्येक वेबसाइटमध्ये robots.txt नावाची फाईल असते जी सांगते कोणते भाग scraping करण्यास परवानगी आहे आणि कोणते नाही.\n\nrobots.txt वाचण्यासाठी वेबसाइटच्या मुख्य URL नंतर /robots.txt जोडून पहा. त्यात Disallow — म्हणजे ना वाचा — अशा पथाची यादी असते. आदर करा.\n\nकाही वेबसाइट स्पष्टपणे scraping निरोध करतात — terms of service मध्ये लिहिलेलं असतं. अशा ठिकाणी data न घेणं हेच योग्य. जर data अधिकृतरीत्या मिळवायचा असेल तर API उपलब्ध आहे का तपासा.\n\nscraping कसा minimum impact ठेवतो — request दर वेळी थोडा वेळ थांबून करा (time.sleep) आणि एकाच वेळी अनेक request टाकू नका. आपल्या robot चे User-Agent ओळखता येईल असं ठेवा.\n\nआनंदाने शिकवण्यासाठी Books to scrape (books.toscrape.com) सारखी अधिकृतरित्या scraping practice site आहे — तिथे सुरक्षित प्रयोग करा. हीच जबाबदार वृत्ती असली की scraping नेहमी न्याय्य ठरते.",
        code: `import time, requests
for page in range(1, 4):
    url = f"https://books.toscrape.com/catalogue/page-{page}.html"
    r = requests.get(url)
    print(page, r.status_code)
    time.sleep(1)`,
        codeLanguage: "python",
        output: `1 200
2 200
3 200`,
      },
      {
        title: "एकच data अनेक पृष्ठांवर — pagination ची युक्ती",
        content: "बर्याच वेबसाइट data अनेक पृष्ठांवर विखुरुन ठेवतात — पहिल्या पृष्ठावर पहिला भाग, दुसऱ्या पृष्ठावर पुढचा. त्यांना सगळे एकत्र गोळा करण्यासाठी आपल्या program मध्ये pagination हाताळावी लागते.\n\nसर्वात सोपी पद्धत — URL चे पॅटर्न शोधा. बर्याचदा page=1, page=2 सारखा parameter असतो. तो बदलून requests ने प्रत्येक पृष्ठ मिळवा आणि data गोळा करा.\n\nआणखी सुधारणा — प्रत्येक पृष्ठावरचे पुढचा दुवा (Next) दिसेल — त्याला follow करून अखेरपर्यंत जा. संख्या किती होईल ठाऊक नसल्यास ही पद्धत आत्मनिर्णय घेते.\n\nगोळा केलेला data नेहमी list मध्ये जोडा — मग शेवटी एकत्र करा. प्रत्येक पृष्ठावर दरम्यान time.sleep ने वाट पाहत refresh नको — आदर आणि वेग यांचा तोल साधा.\n\nहे सगळं एकत्र करताना code क्रियान्वित request ची error handle करा — network तुटला तर program रद्द न होता पुढे जावो — या pattern मधेच scraping ची मजबूत रचना लपलेली आहे.",
        code: `import requests, time
for page in range(1, 4):
    url = f"https://books.toscrape.com/catalogue/page-{page}.html"
    r = requests.get(url)
    print(f"पृष्ठ {page}: {r.status_code}")
    time.sleep(1)`,
        codeLanguage: "python",
        output: `पृष्ठ 1: 200
पृष्ठ 2: 200
पृष्ठ 3: 200`,
      },
      {
        title: "JSON API असल्यास — scraping टाळा",
        content: "आधी तपासा — वेबसाइट यादीला data JSON API देतं का? अनेक वेबसाइट आजकाल अधिकृत API देतात — login वाने केवळ URL मध्ये request करून थेट JSON data मिळतं. हीच अधिक स्थिर, जलद आणि कायदेशीररीत्या सुरक्षित पद्धत असते.\n\nजर website JSON data बाहेर पाठवते तर ती format मध्ये आधीच व्यवस्थित असतो — dictionary मध्ये नेहमी कळत नाही मध्ये title, price, rating — म्हणून parse करणं सोपं. HTML मधून काढण्याची गरजच राहत नाही.\n\nscraping विपरीत — HTML structure बदलतो तेव्हा scraping कोड मोडतो — पण API स्थिर असतो. म्हणून algorithm प्रमाण — आधी API शोधा, मगच scraping करा.\n\nकधी कधी API URL पेजच्या network मधून — DevTools च्या Network टॅब मधे — आढळतं. ज्या request ने पेज data भरतं तिची URL व format दिसतं — तिथून JSON data थेट मिळवता येतो.\n\nहीच प्रथा संपूर्ण data world मध्ये — API प्रथम, scraping पर्याय. या दोन्ही पद्धती समजल्या की वेब data चा संपूर्ण स्वभाव नियंत्रणात येतो.",
        code: `import requests
r = requests.get("https://books.toscrape.com/", timeout=5)
if r.status_code == 200:
    print(len(r.text), "bytes मिळाले")`,
        codeLanguage: "python",
        output: `26111 bytes मिळाले`,
      },
      {
        title: "सामान्य चुका — scraping मध्ये होणाऱ्या अडचणी",
        content: "scraping च्या सुरुवातीला अनेक अडचणी येतात — पहिली find नंतर .text न करता whole tag print करणे. दुसरी — element न सापडल्याने None वर access आणि AttributeError. त्यासाठी तपासणी करा.\n\nतिसरी — encoding ची चूक — मराठी मजकूर खराब दिसतो. requests च्या .encoding बदलून UTF-8 set करा किंवा response.content द्वारे bytes वापरा. चौथी — requests न करता scraping — server block करेल.\n\nपाचवी — लूपमध्ये URL पॅटर्न चुकणे — page-{n} हा format लिहिताना सजग रहा; वारंवार तपासा की URL बरोबर मिळतोय. सहावी — rate limit — अत्यंत वेगवानपणे हिट केले तर IP ब्लॉक होतो.\n\nसातवी — data मधली निर्मळता — titles मध्ये रिकाम्या जागा, अतिरिक्त space हे मांडणीतिल दावे — strip() वापरा. या सर्वांची जाण असल्यास प्रयोग सुखकर होतो.\n\nप्रत्येक चूक कळल्यावर debug चा दिवस वाचतो — म्हणून जागरूक राहा. हळूहळू, तपासून, आदराला घेऊन scraping करा.",
        code: `# encoding ची काळजी
r.encoding = "utf-8"
text = r.text`,
        codeLanguage: "python",
        output: ``,
      },
      {
        title: "हे लक्षात ठेवा — scraping सारांश",
        content: "या धड्यात शिकलेलं:\n\n• scraping म्हणजे वेब पृष्ठावरून data काढणं.\n• HTML tags आणि class/id समजणं महत्त्वाचं.\n• requests ने HTML मिळवतो, BeautifulSoup ने data काढतो.\n• find, find_all, select — शोध पद्धती.\n• pagination हाताळण्यासाठी URL पॅटर्न किंवा Next दुवा.\n• robots.txt आणि नियमांचा आदर — जबाबदार scraping.\n• API उपलब्ध असल्यास scraping ऐवजी API वापरा.\n\nसरावासाठी books.toscrape.com सारखी सुरक्षित site वापरा — आणि प्रत्येक पृष्ठावर वाट पहा. हीच शिस्त तुम्हाला व्यावसायिक बनवते.",
      },
      {
        title: "same tag पण different type — निवडक शोध",
        content: "कधी कधी वेब पृष्ठावर tag तोच असतो — उदा. अनेक <div> — पण मजकूर वेगवेगळा. अशा वेळी tag च्या आतल्या structure आणि attributes च्या आधारे निवड करावी लागते. class, id, किंवा parent-child नाते यांचा आधार घेतला जातो.\n\nBeautifulSoup मध्ये tag च्या पालक (parent) आणि मुल (child) भाग Trick वापरता येतो — soup.find('div', class_='card').find('h2') असे एक tag आतल्या दुसऱ्या tag ला वेगळ्याने शोधतो. ही narrowing ची पद्धत अगदी नियंत्रित होते.\n\nselect मध्ये child combinator वापरून — '.card > h2' — थेट मुल tag निवडता येतो; 'body .price' सारखा descendant selector कुठेही खोलवरचा tag शोधतो. हे वाचकाने आत्मसात करावे.\n\nशोध तरलता वाढल्यावर HTML चा पूर्ण structure न समजता data निवडता येतो — पण धोका असा की रचना बदलल्यास selector मोडतो. म्हणूनच exact class पेक्षा structure click spherical निवडणं बरं.\n\nसरावासाठी एक खरं पृष्ठ DevTools ने उघडा आणि त्यात self-selector create करून output तपासा — हा अनुभव अतुलनीय आहे.",
      },
      {
        title: "data CSV मध्ये — संग्रह करण्याची पद्धत",
        content: "scraping केलेला data उपयोगी तेव्हा होतो जेव्हा त्याचा संग्रह व्यवस्थित होतो. सर्वात सामान्य सोपी पद्धत म्हणजे CSV फाईल — ती Excel, spreadsheet आणि इतर tool मध्ये थेट उघडता येते. कालमान — comma separated values.\n\nPython चा प्रमाणित csv module यासाठी आदर्श आहे. csv.writer ने rows लिहिल्यावर प्रत्येक row ही list असते आणि प्रत्येक value मध्ये comma आला तरी csv module आपोआप quote करतो — ही बचाव व्यवस्था आहे.\n\nअपेक्षित form अशी — पहिल्या ओळीत column नावे (header), मग प्रत्येक scraping मधला item एक row. यामुळे data शुद्ध आणि सोयीने वाचता येतो — पुढे numpy/pandas सोबत विश्लेषण सोपे होतं.\n\nfile उघडताना newline='' देणे csv module साठी महत्त्वाचं — न दिल्यास Windows वर अतिरिक्त रिकाम्या lines येतात. encoding='utf-8' देखील मराठी मजकुरासाठी आवश्यक असते.\n\nहे सगळं एकत्र आलं की scraped data पासून small data pipeline तयार होते — पृष्ठ घ्या, data काढा, फाईलमध्ये लिहा. ही रचना रोजच्या data कामाचा पाया आहे.",
        code: `import csv
with open("books.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["title", "price"])
    w.writerow(["पुस्तक 1", "रु. 100"])
print("साठी केलं")`,
        codeLanguage: "python",
        output: `साठी केलं`,
      },
      {
        title: "JSON मध्ये data साठवणं — नेस्टेड data साठी",
        content: "scraping ने मिळालेला data खूप वेळा nested असतो — एक item च्या आत sub-list, sub-dict. अशी रचना CSV मध्ये फिट करणे कठीण असते; JSON हे नेमकं त्यासाठी बनवलेलं आहे — Python dict मध्ये save होतं.\n\njson module ची dump पद्धत — json.dump(data, file) ने dict थेट फाईलमध्ये लिहिते. परत वाचताना json.load(file) मध्ये तीच रचना देतं — संपूर्ण structure जशीच्या तशी.\n\nJSON ची खासियत — हे text स्वरूपाचं असल्याने कोणताही program वाचू शकतो — browser, JavaScript, Python, Excel सोबतची tool. म्हणूनच API जगात JSON प्रामुख्याने वापरलं जातं.\n\nसुबकता साठी indent=2 दिल्यास फाईल माणसाला वाचता येण्यासारखी होते. ensure_ascii=False दिल्यास मराठी अक्षरे खऱ्या रूपात राहतात आणि \\u सारखे code नाही बनतात.\n\nCSV जेव्हा tables हाताळतो तेव्हा JSON अधिकाऱ्यांसाठी बनलेला असतो — त्यामुळे दोन्ही पद्धती जाणून घेणं good practice आहे.",
        code: `import json
data = {"pustake": [{"title": "पुस्तक 1", "price": 100}]}
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)`,
        codeLanguage: "python",
        output: ``,
      },
      {
        title: "आत्मपरीक्षा — scraping चा आत्मविश्वास",
        content: "धडा संपवण्यापूर्वी स्वतःला हे विचारा: HTML मध्ये class कसा लिहितात? BeautifulSoup मध्ये первый h1 कसा मिळतो? सर्व <a> tags कसे मिळतात? class-based पहिला element कसा निवडतो?\n\nपरीसृष्टीमध्ये scraping कोणती जबाबदारी असते? robots.txt ची आदर का करावी? JSON API उपलब्ध असल्यास scraping का टाळावं?\n\nउत्तरं मिळतील आणि दिसतील तर तुमची पकड चांगली — नसल्यास संबंधित section पुन्हा वाचा. सर्वांत छान ते प्रत्यक्ष कोडमध्ये try करून पडताळणं.\n\nया सवयी तुम्हाला scraping मध्ये नाही — समग्र program जगातही पुढे नेतील. स्वतःवर विश्वास ठेवा आणि सराव करा.",
      },
      {
        title: "शेवटची आठवण — आदर आणि शिस्त",
        content: "scraping करताना नेहमी लक्षात ठेवा की वेबसाइटची मालकी कोणाचीतरी आहे. data विनंतीची शिस्त — हळू request, वाट पाहणे, ठराविक मर्यादा — यांनी सर्वांचा फायदा होतो. आत्मविश्वासाने, पण आदराने scraping करा.\n\nआजचा शेवटचा उपदेश — data मिळवणं हे सोपं नाही तर हे जबाबदारीचं क्षेत्र आहे. प्रत्येक प्रयोग योग्य पद्धतीने करा आणि इतरांना मदत करा, तसेच आपले data कोणी कायर करू नये याचीही जाण ठेवा. हेच या धड्याचं सार.",
        code: `# नेहमी robots.txt तपासा
# https://example.com/robots.txt`,
        codeLanguage: "python",
        output: ``,
      },
      {
        title: "हे लक्षात ठेवा — scraping सारांश",
        content: "या धड्यात शिकलेलं:\n\n• scraping म्हणजे वेब पृष्ठावरून data काढणं.\n• HTML tags आणि class/id समजणं महत्त्वाचं.\n• requests ने HTML मिळवतो, BeautifulSoup ने data काढतो.\n• find, find_all, select — शोध पद्धती.\n• pagination हाताळण्यासाठी URL पॅटर्न किंवा Next दुवा.\n• robots.txt आणि नियमांचा आदर — जबाबदार scraping.\n• API उपलब्ध असल्यास scraping ऐवजी API वापरा.\n\nसरावासाठी books.toscrape.com सारखी सुरक्षित site वापरा — आणि प्रत्येक पृष्ठावर वाट पहा. हीच शिस्त तुम्हाला व्यावसायिक बनवते.",
        code: `# सोपी रचना: HTML -> find ने data
soup.find_all("h2")`,
        codeLanguage: "python",
        output: ``,
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official)",
        content: "खालील दुवे Python अधिकृत दस्तऐवजांचे आहेत — वाचन आणि संदर्भासाठी प्रमाण म्हणून:\n\n• Beautiful Soup चा दस्तऐवज: https://www.crummy.com/software/BeautifulSoup/bs4/doc/\n• requests चा quickstart: https://requests.readthedocs.io/en/latest/user/quickstart/\n• HTML parser मधील html.parser चा दस्तऐवज: https://docs.python.org/3/library/html.parser.html\n• lxml — वेगवान parser: https://lxml.de/\n• urllib.parse — दुवे हाताळणे: https://docs.python.org/3/library/urllib.parse.html\n• re — regular expressions: https://docs.python.org/3/library/re.html\n• time module — वेळ नियंत्रण: https://docs.python.org/3/library/time.html\n• csv module — data फाईलमध्ये: https://docs.python.org/3/library/csv.html\n• json module — data संग्रह: https://docs.python.org/3/library/json.html\n• robots.txt बद्दल शिका: https://en.wikipedia.org/wiki/Robots_exclusion_standard\n\nप्रत्येक दुवा स्वतः उघडा — अचूक व्याख्या अधिकृत स्रोतावरून समजून घ्या.",
      },
    ],
    practiceQuestions: [
      "scraping म्हणजे?",
      "find_all काय करतो?",
      "substantial rules?",
    ],
    quiz: [
      { question: "scraping म्हणजे?", options: ["HTML पासून data", "install", "delete", "compile"], correct: 0 },
      { question: "soup.find_all काय?", options: ["सर्व tags", "एक tag", "गणित", "logs"], correct: 0 },
      { question: "rules काय पाळतात?", options: ["robots.txt", "compile", "speed", "none"], correct: 0 },
    ],
    challenge: {
      prompt: "HTML text काढा.",
      starterCode: `from html.parser import HTMLParser
class P(HTMLParser):
    def handle_data(self, d):
        if d.strip(): print(d.strip())
P().feed("<p>नमस्कार</p>")`,
      expectedOutput: "नमस्कार",
    },
    interviewQuestions: [
      "scraping म्हणजे?",
      "rules का?",
    ],
    related: ["python-requests", "python-json", "python-strings"],
    prev: "python-requests",
    next: "python-threading",
  },
  {
    slug: "python-threading",
    categoryId: "python",
    title: "Threading",
    marathiTitle: "Threading - समांतर काम",
    level: "advanced",
    minutes: 16,
    summary: "threads ने एकाच वेळी काम; lock, join, deterministic output.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Threading - समांतर काम चे फायदे आणि महत्त्व",
        content: "✓ .join() ने output क्रमीक राहतो — हे deterministic साठी महत्त्वाचे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Threading म्हणजे काय?",
        content: "Threads म्हणजे एकाच program मधील समांतर कामाची ओझी. हे वेगवेगळ्या कामांना एकत्र पुढे नेते. threading हा stdlib module आहे — उदा. एक thread file वाचतो, दुसरा print करतो.",
        code: `import threading
print("thread तयार करायला threading.Thread")`,
        codeLanguage: "python",
        output: `thread तयार करायला threading.Thread`,
      },
      {
        title: "Thread तयार आणि चालवा",
        content: "t = threading.Thread(target=fn) — नवीन thread. t.start() — सुरू करणे. t.join() — पूर्ण होण्याची वाट.\n\n.join() ने output क्रमीक राहतो — हे deterministic साठी महत्त्वाचे.",
        code: `import threading, time
def work(name):
    print("काम", name)
t1 = threading.Thread(target=work, args=("अ",))
t1.start()
t1.join()`,
        codeLanguage: "python",
        output: `काम अ`,
      },
      {
        title: "Lock: सुरक्षित क्षेत्र",
        content: "अनेक threads एकाच data वर काम करत असतील तर Lock हवा. lock.acquire() ते lock.release() — एका वेळी एकच thread. with lock: वापरल्यास आपोआप. यामुळे data corruption टळते.",
        code: `import threading
lock = threading.Lock()
with lock:
    print("सुरक्षित क्षेत्र")`,
        codeLanguage: "python",
        output: `सुरक्षित क्षेत्र`,
      },
      {
        title: "Deterministic Order",
        content: "थ्रेड्सचा output क्रम इच्छेनुसार बदलू शकतो. नियंत्रित output साठी .join() प्रत्येकाला लागून. किंवा results एकत्र करून नंतर क्रमवारी.",
        code: `import threading
def f(x):
    return x + 1
res = []
res.append(f(1))
res.append(f(2))
print(res)`,
        codeLanguage: "python",
        output: `[2, 3]`,
      },
      {
        title: "चुका",
        content: "• join न सोडल्यास अनपेक्षित क्रम.\n• lock नसल्यास data race.\n• अनेक threads CPU कामासाठी वेग नाही (GIL) — I/O साठी वेग.",
        code: `print("I/O साठी threads वेग देतात")`,
        codeLanguage: "python",
        output: `I/O साठी threads वेग देतात`,
      },
      {
        title: "Interactive: list comprehension",
        content: "list comprehension ने एकत्र computation. thread नसल्यासही ही पद्धत काम करते.",
        code: `import threading
def job(i):
    return i * 2
print([job(i) for i in range(3)])`,
        codeLanguage: "python",
        output: `[0, 2, 4]`,
      },
      {
        title: "Mini Project: लॉकसह क्रमिक निकाल",
        content: "lock वापरून अनेक threads एकत्र मूल्ये जोडतात. with lock: मध्ये append केल्याने data safe.",
        code: `import threading
lock = threading.Lock()
def add(li, v):
    with lock:
        li.append(v)
res = []
add(res, 5)
add(res, 9)
print(res)`,
        codeLanguage: "python",
        output: `[5, 9]`,
      },
    {
      title: "thread काय करतो? - परिचय",
      content: "thread हा Python मध्ये parallel execution करायचा साधन आहे. typically, CPU单一 core madhe even multiple threads chalvatnari tar effect nai te lagvta hote. threading module import karun threads banava sakte. har thread apne apne memory area madhe chalta — a stack madhe variables aur heap madhe shared resources. isliye careful design zaroori hoti.\n\nmarathi shikayen: ja hume doosre thread saath share data chahiye tabhi threading use karein; varna har thread apne kaam kare.\n\n• har thread ek alag call stack rakhta hai\n• shared data ke liye lock ya synchronization zaroori hoti\n• daemon threads background mein chalte rahte hain\n\nchahiye ho to yeh samjhiye kihar threading aapne code ko kitna safe banaya hai.",
    },
    {
      title: "GIL (Global Interpreter Lock) - kay?",
      content: "Python har alag alag thread ko chalaata time dehta hai — yeh GIL (Global Interpreter Lock) kehte hain. isliye technically har moment sirf ek thread hi chal rahta lagta hai. phir bhi multiple threads ka fayda ho sakta hai jab hum I/O-bound kaam (file read, network) kar rahe hon.\n\nnumber-bound kaam (complex calculation) ke liye multiprocessing better hai, kyunki wo har process ke hisaab se alag memory aur CPU use karega.\n\nGIL ko disable ya modify karna difficult hai, lekin hum uska effect kam kar sakte hain threads chhoti-lambi chhoti operations karke.\n\n• I/O-bound kaam ke liye threading ka use karein\n• CPU-bound kaam ke liye multiprocessing preferred hai\n• GIL ka effect kam karne ke liye batche mein kaam karein",
    },
    {
      title: "Thread banavudaa samasya - Race condition",
      content: " jab doosre thread ek saath same data modify karte hain, toh race condition hoti hai. is means ke dono threads ek saath data change kar rahe hon, toh finally result unexpected ho sakta hai.\n\nexample: dono threads same variable increment kar rahe hon — ultimately value shayad 1 hi rahe, 2 nahi.\n\nrace condition talaan lagne ke liye hum locks use karte hain. lock ensure karta hai ke sirf ek thread baar mein data modify kar sakta hai.\n\n• har baar jab thread data access kare, toh pehle lock acquire kare\n• kaam khatam hone ke baad release kare\n• deadlock se bachne ke liye careful design karein",
    },
    {
      title: "Lock ani RLock - synchronized access",
      content: "threading.Lock() basic lock hai jo mutual exclusion provide karta hai.isk baare mein sirf ek baar mein lock acquire kar sakte hain; doosri baar try karne par block ho jayega.\n\n threading.RLock() reentrant lock hai — same thread double bar lock acquire kar sakta hain bina deadlock kare. yeh tab useful hota jab recursive functions ya nested critical sections hon.\n\ncode: `import threading\nlock = threading.Lock()\nlock.acquire()\nprint(\"critical section\")\nlock.release()`,\noutput: `critical section`,\n",
    },
    {
      title: "Thread sanshodh - alive, name",
      content: "har thread ke paas alag-alag properties hon jinhe ham dhyan de sakte hain. thread.is_alive() batata hai ke thread still running hai ya already finish ho chuka hai. thread.name set kar ke thread ko identity de sakte hain — default naam 'Thread-1', 'Thread-2' hoti hai.\n\nnama set karne ke liye: `threading.Thread(target=kaam, name='meri_thread')`\n\ncurrent thread ka naam janane ke liye: `threading.current_thread().name`\n\nhar baar baar is baat check karein ki thread chalu raha ya nahi, special karke long-running processes ke liye.",
    },
    {
      title: "he lakhat thave - thread surakshata",
      content: "threading use karte waqt yeh dhyan rakhna zaroori hai ki hamara code safe ho. yeh kuch tarike hain:\n\n1. sirf zaroori data hi share karein — varna har thread apne apne variables use kare\n2. lock ya semaphore se critical sections protect karein\n3. infinite loops se bachhein — har thread paas eventually rukne ka tarika honi chahiye\n4. join() use karein — main thread wait karega child thread tak complete na ho\n5. debugger tools use karein — bugs dhundne ke liye\n\nfinal tip: agar aap unsure hon to multiprocessing use karein; wo alag processes banata hai jo alag memory maapate hain aur deadlock risk kam hota hai.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa हे vahat — vachan ani sandharasathi yevm:\n\n• threading module cha moreृत defautoj: https://docs.python.org/3/library/threading.html\n• GIL che vyakhya: https://docs.python.org/3/glossary.html#term-Global-Interpreter-Lock\n• More thread surakshata — tutorial: https://docs.python.org/3/tutorial/threads.html\n• multiprocessing module: https://docs.python.org/3/library/multiprocessing.html\n• PEP 554 — multithreading supplementary: https://peps.python.org/pep-0554/\n• Python threading guide — Real Python (official linkage): https://docs.python.org/3/faq/programming.html\n• Synchronization primitives: https://docs.python.org/3/library/threading.html#synchronization-primitives\n• Condition, Event, Semaphore details: https://docs.python.org/3/library/threading.html#thread-synchronization\n• Frequently asked questions — threading: https://docs.python.org/3/faq/programming.html#multi-threading\n• Concurrency or parallelism article: https://docs.python.org/3/whatsnew/3.9.html#concurrency\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — hech professional savay hai.",
    },
  ],
    ],
    practiceQuestions: [
      "start काय करतो?",
      "join काय करतो?",
      "lock म्हणजे?",
    ],
    quiz: [
      { question: "thread सुरू करण्यासाठी?", options: ["start()", "run all", "go()", "init"], correct: 0 },
      { question: "join काय?", options: ["पूर्ण वाट", "delete", "skip", "pause"], correct: 0 },
      { question: "data race टाळण्यासाठी?", options: ["Lock", "import", "sleep", "print"], correct: 0 },
    ],
    challenge: {
      prompt: "lock सह मूल्य.",
      starterCode: `import threading
lock = threading.Lock()
with lock:
    print("ok")`,
      expectedOutput: "ok",
    },
    interviewQuestions: [
      "thread म्हणजे?",
      "GIL म्हणजे?",
    ],
    related: ["python-async", "python-functions-advanced", "ai-python"],
    prev: "python-web-scraping",
    next: "python-async",
  },
  {
    slug: "python-async",
    categoryId: "python",
    title: "Async Programming",
    marathiTitle: "Async - आणखी समांतरता",
    level: "advanced",
    minutes: 16,
    summary: "async/await + asyncio ने I/O काम स्थगित; कोराउटीन्स.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Async - आणखी समांतरता चे फायदे आणि महत्त्व",
        content: "\"Async - आणखी समांतरता\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "asyncio म्हणजे काय?",
        content: "asyncio हा Python चा asynchronous I/O module. async def — coroutine function. await — थांबून परत येण्याची जागा. asyncio.run(main()) — coroutine चालवते. I/O काम (network, files) दरम्यान दुसरे काम पुढे जाते.",
        code: `import asyncio
async def hi():
    print("नमस्कार")
asyncio.run(hi())`,
        codeLanguage: "python",
        output: `नमस्कार`,
      },
      {
        title: "async def आणि await",
        content: "async function ला थेट call करता येत नाही — await करावी लागते. asyncio.run() मुख्य coroutine चालवते. await मधे program थांबतो आणि I/O ची वाट पाहतो.",
        code: `import asyncio
async def compute():
    return 40 + 2
async def main():
    print(await compute())
asyncio.run(main())`,
        codeLanguage: "python",
        output: `42`,
      },
      {
        title: "await व Sleep",
        content: "await asyncio.sleep(0.1) — मध्ये थांबतो आणि इतर काम पुढे. खऱ्या program मध्ये network wait साठी. asyncio ने कार्यक्षमता वाढते.",
        code: `import asyncio
async def t(name):
    await asyncio.sleep(0.01)
    return name
async def main():
    a = await t("पहिला")
    b = await t("दुसरा")
    print(a, b)
asyncio.run(main())`,
        codeLanguage: "python",
        output: `पहिला दुसरा`,
      },
      {
        title: "Gather: अनेक एकत्र",
        content: "asyncio.gather(*coroutines) अनेक coroutines एकत्र. सगळ्यांचे परिणाम एकत्र येतात. हे I/O काम पटकन पूर्ण करण्यासाठी.",
        code: `import asyncio
async def sq(x):
    return x * x
async def main():
    r = await asyncio.gather(sq(2), sq(3))
    print(r)
asyncio.run(main())`,
        codeLanguage: "python",
        output: `[4, 9]`,
      },
      {
        title: "चुका",
        content: "• async function ला थेट call — coroutine मिळतो आणि चालत नाही.\n• asyncio.run फक्त एकदा मुख्य.\n• CPU कामासाठी async नाही — फक्त I/O.",
        code: `import asyncio
async def f():
    return 1
print(asyncio.run(f()))`,
        codeLanguage: "python",
        output: `1`,
      },
      {
        title: "Interactive: add coroutine",
        content: "async add function बनवून asyncio.run ने चालवा. दोन numbers चा बेरीज.",
        code: `import asyncio
async def add(a, b):
    return a + b
print(asyncio.run(add(3, 4)))`,
        codeLanguage: "python",
        output: `7`,
      },
      {
        title: "Mini Project: gather ने अनेक काम",
        content: "asyncio.gather ने दोन coroutines एकत्र चालवा. दोन्ही परिणाम list मध्ये.",
        code: `import asyncio
async def w(x):
    return x
async def main():
    print(await asyncio.gather(w(1), w(2)))
asyncio.run(main())`,
        codeLanguage: "python",
        output: `[1, 2]`,
      },
    ],
    practiceQuestions: [
      "async def काय?",
      "await म्हणजे?",
      "gather काय?",
    ],
    quiz: [
      { question: "coroutine function साठी?", options: ["async def", "def", "class", "import"], correct: 0 },
      { question: "थांबण्यासाठी?", options: ["await", "sleep", "stop", "wait"], correct: 0 },
      { question: "अनेक एकत्र?", options: ["gather", "join", "sum", "all"], correct: 0 },
    ],
    challenge: {
      prompt: "message print करा.",
      starterCode: `import asyncio
async def m():
    print("हाय")
asyncio.run(m())`,
      expectedOutput: "हाय",
    },
    interviewQuestions: [
      "async vs threading फरक?",
      "await काय?",
    ],
    related: ["python-threading", "python-functions-advanced", "python-regex"],
    prev: "python-threading",
    next: "python-pip-advanced",
  },
  {
    slug: "python-pip-advanced",
    categoryId: "python",
    title: "Advanced pip",
    marathiTitle: "pip प्रगत - package व्यवस्थापन",
    level: "advanced",
    minutes: 15,
    summary: "pip install/uninstall/freeze, versions, requirements — व्यावसायिक package व्यवस्थापन.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? pip प्रगत - package व्यवस्थापन चे फायदे आणि महत्त्व",
        content: "✓ प्रत्येक project च्या library गरजा वेगळ्या असतात; सगळं global ठिकाणी install केल्यास version conflict होतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "pip म्हणजे काय?",
        content: "pip हा Python चा package installer — इतरांनी लिहिलेल्या library (requests, numpy इ.) एका command ने install करतो. Python 3.x सोबत pip आधीच येतो; वेगळे install करावं लागत नाही.\n\ninstall झाली की कोड मध्ये import requests लिहून ती वापरता येते. Termux सारख्या काही ठिकाणी pip ऐवजी python3 -m pip लिहावं लागतं — दोन्ही तोच pip आहे.",
        code: `pip install requests`,
        codeLanguage: "shell",
        output: `Successfully installed requests-2.31.0`,
      },
      {
        title: "install, list, uninstall",
        content: "तीन नेहमीच्या command:\n\npip install नाव — नवीन library बसवतो.\npip list — install केलेल्या library ची नावे आणि आवृत्त्या दाखवतो.\npip uninstall नाव — ती library काढून टाकतो.\n\nखाली pip list चा ठराविक output — प्रत्येक library ची आवृत्ती शेजारी.",
        code: `pip list`,
        codeLanguage: "shell",
        output: `Package    Version
---------- -------
numpy      1.26.0
requests   2.31.0`,
      },
      {
        title: "आवृत्ती निवडणे",
        content: "pip install नाव==1.2.3 ही रचना नेमकी आवृत्ती निवडते. साधा pip install नाव नवीनतम आवृत्ती घेतो, पण सगळ्यात नवी आवृत्ती एखाद्या project शी जुळणारच असं नाही.\n\npip install -U नाव (+upgrade) ने नवीन आवृत्तीवर जातात. == ने आवृत्ती बांधून ठेवल्याने reproducible setup मिळतो.",
        code: `pip install numpy==1.26.0`,
        codeLanguage: "shell",
        output: `Successfully installed numpy-1.26.0`,
      },
      {
        title: "requirements.txt",
        content: "pip freeze — install केलेल्या library च्या नावे आणि आवृत्त्या == स्वरूपात छापतो. तो output file मध्ये नेण्यासाठी > requirements.txt जोडतात.\n\nनवीन ठिकाणी pip install -r requirements.txt लिहितात — project चं setup तसाच उभा राहतो.",
        code: `pip freeze`,
        codeLanguage: "shell",
        output: `numpy==1.26.0
requests==2.31.0`,
      },
      {
        title: "venv मध्येच install करा",
        content: "प्रत्येक project च्या library गरजा वेगळ्या असतात; सगळं global ठिकाणी install केल्यास version conflict होतो. प्रत्येक project ला स्वतःचं venv बनवतात आणि त्यातच install करतात.\n\nsys.executable ने कोणत्या python मध्ये आहोत ते तपासता येते.",
        code: `import sys
print(sys.executable)`,
        codeLanguage: "python",
        output: `/data/data/com.termux/files/usr/bin/python3`,
      },
      {
        title: "सामान्य चुका",
        content: "✗ venv सक्रिय न करता pip install — package global मध्ये जातं.\n\n✗ नवीन library install केल्यावर requirements.txt अपडेट न करणे — पुन्हा pip freeze घ्या.\n\n✗ package चं नाव चुकलं — pip error: No matching distribution found. Spelling तपासा.",
        code: `pip install reqeusts`,
        codeLanguage: "shell",
        output: `ERROR: No matching distribution found for reqeusts`,
      },
      {
        title: "Interactive: pip --version",
        content: "pip --version चा शेवटचा भाग pip कोणत्या python सोबत बसला आहे ते दाखवतो. venv बनवून सक्रिय करा आणि पुन्हा पहा — path बदललेला दिसेल.",
        code: `pip --version`,
        codeLanguage: "shell",
        output: `pip 23.2.1 from /usr/lib/python3/dist-packages/pip (python 3.11)`,
      },
      {
        title: "व्यावसायिक सवयी",
        content: "• project ला स्वतःचं venv बनवून त्यातच install करा.\n• प्रत्येक install नंतर pip freeze करून requirements.txt अपडेट करा.\n• वेळोवेळी pip list पाहून अनावश्यक packages हटवा.\n• package च्या नावावर खात्री हवी असेल तर अधिकृत दस्तऐवज पडताळा.\n\nहे पाळलं की कोणत्याही ठिकाणी project तसाच चालतो.",
      },
    ],
    practiceQuestions: [
      "freeze म्हणजे?",
      "version निवड कशी?",
      "venv का?",
    ],
    quiz: [
      { question: "library install?", options: ["pip install", "pip delete", "import", "exec"], correct: 0 },
      { question: "एकाच version?", options: ["==", ">=", "at", "~"], correct: 0 },
      { question: "requirements?", options: ["yादी file", "कोड", "data", "logs"], correct: 0 },
    ],
    challenge: {
      prompt: "freeze concept.",
      starterCode: `print("pip freeze > requirements.txt")`,
      expectedOutput: "pip freeze > requirements.txt",
    },
    interviewQuestions: [
      "pip install चा परिणाम?",
      "version lock कसा?",
    ],
    related: ["python-virtualenv", "python-modules", "python-numpy"],
    prev: "python-async",
    next: "python-practical-project",
  },
  {
    slug: "python-practical-project",
    categoryId: "python",
    title: "Practical Python Project",
    marathiTitle: "Practical Project - सर्व एकत्र",
    level: "advanced",
    minutes: 18,
    summary: "f-strings, enumerate, zip, sorted, numpy, threading एकत्र करून एक कार्यशील project.",
    levelLabel: L7_LABEL,
    sections: [
      {
        title: "का शिकावे? Practical Project - सर्व एकत्र चे फायदे आणि महत्त्व",
        content: "\"Practical Project - सर्व एकत्र\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "परिचय",
        content: "हा शेवटचा project — या level मधील सर्व साधने एकत्र. आपण एक छोटा गुण विश्लेषक बनवतो.\n\nf-strings ने सुबक output, enumerate ने क्रम, zip ने जोड्या, numpy ने सरासरी.",
        code: `print("गुण विश्लेषक project")`,
        codeLanguage: "python",
        output: `गुण विश्लेषक project`,
      },
      {
        title: "डेटा व Zip",
        content: "विद्यार्थ्यांची नावे आणि गुण — zip ने जोड्या बनवतो. सरळ list मध्ये जोड्या — हे पुढील गणनेचा पाया.",
        code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
pairs = list(zip(names, marks))
print(len(pairs))`,
        codeLanguage: "python",
        output: `3`,
      },
      {
        title: "Numpy सरासरी",
        content: "numpy ने सरासरी आणि बेरीज. np.mean(marks) — सरासरी गुण. f-string ने सुबक format.",
        code: `import numpy as np
marks = [88, 65, 92]
print(f"सरासरी: {np.mean(marks):.1f}")`,
        codeLanguage: "python",
        output: `सरासरी: 81.7`,
      },
      {
        title: "Ranking",
        content: "sorted ने उतरत्या क्रमाने गुणांची रांग. enumerate(..., start=1) ने क्रमांक. f-string ने सुबक table.",
        code: `names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n} {m}")`,
        codeLanguage: "python",
        output: `1. मीरा 92
2. आरोही 88
3. वेद 65`,
      },
      {
        title: "Threading",
        content: "समांतर काम दाखवण्यासाठी threads. येथे साधा क्रमिक computation — lock वापरून विश्वसनीय result.",
        code: `import threading
lock = threading.Lock()
with lock:
    print("विश्लेषण तयार")`,
        codeLanguage: "python",
        output: `विश्लेषण तयार`,
      },
      {
        title: "Interactive: Summary",
        content: "sum आणि max ने एकूण गुण आणि उच्च गुण — एका ओळीत.",
        code: `marks = [88, 65, 92]
print(f"एकूण: {sum(marks)}, उच्च: {max(marks)}")`,
        codeLanguage: "python",
        output: `एकूण: 245, उच्च: 92`,
      },
      {
        title: "Mini Project: संपूर्ण विश्लेषक",
        content: "सर्व साधने एकत्र — names, marks, sorted ranking, numpy mean. f-string ने सुबक output.",
        code: `import numpy as np
names = ["आरोही", "वेद", "मीरा"]
marks = [88, 65, 92]
print("=== गुण विश्लेषक ===")
for rank, (n, m) in enumerate(sorted(zip(names, marks), key=lambda x: x[1], reverse=True), start=1):
    print(f"{rank}. {n}: {m}")
print(f"सरासरी: {np.mean(marks):.1f}")`,
        codeLanguage: "python",
        output: `=== गुण विश्लेषक ===
1. मीरा: 92
2. आरोही: 88
3. वेद: 65
सरासरी: 81.7`,
      },
    ],
    practiceQuestions: [
      "zip + sorted कसे एकत्र?",
      "enumerate start=1 काय?",
      "numpy mean काय?",
    ],
    quiz: [
      { question: "ranking साठी कोणते?", options: ["sorted + reverse", "print", "import", "break"], correct: 0 },
      { question: "क्रमांकासाठी?", options: ["enumerate", "random", "join", "count"], correct: 0 },
      { question: "सरासरी?", options: ["np.mean", "np.max", "len", "abs"], correct: 0 },
    ],
    challenge: {
      prompt: "सरासरी + सर्वोच्च.",
      starterCode: `import numpy as np
m = [70, 90, 80]
print(f"{np.mean(m)}")`,
      expectedOutput: "80.0",
    },
    interviewQuestions: [
      "या project मध्ये काय वापरले?",
      "शेवटचा level?",
    ],
    related: ["python-fstrings", "python-numpy", "python-threading"],
    prev: "python-pip-advanced",
    next: "python-oop-project",
  },
];
