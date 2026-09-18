import type { Tutorial } from "@/data/tutorials";

// === AI · EXPERT — vectors/matrices, DL internals, GAN, evaluation, career ===
// ai-mlops → ai-vectors → ai-matrices → ai-derivatives → ai-probability
// → ai-regularization → ai-dropout-batchnorm → ai-autoencoder → ai-gan
// → ai-reinforcement-advanced → ai-optimization → ai-llm-evaluation
// → ai-prompt-frameworks → ai-rag-advanced → ai-agents-multi → ai-safety
// → ai-future-trends → ai-career-llm → (end)

export const aiExpert: Tutorial[] = [
  {
    slug: "ai-vectors",
    categoryId: "ai",
    title: "Vectors",
    marathiTitle: "Vectors — दिशा व आकार असलेली संख्या; AI कुठे वापरते",
    level: "beginner",
    minutes: 25,
    summary: "AI मध्ये प्रत्येक गोष्ट vector आहे. weight sum ने व्हेक्टरवर गणित — embedding आणि similarity यांचा आधार.",
    sections: [
      {
        title: "Vector म्हणजे काय",
        content: "Vector = संख्यांची क्रमबद्ध यादी — एकाच गोष्टीची वेगवेगळी परिमाणे. उदा. फोटो, sentence embedding.\nAI मध्ये input, output, weights सर्व vectors म्हणून राहतात.\nसहसा एका row म्हणून ठेवतात.",
      },
      {
        title: "का शिकावे? Vectors चे फायदे",
        content: "सर्व मॉडेल्सचा व्यवहार म्हणजे vectors वर गणित — हे समजल्यावर embedding, gradient सर्व सोपे.\nCosine similarity — recommendation आणि search चा आधार.\nवाचून न थांबता एक उदाहरण हाताने काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ आकार न तपासता '+' करणे — dimensions समान हवे.\n✗ dot product आणि element-wise गोंधळ — योग्य निवडा.\n✗ magnitude vs direction गोंधळ — embeddings मध्ये direction महत्त्वाचे.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Vector operations",
        content: "Addition — बिंदूनिहाय '+'. dot product = sum of products — दिशा चे माप.\nmagnitude पासून cosine similarity — search/reco मध्ये दिशा.",
        code: `import numpy as np
a = np.array([1, 2])
b = np.array([3, 4])
print(a + b)              # [4, 6]
print(np.dot(a, b))       # 1*3 + 2*4 = 11
print(np.linalg.norm(a))  # sqrt(1+4)`,
        codeLanguage: "python",
        output: `[4 6]
11
2.2360679`,
      },
      {
        title: "Similarity — cosine",
        content: "cosine similarity म्हणजे दोन वेक्टरच्या दिशेची समानता (1 = सारखे).\nEmbeddings चे similarity हेच RAG आणि search चे हृदय.",
        code: `from numpy.linalg import norm
def cos_sim(a, b):
    return np.dot(a, b) / (norm(a) * norm(b))
print(cos_sim(np.array([1, 0]), np.array([2, 0])))  # 1.0
print(cos_sim(np.array([1, 0]), np.array([0, 1])))  # 0.0`,
        codeLanguage: "python",
        output: `1.0
0.0`,
      },
      {
        title: "सारांश — Vectors",
        content: "Vectors = क्रमबद्ध संख्या; dot/cosine — embedding आधार. पुढील धडा: matrices — गणितातील गुणाकार.",
      },
    ],
    practiceQuestions: [
      "dot product कसा मोजतात?",
      "cosine similarity काय सांगते?",
      "दोन वेक्टरचे dot हाताने काढा.",
    ],
    quiz: [
      { question: "AI मध्ये गोष्टी कसे दर्शवतात?", options: ["vector", "फक्त text", "file", "color"], correct: 0 },
      { question: "dot product काय मोजतो?", options: ["sum of products", "difference", "mean", "mode"], correct: 0 },
      { question: "cosine similarity max?", options: ["1", "0", "-1", "100"], correct: 0 },
      { question: "Embedding तुलनेत काय वापरतात?", options: ["cosine", "sort", "count", "regex"], correct: 0 },
      { question: "Vector addition कसे?", options: ["element-wise", "matrix flip", "random", "hash"], correct: 0 },
    ],
    related: ["ml-linear-regression", "ds-numpy", "dl-embeddings"],
    prev: "ai-mlops",
    next: "ai-matrices",
  },
  {
    slug: "ai-matrices",
    categoryId: "ai",
    title: "Matrices",
    marathiTitle: "Matrices — vectors चे ग्रिड; multiplication, transpose, shapes",
    level: "beginner",
    minutes: 25,
    summary: "Matrix = संख्यांची सारणी. Neural network layer म्हणजे matrix गुणाकार. आकारांचे नियम समजून घ्या.",
    sections: [
      {
        title: "Matrix म्हणजे काय",
        content: "Matrix म्हणजे आकड्यांची सारणी (rows × cols). images, batches, weights असे दर्शवतात.\nसर्व गणितांमध्ये same धारणा — shape ही सर्वात मोठा निकष.\nTranspose (T) — rows आणि cols बदलणे.",
      },
      {
        title: "का शिकावे? Matrices चे फायदे",
        content: "Neural network layer हा मुळात matrix गुणाकारच — inputs × weights.\nGPU मध्ये matrix गणित parallel — वेगवान training चा आधार.\nवाचून न थांबता एक multiplication हाताने करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Shape mismatch — inner dimensions समान पाहिजे.\n✗ '*' आणि '@' गोंधळ — matrix multiply ला '@'.\n✗ Transpose विसरणे — weights आकार तपासा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Matrix multiplication",
        content: "(m×n) @ (n×k) = (m×k). प्रत्येक cell हा row×col चा dot.\nNumPy मध्ये '@', PyTorch मध्ये '@' किंवा mm.",
        code: `import numpy as np
A = np.array([[1, 2], [3, 4]])   # 2x2
B = np.array([[5, 6], [7, 8]])   # 2x2
print(A @ B)
print(A.shape)`,
        codeLanguage: "python",
        output: `[[19 22]
 [43 50]]
(2, 2)`,
      },
      {
        title: "Layer as matrix",
        content: "input (N, D) @ weight (D, H) = output (N, H) — N बॅच, D feats, H hidden.\nहेच model चा forward — weights येथेच बसतात.",
        code: `import numpy as np
x = np.random.randn(4, 3)      # batch=4, feats=3
W = np.random.randn(3, 2)      # 3 -> 2
y = x @ W
print(y.shape)                 # (4, 2)`,
        codeLanguage: "python",
        output: `(4, 2)`,
      },
      {
        title: "सारांश — Matrices",
        content: "Matrices = grids; layer = matrix mul; shapes नियम. पुढील धडा: derivatives — gradient चा आधार.",
      },
    ],
    practiceQuestions: [
      "Matrix multiply ची अट काय?",
      "Layer output shape कसा मिळतो?",
      "(2,3) @ (3,4) shape काय?",
    ],
    quiz: [
      { question: "Matrix म्हणजे?", options: ["grid of numbers", "string", "audio", "object"], correct: 0 },
      { question: "Matrix multiply operator?", options: ["@", "*", "&", "|"], correct: 0 },
      { question: "(2,3) @ (3,4) output?", options: ["(2,4)", "(3,3)", "(2,3)", "(4,2)"], correct: 0 },
      { question: "Layer म्हणजे?", options: ["matrix mul", "database", "regex", "queue"], correct: 0 },
      { question: "GPU चा फायदा?", options: ["parallel maths", "graphics", "fonts", "icons"], correct: 0 },
    ],
    related: ["ds-numpy", "dl-forward-prop", "ml-linear-regression"],
    prev: "ai-vectors",
    next: "ai-derivatives",
  },
  {
    slug: "ai-derivatives",
    categoryId: "ai",
    title: "Derivatives",
    marathiTitle: "Derivatives — बदलाचा दर; slope आणि gradient descent",
    level: "intermediate",
    minutes: 30,
    summary: "Derivative कसे बदलते ते मोजते. slope काढून model कोणत्या दिशेने सुधारायचे ते ठरवते — gradient descent चा heart.",
    sections: [
      {
        title: "Derivative म्हणजे काय",
        content: "Derivative म्हणजे त्या बिंदूवरचा बदलाचा दर — वक्राचा slope.\nslope जास्त → खाली आणू; slope कमी → जवळ थांबा.\nहा slope gradient descent मध्ये weights अडजस्ट करतो.",
      },
      {
        title: "का शिकावे? Derivatives चे महत्त्व",
        content: "loss कमी करण्याची दिशा हीच — backpropagation चा कणा.\nlearning rate सुद्धा slope वर आधारित.\nवाचून न थांबता फॉर्म्युला स्वतः लिहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ slope आणि value गोंधळ — derivative वेगळे, value वेगळे.\n✗ learning rate खूप मोठा — उडी टाकून निसटणे.\n✗ autograd वर अवलंबून — पण मूलभूत नियम हाताने.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "अर्थआकलन — slope",
        content: "f(x)=x^2 साठी derivative 2x. x=3 वर slope 6 — वाढ चालू.\nGradient descent: w = w - lr * slope.",
        code: `def f(x): return x**2
def df(x): return 2*x
w, lr = 3.0, 0.1
for i in range(10):
    w = w - lr * df(w)          # step down
print(round(w, 4))              # शून्य जवळ`,
        codeLanguage: "python",
        output: `0.3221`,
      },
      {
        title: "Autograd — स्वयंचलित",
        content: "PyTorch चे autograd सर्व gradients आपोआप मोजते — तुम्ही फक्त model बांधता.\nमूलभूत गणित समजलेले हवे; पण दैनंदिनी autograd वापरा.",
        code: `import torch
x = torch.tensor(3.0, requires_grad=True)
y = x ** 2
y.backward()
print(x.grad)      # d(x^2)/dx at 3 = 6`,
        codeLanguage: "python",
        output: `tensor(6.)`,
      },
      {
        title: "सारांश — Derivatives",
        content: "slope = बदलाचा दर; gradient descent slopes वरून direction. पुढील धडा: probability — AI चे uncertainty.",
      },
    ],
    practiceQuestions: [
      "Gradient descent चे नियम काय?",
      "learning rate जास्त झाल्यास?",
      "autograd मध्ये gradient कसा मिळतो?",
    ],
    quiz: [
      { question: "Derivative काय मोजतो?", options: ["बदलाचा दर", "सरासरी", "count", "sum"], correct: 0 },
      { question: "w चा update नियम?", options: ["w - lr*slope", "w + lr", "w*lr", "w/lr"], correct: 0 },
      { question: "autograd काय करते?", options: ["gradients auto", "database", "websocket", "image"], correct: 0 },
      { question: "lr खूप मोठा?", options: ["निसटणे", "fast converge", "fix", "color"], correct: 0 },
      { question: "slope 0 म्हणजे?", options: ["सपाट", "उभे", "झुके", "जोर"], correct: 0 },
    ],
    related: ["ml-gradient-descent", "dl-backprop", "dl-optimizers"],
    prev: "ai-matrices",
    next: "ai-probability",
  },
  {
    slug: "ai-probability",
    categoryId: "ai",
    title: "Probability",
    marathiTitle: "Probability — अनिश्चितता मोजणे; likelihood, uncertainty",
    level: "intermediate",
    minutes: 30,
    summary: "AI हे uncertainty मध्ये काम करते. probability, joint/conditional आणि Bayes — model output ची खरी अर्थ.",
    sections: [
      {
        title: "Probability म्हणजे काय",
        content: "Probability = शक्यता 0 ते 1. P(rain)=0.7 म्हणजे 70%.\nAI output score अनेकदा probability असते — निर्णय घेताना हे वाचता येते.\njoint P(A,B) आणि conditional P(A|B) — स्थिती सोबत.",
      },
      {
        title: "का शिकावे? Probability चे फायदे",
        content: "Model uncertainty — confidence, sampling, थ्रेशोल्ड यांचे नियंत्रण.\nBayes — विश्वास update — recommendation/spam चा आधार.\nवाचून न थांबता एक Bayes उदाहरण काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ प्रत्येक score ला probability न मानणे — सर्व score नाही.\n✗ conditional ची दिशा — P(A|B) आणि P(B|A) वेगळे.\n✗ छोटा sample — probability दीर्घकालीन आकडा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Bayes theorem",
        content: "P(A|B) = P(B|A)*P(A)/P(B). नव्या माहितीसह विश्वास सुधारणे — spam filter चा आधार.",
        code: `def bayes(p_b_given_a, p_a, p_b):
    return p_b_given_a * p_a / p_b
# P(spam)=0.3, P(word|spam)=0.8, P(word)=0.5
print(round(bayes(0.8, 0.3, 0.5), 3))`,
        codeLanguage: "python",
        output: `0.48
# शब्द दिसला तर spam होण्याची शक्यता 48%`,
      },
      {
        title: "Model probability वापर",
        content: "softmax output — classes वर probability distribution.\nthreshold ठरवताना cost (फाल्स पॉझिटिव्ह vs नेगेटिव्ह) मोजा.",
      },
      {
        title: "सारांश — Probability",
        content: "0-1 शक्यता; Bayes update; model scores read. पुढील धडा: regularization — overfit थांबवणे.",
      },
    ],
    practiceQuestions: [
      "P(A|B) म्हणजे काय?",
      "Bayes कधी उपयोगी?",
      "softmax काय देते?",
    ],
    quiz: [
      { question: "Probability range?", options: ["0 ते 1", "1 ते 10", "-1 ते 1", "अमर्याद"], correct: 0 },
      { question: "P(A|B) म्हणजे?", options: ["B दिल्यावर A", "A दिल्यावर B", "A+B", "A-B"], correct: 0 },
      { question: "softmax output?", options: ["distribution", "sorted list", "hash", "path"], correct: 0 },
      { question: "Bayes काय करतो?", options: ["विश्वास update", "data delete", "sort", "video"], correct: 0 },
      { question: "ठोस विश्वास हवा तर?", options: ["evidence गोळा", "skip", "random", "reset"], correct: 0 },
    ],
    related: ["ml-evaluation-metrics", "ml-logistic-regression", "ai-vectors"],
    prev: "ai-derivatives",
    next: "ai-regularization",
  },
  {
    slug: "ai-regularization",
    categoryId: "ai",
    title: "Regularization",
    marathiTitle: "Regularization — L1/L2, dropout, early stopping — साधेपणा",
    level: "intermediate",
    minutes: 30,
    summary: "मॉडेल नमुन्य शिकून memory न करता generalise होण्यासाठी regularization. L1/L2, early stopping आणि dropout no control.",
    sections: [
      {
        title: "Regularization म्हणजे काय",
        content: "मॉडेल जास्त training memory करतो तर overfit — training चांगले, test नाही.\nRegularization मोठ्या weights ला शिक्षा करून साधे मॉडेल ठेवते.\nही शिक्षा model complexity वर — input data वर नाही.",
      },
      {
        title: "का शिकावे? Regularization चे फायदे",
        content: "Test accuracy वाढवण्याचा सरळ मार्ग — बहुतेक स्पर्धांमध्ये निर्णायक.\nही skills बहुतेक models मध्ये आवश्यक.\nवाचून न थांबता regularization ने/शिवाय तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ आधी data न बघता regularization — आधी सोपा baseline.\n✗ L1/L2 खूप तीव्र — underfit.\n✗ Dropout test वर चालवणे — inference मध्ये बंद.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "L1/L2 penalties",
        content: "L2: loss मध्ये sum(w^2); L1: sum(|w|) — sparse weights.\nscikit मध्ये parameter म्हणून जोडतात.",
        code: `from sklearn.linear_model import Ridge
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
m = make_pipeline(PolynomialFeatures(9),
                  Ridge(alpha=1.0))
m.fit(X_train, y_train)
print(m.score(X_test, y_test))`,
        codeLanguage: "python",
        output: `0.92
# Polynomial + Ridge — variance कमी, test चांगला`,
      },
      {
        title: "Early stopping आणि Dropout",
        content: "validation सुधारत नाही तर थांबा — हेच early stopping.\nDropout training मध्ये neurons random बंद — network मजबूत होते.",
      },
      {
        title: "सारांश — Regularization",
        content: "L1/L2 + early stop + dropout — overfit थांबवणे. पुढील धडा: dropout+batchnorm — deep stabilization.",
      },
    ],
    practiceQuestions: [
      "L1 आणि L2 मध्ये फरक?",
      "early stopping काय?",
      "एका regression वर Ridge try करा.",
    ],
    quiz: [
      { question: "Overfit म्हणजे?", options: ["training चांगले test नाही", "दोन्ही चांगले", "सर्व fail", "fast training"], correct: 0 },
      { question: "L2 penalty काय?", options: ["sum(w^2)", "sum(w)", "max(w)", "avg(w)"], correct: 0 },
      { question: "L1 काय देते?", options: ["sparse weights", "dense", "nothing", "shuffle"], correct: 0 },
      { question: "Dropout inference वर?", options: ["बंद", "चालू", "hidden", "max"], correct: 0 },
      { question: "Regularization goal?", options: ["साधे मॉडेल", "मोठे model", "जास्त colors", "वेग"], correct: 0 },
    ],
    related: ["ml-overfitting", "ml-bias-variance", "ml-hyperparameters"],
    prev: "ai-probability",
    next: "ai-dropout-batchnorm",
  },
  {
    slug: "ai-dropout-batchnorm",
    categoryId: "ai",
    title: "Dropout आणि Batch Norm",
    marathiTitle: "Dropout + Batch Normalization — deep network stabilize करणे",
    level: "intermediate",
    minutes: 30,
    summary: "Dropout neurons random बंद करून जास्त निर्भरता रोखते. BatchNorm layers मधील वितरण स्थिर ठेवते — training स्थिर.",
    sections: [
      {
        title: "Dropout म्हणजे काय",
        content: "Training दरम्यान प्रत्येक neuron काही probability ने बंद; बाकी स्केल.\nयामुळे network एकत्र निर्भरता तयार करत नाही — generalize अधिक.\ntest वेळी सर्व चालू (off).",
      },
      {
        title: "का शिकावे? Stabilization चे फायदे",
        content: "Deep network training मध्ये ही दोन तंत्रे सर्वात सामान्य सुधारणा.\nBatchNorm ने learning rate मोठा वापरता येतो.\nवाचून न थांबता एक network या सोबत/शिवाय शिकवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Dropout test वर तसेच ठेवणे — inference मध्ये बंद करा.\n✗ BatchNorm आणि activation क्रम — Linear → Norm → ReLU.\n✗ लहान batch सह BatchNorm — unstable असते.\n✗ तीव्र dropout — underfit.",
      },
      {
        title: "PyTorch implementation",
        content: "nn.Dropout(p) आणि nn.BatchNorm1d — network मध्ये ठेवणे सरळ.",
        code: `import torch.nn as nn
model = nn.Sequential(
    nn.Linear(8, 64),
    nn.BatchNorm1d(64),
    nn.ReLU(),
    nn.Dropout(0.3),
    nn.Linear(64, 10),
)
model.train()   # dropout active
model.eval()    # dropout off`,
        codeLanguage: "python",
        output: `Dropout evaluate मध्ये बंद — eval() ने.`,
      },
      {
        title: "क्रम महत्त्वाचा",
        content: "सामान्य क्रम: Linear → BatchNorm → ReLU → Dropout.\nवेगवेगळ्या library मध्ये क्रम बदलतो — प्रयोग करून बघा.",
      },
      {
        title: "सारांश — Dropout+BatchNorm",
        content: "Dropout = generalization; BatchNorm = stability. eval() care. पुढील धडा: autoencoder.",
      },
    ],
    practiceQuestions: [
      "Dropout test वर का बंद?",
      "BatchNorm काय स्थिर ठेवते?",
      "mnist network मध्ये हे दोन जोडून पहा.",
    ],
    quiz: [
      { question: "Dropout काय करते?", options: ["neurons बंद", "neurons दुप्पट", "data बदल", "color"], correct: 0 },
      { question: "Dropout कधी बंद?", options: ["eval/test", "train", "सर्व वेळ", "कधी नाही"], correct: 0 },
      { question: "BatchNorm काय करते?", options: ["वितरण normalize", "data delete", "gradient skip", "share"], correct: 0 },
      { question: "लहान batch ला काय?", options: ["instability", "fast", "better", "color"], correct: 0 },
      { question: "eval() काय करते?", options: ["mode switch", "loss calc", "data load", "save"], correct: 0 },
    ],
    related: ["dl-cnn", "ai-regularization", "dl-optimizers"],
    prev: "ai-regularization",
    next: "ai-autoencoder",
  },
  {
    slug: "ai-autoencoder",
    categoryId: "ai",
    title: "Autoencoder",
    marathiTitle: "Autoencoder — input पुन्हा तयार करणे; compression आणि features",
    level: "advanced",
    minutes: 35,
    summary: "Autoencoder = encoder → latent → decoder. जास्त compact data, denoising आणि anomaly detection साठी.",
    sections: [
      {
        title: "Autoencoder म्हणजे काय",
        content: "Data घेऊन तेच पुन्हा बनवण्याचे शिकणारे network — लक्ष्य output = input.\nमधला थर (latent) — कमी dimensions, महत्त्वाची माहिती.\nहे self-supervised — labels न लागता.",
      },
      {
        title: "का शिकावे? Autoencoder चे फायदे",
        content: "Compression आणि denoising — अनेक data pipelines चा आधार.\nAnomaly detection — असामान्य data उच्च error दाखवते.\nवाचून न थांबता लहान mnist autoencoder बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Latent खूप मोठा — copy होते (identity).\n✗ Reconstruction visualize न करणे — तपासा.\n✗ Underfit — layers जास्त.\n✗ हे model नाही तर representation learner.",
      },
      {
        title: "Simple autoencoder",
        content: "encoder dense 784→32; decoder 32→784; loss mse.",
        code: `import torch, torch.nn as nn
class AE(nn.Module):
    def __init__(self):
        super().__init__()
        self.enc = nn.Linear(784, 32)
        self.dec = nn.Linear(32, 784)
    def forward(self, x):
        z = torch.relu(self.enc(x))
        return torch.sigmoid(self.dec(z))
model = AE()
loss_fn = nn.MSELoss()`,
        codeLanguage: "python",
        output: `Reconstruction मूळ image जवळ येते.`,
      },
      {
        title: "वापर — anomaly",
        content: "शिकवलेल्या data वर error कमी; असामान्य वर उच्च — हे detect करा.\nहे manufacturing, monitoring मध्ये वापरतात.",
      },
      {
        title: "सारांश — Autoencoder",
        content: "enc → latent → dec; compression, denoise, anomaly. पुढील धडा: GAN — नवीन data निर्माण.",
      },
    ],
    practiceQuestions: [
      "Latent काय साठवतो?",
      "Autoencoder loss काय?",
      "mnist autoencoder बनवा.",
    ],
    quiz: [
      { question: "Autoencoder लक्ष्य?", options: ["X पासून X", "X पासून Y", "text → audio", "image → video"], correct: 0 },
      { question: "Latent म्हणजे?", options: ["कमी dimensions", "मोठे data", "labels", "logs"], correct: 0 },
      { question: "Anomaly कसे ओळखता येते?", options: ["उच्च error", "कमी error", "color", "speed"], correct: 0 },
      { question: "Self-supervised म्हणजे?", options: ["labels नको", "प्रत्येक label हवे", "human label", "skip"], correct: 0 },
      { question: "Reconstruction का पहावे?", options: ["quality confirm", "decor", "logs", "style"], correct: 0 },
    ],
    related: ["dl-cnn", "dl-forward-prop", "ai-gan"],
    prev: "ai-dropout-batchnorm",
    next: "ai-gan",
  },
  {
    slug: "ai-gan",
    categoryId: "ai",
    title: "GAN",
    marathiTitle: "GAN — generator vs discriminator; नवीन data निर्माण",
    level: "advanced",
    minutes: 35,
    summary: "GAN ला नमुन्याचे distribution शिकून नवीन, वास्तववादी samples तयार करतो — नवीन image content ची यंत्रणा.",
    sections: [
      {
        title: "GAN म्हणजे काय",
        content: "दोन networks: generator (खोटा data) आणि discriminator (खरा/खोटा ओळखणारा).\nदोघे स्पर्धा करतात — generator हळूहळू वास्तववादी होतो.\nया खेळात दोघेही सुधारतात — हेच adversarial training.",
      },
      {
        title: "का शिकावे? GAN चे फायदे",
        content: "Image/video synthesis, style transfer, data augmentation.\nहे AI ची सर्जनशील बाजू — नवीन content निर्माण.\nवाचून न थांबता लहान DCGAN चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Imbalance — generator/discriminator शक्ती संतुलन.\n✗ Mode collapse — एकच प्रकार पुन्हा पुन्हा.\n✗ Labels flip — careful training loop.\n✗ सुरुवातीला लहान images.",
      },
      {
        title: "GAN loop",
        content: "प्रति step: real batch + fake batch; D loss; G loss; update.",
        code: `for x in dataloader:
    z = torch.randn(B, 100)
    fake = gen(z)
    d_loss = loss(disc(fake), 0) + loss(disc(real), 1)
    opt_d.zero_grad(); d_loss.backward(); opt_d.step()
    z = torch.randn(B, 100)
    g_loss = loss(disc(gen(z)), 1)
    opt_g.zero_grad(); g_loss.backward(); opt_g.step()`,
        codeLanguage: "python",
        output: `प्रत्येक step मध्ये दोन्ही सुधारतात.`,
      },
      {
        title: "एकत्र sample",
        content: "सुरुवातीच्या steps — pixels अस्पष्ट; पुढे realistic होते.\nआज diffusion किंवा GAN — concept समान.",
      },
      {
        title: "सारांश — GAN",
        content: "generator vs discriminator — नवीन samples. balance care. पुढील धडा: reinforcement learning खोलवर.",
      },
    ],
    practiceQuestions: [
      "GAN मध्ये दोन networks कोणते?",
      "Mode collapse म्हणजे?",
      "GAN loop ची structure लिहा.",
    ],
    quiz: [
      { question: "GAN चे दोन networks?", options: ["gen+disc", "enc+dec", "lstm+rnn", "svm+knn"], correct: 0 },
      { question: "Discriminator काय करतो?", options: ["खरा/खोटा", "नवीन बनवतो", "शब्द जोडतो", "compress"], correct: 0 },
      { question: "Mode collapse?", options: ["एकच प्रकार", "दोन प्रकार", "काही नाही", "speed up"], correct: 0 },
      { question: "Generator output?", options: ["नवीन sample", "label", "file", "model"], correct: 0 },
      { question: "Realistic कसे होते?", options: ["स्पर्धा training", "फक्त data", "seed", "luck"], correct: 0 },
    ],
    related: ["ai-autoencoder", "dl-cnn", "ai-gen-image"],
    prev: "ai-autoencoder",
    next: "ai-reinforcement-advanced",
  },
  {
    slug: "ai-reinforcement-advanced",
    categoryId: "ai",
    title: "Reinforcement Learning",
    marathiTitle: "RL — rewards, Q-values, policy gradient",
    level: "advanced",
    minutes: 35,
    summary: "RL मध्ये agent reward घेऊन युक्ती शिकते. Q-learning, DQN आणि policy gradient — गेम आणि रोबोट नियंत्रणाचा आधार.",
    sections: [
      {
        title: "RL म्हणजे काय",
        content: "Agent environment मध्ये action घेतो, reward मिळवतो आणि policy सुधारतो.\nTrial-and-error परंतु rewards नियोजित — हेच reinforcement.\nReward बरेचदा delayed — आधीच्या action ची किंमत नंतर दिसते.",
      },
      {
        title: "का शिकावे? RL चे फायदे",
        content: "गेम AI, रोबोटिक्स, वाहतूक control — decisions sequence.\nहे deep learning ची सक्रिय शाखा.\nवाचून न थांबता gym environment शिकवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Reward शिस्त नाही — सुरुवातीला छोटे.\n✗ exploration vs exploitation तोल.\n✗ discount factor 1 — infinite reward loop.\n✗ Training अस्थिर — दोन्ही moments पहा.",
      },
      {
        title: "Value आणि Policy",
        content: "Q(state, action) — भविष्यातील एकूण reward. DQN — Q चे network approximation.\nPolicy — कोणती action निवडायची याचा नकाशा.",
        code: `import gymnasium as gym
env = gym.make("CartPole-v1", render_mode=None)
state, _ = env.reset()
for step in range(200):
    action = env.action_space.sample()  # random exploration
    state, reward, done, trunc, _ = env.step(action)
    if done or trunc:
        break
print("steps till fall:", step + 1)`,
        codeLanguage: "python",
        output: `steps till fall: 15
# random policy लवकर पडते; DQN ने चांगले शिकते`,
      },
      {
        title: "DQN essential",
        content: "replay buffer — past experiences मधून sample; target network — stability.\ndiscount — भविष्याचे नियोजन. epsilon-greedy — exploration कमी.",
      },
      {
        title: "सारांश — RL",
        content: "agent → action → reward → policy. Q-learning, DQN. पुढील धडा: optimization — training speed.",
      },
    ],
    practiceQuestions: [
      "RL मध्ये feedback कसा?",
      "exploration म्हणजे काय?",
      "CartPole random ने चालवा.",
    ],
    quiz: [
      { question: "RL मध्ये agent काय करतो?", options: ["action+reward", "फक्त predict", "image draw", "hash"], correct: 0 },
      { question: "Qfunction काय?", options: ["अपेक्षित reward", "loss", "gradient", "plot"], correct: 0 },
      { question: "exploration म्हणजे?", options: ["नवीन tries", "फक्त best", "pause", "sort"], correct: 0 },
      { question: "discount factor काय?", options: ["भविष्य मोजते", "फक्त आता", "color", "skip"], correct: 0 },
      { question: "DQN म्हणजे?", options: ["deep Q network", "Data Q", "queue", "domain"], correct: 0 },
    ],
    related: ["ai-neural-networks", "dl-forward-prop", "dl-optimizers"],
    prev: "ai-gan",
    next: "ai-optimization",
  },
  {
    slug: "ai-optimization",
    categoryId: "ai",
    title: "Optimization खोलवर",
    marathiTitle: "Optimizers — SGD, Adam, learning rate schedules, warmup",
    level: "advanced",
    minutes: 35,
    summary: "Optimizer कुठे जायचे ते ठरवते. adaptive methods, schedules, batch — training speed व स्थिरता.",
    sections: [
      {
        title: "Optimization म्हणजे काय",
        content: "Gradient descent च्या आधारे weights अडजस्ट — पण speed आणि stability चे नियंत्रण.\nSGD — सोपा; Adam — adaptive learning प्रति parameter.\nआहे standard: AdamW + cosine schedule.",
      },
      {
        title: "का शिकावे? Optimization चे फायदे",
        content: "त्याच model ने योग्य optimizer — लक्षणीय वेग.\nLearning-rate schedule — संपूर्ण training मध्ये सुधारणा.\nवाचून न थांबता SGD vs Adam तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Learning rate एकदाच सेट — schedules योग्य.\n✗ Weight decay Adam सह चुकीचे — AdamW वापरा.\n✗ Batch मोठा करून lr न बदलणे.\n✗ Debug चा output वरच न करणे.",
      },
      {
        title: "Adam vs AdamW",
        content: "Adam — per-weight adaptive lr; AdamW — weight decay वेगळे.\nPyTorch/HF मध्ये हेच default.",
        code: `import torch.optim as optim
opt = optim.AdamW(model.parameters(),
                  lr=1e-4, weight_decay=0.01)
sched = optim.lr_scheduler.CosineAnnealingLR(
    opt, T_max=epochs)`,
        codeLanguage: "python",
        output: `cosine schedule — lr हळूहळू कमी — स्थिर finish.`,
      },
      {
        title: "Learning rate finder",
        content: "छोट्या run ने lr 1e-6 ते 1e-2 — loss graph वर सर्वोत्तम बिंदू निवडा.\nखूप वेळ येथेच वाचतो.",
      },
      {
        title: "सारांश — Optimization",
        content: "AdamW + cosine + warmup — standard. batch/lr एकत्र नियम. पुढील धडा: LLM evaluation.",
      },
    ],
    practiceQuestions: [
      "Adam काय adaptive करतो?",
      "AdamW वेगळे काय?",
      "एक schedule सह training run करा.",
    ],
    quiz: [
      { question: "काय adaptive होते?", options: ["per-param lr", "data", "loss", "epochs"], correct: 0 },
      { question: "AdamW मध्ये weight decay?", options: ["वेगळे", "नाही", "egal", "skip"], correct: 0 },
      { question: "cosine schedule काय?", options: ["lr कमी होतो", "lr वाढतो", "data जोडते", "model swap"], correct: 0 },
      { question: "lr finder कुठे पाहतो?", options: ["loss graph", "colors", "names", "size"], correct: 0 },
      { question: "Standard combo?", options: ["AdamW+cosine", "SGD no tack", "Adam+no sched", "anything"], correct: 0 },
    ],
    related: ["ml-gradient-descent", "dl-optimizers", "ml-hyperparameters"],
    prev: "ai-reinforcement-advanced",
    next: "ai-llm-evaluation",
  },
  {
    slug: "ai-llm-evaluation",
    categoryId: "ai",
    title: "LLM Evaluation",
    marathiTitle: "LLM evaluation — quality मोजणे, benchmarks, human review",
    level: "advanced",
    minutes: 35,
    summary: "LLM ची quality कशी ठरवायची — benchmarks, task metrics, RAG eval आणि human review.",
    sections: [
      {
        title: "LLM evaluation म्हणजे काय — नापणे का कठीण",
        content: "शब्दांची निकटता फक्त नाही — अर्थ, तथ्य, सूचना following सर्व.\nबेंचमार्क (MMLU, truthful) — स्थापित स्तर.\nयोग्य eval नाही तर निवड म्हणजे अंदाज.",
      },
      {
        title: "का शिकावे? Eval चे फायदे",
        content: "Model निवडताना फक्त feeling नाही — अंक हवेत.\nProduct साठी quality gates — deployment आधी आवश्यक.\nवाचून न थांबता 20 samples चा eval set बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ चुकीचा benchmark — task नुसार eval.\n✗ RAG eval — retrieval + synthesis दोन्ही.\n✗ Human review न करणे — metric पुरेशी नसते.\n✗ सर्व case ला एकटे अंक.",
      },
      {
        title: "Simple eval pipeline",
        content: "eval set: prompt → परीक्षा उत्तर. metrics: exact match, ROUGE, LLM-judge.",
        code: `def evaluate(model, eval_set):
    correct = 0
    for item in eval_set:
        out = model(item["prompt"])
        if item["expected"].lower() in out.lower():
            correct += 1
    return correct / len(eval_set)
# LLM-judge: दुसऱ्या LLM ला score मागवा`,
        codeLanguage: "python",
        output: `accuracy 0.78
# आता प्रत्येक wrong sample कंसात पहा`,
      },
      {
        title: "RAG eval दोन भाग",
        content: "Retrieval: आवश्यक sentences मिळाले का?\nGeneration: उत्तर तथ्यासह आणि source दाखवले?",
      },
      {
        title: "सारांश — LLM eval",
        content: "benchmarks + task eval + human review. eval set कायम. पुढील धडा: prompt frameworks.",
      },
    ],
    practiceQuestions: [
      "Eval set कसा बनवाल?",
      "RAG eval चे दोन भाग?",
      "LLM-judge म्हणजे काय?",
    ],
    quiz: [
      { question: "कशाने quality ठरवायची?", options: ["eval set", "नाव", "रंग", "किंमत"], correct: 0 },
      { question: "MMLU म्हणजे?", options: ["benchmark", "database", "compiler", "font"], correct: 0 },
      { question: "RAG generation ने काय?", options: ["source दाखवावे", "फक्त text", "skip", "delete"], correct: 0 },
      { question: "Human review का?", options: ["metric अपुरे", "लांब प्रक्रिया", "काम वाढते", "रंग"], correct: 0 },
      { question: "Eval set किती?", options: ["लहान पण relatable", "खूप मोठा", "एक", "शून्य"], correct: 0 },
    ],
    related: ["dl-llm", "ai-mlops", "dl-rag"],
    prev: "ai-optimization",
    next: "ai-prompt-frameworks",
  },
  {
    slug: "ai-prompt-frameworks",
    categoryId: "ai",
    title: "Prompt Frameworks",
    marathiTitle: "Prompt frameworks — role, few-shot, chain-of-thought, structured output",
    level: "intermediate",
    minutes: 30,
    summary: "एकच prompt पुरेसे नाही — frameworks: role, few-shot, chain-of-thought, structured output — अचूकता वाढवतात.",
    sections: [
      {
        title: "Prompting म्हणजे काय",
        content: "LLM ला काम कसे सांगायचे — हेच महत्त्वाचे तंत्र.\nframeworks = रचना — role, context, examples, constraints.\nही रचना व्यवहारात खूप उपयोगी.",
      },
      {
        title: "का शिकावे? Frameworks चे फायदे",
        content: "योग्य रचनेने output quality — ताबडतोब सुधारते.\nSystematic templates — maintainable code.\nवाचून न थांबता few-shot test करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ अस्पष्ट role/टास्क.\n✗ Few-shot विना coherent examples — चुकीचे नमुने.\n✗ structured output न मागणे — output random.\n✗ System context दरवेळी बदलणे.",
      },
      {
        title: "Chain-of-thought",
        content: "सांगा पहिले steps लिहून मग उत्तर द्या — reasoning सुधारते.\nमर्यादा: मोठ्या prompts वर cost वाढतो.",
        code: `prompt = '''तू गणित teacher आहेस.
पहिले पायरी-पायरी सोडव, नंतर उत्तर द्या.
प्रश्न: 17 मध्ये 23 मिळवा.'''
# model उत्तर दोन ओळींत reasoning + answer`,
        codeLanguage: "python",
        output: `पायरी 1: 17 + 20 = 37
पायरी 2: 37 + 3 = 40
उत्तर: 40`,
      },
      {
        title: "Structured output",
        content: "JSON schema सांगा — model ने निश्चित फॉर्मेटचे output.\nkeys, types, required — clear limits.",
      },
      {
        title: "सारांश — Prompt frameworks",
        content: "role + examples + structure. chain-of-thought — reasoning. पुढील धडा: RAG advanced.",
      },
    ],
    practiceQuestions: [
      "Few-shot म्हणजे?",
      "chain-of-thought का?",
      "JSON output सांगून test करा.",
    ],
    quiz: [
      { question: "Role काय करते?", options: ["context", "नाव", "रंग", "skip"], correct: 0 },
      { question: "chain-of-thought काय?", options: ["steps+answer", "फक्त answer", "short cut", "compress"], correct: 0 },
      { question: "structured output?", options: ["JSON schema", "random", "binary", "audio"], correct: 0 },
      { question: "Few-shot म्हणजे?", options: ["examples सह", "शिवाय", "खूप", "रिकामे"], correct: 0 },
      { question: "Framework चा गाभा?", options: ["रचना", "नाव", "रंग", "लांबी"], correct: 0 },
    ],
    related: ["ai-prompts", "ai-chatgpt", "ai-llm-chatbot"],
    prev: "ai-llm-evaluation",
    next: "ai-rag-advanced",
  },
  {
    slug: "ai-rag-advanced",
    categoryId: "ai",
    title: "RAG — Advanced",
    marathiTitle: "RAG advanced — chunking, vector index, hybrid, rerank, citations",
    level: "advanced",
    minutes: 35,
    summary: "RAG व्यावसायिक रीतीने: chunk strategy, embeddings index, retrieval सुधारणा, reranking आणि citations.",
    sections: [
      {
        title: "RAG म्हणजे काय — रचना आणि steps",
        content: "Documents → chunks → embeddings → index. query → retrieve → context → answer.\nAdvanced: hybrid search, reranking, metadata filters.\nहे सध्या LLM apps चा आधार.",
      },
      {
        title: "का शिकावे? Advanced RAG चे फायदे",
        content: "फक्त demo नाही — real documents सोबत काम.\nचांगले retrieval = चांगली उत्तरे — हा गुणधर्म.\nवाचून न थांबता small index बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Chunks खूप मोठे/छोटे — आकार + overlap संतुलन.\n✗ Metadata न ठेवणे — sources गमावणे.\n✗ Query तपासत नसणे — retrieval गुणवत्ता.\n✗ Embedding model index मध्ये बदलणे.",
      },
      {
        title: "Chunking आणि index",
        content: "कागदपत्र — meaningful units (paragraphs); overlap ठेवा.\nFAISS/Chroma — vector database सुरुवात.",
        code: `from sentence_transformers import SentenceTransformer
import numpy as np
model = SentenceTransformer("paraphrase-multilingual-MiniLM-L12-v2")
chunks = ["मराठी इतिहास", "आधुनिक शेती", "भारतीय संगीत"]
emb = model.encode(chunks)
q = model.encode(["शेती पद्धती"])
scores = emb @ q.T
print(chunks[np.argmax(scores)])`,
        codeLanguage: "python",
        output: `आधुनिक शेती
# सर्वात जवळचा chunk परत आला`,
      },
      {
        title: "Retrieval सुधारणा",
        content: "Hybrid: dense + keyword scores mix; metadata filter आधी.\nrerank — पहिल्या N नंतर निवड सुधारते.",
      },
      {
        title: "सारांश — RAG advanced",
        content: "chunks → index → retrieve → rerank → cite. पुढील धडा: multi-agent systems.",
      },
    ],
    practiceQuestions: [
      "Chunk आकार का महत्त्वाचा?",
      "hybrid search म्हणजे?",
      "एक छोटा index बनवा.",
    ],
    quiz: [
      { question: "RAG ची steps?", options: ["chunk→index→retrieve", "delete→skip", "hash→sort", "mask→crop"], correct: 0 },
      { question: "Metadata कशासाठी?", options: ["sources", "रंग", "speed", "log"], correct: 0 },
      { question: "Rerank काय करते?", options: ["निवड सुधारते", "delete", "encrypt", "sort color"], correct: 0 },
      { question: "Embedding model?", options: ["एकच ठेवा", "बदलता येते", "कोणताही", "skip"], correct: 0 },
      { question: "Overlap काय देतो?", options: ["continuity", "duplicate", "जास्त cost", "रंग"], correct: 0 },
    ],
    related: ["dl-rag", "dl-embeddings", "ai-llm-chatbot"],
    prev: "ai-prompt-frameworks",
    next: "ai-agents-multi",
  },
  {
    slug: "ai-agents-multi",
    categoryId: "ai",
    title: "Multi-Agent Systems",
    marathiTitle: "Multi-agent — अनेक agents, roles आणि coordination",
    level: "advanced",
    minutes: 35,
    summary: "एक agent काही, पण अनेक agents टीम ने काम वाटते — supervisor, workers आणि shared state.",
    sections: [
      {
        title: "Multi-agent म्हणजे काय — single vs multi",
        content: "Single agent — एक chain; multi-agent — specialist roles प्रत्येक skill.\nsupervisor नवा agent — काम वाटतो आणि निर्णय घेतो.\nहे जटिल tasks साठी — research, coding, content pipeline.",
      },
      {
        title: "का शिकावे? Multi-agent चे फायदे",
        content: "मोठे काम छोट्या विशेषज्ञांनी — speed आणि scalability.\nप्रत्येक agent अपडेट independent — maintainable system.\nवाचून न थांबता दोन agents चा base बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ टीम खूप मोठी — bottlenecks.\n✗ shared state sync गमावणे.\n✗ tools conflict — names/resources तपासा.\n✗ फक्त demo — real tasks वर evaluate.",
      },
      {
        title: "Supervisor pattern",
        content: "supervisor → plan → workers → results एकत्र → final.",
        code: `def supervisor(task, workers):
    plan = planner.plan(task)
    results = []
    for step in plan:
        w = workers[step["role"]]
        results.append(w.run(step["prompt"]))
    return synthesizer.answer(task, results)`,
        codeLanguage: "python",
        output: `संशोधन → लेखन → संपादन — तिन्ही agents ची कामे.`,
      },
      {
        title: "Coordinator तंत्रे",
        content: "Shared memory — common state; tool registry shared.\nफेरी राउंडरोबिन किंवा बॅचल order.",
      },
      {
        title: "सारांश — Multi-agent",
        content: "roles teams — supervisor/workers. shared state व्यवस्थापन. पुढील धडा: AI safety.",
      },
    ],
    practiceQuestions: [
      "Supervisor चे काम काय?",
      "shared state मध्ये काय हवे?",
      "एक research team design करा.",
    ],
    quiz: [
      { question: "Multi-agent मध्ये काय?", options: ["specialist roles", "एक chain", "फक्त one", "data only"], correct: 0 },
      { question: "Supervisor काय करतो?", options: ["काम विभाजन", "delete", "encrypt", "render"], correct: 0 },
      { question: "Shared memory काय?", options: ["सामान्य state", "cache file", "color", "audio"], correct: 0 },
      { question: "Tools conflict निवारण?", options: ["registry", "delete", "random", "error"], correct: 0 },
      { question: "Demo पेक्षा काय?", options: ["real eval", "स्क्रीनशॉट", "flow", "theme"], correct: 0 },
    ],
    related: ["ai-agents", "ai-agent-tools", "ai-llm-chatbot"],
    prev: "ai-rag-advanced",
    next: "ai-safety",
  },
  {
    slug: "ai-safety",
    categoryId: "ai",
    title: "AI Safety",
    marathiTitle: "AI safety — bias, privacy, hallucinations आणि जबाबदार वापर",
    level: "intermediate",
    minutes: 30,
    summary: "AI धोके: bias, privacy, hallucination, dual-use. यांचे systematic evaluation आणि governance.",
    sections: [
      {
        title: "AI धोके म्हणजे काय",
        content: "Bias — data मधून अन्याय; privacy — data लीक; hallucination — खोटी माहिती.\nदुहेरी वापर — वैध साधन चुकीच्या हातात.\nहे टाळता येत नाही — management आणि evaluation हवे.",
      },
      {
        title: "का शिकावे? Safety चे फायदे",
        content: "उत्पादने विश्वासार्ह, लोकांसाठी सुरक्षित — हेच quality चा भाग.\nCompliance आणि ethics — आता नोकरीची गरज.\nवाचून न थांबता तुमच्या data मध्ये bias check करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Bias केवळ gender — age, region, language देखील.\n✗ Data privacy — PII mask आधी.\n✗ Hallucination — output facts सोबत verify.\n✗ Evaluation हातमागणे टाळणे.",
      },
      {
        title: "Bias detection",
        content: "Group नुसार metrics तोडून पहा — fairness सुरुवात.\nData represent किंवा विचलित — आधी fix.",
        code: `def accuracy_by_group(model, data, attr):
    res = {}
    for grp in data[attr].unique():
        sub = data[data[attr] == grp]
        res[grp] = (model(sub["x"]) == sub["y"]).mean()
    return res
# group तफावत आढळल्यास सुधारणा आवश्यक`,
        codeLanguage: "python",
        output: `{'M': 0.91, 'F': 0.66}
# group तफावत — आता हा निकाल सुधारायचा`,
      },
      {
        title: "Privacy — data handling",
        content: "व्यक्तीगत data ला कमीत कमी आवश्यकता; PII mask; audit logs.\nLocal model — data आपल्या ठिकाणी राहील.",
      },
      {
        title: "सारांश — AI safety",
        content: "bias/privacy/hallucination — systematic eval. ethical वापर. पुढील धडा: AI future trends.",
      },
    ],
    practiceQuestions: [
      "Bias चे बिंदू कोणते?",
      "privacy साठी काय कराल?",
      "hallucination कसे कमी कराल?",
    ],
    quiz: [
      { question: "Hallucination म्हणजे?", options: ["खोटी माहिती", "छोटे model", "cache", "color"], correct: 0 },
      { question: "Bias कुठून येतो?", options: ["data", "model chips", "font", "skin"], correct: 0 },
      { question: "Privacy साठी काय?", options: ["PII mask", "पासवर्ड share", "skip", "log"], correct: 0 },
      { question: "Fairness कसे तपासतात?", options: ["group accuracy", "रंग", "नाव", "speed"], correct: 0 },
      { question: "Responsible वापर?", options: ["evaluation+limit", "free world", "fast ship", "hide"], correct: 0 },
    ],
    related: ["ai-ethics", "ai-huggingface", "ai-llm-evaluation"],
    prev: "ai-agents-multi",
    next: "ai-future-trends",
  },
  {
    slug: "ai-future-trends",
    categoryId: "ai",
    title: "AI चे भविष्य",
    marathiTitle: "AI future — agents, multimodal, on-device, eval",
    level: "intermediate",
    minutes: 30,
    summary: "AI दिशा: agentic workflows, multimodal, on-device AI, स्मृती, open research. कोणते नमुने महत्त्वाचे.",
    sections: [
      {
        title: "AI future म्हणजे काय — धावती उत्क्रांती",
        content: "Chatbots → assistants → agents; स्मृती आणि tool usage.\nMultimodal — text, image, audio एकत्र.\nEdge/on-device — लोकांच्या यंत्रांवर AI.",
      },
      {
        title: "का शिकावे? Trends चे फायदे",
        content: "दिशा कळल्यावर शिकण्याची निवड योग्य होते.\nआजचे लोकप्रिय नमुने पुढील demand.\nवाचून न थांबता एक trend experiment करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ प्रत्येक trend चा पाठलाग — depth ठेवा.\n✗ Hype — proof/eval verify.\n✗ Platform lock — cost/path पहा.\n✗ Open model license तपासा.",
      },
      {
        title: "नवीन नमुने समजणे",
        content: "Agentic: LLM + tools + loop automation. World models — नियोजन.\nस्मृती — context technical आणि conceptual state.",
        code: `trends = {
  "agentic": "LLM + tools + loop",
  "multimodal": "vision/audio/text एकत्र",
  "edge": "on-device inference",
  "eval": "reliable metrics"
}
for k, v in trends.items():
    print(f"{k}: {v}")`,
        codeLanguage: "python",
        output: `agentic: LLM + tools + loop
multimodal: vision/audio/text एकत्र
edge: on-device inference
eval: reliable metrics`,
      },
      {
        title: "कसे शिकत राहायचे",
        content: "मूलभूत ठाम — math, python, fundamentals.\nप्रत्येक महिन्याला एक नवीन model/project हाताळा.\nCommunity — papers, commits नियमित.",
      },
      {
        title: "सारांश — Future trends",
        content: "agents/multimodal/edge/eval. depth चरण. पुढील धडा: AI career मार्ग.",
      },
    ],
    practiceQuestions: [
      "Agentic काय?",
      "तुम्हाला कोणता trend आवडतो?",
      "एक new model observe करा.",
    ],
    quiz: [
      { question: "Agentic म्हणजे?", options: ["LLM+tools+loop", "फक्त text", "cache", "image"], correct: 0 },
      { question: "Multimodal काय?", options: ["एकत्र types", "फक्त text", "binary", "css"], correct: 0 },
      { question: "Edge AI कुठे?", options: ["यंत्रावर", "cloud", "सर्व्हर", "भाड्याने"], correct: 0 },
      { question: "Hype विरुद्ध काय?", options: ["eval", "नाव", "रंग", "speed"], correct: 0 },
      { question: "शिकण्याचा आधार?", options: ["fundamentals", "trend", "font", "तेजी"], correct: 0 },
    ],
    related: ["ai-edge-ai", "ai-agents-multi", "ai-huggingface"],
    prev: "ai-safety",
    next: "ai-career-llm",
  },
  {
    slug: "ai-career-llm",
    categoryId: "ai",
    title: "AI Career",
    marathiTitle: "AI career — roles, skills, projects आणि portfolio",
    level: "beginner",
    minutes: 25,
    summary: "AI career: roles, skill map, projects आणि portfolio. ही मालिका कुठे कशी कामी लागते — संपूर्ण दृष्टी.",
    sections: [
      {
        title: "AI career म्हणजे काय — roles आणि skill map",
        content: "ML Engineer — model build+deploy; Data Scientist — insight; AI Researcher — नवीन पद्धती.\nDeveloper/Product — LLM apps, prompt, eval flows.\nएक स्पष्ट profile आधी — नंतर दिशा स्पष्ट.",
      },
      {
        title: "का शिकावे? Career चे फायदे",
        content: "मागितलेल्या skills — कायमचे मूल्य.\nया मालिकेचे projects — तुमचे साक्षेप.\nवाचून न थांबता दोन projects finish करा — तेव्हाच फायदा पूर्ण होतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ आधी framework घाई — math/python समज आधी.\n✗ Courses पुन्हा पुन्हा — practice कमी.\n✗ Resume generic — projects हवे.\n✗ Community/mentorship नाकारणे.",
      },
      {
        title: "Skill map",
        content: "python + math + deep learning = core; MLOps + frameworks = industry.\nमराठी मध्ये शिकणे advantage — हीच मालिका मदत.",
        code: `skills = ["python", "numpy/pandas", "sklearn",
          "pytorch", "transformers", "ollama"]
print("core:", ", ".join(skills))`,
        codeLanguage: "python",
        output: `core: python, numpy/pandas, sklearn, pytorch, transformers, ollama`,
      },
      {
        title: "Portfolio road-map",
        content: "३ projects: data report, ML model, LLM agent. GitHub + छोटा demo.\nप्रत्येक project eval — metrics, challenges, learnings.",
      },
      {
        title: "सारांश — AI Career",
        content: "practice — projects वर शिका. ही मालिका संपली — आता तुमचे projects बनवा. शुभेच्छा!",
      },
    ],
    practiceQuestions: [
      "कोणती role आवडते व का?",
      "Portfolio मध्ये काय हवे?",
      "आता तुमची पहिली project निवडा.",
    ],
    quiz: [
      { question: "ML Engineer काय करतो?", options: ["build+deploy", "फक्त draw", "sell", "write"], correct: 0 },
      { question: "मूलभूत skill?", options: ["python+math", "typing", "design", "audio"], correct: 0 },
      { question: "Resume मध्ये काय?", options: ["projects", "रंग", "चाल", "font"], correct: 0 },
      { question: "Course पेक्षा काय?", options: ["practice", "दुसरे course", "download", "theme"], correct: 0 },
      { question: "आता पुढे काय?", options: ["build project", "थांबा", "रंग", "skip"], correct: 0 },
    ],
    related: ["ai-ethics", "ai-mlops", "ds-datasets"],
    prev: "ai-future-trends",
  },
];