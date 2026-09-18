#!/usr/bin/env node
/**
 * Content-quality audit for Marathi Learn Hub tutorials.
 *
 * Scores every tutorial against a 9-part content standard:
 *   Hard score (8): What·Why·Example·Output·Mistakes·Practice·Quiz·Related
 *   Bonus (1):      Project link
 *
 * Non-code (conceptual) lessons treat Example/Output as N/A and are scored
 * out of the remaining applicable points.
 *
 * Usage:
 *   node scripts/audit-content.js                 # human report
 *   node scripts/audit-content.js --json          # machine summary
 *   node scripts/audit-content.js --strict        # exit 1 if any gap
 *   node scripts/audit-content.js --list=all      # print every failing slug
 */
const fs = require("fs");
const path = require("path");

const DIR = "src/data/tutorials";
const QUIZ_MIN = 3;
const RELATED_MIN = 2;

const WHAT_RE = /म्हणजे काय|परिचय|परिभाषा|introduction|what is|called/i;
const WHY_RE = /फायदे|महत्त्व|गरज|का तर|का\?|benefit|importance|why\b/i;
const MISTAKE_RE = /चुक|गैरसमज|mistake|सावधान/i;

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

/**
 * Splits a TS source string into top-level array-element regions, ignoring
 * string literals, template literals and comments. Each region is one
 * tutorial object (or a non-object region without a slug, which is skipped).
 */
