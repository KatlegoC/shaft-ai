import {
  Gauge,
  LayoutDashboard,
  Route,
  ScanLine,
  Server,
  Unplug,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import haulTruck from "@/components/omid-roshan-Evss0Whf5OI-unsplash.jpg";
import declineTunnel from "@/components/alpha-perspective-W0qlm5HDVjI-unsplash.jpg";
import { ButtonLink } from "@/components/button";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { MarkedPlaceholder } from "@/components/placeholder";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { home } from "@/content/home";
import { assessmentCta } from "@/content/site";

const problemIcons: Record<(typeof home.problem.items)[number]["icon"], LucideIcon> =
  {
    cost: Gauge,
    decline: Route,
    adoption: Unplug,
  };

const stepIcons: Record<(typeof home.howItWorks.steps)[number]["icon"], LucideIcon> =
  {
    capture: ScanLine,
    connect: Server,
    act: LayoutDashboard,
  };

export default function HomePage() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc={haulTruck}
      bgImageSrc={declineTunnel}
      mediaAlt={home.scrollHero.mediaAlt}
      bgAlt={home.scrollHero.bgAlt}
      title={home.scrollHero.title}
      date={home.scrollHero.date}
      scrollToExpand={home.scrollHero.scrollToExpand}
      textBlend
    >
      <section className="border-b border-line bg-ink">
        <Container className="py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            {home.eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {home.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {home.hero.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={assessmentCta.href}>{home.hero.primaryCta}</ButtonLink>
            <ButtonLink href={home.hero.secondaryHref} variant="secondary">
              {home.hero.secondaryCta}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-label="What the platform is built to do" className="border-b border-line">
        <Container>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {home.facts.map((fact) => (
              <li
                key={fact}
                className="border-b border-line py-4 text-sm font-medium text-paper sm:border-b-0 sm:border-r sm:px-5 sm:py-6 sm:last:border-r-0 lg:px-6"
              >
                {fact}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow={home.problem.eyebrow}
          title={home.problem.title}
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {home.problem.items.map((item) => {
            const Icon = problemIcons[item.icon];
            return (
              <li key={item.title} className="border border-line bg-panel p-6">
                <Icon aria-hidden="true" className="size-5 text-muted" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={home.equipment.eyebrow}
          title={home.equipment.title}
          lede={home.equipment.lede}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {home.equipment.gallery.map((image) => (
            <li key={image.src}>
              <figure className="h-full border border-line bg-panel">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  {image.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="how-it-works">
        <SectionHeading
          eyebrow={home.howItWorks.eyebrow}
          title={home.howItWorks.title}
          lede={home.howItWorks.lede}
        />
        <ol className="mt-12 grid gap-10 lg:grid-cols-3">
          {home.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[step.icon];
            return (
              <li key={step.title}>
                <div className="flex items-center gap-3">
                  <Icon aria-hidden="true" className="size-5 text-muted" />
                  <p className="text-xs font-semibold tracking-[0.16em] text-amber">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-paper">
                  {step.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {step.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-l border-line pl-4 leading-relaxed text-muted"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </Section>

      <Section id="phases">
        <SectionHeading
          eyebrow={home.phases.eyebrow}
          title={home.phases.title}
          lede={home.phases.lede}
        />
        <Timeline />
        <p className="mt-8">
          <Link
            href="/how-we-work"
            className="font-semibold text-paper underline decoration-amber underline-offset-4"
          >
            How the phases are priced
          </Link>
        </p>
      </Section>

      <Section>
        <MarkedPlaceholder label={home.caseStudy.label}>
          {home.caseStudy.body}
        </MarkedPlaceholder>
      </Section>

      <ClosingCta band support={assessmentCta.support} />
    </ScrollExpandMedia>
  );
}
