// src/content/config.ts
// Zod schemas para las colecciones de contenido de Astro

import { defineCollection, z } from 'astro:content'

// Colección de artículos del blog
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    pubDate:     z.coerce.date(),
    category:    z.string().optional(),
    image:       z.string().optional(),
    author:      z.string().default('Proyecto Red'),
    tags:        z.array(z.string()).optional(),
    noindex:     z.boolean().default(false),
  }),
})

// Colección de categorías de productos (datos estructurados)
const productos = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    slug:        z.string(),
    description: z.string(),
    badge:       z.string().optional(),  // "NOM-154-SCFI", "NFPA 1971"
    image:       z.string().optional(),
    order:       z.number().default(0),
    subcategories: z.array(z.object({
      label: z.string(),
      href:  z.string(),
    })).optional(),
  }),
})

// Colección de servicios
const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string(),
    id:          z.string(),
    description: z.string(),
    icon:        z.string().optional(),
    norma:       z.string().optional(),
    order:       z.number().default(0),
  }),
})

export const collections = { blog, productos, servicios }
