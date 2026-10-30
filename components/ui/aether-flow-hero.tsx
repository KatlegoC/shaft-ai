"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

import { ButtonLink } from "@/components/button";
import { Container } from "@/components/container";

const INK = "#111315";
const AMBER = "rgba(245, 166, 35, 0.8)";
const AMBER_LINE = "245, 166, 35";
const PAPER_LINE = "243, 241, 236";

type AetherFlowHeroProps = {
  title: string;
  lead: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
};

const rise =
  "motion-safe:[animation:hero-rise_0.8s_ease_both]";

export function AetherFlowHero({
  title,
  lead,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: AetherFlowHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    const drawing = canvas.getContext("2d");
    if (!drawing) return;
    const context: CanvasRenderingContext2D = drawing;

    const surface = canvas;
    const frameHost = host;

    let frame = 0;
    const particles: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string,
      ) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
      }

      update() {
        if (this.x > surface.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > surface.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < mouse.radius + this.size) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 5;
            this.y -= (dy / distance) * force * 5;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function init() {
      particles.length = 0;
      const count = Math.min((surface.height * surface.width) / 9000, 140);
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (surface.width - size * 2) + size;
        const y = Math.random() * (surface.height - size * 2) + size;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        particles.push(new Particle(x, y, directionX, directionY, size, AMBER));
      }
    }

    function resize() {
      const rect = frameHost.getBoundingClientRect();
      surface.width = Math.max(1, Math.floor(rect.width));
      surface.height = Math.max(1, Math.floor(rect.height));
      surface.style.width = "100%";
      surface.style.height = "100%";
      init();
    }

    function connect() {
      const reach = (surface.width / 7) * (surface.height / 7);

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;
          if (distance >= reach) continue;

          const opacity = Math.max(0, 1 - distance / 20000);
          let stroke = `rgba(${AMBER_LINE}, ${opacity})`;
          if (mouse.x !== null && mouse.y !== null) {
            const pointerDistance = Math.hypot(
              particles[a].x - mouse.x,
              particles[a].y - mouse.y,
            );
            if (pointerDistance < mouse.radius) {
              stroke = `rgba(${PAPER_LINE}, ${opacity})`;
            }
          }
          context.strokeStyle = stroke;
          context.lineWidth = 1;
          context.beginPath();
          context.moveTo(particles[a].x, particles[a].y);
          context.lineTo(particles[b].x, particles[b].y);
          context.stroke();
        }
      }
    }

    function paint() {
      context.fillStyle = INK;
      context.fillRect(0, 0, surface.width, surface.height);
      for (const particle of particles) particle.update();
      connect();
    }

    function animate() {
      frame = requestAnimationFrame(animate);
      paint();
    }

    function pointerFrom(event: MouseEvent) {
      const rect = surface.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    }

    function clearPointer() {
      mouse.x = null;
      mouse.y = null;
    }

    const observer = new ResizeObserver(resize);
    observer.observe(frameHost);
    resize();
    animate();
    window.addEventListener("mousemove", pointerFrom);
    window.addEventListener("mouseout", clearPointer);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", pointerFrom);
      window.removeEventListener("mouseout", clearPointer);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="relative flex w-full min-w-0 min-h-[calc(100svh-4rem)] items-center overflow-hidden border-b border-line bg-ink">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 h-full w-full max-w-full"
      />
      <div className="relative z-10 w-full min-w-0">
        <Container className="py-16 sm:py-24">
          <h1
            className={`${rise} max-w-3xl text-4xl font-bold text-paper sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]`}
            style={{ animationDelay: "0.5s" }}
          >
            {title}
          </h1>

          <p
            className={`${rise} mt-5 max-w-2xl text-lg font-medium leading-relaxed text-muted sm:text-xl`}
            style={{ animationDelay: "0.7s" }}
          >
            {lead}
          </p>

          <p
            className={`${rise} mt-4 max-w-2xl text-base font-medium leading-relaxed text-faint`}
            style={{ animationDelay: "0.85s" }}
          >
            {description}
          </p>

          <div
            className={`${rise} mt-8 flex flex-col gap-3 sm:flex-row`}
            style={{ animationDelay: "1.1s" }}
          >
            <ButtonLink href={primaryHref}>
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default AetherFlowHero;
