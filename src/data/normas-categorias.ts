// ============================================================
// Normas por categoría — para NormasCategoria.astro
// Generado a partir de los antiguos Normas{Categoria}.astro (verbatim).
// Nota: primeros-auxilios y equipo-seguridad usan un markup distinto
// (NormasPrimerosAuxilios/NormasEquipoSeguridad siguen como componentes propios).
// ============================================================

export interface NormaItem {
  norma: string
  tipo: string
  alcance: string
  aplica: string
  /** SVG inline del icono */
  icon: string
}

export interface NormasCategoriaConfig {
  id: string
  header: {
    eyebrow: string
    titleLine1: string
    titleLine2: string
    desc: string
    bodyPara1: string
    bodyPara2?: string
  }
  gridAria: string
  normas: NormaItem[]
  /** HTML de la nota inferior */
  notaHtml: string
  /** señalamientos usa grid fija de 3 columnas en vez de auto-fit */
  gridFixed3?: boolean
}

export const NORMAS_CATEGORIAS: Record<string, NormasCategoriaConfig> = {
  'extintores': {
    id: 'extintores',
    header: {
      eyebrow: 'Respaldo normativo',
      titleLine1: 'Normas que Regulan',
      titleLine2: 'la Venta y Uso de Extintores',
      desc: 'Certificaciones y estándares que validan cada extintor que distribuimos.',
      bodyPara1: 'En México, la validez de un extintor ante Protección Civil o la STPS no depende solo de que funcione — depende de que cuente con certificación NOM vigente, etiqueta de inspección actualizada y prueba hidrostática al corriente. Durante una auditoría, la autoridad revisa los tres. Si uno falta, el extintor no cuenta. Todos nuestros equipos incluyen la documentación necesaria para tu expediente.',
    },
    gridAria: 'Normas y certificaciones para extintores',
    normas: [
  {
    norma: 'NOM-154-SCFI',
    tipo: 'Obligatoria',
    alcance: 'Extintores de polvo químico seco, CO₂, agentes limpios y espuma — requisitos de seguridad, pruebas e información comercial',
    aplica: 'Todo extintor portátil vendido en México. Sin este sello, el equipo no es válido ante Protección Civil ni STPS.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma: 'NOM-002-STPS-2010',
    tipo: 'Laboral',
    alcance: 'Condiciones de seguridad y prevención de incendio en centros de trabajo. Tipo, cantidad, ubicación y distancia máxima de extintores',
    aplica: 'Toda empresa con trabajadores. Define la obligación de 1 extintor por cada 300 m² mínimo, del tipo adecuado para cada zona.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  },
  {
    norma: 'NOM-100-STPS',
    tipo: 'Técnica',
    alcance: 'Extintores a base de polvo químico seco con presión contenida — especificaciones y métodos de prueba',
    aplica: 'Fabricantes y distribuidores de extintores PQS. Define parámetros de presión, agente y rendimiento del cilindro.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  },
  {
    norma: 'NOM-101-STPS',
    tipo: 'Técnica',
    alcance: 'Extintores a base de CO₂ — especificaciones, pruebas y comportamiento en operación',
    aplica: 'Extintores de dióxido de carbono. Aplica en entornos con equipos electrónicos, laboratorios y áreas sensibles.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
  },
  {
    norma: 'NFPA 10',
    tipo: 'Internacional',
    alcance: 'Estándar para extintores portátiles — clasifica tipos de fuego (A, B, C, D, K) y criterios de selección e instalación',
    aplica: 'Proyectos con estándar internacional, centros de datos y plantas con certificación OSHA/ISO.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    norma: 'Prueba Hidrostática',
    tipo: 'Periódica',
    alcance: 'Verificación estructural del cilindro cada 5 años — prueba de presión para detectar corrosión, fisuras o deformaciones',
    aplica: 'Todos los cilindros con +5 años desde fabricación o última prueba. Obligatoria — sin ella, el cilindro no está en norma.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 6v6l4 2"/></svg>`,
  },
],
    notaHtml: 'Cada extintor que vendemos incluye <strong>ficha técnica</strong>, <strong>certificado de conformidad NOM</strong>, <strong>etiqueta de inspección</strong> y <strong>garantía del fabricante</strong> — los cuatro documentos que solicita la autoridad competente. Asesoría sin costo sobre documentación adicional para tu aseguradora o Protección Civil.',
  },
  'bomberos': {
    id: 'bomberos',
    header: {
      eyebrow: 'Respaldo normativo NFPA',
      titleLine1: 'Normas que Validan',
      titleLine2: 'el Equipo de Cada Bombero',
      desc: 'Las certificaciones NFPA no son opcionales — son la diferencia entre equipo que protege y equipo que parece proteger.',
      bodyPara1: 'En México, cualquier corporación de bomberos seria y cualquier brigada industrial bien organizada exige que el equipo de sus operadores cuente con certificaciones NFPA vigentes. No basta con que el traje parezca de calidad — debe estar certificado individualmente por un laboratorio de pruebas autorizado. Un componente sin certificación original invalida la responsabilidad del fabricante y deja al operador sin respaldo legal ante un accidente. Todos los equipos que distribuimos incluyen las certificaciones originales del fabricante, no copias ni equivalencias.',
    },
    gridAria: 'Normas NFPA para equipo de bomberos',
    normas: [
  {
    norma: 'NFPA 1971',
    tipo: 'Obligatoria',
    alcance: 'Ensemble de protección estructural para combate de incendios — traje, casco, guantes, botas y capucha. Define las tres capas requeridas: capa exterior, barrera contra humedad y barrera térmica.',
    aplica: 'Todo bombero que realice entrada a estructuras en llamas. Sin certificación NFPA 1971, el ensemble no es válido en ninguna corporación seria.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma: 'NFPA 1851',
    tipo: 'Mantenimiento',
    alcance: 'Selección, cuidado y mantenimiento de ensembles de protección estructural. Define vida útil de 10 años, inspecciones post-uso, limpiezas avanzadas semestrales e inspecciones técnicas anuales.',
    aplica: 'Toda corporación con trajes NFPA 1971. Un traje sin programa de mantenimiento NFPA 1851 pierde gradualmente sus propiedades protectoras — sin que sea visible desde afuera.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93"/></svg>`,
  },
  {
    norma: 'NFPA 1981',
    tipo: 'Respiración',
    alcance: 'Aparatos de respiración de circuito abierto para servicios de emergencia (SCBA). Define requerimientos de la máscara panorámica, regulador, alarma PASS y cilindro de aire comprimido.',
    aplica: 'Equipos ERA / SCBA para bomberos. El cilindro debe estar verificado con prueba hidrostática periódica. Una máscara sin sello NFPA 1981 no es válida para entrada a atmósferas inmediatamente peligrosas para la vida.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M8 12a4 4 0 008 0M8.56 8.56l6.88 6.88"/></svg>`,
  },
  {
    norma: 'NFPA 1983',
    tipo: 'Rescate',
    alcance: 'Equipo de cuerda de vida para rescate — arneses, cuerdas técnicas y dispositivos de descenso para servicios de emergencia. Clase I (torso), Clase II (general) y Clase III (full body).',
    aplica: 'Operaciones de rescate en altura, rapel, evacuación y entrada a espacios confinados. Un arnés industrial no cumple NFPA 1983 — las cargas en caída son distintas y los puntos de anclaje no equivalen.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>`,
  },
  {
    norma: 'NFPA 1991',
    tipo: 'HAZMAT',
    alcance: 'Trajes de protección química encapsulados Nivel A y B para incidentes con gases y vapores tóxicos. El más alto nivel de protección personal contra agentes HAZMAT.',
    aplica: 'Primera respuesta a incidentes con materiales peligrosos: derrames químicos, gases tóxicos, agentes biológicos. Un traje estructural NFPA 1971 no protege contra HAZMAT — los absorbe.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  },
  {
    norma: 'NIOSH / SCBA',
    tipo: 'Internacional',
    alcance: 'National Institute for Occupational Safety and Health — certificación federal estadounidense para equipos de respiración autónoma. Define aprobación del SCBA completo (máscara + regulador + cilindro).',
    aplica: 'Todo equipo ERA para uso en operaciones de combate de incendios. El NIOSH es el estándar de referencia reconocido por la NFPA 1981. Sin aprobación NIOSH, el equipo no es apto para atmósferas IDLH.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
],
    notaHtml: 'Todo el equipo que distribuimos incluye <strong>certificado NFPA original del fabricante</strong>, <strong>ficha técnica</strong> y <strong>garantía</strong> — los documentos que exigen las corporaciones serias en sus procesos de adquisición. Para licitaciones públicas, gestionamos la documentación complementaria que requiera el proceso.',
  },
  'gabinetes': {
    id: 'gabinetes',
    header: {
      eyebrow: 'Respaldo normativo',
      titleLine1: 'Normas que Regulan',
      titleLine2: 'los Gabinetes Contra Incendio',
      desc: 'Un gabinete sin norma es un mueble. Uno en norma es protección real, documentada y válida ante cualquier autoridad.',
      bodyPara1: 'En México, la validez de un gabinete para extintor, manguera o hidrante ante Protección Civil, la STPS o una aseguradora no depende solo de que esté pintado de rojo — depende de que cumpla con las normas de instalación, señalización y mantenimiento aplicables. Durante una auditoría, la autoridad revisa el gabinete, la señal encima, la altura de montaje y el estado del equipo interior. Si uno falla, el conjunto no cuenta. Todos nuestros gabinetes se suministran con señalamiento NOM incluido y documentación técnica para tu expediente.',
    },
    gridAria: 'Normas y estándares para gabinetes contra incendio',
    normas: [
  {
    norma: 'NOM-002-STPS',
    tipo: 'Obligatoria',
    alcance: 'Condiciones de seguridad para la prevención y protección contra incendios en centros de trabajo. Establece el tipo, número, ubicación, altura de montaje y señalización de extintores — y por tanto de los gabinetes que los alojan.',
    aplica: 'Todo centro de trabajo con trabajadores en México. La NOM-002-STPS es el principal instrumento que la STPS y Protección Civil revisan en auditoría. Un extintor deteriorado por falta de gabinete (golpes, polvo, humedad) puede generar observación o multa aunque el extintor funcione.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  },
  {
    norma: 'NOM-003-SEGOB',
    tipo: 'Señalización',
    alcance: 'Señales y avisos para protección civil — características, dimensiones, colores y símbolos. Define la señalización de gabinetes de extintor, manguera e hidrante: color rojo + blanco, tamaño según distancia de observación y posición visible desde el acceso.',
    aplica: 'Todo inmueble que deba obtener Visto Bueno o Dictamen de Protección Civil. Sin señal visible y conforme en cada gabinete, el inspector puede hacer observación aunque el equipo esté correctamente instalado. La señal correcta, en el lugar correcto y al tamaño correcto.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  },
  {
    norma: 'NFPA 10',
    tipo: 'Internacional',
    alcance: 'Estándar para extintores portátiles — incluye criterios de instalación de soportes y gabinetes: altura de montaje, accesibilidad, distancia máxima de recorrido y condiciones del entorno para el alojamiento físico del extintor según la clase de riesgo.',
    aplica: 'Proyectos con requerimiento de estándar internacional: plantas maquiladoras, parques industriales, inmuebles con certificación ISO o OSHA. Complementa la NOM y es el marco de referencia en auditorías para aseguradoras internacionales.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    norma: 'NFPA 14',
    tipo: 'Sistemas CI',
    alcance: 'Instalación de sistemas de tuberías verticales y mangueras — aplica directamente a los gabinetes para bombero (clase I, II y III) y gabinetes para hidrante. Define materiales, presiones de trabajo, válvulas angulares, acoples Storz y requisitos de prueba hidráulica.',
    aplica: 'Edificios con 3 o más niveles, plantas industriales con sistema de hidrantes interiores, centros comerciales y hospitales. Los gabinetes para mangueras que no cumplan NFPA 14 son inválidos ante corporaciones de bomberos y no se integran legalmente a un sistema de supresión activa.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma: 'NFPA 25',
    tipo: 'Mantenimiento',
    alcance: 'Inspección, prueba y mantenimiento de sistemas de protección contra incendios a base de agua — incluye gabinetes de mangueras, válvulas angulares, tuberías y chiflones. Establece frecuencias de inspección: mensual visual, semestral funcional y anual de flujo.',
    aplica: 'Toda instalación con sistema de mangueras (gabinetes para bombero o hidrante). Es el estándar que usan las aseguradoras para verificar operatividad. Un sistema sin programa de mantenimiento NFPA 25 puede invalidar la póliza de incendio del inmueble.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93"/></svg>`,
  },
  {
    norma: 'NOM-026-STPS',
    tipo: 'Colores y señales',
    alcance: 'Colores y señales de seguridad e higiene e identificación de riesgos por fluidos en tuberías. Define el color rojo RAL 3001 para equipos contra incendio (gabinetes, soportes, rutas de emergencia) y las dimensiones mínimas de las señales según la distancia de observación.',
    aplica: 'Centros de trabajo con instalaciones de protección contra incendio. El color rojo del gabinete, el ancho del borde blanco y el tamaño del símbolo deben cumplir esta norma para ser válidos en revisiones de higiene y seguridad de la STPS. No basta que sea rojo — debe ser el rojo correcto.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  },
],
    notaHtml: 'Cada gabinete que suministramos incluye <strong>señalamiento NOM incluido</strong>, <strong>ficha técnica</strong> y <strong>garantía del fabricante</strong> — los documentos que solicitan Protección Civil y la STPS en cualquier inspección. Para expedientes más complejos (dictamen técnico, plano de señalización, memoria de cálculo hidráulica), te asesoramos sin costo.',
  },
  'mangueras': {
    id: 'mangueras',
    header: {
      eyebrow: 'Marco normativo NFPA',
      titleLine1: 'Normas que Rigen',
      titleLine2: 'Mangueras y Sistemas Hidráulicos CI',
      desc: 'NFPA 1961, 1962, 1964, 14 y 24 — cada componente del sistema tiene su norma. El cumplimiento no es opcional.',
      bodyPara1: 'Los sistemas hidráulicos contra incendio están regidos principalmente por normas NFPA internacionales. En México, Protección Civil CDMX y los cuerpos de bomberos exigen NFPA 14 para edificios y NFPA 1961 para la certificación de mangueras. El incumplimiento no solo resulta en observaciones — un sistema sin certificado puede fallar exactamente cuando más se necesita y anular la póliza de incendio del inmueble.',
    },
    gridAria: 'Normas y estándares para mangueras y sistemas hidráulicos CI',
    normas: [
  {
    norma:   'NFPA 1961',
    tipo:    'Mangueras',
    alcance: 'Estándar para mangueras de ataque contra incendio — especifica materiales, construcción, presión mínima de trabajo (175 psi en mangueras de 1½" y 200 psi en 2½"), marcado y prueba hidrostática de fábrica. Solo las mangueras certificadas NFPA 1961 son aceptadas en sistemas formales.',
    aplica:  'Todo sistema hidráulico con mangueras en edificios, plantas, bodegas y naves. Los cuerpos de bomberos municipales y las aseguradoras exigen mangueras certificadas NFPA 1961 para validar la cobertura del sistema. Una manguera sin certificado no cuenta aunque funcione.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M12 6v6l4 2"/></svg>`,
  },
  {
    norma:   'NFPA 1962',
    tipo:    'Mantenimiento',
    alcance: 'Cuidado, uso, inspección, prueba y puesta fuera de servicio de mangueras contra incendio. Exige prueba hidrostática anual a la presión de servicio para verificar integridad. Define criterios de retiro: grietas, cortes, acoples dañados o falla en prueba de presión.',
    aplica:  'Propietarios e instaladores de sistemas con mangueras, sin importar la edad de la manguera. NFPA 25 complementa esta norma al nivel de todo el sistema. Ofrecemos servicio de prueba hidrostática con certificado de conformidad válido para expedientes de Protección Civil y STPS.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  },
  {
    norma:   'NFPA 1964',
    tipo:    'Chiflones',
    alcance: 'Especificaciones para chiflones, pitones y boquillas de mangueras — patrones de descarga (chorro recto, neblina, combinado), caudales mínimos y máximos por diámetro, y compatibilidad con los acoples de la manguera. Define los patrones Clase I (solo chorro) y Clase II (combinado).',
    aplica:  'Selección de chiflones para cada tipo de riesgo y sistema. Un chiflón de caudal inadecuado puede resultar en extinción ineficaz o sobrepresión en la red. Verificamos compatibilidad con la presión de tu sistema antes de la entrega.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    norma:   'NFPA 14',
    tipo:    'Sistemas standpipe',
    alcance: 'Instalación de sistemas de tuberías verticales y mangueras — diseño, materiales, ubicación de gabinetes, tipo de mangueras y herrajes requeridos por clase (I, II y III). Define la toma siamesa exterior, las válvulas angulares, las presiones mínimas y la prueba hidráulica del sistema completo.',
    aplica:  'Edificios con 3 o más niveles, plantas industriales con sistema de hidrantes, centros comerciales y hospitales. Sin cumplir NFPA 14, el sistema de mangueras no es válido para Protección Civil CDMX ni para aseguradoras. Realizamos instalaciones certificadas y prueba hidráulica completa.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma:   'NFPA 24',
    tipo:    'Redes externas',
    alcance: 'Instalación de tuberías privadas de servicio a hidrantes — diseño, materiales, profundidad, prueba de la red exterior subterránea que alimenta el sistema de hidrantes y la toma siamesa del edificio desde la cisterna o la red municipal.',
    aplica:  'Naves industriales, plantas y complejos con red hidráulica subterránea o exterior. Define materiales aceptados (hierro dúctil, HDPE, PVC AWWA), presión de prueba (200 psi durante 2 h) y conexión a la red municipal o cisterna privada.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>`,
  },
  {
    norma:   'NOM-002-STPS',
    tipo:    'Prevención',
    alcance: 'Condiciones de seguridad — prevención y protección contra incendios en centros de trabajo. Exige que los sistemas de hidrantes y mangueras estén operables, accesibles, señalizados y con los componentes en buen estado al momento de cualquier auditoría de la STPS o Protección Civil.',
    aplica:  'Todo centro de trabajo con sistema hidráulico contra incendio. La STPS verifica en auditorías que mangueras, chiflones y válvulas estén en condición de uso inmediato. Un sistema con componentes deteriorados genera observación y puede resultar en multa aunque el resto del equipo funcione.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  },
],
    notaHtml: 'Ofrecemos <strong>prueba hidrostática anual NFPA 1962</strong> de mangueras en tus instalaciones con <strong>certificado de conformidad</strong> válido para Protección Civil y STPS. Para sistemas nuevos: instalación certificada NFPA 14, prueba hidráulica completa y documentación lista para tu expediente regulatorio — todo en un solo proveedor.',
  },
  'senalamientos': {
    id: 'senalamientos',
    header: {
      eyebrow: 'Respaldo normativo',
      titleLine1: 'Las Normas que Regulan',
      titleLine2: 'la Señalización de Emergencia',
      desc: 'Sin señalamientos certificados NOM no hay dictamen favorable de Protección Civil ni cumplimiento STPS.',
      bodyPara1: 'En México, Protección Civil y la STPS verifican señalización durante cada inspección. Un señalamiento decolorado, roto o sin certificación NOM puede significar dictamen desfavorable, multa o suspensión de actividades. Todos nuestros señalamientos incluyen el respaldo normativo que la autoridad solicita — y te entregamos la documentación útil para tu expediente de seguridad.',
    },
    gridAria: 'Normas para señalamientos de emergencia',
    normas: [
  {
    norma: 'NOM-003-SEGOB',
    tipo: 'Protección Civil',
    alcance: 'Señales y avisos para protección civil — colores, formas, símbolos e iluminación. Define señalamientos de evacuación, salida de emergencia y punto de reunión.',
    aplica: 'Todo inmueble con acceso al público. Sin señalamientos NOM-003-SEGOB no hay dictamen favorable de Protección Civil. Los fotoluminiscentes son obligatorios en rutas de evacuación.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma: 'NOM-026-STPS',
    tipo: 'Laboral',
    alcance: 'Colores y señales de seguridad e higiene — identifica peligros, define colores de advertencia (amarillo), prohibición (rojo) y obligación (azul) en centros de trabajo.',
    aplica: 'Toda empresa con trabajadores. La STPS verifica señalización de EPP obligatorio por área (casco, lentes, guantes) y advertencias de riesgo eléctrico o químico.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  },
  {
    norma: 'NOM-002-STPS',
    tipo: 'Prevención',
    alcance: 'Condiciones de seguridad y prevención de incendio — exige señalamiento de la ubicación de cada extintor, la ruta de evacuación y las salidas de emergencia en centros de trabajo.',
    aplica: 'Centros de trabajo con riesgo de incendio. Cada extintor debe tener señal fotoluminiscente de ubicación a la altura correcta. Verificado durante inspecciones STPS.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
  },
  {
    norma: 'NOM-017-STPS',
    tipo: 'EPP',
    alcance: 'Equipo de protección personal — selección, uso y mantenimiento. Define la obligación de señalar con pictogramas azules (obligación) las zonas donde cada tipo de EPP es mandatorio.',
    aplica: 'Plantas industriales, talleres y almacenes. Cada zona de riesgo debe tener la señal de obligación de EPP correspondiente (casco, lentes, calzado de seguridad, protección auditiva).',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>`,
  },
  {
    norma: 'NFPA 101',
    tipo: 'Internacional',
    alcance: 'Código de seguridad humana — especifica requerimientos de señalización de salidas de emergencia, medios de egreso y señalización fotoluminiscente en edificios.',
    aplica: 'Edificios corporativos, hoteles y desarrollos con estándar internacional. Complementa la NOM-003-SEGOB en proyectos con auditorías internacionales o certificaciones LEED.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`,
  },
  {
    norma: 'Fotoluminiscencia',
    tipo: 'Material',
    alcance: 'Los señalamientos fotoluminiscentes deben absorber luz suficiente para ser visibles durante al menos 60 minutos en oscuridad — mínimo en la norma; los nuestros mantienen visibilidad 8+ horas.',
    aplica: 'Rutas de evacuación, salidas de emergencia y escaleras de emergencia. Son el único sistema de guía que funciona en un corte de luz total sin baterías ni mantenimiento.',
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
  },
],
    notaHtml: 'Cada señalamiento que suministramos incluye el <strong>número de norma</strong> impreso, <strong>materiales certificados</strong> y, para el servicio completo, un <strong>plano de señalización</strong> útil para tu expediente de Protección Civil. La señalización sin plano de respaldo no protege ante una observación de inspector — nosotros te entregamos los dos.',
    gridFixed3: true,
  },
  'sistemas': {
    id: 'sistemas',
    header: {
      eyebrow: 'Marco normativo NFPA',
      titleLine1: 'Normas que Rigen',
      titleLine2: 'los Sistemas Contra Incendio',
      desc: 'NFPA 72, 13, 14, 20, 2001 y NOM-002-STPS — cada subsistema tiene su norma. Instalamos en cumplimiento total con entrega de expediente.',
      bodyPara1: 'En México, los sistemas contra incendio se rigen por normas NFPA internacionales adoptadas por Protección Civil y la STPS. Un sistema instalado sin seguir NFPA puede ser rechazado en inspección incluso si está físicamente funcionando — porque la memoria de cálculo, los planos y la documentación de comisionamiento no cumplen el estándar requerido.',
      bodyPara2: 'Entregamos el expediente completo: planos en AutoCAD, memoria de cálculo hidráulico, certificados de los equipos, bitácora de comisionamiento y manual de operación — todo lo que Protección Civil y la STPS requieren para el dictamen técnico.',
    },
    gridAria: 'Normas aplicables a sistemas contra incendio',
    normas: [
  {
    norma:   'NFPA 72',
    tipo:    'Alarma y detección',
    alcance: 'Código Nacional de Alarma Contra Incendio — diseño, instalación, puesta en servicio, prueba y mantenimiento de sistemas de alarma, detectores y notificación. Define tipos de detector por zona de riesgo, batería de respaldo mínima de 24h, requisitos de monitoreo remoto y señalización de evacuación vinculada al tablero FACP.',
    aplica:  'Cualquier edificio con sistema de alarma o detectores. Protección Civil CDMX y la STPS exigen que el sistema esté instalado conforme a NFPA 72 con memoria técnica, planos y certificados de los equipos. Un sistema sin documentación puede ser rechazado en inspección aunque funcione correctamente.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><path d="M6 1v3M10 1v3M14 1v3"/></svg>`,
  },
  {
    norma:   'NFPA 13',
    tipo:    'Rociadores automáticos',
    alcance: 'Instalación de sistemas de rociadores automáticos — clasificación de riesgo (ligero, ordinario, extra), densidad de aplicación, área de operación de diseño, selección de temperatura del bulbo y tipo de rociador. Exige cálculo hidráulico para verificar presión y caudal en la cabeza más desfavorable.',
    aplica:  'Bodegas, naves industriales, centros comerciales, hoteles y edificios de altura. El Reglamento de Construcciones del CDMX exige rociadores en inmuebles de más de 6,000 m². Sin cálculo hidráulico conforme a NFPA 13 y memoria técnica, el sistema no es válido para Protección Civil ni aseguradoras.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`,
  },
  {
    norma:   'NFPA 14',
    tipo:    'Sistemas standpipe',
    alcance: 'Instalación de sistemas de tuberías verticales y mangueras en edificios — diseño de redes de hidrantes interiores, ubicación de válvulas angulares por piso, presión mínima en el hidrante más desfavorable (100 PSI) y toma siamesa en fachada. Define clases I, II y III según el tipo de usuario.',
    aplica:  'Edificios de más de 5 pisos o 15 metros de altura. La toma siamesa exterior, la válvula angular por piso y las gabinetes de manguera deben cumplir NFPA 14 para obtener el dictamen de Protección Civil. Instalamos la red completa con prueba hidráulica y documentación para el expediente.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    norma:   'NFPA 20',
    tipo:    'Bombas contra incendio',
    alcance: 'Instalación de bombas estacionarias contra incendio — requisitos para bomba principal eléctrica, bomba de reserva diésel, bomba jockey de mantenimiento de presión, tablero de control independiente y prueba de aceptación a plena carga. La bomba diésel es obligatoria cuando hay riesgo de corte eléctrico.',
    aplica:  'Cualquier sistema que requiera presión mayor a la disponible en la red municipal. El tablero NFPA 20 debe ser independiente del sistema eléctrico general del edificio. Instalamos el grupo completo con arranque automático, manual y de emergencia, más prueba de aceptación documentada.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>`,
  },
  {
    norma:   'NFPA 2001',
    tipo:    'Agente limpio',
    alcance: 'Instalación de sistemas de extinción por agente limpio — agentes aceptados (HFC-227ea, FK-5-1-12, Inergen, CO₂), concentraciones de diseño para cada recinto, tiempo de descarga, retardo de activación y señalización de presencia de agente. Exige prueba de integridad del recinto antes de la puesta en servicio.',
    aplica:  'Centros de datos, salas de comunicaciones, archivos, cuartos de control y áreas críticas donde agua o polvo causarían daño irreversible. El sistema incluye panel de liberación independiente con retardo de 30 segundos y señalización conforme a NFPA 72 para evacuación segura antes de la descarga.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>`,
  },
  {
    norma:   'NOM-002-STPS',
    tipo:    'Centros de trabajo',
    alcance: 'Condiciones de seguridad y prevención de incendios en centros de trabajo — exige que los sistemas de detección, alarma y supresión estén operables, accesibles y con mantenimiento documentado conforme a la norma aplicable. Define las obligaciones del patrón y los criterios de auditoría de la STPS.',
    aplica:  'Todo centro de trabajo con más de 5 trabajadores o más de 100 m². La STPS verifica en auditorías que el sistema esté instalado, funcionando y con bitácora de mantenimiento al día. Un sistema sin mantenimiento documentado genera observación y puede resultar en multa aunque el sistema opere correctamente.',
    icon:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></svg>`,
  },
],
    notaHtml: '¿Tienes sistema instalado pero <strong>sin expediente técnico</strong>? Hacemos auditoría del sistema existente, revisamos qué cumple y qué no, y te entregamos la <strong>documentación de regularización</strong> para Protección Civil — sin necesidad de reinstalar todo.',
  },
}
