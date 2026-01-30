import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Creodrop'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const docsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    section: z.enum(['getting-started', 'dashboard', 'sites', 'settings']),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
  docs: docsCollection,
};
