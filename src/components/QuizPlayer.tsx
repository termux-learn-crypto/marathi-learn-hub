"use client";

interface QuizPlayerProps {
  slug: string;
  quiz: { question: string; options: string[]; correct: number }[];
  onComplete?: (score: number, total: number) => void;
}

import { useState } from "react";
import { saveQuizScore } from "@/lib/storage";

export default function QuizPlayer({ slug, quiz, onComplete }: QuizPlayerProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [saved, setSaved] = useState(false);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === quiz[current].correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
      const finalScore = score;
      saveQuizScore(slug, finalScore, quiz.length);
      setSaved(true);
      onComplete?.(finalScore, quiz.length);
    }
  };

  if (showResult) {
    const pct = Math.round((score / quiz.length) * 100);
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 text-center border border-green-200 dark:border-green-800">
        <div className="text-5xl mb-3">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "💪"}</div>
        <h3 className="text-2xl font-bold mb-2">
          तुमचा Score: {score}/{quiz.length}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {pct >= 80 ? "उत्कृष्ट! तुम्ही हा topic चांगला समजला आहात!" : pct >= 50 ? "छान! आणखी सराव करा." : "पुन्हा एकदा topic वाचा आणि प्रयत्न करा!"}
        </p>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4">
          <div className="bg-green-500 h-4 rounded-full transition-all" style={{ width: `${pct}%` }}></div>
        </div>
        <p className="text-xs text-gray-500">
          {saved ? "✅ Score तुमच्या progress मध्ये save झाला आहे" : ""}
        </p>
        <button
          onClick={() => {
            setCurrent(0);
            setSelected(null);
            setScore(0);
            setShowResult(false);
            setSaved(false);
          }}
          className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
        >
          पुन्हा प्रयत्न करा
        </button>
      </div>
    );
  }

  const q = quiz[current];

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500">
          Question {current + 1}/{quiz.length}
        </span>
        <span className="text-sm font-semibold text-primary-600">
          Score: {score}/{quiz.length}
        </span>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div
          className="bg-primary-500 h-2 rounded-full transition-all"
          style={{ width: `${((current + 1) / quiz.length) * 100}%` }}
        ></div>
      </div>

      <h3 className="text-lg font-semibold mb-4 marathi">{q.question}</h3>

      <div className="space-y-3">
        {q.options.map((opt, idx) => {
          const isCorrect = selected !== null && idx === q.correct;
          const isWrong = selected === idx && idx !== q.correct;
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={selected !== null}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all marathi
                ${selected === null ? "hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700" : ""}
                ${isCorrect ? "border-green-500 bg-green-50 dark:bg-green-900/50 text-green-700 dark:text-green-300" : ""}
                ${isWrong ? "border-red-500 bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300" : ""}
                ${selected !== null && !isCorrect && !isWrong ? "opacity-50" : ""}
              `}
            >
              <span className="inline-block w-6 text-center font-bold mr-2">
                {String.fromCharCode(65 + idx)}
              </span>
              {opt}
              {isCorrect && <span className="ml-2">✅</span>}
              {isWrong && <span className="ml-2">❌</span>}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <button
          onClick={handleNext}
          className="mt-6 w-full py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg marathi"
        >
          {current + 1 < quiz.length ? "Next ➡️" : "परिणाम पहा"}
        </button>
      )}
    </div>
  );
}
