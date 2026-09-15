import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 5 — IoT ===
// iot-intro → iot-wifi-basics → iot-temp-monitor → iot-smart-relay
// → iot-thingspeak (terminal, next: "")

export const electronicsLevel5: Tutorial[] = [
  {
    slug: "iot-intro",
    categoryId: "electronics",
    title: "IoT ची सुरुवात",
    marathiTitle: "IoT म्हणजे काय — ESP8266/ESP32, Arduino vs ESP, NodeMCU पहिला WiFi प्रोग्राम",
    level: "advanced",
    minutes: 25,
    summary: "IoT म्हणजे काय, ESP8266/ESP32 का खास, Arduino सोबत तुलना, बोर्ड निवड (NodeMCU/Wemos) आणि पहिला WiFi प्रोग्राम.",
    sections: [
      {
        title: "IoT म्हणजे काय",
        content: "IoT — Internet of Things: साधनं इंटरनेटशी जोडणे.\n\nअर्थ:\n\t• Sensors — data गोळा.\n\t• Network — इंटरनेट/फोन.\n\t• Control/Action — दूरून नियंत्रण.\n\nवापर:\n\t• Smart home — दिवे, fans.\n\t• Monitoring — तापमान, आर्द्रता.\n\t• Agriculture — soil/weather.\n\t• Industrial — machine status.\n\nफायदे:\n\t• दूरून वाचन/नियंत्रण.\n\t• Data इतिहास — trends.\n\t• स्वयंचलित action.\n\nसुरुवात तत्त्व:\n\t• सोपे — button on board → phone.\n\nसराव: तुमच्या घरचे कोणते उपकरण IoT बनवता येईल याची यादी करा.",
      },
      {
        title: "ESP8266 / ESP32",
        content: "WiFi दोन लोकप्रिय chips:\n\nESP8266:\n\t• कमी खर्च, WiFi + TCP/IP.\n\t• एक core, 80/160MHz.\n\t• GPIO कमी, analog 1.\n\t• बोर्ड — NodeMCU, Wemos D1.\n\nESP32:\n\t• WiFi + Bluetooth(BLE).\n\t• 2 cores, 240MHz.\n\t• जास्त pins, analog, touch, DAC.\n\t• प्रोजेक्ट नवीन — शिफारस.\n\nवीज:\n\t• 3.3V logic — 5V नको.\n\t• 5V सर्वसमावेशक नाही.\n\nसराव: आपल्या बोर्डच्या GPIO pinout चा नकाशा छपवा.",
      },
      {
        title: "Arduino vs ESP",
        content: "Arduino vs ESP — कोणते कधी?\n\nArduino:\n\t• सोपा, huge ecosystem.\n\t• No WiFi (शिवाय shield).\n\t• 5V logic.\n\t• real-time tasks उत्तम.\n\nESP:\n\t• WiFi/network योग्य.\n\t• 3.3V logic.\n\t• Arduino IDE ने program होते.\n\t• MQTT/HTTP सहज.\n\nनिवड:\n\t• Pure sensor/logic — Arduino.\n\t• Cloud/अॅप नियंत्रण — ESP.\n\t• दोन्ही — Arduino + ESP communication.\n\nप्रोग्रामिंग:\n\t• Arduino IDE — board manager install.\n\t• ESP32 — esp32 package.\n\nसराव: ESP port install करून Blink चालवा.",
      },
      {
        title: "बोर्ड निवड — NodeMCU, Wemos",
        content: "खरी बोर्ड निवड — प्रात्यक्षिक उदा.\n\nNodeMCU (ESP8266):\n\t• वापरकर्त्यांसाठी सोपा.\n\t• USB programming.\n\t• पिन — D0-D8 इ. (GPIO maps).\n\nWemos D1 mini:\n\t• अगदी छोटा.\n\t• Breadboard-friendly.\n\t• Shields — LED, relays.\n\nESP32 DevKit:\n\t• जास्त समर्थ — जास्त प्रोजेक्ट.\n\t• किंचित मोठा.\n\nनिवड नियम:\n\t• Basic sensor/report — ESP8266.\n\t• Bluetooth/speaker/large — ESP32.\n\nसराव: तुमच्या खरेदीची यादी बनवा.",
      },
      {
        title: "पहिला WiFi प्रोग्राम",
content: "WiFi connect होतो का — पहिला program.\n\nकोड:\n\t#include <ESP8266WiFi.h>\n\tvoid setup() {\n\t  Serial.begin(115200);\n\t  WiFi.begin(\"SSID\", \"PASSWORD\");\n\t  while (WiFi.status() != WL_CONNECTED) {\n\t    delay(500);\n\t    Serial.print(\".\");\n\t  }\n\t  Serial.println(WiFi.localIP());\n\t}\n\tvoid loop() {\n\t  Serial.println(WiFi.status());\n\t  delay(10000);\n\t}\n\nचरण:\n\t• board — NodeMCU select.\n\t• SSID — तुमचा नेटवर्क.\n\t• Serial 115200.\n\nफरक:\n\t• ESP8266WiFi.h — 8266.\n\t• ESP32 — WiFi.h.\n\nसराव: IP मिळतो का — connect success बघा.",
      },
      {
        title: "आजचा सारांश",
        content: "IoT चे सहा मुद्दे:\n\n• IoT — साधनं इंटरनेटशी.\n• ESP8266 — WiFi कमी खर्च.\n• ESP32 — Bluetooth + जास्त शक्ती.\n• Arduino vs ESP — निवड प्रोजेक्टनुसार.\n• बोर्ड — NodeMCU, Wemos, DevKit.\n• पहिला program — WiFi.begin + IP.\n\nआजचे प्रॅक्टिस:\n\t०१. Rewarn ESP port install.\n\t०२. Blink चालवा.\n\t०३. WiFi एक्सटेंशन program.\n\t०४. GPIO pinout नकाशा.\n\nपुढील पाठ — WiFi basics.",
      },
    ],
    practiceQuestions: [
      "ESP8266 आणि ESP32 मध्ये काय फरक?",
      "Arduino vs ESP — कधी कोणते?",
      "WiFi.connect program मध्ये code कसा असतो?",
      "ESP board install कसे करायचे?",
    ],
    quiz: [
      { question: "ESP8266 ची मुख्य गोष्ट?", options: ["कमी खर्च WiFi", "Bluetooth औषध", "4G", "5V output"], correct: 0 },
      { question: "ESP32 मध्ये कोणते अतिरिक्त?", options: ["Bluetooth/BLE + 2 cores", "फक्त WiFi", "Ethernet", "Touch नाही"], correct: 0 },
      { question: "ESP logic voltage?", options: ["3.3V", "5V", "12V", "1.8V"], correct: 0 },
      { question: "WiFi library ESP32 साठी?", options: ["WiFi.h", "ESP8266WiFi.h", "Ethernet.h", "SD.h"], correct: 0 },
      { question: "पहिल्या program मध्ये IP कसे मिळते?", options: ["WiFi.localIP()", "IP()", "Serial IP", "जाहिरात"], correct: 0 },
    ],
    related: ["arduino-motor", "iot-wifi-basics", "arduino-basics"],
    prev: "arduino-motor",
    next: "iot-wifi-basics",
  },
  {
    slug: "iot-wifi-basics",
    categoryId: "electronics",
    title: "WiFi Basics",
    marathiTitle: "स्थानिक web server — ESP सह पेज, IP, HTTP requests, सुरक्षा मूलभूत",
    level: "advanced",
    minutes: 30,
    summary: "WiFi connect सखोल, स्थानिक IP वापर, ESP चा mini web server, फोनवरून पेज उघडणे, HTTP request आणि सुरक्षा मूलभूत.",
    sections: [
      {
        title: "WiFi connection — library",
content: "ESP कडे WiFi stack — फक्त include + begin.\n\nकोड:\n\t#include <ESP8266WiFi.h>\n\tconst char* ssid = \"ssid\";\n\tconst char* pass = \"pass\";\n\tvoid setup() {\n\t  Serial.begin(115200);\n\t  WiFi.mode(WIFI_STA);\n\t  WiFi.begin(ssid, pass);\n\t  while (WiFi.status() != WL_CONNECTED) {\n\t    delay(500);\n\t  }\n\t  Serial.println(WiFi.localIP());\n\t}\n\nचरण:\n\t• WiFi.mode(WIFI_STA) — station.\n\t• begin(ssid, pass).\n\t• Wait status.\n\nटीप:\n\t• connect fail — retry logic हवी.\n\t• Reconnect व्यवस्था.\n\nसराव: disconnected झाल्यावर reconnect logic लिहा.",
      },
      {
        title: "स्थानिक IP",
        content: "ESP ला router कडून IP मिळतो (DHCP).\n\nपरिणाम:\n\t• IP उदा. 192.168.1.50.\n\t• तो IP केवळ local network.\n\t• Outside (cloud) — port forward/Tunnel.\n\nस्थानिक वापर:\n\t• ब्राउझरमध्ये http://IP — पेज.\n\t• Home network — फोन/PC दुवा साधतो.\n\nआजचे फोकस:\n\t• Static IP setting.\n\t\tIPAddress ip(192,168,1,60);\n\t\tWiFi.config(ip, gw, sn);\n\t• DHCP वरील dependency कमी.\n\nसराव: ESP IP ब्राउझरमध्ये उघडा.",
      },
      {
        title: "Web server — simple",
content: "ESP mini server — HTTP response.\n\nभाग:\n\t#include <ESP8266WebServer.h>\n\tESP8266WebServer server(80);\n\nsetup:\n\tvoid setup() {\n\t  ...\n\t  server.on(\"/\", []{\n\t    server.send(200, \"text/html\", \"<h1>Moja ESP</h1>\");\n\t  });\n\t  server.begin();\n\t}\n\nloop:\n\tvoid loop() { server.handleClient(); }\n\nकाम:\n\t• browser → GET / → handler.\n\t• reply HTML.\n\nटीप:\n\t• Port 80.\n\t• handleClient() — loop मध्ये जरूर.\n\nसराव: /about रूट जोडून दुसरी पेज बनवा.",
      },
      {
        title: "फोनवरून पेज",
        content: "फोनवरून ESP पेज उघडणे — local network मध्ये.\n\nचरण:\n\t• फोन त्याच WiFi वर असावा.\n\t• ब्राउझर → http://192.168.1.60.\n\t• पेज दिसते.\n\nचला:\n\t• नेटवर्क tool — IP scan.\n\t• ESP IP नक्की मिळवा (Serial print).\n\t• Firebase नको — पहिली पायरी local.\n\nवापरकर्ता नोट:\n\t• Mobile data बंद ठेवा.\n\t• Same subnet — confirmed.\n\nसराव: फोन + laptop दोन्हीवरून पेज उघडा.",
      },
      {
        title: "सुरक्षा — password/HTTP",
        content: "हलके संरक्षण मूलभूत:\n\nBasic Auth:\n\t• Server कडून password मागते.\n\t• हे local network साठी पुरेसे.\n\nToken/session:\n\t• Header check — secret key.\n\t• password वापरा hardcode शिवाय — config.\n\nHTTPS:\n\t• Local HTTP — encryption नाही.\n\t• इंटरनेटवर — HTTPS/TLS आवश्यक.\n\t• TLS certificate setup — थोडे कठीण.\n\nटीप:\n\t• डिफॉल्ट password टाळा.\n\t• Public internet — NEVER कच्चा.\n\nसराव: Basic Auth एक साधी पेज वर लिहा.",
      },
      {
        title: "आजचा सारांश",
        content: "WiFi basics चे सहा मुद्दे:\n\n• Library — ESP8266WiFi.\n• IP — DHCP local address.\n• Server — ESP8266WebServer.\n• फोन — same network ताबा.\n• handleClient() — loop मध्ये.\n• सुरक्षा — Auth/TLS आवश्यकता.\n\nआजचे प्रॅक्टिस:\n\t०१. Connect program.\n\t०२. Basic home page.\n\t०३. दुसरी रूट पेज.\n\t०४. फोनवरून चेक.\n\nपुढील पाठ — DHT temperature monitoring.",
      },
    ],
    practiceQuestions: [
      "ESP8266WebServer library custom handler कसे नोंदणी होतो?",
      "local IP मध्ये फोनवरून access करण्यासाठी काय हवे?",
      "handleClient() का loop मध्ये?",
      "WiFi basic security साठी काय करायचे?",
    ],
    quiz: [
      { question: "Web server port default?", options: ["80", "443", "8080", "21"], correct: 0 },
      { question: "server.on(\"/\", ...) ने काय?", options: ["root handler", "IP change", "reset", "compile"], correct: 0 },
      { question: "loop मध्ये कोणता necessary?", options: ["server.handleClient()", "delayमोठा", "WiFi.reconnect", "Serial"], correct: 0 },
      { question: "फोन ESP पेज — कोणती स्थिती गरजेची?", options: ["same network", "internet", "Bluetooth", "no WiFi"], correct: 0 },
      { question: "Public internet — सुरक्षा काय हवे?", options: ["HTTPS/Auth", "काही नाही", "password शिवाय", "फक्त HTTP"], correct: 0 },
    ],
    related: ["iot-intro", "iot-temp-monitor", "iot-thingspeak"],
    prev: "iot-intro",
    next: "iot-temp-monitor",
  },
  {
    slug: "iot-temp-monitor",
    categoryId: "electronics",
    title: "IoT Temperature",
    marathiTitle: "DHT11 + ESP — तापमान/आर्द्रता वाचन, web मध्ये दाखवणे, ThingSpeak cloud",
    level: "advanced",
    minutes: 30,
    summary: "DHT11 sensor तापमान+आर्द्रता वाचणे, ESP सह web पेजवर दाखवणे, ThingSpeak cloud वर data upload आणि खर्च/क्षमतेचा अंदाज.",
    sections: [
      {
        title: "DHT11 — sensor ओळख",
        content: "DHT11 — low cost तापमान + आर्द्रता sensor.\n\nतपशील:\n\t• Temperature — 0-50°C (±2°C).\n\t• Humidity — 20-90% (±5%).\n\t• Digital single-wire protocol.\n\t• 4 pins (किंवा 3-पिन module).\n\nआदेश:\n\t• VCC → 3.3V/5V (ESP ला 3.3V).\n\t• Data pin → GPIO.\n\t• (Optional) — pullup resistor.\n\nमूलभूत:\n\t• DHT22 — अधिक अचूक, पण खर्च जास्त.\n\t• module — soldered, सोपी.\n\nसराव: DHT library (Adafruit_DHT) install करा.",
      },
      {
        title: "डेटा Web मध्ये",
content: "तापमान व आर्द्रता ESP server वर.\n\nकोड:\n\t#include <DHT.h>\n\t#define DHTPIN 4\n\t#define DHTTYPE DHT11\n\tDHT dht(DHTPIN, DHTTYPE);\n\nsetup:\n\tdht.begin();\n\nloop — वाचन:\n\tfloat t = dht.readTemperature();\n\tfloat h = dht.readHumidity();\n\nserver response:\n\tString html = \"<h1>\" + String(t) + \"C / \" + String(h) + \"%</h1>\";\n\tserver.send(200, \"text/html\", html);\n\nटीप:\n\t• read मध्ये delay — 2s पेक्षा जास्त.\n\t• NaN check — धडधडत असताना.\n\nसराव: पेज auto-refresh तासभर.",
      },
      {
        title: "ThingSpeak — cloud",
        content: "डेटा cloud वर ठेवणे — ThingSpeak (MathWorks).\n\nचरण:\n\t• channel तयार करा.\n\t• Write API key.\n\t• HTTP GET वर upload.\n\nकोड:\n\t#include <ESP8266HTTPClient.h>\n\thttp://api.thingspeak.com/update?api_key=...&field1=25.4\n\n        // HTTPClient begin/GET\n\nवैशिष्ट्य:\n\t• Fields — field1, field2...\n\t• Charts/ग्राफ free.\n\nटीप:\n\t• API key — secret ठेवा.\n\t• Rate — 15s आत मर्यादा.\n\nसराव: channel बनवा — field1 temperature मध्ये पाठवा.",
      },
      {
        title: "चार्ट वर Data",
        content: "ThingSpeak — history आणि charts.\n\nग्राफ:\n\t• Visual: fields तापमान time series.\n\t• Mobile अॅप — updates.\n\t• डेटा एकत्र — field plots.\n\nडाउनलोड/वापर:\n\t• CSV export.\n\t• MATLAB/MathWorks analysis.\n\nकन्स्टंट monitoring:\n\t• 15s interval minimum.\n\t• battery/energy — कमी update.\n\nसराव: ग्राफ वर दोन राज्ये/दिवसांचा data निरीक्षण.",
      },
      {
        title: "खर्च व मर्यादा",
        content: "IoT प्रोजेक्टचा खर्च व मर्यादा:\n\nखर्च:\n\t• ESP — $\n\t• DHT — pennies.\n\t• WiFi/router — आधीपासून.\n\nमर्यादा:\n\t• WiFi range — राउटर जवळ.\n\t• Power — USB adapter.\n\t• Cloud limits — API rate.\n\nऊर्जा:\n\t• Always-on — ~70mA+.\n\t• Sleep modes — बॅटरी आयुष्य.\n\t• ESP deep sleep (wake timer).\n\nसराव: तुमच्या प्रोजेक्टचा estimated power-budget लिहा.",
      },
      {
        title: "आजचा सारांश",
        content: "Temp monitor चे सहा मुद्दे:\n\n• DHT11 — temp + humidity.\n• Adafruit_DHT — library.\n• Web page — server response.\n• ThingSpeak — cloud channel.\n• Charts/history — visual.\n• खर्च/ऊर्जा — power budget.\n\nआजचे प्रॅक्टिस:\n\t०१. DHT readings serial.\n\t०२. Web page — temp.\n\t०३. ThingSpeak field1 upload.\n\t०४. Chart look-alike वन weekly.\n\nपुढील पाठ — smart relay control.",
      },
    ],
    practiceQuestions: [
      "DHT11 वाचनात delay का लागतो?",
      "ThingSpeak channel मध्ये data कसा जातो?",
      "API rate limit काय?",
      "बॅटरी आयुष्यासाठी कोणती पद्धती?",
    ],
    quiz: [
      { question: "DHT11 मोजते?", options: ["तापमान + आर्द्रता", "pressure", "light", "wind"], correct: 0 },
      { question: "ThingSpeak data upload म्हणजे काय?", options: ["HTTP update + api_key", "Bluetooth", "SD card", "serial"], correct: 0 },
      { question: "web page तर temp कसे?", options: ["server.send HTML", "LCD", "print", "LED"], correct: 0 },
      { question: "API rate उदा. किती?", options: ["15s एक app update", "प्रतिसेकंद", "प्रतिमिनिट 100", "दिवसाचे 1"], correct: 0 },
      { question: "बॅटरी साठी कोणते mode?", options: ["deep sleep", "WiFi always", "server अधिक", "bright LED"], correct: 0 },
    ],
    related: ["iot-wifi-basics", "iot-thingspeak", "arduino-display"],
    prev: "iot-wifi-basics",
    next: "iot-smart-relay",
  },
  {
    slug: "iot-smart-relay",
    categoryId: "electronics",
    title: "Smart Relay",
    marathiTitle: "घरातील दिवा फोनवरून — relay + ESP, web control form, safety",
    level: "advanced",
    minutes: 30,
    summary: "Relay + ESP सह घरचा दिवा नियंत्रण, web form/POST, साधी security, fail-safe design आणि प्रोजेक्ट विस्तार विचार.",
    sections: [
      {
        title: "घरातील दिव्याचे नियंत्रण",
        content: "दिवा/उपकरण इंटरनेटद्वारे ON/OFF.\n\nरचना:\n\t• ESP ← WiFi → phone/browser.\n\t• Relay module — ESP GPIO मधून.\n\t• Relay — AC load संपर्क.\n\nकाळजी:\n\t• AC मेन्स — engineering-safe circuit नको नाही तर.\n\t• Relay contact rating — 10A सुरक्षित.\n\nसुरक्षा नियम:\n\t• नव्याने सर्किट नाही — shielded module वापरा.\n\t• कमी power load सोबत प्रयोग.\n\t• Fuse + insulation.\n\nसराव: फक्त थोडा load (LED) साठी relay ब्लास्ट करा.",
      },
      {
        title: "Relay module + ESP",
        content: "Module — optocoupled safer.\n\nजोडणी:\n\t• VCC → 5V (module logic 5V हवे असल्यास; काही 3.3V).\n\t• GND → common.\n\t• IN → GPIO (उदा. D1).\n\nचेतावणी:\n\t• Module — IN HIGH = relay ON (मॉड्यूलनुसार).\n\t• Active LOW — मॉड्यूलनुसार.\n\t\tHIGH → relay OFF, LOW → relay ON (कधीकधी).\n\nतपासा:\n\t• data enable jumper — पोलरिटी.\n\t• Test — LED bulb पहिले.\n\nसराव: module toggle — नियमित LED सोबत वाचा.",
      },
      {
        title: "Web control — form",
content: "पेज वर button — toggle दिवा.\n\nHTML:\n\t<a href=\"/on\">ON</a>\n\t<a href=\"/off\">OFF</a>\n\nServer:\n\tserver.on(\"/on\", [](){\n\t  digitalWrite(relay, HIGH);\n\t  server.send(200, \"text/html\", page(\"ON\"));\n\t});\n\tserver.on(\"/off\", [](){\n\t  digitalWrite(relay, LOW);\n\t  server.send(200, \"text/html\", page(\"OFF\"));\n\t});\n\nआहेत:\n\t• GET रूट बदलते.\n\t• Status दाखवा.\n\t• Form POST — better security.\n\nसराव: status + टॉगल एकत्र पेज बनवा.",
      },
      {
        title: "सुरक्षा — प्रमाणीकरण",
        content: "फक्त तुम्हीच नियंत्रण करू शकता.\n\nBasic auth:\n\t• server.authenticate(user, pass);\n\t• हलका — local साठी.\n\nToken:\n\t• Secret header पाठवतो.\n\nकठीण बाबी:\n\t• Public internet — TLS mand.\n\t• VPN/Tunnel — दुरून प्रवेश.\n\t• Password hard-code → env — नको.\n\nनियम:\n\t• बदलता password.\n\t• Logs — control actions.\n\nसराव: UI वर field सोबत authentication चा मूलभूत फॉर्म.",
      },
      {
        title: "Fail-safe / विस्तार",
        content: "अनपेक्षित त्रुटीतही सुरक्षा.\n\nFail-safe:\n\t• Default — डिव्हाइस OFF.\n\t• WiFi गेली — relay स्थिर ठेवा.\n\t• Watchdog — auto reset.\n\t• Manual switch — बायपास.\n\nविस्तार:\n\t• Timer/schedule — task scheduling.\n\t• Multiple relays — घरांमध्ये.\n\t• Motion — auto off.\n\t• दूरवर — Tunnel/cloud.\n\nसराव: आपल्या home automation चा fail-safe checklist लिहा.",
      },
      {
        title: "आजचा सारांश",
        content: "Smart relay चे सहा मुद्दे:\n\n• गरज — दूर नियंत्रण.\n• Relay module — GPIO सोबत.\n• Web form — /on /off routes.\n• सुरक्षा — auth/TLS.\n• Fail-safe — default off.\n• विस्तार — schedule, multiple.\n\nआजचे प्रॅक्टिस:\n\t०१. Led relay toggle.\n\t०२. Web button control.\n\t०३. Basic auth.\n\t०४. Fail-safe default.\n\nपुढील पाठ — ThingSpeak: cloud data logging.",
      },
    ],
    practiceQuestions: [
      "Relay module सह ESP कसे जोडतात?",
      "Web form रूट /on कसे तयारासाठी?",
      "AC load सह काय विशेष काळजी?",
      "WiFi गेल्यावर output काय ठेवायचे?",
    ],
    quiz: [
      { question: "ESP relay नियंत्रणासाठी?", options: ["GPIO + relay IN", "थेट AC", "ThingSpeak request", "Bluetooth नाही"], correct: 0 },
      { question: "Web वर control route उदा.", options: ["server.on(\"/on\")", "lcd.print", "delay", "tone"], correct: 0 },
      { question: "AC सह काय हवे?", options: ["हे safe module + fuse", "थेट जोडा", "काही नाही", "switch"], correct: 0 },
      { question: "Fail-safe मूलभूत?", options: ["default output OFF", "WiFi वाढवा", "relay active", "जास्त power"], correct: 0 },
      { question: "दूरवर control साठी काय?", options: ["Tunnel/TLS", "फक्त DHCP", "delay जास्त", "नाही"], correct: 0 },
    ],
    related: ["iot-temp-monitor", "electronics-switch-relay", "iot-intro"],
    prev: "iot-temp-monitor",
    next: "iot-thingspeak",
  },
  {
    slug: "iot-thingspeak",
    categoryId: "electronics",
    title: "ThingSpeak Cloud",
    marathiTitle: "ThingSpeak full — channel setup, write API, HTTP upload, graphs, mobile अॅप",
    level: "advanced",
    minutes: 35,
    summary: "ThingSpeak channel निर्माण, write API key, HTTP GET upload, मल्टी-field data, graphs/charts वाचणे आणि mobile अॅप/channel नियम.",
    sections: [
      {
        title: "ThingSpeak म्हणजे काय",
        content: "MathWorks चा free cloud — IoT data storage/chart.\n\nसेटअप:\n\t• Channel — एक विषय.\n\t• Field1..Field8 — variables.\n\t• API keys — write/read.\n\nकाम:\n\t• Devices HTTP upload.\n\t• Visualizations ग्राफ.\n\t• Downloads CSV.\n\nफायदे:\n\t• free tier शिकण्यासाठी.\n\t• MATLAB integration.\n\t• Browser/mobile access.\n\nटीप:\n\t• Keys गुप्त — public read न करा अनावश्यक.\n\nसराव: हब — data model तयार करणे.",
      },
      {
        title: "चॅनेल तयार करणे",
        content: "Cloud वर channel script:\n\nचरण:\n\t• Login — ThingSpeak.com.\n\t• Channels → New Channel.\n\t• Name, fields.\n\t• Save → channel ID + API keys.\n\nउदा. channel:\n\t• field1 — temperature.\n\t• field2 — humidity.\n\t• Write API key — पाठवण्यासाठी.\n\nनोंद:\n\t• प्रत्येक — separate keys.\n\t• Public/private — निवडा.\n\nसराव: तुमचे चॅनेल बनवा ज्यात 2 fields असतील.",
      },
      {
        title: "API write — HTTP upload",
content: "ESP कडून data पाठवणे.\n\nकोड:\n\t#include <ESP8266HTTPClient.h>\n\tString url = \"http://api.thingspeak.com/update\";\n\turl += \"?api_key=XXXXXXXX\";\n\turl += \"&field1=\" + String(t);\n\turl += \"&field2=\" + String(h);\n\tHTTPClient http;\n\thttp.begin(url);\n\tint code = http.GET();\n\tSerial.println(code);          // 200 = OK\n\nचरण:\n\t• api_key — write key.\n\t• field1.. — data.\n\t• GET विधी साधा.\n\nटीप:\n\t• Rate — 15s per update maximum.\n\t• Code तपासा — 200.\n\nसराव: रीअलटाइम 2 fields upload करा.",
      },
      {
        title: "ग्राफ/फील्ड्स वाचणे",
        content: "Cloud वर data वाचा व visual करा.\n\nग्राफ:\n\t• Channel page — graphs.\n\t• Time range — today/week.\n\nRead API:\n\t• Read keys — external access.\n\t• Script/download — प्रोसेसिंग.\n\nअंतिम:\n\t• Widgets — dashboard.\n\t• Alerts — Webhooks (pay plans).\n\nटीप:\n\t• CSV export — आन्तरिक analysis.\n\t• Mobile अॅप — जलद.\n\nसराव: या आठवड्याचा तुमचा data graph बघा.",
      },
      {
        title: "Mobile अॅप",
        content: "फोनवरून live data.\n\nThingSpeak app:\n\t• Channels वरील viewer.\n\t• अॅप — MathWorks.\n\nCustom:\n\t• Your own web dashboard.\n\t• React/Vue + API.\n\nचेतावणी:\n\t• Read key फक्त dashboard कडे.\n\t• Write — नाही त्यात.\n\nसराव: अॅप install करून channel add करा.",
      },
      {
        title: "आजचा सारांश",
        content: "ThingSpeak चे सहा मुद्दे:\n\n• Free cloud — channels.\n• Fields — data structure.\n• Write API — HTTP GET upload.\n• 15s rate limit.\n• Graphs/CSV — विश्लेषण.\n• Mobile — अॅप/dashboard.\n\nआजचे प्रॅक्टिस:\n\t०१. Channel बनवा.\n\t०२. Write test (browser URL).\n\t०३. ESP upload २ fields.\n\t०४. ग्राफ निरीक्षण.\n\nपाठ संपला — आता घरगुती project सह अभ्यास करा.",
      },
    ],
    practiceQuestions: [
      "ThingSpeak channel data कसे बनते?",
      "HTTP upload मध्ये कोणती parameters?",
      "Rate limit का महत्त्वाचे?",
      "मोबाइल अॅपमध्ये write key का नको?",
    ],
    quiz: [
      { question: "ThingSpeak channel मध्ये max fields?", options: ["8", "2", "16", "1"], correct: 0 },
      { question: "Upload ची URL कोणती?", options: ["http://api.thingspeak.com/update", "http://localhost", "ftp://", "https://api.io"], correct: 0 },
      { question: "Upload success code?", options: ["200", "404", "500", "302"], correct: 0 },
      { question: "Rate limit approx?", options: ["15s per update", "1ms", "दिवस 1", "मिनिट 100"], correct: 0 },
      { question: "Field data कुठे स्थान होते?", options: ["Field1..Field8", "Bluetooth", "SD", "RAM only"], correct: 0 },
    ],
    related: ["iot-temp-monitor", "iot-wifi-basics", "arduino-sensor"],
    prev: "iot-smart-relay",
    next: "",
  },
];