function splitTopLevelObjects(code) {
  let i = 0;
  const n = code.length;
  const objs = [];
  let cur = null;
  let depth = 0;
  while (i < n) {
    const c = code[i];
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      while (i < n) {
        if (code[i] === "\\") i += 2;
        else if (code[i] === q) { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "`") {
      i++;
      while (i < n) {
        if (code[i] === "\\") i += 2;
        else if (code[i] === "`") { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "/" && code[i + 1] === "/") {
      i += 2;
      while (i < n && code[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && code[i + 1] === "*") {
      i += 2;
      while (i < n && !(code[i] === "*" && code[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    if (c === "{") {
      if (depth === 0) cur = { start: i };
      depth++;
      i++;
      continue;
    }
    if (c === "}") {
      depth--;
      if (depth === 0 && cur) {
        cur.end = i + 1;
        objs.push(code.slice(cur.start, cur.end));
        cur = null;
      }
      i++;
      continue;
    }
    i++;
  }
  return objs;
}

/** Extract a `key: [..]` or `key: {..}` block, honoring strings/templates/comments. */
function findMatch(code, startIdx) {
  const open = code[startIdx];
  const close = open === "[" ? "]" : "}";
  let i = startIdx + 1;
  const n = code.length;
  let depth = 1;
  while (i < n) {
    const c = code[i];
    if (c === '"' || c === "'") {
      const q = c;
      i++;
      while (i < n) {
        if (code[i] === "\\") i += 2;
        else if (code[i] === q) { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "`") {
      i++;
      while (i < n) {
        if (code[i] === "\\") i += 2;
        else if (code[i] === "`") { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "/" && code[i + 1] === "/") {
      while (i < n && code[i] !== "\n") i++;
      continue;
    }
    if (c === "/" && code[i + 1] === "*") {
      i += 2;
      while (i < n && !(code[i] === "*" && code[i + 1] === "/")) i++;
      i += 2;
      continue;
    }
    if (c === open) depth++;
    else if (c === close) {
      depth--;
      if (depth === 0) return code.slice(startIdx, i + 1);
    }
    i++;
  }
  return "";
}

function findBlock(obj, key) {
  const re = new RegExp("\\b" + key + "\\s*:\\s*([\\[{])", "g");
  let m;
  while ((m = re.exec(obj)) !== null) {
    const block = findMatch(obj, re.lastIndex - 1);
    if (block) return block;
  }
  return "";
}

function countField(block, field) {
  const re = new RegExp("\\b" + field + "\\s*:\\s*(['\"`])", "g");
  const m = block.match(re);
  return m ? m.length : 0;
}

function audit() {
  const slugs = [];
  const rows = [];
  let nTut = 0;

  for (const f of walk(DIR)) {
    const code = fs.readFileSync(f, "utf8");
    for (const obj of splitTopLevelObjects(code)) {
      const sm = /^\s*\{\s*slug:\s*"([^"]+)"/.exec(obj);
      if (!sm) continue;
      const slug = sm[1];
      nTut++;
      slugs.push(slug);

      const sections = findBlock(obj, "sections");
      const titles = [...sections.matchAll(/(?:^|[{,])\s*title\s*:\s*"([^"]+)"/gm)].map((m) => m[1]);
      const hasCode = countField(sections, "code") > 0;
      const hasOutput = countField(sections, "output") > 0;

      const quiz = findBlock(obj, "quiz");
      const quizCount = (quiz.match(/\bquestion:\s*"/g) || []).length;

      const related = findBlock(obj, "related");
      const relatedCount = (related.match(/"(?:\\.|[^"\\])*"/g) || []).length;

      const hasPractice = /practiceQuestions:\s*\[/.test(obj);
      const hasProject = /\bproject:\s*"/.test(obj);

      const what = titles.some((t) => WHAT_RE.test(t));
      const why = titles.some((t) => WHY_RE.test(t));
      const mistakes = titles.some((t) => MISTAKE_RE.test(t));

      const exampleApplicable = hasCode || hasOutput;
      const applicable = 1 + 1 + 1 + (exampleApplicable ? 1 : 0) + (hasOutput ? 1 : 0) + 1 + 1 + 1;
      const passed =
        (what ? 1 : 0) +
        (why ? 1 : 0) +
        (exampleApplicable && hasCode ? 1 : 0) +
        (hasOutput ? 1 : 0) +
        (mistakes ? 1 : 0) +
        (hasPractice ? 1 : 0) +
        (quizCount >= QUIZ_MIN ? 1 : 0) +
        (relatedCount >= RELATED_MIN ? 1 : 0);

      rows.push({
        slug,
        file: f.replace(/^src\//, ""),
        what, why, example: hasCode, output: hasOutput,
        mistakes, practice: hasPractice,
        quiz: quizCount, related: relatedCount,
        project: hasProject,
        score: passed, applicable,
        gap: applicable - passed,
      });
    }
  }

  const unique = new Set(slugs).size;
  const totals = { what: 0, why: 0, example: 0, output: 0, mistakes: 0, practice: 0, quiz: 0, related: 0, project: 0 };
  for (const r of rows) {
    for (const k of Object.keys(totals)) {
      if (k === "quiz") { if (r.quiz >= QUIZ_MIN) totals[k]++; continue; }
      if (k === "related") { if (r.related >= RELATED_MIN) totals[k]++; continue; }
      if (r[k] === true || (typeof r[k] === "number" && r[k] > 0)) totals[k]++;
    }
  }
  const exampleApplicable = rows.filter((r) => r.example || r.output).length;

  const args = process.argv.slice(2);
  if (args.includes("--json")) {
    console.log(JSON.stringify({ tutorials: rows.length, unique, totals, rows }, null, 2));
    return { rows, totals, unique };
  }

  console.log(`Tutorials parsed: ${rows.length} | unique slugs: ${unique}`);
  console.log("\n=== 9-PART STANDARD (criterion → pass %) ===");
  const label = { what: "What is it?", why: "Why?", example: "Example(code)", output: "Output", mistakes: "Common mistakes", practice: "Practice Qs", quiz: `Quiz ≥${QUIZ_MIN}`, related: `Related ≥${RELATED_MIN}`, project: "Project link (bonus)" };
  const denomFor = { example: exampleApplicable, output: exampleApplicable };
  for (const k of Object.keys(label)) {
    const pass = totals[k];
    const denom = denomFor[k] ?? rows.length;
    console.log(`  ${label[k].padEnd(26)} ${String(pass).padStart(4)}/${denom}  (${((pass / denom) * 100).toFixed(1)}%)`);
  }

  const flagged = rows.filter((r) => r.gap > 0);
  const avgScore = rows.reduce((a, r) => a + r.score, 0) / rows.length;
  const avgApplicable = rows.reduce((a, r) => a + r.applicable, 0) / rows.length;
  console.log(`\nAverage score: ${avgScore.toFixed(2)}/${avgApplicable.toFixed(1)} applicable points`);
  console.log(`Lessons with any gap: ${flagged.length}/${rows.length}`);

  const list = args.find((a) => a.startsWith("--list"));
  if (list === "--list=all" || list === "--list") {
    console.log("\n=== LESSONS WITH GAPS ===");
    flagged.forEach((r) => {
      const miss = [];
      const codeApplicable = r.example || r.output;
      if (!r.what) miss.push("what");
      if (!r.why) miss.push("why");
      if (codeApplicable && !r.example) miss.push("example");
      if (codeApplicable && !r.output) miss.push("output");
      if (!r.mistakes) miss.push("mistakes");
      if (!r.practice) miss.push("practice");
      if (r.quiz < QUIZ_MIN) miss.push(`quiz(${r.quiz})`);
      if (r.related < RELATED_MIN) miss.push(`related(${r.related})`);
      console.log(`  ${r.slug.padEnd(34)} ${r.score}/${r.applicable}  [${miss.join(", ")}]  (${r.file})`);
    });
  }

  if (args.includes("--strict") && flagged.length > 0) {
    console.error(`\n[audit-content] STRICT: ${flagged.length} lessons below standard.`);
    process.exit(1);
  }
  return { rows, totals, unique };
}

audit();