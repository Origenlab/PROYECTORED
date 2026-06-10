# Auditoría Técnica Integral — PROYECTORED

**Sitio:** proyectored.com.mx · **Stack:** Astro 6.1.1, salida estática, Cloudflare Pages/GitHub Pages
**Fecha:** 10 de junio de 2026 · **Alcance:** arquitectura, componentes, layouts, Markdown, SEO técnico, rendimiento, accesibilidad, seguridad, UX, escalabilidad
**Método:** lectura directa de código fuente, diffs línea a línea, verificación contra HTML generado en `dist/`, validación programática de las 233 rutas

---

## 1. Resumen Ejecutivo

El sitio está bien fundamentado: cero JavaScript de hidratación, LCP del home en texto puro, menú móvil accesible con manejo de foco, breadcrumbs con JSON-LD sistemáticos, cero enlaces rotos en navegación, número de WhatsApp 100% consistente (84 usos vía `waUrl()`), y redirects 301 correctos. La base técnica de Astro estático es la correcta para este negocio.

El problema dominante es **duplicación por copia de plantilla**: ~65 componentes de sección donde deberían existir ~10 genéricos, 19 fichas de producto hardcodeadas con 89% de código idéntico entre sí, 8 rutas dinámicas `[producto].astro` clonadas entre categorías, y doble fuente de verdad de datos (`src/data/*.ts` activa + `src/content/productos/*.md` muerta). De ~30,000 líneas de código de presentación, **~60% es eliminable sin cambiar un pixel del output**.

En SEO hay 3 fallos de alto valor comercial: la imagen Open Graph por defecto **no existe** (previews rotos en WhatsApp — el canal principal de venta), **no hay schema Product** en ninguna ficha (cero elegibilidad para rich results de producto), y el `lastmod` del sitemap se falsifica en cada build. En seguridad falta `public/_headers` completo (sin CSP, HSTS, X-Frame-Options). En conversión: no existe ningún formulario en el sitio aunque el JSON-LD lo promete, y la sección `/sectores/` (11 páginas B2B de alto valor) es invisible desde la navegación.

**Cifras clave:**

| Métrica | Valor |
|---|---|
| Rutas generadas | 233 (124 posts blog, ~100 fichas/categorías) |
| Código de secciones | 14,581 líneas (~60% duplicado) |
| Fichas L4 hardcodeadas | 19 archivos, 8,387 líneas, 89% idénticas |
| Imágenes en `public/` | 132 MB (211 PNG sin optimizar, top 20 de 1.5–2 MB) |
| CSS global por página | ~104 KB (pages.css: 3,071 líneas en todas las páginas) |
| Vulnerabilidades npm | 9 (2 high, 7 moderate) — fix disponible |
| Enlaces rotos | 0 ✅ |

---

## 2. Problemas Críticos Detectados

### C1. Familias de componentes clonados por categoría

- **Descripción:** `src/components/sections/` contiene 5 familias (`Hero*`, `Faq*`, `Guia*`, `Normas*`, `Catalogo*`) × 8 categorías. Diff medido: `FaqMangueras` vs `FaqGabinetes` = **87% idéntico** (382/439 líneas); `FaqExtintores` vs `FaqMangueras` = 85%; `HeroExtintores` vs `HeroGabinetes` = 73%. Lo único que varía son los datos hardcodeados y el prefijo de clases CSS (`hero-gab__` vs `hero-ext__`), duplicando además ~270 líneas de CSS scoped × 8 ≈ 2,100 líneas de CSS clonado solo en la familia Faq.
- **Agravante:** el patrón correcto ya existe en el repo — `Hero.astro` genérico con props (usado por `CategoryLayout`) convive con 13 `Hero*` hardcodeados.
- **Impacto:** ~8,000 líneas eliminables. Cada cambio de diseño requiere tocar 8 archivos. Agregar la 9ª categoría cuesta ~1,300 líneas de copy-paste.
- **Prioridad:** Crítico
- **Solución:** un componente genérico por familia, datos en `src/data/categorias.ts` (que ya define `FAQItem`). Ver §13.1.
- **Beneficio:** −55% de código de secciones, cambios de diseño en un solo lugar, onboarding de categorías en minutos.

### C2. 19 fichas de producto hardcodeadas (8,387 líneas, 89% idénticas)

