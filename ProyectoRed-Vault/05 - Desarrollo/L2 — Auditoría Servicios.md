# L2 — Auditoría Servicios

> Análisis de brechas entre `/servicios/` (estado actual) y el template L2 autorizado (`/productos/`).  
> Objetivo: identificar cada desviación y definir las acciones exactas de homologación.  
> Última actualización: 2026-04-11.

---

## Resumen ejecutivo

`/servicios/` es un archivo monolítico de **420 líneas** que contiene todo el markup, datos, lógica y estilos inline. No sigue el patrón de orquestador limpio del template L2. Se requiere refactorizar en componentes dedicados para alinearse con la arquitectura autorizada.

### Métricas de brecha

| Criterio                              | Productos (referencia) | Servicios (actual) | Estado   |
|---------------------------------------|------------------------|---------------------|----------|
| Líneas del orquestador                | 160                    | 420                 | ❌ Excede |
| Componentes de sección importados     | 7                      | 1 (FaqCotizacion)   | ❌ Falta  |
| Hero como componente dedicado         | ✅ HeroProductos       | ❌ Inline            | ❌        |
| Catálogo como componente dedicado     | ✅ CatalogoProductos   | ❌ Inline            | ❌        |
| Usa SectionHeaderDuo                  | ✅ ×8 (por categoría)  | ❌ Custom markup     | ❌        |
| Usa patrón `.ccard`                   | ✅                     | ❌ `prod-card` custom | ❌       |
| Nav sticky con pills                  | ✅ Dentro de Catálogo  | ⚠️ Inline en página  | Parcial  |
| Secciones reutilizables (5–9)         | ✅ 5 de 5              | ⚠️ 2 de 5            | Parcial  |
| JSON-LD schemas                       | ✅ 3 (Bread+Catalog+FAQ) | ❌ 0               | ❌        |
| Imágenes via Img.astro (CDN)          | ✅                     | ❌ `<img>` directo   | ❌        |
| WhatsApp via waUrl() de site.ts       | ✅                     | ❌ URL hardcodeada   | ❌        |
| Canonical URL                         | ✅                     | ❌ No definida       | ❌        |
| ogImage                               | ✅                     | ❌ No definida       | ❌        |

---

## Análisis detallado por bloque

### Bloque 1 — Breadcrumb ✅

**Estado: Conforme.**

Servicios ya usa el mismo patrón con `Breadcrumb` + items `[Inicio, Servicios]`.

---

### Bloque 2 — Hero ❌

**Brecha:** El hero está embebido como HTML inline dentro de `servicios.astro` (líneas 208–238).

**Diferencias vs. template:**

| Aspecto        | Productos                        | Servicios                        |
|----------------|----------------------------------|----------------------------------|
| Componente     | `HeroProductos.astro` (dedicado) | Inline en página                 |
| CTAs           | No (delegados a CtaBar)          | Sí (btn-primary WA + btn-secondary) |
| Estilos        | Scoped en componente             | Heredados de `pages.css` (`.hero`) |

**Acción:**
1. Crear `src/components/sections/HeroServicios.astro`
2. Mover el markup del hero a este componente
3. Usar `<style>` scoped con namespace `.hero-servicios`
4. Decidir si mantener CTAs en hero o delegar a CtaBar (ambos son válidos según template)

---

### Bloque 3 — CtaBar ✅

**Estado: Conforme.**

Servicios importa y usa `CtaBar` correctamente.

---

### Bloque 4 — Catálogo ❌ (brecha mayor)

**Brecha:** Todo el catálogo de servicios está inline (líneas 242–359) con markup y patrones propios que no siguen el template.

#### 4a — Navegación sticky ⚠️

| Aspecto        | Productos                                | Servicios                               |
|----------------|------------------------------------------|-----------------------------------------|
| Ubicación      | Dentro de `CatalogoProductos.astro`       | Inline en página (líneas 245–256)        |
| Markup         | `nav-cats` estándar                       | `nav-cats` estándar                      |
| Dato fuente    | Array `categorias[]` con `label` limpio   | `s.titulo` con `.replace()` inline        |

**Acción:** Mover al componente `CatalogoServicios.astro`. Definir labels cortos en el array de datos en vez de usar `.replace()` inline.

#### 4b — Encabezados de sección ❌

| Aspecto        | Productos                           | Servicios                                |
|----------------|-------------------------------------|------------------------------------------|
| Componente     | `SectionHeaderDuo` (×8)             | Custom `cat-header` con imagen + overlay  |
| Layout         | 2 columnas texto/texto              | Imagen hero + info lateral               |

**Brecha crítica:** Servicios usa un patrón visual completamente diferente — un header con imagen destacada + overlay + badge + info lateral. Esto **no existe** en el template L2.

**Decisión requerida:** ¿Se homologa al patrón `SectionHeaderDuo` puro (sin imagen de encabezado), o se crea una variante del template que soporte imagen? Ambas opciones son válidas siempre que:
- Se encapsule en un componente reutilizable
- Se documente la variante en el template

#### 4c — Cards de detalle ❌

| Aspecto        | Productos                        | Servicios                         |
|----------------|----------------------------------|-----------------------------------|
| Clase CSS      | `.ccard` (global en pages.css)   | `.prod-card` (no definida en global) |
| Estructura     | Header con imagen + content       | Body + footer sin imagen          |
| Grid           | `.catidx-grid` (4→3→2→1 cols)   | `.productos-grid` (custom)         |

**Acción:** Reemplazar `.prod-card` por `.ccard` o, si el caso de uso de servicios es legítimamente diferente (cards sin imagen), crear una variante `.ccard--compact` en `pages.css` global.

#### 4d — Imágenes ❌

