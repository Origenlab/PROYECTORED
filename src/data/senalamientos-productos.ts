// ============================================================
// src/data/senalamientos-productos.ts
// Datos completos para las páginas de Nivel 4 — señalamientos de emergencia
// Fuente de verdad para src/pages/senalamientos/[producto].astro
// ============================================================

export interface ProductoSenalamientoData {
  // SEO & meta
  metaTitle: string
  metaDesc: string

  // Hero
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Stats bar (4 ítems)
  stats: { value: string; label: string }[]

  // Sección 1 — Características técnicas
  caracteristicas: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    items: { title: string; desc: string }[]
  }

  // Sección 2 — ¿Dónde se instalan?
  dondeInstalar: {
    eyebrow: string
    titleLine1: string
    titleLine2?: string
    desc: string
    usos: { label: string; desc: string }[]
  }

  // Sección 3 — Otros señalamientos del catálogo
  relatedTitle: string

  // FAQ
  faqItems: { question: string; answer: string }[]

  // CTA Final
  waMessage: string
  ctaTitle: string
  ctaBody: string
}

// ============================================================
// Slugs de todos los productos de la categoría senalamientos
// ============================================================
export const SENALAMIENTO_PRODUCTS = [
  { slug: 'evacuacion',        label: 'Evacuación y Salidas',        badge: 'NOM-003-SEGOB' },
  { slug: 'prohibicion',       label: 'Prohibición',                 badge: 'NOM-026-STPS'  },
  { slug: 'advertencia',       label: 'Advertencia de Riesgo',       badge: 'NOM-026-STPS'  },
  { slug: 'obligacion',        label: 'Obligación — EPP',            badge: 'NOM-026-STPS'  },
  { slug: 'fotoluminiscentes', label: 'Fotoluminiscentes',           badge: 'Sin electricidad' },
  { slug: 'personalizados',    label: 'Señalización Personalizada',  badge: 'NOM a medida'  },
] as const

