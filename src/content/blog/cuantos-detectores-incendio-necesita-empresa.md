---
title: "¿Cuántos Detectores de Incendio Necesita tu Empresa? Cálculo y Diseño según NFPA 72"
description: "Cálculo de cobertura de detectores de incendio. NFPA 72 y NOM normativas. Errores comunes en diseño de sistemas."
pubDate: 2025-11-12
category: "Sistemas"
---

## El mito del "un detector por oficina"

Una empresa en Polanco con 15 oficinas compra 15 detectores de humo, los instala "uno en cada oficina" y considera su sistema completo. Seis meses después, hay un incendio en un pasillo común entre oficinas. Nadie en las oficinas detecta el incendio hasta que el humo viene bajo la puerta. Pierden 20 minutos críticos. El incendio se propaga. Daño severo.

El número de detectores no se calcula por "cuántas habitaciones tenemos". Se calcula por **área de cobertura efectiva** basada en tipo de detector, altura del techo, y características del espacio.

## NFPA 72: El estándar de cobertura

La NFPA 72 es la norma que especifica requisitos cuantitativos para detección de incendio. Es adoptada de facto en México, incluso en regulaciones locales como Protección Civil CDMX.

### Cobertura de detectores de humo

Un detector de humo típico tiene una **cobertura nominal de 75-100 metros cuadrados** bajo condiciones ideales:

**Condiciones ideales** (máxima cobertura):
- Techo plano a altura estándar (2.4-3.0 metros)
- Sin obstrucciones (vigas, columnas)
- Flujo de aire uniforme

**Condiciones reales** (cobertura reducida):
- Techos con vigas o bandejas: 50-75 m²
- Techos altos (> 4 metros): puede ser mayor, pero requiere distribución diferente
- Áreas con obstrucciones: 30-50 m²

Trabajando de forma conservadora (estándar en México por regulación), se asume:

**Para zona abierta de 500 m² sin obstrucciones**:
- 500 m² ÷ 75 m²/detector = 6.67 detectores
- Redondeado: **7 detectores mínimo**

**Para zona con obstrucciones importantes**:
- 500 m² ÷ 50 m²/detector = 10 detectores

### Cobertura de detectores de calor

Los detectores de calor tienen **cobertura nominal mayor** (100-150 m²) porque responden a temperatura en lugar de partículas suspendidas:

- Detección de humo: responde a partículas, afectada por dispersión de humo
- Detección de calor: responde a radiación térmica, efectivo incluso cuando hay aire turbulento

Sin embargo, los detectores de calor tienen **más retraso en respuesta** que detectores de humo.

**Ventaja**: Menos falsas alarmas (cocina industrial no activa detector de calor como lo haría uno de humo)
**Desventaja**: El incendio puede estar más avanzado cuando se detecta

## Cálculo de cobertura para edificio completo

Tomemos un ejemplo de edificio típico en CDMX: oficina de servicios de 4 pisos, 2,000 m² total.

**Piso 1**: 500 m² (zona abierta de call center)
- Altura: 3 m, sin obstrucciones
- Cobertura por detector: 75 m²
- Detectores requeridos: 500 ÷ 75 = 6.67 → **7 detectores de humo**

**Piso 2**: 500 m² (oficinas privadas)
- Altura: 2.8 m, múltiples salas separadas
- Cobertura por detector: 75 m² por sala
- Detectores requeridos: **1 por sala + áreas comunes = 6-8 detectores**

**Piso 3**: 500 m² (almacén de archivo)
- Altura: 4.5 m (almacén alto)
- Obstrucciones: estantes de archivo
- Cobertura efectiva reducida: 50 m²
- Detectores requeridos: 500 ÷ 50 = 10 → **10-12 detectores**

**Piso 4**: 500 m² (servidores + archivos digitales)
- Riesgo especial: equipos electrónicos
- Altura: 3 m, con equipamiento denso
- Requiere detector de calor + detector de humo (redundancia)
- Cobertura: 50 m² por tipo
- Detectores requeridos: **10 de humo + 6 de calor = 16 detectores**

**TOTAL PARA EDIFICIO**: 7 + 7 + 11 + 16 = **~41 detectores**

Para un edificio de 2,000 m², la proporción es aproximadamente **1 detector cada 50-75 m²** considerando que pisos con alto riesgo requieren más densidad.

Si la empresa había instalado solo 15 detectores, estaba 65% por debajo de lo requerido.

## Tipos de espacios: cálculo diferenciado

### Oficinas abiertas (call centers, trading floors)

- Cobertura: 75-100 m² por detector
- Tipo: Detectores de humo fotoeléctricos (sensibles a partículas grandes de humo)
- Consideración especial: Sistema de climatización centralizado puede dispersar humo. Los detectores deben colocarse para que humo llegue a ellos rápidamente

### Almacenes altos

- Cobertura: 30-50 m² por detector (mala visibilidad, obstrucciones)
- Tipo: Combinación de detectores a altura media + detectores en techo
- Consideración especial: Humo se eleva. En almacén de 10 metros de altura, hay detector en techo pero quizás falta humo en niveles medios porque "ya está arriba"

### Cuartos de servidores

- Cobertura: 25-50 m² por detector (riesgo electrónico)
- Tipo: Detector de humo + detector de calor (redundancia)
- Consideración especial: Pueden requerir detector de aspiración (que "aspira" aire continuamente a través de sensor, detectando humo más tempranamente)

### Cocinas industriales

- Cobertura: 50-75 m² por detector
- Tipo: **Solo** detector de calor (detector de humo generaría falsas alarmas por vapor)
- Consideración especial: No usar detectores de humo en cocinas bajo ninguna circunstancia

### Aparcamientos subterráneos

