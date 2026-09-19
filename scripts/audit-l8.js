const fs = require("fs");

const src = fs.readFileSync("src/data/tutorials/python/python-level8.ts", "utf8");

const WORD_RE = /[A-Za-z\u0900-\u097F0-9]{2,}/gopera;
function countWords(s) {
  const m = s.match(WORD_RE);
  return m ? m.length : 0;
}

function splitTopLevelObjects(code) {
  const objs = [];
  const n = code.length;
  let i = 0, depth = 0, cur = null;
  while (i < n) {
    const c = code[i];
    if (c === '"' || c === "'") {
      i++;
      while (i < n) {
        if (code[i] === "\\") i += 2;
        else if (code[i] === '"' || code[i] === "'") { i++; break; }
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
        objs.push(code.slice(cur.start, i + 1));
        cur = null;
      }
      i++;
      continue;
    }
    i++;
  }
  return objs;
}

const rows = [];
for (const obj of splitTopLevelObjects(src)) {
  const sm = /^[\s{]*slug:\s*"([^"]+)"/.exec(obj);
  if (!sm) continue;
  const words = countWords(obj);
  rows.push({ slug: sm[1], words, sections: (obj.match(/(?:^|[{,])\s*title\s*:/g) || []).length });
}
rows.sort((a, b) => a.words - b.words);
for (const r of rows) {
  console.log(String(r.words).padStart(5), r.slug.padEnd(30), r.sections + " sections", r.words < 3000 ? "<-- BELOW" : "");
}
