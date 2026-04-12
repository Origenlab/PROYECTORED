# 📈 Criterios de Evolución — SEO y Marketing del Blog

> Guía para evaluar cada artículo y decidir qué mejorar, en qué orden y cómo medir el resultado.
> Se actualiza conforme se detectan patrones nuevos al mejorar artículos.
> Última actualización: 2026-04-11

---

## La filosofía de evolución

**Cada artículo debe superar al que tenemos hoy, no solo igualarlo.**

Cuando mejoramos un artículo no solo agregamos los componentes HTML del template. Buscamos:
1. **Más profundidad técnica** — ¿El artículo responde TODAS las preguntas del tema?
2. **Mejor estructura SEO** — ¿Los H2 usan variantes de keyword que la gente busca?
3. **Mayor conversión** — ¿El lector sabe exactamente qué hacer después de leer?
4. **Datos actualizados** — ¿Las normas y cifras siguen vigentes?
5. **Diferenciación** — ¿Hay algo en este artículo que no tiene ningún competidor?

---

## Los 4 niveles de un artículo evolucionado

```
Nivel 1 — Básico      Prosa plana, sin estructura, sin CTA claro
Nivel 2 — Formateado  Frontmatter completo + HTML components básicos
Nivel 3 — Optimizado  Nivel 2 + datos de norma específicos + CTA preciso + keywords en H2
Nivel 4 — Autoridad   Nivel 3 + contenido único (cálculos, checklists exclusivos, 
                       comparativas que no existen en otros sitios)
```

**El objetivo mínimo al reescribir es llegar a Nivel 3. El objetivo ideal es Nivel 4.**

---

## Checklist de auditoría por artículo

Antes de mejorar un artículo, responder estas preguntas:

### SEO técnico
- [ ] ¿El `title` tiene la keyword principal en los primeros 40 caracteres?
- [ ] ¿La `description` tiene 150-160 chars y menciona la keyword + un beneficio?
- [ ] ¿El artículo tiene `author: "Proyecto Red"`, `image` y `tags`?
- [ ] ¿Hay al menos 1 H2 que use una variante de la keyword?
- [ ] ¿El blog-lead menciona la keyword en la primera o segunda oración?
- [ ] ¿El `alt` de la imagen hero contiene la keyword?

### Contenido
- [ ] ¿El artículo responde las 3-5 preguntas más comunes del tema?
- [ ] ¿Se cita la norma aplicable (NOM, NFPA) con número de artículo cuando es posible?
- [ ] ¿Hay datos numéricos concretos (plazos, cantidades, porcentajes)?
- [ ] ¿Hay una sección "¿Qué pasa si no lo hago?" o "Consecuencias"?
- [ ] ¿El artículo tiene 800+ palabras?

### Conversión
- [ ] ¿El CTA final menciona "Proyecto Red" explícitamente?
- [ ] ¿El CTA menciona el servicio específico (no genérico)?
- [ ] ¿Hay al menos 1 callout que urge a actuar o contactar?
- [ ] ¿Se menciona WhatsApp, entrega en CDMX o asesoría gratuita?

### Componentes HTML
- [ ] `blog-hero-img` presente
- [ ] `blog-lead` presente
- [ ] `blog-stat-row` (si el tema tiene números clave)
- [ ] Al menos 1 tabla `blog-table-wrap`
- [ ] Al menos 1 callout `blog-callout`
- [ ] Checklist o lista estructurada (`blog-checklist` o `blog-warn-list`)

---

## Señales de que un artículo necesita evolución inmediata

### Señales SEO
- El título no contiene ninguna variante de keyword long-tail
- La descripción es genérica o dice "Aprende sobre X" sin dar un beneficio
- No hay norma citada siendo un artículo técnico/regulatorio
- El artículo tiene menos de 600 palabras
- Hay un artículo muy similar (mismo tema) en el mismo blog (problema de canibalización)

### Señales de contenido débil
- Las secciones son todas encabezados + párrafo sin apoyo visual
- No hay ningún dato numérico (solo prosa)
- No hay diferenciación con lo que uno encontraría en Wikipedia
- El artículo no menciona ninguna norma aplicable siendo un tema técnico
- El CTA es genérico: "contáctanos" sin mencionar el servicio

