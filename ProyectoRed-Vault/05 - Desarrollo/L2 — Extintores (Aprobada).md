# L2 — Extintores (Aprobada)

> Documentación oficial de la página `/extintores/` de proyectored.com.mx.  
> Estado: ✅ **Aprobada** — Layout, diseño, composición, SEO y marketing confirmados.  
> Fecha de aprobación: 2026-04-11.

---

## Identificación

| Campo           | Valor                                                |
|-----------------|------------------------------------------------------|
| **Ruta**        | `/extintores/`                                       |
| **Archivo**     | `src/pages/extintores/index.astro`                   |
| **Nivel**       | L2 (categoría de producto)                           |
| **Líneas**      | ~284 (orquestador limpio)                            |
| **Breadcrumb**  | Inicio → Productos → Extintores                      |
| **Certificación clave** | NOM-154-SCFI                               |
| **Precio referencia** | Desde $450 MXN (PQS ABC 4.5 kg)              |

---

## SEO

| Campo         | Valor                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------|
| **title**     | Venta de Extintores Contra Incendios en CDMX — Certificados NOM \| Proyecto Red                           |
| **description** | Catálogo completo de extintores certificados NOM-154-SCFI: polvo seco ABC, CO₂, AFFF, Tipo K, agente limpio, Cold Fire y automáticos. Venta directa con entrega el mismo día en CDMX. Desde $450 MXN. |
| **canonical** | `https://proyectored.com.mx/extintores/`                                                                   |
| **ogImage**   | `/imagenes/og/extintores-og.jpg`                                                                           |

---

## Secuencia de secciones

| # | Componente            | Tipo           | Notas                                              |
|---|-----------------------|----------------|----------------------------------------------------|
| 1 | `Breadcrumb`          | UI genérico    | 3 niveles: Inicio → Productos → Extintores         |
| 2 | `HeroExtintores`      | Propia         | Badge "10 tipos · NOM-154-SCFI · CDMX y Edo. Méx" |
| 3 | `CtaBar`              | Reutilizable   | 4 accesos rápidos + WhatsApp                       |
| 4 | `CatalogoExtintores`  | Propia         | 10 tipos en cards `.ccard`, nav sticky por tipo    |
| 5 | `GuiaExtintores`      | Propia         | Guía de selección por tipo de riesgo/fuego         |
| 6 | `TrustIndex`          | Reutilizable   | Testimonios y señales de confianza                 |
| 7 | `ServiciosIndex`      | Reutilizable   | Servicios relacionados (recarga, mantenimiento)    |
| 8 | `NormasExtintores`    | Propia         | Marco normativo NOM-154-SCFI, NOM-002-STPS         |
| 9 | `FaqExtintores`       | Propia         | 8 preguntas frecuentes específicas de extintores   |
| 10| `CTAFinalIndex`       | Reutilizable   | Barra roja CTA WhatsApp + link catálogo            |

**Secciones propias (5):** HeroExtintores, CatalogoExtintores, GuiaExtintores, NormasExtintores, FaqExtintores  
**Secciones reutilizables (5):** Breadcrumb, CtaBar, TrustIndex, ServiciosIndex, CTAFinalIndex

> **Diferencia vs. plantilla base L2:** Extintores usa `ServiciosIndex` (bloque 7) que `/productos/` también usa. No usa `SeleccionIndex`, `ProcesoIndex` ni `FaqCotizacionIndex` genéricos — los reemplaza con variantes específicas de extintores (`GuiaExtintores`, `NormasExtintores`, `FaqExtintores`).

---

## Catálogo — 10 tipos de extintores

