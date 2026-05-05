<!-- converted from auditoria-L2-proyectored.docx -->

AUDITORÍA
PÁGINAS DE CATEGORÍA NIVEL 2
proyectored.com.mx  ·  Abril 2026


# 1. Matriz de Auditoría
La siguiente tabla evalúa cada página L2 contra 6 criterios de calidad derivados del gold standard (mangueras/sistemas). Cada criterio es binario: cumple ✅, parcial ⚠️ o no cumple ❌.


✅ Cumple  |  ⚠️ Parcial  |  ❌ No cumple


# 2. Criterios de Evaluación
Cada criterio fue definido a partir del análisis comparativo de las páginas existentes. El gold standard es la página /mangueras/ (v5), la más evolucionada del sitio.

### 1. Layout moderno (Base)
La página usa el layout Base + CtaBar + FaqCotizacion + pages.css. Las páginas que aún usan el layout antiguo 'Categoria' carecen de todos los demás elementos: no tienen hero, no tienen métricas, no tienen product cards y no tienen CTAs de conversión.

### 2. Hero Pain-Point
El hero-sub describe un escenario de dolor específico del cliente (equipo vencido, incumplimiento normativo, observación de Protección Civil) más una consecuencia concreta. No es un listado de productos ni una descripción genérica del catálogo.

### 3. Precio Ancla
El hero o la sección de catálogo incluye al menos un precio referencial concreto ('desde $X MXN') que ancla la expectativa del visitante y elimina la barrera de 'no sé cuánto cuesta'. Ausente = el visitante no tiene contexto de precio.

### 4. Specs en Cards de Producto
Cada product card incluye el campo specs (línea técnica compacta en color primario) con datos como capacidades, materiales, normas específicas y rangos técnicos. Sin specs, la card es solo un título + descripción sin valor técnico diferenciador.

### 5. Sección 2 Contextual
La segunda sección de catálogo no es una sección genérica de 'ventajas' o '¿por qué elegirnos?' sino una guía de selección por tipo de instalación, tipo de espacio o tipo de operación — respondiendo 'según tu edificio/empresa/riesgo, necesitas esto'.

### 6. FAQs Específicos
El componente FaqCotizacion contiene preguntas reales y específicas para esa categoría. Falla cuando las preguntas son genéricas, incompletas o — en el caso detectado en versiones anteriores — corresponden a otra categoría (copy-paste de extintores en sistemas).


# 3. Inventario de Errores por Página
Se documentan únicamente las páginas con errores. Las páginas en estado REFERENCIA (mangueras, sistemas) no presentan observaciones.


ERRORES
- Hero sub es listado de catálogo, no escenario de dolor del cliente
- Product cards sin campo specs (línea técnica roja)
- Sección 2 es '¿Por Qué Proyecto Red?' genérica — sin guía por tipo de instalación
- Segunda sección reutiliza la misma imagen que el hero (imagen duplicada)
- CTA final débil: '¿Necesitas extintores?' sin tensión ni argumento

MEJORAS RECOMENDADAS
- Hero: escenario específico (extintores vencidos, tipo incorrecto, sin señalamiento → observación STPS)
- Agregar precio ancla en hero sub (desde $450 MXN)
- Agregar campo specs a cada producto (capacidades, agentes, certificaciones)
- Reemplazar sección 2 con guía por tipo de instalación: oficina, restaurante, planta, bodega
- CTA final más fuerte con argumento de consecuencia




ERRORES
- Métrica de instalaciones muy larga para la card ('3 – Instalaciones: empotrado, sobrepuesto, pedestal')
- Hero badge incluye 'Instalación incluida' — no siempre aplica para todos los productos

MEJORAS RECOMENDADAS
- Simplificar texto de 3ª métrica a '3 tipos' con label 'Empotrado · Sobrepuesto · Pedestal'
- Ajustar hero badge para reflejar solo lo que aplica a toda la categoría




ERRORES
- Product cards usan campo 'ejemplo' en lugar de 'specs' — inconsistente con el patrón del sitio
- Sección 2 son 'diferenciadores' genéricos (cards no linkables) — no es guía por tipo de inmueble
- Hero sub menciona precio pero sin escenario de dolor ni consecuencia real
- Cards de diferenciadores no tienen href — son elementos muertos sin navegación

