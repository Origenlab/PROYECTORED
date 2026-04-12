# L2 — Primeros Auxilios (Aprobada)

## Identificación

| Campo | Valor |
|-------|-------|
| URL | `/primeros-auxilios/` |
| Título SEO | Equipo de Primeros Auxilios NOM-030-STPS en CDMX \| Proyecto Red |
| Description SEO | Venta de equipo de primeros auxilios para empresas en CDMX: botiquines NOM-030-STPS tipo A, B y C, desfibriladores DEA, camillas, collarines y material de curación. Resurtido periódico y capacitación DC-3. |
| OG Image | `/imagenes/og/primeros-auxilios-og.jpg` |
| Estado | ✅ Aprobada |
| Versión | v1 |

## Componentes

| Componente | Archivo | Descripción |
|-----------|---------|-------------|
| Hero | `HeroPrimerosAuxilios.astro` | Badge "NOM-030-STPS · 5 líneas · Resurtido · Capacitación DC-3". H1: "Equipo de / Primeros Auxilios". Scoped `.hero-pa` |
| Catálogo | `CatalogoPrimerosAuxilios.astro` | 5 productos en grid 3-col (layout 3+2). Nav sticky `.nav-cats-pa`. CTA strip |
| Guía | `GuiaPrimerosAuxilios.astro` | 4 escenarios: Oficina-pequeña / Mediana / Industrial-grande / Restaurante |
| Normas | `NormasPrimerosAuxilios.astro` | 6 normas: NOM-030-STPS, NOM-006, NOM-034, NOM-017, NOM-009, NOM-002-STPS. Grid 3-col |
| FAQ | `FaqPrimerosAuxilios.astro` | 7 FAQs. Panel sticky: "Cotizar equipo NOM-030-STPS" + "Resurtido urgente para auditoría" |

## Sección catálogo — 5 productos

| # | Producto | Badge/Norma | Imagen |
|---|---------|-------------|--------|
| 1 | Botiquines de Primeros Auxilios | NOM-030-STPS | `/imagenes/primeros-auxilios/botiquines-hero.jpg` |
| 2 | Desfibriladores Externos (DEA) | DEA · AED | `/imagenes/primeros-auxilios/botiquin.jpg` |
| 3 | Camillas de Emergencia | Rescate | `/imagenes/primeros-auxilios/camillas.jpg` |
| 4 | Inmovilizadores y Collarines | Trauma | `/imagenes/primeros-auxilios/collarin.jpg` |
| 5 | Material de Curación y Resurtido | Resurtido | `/imagenes/primeros-auxilios/camilla.jpg` |

> Nota: 5 productos con 5 imágenes únicas. Grid override `.catidx-grid--pa` a 3-col.

## Guía — 4 escenarios

| Escenario | Norma | Solución |
|-----------|-------|---------|
| Oficina / Empresa pequeña | NOM-030-STPS Tipo A | Botiquín tipo A + soporte mural + capacitación |
| Empresa mediana 26–100 | NOM-030-STPS Tipo B | Botiquín tipo B + DEA + gabinete + brigada DC-3 |
| Planta industrial +100 | NOM-030-STPS Tipo C | Tipo C + camillas + collarines por zona de riesgo |
| Restaurante / Cocina | NOM-030-STPS + Quemaduras | Botiquín especializado quemaduras + apósitos silicona |

## JSON-LD schemas

| Schema | Tipo | Contenido |
|--------|------|-----------|
| 1 | `ItemList` | 5 productos con URL y descripción |
| 2 | `FAQPage` | 6 preguntas frecuentes |
| 3 | `BreadcrumbList` | Inicio > Productos > Primeros Auxilios |
| 4 | `CollectionPage` | WebPage completa con publisher |

## Normas cubiertas

- **NOM-030-STPS** — botiquines tipo A/B/C, brigadas, capacitación DC-3
- **NOM-006-STPS** — manejo de materiales (botiquín en zonas de carga)
- **NOM-034-STPS** — condiciones ergonómicas (collarines, inmovilizadores)
- **NOM-017-STPS** — EPP brigadistas (guantes nitrilo, mascarillas RCP)
- **NOM-009-STPS** — trabajo en altura (camillas, collarines para caídas)
- **NOM-002-STPS** — prevención incendios (brigadas coordinadas)

## Precios de referencia

- Empresa hasta 25 personas, botiquín tipo A: desde **$1,800 MXN**
- Empresa 26–100 personas, tipo B + DEA + DC-3: desde **$12,000 MXN**
- Empresa +100 personas: cotización a medida

## Sección de orquestador

```
Breadcrumb → HeroPrimerosAuxilios → CtaBar → CatalogoPrimerosAuxilios → GuiaPrimerosAuxilios → TrustIndex → NormasPrimerosAuxilios → FaqPrimerosAuxilios → CTAFinalIndex
```

## Diferenciadores de esta L2 vs otras

- **Dos CTA de urgencia en FAQ panel**: "Cotizar" Y "Resurtido urgente para auditoría" — reconoce el escenario de auditoría STPS próxima
- **Escenario cocina industrial** en guía — requiere botiquín diferenciado para quemaduras (no estándar)
- **Norma DEA + estadística de supervivencia** en FAQ — argumento emocional + técnico para venta del DEA
- **Multas STPS en FAQ** — convierte el costo del equipo en decisión financiera favorable

## Checklist de calidad

- [x] Hero con badge + H1 + subtítulo + 2 párrafos SEO
- [x] Nav sticky con 5 pills de producto
- [x] 5 .ccard con badge norma, 5 subcats como links, CTA secundario
- [x] Grid override 3-col (`.catidx-grid--pa`) para 5 items
- [x] 4 escenarios .guia-card con imagen + badge empresa + norma + specs
- [x] 6 normas en .norma-card 3-col
- [x] 7 FAQs con panel sticky orientado a urgencia y resurtido
- [x] 4 JSON-LD schemas en el orquestador
- [x] Breadcrumb 3 niveles
- [x] waUrl() para todos los CTAs de WhatsApp
