# L2 — Template Autorizado

> Especificación oficial del layout de nivel 2 del sitio proyectored.com.mx.  
> Página de referencia: `/productos/` — cualquier otro L2 debe replicar esta estructura.  
> Última actualización: 2026-04-11.

---

## Definición

Un **L2** es una página de catálogo general que agrupa todos los ítems de un dominio temático (productos, servicios, etc.) con navegación sticky, secciones alternas y secciones genéricas reutilizables que refuerzan conversión y SEO.

La diferencia con un L1 (homepage) es que el L2 se enfoca en un solo dominio; la diferencia con un L3 (categoría individual) es que el L2 presenta **todas** las categorías/ítems del dominio, no una sola.

---

## Arquitectura del archivo

Un L2 sigue el patrón de **orquestador limpio**: el archivo `.astro` de la página no contiene HTML ni lógica de presentación — solo importa componentes y define datos estructurados JSON-LD.

```
src/pages/{slug}.astro          ← Orquestador (< 170 líneas)
  ├── imports: Base layout + componentes de sección
  ├── frontmatter: constantes SEO + JSON-LD schemas
  └── template: secuencia ordenada de componentes
```

### Regla de oro

> **Cero HTML inline en el orquestador.** Si una sección necesita markup, se crea un componente dedicado en `src/components/sections/`.

---

## Secuencia de secciones

Toda página L2 sigue esta secuencia exacta de 9 bloques:

| #  | Componente              | Tipo          | Encabezado           | Fondo                | Notas                                   |
|----|-------------------------|---------------|----------------------|----------------------|-----------------------------------------|
| 1  | `Breadcrumb`            | UI genérico   | —                    | Transparente         | Siempre: Inicio → {Nombre del L2}       |
| 2  | `Hero{Dominio}`         | Sección propia | Custom (H1 + badge)  | Dark gradient        | Componente dedicado por L2              |
| 3  | `CtaBar`                | UI genérico   | Ninguno              | Blanco               | 4 cards de acceso rápido + WA           |
| 4  | `Catalogo{Dominio}`     | Sección propia | SectionHeaderDuo ×N  | Alternado blanco/gris | Nav sticky + grid de cards              |
| 5  | `SeleccionIndex`        | Reutilizable  | SectionHeaderDuo     | Blanco               | Tabla de selección por nivel de riesgo  |
| 6  | `NormasIndex`           | Reutilizable  | SectionHeaderDuo     | Blanco               | Tabla de normas aplicables              |
| 7  | `ProcesoIndex`          | Reutilizable  | SectionHeaderDuo (dark) | Dark              | 5 pasos numerados de atención           |
| 8  | `FaqCotizacionIndex`    | Reutilizable  | SectionHeaderDuo     | Blanco               | FAQ accordion + formulario sticky WA    |
| 9  | `CTAFinalIndex`         | Reutilizable  | Custom               | Rojo primario        | CTA horizontal con 2 botones            |

### Secciones propias vs. reutilizables

- **Propias (2 y 4):** Únicas para cada L2. Se crean como componentes nuevos en `src/components/sections/`.
- **Reutilizables (3, 5, 6, 7, 8, 9):** Compartidas entre L1 y L2. Se importan sin modificar.

---

## Bloque 1 — Breadcrumb

**Componente:** `src/components/ui/Breadcrumb.astro`

```astro
<div class="breadcrumb-bar">
  <div class="container">
    <Breadcrumb items={[
      { label: 'Inicio', href: '/' },
      { label: '{Nombre}' }
    ]} />
  </div>
</div>
```

El último ítem no lleva `href` (es la página actual). Genera microdata `schema.org/BreadcrumbList` automáticamente.

---

## Bloque 2 — Hero

**Componente:** `src/components/sections/Hero{Dominio}.astro` (uno por cada L2)

### Patrón visual obligatorio

