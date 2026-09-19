const fs = require("fs");
let src = fs.readFileSync("src/data/tutorials/python/python-level8.ts", "utf8");

// For each lesson, find the anchor (first practice question) and insert new sections before practiceQuestions
// The anchor pattern is: the first practice question line, and we insert before "],\n    practiceQuestions: ["

const lessons = [
  { 
    slug: "python-match-case", 
    firstPQ: '"match statement कसे वापरायचे?"',
    title: "का शिकावे? match-case परिचय विस्तारित",
    marathiIntro: "match-case (Structural Pattern Matching) hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-context-managers", 
    firstPQ: '"with statement कसे वापरायचे?"',
    title: "का शिकावे? Context Managers विस्तारित",
    marathiIntro: "Context Managers (with statement) hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-type-hints", 
    firstPQ: '"type hint काय देतात?"',
    title: "का शिकावे? Type Hints विस्तारित",
    marathiIntro: "Type Hints (प्रकार खुणा) hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-advanced-files", 
    firstPQ: '"XML कशासाठी?,'",
    title: "का शिकावे? XML आणि Binary Files विस्तारित",
    marathiIntro: "XML ani Binary Files hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-sqlite-databases", 
    firstPQ: '"sqlite3 कशासाठी?,'",
    title: "का शिकावे? Databases - SQLite विस्तारित",
    marathiIntro: "Databases - SQLite hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-web-flask", 
    firstPQ: '"Flask कशासाठी?,"',
    title: "का शिकावे? Web App - Flask विस्तारित",
    marathiIntro: "Web App - Flask hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-rest-api", 
    firstPQ: '"REST म्हणजे?,"',
    title: "का शिकावे? REST API - FastAPI विस्तारित",
    marathiIntro: "REST API - FastAPI hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-data-analysis", 
    firstPQ: '"Data Analysis - numpy आणि CSV कशासाठी?,"',
    title: "का शिकावे? Data Analysis विस्तारित",
    marathiIntro: "Data Analysis - numpy ani CSV hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-machine-learning", 
    firstPQ: '"मशीन लर्निंग कशासाठी?,"',
    title: "का शिकावे? Machine Learning विस्तारित",
    marathiIntro: "Machine Learning hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-networking", 
    firstPQ: '"नेटवर्किंग कशासाठी?,"',
    title: "का शिकावे? Networking विस्तारित",
    marathiIntro: "Networking hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-security", 
    firstPQ: '"सुरक्षित कोड कशासाठी?,"',
    title: "का शिकावे? Security विस्तारित",
    marathiIntro: "Security hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-gui-tkinter", 
    firstPQ: '"GUI कशासाठी?,"',
    title: "का शिकावे? GUI - Tkinter विस्तारित",
    marathiIntro: "GUI - Tkinter hya lessonat hya dhadyet Wilavant vatapat.",
  },
  { 
    slug: "python-automation-system", 
    firstPQ: '"ऑटोमेशन प्रणाली कशासाठी?,"',
    title: "का शिकावे? Automation System विस्तारित",
    marathiIntro: "Automation System hya lessonat hya dhadyet Wilavant vatapat.",
  },
];

// For each lesson, we need to find the pattern and insert new sections before practiceQuestions
// The approach: find the first practice question line for each lesson, then insert before the "],\n    practiceQuestions: [" block

function findLessonEndIndex(slug) {
  // Find the lesson object starting with "slug: \"slug\"
  const startRegex = new RegExp(`slug: "\\${slug}"`);
  const startMatch = src.match(startRegex);
  if (!startMatch) {
    console.log(`NO START for ${slug}`);
    return -1;
  }
  const startIdx = startMatch.index;
  
  // Find the next lesson or end of this lesson
  // We need to find "],\n    practiceQuestions: [" pattern
  // But we need to be inside the current lesson's sections array
  
  // Let\'s search for the pattern after the lesson start
  const afterStart = src.substring(startIdx);
  // Find the first "],\n    practiceQuestions: [" after the lesson start
  const practiceRegex = /\]\\n    practiceQuestions:/;
  const practiceMatch = afterStart.match(practiceRegex);
  if (practiceMatch) {
    console.log(`${slug}: practiceQuestions at relative position ${practiceMatch.index}`);
    return startIdx + practiceMatch.index;
  }
  
  // Try alternative: find "},\n    {" or other patterns
  console.log(`${slug}: no practiceQuestions found with regex, trying different approach`);
  return -1;
}

