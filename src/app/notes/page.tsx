"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import { useProgress, getQuizScores, getNotes, saveNote, deleteNote, exportAll, importAll, resetAll, type Note } from "@/lib/storage";
import { getTutorial } from "@/data/tutorials";
import { SectionHeader } from "@/components/Cards";
import { projects } from "@/data/projects";

function makeId() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [saved, setSaved] = useState(false);
  const [scores, setScores] = useState<any[]>([]);
  const [importMsg, setImportMsg] = useState<string>("");
  const [confirmReset, setConfirmReset] = useState(false);
  const { completed, bookmarks } = useProgress();
  const fileRef = useRef<HTMLInputElement>(null);

  const reload = () => {
    setNotes(getNotes());
    setScores(getQuizScores());
  };

  useEffect(() => {
    reload();
  }, []);

  const addNote = () => {
    const now = new Date().toISOString();
    const note: Note = { id: makeId(), title: "नवीन नोट", content: "", createdAt: now, updatedAt: now };
    saveNote(note);
    reload();
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };

  const updateNote = (id: string, patch: Partial<Note>) => {
    const note = notes.find((n) => n.id === id);
    if (!note) return;
    saveNote({ ...note, ...patch, updatedAt: new Date().toISOString() });
    reload();
  };

  const removeNote = (id: string) => {
    deleteNote(id);
    reload();
  };

  const handleExport = () => {
    const data = exportAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `marathi-learn-hub-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const ok = importAll(String(reader.result));
      setImportMsg(ok ? "✅ Backup import झाला!" : "❌ अवैध backup फाइल");
      if (ok) reload();
      setTimeout(() => setImportMsg(""), 3000);
    };
    reader.readAsText(file);
  };

  const doReset = () => {
    resetAll();
    reload();
    setConfirmReset(false);
  };

  const bookmarkedTuts = bookmarks.map((s) => getTutorial(s)).filter(Boolean);
  const completedCount = completed.length;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SectionHeader
          title="📒 My Progress"
          subtitle="तुमची शिकण्याची प्रगती आणि नोट्स"
        />

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-primary-600">{completedCount}</div>
            <div className="text-sm text-gray-500 mt-1">Lessons पूर्ण</div>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-marathi-500">{bookmarks.length}</div>
            <div className="text-sm text-gray-500 mt-1">Bookmarks</div>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-600">{scores.length}</div>
            <div className="text-sm text-gray-500 mt-1">Quiz Attempts</div>
          </div>
          <div className="p-5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-600">{projects.length}</div>
            <div className="text-sm text-gray-500 mt-1">Projects उपलब्ध</div>
          </div>
        </div>

        {/* Backup controls */}
        <div className="mb-8 p-5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold marathi">💾 Backup & Restore</h3>
              <p className="text-sm text-gray-500 mt-1">तुमची सर्व प्रगती JSON फाइलमध्ये save/restore करा.</p>
              {importMsg && <p className="text-sm mt-1">{importMsg}</p>}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleExport}
                className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium"
              >
                ⬇️ Export Backup
              </button>
              <button
                onClick={() => fileRef.current?.click()}
                className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium"
              >
                ⬆️ Import Backup
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="application/json,.json"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) handleImportFile(f);
                  e.target.value = "";
                }}
              />
              {confirmReset ? (
                <button
                  onClick={doReset}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium"
                >
                  होय, Reset करा
                </button>
              ) : (
                <button
                  onClick={() => setConfirmReset(true)}
                  className="px-4 py-2 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 text-sm font-medium"
                >
                  🗑 Reset सर्व
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed lessons */}
          <div>
            <h2 className="text-xl font-semibold mb-4">✅ पूर्ण केलेले Lessons</h2>
            {completed.length === 0 ? (
              <p className="text-gray-500 p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center">
                अजून कोणतेही lesson पूर्ण केलेले नाही.<br />
                सुरुवात करण्यासाठी <a href="/learn" className="text-primary-600">Learn</a> वर जा.
              </p>
            ) : (
              <ul className="space-y-2">
                {completed.map((slug) => {
                  const t = getTutorial(slug);
                  if (!t) return null;
                  return (
                    <li key={slug}>
                      <a href={`/tutorial/${slug}`} className="flex items-center justify-between p-3 rounded-lg bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors">
                        <span className="marathi">✅ {t.marathiTitle}</span>
                        <span className="text-xs text-gray-500">वाचा →</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}

            <h2 className="text-xl font-semibold mb-4 mt-8">🔖 Bookmarks</h2>
            {bookmarkedTuts.length === 0 ? (
              <p className="text-gray-500 p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center">
                कोणतेही bookmarks नाहीत. लेसन वर 🔖 दाबा.
              </p>
            ) : (
              <ul className="space-y-2">
                {bookmarkedTuts.map((t: any) => (
                  <li key={t.slug}>
                    <a href={`/tutorial/${t.slug}`} className="flex items-center justify-between p-3 rounded-lg bg-marathi-50 dark:bg-marathi-900/30 hover:bg-marathi-100 dark:hover:bg-marathi-900/50 transition-colors">
                      <span className="marathi">🔖 {t.marathiTitle}</span>
                      <span className="text-xs text-gray-500">वाचा →</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Quiz scores + notes */}
          <div>
            <h2 className="text-xl font-semibold mb-4">🏆 Quiz Scores</h2>
            {scores.length === 0 ? (
              <p className="text-gray-500 p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center">
                अजून कोणतीही quiz सोडवलेली नाही.
              </p>
            ) : (
              <ul className="space-y-2 mb-8">
                {scores.map((s) => {
                  const t = getTutorial(s.slug);
                  return (
                    <li key={s.slug} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <span className="marathi">{t?.marathiTitle || s.slug}</span>
                      <span className="text-sm font-semibold text-primary-600">
                        {s.score}/{s.total}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}

            <div className="flex items-center justify-between mb-4 mt-8">
              <h2 className="text-xl font-semibold">📝 माझ्या नोट्स</h2>
              <button
                onClick={addNote}
                className="px-4 py-2 rounded-lg bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium"
              >
                ➕ नवीन नोट
              </button>
            </div>

            {notes.length === 0 ? (
              <p className="text-gray-500 p-6 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 text-center mb-4">
                अजून नोट्स नाहीत. &quot;➕ नवीन नोट&quot; दाबून सुरु करा.
              </p>
            ) : (
              <div className="space-y-4">
                {notes.map((note) => (
                  <div key={note.id} className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <input
                      value={note.title}
                      onChange={(e) => updateNote(note.id, { title: e.target.value })}
                      placeholder="नोटचे नाव"
                      className="w-full font-semibold marathi bg-transparent outline-none border-b border-dashed border-gray-300 dark:border-gray-600 pb-1 mb-2"
                    />
                    <textarea
                      value={note.content}
                      onChange={(e) => updateNote(note.id, { content: e.target.value })}
                      placeholder="इथे नोटची मजकूर लिहा..."
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 outline-none min-h-[120px] focus:ring-2 focus:ring-primary-500 marathi text-sm"
                    />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">
                        {new Date(note.updatedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => removeNote(note.id)}
                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                      >
                        🗑 काढा
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {saved && <p className="text-sm text-green-600 mt-2">✅ Saved!</p>}
          </div>
        </div>

        <p className="text-xs text-gray-500 mt-8 text-center">
          📱 सर्व प्रगती तुमच्या browser च्या LocalStorage मध्ये save होते. Account किंवा backend लागत नाही. Backup काढून ठेवा.
        </p>
      </main>
      <Footer />
    </>
  );
}
