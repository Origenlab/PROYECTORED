<!-- converted from Reporte — Análisis Nivel 3.docx -->





PROYECTO RED
proyectored.com.mx
Análisis de Arquitectura
Páginas de Nivel 3
Estado actual • Brechas críticas • Recomendaciones
Versión 1.0 — Abril 2026
Preparado para: Frank (Proyecto Red)

# Resumen ejecutivo
El Nivel 3 del sitio de Proyecto Red se refiere a todas las páginas que dependen jerárquicamente de las secciones principales del Nivel 2 (Productos, Servicios, Cobertura, Blog). Este análisis audita su estado actual, detecta brechas críticas y define la ruta más eficiente para homologarlas.


Conclusión del resumen: el 80% del Nivel 3 de productos (8 de 8 categorías) no existe como página independiente. Actualmente todos los vínculos del menú principal redirigen a anclas dentro de /productos/ en lugar de a URLs propias, lo que impide el posicionamiento SEO por categoría y genera una experiencia de usuario fragmentada.

# 1. Arquitectura y organización
## 1.1 Mapa jerárquico del sitio
La estructura de navegación actual del sitio tiene tres niveles definidos:


## 1.2 Cómo están enlazadas desde el menú
El Header utiliza el campo href de cada entrada en PRODUCT_CATEGORIES (site.ts) para generar los vínculos del mega-menú. Actualmente ese campo apunta a anclas:

href: '/productos/#extintores'   // ← ancla, no página propia
href: '/productos/#equipo-bomberos'

Esto significa que al hacer clic en "Extintores" en el menú, el usuario es llevado al catálogo general y desplazado hasta esa sección — no a una URL dedicada. El diseño es inteligente: al crear las páginas de Nivel 3, solo hay que actualizar el campo href en un solo lugar (site.ts) y todo el sitio se actualiza automáticamente.

Adicionalmente, la clase activa del nav (/extintores, /equipo-bomberos, etc.) ya está preprogramada en Header.astro, lo que confirma que el header fue construido con la intención de que existan estas páginas.
## 1.3 Jerarquía de información
La arquitectura tiene claridad conceptual pero una brecha de implementación. Los problemas principales son:
- 8 URLs de Nivel 3 están rotas (no existen como páginas, son anclas)
- El Footer lista las primeras 6 categorías con vínculos que van a anclas, no a páginas
- Los botones "Ver categoría completa" en /productos/ apuntan a las mismas anclas
- Para los motores de búsqueda, "extintores cdmx" o "equipo para bomberos nfpa" no tienen página propia en el sitio

# 2. Layout y estructura interna
## 2.1 Layouts disponibles
El sitio tiene dos layouts base y ambos están bien construidos:


## 2.2 Patrón de CategoryLayout
El CategoryLayout es la pieza central del sitio. Recibe todas las props del Hero, Stats, FAQ y CTAFinal por configuración, y deja un <slot> para el contenido único de cada página. Este patrón es muy sólido y debe ser el base para las 8 páginas de Nivel 3 faltantes.

La cadena de secciones que genera automáticamente es:
- Hero (fondo oscuro, 2 columnas, badge + H1 + CTAs + breadcrumb)
- QuickLinks (4 accesos rápidos — idéntico en todas las páginas)
- StatsBar (4 métricas en rojo — configurable por página)
- <slot> — contenido único de la página
- CotizacionForm (formulario WhatsApp — opcional)
- FAQ (preguntas frecuentes — opcional)
- CTAFinal (sección de cierre oscura con 2 botones — configurable)

Las páginas de Nivel 3 de productos deben usar exactamente esta cadena, igual que /empresas/[estado]/.
## 2.3 Layout de /blog/[slug]/ — Patrón diferente y correcto
El blog usa BaseLayout directamente (no CategoryLayout), lo cual es una decisión de diseño acertada. Un artículo de blog es contenido editorial, no una página de producto o servicio. Su estructura es:
- Hero oscuro propio (con título, categoría, autor, fecha, breadcrumb)
- Imagen destacada (opcional, con margin-top negativo para overlap)
- Layout de 2 columnas: prose (artículo) + sidebar sticky
- Sidebar: CTA WhatsApp, Tags, Links de interés
- CTA final propio (rojo, centrado)

