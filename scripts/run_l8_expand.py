#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Runner: expands all 13 L8 lessons by N rounds using l8_ban.py banks.
# Usage: python3 scripts/run_l8_expand.py <round>  (e.g. 1,2,3)
import importlib.util
import sys, os

ROOT = "/data/data/com.termux/files/home/marathi-learn-hub"
TMP = "/data/data/com.termux/files/usr/tmp/opencode"
BANK = os.path.join(ROOT, "scripts/l8_ban.py")

spec = importlib.util.spec_from_file_location("ban", BANK)
ban = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ban)

SLUGS = ["python-match-case", "python-context-managers", "python-type-hints",
         "python-advanced-files", "python-sqlite-databases", "python-web-flask",
         "python-rest-api", "python-data-analysis", "python-machine-learning",
         "python-networking", "python-security", "python-gui-tkinter",
         "python-automation-system"]

rounds = [int(x) for x in sys.argv[1:]] or [1, 2, 3]

for r in rounds:
    for slug in SLUGS:
        mod = os.path.join(TMP, "adds_l8_%s_r%d.py" % (slug.replace("python-", ""), r))
        open(mod, "w", encoding="utf8").write(ban.emit_module(slug, r))
        os.system(f"python3 {ROOT}/scripts/expand.py python-level8 {slug} {mod}")
    print("round", r, "done")
print("ALL ROUNDS DONE")