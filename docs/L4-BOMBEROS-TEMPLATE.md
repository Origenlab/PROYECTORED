# L4 Equipo Bomberos — Template y Guía de Evolución

> Documento de referencia para el patrón canónico de las páginas L4 de equipo para bomberos.
> Última actualización: 2026-04-11.
>
> Referencia canónica original L4: `extintores/[producto].astro`  
> Template de bomberos: `src/pages/equipo-bomberos/[producto].astro`  
> Datos: `src/data/bomberos-productos.ts`

---

## Resumen del patrón

Las páginas L4 de equipo para bomberos están **100% homologadas** con el patrón canónico de extintores (`/extintores/polvo-seco/` como referencia). El template es un archivo Astro dinámico que genera 7 páginas desde un único `[producto].astro`.

### Páginas generadas

| Slug                    | Ruta                                        | Variantes | Imagen           |
|-------------------------|---------------------------------------------|-----------|------------------|
| `trajes-estructurales`  | `/equipo-bomberos/trajes-estructurales/`    | ✅ 3       | trajes-nfpa.avif |
| `era`                   | `/equipo-bomberos/era/`                     | ✅ 3       | era-scba.avif    |
| `rescate-hidraulico`    | `/equipo-bomberos/rescate-hidraulico/`      | ✅ 3       | herramientas.avif|
| `rescate-neumatico`     | `/equipo-bomberos/rescate-neumatico/`       | —         | —                |
| `rescate-electrico`     | `/equipo-bomberos/rescate-electrico/`       | —         | —                |
| `arneses-rescate-altura`| `/equipo-bomberos/arneses-rescate-altura/`  | ✅ 3       | arneses.avif     |
| `complementos-uniforme` | `/equipo-bomberos/complementos-uniforme/`   | —         | —                |

---

## Orden canónico de secciones

```
CategoryLayout (Hero + Stats + CtaBar)
  └─ slot:
       S0  cat-section--white   → [OPCIONAL] SectionHeaderDuo + catidx-grid (.ccard) + ccard--cta-wa
                                   Solo si `data.variantes` existe y tiene items
       S1  cat-section--gray*   → SectionHeaderDuo + l4-svc-grid (características) + inline-cta
       S2  cat-section--white*  → SectionHeaderDuo + l4-svc-grid (para quién / usos) + inline-cta
       S3  cat-section--white   → SectionHeaderDuo + l4-svc-grid (servicios, <a> con flecha)
       S4                       → <TrustIndex />  (componente global)
       S5                       → <NormasBomberos />  (6 normas NFPA)
       S6  cat-section--white   → SectionHeaderDuo + catidx-grid--compact (.ccard--text) + ccard--cta-wa
FaqCotizacionIndex → CTAFinal (via CategoryLayout)
```

> *La alternancia S1/S2 depende de si hay variantes:
> - **Con variantes**: S0=white → S1=gray → S2=white (alternancia correcta)
> - **Sin variantes**: S1=white → S2=gray (alternancia correcta)

---

## Interface de datos — `ProductoBomberoData`

```typescript
// VarianteBombero — modelo/opción individual
export interface VarianteBombero {
  nombre: string       // Título de la tarjeta
  badge?: string       // Badge superpuesto (ej. "NFPA 1981 · 30 min")
  desc: string         // Descripción de 2-3 oraciones
  specs: string        // Línea de specs: "Material: X · Norma: Y · Tallas: Z"
  waText: string       // Mensaje pre-llenado para WhatsApp
}

// Campos nuevos en ProductoBomberoData (además de los originales)
img?: string                   // Imagen del producto para las tarjetas de variantes
variantes?: VarianteBombero[]  // Lista de modelos/opciones disponibles

// Textos del SectionHeaderDuo de la sección de variantes (todos opcionales):
variantesEyebrow?: string      // Default: 'Opciones disponibles'
variantesTitleLine1?: string   // Default: 'Modelos y configuraciones'
variantesTitleLine2?: string
variantesBodyPara?: string
```

---

## Sección de variantes — reglas de contenido

### Cuándo agregar variantes

Agregar variantes cuando el producto tiene diferenciación real de oferta:
- Distintos materiales o niveles de protección (Nomex vs PBI en trajes)
- Diferentes capacidades operativas (30 min vs 45 min en ERA)
- Sistemas alternativos con trade-offs claros (hidráulico vs eléctrico)
- Paquetes de dotación completa vs componente individual

### Cuándo NO agregar variantes

- Cuando el diferenciador es solo la marca/fabricante (no confunde al cliente)
- Cuando hay demasiadas opciones y se necesita asesoría previa para seleccionar
- Cuando el producto es más un servicio que un equipo configurable

### Estructura de cada variante

