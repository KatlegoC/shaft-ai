"use server";

import {
  contactPage,
  enquiryFields,
  type EnquiryFieldName,
} from "@/content/contact";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<EnquiryFieldName, string>>;
  delivered: boolean;
};

function clean(value: FormDataEntryValue | null, max: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .trim()
    .slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitEnquiry(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = clean(formData.get("shaft_hp"), 200);
  if (honeypot) {
    return {
      status: "success",
      message: contactPage.form.successBody,
      fieldErrors: {},
      delivered: true,
    };
  }

  const fieldErrors: ContactState["fieldErrors"] = {};
  const values: Record<EnquiryFieldName, string> = {
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  };

  for (const field of enquiryFields) {
    const value = clean(formData.get(field.name), field.maxLength);
    values[field.name] = value;

    if (field.required && !value) {
      fieldErrors[field.name] = `${field.label} is required.`;
    }
  }

  if (values.email && !fieldErrors.email && !isEmail(values.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  const phoneDigits = values.phone.replace(/\D/g, "");
  if (values.phone && phoneDigits.length < 7) {
    fieldErrors.phone = "Enter a phone number we can call.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: contactPage.form.errorSummary,
      fieldErrors,
      delivered: false,
    };
  }

  const formId = process.env.FORMSPREE_FORM_ID;

  if (!formId) {
    if (process.env.NODE_ENV === "production") {
      console.error("FORMSPREE_FORM_ID is not set. Enquiry was not delivered.");
      return {
        status: "error",
        message: contactPage.form.unconfiguredError,
        fieldErrors: {},
        delivered: false,
      };
    }

    return {
      status: "success",
      message: contactPage.form.successBody,
      fieldErrors: {},
      delivered: false,
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        company: values.company,
        role: values.role,
        email: values.email,
        phone: values.phone,
        message: values.message,
        _subject: "Site assessment enquiry — Shaft AI",
      }),
    });

    if (!response.ok) {
      console.error("Contact form delivery failed", response.status);
      return {
        status: "error",
        message: contactPage.form.deliveryError,
        fieldErrors: {},
        delivered: false,
      };
    }
  } catch (error) {
    console.error(
      "Contact form delivery failed",
      error instanceof Error ? error.name : "unknown",
    );
    return {
      status: "error",
      message: contactPage.form.deliveryError,
      fieldErrors: {},
      delivered: false,
    };
  }

  return {
    status: "success",
    message: contactPage.form.successBody,
    fieldErrors: {},
    delivered: true,
  };
}
