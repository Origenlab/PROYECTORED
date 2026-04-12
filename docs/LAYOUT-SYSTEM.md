# Sistema de Layouts — Proyecto Red

> Documento de referencia para la arquitectura de layouts del sitio proyectored.com.mx.
> Última actualización: 2026-04-11. Revisado L4 completo.
>
> Documentación detallada del template L2: `ProyectoRed-Vault/05 - Desarrollo/L2 — Template Autorizado.md`  
> Auditoría de homologación de servicios: `ProyectoRed-Vault/05 - Desarrollo/L2 — Auditoría Servicios.md`

---

## Jerarquía de niveles

| Nivel | Ruta ejemplo | Propósito | Secciones propias | Secciones genéricas reutilizadas |
|-------|-------------|-----------|-------------------|----------------------------------|
| **L1** | `/` | Página principal. Presenta la empresa, todas las categorías y servicios. | 12 secciones | Ninguna (es el origen) |
| **L2** | `/productos/` | Catálogo general. Agrupa las 8 categorías con navegación sticky. | 2 secciones (HeroProductos, CatalogoProductos) | SeleccionIndex, NormasIndex, ProcesoIndex, FaqCotizacionIndex, CTAFinalIndex |
| **L2** | `/servicios/` | Catálogo de servicios. Agrupa los 8 servicios profesionales. | 2 secciones (HeroServicios, CatalogoServicios) | SeleccionIndex, NormasIndex, ProcesoIndex, FaqCotizacionIndex, CTAFinalIndex |
| **L2** | `/empresas/` | Cobertura geográfica. Agrupa las 6 zonas de entrega. | 3 secciones (HeroEmpresas, CatalogoEmpresas, FaqEmpresas) | SeleccionIndex, NormasIndex, ProcesoIndex, CTAFinalIndex |
| **L3** | `/extintores/` | Categoría individual. Detalla los productos de una sola línea. | 5 secciones (HeroExtintores, CatalogoExtintores, GuiaExtintores, NormasExtintores, FaqExtintores) | TrustIndex, CTAFinalIndex |
| **L3** | `/equipo-bomberos/` | Categoría individual. Equipo profesional NFPA. | 5 secciones (HeroBomberos, CatalogoBomberos, GuiaBomberos, NormasBomberos, FaqBomberos) | TrustIndex, CTAFinalIndex |
| **L4** | `/extintores/polvo-seco/` | Producto individual. Template dinámico desde `[producto].astro`. | 7 secciones en slot (variantes, características, cuándo usar, servicios, TrustIndex, Normas, otros) | FaqCotizacionIndex, CTAFinal (via CategoryLayout) |

---

## Componentes de encabezado

### SectionHeaderDuo (complemento titulo oficial)

Componente de 2 columnas: columna izquierda con eyebrow + titulo + desc, columna derecha con 1-2 parrafos de cuerpo.

**Archivo:** `src/components/ui/SectionHeaderDuo.astro`

**Props:**

| Prop | Tipo | Requerido | Descripcion |
|------|------|-----------|-------------|
| `eyebrow` | `string` | No | Badge superior (ej. "NOM-154-SCFI") |
| `titleLine1` | `string` | Si | Primera linea del titulo |
| `titleLine2` | `string` | No | Segunda linea del titulo |
| `desc` | `string` | No | Descripcion bajo el titulo |
| `bodyPara1` | `string` | Si | Primer parrafo en la columna derecha |
| `bodyPara2` | `string` | No | Segundo parrafo en la columna derecha |
| `dark` | `boolean` | No | Variante oscura (fondo dark) |

**CSS:** `.titulo-duo` en `src/styles/components.css` (global, no scoped).

**Donde se usa:**

- L1: CategoriasIndex, SeleccionIndex, NormasIndex, ProcesoIndex (dark), BlogPreviewIndex, ReviewsIndex, FaqCotizacionIndex
- L2: CatalogoProductos (8 categorias), CatalogoServicios (8 servicios), CatalogoEmpresas (6 zonas)
- L3: CatalogoExtintores, GuiaExtintores, NormasExtintores, FaqExtintores

### SectionHeader (encabezado de 1 columna)

