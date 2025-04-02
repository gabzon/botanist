// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://gabzon.github.io',
  base: '/botanist',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});