| # | Nombre                        | Agente              | Usos principales                                    | Ruta L3                           |
|---|-------------------------------|---------------------|-----------------------------------------------------|-----------------------------------|
| 1 | Polvo Seco ABC (PQS)          | Fosfato monoamónico | Oficinas, comercios, industria. Obligatorio NOM-002 | `/extintores/polvo-seco/`         |
| 2 | CO₂ — Dióxido de Carbono      | CO₂                | Equipos eléctricos, servidores, laboratorios        | `/extintores/co2/`                |
| 3 | AFFF — Espuma Mecánica        | Espuma AFFF         | Gasolineras, talleres, plantas químicas             | `/extintores/afff/`               |
| 4 | Tipo K — Cocinas              | Acetato de potasio  | Restaurantes, cocinas con freidoras. Obligatorio    | `/extintores/tipo-k/`             |
| 5 | Púrpura K                     | Bicarbonato K       | Industria petroquímica, aeroportuaria               | `/extintores/purpura-k/`          |
| 6 | Agua a Presión                | Agua                | Madera, papel, tela. Solución ecológica             | `/extintores/agua-a-presion/`     |
| 7 | Cold Fire                     | Tecnología BF2      | Clase A, B, D, K. Biodegradable, recargable con agua| `/extintores/cold-fire/`          |
| 8 | Automático                    | PQS / CO₂           | Áreas desatendidas: bodegas, servidores, maquinaria | `/extintores/automaticos/`        |
| 9 | ABC Multipropósito            | Fosfato monoamónico | Inmuebles comerciales e industriales. Más versátil  | `/extintores/abc/`                |
| 10| Agente Limpio (FM-200/Novec)  | Gas inerte          | Centros de datos, archivos, materiales sensibles    | `/extintores/agente-limpio/`      |

---

## JSON-LD schemas

| Schema            | Tipo              | Contenido                                                    |
|-------------------|-------------------|--------------------------------------------------------------|
| `ItemList`        | Catálogo          | 10 `ListItem` con nombre, descripción y URL por tipo         |
| `FAQPage`         | Preguntas         | 8 Q&A técnicas (selección, NOM, precios, recarga, etc.)      |
| `BreadcrumbList`  | Navegación        | 3 niveles: Inicio → Productos → Extintores                   |
| `CollectionPage`  | WebPage           | Metadatos completos de la página con publisher               |

### Preguntas cubiertas en FAQPage

1. ¿Qué extintor necesito para mi oficina o negocio?
2. ¿Cuántos extintores necesito según la NOM-002-STPS?
3. ¿Cuánto cuesta un extintor certificado NOM en CDMX?
4. ¿Cuál es la diferencia entre PQS y ABC?
5. ¿Cada cuánto tiempo se recarga un extintor?
6. ¿Qué es la prueba hidrostática y cuándo es obligatoria?
7. ¿Tienen extintores para cocinas industriales y restaurantes?
8. ¿Hacen entregas el mismo día en CDMX?

---

## Normas cubiertas

| Norma             | Alcance                                                      |
|-------------------|--------------------------------------------------------------|
| NOM-154-SCFI      | Extintores portátiles — fabricación, desempeño y mantenimiento |
| NOM-002-STPS      | Condiciones de seguridad — prevención y protección contra incendio |
| NFPA 10           | Norma para extintores portátiles (referencia complementaria) |

---

## Componentes propios — archivos

| Componente           | Archivo                                              |
|----------------------|------------------------------------------------------|
| `HeroExtintores`     | `src/components/sections/HeroExtintores.astro`       |
| `CatalogoExtintores` | `src/components/sections/CatalogoExtintores.astro`   |
| `GuiaExtintores`     | `src/components/sections/GuiaExtintores.astro`       |
| `NormasExtintores`   | `src/components/sections/NormasExtintores.astro`     |
| `FaqExtintores`      | `src/components/sections/FaqExtintores.astro`        |

---

## Checklist de aprobación

- [x] Orquestador limpio (< 300 líneas, cero HTML inline en página)
- [x] `HeroExtintores` con dark gradient, badge, H1 + accent, 2 cols
- [x] `CatalogoExtintores` con `SectionHeaderDuo`, `.ccard`, nav sticky
- [x] Fondos alternados `--white` / `--gray` en catálogo
- [x] `GuiaExtintores` como sección de selección específica
- [x] `TrustIndex` + `ServiciosIndex` reutilizados correctamente
- [x] `NormasExtintores` con marco normativo específico
- [x] `FaqExtintores` con 8 preguntas de valor
- [x] `CTAFinalIndex` como cierre de conversión
- [x] 4 schemas JSON-LD (ItemList, FAQPage, BreadcrumbList, CollectionPage)
- [x] `Img.astro` para todas las imágenes (CDN ExactDN)
- [x] `waUrl()` de `site.ts` para enlaces WhatsApp
- [x] SEO completo: title, description, canonical, ogImage
- [x] Sin CSS duplicado vs. global

---

## Véase también

- [[L2 — Template Autorizado]] — Especificación de layout L2 y reglas generales
- [[L2 — Equipo Bomberos (Aprobada)]] — Segunda L2 aprobada con misma arquitectura
- `src/data/extintores-productos.ts` — Datos para páginas L3/L4 de extintores
