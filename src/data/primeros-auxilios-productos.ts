// ============================================================
// src/data/primeros-auxilios-productos.ts
// Datos de Nivel 4 — Primeros Auxilios
// Genera: /primeros-auxilios/botiquin-stps/,
//         /primeros-auxilios/camilla-emergencia/,
//         /primeros-auxilios/desfibrilador/,
//         /primeros-auxilios/oxigeno-emergencia/,
//         /primeros-auxilios/material-curacion/
// ============================================================

export interface ProductoPrimerosAuxiliosData {
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

export const PRIMEROS_AUXILIOS_PRODUCTS: { slug: string; label: string; badge: string }[] = [
  { slug: 'botiquin-stps',      label: 'Botiquín STPS',            badge: 'NOM-005-STPS' },
  { slug: 'camilla-emergencia', label: 'Camilla de Emergencia',    badge: 'NOM-026-STPS' },
  { slug: 'desfibrilador',      label: 'Desfibrilador DEA',        badge: 'AHA'          },
  { slug: 'oxigeno-emergencia', label: 'Oxígeno de Emergencia',    badge: 'NOM-235-SSA1' },
  { slug: 'material-curacion',  label: 'Material de Curación',     badge: 'NOM-005-STPS' },
]

export const PRIMEROS_AUXILIOS_PAGES: Record<string, ProductoPrimerosAuxiliosData> = {

  // ── Botiquín STPS ───────────────────────────────────────────
  'botiquin-stps': {
    metaTitle: 'Botiquín de Primeros Auxilios STPS en CDMX | NOM-005 | Proyecto Red',
    metaDesc: 'Botiquines de primeros auxilios para centros de trabajo conforme a NOM-005-STPS-1998. Modelos para 1–50 y 51–100 trabajadores. Entrega en CDMX.',
    badge: 'NOM-005-STPS',
    heroTitle: 'Botiquín',
    heroAccent: 'de Primeros Auxilios',
    heroSubtitle: 'Botiquines completos con el contenido mínimo exigido por la NOM-005-STPS para centros de trabajo de cualquier tamaño.',
    heroDescRight: [
      'Equipados conforme a la NOM-005-STPS-1998 según número de trabajadores y nivel de riesgo.',
      'Contenedores de plástico rígido, metal o mochila con compartimentos identificados.',
      'Incluye ficha técnica de contenido e instrucciones de primeros auxilios.',
    ],
    stats: [
      { value: 'NOM-005',   label: 'Cumplimiento STPS'    },
      { value: '1–100',     label: 'Trabajadores por kit'  },
      { value: 'Completo',  label: 'Contenido normativo'  },
      { value: '48 h',      label: 'Entrega en CDMX'      },
    ],
    caracteristicas: {
      eyebrow: 'Contenido y especificaciones',
      titleLine1: 'Equipado con todo',
      titleLine2: 'lo que exige la norma',
      desc: 'La NOM-005-STPS establece el contenido mínimo del botiquín según el número de trabajadores. Nuestros kits cumplen o superan ese estándar con productos de primera calidad.',
      items: [
        { title: 'Vendas de gasa y elásticas',    desc: 'Varios tamaños para inmovilización de lesiones y compresión de heridas.' },
        { title: 'Apósitos y curitas surtidas',   desc: 'Para lesiones menores, cortes y abrasiones en el lugar de trabajo.' },
        { title: 'Solución antiséptica',          desc: 'Isodine, alcohol y suero fisiológico para limpieza de heridas.' },
        { title: 'Tijeras y pinzas',              desc: 'Tijeras de punta roma y pinzas para extracción de astillas y corte de vendas.' },
        { title: 'Guantes de látex o nitrilo',   desc: 'Protección para el socorrista en cada atención, incluidos en pares múltiples.' },
        { title: 'Instructivo de primeros auxilios', desc: 'Guía visual paso a paso para los procedimientos más comunes en el centro de trabajo.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Obligatoriedad y aplicación',
      titleLine1: '¿Cuándo y dónde',
      titleLine2: 'es obligatorio el botiquín?',
      desc: 'La NOM-005-STPS establece que todo centro de trabajo debe contar con botiquín de primeros auxilios completo y accesible, independientemente del número de trabajadores.',
      usos: [
        { label: 'Oficinas y corporativos',        desc: '1 botiquín por cada 50 trabajadores según la norma.' },
        { label: 'Plantas industriales',           desc: 'Botiquín de mayor dotación más maletín de brigada para cada turno de trabajo.' },
        { label: 'Restaurantes y cocinas',         desc: 'Obligatorio en toda cocina comercial: quemaduras y cortes son los accidentes más frecuentes.' },
        { label: 'Construcción y obra',            desc: 'Botiquín de obra con material para atención de lesiones de mayor gravedad.' },
        { label: 'Escuelas y universidades',       desc: 'Dotación conforme a la cantidad de alumnos y ubicado en enfermería o portería.' },
        { label: 'Eventos y actividades masivas',  desc: 'Kits portátiles para brigadas de primeros auxilios en actividades con más de 100 personas.' },
      ],
    },
    relatedTitle: 'Otros equipos de primeros auxilios',
    faqItems: [
      { question: '¿Qué diferencia hay entre el botiquín de 1–50 y el de 51–100 trabajadores?', answer: 'El botiquín para 51–100 trabajadores incluye mayor cantidad de materiales de curación, un inmovilizador cervical, material para atención de quemaduras y un tensiómetro. La NOM-005-STPS especifica los contenidos mínimos por tamaño de empresa.' },
      { question: '¿Con qué frecuencia se repone el botiquín?', answer: 'Debe revisarse mensualmente y reponerse los materiales utilizados o vencidos. Ofrecemos kits de reposición con el contenido específico de cada botiquín para simplificar el proceso.' },
      { question: '¿El botiquín cumple para la inspección de la STPS?', answer: 'Sí. Nuestros botiquines incluyen ficha técnica de contenido para facilitar la verificación durante inspecciones. El contenido cumple o supera el mínimo establecido en la NOM-005-STPS-1998.' },
    ],
    waMessage: 'Hola, necesito cotizar botiquines de primeros auxilios STPS en CDMX',
    ctaTitle: '¿Cuántos trabajadores tienes en tu instalación?',
    ctaBody: 'Te recomendamos el botiquín correcto y la cantidad necesaria según la NOM-005-STPS. Entrega en CDMX en 48 horas.',
  },

  // ── Camilla de Emergencia ───────────────────────────────────
  'camilla-emergencia': {
    metaTitle: 'Camilla de Emergencia en CDMX | Rígida y Plegable | Proyecto Red',
    metaDesc: 'Camillas de emergencia para traslado de lesionados: rígidas, plegables, de cuchara y de canasta. Entrega e instalación en CDMX.',
    badge: 'NOM-026-STPS',
    heroTitle: 'Camillas',
    heroAccent: 'de Emergencia',
    heroSubtitle: 'Camillas rígidas, plegables y de rescate para traslado seguro de lesionados en accidentes laborales, incendios y emergencias médicas.',
    heroDescRight: [
      'Modelos para traslado en plano, escaleras, terrenos irregulares y rescate en altura.',
      'Materiales de aluminio, acero inoxidable y polietileno de alta densidad.',
      'Capacidad de carga de 150 a 250 kg según el modelo.',
    ],
    stats: [
      { value: '4 tipos',   label: 'Modelos disponibles'   },
      { value: '250 kg',    label: 'Capacidad máxima'      },
      { value: 'Al/Ac.',    label: 'Materiales disponibles'},
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Tipos disponibles',
      titleLine1: 'Traslado seguro',
      titleLine2: 'en cualquier escenario',
      desc: 'La camilla correcta depende del tipo de instalación, el riesgo más probable de lesión y las condiciones del traslado. Ofrecemos asesoría sin costo para elegir el modelo adecuado.',
      items: [
        { title: 'Camilla rígida de aluminio',     desc: 'Para traslado en terreno plano. Liviana (8 kg) y con cintas de sujeción.' },
        { title: 'Camilla plegable de tela',       desc: 'Para almacenamiento compacto en botiquín o vehículo. Lista en segundos.' },
        { title: 'Camilla de cuchara (scoop)',     desc: 'Para inmovilización de posibles fracturas de columna: se abre y cierra sin mover al lesionado.' },
        { title: 'Camilla de canasta (Stokes)',    desc: 'Para rescate en terrenos difíciles, escaleras y extracción por ventanas en altura.' },
        { title: 'Camilla de evacuación de escalera', desc: 'Con patines de deslizamiento para evacuar a personas con movilidad reducida.' },
        { title: 'Tablero espinal largo',          desc: 'Para inmovilización completa de la columna en accidentes de tráfico o caídas.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Aplicaciones principales',
      titleLine1: '¿Qué instalaciones',
      titleLine2: 'necesitan camilla?',
      desc: 'La NOM-026-STPS establece la obligatoriedad de equipos de traslado en centros de trabajo con riesgo de lesiones que requieran inmovilización.',
      usos: [
        { label: 'Plantas industriales',           desc: 'Camilla de cuchara y tablero espinal para brigada de primeros auxilios.' },
        { label: 'Edificios de varios pisos',      desc: 'Camilla de escalera para evacuación de personas con movilidad reducida.' },
        { label: 'Construcción',                   desc: 'Camilla de canasta para rescate de lesionados en andamios o fosas.' },
        { label: 'Hoteles y centros de eventos',   desc: 'Camilla plegable en recepción para atención de desmayos y lesiones menores.' },
        { label: 'Escuelas y gimnasios',           desc: 'Camilla rígida para traslado de lesionados deportivos hasta el área médica.' },
        { label: 'Brigadas de emergencia',         desc: 'Conjunto completo para brigada de rescate: camilla, tablero, collarín y kit de curación.' },
      ],
    },
    relatedTitle: 'Otros equipos de primeros auxilios',
    faqItems: [
      { question: '¿Qué camilla es la más adecuada para mi empresa?', answer: 'Depende del tipo de riesgo más probable y las condiciones del traslado. Para oficinas: camilla plegable. Para plantas industriales: camilla de cuchara + tablero espinal. Para edificios de varios pisos: camilla de escalera. Le asesoramos sin costo.' },
      { question: '¿Las camillas requieren mantenimiento?', answer: 'Se recomienda limpieza y desinfección después de cada uso o trimestralmente. Revisión anual de cintas de sujeción y articulaciones. Las camillas de tela deben reemplazarse si el tejido muestra deterioro.' },
    ],
    waMessage: 'Hola, necesito cotizar camillas de emergencia en CDMX',
    ctaTitle: '¿Necesitas camillas para tu brigada de emergencia?',
    ctaBody: 'Te recomendamos el modelo correcto según el riesgo de tu instalación. Entrega en CDMX en 48 horas.',
  },

  // ── Desfibrilador DEA ───────────────────────────────────────
  'desfibrilador': {
    metaTitle: 'Desfibrilador DEA en CDMX | AED Philips y Zoll | Proyecto Red',
    metaDesc: 'Desfibriladores externos automáticos (DEA/AED) para centros de trabajo, edificios y eventos. Marcas Philips HeartStart y Zoll. Entrega en CDMX.',
    badge: 'AHA Guidelines',
    heroTitle: 'Desfibrilador',
    heroAccent: 'Externo Automático',
    heroSubtitle: 'Desfibriladores DEA (AED) que permiten a cualquier persona sin capacitación médica dar una descarga eléctrica salvavidas en caso de paro cardíaco.',
    heroDescRight: [
      'Marcas Philips HeartStart FRx, Zoll AED Plus y otros modelos certificados.',
      'Instrucciones de voz y visuales paso a paso para uso por personal no médico.',
      'Gabinete de pared con alarma de apertura para cada DEA.',
    ],
    stats: [
      { value: '< 5 min',   label: 'Tiempo crítico de uso'  },
      { value: '10×',       label: 'Mayor sobrevivencia'    },
      { value: 'Philips/Zoll', label: 'Marcas disponibles' },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Especificaciones del equipo',
      titleLine1: 'Tecnología que salva',
      titleLine2: 'vidas en minutos',
      desc: 'Cada minuto que pasa sin desfibrilación reduce en un 10% la probabilidad de supervivencia en un paro cardíaco. Un DEA en tu instalación puede marcar la diferencia.',
      items: [
        { title: 'Análisis automático del ritmo cardíaco', desc: 'El DEA evalúa si la descarga es apropiada y nunca libera energía en ritmo normal.' },
        { title: 'Instrucciones de voz claras',    desc: 'Guía al rescatador paso a paso: encender, colocar electrodos, alejarse, descargar.' },
        { title: 'Electrodos adulto/pediátrico',   desc: 'Parches de desfibrilación con gel conductor incluidos para uso inmediato.' },
        { title: 'Batería de larga duración',      desc: 'Las baterías duran 4–5 años en espera o hasta 200 descargas de uso.' },
        { title: 'IPX4 resistente a salpicaduras', desc: 'Uso en exteriores o áreas húmedas sin riesgo para el equipo.' },
        { title: 'Registro de evento CPR',         desc: 'Almacena datos del evento para revisión médica posterior al incidente.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Lugares donde se recomienda',
      titleLine1: '¿Dónde instalar',
      titleLine2: 'un desfibrilador DEA?',
      desc: 'Las guías de la American Heart Association (AHA) recomiendan colocar un DEA en cualquier lugar donde pueda reunirse 10,000 personas por año, o donde el tiempo de respuesta de los servicios de emergencia supere los 5 minutos.',
      usos: [
        { label: 'Oficinas corporativas',          desc: 'El paro cardíaco es la primera causa de muerte súbita en adultos de 18–65 años.' },
        { label: 'Centros comerciales',           desc: 'Alto flujo de personas aumenta la probabilidad estadística de un evento cardíaco.' },
        { label: 'Gimnasios y centros deportivos', desc: 'El esfuerzo físico intenso puede desencadenar arritmias ventriculares fatales.' },
        { label: 'Aeropuertos y terminales',       desc: 'Obligatorio en instalaciones de transporte público de alta afluencia.' },
        { label: 'Hoteles y casinos',             desc: 'Requerimiento de aseguradoras y estándares internacionales de seguridad.' },
        { label: 'Escuelas y universidades',       desc: 'Los eventos cardíacos en jóvenes existen y el DEA es la única intervención eficaz.' },
      ],
    },
    relatedTitle: 'Otros equipos de emergencia médica',
    faqItems: [
      { question: '¿Se necesita entrenamiento para usar un DEA?', answer: 'No es necesario, aunque sí es recomendable. El DEA está diseñado para ser usado por cualquier persona: las instrucciones de voz guían cada paso. Sin embargo, la capacitación en RCP y uso de DEA aumenta significativamente la efectividad de la respuesta.' },
      { question: '¿Con qué frecuencia se dan mantenimiento a los electrodos y batería?', answer: 'Los electrodos tienen fecha de vencimiento de 2 años y deben reemplazarse aunque no hayan sido usados. La batería dura 4–5 años. El DEA realiza autodiagnóstico diario y emite una señal visual si algo no está en orden.' },
      { question: '¿El DEA incluye gabinete de pared?', answer: 'Sí. Incluimos gabinete de montaje en pared con alarma de apertura (para alertar cuando alguien lo usa) y señalización conforme a NOM. También podemos instalar el gabinete y hacer la programación de ubicación en el mapa de emergencias del edificio.' },
    ],
    waMessage: 'Hola, necesito cotizar un desfibrilador DEA en CDMX',
    ctaTitle: '¿Tienes un DEA en tu instalación?',
    ctaBody: 'Un desfibrilador puede salvar una vida hoy. Te cotizamos el modelo correcto con gabinete e instalación en CDMX.',
  },

  // ── Oxígeno de Emergencia ───────────────────────────────────
  'oxigeno-emergencia': {
    metaTitle: 'Oxígeno de Emergencia en CDMX | Equipos Portátiles | Proyecto Red',
    metaDesc: 'Equipos de oxígeno de emergencia portátiles para brigadas y centros de trabajo. Cilindros, mascarillas y reguladores. NOM-235-SSA1. Entrega en CDMX.',
    badge: 'NOM-235-SSA1',
    heroTitle: 'Oxígeno',
    heroAccent: 'de Emergencia',
    heroSubtitle: 'Equipos portátiles de oxígeno médico para atención de emergencias en el centro de trabajo: intoxicaciones, desmayos, quemaduras y síndromes cardíacos.',
    heroDescRight: [
      'Cilindros de oxígeno de 0.5 a 10 litros en aluminio o acero con válvula CGA870.',
      'Reguladores de flujo fijo (2, 4, 6, 8 lpm) y de flujo a demanda.',
      'Mascarillas con reservorio, cánulas nasales y mascarillas Venturi incluidas.',
    ],
    stats: [
      { value: '0.5–10 L',  label: 'Capacidad de cilindro'  },
      { value: '2–15 lpm',  label: 'Flujo disponible'       },
      { value: 'NOM-235',   label: 'Cumplimiento SSA'       },
      { value: '48 h',      label: 'Entrega en CDMX'        },
    ],
    caracteristicas: {
      eyebrow: 'Componentes del equipo',
      titleLine1: 'Oxígeno disponible',
      titleLine2: 'cuando más se necesita',
      desc: 'El oxígeno suplementario es el primer apoyo en múltiples emergencias médicas: intoxicación por CO, paro cardíaco post-RCP, quemaduras respiratorias y síncope.',
      items: [
        { title: 'Cilindro de aluminio liviano',   desc: 'Opciones de 0.5 L (15 min), 2 L (1 hora) y 10 L (5+ horas) a 2,000 psi.' },
        { title: 'Regulador de flujo fijo',        desc: 'Control de flujo en 2, 4, 6, 8 y 10 lpm para diferentes necesidades clínicas.' },
        { title: 'Mascarilla con reservorio',      desc: 'Suministra hasta 15 lpm con concentración de O₂ de 90–95% al paciente.' },
        { title: 'Cánula nasal',                   desc: 'Para administración de bajo flujo (1–4 lpm) con mayor comodidad para el paciente.' },
        { title: 'Bolsa de transporte resistente', desc: 'Mochila o maletín con compartimentos para cilindro, regulador y accesorios.' },
        { title: 'Medidor de oximetría incluido', desc: 'Oxímetro de dedo para monitorear la saturación del paciente durante la atención.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Emergencias donde se utiliza',
      titleLine1: '¿Cuándo se necesita',
      titleLine2: 'oxígeno de emergencia?',
      desc: 'El oxígeno suplementario se indica en cualquier situación donde la saturación de oxígeno del paciente esté comprometida o exista riesgo de hipoxia.',
      usos: [
        { label: 'Intoxicación por CO o gases',    desc: 'El O₂ al 100% es el antídoto específico para la intoxicación por monóxido de carbono.' },
        { label: 'Post-reanimación cardíaca',      desc: 'Soporte ventilatorio tras la recuperación del pulso espontáneo.' },
        { label: 'Quemaduras y explosiones',       desc: 'Las vías aéreas pueden lesionarse; el O₂ reduce el daño tisular secundario.' },
        { label: 'Síncope y desmayo',              desc: 'Oxígeno de bajo flujo mientras se evalúa la causa del episodio sincopal.' },
        { label: 'Traumatismos graves',            desc: 'Soporte en fracturas múltiples, aplastamiento o lesiones con hemorragia.' },
        { label: 'Brigadas y eventos masivos',     desc: 'Equipos portátiles en el puesto de primeros auxilios para atención inmediata.' },
      ],
    },
    relatedTitle: 'Otros equipos de atención de emergencias',
    faqItems: [
      { question: '¿El cilindro de oxígeno necesita recarga periódica?', answer: 'Solo si ha sido utilizado. Un cilindro almacenado correctamente mantiene su carga de manera indefinida. Se recomienda verificar la presión con manómetro cada 6 meses y recargarlo si ha caído por debajo de 500 psi.' },
      { question: '¿Se necesita licencia para usar oxígeno médico?', answer: 'Para uso en brigadas de primeros auxilios en centros de trabajo no se requiere licencia médica. Sin embargo, recomendamos capacitación básica en administración de oxígeno para el personal de brigada que lo va a utilizar.' },
      { question: '¿Dónde se almacena el equipo de oxígeno?', answer: 'En un lugar fresco, ventilado, alejado de fuentes de calor y combustibles. Los cilindros deben estar siempre en posición vertical asegurados a la pared. No se deben almacenar en áreas de acceso público.' },
    ],
    waMessage: 'Hola, necesito cotizar equipos de oxígeno de emergencia en CDMX',
    ctaTitle: '¿Tienes oxígeno de emergencia en tu centro de trabajo?',
    ctaBody: 'Es parte obligatoria de la dotación para brigadas de emergencia. Te cotizamos el equipo completo con entrega en CDMX.',
  },

  // ── Material de Curación ────────────────────────────────────
  'material-curacion': {
    metaTitle: 'Material de Curación para Primeros Auxilios CDMX | STPS | Proyecto Red',
    metaDesc: 'Material de curación para botiquines y brigadas: gasas, vendas, antisépticos, inmovilizadores y sutura adhesiva. NOM-005-STPS. Entrega en CDMX.',
    badge: 'NOM-005-STPS',
    heroTitle: 'Material',
    heroAccent: 'de Curación',
    heroSubtitle: 'Suministro de materiales de curación de alta calidad para botiquines industriales, brigadas de emergencia y centros de salud en CDMX.',
    heroDescRight: [
      'Gasas estériles, vendas elásticas y de gasa, apósitos, curitas y esparadrapo.',
      'Antisépticos: solución de isodine, alcohol, agua oxigenada y suero fisiológico.',
      'Material especializado: inmovilizadores, apósitos para quemaduras y suturas adhesivas.',
    ],
    stats: [
      { value: 'NOM-005',   label: 'Estándar STPS'         },
      { value: '30+ SKUs',  label: 'Productos disponibles' },
      { value: 'Estéril',   label: 'Empaque garantizado'   },
      { value: '48 h',      label: 'Entrega en CDMX'       },
    ],
    caracteristicas: {
      eyebrow: 'Materiales disponibles',
      titleLine1: 'Todo lo necesario',
      titleLine2: 'para la primera atención',
      desc: 'El material de curación adecuado puede marcar la diferencia entre una lesión menor manejada correctamente y una complicación que requiere hospitalización.',
      items: [
        { title: 'Gasas estériles 5×5 cm y 10×10 cm', desc: 'Para limpieza y cubrimiento de heridas con mínimo riesgo de infección.' },
        { title: 'Vendas de gasa y elásticas',     desc: 'Inmovilización, compresión y retención de apósitos en extremidades y tronco.' },
        { title: 'Apósitos para quemaduras',       desc: 'Material no adherente con agente antimicrobiano para quemaduras de primer y segundo grado.' },
        { title: 'Antisépticos de amplio espectro', desc: 'Solución de isodine, clorhexidina y alcohol al 70% para limpieza de heridas.' },
        { title: 'Inmovilizadores blandos y rígidos', desc: 'Para fracturas y esguinces: tablillas de aluminio, collarines y vendajes triangulares.' },
        { title: 'Sutura adhesiva (Steri-strip)',  desc: 'Cierre no invasivo de heridas lineales que no requieren sutura quirúrgica.' },
      ],
    },
    cuandoUsar: {
      eyebrow: 'Uso en atención de emergencias',
      titleLine1: '¿Cuándo y cómo',
      titleLine2: 'usar material de curación?',
      desc: 'El material de curación se utiliza en la atención inmediata de lesiones hasta que el trabajador es trasladado a recibir atención médica formal.',
      usos: [
        { label: 'Heridas y laceraciones',         desc: 'Limpieza con antiséptico, compresión con gasa y cobertura con vendaje estéril.' },
        { label: 'Quemaduras de primer y segundo grado', desc: 'Apósitos específicos que mantienen la herida húmeda y protegida contra infecciones.' },
        { label: 'Fracturas y esguinces',          desc: 'Inmovilización temporal con tablilla y venda elástica hasta la atención médica.' },
        { label: 'Sangrados y contusiones',        desc: 'Compresión directa con gasa estéril y vendaje de presión para control de hemorragia.' },
        { label: 'Mantenimiento del botiquín',     desc: 'Reposición mensual de materiales usados o próximos a vencer.' },
        { label: 'Capacitación de brigadas',       desc: 'Material de práctica para cursos de primeros auxilios y RCP empresarial.' },
      ],
    },
    relatedTitle: 'Otros equipos de primeros auxilios',
    faqItems: [
      { question: '¿Cómo sé qué materiales reponer en mi botiquín?', answer: 'Llevamos el registro de materiales en la ficha técnica incluida con cada botiquín. Al final de cada uso, se registra el material empleado. Ofrecemos kits de reposición personalizados según el contenido de tu botiquín para simplificar el proceso.' },
      { question: '¿Los materiales tienen fecha de caducidad?', answer: 'Sí. Las gasas y apósitos estériles tienen fecha de esterilidad de 2 a 5 años desde la fabricación. Los antisépticos tienen caducidad de 12 a 24 meses. Se debe revisar y rotar el inventario del botiquín al menos una vez al año.' },
    ],
    waMessage: 'Hola, necesito cotizar material de curación para botiquines en CDMX',
    ctaTitle: '¿Necesitas reponer o equipar tus botiquines?',
    ctaBody: 'Te cotizamos el material exacto que necesitas según la NOM-005-STPS. Entrega en CDMX en 48 horas.',
  },
}
