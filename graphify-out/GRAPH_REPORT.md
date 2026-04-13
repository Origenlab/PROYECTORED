# Graph Report - .  (2026-04-12)

## 🚨 Regla global L4: variantes DEBEN estar en los datos

**El template `[producto].astro` de TODA categoría ya tiene la S0 de variantes lista.**
La S0 es condicional: `hasVariantes = Boolean(data.variantes && data.variantes.length > 0)`.

> Si `variantes?` está en la interface pero no tiene datos escritos → S0 **no aparece nunca**.
> Solución: poblar `variantes: [...]` en el data file con mínimo 4 items por producto.

**Template canónico completo:** `docs/L4-UNIVERSAL-TEMPLATE.md`
**Checklist y reglas:** `ProyectoRed-Vault/05 - Desarrollo/L4 — Template Universal (Reglas y Checklist).md`

---

## 📌 Estado de páginas L4 — sistemas (actualizado 2026-04-12)

| Ruta                                       | Estado       | Variantes | Notas                                                                                              |
|--------------------------------------------|-------------|-----------|-----------------------------------------------------------------------------------------------------|
| `/sistemas/deteccion-alarma/`              | ✅ Aprobada  | ✅ 4       | Convencional 4z · 8-16z · Direccionable 64pt · 512+pt. NFPA 72.                                   |
| `/sistemas/rociadores/`                    | ✅ Aprobada  | ✅ 4       | Tubo húmedo · seco · Pre-acción · ESFR. NFPA 13.                                                   |
| `/sistemas/tablero-control/`               | ✅ Aprobada  | ✅ 4       | FACP convencional · direccionable · pantalla gráfica · tablero bomba NFPA 20.                      |
| `/sistemas/red-hidraulica/`                | ✅ Aprobada  | ✅ 4       | Bomba eléctrica+jockey · NFPA 20 E+J · NFPA 20 E+D+J · Cisterna+bombeo. NFPA 13/14.              |
| `/sistemas/supresion-agente/`              | ✅ Aprobada  | ✅ 4       | FM-200 · Novec 1230 · CO₂ alta conc. · Inergen. NFPA 2001/12.                                     |

### Patrón L4 sistemas v2 (2026-04-12 — homologado con mangueras/gabinetes)
```
CategoryLayout (Hero + CtaBar) →
  S0 cat-section--white  : [CONDICIONAL si hasVariantes] SectionHeaderDuo + catidx-grid (ccard + ccard--cta-wa)
                           · Ningún sistema tiene variantes definidas aún (interface lista para el futuro)
  S1 cat-section--white* : SectionHeaderDuo + l4-svc-grid (características) + inline-cta  (* --gray si con variantes)
  S2 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (cuándo instalar) + inline-cta  (* --white si con variantes)
  S3 cat-section--white* : SectionHeaderDuo + l4-svc-grid (servicios, links)              (* --gray si con variantes)
  S4                     : TrustIndex (componente global)
  S5                     : NormasSistemas v2 (NFPA 72, 13, 14, 20, 2001, NOM-002-STPS) → usa .normas-grid global
  S6 cat-section--white  : SectionHeaderDuo + catidx-grid--compact (ccard--text + ccard--cta-wa)
→ FaqCotizacionIndex → CTAFinal
```
RELATED_SERVICES: instalacion-sistemas, mantenimiento-preventivo, asesoria-tecnica

**NormasSistemas v2:** Homologada con NormasMangueras/NormasGabinetes — usa `.normas-grid` global (pages.css), estructura `norma-card__nombre` + `norma-tipo` + `norma-aplica-label` idéntica. Reemplaza `.normas-sis-grid` scoped de v1.

**Interface:** `VarianteSistema` añadida + campos opcionales `img?`, `variantes?`, `variantesEyebrow/TitleLine1/TitleLine2/BodyPara?` en `ProductoSistemasData`. Ningún producto tiene variantes definidas aún.

**Fix:** `astro.config.mjs` — `vite.cacheDir` corregido de sesión expirada → `/tmp/vite-cache`.

---

## 🖼️ Patrón global: ccard__header con imagen real o placeholder (2026-04-12)

**Regla**: Toda card de variante en L4 SIEMPRE renderiza `.ccard__header` (aspect-ratio 16:9).
Si el producto tiene `data.img` → imagen real. Si no → placeholder visual.

