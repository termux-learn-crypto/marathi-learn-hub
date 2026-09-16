import { useState, useEffect } from "react";

// === LocalStorage helpers ===
const KEYS = {
  completed: "mlh_completed",
  bookmarks: "mlh_bookmarks",
  quizScores: "mlh_quiz_scores",
  darkMode: "mlh_dark_mode",
  lastVisited: "mlh_last_visited",
};

function safeGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore
  }
}

// === Completed lessons ===
export function getCompletedLessons(): string[] {
  const raw = safeGet(KEYS.completed);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markCompleted(slug: string) {
  const list = getCompletedLessons();
  if (!list.includes(slug)) {
    list.push(slug);
    safeSet(KEYS.completed, JSON.stringify(list));
  }
}

export function unmarkCompleted(slug: string) {
  const list = getCompletedLessons().filter((s) => s !== slug);
  safeSet(KEYS.completed, JSON.stringify(list));
}

// === Bookmarks ===
export function getBookmarks(): string[] {
  const raw = safeGet(KEYS.bookmarks);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(slug: string): boolean {
  const list = getBookmarks();
  const exists = list.includes(slug);
  const updated = exists
    ? list.filter((s) => s !== slug)
    : [...list, slug];
  safeSet(KEYS.bookmarks, JSON.stringify(updated));
  return !exists;
}

// === Quiz scores ===
export interface QuizScore {
  slug: string;
  score: number;
  total: number;
  date: string;
}

export function getQuizScores(): QuizScore[] {
  const raw = safeGet(KEYS.quizScores);
  try {
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuizScore(slug: string, score: number, total: number) {
  const scores = getQuizScores();
  const existing = scores.find((s) => s.slug === slug);
  const entry: QuizScore = { slug, score, total, date: new Date().toISOString() };
  const updated = existing
    ? scores.map((s) => (s.slug === slug ? entry : s))
    : [...scores, entry];
  safeSet(KEYS.quizScores, JSON.stringify(updated));
}

// === Dark mode ===
export function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = safeGet(KEYS.darkMode);
    if (saved !== null) {
      setDark(saved === "true");
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDark(true);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
    safeSet(KEYS.darkMode, dark ? "true" : "false");
  }, [dark]);

  return [dark, setDark] as const;
}

const NOTES_KEY = "mlh_notes";

// === Last visited ===
export interface LastVisited {
  slug: string;
  date: string;
}

export function saveLastVisited(slug: string) {
  safeSet(KEYS.lastVisited, JSON.stringify({ slug, date: new Date().toISOString() }));
}

export function getLastVisited(): LastVisited | null {
  const raw = safeGet(KEYS.lastVisited);
  try {
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

// === Notes ===
export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export function getNotes(): Note[] {
  const raw = safeGet(NOTES_KEY);
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveNote(note: Note) {
  const notes = getNotes();
  const existing = notes.find((n) => n.id === note.id);
  const updated = existing
    ? notes.map((n) => (n.id === note.id ? note : n))
    : [...notes, note];
  safeSet(NOTES_KEY, JSON.stringify(updated));
}

export function deleteNote(id: string) {
  const updated = getNotes().filter((n) => n.id !== id);
  safeSet(NOTES_KEY, JSON.stringify(updated));
}

// === Backup / Restore / Reset ===
export interface BackupData {
  app: string;
  version: number;
  exportedAt: string;
  data: {
    completed: string[];
    bookmarks: string[];
    quizScores: QuizScore[];
    notes: Note[];
    lastVisited: LastVisited | null;
  };
}

export function exportAll(): BackupData {
  return {
    app: "marathi-learn-hub",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      completed: getCompletedLessons(),
      bookmarks: getBookmarks(),
      quizScores: getQuizScores(),
      notes: getNotes(),
      lastVisited: getLastVisited(),
    },
  };
}

export function importAll(json: string): boolean {
  let parsed: BackupData;
  try {
    parsed = JSON.parse(json);
  } catch {
    return false;
  }
  if (!parsed || parsed.app !== "marathi-learn-hub" || !parsed.data) return false;

  safeSet(KEYS.completed, JSON.stringify(parsed.data.completed ?? []));
  safeSet(KEYS.bookmarks, JSON.stringify(parsed.data.bookmarks ?? []));
  safeSet(KEYS.quizScores, JSON.stringify(parsed.data.quizScores ?? []));
  safeSet(NOTES_KEY, JSON.stringify(parsed.data.notes ?? []));
  if (parsed.data.lastVisited) safeSet(KEYS.lastVisited, JSON.stringify(parsed.data.lastVisited));
  return true;
}

export function resetAll() {
  safeSet(KEYS.completed, JSON.stringify([]));
  safeSet(KEYS.bookmarks, JSON.stringify([]));
  safeSet(KEYS.quizScores, JSON.stringify([]));
  safeSet(NOTES_KEY, JSON.stringify([]));
  safeSet(KEYS.lastVisited, JSON.stringify(null));
}

// === Progress hook ===
export function useProgress() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  useEffect(() => {
    setCompleted(getCompletedLessons());
    setBookmarks(getBookmarks());
  }, []);

  const complete = (slug: string) => {
    markCompleted(slug);
    setCompleted(getCompletedLessons());
  };

  const toggleBookmarkState = (slug: string) => {
    const added = toggleBookmark(slug);
    setBookmarks(getBookmarks());
    return added;
  };

  return {
    completed,
    bookmarks,
    complete,
    toggleBookmarkState,
    isCompleted: (slug: string) => completed.includes(slug),
    isBookmarked: (slug: string) => bookmarks.includes(slug),
  };
}