MEJORAS RECOMENDADAS
- Renombrar campo 'ejemplo' a 'specs' con información técnica del material y norma
- Hero: agregar escenario de dolor (señales decoloradas, sin fotoluminiscencia, observación en inspección)
- Reemplazar 'diferenciadores' con guía por tipo de inmueble: oficina, restaurante, nave, edificio
- Asegurar que todas las cards de sección 2 tengan href a páginas de producto correspondientes




ERRORES
- Hero sub es listado de productos ('Trajes estructurales, equipos ERA, herramientas...') — sin dolor
- Product cards sin campo specs — no hay datos técnicos visibles en la card
- No hay precio ancla en el hero ni en ningún elemento visible
- Sección 2 '¿Quién Compra Este Equipo?' usa cards sin href — segmentos sin navegación
- FAQ sobre precio no da ningún número ('el costo depende del nivel de equipo') — evasivo

MEJORAS RECOMENDADAS
- Hero: escenario de dolor (brigada sin ERA verificado, traje de 12 años, no cumple NFPA 1851)
- Agregar precio ancla referencial en hero ('ensemble básico desde $X MXN')
- Agregar campo specs a cada producto (materiales, norma NFPA específica, capacidades)
- Reemplazar sección 2 con guía por tipo de operación: combate estructural, HAZMAT, rescate, aeronáutico
- Dar rango de precio real en FAQ de costos




ERRORES
- Layout antiguo 'Categoria' — sin hero, sin breadcrumbs, sin métricas, sin CTAs
- Contenido es texto plano con listas <ul> — cero estructura de conversión
- No hay product cards, no hay sección de guía, no hay FAQ, no hay FaqCotizacion
- No hay precio, no hay norma específica visible, no hay señales de confianza
- Sin CtaBar, sin CTA final — la página no tiene ningún elemento de conversión

MEJORAS RECOMENDADAS
- Reescritura completa: Base + CtaBar + FaqCotizacion siguiendo patrón mangueras
- Hero con escenario STPS: trabajador sin EPP → multa hasta $400,000 MXN
- 8 product cards con specs: casco, lentes, auditiva, respiratoria, guantes, calzado, arnés, ropa
- Guía por tipo de riesgo: altura, químicos, eléctrico, calor/soldadura
- 7 FAQs específicos de EPP: NOM-017, análisis de riesgo, periodos de reemplazo, costos




ERRORES
- Layout antiguo 'Categoria' — misma situación crítica que equipo-seguridad
- Contenido es texto plano con listas — sin estructura de conversión ni navegación
- No hay product cards, no hay FAQs, no hay CTA ni precio visible
- La norma NOM-005-STPS mencionada es incorrecta para botiquines (aplica a sustancias químicas)
- No distingue entre tipos de centro de trabajo ni volúmenes de trabajadores

MEJORAS RECOMENDADAS
- Reescritura completa: Base + CtaBar + FaqCotizacion siguiendo patrón mangueras
- Hero con escenario: botiquín con insumos vencidos + DEA sin electrodos → riesgo real en emergencia
- 5 product cards: botiquines por tipo (A/B/C), camillas, DEA, material curación, inmovilizadores
- Guía por tipo de empresa: oficina pequeña, planta industrial, restaurante, obra de construcción
- 7 FAQs específicos: tipos de botiquín NOM, DEA obligatorio, capacitación DC-3, costos, resurtido




# 4. Plan de Ejecución
Las tareas están ordenadas por prioridad e impacto. Las páginas CRÍTICO generan mayor daño por tráfico perdido — un visitante que llega a /equipo-seguridad/ encuentra un texto plano sin ningún elemento de conversión.




# 5. Estándar Técnico de Referencia
A continuación se documenta el patrón estructural que debe seguir cada página L2 del sitio. Este patrón fue establecido en /mangueras/ y replicado en /sistemas/ (recién actualizado).


