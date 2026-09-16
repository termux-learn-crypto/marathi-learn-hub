import type { Tutorial } from "@/data/tutorials";

export const termuxLessons: Tutorial[] = [
{
    slug: "termux-basics",
    categoryId: "termux",
    title: "Termux Basics",
    marathiTitle: "Termux - Android वरील Linux टर्मिनल",
    level: "beginner",
    minutes: 12,
    summary: "Termux म्हणजे Android वर चालणारा terminal - त्याद्वारे संगणकाप्रमाणे कमांड्स चालवता येतात.",
    sections: [
      {
        title: "Termux म्हणजे काय?",
        content: "Termux हा Android वर चालणारा एक terminal emulator आहे. त्यामुळे आपण फोनवरच Linux commands, Python, Node.js आणि इतर अनेक tools चालवू शकता.\n\nTermux install करण्यासाठी:\n1. F-Droid किंवा GitHub वरून APK download करा\n2. Install करा\n\nहे Play Store वरून येत नाही कारण Google च्या धोरणांमुळे काही features blocked आहेत.",
        code: `# पॅकेज अपडेट
pkg update
pkg upgrade

# python install
pkg install python

# python चालवणे
python

# node.js install
pkg install nodejs

# git install
pkg install git

# camera/permission साठी
termux-setup-storage

# help
pkg help`,
        codeLanguage: "bash",
      },
    ],
    quiz: [
      {
        question: "Termux मध्ये पॅकेज install करण्यासाठी कोणती command?",
        options: ["apt install", "pkg install", "install", "pip install"],
        correct: 1,
      },
      {
        question: "Termux मध्ये Python install कशी करतात?",
        options: ["pkg install python", "install python", "python setup", "pip python"],
        correct: 0,
      },
    ],
    related: ["linux-basics", "termux-python", "linux-commands"],
    next: "termux-python",
  },
{
    slug: "termux-python",
    categoryId: "termux",
    title: "Termux वर Python",
    marathiTitle: "फोनवर Python Programs",
    level: "intermediate",
    minutes: 15,
    summary: "Termux मध्ये Python install करून programs कसे चालवायचे.",
    sections: [
      {
        title: "Python install आणि चालवणे",
        content: "pkg install python\n\nआता फाइल बनवा:\nnano or vi or nano code editor वापरून .py file बनवा\n\nमग python filename.py ने run करा.\n\nModules install करण्यासाठी:\npip install <package>",
        code: `# install
pkg install python

# file बनवणे
nano hello.py

# file content
print("नमस्कार Termux!")

# run
python hello.py

# modules
pip install requests

# interactive mode
python

# >>> print("हाय")`,
        codeLanguage: "bash",
        output: "नमस्कार Termux!",
      },
    ],
    quiz: [
      {
        question: "Termux मध्ये Python फाइल run करण्यासाठी?",
        options: ["run file.py", "python file.py", "execute file.py", "py file.py"],
        correct: 1,
      },
      {
        question: "Python module install करण्यासाठी?",
        options: ["pkg install", "pip install", "module install", "npm install"],
        correct: 1,
      },
    ],
    related: ["termux-basics", "python-basics", "linux-basics"],
    prev: "termux-basics",
  }
];