Componente centrado o alineado a la izquierda. Se mantiene disponible para secciones simples pero **ya no se usa** en las secciones principales de L1, L2 o L3.

**Archivo:** `src/components/ui/SectionHeader.astro`

---

## Patron de cards (.ccard)

Card reutilizable con imagen, badge, titulo, descripcion, lista de subcategorias y CTA.

**CSS global:** `src/styles/pages.css`

### Estructura HTML

```html
<article class="ccard">
  <div class="ccard__header">
    <img src="..." alt="..." />
    <div class="ccard__header-overlay"></div>
    <span class="ccard__badge">Badge</span>        <!-- opcional -->
  </div>
  <div class="ccard__content">
    <h3 class="ccard__title">Nombre del producto</h3>
    <p class="ccard__desc">Descripcion corta</p>
    <ul class="ccard__list">                         <!-- subcategorias -->
      <li>
        <a href="..." class="ccard__link-btn">
          Modelo o variante
          <svg><!-- chevron --></svg>
        </a>
      </li>
    </ul>
    <a href="..." class="ccard__cta">
      Ver detalles
      <svg><!-- arrow --></svg>
    </a>
  </div>
</article>
```

### Clases CSS

| Clase | Descripcion |
|-------|-------------|
| `.catidx-grid` | Grid contenedor: 4 cols desktop, 3 tablet, 2 movil, 1 movil chico |
| `.ccard` | Card base con border, border-radius 8px, hover shadow |
| `.ccard__header` | Contenedor de imagen con aspect-ratio 16/9 |
| `.ccard__header-overlay` | Overlay oscuro sobre imagen |
| `.ccard__badge` | Etiqueta flotante en esquina superior (rojo, texto blanco) |
| `.ccard__title` | Titulo con border-left rojo 3px |
| `.ccard__desc` | Descripcion gris |
| `.ccard__list` | Grid 2 columnas de subcategorias |
| `.ccard__link-btn` | Boton de subcategoria con hover slide y chevron |
| `.ccard__cta` | Link inferior con flecha animada |
| `.ccard--cta-wa` | Variante CTA WhatsApp (fondo oscuro, icono verde) |

### Donde se usa

- **L1** (`CategoriasIndex`): 8 cards de categorias con subcategorias de navegacion
- **L2** (`CatalogoProductos`): 46 cards de productos agrupadas en 8 secciones, cada una con subcats reales (capacidades, modelos)
- **L2** (`CatalogoServicios`): 48 cards de detalles de servicio agrupadas en 8 secciones + 8 CTA WA
- **L2** (`CatalogoEmpresas`): 31 cards de zonas agrupadas en 6 secciones + 6 CTA WA
- **L3** (`CatalogoExtintores`): 10 cards de extintores con imagenes individuales, subcats de capacidades reales + 1 card CTA WhatsApp

---

## L1 — Index (`/`)

### Orden de secciones

| # | Componente | Encabezado | Fondo | Patron visual |
|---|-----------|------------|-------|---------------|
| 1 | HeroIndex | Custom (H1 + badge) | Dark gradient | 2 cols: H1 + CTAs / texto SEO |
| 2 | CtaBar | Ninguno | Blanco | 4 tarjetas de acceso rapido |
| 3 | CategoriasIndex | SectionHeaderDuo | Blanco | .ccard grid 4 cols |
| 4 | SeleccionIndex | SectionHeaderDuo | Blanco | Tabla de riesgo 4 cols |
| 5 | TrustIndex | Sidebar custom | Blanco | 2 cols: sidebar / 2x2 grid razones |
| 6 | ServiciosIndex | Sidebar custom | Surface | 2 cols: sidebar / 2x4 grid servicios |
| 7 | NormasIndex | SectionHeaderDuo | Blanco | Tabla 3 cols (norma/alcance/aplica) |
| 8 | ProcesoIndex | SectionHeaderDuo (dark) | Dark | 5 pasos numerados |
| 9 | CoberturaIndex | Sidebar custom | Surface | 2 cols: sidebar / lista estados |
| 10 | BlogPreviewIndex | SectionHeaderDuo | Blanco | Grid 3 cols articulos |
| 11 | ReviewsIndex | SectionHeaderDuo | Surface | Grid 3 cols resenas |
| 12 | FaqCotizacionIndex | SectionHeaderDuo | Blanco | 2 cols: FAQ accordion / form sticky |
| 13 | CTAFinalIndex | Custom | Rojo primario | CTA horizontal con 2 botones |

