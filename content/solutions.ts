/**
 * Solutions page copy.
 */

export const solutionsPage = {
  eyebrow: "Solutions",
  title: "The software layer around the fleet, the decline and the shift.",
  lede: "Shaft AI is the platform your supervisors open. Certified safety hardware stays with the companies that build and certify it.",
  description:
    "Equipment health, decline traffic, safety onboarding, workforce tools and reporting for underground mines. Certified safety systems stay with their providers.",
  sections: [
    {
      title: "Equipment health and utilisation",
      lede: "See which units earn their keep, and which ones keep coming back to the workshop.",
      bullets: [
        "Availability and utilisation, per machine",
        "Mean time between failures and mean time to repair (MTBF / MTTR)",
        "Cost per unit, including repeat work",
        "A repair-or-replace view once the history is long enough to trust",
      ],
    },
    {
      title: "Decline traffic and fleet movement",
      lede: "On a single-access decline, one stopped machine is a production problem.",
      bullets: [
        "Where machines are, on the decline and in the section",
        "Congestion alerts before the queue becomes the shift",
        "What a breakdown is blocking, and who is stuck behind it",
      ],
    },
    {
      title: "Predictive maintenance",
      lede: "Built once enough clean data exists. Not in week one, and not as a condition of the rest of the platform.",
      bullets: [
        "Waits until failure history and running hours are reliable",
        "Flags a pattern a planner can check. It does not issue orders",
        "Optional. Dashboards and records work without it",
        "Can run on site, on your server",
      ],
    },
    {
      title: "Safety and digital onboarding",
      lede: "Sign-offs and inductions you can show, without another folder of paper.",
      bullets: [
        "Digital safety sign-offs",
        "Recorded safety videos, ticked off once a person has watched them",
        "Short quizzes, and refreshers when they fall due",
        "English, Afrikaans and Setswana",
      ],
    },
    {
      title: "Workforce tools",
      lede: "Notices and checklists that fit a shift, including where there is no signal.",
      bullets: [
        "WhatsApp notices at surface and in the workshops",
        "Breakdown photos at surface and in the workshops",
        "QR checklists for pre-use inspections",
        "Tablet apps that keep working offline",
      ],
    },
    {
      title: "Reporting",
      lede: "The reports the mine already has to produce, drawn from the same records as the dashboards.",
      bullets: [
        "Automated production reports",
        "Mine Health and Safety Act (MHSA) reports",
        "Social and Labour Plan (SLP) reports",
        "The same numbers on the report and on the screen",
      ],
    },
  ],
  comparison: {
    title: "Build vs integrate",
    lede: "We build the software layer. Collision avoidance (CAS), fatigue monitoring, personnel tracking and underground networks are integrated from certified providers.",
    caption:
      "Shaft AI builds the software. The systems in the right-hand column stay with certified providers.",
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
        integrate: "Underground networks",
      },
    ],
  },
} as const;
