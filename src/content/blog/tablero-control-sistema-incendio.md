---
title: "Tablero de Control Contra Incendios: Componentes, Función y Por Qué Debe Cumplir NFPA 20"
description: "Tablero eléctrico contra incendios, componentes, arranque automático de bomba, protecciones NFPA 20 y regulación mexicana."
pubDate: 2025-10-05
category: "Sistemas"
---

## El tablero es más que un "panel de control" genérico

Un propietario de edificio en Polanco confunde "tablero de control contra incendios" con un "tablero eléctrico normal". Ordena un tablero a un electricista común. El tablero tiene interruptores, luces, un medidor. "Parece profesional", piensa.

Semanas después, hay un simulacro de incendio. El sistema de sprinklers debería activar automáticamente. Pero nada sucede. El botón de arranque manual tiene que ser presionado por una persona. Protección Civil llega a la inspección y dice: "Este tablero no cumple NFPA 20. Cierre el edificio."

El propietario aprendió que "tablero de control contra incendios" es una especialidad. No es solo electricidad. Es electrónica de seguridad que responde a lógica de incendio, con componentes específicos que funcionan juntos para garantizar que, en caso de emergencia, la bomba contra incendio arranque automáticamente sin intervención humana.

## Diferencia fundamental: tablero contra incendios vs. tablero eléctrico normal

### Tablero eléctrico normal

- Protege equipamiento de sobrecarga eléctrica
- Distribuye electricidad a diferentes cargas
- Tiene disyuntores que disparan si hay cortocircuito
- Objetivo: Evitar daño al equipamiento

### Tablero de control contra incendios

- Además de proteger equipamiento, **hace decisiones lógicas** sobre cuándo arrancar el motor
- Arranca automáticamente basado en **señales de presión** (no de comando manual)
- Tiene protecciones especiales para **garantizar funcionamiento en emergencia**
- Objetivo: Garantizar que bomba funcione INCLUSO si hay apagón parcial o falla de otro equipamiento

**La diferencia**: Un tablero normal falla de forma "segura hacia apagado" (si hay problema, se apaga). Un tablero de incendios falla de forma "segura hacia funcionamiento" (si hay problema con señalización, el tablero asume que es emergencia y arranca la bomba de todas formas).

## Componentes del tablero de control

### 1. Presostato (Sensor de presión)

Es el "cerebro sensorial" del sistema.

- Monitorea la **presión del agua** en la línea principal de sprinklers
- Cuando la presión cae (porque un sprinkler se abrió por calor del incendio), el presostato lo detecta
- Tiene dos contactos ajustables:
  - **Contacto de arranque**: Se activa a presión baja (típicamente 20 PSI)
  - **Contacto de parada**: Se activa a presión alta (típicamente 80 PSI)

**Ejemplo de lógica**:
- Sistema en reposo: Presión en 80 PSI (jockey pump mantiene esta presión)
- Incendio activa sprinkler: Presión cae a 40 PSI
- Presostato detecta caída: Contacto de arranque se activa
- Tablero recibe señal: Ordena arranque de motor
- Motor arranca, bomba se ejecuta: Presión sube a 100 PSI
- Presión alcanza 100 PSI: Presostato detecta presión alta, contacto de parada se activa
- Tablero recibe señal: Ordena parada de motor (hasta que presión caiga nuevamente)

### 2. Arrancador de motor eléctrico

Si el motor es eléctrico (lo más común), el tablero contiene un **arrancador de motor**, también llamado **starter**.

**Función**: Proporciona la corriente correcta para arrancar el motor sin dañarlo.

Un motor de 20 HP requiere mucha corriente para arrancar (puede ser 3-4 veces la corriente de operación normal). Un arrancador suaviza este pico de corriente mediante:

- **Arranque suave (soft start)**: Gradualmente incrementa voltaje al motor, permitiendo que la corriente aumente lentamente
- **O arranque estrella-triángulo**: Alterna la configuración eléctrica del motor durante arranque, reduciendo corriente inicial

Sin arrancador, el motor arrancaría con corriente muy alta, que:
- Causaría caída de voltaje en todo el edificio (las luces parpadean)
- Posiblemente dañaría otros equipamiento
- Podría sobrecargar generador diesel (si hay)

### 3. Relé de voltaje (Voltage relay)

También llamado **relé de transferencia**, es el dispositivo que **elige entre alimentación eléctrica normal y generador diesel**.

