import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Plus } from "lucide-react";
import { formatPrice, products, type Product } from "../data/products";
import { useCart } from "../lib/cart";
import Stars, { Reveal } from "./Stars";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: low to high" },
  { key: "price-desc", label: "Price: high to low" },
  { key: "rating", label: "Top rated" },
];

export default function FeaturedProducts({
  onQuickView,
}: {
  onQuickView: (product: Product) => void;
}) {
  const { add } = useCart();
  const [sort, setSort] = useState<SortKey>("featured");

  const sorted = useMemo(() => {
    const list = [...products];
    switch (sort) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
      default:
        return list;
    }
  }, [sort]);

  return (
    <section id="collection" aria-label="Featured products" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-14">
            <div>
              <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
                Forged this month
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
                The collection
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <label className="relative inline-flex items-center">
                <span className="sr-only">Sort products</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="appearance-none border border-line bg-white py-2.5 pr-9 pl-4 text-[13px] font-medium text-ink transition hover:border-ink focus:border-ink"
                >
                  {SORTS.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 text-smoke"
                />
              </label>
              <a
                href="#collection"
                className="group hidden items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium tracking-[0.08em] text-ink uppercase transition hover:text-smoke hover:border-smoke md:inline-flex"
              >
                View all
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6">
          {sorted.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 0.05}>
              <article
                className="group cursor-pointer"
                onClick={() => onQuickView(product)}
              >
                <div className="relative aspect-square overflow-hidden border border-line bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover p-4 transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:p-6"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 border border-line bg-white px-2 py-1 text-[10px] font-medium tracking-[0.14em] text-ink uppercase">
                      {product.badge}
                    </span>
                  )}
                  {/* Desktop hover quick-add */}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 max-lg:hidden">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        add(product);
                      }}
                      className="flex w-full items-center justify-center gap-2 bg-ink/95 py-3 text-[12px] font-medium tracking-[0.12em] text-white uppercase transition hover:bg-ink"
                    >
                      <Plus size={14} /> Add to cart
                    </button>
                  </div>
                  {/* Mobile quick-add */}
                  <button
                    type="button"
                    aria-label={`Quick add ${product.name} to cart`}
                    onClick={(e) => {
                      e.stopPropagation();
                      add(product);
                    }}
                    className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center border border-line bg-white text-ink transition hover:bg-ink hover:text-white lg:hidden"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="pt-4">
                  <p className="text-[11px] tracking-[0.16em] text-smoke uppercase">
                    {product.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg leading-snug font-semibold text-ink md:text-xl">
                    {product.name}
                  </h3>
                  <div className="mt-1.5 flex items-center gap-2">
                    <Stars rating={product.rating} size={13} />
                    <span className="text-xs text-smoke">({product.reviews})</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-ink">
                    {formatPrice(product.price)}
                    {product.compareAt && (
                      <span className="ml-2 text-sm font-normal text-smoke line-through">
                        {formatPrice(product.compareAt)}
                      </span>
                    )}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
