# Layout de Página de Producto — Proyecto Red

> **Archivo de referencia:** `pqs-1-kg.astro`
> **Última actualización:** 2026-04-06
> **Uso:** Copiar este layout para crear nuevas páginas de producto individuales.

---

## Estructura General de la Página

La página se compone de **8 secciones** en este orden exacto:

```
1. HERO           → pages.css (hero, hero-grid, hero-left, hero-right)
2. CTA BAR        → Componente <CtaBar /> (sin props)
3. MÉTRICAS       → pages.css (metricas-section, metricas-grid)
4. LAYOUT 2 COL   → Scoped CSS (pp-layout, pp-main, sb)
   ├─ MAIN (izq)  → Galería + Descripción + Secciones de contenido
   └─ SIDEBAR (der) → 8 widgets sticky
5. OTROS PRODUCTOS → Scoped CSS (pp-otros) — grid fijo de 4 cards
6. COTIZACIÓN     → Scoped CSS (pp-cotizar) — fondo oscuro con CTA WhatsApp
7. FAQs           → Componente <FaqCotizacion />
8. FOOTER         → Viene del layout Base.astro
```

---

## 1. Imports y Frontmatter

### Imports obligatorios

```astro
---
import Base from '../../../layouts/Base.astro';
import CtaBar from '../../../components/CtaBar.astro';
import FaqCotizacion from '../../../components/FaqCotizacion.astro';
import '../../../styles/pages.css';

const WHATSAPP = "525537238544";
const WA_URL = `https://wa.me/${WHATSAPP}`;
---
```

> **IMPORTANTE:** La ruta de imports cambia según la profundidad del archivo.
> Para `/extintores/polvo-seco/pqs-1-kg.astro` se usa `../../../`.

### Datos del Frontmatter

Cada producto debe definir estos objetos:

```javascript
// ── SEO ──
const seo = {
  title: "Nombre Producto — Categoría | Proyecto Red",
  description: "Descripción SEO de 150-160 caracteres con keywords principales.",
};

// ── BREADCRUMBS ── (siempre 4 niveles)
const breadcrumbs = [
  { label: "Inicio", href: "/" },
  { label: "Extintores", href: "/extintores/" },
  { label: "Polvo Seco PQS", href: "/extintores/polvo-seco/" },
  { label: "PQS 1 kg Vehicular" },  // último SIN href
];

// ── HERO STATS ── (exactamente 3 items — el 4to se agrega en HTML como certificación)
const heroStats = [
  { valor: "1 kg", label: "Capacidad" },
  { valor: "A·B·C", label: "Clases de fuego" },
  { valor: "~6 s", label: "Descarga" },
];

// ── ESPECIFICACIONES TÉCNICAS ── (array de {label, value})
const specs = [
  { label: "Agente extintor", value: "Polvo químico seco ABC (fosfato monoamónico 75%)" },
  { label: "Capacidad nominal", value: "1 kg" },
  // ... todas las specs del producto
];

// ── CARACTERÍSTICAS CLAVE ── (4-6 strings cortos para el sidebar)
const caracteristicas = [
  "Soporte metálico vehicular incluido",
  "Manómetro verificado en zona verde",
  // ...
];

// ── APLICACIONES ── (lista de usos del producto)
const aplicaciones = [
  "Automóviles particulares",
  "Taxis y plataformas digitales",
  // ...
];

// ── NAVEGACIÓN SIDEBAR ── (categorías de la misma familia de producto)
const categoriasNav = [
  { label: "Portátiles (1–3 kg)", href: "/extintores/polvo-seco/", active: true },
  { label: "Estándar (4.5–12 kg)", href: "/extintores/polvo-seco/" },
  { label: "Automáticos (techo)", href: "/extintores/polvo-seco/" },
  { label: "Con gabinete", href: "/extintores/polvo-seco/" },
  { label: "Rodantes (25–50 kg)", href: "/extintores/polvo-seco/" },
];

// ── PRODUCTOS RELACIONADOS ── (para sidebar, solo nombre + href)
const productosRelacionados = [
  { nombre: "PQS 2 kg", href: "/extintores/polvo-seco/pqs-2-kg/" },
  { nombre: "PQS 3 kg", href: "/extintores/polvo-seco/pqs-3-kg/" },
  // ... 4-6 productos
];

