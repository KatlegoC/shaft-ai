import type { Metadata } from "next";

import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { architecturePage } from "@/content/architecture";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Architecture & Security",
  description: architecturePage.description,
  path: "/architecture",
});

export default function ArchitecturePage() {
  return (
    <>
      <PageHeader
        eyebrow={architecturePage.eyebrow}
        title={architecturePage.title}
        lede={architecturePage.lede}
      />

      <div className="border-b border-line">
        <Container>
          {architecturePage.sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-6 border-t border-line py-12 first:border-t-0 lg:grid-cols-2 lg:gap-16 lg:py-16"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-paper">
                {section.title}
              </h2>
              <div>
                <p className="text-lg leading-relaxed text-muted">{section.lede}</p>
                <ul className="mt-6 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l border-line pl-4 leading-relaxed text-paper"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </div>

      <section className="border-b border-line" aria-labelledby="compliance">
        <Container className="grid gap-6 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <h2
            id="compliance"
            className="text-3xl font-semibold tracking-tight text-paper"
          >
            {architecturePage.compliance.title}
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-muted">
              {architecturePage.compliance.lede}
            </p>
            <ul className="mt-6 space-y-3">
              {architecturePage.compliance.items.map((item) => (
                <li
                  key={item}
                  className="border-l border-amber pl-4 text-lg text-paper"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-paper">
              {architecturePage.compliance.note}
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="architecture-diagram">
        <Container className="py-16 sm:py-24">
          <h2
            id="architecture-diagram"
            className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {architecturePage.diagram.title}
          </h2>
          <div className="mt-8">
            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