| Propiedad          | Valor                                                           |
|--------------------|-----------------------------------------------------------------|
| **Fondo**          | Gradiente oscuro + glow rojo radial + grid sutil `::before`     |
| **Layout**         | Grid 2 columnas (`1fr 1fr`, gap `4rem`)                         |
| **Columna izq.**   | Badge animado (pill + dot pulse) → H1 (clamp 2.5–3.5rem, 800) → Subtítulo |
| **Columna der.**   | 2 párrafos descriptivos SEO (color `rgba(255,255,255,.55)`)     |
| **Padding**        | `5rem` top/bottom desktop, `3rem` tablet/móvil                   |
| **Responsive**     | 1 columna en `≤ 1024px`                                         |

### Estructura del H1

```html
<h1>
  {Línea descriptiva}<br>
  {Complemento} <span class="h1-accent">{Palabra clave}</span>
</h1>
```

El `h1-accent` aplica `color: var(--c-primary)` para resaltar la keyword principal.

### Nota sobre CTAs en el Hero

El Hero de productos **no incluye** botones CTA dentro del hero (los delega al CtaBar inmediato). Si un L2 futuro necesita CTAs en el hero, deben seguir el patrón: `btn-primary` (WhatsApp) + `btn-secondary` (ancla a catálogo).

### CSS

El hero usa `<style>` scoped dentro del componente (no global), ya que cada hero tiene un namespace propio (`.hero-productos`, `.hero-servicios`, etc.).

---

## Bloque 3 — CtaBar

**Componente:** `src/components/CtaBar.astro` (compartido, sin props)

Barra con 4 tarjetas de acceso rápido + 1 tarjeta WhatsApp con acento. Los datos vienen de `QUICK_LINKS` en `src/config/site.ts`. No requiere personalización por L2.

---

## Bloque 4 — Catálogo

**Componente:** `src/components/sections/Catalogo{Dominio}.astro` (uno por cada L2)

Este es el bloque más complejo y el que define la identidad del L2. Contiene:

### 4.1 — Navegación sticky

Barra fija que lista todas las categorías/servicios del catálogo como pills clicables que anclan a cada sección.

```html
<section class="nav-cats" aria-label="Navegación por categoría">
  <div class="container">
    <div class="nav-cats__inner">
      <span class="nav-cats__label">Ir a categoría:</span>
      <div class="nav-cats__links">
        {items.map(c => <a href={`#${c.id}`} class="nav-cat-pill">{c.label}</a>)}
      </div>
    </div>
  </div>
</section>
```

**CSS:** Definido en `src/styles/pages.css` (global).

### 4.2 — Secciones de categoría (×N)

Cada categoría/servicio se renderiza como un bloque `cat-section` con fondos alternados:

```
índice par  → cat-section--white
índice impar → cat-section--gray
```

Dentro de cada sección:

1. **SectionHeaderDuo** — Encabezado de 2 columnas con eyebrow, título, descripción y cuerpo.
2. **Grid de cards** — `.catidx-grid` con N cards `.ccard`.

### 4.3 — SectionHeaderDuo (complemento título)

**Componente:** `src/components/ui/SectionHeaderDuo.astro`  
**CSS:** `.titulo-duo` en `src/styles/components.css` (global)

| Prop         | Tipo      | Requerido | Uso                              |
|--------------|-----------|-----------|----------------------------------|
| `eyebrow`    | `string`  | No        | Badge superior (ej. "NOM-154")   |
| `titleLine1` | `string`  | Sí        | Primera línea del título         |
| `titleLine2` | `string`  | No        | Segunda línea del título         |
| `desc`       | `string`  | No        | Descripción bajo el título       |
| `bodyPara1`  | `string`  | Sí        | Párrafo derecho principal        |
| `bodyPara2`  | `string`  | No        | Párrafo derecho secundario       |
| `dark`       | `boolean` | No        | Variante para fondo oscuro       |

### 4.4 — Patrón de cards (.ccard)

**CSS:** `src/styles/pages.css` (global)

Estructura HTML canónica:

```html
<article class="ccard">
  <div class="ccard__header">
    <Img src="..." alt="..." />
    <div class="ccard__header-overlay"></div>
    <span class="ccard__badge">Badge</span>
  </div>
  <div class="ccard__content">
    <h3 class="ccard__title">Nombre</h3>
    <p class="ccard__desc">Descripción</p>
    <ul class="ccard__list">
      <li><a href="..." class="ccard__link-btn">Subcategoría <svg>→</svg></a></li>
    </ul>
    <a href="..." class="ccard__cta">Ver detalles <svg>→</svg></a>
  </div>
