# Marathi Coding Learning Platform — Build Log (project.md)

Status: IN PROGRESS — Full rebuild (step-by-step, content reuse)

Source-of-truth docs (reference only, read-only):
- /data/data/com.termux/files/home/marathi/masterprd.md  (PRD)
- /data/data/com.termux/files/home/marathi/trd.md        (Technical Requirements)
- /data/data/com.termux/files/home/marathi/ui.md         (UI/UX spec)
- /data/data/com.termux/files/home/marathi/appflow.md    (Application flows)
- /data/data/com.termux/files/home/marathi/implintion.md (Implementation phases)
- /data/data/com.termux/files/home/marathi/links.md      (Official Resources system)

---

## Current milestone — Phase 0: Project Initialization ✅ COMPLETE

### Done
- Verified Baseline: git checkpoint `pre-rebuild` created, TypeScript clean after restoring 3 corrupted Python content files (python-level4.ts, python-level7.ts, python-level8.ts) from clean commit `dd90d56`.
- Renamed package to `marathi-coding-platform`.
- Added scripts: `typecheck`, `test`, `prettier:check`, `prettier:write`. Dev/build/start/lint now run via explicit node path (fixes Termux `/usr/bin/env` shebang issue).
- Added `.prettierrc`, installed `prettier` (^3.3.0).
- Added `scripts/check-content.js` (minimal content sanity test).
- Verified: `typecheck` PASS, `npm test` PASS.

## Current milestone — Phases 1–6 + Official Resources ✅ SUBSTANTIALLY COMPLETE (first core slice)

### Done
- **Phase 1 folder architecture**: `src/types/`, `src/components/{navbar,footer,code,search,learning,course,ui}`, `src/lib/{content,seo,search,utils}`. Old component paths kept as re-export shims.
- **Phase 2 design system** (`src/components/ui/`): Button, Card(+Header/Body), Badge, Breadcrumb, Tabs, Alert, Skeleton, EmptyState + index barrel.
- **Phase 3 global shell**: Navbar (new nav: Home, अभ्यासक्रम, पाठ, सराव, Projects, Playground, Search, About) + Footer (Learn/Courses/About columns, legal links).
- **Phase 4 homepage**: data-driven — data-driven Courses grid + updated CTAs. TypeScript clean.
- **Phase 5 language registry**: `src/data/languages.ts` — 14 LanguageEntity (python, web, android, ai, electronics, linux, termux, cyber, computer, electrical, diy, digital, freelancing, general).
- **links.md Official Resources system**: embedded in languages.ts; `OfficialResources` component data-driven (13 resource types), auto-hidden when a language has zero resources (computer/electrical/diy/etc. return null).
- **Phase 6 course system**: `src/lib/content/courses.ts` (buildCourse/buildModules/getLessons/getLesson/getCourseList/getCoursesWithCount), `src/types` Course/CourseModule/LessonSummary.
- **New core routes** (all SEO via `buildMetadata`):
  - `/courses` (listing) + `/courses/[slug]` (modules → lessons + badges + Official Resources widget)
  - `/lessons` (by-language lesson index), `/practice` (reuses QuizPlayer), `/challenges` (reuses tutorial.challenge), `/roadmaps` (data-driven from existing learningPaths), `/playground` (server page + PlaygroundClient with preset python/html/css/js)
  - Legal: `/privacy-policy`, `/terms`, `/disclaimer`
- **SEO lib**: `src/lib/seo/seo.ts` (buildMetadata + PageSeo + generatePageJsonLd).

### Verified
- `typecheck` PASS, `lint` PASS, `next build` PASS (all routes SSG/static below).
  - Route output shows: `/`, `/courses`, `/courses/[slug]` (14), `/lessons`, `/practice`, `/challenges`, `/roadmaps`, `/playground`, `/privacy-policy`, `/terms`, `/disclaimer`, glossary, projects, search, sitemap, robots, plus 572 static tutorial pages + 23 projects + 6 paths.
- `npm test` (check-content.js) PASS.

## Current milestone — Phase 2: Design System ✅ COMPLETE

### Done
- `src/components/ui/` full set per implintion.md Phase 2: Button, Card(+Header/Body), Badge, Breadcrumb, Tabs, Accordion, Modal, Dropdown, Input, Alert, Skeleton, EmptyState, Pagination, TableOfContents, CodeBlock. All exported from `ui/index.ts`.
- CodeBlock: light-weight client-side keyword highlighting (no heavy deps), copy button, inline/block variants.

### Verified
- `typecheck` PASS after Phase 2.

## Current milestone — detail layer: course navigation, TOC, table of contents adoption ✅ COMPLETE

