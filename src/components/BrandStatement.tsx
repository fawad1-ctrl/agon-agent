import { Reveal } from "./Stars";

const STATS = [
  { value: "2016", label: "Forge established" },
  { value: "4,800+", label: "Blades forged by hand" },
  { value: "3", label: "Steels in daily rotation" },
];

export default function BrandStatement() {
  return (
    <section id="craft" aria-label="Our craft" className="scroll-mt-24 bg-cream">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24 lg:px-10">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p className="font-display text-3xl leading-[1.2] font-medium text-ink md:text-[42px] md:leading-[1.18]">
                “Every blade leaves our workshop with a piece of the hand that
                made it.”
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
                ZJ Knives Forge Co.
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-smoke md:text-[15px]">
            We are a two-person forge working out of a small, bright shop. No
            production lines, no drops — just steel, wood, brass and the
            patience to do each step properly. If a knife carries our mark, a
            single maker is responsible for it, end to end.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="mx-auto mt-12 grid max-w-3xl grid-cols-1 border border-line bg-white sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 py-7 text-center border-line ${
                  i > 0 ? "sm:border-l" : ""
                } ${i > 0 ? "border-t sm:border-t-0" : ""}`}
              >
                <dt className="order-2 mt-1 block text-xs tracking-[0.14em] text-smoke uppercase">
                  {stat.label}
                </dt>
                <dd className="order-1 font-display text-3xl font-semibold text-ink md:text-4xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 border border-line">
            <img
              src="/images/brand-forge.png"
              alt="A blacksmith hammering hot steel at the anvil"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover md:aspect-[21/9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
