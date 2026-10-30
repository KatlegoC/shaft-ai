import Image from "next/image";

export function EquipmentFigure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="border border-line bg-panel">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 360px, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="border-t border-line px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {caption}
      </figcaption>
    </figure>
  );
}
