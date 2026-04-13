// ============================================================
// src/data/bomberos-productos.ts
// Datos completos para las páginas de Nivel 4 — productos de equipo para bomberos
// Fuente de verdad para src/pages/equipo-bomberos/[producto].astro
// ============================================================

// ============================================================
// Variante / modelo disponible por producto
// Equivalente a VarianteExtintor pero para equipo de bomberos.
// Aparece en la sección 0 (antes de Características), igual
// que en extintores/[producto].astro.
// ============================================================
export interface VarianteBombero {
  nombre: string
  badge?: string
  desc: string
  specs: string        // Línea monoespaciada: material · norma · tallas
  waText: string       // Mensaje pre-llenado para WhatsApp
}

export interface ProductoBomberoData {
  // SEO & meta
  metaTitle: string
  metaDesc: string

  // Hero
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Imagen principal del producto (usada en las tarjetas de variantes)
  img?: string

  // Sección 0 — Modelos / opciones disponibles (opcional)
  variantes?: VarianteBombero[]
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

  // Sección 2 — ¿Para quién es?
  paraQuien: {
    eyebrow: string
    titleLine1: string
    titleLine2?: string
    desc: string
    usos: { label: string; desc: string }[]
  }

  // Sección 3 — Otros productos de la categoría
  relatedTitle: string

  // FAQ
  faqItems: { question: string; answer: string }[]

  // CTA Final
  waMessage: string
  ctaTitle: string
  ctaBody: string
}

// ============================================================
// Slugs de todos los productos de la categoría equipo-bomberos
// ============================================================
export const BOMBERO_PRODUCTS = [
  { slug: 'trajes-estructurales',    label: 'Trajes Estructurales',        badge: 'NFPA 1971'   },
  { slug: 'era',                     label: 'ERA — Respiración Autónoma',  badge: 'NFPA 1981'   },
  { slug: 'rescate-hidraulico',      label: 'Rescate Hidráulico',          badge: 'Quijadas'     },
  { slug: 'rescate-neumatico',       label: 'Rescate Neumático',           badge: 'Cojines'      },
  { slug: 'rescate-electrico',       label: 'Rescate Eléctrico',           badge: 'Batería'      },
  { slug: 'arneses-rescate-altura',  label: 'Arneses y Rescate en Altura', badge: 'NFPA 1983'   },
  { slug: 'complementos-uniforme',   label: 'Complementos de Uniforme',    badge: 'Nomex · NFPA' },
] as const

