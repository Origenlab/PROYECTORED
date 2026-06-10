import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    slug: z.string().optional(),
    category: z.string(),
    // Campos que antes definía el config legacy (src/content/config.ts,
    // API eliminada en Astro 5) y Zod descartaba silenciosamente:
    image: z.string().optional(),
    author: z.string().default('Proyecto Red'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

const productos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/productos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    precio: z.string().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = { blog, productos };
