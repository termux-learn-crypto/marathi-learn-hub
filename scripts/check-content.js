// Minimal content sanity test (Phase 0 / Phase 22 placeholder)
// Run: npm test
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "src");
let failures = 0;

function walk(dir, ext, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      walk(p, ext, out);
    } else if (entry.name.endsWith(ext)) {
      out.push(p);
    }
  }
  return out;
}

const opinion = [
  {
    name: "project.md exists",
    ok: fs.existsSync(path.join(__dirname, "..", "project.md")),
  },
  {
    name: "prettier config exists",
    ok: fs.existsSync(path.join(__dirname, "..", ".prettierrc")),
  },
];

for (const c of opinion) {
  if (!c.ok) {
    failures++;
    console.error(`✗ ${c.name}`);
  } else {
    console.log(`✓ ${c.name}`);
  }
}

const tsFiles = walk(root, ".ts").length + walk(root, ".tsx").length;
console.log(`✓ ${tsFiles} TypeScript/TSX files under src/`);
console.log(failures === 0 ? "PASS" : `FAIL (${failures})`);
process.exit(failures === 0 ? 0 : 1);