</article>
```

**Grid:** `.catidx-grid` — 4 columnas desktop, 3 tablet, 2 móvil, 1 móvil chico.

### 4.5 — Imágenes (Img.astro)

**Componente:** `src/components/ui/Img.astro`

Wrapper que reescribe rutas a ExactDN CDN (`ewvydcs5uyw.exactdn.com`) con:
- Conversión automática WebP/AVIF
- Responsive srcset (320, 480, 640, 768, 1024, 1280px)
- `fetchpriority="high"` para above-the-fold, `loading="lazy"` para el resto

---

## Bloques 5–9 — Secciones reutilizables

Estos componentes se importan tal cual desde `src/components/sections/`:

| Bloque | Componente               | Archivo                                        | Descripción                                         |
|--------|--------------------------|------------------------------------------------|-----------------------------------------------------|
| 5      | `SeleccionIndex`         | `sections/SeleccionIndex.astro`                | Tabla de 3 niveles de riesgo con recomendaciones     |
| 6      | `NormasIndex`            | `sections/NormasIndex.astro`                   | Tabla de 8 normas (NOM + NFPA) con alcance           |
| 7      | `ProcesoIndex`           | `sections/ProcesoIndex.astro`                  | 5 pasos numerados sobre fondo dark                   |
| 8      | `FaqCotizacionIndex`     | `sections/FaqCotizacionIndex.astro`            | FAQ accordion (8 preguntas) + form sticky WhatsApp   |
| 9      | `CTAFinalIndex`          | `sections/CTAFinalIndex.astro`                 | Barra roja con CTA WhatsApp + link catálogo          |

**Regla:** Nunca se modifican para adaptarlos a un L2 específico. Si un L2 necesita variación en FAQ o CTA, se crea un componente nuevo (ej. `FaqCotizacion.astro` con props).

---

## JSON-LD obligatorio

Todo L2 debe incluir 3 schemas al final del `<Base>`:

| Schema             | Tipo                | Contenido                                          |
|--------------------|---------------------|----------------------------------------------------|
| `BreadcrumbList`   | Navegación          | Array de `ListItem` (Inicio → {L2})                |
| `OfferCatalog`     | Catálogo            | Nombre, descripción, URL, `itemListElement[]`       |
| `FAQPage`          | Preguntas frecuentes | 6-8 Q&A relevantes al dominio                      |

Los schemas se definen como objetos JS en el frontmatter y se inyectan con:

```astro
<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

---

## CSS — Reglas para L2

| Tipo de estilo                       | Ubicación                      | Scope   |
|--------------------------------------|--------------------------------|---------|
| SectionHeaderDuo (`.titulo-duo`)     | `src/styles/components.css`    | Global  |
| Cards (`.ccard`, `.catidx-grid`)     | `src/styles/pages.css`         | Global  |
| Nav sticky (`.nav-cats`)             | `<style>` dentro de Catalogo*  | Scoped  |
| Secciones (`.cat-section`)           | `src/styles/pages.css`         | Global  |
| Hero del L2                          | `<style>` dentro del componente | Scoped  |
| Estilos únicos de sección propia     | `<style>` dentro del componente | Scoped  |

**Regla de oro:** Si un estilo se repite en más de un componente, debe ir en CSS global (`components.css` o `pages.css`), nunca duplicado en scoped styles.

