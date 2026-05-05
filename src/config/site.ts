// ============================================================
// PROYECTO RED — Configuración global del sitio
// Un único lugar para cambiar datos que aparecen en múltiples páginas
// ============================================================

export const SITE = {
  name: 'Proyecto Red',
  tagline: 'Venta de equipos contra incendios en CDMX y Estado de México — NOM · NFPA',
  url: 'https://proyectored.com.mx',
  description: 'Proveedor directo de equipos contra incendios certificados NOM y NFPA. Extintores, señalamientos, sistemas CI, equipo para bomberos. Entrega en CDMX.',
  locale: 'es_MX',
} as const

// ============================================================
// ExactDN / EWWW.io — CDN de optimización de imágenes
// Convierte automáticamente a WebP/AVIF, comprime y sirve desde edge.
// ============================================================
export const CDN = {
  enabled: true,
  host: 'ewvydcs5uyw.exactdn.com',
  origin: 'proyectored.com.mx',
} as const

/**
 * Reescribe una ruta local de imagen a la URL de ExactDN.
 * Si CDN está desactivado o estamos en desarrollo, devuelve la ruta original.
 *
 * @param path  — ruta relativa desde /public (ej. '/imagenes/extintores/co2.jpg')
 * @param opts  — parámetros opcionales de ExactDN
 */
interface CdnOpts {
  w?: number
  h?: number
  quality?: number
  strip?: 'all'
  lossy?: 1
}

export function cdnUrl(path: string, opts: CdnOpts = {}): string {
  // Desactivar CDN en desarrollo local para que carguen archivos nuevos no subidos aún
  if (!CDN.enabled || import.meta.env.DEV) return path

  // Construir query params de ExactDN
  const params = new URLSearchParams()
  if (opts.w)       params.set('w', String(opts.w))
  if (opts.h)       params.set('h', String(opts.h))
  if (opts.quality)  params.set('quality', String(opts.quality))
  if (opts.strip)   params.set('strip', opts.strip)
  if (opts.lossy)   params.set('lossy', '1')

  const qs = params.toString()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `https://${CDN.host}${cleanPath}${qs ? `?${qs}` : ''}`
}

export const CONTACT = {
  phone: '56 2759 6245',
  phoneRaw: '5627596245',
  whatsapp: '525627596245',
  email: 'info@proyectored.com.mx',
  // Dirección principal — se mantiene para compat. Para mostrar todas las
  // sucursales (matriz + Edomex) usar BRANCHES.
  address: 'Paseo de la Reforma 26, Col. Juárez, Cuauhtémoc, CDMX 06600',
  mapsUrl: 'https://maps.google.com/?q=Paseo+de+la+Reforma+26+CDMX',

  // Fuente de verdad del horario — una sola variable
  schedule: {
    weekdays: 'Lun–Vie  8:00–18:00',
    saturday: 'Sáb  8:00–14:00',
    sunday:   'Dom  Solo urgencias',
    display:  'Lun–Vie 8:00–18:00',  // Para top bar (conciso)
    footer:   'Lun–Vie 8:00–18:00',  // Para footer (igual)
  },
} as const

// ============================================================
// SUCURSALES — fuente de verdad para footer y páginas de contacto
// Matriz CDMX + Sucursal Estado de México (Tlalnepantla).
// ============================================================
export const BRANCHES = [
  {
    id:       'matriz',
    label:    'Matriz CDMX',
    address:  'Paseo de la Reforma 26, Col. Juárez, Cuauhtémoc, CDMX 06600',
    mapsUrl:  'https://maps.google.com/?q=Paseo+de+la+Reforma+26+Col+Juárez+CDMX',
  },
  {
    id:       'edomex',
    label:    'Sucursal Estado de México',
    address:  'Av. Ayuntamiento 75, Centro, Tlalnepantla de Baz, Estado de México',
    mapsUrl:  'https://maps.google.com/?q=Av+Ayuntamiento+75+Centro+Tlalnepantla+de+Baz+Estado+de+México',
  },
] as const

