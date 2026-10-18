import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, Plus, ShieldCheck, Truck, X } from "lucide-react";
import { formatPrice, type Product } from "../data/products";
import { useCart } from "../lib/cart";
import Stars from "./Stars";

export default function QuickView({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQty(1);
    setAdded(false);
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/45"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            className="scrollbar-slim relative max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-line bg-white sm:max-h-[85vh]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center border border-line bg-white text-ink transition hover:bg-cream"
            >
              <X size={17} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative border-b border-line bg-white md:border-r md:border-b-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full object-cover p-6 sm:p-10"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 border border-line bg-white px-2 py-1 text-[10px] font-medium tracking-[0.14em] text-ink uppercase">
                    {product.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.2em] text-smoke uppercase">
                  {product.category}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold text-ink">
                  {product.name}
                </h2>
                <div className="mt-2.5 flex items-center gap-2">
                  <Stars rating={product.rating} size={14} />
                  <span className="text-xs text-smoke">
                    {product.reviews} reviews
                  </span>
                </div>
                <p className="mt-3 text-lg font-medium text-ink">
                  {formatPrice(product.price)}
                  {product.compareAt && (
                    <span className="ml-2 text-sm font-normal text-smoke line-through">
                      {formatPrice(product.compareAt)}
                    </span>
                  )}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-smoke">
                  {product.blurb}
                </p>

                <dl className="mt-6 border-t border-line">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex justify-between gap-6 border-b border-line py-2.5 text-[13px]"
                    >
                      <dt className="text-smoke">{spec.label}</dt>
                      <dd className="text-right font-medium text-ink">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-6 flex items-stretch gap-3">
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="flex h-full w-10 items-center justify-center text-ink transition hover:bg-cream"
                    >
                      <Minus size={14} />
                    </button>
                    <span
                      aria-live="polite"
                      className="flex w-10 items-center justify-center text-sm font-medium"
                    >
                      {qty}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty((q) => Math.min(9, q + 1))}
                      className="flex h-full w-10 items-center justify-center text-ink transition hover:bg-cream"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      add(product, qty);
                      setAdded(true);
                      window.setTimeout(() => {
                        setAdded(false);
                        onClose();
                      }, 700);
                    }}
                    className={`flex flex-1 items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-medium tracking-[0.08em] text-white uppercase transition ${
                      added ? "bg-emerald-800" : "bg-ink hover:bg-smoke"
                    }`}
                  >
                    {added ? (
                      <>
                        <Check size={15} /> Added to cart
                      </>
                    ) : (
                      "Add to cart"
                    )}
                  </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-smoke">
                  <span className="inline-flex items-center gap-1.5">
                    <Truck size={14} /> Free shipping over $150
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} /> Lifetime warranty
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
