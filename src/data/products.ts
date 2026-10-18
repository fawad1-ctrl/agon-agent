export type Product = {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAt?: number;
  badge?: "Best seller" | "New" | "One of one" | "Limited run";
  rating: number;
  reviews: number;
  image: string;
  blurb: string;
  specs: { label: string; value: string }[];
};

export const FREE_SHIPPING_THRESHOLD = 150;

export const formatPrice = (value: number) =>
  `$${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const categories = [
  {
    slug: "fancy-display",
    name: "Fancy & Display",
    count: "12 pieces",
    image: "/images/cat-display.png",
    tagline: "Engraved blades, exotic handles, gallery-ready presentation.",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    count: "9 pieces",
    image: "/images/cat-kitchen.png",
    tagline: "Hand-forged Damascus workhorses for the daily grind.",
  },
  {
    slug: "outdoor-hunting",
    name: "Outdoor & Hunting",
    count: "14 pieces",
    image: "/images/cat-outdoor.png",
    tagline: "Camp, bonfire and field blades that earn their keep.",
  },
  {
    slug: "pocket",
    name: "Pocket Knives",
    count: "7 pieces",
    image: "/images/cat-pocket.png",
    tagline: "Everyday folders with old-school soul.",
  },
  {
    slug: "custom",
    name: "Custom & Made to Order",
    count: "By commission",
    image: "/images/cat-custom.png",
    tagline: "A one-of-one knife built around your hand.",
  },
];

export const products: Product[] = [
  {
    id: "damascus-chef",
    name: "The Damascus Chef",
    category: "Kitchen",
    categorySlug: "kitchen",
    price: 289,
    badge: "Best seller",
    rating: 5,
    reviews: 214,
    image: "/images/prod-chef.png",
    blurb:
      "Our signature 8-inch chef knife. Hand-forged from layered Damascus steel, fitted with an olive-wood handle and brass bolster. Cuts as beautifully as it looks.",
    specs: [
      { label: "Blade", value: "240 layers of Damascus, 8 in" },
      { label: "Handle", value: "Olive wood, brass bolster" },
      { label: "Steel hardness", value: "61 HRC" },
      { label: "Includes", value: "Leather sheath & honing cloth" },
    ],
  },
  {
    id: "paring-knife",
    name: "The Paring Knife",
    category: "Kitchen",
    categorySlug: "kitchen",
    price: 129,
    rating: 4.5,
    reviews: 96,
    image: "/images/prod-paring.png",
    blurb:
      "A nimble 3.5-inch paring knife for peeling, trimming and detail work. Forged from the same Damascus billet as our chef knives.",
    specs: [
      { label: "Blade", value: "Damascus, 3.5 in" },
      { label: "Handle", value: "Olive wood" },
      { label: "Steel hardness", value: "61 HRC" },
      { label: "Includes", value: "Leather sheath" },
    ],
  },
  {
    id: "drop-point-hunter",
    name: "Drop Point Hunter",
    category: "Outdoor & Hunting",
    categorySlug: "outdoor-hunting",
    price: 249,
    compareAt: 289,
    badge: "Best seller",
    rating: 5,
    reviews: 167,
    image: "/images/prod-hunting.png",
    blurb:
      "A classic drop-point hunting blade in CPM-3V tool steel with a walnut handle that swells to fit your grip. Field-dressed and camp-tested.",
    specs: [
      { label: "Blade", value: "CPM-3V, drop point, 3.75 in" },
      { label: "Handle", value: "American walnut" },
      { label: "Steel hardness", value: "59 HRC" },
      { label: "Includes", value: "Vegetable-tanned leather sheath" },
    ],
  },
  {
    id: "camp-knife-no4",
    name: "Camp Knife No. 4",
    category: "Outdoor & Hunting",
    categorySlug: "outdoor-hunting",
    price: 199,
    badge: "New",
    rating: 4.5,
    reviews: 41,
    image: "/images/prod-camp.png",
    blurb:
      "The blade we reach for around the fire — batoning, carving, camp chores. Comes in a snap-closure leather sheath that rides on a belt.",
    specs: [
      { label: "Blade", value: "1095 high carbon, 4 in" },
      { label: "Handle", value: "Walnut with brass pins" },
      { label: "Steel hardness", value: "57 HRC" },
      { label: "Includes", value: "Belt leather sheath" },
    ],
  },
  {
    id: "brass-hunter-folder",
    name: "Brass Hunter Folder",
    category: "Pocket Knives",
    categorySlug: "pocket",
    price: 179,
    rating: 4.5,
    reviews: 83,
    image: "/images/prod-pocket.png",
    blurb:
      "A slip-joint folder in the grandpa tradition — solid brass scales, a nail-nick blade and a action that clicks satisfyingly shut.",
    specs: [
      { label: "Blade", value: "D2 tool steel, 3 in, nail nick" },
      { label: "Handle", value: "Solid brass, stag pattern" },
      { label: "Steel hardness", value: "58 HRC" },
      { label: "Includes", value: "Cotton pouch" },
    ],
  },
  {
    id: "engraved-dagger",
    name: "Engraved Display Dagger",
    category: "Fancy & Display",
    categorySlug: "fancy-display",
    price: 349,
    badge: "One of one",
    rating: 5,
    reviews: 28,
    image: "/images/prod-dagger.png",
    blurb:
      "A gallery piece, not a tool. Hand-engraved scrollwork, a twisted bronze guard and ebony scales, presented in a wooden display stand.",
    specs: [
      { label: "Blade", value: "Engraved stainless, 9 in" },
      { label: "Handle", value: "Ebony, bronze fittings" },
      { label: "Edition", value: "One of one" },
      { label: "Includes", value: "Wooden display stand, certificate" },
    ],
  },
  {
    id: "fillet-knife",
    name: "The Fillet Knife",
    category: "Kitchen",
    categorySlug: "kitchen",
    price: 159,
    rating: 4.5,
    reviews: 57,
    image: "/images/prod-fillet.png",
    blurb:
      "A slim, flexible 7-inch fillet blade that works along the bones like a pencil. Light ash handle, balanced for long sessions at the cleaning table.",
    specs: [
      { label: "Blade", value: "Flexible stainless, 7 in" },
      { label: "Handle", value: "Ash wood" },
      { label: "Steel hardness", value: "56 HRC" },
      { label: "Includes", value: "Blade guard" },
    ],
  },
  {
    id: "bowie-no2",
    name: "Bowie No. 2",
    category: "Fancy & Display",
    categorySlug: "fancy-display",
    price: 269,
    badge: "Limited run",
    rating: 5,
    reviews: 34,
    image: "/images/prod-bowie.png",
    blurb:
      "Our take on the classic Bowie — clip-point blade, hand-guarded brass and a walnut grip. Numbered edition of 40, each struck from the same billet.",
    specs: [
      { label: "Blade", value: "Clip point, 1095, 5.5 in" },
      { label: "Handle", value: "Walnut, brass guard" },
      { label: "Steel hardness", value: "58 HRC" },
      { label: "Includes", value: "Numbered certificate, sheath" },
    ],
  },
];

export const reviews = [
  {
    name: "Marcus T.",
    location: "Austin, TX",
    quote:
      "The Damascus Chef is the first knife I've owned that people ask about before they ask what's for dinner. Balance is perfect out of the box.",
    rating: 5,
  },
  {
    name: "Elena R.",
    location: "Bozeman, MT",
    quote:
      "Bought the Drop Point Hunter for a season of elk camp. Still shaves after field dressing, packing and more than a few campfire batoning sessions.",
    rating: 5,
  },
  {
    name: "David K.",
    location: "Portland, OR",
    quote:
      "Commissioned a custom folder for my father's 70th. The forge sent progress photos at every step and the result made him speechless.",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Chicago, IL",
    quote:
      "The display dagger sits on my desk and catches light all day. It's clearly hand-made — the engraving has the small imperfections machines can't fake.",
    rating: 5,
  },
  {
    name: "Tom W.",
    location: "Anchorage, AK",
    quote:
      "Camp Knife No. 4 has been through two winters. The sheath still looks new and the edge treats me well even when I don't.",
    rating: 4.5,
  },
  {
    name: "Sofia L.",
    location: "Nashville, TN",
    quote:
      "Ordering felt personal from the first email. Packaging was beautiful, the care card was hand-signed, and the paring knife is a joy to use.",
    rating: 5,
  },
];
