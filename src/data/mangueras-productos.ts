// ============================================================
// src/data/mangueras-productos.ts
// Datos de Nivel 4 — Mangueras y Herrajes Contra Incendio
// Genera: /mangueras/manguera-hidrante/, /mangueras/chiflones/,
//         /mangueras/valvulas-adaptadores/, /mangueras/carrete-manguera/,
//         /mangueras/toma-siamesa/, /mangueras/monitor-incendio/
// ============================================================

// ── Variante individual ──────────────────────────────────────
export interface VarianteManguera {
  nombre:  string
  badge?:  string
  desc:    string
  specs:   string
  waText:  string
}

// ── Datos completos de un producto L4 ───────────────────────
export interface ProductoManguerasData {
  metaTitle:   string
  metaDesc:    string
  badge:       string
  heroTitle:   string
  heroAccent:  string
  heroSubtitle: string
  heroDescRight: string[]

  // Sección 0 — variantes (opcional)
  img?:               string
  variantes?:         VarianteManguera[]
  variantesEyebrow?:  string
  variantesTitleLine1?: string
  variantesTitleLine2?: string
  variantesBodyPara?: string

  caracteristicas: {
    eyebrow:    string
    titleLine1: string
    titleLine2: string
    desc:       string
    items: { title: string; desc: string }[]
  }
  cuandoUsar: {
    eyebrow:     string
    titleLine1:  string
    titleLine2?: string
    desc:        string
    usos: { label: string; desc: string }[]
  }
  relatedTitle: string
  faqItems: { question: string; answer: string }[]
  waMessage: string
  ctaTitle:  string
  ctaBody:   string
}

// ── Lista de rutas (para getStaticPaths) ────────────────────
export const MANGUERA_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'manguera-hidrante',     label: 'Manguera para Hidrante',    badge: 'NFPA 1961' },
  { slug: 'chiflones',             label: 'Chiflones y Pitones',       badge: 'NFPA 1964' },
  { slug: 'valvulas-adaptadores',  label: 'Válvulas y Adaptadores',    badge: 'NFPA 1963' },
  { slug: 'carrete-manguera',      label: 'Carrete de Manguera',       badge: 'NFPA 14'   },
  { slug: 'toma-siamesa',          label: 'Toma Siamesa',              badge: 'NFPA 14'   },
  { slug: 'monitor-incendio',      label: 'Monitor Contra Incendio',   badge: 'Elkhart'   },
]

