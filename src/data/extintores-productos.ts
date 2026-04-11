// ============================================================
// src/data/extintores-productos.ts
// Datos completos para las páginas de Nivel 4 — productos de extintores
// Fuente de verdad para src/pages/extintores/[producto].astro
// ============================================================

export interface VarianteExtintor {
  nombre: string
  badge?: string
  desc: string
  specs: string
  img?: string
  waText: string
}

export interface ProductoExtintorData {
  // SEO & meta
  metaTitle: string
  metaDesc: string

  // Hero
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Imagen principal del producto
  img: string

  // Stats bar (4 ítems)
  stats: { value: string; label: string }[]

  // Variantes por capacidad (L4 nuevo — patron .ccard)
  variantes?: VarianteExtintor[]

  // Sección 1 — Características técnicas
  caracteristicas: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    bodyPara?: string
    items: { title: string; desc: string }[]
  }

  // Sección 2 — ¿Cuándo usar?
  cuandoUsar: {
    eyebrow: string
    titleLine1: string
    titleLine2?: string
    desc: string
    bodyPara?: string
    usos: { label: string; desc: string }[]
  }

  // Sección 3 — Otras opciones dentro de extintores
  relatedTitle: string

  // FAQ
  faqItems: { question: string; answer: string }[]

  // CTA Final
  waMessage: string
  ctaTitle: string
  ctaBody: string
}

// ============================================================
// Slugs de todos los productos de la categoría extintores
// Usados para generar el nav de subcategorías relacionadas
// ============================================================
export const EXTINTOR_PRODUCTS = [
  { slug: 'polvo-seco',      label: 'Polvo Seco PQS',          badge: 'Clase A·B·C' },
  { slug: 'co2',             label: 'CO₂',                     badge: 'Sin residuo'  },
  { slug: 'afff',            label: 'AFFF — Espuma',           badge: 'Clase B'      },
  { slug: 'tipo-k',          label: 'Tipo K',                  badge: 'Cocinas'      },
  { slug: 'purpura-k',       label: 'Púrpura K',               badge: 'Clase K'      },
  { slug: 'agua-a-presion',  label: 'Agua a Presión',          badge: 'Clase A'      },
  { slug: 'cold-fire',       label: 'Cold Fire',               badge: 'Ecológico'    },
  { slug: 'automaticos',     label: 'Automáticos',             badge: 'Sin activación' },
  { slug: 'abc',             label: 'ABC Multiusos',           badge: 'Universal'    },
  { slug: 'agente-limpio',   label: 'Agente Limpio',           badge: 'Datos · TI'   },
] as const

