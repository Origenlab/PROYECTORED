// ============================================================
// FAQ por categoría — fuente de verdad para FaqCategoria.astro
// Generado a partir de los antiguos Faq{Categoria}.astro (contenido verbatim).
// Para agregar una categoría: añadir una entrada aquí y usar
// <FaqCategoria {...FAQ_CATEGORIAS['nueva-categoria']} /> en su index.
// ============================================================

export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategoriaConfig {
  /** Slug — genera id de sección `faq-${id}` y los ids del formulario */
  id: string
  /** Texto del badge de la columna FAQ, p.ej. 'Extintores — FAQ' */
  badge: string
  header: {
    titleLine1: string
    titleLine2: string
    desc: string
    bodyPara1: string
  }
  /** Título de la columna FAQ (default: 'Lo que preguntan nuestros clientes') */
  colTitle?: string
  /** Texto antes del enlace de WhatsApp en la columna FAQ */
  colTextBefore?: string
  /** Texto después del enlace de WhatsApp */
  colTextAfter?: string
  faqs: FaqItem[]
  form: {
    empresaLabel?: string
    empresaPlaceholder?: string
    tipoLabel: string
    tipoPlaceholder: string
    tipoOptions: string[]
    detalleLabel?: string
    detallePlaceholder: string
  }
  wa: {
    /** Mensaje base de WhatsApp (sin punto final; el script lo añade) */
    message: string
    btnLabel: string
    ariaLabel: string
    note: string
    /** Etiqueta del campo tipo en el mensaje armado, p.ej. '🔥 Tipo de extintor' */
    tipoMsgLabel: string
    /** Default: '🏢 Empresa' */
    empresaMsgLabel?: string
  }
}

