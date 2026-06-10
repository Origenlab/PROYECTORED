// ============================================================
// Guías de selección por categoría — para GuiaCategoria.astro
// Generado a partir de los antiguos Guia{Categoria}.astro (verbatim).
// ============================================================
import { waUrl } from '../config/site'

export interface GuiaEscenario {
  num: string
  tipo: string
  norma: string
  /** Solo variantes con lista (sistemas, primeros-auxilios, equipo-seguridad) */
  subtitulo?: string
  /** string → párrafo · string[] → lista con subtítulo */
  necesitas: string | string[]
  porque: string
  href: string
  img: string
  imgAlt: string
}

export interface GuiaCategoriaConfig {
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
  /** Texto del CTA de cada card, p.ej. 'Cotizar para este espacio' */
  cardCta: string
  escenarios: GuiaEscenario[]
  ctaBar: {
    iconSvg: string
    strongHtml: string
    spanHtml: string
    btnLabel: string
    waMessage: string
  }
}

export const GUIA_CATEGORIAS: Record<string, GuiaCategoriaConfig> = {
  'extintores': {
    id: 'extintores',
    header: {
      eyebrow: 'Selección por tipo de riesgo',
      titleLine1: 'El Extintor Incorrecto No Solo No Apaga —',
      titleLine2: 'Puede Agravar el Incendio',
      desc: 'Agua en fuego eléctrico = electrocución. PQS en freidora = reavivamiento. CO₂ en exterior = dispersión sin efecto.',
      bodyPara1: 'Elegir el tipo incorrecto de extintor no es solo un problema de cumplimiento — es un riesgo operativo real. En una emergencia, el personal que intenta usar un extintor inadecuado puede agravar el incendio, sufrir un accidente o perder los segundos críticos entre un conato controlado y una evacuación total. Asesoría técnica sin costo para definir la configuración correcta por zona.',
    },
    gridAria: 'Guía de selección de extintores por tipo de instalación',
    cardCta: 'Ver extintor recomendado',
    escenarios: [
  {
    num: '01',
    tipo: 'Oficina, comercio o edificio corporativo',
    norma: 'NOM-002-STPS',
    necesitas: 'PQS ABC 4.5 kg como estándar + CO₂ 4.5 kg en cuarto de servidores o UPS + señalamiento fotoluminiscente en cada extintor',
    porque: 'La norma exige 1 extintor por cada 300 m² mínimo. El PQS ABC cubre todos los fuegos de oficina. El CO₂ protege equipos electrónicos sin dejar residuo de polvo — el polvo penetra en componentes y genera cortocircuitos.',
    href: '/extintores/polvo-seco/',
    img: '/imagenes/escenarios/oficina.avif',
    imgAlt: 'Oficina corporativa protegida con extintores PQS ABC y CO₂',
  },
  {
    num: '02',
    tipo: 'Restaurante o cocina industrial con freidoras',
    norma: 'NFPA 10 · NOM-002',
    necesitas: 'Extintor Tipo K de 6 L bajo campana extractora + PQS ABC en área de comensales + señalamiento específico por zona de riesgo',
    porque: 'Los aceites vegetales a temperatura de fritura (180–200 °C) generan fuegos Clase K que el PQS puede agravar — el polvo levanta las grasas encendidas y extiende el incendio. Solo el acetato de potasio del Tipo K suprime este fuego.',
    href: '/extintores/tipo-k/',
    img: '/imagenes/escenarios/cocina.avif',
    imgAlt: 'Cocina industrial equipada con extintor Tipo K bajo campana extractora',
  },
  {
    num: '03',
    tipo: 'Planta industrial o bodega de manufactura',
    norma: 'NOM-002-STPS',
    necesitas: 'PQS 9–12 kg en zonas de producción + AFFF en área de líquidos inflamables + automáticos en cuartos de máquinas desatendidos + rodante 50 kg en patio',
    porque: 'Las naves industriales tienen cargas de fuego mixtas: sólidos, líquidos y eléctrico. Un solo tipo no cubre todos los riesgos. La norma exige el tipo adecuado para el riesgo predominante de cada zona.',
    href: '/extintores/afff/',
    img: '/imagenes/escenarios/industrial.avif',
    imgAlt: 'Planta industrial con extintores PQS, AFFF y rodante en zonas de producción',
  },
  {
    num: '04',
    tipo: 'Centro de datos, archivos o laboratorio',
    norma: 'NFPA 10 · NFPA 75',
    necesitas: 'Agente limpio (FM-200 o Novec 1230) en rack de servidores + CO₂ de respaldo + automático montado en techo sin intervención humana',
    porque: 'El PQS destruye el equipo que intenta proteger: el polvo penetra en los componentes y genera cortocircuitos inmediatos. El agente limpio suprime en <10 segundos sin residuo ni daño a equipos.',
    href: '/extintores/agente-limpio/',
    img: '/imagenes/escenarios/data-center.avif',
    imgAlt: 'Centro de datos protegido con extintor de agente limpio FM-200',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      strongHtml: '¿Tu instalación tiene riesgos mixtos?',
      spanHtml: 'Levantamiento técnico sin costo — te entregamos la configuración correcta por zona.',
      btnLabel: 'Asesoría técnica gratuita',
      waMessage: 'Hola, necesito asesoría para elegir el extintor correcto para mi instalación',
    },
  },
  'bomberos': {
    id: 'bomberos',
    header: {
      eyebrow: 'Guía por tipo de operación',
      titleLine1: 'El Equipo Incorrecto No es Solo una Falla —',
      titleLine2: 'Es un Riesgo de Vida para el Operador',
      desc: 'Traje estructural en HAZMAT = exposición química. Arnés de construcción en rescate = falla en caída. Identifica tu operación antes de elegir.',
      bodyPara1: 'Cada tipo de operación de emergencia tiene requerimientos de equipo específicos definidos por norma. Un traje NFPA 1971 no reemplaza un traje HAZMAT NFPA 1991. Un arnés de seguridad industrial no es válido para rescate NFPA 1983. Seleccionar el equipo incorrecto no solo genera incumplimiento normativo — expone al operador a condiciones para las que su equipo no fue diseñado. Te ayudamos a identificar exactamente lo que necesitas según tu tipo de riesgo.',
    },
    gridAria: 'Guía de equipo para bomberos por tipo de operación',
    cardCta: 'Cotizar para esta operación',
    escenarios: [
  {
    num: '01',
    tipo: 'Combate estructural — Bomberos profesionales',
    norma: 'NFPA 1971 · 1851 · 1981',
    necesitas: 'Traje 3 capas NFPA 1971 + ERA SCBA NIOSH + casco con visor + guantes térmicos + botas certificadas + capucha Nomex',
    porque: 'El ensemble completo NFPA 1971 es obligatorio para entrar a estructuras en llamas. No hay atajos: cada componente debe estar individualmente certificado. Un solo elemento fuera de norma — aunque sea la capucha — invalida la protección del conjunto y expone al operador a quemaduras de segundo y tercer grado.',
    href: waUrl('Hola, necesito equipo para combate estructural NFPA 1971'),
    img: '/imagenes/escenarios-bomberos/combate-estructural.avif',
    imgAlt: 'Bombero equipado con traje NFPA 1971 y ERA en combate estructural',
  },
  {
    num: '02',
    tipo: 'HAZMAT — Materiales peligrosos',
    norma: 'NFPA 1991 · 1992 · 1994',
    necesitas: 'Traje encapsulado Nivel A (gases) o Nivel B (líquidos) + ERA + detector multigas portátil + traje de descontaminación + zona de decon establecida',
    porque: 'Los incidentes con materiales peligrosos requieren protección específica por nivel de riesgo: un traje Nivel A para vapores tóxicos no es el mismo que un Nivel B para salpicaduras de líquidos. Un traje estructural NFPA 1971 no protege contra agentes químicos — los absorbe. La clasificación correcta define si el operador sobrevive o no.',
    href: waUrl('Hola, necesito equipo HAZMAT para materiales peligrosos'),
    img: '/imagenes/escenarios-bomberos/hazmat-materiales-peligrosos.avif',
    imgAlt: 'Equipo HAZMAT Nivel A para incidentes con materiales peligrosos',
  },
  {
    num: '03',
    tipo: 'Rescate en altura y espacios confinados',
    norma: 'NFPA 1983 · NOM-009-STPS · NFPA 1670',
    necesitas: 'Arnés clase III NFPA 1983 + cuerda técnica de rescate + sistema antícaída + trípode de entrada a espacios confinados + equipo de monitoreo de atmósfera',
    porque: 'Un arnés de construcción convencional no es válido para rescate — los puntos de anclaje y la geometría de carga en caída son distintos. En NFPA 1983, un arnés clase III debe aguantar 3,000 lbf en caída libre desde 6 pies. La diferencia entre los certificados puede ser la diferencia entre una evacuación controlada y una fatalidad adicional.',
    href: waUrl('Hola, necesito equipo para rescate en altura y espacios confinados'),
    img: '/imagenes/escenarios-bomberos/rescate-altura-confinados.avif',
    imgAlt: 'Equipo de rescate en altura con arneses NFPA 1983 certificados',
  },
  {
    num: '04',
    tipo: 'Aeronáutico y zonas de proximidad',
    norma: 'NFPA 1976 · NFPA 1975',
    necesitas: 'Traje aluminizado de proximidad NFPA 1976 + ERA + casco especializado con visor de oro + guantes aluminizados + botas de proximidad',
    porque: 'Los incendios aeronáuticos con combustible JET-A generan temperaturas de 500°C o más en pocos segundos. Un traje estructural NFPA 1971 no está diseñado para calor radiante de esa intensidad — solo dura segundos antes de perder sus propiedades. El aluminizado NFPA 1976 refleja hasta el 95% del calor radiante y es la única opción válida para operaciones de primera respuesta en aeropuertos.',
    href: waUrl('Hola, necesito equipo aeronáutico o de proximidad NFPA 1976'),
    img: '/imagenes/escenarios-bomberos/aeronautico-proximidad.avif',
    imgAlt: 'Traje aluminizado de proximidad NFPA 1976 para incendios aeronáuticos',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      strongHtml: '¿Tu operación tiene múltiples tipos de riesgo o equipas a una corporación completa?',
      spanHtml: 'Diagnóstico técnico sin costo — definimos el ensemble correcto por tipo de operación y presupuesto disponible.',
      btnLabel: 'Asesoría técnica gratuita',
      waMessage: 'Hola, necesito asesoría técnica para equipo de emergencia',
    },
  },
  'gabinetes': {
    id: 'gabinetes',
    header: {
      eyebrow: 'Guía por tipo de inmueble',
      titleLine1: '¿Soporte de Pared o Gabinete?',
      titleLine2: 'Depende de Dónde Está tu Extintor',
      desc: 'Oficina, lobby, edificio y nave industrial tienen requerimientos distintos. La respuesta correcta evita observaciones de Protección Civil.',
      bodyPara1: 'No todos los inmuebles necesitan gabinete. La regla práctica: si el extintor se ensucia, se golpea, alguien podría llevárselo o está en una zona donde Protección Civil exige protección — necesitas gabinete. Si está en un área protegida, seca y de bajo tráfico, el soporte de pared puede ser suficiente. Te asesoramos sin costo para elegir la solución correcta.',
    },
    gridAria: 'Guía de gabinetes por tipo de inmueble',
    cardCta: 'Cotizar para este espacio',
    escenarios: [
  {
    num: '01',
    tipo: 'Oficina / negocio comercial',
    norma: 'NOM-002-STPS · NFPA 10',
    necesitas: 'Gabinete para extintor empotrado o sobrepuesto en pasillos de alto tráfico, bodega o zonas donde el extintor esté expuesto a polvo o vandalismo.',
    porque: 'Protección Civil puede observar extintores en mal estado por falta de resguardo. En oficinas con personal circulando, el gabinete protege el equipo y garantiza que siempre esté en condición de uso. El soporte de pared solo basta en zonas protegidas de bajo tráfico.',
    href: waUrl('Hola, necesito gabinetes para extintor en mi oficina o negocio'),
    img: '/imagenes/gabinetes/extintor/galeria-2.jpg',
    imgAlt: 'Gabinete para extintor sobrepuesto en oficina con vidrio templado',
  },
  {
    num: '02',
    tipo: 'Lobby / recepción / acceso principal',
    norma: 'NOM-002-STPS',
    necesitas: 'Porta extintor con cenicero para áreas donde el extintor debe estar visible y presentable. No requiere perforar muros — se coloca con base contrapesada.',
    porque: 'En lobbies y recepciones, un extintor colgado de la pared desentona con el espacio y puede ser movido. El porta extintor con cenicero cumple con normativa, mantiene el equipo accesible y tiene acabado profesional que no arruina la estética del área de recepción.',
    href: waUrl('Hola, necesito porta extintor con cenicero para mi lobby o recepción'),
    img: '/imagenes/gabinetes/porta-extintor-cenicero.jpg',
    imgAlt: 'Porta extintor con cenicero en lobby de edificio corporativo',
  },
  {
    num: '03',
    tipo: 'Edificio / inmueble multi-piso',
    norma: 'NOM-003-SEGOB · NFPA 14',
    necesitas: 'Gabinete para bombero por piso o sector — con manguera de 30 m, extintor, hacha y llave. Para edificios con red hidráulica: gabinete de hidrante con válvula angular pre-conectada.',
    porque: 'Edificios de más de 5 pisos con sistema hidráulico requieren gabinete de hidrante en cada toma según NFPA 14. Protección Civil lo solicita junto con el dictamen del sistema de red hidráulica. Sin gabinete de bombero o hidrante instalado correctamente, no se completa el expediente del inmueble.',
    href: waUrl('Hola, necesito gabinetes para bombero o hidrante en mi edificio'),
    img: '/imagenes/gabinetes/gabinete-bombero.jpg',
    imgAlt: 'Gabinete para bombero con manguera y hacha instalado en edificio',
  },
  {
    num: '04',
    tipo: 'Nave industrial / almacén / planta',
    norma: 'NOM-002-STPS · NFPA 10 · NFPA 14',
    necesitas: 'Gabinetes para extintor en zonas de alto riesgo + gabinetes de hidrante en puntos de la red hidráulica. Materiales resistentes a polvo industrial y ambientes húmedos.',
    porque: 'En naves industriales con maquinaria, almacenes de materiales inflamables o plantas de producción, los extintores sin gabinete se dañan por polvo, grasa y humedad. La STPS verifica en auditorías que los extintores estén resguardados y operables. Un extintor dañado por falta de protección genera multa.',
    href: waUrl('Hola, necesito gabinetes para extintor o hidrante en nave industrial o almacén'),
    img: '/imagenes/gabinetes/gabinete-mangueras.jpg',
    imgAlt: 'Gabinete para hidrante con manguera y válvula en nave industrial',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
      strongHtml: '¿Ya tienes extintores y necesitas gabinetes compatibles?',
      spanHtml: 'Mándanos foto por WhatsApp — te decimos el gabinete exacto para cada extintor sin costo.',
      btnLabel: 'Asesoría gratuita por WhatsApp',
      waMessage: 'Hola, no sé qué gabinetes necesito para mi inmueble. ¿Me asesoran?',
    },
  },
  'mangueras': {
    id: 'mangueras',
    header: {
      eyebrow: 'Guía por tipo de inmueble',
      titleLine1: '¿Qué Sistema Hidráulico',
      titleLine2: 'Necesita tu Inmueble?',
      desc: 'Edificio de oficinas, nave industrial, residencial y planta petroquímica tienen configuraciones y normas distintas.',
      bodyPara1: 'El sistema de mangueras no es igual para todos los inmuebles. El diámetro, el caudal, el tipo de chiflón y los adaptadores dependen del riesgo del espacio y del tipo de brigada que responderá. Dimensionar mal el sistema resulta en un sistema que no funciona bajo presión real — o uno sobredimensionado que nadie puede operar.',
    },
    gridAria: 'Guía de sistemas hidráulicos por tipo de inmueble',
    cardCta: 'Cotizar para este inmueble',
    escenarios: [
  {
    num: '01',
    tipo: 'Edificio de oficinas (5+ pisos)',
    norma: 'NFPA 14',
    necesitas: 'Manguera 2.5" + válvula angular + gabinete + toma siamesa en fachada + carrete con llave spanner por piso.',
    porque: 'Edificios de más de 5 pisos o 15 metros de altura requieren sistema de hidrantes standpipe conforme a NFPA 14. Los bomberos alimentan el sistema desde la toma siamesa en planta baja. Sin sistema completo, Protección Civil no emite dictamen favorable.',
    href: waUrl('Hola, necesito sistema de mangueras para edificio de oficinas de varios pisos'),
    img: '/imagenes/mangueras/toma-siamesa.jpg',
    imgAlt: 'Sistema de mangueras en edificio de oficinas con toma siamesa NFPA 14',
  },
  {
    num: '02',
    tipo: 'Nave industrial / bodega',
    norma: 'NFPA 24',
    necesitas: 'Manguera 2.5" + chiflón combinado + monitores de alto caudal por zona + válvulas de sector para aislar áreas sin apagar todo el sistema.',
    porque: 'El volumen y la carga de fuego en bodegas e industria exige caudal alto. Los monitores cubren áreas que una manguera manual no alcanza. Las válvulas de zona permiten aislar secciones — en un incendio real, aislar la zona afectada salva el resto del inmueble.',
    href: waUrl('Hola, necesito sistema de mangueras e hidrantes para nave industrial o bodega'),
    img: '/imagenes/mangueras/mangueras-hero.jpg',
    imgAlt: 'Sistema hidráulico contra incendio en nave industrial con monitores NFPA',
  },
  {
    num: '03',
    tipo: 'Edificio residencial / condominio',
    norma: 'NOM-002-STPS',
    necesitas: 'Manguera 1.5" + carrete de pared con gabinete integrado + toma siamesa en acceso + llave spanner en cada gabinete.',
    porque: 'Protección Civil exige hidrantes en edificios residenciales de más de 5 pisos. La manguera de 1.5" es más manejable para brigadas no profesionales. El carrete con gabinete integrado ahorra espacio en áreas comunes de pasillos y escaleras.',
    href: waUrl('Hola, necesito sistema de mangueras para edificio residencial o condominio'),
    img: '/imagenes/mangueras/carrete-manguera.jpg',
    imgAlt: 'Carrete porta manguera con gabinete integrado en edificio residencial',
  },
  {
    num: '04',
    tipo: 'Planta petroquímica / zona de alto riesgo',
    norma: 'NFPA 15 / NFPA 24',
    necesitas: 'Manguera 4" + monitores de alto caudal (1000+ GPM) + adaptadores Storz + válvulas de diluvio para activación automática por zona.',
    porque: 'El riesgo con líquidos inflamables exige descarga masiva. Las conexiones Storz permiten acople instantáneo sin rosca — crítico cuando cada segundo importa. Los monitores de alto caudal cubren patios de tanques y zonas de almacenamiento masivo donde la manguera manual es ineficaz.',
    href: waUrl('Hola, necesito sistema de mangueras para planta petroquímica o zona de alto riesgo'),
    img: '/imagenes/mangueras/adaptadores.jpg',
    imgAlt: 'Adaptadores Storz y mangueras de alto caudal para planta industrial de alto riesgo',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V12m0 0c0-4-4-8-4-8s4 1 4 8zm0 0c0-4 4-8 4-8s-4 1-4 8z"/><path d="M5 12H2M22 12h-3M12 2V0"/></svg>',
      strongHtml: '¿Ya tienes sistema pero necesitas reemplazar componentes?',
      spanHtml: 'Vendemos piezas sueltas — mándanos foto de lo que necesitas reemplazar y verificamos compatibilidad sin costo.',
      btnLabel: 'Cotizar por WhatsApp',
      waMessage: 'Hola, necesito cotizar el sistema de mangueras para mi inmueble',
    },
  },
  'senalamientos': {
    id: 'senalamientos',
    header: {
      eyebrow: 'Guía por tipo de inmueble',
      titleLine1: 'Cada Espacio Tiene sus',
      titleLine2: 'Señales Obligatorias',
      desc: 'Una oficina, un restaurante, una nave industrial y un edificio tienen requerimientos normativos distintos.',
      bodyPara1: 'No todos los inmuebles necesitan las mismas señales. La NOM-003-SEGOB, la NOM-026-STPS y la NOM-017-STPS definen requerimientos distintos según el tipo de espacio, los riesgos presentes y el número de personas. Comprar señalamientos sin hacer este análisis genera gasto innecesario o, peor, inspección fallida. Te hacemos el levantamiento gratuito con plano de señalización.',
    },
    gridAria: 'Guía de señalización por tipo de inmueble',
    cardCta: 'Cotizar para este espacio',
    escenarios: [
  {
    num: '01',
    tipo: 'Oficina / negocio comercial',
    norma: 'NOM-003-SEGOB',
    necesitas: 'Rutas de evacuación, salidas de emergencia, punto de reunión exterior, ubicación de extintores y señal de no fumar en áreas de riesgo.',
    porque: 'Protección Civil no emite dictamen favorable sin señalización mínima. Para locales con acceso al público, las señales fotoluminiscentes son obligatorias en rutas y salidas. Sin ellas, no abres.',
    href: waUrl('Hola, necesito señalamientos para mi oficina o negocio'),
    img: '/imagenes/escenarios/oficina.avif',
    imgAlt: 'Oficina con señalamientos de evacuación y punto de reunión certificados NOM',
  },
  {
    num: '02',
    tipo: 'Restaurante / cocina industrial',
    norma: 'NOM-003-SEGOB · NOM-002-STPS',
    necesitas: 'Evacuación + salida de emergencia + zona gas LP + no fumar + señal de extintor Tipo K bajo campana + ruta separada cocina.',
    porque: 'Las cocinas tienen riesgo clase B y gas LP — la STPS y Protección Civil verifican señalización específica por zona. Un restaurante sin señal de extintor Tipo K y zona de gas LP no pasa inspección.',
    href: waUrl('Hola, necesito señalamientos para restaurante o cocina industrial'),
    img: '/imagenes/escenarios/cocina.avif',
    imgAlt: 'Restaurante con señalamientos NOM de extintor Tipo K y ruta de evacuación',
  },
  {
    num: '03',
    tipo: 'Nave industrial / almacén',
    norma: 'NOM-026-STPS · NOM-017-STPS · NOM-003-SEGOB',
    necesitas: 'EPP obligatorio por área (casco, lentes, calzado, guantes) + advertencia eléctrica + advertencia de químicos + evacuación industrial + no fumar en toda la nave.',
    porque: 'La STPS verifica señalización de EPP obligatorio por zona de riesgo. El incumplimiento genera multa directa. Una nave con señalización incompleta es la primera observación en cualquier inspección.',
    href: waUrl('Hola, necesito señalamientos para planta industrial o almacén'),
    img: '/imagenes/escenarios/industrial.avif',
    imgAlt: 'Nave industrial con señalamientos de obligación EPP y advertencia certificados',
  },
  {
    num: '04',
    tipo: 'Edificio corporativo / multi-piso',
    norma: 'NOM-003-SEGOB · NFPA 101',
    necesitas: 'Fotoluminiscentes en cada piso + rutas en corredores y escaleras + salida de emergencia + punto de reunión exterior + señales internas en sala de máquinas.',
    porque: 'Edificios de más de 2 pisos requieren fotoluminiscentes en cada nivel. En una emergencia nocturna con corte de luz, son el único sistema de guía sin electricidad — la vida de los ocupantes depende de ellos.',
    href: waUrl('Hola, necesito señalamientos para edificio de oficinas multi-piso'),
    img: '/imagenes/escenarios/data-center.avif',
    imgAlt: 'Edificio corporativo con señalamientos fotoluminiscentes en escaleras y corredores',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
      strongHtml: '¿No sabes cuántos señalamientos necesitas?',
      spanHtml: 'Levantamiento gratuito — te entregamos plano con ubicaciones y cantidad exacta.',
      btnLabel: 'Levantamiento gratuito',
      waMessage: 'Hola, necesito un levantamiento de señalización para mi inmueble',
    },
  },
  'sistemas': {
    id: 'sistemas',
    header: {
      eyebrow: 'Guía por tipo de inmueble',
      titleLine1: '¿Qué Sistema Necesita',
      titleLine2: 'Tu Inmueble?',
      desc: 'Bodega, oficina, restaurante o centro de datos — cada riesgo tiene su sistema. El sistema incorrecto puede activarse mal, no activarse, o causar más daño que el incendio mismo.',
      bodyPara1: 'No todos los inmuebles necesitan el mismo sistema. Una bodega con racks de almacenamiento tiene una carga de fuego completamente distinta a un corporativo de oficinas o a un cuarto de servidores. Hacemos diagnóstico gratuito del inmueble: evaluamos el riesgo, la normativa aplicable y el sistema más eficiente en costo-beneficio. Sin compromiso de compra.',
    },
    gridAria: 'Guía de sistemas contra incendio por tipo de inmueble',
    cardCta: 'Cotizar para este inmueble',
    escenarios: [
  {
    num: '01',
    tipo: 'Bodega / Nave industrial',
    norma: 'NFPA 13 · NFPA 20',
    subtitulo: 'Rociadores + Red Hidráulica',
    necesitas: [
      'Rociadores colgantes o upright según altura de rack',
      'Bomba eléctrica + diésel conforme a NFPA 20',
      'Cálculo hidráulico para zona más desfavorable',
      'Toma siamesa en fachada para bomberos',
    ],
    porque: 'Las bodegas son el riesgo más alto: carga de fuego elevada, poca supervisión y distancias largas. NFPA 13 exige rociadores automáticos cuando la carga de fuego supera ciertos umbrales o el área supera 300 m². La red hidráulica debe proveer la presión y el caudal para activar simultáneamente la zona más desfavorable.',
    href: waUrl('Hola, necesito sistema de rociadores y red hidráulica para bodega o nave industrial'),
    img: '/imagenes/sistemas/rociadores.jpg',
    imgAlt: 'Sistema de rociadores automáticos NFPA 13 en nave industrial',
  },
  {
    num: '02',
    tipo: 'Edificio de oficinas / Corporativo',
    norma: 'NFPA 72 · NFPA 13',
    subtitulo: 'Alarma Direccionable + Rociadores',
    necesitas: [
      'Tablero analógico-direccionable UL864',
      'Detectores fotoeléctricos por zona exacta',
      'Rociadores ocultos temperatura 57°C',
      'Monitoreo remoto 24/7 con notificación',
    ],
    porque: 'Un edificio corporativo necesita identificación exacta de zona y evacuación controlada por piso. El tablero FACP recibe la señal del detector, identifica exactamente dónde está el fuego, activa la alarma sonora y envía alerta a monitoreo remoto — todo en segundos. Los rociadores en oficinas usan temperatura 57°C estándar.',
    href: waUrl('Hola, necesito sistema de alarma direccionable y rociadores para edificio corporativo'),
    img: '/imagenes/sistemas/alarmas.jpg',
    imgAlt: 'Tablero FACP y sistema de alarma contra incendio direccionable en edificio de oficinas',
  },
  {
    num: '03',
    tipo: 'Restaurante / Cocina industrial',
    norma: 'NFPA 96 · NFPA 17A',
    subtitulo: 'Sistema Campana + Detección en Cocina',
    necesitas: [
      'Sistema supresión química bajo campana (NFPA 96)',
      'Interlock con válvula de gas automático',
      'Detectores de calor fijo en zona de cocina',
      'Detectores fotoeléctricos en comedor y servicio',
    ],
    porque: 'Las cocinas industriales requieren un sistema específico: supresión química bajo la campana conforme a NFPA 96, más detección en el comedor. Un extintor Tipo K no es suficiente — el sistema de campana actúa automáticamente al detectar calor excesivo y corta el gas simultáneamente, evitando reignición.',
    href: waUrl('Hola, necesito sistema contra incendio para cocina industrial o restaurante'),
    img: '/imagenes/sistemas/detectores.jpg',
    imgAlt: 'Sistema de supresión química bajo campana NFPA 96 en cocina industrial',
  },
  {
    num: '04',
    tipo: 'Centro de datos / Cuarto de servidores',
    norma: 'NFPA 75 · NFPA 2001',
    subtitulo: 'Agente Limpio + Detección Muy Temprana',
    necesitas: [
      'Detección VESDA — muy temprana sin falsos positivos',
      'Agente limpio FM-200 o Novec 1230 (NFPA 2001)',
      'Pre-acción para protección doble contra activación accidental',
      'Tablero dedicado con monitoreo remoto e integración BMS',
    ],
    porque: 'Los centros de datos no toleran agua. Un rociador activo destruye más equipo que el fuego mismo. La solución es agente limpio con detección muy temprana VESDA — detecta partículas de humo antes de que haya llama. El sistema actúa en segundos, suprime el fuego sin residuo y sin daño a los equipos.',
    href: waUrl('Hola, necesito sistema de agente limpio y detección VESDA para centro de datos'),
    img: '/imagenes/sistemas/tablero-control.jpg',
    imgAlt: 'Sistema de agente limpio FM-200 y detección VESDA para centro de datos',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
      strongHtml: '¿No sabes qué sistema necesita tu inmueble?',
      spanHtml: 'Diagnóstico técnico sin costo — evaluamos el riesgo, la normativa aplicable y el sistema correcto para tu caso.',
      btnLabel: 'Diagnóstico gratuito de mi inmueble',
      waMessage: 'Hola, necesito asesoría para el sistema contra incendio de mi inmueble. ¿Me pueden orientar sobre qué sistema necesito?',
    },
  },
  'primeros-auxilios': {
    id: 'primeros-auxilios',
    header: {
      eyebrow: 'Guía por tipo de empresa',
      titleLine1: '¿Qué Necesita',
      titleLine2: 'tu Empresa Según la NOM?',
      desc: 'NOM-030-STPS no es genérica — el tipo de botiquín, el DEA y el equipo adicional dependen del número de trabajadores y el tipo de riesgo.',
      bodyPara1: 'Una empresa con 30 empleados tiene requisitos distintos a una con 150, y una cocina industrial tiene riesgos que no contempla un botiquín de oficina. Comprar el botiquín incorrecto no solo genera incumplimiento ante la STPS — significa no tener el material adecuado cuando se necesita. Si tienes dudas, mándanos el número de trabajadores y el tipo de actividad por WhatsApp — te respondemos con la especificación exacta.',
    },
    gridAria: 'Guía de primeros auxilios por tipo de empresa',
    cardCta: 'Cotizar para mi empresa',
    escenarios: [
  {
    num: '01',
    tipo: 'Oficina / Empresa pequeña',
    norma: 'NOM-030-STPS Tipo A',
    subtitulo: 'Botiquín Tipo A + Capacitación Básica',
    necesitas: [
      'Botiquín tipo A con contenido NOM completo',
      'Visible y accesible en área de trabajo',
      'Resurtido anual con revisión de caducidades',
      'Capacitación básica de primeros auxilios (opcional)',
    ],
    porque: 'Para hasta 25 trabajadores. El botiquín tipo A incluye el contenido mínimo especificado por NOM-030-STPS. La diferencia entre tenerlo bien abastecido y tenerlo vacío puede ser la diferencia entre una herida menor manejada en sitio y una salida al hospital.',
    href: waUrl('Hola, necesito botiquín tipo A para oficina o empresa pequeña según NOM-030-STPS'),
    img: '/imagenes/primeros-auxilios/botiquines-hero.jpg',
    imgAlt: 'Botiquín de primeros auxilios tipo A certificado NOM-030-STPS para oficina',
  },
  {
    num: '02',
    tipo: 'Empresa mediana / 26–100 trabajadores',
    norma: 'NOM-030-STPS Tipo B',
    subtitulo: 'Botiquín Tipo B + DEA + Brigada',
    necesitas: [
      'Botiquín tipo B con contenido ampliado NOM',
      'DEA automático con voz guía en español',
      'Gabinete DEA mural con alarma de apertura',
      'Capacitación brigada con constancia DC-3 STPS',
    ],
    porque: 'Para 26 a 100 trabajadores. En este rango, se recomienda un desfibrilador DEA accesible a no más de 3 minutos de cualquier puesto de trabajo — el tiempo de respuesta ante un paro cardíaco hace la diferencia entre la vida y la muerte. Con capacitación DC-3, tu brigada puede usar el DEA sin entrenamiento médico.',
    href: waUrl('Hola, necesito botiquín tipo B, DEA y capacitación para empresa mediana'),
    img: '/imagenes/primeros-auxilios/botiquin.jpg',
    imgAlt: 'Botiquín tipo B y desfibrilador DEA para empresa mediana con brigada capacitada',
  },
  {
    num: '03',
    tipo: 'Planta industrial / +100 trabajadores',
    norma: 'NOM-030-STPS Tipo C',
    subtitulo: 'Botiquín Tipo C + Camillas + Equipo Completo',
    necesitas: [
      'Botiquín tipo C con contenido completo NOM',
      'Camilla rígida tipo Miller para trauma espinal',
      'Collarines cervicales tallas S, M, L, XL',
      'Equipos de atención múltiple por zona de riesgo',
    ],
    porque: 'Para más de 100 trabajadores o instalaciones con riesgo de trauma físico (plantas industriales, almacenes, construcción). El objetivo es estabilizar al trabajador lesionado hasta que llegue la ambulancia sin agravar la lesión. Un collarín mal aplicado puede convertir una lesión recuperable en una parálisis.',
    href: waUrl('Hola, necesito equipo completo de primeros auxilios para planta industrial con más de 100 trabajadores'),
    img: '/imagenes/primeros-auxilios/camillas.jpg',
    imgAlt: 'Camilla de trauma y equipo de primeros auxilios tipo C para planta industrial',
  },
  {
    num: '04',
    tipo: 'Restaurante / Cocina industrial',
    norma: 'NOM-030-STPS + Quemaduras',
    subtitulo: 'Botiquín Especializado en Quemaduras',
    necesitas: [
      'Apósitos especializados para quemaduras',
      'Cobertura de silicona no adherente',
      'Material para quemaduras de 2° grado',
      'Guantes de nitrilo XL para personal de cocina',
    ],
    porque: 'Las cocinas industriales tienen riesgos específicos que el botiquín estándar no cubre: quemaduras por aceite a alta temperatura, cortes profundos y resbalones. El botiquín para cocina debe incluir apósitos especializados — no los mismos productos que para una oficina. El aceite a 180°C genera quemaduras de segundo grado en segundos.',
    href: waUrl('Hola, necesito botiquín especializado en quemaduras para cocina industrial o restaurante'),
    img: '/imagenes/primeros-auxilios/collarin.jpg',
    imgAlt: 'Botiquín especializado en quemaduras para cocina industrial con apósitos de silicona',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
      strongHtml: '¿Necesitas verificar si tu empresa cumple con la NOM-030-STPS?',
      spanHtml: 'Revisamos tu situación y te decimos qué tipo de botiquín necesitas, cuántos, dónde colocarlos y qué documentación presentar ante STPS.',
      btnLabel: 'Verificar cumplimiento de mi empresa',
      waMessage: 'Hola, necesito asesoría sobre equipo de primeros auxilios para mi empresa. ¿Qué necesito según el número de trabajadores?',
    },
  },
  'equipo-seguridad': {
    id: 'equipo-seguridad',
    header: {
      eyebrow: 'Guía por tipo de industria',
      titleLine1: 'El EPP Incorrecto No Es Solo Incumplimiento —',
      titleLine2: 'Es un Riesgo Real para el Trabajador',
      desc: 'Un guante de cuero en trabajo eléctrico. Un chaleco clase 2 en autopista nocturna. Un casco sin certificación en obra. Cada contexto exige el equipo específico.',
      bodyPara1: 'El error más común en EPP es comprar equipo genérico para todos los puestos. La NOM-017-STPS no acepta eso: exige análisis de riesgo por puesto y EPP seleccionado específicamente para los riesgos identificados. Hacemos la selección técnica por puesto de trabajo: identificamos los riesgos, determinamos el EPP correcto, especificamos la norma aplicable y entregamos el programa documentado para tus expedientes STPS.',
    },
    gridAria: 'Guía de EPP por tipo de industria',
    cardCta: 'Cotizar EPP para este riesgo',
    escenarios: [
  {
    num: '01',
    tipo: 'Construcción / Obra civil',
    norma: 'NOM-017-STPS',
    subtitulo: 'EPP Completo para Obra',
    necesitas: [
      'Casco clase G con suspensión 6 puntos',
      'Lentes de seguridad policarbonato ANSI Z87',
      'Tapones auditivos NRR 29 dB',
      'Calzado casquillo acero + antiperforación',
    ],
    porque: 'En obra civil el riesgo es múltiple: impacto en cabeza, partículas en ojos, ruido de maquinaria, riesgo de caída y calzado inadecuado para superficies irregulares. El EPP mínimo para obra incluye casco clase G, lentes, tapones auditivos, calzado con casquillo y arnés para trabajos superiores a 1.80 m.',
    href: waUrl('Hola, necesito EPP completo para obra civil o construcción según NOM-017-STPS'),
    img: '/imagenes/equipo-seguridad/cascos.jpg',
    imgAlt: 'EPP completo para obra civil: casco clase G, lentes de seguridad y calzado con casquillo',
  },
  {
    num: '02',
    tipo: 'Planta industrial / Manufactura',
    norma: 'NOM-017-STPS · NOM-011-STPS',
    subtitulo: 'EPP por Puesto de Trabajo',
    necesitas: [
      'Diagnóstico de riesgo por puesto de trabajo',
      'EPP específico por tipo de riesgo identificado',
      'Programa de EPP con lista y asignación por puesto',
      'Documentación para expediente STPS',
    ],
    porque: 'En plantas industriales cada puesto tiene riesgos distintos: el operador de prensa no necesita el mismo EPP que el técnico de mantenimiento eléctrico. La NOM-017-STPS exige análisis de riesgo por puesto. El programa de EPP documentado es lo que verifica la STPS en auditorías — no solo que el equipo exista.',
    href: waUrl('Hola, necesito diagnóstico y programa de EPP por puesto de trabajo para planta industrial'),
    img: '/imagenes/equipo-seguridad/equipos-seguridad-hero.jpg',
    imgAlt: 'EPP por puesto de trabajo en planta industrial con programa documentado NOM-017-STPS',
  },
  {
    num: '03',
    tipo: 'Obras viales / Trabajo exterior',
    norma: 'ANSI 107 · NOM-017-STPS',
    subtitulo: 'Alta Visibilidad y Protección Climática',
    necesitas: [
      'Chaleco reflectivo clase 2 — operaciones generales',
      'Chaleco clase 3 — vialidades de alta velocidad',
      'Overall FR alta visibilidad — zonas de arco eléctrico',
      'Impermeable reflectivo para trabajo nocturno',
    ],
    porque: 'Para trabajo en vialidades, patios de logística, aeropuertos y áreas donde circula maquinaria, la visibilidad del trabajador es crítica. Los chalecos clase 2 (fondo de día) y clase 3 (máxima visibilidad) siguen ANSI 107. La diferencia entre clase 2 y 3 puede ser la diferencia entre ser visto y no serlo.',
    href: waUrl('Hola, necesito EPP de alta visibilidad para obra vial o trabajo exterior'),
    img: '/imagenes/equipo-seguridad/chalecos.jpg',
    imgAlt: 'Chaleco reflectivo de alta visibilidad clase 3 ANSI 107 para obras viales',
  },
  {
    num: '04',
    tipo: 'Mantenimiento eléctrico / Alta tensión',
    norma: 'NOM-029-STPS · NFPA 70E',
    subtitulo: 'EPP para Riesgo Eléctrico',
    necesitas: [
      'Casco clase E — hasta 20,000V',
      'Guante dieléctrico clase 0–4 según voltaje',
      'Calzado EH sin partes metálicas conductoras',
      'Ropa FR con calificación ATPV para arco eléctrico',
    ],
    porque: 'El trabajo eléctrico requiere EPP específico que no puede sustituirse con equipo genérico. El guante dieléctrico tiene clase según el voltaje de trabajo. Para arco eléctrico, la ropa debe ser FR (flame resistant) con la calificación ATPV en cal/cm² suficiente para el nivel de energía del sistema. Un guante de cuero genérico no protege.',
    href: waUrl('Hola, necesito EPP para riesgo eléctrico y mantenimiento de alta tensión según NOM-029-STPS'),
    img: '/imagenes/equipo-seguridad/tapones-auditivos.jpg',
    imgAlt: 'EPP para riesgo eléctrico: guante dieléctrico, casco clase E y ropa FR NFPA 70E',
  },
],
    ctaBar: {
      iconSvg: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      strongHtml: '¿Necesitas EPP con diagnóstico de riesgo por puesto?',
      spanHtml: 'Analizamos los puestos de tu empresa, determinamos el EPP correcto para cada riesgo y entregamos el programa documentado para STPS.',
      btnLabel: 'Diagnóstico EPP por puesto de trabajo',
      waMessage: 'Hola, necesito asesoría para seleccionar el EPP correcto para los puestos de trabajo de mi empresa',
    },
  },
}
