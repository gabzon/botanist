// @ts-check
import { defineConfig } from 'astro/config';

// Import tailwind correctly
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: './',
  },
  site: 'https://gabzon.github.io',
  base: 'botanist', // No leading slash
  trailingSlash: "never",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});