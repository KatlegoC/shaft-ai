import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { nav, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <Container className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 leading-relaxed text-muted">
            Shaft AI is a black-owned South African company, part of{" "}
            {site.parentCompany}. {site.builtIn}.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Navigate
          </h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-paper hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
            Contact
          </h2>
          <p className="mt-4 text-muted">
            <a
              href={`https://maps.google.com/maps?q=${encodeURIComponent(site.addressLine)}`}
              className="underline decoration-amber/70 underline-offset-4 hover:text-paper"
            >
              {site.addressLine}
            </a>
          </p>
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="text-sm text-muted">{site.copyright}</p>
      </Container>
    </footer>
  );
}
