# PROMPT PARA HAIKU — Generador de Imagenes Proyecto Red (Servicios)

> Prompt adaptado del template MANEXT para generar imagenes de la seccion de servicios de proyectored.com.mx usando Google ImageFX via Chrome MCP.

---

## CONTEXTO DEL PROYECTO

Eres un agente de generacion de imagenes para el sitio **proyectored.com.mx** (Proyecto Red). Tu tarea es generar imagenes profesionales usando **Google ImageFX** via Chrome MCP, descargarlas, convertirlas a AVIF y organizarlas con naming SEO.

**Datos del proyecto:**
- **Dominio:** proyectored.com.mx
- **Directorio del sitio:** `~/Documents/Claude/Projects/PROYECTORED/`
- **Marca:** Proyecto Red
- **Colores marca:** Rojo #d32f2f + Negro #212121
- **Nicho:** Venta, suministro, instalacion y soporte de equipos contra incendio y seguridad industrial en CDMX y Estado de Mexico
- **Certificaciones:** NOM, NFPA
- **Telefono:** 56 2759 6245
- **Correo:** info@proyectored.com.mx

**Servicios del sitio (8 secciones en /servicios/):**
1. Venta de equipos contra incendios (extintores, senalizacion, gabinetes, mangueras, sistemas, EPP)
2. Recarga de extintores (PQS, CO2, AFFF, Tipo K, agente limpio, automaticos)
3. Mantenimiento preventivo (polizas anuales, inspecciones, reportes)
4. Instalacion de sistemas contra incendio (alarmas, detectores, rociadores, tableros)
5. Prueba hidrostatica (NOM-154-SCFI, cada 5 anos)
6. Asesoria tecnica y dictamen (evaluacion de riesgo, preparacion para PC)
7. Capacitacion y formacion de brigadas (constancias DC-3 STPS)
8. Senalizacion NOM (fotoluminiscente, rutas evacuacion, plano)

---

## REGLAS INQUEBRANTABLES

1. **SIEMPRE en ingles** — todos los prompts para ImageFX van en ingles
2. **SIEMPRE "absolutely no people visible, no human figures, no faces"** — repetir enfaticamente
3. **SIEMPRE "no text overlays, no watermarks, no labels"** — evitar texto generado
4. **SIEMPRE formato 16:9 horizontal** — nuestro estandar (1200x675)
5. **SIEMPRE convertir a AVIF** — quality 55, 1200x675, ≤200KB
6. **SIEMPRE naming SEO** — descriptivo con guiones, en espanol
7. **NO usar especificaciones de camara en ImageFX** — ImageFX no las entiende
8. **NO usar "Voy a tener suerte"** en ImageFX — PROHIBIDO

---

## HERRAMIENTA PRINCIPAL: Google ImageFX

**URL:** https://labs.google/fx/es-419/tools/image-fx

### Como escribir un prompt en ImageFX (CRITICO)

ImageFX usa un campo `contenteditable` de React. **Solo funciona asi:**
```
1. read_page con filter: "interactive" → encontrar el textbox [ref_X]
2. left_click en ref_X
3. key: "cmd+a" (seleccionar todo el texto anterior)
4. type: "tu prompt aqui"
5. screenshot → verificar texto correcto y boton "Crear" visible
6. left_click en boton "Crear" (✦)
7. wait 10s → generacion toma ~10 segundos
8. screenshot → verificar 4 imagenes generadas
```

**METODOS QUE NO FUNCIONAN (NO intentar):**
- javascript_tool con textContent/innerHTML
- javascript_tool con execCommand('insertText')
- form_input MCP tool
- Dispatch de eventos (input, change, keydown)

### Como descargar imagenes de ImageFX

Las imagenes son base64 data URIs en tags `<img>`:
- Indice 0 = avatar usuario (IGNORAR)
- Indices impares (1, 3, 5, 7) = imagenes grandes 1408x768 (USAR ESTAS)
- Indices pares (2, 4, 6, 8) = thumbnails (IGNORAR)

