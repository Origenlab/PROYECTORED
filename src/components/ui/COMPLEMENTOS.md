# Complementos UI — Proyecto Red

Sistema de componentes reutilizables para encabezados de sección.
Todos los estilos viven en `src/styles/components.css`. Ningún componente UI lleva `<style>` block.

---

## 1. SectionHeader

Encabezado de sección en **columna única**. Centrado por defecto; opción `left` para alineación izquierda.

**Archivo:** `src/components/ui/SectionHeader.astro`
**CSS:** `.section-header` en `src/styles/components.css`

### Props

| Prop        | Tipo                | Requerido | Default    | Descripción                          |
|-------------|---------------------|-----------|------------|--------------------------------------|
| eyebrow     | string              | No        | —          | Texto pequeño sobre el título        |
| titleLine1  | string              | Sí        | —          | Primera línea del título (h2)        |
| titleLine2  | string              | No        | —          | Segunda línea con color de acento    |
| desc        | string              | No        | —          | Párrafo descriptivo debajo del título|
| align       | 'center' \| 'left'  | No        | 'center'   | Alineación del bloque               |

### Uso

```astro
import SectionHeader from '../ui/SectionHeader.astro'

<SectionHeader
  eyebrow="Nuestro catálogo"
  titleLine1="Equipos certificados"
  titleLine2="contra incendios"
  desc="Más de 50 productos organizados por categoría."
  align="left"
/>
```

### Secciones que lo usan

- *(Ninguna actualmente — disponible para nuevas secciones)*

---

## 2. SectionHeaderDuo

Encabezado de sección en **dos columnas** (5fr / 6fr). Columna izquierda con eyebrow + título + descripción corta; columna derecha con dos párrafos editoriales.

**Archivo:** `src/components/ui/SectionHeaderDuo.astro`
**CSS:** `.titulo-duo` en `src/styles/components.css`

### Props

| Prop       | Tipo    | Requerido | Default | Descripción                                    |
|------------|---------|-----------|---------|------------------------------------------------|
| eyebrow    | string  | No        | —       | Texto pequeño con barra decorativa             |
| titleLine1 | string  | Sí        | —       | Primera línea del título (h2)                  |
| titleLine2 | string  | No        | —       | Segunda línea con color de acento              |
| desc       | string  | No        | —       | Párrafo corto debajo del título (max 36ch)     |
| bodyPara1  | string  | Sí        | —       | Primer párrafo editorial (columna derecha)     |
| bodyPara2  | string  | Sí        | —       | Segundo párrafo editorial (columna derecha)    |
| dark       | boolean | No        | false   | Variante sobre fondo oscuro (texto blanco)     |

### Uso

```astro
import SectionHeaderDuo from '../ui/SectionHeaderDuo.astro'

<SectionHeaderDuo
  eyebrow="Catálogo completo"
  titleLine1="Categorías de equipo"
  titleLine2="contra incendios"
  desc="Ocho líneas de producto organizadas por tipo de riesgo."
  bodyPara1="Primer párrafo editorial con información SEO..."
  bodyPara2="Segundo párrafo editorial con información complementaria..."
/>
```

### Secciones que lo usan

- CategoriasIndex
- CatalogoIndex
- SeleccionIndex
- NormasIndex
- ProcesoIndex (dark)
- BlogPreviewIndex
- ReviewsIndex
- FaqCotizacionIndex

---

## 3. Sidebar Header (clases utilitarias)

Patrón de eyebrow + título + descripción para secciones con **layout de dos columnas** donde el header forma parte de la columna izquierda junto con CTAs o badges. No es un componente Astro, sino clases CSS compartidas.

**CSS:** `.sidebar-header__*` en `src/styles/components.css`

### Clases disponibles

| Clase                      | Elemento    | Descripción                           |
|----------------------------|-------------|---------------------------------------|
| `.sidebar-header__eyebrow` | `<p>`       | Etiqueta superior en rojo, uppercase  |
| `.sidebar-header__title`   | `<h2>`      | Título bold 800, `span` en acento     |
| `.sidebar-header__desc`    | `<p>`       | Párrafo descriptivo gris              |

### Uso

```html
<p class="sidebar-header__eyebrow">Texto de eyebrow</p>
<h2 class="sidebar-header__title">
  Primera línea<br>
  <span>Segunda línea en acento</span>
</h2>
<p class="sidebar-header__desc">Descripción del bloque.</p>
```

### Secciones que lo usan

- TrustIndex (+ CTAs debajo)
- ServiciosIndex (+ botón debajo)
- CoberturaIndex (+ badges debajo)

---

## Secciones especiales (sin complemento)

| Sección        | Razón                                              |
|----------------|-----------------------------------------------------|
| HeroIndex      | Hero principal con H1 y badge propio                |
| CTAFinalIndex  | Barra de conversión con fondo rojo, diseño único    |
| CtaBar         | Navegación rápida con cards, sin encabezado         |

---

## Arquitectura CSS

```
src/styles/
├── global.css         → Tokens legacy + reset + @import components.css
├── components.css     → Estilos de SectionHeader, SectionHeaderDuo, Sidebar Header
└── pages.css          → Estilos específicos de páginas (hero, catalogo-intro)

src/layouts/
└── Base.astro         → <style is:global> con tokens nuevos, resets, .container, .btn-*
```

**Regla:** Los componentes UI (`src/components/ui/`) NO llevan `<style>`. Los estilos de componentes viven en `components.css`. Las secciones (`src/components/sections/`) SÍ pueden tener `<style>` scoped para su layout y cards internos.
