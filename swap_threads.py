#!/usr/bin/env python3
import re, sys

with open("src/data/tutorials/python/python-level7.ts", "r", encoding="utf-8") as f:
    content = f.read()

# New sections to add before practiceQuestions for python-threading
new_sections = """

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
      content: "khalline Python moreृत dस्तऐवजांचa yevam — vachan ani sandharasathi:\n\n• threading module complete guide: https://docs.python.org/3/library/threading.html\n• daemon threads che vyakhya: https://docs.python.org/3/library/threading.html#daemon-threads\n• Thread synchronization: https://docs.python.org/3/library/threading.html#synchronization-primitives\n• Condition objects: https://docs.python.org/3/library/threading.html#condition-objects\n• Queue class: https://docs.python.org/3/library/queue.html\n• PEP 554 — multithreading supplementary: https://peps.python.org/pep-0554/\n• Concurrency or parallelism: https://docs.python.org/3/whatsnew/3.9.html#concurrency\n• real-world examples — tutorial: https://docs.python.org/3/tutorial/threads.html\n• FAQ — multi-threading: https://docs.python.org/3/faq/programming.html#multi-threading\n• Bug tracking multithreading issues: https://docs.python.org/3/faq/programming.html#common-multithreading-mistakes\n\npratyek nuda ughda — acch vyakha an moreृत srotavarun samajun gheya — hech professional savay hai.",
    },
  ],"""

# The pattern to match: we need to insert before "    practiceQuestions: ["
# for the threading lesson. Let me find the exact position.
# I'll match the pattern that appears before practiceQuestions in the threading section.
# From the file analysis, the pattern is: closing tags followed by "    practiceQuestions: ["

# Let me search for the specific pattern near the threading section
# I'll look for "    practiceQuestions: [" and replace it with new_sections + the same pattern
pattern = "    practiceQuestions: ["

match = re.search(re.escape(pattern), content)
if match:
    start_pos = match.start()
    print(f"Found 'practiceQuestions: [' at position {start_pos}")
    
    # Replace the first occurrence
    new_content = content.replace(pattern, new_sections + pattern, 1)
    
    with open("src/data/tutorials/python/python-level7.ts", "w", encoding="utf-8") as f:
        f.write(new_content)
    
    print("File updated successfully")
else:
    print("Pattern not found!")
    sys.exit(1)