---
source_file: "src/config/site.ts"
type: "document"
community: "Configuración del Sitio"
location: "Global"
tags:
  - graphify/document
  - graphify/EXTRACTED
  - community/Configuración_del_Sitio
  - imagenes
  - cdn
  - seo
---

# ExactDN CDN — Optimización de Imágenes

## Proveedor

- **Servicio**: EWWW.io / ExactDN (Easy IO)
- **Subdominio CDN**: `ewvydcs5uyw.exactdn.com`
- **Origen**: `proyectored.com.mx`
- **Estado**: Activo en producción

## Qué hace ExactDN automáticamente

1. **Conversión de formato**: Sirve WebP o AVIF según el header `Accept` del navegador
2. **Compresión**: Optimiza peso sin pérdida visible de calidad
3. **CDN edge**: Sirve desde el nodo más cercano al visitante
4. **Resize inteligente**: Ajusta al tamaño solicitado vía parámetros `w` y `h`
5. **Strip de metadatos**: Elimina EXIF/GPS cuando se pasa `strip=all`

## Arquitectura de integración

### Configuración centralizada — `src/config/site.ts`

```typescript
export const CDN = {
  enabled: true,
  host: 'ewvydcs5uyw.exactdn.com',
  origin: 'proyectored.com.mx',
} as const
```

### Función helper — `cdnUrl(path, opts)`

Reescribe cualquier ruta local de imagen a URL de ExactDN:

```typescript
cdnUrl('/imagenes/extintores/co2.jpg', { w: 640, strip: 'all', lossy: 1 })
// → https://ewvydcs5uyw.exactdn.com/imagenes/extintores/co2.jpg?w=640&strip=all&lossy=1
```

**Parámetros disponibles:**
| Parámetro | Tipo    | Descripción                              |
|-----------|---------|------------------------------------------|
| `w`       | number  | Ancho máximo en px                       |
| `h`       | number  | Alto máximo en px                        |
| `quality` | number  | Calidad 1-100 (auto si no se especifica) |
| `strip`   | 'all'   | Elimina metadatos EXIF                   |
| `lossy`   | 1       | Permite compresión lossy                 |

### Componente `<Img>` — `src/components/ui/Img.astro`

Componente Astro que reemplaza al `<img>` nativo. Genera automáticamente:

- **URL vía CDN** con `strip=all` y `lossy=1`
- **srcset responsivo** en 6 anchos: 320, 480, 640, 768, 1024, 1280
- **sizes** para que el navegador descargue solo el tamaño que necesita
- **fetchpriority** para imágenes above-the-fold (LCP)
- **loading/decoding** configurables

**Uso obligatorio para nuevas imágenes:**

```astro
---
import Img from '../components/ui/Img.astro'
---

<!-- Card de producto -->
<Img
  src="/imagenes/extintores/co2.jpg"
  alt="Extintor CO2 para equipos electrónicos"
  width={640}
  height={360}
  loading="lazy"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
/>

<!-- Hero / LCP image -->
<Img
  src="/imagenes/equipo-bomberos/equipo-bomberos-hero.jpg"
  alt="Equipo para bomberos certificado NFPA"
  width={1280}
  height={720}
  loading="eager"
  fetchpriority="high"
  sizes="100vw"
/>
```

### Preconnect en BaseLayout

En `src/layouts/BaseLayout.astro` se incluyen hints de rendimiento:

```html
<link rel="preconnect" href="https://ewvydcs5uyw.exactdn.com" crossorigin />
<link rel="dns-prefetch" href="https://ewvydcs5uyw.exactdn.com" />
```

## Reglas para todas las imágenes

### SIEMPRE hacer:
1. Usar el componente `<Img>` para cualquier imagen nueva del sitio
2. Incluir `alt` descriptivo con palabras clave del producto/servicio
3. Declarar `width` y `height` para evitar CLS (Cumulative Layout Shift)
4. Usar `loading="eager"` + `fetchpriority="high"` solo en la primera imagen visible (LCP)
5. Usar `loading="lazy"` para todo lo que esté below-the-fold
6. Configurar `sizes` según el layout real de la imagen en el diseño

### NUNCA hacer:
1. Usar `<img src="/imagenes/...">` directamente — siempre pasar por CDN
2. Subir imágenes sin comprimir previamente (el CDN comprime, pero no reemplaza buena práctica)
3. Omitir el `alt` — es crítico para SEO de imágenes
4. Usar dimensiones que no correspondan al aspect ratio real de la imagen

### Configuración por tipo de imagen:

| Tipo de imagen     | loading  | fetchpriority | sizes                                                  |
|--------------------|----------|---------------|--------------------------------------------------------|
| Logo header        | eager    | high          | N/A (tamaño fijo)                                      |
| Hero / banner      | eager    | high          | `100vw`                                                |
| Card de producto   | lazy*    | —             | `(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px` |
| Galería producto   | lazy     | —             | `(max-width: 640px) 100vw, 50vw`                      |
| Logo footer        | lazy     | —             | N/A (tamaño fijo)                                      |
| OG / Twitter card  | —        | —             | No usan `<Img>`, usan URL directa en meta tags         |

*Las primeras 4 cards usan `loading="eager"` por ser above-the-fold.

### Para imágenes en meta tags (OG/Twitter):

Las imágenes de Open Graph y Twitter Card no usan el componente `<Img>` sino URLs directas. Para optimizarlas con CDN:

```astro
ogImage={`https://ewvydcs5uyw.exactdn.com/imagenes/og/extintores-og.jpg?w=1200&strip=all&lossy=1`}
```

## Archivos modificados (cobertura completa)

### Componentes globales:
- `src/components/global/Header.astro` — logo CDN directo
- `src/components/global/Footer.astro` — logo CDN directo

### Secciones con componente `<Img>`:
- `src/components/sections/CatalogoExtintores.astro`
- `src/components/sections/CatalogoProductos.astro`
- `src/components/sections/CategoriasIndex.astro`

### Páginas L3 con CDN directo:
- `src/pages/extintores/[producto].astro`
- `src/pages/equipo-bomberos/index.astro`
- `src/pages/senalamientos/index.astro`
- `src/pages/gabinetes/index.astro`
- `src/pages/mangueras/index.astro`
- `src/pages/sistemas/index.astro`
- `src/pages/primeros-auxilios/index.astro`
- `src/pages/equipo-seguridad/index.astro`
- `src/pages/servicios.astro`
- `src/pages/empresas/index.astro`
- `src/pages/blog/index.astro`

### Páginas L4 específicas:
- `src/pages/extintores/polvo-seco/pqs-automatico-6-kg.astro`
- `src/pages/extintores/polvo-seco/pqs-automatico-4-5-kg.astro`

## Connections

- [[site.ts]] - `contains` CDN config y cdnUrl() [EXTRACTED]
- [[Arquitectura Astro del Proyecto]] - `part_of` infraestructura del sitio [EXTRACTED]
- [[Base.astro Layout]] - `references` preconnect CDN [EXTRACTED]
- [[Complementos UI - Proyecto Red]] - `contains` componente Img.astro [EXTRACTED]
- [[Catálogo de Productos]] - `optimizes` imágenes de catálogo [EXTRACTED]
- [[Design Tokens (CSS Custom Properties)]] - `conceptually_related_to` configuración global [INFERRED]

#graphify/document #graphify/EXTRACTED #community/Configuración_del_Sitio #imagenes #cdn #seo