**Funcionamiento**:
- Mientras hay electricidad normal: El relé mantiene motor conectado a red
- Si falla electricidad: El relé detecta que no hay voltaje
- Relé envía señal a generador: "Arranca"
- Después de 10-15 segundos (tiempo que generador tarda en estabilizarse): Relé cambia la conexión del motor a generador
- Motor continúa funcionando, ahora alimentado por diesel

Este cambio debe ser **automático y sin intervención humana** (según NFPA 20). Es crítico porque si hay incendio DURANTE un apagón de electricidad, la bomba debe continuar funcionando.

### 4. Disyuntor principal

Es el "interruptor de emergencia" del tablero.

Funciona así:
- **Botón rojo de parada de emergencia**: Si presionado, desconecta toda alimentación al tablero
- **Interruptor de aislamiento**: Para mantenimiento, permite apagar el tablero sin afectar resto del edificio

NFPA 20 requiere que el botón de parada de emergencia sea **fácilmente accesible** (dentro de 1.5 metros de la puerta del cuarto de control) pero **claramente marcado** (para evitar activación accidental).

### 5. Protecciones de sobrecarga (Overload relays)

Si el motor intenta bombear agua a presión muy alta (por ejemplo, todas las válvulas cerradas), demanda mucha más corriente de la normal.

El **relé de sobrecarga** monitorea la corriente del motor. Si detecta corriente excesiva:
- Detiene el motor automáticamente
- Alerta al tablero de una falla
- Evita daño al motor por sobrecalentamiento

### 6. Medidores e indicadores

**Amperímetro**: Muestra la corriente que consume el motor. Ayuda a diagnosticar problemas:
- Corriente baja = Motor no está siendo cargado (posible falla de bomba)
- Corriente normal = Motor funcionando correctamente
- Corriente muy alta = Posible obstrucción en tuberías o válvula cerrada

**Manómetro**: Muestra presión del sistema en tiempo real. Debe estar visible continuamente para operador de seguridad.

**Voltímetro**: Muestra voltaje disponible. Si voltaje cae abajo de cierto nivel, es señal de que generador no está funcionando correctamente.

**Luces indicadoras**:
- Verde = Sistema normal, no en alarma
- Amarilla = Problema de comunicación con sensor
- Roja = Falla crítica (motor no arrancó, presión no se restauró)

### 7. Sistema de distribución de potencia

**Barras de cobre**: Conducen la corriente desde fuente principal a los diferentes componentes (arrancador, relé, protecciones). Deben ser de calibre apropiado para no causar pérdida de voltaje.

**Conexiones de cobre estañado**: Cada conexión es soldada (no clavada o con tuerca) para garantizar contacto perfecto y evitar resistencia que causaría calor.

**Gabinete**: Metálico (acero galvanizado), con puerta cerrada, para proteger componentes internos.

## Lógica de operación secuencial

Cuando ocurre un incendio, el tablero ejecuta una secuencia programada:

**T = 0 segundos**: Incendio activa sprinkler

**T = 1-2 segundos**: Presión en línea principal cae (porque agua fluye del sprinkler)

**T = 3 segundos**: Presostato detecta caída de presión, contacto de arranque se activa

**T = 4 segundos**: Tablero recibe señal de presostato, evalúa: "¿Tengo electricidad normal?"

**T = 5 segundos (Si hay electricidad normal)**:
- Tablero envía corriente al arrancador de motor
- Arrancador recibe corriente, comienza a arrancar motor
- Motor gira lentamente, luego a velocidad operativa
- Bomba comienza a girar

**T = 5-8 segundos (Si NO hay electricidad normal)**:
- Relé de voltaje detecta ausencia de voltaje
- Relé envía orden a generador diesel: "Arranca"
- Generador comienza a girar (toma 5-10 segundos para estabilizarse)
- Una vez generador está en marcha y voltaje es estable, relé transfiere motor a generador
- Tablero envía corriente al arrancador
- Motor arranca, bomba funciona

**T = 10-15 segundos**: Motor está en velocidad operativa, bomba entrega agua a presión. Presión en línea principal aumenta.

**T = 30 segundos**: Presión ha alcanzado presión de operación normal (típicamente 80 PSI). Presostato detecta presión alta, contacto de parada se activa.

**T = 35 segundos**: Motor reduce velocidad o se apaga (dependiendo de configuración). Jockey pump toma control, manteniendo presión en 80 PSI.

**T = 5-10 minutos**: Los bomberos han llegado y están controlando incendio. Sprinklers continúan funcionando. Si presión vuelve a caer (hay más flujo de agua), el presostato detecta nuevamente y motor se reinicia.

