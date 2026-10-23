import { useEffect, useRef, useState, type ReactNode } from "react";
import { siteConfig } from "@/config/site";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div className="h-full bg-gold-gradient origin-left" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}

export function CtaButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <a
      href={siteConfig.checkoutUrl}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] ${className}`}
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}

export type CardArt = { name: string; art: string; light?: boolean };

export function WalletCard({ c, className = "" }: { c: CardArt; className?: string }) {
  return (
    <div
      className={`relative aspect-[1.586] overflow-hidden rounded-2xl shadow-card ${c.art} ${c.light ? "card-ink-dark" : "card-ink-light"} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,oklch(1_0_0/12%)_45%,transparent_60%)]" />
      <div className="relative flex h-full flex-col justify-between p-[7%]">
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg italic">{c.name}</span>
          <span className="h-5 w-7 rounded-sm bg-gold-gradient opacity-80" />
        </div>
        <div className="font-mono text-xs tracking-[0.2em] opacity-80">•••• 0000</div>
      </div>
    </div>
  );
}

export function SectionTitle({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
