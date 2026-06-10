// ============================================================
// Contenido de heroes L2 por categoría — para HeroCategoria.astro
// Generado a partir de los antiguos Hero{Categoria}.astro (verbatim).
// ============================================================

export interface HeroCategoriaConfig {
  ariaLabel: string
  /** HTML del badge (texto plano permitido) */
  badge: string
  /** HTML del H1 — usa <br> y <span class="h1-accent"> */
  h1Html: string
  /** HTML del subtítulo (admite <strong>) */
  subHtml: string
  /** Párrafos SEO de la columna derecha (HTML) */
  rightHtml: string[]
}

export const HERO_CATEGORIAS: Record<string, HeroCategoriaConfig> = {
  'extintores': {
    ariaLabel: 'Venta de extintores contra incendios en CDMX',
    badge: '10 tipos · NOM-154-SCFI · CDMX y Edo. Méx',
    h1Html: 'Venta de <span class="h1-accent">Extintores</span><br> Contra Incendios',
    subHtml: '¿Tienes extintores vencidos, del tipo incorrecto o sin señalamiento? El agente incorrecto puede agravar el fuego en lugar de apagarlo. Extintor certificado NOM desde <strong>$450 MXN</strong> — asesoría técnica incluida y entrega el mismo día en CDMX.',
    rightHtml: [
      'Los extintores son la primera línea de defensa frente a un conato de incendio. Tener el tipo correcto, en la capacidad adecuada y con el mantenimiento al día es la diferencia entre un siniestro controlado en 30 segundos y una evacuación total con pérdidas materiales.',
      'En Proyecto Red vendemos extintores certificados NOM-154-SCFI para todos los tipos de fuego: polvo seco ABC, CO₂, AFFF espuma, Tipo K para cocinas, agente limpio, Cold Fire y automáticos. Cada unidad incluye ficha técnica, certificado de conformidad y soporte de pared. Proveedor directo — sin intermediarios.',
    ],
  },
  'bomberos': {
    ariaLabel: 'Venta de equipo profesional para bomberos certificado NFPA en México',
    badge: '5 categorías · NFPA 1971 · CDMX y Edo. Méx',
    h1Html: 'Equipo para <span class="h1-accent">Bomberos</span><br> Certificado NFPA',
    subHtml: '¿Tu brigada porta trajes sin inspección NFPA 1851 o el ERA lleva años sin prueba hidrostática? Un equipo fuera de norma puede costarle la vida al operador. Ensemble completo desde <strong>$18,000 MXN</strong> — certificaciones NFPA originales y asesoría técnica incluidas.',
    rightHtml: [
      'La vida de un bombero depende de cada componente de su equipo. Un traje estructural NFPA 1971 con sus tres capas de protección completas, un ERA con cilindro verificado y máscara panorámica sellada, herramientas de rescate certificadas para condiciones extremas — cada pieza tiene que funcionar en el momento crítico sin excepción.',
      'En Proyecto Red somos proveedor directo de equipo profesional para bomberos y brigadas industriales en México. Trabajamos con cuerpos municipales, brigadas de plantas petroquímicas, equipos de Protección Civil y cualquier organización que necesite equipar personal de respuesta a emergencias con certificación original del fabricante.',
    ],
  },
  'gabinetes': {
    ariaLabel: 'Gabinetes contra incendio certificados NOM en CDMX',
    badge: '4 tipos · Lámina cal. 20 · Vidrio templado · Instalación incluida',
    h1Html: 'Gabinetes Contra<br> <span class="h1-accent">Incendio</span> Certificados',
    subHtml: 'Desde <strong>$650 MXN</strong>. Lámina de acero calibre 20, pintura electrostática y vidrio templado 4 mm — el resguardo que Protección Civil exige para extintores en pasillos, plantas industriales y edificios con sistema de hidrantes.',
    rightHtml: [
      'Un extintor colgado de un bracket en un pasillo de alto tráfico es una observación esperando a materializarse. Protección Civil puede exigir gabinete cuando el extintor está expuesto a polvo, humedad, vandalismo o en zonas donde alguien podría retirarlo de su lugar. Para edificios con red hidráulica, el gabinete con manguera pre-conectada y válvula angular es obligatorio en cada toma según NFPA 14.',
      'En Proyecto Red suministramos cuatro soluciones: gabinete para extintor (empotrado o sobrepuesto), porta extintor con cenicero para lobbies, gabinete para bombero con manguera y hacha, y gabinete para hidrante con válvula angular. También instalamos — a la altura correcta y con el material de fijación adecuado para cada tipo de muro.',
    ],
  },
  'mangueras': {
    ariaLabel: 'Mangueras y herrajes contra incendio NFPA en CDMX',
    badge: '8 productos · NFPA 1961 · 1.5" a 4" · Proveedor directo',
    h1Html: 'Mangueras y <span class="h1-accent">Herrajes</span><br> Contra Incendio',
    subHtml: 'Sistema completo por piso desde <strong>$6,500 MXN</strong>. Manguera certificada NFPA 1961, chiflones, válvulas, adaptadores NST/Storz, carretes, toma siamesa y monitores — todo el sistema hidráulico de tu edificio en un solo proveedor.',
    rightHtml: [
      'Tu edificio tiene hidrantes pero la manguera lleva años sin prueba hidrostática. Los adaptadores no coinciden con los equipos del cuerpo de bomberos de tu municipio. El chiflón está oxidado. Todo eso es observación de Protección Civil y un sistema que falla justo cuando más lo necesitas. La NFPA 1962 exige prueba hidrostática anual de cada manguera — un solo fallo implica retiro inmediato de servicio.',
      'En Proyecto Red suministramos 8 líneas de producto para sistemas hidráulicos contra incendio: mangueras NFPA 1961 para hidrante, chiflones y boquillas NFPA 1964, válvulas de control, adaptadores NST y Storz, carretes porta manguera, toma siamesa, llaves spanner y monitores de alto caudal. Vendemos componentes sueltos o cotizamos el sistema completo piso por piso.',
    ],
  },
  'senalamientos': {
    ariaLabel: 'Señalamientos de emergencia certificados NOM en CDMX',
    badge: '6 categorías · NOM-003-SEGOB · Fotoluminiscentes',
    h1Html: 'Señalamientos de<br> <span class="h1-accent">Emergencia</span> Certificados',
    subHtml: 'Desde <strong>$35 MXN por pieza</strong>. Señalética fotoluminiscente que brilla 8+ horas sin electricidad — lo que Protección Civil exige para darte dictamen favorable. Levantamiento gratuito de tu inmueble con plano de señalización incluido.',
    rightHtml: [
      'Protección Civil no da dictamen favorable sin señalización completa. La NOM-003-SEGOB exige señalamientos fotoluminiscentes en todas las rutas de evacuación y salidas de emergencia — visibles durante 8 horas o más en oscuridad total, sin electricidad, sin baterías. Si tus señales son calcomanías impresas que no brillan en la oscuridad, no pasan la inspección.',
      'En Proyecto Red suministramos señalamientos fabricados en acrílico, PVC y vinilo con tintas UV-resistentes. Seis categorías: prohibición, obligación, advertencia, evacuación, fotoluminiscentes y personalizados. También hacemos el levantamiento del inmueble y el plano de señalización para que sepas exactamente qué necesitas y dónde va cada señal — sin adivinar, sin exceso, sin faltantes.',
    ],
  },
  'sistemas': {
    ariaLabel: 'Sistemas contra incendio certificados NFPA en CDMX',
    badge: 'NFPA 72 · 13 · 14 · 20 · Ingenieros certificados',
    h1Html: 'Sistemas Contra<br> <span class="h1-accent">Incendio</span> NFPA',
    subHtml: 'Desde <strong>$45,000 MXN instalado</strong>. Detección, alarma, rociadores y red hidráulica — diseño, instalación, cálculo hidráulico, planos para Protección Civil y expediente completo. Un solo proveedor para todo el sistema.',
    rightHtml: [
      'Tu bodega tiene detectores del 2011. El tablero de alarma no está conectado a monitoreo remoto. Cuando un rociador se activa, nadie sabe en qué zona. Todo eso es observación de Protección Civil — y riesgo real para tu operación. Un sistema contra incendio no depende de un solo componente: necesita detectores, tablero, rociadores, red hidráulica y alarma trabajando juntos.',
      'En Proyecto Red diseñamos, instalamos y damos mantenimiento a sistemas completos conforme a NFPA 72, 13, 14 y 20. Hacemos el cálculo hidráulico, los planos para Protección Civil, el comisionamiento y la documentación del expediente. Desde el primer detector hasta la bomba de agua — en un solo proveedor.',
    ],
  },
  'primeros-auxilios': {
    ariaLabel: 'Equipo de primeros auxilios certificado NOM en CDMX',
    badge: 'NOM-030-STPS · 5 líneas · Resurtido · Capacitación DC-3',
    h1Html: 'Equipo de<br> <span class="h1-accent">Primeros Auxilios</span>',
    subHtml: 'Botiquines <strong>NOM-030-STPS certificados</strong>, desfibriladores DEA, camillas, collarines y material de curación — suministro para empresas, plantas, restaurantes y brigadas. Resurtido periódico y capacitación con constancia DC-3 válida ante STPS.',
    rightHtml: [
      'Una empresa con el botiquín vacío o vencido, sin DEA accesible o sin personal capacitado tiene el mismo riesgo que una sin extintores — con la diferencia de que la STPS lo verifica en cada auditoría. La NOM-030-STPS exige botiquín con contenido certificado tipo A, B o C según el número de trabajadores, visible y accesible en todo momento.',
      'En Proyecto Red suministramos el equipo completo: botiquines con contenido NOM, DEA con instrucciones en español para uso por personal sin entrenamiento médico, camillas y collarines para brigadas. Y si necesitas que tu equipo esté realmente preparado, ofrecemos capacitación con constancia DC-3 válida ante STPS.',
    ],
  },
  'equipo-seguridad': {
    ariaLabel: 'Equipo de protección personal y seguridad industrial en CDMX',
    badge: 'NOM-017-STPS · ANSI · EN · 8 líneas de EPP',
    h1Html: 'Equipo de<br> <span class="h1-accent">Seguridad Industrial</span>',
    subHtml: 'Cascos, lentes, tapones auditivos, respiradores, guantes, calzado, arneses y ropa de protección — <strong>EPP certificado NOM-017-STPS</strong> para plantas industriales, construcción, brigadas y empresas. Selección técnica por tipo de riesgo, no solo por precio.',
    rightHtml: [
      'Comprar EPP sin verificar la norma aplicable es comprar protección en papel. Un casco sin certificación NOM puede verse igual que uno certificado pero no absorber el impacto correcto. Un respirador del tipo incorrecto puede filtrar partículas pero no vapores orgánicos. La NOM-017-STPS exige no solo que el EPP esté disponible, sino que sea el correcto para el riesgo específico de cada puesto de trabajo.',
      'En Proyecto Red hacemos la selección técnica por tipo de riesgo y puesto de trabajo — no vendemos el casco más barato sino el que cumple con la norma para tu aplicación. Entregamos ficha técnica, certificado de norma y especificación de cumplimiento para tus expedientes de STPS y el programa de EPP de tu empresa.',
    ],
  },
}
