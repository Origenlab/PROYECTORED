#!/usr/bin/env node
// ============================================================
// scripts/generate-sitemap.mjs
// Generador de sitemap manual — se ejecuta como postbuild
// Respaldo para cuando @astrojs/sitemap no funciona correctamente
// ============================================================

import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const DIST = new URL('../dist', import.meta.url).pathname
const BASE_URL = 'https://proyectored.com.mx'
const today = new Date().toISOString().split('T')[0]

// Prioridad por tipo de ruta
function getPriority(urlPath) {
  if (urlPath === '/') return '1.0'
  const productSections = ['/extintores/', '/equipo-bomberos/', '/senalamientos/', '/gabinetes/', '/mangueras/', '/sistemas/', '/primeros-auxilios/', '/equipo-seguridad/']
  // L4 — tiene segmentos adicionales dentro de la sección
  const isL4 = productSections.some((s) => {
    return urlPath.startsWith(s) && urlPath !== s
  })
  if (isL4) return '0.90'
  // L3 — landings de categoría
  const isL3 = productSections.some((s) => urlPath === s)
  if (isL3) return '0.85'
  if (['/productos/', '/servicios/'].includes(urlPath)) return '0.85'
  if (urlPath.startsWith('/blog/')) return '0.70'
  return '0.60'
}

// Encontrar todos los index.html en dist/
async function findPages(dir, base = '') {
  const entries = await readdir(dir, { withFileTypes: true })
  const urls = []
  for (const entry of entries) {
    // Ignorar carpetas internas de build
    if (['_astro', 'chunks', 'pages'].includes(entry.name)) continue
    const fullPath = path.join(dir, entry.name)
    const urlPath = base === '' ? `/${entry.name}` : `${base}/${entry.name}`
    if (entry.isDirectory()) {
      const sub = await findPages(fullPath, urlPath)
      urls.push(...sub)
    } else if (entry.name === 'index.html') {
      // index.html en raíz → '/', en subdir → '/subdir/'
      const cleanPath = base === '' ? '/' : `${base}/`
      // Excluir 404
      if (!cleanPath.includes('404')) {
        urls.push(cleanPath)
      }
    }
  }
  return urls
}

const pages = await findPages(DIST)

// Generar XML
const urlEntries = pages
  .sort()
  .map((p) => {
    const priority = getPriority(p)
    return `  <url>
    <loc>${BASE_URL}${p}</loc>
    <lastmod>${today}</lastmod>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`

const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-0.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`

await writeFile(path.join(DIST, 'sitemap-0.xml'), sitemap)
await writeFile(path.join(DIST, 'sitemap-index.xml'), sitemapIndex)

console.log(`✓ Sitemap generado: ${pages.length} páginas`)
console.log(`  → dist/sitemap-index.xml`)
console.log(`  → dist/sitemap-0.xml`)
