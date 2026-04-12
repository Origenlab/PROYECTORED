# L2 — Gabinetes Contra Incendio (Aprobada)

> Documentación oficial de la página `/gabinetes/` de proyectored.com.mx.  
> Estado: ✅ **Aprobada** — Homologada al L2 template aprobado.  
> Fecha de homologación: 2026-04-11.

---

## Identificación

| Campo           | Valor                                                              |
|-----------------|--------------------------------------------------------------------|
| **Ruta**        | `/gabinetes/`                                                      |
| **Archivo**     | `src/pages/gabinetes/index.astro`                                  |
| **Nivel**       | L2 (categoría de producto)                                         |
| **Líneas**      | ~195 (orquestador limpio)                                          |
| **Breadcrumb**  | Inicio → Productos → Gabinetes Contra Incendio                     |
| **Certificación clave** | NOM-002-STPS · NFPA 14                                   |
| **Precio referencia** | Desde $650 MXN (sobrepuesto para extintor 4.5 kg)          |

---

## SEO

| Campo         | Valor                                                                                                      |
|---------------|------------------------------------------------------------------------------------------------------------|
| **title**     | Gabinetes Contra Incendio en CDMX — NOM-002-STPS y NFPA 14 \| Proyecto Red                               |
| **description** | Venta e instalación de gabinetes contra incendio: para extintor, porta extintor con cenicero, para bombero y para hidrante. Lámina de acero cal. 20, vidrio templado 4 mm. Desde $650 MXN. Entrega directa en CDMX. |
| **canonical** | `https://proyectored.com.mx/gabinetes/`                                                                    |
| **ogImage**   | `/imagenes/og/gabinetes-og.jpg`                                                                            |

---

## Secuencia de secciones

| # | Componente            | Tipo         | Notas                                                           |
|---|-----------------------|--------------|-----------------------------------------------------------------|
| 1 | `Breadcrumb`          | UI genérico  | 3 niveles: Inicio → Productos → Gabinetes Contra Incendio       |
| 2 | `HeroGabinetes`       | Propia       | Badge "4 tipos · Lámina cal. 20 · Vidrio templado · Instalación incluida" |
| 3 | `CtaBar`              | Reutilizable | 4 accesos rápidos + WhatsApp                                    |
| 4 | `CatalogoGabinetes`   | Propia       | 4 tipos en grid 4-col, nav sticky, CTA strip con foto WA        |
| 5 | `GuiaGabinetes`       | Propia       | Guía por tipo de inmueble: 4 escenarios con norma + requisitos  |
| 6 | `TrustIndex`          | Reutilizable | Testimonios y señales de confianza                              |
| 7 | `NormasGabinetes`     | Propia       | 4 normas: NOM-002-STPS, NFPA 10, NFPA 14, NOM-003-SEGOB        |
| 8 | `FaqGabinetes`        | Propia       | 7 preguntas frecuentes específicas de gabinetes                 |
| 9 | `CTAFinalIndex`       | Reutilizable | Barra roja CTA WhatsApp + link catálogo                         |

**Secciones propias (5):** HeroGabinetes, CatalogoGabinetes, GuiaGabinetes, NormasGabinetes, FaqGabinetes  
**Secciones reutilizables (4):** Breadcrumb, CtaBar, TrustIndex, CTAFinalIndex

---

## Catálogo — 4 tipos de gabinetes

| # | Nombre                    | Badge       | Norma      | Ruta L3                                 |
|---|---------------------------|-------------|------------|-----------------------------------------|
| 1 | Gabinete para Extintor    | Más vendido | NOM-002    | `/gabinetes/para-extintor/`             |
| 2 | Porta Extintor c/Cenicero | Lobbies     | NOM-002    | `/gabinetes/porta-extintor-cenicero/`   |
| 3 | Gabinete para Bombero     | Edificios   | NFPA 14    | `/gabinetes/para-bombero/`              |
| 4 | Gabinete para Hidrante    | NFPA 14     | NFPA 14    | `/gabinetes/para-hidrante/`             |

---

## Guía — 4 escenarios por tipo de inmueble

| # | Tipo de inmueble              | Normas aplicables        | Solución recomendada                    |
|---|-------------------------------|--------------------------|------------------------------------------|
| 1 | Oficina / negocio comercial   | NOM-002-STPS · NFPA 10   | Gabinete extintor sobrepuesto            |
| 2 | Lobby / recepción             | NOM-002-STPS             | Porta extintor con cenicero              |
| 3 | Edificio / multi-piso         | NOM-003-SEGOB · NFPA 14  | Gabinete bombero + hidrante              |
| 4 | Nave industrial / almacén     | NOM-002-STPS · NFPA 14   | Gabinete extintor + hidrante             |

