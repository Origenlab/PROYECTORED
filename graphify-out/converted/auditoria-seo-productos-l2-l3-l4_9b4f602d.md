<!-- converted from auditoria-seo-productos-l2-l3-l4.docx -->







PROYECTO RED
AUDITORÍA INTEGRAL SEO,
MARKETING Y ARQUITECTURA
Sección de Productos L2 · L3 · L4


Análisis profesional de SEO técnico, SEO on-page, SEO semántico, marketing de contenidos, copywriting comercial, arquitectura de conversión, homologación estructural y consistencia técnica en Astro + Markdown.

Alcance: 49 productos L4, 8 categorías L3, 1 catálogo L2
Fecha: 12 de abril de 2026
Sitio: proyectored.com.mx

# 1. RESUMEN EJECUTIVO
Este documento presenta los resultados de una auditoría integral realizada sobre la sección completa de productos del sitio proyectored.com.mx, abarcando los niveles L2 (catálogo general), L3 (8 categorías) y L4 (49 productos individuales). El análisis cubre SEO técnico, SEO on-page, SEO semántico, marketing de contenidos, arquitectura de conversión, homologación estructural y consistencia técnica en Astro.

### Estado general del proyecto
El proyecto presenta una base arquitectónica sólida. La homologación de plantillas entre L2, L3 y L4 está bien resuelta a nivel estructural, con componentes reutilizables (SectionHeaderDuo, .ccard, CategoryLayout) y un sistema de datos centralizado en TypeScript. Sin embargo, existen brechas significativas en contenido SEO, interlinking, profundidad de copy comercial y completitud de datos que impiden que las páginas compitan a nivel profesional.



# 2. HALLAZGOS CRÍTICOS
Los siguientes problemas representan las brechas más significativas detectadas y deben resolverse con prioridad antes de cualquier otra optimización.

## 2.1 FAQ vacías en el 100% de páginas L4
Severidad: CRÍTICA — Afecta 49 páginas de producto
Las 49 páginas L4 del sitio tienen el campo faqItems declarado en su interfaz TypeScript pero completamente vacío (0 preguntas en cada producto). Esto significa que ninguna página de producto individual genera el schema FAQPage de Google, y ninguna despliega contenido de preguntas frecuentes específicas del producto.
Las páginas L3 sí tienen FAQ bien implementadas (7-8 preguntas cada una con Schema.org), pero al bajar al nivel L4 se pierde completamente esta capa de contenido.

Impacto SEO:
- Pérdida de rich snippets de FAQ en Google para búsquedas de producto específicas
- Pérdida de long-tail keywords que capturan intención transaccional (ej: ¿cuánto cuesta un extintor de CO₂ de 10 kg?)
- Menor tiempo en página y profundidad de contenido indexable
- Oportunidad perdida de posicionamiento en IA conversacional (Gemini, ChatGPT, Perplexity)

Recomendación:
Crear mínimo 6 FAQ específicas por cada producto L4, orientadas a intención transaccional e informacional. Las preguntas deben ser únicas por producto (no copiar las de L3) y cubrir: precio/costo, diferencias con productos similares, certificaciones específicas, mantenimiento, instalación y documentación incluida.

## 2.2 Interlinking entre categorías: completamente ausente
Severidad: CRÍTICA — Arquitectura de silos sin puentes
La estructura actual funciona como 8 silos verticales independientes. Cada categoría L3 enlaza hacia abajo a sus productos L4 y hacia arriba al catálogo L2, pero no existe ningún enlace horizontal entre categorías relacionadas.

Ejemplos críticos de enlaces faltantes:
- Extintores → Gabinetes (el gabinete es el complemento natural del extintor)
- Extintores → Señalamientos (la señal de extintor acompaña siempre al equipo)
- Mangueras → Sistemas Contra Incendio (componentes del mismo sistema hidráulico)
- Equipo Bomberos → Primeros Auxilios (equipamiento complementario de brigada)
- Sistemas → Mangueras + Gabinetes (infraestructura compartida)
- Equipo Seguridad → Primeros Auxilios (programa STPS integrado)

