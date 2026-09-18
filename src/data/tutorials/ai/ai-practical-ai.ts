import type { Tutorial } from "@/data/tutorials";

// === AI · PRACTICAL AI — HuggingFace, local LLMs, agents, vision, voice, deploy, MLOps ===
// dl-finetuning → ai-huggingface → ai-ollama → ai-local-llm → ai-agents → ai-agent-tools
// → ai-image-classifier → ai-object-detection → ai-face-recognition → ai-voice-assistant
// → ai-recommendation → ai-llm-chatbot → ai-model-deploy → ai-streamlit → ai-gen-image
// → ai-multimodal → ai-edge-ai → ai-mlops → (ai-vectors — ai-expert.ts)

export const aiPractical: Tutorial[] = [
  {
    slug: "ai-huggingface",
    categoryId: "ai",
    title: "Hugging Face",
    marathiTitle: "Hugging Face — thousands of ready models एका ठिकाणी",
    level: "intermediate",
    minutes: 30,
    summary: "Hugging Face Playground म्हणून समजा — pretrained models, datasets आणि libraries. एका दोन lines मध्ये सगळ्यात मोठे models वापरा.",
    sections: [
      {
        title: "Hugging Face म्हणजे काय — एकाच जागी all things AI",
        content: "हा एक platform आहे: millions of pretrained models, datasets आणि libraries — text, image, audio, video.\nTransformers library म्हणजे python pipeline — models load download आणि चालवणे अगदी सोपे.\nModel card बघून task, size, license आणि zero-shot examples कळतात.",
      },
      {
        title: "का शिकावे? Hugging Face चे फायदे आणि महत्त्व",
        content: "GPU वर महिने training न करता उत्तम models free मध्ये मिळतात — कामाचा आधार तयार होतो.\nहे community मोठी: evaluations, benchmark आणि notebooks सगळी तयार.\nवाचून न थांबता पहिले pipeline चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ सगळा model code वाचत न येणे — pipeline/API wrapper वापरा.\n✗ Task साठी चुकीचे model — task property बघून निवडा.\n✗ Model memory न तपासता load — device नियोजन आधी.\n✗ License holder — commercial वापर आधी check.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Transformers pipeline — काही मिनिटांत पहिले model",
        content: "pipeline(task, model) — model auto download आणि run होतो. input text → output label.\nGPU असेल तर device=0; नाही तर cpu. काही models तुमच्या यंत्रावर लहान प्रयोगासाठी पुरेसे.",
        code: `from transformers import pipeline
pipe = pipeline("sentiment-analysis")
print(pipe("I love this course!"))
print(pipe("This workout is so tiring."))`,
        codeLanguage: "python",
        output: `[{'label': 'POSITIVE', 'score': 0.999}]
[{'label': 'NEGATIVE', 'score': 0.99}]`,
      },
      {
        title: "Model pick कसा करावा",
        content: "Task नुसार tags: text-classification, text-generation, image-classification, question-answering.\nDownloads आणि memory साठी params पहा, नंतर license.\npipeline(task, model=\"facebook/bart-large-mnli\") सारखी model id वापरून खास model घ्या.",
        code: `from transformers import pipeline
mnli = pipeline("zero-shot-classification")
r = mnli("I want to order pizza",
         candidate_labels=["food", "travel", "sports"])
print(r["labels"])`,
        codeLanguage: "python",
        output: `['food', 'sports', 'travel']`,
      },
      {
        title: "सारांश — Hugging Face",
        content: "pretrained models + datasets + library — एका जागी. pipeline वापरून दोन lines मधून काम. पुढील धडा: तुमच्या यंत्रावर local LLM — Ollama.",
      },
    ],
    practiceQuestions: [
      "pipeline म्हणजे काय?",
      "Model निवडताना काय पहायचे?",
      "text-generation pipeline लिहून पहा.",
    ],
    quiz: [
      { question: "Hugging Face मध्ये काय मिळते?", options: ["अगोदर तयार models", "एकवेळचा data", "खेळ", "sound files"], correct: 0 },
      { question: "pipeline काय करते?", options: ["model load+run", "webserver", "database", "logs"], correct: 0 },
      { question: "Model निवडताना पहिले काय?", options: ["task", "फक्त मित्र", "नावाचे अक्षर", "file size"], correct: 0 },
      { question: "GPU नसल्यास काय?", options: ["cpu वर चालते", "काहीच नाही", "error fixed", "cloud हवे"], correct: 0 },
      { question: "Zero-shot म्हणजे?", options: ["अगोदर labels शिवाय", "शून्य मोजणी", "empty data", "cold start"], correct: 0 },
    ],
    related: ["dl-transformers", "dl-llm", "ai-tools"],
    prev: "dl-finetuning",
    next: "ai-ollama",
  },
  {
    slug: "ai-ollama",
    categoryId: "ai",
    title: "Ollama — Local LLM",
    marathiTitle: "Ollama — तुमच्या डेस्कटॉपवर चालणारे LLM",
    level: "intermediate",
    minutes: 30,
    summary: "Ollama आपल्या यंत्रावर LLM चालवते — offline, privacy सहज, फुकट. install, model निवड, आणि API वापर.",
    sections: [
      {
        title: "Ollama म्हणजे काय — LLM सर्व्हर तुमच्या घरी",
        content: "हे एक binary आहे जे models (llama, gemma, qwen) तुमच्या यंत्रावर चालवते — काही हजार downloads.\nहे model/card नुसार RAM लागते; लहान models 8GB RAM वरही चालतात.\nAPI देईल: curl ने prompt पाठवा, text परत मिळेल.",
      },
      {
        title: "का शिकावे? Ollama चे फायदे आणि महत्त्व",
        content: "प्रायव्हेसी — data आपल्या यंत्राबाहेर जात नाही; offline काम होते.\nकाही हजारांवर वेल, free — experiments ला मोकळीक.\nवाचून न थांबता पहिले model चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ RAM न तपासता मोठे model — लहान variants घ्या.\n✗ संपूर्ण model बदलणे — काही variants निवडून भेद पहा.\n✗ Ports लॉक — ओला ollama सर्व्हर बंद असल्यास.\n✗ परत न बांधणे — restart ला त्रास होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Install आणि पहिले model",
        content: "curl -fsSL https://ollama.com/install.sh | sh — असे install होते; मग ollama pull लहान model आणि run.\nmaterial कॉपीपेक्षा स्वतःकडे कमीत कमी एक छोटा var सुरू करा — तेव्हाच समज उपयोगी पडते.",
        code: `# install (linux/mac)
# curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2:1b
ollama run llama3.2:1b "नमस्ते, एकच दोन lines लिहा"`,
        codeLanguage: "bash",
        output: `<unnamed></unnamed>`,
      },
      {
        title: "Ollama API — प्रोग्रॅमद्वारे वापर",
        content: "Ollama ठिकाणी local HTTP API: http://localhost:11434/api/generate.\npython requests ने JSON POST: model, prompt, stream. output text मिळते.",
        code: `import requests
r = requests.post("http://localhost:11434/api/generate",
    json={"model": "llama3.2:1b", "prompt": "दोन ओळींत explanation दे", "stream": False})
print(r.json()["response"])`,
        codeLanguage: "python",
        output: `हे एक उदाहरण output आहे —
मॉडेल तुमच्या यंत्रावर चालू लागले.`,
      },
      {
        title: "सारांश — Ollama",
        content: "Local LLM सर्व्हर — curl/API ने वापर. RAM नुसार model. privacy+offline+free. पुढील धडा: कोणते local model निवडावे — local LLM निवडण्याचे नियम.",
      },
    ],
    practiceQuestions: [
      "Ollama चे पहिले 3 फायदे?",
      "RAM कमी असल्यास काय कराल?",
      "python ने एक prompt पाठवा.",
    ],
    quiz: [
      { question: "Ollama कुठे चालते?", options: ["आपल्या यंत्रावर", "cloud यंत्र", "other laptop", "website"], correct: 0 },
      { question: "ओला API कोणता port?", options: ["11434", "8080", "3000", "5432"], correct: 0 },
      { question: "model निवडताना काय महत्त्वाचे?", options: ["RAM", "नाव", "चलना", "file extension"], correct: 0 },
      { question: "Offline वापर शक्य?", options: ["होय", "नाही", "केवळ night", "फक्त VPN"], correct: 0 },
      { question: "model पुल कसा करतात?", options: ["ollama pull", "pip install", "git clone", "wget"], correct: 0 },
    ],
    related: ["ai-local-llm", "ai-tools", "dl-llm"],
    project: "ai-ollama",
    prev: "ai-huggingface",
    next: "ai-local-llm",
  },
  {
    slug: "ai-local-llm",
    categoryId: "ai",
    title: "Local LLM निवड व यंत्र नियोजन",
    marathiTitle: "Local LLM — model निवड, quantization, RAM नियोजन",
    level: "intermediate",
    minutes: 30,
    summary: "Local LLM निवडताना RAM, quantization (GGUF), speed आणि task यांचा नियोजन कसा करायचा — प्रत्यक्ष उपयुक्त मार्गदर्शन.",
    sections: [
      {
        title: "Local LLM म्हणजे काय आणि निवड कशी करायची",
        content: "Local LLM हे तुमच्या यंत्रावर चालणारे language model — ollama/huggingface च्या GGUF files.\nनिवड सूत्र: params कमी + quantization जास्त = कमी RAM, थोडी कमी quality.\nTask नुसार: code → code models, chat → instruct variants.",
      },
      {
        title: "का शिकावे? Local निवडीचे फायदे",
        content: "बरोबर model निवडल्यास hardware वर सगळ्यात चांगली quality मिळते.\nखरा project ला हेच नियोजन — cost आणि speed चा गाभा.\nवाचून न थांबता आपल्या RAM चा batches करून model निवडा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ 30B मोठा model लहान RAM ला घेणे — गंभीर धीमा.\n✗ Quantization ची फसवणूक — Q4 म्हणजे भाषा गमावत नाही ती precision कमी.\n✗ context length पुरेसे न ठेवणे — लांब चॅट तुटते.\n✗ CPU/GPU mixing न कळणे — ollama स्वतः निर्णय घेते.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Quantization आणि GGUF समजून घ्या",
        content: "GGUF हे quantized model file format. Q4_K_M सामान्य — चांगला balance.\nलहान files = कमी RAM, थोडी precision. हे चाचणीने ठरवा.",
      },
      {
        title: "RAM नियोजनाचा सोपा examination",
        content: "अंदाज: ~4GB RAM → 1-3B params; 8GB → 7B Q4; 16GB → 13B Q4 किंवा 7B जास्त context.\nspeed वाढवायची तर GPU वर layers ठेवा.",
        code: `# ollama मध्ये model किती वापरतो हे बघा
ollama ps`,
        codeLanguage: "bash",
        output: `NAME         ID      SIZE   PROCESSOR
llama3.2:1b  xyz     1.4GB  100% CPU`,
      },
      {
        title: "सारांश — local LLM नियोजन",
        content: "RAM नुसार params+quantization निवडा; GGUF files वापरा; speed साठी GPU layers. पुढील धडा: AI agents — LLM च्या पुढचा टप्पा.",
      },
    ],
    practiceQuestions: [
      "8GB RAM वर कोणता size शिफारशी?",
      "Quantization म्हणजे काय?",
      "तुमच्या यंत्राचे RAM मोजून एक निवड पहा.",
    ],
    quiz: [
      { question: "GGUF म्हणजे?", options: ["quantized model format", "खेळ", "webshop", "server type"], correct: 0 },
      { question: "Q4 म्हणजे?", options: ["4-bit quantization", "चौथा attempt", "4GB RAM", "4 layers"], correct: 0 },
      { question: "8GB RAM la kasa thamb?", options: ["7B Q4 पर्यंत", "काहीच नाही", "70B", "बेफिकीर"], correct: 0 },
      { question: "Speed वाढवायला?", options: ["GPU layers", "CPU threads", "40 खिडक्या", "resize desk"], correct: 0 },
      { question: "Context कमी असल्यास?", options: ["लांब चॅट तुटते", "काही नाही", "speed वाढे", "color बदलते"], correct: 0 },
    ],
    related: ["ai-ollama", "dl-finetuning", "ai-mlops"],
    prev: "ai-ollama",
    next: "ai-agents",
  },
  {
    slug: "ai-agents",
    categoryId: "ai",
    title: "AI Agents",
    marathiTitle: "AI agents — LLM + tools + सायकल, स्वतःहून काम करणारे प्रोग्रॅम",
    level: "advanced",
    minutes: 35,
    summary: "Agent म्हणजे LLM साठी tools आणि loop — करायचे निर्णय, tool call, result पाहून पुढचे निर्णय. चॅटबॉटच्या पुढचा टप्पा.",
    sections: [
      {
        title: "Agent म्हणजे काय — साहाय्यकाची एक नवीन पद्धत",
        content: "Agent हा LLM + tools + एक loop; प्रत्येक फेरीत LLM सांगते काय करायचे, program शक्य तर करतो.\nउदा. question: weather? agent tool search ते result पाहून नंतर उत्तर.\nहे chat दरम्यान का — कोणती action करायची ते model ठरवते.",
      },
      {
        title: "का शिकावे? Agents चे फायदे",
        content: "Multi-step real काम — query databases, call APIs, अपडेट files — बॉटच्या पलीकडे.\nएकच experience automation मध्ये खूप कदर — future jobs चा आधार.\nवाचून न थांबता एक सोपी agent loop तयार करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Loop ला मर्यादा न ठेवणे — infinite बोलणे, वेळ वाया.\n✗ Tool outputs ignore करणे — agent ने result traction पाहायलाच हवे.\n✗ जास्त tools एकदा — confusion; तीनच ठेवा प्रथम.\n✗ बिन safe actions — code/delete यांवर permission.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Agent loop ची रचना",
        content: "State: messages memory. Prompt: system मध्ये tools describe करा. Loop: LLM → function_call → execute → append result → पुन्हा.",
        code: `def agent_loop(prompt, max_steps=5):
    msgs = [{"role": "system", "content": "तुझ्याकडे calculator tool आहे."}]
    for _ in range(max_steps):
        reply = llm(msgs)            # text / function_call
        msgs.append(reply)
        if reply.get("tool"):
            r = run_calc(reply["tool"])   # tool execute
            msgs.append({"role": "tool", "content": str(r)})
        elif "FINAL:" in reply["content"]:
            return reply["content"]
    return "पुरेशी steps"`,
        codeLanguage: "python",
        output: `FINAL: 12 * 7 = 84
# 2-3 फेऱ्यांत tool ने उत्तर मिळाले`,
      },
      {
        title: "साधे Agent उदाहरण",
        content: "खर्चाचे प्रश्न: agent ने मासिक खर्च ॲड करून उत्तर देत. Calculator tool सोबत लूप दोन फेऱ्या.\nहे परीक्षण सोपे — फक्त tool result सोबत नियंत्रण.",
        code: `def calculator(expr):
    return eval(expr)

r = agent_loop("दर महिना 1200 + 350 काय?", "calculator")
print(r)`,
        codeLanguage: "python",
        output: `निर्णय: calculator(1200+350) → 1550
FINAL: महिन्याचा खर्च 1550`,
      },
      {
        title: "सारांश — Agents",
        content: "LLM + tools + loop = agent. Tool execute → result → next निर्णय. मर्यादा आणि safety आवश्यक. पुढील धडा: agent चे tools स्वतः कसे बनवायचे.",
      },
    ],
    practiceQuestions: [
      "Agent आणि chatbot मध्ये फरक काय?",
      "Loop मर्यादा का हवी?",
      "एक calculator agent बनवून बघा.",
    ],
    quiz: [
      { question: "Agent मध्ये काय असते?", options: ["LLM+tools+loop", "फक्त LLM", "फक्त database", "philosophy"], correct: 0 },
      { question: "Agent tool result काय करते?", options: ["पुढील निर्णयासाठी वापरता", "discard", "delete", "re-send"], correct: 0 },
      { question: "Loop किती ठेवावा?", options: ["मर्यादित", "अनंत", "एक", "तिन"], correct: 0 },
      { question: "Agent कोणी ठरवते action?", options: ["LLM", "user file", "बाहेरचे robot", "weather"], correct: 0 },
      { question: "सुरक्षित काम कसे?", options: ["permissions", "कोणीही", "skip tool", "अंध अंदाज"], correct: 0 },
    ],
    related: ["ai-chatgpt", "ai-agent-tools", "ai-prompts"],
    prev: "ai-local-llm",
    next: "ai-agent-tools",
  },
  {
    slug: "ai-agent-tools",
    categoryId: "ai",
    title: "Agent Tools आणि Function Calling",
    marathiTitle: "Agent tools — function calling, search, calculator, code interpreter",
    level: "advanced",
    minutes: 35,
    summary: "Function calling म्हणजे LLM ला available functions सांगणे आणि म्हणून parameters घेणे. Tools design आणि वापराचे नियम.",
    sections: [
      {
        title: "Function calling म्हणजे काय — Tool स्वतः LLM निवडते",
        content: "System prompt किंवा API schema मध्ये functions list करा; LLM कधी कोणते call करायचे ठरवते.\nतुमचा program call execute करून result परत भरतो — हेच agent चे heart.\nJSON schema: name, description, parameters — description महत्त्वाचे.",
      },
      {
        title: "का शिकावे? Tools चे फायदे",
        content: "LLM फक्त text करते; हिशोब/क्रिया tools ने होतात — tools सह वेब, files, databases सर्व उपलब्ध.\nहेच architecture मागे ChatGPT plugins, assistants flywheel होते.\nवाचून न थांबता एक tool function call करून पहा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Tool schema खूप लांब — विनाकारण tokens वाया.\n✗ Descriptions अस्पष्ट — LLM चुकीचे call करते.\n✗ Result न देत न थांबणे — result परत भरा म्हणजे follow-up yield.\n✗ Unvalidated input — eval/ने फाट्या कडा नको.,\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "सरळ function calling उदाहरण",
        content: "n8n चा sample: current_weather tool. LLM ला function schema दिल्यास result महान.",
        code: `def call_llm_with_tools(prompt, tools):
    msgs = [{"role": "user", "content": prompt}]
    reply = llm(msgs, tools=tools)
    for tc in reply.tool_calls:
        fn = globals()[tc["name"]]
        out = fn(**tc["arguments"])
        msgs.append({"role": "tool", "content": str(out)})
    return llm(msgs)` ,
        codeLanguage: "python",
        output: `weather(city="नागपूर") → "29C"
उत्तर: नागपूरला आज 29 अंश.`,
      },
      {
        title: "चांगल्या tool design चे नियम",
        content: "एक call = एक काम; name स्पष्ट; parameters minimal; return structure सरळ.\nInput validation — अज्ञात input eval/free नको. trials साठी logs ठेवा.",
      },
      {
        title: "सारांश — Agent tools",
        content: "Tools = LLM ला बाह्य क्रिया. Function calling schema clean, execute, result परत. पुढील धडा: image classification — प्रत्यक्ष vision AI.",
      },
    ],
    practiceQuestions: [
      "Function calling मध्ये काय schema सांगतो?",
      "Tool result कुठे भरतात?",
      "एक weather tool schema लिहा.",
    ],
    quiz: [
      { question: "Function calling काय ठरवते?", options: ["कधी कोणता function", "काम पूर्ण", "कुठे जायचे", "किती पैसे"], correct: 0 },
      { question: "Tool schema मध्ये नेमके काय?", options: ["name, description, parameters", "फक्त नाव", "यादी", "किंमत"], correct: 0 },
      { question: "LLM कुठून shapes tool?", options: ["description वरून", "फाईल cycles", "मनातून", "कायम पहिले"], correct: 0 },
      { question: "Tool output कोण वापरते?", options: ["LLM follow-up", "user UI", "dhun sound", "another app"], correct: 0 },
      { question: "Validation का?", options: ["सुरक्षितता", "वेग", "रंग", "आवाज"], correct: 0 },
    ],
    related: ["ai-agents", "ai-llm-chatbot", "ai-tools"],
    prev: "ai-agents",
    next: "ai-image-classifier",
  },
  {
    slug: "ai-image-classifier",
    categoryId: "ai",
    title: "Image Classification",
    marathiTitle: "Image classification — फोटोमधून वस्तू कोणती हे सांगणे",
    level: "beginner",
    minutes: 25,
    summary: "Image classification — फोटो/पिक्सेल फीड द्या, label मिळवा. pretrained model + small code. CNN चा सरळ, व्यावहारिक वापर.",
    sections: [
      {
        title: "Image classification म्हणजे काय",
        content: "फोटो म्हणजे pixels (R,G,B त्रिकूट). Model वर्ग सांगते — dog, cat, dais, accident.\npretrained models (ResNet, MobileNet) लाखो फोटोंवर शिकलेले — आपल्याला फक्त वापर.\nHuggingFace pipelines मध्ये हे कुठलीच गुंतागुंत विरहित.",
      },
      {
        title: "का शिकावे? Classification चे फायदे",
        content: "Quality check, sorting images, medical triage, farming pests — सगळीकडे.\nFirst vision project म्हणून सोपी सुरुवात — पुढच्या detection साठी आधार.\nवाचून न थांबता एक फोटो classify करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ image size model नुसार न करणे — model नुसार resize आधी करा.\n✗ model input channel — RGB चे रूपांतरण.\n✗ confidence न पाहिल्यास — विश्वास नसताना गैर वर्ग.\n✗ एकच label — class list covert background/नुसार.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Pipeline सह एक line classification",
        content: "pipeline(image-classification) — model auto download. डाव-उजव्या फोटोवर आधार काय.",
        code: `from transformers import pipeline
clf = pipeline("image-classification")
r = clf("elephant.jpg")
print(r[0]))`,
        codeLanguage: "python",
        output: `[{'label': 'African elephant', 'score': 0.93}]`,
      },
      {
        title: "Accuracy वाढवण्याचे सोपे उपाय",
        content: "चांगला फोटो — स्पष्ट subject. camera angles तपासा; प्रकाश भारी.\nजास्त labels classes मध्ये जवळ असतात — तर selective model search करा.",
      },
      {
        title: "सारांश — Image classification",
        content: "pixels → pretrained CNN → labels. pipeline वापरा; confidence पहा. पुढील धडा: object detection — boxes सह अनेक वस्तू.",
      },
    ],
    practiceQuestions: [
      "Classification કોણે कोणते output देते?",
      "confidence काय सांगते?",
      "तुमच्या कॅमेऱ्याचा फोटो classify करा.",
    ],
    quiz: [
      { question: "Classification चे output?", options: ["label + score", "फक्त रंग", "video", "sound"], correct: 0 },
      { question: "pretrained model काय?", options: ["आधीचे शिकलेले", "मी शिकवतो", "empty", "demo"], correct: 0 },
      { question: "आजत model साठी काय?", options: ["resize + RGB", "काही नाही", "music", "login"], correct: 0 },
      { question: "जास्त चांगला result कसा?", options: ["चांगला फोटो", "अधिक blur", "video", "zoom 100"], correct: 0 },
      { question: "Which task label?", options: ["image-classification", "summarization", "translation", "search"], correct: 0 },
    ],
    related: ["dl-cnn", "ai-huggingface", "ai-image-recognition"],
    project: "ai-image-classifier",
    prev: "ai-agent-tools",
    next: "ai-object-detection",
  },
  {
    slug: "ai-object-detection",
    categoryId: "ai",
    title: "Object Detection",
    marathiTitle: "Object detection — boxes सह फोटोतील अनेक वस्तू शोधणे",
    level: "intermediate",
    minutes: 30,
    summary: "Detection = classification + location (bounding boxes). सगळ्या वस्तू कुठे आहेत ते सांगते. YOLO/Detr pipelines चा वापर.",
    sections: [
      {
        title: "Detection म्हणजे काय — classification + box",
        content: "फक्त मुख्य वस्तू नाही — सगळी gaps: objects च्या boxes आणि labels.\nहे output: [class, confidence, x,y,w,h] प्रति box.\nहे traffic, factory, medical, agriculture आणि security चे इंजिन.",
      },
      {
        title: "का शिकावे? Detection चे फायदे",
        content: "Counting, monitoring, crop health, safety — wherever location महत्त्व.\nआधीचे boxes → ट्रॅकिंग, OCR आणि analysis पाठवता येते.\nवाचून न थांबता वेब कॅम current वर प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Coordinates मिश्र — pixel vs normalized.\n✗ Confidence threshold कमी — noise boxes.\n✗ version मतभेद — model card बारीक वाचा.\n✗ फोटो compare memory — FPS तपासा भारी नेटwork.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Detr पाइपलाइन उदाहरण",
        content: "pipeline(object-detection) — boxes आणि scores परत येतात. draw boxes हवे असल्यास COCO colors वापरा.",
        code: `from transformers import pipeline
det = pipeline("object-detection")
r = det("street.jpg")
for x in r:
    print(x["label"], round(x["score"],2),
          (x["box"]["xmin"], x["box"]["ymin"]))`,
        codeLanguage: "python",
        output: `person 0.91 (120, 30)
car 0.88 (300, 180)
traffic light 0.76 (520, 90)`,
      },
      {
        title: "हे result कसे वापरायचे",
        content: "boxes ने crop करा → classify/OCR; किंवा boxes वर draw करा; count करा.\nlines/nodes camera असेल तर वरच्या कोनात परत -ण्यातीचा फरक.",
      },
      {
        title: "सारांश — Object detection",
        content: "boxes + labels = detection. threshold पहा; coordinates रूपांतरण काळजी. पुढील धडा: face recognition — embeddings सह चेहरा ओळख.",
      },
    ],
    practiceQuestions: [
      "Classification आणि detection फरक?",
      "Box coordinates कसे असतात?",
      "एक फोटो detection चालवा.",
    ],
    quiz: [
      { question: "Detection का output?", options: ["boxes+labels", "फक्त label", "audio", "vector file"], correct: 0 },
      { question: "Confidence काय दर्शवते?", options: ["वस्तू निश्चितता", "size", "रंग", "किंमत"], correct: 0 },
      { question: "Detection साठी task?", options: ["object-detection", "summarization", "translation", "QA"], correct: 0 },
      { question: "boxes वर काय करता येते?", options: ["crop/draw/count", "फक्त हटवणे", "sound", "net"], correct: 0 },
      { question: "Threshold कमी ठेवल्यास?", options: ["खोटे boxes", "काही नाही", "fast", "clean"], correct: 0 },
    ],
    related: ["ai-image-classifier", "dl-cnn", "ai-image-recognition"],
    prev: "ai-image-classifier",
    next: "ai-face-recognition",
  },
  {
    slug: "ai-face-recognition",
    categoryId: "ai",
    title: "Face Recognition",
    marathiTitle: "Face recognition — चेहऱ्याचे embeddings आणि ओळख",
    level: "intermediate",
    minutes: 30,
    summary: "Face detection (चेहरा कुठे) vs recognition (कोण आहे) — embeddings ने चेहरे कसे तुलना होतात. लहान पायथॉन इंटिग्रेशन.",
    sections: [
      {
        title: "Face recognition म्हणजे काय — detection vs recognition",
        content: "Detection: चेहरा box मध्ये दाखवते. Recognition: embeddings काढून दुसऱ्याशी तुलना करते.\nEmbedding = face चे numeric signature — similarity साठी distance अथवा cosine.\nहरकत ही attendance वरून bolt आज काम करते.",
      },
      {
        title: "का शिकावे? Face recognition फायदे",
        content: "Attendance, access control, personal photo albums auto-tag, security.\nहे एक high-visibility AI demo — embedding ची कल्पना सर्वत्र उपयोगी.\nवाचून न थांबता दोन फोटोंची तुलना करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ रंग/light gradients — tips vary.\n✗ Embedding normalize न करणे — distance chuk.\n✗ Privacy — सगळ्यांचे consent आधी.\n✗ Model कमी resolution साठी वाईट.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Embedding तुलना — similarity",
        content: "हे library (face_recognition) — one-liner embeddings आणि तुलना. threshold ने योग्य-अयोग्य निर्णय.",
        code: `import face_recognition
a = face_recognition.load_image_file("vilas.jpg")
b = face_recognition.load_image_file("same.jpg")
a_enc = face_recognition.face_encodings(a)[0]
b_enc = face_recognition.face_encodings(b)[0]
d = face_recognition.face_distance([a_enc], b_enc)[0]
print("identical" if d < 0.5 else "different", round(d,3))`,
        codeLanguage: "python",
        output: `identical 0.18
# <0.5 = सारखे, अधिक = वेगळे`,
      },
      {
        title: "चांगल्या वापरासाठी आधार",
        content: "चांगला छायाचित्र — front face, आधी रोशनी. फोटो archive मध्ये वेगवेगळे कोन हवेत.\nएके जागी privacy बाबत काळजी करा — भविष्यातील problems टाळा.",
      },
      {
        title: "सारांश — Face recognition",
        content: "Embeddings + distance = recognition. आधी detection नंतर embedding. privacy नियम पाळा. पुढील धडा: voice assistant — बोलणे ऐकणे व उत्तर.",
      },
    ],
    practiceQuestions: [
      "Detection vs recognition फरक?",
      "Embedding म्हणजे काय?",
      "स्वतःच्या दोन फोटोंची तुलना करा.",
    ],
    quiz: [
      { question: "Recognition काय काढते?", options: ["embeddings", "sound", "size", "file path"], correct: 0 },
      { question: "Similarity निकष?", options: ["distance", "color", "subject", "date"], correct: 0 },
      { question: "threshold 0.5 पेक्षा कमी?", options: ["सारखे", "वेगळे", "दुडके", "भार"], correct: 0 },
      { question: "Detection काय देतो?", options: ["box", "embedding", "पाठ", "resource"], correct: 0 },
      { question: "Privacy साठी काय?", options: ["consent", "नाही", "skip", "film"], correct: 0 },
    ],
    related: ["ai-object-detection", "dl-cnn", "dl-embeddings"],
    prev: "ai-object-detection",
    next: "ai-voice-assistant",
  },
  {
    slug: "ai-voice-assistant",
    categoryId: "ai",
    title: "Voice Assistant",
    marathiTitle: "Voice assistant — बोलून उत्तर देणारे assistant, STT + TTS",
    level: "intermediate",
    minutes: 30,
    summary: "Speech-to-Text ने बोलणे ऐकणे, LLM उत्तर, Text-to-Speech ने बोलणे देणे. नेटिव्ह voice assistant बनवा.",
    sections: [
      {
        title: "Voice assistant म्हणजे काय — तीन भागांची रचना",
        content: "तीन भाग: audio → text (ASR), text → answer (LLM), answer → audio (TTS).\nसुरुवातीला प्रत्येक भाग एक स्वतंत्र pipeline.\nही लेयर्स independent — निवड व upgrade सोपे.",
      },
      {
        title: "का शिकावे? Voice चे फायदे",
        content: "हातमोकळे वापर, वाचता येत नसलेल्या साठी खोली, offline home assistant.\nएकच demo वर प्रभावी — परंतु components शिकवतो.\nवाचून न थांबता मायकवरून पहिले वाक्य transform करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ audio format — 16kHz mono sample.\n✗ Silence/gap खूप — ASR गोंधळ.\n✗ TTS speed — खूप वेग गंभीर.\n✗ हिंदी/मराठी — model उपलब्धता आधी.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "STT — बोलणे → text",
        content: "Whisper (openai) किंवा HF pipelines audio-classification/automatic-speech-recognition. one API call.",
        code: `from transformers import pipeline
stt = pipeline("automatic-speech-recognition")
print(stt("hello.wav")["text"])`,
        codeLanguage: "python",
        output: `नमस्ते, माझे नाव विलास आहे`,
      },
      {
        title: "संपूर्ण mini assistant",
        content: "record → STT → LLM reply → TTS. llm म्हणून ollama वापरा (local). TTS साठी gTTS अगर pyttsx3.",
        code: `import requests, subprocess
text = stt("ask.wav")["text"]
r = requests.post("http://localhost:11434/api/generate",
    json={"model": "llama3.2:1b", "prompt": text, "stream": False})
answer = r.json()["response"]
subprocess.run(["espeak-ng", answer])`,
        codeLanguage: "python",
        output: `(बोललेले उत्तर ऐकू येते — espeak/TTS मधून)`,
      },
      {
        title: "सारांश — Voice assistant",
        content: "STT → LLM → TTS ही त्रिकूट. प्रत्येक स्वतंत्र pipeline; format आणि speed. पुढील धडा: recommendation system — वापरकर्त्याला काय आवडेल.",
      },
    ],
    practiceQuestions: [
      "Voice assistant चे तीन भाग?",
      "ASR म्हणजे काय?",
      "मराठी STT model शोधा.",
    ],
    quiz: [
      { question: "First भाग काय?", options: ["स्वतः ऐकणे (STT)", "LLM", "TTS", "web"], correct: 0 },
      { question: "STT काय करते?", options: ["audio→text", "text→audio", "translate", "search"], correct: 0 },
      { question: "TTS काय करते?", options: ["text→audio", "audio→text", "summarize", "compress"], correct: 0 },
      { question: "साधारण audio sample?", options: ["16kHz mono", "48k stereo", "8bit", "mp3"], correct: 0 },
      { question: "LLM कुठून उत्तर?", options: ["ollama/local", "फक्त internet", "MIC", "speaker"], correct: 0 },
    ],
    related: ["ai-nlp", "ai-huggingface", "ai-chatgpt"],
    project: "ai-voice-assistant",
    prev: "ai-face-recognition",
    next: "ai-recommendation",
  },
  {
    slug: "ai-recommendation",
    categoryId: "ai",
    title: "Recommendation System",
    marathiTitle: "Recommendation — वापरकर्त्याला काय आवडेल त्याची पहिली ओळख",
    level: "beginner",
    minutes: 25,
    summary: "Collaborative vs content-based recommendation — सगळ्यात सोपी पद्धत, item rating आणि similarity. प्रत्यक्ष पायथॉन code.",
    sections: [
      {
        title: "Recommendation म्हणजे काय",
        content: "ऐतिहासिक रेटिंग व behavior वरून पुढील item सुचवणे. movies, products, courses.\nदोन शाळा: collaborative (सारखे वापरकर्ते) आणि content-based (सारखी subject).\nआधी सोपी baseline नंतर model वाढवा.",
      },
      {
        title: "का शिकावे? Recommendation चे फायदे",
        content: "Commerce, OTT, learning platforms — Engagement चा पाठ्यक्रम.\nसोपी अपसर्गिक व्यवस्था — आधी data, नंतर नंबर.\nवाचून न थांबता एक छोटा movies recommender बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Cold start — नव्या वापरकर्त्यासाठी काही नाही → popular items.\n✗ केवळ popularity — personalization नाही.\n✗ खरोखर ratings 0 ते 1 मध्ये normalize.\n✗ Implicit signals ignore — clicks, views वापरा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "सोपी content-based पद्धत",
        content: "Item नुसार feature vector (genre one-hot). निवडलेल्या item सारखी items — cosine distance.\npandas/sklearn मध्ये हे सोपे; हेच मागे movies filtering.",
        code: `import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
matrix = pd.DataFrame([
 {"movie":"Thor","action":1,"scifi":1,"romance":0},
 {"movie":"Titanic","action":0,"scifi":0,"romance":1},
 {"movie":"Avatar","action":1,"scifi":1,"romance":1},
]).set_index("movie")
sim = pd.DataFrame(cosine_similarity(matrix), index=matrix.index, columns=matrix.index)
print(sim["Avatar"].sort_values(ascending=False).drop("Avatar"))`,
        codeLanguage: "python",
        output: `Thor      0.816
Titanic    0.577`,
      },
      {
        title: "Improvement वाढवण्याच्या दिशा",
        content: "मोठ्या data साठी collaborative — matrix factorization (SVD).\nimplicit signals, time decay, स्थान यांचे योग्य mixture — व्यावहारिक systems.\nफक्त एकच पद्धत असेल तरी चांगला baseline मिळतो.",
      },
      {
        title: "सारांश — Recommendation",
        content: "similarity ने item suggestion; content/collaborative. normalize आणि cold start पहा. पुढील धडा: LLM chatbot — संपूर्ण project.",
      },
    ],
    practiceQuestions: [
      "Content vs collaborative फरक?",
      "Cold start काय?",
      "एक simple recommender बनवा.",
    ],
    quiz: [
      { question: "Content-based काय वापरता?", options: ["item features", "friends", "calendar", "price"], correct: 0 },
      { question: "Collaborative काय वापरता?", options: ["सारखे users", "रंग", "सवय", "season"], correct: 0 },
      { question: "नव्या user ला काय?", options: ["popular items", "काहीच नाही", "random crash", "login"], correct: 0 },
      { question: "Similarity मोजायला?", options: ["cosine", "sha256", "jaccard", "timer"], correct: 0 },
      { question: "Best baseline?", options: ["popularity filter", "Deep GAN", "graph", "lava"], correct: 0 },
    ],
    related: ["ds-pandas-dataframe", "ds-correlation", "ml-kmeans"],
    project: "ai-recommendation",
    prev: "ai-voice-assistant",
    next: "ai-llm-chatbot",
  },
  {
    slug: "ai-llm-chatbot",
    categoryId: "ai",
    title: "LLM Chatbot",
    marathiTitle: "LLM chatbot — history सह इंटरॲक्टिव्ह assistant बनवणे",
    level: "intermediate",
    minutes: 35,
    summary: "Chatbot = LLM + message history + सरळ UI. memory, context trimming आणि state ची योग्य हाताळणी — संपूर्ण लहान project.",
    sections: [
      {
        title: "LLM chatbot म्हणजे काय — LLM पेक्षा अधिक",
        content: "फक्त single prompt नाही — सगळा conversation (history) model वर जातो.\nप्रत्येक reply नंतर history वाढते; ती compact ठेवण्यासाठी context trim.\nsystem prompt — persona, rules, टोन ठरवतो.",
      },
      {
        title: "का शिकावे? Chatbot चे फायदे",
        content: "Support bots, education, local assistant — सरळ पण खूप उपयुक्त.\nहे Build साठी पहिले project — UI, API, state सर्व शिकता येते.\nवाचून न थांबता history घेऊन bot बनवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ History लांब — context अधिक खर्च; प्रत्येक वेळी trim.\n✗ प्रत्येक calls ला state reset — session cache.\n✗ System instructions गाळणे — rules न पाठवणे.\n✗ Rate limits और errors ignored.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "History सह ollama का update",
        content: "messages array request मध्ये पाठवा — server स्मृति नाही, state तुमची.\nsfill साठी पहिले user/system messages ठेवा.",
        code: `import requests
history = [{"role": "system",
    "content": "तू एक मदतनीस आहेस. मराठीत उत्तर दे."}]
while True:
    user = input("आपण> ")
    if user == "exit": break
    history.append({"role": "user", "content": user})
    r = requests.post("http://localhost:11434/api/chat",
        json={"model": "llama3.2:1b", "messages": history})
    reply = r.json()["message"]["content"]
    history.append({"role": "assistant", "content": reply})
    print("bot>", reply)`,
        codeLanguage: "python",
        output: `आपण> माझे नाव काय?
bot> मला माहीत नाही, पण सांगा!
आपण> माझे नाव विलास
bot> नमस्ते विलास!`,
      },
      {
        title: "Context trim चे नियम",
        content: "history साठी वरची लांबी: tokens मोजा; oldest messages काढा; system नेहमी ठेवा.\nजास्त लांब history साठी trim करा — सुरुवातीस 8-20 उत्तरे पुरेशी.",
      },
      {
        title: "सारांश — Chatbot",
        content: "System + history state trim. एक छोटे project तयार. पुढील धडा: model deploy — chatbot API म्हणून उतरवणे.",
      },
    ],
    practiceQuestions: [
      "Chatbot मध्ये history का हवी?",
      "System prompt काय ठरवतो?",
      "एक local chatbot बनवून चॅट करा.",
    ],
    quiz: [
      { question: "Chatbot मध्ये काय पाठवतात?", options: ["history+messages", "फक्त एका word", "binary", "image"], correct: 0 },
      { question: "Server कुठे state ठेवते?", options: ["नाही, client ठेवते", "सर्व्हरकडे", "database", "कॅश"], correct: 0 },
      { question: "Context trim काय करते?", options: ["जुने messages काढते", "नवे जोडते", "files delete", "speed"], correct: 0 },
      { question: "System prompt काय?", options: ["persona/rules", "उत्तर क्रम", "login", "noise"], correct: 0 },
      { question: "Trimming दरम्यान काय काढू नये?", options: ["system/जुने पहिले", "user प्रत्येक", "add happy", "त्यांयचे"], correct: 0 },
    ],
    related: ["ai-chatgpt", "ai-prompts", "dl-rag"],
    project: "ai-llm-chatbot",
    prev: "ai-recommendation",
    next: "ai-model-deploy",
  },
  {
    slug: "ai-model-deploy",
    categoryId: "ai",
    title: "Model Deploy — API",
    marathiTitle: "Model deploy — FastAPI ने model ला API बनवणे",
    level: "advanced",
    minutes: 35,
    summary: "Model deploy — तुमच्या model ला HTTP API बनवा दुसऱ्यांसाठी. FastAPI, requests, आणि सुरक्षित input/output.",
    sections: [
      {
        title: "Deploy म्हणजे काय",
        content: "Model प्रोग्रॅममध्ये नाही तर लोकांना वापरता येणारी HTTP सेवा.\nclient → request → server model → response. FastAPI हे सोपे बनवते.\nइंटरफेस ठरवा: input/output schema, errors, timeouts.",
      },
      {
        title: "का शिकावे? Deploy चे फायदे",
        content: "मॉडेल जग उपयोगासाठी खरे; demo/client/app सगळे कनेक्ट.\nजॉब market मध्ये deploy ही भविष्यातील मुख्य कौशल्य.\nवाचून न थांबता पहिले API चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Model preticted requests time — queue/latest model.\n✗ CORS — browser app वरून block.\n✗ Input limit न ठेवणे — crashes.\n✗ Secrets in code — env variables.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "FastAPI मध्ये model API",
        content: "decorator @app.post. request body → predict → json response. model server start ला load करा.",
        code: `from fastapi import FastAPI
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()
pipe = pipeline("sentiment-analysis")

class Item(BaseModel):
    text: str

@app.post("/predict")
def predict(item: Item):
    r = pipe(item.text)[0]
    return {"label": r["label"], "score": round(r["score"], 3)}`,
        codeLanguage: "python",
        output: `curl -X POST http://localhost:8000/predict \\
  -H "Content-Type: application/json" \\
  -d '{"text": "छान दिवस"}'`,
      },
      {
        title: "उत्तर — client बाजू",
        content: "requests ने post; response JSON मध्ये label+score. errors साठी try/except.\nproduction: server warnings, metrics, अधिक workers.",
      },
      {
        title: "सारांश — Deploy",
        content: "model → HTTP API → clients. FastAPI सोपी रचना; input/output schema. पुढील धडा: Streamlit — काही मिनिटांत UI.",
      },
    ],
    practiceQuestions: [
      "Deploy म्हणजे काय?",
      "FastAPI decorator कोणता?",
      "एक model API बनवा व curl ने तपासा.",
    ],
    quiz: [
      { question: "Deploy म्हणजे काय?", options: ["model HTTP सेवा", "model delete", "record", "compile"], correct: 0 },
      { question: "FastAPI म्हणजे?", options: ["python web framework", "database", "IDE", "OS"], correct: 0 },
      { question: "Input schema कशासाठी?", options: ["स्पष्ट मर्यादा", "कलर", "इंटरनेट", "वेग"], correct: 0 },
      { question: "Browser app ला काय हवे?", options: ["CORS", "cookie", "buffer", "canvas"], correct: 0 },
      { question: "Secrets कुठे?", options: ["env variables", "code मध्ये", "log मध्ये", "नावात"], correct: 0 },
    ],
    related: ["ai-llm-chatbot", "ai-mlops", "ai-streamlit"],
    prev: "ai-llm-chatbot",
    next: "ai-streamlit",
  },
  {
    slug: "ai-streamlit",
    categoryId: "ai",
    title: "Streamlit — AI App UI",
    marathiTitle: "Streamlit — काही मिनिटांत AI app चा UI",
    level: "beginner",
    minutes: 25,
    summary: "Streamlit ने फक्त python मध्ये UI — sliders, buttons, chat. विचार करा, demo बनवा, share करा.",
    sections: [
      {
        title: "Streamlit म्हणजे काय",
        content: "शुद्ध python मध्ये UI घटक — कोणतेच HTML नको. st.title, st.button, st.text_input.\nप्रत्येक interaction वर script rerun होतो — session state ठेवण्यासाठी st.session_state.\nDemo आणि internal tools साठी हे उत्कृष्ट.",
      },
      {
        title: "का शिकावे? UI चे फायदे",
        content: "तुमचे AI model वापरता येणारे app व्हायला हवे — Streamlit अगदी 10 lines मध्ये.\nएकच demo सहज share — जॉब interviews आणि clients साठी.\nवाचून न थांबता पहिली Streamlit app चालवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Model प्रत्येक rerun load — @st.cache_resource.\n✗ state हरवणे — session_state वापरा, global नाही.\n✗ Secret हार्ड-कोड — st.secrets.\n✗ Big model web वर — memory पहा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "पहिली Streamlit app",
        content: "st.write बस; button ने model call. run: streamlit run app.py.",
        code: `import streamlit as st
st.title("AI प्रयोगशाळा")
text = st.text_area("मजकूर लिहा")
if st.button("विश्लेषण करा"):
    out = pipe(text)[0]
    st.success(f"{out['label']}: {out['score']:.2f}")`,
        codeLanguage: "python",
        output: `Output: POSITIVE: 0.99
(browser मध्ये interactUI दिसते)`,
      },
      {
        title: "Chat UI सहित chatbot",
        content: "st.chat_message आणि st.chat_input — गुड conversational interface. session मध्ये messages ठेवा.",
      },
      {
        title: "सारांश — Streamlit",
        content: "python मधून UI नियंत्रण. cache आणि state लक्षात ठेवा. पुढील धडा: generate images — AI रचनात्मक बाजू.",
      },
    ],
    practiceQuestions: [
      "Streamlit मध्ये button कसा?",
      "Cache का लागते?",
      "एक classify app बनवा.",
    ],
    quiz: [
      { question: "Streamlit काय बनवते?", options: ["UI", "database", "kernel", "network"], correct: 0 },
      { question: "Button म्हणजे?", options: ["st.button", "st.click", "st.press", "st.tap"], correct: 0 },
      { question: "cache का?", options: ["मॉडेल वारंवार load न करणे", "logs", "font", "share"], correct: 0 },
      { question: "State साठी काय?", options: ["st.session_state", "global", "cookie", "file"], correct: 0 },
      { question: "run कसा?", options: ["streamlit run app.py", "python server", "npm start", "make"], correct: 0 },
    ],
    related: ["ai-llm-chatbot", "ai-model-deploy", "ds-seaborn"],
    prev: "ai-model-deploy",
    next: "ai-gen-image",
  },
  {
    slug: "ai-gen-image",
    categoryId: "ai",
    title: "AI Image Generation",
    marathiTitle: "AI image generation — text पासून नवीन images",
    level: "intermediate",
    minutes: 30,
    summary: "Diffusion models text prompt → नवीन images. Stable Diffusion चा वापर, prompt अभियांत्रिकी आणि धोके.",
    sections: [
      {
        title: "Image generation म्हणजे काय",
        content: "Text describe करा → model नवीन image बनवते (पूर्वी कधीच न पाहिलेली).\nDiffusion models noise मधून image चे reconstruction शिकतात — step by step.\nSDXL, FLUX चे generations — local GPU किंवा HF API.",
      },
      {
        title: "का शिकावे? Generation चे फायदे",
        content: "Ideation, design की तयार draft, education visuals — वेग आणि कल्पना.\nPrompt control शिकणे — हे स्वतःचे skill.\nवाचून न थांबता पहिले image generate करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Prompt अस्पष्ट — अधिक detail, style, composition.\n✗ Negative prompt गाळणे — देखावा कसा नको ते सांगा.\n✗ समान seed नाही — reproducibility.\n✗ Copyright/ethics — सजीव अधिकार.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Stable Diffusion सह generate",
        content: "HuggingFace diffusers — लहान GPU वर प्रयोग सोपा. steps कमी ठेवा आधी.",
        code: `from diffusers import DiffusionPipeline
import torch
pipe = DiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-xl-base-1.0",
    torch_dtype=torch.float16).to("cuda")
img = pipe(
    "मराठी गावचा सूर्यास्त, तैलचित्र",
    num_inference_steps=30).images[0]
img.save("sunset.png")`,
        codeLanguage: "python",
        output: `sunset.png — नवीन तैलचित्र तयार झाले.`,
      },
      {
        title: "Prompt quality वाढवणे",
        content: "Structure: subject + style + lighting + composition + colors.\nnegative prompt: blurry, text, watermarks. seed fix bandwidth reproducibility.",
      },
      {
        title: "भविष्य आणि नियम",
        content: "Deceptive images काळजी — disclosure आवश्यक. tools बरोबरीत जबाबदारी.\nविशेषत: real people, art निर्माते यांचे हक्क.",
      },
      {
        title: "सारांश — Image generation",
        content: "Diffusion = text → image. Prompt structure + negative prompt. ethics जपा. पुढील धडा: multimodal models — image+text एकत्र.",
      },
    ],
    practiceQuestions: [
      "Diffusion म्हणजे काय?",
      "Negative prompt काय?",
      "एक original style मध्ये image बनवा.",
    ],
    quiz: [
      { question: "Diffusion काय शिकतात?", options: ["noise→image", "text→audio", "video→text", "html"], correct: 0 },
      { question: "Prompt साठी काय हवे?", options: ["subject/style", "फक्त एक शब्द", "password", "time"], correct: 0 },
      { question: "Reproducibility?", options: ["seed fix", "हरवलेला", "जुना", "नवा"], correct: 0 },
      { question: "Deceptive images साठी?", options: ["disclosure", "हटवा", "ignore", "share"], correct: 0 },
      { question: "Steps कमी करून काय?", options: ["पटकन demo", "अधिक detail", "crash", "nothing"], correct: 0 },
    ],
    related: ["ai-huggingface", "dl-transformers", "ai-multimodal"],
    prev: "ai-streamlit",
    next: "ai-multimodal",
  },
  {
    slug: "ai-multimodal",
    categoryId: "ai",
    title: "Multimodal Models",
    marathiTitle: "Multimodal AI — image + text एकत्र समजणारे models",
    level: "advanced",
    minutes: 35,
    summary: "Multimodal models एकाच वेळी image व text वाचतात — explain images, ask questions. vision-language architectures.",
    sections: [
      {
        title: "Multimodal म्हणजे काय",
        content: "पूर्वीचे models एकच प्रकार (शुद्ध text) वाचतात. multimodal — image, text, audio एकमेकात.\nVision encoder + language model एकत्र; फोटो 2D prompts म्हणून जाते.\nउदा. Gemini, GPT-4o Vision, LLaVA — फोटो पाहून उत्तर.",
      },
      {
        title: "का शिकावे? Multimodal चे फायदे",
        content: "Invoice OCR, medical report, image QA, personal साहाय्य — दिशानिर्देश आता जिंकतात.\nहे भविष्याचा दिशा — आजच्या model चा पुढचा टप्पा.\nवाचून न थांबता एक फोटो पाठवून प्रश्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Image format — bytes/base64 योग्य द्या.\n✗ मोठी images resizing — 768px पर्यंत.\n✗ Multimodal साठी त्याच realm चे model वापरा.\n✗ Hallucination — फोटोचे text जवळ असल्यास गोंधळ.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "HF vision-language उदाहरण",
        content: "pipeline(image-to-text) छोट्या छोट्या प्रश्नांसाठी; BLIP/LLaVA variants node nodes.",
        code: `from transformers import pipeline
vqa = pipeline("image-to-text",
    model="Salesforce/blip-image-captioning-base")
out = vqa("photo.jpg")
print(out[0]["generated_text"])`,
        codeLanguage: "python",
        output: `a cat sitting on a laptop`,
      },
      {
        title: "Application ideas",
        content: "resume पासून questions, classroom blackboard notes, old फोटो stories.\nक्रियेसाठी cook lookup — Flow shop (streamlit मध्ये) custom.",
      },
      {
        title: "सारांश — Multimodal",
        content: "vision encoder + language — text+image एकत्र. bytes formatting आणि size. पुढील धडा: edge AI — छोट्या यंत्रांवर चालवणे.",
      },
    ],
    practiceQuestions: [
      "Multimodal म्हणजे काय?",
      "Vision-language कसे बनते?",
      "एका फोटोचे caption काढा.",
    ],
    quiz: [
      { question: "Multimodal काय वाचतात?", options: ["image+text", "फक्त audio", "फक्त HTML", "binary"], correct: 0 },
      { question: "Vision encoder काय करतो?", options: ["image → features", "text → audio", "upload", "buffer"], correct: 0 },
      { question: "Image कसा पाठवायचा?", options: ["base64/bytes", "फक्त URL", "काही नाही", "file path"], correct: 0 },
      { question: "Hallucination म्हणजे?", options: ["जादुई माहिती", "सुधारणा", "fast", "search"], correct: 0 },
      { question: "मोठ्या image ला काय?", options: ["resize", "compress", "recolor", "loop"], correct: 0 },
    ],
    related: ["dl-llm", "ai-image-recognition", "ai-huggingface"],
    prev: "ai-gen-image",
    next: "ai-edge-ai",
  },
  {
    slug: "ai-edge-ai",
    categoryId: "ai",
    title: "Edge AI",
    marathiTitle: "Edge AI — मोबाईल/छोट्या यंत्रांवर AI चालवणे",
    level: "advanced",
    minutes: 35,
    summary: "Edge AI — models ला फोन/Raspberry वर download आणि run — quantization, TFLite/ONNX, offline प्रयोग.",
    sections: [
      {
        title: "Edge AI म्हणजे काय",
        content: "AI cloud मध्ये नाही तर यंत्रावर (precision) — phone, raspberry, camera.\nहे network n विना, fast, private काम करते.\nConstraints: memory, battery, compute — model compact हवा.",
      },
      {
        title: "का शिकावे? Edge AI चे फायदे",
        content: "Smart devices, offline assistants, agriculture sensors — जागेवर माहिती निर्णय.\nLatency 0 — camera/video realtime processes.\nवाचून न थांबता एक model convert/run करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फोन वर मोठे models — quantization आवश्यक.\n✗ Batch size — embedded devices वर 1 ठेवा.\n✗ Backend CPU/GPU जुळत नाही — verify in test.\n✗ Malware guard — permission tight.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Quantization — model लहान करणे",
        content: "float32 → int8 precision — आकार 4x कमी, थोडा accuracy नुकसान.\nTFLite converter वापरा; hardware accelerators साठी delegates.",
        code: `import tensorflow as tf
converter = tf.lite.TFLiteConverter.from_saved_model("saved/")
converter.optimizations = [tf.lite.Optimize.DEFAULT]
tflite_model = converter.convert()
open("model.tflite", "wb").write(tflite_model)`,
        codeLanguage: "python",
        output: `model.tflite — ~4x लहान, mobile वर ready.`,
      },
      {
        title: "ONNX — cross-platform बंध",
        content: "ONNX हे मॉडेल फॉरमॅट सर्व tools साठी — PyTorch → ONNX → TFLite/CoreML.\nonnxruntime mobile आणि desktop वर चालते; subset ops बघा.",
      },
      {
        title: "सारांश — Edge AI",
        content: "यंत्रावर run — quantization + TFLite/ONNX. Latency/private. पुढील धडा: MLOps — संपूर्ण प्रक्रिया व्यवस्थापन.",
      },
    ],
    practiceQuestions: [
      "Edge AI मध्ये कोणती मर्यादा?",
      "Quantization काय करते?",
      "एक लहान model TFLite मध्ये convert करा.",
    ],
    quiz: [
      { question: "Edge AI कुठे चालते?", options: ["यंत्रावर", "cloud मध्ये", "वेगळ्या server", "data center"], correct: 0 },
      { question: "Quantization म्हणजे?", options: ["precision कमी करणे", "format वाढ", "network", "cache"], correct: 0 },
      { question: "TFLite काय आहे?", options: ["mobile व्यासपीठ", "HTTP server", "CSS", "shell"], correct: 0 },
      { question: "ONNX म्हणजे?", options: ["cross-platform format", "अँड्रॉइड emulator", "स्वतःचे OS", "compiler"], correct: 0 },
      { question: "Edge मध्ये काय कमी?", options: ["लॅटेंसी", "privacy", "speed", "control"], correct: 0 },
    ],
    related: ["ai-mlops", "ai-huggingface", "dl-cnn"],
    prev: "ai-multimodal",
    next: "ai-mlops",
  },
  {
    slug: "ai-mlops",
    categoryId: "ai",
    title: "MLOps",
    marathiTitle: "MLOps — model जीवनचक्र, versioning, monitoring",
    level: "advanced",
    minutes: 35,
    summary: "MLOps — data/models चे versioning, training ट्रॅकिंग, deploy आणि monitoring. उत्पादनासाठी AI ला organization.",
    sections: [
      {
        title: "MLOps म्हणजे काय",
        content: "Software engineering + ML — model विकास वापर आणि देखभाल सर्व प्रक्रिया.\n4 कामे: data versioning, experiments ट्रॅकिंग, deployment, monitoring.\nही शिस्त विना मॉडेल एकदा customer पर्यंत वेळापेक्षा जास्त लागते.",
      },
      {
        title: "का शिकावे? MLOps चे फायदे",
        content: "जबाबदार पुनरुत्पादन — कोणते data/model कोणते निकाल दिले हे दुरुस्तीत ठेवता येते.\nटीममध्ये किंवा स्वतःच्या projects मध्ये वेळ वाया न बोलता जास्त काम.\nवाचून न थांबता एक experiment log ठेवा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Metrics logs न ठेवणे — तर्क कळत नाही.\n✗ Data changes ला blind — drift monitoring.\n✗ Config हार्ड-कोड — version files.\n✗ प्रत्येक script environment — requirements.lock.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Experiment ट्रॅकिंग — हाताने",
        content: "एक CSV ट्रॅकर पुरेसा — data, model, hyperparams, score, सर्व लिहा.\nMLflow/Weights&Biases नंतर — but core हेच.",
        code: `import csv, datetime
log = [["time","dataset","model","acc"],
       [datetime.datetime.now(), "v2", "rf",
        0.912]]
with open("runs.csv", "a") as f:
    [f.write(",".join(map(str, row)) + "\\n")
     for row in log]`,
        codeLanguage: "python",
        output: `runs.csv — प्रत्येक प्रयोगाचा record पुनरुत्पादन सह.`,
      },
      {
        title: "Model registry आणि deploy",
        content: "प्रत्येक चांगला model वर tag (staging/prod); rollback सोपे.\nCI/CD ने auto-test → ship; monitoring ला drift — data_distribution alerts.",
      },
      {
        title: "सारांश — MLOps",
        content: "Versioning + tracking + deploy + monitor. नीट organization — production तयार. पुढील धडा: AI चे गणित — vectors/p matrices.",
      },
    ],
    practiceQuestions: [
      "MLOps ची 4 कामे?",
      "Drift म्हणजे काय?",
      "एक experiment record सुरू करा.",
    ],
    quiz: [
      { question: "MLOps म्हणजे?", options: ["ML प्रक्रिया orgastik", "डेटा पुढे", "गेम", "ऑपरेटिंग सिस्टम"], correct: 0 },
      { question: "Experiment ट्रॅकिंग म्हणजे?", options: ["logs ठेवणे", "फाईल hide", "ram", "font"], correct: 0 },
      { question: "Model registry काय देते?", options: ["प्रत्येक tag/rollback", "बॅकअप", "wifi", "rewards"], correct: 0 },
      { question: "Drift नियंत्रण?", options: ["monitoring alerts", "backup", "compile", "install"], correct: 0 },
      { question: "Riproducibility साठी?", options: ["versioning सर्व", "फक्त code", "फ्रेंड", "टाइमर"], correct: 0 },
    ],
    related: ["ai-model-deploy", "ai-edge-ai", "ml-pipeline"],
    prev: "ai-edge-ai",
    next: "ai-vectors",
  },
];