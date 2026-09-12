# -*- coding: utf-8 -*-
import sys, os, subprocess

TMP = "/data/data/com.termux/files/usr/tmp/opencode"
os.makedirs(TMP, exist_ok=True)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVEL = "css-level13"

SLUGS = ["css-grid-template", "css-auto-fit-fill", "css-current-color",
         "css-cascade-keywords", "css-typographic-units", "css-animation-easing",
         "css-focus-within", "css-env-function", "css-overflow-deep",
         "css-table-layout", "css-page-break", "css-marathi-capstone13"]

SHORTS = {
 "css-grid-template": "cgt", "css-auto-fit-fill": "caf", "css-current-color": "ccc",
 "css-cascade-keywords": "cck", "css-typographic-units": "ctu", "css-animation-easing": "cae",
 "css-focus-within": "cfw", "css-env-function": "cen", "css-overflow-deep": "cod",
 "css-table-layout": "ctl", "css-page-break": "cpb", "css-marathi-capstone13": "cmc13",
}

def short(slug):
    if slug in SHORTS:
        return SHORTS[slug]
    parts = slug.split("-")
    return "".join(p[0] for p in parts)

def main(frm, to):
    for r in range(frm, to + 1):
        for slug in SLUGS:
            mod = os.path.join(TMP, "adds_css13_%s_r%d.py" % (short(slug), r))
            code = subprocess.Popen(
                [sys.executable, "-c",
                 "import sys; sys.path.insert(0, 'scripts'); import css13_ban; sys.stdout.write(css13_ban.emit_module(%r, %d))" % (slug, r)],
                cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
            stdout, stderr = code.communicate()
            if code.returncode != 0 or not stdout.startswith("#"):
                print("GENFAIL", slug, r, stderr[:300]); continue
            with open(mod, "w", encoding="utf-8") as f:
                f.write(stdout)
            res = subprocess.run(
                [sys.executable, "scripts/expand.py", LEVEL, slug, mod],
                cwd=ROOT, capture_output=True, text=True)
            print("r%d" % r, slug, "->", res.returncode, (res.stdout or res.stderr).strip()[:160])

if __name__ == "__main__":
    a, b = int(sys.argv[1]), int(sys.argv[2]) if len(sys.argv) > 2 else int(sys.argv[1])
    main(a, b)