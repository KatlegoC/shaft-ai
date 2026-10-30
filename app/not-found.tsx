import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-paper">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        That address is not on this site.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to the home page</ButtonLink>
      </div>
    </Container>
  );
}