---

## Patrón de alternancia de fondos

Las secciones dentro del catálogo alternan fondos para crear ritmo visual:

| Clase               | Color                         | Uso                           |
|---------------------|-------------------------------|-------------------------------|
| `cat-section--white`| `var(--c-white)`              | Secciones con índice par      |
| `cat-section--gray` | `var(--c-surface, #F4F4F5)`   | Secciones con índice impar    |
| Fondo dark           | `var(--c-ink, #111111)`       | ProcesoIndex y heroes         |
| Fondo rojo           | `var(--c-primary)`            | CTAFinalIndex                 |

---

## Checklist de implementación para un nuevo L2

Al crear un nuevo L2, verificar que cumple con todos estos puntos:

- [ ] El archivo de página es un orquestador limpio (< 170 líneas, cero HTML inline)
- [ ] Tiene `Hero{Dominio}` como componente dedicado en `sections/`
- [ ] Tiene `Catalogo{Dominio}` como componente dedicado en `sections/`
- [ ] El Hero sigue el patrón visual: dark gradient, 2 cols, badge + H1 + subtítulo / párrafos SEO
- [ ] El Catálogo usa `SectionHeaderDuo` para cada categoría/servicio
- [ ] El Catálogo usa `.ccard` + `.catidx-grid` para las cards
- [ ] Incluye navegación sticky con pills de categoría
- [ ] Las secciones del catálogo alternan `--white` / `--gray`
- [ ] Importa las 5 secciones reutilizables (Seleccion, Normas, Proceso, FaqCotizacion, CTAFinal)
- [ ] Define 3 JSON-LD schemas (BreadcrumbList, OfferCatalog, FAQPage)
- [ ] Usa `Img.astro` para todas las imágenes (CDN + responsive)
- [ ] Usa `waUrl()` de `site.ts` para enlaces de WhatsApp
- [ ] SEO: `<Base>` con title, description, canonical, ogImage
- [ ] No duplica CSS que ya existe en global

---

## Referencia de implementación: `/productos/`

### Archivo principal

`src/pages/productos.astro` — 160 líneas

### Imports

```astro
import Base              from '../layouts/Base.astro'
import Breadcrumb        from '../components/ui/Breadcrumb.astro'
import CtaBar            from '../components/CtaBar.astro'
import HeroProductos     from '../components/sections/HeroProductos.astro'
import CatalogoProductos from '../components/sections/CatalogoProductos.astro'
import SeleccionIndex    from '../components/sections/SeleccionIndex.astro'
import NormasIndex       from '../components/sections/NormasIndex.astro'
import ProcesoIndex      from '../components/sections/ProcesoIndex.astro'
import FaqCotizacionIndex from '../components/sections/FaqCotizacionIndex.astro'
import CTAFinalIndex     from '../components/sections/CTAFinalIndex.astro'
import { SITE, CONTACT } from '../config/site'
```

### Template

```astro
<Base title="..." description="..." canonical={pageUrl} ogImage={ogImage}>
  <Breadcrumb ... />
  <HeroProductos />
  <CtaBar />
  <CatalogoProductos />
  <SeleccionIndex />
  <NormasIndex />
  <ProcesoIndex />
  <FaqCotizacionIndex />
  <CTAFinalIndex />
  <script type="application/ld+json" ... />  <!-- ×3 -->
</Base>
```

### Datos del catálogo

8 categorías, 46 productos, 188 subcategorías. Datos inline dentro de `CatalogoProductos.astro`.

---

## Páginas L2 del sitio