// ============================================================
// DATOS POR PRODUCTO
// ============================================================
export const BOMBERO_PAGES: Record<string, ProductoBomberoData> = {

  // ──────────────────────────────────────────────────────────
  // 1. TRAJES ESTRUCTURALES NFPA 1971
  // ──────────────────────────────────────────────────────────
  'trajes-estructurales': {
    metaTitle: 'Trajes Estructurales para Bomberos NFPA 1971 | Proyecto Red CDMX',
    metaDesc: 'Trajes estructurales de bombero certificados NFPA 1971. Tres capas de protección térmica, barrera de humedad y exterior resistente a llama. Para cuerpos de bomberos y brigadas industriales en México.',

    badge: 'NFPA 1971 · Combate estructural · Certificado',
    heroTitle: 'Trajes Estructurales',
    heroAccent: 'NFPA 1971',
    img: '/imagenes/equipo-bomberos/trajes-estructurales-nfpa-1971.avif',
    heroSubtitle: 'El traje estructural es el equipo de protección personal más crítico para el combate de incendios. Nuestros trajes están certificados NFPA 1971 con sistema de tres capas: exterior resistente a llama, barrera de humedad e interior térmico.',
    heroDescRight: [
      'Un traje estructural certificado NFPA 1971 es la diferencia entre la vida y la muerte en una operación de combate de incendios. La certificación exige pruebas estrictas de resistencia al calor, a la llama, a la penetración de líquidos y a la resistencia mecánica de cada capa y de las costuras.',
      'En Proyecto Red suministramos trajes estructurales completos (chaqueta y pantalón) en las tallas requeridas por el cuerpo, con documentación de certificación de origen, ficha técnica y especificaciones de fabricante. Trabajamos con cuerpos municipales de bomberos, brigadas de Protección Civil y plantas industriales con brigada propia.',
    ],
variantesEyebrow:    'Opciones disponibles',
    variantesTitleLine1: 'Selecciona el sistema',
    variantesTitleLine2: 'de protección correcto',
    variantesBodyPara:   'Todos los trajes se entregan con documentación NFPA 1971 de origen, ficha técnica del fabricante y certificado de conformidad. Cotiza la talla, la cantidad y el sistema para tu cuerpo o brigada.',
    variantes: [
      {
        nombre: 'Traje Nomex® III — Dotación municipal',
        badge:  'Nomex III · NFPA 1971',
        desc:   'Chaquetón + pantalón de Nomex® III con barrera de humedad Crosstech® y forro térmico Caldura®. La opción más utilizada en cuerpos municipales de bomberos por su relación precio/desempeño. Disponible en tallas S a 4XL.',
        specs:  'Exterior: Nomex® III · Barrera: Crosstech® · Tallas: S – 4XL',
        waText: 'Hola, necesito cotizar trajes estructurales NFPA 1971 sistema Nomex III para mi cuerpo o brigada. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Traje PBI Matrix — Alta performance',
        badge:  'PBI Matrix · Máxima protección',
        desc:   'Chaquetón + pantalón de PBI Matrix con barrera Gore-Tex® PTB y forro Aralite®. Mayor resistencia al calor y a la llama que el Nomex III. El estándar en cuerpos de alta demanda operativa y brigadas industriales de alto riesgo.',
        specs:  'Exterior: PBI Matrix · Barrera: Gore-Tex® PTB · Tallas: S – 4XL',
        waText: 'Hola, necesito cotizar trajes estructurales NFPA 1971 sistema PBI Matrix para mi cuerpo o brigada. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Dotación completa — Traje + Casco + Guantes + Capucha',
        badge:  'EPP completo · 5 elementos',
        desc:   'Traje estructural NFPA 1971 + casco estructural + guantes de combate + capucha Nomex® + PASS individual. Dotación completa para incorporación de personal nuevo o actualización de certificación. Documentación por elemento incluida.',
        specs:  '5 elementos · Certificados NFPA 1971/1851 · Doc. de origen',
        waText: 'Hola, necesito cotizar una dotación completa de EPP (traje + casco + guantes + capucha) NFPA 1971. ¿Pueden asesorarme?',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Capas y características del',
      titleLine2: 'traje estructural NFPA 1971',
      desc: 'El traje estructural se compone de tres capas funcionales que trabajan juntas para proporcionar el nivel de protección que exige NFPA 1971 en operaciones de combate estructural.',
      items: [
        {
          title: 'Capa exterior: Nomex® o PBI Matrix resistente a llama',
          desc: 'La capa exterior es la primera barrera contra el calor radiante, las llamas y las salpicaduras de líquidos calientes. Los materiales más usados son Nomex® III (aramida), PBI Matrix (polibencimidazol) y Gold Label™. Cada material ofrece un nivel diferente de resistencia térmica y durabilidad mecánica.',
        },
        {
          title: 'Barrera de humedad: membrana Gore-Tex® o Crosstech®',
          desc: 'La membrana de humedad impide que el agua, los líquidos y los productos químicos penetren el traje desde el exterior, mientras permite la transpiración del bombero hacia afuera. NFPA 1971 exige que esta capa resista la penetración de líquidos bajo presión.',
        },
        {
          title: 'Forro térmico: Caldura® o Aralite®',
          desc: 'El forro térmico absorbe el calor que traspasa las primeras capas, protegiendo al bombero del calor por conducción y convección. El espesor y composición del forro determinan el THL (Total Heat Loss) y la capacidad de transferencia de calor del traje.',
        },
        {
          title: 'Costuras soldadas y reforzadas con doble puntada',
          desc: 'Las costuras son un punto crítico de falla. NFPA 1971 exige que las costuras tengan la misma resistencia a la llama y al calor que el tejido. Las costuras soldadas o selladas con cinta PTFE ofrecen mayor protección que las costuras simples.',
        },
        {
          title: 'Reflectores retroreflectivos amarillo-plateados',
          desc: 'Los trajes incluyen bandas retroreflectivas certificadas conforme a NFPA 1971 en tronco, brazos y piernas. Son visibles desde 150 metros con iluminación estándar y desde 300 metros con luz de emergencia.',
        },
        {
          title: 'Certificación NFPA 1851: programa de mantenimiento',
          desc: 'Además de la certificación del traje, NFPA 1851 establece los programas de inspección, limpieza, reparación y retiro del equipo de protección. Un traje mal mantenido pierde certificación aunque sea nuevo. Nosotros asesoramos en la implementación del programa.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Sectores que atendemos',
      titleLine1: '¿Para qué tipo de cuerpo',
      titleLine2: 'o brigada es este equipo?',
      desc: 'El traje estructural NFPA 1971 es el equipo estándar para todo personal que realiza operaciones de combate interior de incendios. Estos son los principales sectores que atendemos.',
      usos: [
        { label: 'Cuerpos municipales y estatales de bomberos', desc: 'Dotación completa de trajes para primera intervención, combate estructural y operaciones de búsqueda y rescate en ambiente de incendio (IDLH).' },
        { label: 'Brigadas de emergencia industrial',           desc: 'Plantas químicas, refinerías, plantas de energía y manufactura que requieren brigadas propias con equipo certificado NFPA para respuesta a incendios en planta.' },
        { label: 'Protección Civil estatal y municipal',        desc: 'Cuerpos de PC que operan en respuesta a incendios estructurales, rescates en altura y emergencias con materiales peligrosos donde se requiere protección térmica.' },
        { label: 'Brigadas de construcción y minería',          desc: 'Sectores con riesgo de incendio en espacios confinados, túneles o instalaciones subterráneas donde el traje estructural es el EPP mínimo exigible.' },
        { label: 'Academias y centros de capacitación',         desc: 'Para entrenamiento en quema real, simulacros de rescate y prácticas en cámara de fuego. Los trajes de entrenamiento tienen las mismas certificaciones NFPA 1971.' },
        { label: 'Aeropuertos y aviación (ARFF)',               desc: 'Los cuerpos ARFF de aeropuertos requieren trajes de proximidad o de entrada al fuego además del estructural para respuesta a emergencias en aeronaves.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Cuánto dura un traje estructural certificado NFPA 1971?',
        answer: 'NFPA 1851 establece una vida útil máxima de 10 años desde la fecha de fabricación para trajes estructurales, independientemente de su estado aparente. Sin embargo, trajes expuestos a fuego real, productos químicos o contaminantes biológicos pueden tener una vida útil menor y deben ser retirados antes. Un programa de inspección anual es obligatorio.',
      },
      {
        question: '¿El traje estructural protege contra materiales peligrosos (HazMat)?',
        answer: 'No específicamente. El traje estructural NFPA 1971 está diseñado para combate de incendios estructurales, no para operaciones HazMat. Para operaciones con materiales peligrosos se requiere un traje Level A (totalmente encapsulado) o Level B/C según el agente. Los trajes NFPA 1971 ofrecen protección limitada contra salpicaduras químicas, pero no son una barrera de agentes químicos.',
      },
      {
        question: '¿Cómo seleccionar el tronco correcto entre Nomex® y PBI?',
        answer: 'El Nomex® III o Nomex® Gold es el material más utilizado en cuerpos municipales por su relación precio/desempeño. El PBI Matrix o PBI Gold ofrece mayor resistencia al calor y a la llama, y es el preferido en cuerpos de alta demanda operativa. Para brigadas industriales en ambientes con materiales específicos (ácidos, bases, hidrocarburos), existe Nomex® con acabado repelente a hidrocarburos.',
      },
      {
        question: '¿Pueden cotizar una dotación completa para una brigada nueva?',
        answer: 'Sí. Evaluamos el nivel de riesgo, el tipo de operaciones que realizará la brigada y el presupuesto disponible para proponer la dotación completa de EPP: traje, ERA, casco, guantes, botas, capucha y equipo personal de alerta (PASS). Incluimos documentación de certificación para el expediente del cuerpo.',
      },
    ],

    waMessage: 'Hola, necesito cotizar trajes estructurales NFPA 1971 para bomberos o brigada. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas trajes estructurales para tu cuerpo o brigada?',
    ctaBody: 'Cuéntanos el número de trajes, el tipo de operaciones y si necesitas tallas especiales. Te cotizamos con certificación de origen y documentación completa.',
  },

  // ──────────────────────────────────────────────────────────
  // 2. ERA — EQUIPOS DE RESPIRACIÓN AUTÓNOMA
  // ──────────────────────────────────────────────────────────
  'era': {
    metaTitle: 'ERA — Equipos de Respiración Autónoma SCBA NFPA 1981 | Proyecto Red',
    metaDesc: 'Equipos de respiración autónoma (ERA/SCBA) certificados NFPA 1981. Cilindros de 30 y 45 minutos, alarma PASS integrada, máscara de silicón. Para bomberos y brigadas en México.',

    badge: 'NFPA 1981 · SCBA · Atmósferas IDLH',
    heroTitle: 'ERA — Equipos de',
    heroAccent: 'Respiración Autónoma',
    img: '/imagenes/equipo-bomberos/era-scba-respiracion-autonoma.avif',
    heroSubtitle: 'Los equipos de respiración autónoma (ERA o SCBA) protegen al bombero o brigadista en atmósferas peligrosas para la vida (IDLH): humo, gases tóxicos, deficiencia de oxígeno y atmósferas inmediatamente peligrosas para la salud. Certificados NFPA 1981.',
    heroDescRight: [
      'Un ERA de circuito abierto proporciona aire respirable limpio desde un cilindro de alta presión (300 bar) a través de un regulador de demanda conectado a una máscara facial de presión positiva. La presión positiva garantiza que ningún contaminante exterior ingrese a la máscara incluso si hay una fuga leve en el sellado.',
      'En Proyecto Red suministramos ERA completos (arnés, cilindro, regulador, máscara y sistema PASS), con documentación NFPA 1981, ficha técnica del fabricante y capacitación de uso incluida. Disponibles en duración de 30 y 45 minutos para diferentes perfiles operativos.',
    ],
variantesEyebrow:    'Opciones disponibles',
    variantesTitleLine1: 'Selecciona la autonomía',
    variantesTitleLine2: 'y el servicio que necesitas',
    variantesBodyPara:   'Todos los ERA se entregan con documentación NFPA 1981/NIOSH, capacitación de uso incluida y soporte para recarga y mantenimiento. Cotiza el número de equipos y el perfil operativo de tu cuerpo o brigada.',
    variantes: [
      {
        nombre: 'ERA 30 minutos — Cilindro 6.8 L / 300 bar',
        badge:  'NFPA 1981 · 30 min',
        desc:   'ERA completo: arnés ergonómico, cilindro de fibra de carbono 6.8 L/300 bar, regulador de presión positiva, máscara panorámica de silicón y PASS integrado. Duración efectiva de 15–20 minutos en combate interior con trabajo intenso.',
        specs:  'Cilindro: 6.8 L / 300 bar · Duración: ~30 min · Peso: ~12 kg',
        waText: 'Hola, necesito cotizar ERA (equipo de respiración autónoma) de 30 minutos NFPA 1981. ¿Pueden asesorarme?',
      },
      {
        nombre: 'ERA 45 minutos — Cilindro 9 L / 300 bar',
        badge:  'NFPA 1981 · 45 min',
        desc:   'Mayor autonomía para brigadas industriales con largas distancias al riesgo o para cuerpos que atienden instalaciones de gran superficie. Compatible en arnés y máscara con la plataforma de 30 min para intercambiabilidad de componentes.',
        specs:  'Cilindro: 9 L / 300 bar · Duración: ~45 min · Peso: ~14 kg',
        waText: 'Hola, necesito cotizar ERA (equipo de respiración autónoma) de 45 minutos NFPA 1981. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Recarga de cilindros y mantenimiento ERA',
        badge:  'Servicio · DOT / CGA C-6',
        desc:   'Recarga de cilindros de ERA con aire respirable NIOSH, prueba hidrostática periódica conforme a DOT/CGA C-6 y revisión completa de regulador, PASS y máscara. Entrega el mismo día en CDMX para recargas urgentes.',
        specs:  'Aire NIOSH · Hidrostática cada 3–5 años · Collar de garantía',
        waText: 'Hola, necesito el servicio de recarga y mantenimiento de cilindros ERA. ¿Pueden asesorarme?',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Componentes y características',
      titleLine2: 'del ERA / SCBA',
      desc: 'El ERA es un sistema compuesto por múltiples componentes que trabajan juntos. Conocer cada elemento es esencial para seleccionar el equipo correcto para tu tipo de operación.',
      items: [
        {
          title: 'Arnés y backframe ergonómico',
          desc: 'El arnés soporta y distribuye el peso del cilindro (7–12 kg) sobre los hombros y la cadera del usuario. Un arnés bien diseñado permite moverse en espacios confinados sin perder agilidad. Los modelos de alta gama tienen ajuste rápido con una sola mano.',
        },
        {
          title: 'Cilindro de fibra de carbono o acero — 6.8 L / 300 bar',
          desc: 'Los cilindros de fibra de carbono son significativamente más ligeros que los de acero para la misma capacidad. El estándar de 6.8 litros a 300 bar proporciona aproximadamente 30 minutos de uso en trabajo moderado. Los cilindros de 9 litros o 300 bar ofrecen 45 minutos.',
        },
        {
          title: 'Regulador de primera y segunda etapa — presión positiva',
          desc: 'La primera etapa reduce la presión de 300 bar a presión intermedia. La segunda etapa (regulador de demanda) suministra aire a presión positiva ligera dentro de la máscara, garantizando que no entre contaminante exterior incluso con un mal sellado facial.',
        },
        {
          title: 'Máscara facial de silicón — visión panorámica',
          desc: 'Las máscaras de visor panorámico ofrecen campo visual superior al 70%, compatibles con anteojos correctivos mediante insert óptico. El sellado facial perimetral de silicón se adapta a diferentes contornos faciales. La conexión a la segunda etapa es rosca estándar NFPA.',
        },
        {
          title: 'Sistema PASS integrado — alarma personal de alerta',
          desc: 'El PASS (Personal Alert Safety System) emite una alarma audible (≥95 dB) si el bombero permanece inmóvil por más de 30 segundos. Algunos modelos tienen PASS activado por la presión del cilindro (automático) además del manual. NFPA 1981 exige PASS integrado en todos los ERA.',
        },
        {
          title: 'Manómetro de presión y alarma de bajo nivel',
          desc: 'El manómetro muestra la presión restante en el cilindro. La alarma de bajo nivel (a ~55 bar / aprox. 5 min de reserva) indica al operador que debe comenzar la evacuación. Algunos equipos tienen sistema de telemetría para monitoreo externo de la presión desde el exterior.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Sectores que atendemos',
      titleLine1: '¿Para qué tipo de operaciones',
      titleLine2: 'se usa el ERA?',
      desc: 'El ERA es equipo obligatorio en cualquier operación en atmósfera peligrosa para la vida. Estos son los perfiles operativos más comunes que atendemos.',
      usos: [
        { label: 'Combate interior de incendios estructurales', desc: 'El uso más intensivo del ERA. Operaciones de 20–30 minutos en atmósferas con humo denso, CO, HCN y temperaturas superiores a 200 °C. Se requiere cilindro de 30 min mínimo para una intervención típica.' },
        { label: 'Brigadas industriales — atmósferas tóxicas',  desc: 'Plantas químicas, refinerías y plantas de tratamiento de agua con riesgo de atmósferas con gases tóxicos (H₂S, Cl₂, NH₃). Se recomienda ERA de 45 min para brigadas con largas distancias de recorrido hasta el riesgo.' },
        { label: 'Rescate en espacios confinados',              desc: 'Silos, tanques, alcantarillas y ductos donde la atmósfera puede ser deficiente en oxígeno o contener gases asфixiantes. El ERA de circuito abierto es el estándar para rescate en espacio confinado conforme a OSHA y STPS.' },
        { label: 'Respuesta a materiales peligrosos (HazMat)',  desc: 'El ERA es parte integral del equipo Level A y B para respuesta a derrames o liberaciones de materiales peligrosos. Se combina con traje de encapsulamiento total o semitotal según el agente.' },
        { label: 'Aeropuertos y ARFF',                          desc: 'Los cuerpos de rescate y extinción de aeropuertos (ARFF) usan ERA de alta presión (300 bar) con cilindros de 45 min para operaciones prolongadas en aeronaves.' },
        { label: 'Búsqueda y rescate urbano (USAR)',            desc: 'En operaciones de búsqueda en estructuras colapsadas con riesgo de gas o polvo inflamable, el ERA protege al rescatista durante la operación de búsqueda y extricación de víctimas.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Cuánto tiempo dura realmente un ERA de 30 minutos?',
        answer: 'Los 30 minutos son la duración en condiciones de prueba estándar (esfuerzo moderado a 40 L/min de consumo). En condiciones reales de combate interior, con el estrés físico y fisiológico de la operación, el consumo puede ser de 60–80 L/min, reduciendo la duración efectiva a 15–20 minutos. Por eso el procedimiento correcto es iniciar la evacuación cuando el manómetro llega al 50% de la presión inicial.',
      },
      {
        question: '¿Cada cuándo deben recargarse los cilindros del ERA?',
        answer: 'Los cilindros deben recargarse cada vez que se usen y al menos una vez al año para mantenimiento. La prueba hidrostática de los cilindros es obligatoria cada 3 años (cilindros de fibra de carbono) o cada 5 años (cilindros de acero) conforme a DOT y CGA C-6. En Proyecto Red realizamos la recarga de cilindros y gestionamos la prueba hidrostática.',
      },
      {
        question: '¿Se puede usar el ERA en espacios confinados para trabajo rutinario?',
        answer: 'El ERA es para atmósferas IDLH o emergencias. Para trabajo rutinario en espacios confinados con atmósferas deficientes en oxígeno pero sin condiciones inmediatamente peligrosas, se puede usar un respirador de línea de aire comprimido (SAR - Supplied Air Respirator), que es más económico y cómodo para operaciones prolongadas. El ERA queda como equipo de emergencia y rescate.',
      },
      {
        question: '¿Qué capacitación se requiere para usar un ERA?',
        answer: 'NFPA 1500 y la NOM-017-STPS-2008 exigen que todo usuario de ERA reciba capacitación en donación y desdonación del equipo, comprobación de presión, procedimiento de alarma PASS, reconocimiento de señales de bajo nivel y protocolo de evacuación. La capacitación debe renovarse anualmente. Nosotros ofrecemos la capacitación como parte del servicio de suministro.',
      },
    ],

    waMessage: 'Hola, necesito cotizar equipos de respiración autónoma (ERA/SCBA) para bomberos o brigada. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas ERA para tu cuerpo de bomberos o brigada?',
    ctaBody: 'Cuéntanos el número de equipos, el tipo de operaciones y la duración de cilindro que necesitas. Te cotizamos con documentación NFPA y capacitación incluida.',
  },

  // ──────────────────────────────────────────────────────────
  // 3. HERRAMIENTAS DE RESCATE HIDRÁULICO
  // ──────────────────────────────────────────────────────────
  'rescate-hidraulico': {
    metaTitle: 'Herramientas de Rescate Hidráulico — Quijadas de Vida | Proyecto Red',
    metaDesc: 'Quijadas de vida, cortadoras y esparcidores hidráulicos para rescate vehicular. Distribuidores Hurst/Holmatro. Para cuerpos de bomberos y brigadas en CDMX.',

    badge: 'Rescate vehicular · Hidráulico · Hurst · Holmatro',
    heroTitle: 'Herramientas de',
    heroAccent: 'Rescate Hidráulico',
    img: '/imagenes/equipo-bomberos/herramientas-rescate-bombero.avif',
    heroSubtitle: 'Las herramientas de rescate hidráulico son el estándar mundial para extricación de víctimas en accidentes vehiculares. Quijadas de vida, cortadoras y esparcidores operados por unidad de poder hidráulica para acceso y liberación en condiciones extremas.',
    heroDescRight: [
      'Un sistema de rescate hidráulico completo incluye una unidad de poder (a gasolina o eléctrica), mangueras de alta presión y las herramientas de trabajo: cortadora para vigas y postes, esparcidor para abrir puertas y columnas, quijadas combinadas (corta/esparce), y herramientas de extensión lineal para levantamiento de estructuras.',
      'En Proyecto Red distribuimos equipos de las marcas líderes en rescate técnico. Cada equipo se entrega con manual de operación en español, accesorios de inicio y capacitación de uso básico. Gestionamos el mantenimiento preventivo y las refacciones originales.',
    ],
variantesEyebrow:    'Sistemas disponibles',
    variantesTitleLine1: 'Selecciona el sistema de',
    variantesTitleLine2: 'rescate para tu operación',
    variantesBodyPara:   'Todos los sistemas se entregan con manual de operación en español, capacitación de uso básico incluida y soporte para mantenimiento preventivo y refacciones originales.',
    variantes: [
      {
        nombre: 'Sistema hidráulico a gasolina — Kit completo',
        badge:  'Hidráulico · Gas · Kit completo',
        desc:   'Unidad de poder a gasolina (15–20 CV) + cortadora para columnas HLE + esparcidor 500 mm + ram telescópico + mangueras 10 m. El estándar mundial para extricación vehicular. Máxima fuerza para vehículos de cualquier generación.',
        specs:  'UP gasolina · Corte: 400–600 kN · Apertura: 500 mm · HLE',
        waText: 'Hola, necesito cotizar un sistema completo de rescate hidráulico a gasolina (cortadora + esparcidor + ram). ¿Pueden asesorarme?',
      },
      {
        nombre: 'Sistema eléctrico eDRAULIC — Sin cables',
        badge:  'Batería · IP67 · Sin gases',
        desc:   'Cortadora eléctrica + esparcidor o quijadas con batería de litio 52V intercambiable. Sin unidad de poder, sin tender mangueras. Despliegue en menos de 90 segundos. Apto en espacios confinados, zonas eléctricas y áreas techadas sin ventilación.',
        specs:  'Batería 52V / 900 Wh · Fuerza: 60–80 kN · IP67 · UHSS',
        waText: 'Hola, necesito cotizar herramientas de rescate eléctrico (eDRAULIC / batería). ¿Pueden asesorarme?',
      },
      {
        nombre: 'Quijadas combinadas (combi-tool)',
        badge:  'Combi-tool · Corta + Esparce',
        desc:   'Una sola herramienta que corta y esparce. La solución más eficiente para equipos con un operador o para complementar un sistema existente. Disponible en versión hidráulica o eléctrica. Compatible con acero HLE y UHSS de vehículos modernos.',
        specs:  'Doble función: corta + esparce · HLE/UHSS · Gas o eléctrica',
        waText: 'Hola, necesito cotizar quijadas combinadas (combi-tool) para rescate vehicular. ¿Pueden asesorarme?',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Componentes del sistema de',
      titleLine2: 'rescate hidráulico',
      desc: 'Un sistema completo de rescate hidráulico se compone de varias herramientas especializadas. Conocer cada una permite seleccionar el sistema correcto para el tipo de rescate predominante.',
      items: [
        {
          title: 'Cortadora hidráulica — para columnas y vigas',
          desc: 'Diseñada para cortar metal estructural de alto límite elástico (HLE): columnas B y C del vehículo, vigas del techo, pedal y volante. La fuerza de corte típica es de 400–600 kN. Las cuchillas intercambiables son el componente más reemplazado.',
        },
        {
          title: 'Esparcidor hidráulico — para puertas y deformaciones',
          desc: 'Abre puertas bloqueadas, crea espacio en el tablero y mueve columnas deformadas. La apertura máxima varía de 500 a 750 mm según el modelo. Se usa para crear el espacio inicial de acceso a la víctima.',
        },
        {
          title: 'Quijadas combinadas (combi-tool) — corta y esparce',
          desc: 'Una sola herramienta que combina las funciones de cortadora y esparcidor. Más ágil para operar en vehículos modernos con acero de alta resistencia. La solución más eficiente para equipos que no tienen dos operadores de herramienta simultáneos.',
        },
        {
          title: 'Herramientas de extensión lineal (rams)',
          desc: 'Cilindros hidráulicos de extensión para levantar tableros, mover columnas hacia adelante o abrir espacio longitudinal. Los modelos telescópicos permiten mayor alcance en espacios reducidos. Fuerza de empuje típica: 80–120 kN.',
        },
        {
          title: 'Unidad de poder a gasolina o eléctrica',
          desc: 'La unidad de poder genera el caudal y la presión hidráulica para todas las herramientas. Las unidades a gasolina (15–20 CV) son autónomas y muy utilizadas. Las unidades eléctricas (de batería de litio) eliminan los gases de escape y son más silenciosas, ideales para espacios confinados.',
        },
        {
          title: 'Mangueras de alta presión y conectores universales',
          desc: 'Las mangueras a 700 bar transmiten el fluido hidráulico entre la unidad de poder y las herramientas. Los conectores tipo Snap-Tite o Hansen permiten cambio de herramienta en 5 segundos sin pérdida de fluido. La longitud estándar es 10 metros.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Sectores que atendemos',
      titleLine1: '¿Para qué tipo de rescate',
      titleLine2: 'son estas herramientas?',
      desc: 'Las herramientas de rescate hidráulico son el equipo de extricación estándar para todo cuerpo de emergencia. Estos son los principales tipos de rescate que atienden.',
      usos: [
        { label: 'Accidentes vehiculares en carretera',  desc: 'El escenario más común. Vehículos chocados con puertas bloqueadas, tablero desplazado o víctima atrapada bajo el volante. El sistema completo (cortadora + esparcidor + ram) es el estándar mínimo para este tipo de rescate.' },
        { label: 'Volcaduras de camión y transporte',    desc: 'Cabinas aplastadas de camiones de carga, autobuses volcados y trailers requieren herramientas de mayor fuerza y extensión. Los rams de gran alcance son fundamentales para este tipo de rescate.' },
        { label: 'Derrumbes y estructuras colapsadas',  desc: 'Para levantamiento de lozas de concreto, desplazamiento de vigas metálicas y creación de túneles de rescate. Los rams hidráulicos de alta tonelada y los cojines neumáticos se usan en conjunto para este tipo de rescate.' },
        { label: 'Trenes y rescate ferroviario',         desc: 'Los vehículos ferroviarios requieren herramientas de mayor fuerza de corte por el grosor del acero estructural. Los cuerpos de emergencia que operan en zonas con vías de tren deben tener esta capacidad.' },
        { label: 'Aeropuertos — rescate en aeronaves',   desc: 'Los cuerpos ARFF usan herramientas hidráulicas específicas para perforación y apertura de estructuras de aeronave. Existen accesorios especializados para el acceso a fuselajes y escotillas de emergencia.' },
        { label: 'Brigadas industriales — maquinaria',   desc: 'Para liberación de trabajadores atrapados en prensas, tornos, transportadores y maquinaria industrial. Las herramientas de esparcimiento y extensión son las más utilizadas en rescates industriales.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Cuál es la diferencia entre una herramienta convencional y una de alto límite elástico (HLE)?',
        answer: 'Los vehículos modernos a partir del año 2010 usan acero de alta resistencia (HLE o UHSS) en las columnas B y C para resistir impactos laterales. Este acero tiene una resistencia 3–4 veces mayor al acero convencional. Las cortadoras convencionales no pueden cortar este material o dañan las cuchillas al intentarlo. Es fundamental verificar que las herramientas estén clasificadas para acero UHSS antes de adquirirlas.',
      },
      {
        question: '¿Qué marca de herramientas recomiendan?',
        answer: 'Las marcas líderes mundiales en rescate hidráulico son Hurst (EE.UU.), Holmatro (Países Bajos) y Weber Rescue (Alemania). Todas tienen distribución en México y disponibilidad de refacciones. Hurst es la marca más usada en cuerpos de bomberos de EE.UU. y América Latina. Holmatro es frecuente en cuerpos europeos y empresas internacionales. Asesoramos la selección según el presupuesto y tipo de operaciones.',
      },
      {
        question: '¿Las herramientas hidráulicas requieren mantenimiento especial?',
        answer: 'Sí. El mantenimiento preventivo semestral incluye revisión del nivel y calidad del aceite hidráulico, inspección de mangueras y conectores, verificación de presión de la unidad de poder, afilado o reemplazo de cuchillas y prueba funcional completa del sistema. El mantenimiento correctivo después de cada uso intensivo es también obligatorio. Nosotros realizamos el servicio en las instalaciones del cuerpo.',
      },
      {
        question: '¿Pueden dar capacitación en el uso de las herramientas?',
        answer: 'Sí. La capacitación de uso básico está incluida en la entrega del equipo. Para capacitación avanzada (técnicas de extricación en vehículos modernos HLE, rescate en volcadura de camión, manejo de la unidad de poder), ofrecemos talleres prácticos con instructores certificados. Las constancias DC-3 son válidas ante STPS.',
      },
    ],

    waMessage: 'Hola, necesito cotizar herramientas de rescate hidráulico (quijadas/cortadoras). ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas herramientas de rescate hidráulico?',
    ctaBody: 'Cuéntanos el tipo de rescate predominante en tu zona y el presupuesto aproximado. Te proponemos el sistema completo con la marca más adecuada para tu operación.',
  },

  // ──────────────────────────────────────────────────────────
  // 4. HERRAMIENTAS DE RESCATE NEUMÁTICO
  // ──────────────────────────────────────────────────────────
  'rescate-neumatico': {
    metaTitle: 'Herramientas de Rescate Neumático — Cojines de Elevación | Proyecto Red',
    metaDesc: 'Cojines de elevación neumáticos, cuñas y herramientas de expansión para rescate bajo estructuras colapsadas. Para cuerpos de bomberos y brigadas de rescate en México.',

    badge: 'Cojines neumáticos · Rescate estructural · USAR',
    heroTitle: 'Herramientas de',
    heroAccent: 'Rescate Neumático',
    heroSubtitle: 'Los cojines de elevación neumáticos son la herramienta estándar para levantar y desplazar objetos pesados (losas, vehículos, maquinaria) en operaciones de rescate bajo estructuras colapsadas o accidentes con aplastamiento. Operación con aire comprimido, sin riesgo de cortocircuito.',
    heroDescRight: [
      'El principio de los cojines neumáticos es sencillo pero poderoso: un cojín de neopreno reforzado se introduce en un espacio mínimo de 15 mm y al inflarse con aire comprimido (8–12 bar) puede levantar hasta 70 toneladas. Son las herramientas de elección cuando el espacio es insuficiente para las herramientas hidráulicas o cuando hay riesgo de chispa o corriente eléctrica.',
      'En Proyecto Red suministramos sistemas completos de cojines neumáticos en capacidades desde 8 hasta 70 toneladas, incluyendo reguladores de presión, mangueras y controladores. Para el rescate completo también suministramos cuñas, apuntaladores y herramientas manuales de apertura para complementar el sistema.',
    ],

    variantesEyebrow: 'Equipos disponibles',
    variantesTitleLine1: 'Sistemas de rescate',
    variantesTitleLine2: 'neumático según capacidad',
    variantesBodyPara: 'Cada variante incluye cojines de neopreno reforzado, regulador de presión, controlador con panel dual y mangueras de conexión. Los kits completos incluyen cuñas, apuntaladores y herramientas manuales. Operación con aire comprimido de 8–12 bar sin riesgo eléctrico.',
    variantes: [
      {
        nombre: 'Cojín de Levantamiento Alta Presión (1 bar)',
        badge: 'Estándar',
        desc: 'Cojines de baja presión (0.5–1 bar) para cargas livianas o sensibles. Uso en rescate de personas aplastadas donde se requiere control progresivo sin golpes de presión. Operación con regulador de baja presión incorporado.',
        specs: 'Capacidad 8–15 T · Presión 0.5–1 bar · Neopreno reforzado · Tamaño 30×30 cm',
        waText: 'Hola, necesito cotizar cojines neumáticos de baja presión para rescate sensible. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Cojín de Levantamiento Baja Presión (0.5 bar)',
        badge: 'Rescate sensible',
        desc: 'Para operaciones donde la víctima está en contacto directo con la carga y se requiere máximo control de velocidad de elevación. Presión ultrabaja para levantar estructuras frágiles sin provocar movimientos bruscos que amplifiquen el daño.',
        specs: 'Capacidad 5–10 T · Presión 0.5 bar · Control lento y progresivo · 30×30 cm',
        waText: 'Hola, necesito cojines de ultrabajaión para rescate con víctima debajo. ¿Pueden cotizar?',
      },
      {
        nombre: 'Set de Cojines Escalonados',
        badge: 'Versátil',
        desc: 'Combinación de tres cojines de diferentes capacidades (20T, 40T, 70T) para cubrir la mayoría de operaciones de rescate. Permite seleccionar el cojín adecuado según la carga sin exceso de potencia que reduce control.',
        specs: 'Cojines 20T + 40T + 70T · Presión 8–12 bar · Controlador triple · Mangueras incluidas',
        waText: 'Hola, necesito un set de cojines neumáticos escalonados para mi cuerpo. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Equipo de Calzado Neumático',
        badge: 'Estabilización',
        desc: 'Cojines de gran formato (60×60 a 90×90 cm) para estabilización lateral y vertical de cargas masivas. Se usan bajo vehículos volcados o entre fragmentos estructurales para asegurar que no se desmoronen durante rescate prolongado.',
        specs: 'Cojín 60×60 o 90×90 cm · Capacidad 40–70 T · Presión 8–12 bar · Apuntalador incluido',
        waText: 'Hola, necesito cojines de estabilización para rescate de vehículos pesados. ¿Pueden cotizar?',
      },
      {
        nombre: 'Kit Neumático Completo (Cojines + Regulador + Mangueras)',
        badge: 'Kit completo',
        desc: 'Sistema integrado de dos cojines de 40 toneladas, regulador de presión de doble panel, 20 metros de manguera de conexión, cuñas de polipropileno y herramientas de apertura manual. Listo para operación inmediata en el vehículo de rescate.',
        specs: 'Cojines 2×40T · Regulador dual · Manguera 20m · Cuñas · Herramientas · Bolsa de transporte',
        waText: 'Hola, necesito un kit completo de rescate neumático para mi brigada. ¿Pueden asesorarme?',
      },
    ],

caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Componentes y características',
      titleLine2: 'del sistema neumático',
      desc: 'Un sistema de rescate neumático se compone de cojines de diferentes capacidades, reguladores de presión, controladores y accesorios complementarios. Conoce cada elemento para seleccionar el sistema correcto.',
      items: [
        {
          title: 'Cojines de neopreno reforzado con fibra de acero',
          desc: 'Los cojines de alta presión (hasta 12 bar) tienen refuerzo de fibra de acero vulcanizado que les permite soportar cargas puntuales y superficies irregulares. Disponibles en tamaños de 30×30 cm hasta 90×90 cm. La capacidad aumenta con el tamaño del cojín.',
        },
        {
          title: 'Elevación en altura: cojines apilados',
          desc: 'Se pueden apilar hasta dos cojines para mayor altura de levante. La norma general es que al apilar dos cojines, la capacidad de levante se reduce a la del cojín inferior. Los cojines Vetter o Paratech permiten hasta 200 mm de elevación con dos unidades apiladas.',
        },
        {
          title: 'Regulador de presión y controlador con panel dual',
          desc: 'El controlador (panel de válvulas) permite inflar/desinflar cada cojín de manera independiente o simultánea. Los controladores de alta calidad tienen válvulas de anti-retorno que mantienen la presión si se desconecta la fuente de aire. Los paneles duales permiten controlar dos cojines simultáneamente.',
        },
        {
          title: 'Fuente de aire: compresora, botella o conexión ERA',
          desc: 'Los cojines requieren una fuente de aire a 8–12 bar. Se puede usar la compresora del vehículo de rescate, un cilindro de SCBA vacío reconvertido para uso de herramientas, o una botella de aire dedicada de 50 litros. La selección depende de la disponibilidad en el campo.',
        },
        {
          title: 'Cuñas y calzos de madera o polipropileno',
          desc: 'Las cuñas se usan para asegurar y apuntalar la carga mientras el cojín mantiene el espacio. Nunca operar un cojín inflado sin calzos de seguridad debajo de la carga — si el cojín falla, la carga cae. Los calzos de polipropileno son más resistentes que los de madera y no se deterioran con la humedad.',
        },
        {
          title: 'Herramientas manuales de rescate: palanquetas, cuñas de apertura',
          desc: 'Palanquetas de titanio o acero de alto carbono para apertura manual de huecos antes de introducir el cojín. Los kits de rescate técnico incluyen también sierras de corte de concreto, puntas de cincel y herramientas de percusión para desescombro.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Aplicaciones operativas',
      titleLine1: '¿Cuándo usar herramientas',
      titleLine2: 'de rescate neumático?',
      desc: 'Los cojines neumáticos son la herramienta correcta cuando el espacio es mínimo, la carga es masiva o existe riesgo eléctrico. Estos son los escenarios de uso más frecuentes.',
      usos: [
        { label: 'Derrumbes y estructuras colapsadas',    desc: 'Levantamiento de losas de concreto, trabes y columnas caídas para acceder a víctimas atrapadas. Los cojines de alta capacidad (40–70 T) son fundamentales en rescate estructural.' },
        { label: 'Vehículos pesados volcados',            desc: 'Para estabilizar o levantar camiones de carga, autobuses y maquinaria volcada. Los cojines de gran formato bajo el chasis del vehículo permiten creación de espacio sin riesgo de movimiento brusco.' },
        { label: 'Aplastamiento por maquinaria industrial', desc: 'En accidentes industriales donde un trabajador queda atrapado bajo maquinaria o producto almacenado, los cojines permiten un levantamiento controlado y progresivo sin riesgo de daño adicional a la víctima.' },
        { label: 'Zonas con riesgo eléctrico',            desc: 'Donde no se pueden usar herramientas hidráulicas o eléctricas por riesgo de cortocircuito o electrocución, el sistema neumático con mangueras de hule y cojines de neopreno es la solución segura.' },
        { label: 'Rescate ferroviario y vehículos grandes', desc: 'Los vagones de tren, camiones articulados y vehículos de gran tonelaje requieren cojines de alta capacidad. El acceso por debajo del vehículo generalmente es posible con mínimo espacio.' },
        { label: 'Rescate en espacios confinados',        desc: 'En túneles, alcantarillas y ductos donde las herramientas hidráulicas no pueden operar por falta de espacio y personal, los cojines compactos de alta presión son la solución más eficiente.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Cuánta capacidad de levante necesito para mi cuerpo?',
        answer: 'Para accidentes vehiculares en carretera (automóviles y camionetas), un cojín de 20 toneladas es generalmente suficiente. Para camiones de carga y autobuses se recomienda un cojín de 40 toneladas. Para derrumbes y estructuras colapsadas, la combinación de dos cojines de 40–70 toneladas da la versatilidad necesaria. La regla es tener exceso de capacidad — un cojín de 40 T usándose para levantar 5 T es perfectamente correcto.',
      },
      {
        question: '¿Los cojines neumáticos pueden romperse?',
        answer: 'En condiciones normales de uso, los cojines de neopreno reforzado son muy resistentes. El riesgo principal es la perforación por objetos metálicos punzantes (pernos, varillas) en el espacio donde se introduce el cojín. Por eso siempre se debe limpiar el área de introducción antes de insertar el cojín. Los modelos de alta gama tienen recubrimiento externo de neopreno grueso que resiste los bordes cortantes.',
      },
      {
        question: '¿Se pueden usar cojines neumáticos y herramientas hidráulicas juntos?',
        answer: 'Sí, y frecuentemente se hace. Los cojines levantan la carga inicial y las herramientas de extensión hidráulica mantienen el espacio mientras las cuñas se colocan debajo. Esta combinación de técnicas (neumático + hidráulico + calzos) es el enfoque estándar del rescate técnico de nivel avanzado.',
      },
    ],

    waMessage: 'Hola, necesito cotizar herramientas de rescate neumático (cojines de elevación). ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas cojines neumáticos para rescate?',
    ctaBody: 'Cuéntanos el tipo de rescate más frecuente en tu zona y el peso máximo de carga que necesitas levantar. Te recomendamos el sistema correcto.',
  },

  // ──────────────────────────────────────────────────────────
  // 5. HERRAMIENTAS DE RESCATE ELÉCTRICO (BATERÍA)
  // ──────────────────────────────────────────────────────────
  'rescate-electrico': {
    metaTitle: 'Herramientas de Rescate Eléctrico — Batería sin Cables | Proyecto Red',
    metaDesc: 'Herramientas de extricación de batería (cortadoras, esparcidores, quijadas). Sin unidad de poder, sin cables, sin gases. Para cuerpos de bomberos y brigadas. CDMX.',

    badge: 'Batería · Sin cables · Sin gases · Rescate vehicular',
    heroTitle: 'Herramientas de',
    heroAccent: 'Rescate Eléctrico',
    heroSubtitle: 'Las herramientas de rescate eléctrico operan con baterías de litio de alta densidad, eliminando la unidad de poder, los cables y los gases de escape. Igual fuerza que las herramientas hidráulicas convencionales con mayor agilidad, silencio y facilidad de despliegue.',
    heroDescRight: [
      'La última generación de herramientas de extricación eléctrica utiliza motores de alto rendimiento con baterías de iones de litio intercambiables en segundos. Un operador puede llevar una cortadora o quijadas completas sin cables ni mangueras, desplegándose en cualquier ángulo y posición sin restricción de longitud de manguera.',
      'En Proyecto Red distribuimos herramientas de rescate eléctrico de las marcas líderes. La compatibilidad de baterías entre herramientas del mismo fabricante permite que una sola batería cargada opere cortadora, esparcidor y quijadas de manera secuencial.',
    ],

    variantesEyebrow: 'Herramientas disponibles',
    variantesTitleLine1: 'Tipos de herramientas',
    variantesTitleLine2: 'de rescate eléctrico',
    variantesBodyPara: 'Todas operan con baterías de litio 52V intercambiables en segundos. Fuerzas comparables a sistemas hidráulicos con ventajas de despliegue rápido, operación silenciosa y cero emisiones. Certificadas para acero UHSS de vehículos 2015+.',
    variantes: [
      {
        nombre: 'Separador Eléctrico a Batería',
        badge: 'Portátil',
        desc: 'Herramienta para separar, esparcir o forzar. Abre puertas de vehículos, separa columnas deterioradas y crea espacio para rescate. Peso 7–10 kg, operación con una sola mano. Fuerza de 60–80 kN comparable a quijadas hidráulicas.',
        specs: 'Batería 52V / 900 Wh · Fuerza 60–80 kN · Peso 8 kg · Despliegue 90 seg · Ciclos 40–60/carga',
        waText: 'Hola, necesito cotizar un separador eléctrico de rescate para mi cuerpo. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Cortador Eléctrico a Batería',
        badge: 'Hilos y tubos',
        desc: 'Corta acero estructural, vigas de columnas y carrocería de vehículos con precisión. Especialmente efectivo en vehículos modernos con UHSS. Despliegue en cualquier ángulo sin limitación de manguera. Fuerza de corte 400–500 kN.',
        specs: 'Batería 52V / 900 Wh · Fuerza 400–500 kN · Peso 12 kg · Ciclos 2–3 rescates/carga',
        waText: 'Hola, necesito cotizar un cortador eléctrico para rescate vehicular. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Herramienta Combinada (Corte + Separación)',
        badge: 'Más versátil',
        desc: 'Única herramienta que combina corte y separación en una plataforma. Ideal para brigadas con presupuesto limitado que requieren versatilidad sin cargar dos herramientas separadas. Permite completar rescates complejos con un solo equipo.',
        specs: 'Batería 52V · Funciones corte + separación · Peso 11 kg · Versátil · Compatible con acero UHSS',
        waText: 'Hola, necesito una herramienta combinada de rescate (corte+separación) eléctrica. ¿Pueden cotizar?',
      },
      {
        nombre: 'Cilindro de Extensión Eléctrico',
        badge: 'Levante modular',
        desc: 'Extensión de cilindro hidráulico que puede operarse con energía eléctrica de la batería. Para aplicaciones donde se necesita levante progresivo sin riesgo de movimiento brusco. Se apila con otros cilindros para mayor altura de levante.',
        specs: 'Batería compatible 52V · Velocidad 50 mm/s · Carga hasta 80 T · Modular · Peso 9 kg',
        waText: 'Hola, necesito un cilindro de extensión eléctrico para rescate. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Kit de Rescate Eléctrico Completo',
        badge: 'Kit completo',
        desc: 'Sistema integrado con cortadora, esparcidor, dos baterías intercambiables, cargador rápido a bordo y bolsa de transporte. Listo para operación en vehículos de rescate de cuerpos municipales e industriales.',
        specs: 'Cortadora + esparcidor · 2 baterías 52V · Cargador rápido 30 min · Bolsa + manuales · Despliegue 90 seg',
        waText: 'Hola, necesito cotizar un kit completo de rescate eléctrico para mi brigada. ¿Pueden asesorarme?',
      },
    ],

caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Ventajas y características de las',
      titleLine2: 'herramientas eléctricas de rescate',
      desc: 'Las herramientas eléctricas de rescate no son simplemente una versión inalámbrica de las hidráulicas — tienen ventajas operativas únicas que las hacen superiores en escenarios específicos.',
      items: [
        {
          title: 'Batería de litio 52V / 900–1000 Wh',
          desc: 'Las baterías de litio de alta densidad energética ofrecen suficiente capacidad para 40–60 ciclos de operación completos por carga. El indicador de nivel permite al operador saber el estado de la batería antes de desplegar. Las baterías se cargan en 30–45 minutos con cargador rápido.',
        },
        {
          title: 'Motor eléctrico de alto par — misma fuerza que el hidráulico',
          desc: 'Los motores sin escobillas (brushless) de última generación ofrecen fuerzas de apertura de 60–80 kN en esparcidores y fuerzas de corte de 400–500 kN en cortadoras. Comparables a los equipos hidráulicos de gama media-alta en el 95% de los escenarios de extricación.',
        },
        {
          title: 'Operación silenciosa — comunicación efectiva',
          desc: 'Sin el ruido del motor a gasolina de la unidad de poder, el equipo de rescate puede comunicarse sin interrupciones durante la extricación. Esto mejora la coordinación con la víctima y reduce el error en el procedimiento.',
        },
        {
          title: 'Sin gases de escape — apto en espacios confinados',
          desc: 'En vehículos volcados en túneles, estacionamientos subterráneos o alcantarillas, los gases de una unidad de poder a gasolina representan un riesgo adicional. Las herramientas eléctricas eliminan este riesgo completamente.',
        },
        {
          title: 'Despliegue en 90 segundos desde el vehículo',
          desc: 'Sin mangueras que tender ni unidad de poder que arrancar, el rescatista puede llegar al vehículo accidentado con la herramienta lista para operar en menos de 90 segundos desde que el camión de rescate se detiene. Tiempo crítico en accidentes graves.',
        },
        {
          title: 'Compatible con accero HLE y UHSS',
          desc: 'Las versiones de alta performance están certificadas para cortar acero de límite elástico ultra alto (UHSS) presente en vehículos desde 2015+. Fundamental para cuerpos de rescate que atienden carreteras de alta velocidad con vehículos modernos.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Aplicaciones operativas',
      titleLine1: '¿Cuándo elegir herramientas',
      titleLine2: 'eléctricas sobre hidráulicas?',
      desc: 'Las herramientas eléctricas son superiores en agilidad y despliegue. Estos son los escenarios donde marcan la mayor diferencia operativa.',
      usos: [
        { label: 'Accidentes en carretera de alto flujo',    desc: 'Donde el tiempo de primera apertura es crítico. Sin tender mangueras ni arrancar unidad de poder, el rescatista llega al vehículo con la herramienta activa en menos de 2 minutos.' },
        { label: 'Rescate en espacios confinados y túneles', desc: 'Estacionamientos subterráneos, túneles y zonas techadas donde los gases del motor a gasolina representan un riesgo adicional para la víctima y el equipo de rescate.' },
        { label: 'Accidentes en zona urbana congestionada',  desc: 'Donde el camión de rescate no puede acercarse al vehículo accidentado. El rescatista lleva la herramienta eléctrica en la mano hasta el punto de trabajo sin limitación de longitud de manguera.' },
        { label: 'Primer respondedor (FR) — un solo operador', desc: 'Las herramientas eléctricas permiten que un solo rescatista opere cortadora o esparcidor sin asistente para el manejo de mangueras. Ideal para unidades de primera respuesta con tripulación reducida.' },
        { label: 'Rescate en agua o zona de inundación',     desc: 'Las herramientas eléctricas modernas tienen protección IP67 (sumergibles a 1 metro). Para rescate en vehículos en cauces o zonas inundadas, son más seguras que el sistema hidráulico con mangueras.' },
        { label: 'Brigadas industriales con alta movilidad',  desc: 'Brigadas que operan en plantas con múltiples edificios y distancias largas entre el punto de estacionamiento y el riesgo. La herramienta eléctrica se lleva en el equipo personal sin dependencia de vehículo.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Las herramientas eléctricas reemplazan completamente al sistema hidráulico?',
        answer: 'En la mayoría de los escenarios de extricación vehicular, sí. Sin embargo, para operaciones de rescate estructural con cargas muy elevadas (más de 100 kN de extensión), los rams hidráulicos de gran tonelaje todavía son necesarios. La tendencia mundial es hacia sistemas eléctricos para extricación y sistemas neumáticos para rescate estructural, reservando el hidráulico para aplicaciones industriales de alta carga.',
      },
      {
        question: '¿Cuántos ciclos da una batería?',
        answer: 'En condiciones de extricación estándar (auto compacto moderno), una batería completamente cargada permite completar 2–3 rescates completos. Para cuerpos con alta actividad, se recomienda tener al menos dos baterías por herramienta, con una siempre en el cargador rápido a bordo del vehículo.',
      },
      {
        question: '¿Son compatibles las baterías entre diferentes herramientas?',
        answer: 'Dentro de la misma plataforma del fabricante, sí. Por ejemplo, Hurst eDRAULIC, Holmatro CORE o Weber Rescue TEK tienen plataformas de batería compatibles entre sus cortadoras, esparcidores y quijadas. Esto reduce el número de baterías de reserva necesarias. La compatibilidad entre marcas no existe.',
      },
    ],

    waMessage: 'Hola, necesito cotizar herramientas de rescate eléctrico (batería). ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas herramientas de rescate eléctrico para tu cuerpo?',
    ctaBody: 'Cuéntanos el tipo de rescate predominante y si ya tienen sistema hidráulico que quieran complementar. Te proponemos la configuración correcta.',
  },

  // ──────────────────────────────────────────────────────────
  // 6. ARNESES Y RESCATE EN ALTURA
  // ──────────────────────────────────────────────────────────
  'arneses-rescate-altura': {
    metaTitle: 'Arneses y Equipos de Rescate en Altura NFPA 1983 | Proyecto Red',
    metaDesc: 'Arneses completos, líneas de vida, descensores y bloqueadores para rescate urbano en altura (USAR). Certificados NFPA 1983 y EN 1891. Para bomberos y brigadas en México.',

    badge: 'NFPA 1983 · EN 1891 · Rescate en altura · USAR',
    heroTitle: 'Arneses y',
    heroAccent: 'Rescate en Altura',
    img: '/imagenes/equipo-bomberos/arneses-rescate-altura.avif',
    heroSubtitle: 'Los sistemas de rescate en altura incluyen arneses, cuerdas técnicas, descensores, bloqueadores y sistemas de polipasto para operaciones de búsqueda y rescate urbano (USAR), rescate en acantilados, pozos y espacios confinados verticales.',
    heroDescRight: [
      'El rescate en altura es una de las disciplinas técnicas más demandantes para los cuerpos de emergencia. Involucra sistemas de cuerdas de dos vías (sistema principal + línea de seguridad), con arneses de cuerpo completo certificados NFPA 1983 y equipo de control de descenso y ascenso capaz de operar con víctimas de hasta 150 kg.',
      'En Proyecto Red suministramos sistemas de rescate en altura completos para cuerpos de bomberos, brigadas USAR, Protección Civil y brigadas industriales con trabajo en alturas. Incluimos capacitación en técnicas básicas y avanzadas de rescate en cuerda.',
    ],
variantesEyebrow:    'Opciones disponibles',
    variantesTitleLine1: 'Selecciona el nivel',
    variantesTitleLine2: 'de sistema que necesitas',
    variantesBodyPara:   'Todos los equipos están certificados NFPA 1983 y/o EN 1891. Incluimos capacitación en técnicas básicas de descenso y anclaje. Para operaciones de rescate real se recomienda la certificación NFPA 1006 Nivel I.',
    variantes: [
      {
        nombre: 'Arnés de cuerpo completo NFPA 1983 Clase II',
        badge:  'Clase II · NFPA 1983',
        desc:   'Arnés de cuerpo completo para rescate en altura con puntos de conexión dorsal y frontal certificados a 22 kN. Ajuste rápido con una sola mano. Para rescatistas y para asegurar víctimas durante el rescate. Tallas S/M y L/XL.',
        specs:  'Clase: II · Puntos: dorsal + frontal · 22 kN · Tallas: S/M – L/XL',
        waText: 'Hola, necesito cotizar arneses de rescate en altura NFPA 1983 Clase II. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Kit rescate en altura — Sistema de dos cuerdas 50 m',
        badge:  'Kit completo · 50 m',
        desc:   'Arnés Clase III + 2 cuerdas estáticas de kernmantle 10.5 mm × 50 m + descensor de auto-bloqueo I\'D + bloqueadores Jumar + poleas de redireccionamiento + mosquetones HMS. Sistema listo para despliegue en rescate de fachadas, pozos y USAR.',
        specs:  '2 cuerdas 50 m · NFPA 1983 · EN 1891 · Bolsa organizada',
        waText: 'Hola, necesito cotizar un kit completo de rescate en altura (arnés + cuerdas + descensor + bloqueadores). ¿Pueden asesorarme?',
      },
      {
        nombre: 'Sistema de polipasto 6:1 — Elevación de víctimas',
        badge:  'Polipasto 6:1 · 150 kg',
        desc:   'Sistema de ventaja mecánica 6:1 para elevación de víctimas hasta 150 kg. Dos rescatistas pueden elevar la carga con esfuerzo moderado. Incluye cuerdas técnicas, poleas dobles, bloqueadores Prusik y mosquetones certificados. Peso total del kit: menos de 5 kg.',
        specs:  'Razón mecánica: 6:1 · Carga máx: 150 kg · Peso kit: < 5 kg',
        waText: 'Hola, necesito cotizar un sistema de polipasto para rescate en altura (elevación de víctimas). ¿Pueden asesorarme?',
      },
    ],

    caracteristicas: {
      eyebrow: 'Componentes del sistema',
      titleLine1: 'Equipos para rescate',
      titleLine2: 'en altura',
      desc: 'Un sistema de rescate en altura es un conjunto de equipos interdependientes que trabajan juntos. Cada componente debe ser compatible y certificado para garantizar la seguridad del rescatista y la víctima.',
      items: [
        {
          title: 'Arnés de cuerpo completo NFPA 1983 / EN 361',
          desc: 'El arnés distribuye la carga de caída y de suspensión en los músculos principales del cuerpo (glúteos, muslos, hombros). Los arneses NFPA 1983 de uso general tienen una resistencia mínima de 22 kN en los puntos de conexión. Los arneses de uso técnico (rescue harness) tienen puntos de conexión dorsal, frontal y lateral.',
        },
        {
          title: 'Cuerda estática de kernmantle — Ø10 o 11 mm',
          desc: 'Las cuerdas estáticas (baja elongación) son las preferidas para rescate porque transmiten la carga sin absorber energía por estiramiento. Diámetros de 10 o 11 mm para sistemas con personas. NFPA 1983 exige resistencia mínima de 40 kN en cuerda de uso general.',
        },
        {
          title: 'Descensores: RIG, I\'D o Stop',
          desc: 'Los descensores permiten bajar a la víctima o al rescatista de manera controlada con una mano. Los modelos de auto-bloqueo (Petzl I\'D, CAMP Goblin) se detienen automáticamente si el operador suelta el freno, esencial en rescate con victimas inconscientes.',
        },
        {
          title: 'Bloqueadores: ascendedores Jumar, bloqueadores de pecho y de puño',
          desc: 'Los bloqueadores permiten ascender por la cuerda y sirven como componentes de los sistemas de polipasto para elevación de víctimas. Un sistema de polipasto 3:1 o 6:1 permite a dos personas elevar una carga de 150 kg con esfuerzo moderado.',
        },
        {
          title: 'Anclajes: placas multiusos, cintas de anclaje y gazas',
          desc: 'El sistema de anclaje es el componente más crítico del sistema. Debe resistir la carga dinámica de una caída (22 kN) y la carga estática del rescate (10 kN). Los anclajes a estructuras deben calcularse para el escenario de carga más desfavorable.',
        },
        {
          title: 'Bolsa de rescate con kit completo de 50 metros',
          desc: 'Los kits de rescate en altura bien equipados incluyen arneses, cuerdas, descensores, bloqueadores, poleas, mosquetones y accesorios en una bolsa estructurada para despliegue rápido. La organización del kit es tan importante como el equipo mismo.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Aplicaciones operativas',
      titleLine1: '¿Para qué tipo de rescate',
      titleLine2: 'se usa este equipo?',
      desc: 'El equipo de rescate en altura cubre una amplia variedad de escenarios verticales. Estos son los principales tipos de rescate que atendemos.',
      usos: [
        { label: 'Rescate en fachadas y ventanas de edificios', desc: 'Personas colgadas de ventanas, trabajadores de mantenimiento de fachadas o accidentes en construcción. El sistema de dos cuerdas protege tanto al rescatista que desciende como a la víctima que sube.' },
        { label: 'Rescate en pozos y espacios confinados verticales', desc: 'Pozos de agua, cisternas, fosos de elevador y trampas de inspección donde la víctima ha caído y no puede ascender por sus propios medios. El polipasto de rescate es fundamental en este escenario.' },
        { label: 'Búsqueda y rescate urbano (USAR) — derrumbes', desc: 'Rappel de rescatistas hacia zonas de derrumbe, descenso a través de losas fracturadas y trabajo en pendientes de escombros donde se requiere sistema de aseguramiento continuo.' },
        { label: 'Rescate en cañadas y barrancas',               desc: 'En zonas urbanas con barrancas como CDMX, el rescate de personas caídas en pendientes pronunciadas requiere sistemas de cuerdas técnicas y arneses con puntos de conexión lateral.' },
        { label: 'Trabajo en alturas — brigada industrial',       desc: 'Para brigadas industriales con trabajadores en silos, torres, andamios y plataformas elevadas. El sistema de rescate en altura es la contingencia para accidentes donde la persona no puede descender por sus propios medios.' },
        { label: 'Evacuación vertical de edificios',              desc: 'Como contingencia de evacuación cuando las escaleras no son accesibles, algunos cuerpos de bomberos usan sistemas de descenso controlado para evacuación de pisos superiores.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Cuál es la diferencia entre un arnés de trabajo en alturas y uno de rescate?',
        answer: 'Los arneses de trabajo en alturas (NOM-009-STPS o EN 361) están diseñados para detener una caída del trabajador. Los arneses de rescate (NFPA 1983) están diseñados para suspensión prolongada y para ser usados tanto por el rescatista como para asegurar a la víctima. Son más robustos, tienen más puntos de conexión y están certificados para fuerzas de caída mayores. Para operaciones de rescate, siempre NFPA 1983.',
      },
      {
        question: '¿Qué capacitación necesito para usar este equipo?',
        answer: 'Las técnicas básicas de descenso en rappel, anclaje y uso de polipasto se aprenden en 16–24 horas de práctica. Para operaciones de rescate real se recomienda capacitación de Rescate en Cuerdas Nivel I y II (NFPA 1006), que incluye escenarios de rescate con maniquíes y trabajo en altura real. Nosotros ofrecemos capacitación con instructores certificados.',
      },
      {
        question: '¿Cada cuándo deben inspeccionarse los equipos de altura?',
        answer: 'NFPA 1983 y EN 365 exigen inspección visual antes de cada uso y una inspección detallada anual por una persona competente. Las cuerdas deben retirarse si presentan cortes, aplastamientos, manchas de aceite o exposición a ácidos. Los arneses deben retirarse tras una caída arrestada o cada 10 años desde la fecha de fabricación, lo que ocurra primero.',
      },
    ],

    waMessage: 'Hola, necesito cotizar arneses y equipo de rescate en altura NFPA 1983. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas equipos de rescate en altura?',
    ctaBody: 'Cuéntanos el tipo de rescate en altura más frecuente en tu zona y si requieres capacitación. Proponemos el sistema completo con entrenamiento incluido.',
  },

  // ──────────────────────────────────────────────────────────
  // 7. COMPLEMENTOS DE UNIFORME
  // ──────────────────────────────────────────────────────────
  'complementos-uniforme': {
    metaTitle: 'Complementos de Uniforme para Bomberos — Cascos, Guantes, Botas | Proyecto Red',
    metaDesc: 'Cascos estructurales, guantes de combate, botas de intervención y capuchas Nomex para bomberos. Certificados NFPA 1971. Complementa el equipo de tu brigada. CDMX.',

    badge: 'NFPA 1971 · Nomex® · EPP completo',
    heroTitle: 'Complementos de',
    heroAccent: 'Uniforme',
    heroSubtitle: 'Los complementos de uniforme completan el sistema de protección personal del bombero. Cascos estructurales, guantes de combate, botas de intervención y capuchas de Nomex certificados NFPA 1971 son tan críticos como el traje — la cadena de protección es tan fuerte como su eslabón más débil.',
    heroDescRight: [
      'Un traje estructural NFPA 1971 protege el tronco y las extremidades, pero el sistema de protección personal incluye también el casco para proteger la cabeza y el cuello, los guantes para las manos, las botas para los pies y la capucha para el cuello y la cabeza debajo del casco. Todos deben ser certificados NFPA.',
      'En Proyecto Red suministramos cada componente del EPP de bombero de manera individual o como dotación completa. Trabajamos con cuerpos que están equipando a personal nuevo, reemplazando equipo dañado o actualizando la certificación de equipo que ha llegado al final de su vida útil.',
    ],

    variantesEyebrow: 'Componentes individuales',
    variantesTitleLine1: 'Complementos de uniforme',
    variantesTitleLine2: 'según especialidad',
    variantesBodyPara: 'Cada complemento se comercializa de manera independiente para permitir reemplazo progresivo o actualización de certificación. Todos certificados NFPA 1971/1851. Disponibles en tallas S a 4XL y en materiales Nomex®, PBI Matrix y accesorios compatibles.',
    variantes: [
      {
        nombre: 'Bota Estructural NFPA 1971',
        badge: 'NFPA',
        desc: 'Protección para los pies con plantilla reforzada antiperforación, puntera de seguridad, planta resistente al calor por conducción y suela antideslizante. Disponible en goma (intervención general) o piel de alta temperatura (combate intensivo). Tallas 5 a 15 US.',
        specs: 'Material goma o piel · Puntera acero/compuesto · Plantilla antiperforación · Tallas 5–15 · NFPA 1971',
        waText: 'Hola, necesito cotizar botas estructurales NFPA 1971 para bomberos. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Guante Estructural NFPA 1971',
        badge: 'Destreza',
        desc: 'Guantes con capas de protección térmica de Nomex®, palma reforzada de piel de elk o cabra para agarre en superficies calientes, y barrera de humedad. Balance entre protección térmica máxima y destreza táctil para operaciones de rescate. Tallas S a XXL.',
        specs: 'Exterior Nomex® · Palma piel elk/cabra · Barrera humedad · Tallas S–XXL · NFPA 1971',
        waText: 'Hola, necesito cotizar guantes estructurales NFPA 1971 para mi cuerpo. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Capucha Balaclava NFPA 1971',
        badge: 'Más vendido',
        desc: 'Cubre el cuello, mejillas, frente y parte trasera de cabeza — área no cubierta por casco o máscara ERA. Protección térmica de Nomex® idéntica al traje para garantizar protección integral. Se ajusta bajo la barboquera del casco sin crear puntos de presión incómodos.',
        specs: 'Material Nomex III o PBI · Protección cuello/cabeza · Ajustable · NFPA 1971 · Una talla única',
        waText: 'Hola, necesito capuchas Nomex NFPA 1971 para mi brigada. ¿Pueden cotizarme?',
      },
      {
        nombre: 'Casco de Bombero con Visor',
        badge: 'NFPA 1972',
        desc: 'Casco estructural certificado NFPA 1972 con visera integrada, protector de cuello ajustable, cintas reflectantes, soporte para linterna frontal y compatible con máscara ERA. Materiales de polimida o fibra de vidrio. Colores rojo, amarillo y blanco disponibles.',
        specs: 'Material polimida/fibra vidrio · Visera integrada · Cubreoquello · Peso 450–600 g · NFPA 1972',
        waText: 'Hola, necesito cascos de bombero NFPA 1972 con visera para mi cuerpo. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Suspensores y Tirantes para Pantalón',
        badge: 'Confort',
        desc: 'Suspensores elásticos ajustables que distribuyen el peso del pantalón sobre los hombros, evitando presión en la cintura durante operaciones largas. Compatible con cintos de trabajo. Evita que el pantalón se deslice durante rescates dinámicos.',
        specs: 'Material elástico reforzado · Ajustables · Conectores metálicos · Compatibles con cinto trabajo',
        waText: 'Hola, necesito suspensores para pantalones de bombero. ¿Pueden cotizar?',
      },
      {
        nombre: 'Kit Complementos Completo',
        badge: 'Kit completo',
        desc: 'Dotación de todos los complementos para un bombero: casco + capucha + guantes + botas + suspensores + PASS individual. Para incorporación de personal nuevo o actualización de certificación. Documentación NFPA 1971/1851 incluida por elemento.',
        specs: '6 elementos · Casco + capucha + guantes + botas + suspensores + PASS · Tallas a medida · Doc. incluida',
        waText: 'Hola, necesito un kit completo de complementos de uniforme para bombero. ¿Pueden cotizar?',
      },
    ],

caracteristicas: {
      eyebrow: 'Componentes del EPP',
      titleLine1: 'Complementos del uniforme',
      titleLine2: 'de bombero certificados',
      desc: 'Cada elemento del EPP de bombero tiene su propio estándar de certificación. Conocer los requisitos de cada uno es fundamental para seleccionar el equipo correcto.',
      items: [
        {
          title: 'Casco estructural NFPA 1971 — impacto, calor y penetración',
          desc: 'El casco de bombero está certificado para resistir impactos de 1.5 kg desde 1 metro, penetración de objetos puntiagudos, calor radiante y llama directa por 5 segundos. Los modelos modernos tienen visera integrada, protector de cuello (cubre-cuello), linterna frontal y soporte para máscara ERA. Las marcas más usadas son MSA, Cairns, Bullard y Fire-Dex.',
        },
        {
          title: 'Capucha estructural de Nomex® o PBI',
          desc: 'La capucha cubre el cuello y las partes de la cabeza no cubiertas por el casco ni por la máscara facial del ERA. Es el elemento que se olvida con más frecuencia pero que protege una de las zonas más vulnerables al calor. Debe ser del mismo material que el traje (Nomex III o PBI) para garantizar protección consistente en todo el cuerpo.',
        },
        {
          title: 'Guantes de combate NFPA 1971 — protección térmica y destreza',
          desc: 'Los guantes de bombero tienen capas de protección térmica, barrera de humedad y palma reforzada para agarre con superficies calientes. El balance entre protección térmica y destreza táctil es el mayor desafío en su diseño. Los modelos de mayor destreza usan Nomex con palma de piel de elk o cabra curtida.',
        },
        {
          title: 'Botas de intervención — norma EN 15090 o NFPA 1971',
          desc: 'Las botas de bombero protegen contra calor por conducción (planta reforzada), impacto (puntera de acero o compuesto), penetración (plantilla antiperforación) y deslizamiento en superficies mojadas. Los modelos de goma o PVC son para intervención general; los de piel de alta temperatura para combate estructural intensivo.',
        },
        {
          title: 'Sistema PASS individual — alarma de alerta personal',
          desc: 'El dispositivo PASS (Personal Alert Safety System) individual se usa cuando el ERA no lleva PASS integrado. Se fija al arnés del traje y emite alarma si el bombero no se mueve por más de 30 segundos. Es el sistema de búsqueda y rescate del propio bombero en caso de colapso o desorientación en humo.',
        },
        {
          title: 'Linterna de manos libres y cinto de trabajo',
          desc: 'La linterna de casco o de hombro libera las manos del bombero para las operaciones de rescate. El cinto de trabajo (tool belt) permite llevar accesorios como hacha, cuña, destapacañerías y radio sin comprometer la movilidad. Ambos elementos deben ser compatibles con el traje NFPA 1971.',
        },
      ],
    },

    paraQuien: {
      eyebrow: 'Cuándo adquirir complementos',
      titleLine1: '¿Qué situaciones requieren',
      titleLine2: 'nuevos complementos de uniforme?',
      desc: 'Los complementos de uniforme se adquieren en varias situaciones: dotación nueva, reemplazo por vida útil, daño en operaciones o actualización de certificación.',
      usos: [
        { label: 'Incorporación de personal nuevo',           desc: 'Cada nuevo bombero o brigadista requiere dotación completa. La dotación estándar incluye: traje, casco, capucha, guantes, botas y PASS. El costo por persona varía según la calidad del equipo.' },
        { label: 'Reemplazo por vida útil vencida',          desc: 'NFPA 1851 establece la vida útil máxima de cada elemento. Los cascos tienen 10 años; los guantes y botas, 5–7 años dependiendo del uso. El equipo que llega a la vida útil máxima debe reemplazarse aunque esté en buen estado aparente.' },
        { label: 'Daño post-operación',                      desc: 'Equipo dañado en intervenciones de incendio real debe retirarse y reemplazarse. Los criterios de retiro por daño están definidos en NFPA 1851 y aplican a todo elemento del EPP sin excepción.' },
        { label: 'Actualización de certificación',           desc: 'Cuando una nueva versión de NFPA 1971 establece requisitos más estrictos, el equipo anterior puede quedar fuera de certificación. La actualización puede hacerse de manera progresiva, reemplazando primero los elementos más críticos.' },
        { label: 'Brigadas que escalan en nivel de operaciones', desc: 'Una brigada industrial que amplía su alcance de primeros auxilios a combate de incendios requiere actualizar su EPP al nivel de combate estructural. El proceso incluye evaluación del nivel de riesgo y selección del EPP apropiado.' },
        { label: 'Equipamiento para capacitación y entrenamiento', desc: 'Los cuerpos con programa de entrenamiento en quema real necesitan equipo dedicado para prácticas, separado del equipo operacional. Esto extiende la vida útil del equipo principal.' },
      ],
    },

    relatedTitle: 'Otros productos en equipo para bomberos',

    faqItems: [
      {
        question: '¿Puedo comprar guantes o botas sin comprar el traje completo?',
        answer: 'Sí. Suministramos cada elemento del EPP de manera individual. Es frecuente que los cuerpos reemplazando guantes, capuchas o botas por desgaste o por fin de vida útil, sin necesidad de reemplazar el traje completo. La única condición es que el elemento nuevo sea compatible con el sistema de protección general del traje.',
      },
      {
        question: '¿Qué diferencia hay entre botas de goma y botas de piel para bombero?',
        answer: 'Las botas de goma (PVC o nitrilo) son más económicas, más fáciles de limpiar y aptas para intervención general e inundaciones. Las botas de piel de alta temperatura son más ligeras, más confortables para operaciones prolongadas y resisten mejor el calor por conducción en combate estructural intensivo. Para brigadas industriales o cuerpos con intervención estructural frecuente se recomiendan las de piel; para intervención de primera respuesta, las de goma son una buena relación costo/desempeño.',
      },
      {
        question: '¿Cómo saber si el casco o guantes ya llegaron a su vida útil?',
        answer: 'La fecha de fabricación está estampada en el interior de cada elemento (mes/año en el casco, etiqueta interior en guantes). NFPA 1851 establece: cascos = 10 años desde fabricación; guantes y capuchas = 10 años desde fabricación o retiro inmediato si presentan daño visible, decoloración o exposición a ácidos. El programa de inspección anual incluye la revisión de vida útil de todo el EPP.',
      },
      {
        question: '¿Ofrecen dotación completa a precio de cuerpo o brigada?',
        answer: 'Sí. Para pedidos de 5 dotaciones completas o más ofrecemos precios de proyecto y tiempos de entrega preferentes. La dotación completa (traje + casco + capucha + guantes + botas + PASS) se cotiza como paquete con documentación de certificación integrada. Contáctanos con el número de dotaciones y el nivel de calidad requerido.',
      },
    ],

    waMessage: 'Hola, necesito cotizar complementos de uniforme para bomberos (casco, guantes, botas). ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas complementar la dotación de tu cuerpo o brigada?',
    ctaBody: 'Cuéntanos el número de personas, los elementos que necesitas y si requieres dotación completa o solo algunos componentes. Te cotizamos con documentación NFPA.',
  },
}
