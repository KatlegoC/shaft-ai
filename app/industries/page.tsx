import Link from "next/link";

import { ButtonLink } from "@/components/button";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { industriesPage } from "@/content/industries";
import { primaryCta } from "@/content/site";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow={industriesPage.eyebrow}
        title={industriesPage.title}
        lede={industriesPage.lede}
      />

      <div className="border-b border-line">
        {industriesPage.industries.map((industry, index) => (
          <Section
            key={industry.id}
            id={industry.id}
            className={index !== 0 ? "border-t border-line" : ""}
          >
            <article>
              <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {industry.name}
              </h2>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                    Problem
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {industry.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                    Solution
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {industry.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                  Examples
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {industry.examples.map((example) => (
                    <li
                      key={example}
                      className="border-l border-line pl-4 text-muted"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              {industry.link && (
                <div className="mt-8">
                  <Link
                    href={industry.link.href}
                    className="font-semibold text-paper underline decoration-amber underline-offset-4"
                  >
                    {industry.link.label} →
                  </Link>
                </div>
              )}
            </article>
          </Section>
        ))}
      </div>

      <section className="border-b border-line bg-panel">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-paper sm:text-3xl">
              {industriesPage.cta.title}
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {industriesPage.cta.body}
            </p>
            <div className="mt-8">
              <ButtonLink href={industriesPage.cta.href}>
                {industriesPage.cta.action}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
