/**
 * process-variantes-images.mjs
 * Genera imágenes AVIF únicas para cada variante (capacidad) de cada tipo de extintor.
 * Cada card del catálogo L3 mostrará una imagen diferente.
 *
 * Naming: /imagenes/extintores/{categoria}/{nombre-seo}.avif
 * Dimensiones card: 640×360 (16:9, mismas que CatalogoExtintores)
 */

import sharp from 'sharp'
import { existsSync, mkdirSync, statSync } from 'fs'
import { join } from 'path'
import os from 'os'

const HOME    = os.homedir()
const DL      = join(HOME, 'Downloads')
const PROJECT = new URL('..', import.meta.url).pathname
const DEST    = join(PROJECT, 'public', 'imagenes', 'extintores')
const IFX     = join(HOME, 'Downloads') // Image_fx PNGs also in Downloads

const OPT = { quality: 63, effort: 6 }
const W = 640, H = 360

function ensureDir(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

async function toAvif(src, destPath) {
  if (!existsSync(src)) {
    console.warn(`  ⚠  SKIP (no existe): ${src}`)
    return false
  }
  ensureDir(destPath.replace(/\/[^/]+$/, ''))
  try {
    await sharp(src)
      .resize(W, H, { fit: 'cover', position: 'centre' })
      .flatten({ background: '#ffffff' })
      .avif(OPT)
      .toFile(destPath)
    const kb = statSync(destPath).size / 1024
    console.log(`  ✓  ${destPath.replace(PROJECT, '')}  (${kb.toFixed(0)} KB)`)
    return true
  } catch(e) {
    console.error(`  ✗  ${destPath}: ${e.message}`)
    return false
  }
}

// ── Mapa de variantes ────────────────────────────────────────────────────
// [src relativo a Downloads, dest relativo a public/imagenes/extintores]
const jobs = [

  // ════════════════════════════════════════════════════
  //  POLVO SECO PQS — 7 variantes
  // ════════════════════════════════════════════════════
  // PQS 1 kg — Vehículos: studio limpio ifx0
  [ 'Image_fx.png',
    'polvo-seco/pqs-1kg-extintor-vehiculos-camion.avif' ],

  // PQS 2.5 kg — Compacto: ifx1 ángulo diferente
  [ 'Image_fx (1).png',
    'polvo-seco/pqs-2-5kg-extintor-compacto-local.avif' ],

  // PQS 4.5 kg — Más vendido: ifx5 con label "EXTINTOR (PQS) POLVO SECO" — el más claro
  [ 'Image_fx (5).png',
    'polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif' ],

  // PQS 6 kg — Talleres: ifx3 cuerpo más grande en encuadre
  [ 'Image_fx (3).png',
    'polvo-seco/pqs-6kg-extintor-taller-bodega.avif' ],

  // PQS 9 kg — Industrial: foto real JPEG
  [ 'Dry_chemical_fire_202604121715 (2).jpeg',
    'polvo-seco/pqs-9kg-extintor-industrial-almacen.avif' ],

  // PQS 12 kg — Alta capacidad: foto real JPEG diferente
  [ 'Dry_chemical_fire_202604121715 (3).jpeg',
    'polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif' ],

  // PQS Rodante 25–50 kg — Gran capacidad
  [ 'Dry_chemical_fire_202604121716 (1).jpeg',
    'polvo-seco/pqs-rodante-50kg-extintor-planta-industrial.avif' ],

  // ════════════════════════════════════════════════════
  //  CO₂ — 3 variantes
  // ════════════════════════════════════════════════════
  [ 'CO2_fire_extinguisher_202604121720 (3).jpeg',
    'co2/co2-2-5kg-extintor-electrico-compacto.avif' ],

  [ 'CO2_fire_extinguisher_202604121720 (4).jpeg',
    'co2/co2-5kg-extintor-servidores-equipos.avif' ],

  [ 'CO2_fire_extinguisher_202604121720 (5).jpeg',
    'co2/co2-10kg-extintor-industrial-alta-capacidad.avif' ],

  // ════════════════════════════════════════════════════
  //  AFFF — 3 variantes
  // ════════════════════════════════════════════════════
  [ 'Foam_fire_extinguisher_202604121721 (1).jpeg',
    'afff/afff-9l-extintor-liquidos-inflamables.avif' ],

  [ 'Foam_fire_extinguisher_202604121721 (2).jpeg',
    'afff/afff-20l-extintor-gasolinera-taller.avif' ],

  [ 'Foam_fire_extinguisher_202604121722 (1).jpeg',
    'afff/afff-50l-extintor-rodante-planta-quimica.avif' ],

  // ════════════════════════════════════════════════════
  //  TIPO K — 3 variantes
  // ════════════════════════════════════════════════════
  [ 'Kitchen_fire_extinguisher_202604121659 (4).jpeg',
    'tipo-k/tipo-k-1-7gal-extintor-cocina-pequena.avif' ],

  [ 'Kitchen_fire_extinguisher_202604121659 (5).jpeg',
    'tipo-k/tipo-k-3gal-extintor-restaurante-freidora.avif' ],

  [ 'Kitchen_fire_extinguisher_202604121659 (6).jpeg',
    'tipo-k/tipo-k-6l-extintor-cocina-industrial.avif' ],

  // ════════════════════════════════════════════════════
  //  PÚRPURA K — 3 variantes
  // ════════════════════════════════════════════════════
  // ifx12 y ifx13 ya son Púrpura K con label claro
  [ 'Image_fx (12).png',
    'purpura-k/purpura-k-4-5kg-extintor-petroleo-gas.avif' ],

  [ 'Image_fx (13).png',
    'purpura-k/purpura-k-6kg-extintor-industria-quimica.avif' ],

  [ 'Purple_K_fire_202604121700 (2).jpeg',
    'purpura-k/purpura-k-9kg-extintor-aeropuerto-refineria.avif' ],

  // ════════════════════════════════════════════════════
  //  AGUA A PRESIÓN — 2 variantes
  // ════════════════════════════════════════════════════
  [ 'Water_pressure_fire_202604121701 (4).jpeg',
    'agua-a-presion/agua-9l-extintor-madera-papel-texto.avif' ],

  [ 'Water_pressure_fire_202604121701 (5).jpeg',
    'agua-a-presion/agua-20l-extintor-almacen-madera.avif' ],

  // ════════════════════════════════════════════════════
  //  COLD FIRE — 3 variantes
  // ════════════════════════════════════════════════════
  [ 'Image_fx (16).png',
    'cold-fire/cold-fire-2-5l-extintor-ecologico-compacto.avif' ],

  [ 'Extinguisher_Cold_Fire_202604121728 (1).jpeg',
    'cold-fire/cold-fire-9l-extintor-biodegradable.avif' ],

  [ '8._Extintor_Cold_202604121728.png',
    'cold-fire/cold-fire-20l-extintor-enfriamiento-avanzado.avif' ],

  // ════════════════════════════════════════════════════
  //  AUTOMÁTICOS — 4 variantes
  // ════════════════════════════════════════════════════
  [ 'Extinguisher_on_neutral_202604121702 (1).jpeg',
    'automaticos/automatico-1kg-extintor-cuarto-electrico.avif' ],

  [ 'Extinguisher_on_neutral_202604121702 (2).jpeg',
    'automaticos/automatico-6kg-extintor-bodega-desatendida.avif' ],

  [ 'Extinguisher_on_neutral_202604121702 (3).jpeg',
    'automaticos/automatico-12kg-extintor-alta-temperatura.avif' ],

  [ 'Extinguisher_on_neutral_202604121702.jpeg',
    'automaticos/automatico-co2-extintor-equipos-electronicos.avif' ],

  // ════════════════════════════════════════════════════
  //  ABC MULTIPROPÓSITO — 7 variantes
  // ════════════════════════════════════════════════════
  [ 'ABC_multipurpose_fire_202604121705 (1).jpeg',
    'abc/abc-4-5kg-extintor-oficina-comercio-cdmx.avif' ],

  [ 'ABC_multipurpose_fire_202604121705 (2).jpeg',
    'abc/abc-6kg-extintor-taller-manufactura.avif' ],

  [ 'ABC_multipurpose_fire_202604121706 (1).jpeg',
    'abc/abc-9kg-extintor-bodega-almacen.avif' ],

  [ 'ABC_multipurpose_fire_202604121706.jpeg',
    'abc/abc-12kg-extintor-industrial-alta-densidad.avif' ],

  [ 'ABC_multipurpose_fire_202604121717 (1).jpeg',
    'abc/abc-20kg-extintor-zona-riesgo-elevado.avif' ],

  [ 'ABC_multipurpose_fire_202604121717 (2).jpeg',
    'abc/abc-50kg-rodante-extintor-planta-industrial.avif' ],

  [ 'ABC_multipurpose_fire_202604121718.jpeg',
    'abc/abc-cromado-extintor-instalacion-premium.avif' ],

  // ════════════════════════════════════════════════════
  //  AGENTE LIMPIO — 4 variantes
  // ════════════════════════════════════════════════════
  [ 'Clean_agent_fire_202604121707 (1).jpeg',
    'agente-limpio/fe36-2-5kg-extintor-datos-servidores.avif' ],

  [ 'Clean_agent_fire_202604121729.jpeg',
    'agente-limpio/fe36-5kg-extintor-sala-computo-archivo.avif' ],

  [ 'Clean_agent_fire_202604121730.jpeg',
    'agente-limpio/fe36-10kg-extintor-datacenter-ti.avif' ],

  [ 'Clean_agent_fire_202604121707.jpeg',
    'agente-limpio/solkaflam-hfc227ea-extintor-laboratorio.avif' ],
]

// ── Ejecutar ──────────────────────────────────────────────────────────────
let ok = 0, skip = 0

console.log('\n╔═══════════════════════════════════════════════════════╗')
console.log('║  PROYECTO RED — Imágenes por variante (capacidad)     ║')
console.log('╚═══════════════════════════════════════════════════════╝\n')

for (const [srcName, destRel] of jobs) {
  const src  = join(DL, srcName)
  const dest = join(DEST, destRel)
  const r = await toAvif(src, dest)
  r ? ok++ : skip++
}

console.log(`\n── Resultado ──────────────────────────────────────────`)
console.log(`  ✓ Exitosas: ${ok}`)
console.log(`  ⚠ Saltadas: ${skip}`)
console.log(`  Total:      ${jobs.length}`)
