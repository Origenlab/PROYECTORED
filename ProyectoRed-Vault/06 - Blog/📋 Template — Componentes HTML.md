# 📋 Blog — Template de Componentes HTML

> Referencia oficial del template aprobado para todos los artículos del blog de proyectored.com.mx.
> Artículo modelo: `/blog/mantenimiento-preventivo-extintores-nom/`
> Aprobado: 2026-04-11

---

## ¿Cómo usar este template?

Cada artículo del blog debe usar estos componentes HTML en lugar de Markdown puro. El objetivo es:
- **Visual**: artículos con datos, tablas, pasos y callouts que destacan vs. prosa plana
- **SEO**: estructura semántica H2→secciones claras + palabras clave distribuidas
- **Conversión**: callouts de CTA al final, datos que generan confianza, listas de riesgo que urgen acción

---

## Frontmatter obligatorio

Todo artículo debe tener este frontmatter completo:

```yaml
---
title: "Título descriptivo con keyword principal"
description: "Meta description 150-160 caracteres. Incluir keyword + beneficio concreto + marca si aplica."
pubDate: YYYY-MM-DD
category: "Categoría"
author: "Proyecto Red"
image: "/imagenes/{carpeta}/{imagen}.jpg"
tags: ["keyword1", "keyword2", "NOM-xxx", "Protección Civil", "CDMX"]
---
```

**Reglas del frontmatter:**
- `title` — Máx. 60 chars. Incluir la keyword principal. Usar pregunta o "cómo" cuando sea natural.
- `description` — 150-160 chars. Resumir el valor del artículo. Incluir keyword + norma si aplica.
- `author` — Siempre "Proyecto Red"
- `image` — Usar imagen relevante del catálogo. Si no existe imagen exacta, usar la más cercana.
- `tags` — 4-6 tags: keyword principal + norma aplicable + tipo de cliente + ciudad/región

---

## Componente 1 — Hero Image

```html
<div class="blog-hero-img">
  <img src="/imagenes/{carpeta}/{imagen}.jpg" 
       alt="Descripción descriptiva con keyword" 
       loading="eager" />
</div>
```

**Cuándo usar:** SIEMPRE. Es el primer elemento después del frontmatter.
**SEO tip:** El `alt` debe incluir la keyword principal del artículo.

---

## Componente 2 — Lead (párrafo de entrada)

```html
<p class="blog-lead">
  Texto de apertura impactante. Mencionar la norma/regulación, el problema concreto 
  y la consecuencia de ignorarlo. <strong>Palabra clave en negrita.</strong>
</p>
```

**Cuándo usar:** SIEMPRE. Después del hero image, antes del primer H2.
**Longitud:** 2-4 líneas. Sin relleno.
**Fórmula:** [Contexto regulatorio] + [Problema si no se atiende] + [Lo que este artículo resuelve]

---

## Componente 3 — Stat Row (datos de impacto)

```html
<div class="blog-stat-row">
  <div class="blog-stat">
    <div class="blog-stat__num">3</div>
    <div class="blog-stat__label">Tipos de mantenimiento obligatorios</div>
  </div>
  <div class="blog-stat">
    <div class="blog-stat__num">1 año</div>
    <div class="blog-stat__label">Frecuencia mínima según NOM</div>
  </div>
  <div class="blog-stat">
    <div class="blog-stat__num">5 / 12</div>
    <div class="blog-stat__label">Años para prueba hidrostática (acero/aluminio)</div>
  </div>
</div>
```

**Cuándo usar:** Al inicio del artículo, después del lead. Cuando el tema tiene números clave (frecuencias, cantidades, años, porcentajes).
**Cantidad:** 3 stats (usar siempre 3 para mantener el grid).
**Tip:** Los números grandes generan confianza y escaneabilidad. Usar datos de la norma directamente.

---

## Componente 4 — Steps (pasos numerados)

