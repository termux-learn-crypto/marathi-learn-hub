export interface Project {
  id: string;
  categoryId: string;
  title: string;
  marathiTitle: string;
  difficulty: "सोपे" | "मध्यम" | "अवघड";
  minutes: number;
  summary: string;
  steps: string[];
  code?: string;
  codeLanguage?: string;
  components?: string[];
}

export const projects: Project[] = [
  {
    id: "personal-website",
    categoryId: "web",
    title: "Personal Website",
    marathiTitle: "स्वतःची वेबसाइट",
    difficulty: "सोपे",
    minutes: 30,
    summary: "HTML आणि CSS वापरून स्वतःची personal portfolio website बनवा.",
    steps: [
      "नवीन फोल्डर बनवा आणि त्यात index.html बनवा",
      "मूलभूत HTML structure तयार करा",
      "header, about, projects, contact sections बनवा",
      "CSS वापरून सुंदर बनवा",
      "Browser मध्ये उघडून बघा",
    ],
    code: `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8">
  <title>माझे नाव - Portfolio</title>
  <style>
    body { font-family: Arial; margin: 0; }
    header { background: #2c3e50; color: white; padding: 50px; text-align: center; }
    .container { max-width: 800px; margin: auto; padding: 20px; }
    .project { border: 1px solid #ddd; padding: 15px; margin: 10px 0; }
  </style>
</head>
<body>
  <header>
    <h1>नमस्कार, मी विलास!</h1>
    <p>मी वेब डेव्हलपर आहे</p>
  </header>
  <div class="container">
    <h2>माझे Projects</h2>
    <div class="project">Project 1</div>
    <div class="project">Project 2</div>
  </div>
</body>
</html>`,
    codeLanguage: "html",
  },
  {
    id: "login-page",
    categoryId: "web",
    title: "Login Page",
    marathiTitle: "Login Page बनवा",
    difficulty: "मध्यम",
    minutes: 40,
    summary: "HTML CSS JavaScript वापरून functional login form.",
    steps: [
      "Form structure तयार करा",
      "CSS ने design करा",
      "JavaScript ने validation जोडा",
      "परिणाम दाखवा",
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; }
    .form { padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    input { display: block; margin: 10px 0; padding: 10px; }
  </style>
</head>
<body>
  <form class="form" id="loginForm">
    <h2>Login</h2>
    <input id="email" placeholder="ईमेल">
    <input id="pass" type="password" placeholder="पासवर्ड">
    <button type="submit">लॉगिन</button>
  </form>
  <script>
    document.getElementById('loginForm')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const pass = document.getElementById('pass').value;
        if (email && pass) {
          alert('यशस्वी login!');
        } else {
          alert('कृपया सर्व fields भरा');
        }
    });
  </script>
</body>
</html>`,
    codeLanguage: "html",
  },
  {
    id: "python-calculator",
    categoryId: "python",
    title: "Python Calculator",
    marathiTitle: "Calculator App",
    difficulty: "सोपे",
    minutes: 20,
    summary: "Python मध्ये command-line calculator बनवा.",
    steps: [
      "सुरुवातीला calculator basic requests समजून घ्या",
      "Addition, subtraction, multiplication, division functions लिहा",
      "User input घ्या आणि निकाल दाखवा",
    ],
    code: `def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b
def div(a, b): return a / b if b != 0 else "शून्याने भागाकार नाही"

while True:
    print("\\n1. बेरीज  2. वजाबाकी")
    print("3. गुणाकार  4. भागाकार  5. बाहेर")
    choice = input("निवडा: ")
    if choice == "5": break
    a = float(input("पहिली संख्या: "))
    b = float(input("दुसरी संख्या: "))
    if choice == "1": print("उत्तर:", add(a, b))
    elif choice == "2": print("उत्तर:", sub(a, b))
    elif choice == "3": print("उत्तर:", mul(a, b))
    elif choice == "4": print("उत्तर:", div(a, b))`,
    codeLanguage: "python",
  },
  {
    id: "guess-game",
    categoryId: "python",
    title: "Number Guessing Game",
    marathiTitle: "अंदाज लावा खेळ",
    difficulty: "सोपे",
    minutes: 25,
    summary: "संगणकाने निवडलेली संख्या अंदाजाने शोधा.",
    steps: [
      "Random number generate करा",
      "User अंदाज घ्या",
      "GUIDANCE द्या आणि attempts मोजा",
    ],
    code: `import random

secret = random.randint(1, 100)
attempts = 0

print("1 ते 100 मधील संख्या अंदाज लावा!")

while True:
    guess = int(input("तुमचा अंदाज: "))
    attempts += 1
    if guess < secret:
        print("जास्त मोठी संख्या टाका")
    elif guess > secret:
        print("जास्त लहान संख्या टाका")
    else:
        print(f"अभिनंदन! {attempts} प्रयत्नात सापडली!")
        break`,
    codeLanguage: "python",
  },
  {
    id: "todo-app",
    categoryId: "python",
    title: "To-Do App",
    marathiTitle: "कामाची यादी (To-Do)",
    difficulty: "मध्यम",
    minutes: 35,
    summary: "Python मध्ये To-Do list app बनवा जी फाईलमध्ये save होते.",
    steps: [
      "List structure तयार करा",
      "Add, view, complete, delete functions लिहा",
      "File save/load functionality जोडा",
    ],
    code: `tasks = []

def show():
    if not tasks:
        print("कोणतेही काम नाही")
    for i, t in enumerate(tasks, 1):
        status = "✓" if t["done"] else "✗"
        print(f"{i}. {status} {t['task']}")

while True:
    print("\\n--- To-Do List ---")
    print("1. काम जोडा")
    print("2. यादी पहा")
    print("3. काम पूर्ण करा")
    print("4. काम डिलीट करा")
    print("5. बाहेर")
    c = input("निवड: ")
    if c == "1":
        tasks.append({"task": input("काम: "), "done": False})
    elif c == "2": show()
    elif c == "3":
        show(); n = int(input("कोणता? ")) - 1
        if 0 <= n < len(tasks): tasks[n]["done"] = True
    elif c == "4":
        show(); n = int(input("कोणता? ")) - 1
        if 0 <= n < len(tasks): tasks.pop(n)
    elif c == "5": break`,
    codeLanguage: "python",
  },
  {
    id: "age-calculator",
    categoryId: "python",
    title: "Age Calculator",
    marathiTitle: "वय गणना",
    difficulty: "सोपे",
    minutes: 15,
    summary: "जन्मतारखेवरून वय काढणारा program बनवा.",
    steps: [
      "आजचा दिवस datetime ने मिळवा",
      "जन्मतारीख input घ्या",
      "वर्ष, महिने, दिवसातील वय मोजा",
    ],
    code: `import datetime as dt

today = dt.date.today()
y = int(input("जन्म वर्ष: "))
m = int(input("जन्म महिना: "))
d = int(input("जन्म दिवस: "))

born = dt.date(y, m, d)
age = today - born
days = age.days
years = days // 365
months = (days % 365) // 30
print(f"तुमचे वय: {years} वर्षे {months} महिने")`,
    codeLanguage: "python",
  },
  {
    id: "even-odd-checker",
    categoryId: "python",
    title: "Even/Odd Checker",
    marathiTitle: "सम-विषम तपासनीस",
    difficulty: "सोपे",
    minutes: 10,
    summary: "इनपुट संख्या सम आहे की विषम ते दाखवणारा सोपा program.",
    steps: [
      "संख्या input घ्या",
      "modulo (%) operator ने बाकी तपासा",
      "निकाल print करा",
    ],
    code: `n = int(input("संख्या: "))
if n % 2 == 0:
    print(f"{n} ही सम संख्या आहे")
else:
    print(f"{n} ही विषम संख्या आहे")`,
    codeLanguage: "python",
  },
  {
    id: "multiplication-table",
    categoryId: "python",
    title: "Multiplication Table",
    marathiTitle: "पहाडा जनरेटर",
    difficulty: "सोपे",
    minutes: 12,
    summary: "कोणत्याही संख्येचा 1 ते 10 चा पहाडा print करणारा program.",
    steps: [
      "संख्या input घ्या",
      "for loop वापरून 1 ते 10 ho पर्यंत गुणा",
      "प्रत्येक ओळ print करा",
    ],
    code: `n = int(input("पहाडा हवा त्या संख्येचा: "))
print(f"--- {n} चा पहाडा ---")
for i in range(1, 11):
    print(f"{n} × {i} = {n * i}")`,
    codeLanguage: "python",
  },
  {
    id: "simple-quiz",
    categoryId: "python",
    title: "Simple Quiz",
    marathiTitle: "JS Quiz App",
    difficulty: "मध्यम",
    minutes: 30,
    summary: "Python मध्ये प्रश्न-उत्तर quiz बनवा आणि score दाखवा.",
    steps: [
      "प्रश्न आणि उत्तरांची list तयार करा",
      "प्रत्येक प्रश्न विचारा",
      "बरोबर उत्तरांवर गुण द्या आणि अंतिम score दाखवा",
    ],
    code: `questions = [
    ("Python मध्ये list बनवण्यासाठी कोणते brackets?", ["[]", "()", "{}"], 0),
    ("print() function काय करते?", ["input घेते", "output दाखवते", "file उघडते"], 1),
    ("कोणता एक वैध variable नाव?", ["2num", "my_name", "my-name", "my name"], 1),
]

score = 0
for i, (q, opts, ans) in enumerate(questions, 1):
    print(f"{i}. {q}")
    for j, opt in enumerate(opts):
        print(f"   {j + 1}) {opt}")
    choice = int(input("उत्तर (संख्या): ")) - 1
    if choice == ans:
        score += 1
        print("बरोबर!")
    else:
        print("चुकले.")

print(f"\\nअंतिम score: {score}/{len(questions)}")`,
    codeLanguage: "python",
  },
  {
    id: "password-generator",
    categoryId: "python",
    title: "Password Generator",
    marathiTitle: "पासवर्ड जनरेटर",
    difficulty: "मध्यम",
    minutes: 25,
    summary: "मजबूत random पासवर्ड तयार करणारा program बनवा.",
    steps: [
      "अक्षरे, अंक, चिन्हे - हे सर्व characters जमवा",
      "random.choice() ने character निवडा",
      "दिलेल्या लांबीचा पासवर्ड तयार करा",
    ],
    code: `import random
import string

length = int(input("पासवर्ड किती अक्षरांचा हवा? "))
chars = string.ascii_letters + string.digits + string.punctuation

password = "".join(random.choice(chars) for _ in range(length))
print(f"तुमचा पासवर्ड: {password}")`,
    codeLanguage: "python",
  },
  {
    id: "unit-converter",
    categoryId: "python",
    title: "Unit Converter",
    marathiTitle: "एकक रूपांतरण",
    difficulty: "मध्यम",
    minutes: 25,
    summary: "लांबी आणि वजनाची एकके एका मध्ये बदलणारा program.",
    steps: [
      "कोणते रूपांतरण करायचे ती निवड करा",
      "मूल्य input घ्या",
      "सूत्र लावा आणि निकाल दाखवा",
    ],
    code: `print("1. किमी → मैल")
print("2. किलो → पाउंड")
print("3. सेल्सियस → फारेनहाइट")
choice = input("निवड: ")

value = float(input("मूल्य: "))
if choice == "1":
    print(f"{value} किमी = {value * 0.621371:.2f} मैल")
elif choice == "2":
    print(f"{value} किलो = {value * 2.20462:.2f} पाउंड")
elif choice == "3":
    print(f"{value} °C = {(value * 9/5) + 32:.2f} °F")
else:
    print("अवैध निवड")`,
    codeLanguage: "python",
  },
  {
    id: "led-project",
    categoryId: "electronics",
    title: "LED Blink Project",
    marathiTitle: "LED Blink",
    difficulty: "सोपे",
    minutes: 15,
    summary: "Arduino वर सर्वात पहिला प्रोजेक्ट - LED blink करवणे.",
    steps: [
      "Arduino वर LED जोडा (pin 13 + GND)",
      "कोड upload करा",
      "LED blink होतो का बघा",
    ],
    code: `void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`,
    codeLanguage: "c",
    components: ["Arduino UNO", "LED", "Resistor 220Ω", "Wires"],
  },
  {
    id: "web-server-esp32",
    categoryId: "diy",
    title: "Web Server",
    marathiTitle: "Network Web Server",
    difficulty: "अवघड",
    minutes: 60,
    summary: "Home Automation: Browser वरून bulb on/off करा Arduino/ESP ने.",
    steps: [
      "ESP/Arduino वाय-फाय ला जोडा",
      "Web server कोड अपलोड करा",
      "Browser वरून relay control करा",
    ],
    code: `#include <WiFi.h>

const char* ssid = "अपने-WiFi";
const char* password = "password";

WiFiServer server(80);

void setup() {
  Serial.begin(115200);
  pinMode(2, OUTPUT);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
  }
  server.begin();
}

