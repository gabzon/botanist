// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: 'https://gabzon.github.io',
  site:'https://botanistzadar.com',
  // base: '/botanist', // Add the leading slash for GitHub Pages
  // trailingSlash: "never",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hr'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});