Servicios usa `<img>` con URL de CDN hardcodeada. Debe usar `Img.astro` para consistencia.

---

### Bloque 5 — SeleccionIndex ❌

**Brecha:** No existe en servicios. Se debe importar.

---

### Bloque 6 — NormasIndex ❌

**Brecha:** No existe en servicios. Se debe importar.

---

### Bloque 7 — ProcesoIndex ❌

**Brecha:** Servicios tiene su propia sección de proceso (líneas 362–382) con markup inline y solo 4 pasos (vs. 5 del ProcesoIndex reutilizable).

| Aspecto        | Productos                        | Servicios                           |
|----------------|----------------------------------|-------------------------------------|
| Componente     | `ProcesoIndex` (reutilizable)    | Inline (`.proceso-section` custom)  |
| Pasos          | 5                                | 4                                   |
| Encabezado     | SectionHeaderDuo (dark)          | Custom header inline                 |
| Fondo          | Dark (`var(--c-ink)`)            | Dark (`.proceso-section`)            |

**Decisión requerida:** ¿Se usa `ProcesoIndex` tal cual (5 pasos genéricos) o se crea un `ProcesoIndex` parametrizable que acepte pasos como props?

---

### Bloque 8 — FaqCotizacionIndex ⚠️

**Estado: Parcialmente conforme.**

Servicios usa `FaqCotizacion` (componente con props) en vez de `FaqCotizacionIndex` (sin props, datos internos). Esto es una diferencia legítima: los FAQs de servicios son distintos a los de productos.

**Evaluación:** El enfoque de servicios es **más flexible** que el de productos. Se puede considerar migrar productos al mismo patrón (componente con props). No es una brecha — es una mejora potencial.

---

### Bloque 9 — CTAFinalIndex ❌

**Brecha:** Servicios tiene un CTA inline (líneas 398–417) con markup y estilos propios en vez de usar `CTAFinalIndex`.

| Aspecto        | Productos                      | Servicios                         |
|----------------|--------------------------------|-----------------------------------|
| Componente     | `CTAFinalIndex.astro`          | Inline (`.cta-final` custom)      |
| Heading        | "¿Necesitas equipo...?"        | "¿Tu empresa necesita...?"        |
| Botón ghost    | "Ver catálogo completo"         | "Ver catálogo de productos"       |

**Acción:** Reemplazar el CTA inline por `CTAFinalIndex` importado. Si se necesita texto diferente, parametrizar `CTAFinalIndex` con props opcionales.

---

## JSON-LD ❌

Servicios no tiene ningún schema JSON-LD. Debe incluir:

1. **BreadcrumbList** — `Inicio → Servicios`
2. **OfferCatalog** — 8 servicios con nombre y URL
3. **FAQPage** — Las 8 preguntas que ya existen en `faqsServicios`

---

## Plan de homologación

### Fase 1 — Componentes dedicados (arquitectura)

| Tarea | Archivo a crear | Fuente |
|-------|----------------|--------|
| 1.1 | `src/components/sections/HeroServicios.astro` | Extraer de líneas 208–238 |
| 1.2 | `src/components/sections/CatalogoServicios.astro` | Extraer de líneas 242–359 |

### Fase 2 — Homologación de patrones

| Tarea | Descripción |
|-------|-------------|
| 2.1 | Refactorizar `CatalogoServicios` para usar `SectionHeaderDuo` por cada servicio |
| 2.2 | Migrar cards de `.prod-card` a `.ccard` (o crear variante `.ccard--compact`) |
| 2.3 | Reemplazar `<img>` por `Img.astro` en todo el catálogo |
| 2.4 | Mover labels cortos de nav sticky al array de datos |

### Fase 3 — Secciones reutilizables

| Tarea | Descripción |
|-------|-------------|
| 3.1 | Importar `SeleccionIndex` |
| 3.2 | Importar `NormasIndex` |
| 3.3 | Reemplazar proceso inline por `ProcesoIndex` (o parametrizarlo) |
| 3.4 | Reemplazar CTA inline por `CTAFinalIndex` (o parametrizarlo) |

### Fase 4 — SEO y datos estructurados

| Tarea | Descripción |
|-------|-------------|
| 4.1 | Agregar `canonical` y `ogImage` al `<Base>` |
| 4.2 | Crear 3 JSON-LD schemas (BreadcrumbList, OfferCatalog, FAQPage) |
| 4.3 | Migrar URL de WhatsApp a `waUrl()` de `site.ts` |

### Fase 5 — Limpieza

| Tarea | Descripción |
|-------|-------------|
| 5.1 | Reducir `servicios.astro` a orquestador limpio (< 170 líneas) |
| 5.2 | Verificar que no se dupliquen estilos CSS ya definidos en global |
| 5.3 | Validar con Lighthouse (accesibilidad, SEO, performance) |

---

## Decisiones pendientes

Antes de implementar, se requiere decisión del equipo en estos puntos:

1. **Encabezados con imagen:** ¿Se mantiene el patrón `cat-header` con imagen de servicios (más visual) o se homologa a `SectionHeaderDuo` puro (más consistente)?
2. **ProcesoIndex:** ¿Se usa el de 5 pasos de productos o se parametriza para aceptar N pasos?
3. **CTAFinalIndex:** ¿Se parametriza con props para texto personalizado por L2?
4. **Cards sin imagen:** ¿Se crea `.ccard--compact` en global o se usa `.ccard` estándar con imagen placeholder?

---

## Véase también

- [[L2 — Template Autorizado]] — Especificación completa del template L2
- `docs/LAYOUT-SYSTEM.md` — Sistema de layouts L1–L5
- `src/pages/productos.astro` — Implementación de referencia
- `src/pages/servicios.astro` — Archivo actual a homologar
