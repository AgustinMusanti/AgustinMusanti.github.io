import type { Tag } from '../lib/taxonomy';

export interface Dictionary {
  lang: 'es' | 'en';
  locale: string;
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
    main: string;
  };
  theme: { toggleToLight: string; toggleToDark: string };
  langToggle: { label: string };
  hero: {
    viewProjects: string;
    panelTitle: string;
    panelSource: string;
    kpisTitle: string;
    workflowTitle: string;
    workflow: string[];
  };
  soja: {
    chartTitle: string;
    chartSubtitle: string;
    observed: string;
    estimate: string;
    interval: string;
    current: string;
    yAxis: string;
    xAxis: string;
    tableCaption: string;
    season: string;
    maeTitle: string;
    maeSubtitle: string;
    maeBaseline: string;
    monthsBefore: string;
    windows: Record<string, string>;
    importanceTitle: string;
    importanceSubtitle: string;
    importance: Record<string, string>;
    approx: string;
  };
  inflation: { chartTitle: string; months: string[]; tableCaption: string; month: string; value: string };
  about: { role: string; focus: string; location: string; languages: string; certification: string };
  projects: {
    filterLabel: string;
    allTags: string;
    personalGroup: string;
    professionalGroup: string;
    question: string;
    result: string;
    tools: string;
    viewCase: string;
    repo: string;
    demo: string;
    before: string;
    after: string;
    moreSoon: string;
    tags: Record<Tag, string>;
  };
  stack: { filterLabel: string; allCategories: string };
  contact: { question: string; copyEmail: string; copied: string; copyFailed: string };
  caseStudy: {
    problem: string;
    approach: string;
    result: string;
    learnings: string;
    stack: string;
    links: string;
    back: string;
    charts: string;
  };
}

export const es: Dictionary = {
  lang: 'es',
  locale: 'es-AR',
  nav: {
    about: 'Sobre mí',
    projects: 'Proyectos',
    experience: 'Experiencia',
    recognitions: 'Reconocimientos',
    learning: 'Cómo aprendo',
    stack: 'Herramientas',
    contact: 'Contacto',
    skipToContent: 'Ir al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    openInNewTab: '(se abre en una pestaña nueva)',
    main: 'Principal',
  },
  theme: { toggleToLight: 'Cambiar a tema claro', toggleToDark: 'Cambiar a tema oscuro' },
  langToggle: { label: 'Cambiar idioma' },
  hero: {
    viewProjects: 'Ver proyectos',
    panelTitle: 'Resultados',
    panelSource: 'Fuente: modelo propio sobre datos MAGyP, NASA POWER y MODIS. Validación walk-forward.',
    kpisTitle: 'Impacto en el trabajo',
    workflowTitle: 'Cómo trabajo',
    workflow: ['Entender el proceso', 'Limpiar y modelar datos', 'Automatizar', 'Visualizar', 'Recomendar una acción'],
  },
  soja: {
    chartTitle: 'Cinco meses antes de la cosecha, el modelo ya anticipaba la sequía de 2022/23',
    chartSubtitle: 'Rinde de soja, promedio de 5 partidos del noroeste bonaerense (qq/ha)',
    observed: 'Rinde observado',
    estimate: 'Estimado a fin de noviembre',
    interval: 'Intervalo del 80%',
    current: 'campaña sin dato oficial todavía',
    yAxis: 'qq/ha',
    xAxis: 'Campaña',
    tableCaption: 'Rinde observado y estimado a fin de noviembre por campaña',
    season: 'Campaña',
    maeTitle: 'Con datos a fin de noviembre el error ya es el más bajo',
    maeSubtitle: 'Error medio absoluto por ventana de anticipación (qq/ha), 45 estimaciones fuera de muestra',
    maeBaseline: 'Promedio histórico',
    monthsBefore: 'meses antes',
    windows: {
      oct_nov: 'Fin de nov.',
      oct_dic: 'Fin de dic.',
      oct_ene: 'Fin de ene.',
      oct_feb: 'Fin de feb.',
      oct_mar: 'Fin de mar.',
    },
    importanceTitle: 'Lo que más pesa en el modelo es la demanda de agua del ambiente',
    importanceSubtitle: 'Variables más importantes del modelo con datos a fin de enero (importancia de Random Forest)',
    importance: {
      humidity: 'Humedad relativa media (oct–ene)',
      vpd: 'Déficit de presión de vapor (VPD) medio',
      ndviAnomalyNov: 'Anomalía de NDVI a fin de noviembre',
    },
    approx: 'aprox.',
  },
  inflation: {
    chartTitle: 'Inflación mensual promedio por mes, 2017–2024 (%)',
    months: ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    tableCaption: 'Inflación mensual promedio por mes del año',
    month: 'Mes',
    value: 'Inflación promedio (%)',
  },
  about: {
    role: 'Rol',
    focus: 'Foco',
    location: 'Ubicación',
    languages: 'Idiomas',
    certification: 'Certificación',
  },
  projects: {
    filterLabel: 'Filtrar proyectos por disciplina',
    allTags: 'Todos',
    personalGroup: 'Proyectos propios',
    professionalGroup: 'En PwC (anonimizados)',
    question: 'Pregunta',
    result: 'Resultado',
    tools: 'Herramientas',
    viewCase: 'Ver el caso completo',
    repo: 'Código',
    demo: 'Ver tablero',
    before: 'Antes',
    after: 'Después',
    moreSoon: 'Voy a ir publicando acá mis próximos proyectos paralelos.',
    tags: {
      bi: 'BI',
      'data-science': 'Data Science',
      automatizacion: 'Automatización',
      sql: 'SQL',
      finanzas: 'Finanzas',
      agro: 'Agro',
      ia: 'IA aplicada',
    },
  },
  stack: { filterLabel: 'Filtrar herramientas por categoría', allCategories: 'Todas' },
  contact: {
    question: '¿Hablamos de datos, reporting o automatización de procesos?',
    copyEmail: 'Copiar email',
    copied: '¡Copiado!',
    copyFailed: 'No se pudo copiar el email',
  },
  caseStudy: {
    problem: 'Problema',
    approach: 'Enfoque',
    result: 'Resultado',
    learnings: 'Qué aprendí',
    stack: 'Herramientas',
    links: 'Links',
    back: 'Volver a proyectos',
    charts: 'Resultados en gráficos',
  },
};
