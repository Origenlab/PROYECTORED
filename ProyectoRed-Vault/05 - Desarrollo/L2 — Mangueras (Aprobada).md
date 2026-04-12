# L2 — Mangueras y Herrajes (Aprobada)

## Identificación

| Campo | Valor |
|-------|-------|
| URL | `/mangueras/` |
| Título SEO | Mangueras y Herrajes Contra Incendio NFPA en CDMX \| Proyecto Red |
| Description SEO | Venta de mangueras NFPA 1961 y herrajes para sistemas hidráulicos: chiflones, válvulas, adaptadores NST/Storz, carretes, toma siamesa y monitores. Sistema completo por piso desde $6,500 MXN. Entrega directa en CDMX. |
| OG Image | `/imagenes/og/mangueras-og.jpg` |
| Estado | ✅ Aprobada |
| Versión | v1 |

## Componentes

| Componente | Archivo | Descripción |
|-----------|---------|-------------|
| Hero | `HeroMangueras.astro` | Badge "8 productos · NFPA 1961 · 1.5" a 4" · Proveedor directo". H1: "Mangueras y Herrajes / Contra Incendio". Scoped `.hero-man` |
| Catálogo | `CatalogoMangueras.astro` | 8 productos en 2 filas 4-col. Nav sticky `.nav-cats-man`. CTA strip diagnóstico |
| Guía | `GuiaMangueras.astro` | 4 escenarios: Edificio oficinas / Nave industrial / Residencial / Petroquímica |
| Normas | `NormasMangueras.astro` | 6 normas: NFPA 1961, 1962, 1964, 14, 24, NOM-002-STPS. Grid 3-col |
| FAQ | `FaqMangueras.astro` | 7 FAQs. Panel sticky: "Cotizar sistema completo" + "Componentes de reemplazo" |

## Sección catálogo — 8 productos

| # | Producto | Badge/Norma | Imagen |
|---|---------|-------------|--------|
| 1 | Mangueras para Hidrante | NFPA 1961 | `/imagenes/mangueras/mangueras-hero.jpg` |
| 2 | Chiflones y Boquillas | NFPA 1964 | `/imagenes/mangueras/chiflones.jpg` |
| 3 | Válvulas de Control | NFPA 14 | `/imagenes/mangueras/valvulas.jpg` |
| 4 | Adaptadores y Conexiones | NST · Storz | `/imagenes/mangueras/adaptadores.jpg` |
| 5 | Carretes Porta Manguera | Pared · Pivotante | `/imagenes/mangueras/carretes.jpg` |
| 6 | Toma Siamesa | Obligatoria NFPA 14 | `/imagenes/mangueras/toma-siamesa.jpg` |
| 7 | Llaves Spanner | Universal NST | `/imagenes/mangueras/llaves.jpg` |
| 8 | Monitores Contra Incendio | Industrial 500–2000 GPM | `/imagenes/mangueras/mangueras-hero.jpg` |

> Nota: Monitores usa la misma imagen que Mangueras Hero — no hay imagen dedicada para monitores.

## Guía — 4 escenarios

| Escenario | Norma | Solución |
|-----------|-------|---------|
| Edificio de oficinas | NFPA 14 | Gabinete por piso con manguera 1.5" + toma siamesa |
| Nave industrial | NFPA 14 · 24 | Sistema 2.5" con red exterior y monitores |
| Edificio residencial | NOM-002-STPS | Carretes en pasillos + toma siamesa |
| Planta petroquímica | NFPA 15 · 24 | Monitores 2000 GPM + red exterior de alto caudal |

## JSON-LD schemas

| Schema | Tipo | Contenido |
|--------|------|-----------|
| 1 | `ItemList` | 8 productos con URL y descripción |
| 2 | `FAQPage` | 6 preguntas frecuentes |
| 3 | `BreadcrumbList` | Inicio > Productos > Mangueras y Herrajes |
| 4 | `CollectionPage` | WebPage completa con publisher |

## Normas cubiertas

- **NFPA 1961** — Mangueras de ataque contra incendio
- **NFPA 1962** — Mantenimiento y prueba hidrostática anual
- **NFPA 1964** — Chiflones y boquillas
- **NFPA 14** — Sistemas standpipe (edificios +5 pisos)
- **NFPA 24** — Redes externas de hidrantes
- **NOM-002-STPS** — Centros de trabajo

## Precios de referencia

- Gabinete con manguera 30m + válvula + chiflón por piso: desde **$6,500 MXN**
- Toma siamesa: desde **$3,200 MXN**
- Carretes: desde **$2,800 MXN**
- Sistema completo 10 pisos (sin red hidráulica): **$75,000–$150,000 MXN**

## Sección de orquestador

```
Breadcrumb → HeroMangueras → CtaBar → CatalogoMangueras → GuiaMangueras → TrustIndex → NormasMangueras → FaqMangueras → CTAFinalIndex
```

## Checklist de calidad

- [x] Hero con badge + H1 + subtítulo + 2 párrafos SEO lado derecho
- [x] Nav sticky con pills para los 8 productos
- [x] 8 .ccard con badge norma, 5 subcats como links, CTA secundario
- [x] 4 escenarios .guia-card con imagen + badge + norma + specs
- [x] 6 normas en .norma-card 3-col
- [x] 7 FAQs con panel sticky de cotización
- [x] 4 JSON-LD schemas en el orquestador
- [x] Breadcrumb 3 niveles
- [x] Precios reales en FAQ y JSON-LD
- [x] waUrl() para WhatsApp CTAs
