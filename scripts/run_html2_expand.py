#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Runner: expands all 12 HTML L2 lessons by N rounds using html2_ban.py banks.
# Usage: python3 scripts/run_html2_expand.py <round>  (e.g. 1,2,3)
import importlib.util
import sys, os

ROOT = "/data/data/com.termux/files/home/marathi-learn-hub"
TMP = "/data/data/com.termux/files/usr/tmp/opencode"
BANK = os.path.join(ROOT, "scripts/html2_ban.py")

spec = importlib.util.spec_from_file_location("ban", BANK)
ban = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ban)

SLUGS = ["html-semantics", "html-media-content", "html-entities", "html-meta-head",
         "html-seo-fundamentals", "html-accessibility", "html-responsive-images",
         "html-forms-advanced", "html-tables-advanced", "html-svg-canvas",
         "html-text-international", "html-portfolio-project"]

rounds = [int(x) for x in sys.argv[1:]] or [1, 2, 3]

for r in rounds:
    for slug in SLUGS:
        mod = os.path.join(TMP, "adds_html2_%s_r%d.py" % (slug.replace("html-", ""), r))
        open(mod, "w", encoding="utf8").write(ban.emit_module(slug, r))
        os.system(f"python3 {ROOT}/scripts/expand.py html-level2 {slug} {mod}")
    print("round", r, "done")
print("ALL ROUNDS DONE")