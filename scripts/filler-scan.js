const fs = require("fs");
const path = require("path");

const dirs = ["src/data/tutorials"];
const inlineFile = "src/data/tutorials.ts";

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

const files = dirs.flatMap((d) => walk(d));
files.push(inlineFile);

const BLOAT_LEN = 3000;
const BLOAT_SEG = 14;
const MAX_KEEP = 8;

function analyze(code) {
  const blocks = [...code.matchAll(/content:\s*"((?:[^"\\]|\\.)*)"/g)].map((m) => m[1]);
  const bySlug = new Map();
  const chunks = code.split(/(?=slug:\s*")/);
  for (const ch of chunks) {
    const slug = (ch.match(/slug:\s*"([^"]+)"/) || [])[1];
    if (!slug) continue;
    const blockCount = (ch.match(/content:\s*"/g) || []).length;
    const bloat = [...ch.matchAll(/content:\s*"((?:[^"\\]|\\.)*)"/g)]
      .map((m) => m[1])
      .filter((b) => b.length > BLOAT_LEN || (b.match(/\\n/g) || []).length + 1 > BLOAT_SEG);
    bySlug.set(slug, { blockCount, bloat: bloat.length, bloatChars: bloat.reduce((a, b) => a + b.length, 0), totalChars: blocks.join("").length });
  }
  return { blocks, bySlug };
}

let summary = [];
let totalBlocksAllFiles = 0;
for (const f of files) {
  const code = fs.readFileSync(f, "utf8");
  const { blocks, bySlug } = analyze(code);
  totalBlocksAllFiles += blocks.length;
  const bloated = blocks.filter((b) => b.length > BLOAT_LEN || (b.match(/\\n/g) || []).length + 1 > BLOAT_SEG);
  if (!bloated.length) continue;
  summary.push({ file: path.relative(".", f), bloated: bloated.length, total: blocks.length, slugStats: [...bySlug.entries()].filter(([, s]) => s.bloat > 0) });
}

summary.sort((a, b) => b.bloated - a.bloated);
let totalBloat = 0;
const perCat = {};
for (const s of summary) {
  totalBloat += s.bloated;
  const cat = path.basename(s.file).replace(/\.ts$/, "");
  perCat[cat] = (perCat[cat] || 0) + s.bloated;
}

const mode = process.argv[2] || "stats";

if (mode === "queue") {
  for (const s of summary) {
    console.log(`\n### ${s.file} (${s.bloated}/${s.total} bloated)`);
    for (const [slug, st] of s.slugStats.slice(0, MAX_KEEP)) {
      console.log(`  ${slug}: blocks=${st.blockCount} bloatBlocks=${st.bloat} bloatChars=${st.bloatChars}`);
    }
  }
} else {
  console.log("=== FILLER SCAN BASELINE ===");
  console.log("Total content blocks:", totalBlocksAllFiles);
  console.log("Bloated blocks (len>3000 or >14 segments):", totalBloat);
  console.log("\nBy file (worst first):");
  for (const s of summary) {
    console.log(`  ${s.file}: ${s.bloated}`);
  }
  console.log("\nBy category:", JSON.stringify(perCat, null, 0));
}