| Ruta                  | Estado       | Secciones propias                                          | Homologado          |
|-----------------------|-------------|------------------------------------------------------------|---------------------|
| `/productos/`         | ✅ Completo  | HeroProductos, CatalogoProductos                           | Referencia          |
| `/servicios/`         | ✅ Completo  | HeroServicios, CatalogoServicios                           | Sí (2026-04-11)     |
| `/empresas/`          | ✅ Completo  | HeroEmpresas, CatalogoEmpresas, FaqEmpresas                | Sí (2026-04-11)     |
| `/extintores/`        | ✅ Aprobada  | HeroExtintores, CatalogoExtintores, GuiaExtintores, NormasExtintores, FaqExtintores | Sí (2026-04-11) |
| `/equipo-bomberos/`   | ✅ Aprobada  | HeroBomberos, CatalogoBomberos, GuiaBomberos, NormasBomberos, FaqBomberos | Sí (2026-04-11) |
| `/senalamientos/`     | ✅ Aprobada  | HeroSenalamientos, CatalogoSenalamientos, GuiaSenalamientos, NormasSenalamientos, FaqSenalamientos | Sí (2026-04-11) |
| `/gabinetes/`         | ✅ Aprobada  | HeroGabinetes, CatalogoGabinetes, GuiaGabinetes, NormasGabinetes, FaqGabinetes | Sí (2026-04-11) |
| `/mangueras/`         | ✅ Aprobada  | HeroMangueras, CatalogoMangueras, GuiaMangueras, NormasMangueras, FaqMangueras | Sí (2026-04-11) |
| `/sistemas/`          | ✅ Aprobada  | HeroSistemas, CatalogoSistemas, GuiaSistemas, NormasSistemas, FaqSistemas | Sí (2026-04-11) |
| `/primeros-auxilios/` | ✅ Aprobada  | HeroPrimerosAuxilios, CatalogoPrimerosAuxilios, GuiaPrimerosAuxilios, NormasPrimerosAuxilios, FaqPrimerosAuxilios | Sí (2026-04-11) |
| `/equipo-seguridad/`  | ✅ Aprobada  | HeroEquipoSeguridad, CatalogoEquipoSeguridad, GuiaEquipoSeguridad, NormasEquipoSeguridad, FaqEquipoSeguridad | Sí (2026-04-11) |

### Notas de implementación por página

**`/servicios/`** — 160 líneas. Homologado desde monolítico (419 líneas). Usa FaqCotizacionIndex compartido (mismas FAQs que productos).

**`/empresas/`** — 159 líneas. Homologado desde monolítico (334 líneas). Diferencias vs. template base:
- Usa `FaqEmpresas` (wrapper con FAQs de cobertura/entrega) en vez de `FaqCotizacionIndex`
- CatalogoEmpresas maneja 6 zonas geográficas en vez de 8 categorías de producto
- Cada zona tiene detalles de municipios/alcaldías como cards .ccard sin subcats

**`/extintores/`** — ~284 líneas. Primera L2 de categoría de producto aprobada. Diferencias vs. template base:
- 10 secciones en lugar de 9 (agrega `ServiciosIndex` entre TrustIndex y NormasExtintores)
- Secciones genéricas `GuiaExtintores`, `NormasExtintores`, `FaqExtintores` reemplazan a `SeleccionIndex`, `NormasIndex`, `FaqCotizacionIndex`
- Breadcrumb de 3 niveles: Inicio → Productos → Extintores
- 4 schemas JSON-LD (agrega `CollectionPage` al set base)
- Ver detalle completo: [[L2 — Extintores (Aprobada)]]

**`/primeros-auxilios/`** — ~230 líneas. Séptima L2 aprobada. Diferencias vs. sistemas:
- 5 productos con grid override 3-col (`.catidx-grid--pa`) para layout 3+2
- Escenario de cocina industrial en guía — requiere botiquín especializado para quemaduras
- FAQ con argumentos de multas STPS y estadística de supervivencia DEA — máxima carga persuasiva
- Panel FAQ con dos CTA: cotización nueva + urgencia de auditoría próxima
- Ver detalle completo: [[L2 — Primeros Auxilios (Aprobada)]]