### Secciones reutilizables en otros niveles

- **CtaBar** — L2, L3
- **SeleccionIndex** — L2
- **TrustIndex** — L3
- **ServiciosIndex** — L3
- **NormasIndex** — L2
- **ProcesoIndex** — L2
- **FaqCotizacionIndex** — L2
- **CTAFinalIndex** — L2, L3

---

## L2 — Productos (`/productos/`)

### Orden de secciones

| # | Componente | Encabezado | Fondo | Patron visual |
|---|-----------|------------|-------|---------------|
| 1 | Breadcrumb | — | — | Migas de pan |
| 2 | HeroProductos | Custom (H1 + badge) | Dark gradient | 2 cols: H1 + CTAs / texto SEO |
| 3 | CtaBar | Ninguno | Blanco | 4 tarjetas acceso rapido |
| 4 | CatalogoProductos | SectionHeaderDuo x8 | Alternado blanco/gris | .ccard grid + nav sticky |
| 5 | SeleccionIndex | SectionHeaderDuo | Blanco | Tabla de riesgo |
| 6 | NormasIndex | SectionHeaderDuo | Blanco | Tabla de normas |
| 7 | ProcesoIndex | SectionHeaderDuo (dark) | Dark | 5 pasos |
| 8 | FaqCotizacionIndex | SectionHeaderDuo | Blanco | FAQ + form |
| 9 | CTAFinalIndex | Custom | Rojo | CTA final |

### CatalogoProductos — Datos

8 categorias con 46 productos y 188 subcategorias en total. Cada categoria tiene: `id`, `titulo`, `badge` (eyebrow), `desc`, `body` (bodyPara1), `href`, `img`, `productos[]` con `subcats[]`.

---

## L2 — Servicios (`/servicios/`)

### Orden de secciones

Identico a Productos: Breadcrumb → HeroServicios → CtaBar → CatalogoServicios (8 servicios con SectionHeaderDuo + .ccard + nav-cats sticky) → SeleccionIndex → NormasIndex → ProcesoIndex → FaqCotizacionIndex → CTAFinalIndex.

### CatalogoServicios — Datos

8 servicios con datos inline: venta de equipos, recarga, mantenimiento, instalacion sistemas CI, prueba hidrostatica, asesoria tecnica, capacitacion, senalizacion NOM. Cada servicio tiene: `id`, `navLabel`, `titulo`, `titleLine2`, `badge`, `desc`, `body`, `img`, `detalles[]`.

---

## L2 — Empresas / Cobertura (`/empresas/`)

### Orden de secciones

| # | Componente | Encabezado | Fondo | Patron visual |
|---|-----------|------------|-------|---------------|
| 1 | Breadcrumb | — | — | Migas de pan |
| 2 | HeroEmpresas | Custom (H1 + badge) | Dark gradient | 2 cols: H1 + CTAs / texto SEO |
| 3 | CtaBar | Ninguno | Blanco | 4 tarjetas acceso rapido |
| 4 | CatalogoEmpresas | SectionHeaderDuo x6 | Alternado blanco/gris | .ccard grid + nav sticky |
| 5 | SeleccionIndex | SectionHeaderDuo | Blanco | Tabla de riesgo |
| 6 | NormasIndex | SectionHeaderDuo | Blanco | Tabla de normas |
| 7 | ProcesoIndex | SectionHeaderDuo (dark) | Dark | 5 pasos |
| 8 | FaqEmpresas | SectionHeaderDuo | Gris | FAQ cobertura + form cotizacion |
| 9 | CTAFinalIndex | Custom | Rojo | CTA final |

### Componentes exclusivos de Empresas

