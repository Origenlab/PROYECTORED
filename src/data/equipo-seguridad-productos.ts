// ============================================================
// src/data/equipo-seguridad-productos.ts
// Datos de Nivel 4 — Equipo de Seguridad Industrial (EPP)
// Genera: /equipo-seguridad/proteccion-craneal/,
//         /equipo-seguridad/proteccion-visual/,
//         /equipo-seguridad/proteccion-respiratoria/,
//         /equipo-seguridad/proteccion-manos/,
//         /equipo-seguridad/trabajo-alturas/,
//         /equipo-seguridad/proteccion-auditiva/
// ============================================================

export interface ProductoEquipoSeguridadData {
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

export const EQUIPO_SEGURIDAD_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'proteccion-craneal',       label: 'Protección Craneal',         badge: 'NOM-115-STPS' },
  { slug: 'proteccion-visual',        label: 'Protección Visual',          badge: 'NOM-106-STPS' },
  { slug: 'proteccion-respiratoria',  label: 'Protección Respiratoria',    badge: 'NOM-116-STPS' },
  { slug: 'proteccion-manos',         label: 'Protección de Manos',        badge: 'NOM-138-STPS' },
  { slug: 'trabajo-alturas',          label: 'Trabajo en Alturas',         badge: 'NOM-009-STPS' },
  { slug: 'proteccion-auditiva',      label: 'Protección Auditiva',        badge: 'NOM-011-STPS' },
]

