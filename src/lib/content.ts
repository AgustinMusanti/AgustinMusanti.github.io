import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Language } from '../i18n/utils';

export async function getProfile(lang: Language) {
  const entry = await getEntry(lang === 'en' ? 'profileEn' : 'profile', 'main');
  if (!entry) throw new Error('Missing profile content');
  return entry.data;
}

export async function getHowIWork(lang: Language) {
  const entry = await getEntry(lang === 'en' ? 'howIWorkEn' : 'howIWork', 'main');
  if (!entry) throw new Error('Missing how-i-work content');
  return entry.data;
}

const byOrder = <T extends { data: { order: number } }>(items: T[]) =>
  items.sort((a, b) => a.data.order - b.data.order);

export async function getHighlights(lang: Language) {
  return byOrder(await getCollection(lang === 'en' ? 'highlightsEn' : 'highlights'));
}

export async function getExperience(lang: Language) {
  return byOrder(await getCollection(lang === 'en' ? 'experienceEn' : 'experience'));
}

export async function getStack(lang: Language) {
  return byOrder(await getCollection(lang === 'en' ? 'stackEn' : 'stack'));
}

export type Project = CollectionEntry<'projects'>['data'] & {
  slug: string;
  text: CollectionEntry<'projects'>['data']['es'];
};

export async function getProjects(lang: Language): Promise<Project[]> {
  const entries = await getCollection('projects', (p) => !p.data.draft);
  return byOrder(entries).map((p) => ({ ...p.data, slug: p.id, text: p.data[lang] }));
}
