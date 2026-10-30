/**
 * Home page copy.
 */

export const home = {
  hero: {
    title: "We use AI to build digital products that fix how businesses run.",
    sub: "From booking and payments for small businesses to parcel networks in spaza shops, and now the intelligence layer for underground mines.",
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
        name: "Sparcel",
        tagline: "Spaza shop parcel network",
        industry: "Informal retail & logistics",
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
        name: "Informal retail & logistics",
        href: "/industries#informal",
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