- **HeroEmpresas** (`src/components/sections/HeroEmpresas.astro`): Hero con badge pulse, H1 con accent, CTAs WA + ancla, 2 parrafos SEO. Mismo patron visual que HeroProductos/HeroServicios. Estilos scoped.
- **CatalogoEmpresas** (`src/components/sections/CatalogoEmpresas.astro`): Nav-cats sticky (6 zonas) + 6 secciones con SectionHeaderDuo + catidx-grid de .ccard + .ccard--cta-wa. Datos inline. Nav-cats con estilos scoped.
- **FaqEmpresas** (`src/components/sections/FaqEmpresas.astro`): Wrapper de FaqCotizacion con 8 FAQs de cobertura/entregas. Mantiene el orquestador limpio.

### CatalogoEmpresas — Datos

6 zonas de cobertura: CDMX (8 alcaldias), Estado de Mexico (8 municipios), Queretaro (4 zonas), Puebla (4 zonas), Aguascalientes (3 zonas), Baja California (4 zonas). Total: 31 detalles + 6 CTA WA. Cada zona tiene: `id`, `navLabel`, `titulo`, `titleLine2`, `badge`, `desc`, `body`, `href`, `img`, `detalles[]`.

---

## L3 — Extintores (`/extintores/`)

### Orden de secciones

| # | Componente | Encabezado | Fondo | Patron visual |
|---|-----------|------------|-------|---------------|
| 1 | Breadcrumb | — | — | Migas de pan |
| 2 | HeroExtintores | Custom (H1 + badge) | Dark gradient | 2 cols: H1 + CTAs / texto SEO |
| 3 | CtaBar | Ninguno | Blanco | 4 tarjetas acceso rapido — va INMEDIATAMENTE después del Hero |
| 4 | CatalogoExtintores | SectionHeaderDuo | Blanco | .ccard grid + card CTA WA |
| 5 | GuiaExtintores | SectionHeaderDuo | Surface | 2 cols guia-card (4 escenarios) |
| 6 | TrustIndex | Sidebar custom | Blanco | 2x2 razones |
| 7 | NormasExtintores | SectionHeaderDuo | Blanco | Tabla 3 cols (6 normas) |
| 8 | FaqExtintores | SectionHeaderDuo | Surface | FAQ accordion + form cotizacion |
| 9 | CTAFinalIndex | Custom | Rojo | CTA final |
| ⚠ | ~~ServiciosIndex~~ | — | — | **ELIMINADA** de L3. Regla global: nada entre Hero y CtaBar; ServiciosIndex solo vive en L1. |

### CatalogoExtintores — Datos

10 tipos de extintores con imagenes individuales, subcats de capacidades reales y card CTA WhatsApp. Cada extintor tiene: `nombre`, `desc`, `href`, `img`, `badge`, `ctaLabel`, `subcats[]`.

### Secciones exclusivas de L3

- **GuiaExtintores**: 4 escenarios de seleccion por tipo de instalacion (oficina, restaurante, planta industrial, centro de datos). Incluye CTA bar de asesoria.
- **NormasExtintores**: 6 normas especificas de extintores (NOM-154, NOM-002, NOM-100, NOM-101, NFPA 10, prueba hidrostatica).
- **FaqExtintores**: 8 preguntas frecuentes + formulario de cotizacion con script que envia datos a WhatsApp.

---

## Reglas de CSS

1. **Componentes compartidos** (SectionHeaderDuo, SectionHeader): CSS global en `src/styles/components.css`.
2. **Patrones de cards** (.ccard, .catidx-grid): CSS global en `src/styles/pages.css`.
3. **Secciones con layout unico** (Hero, GuiaExtintores, FaqExtintores): Scoped `<style>` permitido dentro del componente.
4. **Regla de oro**: Si un estilo se repite en mas de un componente, debe ir en CSS global (components.css o pages.css), nunca duplicado en scoped styles.

---

## Patron de Hero

Todos los heroes siguen el mismo patron visual:

- **Fondo:** Gradiente oscuro con glow rojo radial
- **Layout:** Grid 2 columnas (izq: H1 + badge + CTAs, der: texto SEO)
- **Padding:** `5rem` arriba y abajo (desktop), `3rem` en tablet/movil
- **Badge:** Pill con borde rojo, dot animado, texto blanco
- **CTAs:** btn-primary (rojo, WhatsApp) + btn-secondary o btn-ghost

