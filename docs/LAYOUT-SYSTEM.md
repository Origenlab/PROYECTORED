# Sistema de Layouts — Proyecto Red

> Documento de referencia para la arquitectura de layouts del sitio proyectored.com.mx.
> Última actualización: 2026-04-11.

---

## Jerarquía de niveles

| Nivel | Ruta ejemplo | Propósito | Secciones propias | Secciones genéricas reutilizadas |
|-------|-------------|-----------|-------------------|----------------------------------|
| **L1** | `/` | Página principal. Presenta la empresa, todas las categorías y servicios. | 12 secciones | Ninguna (es el origen) |
| **L2** | `/productos/` | Catálogo general. Agrupa las 8 categorías con navegación sticky. | 2 secciones (HeroProductos, CatalogoProductos) | SeleccionIndex, NormasIndex, ProcesoIndex, FaqCotizacionIndex, CTAFinalIndex |
| **L3** | `/extintores/` | Categoría individual. Detalla los productos de una sola línea. | 5 secciones (HeroExtintores, CatalogoExtintores, GuiaExtintores, NormasExtintores, FaqExtintores) | TrustIndex, ServiciosIndex, CTAFinalIndex |

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
- L2: CatalogoProductos (por cada una de las 8 categorias)
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

## L3 — Extintores (`/extintores/`)

### Orden de secciones

| # | Componente | Encabezado | Fondo | Patron visual |
|---|-----------|------------|-------|---------------|
| 1 | Breadcrumb | — | — | Migas de pan |
| 2 | HeroExtintores | Custom (H1 + badge) | Dark gradient | 2 cols: H1 + CTAs / texto SEO |
| 3 | Barra de estadisticas | — | Rojo primario | 4 metricas (10 tipos, NOM, 1-50 kg, 24h) |
| 4 | CtaBar | Ninguno | Blanco | 4 tarjetas acceso rapido |
| 5 | CatalogoExtintores | SectionHeaderDuo | Blanco | .ccard grid + card CTA WA |
| 6 | GuiaExtintores | SectionHeaderDuo | Surface | 2 cols guia-card (4 escenarios) |
| 7 | TrustIndex | Sidebar custom | Blanco | 2x2 razones |
| 8 | ServiciosIndex | Sidebar custom | Surface | 2x4 servicios |
| 9 | NormasExtintores | SectionHeaderDuo | Blanco | Tabla 3 cols (6 normas) |
| 10 | FaqExtintores | SectionHeaderDuo | Surface | FAQ accordion + form cotizacion |
| 11 | CTAFinalIndex | Custom | Rojo | CTA final |

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

### Arquitectura

- **Layout:** `CategoryLayout.astro` — wrapper que orquesta: Breadcrumb → Hero.astro → QuickLinks → slot → CotizacionForm → FAQ → CTAFinal
- **Template dinámico:** `src/pages/extintores/[producto].astro` — genera 10 páginas desde `EXTINTOR_PAGES` en `extintores-productos.ts`
- **Datos:** `src/data/extintores-productos.ts` — interfaz `ProductoExtintorData` con `VarianteExtintor[]`

### Orden de secciones

| # | Sección | Encabezado | Fondo | Patrón visual |
|---|---------|------------|-------|---------------|
| 0 | Variantes (condicional) | SectionHeaderDuo | Blanco | .ccard grid (catidx-grid) + card CTA WA |
| 1 | Características técnicas | SectionHeaderDuo | Gris (si hay variantes) / Blanco (si no) | .features-grid con .feature-card (icono check + title + desc) |
| 2 | ¿Cuándo usar? | SectionHeaderDuo | Blanco | .usos-grid con .uso-item (dot rojo + label + desc) |
| 3 | Servicios relacionados | Custom (svc-header) | Gris | .svc-grid con .svc-card (4 servicios filtrados) |
| 4 | Otros extintores | Custom (related-header) | Blanco | .related-grid con .related-card (pills con badge) |
| — | CotizacionForm | — | — | Formulario de cotización (desde CategoryLayout) |
| — | FAQ | — | — | Accordion con preguntas (desde CategoryLayout) |
| — | CTAFinal | Custom | Rojo | CTA horizontal (desde CategoryLayout) |

### Datos por producto (10 productos)

Cada producto en `EXTINTOR_PAGES` contiene:
- **SEO:** metaTitle, metaDesc
- **Hero:** badge, heroTitle, heroAccent, heroSubtitle, heroDescRight[]
- **Imagen:** img (ruta a `/imagenes/extintores/{slug}.jpg`)
- **Stats:** 4 métricas en barra
- **Variantes:** array de `VarianteExtintor` con nombre, badge?, desc, specs, waText
- **Características:** eyebrow, titleLine1, titleLine2, desc, bodyPara, items[]
- **Cuándo usar:** eyebrow, titleLine1, titleLine2, desc, bodyPara, usos[]
- **FAQ:** faqItems[] (4-8 preguntas por producto)
- **CTA:** waMessage, ctaTitle, ctaBody

### Variantes por producto

| Producto | Variantes |
|----------|-----------|
| Polvo Seco PQS | 7 (1 kg, 2.5 kg, 4.5 kg, 6 kg, 9 kg, 12 kg, Rodante 25-50 kg) |
| CO₂ | 3 (2.5 kg, 5 kg, 10 kg) |
| AFFF | 3 (9 L, 20 L, 50 L) |
| Tipo K | 3 (1.7 L, 3 L, 6 L) |
| Púrpura K | 3 (1.7 L, 3 L, 6 L) |
| Agua a Presión | 2 (9 L, 20 L) |
| Cold Fire | 3 (2.5 L, 9 L, 20 L) |
| Automáticos | 4 (PQS 1 kg, PQS 6 kg, CO₂ 2 kg, CO₂ 5 kg) |
| ABC Multiusos | 7 (1 kg, 2.5 kg, 4.5 kg, 6 kg, 9 kg, 12 kg, Rodante 25-50 kg) |
| Agente Limpio | 4 (FM-200 2.5 kg, FM-200 5 kg, FM-200 10 kg, FE-36 5 kg) |

### CSS

- **Secciones L4:** Usan `cat-section` + `cat-section--white` / `cat-section--gray` (definidas en pages.css)
- **Cards de variantes:** Patrón `.ccard` + `.ccard__specs` (nuevo en L4) + `.ccard--cta-wa` — todo en `pages.css`
- **Features/Usos/Servicios/Related:** Clases en `product-page.css` (importado en [producto].astro)
- **SectionHeaderDuo:** CSS global en `components.css` (.titulo-duo)

### Archivo estático eliminado

`polvo-seco.astro` (override estático) fue eliminado. Todas las páginas L4 ahora se generan desde `[producto].astro` con datos de `extintores-productos.ts`.

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
