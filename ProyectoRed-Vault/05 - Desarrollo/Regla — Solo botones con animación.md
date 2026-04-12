# Regla: Solo botones tienen animación o transición

**Fecha:** 2026-04-11  
**Estado:** Activa  
**Prioridad:** Alta  

## Regla

**SOLO los botones** (.btn, button, .btn-primary, .btn-cta-wa, .btn-cta-ghost, WhatsAppButton) conservan `transition` y `animation` en todo el sitio.

**Todo lo demás** debe ser instantáneo — cero `transition`, cero `animation`, cero `@keyframes` decorativos.

## Qué se eliminó

- Cards (.ccard, .feature-card, .svc-card, .related-card, .blog-card, .sector-card, .prod-card) — sin hover transitions ni transforms
- Links y CTAs tipo link — sin transiciones de color, gap, o padding
- Iconos SVG — sin transiciones de transform/opacity
- Imágenes en cards — sin zoom/scale en hover
- FAQ chevrons — rotación instantánea, sin transition
- Form inputs — sin transition en focus/border-color
- Footer links — sin transition en color/opacity
- Nav links en Header — sin transition decorativas
- Hero decorations — sin @keyframes (pulse, glow, etc.)

## Qué se conservó

- `.btn` y variantes — transition en background, color, border-color
- WhatsAppButton flotante — transition en transform y box-shadow
- Menú móvil — transiciones funcionales (hamburger toggle, accordion panel, slide-in del menú)
- Botones de paginación del blog

## Razón

Priorizar velocidad y rendimiento puro del sitio. El sitio debe ser lo más limpio y rápido posible, sin animaciones decorativas que consuman recursos del navegador.

## Archivos principales modificados

- `src/styles/pages.css` — Limpieza masiva de cards, blog cards, sidebar
- `src/styles/product-page.css` — Feature cards, service cards, related cards
- `src/components/sections/` — Todos los Hero*, FAQ*, Categorias, Guia, Normas, CTA, Servicios, etc.
- `src/components/global/Header.astro` — Nav links (conservó menú móvil funcional)
- `src/components/global/Footer.astro` — Todos los links
- `src/layouts/Base.astro` — Conservó solo botón
