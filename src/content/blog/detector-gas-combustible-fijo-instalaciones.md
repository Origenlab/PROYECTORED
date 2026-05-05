---
title: "Detector de Gas Fijo para Instalaciones: Dónde Instalarlo y Cómo Funciona el Sensor Catalítico"
description: "Detectores fijos vs portátiles, ubicación estratégica de sensores, cómo funcionan sensores catalíticos vs infrarrojos para detección de gas."
pubDate: 2025-10-02
category: "Sistemas"
---

## Detección fija: monitoreo que no duerme

Una gasolinera en Monterrey tiene decenas de puntos donde el gas combustible puede acumularse: bombas de combustible, tuberías subterráneas, almacenes de respaldo. Un detector portátil revisado manualmente cada 8 horas no es suficiente. Lo que se necesita es un sistema que SIEMPRE está vigilando, que alerta inmediatamente cuando la concentración sube, que despierta al personal dormido a las 3 de la mañana si hay una fuga.

Eso es un detector de gas combustible fijo.

## Detección fija vs. detección portátil: un análisis de cobertura

**Detección portátil** requiere que un técnico:
- Camine deliberadamente a cada ubicación
- Active el equipo
- Espere tiempo de estabilización (30-60 segundos)
- Registre la lectura

En una instalación grande, esto toma 30-45 minutos. Significa que el espacio que fue medido primero hace 40 minutos ya tiene condiciones potencialmente diferentes. La detección es "snapshot": una fotografía de un momento específico.

**Detección fija** proporciona monitoreo continuo 24/7:
- Cien mediciones por segundo en su ubicación
- Alarma instantánea si concentración sube
- No requiere intervención humana
- Genera histórico de datos completo para auditoría

Para instalaciones donde el riesgo es constante (no periódico), la detección fija es superior.

## Dónde instalar detectores fijos: densidad del gas y estratificación

El gas combustible no se distribuye uniformemente en un espacio. Se "estratifica": se hunde o sube dependiendo de su densidad molecular en comparación con el aire.

El aire a nivel del mar tiene densidad de 1.29 kg/m³. Los gases se comportan así:

**Gases más densos que el aire (se hunden)**
- Propano (densidad 1.88): se acumula en pisos, sótanos, sumideros
- Butano (densidad 2.48): se acumula más que el propano
- Gasolina vaporizada (típicamente densa): se acumula en zonas bajas

**Gases menos densos que el aire (suben)**
- Metano (densidad 0.72): se acumula en techos, esquinas altas
- Hidrógeno (densidad 0.09): sube rápidamente hacia techos

### Ubicación correcta de detectores

Para una instalación con propano, se deben instalar sensores:

- **50% de los sensores a 30-60 cm del piso** (donde el propano se acumula)
- **50% de los sensores a 1.5-2 metros de altura** (detectar también propagación y migración)

Para una instalación con metano (depósito de gas natural), invertir el esquema:

- **50% de los sensores a 30 cm del techo**
- **50% de los sensores a altura media**

La instalación de un detector LEL en una pared a media altura, sin considerar densidad del gas, es instalación incorrecta. El detector puede estar funcionando perfectamente pero simplemente nunca detectará fugas porque está en el lugar equivocado.

## Distancia de cobertura: cuántos detectores necesitas

Cada detector tiene un **radio de cobertura efectivo** que depende de:

- **Diseño de la cabeza sensora**: diámetro y forma de la entrada
- **Flujo de aire**: ventilación o estancamiento afecta qué tan rápido el gas llega al sensor
- **Obstrucciones**: columnas, máquinas, paredes interfieren en la detección

NFPA 72 recomienda que un detector LEL cubra una área de máximo 50 metros cuadrados. En una zona muerta (sin flujo de aire), 30 metros cuadrados es más realista.

Para una instalación de 500 m² con múltiples zonas de riesgo, se necesitan mínimo 10-15 detectores estratégicamente ubicados.

## Sensor catalítico vs. sensor infrarrojo: tecnología comparada

Los dos tipos principales de sensores para detección de gas combustible funcionan por principios completamente diferentes.

### Sensor Catalítico (Perla Catalítica)

**Cómo funciona**: Contiene dos filamentos de platino enrollados, cada uno cubierto por material catalítico (típicamente óxido de aluminio con platino disperso):

1. **Filamento de referencia**: protegido del gas, mantiene temperatura constante
2. **Filamento de detección**: expuesto al ambiente

Cuando gas combustible toca el filamento de detección, ocurre **oxidación catalítica**: el gas se quema lentamente en la superficie del catalizador, liberando calor. Este calor incrementa la resistencia eléctrica del filamento.

El circuito está configurado como puente Wheatstone. La diferencia de resistencia entre filamentos (uno quemando combustible, uno de referencia) genera una señal proporcional a la concentración de gas.

**Ventajas del sensor catalítico**:
- Detecta prácticamente cualquier gas combustible
- Rango amplio (0-100% LEL típicamente)
- Costo relativamente bajo
- Respuesta rápida (segundos)

**Desventajas del sensor catalítico**:
- Requiere calibración frecuente (cada 6 meses a 1 año)
- Sensible a "envenenamiento catalítico": sustancias que cubre el catalizador (silicona, sulfuros, halogens)
- Consume energía calibración (prueba con gas patrón periódicamente)
- La vida útil del sensor es limitada (3-5 años)

