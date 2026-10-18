import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { Reveal } from "./Stars";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const value = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);
    setDone(true);
  };

  return (
    <section
      id="newsletter"
      aria-label="Newsletter sign-up"
      className="scroll-mt-24 border-y border-line bg-cream"
    >
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:px-6 md:py-20">
        <Reveal>
          <p className="mb-2 text-[11px] font-medium tracking-[0.28em] text-smoke uppercase">
            The forge list
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-[40px] md:leading-tight">
            Join the list
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-smoke">
            Restocks, forge drops and one short story from the bench each
            month. No noise — unsubscribe anytime.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center gap-3 border border-line bg-white px-6 py-8"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white">
                    <Check size={18} />
                  </span>
                  <p className="text-sm font-medium text-ink">
                    You&apos;re on the list — welcome to the forge.
                  </p>
                  <p className="text-xs text-smoke">
                    First letter arrives with the next restock.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  noValidate
                >
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <label className="sr-only" htmlFor="newsletter-email">
                      Email address
                    </label>
                    <div className="relative flex-1">
                      <Mail
                        size={15}
                        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-smoke"
                      />
                      <input
                        id="newsletter-email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError(null);
                        }}
                        aria-invalid={!!error}
                        className={`w-full border bg-white py-3.5 pr-4 pl-11 text-sm text-ink placeholder:text-smoke/70 focus:border-ink ${
                          error ? "border-[#a33]" : "border-line"
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="shrink-0 bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke"
                    >
                      Sign up
                    </button>
                  </div>
                  <p
                    aria-live="polite"
                    className={`mt-3 h-4 text-xs ${
                      error ? "text-[#a33]" : "text-smoke"
                    }`}
                  >
                    {error ?? ""}
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
