/**
 * Industries page copy.
 */

export type Industry = {
  id: string;
  name: string;
  problem: string;
  solution: string;
  examples: readonly string[];
  link?: {
    label: string;
    href: string;
  };
};

export const industriesPage = {
  eyebrow: "Industries",
  title: "Where we work.",
  lede: "We build for industries where connectivity is unreliable, adoption is hard, and off-the-shelf software doesn't fit how people actually work.",
  industries: [
    {
      id: "smes",
      name: "SMEs and services",
      problem:
        "Small businesses rely on calls, WhatsApp and paper to manage bookings, payments and customer records.",
      solution:
        "Digital booking, payment and customer management tools that work on the devices they already have.",
      examples: [
        "Online booking and scheduling",
        "Payment processing (cards, EFT, deposits)",
        "Customer records and history",
        "Reviews and ratings",
        "Subscription management",
      ],
      link: {
        label: "See Lupp",
        href: "/work#lupp",
      },
    },
    {
      id: "informal",
      name: "Informal retail and logistics",
      problem:
        "Spaza shops, street traders and informal networks are excluded from digital commerce and logistics systems.",
      solution:
        "WhatsApp-native tools that turn informal retailers into service points for parcels, payments and data collection.",
      examples: [
        "Parcel collection and drop-off networks",
        "QR and collection codes",
        "Payout tracking for shop owners",
        "Works on basic phones and poor connectivity",
      ],
      link: {
        label: "See Sparcel",
        href: "/work#sparcel",
      },
    },
    {
      id: "construction",
      name: "Construction",
      problem:
        "Site reports, equipment tracking and safety sign-offs still happen on paper, with dashboards built in spreadsheets days later.",
      solution:
        "Mobile-first tools for site reporting, equipment and workforce tracking, safety compliance, and live project dashboards.",
      examples: [
        "Site diary and progress reports",
        "Equipment and vehicle tracking",
        "Digital safety sign-offs and toolbox talks",
        "QR codes on equipment for checklists and faults",
        "Project dashboards and automated reporting",
      ],
    },
    {
      id: "mining",
      name: "Mining",
      problem:
        "Production, fleet, safety and people data sit in separate systems. Managers spend hours compiling reports instead of acting on insights.",
      solution:
        "An intelligence layer that brings telematics, shift reports and production data into one platform, with real-time dashboards, predictive maintenance and an AI assistant.",
      examples: [
        "Real-time production and fleet KPIs",
        "Short interval control and shift tracking",
        "Predictive maintenance on telematics data",
        "WhatsApp workforce tools and reporting",
        "AI mine assistant for natural language queries",
        "Automated MHSA and SLP reporting",
      ],
      link: {
        label: "Explore mining",
        href: "/mining",
      },
    },
  ] satisfies readonly Industry[],
  cta: {
    title: "Your industry not listed?",
    body: "If you're dealing with poor connectivity, paper-based processes or low adoption, we'd like to talk.",
    action: "Get in touch",
    href: "/contact",
  },
} as const;