---

## JSON-LD schemas

| Schema            | Tipo              | Contenido                                                         |
|-------------------|-------------------|-------------------------------------------------------------------|
| `ItemList`        | Catálogo          | 4 `ListItem` con nombre, descripción y URL por tipo               |
| `FAQPage`         | Preguntas         | 6 Q&A (obligatorio/bracket, medidas, instalación, precios, separado, empotrado/sobrepuesto/pedestal) |
| `BreadcrumbList`  | Navegación        | 3 niveles: Inicio → Productos → Gabinetes Contra Incendio         |
| `CollectionPage`  | WebPage           | Metadatos completos de la página con publisher                    |

---

## Normas cubiertas

| Norma         | Tipo           | Relevancia para gabinetes                                          |
|---------------|----------------|---------------------------------------------------------------------|
| NOM-002-STPS  | Prevención     | Exige extintores accesibles y en buen estado — gabinete es protección|
| NFPA 10       | Internacional  | Define cuándo se requiere gabinete según tipo de riesgo             |
| NFPA 14       | Hidráulica     | Gabinete de hidrante obligatorio con válvula angular y manguera     |
| NOM-003-SEGOB | Señalización   | Señalamiento de ubicación del gabinete es parte del dictamen PC     |

---

## Detalles técnicos de implementación

**CatalogoGabinetes.astro (v1)**
- 4 tipos en una sola sección `.cat-section--white`
- Grid estándar `.catidx-grid` — 4 columnas desktop (no requiere modificador)
- Nav sticky scoped: `.nav-cats-gab` / `.nav-cat-pill-gab`
- CTA strip al final: foto por WA + cotizar por cantidad
- Importa `pages.css` explícitamente

**GuiaGabinetes.astro**
- 4 escenarios con imágenes de la carpeta `/imagenes/gabinetes/`
- Grid scoped: `.guia-gab-grid` → 2 columnas desktop, 1 móvil
- Usa CSS global `.guia-card`, `.guia-cta-bar`

**NormasGabinetes.astro**
- 4 normas (2 NOM + 2 NFPA) en grid 2-col (vs. 3-col de senalamientos)
- Usa CSS global `.norma-card`, `.norma-tipo`, `.normas-nota`

**FaqGabinetes.astro**
- 7 FAQs con accordion `<details>/<summary>` (CSS global `.faq-item`)
- Panel sticky: foto WA (primario) + cotizar por cantidad (secundario)
- CTA foto WA diferencia gabinetes del resto de L2s

---

## Precios referencia

| Tipo                           | Desde       |
|--------------------------------|-------------|
| Gabinete sobrepuesto extintor  | $650 MXN    |
| Porta extintor con cenicero    | $850 MXN    |
| Gabinete para bombero          | $2,800 MXN  |
| Gabinete para hidrante         | $4,500 MXN  |
| Pedidos 5+ gabinetes           | Precio volumen |

---

## Checklist

- [x] Orquestador limpio (~195 líneas, cero HTML inline)
- [x] Hero con dark gradient, badge, H1 + h1-accent, 2 párrafos SEO
- [x] Catálogo con `.ccard` + `.catidx-grid` estándar (4 col) + nav sticky
- [x] Guía por escenario de inmueble con `.guia-card` (4 escenarios)
- [x] 4 norma-cards (NOM + NFPA) en grid 2-col
- [x] FAQ accordion con 7 preguntas + panel sticky con CTA foto WA
- [x] 4 JSON-LD schemas (ItemList, FAQPage, BreadcrumbList, CollectionPage)
- [x] Breadcrumb 3 niveles: Inicio → Productos → Gabinetes Contra Incendio
- [x] Usa `Img.astro` para todas las imágenes
- [x] Usa `waUrl()` de `site.ts` para WhatsApp links
- [x] Todos los imports y clases CSS verificados

---

## Véase también

- [[L2 — Template Autorizado]] — Especificación del patrón L2
- [[L2 — Senalamientos (Aprobada)]] — Página hermana reciente
- `src/components/sections/HeroGabinetes.astro`
- `src/components/sections/CatalogoGabinetes.astro`
- `src/components/sections/GuiaGabinetes.astro`
- `src/components/sections/NormasGabinetes.astro`
- `src/components/sections/FaqGabinetes.astro`
