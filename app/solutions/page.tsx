import type { Metadata } from "next";

import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { solutionsPage } from "@/content/solutions";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Solutions",
  description: solutionsPage.description,
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={solutionsPage.eyebrow}
        title={solutionsPage.title}
        lede={solutionsPage.lede}
      />
      <div className="border-b border-line">
        <Container className="py-4 sm:py-8">
          {solutionsPage.sections.map((section, index) => (
            <article
              key={section.title}
              className="grid gap-6 border-t border-line py-12 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-amber">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper">
                  {section.title}
                </h2>
              </div>
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

      <section className="border-b border-line py-16 sm:py-24" aria-labelledby="build-vs-integrate">
        <Container>
          <h2
            id="build-vs-integrate"
            className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
          >
            {solutionsPage.comparison.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {solutionsPage.comparison.lede}
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-left">
              <caption className="mb-4 text-left text-muted">
                {solutionsPage.comparison.caption}
              </caption>
              <thead>
                <tr className="border-b border-stroke">
                  {solutionsPage.comparison.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="py-3 pr-8 font-semibold text-paper"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {solutionsPage.comparison.rows.map((row) => (
                  <tr key={row.integrate} className="border-b border-line">
                    <td className="py-4 pr-8 align-top leading-relaxed text-paper">
                      {row.build}
                    </td>
                    <td className="py-4 align-top leading-relaxed text-paper">
                      {row.integrate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <ClosingCta />
    </>
  );
}
