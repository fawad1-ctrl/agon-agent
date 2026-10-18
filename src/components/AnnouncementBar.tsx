import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const MESSAGES = [
  "Free shipping on orders over $150",
  "Every blade hand-forged in our workshop",
  "Custom commissions now booking for 2026",
  "Lifetime sharpening on every kitchen knife",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      4500,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-10 items-center justify-center overflow-hidden bg-ink text-white">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="px-4 text-center text-[11px] font-medium tracking-[0.18em] uppercase md:text-xs"
        >
          {MESSAGES[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
