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

// ============================================================
// Variante / modelo disponible por producto
// Aparece en la sección 0 (antes de Características)
// ============================================================
export interface VarianteEquipoSeguridad {
  nombre: string
  badge?: string
  desc: string
  specs: string        // Línea: material · norma · características
  waText: string       // Mensaje pre-llenado para WhatsApp
}

export interface ProductoEquipoSeguridadData {
  metaTitle: string
  metaDesc: string
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Sección 0 — Modelos / opciones disponibles (opcional)
  variantes?: VarianteEquipoSeguridad[]
  variantesEyebrow?: string
  variantesTitleLine1?: string
  variantesTitleLine2?: string
  variantesBodyPara?: string

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
    variantesEyebrow: 'Modelos disponibles',
    variantesTitleLine1: 'Selecciona la clase',
    variantesTitleLine2: 'de protección correcta',
    variantesBodyPara: 'Todos los cascos cumplen con NOM-115-STPS y NOM-017-STPS. Stock permanente en CDMX con documentación técnica completa para tu expediente de seguridad.',
    variantes: [
      {
        nombre: 'Casco Clase A — Impacto y Baja Tensión',
        badge: 'Construcción',
        desc: 'Protección contra impacto mecánico y riesgo eléctrico hasta 2,200 V. El más versátil para construcción, manufactura y obras civiles. Disponible en amarillo, blanco y rojo.',
        specs: 'Polietileno de alta densidad · NOM-115-STPS · Ratchet/Driza',
        waText: 'Hola, quiero cotizar cascos de seguridad Clase A en CDMX',
      },
      {
        nombre: 'Casco Clase B — Dieléctrico Alta Tensión',
        badge: 'Electricistas',
        desc: 'Casco dieléctrico certificado hasta 20,000 V para trabajos en líneas de alta tensión, subestaciones y redes de distribución. Protección para electricistas y cuadrillas de mantenimiento eléctrico.',
        specs: 'Fibra de vidrio reforzada · NOM-115-STPS · Dieléctrico 20 kV',
        waText: 'Hola, quiero cotizar cascos Clase B dieléctricos en CDMX',
      },
      {
        nombre: 'Casco Clase C — Ventilado Sin Dieléctrico',
        badge: 'Espacios confinados',
        desc: 'Casco ventilado sin protección dieléctrica para trabajo en espacios confinados, minas y áreas sin riesgo eléctrico. Mayor circulación de aire en ambientes calurosos.',
        specs: 'Polietileno · NOM-115-STPS · Ventilación frontal y lateral',
        waText: 'Hola, quiero cotizar cascos Clase C ventilados en CDMX',
      },
      {
        nombre: 'Casco con Mentonera para Alturas',
        badge: 'Trabajo en alturas',
        desc: 'Casco Clase A con mentonera desmontable para evitar pérdida durante caídas en trabajos en alturas, andamios y plataformas. Arnés de 4 puntos reforzado.',
        specs: 'Polietileno · NOM-115-STPS · Arnés 4 puntos + mentonera',
        waText: 'Hola, quiero cotizar cascos con mentonera para trabajo en alturas en CDMX',
      },
      {
        nombre: 'Casco tipo Bump Cap (Casquete Ligero)',
        badge: 'Bajo riesgo',
        desc: 'Casquete ligero para riesgo bajo sin impactos severos. Ideal para almacenes, oficinas industriales y áreas de bajo riesgo donde se requiere protección mínima contra golpes.',
        specs: 'Plástico ABS · NOM-115-STPS · Peso ultra ligero 200g',
        waText: 'Hola, quiero cotizar cascos tipo Bump Cap en CDMX',
      },
      {
        nombre: 'Kit Casco + Accesorios (Facial + Orejeras)',
        badge: 'Kit completo',
        desc: 'Casco Clase A completo con protector facial transparente y orejeras de copa integradas. Solución todo-en-uno para protección de cabeza, cara y audición en manufactura de metales.',
        specs: 'Casco + portafacial + orejeras · NOM-115 + 106 + 011',
        waText: 'Hola, quiero cotizar kit de casco con accesorios en CDMX',
      },
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
    variantesEyebrow: 'Modelos de protección',
    variantesTitleLine1: 'Elige el protector visual',
    variantesTitleLine2: 'para tu área de trabajo',
    variantesBodyPara: 'Todos cumplen con NOM-106-STPS y NOM-017-STPS. Stock disponible en CDMX con asesoría técnica para la selección correcta.',
    variantes: [
      {
        nombre: 'Lentes de Seguridad Policarbonato Claro',
        badge: 'Básico',
        desc: 'Lentes transparentes de policarbonato resistentes a impacto. La opción estándar para manufactura, construcción y manejo de materiales. Disponibles con marco de acetato o nylon.',
        specs: 'Policarbonato 2.2mm · ANSI Z87.1 · Frame estándar',
        waText: 'Hola, quiero cotizar lentes de seguridad policarbonato claro en CDMX',
      },
      {
        nombre: 'Lentes Oscuros con Protección UV',
        badge: 'Exterior',
        desc: 'Lentes oscuros (tono humo) con filtro UV 100% para trabajo en exterior con exposición prolongada al sol. Ideales para jardinería, construcción civil y operaciones al aire libre.',
        specs: 'Policarbonato tono humo · UV 100% · ANSI Z87.1',
        waText: 'Hola, quiero cotizar lentes oscuros con UV en CDMX',
      },
      {
        nombre: 'Goggles Herméticos Antiquímicos',
        badge: 'Químicos',
        desc: 'Goggles con sello perimetral completo para protección contra salpicaduras de ácidos, bases y solventes. Ventilación indirecta para prevenir empañamiento. Obligatorio para manejo de químicos.',
        specs: 'Policarbonato · Sello hermético · Ventilación indirecta',
        waText: 'Hola, quiero cotizar goggles herméticos antiquímicos en CDMX',
      },
      {
        nombre: 'Goggles de Rectificado (Vidrio Templado)',
        badge: 'Esmerilado',
        desc: 'Goggles con lentes de vidrio templado para protección contra chispas y partículas de alta energía en esmerilado, rectificado y operaciones de corte. Mayor resistencia a choque térmico que el policarbonato.',
        specs: 'Vidrio templado · Marcos reforzados · Anti-empañante',
        waText: 'Hola, quiero cotizar goggles de rectificado en CDMX',
      },
      {
        nombre: 'Careta de Soldador Autooscurecente',
        badge: 'Soldadura',
        desc: 'Careta con pantalla de cristal líquido autooscurecente (rango 4-13). Se oscurece automáticamente al detectar el arco. Ideal para soldadura MIG, TIG y electrodo para mayor comodidad y seguridad.',
        specs: 'Cristal líquido autooscurecente · Rango 4-13 · Batería 3 años',
        waText: 'Hola, quiero cotizar caretas de soldador autooscurecentes en CDMX',
      },
      {
        nombre: 'Careta Facial Completa',
        badge: 'Máxima protección',
        desc: 'Careta que cubre toda la cara para máxima protección en operaciones de alto riesgo con químicos, proyección de materiales y riesgo de salpicaduras. Compatible con casco de seguridad.',
        specs: 'Policarbonato 3mm · Cubierta facial completa · Ajustable',
        waText: 'Hola, quiero cotizar caretas faciales completas en CDMX',
      },
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
    variantesEyebrow: 'Equipos de protección',
    variantesTitleLine1: 'Selecciona el filtro',
    variantesTitleLine2: 'para tu contaminante',
    variantesBodyPara: 'Todos los equipos cumplen con NOM-116-STPS y NIOSH. Disponibles con asesoría técnica para identificar el contaminante y seleccionar el filtro correcto.',
    variantes: [
      {
        nombre: 'Mascarilla N95 Desechable (caja 20 pzas)',
        badge: 'Básico',
        desc: 'Mascarilla desechable de una sola capa con filtración del 95% para polvo fino, fibras y aerosoles no oleosos. La más económica para protección básica en construcción y manufactura.',
        specs: 'Meltblown · NIOSH N95 · Elástico detrás de oreja',
        waText: 'Hola, quiero cotizar mascarillas N95 desechables en CDMX',
      },
      {
        nombre: 'Respirador Media Cara Reutilizable',
        badge: 'Más vendido',
        desc: 'Respirador de silicona con filtros intercambiables para polvo, gases ácidos, orgánicos o combinados. Se ajusta a la cara y permite larga jornada de uso. Reutilizable por años con cambio de filtros.',
        specs: 'Silicona hypoalergénica · Filtros intercambiables · Ajuste individual',
        waText: 'Hola, quiero cotizar respiradores media cara reutilizables en CDMX',
      },
      {
        nombre: 'Respirador Cara Completa',
        badge: 'Máxima protección',
        desc: 'Respirador de cara completa con protección visual integrada. Ideal para ambientes con alta concentración de contaminantes donde se requiere protección ocular simultánea.',
        specs: 'Facepiece completo · Visera transparente · Filtros intercambiables',
        waText: 'Hola, quiero cotizar respiradores cara completa en CDMX',
      },
      {
        nombre: 'Filtro P100 para Partículas',
        badge: 'Amianto/plomo',
        desc: 'Filtro P100 con filtración del 99.97% para amianto, plomo, sílice y partículas peligrosas. Compatible con respiradores media cara y cara completa. Reemplazo periódico según saturación.',
        specs: 'Filtración HEPA 99.97% · NOM-116-STPS · Rosca bayoneta',
        waText: 'Hola, quiero cotizar filtros P100 en CDMX',
      },
      {
        nombre: 'Cartucho OV/AG Orgánicos y Ácidos',
        badge: 'Químicos',
        desc: 'Cartucho combinado para vapores orgánicos (solventes, pinturas) y gases ácidos (cloro, HCl). Ideal para pintura, impresión y química general. Vida útil aproximada 40 horas.',
        specs: 'Carbón activado + carbón químico · Vida útil 40 hrs · NIOSH',
        waText: 'Hola, quiero cotizar cartuchos OV/AG en CDMX',
      },
      {
        nombre: 'SCBA Auto-Contenido (ERA)',
        badge: 'NFPA 1981',
        desc: 'Equipo de respiración autónoma certificado NFPA 1981 para rescate, atmósferas IDLH y espacios confinados. Suministro de aire independiente. Incluye capacitación obligatoria NOM-009-STPS.',
        specs: 'Botella 4500 psi · Válvula reductora · Mascarilla completa · NFPA 1981',
        waText: 'Hola, quiero cotizar SCBA (ERA) para rescate en CDMX',
      },
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
    variantesEyebrow: 'Tipos de guantes',
    variantesTitleLine1: 'Elige el guante correcto',
    variantesTitleLine2: 'para tu tipo de trabajo',
    variantesBodyPara: 'Todos cumplen con NOM-138-STPS y EN 388/374/407. Stock disponible en tallas XS a XL con asesoría para selección según riesgo específico.',
    variantes: [
      {
        nombre: 'Guante de Nitrilo Multiuso',
        badge: 'Más vendido',
        desc: 'Guante versátil de nitrilo sintético resistente a aceites, grasas y solventes ligeros. La opción más popular para manufactura, automotriz y manejo de herramientas. Disponible sin polvo para alimentos.',
        specs: 'Nitrilo 100% · EN 388 · Tallas XS–XL',
        waText: 'Hola, quiero cotizar guantes de nitrilo en CDMX',
      },
      {
        nombre: 'Guante de Cuero Mecánico',
        badge: 'Construcción',
        desc: 'Guante de cuero de primera calidad resistente a abrasión y corte moderado. Ideal para manejo de materiales, herramientas manuales y construcción. Permite buen agarre y sensibilidad táctil.',
        specs: 'Cuero bovino · EN 388 nivel 2 · Cubierta palmar',
        waText: 'Hola, quiero cotizar guantes de cuero mecánico en CDMX',
      },
      {
        nombre: 'Guante Anticorte Kevlar A4–A9',
        badge: 'Vidrio/lámina',
        desc: 'Guante con fibra Kevlar para máxima resistencia al corte (niveles A4 a A9). Obligatorio para manejo de vidrio, lámina metálica y cuchillos industriales. Mayor costo compensado por durabilidad.',
        specs: 'Kevlar + nitrilo · EN 388 A4–A9 · Antideslizante',
        waText: 'Hola, quiero cotizar guantes anticorte Kevlar en CDMX',
      },
      {
        nombre: 'Guante de Neopreno Antiquímico',
        badge: 'Químicos',
        desc: 'Guante de neopreno doble exposición para protección contra ácidos, bases, solventes y productos químicos. Revisar tabla de compatibilidad para químicos específicos. Reutilizable con lavado diario.',
        specs: 'Neopreno 0.38mm · EN 374 · Palma antideslizante',
        waText: 'Hola, quiero cotizar guantes de neopreno antiquímico en CDMX',
      },
      {
        nombre: 'Guante Anticalórico (hasta 250°C)',
        badge: 'Calor',
        desc: 'Guante para manejo de objetos calientes, piezas de fundición, hornos y soldadura. Aislamiento térmico hasta 250°C. Material aluminizado con forro de algodón para mayor comodidad.',
        specs: 'Algodón + aluminizado · EN 407 · Hasta 250°C',
        waText: 'Hola, quiero cotizar guantes anticalóricos en CDMX',
      },
      {
        nombre: 'Guante Dieléctrico Clase 00–4',
        badge: 'Eléctrico',
        desc: 'Guante dieléctrico certificado NFPA para trabajos eléctricos en tensión desde 500 V a 40,000 V. Clase seleccionada según voltaje. Incluye guante de algodón interior para mayor confort.',
        specs: 'Caucho natural dieléctrico · Clase 00–4 · IEC 60903',
        waText: 'Hola, quiero cotizar guantes dieléctricos en CDMX',
      },
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
    variantesEyebrow: 'Equipos de protección',
    variantesTitleLine1: 'Selecciona el sistema',
    variantesTitleLine2: 'de anticaída correcto',
    variantesBodyPara: 'Todos los equipos cumplen con NOM-009-STPS e IRAM 3700. Stock permanente en CDMX con instalación de anclajes y capacitación incluida.',
    variantes: [
      {
        nombre: 'Arnés Clase A — Detención de Caída',
        badge: 'Estándar',
        desc: 'Arnés de cuerpo completo con punto de conexión dorsal (espalda) para detención de caída. El más versátil para trabajos verticales y caídas en altura. Disponible en tallas S a XL con ajustes rápidos.',
        specs: 'Poliéster 45 mm · NOM-009-STPS · Punto dorsal',
        waText: 'Hola, quiero cotizar arneses Clase A para trabajo en alturas en CDMX',
      },
      {
        nombre: 'Arnés Clase P — Posicionamiento',
        badge: 'Trabajo lateral',
        desc: 'Arnés con puntos de conexión laterales (costados) y dorsal para trabajo en posición con apoyo lateral. Ideal para mantenimiento en fachadas, torres y trabajo en posición recostada.',
        specs: 'Poliéster 45 mm · NOM-009-STPS · Puntos laterales + dorsal',
        waText: 'Hola, quiero cotizar arneses Clase P de posicionamiento en CDMX',
      },
      {
        nombre: 'Línea Retráctil (Self-Retracting Lifeline)',
        badge: 'Más vendido',
        desc: 'Línea de vida automática que se retrae y limita la caída a menos de 30 cm. La opción más cómoda para movimiento horizontal (techos, pasarelas). Incluye absorbedor de impacto integrado.',
        specs: 'Cable de acero · Automática · Caída limitada 30 cm',
        waText: 'Hola, quiero cotizar líneas retráctiles en CDMX',
      },
      {
        nombre: 'Línea de Vida Horizontal',
        badge: 'Movilidad',
        desc: 'Cable horizontal tensado entre dos puntos de anclaje para permitir movimiento libre a lo largo de la línea. Ideal para trabajos con movimiento continuo en techos o estructura metálica.',
        specs: 'Cable de acero 12.5 mm · Tensores · Sistema rail',
        waText: 'Hola, quiero cotizar líneas de vida horizontal en CDMX',
      },
      {
        nombre: 'Absorbedor de Impacto Tipo Y',
        badge: 'NOM-009',
        desc: 'Dispositivo que reduce la fuerza de parada durante la caída a menos de 1,800 lbf. Obligatorio para caídas mayores a 1.8 m. Se une entre el arnés y la línea de vida.',
        specs: 'Nylon trenzado · Deformación controlada · NOM-009-STPS',
        waText: 'Hola, quiero cotizar absorbedores de impacto en CDMX',
      },
      {
        nombre: 'Kit Completo Anticaída (Arnés + Retráctil + Anclaje)',
        badge: 'Kit completo',
        desc: 'Solución integral para trabajo en alturas: Arnés Clase A, línea retráctil automática, punto de anclaje portable y capacitación NOM-009-STPS. Todo lo necesario para iniciar operaciones.',
        specs: 'Arnés + Retráctil + Anclaje · Capacitación incluida · Docs. NFPA',
        waText: 'Hola, quiero cotizar kit completo de anticaída en CDMX',
      },
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
    variantesEyebrow: 'Productos de protección',
    variantesTitleLine1: 'Elige el protector auditivo',
    variantesTitleLine2: 'según el nivel de ruido',
    variantesBodyPara: 'Todos cumplen con NOM-011-STPS y ANSI S3.19. Stock disponible en CDMX con asesoría técnica para calcular el NRR correcto según tu ambiente.',
    variantes: [
      {
        nombre: 'Tapón de Espuma Desechable NRR 32 (caja 200 pares)',
        badge: 'Económico',
        desc: 'Tapones de espuma expandible desechables con NRR 32 dB. La opción más cómoda para uso continuo en calor. Se desecan al término del turno. Ideal para jornadas largas en manufactura y construcción.',
        specs: 'Espuma PU · NRR 32 dB · Desechable por turno',
        waText: 'Hola, quiero cotizar tapones de espuma desechables en CDMX',
      },
      {
        nombre: 'Tapón Reutilizable con Cuerda',
        badge: 'Uso intermitente',
        desc: 'Tapones de silicón o neopreno con cuerda para permitir rápido acceso. Se lavan con agua y jabón tras cada turno. Ideal para trabajo intermitente con entradas y salidas frecuentes de área ruidosa.',
        specs: 'Silicón o neopreno · Cuerda nylon · NRR 28 dB',
        waText: 'Hola, quiero cotizar tapones reutilizables en CDMX',
      },
      {
        nombre: 'Tapón Moldeado a Medida',
        badge: 'Confort premium',
        desc: 'Tapones personalizados moldeados a partir de molde del oído del trabajador. Máxima comodidad y ajuste perfecto para personal con uso diario intensivo. Duración 1 a 2 años por par.',
        specs: 'Silicón moldeable · Personalizado · NRR 30 dB',
        waText: 'Hola, quiero cotizar tapones moldeados a medida en CDMX',
      },
      {
        nombre: 'Orejera de Copa Estándar NRR 25–27',
        badge: 'Más vendida',
        desc: 'Orejera de copa sobre diadema acolchada para protección contra ruido en trabajo intermitente. Cómoda para uso ocasional. Disponible en diferentes colores y materiales de almohadilla.',
        specs: 'Copa plástico · Almohadilla espuma · NRR 25–27 dB',
        waText: 'Hola, quiero cotizar orejeras de copa estándar en CDMX',
      },
      {
        nombre: 'Orejera con Diadema para Casco',
        badge: 'Construcción',
        desc: 'Orejeras que se montan directamente en los canales laterales del casco de seguridad. Ideal para construcción y manufactura donde ya se usa casco. Evita llevar diadema adicional.',
        specs: 'Copa + montaje para casco · NRR 25 dB · Ajustable',
        waText: 'Hola, quiero cotizar orejeras para montar en casco en CDMX',
      },
      {
        nombre: 'Orejera Electrónica con Comunicación',
        badge: 'Alta tecnología',
        desc: 'Orejera con circuito electrónico que atenúa ruido impulsivo (martillos, explosiones) pero permite comunicación normal. Incluye micrófono direccional. Ideal para operaciones de rescate y HAZMAT.',
        specs: 'Electrónica digital · Micrófono · Batería AA · NRR dinámico',
        waText: 'Hola, quiero cotizar orejeras electrónicas en CDMX',
      },
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
