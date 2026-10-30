/**
 * About page copy.
 * Replace every [PLACEHOLDER] before launch. Duplicate a founder card to add a person.
 */

export type Founder = {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Full LinkedIn profile URL, or an empty string until you have one. */
  linkedin: string;
  image: "katlego" | "talent";
};

export const aboutPage = {
  eyebrow: "About",
  title: "A new company. An old problem.",
  lede: "Shaft AI is a newly formed, black-owned South African company built in Cape Town, South Africa.",
  description:
    "Shaft AI is a newly formed, black-owned South African company built in Cape Town, South Africa.",
  foundersIntro: {
    title: "Founders",
    body: "The founders bring digital product leadership from telecoms and fintech. They have built and scaled large platforms, and they are putting that discipline to work underground.",
  },
  founders: [
    {
      id: "katlego",
      name: "Katlego",
      role: "Founder",
      bio: "",
      linkedin: "",
      image: "katlego",
    },
    {
      id: "talent",
      name: "Talent",
      role: "Founder",
      bio: "",
      linkedin: "",
      image: "talent",
    },
  ] satisfies readonly Founder[],
  skills: {
    title: "Local skills",
    body: "We are committed to training local youth as on-site digital champions: people who know the section and the platform, and who stay with the mine after the project team leaves.",
  },
} as const;
