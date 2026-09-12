"use client";

import { useState, useEffect } from "react";
import { useProgress } from "@/lib/storage";

export default function TutorialActions({
  slug,
  marathiTitle,
  showComplete = false,
}: {
  slug: string;
  marathiTitle: string;
  showComplete?: boolean;
}) {
  const { isCompleted, complete, isBookmarked, toggleBookmarkState } = useProgress();
  const [bookmarked, setBookmarked] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(slug));
    setDone(isCompleted(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  if (!showComplete) {
    // Bookmark row
    return (
      <div className="flex items-center justify-between gap-4 mb-2">
        <h1 className="text-3xl md:text-4xl font-extrabold marathi">{marathiTitle}</h1>
        <button
          onClick={() => setBookmarked(toggleBookmarkState(slug))}
          className="p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xl shrink-0"
          aria-label={bookmarked ? "Bookmark काढा" : "Bookmark करा"}
        >
          {bookmarked ? "🔖" : "📑"}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => {
        if (done) return;
        complete(slug);
        setDone(true);
      }}
      disabled={done}
      className={`w-full py-4 rounded-xl font-semibold text-lg marathi transition-all ${
        done
          ? "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
          : "bg-green-600 hover:bg-green-700 text-white"
      }`}
    >
      {done ? "✅ Lesson पूर्ण झाला आहे" : "✔️ मी हा lesson पूर्ण केला"}
    </button>
  );
}
