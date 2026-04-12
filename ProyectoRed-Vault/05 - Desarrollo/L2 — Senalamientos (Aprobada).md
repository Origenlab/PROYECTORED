# L2 — Señalamientos de Emergencia (Aprobada)

> Documentación oficial de la página `/senalamientos/` de proyectored.com.mx.  
> Estado: ✅ **Aprobada** — Layout, diseño, composición, SEO y marketing confirmados.  
> Fecha de aprobación: 2026-04-11.

---

## Identificación

| Campo           | Valor                                                          |
|-----------------|----------------------------------------------------------------|
| **Ruta**        | `/senalamientos/`                                              |
| **Archivo**     | `src/pages/senalamientos/index.astro`                          |
| **Nivel**       | L2 (categoría de producto)                                     |
| **Líneas**      | ~209 (orquestador limpio)                                      |
| **Breadcrumb**  | Inicio → Productos → Señalamientos de Emergencia               |
| **Certificación clave** | NOM-003-SEGOB · NOM-026-STPS                         |
| **Precio referencia** | Desde $35 MXN (PVC estándar); $65 MXN (fotoluminiscente) |

---

## SEO

| Campo         | Valor                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------|
| **title**     | Señalamientos de Emergencia NOM en CDMX — Fotoluminiscentes y Certificados \| Proyecto Red               |
| **description** | Venta de señalamientos fotoluminiscentes certificados NOM-003-SEGOB y NOM-026-STPS: evacuación, prohibición, obligación y advertencia. Levantamiento gratuito con plano de señalización. Desde $35 MXN. Entrega directa en CDMX. |
| **canonical** | `https://proyectored.com.mx/senalamientos/`                                                                |
| **ogImage**   | `/imagenes/og/senalamientos-og.jpg`                                                                        |

---

## Secuencia de secciones

| # | Componente                | Tipo         | Notas                                                           |
|---|---------------------------|--------------|-----------------------------------------------------------------|
| 1 | `Breadcrumb`              | UI genérico  | 3 niveles: Inicio → Productos → Señalamientos de Emergencia     |
| 2 | `HeroSenalamientos`       | Propia       | Badge "6 categorías · NOM-003-SEGOB · Fotoluminiscentes"        |
| 3 | `CtaBar`                  | Reutilizable | 4 accesos rápidos + WhatsApp                                    |
| 4 | `CatalogoSenalamientos`   | Propia       | 6 categorías en grid 3-col, nav sticky, CTA strip               |
| 5 | `GuiaSenalamientos`       | Propia       | Guía por tipo de inmueble: 4 escenarios con norma + requisitos  |
| 6 | `TrustIndex`              | Reutilizable | Testimonios y señales de confianza                              |
| 7 | `NormasSenalamientos`     | Propia       | 6 normas: NOM-003, NOM-026, NOM-002, NOM-017, NFPA 101, Fotolum.|
| 8 | `FaqSenalamientos`        | Propia       | 8 preguntas frecuentes específicas de señalamientos             |
| 9 | `CTAFinalIndex`           | Reutilizable | Barra roja CTA WhatsApp + link catálogo                         |

**Secciones propias (5):** HeroSenalamientos, CatalogoSenalamientos, GuiaSenalamientos, NormasSenalamientos, FaqSenalamientos  
**Secciones reutilizables (4):** Breadcrumb, CtaBar, TrustIndex, CTAFinalIndex

> **Diferencia vs. extintores:** Señalamientos no usa `ServiciosIndex` (los servicios de levantamiento/instalación se integran en los CTAs de cada sección). El catálogo presenta 6 categorías en un grid de 3 columnas (no 4) usando el modificador `.catidx-grid--3col`.

---

## Catálogo — 6 categorías de señalamientos

| # | Nombre                         | Badge     | Norma principal  | Ruta L3                               |
|---|--------------------------------|-----------|------------------|---------------------------------------|
| 1 | Evacuación y Salvamento        | Obligatorio | NOM-003-SEGOB   | `/senalamientos/evacuacion/`          |
| 2 | Señales de Prohibición         | NOM-003   | NOM-003-SEGOB    | `/senalamientos/prohibicion/`         |
| 3 | Señales de Advertencia         | NOM-026   | NOM-026-STPS     | `/senalamientos/advertencia/`         |
| 4 | Señales de Obligación EPP      | NOM-017   | NOM-017-STPS     | `/senalamientos/obligacion/`          |
| 5 | Fotoluminiscentes              | 8h+ sin luz | NOM-003-SEGOB  | `/senalamientos/fotoluminiscentes/`   |
| 6 | Señalización Personalizada     | NOM a medida | NOM (variable) | `/senalamientos/personalizados/`      |

---

## Guía — 4 escenarios por tipo de inmueble