export const EQUIPO_SEGURIDAD_PAGES: Record<string, ProductoEquipoSeguridadData> = {

  // ── Protección Craneal ──────────────────────────────────────
  'proteccion-craneal': {
    metaTitle: 'Cascos de Seguridad Industrial en CDMX | NOM-115-STPS | Proyecto Red',
    metaDesc: 'Cascos de seguridad industrial clases A, B y C. Dieléctricos, antichispa y ventilados. Certificación NOM-115-STPS. Entrega en CDMX.',
    badge: 'NOM-115-STPS',
    heroTitle: 'Protección',
    heroAccent: 'Craneal',
    heroSubtitle: 'Cascos de seguridad industrial certificados NOM-115-STPS para construcción, manufactura, energía eléctrica y trabajo en alturas.',
    heroDescRight: [
      'Clase A (baja tensión), Clase B (alta tensión dieléctrico) y Clase C (conductivo) según el riesgo.',
      'Cascos con y sin ventilación, ratchet y driza, con portaprotector facial y de audición.',
      'Marcas certificadas: 3M, Honeywell Fibre-Metal, MSA Safety y Delta Plus.',
    ],
    stats: [
      { value: 'NOM-115',   label: 'Certificación STPS'    },
      { value: 'Clase A/B/C', label: 'Clases disponibles'  },
      { value: '4 marcas',  label: 'Certificadas'          },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Características y clases',
      titleLine1: 'Protección para',
      titleLine2: 'cada tipo de riesgo',
      desc: 'La selección del casco correcto depende del riesgo eléctrico, mecánico y de impacto del área de trabajo. La NOM-017-STPS-2008 exige la identificación del riesgo antes de elegir el EPP.',
      items: [
        { title: 'Clase A — Impacto y baja tensión', desc: 'Protección mecánica y dieléctrica a 2,200 V. Para construcción y manufactura en general.' },
        { title: 'Clase B — Alta tensión',            desc: 'Dieléctrico hasta 20,000 V. Para electricistas y trabajos en líneas de transmisión.' },
        { title: 'Clase C — Sin dieléctrico',         desc: 'Para trabajo en espacios confinados y áreas sin riesgo eléctrico que requieren ventilación.' },
        { title: 'Sistema de suspensión ratchet',     desc: 'Ajuste de 6.5 a 8 pulgadas sin herramientas para un ajuste rápido y seguro.' },
        { title: 'Porta accesorios integrado',        desc: 'Canales laterales para montar protector facial, de audición y lámparas de minero.' },
        { title: 'Colores identificables por área',  desc: 'Blanco (supervisión), amarillo (operativo), rojo (emergencias), azul (mantenimiento).' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Sectores de aplicación',
      titleLine1: '¿Cuándo es obligatorio',
      titleLine2: 'el casco de seguridad?',
      desc: 'La NOM-017-STPS-2008 exige el casco en todo trabajo donde exista riesgo de impacto en la cabeza por caída de objetos, golpes contra estructuras fijas o riesgo eléctrico.',
      usos: [
        { label: 'Construcción y obra civil',        desc: 'Obligatorio para todo el personal en obra, incluyendo visitas y supervisores.' },
        { label: 'Plantas industriales',             desc: 'En toda área de manufactura con riesgo de impacto por materiales o maquinaria.' },
        { label: 'Trabajos eléctricos',              desc: 'Casco Clase B para electricistas que trabajan en áreas energizadas.' },
        { label: 'Minería y extracción',             desc: 'Cascos con luminaria integrada y Clase A para trabajo en socavón.' },
        { label: 'Trabajo en alturas',               desc: 'Casco con mentonera para evitar pérdida durante caída o trabajo en andamio.' },
        { label: 'Manejo de materiales',             desc: 'Almacenistas y operadores de montacargas en bodegas con estanterías altas.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿Cada cuánto se debe reemplazar el casco?', answer: 'La vida útil de un casco industrial es de 2 a 5 años a partir de la fecha de fabricación (marcada en el interior), o inmediatamente después de recibir un impacto severo. La degradación del plástico por UV también puede reducir la vida útil en exteriores.' },
      { question: '¿El casco protege contra electricidad de alta tensión?', answer: 'Solo los cascos Clase B están certificados para alta tensión hasta 20,000 V. El Clase A solo protege hasta 2,200 V. Para trabajos eléctricos, siempre verifique la clase del casco antes de usarlo.' },
    ],
    waMessage: 'Hola, necesito cotizar cascos de seguridad industrial en CDMX',
    ctaTitle: '¿Necesitas dotar a tu personal con cascos de seguridad?',
    ctaBody: 'Te recomendamos la clase correcta según el riesgo de cada área. Entrega en CDMX en 48 horas.',
  },

  // ── Protección Visual ───────────────────────────────────────
  'proteccion-visual': {
    metaTitle: 'Lentes y Caras de Seguridad Industrial CDMX | NOM-106-STPS | Proyecto Red',
    metaDesc: 'Lentes de seguridad, goggles y caretas protectoras contra impacto, salpicaduras, UV y polvo. NOM-106-STPS. Entrega en CDMX.',
    badge: 'NOM-106-STPS',
    heroTitle: 'Protección',
    heroAccent: 'Visual',
    heroSubtitle: 'Lentes de seguridad, goggles y caretas protectoras contra impacto, salpicaduras químicas, radiación UV y polvo en ambientes industriales.',
    heroDescRight: [
      'Lentes con lentes policarbonato resistente a impacto conforme a ANSI Z87.1.',
      'Goggles herméticos para protección contra líquidos corrosivos y vapores.',
      'Caretas de soldador, rectificado y protección química con diferentes tonos de filtro.',
    ],
    stats: [
      { value: 'NOM-106',   label: 'Certificación STPS'    },
      { value: 'ANSI Z87.1', label: 'Estándar de impacto' },
      { value: '5 tipos',   label: 'Protección disponible' },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos de protección ocular',
      titleLine1: 'Visión protegida',
      titleLine2: 'en cada área de trabajo',
      desc: 'Las lesiones oculares son una de las causas más comunes de incapacidad laboral. La selección correcta del protector visual depende del tipo de riesgo específico del trabajo.',
      items: [
        { title: 'Lentes de seguridad policarbonato', desc: 'Protección contra impacto de partículas. Estándar para manufactura, construcción y manejo de materiales.' },
        { title: 'Googles herméticos químicos',    desc: 'Sello perimetral para protección total contra salpicaduras de líquidos corrosivos.' },
        { title: 'Careta de soldador con filtro',  desc: 'Filtros de tono 5 a 14 para soldadura MIG, TIG, oxiacetilénica y por arco.' },
        { title: 'Googles de rectificado',         desc: 'Lentes de vidrio templado para protección contra chispas y partículas de alta energía.' },
        { title: 'Lentes de tono oscuro UV',       desc: 'Para trabajo en exterior con exposición prolongada a radiación UV.' },
        { title: 'Careta de protección facial completa', desc: 'Para manejo de materiales peligrosos, químicos y riesgo de salpicaduras en cara completa.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Riesgos y aplicaciones',
      titleLine1: '¿Cuándo es obligatoria',
      titleLine2: 'la protección visual?',
      desc: 'La NOM-017-STPS-2008 exige protección visual en toda tarea con riesgo de partículas volantes, salpicaduras de líquidos, radiación intensa o polvo abrasivo.',
      usos: [
        { label: 'Soldadura y corte',              desc: 'Careta con filtro apropiado para el proceso y lentes de seguridad debajo.' },
        { label: 'Manejo de químicos',             desc: 'Googles herméticos como mínimo; careta facial completa en operaciones de alto riesgo.' },
        { label: 'Rectificado y esmerilado',       desc: 'Careta o googles de vidrio templado para protección contra chispas.' },
        { label: 'Carpintería y construcción',     desc: 'Lentes de seguridad para serrín, polvo y virutas de corte.' },
        { label: 'Laboratorios',                   desc: 'Googles herméticos y careta para trabajo con reactivos y muestras biológicas.' },
        { label: 'Trabajo en exterior',            desc: 'Lentes con protección UV para exposición prolongada al sol.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿Cuál es la diferencia entre lentes de seguridad y googles?', answer: 'Los lentes de seguridad protegen contra impactos de frente pero tienen aberturas laterales. Los googles tienen un sello perimetral y protegen contra salpicaduras de líquidos y vapores desde cualquier ángulo. Para riesgo químico, siempre se requieren googles herméticos.' },
      { question: '¿Los lentes se pueden usar con anteojos graduados?', answer: 'Sí. Tenemos modelos sobrecolocables (OTG - Over The Glasses) diseñados para usarse sobre anteojos graduados sin reducir la protección.' },
    ],
    waMessage: 'Hola, necesito cotizar protección visual industrial en CDMX',
    ctaTitle: '¿Necesitas protección visual para tu equipo de trabajo?',
    ctaBody: 'Te recomendamos el tipo correcto según el riesgo. Entrega en CDMX en 48 horas.',
  },

  // ── Protección Respiratoria ─────────────────────────────────
  'proteccion-respiratoria': {
    metaTitle: 'Respiradores y Mascarillas Industriales CDMX | NOM-116-STPS | Proyecto Red',
    metaDesc: 'Respiradores de media y cara completa, auto-contenidos y mascarillas para polvo, gases y vapores. NOM-116-STPS / NIOSH. Entrega en CDMX.',
    badge: 'NOM-116-STPS',
    heroTitle: 'Protección',
    heroAccent: 'Respiratoria',
    heroSubtitle: 'Respiradores para partículas, gases, vapores y atmósferas deficientes en oxígeno. Protección certificada para cada tipo de ambiente industrial.',
    heroDescRight: [
      'Mascarillas desechables N95/N100 y respiradores reutilizables 3M y Honeywell.',
      'Filtros intercambiables para polvo, gases ácidos, orgánicos, vapores y combinados.',
      'Equipos auto-contenidos (SCBA) para rescate y atmósferas IDLH.',
    ],
    stats: [
      { value: 'NOM-116',   label: 'Certificación STPS'    },
      { value: 'NIOSH',     label: 'Certificación USA'     },
      { value: 'N95–N100',  label: 'Filtros disponibles'   },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos de protección respiratoria',
      titleLine1: 'El filtro correcto',
      titleLine2: 'para cada contaminante',
      desc: 'La protección respiratoria incorrecta no protege y puede generar una falsa sensación de seguridad. La selección debe basarse en la medición del contaminante y el factor de protección asignado.',
      items: [
        { title: 'Mascarilla desechable N95',      desc: 'Para polvo fino, fibras y aerosoles no oleosos. Filtración mínima del 95%.' },
        { title: 'Respirador de media cara reutilizable', desc: 'Con filtros intercambiables. Para polvo, gases ácidos, orgánicos o combinados según el filtro.' },
        { title: 'Respirador de cara completa',   desc: 'Protección visual y respiratoria simultánea para ambiente con gases o aerosoles tóxicos.' },
        { title: 'Filtro P100 (polvo y niebla)',  desc: 'Filtración del 99.97% de partículas sólidas y líquidas. Para amianto, plomo y sílice.' },
        { title: 'Filtro OV/AG (orgánicos y ácidos)', desc: 'Para solventes, pinturas, gases ácidos y vapores en pintura, impresión y química.' },
        { title: 'SCBA auto-contenido (ERA)',      desc: 'Para rescate y trabajo en atmósferas IDLH (Immediately Dangerous to Life). NFPA 1981.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Sectores y aplicaciones',
      titleLine1: '¿Cuándo es obligatorio',
      titleLine2: 'el respirador industrial?',
      desc: 'La NOM-017-STPS exige protección respiratoria cuando la concentración del contaminante supera los valores límite permisibles (TLV) y las medidas de control en la fuente son insuficientes.',
      usos: [
        { label: 'Pintura y recubrimientos',       desc: 'Respirador con filtro OV para solventes y filtro P100 si hay pigmentos de plomo.' },
        { label: 'Construcción y remodelación',    desc: 'N95 o P100 para polvo de concreto, sílice, fibra de vidrio y amianto.' },
        { label: 'Manufactura química',            desc: 'Respirador cara completa con filtros específicos al contaminante del proceso.' },
        { label: 'Soldadura',                      desc: 'Filtros para humos de soldadura con componente P100 + filtro de vapores metálicos.' },
        { label: 'Rescate y emergencias',          desc: 'SCBA para rescatistas y brigadistas en atmósferas con gases tóxicos o deficiencia de O₂.' },
        { label: 'Laboratorios',                   desc: 'Respirador de media cara o cara completa para manejo de reactivos y solventes.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿Cuánto duran los filtros de un respirador reutilizable?', answer: 'Los filtros para partículas (P100) deben reemplazarse cuando se saturen, estén mojados o dañados. Los filtros para gases tienen vida útil de 40 horas de uso o según el olor del contaminante sea perceptible. Los cartuchos combinados deben reemplazarse más frecuentemente.' },
      { question: '¿La mascarilla quirúrgica protege contra gases industriales?', answer: 'No. La mascarilla quirúrgica solo filtra bacterias y partículas grandes. No protege contra vapores, gases ni partículas finas. Para ambientes industriales siempre se requiere un respirador certificado N95 como mínimo para partículas.' },
    ],
    waMessage: 'Hola, necesito cotizar respiradores industriales en CDMX',
    ctaTitle: '¿Necesitas protección respiratoria para tu personal?',
    ctaBody: 'Te asesoramos en la selección correcta según el contaminante. Entrega en CDMX en 48 horas.',
  },

  // ── Protección de Manos ─────────────────────────────────────
  'proteccion-manos': {
    metaTitle: 'Guantes de Seguridad Industrial CDMX | NOM-138-STPS | Proyecto Red',
    metaDesc: 'Guantes de seguridad industrial para corte, químicos, calor, vibración y electricidad. NOM-138-STPS / EN 388. Entrega en CDMX.',
    badge: 'NOM-138-STPS',
    heroTitle: 'Protección',
    heroAccent: 'de Manos',
    heroSubtitle: 'Guantes industriales para protección contra cortes, productos químicos, calor, electricidad y vibración en todo tipo de ambiente de trabajo.',
    heroDescRight: [
      'Materiales: nitrilo, neopreno, cuero, Kevlar, látex y PVC según el riesgo.',
      'Clasificados conforme a EN 388 (mecánico), EN 374 (químico) y EN 407 (térmico).',
      'Marcas 3M, Ansell, Showa y Honeywell disponibles en stock en CDMX.',
    ],
    stats: [
      { value: 'NOM-138',   label: 'Certificación STPS'    },
      { value: 'EN 388/374/407', label: 'Normas europeas'  },
      { value: '10+ tipos', label: 'Materiales disponibles'},
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos de guantes disponibles',
      titleLine1: 'El guante correcto',
      titleLine2: 'para cada tipo de trabajo',
      desc: 'Las manos son el área corporal más expuesta a lesiones en el trabajo. La selección incorrecta del guante puede ser tan peligrosa como no usar ninguno.',
      items: [
        { title: 'Guante de nitrilo (multiuso)',   desc: 'Resistente a aceites, grasas y solventes ligeros. El más versátil para manufactura general.' },
        { title: 'Guante de cuero (mecánico)',     desc: 'Para manejo de materiales, herramientas y abrasión. Resistente a punción y corte moderado.' },
        { title: 'Guante de Kevlar (anticorte)',   desc: 'Nivel de corte A4-A9. Para manejo de vidrio, lámina, cuchillos y materiales filosos.' },
        { title: 'Guante de neopreno (químico)',   desc: 'Para ácidos, bases y solventes. Revisar ficha técnica para cada producto químico.' },
        { title: 'Guante anticalórico',            desc: 'Para manejo de objetos calientes, hornos y piezas de fundición hasta 250°C.' },
        { title: 'Guante dieléctrico (eléctrico)', desc: 'Clases 00 a 4 para trabajos eléctricos desde 500 V hasta 40,000 V de prueba.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones por sector',
      titleLine1: '¿En qué trabajos',
      titleLine2: 'son obligatorios los guantes?',
      desc: 'La NOM-017-STPS-2008 exige protección de manos en cualquier tarea con riesgo de corte, quemadura, absorción química o lesión por impacto.',
      usos: [
        { label: 'Manejo de vidrio y lámina',      desc: 'Guante anticorte Kevlar nivel A4 o superior obligatorio en todo el proceso.' },
        { label: 'Manejo de químicos',             desc: 'Guante de neopreno o PVC según la compatibilidad química con el producto.' },
        { label: 'Soldadura',                      desc: 'Guante de cuero tipo "manatee" para protección contra salpicaduras y calor.' },
        { label: 'Electricidad',                   desc: 'Guante dieléctrico de la clase correspondiente al voltaje del sistema.' },
        { label: 'Alimentos y farmacéutica',       desc: 'Guantes de nitrilo sin polvo certificados para contacto con alimentos (FDA).' },
        { label: 'Construcción y obra',            desc: 'Guante de cuero o nitrilo para manejo de herramientas, concreto y materiales.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿Cómo se qué nivel de corte necesito?', answer: 'El nivel de corte (A1 al A9) se selecciona según el tipo de material y la fuerza de corte esperada. Para hoja y vidrio delgados: A2-A4. Para lámina metálica y operaciones de alta velocidad: A6-A9. Le asesoramos sin costo.' },
      { question: '¿Los guantes químicos protegen contra todo tipo de producto?', answer: 'No. Cada material de guante tiene diferente permeación y resistencia según el químico. Siempre consulte la tabla de compatibilidad química del fabricante para su producto específico antes de seleccionar el guante.' },
    ],
    waMessage: 'Hola, necesito cotizar guantes de seguridad industrial en CDMX',
    ctaTitle: '¿Necesitas guantes industriales para tu equipo?',
    ctaBody: 'Te asesoramos en el tipo correcto según el riesgo. Entrega en CDMX en 48 horas con opciones de kit completo de EPP.',
  },

  // ── Trabajo en Alturas ──────────────────────────────────────
  'trabajo-alturas': {
    metaTitle: 'Equipo para Trabajo en Alturas CDMX | NOM-009-STPS | Proyecto Red',
    metaDesc: 'Arneses, conectores, líneas de vida y anclajes para trabajo en alturas. Certificación NOM-009-STPS y ANSI Z359. Entrega e instalación en CDMX.',
    badge: 'NOM-009-STPS',
    heroTitle: 'Equipo para',
    heroAccent: 'Trabajo en Alturas',
    heroSubtitle: 'Arneses de cuerpo completo, conectores, líneas de vida y sistemas de detención de caída para trabajo en techos, andamios y estructuras.',
    heroDescRight: [
      'Arneses clase A y clase P certificados NOM-009-STPS y ANSI Z359.',
      'Sistemas de detención de caída: retráctil, línea de vida horizontal y vertical.',
      'Puntos de anclaje, mosquetones, absorbedores de impacto y equipo de rescate.',
    ],
    stats: [
      { value: 'NOM-009',   label: 'Certificación STPS'    },
      { value: 'ANSI Z359', label: 'Estándar USA'          },
      { value: '5,000 lbf', label: 'Resistencia de anclaje'},
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Componentes del sistema',
      titleLine1: 'Sistema completo',
      titleLine2: 'de protección contra caída',
      desc: 'Un sistema de protección contra caída requiere tres componentes: punto de anclaje, conector y arnés. La omisión de cualquiera de los tres invalida la protección.',
      items: [
        { title: 'Arnés de cuerpo completo Clase A', desc: 'Para detención de caída. Punto de conexión dorsal en el centro de la espalda.' },
        { title: 'Arnés Clase P (posicionamiento)', desc: 'Para trabajo en posición con apoyo lateral. Puntos de conexión laterales y dorsal.' },
        { title: 'Retráctil (self-retracting lifeline)', desc: 'Limita la caída libre a menos de 30 cm. Recomendado para techos y estructuras metálicas.' },
        { title: 'Línea de vida horizontal',        desc: 'Cable o cuerda tensada entre dos puntos de anclaje para trabajo en movimiento horizontal.' },
        { title: 'Absorbedor de impacto tipo Y',    desc: 'Disminuye la fuerza de parada en la caída a menos de 1,800 lbf. Obligatorio en alturas > 1.8 m.' },
        { title: 'Anclajes portátiles y de rieles', desc: 'Puntos de anclaje certificados a 5,000 lbf para vigas, losas y estructuras sin punto fijo.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Trabajos que lo requieren',
      titleLine1: '¿Cuándo es obligatorio',
      titleLine2: 'el equipo anticaída?',
      desc: 'La NOM-009-STPS establece que toda persona que trabaje a 1.8 m o más sobre el nivel del piso debe contar con sistema de protección contra caídas.',
      usos: [
        { label: 'Techos e impermeabilización',    desc: 'Arnés + retráctil obligatorio para cualquier trabajo sobre cubierta inclinada o plana.' },
        { label: 'Construcción en estructura',     desc: 'Sistema de línea de vida horizontal en columnas y vigas de acero.' },
        { label: 'Mantenimiento industrial',       desc: 'Torres, silos, tanques y equipos de proceso que requieren acceso para mantenimiento.' },
        { label: 'Telecomunicaciones y antenas',  desc: 'Trabajo en torres de radio, telecomunicaciones y antenas de telefonía.' },
        { label: 'Instalaciones eléctricas',       desc: 'Trabajo en transformadores, tableros en altura y líneas aéreas.' },
        { label: 'Limpieza de fachadas',           desc: 'Plataformas colgantes y trabajos de alpinismo industrial en edificios.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿El arnés tiene fecha de caducidad?', answer: 'Sí. La NOM-009-STPS y los fabricantes establecen una vida útil máxima de 10 años desde la fecha de fabricación y 5 años desde la primera vez de uso. También debe retirarse inmediatamente si ha detenido una caída, aunque no tenga daño visible.' },
      { question: '¿Se necesita capacitación para usar el equipo anticaída?', answer: 'Sí. La NOM-009-STPS exige que el trabajador reciba capacitación en uso, inspección y limitaciones del equipo antes de trabajar en alturas. Ofrecemos cursos de trabajo en alturas con constancia DC-3.' },
    ],
    waMessage: 'Hola, necesito cotizar equipo para trabajo en alturas en CDMX',
    ctaTitle: '¿Necesitas equipo anticaída para tu personal?',
    ctaBody: 'Te asesoramos en el sistema completo: arnés, conector y anclaje. Entrega en CDMX con capacitación disponible.',
  },

  // ── Protección Auditiva ─────────────────────────────────────
  'proteccion-auditiva': {
    metaTitle: 'Protección Auditiva Industrial CDMX | NOM-011-STPS | Proyecto Red',
    metaDesc: 'Tapones auditivos y orejeras de reducción de ruido para entornos industriales. NOM-011-STPS / ANSI S3.19. Entrega en CDMX.',
    badge: 'NOM-011-STPS',
    heroTitle: 'Protección',
    heroAccent: 'Auditiva',
    heroSubtitle: 'Tapones auditivos desechables y reutilizables y orejeras de copa para protección contra ruido industrial por encima de 85 dB.',
    heroDescRight: [
      'Tapones de espuma con NRR (Noise Reduction Rating) de 28 a 33 dB.',
      'Orejeras de copa con atenuación de 22 a 31 dB en diferentes diademas.',
      'Protección doble (tapones + orejeras) para entornos de más de 105 dB.',
    ],
    stats: [
      { value: 'NOM-011',   label: 'Certificación STPS'    },
      { value: '85+ dB',    label: 'Nivel de acción'       },
      { value: '33 dB NRR', label: 'Atenuación máxima'     },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos de protección auditiva',
      titleLine1: 'Protección correcta',
      titleLine2: 'según el nivel de ruido',
      desc: 'La pérdida auditiva por ruido es irreversible y acumulativa. La NOM-011-STPS establece límites de exposición y la obligatoriedad de protección cuando el ruido supera los 85 dB en jornada de 8 horas.',
      items: [
        { title: 'Tapón de espuma desechable',     desc: 'NRR 32 dB. El más cómodo para uso continuo y en calor. Descartable por turno.' },
        { title: 'Tapón reutilizable con cuerda',  desc: 'De silicón o neopreno. Lavable y durable. Para uso intermitente con acceso rápido.' },
        { title: 'Tapón moldeado a medida',        desc: 'Para personal con uso diario intensivo. Mayor comodidad y ajuste perfecto.' },
        { title: 'Orejera de copa estándar',       desc: 'Diadema sobre la cabeza con NRR 25–27 dB. Para trabajo intermitente en ruido alto.' },
        { title: 'Orejera con diadema para casco', desc: 'Se monta en los canales laterales del casco. Para construcción y manufactura.' },
        { title: 'Orejera electrónica',            desc: 'Atenúa el ruido pero amplifica la voz para comunicación en el ambiente de trabajo.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Sectores y niveles de ruido',
      titleLine1: '¿Cuándo es obligatoria',
      titleLine2: 'la protección auditiva?',
      desc: 'La NOM-011-STPS establece un límite de 90 dB para una jornada de 8 horas. Por encima de 85 dB se requiere protección y programa de conservación auditiva.',
      usos: [
        { label: 'Manufactura de metales',         desc: 'Prensas, troqueladoras y cortadoras generan 95–115 dB. Protección obligatoria.' },
        { label: 'Construcción',                   desc: 'Martillo neumático: 115 dB. Rotomartillo: 95–100 dB. Uso continuo requerido.' },
        { label: 'Plantas de concreto y cerámica', desc: 'Mezcladoras y tolvas generan ruido continuo por encima de 90 dB.' },
        { label: 'Carpintería industrial',         desc: 'Ruteadoras y sierras circulares: 100–105 dB. Tapones NRR 32 o protección doble.' },
        { label: 'Generación de energía',          desc: 'Plantas de generación y cuartos de turbinas: 95–110 dB según el equipo.' },
        { label: 'Aeropuertos y rampa',            desc: 'Personal de rampa expuesto a motores de turbina: 115–130 dB. Protección doble.' },
      ],
    },
    relatedTitle: 'Otros equipos de protección personal',
    faqItems: [
      { question: '¿Cómo sé qué nivel de NRR necesito?', answer: 'Se calcula según el nivel de ruido medido en la fuente (en dB) y el tiempo de exposición. Para 95 dB de ruido en jornada de 8 horas, se requiere un NRR mínimo de 10 dB. Le hacemos el cálculo sin costo si nos da el nivel de ruido de su instalación.' },
      { question: '¿Con qué frecuencia deben reemplazarse los tapones?', answer: 'Los tapones desechables deben usarse una sola vez y desecharse al término del turno. Los tapones reutilizables deben lavarse diariamente con agua y jabón y reemplazarse cada 30 días o antes si se notan endurecidos, agrietados o deformados.' },
    ],
    waMessage: 'Hola, necesito cotizar protección auditiva industrial en CDMX',
    ctaTitle: '¿Necesitas protección auditiva para tu personal?',
    ctaBody: 'Te recomendamos el tipo y NRR correcto según el nivel de ruido de tu instalación. Entrega en CDMX en 48 horas.',
  },
}
