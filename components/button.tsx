import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm font-semibold tracking-wide";

export const buttonStyles = {
  primary: `${base} bg-amber text-ink hover:bg-[#ffc14d]`,
  secondary: `${base} border border-stroke text-paper hover:border-paper`,
  inverse: `${base} bg-ink text-paper hover:bg-panel`,
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link href={href} className={`${buttonStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
