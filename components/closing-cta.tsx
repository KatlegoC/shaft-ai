import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { primaryCta } from "@/content/site";

export function ClosingCta({
  band = false,
  title,
  support,
  action,
  href,
}: {
  band?: boolean;
  title?: string;
  support?: string;
  action?: string;
  href?: string;
}) {
  const ctaTitle = title ?? primaryCta.title;
  const ctaSupport = support ?? primaryCta.support;
  const ctaAction = action ?? primaryCta.action;
  const ctaHref = href ?? primaryCta.href;

  if (band) {
    return (
      <section className="bg-amber text-ink" aria-labelledby="cta-title">
        <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="cta-title"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {ctaTitle}
            </h2>
            {ctaSupport ? (
              <p className="mt-4 text-lg leading-relaxed">{ctaSupport}</p>
            ) : null}
          </div>
          <ButtonLink href={ctaHref} variant="inverse">
            {ctaAction}
          </ButtonLink>
        </Container>
      </section>
    );
  }

  return (
    <section
      className="border-b border-line py-16 sm:py-24"
      aria-labelledby="cta-title"
    >
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="cta-title"
          className="max-w-xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
        >
          {ctaTitle}
        </h2>
        <ButtonLink href={ctaHref}>{ctaAction}</ButtonLink>
      </Container>
    </section>
  );
}