// ── OTROS PRODUCTOS ── (para grid de 4 cards debajo del layout)
const otrosProductos = [
  {
    nombre: "PQS 2 kg — Compacto",
    desc: "Descripción breve de 1-2 líneas.",
    specs: ["2 kg", "~8 s", "2–3 m"],  // exactamente 3 specs cortas
    href: "/extintores/polvo-seco/pqs-2-kg/",
    img: "/imagenes/extintores/polvo-seco.jpg",
  },
  // ... exactamente 4 productos
];

// ── FAQs ── (5-7 preguntas con HTML en respuestas)
const faqs = [
  {
    pregunta: "¿Pregunta frecuente?",
    respuesta: "Respuesta con <strong>negritas</strong> para datos clave.",
  },
  // ...
];
```

---

## 2. Sección HERO

Usa las clases compartidas de `pages.css` y `Base.astro`. **No usar clases custom.**

```astro
<Base title={seo.title} description={seo.description}>

  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-left">
        <!-- Breadcrumb -->
        <nav class="breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((b, i) => (
            <>
              {i > 0 && <span class="breadcrumb__sep" aria-hidden="true">/</span>}
              {b.href
                ? <a href={b.href} class="breadcrumb__link">{b.label}</a>
                : <span class="breadcrumb__current" aria-current="page">{b.label}</span>
              }
            </>
          ))}
        </nav>

        <!-- Badge -->
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Vehicular · Polvo ABC · NOM-154-SCFI  <!-- Keywords del producto -->
        </div>

        <!-- H1 con accent -->
        <h1>Extintor PQS 1 kg<br><span class="h1-accent">Vehicular</span></h1>

        <!-- Descripción corta -->
        <p class="hero-sub">
          Descripción del producto en 2-3 líneas. Incluir datos clave como
          medidas, peso, certificaciones y beneficio principal.
        </p>

        <!-- CTAs -->
        <div class="hero-ctas">
          <a
            href={`${WA_URL}?text=Hola%2C%20necesito%20cotizar%20el%20[PRODUCTO]`}
            class="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- SVG de WhatsApp (ver archivo de referencia) -->
            Solicitar Cotización
          </a>
          <a href="/extintores/polvo-seco/" class="btn-secondary">Ver Catálogo PQS</a>
        </div>
      </div>

      <div class="hero-right">
        <p>Párrafo descriptivo ampliado sobre el producto. Agente activo,
        funcionamiento, clases de fuego que cubre.</p>
        <p>Segundo párrafo sobre qué incluye la unidad, certificaciones
        y garantías.</p>
      </div>
    </div>
  </section>
```

### Clases del Hero (vienen de pages.css y Base.astro)

| Clase | Fuente | Función |
|-------|--------|---------|
| `.hero` | pages.css | Fondo oscuro con gradiente radial rojo sutil |
| `.hero-grid` | pages.css | Grid 2 columnas `1fr 1fr`, gap 4rem |
| `.hero-left` | — | Columna izquierda (breadcrumb + badge + H1 + CTAs) |
| `.hero-right p` | pages.css | Texto blanco con 55% opacidad |
| `.breadcrumb` | pages.css | Flex con separadores `/` |
| `.hero-badge` | pages.css | Pill con borde rojo, dot animado |
| `.badge-dot` | pages.css | Punto rojo 6px |
| `.h1-accent` | pages.css | Color `var(--c-primary)` (#C41E24) |
| `.hero-sub` | pages.css | Texto con 65% opacidad, max-width 52ch |
| `.hero-ctas` | pages.css | Flex con gap 0.875rem |
| `.btn-primary` | Base.astro | Botón rojo sólido |
| `.btn-secondary` | Base.astro | Botón outline blanco |

---

## 3. CTA Bar

Componente compartido sin props. Se coloca inmediatamente después del hero.

```astro
  <CtaBar />
