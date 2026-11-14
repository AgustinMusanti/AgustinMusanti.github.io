import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const profile = defineCollection({
  loader: file('src/content/profile/profile.json'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string(),
    languages: z.array(z.string()),
    email: z.string().email(),
    linkedin: z.string().url(),
    github: z.string().url(),
    heroTagline: z.string(),
    bio: z.array(z.string()),
    currentFocus: z.string(),
  }),
});

const impact = defineCollection({
  loader: file('src/content/impact/impact.json'),
  schema: z.object({
    value: z.string(),
    label: z.string(),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: file('src/content/experience/experience.json'),
  schema: z.object({
    title: z.string(),
    period: z.string(),
    bullets: z.array(z.string()),
    award: z.boolean().optional(),
    order: z.number(),
  }),
});

const projectsProfessional = defineCollection({
  loader: file('src/content/projects/professional.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
  }),
});

const projectsPersonal = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/projects/personal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    order: z.number(),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    stack: z.array(z.string()),
    caseStudy: z
      .object({
        problem: z.string(),
        approach: z.string(),
        result: z.string(),
        learnings: z.string(),
      })
      .optional(),
  }),
});

const recognitions = defineCollection({
  loader: file('src/content/recognitions/recognitions.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const learning = defineCollection({
  loader: file('src/content/learning/learning.json'),
  schema: z.object({
    title: z.string(),
    text: z.string(),
    principles: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
    buildingNow: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
      }),
    ),
  }),
});

const stack = defineCollection({
  loader: file('src/content/stack/stack.json'),
  schema: z.object({
    category: z.enum(['data-bi', 'programming-db', 'ml', 'automation-ai']),
    label: z.string(),
    tools: z.array(z.string()),
    order: z.number(),
  }),
});

const siteConfig = defineCollection({
  loader: file('src/content/config/site.json'),
  schema: z.object({
    cvEnabled: z.boolean(),
    analyticsGoatcounter: z.string().nullable(),
    photo: z.string(),
  }),
});

export const collections = {
  profile,
  impact,
  experience,
  projectsProfessional,
  projectsPersonal,
  recognitions,
  learning,
  stack,
  siteConfig,
};
