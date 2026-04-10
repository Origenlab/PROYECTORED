// ============================================================
// src/data/sistemas-productos.ts
// Datos de Nivel 4 — Sistemas Contra Incendio
// Genera: /sistemas/deteccion-alarma/, /sistemas/rociadores/,
//         /sistemas/tablero-control/, /sistemas/red-hidraulica/,
//         /sistemas/supresion-agente/
// ============================================================

export interface ProductoSistemasData {
  metaTitle: string
  metaDesc: string
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]
  stats: { value: string; label: string }[]
  caracteristicas: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    items: { title: string; desc: string }[]
  }
  cuandoUsar: {
    eyebrow: string
    titleLine1: string
    titleLine2?: string
    desc: string
    usos: { label: string; desc: string }[]
  }
  relatedTitle: string
  faqItems: { question: string; answer: string }[]
  waMessage: string
  ctaTitle: string
  ctaBody: string
}

export const SISTEMA_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'deteccion-alarma',  label: 'Detección y Alarma',       badge: 'NFPA 72'   },
  { slug: 'rociadores',        label: 'Rociadores Automáticos',   badge: 'NFPA 13'   },
  { slug: 'tablero-control',   label: 'Tablero de Control FACP',  badge: 'NFPA 72'   },
  { slug: 'red-hidraulica',    label: 'Red Hidráulica CI',        badge: 'NFPA 14'   },
  { slug: 'supresion-agente',  label: 'Supresión por Agente Limpio', badge: 'NFPA 2001' },
]

