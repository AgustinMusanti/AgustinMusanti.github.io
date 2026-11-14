import { es } from './es';
import { en } from './en';

export type Language = 'es' | 'en';

const dictionaries = { es, en };

export function useTranslations(lang: Language) {
  return dictionaries[lang];
}

export function localizePath(path: string, lang: Language): string {
  return lang === 'es' ? path : `/en${path}`;
}

export function projectPath(slug: string, lang: Language): string {
  return lang === 'en' ? `/en/projects/${slug}/` : `/proyectos/${slug}/`;
}

export function toEsPath(path: string): string {
  const stripped = path.replace(/^\/en/, '') || '/';
  return stripped.replace(/^\/projects\//, '/proyectos/');
}

export function toEnPath(path: string): string {
  const stripped = path.replace(/^\/en/, '') || '/';
  const translated = stripped.replace(/^\/proyectos\//, '/projects/');
  return `/en${translated === '/' ? '/' : translated}`;
}

export function formatNumber(value: number, lang: Language, digits = 1): string {
  return value.toLocaleString(lang === 'en' ? 'en-US' : 'es-AR', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}
