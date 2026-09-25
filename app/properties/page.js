"use client";

import { useMemo, useState } from "react";
import { PRICE_RANGES, properties, SORTS } from "./properties";
import PropertyCard from "@/components/ui/PropertyCard";
import Pagination from "@/components/ui/Pagination";
import SearchBar from "@/components/ui/SearchBar";

const PAGE_SIZE = 8;
const DEFAULTS = {
  location: "",
  type: "All Types",
  price: "Any Price",
  beds: "Any",
  baths: "Any",
};
const minCount = (v) => (v === "Any" ? 0 : parseInt(v, 10));

export default function PropertyPage() {
  const [draft, setDraft] = useState(DEFAULTS);
  const [filters, setFilters] = useState(DEFAULTS);
  const [sort, setSort] = useState("newest");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [saved, setSaved] = useState(() => new Set());

  const results = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.label === filters.price);
    const q = filters.location.trim().toLowerCase();
    const list = properties.filter(
      (p) =>
        (!q || p.location.toLowerCase().includes(q)) &&
        (filters.type === "All Types" || p.type === filters.type) &&
        p.price >= range.min &&
        p.price < range.max &&
        p.beds >= minCount(filters.beds) &&
        p.baths >= minCount(filters.baths),
    );
    const by = {
      newest: (a, b) => b.listedAt.localeCompare(a.listedAt),
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
    }[sort];
    return list.sort(by);
  }, [filters, sort]);

  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const visible = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const search = () => {
    setFilters(draft);
    setPage(1);
  };
  const toggleSave = (id, isSaved) =>
    setSaved((prev) => {
      const next = new Set(prev);
      isSaved ? next.add(id) : next.delete(id);
      return next;
    });

  const viewBtn = (v, label, path) => (
    <button
      type="button"
      onClick={() => setView(v)}
      aria-label={label}
      aria-pressed={view === v}
      className={`grid size-10 place-items-center rounded-md border border-[#ece9e3] dark:border-[#2d3037] ${view === v ? "bg-[#f1efea]" : ""}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        className="size-[18px]"
        aria-hidden="true"
      >
        {path}
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen relative text-[#16181d]">
      <div className="absolute bg-[url('/hero1.jpg')] opacity-90 brightness-50 inset-0 h-70"></div>
      <section className="mt-10 bg-gradient-to-b relative z-10 px-5 pb-10 pt-12 text-center">
        <h1 className="font-serif text-4xl font-medium md:text-5xl text-brand-gold">
          Find Your Perfect Property
        </h1>
        <p className="mb-9 mt-3 text-brand-gold">
          Discover homes that match your lifestyle and budget.
        </p>
        <SearchBar values={draft} onChange={setDraft} onSearch={search} />
      </section>
      <main className="mx-auto max-w-[1240px] px-5 pb-16">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p
            className="text-sm text-[#6b6f76] dark:text-[#9a9ea6]"
            aria-live="polite"
          >
            {results.length} {results.length === 1 ? "Property" : "Properties"}{" "}
            Found
          </p>
          <div className="flex items-center gap-3 text-sm">
            <label
              htmlFor="sort"
              className="text-[#6b6f76] dark:text-[#9a9ea6]"
            >
              Sort by:
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }}
              className="h-10 rounded-md border border-[#ece9e3] bg-white px-3 outline-none"
            >
              {SORTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            {viewBtn(
              "grid",
              "Grid view",
              <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
            )}
            {viewBtn(
              "list",
              "List view",
              <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />,
            )}
          </div>
        </div>

        {visible.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[#d9d5cc] py-20 text-center dark:border-[#2d3037]">
            <p className="font-medium">No properties match these filters</p>
            <button
              type="button"
              onClick={() => {
                setDraft(DEFAULTS);
                setFilters(DEFAULTS);
                setPage(1);
              }}
              className="mt-3 text-sm text-[#b98a4e] underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div
            className={
              view === "grid"
                ? "grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5"
                : "mx-auto grid gap-5"
            }
          >
            {visible.map((p) => (
              <PropertyCard key={p.id} property={p} onToggleSave={toggleSave} view={view}/>
            ))}
          </div>
        )}

        <Pagination
          page={page}
          totalPages={totalPages}
          onPage={(p) => {
            setPage(p);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </main>
    </div>
  );
}
