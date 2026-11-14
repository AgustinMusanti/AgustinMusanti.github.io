import type { Dictionary } from './es';

export const en: Dictionary = {
  lang: 'en',
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    recognitions: 'Recognitions',
    learning: 'How I learn',
    stack: 'Stack',
    contact: 'Contact',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    openInNewTab: '(opens in a new tab)',
  },
  theme: {
    toggleToLight: 'Switch to light theme',
    toggleToDark: 'Switch to dark theme',
  },
  lang_toggle: {
    label: 'Switch language',
  },
  hero: {
    viewProjects: 'View projects',
    downloadCv: 'Download CV',
  },
  pipeline: {
    title: 'Data pipeline',
    description:
      'Flow diagram: data Sources (Excel, SQL, APIs) feed Processing (Python, Power Query), which moves to a Model or Storage, then to Visualization (Power BI) and ends in a Decision. A branch comes off Processing toward Automation (Power Automate and AI).',
    sources: 'Sources',
    sourcesDetail: 'Excel · SQL · APIs',
    processing: 'Processing',
    processingDetail: 'Python · Power Query',
    storage: 'Model / Storage',
    viz: 'Visualization',
    vizDetail: 'Power BI',
    decision: 'Decision',
    automation: 'Automation',
    automationDetail: 'Power Automate · AI',
  },
  about: {
    role: 'Role',
    focus: 'Focus',
    location: 'Location',
    languages: 'Languages',
  },
  projects: {
    personalGroup: 'Personal',
    professionalGroup: 'Professional (PwC, anonymized)',
    personalType: 'Personal project',
    professionalType: 'Professional project',
    viewCase: 'View case',
    repo: 'Repo',
    demo: 'Demo',
    allTags: 'All',
  },
  learning: {
    buildingNow: 'Building now',
  },
  stack: {
    allCategories: 'All',
  },
  contact: {
    question: 'Want to talk about data, automation, or applied AI?',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    copyFailed: "Couldn't copy the email",
  },
  caseStudy: {
    problem: 'Problem',
    approach: 'Approach',
    result: 'Result',
    learnings: 'What I learned',
    stack: 'Stack',
    links: 'Links',
    back: 'Back to projects',
  },
  footer: {
    madeWith: 'Built with Astro, deployed with GitHub Actions ·',
    repoLink: "site's repo",
  },
  commandPalette: {
    placeholder: 'Search sections, projects, actions…',
    hint: 'Ctrl/⌘ + K',
    noResults: 'No results',
    copyEmail: 'Copy email',
    toggleTheme: 'Toggle theme',
    toggleLang: 'Switch language',
  },
};