Impacto SEO:
- Google no puede descubrir relaciones semánticas entre categorías
- El PageRank no fluye horizontalmente — cada silo compite de forma aislada
- El usuario que necesita gabinete + extintor + señalización tiene que volver a /productos/ para encontrar cada cosa
- Pérdida de oportunidades de venta cruzada y aumento de ticket promedio

Recomendación:
Implementar un componente ProductosRelacionados o una sección "Complementa tu compra" en cada L3 y L4 que enlace a 3-4 categorías o productos de otras categorías. Usar un mapa de relaciones semánticas definido en datos para mantener consistencia.

## 2.3 Sección cuandoUsar vacía en Bomberos y Señalamientos
Severidad: ALTA — Afecta 13 páginas L4
Las categorías Equipo para Bomberos (7 productos) y Señalamientos (6 productos) no tienen contenido en la sección cuandoUsar de sus páginas L4. Las 6 categorías restantes sí tienen 6 escenarios de uso por producto.
Esto genera una asimetría visible: un usuario que visita Extintores > Polvo Seco encuentra sección de aplicaciones, pero al visitar Bomberos > Trajes Estructurales no la encuentra. Rompe la expectativa de homologación.

Recomendación: Crear 6 escenarios de uso para cada producto de estas 2 categorías, siguiendo el mismo patrón de label + desc que usan las demás.

## 2.4 Blog completamente desconectado de productos
Severidad: ALTA — 60+ artículos sin enlaces a productos
El blog tiene más de 60 artículos publicados sobre temas de seguridad contra incendios, pero ninguno enlaza a páginas de producto. A su vez, ninguna página de producto enlaza a artículos de blog relevantes. Son dos ecosistemas completamente aislados.

Impacto:
- El blog no funciona como canal de descubrimiento de productos
- Las páginas de producto no reciben autoridad del contenido informacional del blog
- Se pierde la estrategia de funnel: blog (awareness) → categoría (consideration) → producto (conversion)


# 3. AUDITORÍA SEO DETALLADA POR NIVEL
## 3.1 Nivel L2 — /productos/
### SEO técnico
- Title: "Equipos Contra Incendios Certificados en CDMX | Catálogo Proyecto Red" — 73 caracteres, bien optimizado con keyword principal + geolocalización + marca
- Meta description: Incluye cantidad de productos, certificaciones NOM/NFPA, entrega mismo día, ubicación — cumple intención comercial
- Canonical: Correctamente definido en pageUrl
- JSON-LD: BreadcrumbList + OfferCatalog + FAQPage — implementación completa
- Open Graph + Twitter Cards: Correctos con imagen dedicada

### Contenido y copy
El Hero L2 tiene 2 párrafos en columna derecha con 44 y 48 palabras respectivamente. Los textos son funcionales y comunican la propuesta de valor central: proveedor único, sin intermediarios, entrega mismo día, documentación incluida.

Problemas detectados:
- Los párrafos son correctos pero podrían tener más profundidad semántica — actualmente no mencionan las 8 categorías por nombre, lo cual ayudaría al posicionamiento de keywords secundarias
- El CatalogoProductos contiene buen contenido descriptivo por categoría (body text + desc por cada una de las 8), pero las descripciones cortas de las tarjetas de producto individuales podrían ampliarse
- No hay texto introductorio entre el hero y el catálogo que refuerce la intención de búsqueda "equipos contra incendios"

Oportunidades:
- Añadir un párrafo SEO debajo de CtaBar que nombre las 8 categorías y refuerce keywords: "equipos contra incendios", "proveedor certificado CDMX", "extintores", "sistemas contra incendio"
- Cada categoría dentro de CatalogoProductos debería tener un párrafo de 2-3 oraciones más allá del desc actual para reforzar indexación

## 3.2 Nivel L3 — 8 categorías
### Estructura general (homologada)
Las 8 categorías L3 están correctamente homologadas siguiendo el template canónico de extintores: Breadcrumb > Hero > CtaBar > Catálogo > Guía > TrustIndex > Normas > FAQ > CTAFinal. Todas usan SectionHeaderDuo, .ccard pattern, accordion FAQ con Schema.org, y guía de 4 escenarios.

### Análisis de héroes L3
Todos los héroes L3 siguen el mismo patrón de 2 columnas con badge, H1, subtitle y 2 párrafos en columna derecha. Este es un hallazgo positivo — la estructura está bien homologada.


