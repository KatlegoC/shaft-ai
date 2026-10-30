import Link from "next/link";

export function ShaftMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <path d="M5 7h22" stroke="#F5A623" strokeWidth="1.5" />
      <path d="M11 7v9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 16l13 10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 21h6" stroke="#F5A623" strokeWidth="1.5" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 text-paper"
      aria-label="Shaft AI, home"
    >
      <ShaftMark />
      <span className="text-[15px] font-semibold tracking-[0.16em]">
        SHAFT AI
      </span>
    </Link>
  );
}
