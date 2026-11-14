import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';
import { TAGS, VISUALS } from './lib/taxonomy';

const profileSchema = z.object({
  name: z.string(),
  role: z.string(),
  company: z.string(),
  location: z.string(),
  languages: z.array(z.string()),
  certification: z.string(),
  email: z.email(),
  linkedin: z.url(),
  github: z.url(),
  heroTagline: z.string(),
  bio: z.array(z.string()),
  currentFocus: z.string(),
});

const impactSchema = z.object({
  value: z.string(),
  label: z.string(),
  order: z.number(),
  compare: z
    .object({ before: z.number(), after: z.number(), beforeLabel: z.string(), afterLabel: z.string() })
    .optional(),
});

const experienceSchema = z.object({
  title: z.string(),
  period: z.string(),
  bullets: z.array(z.string()),
  award: z.boolean().optional(),
  order: z.number(),
});

const recognitionSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

const learningSchema = z.object({
  title: z.string(),
  text: z.string(),
  principles: z.array(z.object({ title: z.string(), description: z.string() })),
});

const stackSchema = z.object({
  category: z.enum(['data-bi', 'programming-db', 'ml', 'automation-ai']),
  label: z.string(),
  tools: z.array(z.string()),
  order: z.number(),
});

const projectText = z.object({
  title: z.string(),
  question: z.string(),
  result: z.string(),
  summary: z.string(),
  metricLabel: z.string().optional(),
  process: z.object({ before: z.string(), after: z.string() }).optional(),
  caseStudy: z
    .object({ problem: z.string(), approach: z.string(), result: z.string(), learnings: z.string() })
    .optional(),
});

const projectSchema = z
  .object({
    kind: z.enum(['personal', 'profesional']),
    tags: z.array(z.enum(TAGS)).min(1),
    stack: z.array(z.string()),
    links: z.object({ repo: z.url().optional(), demo: z.url().optional() }).default({}),
    metric: z.string().optional(),
    visual: z.enum(VISUALS).optional(),
    featured: z.boolean().default(false),
    order: z.number(),
    draft: z.boolean().default(false),
    es: projectText,
    en: projectText,
  })
  .refine((p) => !p.metric || (p.es.metricLabel && p.en.metricLabel), {
    message: '`metric` needs `metricLabel` in both es and en',
  })
  .refine((p) => Boolean(p.es.caseStudy) === Boolean(p.en.caseStudy), {
    message: '`caseStudy` must exist in both languages or in neither',
  });

const fromFile = <T extends z.ZodType>(path: string, schema: T) =>
  defineCollection({ loader: file(`src/content/${path}`), schema });

export const collections = {
  profile: fromFile('profile/profile.json', profileSchema),
  profileEn: fromFile('profile/profile.en.json', profileSchema),
  impact: fromFile('impact/impact.json', impactSchema),
  impactEn: fromFile('impact/impact.en.json', impactSchema),
  experience: fromFile('experience/experience.json', experienceSchema),
  experienceEn: fromFile('experience/experience.en.json', experienceSchema),
  recognitions: fromFile('recognitions/recognitions.json', recognitionSchema),
  recognitionsEn: fromFile('recognitions/recognitions.en.json', recognitionSchema),
  learning: fromFile('learning/learning.json', learningSchema),
  learningEn: fromFile('learning/learning.en.json', learningSchema),
  stack: fromFile('stack/stack.json', stackSchema),
  stackEn: fromFile('stack/stack.en.json', stackSchema),
  projects: defineCollection({
    loader: glob({ pattern: '[!_]*.json', base: 'src/content/projects' }),
    schema: projectSchema,
  }),
};
