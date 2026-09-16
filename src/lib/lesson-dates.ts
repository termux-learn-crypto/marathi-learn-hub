import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const tutorialsDir = path.join(repoRoot, "src/data/tutorials");

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

function lastContentDate(file: string): string | undefined {
  const rel = path.relative(repoRoot, file);
  let out: string;
  try {
    out = execFileSync(
      "git",
      ["log", "--follow", "--name-status", "--format=%cI", "--", rel],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    );
  } catch {
    return undefined;
  }
  let curDate: string | null = null;
  let curStatuses: string[] = [];
  const entries: { date: string; statuses: string[] }[] = [];
  for (const line of out.split("\n")) {
    const t = line.trim();
    if (/^\d{4}-\d{2}-\d{2}T/.test(t)) {
      if (curDate) entries.push({ date: curDate, statuses: curStatuses });
      curDate = t;
      curStatuses = [];
    } else if (t && curDate) {
      curStatuses.push(t.split("\t")[0]);
    }
  }
  if (curDate) entries.push({ date: curDate, statuses: curStatuses });
  for (const e of entries) {
    if (!e.statuses.length) return e.date;
    if (e.statuses.every((s) => s.startsWith("R100"))) continue;
    return e.date;
  }
  return undefined;
}

export function getLessonDates(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const file of walk(tutorialsDir)) {
    const date = lastContentDate(file);
    if (!date) continue;
    const code = fs.readFileSync(file, "utf8");
    const re = /slug: "([^"]+)"/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(code)) !== null) map[m[1]] = date;
  }
  return map;
}