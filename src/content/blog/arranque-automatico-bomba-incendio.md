---
title: "Arranque Automático de Bomba Contra Incendio: Cómo Funciona y Cómo Mantenerla Lista"
description: "Sistemas de arranque automático de bombas, presostato, jockey pump, mantenimiento preventivo y pruebas funcionales."
pubDate: 2025-11-25
category: "Sistemas"
---

## La paradoja del "automático"

Una bomba contra incendio se llama "automática" porque arranca sin intervención humana. Pero en realidad, requiere más cuidado que un sistema manual. Porque si una bomba automática falla silenciosamente, nadie lo sabe hasta que hay un incendio y el sistema no funciona.

Un técnico de mantenimiento puede presionar un botón y escuchar una bomba manual arrancar. Verá que funciona. Pero una bomba automática no arranca simplemente porque la ordenemos. Solo arranca en respuesta a una caída de presión. Si nunca hace esa prueba de forma específica, nunca sabrá si el sistema funciona.

## Cómo funciona el arranque automático

El corazón del sistema automático es el **presostato**: un sensor de presión con dos "puntos de seteo" (presiones ajustables donde el comportamiento cambia).

### El presostato: dos contactos, dos presiones

Imagina un interruptor mecánico sensible a presión. Tiene:

**Contacto de arranque**: Se "cierra" (se activa) cuando presión CEDE POR DEBAJO de cierto valor
- Seteo típico: 20 PSI (cuando presión baja a menos de 20, contacto se activa)
- Significado: "El agua está fluyendo. Necesito presión. Arrancar bomba."

**Contacto de parada**: Se "abre" (se desactiva) cuando presión SUBE POR ENCIMA de cierto valor
- Seteo típico: 80 PSI (cuando presión sube a más de 80, contacto se desactiva)
- Significado: "Presión restaurada. Suficiente. Detener bomba."

### Ejemplo de operación paso-a-paso

**Estado inicial** (sin incendio):
- Presión en sistema: 80 PSI (mantenida por jockey pump)
- Presostato: Contacto de arranque ABIERTO (sin señal), contacto de parada CERRADO (sistema monitoreado)
- Bomba: Apagada
- Jockey pump: Funcionando, manteniendo presión

**Incendio activa sprinkler**:
- Agua fluye rápidamente del sprinkler abierto
- Presión desciende: 80 → 70 → 50 → 30 PSI
- En 30 PSI (baja de seteo de 20): Presostato contacto de arranque cierra
- Contacto activado envía señal a tablero de control: "Arrancar bomba"

**Tablero de control responde**:
- Recibe señal del presostato
- Verifica: "¿Hay falla del motor?" (No, está disponible)
- Verifica: "¿Hay voltaje disponible?" (Sí, electricidad normal)
- Tablero cierra relé de motor: Corriente fluye al arrancador
- Motor comienza a girar, bomba comienza a bombear agua

**Presión se restaura**:
- Agua desde bomba presiona sistema
- Presión sube: 30 → 50 → 70 → 80 → 90 → 100 PSI
- En 80 PSI (sube de seteo de 80): Presostato contacto de parada abre
- Contacto abierto interrumpe señal a tablero: "Parar bomba"

**Tablero de control responde**:
- Recibe fin de señal del presostato
- Espera 30-60 segundos (tiempo muerto, para evitar "ciclado rápido": encender/apagar cada segundo)
- Después del tiempo muerto: Abre relé de motor
- Motor reduce velocidad y se apaga
- Jockey pump toma nuevamente el control

**Sistema regresa a reposo**:
- Presión se estabiliza en 80 PSI
- Presostato vuelve a contacto de arranque ABIERTO
- Sistema en standby, listo para próxima alarma

Esta secuencia ocurre en **15-30 segundos totales**. Es invisible. El operador ni se da cuenta.

## Jockey pump: el sistema que mantiene "siempre listo"

La jockey pump es una **bomba pequeña** (típicamente 0.5-2 HP) que se ejecuta **continuamente** durante la operación normal del edificio (día, noche, 24/7).

**Función**: Mantener presión del sistema en 80 PSI sin usar la bomba principal de 20 HP.

**¿Por qué es necesaria?**

Si solo hubiera una bomba (la de 20 HP), y no hubiera jockey pump:

- El sistema estaría a presión 0 cuando no hay incendio
- Cuando hay fuego y presión cae, presostato detecta caída
- Bomba principal arranca desde reposo
- Toma 5-10 segundos para que motor acelere
- Durante esos 5-10 segundos, agua no está llegando a sprinklers a presión adecuada
- Sprinklers funcionan débilmente al principio

Con jockey pump:

- Sistema siempre está a 80 PSI (energía mínima invertida)
- Cuando hay fuego y presión cae, es caída MÁS LEVE (80 → 20 PSI)
- Presostato detecta caída rápidamente
- Bomba principal arrasta desde 80 PSI, no desde 0
- Aceleración a presión de operación es más rápida
- Sprinklers están a presión completa en segundos, no minutos

