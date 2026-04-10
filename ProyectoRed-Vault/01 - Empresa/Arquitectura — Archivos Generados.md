# 📁 Arquitectura Astro — Archivos Generados
**Fecha:** 2026-04-02 | **Total archivos:** 20 archivos fuente

---

## Estructura creada

```
PROYECTORED/
├── src/
│   ├── config/
│   │   └── site.ts                    ← Fuente de verdad: contacto, horario, categorías
│   │
│   ├── styles/
│   │   └── global.css                 ← Tokens CSS + Reset + Utilidades base
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro           ← HTML shell + SEO + TopBar + Header + Footer + WA
│   │   └── CategoryLayout.astro       ← Nivel 2: Hero + QuickLinks + Stats + slot + Form + FAQ + CTA
│   │
│   ├── components/
│   │   ├── global/
│   │   │   ├── TopBar.astro           ← Barra roja superior
│   │   │   ├── Header.astro           ← Nav + mega menú + móvil
│   │   │   ├── Footer.astro           ← Footer completo
│   │   │   └── WhatsAppButton.astro   ← Botón flotante verde
│   │   ├── sections/
│   │   │   ├── Hero.astro             ← Hero oscuro reutilizable (props)
│   │   │   ├── QuickLinks.astro       ← 4 accesos rápidos (sin props)
│   │   │   ├── StatsBar.astro         ← Barra roja de métricas (props)
│   │   │   ├── CotizacionForm.astro   ← Formulario → WhatsApp
│   │   │   ├── FAQ.astro              ← Acordeón nativo (details/summary)
│   │   │   └── CTAFinal.astro         ← CTA de cierre (props)
│   │   └── ui/
│   │       └── Breadcrumb.astro       ← Breadcrumb + schema.org
│   │
│   ├── pages/
│   │   ├── productos/index.astro      ← /productos/
│   │   ├── servicios/index.astro      ← /servicios/
│   │   ├── empresas/index.astro       ← /empresas/
│   │   ├── blog/index.astro           ← /blog/
│   │   └── contacto.astro             ← /contacto/
│   │
│   └── content/
│       └── config.ts                  ← Zod schemas para blog/productos/servicios
│
├── astro.config.mjs                   ← Astro + sitemap + MDX + compress + image
├── package.json                       ← Dependencias mínimas
└── tsconfig.json                      ← TypeScript strict + path aliases
```

---

## Principios aplicados

**1 — Un solo lugar para cada dato**
- Horario, teléfono, WhatsApp → `config/site.ts`
- Categorías de productos → `config/site.ts` (array `PRODUCT_CATEGORIES`)
- Servicios → `config/site.ts` (array `SERVICES`)
- Quick links → `config/site.ts` (array `QUICK_LINKS`)
- Mensajes de WhatsApp → `config/site.ts` (objeto `WA_MESSAGES`)

**2 — Cero código duplicado en páginas**
- `CategoryLayout` contiene Hero + QuickLinks + Stats + Form + FAQ + CTA
- Cada página de Nivel 2 solo declara sus props y su contenido único en `<slot />`
- El formulario existe en UN solo archivo (`CotizacionForm.astro`)
- El footer existe en UN solo archivo (`Footer.astro`)

**3 — Cero JavaScript innecesario**
- FAQ usa `<details>/<summary>` nativo — 0 JS
- Stats, Hero, CTAFinal → 0 JS
- Header hamburger → mínimo JS vanilla
- Blog filters → JS vanilla ligero
- Form → JS vanilla ligero (solo constructor de mensaje WhatsApp)

**4 — CSS organizado con tokens**
- Todos los valores de diseño en variables CSS en `global.css`
- Colores, tipografía, espaciado, sombras, radios → tokens
- Estilos scoped en cada componente (Astro scoped CSS)
- Sin frameworks CSS externos (Tailwind, Bootstrap)

**5 — SEO estructurado**
- Meta tags centralizados en `BaseLayout`
- Schema.org en Breadcrumb
- Sitemap automático via `@astrojs/sitemap`
- Canonical URL automático
- Open Graph en todas las páginas

---

## Para iniciar el proyecto

```bash
cd PROYECTORED
npm install
npm run dev      # http://localhost:4321
npm run build    # Build de producción
npm run preview  # Preview del build
```

---

*Generado: 2026-04-02*
