import { BadgeCheck } from "lucide-react";
import { reviews } from "../data/products";
import Stars, { Reveal } from "./Stars";

export default function Reviews() {
  return (
    <section id="reviews" aria-label="Customer reviews" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <Reveal>
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
                Verified buyers
              </p>
              <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
                Words from the bench
              </h2>
            </div>
            <div className="flex items-center gap-4 border border-line px-5 py-4">
              <span className="font-display text-4xl font-semibold text-ink">
                4.9
              </span>
              <span>
                <Stars rating={5} size={14} />
                <span className="mt-1 block text-xs text-smoke">
                  1,247 verified reviews
                </span>
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.06}>
              <article className="flex h-full flex-col border border-line bg-white p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(17,17,17,0.06)]">
                <Stars rating={review.rating} size={14} />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                  “{review.quote}”
                </blockquote>
                <footer className="mt-6 flex items-center justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-sm font-medium text-ink">{review.name}</p>
                    <p className="text-xs text-smoke">{review.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-smoke">
                    <BadgeCheck size={14} className="text-ink" />
                    Verified
                  </span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
