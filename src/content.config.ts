import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const profileSchema = z.object({
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
});

const impactSchema = z.object({
  value: z.string(),
  label: z.string(),
  order: z.number(),
});

const experienceSchema = z.object({
  title: z.string(),
  period: z.string(),
  bullets: z.array(z.string()),
  award: z.boolean().optional(),
  order: z.number(),
});

const projectProfessionalSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  order: z.number(),
});

const projectPersonalSchema = z.object({
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
});

const recognitionSchema = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
});

const learningSchema = z.object({
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
});

const stackSchema = z.object({
  category: z.enum(['data-bi', 'programming-db', 'ml', 'automation-ai']),
  label: z.string(),
  tools: z.array(z.string()),
  order: z.number(),
});

const profile = defineCollection({
  loader: file('src/content/profile/profile.json'),
  schema: profileSchema,
});

const profileEn = defineCollection({
  loader: file('src/content/profile/profile.en.json'),
  schema: profileSchema,
});

const impact = defineCollection({
  loader: file('src/content/impact/impact.json'),
  schema: impactSchema,
});

const impactEn = defineCollection({
  loader: file('src/content/impact/impact.en.json'),
  schema: impactSchema,
});

const experience = defineCollection({
  loader: file('src/content/experience/experience.json'),
  schema: experienceSchema,
});

const experienceEn = defineCollection({
  loader: file('src/content/experience/experience.en.json'),
  schema: experienceSchema,
});

const projectsProfessional = defineCollection({
  loader: file('src/content/projects/professional.json'),
  schema: projectProfessionalSchema,
});

const projectsProfessionalEn = defineCollection({
  loader: file('src/content/projects/professional.en.json'),
  schema: projectProfessionalSchema,
});

const projectsPersonal = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/projects/personal' }),
  schema: projectPersonalSchema,
});

const projectsPersonalEn = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/projects/personal-en' }),
  schema: projectPersonalSchema,
});

const recognitions = defineCollection({
  loader: file('src/content/recognitions/recognitions.json'),
  schema: recognitionSchema,
});

const recognitionsEn = defineCollection({
  loader: file('src/content/recognitions/recognitions.en.json'),
  schema: recognitionSchema,
});

const learning = defineCollection({
  loader: file('src/content/learning/learning.json'),
  schema: learningSchema,
});

const learningEn = defineCollection({
  loader: file('src/content/learning/learning.en.json'),
  schema: learningSchema,
});

const stack = defineCollection({
  loader: file('src/content/stack/stack.json'),
  schema: stackSchema,
});

const stackEn = defineCollection({
  loader: file('src/content/stack/stack.en.json'),
  schema: stackSchema,
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
  profileEn,
  impact,
  impactEn,
  experience,
  experienceEn,
  projectsProfessional,
  projectsProfessionalEn,
  projectsPersonal,
  projectsPersonalEn,
  recognitions,
  recognitionsEn,
  learning,
  learningEn,
  stack,
  stackEn,
  siteConfig,
};
