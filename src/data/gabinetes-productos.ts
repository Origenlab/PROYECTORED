// ============================================================
// src/data/gabinetes-productos.ts
// Datos de Nivel 4 — Gabinetes y Porta Extintores
// Genera: /gabinetes/gabinete-extintor/, /gabinetes/porta-extintor/,
//         /gabinetes/gabinete-bombero/, /gabinetes/gabinete-hidrante/
// ============================================================

export interface ProductoGabinetesData {
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

export const GABINETE_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'gabinete-extintor',  label: 'Gabinete para Extintor',  badge: 'NOM-002'  },
  { slug: 'porta-extintor',     label: 'Porta Extintor',          badge: 'NOM-002'  },
  { slug: 'gabinete-bombero',   label: 'Gabinete para Bombero',   badge: 'NFPA 10'  },
  { slug: 'gabinete-hidrante',  label: 'Gabinete para Hidrante',  badge: 'NFPA 14'  },
]

export const GABINETE_PAGES: Record<string, ProductoGabinetesData> = {

  // ── Gabinete para Extintor ──────────────────────────────────
  'gabinete-extintor': {
    metaTitle: 'Gabinete para Extintor en CDMX | Acero y Acrílico | Proyecto Red',
    metaDesc: 'Gabinetes para extintor en acero y acrílico. Protegen el equipo y facilitan el acceso en emergencias. Cumplimiento NOM-002-STPS. Entrega en CDMX.',
    badge: 'NOM-002-STPS',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Extintor',
    heroSubtitle: 'Protección y acceso rápido para tus extintores en empresas, edificios y plantas industriales de CDMX.',
    heroDescRight: [
      'Fabricados en acero calibre 22 o lámina galvanizada con acabado electrostático.',
      'Puerta de acrílico o vidrio templado con manija para apertura rápida en emergencias.',
      'Medidas estándar y a especificación para extintores de 2.5 a 30 kg.',
    ],
    stats: [
      { value: 'Cal. 22',  label: 'Acero calibre'         },
      { value: 'NOM-002',  label: 'Cumplimiento norma'     },
      { value: '48 h',     label: 'Entrega en CDMX'        },
      { value: '100%',     label: 'Instalación disponible' },
    ],
    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Gabinete construido',
      titleLine2: 'para resistir y proteger',
      desc: 'Cada gabinete para extintor está diseñado para mantener el equipo visible, accesible y protegido frente a daños mecánicos o robo, cumpliendo con los requisitos de Protección Civil.',
      items: [
        { title: 'Acero calibre 22 o superior',  desc: 'Estructura robusta que protege el extintor de golpes y manipulaciones no autorizadas.' },
        { title: 'Puerta acrílica o vidrio templado', desc: 'Permite identificar rápidamente el estado del extintor sin abrir el gabinete.' },
        { title: 'Pintura electrostática',        desc: 'Acabado durable en color rojo RAL 3001 resistente a humedad y corrosión.' },
        { title: 'Bisagra y manija de emergencia', desc: 'Apertura rápida sin llave para acceso inmediato en situaciones de emergencia.' },
        { title: 'Medidas estándar NOM',          desc: 'Compatibles con extintores de 2.5, 4.5, 6, 9 y 12 kg según la norma aplicable.' },
        { title: 'Opción con cerradura',          desc: 'Versión con cerradura transparente o precinto de seguridad para evitar uso no autorizado.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones principales',
      titleLine1: '¿Dónde se requiere',
      titleLine2: 'un gabinete para extintor?',
      desc: 'La NOM-002-STPS establece la señalización y accesibilidad de extintores en centros de trabajo. Un gabinete correctamente instalado ayuda a cumplir con estas disposiciones.',
      usos: [
        { label: 'Oficinas y edificios corporativos', desc: 'Mantiene el extintor integrado al diseño sin obstaculizar pasillos ni áreas de trabajo.' },
        { label: 'Plantas industriales',              desc: 'Protege el extintor de polvo, humedad y golpes propios del ambiente de producción.' },
        { label: 'Restaurantes y cocinas comerciales', desc: 'Ideal para alojar extintores Tipo K en zonas de cocción con alta actividad.' },
        { label: 'Centros comerciales',               desc: 'Cumple requerimientos estéticos y de seguridad de administraciones de inmuebles.' },
        { label: 'Estacionamientos y sótanos',        desc: 'Protege frente a golpes de vehículos y condiciones de humedad.' },
        { label: 'Hospitales y clínicas',             desc: 'Facilita la inspección visual sin romper el precinto, cumpliendo protocolos de higiene.' },
      ],
    },
    relatedTitle: 'Otros gabinetes y porta extintores',
    faqItems: [
      { question: '¿Cuál es la diferencia entre gabinete y porta extintor?', answer: 'El gabinete es una caja cerrada (con puerta de acrílico o vidrio) que protege completamente el extintor. El porta extintor es un soporte abierto o semiabierto (herraje, gancho o base) que fija el extintor a la pared o piso sin cerramiento. Los gabinetes son más recomendables en áreas de alto tráfico o donde exista riesgo de robo o golpes.' },
      { question: '¿Los gabinetes deben señalizarse?', answer: 'Sí. Conforme a NOM-026-STPS y NOM-003-SEGOB, el gabinete debe contar con señal de extintor colocada a una altura visible. Nosotros suministramos los señalamientos incluidos o por separado.' },
      { question: '¿Realizan instalación a domicilio?', answer: 'Sí. Incluimos servicio de instalación en CDMX y Estado de México. También ofrecemos levantamiento previo para recomendar ubicaciones óptimas conforme a la norma.' },
      { question: '¿Pueden fabricar gabinetes a medida?', answer: 'Sí, fabricamos gabinetes bajo especificación para extintores de mayor capacidad (20, 30 kg) o formatos especiales. Tiempo de fabricación: 5 a 7 días hábiles.' },
    ],
    waMessage: 'Hola, necesito cotizar gabinetes para extintor en CDMX',
    ctaTitle: '¿Cuántos gabinetes necesitas para tu instalación?',
    ctaBody: 'Te ayudamos a calcular la cantidad correcta según la norma y el tamaño de tu espacio. Cotización sin costo en menos de 24 horas.',
  },

  // ── Porta Extintor ─────────────────────────────────────────
  'porta-extintor': {
    metaTitle: 'Porta Extintor en CDMX | Herrajes y Soportes Certificados | Proyecto Red',
    metaDesc: 'Porta extintores de piso, pared y columna para todos los tamaños de extintor. Entrega en CDMX. Cumplimiento NOM-002-STPS.',
    badge: 'NOM-002-STPS',
    heroTitle: 'Porta Extintores',
    heroAccent: 'y Soportes',
    heroSubtitle: 'Soportes de pared, piso y columna para fijar extintores de manera correcta, visible y accesible conforme a la norma.',
    heroDescRight: [
      'Herrajes de acero con recubrimiento anticorrosivo para uso interior y exterior.',
      'Soportes universales compatibles con extintores de 1 a 150 kg.',
      'Modelos de pared, piso con ruedas, móviles y para columnas.',
    ],
    stats: [
      { value: '1–150 kg', label: 'Capacidad compatible'   },
      { value: 'NOM-002',  label: 'Cumplimiento norma'     },
      { value: '48 h',     label: 'Entrega en CDMX'        },
      { value: '5+',       label: 'Modelos disponibles'    },
    ],
    caracteristicas: {
      eyebrow: 'Tipos y especificaciones',
      titleLine1: 'El soporte correcto',
      titleLine2: 'para cada extintor',
      desc: 'Cada tipo de extintor requiere un soporte adecuado según su peso, ubicación y tipo de riesgo. Contamos con herrajes para todos los escenarios.',
      items: [
        { title: 'Soporte de pared (herraje)',     desc: 'Fija extintores de 2.5 a 12 kg directamente a la pared con tornillería incluida.' },
        { title: 'Base de piso con ruedas',        desc: 'Para extintores de 20 a 150 kg que requieren movilidad en naves industriales.' },
        { title: 'Soporte para columna',           desc: 'Fija el extintor a columnas o postes con abrazadera ajustable de acero.' },
        { title: 'Carro portátil cerrado',         desc: 'Carrito con tapa para extintores de CO₂ o PQS de 20 a 50 kg en zonas de tráfico vehicular.' },
        { title: 'Recubrimiento anticorrosivo',    desc: 'Pintura o galvanizado que protege el herraje en ambientes húmedos, químicos o exteriores.' },
        { title: 'Altura conforme a NOM',          desc: 'Diseñados para ubicar la válvula del extintor entre 1.10 m y 1.50 m del piso según la norma.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones',
      titleLine1: '¿En qué instalaciones',
      titleLine2: 'usar porta extintores?',
      desc: 'Los porta extintores son obligatorios en todo centro de trabajo que deba cumplir con NOM-002-STPS. Su elección depende del peso del extintor y las condiciones del espacio.',
      usos: [
        { label: 'Bodegas y almacenes',            desc: 'Soportes de piso con ruedas para extintores de polvo seco de gran capacidad.' },
        { label: 'Plantas de manufactura',         desc: 'Herrajes de acero galvanizado para resistir vibraciones y ambientes agresivos.' },
        { label: 'Talleres mecánicos',             desc: 'Bases móviles para extintores de CO₂ en zonas con maquinaria y aceites.' },
        { label: 'Corredores y pasillos',          desc: 'Herrajes de pared que no invaden el área de circulación mínima requerida.' },
        { label: 'Exteriores y áreas de carga',   desc: 'Soportes galvanizados o de acero inoxidable para zonas expuestas al clima.' },
        { label: 'Eventos y stands temporales',   desc: 'Bases portátiles de fácil instalación para cumplimiento temporal ante Protección Civil.' },
      ],
    },
    relatedTitle: 'Otros gabinetes y soportes del catálogo',
    faqItems: [
      { question: '¿A qué altura debe instalarse el extintor?', answer: 'Conforme a NOM-002-STPS, la válvula (manija) del extintor debe quedar entre 1.10 m y 1.50 m sobre el nivel del piso. Para extintores de más de 18 kg la parte superior puede ubicarse a 1.00 m. Nuestros soportes están diseñados para cumplir estas medidas.' },
      { question: '¿Cuántos extintores por área necesito?', answer: 'La NOM-002-STPS establece que la distancia máxima de recorrido para alcanzar un extintor es de 15 m en riesgos ordinarios. Le podemos hacer un cálculo sin costo basado en los m² de su instalación.' },
      { question: '¿Los soportes incluyen tornillería?', answer: 'Sí. Todos nuestros herrajes de pared incluyen taquetes, tornillos y plantilla de instalación. En pedidos grandes incluimos instalación a domicilio en CDMX.' },
    ],
    waMessage: 'Hola, necesito cotizar porta extintores para mi instalación',
    ctaTitle: '¿Necesitas soportes para tu instalación de extintores?',
    ctaBody: 'Te cotizamos la cantidad exacta según la norma. Entrega en 48 horas en CDMX con instalación disponible.',
  },

  // ── Gabinete para Bombero ──────────────────────────────────
  'gabinete-bombero': {
    metaTitle: 'Gabinete para Bombero en CDMX | Equipamiento Completo | Proyecto Red',
    metaDesc: 'Gabinetes para equipo de bombero con manguera, pitón y llave Storz. Acero calibre 20, cierre con cerrojo y visor de acrílico. Entrega en CDMX.',
    badge: 'NFPA 10',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Bombero',
    heroSubtitle: 'Gabinetes de acero que alojan el equipo completo del bombero: manguera enrollada, pitón y llaves. Acceso rápido y visibilidad en emergencias.',
    heroDescRight: [
      'Cuerpo en lámina de acero cal. 20 con pintura electrostática roja.',
      'Visor de acrílico transparente para inspección rápida sin abrir.',
      'Disponibles en medidas estándar para 1 o 2 mangueras de 1½" y 2½".',
    ],
    stats: [
      { value: 'Cal. 20',  label: 'Lámina de acero'        },
      { value: 'NFPA 10',  label: 'Referencia técnica'     },
      { value: '1–2',      label: 'Mangueras por gabinete' },
      { value: '48 h',     label: 'Entrega en CDMX'        },
    ],
    caracteristicas: {
      eyebrow: 'Construcción y materiales',
      titleLine1: 'Gabinete de respuesta',
      titleLine2: 'para emergencias reales',
      desc: 'El gabinete para bombero debe garantizar acceso inmediato al equipo sin necesidad de herramientas ni llaves. Nuestros modelos priorizan la funcionalidad operacional.',
      items: [
        { title: 'Lámina de acero cal. 20',       desc: 'Resistencia mecánica para instalaciones industriales, bodegas y edificios.' },
        { title: 'Visor de acrílico de 3 mm',     desc: 'Permite verificar la presencia del equipo sin romper el precinto de seguridad.' },
        { title: 'Puerta de apertura total 180°', desc: 'Acceso sin obstáculos para extraer la manguera desenrollada en situación de emergencia.' },
        { title: 'Porta manguera integrado',      desc: 'Soporte interno para mantener la manguera correctamente enrollada y lista para uso.' },
        { title: 'Gancho para llave Storz',       desc: 'Aloja la llave de conexión siempre dentro del gabinete para acceso en segundos.' },
        { title: 'Señalamiento NOM incluido',     desc: 'Etiqueta de identificación conforme a NOM-003-SEGOB incluida en la entrega.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Instalaciones que lo requieren',
      titleLine1: '¿Cuándo instalar',
      titleLine2: 'gabinetes para bombero?',
      desc: 'Los gabinetes para bombero forman parte de los sistemas de mangueras de primera respuesta en edificios y plantas. Son obligatorios según el uso, ocupación y normativa local.',
      usos: [
        { label: 'Edificios de apartamentos',     desc: 'Obligatorios en corredores de cada nivel conforme a la normativa de Protección Civil CDMX.' },
        { label: 'Torres de oficinas',             desc: 'Parte del sistema de protección activa que exige el dictamen estructural y de seguridad.' },
        { label: 'Centros comerciales',           desc: 'Requieren colocación en zonas de carga, sótanos y cerca de locales de alto riesgo.' },
        { label: 'Plantas industriales',          desc: 'Complementan el sistema de rociadores como respuesta manual de primera intervención.' },
        { label: 'Hospitales y clínicas',         desc: 'La NORMA NOM-001-SEDENA aplica en instalaciones de salud con requerimientos de mangueras.' },
        { label: 'Hoteles y venues de eventos',   desc: 'El CASCE (Certificado de Seguridad) exige mangueras y gabinetes en áreas de concentración masiva.' },
      ],
    },
    relatedTitle: 'Otros gabinetes del catálogo',
    faqItems: [
      { question: '¿Qué equipo viene dentro del gabinete?', answer: 'El gabinete se puede suministrar solo (vacío) o equipado con manguera de 1½" o 2½", pitón o chiflón, y llave Storz según la conexión del hidrante. También podemos incluir la válvula angular de 45°.' },
      { question: '¿Cuánto pesa y qué medidas tiene el gabinete?', answer: 'Nuestro modelo estándar mide 75 × 60 × 20 cm (1 manguera) o 90 × 75 × 20 cm (2 mangueras). El peso vacío es de 12 a 18 kg. Fabricamos también en medidas a especificación.' },
      { question: '¿Cuál es el mantenimiento del gabinete?', answer: 'Se recomienda revisión semestral del estado de la pintura, correcto enrollado de la manguera y funcionalidad de la válvula. Ofrecemos pólizas de mantenimiento preventivo para sistemas de mangueras.' },
    ],
    waMessage: 'Hola, necesito cotizar gabinetes para bombero en CDMX',
    ctaTitle: '¿Necesitas gabinetes para bombero con equipo completo?',
    ctaBody: 'Te cotizamos gabinete + manguera + pitón + llave en un solo paquete. Instalación disponible en CDMX.',
  },

  // ── Gabinete para Hidrante ─────────────────────────────────
  'gabinete-hidrante': {
    metaTitle: 'Gabinete para Hidrante en CDMX | Siamesas y Columnas | Proyecto Red',
    metaDesc: 'Gabinetes para hidrante interior y exterior con válvula angular, manguera y chiflón. NFPA 14. Entrega e instalación en CDMX.',
    badge: 'NFPA 14',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Hidrante',
    heroSubtitle: 'Gabinetes de acero para proteger y dar acceso al sistema hidráulico de hidrantes interiores, con válvula angular, manguera acoplada y chiflón.',
    heroDescRight: [
      'Diseñados conforme a NFPA 14 para sistemas de mangueras en clase I, II y III.',
      'Integran válvula angular de 1½" o 2½", manguera enrollada y chiflón.',
      'Opciones para montaje en pared empotrado (flush) o sobrepuesto.',
    ],
    stats: [
      { value: 'NFPA 14',  label: 'Norma de referencia'   },
      { value: 'Clase I/II/III', label: 'Sistemas compatibles' },
      { value: '1½" – 2½"', label: 'Diámetros disponibles' },
      { value: '48 h',     label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Sistema de hidrante',
      titleLine2: 'listo para primera respuesta',
      desc: 'El gabinete para hidrante integra todos los componentes del sistema de mangueras en un solo punto de acceso, reduciendo el tiempo de respuesta en emergencias.',
      items: [
        { title: 'Válvula angular 45° incluida',  desc: 'Válvula de bronce con asiento de disco para conexión directa a la red hidráulica de la edificación.' },
        { title: 'Manguera semi-rígida acoplada', desc: 'Manguera de poliéster o caucho de 1½" o 2½" con acoples Storz o roscados integrados.' },
        { title: 'Chiflón regulable incluido',    desc: 'Pitón de chorro recto y neblina para mayor versatilidad en la extinción.' },
        { title: 'Gabinete acero cal. 16 o 18',  desc: 'Mayor grosor para instalaciones en áreas de alto tráfico o uso industrial pesado.' },
        { title: 'Visor de acrílico con sello',  desc: 'Permite identificar visualmente el estado completo del sistema en cada ronda de inspección.' },
        { title: 'Señalética NFPA incluida',     desc: 'Etiqueta con código de color conforme a NFPA 704 y señal de manguera conforme a NOM-003-SEGOB.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Edificios y uso requerido',
      titleLine1: '¿Cuándo instalar',
      titleLine2: 'gabinetes para hidrante?',
      desc: 'Los sistemas de hidrantes con gabinetes son parte de la protección activa obligatoria en edificios con ocupación mayor, plantas de producción y complejos comerciales.',
      usos: [
        { label: 'Torres de departamentos', desc: 'Requeridos cada 2 o 3 pisos en edificios con 4 o más niveles según normativa de PC CDMX.' },
        { label: 'Plantas industriales',    desc: 'Red de hidrantes interiores como primera línea de defensa ante incendios de gran escala.' },
        { label: 'Centros comerciales',     desc: 'Gabinetes en sótanos, cines, supermercados y áreas de carga conforme al dictamen de seguridad.' },
        { label: 'Bodegas de alto riesgo',  desc: 'Almacenes con productos inflamables, textiles o papel requieren alta densidad de hidrantes.' },
        { label: 'Hoteles y hospitales',    desc: 'Normativa específica de ocupación exige sistemas clase III con manguera de 2½" adicional.' },
        { label: 'Estacionamientos',        desc: 'Hidrantes en cada nivel de estacionamiento subterráneo conforme al Reglamento de Construcción CDMX.' },
      ],
    },
    relatedTitle: 'Otros gabinetes y herrajes del catálogo',
    faqItems: [
      { question: '¿Cuál es la diferencia entre gabinete clase I, II y III?', answer: 'Clase I: solo manguera de 2½" para uso de bomberos. Clase II: manguera de 1½" para uso de ocupantes. Clase III: ambas opciones. El tipo requerido depende del uso del inmueble y lo establece el dictamen de Protección Civil.' },
      { question: '¿Ofrecen instalación de la red hidráulica completa?', answer: 'Sí. Además de suministrar los gabinetes, realizamos instalación de tuberías, válvulas, toma siamesa y conexión a la bomba contra incendio, todo conforme a NFPA 14.' },
      { question: '¿Cada cuánto se revisa el sistema de hidrantes?', answer: 'La NFPA 25 recomienda inspección mensual visual y prueba hidráulica anual. Ofrecemos pólizas de mantenimiento preventivo anuales con reporte para el expediente de Protección Civil.' },
    ],
    waMessage: 'Hola, necesito cotizar gabinetes para hidrante en CDMX',
    ctaTitle: '¿Necesitas instalar o renovar tu red de hidrantes?',
    ctaBody: 'Te asesoramos en el sistema completo: gabinetes, tuberías, bomba y documentación para Protección Civil.',
  },
}
