/**
 * Site-wide facts and navigation.
 * Replace the site URL before launch.
 */

export const site = {
  name: "Shaft AI",
  city: "Cape Town",
  country: "South Africa",
  builtIn: "Built in Cape Town, South Africa",
  addressLine: "22 Cumberland Rd, Paarden Eiland, Cape Town, 7405",
  street: "22 Cumberland Rd",
  suburb: "Paarden Eiland",
  postalCode: "7405",
  description:
    "Shaft AI connects fleet, safety and people data for underground mines. It works offline, and the client owns the data.",
  copyright: "© Shaft AI",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shaftai.example";

export const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/architecture", label: "Architecture" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const assessmentCta = {
  title: "Start with a site assessment, not a sales pitch.",
  support:
    "We come to the operation and walk a section with you. If the work is not worth doing, we say so.",
  action: "Book a site assessment",
  href: "/contact",
} as const;
