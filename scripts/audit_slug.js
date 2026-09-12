#!/usr/bin/env node
// audit_slug.js <slug> — scan a lesson's content for junk tokens.
// Loads compiled tutorials from tssrc2 (must run chk1 first or after tsc emit).
const ROOT = "/data/data/com.termux/files/usr/tmp/opencode";
const out = require("/data/data/com.termux/files/home/marathi-learn-hub/tssrc2/src/data/tutorials/python-level5.js");

function isDevanagari(c) { return c >= "\u0900" && c <= "\u097F"; }

const slug = process.argv[2];
const t = Object.values(out).flat().find(x => x && x.slug === slug);
if (!t) { console.error("not found", slug); process.exit(2); }

for (const s of t.sections) {
  const words = (s.content || "").split(/\s+/).filter(Boolean);
  const bad = [];
  for (const w of words) {
    const onlyLatin = /^[A-Za-z]+$/.test(w);
    const hasLatin = /[A-Za-z]/.test(w);
    const hasDev = Array.from(w).some(isDevanagari);
    if (onlyLatin && w.length > 1) {
      // keywords are fine; flag plausible junk
      if (!/^(class|object|pass|print)$/i.test(w)) bad.push(`LATIN:${w}`);
    }
    if (!hasDev && !onlyLatin && /[\u0400-\u04FF]/.test(w)) bad.push(`CYR:${w}`);
    if (!hasDev && !onlyLatin && /[\uAC00-\uD7AF]/.test(w)) bad.push(`KOR:${w}`);
    if (hasLatin && hasDev && /[A-Za-z]{4,}/.test(w)) bad.push(`MIX:${w}`);
  }
  if (bad.length) {
    console.log(`${t.slug} sec[${s.title.slice(0,14)}]: ${bad.slice(0, 6).join(" ")}`);
  }
}
console.log("audit done for", slug);