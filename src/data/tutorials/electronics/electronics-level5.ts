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
        title: "का शिकावे? IoT म्हणजे काय — ESP8266/ESP32, Arduino vs ESP, NodeMCU पहिला WiFi प्रोग्राम चे फायदे आणि महत्त्व",
        content: "✓ फायदे: दूरून वाचन/नियंत्रण, data इतिहास trends, स्वयंचलित action.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "IoT म्हणजे काय",
        content: "IoT — Internet of Things म्हणजे साधनं इंटरनेटशी जोडणे. सेन्सर data गोळा करतात, नेटवर्क (WiFi/fone) द्वारे पाठवतात, आणि दूरून नियंत्रण/कृती करता येते. Smart home (दिवे, fans), monitoring (तापमान, आर्द्रता), agriculture (soil/weather) आणि industrial (machine status) यांमध्ये वापरले जाते. फायदे: दूरून वाचन/नियंत्रण, data इतिहास trends, स्वयंचलित action. सुरुवात सोपी — button on board → phone connection.",
      },
      {
        title: "ESP8266 आणि ESP32 — कोणते कधी",
        content: "WiFi दोन लोकप्रिय chips आहेत. ESP8266 — कमी खर्च, WiFi + TCP/IP, एक core, 80/160MHz, GPIO कमी, analog 1; बोर्ड — NodeMCU, Wemos D1. ESP32 — WiFi + Bluetooth(BLE), 2 cores, 240MHz, जास्त pins, analog, touch, DAC; नवीन प्रोजेक्ट साठी शिफारस. दोन्ही 3.3V logic — 5V नको. Arduino vs ESP: Arduino सोपा, huge ecosystem, no WiFi (शिवाय shield), 5V logic, real-time tasks उत्तम; ESP WiFi/network योग्य, 3.3V, Arduino IDE ने program होते, MQTT/HTTP सहज. निवड: pure sensor/logic → Arduino, cloud/अॅप नियंत्रण → ESP, दोन्ही → communication.",
        code: `#include <ESP8266WiFi.h>
const char* ssid = "SSID";
const char* pass = "PASSWORD";
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  Serial.println(WiFi.localIP());
}`,
        codeLanguage: "cpp",
        output: `192.168.1.50`,
      },
      {
        title: "बोर्ड निवड — NodeMCU, Wemos, ESP32 DevKit",
        content: "NodeMCU (ESP8266): वापरकर्त्यांसाठी सोपा, USB programming, पिन D0-D8 (GPIO maps). Wemos D1 mini: अगदी छोटा, breadboard-friendly, shields — LED, relays. ESP32 DevKit: जास्त समर्थ, जास्त प्रोजेक्ट, किंचित मोठा. निवड नियम: basic sensor/report → ESP8266, bluetooth/speaker/large → ESP32. प्रोग्रामिंग: Arduino IDE मध्ये board manager install करा, ESP32 साठी esp32 package. Blink चालवून port verify करा.",
      },
      {
        title: "पहिला WiFi प्रोग्राम — संक्षिप्त सारांश",
        content: "WiFi begin + wait status + print IP हाच मूळ pattern आहे. ESP8266WiFi.h (8266) किंवा WiFi.h (ESP32) include करा. board select करा (NodeMCU), SSID/password टाइप करा, serial 115200 set करा. IP मिळतो का — connect success बघा. आजचे practice: ESP port install, Blink चालवा, WiFi program, GPIO pinout नकाशा.",
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
    project: "web-server-esp32",
    title: "WiFi Basics",
    marathiTitle: "स्थानिक web server — ESP सह पेज, IP, HTTP requests, सुरक्षा मूलभूत",
    level: "advanced",
    minutes: 30,
    summary: "WiFi connect सखोल, स्थानिक IP वापर, ESP चा mini web server, फोनवरून पेज उघडणे, HTTP request आणि सुरक्षा मूलभूत.",
    sections: [
      {
        title: "स्थानिक web server — ESP सह पेज, IP, HTTP requests, सुरक्षा मूलभूत म्हणजे काय?",
        content: "WiFi connect सखोल, स्थानिक IP वापर, ESP चा mini web server, फोनवरून पेज उघडणे, HTTP request आणि सुरक्षा मूलभूत.\nESP कडे WiFi stack आहे — फक्त include + begin.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? स्थानिक web server — ESP सह पेज, IP, HTTP requests, सुरक्षा मूलभूत चे फायदे आणि महत्त्व",
        content: "\"स्थानिक web server — ESP सह पेज, IP, HTTP requests, सुरक्षा मूलभूत\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ TLS certificate setup थोडे कठीण.\n✗ डिफॉल्ट password टाळा, public internet वर NEVER कच्चा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "WiFi connection — library + स्थानिक IP",
        content: "ESP कडे WiFi stack आहे — फक्त include + begin. WiFi.mode(WIFI_STA) स्थापित करा, WiFi.begin(ssid, pass) ने connect करा, status wait करा. IP उदा. 192.168.1.50 — हे केवळ local network. Static IP: IPAddress ip(192,168,1,60); WiFi.config(ip, gw, sn); — DHCP dependency कमी. connect fail असेल तर retry logic + reconnect व्यवस्था लिहा. ब्राउझरमध्ये http://IP टाइप करून पेज उघडता येते.",
        code: `#include <ESP8266WiFi.h>
const char* ssid = "ssid";
const char* pass = "pass";
void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  Serial.println(WiFi.localIP());
}`,
        codeLanguage: "cpp",
        output: `192.168.1.50`,
      },
      {
        title: "स्थानिक web server — ESP8266WebServer",
        content: "ESP mini server — HTTP response देतो. ESP8266WebServer.h include करा, server object port 80 वर तयार करा. setup() मध्ये server.on(\"/\", []{ server.send(200, \"text/html\", \"<h1>Moja ESP</h1>\"); }); आणि server.begin() लिहा. loop() मध्ये server.handleClient() जरूर — नाहीतर request handle होत नाहीत. /about रूट जोडून दुसरी page बनवा. port 80 default आहे.",
        code: `#include <ESP8266WebServer.h>
ESP8266WebServer server(80);
void setup() {
  server.on("/", []{
    server.send(200, "text/html", "<h1>Moja ESP</h1>");
  });
  server.begin();
}
void loop() { server.handleClient(); }`,
        codeLanguage: "cpp",
      },
      {
        title: "फोनवरून पेज उघडणे",
        content: "फोन त्याच WiFi वर असावा (same network). ब्राउझर → http://ESP_IP. Serial print ने IP verify करा. mobile data बंद ठेवा — same subnet confirmed. फोन + laptop दोन्हीवरून पेज उघडून तपासा. network tool ने IP scan करता येते.",
      },
      {
        title: "सुरक्षा — auth आणि HTTPS",
        content: "Basic Auth: server.authenticate(user, pass) — local network साठी पुरेसे. Token/session: header check secret key, password hardcode शिवाय config मध्ये ठेवा. Local HTTP मध्ये encryption नाही; public internet वर HTTPS/TLS आवश्यक. TLS certificate setup थोडे कठीण. डिफॉल्ट password टाळा, public internet वर NEVER कच्चा. handleClient() loop मध्ये नेहमी ठेवा.",
      },
      {
        title: "आजचा सारांश",
        content: "WiFi basics: library — ESP8266WiFi; IP — DHCP local address; server — ESP8266WebServer; फोन — same network ताबा; handleClient() — loop मध्ये; सुरक्षा — Auth/TLS आवश्यकता. Practice: connect program, basic home page, दुसरी रूट पेज, फोनवरून चेक.",
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
        title: "DHT11 + ESP — तापमान/आर्द्रता वाचन, web मध्ये दाखवणे, ThingSpeak cloud म्हणजे काय?",
        content: "DHT11 sensor तापमान+आर्द्रता वाचणे, ESP सह web पेजवर दाखवणे, ThingSpeak cloud वर data upload आणि खर्च/क्षमतेचा अंदाज.\nDHT11 — low cost तापमान + आर्द्रता sensor.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? DHT11 + ESP — तापमान/आर्द्रता वाचन, web मध्ये दाखवणे, ThingSpeak cloud चे फायदे आणि महत्त्व",
        content: "\"DHT11 + ESP — तापमान/आर्द्रता वाचन, web मध्ये दाखवणे, ThingSpeak cloud\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "DHT11 sensor ओळख",
        content: "DHT11 — low cost तापमान + आर्द्रता sensor. Temperature 0-50°C (±2°C), Humidity 20-90% (±5%), digital single-wire protocol, 4 pins (किंवा 3-pin module). VCC → 3.3V/5V (ESP ला 3.3V), Data pin → GPIO, optional pullup resistor. DHT22 — अधिक अचूक पण खर्च जास्त; module — soldered, सोपी. Adafruit_DHT library install करा.",
      },
      {
        title: "DHT data web page वर दाखवणे",
        content: "DHT.h include, DHTPIN 4, DHTTYPE DHT11 set करा. dht.begin() setup मध्ये. loop मध्ये: float t = dht.readTemperature(); float h = dht.readHumidity();. server response: String html = \"<h1>\" + String(t) + \"C / \" + String(h) + \"%</h1>\"; server.send(200, \"text/html\", html);. read मध्ये delay — 2s पेक्षा जास्त ठेवा. NaN check करा. page auto-refresh तासभर.",
        code: `#include <DHT.h>
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);
void setup() { dht.begin(); }
void loop() {
  float t = dht.readTemperature();
  float h = dht.readHumidity();
  String html = "<h1>" + String(t) + "C / " + String(h) + "%</h1>";
  server.send(200, "text/html", html);
}`,
        codeLanguage: "cpp",
      },
      {
        title: "ThingSpeak cloud upload",
        content: "ThingSpeak (MathWorks) — free cloud IoT data storage/chart. channel तयार करा, Write API key मिळवा, HTTP GET वर upload. channel मध्ये field1 — temperature, field2 — humidity. ESP कडून: #include <ESP8266HTTPClient.h>, URL http://api.thingspeak.com/update?api_key=...&field1=25.4, HTTPClient begin/GET. API key secret ठेवा. Rate — 15s आत मर्यादा. code 200 म्हणजे success.",
        code: `#include <ESP8266HTTPClient.h>
String url = "http://api.thingspeak.com/update";
url += "?api_key=XXXXXXXX";
url += "&field1=" + String(t);
url += "&field2=" + String(h);
HTTPClient http;
http.begin(url);
int code = http.GET();
Serial.println(code);`,
        codeLanguage: "cpp",
        output: `200`,
      },
      {
        title: "ग्राफ, मर्यादा आणि ऊर्जा",
        content: "ThingSpeak वर charts/ग्राफ free; time range today/week निवडता येते. CSV export, MATLAB/MathWorks analysis. Mobile अॅप — MathWorks चा viewer, custom dashboard React/Vue + API. 15s interval minimum; battery/energy कमी update उत्तम. Always-on ~70mA+; ESP deep sleep (wake timer) ने बॅटरी आयुष्य वाढवा. WiFi range, cloud limits, power budget — सर्व विचारात घ्या.",
      },
      {
        title: "आजचा सारांश",
        content: "DHT11 — temp + humidity; Adafruit_DHT library; Web page — server response; ThingSpeak — cloud channel; Charts/history — visual; खर्च/ऊर्जा — power budget. Practice: DHT readings serial, web page temp, ThingSpeak field1 upload, chart weekly.",
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
        title: "घरातील दिवा फोनवरून — relay + ESP, web control form, safety म्हणजे काय?",
        content: "Relay + ESP सह घरचा दिवा नियंत्रण, web form/POST, साधी security, fail-safe design आणि प्रोजेक्ट विस्तार विचार.\nरचना: ESP ← WiFi → phone/browser; Relay module — ESP GPIO मधून; Relay — AC load संपर्क.\nहा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.",
      },
      {
        title: "का शिकावे? घरातील दिवा फोनवरून — relay + ESP, web control form, safety चे फायदे आणि महत्त्व",
        content: "✓ गरज — दूर नियंत्रण; Relay module — GPIO सोबत; Web form — /on /off routes; सुरक्षा — auth/TLS; Fail-safe — default off; विस्तार — schedule, multiple.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.\n✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.\n✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.\n✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "दिवा/उपकरण इंटरनेटद्वारे ON/OFF",
        content: "रचना: ESP ← WiFi → phone/browser; Relay module — ESP GPIO मधून; Relay — AC load संपर्क. AC मेन्स — engineering-safe circuit नको नाही तर. Relay contact rating — 10A सुरक्षित. सुरक्षा: नव्याने सर्किट नाही, shielded module वापरा, कमी power load सोबत प्रयोग, fuse + insulation. फक्त थोडा load (LED) साठी relay ब्लास्ट करून सुरू करा.",
      },
      {
        title: "Relay module + ESP जोडणी",
        content: "Optocoupled module सुरक्षित. जोडणी: VCC → 5V (module logic 5V हवे असल्यास; काही 3.3V), GND → common, IN → GPIO (उदा. D1). चेतावणी: IN HIGH = relay ON (मॉड्यूलनुसार); कधीकधी Active LOW — HIGH → OFF, LOW → ON. data enable jumper ने polarity तपासा. LED bulb पहिले test करा.",
      },
      {
        title: "Web control — form POST",
        content: "पेज वर ON/OFF links: <a href=\"/on\">ON</a>, <a href=\"/off\">OFF</a>. Server routes: server.on(\"/on\", [](){ digitalWrite(relay, HIGH); server.send(200, \"text/html\", page(\"ON\")); }); similarly /off. GET routes बदलते; status दाखवा. Form POST — better security. status + toggle एकत्र page बनवा.",
        code: `server.on("/on", [](){
  digitalWrite(relay, HIGH);
  server.send(200, "text/html", page("ON"));
});
server.on("/off", [](){
  digitalWrite(relay, LOW);
  server.send(200, "text/html", page("OFF"));
});`,
        codeLanguage: "cpp",
      },
      {
        title: "सुरक्षा — auth आणि fail-safe",
        content: "Basic auth: server.authenticate(user, pass) — local साठी. Token: secret header. Public internet — TLS mand. VPN/Tunnel — दूरून प्रवेश. Password hardcode → env. Fail-safe: default OFF, WiFi गेली — relay स्थिर, Watchdog — auto reset, Manual switch — बायपास. विस्तार: timer/schedule, multiple relays, motion auto off, tunnel/cloud. बदलता password, logs ठेवा.",
      },
      {
        title: "आजचा सारांश",
        content: "गरज — दूर नियंत्रण; Relay module — GPIO सोबत; Web form — /on /off routes; सुरक्षा — auth/TLS; Fail-safe — default off; विस्तार — schedule, multiple. Practice: LED relay toggle, web button control, basic auth, fail-safe default.",
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
        title: "का शिकावे? ThingSpeak full — channel setup, write API, HTTP upload, graphs, mobile अॅप चे फायदे आणि महत्त्व",
        content: "\"ThingSpeak full — channel setup, write API, HTTP upload, graphs, mobile अॅप\" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.\nहे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Keys गुप्त — public read न करा अनावश्यक.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },

      {
        title: "ThingSpeak म्हणजे काय",
        content: "MathWorks चा free cloud — IoT data storage/chart. Channel — एक विषय; Field1..Field8 — variables; API keys — write/read. Devices HTTP upload, Visualizations ग्राफ, Downloads CSV. Free tier शिकण्यासाठी, MATLAB integration, Browser/mobile access. Keys गुप्त — public read न करा अनावश्यक.",
      },
      {
        title: "चॅनेल तयार करणे + API write",
        content: "ThingSpeak.com login → Channels → New Channel → Name, fields → Save → channel ID + API keys. उदा. field1 — temperature, field2 — humidity; Write API key पाठवण्यासाठी. प्रत्येक channel separate keys; public/private निवडा. ESP कडून: #include <ESP8266HTTPClient.h>, URL http://api.thingspeak.com/update?api_key=...&field1=25.4, HTTPClient begin/GET. Rate — 15s per update maximum; code 200 म्हणजे success.",
        code: `#include <ESP8266HTTPClient.h>
String url = "http://api.thingspeak.com/update";
url += "?api_key=XXXXXXXX";
url += "&field1=" + String(t);
url += "&field2=" + String(h);
HTTPClient http;
http.begin(url);
int code = http.GET();
Serial.println(code);`,
        codeLanguage: "cpp",
        output: `200`,
      },
      {
        title: "ग्राफ, widgets आणि mobile",
        content: "Channel page वर graphs — time range today/week. Read keys ने external access, script/download प्रोसेसिंग. Widgets — dashboard; Alerts — Webhooks (pay plans). CSV export — आन्तरिक analysis. ThingSpeak mobile app — MathWorks चा viewer; custom dashboard React/Vue + API. Read key फक्त dashboard कडे; write key नाही त्यात. अॅप install करून channel add करा.",
      },
      {
        title: "आजचा सारांश",
        content: "Free cloud — channels; Fields — data structure; Write API — HTTP GET upload; 15s rate limit; Graphs/CSV — विश्लेषण; Mobile — अॅप/dashboard. Practice: channel बनवा, Write test (browser URL), ESP upload २ fields, graph निरीक्षण. पाठ संपला — आता घरगुती project सह अभ्यास करा.",
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