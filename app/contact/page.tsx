import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: contactPage.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lede={contactPage.lede}
      />
      <section className="border-b border-line">
        <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <aside>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              Where we are
            </h2>
            <p className="mt-3 text-lg text-paper">
              {contactPage.location.city}, {contactPage.location.country}
            </p>
            <h2 className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-amber">
              {contactPage.aside.nextTitle}
            </h2>
            <ol className="mt-4 space-y-3">
              {contactPage.aside.next.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[2rem_1fr] gap-2 text-muted"
                >
                  <span className="font-semibold text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </aside>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
