/**
 * patch-variantes-img.mjs
 * Agrega el campo `img:` a cada variante en extintores-productos.ts
 * basado en el mapa de waText → ruta AVIF.
 */

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const PROJECT = new URL('..', import.meta.url).pathname
const FILE    = join(PROJECT, 'src', 'data', 'extintores-productos.ts')

const BASE = '/imagenes/extintores'

// Mapa: waText exacto → ruta AVIF de la variante
const MAP = {
  // ── POLVO SECO PQS ──
  "Hola, quiero cotizar extintores PQS de 1 kg para vehículos":
    `${BASE}/polvo-seco/pqs-1kg-extintor-vehiculos-camion.avif`,
  "Hola, quiero cotizar extintores PQS de 2.5 kg":
    `${BASE}/polvo-seco/pqs-2-5kg-extintor-compacto-local.avif`,
  "Hola, quiero cotizar extintores de polvo seco 4.5 kg":
    `${BASE}/polvo-seco/pqs-4-5kg-extintor-oficinas-comercio.avif`,
  "Hola, quiero cotizar extintores de polvo seco 6 kg":
    `${BASE}/polvo-seco/pqs-6kg-extintor-taller-bodega.avif`,
  "Hola, quiero cotizar extintores de polvo seco 9 kg":
    `${BASE}/polvo-seco/pqs-9kg-extintor-industrial-almacen.avif`,
  "Hola, quiero cotizar extintores de polvo seco 12 kg":
    `${BASE}/polvo-seco/pqs-12kg-extintor-alta-capacidad-industrial.avif`,
  "Hola, quiero cotizar extintor rodante de polvo seco":
    `${BASE}/polvo-seco/pqs-rodante-50kg-extintor-planta-industrial.avif`,

  // ── CO₂ ──
  "Hola, quiero cotizar extintores de CO₂ de 2.5 kg":
    `${BASE}/co2/co2-2-5kg-extintor-electrico-compacto.avif`,
  "Hola, quiero cotizar extintores de CO₂ de 5 kg":
    `${BASE}/co2/co2-5kg-extintor-servidores-equipos.avif`,
  "Hola, quiero cotizar extintores de CO₂ de 10 kg":
    `${BASE}/co2/co2-10kg-extintor-industrial-alta-capacidad.avif`,

  // ── AFFF ──
  "Hola, quiero cotizar extintores AFFF de 9 litros":
    `${BASE}/afff/afff-9l-extintor-liquidos-inflamables.avif`,
  "Hola, quiero cotizar extintores AFFF de 20 litros":
    `${BASE}/afff/afff-20l-extintor-gasolinera-taller.avif`,
  "Hola, quiero cotizar extintores AFFF de 50 litros":
    `${BASE}/afff/afff-50l-extintor-rodante-planta-quimica.avif`,

  // ── TIPO K ──
  "Hola, quiero cotizar extintores Tipo K de 1.7 litros":
    `${BASE}/tipo-k/tipo-k-1-7gal-extintor-cocina-pequena.avif`,
  "Hola, quiero cotizar extintores Tipo K de 3 litros":
    `${BASE}/tipo-k/tipo-k-3gal-extintor-restaurante-freidora.avif`,
  "Hola, quiero cotizar extintores Tipo K de 6 litros":
    `${BASE}/tipo-k/tipo-k-6l-extintor-cocina-industrial.avif`,

  // ── PÚRPURA K ──
  "Hola, quiero cotizar extintores Púrpura K de 1.7 litros":
    `${BASE}/purpura-k/purpura-k-4-5kg-extintor-petroleo-gas.avif`,
  "Hola, quiero cotizar extintores Púrpura K de 3 litros":
    `${BASE}/purpura-k/purpura-k-6kg-extintor-industria-quimica.avif`,
  "Hola, quiero cotizar extintores Púrpura K de 6 litros":
    `${BASE}/purpura-k/purpura-k-9kg-extintor-aeropuerto-refineria.avif`,

  // ── AGUA A PRESIÓN ──
  "Hola, quiero cotizar extintores de agua a presión de 9 litros":
    `${BASE}/agua-a-presion/agua-9l-extintor-madera-papel-texto.avif`,
  "Hola, quiero cotizar extintores de agua a presión de 20 litros":
    `${BASE}/agua-a-presion/agua-20l-extintor-almacen-madera.avif`,
}

// Para cold-fire, automáticos, abc y agente-limpio leemos el waText del archivo
// y los mapeamos por orden de aparición dentro de cada bloque de variantes.
// Usamos un enfoque diferente: regex para insertar img: antes de waText:

let src = readFileSync(FILE, 'utf8')

let patched = 0
let alreadyPatched = 0

