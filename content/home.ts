/**
 * Home page copy.
 */

export const home = {
  hero: {
    title: "AI-accelerated systems that work in the real world.",
    lead: "Our product managers and engineers use AI across every stage of delivery, so you get robust, tested systems in weeks, not months, at a lower cost.",
    sub: "Trusted by small businesses, security teams and product companies. Now building for mining.",
    primaryCta: "See our work",
    primaryHref: "/work",
    secondaryCta: "Talk to us",
    secondaryHref: "/contact",
  },
  strip: [
    "Works offline",
    "Built for local realities",
    "WhatsApp-native",
    "Phased delivery",
  ],
  whatWeDo: {
    eyebrow: "What we do",
    title: "AI-accelerated product development for South African businesses.",
    cards: [
      {
        icon: "discovery",
        title: "Product discovery",
        body: "We start with the people who'll use it, on site, before we build.",
      },
      {
        icon: "build",
        title: "AI-accelerated build",
        body: "Small senior teams using modern AI tools to ship faster and at lower cost.",
      },
      {
        icon: "data",
        title: "Data and dashboards",
        body: "One source of truth, live KPIs, automated reporting.",
      },
      {
        icon: "mobile",
        title: "WhatsApp and mobile-first tools",
        body: "On the phones people already use, offline where needed.",
      },
    ],
  },
  ourWork: {
    eyebrow: "Our work",
    title: "Products we've built.",
    link: {
      label: "View all work",
      href: "/work",
    },
    preview: [
      {
        name: "Lupp",
        tagline: "Booking and payments for small service businesses",
        industry: "SMEs & services",
      },
      {
        name: "Guard operations on WhatsApp",
        tagline: "Check-ins, patrols and incident reports for security companies",
        industry: "Security services",
      },
      {
        name: "KALM Group: AI-powered sales and support for fireplaces",
        tagline:
          "AI advisors, sales assistants and quote builders that help product businesses sell and support customers faster.",
        industry: "Home and retail products",
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Where we work.",
    items: [
      {
        name: "SMEs & services",
        href: "/industries#smes",
        badge: undefined,
      },
      {
        name: "Construction",
        href: "/industries#construction",
        badge: undefined,
      },
      {
        name: "Mining",
        href: "/industries#mining",
        badge: "Our next frontier",
      },
    ],
  },
  miningTeaser: {
    title: "Next: the intelligence layer for underground mines",
    body: "We're bringing what we've learned building for low-connectivity, high-adoption environments to underground mining.",
    cta: "Explore mining",
    href: "/mining",
  },
} as const;
