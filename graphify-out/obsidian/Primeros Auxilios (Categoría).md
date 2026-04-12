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

# Primeros Auxilios (Categoría)

## Estado L2
- **Página:** `/primeros-auxilios/`
- **Homologada:** 2026-04-11
- **Orquestador:** `src/pages/primeros-auxilios/index.astro` (~230 líneas)
- **Secciones propias:** 5 (HeroPrimerosAuxilios, CatalogoPrimerosAuxilios, GuiaPrimerosAuxilios, NormasPrimerosAuxilios, FaqPrimerosAuxilios)
- **Productos en catálogo:** 5

## Connections
- [[Catálogo de Productos]] - `references` [EXTRACTED]
- [[NOM-030-STPS]] - `applies_norm` [EXTRACTED]
- [[NOM-006-STPS]] - `applies_norm` [INFERRED]
- [[NOM-009-STPS]] - `applies_norm` [INFERRED]
- [[NOM-017-STPS]] - `applies_norm` [INFERRED]
- [[Certificado DC-3 STPS]] - `relates_to` [EXTRACTED]
- [[Sistemas Contra Incendio (Categoría)]] - `homologado_con` [L2 template]
- [[HeroPrimerosAuxilios]] - `implemented_by` [COMPONENT]
- [[CatalogoPrimerosAuxilios]] - `implemented_by` [COMPONENT]
- [[GuiaPrimerosAuxilios]] - `implemented_by` [COMPONENT]
- [[NormasPrimerosAuxilios]] - `implemented_by` [COMPONENT]
- [[FaqPrimerosAuxilios]] - `implemented_by` [COMPONENT]

## Productos (5 items)
1. **Botiquines** — Tipo A/B/C según número de trabajadores, NOM-030-STPS
2. **Desfibriladores DEA** — Automático y semiautomático, voz guía español
3. **Camillas** — Rígida tipo Miller, plegable, Stokes, vacío
4. **Inmovilizadores y Collarines** — Tallas S-XL, férulas extremidades
5. **Material de Curación** — Gasas, vendas, torniquetes, resurtido periódico

## Guía por tipo de empresa
- **Oficina / Pequeña** (NOM-030-STPS Tipo A): Botiquín A + capacitación básica
- **Mediana 26–100** (Tipo B): Botiquín B + DEA + gabinete + brigada DC-3
- **Industrial +100** (Tipo C): Tipo C + camillas + collarines por zona
- **Restaurante / Cocina** (+Quemaduras): Botiquín especializado quemaduras

## Normas cubiertas
- NOM-030-STPS — botiquines tipo A/B/C, brigadas, DC-3
- NOM-006-STPS — manejo de materiales (zonas de carga)
- NOM-034-STPS — ergonomía (inmovilizadores)
- NOM-017-STPS — EPP brigadistas
- NOM-009-STPS — trabajo en altura (camillas, collarines)
- NOM-002-STPS — brigadas coordinadas con CI

## Precios referencia
- Empresa hasta 25 personas, botiquín tipo A: desde **$1,800 MXN**
- Empresa 26–100, tipo B + DEA + DC-3: desde **$12,000 MXN**

## Diferenciadores
- Dos flujos CTA: nuevo equipo + resurtido urgente para auditoría STPS
- Escenario cocina industrial con botiquín especializado quemaduras
- Argumento DEA con estadística de supervivencia (70% en 3 min)
- Multas STPS en FAQ (250–5000 salarios mínimos) como argumento de compra

#graphify/concept #graphify/EXTRACTED #community/Empresa_y_Catálogo_General #l2/aprobada