---

## Patron de alternancia de fondos

Las secciones alternan fondos para crear ritmo visual:

- **Blanco:** `var(--c-white)` / `cat-section--white`
- **Surface (gris claro):** `var(--c-surface, #F4F4F5)` / `cat-section--gray`
- **Dark:** `var(--c-ink, #111111)` — usado en ProcesoIndex y heroes
- **Rojo primario:** `var(--c-primary)` — usado en CTAFinalIndex y barras de estadisticas

---

## L4 — Producto individual (`/extintores/polvo-seco/`, etc.)

### Arquitectura de archivos

```
src/
├── layouts/
│   ├── BaseLayout.astro          ← HTML shell: TopBar + Header + <main> + Footer + WA
│   └── CategoryLayout.astro      ← Layout L4: Breadcrumb + Hero + Stats? + CtaBar + <slot> + FAQ + CTAFinal
├── pages/
│   └── extintores/
│       └── [producto].astro      ← Template dinámico: genera 10 URLs desde EXTINTOR_PRODUCTS
├── data/
│   └── extintores-productos.ts   ← Fuente de verdad: EXTINTOR_PRODUCTS + EXTINTOR_PAGES
├── components/
│   ├── sections/
│   │   ├── Hero.astro            ← Hero reutilizable (todas las L4 lo usan via CategoryLayout)
│   │   ├── TrustIndex.astro      ← Sección "¿Por qué Proyecto Red?" (compartida L3/L4)
│   │   └── NormasExtintores.astro← Normas NOM/NFPA aplicables (compartida L3/L4)
│   └── ui/
│       └── SectionHeaderDuo.astro← Encabezado 2 cols (todas las secciones internas de L4)
└── styles/
    ├── product-page.css          ← CSS específico L4: .l4-svc-grid, .srv-mini, .inline-cta
    └── pages.css                 ← CSS compartido: .ccard, .catidx-grid, .cat-section
```

---

### CategoryLayout.astro — Props completas

**Archivo:** `src/layouts/CategoryLayout.astro`  
**Extiende:** `BaseLayout.astro`  
**Usado por:** `extintores/[producto].astro` y todos los L4 futuros.

| Prop | Tipo | Requerido | Descripción |
|------|------|-----------|-------------|
| `title` | `string` | Sí | `<title>` SEO |
| `description` | `string` | No | `<meta description>` |
| `canonical` | `string` | No | URL canónica (default: URL actual) |
| `badge` | `string` | Sí | Texto del pill badge en el Hero |
| `heroTitle` | `string` | Sí | H1 primera parte (ej. "Extintores de") |
| `heroAccent` | `string` | Sí | H1 parte en rojo (ej. "Polvo Seco ABC") |
| `heroSubtitle` | `string` | Sí | Párrafo descriptivo bajo el H1 |
| `heroDescRight` | `string[]` | Sí | 2 párrafos en columna derecha del Hero |
| `cta1` | `HeroCTA` | Sí | Botón primario (WhatsApp) |
| `cta2` | `HeroCTA` | Sí | Botón outline (ej. "Ver todos los extintores") |
| `breadcrumb` | `BreadcrumbItem[]` | Sí | Items de migas de pan |
| `stats` | `Stat[]` | No | Si se pasa, renderiza barra de stats roja |
| `showForm` | `boolean` | No | Default `true`. Controla si aparece CotizacionForm |
| `faqItems` | `FAQItem[]` | No | Si se pasa, renderiza FAQ accordion + JSON-LD FAQPage |
| `ctaTitle` | `string` | No | Título del CTA Final |
| `ctaBody` | `string` | No | Párrafo del CTA Final |
| `ctaCTA1Text` | `string` | No | Texto botón 1 del CTA Final |
| `ctaCTA1Href` | `string` | No | URL botón 1 (default: `cta1.href`) |
| `ctaCTA2Text` | `string` | No | Texto botón 2 del CTA Final |
| `ctaCTA2Href` | `string` | No | URL botón 2 (default: `/productos/`) |

**Tipos de datos:**

