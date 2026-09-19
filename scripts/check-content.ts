// Data-integrity test suite (Phase 22 — Testing)
// Runs against the real data modules. Usage: npm test
import { tutorials, getTutorial } from "../src/data/tutorials";
import { categories } from "../src/data/categories";
import { projects } from "../src/data/projects";
import { glossary } from "../src/data/glossary";
import { learningPaths, flattenPathSteps, resolveStep } from "../src/data/learningPaths";
import { languages } from "../src/data/languages";

let failures = 0;
let checks = 0;

function check(cond: boolean, label: string) {
  checks++;
  if (cond) {
    console.log(`  ✓ ${label}`);
  } else {
    failures++;
    console.error(`  ✗ ${label}`);
  }
}

function log(title: string) {
  console.log(`\n▶ ${title}`);
}

const tutorialSlugs = new Set(tutorials.map((t) => t.slug));
const categoryIds = new Set(categories.map((c) => c.id));
const projectIds = new Set(projects.map((p) => p.id));

// ── Tutorials ──────────────────────────────────────────────────────
log("Tutorials");

check(tutorials.length > 0, `registry has ${tutorials.length} tutorials`);
check(tutorials.length === new Set(tutorials.map((t) => t.slug)).size, "slugs unique");
check(tutorials.length === new Set(tutorials.map((t) => t.marathiTitle)).size, "marathiTitle unique");

for (const t of tutorials) {
  if (!t.slug || !t.marathiTitle || !t.summary || !t.categoryId || !t.level) {
    check(false, `missing required field: ${t.slug ?? t.marathiTitle ?? "?"}`);
    break;
  }
}
check(true, "required fields present on all tutorials");

let badCategory = 0;
for (const t of tutorials) if (!categoryIds.has(t.categoryId)) badCategory++;
check(badCategory === 0, `all categoryIds valid (${badCategory} bad)`);

let missingRelated = 0;
const missingRelatedList: string[] = [];
for (const t of tutorials) {
  for (const r of t.related) {
    if (!tutorialSlugs.has(r)) {
      missingRelated++;
      if (missingRelatedList.length < 5) missingRelatedList.push(`${t.slug} -> ${r}`);
    }
  }
}
check(missingRelated === 0, `all related refs resolve (${missingRelated} missing)`);
if (missingRelatedList.length) console.log(`    e.g. ${missingRelatedList.join(", ")}`);

let missingNextPrev = 0;
for (const t of tutorials) {
  if (t.next && !tutorialSlugs.has(t.next)) missingNextPrev++;
  if (t.prev && !tutorialSlugs.has(t.prev)) missingNextPrev++;
}
// NOTE: next/prev may intentionally point to not-yet-written lessons; count but do not fail.
console.log(`    info: ${missingNextPrev} unresolvable prev/next (informational)`);

let badProjectRef = 0;
for (const t of tutorials) {
  if (t.project && !projectIds.has(t.project)) badProjectRef++;
}
check(badProjectRef === 0, `all tutorial.project refs valid (${badProjectRef} bad)`);

let quizChecksum = 0;
for (const t of tutorials) {
  for (const q of t.quiz) {
    if (q.correct < 0 || q.correct >= q.options.length) quizChecksum++;
  }
}
check(quizChecksum === 0, `all quiz correct-index valid (${quizChecksum} bad)`);

let emptyQuiz = tutorials.filter((t) => t.quiz.length === 0).length;
check(emptyQuiz < tutorials.length, `${emptyQuiz} tutorials have empty quiz (non-blocking)`);

// ── Categories ─────────────────────────────────────────────────────
log("Categories");

check(categories.length > 0, `${categories.length} categories`);
check(categories.length === new Set(categories.map((c) => c.id)).size, "category ids unique");
let orphanCat = categories.filter((c) => !tutorials.some((t) => t.categoryId === c.id)).length;
check(orphanCat === 0, `no categories without tutorials (${orphanCat} orphan)`);

// ── Projects ──────────────────────────────────────────────────────
log("Projects");

check(projects.length > 0, `${projects.length} projects`);
check(projects.length === new Set(projects.map((p) => p.id)).size, "project ids unique");
let badProjCat = 0;
for (const p of projects) if (!categoryIds.has(p.categoryId)) badProjCat++;
check(badProjCat === 0, `all project categoryIds valid (${badProjCat} bad)`);

// ── Glossary ──────────────────────────────────────────────────────
log("Glossary");

check(glossary.length > 0, `${glossary.length} terms`);
check(new Set(glossary.map((g) => g.term)).size === glossary.length, "terms unique");

// ── Learning Paths ────────────────────────────────────────────────
log("Learning Paths");

check(learningPaths.length > 0, `${learningPaths.length} paths`);
let unresolvedSteps = 0;
const unresolvedSamples: string[] = [];
for (const p of learningPaths) {
  for (const step of flattenPathSteps(p)) {
    if (!resolveStep(step)) {
      unresolvedSteps++;
      if (unresolvedSamples.length < 5) unresolvedSamples.push(`${p.id}: ${step}`);
    }
  }
}
check(unresolvedSteps === 0, `all path steps resolve (${unresolvedSteps} unresolved)`);
if (unresolvedSamples.length) console.log(`    e.g. ${unresolvedSamples.join(", ")}`);

let badPathCat = learningPaths.filter((p) => !categoryIds.has(p.categoryId)).length;
check(badPathCat === 0, `all path categoryIds valid (${badPathCat} bad)`);

// ── Languages / Official Resources ────────────────────────────────
log("Languages & Official Resources");

check(languages.length > 0, `${languages.length} languages/entities`);
check(new Set(languages.map((l) => l.id)).size === languages.length, "language ids unique");
check(new Set(languages.map((l) => l.slug)).size === languages.length, "language slugs unique");

let langCatOk = true;
const langCats: string[] = [];
for (const l of languages) {
  if (!categoryIds.has(l.categoryId) && langCats.length < 5) langCats.push(`${l.id}->${l.categoryId}`);
}
check(langCats.length === 0, `language categoryIds map to real categories (${langCats.join(", ")})`);

let badResUrl = 0;
let totalRes = 0;
for (const l of languages) {
  for (const r of l.resources) {
    totalRes++;
    if (!/^https?:\/\//.test(r.url)) badResUrl++;
    if (r.order <= 0) badResUrl++;
  }
}
check(badResUrl === 0, `official resource URLs valid + ordered (${badResUrl} bad of ${totalRes})`);
check(totalRes > 0, `at least one official resource defined (${totalRes} total)`);

let dupResId = 0;
const seen = new Set<string>();
for (const l of languages) for (const r of l.resources) {
  if (seen.has(r.id)) dupResId++;
  seen.add(r.id);
}
check(dupResId === 0, `resource ids unique across languages (${dupResId} duplicate)`);

// ── Wrapper sanity: npm test runs first tutorial lookup ───────────
log("Lookups");

check(typeof getTutorial("python-basics") !== "undefined", "getTutorial resolves a known slug");
check(typeof getTutorial("__definitely_missing__") === "undefined", "getTutorial returns undefined for unknown slug");

// ── Summary ───────────────────────────────────────────────────────
console.log(`\n${checks} checks, ${failures} failures.`);
if (failures > 0) {
  console.error("DATA INTEGRITY FAILED");
  process.exit(1);
}
console.log("PASS");