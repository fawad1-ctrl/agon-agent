import { Facebook, Instagram, Youtube } from "lucide-react";
import { categories } from "../data/products";

const COMPANY = [
  { label: "Our craft", href: "#craft" },
  { label: "Fancy collection", href: "#spotlight" },
  { label: "Custom knives", href: "#custom" },
  { label: "Reviews", href: "#reviews" },
];

const SUPPORT = [
  { label: "Shipping & delivery", href: "#top" },
  { label: "Returns & exchanges", href: "#top" },
  { label: "Blade care guide", href: "#top" },
  { label: "Lifetime warranty", href: "#top" },
  { label: "FAQ", href: "#top" },
];

const SOCIALS = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
];

const PAYMENTS = ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-8">
          {/* Brand */}
          <div>
            <a href="#top" aria-label="ZJ Knives home" className="inline-block">
              <img
                src="/assets/zj-logo.png"
                alt="ZJ Knives — crafted with passion, built for life"
                className="h-24 w-auto"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-smoke">
              Hand-crafted fancy display, kitchen, outdoor and pocket knives
              from a two-person forge. Made to order, made to last.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={`ZJ Knives on ${s.label}`}
                  className="flex h-9 w-9 items-center justify-center border border-line text-ink transition hover:border-ink hover:bg-ink hover:text-white"
                >
                  <s.icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <nav aria-label="Shop">
            <h3 className="text-[11px] font-medium tracking-[0.22em] text-ink uppercase">
              Shop
            </h3>
            <ul className="mt-4 space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <a
                    href="#collection"
                    className="text-sm text-smoke transition hover:text-ink"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="text-[11px] font-medium tracking-[0.22em] text-ink uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {COMPANY.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-smoke transition hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.22em] text-ink uppercase">
              Contact
            </h3>
            <address className="mt-4 space-y-2.5 text-sm text-smoke not-italic">
              <p>
                ZJ Knives Forge Co.
                <br />
                14 Anvil Row, Unit 3
                <br />
                Asheville, NC 28801
              </p>
              <p>
                <a
                  href="mailto:hello@zjknives.com"
                  className="transition hover:text-ink"
                >
                  hello@zjknives.com
                </a>
              </p>
              <p>
                <a href="tel:+18285550147" className="transition hover:text-ink">
                  +1 (828) 555-0147
                </a>
              </p>
              <p className="pt-1 text-xs">
                Workshop visits by appointment.
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-6 md:flex-row">
          <p className="text-xs text-smoke">
            © 2026 ZJ Knives Forge Co. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2" aria-label="Accepted payments">
            {PAYMENTS.map((p) => (
              <li
                key={p}
                className="border border-line px-2 py-1 text-[10px] font-medium tracking-wide text-smoke"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