Cada `VarianteBombero` debe tener:
1. **nombre**: Específico y descriptivo ("ERA 30 minutos — Cilindro 6.8 L / 300 bar")
2. **badge**: Norma + característica clave ("NFPA 1981 · 30 min")
3. **desc**: 2-3 oraciones con qué es, para qué sirve y cuándo es la opción correcta
4. **specs**: 3-4 parámetros técnicos en formato "Clave: Valor" separados por ·
5. **waText**: Mensaje que empieza con "Hola, necesito cotizar..." y describe exactamente qué busca el cliente

---

## Datos de los 4 productos con variantes

### 1. Trajes Estructurales (`trajes-estructurales`)

| Variante             | Badge               | Diferenciador principal          |
|----------------------|---------------------|----------------------------------|
| Nomex® III           | NFPA 1971           | Precio/desempeño, cuerpos munic. |
| PBI Matrix           | PBI · Máx. prot.   | Alta demanda, brigadas industriales |
| Dotación completa    | EPP completo        | Equipamiento de personal nuevo   |

**img**: `/imagenes/equipo-bomberos/trajes-estructurales-nfpa-1971.avif`

### 2. ERA — Respiración Autónoma (`era`)

| Variante                | Badge            | Diferenciador principal          |
|-------------------------|------------------|----------------------------------|
| ERA 30 min / 6.8L       | NFPA 1981 · 30m  | Combate interior estándar        |
| ERA 45 min / 9L         | NFPA 1981 · 45m  | Instalaciones grandes, brigadas  |
| Recarga y mantenimiento | Servicio DOT/CGA | Mantenimiento, recarga urgente   |

**img**: `/imagenes/equipo-bomberos/era-scba-respiracion-autonoma.avif`

### 3. Rescate Hidráulico (`rescate-hidraulico`)

| Variante                    | Badge               | Diferenciador principal         |
|-----------------------------|---------------------|---------------------------------|
| Sistema hidráulico gasolina | Kit completo · Gas  | Máxima fuerza, carretera        |
| Sistema eléctrico eDRAULIC  | Batería · IP67      | Agilidad, espacios confinados   |
| Quijadas combinadas          | Combi-tool          | Un operador, complemento        |

**img**: `/imagenes/equipo-bomberos/herramientas-rescate-bombero.avif`

### 4. Arneses y Rescate en Altura (`arneses-rescate-altura`)

| Variante                | Badge           | Diferenciador principal          |
|-------------------------|-----------------|----------------------------------|
| Arnés Clase II NFPA 1983| Clase II        | Rescatista individual, básico    |
| Kit completo 50 m       | Kit 50 m        | Sistema completo listo para uso  |
| Sistema polipasto 6:1   | Polipasto 6:1   | Elevación de víctimas, USAR      |

**img**: `/imagenes/equipo-bomberos/arneses-rescate-altura.avif`

---

## Imágenes del sistema

### Imágenes principales por producto (para variantes)

```
/imagenes/equipo-bomberos/trajes-estructurales-nfpa-1971.avif   → trajes-estructurales
/imagenes/equipo-bomberos/era-scba-respiracion-autonoma.avif    → era
/imagenes/equipo-bomberos/herramientas-rescate-bombero.avif     → rescate-hidraulico
/imagenes/equipo-bomberos/arneses-rescate-altura.avif           → arneses-rescate-altura
```

### Galerías por producto (imágenes adicionales)

```
/imagenes/equipo-bomberos/trajes/galeria-1.avif (jpg)
/imagenes/equipo-bomberos/trajes/galeria-2.avif (jpg)
/imagenes/equipo-bomberos/trajes/galeria-3.avif (jpg)

/imagenes/equipo-bomberos/rescate-hidraulico/galeria-1.avif (jpg)

/imagenes/equipo-bomberos/arneses/galeria-1.avif (jpg)
/imagenes/equipo-bomberos/arneses/galeria-2.avif (jpg)
/imagenes/equipo-bomberos/arneses/galeria-3.avif (jpg)

/imagenes/equipo-bomberos/respiracion-autonoma/galeria-1.avif (jpg)
/imagenes/equipo-bomberos/respiracion-autonoma/galeria-2.avif (jpg)
/imagenes/equipo-bomberos/respiracion-autonoma/galeria-3.avif (jpg)
```

> **Nota**: Las galerías están disponibles pero el template actual no las usa.
> Están listas para una futura sección de galería (ver "Evolución futura" abajo).

---

## Evolución futura (roadmap)

### Corto plazo

**1. Galería de imágenes por producto**
- Agregar campo `galeria?: string[]` a `ProductoBomberoData`
- Agregar datos de galería a los 4 productos (ya hay imágenes en los subdirectorios)
- Nueva sección entre S2 y S3: galería horizontal o grid 3-col con `Img.astro`
- CSS: `.l4-gallery-grid` en `product-page.css`

**2. Agregar variantes a `rescate-neumatico`, `rescate-electrico` y `complementos-uniforme`**
- Neumático: cojín 20T / cojín 40T / cojín 70T + kit regulador
- Eléctrico: cortadora / esparcidor / kit completo (ya tienen datos listos)
- Complementos: casco / guantes+capucha / dotación completa

