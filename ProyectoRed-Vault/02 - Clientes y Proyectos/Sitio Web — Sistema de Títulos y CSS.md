# Sitio Web — Sistema de Títulos y CSS

> Documentación técnica del sistema de componentes de encabezado para proyectored.com.mx  
> Última actualización: 2026-04-10

---

## Regla de oro del CSS en este proyecto

**Todo el CSS de componentes va en `src/layouts/Base.astro` dentro del bloque `<style is:global>`.**  
**Nunca** escribir `<style>` scoped dentro de un componente `.astro`.

### Por qué

Astro + Vite en dev mode tiene un bug de caché: los estilos scoped de componentes nuevos no se incluyen en el CSS bundle hasta que el dev server hace un rebuild completo. Esto hace que los estilos simplemente no aparezcan aunque el componente esté correctamente escrito.

La solución definitiva: el bloque `<style is:global>` de `Base.astro` siempre se procesa. Es la única fuente confiable de CSS en este proyecto.

---

## Los dos sistemas de CSS que existen

| Archivo | Estado | Uso |
|---|---|---|
| `src/styles/global.css` | Legacy / parcial | Variables básicas, reset. Ya no agregar aquí. |
| `src/layouts/Base.astro` → `<style is:global>` | **Activo** | Todo el CSS del sitio. Líneas ~52–541. |
| `src/styles/components.css` | Referencia | Importado en Base.astro. Duplicado del is:global. |

**Las variables de color activas** son las de `Base.astro`:
- `--c-primary: #C41E24` (rojo)
- `--c-ink: #0a0a0a` (negro)
- `--c-muted: #5a5a5a`
- `--c-border: #e8e8e8`

---

## Componentes de título oficiales

### 1. `SectionHeader.astro`
**Ruta:** `src/components/ui/SectionHeader.astro`  
**Uso:** Encabezados de secciones secundarias, páginas internas.  
**Layout:** Una columna, centrado por default.

```astro
<SectionHeader
  eyebrow="Etiqueta"
  titleLine1="Primera línea del título"
  titleLine2="Segunda línea en rojo"
  desc="Descripción breve opcional."
  align="center"
/>
```

**Props:**
- `eyebrow?` — etiqueta pequeña roja
- `titleLine1` — obligatorio
- `titleLine2?` — aparece en rojo
- `desc?` — párrafo descriptivo
- `align?` — `'center'` (default) | `'left'`

**Clases CSS (en Base.astro is:global):**
`.section-header`, `.section-header--left`, `.section-header__eyebrow`, `.section-header__title`, `.section-header__desc`

---

### 2. `SectionHeaderDuo.astro`
**Ruta:** `src/components/ui/SectionHeaderDuo.astro`  
**Uso:** Encabezados principales del index y páginas de producto. Patrón editorial aprobado.  
**Layout:** Dos columnas — `5fr 6fr`.

```astro
<SectionHeaderDuo
  eyebrow="Catálogo completo"
  titleLine1="Categorías de equipo"
  titleLine2="contra incendios"
  desc="Ocho líneas de producto organizadas por tipo de riesgo."
  bodyPara1="Párrafo SEO largo para columna derecha..."
  bodyPara2="Segundo párrafo con llamada a la acción..."
/>
```

**Props:**
- `eyebrow?` — etiqueta con barra roja a la izquierda
- `titleLine1` — obligatorio
- `titleLine2?` — aparece en rojo
- `desc?` — debajo del título en columna izquierda
- `bodyPara1` — párrafo 1 columna derecha (SEO)
- `bodyPara2` — párrafo 2 columna derecha (CTA)
- `dark?` — variante oscura para fondos negros

**Diseño:**
- Columna izquierda: eyebrow + H2 + desc
- Columna derecha: 2 párrafos editoriales, separados por `border-left`
- `border-bottom` en toda la sección, sirve de separador antes del contenido
- Responsive: a 900px pasa a `1fr 1fr`, a 640px pasa a una sola columna

---

## Dónde está aplicado actualmente

| Sección | Componente | Estado |
|---|---|---|
| `CategoriasIndex.astro` (index) | `SectionHeaderDuo` | ✅ Aplicado |
| `productos.astro` | `SectionHeaderDuo` | ⏳ Pendiente |
| Resto del sitio | `SectionHeader` | Revisar |

---

## Errores a evitar

### Props tipo array/tupla
```astro
<!-- ❌ Esto falla silenciosamente en Astro SSR -->
<Componente body={["párrafo 1", "párrafo 2"]} />

<!-- ✅ Usar props separados -->
<Componente bodyPara1="párrafo 1" bodyPara2="párrafo 2" />
```

### CSS en el componente
```astro
<!-- ❌ NUNCA en este proyecto -->
<style>
  .mi-clase { color: red; }
</style>

<!-- ✅ Agregar en Base.astro <style is:global> -->
```

### Componente obsoleto
`TituloSeccion.astro` — existe en `src/components/ui/` pero nunca fue importado. No usar. Usar `SectionHeaderDuo` en su lugar.

---

## Flujo para agregar estilos nuevos

1. Crear el componente `.astro` **sin bloque `<style>`**
2. Abrir `src/layouts/Base.astro`
3. Ir al final del bloque `<style is:global>` (cerca de línea 541)
4. Agregar las clases del nuevo componente ahí
5. Hard refresh en el navegador: **Cmd + Shift + R**
