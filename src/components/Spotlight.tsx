import { Award, Gem, Hand } from "lucide-react";
import { Reveal } from "./Stars";

const FEATURES = [
  {
    icon: Hand,
    title: "Hand-engraved",
    sub: "Every scroll and line cut with a graver, never stamped.",
  },
  {
    icon: Gem,
    title: "Exotic materials",
    sub: "Ebony, mother-of-pearl, bronze and stabilized woods.",
  },
  {
    icon: Award,
    title: "One-of-one pieces",
    sub: "Each design is struck once and never repeated.",
  },
];

export default function Spotlight() {
  return (
    <section id="spotlight" aria-label="The fancy collection" className="scroll-mt-24 bg-cream">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <div className="relative border border-line bg-white">
            <img
              src="/images/spotlight.png"
              alt="Engraved display knife with mother-of-pearl handle on silk"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover sm:aspect-[4/5] lg:aspect-[3/4]"
            />
            <span className="absolute top-4 left-4 border border-line bg-white px-2.5 py-1.5 text-[10px] font-medium tracking-[0.14em] text-ink uppercase">
              One of one
            </span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
              Fancy &amp; display knives
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
              Made to be looked at.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke md:text-[15px]">
              Some blades never meet a cutting board. Our fancy pieces are the
              forge at its most patient — engraved guards, figured handles and
              presentation stands, built for the wall, the safe and the
              hand that appreciates the slow work.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-5 border-t border-line pt-8">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink">
                    <f.icon size={16} strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {f.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-smoke">
                      {f.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#collection"
                className="inline-flex items-center justify-center bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke"
              >
                Shop fancy &amp; display
              </a>
              <span className="text-sm text-smoke">
                Pieces from <span className="font-medium text-ink">$269</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