**CSS en `pages.css`** (global, no scoped):
```css
.ccard__header--placeholder { background: linear-gradient(145deg, #F2F2F5, #E6E6EC); }
.ccard__placeholder-icon    { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:#B8B8C8; }
.ccard__placeholder-label   { font-size:0.6875rem; font-weight:600; text-transform:uppercase; color:#B8B8C8; }
```

**Template en cada L4** (extintores, gabinetes, equipo-bomberos):
```astro
<div class:list={['ccard__header', !imgSrc && 'ccard__header--placeholder']}>
  {imgSrc ? (
    <Img src={imgSrc} ... />   <!-- imagen real + .ccard__header-overlay + .ccard__badge -->
  ) : (
    <div class="ccard__placeholder-icon">
      <svg><!-- icono foto SVG --></svg>
      <span class="ccard__placeholder-label">Imagen próximamente</span>
    </div>
  )}
  {imgSrc && <div class="ccard__header-overlay" ...></div>}
  {v.badge && <span class="ccard__badge">{v.badge}</span>}  <!-- badge SIEMPRE visible -->
</div>
```
**Activar imagen real**: Agregar `img: '/imagenes/categoria/producto.avif'` a `ProductoXxxData`.

---

## 📌 Estado de páginas L4 — mangueras (actualizado 2026-04-12)

| Ruta                                      | Estado       | Variantes | Notas                                                                                                    |
|-------------------------------------------|-------------|-----------|----------------------------------------------------------------------------------------------------------|
| `/mangueras/manguera-hidrante/`           | ✅ Aprobada  | ✅ 4       | S0 variantes + SectionHeaderDuo + l4-svc-grid + TrustIndex + NormasMangueras v2 + ccard--text           |
| `/mangueras/chiflones/`                   | ✅ Aprobada  | ✅ 4       | Ídem. Combinado/chorro/niebla/CAFS. NFPA 1964.                                                          |
| `/mangueras/toma-siamesa/`                | ✅ Aprobada  | ✅ 4       | Ídem. Pared/empotrada/piso/tripleta. NFPA 14.                                                            |
| `/mangueras/monitor-incendio/`            | ✅ Aprobada  | ✅ 4       | Ídem. Distribuidor autorizado Elkhart Brass. Manual/eléctrico/oscilante/carro bomba. NFPA 15.           |
| `/mangueras/valvulas-adaptadores/`        | ✅ Aprobada  | —         | Sin variantes. Angular/globo/check/mariposa/Storz. NFPA 1963.                                          |
| `/mangueras/carrete-manguera/`            | ✅ Aprobada  | —         | Sin variantes. Fijo/giratorio 360°. NFPA 14.                                                            |

### Patrón L4 mangueras v2 (2026-04-12 — con variantes + placeholder imagen)
```
CategoryLayout (Hero + CtaBar) →
  S0 cat-section--white  : [CONDICIONAL si hasVariantes] SectionHeaderDuo + catidx-grid (ccard variantes + ccard--cta-wa)
                           · ccard SIEMPRE tiene .ccard__header:
                             - Si data.img → <Img> real + .ccard__header-overlay
                             - Si !data.img → .ccard__header--placeholder + .ccard__placeholder-icon (SVG)
                           · VarianteManguera: { nombre, badge?, desc, specs, waText }
  S1 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (características) + inline-cta  (* --white si sin variantes)
  S2 cat-section--white* : SectionHeaderDuo + l4-svc-grid (aplicaciones) + inline-cta      (* --gray si sin variantes)
  S3 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (servicios, links)               (* --white si sin variantes)
  S4                     : TrustIndex (componente global)
  S5                     : NormasMangueras v2 (NFPA 1961, 1962, 1964, 14, 24, NOM-002-STPS) → usa .normas-grid global
  S6 cat-section--white  : SectionHeaderDuo + catidx-grid--compact (ccard--text + ccard--cta-wa)
→ FaqCotizacionIndex → CTAFinal
```
RELATED_SERVICES: instalacion-sistemas, mantenimiento-preventivo, asesoria-tecnica, prueba-hidrostatica

**NormasMangueras v2:** Homologada con NormasGabinetes — usa `.normas-grid` global (pages.css), estructura `norma-card__nombre` + `norma-tipo` + `norma-aplica-label` idéntica.