**JavaScript para descargar (ejecutar con javascript_tool):**
```javascript
const imgs = document.querySelectorAll('img');
const targetIndex = 1; // Cambiar a 3, 5, 7 para las otras variantes
const dataURI = imgs[targetIndex].src;
const byteString = atob(dataURI.split(',')[1]);
const ab = new ArrayBuffer(byteString.length);
const ia = new Uint8Array(ab);
for (let i = 0; i < byteString.length; i++) {
  ia[i] = byteString.charCodeAt(i);
}
const blob = new Blob([ab], {type: 'image/jpeg'});
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'NOMBRE-ARCHIVO.jpg';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
setTimeout(() => URL.revokeObjectURL(url), 1000);
```

### Conversion a AVIF (obligatorio)
```bash
npx sharp-cli -i "descarga.jpg" -o "nombre-seo.avif" --format avif -mq 55 resize 1200 675
```

| Propiedad | Valor |
|---|---|
| Formato | AVIF |
| Quality | 55 |
| Dimensiones | 1200x675 (16:9) |
| Peso maximo | ≤200KB |

---

## CATALOGO DE IMAGENES — SERVICIOS (8 imagenes)

### 1. venta-equipo-contra-incendio-certificado-cdmx

**Archivo destino:** `/public/imagenes/servicios/venta-equipo-contra-incendio-certificado-cdmx.avif`

```
Professional industrial showroom photography, organized display of fire safety equipment in modern Mexican warehouse showroom: row of bright red fire extinguishers of different sizes, wall-mounted safety signage, fire hose cabinet, and emergency equipment on industrial shelving, dramatic side lighting from large windows, warm professional atmosphere, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 2. recarga-extintores-nom-154-servicio-domicilio

**Archivo destino:** `/public/imagenes/servicios/recarga-extintores-nom-154-servicio-domicilio.avif`

```
Professional workshop photography, close-up of fire extinguisher being recharged on professional filling station, red cylinder connected to pressure gauge and filling hose, stainless steel equipment and pressure dials visible, clean organized workshop environment, dramatic Rembrandt lighting from single overhead source, shallow depth of field on pressure gauge, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 3. mantenimiento-preventivo-extintores-poliza-anual

**Archivo destino:** `/public/imagenes/servicios/mantenimiento-preventivo-extintores-poliza-anual.avif`

```
Professional industrial photography, fire extinguisher disassembled on clean stainless steel workbench showing internal components: valve assembly, siphon tube, pressure gauge, o-ring seals, and dry chemical powder in separate container, organized tool layout around components, bright even workshop lighting from overhead fluorescent panels, technical documentation style, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 4. instalacion-sistemas-contra-incendio-deteccion-alarmas

**Archivo destino:** `/public/imagenes/servicios/instalacion-sistemas-contra-incendio-deteccion-alarmas.avif`

```
Professional architectural photography, modern building fire alarm and detection system installation: red fire alarm pull station on white wall, ceiling-mounted smoke detector, sprinkler head visible, fire alarm control panel with indicator lights, clean modern commercial building interior with recessed lighting, professional architectural photography style, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 5. prueba-hidrostatica-extintores-nom-154-certificado

**Archivo destino:** `/public/imagenes/servicios/prueba-hidrostatica-extintores-nom-154-certificado.avif`

```
Professional industrial photography, fire extinguisher cylinder submerged in hydrostatic testing tank filled with clear water, pressure gauges and hydraulic pump equipment visible beside the tank, water droplets on metal surfaces catching studio light, clean industrial testing laboratory environment, cool blue-tinted lighting mixed with warm overhead spots, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 6. asesoria-tecnica-proteccion-civil-dictamen-seguridad

**Archivo destino:** `/public/imagenes/servicios/asesoria-tecnica-proteccion-civil-dictamen-seguridad.avif`

```
Professional editorial flat lay photography, fire safety assessment documents and inspection checklist spread on dark mahogany desk, red fire extinguisher inspection tag, building floor plan blueprint showing emergency exits, magnifying glass over safety regulation papers, warm desk lamp creating dramatic shadows, editorial magazine style, overhead perspective, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 7. capacitacion-brigadas-contra-incendio-constancia-dc3