**Resultado**: Respuesta más rápida, más efectiva.

**Consumo energético**: La jockey pump típicamente consume 2-5 kW continuamente. Costo operativo bajo pero continuo (24 horas × 365 días).

## Diferencia entre jockey pump manual vs. automática

### Jockey pump manual

- Operario PRESIONA un botón para encender
- Operario PRESIONA otro botón para apagar
- Ningún automatismo
- Riesgo: Operario olvida encender, sistema no está presurizado

Esta configuración NO es aceptada por NFPA 20.

### Jockey pump automática

- Pequeño presostato independiente monitorea presión
- Si presión cae (por fuga mínima en tuberías), presostato activa jockey pump
- Jockey pump se ejecuta hasta restaurar presión
- Presostato detecta presión alta, apaga jockey pump
- Cicla continuamente sin intervención humana

Esta configuración es lo exigido por NFPA 20.

## Detección de fallas en el sistema de arranque

Es crítico saber si el sistema automático está en mal estado ANTES de que haya un incendio. Hay varias formas de detectar fallas:

### Método 1: Prueba de presión visual

**Qué revisar**: Manómetro en el tablero de control

- **Presión normal**: 80 PSI en reposo, sube a 100+ PSI cuando bomba está en marcha
- **Presión baja**: < 60 PSI. Indica fuga en tuberías o jockey pump dañada
- **Presión fluctuante**: Sube/baja constantemente. Indica válvula dañada o sensor de presión con problema

Si manómetro muestra algo diferente a lo normal, hay problema. No es seguro operar el sistema así.

### Método 2: Prueba de arranque manual

**Cómo se hace**:

1. Sistema en reposo (80 PSI, jockey pump funcionando normal)
2. Presionar **botón de prueba** en tablero (este botón simula caída de presión)
3. Bomba DEBE arrancar dentro de 5 segundos
4. Motor DEBE alcanzar velocidad operativa dentro de 15 segundos
5. Presión DEBE aumentar a 100+ PSI dentro de 30 segundos
6. Liberar botón de prueba
7. Bomba DEBE detenerse dentro de 60 segundos

Si alguno de estos pasos falla, hay problema:

- Bomba no arranca: Posible problema de motor, conexión eléctrica, o tablero
- Motor no acelera: Posible rotor trabado, cojinetes dañados
- Presión no aumenta: Posible válvula cerrada, bomba dañada, fuga grande
- Bomba no se detiene: Presostato dañado, tablero dañado

### Método 3: Inspección visual del motor

Regularmente:

- ¿Motor tiene herrumbre o corrosión?: Indica ambiente húmedo dañino
- ¿Hay fugas de agua cerca del motor?: Indica sello dañado
- ¿Motor tiene correa suelta o rota?: Indica falta de mantenimiento
- ¿Hay acumulación de polvo/suciedad?: Obstruye ventilación

### Método 4: Audición de jockey pump

Durante el día:

- Escuchar ciclos de jockey pump
- Normal: Arranca 1-2 veces por hora por algunos minutos, luego se detiene
- Anormal: Funciona continuamente. Indica fuga importante en tuberías

Continua funcionamiento sugiere:

- Fuga en tuberías (posible ruptura)
- Válvula de alivio abierta (devuelve agua constantemente)
- Sensor de presión defectuoso (nunca "ve" presión alta)

## Programa de mantenimiento preventivo

### Semanal (7 días)

**Prueba de arranque manual** (como se describe arriba)
- Botón de prueba presionado por 5-10 segundos
- Verificar que bomba arranca y presión aumenta
- Verificar que bomba se detiene cuando botón se libera

**Inspección visual**
- Manómetro muestra 80 PSI (en reposo)
- Motor sin fugas visibles
- Tablero: luces indicadoras verdes (sistema normal)

**Registro**: Anotar presión, hora de prueba, observaciones anormales

### Mensual (30 días)

**Prueba de arranque más larga**
- Presionar botón de prueba, mantener 30 segundos
- Bomba debe mantener presión durante este período
- Liberar botón, verificar que se detiene en tiempo apropiado

**Inspección de jockey pump**
- Contar ciclos: ¿Cuántas veces arranca/detiene en una hora?
- Normal: 1-3 ciclos
- Anormal (> 5 ciclos): Posible fuga

**Inspección de tablero**
- Revisar que no haya signos de sobrecalentamiento
- Revisar conexiones: ¿Hay corrosión en terminales?
- Limpiar polvo del exterior

### Trimestral (90 días)

**Prueba de caudal** (si es posible)
- Abrir válvula de drenaje del sistema
- Dejar que agua fluya desde sprinkler designado
- Medir caudal (cantidad de agua por minuto)
- Caudal debe ser consistente con diseño del sistema
- Si caudal es menor al esperado, posible obstrucción

