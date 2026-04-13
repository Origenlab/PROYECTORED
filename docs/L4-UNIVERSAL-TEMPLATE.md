# L4 Universal — Template Canónico v2

> Documento maestro de referencia para TODAS las páginas L4 del sitio.  
> Última actualización: 2026-04-12  
>
> **Referencia canónica**: `src/pages/mangueras/[producto].astro`  
> (también válido: gabinetes, sistemas, equipo-bomberos — todos homologados)

---

## ⚠️ Regla crítica: variantes deben estar en los DATOS

**El template `[producto].astro` ya tiene la S0 de variantes lista en TODAS las categorías.**  
La S0 es **condicional**: aparece solo si `data.variantes && data.variantes.length > 0`.

**Si el archivo de datos no tiene `variantes: [...]` poblado → la S0 no aparece nunca.**

Esta es la causa del error repetido: el template soporta variantes pero el data file tiene el campo vacío o sin declarar.

### Checklist para nueva categoría L4

- [ ] `src/data/[categoria]-productos.ts` — interface incluye `variantes?: Variante[]` y campos `variantesEyebrow?`, `variantesTitleLine1?`, `variantesTitleLine2?`, `variantesBodyPara?`
- [ ] **Cada producto** del SISTEMA_PAGES / PRODUCTO_PAGES tiene `variantes: [...]` con **mínimo 4 items**
- [ ] Cada variante tiene: `nombre`, `badge?`, `desc`, `specs`, `waText`
- [ ] `variantesEyebrow` = "Configuraciones disponibles" (o equivalente)
- [ ] `variantesTitleLine1/2` = título de la S0 del producto
- [ ] El template `[producto].astro` ya NO requiere cambios — solo los datos

---

## Orden canónico de secciones

```
CategoryLayout (Hero + CtaBar)
  └─ slot:
       S0  cat-section--white   → [CONDICIONAL: si data.variantes.length > 0]
                                   SectionHeaderDuo + catidx-grid (.ccard con placeholder/img) + ccard--cta-wa
       S1  cat-section--gray*   → SectionHeaderDuo + l4-svc-grid (características) + inline-cta
       S2  cat-section--white*  → SectionHeaderDuo + l4-svc-grid (cuándo usar / aplicaciones) + inline-cta
       S3  cat-section--gray*   → SectionHeaderDuo + l4-svc-grid (servicios, <a> con flecha)
       S4                       → <TrustIndex />             (fondo propio, no afecta alternancia)
       S5                       → <Normas[Categoria] />      (fondo propio, no afecta alternancia)
       S6  cat-section--white   → SectionHeaderDuo + catidx-grid--compact (.ccard--text) + ccard--cta-wa
FaqCotizacionIndex → CTAFinal  (via CategoryLayout)
```

### Alternancia de fondos

| Escenario | S0 | S1 | S2 | S3 |
|---|---|---|---|---|
| **Con variantes** | white | gray | white | gray |
| **Sin variantes** | — | white | gray | white |

Implementación en el template:
```astro
class={`cat-section ${hasVariantes ? 'cat-section--gray' : 'cat-section--white'}`}  {/* S1 */}
class={`cat-section ${hasVariantes ? 'cat-section--white' : 'cat-section--gray'}`}  {/* S2 */}
class={`cat-section ${hasVariantes ? 'cat-section--gray' : 'cat-section--white'}`}  {/* S3 */}
```

---

## Interface de datos — estructura mínima

