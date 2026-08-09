import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const poems = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/poems" }),
  schema: z.object({
    title: z.string().min(1),
    author: z.string().min(1),
    year: z.union([z.string(), z.number()]).transform(String).optional(),
    tags: z.array(z.string()).default([]),
    source: z.url().optional(),
    comment: z.string().optional(),
    favorite: z.boolean().default(false),
    order: z.number().int().nonnegative().default(999),
  }),
});

export const collections = { poems };