- **Descripción:** `src/pages/extintores/{polvo-seco,co2,afff,tipo-k,agente-limpio}/*.astro` — 19 archivos de 297–557 líneas. `pqs-6-kg.astro` vs `pqs-9-kg.astro`: 390/439 líneas idénticas. Cada archivo redeclara `const WHATSAPP = "525627596245"` (ya existe en `src/config/site.ts`) y lleva su propio `<style>`. Existe además `_polvo-seco.astro.bak` versionado — síntoma de drift. Solo extintores tiene nivel L4; las otras 7 categorías terminan en L3 (arquitectura asimétrica).
- **Impacto:** corregir el teléfono o un disclaimer legal = editar 19 archivos. Escalar a 100 productos con este patrón = ~40,000 líneas duplicadas.
- **Prioridad:** Crítico
- **Solución:** ruta dinámica `extintores/[tipo]/[modelo].astro` con `getStaticPaths` desde `extintores-productos.ts`. Ver §13.2.
- **Beneficio:** −7,900 líneas; agregar producto = agregar un objeto de datos.

### C3. Imagen Open Graph por defecto inexistente (og:image 404 en todo el sitio)

- **Descripción:** `src/layouts/Base.astro:42` y `src/lib/seo.ts:29` referencian `/imagenes/og/proyectored-og.jpg` como fallback. En `public/imagenes/og/` solo existen `equipo-bomberos-og.jpg` y `extintores-og.png`. Verificado en `dist/index.html`: el og:image apunta a un 404.
- **Impacto:** previews rotos en WhatsApp/Facebook/LinkedIn en **todas las páginas sin og propia** — y WhatsApp es el canal de venta principal. También invalida la `image` del schema LocalBusiness.
- **Prioridad:** Crítico (5 minutos de fix, 100% de los shares afectados)
- **Solución:** crear `public/imagenes/og/proyectored-og.jpg` (1200×630) o cambiar el fallback a una imagen existente.
- **Beneficio:** previews correctos en el canal de mayor conversión.

### C4. Sin schema Product en ninguna ficha de producto

- **Descripción:** 0 matches de `ld+json` en los `[producto].astro`. El único schema Product es el `hasOfferCatalog` global del LocalBusiness — sin `offers`, `price`, `sku` ni `brand`, no califica para rich results.
- **Impacto:** cero elegibilidad para rich snippets de producto en un catálogo B2B. El hallazgo de mayor valor comercial en SEO.
- **Prioridad:** Crítico
- **Solución:** JSON-LD Product con Offer en cada ficha. Ver §13.3.
- **Beneficio:** elegibilidad para rich results, CTR superior en SERP.

### C5. Doble config de colecciones — el schema "rico" está muerto

- **Descripción:** coexisten `src/content.config.ts` (el activo en Astro 6, con glob loader; schema blog mínimo) y `src/content/config.ts` (API legacy `type:'content'` eliminada en Astro 5+, **ignorado**, pero editado más recientemente que el activo). Consecuencias verificadas: `blog/[slug].astro` lee `post.data.image` y `post.data.author` → siempre `undefined` (Zod los elimina); los `tags:` de 36 posts se descartan; el campo `noindex` no funciona — **riesgo de indexar contenido que se creía excluido**; el Article JSON-LD nunca lleva imagen.
- **Prioridad:** Crítico
- **Solución:** borrar `src/content/config.ts`, consolidar campos útiles en `src/content.config.ts`. Ver §13.4.
- **Beneficio:** rich results Article completos, noindex funcional, fin de la confusión activa entre dos schemas.

---

## 3. Problemas Importantes (Prioridad Alta)

### A1. `lastmod` falsificado en el sitemap completo
`astro.config.mjs:50`: `item.lastmod = new Date().toISOString()` — las 214 URLs reportan la fecha del build, idéntica en todas. Google detecta lastmod no confiable y lo ignora para todo el sitio. **Fix:** eliminar la línea, o mapear `pubDate`/`updatedDate` reales por URL.

### A2. Conflicto de rutas `/blog/` — doble sistema de paginación
`blog/index.astro` (lista los 124 posts en DOM con paginación JS de 18) y `blog/[...page].astro` (paginación estática de 12) generan ambos `/blog/`; gana `index.astro`. Resultado: las páginas `/blog/2/…/11/` quedan cuasi-huérfanas (solo enlazadas entre sí y por sitemap), el DOM de `/blog/` crece linealmente con cada post, y `[...page].astro` renderiza el breadcrumb **dos veces** en páginas 2+ (líneas 56 y 83). **Fix:** quedarse con `[...page].astro` estático, borrar `index.astro`, corregir breadcrumb.

### A3. 4 URLs de blog con "ñ" (no-ASCII)
`señalamiento-escaleras-evacuacion.md`, `materiales-señalizacion-emergencia-tipos.md`, `señal-extintor-pvc-rigido.md`, `señalizacion-extintores-auditorias.md` → URLs percent-encoded en sitemap pero canonical con ñ cruda (señales mixtas). El resto del sitio ya usa el patrón ASCII (`/senalamientos/`). **Fix:** renombrar a `senal…` + 301 en `public/_redirects` (versión raw y encoded).

