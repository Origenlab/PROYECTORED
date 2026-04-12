---
source_file: "ProyectoRed-Vault/01 - Empresa/Catálogo de Productos.md"
type: "concept"
community: "Productos Sistemas CI"
tags:
  - graphify/concept
  - graphify/EXTRACTED
  - community/Productos_Sistemas_CI
  - l2/aprobada
---

# Sistemas Contra Incendio (Categoría)

## Estado L2
- **Página:** `/sistemas/`
- **Homologada:** 2026-04-11
- **Orquestador:** `src/pages/sistemas/index.astro` (~175 líneas)
- **Secciones propias:** 5 (HeroSistemas, CatalogoSistemas, GuiaSistemas, NormasSistemas, FaqSistemas)
- **Subsistemas en catálogo:** 5
- **Precio ancla hero:** desde $45,000 MXN instalado

## Connections
- [[Catálogo de Productos]] - `references` [EXTRACTED]
- [[NFPA 72 (Alarmas y Detección)]] - `applies_norm` [EXTRACTED]
- [[NFPA 13 (Rociadores)]] - `applies_norm` [EXTRACTED]
- [[NFPA 20 (Bombas CI)]] - `applies_norm` [EXTRACTED]
- [[NFPA 14 (Sistemas Standpipe)]] - `applies_norm` [EXTRACTED]
- [[NFPA 96 (Campanas de Cocina)]] - `applies_norm` [EXTRACTED]
- [[NOM-002-STPS]] - `applies_norm` [INFERRED]
- [[Mangueras y Herrajes Contra Incendio (Categoría)]] - `homologado_con` [L2 template]
- [[Señalamientos de Emergencia (Categoría)]] - `homologado_con` [L2 template]
- [[HeroSistemas]] - `implemented_by` [COMPONENT]
- [[CatalogoSistemas]] - `implemented_by` [COMPONENT]
- [[GuiaSistemas]] - `implemented_by` [COMPONENT]
- [[NormasSistemas]] - `implemented_by` [COMPONENT]
- [[FaqSistemas]] - `implemented_by` [COMPONENT]

## Subsistemas (5 items)
1. **Alarmas Contra Incendio** — NFPA 72, convencional y direccionable, UL Listed
2. **Detectores de Humo e Incendio** — Fotoeléctrico, iónico, calor fijo, VESDA
3. **Rociadores Automáticos** — NFPA 13, colgante/montante/lateral, 57°C–141°C
4. **Tableros de Control FACP** — NFPA 72, UL864, 2–2048 puntos
5. **Redes Hidráulicas** — NFPA 14·20, CPVC + acero negro, bomba eléctrica + diésel

> Grid override: `.catidx-grid--sis` (3-col) para layout 3+2 con 5 items

## Guía por tipo de inmueble
- **Bodega / Nave industrial** (NFPA 13·20): Rociadores + Red hidráulica + Bomba eléctrica/diésel
- **Edificio oficinas / Corporativo** (NFPA 72·13): Alarma direccionable + Rociadores 57°C
- **Restaurante / Cocina industrial** (NFPA 96·17A): Supresión química campana + Interlock gas
- **Centro de datos / Servidores** (NFPA 75·2001): Agente limpio FM-200/Novec + VESDA

## Normas cubiertas
- **NFPA 72** — Alarma y detección (tableros FACP, detectores, notificación)
- **NFPA 13** — Rociadores automáticos (diseño, cálculo hidráulico, instalación)
- **NFPA 14** — Sistemas standpipe en edificios
- **NFPA 20** — Bombas contra incendio (eléctrica + diésel + jockey)
- **NFPA 96** — Campanas de cocina industrial
- **NOM-002-STPS** — Centros de trabajo (sistema operable + mantenimiento documentado)

## Precios referencia
- Alarma básica oficinas 500 m²: desde **$45,000 MXN** instalado
- Rociadores nave industrial 1,000 m²: **$180,000–$350,000 MXN**
- Sistema completo edificio 10 pisos: **$500,000–$1,200,000 MXN**

## Diferenciadores técnicos
- Único proveedor para todos los subsistemas (alarma + rociadores + red + bomba)
- Cálculo hidráulico, planos AutoCAD y expediente completo para Protección Civil
- Comisionamiento documentado conforme a NFPA 25
- Mantenimiento con pólizas anuales (bitácora válida para STPS y PC)
- Diagnóstico gratuito de sistema existente + plan de regularización

## Nota técnica — Grid override
La L2 de sistemas usa 5 items en catálogo (no 4 ni 8 como el resto). Esto requiere el override `.catidx-grid--sis` que establece `grid-template-columns: repeat(3, 1fr)` produciendo un layout visual 3+2. El último card de la fila de 2 se centra automáticamente con `grid-column: 2 / 3` en mobile o con el comportamiento natural del grid en desktop.

#graphify/concept #graphify/EXTRACTED #community/Productos_Sistemas_CI #l2/aprobada