| # | Tipo de inmueble              | Normas aplicables               | Señales obligatorias clave                          |
|---|-------------------------------|---------------------------------|-----------------------------------------------------|
| 1 | Oficina / negocio comercial   | NOM-003-SEGOB                   | Evacuación, salidas, punto reunión, extintores, no fumar |
| 2 | Restaurante / cocina industrial | NOM-003-SEGOB · NOM-002-STPS  | + zona gas LP, extintor Tipo K bajo campana          |
| 3 | Nave industrial / almacén     | NOM-026-STPS · NOM-017 · NOM-003| EPP por área, advertencia eléctrica/química         |
| 4 | Edificio corporativo multi-piso | NOM-003-SEGOB · NFPA 101      | Fotoluminiscentes en cada piso, corredores, escaleras|

---

## JSON-LD schemas

| Schema            | Tipo              | Contenido                                                         |
|-------------------|-------------------|-------------------------------------------------------------------|
| `ItemList`        | Catálogo          | 6 `ListItem` con nombre, descripción y URL por categoría          |
| `FAQPage`         | Preguntas         | 6 Q&A (obligatorias PC, fotoluminiscentes, cantidad, precio, instalación, rechazo) |
| `BreadcrumbList`  | Navegación        | 3 niveles: Inicio → Productos → Señalamientos de Emergencia       |
| `CollectionPage`  | WebPage           | Metadatos completos de la página con publisher                    |

---

## Normas cubiertas

| Norma           | Tipo       | Relevancia para señalamientos                                       |
|-----------------|------------|---------------------------------------------------------------------|
| NOM-003-SEGOB   | Protección Civil | Señales y avisos para protección civil — obligatoria para dictamen |
| NOM-026-STPS    | Laboral    | Colores y señales de seguridad en centros de trabajo                |
| NOM-002-STPS    | Prevención | Exige señalamiento de ubicación de extintores y rutas de evacuación |
| NOM-017-STPS    | EPP        | Señales de obligación de EPP por zona de riesgo                    |
| NFPA 101        | Internacional | Código de seguridad humana — señalización de medios de egreso    |
| Fotoluminiscencia | Material | 8+ horas de visibilidad en oscuridad sin electricidad ni baterías  |

---

## Detalles técnicos de implementación

**CatalogoSenalamientos.astro (v3)**
- 6 categorías en una sola sección `.cat-section--white`
- Grid: `.catidx-grid catidx-grid--3col` → 3 columnas desktop, 2 tablet, 1 móvil
- Modificador `.catidx-grid--3col` definido en scoped CSS (no sobreescribe global)
- Cada `.ccard` tiene `id={s.id}` para anclas del nav sticky
- CTA strip al final con levantamiento gratuito WA

**GuiaSenalamientos.astro**
- 4 cards `.guia-card` (CSS global en pages.css)
- Grid scoped: `.guia-sen-grid` → 2 columnas desktop, 1 móvil
- Cada card: header con imagen + badge de norma + número / body con tipo, necesitas, por qué, CTA
- CTA bar al final: `guia-cta-bar` (CSS global en pages.css)

**NormasSenalamientos.astro**
- 6 norma-cards (CSS global `.norma-card`, `.norma-tipo`, `.normas-nota`)
- Grid scoped: `.normas-sen-grid` → 3 columnas, 2 tablet, 1 móvil
- Nota explicativa al final con `.normas-nota`

**FaqSenalamientos.astro**
- 8 FAQs con accordion `<details>/<summary>` (CSS global `.faq-item`)
- Layout: acordeón (1fr) + panel sticky cotización (340px)
- 2 botones WA: levantamiento gratuito + "ya sé qué necesito"

---

## Checklist

- [x] Orquestador limpio (< 210 líneas, cero HTML inline)
- [x] Hero con dark gradient, badge, H1 + h1-accent, 2 párrafos SEO
- [x] Catálogo con `.ccard` + `.catidx-grid--3col` + nav sticky
- [x] Guía por tipo de inmueble con `.guia-card` (4 escenarios)
- [x] 6 norma-cards con icono SVG + descripción + aplicación
- [x] FAQ accordion con 8 preguntas + panel sticky cotización
- [x] 4 JSON-LD schemas (ItemList, FAQPage, BreadcrumbList, CollectionPage)
- [x] Breadcrumb 3 niveles: Inicio → Productos → Señalamientos de Emergencia
- [x] Usa `Img.astro` para todas las imágenes
- [x] Usa `waUrl()` de `site.ts` para WhatsApp links
- [x] 0 errores propios en `astro check`
- [x] CSS scoped para clases únicas, global para `.ccard/.guia-card/.norma-card/.faq-item`

---

## Véase también

- [[L2 — Template Autorizado]] — Especificación del patrón L2
- [[L2 — Extintores (Aprobada)]] — Página hermana más compleja (referencia)
- `src/components/sections/HeroSenalamientos.astro`
- `src/components/sections/CatalogoSenalamientos.astro`
- `src/components/sections/GuiaSenalamientos.astro`
- `src/components/sections/NormasSenalamientos.astro`
- `src/components/sections/FaqSenalamientos.astro`