Auditoría generada por Claude · Cowork Mode · Abril 2026
proyectored.com.mx  ·  Paseo de la Reforma 26, Col. Juárez, CDMX
| RESUMEN EJECUTIVO
El sitio proyectored.com.mx cuenta con 8 páginas de categoría Nivel 2 (L2). De estas, 2 se encuentran en estado CRÍTICO con layout desactualizado, 3 requieren mejoras específicas y 3 están en buen estado o han sido recientemente actualizadas.
Las páginas /mangueras/ y /sistemas/ representan el gold standard (patrón de referencia) con hero pain-point, precio ancla, specs técnicas en cards y sección de guía por tipo de instalación. El objetivo es homologar todas las páginas a este nivel de calidad.
Resultado: 2 CRÍTICO · 3 MEJORAR · 2 BUENO / REFERENCIA |
| --- |
| PÁGINA | Layout | Hero
Pain-point | Precio
Ancla | Specs
Cards | Sección 2
Contextual | FAQs
Específicos | STATUS |
| --- | --- | --- | --- | --- | --- | --- | --- |
| /extintores/ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | MEJORAR |
| /gabinetes/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | BUENO |
| /mangueras/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | REFERENCIA |
| /sistemas/ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | REFERENCIA |
| /senalamientos/ | ✅ | ⚠️ | ✅ | ❌ | ❌ | ✅ | MEJORAR |
| /equipo-bomberos/ | ✅ | ❌ | ❌ | ❌ | ❌ | ⚠️ | MEJORAR |
| /equipo-seguridad/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | CRÍTICO |
| /primeros-auxilios/ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | CRÍTICO |
| /extintores/  —  5 errores detectados | MEJORAR |
| --- | --- |
| /gabinetes/  —  2 errores detectados | BUENO |
| --- | --- |
| /senalamientos/  —  4 errores detectados | MEJORAR |
| --- | --- |
| /equipo-bomberos/  —  5 errores detectados | MEJORAR |
| --- | --- |
| /equipo-seguridad/  —  5 errores detectados | CRÍTICO |
| --- | --- |
| /primeros-auxilios/  —  5 errores detectados | CRÍTICO |
| --- | --- |
| # | PÁGINA | PRIORIDAD | ESFUERZO | ACCIÓN PRINCIPAL |
| --- | --- | --- | --- | --- |
| 1 | /equipo-seguridad/ | 🔴 CRÍTICO | Alto (reescritura) | Reescritura completa: layout Base + hero STPS + 8 product cards + guía por riesgo + 7 FAQs |
| 2 | /primeros-auxilios/ | 🔴 CRÍTICO | Alto (reescritura) | Reescritura completa: layout Base + hero botiquín vencido + 5 product cards + guía por empresa + 7 FAQs |
| 3 | /extintores/ | 🟠 MEJORAR | Medio | Hero pain-point + specs en 10 cards + sección 2 tipo instalación (oficina, restaurante, planta, bodega) |
| 4 | /senalamientos/ | 🟠 MEJORAR | Medio | Estandarizar campo specs en cards + sección 2 tipo inmueble + hero con escenario de dolor |
| 5 | /equipo-bomberos/ | 🟠 MEJORAR | Medio | Hero pain-point + precio ancla + specs en 5 cards + sección 2 tipo operación + precio real en FAQs |
| 6 | /gabinetes/ | 🟡 AJUSTE | Bajo | Simplificar texto 3ª métrica + ajustar hero badge |
| IMPACTO ESPERADO TRAS LA HOMOLOGACIÓN
Consistencia visual y de estructura en todas las URLs de categoría — el visitante reconoce el patrón
Precio ancla visible reduce la tasa de abandono por incertidumbre de costo
Specs técnicas en cards permiten autoselección sin necesidad de contacto previo
Guías por tipo de instalación/espacio generan contenido SEO de cola larga más específico
FAQs corregidos eliminan confusión (preguntas de extintores en páginas de sistemas) |
| --- |
| ELEMENTO | ESPECIFICACIÓN |
| --- | --- |
| Imports | Base, CtaBar, FaqCotizacion, pages.css — NO usar layout Categoria |
| Variables | WHATSAPP = '525537238544' + WA_URL + title + description + breadcrumbs |
| Métricas | Array de 4 objetos { valor, label } — datos duros que cuentan una historia de sistema |
| Productos | Array con { nombre, desc, href, badge, specs } — specs es obligatorio (norma + datos técnicos) |
| Sección 2 | Array por tipo de instalación/espacio/operación — { tipo, norma, necesitas, porque, href } |
| FAQs | Array de 6-7 objetos { pregunta, respuesta } — respuestas en HTML con <strong> para énfasis |
| Hero sub | Escenario de dolor específico → consecuencia concreta → precio ancla ('desde $X MXN') |
| Sección 2 header | cat-header con imagen diferente a hero + guía contextual por tipo de instalación |
| FaqCotizacion | Props: titulo, subtitulo, pageId, bgGray={false}, faqs — preguntas específicas de esa categoría |
| CTA final | Argumento de consecuencia + precio/beneficio + btn-primary WhatsApp + btn-cta-ghost a página relacionada |