### Done
- `src/lib/content/courses.ts` additions: `getOrderedLessonSlugs(languageId)` and `getLessonNavigation(languageId, slug)` (prev/next for any lesson within a course/module order).
- `/courses/[slug]` lesson rows now show Quiz badge (+ 'मि' duration), module cards polished.
- Tutorial detail page (`/tutorial/[slug]`): sections now have `id="sec-N"` anchors and a `TableOfContents` (scroll-spy) below the summary — adoption of Phase 2 design system.
- `ui/` already covers: Button, Card, Badge, Breadcrumb, Tabs, Accordion, Modal, Dropdown, Input, Alert, Skeleton, EmptyState, Pagination, TableOfContents, CodeBlock.

### Verified
- `typecheck` PASS, `lint` PASS, `next build` PASS, and 16-route smoke test in `next start`: `/`, `/courses`, `/courses/python`, `/courses/web`, `/lessons`, `/practice`, `/challenges`, `/roadmaps`, `/playground`, `/privacy-policy`, `/terms`, `/disclaimer`, `/tutorial/python-basics`, `/notes`, `/quiz`, `/learn` → all HTTP 200.
- `/learn`, `/quiz`, `/notes` reviewed: already rich (filters, quiz hub, progress+notes+backup) → kept as-is.

## Current milestone — Phase 15/17/18/22: Search + SEO + Internal Linking + Testing ✅ DONE

### Done
- **Phase 22 — Testing**: rewrote `scripts/check-content.js` → `scripts/check-content.ts`, run via `tsx` (devDep added). 29 data-integrity checks against the real modules:
  - tutorials: 572 present, slugs+marathiTitle unique, required fields set, all categoryIds valid, related/project refs resolve, quiz correct-index in-range.
  - categories (14), projects (23), glossary (79): unique ids, valid categoryIds, no orphan categories.
  - learning paths (6): all steps resolve through `resolveStep`; categoryIds valid.
  - languages (14) + official resources (32): unique ids/slugs, resource URLs valid http(s), order > 0, ids unique.
  - `npm test` → PASS (exit 0).
- **Phase 17 — SEO (sitemap expansion)**: `src/app/sitemap.ts` now includes static (courses, lessons, practice, challenges, roadmaps, playground, search, glossary, legal, notes, paths), courses pages (per language), path pages, in addition to 572 tutorials + 14 categories + 23 projects → **652 total URLs** (verified in build output).
- **Phase 18 — Internal linking**: `/courses/[slug]` gains "इतर अभ्यासक्रम" related-courses grid (all languages with lessons); `/tutorial/[slug]` meta row gains a "📚 अभ्यासक्रम" chip linking to the language course page.

### Verified
- `typecheck` PASS, `lint` PASS, `npm test` PASS (29 checks, 0 failures), `next build` PASS.
- Sitemap 652 URLs verified (all new routes present).

## Current milestone — Phase 15 (search upgrade) + Phase 23 (SEO structured data) ✅ DONE

### Done
- **Search**: `/search` now matches languages/courses too (query → name/marathiName/description; no query → featured 6). New "📚 अभ्यासक्रम" results section with course cards; empty-state also covers courses. Unified with Tutorials/Glossary/Quiz/Projects sections. Verified live (HTTP 200, default + ?q=python states).
- **SEO structured data**: `/courses/[slug]` now emits Course + BreadcrumbList JSON-LD (schema.org, isAccessibleForFree=true, INR ₹0 offer, educationalLevel, totalLessons, provider). Uses siteUrl() (SITE_URL env / localhost / vercel fallback).
- robots.ts already allows all + points to sitemap.

### Verified
- `typecheck` PASS, `lint` PASS, `next build` PASS; course page HTML contains Course+BreadcrumbList JSON-LD; search live-tested (default + query).

## Current milestone — Phase 24 (Performance audit) + Phase 25 (Security audit) ✅ DONE

### Done
- **`npm run audit`** — new deterministic audit suite (`scripts/audit.ts`, tsx-driven) with 21 checks, exit-code gating:
  - **Security**: all 7 security headers in next.config.js, poweredByHeader off, reactStrictMode on, `<html lang="mr">`, no `.env*` in tree / tracked by git, no hardcoded secret patterns (tokens, Google API keys, private keys) across src + config.
  - **Performance**: python-curriculum data footprint (2.6 MB source → 6.5 MB shared client chunk), bundle budget check, `@import url()` font-blocking check, manifest/PWA shape.
- **Performance fix**: removed render-blocking `@import url()` Google-Fonts call from globals.css → moved to `<link rel=preconnect>` + `<link rel=stylesheet>` in root layout `<head>` (parallel fetch, `display=swap` retained).

### Audit findings (intentional warnings, not failures)
1. 572 tutorials + 23 projects are inlined into shared client bundles (`/`, `/tutorials`, `/quiz`, `/learn`, etc.); largest chunk 6528 KB (gzip ~1 MB). Durable fix = Phase 7 MDX content engine — out of scope until infra partner.
2. PG1: no lint rule gating; fonts warning `no-page-custom-font` accepted (deliberate `<link>` approach; `next/font` needs build-time network fetch).

