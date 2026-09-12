#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# Direct patcher: appends merged() Devanagari lines into a lesson's section .content
P = "/data/data/com.termux/files/home/marathi-learn-hub/src/data/tutorials/python-level5.ts"
src = open(P, encoding="utf8").read()

def merged(head, tail):
    return [f"{h} {t}" for h in head for t in tail]

# section index -> new content lines (appended)
ADDS = {
4: merged(
    ['फोन डेटा', 'दैनिक उदाहरण', 'ऑब्जेक्ट फायदा'],
    ['साठवणीत राहतो.', 'लागू पडते.', 'वाढतोच.',],
),
5: merged(
    ['संधी शिकणे', 'सराव सुधारणा', 'टीप वाचन'],
    ['प्रत्येक चुकीतून.', 'हळूहळू सुधार.', 'महत्त्वाचे.',],
),
7: merged(
    ['गाणे निरीक्षण', 'आवड निरीक्षण', 'इंटरॅक्टिव्ह आनंद'],
    ['शीर्षक बदलता.', 'गाणे सापडते.', 'प्रत्यक्ष शिकवण.',],
),
}

start = src.index('  {\n    slug: "python-classes",')
end = src.index('  {\n    slug: "python-init",')
seg = src[start:end]

sec_start = seg.index('    sections: [\n')
sec_end = seg.index('    ],\n', sec_start)
secs = seg[sec_start:sec_end]

lines = secs.split('\n')
in_target_content = None
# We iterate section blocks by their 'content:' occurrences to append lines.
import re
# find 'content: "....."' then the closing '",' or '"\n' for each section
# Strategy: split segments by '      {'
parts = secs.split('      {')
assert len(parts) == 10, f"expected 9 sections + leading, got {len(parts)}"

new_parts = [parts[0]]
for idx in range(1, 10):
    block = parts[idx]
    if idx - 1 in ADDS:
        # find first `content:` line
        m = re.search(r'(content: ")((?:[^"\\]|\\.)*)("(?:,|$))', block, re.S)
        assert m, f"no content in section {idx-1}"
        inner = m.group(2)
        extra = '\\n'.join(ADDS[idx - 1])
        new_inner = inner + '\\n' + extra
        block = block[:m.start(2)] + new_inner + block[m.end(2):]
    new_parts.append(block)

new_secs = '      {'.join(new_parts)
assert new_secs.count('      {') == 9, "section count changed"

new_seg = seg[:sec_start] + new_secs + seg[sec_end:]
src = src[:start] + new_seg + src[end:]
open(P, "w", encoding="utf8").write(src)
print("patched python-classes sections:", list(ADDS.keys()))