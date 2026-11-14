# agustinmusanti.github.io

Portfolio de Agustín Musanti, Data & Reporting Analyst: BI, data science y automatización de procesos. Sitio estático bilingüe (ES/EN) con resultados reales de proyectos, publicado en https://agustinmusanti.github.io.

## Correrlo

Requiere Node 22+.

```bash
npm install
npm run dev
```

| Comando            | Qué hace                                                      |
| ------------------ | ------------------------------------------------------------- |
| `npm run dev`      | Servidor de desarrollo en `localhost:4321`                    |
| `npm run build`    | Build estático a `dist/` (incluye las imágenes para redes)    |
| `npm run preview`  | Sirve `dist/`                                                 |
| `npm run check`    | Tipos y validación del contenido contra sus esquemas          |
| `npm run lint`     | ESLint                                                        |
| `npm run format`   | Prettier                                                      |
| `npm run test:e2e` | Smoke test (navegación, filtros, tema, versión EN) y axe-core |

## Cómo agregar, editar o quitar un proyecto

Cada proyecto es **un solo archivo** en `src/content/projects/<slug>.json`, con los textos en español y en inglés dentro del mismo archivo. El nombre del archivo es la URL de la página de caso (`/proyectos/<slug>/` y `/en/projects/<slug>/`).

- **Agregar:** copiá `src/content/projects/_template.json` (no se publica porque empieza con `_`), renombralo y completalo.
- **Ocultar sin borrar:** `"draft": true`.
- **Quitar:** borrá el archivo.

Los filtros, sus contadores, la página de caso, el sitemap y la imagen para redes se generan solos. Si falta un campo o un idioma, `npm run build` falla y dice qué corregir.

```json
{
  "kind": "personal",
  "tags": ["bi", "finanzas"],
  "stack": ["Power BI", "SQL"],
  "links": { "repo": "https://github.com/AgustinMusanti/mi-repo", "demo": "https://..." },
  "metric": "+15%",
  "featured": false,
  "order": 5,
  "draft": false,
  "es": {
    "title": "Título",
    "question": "¿Qué pregunta responde?",
    "result": "Qué resultado dio, con números reales.",
    "summary": "Contexto en una o dos líneas.",
    "metricLabel": "qué mide la cifra de metric"
  },
  "en": {
    "title": "Title",
    "question": "What question does it answer?",
    "result": "What result it produced.",
    "summary": "One or two lines of context.",
    "metricLabel": "what the metric figure measures"
  }
}
```

| Campo                             |                                                                                      |
| --------------------------------- | ------------------------------------------------------------------------------------ |
| `kind`                            | `personal` o `profesional` (los profesionales van anonimizados y sin links)          |
| `tags`                            | `bi`, `data-science`, `automatizacion`, `sql`, `finanzas`, `agro`, `ia`              |
| `metric` + `metricLabel`          | Cifra grande de la tarjeta (opcional; si está, va el label en los dos idiomas)       |
| `visual`                          | Gráfico de la tarjeta (opcional): `soja`, `inflation-seasonality` o `dashboard`      |
| `process` (dentro de `es`/`en`)   | Esquema antes → después: `{ "before": "...", "after": "..." }` (opcional)            |
| `caseStudy` (dentro de `es`/`en`) | `problem`, `approach`, `result`, `learnings`. Si existe, se genera la página de caso |
| `featured`, `order`               | Tarjeta ancha y orden de aparición                                                   |

Un `visual` nuevo con datos propios se agrega como componente en `src/components/charts/`, con sus datos en `src/data/` (indicando de dónde salen) y su nombre en `src/lib/taxonomy.ts`.

## Resto del contenido

Todo el texto vive en `src/content/` (cada archivo tiene su espejo `*.en.json`): perfil y certificación, KPIs del hero, experiencia, reconocimientos, "Cómo aprendo" y herramientas. Los textos de interfaz están en `src/i18n/es.ts` y `src/i18n/en.ts`.

Los datos de los gráficos están en `src/data/`, con su fuente y fecha en el campo `_source`:

- `soja.json`: copia de `dashboard/data.json` del repo [prediccion-rinde-soja](https://github.com/AgustinMusanti/prediccion-rinde-soja). Al actualizar el modelo, actualizar este archivo.
- `inflacion.json`: resultados del notebook de [InflacionArgentina2017-2024](https://github.com/AgustinMusanti/InflacionArgentina2017-2024).

## Estructura

```
src/
├── content/          # contenido validado con Zod (un archivo por proyecto en projects/)
├── content.config.ts # esquemas
├── data/             # datos reales para los gráficos
├── components/
│   ├── charts/       # gráficos SVG propios (sin librerías) con tooltip y tabla accesible
│   ├── hero/         # panel de resultados
│   ├── nav/          # navegación, tema e idioma
│   ├── sections/     # secciones de la home
│   └── ui/
├── layouts/          # BaseLayout (SEO), HomePage, CaseStudyLayout
├── pages/            # / · /en/ · páginas de caso · imágenes para redes (og/)
├── i18n/             # textos de interfaz ES/EN
├── lib/              # lectura de contenido, escalas de gráficos, imagen OG
└── styles/
tests/                # smoke test y accesibilidad (Playwright + axe-core)
```

## Publicación

- `.github/workflows/ci.yml`, en cada pull request: tipos y contenido, lint, formato, build, smoke test con axe-core y links rotos (lychee).
- `.github/workflows/deploy.yml`, en cada push a `main`: corre el CI y, si pasa, publica en GitHub Pages.
