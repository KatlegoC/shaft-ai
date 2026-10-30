import type { ReactNode } from "react";

import { Container } from "@/components/container";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`border-b border-line py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
