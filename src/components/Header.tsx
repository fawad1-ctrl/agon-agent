import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { categories } from "../data/products";
import { useCart } from "../lib/cart";

const NAV = [
  { label: "Shop", href: "#collection", dropdown: true },
  { label: "Fancy Collection", href: "#spotlight" },
  { label: "Custom Knives", href: "#custom" },
  { label: "Our Craft", href: "#craft" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header({
  onOpenSearch,
}: {
  onOpenSearch: () => void;
}) {
  const { count, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_24px_rgba(17,17,17,0.06)]" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 md:h-20 lg:px-10">
          {/* Left — mobile menu + logo */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="-ml-1 rounded-full p-2 text-ink transition hover:bg-cream lg:hidden"
            >
              <Menu size={20} strokeWidth={1.75} />
            </button>
            <a href="#top" className="flex items-center gap-2.5" aria-label="ZJ Knives home">
              <img
                src="/assets/zj-mark.png"
                alt="ZJ Knives monogram"
                className="h-9 w-auto md:h-11"
              />
              <span className="hidden font-display text-[22px] font-semibold tracking-[0.22em] text-ink sm:block">
                ZJ&nbsp;KNIVES
              </span>
            </a>
          </div>

          {/* Center nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="group relative"
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 py-3 text-[13px] font-medium tracking-[0.08em] text-ink uppercase transition hover:text-smoke"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-180"
                    />
                  </a>
                  <div className="invisible absolute top-full left-1/2 z-50 w-[560px] -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="grid grid-cols-2 gap-1 border border-line bg-white p-3 shadow-[0_24px_60px_rgba(17,17,17,0.10)]">
                      {categories.map((cat) => (
                        <a
                          key={cat.slug}
                          href={`#collection`}
                          className="group/item flex items-center gap-3 rounded-sm p-2.5 transition hover:bg-cream"
                        >
                          <img
                            src={cat.image}
                            alt=""
                            className="h-12 w-10 rounded-[2px] border border-line object-cover"
                          />
                          <span>
                            <span className="block text-sm font-medium text-ink">
                              {cat.name}
                            </span>
                            <span className="block text-xs text-smoke">
                              {cat.count}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 text-[13px] font-medium tracking-[0.08em] text-ink uppercase transition hover:text-smoke"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="Search products"
              className="rounded-full p-2 text-ink transition hover:bg-cream"
            >
              <Search size={19} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden rounded-full p-2 text-ink transition hover:bg-cream sm:block"
            >
              <User size={19} strokeWidth={1.75} />
            </button>
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
              className="relative rounded-full p-2 text-ink transition hover:bg-cream"
            >
              <ShoppingBag size={19} strokeWidth={1.75} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.4, opacity: 0 }}
                    className="absolute -top-0.5 -right-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold text-white"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-50 bg-ink/40"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-white"
              role="dialog"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <span className="font-display text-lg font-semibold tracking-[0.2em]">
                  MENU
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="rounded-full p-2 transition hover:bg-cream"
                >
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>
              <nav className="scrollbar-slim flex-1 overflow-y-auto px-5 py-6" aria-label="Mobile">
                <ul className="space-y-1">
                  {NAV.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between border-b border-line py-3.5 font-display text-2xl text-ink"
                      >
                        {item.label}
                        <span className="text-smoke">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 mb-3 text-[11px] font-medium tracking-[0.18em] text-smoke uppercase">
                  Shop by category
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((cat) => (
                    <a
                      key={cat.slug}
                      href="#collection"
                      onClick={() => setMenuOpen(false)}
                      className="group border border-line p-2 transition hover:border-ink"
                    >
                      <img
                        src={cat.image}
                        alt=""
                        className="aspect-[4/5] w-full object-cover"
                      />
                      <span className="mt-2 block text-[13px] font-medium text-ink">
                        {cat.name}
                      </span>
                    </a>
                  ))}
                </div>
              </nav>
              <div className="border-t border-line px-5 py-4 text-xs text-smoke">
                Free shipping on orders over $150
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
