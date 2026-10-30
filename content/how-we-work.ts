/**
 * How we work page copy.
 */

export const howWeWorkPage = {
  eyebrow: "How we work",
  title: "One section. A fixed price. A gate you control.",
  lede: "Mining software fails when it arrives as a big bang. We work in months, on a pilot section, and we stop if the shift does not use it.",
  description:
    "Phased work for underground mines: twelve weeks of discovery, one pilot section, a fixed price per phase, and a go or no-go gate before the next spend.",
  principlesTitle: "Principles",
  principles: [
    {
      title: "Months, not weeks",
      body: "A decline does not change on a sprint calendar. Discovery is twelve weeks. A pilot runs through the rest of the first year.",
    },
    {
      title: "Start with one pilot section",
      body: "You choose the section. We prove the work there before anyone talks about the rest of the mine.",
    },
    {
      title: "Adoption before features",
      body: "If supervisors do not open it on shift, we do not add the next screen. Use comes first.",
    },
    {
      title: "Gated spend",
      body: "You pay for the phase you approved. The next phase is a decision, not a default.",
    },
    {
      title: "Integrate, don’t rebuild",
      body: "Certified safety systems and the underground network stay in place. We build the software around them.",
    },
    {
      title: "The mine’s IT team, from day one",
      body: "Hosting, access, backups and support are agreed with your IT team before anything goes underground.",
    },
  ],
  discovery: {
    title: "Discovery: twelve weeks",
    lede: "The first phase is on the operation, not in a workshop in town.",
    steps: [
      "Interviews with mine managers, supervisors, artisans and operators",
      "Shift and time studies underground",
      "A data and network audit: what you already collect, and what actually connects",
      "Baseline KPIs, agreed in writing before a pilot starts",
      "Co-design with the supervisors who will use the screens",
    ],
  },
  commercial: {
    title: "Commercial model",
    lede: "The price is for a phase. The next phase waits for a gate.",
    items: [
      {
        title: "Fixed price per phase",
        body: "You know the number before the phase starts. Scope changes are a conversation, not a surprise invoice.",
      },
      {
        title: "Payments tied to agreed KPIs",
        body: "The KPIs are the ones written down in discovery. Payment follows those, not a slide deck.",
      },
      {
        title: "Stop at any gate",
        body: "Ending the programme at a gate is a normal outcome. There is no penalty for stopping.",
      },
    ],
  },
} as const;
