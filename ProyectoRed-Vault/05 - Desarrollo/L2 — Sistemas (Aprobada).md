# L2 — Sistemas Contra Incendio (Aprobada)

## Identificación

| Campo | Valor |
|-------|-------|
| URL | `/sistemas/` |
| Título SEO | Sistemas Contra Incendio NFPA en CDMX \| Proyecto Red |
| Description SEO | Diseño, instalación y mantenimiento de sistemas contra incendio en CDMX: alarmas NFPA 72, detectores, rociadores NFPA 13, tableros FACP y redes hidráulicas NFPA 20. Ingenieros certificados. Desde $45,000 MXN instalado. |
| OG Image | `/imagenes/og/sistemas-og.jpg` |
| Estado | ✅ Aprobada |
| Versión | v1 |

## Componentes

| Componente | Archivo | Descripción |
|-----------|---------|-------------|
| Hero | `HeroSistemas.astro` | Badge "NFPA 72 · 13 · 14 · 20 · Ingenieros certificados". H1: "Sistemas Contra / Incendio NFPA". Precio desde $45,000 MXN. Scoped `.hero-sis` |
| Catálogo | `CatalogoSistemas.astro` | 5 subsistemas en grid 3+2. Nav sticky `.nav-cats-sis`. CTA strip diagnóstico gratuito |
| Guía | `GuiaSistemas.astro` | 4 escenarios: Bodega/nave / Oficinas-corporativo / Restaurante-cocina / Centro de datos |
| Normas | `NormasSistemas.astro` | 6 normas: NFPA 72, 13, 14, 20, 96, NOM-002-STPS. Grid 3-col |
| FAQ | `FaqSistemas.astro` | 7 FAQs. Panel sticky: "Diagnóstico gratuito" + "Mantenimiento de sistema existente" |

## Sección catálogo — 5 subsistemas

| # | Subsistema | Badge/Norma | Imagen |
|---|-----------|-------------|--------|
| 1 | Alarmas Contra Incendio | NFPA 72 | `/imagenes/sistemas/alarmas.jpg` |
| 2 | Detectores de Humo e Incendio | NFPA 72 | `/imagenes/sistemas/detectores.jpg` |
| 3 | Rociadores Automáticos | NFPA 13 | `/imagenes/sistemas/rociadores.jpg` |
| 4 | Tableros de Control (FACP) | NFPA 72 | `/imagenes/sistemas/tablero-control.jpg` |
| 5 | Redes Hidráulicas | NFPA 14 · 20 | `/imagenes/sistemas/redes-hidraulicas.jpg` |

> Nota: 5 subsistemas → grid `.catidx-grid--sis` override a 3-col (layout 3+2 centrado)

## Guía — 4 escenarios por tipo de inmueble

| Escenario | Norma principal | Sistema recomendado |
|-----------|----------------|---------------------|
| Bodega / Nave industrial | NFPA 13 · NFPA 20 | Rociadores automáticos + Red hidráulica + Bomba |
| Edificio de oficinas / Corporativo | NFPA 72 · NFPA 13 | Alarma direccionable + Rociadores temperatura 57°C |
| Restaurante / Cocina industrial | NFPA 96 · NFPA 17A | Supresión química bajo campana + Interlock gas + Detectores calor |
| Centro de datos / Cuarto servidores | NFPA 75 · NFPA 2001 | Agente limpio FM-200/Novec + VESDA detección temprana |

## JSON-LD schemas

| Schema | Tipo | Contenido |
|--------|------|-----------|
| 1 | `ItemList` | 5 subsistemas con URL y descripción |
| 2 | `FAQPage` | 6 preguntas frecuentes |
| 3 | `BreadcrumbList` | Inicio > Productos > Sistemas Contra Incendio |
| 4 | `CollectionPage` | WebPage completa con publisher |

## Normas cubiertas

- **NFPA 72** — Alarma y detección (tableros FACP, detectores, notificación)
- **NFPA 13** — Rociadores automáticos (diseño, cálculo, instalación)
- **NFPA 14** — Sistemas standpipe (tuberías verticales y mangueras en edificios)
- **NFPA 20** — Bombas contra incendio (eléctrica + diésel + jockey)
- **NFPA 96** — Campanas de cocina industrial (supresión química + interlock gas)
- **NOM-002-STPS** — Centros de trabajo (sistema operable + mantenimiento documentado)

## Precios de referencia

- Alarma básica para oficinas 500 m²: desde **$45,000 MXN** instalado
- Rociadores nave industrial 1,000 m²: **$180,000–$350,000 MXN**
- Sistema completo edificio 10 pisos: **$500,000–$1,200,000 MXN**

## Sección de orquestador

```
Breadcrumb → HeroSistemas → CtaBar → CatalogoSistemas → GuiaSistemas → TrustIndex → NormasSistemas → FaqSistemas → CTAFinalIndex
```

## Diferenciadores de esta L2 vs otras

- **5 subsistemas en lugar de los habituales 4/8** → grid override 3-col con `.catidx-grid--sis`
- **Escenarios de guía más técnicos**: include NFPA 75/2001 (agente limpio) y NFPA 96 (cocinas)
- **FAQ panel**: orientado a diagnóstico + regularización (no solo venta nueva)
- **Precio ancla visible en hero**: "$45,000 MXN instalado" reduce fricción de cotización

## Checklist de calidad

- [x] Hero con badge + H1 + subtítulo con precio ancla + 2 párrafos SEO
- [x] Nav sticky con 5 pills de subsistema
- [x] 5 .ccard con badge norma, 5 subcats como links, CTA secundario
- [x] Grid override 3-col para 5 items (layout 3+2)
- [x] 4 escenarios .guia-card con imagen + badge inmueble + norma + specs
- [x] 6 normas en .norma-card 3-col (NFPA 72, 13, 14, 20, 96, NOM-002-STPS)
- [x] 7 FAQs con panel sticky orientado a diagnóstico
- [x] 4 JSON-LD schemas en el orquestador
- [x] Breadcrumb 3 niveles
- [x] waUrl() para todos los CTAs de WhatsApp
