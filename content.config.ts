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
    certifications: defineCollection({
      type: 'data',
      source: 'certifications/*.md',
      schema: z.object({
        title: z.string(),
        issuer: z.string(),
        date: z.string(),
        link: z.string().url().optional(),
      }),
    }),
    publications: defineCollection({
      type: 'data',
      source: 'publications/*.md',
      schema: z.object({
        title: z.string(),
        venue: z.string(),
        date: z.string(),
        type: z.enum(['publication', 'blogpost']).default('publication'),
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
