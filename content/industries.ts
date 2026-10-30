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
  image?: {
    src: string;
    alt: string;
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
      id: "security",
      name: "Security services",
      problem:
        "Security companies rely on paper registers, radio calls and phone checks to know whether guards are on post, patrolling and reporting incidents.",
      solution:
        "Guard check-ins, patrols and incident reporting on WhatsApp.",
      examples: [
        "Geolocation clock-in and clock-out on WhatsApp",
        "Patrol check-ins at QR points",
        "Incident reports with photos and voice notes",
        "Alerts to supervisors when check-ins are missed",
        "Shift handover notes and a supervisor dashboard",
      ],
      link: {
        label: "See guard operations",
        href: "/work#guards",
      },
    },
    {
      id: "home-retail",
      name: "Home and retail products",
      problem:
        "Customers struggle to choose the right fireplace for their space, fuel type and budget, and the sales team spends time answering the same questions and preparing quotes by hand.",
      solution:
        "AI advisors, sales assistants and quote builders that help product businesses sell and support customers faster.",
      examples: [
        "AI fireplace advisor",
        "AI sales assistant on WhatsApp and the website",
        "Instant quote builder",
        "Lead capture and qualification",
        "Room photo analysis",
        "Aftercare support",
      ],
      link: {
        label: "See KALM Group",
        href: "/work#kalm",
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
      image: {
        src: "/images/underground-loader.jpg",
        alt: "A miner in high-visibility clothing walking beside an underground loader.",
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