### A4. Doble fuente de verdad de productos — 19 .md muertos con contenido SEO pagado
`getCollection('productos')` = 0 usos en src/. Los 19 `.md` de `src/content/productos/` (con descripciones largas y `precio:`) **nunca se renderizan**; varios describen productos que no existen en los `.ts` (detector-gas, tablero-contra-incendios…). `src/content/servicios/` está vacía pero con colección definida. **Fix:** una sola fuente — migrar productos a content collection con loader glob + Zod (camino directo a CMS), o borrar los .md tras rescatar su contenido.

### A5. 8 copias de `[producto].astro` (~55% idénticas) + 8 schemas de datos divergentes
3,502 líneas totales; diff extintores vs gabinetes: 228 líneas idénticas. Cada `data/*-productos.ts` redeclara interfaces casi iguales que ya divergieron (`TipoSenalamiento` vs `Variante*`). **Fix:** ruta única `[categoria]/[producto].astro` + registro `CATALOGO` unificado. Ver §13.5.

### A6. Sin `public/_headers` — cero headers de seguridad y sin cache immutable
No hay CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy ni HSTS (wrangler.toml no los soporta en Pages; el mecanismo es `_headers`). Tampoco `Cache-Control: immutable` para `/_astro/*`. **Fix:** ver §13.6.

### A7. Sin formulario de cotización — y el JSON-LD lo promete
0 `<form>` en todo src/. `contacto.astro` (líneas 109, 144) promete "formulario de cotización" en meta description y schema — discrepancia contenido/structured data. `CategoryLayout.astro` tiene prop `showForm` declarada y jamás renderizada. **Impacto:** pérdida de leads corporativos/licitaciones que exigen rastro escrito y no usan WhatsApp. **Fix:** form estático de 3-4 campos (Cloudflare Pages Functions + Turnstile, o Web3Forms), o eliminar la promesa del schema y el prop muerto.

### A8. `/sectores/` huérfana — 11 páginas B2B invisibles
hoteles, gasolineras, hospitales, fábricas… no aparecen en header ni footer; solo las enlazan `bomberos-productos.ts` y `equipo-bomberos/[producto].astro`. **Fix:** dropdown "Por sector" en header + columna en footer (sumarlas a `config/site.ts`).

### A9. Sin búsqueda interna
124 posts + ~100 fichas sin buscador. **Fix:** Pagefind (estático, ~30 KB, comando postbuild) + input en header y 404.

### A10. JSON-LD FAQPage ≠ FAQ visible en CategoryLayout
`CategoryLayout.astro:96-109` emite FAQPage con los `faqItems` recibidos, pero renderiza `FaqCotizacionIndex` (línea 142), un componente sin props con preguntas genéricas distintas. Structured data que declara contenido que no está en la página = riesgo de acción manual por rich results engañosos. **Fix:** pasar los mismos `faqItems` al componente visible.

### A11. CI sin lockfile — builds no reproducibles
`.github/workflows/deploy.yml:52-53` hace `rm -f package-lock.json && npm install`. Cualquier release upstream puede romper producción sin cambio en el repo. Tampoco se ejecuta `astro check`, ni lint, ni tests. **Fix:** commitear lockfile + `npm ci`; resolver el workaround de rollup con `overrides` en package.json; añadir `astro check && astro build` al workflow.

### A12. `Img.astro` genera `sizes` sin `srcset` — atributo inerte
`src/components/ui/Img.astro` emite `sizes` pero nunca un `srcset` con múltiples anchos; el `<source>` AVIF lleva una sola URL. Móvil descarga la misma resolución que desktop. `cdnUrl()` en `config/site.ts:39-45` **ya soporta `?w=`** de ExactDN pero no se usa. **Impacto LCP móvil estimado: −0.3 a −0.8 s.** Fix: ver §13.7.

### A13. 132 MB de imágenes en `public/` (211 PNG de hasta 2 MB)
El HTML referencia casi todo vía ExactDN (CDN optimizador), así que el navegador rara vez los pide — pero `dist/` pesa 155 MB, cada deploy sube ~132 MB muertos, y el fallback `<img src>` apunta al PNG original de 2 MB si el CDN falla. **Fix:** convertir a AVIF (los .avif equivalentes promedian ~100 KB) o sacar los originales del repo. Deploys 8–10× más ligeros.

