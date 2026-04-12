# L3 — Template Autorizado

> Referencia canónica del template de categoría individual (nivel L3).
> Template de referencia: `extintores/index.astro` + sus secciones.
> Última actualización: 2026-04-11. Homologación completa de las 8 categorías.

---

## Qué es L3

Páginas de categoría individual: extintores, señalamientos, equipo-bomberos, gabinetes, mangueras, sistemas, primeros-auxilios, equipo-seguridad. Cada una presenta todos los productos de una sola línea con catálogo, guía de selección, normas, FAQ y formulario de cotización.

---

## Orden de secciones (obligatorio)

```
Breadcrumb → Hero[Cat] → CtaBar → Catalogo[Cat] → Guia[Cat] → TrustIndex → Normas[Cat] → Faq[Cat] → CTAFinalIndex
```

Reglas:
- Hero → CtaBar SIEMPRE juntos, sin nada en medio.
- NO hay sticky nav entre Hero y Catálogo.
- TrustIndex y CTAFinalIndex son secciones genéricas reutilizadas de L1.
- ServiciosIndex vive en L1 (extintores lo tiene por legado pero no es obligatorio en nuevas L3).

---

## Orquestador (index.astro)

Cada L3 sigue este patrón en su `[categoria]/index.astro`:

```
Comentario: "L3 [Nombre de Categoría]"
Imports: Base, CtaBar, Breadcrumb, Hero[Cat], Catalogo[Cat], Guia[Cat], Normas[Cat], Faq[Cat], TrustIndex, CTAFinalIndex
Config: SITE, CONTACT
Variables: siteUrl, pageUrl, ogImage
Schemas: schemaItemList, schemaFAQ, schemaBreadcrumb, schemaWebPage
```

### Breadcrumb (3 niveles)

```astro
<Breadcrumb items={[
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos/' },
  { label: '[Nombre Categoría]' }
]} />
```

### JSON-LD obligatorios

1. **ItemList** — todos los productos de la categoría
2. **FAQPage** — todas las preguntas del FAQ
3. **BreadcrumbList** — 3 niveles (Inicio → Productos → Categoría)
4. **CollectionPage** — con `mainEntity: { "@id": pageUrl + "#itemlist" }` y `publisher`

---

## Catalogo[Cat] — Estructura HTML

### Imports obligatorios

```js
import SectionHeaderDuo from '../ui/SectionHeaderDuo.astro'
import Img from '../ui/Img.astro'
import { waUrl } from '../../config/site'
import '../../styles/pages.css'
```

### Datos del array de productos

Cada item debe tener: `nombre`, `desc`, `href`, `img`, `badge` (string | null), `ctaLabel`, `subcats[]`.

### Section wrapper

```html
<section class="catalogo-[name] cat-section cat-section--white" id="catalogo-[name]" aria-labelledby="catalogo-[name]-heading">
```

### SectionHeaderDuo (1 bodyPara)

```astro
<SectionHeaderDuo
  id="catalogo-[name]-heading"
  eyebrow="[N] tipos certificados [norma]"
  titleLine1="Catálogo de [Categoría]:"
  titleLine2="[Subtítulo descriptivo]"
  desc="[Descripción corta]"
  bodyPara1="[Párrafo largo de contexto]"
/>
```

### Grid

```html
<div class="catidx-grid" role="list" aria-label="[Descripción]">
```

**SIN modificadores** (no `--3col`, no `--sis`). El grid base de `pages.css` maneja el responsive.

### Card (.ccard)

```html
<article class="ccard" role="listitem" aria-label={item.nombre}>
  <div class="ccard__header">
    <Img src={item.img} alt={item.nombre}
      loading={i < 4 ? 'eager' : 'lazy'}
      fetchpriority={i === 0 ? 'high' : undefined}
      width={640} height={360}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
    />
    <div class="ccard__header-overlay" aria-hidden="true"></div>
    {item.badge && <span class="ccard__badge">{item.badge}</span>}  <!-- CONDICIONAL -->
  </div>
  <div class="ccard__content">
    <h3 class="ccard__title">{item.nombre}</h3>
    <p class="ccard__desc">{item.desc}</p>
    {item.subcats && item.subcats.length > 0 && (                   <!-- CONDICIONAL -->
      <ul class="ccard__list" aria-label={`Modelos de ${item.nombre}`}>
        {item.subcats.map(sub => (
          <li><a href={sub.href} class="ccard__link-btn">
            {sub.label}
            <svg width="12" height="12" ...><path d="M9 18l6-6-6-6"/></svg>  <!-- CHEVRON -->
          </a></li>
        ))}
      </ul>
    )}
    <a href={item.href} class="ccard__cta">
      {item.ctaLabel || 'Ver detalles'}
      <svg width="13" height="13" ...><path d="M5 12h14M12 5l7 7-7 7"/></svg>  <!-- ARROW -->
    </a>
  </div>
</article>
```

### Card CTA WhatsApp (dentro del grid)

