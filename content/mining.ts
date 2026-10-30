/**
 * Mining page copy.
 */

export const miningPage = {
  eyebrow: "Mining",
  title: "The intelligence layer for underground mines",
  intro:
    "We're bringing what we've learned building for low-connectivity, high-adoption environments to underground mining.",
  lede: "Mine data platform, real-time KPIs, predictive maintenance, and practical tools for the workforce.",

  intelligenceLayer: {
    title: "The intelligence layer",
    cards: [
      {
        icon: "platform",
        title: "Mine data platform",
        body: "Telematics, shift reports, maintenance and production data in one place.",
      },
      {
        icon: "dashboards",
        title: "Real-time KPI dashboards",
        body: "Production, fleet availability and use, cycle times and metres versus plan.",
      },
      {
        icon: "control",
        title: "Short interval control",
        body: "Progress tracked against the shift plan, with early alerts when crews or machines fall behind.",
      },
      {
        icon: "predictive",
        title: "Predictive maintenance",
        body: "AI models on telematics and breakdown history, plus digital job cards.",
      },
      {
        icon: "assistant",
        title: "AI mine assistant",
        body: "Managers ask questions like 'Why did we miss tonnes on night shift?' and get answers from the mine's own data.",
      },
      {
        icon: "reporting",
        title: "Automated reporting",
        body: "Production, MHSA and SLP reporting.",
      },
    ],
  },

  workforceTools: {
    title: "Practical tools for the workforce",
    sub: "Technology only works if the people on site use it, so we design for how teams actually work.",
    cards: [
      {
        icon: "whatsapp",
        title: "WhatsApp workforce channel",
        body: "Shift instructions, safety alerts and production updates in English, Afrikaans and Setswana.",
      },
      {
        icon: "report",
        title: "Report by WhatsApp",
        body: "Photo or voice note of a breakdown or hazard; AI turns it into a job card or incident report.",
      },
      {
        icon: "qr",
        title: "QR codes on every machine",
        body: "Pre-use checklists, fault logging, service history.",
      },
      {
        icon: "safety",
        title: "Digital toolbox talks and safety briefings",
        body: "Signed off digitally, attendance tracked automatically.",
      },
      {
        icon: "learning",
        title: "Micro-learning and inductions",
        body: "Short modules and recorded safety videos, ticked off once watched, with a short check.",
      },
      {
        icon: "selfservice",
        title: "Workforce self-service",
        body: "Rosters, leave requests and notices on WhatsApp.",
      },
    ],
    note: "Phone-based tools are used at surface, in workshops and before and after shifts, in line with site rules. Underground reporting runs on approved offline tablets.",
  },

  connectivity: {
    title: "Connectivity, built for underground",
    lede: "Offline-first apps, on-site edge server, and network design with your IT team.",
    cards: [
      {
        title: "Offline-first apps",
        body: "Apps work without signal and sync at surface or designated sync points.",
      },
      {
        title: "On-site edge server",
        body: "Data captured underground syncs to an on-site server. The cloud is a copy, not a dependency.",
      },
      {
        title: "Network assessment and design",
        body: "We work with the mine's IT team to assess coverage and design the right solution: Wi-Fi mesh, private LTE/5G, leaky feeder, or hybrid.",
      },
      {
        title: "Rollout with certified partners",
        body: "Underground network installation and commissioning with certified infrastructure partners.",
      },
    ],
    flow: {
      title: "From underground to dashboards",
      steps: [
        "Underground devices (offline)",
        "Sync points",
        "On-site edge server",
        "Secure sync",
        "Cloud",
        "Dashboards",
      ],
    },
  },

  integrated: {
    title: "Integrated, not rebuilt",
    lede: "Collision avoidance (CAS), fatigue monitoring, personnel tracking, OEM telematics and networks come from certified providers. We bring their data into one platform.",
    columns: ["We build", "We integrate"],
    rows: [
      {
        build:
          "The software layer: one data platform, on-site sync, dashboards, checklists, onboarding and reports",
        integrate: "Collision avoidance (CAS)",
      },
      {
        build: "Workflows for control, supervisors and the workshop",
        integrate: "Fatigue monitoring",
      },
      {
        build: "Records the mine owns, with role-based access",
        integrate: "Personnel tracking",
      },
      {
        build: "Production, MHSA and SLP reporting from those records",
        integrate: "OEM telematics and underground networks",
      },
    ],
  },

  phases: {
    title: "Phased approach",
    lede: "Each phase is a decision. The next one does not start unless you say so.",
    stopLine: "You can stop at any gate.",
    items: [
      {
        name: "Discovery",
        months: "1–3 months",
        summary:
          "Walk the section, interview operators and planners, audit what you already collect, and write a baseline you can measure against.",
      },
      {
        name: "Pilot",
        months: "4–12 months",
        summary:
          "One section. Supervisors use it on shift. If they do not, the programme stops here.",
      },
      {
        name: "Scale",
        months: "13–24 months",
        summary:
          "Take the same setup to further sections. No new promises, and another gate before each step.",
      },
      {
        name: "Optimise with AI",
        months: "25–36 months",
        summary:
          "Use the history you have built. Prediction only where the data is good enough to trust.",
      },
    ],
  },

  cta: {
    title: "Start with a site assessment, not a sales pitch.",
    support:
      "We come to the operation and walk a section with you. If the work is not worth doing, we say so.",
    action: "Book a site assessment",
    href: "/contact",
  },
} as const;
