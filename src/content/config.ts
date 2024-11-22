import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      subtitle: z.string(),
      status: z.string().optional(),
      images: z.array(image()),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string(),
          })
        )
        .default([]),
      specifications: z
        .object({
          formFactor: z.string(),
          layouts: z.array(z.string()).optional(),
          mountingStyles: z.array(z.string()).optional(),
          frontHeight: z.number().optional(),
          typingAngle: z.number().optional(),
          weight: z.number().optional(),
        })
        .optional(),
      resources: z
        .object({
          downloads: z.array(
            z.object({
              label: z.string(),
              url: z.string(),
            })
          ),
          hardware: z.array(z.string()).optional(),
        })
        .optional(),
      vendors: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
          })
        )
        .default([]),
    }),
});

export const collections = { projects };