**Datos variantes (mangueras-productos.ts):**
- `VarianteManguera` interface: `{ nombre: string; badge?: string; desc: string; specs: string; waText: string }`
- `ProductoManguerasData` extiende con: `img?`, `variantes?`, `variantesEyebrow?`, `variantesTitleLine1?`, `variantesTitleLine2?`, `variantesBodyPara?`
- manguera-hidrante: 4 variantes (1½"×15m Clase II, 1½"×20m Estándar, 2½"×20m Profesional, 2½"×30m Bomberos)
- chiflones: 4 variantes (Combinado 1½", Pitón chorro recto 2½", Neblina baja velocidad, Pitón automático CAFS)
- toma-siamesa: 4 variantes (Pared estándar, Empotrada flush, Piso, Tripleta 3 entradas)
- monitor-incendio: 4 variantes (Manual Serie 1500, Eléctrico remoto Serie 3600, Oscilante automático Serie 4000, Carro bomba)

---

## 📌 Estado de páginas L4 — primeros-auxilios (actualizado 2026-04-12)

| Ruta                                              | Estado       | Variantes | Notas                                                                                                            |
|---------------------------------------------------|-------------|-----------|------------------------------------------------------------------------------------------------------------------|
| `/primeros-auxilios/botiquin-stps/`              | ✅ Aprobada  | —         | Sin variantes. NOM-005-STPS. l4-svc-grid + TrustIndex + NormasPrimerosAuxilios + ccard--text                   |
| `/primeros-auxilios/desfibrilador/`              | ✅ Aprobada  | —         | Sin variantes. AHA Guidelines. Philips HeartStart / Zoll AED Plus.                                              |
| `/primeros-auxilios/camilla-emergencia/`         | ✅ Aprobada  | —         | Sin variantes. NOM-026-STPS. Rígida/plegable/cuchara/canasta/escalera/tablero.                                  |
| `/primeros-auxilios/oxigeno-emergencia/`         | ✅ Aprobada  | —         | Sin variantes. NOM-235-SSA1. Cilindros + regulador + mascarilla.                                                |
| `/primeros-auxilios/material-curacion/`          | ✅ Aprobada  | —         | Sin variantes. NOM-005-STPS. Gasas/vendas/antisépticos/inmovilizadores.                                        |

### Patrón L4 primeros-auxilios v2 (2026-04-12 — sin variantes)
```
CategoryLayout (Hero + CtaBar) →
  S1 cat-section--white  : SectionHeaderDuo + l4-svc-grid (características) + inline-cta
  S2 cat-section--gray   : SectionHeaderDuo + l4-svc-grid (cuándo usar) + inline-cta
  S3 cat-section--white  : SectionHeaderDuo + l4-svc-grid (servicios, links)
  S4                     : TrustIndex (componente global)
  S5                     : NormasPrimerosAuxilios (NOM-030, NOM-006, NOM-034, NOM-017, NOM-009, NOM-002)
  S6 cat-section--white  : SectionHeaderDuo + catidx-grid--compact (ccard--text + ccard--cta-wa)
→ FaqCotizacionIndex → CTAFinal
```
RELATED_SERVICES: capacitacion, asesoria-tecnica, venta-equipos

**Sin variantes** — el campo `variantes?` no está en `ProductoPrimerosAuxiliosData` (pendiente si se requiere).
**NormasPrimerosAuxilios:** 6 normas STPS (NOM-030, NOM-006, NOM-034, NOM-017, NOM-009, NOM-002-STPS). Usa `.normas-pa-grid` scoped.

---

## 📌 Estado de páginas L2 — (actualizado manualmente 2026-04-11)

| Ruta                | Estado       | Notas                                                        |
|---------------------|-------------|--------------------------------------------------------------|
| `/productos/`       | ✅ Aprobada  | Referencia de arquitectura L2                                |
| `/servicios/`       | ✅ Aprobada  | Homologada 2026-04-11                                        |
| `/empresas/`        | ✅ Aprobada  | Homologada 2026-04-11                                        |
| `/extintores/`      | ✅ Aprobada  | Primera L2 de categoría. 10 tipos, 5 secciones propias.     |
| `/equipo-bomberos/` | ✅ Aprobada  | Homologada con extintores. 5 categorías NFPA, 5 secciones propias. |

## 📌 Estado de páginas L4 — gabinetes (actualizado 2026-04-12)

