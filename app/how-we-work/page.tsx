import type { Metadata } from "next";

import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { howWeWorkPage } from "@/content/how-we-work";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "How we work",
  description: howWeWorkPage.description,
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow={howWeWorkPage.eyebrow}
        title={howWeWorkPage.title}
        lede={howWeWorkPage.lede}
      />

      <section className="border-b border-line" aria-labelledby="principles">
        <Container className="py-16 sm:py-24">
          <h2
            id="principles"
            className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {howWeWorkPage.principlesTitle}
          </h2>
          <ol className="mt-10">
            {howWeWorkPage.principles.map((principle, index) => (
              <li
                key={principle.title}
                className="grid gap-3 border-t border-line py-8 md:grid-cols-[5rem_1fr] md:gap-8"
              >
                <p className="font-semibold text-amber">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-paper">
                    {principle.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="discovery">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2
              id="discovery"
              className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
            >
              {howWeWorkPage.discovery.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {howWeWorkPage.discovery.lede}
            </p>
          </div>
          <ol className="space-y-4">
            {howWeWorkPage.discovery.steps.map((step, index) => (
              <li key={step} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-4">
                <span className="font-semibold text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-paper">{step}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-b border-line" aria-labelledby="commercial">
        <Container className="py-16 sm:py-24">
          <h2
            id="commercial"
            className="max-w-2xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {howWeWorkPage.commercial.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {howWeWorkPage.commercial.lede}
          </p>
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {howWeWorkPage.commercial.items.map((item) => (
              <li key={item.title} className="border border-line bg-panel p-6">
                <h3 className="text-xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
