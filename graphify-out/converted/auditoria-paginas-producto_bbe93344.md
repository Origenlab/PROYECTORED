<!-- converted from auditoria-paginas-producto.docx -->

AUDITORIA COMPLETA
Paginas de Producto — Extintores Polvo Seco PQS
proyectored.com.mx | Abril 2026
# Resumen Ejecutivo
Se auditaron las 8 paginas de producto nuevas de la categoria /extintores/polvo-seco/. El analisis cubre codigo, SEO tecnico, marketing/conversion y consistencia visual. Se identificaron 23 problemas distribuidos en 3 niveles de severidad.


# 1. Errores Criticos (Requieren Correccion Inmediata)

# 2. Problemas de Severidad Alta

# 3. Mejoras SEO
## 3.1 Schema Markup (JSON-LD)
NINGUNA pagina tiene structured data. Esto es una oportunidad enorme para aparecer como rich result en Google. Recomendacion: agregar schema Product + FAQ en cada pagina.
- Schema tipo Product con name, description, brand, offers (priceRange), category
- Schema tipo FAQPage con las preguntas y respuestas de cada pagina
- Schema tipo BreadcrumbList para rich breadcrumbs en SERP
## 3.2 Meta Tags Faltantes
- og:image falta en TODAS las paginas (Base.astro lo soporta con ogImage prop pero nadie lo pasa)
- twitter:card, twitter:title, twitter:description faltan en Base.astro
- Falta meta robots (index, follow) explicito
## 3.3 Internal Linking
Las paginas de automaticos (4.5 y 6 kg) no tienen links de ida y vuelta con las demas paginas del catalogo. Esto debilita el internal linking y la autoridad topica de la seccion /extintores/polvo-seco/.
## 3.4 URLs Inconsistentes
Automatico-6 usa URLs sin trailing slash (/pqs-9-kg en vez de /pqs-9-kg/). Astro genera las paginas con trailing slash. Esto puede causar redirects 301 innecesarios que diluyen link equity.

# 4. Mejoras de Marketing y Conversion
## 4.1 Diferenciacion de Contenido
Las 5 paginas generadas por script (gabinetes y rodantes) siguen perfectamente el template pero el contenido podria diferenciarse mejor. Sugerencias:
- Agregar seccion 'Casos de uso reales' con escenarios especificos (ej: 'Una nave de 1,500 m2 en Queretaro protegio su area de solventes con 2 rodantes de 35 kg')
- Incluir tabla comparativa entre productos similares (ej: rodante 25 vs 35 vs 50 kg)
- Agregar video o diagrama de instalacion/operacion
## 4.2 Trust Signals
- Agregar seccion de testimonios o logos de clientes en el sidebar
- Incluir contador de unidades vendidas o anos de experiencia
- Agregar garantia visible: 'Garantia de satisfaccion' o 'Devolucion sin preguntas en 30 dias'
## 4.3 Urgencia y Escasez
- Agregar badge 'Entrega mismo dia CDMX' mas prominente en el hero (actualmente solo en cotizacion)
- Incluir indicador de disponibilidad: 'En stock — Envio hoy si ordenas antes de las 2pm'

# 5. Mejoras de Codigo
## 5.1 CSS Duplicado (Problema #1 de Rendimiento)
Las ~130 lineas de CSS scoped se REPITEN identicas en CADA archivo .astro (14 paginas de producto = 1,820 lineas duplicadas). Esto infla el HTML de cada pagina innecesariamente.
Solucion: Extraer el CSS a un archivo compartido /styles/product-page.css e importarlo con import '../../../styles/product-page.css'. El CSS ya se importa pages.css, se puede combinar ahi.
## 5.2 SVG de WhatsApp Repetido
El SVG del icono de WhatsApp (~800 bytes) se repite 3-4 veces por pagina inline. Total: ~11 KB de SVG duplicado por pagina.
Solucion: Crear un componente WhatsAppIcon.astro o usar un sprite SVG referenciado con <use>.
## 5.3 Accesibilidad
- Las tablas de specs no tienen <thead> ni scope attributes. Screen readers no pueden navegar las columnas.
- Los links de WhatsApp no tienen aria-label descriptivo (ej: 'Cotizar extintor PQS 6 kg por WhatsApp').
- Falta skip-to-content link para navegacion con teclado.
## 5.4 Performance
- Las imagenes de galeria (4 por pagina) no tienen srcset ni sizes. En movil se descargan a 400px de ancho aunque se muestren a 200px.
- Agregar loading='lazy' a las imagenes de la seccion 'Otros Productos' (ya se hace) pero falta width/height en automaticos.