## Configuración redundante: dos presostatos independientes

Para máxima confiabilidad, NFPA 20 requiere:

- **Presostato primario**: Detecta caída de presión, dispara arranque
- **Presostato de respaldo**: Si el primario falla, este secundario también dispara arranque

Ambos están conectados en **lógica OR**: Si CUALQUIERA detecta presión baja, el tablero arranca la bomba.

Esta redundancia garantiza que incluso si el presostato primario se daña, el sistema continúa funcionando.

## Protecciones especiales de NFPA 20

NFPA 20 requiere varias protecciones que van más allá de electricidad estándar:

### Protección contra falla de arranque

Si el motor intenta arrancar pero FALLA (no se ejecuta):
- Después de 30-40 segundos, el tablero debe detectar esto
- El tablero debe activar una **alarma audible/visual** que alerta al operador
- La alarma indica: "Motor de bomba no arrancó"

Esto es crítico porque si el tablero simplemente "ignora" la falla, nadie sabría que el sistema no funciona.

### Protección contra pérdida de presión

Si el motor está corriendo pero LA PRESIÓN NO AUMENTA (indicando que la bomba está atascada o rota):
- Después de cierto tiempo, sensores detectan esta anomalía
- Tablero activa alarma: "Bomba corriendo pero sin presión"
- Esto alerta al técnico de que hay falla mecánica

### Protección contra sobrecarga eléctrica

Si el motor demanda más corriente que la normal:
- Relés de sobrecarga detectan esto
- Motor es desconectado antes de dañarse
- Alarma se activa

### Protección de voltaje bajo

Si voltaje disponible (red normal o generador) cae abajo del mínimo requerido:
- Relé de voltaje detecta esto
- Motor no puede arrancar correctamente
- Alarma se activa indicando "Voltaje insuficiente"

## Mantenimiento del tablero

El tablero no es "instala y olvida":

**Mensual**:
- Inspección visual: ¿Hay corrosión, suciedad acumulada?
- Prueba de luz indicadora: ¿Las luces funcionan correctamente?

**Trimestral**:
- Prueba de funcionamiento: Presionar botón de prueba del presostato, verificar que motor arranca
- Medición de voltaje: Verificar que voltaje disponible es correcto

**Anual**:
- Limpieza interna: Remover polvo y contaminación
- Prueba de todos los relés: Cada componente es probado individualmente
- Certificación por ingeniero: Un tercero independiente verifica que el tablero cumple NFPA 20

Un tablero que no ha sido mantenido es un tablero que puede fallar en emergencia.

## Ubicación del tablero en el edificio

NFPA 20 especifica:

- **Cuarto de control dedicado**: No en sótano con máquinas ruidosas. En lugar donde personal de seguridad puede estar presente 24/7 (o monitoreado remotamente)
- **Acceso restringido**: No en área pública. Puerta cerrada con llave o acceso controlado.
- **Visibilidad**: Pantalla e indicadores claramente visibles. No tapado por objetos.
- **Ventilación**: Aire fresco disponible (el tablero genera calor)
- **Alejado de agua**: No instalar en áreas donde pueda haber salpicaduras o inundación

## Integración con panel de detección de incendio

El tablero de control contra incendios NO ES lo mismo que el **panel de detección de incendio** (tema de artículos anteriores). Son complementarios:

- **Panel de detección**: Recibe señales de detectores de humo/calor, activa alarmas de evacuar
- **Tablero de control de bomba**: Recibe señal de presostato, arranca bomba

La integración ocurre así:

1. **Detector de incendio se activa**
2. **Panel de detección abre contacto del sistema de sprinklers**
3. **Sprinklers se abren**
4. **Presión cae**
5. **Presostato en tablero de bomba detecta caída**
6. **Tablero de bomba arranca motor**
7. **Agua fluye a través de sprinklers**

## PROYECTORED: Diseño e instalación de tableros certificados

En PROYECTORED diseñamos y construimos tableros de control contra incendios que cumplen NFPA 20:

- Selección de componentes certificados
- Configuración de redundancia (presostatos duales, etc.)
- Lógica de secuencia programada
- Integración con generador diesel
- Integración con panel de detección
- Pruebas de aceptación completas
- Documentación de certificación
- Capacitación al personal
- Servicio de mantenimiento preventivo

Contáctanos al 525537238544 por WhatsApp para consulta sobre tablero de control para tu sistema de bombeo.