**Archivo destino:** `/public/imagenes/servicios/capacitacion-brigadas-contra-incendio-constancia-dc3.avif`

```
Professional photography, outdoor fire safety training ground with multiple practice fire extinguishers arranged beside controlled burn pit, orange safety cones marking perimeter, fire blankets and safety equipment laid out on table, clear blue sky with Mexican urban architecture in background, golden hour warm sunlight, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

### 8. instalacion-senalamientos-fotoluminiscentes-norma-oficial

**Archivo destino:** `/public/imagenes/servicios/instalacion-senalamientos-fotoluminiscentes-norma-oficial.avif`

```
Professional architectural photography, modern Mexican office building corridor with complete fire safety signage system: red fire extinguisher wall-mounted in glass cabinet, illuminated emergency exit sign above door, fire alarm pull station on wall, evacuation route map in frame, photoluminescent arrow signs on walls, clean modern interior design with white walls, professional architectural lighting, editorial quality, ultra high resolution, photorealistic 4K, absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels
```

---

## PROCESO POR IMAGEN

```
1. Abrir ImageFX → https://labs.google/fx/es-419/tools/image-fx
2. read_page filter:"interactive" → encontrar textbox
3. left_click en textbox → key "cmd+a" → type PROMPT
4. screenshot → verificar texto
5. left_click en boton "Crear" (✦)
6. wait 10s
7. screenshot → verificar 4 imagenes generadas
8. Elegir la MEJOR de las 4 variantes
9. javascript_tool → descargar con blob (indice 1, 3, 5 o 7)
10. wait 5s
11. Verificar descarga: ls -lt ~/Downloads/
12. Convertir: npx sharp-cli -i "descarga.jpg" -o "nombre-seo.avif" --format avif -mq 55 resize 1200 675
13. Copiar al repo: cp nombre-seo.avif [ruta-proyecto]/public/imagenes/servicios/
14. Siguiente imagen (volver al paso 3)
```

## RATE LIMITS

| Accion | Pausa minima |
|---|---|
| Entre prompts (generar) | 15 segundos |
| Entre descargas (JS blob) | 5 segundos |
| Entre lotes de 10 imagenes | 2 minutos |
| Si ImageFX da error/saturacion | Esperar 3 minutos, reintentar |

---

## ARCHIVOS EXISTENTES A REEMPLAZAR

| # | Archivo actual | Tamano AVIF |
|---|---|---|
| 1 | venta-equipo-contra-incendio-certificado-cdmx.avif | 247 KB |
| 2 | recarga-extintores-nom-154-servicio-domicilio.avif | 179 KB |
| 3 | mantenimiento-preventivo-extintores-poliza-anual.avif | 209 KB |
| 4 | instalacion-sistemas-contra-incendio-deteccion-alarmas.avif | 244 KB |
| 5 | prueba-hidrostatica-extintores-nom-154-certificado.avif | 380 KB |
| 6 | asesoria-tecnica-proteccion-civil-dictamen-seguridad.avif | 47 KB |
| 7 | capacitacion-brigadas-contra-incendio-constancia-dc3.avif | 83 KB |
| 8 | instalacion-senalamientos-fotoluminiscentes-norma-oficial.avif | 12 KB |

**Nota:** Todos los archivos tambien tienen version .png como fallback. Ambos formatos deben reemplazarse.

---

## CHECKLIST FINAL POR IMAGEN

- [ ] Prompt en ingles con "no people, no text, no watermarks"
- [ ] Generada en ImageFX (4 variantes, elegir la mejor)
- [ ] Descargada via JS blob
- [ ] Convertida a AVIF (1200x675, quality 55, ≤200KB)
- [ ] Nombre SEO en espanol con guiones
- [ ] Copiada a carpeta correcta del repo
- [ ] Version PNG fallback tambien generada