### Mediano plazo

**3. Sección de ficha técnica descargable**
- Agregar campo `fichaTecnicaUrl?: string` (PDF por producto)
- Renderizar CTA de descarga en el hero derecho
- Útil para clientes industriales que necesitan presentar al área técnica

**4. Tabla comparativa de variantes**
- Cuando hay 3+ variantes con specs similares, una tabla comparativa (vs. tarjetas)
- Mejor para usuarios que comparan características técnicas (bomberos profesionales)
- HTML: `<table class="l4-compare-table">` en product-page.css

**5. Carrusel de galería mobile**
- Para mobile: galería horizontal con scroll snap en lugar del grid fijo
- Sin JS — solo CSS scroll-snap
- Solo si se confirma que hay múltiples imágenes de calidad

### Largo plazo

**6. Schema.org Product + Offer**
- Agregar JSON-LD `Product` con `@type: Product`, nombre, descripción, imagen y `Offer`
- Mejorar visibilidad en búsquedas de producto en Google
- Requiere `priceRange` o indicación de cotización bajo demanda

**7. Calculadora de dotación**
- Widget estático (sin JS) que muestra el costo estimado de equipar N personas
- Parámetros: número de personas, tipo de brigada (municipal / industrial / PC)
- CTA final: "Solicitar cotización detallada por WhatsApp"

---

## Reglas CSS del template

Todos los estilos están en archivos globales — **nada de CSS duplicado**:

| Clase / elemento            | Archivo           | Descripción                                     |
|-----------------------------|-------------------|-------------------------------------------------|
| `.cat-section`              | `pages.css`       | Sección base con padding top/bottom             |
| `.cat-section--white`       | `pages.css`       | Fondo blanco                                    |
| `.cat-section--gray`        | `pages.css`       | Fondo gris claro (#F8F8F8)                      |
| `.l4-svc-grid`              | `product-page.css`| Grid de .srv-mini (características/usos)        |
| `.srv-mini`                 | `product-page.css`| Card numerada 01/02… con título y subtítulo     |
| `.inline-cta`               | `product-page.css`| CTA texto + botón inline bajo el grid           |
| `.catidx-grid`              | `pages.css`       | Grid de .ccard (variantes y otros productos)    |
| `.catidx-grid--compact`     | `[producto].astro`| Variante scoped: más columnas para items sin img|
| `.ccard`                    | `pages.css`       | Card con imagen + overlay + badge + desc + cta  |
| `.ccard--text`              | `[producto].astro`| Variante scoped: card sin imagen (otros prods.) |
| `.ccard--cta-wa`            | `pages.css`       | Card CTA WhatsApp (fondo oscuro, botón verde)   |
| `.ccard__specs`             | `pages.css`       | Línea de specs monoespaciada en cards           |
| `.ccard__badge--top`        | `[producto].astro`| Badge NFPA pequeño arriba de card sin imagen    |
| `.titulo-duo`               | `components.css`  | SectionHeaderDuo 2 columnas                     |

> **Regla de oro**: CERO transiciones/animaciones en cards — solo `.btn` y `button`.

---

## Checklist para agregar un nuevo producto con variantes

- [ ] Agregar `slug` + `label` + `badge` a `BOMBERO_PRODUCTS` en `bomberos-productos.ts`
- [ ] Crear entrada en `BOMBERO_PAGES` con todos los campos requeridos
- [ ] Agregar `img` apuntando a un AVIF existente en `/imagenes/equipo-bomberos/`
- [ ] Definir 2–4 `variantes` con nombre, badge, desc (2-3 frases), specs y waText
- [ ] Definir `variantesEyebrow`, `variantesTitleLine1`, `variantesTitleLine2`, `variantesBodyPara`
- [ ] Verificar que el AVIF existe en el directorio `public/imagenes/equipo-bomberos/`
- [ ] Correr `npx tsc --noEmit` para verificar tipos
- [ ] Correr `npx astro build` para verificar que las páginas se generan correctamente
- [ ] Actualizar `graphify-out/GRAPH_REPORT.md` con el estado del nuevo producto
- [ ] Actualizar `docs/L4-BOMBEROS-TEMPLATE.md` con el nuevo producto

---

## Véase también

- `docs/LAYOUT-SYSTEM.md` — Arquitectura completa L1–L4
- `docs/L3-TEMPLATE.md` — Template L3 y reglas de homologación
- `docs/PROMPT-IMAGEFX-SERVICIOS.md` — Generación de imágenes con ImageFX
- `ProyectoRed-Vault/05 - Desarrollo/L2 — Equipo Bomberos (Aprobada).md` — Documentación L2
- `src/pages/extintores/[producto].astro` — Referencia canónica L4 (extintores)
- `src/data/extintores-productos.ts` — Referencia de estructura de datos L4