| Ruta                                      | Estado       | Variantes | Notas                                                                                                   |
|-------------------------------------------|-------------|-----------|----------------------------------------------------------------------------------------------------------|
| `/gabinetes/gabinete-extintor/`           | ✅ Aprobada  | ✅ 5       | S0 variantes + SectionHeaderDuo + l4-svc-grid + TrustIndex + NormasGabinetes (6 normas) + ccard--text  |
| `/gabinetes/porta-extintor/`              | ✅ Aprobada  | ✅ 5       | Ídem. Soportes de piso/pared/columna. NOM-002-STPS.                                                     |
| `/gabinetes/gabinete-bombero/`            | ✅ Aprobada  | ✅ 4       | Ídem. NFPA 14. Manguera + pitón + llave Storz.                                                          |
| `/gabinetes/gabinete-hidrante/`           | ✅ Aprobada  | ✅ 4       | Ídem. NFPA 14 clase I/II/III. Válvula angular 2½".                                                      |

### Patrón L4 gabinetes v2 (2026-04-12 — con variantes + placeholder imagen)
```
CategoryLayout (Hero + CtaBar) →
  S0 cat-section--white  : [CONDICIONAL si hasVariantes] SectionHeaderDuo + catidx-grid (ccard variantes + ccard--cta-wa)
                           · ccard SIEMPRE tiene .ccard__header:
                             - Si data.img → <Img> real + .ccard__header-overlay
                             - Si !data.img → .ccard__header--placeholder + .ccard__placeholder-icon (SVG)
                           · VarianteGabinete: { nombre, badge?, desc, specs, waText }
  S1 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (características) + inline-cta  (* --white si sin variantes)
  S2 cat-section--white* : SectionHeaderDuo + l4-svc-grid (dónde instalar) + inline-cta   (* --gray si sin variantes)
  S3 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (servicios, links)               (* --white si sin variantes)
  S4                     : TrustIndex (componente global)
  S5                     : NormasGabinetes (NOM-002-STPS, NOM-003-SEGOB, NFPA 10, NFPA 14, NFPA 25, NOM-026-STPS)
  S6 cat-section--white  : SectionHeaderDuo + catidx-grid--compact (ccard--text + ccard--cta-wa)
→ FaqCotizacionIndex → CTAFinal
```
RELATED_SERVICES: instalacion-sistemas, mantenimiento-preventivo, asesoria-tecnica, senalizacion

**Datos variantes (gabinetes-productos.ts):**
- `VarianteGabinete` interface: `{ nombre: string; badge?: string; desc: string; specs: string; waText: string }`
- `ProductoGabinetesData` extiende con: `img?`, `variantes?`, `variantesEyebrow?`, `variantesTitleLine1?`, `variantesTitleLine2?`, `variantesBodyPara?`
- gabinete-extintor: 5 variantes (2.5kg Básico, 4.5-6kg Más vendido, 9-12kg Industrial, Panorámico, 20-30kg Gran capacidad)
- porta-extintor: 5 variantes (Herraje pared 2.5-4.5kg, 6-9kg, 12kg, Base piso ruedas, Soporte columna)
- gabinete-bombero: 4 variantes (Clase II 1½", Clase I 2½", Clase III Doble, A especificación)
- gabinete-hidrante: 4 variantes (Clase II equipado 1½", Clase I 2½", Clase III doble, Empotrado flush mount)

---

## 📌 Estado de páginas L4 — equipo-bomberos (actualizado 2026-04-11)

| Ruta                                          | Estado       | Variantes | Notas                                                                              |
|-----------------------------------------------|-------------|-----------|------------------------------------------------------------------------------------|
| `/equipo-bomberos/trajes-estructurales/`      | ✅ Aprobada  | ✅ 3       | S0 variantes + img + SectionHeaderDuo + l4-svc-grid + TrustIndex + NormasBomberos |
| `/equipo-bomberos/era/`                       | ✅ Aprobada  | ✅ 3       | S0 variantes + img. NFPA 1981 / SCBA. Variante de recarga incluida.               |
| `/equipo-bomberos/rescate-hidraulico/`        | ✅ Aprobada  | ✅ 3       | S0 variantes + img. Gas / eléctrico / quijadas. Hurst/Holmatro.                   |
| `/equipo-bomberos/rescate-neumatico/`         | ✅ Aprobada  | —         | Sin variantes. Cojines neumáticos USAR.                                            |
| `/equipo-bomberos/rescate-electrico/`         | ✅ Aprobada  | —         | Sin variantes. Herramientas de batería.                                            |
| `/equipo-bomberos/arneses-rescate-altura/`    | ✅ Aprobada  | ✅ 3       | S0 variantes + img. Clase II / Kit 50m / Polipasto 6:1. NFPA 1983.               |
| `/equipo-bomberos/complementos-uniforme/`     | ✅ Aprobada  | —         | Sin variantes. Nomex · NFPA.                                                       |

