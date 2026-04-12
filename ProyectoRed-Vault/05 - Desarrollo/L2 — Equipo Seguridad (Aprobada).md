# L2 — Equipo de Seguridad Industrial (Aprobada)

## Identificación

| Campo | Valor |
|-------|-------|
| URL | `/equipo-seguridad/` |
| Título SEO | Equipo de Seguridad Industrial y EPP en CDMX \| Proyecto Red |
| Description SEO | Venta de equipo de protección personal (EPP) certificado NOM-017-STPS: cascos, lentes, protección auditiva, respiradores, guantes, calzado, arneses y ropa de protección. Selección técnica por tipo de riesgo. |
| OG Image | `/imagenes/og/equipo-seguridad-og.jpg` |
| Estado | ✅ Aprobada |
| Versión | v1 |

## Componentes

| Componente | Archivo | Descripción |
|-----------|---------|-------------|
| Hero | `HeroEquipoSeguridad.astro` | Badge "NOM-017-STPS · ANSI · EN · 8 líneas de EPP". H1: "Equipo de / Seguridad Industrial". Scoped `.hero-es` |
| Catálogo | `CatalogoEquipoSeguridad.astro` | 8 productos en grid 4-col estándar (2 filas). Nav sticky `.nav-cats-es`. CTA strip |
| Guía | `GuiaEquipoSeguridad.astro` | 4 escenarios: Construcción / Planta industrial / Obra vial / Mantenimiento eléctrico |
| Normas | `NormasEquipoSeguridad.astro` | 6 normas: NOM-017-STPS, NOM-011, NOM-113, NOM-009, ANSI Z87.1, NOM-029. Grid 3-col |
| FAQ | `FaqEquipoSeguridad.astro` | 7 FAQs. Panel sticky: "Cotizar EPP certificado" + "Programa de EPP para STPS" |

## Sección catálogo — 8 productos (grid 4-col estándar)

| # | Producto | Badge/Norma | Imagen |
|---|---------|-------------|--------|
| 1 | Protección Craneal | NOM-017-STPS | `/imagenes/equipo-seguridad/cascos.jpg` |
| 2 | Protección Visual | ANSI Z87.1 | `/imagenes/equipo-seguridad/lentes.jpg` |
| 3 | Protección Auditiva | NOM-011-STPS | `/imagenes/equipo-seguridad/tapones-auditivos.jpg` |
| 4 | Protección Respiratoria | NIOSH · NOM-116 | `/imagenes/equipo-seguridad/equipos-seguridad-hero.jpg` |
| 5 | Protección de Manos | EN 388 · EN 374 | `/imagenes/equipo-seguridad/conos.jpg` |
| 6 | Calzado de Seguridad | NOM-113-STPS | `/imagenes/equipo-seguridad/cascos.jpg` (reused) |
| 7 | Arneses y Protección Caídas | NOM-009-STPS | `/imagenes/equipo-seguridad/chalecos.jpg` |
| 8 | Ropa de Protección | EN 11612 · ANSI 107 | `/imagenes/equipo-seguridad/chalecos.jpg` (reused) |

> Nota: 8 productos con 6 imágenes — cascos y chalecos se reutilizan. Grid estándar `.catidx-grid` (4-col), no requiere override.

## Guía — 4 escenarios por tipo de industria

| Escenario | Norma principal | EPP requerido |
|-----------|----------------|---------------|
| Construcción / Obra civil | NOM-017-STPS | Casco G + lentes + tapones + calzado casquillo + arnés +1.80m |
| Planta industrial / Manufactura | NOM-017-STPS · NOM-011 | EPP por puesto + programa documentado |
| Obras viales / Trabajo exterior | ANSI 107 · NOM-017-STPS | Chaleco alta visibilidad clase 2 o 3 según velocidad |
| Mantenimiento eléctrico | NOM-029-STPS · NFPA 70E | Casco clase E + guante dieléctrico + calzado EH + ropa FR |

## JSON-LD schemas

| Schema | Tipo | Contenido |
|--------|------|-----------|
| 1 | `ItemList` | 8 productos con URL y descripción |
| 2 | `FAQPage` | 6 preguntas frecuentes |
| 3 | `BreadcrumbList` | Inicio > Productos > Equipo de Seguridad Industrial |
| 4 | `CollectionPage` | WebPage completa con publisher |

## Normas cubiertas

- **NOM-017-STPS** — programa de EPP (análisis de riesgo + selección + documentación)
- **NOM-011-STPS** — protección auditiva (límite 85 dB, dosimetría)
- **NOM-113-STPS** — calzado de seguridad (casquillo, antiperforación, EH)
- **NOM-009-STPS** — trabajo en altura (arnés + línea + anclaje)
- **ANSI Z87.1** — protección visual (impacto, rayos UV, salpicaduras)
- **NOM-029-STPS** — riesgo eléctrico (guante dieléctrico, casco clase E, ropa FR)

## Precios de referencia

- EPP básico obra (casco + lentes + tapones + guantes + calzado): **$800–$1,800 MXN** por trabajador
- EPP mantenimiento eléctrico completo: **$3,500–$8,000 MXN** por persona

## Sección de orquestador

```
Breadcrumb → HeroEquipoSeguridad → CtaBar → CatalogoEquipoSeguridad → GuiaEquipoSeguridad → TrustIndex → NormasEquipoSeguridad → FaqEquipoSeguridad → CTAFinalIndex
```

## Diferenciadores de esta L2 vs otras

- **8 productos en grid 4-col estándar** (2 filas completas) — misma cantidad que mangueras
- **Mezcla NOM + estándares internacionales** (ANSI, EN, NIOSH, NFPA 70E) — catálogo más técnico
- **FAQ con argumentos legales** (responsabilidad civil, registro de entrega) — diferenciador para venta B2B
- **Escenario mantenimiento eléctrico** en guía — riesgo con EPP muy específico (guante dieléctrico, clase E, ropa FR)
- **CTA panel "Programa de EPP para STPS"** — captura el cliente que necesita el proceso completo, no solo el producto

## Checklist de calidad

- [x] Hero con badge + H1 + subtítulo + 2 párrafos SEO
- [x] Nav sticky con 8 pills de producto
- [x] 8 .ccard con badge norma, 5 subcats como links, CTA secundario
- [x] Grid estándar 4-col para 8 items (no requiere override)
- [x] 4 escenarios .guia-card con imagen + badge industria + norma + specs
- [x] 6 normas en .norma-card 3-col (NOM + estándares internacionales)
- [x] 7 FAQs con panel sticky orientado a programa de EPP
- [x] 4 JSON-LD schemas en el orquestador
- [x] Breadcrumb 3 niveles
- [x] waUrl() para todos los CTAs de WhatsApp
