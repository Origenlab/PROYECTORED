// ============================================================
// src/data/mangueras-productos.ts
// Datos de Nivel 4 — Mangueras y Herrajes Contra Incendio
// Genera: /mangueras/manguera-hidrante/, /mangueras/chiflones/,
//         /mangueras/valvulas-adaptadores/, /mangueras/carrete-manguera/,
//         /mangueras/toma-siamesa/, /mangueras/monitor-incendio/
// ============================================================

export interface ProductoManguerasData {
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

export const MANGUERA_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'manguera-hidrante',     label: 'Manguera para Hidrante',    badge: 'NFPA 1961' },
  { slug: 'chiflones',             label: 'Chiflones y Pitones',       badge: 'NFPA 1964' },
  { slug: 'valvulas-adaptadores',  label: 'Válvulas y Adaptadores',    badge: 'NFPA 1963' },
  { slug: 'carrete-manguera',      label: 'Carrete de Manguera',       badge: 'NFPA 14'   },
  { slug: 'toma-siamesa',          label: 'Toma Siamesa',              badge: 'NFPA 14'   },
  { slug: 'monitor-incendio',      label: 'Monitor Contra Incendio',   badge: 'Elkhart'   },
]

export const MANGUERA_PAGES: Record<string, ProductoManguerasData> = {

  // ── Manguera para Hidrante ─────────────────────────────────
  'manguera-hidrante': {
    metaTitle: 'Manguera para Hidrante en CDMX | 1½" y 2½" | Proyecto Red',
    metaDesc: 'Mangueras para hidrante y sistemas contra incendio de 1½" y 2½". Materiales de poliéster y caucho. Certificación NFPA 1961. Entrega en CDMX.',
    badge: 'NFPA 1961',
    heroTitle: 'Mangueras',
    heroAccent: 'para Hidrante',
    heroSubtitle: 'Mangueras de primera intervención para sistemas de hidrantes interiores y exteriores. Diámetros de 1½" y 2½" conforme a NFPA 1961.',
    heroDescRight: [
      'Jacquette de poliéster de alta tenacidad con forro interior de caucho vulcanizado.',
      'Presión de trabajo de 1.2 MPa (175 psi) y prueba de presión a 2.4 MPa.',
      'Acoples Storz o roscados disponibles en aluminio o latón.',
    ],
    stats: [
      { value: '1½" – 2½"', label: 'Diámetros disponibles'  },
      { value: '175 psi',    label: 'Presión de trabajo'      },
      { value: 'NFPA 1961',  label: 'Certificación'           },
      { value: '15–30 m',    label: 'Longitudes estándar'     },
    ],
    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Mangueras construidas',
      titleLine2: 'para la emergencia',
      desc: 'La manguera contra incendio debe soportar presiones de trabajo extremas sin deformarse ni perder caudal. Nuestras mangueras cumplen los estándares más exigentes del mercado.',
      items: [
        { title: 'Jacquette de poliéster doble',   desc: 'Tejido de alta tenacidad resistente a la abrasión por arrastre en pisos y escaleras.' },
        { title: 'Forro interior de caucho',        desc: 'Impermeable y flexible incluso a bajas temperaturas, garantiza el flujo sin pérdidas.' },
        { title: 'Presión prueba 350 psi',          desc: 'Cada manguera se prueba hidrostáticamente a 350 psi antes de salir de la planta.' },
        { title: 'Acoples Storz en aluminio',       desc: 'Conexión rápida de una vuelta, compatible con los sistemas de hidrantes de CDMX.' },
        { title: 'Longitudes 15, 20 y 30 m',       desc: 'Disponibles en las longitudes más comunes; fabricamos a medida bajo pedido.' },
        { title: 'Colores rojo, naranja y negro',  desc: 'Identificación visual por tipo de uso: primera intervención, exterior e industrial.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Usos y aplicaciones',
      titleLine1: '¿Dónde se necesitan',
      titleLine2: 'mangueras para hidrante?',
      desc: 'Las mangueras para hidrante se utilizan tanto en primera intervención por los ocupantes del edificio (1½") como en respuesta profesional de bomberos (2½").',
      usos: [
        { label: 'Gabinetes de hidrante interior', desc: 'Manguera de 1½" para uso de los ocupantes del edificio en primera respuesta.' },
        { label: 'Sistemas exteriores',            desc: 'Manguera de 2½" para conexión directa desde el carro bomba hasta el hidrante.' },
        { label: 'Brigadas industriales',          desc: 'Mangueras de alta resistencia para instalaciones petroquímicas, gaseras o de manufactura.' },
        { label: 'Cuerpos de bomberos',            desc: 'Suministramos mangueras conforme a NFPA 1961 para dotación de unidades operativas.' },
        { label: 'Sustitución preventiva',        desc: 'Reemplazo de mangueras deterioradas o que no pasen la prueba hidrostática anual.' },
        { label: 'Proyectos nuevos de construcción', desc: 'Dotación completa de mangueras para sistemas de hidrantes en obra nueva.' },
      ],
    },
    relatedTitle: 'Otros herrajes y accesorios CI',
    faqItems: [
      { question: '¿Cada cuánto deben reemplazarse las mangueras?', answer: 'La NFPA 1962 recomienda prueba hidrostática anual y reemplazo máximo a los 10 años de fabricación. Si se detectan grietas, cortes, acoples dañados o la manguera no pasa la prueba de presión, debe reemplazarse inmediatamente.' },
      { question: '¿Cuál es la diferencia entre manguera semirígida y plana?', answer: 'La manguera plana (tipo NFPA) se almacena doblada o enrollada y es la estándar para gabinetes de hidrante. La semirígida mantiene su forma tubular y se usa en carretes; permite desplegarse sin necesidad de un segundo operador.' },
      { question: '¿Pueden venir conectadas a los gabinetes?', answer: 'Sí. Suministramos el kit completo: gabinete + manguera acoplada + pitón + llave. También podemos hacer el mantenimiento anual (prueba, secado y rearme) de mangueras ya instaladas.' },
    ],
    waMessage: 'Hola, necesito cotizar mangueras para hidrante en CDMX',
    ctaTitle: '¿Necesitas mangueras para tu sistema de hidrantes?',
    ctaBody: 'Te cotizamos el kit completo con gabinete, manguera, pitón y acoples. Entrega en CDMX con instalación disponible.',
  },

  // ── Chiflones y Pitones ─────────────────────────────────────
  'chiflones': {
    metaTitle: 'Chiflones y Pitones CI en CDMX | Chorro y Neblina | Proyecto Red',
    metaDesc: 'Chiflones y pitones para sistemas contra incendio: chorro recto, neblina, regulables y de baja velocidad. NFPA 1964. Entrega en CDMX.',
    badge: 'NFPA 1964',
    heroTitle: 'Chiflones',
    heroAccent: 'y Pitones',
    heroSubtitle: 'Chiflones de chorro recto, neblina, combinados y automáticos para respuesta efectiva ante cualquier tipo de incendio.',
    heroDescRight: [
      'Fabricados en aluminio, latón o polipropileno de alto impacto.',
      'Selección de patrón de agua: chorro recto, neblina, lluvia y niebla fina.',
      'Compatibles con roscas NH (National Hose) y acoples Storz.',
    ],
    stats: [
      { value: '4 patrones',  label: 'Flujo disponibles'    },
      { value: 'NFPA 1964',   label: 'Certificación'        },
      { value: '100–500 gpm', label: 'Caudal por modelo'    },
      { value: '48 h',        label: 'Entrega en CDMX'      },
    ],
    caracteristicas: {
      eyebrow: 'Tipos y especificaciones',
      titleLine1: 'El chiflón correcto',
      titleLine2: 'según el tipo de fuego',
      desc: 'La selección del patrón de agua correcto es crítica para la eficiencia de la extinción y la seguridad del operador. Nuestro catálogo cubre todos los escenarios.',
      items: [
        { title: 'Chiflón combinado regulable',   desc: 'Selector de chorro recto / neblina / cierre en un solo cuerpo. El más versátil para primera intervención.' },
        { title: 'Pitón de chorro recto',         desc: 'Alcance máximo de agua: ideal para incendios de gran escala o situaciones de rescate.' },
        { title: 'Chiflón de niebla de baja velocidad', desc: 'Reduce daño por agua en archivos, equipos electrónicos y áreas de alto valor.' },
        { title: 'Pitón automático CAFS',         desc: 'Compatible con sistemas de espuma comprimida para extinción de líquidos inflamables.' },
        { title: 'Cuerpo de aluminio forjado',    desc: 'Peso reducido para uso prolongado con menor fatiga del operador.' },
        { title: 'Llave Storz incluida',          desc: 'Entregamos llave de acoplamiento con cada pedido de chiflón para instalación en gabinete.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones principales',
      titleLine1: '¿Qué tipo de chiflón',
      titleLine2: 'se usa en cada situación?',
      desc: 'La norma NFPA 1964 clasifica los chiflones según su caudal y patrón de descarga. La elección correcta impacta directamente la efectividad del sistema.',
      usos: [
        { label: 'Incendios de estructura',        desc: 'Chiflón combinado regulable con chorro recto para penetración de llamas en profundidad.' },
        { label: 'Líquidos inflamables (Clase B)', desc: 'Pitón de espuma o niebla de alta velocidad para sofocar sin desplazar el líquido.' },
        { label: 'Equipos energizados (Clase C)',  desc: 'Niebla de baja velocidad con ángulo de cono amplio para no conducir electricidad.' },
        { label: 'Rescate vehicular',              desc: 'Neblina protectora para cubrir al rescatista mientras trabaja en vehículo en llamas.' },
        { label: 'Protección de estructuras',      desc: 'Chorro recto de largo alcance para enfriar estructuras adyacentes al incendio.' },
        { label: 'Uso en carro bomba',             desc: 'Pitones de gran caudal (300+ gpm) para operaciones de bomberos desde la unidad.' },
      ],
    },
    relatedTitle: 'Otros accesorios para sistemas CI',
    faqItems: [
      { question: '¿Qué chiflón es el adecuado para el gabinete de mi edificio?', answer: 'Para gabinetes interiores de uso por ocupantes, el chiflón combinado regulable de 1½" con caudal de 100–150 gpm es el estándar. Para uso por bomberos en sistemas de 2½", se requiere un pitón de mayor caudal. Le asesoramos sin costo.' },
      { question: '¿Los chiflones necesitan mantenimiento?', answer: 'Sí. Se recomienda inspección semestral para verificar que el selector de patrón funciona correctamente, que no hay obstrucciones en la boquilla y que los acoples no tienen corrosión ni daño mecánico.' },
    ],
    waMessage: 'Hola, necesito cotizar chiflones y pitones para sistema CI en CDMX',
    ctaTitle: '¿Necesitas chiflones para tu sistema de hidrantes?',
    ctaBody: 'Te asesoramos en la selección según el tipo de riesgo y caudal disponible. Entrega en CDMX en 48 horas.',
  },

  // ── Válvulas y Adaptadores ─────────────────────────────────
  'valvulas-adaptadores': {
    metaTitle: 'Válvulas y Adaptadores CI en CDMX | Storz, Angular, Siamesa | Proyecto Red',
    metaDesc: 'Válvulas angulares, globo, mariposa, check y adaptadores Storz para sistemas contra incendio. NFPA 1963. Entrega e instalación en CDMX.',
    badge: 'NFPA 1963',
    heroTitle: 'Válvulas',
    heroAccent: 'y Adaptadores',
    heroSubtitle: 'Válvulas angulares, globo, check y adaptadores de rosca para controlar y conectar todos los componentes de tu sistema CI.',
    heroDescRight: [
      'Válvulas de bronce, hierro fundido y acero inoxidable para todos los diámetros.',
      'Adaptadores de rosca a Storz y de Storz a Storz en todos los tamaños estándar.',
      'Certificadas conforme a NFPA 1963 y compatibles con sistemas municipales CDMX.',
    ],
    stats: [
      { value: '½" – 6"',    label: 'Diámetros disponibles' },
      { value: 'NFPA 1963',  label: 'Certificación'         },
      { value: 'Bronce/Ac.', label: 'Materiales'            },
      { value: '48 h',       label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Catálogo de válvulas',
      titleLine1: 'Control preciso',
      titleLine2: 'en cada punto del sistema',
      desc: 'Las válvulas y adaptadores son los componentes de control que permiten aislar secciones del sistema, conectar mangueras y dirigir el flujo de agua.',
      items: [
        { title: 'Válvula angular de bronce 45°',  desc: 'Para gabinetes de hidrante: montaje directo sobre el ramal con giro de 45° para facilitar el manejo de manguera.' },
        { title: 'Válvula globo de paso total',    desc: 'Para tuberías de 2" a 6" con bajo coeficiente de pérdida de carga.' },
        { title: 'Válvula check vertical',         desc: 'Previene el retorno de agua contaminada al sistema municipal o tanque de almacenamiento.' },
        { title: 'Válvula de mariposa (OS&Y)',     desc: 'Válvula supervisada de señal visual para sistemas bajo NFPA 13 y 14.' },
        { title: 'Adaptador Storz M-H 2½"',       desc: 'Convierte rosca macho o hembra a acople Storz estándar de 2½".' },
        { title: 'Reductor y aumentador Storz',   desc: 'Acoplamientos de reducción para conectar mangueras de diferente diámetro.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones',
      titleLine1: '¿Dónde se instalan',
      titleLine2: 'válvulas y adaptadores CI?',
      desc: 'Cada punto de conexión, aislamiento y control de flujo en el sistema requiere la válvula o adaptador adecuado para garantizar operación eficiente y cumplimiento normativo.',
      usos: [
        { label: 'Gabinetes de hidrante',          desc: 'Válvula angular de 1½" o 2½" para control directo desde el gabinete de mangueras.' },
        { label: 'Cuartos de bombas CI',           desc: 'Válvulas globo y check para la descarga de la bomba y la línea de prueba.' },
        { label: 'Red de distribución de tuberías', desc: 'Válvulas de mariposa supervisadas en cada ramal según NFPA 13.' },
        { label: 'Conexiones de siamesa exterior', desc: 'Adaptadores de tapa y cadena para proteger las roscas de la intemperie y el vandalismo.' },
        { label: 'Entrenamiento y pruebas',        desc: 'Válvulas de prueba para simular descarga sin afectar el sistema en producción.' },
        { label: 'Adecuación de sistemas existentes', desc: 'Adaptadores para conectar equipos con roscas o diámetros no estandarizados.' },
      ],
    },
    relatedTitle: 'Otros componentes del sistema CI',
    faqItems: [
      { question: '¿Qué tipo de válvula debo usar en un gabinete de hidrante?', answer: 'La válvula angular de bronce de 45° es la más utilizada en gabinetes interiores porque su geometría permite un giro natural al abrir sin obstaculizar el despliegue de la manguera. Disponemos en 1½" y 2½".' },
      { question: '¿Los adaptadores Storz son universales?', answer: 'Los acoples Storz tienen un estándar de diámetro pero pueden variar en el paso de rosca. Para CDMX, el sistema municipal de hidrantes usa 2½" Storz. Verificamos compatibilidad antes de la entrega.' },
    ],
    waMessage: 'Hola, necesito cotizar válvulas y adaptadores CI en CDMX',
    ctaTitle: '¿Necesitas válvulas o adaptadores para tu sistema CI?',
    ctaBody: 'Describe tu necesidad y te recomendamos los componentes correctos. Entrega en CDMX con instalación disponible.',
  },

  // ── Carrete de Manguera ─────────────────────────────────────
  'carrete-manguera': {
    metaTitle: 'Carrete de Manguera CI en CDMX | Semirígida y Plana | Proyecto Red',
    metaDesc: 'Carretes de manguera contra incendio fijos y giratorios para uso en gabinetes de primera intervención. NFPA 14. Entrega e instalación en CDMX.',
    badge: 'NFPA 14',
    heroTitle: 'Carretes',
    heroAccent: 'de Manguera',
    heroSubtitle: 'Carretes fijos y giratorios que alojan mangueras semirígidas o planas listas para despliegue inmediato en primera intervención.',
    heroDescRight: [
      'Cuerpo de acero con eje central fijo o giratorio a 360°.',
      'Capacidad para manguera de 20 a 45 m de longitud en diámetros de 1" a 2".',
      'Con o sin válvula de cierre de aguja para control de flujo en el mismo carrete.',
    ],
    stats: [
      { value: '20–45 m',    label: 'Longitud de manguera'  },
      { value: '360°',       label: 'Giro disponible'       },
      { value: 'NFPA 14',    label: 'Referencia normativa'  },
      { value: '48 h',       label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos y características',
      titleLine1: 'Carrete para despliegue',
      titleLine2: 'inmediato en emergencias',
      desc: 'El carrete de manguera permite que una sola persona despliegue la manguera hacia cualquier dirección sin necesidad de ayuda, reduciendo el tiempo de respuesta a menos de 30 segundos.',
      items: [
        { title: 'Carrete giratorio 360°',         desc: 'Permite orientar la manguera hacia cualquier dirección desde un punto fijo sin doblarla.' },
        { title: 'Manguera semirígida incluida',   desc: 'Mantiene su forma tubular para despliegue por una sola persona sin riesgo de kink.' },
        { title: 'Válvula de aguja incorporada',   desc: 'Control de apertura y cierre directamente en el carrete sin necesidad de válvula adicional.' },
        { title: 'Cuerpo de acero pintado',        desc: 'Acabado electrostático en rojo RAL 3001. Resistente a humedad y ambientes industriales.' },
        { title: 'Guía y freno de manguera',       desc: 'Evita que la manguera se desdovine sin control durante el despliegue bajo presión.' },
        { title: 'Modelos para empotrar o sobreponer', desc: 'Opciones para instalación en nicho o sobre pared, según el espacio disponible.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Instalaciones recomendadas',
      titleLine1: '¿Cuándo usar',
      titleLine2: 'carrete de manguera?',
      desc: 'Los carretes de manguera son la mejor opción cuando se busca respuesta rápida por parte de personas no entrenadas como bomberos, como es el caso de los ocupantes de un edificio.',
      usos: [
        { label: 'Corredores de edificios',        desc: 'Carrete empotrado en nicho para primera respuesta por el personal de seguridad.' },
        { label: 'Naves industriales',             desc: 'Carrete giratorio sobrepuesto en columna para cobertura de toda el área de producción.' },
        { label: 'Hoteles y restaurantes',         desc: 'Carrete de diseño discreto para primera intervención sin alarmar a los huéspedes.' },
        { label: 'Escuelas y universidades',       desc: 'Fácil operación para personal no especializado en situaciones de emergencia.' },
        { label: 'Centros de datos',              desc: 'Carrete con manguera de niebla fina para uso en áreas críticas con equipo electrónico.' },
        { label: 'Estaciones de gasolina',         desc: 'Carrete con manguera de espuma para atender derrames de combustible líquido.' },
      ],
    },
    relatedTitle: 'Otros accesorios para sistemas CI',
    faqItems: [
      { question: '¿La manguera del carrete necesita prueba hidrostática?', answer: 'Sí. Al igual que las mangueras planas, la norma NFPA 1962 establece pruebas anuales de presión. Realizamos el servicio de mantenimiento anual con emisión de reporte para su expediente.' },
      { question: '¿Cuál es la diferencia entre carrete fijo y giratorio?', answer: 'El carrete fijo solo permite usar la manguera en la dirección que apunta la boquilla del carrete. El carrete giratorio gira 360° y permite orientar la manguera hacia cualquier punto del área cubierta, que es la opción más versátil y recomendada.' },
    ],
    waMessage: 'Hola, necesito cotizar carretes de manguera CI en CDMX',
    ctaTitle: '¿Necesitas carretes de manguera para tu instalación?',
    ctaBody: 'Te asesoramos en el modelo correcto según el espacio y el riesgo. Entrega e instalación en CDMX.',
  },

  // ── Toma Siamesa ────────────────────────────────────────────
  'toma-siamesa': {
    metaTitle: 'Toma Siamesa CI en CDMX | Fachada y Empotrada | Proyecto Red',
    metaDesc: 'Tomas siamesas de bronce para sistemas CI: fachada, empotrada y de piso. NFPA 14. Entrega e instalación en CDMX.',
    badge: 'NFPA 14',
    heroTitle: 'Toma',
    heroAccent: 'Siamesa',
    heroSubtitle: 'Conexión exterior para que los bomberos alimenten el sistema hidráulico del edificio desde su carro bomba en emergencias.',
    heroDescRight: [
      'Fabricadas en bronce con tapas y cadenas de seguridad incluidas.',
      'Entradas de 2½" con acople Storz o roscas NH estándar.',
      'Modelos de pared, empotrada y de piso para todos los tipos de construcción.',
    ],
    stats: [
      { value: '2½"',       label: 'Diámetro de entrada'   },
      { value: 'NFPA 14',   label: 'Certificación'         },
      { value: 'Bronce',    label: 'Material principal'    },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos y materiales',
      titleLine1: 'La puerta de entrada',
      titleLine2: 'para los bomberos',
      desc: 'La toma siamesa es el punto de conexión exterior que permite a los bomberos presurizar el sistema interno del edificio desde su carro bomba, aunque la bomba propia del edificio haya fallado.',
      items: [
        { title: 'Cuerpo de bronce forjado',      desc: 'Resistente a la corrosión y a la presión de trabajo de 150 psi durante operaciones de bombeo.' },
        { title: 'Tapas y cadenas incluidas',     desc: 'Protegen las roscas de la intemperie y el vandalismo cuando el sistema no está en uso.' },
        { title: 'Modelo de fachada (pared)',     desc: 'Montaje saliente sobre fachada del edificio con 2 entradas de 2½" y salida de 4" o 6".' },
        { title: 'Modelo empotrada',              desc: 'Se instala flush con la pared para una apariencia más limpia. Incluye tapa de acero.' },
        { title: 'Modelo de piso (floor type)',   desc: 'Para instalaciones con el sistema de tuberías corriendo bajo el nivel del piso.' },
        { title: 'Placa identificadora NOM',      desc: 'Señal "BOMBEROS - SISTEMAS CI" conforme a NOM-003-SEGOB incluida en la entrega.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Requerimientos normativos',
      titleLine1: '¿Cuándo es obligatoria',
      titleLine2: 'la toma siamesa?',
      desc: 'La NFPA 14 establece que todo edificio con sistema de mangueras de clase II o III debe contar con una toma siamesa exterior accesible para vehículos de bomberos.',
      usos: [
        { label: 'Edificios de más de 4 pisos',   desc: 'Obligatoria para garantizar que la presión del sistema se pueda mantener en pisos superiores.' },
        { label: 'Centros comerciales',           desc: 'Código de seguridad exige toma siamesa en fachada accesible desde la vía pública.' },
        { label: 'Hospitales y clínicas',         desc: 'Requerimiento de certificación de seguridad y protección civil CDMX.' },
        { label: 'Hoteles y torres residenciales', desc: 'Las tomas siamesas forman parte de la dotación obligatoria del sistema de mangueras.' },
        { label: 'Naves industriales de gran área', desc: 'Complementan la red de hidrantes exteriores para operaciones de supresión a gran escala.' },
        { label: 'Proyectos de obra nueva',       desc: 'Se instalan durante la construcción para cumplir los requerimientos del dictamen CI.' },
      ],
    },
    relatedTitle: 'Otros componentes de la red CI',
    faqItems: [
      { question: '¿Cuántas tomas siamesas necesita mi edificio?', answer: 'La NFPA 14 y el reglamento local de Protección Civil CDMX establecen que se requiere al menos una toma siamesa por cada 930 m² o fracción de superficie construida, ubicada en fachada accesible a vehículos de bomberos.' },
      { question: '¿Qué mantenimiento requiere la toma siamesa?', answer: 'Inspección semestral del estado de tapas, cadenas y roscas. Prueba anual de flujo para verificar que no existen obstrucciones. Limpieza de roscas con lubricante anticorrosivo al menos una vez al año.' },
    ],
    waMessage: 'Hola, necesito cotizar tomas siamesas para sistema CI en CDMX',
    ctaTitle: '¿Necesitas instalar tomas siamesas en tu edificio?',
    ctaBody: 'Te asesoramos en el tipo y número correcto según tu inmueble. Instalación en CDMX con documentación para Protección Civil.',
  },

  // ── Monitor Contra Incendio ─────────────────────────────────
  'monitor-incendio': {
    metaTitle: 'Monitor Contra Incendio en CDMX | Elkhart Brass | Proyecto Red',
    metaDesc: 'Monitores contra incendio manuales, eléctricos y automáticos. Distribuidor autorizado Elkhart Brass. NFPA 15. Entrega en CDMX.',
    badge: 'Elkhart Brass',
    heroTitle: 'Monitores',
    heroAccent: 'Contra Incendio',
    heroSubtitle: 'Monitores manuales y automáticos para descarga de alto caudal en instalaciones industriales, aeropuertos, terminales de combustible y plantas de proceso.',
    heroDescRight: [
      'Distribuidor autorizado de Elkhart Brass — marca líder en monitores para bomberos.',
      'Caudales de 100 a 4,500 gpm con rango de alcance de hasta 60 m.',
      'Modelos manuales, eléctricos y oscilantes automáticos para detección y supresión.',
    ],
    stats: [
      { value: '100–4,500 gpm', label: 'Caudal disponible'     },
      { value: '60 m',          label: 'Alcance máximo'        },
      { value: 'Elkhart Brass', label: 'Marca certificada'     },
      { value: 'NFPA 15',       label: 'Norma de referencia'   },
    ],
    caracteristicas: {
      eyebrow: 'Línea de monitores disponibles',
      titleLine1: 'Alta capacidad',
      titleLine2: 'para riesgos especiales',
      desc: 'Los monitores contra incendio son la solución para situaciones donde los extintores portátiles y las mangueras convencionales son insuficientes por el tamaño del incendio o el peligro para el operador.',
      items: [
        { title: 'Monitor manual de aluminio',     desc: 'Control directo del operador con movimiento horizontal y vertical. Caudales de 100 a 2,000 gpm.' },
        { title: 'Monitor eléctrico remoto',       desc: 'Control desde sala de mando o panel táctil. Ideal para áreas de difícil acceso o alta peligrosidad.' },
        { title: 'Monitor oscilante automático',   desc: 'Activa al detectar calor o humo y oscila automáticamente para cubrir el área de riesgo.' },
        { title: 'Boquilla de espuma / agua',      desc: 'Modelos con boquilla intercambiable para uso con agua, espuma AFFF o agente CAFS.' },
        { title: 'Pedestal y montaje en vehículo', desc: 'Modelos para instalación fija en pedestal, sobre muro o montaje en camión / carro bomba.' },
        { title: 'Material anticorrosión NFPA',    desc: 'Aluminio marino y acero inoxidable 316 para instalaciones en ambientes salinos o químicos.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Instalaciones que lo requieren',
      titleLine1: '¿Cuándo necesitas',
      titleLine2: 'un monitor contra incendio?',
      desc: 'Los monitores se utilizan cuando el volumen de agua requerido, la peligrosidad del ambiente o las dimensiones del área superan la capacidad de una manguera operada manualmente.',
      usos: [
        { label: 'Terminales de combustible',      desc: 'Monitor fijo con espuma AFFF para derrames y fuegos de tanques de almacenamiento.' },
        { label: 'Refinerías y petroquímicas',     desc: 'Monitores eléctricos remotos en áreas clasificadas donde no puede entrar personal.' },
        { label: 'Muelles y terminales portuarios', desc: 'Monitores de gran caudal para incendios en embarcaciones y cargas a granel.' },
        { label: 'Aeropuertos (ARFF)',             desc: 'Monitores de carros ARFF y unidades de rescate para respuesta en pista y hangares.' },
        { label: 'Plantas de manufactura pesada', desc: 'Monitor fijo como primera línea de defensa en prensas, hornos y líneas de pintura.' },
        { label: 'Helipuertos',                   desc: 'Monitor AFFF en posición fija para cubrir el área de aterrizaje en caso de emergencia.' },
      ],
    },
    relatedTitle: 'Otros componentes de sistemas CI',
    faqItems: [
      { question: '¿Elkhart Brass tiene garantía en México?', answer: 'Sí. Como distribuidores autorizados, ofrecemos garantía de fábrica de 1 a 5 años según el modelo, con soporte técnico y refacciones disponibles en CDMX.' },
      { question: '¿Cuánta presión de agua necesita un monitor?', answer: 'La mayoría de los monitores requieren entre 80 y 150 psi de presión de entrada. El sistema hidráulico (bomba, tuberías y válvulas) debe estar dimensionado para mantener esa presión al caudal nominal del monitor.' },
      { question: '¿Realizan instalación de monitores?', answer: 'Sí. Realizamos instalación completa incluyendo pedestal o montaje, conexión hidráulica, prueba de flujo y documentación conforme a NFPA 15.' },
    ],
    waMessage: 'Hola, necesito cotizar monitores contra incendio Elkhart Brass en CDMX',
    ctaTitle: '¿Necesitas monitores para tu instalación industrial?',
    ctaBody: 'Somos distribuidores autorizados de Elkhart Brass. Te asesoramos en el modelo correcto según tu riesgo y caudal requerido.',
  },
}