Los héroes L3 están en buen estado. Cada uno tiene 2 párrafos con entre 44 y 66 palabras. Los textos son humanizados, incluyen keywords naturales, mencionan certificaciones, precios de referencia y la propuesta de valor. Este nivel NO requiere reescritura urgente, pero sí se puede reforzar.

Oportunidades de mejora para héroes L3:
- Ampliar cada párrafo a 80-100 palabras para mayor profundidad semántica sin perder legibilidad
- Incluir más variantes de keywords long-tail en cada párrafo (ej: en extintores, mencionar "extintor para oficina", "extintor para restaurante")
- Añadir una mención al servicio post-venta dentro del hero para reforzar conversión
- Asegurar que cada hero mencione la zona geográfica (CDMX, Estado de México) en al menos uno de los dos párrafos

### SEO on-page L3 — Análisis por categoría
A continuación se evalúa cada categoría L3 en sus elementos SEO específicos:


Observaciones clave de SEO on-page L3:
- La consistencia FAQ entre categorías NO es exacta: Extintores y Bomberos tienen 8 preguntas; las demás tienen 7. Recomendación: homologar a 8 en todas.
- Todas las páginas incluyen precio de referencia en el hero, lo cual es excelente para SEO comercial y CTR en SERPs
- El Schema.org está bien implementado: ItemList, FAQPage, BreadcrumbList y CollectionPage en cada L3
- Las Guías de 4 escenarios son contenido de alto valor para SEO semántico — atacan intención informacional-comercial
- Los bloques de Normas refuerzan E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

## 3.3 Nivel L4 — 49 productos individuales
### Datos consolidados
Se analizaron los 49 productos distribuidos en 8 data files TypeScript. A continuación se presenta el estado del contenido por categoría:


Problemas específicos detectados en L4:

- FAQ: 0 en 49 productos. Es el problema más crítico. Cada producto necesita mínimo 6 FAQ únicas orientadas a long-tail transaccional.
- cuandoUsar vacío en 13 productos. Bomberos (7) y Señalamientos (6) no tienen esta sección. Deben crearse para mantener homologación.
- Variantes incompletas. Señalamientos (0/6), Primeros Auxilios (0/5) y Bomberos (3/7) no tienen variantes. Evaluar si aplica para cada categoría o documentar que es intencional.
- metaDesc fuera de rango. 13 productos (especialmente en Bomberos) tienen meta descriptions de 170-199 caracteres, superando el límite recomendado de 155-160. Se truncarán en SERPs.
- heroDescRight inconsistente. Extintores y Bomberos usan 2 párrafos; las demás categorías usan 3. Aunque funcional, la inconsistencia puede confundir en mantenimiento.

### Meta titles L4 — Evaluación
El rango de caracteres en metaTitle va de 54 a 90 caracteres. El óptimo para Google es 50-60 caracteres. Las categorías con mayor exceso son Señalamientos (promedio 78 chars) y Sistemas (promedio 72 chars).

Recomendación: Acortar los titles que superen 65 caracteres manteniendo keyword principal + marca. El patrón recomendado es: "[Producto] [Certificación] | Proyecto Red CDMX" (máx 60 chars).


# 4. ANÁLISIS DE MARKETING Y CONVERSIÓN
## 4.1 Fortalezas actuales
- Precio de referencia visible en todos los héroes (excelente para confianza y CTR)
- Integración WhatsApp con mensajes pre-llenados por producto (reduce fricción)
- Badge con certificaciones en cada hero (refuerza autoridad)
- Guías de selección por escenario (contenido consultivo que genera confianza)
- Bloques de normas (refuerzan E-E-A-T y posicionamiento técnico)
- TrustIndex con indicadores de confianza
- CTA dual (WhatsApp + ver catálogo) en cada página

## 4.2 Debilidades detectadas
### CTAs repetitivos y poco variados
Prácticamente todos los CTAs del sitio usan la misma fórmula: "Cotizar por WhatsApp". Si bien es funcional, la falta de variación reduce el impacto persuasivo a medida que el usuario navega. No hay CTAs contextuales que se adapten a la sección donde aparecen.

