import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";

import katlegoPortrait from "@/components/ui/Katlego.png";
import talentPortrait from "@/components/ui/Talent.png";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { aboutPage } from "@/content/about";
import { pageMetadata } from "@/lib/seo";

const portraits: Record<(typeof aboutPage.founders)[number]["image"], StaticImageData> = {
  katlego: katlegoPortrait,
  talent: talentPortrait,
};

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutPage.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lede={aboutPage.lede}
      />

      <section className="border-b border-line" aria-labelledby="founders">
        <Container className="py-16 sm:py-24">
          <h2
            id="founders"
            className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {aboutPage.foundersIntro.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {aboutPage.foundersIntro.body}
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {aboutPage.founders.map((founder) => (
              <li key={founder.id} className="border border-line bg-panel">
                <div className="relative aspect-square border-b border-line bg-ink">
                  <Image
                    src={portraits[founder.image]}
                    alt={`Portrait of ${founder.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 480px, 100vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-paper">{founder.name}</h3>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-amber">
                    {founder.role}
                  </p>
                  {founder.bio ? (
                    <p className="mt-4 leading-relaxed text-muted">{founder.bio}</p>
                  ) : null}
                  {founder.linkedin ? (
                    <p className="mt-5">
                      <a
                        href={founder.linkedin}
                        className="font-semibold text-paper underline decoration-amber underline-offset-4"
                        rel="noreferrer"
                        target="_blank"
                      >
                        LinkedIn
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="local-skills">
        <Container className="grid gap-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <h2
            id="local-skills"
            className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {aboutPage.skills.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted">{aboutPage.skills.body}</p>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
