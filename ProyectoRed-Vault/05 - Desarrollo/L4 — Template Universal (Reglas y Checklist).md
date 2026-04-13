# L4 — Template Universal (Reglas y Checklist)

> Última actualización: 2026-04-12
> Error documentado para no repetirlo: **variantes vacías → S0 no aparece**

---

## ⚠️ La regla más importante

> **El template `[producto].astro` ya tiene la sección S0 de variantes lista en TODAS las categorías. La S0 es condicional: solo aparece si `data.variantes && data.variantes.length > 0`.**
>
> Si el archivo de datos tiene `variantes?: VarianteXxx[]` pero NO tiene datos escritos → la S0 no renderiza aunque el template lo soporte completamente.
>
> **Solución**: Siempre que se cree o audite un producto L4, verificar que el campo `variantes: [...]` esté poblado con mínimo 4 items en el data file.

---

## Checklist para homologar una categoría L4 nueva

### 1. Data file (`src/data/[categoria]-productos.ts`)
- [ ] Interface incluye `variantes?: Variante[]`
- [ ] Interface incluye `img?: string`
- [ ] Interface incluye `variantesEyebrow?`, `variantesTitleLine1?`, `variantesTitleLine2?`, `variantesBodyPara?`
- [ ] **Cada producto** tiene `variantes: [...]` con **mínimo 4 items**
- [ ] Cada variante tiene: `nombre`, `badge?` (norma o característica clave), `desc` (2-3 oraciones), `specs` (una línea: "Clave · Valor"), `waText` (mensaje completo WhatsApp)
- [ ] `variantesEyebrow` = "Configuraciones disponibles" / "Modelos disponibles" / "Agentes disponibles" (según contexto)

### 2. Template (`src/pages/[categoria]/[producto].astro`)
- [ ] Importa `SectionHeaderDuo` (NO `SectionHeader`)
- [ ] Importa `TrustIndex`
- [ ] Importa `Normas[Categoria]`
- [ ] Importa `'../../styles/product-page.css'` y `'../../styles/pages.css'`
- [ ] Usa `cat-section cat-section--white/gray` (NO `prod-section` ni `section`)
- [ ] S1/S2/S3 usan `l4-svc-grid` + `srv-mini` con numeración `01, 02...`
- [ ] S6 usa `catidx-grid--compact` + `ccard--text` + `ccard--cta-wa`
- [ ] Tiene `hasVariantes = Boolean(data.variantes && data.variantes.length > 0)`
- [ ] S0 es condicional: `{hasVariantes && (<section class="cat-section cat-section--white" id="variantes">...`
- [ ] Alternancia de fondos implementada con ternario en S1/S2/S3
- [ ] `<style>` scoped al final con `.ccard--text`, `.ccard__badge--top`, `.catidx-grid--compact`

### 3. Verificación visual
- [ ] Navegar a `/[categoria]/[slug]/` en localhost
- [ ] Confirmar `#variantes` existe en el DOM (`document.querySelector('#variantes')`)
- [ ] Confirmar que los títulos de variantes son correctos: `document.querySelectorAll('#variantes .ccard__title')`
- [ ] Confirmar alternancia de fondos correcta (blanco/gris/blanco/gris)
- [ ] Confirmar que TrustIndex y Normas aparecen

---

## Orden canónico de secciones

```
CategoryLayout (Hero + CtaBar)
  S0 cat-section--white   ← CONDICIONAL si data.variantes.length > 0
                             SectionHeaderDuo + catidx-grid (.ccard + ccard--cta-wa)
  S1 cat-section--gray*      SectionHeaderDuo + l4-svc-grid (características) + inline-cta
  S2 cat-section--white*     SectionHeaderDuo + l4-svc-grid (cuándo usar) + inline-cta
  S3 cat-section--gray*      SectionHeaderDuo + l4-svc-grid (servicios, links)
  S4                         <TrustIndex />        ← fondo propio
  S5                         <Normas[Categoria] /> ← fondo propio
  S6 cat-section--white      SectionHeaderDuo + catidx-grid--compact (ccard--text + ccard--cta-wa)
FaqCotizacionIndex → CTAFinal
```

*Alternancia: con variantes → S1=gray, S2=white, S3=gray | sin variantes → S1=white, S2=gray, S3=white

---

## Estado de categorías L4 al 2026-04-12

| Categoría | Template | Variantes en datos | Observación |
|---|---|---|---|
| extintores | ✅ | ✅ 10 productos | Referencia canónica original |
| equipo-bomberos | ✅ | ✅ 4/7 con variantes | 3 sin variantes (pendiente imagen) |
| gabinetes | ✅ | ✅ 4/4 con variantes | Completo |
| mangueras | ✅ | ✅ 4/6 con variantes | 2 sin variantes por diseño |
| **sistemas** | ✅ | ✅ **5/5 — completado hoy** | Todos tienen 4 variantes |
| primeros-auxilios | ✅ | — (no aplica) | Sin variantes por decisión |
| senalamientos | ✅ | ❓ verificar | Pendiente auditoría |
| equipo-seguridad | ✅ | ❓ verificar | Pendiente auditoría |

### Próximo paso: auditar senalamientos y equipo-seguridad

Antes de cerrar la homologación completa del sitio, revisar:
1. Abrir `src/data/senalamientos-productos.ts` — ¿tiene `variantes: [...]` en cada producto?
2. Abrir `src/data/equipo-seguridad-productos.ts` — ¿tiene `variantes: [...]` en cada producto?
3. Si no → agregar 4 variantes por producto siguiendo el patrón de `sistemas-productos.ts`

---

## Referencia técnica completa

→ Ver `docs/L4-UNIVERSAL-TEMPLATE.md` para el template completo con código Astro y TypeScript.

---

## Por qué ocurrió el error en sistemas

Al crear `sistemas-productos.ts`, se definió correctamente la interface `ProductoSistemasData` con `variantes?: VarianteSistema[]`, pero al escribir los datos de los 5 productos NO se poblaron las variantes. El template `[producto].astro` tenía la S0 lista y funcional, pero como `data.variantes` era `undefined`, `hasVariantes` era `false` y la sección nunca rendereizaba.

**La solución** (aplicada 2026-04-12): poblar `variantes: [...]` directamente en los datos de cada producto en `sistemas-productos.ts`. Sin cambios al template.

El mismo error podría ocurrir en cualquier categoría donde la interface soporte variantes pero los datos no las tengan escritas.