# 6. Plan de Accion Priorizado
## Fase 1: Criticos (Hacer YA)
1. Reescribir pqs-automatico-4-5-kg.astro y pqs-automatico-6-kg.astro usando el template correcto (estructura identica a pqs-1-kg.astro con datos de producto de automaticos).
2. Esto corrige automaticamente: numeros de WhatsApp, props de Base, props de FaqCotizacion, campos de FAQs, estructura HTML, breadcrumbs, sidebar completo, y URLs de otrosProductos.
Tiempo estimado: 1 sesion. Impacto: Los 7 errores criticos y 9 altos se resuelven de golpe.
## Fase 2: SEO (Semana 1)
1. Agregar schema JSON-LD (Product + FAQPage + BreadcrumbList) en Base.astro con prop opcional.
2. Agregar og:image y twitter cards en Base.astro.
3. Normalizar trailing slashes en todos los href internos.
Tiempo estimado: 2-3 horas. Impacto: Rich results en Google, mejor CTR organico.
## Fase 3: Codigo (Semana 1-2)
1. Extraer CSS duplicado a product-page.css.
2. Crear componente WhatsAppIcon.astro.
3. Agregar accesibilidad a tablas (thead, scope) y links (aria-label).
Tiempo estimado: 3-4 horas. Impacto: -50% peso HTML, mejor Lighthouse score.
## Fase 4: Marketing (Semana 2-3)
1. Agregar imagenes especificas por producto (o al menos variaciones).
2. Implementar tabla comparativa entre productos similares.
3. Agregar trust signals y urgency badges.
Tiempo estimado: Ongoing. Impacto: Mayor conversion rate en cotizaciones.

Generado por Claude para Proyecto Red | Abril 2026
| 7 CRITICOS | 9 ALTOS | 7 MEJORAS |
| --- | --- | --- |
| Severidad | Pagina | Problema | Solucion |
| --- | --- | --- | --- |
| CRITICO | automatico-4-5 | Numero de WhatsApp FALSO: 5218741234567 en vez de 525537238544. El cliente NO recibe mensajes. | Reemplazar WHATSAPP const con 525537238544 |
| CRITICO | automatico-6 | Numero de WhatsApp FALSO: +5218111234567. Telefono tambien falso: +52(55)5123-4567. | Reemplazar ambos numeros con 525537238544 y 55 3723 8544 |
| CRITICO | automatico-4-5 | FAQs usan campos 'q' y 'a' en vez de 'pregunta' y 'respuesta'. FaqCotizacion NO renderiza las preguntas. | Renombrar q->pregunta, a->respuesta en el array de faqs |
| CRITICO | automatico-4-5 | Props de Base son incorrectos: <Base {seo} {breadcrumbs}> en vez de <Base title={seo.title} description={seo.description}>. SEO meta tags vacios. | Cambiar a <Base title={seo.title} description={seo.description}> |
| CRITICO | automatico-6 | Props de Base incorrectos: <Base seo={seo}> — titulo y descripcion NO se renderizan en el HTML. | Cambiar a <Base title={seo.title} description={seo.description}> |
| CRITICO | automatico-4-5 | FaqCotizacion invocado con props incorrectos: title= en vez de titulo=, sin pageId. No coincide con interface del componente. | Cambiar a titulo=, subtitulo=, pageId=, faqs={faqs} |
| CRITICO | automatico-6 | FaqCotizacion invocado con 'titulo' y 'descripcion' (no existe prop 'descripcion'). Falta subtitulo y pageId. | Usar: titulo, subtitulo, pageId, faqs |
| Severidad | Pagina | Problema | Solucion |
| --- | --- | --- | --- |
| ALTO | automatico-4-5 y automatico-6 | Estructura HTML completamente diferente al template. Usan clases hero-content, hero-stat, hero-buttons que NO existen en pages.css. | Reescribir usando la estructura exacta del template: hero-grid, hero-left, hero-right, hero-badge, hero-ctas |
| ALTO | automatico-4-5 y automatico-6 | Falta class container en pp-layout. El grid 2 columnas se rompe visualmente. | Agregar class='pp-layout container' |
| ALTO | automatico-4-5 y automatico-6 | Sidebar incompleto: faltan widgets de Marcas, Aplicaciones, Servicios, Caracteristicas Clave. Solo 3-4 widgets vs 8 del template. | Agregar los 8 widgets completos del sidebar como en pqs-1-kg.astro |
| ALTO | automatico-4-5 | otrosProductos cards linkan a href='#' en vez de URLs reales. El usuario no puede navegar. | Agregar href real: /extintores/polvo-seco/pqs-automatico-6-kg/ etc. |
| ALTO | automatico-6 | otrosProductos usa campos 'descripcion' e 'imagen' en vez de 'desc' e 'img'. Las cards no renderizan correctamente. | Renombrar a 'desc' e 'img' para coincidir con el template HTML |
| ALTO | automatico-6 | Breadcrumbs incorrectos: falta 'Inicio', usa /extintores/automaticos (URL inexistente), ultimo item tiene href (no debe). | Copiar estructura de breadcrumbs del template con Inicio, Extintores, Polvo Seco PQS, ultimo sin href |
| ALTO | automatico-6 | categoriasNav solo tiene 1 item en vez de 5. Sidebar de navegacion queda vacio. | Agregar las 5 categorias completas: Portatiles, Estandar, Automaticos, Con gabinete, Rodantes |
| ALTO | Todas las paginas | Todas las imagenes usan la misma foto generica /imagenes/extintores/polvo-seco.jpg. No hay diferenciacion visual entre productos. | Agregar imagenes especificas por producto o al menos variaciones con texto overlay |
| ALTO | automatico-4-5 | El breadcrumb tiene el ultimo item con href (apunta a si mismo). Esto es anti-patron de UX y SEO. | Quitar href del ultimo breadcrumb item |