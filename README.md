# 📚 Marathi Learn Hub

**मोफत शिका • प्रयोग करा • वाढा** — 100% Free Marathi Learning Platform. No courses, no payment, no certificate — फक्त शिकणे.

## ✨ Features

- **572 Marathi lessons across 14 categories** — Computer, Web, Python, Android, AI, Electronics, Electrical, Linux, Termux, Cyber Security, DIY, Digital Skills, Freelancing, General Knowledge
- **Interactive Code Editor** — Browser मध्येच HTML/CSS/JS run करा (Python output simulated; backend/Pyodide नंतर जोडता येईल)
- **Per-topic Quizzes & Scores** — प्रत्येक lesson नंतर quiz; scores LocalStorage मध्ये save
- **23 Hands-on Projects** — Step-by-step मार्गदर्शनासह
- **Search** — Marathi + English दोन्ही भाषांतून (noindex, no crawl bloat)
- **79-term Glossary** — मराठीत tech terms explained
- **Developer Tools** — Binary Converter, Text Analyzer, Age Calculator
- **Progress Tracking & Notes** — Completed lessons, bookmarks, quiz scores, personal notes (LocalStorage)
- **Dark/Light Mode** — Mobile-first, SEO-ready, PWA-installable
- **No Login Required** — सर्व content खुले

## 🚀 Quick Start

```bash
npm install
npm run dev        # Development (http://localhost:3000)
npm run build      # Production build
npm start          # Production server
```

## ⚠️ Termux/Android Note (WASM Workaround)

Next.js uses SWC (a native binary) for compilation, but on Android/Termux the native `@next/swc-*` package doesn't exist for this platform. To build on Termux the compile step runs via the WASM fallback:

1. The WASM package (must match your Next version):
   ```bash
   npm i -D "@next/swc-wasm-nodejs@15.5.25" --no-save
   ```
2. The SWC loader patch (`loadBindings` → WASM-first on Android) is applied automatically:
   ```bash
   node scripts/patch-next-swc.js
   ```
   It's also wired as a `postinstall` hook, so it re-applies after every `npm install` — no manual `node_modules` edits needed. Idempotent, and a no-op on any non-Android platform.

Then `npm run build` works. This is a Termux-only issue — on a normal Linux/macOS/Windows machine you don't need it.

## 📁 Structure

```
src/
├── app/                          # Pages (App Router)
│   ├── page.tsx                  # Home
│   ├── learn/                    # सर्व lessons
│   ├── categories/               # सर्व categories
│   ├── category/[id]/            # Category detail
│   ├── tutorials/                # सर्व tutorials
│   ├── tutorial/[slug]/          # Topic detail (code, quiz, related)
│   ├── projects/                 # सर्व projects
│   ├── project/[id]/             # Project detail
│   ├── quiz/                     # Quiz hub
│   ├── search/                   # Search (Marathi+English, noindex)
│   ├── tools/                    # Binary converter, text analyzer, age calc
│   ├── notes/                    # Progress + notes (LocalStorage, noindex)
│   ├── glossary/                 # Tech glossary
│   ├── about/                    # About
│   └── contact/                  # Contact
├── components/                   # Navbar, Footer, Cards, CodeEditor, QuizPlayer
├── data/
│   ├── categories.ts             # 14 categories
│   ├── projects.ts               # 13 projects
│   ├── glossary.ts               # 79 terms
│   └── tutorials/                # 450 lessons, organized by category
│       ├── python/               # python-level1…8
│       ├── web/html|css|js/      # 28 subject files + web-extra
│       ├── computer/             # foundation + level1
│       ├── ai/                   # ai-level1, ai-level2, ai-extra
│       ├── electronics/          # 5 level files + arduino extra
│       ├── android/              # android-level1 + extra
│       └── …                     # linux, termux, electrical, cyber,
│                                 # digital, freelancing, diy, general
├── lib/                          # site.ts, ads.ts, lesson-dates.ts, storage.ts
└── public/
    ├── icons/                    # PWA icons (192, 512)
    ├── manifest.json             # PWA manifest
    └── sw.js                     # Service worker (offline app shell)
```

## 📝 Content

सर्व content `src/data/` मध्ये आहे — नवीन tutorial/quiz/project जोडण्यासाठी:

- `src/data/tutorials/<category>/` मध्ये नवीन lesson file जोडा (`slug`, `categoryId` सह)
- `src/data/tutorials.ts` मध्ये तो file import + `tutorials` array मध्ये spread करा
- `scripts/audit-quiz.js` (duplicate slugs / quiz validity) आणि `scripts/audit-refs.js` (broken related refs) चालवा
- Quiz/related refs सर्व lessons मध्ये एकसारखे असतील याची खात्री करा

**Marathi + English** — प्रत्येक lesson मध्ये मराठी explanation + English technical terms.

## 🔮 Roadmap

- [ ] Python/backend execution (Pyodide/WebAssembly)
- [ ] Daily challenge / streaks
- [ ] Admin panel (backend + MySQL सह)
- [ ] More tools & projects

## 📱 PWA

Installable (manifest + 192/512 icons + `theme_color` + `start_url`). Service worker
(`public/sw.js`) provides an **offline app shell** — cached home page, manifest, icons
and `/_next/static/` assets, with network-first navigation. Full lesson content needs
an internet connection (server-rendered).
