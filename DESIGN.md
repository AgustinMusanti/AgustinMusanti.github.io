---
name: Agustín Musanti · Data & AI Analyst
description: Sitio personal bilingüe de un analista de datos; papel crema u oscuro verdoso, grilla fina, cifras en mono y un dorado de trigo.
colors:
  paper-cream: '#f6f3ec'
  sheet-white: '#ffffff'
  ruled-line: '#e2dccd'
  ink-green-black: '#1b211e'
  muted-graphite: '#5d665f'
  wheat-gold-deep: '#8c5e0a'
  field-green: '#3e7a47'
  data-blue: '#2f6da3'
  bar-sand: '#c9c1ae'
  night-green-black: '#0f1412'
  night-panel: '#161d1a'
  night-ruled-line: '#26302c'
  bone-text: '#e8e6df'
  night-muted: '#9aa39d'
  wheat-gold: '#d9a441'
  field-green-light: '#7fb685'
  data-blue-light: '#6fa8dc'
  bar-slate: '#3a4640'
typography:
  display:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: '3rem'
    fontWeight: 600
    lineHeight: 1.25
  headline:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: '1.875rem'
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.375
  lead:
    fontFamily: 'Space Grotesk, sans-serif'
    fontSize: '1.5rem'
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontFamily: 'Inter, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.5
  small:
    fontFamily: 'Inter, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: 'Inter, sans-serif'
    fontSize: '0.75rem'
    fontWeight: 500
    letterSpacing: '0.06em'
  figure:
    fontFamily: 'JetBrains Mono, monospace'
    fontSize: '2.25rem'
    fontWeight: 500
    lineHeight: 1
    fontFeature: '"tnum"'
rounded:
  line: '2px'
  sm: '0.25rem'
  md: '0.375rem'
  lg: '0.5rem'
  xl: '0.75rem'
  full: '9999px'
spacing:
  xs: '0.5rem'
  sm: '0.75rem'
  md: '1.25rem'
  lg: '2rem'
  section: '5rem'
components:
  button-primary:
    backgroundColor: '{colors.wheat-gold-deep}'
    textColor: '{colors.paper-cream}'
    typography: '{typography.label}'
    rounded: '{rounded.md}'
    padding: '0.6rem 1.1rem'
  button-primary-small:
    backgroundColor: '{colors.wheat-gold-deep}'
    textColor: '{colors.paper-cream}'
    rounded: '{rounded.md}'
    padding: '0.45rem 0.9rem'
  button-outline:
    backgroundColor: 'transparent'
    textColor: '{colors.ink-green-black}'
    rounded: '{rounded.md}'
    padding: '0.6rem 1.1rem'
  button-outline-small:
    backgroundColor: 'transparent'
    textColor: '{colors.ink-green-black}'
    rounded: '{rounded.md}'
    padding: '0.45rem 0.9rem'
  card:
    backgroundColor: '{colors.sheet-white}'
    textColor: '{colors.ink-green-black}'
    rounded: '{rounded.xl}'
    padding: '1.25rem'
  chip-filter:
    backgroundColor: 'transparent'
    textColor: '{colors.muted-graphite}'
    rounded: '{rounded.full}'
    padding: '0.25rem 0.75rem'
  chip-filter-active:
    backgroundColor: 'transparent'
    textColor: '{colors.wheat-gold-deep}'
    rounded: '{rounded.full}'
    padding: '0.25rem 0.75rem'
  stat-tile:
    backgroundColor: '{colors.sheet-white}'
    textColor: '{colors.wheat-gold-deep}'
    typography: '{typography.figure}'
    rounded: '{rounded.xl}'
    padding: '1.25rem'
---

# Design System: Agustín Musanti · Data & AI Analyst

## Overview

**Creative North Star: "El cuaderno del analista"**

Un cuaderno de análisis en papel milimetrado: la precisión de una planilla con la calidez del campo. De día, papel crema con tinta verde-negra; de noche, un verde-negro profundo con texto hueso. Una grilla muy fina de fondo se desvanece hacia abajo, las cifras se escriben en mono con números tabulares y un único dorado de trigo marca lo accionable y lo que importa. Todo lo demás se sostiene con espacio, líneas de 1px y jerarquía tipográfica.