void loop() {
  WiFiClient client = server.available();
  if (!client) return;
  while (!client.available()) delay(1);
  String request = client.readStringUntil('\\r');
  if (request.indexOf("/ON") != -1) digitalWrite(2, HIGH);
  if (request.indexOf("/OFF") != -1) digitalWrite(2, LOW);
  client.println("HTTP/1.1 200 OK");
  client.println("<h1><a href='/ON'>ON</a> | <a href='/OFF'>OFF</a></h1>");
  delay(1);
}`,
    codeLanguage: "cpp",
  },
  {
    id: "arduino-thermometer",
    categoryId: "electronics",
    title: "Digital Thermometer",
    marathiTitle: "डिजिटल थर्मामीटर",
    difficulty: "मध्यम",
    minutes: 30,
    summary: "DHT11 + LCD 16x2 ने real-time तापमान आणि आर्द्रता दाखवा.",
    steps: [
      "DHT11 sensor ला Arduino वर जोडा",
      "LCD 16x2 ची wiring करा",
      "DHT आणि LiquidCrystal libraries install करा",
      "Code upload करा आणि readings तपासा",
    ],
    code: `#include <DHT.h>
#include <LiquidCrystal.h>
#define DHTPIN 2
DHT dht(DHTPIN, DHT11);
LiquidCrystal lcd(12, 11, 5, 4, 3, 6);
void setup() {
  dht.begin();
  lcd.begin(16, 2);
}
void loop() {
  lcd.setCursor(0, 0);
  lcd.print("Temp: ");
  lcd.print(dht.readTemperature(), 1);
  lcd.print(" C");
  lcd.setCursor(0, 1);
  lcd.print("Hum:  ");
  lcd.print(dht.readHumidity(), 0);
  lcd.print(" %");
  delay(2000);
}`,
    codeLanguage: "cpp",
    components: ["Arduino UNO", "DHT11 sensor", "LCD 16x2", "Potentiometer", "Resistors", "Wires"],
  },
  {
    id: "arduino-plant-waterer",
    categoryId: "electronics",
    title: "Auto Plant Waterer",
    marathiTitle: "स्वयंचलित झाडांना पाणी",
    difficulty: "मध्यम",
    minutes: 40,
    summary: "Soil moisture sensor ने जमीन कोरडी झाली की water pump आपोआप चालवा.",
    steps: [
      "FC-28 soil moisture sensor A0 वर जोडा",
      "Water pump relay/MOSFET ने drive करा",
      "Threshold सेट करा (कोरडे > 550)",
      "वेळ safety ने pump control करा",
    ],
    code: `int sensor = A0;
