// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/** @type {import('@astrojs/sitemap').SitemapOptions} */
const sitemapOptions = {
  // Excluir rutas internas, drafts y páginas que no deben indexarse
  filter: (page) =>
    !page.includes('/404') &&
    !page.includes('/_') &&
    !page.includes('/admin'),

  // Idioma único — es-MX
  i18n: {
    defaultLocale: 'es',
    locales: { es: 'es-MX' },
  },

  // Ajuste de prioridades por tipo de página
  // (home y categorías empujan más fuerte que fichas individuales)
  serialize(item) {
    const url = item.url;

    // Home
    if (url === 'https://proyectored.com.mx/') {
      item.priority = 1.0;
      item.changefreq = /** @type {any} */ ('weekly');
    }
    // Landing de categoría L2
    else if (/\/(extintores|equipo-bomberos|senalamientos|gabinetes|mangueras|sistemas|primeros-auxilios|equipo-seguridad|servicios|productos|empresas|sectores)\/?$/.test(url)) {
      item.priority = 0.9;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Fichas L3/L4 (producto individual) y sectores/empresas internas
    else if (/\/(extintores|equipo-bomberos|senalamientos|gabinetes|mangueras|sistemas|primeros-auxilios|equipo-seguridad|sectores|empresas)\/[^/]+\/?$/.test(url)) {
      item.priority = 0.8;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Blog
    else if (url.includes('/blog/')) {
      item.priority = 0.6;
      item.changefreq = /** @type {any} */ ('monthly');
    }
    // Contacto / nosotros / cotización — páginas de soporte
    else {
      item.priority = 0.7;
      item.changefreq = /** @type {any} */ ('monthly');
    }

    item.lastmod = new Date().toISOString();
    return item;
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Configuración Astro para proyectored.com.mx
// Salida estática con sitemap automático y prioridades ajustadas por sección.
// ─────────────────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://proyectored.com.mx',
  output: 'static',

  integrations: [sitemap(sitemapOptions)],

  vite: {
    // cacheDir local para evitar colisiones de permisos entre sesiones
    cacheDir: 'node_modules/.vite',
  },
});
