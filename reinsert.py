#!/usr/bin/env python3
import sys
import os

os.chdir('/data/data/com.termux/files/home/marathi-learn-hub')

with open('src/data/tutorials/python/python-level7.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# For each lesson, insert new sections before the practiceQuestions line
# Line numbers are 0-indexed and refer to the position of '    practiceQuestions: ['
targets = {
    2311: [  # python-threading
        '    {',
        '      title: "thread banavn entry - practically shuru karo",',
        '      content: "chaliye practical example se shuru karte hain. aapko threading import karna hota hai, phir alag alag kaam ke liye alag banayiya. basic syntax: import threading. phir threading.Thread(target=kaam_function) se thread banata hain. start karne ke liye thread.start() istemal karein. chaliye ek simple example dekhte hain:",',
        'code: import threading\\ndef mere_kaam():\\n    print(\"Kaam poora hua!\")\\nt = threading.Thread(target=mere_kaam)\\nt.start(),',
        'output: Kaam poora hua!,',',
        '    {',
        ' in threading content truncated for brevity - this approach is too complex',
    ],
    # ... more targets
}

# This approach is getting too complex. Let me try a different strategy.
# Let me just use the edit tool with a very simple pattern and accept that it might modify python-fstrings.

# Actually, let me just verify the current state and see if we can make progress another way.
print("Current word counts:")
import subprocess
result = subprocess.run(['node', 'scripts/audit-words.js', '--cat=python', '--top=10'], capture_output=True, text=True)
print(result.stdout)
"