# 🏗️ Estudio Técnico, Estructural y Visual — Proyecto Red
**Fecha:** 2026-04-02 | **Stack objetivo:** Astro 4 + Markdown + CSS Custom Properties

---

## 1. ESTADO ACTUAL — Análisis del Sitio Live

### 1.1 Patrón repetido en todas las páginas Nivel 2

Al analizar las 5 páginas de categoría (Productos, Servicios, Cobertura, Blog, Contacto) se confirma que **todas comparten exactamente la misma estructura modular**, pero el código está probablemente duplicado en lugar de componentizado:

| Módulo | Home | Productos | Servicios | Cobertura | Blog | Contacto |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| TopBar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Header/Nav | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Hero (dark) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| QuickLinks bar | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Stats bar (roja) | — | ✅ | ✅ | ✅ | ✅ | ✅ |
| Contenido único | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| FAQ + Form | ✅ | ✅ | ✅ | — | — | ✅ |
| CTA Final | ✅ | ✅ | ✅ | ✅ | — | ✅ |
| Footer | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| WhatsApp float | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### 1.2 Estructura del Hero (idéntica en todas las páginas)

```
[Breadcrumb: Inicio > Página]
[Badge pill: "• Texto descriptivo"]
[H1: Título con  acento rojo en última palabra]
[Párrafo izquierdo corto]      [Párrafos explicativos derecha]
[CTA1: Rojo — WhatsApp]
[CTA2: Outline — Anchor/Link]
```

### 1.3 Inconsistencias detectadas

| Problema | Ubicación | Solución |
|---|---|---|
| Horario diferente | TopBar: Lun-Vie 8-18h vs Footer: Lun-Dom 6-18h | Unificar en un solo token/constante |
| URL Cobertura | En nav apunta a `/empresas/` pero en menú dice "Cobertura" | Renombrar a `/cobertura/` o mantener + corregir labels |
| Form duplicado | Aparece en Productos, Contacto y Home | Extraer a componente único `<CotizacionForm />` |
| QuickLinks | Idéntico en 5 páginas con código repetido | Extraer a componente `<QuickLinks />` sin props |

---

## 2. SISTEMA DE DISEÑO — Design Tokens

### 2.1 Colores

```css
:root {
  /* Primarios */
  --color-red:        #C41E3A;   /* Rojo principal Proyecto Red */
  --color-red-hover:  #A01830;   /* Hover botones rojos */
  --color-red-light:  #E8213F;   /* Acento en títulos */

  /* Neutros */
  --color-black:      #0A0A0A;   /* Fondo hero/dark sections */
  --color-dark:       #111111;   /* Variante oscura */
  --color-white:      #FFFFFF;   /* Texto sobre oscuro */
  --color-gray-100:   #F5F5F5;   /* Fondo secciones claras */
  --color-gray-200:   #E8E8E8;   /* Bordes, separadores */
  --color-gray-500:   #6B7280;   /* Texto secundario */
  --color-gray-700:   #374151;   /* Texto oscuro sobre blanco */

  /* Semánticos */
  --color-bg-hero:    var(--color-black);
  --color-bg-stats:   var(--color-red);
  --color-bg-light:   var(--color-gray-100);
  --color-text-light: var(--color-white);
  --color-text-dark:  var(--color-gray-700);
  --color-accent:     var(--color-red-light);
}
```

### 2.2 Tipografía

```css
:root {
  /* Familias */
  --font-display: 'Inter', system-ui, sans-serif;  /* Headings */
  --font-body:    'Inter', system-ui, sans-serif;  /* Body */

  /* Tamaños — escala fluid */
  --text-xs:   clamp(0.75rem,  1vw,  0.875rem);
  --text-sm:   clamp(0.875rem, 1vw,  1rem);
  --text-base: clamp(1rem,     1vw,  1.125rem);
  --text-lg:   clamp(1.125rem, 1.5vw, 1.25rem);
  --text-xl:   clamp(1.25rem,  2vw,  1.5rem);
  --text-2xl:  clamp(1.5rem,   2.5vw, 2rem);
  --text-3xl:  clamp(2rem,     4vw,  3rem);
  --text-4xl:  clamp(2.5rem,   5vw,  3.75rem);

  /* Pesos */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;
}
```

### 2.3 Espaciado (escala de 8px)

