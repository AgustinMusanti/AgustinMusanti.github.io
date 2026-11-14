export interface Dictionary {
  lang: 'es' | 'en';
  nav: {
    about: string;
    projects: string;
    experience: string;
    recognitions: string;
    learning: string;
    stack: string;
    contact: string;
    skipToContent: string;
    openMenu: string;
    closeMenu: string;
    openInNewTab: string;
  };
  theme: {
    toggleToLight: string;
    toggleToDark: string;
  };
  lang_toggle: {
    label: string;
  };
  hero: {
    viewProjects: string;
    downloadCv: string;
  };
  commandPalette: {
    placeholder: string;
    hint: string;
    noResults: string;
  };
}

export const es: Dictionary = {
  lang: 'es',
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    recognitions: 'Reconocimientos',
    learning: 'Cómo aprendo',
    stack: 'Stack',
    contact: 'Contacto',
    skipToContent: 'Ir al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    openInNewTab: '(se abre en una pestaña nueva)',
  },
  theme: {
    toggleToLight: 'Cambiar a tema claro',
    toggleToDark: 'Cambiar a tema oscuro',
  },
  lang_toggle: {
    label: 'Cambiar idioma',
  },
  hero: {
    viewProjects: 'Ver proyectos',
    downloadCv: 'Descargar CV',
  },
  commandPalette: {
    placeholder: 'Buscar secciones, proyectos, acciones…',
    hint: 'Ctrl/⌘ + K',
    noResults: 'Sin resultados',
  },
};
