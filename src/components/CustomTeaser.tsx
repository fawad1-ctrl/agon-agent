import { ArrowRight } from "lucide-react";
import { Reveal } from "./Stars";

const STEPS = [
  {
    n: "01",
    title: "Consult the forge",
    sub: "Tell us the blade, the steel and the hand it should fit.",
  },
  {
    n: "02",
    title: "We forge & fit",
    sub: "Progress photos at every stage — heat, grind, handle.",
  },
  {
    n: "03",
    title: "Delivered in 6–8 weeks",
    sub: "Sharpened, signed and shipped in a presentation box.",
  },
];

export default function CustomTeaser() {
  return (
    <section id="custom" aria-label="Custom knives" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <Reveal>
          <div className="relative border border-line">
            <img
              src="/images/custom-teaser.png"
              alt="Blade blanks, brass pins and wood blocks arranged for a custom commission"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover lg:aspect-[16/11]"
            />
            <span className="absolute bottom-4 left-4 border border-line bg-white px-2.5 py-1.5 text-[10px] font-medium tracking-[0.14em] text-ink uppercase">
              Commissions booking · 2026
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
              Made to order
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
              A knife built around your hand.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-smoke md:text-[15px]">
              Nothing off the shelf? We take a small number of commissions each
              season — kitchen, field or folder. You choose the steel, the
              handle and the length; we handle the rest.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="mt-8 space-y-0 border-t border-line">
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="flex items-baseline gap-5 border-b border-line py-4"
                >
                  <span className="font-display text-xl font-semibold text-ink">
                    {step.n}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">
                      {step.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-smoke">
                      {step.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href="#newsletter"
              className="group mt-9 inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke"
            >
              Start your commission
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