```ts
interface BreadcrumbItem { label: string; href?: string }
interface Stat           { value: string; label: string }
interface FAQItem        { question: string; answer: string }
interface HeroCTA        { text: string; href: string; variant?: 'primary' | 'outline' }
```

**JSON-LD que genera automáticamente:**
- `BreadcrumbList` — siempre, desde el array `breadcrumb`
- `FAQPage` — solo si `faqItems` tiene elementos

---

### Orden de secciones L4 — flujo completo

```
CategoryLayout.astro
│
├── [BaseLayout] → TopBar + Header
│
├── breadcrumb-bar          Inicio > Productos > Extintores > Polvo Seco ABC
│
├── Hero.astro              Fondo oscuro · badge + H1 (title + accent) + subtitle + heroDescRight
│                           CTAs: btn--primary (WA) + btn--outline-white
│
├── cat-stats (condicional) Barra roja con 4 métricas — SOLO si se pasa `stats[]`
│                           ⚠ REGLA: en categorías L3 sin stats propios (ej. equipo-bomberos),
│                             no pasar stats en CategoryLayout para evitar barra vacía
│
├── CtaBar                  Barra blanca con 4 accesos rápidos (siempre presente)
│
├── <slot>  ← Contenido único de cada página (definido en [producto].astro)
│   │
│   ├── § 0  Variantes / Capacidades    cat-section--white  catidx-grid + ccard + ccard--cta-wa
│   │        (condicional: si data.variantes.length > 0)
│   │
│   ├── § 1  Características técnicas   cat-section--gray*  l4-svc-grid + srv-mini + inline-cta
│   │        *blanco si no hay variantes
│   │
│   ├── § 2  ¿Cuándo usar?              cat-section--white  l4-svc-grid + srv-mini + inline-cta
│   │
│   ├── § 3  Servicios relacionados     cat-section--gray   l4-svc-grid + srv-mini (con flecha)
│   │        (RELATED_SERVICES filtrado desde SERVICES)
│   │
│   ├── § 4  TrustIndex                 (estilos propios)   ¿Por qué Proyecto Red?
│   │
│   ├── § 5  NormasExtintores           (estilos propios)   6 normas NOM/NFPA en tabla
│   │
│   └── § 6  Otros extintores           cat-section--white  catidx-grid + ccard + ccard--cta-wa
│            (related: todos excepto el actual)
│
├── FaqCotizacionIndex      FAQ accordion + formulario de cotización (siempre)
│
├── CTAFinal                CTA horizontal rojo con 2 botones
│
└── [BaseLayout] → Footer + WhatsAppButton
```

---

### Alternancia de fondos en L4

| Sección | Clase CSS | Color |
|---------|-----------|-------|
| Variantes | `cat-section--white` | Blanco |
| Características | `cat-section--gray` (o `--white` si no hay variantes) | Gris claro |
| ¿Cuándo usar? | `cat-section--white` | Blanco |
| Servicios | `cat-section--gray` | Gris claro |
| TrustIndex | propio | Blanco |
| NormasExtintores | propio | Blanco |
| Otros extintores | `cat-section--white` | Blanco |

---

### Patrón `.l4-svc-grid + .srv-mini` — Características / Cuándo usar / Servicios

**CSS:** `src/styles/product-page.css`  
**Usado en:** Secciones 1, 2 y 3 de [producto].astro

Estructura HTML:

```html
<div class="l4-svc-grid" role="list" aria-label="...">
  <div class="srv-mini" role="listitem">
    <span class="srv-mini__num" aria-hidden="true">01</span>
    <div class="srv-mini__body">
      <strong class="srv-mini__titulo">Título del ítem</strong>
      <span class="srv-mini__sub">Descripción corta</span>
    </div>
    <!-- Agregar srv-mini__arrow solo si el elemento es <a href> (servicios) -->
    <svg class="srv-mini__arrow">...</svg>
  </div>
  ...
</div>
```

