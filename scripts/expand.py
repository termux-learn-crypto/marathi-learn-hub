#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Generic lesson expander: appends merged() Devanagari lines into a lesson's
# section .content in a level TS file.
# Usage: python3 expand.py <levelfile> <slug> <adds_py>
#   levelfile: "python-level5" (resolved under src/data/tutorials/)
#   slug: e.g. "python-init"
#   adds_py: python module (path) exporting ADD dict: {sec_index: [line, ...]}
import importlib.util
import re
import sys

P = "/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/%s.ts" % sys.argv[1]
SLUG = sys.argv[2]
spec = importlib.util.spec_from_file_location("adds", sys.argv[3])
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)
ADDS = mod.AD

src = open(P, encoding="utf8").read()

start = src.index('  {\n    slug: "%s",' % SLUG)
# find next lesson slug as end boundary
tail_marker = '  {\n    slug: "'
rest = src[start + 1:]
m = re.search(r'\n  \{\n    slug: "', rest)
if m:
    end = start + 1 + m.start()
else:
    # last lesson: boundary is the closing of the lessons array
    m2 = re.search(r'\n  \},\n\];', rest) or re.search(r'\n  },];', rest)
    assert m2, "no next slug found (last lesson?)"
    end = start + 1 + m2.start() + len('\n  },')
seg = src[start:end]

sec_start = seg.index('    sections: [\n')
sec_end = seg.index('    ],\n', sec_start)
secs = seg[sec_start:sec_end]

parts = secs.split('      {')
n_sections = len(parts) - 1

new_parts = [parts[0]]
for idx in range(1, len(parts)):
    block = parts[idx]
    key = idx - 1
    if key in ADDS:
        m2 = re.search(r'(content: ")((?:[^"\\]|\\.)*)("(?=(?:,| ?\}|\s*$)))', block, re.S) or \
             re.search(r'(content: ")((?:[^"\\]|\\.)*)(")', block, re.S)
        assert m2, f"no content in section {key}"
        inner = m2.group(2)
        extra = '\\n'.join(ADDS[key])
        block = block[:m2.start(2)] + inner + '\\n' + extra + block[m2.end(2):]
    new_parts.append(block)

new_secs = '      {'.join(new_parts)
assert new_secs.count('      {') == n_sections, "section count changed"

new_seg = seg[:sec_start] + new_secs + seg[sec_end:]
src = src[:start] + new_seg + src[end:]
open(P, "w", encoding="utf8").write(src)
print("expanded", SLUG, "sections:", sorted(ADDS.keys()))