// ============================================================
// DATOS POR PRODUCTO
// ============================================================
export const SENALAMIENTO_PAGES: Record<string, ProductoSenalamientoData> = {

  // ──────────────────────────────────────────────────────────
  // 1. EVACUACIÓN Y RUTAS DE SALIDA
  // ──────────────────────────────────────────────────────────
  'evacuacion': {
    metaTitle: 'Señalamientos de Evacuación y Rutas de Salida NOM | Proyecto Red',
    metaDesc: 'Señalamientos de evacuación, flechas de dirección, salidas de emergencia y puntos de reunión. Certificados NOM-003-SEGOB. Materiales PVC, acrílico y fotoluminiscente. CDMX.',

    badge: 'NOM-003-SEGOB · Evacuación · Punto de reunión',
    heroTitle: 'Señalamientos de',
    heroAccent: 'Evacuación',
    heroSubtitle: 'Los señalamientos de evacuación guían al personal y visitantes hacia las salidas de emergencia de manera ordenada y segura. Flechas de dirección, señales de salida, puntos de reunión y rutas de evacuación certificados NOM-003-SEGOB.',
    heroDescRight: [
      'Una evacuación segura depende de que cada persona sepa exactamente hacia dónde ir, incluso si hay humo o iluminación deficiente. Los señalamientos de evacuación correctamente ubicados reducen el tiempo de evacuación, evitan el pánico y son el primer elemento que revisa Protección Civil en una visita de inspección.',
      'En Proyecto Red suministramos la señalización completa de evacuación: flechas direccionales, señales de "Salida", "Salida de emergencia", "Punto de reunión" y rutas de evacuación en PVC, acrílico, vinilo y material fotoluminiscente. También realizamos el levantamiento del inmueble y entregamos el plano de señalización.',
    ],
    stats: [
      { value: 'NOM-003',    label: 'SEGOB certificado'      },
      { value: 'Foto',       label: 'Versión luminiscente'   },
      { value: 'PVC · Acril', label: 'Materiales disponibles' },
      { value: 'Plano',      label: 'Para expediente PC'     },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los señalamientos',
      titleLine2: 'de evacuación',
      desc: 'Los señalamientos de evacuación deben cumplir con la NOM-003-SEGOB en cuanto a colores, símbolos, dimensiones y materiales. Estas son las especificaciones que garantizan su validez legal y su eficacia operativa.',
      items: [
        {
          title: 'Color: fondo verde con símbolo y texto blanco',
          desc: 'La NOM-003-SEGOB establece que las señales de evacuación, salida y punto de reunión deben tener fondo verde (Pantone 354 C o equivalente) con símbolo y texto en blanco. El verde significa "condición segura" en el sistema de colores de seguridad ISO 3864.',
        },
        {
          title: 'Dimensiones mínimas según distancia de visibilidad',
          desc: 'La NOM-003-SEGOB establece que el tamaño de la señal debe ser proporcional a la distancia máxima de observación. Para una señal observable a 15 metros, el tamaño mínimo es 20×20 cm. Para 30 metros, 40×40 cm. Para pasillos largos se usan señales de 30×10 cm en orientación horizontal.',
        },
        {
          title: 'Pictograma estandarizado ISO 7010-E001 a E007',
          desc: 'Los símbolos de evacuación siguen el estándar ISO 7010, reconocido internacionalmente: figura corriendo (salida de emergencia), flecha direccional, punto de reunión. Los pictogramas deben ser legibles en condiciones de visibilidad reducida.',
        },
        {
          title: 'Materiales: PVC rígido, acrílico o vinilo autoadherible',
          desc: 'El PVC rígido de 3 mm es el más utilizado por su durabilidad y bajo costo. El acrílico es más estético y se usa en instalaciones corporativas y hoteles. El vinilo autoadherible es adecuado para superficies lisas donde no se puede atornillar.',
        },
        {
          title: 'Retroreflectividad o fotoluminiscencia para emergencias',
          desc: 'Las señales de evacuación en rutas críticas deben ser fotoluminiscentes o tener iluminación de emergencia propia. La NOM-003-SEGOB permite ambas opciones. Las fotoluminiscentes se cargan con luz ambiental y emiten luz hasta 90 min sin electricidad.',
        },
        {
          title: 'Instalación: atornillado, pegado o suspendido desde techo',
          desc: 'Las señales se instalan en pared, sobre la puerta de salida o suspendidas desde el techo, a una altura visible desde cualquier punto del pasillo. La norma exige que la señal sea visible desde cualquier punto del área protegida sin obstáculos visuales.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Ubicación y aplicación',
      titleLine1: '¿Dónde se instalan los',
      titleLine2: 'señalamientos de evacuación?',
      desc: 'La correcta ubicación de los señalamientos de evacuación es tan importante como el señalamiento mismo. Estas son las posiciones críticas que revisa Protección Civil.',
      usos: [
        { label: 'Sobre cada puerta de salida de emergencia',  desc: 'La señal "Salida de emergencia" o "Salida" se coloca directamente sobre el dintel de la puerta, visible desde cualquier punto del área a más de 2 metros de distancia.' },
        { label: 'En cada cambio de dirección del pasillo',   desc: 'Cada vez que la ruta de evacuación cambia de dirección, una flecha direccional indica el siguiente tramo. Sin estas señales, los usuarios pueden dudar o tomar la dirección incorrecta.' },
        { label: 'En escaleras — cada descanso de piso',      desc: 'En escaleras de emergencia se instalan señales en cada descanso de piso indicando la dirección de bajada y el número de piso. Evita confusión cuando el humo limita la visibilidad al frente.' },
        { label: 'Punto de reunión — exterior del edificio',  desc: 'El punto de reunión se señaliza en el exterior, en la zona donde el personal debe congregarse después de evacuar. Debe ser visible desde las salidas principales y estar a distancia segura del edificio.' },
        { label: 'Pasillos largos — cada 10–15 metros',       desc: 'En pasillos de más de 20 metros, las señales se repiten a intervalos regulares para mantener la orientación del evacuado. La visibilidad debe mantenerse incluso con humo hasta 1.5 metros de altura.' },
        { label: 'Áreas de trabajo interiores sin ventanas',  desc: 'En áreas interiores sin luz natural ni referencia visual del exterior, las señales de evacuación son el único medio de orientación. Aquí las versiones fotoluminiscentes son especialmente críticas.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿Cuántas señales de evacuación necesita mi empresa?',
        answer: 'El número exacto depende de la distribución del inmueble, el número de salidas, la longitud de los pasillos y la complejidad de las rutas. Como referencia, una planta de oficinas de 500 m² típicamente necesita 15–25 señales de evacuación entre flechas, señales de salida y punto de reunión. Hacemos el levantamiento sin costo para darte el número exacto.',
      },
      {
        question: '¿Las señales de evacuación deben ser fotoluminiscentes o con luz propia?',
        answer: 'La NOM-003-SEGOB permite señales retroreflectivas, fotoluminiscentes o con iluminación propia en rutas de evacuación. Para instalaciones con cortes de energía frecuentes o zonas sin luz de emergencia, las fotoluminiscentes son la opción más económica y más confiable. Para instalaciones de alto riesgo (hospitales, hoteles) se recomienda iluminación de emergencia integrada.',
      },
      {
        question: '¿Hacen el plano de señalización para el expediente de Protección Civil?',
        answer: 'Sí. El servicio completo incluye levantamiento del inmueble, recomendación de tipos y ubicaciones, suministro, instalación y entrega del plano de señalización en formato impreso y digital. Este plano es el documento que Protección Civil solicita en la visita de verificación.',
      },
      {
        question: '¿Los señalamientos tienen garantía contra decoloración?',
        answer: 'Los materiales que usamos tienen tintas resistentes a UV para uso en interiores. Para aplicaciones en exteriores o bajo luz solar directa, especificamos materiales con recubrimiento UV y vinilo de exterior. La garantía contra decoloración varía según el material: PVC interior 3–5 años, vinilo exterior 5–7 años con recubrimiento UV.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos de evacuación y rutas de salida NOM para mi instalación. ¿Hacen levantamiento del inmueble?',
    ctaTitle: '¿Necesitas señalamientos de evacuación en CDMX?',
    ctaBody: 'Escríbenos con el tipo de instalación y el área aproximada. Agendamos el levantamiento sin costo y te entregamos plano de señalización para Protección Civil.',
  },

  // ──────────────────────────────────────────────────────────
  // 2. PROHIBICIÓN
  // ──────────────────────────────────────────────────────────
  'prohibicion': {
    metaTitle: 'Señalamientos de Prohibición NOM-026-STPS | Proyecto Red CDMX',
    metaDesc: 'Señalamientos de prohibición: no fumar, no encender fuego, prohibido el paso, no usar celular. NOM-026-STPS Clase P. PVC y vinilo. Entrega en CDMX.',

    badge: 'NOM-026-STPS · Clase P · Fondo blanco / rojo',
    heroTitle: 'Señalamientos de',
    heroAccent: 'Prohibición',
    heroSubtitle: 'Los señalamientos de prohibición indican acciones que no deben realizarse en un área determinada por representar un riesgo. Fondo blanco con símbolo negro dentro de un círculo rojo tachado. Certificados NOM-026-STPS Clase P.',
    heroDescRight: [
      'Las señales de prohibición son el primer elemento visual de control de riesgo en una instalación. Indican de manera clara y universal las conductas que no están permitidas: fumar, encender fuego, el paso de personal no autorizado, el uso de celulares en zonas de riesgo y muchas más.',
      'En Proyecto Red suministramos señales de prohibición en el catálogo estándar NOM-026-STPS y también fabricamos señales personalizadas para prohibiciones específicas de tu instalación. Todos los materiales cumplen con los colores, proporciones y pictogramas exigidos por la norma.',
    ],
    stats: [
      { value: 'NOM-026',    label: 'STPS certificado'       },
      { value: 'Clase P',    label: 'Prohibición'            },
      { value: 'Blanco/rojo', label: 'Color normativo'       },
      { value: '+20 modelos', label: 'Catálogo estándar'     },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'señalamientos de prohibición',
      desc: 'Las señales de prohibición tienen un diseño estandarizado que garantiza su reconocimiento inmediato. Estas son las especificaciones que define la NOM-026-STPS para la Clase P.',
      items: [
        {
          title: 'Color: fondo blanco, símbolo negro, círculo y barra roja',
          desc: 'El círculo con barra diagonal roja es el símbolo universal de prohibición. El símbolo específico (una llama, un cigarro, una figura humana) va en negro dentro del círculo. El fondo es blanco. Este sistema es reconocible sin texto en cualquier idioma.',
        },
        {
          title: 'Forma circular — diferenciador visual inmediato',
          desc: 'Las señales de prohibición NOM-026-STPS tienen forma circular, a diferencia de las de advertencia (triangular) y obligación (cuadrada). Esta codificación por forma permite identificar la categoría de señal incluso desde lejos o con visibilidad parcial.',
        },
        {
          title: 'Pictogramas ISO 7010 — reconocimiento universal',
          desc: 'Los pictogramas de las señales de prohibición siguen el estándar ISO 7010 (P001 a P070+), reconocido internacionalmente. En instalaciones con personal extranjero o multinacional, esto garantiza la comprensión sin necesidad de texto.',
        },
        {
          title: 'Dimensiones: 10×10 cm (cercano) a 40×40 cm (área abierta)',
          desc: 'El tamaño se determina por la distancia máxima de visibilidad. Para zonas de paso con señal a 5 metros, 10×10 cm es suficiente. Para señales visibles a 20 metros en pasillos industriales, se recomienda 30×30 cm mínimo.',
        },
        {
          title: 'Materiales: PVC, acrílico, vinilo adhesivo o aluminio',
          desc: 'Para interiores de oficina: PVC 3 mm o acrílico. Para áreas industriales húmedas o a la intemperie: PVC galvanizado, aluminio o vinilo exterior. Las señales de aluminio tienen mayor durabilidad en ambientes corrosivos.',
        },
        {
          title: 'Texto de apoyo opcional bajo el símbolo',
          desc: 'Aunque el pictograma debe ser autoexplicativo, la NOM-026-STPS permite añadir texto de apoyo bajo el símbolo en la misma señal. El texto debe estar en español y en el mismo color de contraste que el símbolo.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Ubicación y aplicación',
      titleLine1: '¿Dónde instalar señales',
      titleLine2: 'de prohibición?',
      desc: 'Las señales de prohibición se instalan en el punto de acceso al área o actividad restringida, antes de que el trabajador o visitante ingrese a la zona de riesgo.',
      usos: [
        { label: 'No fumar — áreas con materiales inflamables',   desc: '"No fumar" y "No encender fuego" son obligatorias en bodegas con solventes, talleres, gasolineras y cualquier área donde haya presencia de vapores o materiales inflamables según la NOM-026-STPS.' },
        { label: 'Prohibido el paso — áreas restringidas',        desc: 'En salas de máquinas, cuartos eléctricos, áreas de proceso con riesgo específico y zonas de carga donde el acceso de personal no autorizado representa un riesgo.' },
        { label: 'No usar celular — zonas de riesgo eléctrico',   desc: 'En subestaciones eléctricas y áreas con equipos sensibles a interferencia electromagnética, la señal de prohibición de uso de celular es requerida por los protocolos de seguridad.' },
        { label: 'No operar sin EPP específico',                  desc: 'En áreas donde hay un EPP obligatorio, además de la señal de obligación se puede colocar una señal de prohibición que indica no entrar sin el EPP, reforzando el mensaje desde dos ángulos.' },
        { label: 'Prohibido tomar fotografías — áreas sensibles', desc: 'En plantas con procesos confidenciales, laboratorios farmacéuticos y centros de datos donde la fotografía está restringida por motivos de seguridad industrial o confidencialidad.' },
        { label: 'Acceso controlado — entrada de vehículos',      desc: '"Prohibido el acceso a vehículos no autorizados", "Velocidad máxima 10 km/h" y señales similares en accesos de planta, estacionamientos y muelles de carga.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿Cuáles son las señales de prohibición obligatorias en una empresa?',
        answer: 'La NOM-026-STPS exige señales de prohibición en áreas donde existan riesgos específicos. Las más comunes en empresas son: "No fumar" en áreas con materiales inflamables, "Prohibido el paso a personal no autorizado" en áreas restringidas y "No operar sin autorización" en maquinaria peligrosa. La lista exacta para tu instalación surge del diagnóstico de riesgos.',
      },
      {
        question: '¿Hay diferencia entre señal de prohibición y señal de advertencia?',
        answer: 'Sí, son categorías distintas. La señal de prohibición (Clase P, fondo blanco, círculo rojo) indica una acción que no está permitida: "No hagas esto". La señal de advertencia (Clase A, fondo amarillo, triángulo negro) indica un riesgo presente en el área: "Aquí existe este peligro". Ambas son necesarias pero en ubicaciones y contextos diferentes.',
      },
      {
        question: '¿Pueden fabricar señales de prohibición personalizadas?',
        answer: 'Sí. Si tu instalación tiene una prohibición específica no cubierta por el catálogo estándar, fabricamos la señal manteniendo los colores, la forma circular y los pictogramas conforme a la NOM-026-STPS. El diseño se valida contigo antes de la producción. Se requieren mínimos de 5 piezas para señales personalizadas.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos de prohibición NOM para mi empresa. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas señalamientos de prohibición en CDMX?',
    ctaBody: 'Cuéntanos el tipo de instalación y las áreas de riesgo. Te indicamos qué señales necesitas y hacemos el levantamiento sin costo.',
  },

  // ──────────────────────────────────────────────────────────
  // 3. ADVERTENCIA DE RIESGO
  // ──────────────────────────────────────────────────────────
  'advertencia': {
    metaTitle: 'Señalamientos de Advertencia y Riesgo NOM-026-STPS | Proyecto Red',
    metaDesc: 'Señalamientos de advertencia: riesgo eléctrico, materiales inflamables, sustancias corrosivas, peligro de caída. NOM-026-STPS Clase A. Fondo amarillo. Entrega CDMX.',

    badge: 'NOM-026-STPS · Clase A · Fondo amarillo / negro',
    heroTitle: 'Señalamientos de',
    heroAccent: 'Advertencia',
    heroSubtitle: 'Los señalamientos de advertencia informan sobre riesgos presentes en un área: alto voltaje, materiales inflamables, sustancias corrosivas, peligro de caída, superficies calientes. Fondo amarillo con triángulo y símbolo negro. NOM-026-STPS Clase A.',
    heroDescRight: [
      'Una señal de advertencia bien ubicada puede prevenir un accidente antes de que ocurra. A diferencia de las señales de prohibición que restringen una acción, las señales de advertencia informan sobre un peligro existente para que el trabajador tome las precauciones necesarias antes de ingresar o realizar una tarea.',
      'En Proyecto Red suministramos el catálogo completo de señales de advertencia NOM-026-STPS: riesgo eléctrico, inflamable, corrosivo, tóxico, explosivo, radiación, presión, temperatura, caída y muchos más. También fabricamos señales de advertencia personalizadas para riesgos específicos de tu proceso industrial.',
    ],
    stats: [
      { value: 'NOM-026',    label: 'STPS certificado'       },
      { value: 'Clase A',    label: 'Advertencia'            },
      { value: 'Amarillo',   label: 'Color normativo'        },
      { value: '+30 modelos', label: 'Catálogo estándar'     },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'señalamientos de advertencia',
      desc: 'Las señales de advertencia tienen un código visual inequívoco: fondo amarillo y forma triangular. Estas especificaciones garantizan su identificación inmediata en cualquier instalación.',
      items: [
        {
          title: 'Color: fondo amarillo con triángulo y símbolo negro',
          desc: 'El amarillo es el color universal de precaución. El triángulo equilátero con borde negro y el símbolo del riesgo en negro sobre fondo amarillo constituyen la señal de advertencia Clase A conforme a NOM-026-STPS e ISO 3864.',
        },
        {
          title: 'Forma triangular — diferenciador visual único',
          desc: 'El triángulo es exclusivo de las señales de advertencia. En una instalación con múltiples tipos de señales, el trabajador identifica inmediatamente la categoría de la señal por su forma antes de leer el símbolo, algo crítico en situaciones de emergencia.',
        },
        {
          title: 'Principales riesgos cubiertos por el catálogo estándar',
          desc: 'Alto voltaje, inflamable, corrosivo, tóxico, explosivo, radiación ionizante, peligro de caída, superficie caliente, presión de gas, carga suspendida, maquinaria en movimiento, sustancias oxidantes, temperatura extrema y más de 30 pictogramas adicionales.',
        },
        {
          title: 'Dimensiones según distancia de visibilidad y nivel de riesgo',
          desc: 'Para señales cerca del riesgo (1–3 metros): 10×10 cm. Para señales de acceso a área (hasta 10 metros): 20×20 cm. Para señales en instalaciones abiertas (hasta 30 metros): 30×30 o 40×40 cm. Riesgos críticos como alto voltaje se señalizan con el tamaño mayor disponible.',
        },
        {
          title: 'Materiales para interiores y exteriores',
          desc: 'PVC rígido (interior general), acrílico (corporativo e interior de alta estética), aluminio (exterior e industrial húmedo), vinilo (adhesivo para máquinas y superficies lisas), poliestireno de alta densidad (áreas con impacto moderado).',
        },
        {
          title: 'Resistencia química y térmica para ambientes industriales',
          desc: 'En plantas químicas, alimentarias o farmacéuticas donde los señalamientos quedan expuestos a limpieza con productos químicos o vapor, se especifican materiales con resistencia química: PVC tipo P o aluminio anodizado con impresión digital UV.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Ubicación y aplicación',
      titleLine1: '¿Dónde instalar señales',
      titleLine2: 'de advertencia?',
      desc: 'Las señales de advertencia se instalan antes del riesgo — el trabajador debe verlas antes de entrar al área o ejecutar la tarea. Estos son los puntos críticos de instalación.',
      usos: [
        { label: 'Tableros y cuartos eléctricos',           desc: '"Riesgo eléctrico" y "Alto voltaje" son obligatorias en tableros de distribución, subestaciones y cuartos de equipos eléctricos. Tamaño mínimo según la distancia de visibilidad desde el pasillo de acceso.' },
        { label: 'Almacenes de productos químicos',         desc: '"Inflamable", "Corrosivo", "Tóxico" y "Oxidante" se instalan en las áreas de almacenamiento según el tipo de producto. La NOM-018-STPS también exige estas señales en el sistema de identificación de peligros.' },
        { label: 'Zonas de trabajo en altura',              desc: '"Peligro de caída" en bordes de azoteas, mezzanines, plataformas y escaleras donde hay riesgo de caída a diferente nivel. Complementa a las barandillas y líneas de vida.' },
        { label: 'Áreas con maquinaria en movimiento',      desc: '"Maquinaria en movimiento", "Carga suspendida" y "Peligro de aplastamiento" cerca de bandas transportadoras, grúas puente y prensas. Visibles desde el pasillo de circulación del área.' },
        { label: 'Superficies calientes y puntos de quema', desc: '"Superficie caliente" y "No tocar" en intercambiadores de calor, tuberías de vapor, hornos y calderas. Se instalan directamente sobre la superficie o en el acceso inmediato al equipo.' },
        { label: 'Zonas de carga y descarga con riesgo de atropello', desc: '"Peligro vehículos en movimiento" y "Precaución paso de montacargas" en áreas de maniobra de montacargas y muelles de carga donde transitan peatones.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿La señal de advertencia reemplaza a los resguardos físicos de seguridad?',
        answer: 'No. La señal de advertencia es el último recurso de comunicación del riesgo, no el único control. Según la jerarquía de controles de seguridad (NOM-017-STPS), los controles de ingeniería (resguardos, barreras) tienen mayor prioridad que los señalamientos. La señal de advertencia se instala cuando el riesgo no puede eliminarse ni controlarse completamente con ingeniería.',
      },
      {
        question: '¿Cuáles señales de advertencia son obligatorias en una planta industrial?',
        answer: 'Depende de los riesgos presentes. La NOM-026-STPS exige señales de advertencia en todas las áreas donde existan riesgos identificados en el programa de seguridad e higiene. Las más comunes en planta son: alto voltaje, inflamable, corrosivo, maquinaria en movimiento y caída a diferente nivel. El diagnóstico de riesgos es el documento base para determinar cuáles aplican.',
      },
      {
        question: '¿Qué pasa si la señal de advertencia se decolora o deteriora?',
        answer: 'Una señal deteriorada pierde su función y puede ser señalada como incumplimiento en una auditoría de STPS o Protección Civil. Las señales deben inspeccionarse semestralmente y reemplazarse cuando el color amarillo pierde el 20% de su intensidad, el símbolo es ilegible o el material presenta daño físico. Ofrecemos servicio de mantenimiento y reemplazo periódico.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos de advertencia NOM-026-STPS para mi planta o empresa. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas señalamientos de advertencia en CDMX?',
    ctaBody: 'Cuéntanos los tipos de riesgo de tu instalación. Te indicamos qué señales aplican según la norma y hacemos el levantamiento sin costo.',
  },

  // ──────────────────────────────────────────────────────────
  // 4. OBLIGACIÓN (USO DE EPP)
  // ──────────────────────────────────────────────────────────
  'obligacion': {
    metaTitle: 'Señalamientos de Obligación — Uso de EPP NOM-026-STPS | Proyecto Red',
    metaDesc: 'Señalamientos de obligación: uso de casco, lentes, guantes, protección auditiva. NOM-026-STPS Clase O. Fondo azul con símbolo blanco. Entrega en CDMX.',

    badge: 'NOM-026-STPS · Clase O · Fondo azul / blanco',
    heroTitle: 'Señalamientos de',
    heroAccent: 'Obligación',
    heroSubtitle: 'Los señalamientos de obligación indican el equipo de protección personal (EPP) requerido para ingresar a un área o realizar una tarea. Fondo azul con símbolo blanco. NOM-026-STPS Clase O. Incluye casco, lentes, guantes, protección auditiva, calzado de seguridad y más.',
    heroDescRight: [
      'La señal de obligación no es solo un requisito normativo — es el recordatorio permanente de que en esa área o tarea hay un riesgo que requiere equipo específico. Su efectividad depende de su correcta ubicación, visibilidad y de que el personal conozca el EPP que representa cada símbolo.',
      'En Proyecto Red suministramos señales de obligación para todos los tipos de EPP: craneal, visual, auditiva, respiratoria, de manos, de pies y de cuerpo completo. También fabricamos señales con múltiples EPP en una sola pieza para áreas donde aplican varios elementos simultáneamente.',
    ],
    stats: [
      { value: 'NOM-026',   label: 'STPS certificado'    },
      { value: 'Clase O',   label: 'Obligación'          },
      { value: 'Azul/blanco', label: 'Color normativo'   },
      { value: '+15 EPP',   label: 'Tipos disponibles'   },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'señalamientos de obligación',
      desc: 'Las señales de obligación tienen un diseño estandarizado que comunica con claridad el EPP requerido. Estas son las especificaciones que definen su validez conforme a NOM-026-STPS.',
      items: [
        {
          title: 'Color: fondo azul con símbolo blanco',
          desc: 'El azul es el color de obligación en el sistema ISO 3864 y NOM-026-STPS. El símbolo blanco sobre fondo azul es visible en condiciones de iluminación baja y desde distancias largas. La saturación del azul debe corresponder al Pantone 286 C o equivalente.',
        },
        {
          title: 'Forma circular — identificación inmediata de obligación',
          desc: 'Las señales de obligación tienen forma circular al igual que las de prohibición, pero se diferencian por el color de fondo: azul en obligación, blanco en prohibición. Esta codificación doble (forma + color) garantiza la identificación en cualquier condición.',
        },
        {
          title: 'EPP cubiertos: craneal, visual, auditiva, respiratoria, manos y pies',
          desc: 'Uso obligatorio de casco (M001), protección ocular (M004), protección auditiva (M003), mascarilla o respirador (M016), guantes (M009), botas de seguridad (M008), arnés (M014), ropa de trabajo (M010) y más de 15 categorías adicionales conforme a ISO 7010.',
        },
        {
          title: 'Señales combinadas — múltiples EPP en una pieza',
          desc: 'Para áreas donde se requieren 3 o más elementos de EPP simultáneamente, fabricamos señales combinadas con múltiples pictogramas en una sola pieza de mayor tamaño. Esto reduce el número de señales y presenta todos los requisitos de manera clara.',
        },
        {
          title: 'Dimensiones según distancia de visibilidad',
          desc: 'Para señales junto a la entrada del área (vista a 3 metros): 15×15 cm. Para señales en pasillo de acceso (vista a 10 metros): 25×25 cm. Para áreas abiertas: 30×30 cm. Las señales de acceso principal deben ser las de mayor tamaño.',
        },
        {
          title: 'Materiales según tipo de instalación',
          desc: 'PVC para interiores de oficina y almacén general. Aluminio o acero inoxidable para plantas con limpieza agresiva o humedad. Vinilo autoadherible para maquinaria. Acrílico para instalaciones corporativas y hospitales.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Ubicación y aplicación',
      titleLine1: '¿Dónde instalar señales',
      titleLine2: 'de obligación?',
      desc: 'Las señales de obligación se instalan en el punto de acceso a cada área antes de que el trabajador ingrese. Estas son las ubicaciones y escenarios más frecuentes.',
      usos: [
        { label: 'Entrada a planta de producción',            desc: 'En el acceso a la planta, la señal combinada de EPP obligatorio (casco + lentes + botas de seguridad) informa a todo visitante y contratista los requisitos antes de ingresar al área de producción.' },
        { label: 'Zonas de ruido elevado',                    desc: '"Protección auditiva obligatoria" se instala en el acceso a áreas con niveles de ruido superiores a 85 dB. Complementa al programa de conservación auditiva exigido por la NOM-011-STPS.' },
        { label: 'Áreas con riesgo de proyección de partículas', desc: '"Lentes de seguridad obligatorios" en esmerilado, torno, corte y cualquier proceso con proyección de partículas. Reducen significativamente la frecuencia de accidentes oculares.' },
        { label: 'Almacén de químicos y laboratorios',        desc: '"Guantes obligatorios", "Respirador obligatorio" y "Lentes obligatorios" en el acceso a laboratorios y almacenes de productos químicos con riesgo de contacto o inhalación.' },
        { label: 'Zonas de trabajo en altura',                desc: '"Arnés de seguridad obligatorio" en acceso a plataformas, andamios y azoteas. Complementa al procedimiento de trabajo en altura y al anclaje de la línea de vida.' },
        { label: 'Talleres mecánicos y de mantenimiento',     desc: 'Las señales de casco, lentes y botas de seguridad en talleres de mantenimiento cubren el riesgo mixto de impacto, proyección y caída de objetos que existe en estas áreas de trabajo.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿La señal de obligación reemplaza al procedimiento de EPP?',
        answer: 'No. La señal es el recordatorio visual del EPP requerido, pero no reemplaza al procedimiento de seguridad documentado, la capacitación del personal ni la supervisión del uso del EPP. Según la NOM-017-STPS, la señal de obligación debe estar acompañada de un procedimiento de selección y uso del EPP correspondiente.',
      },
      {
        question: '¿Puedo poner en una misma señal todos los EPP obligatorios de mi planta?',
        answer: 'Sí, fabricamos señales combinadas con múltiples pictogramas. Sin embargo, cuando son más de 4 EPP, es mejor usar un panel de señales multiple o un letrero vertical con todos los requisitos. El exceso de información en una sola señal reduce la retención del mensaje. Asesoramos el diseño para maximizar la claridad.',
      },
      {
        question: '¿Con qué frecuencia debo revisar y reemplazar los señalamientos?',
        answer: 'La NOM-026-STPS recomienda inspección semestral de todos los señalamientos. Los criterios de reemplazo son: decoloración visible del fondo azul, símbolo ilegible, daño físico (roturas, dobladuras) o cambio en los requisitos de EPP del área. En auditorías de STPS, los señalamientos deteriorados son una no conformidad frecuente.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos de obligación de EPP NOM para mi empresa. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas señalamientos de obligación en CDMX?',
    ctaBody: 'Cuéntanos las áreas de tu instalación y el EPP que se requiere en cada una. Te indicamos qué señales aplican y hacemos el levantamiento sin costo.',
  },

  // ──────────────────────────────────────────────────────────
  // 5. SEÑALES FOTOLUMINISCENTES
  // ──────────────────────────────────────────────────────────
  'fotoluminiscentes': {
    metaTitle: 'Señalamientos Fotoluminiscentes — Visibles sin Electricidad | Proyecto Red',
    metaDesc: 'Señalamientos fotoluminiscentes que se cargan con luz ambiental y mantienen visibilidad hasta 90 minutos sin electricidad. Salidas, evacuación, extintores. NOM-003-SEGOB. CDMX.',

    badge: 'NOM-003-SEGOB · Sin electricidad · 90 min visibilidad',
    heroTitle: 'Señalamientos',
    heroAccent: 'Fotoluminiscentes',
    heroSubtitle: 'Los señalamientos fotoluminiscentes se cargan con luz ambiental (natural o artificial) y emiten luz en la oscuridad durante 60 a 90 minutos. Son la solución más confiable para rutas de evacuación cuando falla la electricidad, sin necesidad de baterías ni mantenimiento eléctrico.',
    heroDescRight: [
      'En una emergencia con corte eléctrico, las señales fotoluminiscentes son la única guía visible en escaleras, pasillos y salidas cuando la iluminación de emergencia no alcanza o falla. La tecnología fotoluminiscente usa pigmentos de aluminato de estroncio que absorben y almacenan energía luminosa durante el día y la liberan en la oscuridad.',
      'En Proyecto Red suministramos señales fotoluminiscentes en todos los tipos: evacuación, salida de emergencia, extintor, botiquín, ruta de evacuación y señales de escalera. Los materiales cumplen con los estándares de persistencia luminosa más exigentes del mercado, garantizando visibilidad mínima de 60 minutos en condiciones de oscuridad total.',
    ],
    stats: [
      { value: '60–90 min', label: 'Visibilidad en oscuridad' },
      { value: '0 batería', label: 'Sin mantenimiento eléctrico' },
      { value: 'NOM-003',   label: 'SEGOB certificado'        },
      { value: 'Aluminato', label: 'Pigmento de estroncio'    },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Cómo funcionan las señales',
      titleLine2: 'fotoluminiscentes',
      desc: 'Los señalamientos fotoluminiscentes tienen propiedades únicas que los hacen más confiables que las señales convencionales en situaciones de emergencia. Estas son las especificaciones técnicas clave.',
      items: [
        {
          title: 'Pigmento: aluminato de estroncio activado con europio',
          desc: 'El aluminato de estroncio (SrAl₂O₄:Eu,Dy) es el pigmento fotoluminiscente de mayor eficiencia del mercado. Absorbe la energía luminosa de fuentes de luz natural y artificial, y la libera gradualmente en forma de luz verde-amarilla visible en la oscuridad. Es 10 veces más eficiente que los pigmentos de sulfuro de zinc de primera generación.',
        },
        {
          title: 'Tiempo de carga: 30 minutos de luz a 500 lux',
          desc: 'Con una iluminación ambiente de 500 lux (iluminación típica de oficina), el pigmento se carga completamente en 30 minutos. Con luz natural directa, la carga es casi instantánea. El nivel de luminancia en la oscuridad es proporcional a la intensidad y duración de la carga.',
        },
        {
          title: 'Persistencia: 60 minutos mínimo según ISO 16069',
          desc: 'El estándar ISO 16069 (Sistemas de guía fotoluminiscente para vías de evacuación) exige una luminancia mínima de 0.3 mcd/m² a los 60 minutos en oscuridad total. Los materiales de aluminato de estroncio de calidad mantienen luminancia visible hasta 90 minutos en condiciones óptimas.',
        },
        {
          title: 'Materiales: lámina fotoluminiscente sobre PVC o aluminio',
          desc: 'La lámina fotoluminiscente autoadherible se aplica sobre sustratos de PVC rígido, aluminio o polietileno. Para aplicaciones en piso (guías de evacuación y balizas), se usa lámina antideslizante resistente al tráfico. Para pared y techo, PVC de 3 mm con lámina fotoluminiscente laminada.',
        },
        {
          title: 'No requieren conexión eléctrica ni baterías',
          desc: 'A diferencia de las señales de emergencia con LED y batería, las fotoluminiscentes no tienen componentes eléctricos que puedan fallar. Su mantenimiento se limita a la limpieza periódica para remover polvo o grasa que reduzca la absorción de luz.',
        },
        {
          title: 'Vida útil: 10–25 años según calidad del material',
          desc: 'Los materiales fotoluminiscentes de aluminato de estroncio tienen una vida útil certificada de 10 años con mantenimiento adecuado. Los materiales de mayor calidad (ISO 15370) garantizan rendimiento mínimo por 25 años en condiciones de interior protegido de luz solar directa.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Ubicación y aplicación',
      titleLine1: '¿Dónde instalar señales',
      titleLine2: 'fotoluminiscentes?',
      desc: 'Las señales fotoluminiscentes son especialmente críticas en los puntos de la ruta de evacuación donde la iluminación de emergencia puede ser insuficiente. Estas son las ubicaciones prioritarias.',
      usos: [
        { label: 'Puertas y accesos de salida de emergencia', desc: 'La señal de "Salida de emergencia" sobre cada puerta de evacuación debe ser fotoluminiscente o tener iluminación propia. En corte eléctrico, es la señal más crítica de toda la instalación.' },
        { label: 'Escaleras de emergencia — todos los descansos', desc: 'En cada descanso de escalera se instalan señales fotoluminiscentes de dirección y número de piso. Las cajas de escalera son las zonas con mayor probabilidad de quedar en oscuridad total durante un incendio.' },
        { label: 'Pasillos sin ventanas y sótanos',            desc: 'En pasillos interiores sin luz natural y áreas de sótano, la fotoluminiscencia compensa la falta de luz natural de respaldo que tienen otras áreas del edificio.' },
        { label: 'Guías de evacuación en el piso',             desc: 'Las franjas fotoluminiscentes en el piso (balizas) guían a los evacuados en posición de agachados cuando el humo cubre la parte superior del espacio. Especialmente útiles en hoteles y restaurantes.' },
        { label: 'Extintores y equipos de emergencia',         desc: 'Las señales de extintor y botiquín en versión fotoluminiscente garantizan la localización del equipo en oscuridad, cuando probablemente más se necesitan.' },
        { label: 'Cuartos de máquinas y áreas técnicas',       desc: 'En cuartos de calderas, compresores y equipos eléctricos sin ventanas, las señales fotoluminiscentes de salida y extintor son las más críticas para una respuesta de emergencia efectiva.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿Las señales fotoluminiscentes reemplazan a la iluminación de emergencia?',
        answer: 'No son un reemplazo total pero sí un complemento confiable. La NOM-003-SEGOB permite señales fotoluminiscentes en lugar de señales con iluminación propia en muchas aplicaciones. Para instalaciones que deben cumplir NFPA 101 (Código de Seguridad en la Vida), las señales fotoluminiscentes están reconocidas como alternativa aceptable a las señales iluminadas eléctricamente cuando cumplen ISO 16069.',
      },
      {
        question: '¿Cómo se mantienen las señales fotoluminiscentes?',
        answer: 'El mantenimiento es muy simple: limpieza periódica con trapo húmedo para remover polvo y grasa que reduzcan la absorción de luz. No pintar sobre ellas ni cubrirlas con otros materiales. Verificar semestralmente que la lámina esté bien adherida y sin burbujas. El único requerimiento de "operación" es que haya suficiente iluminación en el área durante el día para cargar los pigmentos.',
      },
      {
        question: '¿Funcionan las fotoluminiscentes en áreas con poca luz durante el día?',
        answer: 'El rendimiento fotoluminiscente es proporcional a la luz de carga recibida. En áreas con menos de 200 lux durante el día (cuartos interiores oscuros), la persistencia en la oscuridad puede reducirse a 20–30 minutos. Para estas áreas se recomienda señales con iluminación LED propia o una combinación de luz UV/azul que carga los pigmentos más rápido.',
      },
      {
        question: '¿Cuánto duran realmente las señales fotoluminiscentes?',
        answer: 'Los materiales de aluminato de estroncio de calidad tienen una vida útil certificada de 10 años con pérdida de rendimiento inferior al 20%. Los materiales que vendemos cumplen con este estándar. Los pigmentos de sulfuro de zinc de bajo costo se degradan significativamente en 2–3 años. Siempre especificar el tipo de pigmento al cotizar.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos fotoluminiscentes para rutas de evacuación. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas señalamientos fotoluminiscentes en CDMX?',
    ctaBody: 'Cuéntanos el tipo de instalación y las áreas críticas. Te cotizamos la señalización fotoluminiscente completa con materiales de aluminato de estroncio certificados.',
  },

  // ──────────────────────────────────────────────────────────
  // 6. SEÑALIZACIÓN PERSONALIZADA NOM
  // ──────────────────────────────────────────────────────────
  'personalizados': {
    metaTitle: 'Señalización Personalizada NOM — Diseño a Medida | Proyecto Red',
    metaDesc: 'Señalamientos personalizados con diseño específico manteniendo colores, proporciones y materiales NOM. Con logotipo de empresa. Fabricación en CDMX. Para Protección Civil y STPS.',

    badge: 'NOM a medida · Diseño propio · Logotipo',
    heroTitle: 'Señalización',
    heroAccent: 'Personalizada NOM',
    heroSubtitle: 'Señalamientos diseñados específicamente para tu instalación, proceso o marca, manteniendo los colores, formas y dimensiones exigidas por la NOM-003-SEGOB y NOM-026-STPS. Válidos para auditorías de Protección Civil y STPS.',
    heroDescRight: [
      'No todas las situaciones de riesgo están cubiertas por el catálogo estándar de señalamientos. Cuando tu instalación tiene un proceso único, un riesgo específico o una combinación de peligros que no existe en señales genéricas, la señalización personalizada es la solución correcta.',
      'En Proyecto Red fabricamos señalamientos a medida respetando estrictamente los colores, formas, proporciones y materiales de la normativa. Podemos incorporar el logotipo de tu empresa, texto en varios idiomas, pictogramas específicos de tu proceso y cualquier información adicional que exija tu sistema de gestión de seguridad.',
    ],
    stats: [
      { value: 'NOM',       label: 'Cumplimiento garantizado' },
      { value: 'Logotipo',  label: 'Con identidad de empresa' },
      { value: '5 piezas',  label: 'Mínimo por diseño'       },
      { value: '5–7 días',  label: 'Tiempo de fabricación'   },
    ],

    caracteristicas: {
      eyebrow: 'Cómo funciona el servicio',
      titleLine1: 'Proceso de fabricación',
      titleLine2: 'de señales personalizadas',
      desc: 'La fabricación de señales personalizadas sigue un proceso estructurado para garantizar que el resultado sea estéticamente correcto y normativamente válido. Estas son las etapas del proceso.',
      items: [
        {
          title: 'Diagnóstico: identificación del riesgo o mensaje a señalizar',
          desc: 'Todo parte de entender qué se quiere comunicar. El riesgo específico, la acción requerida, la prohibición o la información de emergencia determinan la categoría de señal (advertencia, prohibición, obligación, informativa) y sus características normativas.',
        },
        {
          title: 'Diseño: propuesta visual conforme a NOM',
          desc: 'Nuestro equipo diseña la señal respetando los colores normativos, la forma de la categoría correspondiente y las proporciones de pictograma y texto exigidas. El diseño se entrega en archivo digital para aprobación antes de la producción.',
        },
        {
          title: 'Validación NOM: revisión de conformidad antes de producir',
          desc: 'Antes de fabricar, verificamos que el diseño cumpla con la categoría de señal correcta, el color Pantone correspondiente, las proporciones mínimas de símbolo respecto al total y la legibilidad del texto. Esto garantiza que la señal sea válida en auditorías.',
        },
        {
          title: 'Incorporación de logotipo o texto adicional',
          desc: 'El logotipo de la empresa o el texto adicional se ubica en zonas que no interfieren con los elementos normativos de la señal: generalmente en la parte inferior o en una banda independiente del mismo material. El color del logotipo no puede modificar los colores de fondo de la señal.',
        },
        {
          title: 'Producción: impresión digital UV de alta resolución',
          desc: 'Las señales se producen con impresión digital UV de alta resolución sobre los sustratos seleccionados (PVC, acrílico, aluminio, vinilo). La impresión UV es resistente a la decoloración, al agua y a la limpieza con productos químicos de uso industrial.',
        },
        {
          title: 'Mínimo por diseño: 5 piezas — tiempo de fabricación: 5–7 días hábiles',
          desc: 'El mínimo de producción es de 5 piezas por diseño. Para pedidos urgentes (2–3 días) hay un cargo adicional. Para diseños con muchas piezas (más de 50), el tiempo se extiende a 10–15 días hábiles. Los archivos de diseño se entregan en formato digital para reposiciones futuras.',
        },
      ],
    },

    dondeInstalar: {
      eyebrow: 'Casos de uso',
      titleLine1: '¿Cuándo necesitas señalización',
      titleLine2: 'personalizada?',
      desc: 'La señalización personalizada resuelve situaciones que el catálogo estándar no puede cubrir. Estos son los casos de uso más frecuentes que atendemos.',
      usos: [
        { label: 'Riesgos específicos de tu proceso industrial',  desc: 'Riesgos únicos de tu operación como "Peligro — radiación láser de alta potencia", "Área de vacío extremo" o "Riesgo biológico nivel 2", que no tienen pictograma estándar en la NOM.' },
        { label: 'Procedimientos críticos en punto de operación', desc: 'Señales de instrucción paso a paso para operaciones de alto riesgo que deben seguirse al pie de la letra: arranque de equipo, aislamiento de energía, manejo de productos peligrosos.' },
        { label: 'Señalización bilingüe o multilingüe',           desc: 'Para instalaciones con trabajadores o visitantes que hablan inglés, francés u otros idiomas. El pictograma NOM se mantiene y se agrega el texto en el idioma secundario.' },
        { label: 'Señalización con identidad corporativa',        desc: 'Empresas que requieren mantener la imagen corporativa en su señalización de seguridad. El logotipo y los colores de marca se incorporan sin modificar los elementos normativos de la señal.' },
        { label: 'Señales para sistemas de gestión (ISO 45001)',  desc: 'Para instalaciones con certificación ISO 45001 o OHSAS 18001 que tienen un sistema de señalización estandarizado propio. Fabricamos las señales conforme al manual de señalización del sistema de gestión.' },
        { label: 'Reposición de señales descontinuadas o dañadas', desc: 'Cuando se necesita reponer señales de un diseño anterior que ya no está en el catálogo estándar, fabricamos la reposición exacta usando el diseño original como referencia, actualizando el material si el original está descontinuado.' },
      ],
    },

    relatedTitle: 'Otros tipos de señalamientos en nuestro catálogo',

    faqItems: [
      {
        question: '¿Una señal personalizada es válida para Protección Civil y STPS?',
        answer: 'Sí, siempre que cumpla con los requisitos de la NOM-003-SEGOB (para señales de emergencia y evacuación) o la NOM-026-STPS (para señales de seguridad en centros de trabajo). Los inspectores verifican los colores, las formas, los pictogramas y los materiales — no exigen que la señal sea de un catálogo específico. Garantizamos la conformidad normativa de cada diseño que producimos.',
      },
      {
        question: '¿Pueden diseñar la señal desde cero si no sé qué quiero?',
        answer: 'Sí. Con la descripción del riesgo, la acción requerida o la información que necesitas comunicar, nuestro equipo propone el diseño correcto: categoría de señal, pictograma, texto y tamaño. Te presentamos la propuesta antes de producir y hacemos los ajustes necesarios.',
      },
      {
        question: '¿Qué pasa si necesito reponer señales del mismo diseño en el futuro?',
        answer: 'Guardamos todos los archivos de diseño de los clientes. Para reposiciones, solo necesitas indicar el número de piezas y la señal. Si ya pasaron más de 5 años, revisamos si los materiales o estándares han cambiado y te notificamos antes de producir.',
      },
      {
        question: '¿Cuánto cuesta una señal personalizada comparada con una estándar?',
        answer: 'El costo es entre 30 y 60% mayor al de una señal estándar del mismo material, principalmente por el costo de diseño y la producción en menor volumen. Para pedidos de más de 50 piezas del mismo diseño, el costo unitario se aproxima al de una señal estándar. Consúltanos con los detalles de tu requerimiento.',
      },
    ],

    waMessage: 'Hola, necesito señalamientos personalizados NOM con el logotipo de mi empresa. ¿Pueden ayudarme?',
    ctaTitle: '¿Necesitas señalización personalizada para tu empresa?',
    ctaBody: 'Cuéntanos qué necesitas comunicar y si requieres incorporar tu logotipo. Hacemos el diseño y te presentamos propuesta antes de producir.',
  },
}