```typescript
// Variante individual — la más pequeña posible
export interface VarianteXxx {
  nombre: string      // Título de la tarjeta (ej. "PQS 4.5 kg")
  badge?: string      // Badge encima de la imagen (ej. "MÁS VENDIDO")
  desc: string        // 2–3 oraciones comerciales
  specs: string       // Una línea: "Clave · Valor · Clave · Valor"
  waText: string      // Mensaje completo para wa.me (sin encoding)
}

// Producto — campos obligatorios + campos de variantes opcionales
export interface ProductoXxxData {
  metaTitle: string
  metaDesc: string
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]
  // ── S0: Variantes (opcional pero DEBE poblarse si la categoría las tiene) ──
  img?: string                    // AVIF compartido para todas las variantes del producto
  variantes?: VarianteXxx[]       // [] vacío = S0 no aparece. Mínimo 4 items.
  variantesEyebrow?: string       // "Configuraciones disponibles"
  variantesTitleLine1?: string    // Línea 1 del título de S0
  variantesTitleLine2?: string    // Línea 2 del título de S0
  variantesBodyPara?: string      // Párrafo cuerpo izquierda de S0
  // ── S1 Características ────────────────────────────────────────────────────
  caracteristicas: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    items: { title: string; desc: string }[]  // mínimo 6 items
  }
  // ── S2 Cuándo usar ────────────────────────────────────────────────────────
  cuandoUsar: {
    eyebrow: string
    titleLine1: string
    titleLine2?: string
    desc: string
    usos: { label: string; desc: string }[]  // mínimo 6 items
  }
  // ── Miscelánea ────────────────────────────────────────────────────────────
  relatedTitle: string
  faqItems: { question: string; answer: string }[]  // mínimo 3 items
  waMessage: string
  ctaTitle: string
  ctaBody: string
}
```

---

## Template `[producto].astro` — estructura canónica

