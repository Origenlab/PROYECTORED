# Prompt Profesional para Gemini — Imágenes de Extintores (Proyecto Red)

---

## DIAGNÓSTICO DEL ESTADO ACTUAL

### Problemas detectados

1. **Proporción incorrecta:** las imágenes actuales son **1024×1024 (1:1 cuadradas)**, pero el contenedor CSS usa `aspect-ratio: 16/9`. Esto hace que `object-fit: cover` recorte ~44% de la imagen verticalmente — se pierde casi la mitad del contenido visual.
2. **Peso excesivo:** los PNG pesan entre 393 KB y 700 KB cada uno (~6 MB total para 10 imágenes). Los AVIF pesan 44–84 KB, pero podrían optimizarse más si las imágenes se generan al tamaño correcto desde el origen.
3. **Resolución sobredimensionada:** las imágenes se generaron a 1024×1024 pero se renderizan a un máximo de ~321×180 px en desktop. Esto desperdicia ancho de banda al servir 5× más píxeles de los necesarios.
4. **Conflicto CSS en Img.astro:** el inline style `height: auto` pelea con `.ccard__header img { height: 100% }`, lo que puede causar que la imagen no llene correctamente el contenedor 16:9.

### Especificaciones técnicas del contenedor

- **Aspect ratio:** `16:9` (definido en `.ccard__header { aspect-ratio: 16/9 }`)
- **Tamaño máximo de renderizado:** ~321×180 px por card en desktop (grid de 4 columnas en 1400px)
- **Object-fit:** `cover` — la imagen debe llenar todo el espacio sin distorsión
- **Fondo del contenedor:** `#111111` (negro oscuro)
- **Overlay:** gradiente `transparent → rgba(0,0,0,0.35)` de arriba hacia abajo
- **Opacidad de imagen:** `0.85` (normal) → `0.95` (hover)
- **Badge:** etiqueta roja posicionada en esquina superior izquierda

---

## PROMPT MAESTRO PARA GEMINI (Copiar y pegar)

> **IMPORTANTE:** Usa este prompt como base para CADA imagen. Cambia solamente la sección `[PRODUCTO ESPECÍFICO]` según la tabla de abajo.

```
Genera una fotografía profesional de producto para una tienda en línea de equipos contra incendio.

ESPECIFICACIONES TÉCNICAS OBLIGATORIAS:
— Resolución: exactamente 1280 × 720 píxeles (ratio 16:9 horizontal/landscape)
— Formato de salida: PNG con fondo sólido (NO transparente)
— Orientación: horizontal (landscape), NUNCA vertical ni cuadrada

COMPOSICIÓN Y ENCUADRE:
— El extintor debe ocupar entre el 55% y el 70% de la altura del encuadre
— Centrado verticalmente con ligero sesgo hacia la izquierda (regla de tercios, dejando espacio a la derecha para texto/badge)
— Ángulo de cámara: vista frontal con una inclinación de 15-20 grados (three-quarter view) para dar volumen y profundidad
— El producto debe verse completo de arriba a abajo — no recortar la base ni la manija

ILUMINACIÓN Y AMBIENTE:
— Iluminación de estudio profesional: luz principal suave desde la esquina superior izquierda (key light a 45°)
— Luz de relleno sutil desde la derecha para eliminar sombras duras
— Rim light (contraluz sutil) para separar el producto del fondo y dar definición al contorno
— Sombra suave y difusa debajo del producto para darle anclaje visual al piso
— Sin reflejos especulares agresivos — acabado mate profesional

FONDO Y CONTEXTO:
— Fondo oscuro con gradiente sutil: de #1a1a2e (azul-negro profundo) en la parte superior a #16213e (azul marino oscuro) en la parte inferior
— El fondo debe ser limpio y uniforme — sin texturas, partículas, ni elementos distractores
— Opcionalmente puede incluir una línea de luz ambiental muy sutil en el horizonte para dar profundidad
— NO incluir escenarios, habitaciones, personas ni objetos adicionales

ESTILO VISUAL:
— Estética comercial premium tipo catálogo industrial profesional
— Colores fieles al producto real: rojo (para PQS/ABC), plateado/cromado (para CO₂), amarillo (para AFFF), etc.
— Las etiquetas del extintor deben ser legibles pero NO con texto inventado — si no puedes reproducir texto real, deja la etiqueta como un bloque de color sólido del fabricante
— Acabado fotorrealista con materiales convincentes: metal cepillado, pintura industrial, plástico de alta resistencia, caucho en mangueras

PRODUCTO ESPECÍFICO:
[PRODUCTO ESPECÍFICO — ver tabla abajo]

RESTRICCIONES ABSOLUTAS:
— NO generar texto, logos, marcas ni letras sobre la imagen
— NO agregar marcos, bordes, viñetas ni watermarks
— NO usar fondo blanco ni fondo transparente
— NO generar imágenes verticales ni cuadradas — DEBE ser 16:9 horizontal
— NO inventar modelos de extintores fantásticos — debe verse como un extintor comercial real disponible en México
```

