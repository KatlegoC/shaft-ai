/**
 * Site-wide facts and navigation.
 * Replace the site URL before launch.
 */

export const site = {
  name: "Shaft AI",
  tagline: "AI-built products for the way South African businesses actually work.",
  city: "Cape Town",
  country: "South Africa",
  builtIn: "Built in Cape Town, South Africa",
  addressLine: "22 Cumberland Rd, Paarden Eiland, Cape Town, 7405",
  street: "22 Cumberland Rd",
  suburb: "Paarden Eiland",
  postalCode: "7405",
  description:
    "Shaft AI uses AI to design and build digital products that solve real operational problems for businesses, from small enterprises and the informal economy to construction and mining.",
  copyright: "© Shaft AI",
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shaftai.example";

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/mining", label: "Mining" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact", cta: true },
] as const;

export const primaryCta = {
  title: "Start with a conversation, not a sales pitch.",
  support:
    "We talk to the people who'll use it, understand the problem, and only build what makes sense.",
  action: "Talk to us",
  href: "/contact",
} as const;
