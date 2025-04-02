// @ts-check
import { defineConfig } from 'astro/config';

// Import tailwind correctly
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://gabzon.github.io',
  base: 'botanist',
  trailingSlash: "never",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});