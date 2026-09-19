import type { Tutorial } from "@/data/tutorials";

// === PYTHON · LEVEL 3 — Functions & Data ===
export const L3_LABEL = "Level 3 — Functions & Data (कार्ये आणि डेटा)";

export const pythonLevel3: Tutorial[] = [
  {
    slug: "python-functions",
    categoryId: "python",
    project: "unit-converter",
    title: "Python Functions",
    marathiTitle: "Functions - कोडचे पुन्हा वापर",
    level: "intermediate",
    minutes: 15,
    summary: "def keyword वापरून Python functions कसे बनवायचे ते शिका.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "का शिकावे? Functions - कोडचे पुन्हा वापर चे फायदे आणि महत्त्व",
        content: "✓ function चे फायदे तीन आहेत: कोड पुन्हा लिहावा लागत नाही, कोड व्यवस्थित (आयोजित) राहतो, आणि bug शोधताना फक्त संबंधित function तपासता येते.\n✓ default parameter चा व्यावहारिक उपयोग समजा — दुकानदार रोजच्या बिलात नेहमी 5 टक्के कर वापरतो.\n✓ जर function चे काम फक्त display करणे असेल तर return आवश्यक नाही; पण निकाल पुढच्या गणनेत वापरायचा असेल तर return लिहा.\n✓ ती सुरक्षेच्या दृष्टीने उपयोगी आहे — एका function च्या व्हेरिएबलचा दुसऱ्या function ला त्रास होत नाही.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },

      {
        title: "फंक्शन म्हणजे काय?",
        content: "फंक्शन म्हणजे विशिष्ट काम करणारा कोडचा एक ब्लॉक. तो एकदाच लिहा आणि कितीही वेळा हाक मारा. Python मध्ये function बनवण्यासाठी def keyword वापरतात.\nfunction लिहून तिची नोंद करण्याला define म्हणतात आणि तिला वापरण्याला call म्हणतात. हा फरक सुरुवातीला नीट लक्षात ठेवा — पुढच्या प्रत्येक धड्यात हीच संज्ञा येते.\nfunction ला नियुक्त कार्यकर्ता समजा: त्याला मूल्ये दिली तर तो निकाल देऊन येतो. उदाहरणार्थ ग्रॅड ठरवणारा कोड function मध्ये ठेवल्यास तो पुन्हा पुन्हा लिहावा लागत नाही — कधीही ग्रॅड हवे असल्यास फक्त function ला हाक द्या.\nfunction चे फायदे तीन आहेत: कोड पुन्हा लिहावा लागत नाही, कोड व्यवस्थित (आयोजित) राहतो, आणि bug शोधताना फक्त संबंधित function तपासता येते.\nएक function एकच काम करावी. अनेक कामे एकत्र केली की ती वाचणे आणि बदलणे कठीण जाते. function लिहायला घेताना तीन प्रश्न विचारा: input काय, process काय, output काय? तिन्ही उत्तरे मिळाली की तिची रचना ठरते.",
      },
      {
        title: "Syntax: def, parameters, return",
        content: "function ची रचना नेहमी समान असते: def लिहा, मग नाव, मग कंसात parameters आणि शेवटी colon (:). आतल्या ओळी समान अंतराने (indentation) सुरू होतात — यावरून Python ला कळते की या ओळी function च्या मालकीच्या आहेत. शेवटी return ने निकाल परत द्या.\nकंसात function ला काय मिळते ते parameters म्हणतात आणि नावापुढे कंस हेच हाक मारण्याचे चिन्ह आहे. कंसाशिवळ फक्त नाव लिहिल्यास function चालत नाही — फक्त तिचा संदर्भ मिळतो.\nखालील कोड मध्ये greet नाव घेऊन नमस्काराचे वाक्य बनवते आणि add दोन संख्यांना जोडते. output मध्ये आधी नमस्कार, सायली! आणि मग बेरीज: 8 येते.\ndef च्या ओळीच्या शेवटी colon असणे आवश्यक आहे. colon नसेल तर Python ला ओळ कुठे संपली ते कळत नाही आणि SyntaxError येतो. आतल्या ओळी एकाच अंतराने नसल्यास त्या function च्या बाहेरच्या ओळींसारख्या वागतात.",
        code: `def greet(name):
    return f"नमस्कार, {name}!"

def add(a, b):
    return a + b

print(greet("सायली"))
print("बेरीज:", add(5, 3))`,
        codeLanguage: "python",
        output: `नमस्कार, सायली!
बेरीज: 8`,
      },
      {
        title: "parameters आणि arguments",
        content: "function च्या definition मधील नावांना parameters आणि हाक मारताना दिलेल्या मूल्यांना arguments म्हणतात. ही दोन नावे वेगवेगळी असली तरी काम एकच आहे — function ला input पोहोचवणे.\nहाक मारताना arguments ची संख्या parameters च्या संख्येशी जुळली पाहिजे. बेरीज जुळली नाही तर Python TypeError देतो आणि function अजिबात चालत नाही. म्हणून function च्या नावासोबत तिला किती मूल्ये हवीत ते लक्षात ठेवा.\nparameters ची नावेही अर्थपूर्ण ठेवा. a, b याऐवजी height, width असे नाव ठेवल्यास function वाचणाऱ्याला कोणते मूल्य कुठे जाते ते लगेच समजते.\narguments हाक मारताना उलट्या क्रमानेही देता येतात — name=सायली, age=25 असे keyword ने लिहिल्यास क्रम कसाही असू दे. पण positional arguments चा क्रम parameters च्या क्रमाप्रमाणेच राखा.",
      },
      {
        title: "Default parameters",
        content: "काही parameters साठी आधीच value ठेवता येते; अशा parameters ला default parameter म्हणतात. हाक मारताना त्यासाठी मूल्य दिले नाही तर default वापरले जाते; दिले तर दिलेले.\nखालील कोडात multiply च्या second parameter b ची default किंमत 2 आहे. multiply(4) म्हणजे 4 गुणिले 2 = 8; multiply(4, 5) म्हणजे 4 गुणिले 5 = 20. दोन्ही हाका एकाच definition वरून चालतात.\ndefault values घेणारे parameters नेहमी function मध्ये शेवटीच लिहा. कुठलेही (optional) parameter आधी किंवा मध्ये लिहिला तर Python शेवटच्या default नसलेल्या parameter पर्यंत गोंधळतो आणि SyntaxError देतो.\ndefault parameter चा व्यावहारिक उपयोग समजा — दुकानदार रोजच्या बिलात नेहमी 5 टक्के कर वापरतो. तो default ठेवल्यास प्रत्येक वेळी कर सांगावा लागत नाही; फक्त वेगळा कर हवा असेल तरच लिहावा लागतो.",
        code: `def multiply(a, b=2):
    return a * b

print(multiply(4))     # 4 * 2 = 8
print(multiply(4, 5))  # 4 * 5 = 20`,
        codeLanguage: "python",
        output: `8
20`,
      },
      {
        title: "वास्तविक उदाहरण: सूट मोजणे",
        content: "दुकानदार वस्तूंवर सूट देतो, हे वास्तविक उदाहरण function मध्ये मांडू. discount function किंमत आणि टक्केवारी हे दोन parameters घेते. saved मध्ये सूटची रक्कम काढते आणि return ने पेमेंटची रक्कम परत करते.\nपहिल्या हाकेत discount(500) म्हणजे 500 वर default 10 टक्के सूट — सूट 50 रुपये आणि पेमेंट 450.0. दुसऱ्या हाकेत discount(500, 30) म्हणजे 30 टक्के सूट — पेमेंट 350.0.\nएकच definition दोन वेगवेगळे निकाल देतो. हा function चा मुख्य गुणधर्म आहे: नियम (saved आणि return ची गणना) एकदा लिहिला की वेगवेगळ्या input वर अचूक output येते.\nसूटप्रमाणेच बँकेतील व्याज आणि कार्यालयातील पगाराची गणना — मुद्दल/दर/कालावधी हे parameters आणि शेवटची रक्कम return. नमुना सारखाच; फक्त नावे आणि सूत्र बदलतात.",
        code: `def discount(price, percent=10):
    saved = price * percent / 100
    return price - saved

print("पेमेंट करा:", discount(500))      # 10% सूट
print("पेमेंट करा:", discount(500, 30))   # 30% सूट`,
        codeLanguage: "python",
        output: `पेमेंट करा: 450.0
पेमेंट करा: 350.0`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ def च्या ओळीच्या शेवटी colon विसरणे — Python ला function ची घोषणा कुठे संपते ते कळत नाही आणि SyntaxError येतो. संदेशातील ओळ क्रमांक पाहून तेथे colon ठेवा.\n✗ return न करणे — function मध्ये return नसेल तर ती None परत करते. None म्हणजे काहीही नाही असा खास मूल्य. जर function चे काम फक्त display करणे असेल तर return आवश्यक नाही; पण निकाल पुढच्या गणनेत वापरायचा असेल तर return लिहा.\n✗ parameters आणि arguments गोंधळणे — definition मधली नावे parameters, हाक मारताना दिलेली मूल्ये arguments. दोन्हीची संख्या जुळली नाही तर TypeError: greet() missing 1 required positional argument सारखा संदेश येतो.\n✗ return नंतर ओळी लिहिणे — return ने function आणि मागील काम थांबते; return नंतरच्या ओळी कधीही चालत नाहीत. म्हणून return ही function ची शेवटची ओळ असू द्या.\n✗ print आणि return मिसळणे — print फक्त स्क्रीनवर दाखवते, return निकाल परत करतो. return न केल्यास दुसऱ्या function ला तो निकाल वापरता येत नाही.\n✗ नावात स्पेस घालणे — function नाव एका शब्दात, lowercase मध्ये असावे; एकापेक्षा अधिक शब्द असतील तर underscore वापरा (calculate_bill).",
      },
      {
        title: "return विरुद्ध print, scope आणि नामकरण",
        content: "return आणि print यांचा फरक एवढाच: print निकाल दाखवते, return निकाल परत करतो जो पुढे गणनेत वापरता येतो. खऱ्या गणनेसाठी return आवश्यक आहे. तसेच return ने function थांबते — म्हणून return function मध्ये शेवटीच लिहा.\nfunction च्या आत तयार केलेले व्हेरिएबल function बाहेर दिसत नाहीत. या मर्यादेला scope म्हणतात. ती सुरक्षेच्या दृष्टीने उपयोगी आहे — एका function च्या व्हेरिएबलचा दुसऱ्या function ला त्रास होत नाही.\nबाहेरचे व्हेरिएबल function मध्ये वाचता येते, पण बदलणे कठीण आहे. त्याच नावाचे दोन व्हेरिएबल वेगवेगळ्या function मध्ये असू शकतात — कुठलाही गोंधळ होत नाही कारण प्रत्येक function चा scope वेगळा आहे.\nfunction चे नाव क्रिया दर्शवणारे ठेवा — get_total, calculate_average अशी नावे वाचल्यावर function काय करते हे लगेच कळते. नियम: lowercase + underscore, उदा. calculate_bill, check_login.",
      },
      {
        title: "Interactive: बेरीज करणारी function",
        content: "खाली total नावाची function यादीतील सर्व किंमती जोडते. s मध्ये 0 पासून सुरुवात; for लूप प्रत्येक price s मध्ये जोडतो आणि शेवटी return s ने एकूण परत होते.\nमूल्ये 120 + 45 + 89 = 254, म्हणून output मध्ये एकूण बिल: 254 दिसते. यादीत 10 किंवा 1000 मूल्ये असली तरी हाच कोड बेरीज करतो — कामाचे सूत्र function आहे, आकार बदलतो.\nलक्षात ठेवा: return लूपच्या बाहेर ठेवावा. return लूपच्या आत ठेवल्यास पहिल्या फेरीतच function संपते आणि दुसऱ्या मूल्याची बेरीज होत नाही.\nfunction च्या आत for लूप चालवणे हा महत्त्वाचा नमुना आहे — नियम function मध्येच असल्यामुळे बाहेरचा कोड स्वच्छ राहतो.",
        code: `def total(items):
    s = 0
    for price in items:
        s += price
    return s

print("एकूण बिल:", total([120, 45, 89]))`,
        codeLanguage: "python",
        output: `एकूण बिल: 254`,
      },
      {
        title: "Mini Project: बिल कॅल्क्युलेटर",
        content: "शेवटी छोटा project — बिल कॅल्क्युलेटर. bill function वस्तूंच्या किंमतींची बेरीज करून त्यावर कर जोडते. amounts या यादीवर sum फंक्शन बेरीज करते आणि tax च्या टक्क्यानुसार कर मोजले जातो.\ncart मधील 99 + 45 + 210 = 354. पहिल्या हाकेत default 5 टक्के कर — एकूण 371.7; दुसऱ्या हाकेत 10 टक्के कर — एकूण 389.4. दोन्ही निकाल एकाच function मधून येतात.\nयेथे function ची ताकद दिसते: वेगळ्या tax साठी पुन्हा कोड न लिहिता फक्त एक argument बदलले. cart मध्ये नवीन वस्तू जोडली तरी function नवीन बेरीज आणि कर आपोआप मोजतो.\nsum हे Python चे तयार function आहे — संख्यांच्या समूहाची बेरीज करते. आपल्या function च्या आत Python चे तयार function वापरता येते हेही येथून लक्षात घ्या.",
        code: `def bill(amounts, tax=5):
    total = sum(amounts)
    return total + total * tax / 100

cart = [99, 45, 210]
print("अंतिम बिल:", bill(cart))
print("अंतिम बिल (10% कर):", bill(cart, 10))`,
        codeLanguage: "python",
        output: `अंतिम बिल: 371.7
अंतिम बिल (10% कर): 389.4`,
      },
    {
        title: "def ची सखोल रचना — indentation, नावे आणि return चा प्रवाह",
        content: "function ही Python मधील सर्वात आधारभूत संकल्पना आहे आणि ती बरोबर समजून घेतली की पुढील सर्व धडे सोपे होतात. def keyword ने function ची सुरुवात होते, नंतर function चे नाव, नंतर कंसात parameters आणि शेवटी colon येते. या संपूर्ण रचनेला function ची header असे म्हणतात.\nheader नंतरच्या सर्व ओळी समान अंतराने सुरू झाल्या पाहिजेत. या अंतराला indentation म्हणतात आणि तेच Python ला सांगते की कोणत्या ओळी function च्या मालकीच्या आहेत. सर्वात सामान्य प्रथा चार spaces किंवा एक tab ची आहे. indentation चुकले की unexpected indent किंवा IndentationError सारख्या त्रुटी येतात आणि function चे भाग परस्पर गोंधळतात.\nfunction ला आत काय मिळते ते parameters आणि हाक मारताना काय दिले जाते ते arguments असे म्हटले जाते. parameters function च्या आत नेहमीच्या variable सारखे वागतात — बाहेरील जगाशी function चा संबंध फक्त याच दारातून होतो.\nfunction मधून निकाल बाहेर पाठवायचा असेल तर return लिहा. return ची ओळ चालताच function त्वरित थांबते आणि निकालासह परत येते. return नसलेली function शेवटी None मूल्य परत करते, जे काहीही नाही असे दर्शवतो.\nprint आणि return यांचा फरक लक्षात ठेवणे खूप महत्त्वाचे आहे: print निकाल फक्त स्क्रीनवर दाखवतो आणि संपतो; return निकाल function बाहेर सुपूर्द करतो जो पुढील गणनेत वापरता येतो. print(add(2, 3)) म्हणजे निकाल छापला जातो, पण x = add(2, 3) म्हणजे निकाल x मध्ये साठवला जातो. हे दोन्ही उपयोग वेगळे आहेत.\nfunction चे नाव क्रियापदासारखे अर्थपूर्ण ठेवा — calculate_bill, get_total, check_age. Python मधील नियम लहान अक्षरे आणि शब्दांमध्ये underscore असा आहे. योग्य नावामुळे कोड वाचणाऱ्याला function चे काम लगेच लक्षात येते.\nएका function ने एकच काम करावे. दोन किंवा तीन कामे एकत्र केली की function मोठी होते आणि तपासणे कठीण जाते. लहान, स्पष्ट function लिहायची सवय लागली की कोड आपोआप स्वच्छ राहतो.\nfunction बनवताना तीन प्रश्न नेहमी स्वतःला विचारा: input म्हणून काय मिळेल? मध्ये काय process होईल? output म्हणून काय मिळेल? या तीन प्रश्नांची उत्तरे मिळाली की function ची रचना स्वतःहून तयार होते.\nfunction ची व्याख्या बनवणे (define) आणि तिला वापरणे (call) ही दोन वेगळी कामे आहेत. व्याख्या केलेली function आपोआप चालू लागत नाही; ती चालवण्यासाठी नावासोबत कंस लिहून हाक मारावी लागते. कंस विसरल्यास function चालत नाही — फक्त तिचा संदर्भ मिळतो. हा नियम सुरुवातीपासून लक्षात ठेवा.",
      },
      {
        title: "वास्तविक जगातील उपयोग — function शिवाय मोठा कोड शक्य नाही",
        content: "function शिवाय मोठा program लिहिणे म्हणजे शेकडो ओळी पुन्हा पुन्हा लिहिण्यासारखे आहे — ते वेळ वाया घालवते, चुका वाढवते आणि वाचन कठीण करते. हे उदाहरण पहा: शाळेच्या परीक्षेचे निकाल मोजणारा program. प्रत्येक विद्यार्थ्यासाठी बेरीज, सरासरी, ग्रॅड आणि टक्केवारी काढायची आहे. ही सर्व गणना एक function मध्ये लिहिली आणि प्रत्येक विद्यार्थ्यासाठी function ला हाक मारली तर ही गणना फक्त एकदाच लिहावी लागते.\nरोजच्या जीवनातील उदाहरणेही तशीच — चहाच्या दुकानाचे बिल, बँकेतले व्याज, पगारातून होणारी कर कपात, दुकानातील सूट. प्रत्येक ठिकाणी एक ठरलेला नियम वेगवेगळ्या input संख्यांवर चालतो. function तो नियम एकदा धरून ठेवते आणि प्रत्येक वेळी योग्य output देते.\nसर्वात मोठा फायदा बचत नाही तर देखभाल हा आहे. एखादा नियम बदलला — उदा. कराचा दर 5 वरून 7 टक्के झाला — तर function असल्यास फक्त एका ठिकाणी बदल करावा लागतो. function नसल्यास जिथे जिथे कराची गणना आहे तिथे सर्वत्र बदल करावा लागेल आणि एखादे ठिकाण चुकून सुटण्याची शक्यता नेहमी असते.\nप्रत्येक मोठी गोष्ट लहान भागांनी बनते, तसेच मोठे software लहान function च्या जोडीनेच उभे राहतात. म्हणून function ही केवळ शिकण्याचा विषय नसून व्यावसायिक विकासाचा पाया आहे. कोणत्याही real world program मध्ये function ही पहिली रचना असते.\nप्रत्येक धडा संपल्यावर एक छोटे function स्वतः लिहून पहा. उदा. तारीख दिल्यास ती आज आहे का ते सांगणारे function किंवा संख्यांच्या यादीतून सर्वांत मोठी संख्या शोधणारे function. लिहिताना input, process, output याचा विचार केला तर function बनवणे सवयीमध्ये शिरते.\nयेथे एक महत्त्वाची गोष्ट लक्षात ठेवा: function फक्त नियम सांगते — तो नियम कधी वापरायचा हे आपण call करून ठरवतो. म्हणजेच function ची रचना लिहितानाच एकदा निश्चित होते, वापर मात्र program चालताना होतो. हा दृष्टिकोन पुढील सर्व धड्यांमध्ये उपयोगी पडेल.",
      },
      {
        title: "सामान्य अडचणी आणि त्या सोडवण्याचे मार्ग",
        content: "function लिहिताना सुरुवातीला काही चुका वारंवार होतात आणि त्या ओळखणे म्हणजेच अर्धा उपाय. सर्वात पहिली चूक म्हणजे def च्या ओळीच्या शेवटी colon विसरणे. यामुळे SyntaxError: invalid syntax येते. संदेशातील ओळ क्रमांक वाचून तेथे colon जोडणे हाच उपाय आहे.\nदुसरी चूक म्हणजे return विसरणे. function चा निकाल पुढील गणनेत वापरायचा असल्यास return आवश्यक आहे. print ने केवळ स्क्रीनवर दाखवता येते; तो निकाल साठवला जात नाही. म्हणून लिहितानाच विचार करा — या function चा निकाल बाहेर लागेल का? लागणार असेल तर return मध्ये तो निकाल द्या.\nतिसरी सामान्य चूक म्हणजे arguments ची संख्या न जुळवणे. function दोन parameters घेते आणि आपण तीन किंवा एक मूल्य देऊन हाक मारतो तेव्हा TypeError येतो. संदेशात function चे नाव, गहाळ असलेले argument आणि त्याचा प्रकार स्पष्ट लिहिलेला असतो — तो संदेश पूर्णपणे वाचण्याची सवय लावा.\nचौथी चूक म्हणजे return नंतर ओळी लिहिणे. return ने function संपते, त्यानंतरच्या ओळी कधीही चालत नाहीत. ही चूक शोधायला वेळ लागतो कारण त्रुटी येत नाही — फक्त निकाल चुकतो. म्हणून return ही function मधील शेवटची ओळ असू द्या.\nपाचवी चूक म्हणजे function च्या नावात spaces किंवा चुकीची चिन्हे वापरणे. नाव एकाच शब्दात, lowercase मध्ये ठेवावे आणि शब्द जोडायचे असतील तर underscore वापरावा. calculate_bill योग्य आहे; calculate bill किंवा CalculateBill प्रमाण probes चुकीचे.\nप्रत्येक त्रुटी संदेश हा शिक्षक आहे. तो ओळ क्रमांक देतो आणि काय अपेक्षित होते ते सांगतो. घाबरून code इकडेतिकडे बदलू नका; संदेश वाचा, ओळ क्रमांकावर जा आणि function ची रचना पुन्हा एकदा तपासा — colon, indentation, parameters आणि return. या चार गोष्टींची तपासणी बहुतेक प्रत्येक चूक शोधून देते.",
      },
      {
        title: "सरावाची धडपड — function घट्ट करण्यासाठी कार्ये",
        content: "function ची सवय लागण्यासाठी खालील कार्ये स्वतः करून पहा. प्रत्येक कार्यानंतर output आधी अपेक्षित स्वरूपात लिहा आणि नंतर program चालवा — अशी तुलना केली तरच खरी शिकवण होते.\nकार्य एक: क्षेत्रफळ काढणारे function लिहा — triangle(base, height) जे base गुणिले height च्या निम्मे मूल्य परत करते. मूल्ये 5 आणि 8 दिल्यास उत्तर 20.0 यायला हवे.\nकार्य दोन: स्वागत संदेश देणारे function लिहा — greet(name, time). वेळ सकाळ असल्यास शुभप्रभात आणि संध्याकाळ असल्यास शुभ संध्याकाळ असा संदेश द्या.\nकार्य तीन: समता तपासणारे function लिहा — is_even(n) जे सम संख्येसाठी True आणि विषम संख्येसाठी False परत करते. ते वापरून 1 ते 20 मधील सम संख्या छापून पहा.\nकार्य चार: किंमतींच्या यादीवर default कर लावून एकूण रक्कम देणारे function लिहा. निकालात मूळ एकूण आणि करासह एकूण असे दोन्ही दाखवा.\nकार्य पाच: शब्दांची संख्या मोजणारे function लिहा — word_count(text) जे दिलेल्या वाक्यातील एकूण शब्द संख्या परत करते. यासाठी split() method ची मदत घ्या.\nप्रत्येक कार्य घाईने न करता हळूही करा. चूक झाल्यावर function मधील ठिकाणी print टाकून मध्यवर्ती निकाल तपासा — अशा प्रकारे debug करण्याची सवय लागते.\nही सवय इंग्रजीत debugging म्हणतात आणि ती प्रत्येक programer च्या आयुष्याचा अविभाज्य भाग आहे. चुका होणे सामान्य आहे; महत्त्वाचे म्हणजे त्या शोधण्याची पद्धत असणे. म्हणून प्रत्येक चूक ही शिकण्याची संधी समजून घ्या.\nवेळ मिळेल तेव्हा छोटा calculator बनवा — दोन संख्या आणि operator घेऊन बेरीज, वजाबाकी, गुणाकार, भागाकार करणारे function लिहा. ही function ची व्यावहारिक परीक्षा आहे कारण प्रत्येक operator साठी वेगळे function आणि एक मुख्य function जे योग्य ते निवडते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official) Resources",
        content: "function च्या अधिक माहितीसाठी Python चे अधिकृत दस्तऐवज वापरा:\n\n• Functions ची व्याख्या (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• Function call चे नियम (अधिकृत): https://docs.python.org/3/reference/expressions.html#calls\n• More on defining functions (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions\n• The return statement (अधिकृत): https://docs.python.org/3/reference/simple_stmts.html#return\n• Built-in functions ची यादी (अधिकृत): https://docs.python.org/3/library/functions.html\n• PEP 8 नामकरण आणि शैली नियम (अधिकृत): https://peps.python.org/pep-0008/\n• Python interactive सुरुवात (अधिकृत): https://docs.python.org/3/tutorial/interpreter.html\n• दस्तऐवजाचा निर्देशांक (अधिकृत): https://docs.python.org/3/index.html\n• Python अधिकृत संकेतस्थळ (अधिकृत): https://www.python.org\n• Python अधिकृत चर्चा परिषद (अधिकृत): https://discuss.python.org\n\nहे सर्व अधिकृत Python reference आहेत. शंका आली की या दस्तऐवजांकडे परत या — त्यातील प्रत्येक शब्द विश्वसनीय आणि अद्ययावत आहे.",
      },
    {
        title: "आठवण — function चे सर्व नियम थोडक्यात",
        content: "function शिकण्याचा धडा संपवण्यापूर्वी सर्व मुख्य नियम एकत्र आठवूया. ही यादी अभ्यास करताना वारंवार उघडून पहा — ती संदर्भ म्हणून कामी येते.\n\n• def मुळे function तयार होते — def नाव(parameters): वर colon आणि खाली indentation\n• parameters ही function ला दिली जाणारी input गणनेची नावे\n• arguments ही हाक मारताना दिलेली खरी मूल्ये\n• return निकाल परत करतो आणि function थांबते\n• return नसलेली function None — म्हणजे काहीही नाही — परत करते\n• print फक्त स्क्रीनवर दाखवते — पुढील गणनेत वापरता येत नाही\n• default parameter function च्या शेवटी लिहावा\n• function च्या आतचा variable function बाहेर दिसत नाही\n• एक function एकच काम करावे — तपासणे सोपे होते\n• नाव lowercase आणि underscore सह — calculate_bill, get_total\n\n\nही यादी लक्षात ठेवण्यासाठी फक्त वाचून भागत नाही — प्रत्येक नियमाची लहान उदाहरणे स्वतः लिहा. उदा. return नसलेली function लिहून तिचा निकाल वापरण्याचा प्रयत्न करा आणि None मिळतो हे पहा. default parameter ला मूल्य देताना आणि न देताना दोन्ही हाका करून फरक निरखून घ्या.\nप्रत्येक function शाळेतील निबंधासारखी असते — सुरुवात (def), मध्य (काम) आणि शेवट (return). तिचे नाव वाचकाला विषय सांगते आणि आतले नियम निकाल देउन थांबतात.\nपुढील धड्यांमध्ये parameters चे प्रकार, scope, lambda आणि recursion असे सर्व function वरच उभे आहेत. आजचा पाया घट्ट असल्यास पुढील सर्व धडे एका पाउलावरूनच समजतील.",
      },
    {
        title: "परीक्षेची तयारी — function मधून विचारले जाणारे प्रश्न",
        content: "function हा परीक्षा किंवा मुलाखतीचा आवडता विषय आहे. काही प्रश्न वारंवार विचारले जातात आणि त्यांची तयारी आधी करून ठेवणे चांगले. पहिला प्रश्न: function का वापरायची? उत्तर तीन फायद्यांनी द्या — code पुन्हा लिहावा लागत नाही, कोड आयोजित राहतो आणि बदल एका ठिकाणी करता येतो.\nदुसरा प्रश्न: print आणि return मध्ये काय फरक? उत्तर स्पष्ट द्या — print निकाल फक्त स्क्रीनवर दाखवतो, return निकाल function बाहेर सोपवतो जो पुढील गणनेत वापरता येतो. दोन्हींचा वापर वेगवेगळ्या उद्देशांसाठी होतो.\nतिसरा प्रश्न: default parameter म्हणजे काय? उत्तर — function च्या व्याख्येत parameter ला आधीच मूल्य देणे. हाक मारताना मूल्य न दिल्यास ते default वापरले जाते. पण default parameter नेहमी शेवटी लिहावा हेही सांगा.\nचौथा प्रश्न: function च्या नावासाठी कोणते नियम? उत्तर — lowercase अक्षरे, शब्दांमध्ये underscore, क्रियापदासारखे अर्थपूर्ण नाव. calculate_bill, get_total अशी नावे वाचणाऱ्याला function चे काम सांगतात.\nपाचवा प्रश्न: function मध्ये return न लिहिल्यास काय होते? उत्तर — function None परत करते; तो मूल्य काहीही नसण्याचा संकेत आहे. निकाल पुढील गणनेत हवा असेल तर return आवश्यक आहे.\nसहावा प्रश्न: scope म्हणजे काय? उत्तर — variable कोठून दिसतो याचा नियम. function आतचा variable local, बाहेरचा global. local बाहेर दिसत नाही; ही मर्यादाच सुरक्षा रचना आहे.\nया प्रश्नांची तयारी करताना प्रत्येक उत्तराचे लहान उदाहरण मनात ठेवा. मुलाखतकाराला वाचलेले उत्तर नको, प्रत्यक्ष केलेले उदाहरण हवे असते. उदाहरण दिल्यावर समज सिद्ध होते.\nप्रत्येक उदाहरण REPL मध्ये चालवून पहा — def, return, default, scope एकत्र वापरणारे लहान function लिहा आणि output पडताळा. संपूर्ण तयारी म्हणजे केवळ वाचन नाही तर ते code टाईप करून प्रत्यक्ष निकाल पाहणे.\nजर वेळ असेल तर दोन function लिहा ज्या एकमेकींना हाक मारतात — एक function बेरीज करते, दुसरी तिचा निकाल वापरून ग्रॅड ठरवते. अशा संयोजनाने function ची परस्पर मदत समजते आणि मोठा program कसा उभा राहतो ते कळते.",
      },
    ],
    practiceQuestions: [
      "def वापरून function कशी बनवतात?",
      "return काय करतो?",
      "default parameter म्हणजे काय?",
      "balance calculator: जमा-वजा करणारी function लिहा",
    ],
    quiz: [
      {
        question: "Function बनवण्यासाठी कोणता keyword वापरतात?",
        options: ["func", "function", "def", "define"],
        correct: 2,
      },
      {
        question: "Function मधून value परत मिळवण्यासाठी कोणता keyword?",
        options: ["yield", "return", "send", "out"],
        correct: 1,
      },
      {
        question: "return न करताच function काय देतो?",
        options: ["None", "0", "error", "string"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "एक function square(a) लिहा जी a चा वर्ग परत करते. त्याला 2, 5 आणि 10 देऊन print करा.",
      starterCode: `def square(a):
    return a * a

print(square(2))
print(square(5))
print(square(10))`,
      expectedOutput: "4\n25\n100",
    },
    interviewQuestions: [
      "return vs print मध्ये फरक?",
      "default parameter कधी वापरतात?",
      "function नावासाठी कोणती conventions?",
    ],
    related: ["python-functions-params", "python-lists", "python-loops-project"],
    prev: "python-loops-project",
    next: "python-functions-params",
  },

  {
    slug: "python-functions-params",
    categoryId: "python",
    title: "Parameters & Arguments",
    marathiTitle: "Parameters व Arguments",
    level: "intermediate",
    minutes: 14,
    summary: "Function ला data कसे द्यायचे आणि कसं मिळवायचं.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "parameters आणि arguments म्हणजे काय?",
        content: "function ची व्याख्या लिहिताना कंसांमध्ये नावे ठेवतो — त्यांना parameters म्हणतात. function ला हाक मारताना त्या नावांना खरी मूल्ये देतो — त्यांना arguments म्हणतात. व्याख्येतील नावे parameters, वापरातील मूल्ये arguments. हा फरक ठाम लक्षात ठेवा.\nउदाहरणार्थ info function मध्ये name आणि age ही parameters आहेत; हाक मारताना दिलेले विलास, 25 ही arguments. parameters function च्या आत वापरता येतात आणि function बाहेरच्या जगाशी फक्त याच दारातून जोडली जाते.\nparameters च्या निवडीने function चा वापर सोपा किंवा कठीण होतो. नावे अर्थपूर्ण ठेवा — name, age, grades अशी नावे वाचणाऱ्याला कोणते मूल्य कुठे जाते ते लगेच सांगतात.\nparameters चे पाच प्रकार आहेत: positional (क्रमाने दिलेले), default (आधीच ठरवलेले), keyword (नाव देऊन दिलेले), *args (अनेक मूल्यांचा tuple) आणि **kwargs (अनेक key=value जोड्यांचा dict). प्रत्येक प्रकार वेगळ्या परिस्थितीत उपयोगी आहे.",
      },
      {
        title: "Syntax: default, *args, **kwargs",
        content: "function च्या व्याख्येची रचना अशी आहे — def नंतर नाव, कंसात parameters आणि शेवटी colon. default parameter ला मूल्य येथेच दिले जाते (c=10). *args मधून Python tuple बनवते आणि **kwargs मधून dict बनवते. तारा (*) हीच सांकेतिक खूण आहे.\ndef f(a, b, c=10):  आणि  def g(*args):  → tuple मिळेल   def h(**kwargs):  → dict मिळेल.  एकाच params चा घोषणेसाठी हा नमुना.\nmix function खाली *args चा वापर दाखवते — कितीही मूल्ये स्वीकारून sum ने बेरीज करते. mix(1, 2, 3) म्हणजे 6 आणि mix(10, 20) म्हणजे 30.\nजेव्हा function ला नेमकी किती मूल्ये मिळतील हे ठाऊक नसते तेव्हा *args वापरतो. प्रत्येक हाक वेगळ्या संख्येने मूल्ये देते; Python ती एकत्र करून tuple बनवते. ही function ची लवचिकता आहे.",
        code: `def mix(*args):
    return sum(args)

print(mix(1, 2, 3))
print(mix(10, 20))`,
        codeLanguage: "python",
        output: `6
30`,
      },
      {
        title: "Keyword arguments",
        content: "keyword arguments मध्ये नाव देऊन मूल्ये लिहिली जातात, उदा. info(age=25, name=\"विलास\"). याचा फायदा: मूल्यांचा क्रम महत्त्वाचा नाही. येथे age आधी लिहिले तरी ते age लाच जाते — नाव हेच अट आहे.\ninfo function दोन्ही parameters आवश्यक आहेत (required). दोन्ही नावासोबत दिल्याने क्रमाची चिंताच नाही. खालील कोड चालवल्यास विलास कोण - 25 वर्षांचा/ती असे वाक्य छापते — f-string मध्ये name आणि age ची मूल्ये बसतात.\npositional आणि keyword एकत्र वापरताना positional आधी आणि keyword नंतर द्या — हा क्रम Python ला आवश्यक आहे.\nजेव्हा parameters ५-६ एवढी असतात तेव्हा positional मध्ये क्रम चुकण्याचा धोका असतो. keyword ने कोड वाचणाऱ्याला कोणते मूल्य कोणत्या parameters ला आहे हे कंसातच दिसते — स्पष्टता हाच keyword चा मुख्य फायदा.",
        code: `def info(name, age):
    print(f"{name} कोण - {age} वर्षांचा/ती")

info(age=25, name="विलास")`,
        codeLanguage: "python",
        output: `विलास कोण - 25 वर्षांचा/ती`,
      },
      {
        title: "वास्तविक उदाहरण: गुणांची सरासरी",
        content: "वास्तविक उदाहरण — गुणांची बेरीज आणि सरासरी. stats function कितीही गुण घेते (80, 90, 70) आणि return ने बेरीज, संख्या आणि सरासरी असे तीन निकाल देते.\nfunction एकापेक्षा अधिक निकाल return करू शकते — return total, count, total / count लिहिल्यास ही तिन्ही मूल्ये tuple बनून येतात. निकाल स्वीकारताना pus, qty, avg अशा तीन व्हेरिएबलमध्ये खोलतो — याला unpacking म्हणतात.\n80 + 90 + 70 = 240, गुणांची संख्या 3, सरासरी 240/3 = 80.0. f-string मध्ये .1f ने सरासरी एक दशांश ठिकाणी दिसते.\nहीच function कोणत्याही गुणांच्या यादीसाठी वापरता येते — संख्या कितीही असो, बेरीज आणि सरासरी आपोआप येते. नेमकी संख्या ठाऊक नसलेल्या मूल्यांसाठी *args लवचिक आहे.",
        code: `def stats(*grades):
    total = sum(grades)
    count = len(grades)
    return total, count, total / count

pus, qty, avg = stats(80, 90, 70)
print(f"एकूण: {pus}, प्रश्न: {qty}, सरासरी: {avg:.1f}")`,
        codeLanguage: "python",
        output: `एकूण: 240, प्रश्न: 3, सरासरी: 80.0`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ required parameter न देता हाक मारणे — function ला आवश्यक मूल्य मिळत नाही आणि TypeError येतो. संदेश वाचून कोणते argument गहाळ आहे ते पहा आणि ते द्या.\n✗ positional आणि keyword चा क्रम उलटणे — keyword मूल्ये आधी लिहिली किंवा positional नंतर लिहिली तर Python गोंधळतो आणि SyntaxError देतो. नियम: positional आधी, keyword नंतर.\n✗ *args आणि **kwargs एकत्र वापरताना ठिकाणे चुकवणे — क्रम स्थिर पाळा: positional, नंतर default, नंतर *args, शेवटी **kwargs.\n✗ mutable default वापरणे — उदा. def f(x=[]) लिहिल्यास तोच list सर्व हाकांना सामायिक राहतो आणि एकत्र बदलतो. याऐवजी default None करा आणि function च्या आत yादी तयार करा: def f(x=None) नंतर if x is None: x = [].\n✗ function मधून अनेक निकाल मिळवायचे असतील तर return चा क्रम स्पष्ट ठेवा — unpacking त्या क्रमानेच मूल्ये वाटते.",
      },
      {
        title: "महत्त्वाचे क्रम: positional → default → *args → **kwargs",
        content: "parameters च्या व्याख्येचा नियम फक्त असा: positional parameters हमखास आधी, नंतर default parameters, नंतर *args आणि शेवटी **kwargs. हा क्रम function च्या रचनेचा स्थिर आधार आहे.\nहे क्रम पाळले नाहीत तर Python ला function ची रचना समजत नाही. default parameter नेहमी शेवटी लिहावा चा नियम workbooks तशीच इथेही — बहुतेक हाकांसाठी default पुरेसे असते, विशेष बाबतीतच नवे मूल्य दिले जाते.\n*args tuple बनतो — क्रमाचा संग्रह; **kwargs dict बनतो — नाव-मूल्य जोडी. दोन्हीचे स्वरूप कधी गोंधळू नये: एक महत्त्वाचा का दुसरा कितीही मूल्ये.\nव्यवहारात प्रत्येक function याच चौकटीत बसते. ही तिन्ही नियम लक्षात ठेवल्यास function ची व्याख्या आणि हाक दोन्ही स्थिर आणि वाचकांना समजेल अशी राहते.",
      },
      {
        title: "Interactive: **kwargs सह profile",
        content: "interactive उदाहरणात **kwargs चा वापर पहा. profile function data नावाचा dict घेते. data.items() प्रत्येक नाव-मूल्य (key-value) जोडी क्रमाने देते आणि print प्रत्येक जोडी वेगळ्या ओळीत छापते.\nहाकेत name, city, job अशी नावे (keys) आणि सायली, नागपूर, Teacher अशी मूल्ये (values) दिली आहेत. Python ती सर्व dict मध्ये एकत्र करते — येथूनच output मध्ये name: सायली, city: नागपूर, job: Teacher अशा तिही ओळी दिसतात.\nही रचना form data, configuration आणि user profiles मध्ये सामान्य आहे. प्रत्येक वेळी नेमकी किती माहिती मिळेल हे कळत नाही — **kwargs function ला साधी ठेवत आणि वैविध्य सामावते.\nस्वतः वेगळे data देऊन function चालवून पहा — output मध्ये जोड्यांचा क्रम dict च्या क्रमाप्रमाणेच पाळला जातो.",
        code: `def profile(**data):
    for key, val in data.items():
        print(f"{key}: {val}")

profile(name="सायली", city="नागपूर", job="Teacher")`,
        codeLanguage: "python",
        output: `name: सायली
city: नागपूर
job: Teacher`,
      },
    {
        title: "सखोल अभ्यास — parameters चे पाच प्रकार आणि त्यांची भूमिका",
        content: "parameters हे function चे प्रवेशद्वार आहेत — त्यांतूनच function ला माहिती मिळते. Python मध्ये parameters चे पाच प्रकार आहेत आणि प्रत्येकाची परिस्थिती वेगळी: positional, default, keyword, *args आणि **kwargs.\npositional parameters क्रमाने मूल्ये घेतात — दिलेला पहिला argument पहिल्या parameter ला जातो. क्रम चुकला तर मूल्ये चुकीच्या ठिकाणी पोहोचतात आणि चूक शोधणे कठीण होते. म्हणून अनेक positional parameters असतील तर क्रम जपून हाक मारा.\ndefault parameters संख्या कमी करतात — हाक मारताना मूल्य न दिल्यास ठरलेले default मूल्य वापरले जाते. बहुतेक वापरकर्त्यांसाठी एकच मूल्य अपेक्षित असेल तेव्हा default ठेवल्याने हाक मारताना ते लिहिण्याची सक्ती नाही.\nkeyword arguments नाव देऊन दिले जातात — order ची बंधने नसतात. get(age=25, name=\"विलास\") लिहिल्यास नावाची जोडी नक्की असते, क्रम काहीही असो. यामुळे कोड कंसातच वाचता येतो.\n*args बहुसंख्य positional मूल्ये tuple मध्ये गोळा करतो — function ला नेमकी किती मूल्ये मिळतील हे परत माहीत नसते तेव्हा ही रचना उपयोगी असते. **kwargs बहुसंख्य keyword मूल्ये dict मध्ये गोळा करतो — नाम, मूल्य जोड्या लवचिकपणे मिळतात.\nहा क्रम ठरलेला आहे: positional आधी, नंतर default, नंतर *args आणि शेवटी **kwargs. क्रम पाळला नाही तर SyntaxError येतो — हा नियम Python च्या function रचनेचा पाया आहे. आतापर्यंत प्रत्येक function नेमक्या याच चौकटीत बसते.",
      },
      {
        title: "वास्तविक जगातील उपयोग — वेगवेगळ्या रचना कुठे लागतात",
        content: "व्यावहारिक कामांमध्ये parameters चे प्रकार वारंवार दिसतात. उदाहरणार्थ दुकानी बिल तयार करणारी function: वस्तूंची किंमत positional देऊ शकता, कराचा दर default ठेवू शकता — बहुतेक दिवस तोच दर लागू असल्याने प्रत्येक वेळी तो लिहायची गरज नाही.\nAPI मध्ये data पाठवताना keyword arguments लवचिकता देतात — fields चा क्रम बदलला तरी समस्या नाही. उदा. create_user(name=\"प्रिया\", age=20, city=\"नागपूर\") अशी हाक मारल्यास कोणते मूल्य कोणत्या field मध्ये गेले हे स्पष्ट दिसते.\nreport तयार करणारी function अनेकदा *args घेते — दिवसभरातील विक्री नोंदी नेमक्या संख्येने नसतात. प्रत्येक दिवशी वेगळी संख्या; *args मुळे function कितीही मूल्यांवर चालते.\n**kwargs चा उपयोग settings आणि configuration मध्ये आहे — वापरकर्त्याचा profile अनेक fields ने भरतो; किती fields हे program चालतानाच ठरते. profile(**data) विधान नेमके हेच करते: कोणतेही नाव-मूल्य जोडी एकत्र गोळा करणे.\nमिश्र वापराचे उदाहरण: add_item(name, price, *tags, **meta) — नाव आणि किंमत आवश्यक, tags ऐच्छिक यादी, meta ऐच्छिक तपशील. अशी function वाचणारा त्यावरूनच समजतो कोणती माहिती आवश्यक आणि कोणती ऐच्छिक आहे. हीच रचना मोठ्या library मध्ये सर्वत्र वापरली जाते.",
      },
      {
        title: "mutable default चा सापळा — *, ** च्या वापराच्या अडचणी",
        content: "parameters शिकताना एक सापळा नेहमी उल्लेख करावा लागतो — mutable default argument. def add_item(x, items=[]) असे लिहिल्यास हीच रिकामी यादी सर्व हाकांना सामायिक राहते. पहिल्या हाकेत items मध्ये element साठल्यास दुसऱ्या हाकेला पूर्वीची मूल्ये तशीच दिसतात.\nयाची दुरुस्ती साधी आहे: default म्हणून None ठेवा आणि function च्या आत तपासा — if items is None: items = []. प्रत्येक हाकेला नवीन यादी तयार होते आणि सामायिकरित्या बदलण्याचा धोका टळतो.\nदुसरी अडचण *args आणि **kwargs ची संज्ञा गोंधळण्याची. *args हा tuple सारख्या क्रमाने मूल्ये धारण करतो आणि **kwargs dict सारख्या नाव-मूल्य जोड्या. एकात numbers, दुसऱ्यात pairs. दोघांनाही मिश्र मूल्ये एकत्र करण्याचा व्यवस्थित उपाय असतो पण स्वरूप वेगळे.\nतिसरी अडचण म्हणजे unpacking चा गैरवापर. function ला हाक मारताना * ने यादी उलगडता येते — sum(*args) नाही तर f(*values). हाकवेळचा * list/tuple उलगडतो, व्याख्येवेळचा * संग्रह करतो. दोघांची भूमिका वेगवेगळी आहे.\nचौथी अडचण म्हणजे keyword आणि positional चा क्रम उलटणे — नेहमी द्यायचा order: positional, default, *args, **kwargs. कोणताही व्युत्पन्न क्रम SyntaxError देतो. व्याख्या आणि हाक दोन्ही मध्ये हेच नियम लागू असतात.",
      },
      {
        title: "सराव — parameters ची मजबूत समज घेण्यासाठी कार्ये",
        content: "खालील कार्ये पूर्ण करून parameters ची समज घट्ट करा. प्रत्येक कार्य झाल्यावर output तपासण्याची सवय राखा.\nकार्य एक: describe(title, author, *chapters, **meta) अशी function लिहा — पुस्तकाची माहिती छापणारी. chapters मध्ये अध्यायांची नावे आणि meta मध्ये year, publisher सारखी माहिती द्या.\nकार्य दोन: bake(name, *ingredients, minutes=30) function बनवा — पदार्थाचे नाव आणि साहित्य घेऊन माहिती छापा. default minutes नंतर बदलवून पहा.\nकार्य तीन: तीन positional parameters घेणारी function लिहा आणि तिला keyword arguments ने उलट्या क्रमाने हाक द्या — क्रम चुकूनही निकाल योग्य येतो का ते पडताळा.\nकार्य चार: मागील stats च्या उदाहरणासारखी function लिहा जी कोणत्याही संख्येची बेरीज आणि सरासरी देते. 3, 9, 12, 18 या संख्या दिल्यास उत्तरे तपासा.\nकार्य पाच: mutable default चा सापळा स्वतः निर्माण करा — items=[] ठेवून दोन हाका करा आणि पहा पहिल्या हाकेतील मूल्ये दुसऱ्यात दिसतातात. नंतर None default ला करून फरक जाणा.\nप्रत्येक function च्या हाकेत keyword वापरायची सवय लावा — कोणते मूल्य कोठे जाते हे कोड वाचणाऱ्याला स्पष्ट दिसते. मोठी खाती wet व्यवहारात keyword arguments ही जास्त पसंत केली जातात.\nस्वतःला प्रश्न विचारा — मी कोणत्या परिस्थितीत कोणता parameter प्रकार वापरलं? उत्तर सापडलं की parameters ची निवड योग्य होते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official) Resources",
        content: "parameters आणि arguments च्या अधिक माहितीसाठी Python चे अधिकृत दस्तऐवज वापरा:\n\n• Function parameters ची व्याख्या (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#defining-functions\n• Default arguments (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#default-argument-values\n• Keyword arguments (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#keyword-arguments\n• *args आणि **kwargs (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists\n• Positional-only parameters (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#positional-only-parameters\n• Keyword-only parameters (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html#keyword-only-parameters\n• The return statement (अधिकृत): https://docs.python.org/3/reference/simple_stmts.html#return\n• Function call संदर्भ (अधिकृत): https://docs.python.org/3/reference/expressions.html#calls\n• Built-in functions (अधिकृत): https://docs.python.org/3/library/functions.html\n• Python अधिकृत संकेतस्थळ (अधिकृत): https://www.python.org\n• Python चर्चा परिषद (अधिकृत): https://discuss.python.org\n\nहे सर्व अधिकृत Python reference आहेत. parameters च्या subtle नियमांची शंका आली की या दस्तऐवजांकडे परत या.",
      },
    {
        title: "चुकांमधून शिकणे — TypeError संदेश कसे वाचायचे",
        content: "arguments शी संबंधित चुका TypeError म्हणून दिसतात आणि त्या संदेशात काय कमी पडले ते स्पष्ट लिहिलेले असते. पहिला संदेश असा: missing 1 required positional argument — म्हणजे function ला आवश्यक एक argument मिळाले नाही. संदेशात function चे नावही असते — त्यावरून कोणत्या function ची चूक ते कळते.\nदुसरा संदेश असतो: got an unexpected keyword argument — म्हणजे function च्या parameters मध्ये नसलेले नाव keyword ने दिले. नाव तपासा — spelling चुकल्यास हीच चूक होते. param च्या यादीशी नाव जुळवा.\nतिसरा संदेश: takes 2 positional arguments but 3 were given — म्हणजे parameters पेक्षा जास्त arguments हाकेत दिले. एकतर काय—१ argument काढून टाका किंवा function च्या व्याख्येत parameter वाढवा.\nतुम्ही संदेश वाचूनच चूक शोधण्याची सवय लावा. संदेशात ओळ क्रमांक असतो आणि नेमके काय अपेक्षित होते ते सांगितलेले असते. संदेश वाचल्याशिवाय code आजूबाजूला बदलायला सुरुवात करणे चुकीचे आहे.\nदुसरी कौशल्य म्हणजे स्वतःला function मध्ये योग्य default देणे. बहुतेक हाकांसाठी एकच मूल्य लागत असेल तर default parameter सोयीचे. पण default नेहमी parameters च्या शेवटी लिहा — मधला default Python ला मान्य नाही आणि SyntaxError येतो.\nparameters च्या क्रमाबद्दलही सतत जागरूक राहा: positional आधी, मग default, मग *args आणि शेवटी **kwargs. हा क्रम जणू Constitution आहे — त्यावर प्रत्येक function रचना ठरते.",
      },
      {
        title: "पुढील पाऊल — function design चे सोपे नियम",
        content: "function लिहताना design हा शब्द वापरतात — म्हणजे function ची रूपरेषा कशी आखायची. चांगला design तीन गोष्टींवर ठरतो: parameters कमी, नावे अर्थपूर्ण आणि जबाबदारी एकच.\nparameters कमी ठेवल्यास function वापरणे सोपे होते — हाक मारताना मूल्ये देण्याचा त्रास कमी. 5-6 parameters आले की एका dictionary मध्ये गुंडाळून एक parameter करण्याचा विचार करा. उदा. create_user(name, age, city, job, phone) ऐवजी create_user(data) जेथे data हा dict.\nनावांचा परिणामही मोठा आहे — div(a, b) ऐवजी divide(dividend, divisor) लिहिले तर कोड वाचणाऱ्याला कोणती संख्या कुठे लिहायची हे कंसातच कळते. हाकेच्या वेळेस keyword वापरूनही स्पष्टता येते — divide(dividend=10, divisor=2).\nएक function एकच काम करते हा नियम design मध्ये सर्वात महत्त्वाचा. वापरकर्ता तपासणाऱ्या function ने फक्त तपासणी करावी — छापणे वेगळ्या function ला सोडा. अशी विभागणी केल्यास प्रत्येक function लहान राहते आणि चाचणी करणे सोपे होते.\nमोठ्या library मध्ये function design चा हाच नियम दिसतो — प्रत्येक function कमी मूल्ये घेते, नावे वाचकाला अर्थ सांगतात आणि एकच जबाबदारी असते. तुमची function हीच पद्धत पाळून पहा — काही दिवसांत रचना स्वतःहून सुधारेल.",
      },
      {
        title: "मुलाखतीतील प्रश्न — parameters विषयी संभाषण",
        content: "मुलाखतीत parameters चे प्रश्न नेहमी विचारले जातात. सर्वात पहिला प्रश्न: positional आणि keyword argument मध्ये काय फरक? उत्तर: positional क्रमाने गेलेले argument आणि keyword नाव देऊन दिलेले argument. keyword पेक्षा positional चे अवलंबन कमी — पण spelling जुळायला हवी.\nदुसरा प्रश्न: default argument कधी वापरतात? उत्तर: बहुतेक हाकांना समान मूल्य हवे असताना — उदा. कराचा दर. पण mutable default (list, dict) धोकायचा आहे — तो सर्व हाकांना सामायिक राहतो. उपाय म्हणून default None आणि आत तपासणी.\nतिसरा प्रश्न: *args आणि **kwargs काय देतात? उत्तर: *args म्हणजे कितीही positional मूल्ये — ती tuple मध्ये संग्रहित होतात. **kwargs म्हणजे कितीही keyword मूल्ये — ती dict मध्ये गोळा होतात. दोन्ही function ला लवचिक बनवतात.\nचौथा प्रश्न: print आणि return मध्ये फरक सांगा. उत्तर: print फक्त स्क्रीनवर दाखवते, return निकाल function बाहेर देतो. return केलेला निकाल पुढील गणनेत वापरता येतो; print केलेला नाही.\nपाचवा प्रश्न: function मधून अनेक मूल्ये कशी परत करायची? उत्तर: return a, b लिहिल्यास tuple तयार होतो आणि unpackingने दोन्ही वेगळींना यायला मिळतात. हीच एकदम सामान्य पद्धत.\nसंभाषणात उत्तर देताना लहान कोड उदाहरण सांगा — मुलाखतकाराला तुमची समज प्रत्यक्ष दिसते. वाचून सांगण्यापेक्षा उदाहरण म्हणणे नेहमी जास्त पटवते.",
      },
    {
        title: "उदाहरणांसह — चार प्रकार एकत्र खेळवणे",
        content: "parameters चे चारही प्रकार एकाच function मध्ये कसे बसतात ते पहा. बनवूया register(name, age, *hobbies, **details) — नाव आणि वय आवश्यक, छंद कितीही, तपशील कोणतेही. वाचताना लक्षात येते की function आवश्यक माहितीशिवाय चालू लागत नाही आणि ऐच्छिक माहिती लवचिकपणे सामावते.\nअशी function हाक मारताना name=\"प्रिया\", age=20 लिहा, मग 《छंद आणि details शब्दाने. output मध्ये प्रत्येक घटक कसा आला ते पहा — name आणि age सरळ arguments म्हणून, hobbies एक tuple म्हणून आणि details एक dict म्हणून. या तिन्ही स्वरूपांचा फरक आता स्पष्ट होतो.\nअसा मिश्र वापर आधुनिक library मध्ये सर्वत्र दिसतो. उदा. डेटाबेसची function connection(host, port, *options, **config) — host आणि port नेहमी लागतात, options मध्ये सुरक्षा सेटिंग, config मध्ये नामांकित माहिती. घटकांचा क्रम ठरलेला असतो.\nस्वतः वेगवेगळी मूल्ये देऊन ही function हाक मारा — तीन छंद द्या, नंतर चार द्या; प्रत्येक वेळी output बदलतो हे पहा. नेमकी किती मूल्ये देऊ हे ठरवण्याचे स्वातंत्र्य function मिळते.\nयेथे एक बारकावा लक्षात घ्या — statement मध्ये अनेक प्रकार असले तरी हाकेत त्यांचा क्रम सांभाळावा लागतो: positional आधी, keyword नंतर. पण name= प्रमाणे keyword ने मूल्य दिल्यास क्रम गौण होतो — नाव नक्की असते. हीच लवचिकता अनेक arguments ने function वापरताना मिळते.",
      },
      {
        title: "आठवण — parameters चा निर्णय वृक्ष",
        content: "parameters चा धडा संपवताना एक निर्णय वृक्ष मनात ठेवा. काम लागले की स्वतःला विचारा: ही function किती मूल्ये घेईल? उत्तर ठरले तर positional वापरा — नावे स्पष्ट करा. मूल्ये समान असण्याची शक्यता असेल तर default ठेवा.\nजर मूल्यांची संख्या आधी माहीत नसेल तर *args वापरा — कितीही positional संग्रहित होते. जर नाव-मूल्य जोड्या अनिश्चित असतील तर **kwargs वापरा. आवश्यक आणि ऐच्छिक अशी विभागणी करताना हा वृक्ष मार्ग दाखवतो.\nकधीही विसरू नका की default parameters सर्वात शेवटी असतात आणि *args व **kwargs त्यांच्या योग्य स्थानी. क्रम चुकल्यास SyntaxError संदेश मिळतो. ही चूक काही मोठी नाही — पण प्रत्येक वेळी क्रम लक्षात ठेवणे महत्त्वाचे.\nmutable default हाच सर्वात घातक सापळा आहे. def f(items=[]) न लिहता def f(items=None) लिहा आणि आत तपासून नवीन यादी बनवा. सामायिक lista च्या बदलामुळे निकाल चुकीचा येतो — ही चूक शोधण्यास वेळ लागतो.\nशेवटचा नियम — keyword arguments चा वापर अधिक करा. कारण कोणते मूल्य कोणत्या parameter ला जाते हे कोड वाचणाऱ्याला कंसातच दिसते. मोठी project मध्ये ही शैली जीवन वाचवते. हे चार नियम लक्षात ठेवल्यास parameters ची समज पक्की होते.",
      },
    {
        title: "संपूर्ण सार — parameters चे गाभ्याचे नियम",
        content: "धड्याचा अंतिम सार थोडक्यात आणि क्रमबद्धपणे आठवूया. हे नियम वाचून न थांबता प्रत्येकाचे लहान उदाहरण स्वतः तयार करा — तेव्हाच सार अंगात उतरतो.\nपहिला नियम — व्याख्येतील नावे parameters, हाकेतील मूल्ये arguments. दोन्हींची संख्या जुळली पाहिजे; अन्यथा TypeError येतो. संदेश वाचून function चे नाव आणि गहाळ argument शोधा.\nदुसरा नियम — default parameters शेवटी. mutable default कधीही नको — items=[] ऐवजी items=None आणि आत नवीन यादी बनवा. यामुळे सर्व हाकांना स्वतंत्र यादी मिळते.\nतिसरा नियम — keyword arguments मुळे क्रम स्वातंत्र्य मिळते; कोणते मूल्य कोणत्या parameter ला ते कोड वाचणाऱ्याला कंसातच दिसते. positional आधी आणि keyword नंतर हा क्रम पाळा.\nचौथा नियम — *args अनिश्चित positional tuple करतो आणि **kwargs अनिश्चित keyword dict करतो. दोन्ही function ला लवचिक बनवतात आणि मोठ्या library मध्ये उपयोगी पडतात.\nपाचवा नियम — अर्थपूर्ण parameter नावे ठेवा; a, b ऐवजी price, tax अशी नावे. नावांमुळे function चा वापर स्पष्ट होतो आणि चुका कमी होतात.\nहे पाच नियम एकत्रित लक्षात घेतल्यास parameters च्या विषयातील बहुतांश शंका सुटतात. पुढील धड्यांमध्ये ही संकल्पना scope आणि lambda मध्ये पुन्हा नव्या रूपात दिसेल — पाया घट्ट राहू द्या.",
      },
    ],
    practiceQuestions: [
      "positional vs keyword argument फरक?",
      "*args काय देतो?",
      "default argument कुठे ठेवतात?",
      "sum() function — आता स्वतः *args वापरून बनवा",
    ],
    quiz: [
      {
        question: "*args function मध्ये कशात जातो?",
        options: ["list", "tuple", "dict", "set"],
        correct: 1,
      },
      {
        question: "**kwargs function मध्ये कशात जातो?",
        options: ["list", "tuple", "dict", "set"],
        correct: 2,
      },
      {
        question: "default argument कुठे लिहितात?",
        options: ["सुरुवातीला", "शेवटी", "मध्ये", "कुठेही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "*args वापरून कोणत्याही पाच संख्यांची बेरीज आणि सरासरी देणारी function अ‍ॅव्हरेज/संट लिहा (याला कॉल करून print करा).",
      starterCode: `def stats(*nums):
    return sum(nums), sum(nums) / len(nums)

total, avg = stats(10, 20, 30, 40, 50)
print("बेरीज:", total)
print("सरासरी:", avg)`,
      expectedOutput: "बेरीज: 150\nसरासरी: 30.0",
    },
    interviewQuestions: [
      "positional आणि keyword arguments कधी वापरतात?",
      "mutable default argument का धोकादायक?",
      "*args आणि **kwargs ची भूमिका?",
    ],
    related: ["python-functions", "python-functions-scope", "python-lambda"],
    prev: "python-functions",
    next: "python-functions-scope",
  },

  {
    slug: "python-functions-scope",
    categoryId: "python",
    title: "Scope (Local & Global)",
    marathiTitle: "Variable मध्ये इथले पोहोचणे",
    level: "intermediate",
    minutes: 13,
    summary: "Variable कोठे दिसतो — local, global, nonlocal.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "scope म्हणजे काय?",
        content: "scope म्हणजे variable कोठून दिसतो आणि कोठून नाही याची व्यवस्था. Python मध्ये प्रत्येक variable ला एक क्षेत्र असते. function च्या आत बनवलेल्या variable ला local आणि function च्या बाहेर, module पातळीवर बनवलेल्या variable ला global म्हणतात.\nlocal variable फक्त function च्या आतच दिसतो — बाहेरून तो दिसत नाही. global variable सर्वत्र दिसतो — function च्या आतही वाचता येतो.\nघराच्या उदाहरणातून हे स्पष्ट होते: तुमच्या खोलीतला मोबाईल फक्त खोलीत दिसतो (local), पण घराचे स्वयंपाकघर घरातील सर्वांना उपलब्ध असते (global). जसे शेजाऱ्याला खोलीतील वस्तू दिसत नाही, तसे function आतला variable बाहेरच्या कोडला दिसत नाही.\nएकाच नावाचे variable वेगवेगळ्या ठिकाणी वेगळे अर्थ धरू शकतात — कारण दृश्यता नियम (local/global) वेगळे. जर function च्या आत x = 5 लिहिले तर नवीन local variable तयार होतो; बाहेरच्या x वर त्याचा परिणाम होत नाही.\nfunction आतल्या variable चे आयुष्य function ची हाक पूर्ण झाल्यावर संपते. पुढील हाक तो पुन्हा नव्याने तयार करते — म्हणून प्रत्येक हाकेला स्वतंत्र अवस्था असते.",
      },
      {
        title: "Syntax: local आणि global वाचणे",
        content: "खालील कोड मध्ये name हा global variable आहे आणि lang function च्या आतला local variable आहे. show function दोन्ही वाचते — global name वाचता येतो, म्हणून दोन्ही छापले जातात.\nfunction बाहेर print(name) चालते कारण name global आहे. पण print(lang) function बाहेर लिहिले तर NameError येते कारण lang चे क्षेत्र फक्त function च्या आत आहे.\nया कोडचा output दोन ओळी — आधी \"Python मध्ये: मराठी\" आणि मग \"मराठी\". हे दोन्ही वाचनाचे प्रकार दाखवते: function आत local+global, बाहेर फक्त global.\nreading (वाचणे) सर्वत्र शक्य — global चे वाचन function आतही होते. पण प्रत्येक variable चे क्षेत्र नेमके कुठे ते कोड लिहिले त्या ठिकाणावरून ठरते.",
        code: `name = "मराठी"      # global

def show():
    lang = "Python"   # local
    print(lang, "मध्ये:", name)

show()
print(name)          # global ok
# print(lang)        # NameError! local बाहेर नाही`,
        codeLanguage: "python",
        output: `Python मध्ये: मराठी
मराठी`,
      },
      {
        title: "global keyword ने variable वाढवणे",
        content: "function च्या आत global variable बदलायचा असेल तर global keyword लिहावा लागतो. तो keyword दिल्यावर तो variable function मध्ये local म्हणून नव्याने नाही तर module पातळीवरील global म्हणून वागतो.\ncount = 0 हा global variable आहे. bump function मध्ये global count लिहिले आहे, म्हणून count += 1 हे function च्या आत नवीन local बनवत नाही तर global count वरच होते.\nदोन बंप हाकांमुळे count 0 → 1 → 2 असा वाढतो आणि शेवटी \"एकूण: 2\" छापले जाते.\nglobal keyword विसरल्यास Python count ला local समजते — आणि count += 1 या ओळीत त्रुटी येते. सामान्य परिस्थितीत global बदलणे टाळावे; पण counter सारख्या ठिकाणी ते सोयीचे असते. global usage function च्या सुरुवातीला एकदा दिला म्हणजे पुरेसे.",
        code: `count = 0

def bump():
    global count
    count += 1

bump()
bump()
print("एकूण:", count)`,
        codeLanguage: "python",
        output: `एकूण: 2`,
      },
      {
        title: "वास्तविक उदाहरण: भेटींचा counter",
        content: "वास्तविक उदाहरण — भेटी मोजणारा counter. visits हा global variable; visit function त्याला वाढवून return ने नवीन मूल्य देते.\nvisit() तीन वेळा हाक मारल्यावर प्रत्येक वेळी नवीन मूल्य मिळते — 1, 2, 3. print(visit(), visit(), visit()) मधील तिन्ही हाका क्रमाने चालतात आणि \"1 2 3\" छापते.\nशेवटी visits चे अंतिम मूल्य 3 असल्याने print \"एकूण भेटी: 3\" दाखवते — global व्हेरिएबल बाहेरच्या कोडलाही दिसतो म्हणून हे शक्य आहे.\nअसा counter web applications मध्ये page load ची संख्या मोजण्यासाठी नेहमी वापरला जातो. function मध्ये global वापरताना त्याचा उद्देश स्पष्ट ठेवा — कोणता variable वाढला ते नावावरून कळले पाहिजे.",
        code: `visits = 0

def visit():
    global visits
    visits += 1
    return visits

print(visit(), visit(), visit())
print("एकूण भेटी:", visits)`,
        codeLanguage: "python",
        output: `1 2 3
एकूण भेटी: 3`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ local variable बाहेर (module-level) वापरणे — function आतला variable function बाहेर आणला तर NameError येतो. local चे क्षेत्र नेहमी function च्या आतच असते.\n✗ global keyword विसरून बदल करणे — function आत points = points + x लिहिल्यास Python points ला local समजते; मग points + x मध्ये पूर्वीचा points नसल्याने UnboundLocalError येतो. बदल करायचा असेल तर global keyword हवाच.\n✗ global जास्त वापरणे — खूप global variable मुळे कोड गोंधळलेला आणि अंदाज लावण्यास कठीण होतो. कोणत्या function ने कुठल्या global वर परिणाम केला हे शोधणे अवघड जाते.\nटाळण्याची सोपी पद्धत: प्रत्येक variable कोठे वापरला ते ठरवा — फक्त function आत असेल तर local, फक्त बाहेर असेल तर global, दोन्ही ठिकाणी हवा असेल तर बदलासाठी parameter आणि return वापरा.\nचूक घडल्यावर त्रुटी संदेश वाचा — NameError असेल तर name/क्षेत्र, UnboundLocalError असेल तर global चा प्रश्न तपासा.",
      },
      {
        title: "Interactive: UnboundLocalError समजून घेणे",
        content: "interactive उदाहरणात जाणीवपूर्वक एक चूक दाखवली आहे. points = 100 हा global. add function मध्ये points = points + x लिहिले आहे — या रचनेत Python points ला local समजते; मग points + x ची गणना करताना त्या नव्या local ना अजून मूल्य नसते.\nयामुळे UnboundLocalError येतो. खालील कोड try/except मध्ये ठेवल्याने त्रुटी म्हणून संदेश छापला जातो — output मध्ये तो संदेश दिसतो.\nत्रुटीची मांडणी: cannot access local variable 'points' where it is not associated with a value — म्हणजेच Python ने points ला local मानून त्याच्याशी अजून मूल्य जोडले नाही.\nही जाणीवपूर्वक दाखवलेली चूक शिकवते — global keyword शिवाय function मध्ये बाहेरचा variable बदलता येत नाही. global points लिहिल्यास हीच त्रुटी नाहीशी होते.",
        code: `points = 100

def add(x):
    points = points + x
    return points

try:
    print(add(5))
except UnboundLocalError as e:
    print(f"UnboundLocalError: {e}")`,
        codeLanguage: "python",
        output: `UnboundLocalError: cannot access local variable 'points' where it is not associated with a value`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "function मध्ये (global keyword न सांगितल्यास) सर्व variable local असतात. global variable सर्वत्र दिसतो — function आत वाचता येतो, पण बदल करण्यासाठी global keyword लागतो.\nglobal वाढवणे हे function मध्येच बदलणे आहे — त्याऐवजी parameter देऊन वाढवा आणि return ने निकाल परत घ्या. उदाहरणार्थ counter साठी function ला मूल्य द्या, वाढवा आणि परत करा. अशी रचना function स्वच्छ आणि testing सोपी करते.\nएका function च्या local variable ला दुसऱ्या function ने पाहता येत नाही — यामुळे function स्वतंत्र राहतात आणि गोंधळ टळतो.\nनोंदी वाचून सराव करा: एक function लिहा ज्यात local आणि global दोन्ही वापरले जातात — एक वाचा, एक parameter ने वाढवा.",
      },
    {
        title: "सखोल अभ्यास — scope चा स्थानिक नियम",
        content: "scope म्हणजे variable कुणाला दिसतो याची व्यवस्था. Python मध्ये variable च्या दृश्यता नियम हे घराच्या खोल्यांसारखे आहेत — खोलीच्या आतची वस्तू खोलीत दिसते, घरातील वस्तू सर्वांना दिसते.\nfunction च्या आत तयार केलेल्या variable ला local variable म्हणतात. तो फक्त त्या function मध्येच वापरता येतो; function बाहेर print करण्याचा प्रयत्न केल्यास NameError येते कारण त्या नावाखाली बाहेर काहीही नसते.\nmodule पातळीवर, म्हणजे function च्या बाहेर, तयार केलेल्या variable ला global variable म्हणतात. तो इथेच्या कोडला सर्वत्र दिसतो — function च्या आतही वाचता येतो.\nPython चा मूलभूत नियम असा: function च्या आत वाचताना, त्या नावाचा local variable असेल तर तो मिळतो; नसल्यास global वरून वाचला जातो. पण assignment लिहिल्यावर तो नाव local मानला जातो — जोपर्यंत global किंवा nonlocal keyword न दिला तोपर्यंत.\nvariable चे आयुष्य किती? local variable चे आयुष्य function च्या हाकेच्या आत असते. function संपली की तो नाहीसा होतो. प्रत्येक नवीन हाकेला नवीन अवस्था मिळते — दोन हाकांचे local variable एकमेकांशी संबंध नसतात.\नॉनlocal नावाचा तिसरा प्रकार आतले function (nested function) मधील मध्यम variable बदलण्यासाठी असतो. हा प्रकार प्रगत असल्याने साधे उदाहरण करताना global आणि local या दोनचा वापर पुरेसा आहे.",
      },
      {
        title: "वास्तविक जगातील उपयोग — counter, settings आणि शुद्धता",
        content: "global वरिष्ठ च्या गरजा वास्तविक कामांमध्ये कधी पडतात ते पहा. पहिला नमुना म्हणजे counter — उदा. website वरील भेटी, गेममध्ये score, खेळीतील धावा. अशी variable एकाच जागी राहते आणि function तिला वाढवते.\nदुसरा नमुना म्हणजे configuration — app ची settings एका ठिकाणी ठेवून त्यांचे वाचन करणे. उदा. थीमचा रंग, default भाषा. function त्यांचे वाचन करते, बदल करणारी function वेगळी असते. अशा रचनेत http variable योग्य ठरतात.\nपण खूप global variable हा रोग आहे. कोणती function कुठला global बदलते हे सांगणे अवघड होते. एका function ने बदललेले global दुसऱ्या function ला गोंधळवू शकते. हीच कारणे शैली नियमांमध्ये global कमीत कमी वापरायला सांगतात.\nशुद्ध function (pure function) ही आधुनिक पसंती आहे: ती फक्त parameters वर काम करते आणि निकाल return करते; कोणताही बाहेरचा variable बदलत नाही. अशी function तपासण्यास सोपी असते कारण तिचे वर्तन फक्त तिच्या input वर अवलंबून असते.\nजेथे शक्य असेल तेथे state function च्या बाहेर ठेवण्याऐवजी parameters मधून पाठवा आणि निकाल return ने घ्या. यामुळे कोड अंदाज लावण्यास सोपा राहतो. counter चा counter ही साफ गरज असले तरी सामान्य नियम हाच — बाहेरचा state कमी, parameter आणि return जास्त.",
      },
      {
        title: "सामान्य अडचणी — UnboundLocalError आणि observe स्थिती",
        content: "scope शी संबंधित सर्वात सामान्य त्रुटी दोन आहेत. पहिली म्हणजे NameError — function मध्ये असा नाव वाचण्याचा प्रयत्न होतो जो local नाही आणि global मध्येही नाही. ही त्रुटी म्हणजे नाव कुठेही परिभाषित नाही हे सांगणारा संदेश आहे.\nदुसरी त्रुटी म्हणजे UnboundLocalError — function मध्ये assignment केलेल्या नावाला assignment च्या आधी वाचण्याचा प्रयत्न. Python मध्ये function च्या आत assignment म्हणजे तो नाव local होतो. म्हणून points = points + 1 या ओळीत उजव्या बाजूचा points अजून बांधलेला नाही आणि त्रुटी येते.\nही त्रुटी दूर करण्यासाठी दोन मार्ग: बाहेरचा बदल करायचा असेल तर global keyword लिहा; नाहीतर आत नवीन नाव वापरा. दोन्हींपैकी वाक्यरचना कशी निवडायची ते कामाच्या स्वरूपावर ठरते.\nglobal keyword चा वापर तेव्हाच करा जेव्हा खरेच module पातळीवरील variable बदलायचा असतो. अन्यथा global लिहिल्याने दोन function एकाच variable च्या आत बदलत असल्याने गोंधळ वाढतो.\nआणखी एक बारीक गोष्ट: function आत मिळणाऱ्या global variable चे वाचन संपूर्ण function मध्ये शक्य आहे; बदल मात्र सुरक्षेसारख्या ठिकाणी नियंत्रणाने करावा. begin globally लिहिल्यास वाचण्याच्या आधीच बदलण्याची जोखीम कमी होत नाही.",
      },
      {
        title: "सराव — scope नियमांचा प्रयोग",
        content: "आता scope नियम प्रत्यक्ष आजमावून पहा. खालील प्रयोग प्रत्येकी REPL किंवा लहान script मधून करा.\nप्रयोग एक: function मध्ये local variable बनवा आणि ती function बाहेर print करण्याचा प्रयत्न करा — NameError चा संदेश लक्षात घ्या.\nप्रयोग दोन: global variable function मध्ये वाचा — हे success शक्य असल्याचे पडताळून घ्या.\nप्रयोग तीन: global variable function मध्ये global keyword शिवाय वाढवण्याचा प्रयत्न करा — UnboundLocalError दिसेल; मग global keyword जोडून पुन्हा चालवा आणि फरक जाणा.\nप्रयोग चार: दोन function लिहा — एक global variable वाढवते, दुसरी तेच मूल्य छापते. दोघांचा क्रम बदलून output बदलतो का ते पहा.\nप्रयोग पाच: समस्या function बनवा जी parameters घेते आणि निकाल return करते — बाहेरच्या कोणत्याही variable ला स्पर्श करत नाही. या शुद्ध function ला दोन वेळा एकाच input ने हाक द्या — output दोन्ही वेळा सारखे येते का ते तपासा.\nप्रत्येक प्रयोगाबरोबर लिहा: कोणता variable कोणत्या scope मध्ये आहे? बदल होत का? हे तीन प्रश्न विचारून scope ची संपूर्ण चित्र नक्की होते.\nशेवटी उलट चिंतन करा — तुमच्या code मधील प्रत्येक variable चे scope काय? नियमाबाहेर कुठेही global नको का? हा प्रश्न स्वतःला रोज विचारायची सवय लावा.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official) Resources",
        content: "scope आणि variable च्या माहितीसाठी Python चे अधिकृत दस्तऐवज वापरा:\n\n• Naming and binding नियम (अधिकृत): https://docs.python.org/3/reference/executionmodel.html#naming-and-binding\n• The global statement (अधिकृत): https://docs.python.org/3/reference/simple_stmts.html#global\n• The nonlocal statement (अधिकृत): https://docs.python.org/3/reference/simple_stmts.html#nonlocal\n• LEGB rule स्पष्टीकरण (अधिकृत): https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces\n• Built-in functions (अधिकृत): https://docs.python.org/3/library/functions.html\n• Function definitions (अधिकृत): https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• Execution model माहिती (अधिकृत): https://docs.python.org/3/reference/executionmodel.html\n• Python अधिकृत संकेतस्थळ (अधिकृत): https://www.python.org\n• Python चर्चा परिषद (अधिकृत): https://discuss.python.org\n• Python documentation index (अधिकृत): https://docs.python.org/3/index.html\n\nहे सर्व अधिकृत Python reference आहेत. scope बाबतची शंका आली की या दस्तऐवजांकडे परत या.",
      },
    {
        title: "आठवण — variable दृश्यता चे नियम थोडक्यात",
        content: "scope चा धडा संपवण्याआधी मुख्य नियम एकत्र आठवूया. ही यादी नेहमी हाताशी ठेवा — ती सर्व प्रश्नांची उत्तरे सांगते.\n\n• function च्या आत तयार केलेला variable — local\n• function च्या बाहेर, module पातळीवरचा variable — global\n• local variable फक्त function मध्ये दिसतो; बाहेर NameError\n• global variable सर्वत्र दिसतो; function आतही वाचता येतो\n• function मध्ये assignment म्हणजे local variable तयार होतो\n• बाहेरचा variable function मध्ये बदलायचा असेल तर global keyword\n• UnboundLocalError म्हणजे assignment च्या आधी वाचण्याचा प्रयत्न\n• एका function चा local दुसऱ्या function ला दिसत नाही\n• खूप global कोड गोंधळ घालतो — कमीत कमी वापरा\n\n\nआठवणीप्रमाणे सराव करा — एक लहान script मध्ये global variable आणि दोन function लिहा. एक function त्याचे वाचन करते, दुसरी तो बदलते. दोन्हीमध्ये काय काय शक्य आणि काय अशक्य ते प्रत्यक्ष अनुभवा.\nप्रत्येक variable चा विचार करता तीन प्रश्न विचारा: तो कुठे तयार होतो? कोणती function तो वाचू शकते? बदलू शकते का? या तीन उत्तरांनुसार scope आपोआप स्पष्ट होते.\nscope ही सुरक्षा व्यवस्था आहे — एका function च्या आतील घडामोडींचा बाहेरील कोडला त्रास होऊ नये हा तिचा हेतू. ती नियम असल्याने गोंधळ नको; अपेक्षित व्यवस्था समजून घ्या.",
      },
      {
        title: "मुलाखतीतील प्रश्न — scope विषयी संभाषण",
        content: "scope चे प्रश्न मुलाखतीत वारंवार येतात. पहिला प्रश्न: local आणि global variable मध्ये फरक सांगा. उत्तर: local function आत राहतो आणि त्याचे आयुष्य कमी असते; global संपूर्ण module मध्ये दिसतो. निर्मितीच्या स्थळावरून हे ठरते.\nदुसरा प्रश्न: function मध्ये global variable बदलण्यासाठी काय करावे? उत्तर: global keyword लिहावा. तो keyword न दिल्यास Python साठी तो variable local मानला जातो आणि विद्यमान global बदलत नाही.\nतिसरा प्रश्न: UnboundLocalError कधी येतो? उत्तर: function मध्ये assignment लिहिलेल्या नावाची assignment च्या आधी वाचण्याचा प्रयत्न झाल्यास. उदा. points = points + 1 — Python points ला local मानतो पण अजून तो बांधला नाही.\nचौथा प्रश्न: global जास्त वापरणे का standard नाही? उत्तर: कारण कोणती function कुठला global बदलते हे लक्षात ठेवणे कठीण होते; कोड गोंधळलेला आणि अंदाज लावण्यास कठीण बनतो. शुद्ध function — parameters मधून input, return ने output — अधिक सुरक्षित असते.\nपाचवा प्रश्न: nonlocal म्हणजे काय? उत्तर: nested function ला मध्यम variable बदलण्यासाठी वापरले जाणारे keyword. closure तयार करताना आवश्यक होते पण सामान्य कोडमध्ये फार क्वचित लागते.\nमुलाखतीत या प्रश्नांची उत्तरे निव्वळ यादी नको — लहान उदाहरण देऊन सांगा. उदाहरण असेल तर समज सिद्ध होते आणि examiner ला खात्री पटते.",
      },
      {
        title: "प्रयोगशाळा — scope चे प्रत्यक्ष प्रयोग",
        content: "आता scope च्या नियमांची प्रयोगशाळा करूया. प्रत्येक प्रयोग एका नवीन लहान script मध्ये करा आणि निकाल लिहून ठेवा.\nप्रयोग एक: value = 10 या global variable चे function आत वाचन करा — print(value) function आत करा आणि बाहेरही करा. दोन्ही ठिकाणी निकाल दिसतो हे पडताळा.\nप्रयोग दोन: function आत value = 20 लिहा आणि function बाहेर print(value) करा — आतचे बदल बाहेर दिसत नाहीत हे पडताळून घ्या. हा नियम समजला की scope चा गाभा सापडला.\nप्रयोग तीन: global keyword वापरून function आत global variable बदला आणि नंतर बाहेर print करा — बदल दिसला तर keyword आता काम करतो. global keyword व्यतिरिक्त बदल झाला नाही तर फरक जाणत आहात.\nप्रयोग चार: function आतल्या variable ला function बाहेर print करण्याचा प्रयत्न करा — NameError येते हे पहा. हा अपेक्षित संदेश आहे; तो वाचू शकाल तर scope संबंध स्पष्ट झाला.\nप्रयोग पाच: समान नावाचे दोन variable — एक global, एक दुसऱ्या function मध्ये local. दोन्ही function स्वतंत्रपणे चालतात आणि एकमेकांना त्रास देत नाहीत हे तपासा.\nप्रत्येक प्रयोग संपल्यावर एक ओळीत निष्कर्ष लिहा — तो निरीक्षण लक्षात राहतो. एवढे प्रयोग झाले की scope चे नियम कंठस्थ होतात.",
      },
    {
        title: "उदाहरणासह — counter बाहेर चालवणे, कोड रचला की सुटतो",
        content: "वास्तविक कोडमध्ये counter मध्ये global ही गरज आणि बचाव सोबत दिसतात. उदा. वेबसाईटवरील भेटींची संख्या मोजायची आहे. visits हा global variable आणि visit() ही function तो वाढवते — प्रत्येक हाकेला एक. असा counter काही काळ सरळ वाटतो.\nपण counter बाहेरही चालवता येतो — function ला parameter म्हणून सध्याची संख्या द्या, वाढवा आणि return ने परत द्या. counter(current) function लिहा; हाक मारताना नवीन संख्या नवीन variable मध्ये ठेवा.\nअशा शुद्ध function चे फायदे मोठे आहेत — दोन function ला एकstack नाही, म्हणजे एक function बाहेरच्या state शी कधीही जोडत नाही. चाचणी सोपी होते — counter(5) म्हणजे 6 हा उत्तर नेहमी सारखा.\nglobal कधी अपरिहार्य असतो? जेव्हा function नाही तर संपूर्ण program ला सामायिक अवस्था हवी असते — उदा. app च्या सुरुवातीला setup केलेली configuration. तिला प्रत्येक function वाचू शकेल अशी रचना global न वापरताही होते — parameters ने पाठवून.\nm्हणून नियम समजून घ्या: state हातातून द्या (parameter) आणि निकाल हातात घ्या (return). global हा शेवटचा पर्याय असू द्या. हीच रचना कोडला अंदाज लावण्यास सोपी आणि तपासण्यास सुलभ ठेवते.\nव्यवहारात दोन्ही पद्धती वापरतात — small script मध्ये global सोयीचे, मोठ्या संगणक program मध्ये parameter/return ची पद्धत. दोन्ही समजून घेऊन परिस्थितीनुसार निवड करणे हाच या धड्याचा सार.",
      },
      {
        title: "आठवण — scope चा पुनरुच्चार",
        content: "scope चा विषय परत एका ठिकाणी आणूया — कारण ही संकल्पना प्रत्येक function धड्यात येते. मूळ नियम चार आहेत. पहिला — function आतचा variable local; बाहेरचा original global. दुसरा — function आत वाचताना local नसल्यास global वरून मिळते.\nतिसरा — assignment function मध्ये लिहिली की तो नाव local होतो; बाहेरचा बदलायचा असेल तर global keyword हवा. चौथा — local variable चे आयुष्य function च्या हाकेच्या आतच असते; दोन हाकांचे local स्वतंत्र.\nजर या चार नियमांशी संबंधित त्रुटी आली तर पहा: NameError — नाव कुठेही नाही; UnboundLocalError — assignment च्या आधी वाचण्याचा प्रयत्न. दोन्ही संदेश वाचून योग्य निर्णय द्या.\nglobal वापरताना लक्षात ठेवा की कोड स्वच्छ ठेवण्यासाठी ते क्वचितच इष्ट आहे. मोठी संगणक शास्त्र project मध्ये global चा अनियंत्रित वापर म्हणजे अव्यवस्था. आत्मनियंत्रण ठेवून खरोखर गरज असेल तिथेच वापरा.\nभविष्यात मोड्यूल आणि class शिकताना scope चा हा पाया खूप उपयोगी पडेल. प्रत्येक module च्या variable चे scope वेगळे असतात आणि हे नियम त्या शिकवणीत पुन्हा समोर येतील. म्हणून आताची समज घट्ट ठेवा.",
      },
    {
        title: "संपूर्ण सार — scope चे गाभ्याचे नियम",
        content: "scope चा विषय आता संपूर्ण साराच्या रूपात एकत्र आठवूया. प्रत्येक नियमाचा कोडात प्रत्यय घेण्याचा सराव करा.\n- function आतचा variable हा local असतो — तो function च्या बाहेर दिसत नाही.\n- function बाहेरचा variable हा global असतो — तो सर्वत्र वाचता येतो.\n- function आत assignment म्हणजे नवीन local variable तयार होतो.\n- बाहेरचा variable बदलायचा असेल तर global keyword लिहावा लागतो.\n- UnboundLocalError म्हणजे assignment च्या आधी वाचण्याचा प्रयत्न.\n- global keyword शिवाय function मध्ये global variable बदलता येत नाही.\n- local variable चे आयुष्य function च्या हाकेच्या आतच संपते.\n- दोन function चे local variable परस्पर स्वतंत्र असतात.\n- खूप global कोड अव्यवस्थित करतो — प्रमाण कमी ठेवा.\n\n\nहे नियम वाचून न थांबता प्रत्येकासाठी लहान उदाहरण लिहा. उदा. function आत x = 5 लिहा आणि बाहेर x छापा — बाहेरचा x वेगळा असतो हे दिसून येईल. मग global keyword वापरून दोन्ही जोडा आणि बदल होतो का पहा.\nscope ही संकल्पना सुरुवातीला विचित्र वाटते, पण ती Python ची सुरक्षा व्यवस्था आहे — एका function च्या आतील variable चा दुसऱ्या function ला अनपेक्षित परिणाम होऊ नये म्हणून ही व्यवस्था केली आहे.\nपुढील धड्यांमध्ये module आणि class लिहिताना scope चे हे नियम पुन्हा समोर येतील — म्हणून आजचा अभ्यास नेहमी आठवणीत राहील अशा पद्धतीने घट्ट करा.",
      },
    ],
    practiceQuestions: [
      "local variable म्हणजे काय?",
      "function मध्ये global variable बदलण्यासाठी काय करावं?",
      "UnboundLocalError कधी होतो?",
      "global वापरू नये असं का म्हणतात?",
    ],
    quiz: [
      {
        question: "Function आत बनवलेला variable काय असतो?",
        options: ["global", "local", "module", "static"],
        correct: 1,
      },
      {
        question: "function मध्ये global variable बदलण्यासाठी?",
        options: ["local", "global", "nonlocal", "static"],
        correct: 1,
      },
      {
        question: "function मध्ये नसलेला variable print केल्यास?",
        options: ["None", "NameError", "warning", "0"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एक counter बनवा: visit() function प्रत्येक call ने global counter 1 ने वाढवतो आणि नवीन मूल्य print करतो.",
      starterCode: `visits = 0

def visit():
    global visits
    visits += 1
    print("भेट क्र.", visits)

visit()
visit()
visit()`,
      expectedOutput: "भेट क्र. 1\nभेट क्र. 2\nभेट क्र. 3",
    },
    interviewQuestions: [
      "local/global scope म्हणजे काय?",
      "UnboundLocalError कधी येतो?",
      "global जास्त वापरणे standard का नाही?",
    ],
    related: ["python-functions-params", "python-functions", "python-lambda"],
    prev: "python-functions-params",
    next: "python-lambda",
  },

  {
    slug: "python-lambda",
    categoryId: "python",
    title: "Lambda Functions",
    marathiTitle: "Lambda — एका ओळीची function",
    level: "intermediate",
    minutes: 12,
    summary: "नाव नसलेली, एका ओळीची function.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "lambda म्हणजे काय?",
        content: "lambda ही छोटी, नाव नसलेली function आहे. ती एकाच expression मध्ये बनते आणि साध्या, लहान कामांसाठी वापरली जाते. \"चौरस कर\", \"दुप्पट कर\" असे एकदाच काम करायचे असेल तर संपूर्ण def function लिहिण्याऐवजी lambda एका ओळीत निकाल देते.\nlambda ला def सारखे नाव लागत नाही — म्हणून तिला anonymous function म्हणतात. नावाची गरज नसते कारण ती बहुतेक वेळा sorted, filter, map सारख्या function च्या argument म्हणून त्वरित वापरली जाते.\nदैनंदिन भाषेत सांगायचे तर lambda ही \"लगेच काम करणारी टीप\" आहे — रिकाम्या जागी पटकन लिहून देतात. उदाहरणार्थ दुप्पट करण्याचे काम इतके लहान आहे की त्यासाठी पूर्ण function वाया जाते; lambda x: x * 2 ही एक ओळ पुरेशी.\nमोठी function, जटिल तर्क, अनेक conditions किंवा loops असतील तर def वापरा. lambda फक्त एका expression च्या साध्या कामासाठी आहे — ही मर्यादा लक्षात ठेवणे महत्त्वाचे.",
      },
      {
        title: "Syntax: lambda arguments: expression",
        content: "lambda ची syntax एकाच ओळीत असते — आधी lambda keyword, मग arguments आणि colon नंतर expression. expression चा निकाल आपोआप return होतो.\nsquare = lambda x: x * x ही function x चा स्वतःशी गुणाकार करून चौरस देते — square(5) म्हणजे 25. add = lambda a, b: a + b ने add(3, 7) = 10 होते.\ndef सोबत तुलना करा: def sq(x): return x * x हीच रचना आहे पण जास्त ओळी. दोन्हीचा निकाल सारखा — sq(4) = 16. lambda हा फक्त छोटा पर्याय आहे.\nएकापेक्षा अधिक arguments असतील तर कॉमाने वेगळे करा — उदा. lambda a, b, c: a + b - c. फक्त एक expression असतो म्हणून नामित variable ना assignment किंवा अनेक विधाने lambda मध्ये शक्य नाहीत.",
        code: `square = lambda x: x * x
print(square(5))

add = lambda a, b: a + b
print(add(3, 7))

# def च्या तुलनेत:
def sq(x):
    return x * x

print(sq(4))`,
        codeLanguage: "python",
        output: `25
10
16`,
      },
      {
        title: "sorted() सोबत lambda",
        content: "sorted आणि sort मध्ये lambda चा सर्वात सामान्य उपयोग क्रमवारीचा key ठरवणे. items यादीत (नाव, किंमत) अशा जोड्या आहेत; x[1] म्हणजे किंमत — त्या key वर वर्ग व्हावा असे आपण ठरवतो.\nitems.sort(key=lambda x: x[1]) मुळे किंमत लहान ते मोठी अशी क्रमवारी होते. परिणाम: पेन (10), पुस्तक (150), बॅग (400).\nlambda प्रत्येक item मधून key काढते आणि sorting त्या key वर होते. जर नावावर वर्ग करायचे असेल तर key=lambda x: x[0] लिहायचे — हाच बदल.\nलक्षात ठेवा: items.sort मूळ यादीतच बदल करते; sorted नवीन यादी देते. दोन्हीमध्ये key हा sorting चा आधार ठरतो.",
        code: `items = [("पुस्तक", 150), ("पेन", 10), ("बॅग", 400)]
items.sort(key=lambda x: x[1])
print(items)`,
        codeLanguage: "python",
        output: `[('पेन', 10), ('पुस्तक', 150), ('बॅग', 400)]`,
      },
      {
        title: "वास्तविक उदाहरण: filter ने उच्च विक्री निवडणे",
        content: "वास्तविक उदाहरण — विक्री नोंदीतून उच्च विक्रीच्या वस्तू निवडायच्या आहेत. sales हा dict आहे ज्यात वस्तूचे नाव आणि किंमत आहे. filter function ला two arguments दिले: अट दाखवणारी function आणि जोड्यांची यादी.\nlambda kv: kv[1] >= 70 ही अट प्रत्येक जोडी (key-value) ची किंमत 70 पेक्षा जास्त आहे का ते तपासते. पुरेशी किमत असलेल्या जोड्या उरतात: चहा 45 वगळला, कॉफी 80 आणि लस्सी 120 ठेवले.\nfilter चा परिणाम dict होत नाही — dict(filter(...)) ने पुन्हा dict बनवला. आउटपुट: {'कॉफी': 80, 'लस्सी': 120}.\nअसा उपयोग report आणि data निवडीत वारंवार होतो. kv म्हणजे key-value जोडी, kv[1] म्हणजे तिचे मूल्य — किंमत. अट पाळल्यास जोडी राहते, नाही तर वगळली जाते.",
        code: `sales = {"चहा": 45, "कॉफी": 80, "लस्सी": 120}
top = dict(filter(lambda kv: kv[1] >= 70, sales.items()))
print(top)`,
        codeLanguage: "python",
        output: `{'कॉफी': 80, 'लस्सी': 120}`,
      },
      {
        title: "Interactive: map सोबत lambda",
        content: "interactive उदाहरणात map सोबत lambda वापरली आहे. map प्रत्येक मूल्यावर function लावते आणि नवीन संग्रह देते. nums = [1, 2, 3, 4] वर lambda x: x * 2 प्रत्येक घटक दुप्पट करते.\nmap ला function आणि संग्रह असे दोन arguments दिले जातात — function आधी. map चा परिणाम iterator असतो, म्हणून list(map(...)) मध्ये गुंडाळून यादी मिळवतो.\nआउटपुट [2, 4, 6, 8] — प्रत्येक संख्या दुप्पट. print(doubles) सरळ यादी दाखवते.\nmap आणि lambda ही यादी रूपांतराची सर्वात सोपी जोडणी आहे. प्रत्येक घटकावर function चालते हीच पद्धत संपूर्ण यादीवर लागू होते.",
        code: `nums = [1, 2, 3, 4]
doubles = list(map(lambda x: x * 2, nums))
print(doubles)`,
        codeLanguage: "python",
        output: `[2, 4, 6, 8]`,
      },
      {
        title: "lambda vs def: कधी काय वापरावे?",
        content: "lambda आणि def दोन्ही function बनवतात; दोघांचे काम सारखे. फरक नेमकेपणाने समजून घ्या: lambda = एक ओळ, एक expression, नाव नाही, निकाल आपोआप return. def = नाव, अनेक ओळी, statements, loops, conditions, स्पष्ट return.\nlambda कधी? — लहान काम त्वरित करायचे असताना: sorted चा key, filter ची अट, map चे रूपांतर. म्हणून modern कोडमध्ये lambda वारंवार दिसते.\ndef कधी? — काम जटिल असेल, अनेक ओळी हव्या असतील, नावाची गरज असेल (पुन्हा वापरायचा) किंवा दस्तऐवजीकरण हवे असेल. नियमित, पुनर्वापराच्या function साठी defच योग्य.\nअचूक ठरवण्याचा प्रश्न एकच: हे काम एका expression मध्ये बसते का? बसते तर lambda, नाही तर def.",
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ lambda आत assignment करणे — x = 5 असे लिहिताच SyntaxError येते. lambda मध्ये विधान (statement) नसून expression असतो — मूल्य दर्शवणारी रचना. म्हणून assignment, if-else चे विधान हे lambda मध्ये शक्य नाही.\n✗ lambda मध्ये return लिहिणे — lambda मध्ये return लिहू नये. expression चा निकाल आपोआप return होतो; return लिहिल्यास SyntaxError येते.\n✗ गुंतागुंतीचे लॉजिक lambda मध्ये — बरेच conditions, loops, अनेक ओळी असतील तर lambda वाचणे कठीण होते. अशा कामासाठी def functionच योग्य — वाचकाला काम कळते.\n✗ print सारखे विधान lambda मध्ये घेणे — print हे विधान आहे, expression नाही. lambda चा उद्देश निकाल देणे, छापणे नाही.\nकोणते काम lambda ला योग्य आणि कोणते def ला हे लक्षात आले तर चुका आपोआप कमी होतात. त्रुटी आल्यावर संदेश वाचा — त्रुटी lambda च्या expression मर्यादेचीच आठवण करतात.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "lambda मध्ये फक्त एक expression असतो — अनेक वाक्ये नसतात. expression चा निकाल आपोआप return होतो; म्हणून return लिहणे गरजेचे नाही.\ndef मध्ये जटिल तर्क, loops, conditions असू शकतात; ते lambda मध्ये शक्य नाही. म्हणून def नियमित function, lambda एका ओळीतील अपवाद.\nlambda ही नाव नसलेली, expression आधारित, एक-ओळीची function आहे. कामाच्या ठिकाणी ती त्वरित लागू होते — sort/filter/map च्या argument मध्ये.\nसरावात हेच ठरवा: लहान, एक expression मध्ये बसणारे काम lambda ने; मोठे, पुनर्वापराचे, जटिल काम def ने. नोंदींचा सार हाच आहे.",
      },
    {
        title: "सखोल अभ्यास — lambda चे स्वभाव आणि क्षमता",
        content: "lambda ही एका ओळीत लिहिली जाणारी नाव नसलेली function आहे. तिची रचना तीन भागांत बसते: lambda keyword, मग arguments आणि colon नंतर एक expression. expression चा निकाल आपोआप return होतो — return लिहिण्याची गरज नसते.\nउदा. lambda x: x * 3 — ही function x ला घेऊन तिची तीन ने गुणाकाराची किंमत परत करते. हीच गोष्ट def ने करायची म्हटल्यास तीन ओळी लागत — def, आतला return आणि बंद. lambda प्रमाणे एकच ओळ.\nlambda मध्ये फक्त एक expression बसतो — statement नाही. म्हणून assignment, if-else ची full फॉर्म, loops या सर्व रचना lambda मध्ये शक्य नाहीत. ही मर्यादा जाणून घ्या — ती lambda ची दुर्बलता नसून त्या रचनेचा नैसर्गिक स्वभाव आहे.\nlambda बहुतेक वेळा वेगळ्या function च्या argument म्हणून वापरली जाते — sorted, map, filter या function च्या key किंवा function या जागी. या ठिकाणी लहान नियम लगेच द्यायचा असतो आणि त्यासाठी lambda परिपूर्ण आहे.\nlambda ला नाव देता येते — square = lambda x: x * x. ही शैली वाचनीयतेसाठी आहे; विशेषतः प्रगततर def वापरतात. पण expression लहान असेल तर आपण lambda नाव देऊन वापरू शकतो — ध्येय स्पष्टता ज्याची सवय ठेवली तर चांगले.",
      },
      {
        title: "वास्तविक जगातील उपयोग — sorted, map, filter मध्ये lambda",
        content: "lambda चे खरे सामर्थ्य तीन function मध्ये दिसते: sorted, map आणि filter. sorted मध्ये key हा parameter असतो — प्रत्येक घटकावरून क्रमवारीसाठी कोणता निकाल काढायचा ते ठरवतो. उदा. वस्तूंच्या यादीतून किंमतीनुसार क्रम — key=lambda item: item[1].\nmap project प्रत्येक घटकावर function लावते आणि निकालांचा संग्रह देते. उदा. संख्यांच्या यादीवर double करायचे असल्यास list(map(lambda x: x * 2, nums)). प्रत्येक घटक बदलला जातो.\nfilter अट पास होणारे घटक ठेवते आणि बाकीचे वगळते. उदा. 100 पेक्षा मोठ्या विक्रीच्या नोंदी — list(filter(lambda x: x > 100, sales)). अट बरोबर आली तरच घटक उरतो.\nया तिन्ही function मधील lambda ला वेगळे नाव देण्याची गरज नाही — ती तिथेच लिहून दिली जाते. ही त्वरित वापराची रचना कोडची लांबी कमी ठेवते आणि जेथे नियम छोटा आहे तेथे स्पष्टता राखते.\nउदाहरण पहा — report निघताना: max फंक्शनसह key=lambda x: x[1] हा दुसऱ्या घटकानुसार सर्वांत मोठा नोंद निवडतो. असे small lambda वापरणाऱ्या function मुळे रोजच्या data handle वेगवान होते.",
      },
      {
        title: "अडचणी आणि उपाय — lambda मधील सामान्य चुका",
        content: "lambda लिहिताना काही चुका वारंवार होतात. सर्वात पहिली म्हणजे lambda मध्ये assignment करणे — x = 5 असे लिहिल्यास SyntaxError येतो. lambda मध्ये statement नसतो, फक्त expression असतो. मूल्य दर्शवणारी प्रत्येक रचना expression अशी समजून घ्या.\nदुसरी चूक म्हणजे lambda मध्ये return लिहिणे. expression चा निकाल आपोआप return होतो; return लिहिल्यास SyntaxError येतो. संदर्भ आपला नियमच आठवण्यास सांगतो — lambda आपोआप return करते.\nतिसरी चूक म्हणजे जटिल तर्क lambda मध्ये बसवण्याचा प्रयत्न. अनेक conditions, loops, बहु-ओळी गणना अशा कामांसाठी def आवश्यक आहे. lambda वाचायला कठीण होताच def कडे वळा — स्पष्टता हाच निर्णयाचा आधार.\nचौथी चूक म्हणजे print सारखे विधान lambda मध्ये घालणे. print हे विधान आहे, expression नाही; त्यामुळे ते lambda मध्ये बसत नाही. output परत करायचा असेल तर lambda चा expression त्यासाठी असतो.\nपाचवी चूक कार्ये लहान असतानाही def वापरण्याचा गाजावाजा. उदा. दोन संख्या जोडण्यासाठी 3 ओळींचा def नको — lambda सोपी आहे. पण तीच lambda तीन-चार ठिकाणी वारंवार हवी असेल तर नाव deg द्या किंवा def फॉर्म वापरा.",
      },
      {
        title: "सराव — lambda ची सवय घेण्यासाठी कार्ये",
        content: "lambda ची सवय खालील कार्यांनी लावा. प्रत्येक कार्य output तपासा — आधी मनात अपेक्षित निकाल ठरवा, मग program चालवा.\nकार्य एक: संख्यांच्या यादीवर lambda ने तिन्ही multiples — प्रत्येक संख्या तीन ने गुणा आणि नवीन यादी छापा. map सोबत वापरा.\nकार्य दोन: शब्दांच्या यादीवर lambda ने upper केस लावा — प्रत्येक शब्द मोठ्या अक्षरांत द्या.\nकार्य तीन: गुणांच्या यादीतून फक्त पास (50 पेक्षा जास्त) होणाऱ्यांची नवीन यादी filter ने काढा.\nकार्य चार: दोन credentials ची यादी (नाव, किंमत) — किंमतीच्या उतरत्या क्रमाने sorted करा. reverse=True सोबत lambda key वापरा.\nकार्य पाच: आतल्या structure ची तुलना करा — a, b अशा दोन संख्यांवर lambda लिहा जी दोघांतील मोठी संख्या परत करते. max बिल्ट-इनशी तुलना करा.\nप्रत्येक कार्यामध्ये lambda ला वेगळा नाव देणे किंवा function argument मध्ये थेट लिहिणे या दोन्ही शैली वापरून पहा. दोन्ही चालतात; कुठे कोणती स्पष्ट होते हे अनुभवा.\nशेवटी एक प्रश्न — मागील def function मधील कोणती कार्ये lambda ने साधता? त्या तुलनेतून lambda कधी नको ते ठरवा.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official) Resources",
        content: "lambda आणि related function च्या अधिक माहितीसाठी Python चे अधिकृत दस्तऐवज वापरा:\n\n• Lambda expressions (अधिकृत): https://docs.python.org/3/reference/expressions.html#lambda\n• Lambda नमुने tutorial (अधिकृत): https://docs.python.org/3/faq/programming.html#is-there-an-equivalent-of-c-s-ternary-operator\n• map() function (अधिकृत): https://docs.python.org/3/library/functions.html#map\n• filter() function (अधिकृत): https://docs.python.org/3/library/functions.html#filter\n• sorted() function (अधिकृत): https://docs.python.org/3/library/functions.html#sorted\n• list.sort() method (अधिकृत): https://docs.python.org/3/library/stdtypes.html#list.sort\n• Operators modules (अधिकृत): https://docs.python.org/3/library/operator.html\n• Built-in functions यादी (अधिकृत): https://docs.python.org/3/library/functions.html\n• Python अधिकृत संकेतस्थळ (अधिकृत): https://www.python.org\n• Python चर्चा परिषद (अधिकृत): https://discuss.python.org\n\nहे सर्व अधिकृत Python reference आहेत. lambda च्या परिपूर्ण शिकवणीसाठी या दस्तऐवजांकडे परत या.",
      },
    {
        title: "आठवण — lambda आणि def चा निर्णय थोडक्यात",
        content: "lambda चा धडा संपवण्याआधी धड्यातील मुख्य निर्णय एकत्र आठवूया. प्रत्येक function लिहताना हा निर्णय घ्यावा लागतो — lambda की def.\n\n• lambda एका ओळीत, नाव नसलेली function\n• lambda मध्ये फक्त एक expression असतो\n• expression चा निकाल आपोआप return होतो\n• lambda मध्ये assignment, loops, अनेक statements नाहीत\n• sorted, map, filter यांच्या argument मध्ये lambda सामान्य\n• def — नाव, अनेक ओळी, loops, conditions, स्पष्ट return\n• एक expression मध्ये बसेल तर lambda, नाही तर def\n• lambda मध्ये return किंवा print लिहू नये\n\n\nनिर्णय घेण्यासाठी स्वतःला एकच प्रश्न विचारा: हे काम एकाच expression मध्ये बसते का? बसते तर lambda योग्य; बसत नसेल तर def. हीच तपासणी मुलाखतीतही सांगता येते.\nप्रत्येक उदाहरण चालवताना lambda साठी वेगळे नाव न देता थेट function argument मध्ये वापरण्याची सवय लावा — हाच तिचा खरा वापर आहे. map, filter, sorted मध्ये अशी lambda नेहमी लहान नियम देते.\nशेवटी लक्षात ठेवा: lambda कमी कोडसाठी नाही, स्पष्टतेसाठी आहे. जेथे एक expression स्पष्टपणे काम सांगते तेथे ती उत्तम; गुंतागुंतीच्या ठिकाणी defच आधार. हा सौंदर्य विचार लक्षात आला की lambda चे वापर योग्य होतो.",
      },
      {
        title: "मुलाखतीतील प्रश्न — lambda विषयी संभाषण",
        content: "lambda चे प्रश्न मुलाखतीत नेहमी विचारले जातात. पहिला प्रश्न: lambda म्हणजे काय? उत्तर: नाव नसलेली, एका ओळीची function — lambda arguments: expression या रूपात. expression चा निकाल आपोआप return होतो.\nदुसरा प्रश्न: lambda आणि def मध्ये फरक सांगा. उत्तर: lambda एका expression मर्यादित, नाव नाही, आपोआप return; def ला नाव असते, statement, loops, conditions आणि स्पष्ट return असू शकतात. लहान तात्पुरत्या कामासाठी lambda, नियमित function साठी def.\nतिसरा प्रश्न: lambda मध्ये return लिहिता का? उत्तर: नाही — expression चा निकाल आपोआप return होतो; return लिहिल्यास SyntaxError येतो.\nचौथा प्रश्न: lambda सामान्यतः कुठे वापरतात? उत्तर: sorted चा key, filter ची अट, map चे रूपांतर — या ठिकाणी त्वरित लहान नियम देण्यासाठी.\nपाचवा प्रश्न: lambda मध्ये assignment का शक्य नाही? उत्तर: कारण lambda मध्ये statement नसतो, फक्त expression असतो. assignment विधान आहे त्यामुळे ती भरत नाही. असे काम def मध्ये करावे लागते.\nमुलाखतीत उत्तर देताना प्रत्येक वेळी एक लहान उदाहरण सोबत ठेवा — उदा. lambda x: x * x. उदाहरणामुळे उत्तर विश्वासार्ह आणि समजण्यास सोपे होते.",
      },
      {
        title: "प्रयोगशाळा — lambda चे प्रत्येक प्रयोग",
        content: "lambda ची प्रयोगशाळा करूया. प्रत्येक प्रयोग नवीन script मध्ये लिहा आणि output तपासा.\nप्रयोग एक: (lambda x: x * 2)(5) अशी तात्काळ हाक करा — नाव देताच येणारा निकाल 10 छापा. ही तात्काळ invocation lambda चा छोटा आकृती आहे.\nप्रयोग दोन: lambda ला नाव देऊन वापरा — double = lambda x: x * 2; मग double(7) हाका. नाव दिल्यावर function सामान्य function सारखी दिसते.\nप्रयोग तीन: sorted मध्ये lambda key वापरा — वास्तविक यादीवर किंमतीनुसार क्रम लावा आणि निकाल छापा.\nप्रयोग चार: filter सह lambda — संख्यांच्या यादीतून 10 पेक्षा मोठ्या संख्या काढा आणि list बनवून छापा.\nप्रयोग पाच: map सह lambda — प्रत्येक संख्येच्या चौरसाची नवीन यादी बनवा. maps चा प्रत्येक घटक transform होतो हे output मध्ये दिसते.\nप्रयोग सहा: दोन parameters घेणारी lambda लिहा — lambda a, b: a + b. बेरीज करून निकाल छापा. अनेक parameters असू शकतात हे तपासा.\nप्रत्येक प्रयोग संपल्यावर लिहा: lambda कुठे वापरली, expression काय, निकाल काय. अशा नोंदी ठेवल्यास lambda ची सवय वेगाने पक्की होते.",
      },
    {
        title: "खोलवर — sorted, map, filter मध्ये lambda कसे बसते",
        content: "lambda चा खरा उपयोग तिन्ही function मध्ये कसा दिसतो ते बारकाईने पहा. sorted(l) साधी क्रमवारी देते, पण key=naming दिली की क्रमवारीचा आधार बदलतो. दोन elements असलेल्या tuples च्या यादीवर key=lambda x: x[1] म्हणजे दुसऱ्या घटकावरून क्रम.\nmap(f, संग्रह) प्रत्येक घटकावर f रचते आणि नवीन संग्रह देते. येथे f ही lambda असते — उदा. map(lambda x: x ** 2, nums). प्रत्येक घटक transform होतो; मूळ संग्रह अपरिवर्तित राहतो; परिणाम iterator असतो.\nfilter(अट, संग्रह) अट पास झालेले घटक ठेवते. उदा. filter(lambda x: x % 2 == 0, nums) — सम संख्या. अट बरोबर आली तर घटक जातो; बरोबर नाही तर वगळला जातो.\nप्रत्येक वेळी lambda ची expression हीच रचना's सांगते — key काढा किंवा रूपांतर किंवा फिल्टर अट. समज प्रकार वेगळा पण expression नेमकी एकच असते. हेच lambda चे सौंदर्य आहे.\nस्वतः प्रत्येक function ला दोन भिन्न lambda देऊन चालवा — एक उदा. लांबीवर आधारित, दुसरी मूल्यावर आधारित. output कसा बदलतो ते पहा. तिन्ही function मध्ये lambda चा वापर अंगवळणी पडेल.\nलक्षात ठेवा, map आणि filter चे परिणाम अनेकदा list मध्ये बदलावे लागतात — list(map(...)) असे लिहा. सरळ map परत iterator असतो, तो एकदा वाचला की संपतो. संग्रह हवा असेल तर नेहमी list मध्ये बदला.",
      },
      {
        title: "सामान्य चुका — lambda लिहताना होणाऱ्या चुका आणि त्यांचे उपाय",
        content: "lambda लिहताना चुका सामान्य आहेत; प्रत्येक चुकीचे उपाय आधीच ठरलेले आहेत. पहिली चूक — lambda मध्ये return लिहिणे. expression चा निकाल आपोआप return होतो; return शब्द लिहिल्यास SyntaxError. उपाय — return शब्द काढून टाका.\nदुसरी चूक — lambda मध्ये assignment करणे. x = 5 असे लिहिल्यास statement असल्याने त्रुटी. lambda मध्ये फक्त expression बसतो. उपाय — अशा कामासाठी def वापरा किंवा टप्पा वेगळा करा.\nतिसरी चूक — गुंतागुंतीचे तर्क lambda मध्ये बसवणे. अनेक conditions, loops, बहु-ओळी गणना lambda मध्ये अशक्य आणि वाचणे कठीण. उपाय — def ची स्पष्ट रचना निवडा.\nचौथी चूक — lambda चा निकाल कुठे गेला हे न समजणे. sorted किंवा filter मध्ये lambda निकाल संपादनासाठी असतो — तो छापायचा असेल तर वेगळ्या ओळीत print लिहा, lambda मध्ये print नको.\nपाचवी चूक — नाव देण्याची गरज नसताना def लिहिणे. लहान काम एका expression मध्ये बसते तर lambda हाच पर्याय. पण lambda वारंवार वापरायची असेल तर तिला नाव द्या — func ही गरज नाहीशी होते.\nकोणत्याही चुकीचा उपाय एकच सूत्र कधी लागू होतो ते ठरवा: expression मर्यादा ओलांडली की def कडे वळा. या निर्णयाने बहुतेक चुका आपोआप टळून जातात.",
      },
      {
        title: "संपूर्ण आठवण — lambda चा संदर्भ सारJK",
        content: "lambda ही एका ओळीची, नाव नसलेली, expression आधारित function आहे. तिचे स्वरूप ठाम ध्या: lambda arguments: expression. expression निकाल आपोआप परत होतो. ती बहुतेक sorted, map, filter यांच्या argument मध्ये वापरली जाते.\ndef च्यापेक्षा फरक एवढाच — def नाव असते, अनेक ओळी, statements, loops, स्पष्ट return; lambda एक expression, नाव नाही. ही तुलना लक्षात ठेवली की प्रत्येक प्रश्नाचे उत्तर सोपे होते.\nकोणते काम lambda चे आणि कोणते def चे हे ठरवण्याची जुळवाजुळव a single expression मध्ये बसते का या प्रश्नावर अवलंबून असते. बसते तर lambda — नाही तर def. हा निर्णय आता मनात पक्का ठेवा.\nप्रत्येक वेळी output तपासण्याची सवय पाळा. sorted ने क्रम, map ने रूपांतर, filter ने निवड होते; प्रत्येक परिणाम छापून पडताळा. जुळत नसेल तर expression आणि अट पुन्हा वाचा.\nशेवटी एक शब्दखूण: lambda कमी शब्दांत स्पष्ट काम — तिचे आकर्षण हेच. पण गुंतागुंत वाढताच def हा विश्वासार्ह पर्याय. या दोन गोष्टींचे संगमन जाणता आले की lambda परिपूर्ण समजली.",
      },
    {
        title: "संपूर्ण सार — lambda चे गाभ्याचे नियम",
        content: "lambda चा धडा आता साराच्या रूपात आठवूया. हे नियम एकत्र ठेवा आणि प्रत्येक नियमाचे उदाहरण स्वतः चालवा.\n- lambda ही नाव नसलेली, एका ओळीची function.\n- रचना: lambda arguments: expression.\n- expression चा निकाल आपोआप return होतो.\n- lambda मध्ये एकच expression असतो — statements नाहीत.\n- assignment आणि loops lambda मध्ये शक्य नाहीत.\n- sorted, map, filter यांच्या argument मध्ये lambda सामान्य.\n- def जटिल कामासाठी, lambda लहान expression साठी.\n- expression मध्ये बसता येईल तर lambda, नाही तर def.\n\n\nसर्वात महत्त्वाचा निर्णय एवढाच — काम एका expression मध्ये बसते का. बसते तर lambda वापरा; बसत नसेल तर def लिहा. हा निर्णय मनात ठेवल्यास lambda ची मर्यादा आणि क्षमता दोन्ही स्पष्ट राहतात.\nप्रत्येक उदाहरण output सोबत तपासा. उदा. map(lambda x: x * 2, nums) चा निकाल list मध्ये बदलून छापा. filter मध्ये अट expression ने द्या — अट बरोबर आली की घटक उरतो.\nlamba लिहताना return किंवा print समजूत नका — दोन्ही statements म्हणून निकाल आपोआप येतो. कोणतीही चूक आली असता syntax error वाचून expression मर्यादेची आठवण करा.\npुढील धड्यांमध्ये list comprehensions lambda जवळचे साधन आहे — एका ओळीत आणखी वाचण्यास सोपे रूप. हा पाया तयार ठेवल्यास पुढील धडा सहज जाईल.",
      },
    ],
    practiceQuestions: [
      "lambda म्हणजे काय?",
      "lambda मध्ये return लिहितात का?",
      "sorted() मध्ये key काय करतो?",
      "filter सह 10 पेक्षा मोठ्या संख्या काढा",
    ],
    quiz: [
      {
        question: "lambda मध्ये expression किती?",
        options: ["अनेक", "एक", "दोन", "काहीच नाही"],
        correct: 1,
      },
      {
        question: "lambda नाव असतं का?",
        options: ["हो", "नाही (anonymous)", "कधीकधी", "काल्पनिक"],
        correct: 1,
      },
      {
        question: "lambda चा निकाल मिळतो कसा?",
        options: ["return ने", "expression ने", "yield ने", "print ने"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "lambda वापरून map सह संख्यांच्या list चे वर्ग (squares) print करा.",
      starterCode: `nums = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, nums))
print(squares)`,
      expectedOutput: "[1, 4, 9, 16, 25]",
    },
    interviewQuestions: [
      "lambda vs def फरक?",
      "lambda कुठे वापरतात (map/filter/sorted)?",
      "lambda मध्ये assignments शक्य का नाही?",
    ],
    related: ["python-functions", "python-functions-scope", "python-list-comprehensions"],
    prev: "python-functions-scope",
    next: "python-recursion",
  },

  {
    slug: "python-recursion",
    categoryId: "python",
    title: "Recursion",
    marathiTitle: "Recursion — स्वतःला बोलावणे",
    level: "intermediate",
    minutes: 15,
    summary: "Function स्वतःला बोलावते — मोठ्या problems लहान होऊन सुटतात.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "recursion म्हणजे काय?",
        content: "जेव्हा function स्वतःलाच हाक मारते तेव्हा त्या पद्धतीला recursion म्हणतात. प्रत्येक call मध्ये समस्या लहान होत जाते; लहान समस्येचे उत्तर मिळताच मोठ्या समस्येचे उत्तरही तयार होते. शेवटी एक base case function ला थांबवायचा संकेत देतो.\nमॅट्रीओश्का बाहुल्यांचे उदाहरण घ्या — मोठी बाहुली आत लपवते, प्रत्येक आतली बाहुली लहान होत जाते. सर्वात आतली बाहुली सरळ उघडते; तसाच recursion मध्ये सर्वात लहान समस्येचे उत्तर सरळ मिळते आणि उत्तर वरती पाठवले जाते.\nसंगणक प्रत्येक call ची कामाची स्थिती जपतो. लहान call संपल्यावर मागील call पुढे सरकतो. प्रत्येक स्तर स्वतःच्या मूल्यांवर काम करतो आणि निकाल वरती पाठवतो — म्हणून एकाच function च्या रूपात अनेक स्तर एकत्र काम करतात.\nहे उलगडणे गोंधळ नाही — प्रत्येक स्तर नियम सारखा पाळतो. सुरुवातीला थोडा विचित्र वाटते; उदाहरणे पुन्हा पुन्हा तपासून मनात बसवा.",
      },
      {
        title: "Syntax: base case आणि recursive call",
        content: "recursion ची रचना नेहमी तीन भागात बसते: def ने function ची सुरुवात; आधी base case तपासा — ती स्थिती सत्य असेल तर थेट निकाल द्या; नाही तर लहान call करा — तेच function कमी मूल्याने हाका.\nखाली factorial पहा. factorial(n) = n × factorial(n - 1). base case जेव्हा n <= 1 तेव्हा उत्तर 1 सरळ. factorial(5) = 5 × 4 × 3 × 2 × 1 = 120 — हा output येतो.\nपहिल्यांदा फक्त def आणि base case लिहा, काम तपासा; शेवटी लहान call जोडून पुन्हा चालवा. अशा पायरी-पायरी बदलांनी चूक झाली तर कोणती ओळ जबाबदार ते लगेच कळते.\nmहङ्ही पाळा: base case आधी आणि नंतर return. निकाल येण्याच्या प्रत्येक मार्गात return असले पाहिजे — थांबण्याकरिता पण निकाल देण्याकरिताही.",
        code: `def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))   # 5*4*3*2*1`,
        codeLanguage: "python",
        output: `120`,
      },
      {
        title: "काम कसे चालते? factorial चा मागोवा",
        content: "factorial(3) म्हणजे 3 गुणिले factorial(2); factorial(2) म्हणजे 2 गुणिले factorial(1); factorial(1) हे base case असल्याने थेट 1 देते.\nनिकाल मागासलेल्या क्रमाने परत येतात: 1, नंतर 2×1 = 2, नंतर 3×2 = 6. हा परतीचा क्रमच recursion चा गाभा आहे.\nfactorial(5) साठी हेच साखळीत सांगा: 5 गुणिले factorial(4), पुन्हा 4 गुणिले factorial(3), असे 1 पर्यंत; नंतर 1, 2, 6, 24, 120 असा निकाल मागे येतो. प्रत्येक परतीचा निकाल पुढील गुणाकारात वापरला जातो.\nहेच चक्र पुढील countdown मध्ये print द्वारे दिसेल — फरक एवढाच: factorial मूल्ये जोडून गुणते, countdown संदेश छापतो.",
      },
      {
        title: "countdown: प्रत्येक थर छापत जाणे",
        content: "countdown function प्रत्येक print नंतर लहान call करते: n छापा, मग countdown(n - 1) हाका. base case n <= 0 झाल्यावर \"बूम!\" छापून function थांबते.\ncountdown(3) ची चालणी: आधी 3 छापले, मग 2, मग 1, शेवटी बूम! — output मध्ये 3, 2, 1, बूम! अशा चार ओळी दिसतात.\nप्रत्येक print हा एक नवीन स्तर दाखवतो आणि त्या स्तराचा call संपल्यावर मागील स्तर पुढे सरकतो. लहान इनपुटवर हा क्रम नेहमी स्पष्ट दिसतो — येथूनच recursion चे आतून होणारे काम ओळखता येते.\nलक्षात ठेवा: countdown मध्ये return निकाल देत नाही — फक्त काम संपवते. recursion मध्ये return कधी मूल्यासाठी, कधी थांबण्यासाठी वापरले जाते.",
        code: `def countdown(n):
    if n <= 0:
        print("बूम!")
        return
    print(n)
    countdown(n - 1)

countdown(3)`,
        codeLanguage: "python",
        output: `3
2
1
बूम!`,
      },
      {
        title: "वास्तविक उदाहरण: फोल्डर रचना शोधणे",
        content: "फोल्डरमधील फाइल्स मोजणे हे recursion चे उत्तम वास्तविक उदाहरण आहे. फोल्डरमध्ये उपफोल्डर, त्यात आणखी उपफोल्डर — ही रचना झाडासारखी आहे आणि प्रत्येक फोल्डरवर function स्वतःला बोलावून प्रवास करते.\nखालील count_files function प्रत्येक फोल्डरचे नाव छापते आणि मग त्याच्या प्रत्येक उपफोल्डरवर (a, b) पुन्हा स्वतःलाच हाक मारते. depth हा इंडेंटचा स्तर दर्शवतो — म्हणून output मध्ये प्रत्येक खोलीचे नाव ठिकाणांसह दिसते.\nbase case depth >= 3 झाल्यावर function थांबते — खोल जाण्याची मर्यादा. म्हणून output मध्ये तिन्ही स्तर दिसतात — माझा_फोल्डर, मग a/b, मग त्या खाली आणखी.\nमेनू प्रणाली, प्रोजेक्ट फाइल्स, कुटुंबवृक्ष, search आणि backup या सर्वांमध्ये झाडासारखी रचना सापडते — त्यात recursion नैसर्गिकरीत्या बसते.",
        code: `def count_files(folder, depth=0):
    if depth >= 3:
        return
    print("  " * depth + "📁 " + folder)
    subs = [folder + "/a", folder + "/b"]
    for sub in subs:
        count_files(sub, depth + 1)

count_files("माझा_फोल्डर")`,
        codeLanguage: "python",
        output: `📁 माझा_फोल्डर
  📁 माझा_फोल्डर/a
    📁 माझा_फोल्डर/a/a
    📁 माझा_फोल्डर/a/b
  📁 माझा_फोल्डर/b
    📁 माझा_फोल्डर/b/a
    📁 माझा_फोल्डर/b/b`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ base case नसल्यास function कधीही थांबत नाही — तेव्हा संगणक RecursionError दाखवतो आणि काम थांबते. प्रत्येक recursion मध्ये base case आवश्यक आहे हा पहिला नियम.\n✗ base case ठीक असला तरी लहान call मूल्य कमी करत नसल्यास function अडकतो — उदा. call नेहमी तेच मूल्य दिले तर स्तर वाढत नाहीत. मूल्य कमी होत आहे याची खात्री करा.\n✗ base case नंतर return न सोडणे — कुठल्याही मार्गाने function निकाल/ठिकाण गाठले पाहिजे. उदाहरणार्थ जर base case फक्त print करते आणि return करत नाही, तर पुढचे गुणाकार चालत राहतात.\n✗ साधी loop पुरेशी असेल तिथे recursion वापरणे — प्रत्येक call वेळ आणि stack घेतो; खोल recursion मध्ये काम हळू आणि memory जास्त लागते. साधे काम loop ने करा; रचना झाडासारखी असेल तेव्हाच recursion.\nत्रुटी संदेश आल्यावर traceback ची शेवटची ओळ नेमकी ठिकाण दाखवते — ती वाचल्यावर समस्या सापडणे सोपे होते.",
      },
      {
        title: "Interactive: Fibonacci मालिका",
        content: "Fibonacci मालिकेत प्रत्येक संख्या मागील दोनची बेरीज असते — 0, 1, 1, 2, 3, 5, 8 असे क्रम पुढे सरकतो. interactive उदाहरणात function स्वतःला दोनदा बोलावते: fib(n - 1) आणि fib(n - 2) — दोन्हीची बेरीज नवीन संख्या देते.\nfor लूप range(7) मध्ये fib(0) ते fib(6) छापतो: 0 1 1 2 3 5 8. end=\" \" ने संख्या एकाच ओळीत येतात.\nप्रत्येक call पुन्हा दोन calls मध्ये विभागतो — हे झाड मोठे होते. लहान n साठी निकाल ठीक आहे, पण मोठ्या n साठी call संख्या वेगाने वाढते आणि काम हळू होते. म्हणून Fibonacci मोठ्या संख्येसाठी दुसऱ्या पद्धतीने लिहिला जातो.\nपहिल्या सात संख्येवर ठीक असल्याने इथले उदाहरण सोपे आहे — हेच झाड recursion ची शक्ती आणि मर्यादा दोन्ही दाखवते.",
        code: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

for i in range(7):
    print(fib(i), end=" ")
print()`,
        codeLanguage: "python",
        output: `0 1 1 2 3 5 8 `,
      },
      {
        title: "Mini Project: पहिल्या n संख्यांची बेरीज",
        content: "पहिल्या n संख्यांची बेरीज recursion वापरून करता येते. total function प्रत्येक वेळी लहान मूल्यावर स्वतःला बोलावते. base case n <= 0 झाल्यावर 0 परत करून थांबते; मागे फिरताना प्रत्येक n जोडला जातो.\ntotal(10) चा प्रवास: 10 + total(9); total(9) = 9 + total(8);... असे 0 पर्यंत. मागे फिरताना सर्व जोडणी होतात आणि उत्तर 55 येते — कारण 1+2+...+10 = 55.\nहा लहान project recursion चा पूर्ण अभ्यास साधतो: base case, लहान call, परतीचा क्रम. आधी छोट्या उदाहरणावर (उदा. total(5)) निकाल तपासा, मग मोठ्यावर जा.\nअशा तपासणीची सवय — लहान उदाहरण चालवून अपेक्षित निकाल पडताळा — recursion समजण्याची गती वाढवते.",
        code: `def total(n):
    if n <= 0:
        return 0
    return n + total(n - 1)

print(total(10))`,
        codeLanguage: "python",
        output: `55`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "प्रत्येक recursion मध्ये दोन गोष्टी काळजीपूर्वक ठेवा: आधार स्थिती नेमकी (base case) आणि मूल्य कमी होणारा call. दोन्ही असल्याशिवाय function अडकतो किंवा RecursionError देतो.\nआधार स्थिती नेहमी लहान उदाहरणावर तपासा — मग मोठे उदाहरण चालवा. बेरीज/फॅक्टोरियलच्या output प्रमाणे अपेक्षित निकाल आधी मोजून तापासा.\nप्रत्येक call वेळ आणि stack चा स्तर घेतो; Python ची सुमारे हजारो स्तरांची मर्यादा असते. मर्यादा संपली की error — म्हणून खोल recursion टाळा आणि सर्वात आधी विचार करा: साधा loop पुरेसा आहे का?\nझाडासारखी रचना (फोल्डर, मेनू, कुटुंबवृक्ष) सापडली तर recursion नैसर्गिक आहे; नाहीतर loop वापरून काम भागवा. योग्य साधन निवडणे हेच तत्त्व आयुष्यभर लागू राहील.",
      },
    {
        title: "सखोल अभ्यास — recursion ची मांडणी आणि रचना",
        content: "recursion म्हणजे function स्वतःलाच हाक मारण्याची रचना. रचनेत नेमक्या दोन गोष्टी अपरिहार्य असतात: base case आणि लहान होणारी हाक. दोन्हींशिवाय recursion कधीही संपत नाही.\nbase case म्हणजे सर्वात लहान अवस्था जिथे function थेट निकाल देते आणि नवीन हाक करत नाही. उदा. factorial मध्ये n <= 1 चा तपास. ही अवस्था function ला थांबण्याचा संकेत देते — ती नसली की function अंतहीन हाका मारत राहते.\nदुसरी गोष्ट म्हणजे recursive call — function स्वतःला कमी मूल्याने हाक मारते. factorial(n) मध्ये factorial(n - 1). प्रत्येक हाकेने मूल्य base case कडे नेले पाहिजे; नेले नाही तर function अडकतो आणि मर्यादा संपल्यावर RecursionError येतो.\nप्रत्येक हाकेला संगणक current function ची अवस्था stack नावाच्या संरचनेत जपतो. हाक जितक्या खोल, तितका stack मोठा. Python ने depth limit ठरवलेली असते — तिच्या पलीकडे जाताच RecursionError : maximum recursion depth exceeded सारखा संदेश येतो.\nही खोली सुरुवातीच्या गणनेत सहसा समस्या नाही, पण खोल recursion मध्ये दिसते. म्हणून नियम: input आकार विचारात घेऊन recursion वापरा आणि जेथे साधा loop चालतो तेथे loopच निवडा.",
      },
      {
        title: "वास्तविक जगातील उपयोग — झाडरचना recursion सोबत",
        content: "recursion ची खरी उपयुक्तता अशा रचनांमध्ये आहे ज्यांना झाडासारखा आकार असतो. फोल्डर system हे सर्वात स्पष्ट उदाहरण — फोल्डरमध्ये file आणि उपफोल्डर, उपफोल्डरमध्ये पुन्हा file आणि उपफोल्डर. depth नेमकी आधी माहीत नसते, म्हणून loop ने ते सोडवणे कठीण होते; recursion नैसर्गिकरीत्या घुसते.\nmenu system हे देखील झाडरचना आहे — मुख्य मेनू, प्रत्येक submenu मध्ये आणखी. website ची sitemap, कंपनीची hierarchy, family tree — या सर्वांमध्ये प्रत्येक स्तरावर सारखाच नियम चालतो, म्हणून recursion परिपूर्ण बसते.\nsearch algorithms मध्ये recursion मोठ्या प्रमाणात वापरली जाते — उदा. binary search मध्ये प्रत्येक पायरी मध्यभागी तपासून अर्धा भाग वगळतो आणि उरलेल्या भागावर पुन्हा त्याच प्रक्रियेला हाक मारतो. निकाल लहान होत होत खात्री होते.\nfractal किंवा नैसर्गिक रेखाचित्रांमध्येही recursion दिसते — प्रत्येक भाग मोठ्या भागासारखाच. ही समानता recursion चा गाभा आहे: मोठी समस्या स्वतःसारख्याच लहान समस्या मध्ये विभागली जाते.\nसवय म्हणून प्रत्येक नवीन समस्या पाहताना विचारा: हिची रचना झाडासारखी आहे का? जर होय, तर recursion. जर नाही, तर साधा loop. या योग्य निवडीमुळे कोड साधा आणि वेगवान राहतो.",
      },
      {
        title: "सामान्य अडचणी — RecursionError, अंतहीन हाका आणि memory",
        content: "recursion मध्ये सर्वात सामान्य अडचण म्हणजे base case विसरणे. base case नसल्यास function स्वतःला सदैव हाक मारत राहते आणि Python मर्यादा गाठली की RecursionError देतो. कोणतीही recursion लिहताना आधी base case तपासा — तो असल्याशिवाय function सुरक्षित नाही.\nदुसरी अडचण म्हणजे recursive call मूल्य कमी करत नसल्याची. jर call नेहमी तेच मूल्य देत असेल तर function base case कडे जातच नाही. उदा. count(n - 1) ऐवजी count(n) — ही हाक अंतहीन होते. प्रत्येक हाक input लहान करत आहे हे तपासा.\nतिसरी अडचण म्हणजे दोन हाकांच्या मध्ये गोंधळ — प्रत्येक हाक वेगळ्या स्तरावर चालते आणि त्यांची state वेगळी असते. दोन स्तरांचे variable मिसळल्यास निकाल चुकतो. प्रत्येक स्तराचा रेकॉर्ड स्वतंत्र आहे हे ध्यानात ठेवा.\nचौथी अडचण म्हणजे प्रत्येक हाकेसाठी लागणारी memory. खोल recursion मध्ये stack मोठा होतो आणि memory वाढते. संधीसाठी function 10000 पातळी खोल जायला लागली तर base वेगळी पद्धत (loop) वापरा.\nएक उपाय म्हणजे मर्यादा स्वतः वाढवणे — sys.setrecursionlimit चा वापर. पण हा फक्त समस्या पुढे ढकलतो; खऱ्या अर्थाने बचाव होत नाही. म्हणून input आकाराशी योग्य रचना निवडणे हाच खरा उपाय.",
      },
      {
        title: "सराव — recursion आणि loop ची तुलना",
        content: "recursion ची समज खालील कार्यांनी पक्की करा. प्रत्येक कार्य आधी recursion ने लिहा आणि नंतर तेच कार्य loop नेही सोडवायचा प्रयत्न करा — दोन्ही पद्धतीची तुलना करायला हा सराव उत्तम आहे.\nकार्य एक: factorial(6) च्या प्रवासाचा पेaper मध्ये मागोवा काढा — प्रत्येक हाक, मागची परत येणारी मूल्ये. नंतर program चालवून 720 मिळतो का ते पडताळा.\nकार्य दोन: countdown(custom) लिहा जी n वरून 1 पर्यंत छापते आणि शेवटी सुरुवात! संदेश देते. base case स्पष्ट ठेवा.\nकार्य तीन: 1 ते n मधील बेरीज recursion ने करा. उदा. sum_to(100) = 5050 येते का ते तपासा.\nकार्य चार: digit sum — number च्या सर्व आकड्यांची बेरीज. 1234 → 10. base case म्हणून n < 10 ठेवा आणि प्रत्येक पायरीत शेवटचा आकडा वेगळा करा.\nकार्य पाच: list च्या घटकांची संख्या recursion ने मोजा — साधी counting. rिकाम्या यादीची संख्या 0 हा base case.\nप्रत्येक कार्यात trace करण्याची सवय ठेवा — props पाण्यावर पेaper मध्ये प्रत्येक हाक आणि तो कधी थांबतो ते लिहा. ते लिहिल्याशिवाय recursion मनात स्पष्ट होत नाही.\nशेवटी स्वतःला प्रश्न करा — कोणती कार्ये loop ने सोपी झाली आणि कोणती factorial ने? या तुलनेतून योग्य साधन निवडायची जाणीव तयार होते.",
      },
      {
        title: "अधिक संसाधने — Python अधिकृत (Official) Resources",
        content: "recursion आणि related माहितीसाठी Python चे अधिकृत दस्तऐवज वापरा:\n\n• Recursion नमुना FAQ (अधिकृत): https://docs.python.org/3/faq/programming.html\n• Recursive function चे उदाहरण (अधिकृत): https://docs.python.org/3/tutorial/controlflow.html\n• sys.setrecursionlimit (अधिकृत): https://docs.python.org/3/library/sys.html#sys.setrecursionlimit\n• Function definitions (अधिकृत): https://docs.python.org/3/reference/compound_stmts.html#function-definitions\n• Python scope आणि namespace (अधिकृत): https://docs.python.org/3/tutorial/classes.html\n• Data structures निर्देशिका (अधिकृत): https://docs.python.org/3/tutorial/datastructures.html\n• PEP 8 शैली नियम (अधिकृत): https://peps.python.org/pep-0008/\n• Built-in functions (अधिकृत): https://docs.python.org/3/library/functions.html\n• Python अधिकृत संकेतस्थळ (अधिकृत): https://www.python.org\n• Python चर्चा परिषद (अधिकृत): https://discuss.python.org\n\nहे सर्व अधिकृत Python reference आहेत. recursion च्या शंका निरसनासाठी या दस्तऐवजांकडे परत या.",
      },
    {
        title: "आठवण — recursion चे नियम थोडक्यात",
        content: "recursion चा धडा संपवण्याअगोदर मुख्य नियम एकत्र आठवूया. ही यादी उदाहरणे लिहताना नेहमी मार्गदर्शन करते.\n\n• recursion म्हणजे function स्वतःलाच हाक मारणे\n• प्रत्येक recursion ला base case आवश्यक आहे\n• base case म्हणजे थेट निकाल देऊन थांबणारी लहान अवस्था\n• recursive call ने input अधिक लहान होत जायला हवे\n• base case नसल्यास RecursionError येतो\n• प्रत्येक हाक stack मध्ये state जपतो — खोल recursion मध्ये memory वाढते\n• झाडासारखी रचना (फोल्डर, मेनू) recursion नैसर्गिक\n• साधे काम loop ने करा — प्रत्येक recursion ची गरज नसते\n\n\nही यादी वापरताना सर्वात महत्त्वाचे दोन नियम logout — base case आणि लहान होत जाणारी हाक. दोन्ही असल्याशिवाय function सुरक्षित थांबत नाही.\nसराव करताना प्रत्येक recursion लहान input वर चालवा — उदा. factorial(3). प्रत्येक हाक कागदावर लिहा आणि निकाल कसा परत येतो ते पहा. मोठ्या input वर जाण्यापूर्वी लहान input वर खात्री करा.\nrecursion चे वाचन कठीण वाटत असेल तर त्या function मधील प्रत्येक हाक एक एक करून उलगडा — call stack चा मागोवा घ्या. हळूही करा; ते उलगडणेच recursion शिकणं आहे.",
      },
      {
        title: "मुलाखतीतील प्रश्न — recursion विषयी संभाषण",
        content: "recursion चे प्रश्न मुलाखतीत आवडीने विचारले जातात. पहिला प्रश्न: recursion म्हणजे काय? उत्तर: function स्वतःला हाक मारते आणि प्रत्येक हाकेने समस्या लहान होते. base case थांबण्याचा संकेत देतो.\nदुसरा प्रश्न: base case का आवश्यक आहे? उत्तर: तो नसल्यास function अंतहीन हाका करतो आणि Python ची मर्यादा गाठल्यावर RecursionError येतो. base case हा function ला थांबवण्याचा संकेत आहे.\nतिसरा प्रश्न: recursion आणि loop मध्ये काय फरक? उत्तर: loop पुनरावृत्ती विधानाने करते आणि stack वाढवत नाही; recursion प्रत्येक हाकेसाठी stack वापरते. झाडरचनेत recursion सोपी, पण साध्या बेरीजसाठी loop कार्यक्षम.\nचौथा प्रश्न: RecursionError कधी येतो आणि कसा थांबवायचा? उत्तर: सुयोग्य base case नसताना किंवा खूप खोल recursion मध्ये येतो. base case तपासा आणि input लहान होत आहे का पहा; खोली कमी करा किंवा loop ने बदला.\nपाचवा प्रश्न: factorial(4) ची गणना सांगा. उत्तर: factorial(4) = 4 × factorial(3); factorial(3) = 3 × factorial(2); factorial(2) = 2 × factorial(1); factorial(1) = 1 (base case). मागे फिरताना 1, 2, 6, 24 असे निकाल येतात.\nमुलाखतीत उत्तरानंतर छोटं उदाहरण म्हणा — factorial किंवा countdown. उदाहरणामुळे उत्तर ठोस दिसते आणि समज सिद्ध होते.",
      },
      {
        title: "प्रयोगशाळा — recursion चे प्रत्येक प्रयोग",
        content: "recursion ची प्रयोगशाळा करूया — प्रत्येक प्रयोग नवीन script मध्ये करा आणि output तपासा.\nप्रयोग एक: countdown लिहा जी n वरून 0 पर्यंत छापते. base case म्हणून n < 0 ची तपासणी करा. 5 दिल्यास 5, 4, 3, 2, 1, 0 असे क्रम दिसतो.\nप्रयोग दोन: power(base, exp) function लिहा — base चा exp घातांक recursion ने. base case exp == 0 म्हणून 1; अन्यथा base * power(base, exp - 1).\nप्रयोग तीन: string उलट करणारी function लिहा. उदा. reverse(\"मराठी\") → इराटम. शेवटचा अक्षर + reverse(उर्वरित). इथे हाक string लहान करते.\nप्रयोग चार: nested list मध्ये बेरीज करा — list मध्ये संख्या आणि आणखी list असू शकते. type(item) == list तपासून आत जा अन्यथा number जोडा. हा recursion चा रोजचा वापर आहे.\nप्रयोग पाच: हेळं मागे-पुढे तयारी — count numeric 10 दिल्यास 1 ते 10 बेरीज करा (sum_to). base case n == 0; अन्यथा n + sum_to(n - 1).\nप्रत्येक प्रयोगा नंतर call stack चा मागोवा कागदावर काढा — प्रत्येक हाक कुठे बसते ते दिसेल. असा मागोवा recursion ची समज खूप वाढवतो.",
      },
    {
        title: "उदाहरणासह — आणखी recursion नमुने",
        content: "recursion चे नमुने वाढवत जाऊया. शेवटचा आकडा वेगळा करण्याचा नमुना digit sum — number % 10 ने शेवटचा अंक मिळतो आणि number // 10 ने उरलेली संख्या लहान होते. 123 = 1 + 2 + 3 = 6 ठरवणारा असा recursion लिहिता येतो.\nहीच रचना palindrome तपासण्यात येते — string चा पहिला आणि शेवटचा अक्षर बरोबर आहे का, नंतर आतील string पुन्हा तपासा. मराठी शब्द रडकुंडीर, लेव्हल असे palindrome उदाहरणे करता येतात.\ntree walk हा सर्वात उपयुक्त नमुना आहे — प्रत्येक नोडवर काम करा आणि प्रत्येक child subtree वर पुन्हा हाक मारा. फोल्डर rचना किंवा menu यात हाच नमुना वापरला जातो.\nmemoization ही आणखी एक पद्धत — पुन्हा पुन्हा मोजलेला निकाल साठवून ठेवणे. Fibonacci मध्ये समान subproblem सतत मोजले जाते; निकाल cache करून वेळ वाचतो.\nहे सर्व नमुने एकाच तत्त्वावर उभे आहेत — बाकीचा भाग लहान करा, तो सुटला की उत्तर तयार होते. नमुने ओळखायला सराव लागतो; वेगवेगळ्या समस्या लिहून आजमावा.\nप्रत्येक नवीन नमुन्याची चाचणी लहान input वर करा — 3 ने का सुरुवात? कारण खोली कमी आणि मागोवा स्पष्ट. खोल उदाहरणावर जाण्याआधी लहान उदाहरणाची खात्री करा.",
      },
      {
        title: "आठवण — base case शोधण्याची पद्धत",
        content: "recursion लिहताना सर्वात मोठा प्रश्न असतो: base case कसा शोधायचा? तीन चरणात सापडतो. पहिला — सर्वात लहान input शोधा ज्यासाठी उत्तर सरळ माहीत आहे. factorial साठी n = 0 किंवा 1 → उत्तर 1; countdown साठी n <= 0.\nदुसरा चरण — लहान input वर निकाल कोणता ते ठरवा. तो निकाल थेट return करा; सोबत function ला पुढची हाक मारू देऊ नका. हीच अट base case चा न्याय निश्चित करते.\nतिसरा चरण — उर्वरित भागात recursive call ठेवा जी input base case कडे घेऊन जाईल. जर call input लहान करत नसेल तर base case कधीही गाठला जाणार नाही आणि function अडकेल.\nआधी base case ने तपासा आणि नंतर recursive call. हा क्रम महत्त्वाचा आहे — कारण input थेट base case ला पोहोचला तर callच नको. उलट क्रम लिहिल्यास सुरुवातीपासूनच चुका येतील.\nbase case ठरवण्याची ही पद्धत प्रत्येक नवीन recursion ला लागू होते. सराव करा — तीन नवीन समस्या घ्या आणि प्रत्येकसाठी base case आधी ठरवा, मग बाकी रचना. अशी पद्धत आत्मसात झाली की recursion सोपी वाटते.",
      },
    {
        title: "संपूर्ण सार — recursion चे गाभ्याचे नियम",
        content: "recursion चा धडा आता साराच्या रूपात आठवूया. हे नियम एकत्रित लक्षात ठेवणे म्हणजे recursion समजून घेणेच आहे.\n- recursion म्हणजे function स्वतःलाच हाक मारणे.\n- प्रत्येक recursion ला base case आवश्यक असतो.\n- base case म्हणजे थेट निकाल देऊन थांबणारी लहान अवस्था.\n- recursive call ने input लहान होत जायला हवे.\n- base case नसल्यास RecursionError येतो.\n- प्रत्येक हाक stack मध्ये state जपते — खोली वाढली की memory वाढते.\n- झाडासारखी रचना (फोल्डर, मेनू) साठी recursion योग्य.\n- साधे काम loop ने करा — प्रत्येक ठिकाणी recursion लादू नका.\n\n\nbase case शोधण्याची पद्धत तीन चरणांची असते: सर्वात लहान input निवडा, त्याचे उत्तर ठरवा आणि ते थेट return करा. यामुळे function थांबायचा मार्ग सापडतो आणि बाकी रचना त्यावर बसते.\nप्रत्येक नवीन recursion लिहताना small उदाहरणावर मागोवा काढा — प्रत्येक हाक कुठे जाते आणि निकाल कसा परत येतो ते लिहून ठेवा. असा मागोवा आपला सर्वात विश्वासार्ह मित्र आहे.\nloop व recursion ची तुलना करताना हे लक्षात ठेवा — loop पुनरावृत्ती stack ओझे कमी करते; recursion रचनेत साधी वाटते पण खोली मर्यादा असते. म्हणून निवड input आकार आणि रचना पाहून करा.\nहा धडा संपला; पुढील धड्यांमध्ये list आणि data structures शिकताना recursion वापरण्याचे प्रत्यक्ष नमुने दिसतील. पाया घट्ट असल्यास हे सर्व उदाहरणे समजणे सोपे होईल.",
      },
    ],
    practiceQuestions: [
      "base case म्हणजे काय?",
      "base case नसल्यास काय होतं?",
      "factorial(4) ची गणना सांगा",
      "fibonacci पहिल्या 10 संख्या print करा",
    ],
    quiz: [
      {
        question: "base case ची भूमिका?",
        options: ["वेगवान करणे", "थांबवणे", "सुरु करणे", "error"],
        correct: 1,
      },
      {
        question: "base case नसल्यास?",
        options: ["RecursionError", "None", "0", "loop"],
        correct: 0,
      },
      {
        question: "factorial(1) काय?",
        options: ["0", "1", "2", "error"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "recursion वापरून number च्या अंकांची बेरीज काढा (digit sum). उदा. 123 → 1+2+3 = 6.",
      starterCode: `def digit_sum(n):
    if n < 10:
        return n
    return n % 10 + digit_sum(n // 10)

print(digit_sum(123))
print(digit_sum(999))`,
      expectedOutput: "6\n27",
    },
    interviewQuestions: [
      "recursion vs loop कधी कोणता?",
      "base case नसल्यास काय होतं?",
      "ही recursion: function स्वतःला कशी बोलावते?",
    ],
    related: ["python-functions", "python-functions-scope", "python-while-loop"],
    prev: "python-lambda",
    next: "python-lists",
  },

  {
    slug: "python-lists",
    categoryId: "python",
    project: "todo-app",
    title: "Python Lists",
    marathiTitle: "Lists - एकात अनेक values",
    level: "intermediate",
    minutes: 14,
    summary: "List म्हणजे एकाच variable मध्ये अनेक values ठेवण्याचा मार्ग.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list म्हणजे काय?",
        content: "list म्हणजे अनेक values एकत्र ठेवणारा संग्रह. तो ordered आहे — प्रत्येक value ला स्थान (index) असते; आणि mutable आहे — वापरताना बदलता येतो. क्रमणे ठेवा (square brackets) मध्ये लिहून values स्वल्पविरामाने वेगळे करतात.\nप्रत्येक value ला index नावाचा क्रमांक असतो आणि तो 0 पासून सुरू होतो — पहिला घटक 0 वर, दुसरा 1 वर. list मध्ये संख्या, वाक्ये (string), boolean — सगळे प्रकार एकत्र मिसळतात.\nखरेदीच्या यादीची उपमा घ्या — कागदावर अनेक वस्तू क्रमाने लिहिल्या जातात; वरची वस्तू बदलता येते, नवीन जोडता येते, झालेले काम ओलांडता येते. अशी यादी म्हणजेच Python list. स्टेशनवरील गाड्यांची यादी, पुस्तकांचे शेल्फ क्रमांक, दूध/दुकानाची यादी — ही सर्व list ची रोजची उदाहरणे.\nlist वाचण्याचा थेट मार्ग index: fruits[0] म्हणजे पहिला घटक. for loop ने प्रत्येक घटक क्रमाने आणि while ने index वाढवत वाचता येते; in operator ने घटक सापडतो का ते तपासता येते.",
      },
      {
        title: "Syntax: index, negative index, slice",
        content: "फळांची यादी अशी लिहितात: fruits = [\"सफरचंद\", \"केळी\", \"द्राक्षे\"]. प्रत्येक value स्वल्पविरामाने विभागली जाते. नियम नेहमी आठवा: पहिला घटक index 0 वर असतो — एकापासून नव्हे.\nnegative index शेवटून मोजतो — [-1] शेवटचा घटक, [-2] शेवटच्या आधीचा. तुकडा (slice) काढताना colon वापरतात — fruits[1:] म्हणजे दुसऱ्या घटकापासून पुढे.\nखालील कोड चालवल्यास output मध्ये आधी संपूर्ण यादी, मग पहिला घटक (सफरचंद), शेवटचा घटक (द्राक्षे) आणि शेवटी तुकडा (दुसऱ्यापासून) दिसतो.\nsquare brackets ही list ची ओळख आहे — उघडा bracket, values, बंद bracket. रिकामी list [] किंवा list() लिहितात; dragged list घोषणा झाली की type([]) सांगते की ती list आहे. मोठी यादी वाचणाऱ्यासाठी प्रत्येक value वेगळ्या ओळीवर ठेवता येते.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
print(fruits)
print(fruits[0])     # पहिला
print(fruits[-1])    # शेवटचा
print(fruits[1:])    # तुकडा`,
        codeLanguage: "python",
        output: `['सफरचंद', 'केळी', 'द्राक्षे']
सफरचंद
द्राक्षे
['केळी', 'द्राक्षे']`,
      },
      {
        title: "मूल्ये बदलणे: update, append, sort",
        content: "list mutable आहे म्हणून पोझिशन निवडून मूल्य बदलता येते. marks[1] = 95 ने दुसरा गुण नव्याने ठरतो (update). append ने नवीन value शेवटी जोडते, sort ने यादी क्रमाने मांडते.\nखालील कोडात marks = [80, 91, 66] घेतली; marks[1] = 95 ने दुसरा गुण बदलला; append(70) ने शेवटी 70 जोडला; sort मुळे यादी चढत्या क्रमाने लागली — [66, 70, 80, 95].\nlist बदलण्याची साधने: index निवडून नवीन मूल्य (update), append (शेवटी), insert (मधल्या स्थानी), remove (नावाने काढणे), pop (शेवटचा किंवा निवडलेला), sort (क्रमवारी), reverse (उलट), extend (दुसरी यादी जोडणे).\nslice वर मूल्य दिल्यास अनेक घटक एकाच वेळी बदलतात, पण तुकडा काढल्यास नवीन यादी मिळते — मूळ यादी बदलत नाही. प्रत्येक बदल output मध्ये तपासत जा.",
        code: `marks = [80, 91, 66]
marks[1] = 95           # बदल
marks.append(70)        # जोड
marks.sort()            # क्रम लावा
print(marks)`,
        codeLanguage: "python",
        output: `[66, 70, 80, 95]`,
      },
      {
        title: "वास्तविक उदाहरण: उपस्थिती यादी",
        content: "विद्यार्थ्यांची उपस्थिती list मध्ये ठेवतात. for loop प्रत्येक विद्यार्थ्याला संबोधतो आणि len ने यादीतील विद्यार्थ्यांची एकूण संख्या मिळते — 3.\noutput मध्ये हजर: आदित्य, हजर: प्रिया, हजर: सोनाली अशा तीन ओळी आणि शेवटी 3 विद्यार्थी दिसते.\nएकाच भागात loop आणि len मिसळले — list वाचणे आणि मोजणे एकत्र. असा वास्तविक उपयोग दिवसभर उपस्थित नोंदवण्यात, खरेदीच्या यादीत आणि कामांच्या नियोजनात दिसतो.\nगुणांची सरासरी मोजायची असेल तर sum(marks) / len(marks) — list मधून मोजणीसाठी हीच पद्धत. कोणत्याही application मध्ये कुठेतरी list असतेच.",
        code: `students = ["आदित्य", "प्रिया", "सोनाली"]
for s in students:
    print("हजर:", s)
print(len(students), "विद्यार्थी")`,
        codeLanguage: "python",
        output: `हजर: आदित्य
हजर: प्रिया
हजर: सोनाली
3 विद्यार्थी`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ index 1 पासून सुरू समजणे — पहिला घटक नेहमी 0 वर असतो. marks[1] म्हणजे दुसरा गुण, पहिला नव्हे.\n✗ यादीच्या बाहेरचा index वापरणे — केवळ 5 घटकांच्या यादीत marks[5] दिल्यास IndexError येतो. len() मध्ये मर्यादा तपासा; शेवटपासून जायचे असल्यास negative index वापरा.\n✗ = ने कॉपी करणे — list2 = list1 लिहिल्यास दोन्ही एकाच data ला point करतात (reference); एकामध्ये बदल केला तर दुसऱ्यातही दिसतो. वेगळी प्रत हवी असेल तर [:] किंवा copy() वापरा.\n✗ loop चालवतानाच यादीतून घटक काढणे — काढल्यामुळे index वेगाने सरकतो आणि मधले घटक चुकून सुटतात. सुरक्षित मार्ग: प्रतिलिपीवर (copy वर) loop चालवा किंवा नवीन यादीत जमा करा, मूळ यादी शेवटी बदला.\n✗ वेगवेगळ्या प्रकारांच्या यादीवर sort करणे — number आणि string एकत्र असलेली यादी sort करता येत नाही (TypeError). म्हणून एकाच प्रकाराच्या याद्या sort करा.",
      },
      {
        title: "Interactive: सर्वात मोठा गुण शोधणे",
        content: "गुणांच्या यादीतून सर्वात मोठा गुण शोधण्याची पद्धत: पहिला गुण (marks[0] = 45) सुरुवातीला सर्वात मोठा मानून धरतो; मग for loop प्रत्येक गुणाशी तुलना करतो — मोठा गुण सापडला की largest बदलतो.\nचालणी: 78 आले तर 45 वरून 78; 92 आले तर 78 वरून 92; पुढे 60 आणि 51 मोठे नाहीत म्हणून तसेच राहतो. output: सर्वात जास्त: 92.\nअशा पद्धतीला scan म्हणतात — प्रत्येक घटकावरून जावून योग्य उत्तर निवडणे. विशिष्ट गुण शोधायचा असल्यासही हीच loop पद्धत वापरता येते.\nposition ला बरोबर हवे असेल तर enumerate ने क्रम आणि value दोन्ही मिळते — but simple उदाहरणात index कमी महत्त्वाचा. Loop हीच असा search करण्याची मूलभूत यंत्रणा आहे.",
        code: `marks = [45, 78, 60, 92, 51]

largest = marks[0]
for m in marks:
    if m > largest:
        largest = m
print("सर्वात जास्त:", largest)`,
        codeLanguage: "python",
        output: `सर्वात जास्त: 92`,
      },
      {
        title: "Mini Project: nested list ची बेरीज",
        content: "nested list म्हणजे list च्या आत list — डेटा मांडणीत प्रत्येक आतील यादी एक row सारखी असते. उदाहरणात data = [[1, 2], [3, 4], [5]] या तीन rows आहेत.\nfor loop बाहेरील प्रत्येक row उचलतो आणि sum(row) त्या आतील यादीची बेरीज करतो; total मध्ये सर्व rows च्या बेरीजा जमा होतात. एकूण = 1+2 + 3+4 + 5 = 15.\nहीच पद्धत अस्थिर data (varying size) वर काम करते — आतील याद्यांची लांबी कितीही असो. हेच nested list चे सौंदर्य: प्रत्येक आतील row वर for loop चालवता येतो.\nहा project list चा पूर्ण अभ्यास साधतो — नोंदी, loop, मोजणी. नवीन data घेऊन स्वतः तपासा; आतील याद्यांची खोली वाढली तर recursion ची आठवण येईल, पण एका स्तरासाठी साधा loop पुरेसा आहे.",
        code: `data = [[1, 2], [3, 4], [5]]
total = 0
for row in data:
    total += sum(row)
print("एकूण:", total)`,
        codeLanguage: "python",
        output: `एकूण: 15`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "indexing 0 पासून सुरू होते आणि negative index शेवटून मोजतो — [-1] शेवटचा, [-2] शेवटच्या आधीचा. slice काढताना शेवटचा index वगळला जातो (fruits[1:3] मध्ये index 1 आणि 2 येतात, 3 नाही).\nएका list मध्ये अनेक प्रकार एकत्र शक्य आहेत. len() मध्ये घटकांची एकूण संख्या मिळते; रिकाम्या यादीची len 0 असते. एक घटक असलेली यादी [5] अशी लिहिली जाते.\nappend आणि pop शेवटी जलद असतात; in operator घटक आहे का ते तपासतो; count आणि index ही शोधाची साधने; reverse जागेवर उलट करते; sort मूळ यादी बदलतो आणि sorted नवीन यादी देतो — हा फरक कायम ठेवा.\nनावाने list पाठवली तर reference जाते — म्हणून वेगळी प्रत हवी असेल तर [:] किंवा copy(). नवीन व्हेरिएबल नावे स्वच्छ ठेवा — वाचनीयता वाढते.",
      },
    {
        title: "सखोल अभ्यास — reference, copy आणि भावी वर्तन",
        content: "list शिकताना एक अतिशय महत्त्वाची गोष्ट समजून घ्या: व्हेरिएबल यादीची हुकूमत स्वतःच्या पाकिटात ठेवतो आणि data ची प्रत करतो. list1 = [1, 2] म्हणजे list1 मध्ये संख्या नाहीत — ती त्या यादीचा reference धारण करते. म्हणून = चिन्हाने बनवलेली दुसरी नाव तीच यादी दर्शवते.\nयाचा परिणाम मोठा आहे: list2 = list1 लिहिल्यास दोन्ही नावे एकाच data ला point करतात. list2 मध्ये append केले तर list1 मध्येही दिसते. हे expectation नसते तर दोन्ही बदलतात हे धक्का देऊ शकते.\nवेगळी प्रत हवी असेल तर कॉपी करा — sliced copy list3 = list1[:] किंवा built-in method list3 = list1.copy(). अशा वेळी दोन्ही नावे वेगवेगळी यादी असतात आणि एकाचे बदल दुसर्यात दिसत नाहीत.\nपण लहान नोट — पाठवलेली copy ही shallow असते. जर यादीत आणखी यादी (nested list) असेल तर ती आतील यादीची प्रत नाही; आतील यादी दुसऱ्या नावे शेअर होतात. खोल प्रत हवी असेल तर copy module मधील deepcopy पाहा.\nअनेक elements फेरफार करायचे असल्यास हे reference नियम समजणे आवश्यक आहे. data फंक्शनला पाठवताना जर function मध्ये modify केले तर बाहेरची यादीही बदलते — कारण reference जाते. या वर्तनाची जाणीव ठेवल्यास त्रास टाळता येतो.\nस्वतः हे तपासा: list1 लिहा, list2 = list1 करा, list2 append करा आणि दोन्ही छापा — दोन्ही बदलतात. मग list3 = list1[:] करून तिला append करा — list1 अपरिवर्तित दिसते. हा प्रयोग reference चा गाभा तुम्हाला अंगवळणी पाडतो.",
      },
      {
        title: "वाचन आणि अंतर्गत काम — list मधील data प्रकार आणि slicing",
        content: "list मध्ये विविध प्रकार एकत्र असू शकतात — संख्या, string, boolean, अगदी list आणि dict सुद्धा. mixed = [1, \"दोन\", True, [3, 4]] ही यादी बरोबर चालते. प्रत्येक element indexing ने सापडतो.\nस्वतः indexing चे नियम पुन्हा ठरवूया: पहिला element index 0 वर, दुसरा 1 वर. शेवटून मोजता -1 हा शेवटचा, -2 हा शेवटच्या आधीचा. या negative index चा उपयोग शेवटचे elements देताना होतो.\nslicing मध्ये दोन बिंदूंमध्ये colon असतो — list[start:end]. end हा index समाविष्ट होत नाही. list[1:4] म्हणजे index 1, 2, 3 हे तीन elements. start किंवा end सोडल्यास सुरुवात किंवा शेवटपासून सर्व येतात.\nstep हा तिसरा घटक जोडता येतो — list[::2] म्हणजे प्रत्येक दुसरा घटक. उलट यादी साठी list[::-1]. असे slicing एकदा लक्षात आले की अनेक समस्या एका ओळीत सुटतात.\nhered characters वर slicing काम करतो — यादी मोठी असली तरी तुकडा घेणे हे खूप वेगवान होते. कारण आतली रचना C-language सारखी आयोजित असते.\nslicing वाचनाने मूळ यादी बदलत नाही — नवीन यादी मिळते. पण slicing द्वारा assignment तर करता येते — list[1:3] = [8, 9] मध्ये भाग बदलतो. वाचणे आणि लिहिणे यांचा फरक संदर्भानुसार ओळखा.",
      },
      {
        title: "उदाहरणांसह — रोजच्या list क्रिया",
        content: "रोजच्या कामात list कशी वापरली जाते ते पहा. दुकानातील खरेदीची यादी — cart = [] रिकामी सुरू करा, मग cart.append ने प्रत्येक वस्तू जोडा. शेवटी किती वस्तूंची बेरीज झाली ते len cart मध्ये दिसते.\nहजेरीची यादी — students मध्ये नावे आहेत. in operator ने कोणी आले आहे का ते तपासा. count value किती वेळा दिसते ते सांगते; index कोणत्या ठिकाणी first दिसली ते सांगते.\nगुणांची यादी — sum(marks) बेरीज, max उच्च, min नीच. सरासरी sum(marks) / len(marks). अशी एका अक्षरात बांधलेली गणना marks वर चालू शकते.\nकर्मचार्यांचा वेतन यादी — 57 नोंदीतून 10 हजारांपेक्षा जास्त वेतन असणाऱ्यांची यादी filter करा. simple loop ने condition तपासून नवीन यादी भरा किंवा comprehension लिहा.\nडायनामिक data — टिप्पणी, इव्हेंट लॉग, बास्केट — या सर्व ठिकाणी list जोडत राहते आणि वाचत राहते. data चा आकार मोठा असला तरी ती रचना सोपी राहते.\nप्रत्येक क्रिया output सोबत तपासा — append नंतर, sort नंतर, remove नंतर यादी छापा. आशा नाहीतर वाटेल ते जतन होत असते पण प्रत्येक पायरीवर actual देखणे महत्त्वाचे आहे.",
      },
      {
        title: "अडचणींचे निवारण — list चुका आणि उपाय",
        content: "list सोबत आलेल्या सामान्य अडचणींचे निवारण करूया. सर्वात पहिली चूक — index 1 पासून सुरू समजणे. पहिला घटक नेहमी 0 वर आहे. list[1] म्हणजे दुसरा घटक. हा गैरसमज अनेक त्रुटींचे मूळ होऊ शकतो.\nदुसरी चूक — यादीच्या आकाराबाहेरचा index वापरणे. 5 घटकांच्या यादीत list[5] म्हणजे IndexError. len(list) ही मर्यादा दाखवते; शेवटून जायचे असेल तर negative index वापरा.\nतिसरी चूक — copy करताना = वापरणे. list2 = list1 म्हणजे reference — दोन्ही एकच data शेअर करतात. एकाचे बदल दुसर्यात दिसतात; म्हणून वेगळी प्रत [: ] किंवा copy().\nचौथी चूक — loop चालवतानाच यादीतून घटक काढणे. काढल्यामुळे index वर येतो आणि मधले घटक चुकून वगळले जातात. सुरक्षित मार्ग — प्रतिरूपावर loop करा किंवा नवीन यादी जमा करा.\nपाचवी चूक — एकाच प्रकारच्या घटकांशिवाय sort करणे. संख्या आणि string दोन्ही एकत्र असलेली यादी sort करता येत नाही — TypeError येते. तुलना करण्यासाठी समान प्रकार आवश्यक.\nकोणतीही चूक आल्यास संदेश वाचा — IndexError कुठे बाहेर गेले ते, TypeError कोणता प्रकार मिसळला ते सांगतो. संदेश वाचल्यावर योग्य ओळीत उपाय लागू करा.",
      },
      {
        title: "सराव — list ची कार्ये",
        content: "list चे सामर्थ्य अजमावण्यासाठी खालील कार्ये पूर्ण करा. प्रत्येक कार्य output तपासून केल्यावर निकाल लिहा.\nकार्य एक — 10 संख्यांची यादी बनवा आणि प्रत्येक नामासक सर्वात मोठा घटक loop ने शोधा (max बिल्टिन वापरू नका).\nकार्य दोन — 5 नावांची यादी घ्या आणि त्यांना अक्षरक्रमाने क्रमवार लावा. मग शेवटचे दोन घटक negative index ने मिळवा.\nकार्य तीन — उपयन यादी घ्या, त्यातून duplicate काढा — नवीन यादी बनवा ज्यात प्रत्येक नाव एकदाच असेल.\nकार्य चार — nested list मधील सर्व संख्यांची बेरीज करा — आतील प्रत्येक row वर बेरीज होऊन एकूण जोडा.\nकार्य पाच — एका यादीचा slicing करा — ह्र २. घटकांनंतरच्या प्रत्येक तिसऱ्या घटकाची नवीन यादी तयार करा (step वापरा).\nकार्य सहा — दोन याद्या जोडून एक करा आणि मूळ दोन्ही याद्या अपरिवर्तित राहतात का ते तपासा.\nप्रत्येक कार्याचे अपेक्षित output आधी लिहा आणि नंतर program चालवा. जुळत नसल्यास चुकीचा भाग print करून तपासा — हीची समाधानाची नेहमीची पद्धत तुम्हाला वेगाने डेटा फिड्यू करायला शिकवते.",
      },
      {
        title: "मुलाखतीतील प्रश्न — list संभाषण",
        content: "list चे प्रश्न मुलाखतीत वारंवार येतात. सर्वात पहिला प्रश्न — list आणि tuple मध्ये फरक काय? उत्तर — list mutable असते, tuple immutable असते. list बदलता येते, tuple नाही; त्यामुळे tuple वर सुरक्षितता आणि वेग अधिक असतो.\nदुसरा प्रश्न — list व tuple च्या copy मध्ये काय फरक? उत्तर — list[:] किंवा copy() प्रत देते; tuple ला copy करण्याची गरजच नसते कारण ती अपरिवर्तनीय. त्यामुळे tuple मध्ये = शेअरिंगची चिंता नसते.\nतिसरा प्रश्न — indexing 0 पासून का सुरू होते? उत्तर — ही संगणक विज्ञानाची प्रथा आहे; memory मधील स्थानाचा ऑफसेट 0 पासून मोजला जातो. इंग्रजी म्हणतात label 0-based.\nचौथा प्रश्न — append आणि extend मध्ये फरक? उत्तर — append संपूर्ण argument एक घटक म्हणून शेवटी जोडते; extend दुसऱ्या संग्रहाचे घटक वेगवेगळे जोडते. extend ने फ्लॅट मिक्सिंग होते.\nपाचवा प्रश्न — sort आणि sorted मध्ये फरक? उत्तर — sort() मूळ यादी बदलते आणि None परत करते; sorted() नवीन यादी देते आणि मूळ बदलत नाही. मूळ जपायचे असल्यास sorted वापरा.\nसंभाषणात उदाहरण देऊन उत्तर द्या — छोटा कोड सांगून. उदा. l = [3, 1, 2]; l.sort(); print(l). असे असल्यास समज सिद्ध होते.",
      },
    {
        title: "अधिक उदाहरणे — while, enumerate आणि in operator सोबत list",
        content: "list फक्त for loop नेच वाचता येते असे नाही — while loop हा एक पर्याय आहे. index control स्वतः धरून while ने यादी वाचता येते. संगणक इंग्रजीत म्हणतात ub नियंत्रण — index आणि मर्यादा आपल्या हातात असतात. जेव्हा क्रियादरम्यान घटक बदलायचे असतील किंवा जटिल अटी लागतील तेव्हा while उपयुक्त होतो.\nenumerate हा एक अतिशय उपयुक्त आधार आहे — तो each element सोबत त्याचा index पण देतो. for i, item in enumerate(marks): मध्ये i हा क्रम आणि item हे element. अंगठीची स्थिती दाखवायची असेल, किंवा index चा उपयोग करून element ची स्थिती सांगायची असेल तर enumerate परिपूर्ण आहे.\nin operator हा yet आणखी ठोस आधार आहे — element यादीत आहे का ते एका ओळीत तपासतो. if \"प्रिया\" in students: असा प्रश्न सोप्या शब्दांत विचारता येतो. हा operator तपासणी खूप वेगवान असतो कारण आतून कार्यक्षम शोध घेतला जातो.\nयाशिवाय not in ही उलटी तपासणी आहे — if item not in cart: म्हणजे junctionly एखादा item यादीत नसल्यास क्रिया करा. duplicate टाळण्यासाठी ही रचना सगळीकडे वापरली जाते — घालण्याआधी तपास, मग घाला.\nsorting, search आणि counting ही त्रैयी list च्या रोजच्या कामातील तीन प्रमुख अंगे आहेत. sort क्रमवारी लावतो, in शोध घेतो आणि count व len मोजतो. या तिन्हींचे संयोजन अनेक समस्या एका खेळीत सोडवते.\nप्रत्येक अंगाचे वेगळे उदाहरण लिहा — enumerate ने क्रमांकासह यादी छापा, while ने उलट क्रमाने वाचा आणि in ने सापडलेला घटक काढा. तीनही नमुने वेगळे असले तरी यादीकडे पाहण्याचा दृष्टिकोन एकच आहे — तिन्ही कामाची पद्धत तुमच्या हातात असते.",
      },
      {
        title: "सखोल चुकांचे निवारण — index, copy आणि mutation चे सापळे",
        content: "list च्या चुका नेहमीच्या असतात; त्यांना ओळखण्याची क्षमता वाढवूया. सर्वात सामान्य चूक mutation चा गैरसमज आहे — method जे मूळ यादी बदलते त्याला काळजीपूर्वक ओळखा. sort आणि reverse पाठवलेल्या यादीलाच बदलतात; तोच निकाल दुसरी यादी म्हणून परत मिळत नाही.\nजर sort मुळे मूळ यादी बदलायची नसेल तर sorted वापरा — तो नवीन यादी देते आणि मूळ ठीक राहते. हा फरक महत्त्वाचा आहे कारण मूळ data अनेक ठिकाणी वापरला जातो; चुकून बदल झाल्यास अंदाज बिघडतो.\nदुसरा सापळा म्हणजे यादी काढताना loop आत असणे. for हे elements काढत असताना index नक्सी उडी मारतो आणि काही घटक चुकून राहतात. सुरक्षित उपाय — copy वर loop करा किंवा नवीन यादीत फक्त हवे ते ठेवा.\nतिसरा सापळा म्हणजे string मध्ये चुकून element मानणे. यादीतील प्रत्येक घटक वेगळी वस्तू आहे; त्याला string च्या अक्षरांसारखे वागवू नका. index ची गणना नेहमी len() ने तपासा — मर्यादा ओलांडल्यास IndexError येते.\nचौथा सापळा हा reference चा आहे — function ला list पाठवल्यास ती list संदर्भाने जाते आणि function मध्ये बदल केलेस बाहेरची यादीही बदलते. हे इच्छित नसेल तर प्रत पाठवा — list[:] किंवा copy().\nप्रत्येक चुकीची खात्री output द्वारे करा — बदल केल्यावर यादी छापा आणि मूळ अपेक्षित अवस्था कोणती ते ध्यानात ठेवा. चुका जितक्या लवकर ओळखल्या तितका उपाय सोपा; म्हणून त्रुटी संदेश आणि output हे आपले पहिले मित्र आहेत.\nसरते शेवटी एक सवय पक्की करा — नवीन काम हाती घेता कोड लिहिण्याआधी data कशासारखा आहे (list का नाही) आणि कोणता बदल करायचा आहे ते लिहा. हे नियोजन त्रुटींची संख्या अनेक पटींनी कमी करते.",
      },
    {
        title: "अंतिम आठवण — list चे संपूर्ण नकाशे",
        content: "list हा धडा आता संपूर्णपणे उलगडून पाहू. list म्हणजे क्रमाने ठेवलेल्या वस्तूंचा संग्रह — कोणतीही वस्तू, कोणत्याही प्रकारची, एकत्र असते. सुरुवातीला वर्गासमक्ष एक यादी संख्या, नावे, किंवा मिश्रण — सर्व चालते. क्रम जपला जातो आणि प्रत्येक वस्तूला index मिळतो; index 0 पासून सुरू होतो.\nmutable हा list चा पहिला महत्त्वाचा गुण — परिवर्तनीय म्हणजे वस्तू बदलता येते. index ने जागेवर बदल list[2] = 10, append ने शेवटी जोडणे, remove ने काढणे — हे सर्व एकाच यादीत घडते. अशी बदलक्षमता डेटा सतत बदलत असलेल्या कामांसाठी list योग्य करते.\nदुसरा गुण — क्रम आणि duplicate दोन्ही असतात. element list मध्ये अनेकदा येऊ शकतो आणि क्रम नेहमी जपला जातो. हा फरक set पेक्षा महत्त्वाचा आहे — तिथे duplicate मिटतात; list मध्ये जतन केलेला पूर्ण history समजला जातो.\ntween indexing ची रचना सोपी आहे — पहिला 0, दुसरा 1, आणि मागून -1, -2. slicing list[start:end] हा भाग देते जिथे end समाविष्ट होत नाही. step जोडल्यास list[::2] प्रत्येक दुसरा घटक मिळतो. ही साधने माहिती असल्यास यादी windows बनवता येते.\nenumerate आणि in हे दोन आधार रोजचे साथीदार आहेत. enumerate index सोबत element देते आणि in घटक आहे का याची तपासणी करते. while loop ने यादी उलट वाचता येते आणि reverse ने क्रम उलटा करता येतो. ही सर्व साधने संग्रह हाताळण्याचे वेगवेगळे मार्ग देतात.\ncopy चा नियम अत्यावश्यक आहे — = म्हणजे reference, एकच data शेअर होतो; [:] किंवा copy() म्हणजे स्वतंत्र प्रत. दोन नावे एकच यादी दाखवत असल्यास एका नावेचे बदल दुसऱ्या नावेत दिसतात. मोठ्या program मध्ये ही चूक सर्वांत महागडी ठरते म्हणून प्रत कधी हवी ते ओळखा.\nmethods ची दोन विभागणी — बदल करणारे (append, remove, sort, reverse) आणि वाचणारे (count, index, sorted, len). बदल करणारे None परत करतात; वाचणारे नवीन मूल्य देतात. हा फरक समजल्यावर l = l.sort() सारख्या चुका टाळता येतात.\nक्रमवारी — sort मूळ यादी करतो, sorted नवीन यादी देते. हे दोन्ही केस तपासून निवडा — मूळ जपणे हवे असेल तर sorted, वाचनाचा क्रम विसरायचा असेल तर sort. क्रमवारीचे स्वरूप परिस्थितीनुसार ठरते.\nlist comprehension ही उच्चायुक्ती एका ओळीत नवीन यादी बनवते — expression, for, if असा क्रम. loop विस्थापित करून स्पष्ट transform आणि filter केले जातात. इंग्रजीत जास्त कुशल प्रयोगासाठी हा एक लोकप्रिय Pythonic पध्दत असतो.\nशेवटी नेहमी स्मरण ठेवा — list चा आकार len मध्ये millibotn असतो, तात्पुरते empty असेल तर len 0 दर्शवतो. data structures च्या पुढील धड्यांमध्ये list चे हे सर्व नियम आधार म्हणून वापरले जातील. आज घडवलेला पाया कायम ठेवा — प्रत्येक उदाहरण output सोबत चालवा आणि swipe प्रत्येक नियम हाताने अनुभवा.",
      },
    ],
    practiceQuestions: [
      "List का mutable?",
      "last element कसा मिळवता?",
      "5 संख्यांची list — max आणि min काढा",
      "नावाची list बनवा, शेवटी 2 जोडा",
    ],
    quiz: [
      {
        question: "List मधील पहिल्या element चा index काय असतो?",
        options: ["1", "0", "-1", "start"],
        correct: 1,
      },
      {
        question: "List च्या शेवटी element जोडण्यासाठी कोणती method?",
        options: ["add()", "insert()", "append()", "push()"],
        correct: 2,
      },
      {
        question: "List mutable म्हणजे?",
        options: ["बदलता येते", "बदलत नाही", "sorted", "छोटी"],
        correct: 0,
      },
    ],
    challenge: {
      prompt: "नामांची list दिली — त्यातून ज्यांची लांबी 5 पेक्षा जास्त त्यांची नवीन list तयार करा आणि print करा.",
      starterCode: `names = ["आदित्य", "पु", "सोनाली", "रमेश", "कीरा"]
long_names = []
for name in names:
    if len(name) > 5:
        long_names.append(name)
print(long_names)`,
      expectedOutput: "['आदित्य', 'सोनाली', 'रमेश']",
    },
    interviewQuestions: [
      "list vs tuple?",
      "list कशी copy करता — slicing कशी?",
      "indexing 0 पासून का?",
    ],
    related: ["python-list-methods", "python-list-comprehensions", "python-functions"],
    prev: "python-recursion",
    next: "python-list-methods",
  },

  {
    slug: "python-list-methods",
    categoryId: "python",
    title: "List Methods",
    marathiTitle: "List मधील सामान्य methods",
    level: "intermediate",
    minutes: 13,
    summary: "append, insert, remove, pop, sort — list साठी तयार functions.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list methods म्हणजे काय?",
        content: "method म्हणजे list शी जोडलेली तयार क्रिया. तिला list च्या नावासह बोलावतात — उदा. list.append(x). जोडणे, काढणे, शोधणे, क्रमवारी अशी कामे हातात हात करायला लागत नाहीत; method ने ती एका ओळीत होतात — म्हणून कोड लहान आणि स्पष्ट राहतो.\nappend सर्वात वापरला जाणारा method आहे — तो मूल्य यादीच्या शेवटी जोडतो. शेवटी जोडणाऱ्या अशा रचनेला stack म्हणतात; records आणि लॉग साठवण्यास ती नैसर्गिक आहे — प्रत्येक नवीन data मागे येतो.\nटोकरीची उपमा सोपी आहे: टोकरीत वस्तू टाकणे म्हणजे append, टोकातून वस्तू काढणे म्हणजे pop, नावाने काढणे म्हणजे remove, क्रम लावणे म्हणजे sort, वस्तू कुठे आहे ते list मधून पाहणे म्हणजे index आणि कितीदा आहे म्हणजे count.\nकाही methods निकाल परत करतात (जसे count, index) आणि काही फक्त यादीत बदल करतात (जसे sort, append) — हा फरक output मध्ये प्रत्यक्ष दिसतो.",
      },
      {
        title: "Syntax: append, insert, sort, count, index",
        content: "सामान्य रूपरेषा: list.navya_method(मूल्य). append शेवटी जोडते, insert स्थान सांगून घालते (a.insert(0, 0) म्हणजे सुरुवातीला), sort क्रम लावतो, count मूल्य कितीदा आहे त्याची संख्या देते आणि index मूल्य कोणत्या स्थानावर आहे ते सांगते.\nखालील कोडात a = [3, 1, 2] घेतले; append(4) ने शेवटी 4 जोडला, insert(0, 0) ने सुरुवातीला 0 घातला, sort ने चढता क्रम लावला — [0, 1, 2, 3, 4].\noutput मध्ये तिन्ही निकाल दिसतात: क्रमवार यादी, 2 ची संख्या 1 (count) आणि 3 चे स्थान index 3 (index).\na.insert(len(a), x) म्हणजे शेवटी घालणे — तेच append सारखे. म्हणून शेवटी append वापरा, मध्यभागी insert. मूल्य यादीत नसल्यास index ValueError देते — म्हणून संशय असल्यास आधी in ने तपासा.",
        code: `a = [3, 1, 2]
a.append(4)          # [3,1,2,4]
a.insert(0, 0)       # [0,3,1,2,4]
a.sort()             # [0,1,2,3,4]
print(a)
print("2 ची संख्या:", a.count(2))
print("3 कोणत्या index वर:", a.index(3))`,
        codeLanguage: "python",
        output: `[0, 1, 2, 3, 4]
2 ची संख्या: 1
3 कोणत्या index वर: 3`,
      },
      {
        title: "काढणे: remove आणि pop मध्ये फरक",
        content: "remove नावाने घटक काढतो आणि काही परत करत नाही; pop index देऊन घटक काढतो आणि काढलेला घटक परत करतो. append नंतर pop म्हणजे उलट क्रम — शेवटचा घटक आत येतो आणि शेवटचाच बाहेर जातो.\nफळांच्या यादीतील कोड पहा: remove(\"केळी\") मध्यल्या घटकाला नावाने काढतो; pop() ने शेवटचा घटक (द्राक्षे) काढून तोच last मध्ये धरला जातो. output: यादी [सफरचंद] आणि काढलेला: द्राक्षे.\nकाढण्याआधी तपासा — यादीत नसलेला item remove केल्यास ValueError येते. pop साठीही index नक्की संख्येच्या आत असावा; pop(0) पहिला घटक देते — अशी प्रथम-ये-प्रथम-जा रचना queue म्हणतात, पण pop(0) मोठ्या यादीत संथ असू शकतो.\nकाय काढायचे ते आधी ठरवा: नाव माहीत असेल तर remove, शेवटचा/स्थान माहीत असेल तर pop. negative index सह pop चालते — pop(-1) म्हणजे शेवटचा.",
        code: `fruits = ["सफरचंद", "केळी", "द्राक्षे"]
fruits.remove("केळी")      # नावाने काढा
last = fruits.pop()        # शेवटचा काढा
print(fruits)
print("काढलेला:", last)`,
        codeLanguage: "python",
        output: `['सफरचंद']
काढलेला: द्राक्षे`,
      },
      {
        title: "वास्तविक उदाहरण: विद्यार्थी यादी व्यवस्थापन",
        content: "विद्यार्थ्यांची उपस्थिती यादीत व्यवस्थापित करतो. roll मध्ये प्रिया आणि आदित्यसह चार नावे आहेत. count(\"प्रिया\") ने प्रिया कितीदा आहे ते मोजले — उपस्थित: 2.\nroll.sort() ने नावे अक्षरक्रमाने लागली: आदित्य, प्रिया, प्रिया, सोनाली. मग in operator ने आदित्य आहे का ते तपासले आणि remove ने त्याला यादीतून हटवले — आदित्य हटवला.\nअसा वापर शाळेच्या कार्यालयात रोज होतो: नवीन मागणी append ने भरते, झालेली मागणी remove/pop ने काढते, क्रमवारी sort ने साधते, कोणती वस्तू कितीदा विकली हे count देते.\nमहत्त्वाची सवय: काढण्याआधी in ने तपासा. येथे आदित्य होता म्हणून remove सुरक्षित चालला — नसताना शक्य असलेली ValueError ही पद्धत टाळते.",
        code: `roll = ["प्रिया", "सोनाली", "आदित्य", "प्रिया"]
print("उपस्थित:", roll.count("प्रिया"))
roll.sort()
print("क्रमवार:", roll)
if "आदित्य" in roll:
    roll.remove("आदित्य")
    print("आदित्य हटवला")`,
        codeLanguage: "python",
        output: `उपस्थित: 2
क्रमवार: ['आदित्य', 'प्रिया', 'प्रिया', 'सोनाली']
आदित्य हटवला`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ यादीत नसलेला item remove करणे — ValueError: list.remove(x): x not in list येतो. काढण्याआधी in operator ने तपासा — आधी तपास, मग remove.\n✗ रिकाम्या यादीवर pop करणे किंवा बाहेरच्या index वर pop करणे — IndexError: pop from empty list किंवा pop index out of range. len() कडे लक्ष ठेवा; शेवटचा घटक हवा असेल तर pop(-1) किंवा फक्त pop(). index 0 पासूनच मोजला — चुकीचा क्रम गोंधळ घालतो.\n✗ copy करताना = वापरणे — same मध्ये data share होतो; दोन्ही नावे एकाच यादीला point करतात. वेगळी प्रत हवी असेल तर [:] किंवा copy() वापरा.\n✗ वेगवेगळ्या प्रकारांच्या यादीवर sort करणे — संख्या आणि string एकत्र असल्यास TypeError येतो. एकाच प्रकाराची यादी sort करा.\n✗ index शोधताना मूल्य नसणे — index() काम करायला घटक असलाच पाहिजे; नसल्यास ValueError. मूल्य आहे का याची खात्री आधी in ने करा.",
      },
      {
        title: "Interactive: extend ने दोन याद्या जोडणे",
        content: "extend हा append पेक्षा वेगळा आहे. append संपूर्ण यादी एक घटक म्हणून शेवटी जोडते, पण extend दुसऱ्या यादीचे घटक वेगवेगळे काढून a मध्ये मिसळतो.\nखालील कोडात a = [1, 2] आणि b = [3, 4, 5]. a.extend(b) नंतर a मध्ये b चे सर्व घटक क्रमाने — output [1, 2, 3, 4, 5].\nदोन्ही methods चा फरक output मध्येच दिसतो: append दिल्यास result [1, 2, [3, 4, 5]] असे — एक nested यादी; extend दिल्यास घटक सपाट जोडले जातात.\ndata एकत्र करण्यासाठी extend योग्य. स्वतः नवीन याद्यांवर तपासा; a.clear() ने यादी रिकामी होते आणि len 0 येतो — हेही पडताळून पहा.",
        code: `a = [1, 2]
b = [3, 4, 5]
a.extend(b)
print(a)`,
        codeLanguage: "python",
        output: `[1, 2, 3, 4, 5]`,
      },
      {
        title: "sort vs sorted, reverse, copy",
        content: "sort() मूळ यादीतच क्रम लावते — मूळ बदलते; sorted() नवीन यादी देते — मूळ बदलत नाही. मूळ यादी जपायची असेल तर sorted वापरा किंवा आधी प्रत काढा.\nउतरत्या क्रमासाठी reverse=True — a.sort(reverse=True). key वापरून स्वतःचे नियम देता येतात — उदा. नावांची लांबी किंवा दुसऱ्या घटकानुसार क्रमवारी. reverse() जागेवरच क्रम उलट करते — मूळ यादी बदलते.\ncopy साठी [:] किंवा copy() — दोन्ही नवीन प्रत देतात. = ला कधीही copy समजू नका — ते तर reference देते.\nक्रमवारी आणि कॉपीचे हे नियम लक्षात ठेवा: बदल मूळात हवा तर method जागेवर चालवा (sort, reverse); मूळ जपायची असेल तर sorted असो वा copy — नवीन यादी घ्या.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "append शेवटी एक मूल्य जोडते, extend दुसऱ्या यादीचे घटक वेगवेगळे जोडते आणि insert स्थान सांगून घालते. clear सर्व घटक रिकामे करते.\nremove फक्त पहिली घटना काढतो — तोच घटक दोनदा असला तर दुसरा असाच राहतो. count संख्या आणि index first स्थान देते — दोन्ही शोधाची साधने.\nsorted() नवीन यादी देते, sort() मूळ बदलते; reverse() मूळ उलट करते. append आणि indexing जलद; यादी वाढली की काही operations संथ होऊ शकतात — हा तांत्रिक तपशील जाणून ठेवा.\nreverse आणि sort मूळ यादी बदलतात — मूळ जपायची असेल तर copy करून घ्या. slice ([:]) आणि copy() दोन्ही समान प्रत देतात — हेच धड्याचे मुख्य तत्त्व.",
      },
    {
        title: "सखोल अभ्यास — methods काय परत करतात आणि काय बदलतात",
        content: "यादीच्या methods ची सर्वांत मोठी अडचण म्हणजे कोणता method मूळ यादी बदलतो आणि कोणता नवीन निकाल परत करतो हे ओळखणे. append, insert, remove, sort, reverse, clear हे मूळ यादीतच बदल करतात आणि सहसा None परत करतात. कारण निकाल वेगळा द्यायचा नसतो, फक्त यादीला सुधारणे हा त्यांचा उद्देश असतो.\nयाच्या उलट count आणि index हे नवीन मूल्य परत करतात — count म्हणजे घटक कितीदा आहे ही संख्या आणि index म्हणजे घटक कोणत्या स्थानावर प्रथम दिसतो हा क्रमांक. हे दोन्ही वाचनासाठी असतात; मूळ यादी बदलत नाहीत.\nहा फरक समजला नाही तर एक सामान्य चूक होते: l = l.sort() असे लिहिले की l मध्ये None बसतो आणि मूळ यादी नष्ट वाटते. कारण sort मूळच करतो आणि None परत करतो. म्हणून l.sort() लिहून नंतर वेगळ्या ओळीत l छापा — दोन्ही कामे वेगळी आहेत.\nsorted हा built-in function मूळ यादी न बदलता नवीन क्रमवार यादी देतो. हा फरक असल्याने sorted हा method नसून function आहे पण स्मरण असेच ठेवा — method जागेवर बदल करतो, function नवीन निकाल देतो. समान तर्क reverse आणि उलट यादी देतानाही लागू होतो.\nहे नियम लक्षात ठेवण्याचा एक सोपा मार्ग म्हणजे प्रत्येक method लिहिताना स्वतःला विचारणे: मला मूळ यादी बदलायची आहे का नवीन निकाल हवा आहे? बदल हवा तर append, remove, sort वापरा; निकाल हवा तर count, index, sorted पहा.\nप्रत्येक method ची वर्तणूक output मध्ये तपासून पहा — append नंतर यादी छापली की घटक शेवटी जोडलेला दिसतो; sort नंतर क्रमवार दिसते. जेव्हा output म्हणजे None बनते तेव्हा लक्षात येते की method मूळच करत आहे आणि नवीन निकाल परत होत नाही.\nया दोन जाती — परिवर्तन करणारे methods आणि वाचणारे methods — समजल्या की यादी हाताळताना आत्मविश्वास येतो. शैलीचे नियमही या फरकाबद्दल जागरूक राहण्यास सांगतात आणि अशी जागरूकता त्रुटींचे प्रमाण कमी करते.",
      },
      {
        title: "वास्तविक उपयोग — रांग, ढीग आणि data मार्ग",
        content: "यादीच्या methods चे वास्तविक उपयोग data structure च्या रूपात समजून घेऊया. append आणि pop या जोडीने शेवटचा घटक जोडणे आणि शेवटचा परत काढणे होते — या रचनेला stack म्हणतात. शेवटचा आत येणारा पहिला बाहेर जाणारा हा नियम programming मध्ये दाखल record मागे घेण्यासाठी वापरतात.\nरांगेसाठी पहिल्यापासून काढायचे असल्यास pop(0) किंवा सुरुवातीला घालताना insert(0, item) वापरतात. परंतु या क्रिया शेवटच्या क्रियेपेक्षा संथ असतात कारण सर्व घटक पुढे सरकवावे लागतात. मोठ्या यादीत हा फरक लक्षणीय होतो; म्हणून बरीच code collections module मधील deque चा वापर करतात.\ntrail आणि log records मध्ये append ने प्रत्येक नवीन नोंद शेवटी जाते आणि वाचणे क्रमाने होते. अशा records मध्ये remove किंवा insert क्वचित लागते — फक्त जोडणे आणि वाचणे. हा सर्वांत सोपा आणि स्वच्छ नमुना आहे.\nव्यवहारात cursor पाहणे, page प्रमाणे data वेगळे करणे, filter करून नवीन यादी बनवणे अशा कामांमध्ये methods चे संयोजन होते. उदा. एकच यादीतून झालेल्या घडामोडी काढा, उरलेल्या मागे सोडा आणि शेवटी क्रमवार जोडलेल्या शिल्लक नोंदी काढा.\nएकाच उदाहरणात अनेक methods एकत्र देण्याची सवय लावा — cart मध्ये append, अशा वेळी duplicate टाळण्यासाठी in तपासा, झालेली खरेदी remove करा आणि शेवटी शिल्लक यादी sort करा. प्रत्येक पायरीवर output बदलतो आणि तो निकाल वास्तविक कामाचे अनुकरण करतो.\nडेटा संरचनेची नावे stack आणि queue ही functional कामांमध्ये वारंवार ऐकू येतात. list चे methods वापरून या संरचना बनवता येतात हे समजल्यावर methods चा उपयोग अधिक समजतो. प्रत्येक method मुळे एक विशिष्ट क्रिया घडते — ती क्रिया कुठे वापरायची हे परिस्थिती ठरवते.",
      },
      {
        title: "प्रयोगशाळा — methods च्या प्रत्येक जोडीचे प्रयोग",
        content: "methods ची प्रयोगशाळा करूया — प्रत्येक जोडी वेगळ्या script मध्ये तपासा आणि निकाल लिहा. पहिली जोडी append आणि extend. append संपूर्ण यादी एक घटक म्हणून जोडते, extend घटक वेगवेगळे जोडतो. output मध्ये दोन्हीचा फरक लगेच दिसतो — एक nested यादी, दुसरी सपाट.\nदुसरी जोडी remove आणि pop. remove नावाने घटक काढतो आणि काही परत करत नाही; pop index ने काढतो आणि काढलेला घटक परत करतो. नाव माहीत असेल तर remove, कोणता घटक परत हवा असेल तर pop.\nतिसरी जोडी sort, reverse आणि sorted. sort मूळ यादी क्रमवार करतो, reverse उलट करतो आणि sorted नवीन क्रमवार यादी देतो. हे तीन लक्षात घेतल्यास क्रमवारीचे सर्व वापर स्पष्ट होतात.\nचौथी जोडी count, index, in. count मूल्य कितीदा आहे ही संख्या देते, index प्रथम स्थान देते आणि in मूल्य आहे का ते तपासते. तिन्ही वाचनासाठी — मूळ यादी बदलत नाही.\nपाचवी जोडी clear, copy. clear सर्व घटक रिकामे करते आणि copy नवीन स्वतंत्र यादी देते. copy ची गरज reference गोंधळ टाळण्यासाठी असते — = ने कधीही स्वतंत्र यादी मिळत नाही.\nप्रत्येक जोडीचे उदाहरण वेगळ्या script मध्ये करा आणि निकाल टिपा. एका दिवसात सर्व जोड्या प्रयोगाने केल्या की methods विसरण्याचा प्रश्नच नाही — प्रत्येकाचे वर्तन हाताने अनुभवलेले असते.\nशेवटी एकाच यादीवर अनेक methods लावून संयोजन तपासा — append, sort, remove, count एकत्र. मूळ यादीची स्थिती प्रत्येक पायरीवर छापा. असे संयुक्त प्रयोग खऱ्या program ची प्रतिकृती साधतात.",
      },
      {
        title: "मुलाखतीतील प्रश्न — methods विषयी संभाषण",
        content: "मुलाखतीत list methods चे प्रश्न नक्की येतात. पहिला प्रश्न — append आणि extend मध्ये फरक काय? उत्तर — append एक मूल्य शेवटी जोडते; extend दुसऱ्या संग्रहाचे घटक वेगवेगळे जोडते. output मध्ये दोन्हीचा आकार वेगळा दिसतो.\nदुसरा प्रश्न — remove आणि pop मध्ये फरक? उत्तर — remove मूल्य शोधून नावाने पहिली घटना काढतो; pop index ने काढतो आणि काढलेले मूल्य परत करतो. pop सह रिकामी यादी error देते.\nतिसरा प्रश्न — sort आणि sorted मध्ये फरक? उत्तर — sort मूळ यादी बदलते; sorted नवीन यादी देते आणि मूळ अपरिवर्तित ठेवते. मूळ जपायचे असेल तर sorted वापरा.\nचौथा प्रश्न — list.copy शी संबंधित. उत्तर — copy() स्वतंत्र प्रत देते, = मात्र reference. नंतर करणारे बदल मूळ दिसू नयेत म्हणून copy आवश्यक आहे.\nपाचवा प्रश्न — यादीत नसलेला item remove केल्यास काय? उत्तर — ValueError येते. आधी in ने तपासणे ही सुरक्षित सवय आहे किंवा remove प्रयत्न try/except मध्ये ठेवा.\nसहावा प्रश्न — count आणि index कशासाठी? उत्तर — count मूल्य कितीदा आहे हे आणि index कोणत्या स्थानावर प्रथम दिसते ते सांगतात. तिन्ही read-only असतात.\nसंभाषणात छोटे उदाहरण सोबत द्या — उदा. a = [2, 1, 2]; a.sort(); print(a) म्हणजे [1, 2, 2]. प्रत्येक उत्तरासोबत प्रात्यक्षिक दिले की समज पटते.",
      },
    {
        title: "सखोल अभ्यास — complexity आणि वेग निर्णय",
        content: "यादीच्या methods चा वेग महत्त्वाचा आहे कारण मोठ्या data वर चुकीचे method निवडल्यास program संथ होतो. append हा शेवटच्या जोडण्याचा method सर्वांत वेगवान आहे — मूल्य थेट शेवटच्या जागेवर बसते आणि इतर घटकांना हालचाल लागत नाही. म्हणून calendar records, logs आणि चालू नोंदी वाढवत असताना append हा प्रथम पर्याय आहे.\nयाच्या उलट insert(0, item) किंवा pop(0) हे संथ आहेत कारण प्रत्येक घटक खाली-वर सरकायला लागतो. याचा अर्थ — जर नेहमी सुरुवातीला जोडणी होत असेल आणि वजाबाकीही सुरुवातीला होत असेल तर list ही संरचना योग्य नाही. अशा कामांसाठी भाषेमध्ये collections.deque ही वैकल्पिक रचना अस्तित्वात आहे.\nsearch चा वेगही तसाच — in आणि index या यादीच्या लांबीच्या प्रमाणात चालतात कारण प्रत्येक घटक तपासावा लागतो. शेकडो नोंदींमध्ये हे ठीक आहे, पण लाखो नोंदींमध्ये तपासणी संथ होते. वारंवार शोध असेल तर set किंवा dict सारख्या वेगवान संरचना अभ्यासा — त्या हॅश नियमाने लगेच निकाल देतात.\ncount आणि len हेही वेगानुसार — len झटपट संख्या देते कारण ती रचना आतच ठेवते; count प्रत्येक घटक पाहतो म्हणून संथ. len संपूर्ण यादी गणण्यासाठी आलेले क्षण O(1) म्हणून ओळखले जातात — म्हणजे एका क्षणात उत्तर. count हा O(n) आहे — यादीच्या लांबीशी जोडलेला.\nsort चा वेग ठीक आहे — बहुतांश Python मध्ये बदल मध्ये टिमसॉर्ट नावाची सरासरी वेगवान पद्धत वापरली जाते. सामान्य आकड्यांवर हे पुरेसे आहे. खरा प्रश्न असतो तो ही — कोणता method कधी निवडावा याचा आणि त्यामुळे वेग कसा बदलतो याचा विचार.\nवेगाच्या विचारासाठी एक सवय लावा — 10 हजार पेक्षा अधिक घटक असलेल्या यादीवर प्रयोग करा. append विरुद्ध insert(0) चा तफावत output मध्ये वेळेच्या स्वरूपात दिसेल. अशा प्रयोगांनी method मागे काय चालते ते लक्षात राहते आणि योग्य निवड आपोआप होते.",
      },
      {
        title: "संग्रहीत वापर — एकत्रित प्रश्न आणि उपाय",
        content: "यादी राखताना नेहमीचे प्रश्न येतात — त्यावरील उपाय एकत्र पहा. प्रश्न एक — duplicate काढायचे असल्यास काय? उत्तर — list(set(l)) या एकाच ओळीत duplicate मिटतात; पण क्रम बिघडू शकतो म्हणून क्रम महत्त्वाचा असेल तर loop ने जपा.\nप्रश्न दोन — यादी उलट हवी असेल तर? उत्तर — reverse मूळ उलट करतो; l[::-1] नवीन उलट यादी देते. मूळ हवे असेल तर slicing वापरा, बदल करायचे असेल तर reverse — निवड परिस्थितीनुसार.\nप्रश्न तीन — दोन याद्या जोडणे — + operator ने यादी जोडली जाते: a + b म्हणजे a चे घटक मग b चे. extend मूळ सोबत घटक जोडतो. हा फरक ओळखा — + नवीन यादी, extend मूळ बदल.\nप्रश्न चार — element शोधून बदल करणे — index ने स्थान मिळवा आणि त्या स्थानावर नवीन मूल्य लिहा. उदा. i = l.index(2); l[i] = 20. अनुपलब्ध तर ValueError, म्हणून आधी in ने तपासा.\nप्रश्न पाच — सर्व घटक एकत्र करून एक string करणे असल्यास — list वर ्सट्रिंगचे साधन नाही, पण \" \".join(l) वापरले जाते जिथे घटक strings असतात. संख्या असल्यास आधी str मध्ये बदला — [str(x) for x in l].\nप्रश्न सहा — मूळ न बदलता क्रमवार नवीन यादी — sorted(l) नवीन देतो, l.sort() मूळ करतो. हे दोन्ही एकत्र वापरताना गोंधळ टाळण्यासाठी मूळ dataset राखायचा असल्यास नेहमी sorted ला प्राथमिकता द्या.\nहे सात प्रश्न रोजच्या कामात पुढे येत राहतात. प्रत्येक प्रश्नाचे उत्तर छोट्या script मध्ये लिहून output तपासा — निकाल पटल्यावरच प्रश्न मिटला माना. अशी पद्धत घेतल्यास यादी बरोबरची सर्व कामे स्वच्छ व सुरक्षित होतात.",
      },
      {
        title: "सराव कार्यशाळा — methods चे प्रकल्प",
        content: "methods ची कार्यशाळा खालील प्रकल्पांनी करा. प्रकल्प एक — ग्राहकांच्या खरेदीचा log ठेवा — प्रत्येक नवीन खरेदी append ने जोडा आणि शेवटच्या 10 नोंदी negative index ने दाखवा.\nप्रकल्प दोन — प्रश्नमंडळाची यादी — 6 उत्तरांची विद्यार्थ्यांची अचूकता count ने तपासा, मोजा आणि सरासरी काढा.\nप्रकल्प तीन — बास्केट व्यवस्था — वस्तू उपलब्ध असल्यास केवळ remove ने काढा; नसल्यास होकार तपासा. हे in तपासणीसह बंदिशीचे सुरक्षित वर्तन शिकवते.\nप्रकल्प चार — मागे-पुढे इतिहास राखणे — append ने जुन्या स्थिती जोडा आणि pop ने शेवटची परत घ्या. undo आणि redo सारखी रचना समजते.\nप्रकल्प पाच — दोनच रचनांमधील समान घटक शोधणे — गेल्या आठवड्याची व या आठवड्याची यादी तुलना करा; common घटक comments द्वारे दाखवा.\nप्रकल्प सहा — वेतन यादीतून श्रेणी तयार करणे — sort ने क्रम लावा, नंतर कट नुसार श्रेणी वेगळ्या करा. प्रत्येक श्रेणीत समान कार्यक्षेत्र दिसते.\nप्रकल्प सात — program वेळेचे log — प्रत्येक क्रियेच्या घड्याळाची नोंद strings म्हणून जोडा आणि शेवटी reverse ने नवीनतम प्रथम दाखवा.\nप्रत्येक प्रकल्प 10 ओळींपेक्षा जास्त नको — लहान रचना methods चा उपयोग स्पष्ट करतात. निकाल प्रत्येक वेळी छापा आणि अपेक्षित बरोबर तुलना करा; फरक असल्यास जागोजागी print टाकून marker काढा.",
      },
    {
        title: "अतिरिक्त अभ्यास — विशेष methods आणि वर्तन",
        content: "प्रत्येक method चे आगळे वर्तन समजून घेऊया. extend चा विशेष मुद्दा असा — तो दुसऱ्या संग्रहाचे घटक वेगवेगळे जोडतो. extend([1, 2]) म्हणजे 1 आणि 2 शेवटी; append([1, 2]) म्हणजे संपूर्ण यादी एक घटक म्हणून. output मध्ये दोन्हीची आकारशक्यं भिन्न दिसते — एक three-length दुसरी two-length.\nclear हा method सर्व घटक काढून यादी रिकामी करतो — मूळ यादी उरते; पुढील वापरास तयार. clear मध्ये मेमरी मोकळी होते पण यादीची ओळख राहते. हे उदा. session मध्ये सर्व records साफ करण्यासारखे useful असते.\ncopy मुळे जुन्या यादीची स्वतंत्र प्रत होते — mutation गोंधळ टाळण्यासाठी. लक्षात ठेवा — copy शाळा-level ची, आतील nested संरचना शेअरच राहते. खोल प्रत हवी असल्यास copy module च्या deepcopy कडे जा.\npop हा दुहेरी भूमिका निभावतो — तो घटक काढतो आणि तोच घटक परत करतो. शेवटचा काढायचा असल्यास pop() रिकामा argument; विशिष्ट स्थान हवे असल्यास pop(3). याचा उपयोग undo साठी होतो — आधीची स्थिती परत घेणे.\nremove नावाने पहिली घटना काढतो — सर्व नाही, फक्त पहिला सामना. duplicate असल्यास दुसरे जागोजागी राहतात. तिन्हीही काढायचे असल्यास नवीन यादी ने मेंटेन करा — सुरक्षित filter म्हणून.\nindex आणि count हे वाचनाचे सोबती — index स्थान, count संख्या. मूल्य आढळत नाही तर index error देते; count 0 देते. अपेक्षा पक्की आधी — 없는 value ने error सोडवण्यासाठी in तपासून मग index.\nप्रत्येक method चा प्रत्यय घ्या — स्वतः लिहिलेल्या यादीवर सर्व methods चालवा आणि प्रत्येक output ची नोंद ठेवा. वाचनाइतके नव्हे तर प्रयोगाने जाण उपलब्ध होते — हीच methods शिकण्याची खरी पद्धत.",
      },
    {
        title: "संपूर्ण सार — methods चे गाभ्याचे नियम",
        content: "methods चा धडा साराच्या रूपात आठवूया. append आणि extend शेवटी घटक जोडतात; append एक घटक, extend अनेक घटक. remove नावाने काढतो, pop index ने काढून परत देतो. sort मूळ यादी क्रमवार करतो, sorted नवीन यादी देते.\ncount मूल्य कितीदा आहे ते, index कोणत्या स्थानावर प्रथम आहे ते सांगते — दोन्ही मूळ बदलत नाहीत. copy स्वतंत्र प्रत देते प्रत = नव्हे. clear सर्व काढतो आणि यादी रिकामी ठेवतो.\nबदल करणारे methods None परत करतात; हे लक्षात ठेवले की l = l.sort() सारख्या चुका टाळता येतात. प्रत्येक method प्रत्यक्ष चालवा आणि output तपासा — प्रयोगानेच समज घट्ट राहते. पुढील धड्यांमध्ये हे आधार कायम उपयोगी पडतील.",
      },
    ],
    practiceQuestions: [
      "append आणि extend फरक?",
      "remove vs pop फरक?",
      "sort() vs sorted() फरक?",
      "5 नावे — पहिली आणि शेवटची pop करा",
    ],
    quiz: [
      {
        question: "शेवटी item जोडणे?",
        options: ["append()", "insert()", "add()", "push()"],
        correct: 0,
      },
      {
        question: "नावाने item काढणे?",
        options: ["pop()", "remove()", "delete()", "drop()"],
        correct: 1,
      },
      {
        question: "शेवटचा item काढून मिळवणे?",
        options: ["remove()", "pop()", "del", "shift()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "क्रमवार न करता list मधून सर्व 'च्या' (dup) हटवा — फक्त पहिलीच मूल्ये ठेवा. नंतर क्रमवार लावा.",
      starterCode: `nums = [3, 1, 3, 2, 1, 4]
unique = []
for n in nums:
    if n not in unique:
        unique.append(n)
unique.sort()
print(unique)`,
      expectedOutput: "[1, 2, 3, 4]",
    },
    interviewQuestions: [
      "append vs extend?",
      "remove vs pop फरक?",
      "list.copy() कशासाठी?",
    ],
    related: ["python-lists", "python-tuples", "python-list-comprehensions"],
    prev: "python-lists",
    next: "python-list-comprehensions",
  },

  {
    slug: "python-list-comprehensions",
    categoryId: "python",
    title: "List Comprehensions",
    marathiTitle: "एका ओळीत list तयार करणे",
    level: "intermediate",
    minutes: 12,
    summary: "for loop चा एका ओळीत संक्षेपक form.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "list comprehension म्हणजे काय?",
        content: "list comprehension म्हणजे नवीन list एकाच ओळीत बनवण्याची रचना — ती for loop चा संक्षेपक form आहे. सूत्र: [expression for item in iterable if condition]. expression प्रत्येक item वर चालतो, iterable म्हणजे जिथून घटक येतात आणि condition ऐच्छिक असते — असेल तर ते पास होणाऱ्या item चाच समावेश होतो.\ncomprehension चा उगम loop मध्ये आहे — loop चालतो आणि निकाल वेगळ्या यादीत जमा करतो; comprehension तोच निकाल थेट एका expression मध्ये देतो. नवीन list मिळते, मूळ iterable बदलत नाही.\nउपमा किचनमधली: मसाल्यांच्या पिशवीतील प्रत्येक पिशवी तपासा आणि निवडलेलेच मसाले नवीन पिशवीत घ्या — निवड करणे म्हणजे filter, नवीन पिशवी म्हणजे नवीन list. मूळ पिशवी (मूळ list) तशीच राहते.\nही रचना Pythonic मानली जाते — समान काम एका ओळीत, अनेकदा साध्या loop पेक्षा वेगवान. प्रत्येक उदाहरण output सोबत तपासा — output मधूनच समज पक्की होते.",
      },
      {
        title: "Syntax: expression, iterable, condition",
        content: "सूत्राचा क्रम महत्त्वाचा: आधी expression (item काय होऊन जाईल), मग for item in iterable (कुठून घटक येतात), मग, हवे असल्यास, if condition (अट शेवटी). square brackets मधील हीच रचना संपूर्ण loop सांगते.\nखालील कोडात nums वर squares = [n * n for n in nums] — प्रत्येक n चा वर्ग. evens = [n for n in nums if n % 2 == 0] — अट समाधान करणाऱ्या युग्म संख्याच.\noutput दोन ओळी: squares [1, 4, 9, 16, 25] आणि evens [2, 4]. expression मध्ये function किंवा गणित काहीही लिहिता येते.\nif असेल तरच item list मध्ये येतो; अट नसली (किंवा असली) तर expression प्रत्येक item वर चालतो. हा नियम output मध्ये तपासून समजून घ्या.",
        code: `nums = [1, 2, 3, 4, 5]
squares = [n * n for n in nums]
print(squares)

evens = [n for n in nums if n % 2 == 0]
print(evens)`,
        codeLanguage: "python",
        output: `[1, 4, 9, 16, 25]
[2, 4]`,
      },
      {
        title: "लूप प्रमाणे तुलना",
        content: "समान काम दोन रीतीने: दीर्घ मार्ग loop ने — रिकामी res यादी, for लूप प्रत्येक i वर i * 10 res मध्ये जमा करतो. comprehension एकाच ओळीत: res2 = [i * 10 for i in range(5)].\nदोन्हीपासून परिणाम सारखे — res == res2 ची तुलना True देते आणि res = [0, 10, 20, 30, 40] छापले जाते.\nloop मध्ये तीन ओळी, comprehension मध्ये एक ओळ — कोड वेळ आणि जागा वाचवतो. पण प्रत्येक ठिकाणी comprehension घालू नका — साधा loop वाचायला सोपा असतो आणि मोठा comprehension गुंतागुंतीचा होतो.\nनिवड करताना तोल ठेवा: सरळ expression साठी comprehension; अनेक पायऱ्यांच्या कामासाठी loop. दोन्ही पद्धती एकाच निकालाकडे जातात — हा फरक जाणूनच योग्य निवड करा.",
        code: `# दीर्घ मार्ग
res = []
for i in range(5):
    res.append(i * 10)

# comprehension
res2 = [i * 10 for i in range(5)]

print(res == res2, res)`,
        codeLanguage: "python",
        output: `True [0, 10, 20, 30, 40]`,
      },
      {
        title: "वास्तविक उदाहरण: किंमत दुप्पट करणे",
        content: "दुकानातील प्रत्येक वस्तूची किंमत दुप्पट करायची आहे. doubled = [p * 2 for p in prices] — prices मधील प्रत्येक p दुप्पट होऊन नवीन यादीत येतो: [20, 40, 60].\nमग उच्च किंमतीच फिल्टर करतो: high = [p for p in doubled if p > 25] — 25 पेक्षा मोठे फक्त. output [40, 60].\nexpression आणि filter दोन्ही एका ओळीत — expression आधी, condition शेवटी. मूळ किंमती बदलत नाहीत; नवीन याद्या तयार होतात.\nशेकडो वस्तूंवर हेच काम एका ओळीत होते — software मध्ये किंमत सुधारणा, report फिल्टरिंग अशी कामे comprehension ने वेगवान होतात. नवीन data घेऊन स्वतः तपासा.",
        code: `prices = [10, 20, 30]
doubled = [p * 2 for p in prices]
print(doubled)

# 25 पेक्षा मोठे फक्त
high = [p for p in doubled if p > 25]
print(high)`,
        codeLanguage: "python",
        output: `[20, 40, 60]
[40, 60]`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ क्रम उलट ठेवणे — item आधी आणि condition नंतर लिहायचा, उदा. [item for item in seq if अट]. expression आधी आणि if शेवटी ठेवण्याचा क्रम नेहमी पाळा.\n✗ condition विसरणे — जर फिल्टर हवे असेल तर if जोडायलाच हवे; विसरल्यास सर्व घटक येतात आणि चूक output मध्ये लगेच दिसते.\n✗ मूळ list बदलते का असे समजणे — comprehension नवीन list बनवते, मूळ iterable बदलत नाही. मूळ हवा असेल तर स्वतंत्र ठेवा.\n✗ नेस्टेड comprehension अती खोल करणे — loop आत loop लिहिणे काही वेळा काम करते, पण दोन तीन पेक्षा अधिक खोली गोंधळ घालते आणि वाचता येत नाही.\n✗ error आल्यावर संदेश न वाचणे — त्रुटी आली तर संदेश वाचा आणि ओळ क्रमांक पहा; expression ची चूक, अनोळखी नाव, अट चुकल्यास SyntaxError किंवा NameError येते.",
      },
      {
        title: "Readability: कधी comprehension नको",
        content: "comprehension हे साधन आहे, उद्देश नाही. जेव्हा एका ओळीत जटिल लॉजिक किंवा अनेक conditions बसवतो तेव्हा कोड वाचता येत नाही — अशा वेळी for loop वापरून काम स्पष्ट करा; वाचण्यासाठी loop नेहमी सुरक्षित.\nअनेक घटकांवर बदल, बदलत्या अटी, बहु-स्तरीय गणने असतील तर comprehension ऐवजी स्वतंत्र loop आणि res list अधिक स्वच्छ राहते. हीच readability ची तत्त्व आहे — कमी ओळी हेच सर्व काही नव्हे.\nवाचक अडचणीने कोड उलगडत असेल तर त्यासाठीची मेहनत चुकीची आहे का ते विचारा. सोपा loop सुद्ध तोच निकाल देतो — निर्णयाचा आधार नेहमी स्पष्टता असू द्या.\nनियम सहज सांगता: expression एका ओळीत स्पष्ट बसत असेल तर comprehension वापरा; अन्यथा loop. output ने नेहमी पडताळा करा.",
      },
      {
        title: "Interactive: मराठी अक्षरांवर upper",
        content: "word = \"मराठी\" हे शब्द; upper = [ch.upper() for ch in word] प्रत्येक अक्षर घेऊन upper लावते आणि नवीन यादी बनवते.\nछान निरीक्षण: मराठी अक्षरांना upper ने बदल होत नाही — कारण मराठी लिपीत छोटे-मोठे अक्षर असा भेद नाही. त्यामुळे output हेच अक्षरे वेगवेगळ्यांनी — ['म', 'र', 'ा', 'ठ', 'ी'].\nइंग्रजी अक्षरांवर हेच करून पहा — upper ने a, b, c असे A, B, C होतात. प्रतिस्थापन मूल्याचे वर्तन (uppercase/lowercase) comprehension च्या expression मध्ये कसे बसवले जाते ते इथे दिसते.\nदुसरा शब्द निवडून किंवा lower() वापरून ही रचना स्वतः तपासा. प्रत्येक वेळी output पहा — हा फेरफार शिकण्याचा मार्ग आहे.",
        code: `word = "मराठी"
upper = [ch.upper() for ch in word]
print(upper)`,
        codeLanguage: "python",
        output: `['म', 'र', 'ा', 'ठ', 'ी']`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "comprehension चे तीन भाग: expression, for loop आणि कधीकधी if. क्रम ठरलेला असतो — expression आधी, if शेवटी. हीच Pythonic रचना म्हणून ओळखली जाते.\nमूळ iterable बदलत नाही — नवीन list मिळते. filter करण्यासाठी if वापरा; condition नसेल तर प्रत्येक घटक येतो.\nप्रत्येक कोड output सोबत तपासा — आधी अपेक्षित निकाल मनात लिहा, मग output शी जुळवा. जुळले तर comprehension बरोबर आहे.\nजटिल झाल्यास वाचनीय ठेवा — साध्या loop वर तोल राखा कारण readability आधी, संक्षेपपणा नंतर. हेच धड्याचे शेवटचे शब्द.",
      },
    {
        title: "सखोल अभ्यास — comprehension syntax चे विस्तार",
        content: "comprehension ची रचना एका ओळीत for loop चा सार प्रस्तुत करते. त्याचे तीन भाग आहेत: expression, for item in iterable आणि ऐच्छिक if condition. क्रम ठरलेला आहे — expression ने सुरुवात, मग for, शेवटी if. हा क्रम उलट ठेवला तर syntax चुकतो.\nexpression हा प्रत्येक घटकावर चालणारा नियम आहे. n * n सारखे गणित, item.upper() सारखे रूपांतरण किंवा function call काहीही असू शकते. expression मध्ये variable आणि पर्यायी डेटा दोन्ही वापरता येतो.\nfor item in iterable हा घटक कुठून येतात ते सांगतो. यादी, string, range, dict.keys() — जेथे for loop चालतो तेथे comprehension चालतो. range(5) मधून 0 ते 4 असे क्रम घटक येतात.\nif condition ही ऐच्छिक अट आहे. अट असेल तर ती पास होणाऱ्या घटकांचाच समावेश होतो. अट नसेल तर प्रत्येक घटक येतो. हा filtering चा भाग होय व तो नेहमी शेवटी.\nनियम विसरण्याची भीती असल्यास स्मरण उपाय: expression → for → if हा क्रम नेहमी लक्षात ठेवणे सोपे आहे कारण तो वाचण्याच्या दिशेनेच जातो — काय बनवायचे, कुठून, कशी अट.\nfor loop आणि comprehension दोन्ही पर्याय एकत्र करून समज पक्की करा — आधी loop ने लिहा, नंतर त्याच कामाचे comprehension तयार करा. दोन्हीचा निकाल तपासून समान आला की comprehension ची मांडणी लक्षात राहते.",
      },
      {
        title: "वास्तविक उपयोग — data transform आणि filter",
        content: "comprehension चे वास्तविक उपयोग data transform आणि filter मध्ये दिसतात. गुणांच्या यादीवर प्रत्येक गुणाचे शेकडा काढणे — [m * 100 // total for m in marks] अशा एकाच ओळीत रूपांतर होते. loop विस्तार लिहिण्याची गरज राहत नाही.\nविक्रीतील 50 पेक्षा मोठ्या नोंदी निवडण्यासाठी [x for x in sales if x > 50] — हा filter चा सरळ वापर आहे. प्रत्येक x तपासला जातो आणि अट पास झालेल्यांचाच संग्रह उरतो.\nडेटा मोठ्या प्रमाणावर such as एका column चे रूपांतर, शब्दांची लांबी काढणे यासाठी comprehension सर्वांत वेगवान आहे. Python मध्ये comprehension हे पूर्ण loop पेक्षा वेगवान मानले जाते कारण आतला कार्यान्वयन साधा होतो.\nदुसऱ्या संरचनेतून — string, tuple, range मधून — नवीन यादी तयार करतानाही comprehension वापरता येते. उदा. शब्दामधील प्रत्येक अक्षराच्या आधारे यादी, किंवा range मधून सम संख्या.\nउपयोगाचे आणखी नमुने: तारखा प्रदर्शन फॉरमॅटमध्ये बदलणे, नावांमधून मोठी अक्षरे काढणे, खर्चाच्या यादीतील मोठे आकडे वेगळे करणे. हे सर्व लहान कोडने घडते — वाचणार्याला एका ओळीत हेतू दिसतो.\ndata transform आणि filter दोन्ही एकत्रही करता येतात — [x * 2 for x in nums if x > 3] या एका ओळीत प्रथम अट पास होते मग दुप्पट संख्या जमतात. अशा संयोगामुळे clean data processing एका ओळीत होते.",
      },
      {
        title: "अडचणी आणि निराकरण — comprehension चुका",
        content: "comprehension लिहताना चुका होतात; प्रत्येकाचे उपाय तयार ठेवा. पहिली चूक — क्रम उलट ठेवणे. expression आधी आणि if शेवटी हा नियम सोडल्यास syntax चुकतो. उचित क्रम लिहून मग output तपासा.\nदुसरी चूक — filter विसरणे. अट हवी असेल तर if अवश्य लिहा; विसरल्यास सर्व घटक येतात आणि निकाल चुकतो. output मधूनच चूक दिसते — अपेक्षित पेक्षा जास्त घटक असल्यास ही चूक.\nतिसरी चूक — मूळ यादी बदलते का असा गैरसमज. comprehension नवीन यादी बनवते; मूळ iterable अपरिवर्तित राहतो. याचे कारण म्हणजे नवीन संग्रह तयार होतो, जुना धरला जातो.\nचौथी चूक — nested comprehension अति खोल करणे. दोन loop आत एकसाथ वाचता येते, पण तीन-चार levels झाले की वाचन बिघडते. अशा वेळी स्पष्ट loop ने विभागणी करा.\nपाचवी चूक — expression मध्ये variable ची नावे गोंधळणे. expression मधील variable तोच असतो जो for ने देतो; नाव बदलल्यास NameError येते. नाव सातत्याने ठेवा.\nप्रत्येक चुकीचे निराकरण output तपासणीतूनच सापडते — अपेक्षित निकाल आधी मनात लिहा मग program चालवा. जुळत नसल्यास syntax पुन्हा वाचा आणि क्रम तपासा. ही पद्धत प्रत्येक संदर्भाला लागू होते.",
      },
      {
        title: "सराव — comprehension कार्ये",
        content: "comprehension ची सवय खालील कार्यांनी लावा. प्रत्येक कार्य आधी loop ने आणि मग comprehension ने लिहा — दोन्ही परिणाम सारखे येतात का ते पडताळा.\nकार्य एक — 1 ते 20 मध्ये प्रत्येक संख्येचा वर्ग नवीन यादीत ठेवा. [n * n for n in range(1, 21)] असा सरळ comprehension लिहा आणि output तपासा.\nकार्य दोन — यादीतून फक्त सम संख्यांचे वर्ग — ज्यांचा भागाकार 2 ने पूर्ण होतो. अट if ने लिहा आणि निकाल गणना करा.\nकार्य तीन — नावांच्या यादीतून 5 पेक्षा मोठी लांबी असणारी नावे गोळा करा. len(name) > 5 अशी अट द्या.\nकार्य चार — वाक्यातील प्रत्येक शब्द upper केसने नवीन यादीत ठेवा. split() ने शब्द मिळवून expression ने upper लावा.\nकार्य पाच — दोन याद्यांचा गुणाकार एका comprehension मध्ये करा — nested loop सह. दोन संग्रहांतील सर्व जोड्या एका ओळीत जमवा.\nकार्य सहा — नावांची लांबी key-value जोडीने ठेवा — {w: len(w) for w in names} असा dict comprehension तयार करा.\nशेवटी एक प्रश्न — एखादे कार्य loop ने लिहा आणि ते comprehension नेही लिहा. कोणते वाचायला सोपे वाटले ते ठरवा — निर्णय आपल्या अनुभवाकडून घ्या. हाच तोल राखण्याचा दृष्टिकोन आहे.",
      },
      {
        title: "मुलाखतीतील प्रश्न — comprehension संभाषण",
        content: "comprehension चे प्रश्न मुलाखतीत नक्की येतात. पहिला प्रश्न — comprehension म्हणजे काय? उत्तर — नवीन collection एका ओळीत तयार करणारी रचना; [expression for item in iterable if condition] अशा स्वरूपाची. ती संक्षिप्त आणि Pythonic असते.\nदुसरा प्रश्न — if कुठे लिहितो? उत्तर — शेवटी, expression आणि for नंतर. अट पास झालेल्यांचाच समावेश होतो. हा क्रम syntax चा अविभाज्य भाग असतो.\nतिसरा प्रश्न — loop पेक्षा comprehension वेगवान आहे का? उत्तर — सहसा होय; पण वाचनीयता हा खरा फायदा. जटिल कामात loop स्पष्ट असतो आणि निवड परिस्थितीनुसार करावी.\nचौथा प्रश्न — dict comprehension किंवा set comprehension शक्य आहे का? उत्तर — होय; {k: v for ...} dict आणि {x for x in ...} set बनवते. तिन्ही संरचनांना तिची स्वतःची comprehension रचना असते.\nपाचवा प्रश्न — comprehension कधी टाळावे? उत्तर — जेव्हा एका ओळीत जटिल तर्क बसतो, वाचन कठीण होते किंवा अनेक conditions असतात तेव्हा. वाचनीयता कमी असल्यास loop श्रेष्ठ असतो.\nसहावा प्रश्न — list comprehension चा निकाल कसा असतो? उत्तर — नवीन list; मूळ iterable बदलत नाही. output प्रत्येक घटकाचे सुधारित रूप असतो.\nसंभाषणात उदाहरण सांगा — [n * n for n in range(5)] म्हणजे [0, 1, 4, 9, 16]. छोटे कोड उदाहरण दिले की उत्तर अधिक विश्वासार्ह होते.",
      },
    {
        title: "विस्तार — नेस्टेड comprehension आणि condition चे कौशल्य",
        content: "comprehension ची खरी ताकद nested रचनांकडून येते. दोन याद्यांमधील प्रत्येक जोडी तयार करण्यासाठी [p * q for p in paisa for q in qty] — हा एक ओळीत दोन loop चा भूगोल आहे. क्रम महत्त्वाचा — पहिला loop बाहेरील, दुसरा आतला, जसा दोन घट्ट loop प्रत्येक जोड पाहतात.\ncondition चे एक चलन म्हणजे comprehension मध्ये आगोदर expression तयार होतो आणि नंतर अट तपासली जाते. अट चुकली तर expression चा विचारच होत नाही. एका ओळीत वाचता यायला सोपे — क्रम मानसशास्त्रज्ञ पठडीत बसते.\nवेगवेगळ्या संरचनांमधून comprehension चालतो — string मधून प्रत्येक अक्षर, range मधून संख्या, dict मधून key किंवा value, दोन संग्रहांचे cross product. प्रत्येक परिस्थितीत हा एकाच व्यवस्थापक नियमाने काम करतो.\nजर एकच output element हवा आणि अटेनुसार निवड हवी असेल तर if मध्ये else सुद्धा लिहिता येते — x if odd else x * 2 असा expression आतमध्ये. अशा वेळी expression जटिल होते पण काम acurate राहते.\nइंग्रजीत या रचनेचे generalizing — comprehension कधीच बरोबर ते ठरवा. साधे रूपांतर आणि लहान filter यासाठी योग्य, कठीण विवेचन किंवा अनेक else झाल्यास loop चा कौल घ्या. हे तोल सन्मानास उचित.\nप्रत्येक नवीन नेस्टेड प्रयोग लहान data वर करा — 3 किंवा 4 घटकांच्या दोन याद्या घेऊन जोडया छापा. असा मागोवा comprehension च्या क्रम-संबंधाची स्पष्ट जाण देतो आणि syntax चुका लवकर दिसतात.",
      },
      {
        title: "रोजच्या समस्या — comprehension ने उपाय शोधणे",
        content: "comprehension चा वापर रोजच्या समस्या सोडवण्यासाठी कसा होतो ते पहा. उदाहरण एक — एका वाक्यातील शब्दांची लांबी — [len(w) for w in sentence.split()] — प्रत्येक शब्द मोजून यादी नवीन मिळते. वाचन एका ओळीत स्पष्ट.\nउदाहरण दोन — सर्व नोंदी फॉरमॅट करणे — अहवालात प्रत्येक कार्याला इंडेक्स, शीर्षक, दुवा असे स्वरूप देणे comprehension मध्ये घडते. प्रत्येक धारणा रूपांतर intraवर.\nउदाहरण तीन — data policy लागू करणे — प्रत्येक खरेदीवर करंट जोडा किंवा घटकाची किंमत परत — [price * 1.05 for price in prices] असे एका ओळीत रूपांतर. decimalacc forever round असे उदा. round(x, 2) expression मध्ये जोडता येते.\nउदाहरण चार — filter ने मोठी नोंद शोधणे — 100 च्या वर किंमत असणाऱ्या वस्तू — [item for item in items if price(item) > 100]. हे average शेकडा किंवा soldout अशा label ला अंकित करतांना उपयोगी आहे.\nउदाहरण पाच — रिकामे किंवा दुरुस्त data — None किंवा empty string वगळून संध्यात onlyकेल्या येणाऱ्या नोंदी — [x for x in raw if x]. हे प्रणालीfrac data सुरक्षित करते ज्यात प्रत्येक नोंद महत्त्वाची असते.\nउदाहरण सहा — परिमाणे मोजणे — वर्षांमधील मोठ्या विक्रीची संख्या sum किंवा len सह जोडा — बेरीज सह लेन काढून अर्थ निघतो. comprehensions ने केवळ यादी नव्हे तर विश्लेषणाचा विस्तारही साधला जातो.\nप्रत्येक उदाहरण स्वतः टाइप करा आणि output तपासा — अपेक्षित आकडे आधी लिहा. ही सवय रोजच्या data च्या समस्या हाताळताना compression चा वापर अस्खलित करते.",
      },
      {
        title: "मुलाखतीतील खोल प्रश्न — comprehension ची परीक्षा",
        content: "मुलाखतीत comprehension चे खोल प्रश्न येतात — त्यांची उत्तरे तयार करूया. प्रश्न — एका comprehension मध्ये दोन for कसे चालतात? उत्तर — क्रमवार; पहिला outer मग inner. पहिल्या घटकासाठी दुस-याची प्रत्येक जोडी तपासली जाते; मग पुढचा outer.\nप्रश्न — if आधी ठेवता येते का? उत्तर — expression मध्ये ternary if शक्य आहे; पण filter as if शेवटीच. दोन्ही measures वेगळे — समावेशाची अट शेवटची, रूपांतर conditional expression आत.\nप्रश्न — comprehension वि generator expression फरक? उत्तर — comprehension नवीन यादी लगेच बनवते; generator expression (parenth) मागे लपेटणारी रचना — लगेच न बनवता घटक वर प्रतीच देते — memory कमी वापरते.\nप्रश्न — comprehensions ने मूळ संग्रह बदलतो का? उत्तर — नाही; मूळ तसाच राहतो. नवीन यादी तयार होते. जर मूळ बदलायचे असेल तर assignment नव्याला जुने लिहा — l = [x for x in l].\nप्रश्न — performance कसा? उत्तर — सामान्य loop पेक्षा ती वेगवान दिसते कारण आतला built-in mechanism. पण प्रत्येक वेगाचा ध्यास घेऊ नका — वाचनीयता नियम श्रेष्ठ. मोठा data الخ learning dict comprehension ची लक्षात घ्या.\nप्रश्न — गरज न होता comprehension वापरणे? उत्तर — टाळा; जर नवीन संग्रहच हवा नसेल किंवा तर्क क्लिष्ट असेल तर सरळ loop श्रेष्ठ. comprehension हा साधन आहे — जिथे योग्य तिथेच वापरा.\nही उत्तरे लक्षात घेतल्यास मुलाखतीतील comprehension चे भाग पक्के होतात. प्रत्येक उत्तराबरोबर लहान कोड उदाहरण सांगण्याची सवय ठेवा — examiner ला स्पष्ट समजते.",
      },
    {
        title: "चुका शोधून काढा — comprehension debugging",
        content: "comprehension लिहताना output ठीक नसल्यास debugging ची पद्धत ठरवा. पहिली पायरी — loop व स्वतंत्र result जमवून चालवा; जर loop योग्य असेल तर syntax ची चूक comprehension मध्ये असते — दोन्ही तुलना करून फरक दिसतो.\nduplicate loop चे वर्तन समजून घ्या — जर comprehension मध्ये una dared नाव चुकले तर NameError येतो. expression मधील variable for ने मिळालेला असतो; बाहेरच्या वर प्रती चुकीच्या ठरतात.\nअट चुकीची असेल तर उलट निकाल दिसतो — जास्त घटक आले तर if दुर्लक्षित, कमी आले तर अट अति कठोर. नमुना data वर अपेक्षित संख्या मोजा आणि तुलना करा.\nstring किंवा number प्रकारातील गोंधळ — expression जर number बदलून string करत असेल तर वृत्ती बिघडते. प्रकार जाणून घेण्यासाठी प्रत्येक घटकाचा type छापून तपासा — debugging मध्ये सर्वात सोपा मार्ग.\nस्लाइस सारख्या अचुक क्रिया वेगळ्या loop मध्ये लिहा — comprehension ची एका ओळीत गर्दी कमी करा. मग प्रत्येक तुकडा स्वतंत्रपणे तपासा — चूक कोणत्या भागात आहे ते लवकर ओळखता येते.\nप्रत्येक debugging ची सवय — एकाच ओळीत बदल न करता पहिल्यांदा output लहान data ने घ्या: 3-4 घटकच पुरेसे. मोठा data काम सुचलेल्या वेलीला तपासणे dumping करते — जेव्हा सुटकेसार आकार लहान असतो तेव्हा ट्रॅक ठेवणे सोपे होते.",
      },
      {
        title: "संपूर्ण सार — comprehension चे गाभ्याचे नियम",
        content: "comprehension चा संपूर्ण सार आता एकत्र गुंफूया. रचना — [expression for item in iterable if condition] — expression ने सुरुवात, for मध्ये, if शेवटी. एका ओळीत नवीन संग्रह तयार होतो आणि मूळ iterable अपरिवर्तित राहतो.\nfor पाठोपाठ दुसरा for nested loop स्मृतीची जोड — पहिला बाहेरील, दुसरा आतील. if मध्ये else असल्यास expression lactates ternary — परंतु स्वतंत्र filter if शेवटीच.\ndict, set, generator या तिन्ही संरचनांनाही comprehension असतात — प्रत्येकाची अंगभूत रचना आपलीच. जागते नमुने — {k: v for ...} dict, {x for x in ...} set, (x for x in ...) generator.\nवापर कुठे — लहान रूपांतर, filter, लवकर नवीन यादी. टाळा — जटिल तर्क, अनेक अटी, गरजेचा कोड — अशा ठिकाणी loop अधिक वाचनीय असतो. निर्णयाची कसोटी वाचनीयता आणि हेतूस्पष्टता.\nसरावाची यादी — वर्ग, सम किंवा विषम संख्या, शब्दांची लांबी, filter, nested जोडया — प्रत्येक प्रकार किमान एकदा स्वतः लिहा. प्रत्येक output अपेक्षितपेक्षा जुळतो हे तपासा.\nशेवटी एक सल्ला — comprehension हे शक्तिशाली साधन आहे पण अति वापर घातक. जेव्हा वाचकाला एका ओळीत हेतू दिसतो तेव्हा ते सर्वोत्तम; जेव्हा गोंधळ होतो तेव्हा loop परत घ्या. हे संतुलन पक्के केल्यास comprehension चा वापर नेहमी फायद्याचा राहतो.",
      },
    {
        title: "पुनरावृत्ती — comprehension स्मृती",
        content: "comprehension च्या स्मृतींचा सार — expression, for, if हा क्रम लक्षात ठेवा. अनेक जण क्रम उलट विसरतात; हीच सर्वांत मोठी चूक असते. प्रत्येक वेळी output तपासा आणि लहान data ने सराव करा.\nmूळ iterable बदलत नाही हे नियम विसरू नका — नवीन संग्रहच उद्देश आहे. क्रमपरंपरा — nested for मध्ये बाहेरीलचा loop आधी. हे स्मृती राखून ठेवता आल्यास comprehension सहज लिहिता येते.",
      },
    ],
    practiceQuestions: [
      "comprehension चा syntax?",
      "if कुठे लिहितात?",
      "1-10 मधले squares नवीन list मध्ये काढा",
      "खालच्या वयाची list filter करा [x for x in ages if x >= 18]",
    ],
    quiz: [
      {
        question: "comprehension मध्ये if कोठे?",
        options: ["सुरुवातीला", "शेवटी", "मध्ये", "नाहीच"],
        correct: 1,
      },
      {
        question: "[n*2 for n in range(4)] किंमत?",
        options: ["[0,2,4,6]", "[1,2,3,4]", "[2,4,6]", "[0,1,2,3]"],
        correct: 0,
      },
      {
        question: "comprehension नवीन काय तयार होतं?",
        options: ["tuple", "list", "dict", "set"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "1 ते 30 मधले फक्त 3 ने भाग जाणारे संख्या squares सह तयार करा.",
      starterCode: `result = [x * x for x in range(1, 31) if x % 3 == 0]
print(result)`,
      expectedOutput: "[9, 36, 81, 144, 225, 324, 441, 576, 729, 900]",
    },
    interviewQuestions: [
      "comprehension कधी टाळावं?",
      "expression+loop+if structure सांगा?",
      "dict comprehension शक्य का?",
    ],
    related: ["python-lists", "python-lambda", "python-list-methods"],
    prev: "python-list-methods",
    next: "python-tuples",
  },

  {
    slug: "python-tuples",
    categoryId: "python",
    title: "Tuples",
    marathiTitle: "Tuples — बदल न होणारी list",
    level: "intermediate",
    minutes: 12,
    summary: "Tuple immutable collection — list सारखी पण बदलता येत नाही.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "tuple म्हणजे काय?",
        content: "tuple ही list सारखीच ordered collection आहे — अनेक values एकत्र ठेवते आणि प्रत्येक value ला क्रम असतो. पहिला आणि मुख्य फरक हाच: tuple immutable आहे — तिचे items बदलता येत नाहीत. कंस () मध्ये लिहितात — ती = (1, 2, 3) किंवा t = (\"प्रिया\", 25), मूल्ये comma ने वेगळी करतात.\nहेच तत्त्व वास्तविक जीवनात दिसते: जन्मतारीख कधी बदलत नाही, नोंदणी क्रमांक, आधार क्रमांक, पेन्शन योजना — अपरिवर्तनीय माहिती. पत्ता बदलता येतो (list), पण जन्मतारीख नाही (tuple). स्थिरता = tuple, अस्थिरता = list.\nइम्युटेबिलिटीचे फायदे: असे data सुरक्षित राहतो — कधीही बदलणार नाही. गणना वेगाने होते आणि memory कमी लागते, कारण रचना स्थिर असते. पण बदल हवा असल्यास list वापरा — दोन्ही कशासाठी हे ठरवणे हाच या धड्याचा गाभा.\nतुमची ID ची बाब, शाळेचा दाखला, सील बंद कळस — अशी स्थिर नोंद म्हणजेच tuple ची प्रतिमा. सुरक्षित data ला हीच युक्ती योग्य.",
      },
      {
        title: "Syntax: कंस, single-item, index, unpacking",
        content: "tuple अशी लिहितात: t = (1, 2, 3). एकाच item ची tuple हवी असेल तर comma अपरिहार्य आहे — t = (5,); comma चुकल्यास मूल्यांकन int होते (type((5)) <class 'int'>). रिकामी tuple () लिहितात.\nindex ने मूल्ये मिळतात — point[0] म्हणजे 3. unpacking ही खास सवय: name, age = (\"प्रिया\", 25) म्हणजे पहिले मूल्य name ला आणि दुसरे age ला जाते.\nखालील कोड चालवल्यास आधी point[0] = 3, मग संपूर्ण tuple (3, 5), शेवटी unpacking नंतरचे प्रिया 25 — असे तीन निकाल दिसतात.\nकंसात गुठी म्हणजे tuple — index ने position, unpacking ने नावे ही तिची दोन शस्त्रे. structured data (जसे coordinates, config) साठी हीच रचना.",
        code: `point = (3, 5)
print(point[0])
print(point)

name, age = ("प्रिया", 25)   # unpacking
print(name, age)`,
        codeLanguage: "python",
        output: `3
(3, 5)
प्रिया 25`,
      },
      {
        title: "immutable — बदल शक्य नाही",
        content: "t[0] = 9 असे करण्याचा प्रयत्न केला तर TypeError: 'tuple' object does not support item assignment येतो. ही मर्यादा हीच तिची सुरक्षा — एकदा ठेवलेले बदलता येत नाही, सुरक्षित डेपॉझिट सारखे.\nconfig = (\"localhost\", 3000) अशी settings tuple मध्ये ठेवली तर host आणि port कायम स्थिर राहतात — कुणी चुकून बदलू शकत नाही. संगणक तपासणी करताना हीच हमी मिळते.\nx, y = 10, 20 हे unpacking; print(x, y) मध्ये 10 20 दिसते. tuple चे मूल्य वाचणे वेगवान; बदल करणे अशक्य.\nबदल करायचा असेल तर तीच data नवीन tuple करून ठेवा — पण मग त्रासाचे. ही मर्यादा स्वीकारली, तर सुरक्षितता दुहेरी मिळते. बदल हवा असल्यास list वापरा.",
        code: `config = ("localhost", 3000)   # host, port
# config[0] = "x" → TypeError

x, y = 10, 20
print(x, y)`,
        codeLanguage: "python",
        output: `10 20`,
      },
      {
        title: "tuple विरुद्ध list: कधी कोणते?",
        content: "दोन्ही ordered collections आहेत; फरक एकटाच — mutable vs immutable. list मध्ये append/remove/badl करता येते; tuple मध्ये नाही.\nबदल हवा (याद्या, छान data, records जमा होत असतील) — list वापरा. बदल नको (config, नोंदणी, coordinates, function चे निकाल) — tuple वापरा.\ntuple कडून गणना वेगाने होते कारण रचना स्थिर; list कडून लवचिकता मिळते. याच वेळी tuple ही hashable आहे — पुढील धड्यांत set मध्ये item म्हणून आणि dict चा key म्हणून वापरता येणारी ही खासियत आहे (list ही नाही).\nअनुभवाने निवडतील: कायमस्वरूपी, वाचण्यासाठी data = tuple; वाढणारा, बदलणारा data = list. कोडमध्ये हेतू इतकाच स्पष्ट होतो — वाचकाला कळते की हे बदलण्यासारखे नाही.",
      },
      {
        title: "वास्तविक उदाहरण: function मधून अनेक निकाल",
        content: "function एकाच वेळी अनेक मूल्ये परत करू शकते — return (min(nums), max(nums)) असे tuple ने. min_max function या एका call मध्ये किमान आणि कमाल दोन्ही देते.\nlow, high = min_max([4, 9, 1, 7]) unpacking ने पहिले निकाल low मध्ये आणि दुसरे high मध्ये. output: छोटी: 1, मोठी: 9.\nयेथे tuple चा मुख्य वापर उघड होतो — function कडून एकाच वेळी अनेक निकाल क्रमाने परत करायचे असतील तर tuple ही रचना सर्वमान्य. unpacking ने प्रत्येकाला वेगळे नाव मिळते.\nहीच देवाणघेवाण व्यवसायातही वापरली जाते — किंमत आणि वस्तू, नाव आणि वय, तापमानmin/max असे जोडलेले निकाल tuple मध्ये सुबक बसतात.",
        code: `def min_max(nums):
    return (min(nums), max(nums))

low, high = min_max([4, 9, 1, 7])
print(f"छोटी: {low}, मोठी: {high}")`,
        codeLanguage: "python",
        output: `छोटी: 1, मोठी: 9`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ single tuple मध्ये comma विसरणे — t = (5) लिहिल्यास ते tuple नाही, उगाच int होते (type int). एक item ची tuple हवी तर comma हवा: t = (5,). output किंवा type() ने तपासा.\n✗ tuple बदलण्याचा प्रयत्न — t[0] = 9 करताच TypeError येते. ही मर्यादा अपेक्षित आहे; बदल हवा असेल तर list वापरा किंवा नवीन tuple बनवा.\n✗ empty आणि single गोंधळणे — () रिकामी tuple; (5,) एक item ची tuple; कंसाचा फरक ओळखा. कंस असेल पण comma नाही तर tupleच नाही.\n✗ unpacking मूल्यांची संख्या जुळवणे — name, age = (\"प्रिया\", 25, \"कोल्हापूर\") केल्यास आधी खूप मूल्ये असल्याने ValueError: too many values to unpack येतो. नावांची संख्या tuple च्या मूल्यांशी जुळवा.\nचुकांची हीच रणनीती — comma चे महत्त्व, कंसाचा प्रकार, unpacking ची संख्या — तिन्ही तपासणे. चुका कमी केल्या तर मागील सवय घट्ट होते.",
      },
      {
        title: "Interactive: swap — मूल्ये बदलणे",
        content: "swap म्हणजे दोन variables ची मूल्ये आपसात बदलणे. tuple मुळे हे एकाच ओळीत होते: a, b = b, a. Python आधी उजवीकडील tuple (b, a) बनवते आणि मग unpacking ने a ला जुने b आणि b ला जुने a देते.\nखालील कोडात a = \"पहिला\" आणि b = \"दुसरा\"; swap नंतर a = \"दुसरा\" आणि b = \"पहिला\". output: दुसरा पहिला.\nपरंपरागत language मध्ये swap साठी तिसरा temporary variable लागतो; tuple unpacking ने तोच काम एका ओळीत. हीच tuple ची व्यावहारिक भेट आहे.\nस्वतः नवीन मूल्ये घेऊन (उदा. संख्या किंवा नावे) हा swap करून पहा — output उलट दिसेल आणि unpacking चा अर्थ पक्का होईल.",
        code: `a = "पहिला"
b = "दुसरा"
a, b = b, a
print(a, b)`,
        codeLanguage: "python",
        output: `दुसरा पहिला`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "tuple immutable असल्याने सुरक्षित आणि hashable आहे — म्हणून ती set मध्ये item म्हणून आणि dict चा key म्हणून वापरता येते (list नाही). हे उपयोग पुढील धड्यांत प्रत्यक्ष दिसतील.\ntuple unpacking सहज साधते — name, age = (\"प्रिया\", 25) सारखी नावे त्वरित मिळतात; function कडून multiple return (min, max) सारखे निकाल क्रमाने मिळतात.\nlist पेक्षा tuple lightweight — कमी memory आणि जलद access. config, coordinates, records सारखे कायमस्वरूपी data साठी ही रचना योग्य.\nimmutable म्हणजे हमी — कोडमध्ये tuple दिसली की वाचकाला कळते की हे data बदलणार नाही. अशी स्पष्टता कोड वाचनीय आणि bug-कमी बनवते.",
      },
    {
        title: "सखोल अभ्यास — immutable चा खरा अर्थ",
        content: "tuple च्या immutable गुणधर्माचा खरा अर्थ चातुर्मासिक समजून घेऊया. immutable म्हणजे जड — जागेवर element बदलता येत नाही. t[0] = 5 लिहिले तर TypeError येतो; ही यादीपेक्षा tuple चा सर्वांत मोठा फरक आहे. यादीत जागेवर बदल होतो, tuple मध्ये होत नाही.\nपरंतु immutable असली तरी tuple मधील output वाचता येते — t[0], t[1:] असे indexing आणि slicing पूर्ण काम करतात. नंतर त्याउलट संपूर्ण tuple नवीन बनवता येते, पण जुनी रचना बदलता येत नाही. बदलायचे असेल तर ती प्रतिकृती म्हणून नवीन tuple लिहा.\nयाचा खोल अर्थ — tuple वर विश्वास ठेवता येतो; कोणताही function तिला पाठवली तरी तिच्या आतचा डेटा बदलला जाणार नाही. यादी function मध्ये बदलता येते (reference जाते), पण tuple अपरिवर्तित राहते — ही सुरक्षितता प्रमाण data राखण्यासाठी अत्यंत महत्त्वाची असते.\nhashable हा या गुणधर्मातून येणारा फायदा — tuple dict key म्हणून वापरता येते कारण तिचे मूल्य बदलत नाही. रचना जर बदलली जाऊ शकत नाही तर त्याचवर आधारित गणित विश्वासार्ह राहते. यादी अशा प्रकारे key होऊ शकत नाही.\nmemory च्या दृष्टीने tuple हलकी असते — same आकाराच्या यादीपेक्षा तिला कमी जागा लागते. हा फरक मोठ्या प्रमाणात data ठेवताना लक्षात येतो. हजारो entries मध्ये ही बचत वास्तविक ठरते.\nheले रोजचा वापर — जेव्हा मूल्ये स्थिर छोट्या संग्रहात ठेवायची असतात — coordinates (x, y), रंग (r, g, b), तारीख-वेळ म्हणून तीन आकडे — तेव्हा tuple नैसर्गिक निवड आहे.\nयादी विरुद्ध tuple निवडीचा नियम सोपा — data बदलत असेल तर यादी, data स्थिर असेल किंवा key म्हणून चालणार असेल तर tuple. हा नियम लक्षात धरून निवड केल्यास कोड स्वच्छ राहतो.",
      },
      {
        title: "unpacking — सर्वांत सुंदर tuple कला",
        content: "tuple ची सर्वांत जादुई कला म्हणजे unpacking — एकाच ओळीत अनेक variable ना मूल्ये देणे. a, b = (3, 5) असे लिहिताच a ला 3 आणि b ला 5 मिळते. हीच रचना asvांतर च्या आधी function ने परत केलेली जोडी वेगळ्या variable मध्ये उलगडण्यासाठी वापरली जाते.\nunpacking चे सर्वात सामान्य रूप function ने दोन मूल्ये परत करणे — def min_max(x): return min(x), max(x) — नंतर low, high = min_max(data). ही रचना एकाच क्षणी अनेक निकाल हाती येण्याची स्वच्छ पद्धत आहे.\nदोन variable ची अदलाबदल — a, b = b, a ही tuple unpacking ची सुप्रसिद्ध क्रिया — तिसऱ्या variable शिवाय दोन मूल्ये अदलाबदल होतात. याचे गुपित म्हणजे उजवी बाजू आधी tuple म्हणून तयार होते, मग उलगडते.\n*star द्वारे remainder घेता येते — first, *rest = t असे केल्यास first ला पहिला घटक आणि rest ला उर्वरित यादी. वेगवेगळ्या आकाराच्या tuple विस्तारताना ही रचना उपयुक्त आहे.\nunpacking मधील गुंतवणूक — जितके variable तितके घटक हवे. उदा. t मध्ये 3 घटक आणि आपण 4 variable दिले तर ValueError येते — जास्तीचे variable किंवा कमी घटक. यामुळे नियम जपणे भाग असते.\nforsed ने अनेक entries unpacking — for x, y in points: हा loop points यादीतील प्रत्येक tuple उलगडतो. नेस्टेड रचनांमध्ये हीच सवय सर्वत्र वापरली जाते.\nअसे सुंदर unpacking छोट्या code ने इच्छित निकाल मिळवते — अनेक temporary variable टाळले जातात आणि हेतू स्पष्ट राहतो. unpacking ही Python ची विशिष्ट टवळजमणी मानली जाते; साधा अभ्यास केल्यास मजा देते.",
      },
      {
        title: "उपयोगाचे परिदृश्य — tuple कधी निवडाल?",
        content: "tuple कधी वापरावी हे परिस्थिती ठरवते. प्रथम कारण — data स्थिर असल्यास. ठेवत असलेली record मध्ये बदल होणारा नाही असे ठरल्यास tuple हा सुरक्षित साठा आहे; चुकून बदल होण्याची शक्यताच नाही राहत habilta.\ndict key म्हणून — tuple हे hashable असल्याने ती वापरता येते — उदा. (city, pincode) ही जोडी key म्हणून ठेवता येते. यादी या स्थितीत चालत नाही; म्हणून संमिश्र key साठी tuple एकमेव पर्याय ठरते.\nfunction चे arugment — स्थिर रचना पाठवताना tuple हा सोयीचा पर्याय — खात्री दिली जाते की function मध्ये त्याचा आकार व वस्तू बदलणार नाहीत. ही सुरक्षितता मोठ्या code बेसमध्ये मोलाची ठरते.\nमागणी memory — लाखो entries मध्ये tuple चा अल्प आकार आणि कमी झगमग लाभदायक होतो. data विश्लेषणात स्थिर रचना साठवताना ही निवड कार्यक्षमता वाढवते.\nतारीख-वेळ, ठिकाण, रंग — यासारख्या तीन-चार घटकांच्या जोड्या tuple मध्ये ठेवल्या जातात. जास्तीची लेबले किंवा method गुंतवणूक नको — साधी, स्पष्ट रचना हवी तेव्हा tuple.\nबरोबरीच काय — दोन tuples तुलना क्रमवार होते. (3, 1) आणि (2, 9) या तुलनेत पहिला घटक कसा ठरतो — पहिल्याचा निर्णय बहुतांश वेळा क्रियाशील असतो. यामुळे क्रमवार sorting मध्ये tuple natural असते.\nतिसरे उदाहरण — account moves जसे data record मध्ये tuple म्हणून rows ठेवणे. या rows वर unpacking, sorting, विशिष्ट क्षेत्र वाचन या সব साधने सुलभतेने लागतात.",
      },
      {
        title: "अडचणी आणि सापळे — tuple बरोबर चुका",
        content: "tuple च्या नेहमीच्या अडचणी ओळखूया. सर्वांत मोठी चूक — a tuple बनवताना x = (3) असे लिहिणे. ही tuple नाही — फक्त number 3! एकल घटकाच्या tuple साठी अपवाद असतो — x = (3,) म्हणजे एक घटकाची tuple. स्वल्पविराम नियम लक्षात ठेवा.\nदुसरी चूक — tuple मध्ये बदल करण्याचा प्रयत्न — t[0] = 5 मुळे TypeError येते. चुकीचा अंदाज — tuple जागेवर सुधारता येते असे वाटणे. खरं तर ती immutable — सुधारणा नवीन tuple बनवूनच शकते.\nतिसरी चूक — generator assembly — t = (x for x in range(5)) ही tuple नव्हे, generator expression आहे! हे निरीक्षण tuple कशाची बनली हे गोंधळात टाकते. खरी tuple brackets न ठेवता स्वल्पविरामानेही बनते — 1, 2, 3.\nचौथा सापळा — function return गोंधळ — अनेक मूल्ये परत केली तर ती tuple मध्ये जातात हे विसरून एकच मूल्य समजणे. return a, b म्हणजे tuple परत होते — समोर unpack करणे अवश्य.\nपाचवा मुद्दा — mutation च्या आतल्या रचनेबद्दल — tuple मध्ये यादी असेल तर ती यादी बदलता येते (immutable फक्त बाहेरचा घटक). t = (1, [2]) मध्ये t[1].append(3) शक्य — याचा धडा — immutable वर गुंतवणूक करताना आतील mutable लक्षात ठेवा.\nसहावा सापळा — t[::-1] उलट क्रम देते पण नवीन tuple — यादीप्रमाणेच slicing विस्तार येथेही कार्य करते. reverse method नसते; उलटा क्रम slicing ने मिळतो.\nह्या अडचणी समजल्या की tuple चा वापर सुरक्षित होतो — प्रत्येक चुकीचे उदाहरण output मध्ये तपासा आणि बरोबर रचना लक्षात घेऊन कोड लिहा.",
      },
      {
        title: "सराव — tuple कार्ये",
        content: "tuple ची सवय खालील कार्यांनी लावा. कार्य एक — तीन नगरांची समन्वये (city, latitude, longitude) tuple मध्ये ठेवा आणि प्रत्येकाची अक्षांश unpacking ने छापा.\nकार्य दोन — एकल घटकाची tuple बनवा — (5,) — आणि दुसरी 5 ला तुलना करा. type() ने फरक दाखवा — पहिली tuple, दुसरी संख्या.\nकार्य तीन — function लिहा जी यादीतला सर्वात मोठा आणि लहान घटक tuple मध्ये परत करते; नंतर unpacking ने दोन्ही variable मध्ये घ्या.\nकार्य चार — points यादीतील प्रत्येक (x, y) जोडी unpack करून X-अक्षावर मोजा — for x, y in points असा loop वापरा.\nकार्य पाच — nested tuple unpack — t = (1, (2, 3)) चे आतील घटक वेगळे variable मध्ये घ्या — a, (b, c) = t रचना तपासा.\nकार्य सहा — tuple मध्ये घटक बदलण्याचा प्रयत्न करा — प्रत्येक प्रयत्न TypeError देतो हे अनुभवा; नंतर योग्य संग्रह सुधारणेसाठी list मध्ये रूपांतर करून परत tuple करा.\nकार्य सात — तीन शहरांच्या नावांच्या tuples द्वारा एकत्र जुळवा — साम्य संच शोधा — tuple वर set conversion करून duplicate टाळा.\nप्रत्येक कार्य output सोबत करा; चुकीचे कार्य म्हणजे शिकण्याची संधी — समजून घ्या आणि पुढील कार्य करा. अशा कार्यांनी tuple नियम आपल्या हातात येतात.",
      },
      {
        title: "मुलाखतीतील प्रश्न — tuple संभाषण",
        content: "tuple चे मुलाखतीतील प्रश्न असे विचारले जातात. पहिला — list आणि tuple मध्ये फरक काय? उत्तर — list mutable (बदलता येते) आणि tuple immutable (बदलत नाही). यादी जागेवर घटक बदलते; tuple जागेवर बदलत नाही — फक्त नवीन बनते.\nदुसरा — tuple म्हणजे immutable असूनही आत यादी ठेवता येते का? उत्तर — होय; बाहेरची रचना स्थिर राहते पण आतील यादी mutable. उदा. t = (1, [2]) मध्ये t[1].append(3) चालते.\nतिसरा — tuple key का बनते dict मध्ये? उत्तर — ती hashable असते कारण immutable; मूल्य बदलत नसल्याने गणित विश्वासार्ह राहते. यादी hashable नाही म्हणून key होत नाही.\nचौथा — memory मध्ये tuple छोटी का? उत्तर — निश्चित आकार; अतिरिक्त ओझे नाही आणि structure lightweight. लाखो committed data ठेवताना ही बचत महत्त्वाची ठरते.\nपाचवा — एकल tuple ची निर्मिती कशी? उत्तर — (5,) या स्वरूपात — स्वल्पविराम आवश्यक. (5) ही फक्त संख्या; स्वल्पविराम अपवाद जपला तर tuple तयार होते.\nसहावा — function ने अनेक मूल्ये परत केल्यावर काय होते? उत्तर — ती एकाच tuple मध्ये आवरतात आणि unpacking ने वेगळी होतात. hi design Python मधील अनेक परत कराण्याची अॅवजi उपाय यांचे श्रेय tuple ला जाते.\nतसेच संभाषणात छोटे उदाहरण द्या — t = (1, 2, 3); a, b, c = t. याचा अर्थ नक्की सांगा — अशा एका साध्या प्रात्यक्षिकाने समज पटते.",
      },
    {
        title: "विस्तार — namedtuple आणि आधुनिक रचना",
        content: "tuple च्या पुढच्या आधुनिक पातळीत येऊया — namedtuple. हा collections मधील विशेष प्रकार आहे जो tuple ला मैत्रीपूर्ण नावे देतो: Point = namedtuple('Point', ['x', 'y']) नंतर p = Point(3, 5) — मग p.x आणि p.y ने घटक वाचता येतात. tuple च्या सर्व गुणधर्मांसोबत वाचणायास सोपी लेबले येतात.\nnamedtuple चा खोल फायदा — स्थिर रचना dictionary प्रमाणे स्पष्ट, पण tuple प्रमाणे हलकी आणि immutable. entries — (अक्षांश, रेखांश) मध्ये key वा लेबले संभ्रम दूर करतात. जटिल data record तयार करताना namedtuple अत्यंत उपयुक्त ठरते.\nत्याचप्रमाणे tuple वर सादर असणारे नियमच येथे लागतात — unpacking, slicing, तुलना, hashable गुणधर्म. namedtuple मध्ये extra method _asdict() सुद्धा आहे जी dict मध्ये रूपांतर करते — रिपोर्ट तयार करताना सोयीचे.\nआधुनिक पर्याय म्हणून dataclass ही अधिक सुसंगत संरचना आहे — वाढत्या जटिलतेसाठी. पण tuple आणि namedtuple अजूनही सरळ data जोड्यांसाठी कायम राहतात — त्यांची साधेपणा कोणतीही गुंतवणूक नको असेल तेव्हा श्रेष्ठ ठरते.\nहे नवीन शस्त्रे वापरण्याआधी मूलभूत tuple मध्ये प्रभुत्व असणे अपरिहार्य — namedtuple च्या वरचे सर्व tuple rules तिच्यावर apply होतात. स्थिर रचना स्पष्टतेला प्राधान्य असताना namedtuple आपली पहिली देवाणघेवाण.\nतरीही साधे उदाहरण — पत्ता records — असे जटिल डेटा namedtuple मध्ये ठेवल्यास वाचनीयता मोठ्या प्रमाणात वाढते. प्रत्येक घटकाला नाव दिल्यावर कोड आतील गोंधळ मिटतो आणि त्रुटींच्या संभावना घटतात.",
      },
      {
        title: "मिश्रण — tuple आणि इतर संरचना एकत्र",
        content: "tuple इतर संरचनांबरोबर मिसळून कशी वापरली जाते ते पहा. tuple ची यादी — coordinates list — दिले सेटेलाइट data ठरवित. [ (2, 3), (5, 1), (4, 4) ] — ही आत जटिल रचना unpacking आणि loop सोबत सर्वत्र वापरली जाते.\nयादी मध्ये tuple — आणि tuple मध्ये यादी — दोन्ही दिशांना रचना जुळतात. नेस्टेड रचनेवर unpacking, indexing, slicing — सर्व नियम लागू; फक्त आतील immutable चे नियम लक्षात घेणे अवश्य.\ndict मध्ये tuple key — (क्र, क्षेत्र) सारखी संयुक्त ओळख key म्हणून ठेवता येते. मूल्य मग लिस्ट किंवा इतर डेटा असू शकते. अशा रचनेत त्वरित शोध आणि क्रमबद्धता मिळते.\nfunction return — बहुतेक Python built-ins tuple परत करतात — उदा. dict.items() दरम्यान असलेल्या (key, value) जोड्या. या जोड्या function मध्ये unpacking ने वाचल्या जातात.\nenumerate आणि zip सारखी साधने देखील tuple उत्पादन करतात — enumerate return (index, item) जोड्या; zip वेगवेगळ्या संग्रहांच्या जोड्या पुढे आणते. या सर्वructuring रचना tuple चे नियम वापरतात.\nsum, sorted, min, max सारखी functions tuple च्या आधारे कार्य करतात — sorted[(b, a) for a, b in...] सारखी चावीदार क्रमवारी tuple ने साधली जाते. tuple मधील पहिला घटक क्रमवारीनुसार निर्णायक ठरतो.\nमिश्र रचना आत्मविश्वास वाढवते — साधी tuple आता सेट, dict, list आणि function इतर सर्व data structures सोबत समजून घेता आले तर data engineering चा पाया घट्ट बसतो. प्रत्येक रचनेचा आकार आणि वर्तन यांची जोड तपासा.",
      },
      {
        title: "उदाहरणार्थ वर्तन — tuple चे रोजचे नमुने",
        content: "tuple चे रोजचे नमुने उदाहरणार्थ पाहू. उदाहरण — वर्गातील गुणांची जोडी — (विद्यार्थी, गुण) प्रत्येक गुणविचार नोंद tuple मध्ये. या नोंदी sorted केल्यास श्रेणी क्रम लागत नाही पण unpack loop ने वाचता येते.\nउदाहरण दोन — user सत्र — (id, नाव, प्रवेशवेळ) सारखी स्थिर माहिती tuple आहे — बदल नको म्हणून. profile data च्या वेळी वेळी रीफ्रेश करण्यासाठी नवीन tuple बनवता येते.\nउदाहरण तीन — date रचना — (वर्ष, महिना, दिवस) म्हणून तारीख माहिती — क्रमवार तारखा tututuleल्या जातात कारण tuple तुलना क्रमवार होते; 2026 पहिले मग महिना मग दिवस असा क्रम.\nउदाहरण चार — रंग आणि आकार — (r, g, b) रंगाची त्रिकोणी रचना; प्रत्येक रंगाची intensity tuple मध्ये प्रतिसाद असते. आकार (लांबी, रुंदी) अशा जोड्या ठेवता येतात.\nउदाहरण पाच — वेळेची रचना — (तास, मिनिट, सेकंद) घड्याळाची अवस्था. प्रत्येक बदल वेळेत नवीन tuple बनवून record — immutable मुळे जुनी वेळ सुरक्षित राहते.\nउदाहरण सहा — utilities — sys.version, os.stat() सारखी system रचना tuple परत करतात. python सर्व collections च्या जोड्या म्हणून वेळ वापरतात; अशा बाह्य नोंदी सुरक्षित राहतात कारण त्या immutable रचनांमध्ये असतात.\nप्रत्येक उदाहरण output मध्ये दाखवा — छोटा program लिहून tuple मधून मूल्य वाचा, unpack करा, sorting करा. रोजच्या वापरातून tuple ची साधेपणा आणि सुरक्षितता दोन्ही दिसून येतात.",
      },
      {
        title: "संपूर्ण सार — tuple चे गाभ्याचे नियम",
        content: "tuple चा संपूर्ण सार येथे एकत्र होईल. tuple ही ordered, immutable रचना आहे — बदलता न येणारा संग्रह. निर्मिती स्वल्पविरामाने — t = 1, 2, 3 किंवा (1, 2, 3) — एकल घटकासाठी (5,) आवश्यक.\nindexing, slicing, unpacking — सर्व list सारख्या नियमांनी चालते. unpacking — a, b = t — एका ओळीत वेगळी मूल्ये; a, b = b, a अदलाबदल. sorted, min, max यादी सारख्या क्रिया क्रमवार तुलनेने शक्य.\nimmutable मुळे hashable — dict key व set घटक म्हणून वापर. memory सौम्य — सम आकाराच्या यादीपेक्षा कमी जागा. बदलाची गरज असल्यास नवीन tuple तयार करा; आतील mutable रचना मात्र बदलू शकते.\nनिवडीचा नियम — स्थिर data, key, function return, coordinates साठी tuple; गतिमान records साठी list. namedtuple वरून त्याला नावेही देतात पण तिचा नियम हाच राहतो.\nआता पुढची पायरी — sets ची ओळख — जी duplicate नाही स्वीकारणारी रचना. tuple चे क्रम, list चे बदल, आता मोजणीचा वेग — हे तिन्ही संग्रह एकत्र म्हणजे Python चा संग्रहतंत्र घटक संपूर्ण होतो.",
      },
    {
        title: "आठवण — tuple लक्षात ठेवायचा सार",
        content: "tuple ही ordered आणि immutable — स्थिर रचना. बदल नको अशा रचना, dict key, function return — तेथे tuple सर्वोत्तम. unpacking एका ओळीत values विभागते. एकल घटकास स्वल्पविराम — (5,). सर्वकाही तपासा — त्या तीन नियमांनुसार tuple वापरा.",
      },
    ],
    practiceQuestions: [
      "tuple आणि list मध्ये फरक?",
      "single-element tuple कसा लिहितात?",
      "a, b = b, a काय करतं?",
      "tuple ला why immutable हवं?",
    ],
    quiz: [
      {
        question: "tuple mutable का?",
        options: ["हो", "नाही", "कधीकधी", "नंतर"],
        correct: 1,
      },
      {
        question: "single tuple कसा लिहितात?",
        options: ["(5)", "(5,)", "[5]", "{5}"],
        correct: 1,
      },
      {
        question: "tuple मधून values वेगळे काढणं म्हणतात?",
        options: ["packing", "unpacking", "splitting", "breaking"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "चार (x, y) coordinates च्या tuple मधून, ज्यामध्ये x > y आहेत त्या print करा.",
      starterCode: `points = ((3, 5), (9, 2), (4, 4), (7, 1))
for x, y in points:
    if x > y:
        print(x, y)`,
      expectedOutput: "9 2\n7 1",
    },
    interviewQuestions: [
      "tuple vs list कधी कोणता?",
      "immutable का महत्त्वाचं?",
      "multiple values कसे return करता?",
    ],
    related: ["python-lists", "python-sets", "python-dicts"],
    prev: "python-list-comprehensions",
    next: "python-sets",
  },

  {
    slug: "python-sets",
    categoryId: "python",
    title: "Sets",
    marathiTitle: "Sets — अद्वितीय मूल्यांचा संग्रह",
    level: "intermediate",
    minutes: 13,
    summary: "Set मध्ये duplicate नसतात — unique values चा संग्रह.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "set म्हणजे काय?",
        content: "set हा unordered collection आहे ज्यात duplicate मूल्ये नाहीत. curly braces {} मध्ये लिहितात, पण dict प्रमाणे key नसतात — फक्त values असतात. list आणि tuple यांच्यापेक्षा वेगळे: list आणि tuple मध्ये क्रम असतो आणि duplicate असू शकतात (एकच नाव दोनदा लिहिता येते); set मध्ये क्रम नाही आणि प्रत्येक मूल्य केवळ एकदाच.\nमूल्य जोडताना set तपासते ते आधीच आहे का — असेल तर दुसरी प्रत जोडली जात नाही. म्हणून \"कोणते विद्यार्थी आले?\" या प्रश्नासाठी set योग्य: प्रत्येक विद्यार्थी एकदाच, कोण कोण हे महत्त्वाचे, क्रम नको.\nहा hash table वर आधारित data structure — त्यामुळे membership check (विशिष्ट मूल्य आहे का ते शोधणे) खूप वेगवान आहे: O(1) वेळ, list/यादीच्या शोधापेक्षा जलद.\nunique म्हणजे अद्वितीय — प्रत्येक मूल्य केवळ एकच प्रतीत. ही अद्वितीयता आणि वेग हेच set चे सामर्थ्य.",
      },
      {
        title: "Syntax: रचना आणि मूलभूत क्रिया",
        content: "set अशी लिहितात: s = {1, 2, 3} — curly braces आणि comma ने मूल्ये. रिकामी set हवी तर set() वापरा; {} लिहिल्यास ती रिकामी dict बनते — हीच set ची सर्वात मोठी चूक.\nमूलभूत क्रिया: add(element) एक item जोडते, remove(element) एक item काढते (नसला तर error), discard(element) नसला तरी error देत नाही, pop() एक item random काढते, clear() सर्व स्वच्छ.\nकोड: nums = {1, 2, 2, 3, 3, 3} — duplicate आपोआप गायब होऊन {1, 2, 3} दिसते (output आतल्या आकारानेही duplicate ची पुष्टी करते: प्रथम {1, 2, 3}). मग add(4) आणि discard(99) — 99 अजिबात नसल्याने काहीही होत नाही; शेवटी len 4.\noutput क्रम वरील आकड्यांच्या बाबतीत स्थिर दिसतो, पण set unordered आहे — iteration क्रम बदलण्यावर अवलंबून असतो. मूल्य मिळते हे महत्त्वाचे, क्रम नाही.",
        code: `nums = {1, 2, 2, 3, 3, 3}
print(nums)          # duplicate आपोआप गायब

nums.add(4)
nums.discard(99)     # नसला तर काही नाही
print(nums)
print(len(nums))`,
        codeLanguage: "python",
        output: `{1, 2, 3}
{1, 2, 3, 4}
4`,
      },
      {
        title: "गणित क्रिया: union, intersection, difference",
        content: "set च्या गणिती क्रिया operators ने होतात — हेच set चे सामर्थ्य:\nunion | — दोन्ही sets मधील सर्व मूल्ये. a | b = {1, 2, 3, 4}.\nintersection & — दोन्ही sets मधील सामान्य मूल्ये. a & b = {2, 3}.\ndifference - — पहिल्या set मधील आणि दुसऱ्यात नसलेले. a - b = {1}, b - a = {4}.\nsymmetric_difference ^ — दोन्हीतला फरक, म्हणजे सामान्य वगळलेले. a ^ b = {1, 4}.\nअसेच method calls देखील उपलब्ध: a.union(b), a.intersection(b), a.difference(b). operators हेच जलद आणि वाचनीय असतात.\nउदा. दोन संघांची एकत्रित यादी, दोन्ही संघांत खेळणारा, फक्त पहिल्या संघातला — ही गणिते एका ओळीत निघतात.",
        code: `a = {1, 2, 3}
b = {2, 3, 4}
print("एकत्र:", a | b)
print("सामान्य:", a & b)
print("फक्त a:", a - b)`,
        codeLanguage: "python",
        output: `एकत्र: {1, 2, 3, 4}
सामान्य: {2, 3}
फक्त a: {1}`,
      },
      {
        title: "वास्तविक उदाहरण: दोन वर्गांत common विद्यार्थी",
        content: "शाळेतील दोन वर्गांच्या याद्या आहेत आणि कुणी दोन्ही वर्गांत आहे ते शोधायचे आहे. group_a = {\"आदित्य\", \"प्रिया\", \"सोनाली\"} आणि group_b = {\"प्रिया\", \"रमेश\"}. intersection: both = group_a & group_b — output दोघांतही: {'प्रिया'}.\nकागदावर याच याद्या तपासल्या तर प्रत्येक नाव दुसऱ्या वर्गात शोधावे लागते — सैद्धांतिक ओझे. set मुळे एक ओळ पुरेसे. मोठ्या याद्यांवरही ही क्रिया त्वरित.\nअसाच उपयोग: हजेरीतून आज आलेल्यांची set, विद्यार्थ्यांकडून किंवा ग्राहकांकडून duplicate संपर्क काढणे, दोन lists मध्ये सामाईक घटक शोधणे.\ncommon व सर्व वेगळे हे दोन प्रश्न — & आणि | — रोजच्या data कामाचा पाया आहेत.",
        code: `group_a = {"आदित्य", "प्रिया", "सोनाली"}
group_b = {"प्रिया", "रमेश"}

both = group_a & group_b
print("दोघांतही:", both)`,
        codeLanguage: "python",
        output: `दोघांतही: {'प्रिया'}`,
      },
      {
        title: "membership check — O(1) वेग",
        content: "\"एखादा item set मध्ये आहे का\" ते तपासणे खूप जलद असते. if name in present_set हा प्रश्न dict/set च्या hash table मुळे स्थिर वेळेत सुटतो (O(1)) — यादी शेकडो, हजारो मूल्यांची झाली तरी शोधाचा वेळ वाढत नाही.\nउदा. attendees = {\"आ\",\"ब\",\"क\"} आणि कुणी आलं होतं का विचारणे: \"आ\" in attendees → True; \"झ\" in attendees → False. असे तपासण्यासाठी set ही पहिली निवड.\nक्रम नसल्याने set मध्ये indexing नसते — s[0] असे ठिकाण नाही; परंतु \"value मध्ये आहे का?\" असा search हा set चा रोजचा वापर.\nजेव्हा वेग महत्त्वाचा असेल तेव्हा membership साठी list नको, set वापरा — हा data size वाढताच दिसेल.",
      },
      {
        title: "Interactive: unique मूल्ये काढणे",
        content: "नावांच्या list मध्ये duplicate आहेत — set() मधून जाताच केवळ unique राहतात. names मध्ये \"आ\" आणि \"ब\" अनेकदा आहेत; unique = set(names) ने ती स्वतंत्र होतात.\nsorted(unique) output क्रमवार देते — sorted() मुळे निकाल नेहमी सारखा आणि स्थिर दिसतो: ['आ', 'क', 'ब']. len(unique) म्हणजे 3 — एकूण वेगळी नावे.\nक्रमवार set टाइममधून दिसण्याचा हाच मार्ग: हवे तेव्हा sorted(집) वापरा; set चा internal क्रम कायमच orderly नसतो.\nआपल्या नावांच्या list घेऊन ही प्रक्रिया तपासा — जितकी duplicate असतील तितके बचतीचे प्रमाण len मधून दिसेल.",
        code: `names = ["आ", "ब", "आ", "क", "ब"]
unique = set(names)
print(sorted(unique))
print("count:", len(unique))`,
        codeLanguage: "python",
        output: `['आ', 'क', 'ब']
count: 3`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ {} वापरून रिकामी set म्हणजे काय? हो नाही — {} ही रिकामी dict. रिकामी set हवी तर set() लिहा. type() ने तपासा.\n✗ s[0] असे indexing — set unordered आहे, स्थान नसते. मूल्य हवे तर iteration किंवा membership; क्रमवार निकाल हवा तर sorted(s).\n✗ mutable item ठेवणे — set मध्ये list हा item असू शकत नाही कारण list बदलता येतो (hashable नाही): TypeError: unhashable type: 'list'. tuple आणि string मात्र योग्य.\n✗ duplicate ची अपेक्षा — set ने आपोआप duplicate वगळले जातात; add केलेले जुने item दुसऱ्या प्रतीत जमा होत नाही.\n✗ iteration क्रमाची खात्री — set चा output क्रम अचानक बदलू शकतो. निकाल क्रमवार/स्थिर हवा असेल तर सॉर्ट करा.\nत्रुटी आल्यास संदेश वाचा — unhashable आणि type च्या चुका तात्काळ समजतात, उपाय हाच: योग्य item प्रकार आणि set().",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "duplicate मूल्ये आपोआप निघतात आणि membership check (\"a in s\") O(1) वेळेत होतो — unique आणि वेगवान शोध हे दोन गाभे.\nset मध्ये केवळ hashable items असू शकतात: संख्या, string, tuple ठीक; list मुळे error.\nset comprehension देखील आहे — {x for x in range(10)} अशी एका ओळीत set बनते (list comprehension प्रमाणे).\nfrozenset म्हणजे immutable set — ती बदलता येत नाही आणि बदलत्या (mutable) data च्या संग्रहात ती स्वतः hashable म्हणून वापरता येते.\nunordered असली तरी set हा गणिती संच आहे — |, &, -, ^ या क्रियांमुळे data तुलना एका ओळीत होते.",
      },
    {
        title: "सखोल अभ्यास — set म्हणजे नक्की काय",
        content: "set ची खोल समज घेऊया — ती एक ऐक्यहीन, क्रमहीन, duplicate न स्वीकारणारी रचना आहे. गणितातील संच या संकल्पनेतूनच ती आली आहे — प्रत्येक घटक एकच वेळ, क्रम दुय्यम. आधारीत घटकांसह तिला {} वापरून तयार करता येतो — s = {1, 2, 3}.\nक्रियाशील भाग म्हणून duplicate ने त्वरित विरघळते — {1, 2, 2, 3} म्हणजे जवळचा मर्यादित {1, 2, 3} च समजला जातो. हे wild duplicate काढण्याचे शस्त्र बनते — list(set(l)) म्हणजे एका ओळीत duplicate मिटवणे.\nक्रम निश्चित नाही — set मध्ये index वापरता येत नाही; s[0] error देतो. हा गैरसमज टाळा — set चे ordering प्रयोगानुभवाने दिसत नाही, खास नियोजनही नाही. त्यासाठी order हवा असेल तर list व IEEE dict वापरा.\nset घटक hashable हवेत — संख्या, string, tuple ठीक; यादी आणि dict घटक नव्हे कारण ते mutable आहेत. TypeError थांबे कारण hash गणना स्थिर नसते. हा नियम असाच नियम dict मधील key प्रमाणेच.\nset वर सर्वात शक्तिशाली क्रिया म्हणजे समुच्चय गणित — union, intersection, difference, symmetric_difference. दोन set मधील सामाईक — एकाची विशिष्ट — सर्व विश्लेषणे लहान code ने होतात. ह्या गणना झटपट होतात कारण आतून hash आधार असतो.\nset चा वेग दुसऱ्या रचनांपेक्षा मोठा आहे — in operator मध्ये search O(1) झटपट — यादीच्या O(n) प्रमाणे नाही. लाखो घटक असलेले data वारंवार तपासायचे असल्यास set सर्वांत वेगवान पर्याय ठरतो.\nshoПДА set वापरात पाहणार चित्र — duplicate काढणे, क्रमबद्ध होणे, सामायिक विक्रेता वस्तू शोधणे, सदस्य तपासणे — या सर्व क्रिया set च्या साधनांनी काही लोकांत होतात.",
      },
      {
        title: "क्रिया आणि operator — set गणित सज्ज",
        content: "set चे गणित operators आणि methods ने तयार होते. union — A | B किंवा A.union(B) — दोन्ही set मधील सर्व घटक एकत्र. intersection — A & B किंवा A.intersection(B) — दोन्हीत सामाईक घटक. हे दोन्ही सर्वांत वापरले जाणारे.\ndifference — A - B किंवा A.difference(B) — फक्त A मध्ये असलेले, B मध्ये नसलेले. symmetric_difference — A ^ B — दोन्हीतून फक्त समान घटक न वापरणारे — विशिष्ट फरक. ह्या चारही क्रिया आतून गणिती संच नियम पाळतात.\nदुसऱ्या सेटशी तुलना सुद्धा होते — subset A <= B पहिला दुसऱ्याचा भाग; superset A >= B त्याचा विस्तार. issubset आणि issuperset या method ही तपासतात; proper subset A < B कठोर नियमाने.\nadd एखादाच घटक जोडतो; update अनेक घटक किंवा संपूर्ण संग्रह जोडतो. add ने duplicate आला तर तो silent विरघळतो; update ने iterable वाढतो — list, tuple सर्व घेते.\nremove खात्रीने काढतो — element नाही तर KeyError. discard काढण्याचा सौम्य मार्ग — element नाही तर तो ध्यानात घेत नाही. pop random घटक काढतो — कोणताही, ठरलेला नाही — कारण क्रम नाही.\nclear सर्व काढतो; copyn स्वतंत्र प्रत; len घटकांची संख्या; in सदस्य तपासणी. या semua क्रिया set चे पूर्ण toolbox बनवतात — प्रत्येक क्रिया प्रयोगांमध्ये तपासा.\nगणित संकल्पना संगणकात साकार झाली — जी क्रिया कागदावर करायची तीच set च्या operator सह एका ओळीत घडते. हे संगणक विज्ञान आणि गणित यांच्या सुंदर संगमाचे उदाहरण आहे.",
      },
      {
        title: "वास्तविक उपयोग — set ची रोजची कामे",
        content: "set चे वास्तविक उपयोग अनेक आहेत. duplicate काढणे हे सर्वांत साहजिक काम — list मध्ये विक्रीत तर वस्तू अनेकदा येतात; list(set(items)) ने एकदा घटना साठवता येते. data cleaning मध्ये हा नियम नेहमी आढळतो.\nसामायिक वस्तू शोधणे — दोन वर्गांच्या उपस्थितীর सामायिक विद्यार्थी — A & B. वेगळे विद्यार्थी — A - B. असे उपयोग शाळा, व्यापार, अधिकार याठिकाणी सर्वत्र आढळतात; set गणित एका ओळीत उत्तर देते.\nमोठ्या data मध्ये त्वरित सदस्य तपासणी — लाखो ग्राहक id मधील नोंदी set मध्ये ठेवल्यास in तपासणी झटपट होते. website वर ब्लॉकलेल्या users ची प्रतिमा set मध्ये ठेवून प्रत्येक request तपासता येते — कार्यक्षम.\nसमान labels किंवा tags — लेखाचे tags set मध्ये ठेवल्यास duplicate टॅग टाळले जातात — क्रॉस-रिफरन्सिंग सुलभ. अनेक लेखांच्या tags मधून समान विषय शोधणे — ज्या set गणितानं होईल.\nSHA data विश्लेषण — दोन dataset मध्ये फरक झटपट दाखवण्यासाठी difference आणि symmetric_difference — नवीन vs जुने records — बदलातील फरक ओळखण्यास त्रिवेणी येते.\npaging तपासणे — मालातून काय प्रमाणित विक्री झाली — set संदर्भांकित वस्तूंपेक्षा विकल्या गेलेल्या वस्तू वेगळ्या करणे — difference हा मार्ग. प्रत्येक उदाहरण प्रयोग करून समजून घ्या — नजर पटली की वास्तविक डेटा खेळताना मजा येते.",
      },
      {
        title: "चुका आणि सापळे — set बरोबर अडखळणे",
        content: "set च्या नेहमीच्या चुका ओळखा. पहिली — set मध्ये index वापरण्याचा प्रयत्न — s[0] असह्य TypeError; कारण set क्रमहीन. क्रम हवा असेल तर list व dict निवडा; set तर क्रमवार वाचनासाठी नव्हे.\nदुसरी — यादी किंवा dict घटक ठेवणे — s.add([1, 2]) TypeError देते कारण mutable hash नाही. पर्याय — tuple मध्ये रूपांतर करून जोडा — s.add((1, 2)) योग्य.\nतिसरी — रिकामा set तयार करण्याचा गैरसमज — {} रिकामा dict आहे, set नव्हे! रिकामा set साठी set() वापरा; ही सर्वांत सामान्य संभ्रमाची ठिकाणं.\nचौथा — remove सह काढणे — confer नसलेल्या घटकावर KeyError येते. discard ला ही समस्या नाही — तो silent वागतो; कुठे error हवा कुठे नाही हे ठरवा.\nपाचवा — updates समजणे — update म्हणजे iterable वाढवणे; add एकच घटक. update([1, 2]) म्हणजे दोन घटक; add([1, 2]) म्हणजे error. हे दोन्ही वेगळे वर्तन लक्षात ठेवा.\nसहावा — duplicate संभ्रम — set duplicate विसर्जित करतो; परिणाम silent. data गणनेत हा बलक्षMomo सेटन होऊ नये म्हणून जर duplicate जतन हवे असतील तर set न वापरता list ठेवा; duplicate मिटवण्याचा हेतू असेल तरच set.\nचुका लक्षात ठेवल्यास set चा वापर सुरक्षित आणि स्पष्ट होतो — प्रत्येक चुकीचे परिणाम output मध्ये पहा; TypeError आणि KeyError च्या संदेशांकडे लक्ष द्या.",
      },
      {
        title: "सराव — set ची कार्ये",
        content: "याच डेटा सह set ची कार्ये करा. कार्य एक — मित्रांच्या नियमित खेळणाऱ्या दोन संघांची यादी द्या — सामायिक खेळणारे, फक्त पहिल्या संघातले, फक्त दुसऱ्या संघातले — केवळ set गणिताने ठरवा.\nकार्य दोन — दुकानातील विक्री वस्तूंच्या यादीत duplicate काढून एकाच ओळीत प्रत्येक वस्तूची संख्या — set(sold) ने प्रत्येक वस्तू एकदा; त्याची count यादीने जोडा.\nकार्य तीन — दोन शतकांतील मोठ्या गावांची यादी — एका जवळ, दुसऱ्या जवळ — मिळून एकत्रित तयारी (union), जागोजागी समान मोठे शहर (intersection) शोधा.\nकार्य चार — विक्री व अधिक्षेत्र — 10 ते 30 संख्यांचे गुणak multiple set — 2 चे गुणक आणि 3 चे गुणक — सामायिक गुणक (6 च्या पटीतले) तसेच एकत्रित संच शोधा.\nकार्य पाच — API सूचना — अनेक स्रोतांनी दिलेल्या अनुक्रमे सदस्य set मध्ये घाला — मग नेमके कुठे duplicate टाळले गेले आणि कुठील स्रोत वेगळा राहिला ते सांगा.\nकार्य सहा — शब्द तपासणी — एका वाक्यात शब्दांच्या unique संख्येचा अंतिम answer द्या — set(vowels) आणि set(words) मध्ये सामायिक क्षेत्र grep काढा.\nकार्य सात — मेमरी साफ — काही minutes च्या मते sleep calls यांचे समान module import आणि actual module set मधून fatal check — clean ❤️ set logic एवढे.\nप्रत्येक कार्य output सोबत करा आणि अंदाज आधी लिहा — जुळल्यावर set गणित घट्ट होते; चुकल्यास operator पुन्हा तपासा.",
      },
      {
        title: "मुलाखतीतील प्रश्न — set संभाषण",
        content: "set चे मुलाखतीतील प्रश्न असे येतात. पहिला — list व set मध्ये फरक? उत्तर — list ordered, mutable, duplicate सह; set unordered, duplicate नसलेला, झटपट search. निवड कामानुसार — क्रम व duplicate हवे तर list; unique व वेग हवा तर set.\nदुसरा — set duplicate काढून टाकते का? उत्तर — ती duplicate धरतच नाही; {1, 1, 2} ने {1, 2} बनते. duplicate टाळायची इच्छा संरचनेचाच भाग राहते.\nतिसरा — set वरील search इतकी वेगवान का? उत्तर — hash table आधार; elements चे hash झटपट शोध देतात — O(1). यादीत search O(n) — प्रत्येक घटक तपासणे.\nचौथा — union, intersection म्हणजे मुरला भाग? उत्तर — A | B मिळून सर्व; A & B सामाईक; A - B फक्त पहिल्यातले; A ^ B फक्त वेगळे. गणिती संच नियम.\nपाचवा — set कधी टाळावे? उत्तर — जेव्हा क्रम किंवा duplicate महत्त्वाचे असतात; set हा क्रम देत नाही आणि duplicate हटवतो. अशा ठिकाणी list किंवा dict हवा.\nसहावा — add विरुद्ध update? उत्तर — add एकच घटक; update iterable चे अनेक. update([1, 2]) दोन घटक; add([1, 2]) error कारण यादी hash नाही.\nसातवा — dict key सारखा set घटक? उत्तर — दोन्ही hashable हवेत — number, string, tuple; mutable — list, dict — नाही. हाच नियम दोन्ही ठिकाणी लागू.",
      },
    {
        title: "विस्तार — frozenset आणि set comprehension",
        content: "set ची पुढची पातळी — frozenset आणि set comprehension. frozenset ही immutable set — एकदा बनवली की तिच्यात घटक जोडता किंवा काढता येत नाही. ही स्थिर रचना dict key म्हणून वापरता येते कारण ती hashable असते — सामान्य set मध्ये हे शक्य नसते.\nfrozenset चा फायदा — जडत्व जपणे — data स्थिर हवे असेल तर ती अपरिवर्तनीय राहते. त्यावर गणिती क्रिया — union, intersection — शक्य आहेत; पण add, remove, update नाही. हे निर्बंध उपयुक्तच आहेत — अंशिक सुरक्षा.\nset comprehension — {x for x in iterable if condition} — एका ओळीत नवीन set तयार करते. duplicate आपोआप विरघळतात आणि condition ने filter होतो. यादी comprehension ची मैत्री रचना — फरक फक्त गोल कंसऐवजी कुरळे कंस.\nउदाहरण — {w for w in words if len(w) > 4} — मोठ्या शब्दांचा set; subsequent duplicate शब्द भगवतात. computational context मध्ये ही रचना एकूण unique संच एका ओळीत देते — सोयीस्कर.\ndict publish ते set — set की values प्रमाणे mutable condescn नाहीत; {x for x in ...} येथे x hashable हवा. number, string, tuple योग्य; यादी आणि dict ठिक नाही — TypeError येतो.\nfrozenset आणि set comprehension ही दोन तंत्रं এক উদাহरणानं सोडवता येतात — स्थिर रचना हवी तर frozenset, विश्लेषणात unique elems हवे तर comprehension set. प्रत्येक तंत्राची output तपासा — अशी समज घट्ट बसते.",
      },
      {
        title: "कामगिरी आणि निवड — set कधी निवडावी",
        content: "set केव्हा निवडावी हे निर्णयाची टीप आहे. पहिला नियम — duplicate टाळायचे असल्यास — set स्वयंचलित duplicate filter. दुसरा नियम — सदस्य तपासणी वारंवार करायची असल्यास — set मध्ये search एका क्षणात होते.\nतिसरा नियम — दोन संचांची तुलना/गणित — union, intersection, difference आवश्यकतेनुसार — set गणित एका ओळीत. हे साम्य व भेदाचे विश्लेषण कोणत्या ठिकाणी होते तिथे set ही नैसर्गिक निवड.\nचौथा नियम — घटकांच्या क्रमाची किंवा प्रमाणाची गरज असल्यास set टाळावी — कारण क्रम नाही आणि duplicate हटतात. अशा कामांसाठी list किंवा dict योग्य — परिस्थिती पाहून निकाल.\nकामगिरी तुलना — search: set O(1), list O(n). duplicate गणना: set आपोआप. मोठा data — हजारो ते लाखो entries — दोन्ही ठिकाणी फरक मोजण्याजोगा. चाचण्या देताना सेकंदांतील फरक दिसतो.\nभावी संरचना — set चे घटक हॅशबंधीत कारण research वेगवान; पण याचा अर्थ घटक immutable हवे. रचना निवडताना डेटाचे प्रकार आधी पहा — number, string, tuple ने set तयार होते.\nअधिक evidence — निर्णयासाठी actual उदाहरण द्या — 1000 घटकांच्या यादीत duplicate काढायचा आणि search करायचा वेळ हरएक पद्धतीने मोजा. असे प्रयोग डेटा संरचनेची निवड स्वतःस सिद्ध करतात — योग्य रचना = कमी वेळ.",
      },
      {
        title: "एकत्रित उदाहरण — set ने प्रकल्प सोडवणे",
        content: "एकत्रित प्रकल्प set टूल्स ने सोडवूया — विक्री विश्लेषकाचं दैनंदिन काम. प्रत्येक दिवसाची विक्री वस्तूंची यादी — duplicate सह — आधी set मध्ये unique वस्तूंची गणना तयार करा. मग कोणती वस्तू किती वेळा विकली गेली ते dict count ने.\nदोन दिवसांची तुलना — आज व कालची विक्री — आज नव्याने आलेल्या वस्तू difference ने, काल व आज दोन्ही सामाईक वस्तू intersection ने, फक्त एकाच दिवशी मिळणारी सर्व symmetric_difference ने.\nग्राहक सेतु — कोणत्या वस्तू एकत्र खरेदी — जोड्या दुसऱ्या set मध्ये (v1, v2) जोडप्टे. समान जोडपट्टे काढता sample set मध्ये — pair sets मध्ये duplicate जोडपट्टे टाळले जातात — एकत्रित असोसिएशन.\nडेटा साफ — प्रत्येक वस्तूच्या नावात स्पेस wh घट — normalize करून सांधले — set मध्ये साठवण्यामुळे duplicate wh घटत; नावे भिन्न असल्यास अतिरिक्त गणना.\nरिपोर्ट dynamic — खरेदीला बसलेल्या वस्तूंची यादी भविष्यातून — कमी झालेल्या वस्तू difference — ही गणना प्रत्येक दिवशी refreshed — set गणित प्रकल्पाला लहान व सुटसुटीत.\nप्रत्येक पायरी सह output — तपासा — अपेक्षित answer आधी लिहा; मग set ऑपरेशन केल्यावर तुलना. जुळल्यावर प्रकल्प पूर्ण — असे संयुक्त काम data analytics मध्ये set ची कसर दाखवते.",
      },
      {
        title: "संपूर्ण सार — set चे गाभ्याचे नियम",
        content: "set चा संपूर्ण सार आता एकत्र करूया. set — unordered, unique, duplicate रहित संग्रह. निर्मिती {1, 2, 3}; रिकामा set() — {} रिकामा dict आहे. घटक hashable — number, string, tuple; mutable — list, dict — नाही.\ngणित — A | B union; A & B intersection; A - B difference; A ^ B symmetric_difference. तुलना — issubset, issuperset. add एक, update अनेक; remove (error) विरुद्ध discard (silent).\nवेग — search O(1) — यादीच्या O(n) पेक्षा वेगवान. हॅश अंतर्गत रचनेमुळे duplicate टाळणे आणि सदस्य तपासणी क्षणात होते.\nवापर — duplicate काढणे, सामायिक घटक, फरक, त्वरित सदस्य तपासणी व संच गणित. टाळा — क्रम व duplicate महत्त्वाचे असताना; तेव्हा list व dict.\nfrozenset — immutable set — key म्हणून वापर. set comprehension — {x for x in ... if ...} — झटपट unique संच. ही सार नियम लक्षात ठेवले की sets चा वापर स्वच्छ व वेगवान होतो.",
      },
    {
        title: "नेहमी लक्षात ठेवा — set च्या अटी",
        content: "set वापरताना नेहमी लक्षात ठेवण्याच्या अटी या आहेत. घटक hashable हवेत — संख्या, string, tuple योग्य; यादी आणि dict चालत नाहीत. रिकामा set() — {} नव्हे. duplicate नेहमी विरघळतात — यावेगळ्या व्यवहाराची जाणीव ठेवा.\nक्रम नाही म्हणून index वापरू नका; वाचन तुलना व in ने होते. remove विरुद्ध discard — एक error, एक silent — स्थितीनुसार. union, intersection, difference — तीन गणनेने बहुतेक कामे सुटतात — सरावाने हे नियम सहज लक्षात राहतात.",
      },
    {
        title: "अंतिम सराव — set प्रश्नांची फेरी",
        content: "ही फेरी set च्या खडतर प्रश्नांची आहे — प्रत्येक स्वतः लिहा. प्रश्न एक — दोन string मधील सामायिक अक्षरे काढा — set(a) & set(b). प्रश्न दोन — एका यादीतून duplicate काढून क्रम जपा — ordered list बनवा; set-only आवश्यक नाही.\nप्रश्न तीन — दोन वर्गांच्या विद्यार्थ्यांच्या नावांमध्ये फक्त एका वर्गात असलेले शोधा — symmetric_difference. प्रश्न चार — 100 च्या आतच्या सम व विषम संख्यांचे दोन set मध्ये वाटप करा.\nप्रश्न पाच — वाक्यातील शब्दांपैकी स्वरांसहित शब्द काढा — set गणित आणि comprehension एकत्र. प्रश्न सहा — तीन set मधील सामाईक घटक — sequential intersection कोणता?\nप्रत्येक प्रश्न आधी अपेक्षित उत्तर लिहा, मग कोड लिहा आणि output तपासा. चुकलेल्या प्रश्नाचे operator पुन्हा वाचा — प्रत्येक चूक पुढचा पाया घट्ट करते. या फेरीनंतर set गणित हातात येते.",
      },
    {
        title: "आठवण — set लक्षात धरा",
        content: "set unordered, unique; duplicate विरघळतात. घटक hashable हवेत. गणित — union, intersection, difference, symmetric_difference. search वेगवान — O(1). रिकामा set() वापरा. क्रम हवा तर list — दोन्हीचा उपयोग परिस्थितीवर.",
      },
    {
        title: "शेवटची आठवण — set note",
        content: "set unique संग्रह — unordered. duplicate आपोआप मिटतात. गणित operators वेगवान. हेच लक्षात राहिले की sets चा वापर पूर्ण.",
      },
    ],
    practiceQuestions: [
      "set मध्ये duplicate का नसतात?",
      "indexing शक्य का नाही?",
      "union/intersection operators कोणते?",
      "list मधून duplicate काढण्याचा मार्ग?",
    ],
    quiz: [
      {
        question: "set मध्ये duplicate?",
        options: ["ठेवतो", "नाही ठेवत", "कधीकधी", "error"],
        correct: 1,
      },
      {
        question: "दोघांतले सामान्य मूल्ये?",
        options: ["| union", "& intersection", "- difference", "^ symmetric"],
        correct: 1,
      },
      {
        question: "set मध्ये subscript?",
        options: ["शक्य", "अशक्य", "कधीकधी", "कोणत्याही"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "दोन list मधून जी मूल्ये दोन्हीत नाहीत (फरक) print करा — set operators वापरून.",
      starterCode: `a = [1, 2, 3, 4]
b = [3, 4, 5, 6]
s1, s2 = set(a), set(b)
print(s1 - s2)
print(s2 - s1)
print("दोन्हीत common:", s1 & s2)`,
      expectedOutput: "{1, 2}\n{5, 6}\nदोन्हीत common: {3, 4}",
    },
    interviewQuestions: [
      "set vs list?",
      "membership check मध्ये set का वेगवान?",
      "{} dictionary की set — कसा?",
    ],
    related: ["python-tuples", "python-dicts", "python-list-comprehensions"],
    prev: "python-tuples",
    next: "python-dicts",
  },

  {
    slug: "python-dicts",
    categoryId: "python",
    project: "simple-quiz",
    title: "Python Dictionaries",
    marathiTitle: "Dictionaries - key-value जोड्या",
    level: "intermediate",
    minutes: 12,
    summary: "Dictionary मध्ये data key-value pair मध्ये ठेवला जातो.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "Dictionary म्हणजे काय?",
        content: "Dictionary key-value जोड्या ठेवतो — वास्तविक शब्दकोश सारखे: शब्द हा key आणि अर्थ ही value. curly braces {} मध्ये जोड्या लिहितात, प्रत्येक जोडीत unique key असतो आणि value काहीही असू शकते — संख्या, string, list, tuple, अगदी दुसरा dict.\nउपमा थेट मिळते: फोनबुक. नाव हा key, नंबर ही value — नावाने शोधा आणि नंबर मिळतो. तोच शब्दकोश: शब्दाने शोधा, अर्थ मिळतो. घरची सामानाची यादी वस्तू → किंमत, मंडपाचा मेनू पदार्थ → मूल्य, रेल्वे timetable गाडी → वेळ — dictionary सर्वत्र.\nक्रमाऐवजी key ने प्रवेश होतो — index ऐवजी ओळख. त्यामुळे key मध्ये lookup वेगवान आहे: hash table आधारित, O(1) access वेळ.\nkey ही immutable हवी — string, int, tuple योग्य; list नाही. key म्हणजे ओळख आणि value म्हणजे तपशील — ही जोडीच संपूर्ण नोंद. यामुळे dict ही Python मधील सर्वात वापरलेली data structure आहे — data organization साठी मुख्यच.",
      },
      {
        title: "Syntax: प्रवेश आणि methods",
        content: "रचना: d = {\"key\": value} — कोलन ने key आणि value वेगळे, comma ने जोड्या वेगळ्या. प्रत्येक जोडीमध्ये unique key; दोन समान key नसतात.\nप्रवेश दोन मार्गांनी: d[\"key\"] (bracket) किंवा d.get(\"key\"). फरक महत्त्वाचा: key नसली तर bracket → KeyError, दुसरीकडे get() → None किंवा तुम्ही दिलेला default (d.get(\"k\", 0) → मूल्य नसले तर 0). get() सुरक्षित प्रवेश आहे.\nतीन method परतचे संग्रह: keys() सर्व key, values() सर्व value, items() प्रत्येक जोडी (key, value) या रूपात. code मध्ये person dict मधून name, age, key list, value list — सर्व output मध्ये दिसते.\nलूपचे चार प्रकार: for k in d (key), for k in d.keys(), for v in d.values(), for k, v in d.items(). comprehension पण आहे: {k: v for ... in ...} — एका ओळीत शब्दकोश.",
        code: `person = {
    "name": "विलास",
    "age": 25,
    "city": "पुणे",
    "skills": ["Python", "HTML", "CSS"]
}

print(person["name"])
print(person.get("age"))
print(list(person.keys()))
print(list(person.values()))`,
        codeLanguage: "python",
        output: `विलास
25
['name', 'age', 'city', 'skills']
['विलास', 25, 'पुणे', ['Python', 'HTML', 'CSS']]`,
      },
      {
        title: "बदलणे आणि जोडणे",
        content: "एकाच bracket syntax ने दोन्ही होते: person[\"age\"] = 26 value बदलते (key अस्तित्वात आहे), person[\"job\"] = \"Developer\" नवीन जोडी जोडते (key नाही). key असेल तर बदल, नसेल तर जोड — हा नियम लक्षात ठेवा.\nupdate() अनेक जोड्या एकत्र जोडते: d.update({\"city\": \"मुंबई\"}) वगळल्यास dict मध्ये जोडते, समान key असल्यास value बदलते. setdefault(key, val) key नसल्यास जोडते; असल्यास काहीही बदलत नाही.\nकाढण्यासाठी: del d[\"key\"] जोडी काढते; pop(key) काढते आणि काढलेली value परत देते; popitem() शेवटची जोडी काढते; clear() संपूर्ण dict स्वच्छ करते.\nबदलाच्या या चार क्रिया — जोडा, बदला, काढा, स्वच्छ — data dynamic ठेवतात. contact update, salary update, stock update — क्षेत्राची पर्वा न करता तीच कामे करता येतात. मागे key अस्तित्वात असल्याची खात्री करा — चुकीच्या key वर विचारपूर्वक जा.",
        code: `person = {"name": "विलास", "age": 25}
person["age"] = 26
person["job"] = "Developer"
print(person)`,
        codeLanguage: "python",
        output: `{'name': 'विलास', 'age': 26, 'job': 'Developer'}`,
      },
      {
        title: "वास्तविक उदाहरण: विक्री रोजनिशी",
        content: "चहाची विक्री 45, कॉफी 80 — sales dict बनतो: sales = {\"चहा\": 45, \"कॉफी\": 80}. नवीन पदार्थ जोडतो: sales[\"लस्सी\"] = 120, आणि चहा वाढतो: sales[\"चहा\"] += 10 — म्हणजे जुनी value + 10.\nमग for item, count in sales.items() ने प्रत्येक जोडी उलगडल्यास item (key) आणि count (value) मिळतात. output: चहा: 55, कॉफी: 80, लस्सी: 120.\nएकूण विक्री काढायची झाल्यास sum(sales.values()) — सर्व मूल्ये मिळून total, एका ओळीत. विक्री रोजनिशी, पदार्थानुसार मोजणी असा data dict मध्ये सुबक बसतो.\nitem आणि count ची जोडी म्हणजेच नाव → संख्या. असे प्रत्येक दिवसाचे विकिर data असले तरी coding समान राहते — dictionary मुळे program सोपा आणि वेगवान.",
        code: `sales = {"चहा": 45, "कॉफी": 80}
sales["लस्सी"] = 120
sales["चहा"] += 10

for item, count in sales.items():
    print(f"{item}: {count}")`,
        codeLanguage: "python",
        output: `चहा: 55
कॉफी: 80
लस्सी: 120`,
      },
      {
        title: "Nested dictionaries — जटिल data",
        content: "value म्हणून दुसरा dict ठेवता येतो — म्हणजेच nested structure. employees dict मध्ये प्रत्येक कर्मचाऱ्याचा id हा key आणि त्याचे तपशील (नाव, पगार, पत्ता तपशील) value मध्ये दुसरा dict.\nप्रवेश साखळीने: d[\"outer\"][\"inner\"] — आधी बाहेरची key, मग आतल्या dict मधील key. उदा. employees[101][\"name\"].\nहेच compiler/जिने database मध्ये दिसते: रेल्वे timetable (गाडी → वेळ), restaurant (पदार्थ → मूल्य), contact (नाव → स्वतःचा detail dict). एकाच dict मध्ये जटिल, क्रमवार माहिती राहते.\nआंतरिक key नसली तर KeyError — दोन्ही स्तरांवर key अस्तित्वात असल्याची खात्री करा. nested dict हेच मोठ्या data साठी strength; परंतु अधिक निवड अचूक करावी लागते.",
      },
      {
        title: "Interactive: in ने सुरक्षित प्रवेश",
        content: "नसलेली key bracket ने मागितल्यास KeyError येतो — interactive मध्ये आधी in ने तपासणे ही सवय लावा. marks = {\"विलास\": 88, \"सायली\": 95}; who = \"सायली\".\nif who in marks: तपासल्यावर सापडल्यास f\"{who}: {marks[who]}\" म्हणजे सायली: 95; न सापडल्यास \"सापडला नाही\".\nअशा प्रकारे आधी तपास, मग प्रवेश — KeyError कधीच येत नाही. चटकन सापडल्यास निकाल, अन्यथा संदेश: दोन्ही प्रकरणांत program चालत राहतो.\nस्वतः दुसरी key वापरून पहा — who = \"रमेश\" ठेवल्यास else मधील संदेश दिसतो. in ने तपासणे नेहमी सुरक्षित coding आहे; get() हीच याला पर्यायी सुरक्षित रीत.",
        code: `marks = {"विलास": 88, "सायली": 95}
who = "सायली"
if who in marks:
    print(f"{who}: {marks[who]}")
else:
    print("सापडला नाही")`,
        codeLanguage: "python",
        output: `सायली: 95`,
      },
      {
        title: "Mini Project — शब्द मोजणी",
        content: "एका वाक्यात प्रत्येक शब्द किती वेळा आला ते मोजा. sentence = \"चहा कॉफी चहा दुध कॉफी चहा\" — वाक्यातून शब्द split() ने निघतात आणि count dict मध्ये जमतात.\nगुत्ता pattern: count[w] = count.get(w, 0) + 1 — शब्दाची जुनी संख्या get(w, 0) ने मिळवा (नसेल तर 0) आणि 1 ने वाढवून परत ठेवा. output: {'चहा': 3, 'कॉफी': 2, 'दुध': 1}.\nहाच pattern सर्वत्र वापरतात — word frequency, character count, item tally. पुस्तक वाचनात, search engine मध्ये, data विश्लेषणात मूल्ये मोजण्याचे हेच मूळ रूप. get() च्या default मुळे पहिला शब्दही त्रास न करता मोजला जातो.\nस्वतःचे वाक्य घ्या, code मध्ये टाका आणि report पहा — dictionary ची शक्ती प्रत्यक्ष अनुभवायला हेच project पुरेसे.",
        code: `sentence = "चहा कॉफी चहा दुध कॉफी चहा"
count = {}
for w in sentence.split():
    count[w] = count.get(w, 0) + 1
print(count)`,
        codeLanguage: "python",
        output: `{'चहा': 3, 'कॉफी': 2, 'दुध': 1}`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ नसलेली key bracket ने प्रवेश — d[\"job\"] जेव्हा \"job\" नाही तेव्हा KeyError येतो. आधी in ने तपासा किंवा get() वापरा.\n✗ get() ला default न देणे — जेव्हा key नसते तेव्हा None मिळतो आणि कधीकधी तो शांतपणे निकाल बिघडतो. मूल्याला अर्थ नसेल तर default द्या, उदा. d.get(\"k\", 0).\n✗ mutable key — list हा key न देता येतो पण TypeError: unhashable type: 'list' येतो. key नेहमी immutable हवा — string, int, tuple.\n✗ update चा गैरवापर — update() मधून समान key आल्यास value बदलते; बदलायचा नसेल तर वेगळा निर्णय घ्या. जोडण्याचा हेतू असेल आणि existing value टिकवायची असेल तर setdefault() योग्य.\n✗ nested मध्ये चुकीचा प्रवेश — आंतरिक आधीच अस्तित्वात नसलेल्या key वर गेल्यास KeyErrorच. दोन्ही स्तरांवर खात्री करा.\nKeyError नको असेल तर याच तीन सुरक्षा सवयी — in, get(), immutable key — ठेवा.",
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "get() ने KeyError टाळता येते आणि default — उदा. d.get(\"k\", 0) — मिळतो; in operator key चा अस्तित्व तपासतो (key in dict). हे दोन्ही safe access चे मार्ग.\nkey नेहमी immutable — string, int, tuple. key lookup O(1) वेळेत होते, म्हणून dict मध्ये access जलद. दोन्ही key अनोखे असतात, नंतरचा value जिंकतो.\nitems() ही प्रत्येक जोडी (key, value) देते; keys(), values(), items() तिन्ही methods लूपसाठी असतात. dict comprehension ({k: v for ...}) एका ओळीत शब्दकोश बनवते.\nकॉपी करण्यासाठी copy() shallow copy देते; खोल बदल हवे असतील (nested values) तर copy.deepcopy विचारात घ्या. Python 3.7+ मध्ये dict order नोंदवत राहते — क्रम स्थिर राहतो. defaultdict (collections मधून) also counting ला उपयोगी पडतो.",
      },
    {
        title: "सखोल अभ्यास — dict चे अंतरंग काम",
        content: "dict च्या अंतर्गत कामाची समज निर्माण होऊ द्या. dict हे key-value चे अव्यवस्थित नकाशन आहे — प्रत्येक key ची value लिंक केलेली. रचना म्हणजे symbol table सारखी — key शोधायचे, value साठवायची. हे आतून hash table ने साकारते — क्रिया वेगवान असते.\nhash चे गुपित — key चे hash निघते आणि त्यावरून खास जागा ठरते — म्हणून search झटपट, क्रियांची संख्या मर्यादित. यामुळे मोठ्या data मध्येही dict त्वरित उत्तर देते — यादीत झालेल्या सर्व elements तपासणीपेक्षा वेगाने.\nkey चे नियम बंधनकारक — key immutable हवे — string, number, tuple योग्य; यादी किंवा dict key होऊ शकत नाही कारण hash बदलता येते. मूल्य कोणतेही असू शकते — त्या नियमाचा अर्थ हा की mutable data value म्हणून ठीक.\nक्रम जपला जातो — Python च्या आधुनिक आवृत्त्यांमध्ये dict जोडलेल्या क्रमानेच बातमी द्यायची. हे गुणधर्म माहीत असल्यास त्याची क्रमवारीची अपेक्षा करता येते. जुनी आवृत्ती नसेल तर residual रचना तत्कालीन हा गुणधर्म उपयोगी असतो.\nduplicate key — नंतरची value जिंकते — आधीची length मिटवली जाते. हा नियम म्हणजे dict हीही आपोआप unique key धारण करणारी रचना. कोणती key आधी आली हे हरवते — शेवटची अवस्था राहते.\nमोठ्या extension व महत्व — dict ही Python मधील सर्वांत वापरलेली संरचना — function ला named argument, class attributes, module namespaces सर्व आत dict रचनेत असतात. हे समजल्यावर dict शिकण्याची गरजच वाढते.",
      },
      {
        title: "वाचन, लेखन आणि methods — dict साधने",
        content: "dict च्या वाचन-लेखन आणि methods चा विस्तार पाहू. value मिळवण्याचे दोन मार्ग — d[key] थेट — key नाही तर KeyError; d.get(key) सुरक्षित — key नाही तर None परत. get मध्ये default पण देतात — d.get(key, 0) — मिलनसार वर्तन.\nजोडणे व बदलणे — d[key] = value — key असेल तर मूल्य बदलते, नाही तर नवीन जोड. ही सर्वांत साधी क्रिया — statement सरळ. दोन dict जोडण्यासाठी update किंवा | operator — दुस-याच्या entries विलीन होतात.\nвъzbieg — keys(), values(), items() तीन दृश्ये देतात. keys सर्व नावे, values सर्व मूल्ये, items (key, value) जोड्या. हे दृश्ये dynamic असतात — dict बदलली की दृश्येही बदलते; लूपमध्ये ही रचना सोयीची.\nसमावेश तपासणी — in operator key तपासतो — if k in d: ही झटपट क्रिया — hash मुळे वेगवान. value तपासणी in values() करता येते पण ती संथ — प्रत्येक value पाहणे.\npop काढून परत देते — key नाही तर KeyError किंवा default. popitem शेवटची entry काढून देते — stack सारखी. clear सर्व काढते; copy प्रत, len आकार. हे सर्व methods dict चा पूर्ण toolbox.\nसंयोजन — comprehension {k: v for ...} नवीन dict तयार करते — filter आणि transform दोन्ही. setdefault — key नसेल तर default जोडतो. या देवाणघेवाणींचं वाचताना प्रत्येक method output तपासा — स्मृती घट्ट.",
      },
      {
        title: "नेस्टेड dict — जटिल data रचना",
        content: "dict ची खरी ताकद नेस्टेड रचना सांभाळण्यात आहे. एका dict मध्ये value म्हणून दुसरी dict — कंपनी create structure — departments मध्ये employees — ही रचना संपूर्ण संस्था दर्शवण्यास सक्षम. समजण्यासाठी उदाहरण फोल्डर आणि subfolder प्रमाणे.\nखोल श्रेणी वाचन — d['dept']['team']['member'] — क्रमाने आत जावे लागते. प्रत्येक पातळीवर key चुकल्यास KeyError — सुरक्षितपणे nivo नाही. get चा वापर nested वाचण्यास सुखकर; परंतु खोल रचना absentee data मध्ये गोंधळ करते.\nउद्देश — नेस्टेड dict स्वच्छ संघटना देते — एकाच place मध्ये संपूर्ण project dc data टिकवलेला. यादी आणि dict मिश्रण — मूल्ये काहीही — यादी, dict, tuple — सर्व टिकते. ही लवचिकता data modeling ची शक्ती असते.\nनेस्टेड रचना बदलणे — नवीन subentry जोडणे — d['dept']['team']['new_member'] = 'नाव' — सरळ. काढणे — pop आतल्या पातळीवर; गहाळ key चा सापळा टाळण्यासाठी exists तपासा.\nसामान्य गोंधळ — deep copy आणि shallow copy — copy ने आतील dict शेअरच राहते; deepcopy ने सर्व खोल प्रत. mutation गणनेत गोंधळ टाळण्यासाठी deepcopy चा वापर योग्य.\nनिरीक्षण अर्थ — dict मध्ये आणखी dict, आणि त्यात यादी — असा जटिल डेटा वाचताना क्रम महत्त्वाचा — top-level key आधी, मग आतला. हा सराव नेस्टेड रचनेची प्रभुता वाढवतो — JSON data पाठवताना अशीच रचना असते.",
      },
      {
        title: "चुका आणि उपाय — dict सापळे",
        content: "dict च्या नेहमीच्या चुकांचे निराकरण पाहू. पहिली चूक — key नसलेली value देताना KeyError — d['महास'] — key नाही असल्यास ढकलता येत नाही. उपाय — get मूल्य व default, किंवा in तपासून मग वाचणे. सुरक्षित access नेहमी अभिमानाने वापरा.\nदुसरी चूक — mutable key वापरणे — यादी key दिली तर TypeError — hashable नाही. उपाय — key mutable रचना नियमाने द्या किंवा tuple रूपांतर करून key वापरा. हे नियम नेहमीचे आणि निश्चित.\nतिसरी चूक — dict बदलत असताना loop — for k in d: आणि मग d pop — runtime error — iteration बदल शक्य नाही. उपाय — list(d.keys()) ची प्रत बनवून loop, किंवा नवीन dict गोळा करा — बदल सुरक्षित.\nचौथी चूक — key order गैरसमज — जुन्या आवृत्त्यांमध्ये क्रम नसल्याची समज — downloadable versions मध्ये क्रम असतो. परंतु नवीन कोड मध्ये क्रमावरplay अवलंबून न राहणे उत्तम — क्रम हवा असेल तर sorted() मध्ये keys वापरा.\nपाचवी चूक — मूल्य बदलायचे असेल तर कॉपी न करता reference पाठवणे — function मध्ये dict संदर्भाने जाते — बदल बाहेर दिसतात. इच्छित नसेल तर copy() किंवा deepcopy() पाठवा — परिणाम नियंत्रित.\nसहावी चूक — पुनरावृत्ती update — दोन dict विलीन करताना duplicate key मागील जिंकते; हे अपेक्षित नसल्यास क्रम विचारात घ्या. ही प्रत्येक चूक अभ्यासाने टाळता येते — output तपासा.",
      },
      {
        title: "सराव — dict कार्ये",
        content: "dict ची कार्ये करा. कार्य एक — विद्यार्थ्यांच्या गुणांचा dict ठेवा — नाव key, गुण value — प्रत्येकाच्या गुणांची बेरीज व सरासरी काढा.\nकार्य दोन — word frequency — वाक्यातील शब्द मोजा — प्रत्येक शब्द key, count value — get(key, 0) वापरून count वाढवा.\nकार्य तीन — टेलिफोन निर्देशिका — नाव key, क्रमांक value — नवीन संपर्क जोडणे, संपर्क शोधणे, संपर्क काढणे — तीन क्रिया functions मध्ये.\nकार्य चार — grouping — वस्तूंच्या किमतींवरून श्रेणी — 100 च्या वर नाही — dict मध्ये category key व value round numbers.\nकार्य पाच — nested update — कंपनी रचना — विभाग, संघ, कर्मचारी — नवीन कर्मचारी जोडा, कर्मचारी काढा — nested वाचन करा.\nकार्य सहा — invert — dict चा key-value उलटा करा — credit dict summarize — value संदर्भाशिवाय duplicate असल्यास नियम सांगा.\nकार्य सात — dashboard — दुकानाची उत्पन्न रचना — दिवस key, विक्री value — सर्वाधिक विक्रीचा दिवस शोधा — max व items वापरून.\nप्रत्येक कार्य output तपासून करा — अपेक्षित निकाल आधी लिहा. dict methods वापरून निवड केल्यास कोड लहान आणि स्वच्छ राहतो — हीच dict सह दैनंदिन सवय.",
      },
      {
        title: "मुलाखतीतील प्रश्न — dict संभाषण",
        content: "dict चे मुलाखतीतील प्रश्न असे असतात. पहिला — list व dict मध्ये फरक? उत्तर — list index ने ordered; dict key ने वेगवान search, unordered (आधुनिक Python मध्ये क्रम जपला). निवड — order व duplicate हवे तर list; lookup हवे तर dict.\nदुसरा — get विरुद्ध [key]? उत्तर — get safe — default परत, [key] error देतो. जेव्हा key हवातर error आवश्यक असेल तेव्हा धोका वाटला तर safe get उत्तम.\nतिसरा — key मर्यादा — यादी key का नव्हे? उत्तर — mutable hash नाही; string, number, tuple immutable — key योग्य. हा नियम set घटकांच्या नियमासारखाच.\nचौथा — dict comprehension शक्य आहे का? उत्तर — होय — {k: v for k, v in ...} — filter व transform एका ओळीत. नवीन dict तयार करण्याची संक्षिप्त रचना.\nपाचवा — update विरुद्ध | operator? उत्तर — update मूळ dict विलीन करते; dict1 | dict2 नवीन एकत्र करते — मूळ अपरिवर्तित. दोन्ही duplicate key वर उजवी जिंकते.\nसहावा — items() का वापर? उत्तर — लूपमध्ये key आणि value दोन्ही हवे; unpacking ने सोयीचे. बदल करायलाही नवीन entries stooge नव्हे — value बदलता येते.\nसातवा — performance — dict lookup झटपट का? उत्तर — hash table; key च्या hash वरून जागा — O(1). data मोठं असलं तरी वेग जवळपास स्थिर राहतो.",
      },
    {
        title: "विस्तार — dict comprehension आणि संयोजन",
        content: "dict comprehension ही एका ओळीत नवीन dict बनवणारी रचना — {key: value for item in iterable}. यादीतून key-value जोड्या सिद्ध होतात — उदा. {w: len(w) for w in names} — नावाची लांबी मूल्य. filter सह अट नंतर — {k: v for k, v in data if v > 0}.\nहे संशयी रूप शक्तिशाली — मोठ्या data वर transform व filter एकाच ओळीत — वाचनीयता राहते. {k: v.upper() for k, v in d.items()} — प्रत्येक value बदलणे. अशा रचना बहुतेक आधुनिक कोड मध्ये वापरल्या जातात.\ndict चे संयोजन — दोन dict विलीन — d1 | d2 novas तयार; d1.update(d2) मूळ बदल. duplicate key वर उजवी जिंकते. आता हा नियम स्पष्ट — विलीन करताना क्रम आणि अपेक्षा ध्यानात ठेवा.\nडेटा रूपांतरण — column labels बदलणे, units रूपांतरण, grouping — संयोजन साधने म्हणजे त्वरित संघटना. जिथे key-value ची जोडणी संग्रहातून होते तिथे comprehension सोयीस्कर.\nएकत्रित अपेक्षा — dict व set आणि list यांची मिश्रण रचना एकाचाही ठिकाणी — डेटा modeling करताना योग्य रचना निवडा — भविष्यात data वाचण्यास सोपे राहते. हे प्रश्न आधी विचारा — काय key, काय value — मग रचना.\nही तंत्रे प्रयोगाने पक्की करा — लहान data वर comprehension आणि merge तपासा; output नियम ठरवा; मोठ्या data वर आधी गणना लाचार न राहता ही तंत्रे नित्य सवयीत आणा.",
      },
      {
        title: "रोजची दृश्ये — dict वास्तविक वापर",
        content: "dict चे रोजचे वापर कसे घडतात ते पहा. सेटिंग्ज — configuration data — key म्हणून 'theme', 'font', 'volume' — dict मध्ये ठेवली — ऍपची सर्व अवस्था एका ठिकाणी. बदल — d['volume'] = 8 — सरळ बदलण्याची क्षमता.\nमॅपिंग — city → code, code → पूर्ण नाव — अनेक government checks या dict मध्ये. correlation किंवा equivalent नकाशितल्या जातात — Python चा default मार्ग म्हणजे dict-based mapping.\ncache आणि memoization — महाग गणनेचे निकाल dict मध्ये जपले — पुनरावृत्ती गणना टळते; key input, value output. वेग मोठ्या प्रमाणात वाढतो — computational cost कमी होते.\nडेटाबेस rows → dict — प्रत्येक column label key व value ठेवल्यास वाचन context मध्ये स्पष्ट. JSON API data सर्व dict रचनेतच येतात — Python script दरम्यान थेट वापरता येते.\nword frequency, grouping — बहुतांश विश्लेषणात dict हे प्रमुख साधन — count व group साठी key value. मजकुराचा अभ्यास, बाजार विश्लेषण, मतदान निकाल — सर्व key-value मॅपिंगचे प्रकार.\nआणखी वापर — अधिकार, स्थान mapping, SKU, भाषा कोड — प्रत्येक ठिकाणी नेमका key-value संबंध. dict ही Python ची मूलभूत data एकक असल्याने असे many वापर नित्य आढळतात — प्रत्यक्ष उदाहरण output सह करून तपासा.",
      },
      {
        title: "संपूर्ण सार — dict चे गाभ्याचे नियम",
        content: "dict चा संपूर्ण सार एकत्र आता पहा. dict — key-value मॅपिंग; key immutable, unique; value काहीही मूल्य. रचना {} किंवा dict(); empty dict मध्ये key जोडणे — d['k'] = v.\nवाचन — d[key] थेट (KeyError) किंवा get सुरक्षित; समावेश — in key. लेखन — assignment नवीन किंवा बदल; update/| विलीन. items(), keys(), values() दृश्ये — loop व unpacking साठी.\nकाढणे — pop (default सह), popitem, clear. copy प्रत, len आकार. comprehension {k: v for ...} नवीन रचना. nested dict जटिल data — खोल वाचन क्रमाने.\nचुका — KeyError टाळण्यासाठी get/in; mutable key नको; बदलताना loop टाळा; function संदर्भाने जाते म्हणून copy हवी तर द्या.\nवेग — lookup O(1) hash मुळे — मोठ्या data मध्येदेखील वेगवान. हे सार लक्षात ठेवले की dict चा वापर स्वच्छ, वेगवान आणि स्पष्ट होतो — हीच Python ची heart रचना आहे.",
      },
    {
        title: "अंतिम आठवण — dict लक्षात धरा",
        content: "dict key-value मॅपिंग — search वेगवान O(1). key immutable unique; value काहीही. get सुरक्षित वाचन; in समावेश; items लूप. update विलीन; pop काढून परत; clear रिकामे. copy शीर्ष प्रत — deepcopy खोल. comprehension नवीन dict. चुका टाळा — KeyError, mutable key, बदलताना loop.",
      },
    {
        title: "शेवटची टीप — dict वापर",
        content: "dict वापरताना तीन टीपा — get सुरक्षित वाचन; items लूप व unpacking; update विलीन व duplicate जिंकणे. नेस्टेड रचना deepcopy ने प्रत; लूपमध्ये बदल प्रतसह. हे पुरे कोड स्वच्छ ठेवते.",
      },
    {
        title: "नेस्टेड माहिती — dict आत dict",
        content: "नेस्टेड dict म्हणजे value म्हणून आणखी dict — ही रचना कोणत्याही जटिल डेटाचे प्रतिक तत्त्व आहे. वर्गाची माहिती — प्रत्येक विद्यार्थ्याची नोंद नाव key आणि त्या नोंदीची माहिती आंतर dict — विषय, गुण, उपस्थिती. म्हणून संपूर्ण संस्थात्मक डेटा एका dict मध्ये मावतो.\nवाचन क्रम — बाहेरची key, मग आतील — d['राहुल']['गणित'] — दोन स्तर. प्रत्येक स्तरावर संधीची तपासणी हवी — की गहाळ असल्यास KeyError. सुरक्षितपणे खोल डेटा वाचण्याची पद्धत get च्या सळ्या वापून — अथवा try/except ने error साफ.\nलेखन बदल — आतील value नवीन — d['राहुल']['परीक्षा'] = 45 — मागील value बदलतो; नसलेले key जोडतो. एकाच assignment ने आतील रचना सुधारता येते — nested व्यवस्थापन सोपे.\nकाढणे — आतील entry pop ने — d['राहुल'].pop('परीक्षा') — सरळ. खोल गहाळ तपासण्यासाठी आधी keys — प्रत्येक स्तरावर in — मग काढा — error टळतो.\ncopy तर नेहमी deep — नेस्टेड data बदलताना copy() फक्त शीर्ष पातळीची की; आतली dict शेअर राहते. deepcopy ने संपूर्ण स्वतंत्र — mutation टाळण्यासाठी हा नियम अत्यावश्यक.\nhien आणखी जटिलता — dict आत यादी, यादी आत dict — क्रमाने वाचन आणि unpacking कामी. ही पद्धत JSON data आणि API response सोबत थेट संबंध जोडते — खरा डेटा rural तवर याच way मध्ये असतो. स्वतः small пример बनवा — नाव, विषय, गुण — nested वाचन, बदल, काढणे सराव करा.",
      },
    ],
    practiceQuestions: [
      "dictionary key-value कशी ठेवतो?",
      "get() का वापरतात?",
      "नसलेली key access केल्यास?",
      "तुमच्या आवडत्या चित्रपटाचा dict बनवा (नाव/वर्ष/दिग्दर्शक)",
    ],
    quiz: [
      {
        question: "Dictionary मध्ये data कसे साठवले जाते?",
        options: ["key-value pairs", "index-based", "स्ट्रिंग", "list मध्ये"],
        correct: 0,
      },
      {
        question: "Dictionary कशा brackets मध्ये?",
        options: ["[]", "()", "{}", "<>"],
        correct: 2,
      },
      {
        question: "नसलेली key — केला सेफ access?",
        options: ["d[k]", "d.get(k)", "d.read(k)", "d[k]?"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "एक dict किंमतीचा — ज्यात 50 च्या खालीचे items print करा (items() वापरून).",
      starterCode: `prices = {"पुस्तक": 150, "पेन": 10, "खोडरबर": 5, "बॅग": 400}
for item, price in prices.items():
    if price < 50:
        print(item, price)`,
      expectedOutput: "पेन 10\nखोडरबर 5",
    },
    interviewQuestions: [
      "dictionary vs list कधी कोणता?",
      "KeyError टाळण्याचे मार्ग?",
      "nested dictionary काय?",
    ],
    related: ["python-dict-methods", "python-sets", "python-lists"],
    prev: "python-sets",
    next: "python-dict-methods",
  },

  {
    slug: "python-dict-methods",
    categoryId: "python",
    title: "Dictionary Methods",
    marathiTitle: "Dictionary मधील सामान्य methods",
    level: "intermediate",
    minutes: 12,
    summary: "keys, values, items, get, update, pop — dict हाताळण्याचे मार्ग.",
    levelLabel: L3_LABEL,
    sections: [
      {
        title: "Dictionary मधील सामान्य methods म्हणजे काय?",
        content: "keys, values, items, get, update, pop — dict हाताळण्याचे मार्ग.\ndictionary मध्ये data हाताळण्यासाठी अनेक तयार methods आहेत — या धड्याचा केंद्रबिंदू तेच.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },

      {
        title: "तयार methods — keys, values, items",
        content: "dictionary मध्ये data हाताळण्यासाठी अनेक तयार methods आहेत — या धड्याचा केंद्रबिंदू तेच. तिन्ही मुख्य:\nkeys() सर्व key देते, values() सर्व value देते, items() प्रत्येक (key, value) जोडी देते.\nहे तिन्ही view objects परत करतात — list नाही, पण list() ने list मध्ये बदलता येते (जसे code मधील print(list(d.keys()))). view जिवंत असते — dict बदलताच तसेच त्या view मध्येही बदल दिसतो.\nफोनबुकचे पान उलटा: keys = सगळी नावे, values = सगळे नंबर, items = नाव-नंबरच्या जोड्या. हीच या methods ची उपमा — प्रत्येक dictionary program साठी हीच त्रयी आधार.\ncode मध्ये d = {\"a\": 1, \"b\": 2} वर: keys ['a', 'b'], values [1, 2], items [('a', 1), ('b', 2)] — items ची प्रत्येक जोडी tuple रूपात.",
        code: `d = {"a": 1, "b": 2}
print(list(d.keys()))
print(list(d.values()))
print(list(d.items()))`,
        codeLanguage: "python",
        output: `['a', 'b']
[1, 2]
[('a', 1), ('b', 2)]`,
      },
      {
        title: "get(), update(), pop() — प्रवेश, मर्ज, काढणे",
        content: "get() सुरक्षित lookup: d.get(\"z\", 0) — key अस्तित्वात नसल्यास KeyError न येता default (0) मिळते. म्हणून get() चे फल दोन — तयार कोड किंवा default.\nupdate() मर्ज करते: d.update({\"b\": 2, \"c\": 3}) या नवीन जोड्या d मध्ये जोडते; समान key आल्यास value बदलते. output: {'a': 1, 'b': 2, 'c': 3}.\npop(key) काढते आणि काढलेली value परत देते: removed = d.pop(\"a\") → 1; आता d = {'b': 2, 'c': 3}. \"काढलेला: 1\" हाच pop चा उपयोग — नोंद निघाली आणि तिचे मूल्यही हातात.\nget देतो, update भरतो, pop काढून देते — या तिन्ही रोजच्या कामांसाठी पुरेशा. output प्रत्येक पायरीवर तपासा.",
        code: `d = {"a": 1}
print(d.get("z", 0))          # अनुपस्थित → 0

d.update({"b": 2, "c": 3})
print(d)

removed = d.pop("a")
print("काढलेला:", removed)
print(d)`,
        codeLanguage: "python",
        output: `0
{'a': 1, 'b': 2, 'c': 3}
काढलेला: 1
{'b': 2, 'c': 3}`,
      },
      {
        title: "pop विरुद्ध del विरुद्ध popitem",
        content: "काढण्याचे तीन मार्ग ध्यानात ठेवा. pop(key) — जोडी काढून तिची value परत देते; किंवा default सहित: d.pop(key, \"नाही\") key नसल्यास error टाळून default देते.\ndel d[key] — फक्त काढते, value कुठेही परत मिळत नाही. \"काढून टाकायचे आहे, मूल्याची गरज नाही\" तेव्हा del वापरा.\npopitem() — शेवटची जोडी (dict मधील क्रमवार स्थितीत शेवटची) काढते आणि (key, value) tuple परत देते.\npop म्हणजे \"काढा आणि घ्या\", del म्हणजे \"फक्त काढा\", popitem म्हणजे \"शेवटची काढा\". हे तिन्ही बारकावे — आवश्यकतेनुसार निवडता येतात.",
      },
      {
        title: "setdefault — \"असेल तर ठीक, नसेल तर सेट\"",
        content: "setdefault(key, default) हे if चा संक्षेप: key असेल तर तिची value परत मिळते आणि kाहीही बदलत नाही; नसेल तर default value सह नवीन जोडी तयार होते आणि तीच परत मिळते.\nget() आणि setdefault() मधील फरक तोच: get() default परत देते पण तो dict मध्ये टाकत नाही; setdefault() टाकते. counting मध्ये हा फरक महत्त्वाचा.\nउदा. प्रत्येक शहराची पहिली नोंद सेट करणे: data.setdefault(city, []) मध्ये आधीच यादी असेल तर तोच जोडतो, नसेल तर रिकामी यादी तयार होते — पुढे append करता येते.\n\"आधी अस्तित्व तपासा, मग default देणे\" — सेटअप करतानाच्या रोजच्या कामाचा हाच सोपा मार्ग. बरेच counter वा समूह साचे यावरच उभे असतात.",
      },
      {
        title: "वास्तविक उदाहरण: विक्री रिपोर्ट",
        content: "दुकानाची विक्री रिपोर्ट एका ओळीत: sales = {\"चहा\": 45, \"कॉफी\": 80, \"लस्सी\": 120}. एकूण विक्री sum(sales.values()) — सर्व मूल्ये मिळून 245.\nसर्वात जास्त विकलेला पदार्थ शोधणे हा अभिजात वापर: top_item = max(sales, key=sales.get). max() ने sales ची key मुल्ये सरळ घेतली तर शब्दांची शाब्दिक तुलना होते (लस्सी < कॉफी...); key=sales.get दिल्यास विक्री मूल्यांनुसार (45, 80, 120) तुलना होते आणि सर्वाधिक मूल्याची key येते.\noutput: सर्वात विकला: लस्सी 120. sum() आणि max() या दोन्ही methods च्या साहाय्याने data analysis सुलभ होते.\nएकूण, सरासरी, सर्वात कमी/जास्त — values() वरील फंक्शन्स एका ओळीत. व्यवसाय रिपोर्ट, परीक्षा निकाल, स्टॉक मोजणी — हाच नमुना सर्वत्र.",
        code: `sales = {"चहा": 45, "कॉफी": 80, "लस्सी": 120}
print("एकूण विक्री:", sum(sales.values()))
top_item = max(sales, key=sales.get)
print("सर्वात विकला:", top_item, sales[top_item])`,
        codeLanguage: "python",
        output: `एकूण विक्री: 245
सर्वात विकला: लस्सी 120`,
      },
      {
        title: "सामान्य चुका आणि उपाय",
        content: "✗ keys() मध्ये subscript — d.keys()[0] करू नका; keys() view object list नाही, स्थान मागितले जात नाही (TypeError). प्रथम list(d.keys())[0] किंवा \"in\" ऑपरेटर.\n✗ pop नसलेली key — d.pop(\"absent\") दिल्यास KeyError. default द्या: d.pop(\"absent\", \"नाही\") — अनुपस्थितीत error टाळतो. get() प्रमाणेच.\n✗ update करताना चुकीचा structure — update(other) ला dict किंवा \"key=value\" युक्त होणारी जोडी असावी; इतर structure ने आधी बदल करा.\n✗ get() ने default dict मध्ये नाही असे समजणे — get() default फक्त हातात परत देते, dict मध्ये जोडत नाही. जोडायचे असेल तर setdefault().\nmethod ने आलेलं एकही output तपासल्यास अशा चुका त्वरित दिसतात — message वाचून ओळ पहा.",
      },
      {
        title: "Interactive: dict comprehension",
        content: "comprehension एकाच ओळीत dict बनवते: {key: value प्रत्येक item साठी}. nums = [1, 2, 3]; squares = {n: n * n for n in nums} म्हणजे प्रत्येक n साठी n → n*n जोडी.\noutput: {1: 1, 2: 4, 3: 9}. loop न लिहिता संपूर्ण शब्दकोश तयार होतो.\ncomprehension चा उपयोग — संख्या किंवा शब्द मोजण्यापासून transform सर्व कामांत. शब्द-लांबी (शब्द → लांबी), वस्तू → किंमत सारखे नकाशे एकाच ओळीत.\nस्वतः list बदलून (उदा. [1, 2, 3] ऐवजी दुसऱ्या मूल्यांनी) हे comprehension चालवा — syntax नेहमीसाठी पक्के होईल. methods आणि comprehension दोन्ही dictionary हाताळणीचे मुख्य साधन.",
        code: `nums = [1, 2, 3]
squares = {n: n * n for n in nums}
print(squares)`,
        codeLanguage: "python",
        output: `{1: 1, 2: 4, 3: 9}`,
      },
      {
        title: "महत्त्वाच्या नोंदी",
        content: "keys(), values(), items() हे जिवंत views आहेत — मूळ dict बदलल्यावर सर्व प्रवेशांमध्ये तेच बदल दिसतात; list() ने अलग copy करता येते.\nsetdefault(k, v) ही if तपासणीचा संक्षेप: key नसेल तर default सेट होतो, असेल तर तीच value राहते. counting आणि समूह साच्यांसाठी उपयुक्त.\ndict comprehension ({k: v for ...}) एका ओळीत शब्दकोश बनवते — lists, tuples पासून नकाशे तात्काळ. शब्द मोजणी सारखे काम त्यानेही शक्य.\nget() ही KeyError टाळणारी सुरक्षित lookup; pop() default सह केल्यास error संभवत नाही. methods च्या वर्तनातील हे फरकच error-free dictionary हाताळणीची गुरुकिल्ली.",
      },
    {
        title: "सखोल अभ्यास — dict methods च्या जोड्या",
        content: "dict methods ची संपूर्ण जोडी एकत्र समजून घ्या. keys(), values(), items() — तीन दृश्ये — प्रत्येकdivisible dynamic. keys नावे, values मूल्ये, items दोन्ही जोडलेली. ही दृश्ये dict ला बदलल्यावर बदलतात — ती स्नॅपशॉट नाहीत, जिवंत दृश्ये आहेत.\nमूल्ये वाचताना — d[key] थेट आणि d.get(key, default) सुरक्षित. get कधीही error देत नाही — key नाही तर default. मूल्य बदलणे — d[key] = new — ही सरळ क्रिया existing key बदलते किंवा नवीन जोडते.\nduplicate key नियम — शेवटची assignment जिंकते. हे चारही — get, keys, values, items — रोजच्या वापरात सर्वाधिक आढळतात; म्हणून प्रत्येक output मध्ये तपासा.\nupdate दोन dict विलीन करते — दुसरी जिंकते duplicate वर. setdefault दुहेरी वाचन-लेखन — key नाही तर default जोडतो आणि परत करतो — count increments मध्ये उपयुक्त.\npop काढून value परत करते — key नसेल तर default; popitem शेवटची entry काढते. clear सर्व काढतो. copy स्वतंत्र प्रत देते — nested मध्ये deepcopy हवी.\nदृश्ये व क्रिया या जोड्या — वाचन व लेखन व काढणे — dict संपूर्ण हाताळणीचा योग्य क्रम. method शिकण्याची पद्धत प्रत्यक्ष प्रयोग — प्रत्येक output बरोबर अपेक्षा लिहा मग तपासा.",
      },
      {
        title: "वास्तविक प्रकल्प — dict methods चे काम",
        content: "dict methods ने वास्तविक प्रकल्प करूया. प्रकल्प एक — शब्द गणना — वाक्यावर word count — शब्द key, count value — get(key, 0) + 1 या एका ओळीत count वाढवा. निकाल items() unpack करून छापा.\nप्रकल्प दोन — निवडणूक मतदान — उमेदवार key, मते value — update ने दुसऱ्या दिवसाची मते विलीन करा; सर्वोच्च मते max व items ने शोधा.\nप्रकल्प तीन — inventory व्यवस्था — वस्तू key, बचत value — विक्री झाली तर popitem ने साठा काढा किंवा value -= ने बदला; out of stock entries keys द्वारे शोधा.\nप्रकल्प चार — cache बांधणी — आधारित input वर महाग गणना — मूल्य dict मध्ये जपा — दुसऱ्या वेळी थेट वाचा (get) — नंतर गणना करा — speed वाढते.\nप्रकल्प पाच — अडवणूक साफ — त्याच areas मधून duplicate काढा — एकत्रित grouping — dict {category: []} मध्ये items व keys वापरून श्रेणी कॅटेगराइ्ज करा.\nप्रकल्प सहा — user profile अद्यतन — nested dict मध्ये profile — update ने नवीन fields जोडा; get ने missing fields default; pop ने जुने remove. सर्व method एकत्र वापरा.\nप्रत्येक प्रकल्प छोटा ठेवा — 15 ओळींपेक्षा लहान — output प्रत्येक पायरीनंतर semicolon. अशा प्रकल्पांनी dict methods ने कामांची नित्य सवय लागते — पुढील मोठा कोड सहज लिहिता येतो.",
      },
      {
        title: "संयोजन — dict methods आणि loop",
        content: "dict methods loop सोबत कसे जुळतात ते पहा. keys() ने loop — for k in d: म्हणजे keys नेच चालणे — नावे वाचणे सोपे. values() ने मूल्ये, items() ने दोन्ही — unpack वाचन स्पष्ट — for k, v in d.items().\nवाचन-लूपमध्ये बदल — मूल्य बदलता येते — d[k] = new अशा लूपमध्ये शक्य; पण संरचना (entries जोडणे/काढणे) लूपमध्ये error देते. सुरक्षित मार्ग — list(d.keys()) प्रत घेऊन loop — बदल सुरक्षित होतो.\nsorted करून loop — sorted(d) किंवा sorted(d.items()) — key आधारित किंवा value आधारित क्रम. key argument ने — sorted(d.items(), key=lambda x: x[1]) — value क्रमांकाने क्रमवार — निकाल रिपोर्टिंगचा मार्ग.\ncomprehension सह संयोजन — {k: v for k, v in items() if condition} — filter व transform. {k: process(v) for ...} — मूल्य बदल. तीन methods — keys, values, items — सगळ्या रचनांचा आधार.\nenumerate व items — index आणि key दोन्ही — for i, (k, v) in enumerate(d.items()): — एकाचाथी दोन्ही क्रम — ट्रेसेबिलिटी वाढते. अशा संमिश्र loop dict डेटाची प्रदक्षिणा पूर्ण करते.\nदृश्ये dynamic — loop दरम्यान dict बदलल्यास दृश्येही बदलतात — गोंधळ टाळण्यासाठी प्रत जरूर. ह्या संयोजनांची सवय output सह लावा — वाचन-लेखन क्रिया नेमकी वेळी.",
      },
      {
        title: "चुका आणि साहस — dict methods debugging",
        content: "dict methods debugging च्या चुका ओळखा. चूक एक — KeyError — दृश्ये किंवा [key] वाचन वेळी key नाही — उपाय get/in. प्रत्येक वाचन आधी अस्तित्व तपासणे ही सुरक्षित सवय — किंवा default देणे.\nचूक दोन — मूल्य बदलायचे असल्यास iterate and remove — RuntimeError. उपाय — items स्नॅपशॉट व loop — बदल सुरक्षित; किंवा comprehension ने नवीन dict गोळा करा.\nचूक तीन — mutable default — dict.get(key, []) ने नवीन यादी default म्हणून — mutations शेअर होऊ नयेत — प्रत्येक get नवीन default देणे योग्य. setdefault वापरतानाही ही जागरूकता.\nचूक चार — nested KeyError — खोल रचना d['a']['b'] — आतला key नाही तर error. उपाय — प्रत्येक पातळी get(char) किंवा try/except — क्रमाने सुरक्षित वाचन.\nचूक पाच — copy गोंधळ — d2 = d म्हणजे reference — बदल सगळीकडे. copy() शीर्ष पातळीचा — nested मध्ये deepcopy हवी. mutation नियंत्रणासाठी दिशा स्पष्ट करा.\nचूक सहा — keys पुन्हा मोजणे — len(d) थेट संख्या — keys() मध्ये पुन्हा गणना नको. items() व values() दृश्ये dynamic — memory वाढ नको.\nया चुका लक्षात ठेवल्या तर dict methods वापर सुरक्षित होतो — प्रत्येक त्रुटी संदेश वाचा — error मुळे भाग स्पष्ट होतो.",
      },
      {
        title: "सराव — dict methods कार्ये",
        content: "dict methods ची कार्ये करा. कार्य एक — शब्दकोशातील नावे keys(), मूल्ये values(), जोड्या items() — तिन्ही छापा आणि प्रकार तपासा.\nकार्य दोन — ठोकQtयापूर्वी मूल्य update — विद्यार्थ्यांच्या गुणांत जोडा — d['राहुल'] += 5 — नवीन value तपासा.\nकार्य तीन — मध्यम data cache — function input वर output जपणे — get ने आधी तपासा, नंतर गणना — दुसऱ्या वेळी speed दाखवा.\nकार्य चार — item count — दुकानातील साठा — pop ने बाहेर गेलेली वस्तू; missing key उपाय default — out of stock दर्शवा.\nकार्य पाच — merge — दोन दुकानांचा stock d1 | d2 आणि d1.update(d2) — दोन्ही निकाल तुलना — मूळ अपरिवर्तित कसे राहते ते दाखवा.\nकार्य सहा — setdefault सह grouping — श्रेणी नुसार वस्तू — d.setdefault(cat, []).append(item) — एका ओळीत grouping.\nकार्य सात — सर्वात मोठे मूल्य — max(d.values()) आणि ते मूल्य असलेली key — items व unpacking वापरून करा.\nप्रत्येक कार्य output सोबत — अपेक्षित उत्तर आधी लिहा — जुळल्यावर पुढील कार्य करा. चुकत असल्यास method पुन्हा वाचा — प्रत्येक चूक पुढील पाया घट्ट करते.",
      },
      {
        title: "मुलाखतीतील प्रश्न — dict methods संभाषण",
        content: "dict methods चे मुलाखतीतले प्रश्न असे येतात. पहिला — keys(), values(), items() मध्ये फरक? उत्तर — keys नावे, values मूल्ये, items जोड्या (key, value) — तिन्ही dynamic दृश्ये; loop मध्ये उपयोग वेगवेगळे.\nदुसरा — get विरुद्ध setdefault? उत्तर — get फक्त वाचन; setdefault key नसेल तर default सेट करून वाचतो. setdefault grouping व count मध्ये उपयोगी.\nतिसरा — update विरुद्ध |? उत्तर — update मूळ बदलते; | नवीन dict; दोन्ही duplicate वर उजवी जिंकते. मूळ जपायचे असेल तर | वापरा.\nचौथा — pop विरुद्ध popitem? उत्तर — pop key ने काढून value; popitem शेवटची entry. पुढच्या होणाऱ्या missing — default दिल्यास error नसतो.\nपाचवा — items() व loop मध्ये बदल? उत्तर — संरचना बदलता येत नाही; list(d.items()) प्रतसह शक्य. बदल हवे असल्यास प्रत घेऊन loop करा.\nसहावा — copy गहिरे? उत्तर — copy shallow — nested शेअर. deepcopy deep; nested data साठी deepcopy योग्य. copy.deepcopy वापरून खोल प्रत.\nसातवा — performance बद्दल — lookup O(1) — hash. मोठ्या data मध्ये dict मूल्य search झटपट. ही उत्तरे लक्षात ठेवा — प्रत्येकासोबत छोटे उदाहरण सांगा.",
      },
    {
        title: "विस्तार — dict view ची जिवंत रचना",
        content: "keys(), values(), items() ही दृश्ये जिवंत असतात — ती स्थिर copy नाहीत. dict जशी बदलते तशी दृश्ये स्वयंचलित बदलतात — म्हणून एकदा कीस स्नॅपशॉट म्हणून घेऊन data वाचल्यास जुनी अवस्था दिसते. हे वर्तन जाणून ठेवणे आवश्यक आहे — mutation आणि view संदर्भात गोंधळ टाळण्यास महत्त्वाचे.\nदृश्ये iteration शिवाय — len, in, list() रूपांतरण — सर्व शक्य — दृश्ये औपचारिक sequences सारखी वागतात परंतु असतात खरं view. सादृश्य — एका खिडकीच्या बाहेरची दृश्ये — बाहेर बदल बदल दिसतो.\nजर दृश्यातून नवीन स्वतंत्र यादी हवी असेल — list(d.keys()) — ती स्थिर प्रत; ती noun बदलत नाही. सॉर्टिंग, metric, फेरी — अशा वेळी प्रत हवी — list() रूपांतरण हा मार्ग.\nचेतावनी — दृश्ये loop मध्ये वापरताना dict न बदलणे — n बदलाला RuntimeError येऊ शकते. प्रत घेऊन काम करा — सुरक्षित आणि स्पष्ट. हा नियम view चा सर्वांत महत्त्वाचा धडा.\nप्रत्येक view चा प्रयोग करा — मूळ dict बदलल्यावर view output कसा बदलतो हे output मध्ये पहा — ही ससंवेदनशील रचना समजल्यावर dict methods च्या अनिश्चितता गेल्या.",
      },
      {
        title: "रोजचा वापर — dict methods ने काम",
        content: "dict methods रोजच्या कामात कसे येतात ते पहा. count व grouping — word frequency — get(key, 0) + 1; category grouping — setdefault(cat, []).append(item). दोन्ही रोजच्या डेटा समस्यांचा कणा.\nअनुक्रमण — रोलची यादी, संपर्क निर्देशिका, वस्तू सूची — सर्व नावं key व माहिती value. वाचन — d[key], शोध — in, व्यवस्थापन — pop/update. dictionary ही configuration ची राणी.\ncache — महाग गणनेचे निकाल जपणे — key input value output; पुन्हा आवश्यकता वेळी थेट value मिळते — computation cost घटते. performance त्वरित वाढते.\nनिरीक्षण tool — टप्पा, स्थिती, लॉग — dict मध्ये रेकॉर्ड — items() व unpacking ने छापणे; update ने नवीन state विलीन. स्वच्छ monitoring.\nJSON API data — सर्व JavaScroligt रचना dict मध्ये मिळते — API response वाचणे, नवीन entries तयार करणे — Python मध्ये dict हीच रचना मानली जाते. रोजच्या वेब कामात हे अभ्यास दिसते.\nहे सर्व वापर प्रत्यक्ष करा — लहान उदाहरण output सह — grouping, cache, config, monitoring — चार प्रकार. अशा सवयीने dict methods सामान्य tool बनतात — विचार करायला लागत नाही.",
      },
      {
        title: "अडचणी   आणि उपाय — dict methods च्या घटनांचा",
        content: "रोज येणाऱ्या अडचणींचे उपाय पहा. अडचण — item missing — get किंवा default वापरा; assignment आधी in तपासा. ही सवय KeyError कमी करते — वारंवार नाही.\nbuffer बदलताना loop — print — list(d.items()) प्रत घ्या — मग बदल करा. हीच पद्धत runtime errors टाळते आणि आपण नियंत्रित बदल करू शकतो.\nmutable default — d.get(key, []) — प्रत्येक call नवीन यादी देते — mutations share होत नाहीत. setdefault सोबत hी जप — new resource पुन्हा वापरले जात नसावे.\nnested अभिजात — खोल रचना get च्या chain ने वाचा — d.get('a', {}).get('b', default) — सुरक्षित रिकाम्यातून पुढे. ही रचना absent key व चुकीच्या प्रकारावर सुरक्षित.\nsorting value नुसार — items() + sorted lambda वापरा — पहिल्या घटकाऐवजी दुसऱ्यावर key म्हणून — sorted(d.items(), key=lambda kv: kv[1]) — वरील क्रमाने.\nmemory वाढते तर view वापरा — keys() true view — full copy नको. मोठ्या dict मध्ये ही बचत महत्त्वाची. प्रत्येक उपाय output तपासा — नियम पक्के.",
      },
      {
        title: "새 dict methods — सराव प्रश्न",
        content: "dict methods चे सराव प्रश्न घ्या. प्रश्न — get(item, default) कशासाठी? उत्तर — key नसल्याची शक्यता असताना default देणे — error टूटतो. प्रश्न — items() unpack कसे? उत्तर — for k, v in d.items(): — key व value वेगळे.\nप्रश्न — update वापर कसा? उत्तर — दोन dict विलीन — d1.update(d2) — नंतरचे entries जिंकतात; मूळ d1 बदलते. प्रश्न — setdefault grouping — key नसेल तर empty list जोडून item — एका ओळीत.\nप्रश्न — pop व default — pop(key, sentinel) — key नसेल तर sentinel परत; error टूटतो. शुद्ध अस्तित्व तपासण्यासाठी हे तंत्र कामी. प्रश्न — clear कोणतास? उत्तर — सर्व entries काढून रिकामी dict.\nप्रश्न — copy शीर्ष वा deep? उत्तर — copy shallow — value मध्ये mutable रचना शेअर; deepcopy खोल प्रत. निवड data structure नुसार. प्रश्न — keys दुबारा len? उत्तर — len(d) झटपट; दृश्ये पुन्हा मोजू नका.\nप्रत्येक प्रश्न कोड सह सोडवा — आवडले तर five lines मध्ये उत्तर द्या. output तपासा आणि नियम पक्के करा — मग पुढील प्रश्न.",
      },
      {
        title: "संपूर्ण सार — dict methods चे गाभ्याचे नियम",
        content: "dict methods चा संपूर्ण सार येथे गुंफूया. वाचन — d[key] थेट; get सुरक्षित default; in समावेश. दृश्ये — keys, values, items — जिवंत; list() ने प्रत.\nलेखन — assignment नवीन किंवा बदल; update विलीन; setdefault जोडून वाचतो. काढणे — pop value सह; popitem शेवटची; clear रिकामे. copy प्रत, len आकार.\nनियम — key immutable unique; duplicate वर नंतरची जिंकते. लूपमध्ये बदल नकार्य — प्रत घ्या. missing value सर्व get सह शमवा.\nसंयोजन — comprehension {k: v for ...}; sorted(value) lambda ने; grouped setdefault. हे सार लक्षात ठेवा — dict methods Python कोडच्या प्रत्येक कोपऱ्यात कामाला येतात. सरावाने नेहमी स्मरणात राहतात.",
      },
    {
        title: "पुनरावृत्ती — methods च्या आठवणी",
        content: "dict methods च्या आठवणींचा सार — keys, values, items दृश्ये जिवंत; list() प्रत. get safe व default; setdefault जोडून वाचन; update विलीन. pop value सह, popitem शेवटची, clear रिकामे. copy व deepcopy प्रत.\nएकाच ओळीत स्मरण — d[key] लेखन, in तपासणी, list(d) keys संग्रह. प्रत्येक नियम output तपासा — स्मृती घट्ट."
      },
    {
        title: "सारांश — methods चे खडतर वापर",
        content: "dict methods चे खडतर वापर निवडताना — setupdefault व grouping, cache व memoization, sorting मूल्यानुसार — ही काम अनेक फंक्शनांनी साधायची. ही प्रत्येक क्रिया प्रत्यक्ष उदाहरणात तपासा — कोणती method नेमकी काय करते हे ठाऊक राहते.\nउदाहरण एक — वर्गातील गुणांचे वितरण — प्रत्येक विद्यार्थ्याची दोन विषयांची गुणे items मध्ये जोडा — नंतर sorted items मध्ये max शोधा. हीच रचना रिपोर्ट बनवण्यासाठी वापरली जाते.\nउदाहरण दोन — विक्री cache — दोन दिवसांचे आकडे update ने विलीन करा — गेलेल्या दिवसाचे घटक clear ने — निकाल वाचा. संयुक्त क्रिया three methods एकत्र वापरतात.\nउदाहरण तीन — grouping — श्रेणी नुसार वस्तू setdefault(cat, []).append(item) — एका ओळीत groupation — नंतर categories keys() — प्रत्येक cat ची count len. ही शक्तिशाली रचना फार कमी ओळीत उभी राहते.\nशेवटी आठवा — कोणतीही method निवडताना वाचन हवे — get; जोडणे/बदल — assignment/update; काढणे — pop; सर्व — clear. नेमक्या हेतूनुसार निवड — कोड कमी, अर्थ स्पष्ट.",
      },
    {
        title: "संपूर्ण आठवण — dict methods चे जीवनचक्र",
        content: "dict method चा खेळ आता संपूर्ण समजून घेतल्यावर आठवण करा. सुरुवात — रिकामी dict बनवा — d = {} किंवा dict(). जोडणे — d.add नाव येथे नाही; assignment d[key] = value हेच जोडणे. वाचन — d[key] किंवा get — default सह सुरक्षित.\nतपासणी — in ने key; len ने आकार; मूल्य बदल — d[key] = नवीन — existing update. दृश्ये — keys, values, items — loop व unpacking; list() ने प्रत. काढणे — pop value सह, popitem शेवटची, clear सर्व.\nदोन dict — update मूळ विलीन; | नवीन. duplicate जिंकणे उजवीकडे. कॉपी — copy शीर्ष, deepcopy खोल. comprehension नवीन dict त्वरित.\nहे संपूर्ण जीवनचक्र लक्षात ठेवले काय dict methods चा वापर आत्मविश्वासाने होतो. या धड्याचा सार कार्यात आणण्यासाठी शेवटचा सराव — छोटा address book — नावे व दूरध्वनी — जोडणे, शोधणे, बदलणे, काढणे — चार क्रिया करा आणि प्रत्येक output तपासा.",
      },
    ],
    practiceQuestions: [
      "keys() काय देतो?",
      "update() काय करतो?",
      "आधारीत dict मधला मर्ज कसा करता?",
      "सर्वात मोठ्या value ची key कशी शोधता?",
    ],
    quiz: [
      {
        question: "dict मधल्या value ची सूची?",
        options: ["keys()", "values()", "items()", "get()"],
        correct: 1,
      },
      {
        question: "नसलेली key दिल्यानंतर default काय मिळेल (get)?",
        options: ["KeyError", "default", "None", "0"],
        correct: 1,
      },
      {
        question: "दुसरा dict मर्ज करू जोडणे?",
        options: ["merge()", "update()", "join()", "add()"],
        correct: 1,
      },
    ],
    challenge: {
      prompt: "दोन dicts मर्ज करा आणि सर्व keys दाखवा — फक्त common किंवा दोन्ही (union):",
      starterCode: `a = {"पुस्तक": 2, "पेन": 5}
b = {"पेन": 3, "खोडरबर": 4}
merged = {}
merged.update(a)
merged.update(b)
print(merged)
print("सर्व items:", merged.items())`,
      expectedOutput: "{'पुस्तक': 2, 'पेन': 3, 'खोडरबर': 4}\nसर्व items: dict_items([('पुस्तक', 2), ('पेन', 3), ('खोडरबर', 4)])",
    },
    interviewQuestions: [
      "get vs pop default?",
      "views (keys/items) live का असतात?",
      "dict.update(d1, d2) vs merge | operator?",
    ],
    related: ["python-dicts", "python-list-comprehensions", "python-sets"],
    prev: "python-dicts",
    next: "python-strings",
  },
];