// ── Datos por producto ───────────────────────────────────────
export const MANGUERA_PAGES: Record<string, ProductoManguerasData> = {

  // ── Manguera para Hidrante ─────────────────────────────────
  'manguera-hidrante': {
    metaTitle: 'Manguera para Hidrante en CDMX | 1½" y 2½" | Proyecto Red',
    metaDesc:  'Mangueras para hidrante y sistemas contra incendio de 1½" y 2½". Materiales de poliéster y caucho. Certificación NFPA 1961. Entrega en CDMX.',
    badge:     'NFPA 1961',
    heroTitle:    'Mangueras',
    heroAccent:   'para Hidrante',
    heroSubtitle: 'Mangueras de primera intervención para sistemas de hidrantes interiores y exteriores. Diámetros de 1½" y 2½" conforme a NFPA 1961.',
    heroDescRight: [
      'Jacquette de poliéster de alta tenacidad con forro interior de caucho vulcanizado.',
      'Presión de trabajo de 1.2 MPa (175 psi) y prueba de presión a 2.4 MPa.',
      'Acoples Storz o roscados disponibles en aluminio o latón.',
    ],

    variantesEyebrow:   'Modelos disponibles',
    variantesTitleLine1: 'Elige la manguera correcta',
    variantesTitleLine2: 'según tu sistema y norma',
    variantesBodyPara:  'Cada modelo se entrega con certificado NFPA 1961 de origen, prueba hidrostática de fábrica y acoples compatibles con el sistema municipal de CDMX. Kit completo con gabinete, pitón y llave disponible.',
    variantes: [
      {
        nombre:  'Manguera 1½" × 15 m — Clase II Interior',
        badge:   'NFPA 1961',
        desc:    'Primera intervención para gabinetes interiores en edificios, hoteles, oficinas y plazas. Operación por ocupantes sin entrenamiento especializado.',
        specs:   'Ø 1½" · 15 m · 175 psi WP · Jacquette poliéster · Acople Storz Al',
        waText:  'Hola, necesito cotizar manguera 1½" 15m para hidrante interior en CDMX',
      },
      {
        nombre:  'Manguera 1½" × 20 m — Clase II Estándar',
        badge:   'NFPA 1961',
        desc:    'Mayor cobertura de tramo para plantas industriales, bodegas y naves con pasillos largos. El modelo de mayor rotación en gabinetes de primera respuesta.',
        specs:   'Ø 1½" · 20 m · 175 psi WP · Jacquette doble poliéster · Acople Storz Al',
        waText:  'Hola, necesito cotizar manguera 1½" 20m estándar para hidrante en CDMX',
      },
      {
        nombre:  'Manguera 2½" × 20 m — Clase I Profesional',
        badge:   'NFPA 1961',
        desc:    'Uso por brigadistas y bomberos. Mayor caudal de descarga para incendios de mayor magnitud. Compatible con pitones de 300+ gpm.',
        specs:   'Ø 2½" · 20 m · 200 psi WP · Jacquette alto impacto · Acople Storz Al',
        waText:  'Hola, necesito cotizar manguera 2½" 20m clase I para sistema CI en CDMX',
      },
      {
        nombre:  'Manguera 2½" × 30 m — Clase I Bomberos',
        badge:   'NFPA 1961',
        desc:    'Dotación para cuerpos de bomberos y brigadas industriales. Longitud extendida para conexión desde carro bomba hasta puntos de intervención alejados.',
        specs:   'Ø 2½" · 30 m · 200 psi WP · Jacquette alto impacto · Acople Storz latón',
        waText:  'Hola, necesito cotizar manguera 2½" 30m para cuerpo de bomberos en CDMX',
      },
    ],

    caracteristicas: {
      eyebrow:    'Especificaciones técnicas',
      titleLine1: 'Mangueras construidas',
      titleLine2: 'para la emergencia',
      desc: 'La manguera contra incendio debe soportar presiones de trabajo extremas sin deformarse ni perder caudal. Nuestras mangueras cumplen los estándares más exigentes del mercado.',
      items: [
        { title: 'Jacquette de poliéster doble',   desc: 'Tejido de alta tenacidad resistente a la abrasión por arrastre en pisos y escaleras.' },
        { title: 'Forro interior de caucho',        desc: 'Impermeable y flexible incluso a bajas temperaturas, garantiza el flujo sin pérdidas.' },
        { title: 'Presión de prueba 350 psi',       desc: 'Cada manguera se prueba hidrostáticamente a 350 psi antes de salir de la planta.' },
        { title: 'Acoples Storz en aluminio',       desc: 'Conexión rápida de una vuelta, compatible con los sistemas de hidrantes de CDMX.' },
        { title: 'Longitudes 15, 20 y 30 m',        desc: 'Disponibles en las longitudes más comunes; fabricamos a medida bajo pedido.' },
        { title: 'Colores rojo, naranja y negro',   desc: 'Identificación visual por tipo de uso: primera intervención, exterior e industrial.' },
      ],
    },
    cuandoUsar: {
      eyebrow:    'Usos y aplicaciones',
      titleLine1: '¿Dónde se necesitan',
      titleLine2: 'mangueras para hidrante?',
      desc: 'Las mangueras para hidrante se utilizan tanto en primera intervención por los ocupantes del edificio (1½") como en respuesta profesional de bomberos (2½").',
      usos: [
        { label: 'Gabinetes de hidrante interior',    desc: 'Manguera de 1½" para uso de los ocupantes del edificio en primera respuesta.' },
        { label: 'Sistemas exteriores',               desc: 'Manguera de 2½" para conexión directa desde el carro bomba hasta el hidrante.' },
        { label: 'Brigadas industriales',             desc: 'Mangueras de alta resistencia para instalaciones petroquímicas, gaseras o de manufactura.' },
        { label: 'Cuerpos de bomberos',               desc: 'Suministramos mangueras conforme a NFPA 1961 para dotación de unidades operativas.' },
        { label: 'Sustitución preventiva',            desc: 'Reemplazo de mangueras deterioradas o que no pasen la prueba hidrostática anual.' },
        { label: 'Proyectos nuevos de construcción',  desc: 'Dotación completa de mangueras para sistemas de hidrantes en obra nueva.' },
      ],
    },
    relatedTitle: 'Otros herrajes y accesorios CI',
    faqItems: [
      {
        question: '¿Cada cuánto deben reemplazarse las mangueras?',
        answer:   'La NFPA 1962 recomienda prueba hidrostática anual y reemplazo máximo a los 10 años de fabricación. Si se detectan grietas, cortes, acoples dañados o la manguera no pasa la prueba de presión, debe reemplazarse inmediatamente.',
      },
      {
        question: '¿Cuál es la diferencia entre manguera semirígida y plana?',
        answer:   'La manguera plana (tipo NFPA) se almacena doblada o enrollada y es la estándar para gabinetes de hidrante. La semirígida mantiene su forma tubular y se usa en carretes; permite desplegarse sin necesidad de un segundo operador.',
      },
      {
        question: '¿Pueden venir conectadas a los gabinetes?',
        answer:   'Sí. Suministramos el kit completo: gabinete + manguera acoplada + pitón + llave. También podemos hacer el mantenimiento anual (prueba, secado y rearme) de mangueras ya instaladas.',
      },
    ],
    waMessage: 'Hola, necesito cotizar mangueras para hidrante en CDMX',
    ctaTitle:  '¿Necesitas mangueras para tu sistema de hidrantes?',
    ctaBody:   'Te cotizamos el kit completo con gabinete, manguera, pitón y acoples. Entrega en CDMX con instalación disponible.',
  },

  // ── Chiflones y Pitones ─────────────────────────────────────
  'chiflones': {
    metaTitle: 'Chiflones y Pitones CI en CDMX | Chorro y Neblina | Proyecto Red',
    metaDesc:  'Chiflones y pitones para sistemas contra incendio: chorro recto, neblina, regulables y de baja velocidad. NFPA 1964. Entrega en CDMX.',
    badge:     'NFPA 1964',
    heroTitle:    'Chiflones',
    heroAccent:   'y Pitones',
    heroSubtitle: 'Chiflones de chorro recto, neblina, combinados y automáticos para respuesta efectiva ante cualquier tipo de incendio.',
    heroDescRight: [
      'Fabricados en aluminio, latón o polipropileno de alto impacto.',
      'Selección de patrón de agua: chorro recto, neblina, lluvia y niebla fina.',
      'Compatibles con roscas NH (National Hose) y acoples Storz.',
    ],

    variantesEyebrow:   'Tipos disponibles',
    variantesTitleLine1: 'Selecciona el chiflón correcto',
    variantesTitleLine2: 'según el tipo de riesgo',
    variantesBodyPara:  'Cada chiflón se entrega con llave de acoplamiento Storz y certificado de conformidad NFPA 1964. La selección incorrecta del patrón puede comprometer la eficiencia de extinción y la seguridad del operador — te asesoramos sin costo.',
    variantes: [
      {
        nombre:  'Chiflón Combinado 1½" — Chorro/Neblina/Cierre',
        badge:   'NFPA 1964',
        desc:    'El modelo más versátil para primera intervención. Selector de tres posiciones para adaptar el patrón de agua según la fase del incendio y el tipo de combustible.',
        specs:   'Ø 1½" · 100–150 gpm · Aluminio forjado · Selector 3 posiciones · Llave Storz incluida',
        waText:  'Hola, necesito cotizar chiflón combinado 1½" chorro/neblina para sistema CI',
      },
      {
        nombre:  'Pitón Chorro Recto 2½" — Largo Alcance',
        badge:   'NFPA 1964',
        desc:    'Máximo alcance de lanza: hasta 30 m de proyección. Para incendios de estructura, rescate defensivo y enfriamiento de estructuras adyacentes.',
        specs:   'Ø 2½" · 250–350 gpm · Aluminio marino · Alcance 30 m · Acople Storz',
        waText:  'Hola, necesito cotizar pitón chorro recto 2½" para sistema CI en CDMX',
      },
      {
        nombre:  'Chiflón Neblina Baja Velocidad — Equipo Sensible',
        badge:   'NFPA 1964',
        desc:    'Cono de niebla de alta finura que minimiza el daño por agua en archivos, centros de datos, laboratorios y obras de arte. No conduce electricidad.',
        specs:   'Ø 1½" · 60–100 gpm · Polipropileno alta resistencia · Ángulo 60°–120°',
        waText:  'Hola, necesito cotizar chiflón de niebla baja velocidad para área sensible',
      },
      {
        nombre:  'Pitón Automático CAFS — Espuma Comprimida',
        badge:   'NFPA 1964',
        desc:    'Compatible con sistemas de espuma comprimida (CAFS) para extinción de líquidos inflamables Clase B. Boquilla intercambiable agua/espuma.',
        specs:   'Ø 1½" · 125–200 gpm · Aluminio forjado · Boquilla intercambiable CAFS/agua',
        waText:  'Hola, necesito cotizar pitón automático CAFS para sistema espuma en CDMX',
      },
    ],

    caracteristicas: {
      eyebrow:    'Tipos y especificaciones',
      titleLine1: 'El chiflón correcto',
      titleLine2: 'según el tipo de fuego',
      desc: 'La selección del patrón de agua correcto es crítica para la eficiencia de la extinción y la seguridad del operador. Nuestro catálogo cubre todos los escenarios.',
      items: [
        { title: 'Chiflón combinado regulable',         desc: 'Selector de chorro recto / neblina / cierre en un solo cuerpo. El más versátil para primera intervención.' },
        { title: 'Pitón de chorro recto',               desc: 'Alcance máximo de agua: ideal para incendios de gran escala o situaciones de rescate.' },
        { title: 'Chiflón de niebla de baja velocidad', desc: 'Reduce daño por agua en archivos, equipos electrónicos y áreas de alto valor.' },
        { title: 'Pitón automático CAFS',               desc: 'Compatible con sistemas de espuma comprimida para extinción de líquidos inflamables.' },
        { title: 'Cuerpo de aluminio forjado',          desc: 'Peso reducido para uso prolongado con menor fatiga del operador.' },
        { title: 'Llave Storz incluida',                desc: 'Entregamos llave de acoplamiento con cada pedido de chiflón para instalación en gabinete.' },
      ],
    },
    cuandoUsar: {
      eyebrow:    'Aplicaciones principales',
      titleLine1: '¿Qué tipo de chiflón',
      titleLine2: 'se usa en cada situación?',
      desc: 'La norma NFPA 1964 clasifica los chiflones según su caudal y patrón de descarga. La elección correcta impacta directamente la efectividad del sistema.',
      usos: [
        { label: 'Incendios de estructura',         desc: 'Chiflón combinado regulable con chorro recto para penetración de llamas en profundidad.' },
        { label: 'Líquidos inflamables (Clase B)',  desc: 'Pitón de espuma o niebla de alta velocidad para sofocar sin desplazar el líquido.' },
        { label: 'Equipos energizados (Clase C)',   desc: 'Niebla de baja velocidad con ángulo de cono amplio para no conducir electricidad.' },
        { label: 'Rescate vehicular',               desc: 'Neblina protectora para cubrir al rescatista mientras trabaja en vehículo en llamas.' },
        { label: 'Protección de estructuras',       desc: 'Chorro recto de largo alcance para enfriar estructuras adyacentes al incendio.' },
        { label: 'Uso en carro bomba',              desc: 'Pitones de gran caudal (300+ gpm) para operaciones de bomberos desde la unidad.' },
      ],
    },
    relatedTitle: 'Otros accesorios para sistemas CI',
    faqItems: [
      {
        question: '¿Qué chiflón es el adecuado para el gabinete de mi edificio?',
        answer:   'Para gabinetes interiores de uso por ocupantes, el chiflón combinado regulable de 1½" con caudal de 100–150 gpm es el estándar. Para uso por bomberos en sistemas de 2½", se requiere un pitón de mayor caudal. Le asesoramos sin costo.',
      },
      {
        question: '¿Los chiflones necesitan mantenimiento?',
        answer:   'Sí. Se recomienda inspección semestral para verificar que el selector de patrón funciona correctamente, que no hay obstrucciones en la boquilla y que los acoples no tienen corrosión ni daño mecánico.',
      },
    ],
    waMessage: 'Hola, necesito cotizar chiflones y pitones para sistema CI en CDMX',
    ctaTitle:  '¿Necesitas chiflones para tu sistema de hidrantes?',
    ctaBody:   'Te asesoramos en la selección según el tipo de riesgo y caudal disponible. Entrega en CDMX en 48 horas.',
  },

  // ── Válvulas y Adaptadores ─────────────────────────────────
  'valvulas-adaptadores': {
    metaTitle: 'Válvulas y Adaptadores CI en CDMX | Storz, Angular, Siamesa | Proyecto Red',
    metaDesc:  'Válvulas angulares, globo, mariposa, check y adaptadores Storz para sistemas contra incendio. NFPA 1963. Entrega e instalación en CDMX.',
    badge:     'NFPA 1963',
    heroTitle:    'Válvulas',
    heroAccent:   'y Adaptadores',
    heroSubtitle: 'Válvulas angulares, globo, check y adaptadores de rosca para controlar y conectar todos los componentes de tu sistema CI.',
    heroDescRight: [
      'Válvulas de bronce, hierro fundido y acero inoxidable para todos los diámetros.',
      'Adaptadores de rosca a Storz y de Storz a Storz en todos los tamaños estándar.',
      'Certificadas conforme a NFPA 1963 y compatibles con sistemas municipales CDMX.',
    ],

    variantesEyebrow: 'Componentes disponibles',
    variantesTitleLine1: 'Válvulas y adaptadores',
    variantesTitleLine2: 'para cada conexión',
    variantesBodyPara: 'Todos los componentes están certificados NFPA 1963 y son compatibles con sistemas municipales de CDMX. Disponibles en bronce, hierro fundido y acero inoxidable. Entregas en 3–5 días, instalación disponible.',
    variantes: [
      {
        nombre: 'Válvula Angular de 2½"',
        badge: 'Hidrante',
        desc: 'Válvula angular de 45° en bronce fundido para montaje directo en gabinetes de hidrante interior. Permite giro natural sin obstaculizar el despliegue de manguera. Coeficiente de pérdida de carga mínimo. Rosca NPT hembra a Storz.',
        specs: 'Diámetro 2½" · Ángulo 45° · Bronce fundido · Rosca NPT a Storz · NFPA 1963',
        waText: 'Hola, necesito cotizar válvulas angulares de 2½" para gabinetes de hidrante. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Válvula de Globo para Gabinete',
        badge: 'Control flujo',
        desc: 'Válvula de globo para tuberías de 1½" a 2½" con paso total para mínima pérdida de carga. Instalación en ramal de descarga de bomba o línea de prueba. Cierre completo sin requiere exceso de fuerza de operador.',
        specs: 'Diámetro 1½" a 2½" · Paso total · Bronce/hierro fundido · NFPA 1963 · Instalación horizontal',
        waText: 'Hola, necesito válvulas de globo para sistemas CI. ¿Pueden cotizar?',
      },
      {
        nombre: 'Adaptador Storz (varias medidas)',
        badge: 'Estándar bomberos',
        desc: 'Acoplamientos Storz-macho y Storz-hembra en bronce para conexión de mangueras de diferentes diámetros. Compatibles con el estándar municipal de 2½" de CDMX. Disponibles en 1½", 2½" y 3". Acople rápido sin herramientas.',
        specs: 'Medidas 1½" / 2½" / 3" · Bronce · Acople rápido Storz · NFPA 1963 · Stock permanente',
        waText: 'Hola, necesito adaptadores Storz para mangueras CI. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Reductor/Incrementador de Conexión',
        badge: 'Flexible',
        desc: 'Adaptadores Storz-Storz para conectar mangueras de diferente diámetro sin usar dos válvulas separadas. Por ejemplo, 2½" a 1½" para ampliar cobertura con manguera más pequeña. Pérdida de carga mínima.',
        specs: 'Reducción/incremento 1½"-2½"-3" · Bronce · Acople Storz · NFPA 1963 · Peso < 500g',
        waText: 'Hola, necesito reductores/incrementadores Storz para mangueras CI. ¿Pueden cotizar?',
      },
      {
        nombre: 'Llave Spanner Universal',
        badge: 'Herramienta',
        desc: 'Herramienta universal para apretado y aflojado de acoplamientos Storz sin causar daño a las roscas. Fabricada en aluminio con pasantes para múltiples medidas. Esencial en kit de mantenimiento de sistemas CI y brigadas de rescate.',
        specs: 'Material aluminio · Múltiples medidas · Peso 200g · Universal · ISO compatible',
        waText: 'Hola, necesito llaves Spanner para acoplamientos Storz. ¿Pueden cotizar?',
      },
      {
        nombre: 'Kit de Válvulas y Adaptadores',
        badge: 'Kit completo',
        desc: 'Set integrado con válvula angular 2½", válvula check, dos adaptadores Storz, reductor, llave Spanner y manguera de prueba. Completo para instalación de gabinete de hidrante interior o ampliación de sistema existente.',
        specs: '6 componentes · Válvula angular + check + adaptadores + llave + manguera · Bronce · NFPA 1963',
        waText: 'Hola, necesito un kit completo de válvulas y adaptadores CI. ¿Pueden asesorarme?',
      },
    ],

    caracteristicas: {
      eyebrow:    'Catálogo de válvulas',
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
      eyebrow:    'Aplicaciones',
      titleLine1: '¿Dónde se instalan',
      titleLine2: 'válvulas y adaptadores CI?',
      desc: 'Cada punto de conexión, aislamiento y control de flujo en el sistema requiere la válvula o adaptador adecuado para garantizar operación eficiente y cumplimiento normativo.',
      usos: [
        { label: 'Gabinetes de hidrante',               desc: 'Válvula angular de 1½" o 2½" para control directo desde el gabinete de mangueras.' },
        { label: 'Cuartos de bombas CI',                desc: 'Válvulas globo y check para la descarga de la bomba y la línea de prueba.' },
        { label: 'Red de distribución de tuberías',    desc: 'Válvulas de mariposa supervisadas en cada ramal según NFPA 13.' },
        { label: 'Conexiones de siamesa exterior',     desc: 'Adaptadores de tapa y cadena para proteger las roscas de la intemperie y el vandalismo.' },
        { label: 'Entrenamiento y pruebas',             desc: 'Válvulas de prueba para simular descarga sin afectar el sistema en producción.' },
        { label: 'Adecuación de sistemas existentes',  desc: 'Adaptadores para conectar equipos con roscas o diámetros no estandarizados.' },
      ],
    },
    relatedTitle: 'Otros componentes del sistema CI',
    faqItems: [
      {
        question: '¿Qué tipo de válvula debo usar en un gabinete de hidrante?',
        answer:   'La válvula angular de bronce de 45° es la más utilizada en gabinetes interiores porque su geometría permite un giro natural al abrir sin obstaculizar el despliegue de la manguera. Disponemos en 1½" y 2½".',
      },
      {
        question: '¿Los adaptadores Storz son universales?',
        answer:   'Los acoples Storz tienen un estándar de diámetro pero pueden variar en el paso de rosca. Para CDMX, el sistema municipal de hidrantes usa 2½" Storz. Verificamos compatibilidad antes de la entrega.',
      },
    ],
    waMessage: 'Hola, necesito cotizar válvulas y adaptadores CI en CDMX',
    ctaTitle:  '¿Necesitas válvulas o adaptadores para tu sistema CI?',
    ctaBody:   'Describe tu necesidad y te recomendamos los componentes correctos. Entrega en CDMX con instalación disponible.',
  },

  // ── Carrete de Manguera ─────────────────────────────────────
  'carrete-manguera': {
    metaTitle: 'Carrete de Manguera CI en CDMX | Semirígida y Plana | Proyecto Red',
    metaDesc:  'Carretes de manguera contra incendio fijos y giratorios para uso en gabinetes de primera intervención. NFPA 14. Entrega e instalación en CDMX.',
    badge:     'NFPA 14',
    heroTitle:    'Carretes',
    heroAccent:   'de Manguera',
    heroSubtitle: 'Carretes fijos y giratorios que alojan mangueras semirígidas o planas listas para despliegue inmediato en primera intervención.',
    heroDescRight: [
      'Cuerpo de acero con eje central fijo o giratorio a 360°.',
      'Capacidad para manguera de 20 a 45 m de longitud en diámetros de 1" a 2".',
      'Con o sin válvula de cierre de aguja para control de flujo en el mismo carrete.',
    ],

    variantesEyebrow: 'Modelos disponibles',
    variantesTitleLine1: 'Carretes de manguera',
    variantesTitleLine2: 'para primera intervención',
    variantesBodyPara: 'Todos los carretes incluyen manguera semirígida NFPA 1961, eje giratorio a 360° (excepto modelo manual), válvula de cierre de aguja y pitón de niebla/chorro. Instalación empotrada o sobrepuesta. Entrega en 5–7 días hábiles.',
    variantes: [
      {
        nombre: 'Carrete Manual de 30 m',
        badge: 'Estándar',
        desc: 'Carrete fijo con eje de manija para desplegar la manguera de 30 metros de manera controlada. Para instalaciones en pasillos o corredores donde se requiere bajo presupuesto inicial. Válvula de aguja incorporada. Despliegue en menos de 30 segundos.',
        specs: 'Longitud 30 m · Diámetro 1½" · Eje manual · Manguera semirígida · Acero pintado rojo',
        waText: 'Hola, necesito carretes de manguera manual 30m para gabinetes de hidrante. ¿Pueden cotizar?',
      },
      {
        nombre: 'Carrete Automático de 30 m',
        badge: 'Auto-retráctil',
        desc: 'Carrete giratorio 360° con manguera semirígida que se retrae automáticamente bajo su propio peso. Un operador desplega y dirige sin necesidad de asistencia. Sistema de freno suave evita retracción brusca. Ideal para ocupantes sin entrenamiento.',
        specs: 'Longitud 30 m · Diámetro 1½" · Eje giratorio 360° · Auto-retráctil · Válvula aguja incorporada',
        waText: 'Hola, necesito carrete automático 30m retráctil. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Carrete de 50 m para Gabinete',
        badge: 'Industrial',
        desc: 'Carrete de mayor capacidad para naves industriales o plantas donde se requiere mayor alcance de cobertura. Manguera de 50 metros en 1½" permite cubrir áreas de hasta 1500 m². Eje giratorio fijo. Instalación sobrepuesta en columna o parede.',
        specs: 'Longitud 50 m · Diámetro 1½" · Eje giratorio fijo · Carrete grande · Cuerpo acero pintado',
        waText: 'Hola, necesito carrete de manguera 50m para nave industrial. ¿Pueden cotizar?',
      },
      {
        nombre: 'Carrete con Boquilla Incluida',
        badge: 'Listo',
        desc: 'Carrete completo que incluye pitón ajustable (niebla/chorro), válvula de cierre de aguja y soporte para colgar el pitón cuando no está en uso. No requiere adquisición de accesorios adicionales. Listo para instalación inmediata.',
        specs: 'Carrete 30 m · Boquilla niebla/chorro incluida · Válvula aguja · Soporte para pitón · Completo',
        waText: 'Hola, necesito un carrete de manguera con boquilla incluida. ¿Pueden asesorarme?',
      },
      {
        nombre: 'Carrete de Manguera para Jardín Industrial',
        badge: 'Riego CI',
        desc: 'Carrete especializado para sistemas de riego contra incendio en jardines y áreas verdes. Manguera de bajo diámetro (1" a 1¼") con longitud 25–35 m. Presión de trabajo compatible con sistemas de riego automatizado. Cierre de válvula integrado.',
        specs: 'Longitud 25–35 m · Diámetro 1" / 1¼" · Eje giratorio · Válvula aguja · Para riego CI',
        waText: 'Hola, necesito un carrete de manguera para riego CI en jardines. ¿Pueden cotizar?',
      },
    ],

    caracteristicas: {
      eyebrow:    'Tipos y características',
      titleLine1: 'Carrete para despliegue',
      titleLine2: 'inmediato en emergencias',
      desc: 'El carrete de manguera permite que una sola persona despliegue la manguera hacia cualquier dirección sin necesidad de ayuda, reduciendo el tiempo de respuesta a menos de 30 segundos.',
      items: [
        { title: 'Carrete giratorio 360°',               desc: 'Permite orientar la manguera hacia cualquier dirección desde un punto fijo sin doblarla.' },
        { title: 'Manguera semirígida incluida',         desc: 'Mantiene su forma tubular para despliegue por una sola persona sin riesgo de kink.' },
        { title: 'Válvula de aguja incorporada',         desc: 'Control de apertura y cierre directamente en el carrete sin necesidad de válvula adicional.' },
        { title: 'Cuerpo de acero pintado',              desc: 'Acabado electrostático en rojo RAL 3001. Resistente a humedad y ambientes industriales.' },
        { title: 'Guía y freno de manguera',             desc: 'Evita que la manguera se desdovine sin control durante el despliegue bajo presión.' },
        { title: 'Modelos para empotrar o sobreponer',   desc: 'Opciones para instalación en nicho o sobre pared, según el espacio disponible.' },
      ],
    },
    cuandoUsar: {
      eyebrow:    'Instalaciones recomendadas',
      titleLine1: '¿Cuándo usar',
      titleLine2: 'carrete de manguera?',
      desc: 'Los carretes de manguera son la mejor opción cuando se busca respuesta rápida por parte de personas no entrenadas como bomberos, como es el caso de los ocupantes de un edificio.',
      usos: [
        { label: 'Corredores de edificios',      desc: 'Carrete empotrado en nicho para primera respuesta por el personal de seguridad.' },
        { label: 'Naves industriales',           desc: 'Carrete giratorio sobrepuesto en columna para cobertura de toda el área de producción.' },
        { label: 'Hoteles y restaurantes',       desc: 'Carrete de diseño discreto para primera intervención sin alarmar a los huéspedes.' },
        { label: 'Escuelas y universidades',     desc: 'Fácil operación para personal no especializado en situaciones de emergencia.' },
        { label: 'Centros de datos',             desc: 'Carrete con manguera de niebla fina para uso en áreas críticas con equipo electrónico.' },
        { label: 'Estaciones de gasolina',       desc: 'Carrete con manguera de espuma para atender derrames de combustible líquido.' },
      ],
    },
    relatedTitle: 'Otros accesorios para sistemas CI',
    faqItems: [
      {
        question: '¿La manguera del carrete necesita prueba hidrostática?',
        answer:   'Sí. Al igual que las mangueras planas, la norma NFPA 1962 establece pruebas anuales de presión. Realizamos el servicio de mantenimiento anual con emisión de reporte para su expediente.',
      },
      {
        question: '¿Cuál es la diferencia entre carrete fijo y giratorio?',
        answer:   'El carrete fijo solo permite usar la manguera en la dirección que apunta la boquilla del carrete. El carrete giratorio gira 360° y permite orientar la manguera hacia cualquier punto del área cubierta, que es la opción más versátil y recomendada.',
      },
    ],
    waMessage: 'Hola, necesito cotizar carretes de manguera CI en CDMX',
    ctaTitle:  '¿Necesitas carretes de manguera para tu instalación?',
    ctaBody:   'Te asesoramos en el modelo correcto según el espacio y el riesgo. Entrega e instalación en CDMX.',
  },

  // ── Toma Siamesa ────────────────────────────────────────────
  'toma-siamesa': {
    metaTitle: 'Toma Siamesa CI en CDMX | Fachada y Empotrada | Proyecto Red',
    metaDesc:  'Tomas siamesas de bronce para sistemas CI: fachada, empotrada y de piso. NFPA 14. Entrega e instalación en CDMX.',
    badge:     'NFPA 14',
    heroTitle:    'Toma',
    heroAccent:   'Siamesa',
    heroSubtitle: 'Conexión exterior para que los bomberos alimenten el sistema hidráulico del edificio desde su carro bomba en emergencias.',
    heroDescRight: [
      'Fabricadas en bronce con tapas y cadenas de seguridad incluidas.',
      'Entradas de 2½" con acople Storz o roscas NH estándar.',
      'Modelos de pared, empotrada y de piso para todos los tipos de construcción.',
    ],

    variantesEyebrow:   'Modelos disponibles',
    variantesTitleLine1: 'Elige la toma siamesa correcta',
    variantesTitleLine2: 'para tu tipo de edificio',
    variantesBodyPara:  'Todas las tomas siamesas se entregan con placa identificadora "BOMBEROS — SISTEMAS CI" conforme a NOM-003-SEGOB, tapas de seguridad, cadenas y documentación técnica para tu expediente de Protección Civil. Instalación disponible en CDMX.',
    variantes: [
      {
        nombre:  'Siamesa de Pared — Fachada Estándar',
        badge:   'NFPA 14',
        desc:    'Montaje saliente sobre fachada. La opción más común para edificios de oficinas, hoteles y desarrollos residenciales de más de 4 niveles. Acceso inmediato para la unidad bomba.',
        specs:   'Bronce forjado · 2 entradas 2½" · Salida 4" · Roscas NH · Tapas + cadenas',
        waText:  'Hola, necesito cotizar toma siamesa de pared fachada estándar en CDMX',
      },
      {
        nombre:  'Siamesa Empotrada — Flush con Fachada',
        badge:   'NFPA 14',
        desc:    'Instalación al ras de la fachada con tapa de acero inoxidable. Apariencia integrada para edificios corporativos o residencias de lujo donde la estética es relevante.',
        specs:   'Bronce forjado · 2 entradas 2½" · Tapa acero inox · Caja empotrada incluida',
        waText:  'Hola, necesito cotizar toma siamesa empotrada flush para edificio corporativo',
      },
      {
        nombre:  'Siamesa de Piso — Red Subterránea',
        badge:   'NFPA 14',
        desc:    'Para edificios con red hidráulica subterránea o donde no es posible acceder por fachada. Caja de inspección con tapa de acero y cerrojo para protección contra vandalismo.',
        specs:   'Bronce forjado · 2 entradas 2½" · Caja piso acero · Cerrojo integrado',
        waText:  'Hola, necesito cotizar toma siamesa de piso para red hidráulica subterránea',
      },
      {
        nombre:  'Siamesa Tripleta — 3 Entradas 2½"',
        badge:   'NFPA 14',
        desc:    'Para edificios de gran altura o superficie que requieren mayor caudal de alimentación. Tres entradas permiten conectar hasta 3 líneas de carro bomba simultáneamente.',
        specs:   'Bronce forjado · 3 entradas 2½" · Salida 6" · Alto caudal · Tapas + cadenas',
        waText:  'Hola, necesito cotizar toma siamesa tripleta para edificio de gran altura',
      },
    ],

    caracteristicas: {
      eyebrow:    'Tipos y materiales',
      titleLine1: 'La puerta de entrada',
      titleLine2: 'para los bomberos',
      desc: 'La toma siamesa es el punto de conexión exterior que permite a los bomberos presurizar el sistema interno del edificio desde su carro bomba, aunque la bomba propia del edificio haya fallado.',
      items: [
        { title: 'Cuerpo de bronce forjado',      desc: 'Resistente a la corrosión y a la presión de trabajo de 150 psi durante operaciones de bombeo.' },
        { title: 'Tapas y cadenas incluidas',      desc: 'Protegen las roscas de la intemperie y el vandalismo cuando el sistema no está en uso.' },
        { title: 'Modelo de fachada (pared)',      desc: 'Montaje saliente sobre fachada del edificio con 2 entradas de 2½" y salida de 4" o 6".' },
        { title: 'Modelo empotrada',               desc: 'Se instala flush con la pared para una apariencia más limpia. Incluye tapa de acero.' },
        { title: 'Modelo de piso (floor type)',    desc: 'Para instalaciones con el sistema de tuberías corriendo bajo el nivel del piso.' },
        { title: 'Placa identificadora NOM',       desc: 'Señal "BOMBEROS - SISTEMAS CI" conforme a NOM-003-SEGOB incluida en la entrega.' },
      ],
    },
    cuandoUsar: {
      eyebrow:    'Requerimientos normativos',
      titleLine1: '¿Cuándo es obligatoria',
      titleLine2: 'la toma siamesa?',
      desc: 'La NFPA 14 establece que todo edificio con sistema de mangueras de clase II o III debe contar con una toma siamesa exterior accesible para vehículos de bomberos.',
      usos: [
        { label: 'Edificios de más de 4 pisos',     desc: 'Obligatoria para garantizar que la presión del sistema se pueda mantener en pisos superiores.' },
        { label: 'Centros comerciales',              desc: 'Código de seguridad exige toma siamesa en fachada accesible desde la vía pública.' },
        { label: 'Hospitales y clínicas',            desc: 'Requerimiento de certificación de seguridad y protección civil CDMX.' },
        { label: 'Hoteles y torres residenciales',   desc: 'Las tomas siamesas forman parte de la dotación obligatoria del sistema de mangueras.' },
        { label: 'Naves industriales de gran área',  desc: 'Complementan la red de hidrantes exteriores para operaciones de supresión a gran escala.' },
        { label: 'Proyectos de obra nueva',          desc: 'Se instalan durante la construcción para cumplir los requerimientos del dictamen CI.' },
      ],
    },
    relatedTitle: 'Otros componentes de la red CI',
    faqItems: [
      {
        question: '¿Cuántas tomas siamesas necesita mi edificio?',
        answer:   'La NFPA 14 y el reglamento local de Protección Civil CDMX establecen que se requiere al menos una toma siamesa por cada 930 m² o fracción de superficie construida, ubicada en fachada accesible a vehículos de bomberos.',
      },
      {
        question: '¿Qué mantenimiento requiere la toma siamesa?',
        answer:   'Inspección semestral del estado de tapas, cadenas y roscas. Prueba anual de flujo para verificar que no existen obstrucciones. Limpieza de roscas con lubricante anticorrosivo al menos una vez al año.',
      },
    ],
    waMessage: 'Hola, necesito cotizar tomas siamesas para sistema CI en CDMX',
    ctaTitle:  '¿Necesitas instalar tomas siamesas en tu edificio?',
    ctaBody:   'Te asesoramos en el tipo y número correcto según tu inmueble. Instalación en CDMX con documentación para Protección Civil.',
  },

  // ── Monitor Contra Incendio ─────────────────────────────────
  'monitor-incendio': {
    metaTitle: 'Monitor Contra Incendio en CDMX | Elkhart Brass | Proyecto Red',
    metaDesc:  'Monitores contra incendio manuales, eléctricos y automáticos. Distribuidor autorizado Elkhart Brass. NFPA 15. Entrega en CDMX.',
    badge:     'Elkhart Brass',
    heroTitle:    'Monitores',
    heroAccent:   'Contra Incendio',
    heroSubtitle: 'Monitores manuales y automáticos para descarga de alto caudal en instalaciones industriales, aeropuertos, terminales de combustible y plantas de proceso.',
    heroDescRight: [
      'Distribuidor autorizado de Elkhart Brass — marca líder en monitores para bomberos.',
      'Caudales de 100 a 4,500 gpm con rango de alcance de hasta 60 m.',
      'Modelos manuales, eléctricos y oscilantes automáticos para detección y supresión.',
    ],

    variantesEyebrow:   'Línea Elkhart Brass disponible',
    variantesTitleLine1: 'Elige el monitor correcto',
    variantesTitleLine2: 'según caudal y tipo de operación',
    variantesBodyPara:  'Como distribuidores autorizados Elkhart Brass, garantizamos disponibilidad de refacciones, garantía de fábrica y soporte técnico en CDMX. Todos los modelos se entregan con certificado de origen, documentación NFPA 15 y prueba de flujo antes de la entrega.',
    variantes: [
      {
        nombre:  'Monitor Manual de Aluminio — Serie 1500',
        badge:   'Elkhart Brass',
        desc:    'Control directo del operador con movimiento horizontal ±180° y vertical −30°/+80°. Ideal para instalación fija en pedestal, muelle o cerca perimetral donde se requiere alcance de hasta 40 m.',
        specs:   'Caudal 100–2,000 gpm · Alcance 40 m · Aluminio marino · Entrada 2½"–4" · NFPA 15',
        waText:  'Hola, necesito cotizar monitor manual Elkhart Brass serie 1500 para instalación fija',
      },
      {
        nombre:  'Monitor Eléctrico Remoto — Serie 3600',
        badge:   'Elkhart Brass',
        desc:    'Control por joystick desde sala de mando o panel táctil. Giro continuo horizontal y vertical motorizado. Para áreas de alta peligrosidad donde el operador no puede acercarse.',
        specs:   'Caudal 500–3,000 gpm · Control 24 VDC · Encoders posición · RS-485 / Modbus',
        waText:  'Hola, necesito cotizar monitor eléctrico remoto Elkhart Brass serie 3600',
      },
      {
        nombre:  'Monitor Oscilante Automático — Serie 4000',
        badge:   'Elkhart Brass',
        desc:    'Activa al detectar temperatura o señal del panel CI y oscila automáticamente cubriendo el área de riesgo. Sin intervención humana: ideal para bóvedas, cuartos de máquinas y áreas no tripuladas.',
        specs:   'Caudal 500–4,500 gpm · Oscilación auto ±90° · Activación térmica / panel CI',
        waText:  'Hola, necesito cotizar monitor oscilante automático Elkhart Brass serie 4000',
      },
      {
        nombre:  'Monitor para Carro Bomba — Montaje Móvil',
        badge:   'Elkhart Brass',
        desc:    'Diseñado para montaje sobre el techo o la línea de descarga del camión de bomberos. Aluminio de alto impacto con rotación completa. Boquilla intercambiable agua/espuma AFFF.',
        specs:   'Caudal 250–2,500 gpm · Montaje mobile · Aluminio forjado · Boquilla AFFF/agua',
        waText:  'Hola, necesito cotizar monitor carro bomba Elkhart Brass para unidad operativa',
      },
    ],

    caracteristicas: {
      eyebrow:    'Línea de monitores disponibles',
      titleLine1: 'Alta capacidad',
      titleLine2: 'para riesgos especiales',
      desc: 'Los monitores contra incendio son la solución para situaciones donde los extintores portátiles y las mangueras convencionales son insuficientes por el tamaño del incendio o el peligro para el operador.',
      items: [
        { title: 'Monitor manual de aluminio',      desc: 'Control directo del operador con movimiento horizontal y vertical. Caudales de 100 a 2,000 gpm.' },
        { title: 'Monitor eléctrico remoto',        desc: 'Control desde sala de mando o panel táctil. Ideal para áreas de difícil acceso o alta peligrosidad.' },
        { title: 'Monitor oscilante automático',    desc: 'Activa al detectar calor o humo y oscila automáticamente para cubrir el área de riesgo.' },
        { title: 'Boquilla de espuma / agua',       desc: 'Modelos con boquilla intercambiable para uso con agua, espuma AFFF o agente CAFS.' },
        { title: 'Pedestal y montaje en vehículo',  desc: 'Modelos para instalación fija en pedestal, sobre muro o montaje en camión / carro bomba.' },
        { title: 'Material anticorrosión NFPA',     desc: 'Aluminio marino y acero inoxidable 316 para instalaciones en ambientes salinos o químicos.' },
      ],
    },
    cuandoUsar: {
      eyebrow:    'Instalaciones que lo requieren',
      titleLine1: '¿Cuándo necesitas',
      titleLine2: 'un monitor contra incendio?',
      desc: 'Los monitores se utilizan cuando el volumen de agua requerido, la peligrosidad del ambiente o las dimensiones del área superan la capacidad de una manguera operada manualmente.',
      usos: [
        { label: 'Terminales de combustible',       desc: 'Monitor fijo con espuma AFFF para derrames y fuegos de tanques de almacenamiento.' },
        { label: 'Refinerías y petroquímicas',      desc: 'Monitores eléctricos remotos en áreas clasificadas donde no puede entrar personal.' },
        { label: 'Muelles y terminales portuarios', desc: 'Monitores de gran caudal para incendios en embarcaciones y cargas a granel.' },
        { label: 'Aeropuertos (ARFF)',              desc: 'Monitores de carros ARFF y unidades de rescate para respuesta en pista y hangares.' },
        { label: 'Plantas de manufactura pesada',  desc: 'Monitor fijo como primera línea de defensa en prensas, hornos y líneas de pintura.' },
        { label: 'Helipuertos',                    desc: 'Monitor AFFF en posición fija para cubrir el área de aterrizaje en caso de emergencia.' },
      ],
    },
    relatedTitle: 'Otros componentes de sistemas CI',
    faqItems: [
      {
        question: '¿Elkhart Brass tiene garantía en México?',
        answer:   'Sí. Como distribuidores autorizados, ofrecemos garantía de fábrica de 1 a 5 años según el modelo, con soporte técnico y refacciones disponibles en CDMX.',
      },
      {
        question: '¿Cuánta presión de agua necesita un monitor?',
        answer:   'La mayoría de los monitores requieren entre 80 y 150 psi de presión de entrada. El sistema hidráulico (bomba, tuberías y válvulas) debe estar dimensionado para mantener esa presión al caudal nominal del monitor.',
      },
      {
        question: '¿Realizan instalación de monitores?',
        answer:   'Sí. Realizamos instalación completa incluyendo pedestal o montaje, conexión hidráulica, prueba de flujo y documentación conforme a NFPA 15.',
      },
    ],
    waMessage: 'Hola, necesito cotizar monitores contra incendio Elkhart Brass en CDMX',
    ctaTitle:  '¿Necesitas monitores para tu instalación industrial?',
    ctaBody:   'Somos distribuidores autorizados de Elkhart Brass. Te asesoramos en el modelo correcto según tu riesgo y caudal requerido.',
  },
}
