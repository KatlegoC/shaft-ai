/**
 * Contact page copy and enquiry form fields.
 */

export const contactPage = {
  eyebrow: "Contact",
  title: "Tell us about your operation. We’ll start with a site visit.",
  lede: "A site assessment is a visit, not a slide deck. Write down the section, the fleet, and what you cannot see today.",
  description:
    "Book a site visit with Shaft AI. Tell us about the operation and we start on site.",
  aside: {
    nextTitle: "What happens next",
    next: [
      "We read the note.",
      "If a site visit is the right next step, we say so and we come.",
      "If we are not the right fit, we say that too.",
    ],
  },
  form: {
    title: "Site assessment enquiry",
    requiredNote: "Fields marked * are required.",
    submit: "Send the enquiry",
    sending: "Sending…",
    successTitle: "Received.",
    successBody: "We’ll read this and come back to you about a site visit.",
    errorSummary: "Check the fields below.",
    deliveryError: "We could not send that just now. Please try again in a moment.",
    unconfiguredError:
      "This form is not connected yet. Please try again later.",
  },
} as const;

export const enquiryFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    autoComplete: "name",
    maxLength: 120,
    placeholder: "Your name",
    width: "half",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    required: true,
    autoComplete: "organization",
    maxLength: 160,
    placeholder: "Mining company or contractor",
    width: "half",
  },
  {
    name: "role",
    label: "Role",
    type: "text",
    required: true,
    autoComplete: "organization-title",
    maxLength: 120,
    placeholder: "Mine manager, engineer, contractor",
    width: "half",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    autoComplete: "email",
    maxLength: 160,
    placeholder: "you@company.co.za",
    width: "half",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: false,
    autoComplete: "tel",
    maxLength: 40,
    placeholder: "Optional",
    width: "half",
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    autoComplete: "off",
    maxLength: 4000,
    placeholder: "The section, the fleet on it, and what you cannot see today.",
    width: "full",
  },
] as const;

export type EnquiryFieldName = (typeof enquiryFields)[number]["name"];