```css
:root {
  --space-1:  0.25rem;   /* 4px */
  --space-2:  0.5rem;    /* 8px */
  --space-3:  0.75rem;   /* 12px */
  --space-4:  1rem;      /* 16px */
  --space-6:  1.5rem;    /* 24px */
  --space-8:  2rem;      /* 32px */
  --space-10: 2.5rem;    /* 40px */
  --space-12: 3rem;      /* 48px */
  --space-16: 4rem;      /* 64px */
  --space-20: 5rem;      /* 80px */
  --space-24: 6rem;      /* 96px */
  --space-32: 8rem;      /* 128px */

  /* Secciones */
  --section-py:      var(--space-20);
  --section-py-sm:   var(--space-12);
  --container-px:    var(--space-6);
  --container-max:   1280px;
}
```

### 2.4 Efectos

```css
:root {
  --radius-sm:   0.25rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1rem;
  --radius-full: 9999px;

  --shadow-sm:  0 1px 3px rgba(0,0,0,0.12);
  --shadow-md:  0 4px 12px rgba(0,0,0,0.15);
  --shadow-lg:  0 8px 24px rgba(0,0,0,0.18);

  --transition: 200ms ease;
  --transition-slow: 350ms ease;
}
```

---

## 3. ARQUITECTURA ASTRO — Estructura de Proyecto

```
proyectored/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── images/
│       └── categorias/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro           # Raíz: <html>, head, TopBar, Header, Footer, WA
│   │   └── CategoryLayout.astro       # Extiende Base + Hero + QuickLinks + StatsBar
│   │
│   ├── components/
│   │   ├── global/
│   │   │   ├── TopBar.astro           # Barra superior roja
│   │   │   ├── Header.astro           # Nav + mega menú
│   │   │   ├── Footer.astro           # Footer completo
│   │   │   └── WhatsAppButton.astro   # Botón flotante
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.astro             # Hero oscuro reutilizable (props)
│   │   │   ├── QuickLinks.astro       # 4 accesos rápidos (estático)
│   │   │   ├── StatsBar.astro         # Barra roja de métricas (props)
│   │   │   ├── CotizacionForm.astro   # Formulario de cotización
│   │   │   ├── FAQ.astro              # Acordeón de preguntas (props)
│   │   │   └── CTAFinal.astro         # CTA de cierre (props)
│   │   │
│   │   └── ui/
│   │       ├── Breadcrumb.astro       # Breadcrumb (props: items[])
│   │       ├── Badge.astro            # Pill badge (props: text)
│   │       ├── Button.astro           # Botón reutilizable (props: variant)
│   │       └── SectionHeader.astro    # Encabezado de sección
│   │
│   ├── pages/
│   │   ├── index.astro                # Home
│   │   ├── productos/
│   │   │   └── index.astro            # Catálogo /productos/
│   │   ├── servicios/
│   │   │   └── index.astro            # Servicios /servicios/
│   │   ├── empresas/
│   │   │   ├── index.astro            # Cobertura /empresas/
│   │   │   ├── cdmx.astro
│   │   │   ├── edomex.astro
│   │   │   └── [estado].astro         # Páginas dinámicas por estado
│   │   ├── blog/
│   │   │   ├── index.astro            # Listado del blog
│   │   │   └── [slug].astro           # Artículo individual
│   │   └── contacto.astro             # Página de contacto
│   │
│   ├── content/
│   │   ├── config.ts                  # Zod schemas para colecciones
│   │   ├── blog/
│   │   │   ├── incendios-restaurantes.md
│   │   │   ├── regulaciones-extintores-electricos.md
│   │   │   └── seguridad-condominios.md
│   │   ├── productos/
│   │   │   └── [categorias].md        # Datos de cada categoría
│   │   └── servicios/
│   │       └── [servicios].md         # Datos de cada servicio
│   │
│   └── styles/
│       ├── global.css                 # Reset + tokens + base
│       └── components.css             # Estilos compartidos
│
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 4. COMPONENTES — Props y API

### `<Hero>` — El componente más reutilizado

```typescript
interface HeroProps {
  badge: string              // "Catálogo certificado NOM y NFPA"
  title: string              // "Catálogo de Equipos"
  titleAccent: string        // "Incendios"  ← palabra en rojo
  subtitle: string           // Párrafo izquierdo corto
  descRight: string[]        // Array de párrafos derecha
  cta1Text: string           // "Solicitar cotización"
  cta1Href: string           // WhatsApp URL
  cta1Icon?: boolean         // Mostrar ícono WhatsApp (default: true)
  cta2Text: string           // "Ver catálogo completo"
  cta2Href: string           // "#catalogo" o URL
  breadcrumb: BreadcrumbItem[]
}
```

### `<StatsBar>` — Métricas por página

```typescript
interface Stat {
  value: string    // "8+" | "50+" | "NOM" | "24h"
  label: string    // "Categorías de equipo"
}
interface StatsBarProps {
  stats: Stat[]    // Array de 4 stats
}
```

### `<FAQ>` — Preguntas frecuentes

```typescript
interface FAQItem {
  question: string
  answer: string   // Markdown soportado
}
interface FAQProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
}
```

### `<CTAFinal>` — CTA de cierre

```typescript
interface CTAFinalProps {
  title: string
  body: string
  cta1Text: string
  cta1Href: string
  cta2Text?: string
  cta2Href?: string
}
```

### `<CategoryLayout>` — Layout de Nivel 2

```typescript
interface CategoryLayoutProps {
  // SEO
  title: string
  description: string

