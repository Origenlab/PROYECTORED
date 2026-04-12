---
aliases: [ImageFX, generacion imagenes, prompt imagenes servicios]
tags: [docs, imagefx, servicios, imagenes]
---

# Prompt ImageFX Servicios

Documento de referencia para la generacion de imagenes de la seccion de **servicios** del sitio Proyecto Red usando **Google ImageFX** via Chrome MCP.

## Ubicacion

- **Prompt completo:** `docs/PROMPT-IMAGEFX-SERVICIOS.md`
- **Imagenes generadas:** `public/imagenes/servicios/`

## Resumen

Se generan **8 imagenes** (una por servicio) con las siguientes caracteristicas:
- Formato AVIF + PNG fallback
- Dimensiones: 1200x675 (16:9)
- Quality: 55
- Peso maximo: ≤200KB
- Naming SEO en espanol con guiones

## Servicios cubiertos

1. [[Catálogo de Productos|Venta de Equipos]] → `venta-equipo-contra-incendio-certificado-cdmx.avif`
2. [[Recarga Certificada de Extintores|Recarga]] → `recarga-extintores-nom-154-servicio-domicilio.avif`
3. [[Mantenimiento Preventivo de Extintores|Mantenimiento]] → `mantenimiento-preventivo-extintores-poliza-anual.avif`
4. [[Sistemas Contra Incendio (Categoría)|Instalacion Sistemas CI]] → `instalacion-sistemas-contra-incendio-deteccion-alarmas.avif`
5. [[Prueba Hidrostática de Extintores|Prueba Hidrostatica]] → `prueba-hidrostatica-extintores-nom-154-certificado.avif`
6. [[Dictamen Técnico de Protección Civil|Asesoria Tecnica]] → `asesoria-tecnica-proteccion-civil-dictamen-seguridad.avif`
7. [[Capacitación de Brigadas Contra Incendio DC-3|Capacitacion]] → `capacitacion-brigadas-contra-incendio-constancia-dc3.avif`
8. [[Señalización de Emergencia NOM-003|Senalizacion NOM]] → `instalacion-senalamientos-fotoluminiscentes-norma-oficial.avif`

## Reglas clave

- Todos los prompts van en **ingles**
- Obligatorio incluir: "absolutely no people visible, no human figures, no faces, no text overlays, no watermarks, no labels"
- Herramienta: Google ImageFX → `https://labs.google/fx/es-419/tools/image-fx`
- Conversion con `sharp-cli` a AVIF quality 55

## Relaciones

- Usado por: [[CatalogoServicios.astro]] via componente [[Img.astro]]
- Parte de: [[Sitio Web Proyecto Red (Astro)]]
- CDN: [[ExactDN CDN — Optimización de Imágenes]]