### A14. Skip link: el CSS existe, el elemento no
`Base.astro:316-326` define `.skip-link` y existe `<main id="main-content">`, pero ningún `<a class="skip-link">` se renderiza. **Fix (1 línea):** `<a href="#main-content" class="skip-link">Saltar al contenido</a>` tras `<body>`.

### A15. Fecha de publicación invisible en posts
Solo está en el JSON-LD; cero `<time>` visible en plantilla o cards. En contenido normativo (NOMs que cambian), la fecha es señal de confianza crítica. **Fix:** `<time datetime={post.data.pubDate.toISOString()}>` en `blog-post__meta` y cards.

---

## 4. Problemas Menores

| # | Hallazgo | Archivo | Fix |
|---|---|---|---|
| M1 | `BaseLayout.astro` (43 ln) es alias de Base usado solo por 404 y CategoryLayout, pero añade regla de título propia (`| Proyecto Red`) → convención de títulos divergente | `src/layouts/BaseLayout.astro:29` | Mover lógica de título a Base, borrar BaseLayout |
| M2 | `FAQ.astro` muerto (0 imports), `_polvo-seco.astro.bak` versionado, 13 JSON de caché graphify dentro de `src/`, prop `showForm` muerta, ~10 .docx/.html de auditorías viejas en raíz, .DS_Store versionables | varios | Borrar/mover a docs/, actualizar .gitignore |
| M3 | Meta descriptions fuera de rango: 13 cortas (<120) y 34 largas (>160, máx 239 chars) de 124 posts | `src/content/blog/` | `.min(70).max(165)` en Zod + reescribir las 47 |
| M4 | 56/124 posts sin un solo enlace interno en el cuerpo | `src/content/blog/` | 2-3 enlaces contextuales por post hacia L2/L3 |
| M5 | Título L2 de ~89 chars se trunca en SERP | `dist/extintores/` | ≤60 chars: "Venta de Extintores Certificados NOM-154 en CDMX \| Proyecto Red" |
| M6 | Logo del header con `fetchpriority="high"` compite con la imagen LCP de catálogos | `Header.astro:72` | Quitar el atributo del logo |
| M7 | Var `--font-sans: 'Outfit'` fantasma (Outfit nunca se carga) compite con la redeclaración Inter; ganador depende del orden de bundling | `global.css:46-48` vs `Base.astro:160` | Eliminar declaración Outfit; considerar self-host de Inter |
| M8 | `<details>` como hijos directos de `<dl>` — HTML inválido | `FAQ*.astro` | `<dl>` → `<div>` |
| M9 | Foco débil en mega-menú: `outline:none` sustituido por borde 1px | `Header.astro:507-514` | Borde 2px o restaurar outline |
| M10 | `CtaBar.astro:24` hardcodea URL de WA con mensaje distinto a `WA_MESSAGES`, duplicando `QUICK_LINKS` | `CtaBar.astro` | Importar QUICK_LINKS |
| M11 | Email `ventas@generalfiremexico.com` en dominio ajeno — fricción de confianza B2B | `config/site.ts` | `ventas@proyectored.com.mx` con forward |
| M12 | Ancho de línea del blog ~95-105 caracteres; sin TOC en guías largas | `pages.css` | `max-width: 72ch` en `.blog-post__content`; TOC desde headings |
| M13 | Config `i18n` del sitemap inerte (0 `xhtml:link` generados) | `astro.config.mjs:14-17` | Eliminar |
| M14 | `breadcrumbLd` triplicado: `seo.ts:194` + inline en `CategoryLayout.astro:84` y `[slug].astro:52` | varios | Consolidar en seo.ts |
| M15 | Doble import de `components.css` (via global.css y via Base.astro) y de `faq-cotizacion-index.css` | `Base.astro:14-15` | Un solo punto de entrada CSS |
| M16 | `JSON.stringify` en `<script type="application/ld+json">` sin escapar `</script>` | `seo.ts` y layouts | `.replace(/</g,'\\u003c')` |

---

## 5. Oportunidades de Optimización

1. **Consolidación masiva de componentes** (C1+C2+A5): el sitio quedaría en ~45% de su código actual sin cambiar el output. Es la inversión con mayor retorno de mantenibilidad.
2. **Content Layer API (Astro 6):** migrar productos de `.ts` a colección con loader `glob` (JSON/YAML uno-por-archivo) + Zod. Da validación, tipado en `getCollection`, y el loader se cambia por uno de CMS (Sanity/Storyblok/Directus) sin tocar plantillas.
3. **Pagefind** para búsqueda estática sin servidor.
4. **Partir `pages.css`** (3,071 líneas globales, importado por 57 archivos) por plantilla: catálogo / producto / blog / sectores. −60–80 KB de CSS render-blocking en primera visita.
5. **Self-host de Inter** (woff2 subset, ~30 KB, `preload as=font`): elimina 2 conexiones a terceros (~200–400 ms móvil).
6. **Diferir TruConversion** (`Base.astro:113-123`) a `requestIdleCallback`/`load` — es el único JS de terceros y el mayor costo de main-thread.
7. **Absorber `mobile.css`** (832 líneas, 111 `!important`) gradualmente en `@media` dentro de cada componente genérico nuevo — la capa de overrides es deuda declarada que penaliza cada estilo futuro.
8. **Rescatar los 19 .md de productos muertos:** contienen contenido SEO ya escrito (descripciones, precios) que hoy no genera ninguna página.

