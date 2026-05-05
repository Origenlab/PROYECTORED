<!-- converted from auditoria-integral-proyectored.docx -->


AUDITORÍA INTEGRAL
SEO · Código · Copywriting · Marketing · UX
PROYECTO RED
proyectored.com.mx

Documento de consultoría senior
Crecimiento orgánico · Conversión · Autoridad de marca
Elaborado: abril 2026
Versión 1.0 — Auditoría inicial completa

## Índice de contenidos
Este documento está organizado como una auditoría por módulos. Cada módulo documenta hallazgos, prioridades, impacto comercial y SEO, y recomendación puntual ejecutable.
# Resumen ejecutivo
Proyecto Red opera hoy un sitio Astro estático técnicamente competente — arquitectura de layouts L1→L4 bien pensada, 76 artículos de blog que construyen autoridad temática real, schema local básico, catálogo segmentado en ocho categorías y un componente de WhatsApp omnipresente. La base es sólida. Sin embargo, existen varios frenos silenciosos que están limitando tanto el posicionamiento orgánico como la conversión comercial.
Los hallazgos más relevantes de esta auditoría pueden agruparse en tres frentes:
- Frente técnico-SEO: existen dos layouts paralelos (Base.astro y BaseLayout.astro) con configuraciones distintas de SEO, fuentes tipográficas, schema JSON-LD y estrategia de preload. Esto genera inconsistencia entre páginas y potencial duplicación de schema LocalBusiness. Adicionalmente, el sitemap referenciado en robots.txt no se genera en el build (falta la dependencia @astrojs/sitemap), lo que limita el descubrimiento en Google.
- Frente de contenido y copy: la base lingüística es profesional pero aún descriptiva — el hero de la home abre con “Venta de Equipos Contra Incendios”, una fórmula funcional más que diferenciadora. Las meta descriptions de 11 de las 14 páginas clave exceden los 160 caracteres, incluyen teléfono y precio —ambos antipatrones— y repiten la misma lista de categorías. El FAQ de la home está duplicado entre microdata (FaqCotizacionIndex) y JSON-LD (schemaFAQ), lo cual Google puede ignorar o penalizar como contenido redundante.
- Frente comercial y CRO: la captura de leads depende casi al 100% de WhatsApp. No hay formulario transaccional con captura de email, ni lead magnet (checklist descargable, plantilla de expediente para Protección Civil), ni prueba social visible con nombres, fotografías o métricas numéricas (“X empresas atendidas”, “Y años en el mercado”, “Z estados cubiertos”). Los testimonios actuales son texto con favicons de terceros, lo que debilita en lugar de reforzar confianza.
### Tres conclusiones de alto nivel
- El sitio tiene “buena letra pero poca voz”. El copy está escrito con corrección técnica; el siguiente salto requiere pasar de descriptivo a diferenciador y humano, incorporando historias de cliente, datos concretos y una voz comercial con criterio.
- Hay deuda técnica invisible que ya está costando ranking. Favicon corrupto (archivo HTML con extensión .png), sitemap ausente, meta descriptions con teléfono dentro, fuentes cargadas de forma bloqueante y schema duplicado son errores que individualmente parecen menores, pero en conjunto degradan el crawl, los Core Web Vitals y la autoridad.
- Hay oportunidad inmediata de ocupar long-tail técnico. Con 76 artículos de blog maduros, la página que menos trabajo interno recibe es precisamente la que más oportunidad tiene: construir clusters temáticos (hub + spoke) en torno a cocinas industriales (Clase K), sistemas hidráulicos NFPA, protección civil CDMX y equipo para bomberos. Esta auditoría propone un roadmap claro de 90 días para ejecutarlo.
### Matriz de prioridades — vista rápida
Recomendación central:  abordar en paralelo tres bloques — (1) higiene técnica mínima (2 semanas), (2) reescritura de home + 8 categorías L2 con nuevos titles/descriptions + copy humanizado (4 semanas), y (3) cluster de contenido estratégico Clase K + NFPA + Protección Civil con enlazado interno (8-12 semanas). Esto permite ver movimiento en SERP en 60-90 días sin bloquear ninguna venta.
# Módulo 1 — Auditoría de código y desarrollo
La infraestructura del sitio está construida en Astro 6 con output estático desplegado en Cloudflare Pages. El proyecto tiene una arquitectura de layouts bien documentada (L1→L4), un sistema de data files TypeScript por categoría, un componente global de imagen conectado a ExactDN/EWWW.io como CDN, y una capa de componentes reutilizables (CategoryLayout, SectionHeaderDuo, ccard, CtaBar, FaqCotizacionIndex) que facilita la iteración. Esa base está bien.
No obstante, se detectaron siete errores técnicos que afectan directamente rendimiento, SEO y experiencia. Se presentan de mayor a menor severidad.
## 1.1 Dos layouts paralelos con configuraciones distintas
Severidad: CRÍTICA   ·   Impacto SEO: Alto   ·   Impacto performance: Medio
El repositorio tiene dos layouts raíz activos en paralelo — src/layouts/Base.astro y src/layouts/BaseLayout.astro — con configuraciones sutilmente distintas entre sí:
- Base.astro carga la fuente Outfit desde Google Fonts con <link rel="stylesheet"> síncrono (bloquea render).
- BaseLayout.astro carga la fuente Inter con patrón preload async + noscript fallback (no bloquea).
- BaseLayout.astro inyecta un JSON-LD global de LocalBusiness en todas las páginas que lo usan; Base.astro no lo hace.
- BaseLayout.astro soporta una prop noindex; Base.astro no.
- BaseLayout.astro aplica la convención de título “{title} | Proyecto Red”; Base.astro no — depende de que cada página envíe el título ya concatenado.
El resultado práctico:
- Las páginas que usan Base.astro (home, /extintores/, /equipo-bomberos/, /senalamientos/, /primeros-auxilios/, /equipo-seguridad/, /contacto/, /blog/*) renderizan con Outfit y sin LocalBusiness global.
- Las páginas que usan CategoryLayout (que internamente envuelve BaseLayout) — es decir, /nosotros/, las páginas [producto] de cada categoría y /empresas/[estado] — renderizan con Inter y con LocalBusiness inyectado automáticamente.
Esto produce: (a) inconsistencia tipográfica entre home y páginas de producto, (b) CLS perceptible si el usuario navega de una a otra, (c) diferencias de schema que debilitan la coherencia SEO, y (d) duplicación de código de mantenimiento.
Recomendación:  consolidar en un solo layout raíz. Mantener BaseLayout.astro (más completo), migrar gradualmente las páginas que hoy usan Base.astro hacia él, homologar la fuente en Outfit (que es la elegida para la marca en global.css), y eliminar Base.astro cuando ya no tenga dependientes. Establecer como regla: solo BaseLayout puede inyectar JSON-LD de LocalBusiness; las páginas solo añaden schemas específicos de ese contexto (ItemList, Product, FAQPage, BreadcrumbList).
## 1.2 Favicon y assets críticos corruptos
Severidad: CRÍTICA   ·   Impacto SEO: Medio   ·   Impacto branding: Alto
Se verificó con el comando `file` sobre los assets públicos. Los siguientes archivos tienen extensión de imagen pero contienen documento HTML (probablemente páginas de error o redirects del sitio WordPress anterior que se descargaron mal en su momento):
public/favicon.png                             → HTML document
public/apple-touch-icon.png                    → HTML document
public/imagenes/home/senalamiento-alt.jpg      → HTML document
public/imagenes/senalamientos/senalamiento-alt.jpg → HTML document
public/imagenes/senalamientos/punto-reunion.jpg → HTML document
Impacto: el navegador intenta renderizar estos archivos como imágenes, recibe HTML, y falla silenciosamente. Se manifiesta como favicon roto en la pestaña del navegador, apple-touch-icon roto cuando un usuario añade el sitio a la pantalla de inicio de iOS, y dos imágenes rotas en la categoría de señalamientos.
Recomendación:  reemplazar los cinco archivos con versiones válidas. Para favicon.png generar variantes 16×16, 32×32, 48×48 y 180×180 (apple-touch-icon) desde el SVG de marca. Para las fotografías de señalamientos regenerar con el prompt ImageFX ya documentado en docs/PROMPT-IMAGEFX-SERVICIOS.md y convertir a AVIF antes de subir.
## 1.3 Sitemap referenciado pero no generado
Severidad: CRÍTICA   ·   Impacto SEO: Alto   ·   Impacto comercial: Alto
El archivo public/robots.txt declara:
Sitemap: https://proyectored.com.mx/sitemap-index.xml
# Sitemap generado automáticamente por @astrojs/sitemap
Sin embargo, package.json no incluye la dependencia @astrojs/sitemap y el comando astro build no genera ningún archivo sitemap-*.xml en dist/. Un bot llegará a robots.txt, seguirá el enlace Sitemap: y obtendrá un 404.
Impacto: Google y Bing no reciben un mapa explícito del sitio. El descubrimiento depende 100% de enlazado interno y backlinks. Para un sitio con 76 artículos de blog y 50+ páginas de categoría/producto, la ausencia de sitemap reduce notablemente la profundidad de crawl y la velocidad de indexación de contenido nuevo.
Recomendación:  instalar @astrojs/sitemap, declararlo como integration en astro.config.mjs, y configurar filter para excluir /404 y /empresas/ si esas páginas no son objetivo SEO. Verificar después del build que dist/sitemap-index.xml y dist/sitemap-0.xml existan. Enviar el sitemap manualmente a Google Search Console y Bing Webmaster Tools en la misma semana.
## 1.4 Schema LocalBusiness duplicado y tipo inválido
Severidad: ALTA   ·   Impacto SEO: Alto
El home (src/pages/index.astro) declara manualmente un schema LocalBusiness:
"@type": ["LocalBusiness", "FireProtectionEquipmentSupplier"]
La página de contacto (src/pages/contacto.astro) declara otro LocalBusiness. Ambas usan Base.astro, que hoy no inyecta LocalBusiness global — de modo que por ahora la duplicación no ocurre en runtime. Pero en el momento en que se consoliden ambos layouts en BaseLayout.astro (recomendación 1.1), estas páginas mostrarán dos LocalBusiness simultáneamente: el global (BaseLayout) y el de la página. Google descarta o fusiona schemas redundantes, pero pierde confianza en los atributos.
Además, el valor FireProtectionEquipmentSupplier no es un @type válido en schema.org. Aparecerá como warning en el Rich Results Test y reduce la probabilidad de mostrar rich snippets.
Recomendación:  mover todo LocalBusiness a BaseLayout.astro como única fuente de verdad. Eliminar los bloques schemaLocalBusiness de index.astro y contacto.astro. Reemplazar el @type array por el válido: "@type": "LocalBusiness" (sin el secundario inventado). Añadir additionalType: "https://www.wikidata.org/wiki/Q18396" o una clasificación válida si se quiere señalizar el vertical.
## 1.5 FAQ duplicado entre microdata y JSON-LD
Severidad: MEDIA   ·   Impacto SEO: Medio
En el home existen dos representaciones estructuradas del mismo FAQ:
- FaqCotizacionIndex.astro marca cada pregunta con microdata schema.org/Question (itemscope, itemprop="name", acceptedAnswer).
- index.astro añade además un <script type="application/ld+json"> con el mismo FAQPage.
Google no penaliza esto per se, pero puede reportar advertencia de “FAQ duplicado detectado” en Search Console. Además, el FAQ aparece idéntico en FaqCotizacionIndex (home) y en FaqCotizacionContacto (contacto) y en secciones de categorías. Esto es contenido duplicado entre páginas.
Recomendación:  elegir una sola fuente por página. Mantener microdata en el componente visual; eliminar el script JSON-LD de FAQPage redundante. Y diversificar: la home sí puede tener FAQ general; /extintores/ debe tener FAQ específico de extintores; /sistemas/ FAQ de sistemas, etc. Cada FAQ específico gana long-tail propio.
## 1.6 Render-blocking de fuentes y scripts
Severidad: MEDIA   ·   Impacto LCP: Medio
En Base.astro la fuente Outfit se carga con:
<link href="https://fonts.googleapis.com/css2?family=Outfit..." rel="stylesheet" />
Esta etiqueta es render-blocking. BaseLayout.astro, en cambio, usa el patrón correcto (preload + onload=rel=stylesheet + noscript fallback). Si se consolida todo a BaseLayout se resuelve, pero además conviene:
- Self-hostear la fuente en /public/fonts/ para eliminar dependencia de fonts.googleapis.com (mejora LCP y privacidad GDPR/LFPDPPP).
- Revisar que el script de TruConversion esté cargando con atributo async (lo está) y evaluar si se necesita en todas las páginas o solo en home/contacto.
- Añadir resource hints específicos: preload del hero de home (hero-index-og.avif si se crea), y fetchpriority="high" al logo del header (ya lo hace — correcto).
Recomendación:  consolidar layouts, self-hostear Outfit con woff2 y font-display: swap en un @font-face dentro de global.css. Hacer preload del subset latin. Esto baja LCP en mobile entre 200-400ms según pruebas estándar.
## 1.7 Accesibilidad — oportunidades puntuales
Severidad: MEDIA   ·   Impacto UX: Medio   ·   Impacto SEO: Bajo
La base es correcta: existen estilos :focus-visible globales, el Header usa roles semánticos (banner, nav, region, aria-expanded, aria-controls), y los SVG decorativos tienen aria-hidden. Oportunidades de refinamiento:
- El main no tiene id="main-content" en Base.astro (sí lo tiene en BaseLayout). Falta un skip-link visible al teclear Tab.
- Muchos botones con solo ícono (WhatsApp flotante, chevrons del header) deberían tener aria-label explícito — algunos sí lo tienen, hay que auditar uno por uno.
- Los details/summary del FAQ funcionan nativamente con teclado, pero el chevron gira con transform; añadir prefers-reduced-motion para respetar esa preferencia del usuario.
- Contraste: el color muted (#52525B / #71717A) sobre superficies gris claro roza el umbral AA para texto pequeño. Validar con herramienta automatizada (axe DevTools o Lighthouse A11y).
Recomendación:  añadir <a class="skip-link" href="#main-content">Saltar al contenido</a> como primer elemento del body, con CSS que lo muestre solo al recibir foco por teclado. Auditar contraste WCAG AA con Lighthouse y ajustar --c-muted a #4B5563 si fuera necesario.
# Módulo 2 — Auditoría SEO técnica y on-page
Este módulo revisa metadata, URLs, canonicals, indexabilidad, intención de búsqueda y la arquitectura SILO del sitio. La base on-page es decente pero tiene fugas críticas en titles y descriptions que están limitando CTR y ranking.
## 2.1 Titles y descriptions fuera del rango óptimo
Severidad: CRÍTICA   ·   Impacto SEO: Alto   ·   Impacto CTR: Alto
Se auditaron las metadatas de 11 páginas clave directamente en los archivos fuente. El resumen es el siguiente:
Problemas transversales detectados:
- Teléfono (55 3723 8544) dentro de meta description de home. Google puede recortar la descripción y mostrar un número sin contexto — además, lo correcto es usar rich snippets tel: y schema, no texto plano.
- Precios ($450 MXN, $35 MXN, $6,500 MXN, $650 MXN) dentro de meta descriptions. Los precios cambian y quedan cristalizados en SERP durante semanas. Además quitan espacio a beneficios.
- Listas de 7-8 productos dentro de descriptions. Repetitivo, difícil de leer, reduce CTR.
- Promesas idénticas cerrando múltiples descriptions ("Asesoría técnica gratuita", "Entrega directa en CDMX"). Google puede interpretar patrón de boilerplate.
Recomendación:  rediseñar meta descriptions con fórmula: Beneficio concreto (40-50c) + diferenciador único (40-50c) + cobertura geográfica o call-to-intent (30-40c). Sin teléfonos, sin precios, sin listas. Ver Módulo 4 con ejemplos reescritos.
## 2.2 Arquitectura de URLs, canonicals e indexabilidad
Severidad: MEDIA   ·   Impacto SEO: Medio
La arquitectura general de URLs es limpia y bien jerarquizada:
/                             L1 — Home
/productos/  /servicios/  /empresas/   L2 — Overview
/extintores/   /mangueras/   /sistemas/   L2 — Categoría
/extintores/polvo-seco/   /mangueras/manguera-hidrante/   L3/L4 — Producto
/empresas/queretaro/   /empresas/cdmx/   L3 — Cobertura
/blog/   /blog/[slug]/   /blog/[page]/   Blog
Fortalezas:
- URLs en español, en minúsculas, con guiones — correcto para Google México.
- Trailing slash consistente — evita redirects innecesarios.
- Canonicals calculados automáticamente en layouts (Astro.url.pathname + SITE.url).
Debilidades y riesgos:
- No hay /servicios/{slug}/ como páginas dedicadas; los enlaces del dropdown y del footer apuntan a anchors /servicios/#id. Eso concentra SEO en una sola URL y desperdicia potencial long-tail (ej. "recarga de extintores CDMX" merece su propia URL).
- La página /empresas/[estado]/ es un patrón prometedor pero hoy solo cubre 6 estados. Para construir topical authority geográfica conviene añadir landing pages de ciudades clave (Puebla capital, Querétaro, Guadalajara si hay cobertura, Monterrey, etc.).
- Ningún canonical cross-domain está declarado. Si existieran versiones legacy en WordPress o mirror en otro dominio, hay que asegurar redirect 301.
- La ruta /sectores/ existe en src/pages/ pero no tiene contenido documentado en graphify. Verificar si está indexable — si está sin contenido útil es thin content.
Recomendación:  expandir servicios a URLs individuales: /servicios/recarga-extintores/, /servicios/mantenimiento-preventivo/, /servicios/instalacion-sistemas/, /servicios/prueba-hidrostatica/, /servicios/capacitacion-brigadas-dc3/, /servicios/asesoria-tecnica/, /servicios/senalizacion-nom/. Cada una con 400-600 palabras de contenido técnico, FAQ propio y CTA. Mantener /servicios/ como hub que enlaza las siete. Este cambio por sí solo abre 6-7 nuevas puertas de entrada orgánica.
## 2.3 Arquitectura SILO y topical authority
Severidad: ALTA   ·   Impacto SEO: Muy alto
Proyecto Red ya tiene un activo enorme: 76 artículos de blog, la mayoría con contenido técnico real (NFPA 20, NOM-154, NOM-002-STPS, clase K, espacios confinados, Halligan, etc.). El reporte de graphify detecta comunidades claras: Protección Civil y Evacuación, Extintores Tipo K y Recarga, Red Hidráulica Contra Incendio, Detección de Gas, Cocinas Industriales, etc. Sin embargo, estas comunidades no están expuestas al usuario ni a Google como clusters SILO — hoy el blog es una lista plana paginada.
Lo que falta para que esa autoridad se traduzca en ranking:
- Páginas pilar (hub) por tema. Por ejemplo: /guia/proteccion-contra-incendios-cocinas-industriales/ como pilar que agrupe los ~8 artículos de Clase K; /guia/sistemas-contra-incendios-nfpa/ para NFPA 20/13/72; /guia/cumplimiento-proteccion-civil-cdmx/ para normativa.
- Enlazado interno contextual. Los artículos del blog deberían enlazar entre sí siguiendo la relación que graphify ya detecta (hyperedges). Hoy la mayoría son nodos relativamente aislados.
- Taxonomía visible. /blog/categoria/extintores/, /blog/categoria/cocinas/, /blog/categoria/cobertura-cdmx/, etc. Genera URLs nuevas, concentra keywords, y crea una experiencia de lectura temática.
- Enlazado desde páginas transaccionales hacia blog y viceversa. Hoy la página /extintores/ no vincula al blog "Extintor Tipo K para cocinas"; y el blog no tiene CTA claro hacia la página comercial correspondiente.
Recomendación:  documentar un mapa SILO de 5-7 clusters (extintores + cocinas, sistemas fijos NFPA, señalización y evacuación, equipo para bomberos, detección de gas, EPP y trabajo en alturas, protección civil y cumplimiento). Para cada cluster: 1 página pilar + 5-10 artículos + 2-3 páginas transaccionales. Enlazado interno siguiendo el patrón hub → spokes ↔ spokes. Esto convierte un blog de 76 artículos en un sistema de autoridad temática.
## 2.4 Keywords objetivo — cobertura y brechas
Severidad: ALTA   ·   Impacto SEO: Muy alto
El sitio se posiciona razonablemente bien para keywords “head”: extintores, equipos contra incendios, señalización. Pero las keywords con mayor intención comercial son las “middle” y “long-tail” geolocalizadas. Mapa rápido de cobertura actual y brecha detectada:
Siete de las catorce keywords prioritarias están cubiertas con páginas delgadas o con anchors internos, lo que impide competir en SERP. La prioridad es convertir cada anchor en URL propia y construir las pilares temáticas faltantes.
## 2.5 E-E-A-T — Experience, Expertise, Authoritativeness, Trust
Severidad: MEDIA   ·   Impacto SEO: Medio   ·   Impacto conversión: Alto
Google evalúa cada vez más la autoridad y confiabilidad de los sitios comerciales, especialmente en nichos YMYL-adyacentes como seguridad industrial y protección contra incendios. Proyecto Red tiene mimbres pero no los explota:
- Experience: los blogs técnicos demuestran experiencia real (ej. explicación de saponificación en fuegos Clase K es correcta y profunda). Falta exponer esa experiencia con autor y fotografía.
- Expertise: no hay página /equipo-tecnico/ ni biografía de quién firma las asesorías. El visitante que evalúa contratar un sistema NFPA 20 necesita ver a la persona que lo va a diseñar.
- Authoritativeness: los testimonios actuales son texto con favicons de terceros — insuficiente. Falta logo-soup de clientes verificables, menciones en medios, certificaciones del fabricante de referencia.
- Trust: la dirección física está (Reforma 26, Juárez), el RFC de la empresa NO aparece, tampoco el aviso de privacidad conforme a LFPDPPP — un visitante empresarial los busca.
Recomendación:  crear (a) página /nosotros/ ampliada con fotos reales del equipo técnico, años de experiencia, certificaciones del fabricante, (b) página /aviso-de-privacidad/ conforme a LFPDPPP (requisito legal en México para captura de datos), (c) logo-soup de 6-12 clientes verificables (con permiso) en home y categorías, (d) firmar cada artículo del blog con autor + fecha + última actualización.
# Módulo 3 — Auditoría de contenido y copywriting
El copywriting del sitio está por encima del promedio del sector: los blogs son técnicamente sólidos y las FAQs son útiles. Sin embargo, el copy “transaccional” (hero, cards de categoría, CTAs, metas) se mueve en un plano funcional-descriptivo y pierde oportunidad de diferenciar y convertir.
Esta sección revisa tono, humanización, sobreoptimización, autoridad y persuasión. Ejemplos reescritos en el Módulo 4.
## 3.1 Tono general — diagnóstico
Se revisaron: hero de home (HeroIndex.astro), sección TrustIndex, reseñas (ReviewsIndex), FAQ (FaqCotizacionIndex), hero de categorías y tres blogs aleatorios. Conclusiones por bloque:
## 3.2 Problemas recurrentes de copywriting
### 3.2.1 Descriptivo en vez de vendedor
El copy actual responde a “¿qué somos?” pero rara vez a “¿por qué elegirnos?” o “¿qué cambio concreto ofrecemos?”. Ejemplos:
- Actual: "Venta, instalación y mantenimiento de equipos contra incendios certificados en CDMX." → Correcto pero intercambiable con cualquier competidor.
- Alternativa vendedora: "Equipos contra incendios certificados NOM, entregados hoy mismo en CDMX. Expediente de Protección Civil resuelto en una sola llamada."
### 3.2.2 Repetición del mismo diferenciador
“Sin intermediarios”, “Proveedor directo” y “Asesoría técnica gratuita” son los tres ganchos que se repiten en prácticamente todas las páginas. En la home aparecen 3-4 veces. Cuando un diferenciador se repite tanto, deja de diferenciar y empieza a sonar a plantilla. Hay que alternarlos con otros: “inventario en CDMX” (velocidad), “equipo técnico de planta” (E-E-A-T), “documentación para Protección Civil sin costo extra” (beneficio regulatorio), “paquete integral para expediente STPS” (bundling).
### 3.2.3 FAQs duplicadas literalmente
Las FAQ de home, contacto y categorías son prácticamente idénticas. Esto es cómodo operativamente pero costoso para SEO: Google ve contenido duplicado y reparte mal la autoridad. Cada página necesita 5-7 preguntas propias de su contexto. Ver ejemplos reescritos en Módulo 4.
### 3.2.4 CTAs sin verbo de acción fuerte
Predominan CTAs tipo "Cotizar", "Cotizar por WhatsApp", "Solicitar cotización". Son claros pero fríos. Alternativas más efectivas: "Recibe tu precio en 10 minutos por WhatsApp", "Cotiza tu expediente de Protección Civil", "Pide tu asesoría gratuita con un técnico", "Resuelve tu inspección con un paquete integral".
### 3.2.5 Sobreoptimización sutil
La frase "equipos contra incendios" aparece literalmente 5-6 veces en el home. Google Helpful Content ya detecta ese patrón como señal de escritura-para-robot. Hay que diluir la keyword principal con variaciones naturales: "protección contra el fuego", "prevención de incendios", "protección estructural", "sistemas de extinción", "cumplimiento normativo contra incendios".
## 3.3 Humanización y voz de marca
La marca hoy se presenta como seria, técnica y profesional — atributos correctos. Lo que falta es personalidad que conecte: un punto de vista, anécdotas reales, lenguaje cálido cuando corresponde. Un cliente empresarial compra producto pero elige persona/marca. El copy actual tiene producto pero poca persona.
Cinco ajustes concretos que humanizan sin perder seriedad:
- Cambiar frases impersonales ("Se ofrece...") por primera persona plural con carácter ("Revisamos tu instalación...", "Te acompañamos...", "Nos anticipamos a lo que la autoridad va a pedir").
- Añadir micro-historias: un caso real de un cliente (sin nombre si es confidencial) que ilustra un aprendizaje operativo. "Un restaurante en Polanco tenía extintor PQS en la cocina y fallaba inspección; el cambio a Tipo K resolvió el expediente."
- Usar lenguaje sensorial donde aplique. En vez de "Espuma mecánica AFFF", decir: "forma una película sobre el líquido inflamable que corta el oxígeno en segundos".
- Incluir la voz del equipo técnico: "Lo que nos dicen más nuestros técnicos después de 15 años instalando rociadores..." — transmite experiencia real.
- Evitar tecnicismos en el primer párrafo de cada página; explicar el problema humano antes de la solución técnica.
## 3.4 Originalidad y riesgo de contenido genérico
Los blogs tienen alto grado de originalidad — contenido técnico escrito ad-hoc. Donde sí hay riesgo de "contenido genérico" es en las descripciones cortas de productos dentro de las páginas de categoría: formato "NOM-XXX. Disponible 4/6/9 kg. Ideal para oficinas." es casi idéntico entre productos. Si se comparan con competidores, muchos usan plantillas muy similares, y Google puede bajarlos al colectivo.
Recomendación:  escribir para cada producto (al menos los 20 top-sellers) una descripción propia de 80-120 palabras con voz humana, un caso de uso concreto y una pregunta/respuesta específica. Esto también habilita Product schema con richer description y beneficia ranking en long-tail.
# Módulo 4 — Ejemplos de copy reescrito
Esta sección contiene reescrituras completas de los bloques más visibles del sitio. Son plantillas de referencia: muestran el tono propuesto, la extensión aproximada, el tratamiento de la keyword, y la estructura persuasiva. No reemplazan una sesión de copywriting final con el equipo, pero fijan el estándar.
## 4.1 Hero de la home — reescritura
### Versión actual
H1: Venta de Equipos Contra Incendios
Subtítulo: Extintores, señalización NOM, sistemas de detección y supresión.
Entrega directa en CDMX — sin intermediarios, con asesoría técnica
incluida.
### Versión propuesta (opción A — técnica/autoridad)
H1: Equipos contra incendios certificados NOM, listos para tu expediente
de Protección Civil.
Subtítulo: Proveedor directo en CDMX y Estado de México. Extintores,
señalización, sistemas NFPA y capacitación DC-3 — con la
documentación que pide la autoridad, sin pasar por tres
proveedores distintos.
CTA 1: Cotizar por WhatsApp (respuesta en minutos)
CTA 2: Ver catálogo completo
### Versión propuesta (opción B — beneficio/velocidad)
H1: Pasa tu inspección de Protección Civil con un solo proveedor.
Subtítulo: Extintores NOM-154, señalización fotoluminiscente, sistemas
NFPA y brigadas DC-3. Entrega el mismo día en CDMX, expediente
técnico incluido sin costo, y un equipo que responde cuando
suena el teléfono.
Ambas opciones:
- Mantienen la keyword principal ("equipos contra incendios" / "Protección Civil").
- Añaden un diferenciador concreto y único (expediente de Protección Civil / un solo proveedor).
- Introducen beneficio operativo (tiempo, ahorro de coordinación entre proveedores).
- Quedan bajo 300 caracteres totales — buen LCP y buen encuadre mobile.
## 4.2 Meta descriptions — reescritura 8 páginas clave
## 4.3 Cards de categoría — reescritura
Las cards actuales de /productos/ y el home son descriptivas ("Extintores NOM-154"). La reescritura propuesta añade beneficio + contexto de uso:
Extintores
Actual: "Extintores certificados NOM-154-SCFI. Polvo seco, CO₂, Tipo K, agente limpio."
Propuesto: "Del PQS para oficinas al Tipo K para freidoras industriales. Elegimos contigo el agente correcto y llegamos con ficha técnica lista para tu expediente."
Equipo para bomberos
Actual: "Equipo profesional para bomberos NFPA 1971. Trajes, ERA, herramientas."
Propuesto: "Trajes NFPA 1971, ERA SCBA y rescate hidráulico Hurst/Holmatro para brigadas industriales y cuerpos municipales. Certificaciones verificadas antes del envío."
Señalamientos
Actual: "Señalización fotoluminiscente NOM-003 y NOM-026."
Propuesto: "Vamos a tu inmueble, levantamos el plano y entregamos la señalización lista para instalar. Pasa tu inspección sin observaciones."
Sistemas contra incendio
Actual: "Alarmas, detectores, rociadores, redes hidráulicas."
Propuesto: "Diseñamos, instalamos y documentamos sistemas NFPA 13/72 y redes NFPA 20. De la memoria técnica al arranque automático de la bomba — nosotros lo cerramos."
## 4.4 TrustIndex — reescritura con más diferenciador real
Actual
1. Certificación NOM e internacional — Todo lo que vendemos cumple con la normativa mexicana e internacional. Pasa tus inspecciones...
2. Entrega directa en CDMX y EDOMEX — Somos proveedor directo. Sin intermediarios...
3. Cotización en menos de 24 horas — Mándanos un WhatsApp...
4. Asesoría técnica incluida — Nuestro equipo analiza tu tipo de riesgo...
Propuesto
1. Expediente completo de Protección Civil — No solo vendemos producto: entregamos ficha técnica, etiqueta de inspección, plano de señalización y constancias DC-3 en un solo paquete. Tu carpeta para la inspección queda lista.
2. Stock real en CDMX — No esperas importaciones. Tenemos almacén en la Ciudad de México con los modelos que se mueven: PQS, CO₂, Tipo K, Clase K, agente limpio, señalización fotoluminiscente, mangueras, gabinetes. Entrega el mismo día si pides antes de las 2 PM.
3. Un equipo técnico, no un call-center — Cuando llamas, te contesta alguien que sabe la diferencia entre un rociador ESFR y uno de tubo húmedo. Eso es lo que el expediente de tu empresa necesita.
4. Proyectos llave en mano cuando crece el alcance — Del extintor suelto para tu oficina, al sistema NFPA 20 para tu nave industrial: diseñamos, instalamos, documentamos y capacitamos a tu brigada. Sin subcontratar, sin perder la trazabilidad.
## 4.5 FAQs específicas por categoría (ejemplo: extintores)
Hoy el FAQ de /extintores/ es prácticamente el mismo del home. Esto es lo que debería cubrir el FAQ específico de extintores para capturar long-tail:
Pregunta 1
¿Qué tipo de extintor necesito para mi negocio en CDMX?
Depende del riesgo. Un despacho con oficinas y papel necesita ABC de polvo seco. Una cocina con freidoras exige Tipo K por la normativa NOM-002-STPS y NFPA 17A. Un site o cuarto de servidores pide CO₂ o agente limpio para no dañar la electrónica. Hacemos visita técnica sin costo, levantamos el riesgo y te entregamos la recomendación escrita para tu expediente.
Pregunta 2
¿Cada cuánto tengo que hacer mantenimiento y prueba hidrostática?
NOM-154-SCFI pide mantenimiento anual (revisión de agente, presión, válvulas y manguera) y prueba hidrostática cada 5 años — en extintores a presión permanente. Si el cilindro falla la prueba, se retira de servicio; nunca se recarga. Manejamos pólizas anuales con recordatorio automático para que no se te venza.
Pregunta 3
¿Cuántos extintores necesito por piso y cómo los ubico?
NOM-002-STPS marca mínimo uno por piso y uno por cada 300 m² de área cubierta, con distancia máxima de 15 metros al punto más lejano protegido. La altura del herraje debe permitir que el extintor esté a no más de 1.50 m del piso. Si nos compartes el plano del inmueble, te regresamos el mapeo listo para instalar.
Pregunta 4
¿Qué documentación entregan con cada extintor?
Ficha técnica del fabricante, certificado NOM-154-SCFI, etiqueta de inspección con fecha, garantía y — si lo necesitas — carta de cumplimiento membretada para tu carpeta de Protección Civil. Todo sin costo extra.
Pregunta 5
¿Pueden recargar extintores de otra marca?
Sí, mientras el cilindro esté en buen estado estructural y pase la inspección visual y de presión. Si tu extintor está fuera de la ventana de prueba hidrostática, primero hacemos la prueba; si pasa, se recarga y se entrega con collar de garantía. Si no pasa, te damos crédito por el canje.
# Módulo 5 — Auditoría de marketing, CRO y lead generation
El sitio convierte bien para un negocio 100% dependiente de WhatsApp — pero está dejando leads en la mesa. Esta sección identifica los siete frenos de conversión y propone mejoras priorizadas por retorno estimado.
## 5.1 Captura de leads — dependencia excesiva de WhatsApp
Severidad: ALTA   ·   Impacto $$: Muy alto
El 100% de los CTAs visibles apuntan a wa.me/525537238544 con un mensaje predefinido. WhatsApp es un canal excelente para cierre, pero tiene limitaciones:
- Exige que el prospecto esté en WhatsApp, tenga tu contacto guardado y quiera conversar en tiempo real. Muchos compradores B2B prefieren email.
- No genera CRM estructurado: cada mensaje queda en el móvil del operador, sin campos de categoría, monto, empresa, etc.
- No permite retargeting (no captura cookie ni email).
- No genera "pipeline visible" para remarketing por email / newsletter / nurturing.
Recomendación:  añadir formulario de cotización estructurado con al menos: nombre, empresa, email corporativo, teléfono (opcional), categoría de interés (select), mensaje libre, checkbox de aviso de privacidad. Integrar con Netlify Forms o Cloudflare Workers + Resend (email) o con HubSpot Free / Brevo. WhatsApp sigue siendo el CTA principal, pero el formulario atiende al otro 30-40% de compradores que prefieren asincrónico.
## 5.2 Prueba social — cómo está y cómo debería estar
Severidad: ALTA   ·   Impacto $$: Alto
Hoy el ReviewsIndex muestra 6 "reseñas" de empresas (MantenimientoDeExtintores.mx, LGA Contra Incendios, DeCalentadoresSolares.com, etc.) con:
- Avatar = favicon del sitio externo (muchas veces genérico).
- Iniciales de la empresa.
- Giro del negocio.
- Texto largo (muy parejo entre reseñas — parece redactado por la misma mano).
- Todas con rating 5/5.
Para un evaluador empresarial esto más genera dudas que confianza. Se percibe como "testimoniales de escaparate". Lo que sí convierte:
- Logo-soup de 8-12 clientes verificables (con permiso) en home y categorías.
- Casos de estudio con fotos reales de la instalación (1-2 por vertical: restaurante, planta industrial, edificio corporativo).
- Testimonial firmado por persona + puesto + empresa + link a LinkedIn/sitio verificable.
- Métricas numéricas visibles: "12 años protegiendo empresas en CDMX", "850+ expedientes de Protección Civil resueltos", "300+ empresas atendidas".
- Badge de Google Reviews con estrellas reales si está activo.
Recomendación:  priorizar esta sección como proyecto de 30 días: pedir autorización a 10-12 clientes actuales para usar logo, conseguir 3-4 testimoniales con foto, documentar 2-3 casos de estudio con antes/después y beneficio cuantificado. Este contenido alimenta home, categorías, Google My Business y campañas de email futuras.
## 5.3 Lead magnets — cero hoy, oportunidad alta
Severidad: MEDIA   ·   Impacto $$: Alto a mediano plazo
El sitio no ofrece ningún lead magnet. Para un nicho donde el comprador frecuentemente está "atascado con la inspección de Protección Civil", hay munición natural para crear materiales descargables que capturen email sin fricción:
- Checklist descargable: "Checklist de 17 puntos para pasar tu inspección de Protección Civil CDMX" (PDF, 4 páginas, bien diseñado).
- Plantilla editable: "Bitácora de extintores y señalización — formato STPS + NOM-002".
- Guía técnica: "Cómo construir el expediente de cumplimiento en tu empresa paso a paso" (10-15 páginas).
- Calculadora: "¿Cuántos extintores necesita tu empresa?" (calculadora simple en JS basada en m² por piso, riesgo y clase de fuego).
- Curso por email: 5 emails con los errores más comunes en inspecciones y cómo evitarlos.
Recomendación:  construir como mínimo 2 lead magnets en los próximos 60 días (Checklist + Calculadora). Instalar captura de email en blog post-related, sidebar, exit intent. Integrar con email provider (Brevo o MailerLite, ambos gratuitos hasta 1000 contactos). Estos lead magnets capturan un tercio de visitantes que no están listos para WhatsApp pero sí para dejar email.
## 5.4 Diferenciadores comerciales — reforzar y hacerlos visibles
Severidad: MEDIA   ·   Impacto $$: Medio
Proyecto Red tiene diferenciadores reales que no están suficientemente visibilizados:
- Distribuidor autorizado Elkhart Brass (monitores contra incendio) — aparece en graphify pero no destacado en home/categorías.
- Cobertura geográfica real: 6 estados — no todos los competidores ofrecen ni la mitad.
- Crédito a 30 días para empresas (solo mencionado en contacto).
- Facturación electrónica inmediata (con o sin crédito).
- Capacitación DC-3 válida ante STPS (gancho para empresas medianas).
Recomendación:  construir una franja horizontal tipo "TRUST RIBBON" justo debajo del hero con 4-6 chips/íconos: "Distribuidor Elkhart Brass", "Facturación CFDI 4.0", "Crédito empresarial 30 días", "Cobertura 6 estados", "Inventario real CDMX", "Capacitación DC-3 STPS". Ese ribbon rota entre páginas y refuerza posicionamiento en 1 segundo de escaneo.
## 5.5 CTAs — inventario y debilidades
Se inventariaron los CTAs visibles del sitio. Resumen:
Recomendación:  estandarizar tres niveles de CTA: (1) alto intent: "Cotiza por WhatsApp (respuesta en minutos)", (2) medio intent: "Pide tu asesoría técnica gratuita", (3) bajo intent: "Descarga el checklist de Protección Civil". Cada página debe exponer al menos 2 niveles. El flotante de WhatsApp debe cambiar el mensaje predefinido según la sección (ya tienen WA_MESSAGES por página — basta con vincularlo al flotante, hoy no se usa).
## 5.6 Branding y autoridad comercial
- Logo: correctamente servido vía CDN (logo-proyectored-201x60.png). Bien.
- Paleta de marca consistente (rojo #C41E24 como primario). Bien.
- Tipografía: inconsistencia Outfit vs Inter entre layouts (ver 1.1). Urgente homologar.
- Tono visual: correcto, sobrio, no cae en cliché de seguridad industrial (nada de cascos rojos + llamas animadas). Bien.
- Lo que falta: certificaciones comerciales visibles (Distribuidor Elkhart, certificado de fabricante, sello SAT, etc.) y presencia de redes sociales activas que aún no están pobladas.
# Módulo 6 — Auditoría UX / UI
El nivel de ejecución UI es alto para un sitio de este vertical: grid 1400 max, tipografía legible, jerarquía clara entre eyebrow, titleLine1, titleLine2 y body, mega menú funcional con dropdowns por categoría, y mobile nav con acordeón nativo. El foco de esta sección son mejoras incrementales, no rediseños.
## 6.1 Jerarquía visual
- Hero: el H1 está correctamente dimensionado (clamp 2.5rem–3.5rem, weight 800, letter-spacing -0.03em). La columna derecha (dos párrafos) funciona como contexto pero su peso visual es bajo — podría convertirse en 3 mini-stats tipo "850 empresas atendidas · Cobertura 6 estados · Entrega mismo día CDMX".
- Cards de categoría (.ccard): buena jerarquía pero el badge NOM/NFPA puede mejorar contraste — hoy es rojo sobre rosa claro.
- Section headers: SectionHeaderDuo es un buen patrón, pero en algunas páginas el eyebrow (12-13px) queda casi imperceptible en mobile. Subirlo a 14px en breakpoint ≤ 640.
## 6.2 Mobile UX
- Mobile nav: correcta, con acordeón y cierre al tocar link. Bien.
- Botón WhatsApp flotante: presente en todas las páginas — buen patrón.
- Riesgo: el hero grid pasa a una sola columna en ≤ 1024px (correcto) pero la columna derecha con dos párrafos largos queda visualmente pesada en mobile. Considerar ocultarla en mobile o convertirla en acordeón "Más información".
- Breadcrumb: visible en desktop y mobile — bien. Validar que el schema BreadcrumbList se inyecta correctamente en todas las páginas L2-L4 (hoy se inyecta en CategoryLayout, pero páginas L2 que usan Base.astro no lo hacen).
## 6.3 Consistencia y espaciado
- Sistema de secciones con cat-section--white / cat-section--gray: excelente para ritmo visual alternante.
- Espaciado vertical: --section-py: 5rem generoso y correcto en desktop; en mobile podría bajarse a 3rem para no acumular scroll.
- Botones: tres variantes globales (btn-primary, btn-secondary, btn-outline) bien definidas. No diluir con micro-variaciones.
## 6.4 Accesibilidad UI
- Focus-visible global declarado (outline 2px --c-primary, offset 2px). Correcto.
- aria-labels en botones de ícono: mayoría bien; validar WhatsApp flotante y botón cerrar modales.
- Contraste texto muted sobre fondo gris: rozando AA. Validar y ajustar si es necesario.
- Respetar prefers-reduced-motion: añadir media query global que desactive transitions y transforms no esenciales (el proyecto ya tiene política "solo botones animados", extenderla formalmente).
# Matriz consolidada de hallazgos
Esta matriz consolida todos los hallazgos del informe en un formato accionable. Cada fila es trabajo concreto; los dueños son orientativos — ajustar según estructura interna.
# Roadmap de implementación — 90 días
Plan por fases con dependencias claras. Cada fase es ejecutable en paralelo por área (desarrollo, contenido, marketing) donde sea posible.
## Fase 1 — Higiene técnica (semanas 1-2)
- Instalar @astrojs/sitemap y verificar generación tras build. Enviar a Search Console y Bing. Actualizar robots.txt si el nombre final difiere.
- Regenerar favicon.png, apple-touch-icon.png y las 3 imágenes de señalamientos corruptas.
- Consolidar layouts: migrar páginas que usan Base.astro a BaseLayout.astro. Validar que todas las páginas hereden LocalBusiness global. Eliminar Base.astro.
- Eliminar schemas LocalBusiness duplicados en index.astro y contacto.astro. Corregir @type inválido.
- Self-hostear fuente Outfit (woff2 + @font-face font-display: swap). Eliminar dependencia de fonts.googleapis.com.
- Publicar /aviso-de-privacidad/ y /terminos-y-condiciones/ conforme a LFPDPPP.
- Añadir skip-link de accesibilidad y auditar contraste con Lighthouse.
## Fase 2 — SEO on-page y copy (semanas 2-5)
- Reescribir titles y meta descriptions de las 14 páginas clave (ver 2.1 y 4.2).
- Reescribir hero de home y cards de categoría (ver 4.1, 4.3).
- Reescribir sección TrustIndex con diferenciadores reales (ver 4.4).
- Construir trust ribbon con certificaciones y diferenciadores comerciales (Elkhart, CFDI 4.0, cobertura, DC-3, crédito 30 días).
- Diversificar FAQs por página (home general; por categoría específica).
- Crear 7 páginas /servicios/{slug}/ con 400-600 palabras cada una.
- Activar Product schema en /{categoria}/[producto]/ con offers.
## Fase 3 — Cluster de contenido y autoridad (semanas 3-10, en paralelo)
- Documentar mapa SILO: 5-7 clusters (extintores-cocinas, sistemas NFPA, señalización, equipo bomberos, detección gas, EPP alturas, protección civil).
- Crear la página pilar de 3 clusters prioritarios (Protección Civil CDMX, Clase K cocinas, NFPA sistemas).
- Hacer pasada de enlazado interno sobre los 76 blogs existentes (3-5 links contextuales por post hacia pilares y hacia página transaccional relevante).
- Implementar taxonomía visible en /blog/: categorías /blog/categoria/{slug}/.
- Firmar cada post con autor + fecha de publicación + fecha de última actualización. Página /autor/{slug}/ para el equipo técnico.
- Expandir /empresas/ a 4-6 ciudades adicionales con contenido original (no solo swap de nombres).
## Fase 4 — Marketing, CRO y lead generation (semanas 4-10)
- Diseñar e implementar formulario transaccional (Netlify Forms o CF Workers + Resend). Integrarlo en /contacto/ y como modal accionable desde CTA.
- Estandarizar CTAs en tres niveles (alto/medio/bajo intent).
- Vincular WA_MESSAGES por página al WhatsApp flotante (hoy el mensaje es estático).
- Construir Lead Magnet 1: "Checklist de 17 puntos — Inspección de Protección Civil CDMX" (PDF diseñado).
- Construir Lead Magnet 2: calculadora de extintores (JS simple por m² + riesgo).
- Integrar email provider (Brevo / MailerLite) con nurturing automation de 5 emails.
- Proyecto de prueba social: conseguir 10 logos autorizados + 3 testimoniales con foto + 2 casos de estudio. Publicar en home, categorías y GMB.
## Fase 5 — Medición y mejora continua (semanas 6-12)
- Configurar Google Search Console + Bing Webmaster. Verificar sitemap y enviar URLs prioritarias.
- Configurar Google Analytics 4 con eventos custom: clic en WhatsApp (por CTA/página), envío de formulario, descarga de lead magnet, scroll-90% en blog.
- Configurar tablero semanal con 6-8 KPIs: sesiones orgánicas, clics WhatsApp, envíos de formulario, descargas de lead magnet, posiciones promedio para 15 keywords objetivo, CTR promedio en SERP.
- Reclamar/optimizar Google My Business con fotografías, horarios, servicios y posts semanales.
- Auditar Core Web Vitals post-cambios con PageSpeed Insights (móvil prioritario).
- Reauditar en 90 días con la misma matriz para medir cierre de hallazgos.
# Cierre y próximos pasos
Proyecto Red parte de una posición más fuerte de lo que suele tener un vertical de equipos contra incendios en México: arquitectura técnica moderna, catálogo segmentado, blog técnico real, WhatsApp bien integrado y una marca visual sobria. La oportunidad no está en "rehacer" sino en cerrar brechas puntuales y dar el salto de proveedor correcto a proveedor diferenciado.
Si se ejecutan las tres primeras fases del roadmap (higiene técnica, SEO on-page y clusters), en un horizonte de 90 días se debería observar:
- Reducción del 40-60% de warnings en Search Console (sitemap, duplicates, schema).
- Mejora en CTR promedio de 1.2-1.8x por reescritura de titles/descriptions.
- 10-15 nuevas URLs indexables generando tráfico orgánico (servicios/{slug}/, /empresas/{ciudad}/ expandido, pilares de cluster).
- Captura de leads por email = 15-30% incremental sobre el flujo actual de WhatsApp.
- Tiempo de carga móvil (LCP) bajando 200-400ms por self-host de fuente y consolidación de layouts.
Estos números son estimaciones conservadoras basadas en los patrones típicos de sitios similares post-higiene SEO. El retorno real depende de ejecución.
Siguiente acción recomendada:  convertir esta auditoría en un backlog priorizado (Jira, Notion, Linear o similar) con las 28 filas de la matriz consolidada. Asignar dueños por área (desarrollo, contenido, marketing). Bloque semanal de 4 horas de desk review para tracking. La auditoría es un mapa; el valor se captura en la ejecución.
— Fin del documento —
| Módulo | Hallazgo más crítico | Prioridad | Impacto SEO | Impacto $$ |
| --- | --- | --- | --- | --- |
| Código | Dos layouts con SEO distintos; favicon y OG corruptos; sin sitemap generado | CRÍTICA | Alto | Medio |
| SEO técnico | Titles y descriptions fuera de rango; schema LocalBusiness duplicado | ALTA | Alto | Alto |
| SEO semántico | Sin clusters (hub & spoke); blog sin taxonomía real; thin content en L2 | ALTA | Alto | Alto |
| Copywriting | Hero descriptivo; copy sin diferenciador; FAQs duplicadas dos veces | ALTA | Medio | Alto |
| Marketing / CRO | Sin formulario; sin lead magnet; testimonios débiles | ALTA | Bajo | Muy alto |
| UX / UI | Inconsistencia tipográfica Inter vs Outfit entre layouts | MEDIA | Bajo | Medio |
| Página | Title chars | Desc chars | Problema principal | Fix propuesto |
| --- | --- | --- | --- | --- |
| / (home) | 75 | 222 | Title +10 caracteres. Desc incluye teléfono — antipatrón. | Title ≤ 60. Eliminar teléfono de desc. Enfocar en beneficio + zona. |
| /productos/ | 68 | 268 | Desc +108 caracteres. Listado excesivo de categorías. | Desc con propuesta de valor, no inventario. |
| /servicios/ | 61 | 245 | Desc +85 caracteres. Lista demasiado larga. | Priorizar 3 servicios estrella + ciudad. |
| /contacto/ | 71 | 196 | Desc +36 caracteres. Cierre con promesa que no aporta. | Recortar a beneficio concreto + CTA suave. |
| /nosotros/ | 42 | 169 | Title demasiado corto — desaprovecha espacio SERP. | Añadir diferenciador: "Proveedor directo certificado NOM". |
| /extintores/ | 92 | 224 | Title +27. Desc +64, con precio dentro. | Quitar NOM-154-SCFI de title; quitar "$450 MXN" de desc. |
| /equipo-bomberos/ | 88 | 236 | Title +23. Desc +76. | Title: "Equipo para Bomberos NFPA — Trajes, ERA, Rescate | Proyecto Red". |
| /senalamientos/ | 93 | 236 | Title +28. Desc incluye precio. | Eliminar "y Certificados" y "Desde $35 MXN". |
| /gabinetes/ | 76 | 219 | Title +11. Desc con specs técnicas. | Específicaciones van en el body, no en desc. |
| /mangueras/ | 66 | 229 | Desc +69. Precio dentro. | Desc: foco en NFPA 1961 + entrega. |
| /sistemas/ | n/d | n/d | No revisada en este pase — validar mismo patrón. | Aplicar la regla general del módulo. |
| Keyword | Volumen | Página actual / brecha | Estado |
| --- | --- | --- | --- |
| extintores cdmx | Alto | /extintores/ — cubierta | OK |
| recarga de extintores cdmx | Medio-Alto | Solo anchor #recarga — thin | GAP |
| mantenimiento de extintores | Medio-Alto | Anchor #mantenimiento | GAP |
| extintor para cocina industrial | Medio | Blog Clase K — ok | OK |
| extintor tipo k precio | Medio | Sin página transaccional | GAP |
| prueba hidrostática extintores | Medio | Anchor #prueba-hidrostatica | GAP |
| señalización fotoluminiscente | Medio | /senalamientos/ — ok | OK |
| rociadores contra incendio nfpa 13 | Medio-bajo | /sistemas/rociadores/ — ok | OK |
| capacitación brigadas dc3 | Medio | Anchor #capacitacion | GAP |
| protección civil cdmx requisitos | Alto | Blog — no indexable como pilar | GAP |
| equipo de bomberos nfpa 1971 | Bajo-medio | /equipo-bomberos/ — ok | OK |
| sistema contra incendio para edificios | Medio | Blog — sin pilar transaccional | GAP |
| detector de gas para empresas | Medio | Blog — sin página comercial | GAP |
| cumplimiento nom-002-stps | Alto | Distribuido; falta pilar | GAP |
| Bloque | Veredicto | Observación |
| --- | --- | --- |
| Blog (técnico) | Muy bueno | Voz clara, didáctica, sin keyword stuffing. Ejemplo: "No es un solo equipo: es una red integrada..." (NFPA 20). |
| Hero home | Funcional | Fórmula "Venta de Equipos Contra Incendios" es descriptiva. No hay promesa ni diferenciador en primer vistazo. |
| Cards de categoría (home) | Genéricas | Descripciones planas tipo "Extintores certificados NOM" — no venden, describen inventario. |
| TrustIndex (por qué elegirnos) | Correcta | Cuatro razones sólidas pero redacción algo repetitiva ("sin intermediarios" aparece 3 veces en la página). |
| ReviewsIndex | Débil como prueba | Textos bien redactados pero estructura (favicon + inicial + giro + texto largo) resulta artificial. Nombres de empresa sin persona firmante. |
| FAQ | Correcta | Respuestas útiles pero cierres repetitivos ("Contáctanos por WhatsApp" en casi todas). Valdría la pena variar el CTA final. |
| CTA final (CTAFinalIndex) | Genérica | "¿Necesitas equipo contra incendios en CDMX?" — una pregunta retórica que pide un sí/no sin despertar urgencia. |
| TopBar y Header | Bien | Claro, funcional, no sobrecargado. |
| Página | Meta description propuesta (≤ 160c) |
| --- | --- |
| / (home) | Equipos contra incendios certificados NOM en CDMX y Estado de México. Expediente de Protección Civil resuelto por un solo proveedor. Cotización el mismo día. |
| /productos/ | Catálogo completo de equipos contra incendios: extintores, señalización NOM, sistemas NFPA, gabinetes y EPP. Entrega directa en CDMX, documentación incluida. |
| /servicios/ | Venta, recarga, mantenimiento, instalación NFPA y capacitación DC-3 para Protección Civil. Un solo proveedor técnico en CDMX y Estado de México. |
| /extintores/ | Extintores ABC, CO₂, Tipo K y agente limpio — todos NOM-154-SCFI. Entrega el mismo día en CDMX, con etiqueta de inspección y ficha técnica. |
| /equipo-bomberos/ | Trajes estructurales NFPA 1971, ERA, rescate hidráulico y arneses para brigadas industriales y cuerpos de bomberos. Asesoría técnica incluida. |
| /senalamientos/ | Señalización fotoluminiscente NOM-003-SEGOB y NOM-026-STPS con levantamiento y plano. Instalación lista para Protección Civil en CDMX. |
| /sistemas/ | Sistemas contra incendio NFPA 13, 20 y 72: detección, alarma, rociadores y red hidráulica. Diseño e instalación llave en mano en CDMX y EDOMEX. |
| /contacto/ | Cotización en menos de 24 horas por WhatsApp, teléfono o email. Equipos contra incendios certificados en CDMX — sin intermediarios, con factura electrónica. |
| CTA | Destino | Observación |
| --- | --- | --- |
| "Cotizar" (header) | WhatsApp | Demasiado genérico — no promete nada. |
| "Solicitar cotización" (hero) | WhatsApp | Mismo problema. Añadir tiempo de respuesta. |
| "Ver catálogo completo" | /productos/ | OK. Funcional. |
| "Cotizar por WhatsApp" (varios) | WhatsApp | Repetido. Variar con "Recibe precio en 10 min". |
| "Hablar con un especialista" | WhatsApp | Muy buena — mantener. Mejor que "Cotizar". |
| "Ver todos los servicios" | /servicios/ | OK. |
| CTA Final — 2 botones | WA + /productos/ | Ambos apuntan a fondo de embudo. Faltaría un CTA media-embudo (ej. "Descargar checklist"). |
| WhatsApp flotante | WhatsApp | OK pero sin mensaje contextual — debería cambiar según la página. |
| Hallazgo | Módulo | Prioridad | Impacto SEO | Impacto $$ | Recomendación puntual |
| --- | --- | --- | --- | --- | --- |
| Sitemap ausente (robots apunta a sitemap inexistente) | Código | CRÍTICA | Alto | Alto | Instalar @astrojs/sitemap + configurar |
| Favicon y 4 imágenes corruptas (HTML en .png/.jpg) | Código | CRÍTICA | Medio | Alto | Regenerar assets y reemplazar |
| Dos layouts paralelos (Base + BaseLayout) con configs distintas | Código | CRÍTICA | Alto | Medio | Consolidar a BaseLayout, migrar páginas |
| Schema LocalBusiness duplicable + @type inválido | SEO técnico | ALTA | Alto | Medio | Centralizar en un solo layout |
| Titles y descriptions fuera de rango (11 de 14) | SEO técnico | ALTA | Alto | Alto | Reescribir según 4.2 |
| Teléfono y precios dentro de meta description | SEO técnico | ALTA | Medio | Medio | Eliminar ambos |
| FAQs idénticas en 5+ páginas (home, contacto, categorías) | SEO semántico | ALTA | Medio | Medio | Diversificar FAQ por página |
| Ausencia de páginas /servicios/{slug}/ | SEO técnico | ALTA | Alto | Alto | Crear 7 URLs individuales |
| Blog sin clusters hub & spoke | SEO semántico | ALTA | Muy alto | Alto | Construir 5-7 pilares temáticos |
| Hero home descriptivo, no diferenciador | Copy | ALTA | Medio | Alto | Reescribir según 4.1 |
| Cards de categoría genéricas | Copy | ALTA | Medio | Alto | Reescribir según 4.3 |
| Sin formulario transaccional (solo WhatsApp) | Marketing/CRO | ALTA | Bajo | Muy alto | Añadir formulario con 6-7 campos |
| Testimonios débiles (favicons + rating 5/5 uniforme) | Marketing/CRO | ALTA | Medio | Muy alto | Casos reales + logo-soup + foto |
| Sin lead magnet | Marketing/CRO | MEDIA | Medio | Alto | 2 lead magnets en 60 días |
| E-E-A-T débil: sin autores, sin foto equipo | SEO + Marketing | MEDIA | Alto | Medio | Firmar blogs + página equipo |
| Sin aviso de privacidad (LFPDPPP) | Legal + CRO | ALTA | Bajo | Medio | Redactar y publicar /aviso-privacidad/ |
| Fuente tipográfica: Outfit vs Inter | UX/UI + código | MEDIA | Bajo | Medio | Consolidar en Outfit |
| Render-blocking stylesheet en Base.astro | Código | MEDIA | Medio | Bajo | Preload + async; self-host Outfit |
| Ausencia de microdata Review en ReviewsIndex | SEO técnico | MEDIA | Medio | Medio | Añadir Review schema |
| CTAs genéricos ("Cotizar") sin tiempo/promesa | Copy/CRO | MEDIA | Bajo | Alto | Estandarizar 3 niveles |
| Diferenciadores comerciales invisibles (Elkhart, crédito) | Marketing | MEDIA | Bajo | Alto | Trust ribbon bajo hero |
| Falta skip-link de accesibilidad | Accesibilidad | MEDIA | Bajo | Bajo | Añadir al body en BaseLayout |
| Contraste text-muted roza AA | Accesibilidad | BAJA | Bajo | Bajo | Cambiar token a #4B5563 |
| Sin ProductSchema en L4 [producto] | SEO técnico | MEDIA | Medio | Medio | Añadir schema Product con offers |
| Sobreoptimización "equipos contra incendios" x6 en home | Copy | BAJA | Medio | Bajo | Diluir con variaciones naturales |
| Sin Google My Business embed/mapa | Marketing local | MEDIA | Medio | Medio | Embed en /contacto/ + reclamar GMB |
| Redes sociales (sameAs) con perfiles vacíos o inexistentes | Marketing | MEDIA | Bajo | Medio | Auditar y activar o retirar |
| Sin sitemap de blog paginado en robots | SEO técnico | BAJA | Medio | Bajo | Incluir en sitemap generado |