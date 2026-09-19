import type { Tutorial } from "@/data/tutorials";

// === ELECTRONICS · LEVEL 6 — ESP8266 / Modern IoT ===
// iot-thingspeak → esp8266-intro → esp-mqtt → esp-telegram → esp-home-automation
// (esp-weather-station) → electronics-multimeter (electronics-advanced.ts)

export const espIot: Tutorial[] = [
  {
    slug: "esp8266-intro",
    categoryId: "electronics",
    title: "ESP8266 / NodeMCU Intro",
    marathiTitle: "ESP8266 NodeMCU — WiFi vs Arduino, first blink, uploading",
    level: "intermediate",
    minutes: 35,
    summary: "ESP8266/NodeMCU म्हणजे काय, Arduino सह तुलना, board setup (Arduino IDE), WiFi connect आणि पहिला blink/WiFi प्रोग्राम.",
    sections: [
      {
        title: "ESP8266 NodeMCU — WiFi vs Arduino, first blink, uploading म्हणजे काय?",
        content: "NodeMCU हा ESP8266 chip असलेला development board आहे — त्यात WiFi अंगभूत आहे, म्हणजेच त्याला internet जोडता येते.\nArduino सोबतची सिंटॅक्स मुळे शिकणे सोपे, पण power 3.3V आणि GPIO संख्या वेगळी.\nहा धडा board परिचय, Arduino IDE setup, WiFi connect आणि साधा blink प्रोग्राम करून देतो.",
      },
      {
        title: "का शिकावे? ESP8266 NodeMCU — WiFi vs Arduino, first blink, uploading चे फायदे आणि महत्त्व",
        content: "IoT ची जादू WiFi वर अवलंबून आहे — sensor वाचून data cloud/तोंडाला पाठवणे, smartphone वरून नियंत्रण, हे सगळे ESP नेच शक्य होते.\nESP8266 स्वस्त आणि सर्वत्र उपलब्ध, त्यामुळे तुमचे प्रोजेक्ट real IoT मध्ये जाऊ शकतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ 5V ला powered — NodeMCU 3.3V (VIN म्हणजे 5V-regulator पण GPIO 3.3V); sensors काळजीपूर्वक.\n✗ Wrong board select — \"NodeMCU 1.0 (ESP-12E)\" निवडा; port ठीक हवे.\n✗ WiFi.begin ला delay/check न करणे — status != WL_CONNECTED तर चालत नाही.\n✗ Baud 115200 — serial monitor वर तेच ठेवा; 9600 नाही.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Arduino IDE setup",
        content: "File → Preferences → Additional Boards Manager URLs मध्ये https://arduino.esp8266.com/stable/package_esp8266com_index.json घाला. Boards Manager मध्ये \"esp8266\" install करा. Tools → Board → NodeMCU 1.0 (ESP-12E). हे एकदाच setup, मग code upload सोपे.",
        code: `// Preferences → Boards Manager URL
// https://arduino.esp8266.com/stable/package_esp8266com_index.json
// tools → Board → NodeMCU 1.0 (ESP-12E)`,
        codeLanguage: "cpp",
        output: `// एकदा सेटअप, मग सगळे ESP प्रोजेक्ट्स
// याच Arduino IDE वरच upload होतात`,
      },
      {
        title: "Blink + WiFi test",
        content: "सर्वात सोपा: onboard LED (pin D4/LED_BUILTIN). आणि WiFi connect — Serial वर status दाखवा. WiFi library: ESP8266WiFi.h. setup: WiFi.begin(ssid, pass); ते ही 30s वेट करा.",
        code: `#include <ESP8266WiFi.h>
const char* ssid = "YourWiFi";
const char* pass = "password";
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.print("IP: "); Serial.println(WiFi.localIP());
}
void loop() {
  digitalWrite(LED_BUILTIN, HIGH); delay(500);
  digitalWrite(LED_BUILTIN, LOW); delay(500);
}`,
        codeLanguage: "cpp",
        output: `.....IP: 192.168.1.42
// ब्लिंकिंग LED + WiFi तयार`,
      },
      {
        title: "सारांश — ESP8266",
        content: "NodeMCU = ESP8266 + WiFi + Arduino सिंटॅक्स. Setup: Boards Manager + board select. WiFi: WiFi.begin, localIP(). 3.3V GPIO. पुढे: MQTT — lightweight IoT messaging protocol (esp-mqtt).",
      },
    ],
    practiceQuestions: [
      "ESP8266 वर Arduino पेक्षा वेगळे काय?",
      "Boards Manager URL कोठे घालावा?",
      "WiFi.localIP() कशासाठी?",
      "GPIO safety — 5V vs 3.3V कसा ठेवता?",
    ],
    quiz: [
      { question: "NodeMCU चा chip कोणता?", options: ["ESP8266", "ATmega328", "Raspberry", "STM32"], correct: 0 },
      { question: "WiFi library?", options: ["ESP8266WiFi.h", "LiquidCrystal", "Servo.h", "EEPROM.h"], correct: 0 },
      { question: "WiFi.begin नंतर काय check करता?", options: ["status == WL_CONNECTED", "Serial", "loop", "pinMode"], correct: 0 },
      { question: "NodeMCU GPIO voltage?", options: ["3.3V", "5V", "12V", "1.8V"], correct: 0 },
      { question: "Serial monitor baud?", options: ["115200", "9600", "4800", "300"], correct: 0 },
    ],
    related: ["iot-wifi-basics", "iot-intro", "arduino-basics"],
    prev: "iot-thingspeak",
    next: "esp-mqtt",
  },
  {
    slug: "esp-mqtt",
    categoryId: "electronics",
    title: "MQTT Protocol Basics",
    marathiTitle: "MQTT — pub/sub, broker, DHT11 data publish",
    level: "intermediate",
    minutes: 40,
    summary: "MQTT प्रोटोकॉल समज (broker, publish/subscribe topics), public broker सह ESP8266 जोडणे आणि DHT11 readings publish करणे.",
    sections: [
      {
        title: "MQTT — pub/sub, broker, DHT11 data publish म्हणजे काय?",
        content: "MQTT हा lightweight messaging protocol आहे — devices एकमेकांशी publish/subscribe pattern ने short messages इतर broker मधून देवघेव करतात.\nDevice A sensor data publish करते \"topic\" वर; device B त्याच टopic subscribe करून तो data घेते — थेट नेटवर्किंग गरज नसते.\nहा धडा MQTT ची कल्पना, Public broker (test.mosquitto.org) आणि DHT11 + ESP publish प्रोग्राम दाखवतो.",
      },
      {
        title: "का शिकावे? MQTT — pub/sub, broker, DHT11 data publish चे फायदे आणि महत्त्व",
        content: "IoT मध्ये बहुतांश devices MQTT नेच बोलतात — Home Assistant, Node-RED, sensor networks सगळे MQTT वर चालतात.\npub/sub मुळे आकडेवारीची एक केंद्र ठिकाण (broker) इतर devices फक्त subscribe करून वापरतात — अतिशय scalable.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Broker wrong host — test.mosquitto.org कधीकधी busy; mosquitto test servers वर तपासा.\n✗ Topic नाव गडगडणे — मोठा केस, slashes, mango; publish आणि subscribe एकमेव string असली पाहिजे.\n✗ Library wrap — PubSubClient.h सह callback तयार.\n✗ data = String — publish(float) नको, publish(char*) ना; dtostrf() ने string बनवा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "MQTT कल्पना — broker & topics",
        content: "Broker ही central server आहे (जसे post office). Topics paths सारखे: \"sensor/room1/temp\". Publishing device ला data देते; subscriber device तो topic ठीक subscribe करून messages मिळवते. 50-byte messages — बॅटरी सोलर projects ला चांगले.",
        code: `// Publish:  esp → broker → topic
// Subscribe: subscriber → broker ← topic
// Broker: test.mosquitto.org :1883`,
        codeLanguage: "cpp",
        output: `// एक-broker, many-clients
// publish/subscribe ने messages वाटतात`,
      },
      {
        title: "DHT11 → MQTT publish",
        content: "PubSubClient library install करा (knolleary). setup: mqtt.setServer(host,1883); loop: mqtt.loop() + reconnect जर disconnected. DHT11 readings dtostrf मध्ये घ्या व publish करा.",
        code: `#include <ESP8266WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>
#define DHTPIN D2
DHT dht(DHTPIN, DHT11);
WiFiClient espClient;
PubSubClient mqtt(espClient);
const char* host = "test.mosquitto.org";
void reconnect() {
  while (!mqtt.connected()) {
    mqtt.connect("esp-dht11-client");
    delay(1000);
  }
}
void setup() {
  Serial.begin(115200);
  // WiFi.begin(...) + wait ...
  dht.begin();
  mqtt.setServer(host, 1883);
}
void loop() {
  if (!mqtt.connected()) reconnect();
  mqtt.loop();
  float t = dht.readTemperature();
  char buf[10];
  dtostrf(t, 4, 1, buf);
  mqtt.publish("sensor/room1/temp", buf);
  delay(5000);
}`,
        codeLanguage: "cpp",
        output: `// दर 5s: topic sensor/room1/temp वर value
// mosquitto_sub वर subscribe करून नेहेक दिसते`,
      },
      {
        title: "सारांश — MQTT",
        content: "MQTT = publish/subscribe protocol. Broker मध्यवर्ती server (test.mosquitto.org). Topics paths. PubSubClient library. dtostrf ने float→char. विस्तार: subscribe command topic (लाईट on/off), retain, QoS. पुढे: Telegram bot — smartphone वरून control.",
      },
    ],
    practiceQuestions: [
      "MQTT मध्ये publish/subscribe म्हणजे काय?",
      "Broker ची भूमिका काय?",
      "Topics कसे बनवतात?",
      "float data publish करताना काय हवे?",
    ],
    quiz: [
      { question: "MQTT वर devices कसे बोलतात?", options: ["publish/subscribe", "HTTP GET", "IR", "Bluetooth"], correct: 0 },
      { question: "Central server चे नाव?", options: ["broker", "router", "DNS", "APP"], correct: 0 },
      { question: "Topics कशाप्रमाणे लिहिले जातात?", options: ["sensor/room1/temp", "12345", "true/false", "A0"], correct: 0 },
      { question: "ESP साठी MQTT library?", options: ["PubSubClient", "LiquidCrystal", "Servo", "ESP8266WiFi हीच"], correct: 0 },
      { question: "float→char conversion साठी काय?", options: ["dtostrf", "String concat", "map()", "integer only"], correct: 0 },
    ],
    related: ["esp8266-intro", "esp-telegram", "iot-thingspeak"],
    prev: "esp8266-intro",
    next: "esp-telegram",
  },
  {
    slug: "esp-telegram",
    categoryId: "electronics",
    title: "Telegram Bot Control",
    marathiTitle: "ESP + Telegram bot — chat मध्यून LED/relay control",
    level: "advanced",
    minutes: 40,
    summary: "Telegram Bot ची निर्मिती (BotFather), bot token, ESP8266 वर UniversalTelegramBot — chat मधून command पाठवून LED/relay नियंत्रण.",
    sections: [
      {
        title: "ESP + Telegram bot — chat मध्यून LED/relay control म्हणजे काय?",
        content: "Telegram bot म्हणजे आपला chat सहाय्यक — ESP वर चालणारा bot तुम्ही लिहिलेला message वाचतो आणि त्यावरून पिन चालवतो.\nBotFather ने bot बनवा, token मिळवा, ESP वर library ने messages प्राप्त करा आणि `/on`, `/off` command ने LED नियंत्रित करा.\nम्हणजेच जगाच्या कोणत्याही कोपऱ्यातून तुमचा hardware चलेल — real remote control.",
      },
      {
        title: "का शिकावे? ESP + Telegram bot — chat मध्यून LED/relay control चे फायदे आणि महत्त्व",
        content: "हा सर्वात लोकप्रिय और done-url IoT प्रोजेक्ट आहे — smartphone ev म्हणून dashboard हवा नसतो, फक्त Telegram.\nSecurity टोकन प्रणालीसह, verifyBot token ही pattern शिकून अन्य APIs (WhatsApp, Slack) सहज जोडता येतात.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ Bot token public — token गळल्यास कोणीही तुमचा bot चालवेल; git मध्ये कधीही टाकू नका.\n✗ library मधले polling — UniversalTelegramBot library handle; longPoll चा timeout गोंदल्यास bot पडेल.\n✗ update flow — म्हणून loop मध्ये getUpdates.busy लिहायला विसरू नका.\n✗ या bot ला chat_id check — override नसेल तर कोणीही control करेल.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Bot create — BotFather",
        content: "Telegram मध्ये BotFather ला /newbot पाठवा → नाव आणि username द्या → मिळणारा token कॉपी करा. token हा ~40 chars असतो. पुढे एकदा साफ chat मध्ये bot ला message पाठवा (जेणेकरून chat_id तयार होईल).",
        code: `// Telegram मध्ये:  @BotFather → /newbot
// बॉट नाव + username → token मिळेल
// तो token ESP code मध्ये use करा`,
        codeLanguage: "cpp",
        output: `// हीटीप: chat_id आधी तयार करा
// मगच ESP control message ओळखेल`,
      },
      {
        title: "Telegram control code",
        content: "UniversalTelegramBot library install (witnessmenow). bot.update() मध्ये नवीन messages. message text मध्ये \"/ledon\" असल्यास digitalWrite HIGH. चैतन्य: तुमचा chat_id check करा.",
        code: `#include <UniversalTelegramBot.h>
#include <ESP8266WiFi.h>
#define BOT_TOKEN "12345:AA-bot-token-here"
WiFiClientSecure client;
UniversalTelegramBot bot(BOT_TOKEN, client);
void handleNewMessages(int n) {
  for (int i = 0; i < n; i++) {
    String text = bot.messages[i].text;
    if (text == "/ledon") digitalWrite(D1, HIGH);
    else if (text == "/ledoff") digitalWrite(D1, LOW);
    bot.sendMessage(bot.messages[i].chat_id, "OK", "");
  }
}
void setup() { pinMode(D1, OUTPUT); /* WiFi */ }
void loop() {
  int n = bot.getUpdates(bot.last_message_received + 1);
  if (n) handleNewMessages(n);
}`,
        codeLanguage: "cpp",
        output: `// You → bot: /ledon
// bot → chat: "OK"   (LED चालू)
// कुठूनही इंटरनेट → hardware चालतं`,
      },
      {
        title: "सारांश — Telegram bot",
        content: "BotFather → token. catch text → action. client secure. chat_id filter = safety. library सहज. विस्तार: रीडिंग command (\"/temp\" → DHT value), inline keyboard, आणि daily status. पुढे: home automation — relay + app control.",
      },
    ],
    practiceQuestions: [
      "Bot token कसा मिळतो आणि तो सुरक्षित कसा राखता?",
      "UniversalTelegramBot मध्ये message कसे वाचतात?",
      "chat_id filter का आवश्यक?",
      "हा सेटअप वायफाय च्या बाहेर कसा वापरता?",
    ],
    quiz: [
      { question: "Bot बनवण्यासाठी कोणता bot?", options: ["BotFather", "TG bot", "Wizard", "Assistant"], correct: 0 },
      { question: "ESP मधील bot library?", options: ["UniversalTelegramBot", "PubSubClient", "DHT", "Wire"], correct: 0 },
      { question: "Privacy साठी काय filter करता?", options: ["chat_id", "token भाग", "baud", "topic"], correct: 0 },
      { question: "Bot द्वारे hardware कसे नियंत्रित?", options: ["message → action", "HTTP polling", "IR", "PWM only"], correct: 0 },
      { question: "कोणता command LED चालू करतो?", options: ["/ledon", "/start", "/temp", "/status"], correct: 0 },
    ],
    related: ["esp-mqtt", "esp8266-intro", "esp-home-automation"],
    prev: "esp-mqtt",
    next: "esp-home-automation",
  },
  {
    slug: "esp-home-automation",
    categoryId: "electronics",
    title: "ESP Home Automation (Relay)",
    marathiTitle: "ESP + Relay — 4-channel switch, app/voice control तयारी",
    level: "advanced",
    minutes: 40,
    summary: "Relay module सह 220V appliances control, ESP pin mapping आणि web/manual toggle — Home Assistant तयारीची मूलभूत wiring व तर्क.",
    sections: [
      {
        title: "ESP + Relay — 4-channel switch, app/voice control तयारी म्हणजे काय?",
        content: "Relay हे electric switch आहे जे microcontroller च्या small signal ने मोठे AC load (bulb, fan) नियंत्रित करते.\nअसे 4 relays एकत्र (4-channel module) करून 4 appliances ला ESP ने control करता येते.\nहा धडा relay wiring, ESP GPIO मॅपिंग, code toggle आणि सुरक्षित AC वेगळे करण्याबद्दल आहे.",
      },
      {
        title: "का शिकावे? ESP + Relay — 4-channel switch, app/voice control तयारी चे फायदे आणि महत्त्व",
        content: "हेच तंत्र Home Assistant, ESPHome, voice control चा आधार आहे — तुमच्या घरातील real नॉर्मल appliances जोडणे.\nत्यासाठी वेगळ्या, यासारखाच तर्क (relay + web/api) प्रत्येक smart-home मध्ये असतो.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ AC voltage स्पर्श — relay low-side control ठेवा; AC live वर काम करताना पॉवर गुंडवा.\n✗ Opto-isolated relay नंतर — module सह इनपुट active LOW (काहीवेळा HIGH); तपासा.\n✗ VCC केवळ, GND नाही — relay + ESP common ground हवे.\n✗ Relay कोळ / switching high load — पहिला light load (LED/bulb 40W) वर टेस्ट करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — 4-relay + ESP",
        content: "Relay module pins: VCC→3.3/5V per module, GND→GND, IN1..IN4 → ESP GPIO. NodeMCU वर इनपुट: D1=5, D2=4, D3=0, D4=2 (avoid D3/D4 बूट). AC side: COM→live, NO→bulb. Module opto-isolated असल्यास drive current कमी; active LOW logic common.",
        code: `// Relay IN1 → GPIO5 (D1)
// IN2 → GPIO4 (D2), IN3 → GPIO0 (D3}
// IN4 → GPIO2 (D4)
// VCC → 3.3V, GND → GND`,
        codeLanguage: "cpp",
        output: `// GND common — relay आणि ESP
// COM/NO → AC bulb series`,
      },
      {
        title: "Toggle code — web/manual",
        content: "सोपा pattern: button किंवा HTTP long-poll. चला serialize — मध्ये relay state दाखवा. या base वर Node-RED/ESPHome वर उचलल्यास app + voice control सगळे जोडता येईल.",
        code: `int relays[] = {5, 4, 0, 2};
bool st[] = {0, 0, 0, 0};
void setup() {
  for (int i = 0; i < 4; i++) pinMode(relays[i], OUTPUT);
  Serial.begin(115200);
}
void loop() {
  if (Serial.available()) {
    char c = Serial.read();
    if (c >= '1' && c <= '4') {
      int i = c - '1';
      st[i] = !st[i];
      digitalWrite(relays[i], st[i]);
    }
  }
}`,
        codeLanguage: "cpp",
        output: `// Serial '1'..'4' → तो relay toggle
// हा तर्क पुढे HTTP/Telegram protocol ला बदलता येईल`,
      },
      {
        title: "सारांश — home automation",
        content: "Relay मॉड्यूल: VCC/GND/IN+x. GPIO map ठीक निवडा (avoid D3/D4 बूटstrap). AC side वेगळे आणि सुरक्षित. active LOW logic नीट. विस्तार: ESPHome flash, app (Blink), voice (Alexa) — तेच relic सह. पुढे esp-weather-station — DHT+BMP cloud.",
      },
    ],
    practiceQuestions: [
      "Relay कशासारखा switch असतो?",
      "ESP GPIO मध्ये कोणते pins टाळतात आणि का?",
      "active LOW म्हणजे काय?",
      "AC load वर काम करताना सुरक्षा कशी ठेवता?",
    ],
    quiz: [
      { question: "Relay काय करतो?", options: ["मोठे load control", "प्रकाश मोजतो", "temperature", "sound"], correct: 0 },
      { question: "Relay module ला IN पिन कुठे गळतो?", options: ["ESP GPIO", "5V", "GND only", "A0"], correct: 0 },
      { question: "बूट करताना कोणते GPIO avoid करतात?", options: ["D3/D4", "D1/D2", "A0", "D8"], correct: 0 },
      { question: "Opto-isolated modules मध्ये logic?", options: ["active LOW (अनेक)", "active HIGH (सगळे)", "analog", "PWM"], correct: 0 },
      { question: "AC load ATM relay कोणत्या terminals ने?", options: ["COM + NO", "IN + GND", "VCC + GND", "A0 + D1"], correct: 0 },
    ],
    related: ["esp-telegram", "esp-mqtt", "iot-smart-relay"],
    prev: "esp-telegram",
    next: "esp-weather-station",
  },
  {
    slug: "esp-weather-station",
    categoryId: "electronics",
    title: "ESP Weather Station",
    marathiTitle: "DHT11 + BMP180 + ESP — weather data, pre-emptive alerts",
    level: "advanced",
    minutes: 45,
    summary: "DHT11 (temp/hum) + BMP180 (pressure) सोबत ESP8266 — एकत्र readings, JSON publish आणि वेब/console वर weather dashboard.",
    sections: [
      {
        title: "DHT11 + BMP180 + ESP — weather data, pre-emptive alerts म्हणजे काय?",
        content: "हे संपूर्ण IoT weather station आहे — DHT11 तापमान/आर्द्रता आणि BMP180 तापमान/हवेचा दाब मोजते.\nतीन readings एकत्र करून ESP स्वतः JSON publish करते — हे data मग ThingSpeak/Node-RED वर dashboard मध्ये दिसते.\nघरगुती साधे sensor network चे उत्तम उदाहरण, आणि pre-emptive alerts चा पाया.",
      },
      {
        title: "का शिकावे? DHT11 + BMP180 + ESP — weather data, pre-emptive alerts चे फायदे आणि महत्त्व",
        content: "यात दोन sensor types (digital + I2C) आणि HTTP/JSON मिळून पूर्ण data pipeline आहे — तेच industrial IoT मध्ये वापरतात.\nतीन readings एका packet मध्ये (JSON) पाठवणे ही API design ची मूलभूत कौशल्ये.\nवाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.",
      },
      {
        title: "सामान्य चुका आणि सावधानता",
        content: "✗ BMP180 library — Adafruit_BMP085.h वापरा (दोन्ही-compatible).\n✗ I2C pins — NodeMCU वर D1=SDA, D2=SCL. wiring उलटी केल्यास sensor ओळखत नाही.\n✗ JSON बनवताना string concat फालतू — sprintf/StaticJsonDocument ने बांधा.\n✗ दाब Unit hPa — BMP180 readPressure() Pa देते; /100 करा.\nप्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.",
      },
      {
        title: "Wiring — DHT + BMP180",
        content: "DHT11: DATA→D3 (GPIO0). BMP180: VCC→3.3V, GND→GND, SDA→D1(GPIO5), SCL→D2(GPIO4). दोन्ही 3.3V logic — ESP बरोबर सही आहे. pull-up resistors BMP180 module वर आधीच असतात.",
        code: `// DHT11   → DATA D3
// BMP180  → VCC 3.3V, SDA D1, SCL D2
// दोन्ही आपले GND ESP सह`,
        codeLanguage: "cpp",
        output: `// I2C: SDA/SCL — BMP180 संवाद
// DHT11 single-wire वेगळा`,
      },
      {
        title: "Readings + JSON",
        content: "Adafruit_BMP085 bmp; setup मध्ये bmp.begin(). दाब = bmp.readPressure()/100.0. तापमान BMP980 + DHT दोन्ही. JSON एक string मध्ये Serial/publish करा.",
        code: `#include <Adafruit_BMP085.h>
#include <DHT.h>
#define DHTPIN 0
DHT dht(DHTPIN, DHT11);
Adafruit_BMP085 bmp;
void setup() {
  Serial.begin(115200);
  dht.begin();
  bmp.begin();
}
void loop() {
  float t = dht.readTemperature();
  float p = bmp.readPressure() / 100.0;
  Serial.print("{\"temp\":");
  Serial.print(t, 1);
  Serial.print(",\"pres\":");
  Serial.print(p, 1);
  Serial.println("}");
  delay(10000);
}`,
        codeLanguage: "cpp",
        output: `{"temp":27.4,"pres":1013.2}
{"temp":27.5,"pres":1013.0}
// दर 10s एक JSON — publish ready`,
      },
      {
        title: "सारांश — weather station",
        content: "DHT11 + BMP180 + ESP = weather station. I2C wiring (D1=SDA,D2=SCL). दाब बेरप()/100 = hPa. JSON मध्ये publish. पुढे advanced electronics: multimeter, soldering, PCB — electronics हातचे काम. (esp-weather-station project page ही projects.ts मध्ये आहे.)",
      },
    ],
    practiceQuestions: [
      "BMP180 DHT11 पेक्षा काय वेगळे मोजतो?",
      "BMP180 ला कोणते interface वापरता?",
      "दाब Pa मधून hPa कसा करता?",
      "JSON publish मध्ये काय काळजी घेता?",
    ],
    quiz: [
      { question: "BMP180 काय मोजतो?", options: ["दाब pressure", "फक्त temperature", "प्रकाश", "sound"], correct: 0 },
      { question: "NodeMCU वर I2C SDA/SCL कोणते?", options: ["D1/D2", "D3/D4", "A0/A1", "D8/D9"], correct: 0 },
      { question: "दाब hPa मध्ये कसा?", options: ["/100", "*100", "+10", "map()"], correct: 0 },
      { question: "BMP180 library?", options: ["Adafruit_BMP085", "DHT", "PubSub", "Wire base"], correct: 0 },
      { question: "Data प्रकाशन कोणत्या स्वरूपात?", options: ["JSON", "CSV raw", "binary", "touch"], correct: 0 },
    ],
    related: ["iot-temp-monitor", "iot-thingspeak", "esp-mqtt"],
    project: "esp-weather-station",
    prev: "esp-home-automation",
    next: "electronics-multimeter",
  },
];