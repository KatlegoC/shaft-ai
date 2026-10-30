export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
