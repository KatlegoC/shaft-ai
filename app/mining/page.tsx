import Image from "next/image";
import {
  Bot,
  Database,
  FileText,
  Gauge,
  MessageSquare,
  QrCode,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { miningPage } from "@/content/mining";

const intelligenceIcons: Record<
  (typeof miningPage.intelligenceLayer.cards)[number]["icon"],
  LucideIcon
> = {
  platform: Database,
  dashboards: Gauge,
  control: Zap,
  predictive: TrendingUp,
  assistant: Bot,
  reporting: FileText,
};

const workforceIcons: Record<
  (typeof miningPage.workforceTools.cards)[number]["icon"],
  LucideIcon
> = {
  whatsapp: MessageSquare,
  report: Smartphone,
  qr: QrCode,
  safety: Shield,
  learning: Users,
  selfservice: Users,
};

function PhotoGrid({
  photos,
}: {
  photos: readonly { src: string; alt: string }[];
}) {
  return (
    <ul className="mt-10 grid gap-4 sm:grid-cols-3">
      {photos.map((photo) => (
        <li
          key={photo.src}
          className="relative aspect-[4/3] overflow-hidden border border-line"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 30vw, 100vw"
          />
        </li>
      ))}
    </ul>
  );
}

export default function MiningPage() {
  return (
    <>
      <PageHeader
        eyebrow={miningPage.eyebrow}
        title={miningPage.title}
        lede={miningPage.lede}
      />

      <div className="border-b border-line">
        <div className="relative aspect-[2/1] w-full sm:aspect-[21/9]">
          <Image
            src={miningPage.photos.lead.src}
            alt={miningPage.photos.lead.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>

      <section className="border-b border-line bg-panel">
        <Container className="py-12 sm:py-16">
          <p className="max-w-3xl text-lg leading-relaxed text-muted">
            {miningPage.intro}
          </p>
        </Container>
      </section>

      <Section>
        <SectionHeading title={miningPage.intelligenceLayer.title} />
        <PhotoGrid photos={miningPage.photos.fleet} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miningPage.intelligenceLayer.cards.map((card) => {
            const Icon = intelligenceIcons[card.icon];
            return (
              <li key={card.title} className="border border-line bg-panel p-6">
                <Icon aria-hidden="true" className="size-5 text-muted" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-paper">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          title={miningPage.workforceTools.title}
          lede={miningPage.workforceTools.sub}
        />
        <PhotoGrid photos={miningPage.photos.people} />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miningPage.workforceTools.cards.map((card) => {
            const Icon = workforceIcons[card.icon];
            return (
              <li key={card.title} className="border border-line bg-panel p-6">
                <Icon aria-hidden="true" className="size-5 text-muted" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-paper">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          {miningPage.workforceTools.note}
        </p>
      </Section>

      <Section>
        <SectionHeading
          title={miningPage.connectivity.title}
          lede={miningPage.connectivity.lede}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src={miningPage.photos.underground.src}
              alt={miningPage.photos.underground.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src={miningPage.photos.surface.src}
              alt={miningPage.photos.surface.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {miningPage.connectivity.cards.map((card) => (
            <li key={card.title} className="border border-line bg-panel p-6">
              <h3 className="text-xl font-semibold tracking-tight text-paper">
                {card.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 border border-line bg-panel p-8">
          <h3 className="text-lg font-semibold text-paper">
            {miningPage.connectivity.flow.title}
          </h3>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {miningPage.connectivity.flow.steps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="rounded border border-amber bg-amber/10 px-3 py-2 text-sm font-medium text-paper">
                  {step}
                </span>
                {index < miningPage.connectivity.flow.steps.length - 1 && (
                  <span className="text-muted">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={miningPage.integrated.title}
          lede={miningPage.integrated.lede}
        />
        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-line">
                {miningPage.integrated.columns.map((col) => (
                  <th
                    key={col}
                    className="p-4 text-left text-sm font-semibold uppercase tracking-[0.16em] text-amber"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {miningPage.integrated.rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b border-line last:border-b-0"
                >
                  <td className="p-4 text-muted">{row.build}</td>
                  <td className="p-4 text-muted">{row.integrate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title={miningPage.phases.title}
          lede={miningPage.phases.lede}
        />
        <Timeline items={miningPage.phases.items} />
        <p className="mt-8 text-lg font-semibold text-amber">
          {miningPage.phases.stopLine}
        </p>
      </Section>

      <ClosingCta
        title={miningPage.cta.title}
        support={miningPage.cta.support}
        action={miningPage.cta.action}
        href={miningPage.cta.href}
      />
    </>
  );
}
