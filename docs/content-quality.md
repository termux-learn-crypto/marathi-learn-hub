# Content Quality Standard

प्रत्येक tutorial page ने खालील 9 भाग पूर्ण करावेत — हीच "quality bar" आहे.

## The Standard (9 parts)

| # | Part | मराठी | Data स्त्रोत |
|---|------|-------|--------------|
| 1 | **What is it?** | हे काय? | section (title: `म्हणजे काय`, `परिचय`, `परिभाषा`, ...) |
| 2 | **Why?** | का? / महत्त्व | section (title: `फायदे`, `महत्त्व`, `गरज`, ...) |
| 3 | **Example** | उदाहरण | section with `code` |
| 4 | **Output** | आउटपुट | section `output` (code असल्यास आवश्यक) |
| 5 | **Common mistakes** | चुका / सावधान | section (title: `चुका`, `गैरसमज`, `सावधान`, ...) |
| 6 | **Practice** | सराव | `practiceQuestions[]` (≥1) |
| 7 | **Quiz** | क्विझ | `quiz[]` (≥3 questions) |
| 8 | **Related** | संबंधित | `related[]` (≥2 slugs) |
| 9 | **Project** (bonus) | प्रकल्प | `project?: string` (project id) |

Non-code (conceptual) lessons मध्ये Example/Output हे **N/A** मानले जातात —
त्या lessons ची scores उरलेल्या applicable points वर मोजली जातात.

## Tooling

### `scripts/audit-content.js`
- `node scripts/audit-content.js` — human report (per-criterion %, avg score, gaps)
- `node scripts/audit-content.js --list` — प्रत्येक gap-lesson + कुठे काय missing
- `node scripts/audit-content.js --json` — машина-readable full data
- `node scripts/audit-content.js --strict` — gap असल्यास exit code 1 (CI gate)

Parser strings (backticks `code:`), template literals, comments सर्व skip करतो —
`{}`/`[]` फक्त real structure चे. Slugs 58 files मधून अचूक extract होतात.

### Renderer auto-badges — `src/app/tutorial/[slug]/page.tsx`
Section title + code/output वरून स्वयंचलित tags: 📖 हे काय? · 🎯 का? ·
💡 उदाहरण · 🖥️ Output · ⚠️ चुका/सावधान · 📌 सारांश · ✍️ सराव.
Content files संपादित नकरता page वरती standard ची उपस्थिती दिसते.

### Related Project — `tutorial.project`
`Tutorial` type वर `project?: string` (project id). असल्यास page वर
"🛠️ Related Project" card `/project/:id` कडे लिंक होतो.

## Baseline (generated 2026-09-16)

- Tutorials: **450** (58 files)
- What is it?: **98/450 (21.8%)**
- Why?: **25/450 (5.6%)**
- Example (code): **425/425 (100%)**
- Output: **152/425 (35.8%)**
- Common mistakes: **99/450 (22.0%)**
- Practice Qs: **383/450 (85.1%)**
- Quiz ≥3: **450/450 (100%)**
- Related ≥2: **450/450 (100%)**
- Project link (bonus): **13/450 (2.9%)**

Average score: **4.51/7.3** applicable points · any-gap lessons: **439/450**

बेसलाइन पुन्हा मिळवण्यासाठी: `node scripts/audit-content.js`.

## Phase B — Content normalization (नंतर, review-gated)

- Section-title synonym → canonical rename (**DRY-RUN** mode: सूचना आधी, `--apply` नंतरच).
- Output fields भरणे (code deterministic + short असेल तिथे) — manual/LLM बॅच.
- अधिक project-links वाढवणे (प्रत्येक category ला किमान 1).

## Phase C — Deep authorship (future)

Category-wise narrative upgrade: प्रत्येक lesson च्या What/Why/Example/Output/Mistakes
sections एकरूप बनवणे — human review gate सह, झटपट नको.

## Synonym Map (audit + renderer share the same rules)

| Criterion | Regex |
|-----------|-------|
| what | `म्हणजे काय\|परिचय\|परिभाषा\|introduction\|what is\|called` |
| why | `फायदे\|महत्त्व\|गरज\|का?\|benefit\|importance\|why` |
| example | `उदाहरण\|example\|demo\|प्रयोग` |
| mistakes | `चुक\|गैरसमज\|सावधान\|mistake` |
| summary | `सारांश\|summary` |
| practice | `सराव\|practice` |
| output | `output\|आउटपुट` |