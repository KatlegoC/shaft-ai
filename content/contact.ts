/**
 * Contact page copy and enquiry form fields.
 */

export const contactPage = {
  eyebrow: "Contact",
  title: "Tell us about your business.",
  lede: "We start with a conversation, not a sales pitch. Tell us what's not working, and we'll tell you if we can help.",
  description: "Get in touch with Shaft AI. Cape Town, South Africa.",
  aside: {
    nextTitle: "What happens next",
    next: [
      "We read your message.",
      "If we think we can help, we'll get back to you to arrange a call or site visit.",
      "If we're not the right fit, we'll say so.",
    ],
  },
  location: {
    city: "Cape Town",
    country: "South Africa",
  },
  form: {
    title: "Get in touch",
    requiredNote: "Fields marked * are required.",
    submit: "Send message",
    sending: "Sending…",
    successTitle: "Message sent.",
    successBody: "We'll get back to you soon.",
    errorSummary: "Check the fields below.",
    deliveryError:
      "We could not send that just now. Please try again in a moment.",
    unconfiguredError: "This form is not connected yet. Please try again later.",
  },
} as const;

export const enquiryFields = [
  {
    name: "name",
    label: "Name",
    type: "text" as const,
    required: true,
    autoComplete: "name",
    maxLength: 120,
    placeholder: "Your name",
    width: "half" as const,
  },
  {
    name: "company",
    label: "Company",
    type: "text" as const,
    required: true,
    autoComplete: "organization",
    maxLength: 160,
    placeholder: "Company name",
    width: "half" as const,
  },
  {
    name: "industry",
    label: "Industry",
    type: "select" as const,
    required: true,
    autoComplete: "off",
    maxLength: 50,
    placeholder: "",
    options: [
      { value: "", label: "Select industry" },
      { value: "sme", label: "SME / Services" },
      { value: "retail-logistics", label: "Retail & logistics" },
      { value: "construction", label: "Construction" },
      { value: "mining", label: "Mining" },
      { value: "other", label: "Other" },
    ],
    width: "half" as const,
  },
  {
    name: "email",
    label: "Email",
    type: "email" as const,
    required: true,
    autoComplete: "email",
    maxLength: 160,
    placeholder: "you@company.co.za",
    width: "half" as const,
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel" as const,
    required: false,
    autoComplete: "tel",
    maxLength: 40,
    placeholder: "Optional",
    width: "full" as const,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea" as const,
    required: true,
    autoComplete: "off",
    maxLength: 4000,
    placeholder: "Tell us about what you're trying to solve.",
    width: "full" as const,
  },
] as const;

export type EnquiryFieldName = (typeof enquiryFields)[number]["name"];
