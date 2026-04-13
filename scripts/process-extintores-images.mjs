/**
 * process-extintores-images.mjs
 * Script maestro de conversión, optimización y organización de imágenes
 * de extintores para PROYECTORED.
 *
 * Fuente: ~/Downloads (imágenes clasificadas por tipo)
 * Destino: public/imagenes/extintores/ (carpetas por subcategoría)
 *
 * Ejecución: node scripts/process-extintores-images.mjs
 */

import sharp from 'sharp'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import os from 'os'

const HOME       = os.homedir()
const DL         = join(HOME, 'Downloads')
const PROJECT    = new URL('..', import.meta.url).pathname
const DEST       = join(PROJECT, 'public', 'imagenes', 'extintores')

// ── Opciones de calidad AVIF ──────────────────────────────────────────────
// quality: 55–70 es el rango óptimo para AVIF (buena calidad, bajo peso)
// effort: 6 (default sharp) – buen balance velocidad/compresión
const CARD_OPT    = { quality: 62, effort: 6 }  // 640×360 — card CatalogoExtintores
const HERO_OPT    = { quality: 68, effort: 6 }  // 800×500 — hero L3/L4 page
const GALLERY_OPT = { quality: 65, effort: 6 }  // 720×480 — galería producto

// ── Dimensiones ───────────────────────────────────────────────────────────
const CARD_W    = 640,  CARD_H    = 360
const HERO_W    = 800,  HERO_H    = 500
const GALLERY_W = 720,  GALLERY_H = 480

// ── Helpers ───────────────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

async function toAvif(src, destPath, w, h, opt) {
  if (!existsSync(src)) {
    console.warn(`  ⚠  SKIP (no encontrado): ${src}`)
    return false
  }
  ensureDir(destPath.replace(/\/[^/]+$/, ''))
  try {
    await sharp(src)
      .resize(w, h, { fit: 'cover', position: 'centre' })
      .flatten({ background: '#ffffff' })   // Elimina transparencia (PNG → AVIF)
      .avif(opt)
      .toFile(destPath)
    const kb = (await import('fs')).statSync(destPath).size / 1024
    console.log(`  ✓  ${destPath.replace(PROJECT, '')}  (${kb.toFixed(0)} KB)`)
    return true
  } catch (e) {
    console.error(`  ✗  Error en ${destPath}: ${e.message}`)
    return false
  }
}

// ── Mapa de conversiones ──────────────────────────────────────────────────
// Formato: [ srcFile, destRelative, width, height, options ]
// srcFile relativo a ~/Downloads

