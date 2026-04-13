# Auditoría y Mejoras del Blog — Proyecto Red

**Fecha:** 2026-04-12
**Alcance:** Revisión integral de UI/UX del blog (L2 index)
**Archivos modificados:** HeroBlog.astro, CatalogoBlog.astro, pages.css

---

## Estado anterior (hallazgos)

### Problemas detectados

1. **Grid de 2 columnas** — El blog mostraba solo 2 cards por fila, desperdiciando espacio horizontal y requiriendo más scroll para el usuario.

2. **Sin CTAs en el hero** — El HeroBlog tenía texto descriptivo pero ningún botón de acción. El usuario no tenía un camino claro hacia los artículos ni hacia contacto.

3. **Cards sin fecha ni tiempo de lectura** — Las blogcards mostraban imagen + badge + título + descripción + CTA, pero omitían la fecha de publicación y el tiempo estimado de lectura. Esto es un estándar básico en blogs profesionales.

4. **Sin indicador de página actual** — La barra de resultados solo mostraba el total de artículos, sin indicar en qué página se encuentra el usuario.

5. **Sidebar demasiado ancho** — El sidebar ocupaba 340px, reduciendo el espacio disponible para el grid de contenido principal.

6. **Badge de categoría muy visible** — El badge rojo sólido sobre las imágenes competía visualmente con el contenido.

7. **Breakpoints responsive sin paso intermedio** — Saltaba de 2 columnas + sidebar directamente a 1 columna sin sidebar, sin un paso intermedio.

---

## Mejoras implementadas

### 1. Grid 3×3 (pages.css)

```css
/* Antes */
.blog-grid { grid-template-columns: repeat(2, 1fr); }

/* Después */
.blog-grid { grid-template-columns: repeat(3, 1fr); }
```

POSTS_PER_PAGE ya estaba en 9, perfecto para un grid 3×3.

### 2. CTAs profesionales en HeroBlog (HeroBlog.astro)

Se agregaron dos botones al hero:
- **"Ver artículos"** (btn--white) — scroll suave al grid via anchor #articulos
- **"Consulta técnica gratis"** (btn--ghost-light) — enlace a WhatsApp con mensaje pre-configurado

También se agregó el conteo de categorías únicas al subtítulo.

### 3. Metadata en blogcards (CatalogoBlog.astro + pages.css)

Cada card ahora muestra:
- **Fecha** formateada en español (ej: "9 mar 2026") con tag `<time>` semántico
- **Tiempo de lectura** estimado (ej: "3 min lectura")
- Separados por punto medio (·)

Nuevo bloque HTML `.blogcard__meta` insertado antes del título.

### 4. Indicador de página (CatalogoBlog.astro + pages.css)

La barra de resultados ahora muestra:
- Icono SVG + total de artículos (izquierda)
- "Página X de Y" (derecha) — actualizado dinámicamente con JS

### 5. Layout optimizado (pages.css)

- Sidebar reducido de 340px → 300px
- Gap reducido de 3rem → 2.5rem
- Más espacio para 3 columnas de cards

### 6. Badge de categoría refinado (pages.css)

```css
/* Antes: fondo rojo sólido */
background: var(--c-primary);

/* Después: fondo oscuro translúcido con blur */
background: rgba(0,0,0,.7);
backdrop-filter: blur(4px);
```

Más sutil, no compite con la imagen.

### 7. Responsive mejorado (pages.css)

| Breakpoint | Grid | Sidebar |
|-----------|------|---------|
| > 1100px | 3 columnas | 300px lateral |
| ≤ 1100px | 2 columnas | 260px lateral |
| ≤ 960px | 2 columnas | full-width (debajo) |
| ≤ 768px | 1 columna | 1 columna |
| ≤ 640px | 1 columna | 1 columna |

### 8. Tipografía compactada para 3-col (pages.css)

- Título: .9375rem → .875rem
- Descripción: clamp 2 líneas → 3 líneas
- Content padding reducido: 1.125rem → 1rem
- CTA font: .8125rem → .75rem

---

## Archivos modificados

| Archivo | Cambios |
|---------|---------|
| `src/components/sections/HeroBlog.astro` | +import waUrl, +CTAs, +conteo categorías |
| `src/components/sections/CatalogoBlog.astro` | +formatDate(), +readTime(), +metadata cards, +page label, +JS update |
| `src/styles/pages.css` | Grid 3-col, +.blogcard__meta, sidebar 300px, badge translúcido, responsive 960px |

---

## Verificación

- Grid renderiza 324px × 3 columnas ✓
- 9 cards visibles por página ✓
- Hero con 2 CTAs funcionales ✓
- Metadata (fecha + tiempo lectura) en 67 cards ✓
- Indicador "Página 1 de 8" funcional ✓
- Sin errores de build ✓
