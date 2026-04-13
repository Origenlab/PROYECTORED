// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://proyectored.com.mx',
  output: 'static',
  vite: {
    cacheDir: '/tmp/vite-cache',
  },
});
