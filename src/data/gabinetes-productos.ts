// ============================================================
// src/data/gabinetes-productos.ts
// Datos de Nivel 4 — Gabinetes y Porta Extintores
// Genera: /gabinetes/gabinete-extintor/, /gabinetes/porta-extintor/,
//         /gabinetes/gabinete-bombero/, /gabinetes/gabinete-hidrante/
// ============================================================

// ── Interfaz de variante individual ─────────────────────────
export interface VarianteGabinete {
  nombre: string
  badge?: string
  desc: string
  specs: string
  waText: string
}

// ── Interfaz completa de producto ───────────────────────────
export interface ProductoGabinetesData {
  // SEO & meta
  metaTitle: string
  metaDesc: string

  // Hero
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Imagen principal del producto (opcional — si existe muestra imagen en ccard)
  img?: string

  // Variantes / modelos disponibles (S0 — patrón idéntico a extintores y bomberos)
  variantes?: VarianteGabinete[]
  variantesEyebrow?: string
  variantesTitleLine1?: string
  variantesTitleLine2?: string
  variantesBodyPara?: string

  // Sección 1 — Características técnicas
  caracteristicas: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    items: { title: string; desc: string }[]
  }

  // Sección 2 — ¿Dónde instalar?
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

// ── Lista de productos (genera rutas estáticas) ──────────────
export const GABINETE_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'gabinete-extintor',  label: 'Gabinete para Extintor',  badge: 'NOM-002'  },
  { slug: 'porta-extintor',     label: 'Porta Extintor',          badge: 'NOM-002'  },
  { slug: 'gabinete-bombero',   label: 'Gabinete para Bombero',   badge: 'NFPA 10'  },
  { slug: 'gabinete-hidrante',  label: 'Gabinete para Hidrante',  badge: 'NFPA 14'  },
]