  // Hero
  hero: HeroProps

  // Stats bar
  stats: Stat[]

  // FAQ (opcional)
  faq?: FAQItem[]
  showForm?: boolean  // Mostrar formulario de cotización (default: true)

  // CTA Final
  cta?: CTAFinalProps
}
```

---

## 5. PÁGINAS NIVEL 2 — Análisis por página

### 5.1 /productos/ — Catálogo

**Secciones únicas:**
- Navegación de anclas por categoría (sticky tabs)
- 8 bloques de categoría (imagen + badge norma + título + descripción + links + CTA WhatsApp)
- FAQ específico de productos

**Oportunidad:** Los 8 bloques de categoría son completamente repetitivos — se deben generar dinámicamente desde `content/productos/`.

### 5.2 /servicios/ — Servicios

**Secciones únicas:**
- 8 tarjetas de servicio con ícono, título y descripción
- Proceso/flujo del servicio
- FAQ de servicios

**Oportunidad:** Datos de servicios en Markdown/frontmatter, componente `<ServiceCard />`.

### 5.3 /empresas/ — Cobertura

**Secciones únicas:**
- Mapa o grid de estados
- 6 cards de estado con condiciones de entrega
- Información de logística

**Oportunidad:** Páginas dinámicas `[estado].astro` con content collection.

### 5.4 /blog/ — Blog

**Secciones únicas:**
- Filtro por categoría
- Grid de artículos (cards)
- Paginación

**Oportunidad:** Content collection `blog/` con Astro, generación automática de páginas.

### 5.5 /contacto/ — Contacto

**Secciones únicas:**
- 4 canales de contacto (WhatsApp, Tel, Email, Dirección)
- Horarios de atención
- "Por qué Proyecto Red" (6 puntos de valor)
- Formulario de cotización completo

---

## 6. INTEGRACIONES Y COMPLEMENTOS ASTRO

```
@astrojs/sitemap          → Sitemap automático para SEO
@astrojs/image            → Optimización automática de imágenes (WebP, AVIF)
@astrojs/compress         → Compresión HTML/CSS/JS en build
astro-seo                 → Meta tags SEO estructurados
@astrojs/mdx              → Blog con MDX (componentes en Markdown)
astro-icon                → Sistema de íconos SVG optimizado
```

### package.json

```json
{
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/mdx": "^2.0.0",
    "@astrojs/compress": "^2.0.0",
    "astro-icon": "^1.0.0"
  }
}
```

---

## 7. CHECKLIST DE HOMOLOGACIÓN

Cada página de Nivel 2 debe cumplir:

- [ ] Usa `<CategoryLayout>` como contenedor raíz
- [ ] Props del hero pasados desde frontmatter o página
- [ ] `<QuickLinks />` sin modificación (idéntico en todas)
- [ ] `<StatsBar stats={[...]} />` con 4 métricas específicas
- [ ] Contenido único en `<slot />` del layout
- [ ] `<CotizacionForm />` si la página lo requiere
- [ ] `<FAQ items={[...]} />` con preguntas relevantes
- [ ] `<CTAFinal />` como última sección antes del footer
- [ ] SEO title y description únicos por página
- [ ] Breadcrumb correcto
- [ ] Imágenes en formato WebP/AVIF optimizadas
- [ ] Sin CSS inline ni estilos duplicados
- [ ] Sin JavaScript innecesario (todo Astro = 0 JS por defecto)

---

## 8. CORRECCIONES PRIORITARIAS

1. **Horario unificado** → Definir en `src/config/site.ts` como constante global
2. **Form único** → Un solo `<CotizacionForm />` usado en 3+ páginas
3. **QuickLinks** → Un solo componente, sin props
4. **Footer** → Un solo componente `<Footer />`, datos desde `site.ts`
5. **Meta tags** → Sistematizar con `astro-seo` en `BaseLayout`
6. **Imágenes** → Migrar a `@astrojs/image` para WebP automático
7. **CSS** → Eliminar estilos inline, centralizar en tokens CSS

---

*Documento generado: 2026-04-02*
