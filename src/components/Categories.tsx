import { ArrowUpRight } from "lucide-react";
import { categories } from "../data/products";
import { Reveal } from "./Stars";

export default function Categories() {
  return (
    <section aria-label="Shop by category" className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
            <div>
              <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
                The collection
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
                Shop by category
              </h2>
            </div>
            <a
              href="#collection"
              className="group hidden items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium tracking-[0.08em] text-ink uppercase transition hover:text-smoke hover:border-smoke sm:inline-flex"
            >
              View all products
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-5">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 0.06}>
              <a href="#collection" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-white">
                  <img
                    src={cat.image}
                    alt={`${cat.name} knives`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center border border-line bg-white text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-lg font-semibold text-ink md:text-xl">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-xs text-smoke">
                    {cat.count} · {cat.tagline}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 sm:hidden">
          <a
            href="#collection"
            className="inline-flex items-center gap-2 border-b border-ink pb-1 text-[13px] font-medium tracking-[0.08em] text-ink uppercase"
          >
            View all products
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
