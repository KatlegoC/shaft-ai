import {
  BookOpen,
  Gauge,
  MessageSquare,
  ScanEye,
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
import { AetherFlowHero } from "@/components/ui/aether-flow-hero";
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
  vision: ScanEye,
};

export default function HomePage() {
  return (
    <>
      <AetherFlowHero
        title={home.hero.title}
        lead={home.hero.lead}
        description={home.hero.sub}
        primaryHref={home.hero.primaryHref}
        primaryLabel={home.hero.primaryCta}
        secondaryHref={home.hero.secondaryHref}
        secondaryLabel={home.hero.secondaryCta}
      />

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
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {home.whatWeDo.cards.map((card) => {
            const Icon = whatWeDoIcons[card.icon];
            const href = "href" in card ? card.href : undefined;
            const body = (
              <>
                <Icon aria-hidden="true" className="size-5 text-muted" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-paper">
                  {card.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
              </>
            );
            const cardClass = "block h-full border border-line bg-panel p-6";
            return (
              <li key={card.title}>
                {href ? (
                  <Link href={href} className={`${cardClass} hover:border-amber`}>
                    {body}
                  </Link>
                ) : (
                  <div className={cardClass}>{body}</div>
                )}
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
        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
          <div>
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
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src="/images/haul-truck-pit.jpg"
              alt="A loaded haul truck driving across an open pit."
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Container>
      </section>

      <ClosingCta support={primaryCta.support} />
    </>
  );
}
