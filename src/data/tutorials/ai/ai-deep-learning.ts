import type { Tutorial } from "@/data/tutorials";

// === AI · DEEP LEARNING — neural networks, CNN/RNN, transformers, LLM ===
// ds-time-series-intro → dl-neuron → dl-activation → dl-forward-prop → dl-backprop
// → dl-optimizers → dl-loss-functions → dl-cnn → dl-cnn-layers → dl-transfer-learning
// → dl-rnn → dl-lstm → dl-embeddings → dl-attention → dl-transformers → dl-llm
// → dl-rag → dl-finetuning → (ai-huggingface — ai-practical-ai.ts)

export const aiDeepLearning: Tutorial[] = [
  {
    slug: "dl-neuron",
    categoryId: "ai",
    title: "Neuron — मूलभूत घटक",
    marathiTitle: "Artificial neuron — weights, bias, activation — deep learning चा अणु",
    level: "intermediate",
    minutes: 30,
    summary: "खऱ्या मेंदूच्या neuron ची सोपी प्रतिकृती — weights, bias, weighted sum आणि activation. हेच सगळ्या neural network चा तळ आहे.",
    sections: [
      {
        title: "Artificial neuron — weights, bias, activation म्हणजे काय?",
        content: "Neuron हा काही inputs घेऊन एक output देतो. प्रत्येक input वर weight असतो (याचा अर्थ आहे किती महत्त्व).\nWeighted sum मध्ये bias जोडला जातो आणि मग activation function output तयार करतो.\nlogistic regression ही फक्त एक neuron चीच गोष्ट — deep learning म्हणजे असे अनेक neurons layers मध्ये.",
      },
      {
        title: "का शिकावे? Neuron चे फायदे आणि महत्त्व",
        content: "प्रत्येक neural network — कितीही मोठा — या चार गोष्टींचा बनला आहे, कुठेही सुरुवात येथूनच होते.\nweights/bias कसे काम करतात हे समजल्यावर training आणि gradient पुढे सोपे होते.\nवाचून न थांबता हाताने एक neuron चे output काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Activation ला sequence समजणे — आधी sum, मग activation.\n✗ Bias न ठेवणे — शून्य बिंदू जवळ चुकीचे निर्णय.\n✗ Weight नेमके output समजणे — weight हा गुणाकार घटक.\n✗ Neuron = logistic regression फक्त — layers ची शक्ती नंतर.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "एक neuron ची यांत्रिकी",
        content: "z = w1*x1 + w2*x2 + bias. मग output = f(z). हा f हा activation (सिग्मॉइड/ReLU) — पुढील धड्यात.\nweights/ bias हेच खरे शिकण्याचे matter — training दरम्यान हेच बदलतात.",
        code: `import numpy as np
def neuron(x, w, b, f):
    z = np.dot(w, x) + b
    return f(z)

x = np.array([1.0, 0.5])   # inputs
w = np.array([0.4, -0.2])  # weights
out = neuron(x, w, 0.1, lambda z: 1 / (1 + np.exp(-z)))
print(round(out, 3))`,
        codeLanguage: "python",
        output: `0.550
# z = 0.4*1 + (-0.2)*0.5 + 0.1 = 0.4 — sigmoid → 0.55
# weights बदलले की output बदलतो — हेच शिकणे`,
      },
      {
        title: "Layers मध्ये neuron",
        content: "Deep network मध्ये neurons चे layers: input → hidden → output. प्रत्येक hidden layer चा output पुढच्या layer चा input.\nअसे layers रचणे म्हणजे जटिल nonlinear patterns शिकणे — deep म्हणूनच त्याचे नाव.\nही रचना gradient च्या पद्धतीने शिकते (backprop), पण आधी neuron समजला पाहिजे.",
      },
      {
        title: "सारांश — neuron",
        content: "weighted sum + bias + activation = neuron. weights शिकण्याचे वाहक. layers मध्ये जोडून deep network. पुढील धडा: activation functions.",
      },
    ],
    practiceQuestions: [
      "weight काय दर्शवतो?",
      "bias कशासाठी हवा?",
      "एक neuron हाताने काढून output शोधा.",
    ],
    quiz: [
      { question: "Neuron चा output कसा मिळतो?", options: ["sum+activation", "फक्त sum", "फक्त weight", "random"], correct: 0 },
      { question: "weight किती महत्त्व देतो?", options: ["input ला", "output ला", "bias ला", "काही नाही"], correct: 0 },
      { question: "training मध्ये काय बदलते?", options: ["weights/bias", "inputs", "labels", "shape"], correct: 0 },
      { question: "Deep network मध्ये काय जास्त?", options: ["layers", "inputs", "colors", "pages"], correct: 0 },
      { question: "Python मध्ये sum कसा?", options: ["np.dot", "np.add(x)", "sum loop", "flip"], correct: 0 },
    ],
    related: ["ai-neural-networks", "ml-gradient-descent", "dl-activation"],
    prev: "ds-time-series-intro",
    next: "dl-activation",
  },
  {
    slug: "dl-activation",
    categoryId: "ai",
    title: "Activation Functions",
    marathiTitle: "Activation functions — sigmoid, ReLU, tanh — nonlinearity का जरुरी",
    level: "intermediate",
    minutes: 30,
    summary: "Activation म्हणजे neuron चा आउटपुट shape. sigmoid, ReLU, tanh चा फरक, vanishing gradient आणि निवडीचे नियम.",
    sections: [
      {
        title: "Activation functions — nonlinearity म्हणजे काय?",
        content: "Activation हा neuron च्या sum नंतर लावलेला function — जो output एका स्वरूपात आणतो.\nsigmoid (0-1), tanh (-1..1), ReLU (negative 0).\nHeterogeneity महत्त्वाची: activation नसल्यास layers चा मिळून linear च शिके — आपल्याला nonlinear हवी, hence ReLU/सिग्मॉइड.",
      },
      {
        title: "का शिकावे? Activation functions चे फायदे आणि महत्त्व",
        content: "Activation नेच network ची क्षमता nonlinear patterns शिकण्याची ठरते.\nVanishing gradient टाळण्यासाठी ReLU — म्हणून आधुनिक network मध्ये तोच default.\nवाचून न थांबता तीन functions चे graphs स्वतः काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Output layer वर चुकीची activation — binary→sigmoid, multi→softmax, regression→linear.\n✗ Hidden layers मध्ये sigmoid — मंद/vanishing; ReLU घ्या.\n✗ ReLU dead neurons — negative वर gradient 0; leakyReLU विचार.\n✗ tanh/sigmoid saturation — आधी input scale.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "तीन मुख्य activation",
        content: "sigmoid σ(z)=1/(1+e^-z) → 0-1 probability (बाहेरचा layer). tanh(z) → -1..1 centered. ReLU max(0,z) → hidden मध्ये default.\nReLU वर gradient 1 (positive) — म्हणून vehicles ग्रॅडियंट जात नाही. sigmoid वर 0.25 पेक्षा कमी — ग्रॅडियंट नाहीसा.",
        code: `import numpy as np
def relu(x): return np.maximum(0, x)
def sigmoid(x): return 1 / (1 + np.exp(-x))

z = np.array([-2, 0, 2])
print(relu(z))      # [0 0 2]
print(sigmoid(z))   # [0.12 0.5 0.88]`,
        codeLanguage: "python",
        output: `[0 0 2]
[0.119 0.5   0.881]
# ReLU: negative→0, positive→स्वतः मूल्य`,
      },
      {
        title: "Softmax — अनेक गट",
        content: "Output layer मध्ये अनेक classes असल्यास softmax — सर्व outputs दिल्या जाती normality सह probabilities.\npytorch: F.softmax(logits, dim=-1). एकटं sum चा normalization हेच softmax.",
        code: `import torch, torch.nn.functional as F
logits = torch.tensor([2.0, 1.0, 0.1])
print(F.softmax(logits, dim=0))
print(F.softmax(logits, dim=0).sum())`,
        codeLanguage: "python",
        output: `tensor([0.6590, 0.2424, 0.0986])
tensor(1.0)
# तिन्ही sum = 1 — probability distribution`,
      },
      {
        title: "सारांश — activation",
        content: "hidden → ReLU (gradient राहते), output → sigmoid/softmax/linear. nonlinearity हीच शक्ती. पुढील धडा: forward propagation.",
      },
    ],
    practiceQuestions: [
      "ReLU चा positive gradient किती?",
      "Vanishing gradient ला ReLU का तोडतो?",
      "Binary output layer वर कोणती activation?",
    ],
    quiz: [
      { question: "Hidden layers मध्ये default activation?", options: ["ReLU", "sigmoid", "tanh", "none"], correct: 0 },
      { question: "Binary classification output वर?", options: ["sigmoid", "ReLU", "softmax", "linear"], correct: 0 },
      { question: "Multi-class output वर?", options: ["softmax", "sigmoid", "relu", "dropout"], correct: 0 },
      { question: "ReLU ने gradient कसा राहतो?", options: ["positive वर 1", "नेहमी 0", "नेहमी -1", "random"], correct: 0 },
      { question: "tanh ची श्रेणी?", options: ["-1 ते 1", "0 ते 1", "0 ते inf", "काही नाही"], correct: 0 },
    ],
    related: ["dl-neuron", "dl-forward-prop", "dl-loss-functions"],
    prev: "dl-neuron",
    next: "dl-forward-prop",
  },
  {
    slug: "dl-forward-prop",
    categoryId: "ai",
    title: "Forward Propagation",
    marathiTitle: "Forward propagation — input पासून output पर्यंत चा प्रवाह",
    level: "intermediate",
    minutes: 30,
    summary: "Data network मधून कसा वाहतो — layer मधून layer, activation नंतर activation, शेवटी loss. One forward pass.",
    sections: [
      {
        title: "Forward propagation — प्रवाह म्हणजे काय?",
        content: "Forward pass म्हणजे input layer पासून output layer पर्यंत data चा प्रवाह — प्रत्येक layer वजने लावते, activation.\nएक forward pass ने आपल्याला prediction मिळतो आणि त्यातून loss.\nबॅच मध्ये अनेक उदाहरणे एकाच वेळी (matrix) वाहतात — वेगासाठी.",
      },
      {
        title: "का शिकावे? Forward propagation चे फायदे आणि महत्त्व",
        content: "Forward करायला येणे म्हणजे network च्या आतून जाणे — layers आणि shapes समजणे.\nप्रत्येक deep learning अभ्यासक्रम येथूनच सुरू होतो — debugging चा पाया.\nवाचून न थांबता एक छोटे 2-layer network हाताने चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Shape mismatch — layer weights आणि input dimensions समान हवेत.\n✗ Activation नंतर output — loss च्या आधी; क्रम बदलू नका.\n✗ Batch विसरणे — (batch, features) प्रवाह राखा.\n✗ Detach गरज — autograd च्या व्यापकतेत विसरू नका.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "PyTorch — one forward pass",
        content: "nn.Linear(3,4) म्हणजे 3 inputs → 4 outputs. While activations ReLU हे hidden layers मध्ये. Output layer पर्यंत linear/mkto.\n.shift shapes ठळक — आधी print काढा.",
        code: `import torch, torch.nn as nn

model = nn.Sequential(
    nn.Linear(3, 4),
    nn.ReLU(),
    nn.Linear(4, 2),
)
x = torch.randn(1, 3)      # (batch=1, features=3)
out = model(x)
print(out.shape)           # (1, 2)`,
        codeLanguage: "python",
        output: `torch.Size([1, 2])
# प्रवाह: 3 → 4 → ReLU → 2`,
      },
      {
        title: "Batch — matrix प्रवाह",
        content: "batch म्हणजे एकाच वेळी अनेक examples — (B, features). पुरेसा batch memory/utilize च्या दृष्टीने.\nbackprop चा प्रवाह उलट; forward च्या रचनेवरच.",
      },
      {
        title: "सारांश — forward propagation",
        content: "input → layers → activation → output → loss. shapes सतत तपासा. batch मध्ये वाहतो. पुढील धडा: उलट प्रवाह — backpropagation.",
      },
    ],
    practiceQuestions: [
      "nn.Linear(3,4) मध्ये काय-काय?",
      "Batch चा फरक काय?",
      "Forward pass कुठे संपतो?",
    ],
    quiz: [
      { question: "Forward pass कुठून सुरू?", options: ["input layer", "output", "loss", "pretrained"], correct: 0 },
      { question: "nn.Linear(3,4) output किती?", options: ["4", "3", "12", "1"], correct: 0 },
      { question: "संपूर्ण forward चा शेवटचा step?", options: ["output/loss", "weights", "conv", "pool"], correct: 0 },
      { question: "Batch म्हणजे?", options: ["अनेक examples एकत्र", "एक example", "weights", "layers"], correct: 0 },
      { question: "Matrix मध्ये प्रवाह कशासाठी?", options: ["वेग", "रंग", "सौंदर्य", "काही"], correct: 0 },
    ],
    related: ["dl-activation", "dl-backprop", "dl-neuron"],
    prev: "dl-activation",
    next: "dl-backprop",
  },
  {
    slug: "dl-backprop",
    categoryId: "ai",
    title: "Backpropagation",
    marathiTitle: "Backprop — loss मधून ग्रॅडियंट मागे पाठवणे — chain rule",
    level: "advanced",
    minutes: 35,
    summary: "loss कमी करण्यासाठी weight बदलायचे कसे हे शिकणे — उलट प्रवाह, chain rule ने ग्रॅडियंट, autograd ची भूमिका.",
    sections: [
      {
        title: "Backpropagation — ग्रॅडियंट मागे म्हणजे काय?",
        content: "training मध्ये आपल्याला प्रत्येक weight ला किती बदलावे हे शिकायचे — हेच ग्रॅडियंट.\nBackprop ऊर्जा उलट प्रवाह घेते: loss पासून सुरू होऊन chain rule ने प्रत्येक layer मधल्या weights पर्यंत.\nहेच gradient descent ला भोजन — पुढे autograd network हे आपोआप करते.",
      },
      {
        title: "का शिकावे? Backprop चे फायदे आणि महत्त्व",
        content: "PyTorch मध्ये backward() एक ओळ आहे — पण काय गणित चालते हे समजणे संकल्पनात्मक दृढता हवी.\nVanishing gradient, dead ReLU अशा समस्या उलट प्रवाह समजल्या नाही तर खोल research मध्ये पुढे अडथळा.\nवाचून न थांबता एक 2-layer चे manual backward करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Manual gradient चुकणे — autograd विश्वास करा, आणि verify tensor.grad.\n✗ optimizer.zero_grad न करणे — जुने gradient (जुळणार्याने) चुकते.\n✗ Loss reduction mean vs sum — gradient वर scale फरक.\n✗ Detach गरज विसरणे — ग्रॅडियंट नसलेले अतिरिक्त वाहतूक.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "chain rule — उलट प्रवाह",
        content: "dw = dl/da * da/dz * dz/dw. प्रत्येक layer चा ग्रॅडियंट पुढच्या चा गुणाकार — म्हणून chain rule.\nउदा. z = w*x, a = σ(z), L = cross_entropy(a) — तर dL/dw = dL/da * σ'(z) * x.\nअसे output पासून input पर्यंत — म्हणून नाव back propagation.",
        code: `import torch
z = torch.tensor(1.5, requires_grad=True)
loss = (z - 2.0) ** 2
loss.backward()
print(z.grad)   # 2*(1.5-2) = -1.0`,
        codeLanguage: "python",
        output: `tensor(-1.0)
# autograd ने chain rule स्वतः केला`,
      },
      {
        title: "Training loop मध्ये",
        content: "standard चक्र: forward → loss → backward() → optimizer.step() → optimizer.zero_grad() next फेरी.\nया चार ओळी मध्येच संपूर्ण training चक्र चालते.",
        code: `optimizer = torch.optim.SGD(model.parameters(), lr=0.01)
for x_b, y_b in loader:
    optimizer.zero_grad()
    out = model(x_b)
    loss = loss_fn(out, y_b)
    loss.backward()
    optimizer.step()`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — backprop",
        content: "chain rule ने loss पासून weights पर्यंत ग्रॅडियंट. autograd आपोआप. zero_grad गरजेचे चक्र. पुढील धडा: optimizers.",
      },
    ],
    practiceQuestions: [
      "Backward मुळे काय मिळते?",
      "zero_grad न केल्यास काय होते?",
      "chain rule मध्ये गुणाकार का दिसतो?",
    ],
    quiz: [
      { question: "backward() काय गणतो?", options: ["gradients", "losses", "weights only", "shapes"], correct: 0 },
      { question: "Gradient cycle मध्ये zero_grad कुठे?", options: ["प्रत्येक फेरी सुरुवात", "शेवट", "कधीच नको", "random"], correct: 0 },
      { question: "chain rule ने काय वापरतात?", options: ["उलट प्रवाह", "समोरचा", "फक्त sum", "काही"], correct: 0 },
      { question: "Manual ग्रॅडियंट चुकण्याचा धोका?", options: ["autograd use", "पाठ्यपुस्तक", "ग्राफ", "काही नाही"], correct: 0 },
      { question: "Training loop चा क्रम?", options: ["forward→loss→backward→step", "step→forward", "loss→forward", "काही"], correct: 0 },
    ],
    related: ["dl-forward-prop", "dl-optimizers", "ml-gradient-descent"],
    prev: "dl-forward-prop",
    next: "dl-optimizers",
  },
  {
    slug: "dl-optimizers",
    categoryId: "ai",
    title: "Optimizers — SGD, Adam",
    marathiTitle: "Optimizers — learning rate, momentum आणि Adam ची गती",
    level: "advanced",
    minutes: 30,
    summary: "Gradient descent चा पाया आधुनिक optimizers — SGD, momentum, Adam. learning rate, बॅच आणि converence निरीक्षण.",
    sections: [
      {
        title: "Optimizers — SGD, Adam म्हणजे काय?",
        content: "Gradient मिळाला की weight बदलायचा कसा हे optimizer ठरवते — step size, momentum, adaptive rate.\nSGD हा मूल gradient descent; Adam हा आधुनिक — momentum + adaptive learning rate per weight.\ndefault Adam (lr=0.001) बहुतेक काम करतो — म्हणून सर्वत्र वापर.",
      },
      {
        title: "का शिकावे? Optimizers चे फायदे आणि महत्त्व",
        content: "Optimizer setup चुकल्यास training धीमा / न तुटेल. Adam ने बहुतेक rescue होते.\nLearning rate schedule (वेळानुसार कमी) ने शेवटची चोख अचूकता वाढते.\nवाचून न थांबता SGD vs Adam वरील loss curves तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Learning rate खूप मोठा — divergence.\n✗ Adam वर batch small — convergence risky; SGD ने cycles.\n✗ schedule विसरणे — step decay नंतरची दृध्दता.\n✗ Weight decay मिसळणे — L2 चा गोंधळ नको.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "SGD vs Adam",
        content: "SGD: fixed lr, कधीकधी momentum=0.9. convergence थोडा धीमा पण अधिक generalizing.\nAdam: momentum + per-parameter adaptive rate; default lr=0.001. जलद सुरुवात.\nमोठे चौरस projects मध्ये Adam ने सुरू करा, नंतर SGD-schedule ने सुधारणा.",
        code: `import torch, torch.nn as nn
model = nn.Linear(8, 1)

SGD = torch.optim.SGD(model.parameters(), lr=0.01, momentum=0.9)
Adam = torch.optim.Adam(model.parameters(), lr=0.001)
print(SGD, Adam)`,
        codeLanguage: "python",
      },
      {
        title: "Learning rate schedules",
        content: "StepLR: प्रत्येक N epochs ने lr factor ने कमी. CosineAnnealing: smooth decay. ReduceLROnPlateau: स्थिरता आल्यावर कमी.\nहे शेवटीच्या bump ने minimum पर्यंत पोहोचवते.",
        code: `from torch.optim.lr_scheduler import ReduceLROnPlateau
sched = ReduceLROnPlateau(Adam, factor=0.5, patience=5)
for epoch in range(50):
    # ... train
    sched.step(loss)` ,
        codeLanguage: "python",
      },
      {
        title: "सारांश — optimizers",
        content: "Adam default, SGD generalize. lr स्पष्ट ठरवा, schedule ने शेवट साधा. loss curves पहा. पुढील धडा: loss functions deep मध्ये.",
      },
    ],
    practiceQuestions: [
      "Adam मध्ये momentum कसा?",
      "Learning rate ट्रॅनिंग तुटणे कधी?",
      "Schedule कधी वापरतात?",
    ],
    quiz: [
      { question: "default Adam lr?", options: ["0.001", "0.1", "1.0", "10"], correct: 0 },
      { question: "SGD वर काय वाढवतात?", options: ["momentum", "loss", "epochs अgoritm", "नाव"], correct: 0 },
      { question: "Adam मध्ये per-weight काय?", options: ["adaptive rate", "लॉस", "बॅच", "नाही"], correct: 0 },
      { question: "Sum मोठा learning rate तर?", options: ["divergence", "converges", "नाही काही", "speed"], correct: 0 },
      { question: "स्थिरतेवर lr कमी करणारा schedule?", options: ["ReduceLROnPlateau", "Random", "None", "copy"], correct: 0 },
    ],
    related: ["dl-backprop", "ml-gradient-descent", "dl-loss-functions"],
    prev: "dl-backprop",
    next: "dl-loss-functions",
  },
  {
    slug: "dl-loss-functions",
    categoryId: "ai",
    title: "Loss Functions for DL",
    marathiTitle: "Loss functions — MSE, CrossEntropy, hinge — DL मध्ये निवड",
    level: "advanced",
    minutes: 30,
    summary: "Deep मध्ये loss म्हणजे उत्तरेगो. Regression → MSE, classification → CrossEntropy, कधी MAE/huber. निवडीची युक्ती.",
    sections: [
      {
        title: "Loss functions — DL मध्ये म्हणजे काय?",
        content: "Loss म्हणजे model चे prediction आणि खरे उत्तर यातला फरक मोजणारे function.\nRegression मध्ये MSE/MAE, classification मध्ये CrossEntropy (softmax मध्ये मिसळलेले).\nFrame/heavy कंस – पाठ्यपुस्तकात MMSE ची एन्ट्रॉपी जोडलेली असते.",
      },
      {
        title: "का शिकावे? Loss functions चे फायदे आणि महत्त्व",
        content: "Loss ची निवड model च्या training मध्ये दिशा ठरवते — चुकीचा loss वेळ वाया जातो.\nCrossEntropy साठी आवाज आहे; MAE outliers रोबस्ट. प्रत्येक method नीट जोडली की स्पष्ट.\nवाचून न थांबता दोन loss output वरील gradients तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Outlier मध्ये MSE — मोठी चुक मोठा influences; MAE/huber.\n✗ Classification मध्ये MSE — ग्रॅडियंट malformed; CrossEntropy.\n✗ Reduction गोंधळ — mean vs sum; कोणते reliably.\n✗ Logits vs prob — CrossEntropy logits घेते (probability नको).\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Regression losses",
        content: "MSE = mean((y-ŷ)^2) — smooth, ग्रॅडियंट linear. MAE — मध्यम absolute, outliers कमी दंड. Huber — दोघांचा hybrid (दारात स्वीकार).",
        code: `import torch, torch.nn as nn
y = torch.tensor([3.0, 5.0, 7.0])
pred = torch.tensor([2.5, 5.5, 6.0])
mse = nn.MSELoss()(pred, y)
mae = nn.L1Loss()(pred, y)
print(mse.item(), mae.item())`,
        codeLanguage: "python",
        output: `0.25 0.667
# MSE: (0.25+0.25+1)/3 ; MAE: (0.5+0.5+1)/3`,
      },
      {
        title: "Classification losses",
        content: "CrossEntropyLoss = softmax + negative log loss एकत्र. ग्रॅडियंट चांगला. logits देतायला लक्षात घ्या.\nHighly imbalanced वर class weights देता येतात.",
        code: `import torch, torch.nn as nn
logits = torch.tensor([[1.5, 0.2, 0.4]])
true = torch.tensor([0])
loss = nn.CrossEntropyLoss()(logits, true)
print(loss.item())`,
        codeLanguage: "python",
        output: `0.673
# crossentropy(softmax(logits)[0], 0) — autograd त्याहून जास्त stable`,
      },
      {
        title: "सारांश — loss functions",
        content: "regression→MSE/MAE, classification→CrossEntropy. outliers चा विचार. logits लक्षात. पुढील धडा: Convolutional networks.",
      },
    ],
    practiceQuestions: [
      "Outlier data मध्ये MSE vs MAE कोणता?",
      "CrossEntropy logits का घेतात?",
      "Reduction mean vs sum चा प्रभाव?",
    ],
    quiz: [
      { question: "Regression मध्ये default?", options: ["MSE", "CrossEntropy", "Hinge", "none"], correct: 0 },
      { question: "Classification मध्ये मुख्य?", options: ["CrossEntropy", "MSE", "MAE", "cosine"], correct: 0 },
      { question: "Outlier साठी रोबस्ट?", options: ["MAE/Huber", "MSE", "CrossEntropy", "काही नाही"], correct: 0 },
      { question: "CrossEntropy काय घेतो?", options: ["logits", "probabilities", "labels only", "weights"], correct: 0 },
      { question: "Imbalanced साठी?", options: ["class weights", "कोणी नाही", "loss वाढ", "labels"], correct: 0 },
    ],
    related: ["ml-cost-function", "dl-optimizers", "dl-cnn"],
    prev: "dl-optimizers",
    next: "dl-cnn",
  },
  {
    slug: "dl-cnn",
    categoryId: "ai",
    title: "CNN — Convolutional Networks",
    marathiTitle: "CNN — images मध्ये patterns शोधणारे network",
    level: "advanced",
    minutes: 35,
    summary: "Images साठी योग्य असे network — convolutions ने edges/patterns, pooling ने छोटा, classification ने शेवट. पहिला CNN pytorch मध्ये.",
    sections: [
      {
        title: "CNN — images मध्ये patterns शोधणारे network म्हणजे काय?",
        content: "सामान्य layers images मध्ये जागतिक नजर घेत नाहीत — Conv layers लहान patches पाहून edges/textures शिकतात.\nकनव्होल्यूशन फिल्टर (kernel) image वर फिरतो आणि feature map बनवतो.\nStack केलेले conv layers आधी लहान patterns, नंतर मोठे patterns शिकतात — हेच CNN चे रहस्य.",
      },
      {
        title: "का शिकावे? CNN चे फायदे आणि महत्त्व",
        content: "Images, video, medical scans, camera — सर्व visual data CNN ने जिंकले. हे आजही image मधला आधार.\nFully-connected images मोठे असतात (memory) — conv ने खूप कमी parameters, मजबूत patterns.\nवाचून न थांबता एक छोटे CNN mnist वर खेळा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Input shape — channel first (pytorch: C,H,W).\n✗ Kernel/padding — output size न 'नाही' केल्यास तक्रार.\n✗ जास्त depth अगोदर — लहान प्रयोगाने depth वाढवा.\n✗ BatchNorm चुकीचे ठिकाण — after conv, आधी activation शक्य.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Convolution + pooling",
        content: "Conv2d(kernels, out_channels, kernel_size) — प्रत्येक filter output channel. ReLU नंतर MaxPool2d आकार अर्धा.\nflatten ने शेवटचा layer साठी सपाट (vector), नंतर Linear + softmax.",
        code: `import torch.nn as nn
model = nn.Sequential(
    nn.Conv2d(1, 16, 3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),          # 28→14
    nn.Conv2d(16, 32, 3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),          # 14→7
    nn.Flatten(),
    nn.Linear(32*7*7, 10),
)
print(model(torch.randn(4, 1, 28, 28)).shape)`,
        codeLanguage: "python",
        output: `torch.Size([4, 10])
# batch 4, 28x28 gray → 10 classes`,
      },
      {
        title: "Feature maps समजणे",
        content: "पहिल्या layer चे channels साधे रेषा/edges शिकतात; खोल layers ने आकार/parts (फोटो, चेहरा).\nPooling ने locations ची थोडी लवचिकता — small shifts चा dark भाग. हीच रोबस्टनेस.",
      },
      {
        title: "सारांश — CNN",
        content: "conv+pool stack ने visual patterns. फ्लॅटन→linear ने classification. depth हळू वाढवा. पुढील धडा: conv layers च्या बारकाव्या.",
      },
    ],
    practiceQuestions: [
      "Conv layer काय शिकतो?",
      "MaxPool काय करतो?",
      "PyTorch साठी image shape काय?",
    ],
    quiz: [
      { question: "Conv layer काय शोधतो?", options: ["patterns", "labels", "loss", "shapes नाही"], correct: 0 },
      { question: "MaxPool2d काय करतो?", options: ["आकार अर्धा", "आकार दुप्पट", "रंग बदल", "काही"], correct: 0 },
      { question: "PyTorch image input shape?", options: ["C,H,W", "H,W,C", "W,H,C", "C,W"], correct: 0 },
      { question: "शेवटच्या layer ला आधी काय?", options: ["flatten", "pool2 max", "conv", "apply"], correct: 0 },
      { question: "Depth कशी वाढवतात?", options: ["हळू, सराव प्रमाणे", "एकदाच ternary", "कधीच नाही", "random"], correct: 0 },
    ],
    related: ["dl-cnn-layers", "ai-image-recognition", "dl-activation"],
    prev: "dl-loss-functions",
    next: "dl-cnn-layers",
  },
  {
    slug: "dl-cnn-layers",
    categoryId: "ai",
    title: "CNN Layers — Padding, Stride, Pooling",
    marathiTitle: "CNN architecture — padding, stride, pooling आणि आकाराचे गणित",
    level: "advanced",
    minutes: 30,
    summary: "Conv layers चे करेक्ट आकार — padding/striding ने output tanh, फिल्टर sizes, pooling variants आणि receptive field.",
    sections: [
      {
        title: "CNN layers — padding, stride, pooling म्हणजे काय?",
        content: "Conv चा आकार कसा बदलतो हे padding किंवा stride ने ठरते. Padding कडाभोवती अतिरिक्त zero.\nstride ने filter किती पाऊले फिरवायचे; जास्त stride = लहान output. pooling (max/avg) ने आणखी कमी.\nहे नियंत्रण output आकार आणि ज्ञान दोन्ही साधते.",
      },
      {
        title: "का शिकावे? CNN architecture चे फायदे आणि महत्त्व",
        content: "Output size गणना चुकल्यास flatten/linear मध्ये shape error सर्वसामान्य.\nपद्धतीशीर architecture ने विद्यमान models (ResNet ची सारखी) समजली जातात.\nवाचून न थांबता एका table वर padding/stride चे sizes मोजा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ padding=0 मुळे आकार कमी होणे — वारंवार नीचे पाहा.\n✗ stride मोठा आधी — information गळून जाते.\n✗ pooling max vs avg — feature presence vs smoothing.\n✗ Dilation गोंधळ — विशिष्ट आकृती करायला.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Output size सूत्र",
        content: "Output = (W - K + 2P)/S + 1. W=input, K=kernel, P=padding, St=stride.\nउदा. 28x28, K=3, P=1, S=1 → (28-3+2)/1+1 = 28 — आकार कायम.\nnn.Sequential मध्ये हे आधी मोजून आकार निश्चित करा.",
      },
      {
        title: "Common variants",
        content: "सामान्य stack: Conv(3x3,k,pad=1) → ReLU → MaxPool(2x2, stride=2). हे calling-R होऊन आकार अर्धा.\nबादल्या: GlobalAvgPool — final vector linear च्या आधी; Dilated conv — बनावट रुंद समज (विशेष).",
        code: `import torch.nn as nn
layer = nn.Sequential(
    nn.Conv2d(16, 32, 3, padding=1, stride=1),  # आकार कायम
    nn.ReLU(),
    nn.MaxPool2d(2),                            # आकार अर्धा
)
x = torch.randn(1, 16, 14, 14)
print(layer(x).shape)`,
        codeLanguage: "python",
        output: `torch.Size([1, 32, 7, 7])
# 14 → conv(पॅडिंगने कायम) 14 → pool → 7`,
      },
      {
        title: "सारांश — CNN layers",
        content: "padding/stride/pooling ने आकार नियंत्रित. सूत्र (W-K+2P)/S+1. architecture स्थिर पद्धती. पुढील धडा: pretrained वापर — transfer learning.",
      },
    ],
    practiceQuestions: [
      "padding ची भूमिका काय?",
      "Output size गणित कसे करतात?",
      "GlobalAvgPool कधी वापरतात?",
    ],
    quiz: [
      { question: "Output size सूत्रात +? ", options: ["+1", "-1", "+S", "*K"], correct: 0 },
      { question: "padding म्हणजे?", options: ["कडा zero", "रंग", "आकार दुप्पट", "काही नाही"], correct: 0 },
      { question: "जास्त stride मुळे?", options: ["लहान output", "मोठा output", "समान", "error"], correct: 0 },
      { question: "मॅक्सपूल कधी?", options: ["फीटरेशन presence", "स्मूथिंग", "उलट", "random"], correct: 0 },
      { question: "आकार स्थिर ठेवणारा conv?", options: ["K=3,P=1,S=1", "K=5,P=0", "K=1,P=0", "K=7"], correct: 0 },
    ],
    related: ["dl-cnn", "dl-transfer-learning", "ai-image-recognition"],
    prev: "dl-cnn",
    next: "dl-transfer-learning",
  },
  {
    slug: "dl-transfer-learning",
    categoryId: "ai",
    title: "Transfer Learning",
    marathiTitle: "Transfer learning — pretrained models चा वापर आणि finetune",
    level: "advanced",
    minutes: 30,
    summary: "मोठे pretrained models (ResNet, EfficientNet) leverage करून लहान data वर image model — feature extractor व finetune पद्धती.",
    sections: [
      {
        title: "Transfer learning — pretrained वापर म्हणजे काय?",
        content: "मोठ्या data (ImageNet) वर शिकलेले model features आधीच raised असतात — आपण त्याची पुन्हा वापरता येते.\nनवीन कार्यासाठी फक्त शेवटचा layer बदलतो (feature extractor) किंवा काळजीपूर्वक सगळे finetune.\nलहान data+खूप वेळ वाचतो — हेच transfer learning.",
      },
      {
        title: "का शिकावे? Transfer learning चे फायदे आणि महत्त्व",
        content: "आपल्या image data ला ImageNet इतका मोठा नसतो — pretend शिकणे खूप वेळ/कंप्युट.\nआधुनिक models यामुळेच लहान teams ने उत्तम काम करतात.\nवाचून न थांबता pretrained एक model लावून बघा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ नormalization चुकणे — pretrained चे transforms पाळा.\n✗ input size — model नुसार resize.\n✗ फक्त head train — have पूर्ण frozen किंवा आंशिक freeze.\n✗ Different domain — medical images मध्ये अधिक finetune हवे.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Feature extractor",
        content: "Backbone (ResNet18 weights=IMAGENET1K_V1) load करा; parameters freeze करा (requires_grad=False).\nशेवटचा fc layer आपल्या classes नुसार बदला; फक्त हा layer train करा. लहान data साठी हे सुरक्षित.",
        code: `import torchvision.models as models
import torch.nn as nn

model = models.resnet18(weights=models.ResNet18_Weights.DEFAULT)
for p in model.parameters():
    p.requires_grad = False
model.fc = nn.Linear(model.fc.in_features, 2)  # आपले 2 classes
print(model)`,
        codeLanguage: "python",
      },
      {
        title: "Finetune तोडणे",
        content: "आधी फक्त head train करा, मग सर्व layers small lr ने unfreeze करा — finetune.\ndata नवीन domain चा असेल तर जास्त finetune, समान असेल तर कमी. learning rate खूप लहान ठेवा.",
      },
      {
        title: "सारांश — transfer learning",
        content: "pretrained features राखून head बदला. transform/input size पाळा. freeze/फिनेट्यून तोल. पुढील धडा: sequence data — RNN.",
      },
    ],
    practiceQuestions: [
      "Feature extractor मध्ये काय frozen राहते?",
      "Transfer learning ने काय वाचतं?",
      "Domain वेगळा असल्यास काय अधिक?",
    ],
    quiz: [
      { question: "Transfer learning मध्ये काय टिकते?", options: ["pretrained features", "labels", "data", "loss"], correct: 0 },
      { question: "हिरा मॉडेल कोणता?", options: ["ResNet/EfficientNet", "KMeans", "tree", "board"], correct: 0 },
      { question: "input transform कसा?", options: ["pretrained नुसार", "random", "फक्त resize", "विषय"], correct: 0 },
      { question: "लहान data साठी safe?", options: ["freeze + head train", "सगळा train", "लोड नको", "काही"], correct: 0 },
      { question: "Finetune learning rate?", options: ["खूप लहान", "मोठा", "समान", "random"], correct: 0 },
    ],
    related: ["dl-cnn", "ai-image-classifier", "ds-data-augmentation"],
    prev: "dl-cnn-layers",
    next: "dl-rnn",
  },
  {
    slug: "dl-rnn",
    categoryId: "ai",
    title: "RNN — Recurrent Networks",
    marathiTitle: "RNN — sequences साठी — time steps मधून state वाहणे",
    level: "advanced",
    minutes: 35,
    summary: "मजकूर, ऑडिओ, वेळ — sequences साठी RNN. hidden state पुढच्या step ला जातो; vanishing gradient ची समस्या आणि लक्षणे.",
    sections: [
      {
        title: "RNN — sequences साठी म्हणजे काय?",
        content: "मजकूर वाक्य हे शब्दांची sequence — सामान्य layers त्याला एकाच वेळी पाहतात. RNN प्रत्येक शब्द step ने वाचतो.\nप्रत्येक step ला hidden state असतो जो पुढच्या step ला जातो — मागील संदर्भ निगराणी करतो.\nअसे शब्दांचा क्रम समजतो — translation, sentiment, भविष्यवाणी.",
      },
      {
        title: "का शिकावे? RNN चे फायदे आणि महत्त्व",
        content: "NLP मध्ये sequence understanding हाच आधार — RNN ची संकल्पना समजल्यावर transformer ची तुलना होते.\nमागील संदर्भ कशी धरतात ते शिकल्यावर मजकूर models कसे बनतात हे उलगडते.\nवाचून न थांबता टोकन-batch म्हणून तयार करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ लांब sequences — vanishing/exploding gradient; LSTM/transformer.\n✗ Sequence बरोबर padding — masked attention शिवाय गोंधळ.\n✗ hidden init विसरणे — zero initial सामान्य but शिकण्यायोग्य.\n✗ batch_first गोंधळ — pytorch मध्ये batch_first=True स्पष्ट.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Şteps मधून state",
        content: "हर step: h_t = tanh(W*x_t + U*h_{t-1}). hidden पुढच्या step ला निरंतर — मागील संदर्भ.\nसमान weights प्रत्येक step ला — RNN ला कोणत्याही length ची sequence समजते.",
        code: `import torch.nn as nn
rnn = nn.RNN(10, 16, batch_first=True)
# input: (batch, seq_len, features=10)
x = torch.randn(2, 5, 10)
out, h = rnn(x)
print(out.shape, h.shape)`,
        codeLanguage: "python",
        output: `torch.Size([2, 5, 16]) torch.Size([1, 2, 16])
# प्रत्येक step चा output (5), शेवटचा hidden h`,
      },
      {
        title: "Vanishing gradient",
        content: "लांब sequences मध्ये gradient अनेक steps मागे गुणाकाराने शून्य होतो — मागील संदर्भ विसरला जातो.\nम्हणून LSTM/GRU मध्ये gates आणि त्यानंतर transformer. लांबलचक कामासाठी RNN ची मर्यादा.\nहेच कारण आहे की मजकूरासाठी transformers प्रमुख.",
      },
      {
        title: "सारांश — RNN",
        content: "state ने क्रम सांभाळतो. sequences साठी उत्तम पण लांब वर मर्यादित. LSTM/TRANSFORMER ने पुढे. पुढील धडा: LSTM gates.",
      },
    ],
    practiceQuestions: [
      "Hidden state कशासाठी?",
      "Vanishing gradient कधी येतो?",
      "batch_first काय करतो?",
    ],
    quiz: [
      { question: "RNN मध्ये state काय?", options: ["hidden", "label", "loss", "bias सोडा"], correct: 0 },
      { question: "लांब sequence मध्ये समस्या?", options: ["vanishing gradient", "loss नाही", "speed जास्त", "कोणी नाही"], correct: 0 },
      { question: "बरोबर input shape?", options: ["(batch, seq, feat)", "(feat, seq)", "(seq,)x", "(batch)"], correct: 0 },
      { question: "भविष्यात काय वापरतात?", options: ["LSTM/Transformer", "CNN", "KMeans", "ResNet"], correct: 0 },
      { question: "RNN weights प्रत्येक step?", options: ["समान", "वेगळे", "दुप्पट", "random"], correct: 0 },
    ],
    related: ["dl-lstm", "ai-nlp", "ds-time-series-intro"],
    prev: "dl-transfer-learning",
    next: "dl-lstm",
  },
  {
    slug: "dl-lstm",
    categoryId: "ai",
    title: "LSTM & GRU",
    marathiTitle: "LSTM — gates ने लांब संदर्भ धरणे — forget, input, output",
    level: "advanced",
    minutes: 35,
    summary: "LSTM म्हणजे RNN ची सुधारित आवृत्ती — cell state मध्ये gates ने काय ठेवायचे हे शिकते. GRU ही सोपी आवृत्ती. Sequences मध्ये व्यापक वापर.",
    sections: [
      {
        title: "LSTM — gates म्हणजे काय?",
        content: "LSTM चा आत cell state (C) असतो — दीर्घ आठवण. तीन gates निम्म्या: forget (काय विसरायचे), input (काय जोडायचे), output (काय दाखवायचे).\nहे gates शिकले जातात — म्हणून सुरुवातीच्या चॅटला किती लक्षात ठेवायचे हे model स्वतः ठरवते.\nग्रेडियंट cell state मध्ये मर्यादित झाल्याने vanishing ची झळ कमी.",
      },
      {
        title: "का शिकावे? LSTM चे फायदे आणि महत्त्व",
        content: "दीर्घ sequences — sentiment, time series, speech — मध्ये LSTM RNN पेक्षा खूप चांगले.\ngates च्या कल्पनेने ट्रान्सफरmer मधली attention सारखी mechanics समजणे सोपे होते.\nवाचून न थांबता vocab/embedding ते LSTM पर्यंत एक pipeline करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Input size broadcast — embedding output dim hook मध्ये \n✗ num_layers ने state shape — (layers, batch, hidden).\n✗ Dropout shifts — dropout>0 तर train/val cycle.\n✗ bidirectional गोंधळ — output आकार दुप्पट.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "PyTorch LSTM",
        content: "nn.LSTM(input_size, hidden, batch_first=True, num_layers=2). out मध्ये प्रत्येक step, (h,c) शेवटचे.\npredictions साठी सहसा शेवटचा hidden वापरतात (classification) किंवा प्रत्येक step वर (sequence).",
        code: `import torch.nn as nn
lstm = nn.LSTM(8, 16, batch_first=True, num_layers=2)
x = torch.randn(3, 10, 8)     # batch3, seq10, feat8
out, (h, c) = lstm(x)
print(out.shape, h.shape, c.shape)`,
        codeLanguage: "python",
        output: `torch.Size([3, 10, 16]) torch.Size([2, 3, 16]) torch.Size([2, 3, 16])
# h/c — per layer; classification साठी h[-1]`,
      },
      {
        title: "GRU — सोपी आवृत्ती",
        content: "GRU मध्ये 2 gates (LSTM च्या 3 च्या उलट) आणि cell state नाही — hidden च एक. कमी parameters, जवळजवळ तोच परिणाम.\nसुरुवातीचे experiments ला GRU जास्त उचित — हलका.",
        code: `gru = nn.GRU(8, 16, batch_first=True)
out, h = gru(x)
print(out.shape, h.shape)`,
        codeLanguage: "python",
        output: `torch.Size([3, 10, 16]) torch.Size([1, 3, 16])
# hidden फक्त — cell नाही`,
      },
      {
        title: "सारांश — LSTM/GRU",
        content: "gates ने दीर्घ संदर्भ; LSTM 3 gates, GRU 2. state shapes काळजी. sequences ला मजबूत. पुढील धडा: embeddings.",
      },
    ],
    practiceQuestions: [
      "LSTM मधील cell state कशासाठी?",
      "GRU व LSTM फरक?",
      "Classification साठी LSTM च्या कोणत्या output वर?",
    ],
    quiz: [
      { question: "LSTM मध्ये किती gates?", options: ["3", "2", "5", "1"], correct: 0 },
      { question: "दीर्घ संदर्भ कशात धरतो?", options: ["cell state", "label", "loss", "batch"], correct: 0 },
      { question: "GRU किती gates?", options: ["2", "3", "4", "0"], correct: 0 },
      { question: "h.shape मध्ये layers कुठे?", options: ["पहिला dim", "शेवटचा", "फक्त hidden", "नाही"], correct: 0 },
      { question: "LSTM gradient समस्या?", options: ["कमी झाली", "वाढली", "सगळीच", "काही नाही"], correct: 0 },
    ],
    related: ["dl-rnn", "dl-embeddings", "ai-nlp"],
    prev: "dl-rnn",
    next: "dl-embeddings",
  },
  {
    slug: "dl-embeddings",
    categoryId: "ai",
    title: "Embeddings",
    marathiTitle: "Embeddings — शब्दांना संख्येच्या वेक्टरमध्ये, अर्थासह",
    level: "advanced",
    minutes: 30,
    summary: "शब्द एकगट id नव्हे — dense vectors मध्ये अर्थजवळ. word2vec सारखी निर्मिती, embedding layer आणि model मध्ये वापर.",
    sections: [
      {
        title: "Embeddings — अर्थ साठवणारे vectors म्हणजे काय?",
        content: "शब्दाची 'राणी' ही संख्येत कशी कळेल? One-hot मध्ये कोणताही meaning नाही, खूप columns.\nEmbedding प्रत्येक शब्दाला लहान dense vector देते — 'राणी' हा 'राजा' च्या जवळ राहतो.\nहे vectors शिकले जातात — समान context च्या शब्दांशी वेक्टरशी जुळतात.",
      },
      {
        title: "का शिकावे? Embeddings चे फायदे आणि महत्त्व",
        content: "NLP चा आधार — verbs, translation, search सगळे embeddings वर.\nGPU मध्ये lookup ने त्वरित; semantic ब्राइट मिळते.\nवाचून न थांबता समान शब्दांचे वेक्टर cosine similarity ने तपासा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ embedding dim खूप मोठा/लहान — vocab नुसार निवड.\n✗ OOV manage — &lt;unk&gt; token ठेवा.\n✗ Pretrained व पाठ्यक्रम गोंधळ — freeze/backprop नियोजन.\n✗ Padding token embedding — bias निर्माण होऊ नये म्हणून तो zero राहू द्या.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Embedding layer",
        content: "nn.Embedding(vocab_size, dim) — id → vector lookup. इनपुट शब्द id; output (batch, seq, dim).\nहे layer model शिकणाऱ्या weights मध्ये असते — training मध्ये सुधारतात.",
        code: `import torch, torch.nn as nn
emb = nn.Embedding(10, 4)          # vocab 10, dim 4
ids = torch.tensor([[1, 3, 5], [0, 2, 7]])
out = emb(ids)
print(out.shape)                    # (2, 3, 4)`,
        codeLanguage: "python",
        output: `torch.Size([2, 3, 4])
# प्रत्येक id → 4-dim vector`,
      },
      {
        title: "Semantic अर्थ कसा?",
        content: "Word2Vec/GloVe ने मोठ्या corpus वर vectors प्रशिक्षित — 'राजा - पुरुष + स्त्री ≈ राणी' सारखे संबंध.\nआधुनिक models मध्ये embeddings ट्रान्सफरमरच्या सुरुवाती (वेगळ्या pretrained) असतात.\nम्हणून अर्थाचा नकाशाच समजायला मिळतो.",
      },
      {
        title: "सारांश — embeddings",
        content: "शब्द→dense vector जो अर्थ जपतो. nn.Embedding lookup. pretrained ne richly. पुढील धडा: attention.",
      },
    ],
    practiceQuestions: [
      "One-hot पेक्षा embedding चा फायदा काय?",
      "OOV token म्हणजे काय?",
      "Embeddings कसे शिकतात?",
    ],
    quiz: [
      { question: "Embedding काय देतो?", options: ["dense vector", "one-hot", "loss", "label"], correct: 0 },
      { question: "nn.Embedding la काय हवा?", options: ["vocab+dim", "labels", "loss", "batch"], correct: 0 },
      { question: "समान अर्थाचे शब्द?", options: ["जवळ vectors", "दूर", "zero", "same id"], correct: 0 },
      { question: "OOV म्हणजे?", options: ["vocab बाहेरचा शब्द", "error", "model", "data"], correct: 0 },
      { question: "Embedding मध्ये काय शिकतात?", options: ["vectors", "labels", "classes", "batches"], correct: 0 },
    ],
    related: ["dl-lstm", "dl-transformers", "ai-nlp"],
    prev: "dl-lstm",
    next: "dl-attention",
  },
  {
    slug: "dl-attention",
    categoryId: "ai",
    title: "Attention Mechanism",
    marathiTitle: "Attention — वाक्यात कोणत्या शब्दांकडे लक्ष केंद्रित — Q, K, V",
    level: "advanced",
    minutes: 35,
    summary: "sequence मध्ये सर्व शब्दांकडे एकाच वेळी लक्ष, परंतु महत्त्व कमी/जास्त. Query, Key, Value आणि weight — transformers चा पाया.",
    sections: [
      {
        title: "Attention — कोणत्या शब्दांकडे लक्ष म्हणजे काय?",
        content: "वाक्याचा अर्थ अनुवाद करताना प्रत्येक शब्दाला समान महत्त्व नाही — मागची words महत्त्वाच्या.\nAttention ने प्रत्येक pair चा weight गणले जाते — Q,K,V मधून (query-key संबंध, value घेणे).\nहेच ध्यासाचे स्कोअर — transformers चा पाया.",
      },
      {
        title: "का शिकावे? Attention चे फायदे आणि महत्त्व",
        content: "Transformers चा धडा याच वर बांधला — हे समजल्याबरोबर LLM चा आतला गाभा\
समजतो.\nRNN पेक्षा लांब संदर्भ सहज — parallel, क्रम मर्यादित नाही.\nवाचून न थांबता QK_T मॅट्रिक्सचा आकार स्वतः काढा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Scaling कमी — sqrt(d_k) ने न केल्यास softmax सॅच्युरेट होतो.\n✗ Mask विसरणे — decoder ला भविष्य शब्द दिसू नये.\n✗ Multi-head shapes — head मध्ये split/merge क्रम.\n✗ positions नाही — attention order नाही समजत; positional encoding.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Q, K, V गणित",
        content: "Score = softmax(Q·Kᵀ / √d_k) · V. Q=pुस्तक प्रश्न, K=कळ (key), V=मूल्य.\nप्रत्येक शब्दाला दुसऱ्या शब्दांकडे कोणते लक्ष द्यावे हे score ठरवते.",
        code: `import torch, torch.nn.functional as F
Q = torch.randn(4, 8)   # 4 tokens, dim 8
K = torch.randn(4, 8)
V = torch.randn(4, 8)
att = F.softmax(Q @ K.T / (8 ** 0.5), dim=-1)
out = att @ V
print(out.shape)`,
        codeLanguage: "python",
        output: `torch.Size([4, 8])
# प्रत्येक token ला दुसऱ्यांचे वजन असलेले résumé`,
      },
      {
        title: "Self-attention vs cross-attention",
        content: "Self-attention — वाक्य स्वतःशी (encoder). Cross-attention — स्रोत ते उद्देश (decoder, translation).\nMulti-head मध्ये अनेक attention बाजूला चालतात व परत जोडले जातात — different संबंध.\nहा हाच प्रवाह transformer मध्ये layers बनवतो.",
      },
      {
        title: "सारांश — attention",
        content: "Q·K ने ध्येय, softmax ने वजन, V ने info. scaling गरजेचा. masks/positional एन्कोडिंग. पुढील धडा: Transformers.",
      },
    ],
    practiceQuestions: [
      "Q, K, V च्या भूमिका काय?",
      "स्कोअरमध्ये √d_k का?",
      "Mask कधी वापरतात?",
    ],
    quiz: [
      { question: "attention weights कशाने मिळतात?", options: ["softmax(QK/√d)", "norm", "sum", "log"], correct: 0 },
      { question: "V काय देतो?", options: ["घेण्याची value", "प्रश्न", "लॉस", "labels"], correct: 0 },
      { question: "√d_k कशासाठी?", options: ["scaling", "कसा नाही", "speed", "shape"], correct: 0 },
      { question: "Decoder mask काय करतो?", options: ["भविष्य लपवतो", "data वाढवतो", "labels", "loss"], correct: 0 },
      { question: "Positional encoding कशासाठी?", options: ["क्रम समजण्यासाठी", "रंग", "shape", "काही"], correct: 0 },
    ],
    related: ["dl-transformers", "dl-embeddings", "dl-rnn"],
    prev: "dl-embeddings",
    next: "dl-transformers",
  },
  {
    slug: "dl-transformers",
    categoryId: "ai",
    title: "Transformers",
    marathiTitle: "Transformers — attention ने बनलेले मजकूर engine — encoder/decoder",
    level: "advanced",
    minutes: 40,
    summary: "Attention चा stack — encoder (समज) आणि decoder (निर्मिती). Multi-head, feed-forward, layer norm आणि pretrained BERT/GPT ची रचना.",
    sections: [
      {
        title: "Transformers — attention stack म्हणजे काय?",
        content: "Transformer हा RNN नये — सर्व शब्द एकाच वेळी, परस्पर attention ने. Layers मध्ये Multi-head attention + Feed-forward.\nencoder समज उभवतो (BERT सारखे), decoder शब्द उत्पन्न करतो (GPT सारखे).\nहेच आज NMU theories ची इमारत — translation, मजकूर, voice सगळे.",
      },
      {
        title: "का शिकावे? Transformers चे फायदे आणि महत्त्व",
        content: "सध्याचे सगळे big models (GPT, Gemini, LLaMA) transformers आहेत — हे architecture समजायला लागेल.\nRNN पेक्षा parallel — मोठ्या data वर efficient, लांब संदर्भ नेणारे.\nवाचून न थांबता pretrained encoder/decode एक चालवून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ scale/OOV — tokenizer model च्या vocab नुसार (huggingface ने योग्य).\n✗ attention mask विसरला — पॅडिंगचा प्रभाव.\n✗ seq length — model max sequence ओलांडू नको.\n✗ pretrained ला random init नाही — weights load.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Encoder-decoder structure",
        content: "Encoder: bidirectional self-attention — संपूर्ण स्रोत समज. Decoder: masked self-attention + cross-attention — निरंतर शब्द.\nGPT फक्त decoder; BERT फक्त encoder. म्हणून वेगवेगळ्या कामांसाठी वेगवेगळी रचना.",
      },
      {
        title: "HF पासून phase करा",
        content: "HuggingFace transformers ने एका ओळीत summarize/translate करता येते — model आणि tokenizer दोन्ही load.\nhuggingface हा आजचा interface — ओपन models चा portal.",
        code: `from transformers import pipeline
summ = pipeline("summarization", model="facebook/bart-large-cnn")
text = "Transformers are neural networks using attention ..."
print(summ(text, max_length=30)[0]["summary_text"])`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — transformers",
        content: "attention stack — parallel, long context. encoder/decoder उपयोग वेगळे. pretrained HF मधून. पुढील धडा: LLM — चालू मोठे models.",
      },
    ],
    practiceQuestions: [
      "GPT कोणता part वापरतो?",
      "Encoder काय करतो?",
      "Transformer मध्ये RNN का नको?",
    ],
    quiz: [
      { question: "Transformer मधील मुख्य घटक?", options: ["attention", "recurrence", "conv", "pool"], correct: 0 },
      { question: "GPT मध्ये कोणता part?", options: ["decoder", "encoder", "both", "none"], correct: 0 },
      { question: "BERT मध्ये?", options: ["encoder", "decoder", "both", "none"], correct: 0 },
      { question: "लांब संदर्भ साठी काय?", options: ["attention", "gate", "filter", "label"], correct: 0 },
      { question: "Transformers library कुठून?", options: ["huggingface", "pandas", "django", "flask"], correct: 0 },
    ],
    related: ["dl-attention", "dl-llm", "dl-finetuning"],
    prev: "dl-attention",
    next: "dl-llm",
  },
  {
    slug: "dl-llm",
    categoryId: "ai",
    title: "LLMs — How They Work",
    marathiTitle: "LLM — अनेक शब्दांचा अंदाज — मोठा transformer कसा बोलतो",
    level: "advanced",
    minutes: 40,
    summary: "LLM म्हणजे अनेक टोकन्सचा शिकलेला अंदाज. next-token prediction, decoder stack, temperature, context window — मूलभूत यांत्रिकी.",
    sections: [
      {
        title: "LLM — next-token prediction म्हणजे काय?",
        content: "LLM म्हणजे प्रचंड transformer जो पुढच्या शब्दाची (token) संभाव्यता सांगतो — मग ते पाठवून पुन्हा.\nअसे sequences मधून प्रत्येक पुढचा token निवडून वाक्य तयार होते (autoregressive).\ntrain करताना केवळ शिकवले जाते: पुढचा टोकन बरोबर असेल का.",
      },
      {
        title: "का शिकावे? LLM चे फायदे आणि महत्त्व",
        content: "आजच्या AI चा सगळा गोंगाट या यांत्रिकीवर उभा आहे — वाचला की गूढ जाते.\ncontext window, tokens, temperature हे सातत्याने आढळते; हे एखाद्या वापरकर्त्यालाही हवे.\nवाचून न थांबता एक प्रश्न विचारून output कसे बनते ते विचारा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ LLM फक्त पुनरावृत्ती — नवीन संकल्पना combo नाही.\n✗ context window ओलांडणे — संदर्भ गळून जातो.\n✗ Temperature व्यवस्थापन नाही — random/निरंतर गोंधळ.\n✗ 'सत्य' नव्हे, संभवनीय शब्द — verify करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Autoregressive यंत्र",
        content: "वाक्याचे tokens → model → पुढच्या token चा probability list → sample (argmax किंवा temperature).\nतो टोकन back-जोड → पुन्हा model. असे एक-token-एक step.\ngreet में teacher_forcing train केला — hgold output आणि model चे denominator दोन्ही वापर.",
      },
      {
        title: "Temperature आणि sampling",
        content: "समान temperature ने probabilities जवळ समान — यादृच्छिक. कमी ने निश्चित.\ntop-p/sampling ने देखील विविधता. inference मध्ये output म्हणजे random glimpse.",
        code: `# कल्पनारूप्य pseudo-steps
for step in range(output_len):
    logits = model(tokens)          # पुढच्या tokens चे scores
    prob = softmax(logits / temperature)
    next_tok = sample(prob, top_p=0.9)
    tokens.append(next_tok)`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — LLM",
        content: "next-token prediction + प्रचंड data = LLM. decoder transformer. temperature/top_p ने state. fact नव्हे, pattern. पुढील धडा: RAG.",
      },
    ],
    practiceQuestions: [
      "LLM प्रत्येक वेळी तेच कसा बोलतो?",
      "context window कधी ओलांडतो?",
      "Temperature कमी/जास्त काय करते?",
    ],
    quiz: [
      { question: "LLM मुख्य काय शिकतो?", options: ["next token", "labels", "images", "loss metrix"], correct: 0 },
      { question: "प्रत्येक step ला काय जोडतो?", options: ["token back", "layer", "loss", "label"], correct: 0 },
      { question: "temperature जास्त?", options: ["random output", "निश्चित", "same", "shortcut"], correct: 0 },
      { question: "भूलंभुल bidirectional?", options: ["decoder", "encoder", "자동", "sampling"], correct: 0 },
      { question: "output हे?", options: ["संभाव्य शब्द, fact नव्हे", "sure सत्य", "guranteed", "साइन"], correct: 0 },
    ],
    related: ["dl-transformers", "dl-rag", "ai-chatgpt"],
    prev: "dl-transformers",
    next: "dl-rag",
  },
  {
    slug: "dl-rag",
    categoryId: "ai",
    title: "RAG — Retrieval Augmented Generation",
    marathiTitle: "RAG — आपल्या documents मधून उत्तर देणारा chatbot",
    level: "advanced",
    minutes: 40,
    summary: "LLM ला फक्त त्याचे memory नाही — RAG search ने आपले documents दाखवते. Chunking, embeddings, vector search, context prompt.",
    sections: [
      {
        title: "RAG — retrieval augmented generation म्हणजे काय?",
        content: "LLM चे ज्ञान train पासून frozen — आपली नवीन माहिती window मध्ये नाही. RAG मध्ये आपले documents शोधून संदर्भ देतात.\nembedding च्या vector ने searching; मग related chunks prompt मध्ये मिसळून LLM उत्तर.\nम्हणून नवीन data, citations, कमी hallucination.",
      },
      {
        title: "का शिकावे? RAG चे फायदे आणि महत्त्व",
        content: "कंपन्या/व्यवसायांसाठी आपल्या data वर assistant — हा सर्वात मोठा इंटरप्राइज AI pattern.\ntrain न करता ज्ञान बदलणे — docs update म्हणजे ज्ञान update.\nवाचून न थांबता एक छोटे PDF/pages RAG massage करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Chunk size चुकीचा — मोठ्या/लहान गोंधळ; overlap ठेवा.\n✗ Embedding नियम — query आणि chunks एकच model.\n✗ Top-k फार — confusion; 3-5 पुरेसा.\n✗ Citations चुकणे — source display महत्त्वाचे.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Pipeline",
        content: "Documents → chunking → embeddings → vector store. Query → embedding → similarity search → top chunks → prompt → LLM.\nवेक्टर स्टोर: Chroma/FAISS. हेच retrieval steps सर्वात महत्त्वाचे.",
        code: `from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma

chunks = RecursiveCharacterTextSplitter(
    chunk_size=500, chunk_overlap=50).split_documents(
    PyPDFLoader("guide.pdf").load())
db = Chroma.from_documents(chunks, embedding_model)`,
        codeLanguage: "python",
      },
      {
        title: "LLM ला संदर्भ",
        content: "शोधलेले top chunks prompt मध्ये जोडा — system prompt मध्ये स्पष्ट करा: फक्त दिलेल्या संदर्भातून उत्तर द्या.\nत्यामुळे असत्य संदर्भ टाळता येतो आणि उत्तर अचूक निर्धारित बनते.",
      },
      {
        title: "सारांश — RAG",
        content: "आपले docs → chunks → vectors → search → prompt → LLM. new knowledge बिन training. source देअ. पुढील धडा: finetuning.",
      },
    ],
    practiceQuestions: [
      "RAG मध्ये LLM ला नवीन ज्ञान कसे?",
      "Chunk आकार कशावर ठरतो?",
      "Hallucination कमी कसा?",
    ],
    quiz: [
      { question: "RAG शोध कुठे करतो?", options: ["documents", "LLM memory", "labels", "log"], correct: 0 },
      { question: "Similarity कशावर?", options: ["embeddings", "लॉस", "batches", "classes"], correct: 0 },
      { question: "Prompt मध्ये काय जोडतात?", options: ["top chunks", "scores", "tokens", "labels"], correct: 0 },
      { question: "Vector store उदा?", options: ["Chroma/FAISS", "MySQL", "CSV", "Redisपेक्षा"], correct: 0 },
      { question: "RAG चा फायदा?", options: ["new docs बिन training", "speed", "loss कमी", "GPU less"], correct: 0 },
    ],
    related: ["dl-llm", "dl-finetuning", "ai-prompt-frameworks"],
    prev: "dl-llm",
    next: "dl-finetuning",
  },
  {
    slug: "dl-finetuning",
    categoryId: "ai",
    title: "Fine-tuning LLMs",
    marathiTitle: "Finetuning — सामान्य model चा आपल्या style/task नुसार आकृती",
    level: "advanced",
    minutes: 40,
    summary: "आपल्याच data वर LLM चे weights थोडे बदलणे — style/adapter. LoRA, full fine-tune, instruction data आणि cost निर्णय.",
    sections: [
      {
        title: "Fine-tuning — model चा आकृती म्हणजे काय?",
        content: "Pretrained LLM सर्वसाधारण आहे; ते आपल्या domain/style नुसार बदलणे म्हणजे finetuning.\nआपल्या चाही examples (instruction-response) वर weights थोडे update होतात.\nRAG पेक्षा वेगळे — येथे माहिती नव्हे, वर्तन/स्वर बदलतो.",
      },
      {
        title: "का शिकावे? Finetuning चे फायदे आणि महत्त्व",
        content: "Domain-style बोलणे, specific format output (JSON/मराठी) — ते RAG ने होत नाही, finetuning ने होते.\nLoRA ने खर्च कमी — पूर्ण model न भरता, फक्त adapter.\nवाचून न थांबता छोट्या data वर LoRA चाचणी करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Data quality — डीbaj नसलेले examples चुकीचे व्यवहार.\n✗ Full-finetune cost — लहान data वर संधी वेळ/GPU.\n✗ Catastrophic forgetting — जास्त epochs जुनेे.\n✗ Train/val मिसळणे — examples split आवश्यक.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Instruction data तयार",
        content: "प्रत्येक example: instruction + input + response. आय times काही hundred thousand (var with model).\nFormat model नुसार (chat template). Quality > quantity — 500 चांगले instruction हजारांच्या पेक्षा मजबूत.",
        code: `{
  "instruction": "मराठीत short note लिहा.",
  "input": "सोलर पॅनेलचे दोन फायदे",
  "output": "स्वच्छ ऊर्जा व बिजाचा खर्च कमी."
}`,
        codeLanguage: "json",
      },
      {
        title: "LoRA — हलका finetune",
        content: "LoRA फक्त small adapter matrices ही weights चा change शिकते — पूर्ण model frozen.\nparameters खूप कमी, memory कमी, output जवळजवळ full-finetune.\nPeft library ने एका ओळीत लागू होतो.",
        code: `from peft import LoraConfig, get_peft_model
lora = LoraConfig(r=8, lora_alpha=16, target_modules=["q_proj","v_proj"])
model = get_peft_model(base_model, lora)
model.print_trainable_parameters()  # फक्त ~1%`,
        codeLanguage: "python",
      },
      {
        title: "सारांश — finetuning",
        content: "style/task साठी weights बदल. instruction data quality. LoRA स्वस्त. RAG knowledge, finetune behavior. मग hand-on tools — huggingface.",
      },
    ],
    practiceQuestions: [
      "RAG व finetune फरक काय?",
      "LoRA काय वाचवतो?",
      "Catastrophic forgetting म्हणजे काय?",
    ],
    quiz: [
      { question: "Finetuning काय बदलतो?", options: ["weights/behavior", "labels", "tokens", "loss"], correct: 0 },
      { question: "RAG चे ज्ञान vs finetune?", options: ["RAG knowledge, finetune style", "समान", "उलट", "काही"], correct: 0 },
      { question: "LoRA काय शिकतो?", options: ["adapter", "सगळे weights", "labels", "data"], correct: 0 },
      { question: "जास्त epochs तर काय?", options: ["forgetting", "बरं", "गती", "काही"], correct: 0 },
      { question: "Data quality का?", options: ["behavior उपयोगी", "वेळ", "cost", "नाही"], correct: 0 },
    ],
    related: ["dl-rag", "dl-llm", "ai-huggingface"],
    prev: "dl-rag",
    next: "ai-huggingface",
  },
];