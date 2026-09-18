import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 4 — Strings & Files (मजकूर आणि फायली) ===
export const L4_LABEL = "Level 4 — Strings & Files (मजकूर आणि फायली)";

export const pythonLevel4: Tutorial[] = [
  {
    slug: "python-strings",
    categoryId: "python",
    project: "password-generator",
    title: "Python Strings",
    marathiTitle: "Strings - मजकूर",
    level: "intermediate",
    minutes: 15,
    summary: "मजकूर (text) कसा साठवायचा, कसा कापायचा (slicing) आणि कसा उलटायचा ते शिका.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Strings - मजकूर म्हणजे काय?",
        content: "मजकूर (text) कसा साठवायचा, कसा कापायचा (slicing) आणि कसा उलटायचा ते शिका.\nString म्हणजे मजकूर — नाव, वाक्य, पत्ता, संदेश; संगणकावर दिसणारे सगळे काही string मध्येच साठवले जाते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Strings - मजकूर चे फायदे आणि महत्त्व",
        content: "✓ string ही अक्षरांची मालिका असल्याने प्रत्येक अक्षराला एक क्रम (index) मिळतो — आणि Python चा सर्वांत महत्त्वाचा नियम: गणना 0 पासून सुरू होते.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "String म्हणजे मजकूर",
        content: "String म्हणजे मजकूर — नाव, वाक्य, पत्ता, संदेश; संगणकावर दिसणारे सगळे काही string मध्येच साठवले जाते. Python मध्ये single quotes ('...') किंवा double quotes (\"...\") दोन्हीने string लिहिता येते. मजकुरातच quote असल्यास वेगळा प्रकार निवडतात: \"म्हणाले, 'नमस्कार'\".\nसंख्या quotes मध्ये आल्यावर text बनते: \"100\" ही string, 100 ही संख्या. त्यामुळे '100' + '1' म्हणजे '1001' आणि 100 + 1 = 101. फोन नंबर, पिनकोड, नाव — असे मजकूर नेहमी quotes मध्ये लिहावे लागतात.\nमराठी अक्षरे Python मध्ये थेट चालतात — 'मराठी भाषा', 'अ=ब', '१२३' सगळे string. मराठी app, फॉर्म, चॅटबॉट — सर्व या मजकुरावरच उभे असतात.\nतीन quotes (\"\"\"...\"\"\") च्या साहाय्याने अनेक ओळींचा मजकूर लिहिता येतो, आणि रिकामा string '' हा देखील कायदेशीर string आहे.",
      },
      {
        title: "पहिल्या अक्षराचा क्रम 0 — index",
        content: "string ही अक्षरांची मालिका असल्याने प्रत्येक अक्षराला एक क्रम (index) मिळतो — आणि Python चा सर्वांत महत्त्वाचा नियम: गणना 0 पासून सुरू होते. \"अनिकेत\" मध्ये अ=0, न=1, इ=2, क=3, े=4, त=5. शेवटच्या अक्षराला -1 असा उलट क्रमही असतो: -2 मागून दुसरे, -3 मागून तिसरे.\nlen(name) अक्षरांची संख्या देतो — इथे 6. name[0] पहिले अक्षर 'अ' आणि name[-1] शेवटचे 'त' काढतो. print प्रत्येक वेळी नवीन ओळीवर output देतो — म्हणून चार print म्हणजे output च्या चार ओळी.\nउलटा क्रम (-1) हे Python चे खास वैशिष्ट्य — इतर भाषांमध्ये शेवटचे अक्षर मिळवण्यासाठी लांबी वजा एक मोजावी लागते.\nकोडमधील चार क्रियांचा समूह output: अनिकेत, 6, अ, त — हेच निकाल प्रत्येक अक्षराचे क्रम ओळखल्यावर सुनिश्चित असतात.",
        code: `name = "अनिकेत"
print(name)
print(len(name))
print(name[0])
print(name[-1])`,
        codeLanguage: "python",
        output: `अनिकेत
6
अ
त`,
      },
      {
        title: "Slicing — भाग कापणे",
        content: "string मधून एखादा भाग हवा असेल तर अक्षरे एकेक काढण्याऐवजी एकाच सूत्राने तो भाग कापता येतो: [start:stop]. येथे एकच स्थिर नियम — start चे अक्षर समाविष्ट असते, stop चे नसते.\nम्हणून word[1:4] हे \"hello\" मधून क्रम 1, 2, 3 — म्हणजे ell — देतो; word[:3] पहिली तीन अक्षरे (0, 1, 2) — hel. stop चा क्रम नेहमी वगळला जातो हे ध्यानात असेल तर कोणतीही slicing अचूक लिहिता येते.\nतिसरा भाग step — किती पुढे उडी मारायची. [::2] प्रत्येक दुसरे अक्षर; [::-1] मध्ये -1 म्हणजे उलट दिशेने चालणे, त्यामुळे संपूर्ण string उलटा olleh मिळतो.\nहीच [start:stop:step] रचना list सारख्या इतर sequences वरही लागू होते — आत्ता शिकलेला नियम पुढील धड्यांत सर्वत्र कामाला येतो.",
        code: `word = "hello"
print(word[1:4])
print(word[:3])
print(word[::-1])`,
        codeLanguage: "python",
        output: `ell
hel
olleh`,
      },
      {
        title: "split() — नाव-आडनाव वेगळे करणे",
        content: "फॉर्ममध्ये पूर्ण नाव एकाच ठिकाणी येते आणि पुढे नाव तसेच आडनाव वेगळे हवे असते. split() ही string ची तयार पद्धत ते काम अर्ध्या ओळीत करते — ती रिकाम्या जागेवर (space) मजकूर कापून शब्दांची list देते.\nfull = \"सायली पाटील\" वर parts = full.split() मधून ['सायली', 'पाटील'] मिळते. आता parts[0] म्हणजे पहिला शब्द 'सायली' आणि parts[1] दुसरा 'पाटील' — हेच दोन ओळींच्या output मध्ये दिसते.\nsplit() ला वेगळा विभाजकही देता येतो: \"12,34,56\".split(\",\") मधून ['12', '34', '56']. कॉमावर अवलंबून असलेला data (CSV) वाचताना हा वापर सतत येतो.\nनाव, पत्ता, तारीख — कोणताही अखंड मजकूर भागांमध्ये फोडण्याचे हे पहिले साधन; पुढे loops आणि मोजणीसाठी हीच list आधार तयार करते.",
        code: `full = "सायली पाटील"
parts = full.split()
print(parts[0])
print(parts[1])`,
        codeLanguage: "python",
        output: `सायली
पाटील`,
      },
      {
        title: "String बदलता येत नाही — immutable",
        content: "string एकदा तयार झाल्यावर त्यातले अक्षर बदलता येत नाही — या गुणधर्माला immutable म्हणतात. name[0] = \"A\" सारखी ओळ TypeError आणते, कारण string मधील अक्षर जागेवर बदलता येत नाही.\nबदल करायचा असेल तर जुना भाग कापून नवा जोडतात: new_name = \"A\" + name[1:] — 'A' च्या पाठीमागे उर्वरित अक्षरे जोडून संपूर्ण नवीन string तयार होतो; output मध्ये Aniket दिसते.\nजुना string तसाच राहतो — बदल झालेला नाही, नवीन मूल्य वेगळ्या नावाने अस्तित्वात आले. म्हणून मूळ मजकूर कोणत्याही प्रक्रियेतून सुरक्षित जातो.\nहाच गुणधर्म int, float, tuple यांनाही आहे; list मात्र बदलता येते. कोणता प्रकार बदलता येतो आणि कोणता नाही हे ओळखणे चुका टाळते.",
        code: `name = "aniket"
# name[0] = "A"   → TypeError
new_name = "A" + name[1:]
print(new_name)`,
        codeLanguage: "python",
        output: `Aniket`,
      },
      {
        title: "प्रयोग — len, उलटा आणि जोडणी",
        content: "मागील तीन क्रिया एका कोडात एकत्र करून पहा: msg = \"Python!\" ही सात अक्षरांची मालिका (P, y, t, h, o, n, !) — म्हणून Len: 7.\nmsg[::-1] संपूर्ण string उलटतो — !nohtyP. शेवटची ओळ msg + \" मजा येते\" — + हे चिन्ह फक्त संख्यांपुरते मर्यादित नाही, मजकूरही शेवटोशेवट जोडतो.\noutput च्या तिन्ही ओळी एकेक क्रियेचा निकाल दाखवतात: Len: 7, Reverse: !nohtyP आणि Python! मजा येते.\nmsg ची value बदलून कोड पुन्हा चालवा — output त्वरित बदलतो. कोड बदलून output तपासणे हीच programming ची मूळ सवय.",
        code: `msg = "Python!"
print("Len:", len(msg))
print("Reverse:", msg[::-1])
print(msg + " मजा येते")`,
        codeLanguage: "python",
        output: `Len: 7
Reverse: !nohtyP
Python! मजा येते`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "पहिल्या अक्षराला क्रम 1 गृहीत धरणे — प्रत्यक्षात गणना 0 पासून सुरू होते. name[1] हे दुसरे अक्षर आहे, पहिले नव्हे; ही एकच चूक सर्व क्रम पुढे सरकवते.\nstring बदलण्याचा प्रयत्न — name[0] = \"A\" लिहिल्यास TypeError; नवीन string तयार करवा (A + name[1:]).\nquotes विसरणे — अनिकेत असे विना quotes लिहिलेल्या शब्दाचा Python variable म्हणून अर्थ लावतो व NameError देतो.\nक्रम मर्यादेबाहेर — सहा अक्षरांच्या मालिकेत name[6] मागितल्यास IndexError; शेवटचा क्रम 5 आहे, किंवा -1 वापरा.\nप्रत्येक error message च्या शेवटी कारण स्पष्ट असते — ते वाचणेच चुका शोधण्याची पहिली पायरी.",
      },
      {
        title: "Mini Project — palindrome तपासणी",
        content: "शब्द उलटून तोच येत असेल तर त्याला palindrome म्हणतात — madam, radar, level. उलटणे आताच शिकलो ([::-1]), त्यामुळे तपासणी फक्त word == word[::-1] इतकी सोपी राहते.\ncheck() function हा तर्क करतो: शब्द उलटल्यावर तोच आला तर \"madam — palindrome!\" परत येतो, नसल्यास उलटा शब्द \"nohtyp — उलटा\" मिळतो.\nfunction मध्ये तर्क ठेवल्याने तो कोणत्याही शब्दासाठी पुन्हा वापरता येतो — racecar, malayalam, \"पम प\" सारखे मराठी शब्दही.\nindex, slicing आणि तुलना — तिन्ही कौशल्ये एका function मध्ये एकत्र. हीच string चा सुरुवातीचा संयुक्त प्रयोग.",
        code: `def check(word):
    if word == word[::-1]:
        return word + " — palindrome!"
    return word[::-1] + " — उलटा"

print(check("madam"))
print(check("python"))`,
        codeLanguage: "python",
        output: `madam — palindrome!
nohtyp — उलटा`,
      },
    ],
    practiceQuestions: [
      "len() काय देतो?",
      "सुरुवातीच्या अक्षराचा index कोणता?",
      "string उलटा कसा काढता?",
      "एखाद्या नावाचे पहिले 3 अक्षर slicing ने काढा",
    ],
    quiz: [
      {
        question: "string मधील पहिल्या अक्षराचा index कोणता?",
        options: ["1", "0", "-1", "खालील"],
        correct: 1,
      },
      {
        question: "string व्युत्पादित कसा करतात?",
        options: ["[1:4]", "(1,4)", "{1:4}", "<1:4>"],
        correct: 0,
      },
      {
        question: "string उलटण्यासाठी कोणता slice?",
        options: ["[::1]", "[::-1]", "[:1]", "reverse()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एका नावाचे पहिले 3 अक्षर slicing ने काढा आणि शेवटचे अक्षर -1 ने दाखवा.",
      starterCode: `name = "अनिकेत"
print(name[:3])
print(name[-1])`,
      expectedOutput: "अनि\nत",
    },
    interviewQuestions: [
      "string immutable म्हणजे काय?",
      "len() काय मोजते — अक्षरे किंवा शब्द?",
      "space हे अक्षर आहे का?",
    ],
    related: ["python-string-methods", "python-type-conversion", "python-print"],
    prev: "python-dict-methods",
    next: "python-string-methods",
  },
  {
    slug: "python-string-methods",
    categoryId: "python",
    title: "String Methods",
    marathiTitle: "String Methods - उपयुक्त साधने",
    level: "intermediate",
    minutes: 14,
    summary: "मजकूर स्वच्छ करणे, कापणे, जोडणे व बदलणे — सगळी साधने एकाच ठिकाणी.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "String Methods - उपयुक्त साधने म्हणजे काय?",
        content: "मजकूर स्वच्छ करणे, कापणे, जोडणे व बदलणे — सगळी साधने एकाच ठिकाणी.\nstring मजकूर साठवतो, पण त्यावर करायच्या क्रिया — कडा साफ करणे, मोठी अक्षरे, शब्द फोडणे — प्रत्येक वेळी स्वतः लिहायच्या नसतात.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? String Methods - उपयुक्त साधने चे फायदे आणि महत्त्व",
        content: "✓ येथील सहा महत्त्वाच्या: strip() कडा साफ करते, upper()/lower() अक्षरांचे स्वरूप बदलते, split() शब्दांची list देते, replace() मजकूर बदलतो आणि join() list मधून string जोडतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "Method म्हणजे तयार क्रिया",
        content: "string मजकूर साठवतो, पण त्यावर करायच्या क्रिया — कडा साफ करणे, मोठी अक्षरे, शब्द फोडणे — प्रत्येक वेळी स्वतः लिहायच्या नसतात. Python ने त्या क्रिया तयारच करून दिल्या आहेत; त्यांना method म्हणतात.\nmethod वापरण्याची रचना स्थिर असते: mystring.method(). string नावानंतर dot आणि मग क्रिया — उदा. text.upper() संपूर्ण मजकूर मोठ्या अक्षरांत करतो.\nयेथील सहा महत्त्वाच्या: strip() कडा साफ करते, upper()/lower() अक्षरांचे स्वरूप बदलते, split() शब्दांची list देते, replace() मजकूर बदलतो आणि join() list मधून string जोडतो.\nसर्व method क्रिया करून नवीन string परत करतात — मूळ string तसाच राहतो. म्हणून प्रत्येक निकाल print करून तपासणे सवय करा; हा immutable गुणधर्म मागील धड्यातच पाहिला.",
      },
      {
        title: "strip, upper, replace आणि join",
        content: "strip() string च्या दोन्ही कडांवरील रिकाम्या जागा (spaces, नवीन ओळी) काढून टाकतो. \"  hello world  \" वर strip() मधून hello world मिळते — वाचताना कडांना चिकटलेले data अशीच साफ होते.\nक्रिया एकमेकांवर जोडता येतात: text.strip().upper() — आधी कडा साफ, मग सगळी मोठी अक्षरे — HELLO WORLD. text.strip().split() शब्दांची ['hello', 'world'] ही list बनवते; कडांतील जागा गेल्यामुळे list ही स्वच्छ मिळते.\nreplace() मजकुरातील भाग बदलतो: \"Hello World\".replace(\"World\", \"Python\") मधून Hello Python.\nsplit(\",\") कॉमाने फोडतो — ['a', 'b', 'c']; आणि \", \".join([...]) शब्द कॉमा-जागेने जोडून x, y, z देतो — join ही split ची उलटी क्रिया होय.",
        code: `text = "  hello world  "
print(text.strip())
print(text.strip().upper())
print(text.strip().split())
print("Hello World".replace("World", "Python"))
print("a,b,c".split(","))
print(", ".join(["x", "y", "z"]))`,
        codeLanguage: "python",
        output: `hello world
HELLO WORLD
['hello', 'world']
Hello Python
['a', 'b', 'c']
x, y, z`,
      },
      {
        title: "शोध आणि तपासणी — find आणि in",
        content: "find(\"@\") सांगतो की @ कोणत्या क्रमावर बसला आहे — email = \"user1@example.com\" मध्ये 5; मजकुरात ते चिन्ह नसेल तर -1 परत येतो. email.split(\"@\")[1] शब्दाचा उजवा भाग — example.com — वेगळा काढतो.\n\"example.com in email\" ही in तपासणी boolean देते — True किंवा False. शहर शोधणे, पद परवानगी, संदेशातील टॅग — अशा सत्य-असत्य तपासण्या त्यावर उभ्या राहतात.\nlower() सगळी लहान अक्षरे करतो — \"PYTHON\".lower() मधून python; login, शोध यांमध्ये केस न बदलता तुलना करण्यासाठी ही सवय ठेवा.\ncapitalize() पहिले अक्षर मोठे व बाकी लहान करतो — \"python\" मधून Python; नावे, वाक्ये, शीर्षके सजवण्यासाठी नियमित वापर.",
        code: `email = "user1@example.com"
print(email.find("@"))
print(email.split("@")[1])
print("example.com in email:", "example.com" in email)
print("PYTHON".lower())
print("python".capitalize())`,
        codeLanguage: "python",
        output: `5
example.com
example.com in email: True
python
Python`,
      },
      {
        title: "कॉमा मजकूर तोडून बेरीज — वास्तविक उदाहरण",
        content: "बँक, दुकान, सर्व्हर यांचा data एका मजकुरात कॉमांनी विभागलेला असतो: data = \"12,34,56,78\". असा ठोक मजकूर वापरायचा असेल तर पहिले भागांमध्ये फोडा.\nnums = data.split(\",\") मधून ['12', '34', '56', '78'] मिळते — हे घटक अजून मजकूर आहेत, संख्या नव्हे. म्हणून sum(int(n) for n in nums) — प्रत्येक घटक int() ने संख्येत बदलून बेरीज — बेरीज: 180.\nlen(nums) घटकांची संख्या देतो — 4. दिवसाची विक्री, महिन्याचा खर्च अशा याद्या अशीच फोडून मोजल्या जातात.\nsplit → int → sum हे चक्र एकाच व्यवहारातून उद्भवते: ठोक मजकूर वाचणे आणि खरे संख्यात्मक निकाल काढणे.",
        code: `data = "12,34,56,78"
nums = data.split(",")
total = sum(int(n) for n in nums)
print("बेरीज:", total)
print("एकूण संख्या:", len(nums))`,
        codeLanguage: "python",
        output: `बेरीज: 180
एकूण संख्या: 4`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "split() चे घटक अजून string असतात — '12', '34' असे अंकाचे रूप असलेला मजकूर. त्यांना int() ने खरी संख्या बनवल्याशिवाय sum() मध्ये घालता येत नाही; नाहीतर प्रकारांच्या विसंगतीचा TypeError येतो.\nकडांवरील जागा — वाचलेला मजकूर \" 78\" सारखा आल्यास int() अडतो; सरळ int(m.strip()) — आधी कडा साफ, मग संख्येत बदल.\nmethod चे निकाल मूळ string बदलत नाहीत — text.upper() लिहूनही text तसाच राहतो; निकाल नवीन variable मध्ये ठेवा किंवा थेट print करा.\njoin() ची रचना उलट होत नाही — list.join() असे नाही, separator.join(list): \", \".join(words) हाच फॉर्म आहे.\nप्रत्येक method चा निकाल print केल्यावर output मध्ये नीट दिसतो — output वाचणे हीच चुका ओळखण्याची सवय.",
      },
      {
        title: "प्रयोग — गुणांची यादी स्वच्छ करा",
        content: "गुणांचा मजकूर प्रत्येक गुणानंतर जागा घालून येतो: marks = \"78, 85, 90\". अशा data मधील भाग स्वच्छ करून संख्या बनवणे हे नेहमीचे काम.\n[int(m.strip()) for m in marks.split(\",\")] एकाच ओळीत तीन पायऱ्या — split ने घटक वेगळे, strip ने कडा साफ, int ने संख्या. परिणाम [78, 85, 90] अशी खरी list तयार होते.\nsum(nums) मधून एकूण 253 येतो — list मध्ये आता मोजणी, सरासरी, कमाल-किमान सर्व करता येते.\nहा comprehension फॉर्म पुढे list सहित कामासाठी नेहमी वापरला जातो; इथे तीन तयार तरतूदींचे संयोजन थेट दिसते.",
        code: `marks = "78, 85, 90"
nums = [int(m.strip()) for m in marks.split(",")]
print(nums)
print("एकूण:", sum(nums))`,
        codeLanguage: "python",
        output: `[78, 85, 90]
एकूण: 253`,
      },
      {
        title: "Mini Project — पाच गुणांची सरासरी",
        content: "सगळ्या method चा एकत्र अभ्यास — marks = \"78,85,90,66,72\" ही पाच गुणांची मजकूर यादी वाचून सरासरी काढा.\nsplit(\",\") गुण उलगडतो, int(m) प्रत्येक घटक संख्येत बदलतो, sum() एकूण 391 देतो — प्रत्येक पायरी मागील विभागांमधीलच पुन्हा वापरलेली.\navg = total / 5 मधून सरासरी 78.2 — दशांश निकाल float स्वरूपात.\nएकूण आणि सरासरी labels सह print झाले आहेत. आता marks मध्ये गुण बदला — program संपूर्ण आकडे स्वतःच बदलतो; हेच त्याचे खरे तार्किक पडताळणी.",
        code: `marks = "78,85,90,66,72"
total = sum(int(m) for m in marks.split(","))
avg = total / 5
print("एकूण:", total)
print("सरासरी:", avg)`,
        codeLanguage: "python",
        output: `एकूण: 391
सरासरी: 78.2`,
      },
      {
        title: "धड्याचे सार",
        content: "method नेहमी mystring.method() असा वापरले जाते — dot नंतर तयार क्रिया; बहुतेक method नवीन string परत करतात, मूळ string बदलत नाही.\nsplit() मजकूर वेगळे करते, join() ही उलट — list मधून मजकूर जोडतो; data या दोघांमधून सतत फिरतो.\nमजकूर अंकाचा असला तरी तो अजून string आहे — int() ने संख्येत बदलल्याशिवाय बेरीज व गणित शक्य नाही.\nप्रत्येक method त्या ओळीवर तपासून अर्थ घ्या — output चे वाचन हीच सर्वाधिक विश्वासार्ह सवय.",
      },
    ],
    practiceQuestions: [
      "strip() काय करतो?",
      "split() काय परत देतो?",
      "नवीन string मिळवण्यासाठी methods का वापरतात?",
      "एका वाक्याचे word count method ने करा",
    ],
    quiz: [
      {
        question: "text ची आसपासची रिकामी जागा कोणता method काढतो?",
        options: ["trim()", "strip()", "clear()", "remove()"],
        correct: 1,
      },
      {
        question: "split() काय देतो?",
        options: ["string", "integer", "list", "dict"],
        correct: 2,
      },
      {
        question: "ते जुना string बदलत नाही, नवीन string देतो — म्हणजे?",
        options: ["immutable", "mutable", "broken", "linked"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "नावाचे आडनाव extract करून capital letters मध्ये print करा.",
      starterCode: `full = "Rahul Sharma"
parts = full.split()
print(parts[1].upper())`,
      expectedOutput: "SHARMA",
    },
    interviewQuestions: [
      "split vs join मध्ये फरक?",
      "methods मूळ string का बदलत नाहीत?",
      "string ला list मध्ये आणि परत how कसा बदलता?",
    ],
    related: ["python-strings", "python-list-methods", "python-string-formatting"],
    prev: "python-strings",
    next: "python-string-formatting",
  },

  {
    slug: "python-string-formatting",
    categoryId: "python",
    title: "String Formatting",
    marathiTitle: "String Formatting - f-strings",
    level: "intermediate",
    minutes: 13,
    summary: "नाव, उंची, किंमत — सगळं एकत्र आवडत्या पद्धतीने print करा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "String Formatting - f-strings म्हणजे काय?",
        content: "नाव, उंची, किंमत — सगळं एकत्र आवडत्या पद्धतीने print करा.\nआतापर्यंत मजकूर आणि data वेगळे लिहिले; निकाल जोडायचा असेल तर \\\"टक्केवारी: \\\" + str(score) अशी केली जात असे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? String Formatting - f-strings चे फायदे आणि महत्त्व",
        content: "✓ f-string चा फायदा — आत थेट संख्या व गणना चालते: f\\\"{score}%\\\", f\\\"{price:.2f}\\\" मध्ये नंतरचा :2f दशांश स्थाने ठरवतो.\n✓ प्रारंभाचे f विसरणे — \\\"नमस्कार {name}!\\\" असे f शिवाय लिहिल्यास कुरळ्या कोष्टकांसह मजकूर तसाच दिसतो, value भरत नाही; सुरुवातीला f आवश्यक.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "मजकुरात value घालणे — f-string",
        content: "आतापर्यंत मजकूर आणि data वेगळे लिहिले; निकाल जोडायचा असेल तर \"टक्केवारी: \" + str(score) अशी केली जात असे. f-string हा थेट मार्ग — मजकुरातच {} मध्ये variable किंवा expression घालता येते.\nरचना अशी: f\"...\" — ओळीच्या सुरुवातीला f, आणि जिथे value हवी तिथे {expression}. Python ती value गुंफून मजकुरात मिसळतो.\nf-string चा फायदा — आत थेट संख्या व गणना चालते: f\"{score}%\", f\"{price:.2f}\" मध्ये नंतरचा :2f दशांश स्थाने ठरवतो.\nआकडे, नावे, तारखा मजकुरात सतत मिसळतात — अहवाल, पावती, फॉर्म यांची अक्षरशः भाषा f-string हीच.",
      },
      {
        title: "expression आणि दशांश नियंत्रण",
        content: "f-string मध्ये {} च्या आत फक्त variable नको, expression ही चालतो. f\"चौरस: {score * score}\" मध्ये 89 × 89 = 7921 — गणना मजकुरातच होते.\nf\"तुमची टक्केवारी: {score}%\" थेट 89% दाखवते — टक्का चिन्ह मजकूर असेल, संख्या expression मधून.\nदशांश संख्येचे स्वरूप ठरवायचे असल्यास {price:.2f} — 123.456 वर .2f म्हणजे दोन दशांश स्थाने व पूर्णांक — ₹123.46. f हे float सांगते, 2 ही संख्या स्थानांची.\nअशा निर्देशांकाने आकडा कितीही वेगळा असला तरी output नेहमी सारखा स्वच्छ राहतो — print च्या प्रत्येक ओळीचा नियम तुम्हीच देतात.",
        code: `name = "राहुल"
score = 89
print(f"नमस्कार {name}!")
print(f"तुमची टक्केवारी: {score}%")
print(f"चौरस: {score * score}")

price = 123.456
print(f"किंमत: ₹{price:.2f}")`,
        codeLanguage: "python",
        output: `नमस्कार राहुल!
तुमची टक्केवारी: 89%
चौरस: 7921
किंमत: ₹123.46`,
      },
      {
        title: "format() आणि रुंदी, कॉमा, दशांश",
        content: "f-string मधील {var:spec} हाच नियम जुन्या .format() मध्येही आहे — ओळीचा क्रम {} च्या क्रमाने गाळायचा. \"{}-{}\".format(\"Python\", \"Version\") मधून Python-Version मिळते.\n{:>10} मजकूर किंवा संख्या एकूण 10 स्थानांच्या अंतरात उजव्या बाजूला ठेवतो — output मध्ये 42 समोर आठ जागा; स्तंभांची रांग जमवण्यासाठी हे स्वरूप.\n{:.1f} हे .2f प्रमाणेच पण एकच दशांश — 3.14159 मधून 3.1.\nf\"{bill:,.2f}\" मधील , संख्येत सहस्रक विभाजक आणतो — 46250 मधून 46,250.00. रुंदी, दशांश, कॉमा — ही त्रयी अहवालांसाठी नेहमी पुरेशी.",
        code: `print("{}-{}".format("Python", "Version"))
print("{:>10}".format(42))
print("{:.1f}".format(3.14159))

bill = 46250
print(f"एकूण रक्कम: ₹{bill:,.2f}")`,
        codeLanguage: "python",
        output: `Python-Version
        42
3.1
एकूण रक्कम: ₹46,250.00`,
      },
      {
        title: "वास्तविक उदाहरण — दुकानाचे बिल",
        content: "दुकानाच्या बिलाचा साधा data: item लॅपटॉप, किंमत 45000 आणि GST 18%. बिल मजकूर म्हणून उभे करायचे असल्यास f-string सर्व काही एकाच ठिकाणी सांधतो.\nf\"किंमत: ₹{cost:,}\" मधील , मुळे 45000 ऐवजी 45,000 दिसते — मोठ्या संख्येचे वाचन सोपे होते.\nGST cost * 0.18 — गणना मजकुरातच: 8100; f\"{gst:,.2f}\" मधून 8,100.00 — कॉमा आणि दशांश दोन्ही.\noutput च्या तिन्ही ओळी बिलाच्या रूपात: वस्तू, किंमत, कर. प्रत्येक रूप फॉरमॅट शैलीचे — कॉमा आणि दशांश दोन्ही सर्वत्र लागतात.",
        code: `item = "लॅपटॉप"
cost = 45000
gst = cost * 0.18
print(f"वस्तू: {item}")
print(f"किंमत: ₹{cost:,}")
print(f"GST: ₹{gst:,.2f}")`,
        codeLanguage: "python",
        output: `वस्तू: लॅपटॉप
किंमत: ₹45,000
GST: ₹8,100.00`,
      },
      {
        title: "वास्तविक उदाहरण — विद्यार्थी नोंदणी पत्र",
        content: "शाळेच्या पत्रात नाव, उंची, वय असे तिन्ही data एकाच वाक्यात येतात — फॉर्म भरलेला data प्रत्यक्ष वाक्यात मिसळण्याचे चांगले उदाहरण.\nname, height, age तीन variable; f\"{name} आज {age} वर्षांची, उंची {height} मीटर\" ही एक ओळ तिन्ही ठिकाणी घालते.\noutput: शीतल आज 24 वर्षांची, उंची 1.6 मीटर — संपूर्ण वाक्य अचूक बसते.\nपत्र, पावती, मराठी संदेश — अनेक-स्थान मजकूर असेच तयार होतो; आतला प्रत्येक {} म्हणजे एक ठिकाण, विसरल्यास चुकीचे मजकूर.\nकारण output मध्ये {} ठिकाणी शब्द आले नाही तर ती जागा मोकळी दिसते — हेच आतापर्यंतचे मुख्य ध्येय.",
        code: `name = "शीतल"
height = 1.6
age = 24
print(f"{name} आज {age} वर्षांची, उंची {height} मीटर")`,
        codeLanguage: "python",
        output: `शीतल आज 24 वर्षांची, उंची 1.6 मीटर`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "प्रारंभाचे f विसरणे — \"नमस्कार {name}!\" असे f शिवाय लिहिल्यास कुरळ्या कोष्टकांसह मजकूर तसाच दिसतो, value भरत नाही; सुरुवातीला f आवश्यक.\nजुळणारी {} स्थाने — format() ला दिलेले data आणि मजकुरातील {} यांची संख्या जुळली पाहिजे; अन्यथा error येतो. मजकुरातच कुरळा कोष्टक हवा असल्यास {{ }} दुहेरी लिहावा.\nदशांश व कॉमा न देणे — {price} हे output 123.456 संपूर्ण देते; {price:.2f} ने नियम दिला की form नेहमी निश्चित.\nटक्का, रुपया अशी चिन्हे expression मध्ये घालणे — ती मजकूर विभागात लिहायची; {} मध्ये फक्त आकड्याची गणना.\nprint च्या output मध्ये दिसणारी प्रत्येक ओळ शब्दांशी तपासा — जुळत नसेल तर नियम बदला; output वाचणे हीच चुका सापडण्याची जागा.",
      },
      {
        title: "प्रयोग — वेगवेगळी रूपे दिसतात",
        content: "रूपे डोळ्यांसमोर उतरवण्यासाठी एकत्र कोड पहा — खाली चार वेगळ्या क्रिया: .2f दशांश नियम, :>20 उजवी रांग, :, कॉमा आणि :.1% टक्केवारी.\nप्रत्येक ओळ एक रूप दाखवते: गुण दोन स्थानांशी, संख्या 20 स्थानांत उजवी, मोठी संख्या कॉमांसह, दशांश टक्केवारी रूपात.\nतपासा — 98.5678 वर .2f = 98.57; 1234567 → 1,234,567; 0.425 → 42.5%.\nहे फरक लहान पण प्रत्यक्ष कामाचे — पावती, बिल, अहवाल सर्व यातीलच आकडे सजवतात; आता score व बाकी value बदलून output पहा.",
        code: `score = 98.5678
print(f"गुण: {score:.2f}")
print(f"रुंद 20: {score:>20}")
print(f"कॉमा: {1234567:,}")
print(f"टक्के: {0.425:.1%}")`,
        codeLanguage: "python",
        output: `गुण: 98.57
रुंद 20:              98.5678
कॉमा: 1,234,567
टक्के: 42.5%`,
      },
      {
        title: "Mini Project — पगार पत्रक",
        content: "वेतन पत्रकाचे तीन आकडे: मूळ वेतन, भत्ता आणि एकूण. base = 25000; भत्ता 30% — houserent = base * 0.30 = 7500; एकूण 32500.\nप्रत्येक ओळ f-string ने सजलेली: ₹{base:,} मधून 25,000; ₹{houserent:,.2f} मधून 7,500.00; ₹{total:,.2f} मधून 32,500.00.\noutput वेतन पत्रकासारखा क्रमबद्ध — साधा, वाचनीय, कोणतीही निरनिराळी चिन्हे नाहीत.\nहाच साचा बिल, GST, पावती यांमध्ये आहे — कॉमा, दशांश आणि रुपया तिन्ही एकत्र. उदा. base किंवा टक्के बदलून भत्ता व एकूण स्वतः बदलतात.",
        code: `base = 25000
houserent = base * 0.30
total = base + houserent
print(f"मूळ वेतन: ₹{base:,}")

print(f"भत्ता: ₹{houserent:,.2f}")
print(f"एकूण: ₹{total:,.2f}")`,
        codeLanguage: "python",
        output: `मूळ वेतन: ₹25,000
भत्ता: ₹7,500.00
एकूण: ₹32,500.00`,
      },
    ],
    practiceQuestions: [
      "f-string मध्ये variable {} मध्ये का लिहितात?",
      "{price:.2f} मधील .2f चा अर्थ?",
      "format() vs f-string कोणती जुनी?",
      "तुमचं नाव व वय f-string ने print करा",
    ],
    quiz: [
      {
        question: "f-string सुरू होते त्या चिन्हाने?",
        options: ["$", "f", "g", "#"],
        correct: 1,
      },
      {
        question: "{num:,.2f} काय देतो?",
        options: ["साधं संख्या", "हजार विभाजक + दोन दशांश", "फक्त दोन दशांश", "काही नाही"],
        correct: 1,
      },
      {
        question: "f-string मध्ये {} कशासाठी?",
        options: ["टिप्पणीसाठी", "variable/expression बसवण्यासाठी", "स्पेससाठी", "error साठी"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एकूण = qty × price. f-string ने item व एकूण ₹ दाखवा.",
      starterCode: `item = "pen"
qty = 3
price = 20.5
total = qty * price
print(f"{item}: ₹{total:.2f}")`,
      expectedOutput: "pen: ₹61.50",
    },
    interviewQuestions: [
      "f-string vs .format() फरक?",
      "{:,} आणि {:.2f} एकत्र कसे वापरतात?",
      "f-string मध्ये calculation करता येते का?",
    ],
    related: ["python-strings", "python-string-methods", "python-print"],
    prev: "python-string-methods",
    next: "python-string-loops",
  },

  {
    slug: "python-string-loops",
    categoryId: "python",
    title: "Strings आणि Loops",
    marathiTitle: "Strings मधून Loop",
    level: "intermediate",
    minutes: 13,
    summary: "String चे मोतिबंध पुनरावृत्तीनं खर्च करा, अक्षरं मोजा, palindrome शोधा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Strings मधून Loop म्हणजे काय?",
        content: "String चे मोतिबंध पुनरावृत्तीनं खर्च करा, अक्षरं मोजा, palindrome शोधा.\nstring ही अक्षरांची मालिका असल्याने for loop ती क्रमाने चालू शकतो — वेगळा काउंटर नको, Python प्रत्येक फेरीत पुढचे अक्षर लूप व्हेरिएबलमध्ये आपोआप देतो.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Strings मधून Loop चे फायदे आणि महत्त्व",
        content: "✓ enumerate चा उपयोग येथेच — सूची तयार करताना क्रम जोडणे, ओळीचा क्रम दाखवणे; क्रम 1 पासून हवा असल्यास enumerate(x, 1) हे दुसरे पॅरामीटर.\n✓ क्रम आणि अक्षर वेगवेगळ्या व्हेरिएबल्समध्ये येतात म्हणून दोघांचे स्वतंत्र उपयोग करता येतात — क्रम स्थानी, अक्षर मजकुरात.\n✓ string वर for loop अक्षर-अक्षर चालवतो — प्रत्येक फेरीत पुढचे अक्षर व्हेरिएबलमध्ये; हा सर्वात महत्त्वाचा पाया.\n✓ in तपासणी boolean देते — अक्षर किंवा substring आहे का; count, replace, split या तयार पद्धतींबरोबर सर्वांचा उपयोग होतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "अक्षरावर अक्षर चालणे",
        content: "string ही अक्षरांची मालिका असल्याने for loop ती क्रमाने चालू शकतो — वेगळा काउंटर नको, Python प्रत्येक फेरीत पुढचे अक्षर लूप व्हेरिएबलमध्ये आपोआप देतो.\nfor letter in \"ABC\": मध्ये पहिल्या फेरीत letter = \"A\", मग \"B\", मग \"C\" — प्रत्येक फेरीत आतली print(letter) धावते, म्हणून output च्या तीन ओळी: A, B, C.\n\"---\" ची print ओळ लूपच्या बाहेर ठेवली — ती एकदाच output होते; लूपचे क्षेत्र इंडेंटवरून कायम ओळखता येते.\nदुसऱ्या लूपमध्ये \"goa\" च्या प्रत्येक अक्षरावर upper() लावले — G, O, A. लूपच्या आत कोणतीही क्रिया प्रत्येक अक्षराला लागू होते.",
        code: `for letter in "ABC":
    print(letter)
print("---")
for letter in "goa":
    print(letter.upper())`,
        codeLanguage: "python",
        output: `A
B
C
---
G
O
A`,
      },
      {
        title: "क्रमासहित — enumerate",
        content: "अक्षरासमवेत तिचा क्रमही हवा असेल तर enumerate ही तयार पद्धत दोन्ही एकत्र देते — प्रत्येक फेरीत (क्रम, अक्षर) अशी जोडी.\nfor idx, letter in enumerate(\"PYTHON\"): मध्ये idx आणि letter वेगवेगळी व्हेरिएबल्स — idx = 0, 1, 2... आणि letter = P, Y, T...\noutput सहा ओळी: \"0 P\" पासून \"5 N\" पर्यंत — क्रम 0 पासून सुरू होतो, हा string चा index नियम.\nenumerate चा उपयोग येथेच — सूची तयार करताना क्रम जोडणे, ओळीचा क्रम दाखवणे; क्रम 1 पासून हवा असल्यास enumerate(x, 1) हे दुसरे पॅरामीटर.",
        code: `for idx, letter in enumerate("PYTHON"):
    print(idx, letter)`,
        codeLanguage: "python",
        output: `0 P
1 Y
2 T
3 H
4 O
5 N`,
      },
      {
        title: "अक्षर तपासणी — in",
        content: "मजकुरात विशिष्ट अक्षरे मोजायची असल्यास loop आणि in तपासणी एकत्र येतात. vowels = \"aeiou\" ही अभिजात यादी; प्रत्येक फेरीत अक्षर त्या यादीत आहे का ते in सांगते.\nकाउंटर count जुळल्याच फेरीत वाढतो — \"education\" मध्ये e, u, a, i, o असे पाच स्वर आढळतात, म्हणून output: स्वर: 5.\nin तपासणीचे उत्तर boolean — True किंवा False; मोजणी, गाळणी, तपासणी या सगळ्या या एकाच चिन्हावर उभे.\nशेवटची ओळ palindrome तपासणी मागील धड्यातीलच — if \"madam\" == \"madam\"[::-1] खरे ठरते आणि \"madam — palindrome!\" output होते; loop व तुलना दोन्हीचा संगम.",
        code: `word = "education"
vowels = "aeiou"
count = 0
for ch in word:
    if ch in vowels:
        count += 1
print("स्वर:", count)
if "madam" == "madam"[::-1]:
    print("madam — palindrome!")`,
        codeLanguage: "python",
        output: `स्वर: 5
madam — palindrome!`,
      },
      {
        title: "वास्तविक उदाहरण — मजकूर आकडेवारी",
        content: "मोठ्या मजकुराची थोडक्यात आकडेवारी — एखादा शब्द कितीदा आला, कोणता भाग बदलायचा, एकूण किती शब्द. असे विश्लेषण string सहित कामाचा नियमित विषय.\ntext.count(\"AAA\") एका तरतुदीने आवर्तन मोजतो — output: AAA कितीदा: 2; count() ही उलटण्याची गणना स्वतः करून घेते.\ntext.replace(\"B\", \"Z\") प्रत्येक B बदलून Z करतो — output: AAA ZZZ AAA CCC; replace प्रत्येक प्रसंगाचे नियोजन करते.\ntext.split() मधून शब्दांची list आणि len() वर एकूण शब्द 4. count, replace, split या तीन तरतुदींचा एकाच मजकुरावर वापर — हीच आकडेवारी साचा म्हणून पुढे सर्वत्र येते.",
        code: `text = "AAA BBB AAA CCC"
print("AAA कितीदा:", text.count("AAA"))
print("B बदलून Z:", text.replace("B", "Z"))
words = text.split()
print("एकूण शब्द:", len(words))`,
        codeLanguage: "python",
        output: `AAA कितीदा: 2
B बदलून Z: AAA ZZZ AAA CCC
एकूण शब्द: 4`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "लूपच्या आत / बाहेर — print किंवा काउंटर वाढवणे लूपच्या आत असले पाहिजे; इंडेंट एक स्थान चुकला तर ओळ एकदाच चालते किंवा लूप परत परत धावतो.\nspace हेही अक्षर — \"goa mopa\" मध्ये space हा एक घटकच; मोजणीत space आला तरी output मध्ये तो अक्षर म्हणून गणला जातो.\nenumerate चा क्रम — तो 0 पासून सुरू होतो; 1 पासून हवा असेल तर enumerate(x, 1) हे दुसरे पॅरामीटर कायम द्यावे.\nकाउंटर रीसेट — count = 0 लूपच्या आत ठेवल्यास प्रत्येक फेरीत नवीन सुरुवात; वाढणारा काउंटर लूपच्या बाहेर स्थापन करा.\noutput मधील कोणती ओळ कोणत्या फेरीची आहे हे नोंदवा — लूप आतील ओळ अनेकदा, बाहेरील एकदा; हा सराव सर्वात जलद चुक शोध उपाय.",
      },
      {
        title: "प्रयोग — क्रम 1 पासून सुरू करा",
        content: "enumerate चा क्रम 0 पासून येतो, पण मानवी सूचीत क्रम 1 पासून हवा असतो. enumerate(names, 1) मधील दुसरा आकडा हेच देतो — पहिल्या फेरीत 1, दुसऱ्या फेरीत 2 असेच.\nवरच्या \"PYTHON\" कोडलाच enumerate(x, 1) घालून पुन्हा चालवा आणि output मधील बदल पहा — फरक फक्त एका पॅरामीटरचा.\nक्रम आणि अक्षर वेगवेगळ्या व्हेरिएबल्समध्ये येतात म्हणून दोघांचे स्वतंत्र उपयोग करता येतात — क्रम स्थानी, अक्षर मजकुरात.\nenumerate हा loop सह क्रम जोडण्याचा सर्वात सोपा साचा — पुढील Mini Project मध्ये तोच वापरणार आहोत.",
      },
      {
        title: "Mini Project — नावांची सूची",
        content: "सूचीतील प्रत्येक नावासाठी क्रम आणि पहिले अक्षर दाखवायचे आहे — names = [\"अनिकेत\", \"अंकिता\", \"सायली\", \"अरविंद\"] या चार नावांची सूची.\nfor i, n in enumerate(names, 1) मध्ये i क्रम (1 पासून) आणि n नाव; n[0] हे नावाचे पहिले अक्षर.\noutput चार ओळी: 1 अनिकेत -> अ, 2 अंकिता -> अ, 3 सायली -> स, 4 अरविंद -> अ — सूची क्रमबद्ध दिसते.\nहा नमुना — क्रम, वस्तू आणि तिचे एक वैशिष्ट्य — याद्या, नावपट्टिका, विक्री रिपोर्ट येथे वापरता येतो; names बदलून output पहा.",
        code: `names = ["अनिकेत", "अंकिता", "सायली", "अरविंद"]
for i, n in enumerate(names, 1):
    print(i, n, "->", n[0])`,
        codeLanguage: "python",
        output: `1 अनिकेत -> अ
2 अंकिता -> अ
3 सायली -> स
4 अरविंद -> अ`,
      },
      {
        title: "धड्याचे सार",
        content: "string वर for loop अक्षर-अक्षर चालवतो — प्रत्येक फेरीत पुढचे अक्षर व्हेरिएबलमध्ये; हा सर्वात महत्त्वाचा पाया.\nenumerate() क्रम आणि अक्षर एकत्र देते; दुसरे पॅरामीटर 1 पासून क्रम सुरू करू शकते.\nin तपासणी boolean देते — अक्षर किंवा substring आहे का; count, replace, split या तयार पद्धतींबरोबर सर्वांचा उपयोग होतो.\nकाउंटर लूपच्या आत वाढवा, तो रीसेट मात्र बाहेर ठेवा; इंडेंटवरून लूपचे क्षेत्र ठरते — हे दोन नियम लक्षात ठेवा.",
      },
    ],
    practiceQuestions: [
      "for loop string वर कसे चालतो?",
      "enumerate() काय देतो?",
      "substring check कसा करतात?",
      "एका शब्दातील अक्षरांची बेरीज अक्षरwise मोजा",
    ],
    quiz: [
      {
        question: "for ch in \"abc\": मध्ये ch काय असेल?",
        options: ["list", "string reference", "एक अक्षर", "integer"],
        correct: 2,
      },
      {
        question: "enumerate() काय देतो?",
        options: ["फक्त value", "(index, value) जोड्या", "फक्त index", "dict"],
        correct: 1,
      },
      {
        question: "एखादा substring मजकुरात आहे का ते कसे तपासता?",
        options: ["count()", "in", "find()", "सगळं"],
        correct: 3,
      },
    ],
    challenge: {
      prompt: "word = 'education' मध्ये स्वर (a,e,i,o,u) किती आहेत ते मोजा.",
      starterCode: `word = "education"
vowels = "aeiou"
count = sum(1 for ch in word if ch.lower() in vowels)
print(count)`,
      expectedOutput: "5",
    },
    interviewQuestions: [
      "enumerate सर्व loop मध्ये कसा वापरायचा?",
      "space अक्षर म्हणून count होईल का?",
      "palindrome function कशी लिहाल?",
    ],
    related: ["python-string-methods", "python-for-loop", "python-break-continue-pass"],
    prev: "python-string-formatting",
    next: "python-files",
  },

  {
    slug: "python-files",
    categoryId: "python",
    title: "Files वाचणे व लिहिणे",
    marathiTitle: "Files - वाचणे व लिहिणे",
    level: "intermediate",
    minutes: 16,
    summary: "टेक्स्ट फाइल मध्ये data कसा साठवायचा आणि परत कसा वाचायचा?",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Files - वाचणे व लिहिणे म्हणजे काय?",
        content: "टेक्स्ट फाइल मध्ये data कसा साठवायचा आणि परत कसा वाचायचा?.\nचालू program मधील variable चे मूल्य program संपल्यावर नाहीसे होते; पुढील रनला ते उपलब्ध नसते.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },

      {
        title: "फाइल का गरजेची",
        content: "चालू program मधील variable चे मूल्य program संपल्यावर नाहीसे होते; पुढील रनला ते उपलब्ध नसते. फाइल हा मूल्यांचा टिकाऊ माध्यम — program थांबला तरी मजकूर जतन राहतो.\nफाइलचा दैनंदिन वापर: नोट्स, याद्या, सेटिंग्ज, गुणांच्या नोंदी, data वाचणे व लिहिणे.\nopen(path, mode) हे फाइलचे मुख्य प्रवेशद्वार: \"w\" लिहू (जुने पुसून), \"a\" जोडू, \"r\" वाचू (default). मोड आधी ठरवून सांगितले तर program नेहमी स्पष्ट वागतो.\nwith ... as f: ही रचना फाइल वापरल्यावर आपोआप बंद करते — हाताने व्यवस्थापन करताना होणाऱ्या चुका टाळण्याचा हा सर्वोत्तम मार्ग.",
      },
      {
        title: "लिहा आणि वाचा",
        content: "f.write() फाइलमध्ये मजकूर लिहितो आणि f.read() संपूर्ण मजकूर परत वाचतो. open(\"study.txt\", \"w\") ने study.txt लिहायला तयार होते.\nप्रत्येक write शेवटी \nजोडले — मजकुरातील string मध्ये पुढील ओळ दर्शवणारे; output मध्ये data.strip() ने कडांतील नवीन ओळी काढल्या, म्हणून दोन ओळी स्वच्छ दिसतात.\nwith ब्लॉक संपल्यावर फाइल आपोआप बंद होते — आधी लिहीण्याचा with, मग वाचण्याचा with; दोन्ही स्वतंत्र व स्पष्ट.\nलिहिणे आणि वाचणे हे फाइल कामाचे नित्य चक्र — नोट्स जतन, शाळेतील रेकॉर्ड, data साठवणे सर्व यावर अवलंबून.",
        code: `with open("study.txt", "w") as f:
    f.write("पहिली ओळ
")
    f.write("दुसरी ओळ
")

with open("study.txt") as f:
    data = f.read()
print(data.strip())`,
        codeLanguage: "python",
        output: `पहिली ओळ
दुसरी ओळ`,
      },
      {
        title: "ओळ-ओळ वाचणे",
        content: "फाइल संपूर्ण वाचण्याऐवजी ओळ-ओळ प्रक्रिया करायची असते — for line in f: हा सर्वात सोपा मार्ग; Python फाइलमधील प्रत्येक ओळ लूपला पुरवतो.\nmarks.txt मध्ये 80, 90, 70 या तीन संख्या, प्रत्येक नवीन ओळीवर. ओळ वाचल्यावर int(line.strip()) — कडांतील नवीन ओळी काढून संख्या मिळते.\ntotal प्रत्येक फेरीत वाढतो — 80 + 90 + 70 = 240; हाच output देतो (एकूण: 240).\nहा pattern संख्यांच्या, नावांच्या रेकॉर्डवर गणना करण्यासाठी — मोठी फाइल असली तरी ओळ-ओळ करणे स्मृती न कंटाळता काम करते.",
        code: `with open("marks.txt", "w") as f:
    f.write("80
90
70
")

total = 0
with open("marks.txt") as f:
    for line in f:
        total += int(line.strip())
print("एकूण:", total)`,
        codeLanguage: "python",
        output: `एकूण: 240`,
      },
      {
        title: "writelines — अनेक ओळी एका फेरीत",
        content: "f.write() एकावेळी एक string लिहितो; अनेक ओळी लिहायच्या असल्यास f.writelines([...]) एकदाच सूची घेतो — names च्या सूचीत तीन नावे.\nप्रत्येक घटकाला शेवटी \nजोडलेले असते — नाहीतर पुढील नाव पहिल्याच्या शेवटी चिकटते.\nपरत वाचताना [l.strip() for l in f] — प्रत्येक ओळ कडा साफ करून सूचीत — output: ['अनिता', 'ओंकार', 'सौरभ'] या तिन्ही नावे.\nlen(lines) मधून एकूण नावे 3 — फाइलमधील मजकूर data संरचनेत उचलण्याचे हे उदाहरण; सूची मध्ये आता मोजणी, शोध शक्य.",
        code: `with open("names.txt", "w") as f:
    f.writelines(["अनिता
", "ओंकार
", "सौरभ
"])

with open("names.txt") as f:
    lines = [l.strip() for l in f]
print(lines)
print("एकूण नावे:", len(lines))`,
        codeLanguage: "python",
        output: `['अनिता', 'ओंकार', 'सौरभ']
एकूण नावे: 3`,
      },
      {
        title: "वास्तविक उदाहरण — खरेदी यादी",
        content: "किराणा दुकानाची यादी फाइलवर ठेवल्यावर ती पुन्हा वाचून क्रमाने दाखवता येते — todo.txt मध्ये तीन वस्तू, प्रत्येक नवीन ओळीवर.\nf.read().splitlines() संपूर्ण मजकूर ओळींमध्ये फोडतो — splitlines() शेवटचा \nटाकून यादी स्वच्छ ['दूध', 'भाजी', 'ब्रेड'] बनवते.\nenumerate(todo, 1) मागील धड्यातीलच — क्रम 1 पासून आणि वस्तू एकत्र; output मध्ये 1 दूध, 2 भाजी, 3 ब्रेड अशी यादी.\nशीर्षक \"खरेदीची यादी:\" लूपच्या बाहेर — एकदाच output; नंतरच्या ओळी लूपने क्रमवार. यादी सादर करण्याचा हा संपूर्ण तर्क.",
        code: `with open("todo.txt", "w") as f:
    f.write("दूध
भाजी
ब्रेड
")

with open("todo.txt") as f:
    todo = f.read().splitlines()
print("खरेदीची यादी:")
for i, item in enumerate(todo, 1):
    print(i, item)`,
        codeLanguage: "python",
        output: `खरेदीची यादी:
1 दूध
2 भाजी
3 ब्रेड`,
      },
      {
        title: "मराठी मजकूर आणि encoding",
        content: "फाइलमध्ये मराठी अक्षरे कधी विचित्र दिसतात — encoding हा नियम सांगतो की अक्षर कोणत्या bytes मध्ये साठवायचे. मराठीसाठी utf-8 हा व्यापक मानक; Python 3 मध्ये तोच default.\nतरीही मराठी भरपूर असल्यास किंवा इतर software ने वाचायचे असल्यास encoding=\"utf-8\" स्पष्ट लिहण्याची सवय ठेवा — open(..., encoding=\"utf-8\").\nnote.txt मध्ये note लिहून encoding सह वाचल्यावर output: आज Python सुरू केले! — अक्षरे वाक्यात साफ.\nएकच नियम — लिहिताना आणि वाचताना समान encoding पाठवले तर मराठी कथा, नोंदी, फॉर्म data सर्व सुरक्षित राहतात.",
        code: `note = "आज Python सुरू केले!"
with open("note.txt", "w", encoding="utf-8") as f:
    f.write(note + "
")

with open("note.txt", encoding="utf-8") as f:
    print(f.read().strip())`,
        codeLanguage: "python",
        output: `आज Python सुरू केले!`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "\"w\" मोड जुनी फाइल पुसतो — write साठी open केले की आधीचा संपूर्ण मजकूर नष्ट; जतन हवा असेल तर \"a\" (जोडणे) किंवा वेगळे नाव.\nवाचताना \"w\" मोड — open(..., \"w\") मिळाल्यावर read() केल्यास UnsupportedOperation; वाचण्यासाठी \"r\" किंवा default मोड वापरा.\nनवीन ओळ विसरणे — दोन नावे \nशिवाय लिहिली तर ती एकच ओळ बनतात; writelines करताना प्रत्येक घटकाच्या शेवटी \nतपासा.\nफाइल बंद न करणे — with मध्ये आपोआप होते; हाताने open केली आणि f.close() केले नाही तर फाइल इतर प्रक्रिया लॉक राहू शकते.\nफाइल वाचलेले नेहमी string — int() किंवा float() ने बदलल्याशिवाय गणना शक्य नाही; marks उदाहरणामध्ये हेच घडले असे तपासून पहा.",
      },
      {
        title: "धड्याचे सार",
        content: "open(path, mode) — \"w\" लिहू (जुने पुसून), \"a\" जोडू, \"r\" वाचू; with ... as f ही फाइल आपोआप बंद करणारी सुरक्षित रचना.\nf.write() मजकूर लिहितो, f.read() संपूर्ण वाचतो; for line in f ओळ-ओळ, f.writelines(list) अनेक ओळी एका फेरीत.\nमराठीसाठी encoding=\"utf-8\" हे लिहिताना आणि वाचताना समान ठेवा.\nफाइलमधून वाचलेला मजकूर अजून string असतो — int()/float() ने खरी संख्या बनवल्याशिवाय गणित शक्य नाही.",
      },
    ],
    practiceQuestions: [
      "\"w\" मोड करीत काय होते?",
      "with statement चा फायदा काय?",
      "ओळ धरून ओळ कशी वाचतात?",
      "attachment: list मधील प्रत्येक आयटम स्वतःच्या ओळीत लिहा",
    ],
    quiz: [
      {
        question: "जुनी सामग्री मिटून नवीन लिहिणारा मोड?",
        options: ["\"a\"", "\"w\"", "\"r\"", "\"x\""],
        correct: 1,
      },
      {
        question: "with statement काय करतो?",
        options: ["फाइल कधीही बंद नाही करत", "काम झाले की आपोआप बंद करतो", "फाइल हटवतो", "फाइल सुरू करतो"],
        correct: 1,
      },
      {
        question: "फाइलच्या शेवटी नवीन ओळ जोडणारा मोड अगोदर?",
        options: ["\"r\"", "\"w\"", "\"a\"", "\"r+\""],
        correct: 2,
      },
    ],
    challenge: {
      prompt: "\"msg.txt\" मध्ये तर input ठेवा आणि परत वाचा.",
      starterCode: `with open("msg.txt", "w") as f:
    f.write("मराठी शिका\\n")

with open("msg.txt") as f:
    print(f.read().strip())`,
      expectedOutput: "मराठी शिका",
    },
    interviewQuestions: [
      "\"w\" व \"a\" मधील फरक?",
      "with context manager म्हणजे काय?",
      "फाइल मोठी असली तर ओळ धरून वाचण्याचा फायदा?",
    ],
    related: ["python-string-loops", "python-json"],
    prev: "python-string-loops",
    next: "python-json",
  },

  {
    slug: "python-json",
    categoryId: "python",
    title: "JSON - Data आदानप्रदान",
    marathiTitle: "JSON - Data शेअरिंग",
    level: "intermediate",
    minutes: 14,
    summary: "दोन programs/websites मधील सामान्य data format — JSON कसा वापरतात.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "JSON - Data शेअरिंग म्हणजे काय?",
        content: "दोन programs/websites मधील सामान्य data format — JSON कसा वापरतात.\nदोन programs ने data एकमेकांना देण्यासाठी एक सामाईक भाषा हवी — Python, JavaScript, डेटाबेस सर्व समजतील अशी.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? JSON - Data शेअरिंग चे फायदे आणि महत्त्व",
        content: "\"JSON - Data शेअरिंग\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "JSON म्हणजे data ची सामाईक भाषा",
        content: "दोन programs ने data एकमेकांना देण्यासाठी एक सामाईक भाषा हवी — Python, JavaScript, डेटाबेस सर्व समजतील अशी. तीच भाषा म्हणजे JSON; ती dict आणि list ची रचना मजकुराच्या स्वरूपात लिहिते.\nदिसायला Python च्या dict सारखाच — पण नियम काटेकोर: key आणि string दुहेरी quotes (\"\") ने; single quotes किंवा शेवटी कॉमा चालत नाही.\nअशी रचना error-free मिसळण्यासाठी json module च्या तयार तरतुदी: json.dumps() Python रचना → JSON मजकूर, आणि json.loads() JSON मजकूर → Python रचना.\nम्हणूनच JSON सर्वत्र — API ची उत्तरे, सेटिंग्ज फाइल, data जतन — भाषेनुसार वेगळी रचना नको.",
      },
      {
        title: "dumps आणि loads — मजकूर आणि परत",
        content: "student हा विद्यार्थ्याचा dict — नाव आणि गुण. json.dumps(student) त्याची JSON मजकुरात रूपांतरित करतो — output: {\"name\": \"प्रिया\", \"marks\": 92}.\nensure_ascii=False न दिल्यास मराठी अक्षरे \\uXXXX असा coded मजकूर होतात; ensure_ascii=False दिल्यावर प्रिया थेट दिसते — मराठी data साठी हा नियम येथेच नमूद आहे.\ndata = '{\"name\": \"प्रिया\", \"marks\": 92}' ही मजकूर — json.loads() ती मांडून Python dict बनवतो; back[\"name\"] आणि back[\"marks\"] ने निकाल प्रिया - 92 मिळतो.\ndict → JSON → dict असा संपूर्ण प्रवास या कोडमध्ये; API व्यवस्था दर सेकंदाला असा प्रवास करतात.",
        code: `import json
student = {"name": "प्रिया", "marks": 92}
print(json.dumps(student, ensure_ascii=False))

data = '{"name": "प्रिया", "marks": 92}'
back = json.loads(data)
print(back["name"], "-", back["marks"])`,
        codeLanguage: "python",
        output: `{"name": "प्रिया", "marks": 92}
प्रिया - 92`,
      },
      {
        title: "सुंदर मांडणी — indent",
        content: "items ही दोन dict ची list — प्रत्येक dict मध्ये item आणि qty. json.dumps(items, indent=2) मुळे रचनेचा प्रत्येक थर रिकाम्या जागांनी उघडतो — output मध्ये list, dict, key प्रत्येक स्वतंत्र ओळीवर.\nindent दिल्यावर JSON वाचायला सोपा; न दिल्यास सर्व काही एका लांब ओळीत — अवघड.\njson.loads(text)[0][\"item\"] — एका ओळीत तीन पायऱ्या: loads ने मजकूर रचनेत, त्यातील पहिला घटक, आणि त्यावरील \"item\" — output पहिला item: चहा.\ndumps बाहेर (मजकूर), loads आत (रचना), indent वाचणाऱ्या माणसासाठी — या तीन पर्यायांची जोडी प्रत्येक वेळी लागते.",
        code: `import json
items = [
    {"item": "चहा", "qty": 2},
    {"item": "कॉफी", "qty": 1},
]
text = json.dumps(items, ensure_ascii=False, indent=2)
print(text)
print("पहिला item:", json.loads(text)[0]["item"])`,
        codeLanguage: "python",
        output: `[
  {
    "item": "चहा",
    "qty": 2
  },
  {
    "item": "कॉफी",
    "qty": 1
  }
]
पहिला item: चहा`,
      },
      {
        title: "फाइलशी बोलणे — dump आणि load",
        content: "सेटिंग्ज फाइलवर जतन करायच्या असल्यास json.dump(data, f) — हा d नॉट dumps — फाइलला थेट मजकूर लिहितो; फाइल आधी open ने तयार केली असते.\nवाचताना json.load(f) — n नॉट loads — फाइलमधून थेट Python रचना बनवतो. settings.json मध्ये तीन सेटिंग्ज: theme, language, fontSize.\nloaded[\"theme\"] आणि loaded[\"language\"] output देतो — थीम: dark आणि भाषा: mr; फाइलवरून data परत जिवंत झाला.\ndump/load फक्त फाइलसाठी आणि dumps/loads फक्त मजकुरासाठी — ही तिन्ही नावे कधीही मिसळू नयेत; हाच फरक या कोडमधून स्पष्ट दिसतो.",
        code: `import json
settings = {"theme": "dark", "language": "mr", "fontSize": 16}
with open("settings.json", "w") as f:
    json.dump(settings, f)

with open("settings.json") as f:
    loaded = json.load(f)
print("थीम:", loaded["theme"])
print("भाषा:", loaded["language"])`,
        codeLanguage: "python",
        output: `थीम: dark
भाषा: mr`,
      },
      {
        title: "roundtrip — मजकूर आणि परत अखंड",
        content: "profile ही नेस्टेड रचना — आत एक list. json.dumps(profile) मुळे ती एकाच मजकुरात येते: {\"user\": \"marathi_dev\", \"level\": 4, \"skills\": [\"python\", \"web\"]}.\nहाच मजकूर json.loads ने पुन्हा Python रचनेत येतो — सर्व घटक समान क्रम व state सह. याला roundtrip म्हणतात — बाहेर गेलेला data परत अखंड येतो.\nout[\"skills\"][0] म्हणजे \"python\" आणि out[\"skills\"][1] म्हणजे \"web\" — output: python - web.\nroundtrip ही data ची परीक्षा — नेस्टेड रचनेचा क्रम सुरक्षित राहतो का हे तपासते; JSON च्या व्यवहारातील अभिजात मूल्य हेच.",
        code: `import json
profile = {"user": "marathi_dev", "level": 4, "skills": ["python", "web"]}
print(json.dumps(profile))
out = json.loads(json.dumps(profile))
print(out["skills"][0], "-", out["skills"][1])`,
        codeLanguage: "python",
        output: `{"user": "marathi_dev", "level": 4, "skills": ["python", "web"]}
python - web`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "dumps आणि loads फेरफार — dumps रचना → मजकूर, loads मजकूर → रचना; उलट केले तर typing mismatch ची अडचण येते.\nsingle quotes — {'name': 'प्रिया'} हा JSON नाही; json.loads ला दुहेरी quotes (\"\") असलेला मजकूर हवा.\ntrailing comma — JSON मध्ये शेवटच्या item नंतर कॉमा काढावा; Python मध्ये तो चालतो, पण JSON चे नियम काटेकोर.\nensure_ascii न देताच मराठी — default मराठी \\uXXXX coded मजकुरात बदलते; ensure_ascii=False दिल्यास थेट अक्षरे दिसतात.\nटाईपचा ताळमेळ — JSON मध्ये संख्या number, मजकूर \"...\" असतो; tuple रचना JSON मध्ये नाही — dump करण्यापूर्वी रचनेचा प्रकार पडताळा घ्या.",
      },
      {
        title: "प्रयोग — ensure_ascii चा फरक",
        content: "हा लहान प्रयोग ensure_ascii चा फरक उघड करतो: json.dumps(d) चे default output मराठी अक्षरे \\uXXXX कोडमध्ये बदलते; ensure_ascii=False सह तेच अक्षरे थेट दिसतात.\nपहिल्या print मध्ये \"नाव\" आणि \"प्रिया\" दोन्ही \\u कोडमध्ये; दुसऱ्या print मध्ये दोन्ही खरे अक्षरे — दोन ओळी फरक स्पष्ट दाखवतात.\nहेच मजकूर loads ने परत वाचला त्या रचना बदलत नाही — फक्त दृश्य स्वरूप वेगळे.\nमराठी data, फॉर्म, API — जिथे कुठे मजकूर पाठवला तिथे हा फरक सतत लागतो; ensure_ascii=False हा मराठीसाठी नियम.",
        code: `import json
d = {"नाव": "प्रिया"}
print(json.dumps(d))
print(json.dumps(d, ensure_ascii=False))`,
        codeLanguage: "python",
        output: `{"\\u0928\\u093e\\u0935": "\\u092a\\u094d\\u0930\\u093f\\u092f\\u093e"}
{"नाव": "प्रिया"}`,
      },
      {
        title: "Mini Project — संपर्क यादी",
        content: "संपर्क यादी फाइलवर जतन करायची — contacts म्हणजे दोन व्यक्तींची list; प्रत्येक व्यक्ती dict — नाव व फोन.\njson.dump(contacts, f, ensure_ascii=False) ने मराठी नावे थेट फाइलवर लिहिली; json.load(f) ने ती परत वाचली — मजकूर आणि रचना दोन्ही सुरक्षित.\nfor c in data: प्रत्येक संपर्क क्रमाने output — आदित्य - 9876543210 आणि सानिया - 9123456789.\nहाच साचा ग्राहक यादी, नोंदणी, इतिहास — dict रचना फाइलवर जाऊन परत येते; अशी साठवण program ला दीर्घ जीवन देते.",
        code: `import json
contacts = [
    {"name": "आदित्य", "phone": "9876543210"},
    {"name": "सानिया", "phone": "9123456789"},
]
with open("contacts.json", "w") as f:
    json.dump(contacts, f, ensure_ascii=False)

with open("contacts.json") as f:
    data = json.load(f)
for c in data:
    print(c["name"], "-", c["phone"])`,
        codeLanguage: "python",
        output: `आदित्य - 9876543210
सानिया - 9123456789`,
      },
    ],
    practiceQuestions: [
      "dumps व loads फरक?",
      "ensure_ascii=False कडे काय होते?",
      "JSON मधील quotes कोणत्या?",
      "dict ला JSON फाइल मध्ये कसे साठवता?",
    ],
    quiz: [
      {
        question: "Python dict → JSON string कोणते?",
        options: ["json.loads", "json.dumps", "json.read", "str(dict)"],
        correct: 1,
      },
      {
        question: "JSON मधील values ची quotes?",
        options: ["single", "double", "कोणतीही", "backtick"],
        correct: 1,
      },
      {
        question: "मराठी थेट दिसण्यासाठी कोणता पॅराम?",
        options: ["indent", "ensure_ascii=False", "sort_keys", "separators"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "dict मधून b value extract करा व print करा.",
      starterCode: `import json
d = {"a": 1, "b": 2}
s = json.dumps(d)
print(json.loads(s)["b"])`,
      expectedOutput: "2",
    },
    interviewQuestions: [
      "JSON ही भाषा आहे का format आहे?",
      "dump vs dumps कधी कोणाला वापरतात?",
      "API response मधून data कसा extract करता?",
    ],
    related: ["python-files", "python-dicts", "python-exceptions"],
    prev: "python-files",
    next: "python-exceptions",
  },

  {
    slug: "python-exceptions",
    categoryId: "python",
    title: "Exceptions - चुकांचे व्यवस्थापन",
    marathiTitle: "Exceptions - चुका हाताळणे",
    level: "intermediate",
    minutes: 15,
    summary: "Program ठोठावतोय? try-except ने चुका नियंत्रित करा आणि crash टाळा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Exceptions - चुका हाताळणे म्हणजे काय?",
        content: "Program ठोठावतोय? try-except ने चुका नियंत्रित करा आणि crash टाळा.\nसामान्य program मध्ये error आल्यास तो चालणे थांबवतो आणि संपतो — वापरकर्त्याला कोणताही निकाल न देता.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },

      {
        title: "त्रुटी रोखण्याची गरज",
        content: "सामान्य program मध्ये error आल्यास तो चालणे थांबवतो आणि संपतो — वापरकर्त्याला कोणताही निकाल न देता. try/except हा सुरक्षा घटक: प्रयत्न करा, अडचण आल्यास हाताळा.\ntry मध्ये जोखमीच्या ओळी आणि except मध्ये त्या error ची व्यवस्थापन. error आलाच नाही तर except सोडला जातो आणि program पुढे धावतो.\nerror टाळण्यासाठी आधी तपासणे शक्य असते — पण data नेहमी विश्वासार्ह नसतो; म्हणून try/except हे प्रत्यक्ष प्रणालीचा पाया.\nया धड्यात सर्वात सामान्य त्रुटी आणि त्यांचे नेमके व्यवस्थापन पाहू — प्रत्येक उदाहरण output सह कार्यरत.",
      },
      {
        title: "शून्याने भाग — ZeroDivisionError",
        content: "10 / 0 हे गणित शक्य नाही — Python ZeroDivisionError देतो. ती ओळ try मध्ये ठेवल्यास error program थांबवत नाही; except ZeroDivisionError त्याची व्यवस्थापन करतो.\nexcept मधील print output: शून्याने भागता येत नाही. त्यानंतरची बाहेरची ओळ — कार्यक्रम चालू राहतो — try सोडून program पुढे चालल्याचे दाखवते.\nफरक इतकाच — error आला तेवढ्यात program संपला नाही; त्रुटी रोखली गेली आणि पुढील ओळी धावल्या.\noutput च्या दोन्ही ओळी क्रमाने — पहिली except मधून, दुसरी try च्या बाहेरील ओळीतून.",
        code: `try:
    ans = 10 / 0
except ZeroDivisionError:
    print("शून्याने भागता येत नाही")
print("कार्यक्रम चालू राहतो")`,
        codeLanguage: "python",
        output: `शून्याने भागता येत नाही
कार्यक्रम चालू राहतो`,
      },
      {
        title: "else आणि finally — अतिरिक्त क्रम",
        content: "try मध्ये error आला नाही तर else block चालतो — येथे 10 / 2 यशस्वी, म्हणून उत्तर: 5.0 हे else मधून output. else फक्त error नसताना चालतो.\nfinally मधील कोड दोन्ही स्थितींत चालतो — error आला नाही तरी, आला तरी; फाइल बंद करणे, नोंदणी साफ करणे असे नियोजन त्यात ठेवतात.\nक्रम असा: try → (error नसेल तर) else → finally; error असेल तर except → finally.\nfinally कधीही सुटत नाही म्हणून तो सर्वाधिक खात्रीचा; output मध्ये उत्तर: 5.0 आणि हे नेहमी धावते — दोन्ही ओळी.",
        code: `try:
    ans = 10 / 2
except ZeroDivisionError:
    print("error")
else:
    print("उत्तर:", ans)
finally:
    print("हे नेहमी धावते")`,
        codeLanguage: "python",
        output: `उत्तर: 5.0
हे नेहमी धावते`,
      },
      {
        title: "नेमका error प्रकार",
        content: "error चे अनेक प्रकार असतात — प्रत्येकाला विशिष्ट नाव. खराब JSON मजकूर → json.JSONDecodeError; अंक नसलेला मजकूर → ValueError. except मध्ये नेमका प्रकार दिल्यास त्याच घटनेचे व्यवस्थापन होते.\nraw = '{\"name\":' हा अपूर्ण JSON — json.loads अडतो; except json.JSONDecodeError मधून JSON चुकीचा आहे output.\nint(\"abc\") ला \"abc\" हा अंक नाही — ValueError; except ValueError मधून हे संख्या नाही! output.\nनेमका प्रकार लिहिल्यावर फक्त तोच error हाताळला जातो; इतर प्रकार मात्र तसेच पुढे जातात.",
        code: `import json
raw = '{"name":'
try:
    d = json.loads(raw)
except json.JSONDecodeError:
    print("JSON चुकीचा आहे")

try:
    num = int("abc")
except ValueError:
    print("हे संख्या नाही!")`,
        codeLanguage: "python",
        output: `JSON चुकीचा आहे
हे संख्या नाही!`,
      },
      {
        title: "function मध्ये try — divide",
        content: "try/except हे function मध्येही काम करते — divide(a, b) मध्ये try आत आणि error मध्ये return परत. फक्त खडबडीत जागी टाकले नाही.\ndivide(10, 2) यशस्वी — 5.0 return; divide(10, 0) अडचण — except मधील शून्याने भागू नका! return.\nअशा function चा फायदा — चुकीचा data आला तरी function तुटत नाही; परत आलेले message इतर code वापरू शकतो.\noutput च्या दोन ओळी — 5.0 आणि शून्याने भागू नका! — प्रत्येक call चा स्वतंत्र return.",
        code: `def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "शून्याने भागू नका!"

print(divide(10, 2))
print(divide(10, 0))`,
        codeLanguage: "python",
        output: `5.0
शून्याने भागू नका!`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "खूप सैल except — बिननावाचा except (किंवा except Exception) प्रत्येक error गिळतो आणि खरे कारण लपते; नेमका प्रकार लिहा आणि फक्त तोच हाताळा.\ntry मध्ये खूप ओळी — कोणती ओळ अडली हे कळत नाही; फक्त जोखमीची ओळ try मध्ये ठेवा, बाकीचे बाहेर.\nexcept मध्ये pass — error दिसत नाही व कारणही सापडत नाही; किमान print करून नोंदवा.\nfinally मध्ये return — try/except चा खरा return गायब होतो; finally फक्त स्वच्छतेसाठी, तिथून return नको.\nआधी तपासणे शक्य असेल तर ते करा — input व data आधी नियंत्रणात; try/except हा शेवटचा पर्याय म्हणून ठेवा.",
      },
      {
        title: "प्रयोग — चुकीचा input रोखणे",
        content: "input ने मिळालेला data मजकूर असतो — int() ने संख्येत बदलतो, पण data चुकीचा असल्यास error येतो. get_number(x) हे नेमके हेच व्यवस्थापित करतो.\nint(x) अडकण्याच्या सर्व संधी — TypeError आणि ValueError एकत्र दिल्या; get_number दोन्ही रोखतो आणि None परत करतो.\noutput च्या तीन ओळी: 24 (अंकी मजकूर कामासाठी), None (अवैध मजकूर \"24a\"), 3 (number थेट) — प्रत्येक स्थितीचा निकाल.\nNone म्हणजे Python चे \"काही नाही\" मूल्य; None parat आले की call करणाऱ्याला समजते — data अस्सल नाही.",
        code: `def get_number(x):
    try:
        return int(x)
    except (TypeError, ValueError):
        return None

print(get_number("24"))
print(get_number("24a"))
print(get_number(3))`,
        codeLanguage: "python",
        output: `24
None
3`,
      },
      {
        title: "धड्याचे सार",
        content: "try मध्ये जोखमीच्या ओळी, except मध्ये नेमक्या error चे व्यवस्थापन; error आला नाही तर program पुढे चालतो.\nelse फक्त error नसल्यास चालतो, finally दोन्ही स्थितींत — finally नेहमी पक्का.\nerror प्रकार — ZeroDivisionError, ValueError, JSONDecodeError — प्रत्येकाला नेमका except वापरा.\ntry/except function मध्ये ठेवून सुरक्षित function बनवा; input आधी तपासणे हे पहिले, try/except हा शेवटचा पर्याय.",
      },
    ],
    practiceQuestions: [
      "try-except चा उद्देश?",
      "else कधी धावतो?",
      "finally नेहमी का धावतो?",
      "type योग्य not integer — स्वतः error देणारी function लिहा",
    ],
    quiz: [
      {
        question: "error आल्यावर धावणारा ब्लॉक?",
        options: ["try", "except", "else", "finally"],
        correct: 1,
      },
      {
        question: "नेहमी धावणारा ब्लॉक?",
        options: ["try", "except", "else", "finally"],
        correct: 3,
      },
      {
        question: "स्वतः error टाकण्यासाठी?",
        options: ["throw", "raise", "send", "catch"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "safe_int: '42' → 42, चुकीची string → 0",
      starterCode: `def safe_int(s):
    try:
        return int(s)
    except ValueError:
        return 0

print(safe_int("42"))
print(safe_int("abcd"))`,
      expectedOutput: "42\n0",
    },
    interviewQuestions: [
      "bare except वाईट का?",
      "else vs finally फरक?",
      "raise कधी वापरतात?",
    ],
    related: ["python-json", "python-modules", "python-functions"],
    prev: "python-json",
    next: "python-modules",
  },

  {
    slug: "python-modules",
    categoryId: "python",
    title: "Modules व import",
    marathiTitle: "Modules - पूर्वनिर्मित साधने",
    level: "intermediate",
    minutes: 15,
    summary: "math, random, os... तयार module ला import करून आपल्या code मध्ये वापरा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Modules - पूर्वनिर्मित साधने म्हणजे काय?",
        content: "math, random, os... तयार module ला import करून आपल्या code मध्ये वापरा.\nप्रत्येक क्रिया सुरुवातीपासून लिहिण्याऐवजी तयार संहिता वापरता येते — module म्हणजे अशा तयार क्रियांचा संग्रह.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Modules - पूर्वनिर्मित साधने चे फायदे आणि महत्त्व",
        content: "✓ गरजेप्रमाणे छोटे module निवडा — math आणि random दोन्ही पुरेसे; मोठे लादण्याची गरज नाही.\n✓ seed दिल्याने output पुन्हा पुन्हा सारखाच राहतो — प्रयोग व पडताळणी सोयीची; नेहमी वेगळा निकाल हवा असेल तर seed काढा.\n✓ import math च्या ऐवजी फक्त गरजेच्या क्रिया आणता येतात: from math import sqrt, factorial — नंतर math.\n✓ फक्त गरजेचे module आणि नेमक्या नावांनी import करा; प्रत्येक कोडचे output तपासणे सवय लावा.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "module म्हणजे तयार toolbox",
        content: "प्रत्येक क्रिया सुरुवातीपासून लिहिण्याऐवजी तयार संहिता वापरता येते — module म्हणजे अशा तयार क्रियांचा संग्रह. math मध्ये गणिती क्रिया, random मध्ये निरनिराळी निवड — दोन्ही Python च्या standard library मध्ये.\nimport math अशी ओळ लिहिल्यावर program ला math module उपलब्ध होते — आतल्या क्रिया math.sqrt() अशा module च्या नावासह वापरल्या जातात.\nimport न करता थेट sqrt() वापरल्यास NameError — module प्रथम नोंदणी करावी लागते.\nगरजेप्रमाणे छोटे module निवडा — math आणि random दोन्ही पुरेसे; मोठे लादण्याची गरज नाही.",
      },
      {
        title: "import math — पहिली गणिते",
        content: "math.sqrt(81) धन वर्गमूळ देते — 9.0. math.floor(3.7) खालचा पूर्णांक — 3; math.ceil(3.2) वरचा पूर्णांक — 4. floor खाली, ceil वर — हा जोडगोळी नेहमी लक्षात ठेवा.\nround(math.pi, 3) मध्ये pi हा module चा स्थिरांक — 3.14159... ला तीन दशांशांपर्यंत 3.142.\nrandom.seed(12) निवड स्थिर करते; त्यानंतर random.randint(1, 6) उत्तर 4 देते आणि random.choice([...]) गणेश निवडतो.\nseed दिल्याने output पुन्हा पुन्हा सारखाच राहतो — प्रयोग व पडताळणी सोयीची; नेहमी वेगळा निकाल हवा असेल तर seed काढा.",
        code: `import math
print(math.sqrt(81))
print(math.floor(3.7), math.ceil(3.2))
print(round(math.pi, 3))
import random
random.seed(12)
print(random.randint(1, 6))
print(random.choice(["विजय", "गणेश", "संजय"]))`,
        codeLanguage: "python",
        output: `9.0
3 4
3.142
4
गणेश`,
      },
      {
        title: "from math import आणि alias (as)",
        content: "import math च्या ऐवजी फक्त गरजेच्या क्रिया आणता येतात: from math import sqrt, factorial — नंतर math. prefix न ठेवता थेट sqrt(144) → 12.0.\nfactorial(5) म्हणजे 1 × 2 × 3 × 4 × 5 = 120. आवश्यक त्या क्रिया आणल्यावर कोड कमी आणि नाव मर्यादित राहते.\nimport math as m — alias; math ला छोटे नाव m देतो; m.hypot(3, 4) हा कर्ण — sqrt(3² + 4²) = 5.0.\nफरक एकच — import math नंतर math.x() लिहावे लागते, from math import x नंतर थेट x() चालते; दोन्ही वैध, निवड कोडच्या स्पष्टतेनुसार.",
        code: `from math import sqrt, factorial
print(sqrt(144))
print(factorial(5))

import math as m
print(m.hypot(3, 4))`,
        codeLanguage: "python",
        output: `12.0
120
5.0`,
      },
      {
        title: "random — फासा आणि दिवस",
        content: "random.randint(1, 6) 1 ते 6 मधील एक संख्या देतो — फासाचे समान प्रतिनिधित्व. seed(74) दिल्यावर output फासा: 5; त्या आधारे if dice >= 4 सत्य ठरते आणि मोठा! output होतो.\nrandom.choice([...]) सूचीतील एक मूल्य निवडतो — येथे आजचा दिवस बुधवार मिळतो.\nseed दिलेल्या कोडमधील output आता स्थिर — प्रत्येक वेळी समान निकाल, त्यामुळे पडताळणी सोपी.\nseed काढल्यास प्रत्येक रनला वेगळा निकाल — खेळ, सोडती, lottery यांसारख्या अनपेक्षित निवडीसाठी तोच योग्य.",
        code: `import random
random.seed(74)
dice = random.randint(1, 6)
print("फासा:", dice)
if dice >= 4:
    print("मोठा!")
else:
    print("लहान!")
day = random.choice(["सोमवार", "मंगळवार", "बुधवार"])
print("आजचा दिवस", day)`,
        codeLanguage: "python",
        output: `फासा: 5
मोठा!
आजचा दिवस बुधवार`,
      },
      {
        title: "वास्तविक उदाहरण — वर्तुळाची गणना",
        content: "r = 7 त्रिज्येच्या वर्तुळाचा परिघ आणि क्षेत्रफळ — दोन्ही pi वर अवलंबून; math.pi हा स्थिरांक थेट उपलब्ध.\nपरिघ = 2 × pi × r — round(..., 2) ने दशांश दोन ठिकाणी — output परिघ: 43.98.\nक्षेत्रफळ = pi × r² — r ** 2 ही घात रचना; round ने 153.94.\nहे math module चे व्यवहारी उदाहरण — मोजमाप, बांधकाम, शेत मापन — अशा भौमितिक कामांसाठी सतत. r बदलून output पहा.",
        code: `import math
r = 7
print("परिघ:", round(2 * math.pi * r, 2))
print("क्षेत्रफळ:", round(math.pi * r ** 2, 2))`,
        codeLanguage: "python",
        output: `परिघ: 43.98
क्षेत्रफळ: 153.94`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "import विसरणे — math.sqrt() लिहूनही import math न केल्यास NameError; import ओळ कोडच्या सुरुवातीला ठेवा.\nचुकीचे नाव — math.sqr() (sqrt ऐवजी) AttributeError; module ची खरी यादी पाहायची असेल तर print(dir(math)).\nfrom math import * — सर्व क्रिया सरळ नावांनी येतात, पण इतर कोडशी नावाचा संघर्ष होऊ शकतो; नेमक्या import ने टाळणे सुरक्षित.\nseed चा गैरसमज — seed output स्थिर करतो, random वगळता; तो काढल्यास प्रत्येक रनला output बदलतो — दोन्ही उद्देश वेगळे.\nप्रत्येक धड्यातील output reading हीच शेवटची सवय — seed दिलेल्या कोडमधील निकाल नेहमी सारखाच, तीच अचूकता लक्षात ठेवा.",
      },
      {
        title: "प्रयोग — OTP जनरेट",
        content: "random.randint(1000, 9999) चार अंकी संख्या देते; seed(8290) दिल्यावर output तुमचा OTP: 4871.\nOTP, पासकोड, खेळाचा फासा — अशा यादृच्छिक संख्यांचा वापर random module चे नित्य रूप.\nseed काढल्यावर प्रत्येक रनला OTP वेगळा — कोड पुन्हा पुन्हा चालवून निकालाची अनपेक्षितता अनुभवा.\nहे output seed मुळे स्थिर आहे — पण seed नसताना वेगळे येते, अशी दोन्ही स्थिती समजून घेणे हेच धड्याचे ध्येय.",
        code: `import random
random.seed(8290)
otp = random.randint(1000, 9999)
print("तुमचा OTP:", otp)`,
        codeLanguage: "python",
        output: `तुमचा OTP: 4871`,
      },
      {
        title: "धड्याचे सार",
        content: "import module program ला तयार क्रिया देते — math गणित, random निवड.\nimport math नंतर math.x(); from math import x नंतर थेट x(); as ने छोटे नाव.\nrandom.seed() output स्थिर करतो; seed नसेल तर प्रत्येक रनला वेगळा निकाल.\nफक्त गरजेचे module आणि नेमक्या नावांनी import करा; प्रत्येक कोडचे output तपासणे सवय लावा.",
      },
    ],
    practiceQuestions: [
      "import math मध्ये sqrt कसा वापरतात?",
      "from math import sqrt फरक?",
      "random.randint(1,6) काय देतो?",
      "module वापरून वर्तुळाचे क्षेत्रफळ काढा",
    ],
    quiz: [
      {
        question: "math मधील sqrt वापरताना सिंटॅक्स?",
        options: ["math.sqrt(81)", "sqrt(81) always", "import(81)", "math->sqrt(81)"],
        correct: 0,
      },
      {
        question: "random.randint(1,6) परत देतो?",
        options: ["1 ते 6 ऐकवी sequence", "1 ते 6 मधील एक यादृच्छिक संख्या", "6 चा वर्ग", "1"],
        correct: 1,
      },
      {
        question: "from math import sqrt नंतर?",
        options: ["math.sqrt चालू राहतं", "थेट sqrt(81) चालतं", "दोन्हीच बरं", "काही नाही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "factorial module ने काढा.",
      starterCode: `import math
print(math.factorial(5))`,
      expectedOutput: "120",
    },
    interviewQuestions: [
      "from ... import ... vs import ... फरक?",
      "import ची किस्मती संबंधी लोड कधी होतो?",
      "pip व module यांचा संबंध?",
    ],
    related: ["python-exceptions", "python-datetime", "python-json"],
    prev: "python-exceptions",
    next: "python-datetime",
  },

  {
    slug: "python-datetime",
    categoryId: "python",
    title: "तारीख व वेळ",
    marathiTitle: "तारीख व वेळ",
    level: "intermediate",
    minutes: 14,
    summary: "आजची तारीख, वेळ, वय आणि ठरलेल्या स्वरूपाची तारीख माँगवा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "तारीख व वेळ म्हणजे काय?",
        content: "आजची तारीख, वेळ, वय आणि ठरलेल्या स्वरूपाची तारीख माँगवा.\nतारीख आणि वेळ प्रत्येक program मधील आवश्यक data — नोंदणी, जन्म, मुदत, सवलत.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? तारीख व वेळ चे फायदे आणि महत्त्व",
        content: "\"तारीख व वेळ\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "तारखा आणि वेळ — कोडमध्ये",
        content: "तारीख आणि वेळ प्रत्येक program मधील आवश्यक data — नोंदणी, जन्म, मुदत, सवलत. Python चे datetime module तारीख वेळेच्या गणितासाठी: date फक्त तारीख, datetime तारीख+वेळ.\ndate(2026, 9, 5) असा ऑब्जेक्ट बनतो — वर्ष, महिना, दिवस; datetime(2026, 9, 5, 14, 37) मध्ये तास व मिनिटही.\nतारीख वेळ तुम्ही निर्माण करता किंवा system कडून घेता — datetime.now() सध्याची तारीख वेळ; पाठ्यपुस्तकातील उदाहरणे निश्चित तारखेने स्पष्ट राहतात.\nया धड्यात घटक काढणे, मांडणी, फरक आणि वाढ — प्रत्येक उदाहरण output सह प्रत्यक्ष.",
      },
      {
        title: "datetime ऑब्जेक्टमधून घटक",
        content: "datetime(2026, 9, 5, 14, 37) ही तारीख+वेळ; .year, .month, .day घटक वेगळे करता येतात — output 2026 9 5.\nstrftime मांडणी सांगते — %d/%m/%Y म्हणजे दिवस/महिना/वर्ष — 05/09/2026; %H:%M तास:मिनिट — 14:37.\ndate(2026, 9, 5) फक्त तारीख धारण करतो; print केल्यावर 2026-09-05 दिसते — हे ISO स्वरूप स्थिर.\nदोन्ही प्रकार तारीख वेळेचे — datetime तास-मिनिटासह, date फक्त तारीख; कोणता हवा हे काम ठरवते.",
        code: `from datetime import datetime, date

now = datetime(2026, 9, 5, 14, 37)
print(now.year, now.month, now.day)
print(now.strftime("%d/%m/%Y"))
print(now.strftime("%H:%M"))

today = date(2026, 9, 5)
print(today)`,
        codeLanguage: "python",
        output: `2026 9 5
05/09/2026
14:37
2026-09-05`,
      },
      {
        title: "दोन तारखांचा फरक",
        content: "date ऑब्जेक्ट्स आपसात वजा करता येतात — diff = today - start; उत्तर timedelta प्रकाराचे — दिवसांचा कालावधी.\nstart 1 जानेवारी, today 5 सप्टेंबर — फरक 247 दिवस. print(\"दिवस झाले:\", diff.days) मध्ये .days हे थेट क्षेत्र.\ntimedelta मध्ये .days आणि .seconds असे सदस्य असतात — .days सर्वाधिक वापरले जाते.\nफरकाची दिशा — today - start धन; उलट केल्यास ऋण — कोणत्या दिशेचा फरक हवा ते ठरवून घ्या.",
        code: `from datetime import date

start = date(2026, 1, 1)
today = date(2026, 9, 5)
diff = today - start
print("दिवस झाले:", diff.days)`,
        codeLanguage: "python",
        output: `दिवस झाले: 247`,
      },
      {
        title: "वय काढणे — वर्ष फरक नेमका",
        content: "जन्मतारखेपासून वय — वर्षांचा फरक काढणे अपुरे पडते; वाढदिवस ओलांडला की नाही हे ठरवावे लागते.\nbirth 12 एप्रिल 2005, आज 5 सप्टेंबर 2026 — वर्ष फरक 21; वाढदिवस यापूर्वीच गेल्याने वय 21 वर्षे.\nरचना: today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day)) — जोडीची तुलना घटकानुसार; False=0, True=1 म्हणून बरोबरी हाताळली जाते.\nजर वाढदिवस आजच्या नंतर असेल तर 1 कमी होते — वाढदिवसांपूर्वीची स्थिती स्वतः कोड बदलून तपासा.",
        code: `from datetime import date

birth = date(2005, 4, 12)
today = date(2026, 9, 5)
age = today.year - birth.year - ((today.month, today.day) < (birth.month, birth.day))
print("वय:", age, "वर्षे")`,
        codeLanguage: "python",
        output: `वय: 21 वर्षे`,
      },
      {
        title: "तारखेवर गणित — timedelta",
        content: "तारखेवर जोडणी करता येते — next_week = today + timedelta(days=7); तारीख आणि कालावधी यांचे गणित timedelta च्या साह्याने.\ntimedelta(days=7) हा सात दिवसांचा अवधी; तारीख + अवधी = नवीन तारीख — 12 Sep 2026.\nstrftime %A पूर्ण दिवसाचे नाव — Saturday; %d %b %Y म्हणजे 12 Sep 2026 — मांडणी लवचिक.\ntimedelta फक्त दिवस नाही — timedelta(hours=5, minutes=30) सुद्धा वैध; मात्र तासांबरोबर date नव्हे, datetime वापरावे.",
        code: `from datetime import date, timedelta

today = date(2026, 9, 5)
next_week = today + timedelta(days=7)
print(next_week.strftime("%A, %d %b %Y"))`,
        codeLanguage: "python",
        output: `Saturday, 12 Sep 2026`,
      },
      {
        title: "वास्तविक उदाहरण — डेडलाईन",
        content: "प्रकल्पाची सुरुवात आणि पाच दिवसांची मुदत — start = date(2026, 9, 5); deadline = start + timedelta(days=5).\noutput दोन ओळी — सुरू: 2026-09-05 (date चे स्वरूप) आणि डेडलाईन: 10/09/2026 (strftime मांडणी).\nहा व्यवहारी वापर — invoice ची मुदत, कामांचे वेळापत्रक, सूचनांची वेळ लेखांकन.\ntimedelta ऋणही जोडता येते — start - timedelta(days=5) म्हणजे पाच दिवस आधीची तारीख; फॉलोअप आणि इतिहासासाठी उपयुक्त.",
        code: `from datetime import date, timedelta

start = date(2026, 9, 5)
deadline = start + timedelta(days=5)
print("सुरू:", start)
print("डेडलाईन:", deadline.strftime("%d/%m/%Y"))`,
        codeLanguage: "python",
        output: `सुरू: 2026-09-05
डेडलाईन: 10/09/2026`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "datetime आणि date मध्ये गोंधळ — date मध्ये तास नसतात; datetime.now() ची तारीख घ्यायची असेल तर .date() वापरून फक्त तारीख काढा.\nstrftime आणि strptime उलट — strftime मांडणीसाठी (format मध्ये तारीख), strptime मजकूर वाचण्यासाठी (parse); नावाची दिशा नेमकी ठेवा.\nदिवस-महिना स्वॅप — 05/09/2026 मध्ये कोण आधी? %d/%m म्हणजे दिवस प्रथम, %m/%d म्हणजे महिना — नेहमी format स्पष्ट ठेवा.\nमजकूर तारीख म्हणून तुलना — \"05/09/2026\" > \"01/10/2026\" हा वर्णक्रमानुसार निकाल अयोग्य; तारखा तारखांशीच तुलना करा.\nवर्ष दोन अंकी — date(26, 9, 5) मध्ये वर्ष म्हणून चार अंकी संख्या धरा; लहान वर्ष व्यवहारी तारीख देत नाही.",
      },
      {
        title: "धड्याचे सार",
        content: "date फक्त तारीख, datetime तारीख+वेळ; .year/.month/.day घटक वेगळे घेता येतात.\nstrftime मांडणी — %d/%m/%Y, %A, %b, %H:%M; तारखांचा फरक व timedelta वाढ/घट.\nतारखा तारखांशीच तुलना; ऋण timedelta मागची तारीख देते.\nवय गणनेत वाढदिवसाचा विचार; format व parse यांची दिशा नेमकी ठेवा.",
      },
    ],
    practiceQuestions: [
      "datetime.now() मध्ये काय असतं?",
      "%Y, %m, %d काय दर्शवतात?",
      "दोन तारखांतील फरक कोणत्या प्रकाराने येतो?",
      "आठवड्यापूर्वीची तारीख timedelta ने काढा",
    ],
    quiz: [
      {
        question: "फक्त तारीखसाठी कोणता प्रकार?",
        options: ["datetime.time", "date", "time", "timestamp"],
        correct: 1,
      },
      {
        question: "तारीख format करण्यासाठी कोणती पद्धत?",
        options: ["format()", "strftime()", "style()", "pretty()"],
        correct: 1,
      },
      {
        question: "आजपासून 7 दिवस पुढे जाण्यासाठी?",
        options: ["timedelta(days=7)", "+7", "date.add(7)", "week()"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "date(2026, 9, 5).weekday() किती? (सोम 0...रवि 6)",
      starterCode: `from datetime import date
print(date(2026, 9, 5).weekday())`,
      expectedOutput: "5",
    },
    interviewQuestions: [
      "date vs datetime फरक?",
      "strftime formats कुठे कुठे उपयोगी?",
      "दोन तारखांतील दिवस कसे काढता?",
    ],
    related: ["python-modules", "python-string-formatting", "python-debugging"],
    prev: "python-modules",
    next: "python-numbers-random",
  },

  {
    slug: "python-numbers-random",
    categoryId: "python",
    project: "guess-game",
    title: "गणिती संख्या व random",
    marathiTitle: "Numbers व Random",
    level: "intermediate",
    minutes: 13,
    summary: "round, abs, min, max, pow व random — अंकांसोबत खेळताना ही साधने नक्की वापरता.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Numbers व Random म्हणजे काय?",
        content: "round, abs, min, max, pow व random — अंकांसोबत खेळताना ही साधने नक्की वापरता.\nPython मध्ये संख्या क्रियांसाठी तयार functions आहेत — गोलाई, निरपेक्ष मूल्य, घात आणि सूचीवरील गणित.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Numbers व Random चे फायदे आणि महत्त्व",
        content: "✓ निर्णय घेण्यासाठी गोलाई महत्त्वाची — पैसे, टक्के; random घटक sample, खेळ, सोडत — दोन्ही कसून वापरू.\n✓ seed(171) ने निकाल स्थिर — प्रयोग व पडताळणीसाठी सोयीचे; seed काढल्यावर प्रत्येक रनला वेगळे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "संख्यांची सोबत — गणित व यादृच्छिकता",
        content: "Python मध्ये संख्या क्रियांसाठी तयार functions आहेत — गोलाई, निरपेक्ष मूल्य, घात आणि सूचीवरील गणित. त्यातच random module ने यादृच्छिक निवड जोडली.\nround, abs, pow, min/max, sum या अंगभूत क्रिया import शिवाय चालतात; random च्या क्रियांसाठी import random आवश्यक.\nया धड्यात गणिताच्या क्रिया आणि random निवडीचे output सह प्रत्यक्ष प्रयोग — प्रत्येक निकाल लक्षात ठेवा.\nनिर्णय घेण्यासाठी गोलाई महत्त्वाची — पैसे, टक्के; random घटक sample, खेळ, सोडत — दोन्ही कसून वापरू.",
      },
      {
        title: "गणिताच्या आतल्या क्रिया",
        content: "round(2.567, 2) — दोन दशांशांपर्यंत — 2.57. round(2.5) जवळच्या पूर्णांकापर्यंत — 2; Python च्या नियमाने निम्मे मूल्य सम संख्येकडे गोल होते.\nabs(-7) ही निरपेक्ष मूल्य — चिन्ह काढून खरे मूल्य — 7. pow(2, 10) ही घात — 2 ** 10 — 1024; दोन्ही समान निकाल.\nmin(5, 2, 8) लहानात लहान — 2; max(...) मोठ्यात मोठा — 8. sum([10, 20, 30]) सूचीतील बेरीज — 60.\nया छोट्या क्रिया दैनंदिन गणितात सतत वापरल्या जातात — किंमत, टक्केवारी, आकडेवारी यांच्या गणनेत.",
        code: `print(round(2.567, 2))
print(round(2.5))
print(abs(-7))
print(pow(2, 10))
print(min(5, 2, 8), max(5, 2, 8))
print(sum([10, 20, 30]))`,
        codeLanguage: "python",
        output: `2.57
2
7
1024
2 8
60`,
      },
      {
        title: "दशांश गोलाई — बिल व्यवहार",
        content: "340.5 रुपयांच्या बिलावर 18% GST — gst = bill * 0.18; round ने दशांश दोन ठिकाणी — output GST: 61.29.\nएकूण = बिल + GST — round(bill + gst, 2) — 401.79. पैशाच्या व्यवहारात round ही शेवटची छाननी.\nबिलाची किंमत बदलून GST ची गणना पुन्हा करता येते — दैनंदिन व्यवहाराचा हा सरळ नमुना.\nround फक्त पूर्ण गोलाईसाठी नाही — दशांशांसहही निकालाची स्पष्टता वाढवते.",
        code: `bill = 340.5
gst = bill * 0.18
print("GST:", round(gst, 2))
print("एकूण:", round(bill + gst, 2))`,
        codeLanguage: "python",
        output: `GST: 61.29
एकूण: 401.79`,
      },
      {
        title: "random — संख्या, निवड, क्रम",
        content: "random.randint(1, 6) 1 ते 6 मधील एक संख्या; random.choice([\"पाणी\", \"चहा\", \"कॉफी\"]) यादीतील एक मूल्य — output 5 आणि चहा.\nrandom.shuffle(cards) जागोजागी क्रम बदलतो — cards ही मूळ यादी बदलते; output ['3', 'A', '2'].\nseed(171) ने निकाल स्थिर — प्रयोग व पडताळणीसाठी सोयीचे; seed काढल्यावर प्रत्येक रनला वेगळे.\nchoice निवड आणि shuffle क्रम — यादी ही random च्या क्रियांचा आधार; सूचीकडे नेहमी लक्ष द्या.",
        code: `import random
random.seed(171)
print(random.randint(1, 6))
print(random.choice(["पाणी", "चहा", "कॉफी"]))

cards = ["A", "2", "3"]
random.shuffle(cards)
print(cards)`,
        codeLanguage: "python",
        output: `5
चहा
['3', 'A', '2']`,
      },
      {
        title: "नियमित निवड — लूपमध्ये random",
        content: "random.randint लूपमध्ये ठेवून अनेक फेऱ्या — range(3) मध्ये तीन वेळा output: 3 5 1 एकाच ओळीत.\nend=\" \" प्रत्येक print शेवटी नवीन ओळीऐवजी जागा ठेवतो; शेवटी print() ने ओळ पूर्ण केली.\nहा फासा रोलिंग सारखा — तीन वेळा टाकणे; कोडची रचना व्यवहारी आणि कमी ओळींची.\nतीस वेळा टाकायला फक्त range(30) बदलावे — सर्व निकाल एकत्र आणले जाऊ शकतात.",
        code: `import random
random.seed(98)
for _ in range(3):
    print(random.randint(1, 6), end=" ")
print()`,
        codeLanguage: "python",
        output: `3 5 1 `,
      },
      {
        title: "विजेता निवड — choice उदाहरण",
        content: "स्पर्धकांच्या यादीतून एक विजेता — random.choice(people) निवडतो; seed(7) दिल्यास output विजेता: राहुल.\nखर्या सोडतीसाठी seed काढणे योग्य — प्रत्येक वेळी वेगळा विजेता; प्रात्यक्षिकासाठी seed दिलेला राहू द्या.\npeople यादीतून एक मूल्य हवे — choice; दोन वेगळे हवे असल्यास random.sample(people, k=2) वापरावे.\nराहुल हा निकाल example सह दिसतो — निष्पक्ष निवड ची प्रत्यक्ष पडताळणी करता येते.",
        code: `import random
random.seed(7)
people = ["अमय", "प्रियंका", "राहुल", "स्नेहा", "ओंकार"]
winner = random.choice(people)
print("विजेता:", winner)`,
        codeLanguage: "python",
        output: `विजेता: राहुल`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "choice आणि sample मध्ये गोंधळ — choice एक मूल्य, sample(people, k=2) वेगवेगळी अनेक; हेतूप्रमाणे निवडा.\nshuffle आणि sorted — shuffle मूळ यादी बदलते, sorted(people) नवीन व्यवस्था ठेवते मूळ जशी; फरक लक्षात ठेवा.\nround ची internal float — round(2.675, 2) ला 2.67 येऊ शकते; दशमलव अचूकता हवी असल्यास Decimal वापरा.\nmin/max रिकाम्या यादीवर — min([]) ValueError; यादी रिकामी असू शकते तर तपासून वापरा.\npow आणि ** समतुल्य — pow(2, 3) = 8, 2 ** 3 = 8; दोन्ही निकाल समान, आवडीचे स्वरूप वापरा.",
      },
      {
        title: "धड्याचे सार",
        content: "round, abs, pow, min/max, sum — अंगभूत गणिती क्रिया import शिवाय.\nrandom.randint संख्या, choice निवड, shuffle क्रम — import random आवश्यक.\nseed ने निकाल स्थिर; बिना seed प्रत्येक रनला वेगळे.\nपैशांच्या व्यवहारात round, यादीच्या निवडीत choice/sample — नेमकी योग्य क्रिया वापरा.",
      },
    ],
    practiceQuestions: [
      "round(2.567, 2) काय देतो?",
      "abs(-7) काय?",
      "random.randint(1,6) vs random.choice फरक?",
      "बेरीज आणि सरासरी numbers च्या list साठी काढा",
    ],
    quiz: [
      {
        question: "निरपेक्ष मूल्य देणारं?",
        options: ["absolute()", "abs()", "avd()", "mod()"],
        correct: 1,
      },
      {
        question: "random.choice list मधून?",
        options: ["सगळं list काढतं", "एक यादृच्छिक आयटम काढतं", "पहिलं काढतं", "शेवटचं काढतं"],
        correct: 1,
      },
      {
        question: "हे random निकाल प्रत्येक धावे कसे असतात?",
        options: ["निश्चित", "यादृच्छिक", "नेहमी समान", "नेहमी 0"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "π round करून 3 दशांश आणि max(9,2,7) print करा.",
      starterCode: `print(round(3.14159, 3))
print(max(9, 2, 7))`,
      expectedOutput: "3.142\n9",
    },
    interviewQuestions: [
      "round(2.5) = 2 का?",
      "random सह reproducible result कसे मिळवाल?",
      "float point अचूकतेच्या समस्या?",
    ],
    related: ["python-modules", "python-datetime", "python-string-formatting"],
    prev: "python-datetime",
    next: "python-string-project",
  },

  {
    slug: "python-string-project",
    categoryId: "python",
    title: "Project - Word Counter",
    marathiTitle: "Project - Word Counter",
    level: "intermediate",
    minutes: 18,
    summary: "मजकुराची शब्दसंख्या, वारंवारता व अक्षरसंख्या मोजणारा mini project.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "Project - Word Counter म्हणजे काय?",
        content: "मजकुराची शब्दसंख्या, वारंवारता व अक्षरसंख्या मोजणारा mini project.\nया धड्यात शिकलेली साधने — split, len, count, set, function आणि फाइल — एकत्र मेळाव्या; उद्देश: मजकुरावरील उपयोगी आकडेवारी काढणे.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? Project - Word Counter चे फायदे आणि महत्त्व",
        content: "✓ या धड्यात शिकलेली साधने — split, len, count, set, function आणि फाइल — एकत्र मेळाव्या; उद्देश: मजकुरावरील उपयोगी आकडेवारी काढणे.\n✓ सगळ्या string क्रिया (split, count, set) या विश्लेषणाचा पाया — हा प्रकल्प त्यांचा उपयोग दर्शवितो.\n✓ विरामचिन्हे शोध आणि गणना खालील ठेवतात; clean data साठी ही स्वच्छता हीच गरज.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "प्रकल्प — मजकुराचे विश्लेषण",
        content: "या धड्यात शिकलेली साधने — split, len, count, set, function आणि फाइल — एकत्र मेळाव्या; उद्देश: मजकुरावरील उपयोगी आकडेवारी काढणे.\nप्रत्येक उदाहरण output सह सत्यापन — धड्यातील निकाल पुस्तकाप्रमाणेच लक्षात ठेवा.\nप्रकल्प रचना क्रमाक्रमाने — आधी साधे व्यवहार, नंतर function आणि फाइल — वाचण्यायोग्य राहते.\nसगळ्या string क्रिया (split, count, set) या विश्लेषणाचा पाया — हा प्रकल्प त्यांचा उपयोग दर्शवितो.",
      },
      {
        title: "शब्द मोजणी — पहिले पाऊल",
        content: "text.split() मजकूर रिकाम्या जागांवर वेगळे करतो — words यादी क्रमाने; len(words) म्हणजे एकूण शब्द.\n\"Python शिका आणि Python ला ऊर्जा द्या\" — 7 शब्द; output एकूण शब्द: 7.\nहे गणित साधे पण आधारभूत — शब्दांची संख्या हा सर्व विश्लेषणाचा पाया.\nsplit मधील delimiter बदलतो — split(\",\") स्वल्पविरामाने; आतापुरता blank space नियम पुरेसा.",
        code: `text = "Python शिका आणि Python ला ऊर्जा द्या"
words = text.split()
print("एकूण शब्द:", len(words))`,
        codeLanguage: "python",
        output: `एकूण शब्द: 7`,
      },
      {
        title: "मजकूर खोदणे — count, अक्षरे, मोठा शब्द",
        content: "text.count(\"Python\") विशिष्ट शब्दाच्या फेऱ्या मोजतो — output 'Python' कितीदा: 2.\nlen(text.replace(\" \", \"\")) — रिकाम्या जागा वगळून अक्षर संख्या — 30. max(text.split(), key=len) — len निकषाने सर्वात मोठा शब्द — Python.\nएकाच text वर तीन वेगवेगळ्या आकडेवार्या — शब्दांची संख्या, अक्षरे, मोठा शब्द; प्रत्येक ओळ स्वतंत्र.\nही त्रिकूट ग्राहक अहवाल, ब्लॉग analytics यांसारख्या ठिकाणी नित्य वापरली जाते; text मध्ये बदल करून output बदलते.",
        code: `text = "Python शिका आणि Python ला ऊर्जा द्या"
print("'Python' कितीदा:", text.count("Python"))
print("अक्षरांची संख्या:", len(text.replace(" ", "")))
print("सर्वात मोठा शब्द:", max(text.split(), key=len))`,
        codeLanguage: "python",
        output: `'Python' कितीदा: 2
अक्षरांची संख्या: 30
सर्वात मोठा शब्द: Python`,
      },
      {
        title: "function ने विश्लेषण — set",
        content: "analyze(text) तीन आकडे एकत्र परत करतो — एकूण शब्द, वेगळे शब्द (set), \"a\" अक्षराची संख्या; स्वरूप tuple.\nset(words) प्रत्येक अद्वितीय मूल्य एकदा ठेवतो — वेगळ्या शब्दांची गणना तिथून; output (6, 3, 3).\nfunction परतलेले tuple unpack करून आकडे सोपे मिळतात — total, unique, a_count ही नावे एकत्र.\nहे analyze दुसऱ्या मजकुरावरही चालते — function म्हणून पुनर्वापराची रीत; text बदलून output स्वतः तपासा.",
        code: `def analyze(text):
    words = text.split()
    return len(words), len(set(words)), text.count("a")

print(analyze("a b c a b a"))`,
        codeLanguage: "python",
        output: `(6, 3, 3)`,
      },
      {
        title: "विरामचिन्हे साफ — re.sub",
        content: "शब्द मोजणीपूर्वी मजकूर स्वच्छ करणे — विरामचिन्हे काढा. import re हे regular expression चे मशीन.\nre.sub(r\"[^A-Za-z ]\", \"\", text) — अक्षर व space सोडून सर्व काढते; \"Hello, world! Hello friends.\" चे रूप \"Hello world Hello friends\" होते.\nत्यानंतर split आणि set — एकूण शब्द 4, वेगळे शब्द 3; Hello दुसऱ्या वेळी गणत नाही.\nविरामचिन्हे शोध आणि गणना खालील ठेवतात; clean data साठी ही स्वच्छता हीच गरज.",
        code: `import re
text = "Hello, world! Hello friends."
clean = re.sub(r"[^A-Za-z ]", "", text)
words = clean.split()
print("शब्द:", len(words))
print("वेगळे शब्द:", len(set(words)))`,
        codeLanguage: "python",
        output: `शब्द: 4
वेगळे शब्द: 3`,
      },
      {
        title: "फाइल मजकुराचे विश्लेषण",
        content: "essay.txt मधील मजकूर वाचून शब्द मोजणे — फाइलमधील data program मध्ये आणणे; open संदर्भ आवश्यक.\nwith open(\"essay.txt\", \"w\") ने फाइल तयार करून मजकूर लिहिला; नंतर तीच फाइल वाचून text.split().\noutput एकूण शब्द: 6 — फाइलच्या ओळीतील शब्द रिकाम्या जागांवर वेगळे झाले.\nफाइल आणि string संयोग या प्रकल्पाचा मेरू — वाचा, मोजा, स्वच्छ करा; सर्व साधने आता एकत्र.",
        code: `with open("essay.txt", "w") as f:
    f.write("आज शाळेत गणित आणि विज्ञान होते
")

with open("essay.txt") as f:
    text = f.read()
print("एकूण शब्द:", len(text.split()))`,
        codeLanguage: "python",
        output: `एकूण शब्द: 6`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "split न करता len(text) — अक्षरांची संख्या मिळते, शब्द नाही; शब्द हवे असतील तर आधी split आवश्यक.\ncase sensitivity — text.count(\"python\") आणि count(\"Python\") वेगळे; मोठे-लहान विसरू नये म्हणून text.lower() ने एकरूप करून मोजा.\nset फक्त वेगळ्या मूल्यांचा संग्रह — क्रम सांगत नाही; मोजणीसाठी ठीक, क्रम हवा असल्यास dict सह रचना वापरा.\nre.sub मधील space — pattern [^A-Za-z ] मध्ये space समाविष्ट आहे; तो चुकला तर pattern शब्दांमधील जागाही काढतो.\nफाइल encoding — मराठी मजकूर utf-8 मध्ये असावा; open मध्ये encoding=\"utf-8\" देणे उपयुक्त ठरते.",
      },
      {
        title: "प्रकल्पाचे सार",
        content: "split ला words, len(split) शब्द संख्या; count विशिष्ट शब्द, replace वापरून अक्षर संख्या.\nset ने वेगळे शब्द; analyze function एकाच tuple मध्ये तीन आकडे परत करते.\nre.sub विरामचिन्हे काढून मजकूर स्वच्छ — आकडेवारी अचूक ठेवते.\nफाइलमधून data वाचून तोच व्यवहार — string, file, function यांचा मेळ या प्रकल्पात संपूर्ण.",
      },
    ],
    practiceQuestions: [
      "शब्दांची सूची करण्यासाठी कोणती पद्धत?",
      "set(words) काय देतो?",
      "अक्षरांची संख्या कशी मोजतो?",
      "text normalize करून count करायचे असल्यास काय कराल?",
    ],
    quiz: [
      {
        question: "शब्दांची list मिळवण्यासाठी?",
        options: ["text.split()", "text.list()", "split(text)", "words()"],
        correct: 0,
      },
      {
        question: "वेगळे (unique) शब्द मिळवण्यासाठी?",
        options: ["list(words)", "set(words)", "count(words)", "join(words)"],
        correct: 1,
      },
      {
        question: "सर्वांत मोठा शब्द शोधण्यासाठी?",
        options: ["maxlist()", "max(words, key=len)", "biggest()", "lenmax()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "या वाक्यातील सर्वांत मोठा शब्द व त्याची लांबी दाखवा.",
      starterCode: `sentence = "The quick brown fox"
words = sentence.split()
longest = max(words, key=len)
print(longest, len(longest))`,
      expectedOutput: "quick 5",
    },
    interviewQuestions: [
      "अकार्यक्षम count() वापरल्यास काय होईल?",
      "uppercase/lowercase चा word count वर परिणाम कसा टाळाल?",
      "हे analyze function पुन्हा वापरता येईल का?",
    ],
    related: ["python-string-methods", "python-list-comprehensions", "python-sets"],
    prev: "python-numbers-random",
    next: "python-debugging",
  },

  {
    slug: "python-debugging",
    categoryId: "python",
    title: "Debugging - चुका शोधणे",
    marathiTitle: "Debugging - चुका शोधणे",
    level: "intermediate",
    minutes: 15,
    summary: "Error आल्यावर घाबरू नका — traceback वाचा, चुका ओळखा, सुधारा.",
    levelLabel: L4_LABEL,
    sections: [
      {
        title: "का शिकावे? Debugging - चुका शोधणे चे फायदे आणि महत्त्व",
        content: "\"Debugging - चुका शोधणे\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "bug म्हणजे काय — debugging",
        content: "कोडमधील चुका कार्यक्रम अडवतात — debugging म्हणजे शोध, कारण ओळख आणि दुरुस्ती. Python च्या error message वरून कारण लगेच सापडते.\nIndexError म्हणजे अस्तित्वात नसलेला क्रमांक; TypeError म्हणजे चुकीच्या प्रकाराचा वापर — ही नावेच दिशा दाखवतात.\nहा धडा वास्तविक त्रुटी आणि त्यांची दुरुस्ती output सह मांडतो — प्रत्येक त्रुटी सोडवण्याचा क्रम.\nधड्याच्या शेवटी स्वतः त्रुटी दुरुस्त करण्याची सवय — ही उदाहरणे त्या प्रवासाची रीत.",
      },
      {
        title: "IndexError — क्रम मर्यादा",
        content: "nums = [10, 20] या सूचीवर nums[5] — 5 हा क्रम अस्तित्वात नाही; IndexError: list index out of range.\ntry/except मध्ये error पकडला आणि message print केला — output IndexError: list index out of range.\nसूचीची लांबी len(nums) = 2; वैध क्रम 0 आणि 1; मर्यादेच्या पलीकडे गेल्यावर IndexError येतो.\nहा error सर्वाधिक वारंवार — लूप किंवा कट सूचीत; index नेहमी तपासणे हा नियम.",
        code: `nums = [10, 20]
try:
    print(nums[5])
except IndexError as e:
    print("IndexError:", e)`,
        codeLanguage: "python",
        output: `IndexError: list index out of range`,
      },
      {
        title: "TypeError — प्रकाराची चुका",
        content: "age = \"24\" ही string — age + 5 मध्ये number आणि string मिसळल्यास TypeError; comment मध्ये तशी नोंद ठेवली आहे.\nउपाय: int(age) रूपांतर — print(int(age) + 5) → 29.\ninput द्वारे मिळालेला मजकूर नेहमी string असतो; गणित हवे असेल तर int किंवा float रूपांतर आवश्यक.\nप्रकार तपासणी ही पहिली तपासणी — string व number ची सांगड घालू नका.",
        code: `age = "24"
# print(age + 5)   # TypeError
print(int(age) + 5)`,
        codeLanguage: "python",
        output: `29`,
      },
      {
        title: "print ने ट्रॅक — कार्यरत function",
        content: "doubler([1, 2, 3]) प्रत्येक घटक दुप्पट करतो — y: 2, y: 4, y: 6 — print प्रत्येक चलनाचे मूल्य दाखवतो.\nprint मध्ये प्रत्येक पायरी दृश्यमान होते — निकाल अनपेक्षित असल्यास कारण लगेच सापडते.\nreturn result सूची [2, 4, 6] — शेवटची ओळ print केली.\ndebugging मध्ये print हे साधन तात्कालिक; त्रुटी दुरुस्त झाल्यावर असे print काढता येतात.",
        code: `def doubler(xs):
    result = []
    for x in xs:
        y = x * 2
        print("y:", y)
        result.append(y)
    return result

print(doubler([1, 2, 3]))`,
        codeLanguage: "python",
        output: `y: 2
y: 4
y: 6
[2, 4, 6]`,
      },
      {
        title: "सूचीची मर्यादा — दुसरी बाजू",
        content: "numbers = [10, 20] — numbers[0] + numbers[2] लिहिले, पण सूचीत फक्त क्रम 0 आणि 1 आहेत; त्यामुळे numbers[2] अवैध.\ntry/except ने output दिले: IndexError: list index out of range.\nerror message हाच नकाशा — len च्या आधारे वैध क्रम किती आहेत हे लगेच कळते.\nदुरुस्ती — numbers[1] वापरा किंवा पुरेशा लांबीची सूची ठेवा; सूचीची मर्यादा सतत लक्षात ठेवा.",
        code: `numbers = [10, 20]
try:
    total = numbers[0] + numbers[2]   # IndexError!
except IndexError as e:
    print("IndexError:", e)`,
        codeLanguage: "python",
        output: `IndexError: list index out of range`,
      },
      {
        title: "वास्तविक उदाहरण — एकूण गणना",
        content: "numbers = [10, 20, 30] — sum(numbers) बेरीज काढते — 60; print(\"एकूण:\", total).\nहा साधा कोड बगविरहित — debugging धड्यातील तुलनाक्रमाचा आधार.\nचुका शोधणे म्हणजे कोड systematic वाचणे — यादी, प्रकार, output यांचा मेळ.\nया धड्यातील त्रुटी व दुरुस्ती आठवल्यास — long कोडमधील त्रुटी लवकर सापडतात.",
        code: `numbers = [10, 20, 30]
total = sum(numbers)
print("एकूण:", total)`,
        codeLanguage: "python",
        output: `एकूण: 60`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "क्रम एक पासून सुरू असल्याचा गैरसमज — सूची क्रम 0 पासून; nums[1] म्हणजे दुसरा घटक — ही सवय नेहमी तपासा.\nलूपमधील मर्यादा — range(len(nums)) ने निश्चित मर्यादा मिळते; i == len(nums) झाले की IndexError — शेवटचा वैध क्रम len - 1 असतो.\nint(\"abc\") मध्ये अक्षर दिल्यास ValueError येतो — TypeError आणि ValueError वेगळे; message नेमके वाचा.\nbare except टाळा — सर्व error गिळणे कारण लपवते; नेमक्या प्रकारासह except लिहा.\nशेवटच्या घटकावरील बग — सीमा स्थिती (पहिला, शेवटचा क्रम) ने तपासा; boundary cases मध्येच चुका पकडता येतात.",
      },
      {
        title: "धड्याचे सार",
        content: "IndexError — सूचीचे वैध क्रम 0 पासून; लांबी व क्रम दोन्ही तपासा.\nTypeError — प्रकारांची सांगड; int()/float() रूपांतर अडचण सोडवते.\nprint मधील चरण — flow दृश्यमान; debugging नंतर print काढता येतात.\nerror message, सीमा स्थिती, नेमका except — त्रुटी शोधण्याची ही साधने.",
      },
    ],
    practiceQuestions: [
      "traceback वाचताना कुठून सुरू करायचं?",
      "IndexError कधी येतो?",
      "print-debugging म्हणजे काय?",
      "TypeError चे उदाहरण लिहा आणि सुधारा",
    ],
    quiz: [
      {
        question: "\"int\" ऐवजी \"str\" — कोणती चूक?",
        options: ["SyntaxError", "TypeError", "NameError", "KeyError"],
        correct: 1,
      },
      {
        question: "variable नाही म्हणून कोणती चूक?",
        options: ["TypeError", "NameError", "ValueError", "IndexError"],
        correct: 1,
      },
      {
        question: "traceback खालून वर काय वाचतात?",
        options: ["पहिली ओळ त्रुटी", "शेवटची ओळ मुख्य", "file path", "सगळं"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "y = 0 असताना division टाळा.",
      starterCode: `x = 10
y = 0
if y != 0:
    print(x / y)
else:
    print("y zero")`,
      expectedOutput: "y zero",
    },
    interviewQuestions: [
      "traceback कसा वाचतात?",
      "IndexError vs KeyError फरक?",
      "print-debugging ची सीमा कुठे?",
    ],
    related: ["python-exceptions", "python-string-project", "python-lists"],
    prev: "python-string-project",
    next: "python-classes",
  },
];