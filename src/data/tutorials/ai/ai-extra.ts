import type { Tutorial } from "@/data/tutorials";

export const aiExtra: Tutorial[] = [
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
  }
];