```html
<article class="ccard ccard--cta-wa" aria-label="Asesoría para elegir [categoría]">
  <a href={waHref} class="ccard--cta-wa__inner" target="_blank" rel="noopener noreferrer">
    <div class="ccard--cta-wa__icon" aria-hidden="true">[SVG WhatsApp]</div>
    <p class="ccard--cta-wa__title">¿No sabes qué [producto] necesitas?</p>
    <p class="ccard--cta-wa__sub">[Propuesta de valor]</p>
    <span class="ccard--cta-wa__btn">Asesoría por WhatsApp →</span>
  </a>
</article>
```

### CSS

**Cero scoped styles.** Todo viene de `pages.css` (global): `.catidx-grid`, `.ccard`, `.ccard--cta-wa`.

---

## Faq[Cat] — Estructura HTML

### Section wrapper

```html
<section class="faq-[name]" id="faq-[name]" aria-labelledby="faq-[name]-heading">
```

### SectionHeaderDuo

```astro
<SectionHeaderDuo
  id="faq-[name]-heading"
  eyebrow="Preguntas Frecuentes"
  titleLine1="Todo lo que Necesitas Saber"
  titleLine2="Antes de Comprar [Categoría]"
  desc="[Resumen]"
  bodyPara1="[Invitación a contactar]"
/>
```

### Grid 2 columnas

```html
<div class="faq-[name]-grid">  <!-- grid-template-columns: 1fr 420px -->
```

### Columna izquierda: FAQ con microdata

```html
<div class="faq-col">
  <div class="faq-col__top">
    <span class="faq-col__badge">[SVG] [Categoría] — FAQ</span>
    <h3>[Heading]</h3>
    <p>[Link WhatsApp]</p>
  </div>
  <div class="faq-items">
    <details class="faq-item" itemscope itemtype="https://schema.org/Question">
      <summary>
        <span itemprop="name">{f.q}</span>
        <svg class="faq-chevron" ...><path d="M6 9l6 6 6-6"/></svg>
      </summary>
      <div class="faq-answer" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
        <p itemprop="text" set:html={f.a}></p>
      </div>
    </details>
  </div>
</div>
```

### Columna derecha: Formulario de cotización sticky

```html
<div class="cot-col">
  <div class="cot-card">  <!-- sticky: top: calc(var(--stack-height, 124px) + 1.5rem) -->
    <div class="cot-card__head">  <!-- gradient oscuro -->
      <span class="cot-badge">Cotización Gratuita</span>
      <h3>Solicita tu cotización</h3>
      <p>Respuesta en menos de 24 horas. Sin compromiso.</p>
    </div>
    <div class="cot-card__body">
      <!-- campos: nombre*, teléfono*, empresa, tipo* (select con opciones de categoría), detalle -->
    </div>
    <div class="cot-card__footer">
      <a id="cot-[name]-wa-btn" class="cot-btn" ...>Cotizar [categoría] por WhatsApp</a>
      <p class="cot-note">...</p>
    </div>
  </div>
</div>
```

### JavaScript

Script que intercepta el click del botón, construye mensaje con los campos del form, y abre WhatsApp:

```js
const btn = document.getElementById('cot-[name]-wa-btn')
btn?.addEventListener('click', (e) => {
  e.preventDefault()
  // lee campos, construye msg, window.open(wa.me/...)
})
```

### CSS (scoped)

Copy exacto de FaqExtintores con solo el nombre de clase cambiado (`.faq-[name]-grid`). Responsive a 1200px y 1024px.

---

## Guia[Cat] y Normas[Cat]

Estas secciones ya estaban homologadas. Ambas usan SectionHeaderDuo y scoped styles permitidos (layout único).

---

## Lo que NO debe tener un L3

- ❌ Sticky nav (`nav-cats-*`)
- ❌ Grid con modificadores (`--3col`, `--sis`)
- ❌ Badge siempre visible (debe ser condicional)
- ❌ Subcats siempre visibles (debe ser condicional)
- ❌ CTA strip/banner fuera del grid (debe ser `ccard--cta-wa` dentro del grid)
- ❌ Panel de botones sin form en FAQ (debe tener form card con campos)
- ❌ FAQ sin microdata Schema.org
- ❌ Breadcrumb de 2 niveles (debe ser 3: Inicio → Productos → Categoría)
- ❌ Comentario "L2" en el orquestador

---

## Archivos de referencia

| Componente | Referencia canónica |
|---|---|
| Orquestador | `src/pages/extintores/index.astro` |
| Catálogo | `src/components/sections/CatalogoExtintores.astro` |
| FAQ | `src/components/sections/FaqExtintores.astro` |
| Guía | `src/components/sections/GuiaExtintores.astro` |
| Normas | `src/components/sections/NormasExtintores.astro` |
| Hero | `src/components/sections/HeroExtintores.astro` |
| CSS cards | `src/styles/pages.css` (.ccard, .catidx-grid, .ccard--cta-wa) |
| CSS headers | `src/styles/components.css` (.titulo-duo) |
