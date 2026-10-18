import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Stars({
  rating,
  size = 14,
  className = "",
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => {
        const filled = rating >= i + 0.75;
        const half = !filled && rating >= i + 0.25;
        return (
          <span key={i} className="relative inline-flex">
            <Star
              size={size}
              className="absolute inset-0 text-line"
              strokeWidth={1.5}
            />
            {filled && (
              <Star size={size} className="fill-ink text-ink" strokeWidth={1.5} />
            )}
            {half && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
                <Star size={size} className="fill-ink text-ink" strokeWidth={1.5} />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