// ============================================================
// DATOS POR PRODUCTO
// ============================================================
export const EXTINTOR_PAGES: Record<string, ProductoExtintorData> = {

  // ──────────────────────────────────────────────────────────
  // 1. POLVO SECO PQS
  // ──────────────────────────────────────────────────────────
  'polvo-seco': {
    metaTitle: 'Extintores de Polvo Seco ABC (PQS) | Proyecto Red CDMX',
    metaDesc: 'Extintores de polvo seco PQS certificados NOM-154-SCFI. Clase A, B y C. Disponibles en 1, 2.5, 4, 6, 9 y 12 kg. Entrega en CDMX con documentación para Protección Civil.',

    badge: 'NOM-154-SCFI · El más utilizado en México',
    heroTitle: 'Extintores de',
    heroAccent: 'Polvo Seco ABC',
    heroSubtitle: 'El extintor de polvo seco PQS cubre fuegos clase A, B y C — el más versátil y el más exigido por Protección Civil. Extintores certificados NOM-154-SCFI, desde vehículos hasta planta industrial. Entrega el mismo día en CDMX y Estado de México.',
    heroDescRight: [
      'El polvo químico seco (PQS) interrumpe la reacción en cadena del fuego sobre materiales sólidos (clase A), líquidos inflamables (clase B) y equipos eléctricos (clase C). Su versatilidad lo hace el agente estándar para oficinas, bodegas, comercios, industria y vehículos en toda la República Mexicana.',
      'En Proyecto Red entregamos extintores PQS con ficha técnica, certificado de conformidad NOM-154-SCFI, garantía del fabricante y etiqueta de inspección. Todo lo necesario para tu expediente de Protección Civil y STPS en una sola compra, sin intermediarios.',
    ],
    stats: [
      { value: 'Desde $450',  label: 'MXN incluido IVA'  },
      { value: 'A · B · C',   label: 'Clases de fuego'   },
      { value: '1 – 50 kg',   label: 'Capacidades'       },
      { value: 'NOM-154',     label: 'Certificación'      },
    ],

    img: '/imagenes/extintores/polvo-seco.jpg',

    variantes: [
      {
        nombre: 'PQS 1 kg',
        badge: 'Vehículos',
        desc: 'Para cabina de camiones, motocicletas y vehículos de carga. Compacto y de fácil montaje. Reglamentario conforme a NOM-068-SCT-2 para transporte.',
        specs: 'Polvo ABC · 1 kg · ~5 s descarga · 2–3 m alcance',
        waText: 'Hola, quiero cotizar extintores PQS de 1 kg para vehículos',
      },
      {
        nombre: 'PQS 2.5 kg',
        badge: 'Compacto',
        desc: 'Para locales pequeños, cajas de escalera y vehículos grandes. Cumple el mínimo de peso para locales de hasta 100 m².',
        specs: 'Polvo ABC · 2.5 kg · ~8 s descarga · 3 m alcance',
        waText: 'Hola, quiero cotizar extintores PQS de 2.5 kg',
      },
      {
        nombre: 'PQS 4.5 kg',
        badge: 'Más vendido',
        desc: 'El más solicitado para oficinas, tiendas y locales comerciales. Cubre hasta 200 m². El mínimo que exige Protección Civil para cualquier inmueble con acceso al público.',
        specs: 'Polvo ABC · 4.5 kg · ~10 s descarga · 3–4 m alcance · 60 bar · Manómetro',
        waText: 'Hola, quiero cotizar extintores de polvo seco 4.5 kg',
      },
      {
        nombre: 'PQS 6 kg',
        desc: 'Estándar para talleres, bodegas pequeñas y plantas de manufactura ligera. Mayor carga de agente para áreas con mayor densidad de material combustible.',
        specs: 'Polvo ABC · 6 kg · ~13 s descarga · 4–5 m alcance · Manguera con boquilla',
        waText: 'Hola, quiero cotizar extintores de polvo seco 6 kg',
      },
      {
        nombre: 'PQS 9 kg',
        badge: 'Industrial',
        desc: 'Para zonas de riesgo medio-alto: almacenes con mercancía, pasillos de carga, áreas de maquinaria. Requerido por NOM-002-STPS en industria.',
        specs: 'Polvo ABC · 9 kg · ~18 s descarga · 4–5 m alcance · Soporte de pared incluido',
        waText: 'Hola, quiero cotizar extintores de polvo seco 9 kg',
      },
      {
        nombre: 'PQS 12 kg',
        badge: 'Alta capacidad',
        desc: 'Uso industrial intensivo: talleres de soldadura, montacargas, plantas con líquidos clase B. Para gabinete metálico visible. Inspección semestral recomendada.',
        specs: 'Polvo ABC · 12 kg · ~22 s descarga · 5–6 m alcance · Para gabinete metálico',
        waText: 'Hola, quiero cotizar extintores de polvo seco 12 kg',
      },
      {
        nombre: 'PQS Rodante 25–50 kg',
        badge: 'Gran capacidad',
        desc: 'Plantas industriales, estacionamientos y zonas de almacenamiento de combustible. Ruedas neumáticas para cubrir puntos distantes rápidamente.',
        specs: 'Polvo ABC · 25 / 35 / 50 kg · Rodante · Hasta 8 m alcance · Manguera 5 m',
        waText: 'Hola, quiero cotizar extintor rodante de polvo seco',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del extintor',
      titleLine2: 'de polvo seco PQS',
      desc: 'El polvo seco PQS es el estándar de la industria en México. Conoce sus especificaciones clave para seleccionar el tamaño y modelo correcto para tu instalación.',
      bodyPara: 'El monofosfato de amonio (PQS) es el agente más versátil para combustibles de clases A, B y C. Con certificación NOM-154-SCFI y operación probada en temperatura extrema, el polvo seco es la base de cualquier sistema de extinción mexicano — desde vehículos hasta planta industrial.',
      items: [
        {
          title: 'Agente extintor: PQS — monofosfato de amonio',
          desc: 'El monofosfato de amonio (PQS) interrumpe la reacción en cadena del fuego sobre materiales sólidos, líquidos y corrientes eléctricas. Eficiencia sobre clases A, B y C.',
        },
        {
          title: 'Presión de operación: 195 PSI (13.4 bar)',
          desc: 'El cilindro opera a presión constante, verificable mediante el manómetro en color verde. La NOM-154-SCFI exige manómetro visible y en buen estado en cada revisión anual.',
        },
        {
          title: 'Capacidades disponibles: 1, 2.5, 4, 6, 9, 12 y 50 kg',
          desc: 'Desde modelos portátiles de 1 kg para vehículos hasta extintores de 50 kg sobre ruedas para instalaciones industriales. El más solicitado en oficinas y comercios es el de 4 y 6 kg.',
        },
        {
          title: 'Tiempo de descarga: 8 a 30 segundos',
          desc: 'Varía según capacidad y temperatura ambiente. El extintor de 4 kg descarga en aprox. 12 segundos. La técnica correcta es apuntar a la base de la llama con movimientos de barrido.',
        },
        {
          title: 'Mantenimiento: anual + prueba hidrostática c/5 años',
          desc: 'La NOM-154-SCFI exige revisión anual del agente, presión, manguera, boquilla y estado del cilindro. La prueba hidrostática es obligatoria cada 5 años. Nosotros realizamos ambos servicios.',
        },
        {
          title: 'Temperatura de operación: -20 °C a +60 °C',
          desc: 'Funciona en rangos de temperatura extremos, lo que lo hace apto para bodegas, estacionamientos y espacios sin clima controlado en cualquier región de México.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar el extintor',
      titleLine2: 'de polvo seco?',
      desc: 'El PQS cubre la mayor parte de los riesgos de incendio en instalaciones comerciales e industriales. Estos son los principales casos de uso.',
      bodyPara: 'Su versatilidad triple (A–B–C) lo hace obligatorio en prácticamente toda instalación con acceso al público. Desde vehículos hasta industria pesada, el polvo seco es el referente de seguridad que Protección Civil y STPS exigen en México.',
      usos: [
        { label: 'Oficinas y áreas administrativas',  desc: 'El extintor de 4 kg es el recomendado para oficinas. La NOM-002-STPS exige al menos uno por cada 300 m² en áreas de trabajo.' },
        { label: 'Bodegas y almacenes',               desc: 'Se recomienda el modelo de 6 o 9 kg para bodegas con materiales combustibles. Colocar uno en cada acceso y cada 25 metros de pasillo.' },
        { label: 'Vehículos y transportes',           desc: 'Los modelos de 1 y 2.5 kg son los estándares para cabina de camiones, maquinaria pesada y flotillas. Requeridos por SCT para transporte de carga.' },
        { label: 'Locales comerciales y tiendas',     desc: 'Un extintor de 2.5 o 4 kg en zona de caja y uno en bodega posterior cubre el requerimiento básico de Protección Civil para locales comerciales.' },
        { label: 'Estacionamientos',                  desc: 'Extintores de 6 kg en cada nivel de estacionamiento, a no más de 23 metros de distancia entre ellos, conforme a NFPA 10.' },
        { label: 'Escuelas y centros educativos',     desc: 'El polvo seco ABC es el agente aprobado para espacios educativos. Se instala en pasillos, áreas de servicios y laboratorios.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿El extintor de polvo seco daña los equipos electrónicos?',
        answer: 'Sí. El polvo PQS deja un residuo de fosfato monoamónico que es corrosivo y muy difícil de limpiar en componentes electrónicos, tarjetas de circuito y maquinaria de precisión. Si en tu área hay servidores, equipos médicos o electrónica sensible, lo correcto es usar extintores de CO₂ o agente limpio para esas zonas, y reservar el PQS para áreas sin electrónica. Te asesoramos sin costo para que cada zona tenga el agente correcto.',
      },
      {
        question: '¿Qué tamaño de extintor necesito para mi oficina o local?',
        answer: 'La NOM-002-STPS y las guías de Protección Civil establecen que para un local de hasta 200 m² el extintor mínimo requerido es de 4.5 kg de polvo ABC. Para bodegas e industria la norma exige mayor capacidad. La regla práctica es que el extintor más cercano no debe estar a más de 15 metros de recorrido desde cualquier punto del área protegida. Si no estás seguro, te hacemos el diagnóstico de tu espacio sin costo.',
      },
      {
        question: '¿Cuál es la diferencia entre polvo seco ABC y polvo seco BC?',
        answer: 'El polvo ABC (PQS multiclase) contiene fosfato monoamónico y combate fuegos de clase A (sólidos), clase B (líquidos inflamables) y clase C (equipos eléctricos). El polvo BC contiene bicarbonato de sodio y solo cubre clases B y C — no es efectivo en fuegos de materiales sólidos. Para uso general en oficinas, comercios e industria se recomienda siempre el ABC, que es el que vendemos y recargamos.',
      },
      {
        question: '¿Cada cuánto necesita mantenimiento un extintor de polvo seco?',
        answer: 'La NOM-154-SCFI establece que todo extintor portátil debe recibir mantenimiento anual sin excepción — ya sea que se haya usado o no. Este mantenimiento incluye revisión del manómetro, estado de la manguera, boquilla y válvula, peso del agente extintor y limpieza general. Además, cada 5 años el cilindro debe pasar una prueba hidrostática para verificar su integridad estructural. Un extintor sin mantenimiento no solo falla en una emergencia — también genera multa en una inspección de STPS o Protección Civil.',
      },
      {
        question: '¿Por qué mi extintor de polvo perdió presión si nunca lo usé?',
        answer: 'Es uno de los problemas más comunes. Los extintores de polvo seco son de cilindro a presión permanente: el agente impulsor (nitrógeno seco) puede fugarse lentamente por desgaste de la válvula o por vibraciones acumuladas. Un extintor con manómetro en zona roja — por debajo de la zona verde — ya no funciona correctamente aunque esté lleno de polvo. La solución es una recarga completa con revisión de la válvula. No esperes a que falle en una emergencia.',
      },
      {
        question: '¿El polvo seco sirve para incendios en cocinas industriales?',
        answer: 'No es el agente recomendado para cocinas industriales. Los incendios de aceite vegetal o grasa animal a alta temperatura son fuegos de clase K, y el polvo PQS no los apaga eficientemente — en muchos casos el calor del aceite re-ignita después de la descarga. La norma NFPA 17A y las guías de Protección Civil especifican el uso de extintores Tipo K en zonas de cocción. Para el área de salón y servicio sí puedes usar PQS, pero en la cocina instala un Tipo K. Te cotizamos ambos en el mismo pedido.',
      },
      {
        question: '¿Los extintores incluyen documentación para Protección Civil?',
        answer: 'Sí. Cada extintor se entrega con ficha técnica, certificado de conformidad NOM-154-SCFI, garantía del fabricante y etiqueta de inspección. Todo lo necesario para integrar tu expediente de Protección Civil y STPS en una sola compra, sin necesidad de gestionar documentación por separado.',
      },
      {
        question: '¿Hacen mantenimiento a extintores de otras marcas?',
        answer: 'Sí. Recargamos y mantenemos extintores de polvo seco de cualquier marca: Amerex, Buckeye, Kidde, fabricación nacional y cualquier otro modelo certificado NOM. El servicio incluye revisión completa, recarga del agente, prueba de presión y collar de garantía con reporte para auditorías.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores de polvo seco PQS certificados NOM. ¿Podrían asesorarme?',
    ctaTitle: '¿Necesitas extintores de polvo seco en CDMX?',
    ctaBody: 'Dinos la cantidad de extintores, la capacidad que necesitas y si requieres instalación. Te cotizamos con precio, disponibilidad y tiempo de entrega.',
  },

  // ──────────────────────────────────────────────────────────
  // 2. CO₂
  // ──────────────────────────────────────────────────────────
  'co2': {
    metaTitle: 'Extintores de CO₂ — Dióxido de Carbono | Proyecto Red CDMX',
    metaDesc: 'Extintores de CO₂ sin residuo para equipos electrónicos, servidores y laboratorios. Certificados NOM-154-SCFI. Entrega en CDMX. Clase B y C.',

    badge: 'NOM-154-SCFI · Sin residuo · Clase B y C',
    heroTitle: 'Extintores de',
    heroAccent: 'CO₂',
    heroSubtitle: 'El extintor de dióxido de carbono actúa sin dejar residuo — ideal para proteger equipos electrónicos, servidores, laboratorios y archivos sin riesgo de daño secundario al equipo o documentos.',
    heroDescRight: [
      'El CO₂ actúa desplazando el oxígeno en el área del fuego y enfriando el agente combustible. Al descargarse no deja polvo, humedad ni residuo químico, por lo que es el agente preferido para centros de datos, cuartos de UPS, laboratorios con instrumentación sensible y archivos documentales.',
      'En Proyecto Red suministramos extintores de CO₂ en capacidades de 2.5, 5 y 10 kg, con boquilla corneta para descarga controlada. Todos certificados NOM-154-SCFI y entregados con documentación para Protección Civil.',
    ],
    stats: [
      { value: 'B · C',      label: 'Clases de fuego'  },
      { value: '0 residuo',  label: 'Sin daño al equipo' },
      { value: '2.5–10 kg',  label: 'Capacidades'       },
      { value: 'NOM-154',    label: 'Certificación'      },
    ],

    img: '/imagenes/extintores/co2.jpg',

    variantes: [
      {
        nombre: 'CO₂ 2.5 kg',
        badge: 'Compacto',
        desc: 'Para espacios pequeños con equipos electrónicos de valor medio: PCs de escritorio, impresoras, equipos de telecomunicaciones en oficinas. Fácil de transportar entre ubicaciones.',
        specs: 'CO₂ gaseoso · 2.5 kg · ~5 s descarga · 1.5–2 m alcance · Boquilla corneta metálica',
        waText: 'Hola, quiero cotizar extintores de CO₂ de 2.5 kg',
      },
      {
        nombre: 'CO₂ 5 kg',
        badge: 'Más vendido',
        desc: 'El más solicitado para cuartos de servidores, UPS, laboratorios y áreas con equipos eléctricos sensibles. Cubre eficientemente espacios de hasta 20 m².',
        specs: 'CO₂ gaseoso · 5 kg · ~7 s descarga · 2–2.5 m alcance · Presión 900 PSI · Pesaje requerido',
        waText: 'Hola, quiero cotizar extintores de CO₂ de 5 kg',
      },
      {
        nombre: 'CO₂ 10 kg',
        badge: 'Industrial',
        desc: 'Para cuartos eléctricos, subestaciones, generadores y plantas de mayor envergadura. Requiere montaje en carretilla por su peso.',
        specs: 'CO₂ gaseoso · 10 kg · ~12 s descarga · 2.5–3 m alcance · Presión 900 PSI · Soporte de pared o carretilla',
        waText: 'Hola, quiero cotizar extintores de CO₂ de 10 kg',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del',
      titleLine2: 'extintor de CO₂',
      desc: 'El CO₂ es único entre los agentes extintores porque trabaja por desplazamiento de oxígeno y enfriamiento, sin dejar rastro. Estas son sus especificaciones clave.',
      bodyPara: 'Sin residuo, sin corrosión, sin riesgo de daño secundario al equipo — el CO₂ es el agente indicado cuando el activo que proteges no tolera contaminación química. Ideal para TI, laboratorios y centros de datos donde cero daño al equipo es requisito.',
      items: [
        {
          title: 'Agente extintor: CO₂ — dióxido de carbono',
          desc: 'Gas inerte que desplaza el oxígeno del ambiente en la zona del fuego, cortando el triángulo del fuego sin reacción química sobre el material. No deja residuo alguno.',
        },
        {
          title: 'Boquilla corneta metálica',
          desc: 'La corneta permite dirigir el cono de descarga a la base de la llama con mayor eficiencia. La temperatura en la boquilla puede descender a -79 °C — no sostener la corneta directamente durante la descarga.',
        },
        {
          title: 'Presión interna: 850–900 PSI (58–62 bar)',
          desc: 'Opera a presión muy superior al polvo seco. El cilindro es más robusto y pesado. No lleva manómetro visible — la verificación de carga se realiza pesando el cilindro en el mantenimiento anual.',
        },
        {
          title: 'Capacidades: 2.5, 5 y 10 kg',
          desc: 'El extintor de 5 kg es el más común en instalaciones comerciales. El de 10 kg es adecuado para cuartos eléctricos, subestaciones y generadores. El de 2.5 kg para vehículos y espacios reducidos.',
        },
        {
          title: 'Alcance de descarga: 1.5 a 2.5 m',
          desc: 'El alcance es menor que el del PQS. Se debe actuar a distancia corta para mayor eficiencia. No usar en espacios abiertos o con viento — el agente se dispersa rápidamente.',
        },
        {
          title: 'No efectivo en clase A sin confinamiento',
          desc: 'El CO₂ no apaga fuegos de materiales sólidos en profundidad (clase A) porque no enfría la masa interna del material. Si el fuego es en madera, papel o textiles, combinarlo con polvo seco.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar el extintor',
      titleLine2: 'de CO₂?',
      desc: 'El CO₂ es el agente indicado cuando el equipo protegido no puede tolerar contaminación por polvo o humedad. Estos son sus principales casos de uso.',
      bodyPara: 'Es el agente recomendado por NFPA 2001 para proteger centros de datos, laboratorios, archivos y todo espacio donde la limpieza post-incendio del agente extintor impacte la continuidad de operaciones.',
      usos: [
        { label: 'Cuartos de servidores y centros de datos', desc: 'El agente estándar para TI. Sin residuo, sin corrosión, sin daño al equipo activo. Compatible con sistemas de supresión fija Novec, FM-200 y CO₂.' },
        { label: 'Laboratorios y equipos de medición',       desc: 'En laboratorios con instrumentación sensible, analizadores y equipos de cómputo industrial, el CO₂ protege sin contaminar el ambiente del proceso.' },
        { label: 'Cuartos eléctricos y UPS',                 desc: 'Para tableros de distribución, transformadores de baja tensión y equipos UPS. La descarga es segura sobre corrientes eléctricas vivas hasta 1,000 V.' },
        { label: 'Archivos y acervos documentales',          desc: 'Museos, archivos notariales, bibliotecas y acervos históricos. El CO₂ no moja ni mancha los documentos — daño cero al material impreso o fotográfico.' },
        { label: 'Bares y áreas de servicio',                desc: 'Para zonas de barra con equipo de cómputo y pantallas, el CO₂ de 5 kg es el agente recomendado para proteger sin dañar los equipos electrónicos.' },
        { label: 'Generadores y subestaciones',              desc: 'En cuartos de generadores eléctricos y subestaciones, el CO₂ de 10 kg actúa de forma limpia en fuegos eléctricos de Clase C.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿El CO₂ es peligroso para las personas?',
        answer: 'En espacios confinados, una descarga de CO₂ puede desplazar el oxígeno lo suficiente para afectar la respiración. Por eso, los extintores de CO₂ están diseñados para espacios pequeños donde se puede desalojar rápidamente. Para instalaciones más grandes se prefieren agentes limpios como FM-200 o Novec, que tienen concentraciones de diseño menores.',
      },
      {
        question: '¿Por qué el extintor de CO₂ no tiene manómetro?',
        answer: 'El CO₂ está almacenado en estado líquido a alta presión. La presión del gas sobre el líquido se mantiene constante hasta que el agente se agota, por lo que un manómetro no indicaría pérdida de carga. La única forma de verificar que el extintor está lleno es pesarlo y compararlo con el peso estampado en el cilindro. Por eso el mantenimiento anual con pesaje es obligatorio.',
      },
      {
        question: '¿El CO₂ apaga fuegos en madera o papel?',
        answer: 'Parcialmente. El CO₂ es efectivo en fuegos superficiales de clase A, pero no penetra en la masa del material para apagar brasas internas. Si hay posibilidad de re-ignición, se debe complementar con polvo seco ABC. Para archivos y cuartos de servidores el riesgo real es casi siempre eléctrico (Clase C), donde el CO₂ es el agente óptimo.',
      },
      {
        question: '¿Qué capacidad de CO₂ necesito para mi cuarto de servidores?',
        answer: 'La regla general es 1 extintor de 5 kg por cada 10–15 m² de cuarto de servidores. Para cuartos mayores a 30 m² se recomienda un sistema de supresión fija (FM-200, Novec o CO₂) en lugar de extintores portátiles. Te hacemos la evaluación sin costo.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores de CO₂ para proteger equipos electrónicos. ¿Podrían asesorarme?',
    ctaTitle: '¿Necesitas extintores de CO₂ en CDMX?',
    ctaBody: 'Dinos el tipo de instalación a proteger (servidores, tableros, laboratorio) y el espacio en m². Te indicamos la cantidad y capacidad exacta sin costo.',
  },

  // ──────────────────────────────────────────────────────────
  // 3. AFFF — ESPUMA
  // ──────────────────────────────────────────────────────────
  'afff': {
    metaTitle: 'Extintores AFFF — Espuma para Líquidos Inflamables | Proyecto Red',
    metaDesc: 'Extintores AFFF (espuma filmógena) para fuegos clase B: líquidos inflamables, gasolina, aceites. Certificados NOM-154-SCFI. Entrega en CDMX.',

    badge: 'NOM-154-SCFI · Clase B · Líquidos inflamables',
    heroTitle: 'Extintores',
    heroAccent: 'AFFF — Espuma',
    heroSubtitle: 'Los extintores AFFF (Aqueous Film Forming Foam) generan una película filmógena sobre la superficie del combustible, cortando el suministro de oxígeno y evitando la re-ignición. Ideales para gasolina, aceites, solventes y líquidos inflamables.',
    heroDescRight: [
      'La espuma AFFF actúa de manera diferente al polvo seco o CO₂: forma una capa acuosa sobre la superficie del líquido inflamable que sella el vapor combustible y enfría la zona simultáneamente. Esta doble acción la hace especialmente eficiente en fuegos de Clase B con riesgo de derrame.',
      'En Proyecto Red suministramos extintores AFFF en capacidades de 9, 20 y 50 litros, certificados NOM-154-SCFI. Son los extintores requeridos en estaciones de servicio, talleres mecánicos, plantas químicas y zonas de almacenamiento de combustible.',
    ],
    stats: [
      { value: 'Clase B',    label: 'Líquidos inflamables' },
      { value: 'AFFF',       label: 'Espuma filmógena'     },
      { value: '9–50 L',     label: 'Capacidades'           },
      { value: 'NOM-154',    label: 'Certificación'          },
    ],

    img: '/imagenes/extintores/afff.jpg',

    variantes: [
      {
        nombre: 'AFFF 9 L',
        badge: 'Portátil',
        desc: 'Para operación manual en talleres mecánicos, pequeñas estaciones de servicio y zonas de almacenamiento de lubricantes. Fácil de transportar entre ubicaciones.',
        specs: 'AFFF 3–6% · 9 litros · ~8 s descarga · 3–6 m alcance · Manguera con lanza atomizadora',
        waText: 'Hola, quiero cotizar extintores AFFF de 9 litros',
      },
      {
        nombre: 'AFFF 20 L',
        badge: 'Carretilla',
        desc: 'Para estaciones de servicio, plantas químicas y zonas de combustible de mediano volumen. Se instala sobre carretilla para movilidad dentro del sitio.',
        specs: 'AFFF 3–6% · 20 litros · ~12 s descarga · 4–6 m alcance · Carretilla de acero · Manguera 5 m',
        waText: 'Hola, quiero cotizar extintores AFFF de 20 litros',
      },
      {
        nombre: 'AFFF 50 L',
        badge: 'Industrial',
        desc: 'Para plantas petroquímicas, parques de almacenamiento de combustible y zonas de alto riesgo de derrame. Capacidad máxima portátil.',
        specs: 'AFFF 3–6% · 50 litros · ~18 s descarga · 5–8 m alcance · Carretilla reforzada · Manguera 8 m',
        waText: 'Hola, quiero cotizar extintores AFFF de 50 litros',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'extintores AFFF',
      desc: 'La espuma AFFF tiene propiedades únicas que la diferencian de otros agentes para fuegos de líquidos inflamables. Conoce sus especificaciones clave.',
      bodyPara: 'La película filmógena sobre el combustible es lo que diferencia al AFFF: sella el vapor y enfría simultáneamente, previniendo la re-ignición mucho mejor que agentes alternativos. El estándar en gasolineras, talleres y plantas con riesgo de derrames controlados.',
      items: [
        {
          title: 'Agente: espuma AFFF al 3% o 6%',
          desc: 'La solución AFFF se mezcla con agua en concentraciones del 3 o 6%. Al descargarse genera una película acuosa (film) sobre el combustible que sella el vapor y evita la re-ignición incluso después de la descarga.',
        },
        {
          title: 'Eficacia en clase A y B',
          desc: 'Además de líquidos inflamables (clase B), la espuma es eficaz sobre materiales sólidos (clase A) por su contenido de agua. No es apta para fuegos eléctricos (clase C) ni para metales (clase D).',
        },
        {
          title: 'Alcance de descarga: 3 a 6 metros',
          desc: 'Mayor alcance que el CO₂. La técnica correcta es no aplicar directamente sobre el líquido — se debe dirigir contra una pared o superficie adyacente para que la espuma caiga suavemente sobre el derrame.',
        },
        {
          title: 'Capacidades: 9, 20 y 50 litros',
          desc: 'El de 9 litros es portátil para operación manual. Los de 20 y 50 litros van sobre carretilla para instalaciones industriales con grandes zonas de riesgo de derrame.',
        },
        {
          title: 'Requiere mantenimiento anual con recarga de solución',
          desc: 'La solución AFFF puede degradarse con el tiempo. El mantenimiento anual debe incluir verificación de la concentración de la espuma y, según el fabricante, recarga completa cada 3–5 años.',
        },
        {
          title: 'Temperatura de operación: +4 °C a +50 °C',
          desc: 'La solución acuosa de AFFF puede congelarse a temperaturas bajo cero. Para instalaciones en climas fríos o cámaras frigoríficas se recomienda AFFF resistente a congelación o polvo seco.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar extintores',
      titleLine2: 'AFFF de espuma?',
      desc: 'Los extintores AFFF son el estándar para instalaciones con riesgo de fuego en líquidos inflamables. Estos son los principales casos de uso.',
      bodyPara: 'Su mecanismo de película filmógena lo hace especialmente efectivo en derrames de grandes volúmenes de combustible. Gasolineras, talleres y plantas químicas confían en AFFF porque controla tanto la llama como la prevención de re-ignición.',
      usos: [
        { label: 'Estaciones de servicio y gasolineras', desc: 'El AFFF es el agente preferido en áreas de despacho, pistas y bodega de almacenamiento de combustible por su capacidad de sellar derrames y evitar re-ignición.' },
        { label: 'Talleres mecánicos y hojalatería',     desc: 'Donde se trabaja con aceites, gasolina, solventes y desengrasantes inflamables. El AFFF controla derrames en piso mejor que el polvo seco.' },
        { label: 'Plantas químicas y farmacéuticas',     desc: 'Para zonas de almacenamiento de solventes, alcoholes, ésteres y aceites industriales. Se coordina con el sistema de supresión fija del área.' },
        { label: 'Helipuertos y aviación',               desc: 'El AFFF es el agente estándar para manejo de emergencias en plataformas de helicópteros y pistas de aterrizaje privadas.' },
        { label: 'Plantas de pintura y acabados',        desc: 'Donde se almacenan y usan pinturas, barnices y solventes inflamables. El AFFF controla fuegos de clase B mejor que cualquier otro agente portátil.' },
        { label: 'Almacenes de productos inflamables',   desc: 'Bodegas con aceites lubricantes, combustibles, alcoholes o solventes. Se combina con sistemas automáticos de rociadores para cobertura completa.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Qué diferencia hay entre AFFF y espuma AR-AFFF?',
        answer: 'El AFFF estándar es eficaz en hidrocarburos (gasolina, diésel, aceites). El AR-AFFF (Alcohol Resistant) agrega un polímero que también lo hace eficaz en solventes polares como alcoholes, cetonas y ésteres. Si tu instalación maneja solventes polares, debes especificar AR-AFFF al cotizar.',
      },
      {
        question: '¿El AFFF daña el medioambiente?',
        answer: 'Los AFFF tradicionales contienen PFAS (sustancias per y polifluoroalquiladas) que persisten en el ambiente. A nivel mundial se están sustituyendo por formulaciones fluorine-free (FFFP). En Proyecto Red ofrecemos ambas opciones — si tienes restricciones ambientales o ISO 14001, podemos cotizarte la versión libre de fluorine.',
      },
      {
        question: '¿El AFFF sirve para fuegos eléctricos?',
        answer: 'No. La espuma AFFF contiene agua y conduce electricidad. Nunca debe aplicarse en equipos eléctricos energizados. Para fuegos con componente eléctrico, use CO₂ o agente limpio primero para desactivar el equipo antes de aplicar espuma al derrame.',
      },
      {
        question: '¿Qué capacidad de AFFF necesito en mi estación de servicio?',
        answer: 'Para una pista de despacho estándar se requiere al menos 2 extintores de 9 litros por isla, más uno de 20 litros en el área de compresores. La distribución exacta depende del layout y el volumen de despacho. Te hacemos el levantamiento sin costo.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores AFFF de espuma para líquidos inflamables. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas extintores AFFF en CDMX?',
    ctaBody: 'Cuéntanos el tipo de instalación y el combustible o líquido que manejas. Te indicamos la capacidad correcta, la distribución y el costo.',
  },

  // ──────────────────────────────────────────────────────────
  // 4. TIPO K — COCINAS INDUSTRIALES
  // ──────────────────────────────────────────────────────────
  'tipo-k': {
    metaTitle: 'Extintores Tipo K para Cocinas Industriales | Proyecto Red CDMX',
    metaDesc: 'Extintores Tipo K para aceites y grasas de cocción. Obligatorios en restaurantes, hoteles y comedores industriales. NOM-154-SCFI y NFPA 17A. Entrega en CDMX.',

    badge: 'NFPA 17A · NOM-154-SCFI · Obligatorio en cocinas',
    heroTitle: 'Extintores',
    heroAccent: 'Tipo K',
    heroSubtitle: 'El extintor Tipo K es el único agente certificado para fuegos clase K en aceites y grasas de cocción a alta temperatura. Es obligatorio en toda cocina industrial, restaurante, hotel y comedor conforme a NFPA 17A y NOM-002-STPS.',
    heroDescRight: [
      'Los fuegos en cocinas industriales involucran aceites y grasas que superan los 360 °C — una temperatura a la que el polvo seco o el CO₂ no son eficaces. El extintor Tipo K contiene un agente alcalino acuoso que saponifica (convierte en jabón) las grasas al contacto, eliminando la llama y formando una capa protectora que evita la re-ignición.',
      'En Proyecto Red suministramos extintores Tipo K certificados para uso en campanas de cocción, freidoras industriales, planchas y líneas de cocción. Cada unidad se entrega con documentación para tu expediente de Protección Civil y STPS.',
    ],
    stats: [
      { value: 'Clase K',   label: 'Aceites y grasas'      },
      { value: 'NFPA 17A',  label: 'Norma aplicable'       },
      { value: '1.7–6 L',   label: 'Capacidades'            },
      { value: 'Obligatorio', label: 'En cocinas industriales' },
    ],

    img: '/imagenes/extintores/tipo-k.jpg',

    variantes: [
      {
        nombre: 'Tipo K 1.7 L',
        badge: 'Food truck',
        desc: 'Para food trucks, cocinas móviles y pequeñas freidoras independientes. Cumple requisitos legales de SEDEMA para vehículos con equipo de cocción.',
        specs: 'Agente alcalino acuoso · 1.7 L · ~3 s descarga · Boquilla niebla fina · Bajo costo',
        waText: 'Hola, quiero cotizar extintores Tipo K de 1.7 litros',
      },
      {
        nombre: 'Tipo K 3 L',
        badge: 'Más vendido - Restaurante',
        desc: 'El más solicitado para restaurantes, cafeterías y comedores industriales. Cubre una zona de cocción estándar conforme a NFPA 17A.',
        specs: 'Agente alcalino acuoso · 3 litros · ~5 s descarga · Boquilla niebla fina · Presión baja protegida',
        waText: 'Hola, quiero cotizar extintores Tipo K de 3 litros',
      },
      {
        nombre: 'Tipo K 6 L',
        badge: 'Industrial',
        desc: 'Para líneas de cocción extensas, freidoras industriales continuas y plantas de procesamiento de alimentos con alto volumen.',
        specs: 'Agente alcalino acuoso · 6 litros · ~8 s descarga · Boquilla niebla fina de alta penetración · Soporte de montaje incluido',
        waText: 'Hola, quiero cotizar extintores Tipo K de 6 litros',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del extintor',
      titleLine2: 'Tipo K',
      desc: 'El extintor Tipo K tiene un diseño específico para el riesgo de cocinas de alto rendimiento. Sus características lo hacen único entre todos los tipos de extintor.',
      bodyPara: 'La saponificación — conversión de grasas en jabón — es el mecanismo único del Tipo K que lo hace efectivo en temperaturas de cocción donde otros agentes fallan. Es obligatorio en toda cocina industrial conforme a NFPA 17A y NOM-002-STPS.',
      items: [
        {
          title: 'Agente: solución alcalina acuosa (acetato o citrato de potasio)',
          desc: 'La solución alcalina reacciona con los ácidos grasos del aceite caliente produciendo jabón (saponificación). Esta reacción enfría el aceite y forma una barrera que impide que los vapores combustibles alcancen el punto de re-ignición.',
        },
        {
          title: 'Presión baja — descarga tipo niebla fina',
          desc: 'El Tipo K opera a baja presión para evitar salpicar el aceite caliente y extender el incendio. La boquilla atomiza el agente en una niebla fina que cubre la superficie sin perturbación violenta.',
        },
        {
          title: 'Capacidades: 1.7, 3 y 6 litros',
          desc: 'El de 1.7 L se coloca directamente en la freidora o plancha. El de 3 L es el estándar para cocinas de restaurante. El de 6 L cubre líneas de cocción industriales más extensas.',
        },
        {
          title: 'Solo para clase K — no reemplaza al ABC en otras áreas',
          desc: 'El Tipo K está diseñado exclusivamente para fuegos clase K. No es eficaz en materiales sólidos (A), líquidos inflamables (B) o fuegos eléctricos (C). En la cocina siempre debe haber también un extintor ABC para el resto del local.',
        },
        {
          title: 'Instalación cerca de la campana de cocción',
          desc: 'NFPA 17A especifica que el extintor Tipo K debe instalarse a no más de 10 metros del riesgo que protege y en una ubicación accesible antes de llegar al fuego. Siempre en la trayectoria de salida del operador.',
        },
        {
          title: 'Mantenimiento: anual con inspección de agente',
          desc: 'El agente alcalino puede perder concentración con el tiempo. El mantenimiento anual debe incluir medición del pH del agente y verificación del sello de seguridad. Nosotros realizamos el servicio en sitio.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde es obligatorio el',
      titleLine2: 'extintor Tipo K?',
      desc: 'El Tipo K es el agente estándar de protección para todo riesgo de fuego en cocinas con aceites y grasas. Su instalación es obligatoria en los siguientes entornos.',
      bodyPara: 'No es opcional — es obligatorio por NFPA 17A en toda instalación con equipo de cocción que use aceite a alta temperatura. Polvo seco o CO₂ no son sustitutos válidos en este tipo de riesgo.',
      usos: [
        { label: 'Restaurantes y cafeterías',              desc: 'Obligatorio conforme a NFPA 17A. Se coloca dentro de la cocina, a la salida hacia el comedor, visible y accesible. Uno por zona de cocción.' },
        { label: 'Hoteles y banquetes',                    desc: 'En cocinas de producción masiva con múltiples líneas de cocción, freidoras industriales y planchas. Se complementa con sistema automático de supresión en campana.' },
        { label: 'Comedores industriales y plantas',       desc: 'Las plantas industriales con comedor para más de 50 personas deben tener cocina equipada con Tipo K conforme a la NOM-002-STPS.' },
        { label: 'Food trucks y cocinas móviles',          desc: 'Los vehículos con equipo de cocción de aceite deben llevar un extintor Tipo K de 1.7 L. Requerido para permiso de operación de la SEDEMA en CDMX.' },
        { label: 'Panadería y repostería industrial',      desc: 'Para hornos industriales con bandas de grasa y freidoras de donas o rosquillas. El Tipo K protege el área de aceite caliente; el ABC protege el resto de la planta.' },
        { label: 'Hospitales y centros de salud',          desc: 'Las cocinas de hospitales tienen los mismos requerimientos que los restaurantes. La NOM-002-STPS los incluye en la categoría de riesgo de incendio tipo cocina.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿El extintor Tipo K reemplaza al polvo seco ABC en mi cocina?',
        answer: 'No. El Tipo K protege solo el riesgo de aceites y grasas (clase K). En la cocina también hay materiales sólidos (madera, cartón, papel) y equipos eléctricos. Se debe tener un extintor ABC además del Tipo K para cubrir el resto de riesgos. La NOM-002-STPS exige los dos.',
      },
      {
        question: '¿Cuántos extintores Tipo K necesito en mi restaurante?',
        answer: 'NFPA 17A indica que el extintor Tipo K debe proteger cualquier equipo de cocción a no más de 10 metros de distancia. Para una cocina pequeña con una línea de fuego, es suficiente uno de 3 litros. Para cocinas con freidoras industriales y múltiples estaciones, hacer el cálculo por zona es lo correcto. Te hacemos la evaluación sin costo.',
      },
      {
        question: '¿Existe un sistema automático de supresión para cocinas industriales?',
        answer: 'Sí. Los sistemas de supresión automática para campanas (como Ansul R-102 o Amerex KP) se instalan directamente en la campana de extracción y se activan automáticamente ante un fuego en la línea de cocción. Son obligatorios en cocinas con más de 3 freidoras industriales o con producción de más de 500 cubiertos por turno. Nosotros los instalamos.',
      },
      {
        question: '¿El extintor Tipo K daña los equipos de cocción?',
        answer: 'El agente alcalino acuoso es corrosivo si se aplica sobre equipos de aluminio no recubierto. Los equipos de acero inoxidable 304 o 316 no se dañan. Después de usar el extintor es obligatorio limpiar con agua abundante y verificar el equipo antes de reiniciar la cocción.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores Tipo K para cocina industrial. ¿Pueden asesorarme?',
    ctaTitle: '¿Tienes una cocina industrial en CDMX?',
    ctaBody: 'Cuéntanos el tipo de equipo de cocción (freidoras, planchas, líneas de fuego) y el tamaño de la cocina. Te indicamos exactamente qué necesitas.',
  },

  // ──────────────────────────────────────────────────────────
  // 5. PÚRPURA K
  // ──────────────────────────────────────────────────────────
  'purpura-k': {
    metaTitle: 'Extintores Púrpura K — Agente Húmedo Clase K | Proyecto Red',
    metaDesc: 'Extintores Púrpura K de agente húmedo para fuegos clase K de alta eficiencia. Alternativa avanzada para cocinas industriales con alto volumen de aceite. CDMX.',

    badge: 'Clase K · Alta eficiencia · Agente húmedo',
    heroTitle: 'Extintores',
    heroAccent: 'Púrpura K',
    heroSubtitle: 'El extintor Púrpura K contiene un agente húmedo de alta eficiencia para fuegos clase K. Ofrece mayor capacidad de enfriamiento y efecto saponificante que el Tipo K estándar, recomendado para cocinas industriales de alto flujo y freidoras de gran volumen.',
    heroDescRight: [
      'El Púrpura K utiliza una solución de acetato de potasio más concentrada que el Tipo K convencional. Esta formulación permite una saponificación más rápida y una mayor capacidad de enfriamiento del aceite caliente, reduciendo el tiempo de control del fuego y el riesgo de re-ignición.',
      'En Proyecto Red lo recomendamos para restaurantes de alto volumen, cadenas de comida rápida con freidoras industriales continuas, plantas de procesamiento de alimentos y cualquier cocina donde la carga de aceite sea significativamente mayor que la media.',
    ],
    stats: [
      { value: 'Clase K',       label: 'Aceites y grasas'     },
      { value: 'Alta efic.',    label: 'Saponificación rápida' },
      { value: '1.7–6 L',       label: 'Capacidades'           },
      { value: 'NFPA 17A',      label: 'Norma aplicable'       },
    ],

    img: '/imagenes/extintores/purpura-k.jpg',

    variantes: [
      {
        nombre: 'Púrpura K 1.7 L',
        badge: 'Compact',
        desc: 'Para freidoras independientes y cocinas compactas con bajo volumen de aceite. Ideal en espacios reducidos donde cada centímetro cuenta.',
        specs: 'Acetato de potasio concentrado · 1.7 L · ~3 s descarga · Boquilla niebla ultrafina · Bajo perfil',
        waText: 'Hola, quiero cotizar extintores Púrpura K de 1.7 litros',
      },
      {
        nombre: 'Púrpura K 3 L',
        badge: 'Estándar',
        desc: 'Versión mejorada del Tipo K estándar para restaurantes con demanda moderada y operación continua. Mayor concentración = respuesta más rápida.',
        specs: 'Acetato de potasio concentrado · 3 litros · ~5 s descarga · Boquilla niebla de alta penetración · Agente premium',
        waText: 'Hola, quiero cotizar extintores Púrpura K de 3 litros',
      },
      {
        nombre: 'Púrpura K 6 L',
        badge: 'Alto volumen',
        desc: 'Para cadenas de comida rápida, plantas procesadoras y cocinas con múltiples freidoras industriales operando continuamente. Compatibilidad confirmada con sistemas Ansul.',
        specs: 'Acetato de potasio concentrado · 6 litros · ~8 s descarga · Niebla ultrafina de máxima cobertura · Compatible con Ansul R-102',
        waText: 'Hola, quiero cotizar extintores Púrpura K de 6 litros',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del',
      titleLine2: 'extintor Púrpura K',
      desc: 'El Púrpura K es la evolución del Tipo K estándar para instalaciones de mayor demanda. Estas son las características que lo diferencian.',
      bodyPara: 'Mayor concentración de potasio significa saponificación más rápida y efecto de enfriamiento superior en temperaturas extremas de cocción industrial. Es la opción para clientes que demandan máxima confiabilidad.',
      items: [
        {
          title: 'Agente: acetato de potasio concentrado',
          desc: 'Mayor concentración de potasio respecto al Tipo K convencional, lo que acelera la saponificación y el enfriamiento. La reacción química es más rápida e intensa, especialmente en fuegos por encima de 360 °C.',
        },
        {
          title: 'Eficacia superior en aceites a muy alta temperatura',
          desc: 'Diseñado para proteger freidoras industriales operando entre 175 °C y 400 °C. La carga de aceite no interfiere con la eficacia del agente — al contrario, la reacción de saponificación es más completa.',
        },
        {
          title: 'Descarga tipo niebla de alta penetración',
          desc: 'El sistema de boquilla produce una niebla más fina y uniforme que el Tipo K estándar, cubriendo la superficie del aceite con mayor homogeneidad y reduciendo el riesgo de salpicado.',
        },
        {
          title: 'Compatibilidad con sistemas automáticos Ansul',
          desc: 'El Púrpura K es el agente húmedo compatible con los sistemas Ansul R-102 y similares. Para instalaciones con supresión automática en campana, el extintor portátil Púrpura K es el complemento correcto.',
        },
        {
          title: 'Capacidades: 1.7, 3 y 6 litros',
          desc: 'Mismas capacidades físicas que el Tipo K, pero con mayor concentración de agente activo. El de 3 L del Púrpura K protege efectivamente el mismo riesgo que un Tipo K de 6 L convencional.',
        },
        {
          title: 'Mantenimiento: revisión anual con medición de pH',
          desc: 'El agente se verifica midiendo el pH de la solución en cada mantenimiento anual. Un pH por debajo del valor especificado por el fabricante indica degradación y requiere recarga.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Cuándo elegir el',
      titleLine2: 'Púrpura K sobre el Tipo K?',
      desc: 'El Púrpura K está recomendado en instalaciones donde la carga de aceite, la temperatura de operación o la continuidad del servicio exigen una respuesta más rápida y eficaz.',
      bodyPara: 'Cuando la velocidad de control importa más que el costo, cuando operas a máxima capacidad de forma continua, o cuando certificaciones NFPA estrictas requieren el agente de mayor eficacia — Púrpura K es la respuesta.',
      usos: [
        { label: 'Cadenas de comida rápida',              desc: 'Freidoras de alta producción continua con aceite a 175-195 °C. El Púrpura K responde más rápido que el Tipo K convencional en este rango de temperatura.' },
        { label: 'Plantas procesadoras de alimentos',     desc: 'Fritadoras industriales de gran capacidad para papas, chicharrón, botanas y productos empanizados. Volúmenes de aceite de 50 a 300 litros por tanque.' },
        { label: 'Cocinas de hospitales y estadios',      desc: 'Instalaciones con alta producción continua donde la prioridad es el control rápido del fuego y la reanudación del servicio en el menor tiempo posible.' },
        { label: 'Instalaciones con certificación NFPA',  desc: 'Clientes que deben cumplir auditorías NFPA estrictas (ISO, multinacionales, cadenas hoteleras internacionales) donde el Tipo K convencional no satisface los estándares del corporativo.' },
        { label: 'Junto a sistemas Ansul R-102',          desc: 'Para cocinas ya equipadas con supresión automática Ansul, el Púrpura K portátil es el complemento manual que mantiene la coherencia del agente extintor.' },
        { label: 'Freidoras de acero inoxidable 316',     desc: 'El agente del Púrpura K es compatible con acero inoxidable 316L, el material de equipos de alta gama. No genera corrosión en operación normal.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Cuál es la diferencia entre Tipo K y Púrpura K?',
        answer: 'Ambos son extintores de agente húmedo para clase K, pero el Púrpura K contiene una concentración mayor de acetato de potasio, lo que produce una saponificación más rápida y un mayor efecto de enfriamiento. En términos prácticos, el Púrpura K controla el fuego en menos tiempo y con menor riesgo de re-ignición en instalaciones con alta carga de aceite.',
      },
      {
        question: '¿El Púrpura K es más caro que el Tipo K?',
        answer: 'Sí, tiene un costo mayor debido a la concentración superior del agente. Sin embargo, el Púrpura K de 3 litros puede proteger efectivamente el mismo riesgo que un Tipo K de 6 litros, lo que puede compensar la diferencia de precio en instalaciones con espacio limitado.',
      },
      {
        question: '¿Está certificado el Púrpura K bajo NOM-154-SCFI?',
        answer: 'Sí. Los extintores de agente húmedo clase K que comercializamos, incluyendo el Púrpura K, cumplen con la NOM-154-SCFI y se entregan con certificado de conformidad. Son válidos para expedientes de Protección Civil y STPS.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores Púrpura K para cocina industrial. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas protección avanzada para tu cocina?',
    ctaBody: 'Cuéntanos el volumen de aceite, el tipo de freidoras y si ya tienes sistema automático Ansul. Te recomendamos la solución exacta para tu operación.',
  },

  // ──────────────────────────────────────────────────────────
  // 6. AGUA A PRESIÓN
  // ──────────────────────────────────────────────────────────
  'agua-a-presion': {
    metaTitle: 'Extintores de Agua a Presión — Clase A | Proyecto Red CDMX',
    metaDesc: 'Extintores de agua a presión para fuegos clase A: madera, papel, tela, plásticos. Sin químicos, sin residuo corrosivo. Certificados NOM-154-SCFI. CDMX.',

    badge: 'NOM-154-SCFI · Clase A · Materiales sólidos',
    heroTitle: 'Extintores de',
    heroAccent: 'Agua a Presión',
    heroSubtitle: 'Los extintores de agua a presión son el agente más natural y efectivo para fuegos clase A en materiales sólidos. No dejan residuo químico, son los más seguros para archivos y contenido delicado, y son los más económicos de recargar.',
    heroDescRight: [
      'El agua actúa extinguiendo el fuego por enfriamiento: absorbe el calor de la masa en combustión y reduce la temperatura por debajo del punto de ignición. En materiales sólidos como madera, papel, textiles y plásticos sin riesgo eléctrico, el agua es el agente más eficiente y el menos dañino para el entorno.',
      'En Proyecto Red suministramos extintores de agua a presión (almacenada) en capacidades de 9 y 20 litros, certificados NOM-154-SCFI. Son los preferidos en almacenes de papel y embalaje, escuelas, mercados y archivos documentales donde no hay riesgo eléctrico significativo.',
    ],
    stats: [
      { value: 'Clase A',    label: 'Materiales sólidos'  },
      { value: '0 químicos', label: 'Solo agua'            },
      { value: '9–20 L',     label: 'Capacidades'          },
      { value: 'NOM-154',    label: 'Certificación'        },
    ],

    img: '/imagenes/extintores/agua-a-presion.jpg',

    variantes: [
      {
        nombre: 'Agua a Presión 9 L',
        badge: 'Portátil',
        desc: 'Para operación manual en almacenes de materiales combustibles, escuelas y comercios sin riesgo eléctrico. Fácil de transportar y económico de recargar.',
        specs: 'Agua destilada · 9 litros · ~6 s descarga · 6–8 m alcance · Presión 50 bar · Sin corrosivo',
        waText: 'Hola, quiero cotizar extintores de agua a presión de 9 litros',
      },
      {
        nombre: 'Agua a Presión 20 L',
        badge: 'Carretilla',
        desc: 'Para bodegas de embalaje, depósitos de papel y plantas de alimentos. Se instala sobre carretilla para cubrir áreas extensas.',
        specs: 'Agua destilada · 20 litros · ~10 s descarga · 6–8 m alcance · Carretilla de acero · Presión 50 bar',
        waText: 'Hola, quiero cotizar extintores de agua a presión de 20 litros',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del extintor',
      titleLine2: 'de agua a presión',
      desc: 'El agua a presión es el agente extintor más simple y efectivo para materiales sólidos. Estas son sus especificaciones técnicas clave.',
      bodyPara: 'Sin químicos, sin residuo corrosivo — el agua actúa por enfriamiento puro. Es el agente más seguro para archivos, alimentos y áreas con personal sensible a químicos. También el más económico de recargar y mantener.',
      items: [
        {
          title: 'Agente: agua desmineralizada a presión almacenada',
          desc: 'El agua desmineralizada reduce el riesgo de corrosión del cilindro y las tuberías. La presión almacenada (nitrogen o aire) proporciona la descarga sin necesidad de cartucho de gas separado.',
        },
        {
          title: 'Presión de operación: 100–150 PSI',
          desc: 'Presión de descarga suficiente para un chorro directo de 9–12 metros. El manómetro muestra la zona verde cuando el extintor está cargado. La verificación visual es simple y rápida.',
        },
        {
          title: 'Capacidades: 9 y 20 litros (sobre ruedas)',
          desc: 'El de 9 litros es el más versátil para uso portátil. El de 20 litros en carretilla cubre áreas industriales con alta carga de materiales sólidos como papel, madera y tela.',
        },
        {
          title: 'Alcance: 9 a 12 metros',
          desc: 'El chorro de agua a presión tiene mayor alcance que el polvo seco o CO₂, permitiendo actuar desde mayor distancia en bodegas y almacenes grandes.',
        },
        {
          title: 'No usar en fuegos eléctricos (clase C)',
          desc: 'El agua conduce electricidad. Nunca aplicar en equipos eléctricos energizados. En instalaciones con mezcla de riesgos A y C, el agua se complementa con CO₂ o polvo seco para cubrir el riesgo eléctrico.',
        },
        {
          title: 'Recarga económica — solo agua y carga de gas',
          desc: 'El costo de recarga del extintor de agua es el más bajo de todos los agentes. No requiere químicos especiales. La recarga incluye purga del cilindro, revisión de válvula, llenado y carga de nitrógeno.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar extintores',
      titleLine2: 'de agua a presión?',
      desc: 'El extintor de agua a presión es el agente ideal cuando el riesgo es exclusivamente de materiales sólidos sin riesgo eléctrico. Estos son los principales entornos de uso.',
      bodyPara: 'Es el agente ideal en almacenes de papel, mercados, escuelas y archivos documentales donde la ausencia de riesgo eléctrico y el bajo costo de recarga hacen del agua la opción más económica y efectiva.',
      usos: [
        { label: 'Almacenes de papel y embalaje',     desc: 'La alta carga de papel y cartón es el escenario ideal para el agua. El enfriamiento profundo evita la re-ignición en el interior de fardos y pilas de material.' },
        { label: 'Mercados y plazas comerciales',     desc: 'En zonas de puestos sin riesgo eléctrico significativo, el agua es el agente más seguro para el público y el menos dañino para la mercancía alrededor del fuego.' },
        { label: 'Talleres de carpintería y madera',  desc: 'El aserrín y la viruta de madera son materiales de clase A que requieren enfriamiento profundo para controlar el fuego. El agua penetra mejor que el polvo seco.' },
        { label: 'Bodegas textiles y de ropa',        desc: 'Las telas y fibras son materiales porosos que absorben el calor. El agua los enfría en profundidad, algo que el CO₂ o el polvo seco no logran de la misma manera.' },
        { label: 'Archivos documentales sin riesgo eléctrico', desc: 'Para archivos físicos en papel sin equipos eléctricos activos, el agua es más limpia que el polvo seco aunque deja humedad. Se usa siempre que no hay corriente eléctrica presente.' },
        { label: 'Escuelas y espacios educativos rurales', desc: 'En escuelas sin equipos electrónicos de alto valor, el agua es el agente más accesible y económico de reponer. Se recomienda donde el costo de recarga es un factor crítico.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿El extintor de agua sirve para fuegos eléctricos?',
        answer: 'No. El agua conduce electricidad y puede provocar una electrocución si se aplica sobre equipos energizados. Para fuegos con componente eléctrico use CO₂ o polvo seco. El extintor de agua a presión es exclusivo para clase A (materiales sólidos) en instalaciones sin corriente eléctrica activa.',
      },
      {
        question: '¿El agua daña el equipo o la mercancía adyacente al fuego?',
        answer: 'El agua causa daño por humedad en materiales sensibles (electrónica, archivos, textiles finos). Sin embargo, en materiales sólidos como madera y cartón, ese daño es menor que el que causaría el polvo seco. El agua es el agente más limpio desde la perspectiva química — no deja residuo corrosivo.',
      },
      {
        question: '¿Cuánto cuesta recargar un extintor de agua?',
        answer: 'La recarga de un extintor de agua a presión es la más económica de todos los tipos. Para el modelo de 9 litros, el costo de recarga es significativamente menor que el de polvo seco o CO₂ porque solo requiere agua desmineralizada y carga de gas nitrógeno. Consúltanos precios.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores de agua a presión. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas extintores de agua a presión en CDMX?',
    ctaBody: 'Cuéntanos el tipo de instalación y los materiales que se almacenan. Te indicamos si el agua es la opción correcta o si necesitas un agente complementario.',
  },

  // ──────────────────────────────────────────────────────────
  // 7. COLD FIRE — ECOLÓGICO
  // ──────────────────────────────────────────────────────────
  'cold-fire': {
    metaTitle: 'Extintores Cold Fire — Agente Ecológico | Proyecto Red CDMX',
    metaDesc: 'Extintores Cold Fire a base de agua con aditivos orgánicos biodegradables. No tóxico, no corrosivo, clase A y B. Certificados NOM-154-SCFI. Entrega en CDMX.',

    badge: 'Ecológico · Biodegradable · Clase A y B',
    heroTitle: 'Extintores',
    heroAccent: 'Cold Fire',
    heroSubtitle: 'Cold Fire es un agente extintor a base de agua con aditivos orgánicos biodegradables que reduce drásticamente la temperatura del fuego. No tóxico, no corrosivo y con mínimo daño colateral — ideal para espacios con personas, equipo sensible o exigencias ambientales.',
    heroDescRight: [
      'Cold Fire actúa por absorción de calor a nivel molecular: el agente encapsula las moléculas de calor y las elimina rápidamente, reduciendo la temperatura del material en combustión muy por debajo del punto de re-ignición. Es el agente con mayor eficiencia energética por litro descargado.',
      'Su formulación libre de fluorine (PFAS-free), biodegradable y no corrosiva lo hace la alternativa preferida en empresas con certificación ambiental (ISO 14001), establecimientos de alto tráfico y zonas donde el daño colateral del agente es un factor determinante.',
    ],
    stats: [
      { value: 'A · B',         label: 'Clases de fuego'       },
      { value: 'Biodegradable', label: 'Sin fluorine (PFAS-free)' },
      { value: '2.5–20 L',      label: 'Capacidades'            },
      { value: 'NOM-154',       label: 'Certificación'          },
    ],

    img: '/imagenes/extintores/cold-fire/galeria-1.jpg',

    variantes: [
      {
        nombre: 'Cold Fire 2.5 L',
        badge: 'Compacto',
        desc: 'Para museos, guarderías y espacios donde la seguridad no-tóxica es prioritaria. Volumen reducido para áreas pequeñas sin sacrificar eficacia.',
        specs: 'Agente orgánico · 2.5 litros · ~4 s descarga · 4–6 m alcance · No tóxico · Biodegradable',
        waText: 'Hola, quiero cotizar extintores Cold Fire de 2.5 litros',
      },
      {
        nombre: 'Cold Fire 9 L',
        badge: 'Estándar',
        desc: 'Para hospitales, escuelas y bodegas con materiales sensibles. El más equilibrado entre capacidad, portabilidad y costo.',
        specs: 'Agente orgánico · 9 litros · ~6 s descarga · 5–8 m alcance · PFAS-free · ISO 14001',
        waText: 'Hola, quiero cotizar extintores Cold Fire de 9 litros',
      },
      {
        nombre: 'Cold Fire 20 L',
        badge: 'Industrial',
        desc: 'Para plantas con certificación ambiental y almacenes donde el daño colateral y la contaminación deben ser cero.',
        specs: 'Agente orgánico · 20 litros · ~8 s descarga · 6–8 m alcance · Carretilla · Compatible LEED',
        waText: 'Hola, quiero cotizar extintores Cold Fire de 20 litros',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características del agente',
      titleLine2: 'Cold Fire',
      desc: 'Cold Fire combina eficacia extintor con mínimo impacto ambiental. Estas son las características técnicas que lo distinguen de otros agentes.',
      bodyPara: 'Sin fluorine, sin toxicidad para personas, completamente biodegradable — Cold Fire es la respuesta cuando proteges activos con certificación ambiental o cuando el daño colateral del agente es inaceptable.',
      items: [
        {
          title: 'Agente: agua con aditivos orgánicos encapsuladores',
          desc: 'La fórmula orgánica patentada absorbe las moléculas de calor y las encapsula, impidiendo que el combustible alcance nuevamente el punto de ignición. El resultado es un enfriamiento permanente, no solo superficial.',
        },
        {
          title: 'PFAS-free — sin fluorine, sin PFOS ni PFOA',
          desc: 'A diferencia del AFFF tradicional, Cold Fire no contiene compuestos perfluorados. Cumple con las regulaciones ambientales más estrictas de Europa y EE.UU. Ideal para empresas con políticas de sustentabilidad.',
        },
        {
          title: 'Eficacia en clase A y B',
          desc: 'Controla fuegos en materiales sólidos (A) y líquidos inflamables (B). No apto para fuegos eléctricos activos (C) por su contenido de agua, ni para fuegos de aceite a muy alta temperatura (K).',
        },
        {
          title: 'No tóxico — seguro en espacios con personas',
          desc: 'La fórmula es no tóxica para personas y animales, incluso en concentraciones altas. No requiere desalojo inmediato del local después de la descarga, a diferencia del CO₂ en espacios confinados.',
        },
        {
          title: 'No corrosivo — protege equipos e instalaciones',
          desc: 'No produce corrosión en metales ni daños en plásticos, gomas o pinturas. El daño post-uso en el equipo adyacente al fuego es mínimo. La limpieza post-incendio es más simple que con polvo seco.',
        },
        {
          title: 'Biodegradable — sin residuo ambiental',
          desc: 'El agente se degrada naturalmente sin dejar contaminantes en agua o suelo. Puede lavarse con agua corriente sin necesidad de manejo especial de residuos. Cumple ISO 14001 y criterios de green building (LEED).',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar extintores',
      titleLine2: 'Cold Fire?',
      desc: 'Cold Fire es la elección correcta cuando la seguridad de las personas, el impacto ambiental o la protección del equipo son factores tan importantes como la eficacia extintor.',
      bodyPara: 'Es la opción preferida en instituciones de salud, educación, patrimonio y empresas con ISO 14001 donde la seguridad humana y la responsabilidad ambiental se equiparan con la necesidad de extinción rápida.',
      usos: [
        { label: 'Empresas con ISO 14001 o LEED',          desc: 'El agente biodegradable sin fluorine es la única opción que cumple criterios de gestión ambiental en extinción de incendios. Documentamos el producto para tu auditoría.' },
        { label: 'Museos y sitios patrimoniales',           desc: 'El mínimo daño colateral del Cold Fire protege obras de arte, textiles históricos y documentos. Sin polvo ni corrosión que dañe el material cultural.' },
        { label: 'Hospitales y clínicas',                   desc: 'No tóxico para pacientes, personal y visitantes. Sin necesidad de desalojo inmediato. Compatible con zonas de cuidados intensivos y salas de operaciones.' },
        { label: 'Guarderías, escuelas y espacios infantiles', desc: 'La seguridad de los niños ante la descarga del agente es una prioridad. Cold Fire no presenta riesgo de intoxicación en descarga accidental.' },
        { label: 'Bodegas con materiales sensibles',        desc: 'Para bodegas con vinos, alimentos, cosméticos o farmacéuticos donde el agente extintor no debe contaminar el producto. Cold Fire no altera aromas ni ingredientes.' },
        { label: 'Zonas naturales y parques',               desc: 'Para instalaciones dentro de áreas naturales protegidas o cercanas a cuerpos de agua. El agente no contaminará el suelo ni el agua subterránea.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Cold Fire es tan eficaz como el polvo seco PQS?',
        answer: 'En clase A (materiales sólidos), Cold Fire es igual o más eficaz que el PQS porque enfría la masa del material en profundidad, evitando re-ignición. En clase B (líquidos), es eficaz en fuegos superficiales, aunque en grandes derrames el AFFF puede ser más adecuado. La ventaja de Cold Fire está en el daño colateral mínimo y la seguridad de las personas.',
      },
      {
        question: '¿Cold Fire está certificado en México?',
        answer: 'Sí. Los extintores Cold Fire que comercializamos cumplen con la NOM-154-SCFI y se entregan con certificado de conformidad, ficha técnica y etiqueta de inspección. Son válidos para expedientes de Protección Civil y STPS.',
      },
      {
        question: '¿Se puede usar Cold Fire en fuegos eléctricos?',
        answer: 'No directamente sobre equipos energizados — el agente contiene agua y conduce electricidad. Sin embargo, si el equipo ya no está energizado, puede usarse sin riesgo. Para fuegos con componente eléctrico activo, use CO₂ primero para cortar la corriente, y luego Cold Fire si hay materiales sólidos involucrados.',
      },
      {
        question: '¿Cuánto cuesta un extintor Cold Fire comparado con el PQS?',
        answer: 'El Cold Fire tiene un costo mayor al PQS convencional, pero menor que el CO₂ o el agente limpio. La diferencia de precio se justifica en instalaciones donde el impacto del agente sobre el entorno o las personas es un factor relevante. Consúltanos precios para tu caso específico.',
      },
    ],

    waMessage: 'Hola, me interesa el extintor Cold Fire ecológico. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas un agente extintor ecológico?',
    ctaBody: 'Cuéntanos el tipo de instalación y si tienes certificación ambiental o requisitos especiales. Te recomendamos la solución correcta con documentación incluida.',
  },

  // ──────────────────────────────────────────────────────────
  // 8. AUTOMÁTICOS
  // ──────────────────────────────────────────────────────────
  'automaticos': {
    metaTitle: 'Extintores Automáticos — Sin Activación Manual | Proyecto Red',
    metaDesc: 'Extintores automáticos que se activan sin intervención humana ante calor o llama. Para cocinas de riesgo, cuartos eléctricos y espacios sin supervisión. CDMX.',

    badge: 'Activación automática · Sin intervención humana',
    heroTitle: 'Extintores',
    heroAccent: 'Automáticos',
    heroSubtitle: 'Los extintores automáticos detectan el fuego por temperatura o llama directa y descargan sin necesidad de intervención humana. Diseñados para proteger cocinas de alto riesgo, cuartos eléctricos, generadores y espacios sin supervisión permanente.',
    heroDescRight: [
      'A diferencia de los extintores portátiles que requieren un operador, los extintores automáticos tienen un mecanismo de activación por temperatura (bulbo de cristal o fusible metálico) o por detección de llama que dispara la descarga de manera autónoma en segundos desde que se inicia el fuego.',
      'En Proyecto Red suministramos extintores automáticos de polvo seco PQS, CO₂ y agente limpio en versiones techo, pared y posicionamiento directo sobre el riesgo. Son la solución más efectiva para espacios donde nadie está presente cuando ocurre un incendio.',
    ],
    stats: [
      { value: 'Automático',  label: 'Sin intervención'      },
      { value: '~70 °C',      label: 'Temperatura de disparo' },
      { value: 'PQS · CO₂ · AL', label: 'Agentes disponibles' },
      { value: '24/7',        label: 'Protección continua'   },
    ],

    img: '/imagenes/extintores/automaticos.jpg',

    variantes: [
      {
        nombre: 'Automático PQS 1 kg',
        badge: 'Cocina',
        desc: 'Para freidoras domésticas o pequeños focos de riesgo de fuego clase A-B. Disparo a 70°C sin intervención.',
        specs: 'Polvo ABC · 1 kg · Bulbo de cristal 70°C · Disparo automático · Montaje en pared o techo',
        waText: 'Hola, quiero cotizar extintores automáticos PQS de 1 kg',
      },
      {
        nombre: 'Automático PQS 6 kg',
        badge: 'Bodega',
        desc: 'Para bodegas, pasillos de carga y áreas de riesgo sin supervisión permanente. Protección 24/7 sin operador.',
        specs: 'Polvo ABC · 6 kg · Bulbo de cristal 70°C · Área de protección ~50 m³ · Montaje en techo',
        waText: 'Hola, quiero cotizar extintores automáticos PQS de 6 kg',
      },
      {
        nombre: 'Automático CO₂ 2 kg',
        badge: 'Eléctrico',
        desc: 'Para cuartos eléctricos y equipos de cómputo sin residuo. Disparo inmediato ante arco o sobrecalentamiento.',
        specs: 'CO₂ gaseoso · 2 kg · Bulbo de cristal 79°C · Sin daño a electrónica · Montaje directo en cuadro',
        waText: 'Hola, quiero cotizar extintores automáticos CO₂ de 2 kg',
      },
      {
        nombre: 'Automático CO₂ 5 kg',
        badge: 'Servidores',
        desc: 'Para racks de servidores y cuartos de comunicaciones. Máxima protección sin daño al equipo activo.',
        specs: 'CO₂ gaseoso · 5 kg · Bulbo de cristal 79°C · Descarga automática inmediata · Compatible NFPA',
        waText: 'Hola, quiero cotizar extintores automáticos CO₂ de 5 kg',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'extintores automáticos',
      desc: 'Los extintores automáticos incorporan un mecanismo de detección y disparo propio. Estas son las características que determinan su selección e instalación.',
      bodyPara: 'Su gran ventaja es responder sin intervención humana en espacios sin supervisión o donde el tiempo de reacción es crítico. PQS para riesgos generales, CO₂ para equipo eléctrico — el agente se elige según el riesgo específico a proteger.',
      items: [
        {
          title: 'Mecanismo de activación: bulbo de cristal o fusible',
          desc: 'El bulbo de cristal se rompe a una temperatura específica (68, 79, 93 o 141 °C) liberando el mecanismo de disparo. El fusible metálico opera de manera similar. La temperatura de selección debe corresponder a la temperatura ambiente máxima del espacio más un margen de seguridad.',
        },
        {
          title: 'Agentes disponibles: PQS, CO₂ y agente limpio',
          desc: 'El agente se selecciona según el riesgo: PQS para cocinas y bodegas, CO₂ para cuartos de servidores, agente limpio para espacios con equipos de alto valor donde no puede haber residuo.',
        },
        {
          title: 'Instalación en techo, pared o posición directa',
          desc: 'Se montan directamente sobre o cerca del riesgo (encima de una freidora, dentro de un cuadro eléctrico, sobre un generador) o en techo para protección de área. La posición correcta es crucial para la eficacia de la descarga.',
        },
        {
          title: 'No requieren energía eléctrica para operar',
          desc: 'El mecanismo de disparo es completamente mecánico o por presión interna del agente. No dependen de alimentación eléctrica, por lo que funcionan incluso si el fallo eléctrico fue la causa del incendio.',
        },
        {
          title: 'Capacidades: 1 a 12 kg (PQS), 2 a 5 kg (CO₂)',
          desc: 'El tamaño se calcula según el volumen del espacio a proteger y el tipo de riesgo. Para una cocina doméstica de riesgo medio, 1-2 kg de PQS. Para un cuarto eléctrico, 5 kg de CO₂ o agente limpio.',
        },
        {
          title: 'Inspección semestral obligatoria',
          desc: 'El bulbo o fusible debe inspeccionarse cada 6 meses para verificar que no esté dañado, corroído o en riesgo de activación prematura. La inspección incluye también el estado del cilindro, la válvula y el agente.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde instalar extintores',
      titleLine2: 'automáticos?',
      desc: 'Los extintores automáticos son la primera línea de defensa en espacios donde no hay personal presente todo el tiempo o donde la velocidad de respuesta es crítica.',
      bodyPara: 'Indispensables en cocinas de riesgo, cuartos eléctricos y espacios sin vigilancia permanente. Actúan en segundos sin esperar a que alguien detecte el fuego — la diferencia entre control y desastre.',
      usos: [
        { label: 'Cocinas con campana sin sistema Ansul',  desc: 'Para cocinas que no tienen sistema de supresión automática en la campana pero tienen freidoras o líneas de cocción de alto riesgo. El automático encima de la freidora actúa en segundos.' },
        { label: 'Cuartos eléctricos y tableros',          desc: 'Dentro del cuarto de tableros, el extintor automático de CO₂ o agente limpio actúa de inmediato ante un arco eléctrico o cortocircuito sin necesidad de operador.' },
        { label: 'Generadores y motores diesel',           desc: 'En cuartos de generadores sin vigilancia permanente, el automático de PQS montado sobre el motor se activa cuando la temperatura del motor alcanza el umbral de disparo.' },
        { label: 'Servidores y cuartos de comunicaciones', desc: 'En racks de servidores pequeños o cuartos de telecomunicaciones, el automático de agente limpio protege sin daño al equipo y sin necesidad de personal en sitio.' },
        { label: 'Vehículos y maquinaria pesada',          desc: 'En compartimientos de motor de camiones, excavadoras y maquinaria con sistemas de lubricación caliente. El automático de PQS en el compartimiento de motor es la protección estándar.' },
        { label: 'Espacios de almacenamiento sin vigilancia', desc: 'Bodegas sin personal permanente durante la noche o fines de semana. El automático en el área de mayor riesgo actúa inmediatamente sin esperar la llegada de los bomberos.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Un extintor automático reemplaza al sistema de rociadores?',
        answer: 'No. Los extintores automáticos son unidades de protección puntual de pequeños espacios o riesgos específicos. Un sistema de rociadores automáticos (sprinklers) protege toda el área de un edificio. Para protección general de planta se requiere el sistema de rociadores. El extintor automático es un complemento para riesgos específicos de alto riesgo.',
      },
      {
        question: '¿Se puede reactivar un extintor automático después de que se disparó?',
        answer: 'No directamente — una vez que el bulbo se rompe o el fusible se funde, el mecanismo de activación debe reemplazarse completo junto con la recarga del agente. El costo de reactivación incluye recarga del agente, nuevo bulbo o fusible y revisión de la válvula.',
      },
      {
        question: '¿El extintor automático puede activarse por accidente si hace mucho calor?',
        answer: 'Existe ese riesgo si se selecciona una temperatura de disparo demasiado baja para el entorno. Por ejemplo, en una cocina que normalmente opera a 60 °C, no debe instalarse un bulbo de 68 °C. La selección correcta de la temperatura de disparo es fundamental y la hacemos nosotros en la visita técnica.',
      },
      {
        question: '¿Qué pasa con el extintor automático si el fuego ya se apagó solo?',
        answer: 'El extintor no se activa si el fuego no genera suficiente calor para romper el bulbo. Sin embargo, si el fuego fue controlado por otro medio antes de que el automático se disparara, el bulbo queda intacto para una próxima ocasión. La inspección semestral verifica que el bulbo siga en condiciones.',
      },
    ],

    waMessage: 'Hola, necesito extintores automáticos para una cocina o cuarto eléctrico. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas protección automática sin intervención humana?',
    ctaBody: 'Cuéntanos el espacio o equipo que quieres proteger y si hay personal permanente. Hacemos la visita técnica sin costo y te recomendamos el agente y temperatura correctos.',
  },

  // ──────────────────────────────────────────────────────────
  // 9. ABC MULTIUSOS
  // ──────────────────────────────────────────────────────────
  'abc': {
    metaTitle: 'Extintores ABC Multiusos — Cobertura Universal | Proyecto Red',
    metaDesc: 'Extintores multiusos clase A, B y C. La solución de protección más completa para instalaciones con riesgos mixtos. Certificados NOM-154-SCFI. Entrega en CDMX.',

    badge: 'NOM-154-SCFI · Clases A · B · C — Uso universal',
    heroTitle: 'Extintores',
    heroAccent: 'ABC Multiusos',
    heroSubtitle: 'Los extintores ABC multiusos son la solución de protección más versátil para instalaciones con riesgos mixtos. Un solo tipo de extintor cubre materiales sólidos (A), líquidos inflamables (B) y fuegos eléctricos (C) — eliminando la necesidad de múltiples agentes especializados.',
    heroDescRight: [
      'La clasificación ABC no se refiere a un agente específico sino a la cobertura de clases de fuego. En la práctica, los extintores ABC multiusos que comercializamos contienen polvo químico seco (PQS) de monofosfato de amonio, el agente capaz de actuar sobre los tres tipos de fuego más comunes en instalaciones comerciales e industriales.',
      'Su principal ventaja es la simplicidad operativa: un solo extintor en cualquier punto de la instalación cubre la mayoría de los escenarios posibles. Esto reduce el número total de extintores necesarios y simplifica la capacitación de brigadas y personal.',
    ],
    stats: [
      { value: 'A · B · C',    label: 'Triple cobertura'     },
      { value: 'PQS',          label: 'Agente extintor'      },
      { value: '1 – 50 kg',    label: 'Capacidades'          },
      { value: 'NOM-154',      label: 'Certificación'        },
    ],

    img: '/imagenes/extintores/abc.jpg',

    variantes: [
      {
        nombre: 'ABC 1 kg',
        badge: 'Vehículos',
        desc: 'Para cabinas de vehículos comerciales y equipamiento básico de emergencia. Cumple NOM-068-SCT-2 para transporte.',
        specs: 'Polvo ABC · 1 kg · ~5 s descarga · 2–3 m alcance · Compacto',
        waText: 'Hola, quiero cotizar extintores ABC de 1 kg para vehículos',
      },
      {
        nombre: 'ABC 2.5 kg',
        badge: 'Compacto',
        desc: 'Para espacios pequeños, cajas de escalera y pequeños comercios. Mínimo requerido para locales de hasta 100 m².',
        specs: 'Polvo ABC · 2.5 kg · ~8 s descarga · 3 m alcance · Portátil',
        waText: 'Hola, quiero cotizar extintores ABC de 2.5 kg',
      },
      {
        nombre: 'ABC 4.5 kg',
        badge: 'Más vendido',
        desc: 'El estándar para oficinas, tiendas y comercios. Mínimo exigido por Protección Civil para cualquier local con acceso público.',
        specs: 'Polvo ABC · 4.5 kg · ~10 s descarga · 3–4 m alcance · 60 bar · Manómetro',
        waText: 'Hola, quiero cotizar extintores ABC de 4.5 kg',
      },
      {
        nombre: 'ABC 6 kg',
        badge: 'Estándar',
        desc: 'Para talleres, bodegas pequeñas y plantas ligeras. Mayor capacidad sin aumentar demasiado el peso.',
        specs: 'Polvo ABC · 6 kg · ~13 s descarga · 4–5 m alcance · Manguera con boquilla',
        waText: 'Hola, quiero cotizar extintores ABC de 6 kg',
      },
      {
        nombre: 'ABC 9 kg',
        badge: 'Industrial',
        desc: 'Para almacenes con mercancía mixta y plantas de riesgo bajo-medio. Cobertura extendida de área.',
        specs: 'Polvo ABC · 9 kg · ~18 s descarga · 4–5 m alcance · Soporte de pared',
        waText: 'Hola, quiero cotizar extintores ABC de 9 kg',
      },
      {
        nombre: 'ABC 12 kg',
        badge: 'Alta capacidad',
        desc: 'Para plantas industriales con múltiples áreas de riesgo. Protección de bodegas y áreas de proceso.',
        specs: 'Polvo ABC · 12 kg · ~22 s descarga · 5–6 m alcance · Para gabinete metálico',
        waText: 'Hola, quiero cotizar extintores ABC de 12 kg',
      },
      {
        nombre: 'ABC Rodante 25–50 kg',
        badge: 'Gran capacidad',
        desc: 'Para plantas industriales, estacionamientos y zonas extensas de almacenamiento. Ruedas para máxima movilidad.',
        specs: 'Polvo ABC · 25 / 35 / 50 kg · Rodante · Hasta 8 m alcance · Manguera 5 m',
        waText: 'Hola, quiero cotizar extintor rodante ABC',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Por qué el extintor ABC',
      titleLine2: 'es el más versátil',
      desc: 'El diseño del extintor ABC está optimizado para cubrir el mayor rango de riesgos con un solo equipo. Estas son sus características técnicas clave.',
      bodyPara: 'Una sola solución para tres tipos de fuego — la máxima versatilidad operativa. ABC simplifica la gestión de extintores en instalaciones mixtas, reduciendo cantidad de equipos y complejidad de brigadas.',
      items: [
        {
          title: 'Cobertura clase A: materiales sólidos',
          desc: 'Actúa sobre madera, papel, telas, plásticos y materiales celulósicos. El PQS interrumpe la reacción en cadena del fuego en la superficie del material. Para materiales muy porosos o en profundidad, se puede complementar con agua.',
        },
        {
          title: 'Cobertura clase B: líquidos y gases inflamables',
          desc: 'Eficaz en gasolina, diésel, aceites industriales, solventes y gases inflamables. El PQS forma una barrera sobre la superficie del líquido que impide la continuidad de la combustión.',
        },
        {
          title: 'Cobertura clase C: fuegos eléctricos',
          desc: 'El PQS es un aislante dieléctrico — no conduce electricidad. Se puede usar sobre equipos eléctricos energizados hasta 100,000 voltios a distancia segura (mínimo 1 metro). Sin embargo, deja residuo en el equipo.',
        },
        {
          title: 'Eficiencia UL: 4A:80B:C (extintor de 4.5 kg)',
          desc: 'La calificación UL indica la cantidad de fuego que puede controlar el extintor en prueba estándar. Un extintor de 4.5 kg ABC tiene una calificación mínima de 4A:80B:C, el estándar para locales comerciales.',
        },
        {
          title: 'Mismo agente que el polvo seco PQS individual',
          desc: 'La diferencia entre un extintor "polvo seco" y uno "ABC" en el mercado mexicano es en muchos casos solo el marketing — ambos contienen PQS de monofosfato de amonio. Lo que determina la calidad es el porcentaje de pureza del agente y la calificación UL.',
        },
        {
          title: 'Deja residuo — requiere limpieza post-uso',
          desc: 'El polvo seco es corrosivo si no se limpia dentro de las primeras horas. En equipos electrónicos, el residuo puede dañar contactos y circuitos. Después de usar un extintor ABC, limpiar inmediatamente con aire comprimido seco y paño limpio.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Cuándo elegir el extintor',
      titleLine2: 'ABC multiusos?',
      desc: 'El extintor ABC es la elección correcta cuando la instalación tiene riesgos mixtos y se necesita un único tipo de extintor para cubrir todos los escenarios sin complicación operativa.',
      bodyPara: 'ABC es la solución "de cabecera" en cualquier instalación: cubre casi el 90% de escenarios posibles con un solo agente. Se complementa con especializados (CO₂, Tipo K) solo en riesgos muy específicos.',
      usos: [
        { label: 'Oficinas administrativas',         desc: 'Riesgo mixto de papel, mobiliario y equipos de cómputo. Un extintor ABC de 4 kg por cada 300 m² cubre todos los escenarios posibles en oficina típica.' },
        { label: 'Locales comerciales mixtos',       desc: 'Tiendas con ropa, electrónica, alimentos y materiales variados. El ABC evita la necesidad de tener extintores especializados para cada tipo de mercancía.' },
        { label: 'Estacionamientos y cocheras',      desc: 'Riesgo de incendio en vehículos (líquidos, plásticos, cables). El ABC de 6 kg en cada nivel de estacionamiento cubre el riesgo típico de un vehículo en llamas.' },
        { label: 'Bodegas y almacenes generales',    desc: 'Donde se mezclan materiales sólidos, productos en aerosol, solventes de limpieza y tableros eléctricos. El ABC simplifica la gestión de extintores.' },
        { label: 'Plantas industriales de riesgo bajo a medio', desc: 'Para pasillos, oficinas dentro de planta, comedores y áreas de acceso general. En áreas de proceso específico se complementa con el agente especializado para ese riesgo.' },
        { label: 'Edificios residenciales y condominios', desc: 'Para áreas comunes: lobby, pasillos, cuartos de máquinas, cisternas y azoteas. El ABC cubre todos los riesgos típicos de áreas comunes de edificio.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Cuál es la diferencia entre un extintor "polvo seco" y uno "ABC"?',
        answer: 'En México, la mayoría de los extintores de polvo seco del mercado son ya de tipo ABC (monofosfato de amonio). El término "polvo seco" a secas puede referirse también a polvo BC (bicarbonato de sodio) que no es eficaz en clase A. Al comprar, verificar que la etiqueta indique explícitamente "ABC" o "monofosfato de amonio" para garantizar triple cobertura.',
      },
      {
        question: '¿Cuántos extintores ABC necesito en mi empresa?',
        answer: 'La NOM-002-STPS establece que en áreas de oficina o trabajo general se requiere al menos un extintor por cada 300 m², y la distancia máxima de recorrido hacia el extintor no debe superar 23 metros. Para instalaciones con riesgos específicos (bodegas, cocinas, cuartos eléctricos) el cálculo se hace por área de riesgo. Te lo calculamos sin costo.',
      },
      {
        question: '¿El extintor ABC sirve para fuegos en cocinas industriales?',
        answer: 'No. Para fuegos en aceites y grasas de cocción (clase K) se requiere específicamente el extintor Tipo K o Púrpura K. El polvo seco puede parecer que apaga el fuego de una freidora pero no previene la re-ignición porque no enfría el aceite caliente. Usar un ABC en una freidora es un riesgo — el aceite vuelve a encenderse.',
      },
      {
        question: '¿El extintor ABC daña los servidores o equipos de cómputo?',
        answer: 'Sí. El polvo PQS es corrosivo si no se limpia inmediatamente y puede dañar contactos eléctricos y componentes electrónicos. Para cuartos de servidores o equipos de TI de alto valor, se recomienda CO₂ o agente limpio. El ABC se usa en equipos eléctricos solo cuando no hay otra opción disponible.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores ABC multiusos para mi empresa. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas extintores ABC en tu empresa en CDMX?',
    ctaBody: 'Dinos el tamaño de tu instalación, el tipo de actividad y la cantidad aproximada de trabajadores. Te hacemos el cálculo y te cotizamos.',
  },

  // ──────────────────────────────────────────────────────────
  // 10. AGENTE LIMPIO
  // ──────────────────────────────────────────────────────────
  'agente-limpio': {
    metaTitle: 'Extintores de Agente Limpio — FM-200, FE-36, Novec | Proyecto Red',
    metaDesc: 'Extintores de agente limpio: FM-200, FE-36, Novec. Sin residuo, sin daño a equipos, para servidores, archivos y áreas críticas. Certificados NOM-154-SCFI. CDMX.',

    badge: 'NOM-154-SCFI · Sin residuo · TI · Archivos',
    heroTitle: 'Extintores de',
    heroAccent: 'Agente Limpio',
    heroSubtitle: 'Los extintores de agente limpio (FM-200, FE-36, Novec 1230) extinguen el fuego sin dejar residuo, sin dañar el equipo y sin riesgo para las personas. Son el estándar para cuartos de servidores, archivos históricos, centros de datos y áreas críticas donde el daño post-incendio del agente debe ser cero.',
    heroDescRight: [
      'Los agentes limpios actúan absorbiendo el calor de la reacción de combustión a nivel molecular, interrumpiendo la cadena química del fuego. La descarga es gaseosa, invisible y no deja ningún residuo sólido, líquido o corrosivo — el equipo puede reiniciarse inmediatamente después de la descarga en la mayoría de los casos.',
      'En Proyecto Red suministramos extintores portátiles de FM-200 (HFC-227ea), FE-36 (HFC-236fa) y sistemas fijos de Novec 1230 (FK-5-1-12). Los agentes limpios son la alternativa moderna al Halón 1211 (prohibido desde 1994) y superan al CO₂ en seguridad para las personas y compatibilidad con equipos activos.',
    ],
    stats: [
      { value: '0 residuo',   label: 'Sin daño al equipo'    },
      { value: 'FM-200 · FE-36', label: 'Agentes disponibles' },
      { value: 'A · B · C',   label: 'Clases de fuego'       },
      { value: 'NOM-154',     label: 'Certificación'         },
    ],

    img: '/imagenes/extintores/agente-limpio.jpg',

    variantes: [
      {
        nombre: 'FM-200 2.5 kg',
        badge: 'Compacto',
        desc: 'Para espacios pequeños con equipos críticos: PCs de escritorio, mini-racks y equipamiento de valor moderado.',
        specs: 'FM-200 (HFC-227ea) · 2.5 kg · ~5 s descarga · 0 residuo · Seguro en personas',
        waText: 'Hola, quiero cotizar extintores de agente limpio FM-200 de 2.5 kg',
      },
      {
        nombre: 'FM-200 5 kg',
        badge: 'Servidores',
        desc: 'El más solicitado para cuartos de servidores pequeños y archivos documentales críticos. Protección sin daño al activo.',
        specs: 'FM-200 (HFC-227ea) · 5 kg · ~7 s descarga · Sin daño · Compatible NFPA 2001',
        waText: 'Hola, quiero cotizar extintores de agente limpio FM-200 de 5 kg',
      },
      {
        nombre: 'FM-200 10 kg',
        badge: 'Data center',
        desc: 'Para cuartos de servidores medianos y salas de telecomunicaciones. Cobertura máxima portátil.',
        specs: 'FM-200 (HFC-227ea) · 10 kg · ~12 s descarga · Máxima capacidad · Estándar en TI',
        waText: 'Hola, quiero cotizar extintores de agente limpio FM-200 de 10 kg',
      },
      {
        nombre: 'FE-36 5 kg',
        badge: 'Alternativa',
        desc: 'Opción con ODP=0 para instalaciones con restricciones ambientales estrictas. Funcionalidad idéntica a FM-200.',
        specs: 'FE-36 (HFC-236fa) · 5 kg · ~7 s descarga · Sin impacto ozono · Cero residuo',
        waText: 'Hola, quiero cotizar extintores de agente limpio FE-36 de 5 kg',
      },
    ],

    caracteristicas: {
      eyebrow: 'Especificaciones técnicas',
      titleLine1: 'Características de los',
      titleLine2: 'agentes limpios',
      desc: 'Los agentes limpios son la tecnología de mayor valor entre los agentes extintores para equipos y espacios sensibles. Estas son sus características clave.',
      bodyPara: 'Cero residuo, cero daño, cero riesgo para personal — el agente limpio es la respuesta única cuando el activo que proteges no tolera ni una mota de contaminación post-incendio. Estándar internacional en TI y patrimonio cultural.',
      items: [
        {
          title: 'FM-200 (HFC-227ea): el más utilizado en extintores portátiles',
          desc: 'El FM-200 es un hidrofluorocarbono que actúa absorbiendo el calor de la reacción de combustión. Se almacena como líquido y se descarga como gas en menos de 10 segundos. Es el agente limpio portátil más común en México.',
        },
        {
          title: 'FE-36 (HFC-236fa): alternativa sin ODP',
          desc: 'Similar al FM-200 pero con un potencial de agotamiento del ozono (ODP) de 0. Apto para instalaciones con restricciones de gases de invernadero moderadas. Se descarga en forma gaseosa sin residuo.',
        },
        {
          title: 'Novec 1230: el agente limpio de menor impacto ambiental',
          desc: 'Con un potencial de calentamiento global (GWP) de solo 1 (vs 3220 del FM-200), el Novec 1230 es el agente preferido para certificaciones de sustentabilidad extrema. Disponible principalmente en sistemas fijos.',
        },
        {
          title: 'Eficacia en clases A, B y C',
          desc: 'Los agentes limpios actúan sobre fuegos de materiales sólidos (A), líquidos inflamables (B) y fuegos eléctricos (C). Son especialmente eficaces en C — pueden aplicarse directamente sobre equipos energizados sin riesgo de conducción eléctrica ni de daño al hardware.',
        },
        {
          title: 'Concentración de diseño: segura para personas',
          desc: 'El FM-200 tiene una concentración de diseño del 7% en volumen — significativamente menor al nivel de efecto fisiológico (9%). Esto significa que puede usarse en espacios ocupados (aunque el protocolo correcto siempre es desalojar).',
        },
        {
          title: 'Capacidades: 2.5, 5 y 10 kg (portátiles)',
          desc: 'Los extintores portátiles de FM-200 o FE-36 son el complemento manual de los sistemas fijos. Para cuartos de servidores pequeños (hasta 15 m³), un extintor de 5 kg puede ser suficiente como protección primaria.',
        },
      ],
    },

    cuandoUsar: {
      eyebrow: 'Aplicaciones y usos',
      titleLine1: '¿Dónde usar agente',
      titleLine2: 'limpio?',
      desc: 'El agente limpio es la elección correcta cuando el daño post-incendio del agente extintor es inaceptable. Estos son los entornos donde es el estándar.',
      bodyPara: 'Es obligatorio en centros de datos, archivos históricos, museos y quirófanos. La ausencia total de residuo hace que el agente limpio sea el único aceptable cuando la continuidad de operaciones o la preservación patrimonial están en juego.',
      usos: [
        { label: 'Cuartos de servidores y centros de datos', desc: 'El estándar de la industria TI. Sin residuo, sin corrosión, sin interrupción del equipo activo. El agente limpio permite reiniciar operaciones inmediatamente después del incidente.' },
        { label: 'Archivos históricos y notariales',          desc: 'Para acervos documentales irreemplazables. El agente limpio no moja, no mancha y no genera reacciones químicas con papel, tintas ni fotografías.' },
        { label: 'Museos y galerías de arte',                 desc: 'La ausencia de residuo y la no-reactividad química lo hacen el único agente aceptable para proteger obras de arte, esculturas y materiales orgánicos históricos.' },
        { label: 'Equipos de telecomunicaciones',             desc: 'Para cuartos de switch, DDF, racks de fibra óptica y equipos de microondas. El agente limpio no interfiere con los conectores ni deteriora los cables.' },
        { label: 'Laboratorios de alta precisión',            desc: 'Instrumentación analítica, cromatógrafos, espectrómetros y equipos de metrología son sensibles al polvo y a la corrosión. El agente limpio es el único apropiado.' },
        { label: 'Quirófanos y salas de procedimientos',      desc: 'En hospitales con equipos de cirugía robótica, imágenes por resonancia y monitores multiparamétricos, el agente limpio protege el equipo sin contaminar el entorno estéril.' },
      ],
    },

    relatedTitle: 'Otros tipos de extintor en nuestra categoría',

    faqItems: [
      {
        question: '¿Qué diferencia hay entre FM-200, FE-36 y Novec 1230?',
        answer: 'Los tres son agentes limpios que actúan por absorción de calor. La diferencia está en el impacto ambiental: FM-200 tiene un GWP de 3220, FE-36 de 9400 (pero ODP=0) y Novec 1230 de apenas 1, el más bajo del mercado. En México el FM-200 es el más disponible y el más económico. Para proyectos con requisitos ambientales estrictos o certificación LEED, se recomienda Novec 1230.',
      },
      {
        question: '¿El agente limpio reemplaza al CO₂ en cuartos de servidores?',
        answer: 'Para la mayoría de las instalaciones, sí. El agente limpio es más seguro para las personas (concentración de diseño por debajo del nivel de efecto fisiológico), no requiere precauciones adicionales de oxígeno y es más eficaz en equipos activos. El CO₂ sigue siendo más económico por kg, pero en cuartos de servidores con personal el agente limpio es el estándar recomendado por NFPA 2001.',
      },
      {
        question: '¿Los extintores de agente limpio son más caros que los de CO₂?',
        answer: 'Sí, significativamente. El costo por kg de FM-200 es 8-12 veces mayor que el del CO₂. Sin embargo, el equipo que protege típicamente vale mucho más que la diferencia de precio del agente. La comparación correcta es el costo del agente vs. el costo de reemplazar los servidores, el contenido de los archivos o los equipos de cirugía que protege.',
      },
      {
        question: '¿El agente limpio portátil es suficiente para mi cuarto de servidores?',
        answer: 'Depende del volumen del cuarto. Un extintor de 5 kg de FM-200 cubre efectivamente un volumen de aproximadamente 10-15 m³ (una sala pequeña de unos 5 × 3 × 1 m). Para cuartos más grandes se requiere un sistema de supresión fija (toberas en el techo conectadas a un cilindro mayor y panel de control). Hacemos la evaluación sin costo.',
      },
    ],

    waMessage: 'Hola, necesito cotizar extintores de agente limpio para un cuarto de servidores o archivo. ¿Pueden asesorarme?',
    ctaTitle: '¿Necesitas proteger equipos TI o archivos en CDMX?',
    ctaBody: 'Cuéntanos el volumen del espacio, el tipo de equipo y si necesitas extintor portátil o sistema fijo. Te hacemos la propuesta técnica sin costo.',
  },
}
