// Performance & security audit suite (Phase 24 — Performance, Phase 25 — Security)
// Usage: npm run audit
// Runs against config + source + data modules (and .next/build artifacts if present).
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { tutorials } from "../src/data/tutorials";
import { projects } from "../src/data/projects";

let failures = 0;
let warnings = 0;
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

function warn(label: string) {
  warnings++;
  checks++;
  console.log(`  ⚠ ${label}`);
}

function log(title: string) {
  console.log(`\n▶ ${title}`);
}

const root = join(__dirname, "..");

function read(rel: string): string | null {
  const p = join(root, rel);
  if (!existsSync(p)) return null;
  return readFileSync(p, "utf8");
}

function list(rel: string): string[] {
  const p = join(root, rel);
  if (!existsSync(p)) return [];
  let out: string[] = [];
  for (const d of readdirSync(p)) {
    const f = join(p, d);
    if (statSync(f).isDirectory()) out = out.concat(list(join(rel, d)));
    else if (f.endsWith(".ts") || f.endsWith(".tsx") || f.endsWith(".js")) out.push(join(rel, d));
  }
  return out;
}

// ── Security (Phase 25) ───────────────────────────────────────────
log("Security");

const nc = read("next.config.js") ?? "";
check(nc.length > 0, "next.config.js present");

const headers: [string, string][] = [
  ["X-Content-Type-Options", "nosniff"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=()"],
  ["X-Frame-Options", "SAMEORIGIN"],
  ["Strict-Transport-Security", "max-age=63072000"],
  ["X-DNS-Prefetch-Control", "on"],
];
for (const [k, v] of headers) {
  const wantKey = `key: "${k}"`;
  const wantVal = v === "max-age=63072000" ? "value: \"max-age=63072000" : `value: "${v}"`;
  check(nc.includes(wantKey) && nc.includes(wantVal), `header ${k}`);
}
check(/poweredByHeader:\s*false/.test(nc), "poweredByHeader: false");
check(/reactStrictMode:\s*true/.test(nc), "reactStrictMode: true");

const layout = read("src/app/layout.tsx") ?? "";
check(layout.includes('lang="mr"'), "root <html lang=\"mr\">");

const banned = list(".").filter((f) => /^\.env(\.|$)/.test(f) && !/example$/.test(f));
check(banned.length === 0, `no .env files in tree (${banned.length})`);

const secretPatterns: [RegExp, string][] = [
  [/\b(?:sk|ghp|gho|AKIA)[A-Za-z0-9_\-]{20,}/, "token/AWS-style secret"],
  [/\bAIza[0-9A-Za-z_\-]{30,}/, "Google API key"],
  [/-----BEGIN (RSA|OPENSSH|EC) PRIVATE KEY-----/, "private key"],
];
let secretHits = 0;
const scannedConfig = ["next.config.js", "scripts/check-content.ts", "scripts/audit.ts"];
for (const f of list("src").concat(scannedConfig)) {
  const content = read(f);
  if (!content) continue;
  for (const [re, label] of secretPatterns) {
    if (re.test(content)) {
      secretHits++;
      console.error(`    secret-like: ${label} in ${f}`);
    }
  }
}
check(secretHits === 0, `no hardcoded secret patterns (${secretHits})`);

// ── Performance (Phase 24) ────────────────────────────────────────
log("Performance");

const perFile: [number, string][] = [];
for (const f of list("src/data")) {
  const c = read(f);
  if (c) {
    const names = f.split("/").pop() ?? f;
    if (/^python-level/.test(names)) perFile.push([Buffer.byteLength(c, "utf8"), f]);
  }
}
perFile.sort((a, b) => b[0] - a[0]);
const dataTotal = perFile.reduce((s, [n]) => s + n, 0);
const kb = (n: number) => `${(n / 1024).toFixed(0)} KB`;
check(dataTotal > 0, `python curriculum data present (${kb(dataTotal)})`);
warn(`largest data module ${kb(perFile[0]?.[0] ?? 0)}: ${perFile[0]?.[1] ?? "n/a"} (feeds a shared client chunk)`);

warn(`${tutorials.length} tutorials + ${projects.length} projects are inlined into client bundles (MDX/codegen would shrink this)`);

const chunksDir = join(root, ".next/static/chunks");
if (existsSync(chunksDir)) {
  let largest = [0, ""] as [number, string];
  let total = 0;
  for (const f of readdirSync(chunksDir)) {
    const p = join(chunksDir, f);
    if (!statSync(p).isFile() || !f.endsWith(".js")) continue;
    const sz = statSync(p).size;
    total += sz;
    if (sz > largest[0]) largest = [sz, f];
  }
  const budget = 3000 * 1024;
  if (largest[0] <= budget) {
    check(true, `largest client chunk under budget (${kb(largest[0])}: ${largest[1]})`);
  } else {
    warn(`largest client chunk ${kb(largest[0])} (${largest[1]}) — gzip shrinks heavily; MDX split is the durable fix`);
  }
  warn(`total static chunks ${kb(total)}`);
} else {
  warn(".next/static/chunks not present — run `npm run build` for bundle checks");
}

const gcss = read("src/app/globals.css") ?? "";
check(!/@import\s+url\(/.test(gcss), "no external @import url() in globals.css (font-blocking risk)");

const manifestText = read("public/manifest.json");
if (manifestText) {
  const m = JSON.parse(manifestText);
  check(typeof m.theme_color === "string" && /^#/.test(m.theme_color), "manifest theme_color set");
  check(Array.isArray(m.icons) && m.icons.length >= 2, "manifest has 192+512 icons");
}

try {
  const trackedEnv = execFileSync("git", ["ls-files"], { cwd: root, encoding: "utf8" })
    .split("\n")
    .filter((f) => /^\.env(\.|$)/.test(f) && !/example$/.test(f));
  check(trackedEnv.length === 0, `no .env* tracked by git (${trackedEnv.length})`);
} catch {
  warn("git ls-files unavailable");
}

// ── Summary ───────────────────────────────────────────────────────
console.log(`\n${checks} checks, ${failures} failures, ${warnings} warnings.`);
if (failures > 0) {
  console.error("AUDIT FAILED");
  process.exit(1);
}
console.log("PASS");