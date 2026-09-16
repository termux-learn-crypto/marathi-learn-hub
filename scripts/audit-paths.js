const path = require("path");
const fs = require("fs");

// === Collect defined tutorial slugs ===
const tdir = "src/data/tutorials";

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

const definedTuts = new Set();
for (const f of walk(tdir)) {
  const code = fs.readFileSync(f, "utf8");
  for (const mm of code.match(/slug: "([^"]+)"/g) || [])
    definedTuts.add(mm.match(/"([^"]+)"/)[1]);
}
{
  const tcode = fs.readFileSync("src/data/tutorials.ts", "utf8");
  for (const mm of tcode.match(/slug: "([^"]+)"/g) || [])
    definedTuts.add(mm.match(/"([^"]+)"/)[1]);
}

// === Collect defined project ids ===
const definedProjects = new Set();
{
  const pcode = fs.readFileSync("src/data/projects.ts", "utf8");
  for (const mm of pcode.match(/id: "([^"]+)"/g) || [])
    definedProjects.add(mm.match(/"([^"]+)"/)[1]);
}

const lcode = fs.readFileSync("src/data/learningPaths.ts", "utf8");

// === Split per-path blocks ===
const starts = [];
{
  const re = /\n    id: "([^"]+)",\n    categoryId: "([^"]+)",/g;
  let m;
  while ((m = re.exec(lcode)) !== null) starts.push({ match: m, index: m.index });
}

let broken = 0;
const dupes = [];
const report = [];

starts.forEach((s, i) => {
  const id = s.match[1];
  const end = i + 1 < starts.length ? starts[i + 1].index : lcode.length;
  const slice = lcode.slice(s.index, end);

  const phases = [...slice.matchAll(/title: "([^"]+)",\s*\n\s*english: "([^"]+)"/g)].length;
  const stepsBlocks = [...slice.matchAll(/steps:\s*\[([^\]]*)\]/gs)].map((x) => x[1]);

  let stepCount = 0;
  let projectCount = 0;
  const pathRefs = [];

  for (const block of stepsBlocks) {
    const projRefs = [...block.matchAll(/project:\s*"([^"]+)"/g)].map((x) => x[1]);
    const slugRefs = [
      ...block.replace(/project:\s*"[^"]+"/g, "").matchAll(/"([^"]+)"/g),
    ].map((x) => x[1]);

    for (const p of projRefs) {
      projectCount++;
      stepCount++;
      pathRefs.push("project:" + p);
      if (!definedProjects.has(p)) {
        console.log(`  [${id}] MISSING project -> "${p}"`);
        broken++;
      }
    }
    for (const t of slugRefs) {
      stepCount++;
      pathRefs.push(t);
      if (!definedTuts.has(t)) {
        console.log(`  [${id}] MISSING tutorial -> "${t}"`);
        broken++;
      }
    }
  }

  for (const r of pathRefs) {
    const dup = pathRefs.filter((x) => x === r).length;
    if (dup > 1) dupes.push(`${id}: "${r}"` + ` (${dup}x)`);
  }

  report.push(
    `${id.padEnd(12)} phases=${String(phases).padEnd(1)} steps=${String(stepCount).padEnd(2)} projects=${projectCount}`
  );
});

console.log("=== LEARNING PATHS AUDIT ===");
for (const r of report) console.log("  " + r);
console.log("\n=== BROKEN STEPS ===");
console.log(broken === 0 ? "  none" : `  ${broken} total broken`);
console.log("\n=== DUPLICATE STEPS WITHIN A PATH ===");
console.log(dupes.length === 0 ? "  none" : dupes.map((d) => "  " + d).join("\n"));
console.log("\nPaths:", starts.length);