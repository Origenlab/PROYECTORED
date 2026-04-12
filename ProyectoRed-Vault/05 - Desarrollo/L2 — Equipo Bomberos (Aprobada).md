# L2 — Equipo Bomberos (Aprobada)

> Documentación oficial de la página `/equipo-bomberos/` de proyectored.com.mx.  
> Estado: ✅ **Aprobada** — Layout, diseño, composición, SEO y marketing confirmados.  
> Fecha de aprobación: 2026-04-11.

---

## Identificación

| Campo           | Valor                                                            |
|-----------------|------------------------------------------------------------------|
| **Ruta**        | `/equipo-bomberos/`                                              |
| **Archivo**     | `src/pages/equipo-bomberos/index.astro`                          |
| **Nivel**       | L2 (categoría de producto)                                       |
| **Líneas**      | ~239 (orquestador limpio)                                        |
| **Breadcrumb**  | Inicio → Equipo para Bomberos                                    |
| **Certificación clave** | NFPA 1971, NFPA 1983, NIOSH                          |
| **Nota interna** | Homologada con `extintores/index.astro` (plantilla L2 aprobada)|

---

## SEO

| Campo         | Valor                                                                                                                              |
|---------------|------------------------------------------------------------------------------------------------------------------------------------|
| **title**     | Equipo para Bomberos Certificado NFPA en México — Trajes, ERA y Rescate \| Proyecto Red                                           |
| **description** | Catálogo de equipo profesional para bomberos y brigadas certificado NFPA: trajes estructurales NFPA 1971, ERA SCBA NIOSH, complementos, herramientas de rescate y arneses. Proveedor directo en CDMX. Asesoría técnica gratuita. |
| **canonical** | `https://proyectored.com.mx/equipo-bomberos/`                                                                                     |
| **ogImage**   | `/imagenes/og/equipo-bomberos-og.jpg`                                                                                             |

---

## Secuencia de secciones

| # | Componente           | Tipo           | Notas                                                    |
|---|----------------------|----------------|----------------------------------------------------------|
| 1 | `Breadcrumb`         | UI genérico    | 2 niveles: Inicio → Equipo para Bomberos                 |
| 2 | `HeroBomberos`       | Propia         | Badge "Certificado NFPA · CDMX y Edo. Méx"              |
| 3 | `CtaBar`             | Reutilizable   | 4 accesos rápidos + WhatsApp                             |
| 4 | `CatalogoBomberos`   | Propia         | 5 categorías en cards `.ccard`, nav sticky por categoría |
| 5 | `GuiaBomberos`       | Propia         | Guía de selección por tipo de intervención               |
| 6 | `TrustIndex`         | Reutilizable   | Testimonios y señales de confianza                       |
| 7 | `NormasBomberos`     | Propia         | Marco normativo NFPA 1971, 1851, 1983, 1981              |
| 8 | `FaqBomberos`        | Propia         | 8 preguntas frecuentes específicas de equipo bomberos    |
| 9 | `CTAFinalIndex`      | Reutilizable   | Barra roja CTA WhatsApp + link catálogo                  |

**Secciones propias (5):** HeroBomberos, CatalogoBomberos, GuiaBomberos, NormasBomberos, FaqBomberos  
**Secciones reutilizables (4):** Breadcrumb, CtaBar, TrustIndex, CTAFinalIndex

> **Diferencia vs. Extintores:** Equipo Bomberos no incluye `ServiciosIndex` (los servicios de mantenimiento de equipo NFPA son distintos a recarga de extintores). El breadcrumb es de 2 niveles (sin pasar por /productos/) porque el equipo para bomberos tiene acceso directo desde el menú principal.

---

## Catálogo — 5 categorías de equipo

| # | Nombre                       | Certificación     | Descripción                                              | Ruta L3                                     |
|---|------------------------------|-------------------|----------------------------------------------------------|---------------------------------------------|
| 1 | Trajes Estructurales         | NFPA 1971         | Chaquetón + pantalón multicapa Nomex/PBI/Kevlar. S–4XL  | `/equipo-bomberos/trajes/`                  |
| 2 | Complementos de Uniforme     | NFPA 1971         | Cascos, guantes, botas, capuchas Nomex, gogles anti-flash| `/equipo-bomberos/complementos/`            |
| 3 | ERA — Respiración Autónoma   | NIOSH / NFPA 1981 | SCBA 30/45/60 min, máscaras panorámicas, alarma PASS     | `/equipo-bomberos/respiracion-autonoma/`    |
| 4 | Herramientas de Rescate      | —                 | Halligans, cortadores hidráulicos/neumáticos/eléctricos  | `/equipo-bomberos/herramientas/`            |
| 5 | Arneses de Rescate           | NFPA 1983         | Clase II y III hasta 140 kg. Anclaje dorsal y pectoral  | `/equipo-bomberos/arneses/`                 |

