import { es } from './es';
import { en } from './en';

export const languages = ['es', 'en'] as const;
export type Language = (typeof languages)[number];
export const defaultLang: Language = 'es';

const dictionaries = { es, en };

export function getLangFromUrl(url: URL): Language {
  const [, first] = url.pathname.split('/');
  if (first === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return dictionaries[lang];
}

export function localizePath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function toEsPath(path: string): string {
  const stripped = path.replace(/^\/en/, '') || '/';
  return stripped.replace(/^\/projects\//, '/proyectos/');
}

export function toEnPath(path: string): string {
  const stripped = path.replace(/^\/en/, '') || '/';
  const translated = stripped.replace(/^\/proyectos\//, '/projects/');
  return `/en${translated === '/' ? '' : translated}`;
}
