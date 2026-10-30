import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { assessmentCta } from "@/content/site";

export function ClosingCta({
  band = false,
  support,
}: {
  band?: boolean;
  support?: string;
}) {
  if (band) {
    return (
      <section className="bg-amber text-ink" aria-labelledby="assessment-cta">
        <Container className="flex flex-col gap-8 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2
              id="assessment-cta"
              className="text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {assessmentCta.title}
            </h2>
            {support ? (
              <p className="mt-4 text-lg leading-relaxed">{support}</p>
            ) : null}
          </div>
          <ButtonLink href={assessmentCta.href} variant="inverse">
            {assessmentCta.action}
          </ButtonLink>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-b border-line py-16 sm:py-24" aria-labelledby="assessment-cta">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2
          id="assessment-cta"
          className="max-w-xl text-3xl font-semibold tracking-tight text-paper sm:text-4xl"
        >
          {assessmentCta.title}
        </h2>
        <ButtonLink href={assessmentCta.href}>{assessmentCta.action}</ButtonLink>
      </Container>
    </section>
  );
}