for (const [waText, imgPath] of Object.entries(MAP)) {
  // Busca el bloque de variante que contiene este waText
  // Inserta img: antes de la línea waText si no existe ya
  const escapedWa = waText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  // Patrón: busca "waText: '<el texto>'" con su indentación
  const pattern = new RegExp(
    `(        waText: '${escapedWa}')`,
    'g'
  )

  if (src.includes(`img: '${imgPath}'`)) {
    alreadyPatched++
    continue
  }

  const newSrc = src.replace(pattern, `        img: '${imgPath}',\n$1`)
  if (newSrc !== src) {
    src = newSrc
    patched++
    console.log(`  ✓  ${imgPath.split('/').pop()}`)
  } else {
    console.warn(`  ⚠  No match: "${waText}"`)
  }
}

// ── Categorías con waText por inferir: busca por orden en cada bloque variantes ──
// Estos no están en el MAP porque sus waText no eran conocidos sin leer el archivo.
// Procedemos extrayendo todos los waText restantes y sus rutas por orden.

const remainingByCategory = [
  {
    cat: 'cold-fire',
    imgs: [
      `${BASE}/cold-fire/cold-fire-2-5l-extintor-ecologico-compacto.avif`,
      `${BASE}/cold-fire/cold-fire-9l-extintor-biodegradable.avif`,
      `${BASE}/cold-fire/cold-fire-20l-extintor-enfriamiento-avanzado.avif`,
    ],
  },
  {
    cat: 'automaticos',
    imgs: [
      `${BASE}/automaticos/automatico-1kg-extintor-cuarto-electrico.avif`,
      `${BASE}/automaticos/automatico-6kg-extintor-bodega-desatendida.avif`,
      `${BASE}/automaticos/automatico-12kg-extintor-alta-temperatura.avif`,
      `${BASE}/automaticos/automatico-co2-extintor-equipos-electronicos.avif`,
    ],
  },
  {
    cat: 'abc',
    imgs: [
      `${BASE}/abc/abc-4-5kg-extintor-oficina-comercio-cdmx.avif`,
      `${BASE}/abc/abc-6kg-extintor-taller-manufactura.avif`,
      `${BASE}/abc/abc-9kg-extintor-bodega-almacen.avif`,
      `${BASE}/abc/abc-12kg-extintor-industrial-alta-densidad.avif`,
      `${BASE}/abc/abc-20kg-extintor-zona-riesgo-elevado.avif`,
      `${BASE}/abc/abc-50kg-rodante-extintor-planta-industrial.avif`,
      `${BASE}/abc/abc-cromado-extintor-instalacion-premium.avif`,
    ],
  },
  {
    cat: 'agente-limpio',
    imgs: [
      `${BASE}/agente-limpio/fe36-2-5kg-extintor-datos-servidores.avif`,
      `${BASE}/agente-limpio/fe36-5kg-extintor-sala-computo-archivo.avif`,
      `${BASE}/agente-limpio/fe36-10kg-extintor-datacenter-ti.avif`,
      `${BASE}/agente-limpio/solkaflam-hfc227ea-extintor-laboratorio.avif`,
    ],
  },
]

for (const { cat, imgs } of remainingByCategory) {
  // Encuentra el bloque "variantes" del producto via marcador de slug
  // Extraemos todos los waText en orden dentro de ese producto
  const catMarker = `'${cat}': {`
  const catStart  = src.indexOf(catMarker)
  if (catStart === -1) { console.warn(`Cat not found: ${cat}`); continue }

  // Encuentra el cierre del bloque "variantes: [" para este producto
  // Buscamos todos los waText en orden desde catStart
  const waTextRegex = /        waText: '([^']+)'/g
  waTextRegex.lastIndex = catStart

  let imgIdx = 0
  let m
  const patches = []
  while ((m = waTextRegex.exec(src)) !== null && imgIdx < imgs.length) {
    // Solo los que pertenecen a este producto (antes del siguiente slug raíz)
    // Detener si encontramos la siguiente definición de producto de nivel raíz
    const between = src.slice(catStart, m.index)
    const nextCatCount = (between.match(/^  '[a-z-]+': \{/gm) || []).length
    if (nextCatCount > 1) break

    const waText = m[1]
    const imgPath = imgs[imgIdx]
    imgIdx++

    if (src.includes(`img: '${imgPath}'`)) {
      alreadyPatched++
      continue
    }

    patches.push({ waText, imgPath })
  }

  // Aplicar patches en orden inverso para no desplazar índices
  for (const { waText, imgPath } of patches) {
    const escapedWa = waText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const pattern   = new RegExp(`(        waText: '${escapedWa}')`, 'g')
    const newSrc    = src.replace(pattern, `        img: '${imgPath}',\n$1`)
    if (newSrc !== src) {
      src = newSrc
      patched++
      console.log(`  ✓  ${imgPath.split('/').pop()}`)
    } else {
      console.warn(`  ⚠  No match: "${waText}" in ${cat}`)
    }
  }
}

writeFileSync(FILE, src, 'utf8')

console.log(`\n── Resultado ───────────────────────────────`)
console.log(`  ✓ Parcheados:   ${patched}`)
console.log(`  ○ Ya tenían:    ${alreadyPatched}`)
console.log(`  Total esperado: 39`)
