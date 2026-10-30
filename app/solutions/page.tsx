import type { Metadata } from "next";

import { ClosingCta } from "@/components/closing-cta";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { solutionsPage } from "@/content/solutions";
import { primaryCta } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: solutionsPage.title,
  description: solutionsPage.description,
  path: "/solutions",
});

const BOX_W = 148;
const GAP = 32;
const FLOW_W = solutionsPage.flow.steps.length * BOX_W + (solutionsPage.flow.steps.length - 1) * GAP;

function AccessFlow() {
  return (
    <div className="mt-12 overflow-x-auto">
      <svg
        viewBox={`0 0 ${FLOW_W} 96`}
        role="img"
        aria-label={solutionsPage.flow.label}
        className="h-auto min-w-[720px] w-full"
      >
        <defs>
          <marker
            id="gate-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="7"
            markerHeight="7"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 Z" fill="#f5a623" />
          </marker>
        </defs>
        {solutionsPage.flow.steps.map((lines, index) => {
          const x = index * (BOX_W + GAP);
          return (
            <g key={lines.join(" ")}>
              <rect
                x={x}
                y="8"
                width={BOX_W}
                height="80"
                fill="#1a1d21"
                stroke="#2c3138"
              />
              <text
                x={x + BOX_W / 2}
                y="42"
                textAnchor="middle"
                fill="#f3f1ec"
                fontSize="13"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              >
                {lines[0]}
              </text>
              <text
                x={x + BOX_W / 2}
                y="62"
                textAnchor="middle"
                fill="#f3f1ec"
                fontSize="13"
                fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
              >
                {lines[1]}
              </text>
              {index < solutionsPage.flow.steps.length - 1 && (
                <line
                  x1={x + BOX_W + 4}
                  y1="48"
                  x2={x + BOX_W + GAP - 8}
                  y2="48"
                  stroke="#f5a623"
                  strokeWidth="1.5"
                  markerEnd="url(#gate-arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow={solutionsPage.eyebrow}
        title={solutionsPage.title}
        lede={solutionsPage.lede}
      />

      <Section id="gates">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionsPage.cards.map((card) => (
            <li key={card.title} className="border border-line bg-panel p-6">
              <h2 className="text-xl font-semibold tracking-tight text-paper">
                {card.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          {solutionsPage.tech}
        </p>

        <AccessFlow />
      </Section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
