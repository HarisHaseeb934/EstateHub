function pageList(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, 2, 3, total, current]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  return sorted.flatMap((p, i) => (i && p - sorted[i - 1] > 1 ? ["…", p] : [p]));
}

const btn = "grid h-10 min-w-10 place-items-center rounded-md border border-[#ece9e3] px-3 text-sm dark:border-[#2d3037] disabled:opacity-40";

export default function Pagination({ page, totalPages, onPage }) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label="Pagination" className="mt-10 flex justify-center gap-2">
      <button className={btn} disabled={page === 1} onClick={() => onPage(page - 1)} aria-label="Previous page">‹</button>
      {pageList(page, totalPages).map((p, i) =>
        p === "…" ? (
          <span key={`gap-${i}`} className={btn}>…</span>
        ) : (
          <button
            key={p}
            onClick={() => onPage(p)}
            aria-current={p === page ? "page" : undefined}
            className={`${btn} ${p === page ? "border-[#16181d] bg-[#16181d] text-white dark:border-[#b98a4e] dark:bg-[#b98a4e]" : "hover:border-[#b98a4e]"}`}
          >
            {p}
          </button>
        )
      )}
      <button className={btn} disabled={page === totalPages} onClick={() => onPage(page + 1)} aria-label="Next page">›</button>
    </nav>
  );
}