```html
<div class="blog-steps">
  <div class="blog-step">
    <div class="blog-step__num">1</div>
    <div class="blog-step__body">
      <div class="blog-step__title">Título del paso — Frecuencia/contexto</div>
      <p class="blog-step__desc">Descripción detallada del paso. Incluir quién lo hace, 
      qué implica y qué pasa si no se hace. <strong>Dato clave en negrita.</strong></p>
    </div>
  </div>
  <!-- Repetir para cada paso -->
</div>
```

**Cuándo usar:** Cuando el tema tiene pasos secuenciales, tipos ordenados, o fases de un proceso.
**Ideal para:** Procedimientos, tipos de mantenimiento, fases de instalación, tipos de riesgo.

---

## Componente 5 — Tabla

```html
<div class="blog-table-wrap">
  <table class="blog-table">
    <thead>
      <tr>
        <th>Columna 1</th>
        <th>Columna 2</th>
        <th>Columna 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Dato</strong></td>
        <td>Valor</td>
        <td><span class="badge badge--red">Urgente</span></td>
      </tr>
      <tr>
        <td><strong>Dato</strong></td>
        <td>Valor</td>
        <td><span class="badge badge--blue">Periódico</span></td>
      </tr>
      <tr>
        <td><strong>Dato</strong></td>
        <td>Valor</td>
        <td><span class="badge badge--green">OK</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

**Variantes de badge:**
- `badge--red` — Urgente, obligatorio, riesgo alto
- `badge--blue` — Periódico, informativo, moderado
- `badge--green` — Cumplimiento, aprobado, correcto

**Cuándo usar:** Comparaciones, frecuencias, requisitos por tipo, diferencias entre opciones.

---

## Componente 6 — Callout (cuatro variantes)

### 6a — Norma

```html
<div class="blog-callout blog-callout--norma">
  <div class="blog-callout__icon">📋</div>
  <div class="blog-callout__body">
    <div class="blog-callout__title">Lo que dice la NOM-XXX-SCFI</div>
    <p class="blog-callout__text">Texto directo de la norma o paráfrasis técnica precisa. 
    Destacar el punto más importante en <strong>negrita</strong>.</p>
  </div>
</div>
```

### 6b — Advertencia

```html
<div class="blog-callout blog-callout--warning">
  <div class="blog-callout__icon">⚠️</div>
  <div class="blog-callout__body">
    <div class="blog-callout__title">Título de advertencia</div>
    <p class="blog-callout__text">Consecuencia o riesgo concreto. Usar lenguaje directo. 
    <strong>Destacar la consecuencia más grave.</strong></p>
  </div>
</div>
```

### 6c — Info / Tip

```html
<div class="blog-callout blog-callout--info">
  <div class="blog-callout__icon">💡</div>
  <div class="blog-callout__body">
    <div class="blog-callout__title">Tip: Consejo práctico</div>
    <p class="blog-callout__text">Consejo accionable que el lector puede implementar 
    de inmediato. Concreto, breve, útil.</p>
  </div>
</div>
```

### 6d — OK / Correcto

```html
<div class="blog-callout blog-callout--ok">
  <div class="blog-callout__icon">✅</div>
  <div class="blog-callout__body">
    <div class="blog-callout__title">Lo que sí puedes hacer</div>
    <p class="blog-callout__text">Alternativa correcta, permiso claro o confirmación 
    de una práctica válida.</p>
  </div>
</div>
```

**Regla de uso:** No usar más de 3 callouts por artículo. Reservar `--warning` para los riesgos más graves.

---

## Componente 7 — Checklist

```html
<ul class="blog-checklist">
  <li><div><strong>Elemento principal</strong> — Descripción concisa de qué implica 
  y por qué importa.</div></li>
  <li><div><strong>Elemento principal</strong> — Descripción concisa.</div></li>
</ul>
```

**Cuándo usar:** Listas de requisitos, documentación necesaria, pasos de verificación, puntos de inspección.
**Formato:** Siempre `<strong>Nombre del elemento</strong> — descripción`. El guión separa el "qué" del "por qué".

---

## Componente 8 — Warn List (señales de alerta)

```html
<ul class="blog-warn-list">
  <li>Señal de riesgo 1 — <strong>dato en negrita</strong></li>
  <li>Señal de riesgo 2 — consecuencia</li>
  <li>Señal de riesgo 3 — acción requerida</li>
