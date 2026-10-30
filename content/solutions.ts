/**
 * Solutions we offer. These are not completed case studies.
 */

export const solutionsPage = {
  eyebrow: "Solutions",
  title: "AI vision for gates and access control",
  lede: "Turn ordinary gate cameras into a smart, auditable access system.",
  description:
    "AI cameras for gates, estates, sites and mines: number plate recognition, object detection and access decisions, without a published client list.",
  cards: [
    {
      title: "Number plate recognition (ANPR)",
      body: "Reads plates automatically and checks them against approved lists for residents, staff, contractors and visitors.",
    },
    {
      title: "Automatic gate access",
      body: "Approved vehicles are let in automatically. Unknown vehicles are flagged for the guard.",
    },
    {
      title: "Object detection",
      body: "Detects vehicles, people, tailgating and loitering at the gate, day and night.",
    },
    {
      title: "Visitor management on WhatsApp",
      body: "Residents pre-approve visitors on WhatsApp. Visitors get a QR code or their plate is pre-registered.",
    },
    {
      title: "Alerts and blacklists",
      body: "Instant alerts to guards and managers for flagged plates, after-hours movement or repeated failed entries.",
    },
    {
      title: "Logs and dashboards",
      body: "Every entry and exit recorded with time, plate and image. Searchable logs and daily reports.",
    },
  ],
  tech: "Works with existing IP cameras where possible · edge processing at the gate · integrates with boom gates and access controllers · data stored securely and POPIA-aligned",
  flow: {
    label:
      "Camera at the gate, an AI model on an edge device, a check against the access list, then the gate opens or a guard is alerted, and the event is logged.",
    steps: [
      ["Camera", "at gate"],
      ["AI model on", "edge device"],
      ["Plate/object", "identified"],
      ["Check against", "access list"],
      ["Gate opens or", "guard alerted"],
      ["Logged on", "dashboard"],
    ],
  },
} as const;