---

## JSON-LD schemas

| Schema            | Tipo              | Contenido                                                     |
|-------------------|-------------------|---------------------------------------------------------------|
| `ItemList`        | Catálogo          | 5 `ListItem` con nombre, descripción y URL por categoría      |
| `FAQPage`         | Preguntas         | 8 Q&A técnicas (certificaciones, vida útil, ERA, presupuesto) |
| `BreadcrumbList`  | Navegación        | 2 niveles: Inicio → Equipo para Bomberos                      |
| `CollectionPage`  | WebPage           | Metadatos completos de la página con publisher                |

### Preguntas cubiertas en FAQPage

1. ¿Qué certificaciones debe tener un traje de bombero?
2. ¿Cuánto dura un traje de bombero y cuándo hay que reemplazarlo?
3. ¿Qué diferencia hay entre un ERA y un respirador?
4. ¿Pueden equipar a una brigada industrial completa?
5. ¿Tienen equipo para bomberos forestales?
6. ¿Cuánto cuesta equipar a un bombero desde cero?
7. ¿Ofrecen mantenimiento o revisión del equipo?
8. ¿Hacen envíos fuera de CDMX?

---

## Normas cubiertas

| Norma      | Alcance                                                            |
|------------|--------------------------------------------------------------------|
| NFPA 1971  | Trajes de protección para combate estructural                      |
| NFPA 1851  | Selección, cuidado y mantenimiento de ropa de protección           |
| NFPA 1981  | Aparatos de respiración autónoma de presión positiva (SCBA)        |
| NFPA 1983  | Equipos de salvamento y rescate en altura                          |
| NFPA 1977  | Ropa de protección para bomberos forestales (referencia)           |
| NIOSH      | Certificación de aparatos de respiración (ERA/SCBA)                |

---

## Componentes propios — archivos

| Componente          | Archivo                                               |
|---------------------|-------------------------------------------------------|
| `HeroBomberos`      | `src/components/sections/HeroBomberos.astro`          |
| `CatalogoBomberos`  | `src/components/sections/CatalogoBomberos.astro`      |
| `GuiaBomberos`      | `src/components/sections/GuiaBomberos.astro`          |
| `NormasBomberos`    | `src/components/sections/NormasBomberos.astro`        |
| `FaqBomberos`       | `src/components/sections/FaqBomberos.astro`           |

---

## Checklist de aprobación

- [x] Orquestador limpio (< 250 líneas, cero HTML inline en página)
- [x] `HeroBomberos` con dark gradient, badge NFPA, H1 + accent, 2 cols
- [x] `CatalogoBomberos` con `SectionHeaderDuo`, `.ccard`, nav sticky
- [x] Fondos alternados `--white` / `--gray` en catálogo
- [x] `GuiaBomberos` como sección de selección por tipo de intervención
- [x] `TrustIndex` reutilizado correctamente
- [x] `NormasBomberos` con marco normativo NFPA específico
- [x] `FaqBomberos` con 8 preguntas de valor técnico
- [x] `CTAFinalIndex` como cierre de conversión
- [x] 4 schemas JSON-LD (ItemList, FAQPage, BreadcrumbList, CollectionPage)
- [x] `Img.astro` para todas las imágenes (CDN ExactDN)
- [x] `waUrl()` de `site.ts` para enlaces WhatsApp
- [x] SEO completo: title, description, canonical, ogImage
- [x] Sin CSS duplicado vs. global
- [x] Estructura homologada con `extintores/index.astro`

---

## Véase también

- [[L2 — Template Autorizado]] — Especificación de layout L2 y reglas generales
- [[L2 — Extintores (Aprobada)]] — Primera L2 aprobada (referencia de arquitectura)
- `src/data/bomberos-productos.ts` — Datos para páginas L3/L4 de equipo bomberos
