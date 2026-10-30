export function MarkedPlaceholder({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <aside
      className="border border-dashed border-stroke bg-panel px-6 py-8"
      aria-label={label}
    >
      <p className="text-sm font-semibold tracking-[0.12em] text-amber">{label}</p>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{children}</p>
    </aside>
  );
}