Recomendación:
- En la sección de características: "Consulta especificaciones técnicas"
- En la sección de cuándo usar: "Solicita diagnóstico gratuito para tu instalación"
- En productos con variantes: "Ayúdame a elegir el modelo correcto"
- En FAQ: "Aún tienes dudas? Habla con un asesor técnico"

### Falta de diferenciadores explícitos
Aunque Proyecto Red tiene ventajas competitivas claras (proveedor directo, entrega mismo día, asesoría incluida, documentación para Protección Civil), estos argumentos se mencionan de forma dispersa sin un bloque dedicado que los consolide.

Recomendación: Crear un componente "Por qué Proyecto Red" específico para L4 con 4-5 diferenciadores en formato visual (icono + título + descripción corta). El TrustIndex actual cumple parcialmente esta función pero es genérico.

### Ausencia de prueba social específica
No se detectan testimonios, casos de éxito o números de clientes atendidos por categoría. La página principal tiene una sección de reseñas (ReviewsIndex), pero esta no se replica ni adapta en L3/L4.

Recomendación: Incluir al menos un testimonio o dato de confianza contextual por categoría (ej: "Más de 200 empresas en CDMX confían en nuestros extintores" o un review real de cliente).

### Ausencia de urgencia y escasez
Los textos comerciales no utilizan triggers de urgencia ("Entrega hoy si cotizas antes de las 2 PM"), exclusividad ("Proveedor autorizado Elkhart Brass en México") ni escasez ("Stock limitado en cilindros ERA de 60 min"). Estos elementos pueden mejorar la tasa de conversión sin ser invasivos cuando se usan con moderación.


# 5. INTERLINKING Y ARQUITECTURA SEO
## 5.1 Arquitectura actual: Hub-and-Spoke con silos
La arquitectura actual funciona como un modelo hub-and-spoke donde /productos/ es el hub central y cada categoría L3 es un spoke independiente que baja a sus L4. No existen puentes horizontales entre spokes.

Flujo actual de enlaces:
- L1 → L2: Correcto (CategoriasIndex enlaza a /productos/)
- L2 → L3: Correcto (CatalogoProductos enlaza a las 8 categorías con 40+ enlaces a subcategorías)
- L3 → L4: Correcto (cada catálogo L3 enlaza a todos sus productos)
- L4 → L3: Correcto (breadcrumb + botón 'ver catálogo')
- L4 → L4 misma categoría: Correcto (sección OtrosProductos)
- L3 → L3 otra categoría: AUSENTE
- L4 → L4 otra categoría: AUSENTE
- Blog → Productos: AUSENTE
- Productos → Blog: AUSENTE
- Sectores → Productos: PRESENTE (buena implementación)
- Productos → Sectores: AUSENTE

## 5.2 Mapa de interlinking recomendado
A continuación se propone un mapa de relaciones semánticas para implementar enlaces cruzados:


## 5.3 Canibalización de keywords
Se detectó riesgo bajo de canibalización entre L3 y L4, ya que los titles están bien segmentados: L3 usa términos genéricos de categoría ("venta de extintores") y L4 usa términos específicos ("extintor de polvo seco ABC"). Sin embargo:

- Riesgo medio: "Extintor ABC" puede competir entre la página L4 de polvo-seco y la L4 de abc-multiproposito. Diferenciar claramente en titles y H1.
- Riesgo bajo: Las meta descriptions de L3 y L4 comparten keywords como "certificados NOM" y "CDMX", pero Google contextualiza por longitud de contenido.
- Sin riesgo: Las FAQ de L3 y L4 no se canibalizan porque L4 actualmente no tiene FAQ (el problema es la ausencia, no la duplicación).


# 6. HOMOLOGACIÓN TÉCNICA: ASTRO + MARKDOWN
## 6.1 Arquitectura Astro — Estado actual
La arquitectura está bien construida con separación clara de responsabilidades:

- Layouts: Base.astro (shell HTML) y CategoryLayout.astro (L3/L4 wrapper) funcionan como contenedores correctamente anidados.
- Componentes: Organizados en sections/ y ui/. SectionHeaderDuo es el componente de cabecera universal. .ccard es el patrón de tarjetas.
- Datos: Centralizados en src/data/ con archivos TypeScript tipados por categoría. PRODUCT_CATEGORIES en site.ts como fuente única de verdad.
- Estilos: CSS global en components.css y pages.css. Scoped permitido solo en secciones con layout único.
- Generación estática: getStaticPaths() genera rutas L4. Build completamente estático (sin runtime).

