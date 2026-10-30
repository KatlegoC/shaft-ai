type Phase = {
  name: string;
  months: string;
  summary: string;
};

type TimelineProps = {
  items?: readonly Phase[];
};

export function Timeline({ items }: TimelineProps) {
  if (!items) {
    return null;
  }

  return (
    <div>
      <ol className="mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
        {items.map((phase, index) => (
          <li key={phase.name} className="relative">
            {index > 0 ? (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-amber lg:min-h-8">
                Go / no-go gate
              </p>
            ) : (
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted lg:min-h-8">
                Start
              </p>
            )}
            <article className="h-full border border-line bg-panel p-5">
              <p className="font-semibold text-paper">
                <span className="text-amber">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="sr-only">. </span>
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-paper">
                {phase.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{phase.months}</p>
              <p className="mt-4 text-sm leading-relaxed text-paper">
                {phase.summary}
              </p>
            </article>
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="mt-8 hidden items-center lg:flex">
        {items.map((phase, index) => (
          <div key={phase.name} className="flex flex-1 items-center">
            {index > 0 ? (
              <span className="mx-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber">
                Gate
              </span>
            ) : null}
            <span className="h-px flex-1 bg-stroke" />
            <span className="size-2.5 shrink-0 bg-paper" />
          </div>
        ))}
      </div>
    </div>
  );
}
