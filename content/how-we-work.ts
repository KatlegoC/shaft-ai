/**
 * How we work page copy.
 */

type Section = {
  title: string;
  summary: string;
  bullets: readonly string[];
  note?: string;
};

export const howWeWorkPage = {
  eyebrow: "How we work",
  title: "Discovery first. Phased delivery. Clear gates.",
  lede: "We start by understanding the problem and the people who'll use the solution. Then we build in phases, with clear go/no-go decisions at every step.",
  description:
    "AI-accelerated product development with human-led discipline, security and data ownership built in.",
  sections: [
    {
      title: "Discovery first",
      summary:
        "We interview users, observe operations and map workflows before building.",
      bullets: [
        "Talk to the people who'll use it, in their environment",
        "Observe how work actually happens, not how the org chart says it should",
        "Map workflows, pain points and workarounds",
        "Write a clear problem statement and baseline metrics",
        "Define success criteria before we write a line of code",
      ],
    },
    {
      title: "Phased delivery with clear gates",
      summary:
        "Each phase has measurable outcomes and a go/no-go decision before the next one starts.",
      bullets: [
        "Build in phases: discovery → pilot → scale",
        "Every phase ends with a decision gate",
        "Measure adoption and value at each gate",
        "You can stop at any gate if the value isn't there",
        "No new features until the current phase proves itself",
      ],
    },
    {
      title: "AI-accelerated, human-led",
      summary:
        "AI speeds up our build; product discipline, testing and security make it reliable.",
      bullets: [
        "Small senior teams using modern AI development tools",
        "Ship faster and at lower cost than traditional agencies",
        "Rigorous testing, security reviews and code quality standards",
        "AI assists; humans design, decide and take responsibility",
      ],
    },
    {
      title: "Security and data",
      summary:
        "Client owns its data, POPIA-aligned, encryption in transit and at rest, South African hosting options.",
      bullets: [
        "The client owns all data",
        "POPIA-aligned data handling",
        "Encryption in transit and at rest",
        "South African hosting options available",
        "Role-based access and audit logs",
        "Working towards ISO 27001 certification",
      ],
      note: "ISO 27001 certification is in progress, not yet achieved.",
    },
  ] satisfies readonly Section[],
  commitments: {
    title: "What you can hold us to",
    items: [
      "We'll tell you if the work isn't worth doing",
      "Adoption and value will be measured, not assumed",
      "You own your data, and you can take it with you",
      "We stop billing if people stop using it",
    ],
  },
} as const;
