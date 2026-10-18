import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Minus, Plus, ShoppingBag, X } from "lucide-react";
import { FREE_SHIPPING_THRESHOLD, formatPrice } from "../data/products";
import { useCart } from "../lib/cart";

export default function CartDrawer() {
  const { items, count, subtotal, isOpen, closeCart, setQty, remove, clear } =
    useCart();
  const [placed, setPlaced] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeCart]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) setPlaced(false);
  }, [isOpen]);

  const progress = Math.min(1, subtotal / FREE_SHIPPING_THRESHOLD);

  const checkout = () => {
    setPlaced(true);
    window.setTimeout(() => {
      clear();
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[70] bg-ink/45"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Shopping cart"
            className="fixed top-0 right-0 z-[70] flex h-full w-full max-w-md flex-col bg-white"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-4">
              <h2 className="font-display text-xl font-semibold text-ink">
                Your cart{" "}
                <span className="text-smoke">
                  ({count} item{count === 1 ? "" : "s"})
                </span>
              </h2>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-2 transition hover:bg-cream"
              >
                <X size={18} />
              </button>
            </div>

            {placed ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white">
                  <Check size={24} />
                </span>
                <p className="font-display text-2xl font-semibold text-ink">
                  Order received
                </p>
                <p className="text-sm text-smoke">
                  Thank you — a confirmation is on its way. Each blade ships
                  within 3–5 business days.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-2 bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke"
                >
                  Continue browsing
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-line text-ink">
                  <ShoppingBag size={22} strokeWidth={1.5} />
                </span>
                <p className="font-display text-2xl font-semibold text-ink">
                  Your cart is empty
                </p>
                <p className="text-sm text-smoke">
                  Every knife is forged to order — find the one that fits your
                  hand.
                </p>
                <a
                  href="#collection"
                  onClick={closeCart}
                  className="mt-2 inline-flex items-center gap-2 bg-ink px-8 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition hover:bg-smoke"
                >
                  Browse the collection
                </a>
              </div>
            ) : (
              <>
                {/* Free shipping meter */}
                <div className="border-b border-line px-6 py-4">
                  <p className="text-xs text-smoke">
                    {subtotal >= FREE_SHIPPING_THRESHOLD ? (
                      <span className="font-medium text-ink">
                        You&apos;ve unlocked free shipping.
                      </span>
                    ) : (
                      <>
                        You&apos;re{" "}
                        <span className="font-medium text-ink">
                          {formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)}
                        </span>{" "}
                        away from free shipping
                      </>
                    )}
                  </p>
                  <div className="mt-2.5 h-[3px] w-full bg-line">
                    <motion.div
                      className="h-full bg-ink"
                      initial={false}
                      animate={{ width: `${progress * 100}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <ul className="scrollbar-slim flex-1 divide-y divide-line overflow-y-auto px-6">
                  {items.map(({ product, qty }) => (
                    <li key={product.id} className="flex gap-4 py-5">
                      <div className="h-24 w-20 shrink-0 border border-line bg-white p-2">
                        <img
                          src={product.image}
                          alt=""
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-[11px] tracking-[0.14em] text-smoke uppercase">
                              {product.category}
                            </p>
                            <p className="mt-0.5 font-display text-lg leading-tight font-semibold text-ink">
                              {product.name}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => remove(product.id)}
                            aria-label={`Remove ${product.name} from cart`}
                            className="rounded-full p-1.5 text-smoke transition hover:bg-cream hover:text-ink"
                          >
                            <X size={15} />
                          </button>
                        </div>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center border border-line">
                            <button
                              type="button"
                              aria-label="Decrease quantity"
                              onClick={() => setQty(product.id, qty - 1)}
                              className="flex h-8 w-8 items-center justify-center text-ink transition hover:bg-cream"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="flex w-8 items-center justify-center text-[13px] font-medium">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label="Increase quantity"
                              onClick={() => setQty(product.id, qty + 1)}
                              className="flex h-8 w-8 items-center justify-center text-ink transition hover:bg-cream"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <p className="text-sm font-medium text-ink">
                            {formatPrice(product.price * qty)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-line px-6 py-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-smoke">Subtotal</span>
                    <span className="font-display text-xl font-semibold text-ink">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-smoke">
                    Shipping &amp; taxes calculated at checkout.
                  </p>
                  <button
                    type="button"
                    onClick={checkout}
                    className="group mt-4 flex w-full items-center justify-center gap-2 bg-ink py-4 text-[13px] font-medium tracking-[0.1em] text-white uppercase transition hover:bg-smoke"
                  >
                    Checkout
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
