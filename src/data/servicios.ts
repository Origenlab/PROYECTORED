// ============================================================
// src/data/servicios.ts
// Datos completos para las 8 páginas L2 de servicios
// Fuente de verdad para src/pages/servicios/[servicio].astro
// ============================================================

export interface DetalleServicio {
  nombre: string
  sub: string
  href?: string         // Link interno opcional (a categoría / producto)
}

export interface FAQServicio {
  question: string
  answer: string
}

export interface NormaServicio {
  codigo: string         // Ej. "NOM-154-SCFI"
  nombre: string         // Ej. "Extintores contra incendio a base de polvos químicos secos"
  aplica: string         // Cómo aplica al servicio
}

export interface ServicioData {
  // SEO & meta
  metaTitle: string
  metaDesc: string

  // Hero
  badge: string
  heroTitle: string         // ej. "Recarga de"
  heroAccent: string        // ej. "Extintores" (resaltado)
  heroSubtitle: string      // descripción corta
  heroBodyPara: string      // párrafo descriptivo principal

  // Imagen principal
  img: string

  // Sección 1 — Detalles / qué incluye
  detallesEyebrow: string
  detallesTitleLine1: string
  detallesTitleLine2: string
  detallesDesc: string
  detalles: DetalleServicio[]

  // Sección 2 — Normas
  normasEyebrow: string
  normasTitleLine1: string
  normasTitleLine2: string
  normasDesc: string
  normas: NormaServicio[]

  // FAQ
  faqEyebrow: string
  faqTitleLine1: string
  faqTitleLine2: string
  faqItems: FAQServicio[]

  // CTA / WhatsApp
  waMessage: string
  ctaTitle: string
  ctaBody: string
}

// ============================================================
// Slugs de todos los servicios
// ============================================================
export const SERVICIO_PRODUCTS = [
  { slug: 'venta-equipos',           label: 'Venta de Equipos',          badge: 'Catálogo completo'   },
  { slug: 'recarga-extintores',      label: 'Recarga de Extintores',     badge: 'NOM-154-SCFI'        },
  { slug: 'mantenimiento-preventivo', label: 'Mantenimiento Preventivo', badge: 'Pólizas anuales'    },
  { slug: 'instalacion-sistemas',    label: 'Instalación Sistemas CI',   badge: 'NFPA 13/72'          },
  { slug: 'prueba-hidrostatica',     label: 'Prueba Hidrostática',       badge: 'NOM-154 cada 5 años' },
  { slug: 'asesoria-tecnica',        label: 'Asesoría Técnica',          badge: 'Sin costo'           },
  { slug: 'capacitacion',            label: 'Capacitación y Brigadas',   badge: 'Constancias DC-3'    },
  { slug: 'senalizacion',            label: 'Señalización NOM',          badge: 'NOM-003-SEGOB'       },
] as const

