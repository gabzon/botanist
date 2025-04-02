// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const menuCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    // Change from enum to string with validation
    category: z.string().refine(val => [
      'SALADS',
      'SOUPS',
      'APPETIZERS',
      'MAIN COURSES',
      'BURGERS',
      'KIDS MENU',
      'DESSERTS'
    ].includes(val), {
      message: "Category must be one of the predefined menu categories"
    }),
    // Optional tags
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  'menu': menuCollection,
};