import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { formatPrice, products, type Product } from "../data/products";

const POPULAR = ["Damascus", "Hunting", "Pocket", "Display", "Kitchen"];

export default function SearchOverlay({
  open,
  onClose,
  onSelect,
}: {
  open: boolean;
  onClose: () => void;
  onSelect: (product: Product) => void;
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      window.setTimeout(() => inputRef.current?.focus(), 120);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.blurb.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] bg-white/[0.985]"
          role="dialog"
          aria-label="Search"
        >
          <div className="mx-auto flex h-full max-w-3xl flex-col px-4 pt-6 sm:px-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="relative flex flex-1 items-center">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-0 text-smoke"
                />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search knives, steels, collections…"
                  aria-label="Search products"
                  className="w-full bg-transparent py-2 pr-10 pl-8 font-display text-2xl text-ink placeholder:text-smoke/50 focus:outline-none sm:text-3xl"
                />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close search"
                className="ml-4 rounded-full border border-line p-2.5 text-ink transition hover:bg-cream"
              >
                <X size={17} />
              </button>
            </div>

            <div className="scrollbar-slim flex-1 overflow-y-auto py-6">
              {query.trim() === "" ? (
                <div>
                  <p className="text-[11px] font-medium tracking-[0.22em] text-smoke uppercase">
                    Popular right now
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {POPULAR.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setQuery(term)}
                        className="border border-line px-4 py-2.5 text-sm text-ink transition hover:border-ink"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : results.length === 0 ? (
                <p className="mt-6 text-sm text-smoke">
                  No results for “{query}”. Try “Damascus”, “hunter” or
                  “folder” — or write to us for a commission.
                </p>
              ) : (
                <ul className="divide-y divide-line">
                  {results.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => {
                          onClose();
                          onSelect(p);
                        }}
                        className="group flex w-full items-center gap-4 py-4 text-left"
                      >
                        <span className="h-16 w-16 shrink-0 border border-line bg-white p-1.5">
                          <img
                            src={p.image}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[11px] tracking-[0.16em] text-smoke uppercase">
                            {p.category}
                          </span>
                          <span className="mt-0.5 block font-display text-lg font-semibold text-ink group-hover:underline group-hover:underline-offset-4">
                            {p.name}
                          </span>
                        </span>
                        <span className="text-sm font-medium text-ink">
                          {formatPrice(p.price)}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <p className="border-t border-line py-4 text-center text-xs text-smoke">
              Press <kbd className="border border-line px-1.5 py-0.5">Esc</kbd>{" "}
              to close · Free shipping over $150
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
