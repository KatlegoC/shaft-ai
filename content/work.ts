/**
 * Work page (portfolio) copy.
 */

export type Product = {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  whatWeBuilt: string;
  techHighlights: readonly string[];
  status: string;
  metrics: string;
  link?: string;
  screenshots: readonly string[];
};

export const workPage = {
  eyebrow: "Our work",
  title: "Products we've built.",
  lede: "Each product started with people on the ground telling us what doesn't work. We built tools that fit how they actually operate.",
  products: [
    {
      id: "lupp",
      name: "Lupp",
      tagline: "Digital loyalty and bookings for local businesses",
      problem:
        "Salons, barbers and beauty businesses run bookings on calls and WhatsApp messages, with no-shows and cash-only payments.",
      whatWeBuilt:
        "Digital loyalty programme, online booking, reviews and ratings, customer discovery, and merchant dashboard — all from one QR code.",
      techHighlights: [
        "QR code check-in and loyalty tracking",
        "Booking system with team member selection",
        "Customer discovery and search",
        "Star ratings and reviews",
      ],
      status: "Live",
      metrics: "2,000+ local businesses across South Africa · +32% return visits",
      link: "https://www.lupprewards.co.za",
      screenshots: [],
    },
    {
      id: "sparcel",
      name: "Sparcel",
      tagline: "Spaza shop parcel network",
      problem:
        "Parcel delivery and collection in townships and rural areas is unreliable, and spaza shops miss out on extra income.",
      whatWeBuilt:
        "A platform that turns spaza shops into parcel collection and drop-off points, with tracking, collection codes and payouts to shop owners.",
      techHighlights: [
        "WhatsApp and SMS notifications",
        "QR and collection codes",
        "Works on low-end phones and poor connectivity",
        "Automated payout tracking",
      ],
      status: "[LIVE / PILOT / IN DEVELOPMENT, choose one]",
      metrics: "[Add verified figures]",
      screenshots: [],
    },
  ] satisfies readonly Product[],
  learnings: {
    title: "What these taught us",
    items: [
      "Design for low connectivity and low-end devices",
      "WhatsApp is where people already are",
      "Adoption beats features: if people won't use it, it doesn't matter what it does",
      "Payments, tracking and trust have to just work",
    ],
  },
} as const;