---

## TABLA DE PRODUCTO ESPECÍFICO POR CARD

Reemplaza `[PRODUCTO ESPECÍFICO]` con la descripción correspondiente:

### 1. Polvo Seco ABC (PQS)
```
Extintor de polvo químico seco ABC (PQS) de 6 kg. Cilindro metálico color ROJO brillante con pintura industrial. Manija de acero cromado tipo palanca con seguro/precinto plástico. Manguera negra de caucho con boquilla cónica. Manómetro circular visible en el cuello del cilindro indicando zona verde (presurizado). Etiqueta frontal rectangular blanca con franja roja. Base plástica negra estabilizadora.
```

### 2. CO₂ — Dióxido de Carbono
```
Extintor de CO₂ (dióxido de carbono) de 5 kg. Cilindro de acero al carbón color ROJO oscuro con acabado liso y brillante, forma más esbelta y alargada que un PQS. Corneta/difusor de descarga grande color NEGRO de plástico rígido antiestático al final de una manguera corta. Válvula cromada tipo squeeze-grip en la parte superior. Sin manómetro (los de CO₂ no llevan manómetro). Etiqueta frontal con franja identificadora.
```

### 3. AFFF — Espuma Mecánica
```
Extintor de espuma AFFF de 9 litros. Cilindro metálico color AMARILLO CREMA/BEIGE (color característico de los AFFF en México). Forma más ancha y robusta que un PQS por ser de base líquida. Manguera con boquilla tipo abanico para generar espuma. Manija de acero con seguro. Manómetro visible. Etiqueta con identificación de agente AFFF/espuma mecánica. El amarillo claro debe ser distintivo y diferenciarlo claramente del rojo de los PQS.
```

### 4. Tipo K — Cocinas Industriales
```
Extintor Tipo K (clase K para cocinas) de 6 litros. Cilindro metálico color PLATEADO/ACERO INOXIDABLE con acabado satinado (cromado mate). Diseño más compacto y elegante que los extintores convencionales. Manguera con boquilla de descarga tipo lanza fina para aplicación dirigida. Manija ergonómica con gatillo de activación. Sin manómetro visible (muchos Tipo K son de cartucho). Etiqueta con identificación de agente de acetato de potasio. Aspecto limpio y apto para cocinas profesionales.
```

### 5. Púrpura K — Bicarbonato de Potasio
```
Extintor de Púrpura K (bicarbonato de potasio) de 9 kg. Cilindro metálico color ROJO con una franja o banda PÚRPURA/VIOLETA distintiva que lo diferencia del PQS estándar. Forma robusta e industrial, similar al PQS pero con identificación púrpura visible. Manija de acero reforzada tipo industrial. Manguera gruesa con boquilla de descarga amplia. Manómetro circular. Aspecto de uso pesado/industrial — este extintor es para entornos petroquímicos y de alta intensidad.
```

### 6. Agua a Presión
```
Extintor de agua a presión de 9 litros. Cilindro metálico color PLATEADO/ALUMINIO NATURAL (sin pintura roja — los de agua suelen ser plateados o con franja verde). Forma cilíndrica alta y esbelta. Bomba de presurización manual en la parte superior (tipo pump) O válvula con manómetro según modelo. Manguera delgada con boquilla de chorro. Aspecto sencillo y utilitario — es el extintor más básico y ecológico, para fuegos clase A (sólidos).
```

### 7. Cold Fire — Enfriamiento Avanzado
```
Extintor Cold Fire de 9 litros. Cilindro metálico con diseño MODERNO y distintivo — puede ser color AZUL o BLANCO con detalles gráficos en azul y rojo (marca Cold Fire). Aspecto más tecnológico y contemporáneo que un extintor convencional. Boquilla con sistema de aspersión fina. La estética debe comunicar innovación y tecnología avanzada. Sin manguera larga — algunos modelos tienen boquilla integrada tipo spray.
```