## 6.2 Problemas técnicos detectados
### 6.2.1 Dos layouts base con funcionalidad solapada
Existen Base.astro y BaseLayout.astro. BaseLayout tiene mejoras de SEO (preconnect, Twitter Cards, slot para structured data) que Base.astro no tiene. Algunas páginas usan uno y otras el otro.

Recomendación: Consolidar en un solo layout base que tenga todas las funcionalidades. Migrar las páginas que usan Base.astro a BaseLayout.astro y eliminar la duplicación.

### 6.2.2 CSS de FAQ duplicado en cada componente
Cada FaqCategoría.astro tiene su propio bloque <style> con estilos prácticamente idénticos para el accordion, el formulario sticky y el grid. Esto viola la regla del proyecto de no duplicar estilos compartidos.

Recomendación: Extraer los estilos comunes de FAQ a un archivo faq.css global (o integrarlo en pages.css) y dejar solo estilos únicos en scoped.

### 6.2.3 Contenido Markdown infrautilizado
Existe una colección de contenido en src/content/productos/ con 19 archivos .md y un schema Zod definido en content.config.ts. Sin embargo, las páginas L4 actualmente NO consumen esta colección — usan exclusivamente los datos de los archivos TypeScript en src/data/.

Esto crea confusión arquitectónica: los archivos .md existen pero no se renderizan en ninguna página. Además, solo cubren 19 de los 49 productos.

Recomendación: Decidir una estrategia clara: (a) eliminar la colección Markdown si no se va a usar, o (b) migrar el contenido extenso (bodyPara, FAQ answers, guías) a Markdown para facilitar edición por no-desarrolladores. La opción B es más escalable a largo plazo.

### 6.2.4 Inconsistencia en heroDescRight
Extintores y Bomberos generan 2 párrafos en el hero L4, mientras que Gabinetes, Mangueras, Sistemas, Primeros Auxilios y Equipo Seguridad generan 3. Aunque el componente Hero.astro renderiza un array dinámico y funciona correctamente con ambas configuraciones, esta diferencia debería documentarse o unificarse.

### 6.2.5 Normas: variación menor en template
NormasPrimerosAuxilios y NormasEquipoSeguridad usan una estructura de card ligeramente diferente (.norma-card__codigo stacked) comparada con las otras 6 categorías. Funciona correctamente pero rompe la homologación visual si se comparan lado a lado.

## 6.3 Oportunidades de optimización técnica
- Crear un componente FaqSection reutilizable que reciba faqItems como prop, eliminando la duplicación de 8 componentes FAQ idénticos en estructura
- Crear un componente GuiaSection reutilizable con datos como prop, reduciendo 8 componentes Guía a 1
- Crear un componente NormasSection parametrizado que acepte array de normas
- Mover las relaciones de interlinking a un archivo de datos (relationships.ts) consumido por componentes
- Implementar validación en build-time que verifique que cada producto L4 tiene faqItems, cuandoUsar y características completas


# 7. SEO SEMÁNTICO Y OPORTUNIDADES AVANZADAS
## 7.1 Rich snippets y datos estructurados
El sitio ya implementa JSON-LD para LocalBusiness (global), BreadcrumbList, FAQPage, ItemList y CollectionPage. Esta es una implementación superior al promedio del sector.

Oportunidades faltantes:
- Product schema en L4: No se detecta schema Product con offers/price en las páginas de producto individual. Implementar permitiría rich results de producto con precio en Google.
- AggregateRating: Si se recopilan reseñas reales, este schema puede generar estrellas en SERPs.
- HowTo schema: Las guías de selección ("Cómo elegir el extintor correcto") podrían usar este schema para rich results de instrucciones.
- VideoObject: Si se crean videos de producto, este schema maximiza visibilidad en búsqueda de video.

## 7.2 Oportunidades de contenido para posicionamiento en IA
Los buscadores con IA (Google AI Overviews, Perplexity, ChatGPT search) priorizan contenido que responda preguntas directas con autoridad. El sitio tiene buena base pero puede optimizarse:

