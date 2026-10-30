import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { howWeWorkPage } from "@/content/how-we-work";
import { primaryCta } from "@/content/site";

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow={howWeWorkPage.eyebrow}
        title={howWeWorkPage.title}
        lede={howWeWorkPage.lede}
      />

      {howWeWorkPage.sections.map((section, index) => (
        <Section
          key={section.title}
          className={index !== 0 ? "border-t border-line" : ""}
        >
          <article>
            <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
              {section.summary}
            </p>
            <ul className="mt-8 max-w-2xl space-y-4">
              {section.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="border-l border-line pl-6 leading-relaxed text-muted"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            {section.note && (
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
                {section.note}
              </p>
            )}
          </article>
        </Section>
      ))}

      <Section className="border-t border-line">
        <SectionHeading title={howWeWorkPage.commitments.title} />
        <ul className="mt-8 max-w-2xl space-y-4">
          {howWeWorkPage.commitments.items.map((item) => (
            <li
              key={item}
              className="border-l-2 border-amber pl-6 leading-relaxed text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
