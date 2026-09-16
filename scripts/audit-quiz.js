const path = require("path");
const fs = require("fs");
const dir = "src/data/tutorials";

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

const files = walk(dir);

function extractBlocks(code, key) {
  const re = new RegExp(key + ":\\s*\\[", "g");
  const out = [];
  let m;
  while ((m = re.exec(code)) !== null) {
    // naive balanced bracket scan
    const start = re.lastIndex - 1;
    let depth = 0, end = -1, inStr = false, esc = false;
    for (let i = start; i < code.length; i++) {
      const c = code[i];
      if (inStr) {
        if (esc) esc = false;
        else if (c === "\\") esc = true;
        else if (c === '"') inStr = false;
        continue;
      }
      if (c === '"') inStr = true;
      else if (c === "[") depth++;
      else if (c === "]") { depth--; if (depth === 0) { end = i; break; } }
    }
    if (end === -1) continue;
    out.push(code.slice(start, end + 1));
  }
  return out;
}

const slugToFile = {};
for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  for (const m of code.matchAll(/slug: "([^"]+)"/g)) {
    if (slugToFile[m[1]]) slugToFile[m[1]].push(f);
    else slugToFile[m[1]] = [f];
  }
}

console.log("=== DUPLICATE SLUGS ===");
for (const [s, fl] of Object.entries(slugToFile)) {
  if (fl.length > 1) console.log("  " + s + " in " + fl.join(", "));
}

console.log("\n=== QUIZ VALIDATION (out-of-range correct index) ===");
for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  const quizzes = extractBlocks(code, "quiz");
  for (const q of quizzes) {
    const qs = q.matchAll(/question:\s*"([^"]*)",\s*options:\s*\[([\s\S]*?)\],\s*correct:\s*(\d+)/g);
    for (const mq of qs) {
      const opts = [...mq[2].matchAll(/"([^"]*)"/g)];
      const correct = parseInt(mq[3], 10);
      if (correct < 0 || correct >= opts.length) {
        console.log(`  ${f}: Q="${mq[1].slice(0, 40)}" correct=${correct} options=${opts.length}`);
      }
    }
  }
}
const tcode = fs.readFileSync("src/data/tutorials.ts", "utf8");
for (const m of tcode.matchAll(/slug: "([^"]+)"/g)) {
  if (slugToFile[m[1]]) slugToFile[m[1]].push("tutorials.ts(inline)");
  else slugToFile[m[1]] = ["tutorials.ts(inline)"];
}
// count total tutorials incl inline
let nm = 0;
for (const m of tcode.matchAll(/slug: "/g)) nm++;
console.log("\ntotal slug occurrences (inline+spread sources):", nm, "unique:", Object.keys(slugToFile).length);