- Crear tablas comparativas entre tipos de producto (ej: "Extintor PQS vs CO₂ vs Agente Limpio: cuál elegir"). Las tablas estructuradas son altamente citadas por IA.
- Añadir definiciones breves al inicio de cada página L4 ("Un extintor de polvo seco ABC es...") que funcionen como featured snippet.
- Expandir FAQ con preguntas "vs" y comparativas que la IA puede referenciar.
- Crear contenido de tipo "guía definitiva" para las 3 categorías con mayor volumen de búsqueda (extintores, señalamientos, sistemas).

## 7.3 Keywords long-tail no atacadas
Basado en el análisis del contenido actual, estas familias de keywords no están siendo atacadas y representan oportunidad:

- "requisitos protección civil [tipo de negocio]" — crear landing pages por sector integrando productos
- "diferencia entre [producto A] y [producto B]" — crear contenido comparativo
- "precio [producto] en México 2026" — asegurar que cada L4 tenga precio visible y indexable
- "cómo instalar [producto]" — contenido de tipo tutorial que enlace a servicio de instalación
- "mantenimiento [producto] cada cuánto" — FAQ específica en L4 enlazando a servicio de mantenimiento
- "[producto] certificado NOM para [aplicación]" — combinar producto + uso + certificación


# 8. PLAN DE ACCIÓN PRIORIZADO
A continuación se presentan las acciones recomendadas organizadas por prioridad de impacto:

## Prioridad 1 — Crítica (resolver primero)

## Prioridad 2 — Alta (resolver después de P1)

## Prioridad 3 — Media (mejora continua)

## Prioridad 4 — Evolución (optimización avanzada)


# 9. CONCLUSIÓN

El proyecto Proyecto Red tiene una base arquitectónica y de homologación que está por encima del promedio del sector en México para empresas de equipos contra incendios. La implementación en Astro es limpia, los componentes son reutilizables, el sistema de datos en TypeScript está bien tipado, y la estructura L2/L3/L4 es coherente.

Sin embargo, para que las páginas de productos compitan profesionalmente en buscadores, IA conversacional y conversión comercial, es necesario resolver las brechas críticas identificadas en esta auditoría. Las tres prioridades inmediatas son claras:

1. Llenar las FAQ de los 49 productos L4 — Es la brecha más grande. Sin FAQ, las páginas L4 pierden posicionamiento long-tail, rich snippets y profundidad de contenido indexable.

2. Implementar interlinking entre categorías — Los 8 silos deben conectarse para que Google descubra relaciones, el PageRank fluya horizontalmente y el usuario encuentre productos complementarios sin regresar al catálogo.

3. Completar cuandoUsar en Bomberos y Señalamientos — 13 páginas sin esta sección rompen la homologación y pierden contenido de alto valor para SEO semántico.

Una vez resueltas estas tres prioridades, las acciones de Prioridad 2 (schema Product, recorte de metas, homologación FAQ) y Prioridad 3 (ampliación de héroes, consolidación de layouts, diversificación de CTAs) llevarán el proyecto a un nivel realmente competitivo y profesional.

El objetivo final es que cada página de producto sea una entidad completa, autónoma y optimizada: con contenido profundo, FAQ únicas, enlaces cruzados, schema enriquecido, copy comercial persuasivo y una experiencia de usuario que transmita autoridad técnica y facilite la conversión.



