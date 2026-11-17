import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file, glob } from 'astro/loaders';
import { TAGS, VISUALS } from './lib/taxonomy';

const profileSchema = z.object({
  name: z.string(),
  role: z.string(),
  location: z.string(),
  email: z.email(),
  linkedin: z.url(),
  github: z.url(),
  heroTagline: z.string(),
  heroSecondary: z.string(),
});

const highlightSchema = z.object({
  value: z.string().optional(),
  label: z.string(),
  order: z.number(),
});

const experienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  period: z.string(),
  summary: z.string(),
  promotion: z.boolean().default(false),
  award: z.object({ title: z.string(), description: z.string() }).optional(),
  order: z.number(),
});

const howIWorkSchema = z.object({
  paragraphs: z.array(z.string()).min(1),
  note: z.string(),
});

const stackSchema = z.object({
  category: z.enum(['bi', 'data', 'ml', 'automation', 'ai']),
  label: z.string(),
  tools: z.array(z.string()),
  order: z.number(),
});

const projectText = z.object({
  title: z.string(),
  summary: z.string(),
  sector: z.string(),
  question: z.string().optional(),
  result: z.string().optional(),
  problem: z.string().optional(),
  decision: z.string().optional(),
  did: z.array(z.string()).optional(),
  changed: z.string().optional(),
  metricLabel: z.string().optional(),
  // Key figures shown as a row of tiles on the case page; values must come from the project's own sources.
  stats: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .max(4)
    .optional(),
  caseStudy: z
    .object({ problem: z.string(), approach: z.string(), result: z.string(), learnings: z.string() })
    .optional(),
});

const both = (
  p: { es: z.infer<typeof projectText>; en: z.infer<typeof projectText> },
  f: (t: z.infer<typeof projectText>) => unknown,
) => Boolean(f(p.es)) && Boolean(f(p.en));

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
  .refine((p) => p.kind !== 'personal' || both(p, (t) => t.question && t.result), {
    message: 'personal projects need `question` and `result` in es and en',
  })
  .refine((p) => p.kind !== 'profesional' || both(p, (t) => t.problem && t.changed), {
    message: 'work cases need `problem` and `changed` in es and en',
  })
  .refine((p) => !p.metric || both(p, (t) => t.metricLabel), {
    message: '`metric` needs `metricLabel` in es and en',
  })
  .refine((p) => Boolean(p.es.caseStudy) === Boolean(p.en.caseStudy), {
    message: '`caseStudy` must exist in both languages or in neither',
  });

const fromFile = <T extends z.ZodType>(path: string, schema: T) =>
  defineCollection({ loader: file(`src/content/${path}`), schema });

export const collections = {
  profile: fromFile('profile/profile.json', profileSchema),
  profileEn: fromFile('profile/profile.en.json', profileSchema),
  highlights: fromFile('highlights/highlights.json', highlightSchema),
  highlightsEn: fromFile('highlights/highlights.en.json', highlightSchema),
  experience: fromFile('experience/experience.json', experienceSchema),
  experienceEn: fromFile('experience/experience.en.json', experienceSchema),
  howIWork: fromFile('how-i-work/how-i-work.json', howIWorkSchema),
  howIWorkEn: fromFile('how-i-work/how-i-work.en.json', howIWorkSchema),
  stack: fromFile('stack/stack.json', stackSchema),
  stackEn: fromFile('stack/stack.en.json', stackSchema),
  projects: defineCollection({
    loader: glob({ pattern: '[!_]*.json', base: 'src/content/projects' }),
    schema: projectSchema,
  }),
};
