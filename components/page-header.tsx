import { Container } from "@/components/container";

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </Container>
    </header>
  );
}
