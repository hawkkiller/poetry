import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const poems = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/poems" }),
  schema: ({ image }) => z.object({
    originalLanguage: z.enum(["en", "ru"]),
    translationKey: z.string().min(1),
    title: z.string().min(1),
    author: z.string().min(1),
    year: z.union([z.string(), z.number()]).transform(String).optional(),
    tags: z.array(z.string()).default([]),
    source: z.url().optional(),
    comment: z.string().optional(),
    image: image().optional(),
    imageAlt: z.string().optional(),
    favorite: z.boolean().default(false),
    order: z.number().int().nonnegative().default(999),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/authors" }),
  schema: ({ image }) => z.object({
    name: z.string().min(1),
    photo: image().optional(),
    photoAlt: z.string().optional(),
  }),
});

export const collections = { authors, poems };