El tono es sobrio, preciso y cálido. El sistema no pretende impresionar con decoración: muestra evidencia (gráficos propios con datos reales, procesos que se simplifican) y deja que el movimiento explique, no que adorne. Los dos temas son de primera clase y se piensan juntos; ninguno es una inversión automática del otro.

Rechazos confirmados: el look de terminal o de desarrollador (el mono vive solo en cifras, nunca en etiquetas, tags ni fechas), el parallax, los cursores custom, las partículas y las librerías pesadas de animación.

**Key Characteristics:**

- Papel crema (claro) o verde-negro (oscuro), con grilla de 32px que se desvanece hacia abajo.
- Un solo acento dorado, usado con escasez; verde campo y azul dato solo en datos y estados.
- Tres voces tipográficas con roles estrictos: Space Grotesk para títulos, Inter para texto, JetBrains Mono solo para cifras.
- Plano en reposo, bordes finos; la elevación aparece solo al pasar el mouse.
- Movimiento con sentido, una vez por elemento, y siempre con equivalente estático.
- Contraste AA verificado en ambos temas, incluso en los estados atenuados.

## Colors

Una paleta de papel y tinta con un acento cálido: neutros verdosos en lugar de grises fríos, y un dorado de trigo que cambia de profundidad según el tema para sostener el contraste.

### Primary