// ============================================================
// Mensajes predefinidos de WhatsApp — segmentados por intención
// Cada mensaje pre-carga contexto para que el asesor entre en materia
// sin tener que pedir "¿qué busca?". Aumenta la calidad del lead.
// ============================================================
export const WA_MESSAGES = {
  // Genéricos
  default:    `Hola, necesito información sobre equipos contra incendios.`,
  cotizacion: `Hola, quiero solicitar una cotización de equipos contra incendios.`,

  // Por página de intención
  productos:  `Hola, estoy viendo el catálogo y quiero cotizar varios equipos.`,
  servicios:  `Hola, necesito información sobre servicios (recarga, mantenimiento o instalación).`,
  blog:       `Hola, leí un artículo de su blog y tengo una pregunta técnica.`,
  contacto:   `Hola, quiero cotizar equipo contra incendios y necesito atención personalizada.`,

  // Por categoría L2/L3 (cotización segmentada)
  extintores:       `Hola, necesito cotizar extintores certificados NOM-154. ¿Me ayudan con precios y disponibilidad?`,
  bomberos:         `Hola, necesito cotizar equipo para bomberos o brigadas (trajes, ERA, herramientas de rescate).`,
  senalamientos:    `Hola, necesito cotizar señalamientos de emergencia fotoluminiscentes y levantamiento.`,
  gabinetes:        `Hola, necesito cotizar gabinetes contra incendio (para extintor, bombero o hidrante).`,
  mangueras:        `Hola, necesito cotizar mangueras y herrajes contra incendio (chiflones, válvulas, siamesas).`,
  sistemas:         `Hola, necesito cotizar sistema contra incendio (alarma NFPA 72, rociadores o red hidráulica).`,
  primerosAuxilios: `Hola, necesito cotizar equipo de primeros auxilios (botiquín STPS, DEA, camilla).`,
  seguridadIndustrial: `Hola, necesito cotizar equipo de protección personal (EPP) para mi empresa.`,

  // Por servicio
  recarga:          `Hola, necesito servicio de recarga de extintores. ¿Pueden darme precio y fecha?`,
  mantenimiento:    `Hola, quiero una póliza anual de mantenimiento preventivo de extintores.`,
  pruebaHidrostatica: `Hola, necesito prueba hidrostática de extintores (NOM-154 cada 5 años).`,
  instalacion:      `Hola, necesito instalación de sistema contra incendio llave en mano.`,
  capacitacion:     `Hola, necesito capacitación de brigadas con constancia DC-3 válida ante STPS.`,
  asesoria:         `Hola, quiero agendar un diagnóstico técnico gratuito en mi inmueble.`,

  // Urgencia / emergencia
  urgente:          `Hola, necesito atención urgente de equipos contra incendio hoy.`,
  inspeccion:       `Hola, tengo inspección de Protección Civil próximamente y necesito cumplir con la normativa.`,
} as const

export function waUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

// Categorías de producto (fuente de verdad)
// href apunta al ancla del catálogo hasta que existan las páginas de Nivel 3
export const PRODUCT_CATEGORIES = [
  { slug: 'extintores',        label: 'Extintores',                    badge: 'NOM-154-SCFI', href: '/extintores/'        },
  { slug: 'equipo-bomberos',   label: 'Equipo para Bomberos',          badge: 'NFPA 1971',    href: '/equipo-bomberos/'   },
  { slug: 'senalamientos',     label: 'Señalamientos de Emergencia',   badge: 'NOM-003',      href: '/senalamientos/'     },
  { slug: 'gabinetes',         label: 'Gabinetes y Porta Extintores',  badge: null,           href: '/gabinetes/'         },
  { slug: 'mangueras',         label: 'Mangueras y Herrajes',          badge: null,           href: '/mangueras/'         },
  { slug: 'sistemas',          label: 'Sistemas Contra Incendio',      badge: 'NFPA 13/72',   href: '/sistemas/'          },
  { slug: 'primeros-auxilios', label: 'Primeros Auxilios',             badge: 'STPS',         href: '/primeros-auxilios/' },
  { slug: 'equipo-seguridad',  label: 'Equipo de Seguridad Industrial',badge: 'NOM-017',      href: '/equipo-seguridad/'  },
] as const

// Servicios (fuente de verdad)
export const SERVICES = [
  { id: 'venta-equipos',          label: 'Venta de Equipos',          desc: 'Catálogo completo certificado NOM y NFPA'          },
  { id: 'recarga-extintores',     label: 'Recarga de Extintores',     desc: 'Todos los tipos — collar de garantía incluido'      },
  { id: 'mantenimiento-preventivo', label: 'Mantenimiento Preventivo', desc: 'Pólizas anuales con reportes para auditorías'      },
  { id: 'instalacion-sistemas',   label: 'Instalación Sistemas CI',   desc: 'Detección, alarma y supresión llave en mano'        },
  { id: 'prueba-hidrostatica',    label: 'Prueba Hidrostática',       desc: 'Obligatoria cada 5 años — NOM-154-SCFI'             },
  { id: 'asesoria-tecnica',       label: 'Asesoría Técnica',          desc: 'Diagnóstico de tu instalación sin costo'            },
  { id: 'capacitacion',           label: 'Capacitación y Brigadas',   desc: 'Constancias DC-3 válidas ante STPS'                 },
  { id: 'senalizacion',           label: 'Señalización NOM',          desc: 'Instalación y plano para Protección Civil'          },
] as const

// Estados con cobertura
export const COVERAGE_STATES = [
  { slug: 'cdmx',            label: 'Ciudad de México',  type: 'operativo' as const },
  { slug: 'edomex',          label: 'Estado de México',  type: 'operativo' as const },
  { slug: 'queretaro',       label: 'Querétaro',         type: 'comercial' as const },
  { slug: 'puebla',          label: 'Puebla',            type: 'comercial' as const },
  { slug: 'aguascalientes',  label: 'Aguascalientes',    type: 'comercial' as const },
  { slug: 'baja-california', label: 'Baja California',   type: 'comercial' as const },
] as const

// Quick links (barra de accesos rápidos — idéntica en todas las páginas)
export const QUICK_LINKS = [
  { label: 'Nuestros Servicios',       desc: 'Venta, recarga, mantenimiento y más',         href: '/servicios/'                        },
  { label: 'Equipo para Bomberos',     desc: 'Trajes NFPA, ERA, herramientas de rescate',   href: '/equipo-bomberos/'                  },
  { label: 'Sistemas contra Incendio', desc: 'Alarmas, rociadores, redes hidráulicas',      href: '/sistemas/'                         },
  { label: 'Cotización Gratuita',      desc: 'Respuesta en menos de 24 horas',              href: waUrl(WA_MESSAGES.cotizacion), cta: true },
] as const
