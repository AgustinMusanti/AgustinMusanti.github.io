import { getCollection, getEntry } from 'astro:content';
import type { Language } from '../i18n/utils';

export async function getProfile(lang: Language) {
  const entry = await getEntry(lang === 'en' ? 'profileEn' : 'profile', 'main');
  if (!entry) throw new Error('Missing profile content');
  return entry.data;
}

export async function getSiteConfig() {
  const entry = await getEntry('siteConfig', 'main');
  if (!entry) throw new Error('Missing site config');
  return entry.data;
}

export async function getLearning(lang: Language) {
  const entry = await getEntry(lang === 'en' ? 'learningEn' : 'learning', 'main');
  if (!entry) throw new Error('Missing learning content');
  return entry.data;
}

export async function getImpact(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'impactEn' : 'impact');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getExperience(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'experienceEn' : 'experience');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getRecognitions(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'recognitionsEn' : 'recognitions');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getStack(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'stackEn' : 'stack');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectsProfessional(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'projectsProfessionalEn' : 'projectsProfessional');
  return items.sort((a, b) => a.data.order - b.data.order);
}

export async function getProjectsPersonal(lang: Language) {
  const items = await getCollection(lang === 'en' ? 'projectsPersonalEn' : 'projectsPersonal');
  return items.sort((a, b) => a.data.order - b.data.order);
}
