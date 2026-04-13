# Blog L2 — Auditoría y Mejoras (Abril 2026)

**Tipo:** Auditoría de UI/UX
**Fecha:** 2026-04-12
**Páginas afectadas:** `/blog/` (L2 index)

## Componentes del Blog L2

El blog index (L2) se compone de:

1. **[[HeroBlog]]** — Hero oscuro con badge, H1, subtítulo, 2 párrafos editoriales y CTAs
2. **[[CatalogoBlog]]** — Grid 3×3 con paginación client-side + [[BlogSidebar]]
3. **[[FaqCotizacionIndex]]** — FAQ reutilizado del index
4. **[[CTAFinalIndex]]** — CTA final reutilizado del index

## Arquitectura de datos

- Colección `blog` con frontmatter: title, description, pubDate, category, image, author, tags
- 67 artículos en ~15 categorías
- Paginación: 9 posts por página (3×3), 8 páginas
- Imágenes: fallback en 3 niveles (frontmatter → slugImages → categoryImages) → CDN ExactDN

## Layout

```
┌──────────────────────────────────────────────────┐
│ HeroBlog (hero oscuro)                           │
│ [Ver artículos]  [Consulta técnica gratis]       │
├──────────────────────────────────────────────────┤
│ CtaBar                                           │
├──────────────────────────────────────────────────┤
│ SectionHeaderDuo (complemento título)            │
├─────────────────────────────────┬────────────────┤
│ blog-layout__main               │ BlogSidebar    │
│ ┌─────┬─────┬─────┐            │ - Categorías   │
│ │card │card │card │            │ - Recientes    │
│ ├─────┼─────┼─────┤            │ - Productos    │
│ │card │card │card │            │ - Servicios    │
│ ├─────┼─────┼─────┤            │ - CTA WhatsApp │
│ │card │card │card │            │                │
│ └─────┴─────┴─────┘            │                │
│ [Anterior] [1][2]...[8] [Sig]  │                │
├─────────────────────────────────┴────────────────┤
│ FaqCotizacionIndex                               │
├──────────────────────────────────────────────────┤
│ CTAFinalIndex                                    │
└──────────────────────────────────────────────────┘
```

## Responsive

| Breakpoint | Grid cards | Sidebar | Layout |
|-----------|-----------|---------|--------|
| Desktop (>1100px) | 3 columnas | 300px lateral sticky | 2-col |
| Tablet (≤1100px) | 2 columnas | 260px lateral | 2-col |
| Tablet small (≤960px) | 2 columnas | full-width debajo | 1-col |
| Mobile (≤768px) | 1 columna | 1 columna | 1-col |

## CSS Classes principales

- `.blog-layout` — Grid principal (1fr 300px)
- `.blog-grid` — Grid de cards (repeat 3, 1fr)
- `.blogcard` — Card individual con __visual, __badge, __meta, __content, __title, __desc, __cta
- `.blogcard__meta` — Fecha + tiempo de lectura
- `.blog-pagination` — Controles de paginación
- `.blog-results-bar` — Barra con total de artículos + página actual
- `.blog-sidebar` — Sidebar sticky con categorías, recientes, productos, servicios, CTA

## Mejoras aplicadas (2026-04-12)

- Grid de 2 a 3 columnas
- CTAs en hero (artículos + WhatsApp)
- Metadata en cards (fecha + tiempo lectura)
- Indicador de página dinámica
- Badge translúcido con backdrop-filter
- Sidebar reducido 340→300px
- Breakpoint intermedio en 960px
- Tipografía compactada para 3-col

## Relaciones

- Usa: [[SectionHeaderDuo]], [[BlogSidebar]], [[Base.astro Layout]]
- CSS en: `src/styles/pages.css` (sección `.blog-*`)
- Config: `src/config/site.ts` (WA_MESSAGES, PRODUCT_CATEGORIES, SERVICES)
- Contenido: `src/content/blog/*.md`
- Patrón: Mismo que [[Catálogo de Productos]] (L2)
