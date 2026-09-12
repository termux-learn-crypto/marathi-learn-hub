# 📚 Marathi Learn Hub

**मोफत शिका • प्रयोग करा • वाढा** — 100% Free Marathi Learning Platform. No courses, no payment, no certificate — फक्त शिकणे.

## ✨ Features

- **14 Categories** — Computer, Web, Python, Android, AI, Electronics, Electrical, Linux, Termux, Cyber Security, DIY, Digital Skills, Freelancing, General Knowledge
- **Interactive Code Editor** — Browser मध्येच HTML/CSS/JS run करा (Python output simulated; backend/Pyodide नंतर जोडता येईल)
- **Quiz System** — प्रत्येक topic नंतर quiz; scores LocalStorage मध्ये save
- **Search** — Marathi + English दोन्ही भाषांतून
- **Projects** — Step-by-step मार्गदर्शनासह
- **Progress Tracking** — Completed lessons, bookmarks, quiz scores (LocalStorage)
- **Dark/Light Mode** — Mobile-first design
- **No Login Required** — सर्व content खुले

## 🚀 Quick Start

```bash
npm install
npm run dev        # Development (http://localhost:3000)
npm run build      # Production build
npm start          # Production server
```

## ⚠️ Termux/Android Note (SWC Workaround)

Next.js uses SWC (a native binary) for compilation, but on Android/Termux the `@next/swc-android-arm64` package **doesn't exist** for Next 14. To build on Termux:

1. Install WASM SWC fallback:
   ```bash
   npm install @next/swc-wasm-nodejs@14.2.33 --no-save
   ```
   (matches the version Next 14.2.35 expects internally)

2. Patch `node_modules/next/dist/build/swc/index.js` to force WASM-first on Android:
   ```js
   // Change line ~226:
   async function loadBindings(useWasmBinary = false) {
   // to:
   async function loadBindings(useWasmBinary = PlatformName === "android") {
   ```
   (the `PlatformName` constant is already defined above)

Then `npm run build` works. This is a Termux-only issue — on a normal Linux/macOS/Windows machine you don't need this.

## 📁 Structure

```
src/
├── app/                    # Pages (App Router)
│   ├── page.tsx            # Home
│   ├── learn/              # सर्व lessons
│   ├── categories/         # सर्व categories
│   ├── tutorials/          # सर्व tutorials
│   ├── tutorial/[slug]/    # Topic detail (code, quiz, related)
│   ├── projects/           # सर्व projects
│   ├── project/[id]/       # Project detail
│   ├── quiz/               # Quiz hub
│   ├── search/             # Search (Marathi+English)
│   ├── tools/              # Binary converter, text analyzer, age calc
│   ├── notes/              # My progress + notes
│   ├── about/              # About
│   └── contact/            # Contact
├── components/             # Navbar, Footer, Cards, CodeEditor, QuizPlayer
├── data/                   # categories.ts, tutorials.ts, projects.ts
└── lib/                    # storage.ts (LocalStorage helpers)
```

## 📝 Content

सर्व content `src/data/` मध्ये आहे — नवीन tutorial/quiz/project जोडण्यासाठी तेथे entries वाढवा.

**Marathi + English** — प्रत्येक lesson मध्ये मराठी explanation + English technical terms.

## 🔮 Roadmap

- [ ] Python/backend execution (Pyodide/WebAssembly)
- [ ] Daily challenge / streaks
- [ ] Admin panel (backend + MySQL सह)
- [ ] More tools & projects

## 📱 PWA

`public/manifest.json` मध्ये PWA setup आहे — app icon/files नंतर जोडता येतील.
