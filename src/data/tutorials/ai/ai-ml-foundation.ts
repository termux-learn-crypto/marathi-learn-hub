import type { Tutorial } from "@/data/tutorials";

// === AI · ML FOUNDATION — supervised/unsupervised hands-on, scikit-learn ===
// ai-project-chatbot → ml-intro-methods → ml-linear-regression → ml-logistic-regression
// → ml-cost-function → ml-gradient-descent → ml-train-test-split → ml-overfitting
// → ml-bias-variance → ml-feature-scaling → ml-evaluation-metrics → ml-cross-validation
// → ml-decision-tree → ml-random-forest → ml-kmeans → ml-hyperparameters
// → ml-scikit-learn → ml-pipeline → (ds-numpy — ai-data-science.ts)

export const aiMlFoundation: Tutorial[] = [
  {
    slug: "ml-intro-methods",
    categoryId: "ai",
    title: "Supervised, Unsupervised, Reinforcement",
    marathiTitle: "ML पद्धती — supervised, unsupervised, reinforcement — कोणती कधी वापरायची",
    level: "intermediate",
    minutes: 30,
    summary: "मशिन लर्निंग च्या तीन मोठ्या कुटुंबांची ओळख — labels असलेले (supervised), नसलेले (unsupervised) आणि अनुभवातून शिकणारे (reinforcement). प्रत्येकाची उदाहरणे, उपयोग आणि निवडीचे नियम.",
    sections: [
      {
        title: "ML पद्धती — supervised, unsupervised, reinforcement म्हणजे काय?",
        content: "मशिन लर्निंग म्हणजे प्रोग्रॅमला data मधून नियम शिकणे. पण data कसा आहे आणि नियम कसे तपासायचे यावरून ML तीन कुटुंबांत विभागला जातो.\nहा धडा supervised (उत्तरेसह), unsupervised (गट शोधणे) आणि reinforcement (खेळून शिकणे) यांची सोपी ओळख करून देतो — प्रत्येक कधी वापरायचा हे ठरवायला शिकतो.\nहे तीनच PRISM points आहेत ज्याची ओळख पुढील सगळ्या ML चाली समजण्यास आधार ठरते — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? ML पद्धती — supervised, unsupervised, reinforcement चे फायदे आणि महत्त्व",
        content: "प्रत्येक समस्या एकाच शाळेत बसत नाही — खरेदीचा अंदाज हा supervised, ग्राहक गट शोधणे unsupervised. चुकीची पद्धत निवडल्यास model चुकीचे उत्तर देतो.\nकोणती पद्धत कशी वापरायची हे शिकून तुम्ही कुठलाही dataset घेऊन पहिली पायरी निवडू शकता — हेच भारी कौशल्य आहे.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Label असलेला data असूनही unsupervised निवडणे — उत्तर मिळत असताना गट शोधणे वायफळ.\n✗ Reinforcement ला general ML समजणे — त्यात state/action/reward हे त्रिकूट लागते.\n✗ Unsupervised च्या output ची खात्री नसते — गट काहीही अर्थ देतात; माणसाला अर्थ लावावा लागतो.\n✗ Semisupervised/cold-start कडे दुर्लक्ष — कमी labels असताना unsupervised च्या मध्ये supervised मिसळणे उपयोगी.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Supervised — उत्तरेसह शिकणे",
        content: "Data मध्ये features आणि label (उत्तर) दोन्ही असते. उदा. घराचे क्षेत्रफळ (feature) आणि खरी विक्री किंमत (label).\nModel असे हजारो जोड्या पाहून अंदाज शिकतो आणि test वर तपासला जातो. output च्या स्वरूपावरून दोन प्रकार:\n· Regression — संख्या सांगतो (किंमत ५० लाख).\n· Classification — गट सांगतो (spam/नाही, मांजर/कुत्रा).\nहेच क्षेत्र सगळ्यात जास्त वापरले जाते कारण स्पष्ट उत्तराची तुलना करता येते.",
      },
      {
        title: "Unsupervised — आपोआप गट",
        content: "Labels अजिबात नसतात — फक्त features. Model data मधील नमुने पाहून गट (clusters) बनवतो.\nउदा. विक्री company च्या ग्राहकांना खर्चाच्या सवयीनुसार गटांत विभागणे. आपण सांगितलेले नसते की किती गट हवेत (ते वेगळा विषय — K-means).\nकधीकधी unsupervised हा पहिला टप्पा असतो — मोठा data छोट्या गटांत विभाजून मग गटांना labels देता येतात.",
      },
      {
        title: "Reinforcement — खेळून शिकणे",
        content: "न कोणी उत्तर देतो, न गट असतो. एजंट environment मध्ये actions घेतो आणि reward/bonus मिळवतो.\nउदा. गेम खेळणारा AI, robot कडून चालताना शिकणे, traffic control. ध्येय: एकूण reward जास्तीत जास्त करणे.\nहे शिकणे धोकादायक ठिकाणी हळू असते कारण कित्येकदा चुकूनच शिकावे लागते — self-driving मध्ये simulation ने सराव करतात.",
      },
      {
        title: "सारांश — ML पद्धती",
        content: "Label आहे → supervised (regression/classification). Labels नाहीत → unsupervised (गट). action+reward खेळ → reinforcement. आधी data पाहा, मग पद्धत निवडा. विस्तार: खाली regression–classification चा फरक आणि hands-on code येते.",
      },
    ],
    practiceQuestions: [
      "घराच्या किंमतीचा अंदाज लावताना कोणती पद्धत वापराल आणि का?",
      "चालक नसलेली गाडी ही कोणत्या पद्धतीत बसते?",
      "Spam vs normal मेसेज वेगळे करणे regression आहे की classification?",
    ],
    quiz: [
      { question: "Data मध्ये labels असतील तर कोणती पद्धत?", options: ["Supervised", "Unsupervised", "Reinforcement", "Computer vision"], correct: 0 },
      { question: "ग्राहकांना गट बनवताना कोणती पद्धत?", options: ["Unsupervised", "Supervised", "Regression", "Fine-tuning"], correct: 0 },
      { question: "गेम खेळून शिकणारा AI कोणत्या पद्धतीत?", options: ["Reinforcement", "Classification", "Clustering", "Transfer learning"], correct: 0 },
      { question: "किंमत (संख्या) सांगणाऱ्या model ला काय म्हणतात?", options: ["Regression", "Classification", "Clustering", "Optimal"], correct: 0 },
      { question: "Spam की normal हे कोणत्या प्रकारचे output?", options: ["Classification", "Regression", "Reward", "Embedding"], correct: 0 },
    ],
    related: ["ai-machine-learning", "ai-data", "ml-linear-regression"],
    prev: "ai-project-chatbot",
    next: "ml-linear-regression",
  },
  {
    slug: "ml-linear-regression",
    categoryId: "ai",
    title: "Linear Regression Hands-on",
    marathiTitle: "Linear regression — scikit-learn मध्ये पहिला अंदाज घेणारा model",
    level: "intermediate",
    minutes: 35,
    summary: "सर्वात सोपा regression model — घराची किंमत/विक्रीचा अंदाज. sklearn.linear_model.LinearRegression ने fit/predict, coefficient आणि सरळ mathematical कल्पना.",
    sections: [
      {
        title: "Linear regression — scikit-learn मध्ये पहिला अंदाज घेणारा model म्हणजे काय?",
        content: "Linear regression म्हणजे data मधील बिंदूंना सरळ रेषा(fitting) बसवणे. रेषा y = w·x + b या form ची असते.\nजर feature x वाढवला तर output y किती वाढतो — हा उतार (slope/coefficient w) आणि सुरुवात (intercept b) शिकला जातो.\nहा धडा विक्री/किंमत यांसारख्या संख्यात्मक अंदाजासाठी scikit-learn चा LinearRegression कसा वापरायचा (fit, predict, score) दाखवतो.",
      },
      {
        title: "का शिकावे? Linear regression — scikit-learn मध्ये पहिला अंदाज घेणारा model चे फायदे आणि महत्त्व",
        content: "हा सगळ्यात सोपा आणि चटकन समजणारा model आहे. सोपी गणिते, कमी data, कमी वेळ — पण परिणाम समजण्यासारखे आणि स्पष्ट करण्यासारखे.\nघर/गाडीची किंमत, विक्री, तापमान, खर्च अशा सर्व्हेक्षण अंदाजांसाठी हा उत्तम सुरुवात आहे; पुढे deep models कसे वागतात ते समजण्यासही तो आधार देतो.\nवाचून न थांबता स्वतः छोटा dataset घेऊन fit/predict प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Feature आणि target चे आकार (shape) चुकणे — X हा 2D (rows,cols) हवा, y 1D.\n✗ रेषा सरळ काढणे — data वक्र असेल तर linear चुकतो; मग polynomial/other model निवडा.\n✗ outlier चा भर — एक असाधारण बिंदू रेषा तडकवतो; आधी data साफ करा.\n✗ scale चा अंदाज — महत्वाचे नसले तरी feature scaling कधीकधी मदत करतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "scikit-learn — fit आणि predict",
        content: "from sklearn.linear_model import LinearRegression ला आणून model बनवा. model.fit(X, y) ने शिका; model.predict(X_new) ने अंदाज द्या. model.coef_ आणि model.intercept_ मधून रेषा कळते.\nपहिली पायरी नेहमी type(shape) तपासणे: X चा shape (n_samples, n_features) हवा — एकच feature असला तरी [[2],[3]] असे 2D द्या.",
        code: `from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])   # वर्षे अनुभव
y = np.array([30, 42, 50, 65, 74])        # पगार (हजारांमध्ये)

model = LinearRegression()
model.fit(X, y)
print(model.coef_, model.intercept_)      # slope, intercept
print(model.predict([[6]]))               # 6 वर्षांचा अंदाज`,
        codeLanguage: "python",
        output: `[10.9] 19.3
[84.7]   # 6 वर्षांसाठी ~85 हजार
# रेषा: पगार ≈ 10.9 × अनुभव + 19.3`,
      },
      {
        title: "Score — किती चांगला अंदाज",
        content: "model.score(X_test, y_test) हा R² score देतो — 0 ते 1 मध्ये. 1 म्हणजे उत्तम, 0 म्हणजे सरळ सरासरीइतका.\nNegative score म्हणजे model सरासरीपेक्षाही वाईट — data अजिबात linear नाही.\nनेहमी test data वर score पहा, training वर नाही — नाही तर overfitting ची भूल पडते.",
        code: `from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)
model.fit(X_train, y_train)
print(model.score(X_train, y_train))
print(model.score(X_test, y_test))`,
        codeLanguage: "python",
        output: `0.98      # training वर खूप चांगला
0.94      # test वर थोडा कमी — पण स्वीकारार्ह
# फरक मोठा असल्यास overfitting ची शंका`,
      },
      {
        title: "सारांश — linear regression",
        content: "रेषा y=wx+b शिकणे. X 2D, y 1D ठेवा. fit/predict/score. गुणांक आणि intercept वाचा. test वर score मोजा. विस्तार: पुढील धड्यात classification (logistic regression) आणि cost/gradient ची गणिते.",
      },
    ],
    practiceQuestions: [
      "एकच feature असल्यास X ला 2D कसे बनवायचे?",
      "coef_ आणि intercept_ मधून रेषेतून काय कळते?",
      "R² score 0.94 म्हणजे काय आणि negative score म्हणजे काय?",
    ],
    quiz: [
      { question: "fit हे कोणत्या input रूपाने X घेतो?", options: ["2D array", "1D array", "string", "dictionary"], correct: 0 },
      { question: "LinearRegression मधून अंदाज कोणता method देतो?", options: ["predict", "score", "transform", "sample"], correct: 0 },
      { question: "रेषेचा उतार कुठे मिळतो?", options: ["coef_", "intercept_", "fit", "random_state"], correct: 0 },
      { question: "R² हा किती दरम्यान असतो (साधारण)?", options: ["0 ते 1", "-1000 ते 1000", "फक्त 0", "फक्त 1"], correct: 0 },
      { question: "Data वक्र असेल तर linear regression?", options: ["न चुकता काम करत नाही", "पूर्णपणे बरोबर", "नुसते output देते", "error टाकतो"], correct: 0 },
    ],
    related: ["ml-intro-methods", "ml-cost-function", "ml-train-test-split"],
    prev: "ml-intro-methods",
    next: "ml-logistic-regression",
  },
  {
    slug: "ml-logistic-regression",
    categoryId: "ai",
    title: "Logistic Regression & Classification",
    marathiTitle: "Logistic regression — गट ठरवणारा model, probability ने निर्णय",
    level: "intermediate",
    minutes: 35,
    summary: "Classification साठी logistic regression — मेसेज spam/normal, patient आजारी/निरोगी. Sigmoid function, probability आणि predict_proba चा वापर.",
    sections: [
      {
        title: "Logistic regression — गट ठरवणारा model, probability ने निर्णय म्हणजे काय?",
        content: "नावात regression पण काम classification चे — binary गटांत विभागणे. रेषेऐवजी sigmoid वक्र असते जी कोणताही आकडा 0 ते 1 दरम्यान probability मध्ये मोडते.\nजर probability > 0.5 तर गट 1 (spam), नाही तर गट 0 (normal). थ्रेशोल्ड बदलून तोकडा/उदार निर्णय करता येतो.\nहा धडा वापर, predict_proba आणि slope/intercept चा अर्थ दाखवतो — single 뿌리 classification मध्ये हेच पाया आहे.",
      },
      {
        title: "का शिकावे? Logistic regression — गट ठरवणारा model, probability ने निर्णय चे फायदे आणि महत्त्व",
        content: "Diagnosis, spam filter, fraud detect, उत्तीर्ण/नापास अशी निर्णयांची अख्खी कुटुंबे classification ची. कोणताही classification तज्ज्ञ असल्यास हा पहिला jargon असतो.\nProbability समजल्याने या फक्त output नव्हे तर आत्मविश्वास (confidence) वाचता येतो — खऱ्या प्रोजेक्टमध्ये हेच महत्त्वाचे.\nवाचून न थांबता स्वतः spam/normal छोटा data घेऊन प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ output 0/1 ने measurement करणे — predict_proba आणि threshold हे अधिक सूक्ष्म.\n✗ Imbalanced data — 99 normal 1 spam असेल तर सगळं normal सांगणारा model 99% दाखवेल; precision/recall पहा.\n✗ सर्व features सारखे महत्त्वाचे समजणे — scaling चा फरक पडतो.\n✗ Sigmoid चा slope म्हणजे निर्णायक महत्त्व नाही; तो output ची sensitivity दाखवतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Sigmoid आणि probability",
        content: "Logistic regression वजनाची बेरीज w·x+b करतो आणि sigmoid σ(z)=1/(1+e^−z) ती 0-1 मध्ये मोडते.\nआधार निर्णय: output ≥ 0.5 → class 1. थ्रेशोल्ड कमी केला तर जास्त जोकी गट 1 मध्ये (जास्त false positives), वाढवला तर कमी.\npredict_proba हा दोन probabilities देतो [P(0), P(1)] — निर्णय पूर्ण गडद असल्यास ते 0.5 च्या जवळ असतात.",
        code: `from sklearn.linear_model import LogisticRegression
import numpy as np

X = np.array([[3],[5],[9],[12],[15]])     # मेसेज लांबी
y = np.array([0, 0, 1, 1, 1])             # 0=normal, 1=spam

model = LogisticRegression()
model.fit(X, y)
print(model.predict([[4]]))               # लहान मेसेज
print(model.predict_proba([[4]]))        # [normal, spam]`,
        codeLanguage: "python",
        output: `[0]                  # normal
[[0.83, 0.17]]       # 83% normal, 17% spam
# threshold 0.5 → normal ठरतो`,
      },
      {
        title: "Imbalanced data ची काळजी",
        content: "समजा 1000 मेसेजांत फक्त 10 spam. सगळे normal सांगणारा model 99% accuracy देतो पण एकही spam ओळखत नाही.\nअशावेळी precision (सांगितलेल्या spam पैकी किती खरे) आणि recall (खऱ्या spam पैकी किती पकडले) पहा. F1 हा दोघांचा समतोल.\nbalanced class_weight वापरून किंवा minority class जास्त करून हे दुरुस्त करता येते.",
        code: `model = LogisticRegression(class_weight="balanced")
model.fit(X, y)
from sklearn.metrics import classification_report
print(classification_report(y, model.predict(X)))`,
        codeLanguage: "python",
        output: `              precision    recall  f1-score
           0       0.99      0.88      0.93
           1       0.87      0.99      0.92
# spam ला चांगला recall — जास्तीत जास्त पकडले जातात`,
      },
      {
        title: "सारांश — logistic regression",
        content: "Classification चा पहिला ताकदवान model. sigmoid ने probability, threshold ने निर्णय. predict_proba पहा, imbalanced data वर precision/recall हवे. विस्तार: पुढे cost function आणि gradient descent ची गणिते.",
      },
    ],
    practiceQuestions: [
      "0.5 चा threshold कमी केला तर false positive वर काय परिणाम होईल?",
      "predict vs predict_proba मध्ये फरक काय?",
      "Imbalanced data मध्ये accuracy का धोकादायक?",
    ],
    quiz: [
      { question: "Logistic regression output कसे बदलते?", options: ["sigmoid वरून 0-1", "linear सरळ", "रेखीय सरळ रेषा", "sorted array"], correct: 0 },
      { question: "या धड्यात जास्त मेसेज कुणासाठी? (feature)", options: ["मेसेज लांबी", "रंग", "फोटो", "sound"], correct: 0 },
      { question: "predict_proba काय देतो?", options: ["probability list", "गटच फक्त", "नाव", "model आकार"], correct: 0 },
      { question: "Imbalanced data ची चांगली मेट्रिक?", options: ["F1/precision/recall", "फक्त accuracy", "फक्त loss", "फक्त epochs"], correct: 0 },
      { question: "Threshold 0.3 केल्यास काय होते?", options: ["जास्त class 1 मध्ये", "कमी class 1 मध्ये", "काही नाही", "क्रॅश"], correct: 0 },
    ],
    related: ["ml-evaluation-metrics", "ml-intro-methods", "ml-feature-scaling"],
    prev: "ml-linear-regression",
    next: "ml-cost-function",
  },
  {
    slug: "ml-cost-function",
    categoryId: "ai",
    title: "Cost Function (MSE/Cross-Entropy)",
    marathiTitle: "Cost function — error किती आहे हे मोजण्याचे सूत्र, MSE आणि cross-entropy",
    level: "intermediate",
    minutes: 30,
    summary: "Model किती चुकतो हे मोजणारे सूत्र — MSE regression साठी, cross-entropy classification साठी. का काही error functions चांगले नसतात हे समजून घेणे.",
    sections: [
      {
        title: "Cost function — error मोजण्याचे सूत्र, MSE आणि cross-entropy म्हणजे काय?",
        content: "Model शिकत असताना प्रत्येक फेरीत स्वतःला विचारतो की किती चुकलो. हे मोजण्याचे सूत्र म्हणजे cost function (loss).\nRegression मध्ये MSE (दुरुस्तीचे मध्य वर्ग), classification मध्ये cross-entropy हे मानक मापन असते.\ncost कमी करणे हेच gradient descent चे काम — आधी cost काय आहे हे नक्की होईपर्यंत optimization शक्य नाही.",
      },
      {
        title: "का शिकावे? Cost function — error मोजण्याचे सूत्र, MSE आणि cross-entropy चे फायदे आणि महत्त्व",
        content: "सगळ्या optimization ची सुरुवात cost ने होते — हे सूत्र नक्की समजल्यावर gradient descent, optimizers पुढे ओघाने समजतात.\ntraining loop मध्ये loss कमी होतोय हे पाहूनच model ची दुरुस्ती plytase — हीच नेहेमीची डाव.\nवाचून न थांबता एक कागदावर small dataset चे MSE स्वतः हाताने काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Classification मध्ये MSE वापरणे — probability वर वर्ग हा चुकीचा gradient देतो; cross-entropy घ्या.\n✗ loss कमी होतोय म्हणून model उत्तम समजणे — loss कमी होतोय पण new data वर चुकतोय तर overfit.\n✗ log(0) ची चुक — cross-entropy मध्ये 0 probability असता epsilon जोडा.\n✗ Mean vs sum — batch मध्ये mean घ्या नाहीतर batch आकारानुसार loss वाढतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "MSE — regression साठी",
        content: "MSE = (1/n)·Σ(y - ŷ)² — हारे बिंदूचा फरक, वर्ग करून सरासरी. वर्गामुळे मोठी चुक जास्त दंडते आणि negative/positive चुक समान होतात.\nउदा. y=50, ŷ=40 → (10)²=100 ; y=50, ŷ=60 → (-10)²=100 — दोन्ही समान.\nम्हणून MSE चिकटी होते — squaring मुळे smooth; सगळी सोपी गणिते त्यावर अवलंबून असतात.",
        code: `import numpy as np
y = np.array([3, 5, 7])
y_pred = np.array([2, 6, 6])
mse = np.mean((y - y_pred) ** 2)
print(mse)`,
        codeLanguage: "python",
        output: `1.0        #  (1 + 1 + 1) / 3
# अनेकदा sqrt (RMSE) घेतात — मूळ युनिटमध्ये अर्थ`,
      },
      {
        title: "Cross-entropy — classification साठी",
        content: "Cross-entropy = -Σ [y·log(ŷ) + (1-y)·log(1-ŷ)] — model आत्मविश्वास ne चुक कशी शिकवते.\nजर खरं output 1 पण model सांगतो 0.1 → log अपार मोठी शिक्षा; जर सांगतो 0.9 → छोटी.\nम्हणून classification मध्ये हेच मानक — gradient descent ला स्पष्ट दिशा देतो.",
        code: `import numpy as np
def cross_entropy(y, p):
    eps = 1e-15
    return -np.mean(y * np.log(p + eps) + (1 - y) * np.log(1 - p + eps))

print(cross_entropy(np.array([1, 0]), np.array([0.9, 0.1])))
print(cross_entropy(np.array([1, 0]), np.array([0.1, 0.9])))`,
        codeLanguage: "python",
        output: `0.1053605   #  model थोडा चुकला — कमी loss
2.3025851   #  model खूप चुकला — जास्त loss
# log(0) टाळण्यासाठी epsilon जोडला`,
      },
      {
        title: "सारांश — cost function",
        content: "cost = किती चुकलो हे मोजणारे सूत्र. regression → MSE, classification → cross-entropy. प्रत्येक शिक्षण फेरीने loss कमी करायचे ध्येय. पुढील धडा: loss वरून model कसे बदलतो — gradient descent.",
      },
    ],
    practiceQuestions: [
      "MSE मध्ये वर्ग का केला जातो?",
      "log(0) च्या समस्येसाठी काय करतात?",
      "classification मध्ये MSE चा उपयोग का धोकादायक?",
    ],
    quiz: [
      { question: "Regression साठी मानक loss?", options: ["MSE", "Cross-entropy", "Hinge", "0-1 loss"], correct: 0 },
      { question: "Cross-entropy कुठे वापरतात?", options: ["Classification", "Regression", "Clustering", "Compression"], correct: 0 },
      { question: "MSE मध्ये फरकाला वर्ग का करतात?", options: ["नकारात्मक चुक समान होतात", "गणित सोपे", "वेग वाढतो", "काही नाही"], correct: 0 },
      { question: "log(0) टाळण्यासाठी काय जोडतात?", options: ["epsilon", "zero", "무한", "negative"], correct: 0 },
      { question: "Cost कमी करणे हे कोणाचे काम?", options: ["Gradient descent", "Data loading", "Sigmoid", "Random state"], correct: 0 },
    ],
    related: ["ml-gradient-descent", "ml-linear-regression", "ml-logistic-regression"],
    prev: "ml-logistic-regression",
    next: "ml-gradient-descent",
  },
  {
    slug: "ml-gradient-descent",
    categoryId: "ai",
    title: "Gradient Descent Explained",
    marathiTitle: "Gradient descent — loss ची सरळ रस्त्याने घसरण, learning rate ने नियंत्रण",
    level: "intermediate",
    minutes: 30,
    summary: "Cost कमी करण्यासाठी model weight हळूहळू बदलण्याची पद्धत. Derivative/ग्रेडियंट ला direction समजून गुणोत्तर (learning rate) ने पावले उचलणे.",
    sections: [
      {
        title: "Gradient descent — loss ची सरळ रस्त्याने घसरण म्हणजे काय?",
        content: "आपल्याला cost कमी करायचे आहे — पण weight कुठे हलवल्यास कमी होईल? उत्तर गणित देते: loss graph च्या उतार (gradient) कडे वळून.\nउतार ने weight बदलतात आणि learning rate (lr) ने किती मोठी पावले उचलायची हे ठरते.\nहा धडा एका सोप्या उदाहरणाने step-by-step gradient descent ची यांत्रिकी दाखवतो — deep learning सगळा याच्या वर उभा आहे.",
      },
      {
        title: "का शिकावे? Gradient descent — loss ची सरळ रस्त्याने घसरण, learning rate ने नियंत्रण चे फायदे आणि महत्त्व",
        content: "प्रत्येक neural network, linear regression, logistic regression — सगळे gradient descent ने शिकतात. हे समजल्यावर training च्या text output कसा वाचायचा हे कळते.\nLearning rate व्यवस्थापन (जास्त=oscillate, कमी=रेंगाळणे) हे सतत लागणारे skill आहे — एकदा मोठा धडा.\nवाचून न थांबता हाताने चार weight updates करून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Learning rate जास्त — cost दिवसेंदिवस वाढतो/ओसिलेट होतो; 0.01-0.001 पासून सुरुवात.\n✗ Learning rate कमी — धीमे शिकणे; वेळ निघून जातो.\n✗ Gradient 0 म्हणजे उत्तम — ते local minima/plateau असू शकते.\n✗ data मधूनच istued weights — आधी scaling, मग शिकणे — नाहीतर दुर्बल weight.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "उतार — एक पावल",
        content: "loss = (w·1 - 2)² घ्या; w=1 असेल तर loss=1. gradient = 2·(w·x-y)·x = 2·(1-2)·1 = -2.\nम्हणून ingl w च्या दिशेत: w_new = w - lr·grad = 1 - 0.1·(-2) = 1.2. पुन्हा loss कमी झाला.\nअसे लूपमध्ये पुन्हा पुन्हा — epochs ने — weights loss कमी करत जातात.",
        code: `w = 1.0
lr = 0.1
for epoch in range(20):
    loss = (w * 1 - 2) ** 2          # x=1, y=2
    grad = 2 * (w - 2)               # derivative
    w -= lr * grad
    print(epoch, round(loss, 4), round(w, 4))`,
        codeLanguage: "python",
        output: `0 1.0 1.2
1 0.64 1.36
2 0.4096 1.488
...  # 20 फेऱ्यांनी w → 2, loss → 0
# अशा रीतीने grecure सततदाबणे येते`,
      },
      {
        title: "Variants — SGD, batch, momentum",
        content: "Basic version प्रत्येक उदाहरणावर update करतो (SGD) — वेगवान पण धीरे-धीरे न चालता. Batch gradient descent संपूर्ण data ची सरासरी करतो.\nआधुनिक optimizers — Adam — learning rate चा स्वयं-समायोजन आणि momentum (जुनी दिशा) वापरतात. तरीही मूलभूत कल्पना तीच: gradient दिशेत पावल उचलणे.",
      },
      {
        title: "सारांश — gradient descent",
        content: "loss graph वरून उतार पाहून weight हलवणे. lr ने पावले मोजा, epochs ने फेऱ्या. lr जास्त=धोकादायक, कमी=धीमे. पुढील धडा: हे सगळे योग्यरित्या तपासायला data कसे विभागायचे (train/test split).",
      },
    ],
    practiceQuestions: [
      "जास्त learning rate ने loss का वाढतो?",
      "Gradient 0 चा अर्थ काय — नेहमी पूर्णतः चांगला?",
      "एक weight update स्वतः हाताने करून दाखवा.",
    ],
    quiz: [
      { question: "Gradient descent काय दिशेत weight हलवतो?", options: ["loss कमी करणाऱ्या", "loss वाढवणाऱ्या", "random", "अक्षरशः कुठेही"], correct: 0 },
      { question: "learning rate वाढवल्यास?", options: ["पावले मोठी", "पावले लहान", "काही नाही", "data वाढतो"], correct: 0 },
      { question: "एका update चे सूत्र?", options: ["w - lr*grad", "w + lr*grad", "w*loss", "w/epoch"], correct: 0 },
      { question: "Neural network training मध्ये हीच पद्धत कशी?", options: ["backprop ने gradient मिळवतात", "भिन्न पद्धत", "data नाही हवा", "फक्त copy"], correct: 0 },
      { question: "Adam हा काय?", options: ["optimizer", "dataset", "model", "फाईल"], correct: 0 },
    ],
    related: ["ml-cost-function", "dl-backprop", "dl-optimizers"],
    prev: "ml-cost-function",
    next: "ml-train-test-split",
  },
  {
    slug: "ml-train-test-split",
    categoryId: "ai",
    title: "Train/Test/Validation Split",
    marathiTitle: "Data विभागणी — train/test/validation, कशासाठी आणि किती टक्के",
    level: "beginner",
    minutes: 25,
    summary: "Data ची काटेकोर विभागणी का आवश्यक — train (शिकणे), validation (समायोजन), test (अंतिम तपासणी). sklearn train_test_split आणि आकाराची नियम.",
    sections: [
      {
        title: "Data विभागणी — train/test/validation, कशासाठी आणि किती टक्के म्हणजे काय?",
        content: "एकाच data वर शिकून त्याच वर माफ करणे म्हणजे परीक्षेत प्रश्नपत्र तोंडपाठ — चांगलं दिसते पण प्रत्यक्ष काम करत नाही.\nम्हणून data तीन भागांत: train (शिकणे ~70-80%), validation (धडा समायोजन, hyperparameter), test (अंतिम, एकदाच).\nTrain_test_split ने सोप्या पद्धतीने हे भाग random चांगले विभागता येतात.",
      },
      {
        title: "का शिकावे? Data विभागणी — train/test/validation, कशासाठी आणि किती टक्के चे फायदे आणि महत्त्व",
        content: "हा कधीकधी छोटा दिसणारा धडा असतो पण data विभागणी चुकली तर तुमचे सगळे score खोटे ठरतात.\nकागदावर 98% accuracy दाखवणारा model खरं उत्पादनात 60% निघाला तर कारण data विभागणीचे वरदानच असते.\nवाचून न थांबता छोट्या data वर train_test_split चा आकार तपासा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Test data वर वारंवार प्रयोग करणे — test ही एकदाची परीक्षा; जास्त पाहिल्यास त्यातही गळती.\n✗ Shuffle न करणे — क्रमबद्ध data मध्ये दुमजला गळती.\n✗ Time series मध्ये random split — वेळेचा क्रम मोडल्यास future leak.\n✗ Feature leakage — test मधील माहिती train मध्ये आल्यास खोटे score.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "train_test_split वापर",
        content: "from sklearn.model_selection import train_test_split — एक फेरी मध्ये दोन भाग. stratify=y ने गटांचे प्रमाण संतुलित राहते.\nआधी train/test असे विभागा, मग train पासून validation काढा — जेणेकरून test शेवटपर्यंत स्पर्शही होणार नाही.",
        code: `from sklearn.model_selection import train_test_split

X = [[10],[20],[30],[40],[50],[60],[70]]
y = [1, 0, 1, 0, 1, 0, 1]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y)
print(len(X_train), len(X_test))
print(y_test)`,
        codeLanguage: "python",
        output: `5 2
[1, 0]            # दोन्ही गटांचे प्रमाण सारखे
# stratify ने imbalance preserve होते`,
      },
      {
        title: "Validation — धडा समायोजन",
        content: "Validation हा train पासून वेगळा भाग असतो — model च्या दर round (epoch) नंतर सुधारणा होतोय का हे तपासता येते.\nHyperparameter (learning rate, tree depth) निवडण्यासाठी validation वर ट्राय करतात. Test हा फक्त शेवटी.\ndata कमी असल्यास cross-validation ने सगळा data पालटून वापरतात — पुढील धडा.",
      },
      {
        title: "Feature leakage धोका",
        content: "जर normalisation/scaling आधी संपूर्ण data वर केलं आणि मग split केलं तर test ची माहिती train मध्ये leak होते.\nम्हणून neहेमी आधी split, नंतर train फिट करा (fit_transform) आणि test वर फक्त transform करा. ही चुक खरे data वर अपयशाची मोठी कारण आहे.",
        code: `from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
sc = StandardScaler()
X_train = sc.fit_transform(X_train)   # fit फक्त train वर
X_test = sc.transform(X_test)         # test वर फक्त transform`,
        codeLanguage: "python",
        output: `# transform हे fit च्या आकड्यांवरून होते — no leakage
# fit_transform कधीच test वर नको`,
      },
      {
        title: "सारांश — data split",
        content: "train शिके, validation समायोजन, test अंतिम परीक्षा. आधी split, नंतर scaling. stratify=, random_state वापरा. time series मध्ये क्रम मोडू नका. पुढील धडा: overfitting/underfitting कसे ओळखायचे.",
      },
    ],
    practiceQuestions: [
      "Validation आणि test मध्ये काय फरक?",
      "Scaling आधी किंवा नंतर split — का?",
      "Time series मध्ये random split का चुकीचे?",
    ],
    quiz: [
      { question: "अंतिम योग्यता कोणत्या data वर मोजतात?", options: ["Test", "Train", "Validation", "Duplicate"], correct: 0 },
      { question: "train_test_split मधील stratify काय करतो?", options: ["गट प्रमाण राखतो", "scale करतो", "सगळे train करतो", "नाव बदलतो"], correct: 0 },
      { question: "Feature leakage टाळण्यासाठी?", options: ["आधी split मग scale", "सगळे data scale", "test मध्ये fit", "दुहेरी data"], correct: 0 },
      { question: "Time series data कसे विभागतात?", options: ["क्रमानुसार", "random", "उलट", "फक्त train"], correct: 0 },
      { question: "Validation कशासाठी वापरतात?", options: ["Hyperparameter निवड", "अंतिम score", "देखावा", "data वाढ"], correct: 0 },
    ],
    related: ["ai-data", "ml-evaluation-metrics", "ml-cross-validation"],
    prev: "ml-gradient-descent",
    next: "ml-overfitting",
  },
  {
    slug: "ml-overfitting",
    categoryId: "ai",
    title: "Overfitting & Underfitting",
    marathiTitle: "Overfitting — तोंडपाठ, underfitting — साधेपणा; जुळवणीची कसरत",
    level: "beginner",
    minutes: 30,
    summary: "Model जर कागदावर पूर्ण दुरुस्त पण प्रत्यक्षात चुकीचा असेल तर overfitting. लक्षणे, कारणे, काढून टाकण्याचे उपाय आणि underfitting ची उलट बाजू.",
    sections: [
      {
        title: "Overfitting — तोंडपाठ, underfitting — साधेपणा म्हणजे काय?",
        content: "Overfitting — model ने train चे प्रत्येक उदाहरण पाठ केले, पण new data वर चुकतो. Loss train मध्ये 0, validation मध्ये जास्त.\nUnderfitting — model इतका साधा की train मध्येच नीट काम करत नाही.\nहा धडा दोन्ही ओळखणे, कारणे आणि तोल साधण्याचे नियम दाखवतो.",
      },
      {
        title: "का शिकावे? Overfitting — तोंडपाठ, underfitting — साधेपणा, जुळवणीची कसरत चे फायदे आणि महत्त्व",
        content: "AI मध्ये सगळ्यात सामान्य failure mode overfitting आहे — तुमचा model परीक्षेत चांगला पण रास्त life मध्ये नापास होतो.\nValidation loss CV graph वाचायला येणे हा कौशल्याच्या दृष्टीने अस्सल फरक करतो.\nवाचून न थांबता दोन learning curves घेऊन तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ केवळ train accuracy पाहणे — कागदावरील तोंडपाठ चुका मोठ्या.\n✗ जास्त epochs — validation loss वाढत असताना वाढवणे.\n✗ जास्त जटिल model — लहान data साठी heavy model हवे नसते.\n✗ Underfitting उलट बाजू — लक्षणे ओळखा (train मध्येच खराब).\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "ओळख कशी?",
        content: "Train loss खूप कमी, validation जास्त → overfit. लक्ष: validation loss वाढतो पण train कमी होतो — तो बिंदू म्हणजे चांगले थांबवणे (early stopping).\nUnderfit मध्ये train आणि validation दोन्ही जास्त — model पुरेसा शिकतच नाही.",
        code: `# या pattern वर नजर ठेवा (योजनाबद्ध)
# epoch   train_loss   val_loss
#  5        0.12        0.40     → overfitting सुरू
#  20       0.03        0.75     → वाढतच चाललं
# समस्या: epochs जास्त, model जटिल, data कमी`,
        codeLanguage: "python",
      },
      {
        title: "उपाय",
        content: "overfitting साठी: अधिक data, लहान model, regularization (L1/L2), dropout (neural), early stopping, data augmentation.\nUnderfitting साठी: अधिक जटिल model, अधिक features, जास्त epochs, feature engineering चांगले.\nसंतुलन साधण्यासाठी validation loss हीच निर्णायक मेट्रिक ठेवा.",
      },
      {
        title: "सारांश — overfitting/underfitting",
        content: "validation वर सतत नजर. loss curves वाचा. data जास्त, model समजून -> normalize. पुढील धडा: bias-variance tradeoff — हेच संतुलन गणितीय रूपात.",
      },
    ],
    practiceQuestions: [
      "Train loss कमी पण validation जास्त — काय असेल?",
      "Underfitting ओळखण्याचे लक्षण?",
      "Early stopping म्हणजे काय आणि कधीच?",
    ],
    quiz: [
      { question: "Overfitting चे लक्षण?", options: ["train कमी, validation जास्त", "दोन्ही कमी", "दोन्ही जास्त", "data नाही"], correct: 0 },
      { question: "Underfitting म्हणजे?", options: ["model साधा, शिकत नाही", "खूप जटिल", "data मोठा", "द्या बदल"], correct: 0 },
      { question: "Early stopping कधी?", options: ["validation loss वाढतो तेव्हा", "शुरुवातीपासून", "कधी नाही", "train loss कमी तेव्हा"], correct: 0 },
      { question: "Overfitting कमी करणारे?", options: ["अधिक data + regularization", "जास्त epochs", "मोठा model", "कोणी स्पष्ट नाही"], correct: 0 },
      { question: "Convergence ची सूचना म्हणून कोणता loss?", options: ["Validation loss", "Train loss", "Random loss", "Total loss"], correct: 0 },
    ],
    related: ["ml-bias-variance", "ai-regularization", "ml-evaluation-metrics"],
    prev: "ml-train-test-split",
    next: "ml-bias-variance",
  },
  {
    slug: "ml-bias-variance",
    categoryId: "ai",
    title: "Bias–Variance Tradeoff",
    marathiTitle: "Bias-variance tradeoff — कमी जटिल किंवा जास्त — तोल साधण्याची वाट",
    level: "intermediate",
    minutes: 30,
    summary: "Model च्या एकूण चुकीचे दोन घटक — bias (सोपा विचार) आणि variance (data बदलून बदलणे). tradeoff समजून निवड कशी करायची.",
    sections: [
      {
        title: "Bias-variance tradeoff — तोल साधण्याची वाट म्हणजे काय?",
        content: "प्रत्येक model ची एकूण error तीन भागांत: bias, variance आणि irreducible error (data मधला आवाज).\nBias म्हणजे model ची सोपी/गुळगुळीत कल्पना — सरळ रेषेने वक्र data समजणे; variance म्हणजे model चा data बदलल्यावर उडी मारणे (जास्त sensitivity).\nहे tradeoff समजल्यावर model कधी वाढवायचा/कमी करायचा हे ठरते.",
      },
      {
        title: "का शिकावे? Bias-variance tradeoff — तोल साधण्याची वाट चे फायदे आणि महत्त्व",
        content: "Regularization, feature selection, model चॉइस — या सगळ्या निर्णयांची गणितीय पायरी येथे उलगडते.\nकागदावर error graphs वाचणे म्हणजे शुध्द engineering; जास्त अचूक निर्णय देते.\nवाचून न थांबता लहान simulation ने (वेगवेगळ्या complexity) पुनरुत्पादन करून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Bias/variance एकटे पाहणे — total error = bias + variance + noise.\n✗ जास्त variance म्हणजे नेहमी दोष; पुरेसा data असल्यास जटिल model चांगला.\n✗ Test data वर जास्त tweak — variance चा अंदाज वाढवतो.\n✗ Cross-validation समजून घ्या — variance अंदाजासाठी हेच साधन.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "दोन घटक स्पष्ट",
        content: "बायस जास्त असल्यास model सतत समान, सरासरीच्या अंदाजाला चिकटून असतो — new data ने अस्मिता बदलत नाही. Variance जास्त असल्यास data मधील छोटा बदल model बदलतो.\nsimple model = जास्त bias, कमी variance. जटिल model = कमी bias, जास्त variance. योग्य complexity म्हणजे दोघांचा किमान एकूण.",
        code: `# कल्पनारूप्य graph
# complexity ->  low ...... high
# bias        ->  high ..... low
# variance    ->  low ...... high
# total error ->  (उत्तम आराम मध्य) best point
# "बरोबर जटिलता हीच निवड"`,
        codeLanguage: "python",
      },
      {
        title: "कशी कमी करायची",
        content: "variance कमी करण्यासाठी: regularization, more data, ensembling (bagging), feature reduction.\nbias कमी करण्यासाठी: more complex model, more features, better features.\ntradeoff कधी सांगतो: जास्त variance दिसतो (validation jitter) तर सरलीकरण करा; bias जास्त (अपूर्ण fit) तर जटिलता वाढवा.",
      },
      {
        title: "सारांश — bias-variance",
        content: "Total error = bias + variance + noise. जटिलता वाढवणे bias कमी करते पण variance वाढवते. validation curves वाचून tool निवड. पुढील धडा: features सर्वांना समान पातळीवर आणणे — scaling.",
      },
    ],
    practiceQuestions: [
      "कमी जटिल model मध्ये bias/variance कसे?",
      "Validation graph वर वाढती जटिलता कशी दिसते?",
      "Regularization कोणत्या घटकावर हल्ला करतो?",
    ],
    quiz: [
      { question: "एकूण error च्या घटक?", options: ["bias+variance+noise", "फक्त bias", "फक्त variance", "model left"], correct: 0 },
      { question: "जास्त bias म्हणजे?", options: ["सोपी कल्पना", "खूप जटिल", "data मोठा", "noise"], correct: 0 },
      { question: "जटिल model मध्ये?", options: ["कमी bias, जास्त variance", "जास्त bias", "काही नाही", "फक्त noise"], correct: 0 },
      { question: "variance कमी करणारे?", options: ["regularization", "जास्त parameter", "कमी data", "random"], correct: 0 },
      { question: "सर्वोत्तम जटिलता कुठे?", options: ["total error किमान", "bias 0", "variance 0", "शेवटी"], correct: 0 },
    ],
    related: ["ml-overfitting", "ai-regularization", "ml-cross-validation"],
    prev: "ml-overfitting",
    next: "ml-feature-scaling",
  },
  {
    slug: "ml-feature-scaling",
    categoryId: "ai",
    title: "Feature Scaling & Normalization",
    marathiTitle: "Feature scaling — मोजमाप सर्व गुणधर्मांना समान पातळीवर — StandardScaler",
    level: "intermediate",
    minutes: 30,
    summary: "वेगवेगळ्या युनिटच्या features (वय 20-60, पगार 20k-200k) एकत्र शिकवण्यासाठी scaling — StandardScaler, MinMaxScaler आणि कधी कोणते.",
    sections: [
      {
        title: "Feature scaling — सर्व गुणधर्म समान पातळीवर म्हणजे काय?",
        content: "समजा features: वय (20-60) आणि पगार (20000-200000). पगार संगणकाला जास्त मोठा वाटून वयाची तुच्छता होते.\nScaling म्हणजे सर्व features एकाच श्रेणीत आणणे — सामान्यतः 0 आसपास किंवा 0-1 मध्ये.\nStandardScaler (avg 0, std 1) आणि MinMaxScaler (0-1) हे दोन मानक मार्ग.",
      },
      {
        title: "का शिकावे? Feature scaling — सर्व गुणधर्म समान पातळीवर चे फायदे आणि महत्त्व",
        content: "Gradient descent मध्ये unscaled features वर मोठ्या units चे weights ओरड होतात किंवा ओसिलेट होतात.\nDistance-based algorithms (k-means, kNN) मध्ये अयोग्य units म्हणजे क्लस्टर चुकले. Tree-based मध्ये इतका फरक नसतो.\nखऱ्या projects मध्ये हा धडा आधीच मांडणे वेगळेपण देतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Pura data वर fit — leakage; फक्त train fit, test transform.\n✗ प्रत्येक algorithm ला scaling हवेच समजणे — trees वर फायदा नाही.\n✗ Outlier सोबत StandardScaler — तोटा; robust scaler विचार करा.\n✗ Scaling नंतर interpretation गमावणे — coef_ वरून थेट अर्थ घेऊ नका.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "StandardScaler",
        content: "StandardScaler प्रत्येक feature मधून सरासरी वजा करतो आणि std ने भागतो — परिणाम: सरासरी 0, मानक विचलन 1. Outlier असेल तर मजबुत नाही.\nहे गॉसियन-सारख्या data साठी चांगले. नेहमी आधी split, नंतर fit.train वर fit_transform, test वर transform.",
        code: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[45, 80000], [20, 30000], [60, 200000]])
sc = StandardScaler()
X_scaled = sc.fit_transform(X)
print(X_scaled)`,
        codeLanguage: "python",
        output: `[[ 0.27 -0.27]
 [-1.37 -1.37]
 [ 1.09  1.63]]
# प्रत्येक column avg~0, std~1`,
      },
      {
        title: "MinMaxScaler आणि निवड",
        content: "MinMaxScaler values ला 0-1 मध्ये आणतो (x - min)/(max - min). आणखी RobustScaler median/IQR वापरून outlier resist करतो.\nनिवड: आधारित algorithms + गॉसियन-like → StandardScaler; bounded data (pixels 0-255) → MinMax; outliers → Robust.\nकधीही scaling नंतर शेवटचा निर्णय exploration वर घ्या.",
      },
      {
        title: "सारांश — scaling",
        content: "युनिट्स समान करणे — gradient/distance algorithms ला मदत. train fit_transform, test transform. परिस्थितीनुसार scaler निवडा. पुढील धडा: model किती चांगला हे मोजणारी मेट्रिक्स.",
      },
    ],
    practiceQuestions: [
      "StandardScaler काय करतो — सूत्रासह?",
      "स्केलिंग न केल्यास gradient descent चा त्रास कसा?",
      "Outlier असलेल्या data साठी कोणता scaler?",
    ],
    quiz: [
      { question: "StandardScaler परिणाम?", options: ["avg 0, std 1", "0-1 श्रेणी", "फक्त positive", "sqrt"], correct: 0 },
      { question: "MinMaxScaler किती मध्ये आणतो?", options: ["0-1", "-1-1", "0-255", "1-100"], correct: 0 },
      { question: "कोणत्या algorithms ला scaling हवं हवं आहे?", options: ["k-means/kNN", "decision trees", "काहीच नाही", "सगळे समान"], correct: 0 },
      { question: "Leakage टाळण्यासाठी?", options: ["fit फक्त train", "सगळे data fit", "test fit first", "कधीही fit नाही"], correct: 0 },
      { question: "Outlier असताना कोणता scaler?", options: ["RobustScaler", "StandardScaler", "MinMax", "नाही"], correct: 0 },
    ],
    related: ["ml-train-test-split", "ml-gradient-descent", "ml-kmeans"],
    prev: "ml-bias-variance",
    next: "ml-evaluation-metrics",
  },
  {
    slug: "ml-evaluation-metrics",
    categoryId: "ai",
    title: "Accuracy, Precision, Recall, F1, Confusion Matrix",
    marathiTitle: "Model तपासणी — confusion matrix, accuracy, precision, recall, F1 — मेट्रिक्स समज",
    level: "intermediate",
    minutes: 35,
    summary: "फक्त accuracy पुरेसा नसतो. Confusion matrix मधून precision/recall/F1 कसे काढायचे आणि कोणती मेट्रिक कोणत्या problem साठी योग्य.",
    sections: [
      {
        title: "Model तपासणी — confusion matrix, accuracy, precision, recall, F1 म्हणजे काय?",
        content: "Accuracy ही सगळी उदाहरणे बरोबर पण निर्णय गुप्त ठेवते — imbalanced data मध्ये भ्रमात टाकते.\nConfusion matrix मधून चार संख्यांची क्रॉस-तपासणी: TP, FP, TN, FN. त्यातून precision (सांगितलेल्या positive पैकी खरे), recall (खऱ्या positive पैकी पकडलेले) आणि F1 (दोघांचा समतोल) निघतात.\nहा धडा मेट्रिक्सचे निर्णय कसे बदलतात हे दाखवतो.",
      },
      {
        title: "का शिकावे? Model तपासणी — confusion matrix, accuracy, precision, recall, F1 चे फायदे आणि महत्त्व",
        content: "खरे युज-केस मध्ये सगळी examples सारखीच महत्त्वाची नसतात — cancer detect मध्ये FN घातक, spam filter मध्ये FP कंटाळवाणा.\nमेट्रिक निवडणे म्हणजे model ला व्यवसायाच्या दिशेने जोखणे — हेच प्रोडक्शन quality.\nवाचून न थांबता छोट्या confusion matrix वर हाताने precision/recall काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Imbalanced data वर accuracy — 99% normal, 1% fraud मध्ये सगळं normal सांगून 99%.\n✗ precision आणि recall एकट्याने पाहणे — F1 समतोल आवश्यक.\n✗ Confusion matrix axis चुकणे — rows/columns कोणत्या बाजूने हे ठरवा (actual/predicted).\n✗ थ्रेशोल्ड बदलल्यावर precision/recall बदलतो — context मध्ये पहा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Confusion matrix",
        content: "Confusion matrix हा 2×2 सारणी असतो: actual rows, predicted columns.\n· True Positive — खरं positive, सांगितलं positive.\n· False Positive — खरं negative, सांगितलं positive (खोटा अलार्म).\n· False Negative — खरं positive, सांगितलं negative (धोकादायक).\n· True Negative — खरं negative, सांगितलं negative.",
        code: `from sklearn.metrics import confusion_matrix
y_true = [1, 0, 1, 1, 0, 1]
y_pred = [1, 0, 1, 0, 0, 1]
cm = confusion_matrix(y_true, y_pred)
print(cm)
#       predict  0 1
# actual 0 ->    2 0
# actual 1 ->    1 3`,
        codeLanguage: "python",
        output: `[[2 0]
 [1 3]]
# TN=2 FP=0 | FN=1 TP=3`,
      },
      {
        title: "अचूकता, आठवण, F1",
        content: "Precision = TP/(TP+FP) — सांगितलेल्या positive पैकी खरे. Recall = TP/(TP+FN) — खऱ्या positive पैकी मिळवलेले.\nF1 = 2·(P·R)/(P+R) — दोघांचा harmonic mean. आधार निवड:\n· FP महाग (spam जाणारे रास्त मेसेज) → precision जास्त.\n· FN महाग (आजार न सांगणे) → recall जास्त.\nImbalanced वर F1/macro-avg निर्णय.",
        code: `from sklearn.metrics import precision_score, recall_score, f1_score
print(precision_score(y_true, y_pred))
print(recall_score(y_true, y_pred))
print(f1_score(y_true, y_pred))`,
        codeLanguage: "python",
        output: `1.0      # सांगितलेले 3 positive सगळे खरे
0.75     # 4 खऱ्या positive पैकी 3 पकडले
0.857    # समतोल`,
      },
      {
        title: "सारांश — मेट्रिक्स",
        content: "accuracy एकटी पुरेशी नाही. confusion matrix वाचा. FP/FN चा व्यावसायिक खर्च मोजून precision/recall निवडा, F1 संतुलित. पुढील धडा: validation ची खात्रीदार पद्धत — cross-validation.",
      },
    ],
    practiceQuestions: [
      "Imbalanced data मध्ये accuracy का भुरळ घालते?",
      "Cancer detection मध्ये FN चा खर्च जास्त का?",
      "Precision आणि recall एकाच वेळी जास्त ठेवायचे तर?",
    ],
    quiz: [
      { question: "FP म्हणजे?", options: ["खरे नाही पण positive सांगितले", "खरे positive", "खरे negative", "नसले input"], correct: 0 },
      { question: "Recall चे सूत्र?", options: ["TP/(TP+FN)", "TP/(TP+FP)", "TN/(TN+FP)", "FP/(TP)"], correct: 0 },
      { question: "Precision चे सूत्र?", options: ["TP/(TP+FP)", "TP/(TP+FN)", "TN/(TN+FN)", "FP/TN"], correct: 0 },
      { question: "FP महाग असेल तर काय जास्त महत्त्व?", options: ["Precision", "Recall", "Accuracy", "Confusion नाही"], correct: 0 },
      { question: "F1 म्हणजे?", options: ["precision+recall चा समतोल", "fक्त accuracy", "फक्त precision", "data आकार"], correct: 0 },
    ],
    related: ["ml-logistic-regression", "ml-train-test-split", "ml-pipeline"],
    prev: "ml-feature-scaling",
    next: "ml-cross-validation",
  },
  {
    slug: "ml-cross-validation",
    categoryId: "ai",
    title: "Cross-Validation (K-Fold)",
    marathiTitle: "Cross-validation — data लहान असेल तर K-folds मध्ये विश्वासार्ह परीक्षा",
    level: "intermediate",
    minutes: 35,
    summary: "एकच train/test split न काढता K फोल्ड वापरून सगळा data पालटून तपासणे — overfitting ची गळती कमी, score अधिक खात्रीशीर.",
    sections: [
      {
        title: "Cross-validation — K-fold म्हणजे काय?",
        content: "समजा तुमच्याकडे 200 उदाहरणे. एकच split केला तर तो भाग नशिबाने चांगला/वाईट ठरू शकतो.\nCross-validation data चा K भागांत विभागून (उदा. 5 folds) प्रत्येक वेळी एक fold test, बाकी train — असे K परीक्षा घेते.\nसर्व folds चा mean score म्हणजे अधिक विश्वासार्ह अंदाज मिळतो.",
      },
      {
        title: "का शिकावे? Cross-validation — K-fold चे फायदे आणि महत्त्व",
        content: "data लहान असेल तर test 10% दिल्यास माहिती वाया जाते; CV वर सगळा data शिकण्यास येतो आणि प्रत्येक उदाहरण कोणत्या तरी fold मध्ये परीक्षा देतो.\nHyperparameter निवड while CV वरच ठरवतात — हा प्रोफेशनल standard आहे.\nवाचून न थांबता k=5 वापरून score चा spread_pahil तपासा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Shuffle न करणे — क्रमबद्ध data तर folds पक्षपाती होतात.\n✗ k खूप मोठा — प्रत्येक fold लहान; variance जास्त.\n✗ folds मध्ये गळती — एकच उदाहरण दोन folds मध्ये येणे शक्य नसावे.\n✗ Test data वर CV — test वर कधीच tweak नको.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "K-fold चे यंत्र",
        content: "StratifiedKFold गटांचे प्रमाण प्रत्येक fold मध्ये टिकवतो — class imbalance असताना हा उत्तम. cross_val_score ने एकाच ओळीत सर्व folds चे scores येतात.\nपरिणाम: array चा mean आणि std पहा — जास्त std म्हणजे अस्थिर model.",
        code: `from sklearn.model_selection import cross_val_score
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
scores = cross_val_score(DecisionTreeClassifier(), X, y, cv=5)
print(scores)
print("avg:", scores.mean(), "std:", scores.std())`,
        codeLanguage: "python",
        output: `[0.97 0.97 0.93 0.97 1.  ]
avg: 0.967  std: 0.02
# std कमी = model स्थिर`,
      },
      {
        title: "Hyperparameter साठी GridSearchCV",
        content: "GridSearchCV एकाच time ने hyperparameters ची जोड्या (grid) CV वर तपासून सर्वोत्तम निवडतो.\nparams={'max_depth':[3,5],'criterion':['gini','entropy']} — 2×2 = 4 जोड्या × CV.\nपरिणाम best_params_ मध्ये मिळतो; पण search पूर्ण data वर करू नका — कधीही test नाही.",
        code: `from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier

grid = {'max_depth': [3, 5], 'min_samples_leaf': [1, 2]}
gs = GridSearchCV(DecisionTreeClassifier(), grid, cv=5)
gs.fit(X, y)
print(gs.best_params_)`,
        codeLanguage: "python",
        output: `{'max_depth': 3, 'min_samples_leaf': 2}
# सर्वोत्तम जोडी — याचे test तुम्ही स्वतः स्पष्ट राहून`,
      },
      {
        title: "सारांश — cross-validation",
        content: "K-fold: data K भागांत, प्रत्येकाला एकदा test. shuffle+stratify वापरा. mean+std पहा. GridSearchCV ने hyperparameters. पुढील धडा: पहिला tree model — decision trees.",
      },
    ],
    practiceQuestions: [
      "व्हॅलिडेशन आणि test फरक CV नंतर कसा?",
      "StratifiedKfolds imbalance का चांगला?",
      "GridSearchCV + CV = किती फिट होतात?",
    ],
    quiz: [
      { question: "Cross-validation कोणते फायदे देतो?", options: ["score खात्री", "data वाढ", "model वाढ", "gpu"], correct: 0 },
      { question: "K=5 म्हणजे?", options: ["5 परीक्षा folds", "5 model", "5 data sets", "5 epochs"], correct: 0 },
      { question: "StratifiedKFold काय राखतो?", options: ["गट प्रमाण", "data क्रम", "loss", "learning rate"], correct: 0 },
      { question: "GridSearchCV काय शोधतो?", options: ["best hyperparameters", "best data", "best GPU", "best name"], correct: 0 },
      { question: "Fold अस्थिरता कशी दिसते?", options: ["उच्च std", "कमी mean", "उच्च mean", "काही नाही"], correct: 0 },
    ],
    related: ["ml-hyperparameters", "ml-train-test-split", "ml-decision-tree"],
    prev: "ml-evaluation-metrics",
    next: "ml-decision-tree",
  },
  {
    slug: "ml-decision-tree",
    categoryId: "ai",
    title: "Decision Trees",
    marathiTitle: "Decision tree — if-else चा खेळ जो data मधून आपोआप तयार होतो",
    level: "beginner",
    minutes: 30,
    summary: "Decision tree म्हणजे आपोआप तयार होणारी if-else ची रचना. Feature निवड (Gini), depth, overfitting, कशासाठी वापरतात आणि कसे नियंत्रित करतात.",
    sections: [
      {
        title: "Decision tree — आपोआप तयार होणारी if-else रचना म्हणजे काय?",
        content: "Decision tree हाताने तयार नाही होत — data पाहून कोणती feature आधी, कोणता threshold हे आपोआप ठरते.\nआधार नियम: सगळ्यात चांगली विभागणी करणाऱ्या feature वर root टाकणे. त्याच नियमाने उप-शाखा तयार होतात.\nहे tree humanly readable असते — कागदावर समजते म्हणून entry-level उत्तम.",
      },
      {
        title: "का शिकावे? Decision tree — if-else चा खेळ चे फायदे आणि महत्त्व",
        content: "हे interpretable model आहे — डॉक्टर/बँक निर्णय explainability साठी खरेतर पसंत करतात.\nTrees नी scaling कडे लक्ष देत नाहीत आणि classification/regression दोन्ही करतात — म्हणून सगळीकडे आधार म्हणून वापरता येते.\nपुढे random forest आणि gradient boosting याच्याच रचना वाढवून घेतात.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Depth खूप — overfit होतो; max_depth मर्यादित करा.\n✗ कमी data असताना 'फक्त मोठे' petitions — एकाच उदाहरणासाठी लटकती शाखा.\n✗ Features scoring — variance-दृष्ट्या खूप भिन्न tree निवडतो; चुकीची समज करू नका.\n✗ Unbalanced data मध्ये tree biased — class_weight वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Gini आणि विभागणी",
        content: "Tree feature निवड Gini impurity ने करतो — विभागणी नंतर गट किती स्वच्छ झाले हे मोजते.\nGini कमी = गट स्वच्छ. प्रत्येक level वर सर्वात कमी Gini देणारी feature/treshold घेतली जाते.\nहेच ठरवणे model शिकतो — 'कोणती प्रश्न विचारायची' ते आपोआप.",
        code: `from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
dt = DecisionTreeClassifier(max_depth=3, random_state=42)
dt.fit(X, y)
print(dt.feature_importances_)
print(dt.score(X, y))`,
        codeLanguage: "python",
        output: `[0.    0.015 0.37  0.615]
# petal width/length मध्ये बहुज्ञान
0.967   # max_depth=3 वरही छान`,
      },
      {
        title: "Visualize आणि depth वर नियंत्रण",
        content: "tree ची कल्पना करण्यासाठी sklearn.tree.plot_tree किंवा export_graphviz. max_depth लहान पण truthy ठेवा — overfitting नियंत्रण.\nmin_samples_leaf ने प्रत्येक leaf मध्ये किमान उदाहरणे ठरवा — लहान leaves कापता येतात.",
      },
      {
        title: "सारांश — decision trees",
        content: "feature च्या सर्वोत्तम विभागणीने tree तयार. Gini ने निवड, max_depth/min_samples_leaf ने नियंत्रण. interpretable व scale-free. पुढील धडा: पुष्कळ trees एकत्र — random forest.",
      },
    ],
    practiceQuestions: [
      "Gini impurity कमी म्हणजे काय?",
      "Decision tree तसे scaling का अपेक्षित नाही?",
      "max_depth वाढवल्यास overfitting कसा वाढतो?",
    ],
    quiz: [
      { question: "Tree कोणती feature आधी घेतो?", options: ["सर्वोत्तम विभागणी करणारी", "पहिली", "अक्षरशः random", "सर्वात मोठ्या नावाची"], correct: 0 },
      { question: "Gini कमी म्हणजे?", options: ["गट स्वच्छ", "गट गोंधळ", "data मोठा", "loss जास्त"], correct: 0 },
      { question: "Overfitting रोखणारे?", options: ["max_depth मर्यादा", "जास्त depth", "कमी data", "काही नाही"], correct: 0 },
      { question: "Trees ना कोणते scaled नको?", options: ["scaling", "labels", "features", "rows"], correct: 0 },
      { question: "Interpretable म्हणजे?", options: ["माणसाला समजण्यासारखे", "फक्त संख्यात्मक", "फक्त ग्राफ", "साइन अप"], correct: 0 },
    ],
    related: ["ml-random-forest", "ml-cross-validation", "ml-hyperparameters"],
    prev: "ml-cross-validation",
    next: "ml-random-forest",
  },
  {
    slug: "ml-random-forest",
    categoryId: "ai",
    title: "Random Forest & Ensembles",
    marathiTitle: "Random forest — पुष्कळ trees चा निर्णय — bagging ने स्थिरता",
    level: "intermediate",
    minutes: 35,
    summary: "एक tree अस्थिर, पुष्कळ trees एकत्र (ensemble) स्थिर — RandomForestClassifier. Bagging, feature randomness आणि accuracy वर कसा परिणाम करतो.",
    sections: [
      {
        title: "Random forest — पुष्कळ trees चा निर्णय म्हणजे काय?",
        content: "निर्णयांमध्ये एक वृद्ध विचार धोकादायक — पुष्कळ trees ची सरासरी घेतली तर त्रुटी आपोआप कमी होतात.\nRandom forest हा अनेक decision trees तयार करतो — प्रत्येक tree वेगळ्या subsample (bootstrap) आणि वेगळ्या feature subset वर.\nबहुमताचा निर्णय म्हणजे final — हीच bagging ची रणनीती.",
      },
      {
        title: "का शिकावे? Random forest — पुष्कळ trees चा निर्णय चे फायदे आणि महत्त्व",
        content: "हे सोपं, रोबस्ट आणि जवळजवळ default-classifier आहे — आधी हेच वापरा, मग खरं समस्येला गाठ पडत असेल तर जटिल model.\nfeatures बहुतेक variable चा अंदाज आणि missing data सहन — व्यवहारात सगळीकडे फिट.\nवाचून न थांबता base tree vs forest चे CV scores तुलना करा — फायदा मिळेल.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Estimators खूप — 100 नंतर फायदा संपतो पण वेळ वाढतो.\n✗ Trees खोल — forest मध्येही depth नियंत्रित करा.\n✗ Small data मध्ये full feature randomness खोटा — max_features चांगले set.\n✗ Imbalanced — class_weight='balanced' पहा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Bagging आणि feature randomness",
        content: "Bagging (bootstrap aggregating): data मधून random pulls (duplicates सह) करून सगळे tree वेगळ्या data वर शिकतात.\nयाशिवाय प्रत्येक tree ला काही random features च मिळतात — म्हणून trees परस्पर असा संबंध नसतात.\nअसंबंधित trees च्या सरासरीने variance लक्षणीय कमी होतो.",
        code: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score

X, y = load_iris(return_X_y=True)
rf = RandomForestClassifier(n_estimators=100, max_depth=4, random_state=42)
print(cross_val_score(rf, X, y, cv=5).mean())`,
        codeLanguage: "python",
        output: `0.953
# single tree च्या वर किंवा समान — स्थिर आणि सुरक्षित
# n_estimators ने वेळ वाचवा`,
      },
      {
        title: "OOB score आणि importances",
        content: "Bootstrap मुळे काही उदाहरणे tree ला मिळत नाहीत — Out-of-Bag. त्या trees च्या सरासरीवर oob_score_ ने बिन-test मूल्यांकन होते.\nfeature_importances_ ने कोणते features model ठरवतात हे दिसते — प्रारंभिक तपासणी म्हणून उत्तम.",
      },
      {
        title: "सारांश — random forest",
        content: "अनेक trees, random data+features, बहुमत → स्थिरता. estimators=कमी ठेवा, depth नियंत्रित. oob_score/importances वाचा. पुढील धडा: कुणाच्याही निरीक्षणातून नव्हे — K-means clustering.",
      },
    ],
    practiceQuestions: [
      "Bagging मध्ये trees कशावर शिकतात?",
      "n_estimators वाढवणे फायदेशीर किती?",
      "OOB score कसा मिळतो?",
    ],
    quiz: [
      { question: "Random forest हा काय?", options: ["अनेक trees ensemble", "एक tree", "linear model", "neural net"], correct: 0 },
      { question: "Trees कशावर वेगळे प्रशिक्षण घेतात?", options: ["random subsample+features", "समान data", "छोटे data", "क्षेत्रीय data"], correct: 0 },
      { question: "Bagging मध्ये काय घेतले जाते?", options: ["bootstrap sample", "पहिले 10 rows", "सगळे data", "शेवटचे 10"], correct: 0 },
      { question: "variance कसा कमी होतो?", options: ["असंबंधित trees सरासरीने", "एक मोठा tree", "जास्त depth", "लहान data"], correct: 0 },
      { question: "OOB म्हणजे?", options: ["ज्या data tree ला नाही मिळाला", "आऊटपुट buffer", "फक्त test", "फक्त train"], correct: 0 },
    ],
    related: ["ml-decision-tree", "ml-bias-variance", "ml-hyperparameters"],
    prev: "ml-decision-tree",
    next: "ml-kmeans",
  },
  {
    slug: "ml-kmeans",
    categoryId: "ai",
    title: "K-Means Clustering",
    marathiTitle: "K-means — labels न सांगता data चे गट — कुठले ग्राहक एकत्र?",
    level: "intermediate",
    minutes: 35,
    summary: "Unsupervised मधील सर्वात लोकप्रिय — K-means. Centroids ची टाकणी, iterate, तसे K निवड (elbow) आणि scaling/outlier ची काळजी.",
    sections: [
      {
        title: "K-means — data चे गट म्हणजे काय?",
        content: "समजा मार्केटिंग टीम ला ग्राहकांचे गट हवे आहेत — कोणते एकत्र वागतात. K-means data ला K गटांत विभागतो.\nप्रत्येक गटाला मध्य बिंदू (centroid) असतो; आपणच गट हवा तर K ला सांगतो.\nहे unsupervised आहे — आधीपासून उत्तराचा कोणताच label नसतो.",
      },
      {
        title: "का शिकावे? K-means — data चे गट चे फायदे आणि महत्त्व",
        content: "ग्राहक विभाग, document grouping, image segmentation, anomaly detection — ही सगळी पावले unsupervised असतात.\nK निवडणे (किती गट) हे कौशल्य elbow method ने शिकतात — प्रत्येक DM प्रोजेक्टचा पाया.\nLabels नसताना data मधली रचना पाहण्याची ही पहिली parallel दृष्टी — मौल्यवान.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Scaling न करणे — big unit features गट निर्णयावर जास्त प्रभाव.\n✗ K आधीच तर? — elbow/wcss तपासा.\n✗ Outlier — centroid ओढले जातात; cluster खराब.\n✗ K-means नॉन-गोल आकारांसाठी चुकतो — तेव्हा DBSCAN विचार करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Algorithm ची यांत्रिकी",
        content: "सुरुवातीला K random centroids. नंतर पुनरावृत्ती:\n1. प्रत्येक बिंदूला जवळच्या centroid ला जोडा.\n2. प्रत्येक गटाचा नवीन centroid (सरासरी) काढा.\n3. centroid आणि सदस्य स्थिर होईपर्यंत पुन्हा करा.\nयालाच expectation-maximization पद्धत म्हणतात.",
        code: `from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[1,1],[2,1],[8,8],[9,9],[1,3],[9,7]])
X = StandardScaler().fit_transform(X)
km = KMeans(n_clusters=2, random_state=42, n_init=10)
km.fit(X)
print(km.labels_)`,
        codeLanguage: "python",
        output: `[0 0 1 1 0 1]
# पहिले 3 बिंदू एकत्र नसले, चौकटी निर्णय — हेच गट
# n_init ने random start चा भर कमी होतो`,
      },
      {
        title: "Elbow — किती गट?",
        content: "K प्रत्येकी WCSS (व्यासाच्या आतल्या दूरीचा total). laps K वाढला की WCSS कमी होतो — पण वेग हळू.\nElbow म्हणजे तो बिंदू जिथे कमी होण्याचा वेग अचानक कमी होतो — तीच K. Silhouette score नेही तपासता येते.",
        code: `import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

wcss = []
for k in range(1, 7):
    km = KMeans(n_clusters=k, n_init=10, random_state=42).fit(X)
    wcss.append(km.inertia_)
plt.plot(range(1, 7), wcss, "o-")
plt.xlabel("K"); plt.ylabel("WCSS"); plt.show()`,
        codeLanguage: "python",
		output: `# graph — K=3 नंतर WCSS हळु कमी — तो elbow
# तिथेच गटांची निवड`,
      },
      {
        title: "सारांश — k-means",
        content: "centroid+दूरी ने K गट. scaling अनिवार्य, K elbow/Silhouette ने, outliers काढा. आकार गोल नसेल तर DBSCAN. पुढील धडा: hyperparameter व्यवस्थापन — tuning.",
      },
    ],
    practiceQuestions: [
      "scaling गटांवर का परिणाम करते?",
      "Elbow method म्हणजे काय?",
      "K कोणत्या परिस्थितीत k-means चुकतो?",
    ],
    quiz: [
      { question: "K-means हा काय आहे?", options: ["unsupervised गट", "supervised regression", "neural net", "optimizer"], correct: 0 },
      { question: "प्रत्येक गटाचा मध्य काय असतो?", options: ["centroid", "label", "loss", "threshold"], correct: 0 },
      { question: "K निवडण्यासाठी काय वापरतात?", options: ["Elbow/WCSS", "accuracy", "precision", "loss curve"], correct: 0 },
      { question: "K-means मध्ये scaling का?", options: ["इकटक इकटक unit असमान", "फक्त ग्राफ", "speed", "काही नाही"], correct: 0 },
      { question: "गोल नसलेल्या आकारांसाठी?", options: ["DBSCAN", "K-means", "linear", "tree"], correct: 0 },
    ],
    related: ["ml-feature-scaling", "ml-intro-methods", "ds-outliers"],
    prev: "ml-random-forest",
    next: "ml-hyperparameters",
  },
  {
    slug: "ml-hyperparameters",
    categoryId: "ai",
    title: "Hyperparameter Tuning",
    marathiTitle: "Hyperparameter tuning — model च्या नॉब्स आपोआप जुळवणे — random grid search",
    level: "advanced",
    minutes: 35,
    summary: "Hyperparameter (depth, learning_rate, n_estimators) model ची सेटिंग. GridSearch, RandomSearch, tuning-validation चक्र आणि सामान्य नियम.",
    sections: [
      {
        title: "Hyperparameter tuning — model च्या नॉब्स जुळवणे म्हणजे काय?",
        content: "model शिकतो weights — पण depth=5, learning_rate=0.01, n_estimators=100 ही सेटिंग आपण training आधी ठरवतो. अशा सेटिंगला hyperparameter म्हणतात.\nही सेटिंग स्वयंचलित शोधणे म्हणजे tuning — GridSearch सारख्या methods ने विविध जोड्या आपोआप तपासल्या जातात.\nहा धडा tuning ची यांत्रिकी, leakage ची काळजी आणि व्यावहारिक नियम दाखवतो.",
      },
      {
        title: "का शिकावे? Hyperparameter tuning — model च्या नॉब्स चे फायदे आणि महत्त्व",
        content: "योग्य depth/learning rate ने model च्या क्षमताच बदलते — एकच data, दोन सेटिंग, दोन वेगळे परिणाम.\nTuning न करता model चुकीचा ठरतो किंवा न्याय्य वापर होत नाही — हे कौशल्य प्रत्येक serious project मध्ये लागते.\nवाचून न थांबता एखाद्या छोट्या grid वर tuning करून बघा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Test data वर tuning — test ही एकदाची परीक्षा; फक्त validation/grid च्या आत tuning करा.\n✗ खूप मोठा grid — एकत्र विचारधारा वेळ घेते; RandomSearch ने वेळ कमी करा.\n✗ कॉपी करताना value चुकणे — हवा तो parameter त्याच्या step ला देणे.\n✗ Tuning नंतर बिन test verify — अंतिम खात्री test data वरच घ्या.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "GridSearch आणि RandomSearch",
        content: "GridSearchCV hyperparameters च्या सर्व जोड्या (उदा. depth×leaf) cross-validation वर तपासतो — खात्री पण महाग.\nRandomizedSearchCV random जोड्या चाचपतो — मोठ्या space साठी जलद आणि सहसा तितकाच चांगला.\nParameter naming pipeline मध्ये 'step__param' अशी असते — चुकल्यास warning येतो.",
        code: `from sklearn.model_selection import GridSearchCV
from sklearn.ensemble import RandomForestClassifier

grid = {
    "n_estimators": [50, 100],
    "max_depth": [3, 5, None],
}
gs = GridSearchCV(RandomForestClassifier(random_state=42),
                  grid, cv=5, n_jobs=-1)
gs.fit(X_train, y_train)
print(gs.best_params_, gs.best_score_)`,
        codeLanguage: "python",
        output: `{'max_depth': 5, 'n_estimators': 100} 0.96
# best_params_ + best_score_ — tuning चा निकाल`,
      },
      {
        title: "सारांश — hyperparameter tuning",
        content: "depth/rate/estimators हे training आधी ठरतात — त्यांना tuning करा. validation वर search, test ने अंतिम तपासणी. Grid जास्त तर Random. पुढील धडा: हे सगळे घर — scikit-learn चा संपूर्ण दौरा.",
      },
    ],
    practiceQuestions: [
      "Hyperparameter कोणते असतात?",
      "search कुठे चालवतात — train किंवा test वर?",
      "Grid खूप मोठा असेल तर काय कराल?",
    ],
    quiz: [
      { question: "Hyperparameter कोणता?", options: ["max_depth", "weight", "bias", "prediction"], correct: 0 },
      { question: "काय असेल तर model स्वतः शिकतो?", options: ["weights", "depth", "learning rate", "batch size"], correct: 0 },
      { question: "Cross-validation कुठे वापरतात?", options: ["tuning निर्णय", "test only", "कधी नाही", "data generate"], correct: 0 },
      { question: "Leakage टाळण्यासाठी?", options: ["test कोणीही touching नाही", "सगळे data tuning", "test वर search", "फक्त train"], correct: 0 },
      { question: "Tuning नंतर अंतिम verify कसा?", options: ["test data", "training", "grid best", "random"], correct: 0 },
    ],
    related: ["ml-cross-validation", "ml-pipeline", "ml-random-forest"],
    prev: "ml-kmeans",
    next: "ml-scikit-learn",
  },
  {
    slug: "ml-scikit-learn",
    categoryId: "ai",
    title: "scikit-learn Toolkit Tour",
    marathiTitle: "scikit-learn — ऑल-इन-वन ML toolbox चा संपूर्ण दौरा",
    level: "intermediate",
    minutes: 35,
    summary: "sklearn ची मुख्य modules — preprocessing, model_selection, sklearn.metrics, pipeline एकाच ठिकाणी. Dataset load, classifier playground आणि दररोजचा workflow.",
    sections: [
      {
        title: "scikit-learn — ML toolbox म्हणजे काय?",
        content: "scikit-learn हा Python मधील सगळ्यात लोकप्रिय ML library — एका package मध्ये preprocessing, models, evaluation, pipeline.\nपरिमिती X/y, fit/predict नावाची समान आज्ञा सगळ्या model साठी — एकदा शिकलं तर सगळे उपयोगी.\nPyTorch सारखे low-level नाही; packages कोअर ML मध्ये गोळा करतो.",
      },
      {
        title: "का शिकावे? scikit-learn — ML toolbox चे फायदे आणि महत्त्व",
        content: "कोर ML मध्ये एकच library पुरेशी — प्रशिक्षण ते evaluation. मुळांपासून शिकत असल्यास this मध्येच आधार.\nModel चॉईस न करता तुलना करणे (तेच faithful benchmark) — गांभीर्याने वेळ वाचतो.\nखऱ्या tools मध्ये sklearn हा data scientist चा दररोजचा आधार आहे.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ fit गोष्टी test वर — leakage.\n✗ Dataset label/feature shape — fit ने X 2D हवे, y 1D.\n✗ चुकीची metric — accuracy imbalanced वर भ्रमित करते.\n✗ Install environment — pip install scikit-learn योग्य environment मध्ये करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "मुख्य modules",
        content: "sklearn.preprocessing (scalers, encoders), sklearn.model_selection (train_test_split, cross_val_score, GridSearch), sklearn.metrics (accuracy, confusion, report), sklearn.ensemble (RandomForest, GradientBoosting), sklearn.pipeline (Pipeline).\nDatasets च्या प्लेसहोल्डर: sklearn.datasets.load_iris() सारखे built-in — प्रॅक्टिस साठी उत्तम.",
        code: `from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
Xtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.3, random_state=1)
model = RandomForestClassifier(n_estimators=50).fit(Xtr, ytr)
print(accuracy_score(yte, model.predict(Xte)))`,
        codeLanguage: "python",
        output: `0.978
# 150 फुलांवर 97.8% — toolbox ची शक्ती`,
      },
      {
        title: "Pipeline — सगळे एकत्र",
        content: "Pipeline एकाच object मध्ये scaling+model बांधतो — fit_train/transform_test ची गोंधळ जाते.\nGridSearch पाइपलाइन वर लागू होऊन hyperparameter search सगळ्या steps वर चालते.\nपुढील धड्यात pipeline चा detailed दौरा होईल.",
        code: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

pipe = make_pipeline(StandardScaler(), SVC())
pipe.fit(Xtr, ytr)
print(pipe.score(Xte, yte))`,
        codeLanguage: "python",
        output: `0.978
# एक object — scaling + model, बंद गोंधळ`,
      },
      {
        title: "सारांश — scikit-learn",
        content: "एक library — preprocessing/model/evaluation/pipeline. fit/predict समान. मध्ये built-in datasets सराव करा. पुढील धडा: हे सगळे pipeline मध्ये गुंफणे.",
      },
    ],
    practiceQuestions: [
      "sklearn मध्ये model तयार करण्याची समान आज्ञा कोणती?",
      "Pipeline चा फायदा काय (scaling च्या संदर्भात)?",
      "Practice datasource कोणते built-in आहेत?",
    ],
    quiz: [
      { question: "scikit-learn हा काय?", options: ["ML library", "game engine", "database", "browser"], correct: 0 },
      { question: "मॉडेलची समान आज्ञा?", options: ["fit/predict", "train/run", "setup/go", "load/save"], correct: 0 },
      { question: "Iris dataset मध्ये किती गट?", options: ["3", "2", "5", "150"], correct: 0 },
      { question: "Pipeline मध्ये काय गुंफतात?", options: ["scaling+model", "फक्त model", "फक्त data", "काही नाही"], correct: 0 },
      { question: "Accuracy imbalanced वर कशी?", options: ["भ्रामक", "खात्रीदायक", "समान", "अजिबात नाही"], correct: 0 },
    ],
    related: ["ml-pipeline", "ml-random-forest", "ml-evaluation-metrics"],
    prev: "ml-hyperparameters",
    next: "ml-pipeline",
  },
  {
    slug: "ml-pipeline",
    categoryId: "ai",
    title: "ML Pipeline End-to-End",
    marathiTitle: "ML pipeline — raw data पासून prediction पर्यंत सगळा प्रवाह एका ओळीत",
    level: "advanced",
    minutes: 40,
    summary: "Raw data — clean — scale — model — predict ही शिस्त Pipeline मध्ये सामावून घेणे. ColumnTransformer, feature unions आणि GridSearch सह इंजिनियरिंग workflow.",
    sections: [
      {
        title: "ML pipeline — raw data पासून prediction पर्यंत म्हणजे काय?",
        content: "खऱ्या project मध्ये data घाण असतो — missing values, काही string, काही numbers. प्रत्येक step हाताने करणे गोंधळाचा वाटा.\nPipeline हे सगळे steps एका object मध्ये बांधतो: impute → scale → model.\npredict(fit) ची शिस्त एकवटलेली ठेवते आणि leakage टाळते.",
      },
      {
        title: "का शिकावे? ML pipeline — raw data पासून prediction पर्यंत चे फायदे आणि महत्त्व",
        content: "पाईपलाइन म्हणजे production-grade code — ग्रिडसर्च, deploy, reproducibility एका तयार ऑब्जेक्टमध्ये.\nजेव्हा 20 steps हाताने होतात तेव्हा एक step विसरून score खोटा होतो — पाइपलाइन ती संकट दूर करते.\nवाचून न थांबता mixed-type छोट्या data वर पाइपलाइन उभी करा — हेच वेगळे कौशल्य निघेल.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ बाहेरचे steps (न सुटलेले) — सगळे steps pipeline मध्येच ठेवा.\n✗ ColumnTransformer न करणे — numeric/string भिन्न handle करा.\n✗ Transformer + estimator union — naming तपासा.\n✗ GridSearch मध्ये पाइपलाइन parameter ची naming ('model__depth') न चुकवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "पहिली pipeline",
        content: "make_pipeline(imputer, scaler, model) ने सरळ आरंभ होतो. fit सगळ्या steps वर, predict output शेवटच्या step कडून.\nhamara numeric columns handle करतो — string columns वेगळे encoder, ColumnTransformer ने.",
        code: `from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier

pipe = Pipeline([
    ("imputer", SimpleImputer(strategy="median")),
    ("scaler", StandardScaler()),
    ("model", RandomForestClassifier(n_estimators=100)),
])
pipe.fit(X_train, y_train)
print(pipe.score(X_test, y_test))`,
        codeLanguage: "python",
        output: `0.92
# जर X मध्ये missing असला तरी median ने भरला जातो
# एकच object ट्रान्सफॉर्म + अंदाज`,
      },
      {
        title: "ColumnTransformer — वेगवेगळे types",
        content: "काही columns numeric (age, income), काही categorical (city, gender). प्रत्येकाला वेगळा treatment हवा.\nColumnTransformer ne numeric columns → scaler, string columns → OneHotEncoder — एका map मध्ये.\nसगळे pipeline मध्ये जोडल्यावर cross-validation आणि deployment सुरळीत.",
        code: `from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder

pre = ColumnTransformer([
    ("num", StandardScaler(), ["age", "income"]),
    ("cat", OneHotEncoder(), ["city"]),
])
full = Pipeline([("pre", pre), ("model", RandomForestClassifier())])`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — pipeline",
        content: "steps एक object मध्ये — leakage बंद,GridSearch चालते, reproduce होतो. ColumnTransformer ने mixed data. हा तुझा production baseline. पुढे data science toolkit — numpy/pandas चा डाव.",
      },
    ],
    practiceQuestions: [
      "Pipeline मध्ये steps कशी वेगळे कसे नियंत्रित करतात?",
      "ColumnTransformer कधी गरजेचा?",
      "GridSearch मध्ये parameter नाव कसे दिसते ('model__')?",
    ],
    quiz: [
      { question: "Pipeline चा मुख्य फायदा?", options: ["no leakage + एक object", "वेग", "सौंदर्य", "ऋण"], correct: 0 },
      { question: "Missing values भरण्यासाठी?", options: ["SimpleImputer", "scaler", "model", "sigmoid"], correct: 0 },
      { question: "Mixed columns हाताळण्यासाठी?", options: ["ColumnTransformer", "StandardScaler", "KMeans", "PCA"], correct: 0 },
      { question: "GridSearch pipeline मध्ये parameter naming?", options: ["step__param", "step.param", "param", "None"], correct: 0 },
      { question: "शेवटचा output कोणत्या step कडून?", options: ["estimator", "imputer", "scaler", "pipe start"], correct: 0 },
    ],
    related: ["ml-scikit-learn", "ds-data-cleaning", "ml-hyperparameters"],
    prev: "ml-scikit-learn",
    next: "ds-numpy",
  },
];