import {
  BookOpen,
  Gauge,
  MessageSquare,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button";
import { ClosingCta } from "@/components/closing-cta";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { SectionHeading } from "@/components/section-heading";
import { home } from "@/content/home";
import { primaryCta } from "@/content/site";

const whatWeDoIcons: Record<
  (typeof home.whatWeDo.cards)[number]["icon"],
  LucideIcon
> = {
  discovery: BookOpen,
  build: Sparkles,
  data: Gauge,
  mobile: Smartphone,
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-ink">
        <Container className="py-16 sm:py-24 lg:py-32">
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {home.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {home.hero.sub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={home.hero.primaryHref}>
              {home.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href={home.hero.secondaryHref} variant="secondary">
              {home.hero.secondaryCta}
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-label="Key principles" className="border-b border-line">
        <Container>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
            {home.strip.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 text-sm font-medium text-paper sm:border-b-0 sm:border-r sm:px-5 sm:py-6 sm:last:border-r-0 lg:px-6"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <SectionHeading
          eyebrow={home.whatWeDo.eyebrow}
          title={home.whatWeDo.title}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {home.whatWeDo.cards.map((card) => {
            const Icon = whatWeDoIcons[card.icon];
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
          eyebrow={home.ourWork.eyebrow}
          title={home.ourWork.title}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {home.ourWork.preview.map((product) => (
            <li key={product.name} className="border border-line bg-panel p-8">
              {product.name === "Lupp" && (
                <div className="mb-4 flex size-12 items-center justify-center">
                  <Image
                    src="/images/lupp-logo.svg"
                    alt="Lupp logo"
                    width={48}
                    height={48}
                  />
                </div>
              )}
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
                {product.industry}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-paper">
                {product.name}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {product.tagline}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href={home.ourWork.link.href}
            className="font-semibold text-paper underline decoration-amber underline-offset-4"
          >
            {home.ourWork.link.label} →
          </Link>
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={home.industries.eyebrow}
          title={home.industries.title}
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.industries.items.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block border border-line bg-panel p-6 transition-colors hover:border-amber"
              >
                <h3 className="text-lg font-semibold text-paper">
                  {item.name}
                </h3>
                {item.badge && (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                    {item.badge}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-y border-line bg-panel">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              {home.miningTeaser.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {home.miningTeaser.body}
            </p>
            <div className="mt-8">
              <ButtonLink href={home.miningTeaser.href}>
                {home.miningTeaser.cta}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