export const FAQ_CATEGORIAS: Record<string, FaqCategoriaConfig> = {
  'extintores': {
    id: 'extintores',
    badge: 'Extintores — FAQ',
    header: {
      titleLine1: 'Todo lo que Necesitas Saber',
      titleLine2: 'Antes de Comprar Extintores',
      desc: 'Resolvemos las dudas más comunes de nuestros clientes sobre tipos, normas, costos y mantenimiento de extintores.',
      bodyPara1: 'Si no encuentras respuesta a tu pregunta, escríbenos por WhatsApp — nuestro equipo técnico responde en menos de 24 horas y sin compromiso de compra.',
    },
    faqs: [
  {
    q: '¿Qué extintor necesito para mi oficina o negocio?',
    a: 'Para la mayoría de oficinas y comercios, el extintor <strong>ABC multipropósito de 4.5 kg</strong> es el estándar. Si tienes equipos electrónicos (servidores, UPS), complementa con un <strong>CO₂ de 4.5 kg</strong> en ese espacio. Si hay cocina con freidoras, necesitas un <strong>Tipo K</strong> además del ABC. Te hacemos el diagnóstico por zona sin costo — sin compromiso de compra.',
  },
  {
    q: '¿Cuántos extintores necesito según la NOM-002-STPS?',
    a: 'La norma establece <strong>un extintor por cada 300 m²</strong> de superficie, con un mínimo de uno por piso. La distancia máxima de recorrido hasta un extintor es de 15 metros para riesgo ordinario. Además, cada extintor debe ser del tipo correcto para el riesgo predominante de esa zona. El cálculo varía según el giro — te lo hacemos gratis si nos indicas los m² y el tipo de actividad.',
  },
  {
    q: '¿Cuánto cuesta un extintor certificado NOM en CDMX?',
    a: 'Un extintor <strong>PQS ABC de 4.5 kg</strong> (el más común) parte desde $450 MXN. Los de <strong>CO₂</strong> arrancan desde $850 MXN y los de <strong>agente limpio</strong> son más costosos por el gas. El precio final depende de tipo, capacidad y cantidad. Escríbenos por WhatsApp con lo que necesitas y te damos precio real ese mismo día.',
  },
  {
    q: '¿Cuál es la diferencia entre PQS y ABC?',
    a: '<strong>PQS (Polvo Químico Seco)</strong> y <strong>ABC</strong> son prácticamente lo mismo: ambos usan fosfato monoamónico como agente y cubren fuegos clase A, B y C. "ABC" indica las clases de fuego que combate; "PQS" describe el tipo de agente. En el mercado mexicano se usan ambos nombres para el mismo producto — cuando pides uno, estás pidiendo el otro.',
  },
  {
    q: '¿Cada cuánto tiempo se recarga un extintor?',
    a: 'La <strong>NOM-154-SCFI</strong> exige recarga <strong>anual</strong> o después de cualquier uso, parcial o total. Cada <strong>5 años</strong> es obligatoria la prueba hidrostática para verificar la integridad del cilindro. En Proyecto Red registramos tus fechas de vencimiento y te avisamos antes — así evitas tener extintores vencidos en la inspección.',
  },
  {
    q: '¿El extintor incluye soporte de pared y señalamiento?',
    a: 'Todos los extintores incluyen <strong>soporte de pared (bracket)</strong> para instalación. El <strong>señalamiento de ubicación</strong> — que identifica visualmente dónde está el extintor — se cotiza aparte, aunque te lo ofrecemos junto con el equipo. La norma exige señalar cada extintor con un cartel fotoluminiscente; sin él, el inspector lo marca como observación.',
  },
  {
    q: '¿Hacen mantenimiento y recarga a domicilio en CDMX?',
    a: 'Sí. Vamos a tus instalaciones para el mantenimiento preventivo, recarga y verificación del cilindro. El servicio incluye revisión del agente de extinción, presión, válvulas, manguera y actualización de la etiqueta de inspección. Ofrecemos pólizas anuales con reportes útiles para auditorías de STPS o Protección Civil.',
  },
  {
    q: '¿Los extintores incluyen la documentación para Protección Civil?',
    a: 'Sí. Cada extintor sale con <strong>certificado de conformidad NOM-154-SCFI</strong>, ficha técnica del fabricante, etiqueta de inspección y garantía. Son los cuatro documentos que solicita la autoridad competente al revisar tu expediente. Si tu aseguradora o municipio pide documentación adicional, te orientamos sin costo.',
  },
],
    form: {
      tipoLabel: 'Tipo de extintor *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Polvo Seco ABC (PQS)',
        'CO₂ — Dióxido de Carbono',
        'AFFF — Espuma Mecánica',
        'Tipo K — Cocinas Industriales',
        'Púrpura K',
        'Agua a Presión',
        'Cold Fire',
        'Automáticos',
        'Agente Limpio',
        'No sé — necesito asesoría',
      ],
      detallePlaceholder: 'Tipo de instalación, m², cantidad aproximada, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar extintores contra incendios',
      btnLabel: 'Cotizar extintores por WhatsApp',
      ariaLabel: 'Solicitar cotización de extintores por WhatsApp',
      note: 'Cotización gratuita · Certificado NOM incluido · Respuesta en menos de 24 h',
      tipoMsgLabel: '🔥 Tipo de extintor',
    },
  },
  'bomberos': {
    id: 'bomberos',
    badge: 'Equipo para Bomberos — FAQ',
    header: {
      titleLine1: 'Todo lo que Necesitas Saber',
      titleLine2: 'Antes de Equipar tu Brigada',
      desc: 'Resolvemos las dudas más comunes sobre certificaciones NFPA, vida útil del equipo, costos y mantenimiento.',
      bodyPara1: 'Si no encuentras respuesta a tu pregunta, escríbenos por WhatsApp — nuestro equipo técnico responde en menos de 24 horas con información real y sin compromiso de compra.',
    },
    colTitle: 'Lo que preguntan las corporaciones y brigadas',
    colTextBefore: '¿Tienes una duda específica sobre equipo, certificaciones o licitaciones? Escríbenos al ',
    colTextAfter: '.',
    faqs: [
  {
    q: '¿Qué certificaciones debe tener un traje de bombero?',
    a: 'Un traje para combate estructural debe cumplir con la <strong>NFPA 1971</strong>, que exige tres capas: capa exterior resistente al fuego, barrera contra humedad y barrera térmica. Para bomberos forestales aplica la <strong>NFPA 1977</strong>. Para materiales peligrosos, la <strong>NFPA 1991 o 1992</strong> según el nivel de protección. Todos los trajes que vendemos incluyen certificación original del fabricante — no copias ni equivalencias informales.',
  },
  {
    q: '¿Cuánto dura un traje de bombero y cuándo hay que reemplazarlo?',
    a: 'La <strong>NFPA 1851</strong> establece una vida útil máxima de <strong>10 años</strong> desde la fecha de fabricación, independientemente del estado aparente del traje. Requiere inspecciones visuales después de cada uso, limpiezas avanzadas semestrales e inspecciones técnicas anuales por un técnico certificado. Un traje que supera los 10 años o que ha sido sometido a condiciones extremas debe retirarse del servicio. Te asesoramos sin costo sobre cuándo reemplazar tu equipo actual.',
  },
  {
    q: '¿Qué es el ERA y por qué es obligatorio para combate de incendios?',
    a: 'ERA significa <strong>Equipo de Respiración Autónoma</strong> (SCBA en inglés). Es un sistema portátil de aire comprimido con máscara panorámica, regulador certificado NIOSH y cilindro que permite respirar en atmósferas contaminadas o con deficiencia de oxígeno. Es <strong>obligatorio</strong> en cualquier entrada a estructura en llamas — el humo de un incendio estructural contiene más de 100 compuestos tóxicos que incapacitan en segundos. Sin ERA, un bombero no puede entrar al edificio bajo ninguna justificación.',
  },
  {
    q: '¿Venden equipo para brigadas industriales además de cuerpos de bomberos?',
    a: 'Sí. Equipamos tanto <strong>cuerpos de bomberos profesionales</strong> como <strong>brigadas industriales</strong> de plantas petroleras, petroquímicas, farmacéuticas, textiles y de manufactura. La diferencia está en el nivel de protección y el tipo de riesgo: una brigada en una planta con solventes necesita equipo distinto a una brigada en un edificio corporativo. Te ayudamos a definir el equipo correcto según tu <strong>análisis de riesgo y las normas STPS</strong> aplicables a tu sector.',
  },
  {
    q: '¿Manejan trajes sobre medida y con bordado institucional?',
    a: 'Sí. Además de tallas estándar (S a 4XL), gestionamos <strong>trajes sobre medida</strong> con el fabricante. Incluye ajuste preciso de chaquetón y pantalón a las medidas del usuario, <strong>bordado institucional</strong> con nombre, número de empleado o escudo de la corporación, colores especiales y configuración de cintas reflectantes según los requerimientos de tu corporación. Los tiempos de fabricación dependen del fabricante — consultamos disponibilidad antes de comprometer fechas.',
  },
  {
    q: '¿Cuánto cuesta equipar a un bombero completo?',
    a: 'El costo depende del nivel de equipo y las marcas seleccionadas. Un <strong>ensemble básico certificado</strong> (traje + casco + guantes + botas + capucha) tiene rangos que varían según marca, materiales y especificaciones. El <strong>ERA</strong> se cotiza aparte por su complejidad técnica y el tipo de cilindro. El precio por bombero también varía significativamente si se compra en volumen para una brigada completa. Escríbenos con la cantidad de personal, el tipo de operación y el presupuesto disponible — te armamos opciones reales.',
  },
  {
    q: '¿Hacen mantenimiento e inspección del equipo existente?',
    a: 'Sí. Realizamos <strong>inspecciones técnicas anuales</strong> de equipo existente conforme a NFPA 1851 para trajes y NFPA 1981 para ERA. El servicio incluye inspección visual completa de costuras, membranas y capas del traje, verificación de la máscara, presión del cilindro y funcionamiento del regulador. Emitimos un <strong>reporte técnico</strong> útil para el expediente de tu corporación o brigada. Si el equipo requiere reparación o sustitución, te lo decimos con claridad.',
  },
  {
    q: '¿Cómo funciona la prueba hidrostática para los cilindros del ERA?',
    a: 'Los cilindros de los ERA deben someterse a <strong>prueba hidrostática</strong> de forma periódica (cada 5 años para cilindros de acero y aluminio, cada 3 años para cilindros de fibra de carbono) según las regulaciones de la Secretaría de Comunicaciones y Transportes (SCT) y las guías del fabricante. La prueba verifica la integridad estructural del cilindro bajo presión hidráulica controlada. Un cilindro que no esté al corriente en su prueba hidrostática no debe llenarse — es un riesgo de explosión.',
  },
],
    form: {
      empresaLabel: 'Corporación o empresa',
      empresaPlaceholder: 'Nombre de tu corporación o empresa',
      tipoLabel: 'Tipo de equipo *',
      tipoPlaceholder: 'Selecciona una categoría',
      tipoOptions: [
        'Trajes estructurales NFPA 1971',
        'Complementos de uniforme (casco, guantes, botas)',
        'ERA — Respiración autónoma (SCBA)',
        'Herramientas de rescate',
        'Arneses NFPA 1983',
        'Ensemble completo (todo lo anterior)',
        'Mantenimiento e inspección de equipo existente',
        'No sé — necesito asesoría',
      ],
      detalleLabel: 'Información adicional (opcional)',
      detallePlaceholder: 'Tipo de operación, especificaciones, licitación, presupuesto disponible...',
    },
    wa: {
      message: 'Hola, quiero cotizar equipo profesional para bomberos',
      btnLabel: 'Cotizar equipo por WhatsApp',
      ariaLabel: 'Solicitar cotización de equipo para bomberos por WhatsApp',
      note: 'Cotización gratuita · Certificaciones NFPA incluidas · Respuesta en menos de 24 h',
      tipoMsgLabel: '🛡️ Tipo de equipo',
      empresaMsgLabel: '🏛️ Corporación',
    },
  },
  'gabinetes': {
    id: 'gabinetes',
    badge: 'Gabinetes — FAQ',
    header: {
      titleLine1: 'Todo lo que Necesitas Saber',
      titleLine2: 'Antes de Comprar un Gabinete',
      desc: 'Medidas, tipos de instalación, precios y qué exige Protección Civil según tu tipo de inmueble.',
      bodyPara1: 'Si no encuentras respuesta a tu pregunta, mándanos foto del extintor o del espacio por WhatsApp — respondemos en menos de 24 horas con la recomendación técnica sin compromiso de compra.',
    },
    faqs: [
  {
    q: '¿Es obligatorio tener gabinete o basta con el soporte de pared?',
    a: 'Depende del contexto. El <strong>soporte de pared (bracket)</strong> es suficiente para oficinas pequeñas donde el extintor está en área protegida y de bajo tráfico. Pero en <strong>pasillos de alto tráfico, plantas industriales, estacionamientos y exteriores</strong>, Protección Civil puede exigir gabinete — el extintor necesita protección contra polvo, humedad y vandalismo. Para edificios con <strong>sistema de hidrantes</strong>, el gabinete con manguera es obligatorio según NFPA 14. Regla práctica: si el extintor se ensucia, se golpea o alguien podría moverse de su lugar — necesitas gabinete.',
  },
  {
    q: '¿Qué medidas de gabinete necesito para mi extintor?',
    a: 'Las medidas varían según la capacidad. Para un <strong>PQS de 4.5 kg</strong> (el más común): gabinete de 60×35×20 cm. Para <strong>6-9 kg</strong>: 70×35×25 cm. Para <strong>CO₂ de 4.5 kg</strong> (más alto que PQS): 80×35×25 cm. Los gabinetes de <strong>hidrante</strong> son distintos: 80×60×20 cm con espacio para la manguera enrollada. Mándanos foto del extintor y te confirmamos el gabinete exacto — sin costo.',
  },
  {
    q: '¿Gabinete empotrado, sobrepuesto o pedestal — cuál elijo?',
    a: '<strong>Empotrado:</strong> se mete dentro del muro. Limpio visualmente, ideal para construcciones nuevas o remodelaciones. Necesita muro con cavidad disponible. <strong>Sobrepuesto:</strong> se atornilla sobre la superficie del muro. El más práctico para inmuebles existentes — no requiere obra. <strong>Pedestal:</strong> con base contrapesada, portátil. Para zonas donde no puedes perforar muros o necesitas flexibilidad. Te asesoramos según tu tipo de muro y lo que permita el dictamen del inmueble.',
  },
  {
    q: '¿Los gabinetes incluyen el extintor o se venden por separado?',
    a: 'Se venden <strong>por separado</strong> — esto es deliberado. Cada inmueble tiene extintores de distintos tipos y capacidades, y el gabinete debe ajustarse a lo que ya tienes. Si compras <strong>extintor + gabinete juntos</strong>, garantizamos compatibilidad de medidas y te damos <strong>precio de paquete</strong>. La excepción son los gabinetes para hidrante, que incluyen manguera y válvula porque funcionan como sistema completo.',
  },
  {
    q: '¿Cuánto cuesta un gabinete contra incendio?',
    a: 'Un gabinete <strong>sobrepuesto para extintor 4.5-6 kg</strong> parte desde $650 MXN. El <strong>porta extintor con cenicero</strong> desde $850 MXN. Los gabinetes <strong>para bombero</strong> (manguera + hacha + extintor) desde $2,800 MXN. Los de <strong>hidrante con manguera y válvula</strong> desde $4,500 MXN. Precios directos de proveedor sin intermediarios. Para pedidos de <strong>5+ gabinetes</strong> aplicamos precio por volumen.',
  },
  {
    q: '¿Instalan los gabinetes o solo los venden?',
    a: 'Los dos. Vendemos gabinetes sueltos para quien ya sabe qué necesita y tiene instalador propio. Y también ofrecemos el <strong>servicio completo</strong>: suministro + instalación a la altura correcta según norma, con el material de fijación adecuado para cada tipo de muro — tornillo expansivo en concreto, taquete en tablaroca, base contrapesada para pedestal. La instalación incluye señalamiento del gabinete.',
  },
  {
    q: '¿Qué pasa si Protección Civil rechaza mi gabinete?',
    a: 'Si compraste con nosotros y seguiste nuestra recomendación de tipo e instalación, <strong>eso no va a pasar</strong>. Nuestros gabinetes cumplen NOM-002-STPS y están instalados a la altura y con los accesorios correctos. Si por alguna razón el inspector hace una observación, <strong>la resolvemos sin costo adicional</strong>. Es nuestro compromiso de servicio.',
  },
],
    form: {
      tipoLabel: 'Tipo de gabinete *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Gabinete Empotrado para Extintor',
        'Gabinete Sobrepuesto para Extintor',
        'Pedestal para Extintor',
        'Gabinete para Bombero (Manguera + Hacha)',
        'Gabinete para Hidrante con Manguera',
        'Porta Extintor con Cenicero',
        'No sé — necesito asesoría',
      ],
      detallePlaceholder: 'Tipo de instalación, m², cantidad aproximada, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar gabinetes contra incendio',
      btnLabel: 'Cotizar gabinetes por WhatsApp',
      ariaLabel: 'Solicitar cotización de gabinetes por WhatsApp',
      note: 'Cotización gratuita · Compatibilidad garantizada · Respuesta en menos de 24 h',
      tipoMsgLabel: '📦 Tipo de gabinete',
    },
  },
  'mangueras': {
    id: 'mangueras',
    badge: 'Mangueras — FAQ',
    header: {
      titleLine1: 'Todo sobre Mangueras,',
      titleLine2: 'Herrajes y Sistemas Hidráulicos',
      desc: 'Diámetros, acoples NST vs Storz, toma siamesa, prueba anual y compatibilidad entre componentes.',
      bodyPara1: 'Si no encuentras respuesta a tu pregunta, mándanos foto de tu sistema actual por WhatsApp — respondemos con la recomendación técnica exacta en menos de 24 horas, sin compromiso de compra.',
    },
    faqs: [
  {
    q: '¿Qué diámetro de manguera necesito para mi edificio?',
    a: 'Depende del tipo de instalación. <strong>1.5"</strong> es para edificios residenciales y oficinas donde la brigada no es profesional — más ligera y manejable. <strong>2.5"</strong> es el estándar para edificios comerciales, naves industriales y cualquier sistema de hidrantes standpipe. <strong>4"</strong> es para bomberos profesionales y suministro de alto caudal en plantas industriales. Si tu edificio ya tiene red de hidrantes, el diámetro lo determina la tubería existente — mándanos foto y lo verificamos.',
  },
  {
    q: '¿Cuál es la diferencia entre acoples NST y Storz?',
    a: '<strong>NST (National Standard Thread)</strong> es rosca estándar en México — necesita varios giros para acoplar. <strong>Storz</strong> es acople simétrico de origen alemán — se conecta con un cuarto de giro sin importar la orientación. Storz es más rápido pero menos común en instalaciones existentes. La mayoría de edificios en CDMX usan NST. Vendemos <strong>adaptadores NST-Storz</strong> para compatibilidad entre ambos sistemas — crítico si los bomberos de tu municipio usan uno y tu instalación tiene el otro.',
  },
  {
    q: '¿La toma siamesa es obligatoria en mi edificio?',
    a: 'Sí, si tu edificio tiene <strong>sistema de rociadores automáticos o red de hidrantes</strong>. La toma siamesa es la conexión que los bomberos usan para alimentar tu sistema con la presión de su camión cisterna cuando la presión municipal no es suficiente. Se instala en la <strong>fachada exterior</strong> a máximo 30 metros de donde se estaciona el camión. Si tu edificio no la tiene y el sistema lo requiere, Protección Civil lo observará.',
  },
  {
    q: '¿Cada cuánto se deben probar las mangueras contra incendio?',
    a: 'La <strong>NFPA 1962</strong> exige prueba hidrostática <strong>anual</strong>. Se prueba cada manguera a la presión de servicio para verificar que no haya fugas, daño en el forro o debilitamiento del tejido. Una manguera que falla se <strong>retira de servicio inmediatamente</strong>. Ofrecemos servicio de prueba hidrostática en tus instalaciones con <strong>certificado de conformidad</strong> para tu expediente de Protección Civil.',
  },
  {
    q: '¿Puedo comprar solo los herrajes sin la manguera?',
    a: 'Sí. Vendemos todo por separado: chiflones, válvulas, adaptadores, llaves, carretes y tomas siamesas como <strong>piezas individuales</strong> para reemplazo o ampliación. Si necesitas un sistema nuevo completo (manguera + herrajes + gabinete), cotizamos el <strong>paquete con precio preferencial</strong> y verificamos la compatibilidad de todos los componentes antes de entregar.',
  },
  {
    q: '¿Cuánto cuesta un sistema de manguera completo?',
    a: 'Un <strong>gabinete con manguera de 30 m, válvula y chiflón</strong> para un piso parte desde $6,500 MXN. La <strong>toma siamesa</strong> desde $3,200 MXN. Los <strong>carretes</strong> desde $2,800 MXN. Para un edificio de 10 pisos, el sistema de hidrantes (sin red hidráulica) puede ir de $75,000 a $150,000 MXN según la configuración. Hacemos cotización detallada piso por piso.',
  },
  {
    q: '¿Qué pasa si mi sistema tiene componentes de diferentes marcas o diámetros?',
    a: 'Es más común de lo que piensas — sobre todo en edificios con varios proveedores a lo largo del tiempo. Vendemos <strong>adaptadores y reducciones</strong> que hacen compatible cualquier combinación de diámetros y tipos de rosca. Mándanos fotos de tus conexiones actuales por WhatsApp y te decimos exactamente qué adaptadores necesitas. Si compraste con nosotros y algo no conecta, <strong>lo cambiamos sin costo</strong>.',
  },
],
    form: {
      tipoLabel: 'Tipo de sistema *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Manguera 1.5" — Edificios Residenciales',
        'Manguera 2.5" — Edificios Comerciales e Industriales',
        'Manguera 4" — Sistemas de Alto Caudal',
        'Toma Siamesa para Hidrantes',
        'Carrete de Manguera Completo',
        'Herrajes Individuales (NST, Storz, Adaptadores)',
        'Sistema Completo (Manguera + Herrajes)',
        'No sé — necesito asesoría',
      ],
      detallePlaceholder: 'Número de pisos, diámetro actual, cantidad de componentes, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar mangueras y herrajes contra incendio',
      btnLabel: 'Cotizar mangueras por WhatsApp',
      ariaLabel: 'Solicitar cotización de mangueras por WhatsApp',
      note: 'Cotización gratuita · Compatibilidad garantizada · Respuesta en menos de 24 h',
      tipoMsgLabel: '🔧 Tipo de sistema',
    },
  },
  'senalamientos': {
    id: 'senalamientos',
    badge: 'Señalamientos — FAQ',
    header: {
      titleLine1: 'Todo lo que Necesitas Saber',
      titleLine2: 'Antes de Comprar Señalamientos',
      desc: 'Cuántos necesitas, cuánto cuestan, qué exige Protección Civil y qué pasa si no cumples.',
      bodyPara1: 'Si no encuentras respuesta a tu pregunta, escríbenos por WhatsApp — nuestro equipo técnico responde en menos de 24 horas y sin compromiso de compra.',
    },
    faqs: [
  {
    q: '¿Cuáles señalamientos son obligatorios para pasar la inspección de Protección Civil?',
    a: 'Para obtener el <strong>dictamen favorable</strong> necesitas como mínimo: <strong>rutas de evacuación</strong> en todos los pasillos, <strong>salida de emergencia</strong> en cada salida, <strong>punto de reunión</strong> exterior, <strong>ubicación de extintores</strong> en cada equipo y <strong>no fumar</strong> en áreas de riesgo. La cantidad exacta depende de los metros cuadrados y el tipo de inmueble. Si los señalamientos no son fotoluminiscentes, el inspector puede rechazarlos incluso si están en las posiciones correctas.',
  },
  {
    q: '¿Qué diferencia hay entre señalamientos fotoluminiscentes y los estándar?',
    a: 'Los <strong>fotoluminiscentes</strong> absorben luz ambiental y emiten luz en oscuridad total durante <strong>8 horas o más</strong> sin electricidad ni baterías. Son los que exige la <strong>NOM-003-SEGOB</strong> para rutas de evacuación y salidas de emergencia. Los señalamientos estándar solo son visibles con luz y se usan en zonas que no requieren visibilidad en emergencias nocturnas — como señales de advertencia industrial o prohibición en zonas siempre iluminadas.',
  },
  {
    q: '¿Cuántos señalamientos necesito para mi negocio u oficina?',
    a: 'Depende de la superficie y la distribución. Como referencia: una <strong>oficina de 200 m²</strong> necesita entre 15 y 25 señales. Un <strong>restaurante</strong> entre 20 y 35. Una <strong>nave industrial de 1,000 m²</strong> puede requerir 50 o más. Hacemos el <strong>levantamiento gratuito</strong> con plano de ubicación para que no compres de más ni de menos — y tengas el documento útil para tu expediente.',
  },
  {
    q: '¿Cuánto cuesta un señalamiento certificado NOM?',
    a: 'Los señalamientos en PVC estándar arrancan desde <strong>$35 MXN por pieza</strong>. Los fotoluminiscentes certificados NOM-003-SEGOB van desde <strong>$65 MXN</strong> dependiendo del tamaño y material. Para pedidos de <strong>20+ piezas</strong> aplicamos precio por volumen. Escríbenos con la lista o pídenos el levantamiento gratuito — te cotizamos el paquete completo incluyendo instalación si la necesitas.',
  },
  {
    q: '¿Instalan los señalamientos o solo los venden?',
    a: 'Los dos. Vendemos señalamientos sueltos para quien ya sabe qué necesita. Y también ofrecemos el <strong>servicio completo</strong>: levantamiento → plano → venta → instalación. La instalación incluye colocación a la altura correcta según NOM (entre <strong>1.80 m y 2.20 m del piso</strong>) con los materiales de fijación adecuados para cada superficie — tornillo en muros de concreto, adhesivo de alto rendimiento en vidrio o metal.',
  },
  {
    q: '¿Cada cuánto tiempo se deben reemplazar?',
    a: 'No hay periodicidad fija en la norma, pero <strong>Protección Civil puede rechazar</strong> señalamientos decolorados, rotos, despegados o ilegibles. En la práctica, señalamientos de calidad duran <strong>3 a 5 años</strong> en interiores. Los de exterior o zonas con sol directo requieren reemplazo cada 2-3 años. Los que vendemos usan tintas UV-resistentes que duplican la vida útil de las versiones de papelería o bajo costo.',
  },
  {
    q: '¿Qué pasa si Protección Civil rechaza mis señalamientos?',
    a: 'Si compraste con nosotros y seguiste el plano de señalización que entregamos, <strong>eso no va a pasar</strong>. Nuestros señalamientos cumplen NOM-003-SEGOB y NOM-026-STPS, y el plano está diseñado específicamente para pasar la inspección. Si por alguna razón el inspector hace una observación, <strong>la resolvemos sin costo adicional</strong>. Es nuestro compromiso de servicio.',
  },
  {
    q: '¿Hacen señalización personalizada para riesgos específicos?',
    a: 'Sí. Fabricamos señalamientos con <strong>pictograma NOM, texto personalizado, nombre de empresa</strong> y medidas especiales. Aplica para riesgos que no tienen señal estándar, zonas bilingüe (español/inglés), señales grandes para interiores industriales o señalamientos de marca para corporativos y hoteles. El diseño incluye revisión normativa para garantizar que la señal personalizada cumple con el estándar correspondiente.',
  },
],
    form: {
      tipoLabel: 'Tipo de señalamiento *',
      tipoPlaceholder: 'Selecciona una categoría',
      tipoOptions: [
        'Evacuación y Salvamento',
        'Señales de Prohibición',
        'Señales de Advertencia',
        'Señales de Obligación EPP',
        'Fotoluminiscentes',
        'Señalización Personalizada',
        'No sé — necesito levantamiento',
      ],
      detallePlaceholder: 'Tipo de inmueble, m², cantidad aproximada, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar señalamientos de emergencia',
      btnLabel: 'Cotizar señalamientos por WhatsApp',
      ariaLabel: 'Solicitar cotización de señalamientos por WhatsApp',
      note: 'Cotización gratuita · Certificado NOM incluido · Respuesta en menos de 24 h',
      tipoMsgLabel: '📋 Tipo de señalamiento',
    },
  },
  'sistemas': {
    id: 'sistemas',
    badge: 'Sistemas — FAQ',
    header: {
      titleLine1: 'Todo sobre Sistemas',
      titleLine2: 'Contra Incendio NFPA',
      desc: 'Costos, convencional vs direccionable, obligatoriedad, mantenimiento y presión de agua — las preguntas más frecuentes con respuesta técnica directa.',
      bodyPara1: 'Si tu pregunta no está aquí, mándanos foto de tu inmueble o del sistema existente por WhatsApp — respondemos con diagnóstico técnico en menos de 24 horas, sin compromiso de compra.',
    },
    faqs: [
  {
    q: '¿Cuánto cuesta instalar un sistema contra incendio completo?',
    a: 'Depende del tipo de inmueble y los subsistemas requeridos. Un <strong>sistema básico de alarma y detección</strong> para oficinas de 500 m² parte desde $45,000 MXN instalado. Un <strong>sistema de rociadores automáticos</strong> para nave industrial de 1,000 m² puede ir de $180,000 a $350,000 MXN según el riesgo. Un <strong>sistema completo</strong> (alarma + rociadores + red hidráulica + bomba) para edificio de 10 pisos puede ir de $500,000 a $1,200,000 MXN. Hacemos cotización detallada sin compromiso después de diagnóstico del inmueble.',
  },
  {
    q: '¿Cuál es la diferencia entre un sistema convencional y uno direccionable?',
    a: 'Un sistema <strong>convencional</strong> divide el edificio en zonas — cuando hay alarma, sabes en qué zona está el fuego pero no cuál detector exacto la activó. Es más económico y adecuado para edificios simples (hasta 10 zonas). Un sistema <strong>direccionable</strong> identifica exactamente qué detector se activó, en qué piso y en qué cuarto — el tablero muestra la ubicación precisa en pantalla. Es obligatorio en edificios de más de 5 pisos o cuando hay más de 32 detectores. Para edificios complejos, la diferencia en tiempo de respuesta puede salvar vidas.',
  },
  {
    q: '¿Los rociadores automáticos son obligatorios en mi edificio?',
    a: 'En México, la obligatoriedad depende del uso y el tamaño. Son <strong>obligatorios</strong> conforme a NFPA 13 en: bodegas de más de 300 m², centros comerciales, hoteles, hospitales, edificios de más de 23 metros de altura (aprox. 7 pisos) y áreas con carga de fuego alta (almacenes de material inflamable, plantas industriales). En CDMX, el Reglamento de Construcción y el Manual de Protección Civil pueden exigirlos en situaciones adicionales. Hacemos diagnóstico gratuito para determinar si tu inmueble los requiere.',
  },
  {
    q: '¿Cada cuánto hay que darle mantenimiento al sistema?',
    a: 'La frecuencia varía por componente. <strong>Mensual:</strong> prueba visual de detectores y panel. <strong>Trimestral:</strong> prueba funcional de detectores y sirenas. <strong>Semestral:</strong> prueba hidrostática de la red y válvulas, prueba de la bomba a plena carga (NFPA 25). <strong>Anual:</strong> inspección completa del sistema, prueba de todos los rociadores y mangueras, prueba de la batería de respaldo. Para cumplir con STPS y Protección Civil necesitas la bitácora firmada por un técnico certificado — ofrecemos <strong>pólizas de mantenimiento anual</strong> con reportes válidos para tus expedientes.',
  },
  {
    q: '¿Cuánto tiempo toma la instalación de un sistema completo?',
    a: 'Depende del tamaño y complejidad. Una <strong>alarma convencional</strong> para oficina de 200 m² puede estar lista en 2-3 días. Un <strong>sistema direccionable</strong> para edificio de 5 pisos toma de 2 a 4 semanas. Un <strong>sistema completo</strong> (alarma + rociadores + red hidráulica + bomba) para nave industrial puede tomar de 6 a 12 semanas, incluyendo el cálculo hidráulico, los planos para Protección Civil, la instalación y el comisionamiento. Antes de cotizar, evaluamos el cronograma realista para no interferir con tu operación.',
  },
  {
    q: '¿Qué pasa si la presión municipal no es suficiente para los rociadores?',
    a: 'Es uno de los problemas más comunes en CDMX — la presión municipal varía mucho por colonia y hora. Si la presión de la red no alcanza los <strong>mínimos de NFPA 13</strong> (generalmente 7 bar en el rociador más desfavorable), la solución es una bomba contra incendio conforme a <strong>NFPA 20</strong>. Instalamos el conjunto completo: bomba eléctrica principal, bomba diésel de emergencia (para corte de luz) y bomba jockey de mantenimiento de presión. Si el edificio no tiene cisterna, también proyectamos la capacidad requerida.',
  },
  {
    q: '¿El sistema necesita mantenimiento diferente según la marca del tablero?',
    a: 'El mantenimiento técnico es similar entre marcas (Notifier, Hochiki, Napco, Bosch), pero el <strong>software de diagnóstico</strong> y los <strong>módulos de expansión</strong> sí son propietarios. Un técnico sin acceso al software de la marca no puede programar ni diagnosticar correctamente el tablero. Por eso recomendamos elegir desde el inicio una marca con <strong>soporte local disponible</strong> y asegurarse de que el proveedor que instala también da el mantenimiento. Nosotros instalamos, programamos y mantenemos los tableros que suministramos — no dejamos al cliente buscando técnico certificado después.',
  },
],
    form: {
      tipoLabel: 'Tipo de sistema *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Sistema de Alarma Convencional',
        'Sistema de Alarma Direccionable',
        'Sistema de Rociadores Automáticos (Sprinklers)',
        'Red Hidráulica de Incendios (Hidrantes)',
        'Sistema Completo (Alarma + Rociadores + Red Hidráulica)',
        'Bomba Contra Incendios',
        'Mantenimiento de Sistema Existente',
        'No sé — necesito asesoría',
      ],
      detallePlaceholder: 'Tipo de inmueble, m², número de pisos, riesgo, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar un sistema contra incendio',
      btnLabel: 'Cotizar sistema por WhatsApp',
      ariaLabel: 'Solicitar cotización de sistema contra incendio por WhatsApp',
      note: 'Cotización gratuita · Diagnóstico técnico · Respuesta en menos de 24 h',
      tipoMsgLabel: '🔧 Tipo de sistema',
    },
  },
  'primeros-auxilios': {
    id: 'primeros-auxilios',
    badge: 'Primeros Auxilios — FAQ',
    header: {
      titleLine1: 'Todo sobre Botiquines,',
      titleLine2: 'DEA y Brigadas de Primeros Auxilios',
      desc: 'Tipo de botiquín por empresa, DEA, resurtido, capacitación DC-3 y cumplimiento NOM-030-STPS — las preguntas más frecuentes con respuesta directa.',
      bodyPara1: 'Si tienes una auditoría de STPS próxima o no estás seguro de si tu empresa cumple con NOM-030-STPS, mándanos tu número de trabajadores y tipo de actividad por WhatsApp — te respondemos con el diagnóstico completo en menos de 24 horas.',
    },
    faqs: [
  {
    q: '¿Qué tipo de botiquín necesita mi empresa según la NOM-030-STPS?',
    a: 'Depende del número de trabajadores. <strong>Tipo A:</strong> hasta 25 trabajadores — incluye material de curación básico, guantes y medicamentos de libre venta. <strong>Tipo B:</strong> de 26 a 100 trabajadores — contenido más amplio con material para múltiples lesiones simultáneas. <strong>Tipo C:</strong> más de 100 trabajadores — contenido completo incluyendo material para quemaduras, material de inmovilización e insumos para atención de múltiples lesionados. La NOM también establece que debe haber al menos un botiquín por piso y por área de riesgo diferenciada, no solo uno en toda la empresa.',
  },
  {
    q: '¿El desfibrilador DEA es obligatorio en mi empresa?',
    a: 'La NOM-030-STPS no obliga explícitamente el DEA para todas las empresas, pero la <strong>realidad estadística</strong> lo justifica en cualquier empresa con más de 25 trabajadores: el paro cardíaco puede ocurrirle a cualquier persona en cualquier momento, sin síntomas previos, y la tasa de supervivencia cae un 10% por cada minuto sin desfibrilación. En edificios públicos con alto flujo de personas (centros comerciales, aeropuertos, estadios) ya es obligatorio por reglamento local. Para empresas medianas y grandes, el DEA es una decisión de responsabilidad — no esperar a que la ley lo obligue.',
  },
  {
    q: '¿Cada cuánto hay que resurtir el botiquín?',
    a: 'Dos variables determinan el resurtido: <strong>uso</strong> (cada vez que se usa material hay que reponerlo) y <strong>caducidad</strong> (los medicamentos y algunos materiales tienen fecha de vencimiento). La NOM-030-STPS exige revisión periódica sin fijar un intervalo exacto — en la práctica, se recomienda revisión <strong>mensual</strong> de inventario y resurtido <strong>semestral o anual</strong> según el uso. Ofrecemos servicio de resurtido periódico: revisamos el botiquín, retiramos lo caducado, reponemos lo usado y entregamos lista de inventario actualizada.',
  },
  {
    q: '¿La capacitación de primeros auxilios es obligatoria?',
    a: 'Sí. La NOM-030-STPS obliga a las empresas a formar brigadas de primeros auxilios con capacitación documentada. La constancia de capacitación que acepta la STPS es la <strong>DC-3</strong> — el formato oficial del Servicio Nacional de Empleo. Sin constancia DC-3, la brigada no está validada ante la STPS, aunque el personal esté realmente capacitado. Ofrecemos cursos de primeros auxilios con constancia DC-3 válida — coordinados el mismo día que entregamos el equipo para que el proceso sea completo.',
  },
  {
    q: '¿Cuánto cuesta equipar una empresa con primeros auxilios completos?',
    a: 'Depende del tamaño y tipo de empresa. <strong>Empresa pequeña (hasta 25 personas):</strong> botiquín tipo A + soporte mural + capacitación básica desde $1,800 MXN. <strong>Empresa mediana (26–100 personas):</strong> botiquín tipo B + DEA + gabinete + capacitación DC-3 desde $12,000 MXN. <strong>Empresa grande (+100 personas):</strong> múltiples botiquines tipo C + DEA por piso + camillas + capacitación completa — cotización a medida. Para auditorías de STPS próximas, también hacemos diagnóstico urgente del estado actual y plan de regularización.',
  },
  {
    q: '¿Qué pasa si la STPS encuentra mi botiquín incompleto o vencido?',
    a: 'La STPS puede emitir una <strong>acta de infracción</strong> con multa desde 250 hasta 5000 veces el salario mínimo diario, dependiendo de la gravedad. En la práctica, en una primera visita pueden dar un plazo para regularización — pero si ya habían notificado antes o si el inspector considera riesgo inminente, la multa puede ser inmediata. El costo de un botiquín completo siempre es menor que el costo de la multa. Además del tema legal, un botiquín incompleto en una emergencia real puede costar una vida.',
  },
  {
    q: '¿Puedo comprar solo el resurtido sin el botiquín completo?',
    a: 'Sí. Vendemos todo el material de curación por separado: gasas, vendas, antisépticos, guantes, torniquetes, apósitos para quemaduras y cualquier insumo que necesites reponer. Si mandas foto del inventario actual de tu botiquín por WhatsApp, te decimos exactamente qué falta según el tipo NOM que le corresponde a tu empresa — y lo enviamos el mismo día para pedidos antes de las 2 pm en CDMX.',
  },
],
    form: {
      tipoLabel: 'Equipo requerido *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Botiquín Tipo A (hasta 25 trabajadores)',
        'Botiquín Tipo B (26-100 trabajadores)',
        'Botiquín Tipo C (más de 100 trabajadores)',
        'DEA (Desfibrilador Automático)',
        'Botiquín + DEA Completo',
        'Resurtido de Material',
        'Capacitación DC-3',
        'No sé — necesito asesoría NOM-030-STPS',
      ],
      detallePlaceholder: 'Número de empleados, tipo de actividad, auditoría próxima, urgencia...',
    },
    wa: {
      message: 'Hola, quiero cotizar equipo de primeros auxilios NOM-030-STPS',
      btnLabel: 'Cotizar primeros auxilios por WhatsApp',
      ariaLabel: 'Solicitar cotización de primeros auxilios por WhatsApp',
      note: 'Cotización gratuita · NOM-030-STPS incluida · Respuesta en menos de 24 h',
      tipoMsgLabel: '🏥 Equipo requerido',
    },
  },
  'equipo-seguridad': {
    id: 'equipo-seguridad',
    badge: 'Equipo de Seguridad — FAQ',
    header: {
      titleLine1: 'Todo sobre EPP, Normas',
      titleLine2: 'y Programas de Seguridad',
      desc: 'Certificaciones, selección técnica, vida útil, responsabilidad legal y costos — las preguntas más frecuentes con respuesta directa y técnica.',
      bodyPara1: 'Si tienes dudas sobre qué EPP necesita un puesto específico, mándanos el nombre del puesto y los materiales o procesos con los que trabaja por WhatsApp — te respondemos con la especificación técnica en menos de 24 horas.',
    },
    faqs: [
  {
    q: '¿Qué diferencia hay entre EPP certificado NOM y el que no lo tiene?',
    a: 'La diferencia más importante es la prueba de desempeño. Un casco con certificación <strong>NOM-017-STPS</strong> ha pasado pruebas de impacto, penetración y resistencia eléctrica definidas en la norma. Un casco sin certificación puede verse igual pero no ha pasado ninguna prueba estandarizada — su desempeño ante un impacto real es desconocido. La STPS en una inspección puede pedir la hoja técnica del EPP y la certificación — si el producto no la tiene, la empresa tiene una observación aunque el equipo esté siendo usado.',
  },
  {
    q: '¿Cómo sé qué tipo de guante necesita cada puesto de trabajo?',
    a: 'Depende del riesgo identificado en el puesto: <strong>corte y abrasión</strong> → guante anticorte EN 388 con nivel A4 o superior; <strong>productos químicos</strong> → guante de nitrilo o neopreno certificado EN 374 según el químico específico; <strong>calor</strong> → guante EN 407 con temperatura de contacto certificada; <strong>electricidad</strong> → guante dieléctrico ASTM D120 clase 00 a 4 según el voltaje. El guante de cuero multiusos no cubre ninguna de estas categorías de manera técnica — aunque es el más común en plantas industriales. Mándanos el listado de materiales con los que trabaja el operador y te recomendamos el guante correcto.',
  },
  {
    q: '¿El respirador N95 protege contra vapores orgánicos?',
    a: 'No. Esta es la confusión más peligrosa en protección respiratoria. Una <strong>mascarilla N95</strong> filtra partículas sólidas y líquidas (polvos, aerosoles, bacterias) pero NO filtra vapores ni gases — el vapor orgánico pasa a través del filtro de partículas. Para vapores orgánicos se requiere un <strong>respirador de media cara con cartucho OV</strong> (Organic Vapor). Para ambos, el cartucho <strong>OV/P100 combinado</strong>. El respirador incorrecto da falsa sensación de protección — el trabajador inhala el vapor convencido de que está protegido.',
  },
  {
    q: '¿Cada cuánto hay que reemplazar el EPP?',
    a: 'Varía por tipo: <strong>Cascos:</strong> máximo 5 años desde manufactura, 2-3 si hubo impacto. Revisar la fecha estampada en el interior. <strong>Arneses:</strong> máximo 10 años desde manufactura, retirar inmediatamente si absorbió una caída. <strong>Guantes dieléctricos:</strong> prueba cada 6 meses. <strong>Tapones auditivos desechables:</strong> un solo uso. <strong>Respiradores:</strong> cambiar cartuchos según indicaciones del fabricante (generalmente 40 horas de exposición o cuando se percibe olor a través). La fecha de manufactura está marcada en el producto — si no la encuentras, ya superó su vida útil.',
  },
  {
    q: '¿La empresa puede exigir que el trabajador use EPP que le resulta incómodo?',
    a: 'Sí, dentro de los límites de razonabilidad. La NOM-017-STPS da al trabajador el derecho de reportar EPP que no cumple con las especificaciones — pero no le da el derecho de rechazarlo por incomodidad. La obligación de la empresa es seleccionar el EPP técnicamente correcto <strong>y</strong> adecuado en talla y condiciones de uso para el puesto. Si el trabajador reporta que el EPP interfiere con sus funciones, la empresa debe evaluar si hay alternativas certificadas más cómodas — no simplemente excusar el no uso.',
  },
  {
    q: '¿Qué pasa si un trabajador se lesiona y no usaba el EPP asignado?',
    a: 'La empresa puede tener responsabilidad parcial o total dependiendo de las circunstancias. Si la empresa <strong>documentó la entrega del EPP</strong>, capacitó al trabajador en su uso correcto y tiene evidencia de que el trabajador eligió no usarlo, la responsabilidad puede trasladarse al trabajador. Sin evidencia documental, la empresa puede ser considerada responsable aunque haya entregado el equipo verbalmente. Por eso el <strong>registro de entrega firmado por el trabajador</strong> es parte crítica del programa de EPP — no solo el equipo.',
  },
  {
    q: '¿Cuánto cuesta equipar a un trabajador con EPP completo?',
    a: 'Depende de la industria y los riesgos. Un equipo básico para construcción (casco + lentes + tapones + guantes + calzado) puede ir de <strong>$800 a $1,800 MXN</strong> por trabajador. Un equipo completo para mantenimiento eléctrico (añadiendo casco clase E, guante dieléctrico, calzado EH y ropa FR) puede ir de <strong>$3,500 a $8,000 MXN</strong> por persona. Para plantas industriales con múltiples puestos, cotizamos por paquete de puesto de trabajo — más económico que cotizar pieza por pieza.',
  },
],
    form: {
      tipoLabel: 'Tipo de EPP requerido *',
      tipoPlaceholder: 'Selecciona un tipo',
      tipoOptions: [
        'Cascos de Seguridad NOM-017-STPS',
        'Lentes de Protección (Estándar, Soldadura, Químicos)',
        'Guantes Anticorte, Dieléctricos, Térmicos',
        'Botas de Seguridad (EH, Conductivas, Punteras)',
        'Arneses y Equipos de Caída (Clase A, C)',
        'Respiradores (N95, Media Cara, Cartuchos)',
        'Protección Auditiva (Tapones, Diademas)',
        'Equipo Completo para Puesto Específico',
        'No sé — necesito diagnóstico de riesgo',
      ],
      detallePlaceholder: 'Tipo de industria, puestos de trabajo, materiales o procesos, número de empleados...',
    },
    wa: {
      message: 'Hola, quiero cotizar EPP certificado NOM-017-STPS',
      btnLabel: 'Cotizar EPP por WhatsApp',
      ariaLabel: 'Solicitar cotización de EPP por WhatsApp',
      note: 'Cotización gratuita · NOM-017-STPS · Respuesta en menos de 24 h',
      tipoMsgLabel: '🛡️ Tipo de EPP',
    },
  },
}