Documento generado el 12 de abril de 2026 como parte de la auditoría integral de Proyecto Red.
| Área evaluada | Estado | Criticidad | Impacto | Prioridad |
| --- | --- | --- | --- | --- |
| Arquitectura Astro / Plantillas | ✓ Bien | Baja | Alto | Mantenimiento |
| Homologación visual L3 | ✓ Bien | Baja | Alto | Mantenimiento |
| SEO técnico (schemas, meta, sitemap) | ✓ Bien | Media | Alto | Ajustes puntuales |
| Hero texts L3 (extensión y calidad) | ⚠ Aceptable | Media | Alto | Reforzar |
| Hero texts L4 (profundidad SEO) | ⚠ Variable | Alta | Alto | Prioridad alta |
| FAQ en páginas L4 | ✗ Vacío | Crítica | Muy alto | Urgente |
| Interlinking entre categorías | ✗ Ausente | Crítica | Muy alto | Urgente |
| Contenido cuandoUsar (2 categorías) | ✗ Vacío | Alta | Alto | Prioridad alta |
| Variantes (3 categorías incompletas) | ⚠ Parcial | Media | Medio | Media |
| Marketing de conversión / CTAs | ⚠ Básico | Media | Alto | Reforzar |
| Blog-Producto conexión | ✗ Nula | Alta | Alto | Prioridad alta |
| Categoría | H1 | P1 words | P2 words | Evaluación |
| --- | --- | --- | --- | --- |
| Productos (L2) | Catálogo de Equipos Contra Incendios | 44 | 48 | Correcto |
| Extintores | Venta de Extintores Contra Incendios | 45 | 46 | Correcto |
| Eq. Bomberos | Equipo para Bomberos Certificado NFPA | 52 | 44 | Correcto |
| Señalamientos | Señalamientos de Emergencia Certificados | 54 | 52 | Bueno |
| Gabinetes | Gabinetes Contra Incendio Certificados | 63 | 51 | Bueno |
| Mangueras | Mangueras y Herrajes Contra Incendio | 66 | 53 | Bueno |
| Sistemas | Sistemas Contra Incendio NFPA | 60 | 49 | Correcto |
| Primeros Aux. | Equipo de Primeros Auxilios | 59 | 45 | Correcto |
| Eq. Seguridad | Equipo de Seguridad Industrial | 65 | 55 | Bueno |
| Categoría | Productos | FAQ | Guía | Normas | Schema | Precio ref. |
| --- | --- | --- | --- | --- | --- | --- |
| Extintores | 10 tipos | 8 items | 4 escenarios | 6 normas | 4 schemas | $450 MXN |
| Eq. Bomberos | 5 cat. | 8 items | 4 escenarios | 6 normas | 4 schemas | $18,000 MXN |
| Señalamientos | 6 cat. | 8 items | 4 escenarios | 5 normas | 4 schemas | $35 MXN |
| Gabinetes | 4 tipos | 7 items | 4 escenarios | 6 normas | 4 schemas | $650 MXN |
| Mangueras | 8 prod. | 7 items | 4 escenarios | 6 normas | 4 schemas | $6,500/piso |
| Sistemas | 5 sub. | 7 items | 4 escenarios | 6 normas | 4 schemas | $45,000 inst. |
| Primeros Aux. | 5 líneas | 7 items | 4 escenarios | 6 normas | 4 schemas | $1,800+ |
| Eq. Seguridad | 8 líneas | 7 items | 4 escenarios | 6 normas | 4 schemas | $800-8,000 |
| Categoría | Prod. | Variantes | Caract. | CuándoUsar | FAQ | heroDescRight |
| --- | --- | --- | --- | --- | --- | --- |
| Extintores | 10 | ✓ Sí | 6/prod | ✓ 6/prod | ✗ 0 | 2 párrafos |
| Gabinetes | 4 | ✓ Sí | 6/prod | ✓ 6/prod | ✗ 0 | 3 párrafos |
| Bomberos | 7 | ⚠ 3/7 | 6/prod | ✗ 0 | ✗ 0 | 2 párrafos |
| Señalamientos | 6 | ✗ 0 | 6/prod | ✗ 0 | ✗ 0 | 2 párrafos |
| Mangueras | 6 | ✓ Sí | 6/prod | ✓ 6/prod | ✗ 0 | 3 párrafos |
| Sistemas | 5 | ✓ Sí | 6/prod | ✓ 6/prod | ✗ 0 | 3 párrafos |
| Primeros Aux. | 5 | ✗ 0 | 6/prod | ✓ 6/prod | ✗ 0 | 3 párrafos |
| Eq. Seguridad | 6 | ✓ Sí | 6/prod | ✓ 6/prod | ✗ 0 | 3 párrafos |
| Categoría origen | Enlazar a (L3) | Justificación |
| --- | --- | --- |
| Extintores | Gabinetes, Señalamientos, Eq. Seguridad | Gabinete protege extintor; señal indica ubicación; EPP para brigada |
| Gabinetes | Extintores, Mangueras, Señalamientos | El gabinete aloja extintor o manguera; la señal lo identifica |
| Señalamientos | Extintores, Sistemas, Primeros Aux. | Señala ubicación de extintores, alarmas y botiquín |
| Mangueras | Sistemas, Gabinetes | Componente del sistema hidráulico; se aloja en gabinete |
| Sistemas | Mangueras, Gabinetes, Señalamientos | Red hidráulica completa + señalización de alarma |
| Eq. Bomberos | Extintores, Primeros Aux., Eq. Seguridad | Equipamiento complementario de brigada |
| Primeros Aux. | Eq. Seguridad, Señalamientos | Programa STPS integral + señal de botiquín |
| Eq. Seguridad | Primeros Aux., Extintores, Señalamientos | EPP + botiquines + señalización EPP obligatorio |
| # | Acción | Alcance | Tipo | Esfuerzo |
| --- | --- | --- | --- | --- |
| 1 | Crear 6+ FAQ por producto en los 49 archivos de datos L4 | 49 productos / 8 data files | Contenido | Alto |
| 2 | Implementar interlinking entre categorías L3 (componente "Complementa tu protección") | 8 páginas L3 + template | Desarrollo | Medio |
| 3 | Crear contenido cuandoUsar para Bomberos (7) y Señalamientos (6) | 13 productos | Contenido | Medio |
| 4 | Implementar interlinking en L4 ("Productos complementarios" de otras categorías) | Template [producto].astro | Desarrollo | Medio |
| # | Acción | Alcance | Tipo | Esfuerzo |
| --- | --- | --- | --- | --- |
| 5 | Conectar blog → productos y productos → blog con enlaces contextuales | 60+ posts + 49 productos | Contenido + Dev | Alto |
| 6 | Añadir schema Product con offers/price en páginas L4 | Template L4 | SEO técnico | Bajo |
| 7 | Recortar metaDesc que superen 160 caracteres (13 productos) | Data files afectados | SEO | Bajo |
| 8 | Recortar metaTitle que superen 65 caracteres | Data files afectados | SEO | Bajo |
| 9 | Homologar FAQ L3 a 8 preguntas en todas (Gabinetes, Mangueras, Sistemas, PA, ES tienen 7) | 5 componentes FAQ | Contenido | Bajo |
| # | Acción | Alcance | Tipo | Esfuerzo |
| --- | --- | --- | --- | --- |
| 10 | Ampliar héroes L3 de ~50 a ~80-100 palabras por párrafo | 9 componentes Hero | Contenido | Medio |
| 11 | Consolidar Base.astro y BaseLayout.astro en un solo layout | 1 archivo + migración | Desarrollo | Medio |
| 12 | Extraer CSS de FAQ a archivo global (eliminar duplicación en 8 componentes) | 8 FAQ + 1 CSS global | Desarrollo | Medio |
| 13 | Diversificar textos de CTA por sección (no solo "Cotizar por WhatsApp") | Templates L3 y L4 | Marketing | Bajo |
| 14 | Crear tablas comparativas entre productos de la misma categoría | 8 categorías | Contenido | Alto |
| 15 | Definir variantes para Señalamientos y Primeros Auxilios (o documentar omisión) | 11 productos | Contenido/Datos | Medio |
| 16 | Añadir productos → sectores enlaces bidireccionales | L3 + Sectores | Desarrollo | Bajo |
| # | Acción | Alcance | Tipo | Esfuerzo |
| --- | --- | --- | --- | --- |
| 17 | Refactorizar FAQ/Guía/Normas a componentes parametrizados únicos | 24 componentes → 3 | Desarrollo | Alto |
| 18 | Migrar contenido extenso a Markdown collections o limpiar src/content/productos/ | Arquitectura datos | Desarrollo | Alto |
| 19 | Implementar HowTo schema en guías de selección | 8 guías L3 | SEO técnico | Bajo |
| 20 | Crear landing pages comparativas ("PQS vs CO₂", etc.) | Contenido nuevo | Contenido | Alto |
| 21 | Implementar validación build-time de completitud de datos L4 | Script de build | Desarrollo | Bajo |