### 8. Automáticos — Sin Intervención
```
Extintor automático tipo bulbo/esfera de disparo autónomo por temperatura. Cilindro metálico ROJO compacto con mecanismo de activación térmica por ampolla de vidrio (bulbo rojo visible). Montado en un soporte/bracket metálico para instalación en techo o pared. Sin manija ni manguera — este extintor se activa solo al detectar calor. Incluye cadena o soporte de montaje visible. Aspecto compacto, técnico e industrial — diseñado para áreas desatendidas como cuartos de máquinas o bodegas.
```

### 9. ABC Multipropósito
```
Extintor ABC multipropósito de 6 kg. Cilindro metálico color ROJO estándar — MUY similar al PQS pero con etiquetado que enfatiza "ABC" claramente. Manija de acero con seguro plástico amarillo (precintos de color son comunes). Manguera negra con boquilla estándar. Manómetro en zona verde. Este es el extintor "clásico" que todo mundo reconoce — la imagen debe transmitir confianza y familiaridad. Debe diferenciarse visualmente del PQS (#1) mediante un ángulo ligeramente diferente o un tamaño de etiqueta distinto.
```

### 10. Agente Limpio (FE-36)
```
Extintor de agente limpio FE-36 (HFC-236fa). Cilindro metálico color BLANCO o CREMA CLARO (los agentes limpios se distinguen visualmente por colores claros). Diseño premium y sofisticado — acabado liso, limpio, moderno. Manguera con boquilla de precisión para descarga limpia sin residuos. Manija cromada de alta calidad. Etiqueta minimalista. Aspecto elegante tipo "sala de servidores" o "museo" — este extintor protege equipos electrónicos costosos y materiales sensibles sin dejar residuos.
```

---

## NOMBRES DE ARCHIVO (SEO-OPTIMIZADO)

Cada imagen debe guardarse con su nombre descriptivo en español, usando solo minúsculas, guiones, y sin acentos ni caracteres especiales. Necesitas DOS versiones: `.avif` (principal) y `.png` (fallback).

| # | Card | Nombre de archivo |
|---|------|-------------------|
| 1 | Polvo Seco ABC (PQS) | `venta-extintor-pqs-abc-certificado-nom-mexico` |
| 2 | CO₂ — Dióxido de Carbono | `extintor-co2-dioxido-carbono-equipo-electrico-cdmx` |
| 3 | AFFF — Espuma Mecánica | `extintor-afff-espuma-mecanica-liquidos-inflamables` |
| 4 | Tipo K — Cocinas Industriales | `extintor-tipo-k-cocina-industrial-restaurante` |
| 5 | Púrpura K — Bicarbonato de Potasio | `extintor-purpura-k-bicarbonato-potasio-industrial` |
| 6 | Agua a Presión | `extintor-agua-a-presion-fuegos-clase-a` |
| 7 | Cold Fire — Enfriamiento Avanzado | `extintor-cold-fire-agente-enfriamiento-rapido` |
| 8 | Automáticos — Sin Intervención | `extintor-automatico-proteccion-areas-desatendidas` |
| 9 | ABC Multipropósito | `extintor-abc-multiproposito-comercio-industria` |
| 10 | Agente Limpio | `extintor-agente-limpio-fe36-sin-residuos` |

> Los nombres ya coinciden con los que usa el componente `CatalogoExtintores.astro` — NO necesitas cambiar el código.

---

## POST-PROCESAMIENTO: Conversión y Optimización

### Paso 1 — Gemini genera las imágenes como PNG a 1280×720

### Paso 2 — Redimensionar a 640×360 para web
Gemini va a generar a 1280×720, pero para web necesitas 640×360 (retina-ready en cards de 320px):

```bash
# macOS con sips (nativo):
for f in *.png; do
  sips -z 360 640 "$f"
done

# O con ImageMagick:
for f in *.png; do
  magick "$f" -resize 640x360! -quality 92 "$f"
done
```

### Paso 3 — Convertir a AVIF (formato principal)
```bash
# Con avifenc (instalar: brew install libavif)
for f in *.png; do
  avifenc --min 20 --max 35 --speed 4 -y 420 "$f" "${f%.png}.avif"
done

# O con ImageMagick 7+:
for f in *.png; do
  magick "$f" -quality 45 "${f%.png}.avif"
done

# O con squoosh-cli:
npx @nicolo-ribaudo/squoosh-cli --avif '{"quality":40,"speed":4}' *.png
```

### Paso 4 — Optimizar los PNG fallback
```bash
# Con pngquant (instalar: brew install pngquant)
pngquant --quality=65-85 --strip --force *.png

# O con optipng:
optipng -o3 *.png
```

### Peso objetivo por imagen:
| Formato | Tamaño objetivo | Máximo aceptable |
|---------|-----------------|------------------|
| AVIF | 15–25 KB | 40 KB |
| PNG | 60–100 KB | 150 KB |