### Sensor Infrarrojo (IR)

**Cómo funciona**: Emite luz infrarroja a través de una cámara de gas. Diferentes moléculas de gas absorben luz infrarroja en diferentes longitudes de onda. Al medir cuánta luz IR es absorbida, se puede cuantificar qué gas está presente y en qué concentración.

**Ventajas del sensor IR**:
- Menos afectado por envenenamiento (la luz IR no es catalizador)
- Vida útil más larga (7-10 años)
- Requiere menos mantenimiento
- No es afectado por algunos contaminantes que envenenan sensores catalíticos

**Desventajas del sensor IR**:
- Costo significativamente más alto (2-3 veces más caro que catalítico)
- Pueden ser afectados por condensación y suciedad óptica
- Más complejos, requieren electrónica más sofisticada
- Respuesta puede ser más lenta en algunas condiciones

## Cuándo usar cada tipo

**Usar sensor catalítico cuando**:
- Presupuesto es limitado
- Instalación está en ambiente limpio (sin polvo, sin vapores contaminantes)
- Personal está capacitado para mantener calibración regular
- Gas a detectar es simple (propano, butano, metano)

**Usar sensor infrarrojo cuando**:
- Ambiente tiene contaminantes que pueden envenenar catalizador (talco, silicona, sulfuros)
- Instalación requiere mínimo mantenimiento
- Presupuesto permite la inversión mayor
- Detección a largo plazo sin revisión frecuente es crítica

## Integración con panel de control

Un detector fijo de gas combustible es como una cámara de seguridad sin monitor: solo detecta pero no comunica. Para que sea útil, debe estar conectado a un **panel de control direccionable** que:

- Recibe la señal del detector
- Muestra la concentración en tiempo real en una pantalla central
- Activa alarmas audibles y visuales al alcanzar umbrales
- Puede disparar acciones automáticas (encender ventilación, cerrar válvulas solenoide)
- Registra histórico de lecturas para auditoría

La integración típica en una gasolinera o planta química mexicana sigue este esquema:

1. Múltiples detectores LEL distribuidos en zonas de riesgo
2. Línea de señal (normalmente 4-20 mA) a panel de control central
3. Panel decodifica la señal y muestra concentración actual
4. Programación del panel define alarmas (10% LEL = pre-alarma, 25% LEL = alarma principal, 50% LEL = crítico)
5. Cada nivel de alarma dispara acciones programadas
6. Sistema envía alertas a smartphone del supervisor (opcional pero recomendado)

## Calibración y mantenimiento periódico

Aunque menos frecuente que equipos portátiles, los detectores fijos TAMBIÉN requieren calibración:

- **Prueba funcional cada 3 meses**: exposición a gas patrón de concentración conocida, verificar que el detector responda correctamente
- **Calibración completa cada 6 meses a 1 año**: exposición a gas patrón certificado, ajuste de amplificador si es necesario
- **Limpieza de ventilaciones**: cada 3 meses (polvo y suciedad pueden obstruir entrada de aire)
- **Inspección visual**: verificar integridad física, protecciones, cableado

La falta de calibración es la razón número uno por la cual los detectores fijos PARECEN funcionar pero en realidad están desensibilizados. Una instalación puede estar rodeada de gas sin que el detector responda.

## Casos de incumplimiento en México

Un detector fijo instalado 5 años atrás "está bien mientras no suene, ¿verdad?" **Incorrecto.** Un detector nunca calibrado es un detector que no funciona. Es equivalente a tener un extintor fijo sin mantenimiento: se vuelve decoración.

Protección Civil CDMX y reguladores de STPS en inspecciones verifican:

- Fecha de última calibración
- Certificado de calibración del servicio técnico
- Registro de pruebas funcionales
- Año de instalación del sensor (reemplazo requerido después de edad específica)

Incumplimiento resulta en orden de cierre de operación hasta que el sistema sea corregido.

## Instalación profesional según NFPA 72

La instalación de detectores fijos debe cumplir NFPA 72 (Código Nacional de Alarma de Incendio), que es adoptado por referencia en muchas regulaciones mexicanas.

NFPA 72 especifica:
- Altura de instalación (según tipo de gas)
- Distancia mínima de paredes y obstrucciones
- Tipo de protección física requerida
- Métodos de cableado (debe ser circuito de alarma dedicado, no compartido)
- Pruebas de aceptación ante instalación completa

Una instalación "en la pared donde hay espacio" sin respeto a NFPA 72 resultará en zonas muertas donde el gas NO será detectado.

## Por qué PROYECTORED importa en esto

En PROYECTORED diseñamos y instalamos sistemas de detección fija que respetan NFPA 72, se calibran según especificaciones de fabricante, y se documentan completamente para auditoría regulatoria. Nuestros detectores son importados certificados, calibrados en origen, y en operación en México bajo supervisión técnica permanente.

No instalamos "un detector en una pared". Realizamos evaluación de riesgo, identificamos puntos críticos, calculamos cobertura según densidad del gas, seleccionamos tipo de sensor apropiado para tu ambiente, integramos con panel de control, documentamos todo y entrenamos a tu personal.

Contáctanos al 525627596245 por WhatsApp para consulta sobre instalación de sistema de detección fija para tu planta, gasolinera o almacén.