```astro
---
import CategoryLayout from '../../layouts/CategoryLayout.astro'
import SectionHeaderDuo from '../../components/ui/SectionHeaderDuo.astro'
import Img from '../../components/ui/Img.astro'
import TrustIndex from '../../components/sections/TrustIndex.astro'
import NormasXxx from '../../components/sections/NormasXxx.astro'
import { waUrl, SERVICES } from '../../config/site'
import { XXX_PAGES, XXX_PRODUCTS } from '../../data/xxx-productos'
import '../../styles/product-page.css'
import '../../styles/pages.css'

const RELATED_SERVICES = SERVICES.filter((s) =>
  ['servicio-1', 'servicio-2', 'servicio-3'].includes(s.id)
)

export function getStaticPaths() {
  return XXX_PRODUCTS.map((p) => ({
    params: { producto: p.slug },
    props: { slug: p.slug },
  }))
}

const { producto } = Astro.params
const data = XXX_PAGES[producto]
if (!data) return Astro.redirect('/xxx/')

const related = XXX_PRODUCTS.filter((p) => p.slug !== producto)
const PAGE_WA = waUrl(data.waMessage)
const hasVariantes = Boolean(data.variantes && data.variantes.length > 0)
const getVariantesDesc = () =>
  `${data.variantes?.length ?? 0} opciones disponibles de ${data.heroAccent} con documentación normativa y suministro en CDMX.`
---

<CategoryLayout ...props breadcrumb=[4 niveles] showForm faqItems ctaTitle ctaBody ctaCTA1/2>

  <!-- S0 Variantes (condicional) -->
  {hasVariantes && (
    <section class="cat-section cat-section--white" id="variantes">
      <div class="container">
        <SectionHeaderDuo eyebrow=... titleLine1=... titleLine2=... desc={getVariantesDesc()} bodyPara1=... />
        <div class="catidx-grid">
          {data.variantes?.map((v, i) => (
            <article class="ccard">
              <div class:list={['ccard__header', !data.img && 'ccard__header--placeholder']}>
                {data.img ? <Img src={data.img} alt={v.nombre} ... /> : <PlaceholderSVG />}
                {data.img && <div class="ccard__header-overlay" />}
                {v.badge && <span class="ccard__badge">{v.badge}</span>}
              </div>
              <div class="ccard__content">
                <h3 class="ccard__title">{v.nombre}</h3>
                <p class="ccard__desc">{v.desc}</p>
                {v.specs && <p class="ccard__specs">{v.specs}</p>}
                <a href={waUrl(v.waText)} class="ccard__cta" target="_blank">Cotizar este modelo →</a>
              </div>
            </article>
          ))}
          <article class="ccard ccard--cta-wa"><!-- CTA WA --></article>
        </div>
      </div>
    </section>
  )}

  <!-- S1 Características -->
  <section class={`cat-section ${hasVariantes ? 'cat-section--gray' : 'cat-section--white'}`} id="caracteristicas">
    <SectionHeaderDuo ...caracteristicas bodyPara1="[texto genérico de categoría]" />
    <div class="l4-svc-grid">
      {data.caracteristicas.items.map((item, idx) => (
        <div class="srv-mini">
          <span class="srv-mini__num">{String(idx+1).padStart(2,'0')}</span>
          <div class="srv-mini__body">
            <strong class="srv-mini__titulo">{item.title}</strong>
            <span class="srv-mini__sub">{item.desc}</span>
          </div>
        </div>
      ))}
    </div>
    <div class="inline-cta">
      <p class="inline-cta__text">¿Tienes dudas? Te asesoramos sin costo.</p>
      <a href={PAGE_WA} class="btn btn--red" target="_blank">Preguntar por WhatsApp</a>
    </div>
  </section>

  <!-- S2 Cuándo usar -->
  <section class={`cat-section ${hasVariantes ? 'cat-section--white' : 'cat-section--gray'}`} id="cuando-usar">
    <SectionHeaderDuo ...cuandoUsar bodyPara1="[texto genérico de categoría]" />
    <div class="l4-svc-grid">
      {data.cuandoUsar.usos.map((uso, idx) => (
        <div class="srv-mini">
          <span class="srv-mini__num">{String(idx+1).padStart(2,'0')}</span>
          <div class="srv-mini__body">
            <strong class="srv-mini__titulo">{uso.label}</strong>
            <span class="srv-mini__sub">{uso.desc}</span>
          </div>
        </div>
      ))}
    </div>
    <div class="inline-cta">...</div>
  </section>

  <!-- S3 Servicios -->
  <section class={`cat-section ${hasVariantes ? 'cat-section--gray' : 'cat-section--white'}`} id="servicios-xxx">
    <SectionHeaderDuo eyebrow="Servicios disponibles" titleLine1="Más que producto:" titleLine2="..." bodyPara1="..." />
    <div class="l4-svc-grid">
      {RELATED_SERVICES.map((svc, idx) => (
        <a href={`/servicios/#${svc.id}`} class="srv-mini">
          <span class="srv-mini__num">{String(idx+1).padStart(2,'0')}</span>
          <div class="srv-mini__body">
            <strong class="srv-mini__titulo">{svc.label}</strong>
            <span class="srv-mini__sub">{svc.desc}</span>
          </div>
          <svg class="srv-mini__arrow"><!-- flecha → --></svg>
        </a>
      ))}
    </div>
  </section>

  <TrustIndex />
  <NormasXxx />

  <!-- S6 Otros productos -->
  <section class="cat-section cat-section--white" id="otros-xxx">
    <SectionHeaderDuo eyebrow="Más opciones" titleLine1={data.relatedTitle} desc="..." bodyPara1="..." />
    <div class="catidx-grid catidx-grid--compact">
      {related.map((r) => (
        <article class="ccard ccard--text">
          <div class="ccard__content">
            <span class="ccard__badge ccard__badge--top">{r.badge}</span>
            <h3 class="ccard__title">{r.label}</h3>
            <a href={`/xxx/${r.slug}/`} class="ccard__cta">Ver detalles →</a>
          </div>
        </article>
      ))}
      <article class="ccard ccard--cta-wa"><!-- CTA WA --></article>
    </div>
  </section>

</CategoryLayout>