Reglas CSS clave:
- Grid 2 columnas desktop, 1 columna mobile (`max-width: 640px`)
- Bordes colapsan (margin negativo `-1px`) creando cuadrícula tipo tabla
- Hover: fondo `--c-primary-light` + z-index 1
- Número: rojo `--c-primary`, `font-size: 0.8125rem`, `font-weight: 700`
- `.srv-mini__arrow` aparece solo en hover (opacidad 0 → 1)
- Si el elemento es enlace (`<a href>`), usar `<a class="srv-mini">` directamente
- Si no es enlace (características, usos), usar `<div class="srv-mini">`

**CTA inline** — aparece debajo de cada `.l4-svc-grid`:

```html
<div class="inline-cta">
  <p class="inline-cta__text">Texto de apoyo a la acción</p>
  <a href={PAGE_WA} class="btn btn--red" target="_blank" rel="noopener noreferrer">
    Texto del botón
  </a>
</div>
```

CSS en `product-page.css`: fondo con tinte rojo suave (4% opacidad), borde rojo 12% opacidad, `border-radius: 10px`. Flex row en desktop, columna en mobile.

---

### Patrón `.catidx-grid + .ccard` en L4 — Variantes y Otros extintores

**CSS:** `src/styles/pages.css` (compartido con L1/L2/L3)  
**Usado en:** Secciones 0 (Variantes) y 6 (Otros extintores) de [producto].astro

La `.ccard` en L4 agrega `.ccard__specs` que no aparece en L1/L2/L3:

```html
<p class="ccard__specs">Polvo ABC · 4.5 kg · ~10 s descarga · 3–4 m alcance</p>
```

CSS `.ccard__specs`: `font-family: monospace`, `font-size: 0.75rem`, color `--c-muted`, border-top gris, padding-top. Aparece entre `.ccard__desc` y `.ccard__cta`.

**La última card siempre es `.ccard--cta-wa`** — card oscura con ícono WhatsApp, título, subtítulo y botón "Enviar mensaje →".

---

### Patrón `SectionHeaderDuo` en cada sección L4

Todas las secciones de contenido en L4 abren con `SectionHeaderDuo`. Props usadas por sección:

| Sección | eyebrow | titleLine1 | titleLine2 | desc | bodyPara1 |
|---------|---------|------------|------------|------|-----------|
| Variantes | "Capacidades disponibles" | "Selecciona la capacidad" | "que necesitas" | descripción de stock | texto de normas |
| Características | `data.caracteristicas.eyebrow` | `data.caracteristicas.titleLine1` | `data.caracteristicas.titleLine2` | `data.caracteristicas.desc` | `data.caracteristicas.bodyPara` |
| ¿Cuándo usar? | `data.cuandoUsar.eyebrow` | `data.cuandoUsar.titleLine1` | `data.cuandoUsar.titleLine2` | `data.cuandoUsar.desc` | `data.cuandoUsar.bodyPara` |
| Servicios | "Servicios para tu extintor" | "Mantenimiento y soporte" | "profesional incluido" | fijo | fijo |
| Otros extintores | "Más opciones" | `data.relatedTitle` | — | fijo | fijo |

---

### Interfaz de datos `ProductoExtintorData`

**Archivo:** `src/data/extintores-productos.ts`

```ts
interface ProductoExtintorData {
  // SEO
  metaTitle:    string
  metaDesc:     string

  // Hero (pasan directo a CategoryLayout)
  badge:          string
  heroTitle:      string    // ej. "Extintores de"
  heroAccent:     string    // ej. "Polvo Seco ABC" — se muestra en rojo
  heroSubtitle:   string
  heroDescRight:  string[]  // 2 párrafos columna derecha

  // Imagen principal
  img: string               // ruta a /imagenes/extintores/{slug}.jpg

  // Stats bar (4 ítems — se pasan a CategoryLayout como stats[])
  stats: { value: string; label: string }[]

  // Variantes por capacidad (si existe → renderiza Sección 0)
  variantes?: VarianteExtintor[]

  // Sección 1 — Características técnicas
  caracteristicas: {
    eyebrow:    string
    titleLine1: string
    titleLine2: string
    desc:       string
    bodyPara?:  string
    items:      { title: string; desc: string }[]
  }

  // Sección 2 — ¿Cuándo usar?
  cuandoUsar: {
    eyebrow:    string
    titleLine1: string
    titleLine2?: string
    desc:       string
    bodyPara?:  string
    usos:       { label: string; desc: string }[]
  }

  // Sección 6 — Otros extintores (título del SectionHeaderDuo)
  relatedTitle: string

  // FAQ + CTA final
  faqItems: { question: string; answer: string }[]
  waMessage: string
  ctaTitle:  string
  ctaBody:   string
}

interface VarianteExtintor {
  nombre: string
  badge?: string
  desc:   string
  specs:  string    // línea monoespaciada: "Polvo ABC · 4.5 kg · ..."
  img?:   string    // si no se pasa, usa data.img principal
  waText: string    // mensaje pre-llenado para WhatsApp
}
```