---

## 6. Mejoras SEO

| Prioridad | Mejora | Detalle |
|---|---|---|
| Crítico | Crear `proyectored-og.jpg` 1200×630 | C3 — 5 min, afecta 100% de shares |
| Crítico | Product + Offer JSON-LD en fichas | C4 — ver §13.3 |
| Crítico | Unificar content config; reactivar image/tags/noindex/author | C5 — ver §13.4 |
| Alto | Quitar `lastmod = new Date()` del sitemap | A1 — 1 línea |
| Alto | Resolver doble ruta `/blog/` | A2 |
| Alto | Renombrar 4 slugs con ñ + 301 | A3 |
| Alto | FAQPage JSON-LD = FAQ visible | A10 |
| Alto | Article JSON-LD: añadir `dateModified`, `mainEntityOfPage`, `image`; `og:type=article` + `article:published_time` (hoy `og:type` siempre "website", hardcodeado en Base.astro:69) | blog/[slug].astro |
| Medio | 47 meta descriptions fuera de rango | M3 |
| Medio | Interlinking editorial en 56 posts sin enlaces | M4 |
| Medio | Títulos L2 ≤60 chars | M5 |
| Bajo | E-E-A-T: autor persona (técnico certificado) en vez de Organization | §11 |

**Lo que ya está bien:** canonical self-referencing en todas las páginas, robots meta con `max-image-preview:large`, BreadcrumbList visible+JSON-LD, LocalBusiness completo (geo, horarios, areaServed), un solo H1 por página, jerarquía de headings sin saltos, hreflang es-mx + x-default correcto, trailing slash consistente, robots.txt OK, frontmatter de blog 100% consistente en campos requeridos.

---

## 7. Mejoras de Rendimiento

| Prioridad | Mejora | Impacto estimado |
|---|---|---|
| Alto | `srcset` responsive en Img.astro (A12) | LCP móvil −0.3 a −0.8 s |
| Alto | Convertir 211 PNG → AVIF / sacar de public (A13) | Deploy 155 MB → ~25 MB; elimina fallback de 2 MB |
| Medio | Quitar `fetchpriority=high` del logo (M6); preload de 1ª imagen de catálogo | LCP catálogos −100–250 ms |
| Medio | Self-host Inter + borrar Outfit fantasma (M7) | FCP móvil −200–400 ms |
| Medio | Partir pages.css por plantilla | FCP −100–300 ms primera visita |
| Medio | Diferir TruConversion | TBT/INP en arranque |
| Medio | `_headers` con `Cache-Control: immutable` para `/_astro/*` | Repeat views |

**Fortalezas:** 0 directivas `client:`, 0 bundles JS propios, hero del home sin imagen (LCP = texto), `width`/`height` en todas las imágenes (CLS ~0), `loading=lazy` con `eager` en primeras 4 cards, preconnect + font-display swap bien ejecutados.

---

## 8. Mejoras de Arquitectura

Orden recomendado (riesgo ascendente, ROI descendente):

1. **Borrados sin riesgo:** `src/content/config.ts` (legacy muerto), `FAQ.astro`, `_polvo-seco.astro.bak`, `src/graphify-out/cache/`, prop `showForm`, .docx de raíz → docs/, .gitignore para .DS_Store.
2. **Consolidar layouts:** lógica de título a `Base.astro`, borrar `BaseLayout.astro` (2 imports), migrar los 8 index de categoría a `CategoryLayout` — hoy conviven dos convenciones para el mismo tipo de página.
3. **`extintores/[tipo]/[modelo].astro`** reemplaza las 19 fichas (§13.2). Empezar por polvo-seco (9 fichas), validar diff de HTML, seguir con el resto.
4. **Familias genéricas:** `FaqCategoria`, `HeroCategoria`, `GuiaCategoria`, `NormasCategoria`, `CatalogoCategoria` con datos en `categorias.ts` (§13.1). Empezar por Faq (87% duplicación).
5. **Ruta única `[categoria]/[producto].astro`** + registro `CATALOGO` con interfaz `ProductoBase` compartida (§13.5).
6. **Content Layer:** productos como colección (JSON/YAML por archivo) — prerequisito para CMS.
7. **CSS:** un punto de entrada, pages.css por plantilla, absorber mobile.css por componente.