Este layout tiene justificación estratégica pero presenta inconsistencias técnicas que se detallan en la sección 5.
## 2.4 Layout de /empresas/[estado]/ — Patrón correcto y escalable
Las páginas de cobertura usan CategoryLayout con un <slot> que contiene: grid de tarjetas de entrega, lista de municipios, y links a otras zonas. Este patrón es el modelo ideal para las futuras páginas de Nivel 3 de productos.

# 3. Diseño visual y consistencia
## 3.1 Sistema de diseño (Design Tokens)
El sitio tiene un sistema de tokens de diseño completo y bien estructurado en global.css:
- Colores: --color-red (#C41E3A), escala de grises en 8 pasos, semánticos (--bg-hero, --border)
- Tipografía: escala fluid con clamp() de --text-xs a --text-5xl
- Espaciado: grid de 8px desde --sp-1 (4px) a --sp-32 (128px)
- Bordes: 6 radios desde --radius-sm hasta --radius-full
- Sombras: 5 niveles (xs a xl)
- Transiciones: --transition y --transition-slow con ease cubic-bezier
- Layout: --container-max, --container-px, --section-py con valores fluid

Este sistema está bien implementado en todos los componentes revisados, con una excepción importante:

Problema: El verde de WhatsApp (#25D366, #1EA855) está codificado directamente en blog/[slug].astro y no existe como token en global.css. Si el color cambia o se reutiliza el patrón, habría que encontrar todas las instancias manualmente.

## 3.2 Consistencia entre las páginas de Nivel 3 existentes
Las dos ramas existentes del Nivel 3 son visualmente inconsistentes entre sí:


La diferencia es justificada en cuanto al layout general (un artículo es contenido editorial, no una página de producto), pero hay duplicación técnica evitable, especialmente en los botones y el CTA final.
## 3.3 Espaciados, jerarquías y tipografía
Dentro de cada rama el diseño es consistente. Se usa correctamente la escala de texto fluid y el grid de 8px para los espaciados. La jerarquía H1 > H2 > H3 está bien definida en los componentes existentes.
El rojo #C41E3A se usa como color de acento en todos los textos clave, badges, CTAs y bordes de énfasis. Esto crea unidad visual reconocible a través del sitio.

# 4. Componentes y reutilización
## 4.1 Inventario de componentes existentes


## 4.2 Elementos duplicados o sin componentizar
Los siguientes bloques existen en más de una página pero no están convertidos en componentes:


## 4.3 Colecciones de contenido — sin usar en Nivel 3
El archivo src/content/config.ts define dos colecciones que tienen esquemas completos pero ningún archivo de contenido:

// config.ts — colección definida pero sin .md files
const productos = defineCollection({ type: 'content', schema: z.object({
title, slug, description, badge, image, order, subcategories
}) })

Esto significa que existe infraestructura lista para manejar los productos como contenido (Markdown), pero todavía no se ha usado. Para las páginas de Nivel 3, hay dos enfoques posibles:


Para este proyecto la recomendación es el Enfoque A (data en un archivo de configuración centralizado), porque el contenido de las 8 categorías sigue el mismo patrón estructural, y ya existe la data necesaria dispersa en catalogContent (productos/index.astro). Se trata de consolidar y enriquecer esa data.

# 5. Código y construcción técnica
## 5.1 blog/[slug].astro — Problemas técnicos
A pesar de que el layout editorial es correcto, existen cuatro problemas técnicos identificados:

Problema 1 — Botones no usan clases globales .btn
Los botones del CTA final en el artículo usan clases locales (.article-cta__btn--primary, .article-cta__btn--ghost) definidas en el mismo archivo, en lugar de las clases globales .btn.btn--primary y .btn.btn--ghost que ya existen en global.css. Esto crea CSS redundante que ya fue limpiado de Hero y CTAFinal pero persiste en el blog.

Problema 2 — Colores de WhatsApp no son tokens
La sidebar del artículo tiene codificados los colores del botón de WhatsApp:

.sidebar-cta__btn { background: #25D366; }  /* hardcoded */
.sidebar-cta__btn:hover { background: #1EA855; }  /* hardcoded */

Estos deberían ser tokens CSS en global.css: --color-whatsapp y --color-whatsapp-hover.

Problema 3 — CTA final propio vs componente existente
El artículo crea una sección .article-cta con fondo rojo y su propio HTML/CSS, cuando ya existe CTAFinal.astro que hace exactamente lo mismo (fondo oscuro con 2 botones). La diferencia es solo el color de fondo (rojo vs oscuro). En lugar de duplicar, CTAFinal.astro debería aceptar una prop variant="red".

Problema 4 — Sin QuickLinks ni CotizacionForm
Las páginas de artículo del blog no incluyen QuickLinks ni el formulario de cotización. Si bien esto es una decisión válida para no saturar el artículo, las oportunidades de conversión son menores. Se recomienda al menos incluir CotizacionForm después del contenido, antes del CTA final.
## 5.2 empresas/[estado].astro — Problemas técnicos

Problema 1 — estadoData embebido en la página
Todo el contenido de los 6 estados (títulos, subtítulos, descripciones, zonas, cards de entrega) está en un solo objeto JavaScript dentro del archivo .astro, haciendo que la página tenga ~370 líneas. Si se agrega un estado o se actualiza una descripción, hay que editar ese archivo mezclando código con contenido. Debería moverse a src/data/estados.ts o a content collections.

Problema 2 — getStaticPaths() desincronizado de COVERAGE_STATES
La función getStaticPaths() está hardcodeada con 6 slugs en lugar de derivarse de COVERAGE_STATES:

// Actual (problema): 6 slugs escritos manualmente
return [{ params: { estado: 'cdmx' } }, { params: { estado: 'edomex' } }, ...]

// Correcto: derivado de la fuente de verdad en site.ts
return COVERAGE_STATES.map(s => ({ params: { estado: s.slug } }))

Si se agrega un nuevo estado en COVERAGE_STATES pero no se actualiza este array, el nuevo estado no generará página.
## 5.3 Ausencia de páginas de categoría de producto — Impacto SEO crítico
Este es el problema de mayor impacto para el negocio. Sin URLs dedicadas para cada categoría, el sitio pierde la oportunidad de posicionar búsquedas de alto valor comercial como:
- "extintores certificados nom cdmx"
- "equipo para bomberos nfpa 1971 méxico"
- "señalamientos de evacuación nom-003 empresa"
- "sistemas contra incendio nfpa 13 instalación"

Actualmente el contenido de estas categorías existe en /productos/ pero no tiene URL propia. Para Google, toda esa información es parte de /productos/ y no genera posicionamiento individual por categoría.

# 6. Errores y oportunidades de mejora
## 6.1 Errores críticos (bloquean SEO y UX)


## 6.2 Inconsistencias de diseño (degradan homologación)


## 6.3 Oportunidades de mejora (opcional pero recomendado)
- Crear token --color-whatsapp en global.css para centralizar el verde
- Componentizar el sidebar de blog como SidebarCTA.astro reutilizable
- Añadir prop variant a CTAFinal.astro para soportar fondo rojo (artículos de blog)
- Mover estadoData a src/data/estados.ts para separar datos de template
- Agregar top: calc(var(--topbar-height) + var(--header-height)) con tokens en Header, reemplazando los 113px codificados
- Incluir CotizacionForm en blog/[slug].astro después del contenido

# 7. Recomendaciones y plan de acción
## 7.1 Plan de trabajo recomendado
El trabajo del Nivel 3 se puede dividir en tres fases ordenadas por impacto y dependencias:


## 7.2 Estructura recomendada para las páginas de Nivel 3 de productos
Para las 8 páginas de categoría, la ruta más eficiente es crear una sola plantilla dinámica:

src/pages/[slug].astro   ← genera: /extintores/, /equipo-bomberos/, etc.

Esta página debe:
- Usar CategoryLayout (igual que /empresas/[estado]/)
- Leer los datos del slug correspondiente desde un objeto CATEGORY_DATA centralizado
- Incluir: Hero con badge NOM/NFPA, QuickLinks, StatsBar, sección de subcategorías, sección de normas, CotizacionForm, FAQ específico por categoría, CTAFinal
- El link "Ver categoría completa" en /productos/ debe apuntar a la URL propia, no al ancla

La estructura del slot de contenido único por página debería incluir:


## 7.3 Diseño propuesto del archivo de datos
Para centralizar el contenido de las 8 categorías, se recomienda crear un nuevo archivo de configuración:

// src/data/categorias.ts
export const CATEGORY_PAGES = {
'extintores': {
badge: 'NOM-154-SCFI',
heroTitle: 'Extintores Certificados',
heroAccent: 'NOM-154-SCFI',
stats: [{ value: "12+", label: "Tipos" }, ...],
subcategories: [ { title: 'Polvo seco PQS', desc: '...' }, ... ],
norms: ['NOM-154-SCFI', 'NOM-002-STPS'],
faqItems: [ { question: '...', answer: '...' } ],
},
// ... 7 categorías más
}

## 7.4 Estimado de trabajo


Total estimado para Fase 1 y 2: aproximadamente 5-7 horas de trabajo. Las páginas de categoría son el impacto más alto y deben abordarse primero.

# 8. Conclusiones
El Nivel 3 del sitio de Proyecto Red presenta una situación clara: existe una arquitectura bien pensada, con componentes sólidos, un sistema de diseño coherente y dos ramas funcionales — pero las 8 páginas de mayor valor comercial (las categorías de producto) no existen todavía como URLs propias.

Lo positivo: la infraestructura está lista para crearlas. El Header ya tiene las clases activas preprogramadas, site.ts tiene el campo href listo para cambiar, CategoryLayout hace todo el trabajo pesado y catalogContent ya tiene la descripción y subcategorías de cada una. Solo falta la plantilla dinámica y el archivo de datos enriquecidos.

Las correcciones menores en blog/[slug].astro son fáciles de implementar y completan la homologación del sistema de botones y tokens que ya fue limpiado en el resto del sitio.

En resumen: el Nivel 3 está en un 20% de lo que debería ser, pero el 80% restante tiene todos sus cimientos en su lugar. Es trabajo de implementación, no de rediseño.

Próximo paso recomendado: arrancar Fase 1 — crear src/data/categorias.ts + src/pages/[slug].astro y actualizar href en site.ts. Esto resuelve el 80% del problema con el menor esfuerzo relativo.
| Rama | Páginas | Estado | Acción requerida |
| --- | --- | --- | --- |
| /blog/[slug]/ | 3 artículos | ✓ EXISTE | Refactoring parcial — botones no usan .btn global |
| /empresas/[estado]/ | 6 estados | ✓ EXISTE | Optimización — datos embebidos en página |
| /extintores/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /equipo-bomberos/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /senalamientos/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /gabinetes/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /mangueras/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /sistemas/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /primeros-auxilios/ | — | ✗ FALTA | Crear página dedicada de categoría |
| /equipo-seguridad/ | — | ✗ FALTA | Crear página dedicada de categoría |
| Nivel | URL | Tipo de página | Estado |
| --- | --- | --- | --- |
| Nivel 1 | / | Home | No revisado en esta sesión |
| Nivel 2 | /productos/ | Catálogo general | ✓ Existe — está limpio |
| Nivel 2 | /servicios/ | Servicios | ✓ Existe — está limpio |
| Nivel 2 | /empresas/ | Cobertura general | ✓ Existe — está limpio |
| Nivel 2 | /blog/ | Blog índice | ✓ Existe |
| Nivel 3 | /empresas/cdmx/ | Página de estado | ✓ Existe — usar CategoryLayout |
| Nivel 3 | /blog/[slug]/ | Artículo individual | ⚠ Existe con observaciones |
| Nivel 3 | /extintores/ | Categoría de producto | ✗ No existe |
| Nivel 3 | /equipo-bomberos/ | Categoría de producto | ✗ No existe |
| (6 categorías más) | Ver tabla completa | — | ✗ Ninguna existe |
| Layout | Estructura de secciones | Usado en |
| --- | --- | --- |
| BaseLayout.astro | TopBar + Header + <slot> + Footer + WhatsApp | /blog/[slug]/, /404, /nosotros, /contacto |
| CategoryLayout.astro | BaseLayout + Hero + QuickLinks + StatsBar + <slot> + CotizacionForm + FAQ + CTAFinal | /productos/, /servicios/, /empresas/, /empresas/[estado]/ |
| Elemento visual | /empresas/[estado]/ | /blog/[slug]/ |
| --- | --- | --- |
| Hero | Hero.astro (oscuro, 2col, badge, H1, CTAs) | Hero propio (oscuro, 1col, categoría, meta) |
| QuickLinks | ✓ Sí — vía CategoryLayout | ✗ No — BaseLayout |
| StatsBar | ✓ Sí — vía CategoryLayout | ✗ No |
| Breadcrumb | Vía Hero.astro (sobre fondo oscuro) | Breadcrumb.astro directo (sobre fondo oscuro) |
| CotizacionForm | ✓ Sí | ✗ No |
| CTAFinal (componente) | ✓ Sí — vía CategoryLayout | ✗ No — CTA propio artesanal |
| Botones globales .btn | ✓ Usa .btn del global.css | ✗ Clases .article-cta__btn propias |
| Sidebar sticky | ✗ No aplica | Sidebar propio (no reutilizable aún) |
| Componente | Tipo | Estado y observaciones |
| --- | --- | --- |
| BaseLayout.astro | Layout | ✓ Sólido, bien documentado |
| CategoryLayout.astro | Layout | ✓ Sólido, patrón modelo para Nivel 3 |
| Header.astro | Global | ✓ Listo para Nivel 3 (classes activas) |
| Footer.astro | Global | ⚠ Vínculos aún apuntan a anclas |
| TopBar.astro | Global | ✓ Estático, sin problemas |
| WhatsAppButton.astro | Global | ✓ Correcto |
| Hero.astro | Sección | ✓ Usa .btn global, sin CSS duplicado |
| CTAFinal.astro | Sección | ✓ Usa .btn global, reutilizable |
| CotizacionForm.astro | Sección | ✓ Número WA desde config vía define:vars |
| QuickLinks.astro | Sección | ✓ Lee de site.ts, correcto |
| StatsBar.astro | Sección | ✓ Props de CategoryLayout |
| FAQ.astro | Sección | ✓ Opcional en CategoryLayout |
| SectionHeader.astro | UI | ✓ Reutilizado en 4+ páginas, correcto |
| Breadcrumb.astro | UI | ✓ Schema.org, accesible |
| Elemento | Dónde aparece | Recomendación |
| --- | --- | --- |
| Sidebar CTA de WhatsApp | blog/[slug].astro (sidebar) | Crear SidebarCTA.astro reutilizable para futuras páginas con sidebar |
| CTA final de artículo (.article-cta) | blog/[slug].astro | Usar CTAFinal.astro con variant "rojo" o mover al tema del blog |
| Iconos SVG de WhatsApp inline | Hero, Header, CotizacionForm, blog | Crear WhatsAppIcon.astro o usar un sprite SVG |
| Tarjeta de entrega (delivery-card) | empresas/[estado].astro | Buen candidato para DeliveryCard.astro si el patrón se repite |
| Enfoque | Cómo funciona | Cuándo usarlo |
| --- | --- | --- |
| Enfoque A: Data en site.ts | Ampliar PRODUCT_CATEGORIES con todos los campos necesarios y crear un template [slug].astro que lea esa data | Más rápido de implementar. Recomendado si el contenido es mayoritariamente el mismo entre categorías. |
| Enfoque B: Content Collections | Crear src/content/productos/extintores.md con frontmatter y cuerpo editorial, leer con getCollection() | Más flexible. Permite contenido editorial diferente por categoría y futuras integraciones de CMS. |
| # | Error | Descripción y impacto |
| --- | --- | --- |
| E1 | 8 categorías de producto sin página propia | Todos los vínculos de catálogo apuntan a anclas en /productos/. No hay URLs indexables por categoría. Impacto SEO alto. |
| E2 | getStaticPaths() hardcodeado en [estado].astro | Si se agrega un estado en site.ts pero no en este array, el estado no genera página y produce un 404 potencial. |
| E3 | Colores WA sin token en blog/[slug] | #25D366 y #1EA855 codificados directamente. Rompe el sistema de tokens si se cambia la identidad visual. |
| # | Inconsistencia | Descripción |
| --- | --- | --- |
| I1 | CTA final artesanal vs CTAFinal.astro | blog/[slug].astro crea su propio bloque CTA en lugar de usar el componente existente. |
| I2 | Clases .article-cta__btn no usan .btn global | Los botones del artículo tienen estilos propios que duplican el sistema de botones globalizado. |
| I3 | Sin CotizacionForm en páginas de blog | Las páginas editoriales no incluyen el formulario de conversión, reduciendo oportunidades de contacto. |
| I4 | Datos de estado embebidos en .astro | El contenido de los 6 estados está mezclado con el código del template. Difícil de mantener. |
| Fase | Tarea | Descripción |
| --- | --- | --- |
| Fase 1
(Crítico) | Crear las 8 páginas de categoría | Una plantilla dinámica [slug].astro dentro de /src/pages/ que use CategoryLayout y lea de PRODUCT_CATEGORIES + un nuevo objeto CATEGORY_PAGES_DATA. Al construir, Astro genera las 8 URLs automáticamente. |
| Fase 1
(Crítico) | Actualizar href en site.ts | Cambiar href de '/productos/#${slug}' a '/${slug}/' en cada entrada de PRODUCT_CATEGORIES. Todos los vínculos del sitio se actualizan automáticamente. |
| Fase 2
(Importante) | Corregir blog/[slug].astro | (1) Reemplazar .article-cta__btn por .btn global. (2) Agregar tokens WA a global.css. (3) Opcionalmente agregar CotizacionForm. |
| Fase 2
(Importante) | Refactorizar getStaticPaths en [estado].astro | Derivar los slugs de COVERAGE_STATES: COVERAGE_STATES.map(s => ({ params: { estado: s.slug } })) |
| Fase 3
(Optimización) | Mover estadoData a src/data/ | Crear src/data/estados.ts con los datos de cobertura y simplificar el template .astro. |
| Fase 3
(Optimización) | Componentizar SidebarCTA | Extraer el sidebar de WhatsApp del blog como componente reutilizable para futuros usos. |
| Sección | Contenido |
| --- | --- |
| Subcategorías | Grid de cards con cada variante del producto (ej. extintores: PQS, CO2, AFFF, Tipo K...) |
| Normas aplicables | Tabla o cards de certificaciones (NOM-154-SCFI, NFPA 1971, etc.) |
| Para quién es | Targets del producto (plantas industriales, restaurantes, edificios, etc.) |
| CTA de cotización | WhatsApp con mensaje pre-cargado específico para la categoría |
| Tarea | Estimado | Notas |
| --- | --- | --- |
| Crear src/data/categorias.ts con datos de 8 categorías | 2-3 horas | Incluye texto, stats, FAQ y subcategorías |
| Crear src/pages/[slug].astro con CategoryLayout | 1-2 horas | Un solo template genera las 8 páginas automáticamente |
| Actualizar href en PRODUCT_CATEGORIES (site.ts) | 15 minutos | Cambio puntual, impacto en todo el sitio |
| Corregir blog/[slug].astro (botones + tokens WA) | 30-45 minutos | Limpieza de CSS y tokens |
| Refactorizar getStaticPaths en [estado].astro | 10 minutos | Una línea de código |
| Verificación de build y navegación | 30 minutos | npm run build + revisar las 8 URLs |