**Inspección de tuberías**
- Buscar visualmente fugas (agua goteando, manchas oxidadas)
- Tocar tuberías: ¿Hay vibración anormal durante operación?
- Vibración anormal sugiere falta de soporte o válvula defectuosa

**Inspección eléctrica**
- Verificar voltaje disponible en terminal de motor
- Normal: 220V (o 440V dependiendo sistema)
- Bajo: Problema de generador o conexión principal

### Anual (365 días)

**Certificación profesional**
- Ingeniero especializado inspecciona sistema completo
- Prueba de caudal formal (puede requerir simulación)
- Prueba de presión con agua a presión de diseño
- Inspección de bompa: Internos, sellos, cojinetes
- Inspección de motor: Bobinado, cojinetes, arranque
- Inspección de tablero: Todos los relés, contactores, sensores
- Documentación completa de hallazgos

**Cambios de aceite/lubricantes** (si aplica)
- Bomba con cojinetes de aceite requiere cambio anual
- Motor eléctrico típicamente no requiere cambio

**Reemplazo de partes desgastadas**
- Sellos: Típicamente reemplazados cada 2-3 años
- Cojinetes: Típicamente reemplazados cada 3-5 años
- Correas: Reemplazadas cuando muestren desgaste

## Fallas comunes y síntomas

### Falla: Motor no arranca

**Síntomas**:
- Presionar botón de prueba → Nada ocurre
- Amperímetro no muestra carga
- Luz indicadora roja se activa

**Causas posibles**:
- Disyuntor disparado (protección de sobrecarga)
- Conexión eléctrica rota
- Motor defectuoso
- Tablero defectuoso

**Solución**: Revisar disyuntor, inspeccionar conexiones, llamar técnico si no se encuentra causa.

### Falla: Motor arranca pero presión no aumenta

**Síntomas**:
- Motor se ejecuta (audible, amperímetro muestra carga)
- Manómetro permanece bajo (< 50 PSI)
- Jockey pump no se activa (presión nunca sube a 80)

**Causas posibles**:
- Válvula de succión cerrada (obstruye entrada de agua)
- Bompa defectuosa (impulsor roto)
- Tuberías principales obstruidas
- Válvula de alivio abierta (agua regresa al tanque)

**Solución**: Revisar válvulas de succión/descarga, inspeccionarentrada de agua, llamar técnico.

### Falla: Presión fluctúa constantemente

**Síntomas**:
- Manómetro sube/baja sin razón aparente
- Jockey pump cicla continuamente (arranca/detiene cada pocos minutos)
- Sistema nunca se estabiliza

**Causas posibles**:
- Fugas en tuberías (agua se escapa)
- Válvula de alivio defectuosa (abre cuando presión es normal)
- Presostato defectuoso (contactos no cierran/abren correctamente)

**Solución**: Inspeccionar tuberías visualmente, revisar válvula de alivio, llamar técnico para presostato.

### Falla: Motor no se detiene

**Síntomas**:
- Motor arranca (cuando debería)
- Pero continúa funcionando incluso después de que presión está alta
- Motor solo se detiene si presionas botón de parada de emergencia

**Causas posibles**:
- Presostato contacto de parada defectuoso
- Tablero dañado (no recibe señal de parada)
- Tiempo muerto del tablero muy largo

**Solución**: Revisar presostato, llamar técnico para tablero.

## Documentación obligatoria

Bajo NFPA 20 y regulaciones mexicanas (Protección Civil, STPS), DEBES mantener:

1. **Registro de pruebas semanales**: Fecha, hora, presión inicial, presión después de arranque, observaciones
2. **Registro de pruebas mensuales**: Más detallado, incluye duración de prueba, caudal si es medido
3. **Certificado de inspección anual**: Firma de ingeniero certificado
4. **Histórico de mantenimiento**: Partes reemplazadas, fecha de cambio
5. **Histórico de fallas**: Cada falla encontrada, causa, solución

**Auditoría regulatoria**: Protección Civil puede solicitar estos registros en cualquier momento. La falta de documentación es violación de normativa, independiente de si el sistema funciona o no.

## PROYECTORED: Servicio de mantenimiento preventivo

En PROYECTORED ofrecemos programa de mantenimiento preventivo que incluye:

- Pruebas semanales (personal visitante)
- Inspecciones mensuales (técnico especializado)
- Certificación anual (ingeniero tercero)
- Documentación completa para auditoría
- Reemplazo de partes desgastadas
- Servicio de emergencia 24/7 si sistema falla

Una bomba bien mantenida es una bomba que funciona cuando más la necesitas.

Contáctanos al 525537238544 por WhatsApp para programa de mantenimiento para tu sistema.
