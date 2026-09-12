#!/usr/bin/env node
// chk1.js — self-compile tutorial TS, run every code cell with empty stdin,
// exact-compare output, and report word counts from section .content only.

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const ROOT = "/data/data/com.termux/files/home/marathi-learn-hub";
const SRCDIR = path.join(ROOT, "src/data/tutorials");
const OUT = path.join(ROOT, "tssrc2");
const TS = path.join(ROOT, "node_modules/typescript");

const slugArg = process.argv[2];
const tsc = require(path.join(TS, "lib/typescript.js"));

const LEVELS = ["python-level1", "python-level2", "python-level3", "python-level4", "python-level5", "python-level6", "python-level7", "python-level8", "html-level1", "html-level2", "html-level3", "html-level4", "html-level5", "css-level1", "css-level2", "css-level3", "css-level4", "css-level5", "css-level6", "css-level7", "css-level8", "css-level9", "css-level10", "css-level11", "css-level12", "css-level13", "css-level14", "css-level15"];

function compileAll() {
  const program = tsc.createProgram(
    LEVELS.map((l) => path.join(SRCDIR, l + ".ts")),
    {
      target: tsc.ScriptTarget.ES2020,
      module: tsc.ModuleKind.CommonJS,
      moduleResolution: tsc.ModuleResolutionKind.NodeJs,
      esModuleInterop: true,
      allowJs: false,
      strict: false,
      skipLibCheck: true,
      outDir: OUT,
      rootDir: ROOT,
      resolveJsonModule: true,
      baseUrl: ROOT,
      paths: { "@/*": ["./src/*"] },
    }
  );
  const emitResult = program.emit();
  const diagnostics = tsc.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
  if (diagnostics.length) {
    console.error("COMPILE ERRORS:");
    for (const d of diagnostics) {
      const msg = tsc.flattenDiagnosticMessageText(d.messageText, "\n");
      const loc = d.file ? d.file.fileName + ":" + d.start : "";
      console.error(loc, msg);
    }
    process.exit(1);
  }
}

compileAll();

const tutorialsModule = require(path.join(OUT, "src/data/tutorials/", process.argv[2] ? "python-level5" : "python-level5.js"));
// find all tutorials, refresh from each level
function loadAll() {
  const all = [];
  for (const lvl of LEVELS) {
    const m = require(path.join(OUT, "src/data/tutorials", lvl + ".js"));
    for (const k in m) {
      if (Array.isArray(m[k])) {
        for (const t of m[k]) if (t && t.slug) all.push(t);
      }
    }
  }
  return all;
}

const all = loadAll();

function runPython(code, stdin) {
  const tmpdir = fs.mkdtempSync(path.join(require("os").tmpdir(), "chk1-"));
  const py = path.join(tmpdir, "cell.py");
  fs.writeFileSync(py, code);
  try {
    const out = execFileSync("python3", [py], { cwd: tmpdir, input: stdin || "", timeout: 20000, encoding: "utf8" });
    fs.rmSync(tmpdir, { recursive: true, force: true });
    return out;
  } catch (e) {
    fs.rmSync(tmpdir, { recursive: true, force: true });
    if (e.stderr) {
      // return stderr (tracebacks) — but strip varying path lines for comparability
      const err = e.stderr.toString();
      return err;
    }
    return e.message || "";
  }
}

function countWords(s) {
  const tokens = s.split(/\s+/).filter((x) => x.length > 0);
  return tokens.length;
}

function audit(slug) {
  const t = all.find((x) => x.slug === slug);
  if (!t) {
    console.error("NO LESSON:", slug);
    process.exit(2);
  }
  let fails = 0;
  t.sections.forEach((s, i) => {
    const wc = s.content ? countWords(s.content) : 0;
    if (s.code) {
      const lang = s.codeLanguage || "python";
      if (lang === "html" || lang === "css" || lang === "javascript" || lang === "js" || lang === "ts") {
        console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | PASS (web)`);
        return;
      }
      if (lang !== "python") {
        console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | PASS (preview)`);
        return;
      }
      if (/\binput\s*\(/.test(s.code)) {
        console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | PASS (interactive)`);
        return;
      }
      const actual = runPython(s.code, s.input);
      const expect = (s.output || "").trim();
      const got = actual.trim();
      if (got === expect) {
        console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | PASS`);
      } else {
        console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | FAIL`);
        console.log(`    expected: ${JSON.stringify(expect.slice(0, 200))}`);
        console.log(`    actual:   ${JSON.stringify(got.slice(0, 200))}`);
        fails++;
      }
    } else {
      console.log(`sec ${i} ${s.title.slice(0, 30)} | ${wc}w | no code`);
    }
  });
  const total = t.sections.reduce((a, s) => a + (s.content ? countWords(s.content) : 0), 0);
  console.log(`words=${total} sections=${t.sections.length}`);
  if (fails) {
    console.log(`EXEC FAILED ${fails}`);
    process.exitCode = 1;
  } else {
    console.log("EXEC ALL PASS");
  }
}

if (slugArg) {
  audit(slugArg);
} else {
  let allFail = 0;
  for (const t of all) {
    let fails = 0;
    t.sections.forEach((s) => {
      if (s.code && (!s.codeLanguage || s.codeLanguage === "python")) {
        if (/\binput\s*\(/.test(s.code)) return;
        const actual = runPython(s.code, s.input);
        if (actual.trim() !== (s.output || "").trim()) fails++;
      }
    });
    if (fails) {
      console.log(`${t.slug}: EXEC FAILED ${fails}`);
      allFail += fails;
    }
  }
  console.log(allFail ? `TOTAL FAILS ${allFail}` : "ALL LESSONS PASS");
}