---

## 9. Mejoras de UX

- **Formulario de cotización** (A7): 3-4 campos máximo; los leads corporativos no siempre pueden usar WhatsApp.
- **Sectores en navegación** (A8): dropdown "Por sector" — 11 páginas comerciales hoy invisibles.
- **Búsqueda con Pagefind** (A9): header + 404.
- **Fecha visible en posts** (A15) + TOC en guías largas + `max-width: 72ch` (M12).
- **Unificar CTAs** (M10): un solo origen de URLs WA (`QUICK_LINKS`/`WA_MESSAGES`) para analítica de leads consistente.
- **Email en dominio propio** (M11).
- **Ya está bien:** 404 útil con chips de categorías, mensajes WA segmentados por intención (20+ variantes — excelente para calidad de lead), breadcrumbs, cross-linking entre categorías, páginas por estado con contenido genuino (no doorway).

---

## 10. Mejoras de Accesibilidad

| Prioridad | Fix | Archivo |
|---|---|---|
| Alto | Renderizar el skip link (CSS ya existe) | `Base.astro` tras `<body>` |
| Medio | Foco visible 2px en mega-menú | `Header.astro:507-514` |
| Bajo | `<dl>` → `<div>` en FAQs | `FAQ*.astro` |
| Bajo | `aria-haspopup` impreciso en enlaces que abren `role="region"` | `Header.astro` |
| Bajo | No usar `--c-muted` (#71717A, 4.75:1) en texto <14px — pasa AA sin margen | global.css |

**Ya está bien:** menú móvil con `<button>` real, `aria-expanded`/`aria-controls`, cierre con Escape devolviendo foco, landmarks correctos, `lang="es-MX"`, alt en todas las imágenes muestreadas (Img.astro lo exige en Props), SVGs decorativos con `aria-hidden`, `:focus-visible` global, FAQ nativo con details/summary, breadcrumb con `aria-current`.

---

## 11. Mejoras de Seguridad

1. **`public/_headers`** (A6/§13.6): CSP, HSTS, XFO, nosniff, Referrer-Policy + cache immutable. Único mecanismo en Cloudflare Pages.
2. **`npm audit fix`**: 9 vulnerabilidades (2 high: devalue DoS, fast-uri path traversal; astro ≤6.1.9 con XSS en define:vars — no explotables en este sitio estático, pero actualizar a ≥6.1.10).
3. **TruConversion sin consentimiento:** graba sesiones de todo visitante sin aviso. Bajo LFPDPPP (México) requiere aviso de privacidad que lo mencione; condicionar la carga o documentarlo en el aviso.
4. **Escape de `</script>` en JSON-LD** (M16): mitigación de 1 línea.
5. **Limpio:** sin secretos hardcodeados, `rel="noopener noreferrer"` consistente, superficie de dependencias mínima (4 paquetes), sitio estático sin input de usuario.

---

## 12. Refactorización Recomendada (resumen)

| Refactor | Líneas eliminadas | Riesgo | Esfuerzo |
|---|---|---|---|
| Borrados (config legacy, FAQ.astro, .bak, cache, docx) | ~2,000 + higiene | Nulo | 1 h |
| 19 fichas → `[tipo]/[modelo].astro` | −7,900 | Bajo (diff HTML verificable) | 1-2 días |
| 5 familias × 8 → 5 genéricos | −8,000 | Medio | 2-3 días |
| 8 × `[producto].astro` → 1 ruta + CATALOGO | −2,800 | Medio | 1-2 días |
| Layouts: borrar BaseLayout, unificar convención | −43 + consistencia | Bajo | 2 h |
| pages.css por plantilla + absorber mobile.css | mantenibilidad | Medio | 3-5 días (gradual) |
| Content Layer para productos | habilita CMS | Medio | 2-3 días |

**Total estimado: ~21,000 líneas eliminadas (−55%) con output HTML idéntico.** Técnica de validación: `astro build` antes/después + diff recursivo de `dist/`.

---

## 13. Ejemplos de Código Mejorado

### 13.1 Familia Faq → componente genérico

```astro
<!-- ANTES: FaqGabinetes.astro — 438 líneas × 8 archivos casi idénticos -->
---
const faqs = [{ q: '¿Es obligatorio tener gabinete…?', a: '…' }, /* … */];
---
<section class="faq-gab">…</section>
<style>/* 270 líneas clonadas en cada archivo */</style>

<!-- DESPUÉS: FaqCategoria.astro — un archivo (~180 líneas) -->
---
interface Props {
  titulo: string;
  faqs: { q: string; a: string }[];
  waMessage?: string;
}
const { titulo, faqs, waMessage } = Astro.props;
---
<section class="faq-cat">
  <h2>{titulo}</h2>
  {faqs.map((f) => (
    <details class="faq-cat__item">
      <summary>{f.q}</summary>
      <div set:html={f.a} />
    </details>
  ))}
</section>
<style>/* CSS una sola vez */</style>

<!-- uso en gabinetes/index.astro -->
<FaqCategoria titulo="Preguntas sobre gabinetes" faqs={CATEGORIAS.gabinetes.faqs} />
```

### 13.2 19 fichas hardcodeadas → ruta dinámica

```astro
---
// src/pages/extintores/[tipo]/[modelo].astro  (reemplaza 8,387 líneas)
import { EXTINTOR_PAGES } from '../../../data/extintores-productos';

export function getStaticPaths() {
  return Object.entries(EXTINTOR_PAGES).flatMap(([tipo, data]) =>
    (data.variantes ?? []).map((v) => ({
      params: { tipo, modelo: v.slug },
      props: { tipo, variante: v },
    }))
  );
}
const { tipo, variante } = Astro.props;
---
<!-- template único: specs, FAQ, relacionados, CTA desde config/site.ts -->
```

### 13.3 Product JSON-LD en fichas

```js
const productLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: producto.title,
  description: producto.description,
  image: `${SITE.url}${producto.image}`,
  sku: producto.slug,
  brand: { '@type': 'Brand', name: 'Proyecto Red' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'MXN',
    availability: 'https://schema.org/InStock',
    url: `${SITE.url}/extintores/${producto.slug}/`,
    seller: { '@id': `${SITE.url}/#business` },
  },
};
// En el head: <script type="application/ld+json"
//   set:html={JSON.stringify(productLd).replace(/</g, '\\u003c')} />
```

### 13.4 Content config unificado

```ts
// src/content.config.ts — borrar src/content/config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(70).max(165),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    author: z.string().default('Proyecto Red'),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});
export const collections = { blog /*, productos */ };
```

### 13.5 Registro unificado de catálogo

```ts
// src/data/index.ts
import { EXTINTOR_PRODUCTS, EXTINTOR_PAGES } from './extintores-productos';
import { GABINETE_PRODUCTS, GABINETE_PAGES } from './gabinetes-productos';
// …

