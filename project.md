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

## Current milestone — remaining work (next sessions)

### To-do
- Phase 2 completion: missing ui components (Modal, Dropdown, Input, Accordion, Pagination, TableOfContents, CodeBlock) per implintion.md.
- Replace placeholder future pages: `/learn`, `/quiz`, `/tools`, `/community`, `/notes` to route to new architecture or be reworked.
- Course detail: add project/code challenge wiring + prev/next navigation.
- Phase 11+: DB layer (PostgreSQL + Prisma), MDX content engine, Live Code Runner (backend), Admin CMS — depends on infra.
- Phase 21+: PWAs, install prompts, revenue (ads), advanced SEO/analytics.
- Phase 28: final QA, performance audit, git history cleanup.

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

- (init) Created this log file; running Phase 0.