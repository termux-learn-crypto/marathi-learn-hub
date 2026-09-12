# -*- coding: utf-8 -*-
import sys, os, subprocess

TMP = "/data/data/com.termux/files/usr/tmp/opencode"
os.makedirs(TMP, exist_ok=True)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
LEVEL = "css-level15"

SLUGS = ["css-cascade-layers", "css-native-nesting", "css-logical-properties",
         "css-scroll-snap", "css-focus-visible", "css-accent-color",
         "css-caret-selection", "css-columns-layout", "css-dialog-backdrop",
         "css-anchor-positioning", "css-property-registry", "css-marathi-capstone15"]

SHORTS = {
 "css-cascade-layers": "clay", "css-native-nesting": "cnest", "css-logical-properties": "clog",
 "css-scroll-snap": "csnap", "css-focus-visible": "cfv18", "css-accent-color": "cac",
 "css-caret-selection": "csel", "css-columns-layout": "ccol", "css-dialog-backdrop": "cdb",
 "css-anchor-positioning": "canc", "css-property-registry": "cpr15", "css-marathi-capstone15": "cmc15",
}

def short(slug):
    if slug in SHORTS:
        return SHORTS[slug]
    parts = slug.split("-")
    return "".join(p[0] for p in parts)

def main(frm, to):
    for r in range(frm, to + 1):
        for slug in SLUGS:
            mod = os.path.join(TMP, "adds_css15_%s_r%d.py" % (short(slug), r))
            code = subprocess.Popen(
                [sys.executable, "-c",
                 "import sys; sys.path.insert(0, 'scripts'); import css15_ban; sys.stdout.write(css15_ban.emit_module(%r, %d))" % (slug, r)],
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