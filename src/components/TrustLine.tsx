import { Flame, Lock, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "./Stars";

const ITEMS = [
  {
    icon: Truck,
    title: "Free shipping over $150",
    sub: "Insured, tracked worldwide",
  },
  {
    icon: Flame,
    title: "Hand-forged by makers",
    sub: "One maker per blade, start to finish",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime warranty",
    sub: "Against defects, forever",
  },
  {
    icon: Lock,
    title: "Secure checkout",
    sub: "Shop Pay, cards & PayPal",
  },
];

export default function TrustLine() {
  return (
    <section aria-label="Our promises" className="border-b border-line bg-white">
      <Reveal>
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center justify-center gap-3 px-4 py-6 border-line md:px-6 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i >= 2 ? "max-md:border-t" : ""} ${
                i > 0 ? "lg:border-l" : ""
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink">
                <item.icon size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-[13px] font-medium text-ink">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs text-smoke">
                  {item.sub}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
