#!/usr/bin/env node
/**
 * Word-count audit for Marathi Learn Hub tutorials.
 *
 * Counts explanatory words (Latin + Devanagari + digits) inside every lesson
 * object and flags lessons below a minimum word count. Used to enforce the
 * 3000+ word content standard on the Python curriculum.
 *
 * Usage:
 *   node scripts/audit-words.js                    # human report
 *   node scripts/audit-words.js --json             # machine summary
 *   node scripts/audit-words.js --strict           # exit 1 if any lesson below min
 *   node scripts/audit-words.js --min=3000         # override minimum (default 3000)
 *   node scripts/audit-words.js --cat=python       # restrict to one category dir
 *   node scripts/audit-words.js --top=20           # only show N shortest
 */
const fs = require("fs");
const path = require("path");

const DEFAULT_MIN = 3000;
const DIR = "src/data/tutorials";

/** Reuse the object splitter from audit-content.js: top-level array elements. */
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

const WORD_RE = /[A-Za-z\u0900-\u097F0-9]{2,}/g;

function countWords(obj) {
  const m = obj.match(WORD_RE);
  return m ? m.length : 0;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

function audit() {
  const args = process.argv.slice(2);
  const min = Number((args.find((a) => a.startsWith("--min=")) || "--min=3000").split("=")[1]);
  const cat = (args.find((a) => a.startsWith("--cat=")) || "").split("=")[1] || "";
  const top = Number((args.find((a) => a.startsWith("--top=")) || "").split("=")[1]) || 0;

  const rows = [];
  for (const f of walk(DIR)) {
    if (cat && !f.includes(`/${cat}/`)) continue;
    const code = fs.readFileSync(f, "utf8");
    for (const obj of splitTopLevelObjects(code)) {
      const sm = /^[\s{]*slug:\s*"([^"]+)"/.exec(obj);
      if (!sm) continue;
      const slug = sm[1];
      const words = countWords(obj);
      const secCount = (obj.match(/(?:^|[{,])\s*title\s*:\s*"/gm) || []).length;
      rows.push({ slug, words, sections: secCount, file: f.replace(/^src\//, "") });
    }
  }

  const below = rows.filter((r) => r.words < min);
  rows.sort((a, b) => a.words - b.words);
  const totalWords = rows.reduce((s, r) => s + r.words, 0);

  if (args.includes("--json")) {
    console.log(JSON.stringify({ total: rows.length, totalWords, min, below: below.length, rows }, null, 2));
    return;
  }

  console.log(`Lessons parsed: ${rows.length} | total words: ${totalWords} | min: ${min}`);
  console.log(`Below min: ${below.length}/${rows.length}`);
  console.log("\n=== SHORTEST LESSONS ===");
  const show = rows.slice(0, top || rows.length);
  for (const r of show) {
    const flag = r.words < min ? " <-- BELOW" : "";
    console.log(`  ${String(r.words).padStart(5)}  ${r.slug.padEnd(36)} ${String(r.sections).padStart(3)} sections  (${r.file})${flag}`);
  }

  if (args.includes("--strict") && below.length > 0) {
    console.error(`\n[audit-words] STRICT: ${below.length} lessons below ${min} words.`);
    process.exit(1);
  }
}

audit();