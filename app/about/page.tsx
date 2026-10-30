import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { aboutPage } from "@/content/about";
import { primaryCta } from "@/content/site";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lede={aboutPage.lede}
      />

      <Section>
        <SectionHeading title={aboutPage.mission.title} />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {aboutPage.mission.body}
        </p>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading title={aboutPage.story.title} />
        <div className="mt-6 max-w-3xl space-y-6">
          {aboutPage.story.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line">
        <SectionHeading title={aboutPage.location.title} />
        <p className="mt-6 text-lg text-paper">{aboutPage.location.body}</p>
      </Section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