### Señales de canibalización (dos artículos compiten por la misma keyword)

Los siguientes pares de artículos tienen potencial conflicto y deben revisarse:

| Grupo | Artículos en conflicto | Acción recomendada |
|-------|------------------------|-------------------|
| Mantenimiento extintores | `mantenimiento-preventivo-extintores-nom` (✅) vs `mantenimiento-preventivo-extintores-empresa` (❌) | Consolidar empresa → redirect al nom, o diferenciarlo por audiencia (empresa grande vs. PyME) |
| Recarga extintores | `recarga-extintor-precio-cdmx` vs `cada-cuanto-se-recarga-un-extintor` | OK si se diferencia keyword: precio/proceso vs. frecuencia |
| Extintor tipo K | `extintor-tipo-k-cocinas-comerciales` vs `extintor-portatil-tipo-k-ventajas` vs `norma-extintores-cocinas-restaurantes` | Diferencias claras: funcionamiento vs. portátil vs. normativa |
| Señalización | `senalizacion-emergencia-nom-003` vs `señalizacion-extintores-auditorias` vs `materiales-señalizacion-emergencia-tipos` | OK, keywords distintas |

---

## Cómo evolucionar un artículo — Proceso paso a paso

### Paso 1 — Leer el artículo actual completo

Identificar:
- ¿Cuál es la keyword principal?
- ¿Qué preguntas responde? ¿Cuáles faltan?
- ¿Tiene datos numéricos? ¿Normas citadas?
- ¿El CTA es específico o genérico?

### Paso 2 — Buscar las "preguntas faltantes" del tema

Para cada artículo, hacerse estas preguntas:
- ¿Qué pregunta hace el cliente en WhatsApp sobre este tema?
- ¿Qué pregunta el inspector de Protección Civil sobre este tema?
- ¿Qué le preocupa al responsable de seguridad de la empresa?

Esas respuestas deben estar en el artículo como secciones H2.

### Paso 3 — Aplicar los componentes HTML del template

Ver [[📋 Template — Componentes HTML]] y decidir qué componentes aplican:

| Si el artículo tiene... | Usar componente... |
|-------------------------|-------------------|
| Pasos o procedimientos | `blog-steps` |
| Frecuencias o plazos | `blog-stat-row` + `blog-table-wrap` |
| Cita de norma oficial | `blog-callout--norma` |
| Riesgo o consecuencia | `blog-callout--warning` |
| Lista de requisitos/documentos | `blog-checklist` |
| Señales de problema | `blog-warn-list` |
| Consecuencias de incumplir | `blog-impact-list` |
| Consejo práctico | `blog-callout--info` |
| Alternativa correcta | `blog-callout--ok` |

### Paso 4 — Mejorar el frontmatter

```yaml
---
title: "[Keyword principal] + [beneficio o contexto]"
description: "[Keyword en primeras palabras] — [qué aprende el lector] según [norma aplicable]."
pubDate: YYYY-MM-DD
category: "[Categoría exacta]"
author: "Proyecto Red"
image: "/imagenes/{carpeta}/{imagen}.jpg"
tags: ["keyword principal", "norma aplicable", "tipo de cliente", "servicio", "CDMX"]
---
```

### Paso 5 — Reescribir el CTA final

Usar la fórmula específica según el servicio:

**Para mantenimiento/recarga:**
> "En Proyecto Red realizamos [servicio] directamente en tus instalaciones en CDMX. Incluye [beneficio 1], [beneficio 2] y documentación lista para tu expediente de Protección Civil."

**Para venta de producto:**
> "En Proyecto Red distribuimos [producto] con entrega el mismo día en CDMX para pedidos antes de las 2 pm. Cotiza por WhatsApp y recibe tu equipo certificado con ficha técnica."

**Para instalación de sistemas:**
> "En Proyecto Red instalamos [sistema] llave en mano bajo normativa [NFPA/NOM]. Diagnóstico sin costo y presupuesto en 24 horas."

