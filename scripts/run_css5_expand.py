# -*- coding: utf-8 -*-
import sys, os, subprocess

TMP = "/data/data/com.termux/files/usr/tmp/opencode"
os.makedirs(TMP, exist_ok=True)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVEL = "css-level5"

SLUGS = ["css-clip-path", "css-gradient-deep", "css-grid-auto-flow",
         "css-counters-lists", "css-shape-outside", "css-scrollbar-style",
         "css-stacking-context", "css-pseudo-classes", "css-viewport-units",
         "css-media-ranges", "css-border-effects", "css-marathi-capstone5"]

SHORTS = {"css-scrollbar-style": "sbstyle"}

def short(slug):
    if slug in SHORTS:
        return SHORTS[slug]
    parts = slug.split("-")
    return "".join(p[0] for p in parts)

def main(frm, to):
    for r in range(frm, to + 1):
        for slug in SLUGS:
            mod = os.path.join(TMP, "adds_css5_%s_r%d.py" % (short(slug), r))
            code = subprocess.Popen(
                [sys.executable, "-c",
                 "import sys; sys.path.insert(0, 'scripts'); import css5_ban; sys.stdout.write(css5_ban.emit_module(%r, %d))" % (slug, r)],
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