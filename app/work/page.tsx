import Image from "next/image";
import Link from "next/link";

import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { workPage } from "@/content/work";
import { primaryCta } from "@/content/site";

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow={workPage.eyebrow}
        title={workPage.title}
        lede={workPage.lede}
      />

      <div className="border-b border-line">
        {workPage.products.map((product, index) => (
          <Section
            key={product.id}
            id={product.id}
            className={index !== 0 ? "border-t border-line" : ""}
          >
            <article>
              <div className="flex items-center gap-4">
                {product.id === "lupp" && (
                  <div className="flex size-12 shrink-0 items-center justify-center">
                    <Image
                      src="/images/lupp-logo.svg"
                      alt="Lupp logo"
                      width={48}
                      height={48}
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                    {product.tagline}
                  </p>
                  <h2 className="mt-1 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                    {product.name}
                  </h2>
                </div>
              </div>

              <div className="mt-12 grid gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-paper">
                    Problem
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {product.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-paper">
                    What we built
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted">
                    {product.whatWeBuilt}
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold tracking-tight text-paper">
                  Tech highlights
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {product.techHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border-l border-line pl-4 text-muted"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                    Status
                  </h3>
                  <p className="mt-2 text-paper">{product.status}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                    Metrics
                  </h3>
                  <p className="mt-2 text-muted">{product.metrics}</p>
                </div>
              </div>

              {product.link && (
                <div className="mt-8">
                  <Link
                    href={product.link}
                    className="font-semibold text-paper underline decoration-amber underline-offset-4"
                  >
                    Visit {product.name} →
                  </Link>
                </div>
              )}
            </article>
          </Section>
        ))}
      </div>

      <Section>
        <SectionHeading title={workPage.learnings.title} />
        <ul className="mt-8 max-w-2xl space-y-4">
          {workPage.learnings.items.map((item) => (
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
