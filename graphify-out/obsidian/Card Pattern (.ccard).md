---
source_file: "src/styles/pages.css + src/pages/*/[producto].astro"
type: "concept"
community: "Arquitectura Astro y Frontend"
updated: "2026-04-12"
tags:
  - graphify/concept
  - graphify/EXTRACTED
  - community/Arquitectura_Astro_y_Frontend
---

# Card Pattern (.ccard)

## Connections
- [[Sistema de Layouts (L1-L5)]] - `references` [EXTRACTED]
- [[pages.css Stylesheet]] - `references` [EXTRACTED]
- [[SectionHeaderDuo Component]] - `used_with` [EXTRACTED]

---

## Estructura base del .ccard

```html
<article class="ccard">
  <div class="ccard__header">           <!-- aspect-ratio 16:9, SIEMPRE presente en L4 variantes -->
    <img / Img.astro />                 <!-- imagen real -->
    <div class="ccard__header-overlay"></div>  <!-- gradiente negro bottom -->
    <span class="ccard__badge">Badge</span>    <!-- etiqueta roja top-left -->
  </div>
  <div class="ccard__content">
    <h3 class="ccard__title">Título</h3>
    <p  class="ccard__desc">Descripción</p>
    <p  class="ccard__specs">Especificaciones</p>
    <a  class="ccard__cta">CTA →</a>
  </div>
</article>
```

---

## Patrón de placeholder de imagen (2026-04-12)

**Regla vigente**: Toda card de variante en L4 **siempre** renderiza `.ccard__header`.
Si el producto tiene `data.img` → imagen real. Si no → placeholder visual que comunica "aquí irá la imagen" sin romper el layout.

### Clases CSS (en `pages.css`, globales):

| Clase | Propósito |
|-------|-----------|
| `.ccard__header--placeholder` | Fondo gris gradiente cuando no hay imagen |
| `.ccard__placeholder-icon` | Contenedor del icono SVG centrado |
| `.ccard__placeholder-label` | Texto "Imagen próximamente" |

### Template Astro (patrón canónico para todos los L4):

```astro
<div class:list={['ccard__header', !imgSrc && 'ccard__header--placeholder']}>
  {imgSrc ? (
    <Img src={imgSrc} alt={v.nombre} ... />
  ) : (
    <div class="ccard__placeholder-icon" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <circle cx="8.5" cy="8.5" r="1.5"/>
        <polyline points="21 15 16 10 5 21"/>
      </svg>
      <span class="ccard__placeholder-label">Imagen próximamente</span>
    </div>
  )}
  {imgSrc && <div class="ccard__header-overlay" aria-hidden="true"></div>}
  {v.badge && <span class="ccard__badge">{v.badge}</span>}
</div>
```

**Activar imagen real para un producto**: Agregar `img: '/imagenes/categoria/producto.avif'` al objeto `ProductoXxxData` correspondiente en `src/data/xxx-productos.ts`.

### Estado actual por categoría:

| Categoría | img definido | Resultado |
|-----------|-------------|-----------|
| `/extintores/` | ✅ Siempre (`v.img ?? data.img`) | Imagen real |
| `/equipo-bomberos/` | Parcial (trajes, ERA, rescate, arneses) | Real o placeholder |
| `/gabinetes/` | ❌ Pendiente | Placeholder en todos |

---

## Variantes de .ccard

### ccard--text (sin header/imagen)
Usada en S6 "Otros productos" — grid compacto de navegación entre productos de la misma categoría. No tiene `.ccard__header`.

```html
<article class="ccard ccard--text">
  <div class="ccard__content">
    <span class="ccard__badge ccard__badge--top">Badge</span>
    <h3 class="ccard__title">Título</h3>
    <a class="ccard__cta">Ver detalles →</a>
  </div>
</article>
```

### ccard--cta-wa (tarjeta WhatsApp)
Siempre la **última tarjeta** en cualquier `.catidx-grid`. Redirige al WhatsApp del negocio.

```html
<article class="ccard ccard--cta-wa">
  <a href={waUrl(...)} class="ccard--cta-wa__inner" target="_blank">
    <div class="ccard--cta-wa__icon"><!-- WhatsApp SVG --></div>
    <p class="ccard--cta-wa__title">¿No encuentras lo que necesitas?</p>
    <p class="ccard--cta-wa__sub">Descripción CTA</p>
    <span class="ccard--cta-wa__btn">Asesoría por WhatsApp →</span>
  </a>
</article>
```

---

## Grid containers

| Clase | Uso |
|-------|-----|
| `.catidx-grid` | Grid principal de variantes en S0 (auto-fill, minmax 280px) |
| `.catidx-grid--compact` | Grid secundario en S6 "Otros productos" (minmax 220px) |

#graphify/concept #graphify/EXTRACTED #community/Arquitectura_Astro_y_Frontend