int relay = 8;
void setup() { pinMode(relay, OUTPUT); }
void loop() {
  if (analogRead(sensor) > 550) {
    digitalWrite(relay, HIGH);
    delay(10000);
    digitalWrite(relay, LOW);
    delay(3600000);
  } else {
    digitalWrite(relay, LOW);
  }
  delay(2000);
}`,
    codeLanguage: "cpp",
    components: ["Arduino UNO", "FC-28 soil sensor", "Water pump 3-6V", "Relay/MOSFET", "Battery", "Wires"],
  },
  {
    id: "arduino-obstacle-robot",
    categoryId: "electronics",
    title: "Obstacle Robot",
    marathiTitle: "अडथळा टाळणारा रोबोट",
    difficulty: "अवघड",
    minutes: 60,
    summary: "HC-SR04 + servo + L298N मोटर्सने स्वतःच अडथळा टाळणारा robot बनवा.",
    steps: [
      "L298N सह दोन DC मोटर्स जोडा",
      "HC-SR04 ultrasonic servo वर तयार करा",
      "अंतर मोजणारा कोड लिहा",
      "scan + turn algorithm जोडा",
    ],
    code: `// servo scan 0/90/180
// dist() = echo duration * 0.01715
// d < 20cm → stop, clear direction ने वळ
// स्पीड: analogWrite(enA/enB)`,
    codeLanguage: "cpp",
    components: ["Arduino UNO", "2x DC motors + wheels", "L298N driver", "HC-SR04", "Servo", "Battery", "Robot chassis"],
  },
  {
    id: "arduino-smart-light",
    categoryId: "electronics",
    title: "Smart Auto Light",
    marathiTitle: "स्मार्ट ऑटो लाईट",
    difficulty: "मध्यम",
    minutes: 30,
    summary: "LDR + PIR — अंधारात हालचाल दिसल्यावर दिवा आपोआप चालू.",
    steps: [
      "LDR voltage divider A0 वर जोडा",
      "PIR motion sensor पिन 2 वर जोडा",
      "अंधार + हालचाल तर दिवा ON",
      "30s auto-off देऊन वीज वाचवा",
    ],
    code: `int pirPin = 2, ldrPin = A0, led = 9;
void setup() {
  pinMode(pirPin, INPUT);
  pinMode(led, OUTPUT);
}
void loop() {
  bool motion = digitalRead(pirPin) == HIGH;
  bool dark = analogRead(ldrPin) < 500;
  if (motion && dark) { digitalWrite(led, HIGH); delay(30000); }
  else digitalWrite(led, LOW);
  delay(100);
}`,
    codeLanguage: "cpp",
    components: ["Arduino UNO", "PIR sensor", "LDR", "10k resistor", "LED 220Ω", "Wires"],
  },
  {
    id: "esp-weather-station",
    categoryId: "electronics",
    title: "ESP Weather Station",
    marathiTitle: "ESP वेदर स्टेशन",
    difficulty: "अवघड",
    minutes: 45,
    summary: "DHT11 + BMP180 + ESP8266 — तापमान, आर्द्रता आणि दाब JSON मध्ये publish करा.",
    steps: [
      "DHT11 आणि BMP180 ESP वर जोडा",
      "Adafruit BMP085 + DHT libraries install करा",
      "दाब hPa मध्ये करा (readPressure/100)",
      "JSON publish करून Network तपासा",
    ],
    code: `#include <Adafruit_BMP085.h>
#include <DHT.h>
#define DHTPIN 0
DHT dht(DHTPIN, DHT11);
Adafruit_BMP085 bmp;
void setup() { Serial.begin(115200); dht.begin(); bmp.begin(); }
void loop() {
  float p = bmp.readPressure() / 100.0;
  Serial.print("{\\"temp\\":");
  Serial.print(dht.readTemperature(), 1);
  Serial.print(",\\"pres\\":");
  Serial.print(p, 1);
  Serial.println("}");
  delay(10000);
}`,
    codeLanguage: "cpp",
    components: ["NodeMCU/ESP8266", "DHT11", "BMP180", "Breadboard", "Wires"],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByCategory(categoryId: string): Project[] {
  return projects.filter((p) => p.categoryId === categoryId);
}

export function getPopularProjects(): Project[] {
  return projects.slice(0, 3);
}