---

### Breadcrumb en L4

4 niveles: `Inicio > Productos > [Categoría] > [Producto]`

```ts
breadcrumb={[
  { label: 'Inicio',     href: '/'                 },
  { label: 'Productos',  href: '/productos/'        },
  { label: 'Extintores', href: '/extintores/'       },
  { label: data.heroAccent },                        // sin href (página actual)
]}
```

El último ítem siempre **sin `href`** — es la página actual. El JSON-LD `BreadcrumbList` lo genera automáticamente CategoryLayout desde este mismo array.

---

### Variantes por producto (referencia rápida)

| Producto | # Variantes |
|----------|-------------|
| Polvo Seco PQS | 7 (1 kg, 2.5 kg, 4.5 kg, 6 kg, 9 kg, 12 kg, Rodante 25-50 kg) |
| CO₂ | 3 (2.5 kg, 5 kg, 10 kg) |
| AFFF Espuma | 3 (9 L, 20 L, 50 L) |
| Tipo K | 3 (1.7 L, 3 L, 6 L) |
| Púrpura K | 3 (1.7 L, 3 L, 6 L) |
| Agua a Presión | 2 (9 L, 20 L) |
| Cold Fire | 3 (2.5 L, 9 L, 20 L) |
| Automáticos | 4 (PQS 1 kg, PQS 6 kg, CO₂ 2 kg, CO₂ 5 kg) |
| ABC Multiusos | 7 (1 kg, 2.5 kg, 4.5 kg, 6 kg, 9 kg, 12 kg, Rodante 25-50 kg) |
| Agente Limpio | 4 (FM-200 2.5 kg, FM-200 5 kg, FM-200 10 kg, FE-36 5 kg) |

---

### Reglas de homologación L4

Al crear un L4 nuevo (para otra categoría), seguir este checklist:

1. **Crear** `src/data/{categoria}-productos.ts` con `PRODUCTOS` + `PAGES` (mismo patrón que `extintores-productos.ts`)
2. **Crear** `src/pages/{categoria}/[producto].astro` copiando la estructura de `extintores/[producto].astro`
3. **Importar** `product-page.css` y `pages.css` en el nuevo `[producto].astro`
4. **Adaptar** `RELATED_SERVICES` al servicio correcto de la categoría
5. **Adaptar** el texto fijo de "Servicios relacionados" (Sección 3) a los servicios propios
6. **Crear** o reutilizar el componente de Normas propio de la categoría (ej. `NormasBomberos`, `NormasExtintores`)
7. **Breadcrumb**: 4 niveles — Inicio > Productos > [Categoría L3] > [Producto]
8. **Stats**: pasar `stats[]` solo si el producto tiene métricas relevantes (precio, capacidades, norma); omitir si son genéricas
9. **CERO** animaciones en cards — solo `.btn` y `<button>` tienen transitions

---

## L5 — Variante específica (`/extintores/polvo-seco/pqs-automatico-4-5-kg/`)

Páginas individuales de variante con galería y ficha técnica completa. Actualmente solo existen 2 páginas L5 hardcodeadas en `src/pages/extintores/polvo-seco/`. Pendiente de homologación.

---

## JSON-LD por nivel

| Nivel | Schemas |
|-------|---------|
| L1 | LocalBusiness, FAQPage, BreadcrumbList, WebSite |
| L2 | BreadcrumbList, OfferCatalog, FAQPage |
| L3 | ItemList, FAQPage, BreadcrumbList, CollectionPage |
| L4 | BreadcrumbList, FAQPage |
