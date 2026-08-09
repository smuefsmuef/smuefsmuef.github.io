import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    experience: defineCollection({
      type: 'data',
      source: 'experience/*.md',
      schema: z.object({
        role: z.string(),
        organization: z.string(),
        categories: z.array(z.enum(['pm', 'dev', 'design'])).min(1),
        dateStart: z.string(),
        dateEnd: z.string().optional(),
        current: z.boolean().optional(),
        location: z.string().optional(),
        summary: z.string(),
        highlights: z.array(z.string()).optional(),
        link: z.string().url().optional(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
        tools: z.string(),
        category: z.enum(['dev', 'design', 'pm']),
        link: z.string().url().optional(),
      }),
    }),
    about: defineCollection({
      type: 'data',
      source: 'about/*.md',
      schema: z.object({
        icon: z.string(),
        title: z.string(),
        text: z.string(),
      }),
    }),
  },
})