```

Renderiza 4 cards horizontales: Servicios, Equipo Bomberos, Sistemas CI, Cotización Gratuita.

---

## 4. Métricas

Barra roja con 4 métricas. Usa `heroStats` + 1 métrica de certificación fija.

```astro
  <section class="metricas-section" aria-label="Datos técnicos del [PRODUCTO]">
    <div class="container">
      <div class="metricas-grid">
        {heroStats.map(m => (
          <div class="metrica-item">
            <span class="metrica-valor">{m.valor}</span>
            <span class="metrica-label">{m.label}</span>
          </div>
        ))}
        <div class="metrica-item">
          <span class="metrica-valor">NOM-154</span>
          <span class="metrica-label">Certificación vigente</span>
        </div>
      </div>
    </div>
  </section>
```

### Clases (pages.css)

| Clase | Función |
|-------|---------|
| `.metricas-section` | Fondo `var(--c-primary)`, padding 2rem |
| `.metricas-grid` | Grid 4 columnas iguales |
| `.metrica-valor` | 1.875rem, weight 800, blanco |
| `.metrica-label` | 0.8125rem, 70% opacidad |

---

## 5. Layout 2 Columnas (Main + Sidebar)

### Contenedor

```astro
  <div class="pp-layout container">
    <main class="pp-main">
      <!-- Contenido principal -->
    </main>
    <aside class="sb">
      <!-- 8 widgets -->
    </aside>
  </div>
```

### CSS del layout (scoped)

```css
.pp-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  padding-top: 2.5rem;
  padding-bottom: 3rem;
  align-items: start;
}
.pp-main { min-width: 0; }
```

### 5A. Columna Principal — Secciones en orden

#### Galería 2×2

```astro
<div class="pp-gallery">
  <div class="pp-gallery__col">
    <img src="/imagenes/..." alt="Vista frontal" width="400" height="300" loading="eager" />
    <img src="/imagenes/..." alt="Detalle" width="400" height="300" loading="eager" />
  </div>
  <div class="pp-gallery__col">
    <img src="/imagenes/..." alt="Accesorio" width="400" height="300" loading="eager" />
    <img src="/imagenes/..." alt="Instalación" width="400" height="300" loading="eager" />
  </div>