// ============================================================
// Páginas de servicio (datos completos)
// ============================================================
export const SERVICIO_PAGES: Record<string, ServicioData> = {

  // ──────────────────────────────────────────
  // 1. VENTA DE EQUIPOS
  // ──────────────────────────────────────────
  'venta-equipos': {
    metaTitle: 'Venta de Equipos Contra Incendios en CDMX | Proveedor Directo NOM y NFPA',
    metaDesc: 'Proveedor directo de equipos contra incendios certificados NOM y NFPA en CDMX y Estado de México. Más de 50 productos: extintores, señalamientos, gabinetes, EPP. Entrega rápida y factura electrónica.',
    badge: 'Catálogo completo',
    heroTitle: 'Venta de Equipos',
    heroAccent: 'Contra Incendios',
    heroSubtitle: 'Más de 50 productos certificados NOM y NFPA para empresas, plantas y edificios en CDMX.',
    heroBodyPara: 'Proveedor directo de extintores de todos los tipos, señalamientos fotoluminiscentes, equipo para bomberos, gabinetes, mangueras, sistemas de detección y EPP. Sin intermediarios — mejores precios y tiempos de entrega que cualquier distribuidor. Cada producto incluye documentación para tu expediente de Protección Civil y STPS.',
    img: '/imagenes/servicios/venta-equipo-contra-incendio-certificado-cdmx.avif',
    detallesEyebrow: 'Líneas de producto',
    detallesTitleLine1: 'Lo que',
    detallesTitleLine2: 'manejamos',
    detallesDesc: 'Catálogo completo bajo un mismo proveedor — desde extintores hasta sistemas integrados.',
    detalles: [
      { nombre: 'Extintores certificados NOM-154', sub: 'Más de 10 tipos disponibles: PQS, CO₂, AFFF, Tipo K, agente limpio y Cold Fire — con ficha técnica y certificado incluidos', href: '/extintores/' },
      { nombre: 'Señalamientos fotoluminiscentes', sub: 'Visibles sin electricidad, fabricados conforme a NOM-003-SEGOB y NOM-026-STPS para rutas de evacuación y zonas de riesgo', href: '/senalamientos/' },
      { nombre: 'Equipo profesional para bomberos', sub: 'Trajes estructurales NFPA 1971, equipos de respiración autónoma y herramientas de rescate hidráulico certificadas', href: '/equipo-bomberos/' },
      { nombre: 'Gabinetes contra incendio', sub: 'Gabinetes para extintor, hidrante y bombero en acero al carbón — acceso rápido en emergencias conforme a normativa vigente', href: '/gabinetes/' },
      { nombre: 'Mangueras y accesorios hidráulicos', sub: 'Chiflones, válvulas angulares, carretes, tomas siamesas y monitores Elkhart Brass para redes contra incendio', href: '/mangueras/' },
      { nombre: 'Sistemas de detección y supresión', sub: 'Alarmas NFPA 72, detectores de humo, rociadores automáticos y tableros de control con monitoreo remoto', href: '/sistemas/' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Normas que',
    normasTitleLine2: 'cumplimos',
    normasDesc: 'Cada equipo viene con la documentación regulatoria que tu expediente requiere.',
    normas: [
      { codigo: 'NOM-154-SCFI', nombre: 'Extintores contra incendio', aplica: 'Marcado, etiquetado y características de los extintores que comercializamos' },
      { codigo: 'NOM-003-SEGOB', nombre: 'Señales y avisos para Protección Civil', aplica: 'Diseño, color y dimensiones de toda la señalización que vendemos' },
      { codigo: 'NOM-026-STPS',  nombre: 'Colores y señales de seguridad e higiene', aplica: 'Identificación de tuberías, riesgos y emergencias en industria' },
      { codigo: 'NFPA 1971',    nombre: 'Trajes estructurales para bomberos', aplica: 'Equipo de bomberos profesional con certificación de origen' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'compra',
    faqItems: [
      { question: '¿Tienen entrega el mismo día en CDMX?', answer: 'Sí. Para pedidos confirmados antes de las 12:00 hrs en CDMX y zona conurbada del Estado de México coordinamos entrega el mismo día. Productos en stock se despachan en menos de 4 horas con orden de compra firmada.' },
      { question: '¿Manejan crédito a 30 días para empresas?', answer: 'Sí. Ofrecemos crédito a 30 días para empresas con relación comercial establecida y facturación electrónica. Para primera compra solicitamos pago contra entrega; a partir del segundo pedido se evalúa línea de crédito según volumen y giro.' },
      { question: '¿Emiten factura electrónica con todos los datos fiscales?', answer: 'Sí. Emitimos factura electrónica CFDI 4.0 con todos los datos fiscales requeridos por el SAT, incluyendo método y forma de pago, uso CFDI y régimen fiscal. La factura se envía por correo en menos de 24 horas tras confirmación de pago.' },
      { question: '¿Los productos incluyen certificado y garantía?', answer: 'Sí. Cada producto incluye ficha técnica, certificado de cumplimiento NOM o NFPA cuando aplica, y garantía del fabricante. Documentación lista para integrar a tu expediente de Protección Civil y STPS sin observaciones.' },
    ],
    waMessage: 'Hola, quiero cotizar equipos contra incendio del catálogo. ¿Me ayudan con precios y disponibilidad?',
    ctaTitle: '¿Necesitas equipo contra incendio para tu empresa?',
    ctaBody: 'Cotización en menos de 24 horas con factura electrónica y entrega en CDMX y Estado de México.',
  },

  // ──────────────────────────────────────────
  // 2. RECARGA DE EXTINTORES
  // ──────────────────────────────────────────
  'recarga-extintores': {
    metaTitle: 'Recarga de Extintores en CDMX | Servicio NOM-154-SCFI con Certificado',
    metaDesc: 'Recarga certificada de extintores PQS, CO₂, AFFF, Tipo K y agente limpio en CDMX y Estado de México. Servicio a domicilio con collar de garantía NOM-154-SCFI y préstamo durante el proceso.',
    badge: 'NOM-154-SCFI',
    heroTitle: 'Recarga de',
    heroAccent: 'Extintores',
    heroSubtitle: 'Recarga certificada con agentes de alta calidad para todos los tipos de extintor.',
    heroBodyPara: 'Servicio a domicilio en CDMX y Estado de México. Incluye inspección completa del equipo, prueba de presión, reemplazo de sellos y collar de garantía. Préstamo de extintores durante el proceso para que tu empresa nunca esté sin protección — la recarga cumple con NOM-154-SCFI y la documentación es aceptada por Protección Civil sin observaciones.',
    img: '/imagenes/servicios/recarga-extintores-nom-154-servicio-domicilio.avif',
    detallesEyebrow: 'Tipos de recarga',
    detallesTitleLine1: 'Recargamos',
    detallesTitleLine2: 'todo agente',
    detallesDesc: 'Capacidad técnica para cualquier tipo de extintor — desde PQS estándar hasta agente limpio.',
    detalles: [
      { nombre: 'Recarga de extintor PQS / ABC',    sub: 'El agente más utilizado en México — ideal para oficinas, bodegas, comercios y vehículos con collar de garantía incluido', href: '/extintores/polvo-seco/' },
      { nombre: 'Recarga de extintor CO₂',          sub: 'Protección sin residuos para servidores, laboratorios y equipos electrónicos sensibles — no daña componentes', href: '/extintores/co2/' },
      { nombre: 'Recarga de extintor AFFF / Espuma', sub: 'Agente filmógeno para líquidos inflamables en talleres, gasolineras y plantas industriales', href: '/extintores/afff/' },
      { nombre: 'Recarga de extintor Tipo K',       sub: 'Formulado para aceites de cocina y freidoras — obligatorio en restaurantes y cocinas industriales por norma', href: '/extintores/tipo-k/' },
      { nombre: 'Recarga de extintor agente limpio', sub: 'Protección certificada para centros de datos, archivos históricos y salas con equipos de alto valor', href: '/extintores/agente-limpio/' },
      { nombre: 'Recarga de extintores automáticos', sub: 'Sistemas de activación autónoma que responden sin intervención humana — ideales para áreas desatendidas' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Recarga conforme',
    normasTitleLine2: 'a norma oficial',
    normasDesc: 'La NOM-154-SCFI es la única norma mexicana aplicable. Nuestros procesos cumplen al 100%.',
    normas: [
      { codigo: 'NOM-154-SCFI', nombre: 'Extintores contra incendio — Recarga y mantenimiento', aplica: 'Frecuencia anual, agentes autorizados, etiquetado y collar de garantía' },
      { codigo: 'NOM-002-STPS', nombre: 'Condiciones de seguridad en prevención de incendios', aplica: 'Determina la frecuencia y cantidad de extintores en centros de trabajo' },
      { codigo: 'NMX-S-066',    nombre: 'Selección y uso de extintores portátiles', aplica: 'Criterios técnicos para clasificación de fuegos y selección de agente' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'recarga',
    faqItems: [
      { question: '¿Cada cuánto debo recargar los extintores?', answer: 'La NOM-154-SCFI exige recarga anual o tras cualquier uso parcial o total del extintor. Adicionalmente, cada 5 años es obligatoria la prueba hidrostática del cilindro. En Proyecto Red programamos recordatorios automáticos para que nunca tengas equipo fuera de norma.' },
      { question: '¿La recarga incluye certificado y collar de garantía?', answer: 'Sí. Cada extintor recargado incluye etiqueta de servicio actualizada, collar de garantía y ficha técnica para tu expediente de Protección Civil. Documentación aceptada en inspecciones sin observaciones.' },
      { question: '¿Prestan extintores mientras recargan los míos?', answer: 'Sí. Ofrecemos préstamo de extintores PQS y CO₂ durante el proceso de recarga sin costo adicional. Tu empresa nunca queda desprotegida ni en riesgo de incumplimiento ante una inspección.' },
      { question: '¿Atienden empresas con flotas grandes?', answer: 'Sí. Manejamos recargas masivas con cronograma logístico para empresas con 50+ extintores. Coordinamos recolección por etapas y entrega documentada con bitácora individual por equipo.' },
    ],
    waMessage: 'Hola, necesito servicio de recarga de extintores. ¿Pueden darme precio y fecha?',
    ctaTitle: '¿Tus extintores están vencidos?',
    ctaBody: 'Recarga certificada con collar de garantía NOM-154 y préstamo de equipos durante el proceso.',
  },

  // ──────────────────────────────────────────
  // 3. MANTENIMIENTO PREVENTIVO
  // ──────────────────────────────────────────
  'mantenimiento-preventivo': {
    metaTitle: 'Mantenimiento Preventivo de Extintores | Pólizas Anuales en CDMX',
    metaDesc: 'Pólizas anuales de mantenimiento preventivo de extintores y sistemas contra incendio en CDMX. Inspección periódica, reportes técnicos y actualización de etiquetas para auditorías de Protección Civil.',
    badge: 'Pólizas anuales',
    heroTitle: 'Mantenimiento',
    heroAccent: 'Preventivo',
    heroSubtitle: 'Programa de inspección periódica para que tu equipo siempre esté listo para auditorías.',
    heroBodyPara: 'Revisión completa de presión, agente extintor, válvulas y manguera con reporte técnico documentado. Pólizas anuales con precio preferencial, frecuencia adaptada a tu tipo de instalación y actualización de etiquetas y bitácoras. Detectamos fallas antes de que se conviertan en observaciones durante una inspección de Protección Civil.',
    img: '/imagenes/servicios/mantenimiento-preventivo-extintores-poliza-anual.avif',
    detallesEyebrow: 'Qué incluye',
    detallesTitleLine1: 'Cobertura',
    detallesTitleLine2: 'completa',
    detallesDesc: 'La póliza anual te garantiza protección continua y cumplimiento ante cualquier auditoría.',
    detalles: [
      { nombre: 'Inspección periódica programada',    sub: 'Visitas mensuales o trimestrales adaptadas al nivel de riesgo y tipo de instalación — nunca pierdas una fecha límite' },
      { nombre: 'Verificación de presión y agente',   sub: 'Revisión profesional de manómetro, peso del agente extintor y estado de válvulas para garantizar operación inmediata' },
      { nombre: 'Actualización de etiquetas NOM',     sub: 'Renovación de etiquetas de inspección, bitácoras y registros exigidos por Protección Civil y STPS' },
      { nombre: 'Reportes técnicos documentados',     sub: 'Informes detallados con hallazgos, recomendaciones y evidencia fotográfica — listos para cualquier auditoría' },
      { nombre: 'Diagnóstico preventivo de fallas',   sub: 'Detectamos corrosión, fugas y desgaste antes de que se conviertan en observaciones durante inspecciones oficiales' },
      { nombre: 'Pólizas anuales de mantenimiento',   sub: 'Contratos con precio preferencial, cobertura integral y prioridad de atención — la opción más rentable para empresas' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Mantenimiento',
    normasTitleLine2: 'según norma',
    normasDesc: 'El mantenimiento preventivo está exigido por dos normas mexicanas vigentes.',
    normas: [
      { codigo: 'NOM-002-STPS', nombre: 'Condiciones de seguridad — Prevención de incendios', aplica: 'Exige programa documentado de mantenimiento de equipo contra incendios' },
      { codigo: 'NOM-154-SCFI', nombre: 'Extintores contra incendio', aplica: 'Define la frecuencia mínima de inspección y los parámetros a verificar' },
      { codigo: 'NFPA 10',      nombre: 'Standard for Portable Fire Extinguishers', aplica: 'Estándar internacional de inspección mensual y mantenimiento anual' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre las',
    faqTitleLine2: 'pólizas',
    faqItems: [
      { question: '¿Cuánto cuesta una póliza anual de mantenimiento?', answer: 'El costo depende del número de equipos, frecuencia de inspección y ubicación. Como referencia, una póliza para 20-30 extintores con visitas trimestrales tiene un costo significativamente menor que pagar 4 servicios separados durante el año.' },
      { question: '¿Qué frecuencia de inspección recomiendan?', answer: 'Para riesgo bajo (oficinas, comercios) recomendamos visitas trimestrales. Para riesgo medio (restaurantes, talleres) inspección bimestral. Para riesgo alto (industria, almacenes con material inflamable) revisión mensual conforme a NFPA 10.' },
      { question: '¿La póliza incluye recargas y reposiciones?', answer: 'La póliza estándar incluye inspecciones y reportes. Las recargas y reposiciones se cotizan por separado con precio preferencial para clientes con póliza activa. Existen planes Premium que incluyen recargas anuales.' },
      { question: '¿Atienden múltiples sucursales en una sola póliza?', answer: 'Sí. Manejamos pólizas multi-sucursal para empresas con presencia regional. Cada sucursal tiene su propio cronograma y bitácora, pero la facturación, gestión y reportería se centralizan para tu departamento de mantenimiento.' },
    ],
    waMessage: 'Hola, quiero una póliza anual de mantenimiento preventivo de extintores.',
    ctaTitle: '¿Listo para una póliza de mantenimiento?',
    ctaBody: 'Cotización personalizada según tu inventario y nivel de riesgo. Visita inicial sin costo.',
  },

  // ──────────────────────────────────────────
  // 4. INSTALACIÓN SISTEMAS CI
  // ──────────────────────────────────────────
  'instalacion-sistemas': {
    metaTitle: 'Instalación de Sistemas Contra Incendio en CDMX | NFPA 13/72 Llave en Mano',
    metaDesc: 'Diseño, instalación y certificación de sistemas contra incendio en CDMX y Estado de México: alarmas NFPA 72, rociadores NFPA 13, redes hidráulicas y tableros de control. Visita técnica sin costo.',
    badge: 'NFPA 13/72',
    heroTitle: 'Instalación de Sistemas',
    heroAccent: 'Contra Incendio',
    heroSubtitle: 'Diseño e instalación llave en mano de sistemas completos de detección, alarma y supresión.',
    heroBodyPara: 'Desde detectores de humo para oficinas hasta rociadores automáticos para plantas industriales — con ingeniería, instalación y certificación incluidas. Cada proyecto inicia con una visita técnica gratuita donde determinamos el alcance, el presupuesto y el cronograma antes de que firmes cualquier contrato.',
    img: '/imagenes/servicios/instalacion-sistemas-contra-incendio-deteccion-alarmas.avif',
    detallesEyebrow: 'Sistemas que instalamos',
    detallesTitleLine1: 'Soluciones',
    detallesTitleLine2: 'integrales',
    detallesDesc: 'Desde proyecto en plano hasta puesta en marcha y certificación final.',
    detalles: [
      { nombre: 'Instalación de alarmas contra incendio', sub: 'Sistemas convencionales y analógico-direccionables con programación, cableado y puesta en marcha certificada NFPA 72', href: '/sistemas/' },
      { nombre: 'Instalación de detectores de humo',     sub: 'Detectores iónicos, fotoeléctricos y termovelocimétricos — selección técnica según el tipo de riesgo de cada zona', href: '/sistemas/' },
      { nombre: 'Rociadores automáticos NFPA 13',        sub: 'Diseño e instalación de sistemas húmedos, secos y de diluvio para naves industriales, bodegas y edificios comerciales', href: '/sistemas/' },
      { nombre: 'Redes hidráulicas contra incendio',     sub: 'Ingeniería, tendido de tubería y pruebas de presión para redes de rociadores y gabinetes de hidrante', href: '/sistemas/' },
      { nombre: 'Tableros de control y monitoreo',       sub: 'Paneles FACP y controladores de bomba NFPA 20 con supervisión remota, diagnóstico en tiempo real y respaldo', href: '/sistemas/' },
      { nombre: 'Visita técnica sin costo',              sub: 'Un ingeniero evalúa tu instalación, define el alcance del proyecto y te entrega presupuesto detallado sin compromiso' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Normas que',
    normasTitleLine2: 'aplicamos',
    normasDesc: 'Cada instalación cumple con las normas mexicanas y los estándares internacionales NFPA.',
    normas: [
      { codigo: 'NFPA 13', nombre: 'Standard for Installation of Sprinkler Systems', aplica: 'Diseño e instalación de rociadores automáticos para todo tipo de edificio' },
      { codigo: 'NFPA 72', nombre: 'National Fire Alarm and Signaling Code',         aplica: 'Sistemas de detección, alarma y notificación de incendios' },
      { codigo: 'NFPA 20', nombre: 'Stationary Pumps for Fire Protection',           aplica: 'Bombas estacionarias y tableros de control para sistemas hidráulicos' },
      { codigo: 'NOM-002-STPS', nombre: 'Condiciones de seguridad — Prevención de incendios', aplica: 'Establece la obligatoriedad de sistemas en centros de trabajo' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'instalación',
    faqItems: [
      { question: '¿Cuánto tarda la instalación de un sistema completo?', answer: 'Depende de la superficie y complejidad. Un sistema de alarma para oficina de 1,000 m² toma 2-3 semanas; una red de rociadores para nave industrial de 5,000 m² requiere 6-10 semanas incluyendo ingeniería, suministro de materiales, instalación, pruebas y certificación.' },
      { question: '¿Entregan ingeniería de detalle y planos as-built?', answer: 'Sí. Cada proyecto incluye memoria de cálculo hidráulico (NFPA 13) o de carga eléctrica (NFPA 72), planos de detalle, lista de materiales y planos as-built al cierre. Documentación completa para tu expediente y futuras ampliaciones.' },
      { question: '¿La instalación incluye certificación final?', answer: 'Sí. Al término del proyecto entregamos pruebas funcionales documentadas, dictamen técnico de instalación conforme a NFPA y carta de garantía. La documentación es válida ante Protección Civil, aseguradoras y auditores externos.' },
      { question: '¿Pueden trabajar en edificio operando?', answer: 'Sí. Coordinamos cronogramas en horarios fuera de operación o por etapas para minimizar afectación. Para edificios corporativos y comerciales trabajamos noches y fines de semana sin recargo significativo.' },
    ],
    waMessage: 'Hola, necesito instalación de sistema contra incendio llave en mano. ¿Podemos agendar visita técnica?',
    ctaTitle: '¿Tu edificio necesita un sistema contra incendio?',
    ctaBody: 'Visita técnica sin costo. Recibirás cotización detallada con alcance, plazo y normativa aplicable.',
  },

  // ──────────────────────────────────────────
  // 5. PRUEBA HIDROSTÁTICA
  // ──────────────────────────────────────────
  'prueba-hidrostatica': {
    metaTitle: 'Prueba Hidrostática de Extintores en CDMX | NOM-154-SCFI Cada 5 Años',
    metaDesc: 'Prueba hidrostática certificada de extintores en CDMX y Estado de México conforme NOM-154-SCFI. Detección de corrosión interna, dictamen técnico y reemplazo inmediato si el cilindro no aprueba.',
    badge: 'Obligatoria cada 5 años',
    heroTitle: 'Prueba',
    heroAccent: 'Hidrostática',
    heroSubtitle: 'Verificación de la integridad estructural del cilindro del extintor conforme a NOM-154-SCFI.',
    heroBodyPara: 'Detecta corrosión interna, deformaciones y fallas invisibles a simple vista. Si el cilindro no pasa, te ofrecemos reemplazo inmediato. El certificado oficial de prueba se integra a tu expediente de Protección Civil — la NOM-154-SCFI exige esta prueba cada 5 años para todos los tipos de extintor.',
    img: '/imagenes/servicios/prueba-hidrostatica-extintores-nom-154-certificado.avif',
    detallesEyebrow: 'Qué incluye',
    detallesTitleLine1: 'Proceso',
    detallesTitleLine2: 'certificado',
    detallesDesc: 'La prueba hidrostática es la única forma de verificar la integridad real del cilindro a presión.',
    detalles: [
      { nombre: 'Prueba de presión NOM-154-SCFI',     sub: 'Ensayo hidrostático certificado que verifica la resistencia estructural del cilindro a presión superior a la de servicio' },
      { nombre: 'Detección de corrosión interna',     sub: 'Identificamos daño oculto, micro-fisuras y debilitamiento del metal que una inspección visual no puede detectar' },
      { nombre: 'Certificado oficial para expediente', sub: 'Documento con número de folio, resultados y firma del técnico responsable — aceptado por Protección Civil sin observaciones' },
      { nombre: 'Cobertura para todos los agentes',   sub: 'PQS, CO₂, AFFF, Tipo K y agente limpio — cada tipo de extintor requiere esta prueba obligatoria cada 5 años' },
      { nombre: 'Dictamen técnico fundamentado',      sub: 'Reporte detallado con resultado aprobatorio o rechazo documentado con causa técnica y recomendación de reemplazo' },
      { nombre: 'Reemplazo inmediato garantizado',    sub: 'Si el cilindro no supera la prueba, te ofrecemos un extintor nuevo al momento — tu empresa nunca queda desprotegida' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Norma única',
    normasTitleLine2: 'aplicable',
    normasDesc: 'La NOM-154-SCFI es la norma mexicana que regula la prueba hidrostática de extintores.',
    normas: [
      { codigo: 'NOM-154-SCFI', nombre: 'Extintores contra incendio — Servicio de mantenimiento y recarga', aplica: 'Frecuencia obligatoria cada 5 años, presión de prueba y criterios de aprobación/rechazo' },
      { codigo: 'NMX-S-066',    nombre: 'Selección, instalación e inspección de extintores portátiles', aplica: 'Especifica los procedimientos técnicos del ensayo hidrostático' },
      { codigo: 'NFPA 10',      nombre: 'Standard for Portable Fire Extinguishers', aplica: 'Estándar internacional con criterios técnicos de hydrostatic testing' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'prueba',
    faqItems: [
      { question: '¿Por qué es obligatoria cada 5 años?', answer: 'El cilindro del extintor sufre fatiga estructural por ciclos de presión, exposición a humedad y eventos térmicos. La NOM-154-SCFI exige la prueba cada 5 años porque después de ese tiempo la corrosión interna y micro-fisuras pueden hacer que el cilindro reviente al ser presurizado, causando lesiones graves.' },
      { question: '¿Cuánto cuesta la prueba hidrostática?', answer: 'El costo varía según tipo de agente y capacidad del extintor. Como referencia, la prueba para un PQS de 6 kg ronda entre $250-400 MXN; para CO₂ y agente limpio el costo es mayor por el tipo de cilindro. Solicita cotización con tu inventario para precio exacto.' },
      { question: '¿Qué pasa si el extintor no pasa la prueba?', answer: 'Te entregamos dictamen técnico con la causa del rechazo (corrosión, deformación, fuga, etc.) y la recomendación de baja del equipo. Ofrecemos extintor nuevo de reemplazo al momento con descuento por cambio para que tu empresa no quede desprotegida.' },
      { question: '¿Puedo posponer la prueba hidrostática?', answer: 'No es recomendable. Un cilindro vencido en prueba hidrostática es una observación grave en inspecciones de Protección Civil y puede generar multas significativas. Más importante: el riesgo real de que el cilindro falle al activarse o ser presurizado es alto después de 5 años sin certificación.' },
    ],
    waMessage: 'Hola, necesito prueba hidrostática de extintores conforme a NOM-154 (cada 5 años).',
    ctaTitle: '¿Tus extintores cumplen 5 años o más?',
    ctaBody: 'Prueba hidrostática certificada con dictamen oficial. Reemplazo inmediato si no aprueba.',
  },

  // ──────────────────────────────────────────
  // 6. ASESORÍA TÉCNICA
  // ──────────────────────────────────────────
  'asesoria-tecnica': {
    metaTitle: 'Asesoría Técnica de Protección Contra Incendios | Diagnóstico Sin Costo en CDMX',
    metaDesc: 'Asesoría técnica gratuita en CDMX y Estado de México: análisis de riesgo, recomendación de equipos, diagnóstico de señalización y preparación para inspecciones de Protección Civil sin costo.',
    badge: 'Sin costo',
    heroTitle: 'Asesoría Técnica',
    heroAccent: 'y Dictamen',
    heroSubtitle: 'Análisis de riesgo de tu instalación para determinar el equipo exacto que necesitas.',
    heroBodyPara: 'Evaluamos tipo de riesgo, superficie y normativas aplicables. Te entregamos un plan de equipamiento con prioridades y presupuesto por etapas — sin costo y sin compromiso. Ideal para empresas que necesitan ponerse al día con Protección Civil o que están abriendo una nueva sucursal, planta o local comercial.',
    img: '/imagenes/servicios/asesoria-tecnica-proteccion-civil-dictamen-seguridad.avif',
    detallesEyebrow: 'Qué evaluamos',
    detallesTitleLine1: 'Diagnóstico',
    detallesTitleLine2: 'integral',
    detallesDesc: 'Una visita técnica responde todas las dudas y te da un plan claro y presupuestado.',
    detalles: [
      { nombre: 'Evaluación de riesgo NOM-002-STPS', sub: 'Clasificamos tu instalación como riesgo bajo, medio u ordinario para determinar el equipo y las medidas exactas que requieres' },
      { nombre: 'Recomendación técnica de extintores', sub: 'Definimos tipo de agente, capacidad, cantidad y ubicación óptima por cada zona de tu inmueble según normativa vigente' },
      { nombre: 'Diagnóstico de señalización NOM-003', sub: 'Identificamos señalamientos faltantes o mal ubicados y te entregamos un plano con las correcciones necesarias' },
      { nombre: 'Preparación para inspecciones',     sub: 'Revisamos tu expediente completo de seguridad para que pases la visita de Protección Civil sin observaciones ni multas' },
      { nombre: 'Plan de equipamiento por etapas',    sub: 'Presupuesto priorizado que te permite regularizarte de forma gradual — primero lo urgente, después lo complementario' },
      { nombre: 'Expediente técnico integrado',       sub: 'Documentación profesional con fichas, certificados y planos listos para entregar ante cualquier autoridad regulatoria' },
    ],
    normasEyebrow: 'Marco normativo',
    normasTitleLine1: 'Normas que',
    normasTitleLine2: 'evaluamos',
    normasDesc: 'Cualquier inspección de Protección Civil o STPS revisa el cumplimiento de estas normas.',
    normas: [
      { codigo: 'NOM-002-STPS', nombre: 'Condiciones de seguridad — Prevención de incendios', aplica: 'Determina equipo, señalización y brigadas obligatorias por nivel de riesgo' },
      { codigo: 'NOM-003-SEGOB', nombre: 'Señales y avisos para Protección Civil', aplica: 'Tipo, color y dimensiones de señalización requerida por inmueble' },
      { codigo: 'NOM-026-STPS',  nombre: 'Colores y señales de seguridad e higiene', aplica: 'Identificación visual de tuberías, riesgos químicos y emergencias' },
      { codigo: 'NOM-154-SCFI', nombre: 'Extintores contra incendio', aplica: 'Cantidad, tipo y mantenimiento de extintores conforme al tipo de fuego esperado' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'asesoría',
    faqItems: [
      { question: '¿La asesoría realmente no tiene costo?', answer: 'Correcto. La visita técnica, evaluación de riesgo y entrega del dictamen son gratuitas y sin compromiso de compra. Nuestro modelo se sostiene con los proyectos que sí deciden contratar — pero la evaluación inicial siempre es libre para que tomes una decisión informada.' },
      { question: '¿Cuánto tarda la asesoría?', answer: 'La visita inicial dura entre 1 y 3 horas según el tamaño del inmueble. El dictamen escrito con plan de equipamiento se entrega en 3-5 días hábiles. Para casos urgentes (inspección próxima) podemos acelerar la entrega.' },
      { question: '¿Qué documentos entregan al final?', answer: 'Recibirás: (1) dictamen técnico con clasificación de riesgo, (2) inventario recomendado de extintores por zona, (3) plano de señalización requerida, (4) cotización por etapas con prioridades y (5) checklist de cumplimiento normativo aplicable a tu giro.' },
      { question: '¿Atienden empresas pequeñas también?', answer: 'Sí. Atendemos desde restaurantes y comercios pequeños hasta plantas industriales y corporativos. La asesoría se adapta al tamaño y complejidad de tu instalación. Cualquier negocio formal en CDMX y Estado de México requiere cumplir con Protección Civil.' },
    ],
    waMessage: 'Hola, quiero agendar un diagnóstico técnico gratuito en mi inmueble.',
    ctaTitle: '¿Tienes inspección próxima o no sabes qué te falta?',
    ctaBody: 'Visita técnica gratuita con dictamen escrito y plan de equipamiento priorizado.',
  },

  // ──────────────────────────────────────────
  // 7. CAPACITACIÓN Y BRIGADAS
  // ──────────────────────────────────────────
  'capacitacion': {
    metaTitle: 'Capacitación de Brigadas Contra Incendio | Constancias DC-3 STPS en CDMX',
    metaDesc: 'Capacitación práctica de brigadas contra incendio con constancia DC-3 válida ante STPS. Uso de extintores con fuego real, evacuación cronometrada y primeros auxilios. CDMX y Estado de México.',
    badge: 'Constancias DC-3',
    heroTitle: 'Capacitación y',
    heroAccent: 'Formación de Brigadas',
    heroSubtitle: 'Cursos prácticos de prevención y combate de incendios con constancias DC-3 STPS.',
    heroBodyPara: 'Uso correcto de extintores con fuego real, formación de brigadas internas de emergencia, simulacros de evacuación con cronometraje y primeros auxilios básicos. Se imparten en tus instalaciones con tu equipo real — no solo teoría. Las constancias DC-3 tienen validez oficial ante la STPS para auditorías laborales.',
    img: '/imagenes/servicios/capacitacion-brigadas-contra-incendio-constancia-dc3.avif',
    detallesEyebrow: 'Cursos disponibles',
    detallesTitleLine1: 'Programas de',
    detallesTitleLine2: 'formación',
    detallesDesc: 'Capacitación práctica con casos reales y constancia oficial al término.',
    detalles: [
      { nombre: 'Curso de uso y manejo de extintores',  sub: 'Práctica con fuego real supervisada por instructores certificados — tu personal aprende a actuar en los primeros 60 segundos críticos' },
      { nombre: 'Formación de brigadas de emergencia',  sub: 'Programa integral para brigadas contra incendio, evacuación y primeros auxilios con roles definidos y protocolos claros' },
      { nombre: 'Simulacros de evacuación cronometrados', sub: 'Escenarios reales con medición de tiempos, identificación de cuellos de botella y reporte de mejoras para tu plan interno' },
      { nombre: 'Constancias DC-3 con validez STPS',    sub: 'Documentos oficiales que acreditan la capacitación de tu personal — requisito obligatorio en auditorías laborales' },
      { nombre: 'Capacitación en primeros auxilios',    sub: 'Protocolos de atención inicial, uso de botiquín STPS, inmovilización y técnicas de reanimación para emergencias reales' },
      { nombre: 'Cursos impartidos en tus instalaciones', sub: 'El instructor trabaja directamente con tu equipo y tus extintores — capacitación práctica, no solo teoría de aula' },
    ],
    normasEyebrow: 'Marco normativo',
    normasTitleLine1: 'Normas que',
    normasTitleLine2: 'cumplimos',
    normasDesc: 'Las constancias DC-3 cumplen con la normativa laboral mexicana vigente.',
    normas: [
      { codigo: 'STPS DC-3',     nombre: 'Constancia de Competencias o Habilidades Laborales', aplica: 'Documento oficial obligatorio para acreditar capacitación de personal ante auditorías' },
      { codigo: 'NOM-002-STPS', nombre: 'Condiciones de seguridad — Prevención de incendios', aplica: 'Exige brigadas capacitadas y simulacros documentados en cada centro de trabajo' },
      { codigo: 'NOM-030-STPS', nombre: 'Servicios preventivos de seguridad y salud en el trabajo', aplica: 'Establece programa anual de capacitación obligatorio para todo patrón' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre los',
    faqTitleLine2: 'cursos',
    faqItems: [
      { question: '¿Cuánto dura un curso de uso de extintores?', answer: 'El curso básico dura 4 horas: 1 hora de teoría (clasificación de fuegos, agentes, técnicas) y 3 horas de práctica con extintor real apagando fuego controlado. Para formación completa de brigada el programa se extiende a 16-24 horas distribuidas en 2-3 sesiones.' },
      { question: '¿Las constancias DC-3 tienen validez ante STPS?', answer: 'Sí. Emitimos constancias DC-3 con folio único, datos del trabajador, datos del agente capacitador y firma del instructor certificado. Son documento válido ante inspecciones de la STPS y forman parte del expediente del trabajador conforme al Reglamento Federal de Seguridad y Salud en el Trabajo.' },
      { question: '¿Cuántas personas pueden tomar el curso?', answer: 'Recomendamos grupos de 8-15 personas para garantizar práctica individual con el extintor. Para empresas grandes coordinamos múltiples sesiones en el mismo día. Los costos se reducen significativamente por persona en grupos mayores a 20.' },
      { question: '¿Los cursos se imparten en mi empresa?', answer: 'Sí. Trabajamos directamente en tus instalaciones con tu equipo real. Solo necesitamos un espacio abierto para la práctica con fuego (estacionamiento, patio o azotea) y suficientes extintores para que cada participante practique al menos 2 veces.' },
    ],
    waMessage: 'Hola, necesito capacitación de brigadas con constancia DC-3 válida ante STPS.',
    ctaTitle: '¿Tu personal está capacitado para una emergencia?',
    ctaBody: 'Cursos prácticos con fuego real y constancia DC-3 oficial. Impartidos en tus instalaciones.',
  },

  // ──────────────────────────────────────────
  // 8. SEÑALIZACIÓN NOM
  // ──────────────────────────────────────────
  'senalizacion': {
    metaTitle: 'Señalización de Emergencia NOM-003 e Instalación en CDMX | Fotoluminiscente',
    metaDesc: 'Venta e instalación profesional de señalamientos fotoluminiscentes para rutas de evacuación, salidas, extintores y zonas de riesgo. Conforme NOM-003-SEGOB y NOM-026-STPS en CDMX y Estado de México.',
    badge: 'NOM-003-SEGOB',
    heroTitle: 'Señalización e',
    heroAccent: 'Instalación NOM',
    heroSubtitle: 'Venta e instalación profesional de señalamientos fotoluminiscentes para rutas de evacuación.',
    heroBodyPara: 'Material visible sin energía eléctrica — aprobado por Protección Civil. Rutas de evacuación, salidas de emergencia, ubicación de extintores, punto de reunión y señales de prohibición. Te entregamos el plano de señalización con la ubicación de cada señal, listo para anexar a tu expediente regulatorio.',
    img: '/imagenes/servicios/instalacion-senalamientos-fotoluminiscentes-norma-oficial.avif',
    detallesEyebrow: 'Tipos de señalización',
    detallesTitleLine1: 'Señalización',
    detallesTitleLine2: 'completa',
    detallesDesc: 'Cobertura de los 4 tipos de señalización oficial: salvación, prohibición, advertencia e información.',
    detalles: [
      { nombre: 'Señalización de rutas de evacuación', sub: 'Flechas y letreros fotoluminiscentes que guían al personal hacia las salidas incluso en cortes de energía eléctrica', href: '/senalamientos/' },
      { nombre: 'Señales de ubicación de extintores',   sub: 'Señalamientos de salvación en acrílico o PVC que identifican cada punto de equipo contra incendio en tu inmueble', href: '/senalamientos/' },
      { nombre: 'Señales de prohibición NOM-026',       sub: 'No fumar, no paso, no encender fuego y restricciones específicas — fabricadas con tintas resistentes a UV', href: '/senalamientos/' },
      { nombre: 'Señales de advertencia de riesgo',     sub: 'Riesgo eléctrico, material inflamable, sustancias peligrosas y más — visibilidad inmediata en zonas críticas', href: '/senalamientos/' },
      { nombre: 'Instalación conforme a norma oficial', sub: 'Colocación a la altura, distancia y ubicación exactas que exigen NOM-003-SEGOB y NOM-026-STPS vigentes' },
      { nombre: 'Plano de señalización para expediente', sub: 'Levantamiento completo de tu inmueble con ubicación de cada señal — documento listo para Protección Civil' },
    ],
    normasEyebrow: 'Cumplimiento normativo',
    normasTitleLine1: 'Normas oficiales',
    normasTitleLine2: 'aplicables',
    normasDesc: 'La señalización de emergencia está regulada por dos normas mexicanas obligatorias.',
    normas: [
      { codigo: 'NOM-003-SEGOB', nombre: 'Señales y avisos para Protección Civil', aplica: 'Colores, formas, dimensiones y ubicación de señalización de emergencia' },
      { codigo: 'NOM-026-STPS',  nombre: 'Colores y señales de seguridad e higiene', aplica: 'Identificación de tuberías, riesgos químicos y áreas de peligro' },
      { codigo: 'NMX-S-017',    nombre: 'Equipo de protección personal — Símbolos', aplica: 'Pictogramas estándar para señalización de equipo de seguridad personal' },
    ],
    faqEyebrow: 'Preguntas frecuentes',
    faqTitleLine1: 'Sobre la',
    faqTitleLine2: 'señalización',
    faqItems: [
      { question: '¿Por qué fotoluminiscente y no señales eléctricas?', answer: 'Los señalamientos fotoluminiscentes brillan en la oscuridad sin necesidad de electricidad — fundamental porque en un incendio real lo primero que se corta es la energía eléctrica. La NOM-003-SEGOB exige fotoluminiscencia para rutas de evacuación y salidas de emergencia precisamente por esta razón.' },
      { question: '¿Cuántas señales necesita mi empresa?', answer: 'Depende del tamaño y disposición del inmueble. Como referencia: una oficina de 200 m² requiere mínimo 8-12 señales (rutas, salidas, extintores, no fumar, punto de reunión); una nave industrial de 1,000 m² puede requerir 30-50 señales. La asesoría técnica gratuita te entrega el conteo exacto.' },
      { question: '¿Entregan plano de señalización para Protección Civil?', answer: 'Sí. Como parte del servicio entregamos un plano del inmueble con la ubicación exacta de cada señal instalada, identificada por código y tipo. El plano es documento válido para tu expediente de Protección Civil y para auditorías de la STPS.' },
      { question: '¿Cuánto duran las señales fotoluminiscentes?', answer: 'Las señales de calidad fotoluminiscente fabricadas con material certificado tienen vida útil de 8-10 años en interiores y 5-7 años en exteriores con exposición UV. Te recomendamos inspección visual anual para detectar decoloración o desprendimiento prematuro.' },
    ],
    waMessage: 'Hola, necesito cotizar señalamientos de emergencia fotoluminiscentes y levantamiento.',
    ctaTitle: '¿Tu inmueble cumple con NOM-003 de Protección Civil?',
    ctaBody: 'Levantamiento gratuito + cotización de señalética y plano de instalación listo para tu expediente.',
  },
}