### Patrón L4 equipo-bomberos v2 (2026-04-12 — con variantes + placeholder imagen)
```
CategoryLayout (Hero + Stats + CtaBar) →
  S0 cat-section--white  : [OPCIONAL] SectionHeaderDuo + catidx-grid (.ccard) + ccard--cta-wa
                           Solo si data.variantes existe. Alternancia automática S1/S2 según hasVariantes.
                           · ccard SIEMPRE tiene .ccard__header:
                             - Si data.img → <Img> real + .ccard__header-overlay
                             - Si !data.img → .ccard__header--placeholder + .ccard__placeholder-icon (SVG)
  S1 cat-section--gray*  : SectionHeaderDuo + l4-svc-grid (características) + inline-cta
  S2 cat-section--white* : SectionHeaderDuo + l4-svc-grid (para quién) + inline-cta
  S3 cat-section--white  : SectionHeaderDuo + l4-svc-grid (servicios, links)
  S4                     : TrustIndex (componente global)
  S5                     : NormasBomberos (NFPA 1971/1851/1981/1983/1991/NIOSH)
  S6 cat-section--white  : SectionHeaderDuo + catidx-grid--compact (otros productos) + ccard--cta-wa
→ FaqCotizacionIndex → CTAFinal
```
*S1/S2: --gray/--white si hay variantes (S0=white); --white/--gray si no hay variantes.

### Datos añadidos (VarianteBombero interface)
- `img?: string` — imagen para tarjetas de variantes
- `variantes?: VarianteBombero[]` — modelos disponibles (nombre, badge, desc, specs, waText)
- `variantesEyebrow/TitleLine1/TitleLine2/BodyPara` — textos del SectionHeaderDuo de S0

### Documentación
- `docs/L4-BOMBEROS-TEMPLATE.md` — guía completa de patrón, datos, imágenes y roadmap

> ⚠️ Este reporte fue generado el 2026-04-11 con 117 archivos. Las páginas `/extintores/` y `/equipo-bomberos/` se documentaron y aprobaron tras la generación del grafo. Pendiente: ejecutar `python3 -c "from graphify.watch import _rebuild_code; from pathlib import Path; _rebuild_code(Path('.'))"` para actualizar el grafo completo con estas páginas.

---