- Cobertura: 50-75 m² por detector
- Tipo: Detectores de humo ópticos (sensibles a humo visible de gasolina)
- Consideración especial: Altura de instalación importante (humo de auto se eleva rápidamente, detector debe estar a altura media/alta)

### Áreas con riesgo químico

- Cobertura: 25-50 m² por detector (máxima densidad)
- Tipo: Pueden requerir detector de gas (CO, detección adicional)
- Consideración especial: Gases químicos interfieren con detección de humo. Pueden requerir sensores especializados

## Errores comunes en cálculo

### ERROR 1: Contar habitaciones en lugar de metros cuadrados

"Tenemos 20 oficinas, así que necesitamos 20 detectores."

Una oficina puede ser 15 m² (cubículo) o 60 m² (sala de juntas grande). No todas las oficinas son iguales. El cálculo debe ser por área total, no por número de espacios.

**Correcto**: Medir área total, dividir por cobertura de detector, sumar densidad especial para áreas de riesgo.

### ERROR 2: Ignorar pasillos comunes

"Los pasillos no tienen riesgo, solo ponemos detectores en las oficinas."

Los pasillos son espacios de tránsito donde un incendio puede desarrollarse sin ser visto. Un incendio en un pasillo afecta la evacuación de TODO el piso.

**Correcto**: Calcular detectores para pasillos como área separada (30-50 m² por detector).

### ERROR 3: Instalar solo detectores de humo en todas partes

"Los detectores de humo son suficientes, ¿para qué queremos calor?"

En algunos espacios (cocinas, salas de máquinas), los detectores de humo generan falsas alarmas constantemente. En otros (salas de servidores), puede no ser suficiente detección.

**Correcto**: Usar combinación: humo en áreas normales, calor en cocinas, ambos en servidores.

### ERROR 4: Instalar todo el máximo requerido "por si acaso"

"Vamos a poner un detector cada metro cuadrado para estar super seguros."

Demasiados detectores generan más falsas alarmas. Cada alarma falsa reduce la credibilidad del sistema. Los empleados comienzan a ignorar alarmas.

**Correcto**: Instalar cantidad recomendada según NFPA 72. No más, no menos.

### ERROR 5: No considerar cambios de uso del espacio

La oficina se remodela. Se quita una pared. Ahora hay un espacio de 200 m² donde antes había dos de 100 m² cada uno. Los detectores originales ya no cubren bien.

**Correcto**: Recalcular cobertura cada vez que hay cambio estructural importante.

## Densidad de detectores según riesgo de incendio

La NFPA 72 también clasifica espacios por **nivel de riesgo de incendio**:

### Riesgo bajo (Light Hazard)

- Ocupación: Oficinas, escuelas, bibliotecas
- Combustible: Bajo (papel, algunos muebles)
- Cobertura: 75-100 m² por detector
- Ejemplo: Oficina ejecutiva de 80 m² requiere 1 detector

### Riesgo ordinario (Ordinary Hazard)

- Ocupación: Fábricas ligeras, almacenes, hospitales
- Combustible: Moderado (máquinas, algunos materiales)
- Cobertura: 50-75 m² por detector
- Ejemplo: Taller de manufactura de 300 m² requiere 4-6 detectores

### Riesgo alto (Extra Hazard)

- Ocupación: Plantas químicas, almacenes de combustibles, refinerías
- Combustible: Alto (solventes, vapores, materiales inflamables)
- Cobertura: 30-50 m² por detector, posible detector de gas adicional
- Ejemplo: Planta de pinturas de 500 m² requiere 10-17 detectores

Una instalación industrial en Guadalajara clasificada como "riesgo ordinario" necesita aproximadamente el doble de detectores que una oficina del mismo tamaño clasificada como "riesgo bajo".

## Ubicación específica según NFPA 72

No es suficiente saber cuántos detectores. También hay que saber DÓNDE colocarlos.

### En techos planos

- Distancia máxima entre detectores: 4 metros
- Distancia mínima de pared: 0.5-1 metro
- Altura de instalación: a través de toda la altura (no solo en una pared)

### En techos con pendiente > 8 grados

- Pueden requerir instalación en pendiente (sigue la inclinación del techo)
- Distancia puede ser menor que techo plano

### En áreas con vigas o columnas

- Instalar detectores en "cavidades" entre vigas para máxima efectividad
- Si cavidad es > 1 metro × 1 metro, la cavidad requiere su propio detector

### En escaleras

- Detector en escalera principal (a nivel intermedio)
- Detector en área de descanso de escalera
- Detectores en ambos extremos de escalera si es muy larga

## Prueba de cobertura

Una vez instalados, la cobertura debe ser **verificada**:

- Prueba de sensibilidad: un generador de humo prueba que cada detector responde
- Medición de distancia: verifica que cada detector está a distancia máxima recomendada de otros
- Inspección visual: verifica que instalación es correcta (altura, ángulo, libre de obstrucciones)

Esta prueba es obligatoria según NOM-002-STPS en Mexico antes de "aceptar" el sistema.

## PROYECTORED: Diseño profesional de cobertura

En PROYECTORED realizamos:

- Evaluación de planos del edificio
- Clasificación de riesgos por área
- Cálculo detallado de cobertura según NFPA 72
- Diseño de ubicación específica de cada detector
- Selección de tipos de detectores apropiados (humo, calor, gas)
- Instalación profesional
- Prueba de cobertura con equipamiento certificado
- Documentación completa para Protección Civil

No realizamos instalaciones "aproximadas". Cada detector está ubicado según cálculo de ingeniería, no según intuición.

Contáctanos al 525627596245 por WhatsApp para evaluación de cobertura de tu edificio o planta. Haremos un diagrama detallado de cobertura como parte de nuestra evaluación inicial.
