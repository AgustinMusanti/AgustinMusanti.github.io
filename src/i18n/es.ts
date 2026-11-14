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
  pipeline: {
    title: string;
    description: string;
    sources: string;
    sourcesDetail: string;
    processing: string;
    processingDetail: string;
    storage: string;
    viz: string;
    vizDetail: string;
    decision: string;
    automation: string;
    automationDetail: string;
  };
  about: {
    role: string;
    focus: string;
    location: string;
    languages: string;
  };
  projects: {
    personalGroup: string;
    professionalGroup: string;
    personalType: string;
    professionalType: string;
    viewCase: string;
    repo: string;
    demo: string;
    allTags: string;
  };
  learning: {
    buildingNow: string;
  };
  stack: {
    allCategories: string;
  };
  contact: {
    question: string;
    copyEmail: string;
    copied: string;
    copyFailed: string;
  };
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
    learnings: string;
    stack: string;
    links: string;
    back: string;
  };
  footer: {
    madeWith: string;
    repoLink: string;
  };
  commandPalette: {
    placeholder: string;
    hint: string;
    noResults: string;
    copyEmail: string;
    toggleTheme: string;
    toggleLang: string;
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
  pipeline: {
    title: 'Pipeline de datos',
    description:
      'Diagrama de flujo: Fuentes de datos (Excel, SQL, APIs) alimentan el Procesamiento (Python, Power Query), que pasa a un Modelo o Almacenamiento, luego a Visualización (Power BI) y termina en una Decisión. Desde el Procesamiento sale una rama hacia Automatización (Power Automate e IA).',
    sources: 'Fuentes',
    sourcesDetail: 'Excel · SQL · APIs',
    processing: 'Procesamiento',
    processingDetail: 'Python · Power Query',
    storage: 'Modelo / Almacenamiento',
    viz: 'Visualización',
    vizDetail: 'Power BI',
    decision: 'Decisión',
    automation: 'Automatización',
    automationDetail: 'Power Automate · IA',
  },
  about: {
    role: 'Rol',
    focus: 'Foco',
    location: 'Ubicación',
    languages: 'Idiomas',
  },
  projects: {
    personalGroup: 'Personales',
    professionalGroup: 'Profesionales (PwC, anonimizados)',
    personalType: 'Proyecto personal',
    professionalType: 'Proyecto profesional',
    viewCase: 'Ver caso',
    repo: 'Repo',
    demo: 'Demo',
    allTags: 'Todos',
  },
  learning: {
    buildingNow: 'Ahora estoy construyendo',
  },
  stack: {
    allCategories: 'Todas',
  },
  contact: {
    question: '¿Charlamos sobre datos, automatización o IA aplicada?',
    copyEmail: 'Copiar email',
    copied: '¡Copiado!',
    copyFailed: 'No se pudo copiar el email',
  },
  caseStudy: {
    problem: 'Problema',
    approach: 'Enfoque',
    result: 'Resultado',
    learnings: 'Qué aprendí',
    stack: 'Stack',
    links: 'Links',
    back: 'Volver a proyectos',
  },
  footer: {
    madeWith: 'Hecho con Astro, deployado con GitHub Actions ·',
    repoLink: 'repo del sitio',
  },
  commandPalette: {
    placeholder: 'Buscar secciones, proyectos, acciones…',
    hint: 'Ctrl/⌘ + K',
    noResults: 'Sin resultados',
    copyEmail: 'Copiar email',
    toggleTheme: 'Cambiar tema',
    toggleLang: 'Cambiar idioma',
  },
};