<style>
  .ccard--text { display:flex; flex-direction:column; justify-content:flex-end; background:var(--c-bg-alt,#F8F8F8); border:1px solid var(--c-border,#E4E4E7); border-radius:10px; overflow:hidden; min-height:140px; }
  .ccard--text .ccard__content { padding:1.5rem; display:flex; flex-direction:column; gap:0.5rem; flex:1; }
  .ccard__badge--top { font-size:0.6875rem; font-weight:700; letter-spacing:0.07em; text-transform:uppercase; color:var(--c-primary,#C41E24); background:rgba(196,30,36,0.06); border:1px solid rgba(196,30,36,0.18); border-radius:4px; padding:0.2rem 0.5rem; align-self:flex-start; line-height:1.4; }
  .catidx-grid--compact { grid-template-columns:repeat(auto-fill,minmax(220px,1fr)); }
  @media (max-width:640px) { .catidx-grid--compact { grid-template-columns:1fr; } }
</style>
```

---

## Estado actual de categorías L4 (2026-04-12)

| Categoría | Template | Datos | Variantes pobladas |
|---|---|---|---|
| `extintores` | ✅ canónico | ✅ completo | ✅ 10 productos con variantes |
| `equipo-bomberos` | ✅ homologado | ✅ completo | ✅ 4 productos con variantes |
| `gabinetes` | ✅ homologado | ✅ completo | ✅ 4 productos con variantes |
| `mangueras` | ✅ referencia | ✅ completo | ✅ 4 productos con variantes |
| `sistemas` | ✅ homologado | ✅ **completado 2026-04-12** | ✅ 5 productos con variantes |
| `senalamientos` | ✅ homologado | ⚠️ verificar variantes | ❓ pendiente verificar |
| `equipo-seguridad` | ✅ homologado | ⚠️ verificar variantes | ❓ pendiente verificar |
| `primeros-auxilios` | ✅ **homologado 2026-04-12** | ✅ completo | — (no aplica por ahora) |

### Categorías sin variantes (por diseño)

- **`primeros-auxilios`**: Los 5 productos no tienen variantes en el data file por decisión de diseño. La interfaz soporta `variantes?` — se puede activar en el futuro.

---

## Categorías pendientes de verificar variantes

Antes de dar por cerrada la homologación completa L4, verificar:

1. **`senalamientos`** — leer `senalamientos-productos.ts` y confirmar que cada producto tiene `variantes: [...]` con mínimo 4 items
2. **`equipo-seguridad`** — ídem con `equipo-seguridad-productos.ts`

Si no tienen variantes: agregar el mismo patrón documentado en este archivo.

---

## Imports CSS requeridos por el template

```astro
import '../../styles/product-page.css'  // .l4-svc-grid, .srv-mini, .inline-cta
import '../../styles/pages.css'          // .catidx-grid, .ccard, .ccard--cta-wa, .cat-section, .cat-section--white/gray
```

Los estilos scoped `.ccard--text`, `.ccard__badge--top` y `.catidx-grid--compact` se definen en un `<style>` al final de cada `[producto].astro` (no son globales).

---

## CSS global disponible (pages.css)

```
.cat-section               → padding vertical unificado para secciones L4
.cat-section--white        → fondo #FFFFFF
.cat-section--gray         → fondo #F8F8F8
.catidx-grid               → grid de ccards (variantes)
.ccard                     → card con imagen
.ccard__header             → header 16:9 de la card
.ccard__header--placeholder → fondo gris con SVG de imagen próximamente
.ccard__header-overlay     → gradiente oscuro sobre la imagen
.ccard__badge              → badge rojo superpuesto en la imagen
.ccard__content            → área de texto de la card
.ccard__title              → título con borde izquierdo rojo
.ccard__desc               → descripción
.ccard__specs              → línea de specs monoespaciada
.ccard__cta                → link interno de cotizar
.ccard--cta-wa             → card CTA de WhatsApp (fondo oscuro)
```
