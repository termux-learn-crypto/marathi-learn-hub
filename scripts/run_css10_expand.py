# -*- coding: utf-8 -*-
import sys, os, subprocess

TMP = "/data/data/com.termux/files/usr/tmp/opencode"
os.makedirs(TMP, exist_ok=True)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVEL = "css-level10"

SLUGS = ["css-is-anywhere", "css-nesting-rules", "css-has-selector", "css-range-media",
         "css-viewport-units", "css-multicolumn", "css-motion-path", "css-filters-fx",
         "css-counters-lab", "css-isolation-z", "css-svg-styles", "css-marathi-capstone10"]

SHORTS = {
 "css-is-anywhere":"cia", "css-nesting-rules":"cnr", "css-has-selector":"chs",
 "css-range-media":"crm", "css-viewport-units":"cvu", "css-multicolumn":"cm",
 "css-motion-path":"cmp", "css-filters-fx":"cff", "css-counters-lab":"ccl",
 "css-isolation-z":"ciz", "css-svg-styles":"css", "css-marathi-capstone10":"cmc10",
}

def short(slug):
    if slug in SHORTS:
        return SHORTS[slug]
    parts = slug.split("-")
    return "".join(p[0] for p in parts)

def main(frm, to):
    for r in range(frm, to + 1):
        for slug in SLUGS:
            mod = os.path.join(TMP, "adds_css10_%s_r%d.py" % (short(slug), r))
            code = subprocess.Popen(
                [sys.executable, "-c",
                 "import sys; sys.path.insert(0, 'scripts'); import css10_ban; sys.stdout.write(css10_ban.emit_module(%r, %d))" % (slug, r)],
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