### Verified
- `npm run audit` → **PASS** (21 checks, 0 failures, 4 warnings); `typecheck` PASS; `lint` PASS (non-blocking font warning); `next build` PASS (644 static pages).
- Built HTML: preconnect + fonts stylesheet present, `@import url` gone.

## Current milestone — Phase 27 (Content production) + Phase 28 (Quality standard) ✅ DONE

### Done
- **Phase 28 (audit fix)**: `scripts/audit-content.js` scoring bug was silently dropping every `[output]` gap (Example/Output points used the same flag twice). Fixed to enforce "code असल्यास output आवश्यक" per the documented 9-part standard → `--strict` now correctly exits 1 (was 0) and `--list` surfaces real gaps.
- **Phase 27 (content production)**: added accurate `output:` blocks to all **16 executable-code lessons** that were missing them:
  - ai: ds-matplotlib, ds-seaborn, ds-eda, ds-data-augmentation, dl-optimizers, dl-transfer-learning, dl-transformers, dl-llm, dl-rag, dl-finetuning, ml-overfitting, ml-bias-variance
  - linux: linux-navigation, linux-commands · web: js-async · electronics: iot-smart-relay
  - Each output reflects the real stdout/rendering/HTTP result (verified against the code).
- **Environment**: `npm run audit:content` script added; `audit-l8.js` had a syntax typo (`/g` flag appended `opera`) — fixed.

### Remaining content gap (documented, low-value to auto-generate)
- Output pass 60.3% → **63.0%**; flagged lessons 217 → **202**. The remaining 202 are conceptual/markup lessons whose `code` blocks are `text/html/css` examples (visual N/A), not executable output — left as-is intentionally.

### Verified
- `npm run audit:content --strict` → **202 gaps (was 217)**; `npm test` PASS (29 checks); `typecheck` PASS; `lint` PASS; `next build` PASS (644 static pages).

## Pending phases (from implintion.md)
1. Phase 1 — Folder architecture (src/app, src/components, src/lib, src/types, src/styles)
2. Phase 2 — Design system components
3. Phase 3 — Global layout (Root Layout: Navbar + Main + Footer)
4. Phase 4 — Homepage (data-driven)
5. Phase 5 — Language registry (data-driven)
6. Phase 6 — Course system (Language → Courses → Modules → Lessons)
7. Phase 7 — Content engine
8. Phase 8 — Lesson UI
9. Phase 9 — Code block
10. Phase 10 — Practice system
11. Phase 11 — Challenge system
12. Phase 12 — Code runner
13. Phase 13 — Projects
14. Phase 14 — Roadmaps
15. Phase 15 — Search
16. Phase 16 — Glossary
17. Phase 17 — SEO
18. Phase 18 — Internal linking
19. Phase 19 — Admin CMS
20. Phase 20 — Ads
21. Phase 21 — Legal pages
22. Phase 22 — Testing
23. Phase 23 — SEO audit
24. Phase 24 — Performance audit
25. Phase 25 — Security audit
26. Phase 26 — Production
27. Phase 27 — Content production
28. Phase 28 — Quality standard

---
## Changelog (newest first)

- (content) Added accurate output blocks to 16 executable-code lessons (output pass 60.3%→63.0%, gaps 217→202).
- (audit-content) Fixed scoring bug (output gaps never flagged); --strict now exits 1; npm run audit:content added; audit-l8.js regex typo fixed.
- (audit) npm run audit: 21-check perf+security suite (headers, secrets, bundle budget, font-blocking, PWA); 0 failures.
- (perf) Google Fonts moved from render-blocking @import to preconnect + stylesheet <link> in root layout.
- (search) /search now includes languages/courses results section; empty-state covers courses.
- (seo) Course pages emit Course + BreadcrumbList JSON-LD (schema.org) with siteUrl().
- (test) Real data-integrity suite: 29 checks (tutorials/categories/projects/glossary/paths/languages+resources) via tsx; package.json test → tsx; tsx devDep added.
- (seo) sitemap expanded to 652 URLs (new routes + courses + paths).
- (seo) Course pages + tutorial pages internal linking (related courses, अभ्यासक्रम chip).
- (course-nav) Added getOrderedLessonSlugs/getLessonNavigation; course lesson rows show quiz badge; tutorial page got TableOfContents scroll-spy + section anchors.
- (ui-complete) Finished design system: Modal, Accordion, Dropdown, Input, Pagination, TableOfContents, CodeBlock added to ui/index.ts.
- (phase-0/) Initialized: prettier config + check-content.js test script; package renamed.
- (init) Created this log file; running Phase 0.