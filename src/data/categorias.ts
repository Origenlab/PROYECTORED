// ============================================================
// src/data/categorias.ts
// Datos completos de cada página de Nivel 3 (categorías de producto)
// Fuente de verdad para src/pages/[slug].astro
// ============================================================

export interface SubcategoryItem {
  label: string
  desc: string
}

export interface NormItem {
  code: string
  name: string
  desc: string
}

export interface TargetItem {
  label: string
  desc: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CategoryPageData {
  // Hero
  badge: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescRight: string[]

  // Stats bar

  // Contenido del slot
  subcategories: SubcategoryItem[]
  norms: NormItem[]
  targets: TargetItem[]

  // FAQ y CTA
  waMessage: string
  faqItems: FAQItem[]
  ctaTitle: string
  ctaBody: string
}

export const CATEGORY_PAGES: Record<string, CategoryPageData> = {

  // ────────────────────────────────────────────────────────────
  // EXTINTORES
  // ────────────────────────────────────────────────────────────
  'extintores': {
    badge: 'NOM-154-SCFI · NOM-002-STPS',
    heroTitle: 'Extintores Certificados',
    heroAccent: 'NOM-154-SCFI',
    heroSubtitle: 'Extintores para todo tipo de riesgo: oficinas, cocinas industriales, equipos electrónicos, líquidos inflamables y áreas especiales. Entrega en CDMX con documentación completa lista para Protección Civil.',
    heroDescRight: [
      'En Proyecto Red no manejamos un solo tipo de extintor. Nuestro catálogo cubre todos los agentes extintores reconocidos por la NOM-154-SCFI: polvo seco, CO₂, AFFF, Tipo K para cocinas industriales, agente limpio para datos y archivos, y sistemas automáticos.',
      'Cada unidad se entrega con ficha técnica, certificado de conformidad, garantía del fabricante y etiqueta de inspección. Todo lo que necesitas para tu expediente de Protección Civil y STPS, en un solo pedido.',
    ],
subcategories: [
      { label: 'Polvo seco PQS / ABC',
        desc: 'El más utilizado para fuegos clase A, B y C. Ideal para oficinas, bodegas, vehículos y áreas de uso general. Disponible en 1, 2.5, 4, 6, 9 y 12 kg.' },
      { label: 'CO₂ — Dióxido de carbono',
        desc: 'Sin residuo. Indicado para equipos electrónicos, servidores, laboratorios y áreas donde el agente extintor no debe contaminar el equipo.' },
      { label: 'AFFF — Espuma para líquidos',
        desc: 'Diseñado para fuegos clase B (líquidos inflamables y combustibles). Uso en talleres, gasolineras, plantas químicas y áreas de almacenamiento de combustible.' },
      { label: 'Tipo K — Cocinas industriales',
        desc: 'Específico para aceites y grasas de cocción a alta temperatura. Obligatorio en cocinas industriales, restaurantes y hoteles conforme a NFPA 96.' },
      { label: 'Agente limpio — Archivos y datos',
        desc: 'Halotron, FM-200 o FE-36. No daña equipos ni documentos. Para cuartos de servidores, archivos, museos y áreas críticas sin posibilidad de daño por agua o polvo.' },
      { label: 'Extintores automáticos',
        desc: 'Se activan sin intervención humana ante calor o llama. Indicados para cocinas de alto riesgo, cuartos eléctricos y espacios sin supervisión permanente.' },
      { label: 'Púrpura K',
        desc: 'Agente húmedo de alta eficiencia para fuegos clase K. Alternativa al CO₂ en cocinas industriales de alto flujo.' },
      { label: 'Cold Fire — Ecológico',
        desc: 'Agente a base de agua con aditivos orgánicos. Reduce la temperatura rápidamente. No tóxico y biodegradable. Para fuegos A y B.' },
    ],
    norms: [
      { code: 'NOM-154-SCFI',   name: 'Extintores de fuego',           desc: 'Establece los requisitos de seguridad, desempeño y etiquetado de todos los extintores portátiles comercializados en México.' },
      { code: 'NOM-002-STPS',   name: 'Prevención y protección CI',    desc: 'Determina el número y tipo de extintores requeridos según el área, ocupación y riesgo de cada instalación laboral.' },
      { code: 'NFPA 10',        name: 'Extintores portátiles',         desc: 'Estándar internacional para selección, instalación, inspección, mantenimiento y prueba de extintores portátiles.' },
    ],
    targets: [
      { label: 'Oficinas y corporativos',
        desc: 'Extintores PQS ABC para áreas de trabajo. La NOM-002-STPS exige al menos uno por cada 300 m².' },
      { label: 'Restaurantes y cocinas industriales',
        desc: 'Extintor Tipo K obligatorio en campana o zona de cocción. El CO₂ complementa en áreas de barra y almacén.' },
      { label: 'Plantas industriales y bodegas',
        desc: 'Extintores de mayor capacidad (9-12 kg) y AFFF para zonas de riesgo B. Evaluamos tu planta para definir el tipo correcto.' },
      { label: 'Cuartos de servidores y TI',
        desc: 'Agente limpio o CO₂. Sin residuo, sin daño al equipo, sin interrupción de servicio después del uso.' },
      { label: 'Vehículos y flota',
        desc: 'Extintores compactos PQS o CO₂ según el tipo de vehículo: camiones, maquinaria pesada, transporte de personal.' },
    ],
    waMessage: 'Hola, necesito cotizar extintores certificados NOM. ¿Podrían asesorarme sobre el tipo correcto para mi instalación?',
    faqItems: [
      { question: '¿Con qué frecuencia debo dar mantenimiento a un extintor?',
        answer: 'La NOM-154-SCFI exige mantenimiento anual para todos los extintores. La prueba hidrostática es obligatoria cada 5 años para extintores de acero. Nosotros realizamos ambos servicios directamente en tus instalaciones.' },
      { question: '¿Qué extintor debo comprar para mi oficina o empresa?',
        answer: 'Para oficinas generales, el extintor de Polvo Seco ABC (PQS) de 4 kg es el más indicado. Para cocinas comerciales se requiere un Tipo K. Para equipos electrónicos, CO₂ o agente limpio. En nuestra asesoría técnica gratuita te indicamos exactamente qué necesitas según tu espacio y actividad.' },
      { question: '¿Los extintores incluyen documentación para Protección Civil?',
        answer: 'Sí. Todos nuestros extintores cumplen con la NOM-154-SCFI y se entregan con ficha técnica, certificado de conformidad, garantía y etiqueta de inspección, listos para integrar a tu expediente de Protección Civil y STPS.' },
      { question: '¿Hacen recarga y mantenimiento de extintores de otras marcas?',
        answer: 'Sí, recargamos y damos mantenimiento a extintores de cualquier marca y tipo: PQS, CO₂, AFFF, Tipo K y agente limpio. El servicio incluye revisión del agente, presión, manguera, boquilla y collar de garantía.' },
      { question: '¿Cuánto cuesta la entrega en CDMX?',
        answer: 'La entrega en la Ciudad de México está incluida en pedidos a partir de cierto monto. Para pedidos urgentes o de un solo extintor, el costo se confirma en la cotización. Escríbenos y te lo confirmamos de inmediato.' },
    ],
    ctaTitle: '¿Necesitas extintores certificados en CDMX?',
    ctaBody: 'Escríbenos con el tipo de instalación, el área aproximada y la cantidad de pisos. Te indicamos el tipo correcto, el precio y el tiempo de entrega.',
  },

  // ────────────────────────────────────────────────────────────
  // EQUIPO PARA BOMBEROS
  // ────────────────────────────────────────────────────────────
  'equipo-bomberos': {
    badge: 'NFPA 1971 · NFPA 1981 · NFPA 1851',
    heroTitle: 'Equipo Profesional para',
    heroAccent: 'Bomberos y Brigadas',
    heroSubtitle: 'Trajes estructurales, equipos de respiración autónoma, herramientas de rescate y arneses certificados NFPA. Para cuerpos de bomberos, brigadas industriales y equipos de respuesta a emergencias.',
    heroDescRight: [
      'Proyecto Red es proveedor especializado de equipo profesional para bomberos y brigadas de emergencia industrial. Nuestro catálogo incluye trajes estructurales certificados NFPA 1971, equipos de respiración autónoma (ERA), herramientas de rescate manual, hidráulico, neumático y eléctrico, y sistemas de rescate en altura.',
      'Trabajamos con cuerpos municipales de bomberos, brigadas de protección civil, plantas industriales con brigadas propias y equipos de respuesta a emergencias. Cada equipo se entrega con certificación de origen, ficha técnica y garantía del fabricante.',
    ],
subcategories: [
      { label: 'Trajes estructurales NFPA 1971',
        desc: 'Trajes de bombero certificados para combate estructural de incendios. Capas de protección térmica, barrera de humedad y capa exterior resistente a llama. Certificación NFPA 1971.' },
      { label: 'ERA — Equipos de respiración autónoma',
        desc: 'Aparatos de respiración autónoma (SCBA) de circuito abierto certificados NFPA 1981. Cilindros de 30 o 45 minutos, manómetro de presión, alarma de bajo nivel y máscaras de silicón.' },
      { label: 'Herramientas de rescate hidráulico',
        desc: 'Quijadas de vida, cortadoras y esparcidores hidráulicos para rescate vehicular. Operación con unidad de poder a gasolina o eléctrica. Diseñadas para condiciones extremas.' },
      { label: 'Herramientas de rescate neumático',
        desc: 'Cojines de elevación, cuñas y herramientas de expansión neumática. Para liberación de víctimas bajo estructuras colapsadas o vehículos volcados.' },
      { label: 'Herramientas de rescate eléctrico',
        desc: 'Versión de batería de quijadas, cortadoras y esparcidores. Operación silenciosa, sin fumes y sin necesidad de unidad de poder externa.' },
      { label: 'Arneses y equipos de rescate en altura',
        desc: 'Arneses completos, líneas de vida, descensores y bloqueadores para rescate urbano en altura (USAR). Certificados NFPA 1983 y EN 1891.' },
      { label: 'Complementos de uniforme',
        desc: 'Cascos estructurales, guantes de bombero, botas de combate, capuchas de Nomex y accesorios de uniformización. Compatibles con trajes NFPA 1971.' },
    ],
    norms: [
      { code: 'NFPA 1971', name: 'Trajes de protección estructural',   desc: 'Estándar para prendas de protección usadas en operaciones de combate estructural de incendios.' },
      { code: 'NFPA 1981', name: 'Aparatos de respiración autónoma',   desc: 'Establece los requisitos mínimos para equipos SCBA en operaciones de combate de incendios.' },
      { code: 'NFPA 1851', name: 'Selección, cuidado y mantenimiento', desc: 'Define los programas de inspección, limpieza, mantenimiento y retiro del equipo de protección personal de bomberos.' },
      { code: 'NFPA 1983', name: 'Equipo de rescate en altura',        desc: 'Estándar para cuerdas, arneses y accesorios de rescate en operaciones de cuerpos de emergencia.' },
    ],
    targets: [
      { label: 'Cuerpos municipales de bomberos',
        desc: 'Equipo de combate estructural, ERA y herramientas de rescate certificados NFPA para operaciones de primera respuesta.' },
      { label: 'Brigadas de emergencia industrial',
        desc: 'Plantas industriales con brigadas propias que requieren equipo certificado para respuesta interna a incendios y emergencias.' },
      { label: 'Protección Civil estatal y municipal',
        desc: 'Cuerpos de respuesta a emergencias que requieren equipo de rescate técnico, herramientas de extricación y ERA.' },
      { label: 'Brigadas de construcción y minería',
        desc: 'Sectores con riesgo específico de colapso o atmósferas peligrosas que requieren ERA, arneses y herramientas de rescate.' },
    ],
    waMessage: 'Hola, necesito información sobre equipo profesional para bomberos o brigadas. ¿Podrían asesorarme?',
    faqItems: [
      { question: '¿Los trajes de bombero que manejan están certificados NFPA 1971?',
        answer: 'Sí. Todos nuestros trajes estructurales son certificados NFPA 1971. Cada prenda viene con documentación de certificación de origen, ficha técnica y especificaciones de las capas de protección.' },
      { question: '¿Venden ERA (equipos de respiración autónoma) para brigadas industriales?',
        answer: 'Sí. Manejamos ERA de circuito abierto certificados NFPA 1981 con cilindros de 30 y 45 minutos, disponibles en configuración de espalda completa. También ofrecemos equipos de media duración para brigadas con menor exposición.' },
      { question: '¿Tienen herramientas de rescate vehicular (quijadas de vida)?',
        answer: 'Sí. Manejamos herramientas de rescate hidráulico, neumático y eléctrico: quijadas de vida, cortadoras, esparcidores y unidades de poder. Cuéntanos el uso específico (rescate vehicular, colapso, industrial) para recomendarte el sistema correcto.' },
      { question: '¿Pueden dotar equipo a una brigada industrial desde cero?',
        answer: 'Sí. Evaluamos el nivel de riesgo y el tipo de brigada (primeros auxilios, combate de incendios, rescate) y proponemos una dotación completa certificada. Incluimos capacitación DC-3 válida ante STPS.' },
    ],
    ctaTitle: '¿Necesitas equipo para bomberos o brigadas?',
    ctaBody: 'Cuéntanos el tipo de cuerpo (bomberos, brigada industrial, PC) y la función que debe cubrir el equipo. Te proponemos dotación completa certificada NFPA.',
  },

  // ────────────────────────────────────────────────────────────
  // SEÑALAMIENTOS
  // ────────────────────────────────────────────────────────────
  'senalamientos': {
    badge: 'NOM-003-SEGOB · NOM-026-STPS',
    heroTitle: 'Señalamientos de Emergencia',
    heroAccent: 'Certificados NOM',
    heroSubtitle: 'Señalización fotoluminiscente y en PVC para evacuación, prohibición, advertencia y obligación. Levantamiento de inmueble, recomendación de cantidades e instalación incluidos en el servicio.',
    heroDescRight: [
      'Los señalamientos no son solo obligación legal — son la diferencia entre una evacuación ordenada y una situación de riesgo. En Proyecto Red fabricamos y suministramos señalización conforme a la NOM-003-SEGOB (evacuación y emergencias) y la NOM-026-STPS (colores y señales de seguridad en centros de trabajo).',
      'Además del producto, ofrecemos el servicio completo: visitamos tu instalación, hacemos el levantamiento del inmueble, definimos qué señalamientos se necesitan y en qué ubicaciones, y entregamos el plano de señalización lista para integrar a tu expediente de Protección Civil.',
    ],
subcategories: [
      { label: 'Evacuación y rutas de salida',
        desc: 'Flechas de dirección, señales de salida, punto de reunión y rutas de evacuación. Materiales PVC, acrílico y fotoluminiscente. Visibilidad garantizada sin energía eléctrica.' },
      { label: 'Prohibición',
        desc: 'No fumar, no encender fuego, prohibido el paso, no usar celular. Fondo blanco con símbolo rojo. NOM-026-STPS Clase P.' },
      { label: 'Advertencia de riesgo',
        desc: 'Riesgo eléctrico, materiales inflamables, sustancias corrosivas, peligro de caída. Fondo amarillo con símbolo negro. NOM-026-STPS Clase A.' },
      { label: 'Obligación (uso de EPP)',
        desc: 'Uso obligatorio de casco, lentes, guantes, protección auditiva y más. Fondo azul con símbolo blanco. NOM-026-STPS Clase O.' },
      { label: 'Señales fotoluminiscentes',
        desc: 'Se cargan con luz ambiental y mantienen visibilidad hasta 90 minutos sin electricidad. Ideales para salidas de emergencia, escaleras y rutas de evacuación.' },
      { label: 'Señalización personalizada NOM',
        desc: 'Señales con texto o diseño específico para tu instalación, manteniendo colores, proporciones y materiales NOM. Para riesgos particulares no cubiertos por señales estándar.' },
    ],
    norms: [
      { code: 'NOM-003-SEGOB', name: 'Señales de emergencia',          desc: 'Establece las características de las señales y avisos para protección civil. Define formas, colores, símbolos y dimensiones.' },
      { code: 'NOM-026-STPS',  name: 'Colores y señales de seguridad', desc: 'Norma de la STPS que define los colores de identificación de riesgos, equipo y señales en centros de trabajo.' },
      { code: 'ISO 7010',      name: 'Símbolos gráficos internacionales', desc: 'Estándar internacional de pictogramas de seguridad. Compatibles con las normas NOM para facilitar instalaciones con operadores extranjeros.' },
    ],
    targets: [
      { label: 'Edificios de oficinas y corporativos',
        desc: 'Señalización completa de evacuación, rutas de salida, extintores y puntos de reunión. Expediente listo para Protección Civil.' },
      { label: 'Plantas industriales y bodegas',
        desc: 'Señales de prohibición, advertencia y EPP obligatorio según los riesgos de cada área: eléctrica, química, de almacenamiento, de producción.' },
      { label: 'Restaurantes y hoteles',
        desc: 'Señalización de evacuación fotoluminiscente para cumplir con inspecciones del IMSS, PC y normas de construcción comercial.' },
      { label: 'Desarrollos residenciales y condominios',
        desc: 'Señalización de rutas de evacuación, extintores y equipo de emergencia en pasillos, escaleras y estacionamientos.' },
      { label: 'Escuelas y hospitales',
        desc: 'Señalización especializada con pictogramas de alto contraste y materiales fotoluminiscentes para evacuación de personas con movilidad reducida.' },
    ],
    waMessage: 'Hola, necesito cotizar señalamientos de emergencia NOM para mi instalación. ¿Hacen levantamiento del inmueble?',
    faqItems: [
      { question: '¿Cuántos señalamientos necesita mi empresa?',
        answer: 'Depende del tamaño, distribución y tipo de riesgo de tu instalación. En Proyecto Red hacemos el levantamiento del inmueble sin costo: visitamos tu espacio, determinamos qué señales se necesitan y en qué ubicaciones, y te entregamos una cotización detallada con el plano de señalización.' },
      { question: '¿Qué diferencia hay entre señalamientos fotoluminiscentes y normales?',
        answer: 'Los señalamientos fotoluminiscentes se cargan con luz natural o artificial y mantienen visibilidad en la oscuridad durante 60 a 90 minutos. Son obligatorios en rutas de evacuación y salidas de emergencia en muchas instalaciones, ya que funcionan durante cortes de luz.' },
      { question: '¿Los señalamientos incluyen instalación?',
        answer: 'Sí, ofrecemos el servicio de instalación. Colocamos los señalamientos en las ubicaciones definidas en el levantamiento y entregamos el plano de señalización para tu expediente de Protección Civil.' },
      { question: '¿Hacen señalamientos personalizados con el nombre de mi empresa?',
        answer: 'Sí, podemos incorporar el logotipo o nombre de tu empresa en señales que lo permitan sin alterar los colores, proporciones y símbolos NOM requeridos.' },
    ],
    ctaTitle: '¿Necesitas señalamientos NOM para tu instalación?',
    ctaBody: 'Escríbenos con el tipo de instalación (oficinas, planta, restaurante) y el área aproximada. Agendamos el levantamiento del inmueble sin costo.',
  },

  // ────────────────────────────────────────────────────────────
  // GABINETES
  // ────────────────────────────────────────────────────────────
  'gabinetes': {
    badge: 'Acero · Resina · Todos los tamaños',
    heroTitle: 'Gabinetes y Porta',
    heroAccent: 'Extintores',
    heroSubtitle: 'Gabinetes para extintor, hidrante, manguera y bombero. Porta extintores de pared y pedestal para cualquier capacidad. Soluciones de resguardo y accesibilidad para edificios, plantas y espacios comerciales.',
    heroDescRight: [
      'El gabinete adecuado protege el extintor, facilita el acceso en una emergencia y cumple con los criterios de presentación que exigen las inspecciones de Protección Civil. En Proyecto Red manejamos gabinetes en acero galvanizado, laminado y resina para superficies interiores y exteriores, en todas las capacidades del catálogo.',
      'También suministramos gabinetes para hidrante con acceso a manguera y válvula, gabinetes para bombero con compartimentos de herraje, y soportes de pared con base de pedestal para áreas donde no es posible empotrar.',
    ],
subcategories: [
      { label: 'Gabinetes para extintor — empotrado',
        desc: 'Para extintor de 2.5 kg a 12 kg. Puerta de cristal o sólida, con cerradura o bisagra de apertura rápida. En acero laminado pintado o galvanizado.' },
      { label: 'Gabinetes para extintor — sobrepuesto',
        desc: 'Se instalan sobre la pared sin necesidad de nicho. Con puerta transparente o sólida. Ideales para remodelaciones sin obra.' },
      { label: 'Porta extintores de pared',
        desc: 'Soportes de horquilla o gancho para fijar extintores directamente a la pared. Disponibles para extintores de 1 a 12 kg. Instalación rápida.' },
      { label: 'Porta extintores de pedestal',
        desc: 'Base de piso con poste y soporte para áreas donde no hay pared cercana: almacenes, pasillos abiertos, talleres y estacionamientos.' },
      { label: 'Gabinetes para hidrante',
        desc: 'Alojan la válvula angular, manguera de 1½" o 2½" y chiflón. Acceso de emergencia con puerta de cristal. Conforme a NFPA 14.' },
      { label: 'Gabinetes para bombero',
        desc: 'Compartimentos múltiples para equipo de respuesta rápida: manguera, herramientas, ERA y equipo de protección personal. Para brigadas industriales.' },
    ],
    norms: [
      { code: 'NFPA 10',    name: 'Extintores portátiles',    desc: 'Define la altura de instalación (no más de 1.5 m al maneral) y visibilidad requerida para extintores. El gabinete debe cumplir estos requisitos.' },
      { code: 'NFPA 14',    name: 'Sistemas de tuberías verticales', desc: 'Establece los requisitos para gabinetes de manguera en sistemas de hidrante interior.' },
      { code: 'NOM-002-STPS', name: 'Prevención y protección CI', desc: 'Define que los extintores deben estar accesibles, señalizados y correctamente montados en su soporte o gabinete.' },
    ],
    targets: [
      { label: 'Edificios corporativos y de oficinas',
        desc: 'Gabinetes empotrados con puerta de vidrio para resguardar extintores manteniendo la estética del espacio.' },
      { label: 'Plantas industriales y bodegas',
        desc: 'Porta extintores de pedestal en áreas sin pared y gabinetes de acero galvanizado resistentes a ambientes húmedos o corrosivos.' },
      { label: 'Restaurantes, hoteles y centros comerciales',
        desc: 'Gabinetes sobrepuestos de resina blanca para instalaciones sin obra. Presentación limpia, compatible con interiores comerciales.' },
      { label: 'Estacionamientos y áreas exteriores',
        desc: 'Porta extintores de pedestal con base pesa y estructura galvanizada para resistir intemperie y tráfico de vehículos.' },
    ],
    waMessage: 'Hola, necesito cotizar gabinetes o porta extintores. ¿Pueden asesorarme sobre el tipo correcto para mi instalación?',
    faqItems: [
      { question: '¿A qué altura debo instalar el extintor y el gabinete?',
        answer: 'La NOM-002-STPS y la NFPA 10 establecen que el maneral del extintor debe quedar a no más de 1.5 metros del piso para extintores de hasta 18 kg. Para extintores más pesados, el límite es 1 metro. El gabinete debe instalarse respetando esta altura.' },
      { question: '¿Qué tipo de gabinete necesito si no puedo hacer obra?',
        answer: 'Para instalaciones sin posibilidad de nicho, recomendamos gabinetes sobrepuestos de resina o acero que se anclan directamente a la pared con taquetes. Se instalan en menos de 30 minutos sin obra.' },
      { question: '¿Los gabinetes para hidrante incluyen manguera y válvula?',
        answer: 'El gabinete y la manguera se pueden cotizar por separado o como conjunto completo (gabinete + manguera + chiflón + válvula). Cuéntanos qué necesitas y te cotizamos de la forma que te resulte más conveniente.' },
    ],
    ctaTitle: '¿Necesitas gabinetes o porta extintores?',
    ctaBody: 'Cuéntanos el tipo de extintor, la cantidad de equipos y el tipo de instalación. Te recomendamos el gabinete correcto y el precio con entrega.',
  },

  // ────────────────────────────────────────────────────────────
  // MANGUERAS Y HERRAJES
  // ────────────────────────────────────────────────────────────
  'mangueras': {
    badge: 'NFPA 14 · Elkhart Brass',
    heroTitle: 'Mangueras y Herrajes',
    heroAccent: 'Contra Incendio',
    heroSubtitle: 'Mangueras para hidrante, chiflones, válvulas angulares, adaptadores, tomas siamesas y monitores. Distribuidor autorizado Elkhart Brass. Todo para tu red hidráulica contra incendio conforme a NFPA 14.',
    heroDescRight: [
      'Una red hidráulica contra incendio requiere componentes certificados y compatibles entre sí. En Proyecto Red suministramos el sistema completo: mangueras para hidrante en diámetros 1½" y 2½", chiflones de ataque, válvulas angulares y de compuerta, adaptadores de acoplamiento, tomas siamesas y carretes de manguera.',
      'Somos distribuidores autorizados de Elkhart Brass, fabricante líder de monitores y herrajes para sistemas hidráulicos profesionales. Esto nos permite suministrar tanto componentes de reemplazo como sistemas nuevos para edificios, plantas industriales y equipos de bomberos.',
    ],
subcategories: [
      { label: 'Mangueras para hidrante 1½" y 2½"',
        desc: 'Mangueras de ataque y de tendido en diámetros estándar NFPA. Cubierta de poliéster tejido, forro interior de EPDM, acoplamientos de aluminio o bronce. Presiones de operación hasta 250 PSI.' },
      { label: 'Chiflones y boquillas de ataque',
        desc: 'Chiflones de niebla (fog), combate (TFT) y de chorro sólido. Flujo regulable, palanca de control y materiales de aluminio o resina de alta resistencia.' },
      { label: 'Válvulas angulares y de compuerta',
        desc: 'Válvulas para conexión en gabinetes de hidrante. Bronce o aluminio. Diámetros 1½" y 2½". Conforme a NFPA 14 para sistemas de tuberías verticales.' },
      { label: 'Adaptadores, acoplamientos y llaves',
        desc: 'Reducidores, adaptadores tipo Storz, Camlock y NST. Llaves para manguera y chiflón. Materiales de aluminio o bronce para resistencia y bajo peso.' },
      { label: 'Tomas siamesas y conexiones de departamento',
        desc: 'Tomas siamesas de fachada para conexión de camiones cisterna. Conexiones de departamento (FDC) para sistemas de rociadores. Tapones, cadenas y señalización incluidos.' },
      { label: 'Monitores contra incendio Elkhart Brass',
        desc: 'Monitores portátiles y fijos para operaciones de gran caudal. Serie Stinger, The Blitz y Monsoon. Flujos desde 250 hasta 2,000 GPM. Para cuerpos de bomberos y plantas industriales.' },
      { label: 'Carretes y devanadores de manguera',
        desc: 'Carretes de piso y pared para almacenamiento compacto de manguera. Devanadores automáticos para instalaciones permanentes en plantas y bodegas.' },
    ],
    norms: [
      { code: 'NFPA 14',    name: 'Sistemas de tuberías verticales y mangueras', desc: 'Establece los requisitos para diseño, instalación e inspección de sistemas de hidrante interior con manguera de 1½" y 2½".' },
      { code: 'NFPA 1961',  name: 'Mangueras de ataque',         desc: 'Estándar para pruebas de presión, resistencia y vida útil de mangueras utilizadas en operaciones de combate de incendios.' },
      { code: 'UL 668',     name: 'Mangueras de servicios',      desc: 'Certificación de Underwriters Laboratories para mangueras usadas en sistemas de supresión de incendios.' },
    ],
    targets: [
      { label: 'Edificios con sistema de hidrante interior',
        desc: 'Mangueras, chiflones y válvulas para gabinetes de hidrante. Reposición de componentes dañados o caducados.' },
      { label: 'Cuerpos de bomberos y PC',
        desc: 'Mangueras de ataque 1½" y 2½", chiflones TFT, monitores Elkhart Brass y herrajes para camiones cisterna.' },
      { label: 'Plantas industriales con brigada propia',
        desc: 'Sistemas hidráulicos de primera respuesta: gabinetes de manguera, válvulas y chiflones para intervención rápida.' },
      { label: 'Contratistas de sistemas CI',
        desc: 'Suministro de componentes certificados para instalación de sistemas NFPA 14 en proyectos nuevos y remodelaciones.' },
    ],
    waMessage: 'Hola, necesito cotizar mangueras y herrajes para sistema de hidrante. ¿Pueden asesorarme?',
    faqItems: [
      { question: '¿Cuál es la diferencia entre manguera 1½" y 2½"?',
        answer: 'La manguera de 1½" (clase II) es para uso por el personal del edificio en conato de incendio. La de 2½" (clase I) es para uso exclusivo de bomberos profesionales por su mayor caudal y presión. Muchos sistemas clase III incluyen ambas tomas en el mismo gabinete.' },
      { question: '¿Son distribuidores de Elkhart Brass?',
        answer: 'Sí, somos distribuidores autorizados de Elkhart Brass en México. Manejamos su línea completa de monitores, boquillas y herrajes para cuerpos de bomberos y aplicaciones industriales.' },
      { question: '¿Con qué frecuencia se debe cambiar la manguera de un hidrante?',
        answer: 'La NFPA 1962 recomienda prueba hidrostática anual y reemplazo cuando la manguera presente daños en el forro, el tejido o los acoplamientos. En condiciones normales, la vida útil es de 10 a 15 años con mantenimiento adecuado.' },
      { question: '¿Pueden suministrar los componentes para un sistema nuevo de NFPA 14?',
        answer: 'Sí. Suministramos todos los componentes del gabinete de manguera: la válvula, la manguera, el chiflón, el gabinete y la señalización. Para proyectos nuevos también cotizamos tomas siamesas, FDC y el sistema completo de herraje.' },
    ],
    ctaTitle: '¿Necesitas mangueras o herrajes para tu sistema hidráulico?',
    ctaBody: 'Escríbenos con el diámetro requerido, la cantidad y el tipo de sistema (hidrante interior, camión bomba, brigada). Te cotizamos de inmediato.',
  },

  // ────────────────────────────────────────────────────────────
  // SISTEMAS CONTRA INCENDIO
  // ────────────────────────────────────────────────────────────
  'sistemas': {
    badge: 'NFPA 13 · NFPA 72 · NFPA 20',
    heroTitle: 'Sistemas Contra',
    heroAccent: 'Incendio',
    heroSubtitle: 'Detección, alarma y supresión: detectores de humo y calor, rociadores automáticos NFPA 13, tableros FACP y controladores de bomba NFPA 20. Instalación llave en mano para edificios, plantas y complejos comerciales.',
    heroDescRight: [
      'Un sistema contra incendio integra tres funciones: detectar el incendio, alertar a los ocupantes y suprimirlo automáticamente. En Proyecto Red suministramos e instalamos los tres componentes: detección (detectores y tablero FACP), alarma (sirenas y luces de emergencia) y supresión (rociadores automáticos o gas).',
      'Todos nuestros sistemas cumplen con NFPA 13 (rociadores), NFPA 72 (detección y alarma) y NFPA 20 (control de bombas). Ofrecemos instalación llave en mano: diseño, suministro, instalación, comisionamiento y documentación para Protección Civil.',
    ],
subcategories: [
      { label: 'Detectores de humo y calor',
        desc: 'Detectores iónicos y fotoeléctricos para humo. Detectores de temperatura fija y de tasa de incremento para calor. Compatibles con tableros FACP de los principales fabricantes.' },
      { label: 'Alarmas, sirenas y luces de emergencia',
        desc: 'Sirenas de 85-120 dB, strobes, luces de notificación y paneles de zona para alertar a todos los ocupantes del edificio conforme a NFPA 72.' },
      { label: 'Rociadores automáticos (sprinklers)',
        desc: 'Rociadores colgantes, verticales y laterales para sistemas húmedos y secos. Temperatura de activación 57°C a 141°C. Certificados UL/FM conforme a NFPA 13.' },
      { label: 'Tableros FACP — control y monitoreo',
        desc: 'Paneles de alarma contra incendio (FACP) con capacidad desde 2 zonas hasta sistemas de red multipanel. Compatibles con dispositivos analógicos y convencionales.' },
      { label: 'Controladores de bomba NFPA 20',
        desc: 'Controladores eléctricos y diesel para bombas de incendio. Conformes a NFPA 20. Incluyen panel de test automático, supervisión de presión y registro de eventos.' },
      { label: 'Monitoreo remoto y supervisión 24/7',
        desc: 'Módulos de comunicación para supervisión remota del sistema. Integración con centrales de monitoreo. Notificaciones por SMS y app para administradores del edificio.' },
    ],
    norms: [
      { code: 'NFPA 13',    name: 'Rociadores automáticos',     desc: 'Estándar para instalación de sistemas de rociadores automáticos. Define diseño hidráulico, densidades y áreas de cobertura.' },
      { code: 'NFPA 72',    name: 'Código Nacional de Alarmas de Incendio', desc: 'Establece los requisitos para sistemas de detección, alarma, comunicación y notificación de emergencias.' },
      { code: 'NFPA 20',    name: 'Instalación de bombas estacionarias', desc: 'Define los requisitos para bombas de incendio, controladores y arranque de emergencia en sistemas hidráulicos.' },
      { code: 'NOM-002-STPS', name: 'Prevención y protección CI', desc: 'Norma mexicana que integra los requisitos de sistemas de detección y supresión para centros de trabajo.' },
    ],
    targets: [
      { label: 'Edificios de oficinas y corporativos',
        desc: 'Sistemas de detección FACP con múltiples zonas, rociadores y alarmas de notificación conforme a NFPA 13 y 72.' },
      { label: 'Plantas industriales y bodegas',
        desc: 'Sistemas de rociadores de alta densidad para almacenamiento de racks. Detectores de humo de aspiración para ambientes con polvo o vapor.' },
      { label: 'Centros comerciales y hoteles',
        desc: 'Sistemas integrados de detección, alarma y rociadores con requerimientos de zoning por áreas: cocina, lobby, habitaciones, estacionamiento.' },
      { label: 'Desarrollos residenciales',
        desc: 'Sistemas NFPA 13R para residencias y edificios de hasta 4 pisos. Diseño simplificado, menor costo y cumplimiento regulatorio.' },
    ],
    waMessage: 'Hola, necesito información sobre sistemas contra incendio (detección, alarma o rociadores). ¿Hacen diseño e instalación llave en mano?',
    faqItems: [
      { question: '¿Cuánto cuesta instalar un sistema de rociadores en un edificio?',
        answer: 'El costo depende del área, el número de pisos, el uso del edificio y la densidad de rociadores requerida por NFPA 13. Para darte un precio exacto necesitamos los planos del edificio. Contáctanos para una visita técnica sin costo.' },
      { question: '¿La instalación incluye los permisos y documentación para Protección Civil?',
        answer: 'Sí. Nuestra instalación llave en mano incluye el diseño de ingeniería, los planos, la memoria de cálculo hidráulico, el comisionamiento del sistema y la documentación requerida para el trámite ante Protección Civil.' },
      { question: '¿Cuánto tiempo tarda la instalación de un sistema de detección y alarma?',
        answer: 'Para una oficina mediana (500-1,000 m²): 2 a 3 días hábiles. Para una planta industrial o un edificio de varios pisos: 1 a 4 semanas dependiendo de la complejidad. Te damos un cronograma exacto en la cotización.' },
      { question: '¿Los tableros FACP que manejan son compatibles con detectores de otras marcas?',
        answer: 'Manejamos tableros de varios fabricantes con compatibilidad para dispositivos analógicos y convencionales. Cuéntanos qué detectores tienes instalados y verificamos la compatibilidad antes de cotizar.' },
    ],
    ctaTitle: '¿Necesitas un sistema contra incendio para tu edificio o planta?',
    ctaBody: 'Comparte el área, número de pisos y uso del inmueble. Agendamos una visita técnica sin costo para diseñar el sistema correcto.',
  },

  // ────────────────────────────────────────────────────────────
  // PRIMEROS AUXILIOS
  // ────────────────────────────────────────────────────────────
  'primeros-auxilios': {
    badge: 'NOM-005-STPS · NOM-009-STPS',
    heroTitle: 'Equipo de',
    heroAccent: 'Primeros Auxilios',
    heroSubtitle: 'Botiquines certificados STPS, camillas rígidas y de cuchara, collarines cervicales, material de curación y equipo de reanimación. Todo para cumplir con la NOM-005-STPS en cualquier inspección laboral.',
    heroDescRight: [
      'La NOM-005-STPS exige que todo centro de trabajo cuente con botiquines de primeros auxilios adecuados al número de trabajadores y al tipo de riesgo de la actividad. En Proyecto Red suministramos botiquines tipo A (hasta 20 trabajadores) y tipo B (hasta 100 trabajadores), además de equipo avanzado para brigadas.',
      'Complementamos los botiquines con camillas de emergencia, collarines cervicales, equipo de reanimación básico y oxígeno portátil. Todo con ficha técnica y documentación lista para tu expediente ante la STPS.',
    ],
subcategories: [
      { label: 'Botiquines STPS tipo A',
        desc: 'Para centros de trabajo con hasta 20 trabajadores o riesgo bajo. Contenido mínimo NOM-005-STPS: vendas, gasas, agua oxigenada, alcohol, esparadrapo y manual de primeros auxilios.' },
      { label: 'Botiquines STPS tipo B',
        desc: 'Para centros de trabajo con 21 a 100 trabajadores o riesgo alto. Contenido ampliado: torniquete, férulas, collar cervical, vendas elásticas y mascarilla para reanimación.' },
      { label: 'Camillas rígidas de emergencia',
        desc: 'Camillas de madera o polietileno para inmovilización de columna. Con correas de fijación de 3 a 5 puntos. Resistencia mínima de 150 kg. Para traslado de víctimas con posible lesión espinal.' },
      { label: 'Camillas de cuchara (tijera)',
        desc: 'Dos piezas separables que se deslizan bajo el paciente sin necesidad de voltear el cuerpo. Aluminio ligero, longitud ajustable. Para rescate en espacios reducidos.' },
      { label: 'Collarines cervicales',
        desc: 'Collarines rígidos de polietileno en tallas S, M, L y XL para inmovilización cervical. Compatibles con camillas de espina.' },
      { label: 'Equipo de reanimación básico',
        desc: 'Mascarillas para RCP con válvula unidireccional, bolsas AMBU para ventilación manual, DEA (desfibriladores externos automáticos) y equipos de oxígeno de emergencia.' },
      { label: 'Oxígeno de emergencia portátil',
        desc: 'Cilindros de oxígeno medicinal portátiles de 0.5 a 2 litros con manómetro, regulador y mascarilla. Para primeros respondedores y brigadas de emergencia.' },
    ],
    norms: [
      { code: 'NOM-005-STPS', name: 'Manejo, transporte y almacenamiento de sustancias — primeros auxilios', desc: 'Establece las condiciones de seguridad para la atención de emergencias en centros de trabajo, incluyendo el contenido mínimo de botiquines.' },
      { code: 'NOM-009-STPS', name: 'Trabajos en altura',           desc: 'Para brigadas con actividades en altura: define el equipo de primeros auxilios adicional requerido.' },
      { code: 'NOM-006-STPS', name: 'Manejo y almacenamiento de materiales', desc: 'Complementa los requisitos de primeros auxilios para centros de trabajo con manejo manual de cargas y materiales.' },
    ],
    targets: [
      { label: 'Oficinas y centros de trabajo en general',
        desc: 'Botiquines tipo A o B según el número de trabajadores. Obligatorios en cualquier centro de trabajo conforme a la NOM-005-STPS.' },
      { label: 'Plantas industriales y manufactura',
        desc: 'Botiquines tipo B o superiores, camillas y collarines para áreas con riesgo de lesiones por maquinaria, materiales o alturas.' },
      { label: 'Construcción y obras civiles',
        desc: 'Botiquines con equipo para heridas, quemaduras y lesiones músculo-esqueléticas. Camillas y collarines para accidentes con caída.' },
      { label: 'Brigadas de emergencia',
        desc: 'Equipos de reanimación, oxígeno portátil y camillas de cuchara para brigadas de respuesta interna con formación en primeros auxilios.' },
    ],
    waMessage: 'Hola, necesito cotizar botiquines y equipo de primeros auxilios STPS para mi empresa. ¿Pueden asesorarme?',
    faqItems: [
      { question: '¿Qué tipo de botiquín exige la STPS para mi empresa?',
        answer: 'La NOM-005-STPS define dos tipos. El tipo A es para hasta 20 trabajadores o riesgo bajo. El tipo B es para 21 a 100 trabajadores o riesgo alto (industria, construcción, manejo de sustancias). Para más de 100 trabajadores o riesgos especiales, la norma establece contenidos adicionales. Escríbenos con el número de trabajadores y el tipo de actividad para decirte exactamente qué necesitas.' },
      { question: '¿Los botiquines incluyen toda la documentación para STPS?',
        answer: 'Sí. Cada botiquín incluye lista de contenido, instrucciones de uso y documentación del cumplimiento con NOM-005-STPS para integrar a tu expediente ante la STPS.' },
      { question: '¿También dan capacitación en primeros auxilios?',
        answer: 'Sí. Impartimos cursos de primeros auxilios para brigadas de emergencia con constancias DC-3 válidas ante la STPS. Cubrimos RCP, manejo de heridas, control de hemorragias e inmovilización de columna.' },
      { question: '¿Venden DEA (desfibriladores) para empresas?',
        answer: 'Sí, manejamos DEA portátiles de uso para laicos (sin entrenamiento médico previo). Son obligatorios en ciertas instalaciones según las normas de la STPS y la Secretaría de Salud. Te asesoramos sobre el modelo más adecuado para tu instalación.' },
    ],
    ctaTitle: '¿Necesitas botiquines y equipo de primeros auxilios para tu empresa?',
    ctaBody: 'Escríbenos con el número de trabajadores y el tipo de actividad. Te indicamos exactamente qué exige la STPS y te cotizamos el contenido completo.',
  },

  // ────────────────────────────────────────────────────────────
  // EQUIPO DE SEGURIDAD INDUSTRIAL
  // ────────────────────────────────────────────────────────────
  'equipo-seguridad': {
    badge: 'NOM-017-STPS · ANSI · EN',
    heroTitle: 'Equipo de Seguridad',
    heroAccent: 'Industrial (EPP)',
    heroSubtitle: 'EPP certificado para protección craneal, visual, auditiva, respiratoria, de manos, pies y para trabajo en alturas. Cumplimiento con NOM-017-STPS-2008 y estándares internacionales ANSI y EN.',
    heroDescRight: [
      'El Equipo de Protección Personal (EPP) es la última barrera de seguridad entre el trabajador y el riesgo. En Proyecto Red manejamos EPP certificado para todos los niveles de protección exigidos por la NOM-017-STPS-2008: craneal, visual, auditiva, respiratoria, de extremidades y para trabajos en altura.',
      'Cada elemento de EPP que suministramos cumple con al menos una norma de referencia: NOM mexicana, estándar ANSI americano o norma EN europea. Ideal para empresas que exportan o tienen auditorías de clientes extranjeros con requerimientos específicos de certificación.',
    ],
subcategories: [
      { label: 'Protección craneal — cascos y gorras',
        desc: 'Cascos de seguridad tipo I y II, Clase E y G. Dieléctricos y no dieléctricos. En polietileno y fibra de vidrio. Compatibles con aditamentos como protección facial y auditiva.' },
      { label: 'Protección visual — lentes y caretas',
        desc: 'Lentes de seguridad, gafas de copa y caretas faciales. Para impacto, radiación UV, salpicaduras químicas y soldadura. Certificados ANSI Z87.1 y NOM-106-STPS.' },
      { label: 'Protección auditiva — tapones y orejeras',
        desc: 'Tapones desechables de espuma con NRR hasta 33 dB. Tapones reutilizables con cordón. Orejeras sobre casco y de diadema. Para niveles de ruido de 85 a 130 dB.' },
      { label: 'Protección respiratoria — mascarillas y filtros',
        desc: 'Mascarillas desechables N95 y KN95. Semi-máscaras con filtros intercambiables P100, OV/P100 y ácido. Equipos de respiración autónoma (ERA) para atmósferas IDLH.' },
      { label: 'Protección de manos — guantes industriales',
        desc: 'Guantes de látex, nitrilo, neopreno, cuero y anticorte. Para manejo de químicos, electricidad, calor, corte y uso general. Certificados EN 388, EN 374 y EN 407.' },
      { label: 'Protección de pies — calzado de seguridad',
        desc: 'Botas y zapatos con punta de acero o composite, suela antiderrapante y resistente a perforación. Para industria en general, construcción y áreas húmedas.' },
      { label: 'Trabajo en alturas — arneses y líneas de vida',
        desc: 'Arneses de cuerpo completo, líneas de vida con absorvedor de impacto, bloqueadores de cuerda y anclajes. Certificados ANSI Z359 y NOM-009-STPS para trabajos a más de 1.8 m.' },
    ],
    norms: [
      { code: 'NOM-017-STPS', name: 'EPP — Selección y uso',             desc: 'Establece los requisitos para la selección, uso, mantenimiento y disposición del equipo de protección personal en centros de trabajo.' },
      { code: 'NOM-009-STPS', name: 'Trabajos en altura',                desc: 'Define los requisitos de seguridad para trabajos en altura, incluyendo el sistema de protección anticaída y el EPP requerido.' },
      { code: 'ANSI Z87.1',   name: 'Protección visual',                 desc: 'Estándar americano para lentes y protectores faciales. Requerido frecuentemente por clientes y auditorías de exportación.' },
      { code: 'ANSI Z359',    name: 'Protección anticaída',              desc: 'Serie de estándares para equipos de protección contra caídas: arneses, líneas de vida, bloqueadores y sistemas de rescate.' },
      { code: 'EN 388 / EN 374', name: 'Guantes de protección',         desc: 'Normas europeas para protección contra riesgos mecánicos y químicos en guantes industriales.' },
    ],
    targets: [
      { label: 'Manufactura e industria en general',
        desc: 'EPP completo por puesto de trabajo: casco, lentes, tapones, guantes y calzado de seguridad. Cumplimiento NOM-017-STPS para auditorías STPS e IMSS.' },
      { label: 'Construcción y obra civil',
        desc: 'Cascos tipo II, lentes, tapones, arneses anticaída y calzado dieléctrico. Para obra en altura, excavación y trabajo eléctrico.' },
      { label: 'Industria química y farmacéutica',
        desc: 'Guantes de nitrilo o neopreno, respiradores con filtro OV, lentes de copa sellados y trajes de protección química.' },
      { label: 'Plantas de exportación y maquiladoras',
        desc: 'EPP con certificación ANSI y EN para cumplir con requerimientos de clientes extranjeros y auditorías de calidad ISO.' },
    ],
    waMessage: 'Hola, necesito cotizar EPP certificado para mi empresa (casco, lentes, guantes, etc.). ¿Pueden asesorarme por puesto de trabajo?',
    faqItems: [
      { question: '¿Cómo sé qué EPP necesita cada puesto de trabajo en mi empresa?',
        answer: 'La NOM-017-STPS exige realizar un estudio de identificación de peligros por puesto de trabajo para definir el EPP correcto. En Proyecto Red te ayudamos con esa evaluación sin costo: listamos los riesgos por área y te recomendamos el EPP certificado para cada uno.' },
      { question: '¿El EPP que manejan está certificado para auditorías de exportación?',
        answer: 'Sí. Manejamos EPP con certificaciones ANSI, EN y NOM según el tipo de equipo. Para clientes que requieren certificación específica (por ejemplo ANSI Z87.1 para lentes o EN 388 para guantes), confirmamos la certificación antes de la cotización.' },
      { question: '¿Ofrecen dotación completa por trabajador?',
        answer: 'Sí. Podemos armar una dotación completa por puesto de trabajo: casco, lentes, tapones, guantes, calzado y lo que aplique. Ideal para nuevas contrataciones o reposición masiva.' },
      { question: '¿Venden arneses para trabajo en altura?',
        answer: 'Sí. Manejamos arneses de cuerpo completo, líneas de vida con absorbedor de impacto, bloqueadores de cuerda y puntos de anclaje certificados ANSI Z359 y NOM-009-STPS. También impartimos capacitación en trabajo en alturas con constancia DC-3.' },
    ],
    ctaTitle: '¿Necesitas EPP certificado para tu empresa?',
    ctaBody: 'Escríbenos con el tipo de industria y los puestos de trabajo. Te armamos la dotación por área con el EPP correcto según NOM-017-STPS.',
  },

}