// Let me try a different approach - use the first practice question as anchor
// The pattern we need: find the line with the first practice question, then insert before the practiceQuestions block

for (const {slug, firstPQ} of lessons) {
  // Escape the first practice question for regex
  const escPQ = firstPQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  
  // Look for: the first practice question line followed by ],\n    practiceQuestions: [
  // The practice questions are in an array, so the pattern is:
  // "first question",\n  "second question",\n  "third question",\n],\n    practiceQuestions: [
  
  // Actually, let me search for the pattern differently.
  // I'll look for the slug line, then find the practiceQuestions block
  
  const slugRegex = new RegExp(`slug: "\\${slug}"`);
  const slugMatch = src.match(slugRegex);
  if (!slugMatch) {
    console.log(`NO SLUG MATCH for ${slug}`);
    continue;
  }
  
  const slugStart = slugMatch.index;
  
  // Find the next occurrence of the first practice question after the slug
  const afterSlug = src.substring(slugStart);
  const pqRegex = new RegExp(`${escPQ}`, "m");
  const pqMatch = afterSlug.match(pqRegex);
  if (!pqMatch) {
    console.log(`NO PQ MATCH for ${slug} with pattern ${escPQ}`);
    continue;
  }
  
  const pqAbsoluteStart = slugStart + pqMatch.index;
  
  // Now find "],\n    practiceQuestions: [" after this practice question
  const afterPQ = src.substring(pqAbsoluteStart);
  const blockRegex = /\\]\\n    practiceQuestions:/;
  const blockMatch = afterPQ.match(blockRegex);
  if (!blockMatch) {
    console.log(`NO BLOCK MATCH for ${slug}`);
    continue;
  }
  
  const blockStart = pqAbsoluteStart + blockMatch.index;
  const blockEnd = blockStart + blockMatch[0].length;
  
  console.log(`${slug}: block at ${blockStart}-${blockEnd}`);
  console.log(`${slug}: context: ${JSON.stringify(src.substring(blockStart - 20, blockStart + 50))}`);
}

// Now let\'s actually do the insertion
// For each lesson, we need to insert new sections before the practiceQuestions block

// First, let me find all the exact positions
console.log("\n=== FINDING ALL LESSON POSITIONS ===\n");

for (const {slug, firstPQ} of lessons) {
  const slugRegex = new RegExp(`slug: "\\${slug}"`);
  const slugMatch = src.match(slugRegex);
  if (!slugMatch) {
    console.log(`NO SLUG MATCH for ${slug}`);
    continue;
  }
  
  const slugStart = slugMatch.index;
  const afterSlug = src.substring(slugStart);
  const escPQ = firstPQ.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pqRegex = new RegExp(`${escPQ}`, "m");
  const pqMatch = afterSlug.match(pqRegex);
  if (!pqMatch) {
    console.log(`NO PQ MATCH for ${slug}`);
    continue;
  }
  
  const pqAbsoluteStart = slugStart + pqMatch.index;
  const afterPQ = src.substring(pqAbsoluteStart);
  const blockRegex = /\\]\\n    practiceQuestions:/;
  const blockMatch = afterPQ.match(blockRegex);
  if (!blockMatch) {
    console.log(`NO BLOCK MATCH for ${slug}`);
    continue;
  }
  
  const blockStart = pqAbsoluteStart + blockMatch.index;
  console.log(`${slug}: insert at position ${blockStart}`);
}