</div>
```

```css
.pp-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.75rem; border-radius: 10px; overflow: hidden; }
.pp-gallery__col { display: flex; flex-direction: column; gap: 0.5rem; }
.pp-gallery img { width: 100%; height: 200px; object-fit: cover; display: block; background: #f5f5f5; border-radius: 6px; }
```

#### Descripción

```astro
<div class="pp-desc">
  <p>Párrafo principal con <strong>negritas</strong> para datos clave.</p>
  <p>Segundo párrafo con detalles de entrega y accesorios.</p>
  <p><strong>Capacidad:</strong> X kg. <strong>Material:</strong> Y. <strong>Certificación:</strong> Z.</p>
</div>
```

#### Bloques de contenido (`pp-block`)

Cada sección de contenido usa la clase `.pp-block`:

```astro
<!-- Especificaciones Técnicas (tabla) -->
<section class="pp-block">
  <h2>Especificaciones Técnicas</h2>
  <table class="pp-table">
    <tbody>
      {specs.map(s => (
        <tr>
          <td class="pp-table__label">{s.label}</td>
          <td class="pp-table__value">{s.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>

<!-- Características Destacadas (lista con checks) -->
<section class="pp-block">
  <h2>Características Destacadas</h2>
  <ul class="pp-features">
    <li><strong>Título</strong> — Descripción del beneficio.</li>
  </ul>
</section>

<!-- Aplicaciones (lista con bullets rojos) -->
<section class="pp-block">
  <h2>Aplicaciones</h2>
  <ul class="pp-app-list">
    <li>Aplicación 1</li>
    <li>Aplicación 2</li>
  </ul>
</section>

<!-- Sección de texto libre -->
<section class="pp-block">
  <h2>Título de Sección</h2>
  <p>Contenido libre con <strong>negritas</strong> para datos clave.</p>
</section>

<!-- Normativa -->
<section class="pp-block">
  <h2>Cumplimiento Normativo</h2>
  <p>Normas que aplican: <strong>NOM-154-SCFI</strong>, <strong>NFPA 10</strong>, etc.</p>
</section>

<!-- Specs Mini (resumen al final) -->
<section class="pp-block">
  <h2>Especificaciones Técnicas</h2>
  <div class="pp-specs-mini">
    <div class="pp-specs-mini__item"><span>Capacidad</span><span>1 kg</span></div>
    <div class="pp-specs-mini__item"><span>Material</span><span>Acero al carbón</span></div>
    <div class="pp-specs-mini__item"><span>Certificación</span><span>NOM-154-SCFI</span></div>
    <div class="pp-specs-mini__item"><span>Clases de fuego</span><span>A · B · C</span></div>
    <div class="pp-specs-mini__item"><span>Categoría</span><span>Nombre de la categoría</span></div>
  </div>
</section>
```

### 5B. Sidebar — 8 Widgets en orden

El sidebar usa `position: sticky; top: 32px;` con 8 widgets separados por `gap: 20px`.

```astro
<aside class="sb">

  <!-- WIDGET 1: Navegación de categorías -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Extintores PQS</h3></div>
    <nav class="sb__nav" aria-label="Categorías">
      <ul>
        {categoriasNav.map(c => (
          <li><a href={c.href} class={c.active ? 'sb__nav-active' : ''}>{c.label}</a></li>
        ))}
      </ul>
    </nav>
    <a href="/extintores/polvo-seco/" class="sb__back">← Ver todo el catálogo PQS</a>
  </div>

  <!-- WIDGET 2: Cotización Rápida (gradient oscuro) -->
  <div class="sb__widget sb__widget--cta">
    <h3>Cotización Rápida</h3>
    <p class="sb__cta-text">Respuesta en menos de 24 horas con precio y disponibilidad.</p>
    <a href="#cotizar" class="sb__btn sb__btn--solid">Solicitar Cotización</a>
    <a href={`${WA_URL}?text=...`} class="sb__btn sb__btn--outline" target="_blank" rel="noopener noreferrer">WhatsApp Directo</a>
    <p class="sb__tel">Tel: <a href="tel:+525537238544">55 3723 8544</a></p>
  </div>

  <!-- WIDGET 3: Características Clave -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Características Clave</h3></div>
    <ul class="sb__checks">
      {caracteristicas.map(c => (
        <li><span class="sb__check-icon">✓</span><span>{c}</span></li>
      ))}
    </ul>
  </div>

  <!-- WIDGET 4: Certificaciones -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Certificaciones Disponibles</h3></div>
    <div class="sb__certs">
      <div class="sb__cert"><span class="sb__cert-badge">NOM</span><span class="sb__cert-name">NOM-154-SCFI</span></div>
      <!-- Agregar las certificaciones que apliquen -->
    </div>
  </div>

  <!-- WIDGET 5: Marcas -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Marcas que Manejamos</h3></div>
    <ul class="sb__brands">
      <li>Proyecto Red — Marca propia</li>
      <li>Extintores certificados NOM</li>
    </ul>
    <p class="sb__note">Pregunta por otras marcas</p>
  </div>

  <!-- WIDGET 6: Aplicaciones -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Aplicaciones</h3></div>
    <ul class="sb__app-list">
      {aplicaciones.map(a => (
        <li>{a}</li>
      ))}
    </ul>
  </div>

  <!-- WIDGET 7: Productos Relacionados -->
  <div class="sb__widget">
    <div class="sb__header"><h3>Productos Relacionados</h3></div>
    <ul class="sb__products">
      {productosRelacionados.map(p => (
        <li><a href={p.href}>{p.nombre}</a></li>
      ))}
      <!-- Agregar 2 links a otras categorías -->
      <li><a href="/extintores/co2/">Extintores CO₂</a></li>
      <li><a href="/extintores/tipo-k/">Extintores Tipo K</a></li>
    </ul>
  </div>

  <!-- WIDGET 8: Servicios -->
  <div class="sb__widget sb__widget--services">
    <div class="sb__header"><h3>Servicios Proyecto Red</h3></div>
    <p class="sb__services-desc">Complementa tu compra con mantenimiento y capacitación profesional.</p>
    <ul class="sb__services">
      <li><a href="/servicios/recarga-extintores/">Recarga de extintores</a></li>
      <li><a href="/servicios/mantenimiento-preventivo/">Mantenimiento preventivo</a></li>
      <li><a href="/servicios/prueba-hidrostatica/">Prueba hidrostática</a></li>
      <li><a href="/servicios/capacitacion-brigadas/">Capacitación DC-3</a></li>
    </ul>
    <a href="/servicios/" class="sb__services-link">¿Necesitas más servicios? Ver todos →</a>
  </div>

</aside>
```

---

## 6. Otros Productos (Grid fijo de 4 cards)

```astro
<section class="pp-otros">
  <div class="container">
    <h2 class="pp-otros__title">Otros Extintores PQS Disponibles</h2>
    <p class="pp-otros__sub">Explora más opciones según tu aplicación específica</p>
    <a href="/extintores/polvo-seco/" class="pp-otros__link">Ver todo el catálogo PQS →</a>
    <div class="pp-otros__grid">
      {otrosProductos.map(p => (
        <a href={p.href} class="pp-otros__card">
          <div class="pp-otros__img">
            <img src={p.img} alt={p.nombre} width="400" height="220" loading="lazy" />
          </div>
          <div class="pp-otros__body">
            <h3 class="pp-otros__name">{p.nombre}</h3>
            <p class="pp-otros__desc">{p.desc}</p>
            <ul class="pp-otros__specs">
              {p.specs.map(s => (<li>{s}</li>))}
            </ul>
            <span class="pp-otros__cta">
              {p.nombre.split(' — ')[0]}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
```

**REGLAS:**
- Exactamente **4 cards** en `otrosProductos`
- Grid fijo: `repeat(4, 1fr)` — SIN scroll, SIN animaciones
- Solo la flecha del CTA tiene transición hover
- Cada card tiene 3 specs en pills rojos

---

## 7. Cotización

```astro
<section class="pp-cotizar" id="cotizar">
  <div class="container pp-cotizar__inner">
    <div class="pp-cotizar__info">
      <h2>Cotiza [Nombre Producto]</h2>
      <p class="pp-cotizar__sub">Precio y disponibilidad en menos de 24 horas</p>
      <ul class="pp-cotizar__perks">
        <li>Asesoría técnica sin costo</li>
        <li>Entrega el mismo día en CDMX</li>
        <li>Factura electrónica disponible</li>
      </ul>
    </div>
    <div class="pp-cotizar__form">
      <a
        href={`${WA_URL}?text=Hola%2C%20necesito%20cotizar%20[PRODUCTO_URL_ENCODED]`}
        class="btn-primary"
        style="background:#25D366;font-size:0.95rem;padding:0.85rem 1.8rem;"
        target="_blank"
        rel="noopener noreferrer"
      >
        <!-- SVG WhatsApp -->
        Enviar por WhatsApp
      </a>
      <p class="pp-cotizar__note">Sin compromiso · Atención personalizada · Te respondemos al instante</p>
      <p class="pp-cotizar__alt">También puedes llamarnos: <a href="tel:+525537238544">55 3723 8544</a></p>
    </div>
  </div>
</section>
```

---

## 8. FAQs

```astro
<FaqCotizacion
  titulo="Preguntas Frecuentes"
  subtitulo="Todo sobre el [nombre producto]"
  pageId="[slug-del-producto]"
  bgGray={false}
  faqs={faqs}
/>

</Base>
```

---

## 9. CSS Scoped Completo

Todo el CSS scoped va dentro de `<style>` al final del archivo, **después de `</Base>`**.

### Estilos compartidos (NO incluir en scoped)

Estos ya están en `pages.css` y `Base.astro`:
- `.hero`, `.hero-grid`, `.hero-left`, `.hero-right`
- `.breadcrumb`, `.breadcrumb__link`, `.breadcrumb__sep`, `.breadcrumb__current`
- `.hero-badge`, `.badge-dot`, `.h1-accent`, `.hero-sub`, `.hero-ctas`
- `.btn-primary`, `.btn-secondary`
- `.metricas-section`, `.metricas-grid`, `.metrica-item`, `.metrica-valor`, `.metrica-label`
- `.container`

### Estilos scoped (SÍ incluir)

Copiar completo de `pqs-1-kg.astro` el bloque `<style>`:
- `.pp-layout` — grid 2 columnas
- `.pp-main` — columna principal
- `.pp-gallery`, `.pp-gallery__col`, `.pp-gallery img`
- `.pp-desc`, `.pp-block`, `.pp-table`, `.pp-features`, `.pp-app-list`, `.pp-specs-mini`
- `.sb`, `.sb__widget`, `.sb__header`, `.sb__nav`, `.sb__widget--cta`, `.sb__btn`, `.sb__checks`, `.sb__certs`, `.sb__brands`, `.sb__app-list`, `.sb__products`, `.sb__services`
- `.pp-otros`, `.pp-otros__grid`, `.pp-otros__card`, `.pp-otros__img`, `.pp-otros__body`, `.pp-otros__cta`
- `.pp-cotizar`, `.pp-cotizar__inner`, `.pp-cotizar__info`, `.pp-cotizar__form`, `.pp-cotizar__perks`
- Breakpoints responsive: 1024px, 768px, 560px

---

## 10. Responsive Breakpoints

| Breakpoint | Cambios |
|-----------|---------|
| `≤ 1024px` | Layout 1 columna, sidebar en grid 2 cols, otros productos en 2 cols, cotización 1 col |
| `≤ 768px` | H1 más pequeño, sidebar 1 col, specs-mini 1 col |
| `≤ 560px` | Otros productos 1 col, perks de cotización en columna |

---

## 11. Checklist para Nuevo Producto

Al crear una nueva página de producto:

- [ ] Copiar `pqs-1-kg.astro` como template
- [ ] Actualizar `seo.title` y `seo.description` con keywords del producto
- [ ] Actualizar `breadcrumbs` (último item sin href)
- [ ] Actualizar `heroStats` con las 3 métricas del producto
- [ ] Actualizar texto del `hero-badge` con keywords del producto
- [ ] Actualizar `<h1>` con nombre y `<span class="h1-accent">` con subtítulo
- [ ] Actualizar `hero-sub` con descripción corta
- [ ] Actualizar URL del botón WhatsApp con el nombre del producto URL-encoded
- [ ] Actualizar `btn-secondary` href al catálogo correcto
- [ ] Actualizar textos de `hero-right`
- [ ] Actualizar 4ta métrica si cambia la certificación principal
- [ ] Actualizar `specs` con todas las especificaciones
- [ ] Actualizar `caracteristicas` (4-6 items)
- [ ] Actualizar `aplicaciones`
- [ ] Actualizar `categoriasNav` — marcar `active: true` en la categoría correcta
- [ ] Actualizar `productosRelacionados` (4-6 items)
- [ ] Actualizar `otrosProductos` — exactamente 4 items con nombre, desc, 3 specs, href, img
- [ ] Actualizar `faqs` — 5-7 preguntas relevantes
- [ ] Actualizar imágenes en la galería 2×2 (4 imágenes con alts descriptivos)
- [ ] Actualizar texto de `pp-desc`
- [ ] Actualizar secciones `pp-block` (características, aplicaciones, sección libre, normativa)
- [ ] Actualizar `pp-specs-mini` al final
- [ ] Actualizar título y texto de `pp-cotizar`
- [ ] Actualizar `pageId` y `subtitulo` en `FaqCotizacion`
- [ ] Verificar que `pp-otros` apunte a productos existentes con sus URLs correctas
- [ ] Verificar responsive en 1024px, 768px y 560px

---

## 12. Variables CSS del Proyecto

```css
--c-primary: #C41E24;        /* Rojo Proyecto Red */
--c-primary-dark: #a31920;   /* Hover del rojo */
--c-primary-light: #fef2f2;  /* Fondo light para badges */
--c-ink: #111111;             /* Texto principal */
--c-ink-2: #555555;           /* Texto secundario */
--c-muted: #888888;           /* Texto muted */
--c-border: #e5e5e5;          /* Bordes */
--c-surface: #f9f9f9;         /* Fondo sutil */
--c-white: #ffffff;
```

---

## 13. Reglas de Diseño

1. **SIN animaciones** en cards ni secciones — SOLO la flecha del CTA en hover
2. **Sidebar sticky** a `top: 32px` en desktop, grid 2 cols en tablet, 1 col en móvil
3. **Otros productos:** siempre 4 cards en grid fijo — nunca scroll horizontal
4. **Imágenes de galería:** `height: 200px` con `object-fit: cover`
5. **Font:** Outfit (400-800 weights) — viene de `Base.astro`
6. **WhatsApp:** número `525537238544`, siempre abrir en `_blank`
7. **ID `#cotizar`** en la sección de cotización para anchor links