**`/equipo-seguridad/`** — ~230 líneas. Octava y última L2 aprobada. Diferencias vs. primeros-auxilios:
- 8 productos en grid 4-col estándar (máximo de las L2, misma cantidad que mangueras)
- Mezcla única de normas NOM + estándares internacionales (ANSI, EN, NIOSH, NFPA 70E)
- Escenario mantenimiento eléctrico con EPP altamente específico (única L2 con NFPA 70E)
- FAQ con argumentos legales de responsabilidad civil — orientado a decisores B2B
- CTA panel orientado a programa de EPP completo, no solo venta de producto
- Ver detalle completo: [[L2 — Equipo Seguridad (Aprobada)]]

**`/mangueras/`** — ~215 líneas. Quinta L2 de categoría de producto aprobada. Diferencias vs. gabinetes:
- 8 productos en 2 filas de 4-col (máximo catálogo de las L2 hasta ahora)
- 6 normas (NFPA 1961, 1962, 1964, 14, 24, NOM-002-STPS) — normas muy específicas de herrajes hidráulicos
- FAQ orientado a compatibilidad de sistemas (NST vs Storz, adaptadores, mezcla de marcas)
- Panel FAQ: "Cotizar sistema completo" + "Componentes de reemplazo" (dos flujos distintos)
- Ver detalle completo: [[L2 — Mangueras (Aprobada)]]

**`/sistemas/`** — ~175 líneas. Sexta L2 aprobada. Más técnica de todas las L2 de producto. Diferencias vs. mangueras:
- 5 subsistemas en grid 3-col override (`.catidx-grid--sis`) — patrón 3+2
- Guía por tipo de inmueble incluye escenarios muy técnicos (NFPA 96 cocinas, NFPA 2001 agente limpio)
- Precio ancla en hero: "desde $45,000 MXN instalado" — mayor ticket promedio
- Panel FAQ orientado a diagnóstico + regularización (no solo venta nueva)
- Ver detalle completo: [[L2 — Sistemas (Aprobada)]]

**`/gabinetes/`** — ~195 líneas. Cuarta L2 de categoría de producto aprobada. Diferencias vs. senalamientos:
- 4 tipos de gabinetes en grid 4-col estándar (no requiere modificador `.catidx-grid--3col`)
- Guía por escenario de inmueble con 4 opciones (extintor expuesto, lobby, edificio, industrial)
- 4 normas (2 NOM + 2 NFPA) en grid 2-col (vs. 6 en senalamientos)
- CTA foto-por-WA como diferenciador clave en catálogo y FAQ
- Ver detalle completo: [[L2 — Gabinetes (Aprobada)]]

**`/senalamientos/`** — ~209 líneas. Tercera L2 de categoría de producto aprobada. Diferencias vs. extintores:
- No usa `ServiciosIndex` (levantamiento/instalación se integran en CTAs de cada sección)
- Catálogo de 6 categorías en grid 3-col (`.catidx-grid--3col`) en una sola sección
- Guía por tipo de inmueble (no por riesgo/clase de fuego)
- 4 normas NOM + NFPA 101 + Material fotoluminiscente
- Ver detalle completo: [[L2 — Senalamientos (Aprobada)]]

**`/equipo-bomberos/`** — ~239 líneas. Segunda L2 aprobada. Estructura homologada con `/extintores/`. Diferencias:
- No incluye `ServiciosIndex` (servicios de mantenimiento NFPA son distintos)
- Breadcrumb de 2 niveles (acceso directo desde menú principal, sin pasar por /productos/)
- 5 categorías en lugar de 10 (equipo especializado de mayor valor unitario)
- Normas NFPA en lugar de NOM (cliente es bombero profesional/brigada industrial)
- Ver detalle completo: [[L2 — Equipo Bomberos (Aprobada)]]

---

## Véase también

- [[L2 — Auditoría Servicios]] — Análisis de brechas y plan de homologación
- `docs/LAYOUT-SYSTEM.md` — Sistema completo de layouts L1–L5
- `LAYOUT-PRODUCTO.md` — Especificación de L4 (producto individual)