- **Dorado de trigo profundo** (#8c5e0a, claro) / **Dorado de trigo** (#d9a441, oscuro): el único acento. Botones principales, cifras grandes, estado activo, línea de progreso, foco y subrayados de sección. El claro se oscureció desde el original (#a86f0c da 3,83:1) para pasar AA con texto normal (5,09:1 sobre crema).

### Secondary

- **Verde campo** (#3e7a47 / #7fb685): estados positivos y de "activo", como el chip de promoción y los puntos de actividad.

### Tertiary

- **Azul dato** (#2f6da3 / #6fa8dc): líneas y marcas de datos en los gráficos (la serie estimada) y los bordes de pasos automáticos.

### Neutral

- **Papel crema** (#f6f3ec) / **Verde-negro de noche** (#0f1412): fondo de página.
- **Hoja blanca** (#ffffff) / **Panel de noche** (#161d1a): superficie de tarjetas.
- **Línea de cuaderno** (#e2dccd) / **Línea de noche** (#26302c): bordes, divisores y grilla de fondo.
- **Tinta verde-negra** (#1b211e) / **Texto hueso** (#e8e6df): texto principal.
- **Grafito suave** (#5d665f) / **Gris verdoso de noche** (#9aa39d): texto secundario, etiquetas y subtítulos.
- **Arena de barra** (#c9c1ae) / **Pizarra de barra** (#3a4640): barras de datos que no son el foco; el foco usa el dorado.

### Named Rules

**The One Gold Rule.** El dorado marca acción, cifra clave o estado activo, y nada más. Si en una pantalla hay dorado en todos lados, ya no marca nada. Decisión explícita de Agustín: los botones principales de cada tarjeta de proyecto (ver caso, demo) van rellenos en dorado porque son la acción; la regla se cumple porque el dorado sigue reservado a acciones, cifras y estado activo, no a decoración. "Copiar email" es la acción principal de Contacto.

**The Dimmed-State Rule.** Un estado atenuado (pasos inactivos, texto secundario en transición) se define con un token por tema (`--step-dim-title`, `--step-dim-question`), no con una opacidad fija, y debe pasar 4,5:1 en ambos temas. En claro los títulos atenuados usan 0,7 y las preguntas, color pleno; en oscuro, 0,55 y 0,8.

**The Two-Themes Rule.** El tema sigue al sistema, se alterna manualmente, se guarda en el navegador y se aplica antes del primer pintado. Cualquier ajuste de color se verifica en los dos.

## Typography

**Display Font:** Space Grotesk 600 (con sans-serif)
**Body Font:** Inter 400 y 500 (con sans-serif)
**Label/Mono Font:** JetBrains Mono 500, solo para cifras (con monospace)

**Character:** Una grotesca geométrica con carácter para los títulos, un humanista neutro para leer, y un mono tabular que convierte los números en el elemento de "dato" del sistema.

### Hierarchy

- **Display** (600, 2,25rem móvil / 3rem desde md, line-height 1,25): nombre en el hero.
- **Lead** (600, 1,25rem / 1,5rem, line-height 1,375): frase principal del hero.
- **Headline** (600, 1,5rem / 1,875rem): títulos de sección, siempre precedidos por una barra de acento de 4px.
- **Title** (600, 1,125rem–1,25rem, line-height 1,375): títulos de tarjeta y de caso.
- **Small** (400, 0,875rem, line-height 1,5): subtítulos, apoyo, notas y el número del paso del hero.
- **Body** (400, 1rem, line-height 1,5): texto corrido y la pregunta de cada paso del hero. Líneas de lectura de hasta ~65–75 caracteres (max-w-xl a 2xl).
- **Label** (500, 0,75rem, +0,06em, mayúsculas, Inter): etiquetas de campo ("Pregunta", "Resultado", "Herramientas"). Nunca en mono.
- **Figure** (JetBrains Mono 500, 1,875rem–2,25rem, números tabulares, line-height 1): cifras grandes en dorado con su etiqueta chica debajo.

### Named Rules

**The Numbers-Only Mono Rule.** El mono es para cifras y, cuando hace falta, ejes de gráficos. Etiquetas, tags, fechas, navegación y botones van en Inter. Es lo que separa un cuaderno de analista de un terminal.

## Layout

Una sola columna de lectura dentro de un contenedor de 72rem (max-w-6xl) con 1rem de padding lateral; las secciones se separan con 5rem verticales (1,5rem arriba y 1,5rem abajo en el hero móvil). Las grillas de tarjetas son de 2 columnas desde 768px con 1,25rem de separación; la destacada ocupa todo el ancho y se divide en texto y gráfico desde 1024px. El hero pasa a dos columnas (1,2fr / 1fr, gap 3,5rem) desde 1024px. La navegación se colapsa en menú desde 1024px.

El ritmo es generoso pero no vacío: por debajo de 768px el hero reduce márgenes para que el contenido siguiente asome en el primer viewport (375px). Nada produce scroll horizontal entre 375 y 1440px; los gráficos tienen una variante angosta en lugar de escalar texto hasta ilegible.

## Elevation & Depth

Plano en reposo. La estructura la dan bordes de 1px (`ruled-line`) y el cambio de superficie (hoja blanca sobre papel crema; panel sobre verde-negro), no las sombras. La única elevación es respuesta a un estado: al pasar el mouse una tarjeta sube 3px, su borde toma el acento y aparece una sombra ambiente difusa. Los tooltips de los gráficos llevan una sombra mínima.

### Shadow Vocabulary

- **Hover lift** (`box-shadow: 0 8px 24px -16px color-mix(in srgb, var(--text) 40%, transparent)`): tarjetas y recuadros "lift" al pasar el mouse.
- **Tooltip** (`box-shadow: 0 1px 3px 0 #0000001a, 0 1px 2px -1px #0000001a`): etiqueta flotante de los gráficos.

### Named Rules

**The Flat-By-Default Rule.** Ninguna superficie tiene sombra en reposo. La profundidad aparece solo como respuesta a hover o foco.

## Shapes

Esquinas moderadas y consistentes: tarjetas y paneles a 0,75rem, botones a 0,375rem, bloques de apoyo a 0,5rem y chips y marcadores en píldora completa. Los bordes son siempre de 1px, salvo el foco (2px). Las barras de datos llevan esquinas de 2px; la línea de tiempo y la línea de progreso son de 2px de espesor, con puntos circulares.

## Components

Planos y precisos en reposo, con vida al hover: borde que toma el acento, elevación leve y una flecha que se desplaza.

### Buttons

- **Shape:** esquinas suaves (0,375rem).
- **Primary:** relleno dorado con texto del color de fondo del tema (crema sobre dorado oscuro en claro, verde-negro sobre dorado en oscuro); padding 0,6rem 1,1rem (grande) o 0,45rem 0,9rem (chico), texto 0,875rem peso 500. Se usa para "Ver proyectos", "Ver en vivo" y "Ver el caso completo".
- **Hover / Focus:** el relleno baja a 90% de opacidad; foco con contorno de 2px en dorado a 2px de separación. La flecha de los botones con "→" se desplaza 4px.
- **Secondary / Outline:** mismo tamaño, sin relleno y con borde neutro; el chico lleva el borde un poco más visible (muted al 45%). El hover toma el borde dorado. Es el botón de "Código", LinkedIn y GitHub.

### Chips

- **Style:** píldora con borde de 1px, texto 0,875rem, padding 0,25rem 0,75rem, con el conteo en mono chico.
- **State:** activo con borde y texto dorados (`aria-pressed`); inactivo con borde de línea y texto grafito; hover toma el borde dorado.

### Cards / Containers

- **Corner Style:** 0,75rem.
- **Background:** hoja blanca (claro) o panel de noche (oscuro).
- **Shadow Strategy:** ninguna en reposo; "hover lift" al pasar el mouse.
- **Border:** 1px de línea de cuaderno.
- **Internal Padding:** 1,25rem (1rem en tarjetas chicas de la franja "Lo que hago").

### Navigation

Barra superior fija, de ancho de contenedor, borde inferior de 1px y fondo del tema al 90% con desenfoque. Enlaces en Inter 0,875rem, grafito en reposo y tinta para la sección activa (resaltada por IntersectionObserver). Debajo de 1024px, un botón de menú abre un panel con atrapado de foco que se cierra con Escape. Idioma (ES / EN) y tema a la derecha; una línea de progreso de lectura de 2px en dorado corre arriba de todo.

### Process steps (signature)

La pieza del hero y el diagrama del caso de validación comparten un lenguaje: píldoras unidas por una línea vertical de 2px; el paso activo se rellena en dorado con su título en dorado y un círculo numerado de 2rem, y los inactivos se atenúan según el token de tema. Un punto recorre los pasos automáticos; el paso de revisión humana se resalta en dorado. En el hero los pasos avanzan solos cada ~3s una única vez y descansan en el cuarto; cualquier toque, tecla o foco detiene el recorrido, y todo el conjunto es una sola parada de tab con flechas para moverse (WCAG 2.2.2).

### Charts

Gráficos hechos a mano en SVG, sin librerías: barras en arena o pizarra con el dato clave en dorado, serie estimada en azul dato, ejes en mono chico y banda de incertidumbre translúcida. Cada gráfico lleva título con el hallazgo, subtítulo con unidad, tooltip y una tabla de datos para lectores de pantalla. Se dibujan una sola vez al entrar en pantalla.

### Tool marquee

Cinta continua de píldoras en Space Grotesk 1rem, con bordes enmascarados que se desvanecen a ambos lados; se pausa con el mouse, con el foco de teclado o con un botón visible de pausa/reanudar encima de la cinta, y con movimiento reducido pasa a una grilla estática.

## Do's and Don'ts

### Do:

- **Do** usar el dorado solo para acción, cifra clave y estado activo (The One Gold Rule).
- **Do** poner las cifras en JetBrains Mono con números tabulares y su etiqueta en Inter debajo.
- **Do** mantener las superficies planas en reposo y reservar la elevación para hover y foco.
- **Do** definir cualquier estado atenuado con tokens por tema y verificar 4,5:1 en claro y oscuro.
- **Do** dar a cada animación su equivalente estático bajo `prefers-reduced-motion`, y animar cada elemento una sola vez.
- **Do** mostrar el hallazgo en el título del gráfico, con unidad, fuente y tabla de datos accesible.

### Don't:

- **Don't** usar mono en etiquetas, tags, fechas, botones ni navegación: es lo que produce el look de terminal.
- **Don't** usar parallax, cursores custom, partículas ni librerías pesadas de animación.
- **Don't** usar texto dorado claro (#a86f0c) sobre papel crema: no pasa AA para texto normal.
- **Don't** apoyar un estado en una opacidad fija: puede bajar el texto a menos de 4,5:1 en uno de los dos temas.
- **Don't** sumar sombras en reposo ni bordes gruesos para dar jerarquía; la jerarquía sale de la tipografía y el espacio.
- **Don't** introducir sectores, adjetivos o decoración que no estén respaldados por un dato o un caso.
