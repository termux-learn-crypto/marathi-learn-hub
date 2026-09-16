import type { Tutorial } from "@/data/tutorials";

export const linuxLessons: Tutorial[] = [
{
    slug: "linux-basics",
    categoryId: "linux",
    title: "Linux Basics",
    marathiTitle: "Linux - मुक्त संगणक ऑपरेटिंग सिस्टम",
    level: "beginner",
    minutes: 15,
    summary: "Linux ही मुक्त (open-source) ऑपरेटिंग सिस्टम आहे. मूलभूत commands शिका.",
    sections: [
      {
        title: "Linux म्हणजे काय?",
        content: "Linux ही एक free आणि open-source ऑपरेटिंग सिस्टम आहे. ती अनेक servers, smartphones आणि संगणकांवर चालते.\n\nLinux मध्ये सर्व काही file आहे - फाइल्स, directories, devices.\n\nTerminal (कमांड लाइन) वापरून आपण संगणकाशी संवाद साधतो. हे GUI पेक्षा जास्त शक्तिशाली आणि fast असते.",
        code: `# फाइल्स पाहणे
ls

# सध्याची directory
pwd

# directory बदलणे
cd /home/user

# नवीन फाइल बनवणे
touch test.txt

# फाइल वाचणे
cat test.txt

# directory बनवणे
mkdir new_folder

# फाइल कॉपी करणे
cp test.txt test_copy.txt

# फाइल हलवणे/रिनेम करणे
mv test_copy.txt renamed.txt

# फाइल डिलीट करणे
rm renamed.txt`,
        codeLanguage: "bash",
        output: "Desktop  Documents  Downloads\n/home/user\nहॅलो Linux!\n",
      },
    ],
    quiz: [
      {
        question: "सध्याची directory बघण्यासाठी कोणती command?",
        options: ["ls", "pwd", "cd", "dir"],
        correct: 1,
      },
      {
        question: "नवीन directory बनवण्यासाठी कोणती command?",
        options: ["makedir", "mkdir", "newdir", "touch"],
        correct: 1,
      },
    ],
    related: ["termux-basics", "linux-permissions", "linux-navigation"],
    next: "linux-navigation",
  },
{
    slug: "linux-navigation",
    categoryId: "linux",
    title: "Linux Navigation",
    marathiTitle: "Filesystem Navigation - नेव्हिगेशन",
    level: "beginner",
    minutes: 12,
    summary: "Linux filesystem मध्ये cd, ls, pwd वापरून नेव्हिगेशन कसे करायचे.",
    sections: [
      {
        title: "Filesystem समजून घेणे",
        content: "Linux filesystem एक tree सारखी असते - वरून root (/) पासून सुरु होते आणि खाली directories.\n\nमुख्य directories:\n• / - root directory\n• /home - user च्या फाइल्स\n• /etc - configuration files\n• /bin - program binaries\n• /tmp - temporary files\n\nRelative path (.) सध्याच्या directory पासून.\nAbsolute path (/) root पासून सुरु होतो.",
        code: `# absolute path
cd /home/user

# parent directory वर जाणे
cd ..

# home directory वर परत
cd ~

# directory content ls
ls -l    # detail list
ls -a    # hidden files

# tree मधील फाइल शोधणे
find /home -name "*.txt"

# पाथ मध्ये file आहे का तपासणे
file /etc/hostname`,
        codeLanguage: "bash",
      },
    ],
    quiz: [
      {
        question: "parent directory मध्ये जाण्यासाठी काय वापरतात?",
        options: ["cd ..", "cd .", "cd ~", "cd /"],
        correct: 0,
      },
      {
        question: "hidden files बघण्यासाठी कोणती command?",
        options: ["ls", "ls -a", "list hidden", "ls -hidden"],
        correct: 1,
      },
    ],
    related: ["linux-basics", "linux-permissions", "linux-commands"],
    prev: "linux-basics",
    next: "linux-permissions",
  },
{
    slug: "linux-permissions",
    categoryId: "linux",
    title: "Linux Permissions",
    marathiTitle: "Filesystem Permissions समजून घ्या",
    level: "intermediate",
    minutes: 15,
    summary: "read, write, execute permissions म्हणजे काय आणि chmod कसे वापरायचे.",
    sections: [
      {
        title: "Permissions म्हणजे काय?",
        content: "Linux मध्ये प्रत्येक फाइल आणि directory ला permissions असतात जे ठरवतात कोण ती file वाचू, बदलू किंवा run करू शकतो.\n\nतीन प्रकार:\n• read (r) - वाचणे\n• write (w) - बदलणे\n• execute (x) - run करणे\n\nतीन groups:\n• owner (u) - फाइलचा मालक\n• group (g) - ग्रुप\n• others (o) - इतर",
        code: `# permissions बघणे
ls -l

# chmod वापरून permissions बदलणे
# owner ला read+write+execute
chmod u+rwx file.sh

# सर्वांना read+execute
chmod a+rx file.sh

# numeric method
# 7=rwx 6=rw- 5=r-x 4=r--
chmod 755 script.sh
chmod 644 file.txt

# file कोणाची आहे ते बघणे
ls -l

# owner बदलणे
chown user:group file.txt`,
        codeLanguage: "bash",
        output: "-rw-r--r--  1 user group 123 Sep 04 12:00 file.txt\n",
      },
    ],
    quiz: [
      {
        question: "numeric method मध्ये 7 म्हणजे काय?",
        options: ["read", "write", "read+write+execute", "execute+read"],
        correct: 2,
      },
      {
        question: "execute permission कोणत्या अक्षराने दर्शवतात?",
        options: ["r", "w", "e", "x"],
        correct: 3,
      },
    ],
    related: ["linux-navigation", "linux-basics", "linux-commands"],
    prev: "linux-navigation",
    next: "linux-commands",
  },
{
    slug: "linux-commands",
    categoryId: "linux",
    title: "Essential Linux Commands",
    marathiTitle: "उपयुक्त Linux Commands",
    level: "intermediate",
    minutes: 18,
    summary: "रोजच्या कामात लागणारे essential Linux commands शिका.",
    sections: [
      {
        title: "रोजच्या कामातील commands",
        content: "File management: cp — कॉपी; mv — हलवणे/रिनेम; rm — डिलीट; ln — link बनवणे.\nText processing: grep — pattern शोधणे; cat — वाचणे; less — मोठा file आरामात वाचणे; wc — word count.\nSystem: ps — processes; kill — process थांबवणे; df — disk usage; free — memory.",
        code: `# फाइलमध्ये keyword शोधणे
grep "error" log.txt

# file मधील lines मोजणे
wc -l file.txt

# running processes
ps aux

# process थांबवणे
kill 1234

# disk usage
df -h

# memory
free -h

# इतिहास
history

# पॅकेज इन्स्टॉल (Ubuntu/Debian)
sudo apt install <package>`,
        codeLanguage: "bash",
      },
    ],
    quiz: [
      {
        question: "फाइलमध्ये keyword शोधण्यासाठी कोणती command?",
        options: ["search", "find", "grep", "scan"],
        correct: 2,
      },
      {
        question: "disk usage बघण्यासाठी कोणती command?",
        options: ["disk", "df", "dusage", "fdisk"],
        correct: 1,
      },
    ],
    related: ["linux-permissions", "linux-basics", "linux-navigation"],
    prev: "linux-permissions",
  }
];
