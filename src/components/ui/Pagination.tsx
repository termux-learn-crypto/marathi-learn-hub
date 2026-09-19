interface PaginationProps {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ current, total, onPageChange }: PaginationProps) {
  if (total <= 1) return null;

  const pages: (number | "…")[] = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - current) <= 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }

  return (
    <nav className="flex items-center justify-center gap-2 my-6" aria-label="Pagination">
      <button
        onClick={() => onPageChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        ←
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`e${i}`} className="px-2 text-gray-400">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            aria-current={p === current ? "page" : undefined}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              p === current
                ? "bg-primary-600 text-white"
                : "border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {p}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 text-sm disabled:opacity-40 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        →
      </button>
    </nav>
  );
}