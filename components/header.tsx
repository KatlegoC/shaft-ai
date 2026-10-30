"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { primaryCta, nav } from "@/content/site";

function isCurrent(pathname: string, href: string) {
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              const isCta = "cta" in item && item.cta;
              if (isCta) {
                return (
                  <li key={item.href}>
                    <ButtonLink href={item.href}>{item.label}</ButtonLink>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`text-sm font-medium ${
                      current ? "text-amber" : "text-muted hover:text-paper"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3 xl:hidden">
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex size-11 items-center justify-center border border-stroke text-paper xl:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </div>
      </Container>
      <nav
        id={menuId}
        aria-label="Primary"
        className={open ? "border-t border-line xl:hidden" : "hidden"}
      >
        <Container className="flex flex-col gap-1 py-4">
          <ul className="flex flex-col">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              const isCta = "cta" in item && item.cta;
              if (isCta) {
                return (
                  <li key={item.href} className="mt-3">
                    <ButtonLink href={item.href}>{item.label}</ButtonLink>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`flex min-h-11 items-center text-base font-medium ${
                      current ? "text-amber" : "text-paper"
                    }`}
                    onClick={() => setOpenPath(null)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </nav>
    </header>
  );
}