// ── Datos por producto ───────────────────────────────────────
export const GABINETE_PAGES: Record<string, ProductoGabinetesData> = {

  // ══════════════════════════════════════════════════════════
  // 1. GABINETE PARA EXTINTOR
  // ══════════════════════════════════════════════════════════
  'gabinete-extintor': {
    metaTitle: 'Gabinete para Extintor en CDMX | Acero y Acrílico | Proyecto Red',
    metaDesc: 'Gabinetes para extintor en acero y acrílico. Protegen el equipo y facilitan el acceso en emergencias. Cumplimiento NOM-002-STPS. Entrega en CDMX.',
    badge: 'NOM-002-STPS',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Extintor',
    heroSubtitle: 'Protección y acceso rápido para tus extintores en empresas, edificios y plantas industriales de CDMX.',
    heroDescRight: [
      'Fabricados en acero calibre 22 o lámina galvanizada con acabado electrostático rojo RAL 3001.',
      'Puerta de acrílico o vidrio templado con manija para apertura rápida en emergencias.',
      'Medidas estándar y a especificación para extintores de 2.5 a 30 kg. Señalamiento NOM incluido.',
    ],

    // ── Variantes / modelos disponibles ──────────────────────
    variantesEyebrow: 'Modelos disponibles',
    variantesTitleLine1: 'Elige el gabinete',
    variantesTitleLine2: 'según tu extintor',
    variantesBodyPara: 'Todos nuestros gabinetes incluyen señalamiento NOM-003-SEGOB, herraje de instalación y garantía. Suministramos con factura electrónica y entregamos en CDMX el mismo día en pedidos antes de las 14:00 h.',
    variantes: [
      {
        nombre: 'Gabinete 2.5 kg',
        badge: 'Básico',
        desc: 'Para extintores de 2.5 kg en oficinas pequeñas, pasillos y cajas de escalera. Puerta acrílica con manija. El modelo más compacto de la línea.',
        specs: 'Acero cal. 22 · Puerta acrílica · 40×30×18 cm · Herraje incluido',
        waText: 'Hola, quiero cotizar gabinete para extintor de 2.5 kg',
      },
      {
        nombre: 'Gabinete 4.5–6 kg',
        badge: 'Más vendido',
        desc: 'El modelo estándar para oficinas, tiendas, restaurantes y locales comerciales. Compatible con extintores de 4.5 y 6 kg. La opción más solicitada para cumplimiento NOM-002-STPS.',
        specs: 'Acero cal. 22 · Puerta acrílica o vidrio · 55×38×20 cm · Señal NOM incluida',
        waText: 'Hola, quiero cotizar gabinetes para extintor de 4.5 a 6 kg',
      },
      {
        nombre: 'Gabinete 9–12 kg',
        badge: 'Industrial',
        desc: 'Para extintores de 9 y 12 kg en bodegas, talleres y plantas industriales. Construido en lámina cal. 20 de mayor resistencia. Puerta con cerrojo y visor panorámico.',
        specs: 'Acero cal. 20 · Puerta vidrio templado · 70×48×22 cm · Cerrojo incluido',
        waText: 'Hola, quiero cotizar gabinete para extintor de 9 a 12 kg industrial',
      },
      {
        nombre: 'Gabinete Panorámico',
        badge: 'Visibilidad total',
        desc: 'Frente acrílico total que permite ver el estado completo del extintor sin abrir el gabinete. Ideal para áreas con inspección frecuente y espacios corporativos con diseño.',
        specs: 'Acero cal. 22 · Frente acrílico total · 55–70 cm alto · Sin cerrojo · Fácil inspección',
        waText: 'Hola, quiero cotizar gabinete panorámico para extintor',
      },
      {
        nombre: 'Gabinete 20–30 kg',
        badge: 'Gran capacidad',
        desc: 'Para extintores de gran capacidad (20 y 30 kg) o formatos especiales. Fabricado a especificación según el modelo exacto del extintor. Tiempo de fabricación: 5 a 7 días hábiles.',
        specs: 'Acero cal. 20 · A medida · 90–110 cm alto · Bisagra reforzada · Entrega a 7 días',
        waText: 'Hola, quiero cotizar gabinete a medida para extintor de 20 o 30 kg',
      },
    ],

    // ── Características técnicas ──────────────────────────────
    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Gabinete construido',
      titleLine2: 'para resistir y proteger',
      desc: 'Cada gabinete para extintor está diseñado para mantener el equipo visible, accesible y protegido frente a daños mecánicos, golpes y condiciones del entorno.',
      items: [
        { title: 'Acero calibre 22 o 20',         desc: 'Estructura robusta que protege el extintor de golpes y manipulaciones no autorizadas.' },
        { title: 'Puerta acrílica o vidrio templado', desc: 'Permite identificar rápidamente el estado del extintor sin abrir el gabinete.' },
        { title: 'Pintura electrostática rojo RAL 3001', desc: 'Acabado durable conforme a NOM-026-STPS resistente a humedad y corrosión.' },
        { title: 'Bisagra y manija de emergencia', desc: 'Apertura rápida sin llave para acceso inmediato en situaciones de emergencia.' },
        { title: 'Medidas estándar NOM',            desc: 'Compatibles con extintores de 2.5, 4.5, 6, 9 y 12 kg según la norma aplicable.' },
        { title: 'Señalamiento NOM incluido',       desc: 'Etiqueta conforme a NOM-003-SEGOB entregada junto con el gabinete en cada pedido.' },
      ],
    },

    // ── ¿Dónde instalar? ──────────────────────────────────────
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


  // ══════════════════════════════════════════════════════════
  // 2. PORTA EXTINTOR
  // ══════════════════════════════════════════════════════════
  'porta-extintor': {
    metaTitle: 'Porta Extintor en CDMX | Herrajes y Soportes Certificados | Proyecto Red',
    metaDesc: 'Porta extintores de piso, pared y columna para todos los tamaños de extintor. Entrega en CDMX. Cumplimiento NOM-002-STPS.',
    badge: 'NOM-002-STPS',
    heroTitle: 'Porta Extintores',
    heroAccent: 'y Soportes',
    heroSubtitle: 'Soportes de pared, piso y columna para fijar extintores de manera correcta, visible y accesible conforme a NOM-002-STPS.',
    heroDescRight: [
      'Herrajes de acero con recubrimiento anticorrosivo para uso interior y exterior.',
      'Soportes universales compatibles con extintores de 1 a 150 kg.',
      'Modelos de pared, piso con ruedas, móviles y para columnas. Tornillería incluida.',
    ],

    // ── Variantes / modelos disponibles ──────────────────────
    variantesEyebrow: 'Tipos de soporte',
    variantesTitleLine1: 'El herraje correcto',
    variantesTitleLine2: 'para cada extintor y espacio',
    variantesBodyPara: 'Todos los herrajes incluyen tornillería, taquetes y plantilla de instalación. En pedidos mayores de 10 piezas incluimos instalación a domicilio en CDMX. Fabricación nacional con recubrimiento anticorrosivo.',
    variantes: [
      {
        nombre: 'Herraje pared 2.5–4.5 kg',
        badge: 'Básico',
        desc: 'Para extintores de 2.5 y 4.5 kg en oficinas, pasillos y locales. Soporte de pared con tornillería y taquetes incluidos. La solución más económica para cumplir NOM.',
        specs: 'Acero con pintura · Pared · 2.5–4.5 kg · Tornillería incluida · Altura 1.10–1.50 m',
        waText: 'Hola, quiero cotizar herrajes de pared para extintor de 2.5 a 4.5 kg',
      },
      {
        nombre: 'Herraje pared 6–9 kg',
        badge: 'Estándar',
        desc: 'El soporte más solicitado para empresas y plantas. Compatible con extintores de 6 y 9 kg. Estructura reforzada con tornillo de ajuste para mantener el extintor firme.',
        specs: 'Acero reforzado · Pared · 6–9 kg · Tornillo de ajuste · Plantilla incluida',
        waText: 'Hola, quiero cotizar herrajes de pared para extintor de 6 a 9 kg',
      },
      {
        nombre: 'Herraje pared 12 kg',
        badge: 'Industrial',
        desc: 'Soporte de pared reforzado para extintores de 12 kg en talleres y zonas industriales. Abrazadera de acero galvanizado con tornillo de apriete lateral.',
        specs: 'Acero galvanizado · Pared · 12 kg · Abrazadera ajustable · Uso industrial',
        waText: 'Hola, quiero cotizar herraje de pared para extintor de 12 kg',
      },
      {
        nombre: 'Base piso con ruedas',
        badge: 'Rodante',
        desc: 'Para extintores de 20 a 150 kg que requieren movilidad en naves industriales, bodegas y estacionamientos. Ruedas neumáticas con freno para posicionamiento preciso.',
        specs: 'Acero cal. 14 · Piso · 20–150 kg · Ruedas neumáticas · Freno incluido · Manguera hasta 6 m',
        waText: 'Hola, quiero cotizar base de piso con ruedas para extintor rodante',
      },
      {
        nombre: 'Soporte columna universal',
        badge: 'Columna',
        desc: 'Fija el extintor a columnas o postes con abrazadera ajustable de acero. Sin perforar paredes. Ideal para pasillos industriales y zonas sin muro disponible.',
        specs: 'Acero inox. o galvanizado · Columna/poste · Ajustable ø50–200 mm · Sin perforación',
        waText: 'Hola, quiero cotizar soporte para columna de extintor',
      },
    ],

    // ── Características técnicas ──────────────────────────────
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


  // ══════════════════════════════════════════════════════════
  // 3. GABINETE PARA BOMBERO
  // ══════════════════════════════════════════════════════════
  'gabinete-bombero': {
    metaTitle: 'Gabinete para Bombero en CDMX | Equipamiento Completo | Proyecto Red',
    metaDesc: 'Gabinetes para equipo de bombero con manguera, pitón y llave Storz. Acero calibre 20, cierre con cerrojo y visor de acrílico. Entrega en CDMX.',
    badge: 'NFPA 10',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Bombero',
    heroSubtitle: 'Gabinetes de acero que alojan el equipo completo del bombero: manguera enrollada, pitón y llaves. Acceso rápido y visibilidad inmediata en emergencias.',
    heroDescRight: [
      'Cuerpo en lámina de acero cal. 20 con pintura electrostática roja RAL 3001.',
      'Visor de acrílico transparente para inspección rápida sin abrir ni romper precinto.',
      'Disponibles en clase I (2½"), clase II (1½") y clase III (doble). Conforme a NFPA 14.',
    ],

    // ── Variantes / modelos disponibles ──────────────────────
    variantesEyebrow: 'Clases de gabinete',
    variantesTitleLine1: 'El gabinete correcto',
    variantesTitleLine2: 'según la clase y el uso',
    variantesBodyPara: 'Todos los modelos incluyen señalamiento NOM-003-SEGOB, herraje de montaje y opciones de equipamiento interior (manguera + pitón + llave Storz). Suministramos el gabinete solo o equipado según tus requerimientos de NFPA 14.',
    variantes: [
      {
        nombre: 'Gabinete clase II · 1½"',
        badge: 'Más solicitado',
        desc: 'Para uso de ocupantes del edificio. Aloja manguera de 1½" × 15 m, pitón de neblina/chorro y llave Storz. El modelo exigido en la mayoría de los edificios de departamentos y oficinas.',
        specs: 'Acero cal. 20 · 1 manguera 1½" · 75×60×20 cm · NFPA 14 clase II · Señal NOM',
        waText: 'Hola, quiero cotizar gabinete para bombero clase II con manguera 1½"',
      },
      {
        nombre: 'Gabinete clase I · 2½"',
        badge: 'Bomberos',
        desc: 'Toma de 2½" para uso exclusivo de bomberos. Solo tiene la válvula angular — sin manguera pre-conectada. Requerido en edificios con más de 6 niveles y plantas de alto riesgo.',
        specs: 'Acero cal. 20 · Válvula angular 2½" · 60×50×18 cm · NFPA 14 clase I · Cierre con cerrojo',
        waText: 'Hola, quiero cotizar gabinete para bombero clase I con toma de 2½"',
      },
      {
        nombre: 'Gabinete clase III · Doble',
        badge: 'Completo',
        desc: 'Combina la manguera de 1½" para ocupantes y la toma de 2½" para bomberos en un solo gabinete. El sistema más completo conforme a NFPA 14 para edificios de alta ocupación.',
        specs: 'Acero cal. 18 · 1½" equipada + 2½" sin manguera · 90×70×22 cm · NFPA 14 clase III',
        waText: 'Hola, quiero cotizar gabinete para bombero clase III doble toma',
      },
      {
        nombre: 'Gabinete a especificación',
        badge: 'A medida',
        desc: 'Dimensiones y configuración personalizadas para proyectos con requerimientos específicos de arquitectura o dictamen técnico. Tiempo de fabricación: 5 a 7 días hábiles.',
        specs: 'Acero cal. 18 o 20 · Medidas a proyecto · Acabado a elección · Entrega 7 días hábiles',
        waText: 'Hola, necesito cotizar gabinetes para bombero a medida para un proyecto',
      },
    ],

    // ── Características técnicas ──────────────────────────────
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
        { label: 'Hospitales y clínicas',         desc: 'Normativas de instalaciones de salud exigen mangueras y gabinetes en áreas de mayor riesgo.' },
        { label: 'Hoteles y venues de eventos',   desc: 'El CASCE (Certificado de Seguridad) exige mangueras y gabinetes en áreas de concentración.' },
      ],
    },

    relatedTitle: 'Otros gabinetes del catálogo',
    faqItems: [
      { question: '¿Qué equipo viene dentro del gabinete?', answer: 'El gabinete se puede suministrar solo (vacío) o equipado con manguera de 1½" o 2½", pitón o chiflón, y llave Storz según la conexión del hidrante. También podemos incluir la válvula angular de 45°.' },
      { question: '¿Cuánto pesa y qué medidas tiene el gabinete?', answer: 'Nuestro modelo estándar clase II mide 75×60×20 cm y pesa 12 kg vacío. El clase III mide 90×70×22 cm y pesa 18 kg vacío. Fabricamos también en medidas a especificación.' },
      { question: '¿Cuál es el mantenimiento del gabinete?', answer: 'Se recomienda revisión semestral del estado de la pintura, correcto enrollado de la manguera y funcionalidad de la válvula conforme a NFPA 25. Ofrecemos pólizas de mantenimiento preventivo.' },
    ],
    waMessage: 'Hola, necesito cotizar gabinetes para bombero en CDMX',
    ctaTitle: '¿Necesitas gabinetes para bombero con equipo completo?',
    ctaBody: 'Te cotizamos gabinete + manguera + pitón + llave en un solo paquete. Instalación disponible en CDMX.',
  },


  // ══════════════════════════════════════════════════════════
  // 4. GABINETE PARA HIDRANTE
  // ══════════════════════════════════════════════════════════
  'gabinete-hidrante': {
    metaTitle: 'Gabinete para Hidrante en CDMX | Siamesas y Columnas | Proyecto Red',
    metaDesc: 'Gabinetes para hidrante interior y exterior con válvula angular, manguera y chiflón. NFPA 14. Entrega e instalación en CDMX.',
    badge: 'NFPA 14',
    heroTitle: 'Gabinetes',
    heroAccent: 'para Hidrante',
    heroSubtitle: 'Gabinetes de acero para proteger y dar acceso al sistema hidráulico de hidrantes interiores, con válvula angular, manguera acoplada y chiflón.',
    heroDescRight: [
      'Diseñados conforme a NFPA 14 para sistemas de mangueras en clase I, II y III.',
      'Integran válvula angular de 1½" o 2½", manguera semi-rígida y chiflón regulable.',
      'Opciones para montaje en pared sobrepuesto (surface) o empotrado (flush mount).',
    ],

    // ── Variantes / modelos disponibles ──────────────────────
    variantesEyebrow: 'Configuraciones de hidrante',
    variantesTitleLine1: 'El sistema de hidrante',
    variantesTitleLine2: 'que tu edificio necesita',
    variantesBodyPara: 'Todos los modelos incluyen la válvula angular, visor de acrílico con sello y señalética NFPA. Suministramos el gabinete solo o equipado con manguera, chiflón y llave de conexión. Instalación llave en mano en CDMX y Estado de México.',
    variantes: [
      {
        nombre: 'Clase II equipado · 1½"',
        badge: 'Más solicitado',
        desc: 'El sistema completo para ocupantes: gabinete + válvula angular 1½" + manguera semi-rígida 15 m + chiflón regulable. El modelo requerido en la mayoría de los edificios de departamentos, oficinas y centros comerciales.',
        specs: 'Acero cal. 16 · Válvula 1½" · Manguera 15 m · Chiflón · 80×65×20 cm · NFPA 14 clase II',
        waText: 'Hola, quiero cotizar gabinete para hidrante clase II equipado con manguera 1½"',
      },
      {
        nombre: 'Clase I · 2½" sola',
        badge: 'Bomberos',
        desc: 'Toma de gran diámetro para uso exclusivo de cuerpos de bomberos. Solo gabinete + válvula angular 2½" sin manguera. Requerido en edificios altos y plantas industriales con acceso de bomberos.',
        specs: 'Acero cal. 16 · Válvula angular 2½" · Sin manguera · 65×55×18 cm · NFPA 14 clase I',
        waText: 'Hola, quiero cotizar gabinete para hidrante clase I con válvula 2½" para bomberos',
      },
      {
        nombre: 'Clase III · Doble toma',
        badge: 'Sistema completo',
        desc: 'El sistema más completo: clase I (2½" para bomberos) + clase II (1½" equipada para ocupantes) en un solo gabinete. Obligatorio en edificios de gran altura y complejos de alto riesgo conforme a NFPA 14.',
        specs: 'Acero cal. 14 · 1½" equipada + 2½" sin manguera · 95×75×22 cm · NFPA 14 clase III',
        waText: 'Hola, quiero cotizar gabinete para hidrante clase III doble toma',
      },
      {
        nombre: 'Empotrado (flush mount)',
        badge: 'Empotrado',
        desc: 'Versión para instalación empotrada en muro, con marco de acabado arquitectónico. Misma funcionalidad que el sobrepuesto pero se integra a la superficie del muro para proyectos con diseño o remodelaciones.',
        specs: 'Acero cal. 16 · Empotrado · Marco de acabado · 80×65×15 cm (profundidad) · A especificación',
        waText: 'Hola, quiero cotizar gabinete para hidrante empotrado en muro',
      },
    ],

    // ── Características técnicas ──────────────────────────────
    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Sistema de hidrante',
      titleLine2: 'listo para primera respuesta',
      desc: 'El gabinete para hidrante integra todos los componentes del sistema de mangueras en un solo punto de acceso, reduciendo el tiempo de respuesta en emergencias.',
      items: [
        { title: 'Válvula angular 45° incluida',  desc: 'Válvula de bronce con asiento de disco para conexión directa a la red hidráulica de la edificación.' },
        { title: 'Manguera semi-rígida acoplada', desc: 'Manguera de poliéster o caucho de 1½" o 2½" con acoples Storz o roscados integrados.' },
        { title: 'Chiflón regulable incluido',    desc: 'Pitón de chorro recto y neblina para mayor versatilidad en la extinción.' },
        { title: 'Gabinete acero cal. 14 o 16',  desc: 'Mayor grosor para instalaciones en áreas de alto tráfico o uso industrial pesado.' },
        { title: 'Visor de acrílico con sello',  desc: 'Permite identificar visualmente el estado completo del sistema en cada ronda de inspección.' },
        { title: 'Señalética NFPA incluida',     desc: 'Etiqueta conforme a NFPA 704 y señal de manguera conforme a NOM-003-SEGOB.' },
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