const jobs = [

  // ════════════════════════════════════════════════════
  //  POLVO SECO PQS
  // ════════════════════════════════════════════════════
  // Card principal (CatalogoExtintores) — mejor Image_fx con label claro
  [ 'Image_fx.png',
    'venta-extintor-pqs-abc-certificado-nom-mexico.avif',
    CARD_W, CARD_H, CARD_OPT ],

  // Hero L3/L4 — encuadre diferente (más cercano)
  [ 'Image_fx (5).png',
    'polvo-seco.avif',
    HERO_W, HERO_H, HERO_OPT ],

  // Galería — mezcla de studio y real
  [ 'Image_fx (3).png',
    'polvo-seco/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Dry_chemical_fire_202604121715 (1).jpeg',
    'polvo-seco/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Dry_chemical_fire_202604121716.jpeg',
    'polvo-seco/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  CO₂ — Dióxido de Carbono
  // ════════════════════════════════════════════════════
  [ 'CO2_fire_extinguisher_202604121657.jpeg',
    'extintor-co2-dioxido-carbono-equipo-electrico-cdmx.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'CO2_fire_extinguisher_202604121720.jpeg',
    'co2.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'CO2_fire_extinguisher_202604121657 (1).jpeg',
    'co2/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'CO2_fire_extinguisher_202604121657 (2).jpeg',
    'co2/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'CO2_fire_extinguisher_202604121720 (1).jpeg',
    'co2/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  AFFF — Espuma Mecánica
  // ════════════════════════════════════════════════════
  // ifx10 = "AFFF ESPUMA" — label más limpio para card principal
  [ 'Image_fx (10).png',
    'extintor-afff-espuma-mecanica-liquidos-inflamables.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Image_fx (8).png',
    'afff.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Foam_fire_extinguisher_202604121658.jpeg',
    'afff/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Foam_fire_extinguisher_202604121658 (1).jpeg',
    'afff/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Foam_fire_extinguisher_202604121721.jpeg',
    'afff/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  TIPO K — Cocinas Industriales
  // ════════════════════════════════════════════════════
  [ 'Kitchen_fire_extinguisher_202604121659.jpeg',
    'extintor-tipo-k-cocina-industrial-restaurante.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Extinguisher_for_kitchens_202604121723.jpeg',
    'tipo-k.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Kitchen_fire_extinguisher_202604121659 (1).jpeg',
    'tipo-k/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Kitchen_fire_extinguisher_202604121659 (2).jpeg',
    'tipo-k/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Kitchen_fire_extinguisher_202604121659 (3).jpeg',
    'tipo-k/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  PÚRPURA K — Bicarbonato de Potasio
  // ════════════════════════════════════════════════════
  // ifx12 = "PIRPURA K" label claro — mejor para card
  [ 'Image_fx (12).png',
    'extintor-purpura-k-bicarbonato-potasio-industrial.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Image_fx (15).png',
    'purpura-k.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Purple_K_fire_202604121700.jpeg',
    'purpura-k/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Purple_K_fire_202604121700 (1).jpeg',
    'purpura-k/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Purple_K_fire_202604121723.jpeg',
    'purpura-k/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  AGUA A PRESIÓN
  // ════════════════════════════════════════════════════
  [ 'Water_pressure_fire_202604121701.jpeg',
    'extintor-agua-a-presion-fuegos-clase-a.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Water_pressure_fire_202604121727.jpeg',
    'agua-a-presion.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Water_pressure_fire_202604121701 (1).jpeg',
    'agua-a-presion/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Water_pressure_fire_202604121701 (2).jpeg',
    'agua-a-presion/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Water_pressure_fire_202604121701 (3).jpeg',
    'agua-a-presion/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  COLD FIRE — Enfriamiento Avanzado
  // ════════════════════════════════════════════════════
  // ifx16 = "COLD FIRE" label claro — mejor para card
  [ 'Image_fx (16).png',
    'extintor-cold-fire-agente-enfriamiento-rapido.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Extinguisher_Cold_Fire_202604121728.jpeg',
    'cold-fire.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Extinguisher_Cold_Fire_202604121728 (1).jpeg',
    'cold-fire/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ '8._Extintor_Cold_202604121728.png',
    'cold-fire/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Image_fx (16).png',
    'cold-fire/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  AUTOMÁTICOS — Sin Intervención
  // ════════════════════════════════════════════════════
  [ 'Extinguisher_on_neutral_202604121702.jpeg',
    'extintor-automatico-proteccion-areas-desatendidas.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Extinguisher_on_neutral_202604121702 (1).jpeg',
    'automaticos.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Extinguisher_on_neutral_202604121702 (2).jpeg',
    'automaticos/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Extinguisher_on_neutral_202604121702 (3).jpeg',
    'automaticos/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  // galeria-3: reusar desde otra perspectiva
  [ 'Extinguisher_on_neutral_202604121702.jpeg',
    'automaticos/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  ABC MULTIPROPÓSITO
  // ════════════════════════════════════════════════════
  [ 'ABC_multipurpose_fire_202604121705.jpeg',
    'extintor-abc-multiproposito-comercio-industria.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'ABC_multipurpose_fire_202604121717.jpeg',
    'abc.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'ABC_multipurpose_fire_202604121705 (1).jpeg',
    'abc/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'ABC_multipurpose_fire_202604121705 (2).jpeg',
    'abc/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'ABC_multipurpose_fire_202604121706.jpeg',
    'abc/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  AGENTE LIMPIO — FE-36 / FM-200
  // ════════════════════════════════════════════════════
  [ 'Clean_agent_fire_202604121707.jpeg',
    'extintor-agente-limpio-fe36-sin-residuos.avif',
    CARD_W, CARD_H, CARD_OPT ],

  [ 'Clean_agent_fire_202604121729.jpeg',
    'agente-limpio.avif',
    HERO_W, HERO_H, HERO_OPT ],

  [ 'Clean_agent_fire_202604121707 (1).jpeg',
    'agente-limpio/galeria-1.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Clean_agent_fire_202604121730.jpeg',
    'agente-limpio/galeria-2.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],
  [ 'Clean_agent_fire_202604121707.jpeg',
    'agente-limpio/galeria-3.avif',
    GALLERY_W, GALLERY_H, GALLERY_OPT ],

  // ════════════════════════════════════════════════════
  //  IMÁGENES DE LIFESTYLE / CONTEXTO (para hero secciones y escenarios)
  // ════════════════════════════════════════════════════
  // Polvo seco en contexto oficina — útil para hero de página
  [ 'Image_fx (17).png',
    'extintor-polvo-seco-pqs-instalado-oficina-cdmx.avif',
    CARD_W, CARD_H, CARD_OPT ],

  // Polvo seco en bodega/industrial
  [ 'Image_fx (18).png',
    'extintor-pqs-bodega-industrial-zona-cdmx.avif',
    CARD_W, CARD_H, CARD_OPT ],

]

// ── Ejecutar todas las conversiones ──────────────────────────────────────
let ok = 0, skip = 0, errors = 0

console.log('\n╔════════════════════════════════════════════════════╗')
console.log('║  PROYECTO RED — Conversión AVIF extintores          ║')
console.log('╚════════════════════════════════════════════════════╝\n')
console.log(`Fuente:  ${DL}`)
console.log(`Destino: ${DEST}\n`)

for (const [srcName, destRel, w, h, opt] of jobs) {
  const src  = join(DL, srcName)
  const dest = join(DEST, destRel)
  const result = await toAvif(src, dest, w, h, opt)
  if (result === true)   ok++
  else if (result === false && !existsSync(join(DL, srcName))) skip++
  else errors++
}

console.log(`\n── Resultado ──────────────────────────────────────────`)
console.log(`  ✓ Exitosas:  ${ok}`)
console.log(`  ⚠ Saltadas:  ${skip}`)
console.log(`  ✗ Errores:   ${errors}`)
console.log(`  Total jobs:  ${jobs.length}`)
console.log(`\n¡Conversión completada!\n`)
