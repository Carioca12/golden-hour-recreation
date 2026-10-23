# CARD STYLE — landing page (pt-BR)

Single scrolling page at `/` following the brief exactly (one long page explicitly requested, anchors for O que é, Estilos, Como funciona, FAQ).

## Design
- Near-black background, soft gold/metallic accent, glow/spotlight gradients — all as tokens in styles.css.
- Fonts: Instrument Serif (italic accents) + Inter, loaded via link in root head.
- Slim scroll-progress bar, sticky minimal header, scroll-reveal (IntersectionObserver), mobile-first.

## Sections
1. Announcement bar
2. Hero with CSS-built 3D iPhone mockup + stacked card visuals, CTA
3. O que é (only appearance changes)
4. Estilos: horizontal snap carousel of 10 original designs (pure CSS gradients: black matte, gold, minimal, neon, marble, carbon, etc.) — no logos, plus the disclaimer note
5. Como funciona: 4 steps + video tutorial placeholder
6. Requisitos (transparent, restore anytime, not an iPhone app)
7. Preço: "a partir de R$ 27,90", included list, CTA to checkout URL, 7-day guarantee
8. FAQ accordion (7 questions, honest answers)
9. Footer with links, contact placeholders, Apple disclaimer

## Technical
- `src/config/site.ts`: checkoutUrl, whatsapp, email, price, metaPixelId, gaId (empty).
- Components in `src/components/landing/*`; shadcn-style accordion built with native details or Radix if present.
- Analytics: only injected when IDs are non-empty; no hidden scripts.
- head() on index with pt-BR title/description/OG; root title cleaned up, `lang="pt-BR"`.
- Cards drawn with CSS (no generated images needed) for fast loading.
