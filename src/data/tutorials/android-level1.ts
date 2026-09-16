import type { Tutorial } from "@/data/tutorials";

// === ANDROID · LEVEL 1 — MIT App Inventor ने अॅप बनवणे (मोफत, phone-first) ===
// android-basics → app-inventor-setup → app-inventor-components →
// app-inventor-calculator → app-inventor-quiz → app-inventor-share →
// app-inventor-webview → android-permissions

export const androidLevel1: Tutorial[] = [
  {
    slug: "android-basics",
    categoryId: "android",
    title: "Android Basics - Android म्हणजे काय",
    marathiTitle: "Android म्हणजे काय? — OS, apps आणि APK",
    level: "beginner",
    minutes: 20,
    summary: "Android म्हणजे फोनचा मेंदू असलेली ऑपरेटिंग सिस्टम. हे तुम्हाला OS, apps, APK, Play Store आणि storage हे सगळे मूलभूत संकल्पना उदाहरणांसह समजून घेण्यास मदत करते.",
    sections: [
      {
        title: "Android म्हणजे काय?",
        content: "Android म्हणजे एक ऑपरेटिंग सिस्टम (OS) — फोन चालवणारा मुख्य प्रोग्राम. Windows संगणकावर चालतो तशी Android फोनवर चालते.\n\nSamsung, Xiaomi, Motorola, OnePlus, Vivo, Realme — ही सगळी वेगवेगळी दिसतात, पण आतला मेंदू (kernel व सिस्टम) मोठ्या प्रमाणात सारखाच असतो.\n\nAndroid चा पाया Linux नावाच्या open-source kernel वर आहे. सोप्या भाषेत: Android म्हणजे फोनच्या hardware आणि apps यांच्यामधला पूल.",
      },
      {
        title: "Android कुठे कुठे चालतो?",
        content: "Android फक्त फोनमध्येच नाही — अनेक जागी चालतो:\n\n• Smartphone आणि tablet — सगळ्यात सामान्य\n• Smart TV — बऱ्याच TVs वर Android चालते\n• Smart watch — Wear OS, Android च्या सुविधांवर बनलेले\n• Android Auto — गाडीतील display साठी\n• TV boxes, kiosks, digital signages, embedded devices\n\nही विविधता विकासकांना एकच skillset अनेक जागी वापरण्याची संधी देते. या पाठात आपण फोनवरच लक्ष केंद्रित करू — आज बहुतेक सगळ्यांच्या हातात फोन असतो.",
      },
      {
        title: "ऑपरेटिंग सिस्टम कशी काम करते — थर",
        content: "Android समजण्यासाठी बहुस्तर (layered) रचना:\n\nथर १ — Kernel (पाया): Linux kernel थेट hardware शी बोलतो — battery, touch, camera, wifi.\n\nथर २ — System libraries: graphics, sound, video decode यासाठी तयार कोडसंच.\n\nथर ३ — Android Runtime (ART): app चालवणारा इंजिन. प्रत्येक app आपल्या वेगळ्या sandbox मध्ये चालतो, म्हणून एक खराब app सिस्टम अडवत नाही.\n\nथर ४ — Application framework: notifications, dialogs, app switching सारख्या services.\n\nथर ५ — Apps: तुम्ही install केलेल्या apps.",
      },
      {
        title: "Apps आणि APK",
        content: "App म्हणजे विशिष्ट काम करणारा लहान प्रोग्राम. Apps दोन प्रकारे वापरल्या जातात: फोनवर install केलेले किंवा browser मधील web apps. फोनवरील apps OS द्वारे चालवल्या जातात; त्यांचा कोड high-level भाषांतून Android format मध्ये compile होतो.\n\nAPK (Android Package Kit) म्हणजे app चा संपूर्ण पॅक:\n\n• Compiled code.\n• Resources — images, icons, layouts.\n• AndroidManifest.xml — app चे नाव, permissions, activity list.\n• Digital signature — developer ने sign केलेले.\n\nPlay Store वरून app download होतो; किंवा APK थेट install (side-load). सुरक्षेचा नियम: APK अधिकृत आणि signed असली पाहिजे.",
      },
      {
        title: "Google Play Store",
        content: "Play Store हा Android साठी Google चा अधिकृत app store — लाखो apps install करण्याचा सुरक्षित मार्ग.\n\nPlay Protect: प्रत्येक app scan करते (install आधी आणि मागेही). Developer verification: app publish करणाऱ्याची ओळख check. Updates: app ची नवी आवृत्ती स्वयंचलित install.\n\nPlay Store मध्ये Free (मोफत) आणि Paid (सशुल्क) apps. पण सगळी apps सुरक्षितच असे नाही — app ने काय मागतो (permissions) हे पाहणे आपल्याला पुढे शिकवते.",
      },
      {
        title: "फोन व storage",
        content: "फोनमध्ये दोन प्रकारची memory:\n\n१) RAM — तात्पुरती, फोन बंद केला की रिकामी. अधिक RAM = एकावेळी अधिक apps चालतात.\n२) Internal storage — कायमस्वरूपी; apps, फोटो, files येथे राहतात. अनेक फोनवर external storage (SD card) असते.\n\nApps वापरताना: App size, Cache (तात्पुरत्या फाईल्स गतीसाठी), App data (login, messages, settings). फोन भरल्यावर: File Manager ने मोठ्या फाईल्स शोधा, cache साफ करा, अनावश्यक apps uninstall करा.",
      },
      {
        title: "Android आवृत्त्यांची कहाणी",
        content: "Android च्या प्रत्येक आवृत्तीला नाव — अक्षरांतून: Cupcake, Donut, Eclair, Froyo, Gingerbread, Honeycomb, Ice Cream, KitKat, Lollipop, Marshmallow (runtime permissions), Nougat, Oreo, Pie, 10, 11, 12, 13, 14, 15…\n\nमहत्त्वाचे टप्पे: Android 5 — Material Design; Android 6 — runtime permissions; Android 10+ — dark theme, gestures; Android 12+ — Material You, privacy indicators.\n\nप्रत्येक आवृत्तीला API level (Android 15 = API 35). विकासक या API नुसार apps बनवतात — min API, target API हे शब्द पुढे कळतील.",
      },
      {
        title: "Open source — AOSP",
        content: "Android चा गाभा open-source आहे — AOSP (Android Open Source Project) म्हणून सार्वजनिक. कोणीही कोड वाचू शकतो; कंपन्या flavor बनवतात — Samsung One UI, Xiaomi HyperOS, stock Google. हे सगळे Android आहेत.\n\nविकासकाला: App Inventor मध्ये तयार apps जवळजवळ सर्व Android फोनवर चालतात, निर्माता कोणीही असो. हीच open-source ची ताकद.",
      },
      {
        title: "सारांश",
        content: "Android = फोनची OS, Linux kernel वर. Apps हे APK मध्ये पॅक. Play Store हे सुरक्षित स्टोअर. RAM आणि storage असतो. प्रत्येक आवृत्तीने नवी वैशिष्ट्ये.\n\nपुढच्या पाठात MIT App Inventor — browser मधून, बिना कोड, तुमचा पहिला Android app.\n\nPractice: Settings → About phone मध्ये Android आवृत्ती शोधा. Storage मध्ये कोणते files व apps जास्त जागा घेतात ते पहा. एका app ची माहिती उघडून storage व RAM पहा.",
      },
    ],
    practiceQuestions: [
      "तुमच्या फोनमध्ये Android ची कोणती आवृत्ती चालते? Settings → About phone मध्ये पहा.",
      "तुमच्या फोनमधील सर्वात मोठ्या 3 apps कोणती व त्या किती storage घेतात ते लिहा.",
      "तुमच्या फोनवर किती RAM आहे हे कसे शोधाल? (Settings → Memory).",
      "एक उदाहरण सांगा जेथे एकच skillset phone आणि Smart TV दोन्हीवर चालते.",
    ],
    quiz: [
      { question: "Android चा पाया कोणत्या kernel वर आहे?", options: ["Windows", "Linux", "macOS", "iOS"], correct: 1 },
      { question: "APK म्हणजे काय?", options: ["एक photo format", "Android अॅपचा पॅक", "एक संगणक भाषा", "एक browser"], correct: 1 },
      { question: "प्रत्येक app आपल्या वेगळ्या घरात चालतो — याला काय म्हणतात?", options: ["Sandbox", "Cache", "Kernel", "Launcher"], correct: 0 },
      { question: "फोन बंद केल्यावर तात्पुरती memory रिकामी होते — कोणती?", options: ["Internal storage", "SD card", "RAM", "Cache"], correct: 2 },
      { question: "Android apps साठी Google चा अधिकृत store कोणता?", options: ["App Store", "Play Store", "F-Droid", "APK Pure"], correct: 1 },
    ],
    related: ["app-inventor-setup", "termux-basics", "linux-basics"],
    next: "app-inventor-setup",
  },

  {
    slug: "app-inventor-setup",
    categoryId: "android",
    title: "App Inventor Setup - पहिला अॅप बनवा",
    marathiTitle: "MIT App Inventor — सेटअप आणि पहिला प्रोजेक्ट",
    level: "beginner",
    minutes: 25,
    summary: "MIT App Inventor हे मोफत, browser मधून चालणारे साधन आहे ज्यात बिना कोडिंग तुम्ही Android apps बनवू शकता. account तयार करणे, पहिला project सुरू करणे व phone वर live preview बघणे हे शिकवते.",
    sections: [
      {
        title: "MIT App Inventor म्हणजे काय?",
        content: "MIT App Inventor हे Massachusetts Institute of Technology ने बनवलेले देणे आहे — अतिशय सोपी, block-आधारित app बनवण्याची यंत्रणा.\n\n• Browser मध्ये चालते — ai2.appinventor.mit.edu ला जा, तत्पर तयार.\n• कोणतेही software install करावे लागत नाही.\n• Drag-drop design आणि block coding (Scratch सारखी शैली).\n• मोफत आणि शैक्षणिक.\n\nया series मध्ये आपण calculator, quiz, webview असे apps बनवणार.\n\nपूर्वी app बनवायला Android Studio + Java/Kotlin आणि बरीच मेहनत लागायची. App Inventor ने app बनवण्याचा मार्ग अगदी मोकळा केला.\n\nतुम्हाला programming चे complete ज्ञान लागणार नाही — पण logic, विचार आणि एकाग्रता लागेल.",
      },
      {
        title: "काय काय आवश्यक आहे?",
        content: "App Inventor चालवण्यासाठी:\n\n• एक browser (Chrome / Firefox शिफारस) — फोनवर किंवा संगणकावर.\n• एक Google account — login साठी.\n• इंटरनेट कनेक्शन.\n• (पर्यायी) MIT AI2 Companion app — Phone वर; यामुळे realtime phone preview.\n\nहे सगळं फोनवरच असू शकतं — म्हणूनच हे phone-first शिक्षणासाठी परिपूर्ण.\n\nजर फोनवरुन काम करत असाल:\n\t• Chrome वापरा.\n\t• कीबोर्ड व छोट्या screen चा आकार लक्षात ठेवा — design थोडी लहान दिसेल पण चालते.\n\nसमजा काही हालचाल होत नाही किंवा page अडतो — तर refresh करा, इतकाच उपाय.",
      },
      {
        title: "खाते तयार करा व लॉगिन करा",
        content: "पायरी १ — Browser मध्ये जा: ai2.appinventor.mit.edu\nपायरी २ — Create apps! बटण दाबा. Google account ने login होईल.\nपायरी ३ — पहिल्यांदा Terms of Service स्वीकारा.\n\nApp Inventor तुमचे projects account मध्ये जतन करते. Dashboard वर My Projects, Start new project, Tutorials दिसतात.\n\nकाही वेळा परवानगी विचारली जाते — नुसतं Continue दाबा.",
      },
      {
        title: "नवीन project सुरू करणे",
        content: "प्रत्येक app हा एक project असतो. नवीन बनवण्यासाठी:\n\n१) Dashboard वर Start new project दाबा.\n२) नाव लिहा — शब्द आणि अंक ठीक, जागा (space) नको (उदा. HelloApp) आणि OK.\n३) App Inventor तुम्हाला Designer view मध्ये घेऊन जाते.\n\nनाव देताना जागरूक: English अक्षरांतूनच नाव चालते; अप्पर/लोअर केस सगळे चालते.\n\nएकदा project तयार झाला की Save ने तो जतन होतो (Ctrl+S किंवा आपोआप).\n\nअनेक projects निरनिराळे असतात — ह्यावरून एक धडा: प्रत्येक app स्वतंत्र project; आणि project ला अर्थपूर्ण नाव द्या — नंतर ओळखणे सोपे जाते.",
      },
      {
        title: "Designer विरुद्ध Blocks — दोन खिडक्या",
        content: "App Inventor चे TWO views:\n\n१) Designer view — UI ठरवता: buttons, labels, images ठेवता. Palette (डावीकडे) — घटकांची यादी; Viewer (मध्ये) — screen; Components (उजवी) — ठेवलेले; Properties (खाली) — गुणधर्म.\n\n२) Blocks view — Blocks बटण दाबा. येथे logic जोडता येते. Blocks रंगांनी विभागलेले (Control=निळा, Math=हिरवा, Text=पिवळा). ते puzzle सारखे बसवतात.\n\nनियम: Block जागी बसल्यावर आवाज येतो. लहान-लहान बदल करा, मग test करा.",
      },
      {
        title: "Palette, Components tree व Properties",
        content: "Palette मध्ये User Interface उघडा → Button घटक drag करा Viewer मध्ये. Label सुद्धा drag करा. Components tree मध्ये ते दिसतात.\n\nProperties (उजवीकडे):\n\t• Text — बटणावरचा मजकूर (उदा. Press Me).\n\t• BackgroundColor — रंग.\n\t• Width / Height — px किंवा Fill parent.\n\t• FontSize — अक्षराचा आकार.\n\t• Visible — लपवणे/दाखवणे.\n\nProperty फक्त निवडलेल्या component वरच लागू होते — कोण निवडला आहे Components tree मध्ये बघा.",
      },
      {
        title: "MIT AI2 Companion — फोनवर live preview",
        content: "फोनवर Play Store वरून MIT AI2 Companion install करा. browser मध्ये Connect → AI Companion → QR कोड दिसेल. फोनवर Companion app उघडा → Scan QR code. दोन्ही एकाच WiFi वर असावे लागते.\n\nConnection अडल्यास: दोन्ही एकाच network वर ठेवा, Companion app अपडेट असू द्या, कधीकधी QR पुन्हा scan करा.\n\nहा live preview फायदा — design बदलताच फोनवर दिसते! हेच शिकण्याची ताकद.",
      },
      {
        title: "पहिला छोटा अॅप — हॅलो बटण",
        content: "Label + Button = हॅलो! app बनवूया.\n\nDesigner: Label ठेवा — Text = 'तू क्लिक केलेस!' FontSize=24, केंद्र. Button ठेवा — Text = 'दाबा', मोठा. Screen1.Title द्या — HelloApp.\n\nBlocks: Button1 चा when Button1.Click block drag करा. त्यात Label1 चा set Label1.Text to block ठेवा. Text 'दाबले!' लिहा.\n\nConnect → AI Companion → फोनवर बटण दाबा — लेबल बदलले! हा pattern — event + change — हेच बहुतेक apps चे मूलभूत आहे.\n\nReset बटण जोडा जे लेबल रिकामे करते.",
      },
      {
        title: "परवानग्या व सवयी (शिकण्याच्या)",
        content: "App बनवताना काही सवयी बाळगा:\n\n• लहान टप्पे: एक बदल → test → मग पुढील. यामुळे बग आल्यास source लगेच सापडतो.\n• Save As करत रहा — project च्या प्रति बनवा; आवृत्त्या ठेवता येतात.\n• नाव अर्थपूर्ण द्या — नंतर ओळखणे सोपे.\n• ▶ (Play) बटण फोनवर app लगेच चालवण्यासाठी.\n\nहे सर्व version management ची सवय देते — जी नंतर developer म्हणून कामी येते.\n\nएकदा हा पाठ आत्मसात झाला की पहिला app तयार — पुढील पाठात घटकांचे खोल ज्ञान.",
      },
    ],
    practiceQuestions: [
      "तुमच्या फोनवर MIT AI2 Companion install करा व QR स्कॅन करून एक्सप्लोर करा.",
      "नवीन project नाव द्या — उदा. MeraFirstApp.",
      "Label + Button चा हॅलो अॅप बनवा व फोनवर live test करा.",
      "Reset बटण जोडा जे लेबल रिकामे करते — त्रुटी आली तर फोटो घ्या.",
    ],
    quiz: [
      { question: "App Inventor कोणत्या browser URL वर चालते?", options: ["ai2.appinventor.mit.edu", "appinventor.google.com", "android.com", "mit.edu/apps"], correct: 0 },
      { question: "App चे दिसणारे रूप कोणत्या view मध्ये बनवतो?", options: ["Blocks", "Designer", "Properties", "Palette"], correct: 1 },
      { question: "फोनवर live preview साठी काय आवश्यक?", options: ["USB cable", "MIT AI2 Companion app", "Google Play games", "Camera"], correct: 1 },
      { question: "बटण दाबल्यावर काय होते हे ठरवणाऱ्या block ला काय म्हणतात?", options: ["Property", "Event", "Component", "Screen"], correct: 1 },
      { question: "नवीन project चे नाव कसे द्यावे?", options: ["फक्त मराठी", "जागेसह", "बिना spaceचे English नाव", "emojis"], correct: 2 },
    ],
    related: ["android-basics", "app-inventor-components", "html-basics"],
    prev: "android-basics",
    next: "app-inventor-components",
  },

  {
    slug: "app-inventor-components",
    categoryId: "android",
    title: "App Inventor Components - घटक",
    marathiTitle: "App Inventor घटक — button, label, layout व events",
    level: "beginner",
    minutes: 25,
    summary: "App बनवण्याचे मूलभूत ब्लॉक: UI घटक (button, label, textbox), layouts, आणि दिसत न दिसणारे घटक (notifier, clock, tinydb). कोणता घटक निवडायचा व properties कसे नियंत्रित करायचे हे समजून घ्या.",
    sections: [
      {
        title: "घटक म्हणजे काय?",
        content: "App Inventor मध्ये तुम्हाला तयार ब्लॉक्ससारखे घटक (components) मिळतात. प्रत्येक घटकाचा एक देखावा, काही properties आणि काही events असतात.\n\nघटक दोन वर्गात:\n\n१) Visible (UI) — screen वर दिसतात: Button, Label, TextBox, Image, ListView, Slider.\n२) Non-visible — कोडमध्ये काम करतात, पण screen वर दिसत नाहीत: Notifier, Clock, Sound, TinyDB, Accelerometer.\n\nNon-visible component निवडल्यावर viewer मध्ये एक लहान icon दिसतो — तो तुम्हाला कळवतो की घटक तिथे आहे.\n\nकोणता घटक कोणत्या कामासाठी हेच आजचे मुख्य धडे. गोंधळ झाल्यास palette मध्ये प्रत्येक component चे मायक्रो वर्णन आहे.\n\nआपण सुरुवात 5 घटकांपासून करू — ते समजले की बाकीचे स्वतः शिकता येतात.",
      },
      {
        title: "Button — सर्वात महत्त्वाचा घटक",
        content: "Button हा 'press करा आणि घडू दे' घटक. वापरकर्ता टॅप करतो, event घडतो.\n\nProperties: Text, BackgroundColor, Shape (rounded/rectangle/oval), Enabled (false = निष्क्रिय).\n\nEvents: when Button.Click (टॅप), when Button.LongClick (जास्त वेळ), when Button.TouchDown/TouchUp.\n\nUse: when Button.Click do set Label.Text to 'धन्यवाद!'\n\nबटणाची शक्ती: वापरकर्ता आणि logic यांच्यातला दुवा. बटण नसेल तर app मध्ये वापरकर्त्याचा सहभागच नसतो.",
      },
      {
        title: "Label आणि TextBox — सूचना व input",
        content: "Label — फक्त दाखवण्यासाठी; TextBox — वापरकर्त्याने लिहिलेलं घेण्यासाठी.\n\nLabel Properties: Text, TextColor, FontBold, FontSize, Visible, TextAlignment.\nTextBox Properties: Hint (रिकामे असताना संकेत), Text, NumbersOnly, Password, Multiline.\n\nLabel + TextBox हे जोडी असतात: प्रश्न (label) → उत्तर (textbox). Calculator मध्ये TextBox (NumbersOnly) वापराल.",
      },
      {
        title: "Layouts — Horizontal, Vertical, Table",
        content: "घटक व्यवस्थित ठेवण्यासाठी layout घटक लागतात. App Inventor मध्ये तीन:\n\n• HorizontalArrangement — घटक एका ओळीत (डावीकडून उजवीकडे).\n\tउदा. संख्या बटणांच्या ओळी.\n• VerticalArrangement — घटक एका स्तंभात (वरून खाली).\n\tउदा. login फॉर्म.\n• TableArrangement — rows आणि columns (grid).\n\tउदा. कॅल्क्युलेटर नंबरपॅड.\n\nProperties: Width/Height — Fill parent वा pixel; Align horizontal/vertical.\n\nमहत्त्वाचा नियम: ज्या arrangement मध्ये घटक ठेवले, त्या arrangement चा child तो घटक; असच Components tree मध्ये दिसते.\n\nलाइव्ह: calculator मध्ये TableArrangement उपयोगी पडेल. आताच सराव — VerticalArrangement मध्ये वर label, मध्ये textbox, खाली button — login सारखी रचना.",
      },
      {
        title: "इतर UI घटक — Image, ListView, Slider",
        content: "आणखी उपयोगी:\n\n• Image — चित्र दाखवते. Properties: Picture (URL किंवा upload), ScalePictureToFit.\n\tचित्र किंवा logo. जर picture URL असेल तर internet लागतो.\n• ListView — अनेक items ची सपाट यादी. ItemsFromString या property ने items दिले जातात; item निवडल्यावर when ListView.AfterPicking event.\n• Slider — min/max value ची पट्टी; slider position नुसार value बदलते.\n\tइमेज ब्राइटनेस, volume settings सारखे उपयोग.\n• CheckBox — हो/नको निवड; boolean value.\n• Spinner — dropdown यादीतून निवड; when Spinner.AfterSelecting event.\n\nयांपैकी केवळ तेच घटक निवडा जे app ला हवे — हे 'least UI' तत्त्व — app सोपं राहतं, बग कमी.\n\nआताची सराव: Image घटकासाठी gallery मधील चित्र upload करा आणि Size to Fit ने पहा.",
      },
      {
        title: "Non-visible घटक — Notifier, Clock, TinyDB",
        content: "हे घटक दिसत नाहीत, पण app ची ताकद येथेच आहे.\n\n• Notifier — ShowAlert, ShowMessageDialog, ShowChooseDialog.\n• Clock — TimerInterval (ms) ने Timer event; कालगणना, stopwatch साठी.\n• TinyDB — StoreValue/GetValue; app बंद केल्यावरही data राहतो (high score, settings).\n• Sound — Play/Vibrate. AccelerometerSensor — फोन हलवणे ओळखतो.\n\nNon-visible घटक Components tree मध्ये दिसतात, पण viewer मध्ये नाही.",
      },
      {
        title: "Events विरुद्ध Properties — संवादाची भाषा",
        content: "घटकांच्या जगात संवादाचे दोन प्रकार:\n\nProperties = स्थिती — किती मोठा, कोणता रंग, काय मजकूर. तुम्ही आधी सेट करता, नंतर बदलता.\n\nEvents = घटना — क्लिक झालं, फोटो निवडला. एका block चा गाभा: when <घटक>.<घटना> do <बदल>.\n\nउदा. when Button1.Click → set Label1.Text to 'दाबले'.\n\nतीन महत्त्वाचे नियम:\n\t१) घटना block मधील घटक त्या नावाचाच (Component name) असेल — नाहीतर blocks चालत नाहीत.\n\t२) set property block ने दुसऱ्या घटकाची property बदलता येते — पण घटक निवडूनच करा.\n\t३) कोणताही बदल करण्यापूर्वी design नीट ठरवा.\n\nहे event-driven programming — आजकालच्या बहुतेक apps चा आधार.",
      },
      {
        title: "Blocks — Variables (चल)",
        content: "Variables = app च्या memory मधील नाव असलेले बॉक्स. संख्या, मजकूर किंवा यादी साठवता येते.\n\nBlocks:\n\t• initialize global <नाव> to <मूल्य> — सुरुवातीचे मूल्य.\n\t• set global <नाव> to <नवीन मूल्य> — बदल.\n\t• get global <नाव> — मूल्य वापर.\n\nउदा. score variable:\n\tinitialize global score to 0\n\twhen Button1.Click → set global score to (get global score + 1)\n\t→ set Label1.Text to (join 'Score: ' (get global score))\n\nVariables Blocks विभागात आहेत. नाव अर्थपूर्ण द्या — score, count, questionIndex.",
      },
      {
        title: "Blocks — Conditions आणि Loops",
        content: "Condition (जर-तर):\n\t• if <condition> then ... else ...\n\t• blocks: =, ≠, >, <, and/or, not.\n\tउदा. if (get global score > 10) then set Label... else set Label...\n\nLoops:\n\t• for each (number from 1 to 10) — नियत संख्येच्या वेळा.\n\t• for each (item in list) — list च्या प्रत्येक item साठी.\n\t• while (condition) — जोपर्यंत condition खरे.\n\nजागरूकता: infinite loop मुळे app अडकू शकते — लूप व्यवस्थित नियंत्रित ठेवा.\n\nयांचा उपयोग: quiz app — उत्तर तपासणी condition ने; यादी फिरवणे loop ने.",
      },
      {
        title: "सारांश — आज काय शिकलो",
        content: "आज शिकलो:\n\t• Visible व non-visible घटकांची ओळख.\n\t• Button, Label, TextBox — मूलभूत त्रिकूट.\n\t• Arrangement layout ची रचना.\n\t• Notifier, Clock, TinyDB — non-visible शक्ती.\n\t• Events-Properties संबंध; variables; conditions/loops.\n\nहे सर्व एकत्र आल्यावर तुम्ही मूळ app बनवू शकाल.\n\nआताचं small project: एक Login Demo\n\t• VerticalArrangement + Label + TextBox + Button + Notifier.\n\t• Button click → if textbox text == '1234' then Notifier alert 'यश' else 'पुन्हा प्रयत्न करा'.\n\nहा सोपा प्रोजेक्ट करून पहा — झाले की next tutorial मध्ये calculator बनवू.",
      },
    ],
    practiceQuestions: [
      "एक Login Demo अॅप बनवा — textbox मध्ये 1234 टाईप करून button दाबल्यावर Notifier यश दाखवतो.",
      "TinyDB मध्ये एक नाव जतन करा व दुसऱ्या वेळी पुन्हा मिळवा.",
      "Clock घटक वापरून एक stopwatch अॅप तयार करा.",
      "HorizontalArrangement मध्ये 3 बटणांचा row बनवा व प्रत्येक बटणावर वेगळे text change करा.",
    ],
    quiz: [
      { question: "screen वर दिसणार नाही पण व्यवस्था नियंत्रित करणारा घटक कोणता?", options: ["Notifier", "Label", "Image", "TextBox"], correct: 0 },
      { question: "कोणत्या layout मध्ये घटक rows आणि columns मध्ये ठेवतात?", options: ["HorizontalArrangement", "TableArrangement", "VerticalArrangement", "None"], correct: 1 },
      { question: "वापरकर्त्याकडून टाईप करून input घेणाऱ्या घटकाला काय म्हणतात?", options: ["Label", "Image", "TextBox", "Notifier"], correct: 2 },
      { question: "app बंद केल्यावरही डेटा ठेवणाऱ्या घटकाचे नाव?", options: ["TinyDB", "Clock", "Sound", "Slider"], correct: 0 },
      { question: "for each (number from 1 to 5) — किती वेळा चालणार?", options: ["1", "4", "5", "10"], correct: 2 },
    ],
    related: ["app-inventor-setup", "app-inventor-calculator", "js-functions"],
    prev: "app-inventor-setup",
    next: "app-inventor-calculator",
  },

  {
    slug: "app-inventor-calculator",
    categoryId: "android",
    title: "App Inventor Calculator - कॅल्क्युलेटर बनवा",
    marathiTitle: "Calculator अॅप — नंबरपॅड, ऑपरेटर आणि गणना",
    level: "intermediate",
    minutes: 30,
    summary: "आता एक पूर्ण कार्यशील Calculator app बनवूया — display, नंबर बटणे, + − × ÷ ऑपरेटर, दशांश गणना आणि त्रुटींचे नियंत्रण. variables आणि functions चा संपूर्ण practice.",
    sections: [
      {
        title: "कॅल्क्युलेटर — पहिला खरा आराखडा",
        content: "साधा पण पूर्ण कॅल्क्युलेटर बनवणार आहोत.\n\nFeatures: Display (मोठा Label), अंक 0-9, दशांश बिंदू, + − × ÷, = बटण, C (क्लिअर), ⌫ (एक अंक मागे).\n\nArchitecture: तीन global variables — firstNumber, operator, displayText. प्रत्येक अंक दाबल्यावर displayText ला जोडला जातो. ऑपरेटर दाबला की firstNumber मध्ये current display ची संख्या साठवतो. = दाबल्यावर गणना होते.",
      },
      {
        title: "Design — display आणि नंबरपॅड",
        content: "Designer मध्ये: Screen1.Title = 'Calculator'.\n\nDisplay: Label1 — Text = '0', FontSize = 40, TextAlignment = 2 (उजवीकडे), Width = Fill parent.\n\nLayout:\n\t• Row1 Horizontal: C, ⌫, ÷, ×\n\t• Row2 Horizontal: −, +, =\n\t• TableArrangement: 7 8 9 / 4 5 6 / 1 2 3 / 0 . =\n\t• प्रत्येक बटणाला: Shape rounded, FontSize 24.",
      },
      {
        title: "अंकांची बटणे — display वर लिहा",
        content: "Procedure appendDigit:\n\tif displayText == '0' then set global displayText to digit\n\telse set global displayText to join displayText, digit\n\tset Label1.Text to get global displayText\n\nप्रत्येक बटणावर: when Button.Click do call appendDigit '1' इत्यादी.\n\nएकच procedure सर्व अंकांसाठी — हेच code reusability ची पहिली पायरी.",
      },
      {
        title: "ऑपरेटर ठेवणे — variables चा प्राण",
        content: "+ किंवा − दाबल्यावर current display value आणि operator लक्षात ठेवायचे:\n\nprocedure storeOperator op:\n\tset global firstNumber to (number of displayText)\n\tset global operator to op\n\tset global displayText to '0'\n\tset Label1.Text to '0'\n\nप्रत्येक ऑपरेटर बटणावर call storeOperator '+', call storeOperator '−' इत्यादी. दुसरा अंक टाईप करताना display रिकामा दिसतो — नवीन नंबरच्या तयारीसाठी.",
      },
      {
        title: "गणनाचा गाभा — procedure calculate",
        content: "= दाबल्यावर गणना:\n\nprocedure calculate:\n\tset global secondNumber to number of current display\n\tif operator == '+' then set global result to firstNumber + secondNumber\n\telse if operator == '−' then result = firstNumber − secondNumber\n\telse if operator == '×' then result = firstNumber × secondNumber\n\telse if operator == '÷' then result = firstNumber ÷ secondNumber\n\tset Label1.Text to result; displayText = result; firstNumber = result\n\nमहत्त्व: if operator != '' then ... केवळ तेव्हाच गणना करा. operator = '' करा — chain गणना चालेल (5 + 3 = 8, मग + 2 = 10).",
      },
      {
        title: "दशांश बिंदू आणि शून्य",
        content: "दशांश (decimal) बटण: फक्त एकदाच बिंदू असावा — 3.14 मध्ये एकच बिंदू.\n\n\tif displayText contains '.' then nothing\n\telse call appendDigit '.'\n\nच्या '0' बटणासाठी: सुरुवातीला display '0' असेल तर 0 जोडण्याची गरज नाही (005 → 5). आपल्या appendDigit प्रक्रियेत हा नियम आधीच आहे — '0' दिसत असताना तो number ने बदलतो.\n\nहे लहान नियम अचूकता देतात. Calculator मध्ये edge cases होऊ देत नाही — हेच बग घालवण्याची सवय.\n\nसराव: एकदा 5.5 + 4.5 = 10.0 येतंय का बघा. बिंदू बटण एकापेक्षा जास्त बिंदू येऊ देत नाही.",
      },
      {
        title: "C आणि ⌫ — सुधारणा",
        content: "C (क्लिअर): firstNumber = 0, operator = '', displayText = '0', Label1.Text = '0'. एकच procedure clearAll बनवा.\n\n⌫ (एक अंक मागे): जर displayText ची लांबी 1 असेल तर '0', नाहीतर substring 1 ते length−1. उदा. '123' → '12' → '1' → '0'.\n\nयासाठी Text length आणि substring blocks आहेत — usability वाढवतात.",
      },
      {
        title: "शून्याने भागाकार आणि इतर त्रुटी",
        content: "÷ 0 करताना Notifier ने सुंदर संदेश:\n\ncalculate मध्ये: if operator == '÷' and secondNumber == 0 then call Notifier1.ShowAlert 'शून्याने भागाकार शक्य नाही' (गणना रद्द).\n\nNon-visible Notifier घटक जोडा. इतर त्रुटी: ऑपरेटर निवडल्याशिवाय = दाबले — condition ने prevent; display रिकामा — '0' नियमाने; मोठा परिणाम — App Inventor handle करतो.\n\nत्रुटी नियंत्रण (error handling) हे professional app चे वैशिष्ट्य.",
      },
      {
        title: "टेस्टिंग — प्रत्येक बटण तपासा",
        content: "App बनवल्यावर प्रत्येक function तपासा:\n\n\t• 1 + 2 = 3\n\t• 9 − 7 = 2\n\t• 4 × 5 = 20\n\t• 10 ÷ 2 = 5\n\t• 0.5 + 0.5 = 1\n\t• 7 ÷ 0 → error message\n\t• chain: 5 + 3 = 8, + 2 = 10\n\t• 00, 05 सारखे नंबर — display नीट?\n\nबग आढळल्यास: कोणता टप्पा चुकला ते पहा, तात्पुरता label लावून variable value दाखवा. हे टेस्टिंग नियमित करा — हीच डेव्हलपरची सवय.",
      },
      {
        title: "सारांश आणि पुढे",
        content: "आज आपण संपूर्ण calculator बनवला:\n\t• UI design — display + नंबरपॅड.\n\t• variables firstNumber, operator, displayText.\n\t• procedures appendDigit, storeOperator, calculate, clearAll.\n\t• दशांश व शून्य edge cases.\n\t• त्रुटी नियंत्रण (÷0).\n\t• टेस्टिंग प्रॅक्टिकल.\n\nहा app फोनवर install करा व एक आठवडा वापरा. मग सुधारणा करत राहा:\n\t• % बटण.\n\t• ± (साइन) बटण.\n\t• history.\n\nपुढील पाठ: quiz app — lists, loops, scoring — सगळे शिकू.",
      },
    ],
    practiceQuestions: [
      "Calculator मध्ये % (टक्के) बटण जोडा आणि test करा: 50 % 10 = 5?",
      "चार ऑपरेटरबद्दल एकच procedure वापरून दाखवा — reusability कशी होते?",
      "displayText मध्ये दशांश एकापेक्षा जास्त न येण्याची व्यवस्था verification करा.",
      "एक अतिरिक्त बटण ± (साइन टॉगल) जोडा — 5 → −5.",
    ],
    quiz: [
      { question: "कोणता variable सध्याचा दिसणारा मजकूर साठवतो?", options: ["firstNumber", "operator", "displayText", "result"], correct: 2 },
      { question: "procedure म्हणजे काय?", options: ["एक घटक", "पुन्हा वापरता येणारा block गट", "एक property", "एक screen"], correct: 1 },
      { question: "दशांश बिंदू फक्त एकदाच यावा म्हणून काय तपासतो?", options: ["displayText '0' आहे का", "displayText मध्ये बिंदू आहे का", "number शून्य आहे का", "operator रिकामा आहे का"], correct: 1 },
      { question: "शून्याने भागाकार केल्यावर काय दाखवावे?", options: ["crash", "Infinity", "Notifier error message", "रिकामा display"], correct: 2 },
      { question: "5 + 3 = 8 नंतर + 2 दाबल्यावर 10 यावे — यासाठी काय करावे?", options: ["firstNumber ला result मध्ये ठेवा", "displayText रिकामा करा", "Notifier वापरा", "दुसरे screen"], correct: 0 },
    ],
    related: ["app-inventor-components", "app-inventor-quiz", "js-functions"],
    prev: "app-inventor-components",
    next: "app-inventor-quiz",
  },

  {
    slug: "app-inventor-quiz",
    categoryId: "android",
    title: "App Inventor Quiz - Quiz अॅप बनवा",
    marathiTitle: "Quiz अॅप — प्रश्नांची यादी, स्कोअर आणि पडदे",
    level: "intermediate",
    minutes: 30,
    summary: "प्रश्नांची यादी असलेला, screens चालवणारा, scoring करणारा Quiz app बनवू — lists, indexes, conditions, TinyDB high score. हेच real app बनवण्याची गुरुकिल्ली.",
    sections: [
      {
        title: "Quiz अॅप — आराखडा",
        content: "क्विझ अॅपचे नमुना flow:\n\t1. सुरुवातीचा screen — सुरु करा बटण.\n\t2. प्रश्न screen — प्रश्न + 4 पर्याय बटणे.\n\t3. उत्तर दिल्यावर — बरोबर/चूक feedback.\n\t4. पुढील बटण — next प्रश्न.\n\t5. शेवटी — score screen.\n\nयासाठी तीन screens बनवू — Screen1 (सुरुवात), Screen2 (प्रश्न), Screen3 (निकाल).\n\nApp Inventor मध्ये प्रत्येक screen म्हणजे वेगळा संग्रह; screen बदलणे म्हणजे Open another screen with start value block.\n\nआराखडा ठरल्यावर घटक योग्य ठिकाणी ठेवा. महत्त्वाचे: variables चे व्यवस्थापन — screen बदलल्यावर global variables सर्व screen ला दिसत नाहीत. म्हणून प्रश्नांची यादी एका ठिकाणी ठेवून मूल्ये screen दरम्यान start value ने पाठवा.",
      },
      {
        title: "प्रश्नांची यादी — Lists आणि blocks",
        content: "प्रश्न एका list मध्ये ठेवा — प्रत्येक प्रश्न स्वतःची list:\n\n\tinitialize global questions to list (\n\t  list ('Android कोणत्या kernel वर?', 'Linux', 'Windows', 'macOS', 'iOS'),\n\t  list ('APK म्हणजे काय?', 'पॅक', 'फोटो', 'भाषा', 'Browser'),\n\t  list ('Play Store कोणाचा?', 'Google', 'Apple', 'Microsoft', 'Samsung')\n\t)\n\nदुसऱं: currentIndex variable, 1 पासून. procedure showQuestion: Label1.Text = item at currentIndex of questions मधील पहिल्या item; पर्याय बटणांवर योग्य उत्तर आणि बाकी items ठेवा.",
      },
      {
        title: "प्रश्न screen — UI तयार करा",
        content: "Screen2 मध्ये ठेवा:\n\t• Label1 — प्रश्न (bold, fontSize 20, केंद्र).\n\t• Button1..Button4 — पर्याय (पूर्ण रुंदी, उभे stacked).\n\t• Label2 — प्रतिसाद (बरोबर/चूक).\n\t• Button5 — पुढील →.\n\t• Counter Label — 'प्रश्न 1/5' सारखा.\n\nसर्व घटक VerticalArrangement मध्ये ठेवा.\n\nScreen2 च्या when Screen2.Initialize event मध्ये call showQuestion — screen उघडली की प्रश्न दिसेल.\n\nScreen2 च्या Properties मध्ये Title द्या — 'प्रश्न'.\n\nComponents ला अर्थपूर्ण नाव द्या — ऑपशन बटणांसाठी खुलासा नाव वापरा — मग blocks वाचणे सोपे.",
      },
      {
        title: "उत्तर तपासणे — conditions",
        content: "जेव्हा वापरकर्ता पर्याय दाबतो, बरोबर की चूक तपासा.\n\nप्रत्येक पर्याय बटण: when Option1.Click → call checkAnswer 'Linux'.\n\nprocedure checkAnswer selected:\n\tset correctAnswer to item 2 of (item currentIndex of questions)\n\tif selected == correctAnswer then increment score; Label2.Text = 'बरोबर!'\n\telse Label2.Text = join 'चूक! उत्तर: ' correctAnswer\n\t(पर्याय बटणे disable — enabled=false)\n\nVariable score: initialize global score to 0. हे feedback वापरकर्त्याला लगेच कळवते.",
      },
      {
        title: "पुढील बटण — प्रगती",
        content: "पुढील दाबल्यावर:\n\n\twhen NextButton.Click\n\t  if currentIndex < length of questions then\n\t    set global currentIndex to currentIndex + 1\n\t    call showQuestion; Label2.Text = ''\n\t    (पर्याय बटणे पुन्हा enabled)\n\t  else open another screen Screen3 with start value (get global score)\n\nOpen another screen block 'Control' मध्ये — value सोबत पाठवण्यासाठी with start value block.",
      },
      {
        title: "निकाल screen — स्कोअर पाठवा",
        content: "Screen3 मध्ये: Label1 — 'तुमचा स्कोअर:', Label2 — स्कोअर आकडा, Label3 — प्रशंसा, Button1 — 'पुन्हा खेळा' → Screen1.\n\nscreen दरम्यान मूल्य पाठवणे: Screen2 → open another screen Screen3 with start value score. Screen3.Initialize → get start value → Label2.\n\nLabel3 condition: if score == total then 'परिपूर्ण!' else if score > half then 'चांगलं!' else 'पुन्हा प्रयत्न करा'. हा screens चा दुवा — blocks ने मूल्ये एका screen वरून दुसऱ्यात.",
      },
      {
        title: "TinyDB — high score जतन करा",
        content: "सर्वोच्च स्कोअर (high score) जतन करणे — TinyDB वापरून:\n\nScreen3 Initialize मध्ये:\n\t• previous best = TinyDB.GetValue ('best', 0)\n\t• जर score > best तर TinyDB.StoreValue 'best', score\n\t• Label: 'उत्तम स्कोअर: ...'\n\nTinyDB हा app चा internal storage — app बंद केल्यावरही data राहतो. App uninstall/reinstall केल्यावर data गेलेला (हे per-app storage आहे).\n\nहे quiz आकर्षक बनवते — एक प्रकारची स्पर्धा निर्माण होते.\n\nआणखी ideas: प्रश्न यादी randomize करणे; चुकलेल्या प्रश्नांची यादी ठेवणे.",
      },
      {
        title: "टेस्टिंग व सुधारणा",
        content: "Quiz app ची test cases:\n\t• सगळे प्रश्न उत्तर द्या — प्रवाह पूर्ण होतो का.\n\t• बरोबर/चूक outcomes वरील scores.\n\t• शेवटच्या प्रश्नानंतर पुढील दाबल्यावर result screen.\n\t• पुन्हा खेळल्यावर score reset — सुरुवातीच्या screen वर गेल्यावर score पुन्हा initialize.\n\t• High score storage स्थिर.\n\nजर high score जुना राहिला असेल तर screen1.Initialize मध्ये score reset करा.\n\nएक आकर्षक addition — प्रति प्रश्न टाइमर, ज्यासाठी Clock घटक.",
      },
      {
        title: "सारांश",
        content: "इथे आपण quiz app बनवला:\n\t• lists आणि nested lists — data संरचना.\n\t• currentIndex, score — state management.\n\t• events + conditions — उत्तर तपासणी.\n\t• screens दरम्यान मूल्य पाठवणे.\n\t• TinyDB जतन.\n\t• testing.\n\nहीच कौशल्ये कोणत्याही real app मध्ये लागतात — data, state, screens, storage.\n\nपुढील पाठ: तुमचा बनवलेला app फोनवर कसा install व share करायचा.",
      },
    ],
    practiceQuestions: [
      "तुमच्या Quiz मध्ये 5 प्रश्न जोडा — प्रत्येक प्रश्नासाठी 4 पर्याय.",
      "चुकीच्या उत्तरानंतर फक्त बरोबर उत्तर दाखवण्याची सुविधा जोडा.",
      "High score label Screen3 वर दाखवा आणि एकदा score हरल्यावर काय होतं ते पहा.",
      "प्रश्न यादी randomize करण्याचा विचार करा — research करा.",
    ],
    quiz: [
      { question: "प्रश्न data कोणत्या संरचनेत ठेवला?", options: ["Variable", "List of lists", "Label", "Button"], correct: 1 },
      { question: "वर्तमान प्रश्नाचा क्रमांक कोणत्या variable मध्ये?", options: ["score", "currentIndex", "loop", "answer"], correct: 1 },
      { question: "उत्तर बरोबर असल्यास score कसे वाढवतात?", options: ["Label", "set score to score + 1", "Notifier", "Screen"], correct: 1 },
      { question: "Screen3 ला score कसे पाठवतात?", options: ["TinyDB फक्त", "start value सह open another screen", "Label", "TextToSpeech"], correct: 1 },
      { question: "सर्वोच्च स्कोअर कायमस्वरूपी कसे ठेवायचे?", options: ["Label", "TinyDB.StoreValue", "Notifier", "Clock"], correct: 1 },
    ],
    related: ["app-inventor-calculator", "app-inventor-share", "python-lists"],
    prev: "app-inventor-calculator",
    next: "app-inventor-share",
  },

  {
    slug: "app-inventor-share",
    categoryId: "android",
    title: "App Inventor Share - अॅप Install व Share",
    marathiTitle: "तुमचा अॅप install करा व share करा",
    level: "beginner",
    minutes: 20,
    summary: "App Inventor मध्ये बनवलेले app फोनवर नेणे, install करणे, सुरक्षित share करणे आणि भविष्यात Play Store वर प्रकाशित करण्याची तयारी.",
    sections: [
      {
        title: "APK — तुमच्या अॅपचा पॅक",
        content: "आठवण — APK हा Android अॅपचा संपूर्ण बॉक्स:\n\t• Compiled code.\n\t• Resources — चित्रे, layouts.\n\t• AndroidManifest — permissions व activities.\n\t• Digital signature.\n\nApp Inventor मध्ये Build मेनू APK तयार करतो. हाच बॉक्स तुम्ही फोनवर install करता.\n\nBuild menu विकल्प — दोन:\n\t• App (save .apk to my computer) — संगणकावर download.\n\t• App (give QR code) — फोनवर घेण्यासाठी QR.\n\nआपण दोन्ही पद्धती पाहू. आधीची पायरी — project जतन करा.",
      },
      {
        title: "Build करा — संगणकावर APK",
        content: "संगणकावर:\n\t1. Design वरील मेनूतील Build.\n\t2. Android App (.apk) निवडा.\n\t3. App Inventor build सुरू करतो — काही वेळ लागेल.\n\t4. पूर्ण झाल्यावर downloads मध्ये APK दिसेल.\n\nनाव आपोआप project name नुसार असते (उदा. HelloApp.apk).\n\nसमस्या आल्यास:\n\t• build वेळी error दिसला तर रीट्राय करा.\n\t• डाउनलोड होणारं file सापडत नाही? browser downloads folder पहा.\n\nहा APK कोणत्याही Android फोनवर पाठवून install होऊ शकतो — उदा. email किंवा WhatsApp द्वारे.",
      },
      {
        title: "Build करा — QR कोड",
        content: "फोनवर लगेच हवा असल्यास:\n\t1. Build मेनू → App (give QR code).\n\t2. QR कोड दिसतो.\n\t3. फोनवर QR स्कॅन करा (Google Lens किंवा camera).\n\t4. URL उघडेल → APK download आणि install.\n\nQR हा लहान पत्ता — एक वस्तू, अनेक जण download करू शकतात.\n\nलक्षात ठेवा:\n\t• QR कोड काही काळानंतर कदाचित expire होतो — नवीन generate करा.\n\t• QR फोनवर scan करून लवकर download करा.\n\nही मित्रांना app share करण्याची सरळ पद्धत.",
      },
      {
        title: "फोनवर install करणे",
        content: "Install करताना लक्षात ठेवा:\n\t1. APK फाईल download करा.\n\t2. ती उघडा — फोन विचारेल Unknown sources परवानगी.\n\t3. Allow द्या (हे दुसऱ्या स्रोतांसाठी app install ची सुरक्षा setting).\n\t4. Install दाबा — काही सेकंदात app तुमच्या list मध्ये.\n\nUnknown sources म्हणजे काय?\n\tAndroid Play Store सोडून install करण्यासाठी परवानगी मागतो. तुम्ही Play Store बाहेरून install करत असल्याने फोन विचारतो.\n\nहे सुरक्षेचे नियम आहेत — एकदाच install करण्याने काही विशेष होत नाही; फक्त नेहमी विश्वसनीय स्रोत वापरा.",
      },
      {
        title: "Play Protect — सुरक्षा तपासणी",
        content: "App install करताना Google Play Protect app scan करते:\n\t• दुर्भावनापूर्ण app ओळखल्यास warning.\n\t• install व update दरम्यान सुरक्षा तपासणी.\n\nतुमच्या बनवलेल्या app बद्दल काळजी नाही — तो छोटा व साधा app आहे; Play Protect तो नीट ओळखतो.\n\nPlay Protect settings तपासा:\n\t• Settings → Security → Play Protect.\n\t• Scan apps with Play Protect चालू ठेवा.\n\t• Improve harmful app detection चालू ठेवा.\n\nही यंत्रणा सुरक्षेचा एक थर आहे.",
      },
      {
        title: "आवृत्ती व अद्यतने",
        content: "तुमचा app v1, v2 अशात update होतो:\n\t• Project नाव वेगळे ठेवा — HelloApp_v1, HelloApp_v2…\n\t• App update (install over नवी) — Android जुन्या app वर नवी install करतो, data टिकतो.\n\t• App icon project properties मधून बदलता येतो.\n\nसुधारणा केल्यावर नवीन build करा व install करा — हाच release cycle.\n\nप्रत्येक महत्त्वाच्या सुधारणेला नवा आवृत्ती क्रमांक (version) द्या.",
      },
      {
        title: "Share करण्याच्या पद्धती",
        content: "तुमचा APK पोहोचवण्याचे मार्ग:\n\t• WhatsApp/Telegram — फाईल पाठवा.\n\t• Cloud (Google Drive) — link द्या.\n\t• QR — Build menu QR.\n\t• USB cable — संगणकातून copy.\n\nShare करताना:\n\t• प्राप्तकर्त्याने APK विश्वसनीय स्रोतांकडूनच घ्यावास हे सांगा.\n\t• App मध्ये कोणताही गुप्त data नाही याची जाणीव ठेवा.\n\t• आवृत्ती नवी असू द्या.\n\t• Antivirus काही चेतावणी देत असेल तर दुसरं माध्यम वापरा.\n\nया पद्धती developer बनण्याचा सोपा मार्ग देतील.",
      },
      {
        title: "Play Console — खरं प्रकाशन",
        content: "Play Store वर प्रकाशित करण्यासाठी (Play Console):\n\t• Google Play Console मध्ये developer account — एकदा 25 USD शुल्क.\n\t• App अपलोड करा (signed APK — App Inventor आधीच sign करतो).\n\t• तपशील — नाव, वर्णन, screenshots, icon.\n\t• Content rating form भरा (शैक्षणिक contents सहसा सोपे).\n\t• Data safety form.\n\t• Review cycle — Google तपासतो — काही दिवस.\n\t• App प्रकाशित — सर्वांना दिसेल.\n\nही पायरी मोठ्या distribution साठी. वर्णन मराठीत लिहा — स्थानिक वापरकर्त्यांना नक्की उपयोगी.\n\nप्रकाशनासाठी privacy policy URL सुद्धा लागतो — आमच्या site वर /privacy पेज आहे, तो वापरू शकता.",
      },
      {
        title: "सारांश",
        content: "आज शिकलो:\n\t• Build menu — .apk download व QR.\n\t• फोनवर install — unknown sources.\n\t• Play Protect सुरक्षा.\n\t• आवृत्ती व share पद्धती.\n\t• Play Console — प्रकाशन प्रवाह.\n\nतुमच्याकडे आता सोपा cycle आहे: बनवा → build → install → share.\n\nहा cycle नियमित वापरा — प्रत्येक नव्या बदलासाठी app अपडेट करा. पुढील पाठ: WebView — तुमची HTML website app म्हणून.",
      },
    ],
    practiceQuestions: [
      "तुमचा calculator किंवा quiz app फोनवर install करा व दुसऱ्या फोनवर share करा.",
      "Build → QR कोड वापरून एका मित्राला app पोहोचवा.",
      "Play Protect settings तपासा व ऑन स्थिती नोंदवा.",
      "Play Console चा developer account कसा तयार होतो ते research करा.",
    ],
    quiz: [
      { question: "कोणत्या menu ने APK build होतो?", options: ["Connect", "Build", "Save", "Designer"], correct: 1 },
      { question: "फोन Play Store वरून नसतं install करताना काय विचारतो?", options: ["Camera", "Unknown sources परवानगी", "Bluetooth", "GPS"], correct: 1 },
      { question: "install मधून app scan करणारी Google यंत्रणा?", options: ["Play Protect", "Google Maps", "Drive", "Lens"], correct: 0 },
      { question: "Play Store वर app प्रकाशित करण्यासाठी कोणती console?", options: ["App Store Connect", "Google Play Console", "Firebase", "GCP"], correct: 1 },
      { question: "QR कोड build कशासाठी उपयोगी?", options: ["Photos", "फोनवर सहज apk download", "Music", "Charging"], correct: 1 },
    ],
    related: ["app-inventor-quiz", "app-inventor-webview", "android-permissions"],
    prev: "app-inventor-quiz",
    next: "app-inventor-webview",
  },

  {
    slug: "app-inventor-webview",
    categoryId: "android",
    title: "App Inventor WebView - Website app म्हणून",
    marathiTitle: "WebView — तुमची HTML website app करा",
    level: "intermediate",
    minutes: 25,
    summary: "WebView घटक वापरून तुमची विद्यमान HTML/CSS/JS website आणि वेबपेज Android app म्हणून कशी package होते हे शिका — त्याच्या शक्ती आणि मर्यादांसह.",
    sections: [
      {
        title: "WebView म्हणजे काय?",
        content: "WebView हा एक घटक असतो जो तुमच्या app आत browser चालवतो — म्हणजे app मध्येच HTML page दाखवता येतो.\n\nम्हणजेच — तुम्ही आधी HTML/CSS/JS बनवलेली वेबपेज app मध्ये embed करू शकता! (web series मध्ये शिकलेल्या गोष्टी आता इथे वापरता येतात!)\n\nWebView कधी उपयोगी?\n\t• तुमच्या व्यवसाय/साइटचे mobile wrapper.\n\t• वेगवेगळ्या वेबसाइटची app रूपे — native rebuild न घेता.\n\t• जलद prototipo.\n\nहे lightweight app बनवण्याचा त्वरित मार्ग — पण त्याची मर्यादा पुढे बघू.",
      },
      {
        title: "WebView घटक जोडा",
        content: "Designer मध्ये:\n\t1. Palette → User Interface → WebView drag करा.\n\t2. Properties:\n\t   • URL — page चा पत्ता (उदा. https://marathi-learn-hub.vercel.app).\n\t   • Width — Fill parent, Height — Fill parent.\n\t   • IgnoreSslErrors — चालू करू नका.\n\t   • FollowLinks — खरे; अंतर्गत links app आतच उघडतील.\n\nतेव्हा app उघडलं की website दिसते.\n\nनियंत्रण: लोड होताना 'Loading...' असे label दाखवण्यासाठी when WebView.PageStarted व PageFinished events वापरा — ही expert पातळी.\n\nहे उघडल्यावर बाहेरचा browser नाही उघडत — तुमच्या app आतच page चालते.",
      },
      {
        title: "तुमची स्वतःची website — HTML",
        content: "तुम्हाला custom page हवा असेल तर WebView साठी HTML file बनवून Media मध्ये upload करू शकता.\n\nWebView मध्ये 2 मोड:\n\t• URL — online website दाखवण्यासाठी.\n\t• HTML — embedded HTML page दाखवण्यासाठी.\n\nउदाहरण — एक लहान HTML page बनवा:\n\t<html> ... </html>\n\nहे app मध्येच राहतं — offline पण चालतं (निव्वळ HTML/CSS/JS).\n\nसमजा तुम्ही web series मधून HTML शिकलात — हे तेच skills आता app मध्ये!",
      },
      {
        title: "संबंधित HTML उदाहरण (मराठी page)",
        content: "खालील HTML एका साध्या वेबपेजचा नमुना — हेच WebView मध्ये दिसेल:\n\nहा कोड तुम्ही HTML file म्हणून save करा; Designer मध्ये Media मध्ये upload करा आणि WebView.HTML प्रॉपर्टी मध्ये द्या.",
        code: `<!DOCTYPE html>
<html lang="mr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>माझे अॅप</title>
<style>
  body { font-family: system-ui, sans-serif; text-align: center; padding: 40px; }
  .btn { background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 8px; font-size: 18px; }
</style>
</head>
<body>
  <h1>नमस्कार Marathi Learn Hub!</h1>
  <p>हे WebView app आत HTML चालत आहे.</p>
  <button class="btn" onclick="alert('बटण दाबले!');">दाबा</button>
</body>
</html>`,
        codeLanguage: "html",
        output: "या HTML page चे live output — WebView app मध्ये असेच दिसेल.",
      },
      {
        title: "बाह्य browser ला नेणे",
        content: "कधीकधी लिंक बाहेर browser मध्ये उघडायची असते:\n\twhen ButtonOpen.Click → open browser to URL\n\nWebView मध्ये 'बाहेर browser मध्ये उघडा' असे बटण दिल्यास वापरकर्त्याला नियंत्रण राहते.\n\nअशा प्रकारे in-app browser आणि external option एकत्र करणे ही आजच्या apps ची नेहमीची शैली. उदाहरण: news app — articles in-app, external links browser मध्ये.",
      },
      {
        title: "WebView च्या मर्यादा — प्रामाणिक नजर",
        content: "WebView चे फायदे समजले, पण मर्यादा:\n\t• Offline — remote URL असेल तर internet नसल्यास page लोड होत नाही (फक्त embedded HTML चालते).\n\t• Performance — जटील JS/sites native पेक्षा मंद.\n\t• Hardware access — camera/सेन्सर्स native घटकांपेक्षा मर्यादित; बऱ्याच वेळा App Inventor चे native components जास्त उपयोगी.\n\t• UX — तुमच्या site च्या mobile-friendliness वर अवलंबून.\n\t• Store rules — फक्त wrapper apps कधीकधी Play review मध्ये अडवले जातात.\n\nम्हणून निर्णय:\n\t• लहान content-centric apps — WebView उत्तम.\n\t• गंभीर interaction / camera — native घटक श्रेष्ठ.\n\nकोणती भाषा/तंत्र निवडायचं हा real developer चा प्रश्न — आज त्याची सुरुवात झाली.",
      },
      {
        title: "WebView + App Inventor native घटक",
        content: "आदर्श अनेकदा मिश्रण असतं:\n\t• screen चा काही भाग native (buttons, TinyDB, Notifier).\n\t• काही भाग WebView मध्ये.\n\nउदा. dashboard app:\n\t• वर native — logout button, profile.\n\t• खाली WebView — तुमच्या reports/simulation.\n\nblocks सोबत असे करू शकता:\n\twhen WebView.PageFinished → hide loading label\n\twhen WebView.BeforePageLoad → लिंक control\n\tWebView1.EvaluateJS('javascript code') — page मध्ये script पाठवण्यासाठी\n\nही combination technique तुम्हाला web आणि app दोन्ही वापरायला शिकवते — खूप शक्तिशाली.",
      },
      {
        title: "बिल्ड आणि पुढील पाऊल",
        content: "WebView app तयार होताच:\n\t• Build करा (आधीच्या पाठात शिकलो).\n\t• फोनवर install — app चालतंय?\n\t• URL बदलून दुसऱ्या साइटसाठी rebuild करा.\n\nटीप: URL custom असल्यास WebView मध्ये ते URL जोडून test करा.\n\nप्रगती हा खरा भाग: तुम्ही आता फक्त web नाही — web आणि app जोडत आहात!\n\nपुढील पाठ: permissions — कोणतं app काय मागतं, खरा धोका कोणता आणि सुरक्षा कशी करायची.",
      },
    ],
    practiceQuestions: [
      "तुमची कोणतीही HTML page बनवून (web series मध्ये शिकलो) फोनवर WebView app बनवा.",
      "marathi-learn-hub चा एक tutorial URL WebView मध्ये दाखवा.",
      "WebView मध्ये बाह्य browser उघडणारे बटण जोडा.",
      "तेव्हा WebView का? — एक example सांगा जेथे native घटक जास्त योग्य.",
    ],
    quiz: [
      { question: "WebView काय करतो?", options: ["कॅमेरा घेतो", "आपल्या app आत browser/HTML दाखवतो", "music चालवतो", "बॅटरी वाढवतो"], correct: 1 },
      { question: "WebView मध्ये online website कोणत्या property ने दाखवतात?", options: ["Text", "URL", "Picture", "Height"], correct: 1 },
      { question: "Embedded HTML फाईल WebView मध्ये कशी देतात?", options: ["HTML property", "Sound", "TinyDB", "Camera"], correct: 0 },
      { question: "WebView ची मुख्य मर्यादा कोणती?", options: ["remote URL offline नाही चालत", "रंग नाहीत", "आवाज नाही", "फोटो नाहीत"], correct: 0 },
      { question: "पूर्ण WebView न ठेवता बहुतेक वेळा काय वापरतात?", options: ["फक्त WebView", "native घटक + WebView mix", "फक्त Sound", "फक्त Clock"], correct: 1 },
    ],
    related: ["app-inventor-share", "html-basics", "android-permissions"],
    prev: "app-inventor-share",
    next: "android-permissions",
  },

  {
    slug: "android-permissions",
    categoryId: "android",
    title: "Android Permissions - सुरक्षा",
    marathiTitle: "Permissions व प्रायव्हसी — अॅप सुरक्षा समजा",
    level: "beginner",
    minutes: 20,
    summary: "प्रत्येक app फोनच्या camera, storage, location, contacts मागतो — पण का? कोणती permission आवश्यक, कोणती खतरनाक आणि स्वतःला कसे सुरक्षित ठेवायचे.",
    sections: [
      {
        title: "Permissions म्हणजे काय?",
        content: "जेव्हा app install करतो तेव्हा किंवा वापरताना तो फोनच्या विशेष सुविधा मागतो — camera, microphone, location, contacts, storage. यांना permissions म्हणतात.\n\nAndroid चा दृष्टिकोन:\n\t• App ला फोनच्या खाजगी भागांवर अधिकार हवा असेल तर विशेष परवानगी चाहिए.\n\t• प्रत्येक permission वेगळी — सर्व एकाच वेळी मिळत नाही.\n\nजेवढ्या कमी permissions तेवढी सुरक्षित.\n\nपुढे permissions अधिक तपशीलवार पाहू.",
      },
      {
        title: "सामान्य permissions — काय काय असतं?",
        content: "वारंवार दिसणाऱ्या permissions:\n\t• Camera — फोटो/व्हिडिओ.\n\t• Microphone — रेकॉर्डिंग, कॉल्स.\n\t• Location — GPS स्थान.\n\t• Storage — फाइल्स वाचणे/लिहणे.\n\t• Contacts — संपर्क यादी.\n\t• SMS / Call Log — संदेश व कॉल माहिती.\n\t• Battery / Network state — निरुपद्रवी प्रकार.\n\nप्रश्न असतो — संबंधित app ने अशी permission का मागितली?\n\t• Camera app → Camera permission हे नैसर्गिक.\n\t• Flashlight app → Camera ही संशयास्पद! (फक्त light व system घटक पुरे).\n\nहाच नियम: app च्या कामाशी जुळणारी permission = ठीक; न जुळणारी = धोका.",
      },
      {
        title: "Runtime permissions — Android 6+",
        content: "जुन्या Android (≤5) मध्ये install वेळी सगळ्या permissions एकदा द्याव्या लागायच्या. हे चांगलं नव्हतं.\n\nAndroid 6 (Marshmallow) पासून — runtime permission:\n\t• Install केल्यावर कोणतीही permission मिळत नाही.\n\t• App पहिल्यांदा camera वापरताना तुम्हाला विचारतो: 'Allow?'\n\t• तुम्ही Allow दिल्यासच app ती सुविधा वापरू शकतो.\n\t• प्रत्येक permission वेळेवर (जेव्हा गरज पडते) विचारली जाते.\n\nयाचा फायदा अगदी स्पष्ट — आधुनिक फोनवर प्रत्येक परवानगी तुमच्या नियंत्रणाखाली.\n\nएक उपयुक्त पर्याय: 'Allow only while using the app' — location साठी ही माझी शिफारस — background location थांबते.",
      },
      {
        title: "Least privilege — नेहमीचा नियम",
        content: "सुरक्षेचा सुवर्ण नियम — least privilege:\n\tप्रत्येक app ला फक्त त्या कामाची परवानगी द्या — कमीत कमी.\n\nउदाहरणे:\n\t• फोटो/video app → फक्त camera, storage.\n\t• कॅल्क्युलेटर → कोणत्याही permission ची गरज नाही.\n\t• टॉर्च app → camera माफ करा; लाइट करणारे system घटक पुरे.\n\nकॅल्क्युलेटर तुमच्या contacts विचारतो का? तर तो संशयास्पद app.\n\nपरवानगी नंतर काढणे:\n\t• Settings → Apps → अॅप → Permissions → नको असेल तर off.\n\t• काही permissions off केल्यास app तात्काळ बंद होऊ शकतो — ते सामान्य आहे.",
      },
      {
        title: "Play Protect व स्कॅनिंग",
        content: "विश्वासार्ह apps मध्ये ही Google यंत्रणा आहे — Play Protect, जी प्रत्येक app स्कॅन करते (Play Store किंवा बाहेरील).\n\nहे काय करतं?\n\t• हानिकारक app ओळखून warning/ब्लॉक करते.\n\t• नव्या apps ची periodic scan.\n\t• Browser मधून install करताना चेतावणी.\n\nसर्वोत्तम सवय:\n\t• Settings → Security → Play Protect → Scan apps, ON.\n\t• Improve harmful app detection, ON.\n\nPlay Protect परिपूर्ण नाही पण एक चांगला अडथळा आहे. म्हणून नेहमी जागरूक रहा.",
      },
      {
        title: "सुरक्षित install करण्याच्या सवयी",
        content: "जेव्हा तुम्ही APK install करता:\n\t१) स्रोत ओळखा — Play Store किंवा अधिकृत developer साइट.\n\t२) App काय मागतं ते पहा — permissions check.\n\t३) दोनदा विचार करा — दुर्मिळ permission असले र कमी reviews असेल तर.\n\t४) Antivirus तपासू द्या — Play Protect चालू ठेवा.\n\nबाहेरील APK हे Play Store च्या apps पेक्षा वेगळे — हे source तुम्हीच निवडता:\n\t• Unverified file — download होताना Chrome Safe Browsing चेतावणी देत असेल तर संशय.\n\t• फक्त familiar developer.\n\nही सवय सगळ्यात महत्त्वाची protection — तुमचा सर्वात मजबूत बिंदू तुम्हीच.",
      },
      {
        title: "डेटा प्रायव्हसी — app काय गोळा करतो?",
        content: "Permissions सोबत data privacy हा दुसरा कोपरा:\n\t• काही apps user data गोळा करतात — analytics, ads साठी.\n\t• Play Store वर Data safety विभाग असतो — app काय गोळा करतो ते सांगतो.\n\nविचारा स्वतःला:\n\t• हा app माझा personal data का मागतोय?\n\t• तुमच्या बाबतीत किती data गोळा होईल?\n\t• मला याचा फायदा काय?\n\nबऱ्याच requests अनावश्यक असतात — समजला की सहज नकार देता येईल.\n\nGoogle Account → Data & privacy मध्ये तुम्ही नियंत्रण करू शकता.",
      },
      {
        title: "Reviews, ratings आणि संशयाचे संकेत",
        content: "App निवडताना reviews व ratings हे तुमचे मार्गदर्शक:\n\t• कमी rating, कमी install — काळजी.\n\t• नकारात्मक review — permissions जास्त किंवा data steal — पहा.\n\t• Unknown developer नाव — संशयास्पद.\n\t• जाहिरातींसाठी प्रसिद्ध app पण permissions जास्त — संशय.\n\nसंशयाचे संकेत (red flags):\n\t• फक्त-मोफत app पण ads नाहीत — पैसे कसे येतात?\n\t• सोपा tool — पण contacts व SMS मागतो.\n\t• प्रसिद्ध app ची नक्कल (copycat).\n\nहे signal समजल्यावर तुम्ही सुरक्षित निवड करता.",
      },
      {
        title: "सारांश व सवयी",
        content: "आज शिकलो:\n\t• Permission म्हणजे app चा access; कमीत कमी आवश्यक.\n\t• Runtime permissions — Android 6+ — वेळेवर विचारतात.\n\t• Least privilege नियम.\n\t• Play Protect + reviews + red flags.\n\nरोजच्या सवयी:\n\t• नवीन app install करण्याआधी permissions check.\n\t• दुर्मिळ permission असल्यास नकार द्या.\n\t• Settings मधून वेळोवेळी permissions बघा.\n\t• दर काही दिवसांनी Play Protect scan करा.\n\nहा series संपला — तुम्ही आता app बनवू शकता, install करू शकता आणि सुरक्षित राहू शकता!",
      },
    ],
    practiceQuestions: [
      "तुमच्या फोनवरील 3 apps च्या permissions तपासा व कोणती अनावश्यक वाटतात ते लिहा.",
      "एका उपयोगी app चे red flags म्हणजे काय — ते ओळखा.",
      "Google Account → Data & privacy मधून कोणता app किती data मिळवतो ते पहा.",
      "आमचा App Inventor calculator कोणत्या permissions शिवाय चालतो — ते खरं करा.",
    ],
    quiz: [
      { question: "app ने camera मागितलं — कधी ठीक आहे?", options: ["नेहमी", "जेव्हा app camera app असेल", "कधीच नाही", "रात्री"], correct: 1 },
      { question: "Android 6+ पासून permissions कधी दिल्या जातात?", options: ["install वेळी", "app वापरताना जेव्हा आवश्यक", "प्रत्येक अपडेटला", "कधी नाही"], correct: 1 },
      { question: "Least privilege म्हणजे काय?", options: ["जास्तीत जास्त permissions", "कमीत कमी आवश्यक permissions", "सगळे apps समान", "पैसे देणे"], correct: 1 },
      { question: "कोणती यंत्रणा apps स्कॅन करते?", options: ["Play Protect", "Google Maps", "Drive", "Gmail"], correct: 0 },
      { question: "लहान टॉर्च app ने contacts मागणे हे?", options: ["ठीक", "Red flag", "सामान्य", "आनंदाचं"], correct: 1 },
    ],
    related: ["app-inventor-webview", "app-inventor-share", "computer-security"],
    prev: "app-inventor-webview",
    next: "android-tips",
  },
];