export const CATALOGO = {
  extintores: { products: EXTINTOR_PRODUCTS, pages: EXTINTOR_PAGES },
  gabinetes: { products: GABINETE_PRODUCTS, pages: GABINETE_PAGES },
  // …
} satisfies Record<string, Categoria>;

// src/pages/[categoria]/[producto].astro
export function getStaticPaths() {
  return Object.entries(CATALOGO).flatMap(([categoria, { products }]) =>
    products.map((p) => ({ params: { categoria, producto: p.slug }, props: { p } }))
  );
}
```

### 13.6 public/_headers

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  Content-Security-Policy: default-src 'self'; img-src 'self' https://ewvydcs5uyw.exactdn.com data:; script-src 'self' 'unsafe-inline' https://app.truconversion.com https://*.truconversion.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; connect-src 'self' https://*.truconversion.com

/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```
(Probar la CSP en report-only primero; TruConversion inyecta recursos propios.)

### 13.7 Img.astro con srcset real

```astro
---
const widths = [400, 640, 960, 1280];
const srcset = widths.map((w) => `${cdnUrl(path, { w })} ${w}w`).join(', ');
---
<picture>
  <source type="image/avif" srcset={srcsetAvif} sizes={sizes} />
  <img src={cdnUrl(path, { w: 960 })} srcset={srcset} sizes={sizes}
       width={width} height={height} alt={alt}
       loading={eager ? 'eager' : 'lazy'} decoding="async" />
</picture>
```

---

## 14. Roadmap de Implementación Priorizado

### Fase 0 — Quick wins (1 día, sin riesgo)
1. Crear `proyectored-og.jpg` (C3) — 5 min
2. Quitar `lastmod = new Date()` (A1) — 1 línea
3. Skip link (A14) — 1 línea
4. `public/_headers` (A6) — 30 min
5. `npm audit fix` + astro ≥6.1.10 — 10 min
6. Quitar `fetchpriority=high` del logo (M6) — 5 min
7. Borrados: `content/config.ts`*, FAQ.astro, .bak, graphify cache, docx → docs/, .gitignore
   *consolidar antes los campos útiles en content.config.ts (C5/§13.4)
