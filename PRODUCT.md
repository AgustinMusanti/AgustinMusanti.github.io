# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Quien evalúa mi perfil:** reclutadores, líderes de equipo y colegas que quieren entender cómo trabaja Agustín antes de una conversación. Llegan con poco tiempo y necesitan, en pocos segundos, saber quién es y qué sabe hacer.
- **Quien tiene un proceso para mejorar:** una persona o equipo que busca quién analice datos, automatice o construya con IA, y llega con un problema concreto. El contacto del sitio les habla a ellos ("¿Tenés un proceso que podría funcionar mejor?").

El sitio no pide trabajo ni anuncia disponibilidad: muestra trabajo. Visitantes de habla hispana e inglesa (ES por defecto, EN en `/en/`).

## Product Purpose

Sitio personal de Agustín Musanti, Data & AI Analyst (Buenos Aires, Argentina). No es un catálogo ni un CV web: existe para que quien entra se lleve una idea clara de cómo trabaja (busca la mejor manera de hacer las cosas, saca pasos que sobran, automatiza lo repetitivo e informa con datos para decidir mejor), apoyada en proyectos y casos reales. Reemplaza a un sitio anterior en Carrd.

Éxito: el visitante entiende en pocos segundos quién es Agustín, ve evidencia concreta (proyectos con resultados, casos de trabajo) y puede contactarlo (copiar email, LinkedIn, GitHub).

## Positioning

Analista de datos que entiende el problema antes de elegir la herramienta: repiensa procesos, automatiza lo repetitivo y construye con agentes de IA, en cualquier sector, y aprende la herramienta que haga falta. Lo demuestra con casos reales y proyectos con resultados validados, no con adjetivos.

Los sectores de los proyectos (agro, finanzas, retail, macroeconomía) son ejemplos, no la identidad. En IA va más allá de chatear con un asistente: construye con agentes (Claude Code, Codex, Copilot Studio) y publica lo que hace (Vercel, GitHub Pages).

## Operating Context

- Sitio estático Astro en GitHub Pages (`https://agustinmusanti.github.io/`), bilingüe ES/EN, tema claro y oscuro.
- Todo el contenido vive en `src/content/` y se valida con esquemas Zod; un archivo por proyecto en `src/content/projects/<slug>.json` con ES y EN juntos, `draft` para ocultar y `_template.json` sin publicar.
- Los datos de los gráficos son copias de fuentes reales con nota de origen en `src/data/` (`soja.json` desde `dashboard/data.json` del repo `prediccion-rinde-soja`; `inflacion.json` desde el notebook de `InflacionArgentina2017-2024`).
- Publicación por GitHub Actions: tipos y contenido, lint, build, smoke test con axe-core y chequeo de links; el deploy corre solo si todo pasa. No se publica sin OK explícito de Agustín.

## Capabilities and Constraints

Estructura de la home: Hero · "Lo que hago" · Proyectos · Casos de trabajo · Cómo trabajo · Trayectoria · Herramientas · Contacto. Además, una página de caso por proyecto que tenga `caseStudy` (hoy: estimación de soja).

Restricciones de contenido permanentes (confirmadas por Agustín):

- Sin CV y sin foto.
- El empleador se nombra solo en Trayectoria y en el nombre de los premios "PwC Te Reconoce"; en el resto, "en mi trabajo" o "una firma de servicios profesionales".
- Casos de trabajo anonimizados (sin clientes ni métricas internas) y sin las cifras retiradas: +100 usuarios, 6 países, +25 h semanales, ~500 consultas, 20 p.p., ~25 cambios por semana, ~20 h mensuales. No inventar cifras; ante una cifra necesaria en un caso puntual, preguntar.
- Sin educación formal (universidades, carreras, cursos, instituciones) en ningún lugar, incluidos metadatos y JSON-LD. Los trabajos de certificaciones se mencionan solo como "trabajo final de una certificación", sin nombrar cuál ni dónde.
- Sin "disponibilidad", "open to work" ni lenguaje de búsqueda laboral. Sin proyectos en curso: solo la línea "Voy a ir publicando acá mis próximos proyectos paralelos."
- Soja es una "estimación", no una "predicción"; sin nombrar ninguna cooperativa.
- La palabra "reporting" no describe a Agustín; solo aparece en los nombres reales de sus puestos. No aparece "portfolio" en títulos, navegación ni metadatos. Ubicación: Buenos Aires, Argentina.
- ES y EN siempre sincronizados.
- Título profesional: Data & AI Analyst. Pestaña y redes: `Agustín Musanti · Data & AI Analyst`.

Sin decidir: lista de certificaciones (Agustín pidió no mostrarla), conteo/cifras de impacto adicionales, y el posible texto sobre cómo aplicó IA en la calculadora de LECAP.

## Brand Commitments

- Nombre: Agustín Musanti. Título: Data & AI Analyst.
- Voz: primera persona, concreta, español neutro que funciona en toda Latinoamérica. Se muestra con hechos, no con adjetivos: no se usan "proactivo", "apasionado", "curioso", "orientado a resultados", "data-driven", "insights accionables" ni similares.
- No esconde lo que no sabe: "No conozco todas las herramientas: cuando un problema pide una nueva, la aprendo usándola."
- Prefiere "un número honesto a uno lindo": valida antes de mostrar y documenta los errores que encuentra.

## Evidence on Hand

- Proyectos personales con resultado propio (`src/content/projects/`): estimación temprana del rinde de soja (error medio 2,42 qq/ha, R² 0,72, acierto de dirección 69%, anticipa hasta 5 meses antes de la cosecha; dashboard público en `estimacion-rinde-soja.vercel.app`), calculadora de LECAP y herramientas financieras (calculadora publicada), análisis de ventas AdventureWorks (Power BI), base de riesgo crediticio (MySQL), producción agropecuaria (Tableau público) y estacionalidad de la inflación.
- Casos de trabajo anonimizados, entre ellos la automatización de validación y emisión de confirmaciones con revisión humana (Power Automate).
- Trayectoria en tres puestos con dos promociones y dos premios "PwC Te Reconoce".
- Datos reales de soja e inflación en `src/data/`, con su origen y fecha.
- Ausencias que no se deben fabricar: testimonios, nombres de clientes, métricas de impacto de los casos de trabajo, lista de certificaciones, foto, CV.

## Product Principles

1. **Hechos, no adjetivos.** Cada afirmación sobre Agustín se apoya en un proyecto, un caso o un dato; si no hay evidencia, no se escribe.
2. **El problema antes que la herramienta.** El sitio presenta decisiones y procesos mejorados; las herramientas son medio, y la lista cambia.
3. **Honestidad sobre los números.** Solo cifras verificables y con origen; la incertidumbre y las limitaciones se muestran junto al resultado.
4. **Una persona decide.** Donde hay automatización o IA, el sitio deja claro qué hace la máquina y qué sigue siendo criterio humano.
5. **Un solo archivo por proyecto.** Agregar, ocultar o quitar un proyecto no debe requerir tocar componentes.

## Accessibility & Inclusion

WCAG AA como estándar en ambos temas (claro y oscuro), verificado con axe-core (reglas wcag2a y wcag2aa) en CI, incluyendo el estado con animaciones activas del hero. `prefers-reduced-motion` desactiva todo el movimiento y deja contenido estático. Navegación por teclado y foco visible; los enlaces externos avisan que abren en pestaña nueva; los gráficos tienen texto alternativo y tabla de datos accesible; sitio completo en español e inglés.