## Corpus Check
- 117 files · ~744,174 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 206 nodes · 303 edges · 30 communities detected
- Extraction: 81% EXTRACTED · 19% INFERRED · 0% AMBIGUOUS · INFERRED: 59 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## God Nodes (most connected - your core abstractions)
1. `NOM-002-STPS - Prevención de Incendios` - 13 edges
2. `NOM-002-STPS` - 12 edges
3. `Normas y Certificaciones Aplicables` - 10 edges
4. `Capacitación de Brigadas Contra Incendio DC-3` - 8 edges
5. `Detector de Gas LEL: Límite Inferior de Explosividad` - 8 edges
6. `NFPA 72 - Código de Alarma de Incendio` - 8 edges
7. `NOM-003-SEGOB - Señales y Avisos de Protección Civil` - 8 edges
8. `Proyecto Red (Empresa)` - 7 edges
9. `Arquitectura Astro del Proyecto` - 7 edges
10. `Catálogo de Productos` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Deploy a Cloudflare Pages` --references--> `Sitio Web Proyecto Red (Astro)`  [EXTRACTED]
  DEPLOY.md → ProyectoRed-Vault/01 - Empresa/Sitio Web — Análisis.md
- `Layout de Página de Producto (L5)` --references--> `NOM-154-SCFI (Extintores)`  [EXTRACTED]
  LAYOUT-PRODUCTO.md → ProyectoRed-Vault/03 - Normas y Certificaciones/Normas Aplicables.md
- `Layout de Página de Producto (L5)` --conceptually_related_to--> `Sistema de Layouts (L1-L5)`  [INFERRED]
  LAYOUT-PRODUCTO.md → docs/LAYOUT-SYSTEM.md
- `Equipo para Bomberos (Categoría)` --conceptually_related_to--> `Blog: Barra Halligan — Herramienta de Rescate`  [INFERRED]
  ProyectoRed-Vault/01 - Empresa/Catálogo de Productos.md → src/content/blog/barra-halligan-rescate-forzamiento.md
- `Blog: Salida de Emergencia vs Salida Regular` --conceptually_related_to--> `Señalamientos de Emergencia (Categoría)`  [INFERRED]
  src/content/blog/diferencia-salida-emergencia-salida-regular.md → ProyectoRed-Vault/01 - Empresa/Catálogo de Productos.md

## Hyperedges (group relationships)
- **Astro Layout Hierarchy (L1-L5)** — comp_base_astro, comp_category_layout, layout_system, layout_producto, comp_section_header_duo, ccard_pattern, hero_pattern [EXTRACTED 0.95]
- **Fire Protection Regulatory Framework (Mexico)** — norm_nom154, norm_nfpa20, norm_nfpa10, norm_nfpa72, norm_nom002stps, norm_nom003segob, proteccion_civil [EXTRACTED 1.00]
- **Blog Content Strategy — Technical Authority SEO** — blog_barra_halligan, blog_nfpa20_bomba, blog_salida_emergencia, blog_extintor_restaurante, blog_tablero_control, proyectored_empresa, whatsapp_integration [INFERRED 0.80]
- **Kitchen Fire Protection Ecosystem (Class K + Suppression + Hood Cleaning)** — norma-extintores-cocinas-restaurantes_clase_k, supresion-incendio-campana-cocina-industrial_supresion_campana, limpieza-campanas_limpieza_campanas, como-funciona-agente-humedo-clase-k_saponificacion, extintor-tipo-k-cocinas-comerciales_extintor_k [INFERRED 0.90]
- **Hydraulic Fire Network (Pump + Pipes + Sprinklers)** — materiales-red-hidraulica-contra-incendio_red_hidraulica, tuberia-pvc-red-hidraulica-incendio_tuberia_comparativa, sistema-bombeo-contra-incendio-presion_sistema_bombeo, materiales-red-hidraulica-contra-incendio_sprinklers, sistema-bombeo-contra-incendio-presion_jockey_pump [INFERRED 0.90]
- **Mexican Fire Safety Regulatory Framework (NOM-002 + NOM-003 + NOM-154)** — norma-extintores-cocinas-restaurantes_nom_002_stps, norma-extintores-cocinas-restaurantes_nom_003_segob, prueba-hidrostatica-extintor-cuando_nom_154_scfi, common_proteccion_civil [EXTRACTED 0.95]
- **Seguridad e Higiene en Cocinas Comerciales** — extintor_acero_inoxidable_cocina_industrial, higiene_cocina_comercial_equipo_seguridad, incendios_restaurantes, tuberia_sistema_tipo_k_campana, concept_nom251ssa1 [INFERRED 0.85]
- **Cumplimiento Normativo Protección Civil** — como_pasar_inspeccion_proteccion_civil, asesoria_tecnica_proteccion_civil, bitacora_extintores_auditoria, mantenimiento_preventivo_extintores, concept_proteccion_civil, concept_nom002stps [INFERRED 0.85]
- **Señalización y Evacuación de Emergencia** — letrero_extintor_fotoluminiscente, materiales_senalizacion_emergencia_tipos, salidas_emergencia_obligatorias_norma, evacuacion_vertical_edificios, simulacro_evacuacion_empresa, concept_nom003segob [INFERRED 0.80]
- **Fire Detection System Ecosystem** — cuantos_detectores_incendio_necesita_empresa, sistema_deteccion_incendio_que_incluye, instalacion_sistema_contra_incendio_cdmx, sistema_contra_incendio_nfpa, concept_nfpa_72 [INFERRED 0.85]
- **Gas Detection and Prevention Cluster** — detector_gas_lel, detector_gas_combustible_fijo, alarma_fuga_gas_protocolo, concept_lel, concept_sensor_catalitico [INFERRED 0.85]
- **Clase K Kitchen Fire Protection System** — extintor_portatil_tipo_k_ventajas, producto_extintor_tipo_k_portatil, producto_extintor_tipo_k_acero_inox, producto_tuberia_hidraulica_campana, concept_clase_k [INFERRED 0.90]
- **Sistema Hidraulico Contra Incendios** — sistema_evans_20hp, tablero_contra_incendios, tubo_pvc_hidraulico [INFERRED 0.85]
- **Familia de Detectores de Gas** — detector_gas, detector_gas_lel, detector_gas_multiple [INFERRED 0.90]
- **Familia de Senalizacion Fotoluminiscente** — letrero_extintor, senal_extintor, letrero_punto_reunion, senalamiento_escaleras [INFERRED 0.90]

## Communities

### Community 0 - "Protección Civil y Evacuación"
Cohesion: 0.15
Nodes (27): Dictamen Técnico de Protección Civil, Bitácora de Extintores para Auditoría, Capacitación de Brigadas Contra Incendio DC-3, Colores de Cascos de Bombero, Cómo Pasar Inspección de Protección Civil, Cómo Usar un Extintor Correctamente (Método PASA), Certificado DC-3 STPS, Clases de Fuego (A, B, C, D, K) (+19 more)

### Community 1 - "Empresa y Catálogo General"
Cohesion: 0.14
Nodes (26): Blog: Barra Halligan — Herramienta de Rescate, Blog: Dónde Colocar Extintores en Restaurante, Blog: NFPA 20 — Bomba Contra Incendio, Blog: Salida de Emergencia vs Salida Regular, Blog: Tablero de Control Contra Incendios, Catálogo de Productos, Directorio de Clientes, EPP / Seguridad Industrial (Categoría) (+18 more)

### Community 2 - "Arquitectura Astro y Frontend"
Cohesion: 0.1
Nodes (25): Archivos Generados — Estructura de Proyecto, Arquitectura Astro del Proyecto, Card Pattern (.ccard), Cloudflare Pages (Hosting), Base.astro Layout, CategoryLayout.astro, CtaBar Component, FaqCotizacion Component (+17 more)

### Community 3 - "Detección de Gas e Incendio"
Cohesion: 0.14
Nodes (26): Protocolo de Alarma por Fuga de Gas, LEL - Límite Inferior de Explosividad, NFPA 13 - Sistemas de Rociadores, NFPA 20 - Bombas Contra Incendio, NFPA 72 - Código de Alarma de Incendio, NOM-002-STPS - Prevención de Incendios, NOM-010-STPS - Agentes Químicos Contaminantes, NOM-033-STPS (+18 more)

### Community 4 - "Bomberos y Cocinas Industriales"
Cohesion: 0.12
Nodes (25): Rationale: Por Qué No Usar Agua en Aceite, Acetato de Potasio, Saponificación (Mecanismo Clase K), Equipo de Extinción para Bomberos, NFPA 1971, Equipo para Brigadas Contra Incendio, Cálculo de Carga de Fuego, Instalación Correcta de Extintor de Pared (+17 more)

### Community 5 - "Señalización y Auditorías"
Cohesion: 0.2
Nodes (12): Análisis de Riesgo de Incendio en Instalaciones, Carga de Fuego (Fire Load), NOM-003-SEGOB - Señales y Avisos de Protección Civil, Protección Civil CDMX, Checklist de Equipamiento Contra Incendios para Protección Civil, Letrero de Extintor Fotoluminiscente, Letrero Punto de Reunion, Letrero Salida de Emergencia (Producto) (+4 more)

### Community 6 - "Extintores Tipo K y Recarga"
Cohesion: 0.36
Nodes (11): Cada Cuánto Se Recarga un Extintor, Fuego Clase K - Aceites y Grasas de Cocina, NFPA 17A - Sistemas de Extinción con Agente Húmedo, NOM-154-SCFI - Extintores Portátiles, Prueba Hidrostática de Cilindros, Qué Pasa si tu Extintor Falla la Prueba Hidrostática, Extintor Tipo K Portátil: Ventajas y Limitaciones, Mantenimiento preventivo de extintores según NOM (+3 more)

### Community 7 - "Red Hidráulica Contra Incendio"
Cohesion: 0.39
Nodes (8): Rationale: Red Municipal Insuficiente para Incendios, NFPA 13, Red Hidráulica Contra Incendio, Sprinklers (Cabezas de Descarga), Jockey Pump, NFPA 20, Sistema de Bombeo Contra Incendio, Comparativa Tuberías PVC vs Acero vs CPVC

### Community 8 - "Selección y Prueba de Extintores"
Cohesion: 0.43
Nodes (7): Rationale: Ciclo de 5 Años para Prueba Hidrostática, Selección de Extintor según Riesgo, NOM-154-SCFI, Prueba Hidrostática de Extintores, Clases de Fuego (A, B, C, D, K), Selección de Extintor por Tipo de Empresa, Recarga Certificada de Extintores

### Community 9 - "Gases Peligrosos y ATEX"
Cohesion: 0.33
Nodes (6): Detector Multigas, Gases Peligrosos en Industria (CO, H2S, O2, LEL), Directiva ATEX, Prevención de Atmósferas Explosivas, Detector LEL, NOM-010-STPS

### Community 10 - "Automatización Bomba Incendio"
Cohesion: 0.33
Nodes (6): Arranque Automático de Bomba Contra Incendio, Jockey Pump (Bomba de Presurización), NFPA 20 (Bombas Contra Incendio), NFPA 72 (Código Nacional Alarma Incendio), Presostato (Sensor de Presión Bomba), Panel de Detección de Incendio por Zonas

### Community 11 - "Higiene Cocina y COFEPRIS"
Cohesion: 0.7
Nodes (5): COFEPRIS (Protección contra Riesgos Sanitarios), ISO 22000 / FSSC 22000 (Seguridad Alimentaria), NOM-251-SSA1 (Higiene e Inocuidad Alimentos), Extintor Acero Inoxidable en Cocinas Industriales, Higiene y Seguridad en Cocinas Comerciales

### Community 12 - "Configuración del Sitio"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Detector Multigas NOM-033"
Cohesion: 1.0
Nodes (2): NOM-033-STPS (Espacios Confinados), Detector Multigas en Espacios Confinados

### Community 14 - "Herramientas de Rescate"
Cohesion: 1.0
Nodes (2): Hacha de Rescate para Bombero, Herramienta de Palanca Halligan

### Community 15 - "Content Config"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Env Types"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Site Config"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Productos Señalamientos"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Productos Gabinetes"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Productos Sistemas CI"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Productos Primeros Auxilios"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Productos Mangueras"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Productos Extintores"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "Productos Bomberos"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Categorías"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "Productos Equipo Seguridad"
Cohesion: 1.0
Nodes (0): 

### Community 27 - "Tipos de Extintores"
Cohesion: 1.0
Nodes (1): Tipos de Extintores (PQS, CO2, Agua, AFFF)

### Community 28 - "Protección Civil General"
Cohesion: 1.0
Nodes (1): Protección Civil CDMX

### Community 29 - "UI Complementos"
Cohesion: 1.0
Nodes (1): Complementos UI - Proyecto Red

## Knowledge Gaps
- **44 isolated node(s):** `Directorio de Clientes`, `Proyectos Activos`, `Tareas y Pendientes`, `DC-3 (Constancia Habilidades STPS)`, `CtaBar Component` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Configuración del Sitio`** (2 nodes): `site.ts`, `waUrl()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Detector Multigas NOM-033`** (2 nodes): `NOM-033-STPS (Espacios Confinados)`, `Detector Multigas en Espacios Confinados`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Herramientas de Rescate`** (2 nodes): `Hacha de Rescate para Bombero`, `Herramienta de Palanca Halligan`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Content Config`** (1 nodes): `content.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Env Types`** (1 nodes): `env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site Config`** (1 nodes): `config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Señalamientos`** (1 nodes): `senalamientos-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Gabinetes`** (1 nodes): `gabinetes-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Sistemas CI`** (1 nodes): `sistemas-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Primeros Auxilios`** (1 nodes): `primeros-auxilios-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Mangueras`** (1 nodes): `mangueras-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Extintores`** (1 nodes): `extintores-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Bomberos`** (1 nodes): `bomberos-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Categorías`** (1 nodes): `categorias.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Productos Equipo Seguridad`** (1 nodes): `equipo-seguridad-productos.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tipos de Extintores`** (1 nodes): `Tipos de Extintores (PQS, CO2, Agua, AFFF)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Protección Civil General`** (1 nodes): `Protección Civil CDMX`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `UI Complementos`** (1 nodes): `Complementos UI - Proyecto Red`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `NOM-002-STPS - Prevención de Incendios` connect `Detección de Gas e Incendio` to `Señalización y Auditorías`, `Extintores Tipo K y Recarga`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Why does `Mantenimiento preventivo de extintores según NOM` connect `Extintores Tipo K y Recarga` to `Detección de Gas e Incendio`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Why does `Mantenimiento Preventivo de Extintores` connect `Protección Civil y Evacuación` to `Extintores Tipo K y Recarga`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **What connects `Directorio de Clientes`, `Proyectos Activos`, `Tareas y Pendientes` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Empresa y Catálogo General` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._
- **Should `Arquitectura Astro y Frontend` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Detección de Gas e Incendio` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._