---

## INTEGRACIÓN CON EWWW / ExactDN

El sitio ya tiene configurado ExactDN (EWWW.io) en `src/config/site.ts`:

```
CDN host: ewvydcs5uyw.exactdn.com
Origin: proyectored.com.mx
```

**En producción**, `cdnUrl()` transforma automáticamente las rutas:
```
/imagenes/extintores/extintor-co2-dioxido-carbono-equipo-electrico-cdmx.avif
→ https://ewvydcs5uyw.exactdn.com/imagenes/extintores/extintor-co2-dioxido-carbono-equipo-electrico-cdmx.avif?w=640&quality=85
```

**Para que funcione correctamente:**
1. Las imágenes DEBEN estar en `public/imagenes/extintores/`
2. Cada imagen necesita DOS archivos: `.avif` + `.png`
3. El componente `Img.astro` genera un `<picture>` con `<source type="image/avif">` + `<img src=".png">`
4. ExactDN sirve desde CDN y puede aplicar compresión adicional automática
5. **NO activar CDN en desarrollo** — `CDN.enabled` ya está en `false`

### Activar CDN para producción:
En `src/config/site.ts`, cambiar:
```typescript
export const CDN = {
  enabled: true,  // ← cambiar a true
  host: 'ewvydcs5uyw.exactdn.com',
  origin: 'proyectored.com.mx',
}
```

---

## FIX NECESARIO EN Img.astro

El inline style actual tiene `height: auto` que pelea con el CSS `.ccard__header img { height: 100% }`. Esto causa que la imagen no llene el contenedor 16:9.

**Cambio requerido en `src/components/ui/Img.astro`:**

```diff
- style="display: block; max-width: 100%; height: auto; opacity: 1 !important; visibility: visible !important;"
+ style="display: block; width: 100%; height: 100%; object-fit: cover; opacity: 1 !important; visibility: visible !important;"
```

Esto asegura que la imagen llene correctamente el `<picture>` que está dentro del `.ccard__header` con `aspect-ratio: 16/9`.

---

## UBICACIÓN FINAL DE ARCHIVOS

```
public/imagenes/extintores/
├── venta-extintor-pqs-abc-certificado-nom-mexico.avif      (~20 KB)
├── venta-extintor-pqs-abc-certificado-nom-mexico.png        (~80 KB)
├── extintor-co2-dioxido-carbono-equipo-electrico-cdmx.avif
├── extintor-co2-dioxido-carbono-equipo-electrico-cdmx.png
├── extintor-afff-espuma-mecanica-liquidos-inflamables.avif
├── extintor-afff-espuma-mecanica-liquidos-inflamables.png
├── extintor-tipo-k-cocina-industrial-restaurante.avif
├── extintor-tipo-k-cocina-industrial-restaurante.png
├── extintor-purpura-k-bicarbonato-potasio-industrial.avif
├── extintor-purpura-k-bicarbonato-potasio-industrial.png
├── extintor-agua-a-presion-fuegos-clase-a.avif
├── extintor-agua-a-presion-fuegos-clase-a.png
├── extintor-cold-fire-agente-enfriamiento-rapido.avif
├── extintor-cold-fire-agente-enfriamiento-rapido.png
├── extintor-automatico-proteccion-areas-desatendidas.avif
├── extintor-automatico-proteccion-areas-desatendidas.png
├── extintor-abc-multiproposito-comercio-industria.avif
├── extintor-abc-multiproposito-comercio-industria.png
├── extintor-agente-limpio-fe36-sin-residuos.avif
└── extintor-agente-limpio-fe36-sin-residuos.png
```

---

## CHECKLIST DE VERIFICACIÓN

- [ ] Cada imagen es exactamente 16:9 (1280×720 de origen → 640×360 para web)
- [ ] El producto está centrado con espacio para el badge superior izquierdo
- [ ] Fondo oscuro (#1a1a2e → #16213e) — NO blanco, NO transparente
- [ ] Sin texto, logos ni marcas inventadas sobre la imagen
- [ ] Archivo `.avif` + `.png` por cada imagen
- [ ] AVIF pesa menos de 40 KB, PNG menos de 150 KB
- [ ] Nombres de archivo coinciden exactamente con la tabla
- [ ] Archivos colocados en `public/imagenes/extintores/`
- [ ] Fix de Img.astro aplicado (height: 100% + object-fit: cover)
- [ ] En el navegador las imágenes llenan el contenedor 16:9 sin recorte excesivo
