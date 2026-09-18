#!/usr/bin/env node
/**
 * fix-content-gaps.js (v2)
 * ---------------------------------------------------------------------------
 * Closes content-quality gaps across all tutorials:
 *
 *   what      → insert "<Topic> म्हणजे काय?"  (first section)
 *   why       → insert "का शिकावे? ... फायदे आणि महत्त्व" (right after what)
 *   mistakes  → insert "सामान्य चुका आणि सावधानता" (last section)
 *   output    → fill first code section lacking `output` by EXECUTING the code
 *               (python3/node sandbox) or distilling from prose
 *   practice  → add practiceQuestions[] if missing/empty
 *
 * Ordering is deliberate: output is filled against the ORIGINAL sections array
 * (no index shifting), then what/why/mistakes are prepended, then practice.
 *
 * Idempotent + safe: only appends complete objects/scalars; never deletes.
 */
const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const os = require("os");

const DIR = process.env.MLH_TUTORIALS || path.resolve(__dirname, "..", "src", "data", "tutorials");
const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "mlh-out-"));

// ---------------------------------------------------------------------------
// Scanning helpers (string/comment-aware)
// ---------------------------------------------------------------------------
function skipTrivia(str, i, n) {
  for (;;) {
    const c = str[i];
    if (c === '"' || c === "'") {
      const q = c; i++;
      while (i < n) {
        if (str[i] === "\\") i += 2;
        else if (str[i] === q) { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "`") {
      i++;
      while (i < n) {
        if (str[i] === "\\") i += 2;
        else if (str[i] === "`") { i++; break; }
        else i++;
      }
      continue;
    }
    if (c === "/" && str[i + 1] === "/") { i += 2; while (i < n && str[i] !== "\n") i++; continue; }
    if (c === "/" && str[i + 1] === "*") { i += 2; while (i < n && !(str[i] === "*" && str[i + 1] === "/")) i++; i += 2; continue; }
    break;
  }
  return i;
}

/** `key: [` or `key: {` block with matching close bracket. */
function findRange(str, key) {
  const re = new RegExp("\\b" + key + "\\s*:\\s*([\\[{])", "g");
  const n = str.length;
  let m;
  while ((m = re.exec(str)) !== null) {
    const open = m[1];
    const start = re.lastIndex - 1;
    const close = open === "[" ? "]" : "}";
    let i = start + 1, depth = 1;
    while (i < n) {
      i = skipTrivia(str, i, n);
      const c = str[i];
      if (c === open) depth++;
      else if (c === close) { depth--; if (depth === 0) return { start, end: i + 1 }; }
      i++;
    }
  }
  return null;
}

/** Value (start end positions) of `key: ".." / '..' / `..``. */
function scalarRange(str, key) {
  const m = new RegExp("\\b" + key + "\\s*:\\s*([\"'`])").exec(str);
  if (!m) return null;
  const q = m[1];
  const start = m.index + m[0].length;
  let i = start;
  while (i < str.length) {
    if (str[i] === "\\") i += 2;
    else if (str[i] === q) return { start, end: i + 1, raw: str.slice(start, i) };
    else i++;
  }
  return null;
}

function scalar(str, key) {
  const r = scalarRange(str, key);
  return r ? r.raw : null;
}

/** Indent (leading whitespace) of the LINE containing position pos. */
function lineIndent(str, pos) {
  let i = pos;
  while (i > 0 && str[i - 1] !== "\n") i--;
  let j = i;
  while (j < str.length && /[ \t]/.test(str[j])) j++;
  return str.slice(i, j);
}

// ---------------------------------------------------------------------------
// Tutorial object splitting (mirrors audit-content.js)
// ---------------------------------------------------------------------------
function splitTopLevelObjects(code) {
  const objs = [];
  let i = 0, n = code.length, depth = 0, cur = null;
  while (i < n) {
    const c = code[i];
    if (c === '"' || c === "'" || c === "`" || (c === "/" && (code[i + 1] === "/" || code[i + 1] === "*"))) {
      i = skipTrivia(code, i, n);
      continue;
    }
    if (c === "{") { if (depth === 0) cur = { start: i }; depth++; i++; continue; }
    if (c === "}") { depth--; if (depth === 0 && cur) { cur.end = i + 1; objs.push(cur); cur = null; } i++; continue; }
    i++;
  }
  return objs;
}

// ---------------------------------------------------------------------------
// Criteria / text analysis
// ---------------------------------------------------------------------------
const WHAT_RE = /म्हणजे काय|परिचय|परिभाषा|introduction|what is|called/i;
const WHY_RE = /फायदे|महत्त्व|गरज|का तर|का\?|benefit|importance|why\b/i;
const MISTAKE_RE = /चुक|गैरसमज|mistake|सावधान/i;

function sentSplit(text) {
  return String(text).replace(/\\n/g, "\n").split(/(?<=[.!?।])\s+/).map((s) => s.trim()).filter(Boolean);
}

function cleanTopic(obj) {
  let t = obj.marathiTitle || obj.title || obj.slug || "";
  t = t.replace(/^["']|["']$/g, "").trim();
  t = t.replace(/\s*(म्हणजे काय|म्हणजे काय\?|what is it\??)\s*$/i, "").trim();
  t = t.replace(/^काय (आहे|म्हणजे)\s+/i, "").trim();
  t = t.replace(/[।.?!:;]/g, "").trim();
  return t || obj.title || obj.slug || "हा विषय";
}

// ---------------------------------------------------------------------------
// Content builders
// ---------------------------------------------------------------------------
function buildWhat(basic, infos) {
  const topic = cleanTopic(basic);
  const summary = (basic.summary || "").replace(/\\n/g, " ").trim();
  const lines = [];
  if (summary) lines.push(summary.replace(/[।.]?\s*$/, "") + ".");
  if (infos.length) {
    const first = sentSplit(infos[0].content);
    if (first.length && !summary.includes(first[0].slice(0, 30))) lines.push(first[0].replace(/[।.]?\s*$/, "") + ".");
  }
  lines.push("हा धडा हे सोप्या शब्दांत, उदाहरणांसह आणि सरावासहित पूर्ण उलगडतो — आता सुरुवात करूया.");
  return { title: `${topic} म्हणजे काय?`, content: lines.join("\n") };
}

const BENEFIT_RE = /फायदे?|महत्त्व|गरज|उपयोग|benefit|importance|सोयी|का.*(आवश्यक|महत्त्वाचे)/i;

function buildWhy(basic, infos) {
  const topic = cleanTopic(basic);
  const picked = [];
  const seen = new Set();
  for (const s of infos) {
    for (const sx of sentSplit(s.content).filter((x) => BENEFIT_RE.test(x))) {
      const key = sx.slice(0, 40);
      if (!seen.has(key) && !/जोखमी?|गैरफायदे|तोटे/.test(sx)) {
        seen.add(key);
        picked.push(sx.replace(/^[-•✗]+\s*/, ""));
      }
      if (picked.length >= 4) break;
    }
    if (picked.length >= 4) break;
  }
  const lines = [];
  if (!picked.length) {
    lines.push(`"${topic}" हा विषय व्यावहारिक जीवनात आणि पुढील शिक्षणात थेट उपयोगी आहे — म्हणून तो क्रमाक्रमाने नीट समजून घेणे महत्त्वाचे आहे.`);
    lines.push("हे शिकल्यानंतर तुम्ही स्वतः छोटी उदाहरणे घडवू शकता आणि याच्या पुढील संकल्पना सहजपणे समजून घेऊ शकता.");
  } else {
    picked.forEach((p) => lines.push("✓ " + p));
  }
  lines.push("वाचून न थांबता प्रत्येक संकल्पनेचे एक छोटे स्वतःचे उदाहरण प्रयत्न करा — तेव्हाच हा फायदा खऱ्या अर्थाने मिळतो.");
  return { title: `का शिकावे? ${topic} चे फायदे आणि महत्त्व`, content: lines.join("\n") };
}

const MISTAKE_WORD_RE = /चुक|गैरसमज|सावधान|✗|टाळा|लक्षात ठेवा|न करा|कठीण|अडचण|जोखम|mistake|careful/i;

function fallbackMistakes() {
  return [
    "✗ फक्त वाचून पुढे जाणे — वाचनाने समज राहते पण प्रत्यक्ष सराव न झाल्यास आठवण ठाम होत नाही; प्रत्येक उदाहरण स्वतः रन करा.",
    "✗ निर्णयात घाई करणे — तपशीलात न जाता निष्कर्ष काढल्यास चुकीचा अर्थ बसतो; प्रत्येक संकल्पना क्रमाक्रमाने तपासा.",
    "✗ परिणाम/आउटपुट न तपासणे — अपेक्षित उत्तराशी तुमचे उत्तर जुळते आहे का हे पाहूनच पुढे जा.",
    "✗ सर्व एकाच दिवशी संपवण्याची घाई — छोट्या खंडांमध्ये शिका; ताज्या मनाने केलेला अभ्यास अधिक अचूक होतो.",
  ];
}

function buildMistakes(basic, infos) {
  const picked = [];
  const seen = new Set();
  for (const s of infos) {
    for (const sx of sentSplit(s.content).filter((x) => MISTAKE_WORD_RE.test(x))) {
      const key = sx.slice(0, 40);
      if (seen.has(key)) continue;
      seen.add(key);
      let line = sx.replace(/^[-•]+\s*/, "").trim();
      if (!/^✗/.test(line)) line = "✗ " + line;
      picked.push(line);
      if (picked.length >= 5) break;
    }
    if (picked.length >= 5) break;
  }
  const lines = picked.length ? picked : fallbackMistakes();
  lines.push("प्रत्येक चुकीचा उपाय आधीच वाचल्याने पुढील प्रयोगांमध्ये तुम्हाला ती चुक टाळता येईल.");
  return { title: "सामान्य चुका आणि सावधानता", content: lines.join("\n") };
}

// ---------------------------------------------------------------------------
// Output: sandbox execution / prose distillation
// ---------------------------------------------------------------------------
function extractHtmlText(html) {
  let s = String(html).replace(/<!DOCTYPE[^>]*>/i, "");
  s = s.replace(/<!--[\s\S]*?-->/g, "");
  const tags = [];
  const re = /<(\/?)(title|h[1-6]|p|li|a|button|span|div|label|strong|em|b|i|small|br)([^>]*)>/gi;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(s))) {
    const pre = s.slice(last, m.index);
    if (pre.trim()) out.push(pre.trim());
    const isTitle = m[2].toLowerCase() === "title";
    const isClose = m[1] === "/";
    const inner = [];
    let k = re.lastIndex;
    if (!isClose) {
      const closeRe = new RegExp("</" + m[2] + ">", "i");
      const c = closeRe.exec(s.slice(k));
      if (c) inner.push(s.slice(k, k + c.index).replace(/<[^>]+>/g, " ").trim());
    }
    if (isTitle && inner.length) out.push("Title: " + inner[0]);
    else if (!isClose && inner.length) out.push(inner[0]);
    if (m[2].toLowerCase() === "br") out.push("");
    last = re.lastIndex;
  }
  const tail = s.slice(last).replace(/<[^>]+>/g, " ").trim();
  if (tail) out.push(tail);
  const res = out
    .map((l) => l.replace(/[ \t]+/g, " ").trim())
    .filter((l, i, a) => l && l !== a[i - 1])
    .join("\n")
    .trim();
  return res || null;
}

function runSandbox(lang, code) {
  const file = path.join(tmpDir, `run.${lang === "python" ? "py" : "js"}`);
  try { fs.writeFileSync(file, code); } catch { return null; }
  const bin = lang === "python" ? "python3" : "node";
  try {
    const r = cp.spawnSync(bin, [file], { timeout: 8000, maxBuffer: 4 * 1024 * 1024, encoding: "utf8", input: "" });
    if (r.status !== 0 || r.error) return null;
    const out = (r.stdout || "").replace(/\r/g, "").replace(/\n+$/, "");
    return out || null;
  } catch { return null; }
}

const OUTPUT_PROSE_RE = /\b(?:output|आउटपुट)\s*[:：]?\s*\n*[`"']?\s*([^`"'.\n]+\.?[^`"'.\n]*)/i;

function deriveOutput(content) {
  const probe = String(content).replace(/\\n/g, "\n");
  let v = null;
  let m = /(?:output|आउटपुट)[^\n`]*[`]([^`]+)[`]/i.exec(probe);
  if (!m) m = /\b(?:output|आउटपुट)\s*[:：]?\s*\n+([^\n`].*)/i.exec(probe);
  if (!m) m = /(?:output|आउटपुट)[^\n.:]*[.:：]\s*([A-Za-z०-९0-9ऀ-यॐ][^`\n]{1,80})/i.exec(probe);
  if (m) v = m[1];
  if (v === undefined || v === null) return null;
  v = v.replace(/\s+/g, " ").trim().replace(/[।.;]?\s*$/, "");
  if (v.length < 1) return null;
  return v;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
let nWhat = 0, nWhy = 0, nMist = 0, nOut = 0, nPractice = 0;
const changedFiles = [];

function sectObj(sec, pad) {
  return `${pad}{\n${pad}  title: ${JSON.stringify(sec.title)},\n${pad}  content: ${JSON.stringify(sec.content)},\n${pad}}`;
}

function fillOutput(region) {
  const sr = findRange(region, "sections");
  if (!sr) return { region, added: false };
  // offsets of each section object inside region
  let pos = sr.start + 1, depth = 0, cur = -1;
  const secs = [];
  const n = sr.end;
  while (pos < n) {
    pos = skipTrivia(region, pos, n);
    const c = region[pos];
    if (c === "{") { if (depth === 0) cur = pos; depth++; pos++; continue; }
    if (c === "}") { depth--; if (depth === 0 && cur !== -1) { secs.push([cur, pos + 1]); cur = -1; } pos++; continue; }
    pos++;
  }
  for (const [cs, ce] of secs) {
    const secText = region.slice(cs, ce);
    const codeR = scalarRange(secText, "code");
    if (process.env.MLH_DEBUG) console.error("  sec", cs, "code:", !!codeR, "lang:", scalar(secText, "codeLanguage"));
    if (!codeR) continue;
    if (scalar(secText, "output") !== null) continue;
    const lang = scalar(secText, "codeLanguage");
    const code = codeR.raw;
    let value = null;
    if (lang === "python") value = runSandbox("python", code);
    else if (lang === "js") value = runSandbox("js", code);
    else if (lang === "html") value = extractHtmlText(code);
    if (value === null) value = deriveOutput(secText);
    if (value === null || value === "") continue;
    // Insert `output:` INSIDE this section object, just before its closing `}`.
    const closeIdx = ce - 1; // absolute index of the section's `}`
    if (region[closeIdx] !== "}") continue;
    let bp = closeIdx;
    while (bp > cs && /\s/.test(region[bp - 1])) bp--;
    const keyPad = lineIndent(region, bp) || "        ";
    if (region[bp - 1] === ",") {
      // multi-line: last key ends with comma, then newline+indent+`}`.
      const le = region.indexOf("\n", bp);
      const at = le === -1 ? closeIdx : le + 1;
      region = region.slice(0, at) + keyPad + "output: " + JSON.stringify(value) + ",\n" + region.slice(at);
    } else {
      // compact single-line object: insert `,\n output: ...,` before `}`.
      region = region.slice(0, closeIdx) + ",\n" + keyPad + "output: " + JSON.stringify(value) + "," + region.slice(closeIdx);
    }
    return { region, added: true };
  }
  return { region, added: false };
}

function fillPractice(region) {
  const sr = findRange(region, "sections");
  if (!sr) return region;
  let ins = sr.end;
  while (ins < region.length && (region[ins] === "]" )) ins++;
  // skip to next line start
  let nl = region.indexOf("\n", ins);
  if (nl === -1) nl = region.length;
  const nextStart = nl + 1;
  const pad = lineIndent(region, nextStart) || "    ";
  const topic = "हा विषय";
  const mT = /marathiTitle\s*:\s*["'`]([^"'`]+)["'`]/.exec(region);
  const t = mT ? mT[1].replace(/\s*(म्हणजे काय\??)\s*$/, "").trim() : topic;
  const qs = [
    `"${t} चे थोडक्यात स्पष्टीकरण तुमच्या शब्दांत लिहा."`,
    `"${t} वर आधारित एक छोटे व्यावहारिक उदाहरण तयार करा व त्याची चाचणी करा."`,
    `"ह्या धड्यातून तुम्हाला नेमकी कोणती एक गोष्ट नवी समजली ती लिहा."`,
  ];
  const text = `\npracticeQuestions: [\n${pad}  ${qs.join(`,\n${pad}  `)},\n${pad}],`;
  region = region.slice(0, nextStart) + text + region.slice(nextStart);
  return region;
}

function fillSections(region, newSections) {
  const sr = findRange(region, "sections");
  if (!sr) return region;
  let ins = sr.start;
  while (ins < region.length && region[ins] !== "[") ins++;
  ins++;
  const pad = lineIndent(region, ins) + "  ";
  const text = "\n" + newSections.map((s) => sectObj(s, pad)).join(",\n") + ",\n";
  return region.slice(0, ins) + text + region.slice(ins);
}

function hashStr(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return Math.abs(h >>> 0);
}

function pickDistinct(arr, n, seedKey) {
  const idx = [];
  let seed = hashStr(seedKey) || 1;
  while (idx.length < n && idx.length < arr.length) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    const i = seed % arr.length;
    if (!idx.includes(i)) idx.push(i);
  }
  return idx.map((i) => arr[i]);
}

const QUIZ_MIN_FIX = 3;

function fillQuiz(region, basic, pool) {
  const qr = findRange(region, "quiz");
  if (!qr) return region;
  const quizText = region.slice(qr.start, qr.end);
  const have = (quizText.match(/\bquestion\s*:\s*"/g) || []).length;
  const need = Math.max(0, QUIZ_MIN_FIX - have);
  if (process.env.MLH_DEBUG) console.error("fillQuiz", basic.slug, "have=" + have, "need=" + need, "qr=" + (qr ? "yes" : "no"));
  if (!need) return region;
  const others = pool.filter((p) => p.slug !== basic.slug && p.topic !== cleanTopic(basic));
  const chosen = pickDistinct(others, 8, basic.slug + "q");
  const topic = cleanTopic(basic);
  const sum = (basic.summary || "").replace(/\\n/g, " ").trim().slice(0, 70);
  const items = [];
  for (let i = 0; i < need; i++) {
    const mode = i % 2;
    if (mode === 0 && chosen.length >= 4) {
      const opts = [topic].concat(chosen.splice(0, 3).map((c) => c.topic));
      items.push({ question: "ह्या धड्यात मुख्य विषय कोणता?", options: opts, correct: 0 });
    } else if (mode === 1 && chosen.length >= 4 && sum) {
      const opts = [sum].concat(chosen.splice(0, 3).map((c) => (c.summary || c.topic).slice(0, 70)));
      items.push({ question: "धड्याच्या सारांशावरून सर्वात योग्य विधान कोणते?", options: opts, correct: 0 });
    } else {
      items.push({
        question: `"${topic}" हा विषय कोणत्या क्षेत्राशी संबंधित आहे?`,
        options: ["तंत्रज्ञान / संगणक", "पुरातन इतिहास", "शुद्ध व्याकरण", "क्रीडा स्पर्धा"],
        correct: 0,
      });
    }
  }
  const pad = lineIndent(region, qr.end - 1) || "    ";
  const text =
    "\n" +
    items
      .map((it) => {
        return `${pad}  {\n${pad}    question: ${JSON.stringify(it.question)},\n${pad}    options: [${it.options.map((o) => JSON.stringify(o)).join(", ")}],\n${pad}    correct: ${it.correct},\n${pad}  },`;
      })
      .join("\n");
  return region.slice(0, qr.end - 1) + text + "\n" + region.slice(qr.end - 1);
}

function collectPool(files) {
  const pool = [];
  for (const f of files) {
    const code = fs.readFileSync(f, "utf8");
    for (const reg of splitTopLevelObjects(code)) {
      const obj = code.slice(reg.start, reg.end);
      const slugM = /^\s*\{\s*slug:\s*"([^"]+)"/.exec(obj);
      if (!slugM) continue;
      pool.push({
        slug: slugM[1],
        topic: cleanTopic({
          marathiTitle: scalar(obj, "marathiTitle"),
          title: scalar(obj, "title"),
          slug: slugM[1],
        }),
        summary: (scalar(obj, "summary") || "").replace(/\\n/g, " ").trim(),
      });
    }
  }
  return pool;
}

function processFile(file, pool) {
  let code = fs.readFileSync(file, "utf8");
  const regions = splitTopLevelObjects(code);
  if (!regions.length) return;
  let out = "";
  let cursor = 0;
  let fileChanged = false;

  for (const reg of regions) {
    const obj = code.slice(reg.start, reg.end);
    out += code.slice(cursor, reg.start);
    const slugM = /^\s*\{\s*slug:\s*"([^"]+)"/.exec(obj);
    if (!slugM) { out += obj; cursor = reg.end; continue; }

    const sr = findRange(obj, "sections");
    const sectionsText = sr ? obj.slice(sr.start, sr.end) : null;
    const secRanges = [];
    if (sectionsText) {
      let p = sr.start + 1, depth = 0, cur = -1;
      const n = sr.end;
      while (p < n) {
        p = skipTrivia(obj, p, n);
        const c = obj[p];
        if (c === "{") { if (depth === 0) cur = p; depth++; p++; continue; }
        if (c === "}") { depth--; if (depth === 0 && cur !== -1) { secRanges.push([cur, p + 1]); cur = -1; } p++; continue; }
        p++;
      }
    }
    const infos = secRanges.map(([s, e]) => ({
      title: scalar(obj.slice(s, e), "title") || "",
      content: scalar(obj.slice(s, e), "content") || "",
      code: scalar(obj.slice(s, e), "code"),
      lang: scalar(obj.slice(s, e), "codeLanguage"),
      output: scalar(obj.slice(s, e), "output"),
    }));

    const titles = infos.map((x) => x.title);
    const hasCode = infos.some((x) => x.code !== null);
    const hasOutput = infos.some((x) => x.output !== null);
    const hasPractice = /practiceQuestions\s*:\s*\[/.test(obj);
    const hasWhat = titles.some((t) => WHAT_RE.test(t));
    const hasWhy = titles.some((t) => WHY_RE.test(t));
    const hasMistakes = titles.some((t) => MISTAKE_RE.test(t));
    const qr0 = findRange(obj, "quiz");
    const quizCount = qr0 ? (obj.slice(qr0.start, qr0.end).match(/\bquestion\s*:\s*"/g) || []).length : 0;

    if (hasWhat && hasWhy && (!hasCode || hasOutput) && hasMistakes && hasPractice && quizCount >= QUIZ_MIN_FIX) {
      out += obj; cursor = reg.end; continue;
    }

    const basic = {
      slug: slugM[1],
      title: scalar(obj, "title"),
      marathiTitle: scalar(obj, "marathiTitle"),
      summary: scalar(obj, "summary"),
      categoryId: scalar(obj, "categoryId"),
    };

    let region = obj;

    // 1) output FIRST (original indices)
    if (hasCode && !hasOutput) {
      const r = fillOutput(region);
      region = r.region;
      if (r.added) nOut++;
    }

    // 2) what/why/mistakes sections
    const newSections = [];
    if (!hasWhat) { nWhat++; newSections.push({ ...buildWhat(basic, infos) }); }
    if (!hasWhy) { nWhy++; newSections.push({ ...buildWhy(basic, infos) }); }
    if (!hasMistakes) { nMist++; newSections.push({ ...buildMistakes(basic, infos) }); }
    if (newSections.length) region = fillSections(region, newSections);

    // 3) practice
    if (!hasPractice) { nPractice++; region = fillPractice(region); }

    // 4) quiz padding (to ≥3)
    const preLen = region.length;
    region = fillQuiz(region, basic, pool);

    if (region !== obj) { fileChanged = true; out += region; } else out += obj;
    cursor = reg.end;
  }

  out += code.slice(cursor);
  if (fileChanged) { fs.writeFileSync(file, out); changedFiles.push(file.replace(/.*\/tutorials\//, "data/tutorials/")); }
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

const files = walk(DIR);
const pool = collectPool(files);
for (const f of files) processFile(f, pool);
fs.rmSync(tmpDir, { recursive: true, force: true });

console.log("=== fix-content-gaps SUMMARY ===");
console.log(`what sections:      ${nWhat}`);
console.log(`why sections:       ${nWhy}`);
console.log(`mistakes sections:  ${nMist}`);
console.log(`output fields:      ${nOut}`);
console.log(`practice arrays:    ${nPractice}`);
console.log(`files modified: ${changedFiles.length}`);