export const SISTEMA_PAGES: Record<string, ProductoSistemasData> = {

  // ── Detección y Alarma ──────────────────────────────────────
  'deteccion-alarma': {
    metaTitle: 'Sistema de Detección y Alarma CI en CDMX | NFPA 72 | Proyecto Red',
    metaDesc: 'Sistemas de detección de incendio y alarma: detectores de humo, calor, CO y dispositivos de notificación. NFPA 72. Instalación en CDMX.',
    badge: 'NFPA 72',
    heroTitle: 'Sistema de',
    heroAccent: 'Detección y Alarma',
    heroSubtitle: 'Detectores de humo, calor y CO con central de alarma para alerta temprana y evacuación ordenada en cualquier tipo de instalación.',
    heroDescRight: [
      'Detectores fotoeléctricos, iónicos y térmicos para todo tipo de riesgo.',
      'Paneles de alarma inteligentes con capacidad de 4 a 512 zonas.',
      'Instalación certificada conforme a NFPA 72 con documentación para Protección Civil.',
    ],
    stats: [
      { value: 'NFPA 72',   label: 'Norma de instalación'  },
      { value: '4–512',     label: 'Zonas por panel'       },
      { value: '24/7',      label: 'Monitoreo disponible'  },
      { value: '100%',      label: 'Documentado para PC'   },
    ],
    caracteristicas: {
      eyebrow: 'Componentes del sistema',
      titleLine1: 'Detección temprana',
      titleLine2: 'para evacuar a tiempo',
      desc: 'Un sistema de detección de incendio bien diseñado puede dar hasta 15 minutos de ventaja para la evacuación antes de que el fuego sea incontrolable.',
      items: [
        { title: 'Detectores fotoeléctricos',      desc: 'Ideales para humo visible de incendios lentos y con mucho combustible no completamente quemado.' },
        { title: 'Detectores iónicos',             desc: 'Detectan partículas invisibles de incendios rápidos de alta temperatura.' },
        { title: 'Detectores de calor fijo / termovelocimétrico', desc: 'Para áreas donde el humo normal genera falsas alarmas: cocinas, garajes, talleres.' },
        { title: 'Detectores de CO y gas',         desc: 'Indispensables en estacionamientos, cuartos de calderas y áreas con combustibles de gas.' },
        { title: 'Estaciones manuales de jalar',  desc: 'Pull stations para activación manual del sistema por cualquier ocupante.' },
        { title: 'Sirenas, estrobos y parlantes', desc: 'Dispositivos de notificación visual y auditiva conforme a los niveles de presión NFPA 72.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Instalaciones que lo requieren',
      titleLine1: '¿Qué inmuebles necesitan',
      titleLine2: 'sistema de detección?',
      desc: 'La NOM-002-STPS y el Reglamento de Construcciones del CDMX establecen la obligatoriedad de sistemas de detección y alarma según el uso, ocupación y superficie del inmueble.',
      usos: [
        { label: 'Oficinas corporativas',          desc: 'Obligatorio en pisos de más de 1,000 m² o con más de 250 personas por nivel.' },
        { label: 'Hoteles',                        desc: 'Sistema interconectado cuarto por cuarto con notificación en recepción las 24 horas.' },
        { label: 'Hospitales y clínicas',          desc: 'Zonificación por área clínica para no generar pánico general en falsas alarmas.' },
        { label: 'Centros educativos',             desc: 'Obligatorio conforme al dictamen de Protección Civil para ocupaciones de alto riesgo.' },
        { label: 'Almacenes y bodegas',            desc: 'Detectores de calor en zonas sin climatización donde el humo podría dispersarse.' },
        { label: 'Centros de datos',              desc: 'Detectores de humo muy tempranos (VESDA) para respuesta antes de que el calor dañe los equipos.' },
      ],
    },
    relatedTitle: 'Otros sistemas CI disponibles',
    faqItems: [
      { question: '¿Qué incluye el servicio de instalación?', answer: 'Incluye diseño del sistema conforme a NFPA 72, suministro de detectores y panel, instalación eléctrica, cableado de circuitos, programación del panel, pruebas de funcionamiento y entrega de planos as-built para el expediente de Protección Civil.' },
      { question: '¿El sistema se puede integrar con CCTV o control de acceso?', answer: 'Sí. Los paneles modernos tienen salidas de relé que pueden integrarse con sistemas de CCTV, control de acceso, elevadores (para traída a planta baja) y automatización de edificios (BMS).' },
      { question: '¿Cuánto cuesta un sistema de detección para una oficina de 1,000 m²?', answer: 'El costo depende del número de zonas, tipo de detectores y nivel de integración requerido. Ofrecemos visita técnica y presupuesto sin costo. El rango típico es de 80,000 a 250,000 MXN para esa superficie.' },
    ],
    waMessage: 'Hola, necesito cotizar un sistema de detección y alarma CI en CDMX',
    ctaTitle: '¿Necesitas instalar un sistema de detección de incendio?',
    ctaBody: 'Realizamos visita técnica sin costo y te entregamos plano de diseño + presupuesto en 48 horas.',
  },

  // ── Rociadores Automáticos ──────────────────────────────────
  'rociadores': {
    metaTitle: 'Rociadores Automáticos CI en CDMX | NFPA 13 | Proyecto Red',
    metaDesc: 'Diseño e instalación de sistemas de rociadores automáticos conforme a NFPA 13. Cabezas pendant, upright y ESFR para todo tipo de inmueble en CDMX.',
    badge: 'NFPA 13',
    heroTitle: 'Rociadores',
    heroAccent: 'Automáticos',
    heroSubtitle: 'Sistemas de rociadores que actúan de forma automática al detectar calor, suprimiendo el incendio en su punto de origen sin necesidad de intervención humana.',
    heroDescRight: [
      'Diseño hidráulico conforme a NFPA 13 con cálculo de densidad/área para cada tipo de riesgo.',
      'Cabezas pendant, upright, lateral y de alta descarga ESFR disponibles.',
      'Instalación llave en mano: tuberías, cabezas, válvulas y conexión a la bomba.',
    ],
    stats: [
      { value: 'NFPA 13',   label: 'Norma de diseño'       },
      { value: '99%',       label: 'Efectividad estadística'},
      { value: 'Llave mano',label: 'Instalación completa'  },
      { value: 'D.A. PC',   label: 'Documentación incluida'},
    ],
    caracteristicas: {
      eyebrow: 'Componentes del sistema',
      titleLine1: 'Supresión automática',
      titleLine2: 'desde el primer minuto',
      desc: 'Los rociadores automáticos son la medida de protección activa más efectiva existente: el 99% de los incendios controlados por rociadores son manejados por menos de 4 cabezas activadas.',
      items: [
        { title: 'Cabeza pendant (colgante)',      desc: 'La más común en pisos con plafón. Descarga hacia abajo en patrón circular.' },
        { title: 'Cabeza upright (vertical)',      desc: 'Para instalaciones sin plafón: bodegas, talleres y plantas industriales.' },
        { title: 'Cabeza lateral (sidewall)',      desc: 'Para pasillos angostos, hoteles y cuartos donde la instalación en techo no es viable.' },
        { title: 'Cabeza ESFR (supresor temprano)', desc: 'Para almacenes de alta densidad con estanterías de más de 7.6 m de altura.' },
        { title: 'Válvula de alarma y sección',   desc: 'Válvulas de alarma con retardo de agua para prevenir falsas activaciones.' },
        { title: 'Tuberías de acero Schedule 10 o 40', desc: 'Diámetros calculados hidráulicamente para garantizar densidad de descarga requerida.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Requerimientos normativos',
      titleLine1: '¿Cuándo es obligatorio',
      titleLine2: 'instalar rociadores?',
      desc: 'La NFPA 13 y el Reglamento de Construcciones del CDMX establecen criterios de obligatoriedad basados en uso, ocupación, superficie y altura del inmueble.',
      usos: [
        { label: 'Edificios de más de 6,000 m²',  desc: 'El Reglamento de Construcciones del CDMX exige sistema de rociadores para inmuebles de esta superficie.' },
        { label: 'Bodegas con estanterías altas', desc: 'NFPA 13 y 13R establecen densidades especiales según la mercancía y la altura de almacenamiento.' },
        { label: 'Hoteles de más de 4 pisos',     desc: 'NFPA 13R para hoteles residenciales; garantiza tiempo de evacuación para todos los huéspedes.' },
        { label: 'Áreas de producción industrial', desc: 'Riesgo extra o especial según NFPA 13 para equipos con aceites, pintura o materiales combustibles.' },
        { label: 'Estacionamientos cerrados',     desc: 'Obligatorio en niveles subterráneos donde la ventilación natural es insuficiente.' },
        { label: 'Certificación de seguro',       desc: 'Las aseguradoras reducen hasta 30% la prima contra incendio en inmuebles con rociadores.' },
      ],
    },
    relatedTitle: 'Otros sistemas CI disponibles',
    faqItems: [
      { question: '¿Un rociador activado daña más que el incendio?', answer: 'No. La descarga promedio de un rociador activado es de 45–75 litros por minuto, comparable a una manguera de jardín. Un incendio sin control y el agua de bomberos causa daños mucho mayores. Además, solo la cabeza en el punto del fuego se activa.' },
      { question: '¿Cuánto tiempo toma la instalación?', answer: 'Depende de la superficie y complejidad. Un piso de 1,000 m² se instala en 5 a 7 días hábiles. Realizamos instalación en etapas para no interrumpir operaciones.' },
      { question: '¿El sistema requiere mantenimiento frecuente?', answer: 'La NFPA 25 establece inspección trimestral de válvulas, prueba anual de flujo de la alarma y sustitución de cabezas dañadas o vencidas. Ofrecemos pólizas de mantenimiento preventivo anuales.' },
    ],
    waMessage: 'Hola, necesito cotizar sistema de rociadores automáticos en CDMX',
    ctaTitle: '¿Necesitas instalar o ampliar un sistema de rociadores?',
    ctaBody: 'Realizamos visita técnica sin costo y diseño hidráulico conforme a NFPA 13. Presupuesto en 48 horas.',
  },

  // ── Tablero de Control FACP ─────────────────────────────────
  'tablero-control': {
    metaTitle: 'Tablero de Control CI FACP en CDMX | NFPA 72 / NFPA 20 | Proyecto Red',
    metaDesc: 'Tableros FACP para alarma de incendio y controladores de bomba CI conforme a NFPA 72 y NFPA 20. Instalación y programación en CDMX.',
    badge: 'NFPA 72 / 20',
    heroTitle: 'Tablero',
    heroAccent: 'de Control CI',
    heroSubtitle: 'Paneles FACP para alarma de incendio y tableros de control para bombas contra incendio. El cerebro del sistema CI de tu edificio.',
    heroDescRight: [
      'Paneles de alarma inteligentes con capacidad desde 4 zonas convencionales hasta sistemas de 512 puntos direccionables.',
      'Tableros para bombas CI conforme a NFPA 20: arranque automático, manual y por presostato.',
      'Instalación, cableado y programación con pruebas de aceptación documentadas.',
    ],
    stats: [
      { value: 'NFPA 72',    label: 'Alarma de incendio'    },
      { value: 'NFPA 20',    label: 'Control de bomba'      },
      { value: '512 pts',    label: 'Puntos direccionables' },
      { value: 'UL Listed',  label: 'Certificación UL'     },
    ],
    caracteristicas: {
      eyebrow: 'Tipos de tableros disponibles',
      titleLine1: 'Inteligencia central',
      titleLine2: 'para el sistema CI',
      desc: 'El tablero de control es el componente que supervisa, procesa y reporta el estado de todos los dispositivos del sistema CI, desde detectores hasta bombas y válvulas.',
      items: [
        { title: 'Panel FACP convencional',        desc: 'Para edificios con necesidad de 4 a 32 zonas de detección. Económico y confiable.' },
        { title: 'Panel FACP direccionable',       desc: 'Identifica la ubicación exacta del detector activado. Estándar para edificios de más de 3 pisos.' },
        { title: 'Panel de gráfica inteligente',  desc: 'Pantalla táctil con mapa del edificio para identificar la zona exacta en tiempo real.' },
        { title: 'Tablero para bomba jockey',      desc: 'Control del ciclo de la bomba de mantenimiento de presión con conteo de arranques.' },
        { title: 'Tablero NFPA 20 para bomba principal', desc: 'Arranque automático a 95% del tiempo de detección de caída de presión, manual y de emergencia.' },
        { title: 'Monitoreo remoto vía IP',        desc: 'Transmisión de eventos a central de monitoreo o smartphone del administrador.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones',
      titleLine1: '¿Cuándo necesitas',
      titleLine2: 'un tablero de control CI?',
      desc: 'Todo sistema de detección de alarma y todo sistema de bomba CI requieren un tablero de control como componente central obligatorio.',
      usos: [
        { label: 'Sistemas de alarma nuevos',      desc: 'Paneles FACP de nueva generación con compatibilidad para expansiones futuras.' },
        { label: 'Sustitución de paneles obsoletos', desc: 'Actualización de paneles con más de 10 años que ya no cumplen NFPA 72 actual.' },
        { label: 'Cuartos de bombas CI',           desc: 'Tableros NFPA 20 para bombas eléctricas y de diesel en sistemas hidráulicos.' },
        { label: 'Integración con BMS',            desc: 'Paneles con módulo de gateway para comunicación con el sistema de automatización del edificio.' },
        { label: 'Monitoreo 24/7',                 desc: 'Tableros con transmisión de eventos a central de monitoreo certificada UL.' },
        { label: 'Certificación de aseguradora',  desc: 'Las aseguradoras exigen tableros UL Listed para considerar el sistema como protección activa.' },
      ],
    },
    relatedTitle: 'Otros sistemas CI disponibles',
    faqItems: [
      { question: '¿Cuál es la diferencia entre un panel convencional y uno direccionable?', answer: 'Un panel convencional solo identifica la zona (un circuito con varios detectores). Un panel direccionable identifica exactamente qué detector en qué ubicación se activó. Para edificios de más de 2 pisos o más de 1,000 m², el panel direccionable es la recomendación estándar.' },
      { question: '¿Cuánto tiempo tiene garantía un panel FACP?', answer: 'Los paneles que instalamos tienen garantía de fábrica de 1 a 3 años según el fabricante. Ofrecemos también contratos de mantenimiento preventivo y servicio de emergencia con tiempo de respuesta garantizado.' },
    ],
    waMessage: 'Hola, necesito cotizar un tablero de control CI en CDMX',
    ctaTitle: '¿Necesitas un tablero FACP o de bomba CI?',
    ctaBody: 'Te asesoramos en el modelo correcto según el sistema. Instalación y programación certificada conforme a NFPA 72 y NFPA 20.',
  },

  // ── Red Hidráulica CI ───────────────────────────────────────
  'red-hidraulica': {
    metaTitle: 'Red Hidráulica Contra Incendio en CDMX | NFPA 14 | Proyecto Red',
    metaDesc: 'Diseño e instalación de redes hidráulicas CI para hidrantes y rociadores. Tuberías, bombas, tanques y válvulas. NFPA 13/14. Llave en mano en CDMX.',
    badge: 'NFPA 13/14',
    heroTitle: 'Red',
    heroAccent: 'Hidráulica CI',
    heroSubtitle: 'Diseño e instalación llave en mano de redes hidráulicas contra incendio: tuberías, bomba, tanque y válvulas conforme a NFPA 13 y NFPA 14.',
    heroDescRight: [
      'Cálculo hidráulico con software conforme a NFPA para verificar presión y caudal en cada punto.',
      'Tuberías de acero Schedule 10 y Schedule 40 en diámetros de ½" a 12".',
      'Instalación completa incluye excavación, montaje, prueba hidrostática y documentación.',
    ],
    stats: [
      { value: 'NFPA 13/14', label: 'Norma de diseño'      },
      { value: '½" – 12"',   label: 'Diámetros de tubería' },
      { value: 'Llave mano', label: 'Instalación completa' },
      { value: '200 psi',    label: 'Prueba hidrostática'  },
    ],
    caracteristicas: {
      eyebrow: 'Componentes del sistema',
      titleLine1: 'La columna vertebral',
      titleLine2: 'del sistema CI',
      desc: 'La red hidráulica es la infraestructura que lleva el agua desde el tanque o la conexión municipal hasta cada rociador, hidrante y monitor del sistema.',
      items: [
        { title: 'Tuberías de acero negra y galvanizada', desc: 'Diámetros calculados hidráulicamente para garantizar caudal y presión en condición de diseño.' },
        { title: 'Bomba principal y jockey',        desc: 'Grupo motobomba vertical o horizontal con bomba de mantenimiento de presión (jockey).' },
        { title: 'Tanque de almacenamiento',        desc: 'Cisterna de concreto, fibra de vidrio o acero inoxidable con capacidad calculada para la demanda del sistema.' },
        { title: 'Válvulas OS&Y supervisadas',      desc: 'Válvulas de señal visual requeridas por NFPA 13 en cada ramal de distribución.' },
        { title: 'Prueba hidrostática a 200 psi',  desc: 'Prueba de integridad de toda la red antes de la entrega, con reporte certificado.' },
        { title: 'Planos as-built y memorias',      desc: 'Documentación completa para el expediente de Protección Civil y futuras intervenciones.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Proyectos donde se aplica',
      titleLine1: '¿Cuándo diseñar',
      titleLine2: 'una red hidráulica CI?',
      desc: 'La red hidráulica es necesaria desde el inicio de la construcción o cuando se realiza una adecuación para instalar rociadores o hidrantes en un edificio existente.',
      usos: [
        { label: 'Obra nueva industrial',          desc: 'Diseño integrado desde el proyecto ejecutivo para evitar cambios costosos durante la construcción.' },
        { label: 'Adecuación de edificio existente', desc: 'Diagnóstico de la red existente y ampliación para cumplir requerimientos actuales de PC.' },
        { label: 'Ampliación de planta',           desc: 'Extensión de la red para cubrir nuevas naves o áreas de producción.' },
        { label: 'Renovación de sistema obsoleto', desc: 'Sustitución de tuberías con corrosión o que no cumplen las densidades de NFPA 13.' },
        { label: 'Certificación de seguro',        desc: 'La aseguradora puede exigir actualización de la red para mantener la cobertura.' },
        { label: 'Trámite de uso de suelo',        desc: 'El dictamen de Protección Civil CDMX puede exigir red CI como condición del trámite.' },
      ],
    },
    relatedTitle: 'Otros sistemas CI disponibles',
    faqItems: [
      { question: '¿Cuánto tarda el diseño e instalación de una red CI?', answer: 'El diseño hidráulico toma de 5 a 10 días hábiles. La instalación depende del área y complejidad: una planta de 3,000 m² tarda de 20 a 30 días hábiles. Podemos instalación en fases para no interrumpir operaciones.' },
      { question: '¿Qué incluye la documentación entregada?', answer: 'Planos isométricos de tuberías, cálculo hidráulico, especificación de materiales, reporte de prueba hidrostática, manual de operación y mantenimiento, y hoja de datos de la bomba. Todo listo para el expediente de Protección Civil.' },
    ],
    waMessage: 'Hola, necesito cotizar una red hidráulica contra incendio en CDMX',
    ctaTitle: '¿Necesitas diseñar o instalar una red hidráulica CI?',
    ctaBody: 'Visita técnica sin costo, cálculo hidráulico NFPA y presupuesto detallado en 48 horas. Llave en mano.',
  },

  // ── Supresión por Agente Limpio ─────────────────────────────
  'supresion-agente': {
    metaTitle: 'Sistema de Supresión por Agente Limpio CDMX | NFPA 2001 | Proyecto Red',
    metaDesc: 'Sistemas de supresión por agente limpio HFC-227ea y CO₂ para centros de datos, archivos y salas de equipos. NFPA 2001. Instalación en CDMX.',
    badge: 'NFPA 2001',
    heroTitle: 'Supresión',
    heroAccent: 'por Agente Limpio',
    heroSubtitle: 'Sistemas de supresión que extinguen incendios sin dejar residuo, sin dañar equipos electrónicos ni afectar la visibilidad para evacuación segura.',
    heroDescRight: [
      'Agentes disponibles: HFC-227ea (FM-200), FK-5-1-12 (Novec 1230), CO₂ e Inergen.',
      'Concentraciones de diseño calculadas conforme a NFPA 2001 para cada recinto protegido.',
      'Sistema completo: cilindros, tuberías, boquillas, panel de liberación y señalización.',
    ],
    stats: [
      { value: 'NFPA 2001',  label: 'Norma de diseño'       },
      { value: '< 10 s',     label: 'Tiempo de descarga'    },
      { value: '0%',         label: 'Residuo tras descarga' },
      { value: 'UL Listed',  label: 'Certificación agente'  },
    ],
    caracteristicas: {
      eyebrow: 'Agentes y componentes',
      titleLine1: 'Extinción limpia',
      titleLine2: 'para áreas críticas',
      desc: 'Los sistemas de agente limpio son la solución cuando el agua o el polvo son inaceptables: protegen equipos de alto valor, archivos irreemplazables y personas presentes en el recinto.',
      items: [
        { title: 'HFC-227ea (FM-200)',             desc: 'Agente de halocarbono de baja toxicidad. Extinción en menos de 10 segundos sin reducir el oxígeno.' },
        { title: 'FK-5-1-12 (Novec 1230)',         desc: 'Agente con potencial de calentamiento global casi cero. Seguro para personal expuesto.' },
        { title: 'CO₂ de alta concentración',      desc: 'Para recintos desocupados: cuartos eléctricos, bodegas de pintura y equipos sin presencia humana.' },
        { title: 'Inergen (mezcla de gases inertes)', desc: 'Reduce el oxígeno al 12–13% para extinguir sin agentes químicos. Ideal para áreas ecológicamente sensibles.' },
        { title: 'Panel de liberación independiente', desc: 'Panel con retardo de 30 segundos y abortador manual. Integrable al FACP del edificio.' },
        { title: 'Señalización de descarga activa', desc: 'Estrobo y señal sonora de "Agente Liberado" y "No Entre" conforme a NFPA 72.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Instalaciones que requieren agente limpio',
      titleLine1: '¿Cuándo usar',
      titleLine2: 'supresión por agente limpio?',
      desc: 'Se utiliza cuando el daño por agua o polvo sería mayor que el propio incendio, o cuando la presencia de personas en el recinto hace inviable el uso de CO₂ a alta concentración.',
      usos: [
        { label: 'Centros de datos y server rooms', desc: 'Protección de servidores sin tiempo de inactividad por corrosión o daño por agua.' },
        { label: 'Salas de comunicaciones',         desc: 'PBX, racks de telecomunicaciones y UPS que no pueden exponerse a ningún residuo.' },
        { label: 'Archivos y museos',              desc: 'Documentos históricos e irreemplazables que se destruirían con agua o polvo.' },
        { label: 'Cuartos de control industrial',  desc: 'PLCs, HMIs y paneles de control de alto costo en procesos de manufactura continua.' },
        { label: 'Bóvedas y áreas de seguridad',   desc: 'Protección de activos de alto valor sin riesgo de daño colateral por agente.' },
        { label: 'Laboratorios de electrónica',    desc: 'Equipos de medición y prototipado que no admiten ningún tipo de contaminante.' },
      ],
    },
    relatedTitle: 'Otros sistemas CI disponibles',
    faqItems: [
      { question: '¿El HFC-227ea es peligroso para las personas?', answer: 'No a las concentraciones de diseño (7–9%). A esas concentraciones es seguro para exposición de hasta 5 minutos. Sin embargo, el sistema incluye retardo de descarga y señalización para que el personal pueda evacuar antes de la activación.' },
      { question: '¿Cada cuánto se recarga el agente?', answer: 'El agente solo se consume en caso de descarga real. Sin activaciones, se realiza prueba de peso anual de los cilindros. Si el peso ha disminuido más del 5%, se requiere recarga. También se inspecciona el sistema completo una vez al año.' },
      { question: '¿Se puede instalar en un cuarto de datos ya en operación?', answer: 'Sí. La instalación se realiza por etapas para no interrumpir el servicio. Los cilindros se instalan fuera del recinto y solo se conecta la red de tuberías y boquillas al final, con el sistema puesto en modo de instalación.' },
    ],
    waMessage: 'Hola, necesito cotizar un sistema de supresión por agente limpio en CDMX',
    ctaTitle: '¿Tienes un centro de datos o sala de equipos que proteger?',
    ctaBody: 'Te diseñamos el sistema de agente limpio correcto y te entregamos presupuesto en 48 horas.',
  },
}