**Para capacitación:**
> "En Proyecto Red impartimos [tipo de capacitación] con constancia DC-3 válida ante STPS. Agenda tu curso directamente por WhatsApp."

### Paso 6 — Actualizar el Tracker

Después de mejorar el artículo, actualizar [[📊 Tracker — Estado de Artículos]]:
- Cambiar estado de ❌ a ✅ o 🔶
- Agregar fila al Log de mejoras con fecha y lista de cambios

---

## Oportunidades de mejora avanzada (Nivel 4)

Estas mejoras convierten un artículo bueno en un recurso de referencia único:

### 1. Calculadoras o tablas interactivas
Para artículos de dimensionamiento (detectores, extintores por m², etc.):
- Agregar una tabla de referencia rápida: "Si tu área es X m², necesitas Y detectores"
- Más simple que una calculadora pero igualmente útil para el usuario

### 2. Checklist descargable
Para artículos de auditoría/Protección Civil:
- Mencionar que Proyecto Red ofrece checklist completo en PDF vía WhatsApp
- Esto crea un lead magnet con cero costo técnico

### 3. Comparativa exclusiva de productos
Para artículos de equipo:
- "Extintores Tipo K: portátil vs. fijo — comparativa completa"
- Tabla con marca, capacidad, precio rango, certificación, uso ideal

### 4. Casos reales (sin datos confidenciales)
- "Una cocina de 200 m² con una freidora industrial necesita X tipo de extintor"
- Escenarios concretos con variables reales del mercado mexicano

### 5. Preguntas frecuentes al final
Para artículos con alta intención de búsqueda:
- Agregar sección `## Preguntas frecuentes` con 3-5 Q&A en formato pregunta → respuesta corta
- Esto ayuda a capturar featured snippets de Google

---

## Keywords prioritarias del blog

Estas son las keywords de mayor intención de compra/contratación para Proyecto Red:

### Transaccionales (directamente generan leads)
- "recarga de extintor CDMX"
- "mantenimiento extintores empresa"
- "instalación sistema contra incendio CDMX"
- "señalización Protección Civil empresa"
- "capacitación brigadas DC-3"
- "venta extintores tipo K cocinas"
- "prueba hidrostática extintor"

### Informacionales de alta intención
- "cómo pasar inspección Protección Civil"
- "qué extintor necesita mi empresa"
- "cuántos detectores de incendio necesita mi empresa"
- "cómo usar extintor método PASA"
- "señalización emergencia NOM-003"

### Long-tail de nicho (competencia baja, muy relevantes)
- "extintor tipo K cocina restaurante NOM"
- "prueba hidrostática extintor cada cuánto"
- "señal extintor fotoluminiscente obligatoria"
- "detector multigas espacios confinados NOM-033"
- "tablero control contra incendio NFPA 20 México"

---

## Métricas para evaluar el éxito

Como no hay analytics directo disponible aquí, la evaluación se hace con señales proxy:

| Señal | Cómo medirla |
|-------|--------------|
| **Ranking de keyword** | Buscar la keyword en Google Incógnito y ver posición |
| **Featured snippet** | ¿El artículo aparece en el recuadro destacado de Google? |
| **Leads desde blog** | Preguntar a Proyecto Red si mencionan de dónde vienen los contactos |
| **Tiempo en página** | Revisar Google Analytics si está disponible |
| **Bounce rate** | Artículos con componentes visuales suelen tener menor rebote |

---

## Registro de evoluciones detectadas

*Actualizar conforme se mejoran artículos y se aprenden nuevas mejores prácticas.*

| Fecha | Aprendizaje | Aplicar en... |
|-------|-------------|---------------|
| 2026-04-11 | Template aprobado con 9 tipos de componentes HTML | Todos los artículos |
| — | — | — |

---

## Véase también

- [[📋 Template — Componentes HTML]] — Los componentes y cómo implementarlos
- [[📊 Tracker — Estado de Artículos]] — Estado actual de los 67 artículos
- Artículo modelo: `src/content/blog/mantenimiento-preventivo-extintores-nom.md`
