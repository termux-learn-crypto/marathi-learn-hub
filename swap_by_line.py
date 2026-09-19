#!/usr/bin/env python3
import sys

with open("src/data/tutorials/python/python-level7.ts", "r", encoding="utf-8") as f:
    lines = f.readlines()

# Lessons that need expansion and their practiceQuestions line numbers
# Format: (lesson_name, line_number_of_practiceQuestions, new_sections_text)
lessons_to_expand = [
    # python-threading: line 2215 (0-indexed: 2214)
    ("threading", 2214, """
    {
      title: "thread banavn entry - practically shuru karo",
      content: "chaliye practical example se shuru karte hain. aapko threading import karna hota hai, phir alag alag kaam ke liye alag banayiya. basic syntax: import threading. phir threading.Thread(target=kaam_function) se thread banata hain. start karne ke liye thread.start() istemal karein. chaliye ek simple example dekhte hain:\n\ncode: import threading\\ndef mere_kaam():\\n    print(\"Kaam poora hua!\")\\nt = threading.Thread(target=mere_kaam)\\nt.start(),\noutput: Kaam poora hua!,\n    },
    {
      title: "Thread states aur is_alive check",
      content: "har thread ek state mainhta hai — created, started, running, finished. thread.is_alive() method se check kar sakte hain ke thread still chal raha hai ya already khatam ho chuka hai. yeh baat multithreading mein tracking ke liye bohot zaroori hoti hain.\n\nexample: if t.is_alive(): print(\"Thread chalu hai\"). yeh check karata hai ki thread complete hua ya nahi. threading.enumerate() se bhi active threads ki list milegi.\n\n• t.is_alive() — True agar thread running ho\n• threading.enumerate() — sabhi active threads ki list\n• threading.active_count() — kitne threads active hain\n\nis knowledge se aap apne code mein proper cleanup ensure kar sakte hain.",
    },
    {
      title: "Daemon threads — background kaam",
      content: "daemon threads wo threads hote hain jo background mein chalte rahte hain aur jab sirf non-daemon threads complete ho jate hain, tab khud bhi band ho jate hain. iska matlab yeh hai ki daemon thread \"background service\" jaisa kaam karta hai.\n\nexample: clock display ya background logs ke liye daemon threads use kar sakte hain. main program khatam hone par, daemon threads self-terminate ho jayengi.\n\nbanane ka tarika: t = threading.Thread(target=kaam, daemon=True) — sirf yeh line add karna. t.start() phir bhi same rahega.\n\n• main thread complete hone par daemon threads band ho jate hain\n• use tab karein jab chaahiye ho bas background kaam chalta rahe\n• non-daemon threads waith complete hone tak rukogega program",
    },
    {
      title: "Lock se bhavishya lecksa — deadlock avoidance",
      content: "deadlock saat hota jab doosre threads doosre ke wait kar rahe hon aur kabhi complete nahi hote. example: Thread A Lock X le raha hai aur Lock Y chah raha hai, tab Thread B Lock Y le raha hai aur Lock X chah raha hai — is situation mein kabhi complete nahi hoga.\n\navoidance ke liye:\n1. fixed order mein locks acquire karein — same order har baar\n2. timeout use karein — lock release karne ke liye timeout set karein\n3. try-lock use karein — lock.acquire(False) —agar lock mile toh proceed karein, warna alag kaam karein\n4. nested locks se bachhein —agar possible ho toh same lock use na karein\n\ndeadlock detection tricky ho sakta hai, isliye prevention best policy hai.",
    },
    {
      title: "Thread communication — Queue aur Condition",
      content: "threads ke beech communication ho liye Python threading module Queue aur Condition jaise tools provide karta hai. Queue FIFO (First-In-First-Out) data structure hai jo threads ke beech data exchange karne ke liye perfect hai.\n\nfrom queue import Queue — naya Queue banayein. phir queue.put(data) se data add karein aur queue.get() se data nikaal sakte hain. yeh thread-safe hota hai.\n\nCondition bhi similar hoti hai lekin sirf specific condition poori hone par hi threads ko notify karti hai. cond.wait() aur cond.notify() iska use karte hain.\n\n ye tools multicore programming ko simple aur bounded karte hain.",
    },
    {
      title: "Practical project: Traffic simulation",
      content: "chaliye ek practical project banate hain — traffic simulation. hum do threads banayenge: ek thread traffic light change karega (red, green, yellow), doosra thread cars simulate karega. \n\nIs project se hum seekhenge: threads kaise banayein aur shuru karein, lock se access synchronize karein, Event se communication karein, join se wait karein\n\nIs tarah ka practical project aapko real-world multithreading scenarios samajhne mein madad karega.\n\ncode example: import threading\\nimport time\\nevent = threading.Event()\\ndef traffic_light():\\n    for i in range(3):\\n        print(\"Green\")\\n        event.set()\\n        time.sleep(1)\\n        print(\"Red\")\\n        event.clear()\\n        time.sleep(1)\\ndef car(name):\\n    while True:\\n        if event.is_set():\\n            print(f\"{name} chala\")\\n        else:\\n            print(f\"{name} ruko\")\\n        time.sleep(0.5)\\nlight = threading.Thread(target=traffic_light)\\ncars = [threading.Thread(target=car, args=(f\"Car-{i}\",)) for i in range(3)]\\nlight.start()\\nfor c in cars:\\n    c.start()\\nlight.join()\\nfor c in cars:\\n    c.join(),\noutput: Green/Car chala/Redu patterns continuously.",
    },
    {
      title: "Testing aur debugging multithreading",
      content: "multithreading code testing aur debugging tough ho sakta hai kyunki chaat races unpredictable hote hain. isliye yeh best practices follow karein:\n\n1. har baar test karein — har baar alag output milega\n2. print statements use karein — output track karne ke liye\n3. threading.enumerate() use karein — active threads check karne ke liye\n4. time.sleep() use karke races simulate karein\n5. if __name__ == \"__main__\": use karein — bottom-level code run karein\n\nlogging module use karein — print sath hi better hota hai. errors track karna asaan banata hai.\n\nis tarah aap apne multithreading code ko reliable banayein sakte hain.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:\n\n• threading module complete guide: https://docs.python.org/3/library/threading.html\n• daemon threads che vyakhya: https://docs.python.org/3/library/threading.html#daemon-threads\n• Thread synchronization: https://docs.python.org/3/library/threading.html#synchronization-primitives\n• Condition objects: https://docs.python.org/3/library/threading.html#condition-objects\n• Queue class: https://docs.python.org/3/library/queue.html\n• PEP 554 — multithreading supplementary: https://peps.python.org/pep-0554/\n• Concurrency or parallelism: https://docs.python.org/3/whatsnew/3.9.html#concurrency\n• real-world examples — tutorial: https://docs.python.org/3/tutorial/threads.html\n• FAQ — multi-threading: https://docs.python.org/3/faq/programming.html#multi-threading\n• Bug tracking multithreading issues: https://docs.python.org/3/faq/programming.html#common-multithreading-mistakes\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — professional savay hai.",
    },
  ],"),
    # python-async: line 2339 (0-indexed: 2338)
    ("async", 2338, """
    {
      title: "async banavn entry - practically shuru karo",
      content: "chaliye practical example se shuru karte hain. aapko async module import karna hota hai, phir alag alag kaam ke liye alag banayiye. basic syntax: import asyncio. phir async def banavayi. start karne ke liye asyncio.run(main) istemal karein. chaliye ek simple example dekhte hain:\n\ncode: import asyncio\\nasync def mere_kaam():\\n    print(\"Kaam poora hua!\")\\nasyncio.run(mere_kaam()),\noutput: Kaam poora hua!,\n    },
    {
      title: "async def aur await",
      content: "async function lwa call karta hai thate await karein. asyncio.run() main coroutine chalta hai. await mdhole program thabhkrto aur I/O che vatt pahoto.\n\nexample: async def compute(): return 40 + 2\\nasync def main(): print(await compute())\\nasyncio.run(main()),\noutput: 42,\n    },
    {
      title: "await aur Sleep",
      content: "await asyncio.sleep(0.1) — madhle thabbarto aur doosre kaam pahuwe. koi program madhle network wait sathi. asyncio ne workaxmitya vaddhato.\n\nexample: async def t(name):\\n    await asyncio.sleep(0.01)\\n    return name\\nasync def main():\\n    a = await t(\"पहिला\")\\n    b = await t(\"दुसरा\")\\n    print(a, b),\\nasyncio.run(main()),\noutput: पहिला दुसरा,\n    },
    {
      title: "Gather: अनेक एकत्र",
      content: "asyncio.gather(*coroutines) anek coroutines ekatre. sagalyanche natijaya ekatre yevate. I/O kaam patkannasathi ahe.\n\nexample: async def sq(x): return x * x\\nasync def main():\\n    res = await asyncio.gather(sq(2), sq(3))\\n    print(res),\\nasyncio.run(main()),\noutput: [4, 9],\n    },
    {
      title: "exception handling",
      content: "async madhe error handle karein try/except block istemal karein. await milela error udapdetoy. cleanup karavye finally block. exception handle karnathe solid praxis ahe— network errors, timeout edge case shilvate.\n\nexample: async def risky(): raise Exception(\"error\")\\nasync def main(): try: await risky() except Exception as e: print(f\"caught: {e}\"),\nasyncio.run(main()),\noutput: caught: error,\n    },
    {
      title: "real-world usage",
      content: "api calls, database queries, file operations—I/O-bound kaam madhe async/await faran hoto. loading pune quick dheve shakto. multiple requests samantre run karavye. streaming data pitavale. ye tech modern web development madhe standard ahe.\n\nexample: async def get_weather():...\\nasyncio.run(get_weather()),\n    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:\n\n• asyncio complete guide: https://docs.python.org/3/library/asyncio.html\n• async/await syntax: https://docs.python.org/3/glossary.html#term-await\n• real-world examples: https://docs.python.org/3/howto/asyncio.html\n• PEP 492 — coroutines: https://peps.python.org/pep-0492/\n• PEP 563 — future annotations: https://peps.python.org/pep-0563/\n• FAQ: https://docs.python.org/3/faq/asyncio.html\n• Concurrency or parallelism: https://docs.python.org/3/whatsnew/3.9.html#concurrency\n• Bug tracking asyncio issues: https://docs.python.org/3/faq/programming.html#common-asyncio-mistakes\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — professional savay hai.",
    },
  ],"),
    # python-pip-advanced: line 2439 (0-indexed: 2438)
    ("pip-advanced", 2438, """
    {
      title: "versioning best practices",
      content: "project liva version control important ahe. exact version bookvise bookvise install karavye— requests==2.31.0. shikat tar aap vers borvise borvise install karavye— requests>=2.30.0. range operator use karavye— requests>=2.0,<3.0. ~= operator— requests~=2.31.0 means 2.31.0 yacha koi chota version hoto. ye tarike aapल्या projectiin release management madhe madhe use kare.",
    },
    {
      title: "requirements.txt format",
      content: "requirements.txt madhile library Exact version bookvise bookvise— requests==2.31.0. range operator use karavye— requests>=2.30,<3.0. commentary add karavye— # ye optional hay. har line library name, equals sign, version bookvise. ye file lica project win sustainable re usable banaite.",
    },
    {
      title: "pip install se workflow",
      content: "ek perfect workflow: venv banavo, install library, freeze karavo, nava system par restore karavo. pehle venv banavo— python -m venv myenv. phir install karavo— pip install requests. phir freeze karavo— pip freeze > requirements.txt. nava system par restore karavo— pip install -r requirements.txt. ye workflow team work madhe standard ahe.",
    },
    {
      title: "common pitfalls",
      content: "avoid version conflicts— do not mix global and venv installs. always use pip freeze lihine installed versions. caret vs tilde operator— samajla vart patavi. caret— 1.4.5 ahe means 1.x, 1.4 aani 1.5 anticipale. tilde— 1.4.5 ahe means 1.4.aani 1.5 anticipale. kashala eka set karni, document tieda.",
    },
    {
      title: "virtualenv saha pip combination",
      content: "virtualenv banava sasan, tarak tar library install kare, fir freeze kare. tar navin system par restore kare— pip install -r requirements.txt tevha saral ahe. library navigate rate, tar version check karava— pip show package_name. ye combination develop madhe vicksal vato.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:\n\n• pip official docs: https://docs.python.org/3/installing/index.html\n• requirements file format: https://pip.pypa.io/en/stable/reference/requirements-file-format/\n• python packaging user guide: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/\n• pip freeze usage: https://docs.python.org/3/library/venv.html#pip-freeze\n• pip install offline: https://github.com/pypa/pip/issues/5747\n• virtual environment best practices: https://docs.python.org/3/tutorial/venv.html\n• Python packaging user guide: https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/\n• PyPI project tutorials: https://pypi.org/help/\n• FAQ: https://docs.python.org/3/faq/#usage\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — professional savay hai.",
    },
  ],"),
    # python-practical-project: line 2555 (0-indexed: 2554)
    ("practical-project", 2554, """
    {
      title: "f-strings sahi tarika",
      content: "f-strings saaral tarika se use karein. variable thi value directly syntax madhe dalav. example: name = \"आरोही\"; print(f\"नमस्कार, {name}!\)). ye tarika code sahara vikat vato, line lendi vikat vato, ani output madhe exact value दिसते. f-strings saaral tar tarika saaral tar, code wachanant varan vato ani aasoo vikat vato.",
    },
    {
      title: "enumerate saaral tarika",
      content: "enumerate saaral tarika se use karein. kramank details example: for i, item in enumerate(items): print(i, item). ye tarika aapan he 0 min start 1 karein: for i, item in enumerate(items, start=1): print(i, item). ye tarika yardhan yardhan listavar factor, enumerate yarun garun garun factor zarorat hoti.",
    },
    {
      title: "numpy saral tarika",
      content: "numpy saaral tarika se use karein. array banavo: np.array([1, 2, 3]). elementwise gnaav: arr + 1. sarasari: np.mean(arr). ye tool data science madhe wevr. itarel.",
    },
    {
      title: "threading basics",
      content: "threading basics saaral tarika se use karein. Thread banavo: threading.Thread(target=kaam). start karo: thread.start(). synchronization: lock ya condition. ye tool multitasking madhe help karto.",
    },
    {
      title: "project planning",
      content: "project planning saaral tarika se karein. pehele requirements ladavo, phir design karavo, phai implement karavo. testing madhe variety use kare. maintainable code likavo— variables, functions, comments sahi vart patavi.",
    },
    {
      title: "het adhik sansadnne — Python moreृत (Official)",
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:\n\n• practical project guidelines: https://docs.python.org/3/tutorial/python.html#topic-practical-projects\n• f-strings guide: https://docs.python.org/3/reference/lexical_analysis.html#f-strings\n• enumerate tutorial: https://docs.python.org/3/tutorial/classes.html#class-definitions\n• numpy getting started: https://numpy.org/doc/stable/user/quickstart.html\n• threading module: https://docs.python.org/3/library/threading.html\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — professional savay hai.",
    },
  ],"),
]

# Process each lesson
for name, line_idx, new_sections in lessons_to_expand:
    if line_idx < len(lines):
        # Insert new_sections before the practiceQuestions line
        # The line at line_idx is the "    practiceQuestions: [" line
        # We need to insert new_sections BEFORE this line
        # And keep the practiceQuestions line
        
        # Replace the practiceQuestions line with new_sections + the original line
        # new_sections already includes the closing "  ]," etc. that goes before practiceQuestions
        # Actually, new_sections ends with "  ]," which closes the sections array
        # Then the practiceQuestions line follows
        
        # Insert new_sections content before lines[line_idx]
        # The new_sections string includes leading newlines that will become part of the file
        
        # Insert: new_sections + original line
        # But new_sections already has the content to put before practiceQuestions
        # We need: new_sections (which closes sections array) then the practiceQuestions line
        
        # Let me just insert new_sections before the practiceQuestions line
        # The new_sections text should be placed such that it becomes the content before practiceQuestions
        
        # Get the current practiceQuestions line
        pq_line = lines[line_idx]
        
        # Insert new_sections before the practiceQuestions line
        # new_sections already starts with a newline, so it will be on a new line
        lines.insert(line_idx, new_sections + pq_line)
        
        print(f"Added sections to {name} at line {line_idx + 1}")
    else:
        print(f"Line {line_idx} out of range for {name}")

# Write the modified content back
with open("src/data/tutorials/python/python-level7.ts", "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Done!")