</ul>
```

**Cuándo usar:** Señales de advertencia, síntomas de un problema, indicadores de riesgo inminente.

---

## Componente 9 — Impact List (consecuencias)

```html
<ul class="blog-impact-list">
  <li><div><strong>Consecuencia 1:</strong> Explicación detallada del impacto. 
  Usar lenguaje específico (multas, cierres, pérdidas).</div></li>
  <li><div><strong>Consecuencia 2:</strong> Explicación detallada.</div></li>
</ul>
```

**Cuándo usar:** Sección "¿Qué pasa si no lo hago?" — consecuencias de incumplimiento.

---

## Cierre del artículo — CTA obligatorio

```markdown
---

[Párrafo de cierre: resumen del riesgo o la necesidad + transición al CTA]

**En Proyecto Red [servicio específico relacionado con el artículo].** 
El servicio incluye [beneficios concretos: documentación, collarín, asesoría, etc.].
```

**Reglas del CTA:**
- Siempre en **negrita** la primera oración
- Mencionar "Proyecto Red" explícitamente
- Incluir 2-3 beneficios concretos del servicio (no genéricos)
- El CTA debe coincidir con el tema del artículo

---

## Estructura completa de un artículo tipo

```
[Frontmatter]
[blog-hero-img]
[blog-lead]
[blog-stat-row]  ← si aplica

## H2 — Primera sección
[blog-steps o blog-table-wrap]
[blog-callout--norma]  ← citar la norma relevante

## H2 — Segunda sección
[blog-table-wrap]  ← frecuencias, comparativas, requisitos
[blog-callout--warning]

## H2 — Tercera sección
[blog-checklist]  ← documentación o requisitos

[blog-callout--info]  ← tip práctico

## H2 — Cuarta sección (¿Puedo hacerlo yo mismo? o ¿Qué pasa si no lo hago?)
[blog-callout--warning o --ok]
[blog-warn-list o blog-impact-list]

---
[Cierre + CTA]
```

---

## SEO — Reglas por artículo

| Elemento | Requisito | Nota |
|----------|-----------|------|
| **Keyword en H1** | Sí (en title del frontmatter) | Incluir keyword exacta o variante |
| **Keyword en meta description** | Sí | En los primeros 60 caracteres |
| **Keyword en primer párrafo** | Sí (blog-lead) | No forzar, pero debe aparecer |
| **H2 con variantes de keyword** | Sí, al menos 1 H2 | Ej: "¿Qué exige la NOM?" |
| **Tags relevantes** | 4-6 tags | Norma + tipo cliente + servicio + ciudad |
| **Image alt con keyword** | Sí | En el blog-hero-img |
| **CTA con nombre de la empresa** | Sí | "En Proyecto Red..." al final |
| **Longitud mínima** | 800 palabras | Los mejores rankean con 1200+ |

---

## Marketing — Fórmulas de conversión

### Para artículos de mantenimiento/recarga:
> "En Proyecto Red realizamos [servicio] directamente en tus instalaciones. El servicio incluye [beneficio 1], [beneficio 2] y [beneficio 3]."

### Para artículos de cumplimiento normativo:
> "En Proyecto Red te ayudamos a cumplir con [norma] sin complicaciones. Evaluamos tu instalación sin costo y te entregamos un diagnóstico con lo que necesitas."

### Para artículos de equipo/producto:
> "En Proyecto Red distribuimos [producto] con entrega el mismo día en CDMX. Cotiza directamente con nuestros técnicos por WhatsApp."

### Para artículos de capacitación/brigadas:
> "En Proyecto Red impartimos capacitación de brigadas con constancia DC-3 válida ante STPS. Agenda tu curso directamente."

---

## Véase también

- [[📊 Tracker — Estado de Artículos]] — Estado y prioridad de mejora de los 67 artículos
- [[📈 Criterios de Evolución SEO y Marketing]] — Guía de qué mejorar y cómo detectarlo
- Artículo modelo: `src/content/blog/mantenimiento-preventivo-extintores-nom.md`
