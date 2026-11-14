import type { Tag } from '../lib/taxonomy';

export interface Dictionary {
  lang: 'es' | 'en';
  nav: {
    projects: string;
    cases: string;
    howIWork: string;
    path: string;
    tools: string;
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
    before: string;
    after: string;
    beforeSteps: string[];
    afterSteps: string[];
    humanStep: number;
    processDescription: string;
    reducedNote: string;
    afterNote: string;
  };
  whatIDo: { title: string };
  soja: {
    chartTitle: string;
    chartSubtitle: string;
    observed: string;
    estimate: string;
    interval: string;
    current: string;
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
  inflation: { chartTitle: string; months: string[]; tableCaption: string };
  projects: {
    filterLabel: string;
    allTags: string;
    question: string;
    result: string;
    tools: string;
    viewCase: string;
    repo: string;
    demo: string;
    moreSoon: string;
    tags: Record<Tag, string>;
  };
  cases: {
    intro: string;
    problem: string;
    decision: string;
    did: string;
    changed: string;
    tools: string;
    flowSteps: string[];
    flowHumanStep: number;
    flowException: string;
    flowDescription: string;
  };
  path: { promotion: string; award: string };
  tools: { footnote: string };
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
  nav: {
    projects: 'Proyectos',
    cases: 'Casos de trabajo',
    howIWork: 'Cómo trabajo',
    path: 'Trayectoria',
    tools: 'Herramientas',
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
    before: 'Antes · 7 pasos manuales',
    after: 'Después · 4 pasos',
    beforeSteps: [
      'Recibir solicitud',
      'Entrar al sistema',
      'Consultar estados',
      'Cruzar datos',
      'Copiar a Excel',
      'Armar el mail',
      'Enviar',
    ],
    afterSteps: ['Formulario', 'Validación automática', 'Revisión humana', 'Confirmación enviada y registrada'],
    humanStep: 2,
    processDescription:
      'Un proceso que se simplifica. Antes: siete pasos manuales (recibir la solicitud, entrar al sistema, consultar estados, cruzar datos, copiar a Excel, armar el mail y enviarlo). Después: cuatro pasos (formulario, validación automática, revisión humana y confirmación enviada y registrada).',
    reducedNote:
      'Antes eran 7 pasos manuales: recibir, entrar al sistema, consultar, cruzar, copiar, armar el mail y enviar.',
    afterNote: 'La automatización reúne, verifica y presenta. La decisión la toma una persona.',
  },
  whatIDo: { title: 'Lo que hago' },
  soja: {
    chartTitle: 'Cinco meses antes de la cosecha, el modelo ya anticipaba la sequía de 2022/23',
    chartSubtitle: 'Rinde de soja, promedio de 5 partidos del noroeste bonaerense (qq/ha)',
    observed: 'Rinde observado',
    estimate: 'Estimado a fin de noviembre',
    interval: 'Intervalo del 80%',
    current: 'campaña sin dato oficial todavía',
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
  },
  projects: {
    filterLabel: 'Filtrar proyectos por disciplina',
    allTags: 'Todos',
    question: 'Pregunta',
    result: 'Resultado',
    tools: 'Herramientas',
    viewCase: 'Ver el caso completo',
    repo: 'Código',
    demo: 'Ver en vivo',
    moreSoon: 'Voy a ir publicando acá mis próximos proyectos paralelos.',
    tags: {
      bi: 'BI',
      'data-science': 'Data Science',
      automatizacion: 'Automatización',
      sql: 'SQL',
      ia: 'IA y agentes',
    },
  },
  cases: {
    intro: 'Casos de mi trabajo en una firma de servicios profesionales, contados sin datos confidenciales.',
    problem: 'Problema',
    decision: 'Decisión de diseño',
    did: 'Qué hice',
    changed: 'Qué cambió',
    tools: 'Herramientas',
    flowSteps: [
      'Recepción automática',
      'Cruce y verificación',
      'Revisión humana en Teams',
      'Excel y mail automáticos',
      'Registro y seguimiento',
    ],
    flowHumanStep: 2,
    flowException: 'Excepción: el equipo completa lo que falta en el mismo circuito',
    flowDescription:
      'Flujo automatizado: recepción de la solicitud, cruce y verificación contra una base de referencia, revisión y aprobación humana en Teams, generación del Excel y envío del mail, y registro. Si falta información, el equipo la completa dentro del mismo circuito y vuelve a la revisión.',
  },
  path: { promotion: 'Promoción', award: 'Premio' },
  tools: { footnote: 'Es lo que uso hoy. La lista cambia: aprendo la herramienta que el problema pide.' },
  contact: {
    question: '¿Tenés un proceso que podría funcionar mejor?',
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
