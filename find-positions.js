const fs = require("fs");
let src = fs.readFileSync("src/data/tutorials/python/python-level8.ts", "utf8");

// Read the first practice question for each slug by reading the file content
// We'll search for each slug and then find its first practice question

const slugs = [
  "python-match-case",
  "python-context-managers",
  "python-type-hints",
  "python-advanced-files",
  "python-sqlite-databases",
  "python-web-flask",
  "python-rest-api",
  "python-data-analysis",
  "python-machine-learning",
  "python-networking",
  "python-security",
  "python-gui-tkinter",
  "python-automation-system"
];

// For each slug, find the position where we need to insert new sections
// We need to find: the first practice question line, and insert before "],\n    practiceQuestions: ["

for (const slug of slugs) {
  // Find the slug line
  const slugPattern = new RegExp(`slug: "\\${slug}"`);
  const slugMatch = src.match(slugPattern);
  if (!slugMatch) {
    console.log(`NO SLUG MATCH for ${slug}`);
    continue;
  }
  
  const slugStart = slugMatch.index;
  const afterSlug = src.substring(slugStart);
  
  // Find the first practice question line - look for "practiceQuestions:" and then the first string inside
  const pqStart = afterSlug.indexOf("practiceQuestions");
  if (pqStart === -1) {
    console.log(`NO PQ START for ${slug}`);
    continue;
  }
  
  // From practiceQuestions, find the first quoted string
  const pqSection = afterSlug.substring(pqStart);
  const firstPQMatch = pqSection.match(/^\s*"([^"]+)"/m);
  if (!firstPQMatch) {
    console.log(`NO FIRST PQ MATCH for ${slug}`);
    continue;
  }
  
  const firstPQ = firstPQMatch[1];
  console.log(`${slug}: first practice question = "${firstPQ}"`);
  
  // Now find "],\n    practiceQuestions: [" after this first practice question position
  // The first practice question is at position pqStart + firstPQMatch.index in afterSlug
  // We need to find the block end after all practice questions
  
  // Let me find the "],\n    practiceQuestions: [" pattern after the slug start
  const afterSlugPractice = afterSlug.indexOf("practiceQuestions:");
  if (afterSlugPractice === -1) {
    console.log(`NO PRACTICE QUESTIONS for ${slug}`);
    continue;
  }
  
  // Find the block: "],\n    practiceQuestions: ["
  const blockPattern = /\]\\n    practiceQuestions:/;
  const blockMatch = afterSlug.match(blockPattern);
  if (!blockMatch) {
    console.log(`NO BLOCK MATCH for ${slug} in afterSlug`);
    // Try searching in the whole file
    const wholeBlockMatch = src.match(new RegExp(`(.{0,2000}slug: "\\${slug}"(.|\\n)*?\\]\\n    practiceQuestions: \\[)`));
    if (wholeBlockMatch) {
      console.log(`FOUND with whole block for ${slug}`);
      console.log(`Block starts at: ${wholeBlockMatch.index}`);
      console.log(`Block content: ${wholeBlockMatch[0].slice(0, 200)}`);
    } else {
      console.log(`NO WHOLE BLOCK for ${slug}`);
    }
    continue;
  }
  
  const blockAbsStart = slugStart + blockMatch.index;
  console.log(`${slug}: block at position ${blockAbsStart}`);
  console.log(`${slug}: context: ${JSON.stringify(src.substring(blockAbsStart - 30, blockAbsStart + 50))}`);
}