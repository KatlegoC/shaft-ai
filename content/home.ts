/**
 * Home page copy. Edit the strings here; the page layout reads this file.
 */

export const home = {
  eyebrow: "Underground mines · Built in Cape Town, South Africa",
  hero: {
    title:
      "Know what every machine underground is doing, without asking operators to do more.",
    sub: "Shaft AI connects your fleet, safety and people data into one platform that works underground, offline and on your terms.",
    primaryCta: "Book a site assessment",
    secondaryCta: "How it works",
    secondaryHref: "/#how-it-works",
  },
  facts: [
    "Works offline underground",
    "On-site edge server",
    "You own the data",
    "Stop at any gate",
  ],
  problem: {
    eyebrow: "The daily problem",
    title: "Three gaps that show up on shift.",
    items: [
      {
        icon: "cost",
        title: "Which machines are costing you most?",
        body: "No clear view of availability, utilisation and repeat failures per unit.",
      },
      {
        icon: "decline",
        title: "One breakdown stops the decline.",
        body: "No live view of movement and congestion on single-access declines.",
      },
      {
        icon: "adoption",
        title: "Systems nobody uses.",
        body: "Tools fail when they need constant operator input or reliable connectivity.",
      },
    ],
  },
  scrollHero: {
    title: "Shaft AI",
    date: "Built in Cape Town, South Africa",
    scrollToExpand: "Scroll to expand",
    mediaAlt: "A loaded haul truck on a mine haul road.",
    bgAlt: "A lit underground tunnel.",
  },
  equipment: {
    eyebrow: "The fleet",
    title: "Built around the machines already on the section.",
    lede: "Load-haul-dump loaders, haul trucks, and the single-access decline they move on.",
    gallery: [
      {
        src: "/images/underground-loader.jpg",
        alt: "An operator walking beside an underground loader in a mine tunnel.",
        caption: "Underground loader",
      },
      {
        src: "/images/underground-truck-crew.jpg",
        alt: "A worker with a light stick in front of a haul truck underground.",
        caption: "Underground haul truck",
      },
      {
        src: "/images/surface-pit-fleet.jpg",
        alt: "An excavator, haul truck and loader on a pit bench.",
        caption: "Pit fleet",
      },
      {
        src: "/images/decline-tunnel.jpg",
        alt: "A lit underground tunnel with rails in the floor.",
        caption: "Decline",
      },
      {
        src: "/images/shift-crew.jpg",
        alt: "A shift crew in hard hats and high-visibility clothing.",
        caption: "Shift crew",
      },
      {
        src: "/images/hard-hat.jpg",
        alt: "A person in a hard hat and high-visibility vest.",
        caption: "On shift",
      },
      {
        src: "/images/safety-ppe.jpg",
        alt: "Hard hats and high-visibility vests hanging ready for a shift.",
        caption: "Change room",
      },
      {
        src: "/images/mine-cavern.jpg",
        alt: "An underground excavation with water on the floor.",
        caption: "Underground",
      },
    ],
  },
  howItWorks: {
    eyebrow: "How it works",
    title: "Capture, connect, act.",
    lede: "The operator’s job stays the job. The record is collected around the work, not instead of it.",
    steps: [
      {
        icon: "capture",
        title: "Capture",
        bullets: [
          "Equipment trackers and OEM telematics",
          "QR pre-use checks",
          "Digital safety sign-offs",
        ],
      },
      {
        icon: "connect",
        title: "Connect",
        bullets: [
          "One data platform",
          "On-site edge server",
          "Syncs when connectivity allows",
          "Data owned by the client",
        ],
      },
      {
        icon: "act",
        title: "Act",
        bullets: [
          "Live availability and utilisation dashboards",
          "Breakdown and cost-per-unit insights",
          "Decline traffic view",
          "Training records",
        ],
      },
    ],
  },
  phases: {
    eyebrow: "Phased approach",
    title: "Months, with a gate between them.",
    lede: "Each phase is a decision. The next one does not start unless you say so.",
    stopLine: "You can stop at any gate.",
    items: [
      {
        name: "Discovery",
        months: "Months 1–3",
        summary:
          "Walk the section, audit what you already collect, and write a baseline you can measure against.",
      },
      {
        name: "Pilot",
        months: "Months 4–12",
        summary:
          "One section. Supervisors use it on shift. If they do not, the programme stops here.",
      },
      {
        name: "Scale",
        months: "Months 13–24",
        summary:
          "Take the same setup to further sections. No new promises, and another gate before each step.",
      },
      {
        name: "Optimise with AI",
        months: "Months 25–36",
        summary:
          "Use the history you have built. Prediction only where the data is good enough to trust.",
      },
    ],
  },
} as const;
