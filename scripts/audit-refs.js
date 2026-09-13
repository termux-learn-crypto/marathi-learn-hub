const path = require("path");
const fs = require("fs");

const dir = "src/data/tutorials";
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".ts"));
const tcode = fs.readFileSync("src/data/tutorials.ts", "utf8");

const dump = (code, key) => {
  const re = new RegExp(key + ":\\s*(?:\\[[^\\]]*\\]|\"[^\"]*\")", "g");
  const out = [];
  let m;
  while ((m = re.exec(code)) !== null) out.push(m[0]);
  return out;
};

const defined = new Set();
for (const f of files) {
  const code = fs.readFileSync(path.join(dir, f), "utf8");
  for (const mm of code.match(/slug: "([^"]+)"/g) || [])
    defined.add(mm.match(/"([^"]+)"/)[1]);
}
for (const mm of tcode.match(/slug: "([^"]+)"/g) || [])
  defined.add(mm.match(/"([^"]+)"/)[1]);

const missing = {};
const check = (k) => {
  for (const f of files) {
    const code = fs.readFileSync(path.join(dir, f), "utf8");
    const hits = dump(code, k);
    for (const h of hits) {
      const refs = [...h.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
      for (const r of refs) {
        if (!defined.has(r)) {
          if (!missing[k]) missing[k] = [];
          missing[k].push(`${f} -> [${k}] -> "${r}"`);
        }
      }
    }
  }
  const hits = dump(tcode, k);
  for (const h of hits) {
    const refs = [...h.matchAll(/"([^"]+)"/g)].map((x) => x[1]);
    for (const r of refs) {
      if (!defined.has(r)) {
        if (!missing[k]) missing[k] = [];
        missing[k].push(`tutorials.ts -> [${k}] -> "${r}"`);
      }
    }
  }
};

["related", "next", "prev"].forEach(check);

console.log("=== DEAD REFERENCES ===");
let total = 0;
for (const k of Object.keys(missing)) {
  console.log(`\n[${k}] (${missing[k].length})`);
  for (const l of [...new Set(missing[k])]) {
    console.log("  " + l);
    total++;
  }
}
console.log("\nTOTAL distinct broken refs:", total);

// which slugs are referenced but belong to unimported jsLevel7?
const js7 = [];
for (const f of files) {
  if (f === "js-level7.ts") {
    const code = fs.readFileSync(path.join(dir, f), "utf8");
    console.log("\n=== js-level7.ts defines ===");
    for (const mm of code.match(/slug: "([^"]+)"/g) || [])
      console.log("  " + mm.match(/"([^"]+)"/)[1]);
  }
}