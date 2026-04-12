---
source_file: "ProyectoRed-Vault/01 - Empresa/Catálogo de Productos.md"
type: "concept"
community: "Empresa y Catálogo General"
tags:
  - graphify/concept
  - graphify/EXTRACTED
  - community/Empresa_y_Catálogo_General
  - l2/aprobada
---

# Equipo de Seguridad Industrial (Categoría)

## Estado L2
- **Página:** `/equipo-seguridad/`
- **Homologada:** 2026-04-11
- **Orquestador:** `src/pages/equipo-seguridad/index.astro` (~230 líneas)
- **Secciones propias:** 5 (HeroEquipoSeguridad, CatalogoEquipoSeguridad, GuiaEquipoSeguridad, NormasEquipoSeguridad, FaqEquipoSeguridad)
- **Productos en catálogo:** 8

## Connections
- [[Catálogo de Productos]] - `references` [EXTRACTED]
- [[NOM-017-STPS]] - `applies_norm` [EXTRACTED]
- [[NOM-011-STPS]] - `applies_norm` [EXTRACTED]
- [[NOM-113-STPS]] - `applies_norm` [EXTRACTED]
- [[NOM-009-STPS]] - `applies_norm` [EXTRACTED]
- [[NOM-029-STPS]] - `applies_norm` [EXTRACTED]
- [[ANSI Z87.1]] - `applies_norm` [EXTRACTED]
- [[Primeros Auxilios (Categoría)]] - `homologado_con` [L2 template]
- [[Sistemas Contra Incendio (Categoría)]] - `homologado_con` [L2 template]
- [[HeroEquipoSeguridad]] - `implemented_by` [COMPONENT]
- [[CatalogoEquipoSeguridad]] - `implemented_by` [COMPONENT]
- [[GuiaEquipoSeguridad]] - `implemented_by` [COMPONENT]
- [[NormasEquipoSeguridad]] - `implemented_by` [COMPONENT]
- [[FaqEquipoSeguridad]] - `implemented_by` [COMPONENT]

## Productos (8 items — grid 4-col estándar)
1. **Protección Craneal** — Cascos clase E, G, C. NOM-017-STPS
2. **Protección Visual** — Lentes ANSI Z87.1, goggles, caretas, visores soldadura
3. **Protección Auditiva** — Tapones NRR 29–33 dB, orejeras. NOM-011-STPS
4. **Protección Respiratoria** — N95, media cara OV/P100, cara completa. NIOSH
5. **Protección de Manos** — Anticorte EN 388, químico EN 374, soldador, dieléctrico
6. **Calzado de Seguridad** — Casquillo acero/composite, EH, antiperforación. NOM-113
7. **Arneses y Caídas** — Tipos I, II, III + líneas retráctiles. NOM-009-STPS
8. **Ropa de Protección** — FR, alta visibilidad, químicos, antiestático. EN 11612

## Guía por tipo de industria
- **Construcción** (NOM-017): Casco G + lentes + tapones + calzado + arnés
- **Planta industrial** (NOM-017 · NOM-011): EPP por puesto + programa documentado
- **Obra vial** (ANSI 107): Chaleco clase 2 o 3 según velocidad de tráfico
- **Mantenimiento eléctrico** (NOM-029 · NFPA 70E): Clase E + guante dieléctrico + calzado EH + ropa FR

## Normas cubiertas
- **NOM-017-STPS** — programa EPP (análisis + selección + documentación)
- **NOM-011-STPS** — auditiva (límite 85 dB, dosimetría)
- **NOM-113-STPS** — calzado (casquillo, antiperforación, EH)
- **NOM-009-STPS** — altura (arnés + línea + anclaje)
- **ANSI Z87.1** — visual (impacto, UV, salpicaduras)
- **NOM-029-STPS** — riesgo eléctrico (dieléctrico, clase E, FR)

## Precios referencia
- EPP básico obra (5 piezas): **$800–$1,800 MXN** por trabajador
- EPP mantenimiento eléctrico completo: **$3,500–$8,000 MXN** por persona

## Diferenciadores técnicos
- Mezcla única NOM + estándares internacionales (ANSI, EN, NIOSH, NFPA 70E)
- Selección técnica por tipo de riesgo, no genérica
- Entrega con ficha técnica + certificado de norma + especificación de protección
- Programa de EPP documentado para expedientes STPS (análisis + registros de entrega)
- FAQ con argumentos de responsabilidad legal (registro de entrega firmado)

## Nota técnica — Imágenes reutilizadas
Con 8 productos y 6 imágenes disponibles en `/imagenes/equipo-seguridad/`, se reutiliza:
- `cascos.jpg` para Protección Craneal y Calzado
- `chalecos.jpg` para Arneses y Ropa de Protección
Esto es aceptable visualmente — los productos tienen descripciones y subcats que los diferencian claramente.

#graphify/concept #graphify/EXTRACTED #community/Empresa_y_Catálogo_General #l2/aprobada
