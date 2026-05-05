// ─────────────────────────────────────────────────────────────────────────────
// src/lib/seo.ts
// Fuente única de verdad para SEO: JSON-LD LocalBusiness, WebSite y FAQs globales.
// Importar desde layouts y páginas para garantizar consistencia entre contenido
// visible y datos estructurados (lo que Google evalúa para rich results).
// ─────────────────────────────────────────────────────────────────────────────

import { SITE, CONTACT } from '../config/site';

/** URL absoluta del sitio sin barra final */
const origin = SITE.url.replace(/\/$/, '');

// ─────────────────────────────────────────────────────────────────────────────
// LocalBusiness — global, va en todas las páginas a nivel <head>.
// Usamos @type "LocalBusiness" (tipo válido Schema.org) y additionalType para
// clasificar la actividad en terminología comercial. Esto evita el error de
// usar "FireProtectionEquipmentSupplier" (tipo inventado, no reconocido).
// ─────────────────────────────────────────────────────────────────────────────
export const localBusinessLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${origin}/#business`,
  additionalType: 'https://www.wikidata.org/wiki/Q1099680', // Fire safety (concept de Wikidata)
  name: SITE.name,
  alternateName: 'ProyectoRed',
  description: SITE.description,
  url: `${origin}/`,
  logo: `${origin}/imagenes/logos/equipo-contra-incendios.jpg`,
  image: `${origin}/imagenes/og/proyectored-og.jpg`,
  telephone: `+52${CONTACT.phoneRaw}`,
  email: CONTACT.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Paseo de la Reforma 26',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    postalCode: '06600',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.4326,
    longitude: -99.1332,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'State', name: 'Estado de México' },
    { '@type': 'State', name: 'Querétaro' },
    { '@type': 'State', name: 'Puebla' },
    { '@type': 'State', name: 'Aguascalientes' },
    { '@type': 'State', name: 'Baja California' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Equipos contra incendios y seguridad industrial',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Extintores certificados NOM-154-SCFI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Equipo para bomberos NFPA 1971' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Señalamientos NOM-003-SEGOB / NOM-026-STPS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Gabinetes y porta extintores' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Mangueras y herrajes contra incendio' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sistemas contra incendio NFPA 13 / 72 / 20' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Botiquines y primeros auxilios STPS' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Equipo de seguridad industrial NOM-017-STPS' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/proyectored',
    'https://www.instagram.com/proyectored',
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// WebSite — habilita el search box en resultados de Google (sitelinks).
// Solo debe emitirse en la home.
// ─────────────────────────────────────────────────────────────────────────────
export const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${origin}/#website`,
  name: SITE.name,
  url: `${origin}/`,
  inLanguage: 'es-MX',
  publisher: { '@id': `${origin}/#business` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${origin}/blog/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FAQs globales — UNA sola fuente para el componente visible y el JSON-LD.
// Regla de Google: el contenido mostrado al usuario debe coincidir con el
// JSON-LD FAQPage, sin HTML de estilo en las respuestas del schema.
// ─────────────────────────────────────────────────────────────────────────────
export interface FaqItem {
  pregunta: string;
  /** HTML permitido para la versión visible (se limpia automáticamente para JSON-LD) */
  respuesta: string;
}

export const FAQS_GLOBALES: FaqItem[] = [
  {
    pregunta: '¿Cuánto cuesta un extintor certificado NOM-154 en CDMX?',
    respuesta:
      'Depende del agente y la capacidad. Un <strong>extintor de polvo seco ABC de 4,5 kg</strong> —el más común para oficinas, comercios y bodegas— arranca en <strong>$450 MXN</strong> con certificado NOM-154-SCFI incluido. Un <strong>CO₂ de 4,5 kg</strong> para tableros y equipo electrónico ronda los <strong>$1,200–$1,500 MXN</strong>; un <strong>Tipo K de 6 L</strong> para cocina industrial, entre <strong>$1,800 y $2,400 MXN</strong>; y un <strong>Agente Limpio HFC-227ea de 5 kg</strong> para centros de datos, desde <strong>$3,900 MXN</strong>. Mándanos por WhatsApp tipo y cantidad y cotizamos con precio real ese mismo día — con ficha técnica y etiqueta de inspección.',
  },
  {
    pregunta: '¿Cuánto tiempo dura cargado un extintor y cada cuánto se recarga?',
    respuesta:
      'La <strong>carga de un extintor dura entre 5 y 12 años</strong> según el agente, pero la <strong>NOM-154-SCFI exige servicio de mantenimiento y recarga anual</strong> y <strong>prueba hidrostática cada 5 años</strong> para cilindros de alta presión (CO₂, agua, AFFF) y cada 12 años para PQS. Si un extintor se disparó, aunque haya sido poco, se recarga completo. Hacemos recarga en sitio o en nuestro taller en CDMX con collar de garantía, etiqueta de inspección vigente y reporte para tu expediente.',
  },
  {
    pregunta: '¿Cuál es la diferencia entre un extintor de PQS (polvo seco) y uno de CO₂?',
    respuesta:
      'El <strong>PQS (polvo químico seco ABC)</strong> sofoca fuegos de clase A (sólidos), B (líquidos) y C (energizados) — es el más versátil, el más económico y el que pide Protección Civil para oficinas y comercios comunes. Pero deja residuo que daña electrónica. El <strong>CO₂</strong> no deja residuo y desplaza oxígeno, ideal para tableros eléctricos, servidores y archivos delicados; no sirve para sólidos ardientes (clase A). Regla simple: si hay <strong>equipo eléctrico sensible</strong>, CO₂ o agente limpio; para <strong>todo lo demás</strong>, PQS ABC.',
  },
  {
    pregunta: '¿Qué equipos contra incendio exige Protección Civil para una empresa en CDMX?',
    respuesta:
      'La <strong>NOM-002-STPS-2010</strong> exige mínimo un extintor por cada 300 m² y uno por piso, ubicado a menos de 15 m del personal. La <strong>NOM-003-SEGOB-2011</strong> y la <strong>NOM-026-STPS-2008</strong> piden señalización fotoluminiscente para rutas de evacuación, salidas de emergencia, ubicación de extintores e hidrantes y punto de reunión. Para plantas industriales se suma la <strong>NOM-005-STPS</strong> (sustancias peligrosas), y si hay más de 3,000 m² o más de 2 niveles, Protección Civil puede solicitar detección y alarma NFPA 72 con tablero FACP. Hacemos diagnóstico técnico sin costo con el listado exacto de lo que aplica a tu giro.',
  },
  {
    pregunta: '¿Los extintores y equipos vienen con certificados y documentación para auditoría?',
    respuesta:
      'Sí. Todos los extintores cumplen <strong>NOM-154-SCFI</strong> y se entregan con <strong>ficha técnica, certificado de conformidad, garantía y etiqueta de inspección</strong>. Los sistemas contra incendio se entregan con memoria de cálculo NFPA y reporte de puesta en marcha. La señalización lleva constancia NOM-003-SEGOB. Si tu aseguradora, tu DRO o tu auditor de Protección Civil pide documentación específica (planos, bitácora, certificado de instalador), te la preparamos sin costo extra.',
  },
  {
    pregunta: '¿Hacen entrega el mismo día en CDMX y Estado de México?',
    respuesta:
      'Sí. Pedidos confirmados antes de las <strong>2 PM</strong> entran a ruta y se entregan el mismo día dentro de la <strong>zona metropolitana (CDMX y municipios del Edomex conurbados)</strong>. Para volúmenes grandes o rutas fuera de la ZMVM coordinamos entrega al siguiente día hábil. Enviamos también a Querétaro, Puebla, Aguascalientes y Baja California con paqueterías certificadas.',
  },
  {
    pregunta: '¿Qué señalamientos de emergencia son obligatorios por ley?',
    respuesta:
      'La <strong>NOM-003-SEGOB-2011</strong> y la <strong>NOM-026-STPS-2008</strong> exigen señales fotoluminiscentes de: <strong>rutas de evacuación</strong>, <strong>salidas de emergencia</strong>, <strong>no correr / no gritar / no empujar</strong>, <strong>ubicación de extintores e hidrantes</strong>, <strong>punto de reunión exterior</strong> y señales de prohibición en áreas con riesgo. El material debe ser fotoluminiscente certificado (visible durante un corte de energía). Entregamos levantamiento del inmueble, plano de señalización y colocación en sitio — todo listo para inspección de Protección Civil.',
  },
  {
    pregunta: '¿Manejan precios por volumen, crédito y facturación corporativa?',
    respuesta:
      'Sí. Operamos esquemas corporativos: <strong>precios escalonados por volumen</strong>, <strong>facturación electrónica CFDI</strong>, <strong>crédito a 30 días</strong> previa validación, <strong>entregas programadas</strong> a múltiples sucursales y <strong>contratos anuales de suministro y recarga</strong>. Emitimos factura timbrada al momento y armamos expedientes por sitio para clientes con varias plantas u oficinas. Pídenos un esquema a tu medida.',
  },
  {
    pregunta: '¿Cuánto tarda la instalación de un sistema contra incendio?',
    respuesta:
      'Un sistema de <strong>detección y alarma NFPA 72</strong> en oficina mediana se instala en <strong>1 a 3 días</strong>. Un sistema de <strong>rociadores NFPA 13</strong> en bodega o planta industrial toma <strong>1 a 4 semanas</strong> según metros cuadrados, zonificación y trazo de tubería. Una <strong>red hidráulica contra incendio NFPA 20</strong> con bomba y tablero puede tomar <strong>4 a 8 semanas</strong>. Hacemos visita técnica sin costo, memoria de cálculo y presupuesto exacto antes de arrancar — también nos coordinamos con tu DRO o proyectista.',
  },
];

/** Quita tags HTML de una cadena para el JSON-LD FAQPage */
const stripHtml = (html: string): string =>
  html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

/** Genera el JSON-LD FAQPage a partir de un array de FaqItem */
export function faqPageLd(faqs: FaqItem[] = FAQS_GLOBALES) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(f.respuesta),
      },
    })),
  };
}

/** Genera un BreadcrumbList a partir de una lista de { label, href } */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
export function breadcrumbLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${origin}${item.href.startsWith('/') ? item.href : '/' + item.href}` } : {}),
    })),
  };
}
