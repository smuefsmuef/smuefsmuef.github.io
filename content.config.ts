import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        image: z.string(),
        description: z.string(),
        tools: z.string(),
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
