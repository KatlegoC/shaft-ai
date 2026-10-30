/**
 * Architecture and security page copy.
 * Do not describe ISO 27001 or SOC 2 as certifications we hold.
 */

export const architecturePage = {
  eyebrow: "Architecture and security",
  title: "It has to work when the decline has no signal.",
  lede: "Offline first. An on-site server if you want one. The cloud is a copy, not a dependency the shift cannot live without.",
  description:
    "Offline-first software for underground mines, with an on-site server option, client-owned data hosted in South Africa, and security programmes still in progress.",
  sections: [
    {
      title: "Offline-first, edge-ready",
      lede: "The useful screen is the one that still opens at the face.",
      bullets: [
        "An on-site server is an option from the start",
        "Apps work without signal and sync at surface",
        "No dependency on a 24/7 cloud connection",
      ],
    },
    {
      title: "AI on site",
      lede: "Models can run locally. AI is used where it adds value, not as the thing the shift depends on.",
      bullets: [
        "Models can run on the mine’s server",
        "Used for patterns in failures and history, once the data is clean",
        "Not a single point of failure. Dashboards, sign-offs and training records stand without it",
      ],
    },
    {
      title: "Data",
      lede: "The client owns the data. Hosting, access and encryption are part of the design, not a footnote.",
      bullets: [
        "The client owns all data",
        "Hosted in South Africa",
        "Aligned with the Protection of Personal Information Act (POPIA)",
        "Role-based access",
        "Encryption in transit and at rest",
      ],
    },
  ],
  compliance: {
    title: "Compliance",
    lede: "Two programmes are underway. They are not certifications.",
    items: [
      "Working towards ISO 27001 certification",
      "SOC 2 readiness in progress",
    ],
    note: "Neither is a certification Shaft AI currently holds.",
  },
  diagram: {
    title: "From the machine to the screen",
    lede: "Machines and sensors feed an edge server on site. The server syncs securely when it can. Dashboards read from the cloud platform.",
    steps: [
      { title: "Machines", detail: "and sensors" },
      { title: "Edge server", detail: "on site" },
      { title: "Secure sync", detail: "when the link allows" },
      { title: "Cloud platform", detail: "client-owned" },
      { title: "Dashboards", detail: "for the shift" },
    ],
  },
} as const;
