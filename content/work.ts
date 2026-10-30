/**
 * Work page (portfolio) copy.
 */

export type Product = {
  id: string;
  name: string;
  tagline: string;
  client?: string;
  problem: string;
  whatWeBuilt: string | readonly string[];
  techHighlights: readonly string[];
  status?: string;
  metrics?: string;
  link?: string;
  linkLabel?: string;
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
      id: "guards",
      name: "Guard operations on WhatsApp",
      tagline: "Check-ins, patrols and incident reports for security companies",
      client: "A South African security services company",
      problem:
        "Security companies rely on paper registers, radio calls and phone checks to know whether guards are on post, patrolling and reporting incidents.",
      whatWeBuilt: [
        "Geolocation clock-in and clock-out: guards clock in on WhatsApp, and their live location confirms they're on site at the start and end of every shift",
        "Patrol check-ins at QR points",
        "Incident reports with photos and voice notes",
        "Alerts to supervisors when check-ins are missed",
        "Shift handover notes and a supervisor dashboard",
      ],
      techHighlights: [
        "WhatsApp Business API",
        "Geolocation clock-in",
        "QR patrol points",
        "Works on basic smartphones",
      ],
      screenshots: [],
    },
    {
      id: "kalm",
      name: "KALM Group: AI-powered sales and support for fireplaces",
      tagline: "AI for fireplaces",
      problem:
        "Customers struggle to choose the right fireplace for their space, fuel type and budget, and the sales team spends time answering the same questions and preparing quotes by hand.",
      whatWeBuilt: [
        "AI fireplace advisor: customers describe their room size, fuel preference (wood, gas, electric) and budget, and get matched to suitable models",
        "AI sales assistant on WhatsApp and the website: answers product, installation and pricing questions 24/7 from KALM's own catalogue and documents",
        "Instant quote builder: generates a draft quote with product, flue, installation and extras for the sales team to approve",
        "Lead capture and qualification: AI collects customer details and needs, and hands qualified leads to sales",
        "Room photo analysis: customers upload a photo of their space and get suggestions on placement and suitable models",
        "Aftercare support: maintenance tips, servicing reminders and warranty questions handled automatically",
      ],
      techHighlights: [
        "Large language models grounded in KALM's product catalogue",
        "WhatsApp Business API",
        "Website chat integration",
      ],
      status: "[LIVE / PILOT]",
      link: "https://kalmgroup.co.zw",
      linkLabel: "KALM Group",
      screenshots: [],
    },
  ] satisfies readonly Product[],
  learnings: {
    title: "What these taught us",
    items: [
      "Design for low connectivity and low-end devices",
      "WhatsApp is where people already are",
      "Frontline workers adopt tools that live on WhatsApp, not new apps they have to learn",
      "Adoption beats features: if people won't use it, it doesn't matter what it does",
      "Payments, tracking and trust have to just work",
    ],
  },
} as const;
