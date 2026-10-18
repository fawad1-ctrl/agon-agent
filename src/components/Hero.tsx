import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" aria-label="Welcome" className="relative bg-white">
      <div className="relative mx-auto max-w-[1440px] px-0 sm:px-6 lg:px-10">
        <div className="relative h-[68vh] max-h-[760px] min-h-[460px] overflow-hidden sm:border sm:border-line">
          <motion.img
            src="/images/hero.png"
            alt="Hand-forged knives arranged on a bright workshop bench"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Center card */}
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl border border-line bg-white/90 px-6 py-8 text-center backdrop-blur-md sm:px-10 sm:py-12"
            >
              <p className="mb-3 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
                Hand-forged · Small batch · Est. 2016
              </p>
              <h1 className="font-display text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl lg:text-[56px]">
                Crafted with passion.
                <br />
                Built for life.
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-smoke sm:text-[15px]">
                Display pieces, kitchen workhorses and field-ready blades —
                every ZJ knife is forged, ground and finished by a single
                maker, start to finish.
              </p>
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#collection"
                  className="group inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke sm:w-auto"
                >
                  Shop the collection
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#custom"
                  className="inline-flex w-full items-center justify-center border border-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-ink uppercase transition hover:bg-ink hover:text-white sm:w-auto"
                >
                  Commission a custom knife
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