8. Fecha visible en posts (A15) — 30 min

### Fase 1 — SEO y conversión (1 semana)
9. Content config unificado + reactivar image/tags/noindex/author (C5)
10. Product JSON-LD en las 8 rutas `[producto]` (C4)
11. Article JSON-LD completo + og:type article
12. Resolver doble `/blog/` + breadcrumb duplicado (A2)
13. Renombrar 4 slugs con ñ + 301 (A3)
14. FAQPage = FAQ visible (A10)
15. Sectores en navegación (A8)
16. Formulario de cotización (A7)
17. CI: lockfile + `npm ci` + `astro check` (A11)

### Fase 2 — Rendimiento (1 semana)
18. srcset en Img.astro (A12)
19. PNG → AVIF / limpiar public (A13)
20. Self-host Inter + borrar Outfit (M7)
21. Diferir TruConversion + aviso privacidad
22. Pagefind (A9)

### Fase 3 — Refactorización estructural (3-4 semanas, gradual)
23. `extintores/[tipo]/[modelo].astro` (C2) — validar con diff de dist/
24. FaqCategoria → resto de familias (C1)
25. `[categoria]/[producto].astro` + CATALOGO (A5)
26. Consolidar layouts (M1)
27. pages.css por plantilla; absorber mobile.css por componente

### Fase 4 — Escalabilidad (cuando se decida crecer)
28. Content Layer para productos (camino a CMS headless)
29. Rescatar/publicar los 19 .md de productos muertos
30. Meta descriptions (M3) + interlinking editorial (M4)
31. E-E-A-T: autores persona; i18n: centralizar strings de UI

---

## 15. Checklist Completo de Optimización

### SEO
- [ ] og:image por defecto existe (1200×630)
- [ ] Product+Offer JSON-LD en todas las fichas
- [ ] Article JSON-LD con image, dateModified, mainEntityOfPage
- [ ] og:type=article + article:published_time en posts
- [ ] lastmod real o ausente en sitemap
- [ ] Una sola ruta para /blog/ con paginación enlazada
- [ ] 0 URLs con caracteres no-ASCII (4 pendientes + 301)
- [ ] FAQPage JSON-LD = FAQ visible
- [ ] noindex funcional vía frontmatter
- [ ] Meta descriptions 70–165 chars (47 pendientes)
- [ ] Títulos ≤60 chars en L2
- [ ] ≥2 enlaces internos contextuales por post (56 pendientes)
- [ ] Sectores enlazados desde navegación

### Rendimiento
- [ ] srcset responsive en todas las imágenes
- [ ] 0 PNG >300 KB en public/
- [ ] Fuentes self-hosted con preload
- [ ] Analytics diferido a idle
- [ ] CSS por plantilla (no 104 KB globales)
- [ ] _headers con cache immutable
- [ ] Un solo fetchpriority=high por página

### Accesibilidad
- [ ] Skip link renderizado
- [ ] Foco visible ≥2px en todos los interactivos
- [ ] HTML válido en FAQs (sin details dentro de dl)
- [ ] Contraste AA verificado en textos pequeños

### Seguridad
- [ ] _headers: CSP, HSTS, XFO, nosniff, Referrer-Policy
- [ ] 0 vulnerabilidades high en npm audit
- [ ] Aviso de privacidad cubre session recording
- [ ] JSON-LD con escape de </script>

### Arquitectura
- [ ] Un solo content config
- [ ] 0 archivos .bak / caché / docx en src y raíz
- [ ] 0 componentes muertos
- [ ] ≤1 componente por familia de sección
- [ ] 0 fichas de producto hardcodeadas
- [ ] 1 ruta dinámica de producto (no 8)
- [ ] 2 layouts máximo (Base + Category)
- [ ] Interfaz ProductoBase compartida
- [ ] Una sola fuente de verdad de productos

### UX / Conversión
- [ ] Formulario de cotización operativo
- [ ] Búsqueda interna (Pagefind)
- [ ] Fecha visible en posts y cards
- [ ] CTAs WA desde un solo origen de datos
- [ ] Email en dominio propio
- [ ] max-width 72ch + TOC en blog

### DevOps
- [ ] package-lock.json commiteado + npm ci
- [ ] astro check en CI
- [ ] Link-checker postbuild (lychee)
- [ ] Diff de dist/ como validación de refactors

---

*Informe generado el 10-jun-2026. Evidencia: diffs línea a línea entre componentes, grep de imports/usos en todo src/, verificación de HTML en dist/, validación programática de 233 rutas contra hrefs internos, npm audit, medición de pesos con du/wc.*
